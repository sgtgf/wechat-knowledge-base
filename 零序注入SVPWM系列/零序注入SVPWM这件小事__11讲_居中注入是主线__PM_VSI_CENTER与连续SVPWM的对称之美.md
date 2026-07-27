# 《零序注入SVPWM这件小事》｜11讲：居中注入是主线——PM\_VSI\_CENTER与连续SVPWM的对称之美

原创 傅存敬 电磁散人 2026-02-13 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/KbRKtY0NtDRqh83c4HmxXw](https://mp.weixin.qq.com/s/KbRKtY0NtDRqh83c4HmxXw)

各位同仁，前面几讲，咱们把 pm\_voltage() 这条流水线上的“安检门”（限幅）给研究透了。今天，咱们就要正式进入这条流水线上最核心、最繁忙的**“加工车间”——零序注入。**

pm.c 这个工程，非常优雅地把不同的零序注入策略，做成了一个可配置的开关 config\_VSI\_ZERO。它有三个选项：CENTER, GND, EXTREME。这三个选项，就代表了三种不同的“加工工艺”，会产生出三种不同“性格”的PWM波形。

今天，咱们就先来解剖那个最经典、最常用、也是我们理论部分花最多时间讨论的主线策略——PM\_VSI\_CENTER。

* * *

PM\_VSI\_CENTER**在做什么？**

咱们直接看代码，这是我们最熟悉的老朋友了。

在 pm\_voltage() 函数中，有：

```
else if (pm->config_VSI_ZERO == PM_VSI_CENTER) {
```

然后，这个算出来的 uDC 会被同时加到 uA, uB, uC 上去。

这个公式，咱们在[第4讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485391&idx=1&sn=9a4cd46ec0014e8e08df1c1e60cf6fdb&scene=21#wechat_redirect)已经从几何上推导过了，它的目的就是**“居中”**——把三相电压参考值的整体，在 \[0, 1\] 这个占空比“房间”里，完美地上下居中。

这个操作，在理论上，它等效的是什么呢？它等效的就是咱们在[第5讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485406&idx=1&sn=e6dc3f8c27ddbbc8d6e339ecf3c7600d&scene=21#wechat_redirect)提到的**连续SVPWM（Continuous PWM）**，而且是那种最经典的**对称七段式SVPWM**。

咱们再回忆一下那个对称七段式的开关序列：

V0 → V1 → V2 → V7 → V2 → V1 → V0

-   它**同时使用了 V0 和 V7 两个零矢量**。
    
-   它把零矢量时间 T0 **对称地分配**在了PWM周期的两端和正中间。
    

**min-max居中注入**这个简单的数学操作，之所以能等效出这么复杂的开关序列，就是因为它在“信号域”里，完美地复现了对称分配零矢量的效果。

-   当三相电压参考值整体偏高时，uMAX 很大，uMIN 也不小，(uMAX + uMIN) \* 0.5f 就会大于0.5，算出来的 uDC 就是个负数。这个负向的偏置，就会把三相整体往下拉，效果上就是**增加了**V0(0,0,0)**这个状态的权重。**
    
-   当三相电压参考值整体偏低时，反之，uDC 就会是正数，把三相整体往上抬，效果上就是**增加了**V7(1,1,1)**这个状态的权重**。
    

最终，在一个完整的电周期里，这种动态的“上抬”和“下拉”，就自然而然地实现了对 V0 和 V7 的平衡使用。

* * *

**“对称之美”：**PM\_VSI\_CENTER**与中心对齐PWM的完美配合**

PM\_VSI\_CENTER 这个策略，它不仅仅是数学上的等效，它和我们的硬件配置，特别是PWM定时器的**中心对齐模式（Center-aligned Mode）**，简直是天作之合。

咱们回顾一下文末共享代码的底层配置内容，我们的TIM1定时器被配置成了 CMS=11，也就是中心对齐模式。在这种模式下，计数器从0数到ARR，再从ARR数回0，形成一个三角波。PWM的比较事件，在上数和下数阶段都会发生。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARsjBQPuCMGEc3L2rKeXljLAThM6NJU7T5QvAIGLyMib3Vz25oqNjl6qJoo8zeZSNEkmyeI9rPG3m7xzib9szBsytfBsaf6FM2Bo/640?wx_fmt=png&from=appmsg)

这种硬件机制，有几个关键特点：

1.  **天然对称：**生成的PWM脉冲，总是关于PWM周期的中心点 Ts/2 对称的。
    
2.  **谐波最优：**这种中心对称的脉冲，可以有效地消除所有偶次谐波，以及一些奇次谐波。这使得输出的电流纹波最小，电机运行最平顺、最安静。
    

现在，我们把 PM\_VSI\_CENTER 和中心对齐模式结合起来看：

-   **软件层面**：PM\_VSI\_CENTER 通过min-max注入，在**数学上**保证了占空比的计算等效于对称SVPWM。
    
-   **硬件层面**：中心对齐模式，在**物理上**保证了这些占空比会被执行成中心对称的脉冲。
    

**软件的对称思想，和硬件的对称机制，在这里完美地握手了。**

这就是本讲文章封面宣传语的意义：“把零序放在正中，像把尺子放在纸的中心——左右对称，波形便自带一种安静的秩序。”

PM\_VSI\_CENTER 就是那只把“尺子”放在正中的手。它为整个系统带来了一种**确定性、稳定性和高性能**的基调。所以，在绝大多数FOC应用里，如果你不知道该用哪种零序注入策略，**选**CENTER**准没错**。它就是那个最稳健、最主流的“主线剧情”。

* * *

**Simulink 演示**

今天的Simulink，咱们要做一个“**眼见为实”**的对比，看看 PM\_VSI\_CENTER 是如何带来“对称之美”的。

1.  **信号源**：继续用旋转矢量。
    
2.  **两套硬件模型**：
    

-   **模型A（中心对齐PWM）**：搭建一个能模拟“上数/下数”的中心对齐定时器。可以用一个三角波发生器作为载波。
    
-   **模型B（边沿对齐PWM）**：用一个锯齿波发生器作为载波，模拟边沿对齐模式。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQHfAbNyqXPrsKvDu4V9uiajVrBrFib4M4ymqJt4N1KgdWOjibDPohw4ddqVnuUROM36zESjsCuVib9MCJDiakGDH0iaANy8j7aTY1s4/640?wx_fmt=png&from=appmsg)

3.  **调制策略**：两条路径都使用我们已经验证过的 **min-max居中注入** 逻辑来计算三相占空比。
    
4.  **观测结果**：
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAS5rPIGWQ5WMicYj4E9f2KxW2Zibl0hXUAZ9jT9XIrXe9nib5NYQHnN9UeoXlSq4lXDvYmYUXjiaoEvPno7AdEI3WucEZqWLUuPGv0/640?wx_fmt=png&from=appmsg)

各位同仁请看图中的 **黄色细线**（Duty），它不是平滑的正弦波，而是呈现出一种中间凹陷的 “马鞍形”（双峰波），这个“马鞍波”就是 PM\_VSI\_CENTER 的签名。

如果只是普通的 SPWM，它应该是个正弦波。但为什么它变成了马鞍形？这就是 pm.c 里 uDC = 0.5 - (uMAX+uMIN)\*0.5 这行代码的功劳。我们把三相电压整体进行了平移，把原本高的压低，把原本低的抬高，让它们挤在中间。这样做的好处是**极大提高了直流母线电压的利用率**，而且不改变线电压的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARibDaicfQX5FQ7vyAy0nHwibweCAIOavNbvlnMZib3FYujaKOnqd232To0hzVhYlyFwpG7XrWv4K2jTePd7auVda0cgzx9Z17Znicw/640?wx_fmt=png&from=appmsg)

咱们再对比一下 **蓝色细线**（Carrier）

-   **上图（Center）**：是**等腰三角波**（0 -> 1 -> 0），对应 STM32 的 Center-aligned Mode。
    
-   **下图（Edge）**：是**直角锯齿波**（0 -> 1，然后垂直掉落），对应 STM32 的 Up-counting Mode。
    

这就是我们配置定时器时 CMS 寄存器的区别。上面是我们在做 FOC 时最常用的中心对齐模式，下面是简单的边沿对齐模式。

最后，我们再仔细观察 **橙色细线**（PWM脉冲） 与蓝色载波的关系。**这是本讲的灵魂！**

-   **上图（Center）：**橙色的 PWM 脉冲，是以波峰（或波谷）为中心，**向左右两边对称展开**的。不管占空比怎么变，脉冲的**中心位置**永远不动（固定在载波周期的中点）。这就是“相位准确”。这种对称性，使得在一个开关周期内，电流的上升段和下降段是对称的，这能**自然抵消掉很多偶次谐波**，让电机转得更顺滑。
    
-   **下图（Edge）**：橙色的 PWM 脉冲，总是紧贴着左边（锯齿波的垂直下降沿）开始，只向右边延伸。脉冲的中心位置是随着占空比变化而左右乱跑的。这种不对称会引入额外的相位滞后和谐波分量。
    

这个实验，就把软件策略和硬件机制的配合关系，直观地展示了出来。它告诉我们，一个好的调制算法，必须和底层的硬件实现相匹配，才能发挥出最大的威力。

理解了“主线剧情” PM\_VSI\_CENTER，下一讲，我们就要去探索一下那些更有个性的“支线剧情”了。比如 PM\_VSI\_GND，它把零序“偏到地”，又会给系统带来怎样一番不同的风景呢？

好，今天就到这里。大家可以思考一下，为什么中心对称的波形，谐波会更少？这背后有什么数学原理吗？（提示：想想奇函数和偶函数的傅里叶级数展开）

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/1DsdbfXtcHNJZr0rIQSTLgw?pwd=tjgs 提取码: tjgs