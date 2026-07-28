# 《零序注入SVPWM这件小事》｜15讲：采样窗口的约定——pm\_clearance()怎样把‘可信’写成规则

原创 傅存敬 电磁散人 2026-02-24 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/aWww2gMScDs1cZIuRpvS6g](https://mp.weixin.qq.com/s/aWww2gMScDs1cZIuRpvS6g)

各位同仁，前面几讲，我们反复提到一个词——“**采样窗口**”。我们说，PM\_VSI\_EXTREME 策略是为了“**为测量让路**”，而 forced clamp 是为了“**创造采样窗口**”。

今天，咱们就要把这个幕后英雄请到台前，彻底搞清楚：**在FOC的世界里，一个“好”的采样，到底有多么重要？以及，**pm.c**是如何用一套精密的“规则”，来定义和管理“可信的测量”的？**

咱们要解剖的主角，就是 pm\_clearance() 这个函数。

* * *

**为什么采样需要“窗口”？**

在理想世界里，我们随时都能拿到精确的电流值。但在现实世界里，ADC采样是一个极其“挑剔”的动作。

想象一下，PWM开关在以几十kHz的频率疯狂切换，功率管每次开关，都会在电路上引起剧烈的**电压和电流振荡**，就像敲钟一样，会“嗡”地响一阵。这个“钟声”，就是**开关噪声**。

如果你恰好在这个“钟声”最响的时候去进行ADC采样，采到的值，根本就不是真实的相电流，而是一个被噪声严重污染的、毫无意义的数字。用这个数字去做闭环控制，无异于“闭着眼睛开车”。

所以，我们必须找到一个“安静的时刻”去采样。这个安静的时刻，就是采样窗口。它必须离前后两次PWM开关的“敲钟”时刻，都有足够的安全距离。

这个安全距离，在 pm.c 里，就被定义为 ts\_clearance。

我们看下 pm\_lazy\_build() 函数中的这段代码：

```
pm->ts_clearance = (int) (pm->dc_clearance * 0.000001f
```

这里的 pm->dc\_clearance 是一个用户配置的时间，比如 5.0us。ts\_clearance 就是把它换算成PWM定时器的计数值。它定义了一个“**禁区**”：在PWM周期结束前的这段时间内，不允许有开关边沿出现，否则采样就可能被污染。

* * *

pm\_clearance()：**一个严格的“数据质检员”**

pm\_clearance() 这个函数，它的角色，就像一个**数据质检员**。它在每个PWM周期结束时，都会被 pm\_voltage() 调用。它的任务就是，根据**上一个周期**和**当前周期**的占空比，来判断“**这一拍的采样，到底可不可信？**”

```
void pm_clearance(pmc_t *pm, int xA, int xB, int xC)
```

咱们来解读一下这个“质检员”的工作流程：

1.  **定义“禁区”**：xZONE = pm->dc\_resolution - pm->ts\_clearance;
    

在中心对齐PWM的**顶部**（也就是周期的中间），ADC会进行采样。xZONE 定义了一个**安全边界**。

2.  **检查“前科”**：pm->vsi\_A0 存储的是**上一个周期**A相的CCR值。pm->vsi\_AF = (pm->vsi\_A0 < xZONE || pm->vsi\_A0 == xTOP) ? 0 : 1; 这个判断，是在检查：**上一个周期的A相PWM脉冲的下降沿，是不是离本周期的采样点太近了？**
    

-   如果 pm->vsi\_A0 大于 xZONE，说明脉冲很宽，下降沿离采样点很近，在“禁区”内，所以 vsi\_AF（A-flag）被置为0，表示采样数据**不干净**。
    
-   如果小于 xZONE，说明脉冲比较窄，下降沿离采样点足够远，采样数据是**干净**的，vsi\_AF 置为1。
    
-   pm->vsi\_A0 == xTOP 是一个特殊情况，如果占空比是100%，没有下降沿，当然是干净的。
    

4.  **做出“总检”结论**：pm->vsi\_IF = likely(pm->vsi\_AF + pm->vsi\_BF + pm->vsi\_CF < 2) ? 0 : 1;
    

-   vsi\_IF 就是电压逆变器的“**I**nformation **F**lag”，是最终的“**数据可信**”标志。
    
-   为什么是 < 2？因为在三相三线制系统里，只要我们能精确采到任意两相的电流，第三相的电流就可以通过 ia + ib + ic = 0 算出来。
    
-   所以，这条规则的意思是：**如果干净的相少于两个，那这一拍的电流三相重建就是不完整的、不可信的，**vsi\_IF**置为0。**
    

6.  **更新记录：**pm->vsi\_A0 = xA;  把**当前周期**的CCR值存起来，作为**下一个周期**判断的依据。
    

这个 vsi\_IF 标志位，就是 pm\_clearance() 写给整个FOC系统的“**质检报告**”。系统里的其他模块，比如 pm\_feedback() 里的电流处理部分，或者观测器，都会先看一眼这份报告。如果 vsi\_IF == 0，它们就知道：“这顿饭不干净，别吃了”，然后可能会选择使用上一次的有效数据，或者采取其他的数据平滑策略，从而避免一次“数据中毒”引发的系统振荡。

* * *

**Simulink 演示**

今天这个“质检”过程，用Simulink模拟，效果拔群。

1.  **搭建“质检员”模块：**
    

严格按照 pm\_clearance() 的逻辑，用if/else和逻辑运算符，搭建一个能根据前后两拍CCR值，输出 vsi\_AF, vsi\_BF, vsi\_CF, vsi\_IF 标志的模块。

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_000_6aab9bbbc2f6.png)

2.  **信号源与噪声模块**
    

-   用一个高频的电压矢量，让它的占空比频繁地穿越“禁区”。
    
-   模拟开关噪声。当某个相的“干净”标志位（比如vsi\_AF）为0时，就在这一相的理想电流上，叠加一个随机的高频噪声。
    

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_001_1187e037f9c2.png)

3.  **两条并行路径：**
    

-   **路径A（无质检）**：直接使用（可能被污染的）电流反馈值。
    
-   **路径B（有质检）**：根据 vsi\_IF 标志，如果为0，就保持上一次的有效电流值；如果为1，才更新电流反馈。
    

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_002_abaa40d51eea.png)

4.  **观测结果**
    

我们先来看下Scope\_Inspector的结果：

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_003_42f8a32b9638.png)

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_004_b957d4ccc64c.png)

从上图可以清晰看见，标志位为 **1** 的时间远多于为 **0** 的时间，也就是说，只有当 PWM 占空比超过 **90%** (4500/5000) 时，才会触发“不干净”标志。这证明了 pm\_clearance 逻辑正在正确地监控 PWM 的“高占空比禁区”。它就像一个只有在极端情况下才会拉响的警报器。

更具体的，可以查看Scope\_Comparison示波器的波形：

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_005_f7cf5467389b.png)

**在存在信号毛刺的采样禁区，**pm\_clearance**直接把信号给“削平”了。**这就是 pm\_clearance 的核心价值：**与其吃有毒的饭（噪声数据），不如饿一顿（保持旧值）**。

为了方便各位同仁动态体会这个过程，文末又增加了一个封装成库的模型，直接修改相关参数，能体会到不同的噪声值与pm\_clearance 的灵敏度对采样造成的影响。

![](零序注入SVPWM这件小事__15讲_采样窗口的约定__pm_clearance()怎样把_可信_写成规则_images/img_006_9693e645b0e5.png)

以上这个实验，把 pm\_clearance() 这个“幕后英雄”的价值，体现得淋漓尽致。它就像一个经验丰富的门卫，虽然不直接参与生产，但它把所有的“危险品”都挡在了门外，保证了整个车间（FOC闭环）的安全、稳定运行。

到此为止，我们已经快要走完 pm\_voltage() 这条流水线了。下一讲，我们要回头看一个被我们之前“跳过”的、极其精妙的设计——forced clamp to GND/TOP。看看作者是如何“主动出击”，把一个原本“不干净”的采样窗口，硬生生给“擦干净”的。

好，今天就到这里。大家可以思考一下，pm\_clearance() 除了检查电流采样，还检查了 vsi\_UF（电压采样），这是为什么？在什么情况下，母线电压的采样也会被污染？

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：

模型1：https://pan.baidu.com/s/1-ehQUal4mK2MguzowQ-inQ?pwd=g1nm 提取码: g1nm

模型2：https://pan.baidu.com/s/1EwXASYenm5H\_bbqqS5QknA?pwd=7533 提取码: 7533