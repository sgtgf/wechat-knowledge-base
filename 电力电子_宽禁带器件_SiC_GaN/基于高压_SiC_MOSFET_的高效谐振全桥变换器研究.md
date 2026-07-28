# 基于高压 SiC MOSFET 的高效谐振全桥变换器研究


> 原文地址: [https://mp.weixin.qq.com/s/pqYtr2Zy-xqjY-ezQLPk5g](https://mp.weixin.qq.com/s/pqYtr2Zy-xqjY-ezQLPk5g)

文章来源：大功率变流技术

作者：刘学超 1， John Mookken2，黄建立 1，马卓斌 1（1. 科锐香港有限公司，中国 香港特别行政区； 2. 科锐公司，美国 北卡罗来纳州 27703）

摘　要：对谐振全桥变换器而言 , 利用 SiC MOSFET 能提高开关频率，达到增大功率密度、降低系统成本、提高效率及简化拓扑电路的目的。文章研究了一种基于第三代 SiC MOSFET 的零电压 (ZVS)LLC 谐振全桥 DC/DC 变换器，利用 Cree 公司 1 000 V/65 mΩ 高压 SiC MOSFET 设计出高频、高功率密度 20 kW ZVS LLC 谐振隔离全桥变换器并进行了样机研制。实验结果表明，该变换器的开关频率范围扩大到 180 kHz 至 400 kHz，最高效率可达到98.4%。该方案能广泛应用于高压直流电源、感应加热、电动汽车充电等三相隔离新能源领域。

关键词：碳化硅；谐振全桥变换器；零电压开关；高功率密度；高效率

0\. 引言

目前，在三相中大功率隔离式功率变换电路中，三相功率因数校正后的直流母线电式为 600 V 至 800 V，后级 DC/DC 部分主要有两种软开关拓扑 ：三电平直流变换器和交错式两电平直流变换器。相比碳化硅（SiC）MOSFET 软开关拓扑，传统 Si 基拓扑都会带来成本增加及线路设计复杂问题；同时由于使用过多的开关器件，降低了整体的可靠性。本文利用新一代 SiC MOSFET设计出高频 ZVS LLC 谐振全桥 DC/DC 变换器，由于SiC MOSFET的高阻断电压、快速开关及低损耗等特点,不仅简化了高压输入隔离 DC/DC 变换器的拓扑，而且可提高频率、增加效率并降低开关损耗。

1\. 基于SiC MOSFET拓扑的高压ZVS LLC谐振全桥DC/DC变换器

本文利用 Cree 公司第三代高压 SiC MOSFET 设计出一款高压高频 ZVS LLC 谐振全桥 DC/DC 变换器（图 1），它采用传统 H 型全桥电路实现高压输出隔离变换，其中变压器 T1、谐振电感 Lr 和谐振电容 Cr 组成串联 LLC谐振回路，通过开关频率的调制实现恒压（或恒流）输出。二次侧输出电压较高，可采用二极管全波整流或全桥整流方式。由于谐振 LLC 电路增益为频率调制 , 根据输入电压及负载条件该变换器有 3 种工作模式，即：fs = fr，fs > fr 和 fs <fr（其中 fs 为工作频率，fr 为谐振频率）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicELibhx1nofTd8vSwlEadXvT2K2yF1fsTia8nlGql5OibmrhEcbl4ceOWg/640?wx_fmt=png&from=appmsg)

1.1 工作模式一

工作在谐振点，即 fs = fr，此时在额定输入、输出电压下能实现最高效率工作，变换器实现 ZVS 开通、近似 ZCS 关断；每半个周期完成一次完整的功率传送工作。在此期间，谐振半周正好完成。在开关半周结束时，谐振电感电流值 ILr 等于磁化电流值 ILm，同时整流器输出电流为零，谐振电路达到单位增益。鉴于此，变压器设计时，其匝比配合该条件下的额定输入及输出电压来设计。比如 20 kW 样机变换器，为实现最佳效率点，其变压器在额定输入电压为 700 V、输出电压为 500 V的前提下进行设计。

1.2 工作模式二

工作在谐振点右边，即 fs > fr，变换器工作在高于谐振频率的降压状态，其特点是高频率工作可以减小一次侧励磁电流有效值，从而降低环流带来的导通环流损耗。但此时 MOSFET 和输出二极管工作在硬关断状态，会增加关断损耗。由于 fs > fr，每半周期只完成部分功率传送工作。谐振半周未完成，且受另一半周期开关动作影响，增大了一次侧开关管关断损耗，二次侧的整流二极管硬换向。输入电压较高、需降低增益或降压时，变换器运行于该模式。在 20 kW 样机设计中，工作模式二发生在输出电压为 300~500 V 的工况下。

1.3 工作模式三

工作在谐振点左边，即 fs < fr，变换器工作在低于谐振频率的升压状态，输出二极管实现零电流关断ZCS，开关管关断瞬间主要存在励磁电流的较小关断损耗。该工作模式主要缺陷在于一次侧励磁电流有效值会增加，从而在一次侧产生环流损耗，该环流损耗并不传输能量同时会在主变压器、电感以及开关管上产生一次侧导通环流损耗和温升问题。由于 fs < fr, 仅半周期就完成整个功率传送工作。谐振半周完成，且谐振电感电流 ILr 达到磁化电流 ILm, ILm 继续在回路中工作直至开关半周完结 , 因此会在一次侧产生环流损耗，而二次侧二极管则零电流开关运行。当输入电压较低、需增加增益或升压时，变换器工作在模式三下。在 20 kW 样机设计中，工作模式三发生在输出电压为500~550 V 的工况下。

谐振 LLC 变换器无论在哪种工作模式或负载条件下都能实现 ZVS 开通，同时关断电流都处于低于峰值电流的状态，此时 MOSFET 损耗最小（特别是在工作模式一和模式二下）、效率较高。

2 . 与传统Si基高压拓扑DC/DC变换器的比较

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicBBHoxHkZUUyk9jB76quGiaCrWruGKg3BdIrK2EN0RAicNJAd6HpgExag/640?wx_fmt=png&from=appmsg)

由于拓扑应用不同，采用 650 V Si MOSFET 的方案在每个开通时刻有 2 个 MOSFET 同时导通，所以每个开通状态实际等效导通损耗比采用 1 000 V SiC MOSFET的全桥拓扑的大。表 1 比较了高压输入 DC/DC 变换器新方案（图 1）与传统方案 ( 图 2 和图 3）中所用的 3 种 TO-247 封装 MOSFET 主要技术参数，其中图 1 中 SiC MOSFET 型号为 C3M0065090D，图 2 和图 3 中 Si MOSFET 型 号 分 别 为 SPW47N60CFD 和IPW65R110CFD。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic57IlKPFrWGTYbWSGIk0T9lXKO4aRZDRZhb32opkapNEUcpM5zqIA9Q/640?wx_fmt=png&from=appmsg)

更重要的是，高压 SiC MOSFET 在软开关桥式线路上具有以下明显的优势：

（1）由于 SiC MOSFET 阻断电压高，因此可以简化拓扑设计，电路从复杂的三电平变为两电平全桥电路。

（2）SiC MOSFET 具有极短的体二极管反向恢复时间 (trr) 及极少的反向恢复电荷 (Qrr)，便于实现 LLC 谐振电路宽频范围工作。额定电流相同时，SiC MOSFET寄生二极管反向电荷只有同等电压规格 Si MOSFET 的5%。对于桥式电路，特别当 LLC 变换器工作在频率高于谐振频率和移相电路硬关断时，这个指标非常关键，它可以减小死区时间并降低体二极管反向恢复带来的损耗和噪声，从而提高开关工作频率。工作频率的提升便于实现宽输入和宽输出隔离 LLC 变换，而这恰是目前Si 基三电平方案所欠缺的主要方面（不能实现整个输入输出范围的谐振变换）；

（3）寄生电容（如 Ciss，Coss 及 Crss） 容值小，使得器件能快速开关，从而减少关断损耗，因此开关性能更好，适用于高频开关变换器；

（4） 较短的导通时间 (tdon) 和关断延迟时间 (tdoff)以及较低的 Qrr，使之能承受更短的死区时间，从而降低绕组回流损耗，达到提高频率和增加效率的目的；

（5）较低的栅极总电荷 (Qg)，使器件在高频应用时栅极开关驱动损耗更低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicd1uQxiab4PfBjI4FO2VJdY2kudGkmLyyFfVtfDyUJ8yHeNXDacicpnRg/640?wx_fmt=png&from=appmsg)

图 4 示出谐振频率 fr=200 kHz 时 20 kW LLC 电路直流增益计算值。总谐振电路参数为 Lm=75 mH，Lr=16 µH，Cr=35 nF；输入电压为 650~750 V，输出直流电压为 300~550 V。由于 SiC MOSFET 具有低开关损耗和体二极管超低反向恢复损耗，采用 SiC MOSFET 方案后，其所允许的工作频率范围更宽（180~400 kHz）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicqZpUg0aOerZDoiafI6jq3S7wA9g5xicKdxibG4ibFugST8CAapZDFaGdAA/640?wx_fmt=png&from=appmsg)

表 2 比较了高压输入 DC/DC 变换器新方案与传统方案主要的元器件差别。可以看出，基于 SiC MOSFET的高频 DC/DC ZVS LLC 谐振全桥变换器，不仅谐振频率高（200 kHz）、谐振电路尺寸小且元器件数量少 , 而且驱动方案简单，不需要额外均压或平衡电路，在高频应用时能带来低成本的优势。

3\.  损耗分析和样机实验数据

利用 SiC MOSFET 设计制作 20 kW ZVS LLC 谐振全桥变换器样机，其输入电压为 DC 650~750 V，输出电压为 DC 300~550 V，输出电流为 35 A。图 5（a）示出该变换器方案样机，其尺寸为 275 mm×220 mm×65 mm；图 5（b）为其原理图，每组开关由 2 个 C3M0065090D型 SiC MOSFET 并联而成，输出端二极管 DR1 及 DR2 采用 1 200 V SiC 二极管实现全桥整流输出，主变压器采用 2 颗 PQ6560 并联，谐振电感为 2 颗 PQ3540 串联，系统利用 2 个 12 W 风扇进行散热。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicvCcZbcandnWpopQdKHHxFZlRFpY5yYgsibXlTzaVLQKo1Q5UzicSJ4gQ/640?wx_fmt=png&from=appmsg)

3.1 实际波形

图 6 示出 20 kW ZVS LLC 谐振全桥变换器样机实测波形，其中蓝色曲线为 Vo（400 V/ 格 )、红色曲线为 Vds（400 V/ 格）、绿色曲线为 ILr（20 A/ 格）、黄色曲线为 Vgs（10 V/ 格）、时基为 2 μs/ 格。图 6（a）示出额定输入电压为 700 V 时变换器工作情况，此时fs =fr=200 kHz，输出为 500 V/35 A，一次侧电流 ILr 为纯正弦波，呈最佳工作状态，效率达 97.8%。图 6（b）示出输入电压为 650 V 工况下变换器工作情况，此时输出为 400 V/35 A，开关频率高于谐振频率（fs =300 kHz），变换器实现降压工作。图 6（c）示出输入电压为 750 V时变换器工作情况，此时输出为 550 V/35 A，开关频率低于谐振频率（fs< fr），变换器实现升压工作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic2Rs8zSdLbpFNVdpXTwZDuQriaLebbqFqZ4CmVNAVJfJFKICRYhg1HSw/640?wx_fmt=png&from=appmsg)

3.2 效率与热性能

图 7 示出该变换器的效率曲线及热成像的实测数据。由图 7（a）可以看出，在输入电压为 700 V、输出电压为 500 V 的半载工况下谐振 LLC 电路工作在额定谐振状态，效率最高到达 98.4%（谐振点），此时开关工作频率等于谐振频率，实现完全谐振状态工作；在输入电压为 650 V、输出电压为 400 V 工况下，变换器工作在降压模式（谐振点右边），此时为 ZVS 开通、硬关断，由于存在硬关断且开关频率大于谐振频率，所以效率较低；在输入电压为 750 V、输出电压为 550 V 工况下，变换器工作在升压模式（谐振点左边），此时为ZVS 开通、近似 ZCS 关断，但一次侧存在较大环流损耗，因此效率也低于谐振工作状态。

图 7（b）和图 7（c）示出输入电压为 750 V、输出为 550 V/35 A、满载（20 kW）工况下工作 1 h 后的热性能测试结果。测试过程中使用了 2 个 12 W 独立的风扇进行散热，SiC MOSFET 及其散热片温度都在65℃内（图 7（c）），温度最高的样机组件是上端变压器，但其温度低于 100℃（图 7（b）），这主要与风道和变压器设计有关。高频工作时，磁性器件的高频损耗会增加，采用传统 3C95 高频铁氧体需要考虑磁件由于频率增加带来的涡流损耗和集肤效应等问题，因此该变换器研制时采用了多股利兹线和分布气隙等实用技术来降低高频带来的额外磁件损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicsTOO6As8GWLFjAS4bwRkgpfvoRYsrsI57Bf16F0VCsYNiaZm12qajAw/640?wx_fmt=png&from=appmsg)

4\. 结语

文章研究了基于新一代高压 SiC MOSFET 软开关谐振 DC/DC 全桥变换器，设计了工作频率为 180 kHz~410 kHz 的 20 kW 谐振变换器。样机实验数据证明了SiC MOSFET 能简化高压输入隔离 DC/DC 变换器拓扑且具备高效能、高可靠性等明显优势，适合于中、大功率领域应用。SiC MOSFET 由于具有耐压高、损耗低和体二极管反向恢复时间短等特点，在新能源设计中将起到越来越重要的作用，对具有高效、高功率密度和高电压等要求的新能源系统优化带来可能。虽然目前 SiC MOSFET 器件成本仍高于 Si MOSFET 的，但采用 SiC MOSFET 的变换器具有高频化、拓扑结构简化等优势，减少了无源器件数量，继而能降低整机成本。在车载系统等对散热要求很高的场合，采用 SiC MOSFET 对于散热的优化效果也十分显著。当然，在 SiC MOSFET 应用时还存在较高体二极管导通压降、高热阻、高 dv/dt、EMI 干扰、器件可靠性、驱动电路设计及 PCB 板布局等具体问题，这是后续研究的主要课题和难点。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)