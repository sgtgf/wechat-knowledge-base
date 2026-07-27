# 《零序注入SVPWM这件小事》｜17讲：把论文写进寄存器——中心对齐让脉冲在时间里对称生长

原创 傅存敬 电磁散人 2026-02-26 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/PBBwqA2qOPG5uxkoRDEo2Q](https://mp.weixin.qq.com/s/PBBwqA2qOPG5uxkoRDEo2Q)

各位同仁，前面16讲，我们大部分时间都在 pm\_voltage() 这个函数的“软件世界”里遨游。我们算出了完美的、满足各种约束的CCR值 xA, xB, xC。

但是，这些整数，还只是躺在内存里的“**乐谱**”。怎么让它们变成驱动电机旋转的、真正有力量的“**交响乐**”（PWM脉冲）？

这就需要一位技艺高超的“**演奏家**”——我们硬件里的**高级定时器TIM1**。

今天，咱们就要把 PWM\_startup() 这段代码彻底解剖，看看作者是如何通过配置一系列寄存器，把文末共享的论文里提到的那个理想的“**双边三角载波**”给“**召唤**”出来的。

* * *

**第一站：定义“乐曲”的节拍与形态——TIM1->CR1**

我们一起看下 pwm.c 文件中的 PWM\_startup() 函数：

```
TIM1->CR1 = TIM_CR1_ARPE | TIM_CR1_CMS_0 | TIM_CR1_CMS_1;
```

这行代码，可以说是整个PWM波形形态的“**总纲**”，它定了两个最重要的规矩：

1.  TIM\_CR1\_CMS\_0 | TIM\_CR1\_CMS\_1 (**CMS=11**)：
    

-   **CMS** 位是“**C**enter-aligned **M**ode **S**election”的缩写。11 代表**中心对齐模式3**。在这种模式下，定时器的计数器 CNT 会像一个钟摆一样，从0数到 ARR，再从 ARR 数回0。
    
-   **关键点**：中断标志位（比如更新事件UEV）**在计数器向上和向下溢出时都会产生**。
    
-   **物理意义**：这就是在硬件层面，创造了一个**三角波载波**！它不再是单调递增的锯齿波。这直接对应了论文里说的 **double-edge carrier**。
    

2.  TIM\_CR1\_ARPE**(ARPE=1)**：
    

-   **ARPE** 是“**A**uto-**R**eload **P**reload **E**nable”的缩写。当它被置1，意味着 ARR 寄存器有了“**影子**”。你往 TIM1->ARR 里写的值，不会立刻生效，而是先放在一个看不见的“准备区”（影子寄存器）里。只有在下一次**更新事件（UEV）**发生时，这个新值才会被“Duang”一下，同步加载到真正工作的寄存器里。
    
-   **物理意义**：这保证了PWM周期的长度（也就是频率）不会在周期的中间突然改变，避免了时序混乱。
    

* * *

**第二站：定义“音符”的演奏方式——TIM1->CCMRx**

我们再来看 pwm.c 文件中的 PWM\_startup() 函数：

```
TIM1->CCMR1 = TIM_CCMR1_OC2M_2 | TIM_CCMR1_OC2M_1 | TIM_CCMR1_OC2PE
```

这行代码，定义了每个“音符”（CCR值）该如何被“演奏”出来。

1.  OCxM\_2 | OCxM\_1**(OCxM=110**)：
    

-   **OCM** 是“**O**utput **C**ompare **M**ode”的缩写。110 代表 **PWM模式1**。在这种模式下：
    

-   在向上计数时，如果 CNT < CCR，输出有效电平。
    
-   在向下计数时，如果 CNT > CCR，输出无效电平。
    

-   **物理意义**：把这个规则，和我们前面说的“三角波”载波一结合，各位同仁的脑子里是不是已经有画面了？
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATnYLFYdOpDKwUicEeors2ciavwKIqpYKL1N2C478aXMibmwS0ia3E7T1sAmQEeybd0hUpGm06BtfLr9qVeK5mLeibd2TgCqeyyA838/640?wx_fmt=png&from=appmsg)

向上数的时候，CNT 从下往上穿过 CCR，电平翻转一次；向下数的时候，CNT 从上往下再次穿过 CCR，电平又翻转一次。这两次翻转，关于周期的中心点（ARR 所在的位置），是**完美对称的！**这就是本讲文章封面页的宣传语说的“**脉冲在时间里对称生长**”。

2.  OCxPE=1：
    

-   **OCPE** 是“**O**utput **C**ompare **P**reload **E**nable”的缩写。和 ARPE 一样，它给 CCR 寄存器也加上了“影子”。我们调用 PWM\_set\_DC() 写的 TIM1->CCR1 = xA，实际上是写进了影子寄存器。
    
-   **物理意义**：这保证了三相的占空比，是在**同一个时刻**（更新事件UEV）一起生效的。不会出现A相已经更新了，B、C相还是旧的占空比这种“**步调不一致**”的尴尬情况。
    

* * *

**第三站：定义“乐章”的更新节奏——TIM1->RCR 和ADC触发**

我们继续查看 pwm.c 文件中的 PWM\_startup() 函数

```
TIM1->RCR = 1;
```

1.  RCR = 1 (**Repetition Counter**)：
    

这是一个非常关键的“魔鬼细节”。这代表着，**每**RCR+1**次计数器溢出，才会产生一次更新事件UEV。**

RCR=1 时意味着，每**2**次溢出，才更新一次。在中心对齐模式下，一个完整的PWM周期（0→ARR→0）包含两次溢出（一次在顶部，一次在底部）。所以，RCR=1 意味着**每1个完整的PWM周期，产生1次更新事件。**

**文件**adc.c**中**irq\_EXTI0**的调用链，证实了FOC的计算节拍确实与ADC中断同步，而ADC由TIM1触发，所以整个系统是按照被**RCR**降频后的节拍运行的**。

**工程意义**：代码的作者牺牲了一半的控制带宽（从每个PWM周期更新，变成每两个周期更新），换来了**更长的CPU计算时间裕量**。这是一个典型的**性能与资源之间的权衡**。

2.  CCR4 与 **ADC触发**：
    

CCR4 被设置在接近 ARR 的地方，并在**上计数阶段**触发ADC采样（因为 OC4M 是PWM模式2，行为与模式1相反）。这个时刻，正好是PWM周期的**正中间**，是所有开关动作都已经完成、电路最“安静”的时刻。这完美地印证了我们之前对“[采样窗口](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485607&idx=1&sn=67e31eff1e4aec8b88c1a09d7b03c683&scene=21#wechat_redirect)”的分析。

* * *

**Simulink 演示**

今天咱们的Simulink模型，就是要亲手“复刻”一个STM32F405的TIM1。

1.  **搭建定时器核心：**
    

-   用Repeating Sequence模块生成一个 0...ARR...0 的序列，来模拟 CNT。这就是我们的“三角载波”
    
-   用“Relational Operator”模块，实现 CNT < CCR 的比较。用逻辑门，根据上数/下数状态，组合出PWM模式1的输出。
    
-   用“Unit Delay”模块来模拟影子寄存器。用一个计数器模拟RCR，每两次溢出，才让影子寄存器的值“通过”到工作寄存器。
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARZfs0pib2xCic89IqyrTpmt3sD2Oibr31JfXvxZiaILYTZLoo32bKkWzFFnUjSLx9ZVYeHkricwqicmwH33Vop7jUGjSBhrfxiczhrtQ/640?wx_fmt=png&from=appmsg)

2.  **插入代码**pm.c**文件中的SVPWM算法，同时构建功率级与电机模型**
    

-   构建逆变器模型 ：将 TIM1 输出的 PWM 逻辑信号（0/1）放大为母线电压。这里我们包含简单的死区效应（为了方便演示，我们在逻辑上模拟死区，防止上下管直通，虽然理想仿真不会炸管，但这符合工程习惯）。
    
-   构建电机物理模型：使用传递函数 1/(Ls + R) 来模拟电机绕组。
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQibTibE3fqdt0jt60QCFHSa3qlBPRHwopkxz6GqNhibtpfyTzmKVib3VrnUT4uuzF95ibM6R6hAg1m59mYqaAmTFqibGW4dwIH7FicicU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAS3aibmpTQQiaPgVsEpOZksvicBntyo2CVWlSkQV6vjN6kxMoZL9CA8LSsAOibKTG6SJCTt6icWeYgibt68zfSJx3YtjJLD3jibNO0icWQ/640?wx_fmt=png&from=appmsg)

3.  **观测结果：**
    

我们以A相为例，看下占空比更新时的波形：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQiaC2r7gtRarSONG3J9X7VwOCoPdOytqpZ3eXWNFVJRzDvNLQ5gUArbSTxRDUEsFOlyj0BBegjPsNJJ0rzut9Y3riaP8jLk2wL4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARF1pbW6HHnALX5XQmWyHfw8VdBUictQQwLePV3EMdBRicPtVAaQfjHz6GOYWXGULNJPEHUJiaUrLPljtE67bwgzWMWdfjgr9s0xQ/640?wx_fmt=png&from=appmsg)

当时间大于8.45ms后，黄色的CCR\_A的值明显大于蓝色的CNT值，此时应该看看黄色的CCR\_A的占空比明显增大，但是，由于我们开启了 Preload (影子寄存器) 且 RCR = 1 (每2个周期更新一次)，A相 PWM 波形不会在 8.45ms 立刻变宽，而是会有明显的“滞后”，必须等待下一次有效的 Update Event (UEV)。

ADC的触发时刻，也是每2个中断后（上溢中断1次+下溢中断1次）进行一次更新。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARVYP8Kb0Pu3xoGC2dOQ1jBRfK2zvibVakUHHUOH6uGvdCcF8CviatdSInbSt6R5Ih2h5sYkDj7VAA4wqAGkGYu7MUTCqEAJug28/640?wx_fmt=png&from=appmsg)

我们再来看下写入 STM32 CCR1, CCR2, CCR3 寄存器的计数值。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARPwGaKfTfedaJx94qjAxXqB9f6iagPLBvZaOcEbia8iabKvRLN73O36eIFUaicjM8lf0df86swKfZntXz8XYE6bOTKyhHaLzhYofs/640?wx_fmt=png&from=appmsg)

波形呈现显著的“**马鞍形**”，波形里的凹陷，就是我们在代码里计算 uZero（零序分量）并注入的结果。它的物理意义是：**我们在不改变电机相电压差值（线电压）的前提下，人为地把三相电位同时压低或抬高，从而让直流母线电压的利用率提高了 15.47%。**

[这就是为什么我们说 SVPWM 是把“圆”画得最大的算法](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485306&idx=1&sn=bf7ba061acfec735abe64e7545c31d6b&scene=21#wechat_redirect)。这个马鞍波，就是写入寄存器的最佳‘乐谱’。”

我们再来看下电机绕组的电流波形：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARn32nOfjo2icoOTvuWHD25yujWBTibqX4NYwS8b4IlBJCcSoAN4tCB5nZykDnNfcic69dyyXyo7DGdoiakiaRiay6CYawLibDYoKJaiaY/640?wx_fmt=png&from=appmsg)

虽然我们给逆变器的指令是那一串串忽宽忽窄的方波：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATZITg8nuSmkpcKdVtO83asiaPUtXP2ZQicsLaXWA7iaBDF5GI9AT1ImxkLONqtllESUKl1zj6YItvmduickaviaSbUzIocYXKVhPjI/640?wx_fmt=png&from=appmsg)

但电机——这个基于电感和电阻的物理实体，它天然就是一个**低通滤波器。**电感平滑了电流，过滤掉了高频的开关噪声，只留下了低频的基波分量。

**这三条完美的正弦电流，就是我们用****TIM1****寄存器里的那些整数，在物理世界里“召唤”出来的真实力量。** 这就是“把论文写进寄存器”的最终闭环！”

以上这个实验，能让各位同仁彻底告别对PWM硬件的“黑盒”认知。各位最终会发现，那些寄存器里的每一位，都在以一种极其精密的方式，共同演奏着我们想要的“交响乐”。

下一讲，也是我们这个系列的最后一讲，咱们就要来聊聊这条流水线的“**出口**”——PWM\_set\_DC 和 PWM\_set\_Z，以及**互补**、**死区**这些把“数字信号”变成“高压脉冲”的最后一步。

好，今天就到这里。大家可以思考一下，如果 RCR 设置成0，对整个系统会有什么影响？CPU会更忙吗？控制性能会更好吗？

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/1O1wwnlINLiQL0-7S5\_D1rA?pwd=kfjb 提取码: kfjb