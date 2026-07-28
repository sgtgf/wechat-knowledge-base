# 西安交通大学：用于直流变换器的 SiC MOSFET驱动电路设计


> 原文地址: [https://mp.weixin.qq.com/s/J5amd72wt9knRA1FFwHdpg](https://mp.weixin.qq.com/s/J5amd72wt9knRA1FFwHdpg)

文章来源：电子设计工程

西安交通大学城市学院 电气与信息工程系：韩 芬，张艳肖，石 浩

**摘要：**碳化硅器件的优点不仅能提高电力电子装置功率密度，而且使设备体积小型化。设计了一种用于直流变换器的 SiC MOSFET 驱动电路，通过双脉冲电路对 SiC MOSFET 的动态特性进行测试，验证不同驱动电阻、不同频率对碳化硅功率器件特性的影响。在直流变换器中使用电压等级相同的 SiC MOSFET 和 Si IGBT，对比开通和关断时间，将不同占空比对应的输出电压进行比较。

利用 PSpice 软件仿真，结果显示驱动电路设计合理，验证了 SiC MOSFET 具有开关速度快、开关损耗小、驱动电阻小、工作频率高等优点，比 Si IGBT控制的直流变换器输出电压误差小。

**关键词：**SiC MOSFET；PSpice仿真；开关特性；开关损耗

近年来，新型半导体功率器件碳化硅 SiC MOSFET 因其具有宽禁带、高开关频率、高开关速度、热稳定性好、热导率高等优点，不但减轻了设备的体积和重量,同时也提高了电力电子变换器的性能。研究学者针对 SiC MOSFET 的开关特性，以及新型的电力电子功率器件在工程实际中的应用等方面展开了研究。

SiC MOSFET 因其材料的特殊性可以工作在高温、高压下，工作频率可高达兆赫兹级，已成为高温、高压、高频、高功率密度电力电子变换器的理想选择。目前已广泛应用在航天电力系统、新能源汽车、新型智能电网系统中。

**1 驱动电路的设计**

SiC MOSFET 驱动电路的设计主要体现在驱动电压及快速性上。驱动电压一般为\-5~+24 V，但开启电压只有 2.5 V，只有电压达到 18~20 V 时才能使 SiC MOSFET 完全开通，高的开通电压可减小开通损耗。开关关断时必须提供\-5~-2 V 的负压加快关断速度，防止栅极振荡引起的误开通，增强抗扰能力。栅极有源箝位电路，防止较高的开关速度导致栅极电阻上的压降引起开关误导通，驱动回路要求寄生电感足够小从而减少栅极振荡。因此设计时选择+18 V的正向驱动电压和\-3 V的反向关断电压。该文采用 ACPL-336J光耦隔离实现控制信号和主电路的隔离，如图 1 所示，该芯片 5 V 供电，控制信号接 7引脚，8引脚接地，双电源供电时，12引脚接正压 18 V，9和 16引脚 VEE2接负压\-3 V，13引脚 VE为正负电源的地。14 引脚通过电容接地，11 引脚通过电阻 R2输出驱动信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGs8pwQEaWrZ5CKa6F9GpnYatfwNrXs1WNYLZeSS5BeX0cVibmQG7zSZjA/640?wx_fmt=png&from=appmsg)

图 2 为驱动芯片 IXDN609 的外围电路图，1 和 8引脚接 18 V电源，驱动信号从 2引脚输入，4和 5引脚接地，6 和 7 引脚通过驱动电阻 Rd输出 SiC MOSFET的栅极驱动波形。图 3为驱动电路的完整电路图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsibC8SUCZZYUIQ3EnUbExTLwS3KC0mMmicJLhcg71G2mJJmPh1mWfsr8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsdnbrl2T6BhNqXqWicl0WwlbVPJwFcnia86WVbr15IGGaMRiaHp8TTLQBw/640?wx_fmt=png&from=appmsg)

2 双脉冲测试电路设计

双脉冲测试电路如图 4（a）所示，SiC 肖特基二极管 SCS210KE2 作为续流二极管，SCT2080KE 作为功率开关管，电感 L 取 0.5 mH，Rd为门极驱动电阻。图（b）为双脉冲驱动波形，其中 T1为 9 μs，T2为 2 μs，T3为 1 μs。

在软件 PSpice 中搭建双脉冲测试电路的仿真模型，T1时刻开关导通，电感电流线性上升。T2时刻开关关断，电流通过 SCS210KE2 续流。T3时刻开关再次导通，SCS210KE2 反向恢复。开关导通时漏源极电压为 0 V，关断时为电源电压 400 V，仿真结果如图（c）和图（d）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsBHib1KZ7FQpowTLVIe9PibcYqNG6DrBVo6lnc2s6zRLt9vQXIGSic8MlQ/640?wx_fmt=png&from=appmsg)

**3 驱动电阻对开关特性的影响**

驱动电阻分别取2 Ω、5 Ω、10 Ω、20 Ω，SiC MOSFET栅源极电压 VGS、漏源极电压 VDS、漏极电流 ID以及开关损耗如图 5 所示，结果显示 SiC MOSFET 开通和关断时间随着驱动电阻的增大而增加，但波形震荡却随之减小。开关损耗为 VDS与 ID的乘积，从仿真结果可知开关损耗随着驱动电阻增大而增大。因此选择 5 Ω的驱动电阻，在损耗小的情况下确保开关在高频下安全稳定工作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGs0TYycf5xIkSpCRQeKqibY3icqRVlnich5QFDImkM9cuU9wicjhUv6RTXWg/640?wx_fmt=png&from=appmsg)

**4 频率对开关特性的影响**

当频率为 50 kHz、100 kHz、200 kHz、400 kHz、500 kHz 时对驱动电路进行仿真，对比不同频率下SiC MOSFET 的开通过程。从图 6 的仿真结果可知，频率越高开关时间越短，但频率越高串扰问题越严重，导致开关误导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsCNP2AjNo5hBM8ryOKdlc59ucS4nUHNCAEUODbGRgQjXRO3v8rWkg7A/640?wx_fmt=png&from=appmsg)

**5 SiC MOSFET和Si IGBT对比**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsIHnwj1ZrKgJLD2Nosy7s96TLSDh3vS6SsUWGibe4QSIIZBF0YyzfvNQ/640?wx_fmt=png&from=appmsg)

在直流变换器中使用电压等级相同的 SCT2080KE 和 IKW08T120，对比开通和关断过程，如图 7 所示，SiC MOSFET 比 Si IGBT 开关时间短。图 8 所示SiC MOSFET 在直流变换器中的仿真结果，当频率为100 kHz，输入电压为 100 V，占空比分别为 0.5 和 0.9时，VGS、VDS以及输出电压 Uo的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsdMHibia1sHFfYRWPCQp24lwcKw3vuk4CIBjEaTcwabZww363fia5p53Dw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsozWQf1bNlI0urtkdIwz8lJWPwDeicUDuXYl8Pl8chgceRO8ibia5tM93w/640?wx_fmt=png&from=appmsg)

  

表1 为 SiC MOSFET 与 Si IGBT 控制的直流变换器，占空比从 5%~95%每间隔 5%测量的负载电压 Uo的值，从表中测量结果可知占空比 50%左右时，输出电压误差最小，占空比太大或者太小时，输出电压误差大。SiC MOSFET 比 Si IGBT 控制的输出电压 Uo更接近理想值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsesgtib1Wo1pFeSXiaavCHxy2hqm8VyQcsLkqTib1IibmBHaLygLfQRaKdg/640?wx_fmt=png&from=appmsg)

**6 结 论**

该文设计了一种用于直流变换器的 SiC MOSFET驱动电路，利用双脉冲电路测试不同驱动电阻、不同频率对 SiC MOSFET 开关特性的影响。在直流变换器中对电压等级相同的 SiC MOSFET 和 Si IGBT 比较开关时间的长短以及输出电压的大小，结果显示 SiCMOSFET 开关特性优于 Si IGBT，高频下 SiC MOSFET的开关速度更快，负载电压误差更小。该研究为SiC MOSFET 的实际应用奠定了基础。同时对本科电力电子实验与实训教学环节具有学习指导意义。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsr2SCricVQ3BTOaFKBIeKiaSYDD56IrUiaL1aL68iajicQXD2g9GMdS20Dsg/640?wx_fmt=png&from=appmsg)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1zOzYYk5DxuxqDXR8mxGsSxZ5X1OPLIRL8LqGP2XnoUvmNN27eZ8B3lhn9xUmVhs6rFN10zIXMg/640?wx_fmt=png&from=appmsg)