# Resistor-13：RTD的连接方式和使用注意


> 原文地址: [https://mp.weixin.qq.com/s/phbBLgd4jlLc\_zDFpVrJxA](https://mp.weixin.qq.com/s/phbBLgd4jlLc_zDFpVrJxA)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSfWBvrQPFb5icNdAH7rrgC9TwhlU3BSaUwO0dv9dwqAmzO5EGLRLKqM5uEAeYueJiaJianHibX7wEwAg/640?wx_fmt=png)

_**_★★★_**_Resistor-13---RTD的连接方式_**_★★★_**_

__€1.RTD的误差和精度__

RTD是按照几个标准化曲线和公差而构建的，最常用的标准化曲线是“DIN”曲线。该曲线描述了在100Ω传感器、标准化公差和可测量温度范围条件下时，铂的电阻与温度特性。

DIN 标准规定了0°C时基极电阻为100Ω（[Resistor-12：RTD的参数和特性](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247487875&idx=1&sn=e38cf59790de65386ea0ddfcc725ae29&chksm=c3355b1cf442d20a62005a6894b9e3b6fd1aa5ea210ee0484074037be7d713d7c4a9eee259c6&scene=21#wechat_redirect)），温度系数为0.00385Ω/Ω/℃。DIN RTD传感器的标称输出如下：

DIN RTD有三个标准公差类。这些公差的定义如下：

DIN A 类：±(0.15 + 0.002 |T|°C)

DIN B 类：±(0.3 + 0.005 |T|°C)

DIN C 类：±(1.2 + 0.005 |T|°C)

在确定RTD元件类型时，首先要考虑用于读取传感器的仪器。选择与仪器的传感器输入兼容的元件类型。到目前为止，最常用的RTD是100Ω铂，温度系数为0.00385。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRiapibGycOsOBBbIJcZe37JJkrSC5CDccjUlReiaFwpYKBB429WVMwf2Hy8ktOx79DOJ7R8OAMTWkFg/640?wx_fmt=png)

**_表13-1：RTD的材质和其对应基极电阻/TCR_**

其次，确定所需测量精确度，如**_表13-1_**所示。精确度是基极电阻公差（校准温度下的电阻公差）和电阻公差温度系数（特征斜率公差）的组合。如**_图13-1_**所示，任何高于或低于此温度的温度都将具有更宽的公差带或更低的精确度，最常用的校准温度为0°C。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRDJibQibj9CXybTx80s5AV4Pdk9SmDKZNx7Pd8ibIX2slN377oialWApib0QCZoaVcW4h363kuiaFstkIg/640?wx_fmt=png)

**_图13-1：铂金属RTD标准精度偏移曲线_**

### ___€2.__传感器连接_

RTD传感器有多种不同的引线配置可供选择，最常用的配置是单元件三引线式配置。可用引线配置的连接如下**_图13-2_**所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRDJibQibj9CXybTx80s5AV4PGrJjSu1vcMvf9yUqaM0u5tDLohGr1l1a1fs22bGZocvF8iaj3Giaqicjg/640?wx_fmt=png)

**_图13-2：RTD的几种引线配置方式_**

双线传感器通常用于精确度不重要的应用。双线配置可实现最简单的测量技术，但由于传感器引线的电阻，存在固有的不准确性。在双线配置中，无法直接补偿导致电阻测量偏移量增加的引线电阻。

三引线配置带有补偿回路，可在测量时减去引线电阻。使用此配置，控制器/测量设备可进行两次测量。第一次测量时，测量传感器和连接引线的总电阻。第二次测量时，测量补偿回路电阻的电阻。通过从总电阻中减去补偿回路电阻，即可确定实际净电阻。三引线配置是最常用的配置，它将精确度和便利性很好地结合在一起。

四线传感器配置和测量技术可在不受引线影响的情况下测量传感器电阻。虽然这种技术的精确度更高，但许多工业控制器/测量设备无法实现真正的四线测量。

从传感器引线到现场配线的转变通常是在连接到传感器的连接头上完成的，接线端子用于方便连接。

### __€3.引线的影响__

用电阻温度探测器测量温度其实就是测量电阻（本质）。如**_图13-3_**，通常使用不平衡的惠斯通桥来测量电阻，在测量传感元件的电阻时，必须尽可能减少或补偿所有外部因素，以便获得准确的读数。引起错误的一个主要原因可能是引线的电阻，尤其是在两引线配置中。

电阻与传感元件串联在一起，因此读数是传感元件和引线电阻的总和。当传感元件的电阻较高而引线的电阻较低时，可以使用双引线RTD。但在引线的电阻相对较高时，必须对其进行补偿。可通过三引线配置实现补偿。如三引线**_图13-3_**所示，电源的一侧通过L3连接到RTD的一侧。这使L1和L2处于电桥的对侧，因此它们相互抵消，对电桥输出电压没有影响。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRDJibQibj9CXybTx80s5AV4PX6E7qibFZb5I3KZAOLYor9ibInK21od6gdZGecGkAzMxAYqFqDak7ZqA/640?wx_fmt=png)

**_图13-3：电桥用RTD，三引线消除误差原理示例_**

建议对RTD使用三引线连接，尤其是在传感元件电阻较低的情况下，在此情况下，较小的引线电阻即可对读数精确度产生很大影响。