# 如何理解影响ADC精度的积分非线性（INL）误差

原创 付存敬 电磁散人 2025-08-20 21:00 广东

> 原文地址: [https://mp.weixin.qq.com/s/1uMWp00ihZVrCH3uYoeEyA](https://mp.weixin.qq.com/s/1uMWp00ihZVrCH3uYoeEyA)

今天我们来聊一个电子工程领域里非常重要的概念——模数转换器（ADC）的积分非线性误差（INL）。这个概念听起来有点专业，但别担心，我会用大家都能听懂的方式来解释。

想象一下，ADC就像一个翻译官，它的任务是把连续变化的模拟信号（比如电压、温度等）翻译成计算机能理解的数字信号（一堆0和1）。一个完美的翻译官（理想ADC）应该每次都在信号变化到特定值时，准确无误地切换到下一个数字码。这就像走楼梯，每级台阶的高度（1 LSB）都应该完全一样。

  

但是，现实中的翻译官（实际ADC）就没那么完美了。它的台阶可能高一点、低一点、宽一点、窄一点。之前我们讲过**微分非线性（****DNL****）**，它描述的是**单个台阶宽度**和理想宽度（1 LSB）的偏差。就像测量每级台阶本身是不是标准高度差。

  

具体情况可参考图1中ADC转换曲线示例：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREk6eOr5vTSXThulx9DVLsNAuWtVTQhiadN7JqqxfP8aDYz21nibvB0pg36U3e8F1JSGDgGU06lYCiaA/640?wx_fmt=png&from=appmsg)

图1 ADC转换的示例曲线

**那么INL****是什么呢？INL****关注的是“****高度差”****的累积！**

  

**1\. INL****的定义（核心理解）：**

  

想象一下，你从楼梯的起点（第一个转换点）开始往上走。理想的楼梯，你每走一级台阶，你的**绝对高度**应该正好增加1 LSB。实际的楼梯呢？因为每级台阶的宽度（DNL）有误差，你走到第k级台阶顶端的**实际高度**，可能和**理想高度**（k \* 1 LSB）不一样了。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREk6eOr5vTSXThulx9DVLsN3lzgVIBoYJDfUDI8fH2Sib2dHiaclQQ8EG9q3qiaPRJCBSRV94krfn8aQ/640?wx_fmt=png&from=appmsg)

  

**INL(k)** **就是第****k****级台阶顶端（也就是从第****k-1****码转换到第****k****码的那个点）的实际高度，比理想高度偏离了多少！**单位是LSB。

  

计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREk6eOr5vTSXThulx9DVLsNysnLIey1uc0x2iaOClQwT1ryo7Ql8kicxWObqYk3EhFscj25KrJbdpnQ/640?wx_fmt=png&from=appmsg)

  

其中 Ta(k) 和 Tideal(k) 分别表示从转换点(k-1) 到转换点 k 的实际转换和理想转换；而“理想步长”即为 ADC 的最低有效位（1LSB）。对于图1示例，从AD输出点 1（001）到AD输出点 2（010）的实际转换发生在理想转换之上 0.125 个LSB的位置。因此，AD输出点 2的INL(2) = +0.125 LSB。

  

**关键发现：**第m个AD输出点的INL，等于前面所有码的DNL之和！

  

即： INL\[m\]   \= DNL\[1\] + DNL\[2\] + ... + DNL\[m-1\] 。

**INL****是****DNL****误差的累积效应！**就像你走路，第一步差了5cm（DNL1=5cm），第二步又差了3cm（DNL2=3cm），那么你走了两步后的位置总共差了8cm（INL3=8cm）。

  

**2.** **为什么INL****很重要？**

  

 决定ADC精度的三个主要误差是：偏移误差、增益误差和INL。

 偏移和增益误差就像尺子的零点和刻度不准，可以通过“校准”（重新调零和调整刻度）来消除。

 **INL****代表了ADC****内部结构本身的不完美，是校准后剩下的主要误差来源！****它反映了ADC****的线性度好坏。**

  

**3\. INL****怎么表示？**

  

画图：最常见的是画一张图（如图2），横轴是输出数字码，纵轴是INL值（LSB）。这张图能直观地看到不同码值对应的偏差有多大，是正还是负。这张图还能“泄密”哦！比如：

  

 图像像三角形？可能是一种叫“分级式（Sub-ranging）”的ADC。

 图像像随机乱点？可能是一种叫“闪存式（Flash）”的ADC。

  

**标范围**：直接告诉你所有码值中，INL的最大值和最小值是多少（比如 -0.71 LSB 到 +0.5 LSB）。

  

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREk6eOr5vTSXThulx9DVLsNicwYyHm0pdNMz0I50ITdpu1l24saibWUvX0VLD1fZYIOgoQGYsoiaLkLg/640?wx_fmt=png&from=appmsg)

图2 INL与ADC编码值之间的关系示例图

  

**4\. INL****和量化误差的区别（重点！）**：

  

即使是一个完美的ADC（INL=0），它把连续信号变成离散数字码的过程，本身就会产生一种叫**量化误差**的固有误差。这个误差最大是±0.5 LSB。就像用刻度尺量东西，读数只能精确到最小刻度的一半。

  

**INL****是在这个固有的量化误差之上，额外增加的误差！**因为ADC的台阶点（转换点）不准了。

  

**举个例子（结合图3****）：**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREk6eOr5vTSXThulx9DVLsNIxrweibMTvX8cic3ByKbNuia189fDCCbpicTcaYTBkxfcqt1lTjAWqA3rg/640?wx_fmt=png&from=appmsg)

理想转换图（a）     误差波形图（b）

图3模拟电路与ADC编码值的等效关系

  

 假设一个码的理想转换点在A点。这个码的最大负误差是 -0.5 LSB（量化误差）。

 如果实际转换点延迟了（INL为正，比如+0.125 LSB），发生在B点。那么在这个码结束的瞬间（B点），误差会变成 -0.5 LSB - 0.125 LSB = -0.625 LSB！**比理想的量化误差更大了。**

 如果实际转换点提前了（INL为负，比如\-0.71 LSB），发生在F点。那么在这个码开始的瞬间（F点），误差会变成 +0.5 LSB + 0.71 LSB = +1.21 LSB！**远远超出了理想的量化误差范围。**

  

  **结论：实际ADC****的总误差 =** **量化误差 + INL****误差**。

  

  **理解ADC****的INL****，关键抓住三点：**

  

 **它是累积误差：** INL是前面所有台阶宽度误差（DNL）加起来的结果，反映你走到某个台阶时的“总高度偏差”。

 **它是主要残差：**偏移和增益误差能校准掉，INL是校准后剩下的、反映ADC本质线性度的关键指标。

 **它是额外误差：** INL是在ADC固有的量化误差（±0.5 LSB）之上，额外增加的误差源，会显著增大系统的总误差。

  

希望这个解释能让大家对ADC的积分非线性误差（INL）有一个清晰的认识！下次见！

  

（原文出处：https://www.allaboutcircuits.com/technical-articles/understanding-analog-to-digital-converter-integral-nonlinearity-inl-error/）