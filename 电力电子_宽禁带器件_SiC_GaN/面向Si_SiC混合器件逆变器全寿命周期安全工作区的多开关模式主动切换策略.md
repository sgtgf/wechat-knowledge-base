# 面向Si／SiC混合器件逆变器全寿命周期安全工作区的多开关模式主动切换策略

原创 涂春鸣，韩 硕 SiC碳化硅MOS管及功率模块的应用 2025-05-31 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/4-Gg\_X6jjKJA5L9luW7eGQ](https://mp.weixin.qq.com/s/4-Gg_X6jjKJA5L9luW7eGQ)

文章来源：电力自动化设备

作者：涂春鸣，韩硕，龙柳，肖凡，肖标，郭祺（湖南大学 国家电能变换与控制工程技术研究中心，湖南 长沙 410082）

摘要：基于硅基绝缘栅双极型晶体管（Si IGBT）和碳化硅金属氧化物半导体场效应管（SiC MOSFET）的 Si IGBT／SiC MOSFET混合器件采用多开关模式切换策略可使变换器具备应对复杂工况的能力，然而现有切换策略并未考虑器件疲劳老化对模式切换阈值电流的影响，在混合器件老化进程后期极有可能造成器件热失效，进而严重威胁变换器的可靠运行。基于此，提出了一种面向Si／SiC混合器件逆变器全寿命周期安全工作区的多开关模式主动切换策略。基于器件疲劳老化对逆变器最大安全运行电流的影响规律，设计了考虑老化进程的逆变器安全工作区刻画流程。根据安全工作区刻画结果，提出了适用于混合器件全寿命周期的多开关模式主动切换策略。实验结果表明，该策略能够针对混合器件不同老化程度来动态调整开关模式切换阈值电流，从而在器件全寿命周期内保障逆变器的运行可靠性。

关键词：混合器件；全寿命周期；安全工作区；多开关模式切换；可靠性

0\. 引言

相较于硅基绝缘栅双极型晶体管（Si IGBT），碳化硅金属氧化物半导体场效应管（SiC MOSFET）具有开关损耗低、开关速度快、耐压高等优点，能显著提高系统功率密度，在新能源发电、电动汽车等领域具有广阔的应用前景。然而，受材料和工艺的制约，SiC MOSFET目前存在载流能力不足、成本昂贵等问题。因此为了均衡器件的性能与成本，有研究提出了基于大电流 Si IGBT 和小电流 SiC MOSFET 并联使用的混合器件结构，使其在性能接近 SiC MOSFET 的同时大幅降低了成本。

混合器件利用 SiC MOSFET 先于 Si IGBT 开通并晚于其关断的方式实现 Si IGBT 零电压开关，从而降低混合器件总损耗。因此有学者以混合器件最小损耗为控制目标，针对 SiC MOSFET 的关断延时开展了相关研究。文献［9］通过双脉冲实验确定混合器件的最优关断延时，但是在应用中并未考虑负载变化对最优关断延时的影响。为此文献［10⁃11］提出了基于可变关断延时的最小损耗开关模式，能在线动态调整关断延时，实现了变换器效率最优。然而，最小损耗开关模式会导致热阻较大的 SiCMOSFET 承担主要的开关损耗，在重载情况下其极易出现过热现象。为解决该问题，文献［12⁃13］提出了结温平衡开关模式，通过控制关断延时重新分配关断损耗，从而降低 SiC MOSFET 结温。文献［14］提出了基于导通时变的主动热控制开关模式，通过在混合器件共同导通期间主动关闭 SiC MOSFET一段时间，将部分导通损耗转移给 Si IGBT 以实现结温平衡，提高热可靠性。上述所有开关模式都只针对单一目标进行优化，存在难以适应不同工况的问题。若以最小损耗为导向则会在重载时牺牲器件的热可靠性，而以结温平衡为导向则会在轻载时削弱变换器的效率。

为结合最小损耗和结温平衡2种开关模式的优势，有学者提出了混合器件多开关模式切换策略。文献［17］针对Buck电路设计了多目标优化开关策略，在中小负载时采用最小损耗开关模式，提高运行效率；而在重载时采用结温平衡开关模式，提高可靠性。文献［18-19］基于混合器件热电耦合模型实时计算器件损耗和结温，并通过反馈控制动态调节混合器件的关断延时，以实现最小损耗与结温平衡2种控制目标的在线切换。文献［20］将多开关模式切换与变开关频率相结合，提出一种适用于逆变器效率与热应力均衡的开关策略。

现有研究提出的多开关模式切换策略，通常将150 ℃结温限制下，变换器的最大安全运行电流设为开关模式切换的阈值电流。该阈值电流一般通过实验测得，并作为固定值输入开关模式切换控制器中。然而，在器件老化进程中其热阻是不断攀升的，这使得在相同工况下老化后期的器件更容易超过限制结温，进而导致阈值电流发生偏移。此时若仍根据混合器件初始健康状态时的阈值电流进行模式切换，将会给变换器的可靠运行带来严峻挑战。

针对上述问题，本文首先建立了适用于单相逆变器的混合器件损耗模型，并基于此分析了混合器件疲劳老化对逆变器最大安全运行电流的影响。然后提出了一种考虑混合器件全寿命周期下的逆变器安全工作区刻画方法，并根据该安全工作区设计了面向混合器件不同老化区间的多开关模式主动切换策略。通过在不同老化程度下动态调整开关模式切换策略，可以保证全寿命周期内逆变器运行的可靠性。

1\. 基于混合器件的单相逆变器运行机理与损耗特性分析

为进行混合器件在逆变器中的热可靠性分析与优化，本文首先对单相逆变器的运行机理与损耗特性进行分析，来建立混合器件的损耗模型。

1.1 混合器件单相逆变器工作模态分析

基于 Si／SiC 混合器件的单相全桥逆变器的拓扑结构如图1所示。图中：Udc为逆变器直流侧电压；IF为负载电流；L、C、R分别为交流侧滤波电感、滤波电容和负载；Io为输出电流；Ton\_delay、Toff\_delay分别为 SiCMOSFET 开通、关断延时；Tcond\_MOS 为 SiC MOSFET中断导通时间；VG\_MOS、VG\_IGBT 分别为 SiC MOSFET 和 Si IGBT的驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaROKKwIF6ZQmze5jHM5QjjtO71TevcUdrZ5nkdAZnNuPoIvImwpXJkQ/640?wx_fmt=png)

混合器件具有灵活的开关模式，根据控制目标主要分为最小损耗控制和结温平衡控制两大类，其对应的典型开关模式如图1中的开关模式1、2所示。开关模式1为基于可变关断延时的最小损耗开关模式，通过控制SiC MOSFET开通延时Ton\_delay和关断延时 Toff\_delay，令Si IGBT零电压开通与关断，实现减小损耗的目标。开关模式2为基于导通时变的结温平衡开关模式，通过控制SiC MOSFET中断导通时间Tcond\_MOS，将部分导通损耗转移给Si IGBT，实现 SiCMOSFET与Si IGBT结温平衡的目标。

根据 Si IGBT 以及 SiC MOSFET 体二极管的拐点电压，逆变器每个基波周期内混合器件的导通情况可分4个阶段，示意图见附录A图A1。

阶段 1：负载电流 IF小于 Si IGBT开通临界电流Ith，此时仅SiC MOSFET导通。

阶段 2：负载电流 IF 大于 Ith，混合器件内部 SiCMOSFET和Si IGBT共同导通。

阶段 3：负载电流反向时，由 SiC MOSFET 实现续流功能，由于 IF小于体二极管开通临界电流 Ith⁃BD，体二极管不导通，所以仅 SiC MOSFET 的导电沟道导通。

阶段4：负载电流IF大于体二极管开通临界电流Ith⁃BD，此时 SiC MOSFET 导电沟道和体二极管共同导通。

由于混合器件开关频率较高，负载电流基波周期远大于器件开关周期，所以在一个开关周期内负载电流变化微小，可以近似认为保持不变。基于此，本文对单相逆变器中开关周期内混合器件的损耗模型进行构建。

1.2 适用单相逆变器的混合器件损耗模型构建

单相逆变器中的混合器件损耗模型包括 SiCMOSFET 和 Si IGBT 的导通损耗模型以及开关损耗模型。结合1.1节分析结果，本文以开关模式1为例分析计算单相逆变器中混合器件的损耗，其余开关模式的分析方法类似。具体模型构建过程及损耗计算公式见附录A式（A1—（A19）。

2\. 计及混合器件全寿命周期的逆变器安全工作区刻画

2.1 考虑混合器件热限制的逆变器安全工作区设计原则分析

本文从考虑混合器件热限制以及其老化程度的角度出发，设计逆变器的安全工作区。

逆变器的安全工作区通常以其最大安全运行电流为边界，而该电流受内部混合器件的最高限制结温约束。参考数据手册，器件运行的限制结温一般为 150 ℃。混合器件中任一器件结温超过此限制，都可能导致器件热失效进而影响逆变器运行的可靠性。因此，设计逆变器安全工作区时必须考虑混合器件的热限制。

此外，混合器件疲劳老化对传热路径的破坏会引起热量的累积，从而限制逆变器的最大运行电流。因此本文将对器件疲劳老化下的热参数变化规律开展进一步的探索与分析。  

2.2 老化进程中热参数变化规律解析

热网络模型被广泛应用于器件的热分析中，混合器件的热网络模型见附录B图B1。

SiC MOSFET 的结-壳热阻抗 Zth\_ j⁃c\_MOS 以及 SiIGBT 的结-壳热阻抗 Zth\_ j⁃c\_IGBT 使用 Foster 热阻抗网络模型来等效，其表达式分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSatrDSBCh3AhrZ4mrA8wjibrBYEzA1NyG74WwqsQZcJOpht9J3SbfmKNg/640?wx_fmt=png)

式中 ：Rth\_MOS，i、Rth\_IGBT，i 以及 τMOS，i、τIGBT，i 分别为 SiCMOSFET、Si IGBT 第i 阶热阻以及时间常数；n为Foster热阻抗网络模型阶数。

在已知环境温度和器件各自的损耗功率后，根据混合器件的热网络模型即可计算SiC MOSFET和Si IGBT的结温Tj\_MOS和Tj\_IGBT，计算公式分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaxtpx0Nn29WzCYctHNsS8A7B7KKv2xQtGQ5iaLBlfkQbJdNX9LgO03ibw/640?wx_fmt=png)

式中：Ploss\_MOS 以及 Ploss\_IGBT 分别为 SiC MOSFET 以及Si IGBT 的损耗功率；Zth\_ c⁃a 为器件壳-环境的热阻抗；Tambient为环境温度。在器件老化过程中热阻近似成指数级增大，结合器件结温的计算公式可知，在最高结温约束下，相比于初始健康状态，混合器件老化后期逆变器的最大安全运行电流将有所下降。即混合器件出厂健康状态下的逆变器安全工作区将难以保证老化后期逆变器的安全运行。因此设计混合器件逆变器的安全工作区时必须覆盖器件的全寿命周期。

2.3 计及混合器件全寿命周期的逆变器安全工作区刻画

2.3.1 考虑混合器件全寿命周期的逆变器安全工作区设计

由 2.2 节分析可知器件的热阻随老化程度加深而逐渐增大，所以通过改变热网络模型的热阻值可以模拟混合器件的不同老化状态。文献［22］定义热阻增大50 %为器件失效标准，与器件实际失效情况较为相符。因此，本文以SiC MOSFET和Si IGBT的结-壳热阻增量从 0增加至 50 %RthN（RthN为热阻的额定值），对混合器件的全寿命周期进行完整覆盖。针对不同老化程度，以SiC MOSFET和Si IGBT其中之一率先达到结温最大限值150 ℃ 时的电流峰值作为最大安全运行电流，进行混合器件全寿命周期的逆变器安全工作区的设计。

2.3.2 安全工作区刻画流程

本文设计了具有通用性的混合器件全寿命周期逆变器安全工作区刻画流程，如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa4qnbCXUJCwibILAUgVKMQRaGLOX9VT2vF8resnLFMibzCRGrgK2TotXA/640?wx_fmt=png)

1）首先通过数值迭代方法对器件结温进行实时计算。设置环境温度和逆变器负载电流 IF 后，通过损耗模型计算出SiC MOSFET 和Si IGBT各开关周期的平均损耗 Ploss\_MOS 和 Ploss\_IGBT，再结合混合器件的热网络模型迭代计算出器件最终稳态结温 Tj\_MOS、Tj\_IGBT。以第 k 个开关周期的混合器件结温为例，具体计算公式分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaHAslvWQ2qMVUbvHqjJo4g4zicXeUt4Oy4XP0ibQu0smw9tqSbrZKPrLg/640?wx_fmt=png)

当前时刻的温差需要利用前一个开关周期的温差进行计算，以 SiC MOSFET 第k个开关周期结-壳之间的温差为例，计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaguWmWt3Jic1hrMtMf4rN5nUrxts8XWRTAfib4wEl64molHwhXia5LoJ2Q/640?wx_fmt=png)

式中：Tsw为混合器件开关周期。

2）下一步以器件最大结温 150 ℃ 为限制条件，利用二分法寻找逆变器的最大安全运行电流。先设定初始负载电流取值范围为（I(0)min，I(0)max）（I(0)min、I(0)max 分别为初始负载电流最小、最大值），取中间值I(0)F 开始进行区间刻画。若稳态时2个器件的最高结温Tj\_max不等于（150±ε）℃（ε为计算精度），则更新下一循环的电流区间（I(1)min，I(1)max）（I(1)min、I(1)max分别为第1次循环后负载电流最小、最大值）为（I(0)min，I(0)F ）或（I(0)F ，I(0)max），并继续取中间值I(1)F 开展结温计算；当Tj\_max等于（150±ε）℃，则认为此时负载电流 I(k)F 为逆变器所能承受的最大电流。

3）最后通过不断更新热网络模型中器件的热阻值来模拟不同老化状态，重复寻找逆变器的最大安全运行电流。老化模拟循环结束后，即可刻画出混合器件全寿命周期内的逆变器安全工作区。

2.3.3 针对多开关模式的安全工作区刻画

参考 2.2.2节所述的安全工作区刻画流程，针对开关模式 1与开关模式 2分别刻画其对应的混合器件全寿命周期下的逆变器安全工作区，并对比分析不同开关模式对安全工作区的影响。

开关模式 1 和开关模式 2 下逆变器全寿命周期安全工作区的刻画结果见附录 B 图 B2。在开关模式 1 下，随着 SiC MOSFET 老化程度的增加，逆变器的最大安全运行电流逐渐减小，而 Si IGBT 的疲劳老化对其影响较小。在开关模式 2 下，逆变器的最大安全运行电流则受到 SiC MOSFET 和 Si IGBT 老化程度的共同影响，在混合器件整个老化进程中呈下降趋势。

由于 Si IGBT 的老化对开关模式 1 下安全工作区影响极小，因此以下分析中将 Si IGBT 的热阻标准化值 R∗th\_IGBT 设为 1 p.u.，SiC MOSFET 的热阻标准化值 R∗th\_MOS 从 1 p.u.变化到 1.5 p.u.，对开关模式 1 和开关模式2下逆变器的三维安全工作区进行二维映射，以进一步分析 SiC MOSFET 老化程度对安全工作区的影响。

由文献［22］可知，在器件全寿命周期内其热阻增长速率会出现明显拐点：热阻增量［0，0.5 %RthN］为线性增长阶段，此时器件处于健康状态；热阻增量（0.5 %RthN，50 %RthN］为加速老化阶段，该区间内器件处于非健康状态。因此，本文以热阻增量 0.5 %RthN为拐点对安全工作区进行切分。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSazNfwkDpfIJ4ZPmh4niaB4Ght2drO5DnAHicJxOZ0MBTrKP0frfdqnfFA/640?wx_fmt=png)

R\*th\_IGBT = 1 p.u. 时的逆变器二维安全工作区如图3 所示（图中 SiC MOSFET 热阻标准化值 R∗th\_MOS 为标幺值，后同）。红色虚线下方SiC MOSFET处于健康状态，其热阻增量较小但是该阶段占据器件大部分寿命。此时开关模式1下逆变器的最大安全运行电流在 32.2 A 附近，而采用开关模式 2 时该电流提升到 34.5 A左右。红色虚线上方 SiC MOSFET 处于非健康状态，其热阻会在较短的寿命周期内迅速增大直至器件失效。最终开关模式1下的逆变器安全工作区收缩到 30 A 以下，而在开关模式 2 下依然保持在 33 A 以上。通过对比可以看出在同等器件老化程度下，采用开关模式 2 运行的逆变器具备更高的功率输出能力。

综合上述分析可知，逆变器的安全工作区随着混合器件的老化而动态收窄，将开关模式切换阈值电流看作固定值的传统开关策略也不再适用。因此，本文将考虑混合器件老化程度对多开关模式切换策略进行重新设计与规划。

3\. 面向逆变器安全工作区的混合器件多开关模式主动切换策略

结合 2.3.3节的逆变器安全工作区刻画结果，以红色虚线即开关模式1下混合器件初始热阻时的最大安全电流为额定负载，安全工作区与负载工况的对应关系图见附录C图C1。

由图可知，开关模式 1 下逆变器的安全工作区间随着混合器件的老化逐渐收缩到额定负载以内；而开关模式2下逆变器的安全工作区不论何种老化情况均大于额定负载。因此通过多开关模式切换的方式可以使逆变器具备在混合器件全寿命周期内适应不同工况的能力。由于器件的老化进程会出现 1个明显的拐点，本文将针对混合器件健康和非健康状态对多开关模式切换策略进行全面设计。

3.1 混合器件健康状态下多开关模式切换思路分析

选取 Si IGBT 热阻标准化值为 1，SiC MOSFET热阻标准化值作为变量，健康状态下开关模式 1 和开关模式 2 的二维安全工作区如图 4 所示。图中：IF\_N为额定工作点下的负载电流；红色虚线以下即为健康状态时开关模式 1和开关模式 2对应的逆变器安全工作区；阴影部分对应的是开关模式 1 下逆变器最大安全运行电流因器件老化而缩减的部分。以额定工作点为基准，健康状态下的安全工作区基本无变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaULBYgjibvFN3WMBSN2Pyzzh7ArMPxHDcKkKraGB9YHwZdN6DgrvH7FA/640?wx_fmt=png)

因此健康状态下的开关模式切换思路为：当逆变器工作在区域 A 对应的额定及以下功率时，混合器件采用开关模式 1 运行，确保逆变器的最高工作效率；而当逆变器因过载工作在区域B时，需将混合器件切换至开关模式2运行，利用开关模式2更大的安全工作区平衡混合器件内部的热应力，进而提升逆变器的极限输出能力。

3.2 混合器件非健康状态下多开关模式切换思路分析

随着老化进程的不断加深，混合器件将由健康状态转变为非健康状态。虽然非健康状态只占据器件寿命的较小一部分，但是热阻在该区间内迅速增大。此时热阻变化对逆变器安全工作区的影响不可忽略，需根据不同的工况进行开关模式切换。非健康状态下开关模式 1和开关模式 2的二维安全工作区如图 5 所示。图中：红色虚线上方即为非健康状态下开关模式 1 和开关模式 2 对应的安全工作区。区域 C 为开关模式 1 下的安全工作区，且随着热阻的不断增加安全边界呈现收窄趋势；区域 D 是开关模式 1 下受器件老化影响所减小的安全工作区范围；区域 E则是开关模式 2对应的安全工作区，其变化趋势同开关模式1相似。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaJeTOWibqPr0KWkthPLZ4VtkbubmPog2ZKyEbBHtpLbf2DFeggibIC4Ww/640?wx_fmt=png)

根据以上分析可以将非健康状态下混合器件的模式切换思路分为以下几种情况。

1）逆变器轻中载运行。此时逆变器工作在区域C，混合器件采用开关模式1运行可使逆变器的工作效率最大化。

2）逆变器额定负载运行。此时逆变器工作在区域 D，然而受器件老化影响，开关模式 1下逆变器的安全工作区已经收缩到区域 C，混合器件易突破结温限制而导致热失效。此时混合器件应主动切换到开关模式 2 运行，通过调节混合器件的中断导通时间将安全工作区扩大至区域 D，确保逆变器依然具有输出额定功率的能力。

3）逆变器过载运行。此时负载电流值进入区域E，混合器件面临热失效风险，此时应主动切换至开关模式2运行，以提高逆变器的过载能力。

3.3 面向逆变器安全工作区的混合器件多开关模式切换流程与方案

结合健康状态和非健康状态时的开关模式切换思路，本文基于逆变器安全工作区设计出附录 C 图C2所示的多开关模式主动切换流程。

老化进程判断模块采用瞬态热阻抗法对器件热阻进行监测。测量时通入加热电流使器件达到热稳态，再切除电流后利用温敏参数法测得结-壳降温曲线，进而计算出器件的热阻参数。然后根据当前环境温度和热阻信息，结合全寿命周期安全工作区给出对应的开关模式切换条件。针对混合器件健康状态和非健康状态下具体的开关模式切换过程见附录C。

4\. 实验验证

采用1200V/25A的Si IGBT（IGW25N120H3）与1200V/12.5A的SiC MOSFET（C2M0160120D）并联组成的混合器件，搭建了相应的单相逆变器实验平台，如附录D图D1所示，对本文所提混合器件全寿命周期内的逆变器安全工作区及多开关模式切换策略进行验证。

4.1 考虑混合器件全寿命周期的逆变器安全工作区准确性验证首先验证

混合器件全寿命周期内逆变器安全工作区的准确性。在混合器件健康状态下（R∗th\_IGBT=1 p.u.，R∗th\_MOS=1 p.u.），选取工作点a1—e1，覆盖开关模式 1和开关模式 2下逆变器安全工作区内外及其边界。在混合器件非健康状态下（R∗th\_IGBT=1 p.u.，R∗th\_MOS=1.3 p.u.），按照同样思路选取工作点a2—e2，具体的工作点选取图及各点数值大小见附录 D 图 D2。通过实验测得不同工作点下混合器件的最高运行结温，如图6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSarTlFHRaNyhEZ8JI1d8KgJia0p0XOCpeafF5uwUtcmYNpmGQhPbZo6TQ/640?wx_fmt=png)

混合器件健康状态下的实验结果如图6上图所示。开关模式 1 下逆变器工作在点 a1 时，混合器件最高结温在 110 ℃ 左右，处于逆变器的安全工作区内；逆变器工作在点 b1 时，混合器件最高结温达到150 ℃，处于安全工作区边界；后续工作点对应的混合器件结温均高于 150 ℃，超出安全工作区范围。而开关模式 2 下逆变器具有更大的安全工作区，直到负载电流增大到 34.4 A 即点 d1 时，混合器件最高结温才达到150 ℃。

混合器件非健康状态下的实验结果如图6下图所示。开关模式1下逆变器工作在点a2时混合器件的最高结温在120 ℃ 附近，处于安全工作区内；逆变器工作在点 b2 时器件最高结温逼近 150 ℃，达到安全工作区的边界，此时负载电流为 30.5 A；工作点c2— e2则全部处于安全工作区外。开关模式 2下逆变器在点 d2时到达安全工作区边界，此时负载电流为33.5 A，仅工作点e2超出了逆变器的安全工作区。

上述实验结果与选取的工作点位置相符，可以说明本文所刻画的逆变器安全工作区在混合器件健康状态和非健康状态都具有较高的准确性。

4.2 面向逆变器安全工作区的多开关模式主动切换策略验证

下面将进一步验证面向逆变器安全工作区的多开关模式主动切换策略的有效性。分别在混合器件健康和非健康状态下选取工作点 a3— c3、a4— d4，涵盖所有开关模式切换对应的区域，具体的工作点选取图及各点数值大小见附录 D 图 D3。根据所选取的工作点，对不同开关模式切换策略的实际工作效果进行测试，然后记录混合器件的运行结温以及逆变器的最大输出功率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa30yv4DKzmCyhoEIqicht2d36IqZCL3zeWyzQ4VCoymDkibMR4AE4tYgg/640?wx_fmt=png)

混合器件健康状态下，采用开关模式 1 和本文所提多开关模式切换策略的实验结果对比如图7所示。由图 7（a）可知：混合器件健康状态下，仅采用开关模式 1时，当工作点由 a3切换到 b3后，逆变器工作在区域 A 边界，混合器件会因为 SiC MOSFET 过温而触发保护，此时逆变器的最大输出功率不足7 084 W。由于混合器件健康状态阶段安全工作区变化较小，因此传统多开关模式切换策略与本文所提多开关模式切换策略基本一致。由图 7（b）可知：采用本文所提多开关模式切换策略时，当工作点由a3切换到b3后，混合器件将主动切换到开关模式2运行；当工作点切换到c3时，负载电流到达区域B的边界，此时混合器件结温接近150 ℃，逆变器的最大输出功率提高到7580 W。

混合器件非健康状态下，采用传统多开关模式切换策略和本文所提多开关模式切换策略的实验结果对比如图 8 所示。由图 8（a）可知：采用传统多开关模式切换策略时，当逆变器工作点由 a4切换到 b4后，逆变器工作在区域 C边界，此时 SiC MOSFET 已经达到 150 ℃ 限制结温，触发了过热保护。结合逆变器安全工作区刻画结果可知，非健康状态下传统策略所设定的模式切换阈值电流失效，导致逆变器无法维持原额定功率运行。由图 8（b）可知：采用本文所提多开关模式切换策略时，当逆变器工作点从a4切换到b4后，混合器件会主动切换到开关模式2运行，其热可靠性得到了有效保障；当工作点切换到c4时，逆变器仍然可以维持额定输出功率 7084 W；直到切换到工作点d4，负载电流到达区域E的边界，此时逆变器的极限输出功率为7370 W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa1SxlwdLfGKElBScEAkn3wAtpTH6vqvfD1kiczjdibiac4va84wmRxcCMw/640?wx_fmt=png)

与传统多开关模式切换策略相比，本文所提策略使得逆变器在混合器件非健康状态时仍然可以维持额定功率运行，且极限输出功率约提升了9.84 %，其在混合器件全寿命周期内的可靠性得到了有效保障。

5\. 结论

本文基于老化进程中混合器件的热参数变化规律，设计出一套考虑器件不同老化程度的逆变器安全工作区刻画流程；通过对不同开关模式下安全工作区的分析，提出一种基于混合器件逆变器全寿命周期安全工作区的多开关模式主动切换策略。得到了以下结论。

1）以逆变器所能承受的最大安全运行电流为边界的安全工作区受混合器件疲劳老化影响，在整个老化进程中呈现收缩趋势。

2）以实现效率最优为目标的开关模式 1 运行下，逆变器的安全工作区大小主要受 SiC MOSFET结温限制，且会在混合器件老化后期收缩到额定负载电流以下。

3）在以实现结温平衡为目标的开关模式 2 下，逆变器的安全工作区覆盖范围更广，即使在老化后期仍然具有输出额定功率的能力。

4）与传统多开关模式切换策略相比，本文所提方法在混合器件非健康状态下，依然可以在额定负载时保持逆变器不降额运行；而在过载时增大逆变器的最大功率输出能力，降低器件过热风险，可以实现混合器件全寿命周期内逆变器的可靠运行。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaYJ9QJOUg8h9ApvsTNPCO0wyicKCxN05MncUHZwNiatqITdVVWuDpefMA/640?wx_fmt=png)

混合器件损耗模型

1）导通损耗模型。

基波周期内单相逆变器输出电流可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSasdtDP8TstWaDVBtymmSwh10sicWw6X36pJOy0tLaJzgF7OERWOXOicZA/640?wx_fmt=png)

式中：IF为负载电流瞬时值；Ipeak为负载电流的峰值；w 为角频率。双极性调制方式下，占空比可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaFpR43GYzVjLs6ficwwKwByslmhtd4pmBdENB4w1OYvBH2wNeiaxotUUA/640?wx_fmt=png)

式中：m 为调制度；Φ为交流电压和电流基波分量之间的相位角。

结合图 A1 所示的混合器件在一个基波周期内的导通情况，计算各阶段的导通损耗。

阶段 1：混合器件导通损耗Pcond均由 SiC MOSFET 产生，计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaRDB93iaKphskN6uPSbhVU2g2h9IH0w2P9Z8KzkJU9yI68vwRs6ReAHQ/640?wx_fmt=png)

式中：Rds为 SiC MOSFET 的导通电阻；Td为死区时间；fsw为混合器件的开关频率。

阶段 2：SiC MOSFET 和 Si IGBT 的分流电流IMOS和IIGBT可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaO3dcscmg848Z8dvq2iahqxzfSbAlYoPXx0OYRaB856yErFhoakVjvibA/640?wx_fmt=png)

式中：Rce为 Si IGBT 导通电阻；Vth为 Si IGBT 的拐点电压。

阶段 2 内混合器件的导通损耗由三部分构成，分别是 SiC MOSFET 的分流导通损耗Pcond\_MOS、Si IGBT 的分流导通损耗Pcond\_IGBT和 SiC MOSFET 在延迟关断时间Toff\_delay内的额外导通损耗Pcond，计算公式分别如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSah24Z0SEuQTvsLWHGtv003bYxYgH7koUaU0QEtW1dyoVwwpSeibG6OEA/640?wx_fmt=png)

阶段 3：导通损耗仅由 MOSFET 的导电沟道产生，计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaGiakAVCI9efTNXjcllbH8bLCBnexPpicvib6821ArMAMsGWiaJao4k6Hyw/640?wx_fmt=png)

阶段 4：SiC MOSFET 导电沟道和体二极管的分流电流IMOS和IBD可分别表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaytwj3QUnMkD6EC232oWVY2dyYaKoycqheOQuycicwUBjlOGP2IfHNdQ/640?wx_fmt=png)

式中：RBD为体二极管导通电阻；Vth\_BD为体二极管的拐点电压。  

该阶段的导通损耗由 SiC MOSFET 导电沟道的导通损耗以及体二极管的导通损耗Pcond\_BD 组成，计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaSicCuLymNg82ZhnBrm1JicLqnUV1KzbwkjBibkMk7OkFef27T9UsaPuicg/640?wx_fmt=png)

死区时间内，Si IGBT 和 SiC MOSFET 导电沟道均关闭，此时电流全部流经 SiC MOSFET体二极管，死区损耗Pcond\_BD\_dead的计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa6icHLXYGJj87XGibHH8mOWZpT71ZMs6b1CjY49ITpXaHHI9gsnVe7g0A/640?wx_fmt=png)

2）开关损耗模型。本文基于双脉冲测试平台得到混合器件的开通损耗随开通延时Ton\_delay的变化曲线，如图A2 所示。各器件的开通损耗计算公式分别如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaic4iaHedxLselDRtgvTHUtOEshsyoDibS1avc13ETsT4TYgqG37SqPPXQ/640?wx_fmt=png)

式中：Eon\_hard\_MOS和Eon\_hard\_IGBT分别为 SiC MOSFET 和 Si IGBT 的硬开通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSan51AT2PM5fJsNpjyXkYcJrFhZD4DdRdWmAAia8Mj0KjlR682NpUd75A/640?wx_fmt=png)

混合器件的关断损耗与关断延时Toff\_delay的关系如图 A3 所示。各自的关断损耗计算公式分别如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSabPuEvcKrA8LohJaf7xIyVo4eVCf5zvb4DdSic3icd6xMb0JBgqUZUhYw/640?wx_fmt=png)

式中：Eoff\_hard\_MOS和Eoff\_hard\_IGBT分别为 SiC MOSFET 和 Si IGBT 的硬关断损耗。

与导通损耗建模思路一致，本文将逆变器单个基波周期分成 4 个阶段进行开关损耗分析：

阶段 1：仅 SiC MOSFET 导通，混合器件总开关损耗即为 SiC MOSFET 的硬开关损耗Eon\_hard\_MOS与Eoff\_hard\_IGBT 。

阶段 2：混合器件内部由 SiC MOSFET 和 Si IGBT 共同分担电流，因此混合器件的总开关损耗由两个器件的开关损耗组成，具体公式如式（A15）—（A18）所示。

阶段 3、4：在负载电流反向导通阶段，由于死区时间的存在，SiC MOSFET 为零电压开通关断，因此混合器件的总开关损耗仅为体二极管所产生的反向恢复损耗Err\_BD。根据不同负载电流下的反向恢复损耗数据可以拟合得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaTy4Hib33v3vomaXFPoLdnAOrezZWDOvo2selTA3PAD33icT3vyRgth4Q/640?wx_fmt=png)

式中：a 、b 、c为拟合得到的系数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaFG1f6XmYYicIRSQ1Hw9k2OrR586yIVUofuEnjhyNetcjEb05qXXe50w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaibnFiaibDoErtPMNgkecbHHnM4s8grhVxlqV5zZeGp1y35kRqhq8gfbuw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaGdjGibIxrMb2veoLQBMjc2ibGicGsj9DKZKtn1G8j1MZOActYVYOyjHyA/640?wx_fmt=png)

当混合器件处于健康状态时，逆变器仅在过载时进行模式切换。首先通过老化进程判断模块给出判断条件为额定电流 IF\_N，再通过热电耦合计算模块配合模式切换模块进行判断选择。当负载电流 IF小于 IF\_N 时，模式切换控制器选择开关模式 1 运行；当 IF大于 IF\_N 时，主动切换到开关模式 2 运行，以提高逆变器运行的可靠性。

当混合器件处于非健康状态时，模式切换的方案如下。老化进程判断模块给出的判断条件分别为额定电流 IF\_N 和开关模式 1 的安全工作区边界值 IF\_limit。当 IF＜IF\_limit 时，逆变器处于开关模式 1 的安全工作区内，此时无需进行模式切换；当 IF\_limit≤IF＜IF\_N 时，控制器需主动切换到开关模式 2 运行，并将逆变器的安全工作区扩大至区域 D，保证逆变器不降额运行；当 IF≥IF\_N 时，应主动切换到开关模式 2 运行，并将安全工作区进一步扩大至区域 E，尽可能提高逆变器的过载能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa9LZRRia1fpxCZJLcXCiaKlofrQCJ26qyq5jKiaRq2sjdVEicCuh0C0usPA/640?wx_fmt=png)

为了验证本文所提混合器件全寿命周期内的逆变器安全工作区及多开关模式切换策略的有效性，搭建了图 D1 所示的单相逆变器实验平台。该平台包括直流电源、DSP 控制板、单相全桥逆变器、负载以及示波器。其中全桥逆变器各桥臂采用由 1200 V/25 A 的 Si IGBT（IGW25N120H3）与 1200 V/12.5 A 的 SiC MOSFET（C2M0160120D）并联组成混合器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSazJg1dXNSZ81rgZbyzmWs40ZIduQCxQgY4Wz8rDhR5HrFMzKQSYNe3A/640?wx_fmt=png)

如图 D2 所示，在混合器件健康状态下（R\*th\_IGBT =1 p.u.， R\*th\_MOS=1 p.u.），选取工作点a1—e1，覆盖开关模式 1 和开关模式 2 下逆变器安全工作区内外及其边界。其中 a1的负载电流为 25 A，b1的负载电流为 32.2 A，c1 的负载电流为 33A，d1 的负载电流为 34.4 A，e1的负载电流为 35 A。在混合器件非健康状态下（Rth\_IGBT=1，Rth\_MOS=1.3），按照同样思路选取工作点 a2~e2，其中 a2 的负载电流为 25 A，b2 的负载电流为 30.5 A，c2的负载电流为 33 A，d2的负载电流为 33.5 A，e2的负载电流为 35 A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa1U2yI2e9m3PRlZRiblzk3qrLDROodbzSL0UV8tiaaTllUxUicEicvXL2IQ/640?wx_fmt=png)

如图 D3 所示，分别在混合器件健康和非健康状态下选取工作点，涵盖所有模式切换对应的区域。其中 a3的负载电流为 25 A，b3的负载电流为 32.2 A，c3的负载电流为 34.5 A；a4 的负载电流为 25 A，b4的负载电流为 30.5 A，c4的负载电流为 32.2 A，d4的负载电流为33.5 A。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)