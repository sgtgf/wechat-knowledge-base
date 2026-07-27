# 《零序注入SVPWM这件小事》｜03讲：六边形的城墙——线性区、内切圆与2/√3的天花板

原创 傅存敬 电磁散人 2026-02-03 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/2eDxhZPv-HHEJsMl1YDAsg](https://mp.weixin.qq.com/s/2eDxhZPv-HHEJsMl1YDAsg)

[上一讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485356&idx=1&sn=d3939720b84ae4d6799cf20a16022201&scene=21#wechat_redirect)，咱们发现了“零序”这个神奇的工具。今天，咱们就要用这个工具，去撬开一个困扰很多工程师多年的问题：**为什么都说SVPWM的电压利用率比SPWM高？那个****15%****左右的提升，到底是从哪儿“偷”来的？**

要回答这个问题，咱们得先建立一个最基本的“世界观”：**三相逆变器不是一个无限能力的电压源，它有自己的物理极限。**

这个极限是什么？很简单。对于A、B、C任何一相，它能输出到直流母线中点N的电压，只有两个可能的值：要么是上管导通，输出 +Vdc/2；要么是下管导通，输出 \-Vdc/2 。我们平时说的“输出一个正弦波”，都是靠PWM在一个周期内快速切换，用**时间平均**等效出来的。

所以，任何一相的**平均相电压**，它的绝对值，都不可能超过 Vdc/2。如果我们把 Vdc/2 这个电压值，归一化为1，那么三相的调制波 ma, mb, mc，它们的取值范围就必须死死地限制在 \[-1, +1\] 之内。一旦超出，就是饱和，波形就会被“削顶”，产生畸变。

好，记住这个铁律：**相电压调制波不能过±1。**

现在，咱们先来看最淳朴的 **SPWM（Sinusoidal PWM）**。它的三相调制波就是纯正弦：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYkCjUG85GZhe8mzILlLpC3TxX6d8B0emRiaAoqwHs4EQ23rurS17QFDg/640?wx_fmt=png&from=appmsg)

为了保证任何一相都不饱和，这个调制指数 M 最大能取到多少？毫无疑问，M 最大只能是 **1** 。

当 M=1 时，我们能得到的最大线电压幅值是多少？

我们知道，线电压是相电压的矢量差。比如 Vab，它的幅值是相电压幅值的 √3 倍。所以，SPWM能输出的最大线电压幅值，就是 1 × √3。

这个 √3 是个什么概念呢？我们得有个参照物。参照物就是我们的直流母线电压 Vdc。在同样的归一化体系下，Vdc 等效的幅值是 **2**（因为相电压是从 \-Vdc/2 到 +Vdc/2 摆动，总范围是 Vdc，归一化后就是-1到1，总范围是2）。

所以，SPWM的电压利用率就是：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYIOUxicicgKPKL7K4PThicpUygibcHnrQm0Rx4yN8Feo57btVDC6E2J9qDQ/640?wx_fmt=png&from=appmsg)

这就是那个著名的 86.6% 的由来。它的根源在于，为了保证**每一相都不越界**，我们限制了整体的发挥。

那么，SVPWM是如何打破这个“僵局”的呢？

咱们换个视角，进入**空间矢量**的世界。逆变器只有8个基本开关状态，对应8个基本电压矢量，看下文末参考文献的图3(b)。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYSdjTdCsibCofiar6drGqIP5fZIKpCibRSAslvC3LRg25tU8XwBZsDGOZA/640?wx_fmt=png&from=appmsg)

这6个非零矢量（ V1 到 V6 ）的顶点，构成了一个**正六边形**。这个六边形，就是逆变器能够瞬时合成的所有电压矢量的**“能力边界”**。我们想要输出的任何一个参考电压矢量 Vref，只要它的尖尖落在这个六边形内部或者边界上，我们就能通过组合相邻的两个有效矢量和零矢量，在一个PWM周期内，把它精确地平均出来。这个区域，就叫**线性调制区**。

如果 Vref 的尖尖跑到了六边形外面，那对不起，硬件做不到了，这就进入了**过调制区**。

那么，核心问题来了：如果我们想让电机输出**不失真的正弦电流**，我们就必须给它提供一个**旋转的圆形电压矢量轨迹**。那么，在这个六边形“城墙”里，我们能画出的最大的圆有多大？

答案是：**这个六边形的内切圆。**参考文末文献中的图4.

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYIgxRuW0n9I2jmIicyzl90jlPRicbv6F0aUY5oX5iavuiaE23lS09lcNKdg/640?wx_fmt=png&from=appmsg)

现在，咱们用同一个标尺来量一下 SPWM 和 SVPWM 的极限。这个标尺就是**直流母线电压**Vdc。

1.  SPWM 的**极限圆**：
    

-   SPWM的相电压最大只能到 **Vdc/2**（因为三相逆变器桥臂的输出电压，被物理限制在直流母线的正负极之间（即 ±Vdc/2），想输出纯正弦波，峰值自然不能超过这个物理天花板。）。
    
-   对应的线电压最大幅值是 **Vdc/2 \* √3**。
    
-   对应的空间电压矢量圆的半径，也是 Vdc/2 （这里有个常数变换系数，在恒功率变换下矢量长度等于线电压幅值）。
    
-   咱们记住一个数：**SPWM 能画出的最大圆半径是**0.5 Vdc。
    

2.  SVPWM 的**极限圆（内切圆）**：
    

SVPWM利用了整个六边形。这个正六边形的中心到顶点的距离（也就是最大矢量的长度）是 **2/3 Vdc**。

那么它的内切圆半径是多少？简单的几何关系：边长 \* √3/2。所以，内切圆半径 = (2/3 Vdc) \* (√3/2) = 1/√3 Vdc。1/√3 约等于 0.577。

咱们记住第二个数：**SVPWM 能画出的最大圆半径是**0.577 Vdc。

3.  对比一下：一个是 0.5，一个是 0.577。0.5/0.577≈1.1547。
    

**SVPWM之所以能“提压”，是因为它能让不失真的圆形电压轨迹，从SPWM的半径**0.5 Vdc，**扩大到六边形内切圆的半径**0.577 Vdc，**足足提升了**15.4%！

这个提升是怎么做到的？就是靠我们[上一讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485356&idx=1&sn=d3939720b84ae4d6799cf20a16022201&scene=21#wechat_redirect)说的**零序注入**。SVPWM通过注入一个特定的零序分量，把原本纯正弦的相电压波形给“削平”了一点，使得在相电压峰值同样不超过 Vdc/2 的前提下，能够合成出更大的线电压。

在空间矢量图上，这个过程就表现为：

-   SPWM的圆形轨迹，只能在六边形内部“活动”，碰不到边。
    
-   SVPWM通过零序注入，把这个圆形轨迹“吹大”了，正好能撑满整个内切圆。
    

这就是SVPWM比SPWM电压利用率高的根本原因。它并没有创造能量，只是更聪明地利用了三相系统的内在自由度，把相电压的“峰值裕量”给榨干了，全部转化成了线电压的“有效输出”。

咱们再看文末提供的代码 pm.c。

pm\_quick\_build() 里的 k\_EMAX = 0.57735027f，也就是 1/√3，这个常数，就是SVPWM线性区的“天花板”——**内切圆半径。**

而pm\_voltage()里的限幅逻辑，就是这个思想的体现：

-   if (pm->config\_VSI\_CLAMP == PM\_ENABLED && uDC > pm->k\_EMAX)：如果你的指令矢量长度，超过了内切圆半径，就给你按比例缩回内切圆内。这是在保证输出波形绝对不失真。
    
-   if (uMAX - uMIN > 1)：这个检查的是**相电压之间的差值**，它不能超过母线电压。这其实是在守**六边形的边界**。如果指令已经超出了六边形，就必须把它拉回来，否则物理上无法实现。
    

**空口无凭，还是得上simulink。**

**Simulink 演示**

这个“提压”过程，用Simulink看最清楚。

整个模型概览如下：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKY3w6mpXkfSuqkV9XZ0BqxPIlgInwJagQficrrqWmCtwXXiauEV9Iyc49w/640?wx_fmt=png&from=appmsg)

模型使用了callback功能，每次仿真前自动加载参数，在众多初始化参数中，调制比 Mod\_Index = 0.95 是关键。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKY9rdETvIhTL2HuKpaIPwKAF6IZjZHFczr5oacGDBibNTk1WbaoEWKY7Q/640?wx_fmt=png&from=appmsg)

在 SPWM 里，0.95 还是安全的，但这个值在 SPWM 体系下已经接近过调制（如果按线电压 0.866 算的话）。在咱们这个简单的标幺体系下（载波±1，相电压±1），0.95 意味着 SPWM 不削顶，而且方便展示 SVPWM 的注入效果（变成马鞍波，峰值降低）。

模型中的**两条并行路径：**

-   **路径A（SPWM）：**纯正弦调制波， 当调制比大于 **1** 时，必然会饱和。
    
-   **路径B（SVPWM）**：采用min-max CBPWM方式生成 。
    

在线性区，SPWM和SVPWM的调制波形都正常：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYyichKny4gW3INcrX3ibtsPZlk4ejJCagG5Wvic8IcyR4UPP3hZQnsEIpg/640?wx_fmt=png&from=appmsg)

无论是SPWM还是SVPWM，调制出的线电压Vab，无论是幅值还是相位，都是接近的（没有100%重合，是因为模型中引入了一个一阶低通滤波器，造成了部分相位延迟，5KHz的载波频率，LPF的带宽设置为500Hz；线电压的锯齿波是为了模拟电机定子电感的充放电过程）

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYEBicCUwQiaE1oEoVDRtEBq6rAic2jIWRiatxvZibfVp8AGVtB5NspotSSYg/640?wx_fmt=png&from=appmsg)

当调制比大于 1 ，如 1.1 时，

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYcXsoS4MbMuNkFxMbhJ5pQZ8HH32NhE7DPJW87iaMZPYKgbqtalGGxdQ/640?wx_fmt=png&from=appmsg)

SPWM的调制波形明显发生了“削平”现象，但SVPWM的调制波形依然可以在\[-1, 1\]的范围内！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYWx7BYibEbyG4yWvccy61mr73to1XEicT2r6Rjk3EOLFMKMb9t8L1uib2Q/640?wx_fmt=png&from=appmsg)

此时SPWM调制出来的线电压已经效率低了。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREjhWSFnL9zQRkic1RfLNLKYoWm2CJr904FqMHHavWHPcYyw4FJEgYN1n0P8pkW1m7icELUz9znY6PQ/640?wx_fmt=png&from=appmsg)

这个实验，就把SVPWM为什么能“提压”15.4%的秘密，活生生地展现在我们眼前了。

下一讲，咱们就要来揭秘SVPWM的“魔法核心”：那个能把圆形轨迹“吹大”的特定零序分量，到底是怎么算出来的？也就是那个著名的 **min-max** 注入 公式，它背后的几何直觉是什么。

好，今天就到这里。大家这次可以记住 **0.5** 和 **0.577** 这两个数字，它们就是SPWM和SVPWM线性区的两道“门槛”。

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：

https://pan.baidu.com/s/1VmnlreiLHvbLvZ6N7P4uyw?pwd=sis7 提取码: sis7