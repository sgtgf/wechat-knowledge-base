# 计及热电耦合效应的SiC MOSFET阈值电压精确监测方法


> 原文地址: [https://mp.weixin.qq.com/s/PyIVR1yTv7PeAkJufNkNrA](https://mp.weixin.qq.com/s/PyIVR1yTv7PeAkJufNkNrA)

文章来源：太阳能学报

作者：杜明星1，信金蕾1，姚婉荣2，欧阳紫威1，3（1. 天津市复杂系统控制理论及应用重点实验室（天津理工大学），天津 300384；2. 天津中科华盈科技有限公司，天津 300300；3. 丹麦技术大学电气工程系，灵比 2800 Kgs）

摘 要：在研究SiC MOSFET的阈值电压、体二极管电压、漏\-源极通态电阻温度依赖性的基础上，分析偏压温度不稳定性（BTI）引起的 VTH 的漂移规律，并探究其对温敏电参数（TSEPs）的影响规律。另外，在充分考虑温度和BTI对 VTH 共同作用的影响下，提出在小电流注入时使用体效应下的体二极管电压监测SiC MOSFET阈值电压的方法。该方法可在不同的结温（Tj）下监测阈值电压，为校正其他TSEPs测量结温的准确性提供帮助。理论和实验结果证明了该方法的可行性。

关键词：碳化硅；功率MOSFET；状态监测；温敏电参数；偏压温度不稳定性

0. 引 言

近年来，碳化硅（silicon carbide，SiC）作为宽禁带半导体材料，具有比硅（Si）更高的击穿电场和热导率，使用由其构成的SiC MOSFET所组成的逆变器被广泛应用在光伏发电和新能源发电领域中。然而当某个 SiC MOSFET 发生故障后，整个系统会遭受较大的冲击，可能会引起系统的崩溃。因此，为了提高逆变器的可靠性，对SiC MOSFET进行状态监测（condition monitoring，CM）具有积极意义。

基 于 温 敏 电 参 数（TSEPs）的结温测量方法能够在功率循环期间通过使用指定的温敏电参数实时监测功率器件的结温（Tj），及时反映处于工作状态的功率器件的芯片结温。目前，TSEPs广泛应用于Si 器件的结温估计，在SiC器件中的使用还存在诸多挑战。与Si相比，SiC具有更宽的禁带，且其TSEPs的灵敏度较低，故基于TSEPs 估计Tj 更加困难。另外，制约SiC MOSFET的主要挑战之一是其栅氧化层的可靠性。尽管随着科技的进步，采用最新技术制造的SiC MOSFET的栅氧化层可靠性已经有了很大提升，但与Si MOSFET相比，SiC MOSFET中由偏压温度不稳定性（bias temperature instability，BTI）引起的阈值电压（VTH）漂移现象尤为显著，仍还需进一步提升。BTI 可简单认为是由于栅极电压应力作用于栅氧化层而导致的VTH漂移过程。在MOS栅极施加正偏压将导致邻近栅极电介质半导体中电子的积累，从而负电荷被捕获，VTH正向漂移，这被称为正偏压温度不稳定性（positivebias temperature instability，PBTI）；与之类似，在MOS栅极施加负偏压会导致空穴的累积，从而氧化物中大量正电荷被捕获，VTH 负向漂移，这被称为负偏压温度不稳定性（negativebias temperature instability，NBTI）。

在SiC MOSFET中，由于在半导体氧化过程中碳原子的存 在 ，氧 化 物 、界 面 和 近 界 面 陷 阱 的 增 加 使 BTI 在SiC MOSFET中尤为突出。文献［10］提到当SiC MOSFET的栅极偏压被撤出后，BTI 引起的VTH 漂移会迅速恢复，在应力撤出后100μs和1s的测量结果相差4倍以上，并且如果栅极被施以相反应力的偏压，这种恢复会加速。文献［11］使用加速栅极偏压应力测试方法对不同功率器件进行了全面的比较，结果表明，Si MOSFET比SiC MOSFET损坏栅氧化层所需的电压高得多。 VTH漂移会增加结温测量的复杂性，具体表现为影响体二极管电压VSD 、漏\-源极通态电阻RDS \- ON 、米勒平台时间tGP 、米勒平台电压VGP和漏极电流变化率dID/dt等TSEPs 的正常使用。因此，亟需对受BTI 引起的VTH漂移所影响 的TSEPs 进 行 评 估 ，并 提 出 简 单 的 、可 监 测SiC MOSFET阈值电压的方法。

基于上述分析，本文首先分析SiC MOSFET中常用电参数的温度依赖性，其次评估BTI 对这些温敏电参数的影响规律，最后提出在小电流注入时（ISD \= 50 mA）使用体效应下的体二极管电压监测SiC MOSFET阈值电压的方法。该方法利用了体二极管电压良好的温度特性和其与NBTI和PBTI均有良好线性关系的特点，可实现在不同结温下利用体二极管电压监测阈值电压，为提高逆变器的可靠性提供了支持。

1\. SiC MOSFET的温敏电参数

本文实验使用罗姆（ROHM）公司生产的1.2kV平面SiC MOSFET（S4102）作为待测器件。

1.1 阈值电压

在MOS 器件中，VTH 是常用的 TSEP，它被定义为使沟道反型所需的栅极电压。 VTH 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcudSZF4GIVlLa2LLlbdPEIUicDCuHVuAUj5xdwicScavmK5pzFSeibzVSrw/640?wx_fmt=png)

由于阈值电压的温度特性主要由本征载流子浓度的正温度系数（positive temperature coefficient，PTC）所主导，因此VTH 具有负温度依赖性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu5SetRA9tN6qIoaCDwCwt3kjLFiblgH8tj3Wt793lFR3iaACIIQWia3kvA/640?wx_fmt=png)

图 1 为使用吉时利（Keithley）大功率半导体器件测试系统（PCT\-2）在不同的结温下获取的SiC MOSFET 的转移特性曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuJWcntibB2FhRpFJljAP4KuKGy7clgEG0NP22zvKcuXJSxbKFWicPY4tw/640?wx_fmt=png)

图2为使用线性外推法所获得的VTH与 Tj 的关系，可看出VTH 随 Tj 的升高而减小，并具有良好的线性度。然而，氧化物和界面中的陷阱电荷是 Qox 中的一部分，由式（1）可知，陷阱捕获正电荷将导致VTH 减小，相反陷阱捕获负电荷将导致VTH 增大。故BTI会引起VTH 漂移，这使得结温的监测存在一定的挑战。

1.2 体二极管电压

在Si或SiC器 件 中 ，pn结 电 压 是 良 好的TSEP，如MOSFET的体二极管电压VSD。PiN二极管在导通状态下的正向电压VF由结电压（Vj(p+n)和Vj(nn+)与漂移区电压 VDrift之和组成，如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuCbTSZNEza7s2thKnpoRbdcolqbB5ZD5z4hvt5PoXPEicswmETUjg9BQ/640?wx_fmt=png)

VF 的温度依赖性由式（2）右侧各电压的温度系数决定。漂移区电压 VDrift 由于声子散射增加导致载流子迁移率降低而具有PTC，而结电压Vj(p+n）和Vj(nn+）由于禁带变窄导致载流子 浓 度 增 加 而 具 有 负 温 度 系 数（negative temperature coefficient，NTC）。此外，结电压与电流无关，而漂移区电压随电流的增大而增大。因此，体二极管电压主要在小电流注入时被使用，在这种情况下，VF 主要由结电压决定，可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuXWGUPSSt0jMphT3dl8nFicoXU5Y96ptCVPxPgK7I6akOttQZsKVgLog/640?wx_fmt=png)

根据式（3）可知，由于 ni 随结温的升高而增大，因此在小电流注入时 VF 随结温的升高而减小。SiC MOSFET的体二极管的特点之一是需要负栅极电压VGS来完全关闭沟道，从而产生依赖于VGS的第三象限特性。图 3 为在不同源\-漏极电流（ISD）下获得的SiC MOSFET ISD与VGS 的关系。从图 3 可清楚地观察到，一方面，当ISD不变时，ISD随负VGS的增大先增大后保持不变。当VGS\= 0 时，在反向电流传导期间，由于存在体效应，一部分电流会在沟道中传导，因此获得的 VSD 低于真实值。随着负VGS的逐渐增大，更多的电流流过体二极管，于是VSD 增大；另一方面，当ISD 增大时，pin 二极管的电流密度和沟道电流密度均增大，使 VSD \- VGS 曲线整体向右上方移动，进而电流增大导致体效应增强，关闭沟道所需的负VGS 增大。当VGS\=-4V (ISD\=50 mA) 和 VGS \= -5.4 V (ISD \= 0.5 A) 时，沟道完全关闭，此时电流仅流经体二极管。在这种情况下，测量的VSD\=VF ，对应VGS下的VSD分别约为1.4V 和 2.3V。值得注意的是，与Si相比，SiC具有更宽的禁带，故体效应在SiC MOSFET中比在Si MOSFET中更明显。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcud5sNWakDHBLkbXFqZG7pxjnHIvs0gzXicfZByvjaljJlvQc02yzbib2w/640?wx_fmt=png)

图4为SiC MOSFETVSD与VGS的关系。在VGS\=0V（体效应明显）和VGS \=-4V（无体效应）下获取VSD 。 VSD随结温的升高而减小，具有 NTC且在不同的VGS下校准的温度灵敏度分别为\-2.15 mV/℃(VGS\=-4 V)和\-1.77mV/℃(VGS\=0V) 。选用ISD\=50mA 作为测量电流，在该电流下，SiC MOSFET由于自热引起的结温变化小于0.1℃，可忽略不计。当VGS\= 0时，沟道传导会受到由BTI引起的VTH漂移的影响，这是由于沟道电阻受VTH的严重影响，因此评估BTI 对VSD的影响非常重要。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuAa4hLMBXdJficMGgUuoX7ro0JquxSfr3FLcHPTrwDj0RDjptCZlEVqg/640?wx_fmt=png)

1.3 漏\-源极通态电阻

SiC MOSFET中漏\-源极通态电阻RDS \- ON 是器件导通时漏极和源极之间的电阻。在平面栅SiC MOSFET中，它主要由沟道电阻RCH 、JFET区电阻RJFET 、漂移区电阻RD和键合线电阻RBW 构成，其可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuxDcRXdRHuWCS1lXqaYEsj8rynwWUZ3lx2bzlCCpGgsvmtyIE5ibYXIA/640?wx_fmt=png)

在沟槽栅SiC MOSFET 中，由于不存在 JFET 区电阻，故式（4）中的第二项可消除。在SiC MOSFET 中，由于高临界电场的作用，需要更薄的漂移区来阻断高电压，RCH 可描述为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcumcjs3vqibkXBUHutmia85j7naoubbbtK4aXkVBePJYw4aofhKDKpRIKw/640?wx_fmt=png)

一方面，在VGS一定时，由于SiC MOSFET具有NTC，所以RCH 随结温的升高而减小，这意味着它具有NTC。由于声子散射的增加，RD和RJFET随结温的升高而增大，其呈现PTC。同时，RBW也具有PTC。另一方面，RDS \- ON 的温度系数也与VGS 密切相关，当VGS与VTH相近时，RCH的NTC占主导地位，随着VTH的增大，RCH的NTC作用被削减，这时RJFET 、RD和 RBW的PTC 占主导地位。因此，RDS \- ON 的温度系数取决于式（4）中占主导地位的电阻。图 5为当VGS\=18V 时在不同结温下获得的 RDS \- ON 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuu8ALZ0UicC9d51q5kvQibaicwYRzj1NmpS18zgscme3JouCy6vgJRzJhg/640?wx_fmt=png)

从图 5 可得到，当 SiC MOSFET正常开通时，RDS \- ON 具有PTC。图 6 为在不同结温下获得的RDS - ON与VGS的 关 系 。 图6中 出 现 了 零 温 度 系 数 点（zero temperature coefficient，ZTC），这意味着该点不受结温的影响，定义交点所对应的VGS 轴交点为VGS \- int ，且在ZTC 点左侧具有NTC，这是由RCH的NTC主导的结果，在ZTC点右侧具有PTC，这是由于RJFET 、RD和RBW的PTC 所主导的结果。然而，由式（5）可知，VTH 的变化对RCH将产生严重影响，因此，评估BTI对RDS \- ON 的影响变得不可忽略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuEqQYzkM2r8rlpibEPic2ZaK4h4Bm5dzChM5iacuRbXL3Skhls2Zzbxj1w/640?wx_fmt=png)

2\. BTI特性和实验设置

2.1 SiC MOSFET的BTI特性

在评估BTI 对 TSEPs 的影响之前，对栅极应力撤出后的VTH 测量做一些描述非常有必要。SiO2/SiC 界面中较高的缺陷密度以及减小的禁带偏移使得 SiC MOSFET 中的栅极电介质界面和 BTI 更加复杂。SiC MOSFET的 BTI 产生机理与Si MOSFET 中的相同，且VTH漂移与受到的应力电压大小、应力持续时间和温度密切相关。

首先需要提到的是应力撤出后 VTH 的恢复。一旦栅极偏置撤出，随着陷阱的释放，VTH 会快速恢复。其次，测量技术也对 VTH 的测量有影响。影响 VTH 测量的因素是 VGS 扫描方向、测量速度以及应力的中断和应力的再次施加。测量 VTH的扫描方向揭示了SiC MOSFET的VTH 滞后现象。当在VGS 向上扫描（从积累到反型）时测量VTH ，VTH低于在向下扫描（从反型到积累）时测量VTH 。这是由界面中的电荷陷阱引起的，并且由于SiC MOSFET 具有较高的缺陷密度，这是其特有的性质。该VTH滞后现象是可恢复的，并且不影响电路运行。这种较大的可恢复偏移不会对器件的性能有任何实质性的影响，但选择适当的负栅极电压来关断器件非常重要，因为它会影响MOSFET 的寿命。

2.2 实验设置

为了说明VTH漂移的概念和评估SiC MOSFET栅氧化层退化所引起的 BTI 对TSEPs 的影响，本文使用同一批次不同编号的 3 个平面栅 SiC MOSFET 作为被测器件（DUT）。其中器件 A 和 B 被用于实施高温栅极偏压（high\-temperature gatebias，HTGB）实验，器件 C 作为健康的器件被测试来提取健康的参数，实验测试方法如图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcujickY1qNtrlIp0MXJApDMcBKY8Id3ZwibfJrj1frTtaj868reWibicW2Bg/640?wx_fmt=png)

使用 GWINSTEK 直流电源对器件 A 和 B 的栅氧化层分别施加正栅极电应力和负栅极电应力，使用 IKA 电热板提供热应力。实验所使用的应力电压、持续时间和温度如表1所示，对于正HTGB和负HTGB而言，都对器件施加 3 个阶段高于推荐栅极驱动电压的应力，每个阶段持续60min，施加的温度为 150℃，这充分考虑了复杂工况下器件所承受的结温且满足封装的限制。当每次施加的应力撤出后，需要给予6h的时间让器件恢复。最后使用PCT\-2 在不同结温下获取每次应力后的转移特性曲线。

3\. BTI引起的阈值电压漂移对TSEPs的影响

3.1 BTI对阈值电压的影响

栅氧化层退化主要影响两种类型的电荷：氧化物陷阱电荷（Qot）和界面陷阱电荷（Qit）。BTI 引起的 VTH 漂移可表示为正氧化物陷阱电荷和负界面陷阱电荷的漂移之和。模拟栅氧化层退化机制对 VTH 漂移和沟道载流子迁移率降低的影响的经验表达式分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuGj7NppUs9ic08apZ1zGOT692AKdNkA7P0J9A2bezWDvwhX3Ckuzm1mw/640?wx_fmt=png)

式中：VTH0 和 μ0 ——阈值电压和迁移率的初始值；Not 和Nit ——压力引起的 Qot 和 Qit 的密度变化；αot 和 αit ——描述Qot 和 Qit 影响的系数。

从式中可得到，当栅氧化层承受负栅极偏压时，SiC/SiO2界面陷阱捕获空穴，这时正氧化物陷阱电荷的增加引起 VTH负向漂移，称为 NBTI，而当栅氧化层承受正栅极偏压时，SiC/SiO2界面陷阱捕获电子，这时负界面陷阱电荷的增加引起 VTH正向漂移，称为 PBTI。值得注意得是这两种电荷的积累都会降低沟道载流子迁移率，但迁移率降低的主要原因是由于界面陷阱电荷的散射。进而将式（6）分别对 Not 和 Nit 求导可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuPnTgCRuU7bXrIRTbPeH7UURiaxW2ibTIgQtsH6UszMeXAwialOqa5UGow/640?wx_fmt=png)

经过理论的推导可发现，VTH 对 Not 的导数恒为正，而 VTH对 Nit 的导数恒为负，这证明了之前分析的正确性。图8为在同一结温（Tj \= 65 ℃）和不同 BTI 类型下所获得的转移特性曲线。结果显示VTH 随NBTI 和 PBTI 应力等级的提升，对应负向漂移和正向漂移的程度越来越大，可说明 BTI 对 VTH的作用非常明显，是不可忽略的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuftRvz4Ay9Bsg2hmAKRaqol6O9lerEqfLW3OSuJL5oKSOC1lBAupdZQ/640?wx_fmt=png)

图 9 为在同一 BTI 应力和不同结温下获得的转移特性曲线，可观察到在同一 BTI 应力下，VTH 随结温的升高而减小，且同一结温下的 VTH 在 PBTI 作用下均比在 NBTI 作用下的大。考虑到结温和 BTI 耦合的影响，可能会出现两种相等的情况：1）高温下测量的 VTH 与受NBTI 作用下测量的 VTH 相等；2）低温下测量的 VTH 与受 PBTI作用下测量的 VTH 相等。因此，BTI 对 VTH 具有很大影响，而这会导致大部分的 TSEPs 受到间接的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuDUVxteNa7KM1noEAAdS3husjmCyrzmBQibCVCiafMXrPpltBunFF8v6A/640?wx_fmt=png)

3.2 BTI对体二极管电压的影响

为了评估 BTI 对 VSD 的影响，在不同结温和 ISD \= 50 mA下使用泰克（Tektronix）高精度数字万用表提取VSD 。在不同BTI 类型下的 VSD 与 Tj 的关系如图 10 所示。当 VGS\=0V 时，根据图10和式（5）可知，由于 PBTI 引起的 VTH 正向漂移，RCH增大，从而流过体二极管的电流增大，VSD相应增大。当VGS\=-4 V 时，正向漂移的影响被最小化，此时使用 VSD 作为TSEP 来估计结温的精度不受影响。在 NBTI 应力下，想要完全关闭沟道需要更高的负VGS，因为器件额定负VGS（一般为-5V）不能消除 NBTI 的影响，此时使用 VSD 作为 TSEP 来估计结温的精度将受到 NBTI 的影响。另外，NBTI 对 VSD 的影响比 PBTI 下明显。

3.3 BTI对漏\-源极通态电阻的影响

如第2节所述，在SiC MOSFET 中，RCH 对RDS\-ON有重要影响。因为 RCH 受 VTH 的影响，所以表征 BTI 对 SiC MOSFET输出特性的影响很重要。图 11 为使用 PCT\-2 获得的在不同BTI 类型和不同 VGS 下的 SiC MOSFET 输出特性曲线，可观察到 SiC MOSFET 的输出特性受 BTI 的影响。由图 11a 可看到，由于受到 NBTI 的影响，输出特性向左移动，这说明 RDS \- ON减小。当 VGS\= 18V 时，RDS\- ON由 28mΩ（健康）减小到25mΩ（NBTI），下降率为10.4%；当VGS\=14V时，RDS\- ON 由 37.8 mΩ（健康）减小到 31.9 mΩ（NBTI），下降率为 15.6%。另外，由于在低VGS下RCH的作用更明显，从而在 VGS\=14V 的RDS \- ON 比在 VGS \= 18 V 下的大。从图 11b 可观察到，由于受到 PBTI 的影响输出特性向右移动，这与受 NBTI 影响的结果相反，RDS - ON 增大。当 VGS \=18V 时，RDS\-ON由28mΩ（健康）增加到31.2mΩ（PBTI），增长率为11.4%；当VGS \=14V时，RDS\-ON由37.8mΩ（健康）增加到49mΩ（PBTI），增长率为29.6%。与之相同的是，在低栅VGS下的RDS \- ON比在高VGS下的大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuhTeSnxgIVoKIl9r6CSong15VQCQicxZKzBWFicGGqfsxY5ibtcNzwqXeA/640?wx_fmt=png)

图 12 为在不同结温和不同 BTI 类型下获得的RDS \- ON和VGS的关系。从图 12可看出，ZTC点受 NBTI 和 PBTI 的影响分别向左和向右移动，且与图 6 相比，在NBTI下VGS \- int 减小20%，而在PBTI 下VGS \- int 增大 20%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcunpuiaqahiaib9g8plAha9cohdxVibIja42MaQ4V7gSEcbRiajZLxS7QpS6A/640?wx_fmt=png)

图 13 为在固定结温和不同 BTI 类型下获得的RDS\-ON与VGS 的关系。显然，在 NBTI 和PBTI 下的结果呈相反的趋势。在 NBTI 下，由于VTH 减小，导致 c 减小，从而RDS\-ON减小；而在PBTI下，由于VTH增大，导致RCH 变大，从而RDS\-ON增大。

上述分析足以说明 RDS \- ON 受 BTI 的影响。 RDS \- ON 经常在功率循环测试中被用来监测功率器件封装相关的退化，如果未考虑清楚 BTI 对 RDS \- ON 的影响，RDS \- ON 的变化会对评估结果产生相当大的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuibXkYYrvgk88uJVWVUnxQwZOHrJH2703S3aBA8ib4PG11oR1MGkVJwyQ/640?wx_fmt=png)

3.4 基于VSD监测SiC MOSFET阈值电压

通过在第 2 节分析电参数的温度依赖性和在第 3 节分析 BTI 对 TSEPs 的影响可发现，VSD 具有良好的温度特性且受 BTI 的影响明显。从图 10 可清晰地观察到在不同的应力下 SiC MOSFET 体二极管电压与结温有近似线性的关系，并且在小电流下（50 mA）体二极管电压非易于获取。因此，本文提出在小电流注入时使用体效应下（VGS \= 0 V）的 VSD 监测SiC MOSFET 阈值电压。图 14 为在不同 BTI 类型和不同结温下根据本文实验所获取的数据绘制的 VSD 与 VTH 的关系图。从图 14 可清晰地观察到，以健康的数据点为参考，由于 VSD 和 VTH 都受 BTI 和结温的耦合影响，随着 NBTI 应力的增加和结温的升高，与之相关的数据点向左下角移动，相反随着 PBTI 应力的增加和结温的降低，与之相关的数据点向右上角移动。在不同结温下，综合健康和不同 BTI 应力下的数据点可得到 4 条具有相同斜率（k\=0.15）、不同截距的直线。将其截距与结温拟合可得到 VSD 关于 VTH 和 Tj 的表达式如式（10），进而整理式（10）可得到监测 VTH 的计算公式如式（11）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcurbzuCZuQYRc8rpzZh5f6dYjoNbQibjlCQvLMZxp8ruz9mjyibgsap0zw/640?wx_fmt=png)

需要注意的是，传统的基于TSEPs 估算结温的方法会由于栅氧化层退化而产生一定的误差。因此，光纤测量可作为一种替代方法来精确估计结温。这意味着在实际工作条件下，只要得到Tj 和VSD 就可计算出VTH ，为监测SiC MOSFET阈值电压提供了一种新方法。

4. 结 论

SiC MOSFET 的 BTI 现 象 会 严 重 影 响 其 可 靠 性 。 在SiC MOSFET中，由于快速且可恢复的VTH 漂移与永久性VTH漂 移 两 者 的 存 在 ，使 得 BTI 现 象 的 研 究 与 分 析 复 杂化。根据理论分析和实验结果可看出，栅极偏压应力导致的VTH 漂移已经对SiC MOSFET中的TSEPs 产生了不可忽略的影响，若不详细分析这种影响，将对由SiC MOSFET构成的逆变器造成极大的可靠性威胁，影响逆变器的正常工作状态。

本文使用加速栅极应力测试方法，捕获了永久性的由于BTI 引起的VTH 漂移，分析并评估了NBTI 和PBTI 对SiC MOSFET中部分 TSEPs 的影响。结果表明，VTH 、VSD 和 RDS \- ON的温度敏感性均受 BTI 的限制。如果不考虑 BTI 的耦合效应，基于 TSEPs 的 SiC MOSFET 状态监测的准确性将大大降低。BTI 引起的 VTH 漂移是降低 TSEPs 监测精度的关键因素。因此，本文在小电流注入时利用在不同结温下和体效应下的体二极管电压监测阈值电压的方法，为提高逆变器的可靠性提供了支持。

**说明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)