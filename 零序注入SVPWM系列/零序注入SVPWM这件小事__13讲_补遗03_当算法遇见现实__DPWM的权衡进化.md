# 《零序注入SVPWM这件小事》｜13讲-补遗03：当算法遇见现实——DPWM的权衡进化

原创 傅存敬 电磁散人 2026-02-20 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/9g\_\_E9JzYYcfSUKDjV54qA](https://mp.weixin.qq.com/s/9g__E9JzYYcfSUKDjV54qA)

各位同仁，在前面几讲，我们已经把 PM\_VSI\_EXTREME 这个策略的核心思想给挖出来了：它是一种**自适应的、旨在最小化瞬时开关损耗的DPWM**。

但是，我们这个推论，是建立在两个“默认前提”上的：

1.  **硬件模型**：我们假设用的是**下桥臂采样**，所以“钳下管”能创造采样窗口。
    
2.  **优化目标**：我们假设算法的首要目标是**降低开关损耗**。
    

现在，咱们就要来做一次思维的“进化”。如果这两个前提变了，PM\_VSI\_EXTREME 的决策逻辑，或者说，整个DPWM的玩法，应该如何随之进化？

* * *

**场景一：当“土地”换了模样——从下桥臂采样到“三相在线采样”**

想象一下，我们的项目升级了，硬件工程师大笔一挥，给我们用上了**三颗在线采样电阻（In-line Shunt Resistor）**，或者更豪华的**霍尔电流传感器**。

这意味着，硬件模型改变了：**之前**是：只有下管导通才能采到电流；**现在**是：在PWM周期的任何时刻，只要有电流流过，我们都能直接测量到三相的相电流。

这个改变，对我们的调制策略意味着什么？

这意味着，**我们从“为测量让路”的枷锁中，被解放了！**

PM\_VSI\_EXTREME 那个复杂的、与采样窗口强相关的决策逻辑，一下子就失去了它最重要的存在意义。我们不再需要为了“[借一束月光](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485037&idx=1&sn=34ad9c107aae358b358629b54af0ab22&scene=21#wechat_redirect)”而去牺牲波形了。

那么，在这种“富裕”的硬件条件下，我们的DPWM策略该如何进化？

**答案是：回归初心，专注于更纯粹的优化目标。**

1.  **如果首要目标是“最小化开关损耗”：**
    
    **我们就不再需要去管“钳上还是钳下对采样的影响”了。那个决策条件 (bMIN + bA < bMAX) 依然有效，但它的意义变得更纯粹了：纯粹是为了“捏软柿子”，让电流大的相休息。这时候，  PM\_VSI\_EXTREME 就进化成了一个纯粹的“最小损耗DPWM”。**
    

2.  **如果首要目标是“最小化电流纹波”：**
    
    **这一下，DPWM可能就不是最优解了。因为我们知道，DPWM的电流纹波天生就比CPWM要大。在这种情况下，最明智的选择，可能就是放弃 EXTREME 模式和 GND 模式，回归那个品学兼优的“三好学生”—— PM\_VSI\_CENTER 模式。因为硬件已经解决了测量问题，我们就可以毫无顾忌地去追求最平滑、谐波最低的波形。**
    

所以，算法的进化，第一条路，就是当硬件约束解除时，回归并专注于更核心的性能指标。

* * *

**场景二：当“远方”换了方向——从最小损耗到“最小电流纹波”**

好，我们再来设想另一个场景。我们的硬件没变，还是那个对采样很挑剔的“下桥臂采样”。但是，我们的应用场景变了。比如，**之前**是：我们做的是大功率风机，客户对噪音不敏感，但对散热和成本要求苛刻，所以“最小损耗”是第一要务；**现在**是：我们要做一个医疗设备里的高精度伺服电机，要求转矩波动极小，电流极其平滑，一点点“抖动”都不能有。这时候，“**最小电流纹波”成了我们的“北极星”。**

在这种情况下，PM\_VSI\_EXTREME 模式那个基于“最小损耗”的决策逻辑，还适用吗？

**不适用了。因为它的“世界观”和我们的新目标冲突了。**

我们需要一种新的DPWM策略，它的决策依据不再是“哪个相电流大”，而是“哪种钳位方式，能让当前这个PWM周期内的电流纹波均方根（RMS）最小”。

这种策略，在学术界被称为 **Minimum Ripple DPWM**。它的决策逻辑通常是：

-   它会去计算，如果我钳上管，在接下来的 Ts 时间内，电流会怎么走，纹波有多大。
    
-   再计算，如果我钳下管，纹波又会是多大。
    
-   然后，选择那个能让**纹波更小**的钳位方案。
    

这个决策条件，会比我们现在看到的 (bMIN + bA < bMAX) **复杂得多**。它通常会涉及到电机的**电感参数**Ld, Lq，以及当前的**转速和反电动势**。

比如，一种简化的“最小纹波”思想是：**总是钳位在那个电流变化最剧烈的相。**因为钳位等于“刹车”，你把跑得最快的那个车给按住，整个系统的“混乱程度”（纹波）才可能会降低。

那么，代码该如何进化？

-   PM\_VSI\_EXTREME 里的那个 if 条件，就需要被替换掉。
    
-   我们需要引入一个新的、基于电感和转速的判断逻辑。
    
-   这可能会增加计算量，但为了实现“最小纹波”这个核心目标，是值得的。
    

**所以，算法的进化，第二条路，就是当优化目标改变时，重构决策的“成本函数”，让每一个** if **都服务于新的“北极星”。**

* * *

**总结：算法的“进化论”**

今天这个技术补遗，我们其实是在探讨一个非常深刻的软件设计哲学：**没有一劳永逸的“最优算法”，只有“最适合当前场景”的算法。**

-   **硬件拓扑**，定义了算法的“**边界和约束**”。
    
-   **性能目标**，定义了算法的“**方向和权衡**”。
    

一个真正优秀的、可量产的FOC固件（比如我们正在解剖的 pm.c），它的高明之处，不在于它用了某个“天下第一”的算法，而在于：

1.  **它提供了选择**：CENTER, GND, EXTREME，给了工程师根据不同场景选择不同策略的自由。
    
2.  **它的实现是参数化的**：k\_EMAX, ts\_clearance, fault\_current\_tol... 所有的关键参数都可以配置，使得算法能够适应不同的电机和硬件。
    
3.  **它的权衡是显式的**：像 PM\_VSI\_EXTREME 这样的代码，它把“权衡”本身（在损耗和测量之间做选择），写进了代码里，让后来者能够读懂它的“用心”。
    

* * *

**Simulink 演示**

1.  **搭建一个可切换的“现实世界”模型：**
    

-   **硬件模型**：可以切换 CENTER 和 EXTREME 两种模式。
    
-   **性能评估**：同时计算“总开关损耗”和“电流纹波RMS”两个指标。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARFwygnGOgucPDlpeDpUSSXFlgpZz25uqEfV88xx5MY1kwV2ErzKuRcmmMd5QR3YspOCHeelm1qmQIPc05Xzdub3vN6VhepL2c/640?wx_fmt=png&from=appmsg)

2.  **实现两种DPWM决策器：**
    

-   **决策器A（最小损耗）**：复现 pm.c 的代码逻辑。
    
-   **决策器B（最小纹波）**：用一个简化的逻辑，比如“钳位在电压变化率最大的相”。
    

3.  **观测结果：**
    

首先观测 CENTER 模式下的结果。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARiaVLSDJLwz0ynpgsZUsaibEibw8JhicmFDp8YbYpkASIG5WjCxOAWjA6DKv3FBoiaEXJPt6XoCC4ePoqTlqdeVWdiajeUVf09Zibw0k/640?wx_fmt=png&from=appmsg)

我们首先来看下Scope\_Main的波形：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARv4bLCM5tzAWGVUkMd7zDZicQBCXD5ffgG2Fk0lPIXic0A1txDyNksYXUTrR1e5Lia3HQ8nBmmFhDSb1IffojKzNgQTiabF5Y3pGs/640?wx_fmt=png&from=appmsg)

-   **上图**：这就是经过 PM\_VSI\_CENTER 调制后的三相占空比波形。各位同仁请看那个经典的**马鞍形**，波形中间凹下去的那一块，就是**三次谐波注入**的特征。这就是 uZero = 0.5 - (uMAX + uMIN) \* 0.5 这个简单的公式，给波形施加的“魔法”。它把正弦波的顶峰“按”下去了，从而留出了更多的电压裕量。
    
-   **下图**：这是 RL 负载上的三相电流。虽然占空比是马鞍形的，但咱们看电流，它是**非常漂亮的正弦波**！这再次验证了我们的核心结论：**零序注入不改变线电压（进而也不改变相电流），只改变占空比的分布。**
    

我们再来看下Scope\_Zero里的波形：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATNabQYMfBeWk9U3FpxOfaniboic7ib7HjwibMv4ib6t0450KomRI1Kc96ibZpb43Re7JicnVdxIUd70L9zeFplWjhw7blERpXgAibyM8E/640?wx_fmt=png&from=appmsg)

这是一个频率很高的三角波信号，也是 PM\_VSI\_CENTER 计算出来的零序分量 uZero。它以 3 倍于基波频率（我们设的是 50Hz，所以这个是 150Hz）在波动。这就是著名的**三次谐波零序**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATFE1qzJfXBc2EUvNKb6rRiaBBmicpoWiczMJM4KxZlNdeA0uenyktvjewFP8s7YHjrR9ysWLWR0Ls9oBic1eBzlTmL1vdicFZIHZE4/640?wx_fmt=png&from=appmsg)

我们再来看一下Scope\_Loss (瞬时开关损耗)的波形：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASlbPAua2jUYmI1D7v4qVT6B9kl43vO2BVc9YFt0DQFUbxcnmYLGiagZUza6fdB4aXZ5NCZUuNyQialHgZ9FJMicAicpCTtInqheSc/640?wx_fmt=png&from=appmsg)

以上这张图展示了损耗随时间的变化。

-   **上升阶段**：最开始损耗从0迅速上升，这是因为电流在从0建立到稳态的过程中，电流幅值越来越大，开关损耗自然也跟着水涨船高。
    
-   **稳态阶段**：在大约 0.04s 后，损耗进入了稳态波动。
    

-   **平均值**：大概在 **360** 左右(留意一下这个数字，后面要对比使用）。这是 CENTER 策略下的基准损耗。
    
-   **波动**：那个小小的波浪，是因为三相电流绝对值之和 |ia|+|ib|+|ic| 在一个电周期内并不是完全恒定的（稍微有一点点波动，大约 13% 的纹波），所以损耗也会跟着微调。
    

下一步，把 Switch\_Strategy 模块的 Value 从 0 改成 1，切换到 EXTREME 策略。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAReBDw4VxRH4qmwkQAGnm5RTM1P8uabPSFVaiaLmGlreAcgiaswCYMcs7jFQ7paCFxibjwtvzl1aBcNVFCjkVY5DlTYTOwicxm6KVg/640?wx_fmt=png&from=appmsg)

我们首先来看下Scope\_Main的波形：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATKPLZxwFNpaVXr0xr6mPqJ3dkRRFWiawDC3hqQWybHeTS9nMkEWpGTFjRwqfJGjl9NTAo55PYRvamCAcjyOr10iaFzgmxScKUxI/640?wx_fmt=png&from=appmsg)

-   **上图**：这是此时的**占空比**波形，注意看那些**平顶（Clamp to 1）**和**平底（Clamp to 0）**。这就是 DPWM 的标志性特征！在每一个电周期里，三相占空比轮流被“按死”在 0 或者“顶死”在 1。这意味着，在那段时间里，对应的功率管**完全停止了开关动作**。这就是为什么它叫 **Discontinuous PWM**。
    
-   **下图**：这是电机相电流波形，依然是**正弦波**！这再次证明，哪怕占空比长得像“狗牙”，只要线电压基波是对的，电流就是正弦的。当然，如果你放大看，会发现纹波比 CENTER 策略稍微大了一点点，这就是代价。
    

我们再来看下Scope\_Zero里的波形：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATPUJ8aFg91EkgaxGk47ibPYZEq4UJpIuMwjogWPGv2uSbNk53ZK5VvDrnkygm8trwXXRuQbRDTxTlDr4fC2ySSA0XOtWIAKibHk/640?wx_fmt=png&from=appmsg)

**这是什么鬼画符？** 别慌，这就是 EXTREME 策略下零序波形的真面目。它不再是那种优雅的、连续的三次谐波（马鞍形）。它是一系列**尖锐的、不连续的跳变**。每一次跳变，都对应着策略在“钳上管”和“钳下管”之间的切换，或者钳位对象的切换。正是这种剧烈的零序波动，才把三相电压“暴力”地拉到了 0 或 1 的边界上。

我们再来看一下Scope\_Loss (瞬时开关损耗)的波形：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQTa0tGUQg6uI7vPAzvE1EapiaiavnDhcdMYiccxHXjRdkJpIdN3hkLhaicdTt9FcS7CeCDepFcBp9pjuBgFUymDLpqfDiblHPPwZQU/640?wx_fmt=png&from=appmsg)

-   **平均值大降**：还记得刚才 CENTER 策略的平均损耗吗？大约是 **360**。现在看这张图，稳态平均值目测只有 **240-250** 左右。**足足降低了 1/3**！
    
-   **深坑曲线**：各位同仁请看损耗曲线上的那些周期性的“深谷”。每一个谷底，损耗都掉到了非常低的位置。
    

**什么时候掉下去的？** 对照一下电流波形，你会发现，掉下去的时候，正是**某相电流达到峰值的时候！**

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASylAGP4gflWTOHspOGTpBdr7HaAaPygV0cbyVgsSnrXPfqKHP9YzwVDJ6QLRGiadicBRMSRCF1x6bgTjaicct6ywQkW6KIibOINs4/640?wx_fmt=png&from=appmsg)

**为什么会掉下去？** 因为 EXTREME 策略在这个时候，强行把那个电流最大的相**钳位**了（不开关了）。最大的电流源头不产生开关损耗了，剩下的两个小电流相产生的损耗自然就很少。

**这就是“投机”！** 它专门挑电流最大的时候“偷懒”，从而实现了极其高效的降损。

做完这个实验，相信各位同仁就能深刻理解什么叫“**算法的贪婪**”，什么叫“**用策略换效率**”。也能深刻理解到，为什么一个成熟的FOC项目，调制策略部分往往不是几行代码就搞定，而是充满了各种 if-else、配置开关和复杂的判断。因为那里，正是理论与现实激烈碰撞、反复妥协的“战场”。

好，这次的技术补遗就到这里。从下一讲开始，咱们就要回到本讲的主线了。各位同仁，我们明天见。

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/10wt6i8MhbCv\_RGIXEwT0BA?pwd=6d35 提取码: 6d35