# 《PMSM 定点/浮点FOC运算这件小事》| 13讲：抗饱和——定点版和浮点版同一策略下，实现复杂度的天差地别

原创 傅存敬 电磁散人 2026-04-28 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/gC-C5ifCx6iMdeoe5woYHw](https://mp.weixin.qq.com/s/gC-C5ifCx6iMdeoe5woYHw)

各位同仁，大家好。

[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)我们揪出了定点积分器的"量化死区"——当误差太小，积分器根本不动。今天我们看PI控制器的另一面：**当误差太大，积分器又不能无限涨**。这就是抗饱和（anti-windup）的故事。

有意思的是，这两件事——"太小不动"和"太大要拦"——在控制理论里竟然是同一类数学问题的两种表现。这个话我们放到文末再展开，先看代码。

* * *

## 水龙头和浴缸的故事

各位同仁，试想一下这个场景，你放洗澡水，浴缸快满了，于是你把水龙头关小了。但热水管道里还压着一段热水——水龙头虽然关了，管子里的余压还在往浴缸里挤水。如果你没有预判到这段"管道余量"，浴缸就溢出来了。

这就是积分饱和（integrator windup）在生活里的样子。PI控制器里的积分器就是那条管道——当PI的输出已经碰到了限幅上限（比如电压打满了），积分器如果还在傻乎乎地往上累加，它内部的状态就会涨到一个远超限幅的值。等到误差反向了，积分器要从这个"虚高"慢慢降回来，中间那段时间系统完全不受控。这叫"windup"——积分器"上了发条"，收不住了。

**抗饱和就是告诉积分器：老兄，输出已经打满了，你别再往上加了。**

* * *

# 两个版本用了同一套策略

我们今天要拆解的这段Embedded Coder生成的定点代码和浮点代码，用了**完全相同的抗饱和策略**——条件积分（conditional integration）。

策略的逻辑只有一句话：**如果PI输出已经饱和，且积分输入还在把它往饱和方向推——那就把积分增量置零，冻结积分器。**

反过来说：如果输出没饱和、或者积分输入在把它从饱和方向拉回来——那就正常积分，不干预。

用伪代码写，是这样的逻辑：

```
预饱和值 = P项 + 积分器状态
```

三步走：算超出量、判同号、决定冻不冻结。清清楚楚。

* * *

## 浮点版运算：逻辑透明，代码简洁

浮点版的Q轴抗饱和，把上面的伪代码几乎原样翻译成了C语言：

```
// 预饱和值
```

读起来和伪代码几乎一对一。相信各位同仁看着代码就能直接理解控制意图：什么时候冻结、什么时候放行。

* * *

## 定点版：同一个逻辑，翻了好几倍的工序

定点版做的是同一件事，但每一步都要在int16的框架里重新表达：

```
// 预饱和值 (int16, 带移位)
```

行数相差不多——但注意看，定点版运算的代码里**光是"提取符号"这一个操作就写了四行**。

浮点版运算的`sign(x)`就是一个 if-else 返回 \-1/0/+1，编译器可能直接用一条浮点比较指令搞定。定点版不行——因为 int16 没有现成的 sign 函数。

* * *

## 真正的差异不在行数，在可读性

如果咱们光数代码行数，定点版和浮点版的抗饱和部分其实差距没有Clark或Park那么夸张。定点十五六行，浮点二十行出头。

但可读性的差距是巨大的。

浮点版里，10.0就是10V，output就是电压，`> 10.0F`就是"超了10V"。每一行代码都能直接对应到物理含义。你站在旁边看一眼，就知道它在干什么。

定点版里，20480是什么？你得查表才知道是0.625×32768，对应10V/16V的归一化限幅。`(rtb_Sum1_l * 32149) >> 15`是什么？你得回到 [第12篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect) 确认32149是 Kp×4 的Q15编码。每一行都是数字和移位的堆砌，控制意图完全被埋在了编码细节里。

一个新来的工程师，看浮点版5分钟就能搞清楚抗饱和逻辑；看定点版——不拿着 [第12篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect) 的魔数表和Q格式追踪表比对着看，恐怕得花一个下午。

这种可读性差距在日常维护中会变成实实在在的成本。比如有一天系统需要把限幅值从10V改成12V。浮点版怎么改？把代码里的`10.0F`全局替换成`12.0F`——两分钟搞定，改完一目了然。定点版呢？你得先算出12V在当前Q格式下是多少（12/16 × 32768 = 24576），把20480换成24576，然后还得检查这个新值会不会让前后的Q格式对齐出问题、移位量要不要跟着调。一个限幅值的修改，牵出一串连锁反应。

这正是为什么我在 [第2篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486149&idx=1&sn=dc815508bae0ee9636247f5f783530b1&scene=21#wechat_redirect) 就说过：**定点生成代码天生难读，不是你的问题**。抗饱和这个例子更清楚地说明了——不是定点版做了什么浮点版没做的事，两者逻辑完全同构。差别仅仅在于：浮点代码用人话说了一遍，定点代码用机器话又说了一遍。修改浮点代码像改合同里的一个数字，修改定点代码像拆一台钟表——牵一发而动全身。

* * *

## 量化和饱和：同一类问题的两张面孔

最后说一个有意思的理论视角。

[上一篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)我们讲了量化死区——积分增量太小，被截断成零。这一篇我们讲了饱和限幅——积分器输出太大，被钳到上限。一个"太小"，一个"太大"，看起来是完全不同的两件事。

但在控制理论的框架里，它们是**同一类非线性**。

量化函数可以写成 ：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASV3UEbNN9K85XdXvp0l81XESFf4hSxx3n2NTic9BicA2b5AWcVvMLK7dKNzLl7aiabtGlsropibjoteDicvG42r5iba5Ul21JNe8B9s/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAScmKDWGibGaTctIjKN2C9v7S4M9DZhHy13Fia6rApANxJcwAiat2ExDXGjHo43Zib6mtIe9aBK5dfBgdm4z8Hv1w4y1BwjejlmkM8/640?wx_fmt=png&from=appmsg)

这是量化误差。而饱和函数可以写成：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASj9ORTufribhgia5dlSxjTia9KSRJMTReV7PrDjDXass5xGkibc3GeQLTceCPzicTM0HaicwWwyTQmPLQceibQgl1fnmDLO2MYG8yhpw/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARY2sLctEuibrM7XjLdcJVyeic8ZhdLiaNuk1BEeia0pHzZlczrZp2xuav0O62RTA17y30Fe0L5m5NqRxPyQkK9WiczQIgktU0aJjTA/640?wx_fmt=png&from=appmsg)

这是死区部分。两者的"误差项" φ 和 d 都满足同一个数学性质——**有界、扇区约束（sector-bounded）**。

Alsamadi等人2023年在IFAC上发表的工作\[1\]，正是从这个角度出发，把量化误差类比为饱和非线性，设计了一种"anti-windup-like"的补偿器来减小量化对闭环系统的影响。他们的做法是在控制器里加一个反馈回路，把量化误差 φ(u) 乘以一个增益矩阵反馈回去——和经典抗饱和补偿器的结构如出一辙。

这意味着什么？意味着**我们在 [第12篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect) 看到的量化死区问题、和这一篇看到的饱和windup问题，在数学上可以用同一套工具来分析和解决**。如果各位同仁掌握了经典抗饱和理论，那你就已经拿到了处理定点量化问题的一半工具箱。反过来，定点量化的实践经验也能帮你理解饱和控制的工程直觉。

这两件事看似不同，底层是一个故事。控制理论在这里展现了它美丽的一面。

* * *

**Simulink演示**

在simulink中搭建3条信号并行的运算路径，专门把“PI 抗饱和”这件事讲清楚。故意给 PI 一个很大的误差，让输出先顶到正限幅；然后误差突然反向，看控制器能不能快速从饱和里退出来。模型里的三条路径分别是：

-   Float\_PI\_AW（蓝色模块）：浮点版抗饱和 PI，用于表达“算法本身其实很直观”。
    
-   FixPt\_PI\_AW（绿色模块）：定点版抗饱和 PI，用于表达“同一个策略落到定点代码里会复杂很多”。
    
-   Float\_PI\_NoAW（橙色模块）：没有抗饱和的浮点 PI，作为反例，专门展示 windup 有多严重。
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASbzsWE1Q4rHnp9lfGd6cRDrVRSwykvemNyGGcP34Zu2tr8qldpm7AkibQ9rVeUfGEAMw43xI2EgNyp91zeuBmlRe49oo9Df7kQ/640?wx_fmt=png&from=appmsg)

黄色背景的 Error\_Stimulus 负责给定指令。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQUIsGueibwJjJLPyN74ZxdShJYcELeTricmQrvSaZvVJYg5YgvbtgCuQxqvxVEKdFVChHwXJhDEhzCeHJicJIPS3X1q39TA4YYvk/640?wx_fmt=png&from=appmsg)

它生成一段误差信号：

-   0-0.02s：误差为 0，系统安静。
    
-   0.02-0.08s：误差为 +12000，把 PI 推到正饱和。
    
-   0.08-0.14s：误差变成 -12000，考验能不能快速反向。
    
-   0.14s 以后：误差回到 0，看积分器还留下什么状态。
    

Float\_PI\_AW 子系统是标准的带抗饱和功能的浮点运算PI模型，它做的事情很清楚：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQos2xf5KEpwUZ6y6uMmvoAraEqrRsPw5Xgk39dribXJFCDn3guU7lSLJIgMLdqBELxr0K9pEL9jF7aO2B91ErmPb0TAbR8Apbg/640?wx_fmt=png&from=appmsg)

FixPt\_PI\_AW 是定点版算法，它和浮点版做同一件事，但实现方式变复杂了：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQxA1L0shh6VPgmmWrH0WZR7m2Yf7Km78FBrALuLy8u7LPqbRGQBjCRm84su4pOUTLQsyymjYNicqSqMaD4nt3ggcQOHZ2JfaoY/640?wx_fmt=png&from=appmsg)

Float\_PI\_NoAW 是反面教材。它没有 freeze 逻辑，输出饱和以后积分器还继续累加。结果就是：表面上输出卡在限幅，但里面的积分器已经越滚越大，等误差反向时，它一时半会儿回不来。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQ2qrNMECJicibVB4FZfy339icYJDwFq7mNhqfJAkmxRiariaFO20lgultabEeQm7rsSXoJAI4qiazYDz8QPibucsKcBHxWiaGANy3ibILU/640?wx_fmt=png&from=appmsg)

我们看下仿真结果，首先看Scope\_Outputs，这张图看的是最终 PI 输出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATJsML5LFBTxgKC2rvib38biaINuXEX3ECzdazALhd4A4dPibtx8aVJ3Gky62PMEycibjVjBtMDyxD53RocsRrjVsInat8L7G3rXg4/640?wx_fmt=png&from=appmsg)

黄色信号和蓝色信号(几乎)重合，说明浮点 AW 和定点 AW 的控制效果一致。而且不带抗饱和功能的PI反应明显要慢很多。

我们再看Scope\_Integrator， 这是积分器内部状态：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASBHnmQ9JwY3fvmicXtjo2lTWTUxL1H9O6BU8NKud6u3meuLC8FedD8CTcMKFuaIRSyAo1lzticIKMicQDTncKbqzJ6UwIwJlrMvM/640?wx_fmt=png&from=appmsg)

这里最关键的一点是：橙色的没有抗饱和功能的积分项一路冲到几十万 counts，而带有抗饱和功能的积分项（蓝线与黄线）两条线只在一小段范围内变化。也就是说，抗饱和真正保护的是积分器，不让它在输出已经被限幅时继续瞎累加。

上文中提到的代码判断逻辑是：

```
excess != 0 && sign(excess) == sign(integrand)
```

浮点版代码写起来简单，定点版代码实现起来绕，但二者最后行为一致。

最后来看 Scope\_Excess ，这是3条计算路径的PI调节器超出限幅的量。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATFLCA0AlgAKxoibrHdG155ibQSCCjjFCe3kmljRsJBEKxrCvGkxwqm757VQEv7dweEEG0WP1RLg9K7jhib3PmJHrJ8LrDxW8LY6M/640?wx_fmt=png&from=appmsg)

没有抗饱和功能的PI调节器输出（橙线）的超出限幅值很大，说明内部 preSat 已经远远超过限幅，只是输出被 Saturation  压住了。而带有抗饱和功能（无论是定点计算还是浮点计算）的PI调节器输出（黄线和蓝线）的超出限幅值贴近 0 轴附近，说明它及时冻结积分，没有让内部状态继续失控。这一点可以从 Freeze ,也就是触发抗饱和信号的曲线看出来：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAT7fhkUaaWpzibsBnyBuC4Wcl4SMuxDibjBdolX8nnhcqPCyK2QWxgB6v4najdicaTAJ3dGXwaD6IoVKyl6mkZGPLHKraXqQsribicA/640?wx_fmt=png&from=appmsg)

总之，抗饱和并不是让输出“不饱和”，而是输出饱和时别让积分器继续犯错；浮点版运算表达清楚，定点版运算实现复杂，但两者可以做到同样的控制效果。

* * *

## 本文小结

各位同仁，通过今天的这篇文章，我们知道了抗饱和的控制策略在定点和浮点两个版本里完全一致——都是条件积分：输出饱和时如果积分还在往饱和方向推就冻结、否则放行。代码行数差异不大，但可读性差距巨大：浮点版里10.0就是10V，读码就是读控制策略；定点版里类似 20480 这样的魔数，要去查表才知道它是限幅值，每一行都在和编码细节搏斗。不过更有意思的发现是——[上一篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect) 讲的量化死区（太小被截）和这一篇讲的饱和限幅（太大被钳），在控制理论里竟然是同一类有界非线性的两种表现形式，可以用同一套anti-windup框架来分析和补偿。定点开发不光是在写代码，也在和控制理论深处的结构对话。

**下一篇我们进入FOC链的后半段——反Park变换和三相电压合成。实打实地跟着定点乘法链一级接一级，看一下精度究竟是怎么一点一点丢掉的。**

  

### 参考文献

\[1\] S. Alsamadi, F. Ferrante, and S. Tarbouriech, "Anti-windup-like compensator synthesis for discrete-time quantized control systems (extended version)," in _IFAC-PapersOnLine_, vol. 56, no. 2, pp. 556–561, 2023.

\[2\] M. Konghirun, L. Xu, and J. Skinner-Gray, "Quantization errors in digital motor control systems," in _Proc. IEEE Int. Conf. Electric Machines and Drives (IEMDC)_, Madison, WI, USA, 2003, pp. 1512–1517.

\[3\] ECE 5655/4655 Real-Time DSP, "Lecture 5: Fixed Point vs Floating Point," Course Materials.