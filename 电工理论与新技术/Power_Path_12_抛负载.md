# Power Path-12：抛负载


> 原文地址: [https://mp.weixin.qq.com/s/e85gPPgNeDPA3Q-Xtpio5A](https://mp.weixin.qq.com/s/e85gPPgNeDPA3Q-Xtpio5A)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCYRKENYWlMIfDwicUVBm8P8dURQFhKyhpleq70DHDzRRDib5eEJPQ08WA/640?wx_fmt=png)

____**____**____**____**★★★**____**____**____**______________PPS-12---负载偏移__________**____**____**____**★★★**____**____**____**

引言：在汽车应用中，抛负载是现代电子中最大的瞬态脉冲之一，这种由国际标准化组织（ISO）16750-脉冲A和B定义的低阻抗脉冲对IC来说可能是毁灭性的，因为电压可以在近乎半秒内上升到120V。

当输送电流的发电机突然与系统断开连接时，就会出现这些瞬态脉冲，防护电路箝位未抑制的波形，大多数有能力承受抛负载的电子器件在受抑制后的脉冲冲击下可以保持完好，本节将探讨抛负载瞬态脉冲的细节、其原因以及设备如何能够在抛负载中安然无恙。

_____________€1._______抛负载的原因______

在汽车中，交流发电机为电池充电，并在发动机运转时为车辆的电子设备供电。交流发电机反映了电感器的基本特性，当电感器被皮带旋转时，会产生磁场，转换为电流，**_图12-1_**显示了蓄电池与交流发电机和车辆其他负载的并联连接。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiaCyCoQZ3ZawTQrNibEibukxCO2Jib2lgASOepoLIsjjJQwCszCK0TtzOsToZE75N9qNwC096M4KukA/640?wx_fmt=png)

**_图12-1：与蓄电池和负载相连的交流发电机_**

在**_图12-1_**中，电池充当一个大电容器，将电压保持在稳定的13.5V。但是如果汽车电池与线路断开，那么交流发电机的电感特性会在车辆的电源线上产生非常大的电压尖峰，可能需要半秒的时间才能消散，见**_图12-2_**，ISO-16750将该瞬态脉冲定义为抛负载脉冲。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiaCyCoQZ3ZawTQrNibEibukxNge6tEytKKkZoQX4po3JzGZia0mvUtmQez5AOPHxzv6dmdahS9RC4Vw/640?wx_fmt=png)

**_图12-2：蓄电池与汽车系统断开连接_**

由于发动机接通时交流发电机始终接通，因此车辆很有可能出现这种蓄电池断开的情况。

_________________________€2._________________ISO 16750-2________

关于抛负载瞬态的电压分布，以及它对系统构成的危险，ISO-16750-2（2012）汽车标准强调了几种不同的电池不连续性，如冷起动和抛负载。该标准还涵盖了电源电压、接地参考和电源偏移的瞬时下降，以及开路和短路负载条件。

_脉冲A（未抑制）_

**_图12-3_**显示了抛负载脉冲的波形，同时定义了交流发电机可以达到的电压水平以及电压消散所需的时间。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCe9k0ZClqPVMPp3SADxAlqf7MOGF0VGlCwiawTaticBbR0VaibmrCeSALicA/640?wx_fmt=png)

**_图12-3：抛负载测试未抑制的电压波形_**

**_表12-1_**列出了**_图12-3_**的值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiaCyCoQZ3ZawTQrNibEibukxiagFicuticHX4NuNJ4E53G16EzfbCG0kvPpoqShN02eCIRFvO1HrFzZTw/640?wx_fmt=png)

**_表12-1：抛负载测试A未抑制的参数_**

12-V和24-V汽车系统之间的要求存在很大差异，抛负载脉冲对工程师来说是一个严峻的问题，因为大多数器件的内部结构将在电压达到ISO-16750-2规定的最大水平之前发生故障，下式计算了IC能够承受交流发电机的最大电流：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WbmvCg5SDB2uYN8Z4QLB60gsib2XMdx1lFJ5S6HZQ5ZjPtDibkFXUMiaOw/640?wx_fmt=png)

IC内通常有一个小的箝位或静电放电（ESD）结构，但无法承受400ms的这种电流水平，由于脉冲能量如此之高，车辆制造商通常会设计一个集中电路，将脉冲箝位到更加安全的电压。

_脉冲B（抑制）_

由于A脉冲测试能量极高且难以消散，因此大多数车辆都有一个与交流发电机和蓄电池并联的抑制电路，可将电压箝位在压力较小的水平，这意味着内部电路从**_图12-2_**变为**_图12-4_**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiaCyCoQZ3ZawTQrNibEibukxner557ich88k39Rz9q2tmZHUwsoichtW9gZaM7I5HibIOlEBIHiaA14P5w/640?wx_fmt=png)

**_图12-4：连接到电池、负载和中央夹具的交流发电机_**

该箝位电路将消耗交流发电机的多余能量，并将电压保持在**_图12-5_**中脉冲中定义的水平，**_表12-2_**显示了后续值。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCe8ITBeuaIuUKr3IF5Iw0YXj0fYGEGxoZ8yySnBGE2C9licsABuKgdsgQ/640?wx_fmt=png)

**_图12-5：抛负载测试B抑制的电压波形_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiaCyCoQZ3ZawTQrNibEibukxY01vgrYwMG2hnRnEJe0OibYAnt9FMsIibX6TWPEAicibWOf1qib710KaibvA/640?wx_fmt=png)

**_表12-2：抛负载测试B抑制的参数_**

大多数车辆都需要所有连接电池的IC来承受抑制的抛负载。

____________________________________€3.抛负载冲击____________________________________

抛负载脉冲具有高能量，需要高功率耗散箝位来抑制脉冲，为了避免这种高损耗，电源开关组合需要更高的电压容限，而不是试图耗散整个脉冲，这意味着连接到电源线的IC将简单地允许脉冲发生而不被损坏。

在智能高侧开关中，可接受的最大电压为40V至45V，具体取决于开关，在抑制抛负载事件期间，瞬态发生时不会断开开关，因为它低于设备的最大额定值。类似地，对于理想二极管控制器系列，即使FET没有集成，它仍然可以在抑制抛负载期间承受高瞬态冲击，只要主FET的额定电压足够高，能够承受抑制的抛负载，系统就不会受到损坏。

____________________________________€4.小____________________________________结  

汽车交流发电机在正常工作期间有助于为电池充电，但由于其电感性质，如果电池断开，电源线上的电压可能会飙升，该瞬态在ISO-16750-2中表示，并以抑制脉冲和非抑制脉冲为特征。这两个脉冲几乎相同，其中一个脉冲具有中心箝位，以耗散大部分能量并降低IC必须承受的电压。智能高侧开关产品组合可以承受这些瞬态，可用于直接连接到电池的汽车应用。