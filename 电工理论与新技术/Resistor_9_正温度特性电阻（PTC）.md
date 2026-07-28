# Resistor-9：正温度特性电阻（PTC）


> 原文地址: [https://mp.weixin.qq.com/s/d0Nn9HcizhNzFlurPJqrfA](https://mp.weixin.qq.com/s/d0Nn9HcizhNzFlurPJqrfA)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSdWnrnnEHyFjk39wFYehiaujIFwaWYmHdVPcKYmHT44MvrM3YCsibBibpMdMl2d7AsjwYJibTUYHZgTw/640?wx_fmt=png)

_**_★★★_**_Resistor-9---PTC的温度特性和参数_**_★★★_**_

_€1.PTC的材料以及特性_

PTC（Positive temperature coefficient）即负的温度系数，PTC电阻其阻值随着环境温度的升高而下降。PTC热敏电阻根据其内部其内部材质的不同，通常可分为：陶瓷PTC，简称CPTC，和高分子PTC，简称PPTC。PTC热敏电阻----典型的RT（阻值温度）曲线如**_图9-1_**所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHiclbekjibEQEdCGZbvzd4yBPhfjTfuQ9icCFPGndIib4a9uakWusNnBGI8g/640?wx_fmt=png)

**_图9-1：PTC的R-T曲线_**

PTC的电阻值在一定温度下（居里点）会迅速增加，具有阻值瞬间跳变的特性。利用此特性，可用于半导体热失控期间的过电流和过温保护，所以PTC又叫PTC保险丝。

_€2.PTC的动作原理_

我们知道：对于一个导体，它的阻值为R，当流过导体的电流为I，持续的时间为t时，那么导体产生的热量Q，可用焦耳定律来计算：Q = I^2\*R\*t，可见导体产生的热量与流过导体的电流I的平方成正比，即只要电流增加一点，产生的热量Q将急剧增加。

正常工作时，由于工作电流Ihold较小，流过PTC的电流所产生的热量不足以达到居里点，PTC一直呈现为出厂时的零功率电阻Rmin，通常在毫欧姆级（具体数据，随着PTC的系列不同而有所不同），相当于一个开关的闭合状态，一旦流过PTC的电流Itrip为正常工作电流Ihold的2倍时，PTC内部集聚的热量到达居里点，其阻值立刻将跳变到Rmax，宏观来看，相当于一个开关断开，当然开关真正断开，其阻值为∞，通常Rmax/Rmin的比值，至少大于10^4倍。

由于PTC不分极性，串联在负载回路中，PTC阻值的快速急剧增大，将有效地限制整个回路的工作电流，这样就有效地保护了负载不被烧坏。当断开电源，整个回路的电流消失，大约1分钟时，PTC内部的热量散发冷却后，又自动恢复到初始阻值Rmin。因此PTC又叫可恢复保险丝，或自恢复保险丝，自复位过流保护器等。

_€3.PTC的关键参数_

PTC的关键参数对选型至关重要，尤其是Ihold，Itrip。

_Ihold_：

保持电流，在23℃的静止空气中，PTC可以通过而不烧断的最大电流。

_Itrip_：

跳变电流，在23℃的静止空气中，PTC会越过居里点而烧断的最小电流。

_Vmax_：

最大电压，PTC在额定电流I下所能承受的不损坏的最大电压。

_Imax_：

最大电流，PTC在额定电压V下所能承受的不损坏的最大故障电流。

_PDtype_：

典型功耗，在23℃的静止空气中，PTC处于烧断状态时的典型功耗。

_Rmin_：

最小初始阻值，在23℃的静止空气中，PTC在初始（未焊接或未烧断）状态下的最小电阻。

_R1max_：

在23℃的静止空气中，烧断一次恢复后的最大阻值，或在260℃回流焊20秒后1小时测量的电阻值。

_TtT_：

Time to Trip，当故障状态发生时，PPTC设备切换到高阻状态所需的时间。PPTC跳脱时间由故障电流和环境温度决定，故障电流越大或环境温度越高，跳脱时间越短。例如25℃环境温度下，0.5A 1.5s表示0.5A的电流，1.5s后会断开，但若放置在50℃的环境温度中，可能0.3A 1.5s（即只需0.3A的电流，1.5s断开）或者0.5A 1s。（即0.5A的电流只需1s就可以断开）