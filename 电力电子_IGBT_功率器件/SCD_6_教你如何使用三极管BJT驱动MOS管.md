# SCD-6：教你如何使用三极管BJT驱动MOS管


> 原文地址: [https://mp.weixin.qq.com/s/iUf5CizX2xMqUdlrfFxe-w](https://mp.weixin.qq.com/s/iUf5CizX2xMqUdlrfFxe-w)

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_000_ec87308ed70a.png)

____**★★★**______SCD-6---三极管驱动MOS管______**★★★**____

引言：受限于MOS管的驱动阈值，在许多的应用场景中无法直接使用MCU或者SOC的GPIO电平驱动MOS的导通与关断，此时需要在MOS的G极处增加一个栅极驱动电路，实现GPIO电平可以驱动MOS。本节我们主要讲解如何使用三极管BJT设计MOS管的栅极驱动电路。

_€1.BJT驱动PMOS_

如**_图6-1_**演示了PMOS的自驱效应，当PMOS的G极连接S极时，VGS=0V，PMOS便会自开启（传送门：[MOS-2：一文告诉你如何驱动MOS管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489368&idx=1&sn=3959f9a450a812a293c0b0d26b278a1a&chksm=c3355dc7f442d4d1333275ee72e093add654198644704f71ae896a9a51b1cd54bd2fc8f7df8e&scene=21#wechat_redirect)），那么如果在PMOS的G极与GND之间增加一道SW开关，那么就可以实现G极电位在GND和Vin之间切换，那么就可以通过SW来控制PMOS的开启与关闭。

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_001_c4f83954ecaf.png)

**_图6-1：PMOS的自驱效应_**

将**_图6-1_**中的SW开关更换为三极管BJT，如**_图6-2_**，那么就是一个典型的BJT驱动高边PMOS的电路，其中C1，C2，Zener非必要。C1用做加速BJT打开，C2用做BJT快速关断，Zener用做VGS钳位，避免瞬时电压超过MOS的VGSmax耐压从而损坏MOS。（传送门：[SCD-3：如何用单PMOS设计分立式负载开关?](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490360&idx=1&sn=c39b6d4ce6e908dbe119c061216832c8&chksm=c33551a7f442d8b1f3c155cdeec80e9a6623a0000706ecb7532dcfd1568e5d9bd9a84a1ab866&scene=21#wechat_redirect)）

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_002_02c11a0e30a2.png)

**_图6-2：BJT驱动PMOS电路_**

R1和R2在一条路径上可以调节分压，也即调整G极电位，Q2关断时，VG=VS，VGS=VG-VS=0V，Q1导通时，VG=Vin×{R2/(R1+R2)}，VS=Vin，那么VGS=Vin×{R2/(R1+R2)}-Vin。当R1很大，R2很小，VGS≈Vin，此时如果VGS接近或超过Q1的GS耐压值VGSS，会损坏PMOS，那么这时就可以调整R1，R2的比例，将导通时VGS值调整至-VGSS＜VGS＜VGSTHmin。

_€2.BJT驱动NMOS_

因为NMOS经常用作低边开关，NMOS的低边开关很容易驱动，一般都不需要额外增加驱动电路。如**_图6-3_**是带电荷泵BJT驱动NMOS的高边开关，但很不常用。如果板级有额外高于Vin的电压Vdd，则可以去掉Charge Pump，直接使用分立开关控制Vdd和G极的通断。如果Charge Pump支持en使能，那么就可以去掉去掉G极驱动NMOS，直接使用GPIO控制Charge Pump的en，使能Charge Pump，输出高电压，干路MOS导通，不使能Charge Pump，不输出高电压，干路NMOS关断。（传送门：[SCD-2：如何用单NMOS设计分立式负载开关?](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490216&idx=1&sn=fe01fb38d4c179b6936664ec011e56ab&chksm=c3355037f442d9219b2f708cfef231264b711f6fb845e5736bd7d865997370255805b55db383&scene=21#wechat_redirect)；[SCD-4：如何用双MOS设计分立式负载开关？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490402&idx=1&sn=65f5039866a53eea5f7a7e302d1df78c&chksm=c33551fdf442d8ebd88891c0a23b0dc16cab833aa06872d8c79ff8469203378d6b4eb1fbc46b&scene=21#wechat_redirect)）

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_003_31e518b3befe.png)

**_图6-3：带电荷泵BJT驱动NMOS高边开关_**  

_€3.设计示例_

_设计背景：_设计一个高边负载开关，输入电压为24V，输入电流为5A，使用MCU的GPIO控制导通与关断，GPIO的电平为3.3V。

_设计分析：_这里如果选用NMOS，则需要有高于24V的电压施加给栅极，除了板级要么没有大于24V的电压，要么增加Charge pump，都不利于简化设计，降低成本，这里还是选择低压功率PMOS。

_器件选型：_根据VDSS＞24V，IDSS＞5A，Vin=24V，G极施加电平可以自取24V，并且增加BJT驱动电路可以做到可调，所选PMOS的VGSTH和VGSS耐压可以比较宽泛。对于选用的BJT，MOS的G极电流本就不大，可以选用普通的NPN型小信号BJT，让其工作在饱和区即可，基极电流Ib可以稍大，此处选用BJT的要求并不多，耐压＞24V，成本低廉。这里选用LRC的PMOS：LP73027DT3WG，NPN：L2SC4081ST1G，相关参数如**_图6-4_**至**_图6-6_**

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_004_8a9bbdc19d9a.png)

**_图6-4：_****_LP73027DT3WG最大额定参数_**

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_005_008847510016.png)

**_图6-5：LP73027DT3WG电气参数_**

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_006_e0312d428fb0.png)

**_图6-6：L2SC4081ST1G电气参数_**

_设计结果：_如**_图6-7_**，Ctrl输出3.3V高电平时，BJT导通，R1和R2组成分压电路，当R1远大于R2，Vg-Vs≈24V，PMOS导通；Ctrl输出0V低电平时，BJT关断，此时Vg-Vs≈0V，PMOS关断。

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_007_7bdf7d89813d.png)

**_图6-7：设计结果_**  

_功耗分析：_L2SC4081ST1G导通时，LP73027DT3WG也导通，此时电阻R1和R2串接在Vin和GND之间，存在电流消耗，根据P=U²/R，R越大，功耗越小，这也就是R1取值比较大的原因之一。L2SC4081ST1G导通也有电流损耗，虽然建议Ib稍大，但不能过于大，建议取Ib=1mA为通用计算取值。

_€4.使用举例_

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_008_318f28354c63.png)

**_图6-8：实例1_**  

如**_图6-8_**所示是VT11驱动VT12，VT11的基极额外使用二极管搭建了一个简易或门，允许多个信号驱动VT11导通，从而打开VT12。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\SCD_6_教你如何使用三极管BJT驱动MOS管_images\img_000_4314009856e1.png)

**_图6-9：实例2_**  

如**_图6-9_**所示是VT33驱动VT20，VCC=3.3V，使用的PMOS其VGSth=-3V~-1V，X9H\_PWR\_ON电平为1.8V，那么1.8-3.3=-1.5V，刚好处于VGSTH之间，存在导通隐患，所以增加一个VT33驱动电路。如果X9H\_PWR\_ON电平是3.3V，那么就可以直接驱动VT20。  

![](SCD_6_教你如何使用三极管BJT驱动MOS管_images/img_010_ba1358919be8.png)

**_图6-10：实例3_**  

如**_图6-10_**所示是Q1驱动Q8，C623既可以加速R419固定电位，也可以控制吸纳涌入电流。R229为调试跳线0Ω电阻，这里额外注意R548和R420的电阻相互位置，是避免分压效应的一种排布。