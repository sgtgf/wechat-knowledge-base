# 《零序注入SVPWM这件小事》｜13讲-补遗02：解密 PM\_VSI\_EXTREME 的决策之心——(bMIN + bA < bMAX)

原创 傅存敬 电磁散人 2026-02-19 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/t5peyTk52k9bE4CmQCV0iA](https://mp.weixin.qq.com/s/t5peyTk52k9bE4CmQCV0iA)

各位同仁，欢迎来到我们的“技术补遗”环节。

今天，咱们就要来攻克 PM\_VSI\_EXTREME 这座“九层妖塔”最顶上、也是最神秘的那一层——那个让人百思不得其解的**决策条件**。

上一讲咱们已经搞清楚了，PM\_VSI\_EXTREME 手里有两个“战术选项”：

-   **钳下管（DPWMMIN）**：uDC = 0.f - uMIN
    
-   **钳上管（DPWMMAX）**：uDC = 1.f - uMAX
    

它用下面这个条件来做选择（ pm\_voltage() 函数 PM\_VSI\_EXTREME 分支）：

```
bA = pm->fault_current_tol;
```

咱们来一步步把这个条件“翻译”成人话。

1.  **把变量名换成物理意义**
    

-   bMIN：是**电压最小**的那一相的**电流绝对值**。
    
-   bMAX：是**电压最大**的那一相的**电流绝对值**。
    
-   bA：这里有个小“陷阱”，它被重新赋值了！它不再是A相电流，而是 pm->fault\_current\_tol，一个**固定的电流容差值**（比如5A）。而且，只有在三相PWM都没有被钳位（占空比不是100%）的情况下，这个容差才有效，否则是0。我们可以把它理解为一个“**决策偏置**”或者“**决策滞环**”。
    

所以，这个决策条件变成了：

**如果** (电压最小相的电流**+**一个固定的电流偏置**<**电压最大相的电流)，**那么就**钳上管**；否则，就**钳下管**。**

**2\. 把“钳上/钳下”翻译成“开关损耗”**

我们知道，开关损耗主要发生在功率器件（MOSFET/IGBT）的开通和关断瞬间。损耗的大小，和**开关时的电流**成正比。

-   **钳上管 (DPWMMAX)**：
    

-   电压最大的那一相，上管常开，**不开关**，开关损耗为0。
    
-   电压最小和中间的两相，还在开关。它们的开关损耗，和它们各自的电流 bMIN 和 bMID 有关。
    

-   **钳下管 (DPWMMIN)**：
    

-   电压最小的那一相，下管常开，**不开关**，开关损耗为0。
    
-   电压最大和中间的两相，还在开关。它们的开关损耗，和它们各自的电流 bMAX 和 bMID 有关。
    

现在，这个决策的本质就浮出水面了。它是在比较**两种钳位策略，哪一种能让“正在开关的桥臂”上的电流更小，从而实现瞬时开关损耗的最小化。**

**3\. 把决策条件和“最小损耗”关联起来**

我们都知道，在一个PWM周期内，总的开关损耗，主要由那两个“正在开关”的桥臂上的电流决定，因此：

-   **选择“钳上管”的代价**：让 bMIN 和 bMID 这两相去承担开关损耗。总代价约等于 k \* (bMIN + bMID)。
    
-   **选择“钳下管”的代价**：让 bMAX 和 bMID 这两相去承担开关损耗。总代价约等于 k \* (bMAX + bMID)。
    

我们想要选择代价小的那一个。也就是比较 bMIN 和 bMAX 的大小。

-   如果 bMAX 比 bMIN 大很多，意味着“电压最大相”的电流很大。如果我们选择“钳下管”，就要让这个大电流相去开关，损耗会很大。这时候，更明智的选择是“**钳上管**”，让这个电流最大的相“休息”，而去让电流较小的 bMIN 相去开关。
    
-   反之，如果 bMIN 比 bMAX 大，那就应该选择“**钳下管**”，让电流大的 bMIN 相“休息”。
    

注意哦，这里有点绕，我猜有些同仁看到这里还会有疑问，比如，被名称迷惑了，\*MIN 不应该代表最小值吗？怎么会比 \*MAX 大呢？我提前解释好，或者说，重申一下：

-   bMAX：是“**电压最大相**”所对应的那个**电流绝对值**。
    
-   bMIN：是“**电压最小相**”所对应的那个**电流绝对值**。
    

**关键的误区就在这里**：在任何一个瞬间，电压最大的那一相，它的电流**不一定**是三相中最大的。同样，电压最小的那一相，它的电流也**不一定**是最小的。

举个例子：假设在某一时刻，电角度处于第 I 扇区，如文末参考文献的Fig.6。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQLVYm4R7PPPnKiboJ7z1MNy6yibOqExjZLP9PNzUnpX12Z0BQzbbgfNj0hpxOVyNAn76icpgj0kicRHbBEZHic6RXQz95o68nzwbnY/640?wx_fmt=png&from=appmsg)

-   **电压关系**：uA 是正的最大（uMAX），uB 是负的，uC 是负的且绝对值最大（uMIN）。所以，“电压最大相”是A相，“电压最小相”是C相。
    
-   **电流关系**：如果电机带感性负载，电流会滞后于电压。此时，A相电流可能才刚刚开始从0增长，还不是很大。而B相和C相的电流，可能还处于比较大的负值状态，它们的**绝对值**可能比A相电流的绝对值要大得多。
    

所以，bMIN 和 bMAX 的命名，是跟着 uMIN 和 uMAX 走的，它描述的是“**特定位置**”上的电流，而不是电流本身的“**大小排行**”。

明白了以上这一点，各位同仁也许会恍然大悟，这不就是“**捏软柿子**”的策略嘛！**谁的电流大，就让谁休息（钳位），让电流小的去干活（开关）。**

现在再来看那个决策条件：if (bMIN + bA < bMAX)

-   当 bMAX 显著大于 bMIN 时（它们的差值超过了 bA 这个偏置），条件成立，选择 1.f - uMAX，也就是**钳上管**。这正好对应了我们上面分析的“让电流大的bMAX相休息”的策略！
    
-   当 bMAX 不比 bMIN 大那么多时，条件不成立，选择 0.f - uMIN，也就是**钳下管**。
    

**所以，这个决策的核心思想，就是一种“瞬时开关损耗最小化”的DPWM策略！** 它在每个PWM周期，都动态地评估哪种钳位方式能让开关动作发生在电流更小的桥臂上，从而实现整体损耗的降低。

那个 bA（fault\_current\_tol）的作用，就是一个**决策滞环**。它避免了在 bMIN 和 bMAX 非常接近时，系统因为微小的电流波动而频繁地在两种钳位策略之间来回切换，从而保证了决策的稳定性。

**总结一下这段代码的智慧**

PM\_VSI\_EXTREME 的设计智慧，可以总结为三点：

1.  **它是一种DPWM**：通过钳位实现了开关次数的降低。
    
2.  **它是一种自适应DPWM**：它能在DPWMMAX和DPWMMIN之间动态切换，而不是写死的。
    
3.  **它的自适应策略，是面向“最小化开关损耗”的**：它总是试图让电流最大的那一相“休息”，从而在不牺牲太多纹波性能的前提下，实现比固定DPWM更优的损耗表现。
    

这个策略，在学术界通常被称为 **Minimum-Loss Vector PWM** 或者类似的概念。pm.c 的作者，用一种极其精炼和工程化的方式，把这种先进的调制策略给实现了出来。

* * *

Simulink 演示

空口无凭，还是在simulink中演示一下 PM\_VSI\_EXTREME 的策略，会更加方便各位同仁的理解。

我们就是基于 pm.c 代码思路，在simulink中重现A相占空比的调制波形、注入的零序矢量波形和A相的开关状态。同时引入一个模块用以模拟Cortex-M4内核中的TIM1时基产生的PWM波形。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAS4aLdghOWbZL6CVbGSumU6TicAyiajZeKbXZ7kCjW8lumGh3veltF7Rfia7RgZWMZZwHP0dRBrn0VM8nCSm4S1RGFHjKjBFCRHYE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASc7qw6FamNwRvywyDWO5xG6odZr6PbEtakdNZlgkSAuMicvcjmxMLIfRXibTzrEj4sOm2okamAnicNmomxqneLlBNNWbmOlhJVyk/640?wx_fmt=png&from=appmsg)

看下仿真结果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASc5SmktXvKiafeF69HXP3OkIsQGPsXZ907aqVl1pPxADfg3UxzuprnlbbXZUr3XxKQm7BfCt84AGOqqTxAeQg1kYaW1wYQxhyE/640?wx_fmt=png&from=appmsg)

-   **scope中的上图(Duty\_A):**
    

这就是 A 相的占空比。可以明显看到它在某些区间**死死地贴在 1.0 (Top)**，在某些区间**死死地贴在 0.0 (Bottom)**。这就是 **EXTREME 策略**的“钳位”行为！它交替使用 DPWMMAX (钳上管) 和 DPWMMIN (钳下管)。中间那些非钳位的“马鞍形”过渡，就是它在进行正常的正弦调制。

-   **scope中的中图(Zero\_Seq):**
    

这就是注入的零序分量 uDC。可以看到波形呈现剧烈的跳变，特别是在正负之间切换。每一次跳变，都代表了策略从 1-uMAX 到 0-uMIN 的切换。这个切换点，就是由我们之前讨论的 (bMIN + tol < bMAX) 那个条件决定的！

-   **scope中的下图(PWM Pulses):**
    

A相的PWM开关行为，完全由**EXTREME 策略**的“钳位”行为决定，严格执行DPWMMAX (钳上管) 和 DPWMMIN (钳下管)的常通和常闭动作。

以上这个实验，就能让各位同仁从数据上，直观地看到 PM\_VSI\_EXTREME 这个“机会主义者”到底有多“精明”。

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/1dtkwB\_me\_QN-vRZCEwjhVQ?pwd=9am8 提取码: 9am8