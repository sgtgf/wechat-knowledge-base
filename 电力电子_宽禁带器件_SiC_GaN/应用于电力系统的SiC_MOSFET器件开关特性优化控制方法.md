# 应用于电力系统的SiC MOSFET器件开关特性优化控制方法


> 原文地址: [https://mp.weixin.qq.com/s/EYjLoT9GpmwW9jEUSkuYOA](https://mp.weixin.qq.com/s/EYjLoT9GpmwW9jEUSkuYOA)

**文章来源：**中国电机工程学报

**作者:**董振邦 1，徐云飞 1，李卫国 1，邱宇峰 1，杨霏 1，赵成勇 2

(1．先进输电技术国家重点实验室(全球能源互联网研究院有限公司)；2．华北电力大学电气与电子工程学院)

**摘要：**SiC MOSFET 器件具有电压等级高、功率密度大、耐高温的特点，已经逐渐应用到电力电子变压器等高压大容量电力电子装置中。然而，SiC MOSFET 高速开关过程对寄生参数非常敏感，容易导致严重的电压电流尖峰、开关振荡等现象，EMI 问题突显，这将严重影响设备运行的稳定性和安全性。针对 SiC MOSFET 器件的应用问题，提出一种分级驱动控制方法，主动对开通过程的 di/dt 和关断过程的du/dt 进行控制，从而优化SiC MOSFET 的开关特性。进而，基于CREE公司的 CAS300M17BM2 SiC MOSFET 半桥模块，搭建仿真模型和模组试验平台，开展理论分析和损耗计算，并通过仿真与试验验证该方法的有效性。

**关键词：**SiC MOSFET；分级驱动控制；开关特性；损耗计算；电力电子变压器

**0 引言**

SiC MOSFET 作为一种新型宽禁带的第三代功率半导体器件，具有高压、大功率、高温、低开关损耗等特性，突破了硅基器件的局限性\[1-2\]。SiC MOSFET 应用于电力系统高压大容量电力电子装置中，可显著降低功率模块的级联数量，简化系统拓扑结构，减小电力电子装置的重量、占地面积及散热装置的容量，从而提高装置的功率密度和效率\[3-6\]。这些优异的性能符合高压大容量电力电子装置和设备的发展趋势，为未来智能电网的发展，提供强有力的驱动力\[7\]。

然而，SiC MOSFET 开关过程中，高开关速度引起的高 du/dt 和 di/dt 与回路杂散参数作用，会导致明显的电压电流冲击、波形振荡现象，以及电磁干扰等问题\[8-11\]。这些问题一方面严重影响了电力系统设备的安全可靠性，加大了驱动保护的设计难度；另一方面，需要增设阻容电路，增加了损耗及电路结构的复杂性。在电力系统应用中，SiC MOSFET 可作为高压大容量电力电子变压器(power electronic transformer，PET)、动态无功补偿等装置的开关器件，其开关频率通常较低。因此，在电力系统应用环境下，SiC MOSFET 的通态损耗是器件损耗的主要部分，开关损耗占比较小，这为应用于电力系统的 SiC MOSFET 器件开关特性优化提供了条件\[12\]。

文献\[13-15\]基于对 SiC MOSFET 开关等效电路的研究，建立了 SiC MOSFET 的分析模型，但是没有提出有效改善 SiC MOSFET 开关特性的方法。文献\[16-18\]通过仿真和实验的方法研究了驱动电阻、栅源极电容、栅漏极电容、漏源极电容、共源极电感等寄生参数对开关暂态特性的影响，为从优化寄生参数方面改善开关性能提供了实验基础。文献\[11\]对SiC MOSFET的模型进行了RLC等效电路分析，提出并联 RC 的缓冲电路改善开关特性，抑制电压振荡，但是该方法大幅增加了损耗。文献\[9\]提出采用不同电压等级的金属氧化物压敏电阻吸收能量的方法降低过冲电压，该方法相当于只是对开关过程的能量消耗进行转移。针对冲击电流峰值大的问题，文献\[19\]提出利用固态断路器等 3 种过流保护方法，但是没能从减小过流峰值本身解决问题。文献\[20\]提出通过调节外部米勒电容以及增加di/dt 检测来控制 du/dt 和 di/dt，加大了电路的复杂性。文献\[21-22\]提出采用不同的有源栅极驱动来提高开关性能，但这些方案需增加驱动电源个数和检测控制电路。以上这些方法，多数是通过在功率管侧增加辅助电路被动地应对问题，既增加成本，也增加了电路的复杂性；虽然有少数文献通过增加辅助检测电路，从驱动控制方面进行主动调节，但可行性较差，不能解决在电力系统领域的应用问题。

本文以驱动控制为切入点，提出分级驱动控制方法，通过控制分级驱动电压的幅值及其持续时间，降低 di/dt 和 du/dt，有效应对这些次生问题，优化 SiC MOSFET 的开关特性。该方法可以灵活地应用于不同类型的开关器件，具有很强的适用性和可行性。本文基于 CREE 公司 CAS300M17BM2 的SiC MOSFET 半桥模块，搭建仿真模型和模组试验平台，对 SiC MOSFET 的开关特性进行优化，并对优化后的开关损耗进行分析\[23\]。最终，通过试验验证该方法的有效性。

**1 SiC MOSFET 半桥模块建模**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_000_1d3eafbafe38.png)

建立SiC MOSFET 模块的分析模型，如图 1 所示。图中：Udc为直流母线电压；Cbus 为母排支撑电容；L1、L2 为母排杂散电感；L 为负载电感；Ld1 和Ld3、Ls1 和 Ls3、Lg1 和 Lg3分别为漏极寄生电感、源极寄生电感、栅极寄生电感；Cgd1 和 Cgd2、Cgs1 和Cgs2、Cds1和 Cds2 分别为栅漏极电容、栅源极电容、漏源极电容；Ld2 和 Ld4、Ls2 和 Ls4、Lg2 和 Lg4 分别为漏极、源极、栅极与主电路之间的引线电感；Rg1和 Rg3 为栅极内部电阻；Rg2和 Rg4为栅极外部驱动电阻；Ug1 和 Ug2 为驱动电源。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_001_25c292890ecb.png)

SiC MOSFET 半桥模块的暂态过程，主要对下管的开关过程进行分析，半桥模型的上管加恒定5V 的驱动电压，使其保持关断。此外，驱动设计多紧贴 MOS 管，从而减少驱动回路电感，且漏极电感上电压电流的变化率比栅极电感上大得多，因此可以忽略栅极电感\[16\]。因而，图 1 所示的分析模型可以简化为图 2 所示的分析模型。图 2 中，Lds1 Ld1  Ld2  Ls1  Ls2，Ld  Ld3  Ld4，Ls  Ls3  Ls4，Rg Rg4  Rg3，Cgd Cgd2，Cgs Cgs2，CF Cds1，Cds Cds2，Ug  Ug2。

**2 SiC MOSFET 分级驱动的暂态分析**

**2.1 分级驱动的开通过程分析**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_002_a0ea1cb3ddb0.png)

分级驱动 SiC MOSFET 开通过程示意图如图 3所示。图中：Vgon 为 20V 的正向驱动电压；Vgoff为5V 的负向驱动电压；Vth 为 2.5V 的阈值电压；Vmid为分级驱动电压；Tmid 为 Vmid 的持续时间；Vmil 为米勒平台电压；I0 为负载电流；Vgs 为栅源极电压；Vds 为漏源极电压；id 为漏极电流。

开通过程的问题主要在于 id 的尖峰及振荡严重，id 的上升过程对应于图 3 中的 t2—t3 阶段。以下将着重分析图 3 中的 t1—t2、t2—t3阶段，通过控制 Vmid 及 Tmid，降低开通过程的 di/dt，减小冲击电流尖峰及抑制电流振荡。

t1 时刻前，SiC MOSFET 处于稳定关断状态(t1时刻可看成开通过程的相对零点时刻)。

t1—t2 阶段：SiC MOSFET 的 Vgs从 Vgoff上升到Vth的过程。此阶段，Ug处于 Vmid平台，由于 Vgs  Vth，该阶段 MOS 管没有导通。驱动电源通过 Rg 主要给Cgs 充电，该阶段 Vgs 随时间的变化如式(1)所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_003_0e42c4f35f4b.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_004_27657d8eca60.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_005_4869b78777cb.png)

t2—t3 阶段：Ug 仍处于 Vmid 平台，此阶段 Vgs大于 Vth，器件逐渐导通，id 随着 Vgs的上升逐渐上升，其关系如式(3)所示\[24\]。Vds 因电流的变化在寄生电感上产生压降而有所下降，但仍近似于母线电压。将式(3)、(4)代入式(5)，且由式(6)所示 Vgs 在 t2时刻的初始值，可得 Vgs 与时间的函数关系如式(7)所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_006_9e9a63313942.png)

C0 关于 Vmid 的典型值如表 2 所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_007_4e7ca46ad9db.png)

由 SiC MOSFET datasheet 中的转移特性曲线，可近似得到 id 与 Vgs 的函数关系：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_008_9c833df3a624.png)

在 Udc800V，I0260A，常规驱动的双脉冲测试下，由式(8)可知，Vgs 约为 7.75V 时，id 达到负载电流，继而 id 进入不受 Vgs 控制的 t3—t4 阶段。在Vmid 取不同值时，Vgs由 Vth向 Vmid趋近于 7.75V 时所需的时间 tm如表 3 所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_009_a62f1b1be907.png)

由表 1 和表 3 中 t2 和 tm的总时间，且考虑驱动信号 100ns 的下降沿时间，可以得出：Vmid 处于8~10V、Tmid 处于 200~300ns 的范围内时，能够有效降低 di/dt。

由文献\[25\]可知，开通过程中过冲电流 Irp 与di/dt 之间的关系如式(9)所示。  

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_010_0ed3acb9468b.png)

式中 L 为主功率回路中的总电感。

由式(9)可知，在 did/dt 减小的情况下，可以降低 id 的过冲电流峰值。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_011_c7dc8fdf14ed.png)

在 Udc800V，L40H，I0260A，Rg6.2，Tmid200ns，Vmid 取不同值时开通电流仿真波形如图 4 所示。在这种情况下 di/dt、上升时间 tr、电流峰值 Ip 及电流振荡的调节时间 tson 仿真结果如图 5所示。从图 5 可以看出，Vmid 在 8~10V 的范围内改善开关特性最为明显，与前文的分析结果一致。在此范围内，di/dt 降低 58.5%~80.5%，tr增加 65.51%~70.2%，Ip 减小 17.04%~29.19%，tson 减少 20.24%~48.04%。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_012_10495d9a375b.png)

在同样的仿真条件下，Vmid 为 10V，不同 Tmid时开通电流仿真波形如图 6 所示。此情况下 di/dt、tr，Ip 及 tson 仿真结果如图 7 所示。从图 7 可以看出，Tmid在200~300ns的范围内改善开关特性最为明显，与上文的分析结果一致。在该区间内，di/dt 降低58.5%~71.3% ， tr 增 加 70.2%~101.7% ， Ip 减 小27.32%~29.19%，tson 减少 48.04%~77.58%。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_013_eb17a100f808.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_014_18836666bc3d.png)

t3—t4 阶段：Vgs 将继续上升至米勒(Miller)平台电压，Vds 迅速下降，直至降到通态压降结束。

t4—t5 阶段：Vgs 从米勒平台电压上升至 Vgon，Vds 和 id 趋于稳定。

**2.2 分级驱动的关断过程分析**  

采用分级驱动的关断过程开关波形示意图如图 8 所示。关断过程的问题主要在于 Vds 尖峰及振荡严重，Vds的变化过程对应于图 8 中的 t7—t8 阶段。以下将着重分析图 8 中的 t6—t7、t7—t8阶段，通过控制 Vmid 及 Tmid 降低关断过程的 du/dt，减小过冲电压尖峰及抑制电压振荡。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_015_80112dc09a5a.png)

t6 时刻前，SiC MOSFET 处于稳定导通阶段(t6时刻可看成关断过程的相对零点时刻)。

t6—t7 阶段：该阶段是 Vgs从 Vgon 向 Vmil 的变化过程，SiC MOSFET 处于线性区，电流电压几乎没有变化。从 CAS300M17BM2 的 datasheet 中电容与漏源极电压的关系曲线，可知反向传输电容 Crss(即Cgd)在 Vds 约为 5.5V 左右时，由 4nF 左右急剧变为0.3nF。Cgd 随 Vds 的变化而变化\[13-14\]，由此推断此时 Vds 达到了它的一个变化节点，即 Vgs 达到了Miller 平台电压 Vmil(5.5V  Vth  8V)。此后，栅极将主要为 Cgd 反向充电，从而不断抬升 Vds 的电压值。此阶段 Vgs 的变化如式(10)所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_016_4c49a3d4d000.png)

Vmid取不同值时，Vgs达到 Vmil的时间 t7如表 4所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_017_8ef7d0a8ad85.png)

t7—t8 阶段：Ug 处于 Vmid 平台，Vgs由 Vmil 向 Vth变化，此时栅极主要给 Cgd 反向充电，Vds 将急剧上升。Vgs 关于时间的变化如式(12)所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_018_1ee26f40964c.png)

由式(12)可知，当 2.5V  Vmid  20V 时，Vgs 不能达到阈值电压，还会增加关断延迟时间。由式(13)可知，tn 是关于 Vmid 的单调递增函数。在 Vmid 取不同值时，Vgs达到 Vth 的时间 tn 如表 5 所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_019_930732ee8730.png)

由表 5 可知，当 Vmid  0V 时，下降时间与常规驱动时相差不大，降低 du/dt 的效果可以进一步提高；当 Tmid  2V 时，Tmid 需达到 300ns 以上。SiC MOSFET 的开通和关断是一个互为反向的对称过程\[11\]，并考虑驱动信号 100ns 的下降沿时间，由表 4、5 可知，Vmid 在 0~2V，Tmid 为 200~300ns 的范围内降低关断过程的 du/dt 最为有效。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_020_db3cee40a60d.png)

在 Udc  800V，L  40H，I0  260A，Rg  6.2，Tmid  200ns，不同 Vmid 时的关断电压仿真波形如图 9 所示。该条件下，du/dt、下降时间 tf、过冲电压峰值 Vp 及电压振荡的调节时间 tsoff 仿真结果如图 10 所示。从图 10 可以看出，Vmid 在 0~2V 的范围内效果最为明显，与上文的分析结果一致。在此区间内，du/dt 降低 25.6%~42.44%，tf增加 72.51%~128.08%，Vp降低 8.26%~8.81%，tsoff减少 64.95%~73.47%。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_021_a4a40b88168c.png)

在同样的仿真条件下，Vmid 为 0V，不同 Tmid时关断电压仿真波形如图 11 所示。该条件下，du/dt、tf、Vp 及 tsoff的仿真结果如图 12 所示。从图 12 可以看出 Tmid 在 200~300ns 的范围内效果最为明显，与前文的分析结果一致。在此区间内，du/dt 降低26.1%~26.2%，tf 增加 65.52%~72.51%，Vp 减小8.81%，tsoff减少 64.95%~70.09%。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_022_d58d233ed3aa.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_023_615a9066f817.png)

t8—t9 阶段：该阶段 id 将从近似负载电流 I0 降至零。由文献\[26\]可知：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_024_296a429366fc.png)

式中：tif 为电流下降时间；gfs 为 SiC MOSFET 的跨导。  

由式(14)可知，tif随着 Vmid增加而变大。由此可知，关断过程采取分级驱动控制也能够增加电流 id的下降时间，从而减小 did/dt。关断过程中的过冲电压是由于电流变化与主功率回路总的电感导致的，如式(15)所示，did/dt 的降低可以使过冲电压下降。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_025_404ef0e5fd28.png)

t9—t10 阶段：Vgs 进一步下降至负向驱动电压Vgoff，Vds 和 id 趋于稳定，至此关断过程结束。

从 2.1、2.2 节的分析可以看出，通过分级控制Vmid 和 Tmid 能够降低开关过程的 di/dt 和 du/dt，从而减小冲击电流和冲击电压的峰值，抑制电压电流的振荡。原理分析和仿真结果一致，在开通过程中，Vmid 和 Tmid 分别在 8~10V 和 200~300ns 的范围内，改善开通特性效果最为明显；在关断过程中，Vmid和 Tmid 分别在 0~2V 和 200~300ns 的范围内，改善关断特性效果最为明显。

**3 SiC MOSFET 分级驱动的损耗分析**

**3.1 开关损耗分析**

降低开通过程的 di/dt 和关断过程的 du/dt，会带来开关过程时间的增加，势必会导致开关损耗的增加。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_026_080e2bc2bfb1.png)

在 Udc  800V，L  40H，I0  260A，Rg  6.2，Tmid  200ns 的情况下，Vmid 取不同值时对开关损耗的影响如图 13 所示。从图 13 可以看出，在开通过程对应 8~10V 的范围内，开通损耗增加了 2.25~2.52 倍；关断过程对应 0~2V 的范围内，关断损耗增加了 0.81~1.26 倍。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_027_2e86eb8e8f2e.png)

相同条件下，开通过程 Vmid 为 10V，关断过程Vmid 为 0V，不同 Tmid 对开关损耗的影响如图 14 所示。从图 14 可以看出，开关损耗随着 Tmid 的增加而不断增加。综合考虑优化开关特性效果以及损耗增加情况，Tmid 的取值选择 200~300ns 的范围内。

**3.2 电力系统典型应用下损耗分析**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_028_63be35164d1e.png)

为了分析分级驱动在电力系统实际应用中对SiC MOSFET 器件的损耗影响，本文对不同频率下分级驱动与常规驱动的损耗进行分析。对 PET 中的DC/DC 变换器和无功补偿中的 STATCOM 换流单元应用损耗进行分析，计算过程详情见附录 A、B。常规驱动 SiC MOSFET 的应用损耗如表 6 所示，分级驱动 SiC MOSFET 的应用损耗如表 7 所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_029_a6bae8f5c13e.png)

由表 6、7 可知，DC/DC 变换器和 STATCOM换流单元不同频率下通态损耗基本不变，随着频率的增加，开关损耗逐渐增加。采取分级驱动，与未加阻容电路的常规驱动器件损耗相比，开关损耗增加，频率在 0.3~0.6kHz 时，损耗增加 0.84%~1.66%；频率在 1~3kHz 时，损耗增加 2.93%~7.51%；频率在 5~10kHz 的范围内，损耗增加 11.33%~17.68%；频率在 20~30kHz 的范围内，损耗增加 24.55%~27.99%。工程应用中为了改善换流单元器件的开关特性，通常会增设阻容吸收电路，吸收 SiC MOSFET暂态过程的能量。采用分级驱动及与其所能达到相同开关特性的阻容吸收回路的应用总损耗如表 6、7所示，从中可以看出，采取分级驱动在改善同样开关特性的情况下，虽然开关损耗会略有增加，但是应用总损耗是减少的。因此，分级驱动控制方法应用于 PET、动态无功补偿等中低频电力系统装置时，在改善开关特性的同时，还能够降低应用总损耗；同时，可以省去阻容电路，简化系统结构，减少散热装置的容量，实现紧凑化结构设计，提高设备的功率密度和效率。

**4 试验验证**

利用 CAS300M17BM2 SiC MOSFET 半桥模块进行试验验证，按照图 2 的简化分析模型搭建图 15所示的试验平台。在Udc为800V，负载电感为40H，Rg 为 6.2的工况下，进行常规驱动试验。在相同的工况下，采用分级驱动，开通过程中 Vmid 为 10V，关断过程中Vmid为0V，分别在Tmid为200ns和300ns的情况下进行试验验证。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_030_322d31e0ba5f.png)

开通和关断过程试验波形分别如图 16、17 所示，开通过程和关断过程的对比波形分别如图 18、19 所示。从试验波形及其对比波形中，可以发现分级驱动控制能够明显改善 MOSFET 的开关特性。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_031_fa2edd643ce7.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_032_66bc3c9354fc.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_033_d3031fc1176d.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_034_ac40ca8f1c08.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_035_f6ceb3138a73.png)

试验测试结果如表 8 所示，在 Tmid 采取 200 和 300ns的情况下：di/dt 降低 64.2%~65.7%，电流峰值减小14.8%~18.52%，电流的调节时间减少 44.3%~45.9%，开通损耗增加185.3%~240%；du/dt 降低50%~51.6%，电压峰值减小 10.38%~12.26%，振荡调节时间减少36.5%~47.4%，关断损耗增加 91.6%~92.5%。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_036_c4c7deb1e876.png)

此外，SiC MOSFET 与同电压等级的英飞凌 Si IGBT FF225R17ME4\_B11\[27\]的损耗对比情况如表 8所示。从表 8 可知，即使在 SiC MOSFET 采用分级驱动方法，牺牲一定程度的高开关速度来优化开关特性，其开关损耗仍要远小于同电压等级 Si IGBT。

**5 结论**  

本文主要对应用于电力系统的 SiC MOSFET器件开关特性进行优化，提出了一种分级驱动控制方法，通过主动控制分级驱动电压的幅值 Vmid 及其持续时间 Tmid，降低 di/dt 和 du/dt，优化开关特性。通过理论分析和试验验证，得出以下结论：

1）在开通过程中，Vmid 在 8~10V 与 Tmid 在200~300ns 的范围内能够有效改善开关特性；

2）在关断过程中，Vmid 在 0~2V 与 Tmid在 200~300ns 的范围内能够有效改善开关特性；

通过对 DC/DC 变换器和 STATCOM 换流单元的损耗分析，采用分级驱动控制在降低 65%和 50%的 di/dt 和 du/dt，优化 SiC MOSFET 开关特性时，虽然器件的开关损耗会略有增加，但是应用总损耗是降低的；另外，分级驱动控制可以省去阻容电路，简化系统结构，减少散热装置的容量，实现紧凑化结构设计，提高设备的功率密度和效率。

**附录 A DC/DC 变换器中应用损耗分析**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_037_04ab43b4be42.png)

采用 SiC MOSFET 的 DC/DC 变换器拓扑电路如图 A1所示。图中：Uin为输入电压；Uo 为输出电压；Cin为输入侧电容；Co为输出侧电容；iin为输入电流；io为输出电流；S1—S8是 SiC MOS 管；R1—R8 为电阻；C1—C8 为电容；N 1 是变压器的变压比。图中蓝色部分的阻容电路是工程上采取常规驱动时所增设的缓冲吸收电路。以下将该 DC/DC 变换器输入端 SiC MOSFET 采用分级驱动控制与采取常规驱动时的损耗进行对比分析。

输入电压 Uin 为 800V，驱动信号为频率 f 的方波信号，一个周期为 T，死区时间 0.1T，输入电流最大值 Im 为 260A，SiC MOSFET 的通态电阻 Rds\_on 为 16.2m。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_038_f2aca3ecfa9f.png)

DC/DC变换器的工作状态及输出电压电流波形如图A2所示。图中：Ug1,3、Ug2,4 为 SiC MOSFET 的驱动信号；VL为感性负载两端的电压；iL为输出负载电流； 为死区时间对应的弧度； 0.1T/T  2  0.2，令 t  ，将输出电流的时间段拟合为一条直线，则输出电流为

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_039_61d0af192719.png)

**附录 B STATCOM 换流单元中应用损耗分析**

H 桥 STATCOM 换流单元中，在直流母线电压 800V，输入电流最大值为 260A，功率因数 cos 为 0，调制比 m 为0.85 的情况下，SiC MOSFET 的损耗计算可参考文献\[29\]。

STATCOM 换流单元中，SiC MOSFET 的通态损耗为

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_040_797c2720ca2a.png)

式中 Vdso 为通态压降。

**参考文献**

\[1\] Ong A，Carr J，Balda J，et al．A Comparison of Silicon and Silicon Carbide MOSFET Switching Characteristics\[C\]//IEEE Region 5 Technical Conference，Fayetteville，USA，2007：273-277．

\[2\] Lemmon A，Graves R．Comprehensive characterization of 10kV silicon carbide half-bridge modules\[J\]．IEEE Journal of Emerging and Selected Topics in Power Electronics，2016，4(4)：1462-1473．

\[3\] 盛况，郭清，张军明，等．碳化硅电力电子器件在电力系统的应用展望\[J\]．中国电机工程学报，2012，32(30)：1-7．

\[4\] 盛况，郭清．碳化硅电力电子器件在电网中的应用展望\[J\]．南方电网技术，2016，10(3)：87-90．

\[5\] 钱照明，张军明，盛况．电力电子器件及其应用的现状和发展\[J\]．中国电机工程学报，2014，34(29)：5149-5161．

\[6\] 邓小川，谭犇，万殊燕，等．超高压 SiC 电力电子器件及其在电网中的应用\[J\]．智能电网，2017，5(8)：733-741．

\[7\] 李子欣，王平，楚遵方，等．面向中高压智能配电网的电力电子变压器研究\[J\]．电网技术，2013，37(9)：2592-2601．

\[8\] Lemmon A，Mazzola M，Gafford J，et al．Instability in half-bridge circuits switched with wide band-gap transistors\[J\]．IEEE Transactions on Power Electronics，2014，29(5)：2380-2392．

\[9\] Liao X，Li H，Yao R，et al．Voltage overshoot suppression for SiC MOSFET-based DC solid-state circuit breaker\[J\]．IEEE Transactions on Components ， Packaging and Manufacturing Technology，2019，9(4)：649-660．

\[10\] Chen H，Divan D．High speed switching issues of high power rated silicon-carbide devices and the mitigation methods\[C\]//IEEE Energy Conversion Congress and Exposition (ECCE)，Montreal，QC，2015：2254-2260．

\[11\] Liu T，Ning R，Wong T T Y，et al．Equivalent circuit models and model validation of SiC MOSFET oscillation phenomenon\[C\]//2016 IEEE Energy Conversion Congress and Exposition (ECCE)，Milwaukee，USA，2016：1-8．

\[12\] 李程昊，谢竹君，林卫星，等．中高频模块化多电平换流器阀损耗的精确计算方法与分析平台\[J\]．中国电机工程学报，2015，35(17)：4361-4370．

\[13\] 梁美，郑琼林，李艳，等．用于精确预测 SiC MOSFET开关特性的分析模型\[J\]．电工技术学报，2017，32(1)：148-158．

\[14\] 柯俊吉，赵志斌，谢宗奎，等．考虑寄生参数影响的碳化硅 MOSFET 开关暂态分析模型\[J\]．电工技术学报，2018，33(8)：1762-1774．

\[15\] Liu T，Ning R，Wong T T Y，et al．Modeling and analysis of SiC MOSFET switching oscillations\[J\]．IEEE Journal of Emerging & Selected Topics in Power Electronics，2017，4(3)：747-756．

\[16\] Wang J，Chung S H，Li T H．Characterization and experimental assessment of the effects of parasitic elements on the MOSFET switching performance\[J\]．IEEE Transactions on Power Electronics，2012，28(1)：573-590．

\[17\] Chen Z ， Boroyevich D ， Burgos R ． Experimental parametric study of the parasitic inductance influence on MOSFET switching characteristics\[C\]//IEEE Power Electronics Conference (IPEC)．Sapporo，Japan，2010：164-169．

\[18\] 王旭东，朱义诚，赵争鸣，等．驱动回路参数对碳化硅MOSFET 开关瞬态过程的影响\[J\]．电工技术学报，2017，32(13)：23-30．

\[19\] Wang Z，Shi X，Xue Y，et al．Design and performance evaluation of overcurrent protection schemes for silicon carbide (SiC) power MOSFETs\[J\]．IEEE Transactions on Industrial Electronics，2014，61(10)：5570-5581．

\[20\] Park S，Jahns T M．Flexible dv/dt and di/dt control method for insulated gate power switches\[J\]．IEEE Transactions on Industry Applications，2003，39(3)：657-664．

\[21\] Paredes A，Ghorbani H，Sala V，et al．A new active gate driver for improving the switching performance of SiC MOSFET\[C\]//IEEE Applied Power Electronics Conference & Exposition ． Tampa ， USA ， 2017 ：3557-3563．

\[22\] Yang Y，Wen Y，Gao Y．A novel active gate driver for improving switching performance of high-power SiC MOSFET modules\[J\] ． IEEE Transactions on Power Electronics，2018，34(8)：7775-7787．

\[23\] CAS300M17BM2 datasheet\[EB/OL\]．(2018-03-10)\[2019-03-15\]．http://www.cree.com．

\[24\] 曾正，邵伟华，陈昊，等．基于栅极驱动回路的 SiC MOSFET 开关行为调控\[J\]．中国电机工程学报，2018，38(4)：1165-1176．

\[25\] Carl N M Ho，Francisco Canales，Antonio Coccia，et al．A circuit-level analytical study on switching behaviors of SiC diode at basic cell for power converters\[C\]//IEEEIndustry Applications Society Annual Meeting ．Edmonton，Canada，2008：1-8．

\[26\] Ke Junji，Zhao Zhibin，Xie Zongkui，et al．Modeling and simulation of SiC MOSFET turn-off oscillation under influence of parasitic parameter\[C\]//Sixth Asia-Pacific Conference on Antennas and Propagation (APCAP)．Xi’an，China，2017：1-3．

\[27\] FF225R17ME4P\_B11 datasheet\[EB/OL\]．(2018-01-01)\[2019-06-20\]．https://www.Infineon.com．

\[28\] 安德烈亚斯·福尔克，迈克尔·郝康普．IGBT 模块：技术、驱动和应用\[M\]．北京：机械工业出版社，2016：221-246．

\[29\] 赵国亮．谐波电流分体补偿式静止同步补偿器研究\[D\]．北京：华北电力大学，2015．

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_041_0b930decca5e.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_042_3ade3c3d8599.jpg)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\应用于电力系统的SiC_MOSFET器件开关特性优化控制方法_images\img_043_84aa944feb13.jpg)