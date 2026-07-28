# 全桥 DC-DC 变换器中 SiC 器件损耗分析


> 原文地址: [https://mp.weixin.qq.com/s/u4xy8ribbFV6ZaUK2fhU8A](https://mp.weixin.qq.com/s/u4xy8ribbFV6ZaUK2fhU8A)

**文章来源：**电工技术

**作者：**李赫1, 郝欣2, 赵千淇1, 程旭峰1(1. 河北科技大学机械工程学院,; 2. 英飞凌科技(中国)有限公司)

**摘 要 ：**目前以碳化硅(SiC)MOSFET 为代表的第三代宽禁带半导体有着高工作频率、低开关损耗、耐热性高等优点,可以有效地降低 DC/ DC 变换器的整体损耗,提升电能转换效率。 在以金属氧化物半导体场效晶体管(metal-oxide-semiconductor fieldeffect transistor, MOSFET)和绝缘栅双极型晶体管(insulated gate bipolar transistor, IGBT)作为开关器件的全桥 DC-DC 变换器中,软开关技术的使用虽然会导致循环电流和较大的电流纹波,产生额外的损耗,但一般该损耗远低于开关损耗,可以有效降低变换器整体损耗。 但对于 SiC MOSFET 全桥 DC-DC 变换器,碳化硅器件的开关损耗很低,可能会低于软开关技术的额外损耗,因此软开关技术在 SiC MOSFET 中的有效性面临挑战。 采用英飞凌官方提供的型号为 IMZA120R014M1H 的 SiC MOSFET的 PLECS 热仿真模型,对其在全桥 DC-DC 变换器中的软开关和硬开关损耗进行了全面的仿真实验和分析,以探究软开关技术在 SiC MOSFET 全桥 DC-DC 变换器中的有效性,同时提供一种变换器开关损耗和总体损耗研究的方法。 实验结果表明,在100 kHz 的 SiC MOSFET 主流工作频率下,软开关的开关损耗和总体损耗仍旧远低于硬开关,软开关技术在基于 SiC 器件的全桥 DC-DC 变换器中仍旧具有重要的作用和意义。

**关键词 ：**SiC MOSFET; 开关损耗; 软开关; DC-DC 变换器

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkI9bicb8TPH12XnsWrCgp7iasAudKKqqiaPicawllyYmYKLmeicGyxWNpAtFg/640?wx_fmt=jpeg&from=appmsg)

全桥 DC-DC 变换器是一种适用于大功率开关电源的直流变换电路,易于实现高频化,它的主电路结构简单,可以通过增加小电感、电容等谐振元件,在开关过程的前后引入谐振条件以实现软开关。 得益于其输出功率大、效率高、控制简单、具备电气隔离等优点被广泛应用于电动汽车、电力设备、焊接电源等工业和交通设备中。

传统的全桥 DC-DC 变换器普遍采用在以金属氧化物半导体场效晶体管( metal-oxide-semiconductor field-effect transistor, MOSFET)和绝缘栅双极型晶体管(insulated gate bipolar transistor, IGBT)作为主开关器件。 IGBT 具有电流大、耐高压、开关速度高、额定开关频率较低\[1-2\],单次开关损耗较大,从而需要采用较大的电感和电容等滤波元件,影响整个电源的体积,不适合高频应用。 MOSFET 的工作频率可以达到几百 kHz,但耐压较低,最高只有 650V,无法取代 IGBT 在高压大电流场合下的应用。SiC MOSFET 导通电阻、开关损耗低,适用于更高的工作频率\[3\],另外由于其高温工作特性,大大提高了高温稳定性,减少了散热器件的数量从而降低整机体积。 采用 SiC MOSFET 作为全桥 DC-DC变换器的主开关管可以提高工作频率和工作电压,有效减小开关电源的体积,提高电能转换效率和功率密度\[4-5\]。 许多学者对基于 SiC MOSFET 全桥DC-DC 变换器做了大量研究。

文献\[6\]利用 SiC MOSFET 的优点结合全桥逆变电路的工作特点,设计了一种能效高达 93. 4% 的400 A 级脉冲 MIG 逆变焊接电源。 文献\[7\] 把 SiC MOSFET 作为串联谐振全桥 DC-DC 变换器的开关管,提出了一种新型的谐振软开关等离子体电源。在软开关状态下谐振频率达到 260 ~ 310 kHz,变换器的转换效率最高达到 98. 2% ,功率密度达到 1. 38W/ cm3。 前者虽然焊接效果优良,输出电流波形稳定可控,动态响应性能好,但在硬开关电路下必然会造成较大的关断损耗。 后者简化电路拓扑、提高了功率密度和效率,但输出不稳定,工作噪音大。文献\[8\]基于弧焊电源在工作时短路电流大,空载电压高,输出电流稳定等特点,通过 PSPICE、Saber软件进行电路建模、仿真,利用 SiC MOSFET 的高频特性在全桥逆变电路下,设计了一种高频软开关的新型弧焊电源。 虽然设计的焊机电源考虑到了小型化、高效化和稳定性,但在高性能和节能方面仍有不足。 文献\[9\]提出了一个精确的 SiC 功率模块子电路模型,充分考虑器件的物理特性和结构,得到了精确的米勒电容模型,以帮助优化变换器设计中的开关损耗部分的分析。 文献\[10\]采用一种 SiC MOSFET 和肖特基二极管的 7. 5 kW 高效三相降压整流器,在 50 ℃冷却液的满负荷下实现 98. 54% 的效率值。

上述研究大多针对 SiC MOSFET 本身在不同工业电源里的应用和所构成电路整体效率和功率密度的提升,鲜见有文献对全桥 DC-DC 变换器中 SiC MOSFET 的硬开关和软开关状态下的损耗进行分析。 由于碳化硅器件的开关损耗很低,可能会低于软开关技术的额外损耗,因此软开关技术在 SiC MOSFET 中的有效性面临挑战,软开关技术在 SiC MOSFET 广泛应用的场景下是否仍旧具有重要的意义尚不明确。

现以英飞凌 IMZA120R014M1H 为例,将其应用在高频 CO2焊接电源领域中的全桥 DC-DC 变换器中,通过 PLECS 平台搭建高频 CO2焊接电源的主电路、控制电路和损耗仿真模型,在调制策略上采用双极性调制和全桥移相调制,分别对两种调制方法进行软开关测试、损耗分布测试、闭环响应测试并进行比较。

**1 全桥 DC-DC 变换器损耗分析**

以高频 CO2 焊接电源中的全桥 DC-DC 变换器为例,首先分析了全桥 DC-DC 变换器的拓扑结构和工作原理,其次简单介绍了 SiC MOSFET 的导通、开关损耗估算方法及软开关的实现波形,作为后续SiC 全桥 DC-DC 变换器损耗分析的理论基础。

**1\. 1 拓扑结构及工作原理**

全桥 DC-DC 变换器的拓扑结构如图 1 所示,变换器从左到右依次被分成了逆变网络、谐振网络、整流单元、滤波器及焊枪 4 个部分。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIicO3qMRSEIUnW8bhvbVfH6gHMhARW8nnF5XxnQrHCp4ldHutHFfGrWQ/640?wx_fmt=png&from=appmsg)

**1\. 2 SiC 损耗分析**

当 MOSFET 作为电路的开关时,由于非理性的开关特性,在 MOSFET 的开通瞬态中,漏源电压下降,漏源电流增加。 MOSFET 在关断瞬态中,漏源电压增加,漏源电流减小。 因此开通和关断时 MOSFET 管的电压和电流会产生交叠,电压和电流交叠的区域会产生开关损耗,上述过程被称为硬开关。修改硬开关的参数和控制策略,或者在硬开关电路中加入辅助电路,可以消除上述电压与电流的交叠区域,从而减小甚至消除开关损耗,上述方法称之为软开关技术。

**1\. 3 导通损耗和开关损耗**

在 DC-DC 变换器设计中,变换器的功率损耗计算一直是设计合理的重要体现,既对效率进行了优化,又能保证器件处于合理的工作温度以保证设备的安全性和耐用性,节约成本。 合理的损耗分析还可以预估变换器效率,保证变换器的工作性能。 本节以 SiC MOSFET 开关管为例说明导通损耗和开关损耗的简单计算方法。

导通损耗可以通过导通电阻计算得到。 当开关处于导通状态时,可能会出现正向导通模态和反向导通模态。 式(1)为正向导通损耗,式(2)为反向导通损耗\[11\]。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIiaNLaqmrLHuEtOSyK9ma9MynQ3atvhxLsV7W9Kfn1dmzsb3m3T8GgOA/640?wx_fmt=png&from=appmsg)

式中: Ts 为稳定工作情况下的工作周期; isf 为正向导通电流; RDS 为正向导通电阻; isc、RSD 分别为反向导通电流、电阻;t 为导通时间。

SiC MOSFET 开关管的导通损耗主要取决于占空比而与频率无关,所以如果要减小导通损耗最明显的方法就是使用低导通阻抗的 MOSFET 开关管,本文研究采用英飞凌官方提供的型号为 IMZA120R014M1H的 SiC MOSFET 开关管的导通电阻为 18. 6 mΩ。

开关损耗的简单估算方法\[12\]为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIGV9KZjwG3rCicBKPWviaHVCzXPgmG1vh1xibvjMcKf7Yy7Ngm7azkaavw/640?wx_fmt=png&from=appmsg)

式(3)中: VB 为母线电压; IL 为负载电流; f 为开关频率; tON 为开启时间; tOFF 为关断时间。

根据式(3)可知开关损耗与和开通时间及关断时间成正比。 伴随着开关频率和功率的增加,开关损耗仍然十分严重。 所以为了实现变换器的小型化和轻量化,只有提高开关的工作频率,并同时减小导通和开关损耗,提升工作效率和稳定性。

**2 调制策略设计和建模**

开关损耗和导通损耗受到有限双极性脉冲宽度调制( pulse width modulation, PWM) 调制策略的巨大影响,因此采用了两种调制方法:有限双极性PWM 调制和全桥移相调制。 有限双极性 PWM 调制策略采用下管(即 T2 和 T4 管)PWM 调制,上管按照开关周期的一半依次导通的策略。 全桥移相调制以左半桥(T1 和 T2 桥)为基准,右半桥的控制时序相对左半桥做移相,从而控制输出电压。

**2\. 1 有限双极性调制策略**

有限双极性 PWM 调制的波形如图 2 所示,从上到下依次是 T1 ~ T4 的栅极驱动波形。 T1 和 T3 的占空比都是 0. 5,依次交替导通。 T1 导通时,T2 和T3 关断,T4 通过调节占空比来调节输出电压;T3 导通时,T1 和 T4 关断,T2 通过调节占空比来调节输出电压。 与传统双极性控制方法相比,有限双极性控制在每次导通时只对一个开关管的占空比进行调节,可以较容易的实现软开关运行。为了实现有限双极性控制,采用 2 个相差 T / 2的三角波,通过分别和占空比以及 0. 5 的固定值比较来生成四路驱动信号,通过 delay 模块生成死区时间,死区时间为 300 ns。 建立的双极性调制模型如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIvu4QqswOlhQbqmIT03icxYbXa1e1ibh5ro3mxT7S8XTV6TQkBY1wrujw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIxFicKuS4SsjL3QaTo8OkywUbID0hFpLWQb9z84PibSyrAdXlOfaaAcTg/640?wx_fmt=png&from=appmsg)

**2\. 2 全桥移相调制策略**

全桥移相调制的驱动波形如图 4 所示。 从上到下同样依次是 T1 ~ T4 的栅极驱动波形。 T1 和 T2 是左桥臂,T3 和 T4 是右桥臂,可以看到右桥臂比左桥臂滞后了一定的相位,控制该滞后相位的大小就可以控制输出电压的大小。 移相控制的仿真采用一个移相模块再加死区模块就可以了。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkI3ic82lY7icANMxan4RWyqubESibNQf5N2L3bicBJAdgU8O8KMTibrxRQx4g/640?wx_fmt=png&from=appmsg)

**2\. 3 增量式 PI 控制器**

全桥 DC-DC 变换器采用增量式 PI 控制器,表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIQ44v0DFyWgPuKl9kUtt6oWEcUrpQXUib44icBYcIibtmU0DvN2lJFECiaw/640?wx_fmt=png&from=appmsg)

式(4)中:e( k) 为第 k 次采样的输出电流误差值;d(k)为 PI 控制器的输出;KP和 KI分别为比例和积分环节的系数;Ts为控制器采样周期,该周期与开关周期不同,一般大于等于开关周期。 依据式(4),建立 PI 控制器的仿真模型如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIvL8ER9Grx4w9fWHhgY4lLlKNibTheMUQmX4upGjaHD1jQTiaPsA8TicibQ/640?wx_fmt=png&from=appmsg)

**3 主电路和开关损耗建模**

为了对 SiC MOSFET 的开关损耗进行仿真分析,本节建立了以 SiC MOSFET 为主开关管的 DCDC 变换器热仿真模型,根据应用需求的考虑,采用有限双极性 PWM 调制策略和 全 桥 移 相 调 制策略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIBW0Y2STYNjm16u8iaTfWDxvLaExXo4jlclR0JLMOE5BkVoprC7tIl9g/640?wx_fmt=png&from=appmsg)

从图 6 可知,主电路模型中,4 个开关管采用英飞凌提供的 IMZA120R014M1H 的热模型,热阻设置为两级,开关管到散热器热阻和散热器到环境热阻。环境温度设置分25 ℃恒温。

**3.1  仿真结果和分析**

仿真的关键参数如表 1 所示。 此时 Cr 和 Lr 的谐振频率是 99. 86 kHz,比变换器开关频率略低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIcBL1vrAI43qoKfEkC59b1XujoPcWYVKSkhH6DqmpIoYNicH2Eb953hA/640?wx_fmt=png&from=appmsg)

**3\. 2 有限双极性调制策略测试**

**3\. 2. 1 开环基本测试**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIgicYtEHsIulzITvQwR3W5Vm7KAfb93Ss1xFrQAEnQ9jcKHrZVfPb8qA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIeNFo6licVZsPCqtsiaq4w55fPqiarzkiaAJywQD4Bkibo18NljBkJExMRWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIfS6VwuH1iaePn2dWTzg6J9eLPw2khHuBnmXLOCQFBicj0ib7wqUqrr4zw/640?wx_fmt=png&from=appmsg)

首先进行开环测试,将占空比设定为 0. 35,输出电流为 500 A 左右。 测试结果如图 7 ~ 图 11 所示。 从图 7 可以看到输出电压在 40 V 左右,输出电流是 500 A 左右,逆变电流的幅值约为 75 A,励磁电流幅值约为8. 5 A。 图8 中在额定状态下,导通损耗为 33 W 左右,开关损耗为 14 W 左右。 图 9 和图10 分别是 T1 和 T2 的开关波形。 从波形上看,两个开关管在一定程度上实现了软开关,但波形有谐波存在,开关状态不彻底。 图 11 是全桥逆变器输出的电压和电流,可以看到电流波形略微滞后电压波形,负载略微成感性,感性负载是开关管实现零电压软开关的条件,可以看到由于感性较弱,软开关无法完全实现。 因此要想增强软开关的实现能力需要增强负载的感性,可行的办法是增加漏感的大小。 但漏感的增大会降低 DC / DC 变换器的有效输出电压,必须进行平衡设计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIaug6kBwamOr7PvQ0MNibl6v2akulHuJBsbvVATmSmyMoZF34aHiabstQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIopicwGupYpibPx89pxSbPbuOYbEShibavElKYTumCXOI29zicB6DfiabKUQ/640?wx_fmt=png&from=appmsg)

**3\. 2. 2 软开关测试**

表 2 是 DC / DC 变换器在不同漏感和占空比时的开关状态和输出电流。 从表 2 可以看到随着占空比和漏感的变大,DC / DC 变换器的软开关状态更容易实现。 但随着漏感的变大,漏感会对输入电压进行分压,导致输出的电压和电流变小。 从表 2 可知,漏感在 6 ~ 8 μH 是最合适的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIUBXNJNHpN9ndwwr0iacrprtIzmlRPItzEVb2R87VYl5PNlJ99K0tdbg/640?wx_fmt=png&from=appmsg)

**3\. 2. 3 损耗分布测试**

表 3 是 DC / DC 变换器在不同漏感和占空比时的导通损耗(前一个数) 和开关损耗(后一个数)。从表 3 可以看出 DC / DC 变换器的开关损耗出第一列(漏感 2 μH)外,大致在 8 ~ 12 W 变化,开关损耗均较小。 第一列(漏感 2 μH) 时,由于开关频率非常接近漏感和隔直电容的谐振频率,因此开关损耗较大。 导通损耗受负载电流的影响最大,大的负载电流必定造成大的导通损耗。 为了既保证输出电流可以达到 500 A,又保证总损耗较低,可以看出在6 μH 时是最合适的。

**3\. 2. 4 闭环响应测试**

闭环测试的测试条件是漏感设定为 6 μH,KP设定为 0. 000 2,KI设定为 0. 05。 参考电流初始值为300 A,在 0. 3 s 时突变为 500 A,在 0. 6 s 时突变为200 A,图 12 是闭环响应结果,从图 12 可以看出实际的输出电流值可以准确跟踪电流参考值,并且没有稳态误差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIE30Xhia13dWWt1LicDxgcibm7ic4eEX9lqygPE0EmVicoCesEpaFdhgJNWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIHH35ef4FXD2ST72CfYRfPJ9QeiadqqKWMB5ic8cicLxMKqbFZZ04ibVqIQ/640?wx_fmt=png&from=appmsg)

**3\. 3 全桥移相策略测试**

**3\. 3. 1 开环基本测试**

首先进行开环测试,将移相角设定为 126°,输出电流为 500 A 左右。 测试结果如图 13 ~ 图 17 所示。 从图 13 可以看出输出电压在 40 V 左右,输出电流是 500 A 左右,逆变电流的幅值约为 75 A,励磁电流幅值约为 8. 5 A。 在额定状态下,导通损耗为 47 W 左右,开关损耗为 34 W 左右。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIgqUibLbptEyLzorfzibzXibuzD0iazp5iauJtCnTLI4Xl8Oedibsolic5alQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIjV1pUWoQZU5yDDicJeC9wZfL4LmNg2G4B8BjaQC0NAbfYDiceqokBjag/640?wx_fmt=png&from=appmsg)

图 15 和图 16 分别是 T1 和 T2 的开关波形,从波形上看,两个开关管工作在硬开关状态。 图 17 是全桥逆变器输出的电压和电流,可以看到电流波形略微滞后电压波形,负载略微成感性,不足以使开关管工作在软开关状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIjcXIuIpK1aMcicfkmkMmO1Ynia47MM26EZ4MTfPt6CSUgheMTz8uD1QA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkI074YC6ALBryvBqIdQxBpq19okKAvibt5JBw5nzeCxaCNZa1d7yw0AVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIC3ITGJNTXbt6vO2kZCSx32SxDM53uAzeaTGTfNCQiazdh70XwRy3yzA/640?wx_fmt=png&from=appmsg)

全桥逆变器输出的电压和电流,可以看到电流波形略微滞后电压波形,负载略微成感性,不足以使开关管工作在软开关状态。

**3\. 3. 2 软开关测试**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkI1GJ7WDSbclicqp2oJDE8N5LeBb4NkFU34pp1ByyNeYMEjl4bG3Ehictw/640?wx_fmt=png&from=appmsg)

表 4 是 DC / DC 变换器在不同漏感和移相角时的开关状态和输出电流。 从表 4 可以看出随着移相角和漏感的变大,DC / DC 变换器的软开关状态更容易实现。 但随着漏感的变大,漏感会对输入电压进行分压,导致输出的电压和电流变小。 从表 4 可以看出,漏感同样在 6 ~ 8 μH 是最合适的。

**3\. 3. 3 损耗分布测试**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIQ3UxiccapdwHNeXvxuAZITMPG7ACKFoGYEVhD0Mc7WuG6zeQ5cWLibhA/640?wx_fmt=png&from=appmsg)

表 5 是 DC / DC 变换器在不同漏感和移相角时的导通损耗(前一个数) 和开关损耗(后一个数)。从表 5 可以看出 DC / DC 变换器的移相控制时的开关损耗出比有限双极性 PWM 控制时普遍大了许多,在非软开关状态时,不存在临界状态,而是直接进入硬开关状态导致开关损耗较大。 导通损耗受负载电流的影响最大,同样比有限双极性 PWM 控制大了很多,大的负载电流必定造成大的导通损耗。 为了既保证输出电流可以达到 500 A,又保证总损耗较低,可以得出在 6 μH 时是最合适的。

**3\. 3. 4 闭环响应测试**

闭环测试的测试条件是漏感设定为 6 μH,KP设定为 0. 000 4,KI 设定为 0. 1。 参考电流初始值为300 A,在 0. 3 s 时突变为 500 A,在 0. 6 s 时突变为200 A,图 18 是闭环响应结果。 从图 18 可以看出实际的输出电流值可以准确跟踪电流参考值,并且没有稳态误差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIL8gvP8MxGaW2P0BTNtqIArRdenaTJFTEcXwYnCibichxCaOOaVn7lViaA/640?wx_fmt=png&from=appmsg)

**4 结论**

根据上述对高频 CO2焊接电源的仿真分析得到以下结论。

(1)全桥 DC-DC 变换器中当 SiC MOSFET 处于软开关状态时比硬开关状态提高了近 4% 的效率,且随着占空比和移相角的增加,效率的提高会更加明显。 软开关状态下的 SiC 器件仍旧比硬开关状态下的开关损耗低,效率高,证实在基于 SiC MOSFET的全桥 DC-DC 变换器中软开关技术仍然具有重要的作用和意义。

(2)当开关频率近似于谐振频率时,DC-DC 变换器难以实现软开关运行,开关损耗较大,可以通过增大漏感扩大软开关区域。

(3)根据有限双极性调制策略和全桥移相调制策略结果可知,漏感设定为 6 μH 时既保证输出电流可以达到 500 A,又能保证总损耗较低。 且有限双极性 PWM 控制无论在开关损耗还是导通损耗均比移相全桥控制要低,具有比移相控制更加优越的性能。

本文研究有以下两个创新点:①采用英飞凌官方提供的 SiC 损耗模型对开关损耗进行研究,研究结论表明符合预期的理论结果,为 SiC 开关损耗的研究提供了新的研究思路;②通过 SiC 在全桥 DCDC 变换器中的开关损耗研究,证明了软开关技术对其仍具有重要意义,对之后 SiC 软开关损耗技术的发展具有参考意义。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)