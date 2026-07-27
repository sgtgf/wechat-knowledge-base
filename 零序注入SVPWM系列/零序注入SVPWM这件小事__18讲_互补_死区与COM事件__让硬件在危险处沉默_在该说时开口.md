# 《零序注入SVPWM这件小事》｜18讲：互补、死区与COM事件——让硬件在危险处沉默，在该说时开口

原创 傅存敬 电磁散人 2026-02-27 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/y19bjUDnZBYqfgffbW--5A](https://mp.weixin.qq.com/s/y19bjUDnZBYqfgffbW--5A)

各位同仁，前面17讲，我们从理论的云端，一路潜行到软件的深海，再到定时器的精密齿轮。我们已经把一个理想的电压指令，变成了一组精确的、中心对称的、满足各种约束的CCR整数值。

今天，咱们就要走完这“最后一公里”。看看这些躺在 CCR 寄存器里的数字，是如何被翻译成驱动功率管（MOSFET/IGBT）的、带着**互补、死区**的、真正有“杀伤力”的高压脉冲的。

咱们要解剖的主角，是 PWM\_startup() 里的 BDTR 寄存器，以及 PWM\_set\_DC() 和 PWM\_set\_Z() 这两个最终的“执行”函数。

* * *

**第一站：从单路PWM到“互补对”——BDTR寄存器的魔法**

在FOC里，我们控制的是一个三相桥臂。每个桥臂都有一对上下管，它们的工作状态必须是**互补**的：上管开，下管就必须关；下管开，上管就必须关。如果同时导通，就会造成直流母线短路，俗称“**炸管**”。

STM32的高级定时器（TIM1/TIM8）最强大的功能之一，就是能**在硬件层面，自动生成这种互补信号，并插入死区。**

我们看下文末共享的代码中 pwm.c 文件的 PWM\_startup() 函数：

```
TIM1->BDTR = TIM_BDTR_MOE
```

这行代码，就是在配置这个“硬件保镖”。

1.  TIM\_BDTR\_MOE (**M**ain **O**utput **E**nable)：
    

这是总开关。只有把它置1，TIM1的PWM输出引脚才会有信号出来。这是防止在配置过程中，引脚输出不确定电平导致危险。

2.  DTG << TIM\_BDTR\_DTG\_Pos  (**D**ead-**T**ime **G**enerator)：
    

DTG 就是我们预先计算好的**死区时间**对应的计数值。硬件会在上管关断和下管导通之间，以及下管关断和上管导通之间，自动插入一段“**两管都关断**”的“**冷却时间**”。

在**物理意义**上，就是在为功率管的“反应慢”买单。由于开关有延迟，我们必须留出足够的时间，确保一个管子已经**彻底关断**了，另一个管子**才能开始导通**。死区就是这座“安全桥梁”。

3.  **TIM\_BDTR\_OSSR** (**O**ff-**S**tate **S**election for **R**un mode)：
    

这个位，定义了当一个通道的输出被**软件禁用**时（比如通过 CCER 寄存器），它的引脚应该处于什么状态。置1意味着，输出引脚会被拉到**低电平**。

这在**物理意义**上，就是我们之前讨论过的，PWM\_set\_Z() 实现“钳位”或“关断”的硬件基础。它定义了“沉默”的方式。

有了 BDTR 的配置，我们软件层面只需要关心一路 CCR 的值，硬件就会自动为我们生成安全、可靠的上下管驱动信号。

* * *

**第二站：下达“演奏”指令——PWM\_set\_DC()**

这个函数，是我们整个 pm\_voltage() 流水线的最终出口。它的职责，简单而神圣。

我们看下文末共享代码的 pwm.c 文件：

```
void PWM_set_DC(int A, int B, int C)
```

它的动作，就是把最终计算好的 xA, xB, xC，写入到 CCR1, CCR2, CCR3 寄存器里。

但由于我们之前配置了**预装载（OCxPE=1）**，这个写入动作，并不是“立即执行”，而是“**提交计划**”。

xA, xB, xC 被写入了各自的影子寄存器。它们会静静地在那里等待，直到下一个**更新事件（UEV）**的到来。当UEV发生时（在我们的配置下，是每2个PWM周期一次），这三个新值才会被“Duang”一下，同时加载到工作寄存器中，开始影响下一个周期的PWM波形。

这个过程，就像一个交响乐团的指挥：

-   pm\_voltage() 是指挥，他思考、权衡，最终确定了下一段乐章每个声部的演奏强度（CCR值）。
    
-   PWM\_set\_DC() 是指挥把乐谱发给各位演奏家。
    
-   演奏家们（影子寄存器）拿到乐谱，做好准备。
    
-   指挥棒挥下（UEV事件），所有人**在同一瞬间，开始演奏新的乐章**。
    

* * *

**第三站：命令“沉默”的艺术——PWM\_set\_Z() 与 COM 事件**

有时候，我们不希望某个桥臂演奏，我们希望它“**沉默**”。比如，系统故障，或者自由滑行，或者在做参数辨识。

这时候，PWM\_set\_Z() 就登场了。代码仍然在文件 pwm.c 中。

```
void PWM_set_Z(int Z)
```

-   TIM1->CCER &= ~(TIM\_CCER\_CC1NE | TIM\_CCER\_CC1E) ：它通过修改 CCER 寄存器的 CCxE 和 CCxNE 位，来直接控制某个通道的主输出和互补输出是否使能。
    
-   TIM1->EGR |= TIM\_EGR\_COMG：这是点睛之笔！
    

COMG 是“**C**ommutation **O**utput **M**anagement **G**eneration”的缩写。直接修改 CCER 可能会在不恰当的时候生效，引发风险。而STM32F4的高级定时器，允许 CCER 的某些更新，也受到一个“同步信号”的控制。这个同步信号，就是**COM事件**。通过软件置位 **COMG**，我们可以**手动触发一次COM事件**，强制让所有和输出相关的、被配置为“预装载”的寄存器（比如 CCER），在一个安全、确定的时刻，立即生效。这就像指挥在乐章中间，突然给某个声部打了一个“休止”或“进入”的手势，而且这个手势是立即执行的，不需要等到下一个小节的开始。这为我们提供了**更高响应速度的、安全的输出控制能力。**

* * *

**总结：硬件的三重奏**

所以，你看，一个看似简单的PWM输出，背后是软件和硬件的一场精妙配合，是一曲“三重奏”：

1.  **算法（软件）** 负责“**创作**”：它基于理论和现实约束，计算出每一拍的乐谱（CCR值）。
    
2.  **定时器核心（TIM1 CR1, CCMRx）** 负责“**演奏**”：它把乐谱翻译成对称、精准的脉冲。
    
3.  **输出控制（TIM1 BDTR, CCER）** 负责“**安全和指挥**”：它保证了演奏的安全性（死区），并提供了紧急“沉默”或“进入”的权力。
    

这就是我们本讲封面图片宣传语的意义：“硬件不懂你的公式，它只懂三件事：何时翻转、何时等待、何时保持沉默。”

-   CCR 和 CNT 的比较，告诉它**何时翻转**。
    
-   BDTR 里的死区，告诉它**何时等待**。
    
-   CCER 和 MOE，告诉它**何时保持沉默**。
    

* * *

**Simulink 演示（本系列收官之作）**

咱们的最后一个Simulink实验，就是要把这条从“软件CCR”到“硬件门极”的完整链路，给模拟出来。

1.  **搭建完整的TIM1模型：**
    

-   在上一讲的基础上，加入**互补输出**和**死区插入**的逻辑。可以用一个“NOT”门来生成互补信号，用两个“Transport Delay”来模拟死区的延迟。
    
-   加入一个“Enable”端口，模拟 CCER 的作用。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATkxFdAothUdhCb2Qicqx1o9zW6ZtvVOmziaxCm0GZ3PmVR0mpMgLiczWpSicaJAWgtJiao31zZK1Zo2sMrEOKJqSiaiaKjzqQ0Gzwyz0/640?wx_fmt=png&from=appmsg)

2.  信号源：
    

-   基于min-max注入法SVPWM生成的计数值作为输入的 CCR 值。
    
-   在 Time = 2.5e-4 (0.25ms) 时刻，控制“Enable”信号失效。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASDia5cdNOOzibEtTNt2D2ibo98u1DZugvaHFXH38gM83HKuIx2KXtibVL5icWjXwXt32XgtjGUPFpGhVAYcSlFicTe2yANNLJeo0zao/640?wx_fmt=png&from=appmsg)

**3.观测仿真结果**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARKGhWKVjcznfZBVicaibeevMj1icH4G3kEBIzAWTh3G6IWfU8Db2JRAHTgs5GuoK54QyZtSIRy2iaqIwfCk4GmvicIQgVptq6RibJCg/640?wx_fmt=png&from=appmsg)

从上图中观看**“硬件沉默” (The COM Event / PWM\_set\_Z)：**在 Time = 2.5e-4 (0.25ms) 时刻，所有的波形（通道1、2、3）都瞬间**跌落为 0** 并保持低电平。这模拟了软件检测到故障或需要滑行时，调用 PWM\_set\_Z() 将 MOE 位拉低，强制硬件切断输出的场景。

**验证“互补输出”**，放大PWM的上升沿和下降沿，当第一行是**高电平**时，第二行严格保持**低电平**。当第一行是**低电平**时，第二行变成了**高电平**。

顺便可以验证“**中心对齐**”：PWM波形是对称的，脉冲位于周期的中间。这是 FOC 控制中常用的中心对齐模式（计数器是三角波），相对于边缘对齐，这种方式产生的电流谐波更小。

这个实验，将为我们的整个系列讲座，画上了一个完美的、从理论到实践的闭环句号。

* * *

**本系列讲座总结**

各位同仁，18讲的旅程，到这里就告一段落了。

我们从一篇经典的学术论文出发，走过理论的桥梁，潜入工业级代码的深海，最后触碰到了硬件寄存器的脉搏。

我们一起见证了，一个理想的电压矢量，是如何在“**[六边形的城墙](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485372&idx=1&sn=3ee38fce56f546abc23c253d53955520&scene=21#wechat_redirect)**”下被限幅，在“**[零序的暗流](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485391&idx=1&sn=9a4cd46ec0014e8e08df1c1e60cf6fdb&scene=21#wechat_redirect)**”中被重塑，在“**[采样窗口的约定](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485607&idx=1&sn=67e31eff1e4aec8b88c1a09d7b03c683&scene=21#wechat_redirect)**”下被修正，在“**[占空比的颗粒](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485595&idx=1&sn=a145ef3f65d22fc0ac9072423f5176c4&scene=21#wechat_redirect)**”中被量化，最终，在“**[定时器的精密齿轮](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485633&idx=1&sn=4b88a69af6579ef9621edb1f650c82f7&scene=21#wechat_redirect)**”驱动下，变成驱动世界旋转的力量。

我希望，通过这次旅程，能够使得零序注入SVPWM对各位同仁来说，不再是一段需要背诵的代码，或者一个抽象的算法名称。

它是一套**完整的、自洽的、从理想到现实的设计哲学。**

它教会我们，如何在理论的完美与现实的约束之间，做出优雅的**权衡**；如何让冰冷的算法，去倾听硬件的“心跳”，为测量和安全“让路”；如何把复杂的系统，拆解成一个个清晰、原子化的“**事务**”。

这，或许比SVPWM本身，是更宝贵的财富。

感谢各位的一路同行。路还很长，愿我们都能在自己的“电压之路”上，走得更远，也走得更稳。

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/1YHvbFFEbhXiNvcXONV4Wlg?pwd=8aun 提取码: 8aun