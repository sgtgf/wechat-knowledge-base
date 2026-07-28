# 西安理工大学：SiC MOSFET 短路保护技术综述


> 原文地址: [https://mp.weixin.qq.com/s/7CHxEBYw8Hm-gpONmET7cg](https://mp.weixin.qq.com/s/7CHxEBYw8Hm-gpONmET7cg)

**文章来源：**

**作者：**文阳 1 杨媛 1 宁红英 1 张瑜 2 高勇 1（1\. 西安理工大学自动化与信息工程学院，2\. 西安思源学院工学院）

**摘要：**随着电力电子技术的飞速发展，SiC MOSFET 以优异的材料特性在高频、高压、高温电力电子应用中展现了显著的优势。然而，SiC MOSFET 较高的开关速度与较弱的短路承受能力对短路保护技术带来了新的挑战。该文首先介绍 SiC MOSFET 不同短路类型以及短路测试方法；其次对 SiC MOSFET 短路失效模式及失效机理进行分析；然后详细梳理现有 SiC MOSFET 短路检测与短路关断技术的原理与优缺点，讨论现有 SiC MOSFET 短路保护技术在应用中存在的问题与挑战；最后对 SiC MOSFET 短路保护技术的发展趋势进行展望。

**关键词：**SiC MOSFET 短路测试短路失效短路保护

**0引言**

经过半个世纪的发展，传统硅（Silicon, Si）功率半导体器件性能已达到极限，难以满足新能源装备高效、高功率密度等新的发展需求\[1-4\]。碳化硅（Silicon Carbide, SiC）金属\-氧化物半导体场效应晶体管（Metal-Oxide-Semiconductor Field-Effect Transistor,MOSFET）具有低开关损耗、高开关频率、高耐压值以及优异的温度特性，在大功率电力电子应用中对散热器的性能要求大大降低，使得整个电力电子装置的转换效率、功率密度及稳定性大幅提升\[5-6\]。

然而，短路故障是导致 SiC MOSFET 失效的重要原因之一，严重阻碍其应用\[4-6\]。尽管 SiC MOSFET具有较好的导热性能，但与 Si 器件和 SiC 场效应晶体管的短路性能相比，SiC MOSFET 的短路保护在以下几个方面更具挑战性。

首先，在相同额定电流容量下，SiC MOSFET芯片面积小、电流密度高，这就导致 SiC MOSFET短路承受能力较弱\[7\]。在 600V 母线电压下对 1 200V/33A SiC MOSFET 进行硬短路测试，被测器件在约13μs 后失效损坏，然而在短路发生约 5μs 时被测器件栅\-源极泄漏电流突然增大，这表明栅\-源极已经退化\[7-9\]。研究发现，在短路工况下，SiC MOSFET通道迁移率的正温度系数高达 600K，这就导致 SiC MOSFET 的短路承受能力和鲁棒性明显低于 SiC结型场效应晶体管\[10-11\]。

其次，在短路工况下，SiC MOSFET 较弱的界面质量会带来栅极氧化层可靠性问题，对 SiC MOSFET 的稳定工作产生负面影响\[12-13\]。随着制造商工艺的改进，该问题得到了有效缓解，但是短路发生时，器件结温迅速升高到 125℃以上，Fowler Nordheim 沟道电流进入电介质导致栅极氧化层出现明显退化\[14-16\]；由于 SiC MOSFET 需要更高的正向栅极偏压，栅电场的增高会进一步加剧短路时栅极氧化层退化问题\[17-18\]。

此外，为了确保 SiC MOSFET 可靠运行在安全工作区内，其较弱的短路承受能力就要求短路保护电路具有更快的响应速度。然而，与 Si 器件相比，SiC MOSFET 的结电容更小、开关速度更高。SiC MOSFET 独特的正温度系数跨导导致其开通时的dI/dt 和 dV/dt 随着结温的升高均增大\[19\]。在较高的dI/dt 和 dV/dt 条件下，SiC MOSFET 短路保护电路的快速响应与抗噪声能力难以兼顾。

上述研究表明，SiC MOSFET 短路保护难度大，短路时 SiC MOSFET 芯片更易受损。为了解决这一问题，国内外学者在 SiC MOSFET 短路保护方面做了很多工作，主要涵盖 SiC MOSFET 短路测试方法、失效模式与失效机理、短路检测方法以及关断策略等。因此，本文旨在全面介绍 SiC MOSFET 短路保护技术，加深对短路故障的理解，为科研与技术人员在高频、高效率电力电子场合更好地使用 SiC MOSFET 器件提供借鉴。

**1 短路故障与测试方法**

**1.1短路故障类型**

按短路回路电感值的大小和短路位置可将短路故障分为一类短路和二类短路，短路的类型与特征见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIostoDxZIzpyQExLpG4zNyrnEic7tNV26xYsrlDJ3qR3sMJF9gGBWiamw/640?wx_fmt=png&from=appmsg)

由于短路回路电感较小，一类短路故障电流上升快，对功率器件危害大，保护难度较高。按照短路发生时刻，一类短路又可以分为硬开关故障（Hard Switching Fault, HSF）与负载故障（Fault Under Load,FUL）两类。图 1 所示为 SiC MOSFET 短路故障典型波形。可以看出，HSF 发生时刻在 SiC MOSFET开通瞬间，如图 1a 所示。当 HSF 发生时，漏极电流 ID 快速上升到最大值，然后回落至稳定的短路电流值。由于回路电感极小，漏\-源极电压 VDS 小幅下降后又稳定在母线电压；FUL 发生在 SiC MOSFET完全导通之后，如图 1b 所示。当 FUL 发生时，短路电流从负载电流迅速上升，SiC MOSFET 两端电压也随之上升至母线电压。不论是 HSF 还是 FUL 发生时，SiC MOSFET 都承受着巨大的短路能量。由于 SiC MOSFET 芯片面积较小、电流密度较大，巨大的能量可能会在短时间内烧毁 SiC MOSFET\[20\]。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIicft5YsL9QWQvEOECopSuXTkfD7cePPRCgE9m7ncaEfZ3Pc6UIicY60g/640?wx_fmt=png&from=appmsg)

**1.2短路测试方法**

短路测试是研究功率器件短路特性、测试短路保护电路性能的重要方法。目前常见的 SiC MOSFET短路测试方法有两种，各自优缺点和适用场合见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkItsAa8KocfpgJKyicMogYW0jVDIFtPb6H2sadibbEuBrZXygocDbjD4OA/640?wx_fmt=png&from=appmsg)

（1）基于双脉冲测试的短路测试方法。该方法使用“粗短铜排”代替双脉冲测试电路中的负载电感来模拟短路，如图 2a 所示。当脉冲发生器向驱动器 1 发送高电平信号时，打开上桥臂 SiC MOSFET，再向驱动器 2 发送高电平信号，就可以实现 HSF；当脉冲发生器向驱动器 2 发送一个信号使待测 SiC MOSFET 正常开启时，再向短路控制开关 S1 发送闭合信号使故障电感 LFault 接入功率回路，就可以实现FUL。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIYXa2Dqa1bFdMttACrMKrwM9l4O5JI5mDX6I4S9eVmVYrvfiaNVA0MicQ/640?wx_fmt=png&from=appmsg)

（2）基于非线性元件的无损短路测试方法。不同的 SiC MOSFET 短路测试方法如图 2 所示。该方法是在被测 SiC MOSFET 的短路回路中串入非线性元件\[21-22\]，如图 2b 所示。非线性元件在额定电流时内阻较低，与 SiC MOSFET 相比饱和电流更小。当脉冲发生器通过驱动器 1 开启该非线性元件时，再通过驱动器 2 开启待测器件就可以模拟 HSF。当短路电流达到该元件的饱和电流时，短路电流就会被限制。当短路电流持续增大时，该元件就会“熔断”。

基于双脉冲测试的短路测试方法可以真实地模拟实际短路工况，但开关 S1 的引入不仅使成本和控制逻辑复杂性大幅增加，额外的寄生电感也使得对寄生电感更为敏感的 SiC MOSFET 短路测试风险增加。此外，由于短路回路阻抗小，短路电流上升速率快，很容易对 SiC MOSFET 造成损坏，所以该方法主要用于 SiC MOSFET 短路保护电路性能测试。

基于非线性元件的无损短路测试方法可以很好地保护被测 SiC MOSFET，避免严重损坏。为观测SiC MOSFET 短路现象、研究失效机理以及芯片工艺改进保留有效的实验样本，但是非线性元件的引入使该测试不能真实地模拟短路故障。此外，非线性元件的选型以及成本也不容忽视。

**2 SiC MOSFET 短路失效模式与机理**

目前，SiC MOSFET 的短路失效模式主要有栅\-源极失效和热逃逸失效\[23-33\]，两者的失效条件、原因及特征详见表 3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIjLCg1N3o2VuTx6awI6SxTXfwJYXDxzAqOCjMEicKw3OnrP8kicZ0AMFA/640?wx_fmt=png&from=appmsg)

**2.1栅\-源极失效**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkI2fTuIx4aJ84Ef5DmMsbo7DD7BIJyXtxZrXz4hnB4yw58HgYxNKlNpg/640?wx_fmt=png&from=appmsg)

图 3 为 SiC MOSFET（DF23MR12W1M1）在母线电压 Vdc=400V、栅\-源极电压 Vgs=20V 时的短路测试波形。在短路持续 16μs 后关断 SiC MOSFET，关断后的 SiC MOSFET 出现了栅\-源极失效现象。在栅\-源极失效前，随着短路时间增加，栅\-源极电压明显下降，短路电流出现拖尾。在栅\-源极失效后，栅\-源极短路但漏\-源极完好，观察 SiC MOSFET 芯片表面上没有明显可见损伤，但是在电子显微镜下，可以观察到栅极多晶硅和源极铝之间的栅极层间电介质中出现了裂纹。利用能量色散谱仪对裂纹处元素进行分析，可以观测到裂纹上方的源区大量铝迁移到了裂纹中\[23\]，SiC MOSFET 栅\-源极失效后的芯片如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIhqucqnqrm1Dibw7agqOzqibjEXNxba3qSorZmrl9dPC3AkFQ8cGHe4Ew/640?wx_fmt=png&from=appmsg)

研究表明，较大的短路电流导致器件结温迅速升高，而 SiC MOSFET 栅极氧化层较薄且内部材料的热膨胀系数不一致导致栅极氧化层在高温时出现裂纹\[24-26\]。当器件结温超过源极金属铝的熔点时，被高温熔化的源极铝金属将散入裂纹中导致 SiC MOSFET 栅极与源极短路，使其呈现低阻特性\[27-28\]。因此，SiC MOSFET 栅\-源极失效是高温和热应力的共同作用结果。由于 Si MOSFET 热逃逸温度阈值较低，栅\-源极失效现象只会出现在高温半导体器件中，如 SiC、GaN 器件。

**2.2 热逃逸失效**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIiaj5ichyQibtNO3PgCkAibMjx5pCN0q7UnCJX7LicL7mqOmHnEJjYxmFJnQ/640?wx_fmt=png&from=appmsg)

热逃逸又称热失控，是器件内部温度升高到一定程度后引起器件劣化使温度进一步升高，最终导致某一种破坏性的结果\[29\]。图5为SiC MOSFET（DF23MR12W1M1）在母线电压 800V、栅\-源极电压 20V 时的短路测试波形。可以看到，在短路出现不到 5μs 时发生了热逃逸失效，短路电流失去控制持续上升，直至 SiC MOSFET 烧毁。热逃逸发生前，SiC MOSFET 栅\-源极电压出现了下降，说明栅\-源极阻抗已经下降。

SiC MOSFET 热逃逸失效与短路关断过程中产生的漏极泄漏电流有很大关系。当短路时间达到一定程度时，SiC MOSFET 就会出现漏极泄漏电流，且随着短路时间的增加，泄漏电流愈加明显\[30-31\]。当短路时间小于 SiC MOSFET 短路耐受时间时，即使在关断时出现泄漏电流，泄露电流也会逐渐降低，SiC MOSFET 不会发生热逃逸，但当短路时间大于等于短路耐受时间时，就会触发热逃逸。研究表明，SiC MOSFET 热逃逸的原因是短路高温和泄漏电流激活了内部寄生双极结型晶体管致使漏\-源极电流失控\[32-34\]。

通过介绍两种失效模式的现象和成因不难看出，短路能量较低时可能会导致 SiC MOSFET 栅\-源极失效，而短路能量较高时可能会使 SiC MOSFET发生热逃逸失效。SiC MOSFET 栅\-源极失效时不一定会发生热逃逸失效，但是热逃逸失效发生时必定伴随有栅\-源极失效。

**3  SiC MOSFET 短路保护技术**

SiC MOSFET 较弱的短路承受能力需要短路保护电路快速动作，但是较高的开关速度、开关振荡以及关断过电压都给 SiC MOSFET 短路保护带来了巨大挑战\[35\]。为了确保 SiC MOSFET安全可靠工作，快速可靠的短路检测与短路关断技术成为国内外学者研究的热点问题。

**3.1短路检测技术**

目前，针对 SiC MOSFET 的短路检测技术主要有退饱和检测、寄生电感电压检测、电流传感器法、分流器检测、镜像电流检测和栅极电荷检测六种，SiC MOSFET 短路检测方法见表 4。下面将对上述方法的工作原理、优势及存在的问题进行详细介绍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIdOIpUynlAkQNpz2M7zoeLyooqPibbNUiaq83lCVfNxJDN4RwogEUwDqQ/640?wx_fmt=png&from=appmsg)

1）退饱和检测

退饱和检测原理简单、成本低，广泛应用于绝缘栅双极型晶体管（Insulated Gate Bipolar Transistor,IGBT）短路保护中，但在 SiC MOSFET 的短路保护中采用该方法存在巨大挑战\[7, 36-41\]，二极管式退饱和检测如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkI0CqxvnA9LEicib7yqFE3MVZqzRrgU5D3RmAlA9oyAbP2icdl9ibKuHJMcA/640?wx_fmt=png&from=appmsg)

图 6a 为二极管式退饱和检测电路。在 SiC MOSFET 导通时，当 A 点电压 VA 上升超过阈值 Vth1时，比较器翻转发出故障信号关断器件。在 SiC MOSFET 关断时，晶体管 VT1 导通将 A 点电压下拉至低电平，检测电路被屏蔽。该检测电路工作原理如图 6b 所示，PWM 为高时，SiC MOSFET 开始导通，在完全导通前，由于 SiC MOSFET 漏极电压值较高，二极管（VDS1, …）反向截止，VCC 通过 Rblk对 Cblk 充电，A 点电压升高。在 SiC MOSFET 完全导通之前，需要预留足够的盲区时间 Tbl 防止检测电路误触发。当 SiC MOSFET 发生短路退出“饱和”状态时，VA 将上升超过阈值 Vth1 导致比较器翻转。

**在 SiC MOSFET 完全开通后，A 点电压 VA 的大小可以表示为：**

**![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkID2luEeaB2s9LwjJKZXuZbFY3JTqNoq3hRest4rof8HJqRunibhQWjyA/640?wx_fmt=png&from=appmsg)**

**式中，VD 为二极管正向导通压降。**

**可以看出，A 点电位由 SiC MOSFET 导通压降****以及二极管的压降决定。然而，在中大功率 SiC** **MOSFET 应用中，SiC MOSFET 导通压降较高，然****而较高的母线电压就需要多个二极管串联来提高反****向击穿耐压，这就导致 A 点电位升高很可能触及阈****值 Vth1，进而引起检测电路误触发。此外，SiC MOSFET****开通瞬间漏\-源极电压振荡也增加了检测电路误触****发的风险。**

**此外，业内公认 IGBT 具有约 10μs 的短路承受****时间，但对于 SiC MOSFET 的短路承受时间，各大****功率半导体器件厂商都没有形成共识。英飞凌对外****宣称其 Cool SiC MOSFET 具有 3μs 的短路承受时****间\[36\]，基本半导体的 SiC MOSFET 短路承受时间则****为 6μs\[37\]，CREE 和 Rohm 公司的 SiC MOSFET 短****路承受时间约为 2μs\[7, 38\]。然而，商用 SiC MOSFET****驱动器检测盲区几乎都在μs 级别，例如，CREE 公****司的 PT62SCMD17 检测盲区时间为 1μs\[32\]，虽然该****数值在器件厂商所提供的短路承受时间之内，但相****比于 SiC MOSFET 的短路承受时间，μs 级别的检测****盲区使得退饱和检测的响应速度显的杯水车薪。研****究表明，SiC MOSFET 即使承受 1μs 以内的短路应****力，其电学特性也会发生退化\[39-40\]，承受的短路时****间越长、短路次数越多，SiC MOSFET 的电参数退****化现象越明显\[41-42\]。因此，当 SiC MOSFET 发生短****路时，应该在第一时间进行短路保护动作，检测盲****区的存在不仅会造成 SiC MOSFET 短路时的电参数****退化进而影响开关性能，还会大大增加 SiC MOSFET****短路失效的风险。**

**2）寄生电感电压检测**

**SiC MOSFET 模块功率源极和辅助源极之间存****在寄生电感，电流的变化会在寄生电感上感应出一****个电压值\[43-44\]。由于短路时 SiC MOSFET 电流变化****率 dID/dt 较大，因此可以通过检测感应电压值来检****测短路故障，最典型的方法就是 dI/dt 检测，如图****7a 所示。图 7b 为 dI/dt 检测技术的工作原理，在正****常开通过程中，快速上升的电流在 LSS 上感应出一****个负向电压 VSS，该电压值与电流变化率成正比。****当发生短路故障时，ID 迅速上升，负向 VSS 触发保****护阈值 Vth3，短路器件被关断。dI/dt 检测时间短、****易于集成在驱动芯片中，但对寄生电感引起的噪声****特别敏感。此外，由于 SiC MOSFET 开通时较高的****dID/dt 会感应出较大的负向 VSS，也可能触发阈值****Vth3 导致保护电路误触发。**

**![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIwHg9CernVq1EYapGk8cjlUFDDpzSNCzwcaLbiaqj0dTf9fAPLNiaZmEQ/640?wx_fmt=png&from=appmsg)**

**鉴于此，华中科技大学 Wang Zhiqiang 等提出****了基于电流评估的短路检测电路，将寄生电感上感****应的电压利用 RC 积分电路得到对应电流值来实现****短路检测\[45\]，电流评估短路保护如图 8 所示，SiC** **MOSFET 漏极电流 ID 与输出电压 VO 的关系为：**

**![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIXehnqqJktvlPTxsdxtq5X9hThhyS4ibpAfW4vnPscLoO4Q38TEhCF8g/640?wx_fmt=png&from=appmsg)**

**可以看出，输出电压 VO 随着 ID 的增大而增加，****当 VO 达到阈值 Vth 时触发比较器。将 SiC MOSFET****寄生电感上的感应电压转换成电流进行短路保护，****可以有效地避免开通电流上升斜率过大引起的误触****发问题，但也存在一定缺陷。图 8b 中，t1 时刻，SiC** **MOSFET 正常开通，−VO 随 ID 增大而呈比例上升，****RC 积分器可以正常“记录”电流上升。但 t2 时刻****后，ID 增大上升至负载电流水平，dID/dt 趋近于零，****Cf 通过 LSS 和 Rf 放电，−VO 逐渐减小。到 t3 时刻，****VO 趋近于零。当 t4 时刻出现短路故障时，短路电流****将在负载电流的基础上快速上升，但−VO 却是从零****上升，由于 HSF 和 FUL 使用的是同一阈值，因此****FUL 电流峰值将远大于 HSF。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIibUmbC3yGHfw4iasr6nSPibwFPQN81Ruqp8qiazuNmX7CS9mIBjOgGGTQQ/640?wx_fmt=png&from=appmsg)

**为此，美国弗吉尼亚理工大学 Wang Jun 团队提****出了两级 RC 型短路保护电路对 HSF 和 FUL 进行单****独检测\[46\]，改进的电流评估短路保护电路如图 9 所****示。通过加入电感 Lo 来减缓 FUL 时 Co 放电现象。****电感 Lo 越大、Co 放电越慢，但当 FUL 发生时刻大****于一定值时，Co 电位下降至零。此外，较大的电感****值也会减缓 Co 充电过程，导致 FUL 保护响应时间****变慢。为此，河北工业大学 Xin Zhen****等则进一步对****上述方案进行了改进，如图****9b 所示\[47\]****。利用二极****管 VDblo 的单向导电性来防止电容 Cs 放电，很好地****解决了 FUL 发生时刻的不确定性所导致的 Cs 放电****现象，但是电阻 Rblo 过大会同样导致 HSF 和 FUL****保护响应时间变慢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIuia4HzicUrIwNzICkB8bQThTOTbBKLbxdssVBlvFxsn5U899uCPFzTPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkINbLSDSsNY0Fvk1nn4CnWsoZeP65V5O9cHqVjS91DwOKjHtf1qSTmfQ/640?wx_fmt=png&from=appmsg)

**3）电流传感器**

**电流传感器广泛应用在电力设备电流测量中，****如霍尔器件、罗氏线圈等，其原理简单且可靠性高，****功率回路和测量回路具备电气隔离，但带宽较低、****体积较大，不适用于高频、高功率密度的 SiC MOSFET****短路保护应用。为此，Wang Jun 等设计了一种适用于****SiC MOSFET 模块短路保护的 PCB 型罗氏线圈\[48-50\]，****如图 10 所示。不仅方便安装，高达 200MHz 的带宽****可以对 SiC MOSFET 模块漏极电流进行准确的采****集，为 SiC MOSFET 模块短路保护提供可靠保障。****然而，为了提高测量宽带获得更加精确的漏极电流，****在 PCB 型罗氏线圈设计中需要增加线圈匝数。但是****由于 SiC MOSFET 应用在高频开关工况，增加 PCB****线圈匝数会严重影响其抗扰动性能，可能导致短路****保护电路误触发。此外，PCB 型罗氏线圈的信号还****原电路实现较为复杂，严重阻碍了该方法的应用。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIqribDokGNicIZGUuLAq6HOjibzia9VwTJgic6EZRx2fQHv00O8d0PEgC2fg/640?wx_fmt=png&from=appmsg)

**4）分流器检测**

**分流器检测通常在功率回路串入电阻、同轴分****流器等线性元件来进行短路保护 \[43\] 。 在 SiC** **MOSFET 的短路保护中通常采用精度更高、响应速****度更快且可靠性较高的同轴分流器。但是随着功率****回路电流的增加，同轴分流器所带来的功耗以及高****昂的成本不容忽视。为了解决该缺陷，北卡罗来纳****州立大学 B. J. Baliga 教授团队将 Si MOSFET 串入****SiC MOSFET 回路作为“分流器”\[21\]，基于 Si** **MOSFET 非线性特性的短路保护电路如图 11 所示，****利用 Si MOSFET 漏极电压和漏极电流成正比的特****性，将漏极电压作为 SiC MOSFET 短路检测的依据。****此外，通过给 Si MOSFET 栅\-源极施加不同的偏置****电压，可以灵活调整其饱和电流来限制短路电流，****防止 SiC MOSFET 短路损坏，但是 Si MOSFET 选****型十分关键，在大电流应用场合，较高的损耗与成****本使得该方法应用受到限制。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIQ2tKW1iacPwUwftsQvwmY0eic0vV6Ck0icDNxicEdN42dkNWM2GRSOA5zQ/640?wx_fmt=png&from=appmsg)

**5）栅极电压检测**

**由于 HSF 发生时，SiC MOSFET 的栅极电荷值****QG 远小于正常开通过程中栅极电荷值，导致 HSF****发生时栅极电压 VGS 大于正常开通过程\[50\]，栅极电****压检测原理如图 12 所示，因此通过检测 SiC MOSFET****开通过程中栅极电压可以间接检测 HSF\[43, 51\]。该方****法优点是无检测盲区。然而，SiC MOSFET 的密勒****电容较小，HSF 发生时栅极电压特征差异不明显，****采用该方法容易造成保护电路误触发。其次，FUL****时 SiC MOSFET 栅极电压已经为最大正向电压，因****此该方法不能对 FUL 进行检测。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIRQ3cdktI5yU42m1jwrnpoWia90ehAWtDqc2gujVdMuoGhgLGYcF4NrA/640?wx_fmt=png&from=appmsg)

**3.2短路关断策略**

**当检测电路检测到短路故障后应快速关断 SiC** **MOSFET。然而，快速的关断势必会引起较高的关****断过电压，导致 SiC MOSFET 因过电压而损坏。防****止关断过电压的常用方法就是采用软关断技术\[52-61\]，****常见短路软关断技术有两种：**

**（1）大电阻关断。大电阻关断是在检测到短路****后，利用大阻值栅电阻来减缓关断电流下降速率从****而实现关断过电压的抑制\[53-57\]。然而，大电阻关断****在抑制关断过电压的同时也致使关断延迟时间增****大，导致 SiC MOSFET 不能及时关断。为此，文献****\[58-59\]提出基于多级栅电阻的软关断策略，在关断****过程中采用不同栅极电阻关断 SiC MOSFET 短路电****流，从而兼顾了 SiC MOSFET 短路关断过电压与关****断延迟时间，但大电阻关断可能导致 SiC MOSFET****因关断损耗过大而发生失效。**

**（2）降栅压关断。降栅压关断是在检测到短路****后，先缓慢降低栅极电压，使 SiC MOSFET 维持导****通状态。在较低栅极电压下，SiC MOSFET 漏极电****流会被限制在较低水平，经过一定延迟后，再采用****负压关断短路电流\[60-61\]。该方法通过缓降栅压抑制****短路电流，从而降低短路关断过电压，但是该方法****需要多种栅极电压，电路结构实现复杂。**

**4结论**

**通过上述分析可知，SiC MOSFET 高速开关特****性以及现有工艺技术导致其短路承受能力较弱，而****现有短路保护技术普遍存在响应速度慢、易误触发、****电路复杂以及成本高等缺点，这些问题严重威胁****SiC MOSFET 的安全运行，阻碍 SiC MOSFET 的广****泛应用。因此，未来的挑战与研究课题主要涉及以****下几个方面：**

**1）SiC MOSFET 短路承受能力提升。栅极可靠****性问题严重制约着 SiC MOSFET 为代表的宽禁带半****导体器件短路承受能力。随着科学技术的发展，新****的器件结构、新的制造工艺和新兴材料的研发将是****提升其栅极可靠性、改善短路承受能力的关键所在。**

**2）SiC MOSFET 的短路检测技术。相比于****IGBT，SiC MOSFET 开关速度更快，短路承受能力****较弱，电磁干扰更严重。因此，现有短路检测方法****已不能满足 SiC MOSFET 应用中短路检测的技术需****求，研发适用于 SiC MOSFET 的快速、可靠短路检****测技术将是未来研究方向之一。**

**3）SiC MOSFET 短路关断策略。SiC MOSFET****短路承受能力弱，短路时需要快速关断短路电流，****而较快的电流变化很可能导致 SiC MOSFET 因过电****压击穿而损坏。传统短路软关断策略不能权衡关断****损耗和关断过电压之间关系，很可能造成SiC MOSFET****在软关断过程中发生热逃逸或栅极失效。因此，权****衡关断损耗和过电压的 SiC MOSFET 短路关断策略****也将是未来研究课题之一。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)