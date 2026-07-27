# 《零序注入SVPWM这件小事》｜04讲：不问扇区，也能抵达——min–max居中注入的几何直觉

原创 傅存敬 电磁散人 2026-02-04 07:11 广东

> 原文地址: [https://mp.weixin.qq.com/s/3idw7JZlH95UDcGiPG3n6Q](https://mp.weixin.qq.com/s/3idw7JZlH95UDcGiPG3n6Q)

各位同仁，前面几讲，咱们把地基打得差不多了。我们知道了：

1.  零序是个好工具，能调占空比，不影响线电压。
    
2.  SVPWM比SPWM牛， 牛就牛在它敢用零序去“削平”相电压，把电压利用率从86.6%干到100%（或者说，把圆形轨迹从半径0.5撑到0.577）。
    

那么今天，咱们就要来揭开那个最核心的“黑魔法”：**SVPWM到底注入了一个什么样的零序分量，才实现了这个效果？**

咱们先回忆一下扇区法。在扇区法里，我们辛辛苦苦判扇区、算T1/T2，最后得到三相的占空比。那个过程，是纯粹的几何计算。

但是，咱们也说了，在文末代码的 pm.c 这个文件里，根本没这些东西。它用的是另一套路子。这套路子，就是我们今天要讲的 **min-max居中注入**，也经常被称为“**等效SVPWM零序注入**”。

这个方法，可以说是连接“扇区法”和“载波比较法”那座桥上，最繁忙的一条车道。

它的核心思想非常非常简洁，甚至有点出人意料的简单。

假设我们已经通过逆Clarke变换，得到了三相理想的相电压参考值 ua\*, ub\*, uc\*。这三个值，在任何一个瞬间，总有大有小。我们把它们三个里面最大的那个，记为 umax，最小的那个，记为 umin。

现在，我们想给这三相同时加上一个零序偏置 e，得到最终的调制波 ua, ub, uc。我们的目标是：

1.  **不改变线电压**：这个“同加偏置”已经保证了。
    
2.  **尽可能大地利用母线电压**：也就是让三相调制波的“摆幅”尽可能大，但又不能超出 \[-1, +1\] 的范围。
    

怎么才能让摆幅最大呢？直觉告诉我们，最好的办法，就是把三相波形的“整体”，**在**\[-1, +1\]**这个框框里，上下居中。**

想象一下，你手里有**三根长短不一的棍子**，垂直立着。你想把它们放进一个有天花板和地板的**房间**里。怎么放，才能让最高的棍子尽可能高，最低的棍子尽可能低？

答案就是：**让最高棍子的顶部，和最低棍子的底部，离天花板和地板的距离，一样远！** 也就是取它们的中点，对齐房间的中线。

**“房间”**：在我们的逆变器里，就是PWM占空比的有效范围。硬件上，占空比是从0到100%。在软件里，我们通常把它归一化到 \[0, 1\] 这个区间。

-   0 就是“地板”（对应下管一直开）。
    
-   1 就是“天花板”（对应上管一直开）。
    
-   0.5 就是这个“房间”的**中线**。
    

“**三根棍子”**：就是我们通过逆Clarke变换得到的，理想的三相电压参考值 ua\*, ub\*, uc\*。

-   为了和占空比域对齐，我们先假设这三个值已经经过某种缩放，但它们的“相对高度”没变。
    
-   umax 就是最高的棍子。
    
-   umin 就是最矮的棍子。
    
-   这三根棍子作为一个整体，它们的**“中点”**在哪里？就在最高和最低那两根棍子的正中间，也就是（umax + umin）/2 。
    

**我们的目标**是：把这三根棍子作为一个整体，上下移动，使得它们的“中点”（umax + umin）/2  正好对齐“房间”的“中线” 0.5。

为什么要这样做？因为只有这样，最高的棍子 umax 和最低的棍子 umin 距离天花板 1 和地板 0 的**裕量**才是相等的。这保证了在不撞墙的前提下，这组棍子的“总高度差” (umax - umin) 可以最大化。这个高度差，就对应着加在电机绕组上的**线电压**。

那么，**怎么实现以上的目标呢？**我们来手推一下这个偏置公式。

加上偏置后，新的三相值变成了：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UcsDwZgrXyBxCdDiafyHcczsvXnTfRKJvPXcpI5NCmopEPwsickgcWKFQ/640?wx_fmt=png&from=appmsg)

新的最大值是 umax\_new = umax + e。

新的最小值是 umin\_new = umin + e。

我们希望新的这组棍子的“中点”，正好是 0.5。也就是：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UqfWWn7ILdcwC5ej8p4AYNzic2lYZIu9hnjCcGj4jWlLIqs9EaRbMwmg/640?wx_fmt=png&from=appmsg)

把 umax + e 和 umin + e 代进去：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UwL649wQniaPicsict8eHSyyIibarcElb3H5GcDj8l3vNutP5t7utKstkTA/640?wx_fmt=png&from=appmsg)

整理一下：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6U5N55SCms52mzib0JwfIBibch7gMHoenL7gOqjG6MZsbnDbnfFAvEJtmQ/640?wx_fmt=png&from=appmsg)

现在，解这个关于 e 的一元一次方程，太简单了：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UKvQFSKiaGwzdyzV8yyEm3ZY7nY18ib5CGTAxpJ3zTTATvZEz9IeUCeHA/640?wx_fmt=png&from=appmsg)

**推出来了！**这个 e，就是我们为了实现“居中”这个目标，必须给三相同时加上的那个零序偏置量。

咱们再看文末代码的 pm.c 文件，pm\_voltage() 函数里的 PM\_VSI\_CENTER 分支：

```
else if (pm->config_VSI_ZERO == PM_VSI_CENTER) {
```

一模一样！分毫不差！

这个公式，不是什么天外飞仙的魔法，它就是把“**把东西放到一个盒子的正中间**”这个极其简单的生活常识，用数学语言表达了出来。它的精妙之处在于，有人发现了SVPWM的本质，恰好就可以用这么一个简单、优雅的“居中”操作来等效实现。

这一下，是不是感觉SVPWM的“神性”少了点，但“人性”多了点？它不再是一个需要死记硬背的复杂算法，而是一个可以被直觉理解的、聪明的工程技巧。

以后你再看到这个公式，脑子里就可以直接浮现出那个“**把三根棍子往房间中间挪**”的画面。这样，就再也不会忘记了。

这也是这个方法为什么叫“**等效SVPWM**”的原因：

因为数学上可以证明，通过这种方式注入零序后，得到的三相占空比，与传统的七段式对称SVPWM（也就是零矢量时间 T0 在一个周期两头对称分配的那种）计算出来的三相占空比，是**完全等价的**。

这就太厉害了。这意味着：

-   **我们再也不需要去判断扇区了！**
    
-   **我们再也不需要去计算T1, T2了！**
    
-   **我们再也不需要去排布开关序列了！**
    

只需要简单地做一次逆Clarke，一次min/max，一次加法，就能得到和传统SVPWM一模一样的效果。算法的计算量大大降低，而且代码里没有了复杂的扇区判断逻辑，变得非常清爽、易于维护。

这就是为什么，你在那么多成熟的FOC库里，都看不到扇区判断，看到的都是这种min-max注入。因为它**更高效、更优雅**。

这也就是我们这讲标题的意义：**不问扇区，也能抵达。**我们不用再去关心矢量到底落在哪片“海域”，我们只需要在“信号”这个层面，把它调整到最合适的位置，硬件（PWM定时器）自然会帮我们把那个正确的矢量给合成出来。

这也正是文末参考文献里那座“**桥梁”**最伟大的意义：它告诉我们，你可以从“几何”那头过桥，也可以从“信号”这头过桥，两岸风景不同，但彼岸是同一个。

空口无凭，还是得上simulink。

**Simulink 演示**

**1\. 信号源**：继续用那个旋转的 uα，uβ 矢量。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6URJAFhALo2O0mkUzTh3tUkibzPmAqiaZtWTxSZBuUHOzIRsHoDqshxb1g/640?wx_fmt=png&from=appmsg)

2.  **两条并行路径：**
    

-   **路径A（扇区法SVPWM）**：用一个写好“判扇区、算T1/T2、算占空比”逻辑的MATLAB Function模块。这是我们的“真值”。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UwH6O6mV4u8pcpiajYAtzdm3TaGzEcNQzglsQxr7ianIbploE7PgTjicZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UgFawPQic1dVibR8emunicg205VDXVQ4diaWxr22kgMnU5xIGcTVKWaB9eA/640?wx_fmt=png&from=appmsg)

-   **路径B（min-max注入法）：**
    

1.  逆Clarke变换得到 ua\*, ub\*, uc\*。
    
2.  用Min/Max模块找到 u\_max 和 u\_min。
    
3.  计算偏置 uDC = 0.5 - (u\_max + u\_min)/2。
    
4.  将 uDC 加到三相上，得到最终的占空比。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UXb9w4iaR6S1hv6JXiaNBaqF59lm83oAuia1ria5voI07raoricUpU5FWIXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6U7YC9og5nxWzNEeO6EeyLB0M3KalbqquHt9zvC2tS1LMIHwdxMU6ia7w/640?wx_fmt=png&from=appmsg)

**3\. 观测结果**：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmCZronrMbWLmmvjdgDx6UfiaApom9xN7uoFgYuA6G0BH82ZjYA7nqAicPiaLOgvjShjgl3ibw8VCoSg/640?wx_fmt=png&from=appmsg)

示波器上，扇区法产生的调制波形，和min-max注入法产生的调制波形完全重合！

这个结果，就是最有力的证明：**两条完全不同的代码路径，得到了完全相同的结果。**

从此以后，各位同仁在写SVPWM时，就可以彻底抛弃扇区判断的思维定势了。min-max注入，才是现代FOC软件里更主流、更高效的选择。

那么，既然min-max这么好，是不是就一招鲜吃遍天了？pm.c 里的 PM\_VSI\_GND 和 PM\_VSI\_EXTREME 又是干嘛的？这就涉及到更复杂的性能权衡了，比如开关损耗。这就是我们下一讲要聊的：**连续PWM vs 不连续PWM**。

好，今天就到这里。各位同仁可以好好品味一下那个“居中”的思想，它是SVPWM零序注入的精髓。

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/1mex6ss-oECUp48b37FdwGw?pwd=hay3 提取码: hay3