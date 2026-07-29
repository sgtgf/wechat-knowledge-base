# SCD-7：教你如何使用MOS管驱动MOS管


> 原文地址: [https://mp.weixin.qq.com/s/oc1CrkKotliXKTrNKU0Qgg](https://mp.weixin.qq.com/s/oc1CrkKotliXKTrNKU0Qgg)

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_000_4199c7c248c1.png)

____**★★★**______SCD-7---MOS管驱动MOS管______**★★★**____

引言：从上节可知，BJT用来驱动MOS管存在功耗较高，但优势在BJT价格低廉，在追究极致低功耗场景，推荐将BJT更换为MOS，使用MOS管驱动MOS管，这就是MOS管栅极驱动电路，驱动方式简单易设计，本节主要讲解如何设计MOS管的栅极驱动电路。

____________€1.NMOS驱动PMOS____________

_![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_001_02c11a0e30a2.png)_

**_图7-1：BJT驱动PMOS电路_**

根据上节说到的PMOS的自驱效应，将开关SW从BJT更换为MOS可以得到如**_图7-2_**所示的NMOS驱动PMOS电路。R1为偏置电阻，R2为Q1的栅极电阻，也是一枚分压电阻，R3为Q2的栅极电阻，R4为偏置电阻，其中，R1，R4必要，R2，R3为非必要。

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_002_604fca2300a8.png)

**_图7-2：NMOS驱动PMOS电路_**

R1和R2在一条路径上可以调节分压，也即调整G极电位，Q2关断时，VG=VS，VGS=0V，Q1导通时，VG=Vin×{R2/(R1+R2)}，VS=Vin，那么VGS=Vin×{R2/(R1+R2)}-Vin。当R1很大，R2很小，VGS≈Vin，此时如果VGS接近或超过Q1的GS耐压值，会损坏PMOS，那么这时就可以调整R1，R2的比例，将导通时VGS值调整至\-VGSS＜VGS＜VGSTHmin。

____________€2.NMOS驱动NMOS____________

因为NMOS经常用作低边开关，而NMOS的低边开关很容易驱动，所以一般都不需要额外增加驱动电路。如**_图7-3_**是带电荷泵NMOS驱动NMOS的高边开关，但很不常用，如果板级有额外高于Vin的电压Vdd，则可以去掉Charge Pump，直接使用分立开关控制Vdd和G极的通断。如果Charge Pump支持en使能，那么就可以去掉去掉G极驱动NMOS，直接使用GPIO控制Charge Pump的en，使能Charge Pump，输出高电压，干路MOS导通，不使能Charge Pump，不输出高电压，干路NMOS关断。

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_003_2dffd4e10377.png)

**_图7-3：带电荷泵NMOS驱动NMOS高边开关_**

____________€3.设计示例____________

_设计背景：_设计一个高边负载开关，输入电压为12V，输入电流为10A，使用MCU的GPIO控制导通与关断，GPIO的电平为3.3V。

_设计分析：_这里如果选用NMOS，则需要有高于12V的电压施加给栅极，除了板级要么没有大于12V的电压，要么增加Charge pump，都不利于简化设计，降低成本，这里还是选择低压功率PMOS。

_器件选型：_根据VDSS＞12V，IDSS＞10A，Vin=12V，G极施加电平可以自取12V，并且增加MOS驱动电路可以做到可调，所选PMOS的VGSTH可以比较宽泛，但要求VGS耐压大于12V。对于选用的驱动NMOS，PMOS的G极电流本就不大，可以选用普通的小信号MOS，并且耐压＞12V，成本低廉。这里选用Nexperia的PMOS：PXP010-20QX，NMOS：BSH103BK，相关参数如**_图7-4_**至**_图7-6_**。注意选用的PXP010-20QX，其-1V＜VGSTH＜-0.5V，-0.5V与GND-0V比较接近，这里存在一定的隐患，我们可以选用PXP9R1-30QL，其-2.5V＜VGSTH＜-1V，距离GND-0V比较远，导通关闭的界限比较安全。

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_004_90c90b0e6eef.png)

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_005_2216eb60fbc7.png)

**_图7-4：PXP010-20QX电气参数_**

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_006_fca8feb37d66.png)

**_图7-5：PXP9R1-30QL电气参数_**

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_007_a626186901b7.png)

**_图7-6：BSH103BK电气参数_**

_设计结果：_Ctrl输出3.3V高电平时，Q2导通，R1和R2组成分压电路，当R1远大于R2，Vg-Vs≈12V，PMOS导通；Ctrl输出0V低电平时，Q2关断，此时Vg-Vs≈0V，PMOS关断。

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_008_b5b20d56381c.png)

**_图7-7：设计结果_**

_功耗和电流泄漏分析：_根据**_图7-7_**，通常使用一个单独的N通道MOSFET来控制P通道MOSFET。N通道MOSFET栅极上的高电平将P通道MOSFET栅极拉低并打开。在这里，我们看到了另一个重要的电流泄漏路径，从控制驱动线通过N通道的门极G到源极S或漏极D。为了获得最佳的应用待机时间，需要一个具有极低门极泄漏的N通道MOSFET。电阻R1和R2用于进一步优化泄漏水平。它们的值是可获得的最低泄漏水平、可达的VGS开关水平和负载开关电路的开关速度之间的权衡。

____________€4.使用举例____________

____![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_009_5cd536ff7e10.png)____

**_图7-8：驱动实例_**

示例分析：如上NMOS-Q2驱动PMOS-Q1，从**_图7-8_**来看，存在几个问题：偏置电阻只有10kΩ过小，可以更改为100kΩ以上，Q2的栅极电阻1kΩ过大，可以更改为10Ω。

____________€5.背靠背驱动拓扑____________

**_图7-9_**显示了使用分立P通道MOSFET实现的双向电源开关，在栅源之间有一个额外的电容有助于控制两个电流流方向上的涌电流。然而，P-MOSFET比N-MOSFET价格普遍更贵，Rdson也普遍高。该电路对MOSFET没有热保护，因此，需要考虑大电流散热问题，提供更高的设计裕度。**_图7-9_**为共源极示例，共漏极驱动也类似，可以回顾之前共漏极的基本驱动（传送门：[SCD-4：如何用双MOS设计分立式负载开关？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490402&idx=1&sn=65f5039866a53eea5f7a7e302d1df78c&chksm=c33551fdf442d8ebd88891c0a23b0dc16cab833aa06872d8c79ff8469203378d6b4eb1fbc46b&scene=21#wechat_redirect)）。

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_010_c3332f18bd88.jpg)

**_图7-9：NMOS驱动背靠背PMOS开关_**  

使用NMOS驱动背靠背连接的N通道MOSFET的双向电源开关如**_图7-10_**所示。充电泵电路提供足够的门驱动电压来打开两个N通道MOS。尽管实现提供了低Rdson和价格较低的N-MOSFETS，但复杂的驱动电路占据了更多的板空间，也引起了对电路鲁棒性的关注。与**_图7-9_**类似，该电路也不为MOSFET提供热保护，因此需要考虑更大体积的MOSFET以获得更高的散热设计裕度。**_图7-10_**为共源极示例，共漏极驱动也类似，可以回顾之前共漏极的基本驱动（传送门：[SCD-4：如何用双MOS设计分立式负载开关？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490402&idx=1&sn=65f5039866a53eea5f7a7e302d1df78c&chksm=c33551fdf442d8ebd88891c0a23b0dc16cab833aa06872d8c79ff8469203378d6b4eb1fbc46b&scene=21#wechat_redirect)）。

![](SCD_7_教你如何使用MOS管驱动MOS管_images/img_011_15a0ab07fc39.png)

**_图7-10：NMOS驱动背靠背NMOS开关_**