# EOS-6：USB接口的ESD防护


> 原文地址: [https://mp.weixin.qq.com/s/mzAIIfQVIaY-LGAYY7Yo\_w](https://mp.weixin.qq.com/s/mzAIIfQVIaY-LGAYY7Yo_w)

____![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJChtdkIAU9NxETXaJ3dTNQFEWBichfehAt0iaT6Y4ZJMRYByiaLHpsR0wA/640?wx_fmt=png)____

____**★★★**______EOS-6---USB______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：采用USB协议的接口多种多样，包括USB A、Micro USB、TYPE C、雷雳等等，无论外在接口形态如何变化，协议一致的情况下，其ESD防护方案也是相同的。

________€1.____USB2.0/USB OTG____

USB 2.0是电子系统中的主流接口，也是微控制器中最常见的接口之一，USB 2.0标准的最大信令速率为480Mbit/s，有效吞吐量高达35MByte/s或280Mbit/s。USB2.0的信号线标称电压摆幅为400mV至-400mV，而信号的最大电压为±475mV，作为在无转换发生时的情况，转换时的电压限制为±525mV，为过冲和欠冲留出了一些空间。

**_图6-1_**显示了基本的保护设置，USB 2.0连接器有四个引脚：VBUS用于电源，D+和D-用于差分数据信号，以及一个接地引脚。VBUS引脚将导通一个5V直流电源，因此这条线上的电容无关紧要，D+和D-数据线将传递480Mbps差分信号。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRUmAicAicWyWkaiaciaDibMFCB4GO5Eb45icteeGfH1H66qLFbIuYpF5c4Hu4TLNhKH1dI9KUSNMX0HTmA/640?wx_fmt=png)

**_图6-1：USB 2.0的ESDF防护_**

VBUS线路需要至少具有5V工作电压的ESD保护，以确保在正常操作中不会发生击穿，D+和D-数据线路需要低电容ESD保护，可支持480Mbps信号，单通道和双通道设备是简化布线的好解决方案。对于USB2.0，推荐**_表6-1_**：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaJhd0ibfd8L6tic6vwHIe3nF6pb8lafRqU3nEEekr8AuCYDI8LYTW98dg/640?wx_fmt=png&from=appmsg)

**_表6-1：USB2.0的ESD/TVS diode选型参数参考_**

________€2.____高数据速率：USB 3.1/3.2____

USB 3.1标准的信号传输速度高达10Gbit/s，全双工通信，超高速与可控阻抗路由相结合，需要在不显著影响整体信号完整性的情况下实现良好的ESD保护。_**图6-2**_显示了基本的保护设置，对于USB 3.1，需要出色的箝位性能，加上超低且匹配良好的电容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQian7rLEic50ViaovOIMu4anfJrfPbnpf8ib1opMc0US2GC96jicYdhFYEJQQ/640?wx_fmt=png&from=appmsg)

**_图6-2：USB3.1的ESD防护结构_**

USB 3.1/2结合了TX/RX差分线路，以达到10Gbps的速度，对于这些速度，ESD保护的电容必须最小化，以保持信号完整性。

用于USB 3.2 Gen 2的TX/RX线路的ESD解决方案应具有0.3pF或更低的电容，以实现信号完整性，且工作电压大于3.6V。一种解决方案是用于数据线（TX、RX）的超低电容的4通道ESD设备，结合用于D+/D的低电容的2通道ESD设备和用于VBUS线路的单通道ESD设备。对于USB3.0~，推荐**_表6-2_**：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaSZwWZiargfgMoiawqOFAQnzrP1DTEickB5sYNuScfOTL45cYP7wsusbCw/640?wx_fmt=png&from=appmsg)

**_表6-2：USB3.0~的ESD/TVS diode选型参数参考_**

________€3.____TYPE C____

USB类型CTM有一个24针连接器，可支持USB 3.1 Gen2、DisplayPort、HDMI和多种其他可选模式，有16个引脚需要ESD保护。由于USB 3.1 Gen3的Super Speed USB线（TX1+、TX1-、RX1+、RX1-、TX2+、TX2-、RX2+和RX2-）的速度可达10Gbps，电容必须最小化，USB2.0线（D+顶部、D+底部、D–顶部和D–底部）也需要低电容。CC1、CC2和SBU1、SBU2 C型引脚可以达到5.5V，虽然不需要低电容，但建议用于使用备用模式的应用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaCOxqqcQ2XYZSCTibjrb5OzhVYtQTDYuRoNsUoGzp17lqgJ6AHViby0tA/640?wx_fmt=png&from=appmsg)

**_图6-3：TYPE C的ESD防护结构_**

USB Type-C连接器引脚尺寸较小，板空间非常有限，因此对于C型USB中的所有高速数据线，建议使用具有超低电容的节省空间的2通道ESD设备。对于SBU和CC线路，建议使用5V ESD设备，以简化到PD或CC控制器的布线，如果首选，也可以使用4通道，如**_图6-3_**所示。

________€4.____高数据速率：eSATA____

eSATA标准是SATA的一种变体，用于外部连接，如**_图6-4_**所示，建议eSATA采用ESD保护，一般USB3.0的ESD保护可以覆盖到eSATA。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaCcnAOEVl4Gogt4icFibQ3yTyEOicRZXSUBib1ibJeXhdDoFQnPtujbiakIDw/640?wx_fmt=png&from=appmsg)

**_图6-4：eSATA的ESD防护结构_**

对于USB3.0，推荐**_表6-3_**：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaa80Ps1MdjslAN9liaxC2QnpAXMnVPZ9yL1adnJkJsB7j567l3EOrtiag/640?wx_fmt=png&from=appmsg)

**_表6-3：eSATA的ESD/TVS diode选型参数参考_**