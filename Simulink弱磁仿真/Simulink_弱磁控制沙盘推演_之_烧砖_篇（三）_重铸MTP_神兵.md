# Simulink“弱磁控制沙盘推演”之“烧砖”篇（三）：重铸MTPΑ神兵

原创 傅存敬 电磁散人 2025-11-25 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/H2AZ5ZnyUpviAB-wEinw2g](https://mp.weixin.qq.com/s/H2AZ5ZnyUpviAB-wEinw2g)

上周末原计划是要在simulink模型中仿真代码，猛然发现画布中还漏掉了MTPA模块，赶紧在今日的文章中补上。

文末的pm.c代码中，MTPA逻辑是通过`pm_loop_current`和`pm_torque_MTPA`这两个关键函数来实现的。它不是一个简单的“扭矩->电流”的开环转换，而是一个**根据实时反馈电流进行动态计算的闭环修正环节**。

让我们来精确复现这个逻辑！

**C代码中的MTPA核心逻辑，**来源于`pm_loop_current`函数：

```
if (pm->config_RELUCTANCE == PM_ENABLED) {
```

而 `pm_torque_MTPA` 函数是这一切的核心，套用了一个纯粹的数学公式：

```
static float pm_torque_MTPA(pmc_t *pm, float iQ)
```

其中 `pm->quick_iL4rel` 是 `0.25f / (Ld - Lq)`。

我们本篇文章的任务，就是将这个[无比精妙的计算过程](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484564&idx=1&sn=32a6c8ac25b8d884402fd979f8ef3dd5&scene=21#wechat_redirect)，在Simulink中完美复现！

#### **Step 1: 规划蓝图——MTPA模块的定位**

根据代码，MTPA模块不再是一个独立的、位于最前端的模块。它更像是一个“插件”，需要接收反馈的`Iq`，然后计算出一个`Id`的“增量”或者说“修正量”。

因此，我们创建一个新的子系统，就叫 `MTPA_Calculation_Module`。

-   **输入:**

-   Iq\_feedback: 也就是代码中的`pm->lu_iQ`。
    

-   **输出:**

-   Id\_mtpa\_component: 也就是代码中计算出的`iD`。
    

-   **参数: `const_lambda`, `quick_Lrel` (`Ld-Lq`), `quick_iL4rel` (`1/(4*(Ld-Lq))`)。这些我们将在模块的Mask里配置。**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqwu2HoAsQClx7Ov8qzsAHbvlZrMWGdxNgt1icicr0HuAUZHVVOdD5a8f4w/640?wx_fmt=png&from=appmsg)

#### **Step 2: 锻造核心——用Simulink复现MTPA公式**

**1\. 进入`MTPA_Calculation_Module`画布。**

**2\. 计算`bQ`和`bW`**:

-   bW = const\_lambda²: 拖入一个`Constant`模块（值为`const_lambda`），连接到一个`Math Function`模块（设置为`square`）。给这个输出信号线命名为`bW`。
    

-   bQ = (Iq\_feedback \* quick\_Lrel)²: 拖入`Constant`模块（值为`quick_Lrel`）和`Product`模块，计算`Iq_feedback * quick_Lrel`。然后将结果送入一个`Math Function`模块（设置为`square`）。给输出信号线命名为`bQ`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqwdqh0Mo5M6YP57vbqtP6f986nW1VJVNVdBU76e43QDFCAx3tqR463lA/640?wx_fmt=png&from=appmsg)

**3\. 计算内层`sqrt`**: `sqrt(4*bQ + bW)`

-   用一个`Gain`模块（值为`4.0`）乘以`bQ`。
    
-   用一个`Sum`模块，将`4*bQ`和`bW`相加。
    
-   将`Sum`的结果送入一个`Math Function`模块（设置为`pow`）。给输出信号线命名为`inner_sqrt`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqwLNl4IYibaIHVCkPf2JnZt8TBbjUFKPHJ5w9tdHbbtuvHrAub50icJffA/640?wx_fmt=png&from=appmsg)

**4\. 计算外层`sqrt`的内部参数**: `16*bQ - 4*lambda*inner_sqrt + 5*bW`

-   用`Gain`模块（值为`16.0`）乘以`bQ`。
    
-   用`Gain`模块（值为`5.0`）乘以`bW`。
    
-   用`Gain`模块（值为`4.0`）乘以`const_lambda`，再用一个`Product`模块乘以`inner_sqrt`，得到`4*lambda*inner_sqrt`。
    
-   用一个`Sum`模块，设置为`+--`或者`+-+`（根据连线顺序），将上述三项组合起来。
    
-   **注意符号！**
    
     第一个是`+ (16*bQ)`，第二个是`- (4*lambda*inner_sqrt)`，第三个是`+ (5*bW)`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqwKicwXmeWuBU85qgfEdJsHImicoH0z8iaCGar8O8EcJBU04ibIJagWzghGg/640?wx_fmt=png&from=appmsg)

**5\. 计算外层`sqrt`**:

-   将上一步`Sum`的结果送入一个`Math Function`模块（设置为`pow`）,并与一个值为0.5的Constant模块相乘。给输出信号线命名为`outer_sqrt`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqwdGEDT8DyEeVwbdLCrpeDiaHXAibpyLjaw27PpgpBmN9RKgFkiaTNO7VcQ/640?wx_fmt=png&from=appmsg)

**6\. 计算最终的`iD`**: `(outer_sqrt - lambda) * quick_iL4rel`

-   用一个`Sum`模块，计算`outer_sqrt - const_lambda`。
    
-   用一个`Product`模块（或`Gain`模块，值为`quick_iL4rel`），将上一步的结果乘以`quick_iL4rel`。
    
-   **大功告成！这个`Product`的输出，就是我们梦寐以求的`Id_mtpa_component`！将它连接到模块的输出端口。**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqwfibNT1Z1lrfhS65NLaHXOhiaIwnicsia0hsonT3kMmPgGcDThqeFnXookw/640?wx_fmt=png&from=appmsg)

**7\. 返回上一层级画布，右键点击Mask，封装核心参数。**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREfslGu7hficmaSRia2MEwQqw5Rqe3FgACViaRFRCFRiaIzZ9oPnZPPiaDscGZdO2HGaH5X0tpsbT6Rdxw/640?wx_fmt=png&from=appmsg)

**总结**

`MTPA_Calculation_Module`不是主干道上的一座桥，而是旁边的一座兵工厂。它根据战场的实时情报(`Iq_feedback`)，生产出一种叫“MTPA修正量”的特殊弹药，经过加工（低通滤波）后，补充到`Id`这条主攻部队里，然后再一起开赴下一场战役（弱磁和功率限制）。

**它的连接方式，揭示了`pm.c`这个算法的真正精髓——它是一个带有反馈修正的、非线性的流水线！**

目前我们已经锻造好了所有的神兵利器，现在，是时候以“总司令”的视角，将它们布置在正确的战场位置，构建出这座精妙绝伦的战争机器了！

下一期文章，我们将会把这三块“神石”按照算法真正的总图连接起来！一起构建`pm.c`中的关于MTPA控制的灵魂！

  

参考代码：

https://github.com/rombrew/phobia/blob/master/src/phobia/pm.c

  

模型链接：

https://pan.baidu.com/s/1w5TRgpsN6IwEYKVjC5kNKA?pwd=kf7p 提取码: kf7p