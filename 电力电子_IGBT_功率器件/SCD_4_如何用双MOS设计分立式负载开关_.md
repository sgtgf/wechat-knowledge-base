# SCD-4：如何用双MOS设计分立式负载开关？


> 原文地址: [https://mp.weixin.qq.com/s/qcmRc8OJXrveXtt99vvi1g](https://mp.weixin.qq.com/s/qcmRc8OJXrveXtt99vvi1g)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCefcwwciaNc7ICvOvhsKUibAjveytQrUk1fSjBvl5yibwdj8u9qdDlaia4qg/640?wx_fmt=png)

____**★★★**_______SCD-4--______\-分立式双MOS负载开关_______**★★★**____

引言：基于单个MOSFET拓扑的负载开关只能阻断一个方向的电流，由于MOSFET有一个固有的体二极管，如果存在反向电流，它们的作用就像处于导通状态的二极管（传送门：[MOS-5：MOS的电流方向是唯一的吗？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490121&idx=1&sn=ccc489fe8ec9739bb2dfffb51c1c44ee&chksm=c33550d6f442d9c090bb23440d7e3e823036642a4dab9096be72247d90f77bcf7b93e8d64563&scene=21#wechat_redirect)）。在一些应用中，需要能够阻断两个方向的电流，例如电池驱动应用，其中应防止电池在充电器连接器侧短路等故障情况下放电，或在电气故障导致连接电缆和交流适配器泄露的情况下放电。

____€1.具有反向电流保护的共漏极负载开关，共漏双NMOS____

更全面的负载开关功能包括反向电压保护、反向电流保护，这些可以用共漏极或共源极配置的MOSFET实现。

阻断反向电流的常见方法是使用二极管。但是使用MOSFET负载开关可以更有效地实现该功能。为了实现两个电流方向的阻断，必须将两个MOSFET以相反的极性串联。如**_图4-1_**和**_图4-2_**，在这种情况下，如果不是两个FET都打开，那么其中总有一个体二极管可以阻断对向的电流。这种方法允许创建两种反向驱动保护负载开关的替代拓扑，背靠背连接漏极或源极，称为共漏极或共源极。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTGfOjQM1GeUOnftlkTqXAEVtcmhDRtoG902SRicj8UUiaPCwmwMib4icfu0MzCFGj0QOhyldEqMguVAQ/640?wx_fmt=png)

**_图4-1：反向电流保护共漏双NMOS负载开关_**

**_图4-1_**为共漏极双NMOS高边负载开关，与单NMOS高边负载开关一样，需要有高于Vin的HV\_Ctrl驱动（传送门：[SCD-2：如何用单NMOS设计分立式负载开关?](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490216&idx=1&sn=fe01fb38d4c179b6936664ec011e56ab&chksm=c3355037f442d9219b2f708cfef231264b711f6fb845e5736bd7d865997370255805b55db383&scene=21#wechat_redirect)）。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRXS7lZouMick3KJaqncf3ubazKYkX0JnLxxUfRDt0DJtia5F6uquDXNz8LCm4CwjFXhZo8E42iareQg/640?wx_fmt=png)

**_图4-2：反向电流保护共漏双PMOS负载开关_**

**_图4-2_**为共漏极双PMOS高边负载开关，与单PMOS高边负载开关一样，Ctrl端需要可以达到接近等于或高于Vin的电平，若不能直接施加，则需要像上节（传送门：[SCD-3：如何用单PMOS设计分立式负载开关?](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490360&idx=1&sn=c39b6d4ce6e908dbe119c061216832c8&chksm=c33551a7f442d8b1f3c155cdeec80e9a6623a0000706ecb7532dcfd1568e5d9bd9a84a1ab866&scene=21#wechat_redirect)）一样增加一个三极管或者MOS管驱动G极。

____€2.具有反向电流保护的共源极负载开关，共源双NMOS____

共源极拓扑需要访问MOSFET之间的源极连接，G极必须在MOS开启保持电位高于S极，见**_图4-3_**和**_图4-4_**。因为公共源极可能会浮动，如果在没有加偏置电阻钳固电位差的情况下，两个NMOS均无法开启。因为Ctrl处的电压不低，钳固电阻可以尽量往高值取，比如1MΩ。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTGfOjQM1GeUOnftlkTqXAEhHabCIPmwGQ887syngkZKgTlnkYUibcp6FIrPgkRdtLcMnR22iaaoibQA/640?wx_fmt=png)

**_图4-3：反向电流保护共源双NMOS负载开关_**

**_图4-3_**为共源极双NMOS高边负载开关，与单NMOS高边负载开关一样，需要有高于Vin的HV\_Ctrl驱动。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRXS7lZouMick3KJaqncf3ubJC9MjhowtaIDvFMMdXPkEhvQcJOKR8xNA65RUdhnfUz8wqiatlN3vEw/640?wx_fmt=png)

**_图4-4：反向电流保护共源双PMOS负载开关_**

**_图4-4_**为共源极双PMOS高边负载开关，与单PMOS高边负载开关一样，Ctrl端需要可以达到接近等于或高于Vin的电平，若不能直接施加，则需要像上节一样增加一个三极管或者MOS管驱动G极。

_____________€3.________________________选型和使用注意___________

因为仅限于使用在高边开关场景，那么从之前的讲解中可以知道，这里从设计复杂度上不建议使用NMOS，建议使用双PMOS共漏或共源设计，相关计算和单PMOS负载开关相似，这里不再举例。需要注意的是，两个MOS尽量需要保持型号相同，如果选用的两个不一样，可能会因为一致性差的原因导致两个MOS关闭时间不一致或者开启关闭时产生振荡。

_______€4.____小结___

本节基于防正向电流泄漏+防反向电流保护的需要，在单个MOS负载开关的基础上，利用MOS体二极管的特性，设计出分立式两防负载开关电路。大家可能有疑问，为什么共漏或共源开关只有高边类型而没有低边类型，其实是因为反向电流的产生都源自于负载，那么低边开关断开的是负载和GND，GND处自然就不会产生反向电流，那么低边开关也就不需要反向电流保护，一个MOS就可以了。