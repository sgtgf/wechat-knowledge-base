# 一种BLDC电机无感方波控制失效分析：因绕组续流造成的反电势检测失效

原创 傅存敬 电磁散人 2025-09-03 23:12 广东

> 原文地址: [https://mp.weixin.qq.com/s/VQr7Rv-vZNh2jFzsES3-Bg](https://mp.weixin.qq.com/s/VQr7Rv-vZNh2jFzsES3-Bg)

假定阅读此篇文章的读者已具备了基于反电势过零点检测的无感方波BLDC电机控制的理论基础，仅分析在调试电机时会遇到的一种失效模式：反电势过零点检测失效。

先说造成该种失效的一种根因：绕组续流时间过长，湮没掉反电势过零点，致使换相失效。

原因分析：

方波驱动的无刷直流电机，理想情况下其反电势应为上底宽度为120°的梯形，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXmclJibhJX6ZrfxYhssAWlvhHslVVHn4wSX9N8jD9G0saKdbNSVIKibJw/640?wx_fmt=png&from=appmsg)

控制器对电机三相端电压进行AD采样，用以判断对应相反电势的过零点，理想情况下，三相端电压及对应相反电势过零点的关系如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXdj6aeAZL0ajVV18q0E7e93PMQyNSoUiaw18syz2FC9uHspoIFbYaYDA/640?wx_fmt=png&from=appmsg)

在120°方波控制方案中，360°电角度被分为为6个扇区，每个扇区内有且仅有两相绕组通电。以I、II扇区为例，在I扇区中，A、B两相绕组通电，且A相通正电，B相通负电。当电机由I扇区切换到II扇区时，A、C两相绕组通电，且A相通正电，C相通负电。此过程中，因绕组电感的存在，B相绕组电流不能突变为零，而是需要一段时间逐渐减小至零。这段时间称为消磁时间，或者续流时间。因此，实际中的端电压，波形示意图如下。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXTFeVmdN2LRibKB1rIvKa1ssSgsQ9Tibl4SdCMMwhkQ2W4fv0xnErAcicA/640?wx_fmt=png&from=appmsg)

可见，消磁（续流）现象的存在，严重的情况下会湮没掉过零点，进而造成电机换相失败。

解决方案：

为了降低消磁（续流）过程对过零点检测的不利影响，有两种解决方案：

1.被动等待；

2.主动消磁。

所谓被动等待，具体实现方法是，人为设定一个电压阈值△U，软件算法中，只针对电压区间\[△U, Udc\-△U \]的端电压进行反电势过零点辨别。

该方法的优点是原理简单，易实现，缺点是当电机转速过低，或者母线电压相对较低，亦或电机时间常数相对较大时，过零点检测时间窗口过窄，依然会导致检测失败。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaX1xJEhn2jyMV040qq9ibBtjibvw87Ws40xCfc1N0LkDe7B06eFmf2KANg/640?wx_fmt=png&from=appmsg)

所谓主动消磁，其核心思想是在消磁（续流）时间内，在消磁的绕组上施加最大的反向电压，进而加速消磁（续流）过程，使得反电势过零点检测窗口得以最大化。

因续流回路的不同，加速消磁的方式也不同，详述如下。

以IV扇区为例，按照目前驱动器上桥臂斩波，下桥臂常通的PWM方案，PWM ON状态下的激磁电流和PWM OFF状态下的续流电流分别如图中的实线和虚线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXUF2QTcUvI0ABETVrictCIZ59ovgMwtZInuG6mMHApKgh4cd9KWuTGibg/640?wx_fmt=png&from=appmsg)

当电机的换相次序从IV扇区（B＋A－）向V扇区（C＋A－）转变时，B相上桥臂开关管T2关闭，C相上桥臂开关管T4导通。在换相初期，因电机绕组相电感的作用，B相续流电流逐渐减小，C相激磁电流逐渐增大。当T4导通时，电流情况如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXDQ5oVzQ4icjIfTziblIWxdibqdIg9rrZwTO4BI16GKWRx3Mld3ibcSdbNA/640?wx_fmt=png&from=appmsg)

此时，容易证明：

B相端电压为0；

中性点N的电压约为Udc/3。

前已阐述，为了加速退磁时间，核心方法是加大（与续流方向相反的）反向电压。在上例中，续流电流（虚线）从B端流入，中性点N端流出至A端，再经开关管T3至地。因此，为了加速B相绕组的续流过程，唯一可行的方案是提高中性点N端（对地）电压。而N点（对地）电压的大小是和PWM信号究竟是应用在上桥臂开关管还是应用在下桥臂开关管相关的。容易证明，在V扇区中将PWM信号应用于下桥臂，即T3，PWM OFF状态下（电流状况如下图所示）中性点N端（对地）电压最大，为 （2Udc/3）。若将PWM信号应用于上桥臂，即T4，则PWM OFF状态下中性点N端（对地）电压为0V。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaX5369Bm2hhzhuNsSwiayXVC8nfNAZVs03TdDOQRz9VTKut4wxeiakIlvQ/640?wx_fmt=png&from=appmsg)

同理可证，除了在扇区V以外，在扇区I和扇区III中，将PWM信号应用于下桥臂开关管可以加速退磁。

再以III扇区为例，按照目前驱动器上桥臂斩波，下桥臂常通的PWM方案，PWM ON状态下的激磁电流和PWM OFF状态下的续流电流分别如图中的实线和虚线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXFPxxUgCv13RRDPIxPqvnO1LXiaugnPrNkWicZjHKPfMVP9ugeRzWEPcg/640?wx_fmt=png&from=appmsg)

当电机的换相次序从III扇区（B＋C－）向IV扇区（B＋A－）转变时，C相下桥臂开关管T1关闭，A相下桥臂开关管T3导通。在换相初期，因电机绕组相电感的作用，C相续流电流逐渐减小，A相激磁电流逐渐增大。当T3导通时，电流情况如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXgDP12j8S8wlQhDTiaATW2c0UUWcA85CLhfpcy8DjeC4Qmy7icg3TtlKQ/640?wx_fmt=png&from=appmsg)

此时，容易证明：

C相端电压为Udc；

中性点N的电压约为（2Udc/3）。

前已阐述，为了加速退磁时间，核心方法是加大（与续流方向相反的）反向电压。在上例中，续流电流（虚线）从B端流入，中性点N端流出至C端，经续流二极管D4至。因此，为了加速C相绕组的续流过程，唯一可行的方案是降低中性点N端（对地）电压。而N点（对地）电压的大小是和PWM信号应用在上桥臂开关管还是应用在下桥臂开关管相关的。容易证明，在IV扇区中将PWM信号应用于上桥臂，即T2，PWM OFF状态下（电流状况如下图所示）中性点N端（对地）电压最小，为Udc/3。若将PWM信号应用于下桥臂，即T3，则PWM OFF状态下中性点N端（对地）电压为Udc。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXmBtYwk1FpRVdBsOHBibqVnzjnnbIrD36XVfEOm9OJ9UuicahFfVic1qQA/640?wx_fmt=png&from=appmsg)

同理可证，除了在扇区IV以外，在扇区II和扇区VI中，将PWM信号应用于上桥臂开关管可以加速退磁。

总结：

-   根据消磁（续流）过程中增加最大反向电压的原则，在对应的扇区内将PWM应用在对应的开关管上，可以加速消磁过程，将反电势AD采样时间窗口最大化；
    
-   加速消磁（续流）过程是在PWM OFF阶段进行的。
    

PWM在各个扇区中具体配置于哪个开关管可以加速消磁，如下表所示。

**扇区**

**I**

**II**

**III**

**IV**

**V**

**VI**

**导通的开关管**

**上桥臂**

T0

T0

T2

T2

T4

T4

**下桥臂**

T5

T1

T1

T3

T3

T5

**PWM应****配置在**

T5

T0

T1

T2

T3

T4

如下图配置PWM，可加速消磁（续流）过程。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFz2xucnkO8kjEJHIexR7iaXgxMNhlL8eQk6M40yeg10EUVXDmibduHAn9D3rbDmTsZTJR11ZemQATQ/640?wx_fmt=png&from=appmsg)