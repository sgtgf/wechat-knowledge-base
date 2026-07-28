# 不同雪崩冲击模式下SiC MOSFET的失效机理


> 原文地址: [https://mp.weixin.qq.com/s/WgecCAtx5zErrCK6C2\_JvA](https://mp.weixin.qq.com/s/WgecCAtx5zErrCK6C2_JvA)

**文章来源：**中国电机工程学报

**作者：**李辉, 钟懿, 王少刚, 于仁泽, 陈显平, 姚然, 王晓, 龙海洋(输配电装备及系统安全与新技术国家重点实验室，光电技术及系统教育部重点实验室(重庆大学)，重庆市 沙坪坝区 400044)

**摘要：**在高开关速度di/dt和寄生电感的耦合下,SiC MOSFET器件极易进入雪崩工作模式。针对现有单一实验失效分析难以揭示不同雪崩冲击模式可能引起不同失效模式的问题,提出在单次和重复雪崩冲击下SiC MOSFET器件失效机理的实验与仿真研究。首先,搭建SiC MOSFET非钳位电感(unclamped inductive switching,UIS)雪崩实验平台及元胞级仿真模型。其次,基于单次脉冲雪崩冲击实验建立SiC MOSFET对应失效模型,获取单次脉冲下失效演化中元胞电热分布规律。最后,基于重复雪崩冲击失效实验,建立SiC MOSFET对应失效演化模型,仿真性能退化特征参数,获取重复雪崩冲击下失效演化过程的电场分布规律。实验和仿真表明,单次脉冲雪崩冲击下寄生BJT闩锁造成SiC MOSFET器件失效;而氧化层捕获空穴形成氧化层固定电荷会导致器件后期阈值电压降低,引起重复雪崩冲击下器件失效。

**关键词：**SiC MOSFET， 单次脉冲雪崩冲击 ，重复脉冲雪崩冲击 ，失效模式，失效机理

**0 .引言**

SiC MOSFET 电力电子器件具有高温、高频、高压的工作能力，可为高效、高功率密度、高可靠变流器设计提供技术支撑。然而，SiC MOSFET具有很高的开关速度，在器件开通和关断时，由急剧变化的电流在负载电感或寄生电感上感应出的高压将器件保持在雪崩击穿状态，器件将完全耗散存储在电感中的能量，使器件的瞬态结温高达1000℃，进而影响器件可靠性。雪崩冲击通常可分为单次脉冲和重复脉冲 2 种模式，然而这 2 种模式导致 SiC MOSFET 器件性能退化和失效机理可能不同。因此，研究不同雪崩冲击模式下 SiC MOSFET 器件的失效机理，对提高器件设计和运行可靠性具有重要意义。

单次脉冲雪崩失效通常表示电力电子器件在承受超过最大雪崩耐受能力后导致的器件失效，其雪崩耐受能力是评估器件可靠性的重要指标；而重复雪崩失效表示器件在正常电流工况下承受的雪崩能量较低，不会导致器件一次性失效，但经过大量雪崩冲击后器件依然会失效，且在失效过程中器件的性能参数发生退化，影响系统工作可靠性。虽然已有一些文献对 SiC MOSFET 雪崩冲击进行了研究，但是主要侧重在通过建立非钳位电感实验(unclamped inductive switching，UIS)进行测试对比研究，且对其不同雪崩冲击模式下失效机理及失效演化过程分析较少。

在单次冲击失效研究方面，文献\[13\]通过对 Si MOSFET 和 SiC MOSFET 的对比实验发现，SiC 在负载电感较低时具有更高的雪崩耐受能力；文献\[14\]对不同电压等级的 SiC MOSFET 模块进行了单次脉冲雪崩耐受能力实验研究，发现高压 SiC 器件的雪崩耐受能力更低；文献\[15\]指出并联器件间电热参数不均将严重影响器件发生雪崩失效的先后顺序；文献\[8\]研究发现，负载电感越大，器件的雪崩耐受能量越低，且随着环境温度升高，SiC MOSFET雪崩耐受能力下降。上述文献侧重实验对比分析，未对 SiC MOSFET 的单次脉冲雪崩冲击失效机理进行研究。

在重复雪崩冲击失效研究方面，文献\[16-17\]研究了SiC MOSFET的重复雪崩冲击对SiC MOSFET动态特性的影响，实验研究表明，SiC 器件的寄生电容有所增加，器件的静态性能退化不明显；文献\[18\]同样对 SiC MOSFET 进行了 30k 次重复雪崩冲击实验，对比了该冲击下 SiC MOSFET 静态特性退化。上述文献虽然通过重复冲击实验分析了其静态性能，但是仅限于器件退化特征分析，未对重复雪崩冲击下器件的失效机理及演化过程进行研究。

综上所述，虽然现有文献开展了 SiC MOSFET器件在单次雪崩冲击和重复雪崩冲击下的研究，但是针对单次冲击主要侧重在实验对比分析角度，对于重复冲击更多关注器件参数退化。因此，不同雪崩冲击模式下 SiC MOSFET 器件失效机理及演化过程有待深入研究。

基于此，论文从失效机理角度深入开展不同雪崩冲击模式下 SiC MOSFET 的失效机理及失效演化过程研究。以 4H-SiC MOSFET 为对象，首先建立单次脉冲和重复UIS实验平台和元胞级的仿真模型；其次，对单次雪崩进行冲击实验，建立单次冲击下 SiC MOSFET 失效仿真模型，获取不同失效演化过程的元胞电热分布规律及失效机理。最后，对重复雪崩进行失效实验，建立重复冲击下 SiC MOSFET 失效仿真模型，获取其性能退化及失效演化过程的电场分布规律和失效机理。通过实验和仿真对比方式，研究不同雪崩冲击模式下 SiC MOSFET 的失效机理。

**1. 雪崩实验平台及仿真模型**

**1.1 实验平台**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGguMicibsYPeXAaVN8f0jq4fQasvZTjW2sNj0SmxzWeQa3o4MibEb7MywDQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET 雪崩测试平台和原理图如图 1 所示。图 1(a)为雪崩实验原理，被测器件(device under test，DUT)开通，直流电源 VDC给电感 L 充电，回路电流 Ids 缓慢增加，当电感存储一定能量后关闭DUT。此时，急剧变化的电流产生高 di/dt，电感负载上感应出雪崩电压 VBR(DSS)将 DUT 雪崩击穿，为电流 Ids 提供通路。雪崩电压表达式如(1)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgxPO9qen6hDeysvRF3Uefj7QibxC10GTd7tCuVXUGWPw8n49icsK525ZQ/640?wx_fmt=png&from=appmsg)

DUT 完全耗散存储在电感 L 中的能量。器件承受的雪崩时间 tav 由式(1)可推导出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgAIZdfZCpn3pQibfzFh1M3iaWdCglDM5WAtvaqeMy178zktQ6vdMtVkjQ/640?wx_fmt=png&from=appmsg)

式中：Ipeak 为 DUT 关断时刻流过器件的电流值；VDC为直流电压值。器件在雪崩器件的雪崩能量 Eav可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgG4kRNFFSc5bibzjiaezkkBu60ibu6KnhbicePUoEeSoTN1BkIooJbPNVxg/640?wx_fmt=png&from=appmsg)

本文选用 Cree 公司 1200V-10A SiC MOSFET器件 C2M0280120D 作为测试器件，雪崩测试条件如表 1 所示，测试模式分为单次和多次 UIS 测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgOk0JYmIhewsXIJmFrqktJr7HJcgI8jV9POvibvh8KDjyJTYkRmH2iajA/640?wx_fmt=png&from=appmsg)

单次 UIS 测试用于测试器件的极限雪崩耐受能力，其实验平台如图 1(b)所示，在实验中逐步增加 DUT的导通时间 ton 来增加雪崩电流 Ipeak，从而增加器件承受的雪崩能量 Eav，并采集每次雪崩冲击的工作波形，直至器件失效；重复雪崩测试适用于研究较低雪崩能量下 SiC MOSFET 的失效演化过程，其实验平台如图 1(c)所示，在实验中设定每次雪崩能量为 80%的极限雪崩耐受能量，以 500ms 为循环周期进行循环雪崩冲击，每 10k 次循环冲击后测量 DUT的静态特性参数并实时记录器件的工作波形，直至器件失效。实验中设定VDC为50V，电感L为4.4mH，电容 C 选定为 560μF，用于稳定直流电压源电压并在 DUT 开通瞬间快速放电，为 DUT 提供快速增加的电流，减小由直流电压源外部接线寄生电感对实验结果的影响。

**1.2 仿真模型**

为了分析 SiC MOSFET 器件在雪崩期间芯片内部电热应力分布，以研究器件的失效机理，本文基于 TCAD 建立了 SiC MOSFET 二维元胞模型，其示意图如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgeicibrt05ibfIc8OYD8SlthjqEWb0I5glticP8hRIgyJHibdrW1lMoe0Uzg/640?wx_fmt=png&from=appmsg)

根据半导体器件设计准则确定元胞的掺杂和几何尺寸使所建立的仿真模型更合理，设定外延层厚度为 18μm，沟道宽度、JFET 区宽度和栅氧层厚度分布设为 0.5μm、2.8μm 和 50nm，元胞的几何宽度为 8μm。衬底掺杂浓度为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgaRzDH2yDwnMdHPe3DkctEcv43UUgia833QdfgZg92NJVlB531Xicm0qw/640?wx_fmt=png&from=appmsg)，漂移区浓度为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgtcbxKicfVd8p4nV3KhnyQ0alhJmzgSic7ZwNcIhvfvDtgQTiaOvyLKJLw/640?wx_fmt=png&from=appmsg)，P-base区浓度为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg0Qib6PJEbibex9Gq87v8ibpcAnElZKicOP7EjRaC6HibicHn8yS7WeiaAAgDw/640?wx_fmt=png&from=appmsg)。为了反映SiC MOSFET实际工作原理，增加仿真的正确性，仿真模型中采用 Srh 和 Auger 复合模型，迁移率模型、自热模型以及碰撞电离模型，利用Newton 迭代法求解仿真模型。

**2. 单次雪崩冲击失效实验及仿真**

**2.1 实验结果**

针对单次雪崩冲击失效实验，实时记录了 DUT的电压、电流波形，当器件不能正常关断时表明器件失效。图 3 给出了 DUT 的单次雪崩耐受能力测试结果。从图 3 可知，本实验中器件处于雪崩期间的雪崩电压恒定在 1740V 左右，这是由于雪崩电压与器件工艺和工作温度有关，而与电流无关。当开通时间增加到 980μs，电流约为 14.4A 时，DUT 不能安全关断，器件失效，根据式(6)计算得 DUT 雪崩耐受能量约为 456mJ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgaaz0iayE2iaoKNpCKic7EBwKiafQnbMAXkFSD9P24vJSHErzbfohkd8y4g/640?wx_fmt=png&from=appmsg)

由如图 3 可知，单次 UIS 击穿失效是一个短暂的瞬态过程，难以测量器件参数变化特征研究其失效机理。因此，需要先确认失效芯片的失效位点并分析失效后芯片内部形貌，来研究器件的单次脉冲雪崩失效机理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgkF2g7yT9ez3ZWq1icUadUWydJhrMhhJWW6lia2eV1qWibicQlicAHkbdDIg/640?wx_fmt=png&from=appmsg)

图 4 为对失效芯片开盖图及扫描电子显微镜(scanning electron microscope，SEM)分析结果图。如图 4(a)、(b)所示，失效芯片有源区域被烧毁而终端区完好，失效点位于有源区，因此单次UIS 失效为有源区失效，且器件失效后呈现出小的局部针孔状熔蚀。图 4(c)为失效点的 SEM 扫描图，图 4(d)、(e)分别为失效点横截面 SEM 扫描图，图 4(f)为正常元胞图。对失效点进行纵向 SEM 扫描成像，发现失效点中心元胞被融化，融化中心点位于原 JFET 区域处，多晶硅层与 N-drift 结合在一起造成栅源短路，同时表面铝熔化与 N-drift 相接触导致器件漏源短路。由图 4(e)可以看到，失效中心位点附近芯片内部具有纵向裂缝。

**2.2 失效机理分析**

为了分析单次雪崩击穿失效机理，本部分首先基于图 2 所示的 TCAD 元胞模型，利用 MixedMode仿真器进行器件\-电路混合仿真，模拟 SiC MOSFET的单次脉冲 UIS 击穿过程，提取效点位于有源区，因此单次 UIS 失效为有源区失效，且器件失效后呈现出小的局部针孔状熔蚀。图 4(c)为失效点的 SEM扫描图，图 4(d)、(e)分别为失效点横截面 SEM 扫描图，图 4(f)为正常元胞图。对失效点进行纵向 SEM扫描成像，发现失效点中心元胞被融化，融化中心点位于原 JFET 区域处，多晶硅层与 N-drift 结合在一起造成栅源短路，同时表面铝熔化与 N-drift 相接触导致器件漏源短路。由图 4(e)可以看到，失效中心位点附近芯片内部具有纵向裂缝。

**2.3 失效机理分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGggaeebHoLZlQnDnVFjqFb4Mt8pzNm2zcVnmUjdWDmTqIHmFGv1pAqVw/640?wx_fmt=png&from=appmsg)

为了分析单次雪崩击穿失效机理，本部分首先基于图 2 所示的 TCAD 元胞模型，利用 MixedMode仿真器进行器件电路混合仿真，模拟SiC MOSFET的单次脉冲 UIS 击穿过程，提取漏源电压 Vds、漏源电流 Ids 和结温 Tj，仿真结果如图 5 所示，器件的击穿过程可分为 3 个阶段，每个阶段中元胞内部电流分布如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGggvkFPO8xqu0luHHWGibZ8eeIcxCwMzbadqv3cOzH91st5lbeiayJTYfg/640?wx_fmt=png&from=appmsg)

1）阶段I \[0~600μs\]：正常导通阶段，电流从漏极经过沟道流出源极如图 6(a)所示，器件处于开通状态，电流线性缓慢增加，器件漏源电压降为 0V左右，结温缓慢上升，大约 10℃；

2）阶段II \[600~635μs\]：雪崩击穿阶段，驱动信号变为 0V，器件导电沟道关闭，此时，漏源电压上升到雪崩击穿电压，电流流通路径由沟道变为体二极管 PN 结，Ids 线性下降，在高压和大电流耦合下，器件结温急剧上升，大约 1000 oC。

3）阶段III \[635~700μs\]：失效阶段，该阶段器件沟道再次开通，漏源电压下降为 0V 左右，电流通路由体二极管 PN 结转移到沟道，如图 6(c)所示。

由以上分析可知，器件在阶段II晶格温度急剧上升，而器件寄生 BJT 的电流增益 β 随温度升高而增加，流过沟道的电流 Ichannel 如下式所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg4ZULYaR9LSiaicwN1icdo1ppYClPJuuxoNmpJCuHLOHb91qJRpOYoTK5A/640?wx_fmt=png&from=appmsg)

式中 IB为 P-base 区流向 N-base 的电流，虽然这个值正常工况下很小，可以忽略不计。但是随着阶段I(即导通阶段)时间的增加，在雪崩期间流过 P-base区的电流增加，从而 IB增加而不能忽略，且急剧升高 的结温使电流增益非常大，最终导致寄生 BJT开通，即 MOSFET 沟道开启，漏源电压下降，进入阶段III。

图5和6为单元胞仿真结果，一块SiC MOSFET芯片具有成千上万个元胞。在雪崩期间即阶段II，最薄弱的元胞率先开通沟道进入阶段III，导致器件Vds 下降至 0V 左右，其他未发生进入阶段III的元胞将退出雪崩工作模式，正常关断。此时回路电流将汇集于最薄弱的元胞，导致该元胞温度再次急剧上升，发热中心点位于元胞的 JFET 区域，如图 7 所示。因此，栅极下方的 JFET 被熔化形成孔洞，而元胞边缘由于热失配发生晶格错位，产生裂痕，最终导致器件完全失效，如图 4(d)、(e)所示。综上所述，单次脉冲雪崩冲击下器件寄生 BJT 闩锁导致器件失控，造成电流集中而引发器件过热损坏。因此，SiC MOSFET 的寄生 BJT 闩锁是导致器件单次脉冲雪崩击穿失效的原因。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgLVl9lrx00DBF3MG6GaQ5o14VicuWN9PlvibKnW86PWwxicsNDiaSsacemQ/640?wx_fmt=png&from=appmsg)

**3 .重复雪崩冲击失效实验及仿真**

**3.1 实验结果**

针对 SiC MOSFET 进行重复雪崩冲击实验，发现器件经过大约167k次循环冲击后不能正常关断而失效。实验中记录了 DUT 漏电流变化值Idss，导通电阻变化值 ΔRon以及阈值电压变化值Vth的演化过程，结果如图 8 所示，图中三角曲线为文献\[18\]中的实验结果，文献\[18\]中进行了 30k 次重复雪崩冲击实验，其中 Vth与 Ron基本不变，Idss显著上升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgW4nyCUgzFTXSKHKDdibqToXLngUaQbzGT1FQLn43kzl2EuQkicdhoqdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgicLfzqY7alPsdWdia6fBX93tzuAvLJLuPZdT9mT227nYpogdcbiaRhwqQ/640?wx_fmt=png&from=appmsg)

与本文实验中的前期退化结果相比，Vth 和Idss 的变化具有一致性。但文献\[18\]中 Ron 基本不变，本文实验中经过 20k 次循环后 Ron 开始增加，这是由于器件在雪崩过程中产生大量热量，器件温度上升，而器件关断后温度下降，导致器件承受往复循环的热应力，从而导致键合线疲劳老化脱落，如图 9(a)所示，最终使 Ron 增加。因此，本文中的前期实验结果(0~150k 次循环)与文献\[18\]中的实验结果具有一致性，但 150k 次循环后本实验中 Vth急剧下降，漏电流 Idss迅速上升，且经过大约 17k 次循环后器件失效，说明前 150k 次实验的退化机理与最后 17k 实验的失效机理不同。因此，SiC MOSFET重复雪崩冲击失效演化过程可分为 2 个阶段：

1）阶段I \[0~150k 次循环\]：正常退化阶段，该阶段器件导通电阻和漏电流增加，阈值电压基本不变，但器件仍具有长期可靠工作能力。该阶段属于器件工作时可接受的正常退化过程，之前的研究也主要关注该阶段中器件参数的退化过程和机理。

2）阶段II \[150k 次循环~器件击穿失效\]：失效阶段，该阶段器件阈值电压明显下降，且漏电流急剧上升，但导通电阻变化趋势未发生改变。在 167k次循环后 Vth降为 202mV，漏电流上升到 100mA 左右，器件已经基本失去关断能力。器件处于该阶段时其可靠性急剧下降，由图 8 可知，经过大约 17k次循环后，器件失效，该阶段为器件危险工作阶段，器件很有可能被击穿，从而对系统造成严重后果。

重复雪崩冲击失效后器件开盖如图 9 所示，从失效点的分析可看到，不同于单次雪崩失效中单个元胞失效击穿孔，重复雪崩冲击失效属于大面积失效，如图 9(b)所示，失效区域在光学显微镜下呈现大量的针孔状的击穿孔。因此，单次雪崩失效机理与重复雪崩冲击的不同，下面将详细分析其失效机理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgSnicjkqXwB9JEzTawAoHib3xia7fnpCRZ8uaZxibbEl45jlPICxzh89YRA/640?wx_fmt=png&from=appmsg)

**3.2 失效机理分析**

相比于单次脉冲雪崩击穿，重复雪崩冲击由于雪崩能量较低不能开启寄生 BJT，相比于正常导通情况，器件处于重复雪崩工作状态时将承受极高的电压，且器件在雪崩期间产生大量的电子\-空穴对和热量，进而形成热空穴，而热空穴在高电场的作用下严重影响 SiC MOSFET 薄弱的 SiO2/SiC 界面。因此本节首先通过 Silvaco 仿真分析器件在雪崩期间的电场(electric field，E.F.)分布和碰撞电离率(impact ionization，I.I.)分布，如图 10 所示，图片下方的曲线是沿 SiO2/SiC 界面提取的数值结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgT3kTBm75Mxm2wX7tn0AIOzDLYgJiaQiaosXadvRibaiaKfuicm0wrrYvyJA/640?wx_fmt=png&from=appmsg)

由图 10 可知，JFET 区上方 SiO2/SiC 界面处具有很高的电场强度和碰撞电离率。高碰撞电离率几乎覆盖 JFET 区上方的 SiO2/SiC 界面，而沟道的碰撞电离很小可忽略不计；同样的，垂直电场的方向是由氧化层指向 SiC 方向，在 JFET 区上方的电场强度最高，而沟道区域的电场强度几乎为 0 V/cm。

因此，正如文献\[18\]中所述，JFET 上方 SiO2/SiC 界面处界面陷阱捕获空穴，增加了 PN 结两端的电场强度和沟道两端的电位差，从而导致器件的漏电流Idss 增加。然而，界面陷阱捕获的空穴在界面处有电流流过(即沟道有电流流过)时会被载流子暂时中和，因此，在正常退化阶段，实验中器件的阈值电压 Vth 没有观测到明显的变化。而在失效阶段，Vth下降明显且器件很快就被击穿而失效，因此，界面陷阱捕获空穴应该不是造成器件重复雪崩冲击失效的主要原因。

考虑到 SiC MOSFET 普遍采用一氧化氮再退火工艺以减低界面态密度，提高沟道迁移率，但这种工艺使氧化层更容易捕获空穴。此外，界面缺陷也会降低载流子进入氧化层的隧穿势垒。因此，当 SiC MOSFET 工作在强电场下时，热空穴很容易注入氧化层，尤其在具有强电场和高空穴浓度的雪崩工作模式期间。当氧化层中注入空穴时，带正电的硅离子会朝远离氧空位的方向移动，继而与后方的晶格氧原子形成方向键，氧化层中的这种结构的转变稳固了带正电的氧空位，从而增加了栅氧化层中的固定正电荷 QF 浓度。QF 浓度的增加将降低器件的平带电压 VFB，如式(8)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgm9uQzorR8FXhEYmyxhog2xjd6lBq9sPPWay6VWk72yAdTK0luqNGwQ/640?wx_fmt=png&from=appmsg)

式中：GS为栅极–半导体功函数，与栅极材料和半导体有关；q 为基本电荷量；COX 为单位面积氧化层的电容量，与氧化层厚度有关。进一步的，VFB影响器件的阈值电压，如式(9)所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgJ0M4NPriaNqMiafMyXyh5exboACdbxtO4r0vTKEHia93CD1rVwuS2LE6Q/640?wx_fmt=png&from=appmsg)

式中：F为费米电势，由器件掺杂浓度和温度决定；V0由氧化层厚度和掺杂浓度决定。因此，QF的增加将减小器件的平带电压，进而使器件阈值电压降低。

随着冲击实验的进行，氧化层中 QF 的浓度累积将增加，增加的 QF相当于在氧化层注入正电荷，由于正电荷的作用，沟道处将聚集大量的电子。随着沟道电子浓度的增加，器件最终即使在 Vgs0V时依然存在导电沟道。如图 11 所示，新器件在Vgs0V 时沟道电子浓度大约为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgXsjmEGjbfd4jkCsiawfW51ztWRW0r2so4tGpENvP1vPwOAbLBv1VALg/640?wx_fmt=png&from=appmsg)，器件能正常关断；随着重复雪崩实验的进行，QF浓度增加，阈值电压下降，沟道内电子浓度上升，漏电流升高，当 QF 增加为新器件的 2 倍时，沟道电子浓度上升到约![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgID7icyWAiblfrlSxpr0Lpn6oUNQSLlGYKRucrW9QJXBSG377oJI7XHnw/640?wx_fmt=png&from=appmsg)，此时器件在 Vgs0V 时不再具有阻断能力，而阈值电压也基本将为零，最终导致器件不能正常关断而失效。仿真结果中 Vth 下降，Idss上升，这与图 8 中的失效阶段II一致。因此，在器件临界击穿后期，氧化层捕获空穴是导致器件阈值电压退化和器件失效的主要原因。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg3C6cn73gGSryQbkNLvY3dYHLmVnCjZQfOKr5eWFEKK1jrhM48IlibKw/640?wx_fmt=png&from=appmsg)

**4. 结论**

本文对不同雪崩冲击模式下的 SiC MOSFET器件失效机理进行研究，通过实验和仿真分析了单次脉冲雪崩冲击和重复雪崩冲击 SiC MOSFET 失效演化过程。所得主要结论有：

1）不同雪崩冲击模式下，SiC MOSFET 器件具有不同的失效模式和失效机理。

2）在单次雪崩冲击下，SiC MOSFET 器件承受的雪崩能量将在 JFET 区产生热累积，使温度高达 1000℃导致 P-base 区电阻上升，与其流过的高电流密度相作用，形成 BJT 开启电压，直接导致最薄弱元胞率先发生闩锁，使电流进一步集中于失效元胞，造成 JFET 区局部温度过热而元胞融化，导致器件栅源极短路、漏源极短路。

3）在重复雪崩冲击下，SiC MOSFET 器件失效模式表现为性能退化和失效阶段。在性能退化阶段 SiO2/SiC 界面缺陷捕获空穴，造成器件漏电流增加。随着冲击损伤的累积，界面缺陷降低空穴进入氧化层的势垒，空穴在氧化层中累积，器件进入失效阶段，阈值电压明显下降，漏电流进一步上升，最终导致器件在栅源电压 Vgs0 时，导电沟道依然存在，器件无法关断而失效。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)