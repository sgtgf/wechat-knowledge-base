# 一种基于物理的 SiC MOSFET 改进电路模型

原创 李鑫  罗毅飞 SiC碳化硅MOS管及功率模块的应用 2025-02-08 15:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/gVAn6l5h8aIos0FWwhiSiA](https://mp.weixin.qq.com/s/gVAn6l5h8aIos0FWwhiSiA)

文章来源：电工技术学报

作者：李 鑫 1 罗毅飞 1 史泽南 2 王瑞田 1 肖 飞 1（1. 海军工程大学舰船综合电力技术国防科技重点实验室 武汉 430033；2. 西安交通大学电气工程学院 西安 710049）

摘要： 碳化硅（SiC）材料因其在禁带宽度、击穿电场、电子饱和速度等方面的优势，使得SiC MOSFET 具有高频、高压以及高温等优势。然而SiC MOSFET 的特殊材料、结构以及高开关速度使得开关瞬态过程中器件内部的物理机理更为复杂。传统的SiC MOSFET 模型沿用了部分硅（Si）器件的建模方法，难以准确评估器件在装置中的动静态特性。为此，该文提出一种基于物理的SiC MOSFET 改进电路模型。基于器件的工作机理，分析传统SiC MOSFET 模型的不足，并针对不足进行改进建模。电流扩散方式是影响SiC MOSFET 静态特性的重要因素，由于器件 N−漂移区较窄，导致漂移区电流扩散呈梯形，进而对漂移区电阻进行改进建模。SiC MOSFET 开关瞬态模型刻画了器件的高频应用特性，基于突变结、穿通特性以及负电压关断分别对器件结电容进行改进建模。最后基于CREE 1200V/325A的SiC MOSFET 器件进行实验，仿真与实验具有较好的一致性，验证了改进模型的准确性。

关键词：SiC MOSFET 电路模型 静态特性 瞬态特性

0\. 引言

目前的主流硅（Si）功率半导体器件受限于材料的物性极限，难以满足未来电力电子系统中大容量电能变换装置高速、高频和高温等极端工作条件要求。而以碳化硅（SiC）器件为代表的宽禁带半导体器件由于在禁带宽度、击穿电场、电子饱和速度、热导率等方面较Si 具有明显优势，使器件工作温度、开关频率、损耗等性能得到大幅提升，由此带来装置滤波电路体积、冷却系统体积等的大幅减小，进而可以大幅提升装置的功率密度、工作效率以及工作频率。然而，更高的开关速度使得SiC 功率器件开关瞬态呈现更为复杂的工作过程，精确特性表征的难度较传统Si 器件更大，封装技术较传统Si器件更苛刻。因此，为指导SiC 器件在电力电子装置中的应用及优化设计，需要一个能够准确表征SiC MOSFET 静态和瞬态特性的仿真模型。

在SiC MOSFET 器件建模研究方面，目前国内外研究主要分为行为模型、物理模型、数值模型以及混合模型（半物理模型）。行为模型因其不能够描述器件内部特性，对器件的应用指导作用较弱；如英国P. Alexakis 等建立了SiC MOSFET行为模 型，该模型由漏源电压控制电流源和定电容构成，考虑了封装寄生电感的影响，对SiC MOSFET 开关瞬态特性进行了仿真分析；V. Talesara 等通过拟合多项式函数方法对器件动态特性进行了行为建 模，该方法通过数据优化的方式达到了较高的精度。文献\[8\]采用神经网络学习的方法建立了SiC MOSFET 模型，该模型实质上仍是通过数据拟合得到的行为模型。

针对数值模型，美国B. N. Pushpakaran 等借助SILVACO ATLAS 软件建立了有限元模型，可模拟复合效应、禁带变窄、碰撞电离和晶格加热等效应。数值模型是一种较为精确的建模方法，适用于元胞和芯片级别的仿真设计及优化。

物理模型是基于器件内部载流子变化的物理机理来表征器件特性的一种模型，它利用半导体数学方程来描述器件内部载流子的变化规律，通过对这些方程的求解来表征器件的端口电气特性。物理模型不仅能够准确表征器件的工作特性，同时又能反映器件内部载流子变化的物理过程，因此更加适合用于指导器件在装置中的应用。美国Fu Ruiyun 等建立了SiC MOSFET 物理模型，通过非线性电压源和电阻网络模拟了JFET 区电流分布不均的特点，采用一组函数实现器件线性区和饱和区的静态特性表征。罗马尼亚G. Chindris 等提出了一种基于PSpice的SiC MOSFET 物理模型，从器件内部机理映射至外部特性，在软件自带 MOSFET 内核的基础上进行了改进；瑞士G. Kampitsis 等在Simulink环境建立了 SiC MOSFET 模型，其实质也是基于自带MOSFET 模型构建外围补偿电路。文献\[13\]的SiC MOSFET建模也是基于PSpice 自带的MOSFET模型进行改进建模。此外，SiC MOSFET 开关瞬态分段线性模型也是经典模型之一，该类模型通过分段线性假设来简化器件的开关瞬态，实现SiCMOSFET 开关过程解耦及建模。

综上所述，SiC MOSFET 虽然结构较为简单，但由于其材料特性及结构不同使其工作特性较Si MOSFET 有较大差别，使得Si 器件的特性分析与建模原理及方法并不完全适用于SiC 器件。而目前的SiC MOSFET 模型大部分是基于传统Si MOSFET 模型发展得到，大部分模型仅仅是修改了材料特性参数及结构参数；并且由于器件的逐步更新迭代，传统建模方法已经较难对现有器件进行准确表征，尤其是开关瞬态特性，因此需要对传统模型进行改进。

本文首先对传统SiC MOSFET 物理模型的不足进行了分析，传统模型未考虑SiC MOSFET 基区宽度较窄以及突变结等结构特点，针对上述不足对动静态特性的影响进行研究。基于SiC MOSFET 器件工作机理建立了改进的动静态模型，然后在PSpice仿真平台中构建了等效电路模型。最后采用CREE 1200V/325A SiC MOSFET 模块进行了仿真与实验验证。

1. 传统 SiC MOSFET 物理模型分析

1.1 静态模型问题分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dK2GAd0M5EpBXcrJNEyVxRHr7Z0OP0iaMFEu4ZgNicymvic0u6n0bt6bog/640?wx_fmt=png&from=appmsg)

SiC MOSFET 传统模型中，其通态电流和电阻的计算采用的均是全扩散模型。传统的SiC MOSFET 静态模型如图1 所示，图中阴影部分表示载流子在基区的扩散，这类扩散在Si 器件中最为常见，这是由于Si 器件具有较宽的基区以及较高的载流子迁移率。然而SiC MOSFET 与Si 器件材料特性以及结构具有较大的不同：SiC 材料的临界电场要远远大于Si 器件，使得其采用较小的基区宽度就能够达到较高的击穿电压。而导通压降与基区宽度近似成正比，因此器件厂商在设计SiC MOSFET 器件时，为了实现低导通压降，一般采用较小的基区宽度以及较高的掺杂浓度。此外，SiC 材料的迁移率低于传统的Si 材料，导致正向导通过程中SiC MOSFET 载流子扩散方式与传统的Si 器件不再相同，因此采用传统Si 器件建模方法得到的SiC MOSFET 静态模型的导通压降相比实际器件的导通压降偏小。

1.2 瞬态模型问题分析

SiC MOSFET 瞬态特性主要由3 个结电容CGS、CDS 和CGD 决定，这些结电容具有非线性特征，它们对器件的开关速度和振荡特性有很大的影响，因此3 个结电容的准确建模对于器件特性表征，尤其是高频振荡特性的准确表征具有重要意义。然而传统的SiC MOSFET 模型中，结电容建模要么是采用Si器件的建模方法，要么采用函数拟合以及定电容。这些模型针对单一工况下的SiC MOSFET 瞬态特性仿真较为准确，但是针对多工况下的器件瞬态特性表征会带来较大的影响。

针对SiC MOSFET 栅漏极电容CGD，在传统模型中，CGD 建模仍采用的是Si MOSFET建模方法。然而，SiC MOSFET 的基区宽度比普通Si器件要小得多。在SiC MOSFET 关断过程中，当电压施加到漏源极两端时，反偏结将产生较宽的耗尽层，所加电压越大，耗尽层越宽。由于P+基区是高掺杂区，N−漂移区是轻掺杂区，所以耗尽层随着电压的增加在漂移区内拓展。过去，SiC MOSFET 的电压等级一般低于600V，此电压等级的器件关断过程中耗尽层一般不会穿通器件基区。然而，目前商用最高电压等级已经达到了1700V，远大于Si 器件。对于这些中高压等级器件，一般采用的是穿通型设计，由此达到低导通电阻的目的。当耗尽层穿通N−区域以后，由于 N+区域掺杂浓度较高，耗尽层宽度基本不再增加，即栅漏极电容将保持不变。而传统模型未考虑这一点则会使得穿通工况下器件的电容表征产生较大偏差。

针对漏源级电容CDS 建模，传统物理模型中一般是采用一个二级管与结电容并联来模拟漏源极电容正向导通与阻断之间变化。在CDS 建模过程中，可以近似将该结电容当作PN 结进行建模，但是传统模型未考虑SiC 材料与Si 材料的不同：在Si 器件中，为了实现器件的软恢复，现有的制造工艺一般采用先扩散后进行局部离子注入的方式进行PN结制造，因此 Si 器件中PN 结一般为缓变结。而由于SiC 材料的特殊性，无论是采用外延、扩散或者离子注入工艺，其掺杂离子生长速率以及深度较传统Si 材料均较小，因此最终形成PN 结的掺杂过渡属于突变型。传统SiC MOSFET 模型采用缓变结建模方法将对结电容表征产生较大影响。

针对CGS 建模，现有的SiC MOSFET 模型中采用的仍是普通Si 器件建模方法：Si MOSFET 采用正电压开通、零电压关断，此过程可将CGS 近似看作恒定值。但是由于SiC 材料的特殊性，一般采用的是负电压关断，这样可减小器件的漏极电流，使器件更可靠的关断。当栅源电压为负时，此时在源极N+区域会形成耗尽层，这将导致栅源极电容增大，而传统模型中没有考虑到这一点，则会导致较大的误差。

2\. SiC MOSFET 静态改进模型

图2 所示为完整的SiC MOSFET 物理模型组成。主要包括静态模型和开关瞬态模型。静态模型包括通态电流模型和通态电阻模型。传统建模文献\[6, 13\]中一般关注器件导通V\-I 特性曲线的电流模型，忽略了器件通态电阻的建模研究，通常采用等效电阻模型。实际上，通态电阻除了影响线性区电压对电流的变化率，其对于瞬态特性也具有较大影响，更直接影响开关瞬态特性中高频振荡衰减的幅度，因此需要针对通态电阻模型进行研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dJhMSlgnZ3z0uhc59XBRZzhaON5Yguz2kYy1XPOM9bhSxficJwz4TOkg/640?wx_fmt=png&from=appmsg)

2.1 通态电流模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dkYeTs0sLbMCYNzUibMDghoLs5qz2yr6ykyL2Oa2lsibpW5cC1wDbsPmw/640?wx_fmt=png&from=appmsg)

图3 所示为SiC MOSFET 正向导通时等效电路，当栅源极电压VGS≤Vth（阈值电压）时，MOS结构的金属和 SiC 半导体之间存在能带差，电子不能够在沟道中聚集，即使漏源极电压VDS＞0，MOS沟道中没有输运电子流过，因此器件电流 iD\=0。

随着栅极电压逐渐增加：当VGS＞Vth 时，栅极电压越界，根据金属和半导体接触特性，将会形成一条反型层沟道，沟道的垂直扩展只有几纳米，此时由源极注入的电子在反型层沟道传输。随着VDS增大，沟道电流进一步增加，但是沟道两侧的电压降 V(y)也将增加，这意味着远离源极的电压降将减少，将使得沟道变窄。单位长度的沟道电阻表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dKjNtooHfmdCiaZXiaJ4Qx2dbCib4QibwoFl82c1QP8n0GSSjb4JeT3Du7A/640?wx_fmt=png&from=appmsg)

式中，WCH 为垂直于横截面的沟道宽度；μn 为SiC材料中电子迁移率；Qs 为沟道电荷。沿着沟道长度为y 的区域，存在电荷Q(y)=Qs。因此可以得到对于长度y 的沟道电阻和电荷关系表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dMvbBDhHqOicPXQlCdmVyJbgCr9o74ib7iaOPuicwYXlribJiaXSBjGtlj3Xg/640?wx_fmt=png&from=appmsg)

式中，Vth 为阈值电压；Cox 为栅氧层电容；V(y)为沿着沟道电压降。此时在单位电阻dR 上的电压降为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dgTrziaIMcRZiaM8HgMzFG0StUqeFTwrnC0VQHltQzm6o9sKrvn1crO2A/640?wx_fmt=png&from=appmsg)

将式（2）代入式（3）并整理可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6djicicjbchK0QdVFwVbtfMeah0uiaic9cafOh5WPPibQsPK5gPyAO5jqc8dQ/640?wx_fmt=png&from=appmsg)

沿沟道位置y \=0 到y \=LCH（LCH 为沟道长度）进行积分可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dZzVbxMquBylllek6uoXNYEAdDiahsLMvS7q48YnPOP7B9XhBsdBjZWQ/640?wx_fmt=png&from=appmsg)

对于 VCH＜VGS−Vth 的情形，积分式（5）可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dKWQMzbXCyV1pqs3uTkJny54pNQUODVicJeBwF1Jkwgia2JDUXxGNzPsg/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dZPo4I38fiaWvgKd70Paqbueq4vvicibbuDaoIRyXEu01xHdDhmQLfKN7A/640?wx_fmt=png&from=appmsg)

式中，VCH 为沟道压降。SiC MOSFET 工作在线性区（欧姆区），电流随着VCH 的增加而逐渐增大，若此时 VCH 较小，式（6）可以化简为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dDzYrG31f57uZkYk4GgeVqibROSefRpv9GfAyDGVibLWPpDcFjSpXCS4g/640?wx_fmt=png&from=appmsg)

此时沟道电阻可以近似表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dia2vCWJj6yMF2C464uj9kUmeduYKK2ckiaD7iakAO0mZc2LCTEQ9hQ5Og/640?wx_fmt=png&from=appmsg)

当VCH\=VGS−Vth 时，此时电流流过沟道产生的电压与VGS−Vth 相等，意味着MOS沟道其中一端开始关断，即此时为线性区与饱和区的分界点。

随着 VCH 继续增加，VCH＞VGS−Vth，理论上沟道端点电压会继续增加，但是由于沟道电压是由电流决定的，此时沟道已经逐渐关断，电流也会逐渐趋于不变，两者达到一个平衡。因此，可以将VCH\=VGS−Vth 代入式（6）并化简可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dicVCgr30bcDYyUMKnXebO9p4rnXZQJ9KBNNyzyU2ryAr1yfdjy6VBKw/640?wx_fmt=png&from=appmsg)

此外，考虑到SiC MOSFET 沟道长度调制效应，需在上述模型基础上添加1+λVCH 进行拟合，λ 为沟道长度调制系数。综上所述，即为SiC MOSFET通态电流模型。

2.2 通态电阻模型

评估SiC MOSFET 导通性能的另一个重要因素是通态电阻，如图3 所示器件内部通态电阻分布。传统的SiC MOSFET 模型通常只针对沟道电阻进行建模，而把其他部分的电阻当作寄生电阻对待。这在一定工况下是可行的，但是对于多工况仿真则会引入较大的误差。

SiC MOSFET 通态电阻由多个电阻共同组成，不同工况下其导通电阻分别由不同部分的电阻占主导。在栅极电压较大时，沟道电阻以及积累区域电阻较小，漂移区电阻占比较大。但是随着栅极电压的逐渐降低，沟道电阻以及积累区电阻相对总导通电阻的占比逐渐增加；当栅极电压降低至8V 时，沟道电阻以及积累区电阻相对总导通电阻占比相对较大，而漂移区电阻占比相对较小。也正是由于此原因，在栅压逐渐降低过程中，器件V\-I 曲线的非线性逐渐增加。因此，传统模型只采用一个沟道电阻进行拟合，通常情况下很难对不同工况的器件特性进行准确表征。如图3 所示，通态电阻Ron 主要由6 个电阻串联组成，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dgoibYwBpEOicF0HMxib0XrMxrHOBHqTcdxa09j86VnibBeQOVeI26B0Sxg/640?wx_fmt=png&from=appmsg)

式中，Repi 为漂移区电阻；RM 为源接触电阻；RN+为源区电阻；RCH 为沟道电阻；RJ 为积累区与JFET区总电阻；Rsub 为N+衬底电阻。

针对小功率SiC MOSFET 器件的导通电阻，如电压等级在50V 以下的器件，在额定栅压（20V）下，其线性区静态导通电阻RCH、RJ、Repi 各占总电阻25% 左右；但是针对中等功率以上的SiC MOSFET，如600V 以上的功率SiC MOSFET，在额定栅压下，Repi 占线性区总电阻97%以上，在此工况下建模可主要针对Reqi 分电阻开展。考虑到SiC相比 Si 材料具有较高的临界电场，因此其基区宽度要窄得多，使得正向导通情况下基区的电流扩散为梯形，基于该特性对Repi 进行了改进建模。

1）漂移区电阻Repi

SiC MOSFET 正向导通N−区域电流扩散如图4所示。漂移区电阻 Repi 指的是电流由 JFET 区域扩展到漂移区这一部分的电阻，如图4 所示N−区域中的阴影部分。在传统的SiC MOSFET 模型中，阴影区域覆盖了整个N−区域，如图1 所示。由于器件导通电阻与电流扩散面积成反比，因此采用传统全扩散的方式计算得到的导通电阻要比实际更小。而在实际SiC MOSFET 导通过程中，该阴影区域是从宽度为a 的JFET 区域逐渐扩散至衬底区。这是由于SiC MOSFET 具有高掺杂及高击穿电场的优势，且SiC MOSFET 基区宽度相比传统Si 器件基区宽度更窄，使得电流扩散途径主要为梯形。N−基区的电阻包括两部分：第一部分为电流扩散面积随着扩散深度逐渐增加；第二部分为均匀的长方形电流横截面。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dmsG7IJs5prxLiaENbGibE5iaFqAxOUkHRSmTiaT0jVwhiaOVWLugWGmuEQw/640?wx_fmt=png&from=appmsg)

在图4 所示的电流模式中，假设第一部分电流的横截面为从JFET 区域以45°角向基区扩散，此时JFET 下方深度为y 处的电流横截面宽度为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dJ8ZItexNmHxbGZlcZNc8xGicejqO5wG4oW7NfnED0JBuzN2xzrhBhBA/640?wx_fmt=png&from=appmsg)

式中，a 为JEFT 区域的宽度；JFET 区域下方深度dy 的微分电阻为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dwclSlj6AtAbgErOIWSK9X8lCgAWhS4dMNhsolKPM0iahe2Ew7icwTEsw/640?wx_fmt=png&from=appmsg)

式中，Z 为垂直于横截面区域的深度；ρepi 为漂移区的电阻率，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dFIC1ibmJxhAWqvialGBgfLhuXOp37cU03sBt0UetRQa8YExnOWua00GA/640?wx_fmt=png&from=appmsg)

式中，q 为元电荷量；NN−为基区掺杂浓度。对式（13）从y \=0 到y \=(Lcell−a)/2 进行积分可以得到漂移区第一部分的电阻表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6djewIzw8uCuZiccnLo36CIiaXicB0x3cCJkgUWTfNsTcTN5Wia5VNmD6mNw/640?wx_fmt=png&from=appmsg)

式中，Lcell 为元胞长度。当电流扩散至全基区以后，将以长方形进行扩散，可认为电流流过的区域是一个均匀的横截面，该部分的电阻可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dHCb8zePVf0ccLlyEcOZibHa7K0DNxzGTzofZELpKY4hY14U9U8FI18w/640?wx_fmt=png&from=appmsg)

式中，WN−为N−区域的宽度；A 为芯片面积；漂移区总电阻Repi 为RN−1 和RN−2 两个电阻之和。

2）源接触电阻RM

源接触电阻为源电极与N+源区之间的金属接触电阻，可以通过均分接触特征电阻ρC 除以接触面积得到。接触特征电阻由接触金属的功函数和源极N+区域掺杂浓度来确定，可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dZSSxWXSrgHeu9QRhZGsgAR6hK0REzJ0y6xyGL6tNud9tFOI43JxaRw/640?wx_fmt=png&from=appmsg)

式中，AM 为源电极与N+源区之间的金属接触面积；WM 为源极接触区域的宽度。

3）源区电阻RN+

电流从接触点进入N+源区以后，在到达沟道之前必须从源区通过，该部分的电阻值可以由源极N+区域的宽度WN+\_S 及其长度LN+\_S 计算为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dUvbzRaQia7Je3P5rbklJViaSqCXiayPGyibPlUpGb8oR3V46iaItVicflP7w/640?wx_fmt=png&from=appmsg)

4）沟道电阻RCH

由通态电流线性区模型可以近似得到沟道电阻表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6daAyrWfR1qzOc42BN2K6iccK1GibDdPj9iaUdibeQsWQ3JeuA4mN3IVlG4A/640?wx_fmt=png&from=appmsg)

5）积累区与JFET 区总电阻RJ

在正向导通过程中，由于电场的作用，电子会在栅氧层下方形成积累层，该区域指的是电流通过反型层沟道后进一步到达JFET 区域之间的扩散区。积累层电阻为通过P 型区域边缘处到栅中心处的电流产生的电阻。此部分电流流动方式与沟道电流类似，因此电阻计算方式与沟道电阻相同，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dHvLc42iaKMISDCe3vB2YOh859oNjzHCAoQjfBJEhlcnMplN3eHZkwsA/640?wx_fmt=png&from=appmsg)

式中，WA 为积累层的宽度；LA 为电流运输到积累层的距离。

在SiC MOSFET 中，由于P 型区域是平面形状，因此可以假设JEFT 区域的宽度基本不变。如图4所示，假设电流在宽度为 a 的均匀横截面积内流动，流动距离为WJ，其电阻可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dibUHauOBod1kibOpJ8wLbvJTibyDweqhgp6vU2rAGUMIFnQQyfQOt0C8A/640?wx_fmt=png&from=appmsg)

式中，ω0 为零偏置条件下JFET 区域的耗尽层宽度，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dW52pg4p7pxSaJBOtZLEEwHjROagEkelQ0xumkiaIOYVuQy9jN1yPj3g/640?wx_fmt=png&from=appmsg)

式中，εSiC 为SiC MOSFET 的介电常数；NA 为P+区域的掺杂浓度；Vbi 为PN 结阈值电压。因此，可以得到积累区和JFET 区总电阻表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dMpL5iccCxLicsAhAvHqsicYWEFKZQPD67UvgZsKibOyLRQdMklBTjrD7Sw/640?wx_fmt=png&from=appmsg)

6）N+衬底电阻Rsub

当电流到达底部区域时，会非常迅速地扩散到整个重掺杂的N+衬底。因此，可以假设电流通过衬底为一个均匀的横截面区域，在此条件下，N+衬底的电阻可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dhwjbxLpcDlQ9PJjggpcolzaL6gqqe1bib7JAv2WicKtTRWLia1wZ2oFug/640?wx_fmt=png&from=appmsg)

式中，Lsub 为N+型衬底x 轴方向的长度（见图 4）；Wsub 为N+型衬底y 轴方向的长度；NN+为N+区的掺杂浓度。

综上即为SiC MOSFET 正向导通静态模型。在参数提取部分，只针对基区电阻Repi 的相关参数进行了提取。对于其他的电阻模型，如沟道电阻RCH以及积累区与 JFET 区的电阻RJ 模型，这一部分电阻涉及到芯片的非常细节的微观结构，难以进行直接观测或实验提取，因此，本文采用典型值进行仿真。

3\. SiC MOSFET 瞬态改进模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6djlQ0MadiaVQjqqvqXRX3A01Clr85guEM5EHBT2lticN5qRd5j3tT9ibsA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 高频特性主要体现在瞬态特性的表征上，器件动态响应主要由栅源极电容CGS、漏源极电容CDS 和栅漏极电容CGD 决定，这些电容具有非线性特性，它们对器件开关速度和损耗有很大影响。如图5 所示为SiC MOSFET 开关瞬态特性模型，图中分别表示了3 个结电容的形成位置。

SiC MOSFET 3个结电容对开关瞬态特性的影响由大到小排序为：CGD＞CDS＞CGS。在静态模型的基础上，SiC MOSFET 开关瞬态过程可等效为3个电容的充放电过程。由于SiC 材料及制造工艺的特殊性（掺杂较难扩散），使得其PN 结属于突变 结。另外，针对中高压等级的SiC MOSFET，一般采用的是穿通型设计，由此达到低导通电阻的目的。最后，与Si MOSFET 器件采用零电压关断不同，SiC MOSFET一般采用的是负电压关断，这样可减小器件的漏极电流，使器件更可靠的关断。综上所述，需要分别根据穿通工况、突变结以及负电压关断特性对传统电容模型进行改进建模。

3.1 栅漏极电容CGD

栅漏极电容CGD 又称米勒电容，存在于栅极和漏极之间，作为负反馈阻碍SiC MOSFET栅极开关瞬态切换。因此，CGD为影响器件开关瞬态的关键电容。CGD 随栅漏极电压的变化而变化，由于其复杂的物理机制，目前诸多建模工作都集中在该电容上。针对栅漏极电容CGD，它是由Cox（氧化层电容）和CGDJ（MOS 分界面耗尽层电容）串联组成，因此CGD 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dEukp7AMS4YTHdZoe7caia9y7Nxux96pKCW0iaHtKM6XxWc7sicljkBkPA/640?wx_fmt=png&from=appmsg)

氧化层电容Cox 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dhZiaQ07Wwyiavr6hYhJwMtGhAVW7tbBpCgrXC3GzBCZ2ojFuiapUAZaeg/640?wx_fmt=png&from=appmsg)

式中，AGD 为栅漏极交叠面积；εox 为氧化层介电常数；VDG为栅漏极电压；Wox 为氧化层厚度。上述模型与传统模型相同。

MOS 分界面耗尽层电容对于栅漏极电压具有极强的依赖性，当电压VDG 上升时，CGDJ 将迅速下降，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dwqe1A3xjc0rxUsdB7TB09gWdwOj0caQcXQlFiaWjxDFaGD4iccfkLnicg/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6duicSgPw7ATLHkaHq7QL6YaTF0RmsMyomXtd5M8Wz96c5EJ5icY6jCnicg/640?wx_fmt=png&from=appmsg)

式中，VthD 为栅漏极阈值电压。

然而，为了获取较低的导通电阻Ron，SiC MOSFET 漂移区宽度相比Si 器件要薄得多（见图5），因此耗尽层随着外加电压的逐渐增加容易穿通进入N+区域。当耗尽层穿通以后，耗尽层宽度基本不再增加，即结电容基本保持不变。因此，可以推导得到耗尽层宽度如式（28）所示，进而可以由式（24）～式（26）计算得到CGD。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dQDoxymcpppiaso8bHwKZcxiabOt5cXFf45W3IKNBMxwsPFXTJnHiagYdQ/640?wx_fmt=png&from=appmsg)

式中，VPT 为穿通电压。如图6 所示为栅漏极电容CGD 改进模型、传统模型和数据表的对比。随着VDS的增加，电容 CGD 逐渐减小。当VDS 电压增加到600V左右时，结电容有个明显的转折点，而后即使电压继续升高，电容也基本保持不变。这是由于在电压达到 600V 时，此时耗尽层将穿通N−区，而后耗尽层变化很小，因此结电容基本保持不变。而传统模型由于没有考虑穿通条件，所以电容在600V 后会继续下降。因此，传统模型与数据表之间的误差会随着电压的增大而增大。通过比较，本文提出的CGD模型与数据表具有较好的一致性，验证了 CGD 模型的有效性和准确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dI8JpSk20XZt8hVNzvJehEQuL6fqjlQkRAsxxZwMnibibN6DbZICHIjqA/640?wx_fmt=png&from=appmsg)

3.2 漏源极电容CDS

漏源极电容CDS 为SiC MOSFET 反向阻断以后在P+层与N−层之间形成的结电容，可以等效为一个PN 结电容。在反向偏置的PN 结中，每单位面积的电容被定义为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6d2hXfvlqLnMX9D9pSqNYIvWibX7HJbBegXkx1EqlAvz3hLoqZGwjWM0Q/640?wx_fmt=png&from=appmsg)

式中，dQ 为每单位面积电荷的变化量，它是由电压的增量dVr 引起；Vr 为PN 结两端的电压。

由于SiC 器件的材料及生产工艺与Si 器件具有较大不同，其PN 结属于非常突变的结构，因此PN结处的掺杂浓度具有较大的变化。传统模型中使用dQ\=qNN−dW 来近似表征P+N−结处耗尽层电荷将会带来较大的误差，由此计算得到的漏源极电容相比实际数值偏大，在小电流条件下尤为明显，因此需要对其进行分析改进。突变结处空间电荷区中同一符号的电荷可通过对空间电荷密度ρ 进行积分得到，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dSPicY8pjat38pJ7FGEBVYN8zlurV0mHuG8o4diazsxwG0I7MUYicopDgQ/640?wx_fmt=png&from=appmsg)

式中，Em 为空间电荷区最大电场强度，表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6deBJdib1fIqX35n9QwexI6wpgozCRGHkyW7Ql59qibus969ex7o1CSzibQ/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6d64M8sY24UsZ4Psbq9At0VTMpAbEbubyWxl1RzXtckicKY8X4yOEwSGw/640?wx_fmt=png&from=appmsg)

式中，k 为玻耳兹曼常数；T 为热力学温度。由于NN−≪NA，且(Vbi+Vr)/(kT)≫1，将式（31）代入式（30），可化简得到单位面积电容为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dKGharpNf55lLEwwXGsEtdDj9tCRnQicARPxS6uNTNINBz2Bj2sxrDPw/640?wx_fmt=png&from=appmsg)

图7 所示为源漏极电容CDS 随VDS 变化曲线。通过对比可以发现，本文模型与数据表结果具有较好的一致性，也验证了CDS 模型的有效性，为瞬态特性仿真提供了理论验证支撑。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6du0ibIHROy4agSmQqiciaWVXjTHxYO4uXvV4iabsNG3RIkNuAicNoHtOdRMg/640?wx_fmt=png&from=appmsg)

3.3 栅源极电容 CGS

如图5 所示，CGS 被分为性质不同的两部分：第一部分是沟道区域的栅极氧化层电容，表示为Cchannel，由于栅极氧化物的厚度很薄，Cchannel 相对较大；第二部分是Cpp，它源于器件表面栅极和源极的平行布置结构，但是由于栅极和源极之间的绝缘层相对栅极氧化物较厚，导致Cpp 比Cchannel 要小得多，CGS 由这两部分电容并联而成，因此栅源极电容可以近似表示为CGS\=Cchannel。

SiC MOSFET 一般采用的是负电压关断。当栅源电压为负时，此时在源极N+区域将会形成耗尽层，这将导致栅源极电容增加，增加后的电容为CGS\_off，因此可得栅源极电容CGS 表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6d2RiaibibjTlt5Ml5SZpudfG5ENUe7J0MbAv44a8qbMOWPzsEWFsfOibGnA/640?wx_fmt=png&from=appmsg)

由于栅源极电容CGS 相比其他电容对于器件的瞬态特性影响偏小，且涉及许多工艺参数，通常情况下为了提升仿真收敛性，一般使用典型值代替。

4. 仿真与实验验证

4.1 参数提取及模型实现

基于物理的SiC MOSFET 电路模型不仅可以更好地了解器件的工作机理，并可以较好地预测不同工况下SiC MOSFET 的静态和瞬态特性。但是，它的使用也伴随着一些挑战，如模型参数提取。本文将模型的参数提取分为两个步骤：

（1）参数初步提取，主要包括半导体物理参数、器件结构参数、寄生电路参数。在物理模型的发展过程中，由于模型仿真的需要，一些文献提出了一系列模型参数提取方法。通过这些方法可以对参数进行初步评估。

（2）利用文献\[21\]中提出的基于软件的模型参数优化工具，对（1）中提取的参数进行优化，进一步提高物理模型的精度。本文模型使用的主要模型参数见表1，其余参数如栅源极结电容等典型值由数据手册给出。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6drZjiaH8wW9SZuaR53AY3UarcbSicITaNyeuRFXFxsSUSI9lXz5xM1tgA/640?wx_fmt=png&from=appmsg)

所建立的SiC MOSFET电路模型已在PSpice仿真软件中采用等效电路的形式进行了搭建，并通过用户定义的模型库进行了调用。图8 所示为SiC MOSFET 模型主要部分的等效电路，静态模型主要通过受控电流源以及等效电阻构成。瞬态模型部分主要针对非线性电容进行了搭建：通过固定电容与受控电流源并联实现了可变电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dxbb5rP8Kao76CTAjPrhknmIiaSqJECqDohd2wRPLwXMWYsF4FNagqug/640?wx_fmt=png&from=appmsg)

4.2 静态特性仿真与实验验证

首先，利用PSpice 的DC 分析得到改进模型与传统模型在不同栅极电压下的静态特性。图9所示为CREE1200V/325A SiC MOSFET模块（CAS325M12HM2），将仿真得到的静态特性与模块数据手册中的静态特性曲线进行了对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dadRTkLtvstZnbcmJnXSEcOKqKfAZIVgCNmLIBibGeyuLolQws5SqjOg/640?wx_fmt=png&from=appmsg)

SiC MOSFET 静态特性仿真与实验对比如图10 所示，在不同栅极电压下，相比传统模型，改进模型与实验的一致性更高。改进模型考虑了N−基区电流梯形的扩散方式，与器件实际工作机理相符；而传统模型采用的全扩散模型，其载流子流通的路径要大于改进模型，导致通态电阻更小，因此传统模型通态压降小于改进模型压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6d17pHBubibSmUkW6fon2ToicMZBXw2b1hSfhoK59YbDY9UHZglN9yTbVw/640?wx_fmt=png&from=appmsg)

图11 为改进模型与传统模型导通压降仿真误差对比，在栅压为16V 和12V 时，传统模型的误差总体在15%以内；在栅压为20V 和8V时，部分工况误差稍大，总体在20%左右。在工程应用中，20%的误差能够满足装置级以及系统级的仿真要求。本文的模型在传统模型的基础上考虑了载流子扩散呈梯形的特点，将传统模型的精度进一步提升至10%以内，使之能够满足器件级的电路仿真，为器件的动静态特性提供更加准确的表征，仿真和实验较好的一致性验证了改进模型的准确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dsKuzAzYkDdAn5hAxl9KYicXvZ9YnhwKcATnnBXeO3LdyhYUSla3CMRg/640?wx_fmt=png&from=appmsg)

4.3 瞬态特性仿真与实验验证

双脉冲测试平台如图12 所示，SiC MOSFET瞬态特性仿真与实验采用双脉冲测试电路。考虑到器件具有极快的开关速度，因此需要控制测试回路杂散电感，于是设计了双脉冲测试母排，并将测试模块靠近直流电容进行连接，直流电容采用低感薄膜电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6drg5hnKR2fM4XqueyL8aF1LSNib3O6o9DricA1sRRt9Gwicy0lKsuWw4ug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dCNsy2Xr1W1OxTdic6Fw66sKBIablQJDDL1JQ7VMj6haVZ9WM370Ty1A/640?wx_fmt=png&from=appmsg)

图13 所示为 SiC MOSFET 驱动控制连接，驱动与控制板之间通过差分转换器连接，目的是进一步高低压隔离，确保控制板的可靠性。测试设备需要满足 SiC MOSFET 极快开关速度的要求，表2 为实验平台所用的各型设备、元器件及测量工具参数及型号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dTcFboVm9qsy6R69upMl5rBQgeXA21a8WWQgN3IOlqFGToSMGyf9ISQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dAn0H2R6NbOviaNHicibqGOZlNhHSoosuHRrT8LqfQodgg3W81RbE8wIFA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 具有极快的开关速度，其瞬态特性对于杂散电感极为敏感，包括器件封装以及工作回路的寄生电感。SiC MOSFET 在开关瞬态过程中，其电容和回路电感很容易通过相互作用产生RLC高频振荡和电压峰值，振荡及产生的尖峰电压对于器件的损耗及可靠性评估较为重要。因此，为了对器件进行准确表征，需要对寄生电感进行提取。

通过阻抗测试可以得到模块寄生电感，如本文用于实验的SiC MOSFET 器件，模块功率回路的寄生电感约为9.5nH。在器件开关瞬态过程中，模块寄生电感与回路杂散电感一起，对瞬态特性造成影响，因此需要针对总的杂散电感进行了提取。

本文采取了实验方法对回路杂散电感进行提取，实验法通过双脉冲电路对器件电流和尖峰电压进行测量，其原理是电流变化率在杂散电感上会产生电压，根据Δv\=Ldi/dt 可以计算得到杂散电感。相比有限元提取方法以及阻抗分析仪测试方法，实验方法具有效率高以及便捷的优势。本文采用积分法\[23\]针对实验电路的杂散电感进行了提取，相比传统的微分法，积分法可以降低偶然性以及测量误差带来的影响。如图12 所示，将各个部分的杂散电感进行等效：Leq\=Lloop+Lm。表3 为不同工况下提取得到的杂散电感。最终计算得到杂散电感约为80nH，将提取得到的杂散电感代入仿真电路进行仿真。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6dbe54Pibx9ViakSGdIKXqibunK1JicBVzwlGLibGUEDlK6cLyxWbB81vFH8g/640?wx_fmt=png&from=appmsg)

为了验证所提出的SiC MOSFET 模型的准确性，对不同电压和电流下的仿真与实验进行了比较，如图14 所示。改进模型仿真与实验的电压vDS 波形以及电流iD 波形具有较好的一致性。在图14a中，SiC MOSFET 开通过程中主要为电流高频振荡，在电流上升斜率、电流振荡频率以及电流尖峰等关键特性中，模型仿真与实验结果均较为一致。传统模型只能够仿真第一个波形，而不能够准确仿真多个振荡波形。本文模型考虑了器件物理机理，对于器件的非线性结电容进行了准确的描述，因此能够准确地仿真包括高频振荡特性在内的开通瞬态特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmLB1gocicIicSSlgPHaUhI6d0clT9rTibgpqZkvWGOhgFFmaQXOah8C8NT3yzsibnxcTW5eEZJOY7LCA/640?wx_fmt=png&from=appmsg)

针对SiC MOSFET 器件的关断瞬态：如图14b所示，由于高频振荡的发生，使得 vDS 波形有两个主要的斜率，第一段斜率是器件本身开关特性决定；当高频振荡发生以后，器件关断过程中的电压变化率dv/dt 受到高频振荡特性的影响而微降低。仿真波形中：第一段斜率dvDS/dt 约为1.7kV/μs，实验波形中第一段斜率dvDS/dt约为1.65kV/μs。第二段dvDS/dt 的仿真与实验波形斜率分别为1.5kV/μs 以及1.55kV/μs，可以看出，仿真与实验在dv/dt 表征上具有较好的一致性，误差保持在5%以内。针对SiC MOSFET 高频振荡特性，所提出的模型也能够较好地进行模拟，在600V/100A 以及500V/80A 工况下实验振荡频率分别为12.5MHz及12MHz，而模型仿真振荡频率分别为12.8MHz及12.4MHz，误差维持在5%以内，验证了杂散参数提取以及模型的准确性。

此外，为了更直观地验证所提模型的准确性，还将仿真与实验的电压、电流峰值、上升和下降时间以及振荡频率进行了比较，结果对比见表4。与实验结果相比，模型仿真的振荡频率误差小于5%，电压和电流峰值误差均小于8%，漏极电流上升和下降时间误差小于10%。对仿真时间误差偏大的原因进行了分析：由于存在测量偏置、参数提取误差以及模型本身误差，导致仿真与实验的时间存在几ns的误差；而SiC MOSFET 开关时间极快，只有几十ns，相比之下，计算得到的误差偏大。

SiC MOSFET 所有的开关瞬态特性仿真与实验对比结果表明，本文模型与实测结果吻合较好，验证了所提模型具有较好的准确性和精度。

本文的SiC MOSFET 模型暂未考虑结温变化对于器件特性影响。实际上，器件工作过程中产生的损耗会使得结温变化，进而对SiC MOSFET 动静态特性产生影响。为了提高模型在不同工作温度下的适用性，应给出模型参数的温度模型，该部分工作涉及电热联合仿真部分内容，有待后续完善。

本文针对SiC MOSFET 动静态模型进行了改进建模，静态模型主要针对导通电阻进行理论推导及改进建模。由于SiC MOSFET 为单极性器件，与双极性半导体器件（如IGBT）导通机理存在较多不同，因此静态模型建模过程中形成的建模方法只能用于单极性器件建模。瞬态模型由非线性结电容模型组成，在非线性电容建模（CGD 和CDS）过程的形成方法及步骤不具有限定性，可以将其应用至SiC其他器件，如 SiC MPS 二极管以及未来可能商业化的SiC IGBT。 

本文建模主要针对的是单个器件或者单个模块进行，部分模型参数采用的集总参数，能够在精度和效率之间达到一个较好的平衡。仿真与实验误差小于10%，达到了器件级模型仿真的要求。本文模型主要适用于单个器件（分立式或模块式）动静态特性仿真模拟，评估单器件的工作区间，为器件在装置中的应用提供参考。

5. 结论

本文基于SiC MOSFET 工作机理及结构特点，提出了一种基于物理的SiC MOSFET 改进电路模型。针对静态特性，由于SiC MOSFET 中N−漂移区较窄，导致漂移区电流扩散呈梯形，对静态模型进行了改进建模。针对影响器件高频应用的瞬态特性，根据目前SiC MOSFET 的工艺结构特点，基于突变结、穿通特性以及负电压关断分别对SiC MOSFET 结电容进行了改进建模。改进模型的正确性和仿真精度通过CREE 1200V/325A 模块进行验证，仿真模型能够准确地模拟SiC MOSFET 动静态特性，误差小于10%，验证了本文理论分析和仿真模型的正确性。  

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)