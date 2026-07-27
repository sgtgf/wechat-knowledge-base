# 《PMSM 定点/浮点FOC运算这件小事》| 05讲：定点算力精炼指南：为什么浮点一行搞定的代码，定点要写得像天书？

原创 傅存敬 电磁散人 2026-04-16 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/WKzkm\_CL6usValj8tGAJBg](https://mp.weixin.qq.com/s/WKzkm_CL6usValj8tGAJBg)

各位同仁，大家好。

[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486177&idx=1&sn=948819bb60e37f1186a91480aab0232a&scene=21#wechat_redirect)我们知道了Q15×Q15=Q30，乘完之后得右移才能把格式"搬回来"。理论上应该右移15位，回到Q15。

但Clark变换的定点代码里写的是`>>12`——少移了3位。

这不是Embedded Coder写错了，而是一个精心设计过的选择。今天我们就来拆解这个选择背后的逻辑。

## 先讲一个倒水的故事

你面前有一个量杯，最大刻度1升。现在要完成一个任务：把A瓶里的0.6升水和B瓶里的0.5升水混在一起。

如果你先把A瓶的水全倒进量杯——0.6升，没问题。再把B瓶的水倒进去——0.6+0.5=1.1升。坏了，量杯只有1升的容量，水溢出来了。

怎么办？有两个思路。

**思路一：换个大杯子。** 拿一个2升的量杯来操作，倒完再把结果转移回1升的杯子（如果结果小于1升的话）。这相当于用32位中间变量来暂存16位运算的结果——Embedded Coder确实在这么做，乘法结果先存到int32里。

**思路二：先把A瓶的水倒掉一部分，再混合。** 比如先倒掉A瓶的一半（0.6变成0.3），再加B瓶的水（0.3+0.5=0.8），没溢出。最后再根据需要调整总量。这相当于先右移几位"压缩"一下数据，再做加减法。

实际的定点代码两种思路都用了。乘法用32位保护（思路一），加减法前先移位腾出空间（思路二）。而"移多少位"就是今天的核心话题。

* * *

## 把Clark变换的iα计算拆开看

定点版iα的完整代码是这一行：

```
*rty_i_alpha = (int16_T)((((int16_T)((21845 * rtu_i_a) >> 12) << 1) -
```

看着头疼，但别慌。我们一步步拆，每一步都追踪两个东西：**当前的Q格式是什么**、**数据的取值范围有多大**。

这就好比你开车上高速，既要看速度表（Q格式），也要看油量表（数据范围）。两个都盯住了，就不会翻车。

**第1步：**`**21845 * rtu_i_a**`

21845是Q15格式的2/3，rtu\_i\_a是Q15格式的电流值。Q15×Q15=Q30，结果存在32位整数里。

rtu\_i\_a的范围是\[-32768, 32767\]（int16的极限值），乘以21845，最大结果约为 32767 × 21845 ≈ 7.15 × 108，在int32的范围内，安全。

**第2步：**`**>> 12**`

右移12位，Q30变成Q18。为什么是右移12位而不是15位？

因为后面还有一步减法。如果这里直接移到Q15，移完之后数值范围压缩到了\[-32768, 32767\]。后面做减法时，如果被减数和减数的符号相反，差值可能超出这个范围——溢出了。

少移3位，结果保留在Q18格式，数值范围在int16里大约是\[-32768, 32767\]的八分之一区间。这样后面做减法时，就有了足够的"余量"不会溢出。

**第3步：**`**<< 1**`

左移1位，Q18变成Q19，数值乘以2。为什么要乘以2？因为Clark变换公式里iα的第一项系数是2/3，这里实际上是把运算拆成了两步来做——先乘以某个中间值，再乘以2——这样每一步的中间结果都不会超出int16范围。

**第4步：**`**(rtu_i_b + rtu_i_c) << 2**`

另一条运算支路。先把ib和ic相加（Q15+Q15=Q15），再左移2位变成Q17，数值乘以4。这一步同时完成了"缩放到合适范围"和"为后续乘法做准备"两件事。

**第5步：**`*** 21845 >> 14**`

Q17×Q15=Q32，右移14位变成Q18。注意这里又是右移14位而不是17位——同样是为了和另一条支路的Q19格式对齐（差1位，刚好对应前面那个左移1位的乘以2）。

**第6步：两条支路相减，**`**>> 2**`

Q19减Q18？格式不一样，不能直接减吧？其实可以——在这个特定的数值范围内，Embedded Coder判断结果不会溢出，所以它选择先做减法、后做格式调整。减完之后右移2位做最终归位。

最终结果存回int16，格式回到约Q15附近，可以交给后面的Park变换模块继续使用。

* * *

## 数据位宽流水线图

把上面的过程画成一张图，就是所谓的"数据位宽流水线"：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQMU1lnHzSqRmB2YWz8FEdicOr3mlXu8WLZWF9FOPt7OVVansXic12ndvWYae3UUuMNOQr09M58rJoNtn8e3M4OShw4NrPwgAKia8/640?wx_fmt=png&from=appmsg)

你看，每一次移位都不是随意的。右移12位、右移14位、左移1位、左移2位——每一个数字都是在保证"中间结果不溢出int16"的前提下，尽可能多保留精度的结果。

这就是所谓的**headroom（余量）管理**。就像那个倒水的例子——你得时刻知道杯子里还有多少空间，才能决定这一步倒多少水进去。

* * *

## 浮点版为什么不用操心这些

对比一下浮点版的Clark变换：

```
*rty_i_alpha = 0.666666687F * rtu_i_a - (rtu_i_b + rtu_i_c) * 0.333333343F;
```

一行搞定。没有移位，没有headroom，没有格式追踪。

为什么？

因为浮点数的指数部分会自动调整缩放因子。乘法结果变大了？指数自动增大。减法结果变小了？指数自动减小。整个过程CPU硬件帮你管了，你只管写数学公式就行。

这就是浮点运算"开发友好"的根源——不是它比定点"高级"，而是它把headroom管理这件苦差事从程序员手里接走了，交给了硬件。

那代价是什么？代价就是你的芯片得有FPU。而对于没有FPU的M3，这件苦差事只能由软件工程师（或者Embedded Coder）自己扛。

* * *

**Simulink演示**

在simulink的画布中搭建模型，从左到右划分三部分，分别是信号注入部分、核心算法部分和示波器。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASjV4shtWwx683pGv3IHGkJCBtAotBZxC2jicSzl0FFHicBOTMflNtxKYFObcuf8W9vfibuKHkib6BbqVicicEzLoj8Vc2lOyqADc5Zk/640?wx_fmt=png&from=appmsg)

信号注入部分：使用三个相位相差120度的的正弦波（Sine Wave模块）来模拟 ia，ib，ic，并在源头处使用 Data Type Conversion 模块，将浮点正弦波强制转为 int16 数据类型。

核心算法部分：设计了三个并行的 Subsystem ，同时去吃同样的三相电流信号，但采用不同的计算法则：

**支路 1：浮点理想参考组**

直接用浮点公式：rty\_i\_alpha = 0.666666687F \* rtu\_i\_a - (rtu\_i\_b + rtu\_i\_c) \* 0.333333343F 搭建模型。模拟“完美水杯”（永远不会溢出，且精度无穷大），为后面的定点数提供做差比较的基准。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATLJXKJDwAt7sXYkm37uGVQJgalYT0MoIwbwjGJlJSfuehZswmDufhibO3jxtWxcib8f7TraYq9kxQUot1dfwsjF98gqdJ3yMtao/640?wx_fmt=png&from=appmsg)

**支路 2：Embedded Coder 优化定点组**（右移12位）

用 Simulink 的可视化模块1：1的复现还原本系列[第1篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486137&idx=1&sn=f207043b0a7fbea6d3e4927b69a2b48e&scene=21#wechat_redirect)中那段冗长的C代码。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQrAlCeuCXtgoXqMn5GbxNEByO4pvMPo0Rbib2D86LK31JZA2j19698tKFWes4qhEFkeMfNvNz6adHt5TnqicwnrX3g4skYH71L8/640?wx_fmt=png&from=appmsg)

在Simulink的线条上开启了“Port Data Types”功能，这样各位同仁就能在连线上清晰地看到类型从 int16 变成 int32，经过移位后又变回 int16。这就把上文中抽象的流水线图，变成了可视化的模型信号流！

**支路 3：错误定点演示组**（看下如果直接右移15位会怎样？）

故意设计一个“想当然”的系统。也就是乘法 Q15 \* Q15 = Q30 之后，直接粗暴地 \>> 15，剥夺所有的 Headroom（留白余量）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATBRgnEdSHTLEyEju4M9y2pW9cQdYmmNAO2JGjgfic7tlUf2JLUetIgNEO6tDPjRqNAH7WEXrw0Cr2O4OI3Jv9psGneqibGqqf7k/640?wx_fmt=png&from=appmsg)

我们看下仿真结果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARMWQcovowSdMp8G1tRylROybnys4m7IDGndicCKJQ8XRn7GSBYfwb5joIORDibvJbuqdp0p0K35vAgb1WVJwD0Qhb2pfxrjsMJY/640?wx_fmt=png&from=appmsg)

宏观上看，定点运算和浮点运算的结果是殊途同归的，黄线（浮点运算版）、蓝线（右移12解码版）、橙线（粗暴右移15版）在 5000 幅值的宏观尺度下完美重合。至少证明了我们的**算法逻辑是绝对正确**的，无论底层怎么移位，我们最终把数据“翻译”回真实物理世界（也就是电流幅值 5000）时，大家都能转动电机。这是定点开发的第一步——**功能正确**。

但是我们放大了来看：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARCu4FADV07Dy6Do0qdBfGjC601ViatBrmB16rXXdvjmoI0SsgnDleJknZjribRNmWSUiaqZyxrSA035XNSjibmolA0Mnn3WBeSIj8/640?wx_fmt=png&from=appmsg)

橙线（粗暴右移15版）的台阶，明显要比蓝线（右移12解码版）的大。因为蓝线比橙线少右移了 2 位， 这少右移的 2 位，保住了它 **2 bit 的小数精度！** 我们把它除以 4（也就是乘以 0.25）解码回真实世界时，它的最小精度（LSB）由 1 变成了 1/22 = 0.25。 它的分辨率，**硬生生比橙色粗暴版提高了 4 倍！台阶细腻了 4 倍！**

再看绿色方波，它在 0.1、0.15、0.2 附近规律地跳动，这就是传说中的**量化噪声（Quantization Noise）**。因为定点数无论你留多少余量，它本质上都是拿“方块”去拼凑“圆滑的曲线”，方块的边角刮掉的就是这根绿线。

我们再看下支路二种的数据格式变化，类型如何从 int16 变成 int32，经过移位后又变回 int16。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATOHGpMibTI5rSQ0OXao6bv0HjDTjia3zKXF5JK1MiatLXib3FzPlmBrXlsPAehucD0xlhVUXmElB19vDNiaQQcicjpeMjJuwkqYCBhI/640?wx_fmt=png&from=appmsg)

以上，就是用Clark变换的计算为例，通过造物主视角看到的定点开发过程。

如果我们只图省事，定点计算时把变量无脑右移15位，电机能转吗？能转！但电机的电流波形全是巨大的马赛克阶梯！由于精度丢失，电机一定会发出刺耳的高频啸叫声。

而 Embedded Coder 自动生成的这句晦涩难懂的 \>>12 是什么艺术？

它不仅在不溢出的情况下完成了加减法，更是在最后仅仅右移 2 位归位，刻意把数据停留在了放大 4 倍的 Q13 格式上，肉眼可见的，蓝线（右移12解码版）与黄线（浮点运算版）的距离明显要小于橙线（粗暴右移15版）与黄线（浮点运算版）的距离。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASAqo3Wt6Icxk0vYdeqJpbtaIn1d2SFUEcUCm5cHHDTicE9uDgibfU0UXPrDGJvzibfdRELxSlLlBBUibPicicVxS2F0NNmRYvroWeCc/640?wx_fmt=png&from=appmsg)

代码把这个带着两路 **高精度小数位** 的计算结果，直接喂给了下一个环节，从而保全了整个 FOC 环路的控制精度。

这就是定点规划中的精算学——**在溢出与精度之间走钢丝的同时，想尽一切办法榨干微处理器的最后一丝计算分辨率！**

* * *

## 本文小结

各位同仁，回过头看，Embedded Coder在Clark变换这一个函数里做的移位决策，体现的就是定点开发中最核心的一项能力：**在溢出和精度之间走钢丝。**

多移几位，中间结果小了，不容易溢出，但低位的有效信息被丢掉了，精度下降。少移几位，精度保住了，但后面做加减法时数据可能撑爆int16的范围。Embedded Coder帮你自动完成了这个规划，但如果你需要审查生成代码、排查精度问题、或者在特定环节手动优化，你就得能看懂那张数据位宽流水线图——知道每一步的Q格式是什么、数据范围有多大、为什么移了这么多位。

这项能力，就是我们常说的"**定点数据流规划**"。掌握了它，定点代码对你来说就不再是天书。

明天的文章，我们换个方向，去看看浮点数的内部世界——你写了一个`float x = 0.667`，这个0.667在芯片的寄存器里到底长什么样？

我们明天见。

  

### 参考文献

\[1\] ECE 5655/4655 Real-Time DSP, "Lecture 5: Fixed Point vs Floating Point," Course Materials.

\[2\] M. Konghirun, L. Xu, and J. Skinner-Gray, "Quantization errors in digital motor control systems," in _Proc. IEEE Int. Conf. Electric Machines and Drives (IEMDC)_, Madison, WI, USA, 2003, pp. 1512–1517.

\[3\] J. Yiu, _The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors_, 3rd ed. Oxford, UK: Newnes (Elsevier), 2014.