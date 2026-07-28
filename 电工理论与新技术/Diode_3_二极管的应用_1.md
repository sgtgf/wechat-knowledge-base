# Diode-3：二极管的应用-1


> 原文地址: [https://mp.weixin.qq.com/s/qQwhwaBQ9lKhe-zZXtb\_Yw](https://mp.weixin.qq.com/s/qQwhwaBQ9lKhe-zZXtb_Yw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTiah5rXLdlYGdViavjB4pXQicLBJl6QYRFSricREaVHrKr7IiaJz13ibKUNqNTkPa1sz1EqOKLfVA1goMw/640?wx_fmt=png)  

____**★★★**______Diode-3---二极管的应用______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：二极管的应用场景和应用方式非常多，巧妙地使用二极管可以极大提高系统稳定性和可靠性，延长器件使用寿命，本节在上节（传送门：[Diode-2：二极管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493207&idx=1&sn=fa4be0a765e39f4c96b0d4168693198f&chksm=c336acc8f44125de02272bb218a924cae57c5c6fec6d6770e356540199ec1e02048e45018e84&scene=21#wechat_redirect)）基础上简述各类二极管的使用场景和要点。

______€1.___电源防反___

在电源干线中串联二极管是实现反向电池保护电路的最简单和最经济的方式，如**_图3-1_**所示。（传送门：）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT5ByjQrmUX1BXRdQPB0Klu32bmmDkianVPzMuiaIIKTtuiclwWcXeuibW6qjK06SYhRRqfBO4uMOyRLQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**_图3-1：串联二极管_**

通过考虑给定温度下二极管的正向压降Vf和负载电流Iload，可以容易地计算稳态导通损耗Ploss：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhChrjCrVhRtbHzYPhib2icmBXn2xsdWG551eyktSurgCylEIebXrtTfz9w/640?wx_fmt=png)

从这个方程中可以明显看出，用于反向极性保护的二极管仅适用于相对较小的负载电流，否则功耗增加过多，对系统的效率产生不利影响。因此在实践中，二极管被用作负载电流约为2-3A的反极性保护，除了二极管在给定封装中必须能够耗散的功率之外，还必须考虑其它方面。

_抛负载（Load dump）_

抛负载描述的是交流发电机对蓄电池充电时发生的情况，当其它负载保持连接时，与蓄电池的连接突然断开。ISO-16750-2和ISO-7637-2（**_图3-2_**和**_图3-3_**）规定了12V和24V系统的汽车瞬态抛负载，根据这些标准，浪涌瞬态可以持续400毫秒。通常反向保护二极管前面有一个TVS二极管，它箝位瞬态的电压电平。但是电压瞬变会导致高峰值电流通过交流发电机的内阻和二极管的动态电阻。因此有必要选择具有高浪涌电流能力的二极管来进行反向电池保护。

二极管的浪涌电流能力是通过IFSM参数规定的，该参数通常定义为脉宽在8ms范围内的矩形和正弦脉冲，而抛负载峰值电流可以持续400ms，甚至更长。反极性保护二极管的选择必须根据具体情况决定，考虑脉冲持续时间、所选TVS二极管和交流发电机的内阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCe9k0ZClqPVMPp3SADxAlqf7MOGF0VGlCwiawTaticBbR0VaibmrCeSALicA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCJ9KWD1Z8rAntsMhpR55flic2ENPcAEutN1HEc3tEDNfzqWRLUdvwo8w/640?wx_fmt=png)

**_图3-2：表征抛负载时未抑制的测试脉冲波形及参数_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCe8ITBeuaIuUKr3IF5Iw0YXj0fYGEGxoZ8yySnBGE2C9licsABuKgdsgQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCVhqjo2jFCkvp052euQoQlN32icNPeaqbRdPWAFVMY2xFZKBtZ0jusqw/640?wx_fmt=png)

**_图3-3：**_表征抛负载时受抑制的测试脉冲波形及参数_**_**

_蓄电池断开感性负载_

ISO-7637-2还描述了当感性负载与其它负载并联时，与电池的连接中断时会发生什么，感性负载将在负载两端产生负电压，根据**_图3-4_**所示的测试脉冲对该场景进行测试。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCp6iaZPZPYoZoy6mHypdVmxMicL7IteMl9mBUacaHI7RK6Vgkr6jKwCfQ/640?wx_fmt=png)

**_图3-4：并联感性负载场景_**

如**_图3-5_**参数所示，对于12V系统，施加到二极管阳极的反向峰值电压最高可达−100V。二极管必须以这样的方式设计，即在脉冲的时间尺度上沿相反方向耗散的功率不超过二极管的指定雪崩能量。

另一个需要考虑的要点是二极管的漏电流，特别是在高环境温度下，二极管泄漏电流会增大，这可能会对敏感负载造成应力。因此一些设计者使用恢复整流器而不是肖特基二极管来控制泄漏电流。但是由于PN结的原因，恢复整流器具有高的正向电压降，降低了反向极性保护电路的效率。而最新的SiGe二极管，这种新的混合技术产品结合了肖特基二极管的优点和恢复整流器的低漏电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCw4vIFycaIoy3Eia83WENT1q49iaKKRLqf1TZOIJxibMeR6pXNXZSb1uUQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCup5jhnwwb2kf5uTJSiaucdKsSsNd9PHRoIBEINKWv2LFZgPMtp60Hrw/640?wx_fmt=png)

**_图3-5：用于表征电池与感性负载断开引起的瞬态的测试脉冲_**

_________€2.___或门______

**_图3-6_**是具有两个电源的系统示意图，通过电源冗余提高了安全性，主电源和备用电池通过两个OR型二极管相互隔离。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSUaicMyXrp5OC8HI33k1kGSE382ibic7hk1VBQ1KfCNX7UqJFRYEibuHjT3ic8O1GoSwyJksbTEhoaY3w/640?wx_fmt=png)

**_图3-6：主电源和备用电池通过两个ORing二极管相互隔离_**  

在必须满足高安全要求的系统中，一般强制电源架构需要有冗余，汽车的紧急呼叫系统就是一个例子，在这种情况下，至少两个电源连接到负载。有一个主电源和一个备用电池，如**_图3-5_**所示，二极管用于将两个电源彼此隔离，与反极性保护的情况非常相似，二极管是电源冗余应用的一种简单且经济高效的解决方案。但是由于二极管中的功率损耗相对较高，二极管仅适用于小电流。为了保持这些损耗低，优先选择肖特基二极管，因为与具有PN结的二极管相比，它们具有更小的正向电压降。

另一个要求是低反向泄漏电流，即使在高环境温度下也是如此，因为两个电源不一定具有相同的电压电平，这意味着其中一个二极管将反向偏置。然后二极管的泄漏电流回灌入备用电池，这可能会对电池造成损坏。在这里需要权衡二极管的IR（反向电流）和VF（正向压降），如果在高环境温度下需要非常低的反向漏电流，这里也可以使用SiGe二极管，因为尽管其反向漏电流极低，但它们也有相对低的正向电压降。