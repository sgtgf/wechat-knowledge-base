# Power Path-6：可调电流限值


> 原文地址: [https://mp.weixin.qq.com/s/zCHjYAC3hIAqXEFRaJ9bPw](https://mp.weixin.qq.com/s/zCHjYAC3hIAqXEFRaJ9bPw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSFlarGsjVB4mRz8NuEGpOb8QPKLeroKL59kjXudSU6spgichd5aSPhnhA/640?wx_fmt=png)

____**★★★**______Power Path-6---可调电流限值______**____**★★★**____**____

______撰稿：Timothy  校稿：Timothy______

引言：在许多系统中，电流限制必须将瞬态过载电流限制在允许的水平，传统的限流保护方案，如分立可复位保险丝电路，由于其不准确性、响应速度较慢，以及缺乏可配置性和可重复性，性能较差，本节简述集成电源开关保护方案如何克服分立限流保护方案的局限性。

集成电源开关保护方案提供准确和可调的电流限制，有助于精确地限制过载电流，从而减少前级功率耗散和无源元件、线缆和PCB的尺寸。此外精确的限流（或输出功率限制）功能通过符合关键的安全标准简化了系统设计。

______________€1.______________对电流限制的需求

在电子设备中的半导体组件、无源滤波器、PCB走线和接口电缆都具有固有的最大过电流能力，当超过这个载流能力时，就会导致它们过热，可能达到不可恢复的状态。为了克服这一问题，需要某种限流装置将故障电流限制在最大额定电流限制范围内，并在故障被排除后使系统恢复正常运行。

在**_图6-1_**所示的示例中，DC-DC1正在为各个内部子系统供电，每个子系统都需要一个特定的电压才能正常运行。这些子系统中的任何一个发生过载事件都可以影响连接到同一配电总线的其它关键负载的运行，从而导致系统功能错误或系统重位。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRP3T5ID74WErctret16ibZn2yZNiaF9gfNszWGpGibqM5fw7I7YTy2lvoQkneNEXtI7JvchVBMLibylA/640?wx_fmt=png)

**_图6-1：典型电子设备中的功率分布_**

为了避免这种情况，可以在每个电源路径中使用电流限制器件来应对过载和短路事件，并保护敏感电路，以实现可靠的系统运行。限流器件的性能主要由以下几个参数决定：精度、可调性、可重复性、响应时间。

________________€2._______________实现电流限制的方法_

_保险丝_

保险丝（熔断器）被认为是传统保护器件，它将过载或短路故障与主系统隔离，虽然保险丝是一种廉价的解决方案，但它们可能达不到现代电子设备的许多保护要求。过载电流需要比额定保险丝电流高得多（500%），才能在几ms内产生响应。这使得预测保险丝将断开的精确过电流值变得极其困难。保守的保险丝额定电流选择可能会导致浪涌电流事件期间保险丝熔断，此外一旦保险丝在过载事件中熔断，就必须进行物理更换，这会增加系统停机时间和维护成本。**_图6-2_**显示了这样一个场景。（传送门：[Resistor-11：如何选择合适的保险丝](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247487874&idx=1&sn=7db9f46ae1d509c3184a71e078b160ba&chksm=c3355b1df442d20bfda81ee908e399353b99f980b580b7f41f06266e1ba4ec1719bdde4ea3f0&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TREvXTxRHobfPicIhPWhkKGtjbzrPwRyy6sD5Trko6sibliamcRDsL3vOBxticK3ov6uVC68RibeHlnjUQ/640?wx_fmt=jpeg)

**_图6-2：每次都需要更换保险丝才能恢复正常运行_**

可复位保险丝是一种正温度系数（PTC）器件，其导通电阻随温度而增加，在过载事件期间，过大的负载电流会增加功率损耗，从而增加其导通电阻。较高的导通电阻有助于限制过载电流并保护电路，与物理熔断器不同，PTC允许电流在故障排除后流动，而无需更换设备。

由于PTC是由过电流负载的加热效应驱动的，它们的反应时间被限制在几ms内，因为它们对环境温度有自然的依赖性，如**_图6-3_**所示。可复位保险丝的另一个特性是每次复位后，其导通电阻都会增加，这导致随着时间的推移，可重复性能会有衰减。（传送门：[Resistor-10：PTC保险丝](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247487873&idx=1&sn=82e7b57b8b9e3276dbdec7b96e4cf0b9&chksm=c3355b1ef442d208c57297ff7149c8daaee52c87a95f9cd6dbc8229822e3daa784ae20b9506a&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQUeuic4I0mictzETeBkhnoPkzP8Q1LcHxCYZsmUUXmcFGmXvWiaNwsibPdW6jicicaKC6rS0MWTenLLh2A/640?wx_fmt=png)

**_图6-3：跳闸时间与跳闸电流-温度相关性_**

_分立电流限制电路_

**_图6-4_**显示了使用分立元件的限流电路示例，分立功率开关Q1周围的R-C器件降低了Q1的开关速度，并提供浪涌电流控制（传送门：[Power Path-5：浪涌电流控制](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493143&idx=1&sn=b82fa64574d1ff020fa0578516f5d07a&chksm=c336ac88f441259ec07bdd671e213ecd0a13fbbb831de10994bf46df3864c0ea0e426a142ba1&scene=21#wechat_redirect)）。在该方案中，串联感测电阻器Rs和PNP三极管的组合提供有源电流限制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TREvXTxRHobfPicIhPWhkKGtSUIt8mZiaXwDicjDDFI3naQaBx4Doox3QNuJ3RH2sFzCzY9MZ8bIglbA/640?wx_fmt=png)

**_图6-4：使用分立元件的有源限流电路_**

在稳态操作中，Q1完全导通，并且负载电流流过串联感测电阻器Rs和分立功率开关Q1。Rs两端的电压降为Q2产生偏置电压Vbe，用于以闭环形式控制Q1。当负载电流达到足以使Q2偏置时，Q2降低Q1的栅极-源极电压VGS，将负载电流限制在Vbe/Rs。

这种分立方法的响应时间比保险丝或PTC好得多，但仍然存在精度差的问题，考虑到Vbe电压随温度的变化，电流限制精度可以在30%的范围内。另一个缺点是感测电阻器中的功率损耗，对于5A应用，耗散将高达3.25W（0.65V×5A=3.25W）。

在过载的情况下，可以通过使用电流感测放大器或快速比较器来禁用直通开关Q1来减少功率损耗，但这增加了复杂性和成本。分立限流电路不包含热保护，因此这些解决方案需要通过仔细选择FET和谨慎的热设计，以在极端故障条件下将通过FET保持在安全工作区域限制内，所有这些限制通常会导致准确性、成本、复杂性、PCB尺寸和功率损耗之间的权衡。

_eFuse_

eFuse是一种带有集成FET的有源（主动）电流保护装置，用于在故障条件下将电流限制在安全水平。eFuse的常见元件是用于调制负载电流的电源开关、电流感测元件和控制逻辑。如以下**_图6-5_**所示，可以通过eFuse ILIM引脚处的外部电阻器RLIM将电流限制阈值设置为所需值，从而在将电流限制调整到宽范围时提供灵活性。

在稳态条件下，集成电源开关完全打开，以最大限度地减少电源路径中的压降，在任何时候如果负载电流达到设定的电流限制水平ILIM，则栅极控制将集成电源开关转换为线性模式，这增加了eFuse两端的导通电阻和相应的电压降，以提供恒定的输出电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRP3T5ID74WErctret16ibZndLF1ciaH006sCD7O6bEZMHNC2Oibl7YW3tQngUWD4q6G073BG2icuS2Tg/640?wx_fmt=png)

**_图6-5：eFuse的方框图_**

**_图6-6_**显示了电流限制设置为4A的eFuse的过载响应，如图所示，eFuse对过载事件（通常为数百us）做出快速响应，并调节ILIM的输出电流，故障排除后，eFuse将恢复正常工作。eFuse使用电流镜电路来测量路径电流，从而不需要外部感测电阻器（如**_图6-4_**中的Rs）。这种方法不仅节省了板空间，还消除了感测电阻器的损耗，并提供了比分立方法更好的限流精度--->在±5%到±8%的范围内。

eFuse设备的另一个主要优点是其集成的过温保护，当结温超过150°C（典型）时，eFuse会关闭集成电源开关。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQUeuic4I0mictzETeBkhnoPkEnD2Lficstp6Ys8AicyAichh5cd9JGiaQnbkw6p2icln6ccPS8BVdRkT67Q/640?wx_fmt=png)

**_图6-6：使用eFuse进行的瞬态过载电流限制和恢复_**

_高侧开关_

智能电源开关通过过电流保护提供强大的过载和接地短路保护，可在AEC-Q100等级中使用，这些器件提供类似于eFuse的限流功能，但其驱动感应式板外负载的能力不同。

如**_图6-7_**所示，智能电源开关可以选择使用内部固定的高电流限值（当CL引脚接地时）或外部电流下限值（当CL引脚通过外部电阻器RCL连接到地时）。可调节的低电流限制大大降低了内部电源开关在故障期间必须耗散的故障能量，从而减轻了电源开关的压力，提高了系统的可靠性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRP3T5ID74WErctret16ibZnmz9X8ribGYG7JSzyp2cWgQNNKwje1kIANA8p3DFIwjy1lbicMqUKuTpg/640?wx_fmt=png)

**_图6-7：高侧开关的方框图_**

电流下限也有助于将涌入电流箝位到更低的值，如**_图6-8_**所示，更低的故障电流通过最小化PCB走线宽度和电缆尺寸，以及更低的连接器额定值和组件公差，节省了系统级成本。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSGyq6UYBOQibLib6ynS8u0ncibHA9SzGU9Q1Jc7LlxyjiaXjnMQzHAj1Sy7fbnzAicayFf2UdBt0XY61g/640?wx_fmt=png)

**_图6-8：使用高侧开关进行的冲击电_****_流箝位_**

________________€3._______________对功率限制的需要_

通常需要功率限制来限制输送到负载的功率，对于电压范围较窄的电源，限流装置足以限制功率，但对于电压范围更宽的电源，需要功率限制装置，**_图6-9_**展示了限制功率的典型结构。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRP3T5ID74WErctret16ibZnSZjib6MJ27sbMjRYS1lAzVuFMcAnaYGvLLT5BF2sWsSjsb1Gp80OVcw/640?wx_fmt=png)

**_图6-9：典型的功率限制图_**

在大多数应用中，可以通过电流限制来实现功率限制，但某些应用需要精确地限制输送到负载中的能量或功率。诸如可编程逻辑控制器之类的工业系统具有从18V到36V的宽操作电压范围。在电信系统中，操作电压范围从36V到72V变化，因此可能需要功率限制以及电流限制。

对于固定的输出电压或较小的电压变化限制电流可以实现功率限制，但是电压的较大变化需要额外的控制回路来限制功率。这个额外的电流回路通过电压来调整电流限制，以保持恒定的功率。

诸如国际电工委员会（IEC）61010-1的用于工业设备功率和能量限制的安全和合规标准，遵守这些标准意味着还需要精确的功率限制。某些电源具有固有的功率限制，这些电源符合国家电气规范（NEC）2级或IEC 60950标准，在这些电源中实现功率限制需要额外的功率限制电路。

_使用eFuse实现功率限制_

为了精确限制功率，例如在工业应用中，有的eFuse提供了一种集成解决方案，这些eFuse具有额外的功率限制控制回路，输出功率限制可通过PLIM引脚进行配置。一般精度可以达到±6%，功率最高可达150W。这些设备还通过使两倍于编程电流限制（两倍于脉冲电流）的电流传递到负载来支持负载瞬态变化。

**_图6-10_**显示了此类eFuse的功率限制响应，PLIM引脚上的电阻将输出功率限制设置为100W，该装置允许12A的脉冲电流和282W的脉冲功率持续25ms以支持负载瞬变。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSGyq6UYBOQibLib6ynS8u0ncOkGpicGM04MEvEnD5NfEgI9yiaCybZ91HibywVCouBjHKBMTCv9iaCv6QQ/640?wx_fmt=png)

**_图6-10：eFuse的功率限制（支持两倍脉冲电流，ILIM=6A，VIN=24V）_**

_通过外部控制回路实现功率限制_

对于具有窄输入电压范围的电源，可以使用电流限制来实现功率限制，在更宽电压范围的电源中实现功率限制需要用于精确功率限制的附加控制回路，该回路基于输出电压调整电流限制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TREvXTxRHobfPicIhPWhkKGtN5bwoWdHYLphaFA1r3tH5WDvoMoRbJGKjymBxeiavfUUZeAT7Z05cFg/640?wx_fmt=png)

**_图6-11：带额外控制回路eFuse功率限制_**

**_图6-11_**显示了用于功率限制的eFuse的控制环路，附加控制回路使用TLV170放大器将与输出电压成比例的电流注入ILIM引脚，用于功率限制。**_图6-12_**提供了**_图6-11_**所示电路的PSpice模拟结果，模拟输入电压在18V到32V之间变化，TLV170调整其电流限制，输出功率限制在10W以下。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSGyq6UYBOQibLib6ynS8u0ncqfbFyv2N4uZw41EibSsFwLg1vgupA0ev1fnRo5HqzGMt5DWCXIicQF1w/640?wx_fmt=png)

**_图6-12：图6-11功率限制仿真结果_**

________________€4._______________结论_

限流是大多数现代电子设备的基本保护要求，尽管分立组件可以工作，但它们需要更多的PCB空间，效率较低，附带功能有限，并且通常成本效益较低，eFuse和高边开关，提供准确的电流限制，更快的响应时间，并且可以在无需用户干预的情况下自行恢复。

（传送门：[Power Path-2：电源开关-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492927&idx=1&sn=6ca4f8c0e7b3a999497dac711b13481a&chksm=c336afa0f44126b6eed42c9a8bfd8f36ea869de5270935bc46743d3362386e46b4942e5ecf7a&scene=21#wechat_redirect)）  

（传送门：[Power Path-3：电源开关-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493025&idx=1&sn=6367fb99e0b02b6fdfc87f9b535e06fc&chksm=c336af3ef4412628951af58d475453a1da3166b5f948e116feb7212f7051ce313fb650965393&scene=21#wechat_redirect)）