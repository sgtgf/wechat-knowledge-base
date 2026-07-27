# 《PMSM 定点/浮点FOC运算这件小事》| 17讲：用DWT计数器比较定点FOC和浮点FOC的执行时间

原创 傅存敬 电磁散人 2026-05-05 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/Af3ksBbyuCnHjlK4HNb-5A](https://mp.weixin.qq.com/s/Af3ksBbyuCnHjlK4HNb-5A)

各位同仁，大家好。

前面十六篇文章，我们把定点代码拆得很细，精度也算过了，Simulink的配置也看了。但有一个最直白的问题还没回答：**定点快多少？**

"快很多"——这是一个凭直觉就能给出的答案。但直觉不能写进技术报告里。今天我们就拿数据说话。

## 年度体检和单项化验

每年公司组织体检，医生听完心肺、量完血压，跟你说"还行，没大问题"。你心想：到底行不行啊？具体数字呢？于是你翻到化验单，一行一行看——空腹血糖5.2 mmol/L、甘油三酯1.4 mmol/L、低密度脂蛋白2.8 mmol/L。这些数字才能让你踏实。

MCU也一样。"定点比浮点快"就像"身体还行"，听着像那么回事，但不够用。我们需要一份"化验单"——精确到时钟周期的执行时间测量。ARM Cortex-M系列里，干这个活的硬件模块叫DWT（Data Watchpoint and Trace），它内部有一个32位的周期计数器`CYCCNT`，每过一个CPU时钟周期自动加1，分辨率就是一个时钟。

用法很简单——在FOC函数的入口读一次`CYCCNT`，出口再读一次，两个值相减就是这次执行消耗的时钟周期数。不需要示波器，不需要翻转GPIO去量脉宽，硬件级精度，零开销。

## 先算一笔理论账

在掏出DWT实测之前，我们先用指令周期来估算。这一步不是多余的——如果理论估算和实测差太远，说明你的编译器做了意料之外的事，得回去查。

我们的FOC电流环信号链是这样的：Clark → sin/cos查表 → Park → PI(d) + PI(q) → 反Park → SVPWM → PWM寄存器写入。逐模块估算一下。

### 定点版（STM32F103RB，Cortex-M3，72 MHz，无FPU）

Cortex-M3的整数运算很快——大多数ALU指令单周期完成，32位乘法`MUL`也是单周期，带累加的`MLA`也是单周期。查表操作就是数组索引加一次线性插值，几条指令的事。最贵的操作是`div_s16s32_floor()`里的32位除法——Cortex-M3的硬件除法`SDIV`需要2到12个周期，取决于操作数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQ0Nr8bG3vlH4ANBSbxjZHaFDE4dianh0ic8R4KJfnyHicd3zym9Kh69YBbNyUwL9UvsexpNc1Q8iaZmFLeDIjzCSjpIZ5AgCFwELk/640?wx_fmt=png&from=appmsg)

### 浮点版跑在同一颗M3上（软浮点）

这才是重头戏。Cortex-M3没有FPU，所有`float`运算都要调用编译器的软浮点库函数。[第7篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486245&idx=1&sn=a502626e76b9b2f7b44a978e4796c4f1&scene=21#wechat_redirect) 我们讲过，一次软浮点乘法大约30–50个周期，加法20–30个周期，除法50–80个周期。三角函数`sinf()`/`cosf()`更离谱，一次调用少说150个周期往上。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQG1cnR9ok1mQ9u5us0IBqFXxqGV4oTic0VvYTicKMItia07dY9DzzXGE8R0NcL7k1u2nTz6YttlJDK1MavYBx8rXxnmEVoozMorw/640?wx_fmt=png&from=appmsg)

按 72 MHz算，2000个周期约 **28 μs**，2500个周期约 **35 μs**。

定点 vs 软浮点，同一颗芯片上的比值：**大约5:1到6:1**。

这个数字和文献数据吻合。Konghirun等人在2003年的IEMDC论文中报告，他们在TMS320F2812（150 MHz定点DSP）上实现感应电机的无传感器FOC时，浮点版因为要走软浮点库（rts2800\_ml.lib），中断周期不得不从 50 μs放宽到 250 μs才跑得下来——整整5倍。而定点版在 50 μs的中断里游刃有余。

### 浮点版跑在M4上（硬浮点）

换到STM32G474——Cortex-M4内核，170 MHz，带单精度FPU。画风彻底变了。

`VMUL.F32`单周期，`VADD.F32`单周期，`VDIV.F32`约14个周期。CMSIS-DSP的`arm_sin_f32()`/`arm_cos_f32()`走的是优化过的查表加插值，大约20–25个周期搞定一次。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATPejskib3sF7LDibeCT92iaQy5I18pBX2ng0PQeyYEme34JibGGKAJ7w4ib3rqIZoLzs5ANtV2ic6wzG38pL62G83o30sQ4K2pNQSSQ/640?wx_fmt=png&from=appmsg)

按170 MHz算，180个周期约**1.1 μs**。

## 三个场景放在一起看

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASOLXwANWovF4V5hXlhicyp6PLqcxBUYqiczd11oMUnXg0SNiagu6naYOoViaficaIIGcG8Ul9RmCdl1wRxic8zpOWlTiaaRdvGGMIUfs/640?wx_fmt=png&from=appmsg)

几个结论直接从数字里蹦出来：

**第一，定点方案在M3上比软浮点快5倍以上。** 这不是"优化了一下"的差距，这是"能跑 20 kHz中断"和"只能跑 4 kHz中断"的差距。FOC的电流环控制带宽直接受采样率制约，采样率低5倍，动态响应要打很大的折扣。

**第二，M4硬浮点比M3定点还快。** 180周期对420周期，再加上 170 MHz对 72 MHz的主频差，硬浮点方案的绝对执行时间只有定点方案的五分之一。当然，这里有芯片代差的因素——M4的流水线更深，主频更高，不纯粹是FPU的功劳。但即使把主频归一化到同一水平，硬浮点的周期数本身就比定点少一半多。

**第三，软浮点是最差选择。** 它既没有定点的速度优势，也没有浮点的开发便利。如果你的芯片没有FPU但你又坚持用`float`，最终的结果就是两头不占——代码和定点版一样长，但执行时间比定点版慢5倍。这正是[第7篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486245&idx=1&sn=a502626e76b9b2f7b44a978e4796c4f1&scene=21#wechat_redirect)讲的"100倍代价"在FOC场景下的具体体现（那篇讲的是单条指令级别的比值，整个函数级别因为有控制流等非运算指令的"稀释"，整体比值收窄到5–6倍）。

## DWT怎么用

如果各位同仁手边有板子，想自己量一下，DWT的用法只有四行代码：

```
// 初始化（只需一次）
```

`CYCCNT`是32位无符号数，在 72 MHz下大约59.6秒才会溢出一次，量一次FOC执行完全够用。注意编译器优化等级会影响结果——用`-O2`或`-Os`比`-O0`快很多，实测时要用和量产一样的优化选项，否则数据没有参考价值。

另外一个容易忽略的点：中断。如果测量代码跑在main循环里而不是中断里，中间可能被其他中断打断，`CYCCNT`里就会混入中断服务时间。最干净的做法是在被测代码段前后临时关中断，或者直接把测量代码放进定时器中断里跑。

## 本文小结

各位同仁，今天我们用实际数据，跟大家展示了一个道理——"定点比浮点快"这句话只对了一半。准确地说，在没有FPU的芯片上，定点比软浮点快5倍以上；但在有FPU的芯片上，硬浮点的执行周期反而比定点更少。定点方案的真正价值不是"快"，而是"在便宜的芯片上也能快"——它让一颗几块钱的Cortex-M3跑出 20 kHz电流环的性能，而不需要换一颗贵几倍的M4。至于你的项目到底该选哪条路，不能光看执行时间这一个指标——开发成本、维护难度、调参效率，这些账都得一起算。

下一篇文章，我们就来算这笔账：同样是改一个Kp，定点工程师的一天和浮点工程师的一天，差距到底在哪里。

我们明天见！

  

**参考文献**

\[1\] M. Konghirun, L. Xu, and J. Skinner-Gray, "Quantization errors in digital motor control systems," in _Proc. IEEE Int. Conf. Electric Machines and Drives (IEMDC)_, 2003.

\[2\] J. Yiu, _The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors_, 3rd ed. Oxford, UK: Newnes (Elsevier), 2014.

\[3\] ARM Ltd., "Cortex-M3 Technical Reference Manual," Rev. r2p1, 2010.

\[4\] ARM Ltd., "Cortex-M4 Technical Reference Manual," Rev. r0p1, 2012.