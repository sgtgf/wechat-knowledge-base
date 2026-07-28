# 大功率SiC MOSFET驱动电路及功率回路振荡问题研究


> 原文地址: [https://mp.weixin.qq.com/s/yAR3prI8dc\_Kg-mMUwf0ug](https://mp.weixin.qq.com/s/yAR3prI8dc_Kg-mMUwf0ug)

文章来源：北京交通大学

作者：余宝伟（硕士学位论文）

摘要：SiC MOSFET 具有开关速度快、耐压高、导通电阻小和热导率高等特点，在轨道交通、新能源发电、智能电网等领域逐步得到应用。但在 SiC MOSFET 的应用中，开关瞬态的高 di/dt、dv/dt 与电路的寄生参数相互作用引起的开关振荡问题严重影响器件及系统的可靠性，此外 SiC MOSFET 还存在短路承受能力较弱的问题，这些问题对驱动、保护电路及主电路的设计提出了更高的要求。本文针对 SiC MOSFET 的特性、驱动电路设计及功率回路振荡问题展开研究。

首先，本文研究了 SiC MOSFET 的器件结构和工作特性，逐阶段对其开通和关断过程进行了详细分析，并根据传输电容和输出电容的非线性特征给出了参数提取方法，建立了 SiC MOSFET 的开关瞬态模型，通过双脉冲实验验证了模型的准确性。在此基础之上，基于上述模型仿真研究了驱动电阻、驱动电压、功率回路寄生电感以及栅源极电容对 SiC MOSFET 开关特性的影响。

其次，对 SiC MOSFET 驱动电路中的驱动电压、电源、功率放大、隔离方式等关键部分进行了深入的对比、分析、设计和实验，给出了驱动电路设计的具体建议。针对 SiC MOSFET 较高的开关速度带来的过冲电压和振荡问题，研究了多级电平关断驱动电路的方案，分析了多电平关断驱动电路的作用机理，对不同负载电流和关断中间电平时的关断电压尖峰和开关损耗进行了研究，优选了多级关断中间电平与作用时刻，完成了一种多电平关断 驱动电路的实现。针对 SiC MOSFET 短路承受能力弱的特点，对短路保护及软关断等方案进行了研究。实验验证了上述所提方法及电路的性能。

最后，以电力机车全碳化硅辅助变流器功率回路的振荡问题为例，在充分考虑功率回路寄生参数的基础上，建立了 SiC MOSFET 关断振荡小信号模型，推导了解耦电容对于线路寄生电感完全解耦的条件，在频域上对高频振荡和低频振荡进行了分析。在此基础上，针对级联系统存在的低频振荡问题，提出一种低频振荡谐振分析模型，建立阻抗分析网络对低频谐振电流进行计算。最后仿真和实验结果证明了关断振荡分析以及谐振电流解析的准确性，并对系统参数设计提供了指导意见。

关键词：SiC MOSFET；开关特性；驱动电路；振荡；解析法

1\. 引言

1.1 研究背景及意义

近年来，随着我国经济的飞速发展，能源的需求逐渐增加，石油及天然气等化石能源的日益枯竭，电能作为一种清洁、环保、可再生的绿色能源受到了极大的重视。为了满足生产、生活各式各样的电能需求，电力电子装置发挥着重要的作用。功率半导体作为电力电子装置的核心部件，对于电力电子装置的效率、功率密度起着直接的影响。毫不夸张地说，每一次功率器件的材料与技术的突破均带来了电力电子装置的发展和革新。长期以来硅（Silicon，Si）功率器件（如二极管，绝缘栅双极晶体管（Insulated-gate Bipolar Transistor，IGBT）、金属氧化物半导体场效应晶体管（Metal Oxide Semiconductor Feild Effect Transistor，MOSFET）等）凭借其优异的性能和成熟的技术在中大功率领域占据了统治地位。但随着人们对于电力电子装置的效率、小型化、轻量化的需求不断增加，传统的硅功率器件由于材料的带隙能量、热导率及电子漂移等物理特性已经接近极限而难以满足需求。以碳化硅（Silicon Carbide，SiC）材料为代表的新型宽禁带材料的出现，突破了硅材料特性的极限，使功率半导体器件的性能得到了极大的提升。图 1-1 对碳化硅材料和硅材料特性进行了对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqknGzRCABSVwpSXLicdxwkfVd1otk6q5QtgdibaUib3nLsVP7hhuXfLSxlg/640?wx_fmt=png&from=appmsg)

碳化硅材料主要优势在于：

（1）SiC 材料禁带宽度高，约为 Si 材料的 3 倍，本征载流子浓度高，漏电流小，这意味着 SiC 功率半导体的温度耐量更高。

（2）SiC 材料热导率高，这有利于散热器的设计，降低散热器的体积和重量，提高系统功率密度。

（3）SiC 材料的临界击穿强度高达 3MV/cm，约为 Si 材料（0.3MV/cm）的10 倍，这意味着 SiC 的耐压更高。传统的 Si MOSFET 的产品的耐压一般在 1000V以下，而 SiC MOSFET 单管最高耐压可以高达 27kV。

（4）SiC 材料更高的临界电场可以使 MOSFET 的漂移层掺杂浓度更低、更薄。因此 SiC MOSFET 的导通电阻更小，同等容量下，相对于 Si 降低两个数量级。因此可以显著降低变换器的损耗，增加效率。

（5）SiC 材料饱和电子漂移速度更高，这使得 SiC MOSFET 的开关速度更快，电流容量更大。与 Si IGBT 相比，SiC MOSFET 由于其开关过程不存在电导调制效应以及拖尾电流而更适合高频应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk5kX8QcoLc2CvBe2dSvm1iazPHjIyyhKZby4kWTnCjOET8WjTkRQAwCQ/640?wx_fmt=png&from=appmsg)

图1-2展示了 SiC 功率器件的发展历程，2001 年 Infineon 生产的第一颗 SiC肖特基二极管（Schottky Barrier Diode, SBD）投入市场，凭借其耐高压、耐高温和极小反向恢复迅速得到了广大学者的关注。此后，CREE 和 ROHM 等其他半导体公司也相继推出了具有各种额定值的 SiC 二极管如 CMF2012D。2008 年 SemiSouth公司 生 产 出了 第一批 碳化 硅 结栅极 场 效应晶 体 管 （ Junction Gate Field Effect Transistor, JFET）。与此同时，各半导体公司开始将 SiC 肖特基二极管集成到 Si IGBT 功率模块中，2009 年 Infineon 问世了第一个用 Si IGBT 和 SiC SBD 生产的混合 SiC 模块。从 2010 年到 2011 年间，ROHM 和 CREE 推出了首款额定电压为 1200V的 SiC MOSFET 分立器件。随着 SiC 功率器件的不断商用化，Vincotech 和 Microsemi等公司于 2011 年开始使用 SiC JFET 和 SiC 二极管生产全 SiC 模块。2013 年，CREE推出了使用 SiC MOSFET 和 SiC 二极管的全 SiC 功率模块 CAS30017BM2。自此，包括 Mitsubishi、Semikron、Fuji 和 Infineon 在内其它半导体厂商均发布了全 SiC功率模块，并推进功率模块朝着 3300V、6500V 等高压大功率领域发展。总体来看，目前全球先进的全 SiC 功率主要的半导体厂商主要集中在美国、德国和日本等国家。其中单美国 CREE 一家公司在全球 SiC 单晶衬底市场就占据了 85%以上。我国的 SiC 功率器件则发展的比较晚，主要半导体企业和研发单位有泰科天润、株洲中车时代公司、中电科五十五所、中科院微电子所、基本半导体公司、浙江大学等，目前，国内半导体企业已经建立了 SiC 肖特基二极管的生产线，可生产0.6kV 到 6.5kV 电压等级的 SiC 肖特基二极管。但目前国内的 SiC MOSFET 只实现了 1200V 和 1700V 电压等级的研制，尚未实现商业化。

SiC 功率器件目前主要应用在轨道交通、电动汽车、光伏、不间断电源等中大功率领域。轨道交通方面，日本率先将三菱的全 SiC 功率器件应用于高速列车N700S，与 N700 牵引变流器相比，体积降低了 55%，功率密度得到显著提升。电动汽车方面，文献\[8\]对比了采用 Si IGBT 和 SiC MOSFET 的电动汽车传动系统性能。拓扑选择为两电平三相逆变器，测试功率为 10kW，测试开关频率为 10kHz。在相同的工况下，采用 SiC MOSFET 连接定子和转子的逆变器效率分别提高了11.2%和 3.7%。光伏方面，ABB 对 1MW 光伏逆变器进行了研究，评估测试了 1200V Si IGBT 组成的 ANPC 系统以及 1700V SiC MOSFET 组成的两电平系统，实验测试表明 Si IGBT 系统在开关频率低于 7kHz 时效率最高可达 98.5%，在开关频率高于 7kHz 时效率较低。而 SiC 系统在散热条件较差的环境下，测试效率仍达 98.8%以上。不间断电源方面，文献\[10\]对不同功率器件的不间断电源进行了测试，开关频率为 32kHz 的全 SiC 器件两电平拓扑的效率可达 97.6%，比开关频率为 16kHz的 Si 器件三电平拓扑效率高 2%。东芝在 2015 年发布的全 SiC UPS G2020，比先前的 G9000 系列体积小 17%，重量轻 18%\[11\]。随着 SiC 材料及器件封装等制备工艺成熟，未来在中大功率领域应用 SiC 功率器件将成为一种更普遍趋势。

尽管在中大功率领域 SiC MOSFET 具有众多的优势，但在 SiC MOSFET 的应用中仍存在一些问题。与应用的 Si 器件相比，SiC MOSFET 的驱动电压各厂商设计的有不同，开关速度快，电压和功率等级高，短路承受能力较弱，且在开关瞬态会产生较大电流变化率 di/dt 作用在寄生参数上引起过冲电压、振荡等一系列问题，影响器件的安全可靠运行。因此，分析 SiC MOSFET 工作原理和开关特性并建立开关瞬态模型，深入地研究和优化驱动电路的设计，研究变流器功率回路振荡问题，对提升 SiC 变流器的效率、功率密度和可靠性具有重要意义。

1.2 国内外研究现状

1.2.1 SiC MOSFET 开关特性

应用 SiC MOSFET 的变流器可以显著提高开关频率，增加功率密度。但随着变流器开关频率的提高，开关损耗增加，效率会降低，同时由于功率器件及功率回路寄生参数的存在，开关过程中的过冲电压和振荡等问题恶化。因此有必要对于开关特性进行深入的研究。

各器件厂商在发布 SiC MOSFET 产品时会配备数据手册，通过数据手册可以简单的了解器件的开关特性典型值。但由于实际应用中变流器参数与器件手册中测试条件有所不同，开关特性会存在较大的偏差。文献\[12-13\]通过双脉冲实验对开关特性进行了测试，可以反映不同工况下变流器的开关特性。文献\[14-15\]在双脉冲测试的基础上完成了不同参数下的实验和仿真，据此可以定性地分析变流器的参数对于开关特性的影响，但上述测试和分析并不能反映变流器的参数对开关特性影响的基理。此外，为了更好的分析 SiC MOSFET 的开关特性，部分器件厂商（CREE、ROHM）给出了其旗下 SiC 功率器件的 Spice 模型，基于此模型可以较为精确、便捷地分析器件的开关特性。但是大部分器件厂商并未提供 SiC 功率器件的全系列 Spice 模型，且所提供的 Spice 模型是一种机理模型，许多参数如沟道内部相关参数（如沟道长度）无法直观获取。目前，研究 SiC MOSFET 开关特性的另一种重要方法是基于器件开关过程的动态特性建立行为模型\[17\]，文献\[18\]对于分段线性模型进行了优化，解释了寄生电感对于开关过程的影响，但该模型仅可以用于简单地评估开关过程及损耗。文献\[19\]根据器件的开关过程建立微分方程，通过迭代的方法计算 SiC MOSFET 的开关量数值，但考虑的寄生参数较多且相互耦合，不适合工程应用。文献\[20-21\]对于开关过程进行了详细的分段，并分段列写了详细方程，建立了开关模型，但其并未考虑传输电容的非线性。因此，本文在分析 SiC MOSFET 器件结构和工作特性的基础上，对开关过程进行详细地定性和定量分析，建立简单的 SiC MOSFET 解析模型，研究不同参数对于开关特性的影响与作用机理，为变流器的设计提供参考。

1.2.2 SiC MOSFET 驱动电路

为了更好的发挥 SiC MOSFET 的优势，提高变流器系统的性能和可靠性，驱动电路承担着至关重要的角色。与传统的 Si MOSFET 和 Si IGBT 相比，SiC MOSFET 也属于电压控制型器件，但有所不同的是 SiC MOSFET 开关速度快、耐压高、开关瞬态的 di/dt 和 dv/dt 高、短路承受能力弱、驱动电压有所不同（CREE的 CAS30017BM2 驱动电压典型值为+20V 和-5V），这对于驱动电路的功率放大、信号隔离、驱动电源、故障保护等设计提出了更高的要求。

目前国外 ROHM、CREE、AgileSwitch 等厂商针对部分 SiC 功率模块推出驱动电路，但这些产品的价格较高，功能和参数有限且驱动电路相关资料尚未公开。国内厂商（落木源、青铜剑等）对于大功率 SiC 功率模块的驱动产品较少且尚未成熟。因此，有必要对于驱动电路的设计进行深入地研究和优化。文献\[22\]提出了一种可调节驱动电压的驱动电路，并完成了 CREE、ROHM 和 Infineon SiC 器件双脉冲测试。文献\[23\]提出了一种驱动负向电源的实现电路，仅需要单电源和线性稳压器或稳压二极管，具有低成本、简单、易实现等特点，但输出功率能力有限。文献\[24\]设计了一款具有高 dv/dt 耐量的驱动电路，隔离电源变压器的传输电容低至 2.5pF，并通过 CREE 10kV SiC MOSFET 驱动测试验证了其可靠性。文献\[25\]采用分立器件对驱动电路进行了设计，功率放大电路部分主要采用了两级结构，第一级为三极管组成的缓冲器，第二级为三极管组成的全桥结构，该驱动电路仅需单一电源，但实验测试功率等级较低。文献\[26\]对 IGBT 驱动功率放大电路的设计进行了综述。文献\[27\]表明 PI 公司研究出了一种新型信号磁隔离技术，满足隔离、寿命以及干扰等标准，但并未发布详细的设计原理。文献\[28\]提出一种低延迟的磁隔离驱动电路，实验测试在控制信号为 400kHz 的方波下驱动板上升延迟时间为 49.6ns，下降沿延迟时间为 18.4ns。

国内外学者还针对 SiC MOSFET 在开关瞬态的过冲电压、振荡等问题展开了驱动电路的优化研究。文献\[29-30\]设计了一款开环全桥型多电平驱动电路，通过控制功率放大电路的不同开关管的动作，实现不同关断驱动中间电平作用在 SiC MOSFET 的关断子阶段的目的。实验验证了该驱动电路对开关特性的改善效果，该方法电路实现简单，但并未分析关断中间电平对关断效果的影响。文献\[31\]提出了电流注入型 SiC MOSFET 有源驱动方法研究，该方法通过栅极电压的反馈实现对栅极电压的多电平控制，不同实验条件的测试验证了其抑制过冲电压、振荡和EMI 的有效性，但其未考虑不同电流下密勒平台电压的不同。文献\[32\]设计了一款闭环全桥型多电平驱动电路，能适应不同负载电流的应用场合，但其检测反馈电路存在闭环延迟时间，对硬件设计要求较高。因此有必要根据开关特性对多级电平关断驱动电路进行研究。

此外，保护技术的研究对 SiC MOSFET 安全、可靠的运行至关重要，文献\[33-35\]的研究表明 SiC MOSFET 的短路承受能力弱，应在 2µs 内关闭脉冲，这对于 SiC MOSFET 的短路保护电路提出更高的要求。现有的短路保护方案主要有:去饱和检测、罗氏线圈电流检测、电感电流检测、附加源极电流检测、栅源极电压和电荷检测。考虑到适用范围和可靠性，目前在工程上应用最多的仍是去饱和检测电路。但去饱和检测的方法应用于 SiC MOSFET 短路保护存在检测延迟时间长的问题，需要对参数进行优化设计。对于软关断电路的研究，文献\[41\]提出了一种变驱动电阻的方法，可以较好的抑制短路时的过冲电压和振荡，但作用时刻和电路硬件实现较为困难。文献\[42\]分析了变驱动电压软关断的方法，所提方法对电路的时序性要求较高，且其并未进行实验验证。

1.2.3 变流器振荡问题

在轨道交通领域，新一代辅助变流器对效率、可靠性、功率密度的要求越来越高，而变流器的性能很大程度上取决于功率半导体器件。以 SiC MOSFET 替代传统的 Si IGBT，可获得更高的开关频率和更低的损耗。但由于 SiC MOSFET的开关速度快，高 di/dt 造成 SiC MOSFET 结电容和线路寄生电感谐振从而引发关断过程中的高频振荡、过冲电压以及电磁兼容(EMC)等问题。现有抑制高频振荡的主要方法有：减小线路寄生电感、增大驱动电阻或者栅源极电容、串入磁珠、采用多级电平驱动电路、模块两端并联解耦电容。其中减小寄生电感的方式最为直接，通过选择低感电容或者优化叠层母排和封装设计，但寄生电感减小幅度有限。增大驱动电阻或者栅源极电容的方式会减小开关速度，增加开关损耗。串入磁珠的方式在大功率应用中存在磁饱和的问题。相对而言，在大功率变换器的应用场合，在模块两端并联解耦电容的方式更为简单、有效且不会减缓开关速度。

目前在模块两端并联解耦电容的研究主要是针对解耦电容对 SiC 功率器件关断特性的影响，文献\[48\]考虑了解耦电容的位置以及材质对于关断振荡的影响，文献\[49\]在时域上分析高频振荡的数学表达式并进行推导和计算过冲电压的时域表达式，但由于公式的复杂性使其很难适用于多寄生参数的高阶系统。文献\[50\]在频域上对关断振荡进行了分析，建立了小信号模型并推导了完全解耦的条件，但其分析的功率等级较低且并未完全考虑解耦电容上的寄生参数。在级联型电力电子变换器系统，解耦电容与前级系统输出 DC-Link 电容、线路寄生参数之间的低频振荡（<50kHz）现象需要引起关注，该振荡会导致 DC-Link 电容电流有效值增加，进而影响电容的寿命与可靠性。文献\[54\]提出了为抑制低频振荡而采用解耦电容串接电阻组成的 RC 缓冲电路的形式，对其进行了详细的频域分析并给出了电阻和解耦电容的选型，但是采用 RC 缓冲电路会增大系统损耗，同时增加系统设计的复杂程度。文献\[55\]对相电容 H 桥模块的相间电容与寄生电感的谐振电流进行了分析，并进行了相关的实验验证，但实验测试的功率等级较小且与解耦电容的振荡模型存在较大差别。因此有必要对于解耦电容和 DC-Link 电容谐振电流的有效值进行解析，并根据电流有效值对开关频率、解耦电容和 DC-Link 电容的参数选择提供参考。

1.3 本文研究内容

本文主要针对 SiC MOSFET 开关特性、驱动电路的优化及功率回路的振荡问题等展开研究，主要内容安排如下几部分：

第一章介绍 SiC 材料的优势，阐述器件的发展历程、应用的现状和发展的前景，分析 SiC 应用的难点及研究方向，总结 SiC MOSFET 开关特性、SiC MOSFET的驱动电路及变流器振荡问题的研究现状，简略地说明本文的研究内容。

第二章研究 SiC MOSFET 的器件结构和工作特性。对开通和关断过程进行了详细的理论分析，建立 SiC MOSFET 的开关瞬态模型，并通过实验测试模型的准确性。针对 SiC MOSFET 应用过程中常用到的电路参数对于开关特性的影响进行仿真研究，为驱动电路优化和变流器的功率回路分析提供理论基础。

第三章总结 SiC MOSFET 驱动电路设计的基本要求，对驱动电路设计中驱动电压的选取、电源的设计、功率放大电路的设计、隔离方式的选择进行了深入的分析、对比、设计。针对 SiC MOSFET 的关断瞬态特性恶化的问题，设计多级电平关断驱动电路的方案，对不同负载电流和关断中间电平时的关断电压尖峰和损耗进行研究，优选中间驱动电平和作用时刻，完成硬件电路的设计。根据 SiC MOSFET 短路承受能力弱等特点，对短路保护电路、软关断等驱动电路保护技术进行研究。最后通过实验验证上述各电路的性能，为驱动电路的设计提供参考。

第四章以机车全碳化硅辅助变流器功率回路振荡为例，在充分考虑寄生参数的基础上，对于 SiC MOSFET 关断振荡建立小信号模型，推导解耦电容参数对线路寄生电感完全解耦的条件，并在频域上分析高频振荡和低频振荡。在此基础上，针对两级系统存在的低频振荡问题，提出一种谐振电流分析模型，通过阻抗分析网络对低频谐振电流进行计算，最后实验和仿真证明关断振荡分析以及谐振电流解析的准确性，并对系统参数设计提供了指导意见。

第五章总结全文的工作内容，对尚需完善的内容进行展望。

2\. SiC MOSFET 工作原理与开关特性研究

为了更好地进行驱动电路设计及功率回路振荡问题的研究，SiC MOSFET 工作原理与开关特性的分析显得尤为重要。本章首先分析 SiC MOSFET 的结构和工作原理。然后，详细地研究了 SiC MOSFET 的开通及关断过程理论，建立了器件开关过程的瞬态模型，完成了双脉冲实验验证，最后在瞬态模型的基础上研究了驱动和功率电路设计中的相关参数对于开关特性的影响。

2.1 SiC MOSFET 结构与工作特性分析

2.1.1 器件基本结构

与 Si MOSFET 相比，SiC MOSFET 具有耐高温、耐高压、开关速度快、导通电阻小等优点而被广泛地应用。常见的结构主要有以下两种：平面栅结构和沟槽栅结构，如图 2-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkoOae2eUofjfWAAicKno2FVGUCl1CIXicxUGBy5OyxqaEuhe03IQiayic8A/640?wx_fmt=png&from=appmsg)

由 SiC MOSFET 结构图可以看出，SiC MOSFET 存在一个寄生三极管和寄生二极管。对于寄生三极管而言，通常采用将 P 体型区和源极区短路的方式来减小三极管导通的几率，增加可靠性。对于 SiC MOSFET 自带的体二极管，其相对于Si MOSFET 的体二极管反向恢复特性较好，可在变流器中用作续流二极管。但相比于 SiC SBD 二极管而言，其正向导通压降较大，当变流器死区时间变大时，导通损耗大，通常选择外并二极管降低损耗。

同 Si MOSFET 类似，SiC MOSFET 也属于电压控制型多数载流子导电器件。当栅极施加电压低于阈值电压时，P 体型层上方电子流导通沟道消失，器件阻断。器件耐压主要取决于漂移层 N-的厚度以及载流子的掺杂浓度。当栅源极施加电压大于阈值电压时，在 P 体型层上方建立电子流导通沟道，器件导通。平面栅结构的导通电阻主要包括三部分：沟道电阻、结型场效应晶体管区域（Junction Gate Field Effect Transistor, JFET）电阻、漂移区电阻。由于 SiC 材料的特性，SiC MOSFET的沟道迁移率较低，采用平面栅结构会具有比较大的沟道电阻。相比于平面栅结构，沟槽栅结构则消除了 JFET 区域，提高了沟道迁移密度，减小了导通电阻，更适用于 SiC MOSFET。

2.1.2 工作特性

描述 SiC MOSFET 工作特性的曲线主要有：输出特性曲线、转移特性曲线。其中输出特性曲线主要描述的漏极电流 ID 和漏源极电压 VDS 及栅源极电压 VGS 之间的关系。转移特性曲线主要描述了漏极电流 ID 和栅源极电压 VGS 的关系。由SiC MOSFET 特性曲线可以看出，SiC MOSFET 的工作区包括可变电阻区、饱和区、截止区以及击穿区。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkrzAib4NiaMSgrHbbPlf0On4Cx5AzbIQa8bZGpXNH2r89HyLkhUEoj9KA/640?wx_fmt=png&from=appmsg)

（1）截止区（VGS<Vth）

此时，SiC MOSFET 处于阻断状态，器件承受直流母线电压，无电流流过，只存在极小的漏电流。

（2）饱和区（VGS>Vth, VDS≥VGS-Vth）

此时 SiC MOSFET 的漏极电流 ID 主要取决于栅源极电压 VGS，与漏源极电压VDS 基本无关，一般满足式（2-1）。有时为了提高精度也可以用二次拟合函数如式（2-3）。由图可以看出此区域的 VDS 电压较大，因此该阶段的损耗较大，电力电子器件在此阶段停留时间很短。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkWp1BrTyIQkqUHiaHzdvoJ1LRg7WsPLy4g1TlLzNmtYlyszAm5Dnia4DA/640?wx_fmt=png&from=appmsg)

（3）可变电阻区（VGS>Vth, VDS<VGS-Vth）

此时 SiC MOSFET 处于完全导通状态，器件呈现电阻性。通态电阻的大小主要取决于栅极电压，此阶段为电力电子器件的主要导通区域。

（4）击穿区（VDS>V(BR)DSS）

当器件的漏源极电压增大超过击穿电压时，器件发生雪崩击穿，ID 急剧增大。超过一定的能量之后，器件损坏。

2.2 SiC MOSFET 开关特性分析及瞬态模型建立

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkHcicVZVVF2mdGrC4ePGOZAMuLOTxNTYJ6KrBpOuC7P61ib4WAQtnOwLA/640?wx_fmt=png&from=appmsg)

在电力电子变换器的设计时，通常选择双脉冲电路进行 SiC MOSFET 开关特性测试。为此，本文以考虑寄生参数的双脉冲电路为例进行 SiC MOSFET 模块的开关特性分析。如图 2-3 所示，其中 Q1、Q2 为模块内部封装的两个 SiC MOSFET，Q1 为上桥臂 SiC MOSFET，Q2 为下桥臂 SiC MOSFET，D1、D2 分别为模块内部的功率二极管，Q2 为主动管，栅极输入为双脉冲，Q1 为被动管，进行续流，栅极输入为驱动负向电压 VEE。RiG 为模块 SiC MOSFET 的内部驱动电阻，RG1，RG2 分别为模块内 Q1 和 Q2 的外部驱动电阻。CGS 为模块内 SiC MOSFET 的栅源极电容。CGD 为模块内 SiC MOSFET 的传输电容，该电容随漏源极电压 vDS 呈强烈的非线性。CDS 为模块内 SiC MOSFET 的漏源极电容。Liss 和 LiD 分别为 SiC MOSFET 模块内的源极电感和漏极电感，Lloop2 和 Lloop3 为模块内 Q1 和 Q2 的连接电感。Lloop1，Lloop4分别为母排的寄生电感。Rloop1，Rloop4 分别为母排的寄生电阻。负载电感电流等效成理想且恒定电流源 iL。VDC和 CDC分别为输入的电压源和 DC-Link 电容，其上电压可认为保持 不变 。 为了分析开关特性的简便 ，令主功率回 路 寄 生 电 感 为Lloop=Lloop1+Lloop2+Lloop3+Lloop4+2LSS2+2LiD。主功率回路寄生电阻 Rloop=Rloop1+Rloop2。Q2 的栅极驱动电阻为 RG=RiG+RG2，SiC MOSFET 的输入电容为 Ciss=CGS+CGD，SiC MOSFET 的输出电容 Coss=CDS+CGD。

2.2.1 开通过程

SiC MOSFET 的开通过程波形如图 2-4 所示，其中包括漏源极电压 vDS，漏极电流 iD，栅源极电压 vGS，栅极输入驱动电压 vdriver。开通过程主要分为四个阶段。在栅极输入驱动正向电压 VCC 到来之前即 t<t0 时，Q2 的栅源极电压 vGS 为驱动负向电压 VEE，Q2 截止，漏极无电流流过，漏源极承受的电压约为直流母线电压 VDC。Q1 截止，负载电流 iL 完全流过二极管 D1 进行续流。

（1）第一阶段（t0<t<t1）开通延迟阶段

t0 时刻，栅极输入驱动电压 vdriver2 由驱动负向电压 VEE 变为驱动正向电压 VCC，SiC MOSFET 的栅源极电压 vGS 由 VEE 开始上升，并给输入电容 Ciss 开始充电即 CGS两端电压上升，CGD 两端电压上升。在 t1 时刻，栅源极电压 vGS 上升至阈值电压 Vth，此阶段结束，时刻 t1 由式（2-7）求取。该阶段栅源极电压 vGS 满足式（2-4），漏极电流 iD 满足式（2-5），漏源极电压 vDS 满足式（2-6）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkhtLSwK1GS8NIeRVO5Delkhdic7kDDzczG4A1YvSjV4DJq09qlunccFQ/640?wx_fmt=png&from=appmsg)

（2）第二阶段（t1<t<t2）漏极电流 iD 上升阶段

t1 时刻，栅源极电压 vGS 达到阈值电压 Vth。此后，SiC MOSFET 处于饱和区，栅极输入驱动电压 vdrive 进一步给输入电容 Ciss 充电，栅源极电压 vGS 继续增加，同时 SiC MOSFET 的沟道打开，负载电流 iL 开始从续流二极管 D1 中逐渐转移至 SiC MOSFET 沟道中，SiC MOSFET 的漏极电流 iD 快速增加。由于功率回路的寄生电感 Lloop 会产生一个与漏源极电压 vDS 反向的电压，漏源极电压 vDS 稍有下降。当漏极电流 iD 增加至负载电流 iL 时，续流二极管 D1 电流为零并截止，栅源极电压 vGS达到密勒平台电压 VM 附近，此阶段结束，时刻 t2 由式（2-10）求取。此阶段栅源极电压 vGS 仍满足式（2-4）所示，漏极电流 iD 变为（2-8），漏源极电压 vDS 变为（2-9）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkrdJVjqFLyOn1PovpibeSpFqBBVLmxR3udBljMWb3V8eZWkZdkZB2pSA/640?wx_fmt=png&from=appmsg)

（3）第三阶段（t2<t<t3）漏源极电压 vDS 下降阶段

t3 时刻，漏极电流 iD 达到负载电流 iL，续流二极管 D1 电流为零，二极管承受反压并截止。此后，栅源极电压 vGS 处于密勒平台阶段，栅极电流 iG 给栅漏极电容CGD 放电，几乎很少给栅源极电容 CGS 充电。栅漏极电容 CGD 在此阶段呈现强烈的非线性，可由 2.2.3 节参数提取的方法进行拟合。同时由于模块内部二极管 D1 通常为外并 SiC 肖特基二极管，其反向恢复特性可以忽略，但结电容反向充电不可忽略，由于功率回路寄生电感 Lloop 影响，漏极电流 iD 会出现超调并振荡。当漏源极电压 vDS 下降到通态电压（iL•Ron）时，此阶段结束。该阶段栅源极电压 vGS满足式（2-11），漏极电流 iD 满足式（2-12），漏源极电压 vDS 满足式（2-13）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkJVdicuoQEUSxSHUPuakpKsACE1CcxLVMUo18gG4DW2uL0BsTntlNuYw/640?wx_fmt=png&from=appmsg)

（4）第四阶段（t3<t<t4）栅源极电压 vGS 上升阶段

t4 时刻，漏源极电压 vDS 下降到通态电压（iL•Ron），SiC MOSFET 处于可变电阻区，SiC MOSFET 呈电阻性。漏极电流 iD 在第三阶段的基础上继续振荡。栅极输入驱动电压 vdrive 继续给输入电容 Ciss 充电，最终达到驱动正向电压 VCC。该阶段漏极电流 iD 仍满足式（2-12），但栅源极电压 vGS 变为式（2-15），漏源极电压 vDS满足式（2-16）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqklrEf3cib5hL177ZP2RNA8qhARegtRvXs6OD0icicrfyWKMxOdmrLKicOjg/640?wx_fmt=png&from=appmsg)

开通损耗发生在漏极电流 iD 上升阶段和漏源极电压 vDS 下降阶段。开通延迟阶段和栅源极电压 vGS 上升阶段主要为 SiC MOSFET 结电容的充放电过程，几乎不消耗能量，损耗计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk2ojYf0gpxgKWslib3bMUYSicIbPVd26PRWnvjBkyMA0LAY7491KwElibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkInI94odXAqnLkFh7iatl7AT2aF1SXsCibynmibjZZyPic5h8lAwEVC7Zkg/640?wx_fmt=png&from=appmsg)

2.2.2 关断过程

SiC MOSFET 的关断过程波形图如图 2-5 所示，其中包括漏源极电压 vDS、漏极电流 iD、栅源极电压 vGS、栅极输入驱动电压 vdriver。关断过程主要分为四个阶段。在栅极输入驱动负向电压 VEE 到来之前即 t<t5 时，Q2 栅源极电压 vGS 为驱动正向电压 VCC，Q2 处于完全导通状态，漏极电流 iD 为负载电流 iL，漏源极电压 vDS 为完全导通状态压降 iL•Ron。Q1 和续流二极管 D1 均处于截止状态。

（1）第一阶段（t5<t<t6）关断延迟阶段

t5 时刻，栅极输入驱动电压 vdriver2 由驱动正向电压 VCC 变为驱动负向电压 VEE，SiC MOSFET 的栅源极电压 vGS 开始由 VCC 下降，输入电容 Ciss 开始放电即 CGS 两端电压下降，CGD 两端电压下降。在 t6 时刻，栅源极电压 vGS 下降至密勒平台电压VM，此阶段结束，时刻 t6 由式（2-21）求取。该阶段栅源极电压 vGS 满足式（2-18），漏极电流 iD 满足式（2-19），漏源极电压 vDS 满足式（2-20）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk7Cnmx0alSasDtia1rrxV2XicicMgZ4Sqs3S495VleqQicEI9DG2aZibbKAQ/640?wx_fmt=png&from=appmsg)

（2）第二阶段（t6<t<t7）漏源极电压 vDS 上升阶段

t6 时刻，栅源极电压 vGS 达到密勒平台电压 VM，此后，SiC MOSFET 进入饱和区。此阶段栅极电流 iG 主要用于给栅漏极电容 CGD 放电，几乎很少给栅源极电容CGS 放电，栅源极电压 vGS 几乎不变。在漏源极电压 vDS 上升初期，由于 vDS 电压较小，栅源极电容 CGS 较大，漏源极电压 vDS 上升缓慢，当漏源极电压 vDS 上升达到栅源极电压 vGS 左右时\[58\]，栅源极电容 CGS 迅速变小，漏源极电压 vDS 快速上升。随着漏源极电压 vDS 上升，上桥臂 Q1 的输出电容 Coss 放电，漏极电流 iD 会略有减小。当漏源极电压 vDS 上升到达直流母线电压 VDC 时，该阶段结束。此阶段栅源极电压 vGS 满足式（2-22），漏极电流 iD 满足式（2-23），漏源极电压 vDS 满足式（2-24）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk6QIHYUvrGhrYF2QEEfWsKGwiafMyE4rMcu1iabN5xrS0hCXeyvOUcRYA/640?wx_fmt=png&from=appmsg)

（3）第三阶段（t7<t<t8）漏极电流 iD 下降阶段

t7 时刻，漏源极电压 vDS 到达直流母线电压 VDC。此后，续流二极管 D1 的电压开始由负向电压变为正向电压，续流二极管 D1 导通。负载电流 iL 开始从 SiC MOSFET 沟道中逐渐转移到续流二极管 D1 中，SiC MOSFET 的漏极电流 iD 快速下降。由于功率回路的寄生电感 Lloop 会产生一个与漏源极电压 vDS 同向的电压，漏源极电压 vDS 上升并产生过冲电压 ΔVp。同时，栅源极电压 vGS 开始从密勒平台电压VM 下降，当下降到阈值电压 Vth 时，该阶段结束。此阶段栅源极电压 vGS 满足式（2-26），漏极电流 iD 满足式（2-27），漏源极电压 vDS 满足式（2-28）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkr0VicZiaRQBACPHbAbSjvtEoxrNnqRyNaCQuwVHLLzqeKCGa9ZKDNJZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkZNAr9l3WtczKG7h84rUjsgFS1JnEG06LNafWJkibGHAoictNGdJQdzYA/640?wx_fmt=png&from=appmsg)

（4）第四阶段（t8<t<t9）栅源极电压 vGS 下降阶段

t8 时刻，栅源极电压 vGS 下降到阈值电压 Vth，SiC MOSFET 沟道完全关闭，负载电流 iL 全部流经续流二极管 D1。此后，SiC MOSFET 进入截止区。在驱动负向电平 VEE 的作用下，栅源极电压 vGS 最终稳定在 VEE。由于 SiC MOSFET 的输出电容 Coss 与功率回路的寄生电感 Lloop 的相互作用，该阶段会发生漏极电流 iD 和栅源极电压 vDS 的振荡。此阶段漏源极电压 vDS 仍满足式（2-28），栅源极电压 vGS 仍满足式（2-26），所不同的是漏极电流 iD 变为式（2-31）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkxKBZWrSvePFsNUOvgvr7icMf104UniclbiaGN7YZwsGtO39VImk8wHUdg/640?wx_fmt=png&from=appmsg)

关断损耗发生在漏源极电压 vDS 上升阶段和漏极电流 iD 下降阶段。关断延迟阶段和栅源极电压 vGS 下降阶段主要为 SiC MOSFET 结电容的充放电过程，几乎不消耗能量，损耗计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkG0kBWSWUwFcBjJ9aMATTqicIFenLOJvGh19Ub59wG0zkkAOx7ibibQeRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkOQENZ2LffvWjIkyEhNTiby5W7Z6WE8QJXjLasKAeShibCssPh1ZMZYJQ/640?wx_fmt=png&from=appmsg)

  

2.2.3 参数提取

由 SiC MOSFET 的动态特性模型分析可知，SiC MOSFET 的栅漏极结电容CGD、漏源极结电容 CDS 及栅源极结电容 CGS 与器件的动态特性直接相关，其容值的精度将直接影响模型的准确性。本节将对 SiC MOSFET 结电容的参数提取进行深入的解析。从 CREE 1200V SiC 器件数据手册中寄生电容与漏源极电压 vDS 相关曲线即图 2-6 可以看出，随着漏源极电压的增加，输入电容 Ciss 基本保持在 12nF左右不变，而转移电容 Crss 和输出电容 Coss 则呈现强烈的非线性特征。其中输入电容 Ciss、转移电容 Crss 以及输出电容 Coss 的定义为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk8aqIfd91cYYFPdsmE1rXImJiahp4t0c2rmJMCXQyQIFqyCaCtqrs4zg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqksV3XS3ljbmic92YhOibic3atOZXMICFjrKUiatLK7v5R8cKQM1DnibKzjyA/640?wx_fmt=png&from=appmsg)

对于转移电容 Crss（即栅漏极结电容 CGD），本文采用分段拟合的方法，通过设定不同漏源极电压值时不同的函数以达到和器件手册中传输电容 Crss 曲线相一致的目标，拟合过程主要分为四段，不同段的漏源极电压 vDS 及转移电容 Crss 的表达式如式（2-36）所示，相关拟合曲线如图 2-7 红色实线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkicEeo4XZuk64H1DNXibmXcOOFsMmicUiaOWn4a9yZtCrsMPrzfqiafvt4aA/640?wx_fmt=png&from=appmsg)

对于输出电容 Coss，本文采用两段拟合的方式如（2-37）所示。当漏源极电压vDS 较小时输出电容 Coss 容值变化较大，采用函数拟合；当漏源极电压 vDS 较大时输出电容 Coss 容值变化较小，采用恒值，拟合曲线如图 2-7 蓝色实线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkLlFicbXZKYyXe56ibo83CSJkUQf1vfkGDvurgk0OVKia8Zo8jBdG1tRWg/640?wx_fmt=png&from=appmsg)

2.3 SiC MOSFET 开关瞬态模型仿真与实验验证

本文在 50kVA 碳化硅功率器件的轨道变流器的基础上，搭建双脉冲测试平台。原理图如图 2-3 所示，实物图如图 2-8 所示。在 MATLAB 中搭建开关过程特性仿真模型，模型参数与实验参数保持基本一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkG1DqGayQ7jNRFTxlMryP9iaQBQ9Hx3O8oxzBGVSjSBDiasj40gzILb3A/640?wx_fmt=png&from=appmsg)

测试条件为直流母线电压 VDC=600V，负载电流 iL=300A，开通电阻 Ron=2.5Ω，关断电阻 Roff=5Ω，驱动正向电压 VCC=+20V，驱动负向电压 VEE=-5V，吸收电容Cde=150µF。开通和关断过程中漏源极电压 vDS 和漏极电流 iD 波形图如图 2-9 所示，开关特性参数统计表如表 2-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkTSnqZ88vkkMH3oEWsyBfqlxM91ibJIZ2LZ9KAPagW6JQY9M4ejfj91w/640?wx_fmt=png&from=appmsg)

在 SiC MOSFET 开通和关断的过程中，模型仿真与实验测试波形基本一致，开关时间、漏极开通电流尖峰、漏源极关断过冲电压、开关损耗等指标比较接近。但在开通和关断过程中漏源极电压 vDS 振荡及漏极电流 iD 振荡波形有所差别，主要是由于器件的参数与数据手册的数据有所偏差，实验中的功率回路寄生电感等参数提取不够精确，同时由图 2-9(a)开通漏极电流振荡波形的畸变可以看出，实验测试时周围环境干扰会对罗氏线圈 CWT Mini3B 等测量设备产生影响。

2.4 电路参数对于开关特性的影响

由 2.2 节的开关特性分析可知，电路的寄生参数与 SiC MOSFET 的开关特性直接相关，其设计的好坏将直接影响 SiC MOSFET 器件的性能。为此本文在模型验证测试准确的基础上，针对驱动和功率电路设计中所需的驱动电阻 RG、驱动电压 VGS、功率回路寄生电感 Lloop 以及并联栅源极电容 CGS2 的参数，仿真研究了其对 SiC MOSFET 开关特性影响，以便为电路设计提供参考。

2.4.1 驱动电阻的影响

不同驱动电阻下 SiC MOSFET 开通和关断波形如图 2-10 所示，开关损耗如表2-2 所示。随着栅极驱动电阻 RG 变大，驱动电流 iG 变小，SiC MOSFET 栅极输入电容 Ciss 的充放电速度变慢，器件的开关速度变慢，漏源极电压变化率 dvDS/dt 及漏极电流变化率 diD/dt 变小，漏源极电压 vDS 和漏极电流 iD 交叠区域变大，开关损耗增加，漏源极电压 vDS 和漏极电流 iD 振荡变小，漏源极关断过冲电压 ΔVP 变小，漏极开通电流尖峰 iP 变小。因此，工程上应用时可以通过增大栅极驱动电阻 RG 来降低开通漏极电流峰值和振荡，减小关断漏源极电压过冲及振荡，改善 EMI 问题。但此方式下的开关损耗显著增加，开关速度降低，尤其在高频应用时应均衡考虑，可参照模型仿真数据进行选取。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqklysKv0CY3W3flNrmYIwswqrPhXoPiaH4iaa1M467qKDSuPDzk94NTSJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkrpScE1pLxFw1t9uTUOLiajFDErURhKQhqaBTvdeMEPywCuxe0lIno0g/640?wx_fmt=png&from=appmsg)

2.4.2 驱动电压的影响

不同驱动正向电压 VCC 时 SiC MOSFET 开通和关断波形如图 2-11 所示，开关损耗如表 2-3 所示。驱动正向电压 VCC 变大对于开通过程的影响与栅极驱动电阻RG 的效果相反，即开通时间 ton 变短，开通损耗 Eon 变小，漏极电流 iD 振荡变大，漏极开通电流尖峰 IP 变大。但驱动正向电压增大对于关断过程只影响由驱动正向电压 VCC 降至密勒平台 VM 的延迟时间 td(off)，对于关断下降时间 tf、关断损耗 Eoff，关断过冲电压 ΔVp 以及电压振荡基本没有影响，这是由于在关断过程中电压上升阶段式（2-24）和电流下降阶段式（2-26）、式（2-27）均与驱动正向电压 VCC 无关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkGLhEnTaHReqLRbAbYnCn7YiaU1cKtKAMbxbBicuoT1KyVwpdTCskyKpQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkV5kerlCibDE0weiaGRegwAZhb4P4cFCvl4XkjGlwIeRHZESST8g4p0zQ/640?wx_fmt=png&from=appmsg)

不同驱动负向电压 VEE 时开关损耗如表 2-4 所示，SiC MOSFET 开通和关断波形如图 2-12 所示。驱动负向电压 VEE 对于开关过程的影响与正向驱动电压 VCC 的影响正好相反，即对于开关过程，随着驱动负向电压 VEE 增大，关断时间 ton 变短、关断损耗 Eon 变小、关断电压过冲电压和振荡变大；对于开通过程，驱动负向电压与开通时间 ton、开通损耗 Eon、漏极电流 iD 尖峰和振荡无关，只影响由驱动负向电压 VEE 上升至开通阈值电压的延迟时间 td(on)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkIkjOjCNx1IlSMfr4lb2aEqes3E8SzQG6QUvJsQjGB2BRZj1iaHYoW9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkIfeE261CjYlmDNRBt2JgfJbTqVMBXPpW6wptg27juqibicGjVZtcumIg/640?wx_fmt=png&from=appmsg)

2.4.3 功率回路寄生电感的影响

不同功率回路寄生电感 Lloop 下 SiC MOSFET 开通和关断波形如图 2-13 所示，开关损耗如表 2-5 所示。随着功率回路寄生电感 Lloop 变大，在开通过程中开通时间 ton、漏极电流变化率 diD/dt、漏源极电压变化率 dvDS/dt 基本保持不变，漏极电流峰值 Ip 略微增大，漏极电流 iD 振荡变大。开通过程由于漏极电流变化率 diD/dt作用于功率回路寄生电感 Lloop 上会产生与直流母线电压 VDC 反向的电压，因此在开通过程中，随着功率回路寄生电感 Lloop 的增加，漏源极电压 vDS 降低，开通损耗Eon 也随之降低。在关断过程中关断时间 toff、漏极电流变化率 diD/dt、漏源极电压变化率 dvDS/dt 基本保持不变，关断损耗 Eoff 略有增加。关断过程由于漏极电流变化率 diD/dt 作用于功率回路寄生电感 Lloop 上会产生与直流母线电压 VDC 同向的电压，同时由于功率回路寄生电感 Lloop 会和 SiC MOSFET 的输出电容 Coss 谐振，因此，在关断过程中，随着功率回路寄生电感 Lloop 的增加，漏源极过冲 ΔVP 越大，漏源极电压 vDS 和漏极电流 iD 振荡变大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkNzJcS2UPCQx1DhyVZDQzv0XTqcZo6Oe6x5oibXefsgmRXomYnaljXaA/640?wx_fmt=png&from=appmsg)

2.4.4 栅源极电容的影响

并联不同栅源极电容 CGS2 下的 SiC MOSFET 开通和关断波形如图 2-14 所示，开关损耗如表 2-6 所示。随着并联栅源极电容 CGS2 变大，SiC MOSFET 栅极等效输入电容 Ciss 变大，器件的开关速度变慢，开关损耗增加，漏极电流变化率 diD/dt变小，开通漏极电流峰值 IP 及关断过冲电压 ΔVp 变小，但漏源极电压变化率 dvDS/dt基本保持不变。漏极电流变化率 diD/dt 变小，主要由于并联栅源极电容 CGS2 影响SiC MOSFET 输入电容 Ciss 充放电，影响栅源极电压 vGS，并通过式（2-8）和式（2-27）影响漏极电流 iD。漏源极电压变化率 dvDS/dt 主要发生在密勒平台阶段，此阶段栅极电流 iG 主要给传输电容 CGD 充放电，几乎很少给栅源极电容 CGS 充放电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkK4ibPQZ5GSstZxoibmEZwOGCXrNFw8CFmhOkJY7NH4rOYR681pedoLicQ/640?wx_fmt=png&from=appmsg)

2.5 本章小结

本章首先对 SiC MOSFET 的结构和工作特性进行了分析。在此基础上，对 SiC MOSFET 开通和关断过程进行了详细的分析和数学表达式的列写，建立了 SiC MOSFET 开关特性的动态模型，通过双脉冲实验验证了动态模型的准确性。最后在动态模型的基础上研究了不同驱动电阻 RG、驱动电压 VGS、功率回路寄生电感Lloop 以及并联栅源极电容 CGS2 对 SiC MOSFET 开关特性影响，为驱动电路和功率回路的设计提供了参考。

3\. SiC MOSFET 驱动与保护技术研究

驱动电路作为变流器控制系统和功率电路的中间环节，具有隔离、功率放大和保护等关键作用，其性能的好坏将直接影响整个变流器的性能。为此，本章在第二章研究器件特性的基础上，根据 SiC MOSFET 功率模块的特点和应用，对驱动电路设计中的功率放大、隔离电路等关键部分进行了详细的设计，并研究了一种多电平关断驱动电路的方案，改善了 SiC MOSFET 的应用特性。最后对于短路保护、软关断等驱动电路保护技术进行了研究，并通过实验验证了保护电路的快速性和可靠性。

3.1 驱动电路设计要求

与 Si 功率器件特性有所不同，SiC 功率器件具有较低的沟道迁移率，需要更高的驱动电压，短路承受的能力更弱；具有更低的阈值电压，且阈值电压会随着温度和使用寿命的增加而降低，易发生由于对管动作而引起栅源极电压尖峰造成误动现象；具有极小的结电容，纳秒级的开关速度，在开关瞬态产生高的电流变化率 di/dt 和高的电压变化率 dv/dt 作用在功率回路和驱动回路的寄生参数上易产生振荡等问题。

鉴于 SiC 功率器件的特性，驱动电路应满足以下要求与准则：

（1）设计合理的驱动电压和驱动电阻，使 SiC MOSFET 的开关速度尽量快，导通电阻尽量小，同时保证驱动电压不超过栅极耐压，且避免器件误动作，增加抗干扰能力；

（2）功率放大功能，保障器件的驱动功率要求，且驱动峰值电流应足够大；

（3）隔离功能，保证功率电路和控制系统具有足够隔离耐压和共模抑制比；

（4）保护功能，当短路、欠压等故障发生时，保护电路的响应速度应足够快；

（5）驱动的延迟时间尽量短，这在变流器高频工作时尤为重要；

（6）驱动回路的寄生参数尽量的小，避免影响栅极的充放电速度，减小开关振荡；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkSN9Br6OZ8yaEgWkhyWm45acv6cBbTeibuhwgqlZ6rEE7vqsgYIicF0cA/640?wx_fmt=png&from=appmsg)

对驱动电路的结构进行设计如图 3-1 示，其中电源部分主要为驱动电路提供稳定、可靠的电源供给，隔离部分实现驱动电路原边侧和副边侧电气隔离，功率放大电路提供足够的驱动能力，保护电路包括短路保护、软关断、欠压保护和脉冲反馈，对短路、欠压以及脉冲丢失等故障进行保护。驱动电路的实物图如图 3-2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkcxnqo0MgbjbTXNkzvLVsRRehpgrBqze1QGibntM9gw6qcX580CGWxnw/640?wx_fmt=png&from=appmsg)

3.2 高压大功率驱动电路研究

3.2.1 驱动电压选取

当器件开通时，驱动电路接收到导通信号之后，输出驱动正向电压 VCC 给栅极输入电容 Ciss 充电。当栅极电压达到开通阈值电压 Vth 时，SiC MOSFET 开始导通并进入饱和区，随着栅极电压的升高，SiC MOSFET 进入可变电阻区并实现完全导通。由 CREE 1200V/300A SiC 功率器件的数据手册中输出特性曲线图 3-3 可以看出，在电流一定的情况下，稳态时导通电阻 RDS(on)随着驱动正向电压 VCC 的变大而减小，通态损耗和器件热击穿失效风险随之下降，变流器的效率也随之升高。但当驱动正向电压变大时，短路电流会成倍的增加，短路承受能力会随之降低。栅源极电压高于最大输入耐压+25V 时，栅极氧化层可靠性降低甚至被击穿损坏。此外，由 2.4.2 节分析可知当驱动正向电压增大时，开通时间 ton 变短，关断延迟时间 td(off)变长，开通损耗 Eon 变小，漏极电流 iD 尖峰和振荡大。均衡以上几点，SiC功率器件的驱动正向电压通常选择为+18~+20V，本文选择为+20V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkpofo72eGJzehCf5BFBiadYjIU2sUb1Jiaibx2x9k9IufnC5cY978AiaBNQ/640?wx_fmt=png&from=appmsg)

当器件关断时，驱动电路接收到关断信号之后，输出驱动负向电压 VEE 给栅极输入电容 Ciss 放电，当栅极电压低于器件关断阈值电压 Vth 时，器件关断截止。由CREE 1200V/300A SiC 器件手册可知，阈值电压为+2.3V，且该阈值电压，会随着温度的增加而降低。但由于 SiC MOSFET 的开关速度快和寄生参数的存在，SiC功率模块极易产生振荡和正向串扰\[30\]，造成误触发。因此，SiC MOSFET 通常采用驱动负压关断。但过低的驱动负向电压会叠加振荡和负向扰动造成栅极电压过低，影响功率器件的寿命和可靠性。此外，由 2.4.2 节分析可知驱动负向电压变低时，关断时间 ton 和开通延迟时间 td(on)变短、关断损耗 Eoff 减小、关断振荡和过冲电压 ΔVP 变大。因此综合串扰、开关速度、损耗和过冲电压，本文驱动负向电压选择-5V。

3.2.2 电源设计

在驱动电路设计中，驱动电源应具备：1、足够的输出功率和稳定的输出电压，保障 SiC MOSFET 的开关速度和稳态驱动电压；2、宽范围的电压输入，避免因输入电压的脉动影响驱动电路的可靠运行；3、高隔离能力，由于 SiC MOSFET 的工作电压较高，在原边侧和副边侧会存在较大的电压差，同时 SiC MOSFET 的开关速度较快，在开关过程中原边侧地和副边侧地之间会产生较大的电压变化率 dv/dt，该 dv/dt 会通过隔离电源的寄生电容对驱动原边侧乃至控制系统产生扰动。

由 CREE 1200V/300A SiC 器件手册可知，SiC MOSFET 栅极驱动电荷为1076nQ。当驱动电路开关频率为 18kHz，驱动正向电压为+20V，驱动负向电压为-5V 时，理论计算的驱动功率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkTw1qAbs9hddtejjfMJp4GkuMbcKjWav0Ps5mjYCDYCRJcEiazjHY3Yg/640?wx_fmt=png&from=appmsg)

其中，ΔVGS 是驱动正向电压和负向电压差值， QG为栅极电荷，fsmax为最大开关频率。

驱动电路电源系统结构设计如图 3-4 所示，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkQRLl8AqbDcduYkcrrtwBgj0EZPLricLDGvH81HQarRhMicvA48Xo7lPQ/640?wx_fmt=png&from=appmsg)

  

电源系统的输入为+15V，在输入端串接熔断器，并接二极管和稳压管，避免输入过流、反接和过压损坏驱动电路，同时也避免因驱动板故障损坏输入电源。

隔离 电 源选 择 村 田 MGJ6D121510 ，主 电 路 为 反 激 变 换 器 ， 控 制 芯 片 为NCV8870，通过变压器绕组实现电压反馈，反馈绕组输出电压可用式（3-2）进行计算。本文采用的输出电压为+15V/-10V，输出电压精度为 3%，正向电压输出功率为 3.6W，负向电压输出功率为 2.4W，耐压为 5700V，共模抑制比为 80kV/µs，传输电容为 13pF，效率为 80%，开关频率为 100kHz。该电源配备欠压和过流等保护功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkvBFAHLNuZs8fQ53Rician5kvAsL7TI36PthcQvgSnfh0k5icQicNaZ6KZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk3j12sSfVqiaLxEvghqAb90O7A8dwZqCoWJkxicXgNvzSrtoAkdibSpViag/640?wx_fmt=png&from=appmsg)

其中 Vref 为内部参考电压 1.2V，Vreturn 为反馈绕组电压。

隔离电源输出的+20V 经 SY7304DBC 升压为+24V，SY7304DBC 最高效率为95%。+24V/-10V 给功率放大电路供电，此电压高于驱动输出电压+20/-5V 是因为三极管存在集射极压降。+15V 经 K7805 变为+5V，为副边侧 CPLD 等芯片供电。-10V 经 L7905 变为-5V，为驱动板副边侧 HC4051 等芯片供电。驱动板原边侧+15V经 K7805 变为+5V，为原边侧 CPLD 等芯片供电。

对驱动电源进行温升测试，测试驱动板输入信号开关频率为 18kHz，死区时间为 2µs 的连续脉冲，驱动单只 SiC MOSFET 模块，功率回路开路，环境温度为 25℃，测试时长为 4h，测试设备为：Ti32(厂商为 FLUKE)，测试波形如图 3-6 所示。隔离电源最高温度为 67℃，温升 42°C。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk9duzAIJOVn0DEkvefe08cUQ2wvhkGlsmaCwgxOt1SU5bp1JTlCwia2g/640?wx_fmt=png&from=appmsg)

3.2.3 功率放大电路设计

功率放大电路的主要作用是提高驱动电路的输出驱动能力，为输入电容 Ciss充放电提供足够的功率和电流，保障 SiC 器件的开关速度。

驱动器设计最小驱动电阻为 2Ω，驱动 SiC MOSFET 的最大峰值电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkTj8csZ2XA5ngh7bfQus2JiaJ5VOdTnacAK0ztTtFOx0yNYKme8VAic7Q/640?wx_fmt=png&from=appmsg)

其中，RG(out)是外部驱动电阻，最小为 2Ω，RG(int)为内部驱动电阻，数据手册典型值为 3Ω。

目前，功率放大电路主要有两种，一种是集成驱动芯片，另一是分立器件搭建的功率放大电路。驱动芯片通常有 IXDD609 和 IX4351 等产品，特点是设计时方便、简单，只需要配备简单的外围电路。缺点是供电电压范围有限，相关产品选择少。分立器件搭建的功率放大电路设计灵活，可根据需要设计驱动电流和电压范围，常见的分立器件搭建的功率放大电路主要有以下 4 种拓扑：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkDYWQqZcA2lAYeBUGu7HPypAwqbzuDkAVmLusPdo5gjuqCuOJUUAMXg/640?wx_fmt=png&from=appmsg)

（1）PNP/NPN 三极管功率放大电路

当输入信号为高电平时，T1 导通，功率放大电路输出驱动正向电压 VCC。当输入信号为低电平时，T2 导通，功率放大电路输出驱动负向电压 VEE。此电路的优点是：正逻辑，电路设计简单，可供选择的产品多，可控制基极逻辑使功率放大电路输出多种电平。缺点是：三极管一般工作在放大区，集电极-发射极结压降大，损耗较大，设计时电源电压应高于驱动正向电压 2V~3V，且基极控制信号需考虑基极-发射极存在 0.7V 左右的结压降。

（2）N/P MOSFET 功率放大电路

当输入信号为高电平时，T2 导通，功率放大电路输出驱动负向电压 VEE。当输入信号为低电平时，T1 导通，功率放大电路输出正向电压 VCC。此电路的优点是：N-MOSFET 和 P-MOSFET 工作在可变电阻区，功率放大电路损耗小，响应速度快。缺点是：反逻辑，同等电压电流条件下 P-MOSFET 的特性差，且产品较少。

（3）双 N-MOSFET 功率放大电路

当输入信号为高电平时，T1 导通，功率放大电路输出驱动正向电压 VCC。当输入信号为低电平时，T2 导通，功率放大电路输出驱动负向电压 VEE。此电路的优点是：正逻辑，响应速度快，N-MOSFET 特性好且产品多。缺点是：上管驱动困难。

（4）H 桥功率放大电路

当输入信号为高电平时，T2、T3 导通，功率放大电路输出驱动正向电压 VCC。输入信号为低电平时，T1、T3 导通，功率放大电路输出驱动负向电压 VEE。此电路的优点是：正逻辑，仅需要单极性电源，响应速度快，N-MOSFET 特性好且产品多，可变换驱动桥臂电源和控制逻辑输出多电平。缺点是：所需四只 N-MOSFET和配套驱动电路，成本高，且损耗较大。

表 3-1 对驱动功率放大电路进行了总结。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkzg6ws3BWgwWw8fybibvukzf7jGMCqZGQxnddPoF1fCMm4hTfnNZ7g3w/640?wx_fmt=png&from=appmsg)

本文主要采用两级三极管组成功率放大电路结构，如图 3-8 所示。目的是增加驱动电流的输出能力，第一级主要是采用 ZXGD3009E6，放大倍数为 50，峰值电流输出为 1A，第二级三极管选择 2SA2222 和 2SC6144，峰值电流输出为 13A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkdLOpy4Eap5KEUxYJpGtliaJ8DZtF8B60vymSibXQibTANk6LMOmyp0wyw/640?wx_fmt=png&from=appmsg)

3.2.4 隔离方式选择

由于功率回路和控制系统存在较大的电压差，且在 SiC MOSFET 的开关瞬间存在较大的电压变化率 dv/dt 和电流变化率 di/dt。为了保障系统的安全、可靠，电气隔离必不可少。现有的电气隔离方式主要有以下五种：电平移位自举式，电容隔离，光耦隔离，光纤隔离，磁隔离。

电平移位自举式电路元器件少，结构简单，成本低，但其并不是完全意义上的电气隔离，隔离电压等级低（小于 600V），不适合于高压大功率场合。

电容隔离是通过电容将原边侧和副边侧隔离，要求电容的容值很小。这种方式的信号传输速度极快，信号保真度高，抗扰能力强。但供电电平较低，通常用于数字信号隔离。近年来，由于其优异的性能也被应用于 SiC MOSFET 驱动器的隔离，主要产品有 ISO7842、ISO7710 等。

光耦隔离的工作原理是将输入的电信号通过发光二极管转化成光信号，然后通过光敏三极管转化成电信号来实现隔离功能。优点是电路简单，抗磁干扰能力强，集成度高，相关产品多，价格相对较低。缺点是传输速度慢，隔离电压低，易老化。主要产品有 ACPL-W345、PS9031 等。

磁隔离方式的实现主要分为两种，一种是采用集成的磁隔离芯片，例如AUM4120、AUM2210 等。另一种是采用隔离变压器并配合调制/解调电路，通过调制电路将信号调制成窄脉冲，经过变压器传输到副边侧，再通过解调电路将窄脉冲解调为原信号，这种方式相对于第一种更为复杂。但共同的优点是隔离电压等级高，传输速度快，价格相对较低。

光纤隔离是通过光电收发器实现光电转换，以光纤为传输路径实现光信号的传输。优点是传输距离远，隔离电压低，传输速度快，抗磁干扰能力强。缺点是成本较高，易老化以及光纤头落灰等问题。主要产品有 HFBR1521/HFBR2521和AFBR-3905 等产品。

因此，在高压大功率 SiC MOSFET 主要考虑电容隔离、光耦隔离、磁隔离和光纤隔离 。 表3-2罗列了ISO7842 、 ACPL-W345 、 AUM4120 以及HFBR1521/HFBR2521 的主要参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkPTo4MLIxExE2ua7vhUgzibAiaL7S9cSKF8qVkwxjadCr6U2rQTWPIU9Q/640?wx_fmt=png&from=appmsg)

综合隔离电压等级，传播速度，抗扰能力，供电电压及电路的复杂程度。在对 CREE 1200V/1700V SiC MOSFET 模块的驱动器设计中主要采用了电平隔离ISO7842 和光耦 ACPL-W345。

3.3 多电平关断驱动电路研究

与 Si IGBT 相比，SiC MOSFET 的开关速度更快，由于主功率回路寄生电感的存在，在关断过程中会产生过冲电压和振荡等关断特性恶化的问题，这将会极大地影响 SiC MOSFET 安全可靠地运行。为此，本节在研究 SiC MOSFET 动态过程机理的基础上，分析了多电平关断驱动电路的作用机理，优化了电路参数的设计与实现，实验结果表明，所提出的多电平关断驱动方案相比于增加关断电阻的方式在减小关断延迟时间、抑制关断过冲电压、关断损耗以及电压电流振荡等方面更具优势。

3.3.1 多电平关断驱动电路作用机理

根据第二章关断过程机理分析可知，过冲电压和振荡等关断特性恶化原因是：在 SiC MOSFET 关断电流下降阶段，产生高的漏极电流变化率 diD/dt 作用于功率回路的寄生电感 Lloop 上，从而产生与直流母线电压 VDC 同向的电压，进而造成漏源极电压 vDS 过冲。在栅源极电压 vGS 下降阶段，受上一阶段高 diD/dt 激励后的功率回路寄生电感 Lloop 会与 SiC MOSFET 的输出电容 Coss 相互作用，进而产生漏极电流 iD 和栅源极电压 vDS 的振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk1bTfqnNej0l8zny5Wka49LSADnO3Y8bAVojibYRI2a1zCmTGvXXJvKw/640?wx_fmt=png&from=appmsg)

因此，抑制关断过冲电压及振荡的方式中，除了采用优化器件封装及功率回路的设计以减小功率回路寄生电感 Lloop 的方式外，另一方式实现的关键在于减缓关断过程中高的漏极电流变化率 diD/dt。在电流下降阶段漏极电流 iD 可用式（3-5）近似表示

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkaXa21nibaGNwQIp61yVFY4NLB2dKibPKbUxruSNhYHMkufKHYuYDsicfQ/640?wx_fmt=png&from=appmsg)

对式（3-5）求导并化简得到电流变化率 di/dt 表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkFB5ZweSImToz3XI1rJhjmyMWqTqFbPQKiaFlL7pkgtFh4KJQOrhotdg/640?wx_fmt=png&from=appmsg)

由（3-6）可知，在 SiC MOSFET 正常关断过程中漏极电流变化率 diD/dt 主要取决于漏极电流 iD，漏极电流下降阶段的驱动电平 Vint 和驱动电阻 RG。由于漏极电流 iD 受变流器工况的限制难以改变，而在漏极电流下降阶段单独增大驱动电阻RG 会增加驱动电路的复杂程度。为此，本文提出了一种多电平关断驱动电路的方案，工作波形如图 3-9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkbkiahicHbeYSLZsuVK7exRY8nqTNGJpQhA4iaBicaf1amsncdya0LsIw3w/640?wx_fmt=png&from=appmsg)

（1）工作原理

关断延迟阶段（t5<t<t6），当驱动电路接收到控制系统的关断信号后在栅极输出更低的驱动负向电压 VEE2。目的是增大驱动负向电流 iG，加快输入电容 Ciss 的放电速度，进而减小栅源极电压 vGS 下降至密勒平台 VM 的时间，减小关断延迟时间td(off)。此阶段的时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkLUm0FlpbY36PoPqmPicBtgAVMDjtiau9HheuVoLq8kJv3nVLrOfDj9BQ/640?wx_fmt=png&from=appmsg)

漏源极电压 vDS 上升阶段（t6<t<t7），在保证系统 dvDS/dt 耐受程度安全的前提下，采用更低的驱动负向电压 VEE2，目的是增加驱动负向电流 iG，加快栅漏极电容 CGD 放电速度，减小漏源极电压上升时间 tf，减小关断损耗 Eoff，此阶段的时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkFDBqNJchdTcLO2ibRMbibh72aiapSsfe9LFac9icaMC0sQuRPNLErb7rdA/640?wx_fmt=png&from=appmsg)

漏极电流 iD 下降阶段（t7<t<t8），此阶段采用较小的驱动输出中间电压 Vint，目的是为了减小漏极电流变化率 diD/dt，进而减小漏源极电压 vDS 过冲，提高 SiC MOSFET 工作的可靠性，此阶段的表达式和时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkicia6XyHmliaKpTmeHSXCMVOQeC0GvxKzh26a8tP2NPZnoj39VF32nPbw/640?wx_fmt=png&from=appmsg)

栅源极电压 vGS 下降阶段（t8<t<t9），此阶段采用更低的驱动负向电压 VEE2，目的是增加驱动电流 iG，加快输入电容 Ciss 放电速度，减小栅源极电压 vGS 下降 VEE2的时间，为对管开通做好准备，这对于高频应用时的可靠性尤为重要。同时受上一阶段减小漏极电流变化率 diD/dt 的影响，功率回路的寄生电感 Lloop 与 SiC MOSFET 的输出电容 Coss 的相互作用造成的漏极电流 iD 和栅源极电压 vDS 的振荡变小，此阶段与上一阶段表达式唯一不同的是式（3-11）变为（3-16）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkhsRPKVTOMS8CtFPzWNqfttQUY97hb0CS4ggZS0iaURssj56meREGRhA/640?wx_fmt=png&from=appmsg)

（2）参数优选方法

实现多电平关断驱动效果的关键在于中间驱动电压 Vint 选取，其值的大小直接影响关断损耗、过冲电压和振荡。为此，本文在第二章建立的开关瞬态模型的基础上，分别绘制了直流母线电压 VDC=600V，驱动电阻 Roff=5Ω，无吸收电容 Cde下不同中间驱动电压 Vint 和漏极电流 iD 与关断过冲电压关系曲线图 3-10、不同中间驱动电压 Vint 和漏极电流 iD 与开关损耗关系曲线图 3-11。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkKdJAQBbBF1EuWcicbdtoe4ibKRvptm4N8Riak4aw8tY95E9U8BAC3qoww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkFg8ynKZYssicgT7ke2YibcclGOx76jE7Fa0VSyGx5AzPHzprN5rRPb6w/640?wx_fmt=png&from=appmsg)

由图 3-10 可以分析出关断过冲电压 ΔVP 随着漏极电流 iD 的增加而增加，随着驱动中间电平 Vint 的增加而减小。由图 3-11 可以分析出关断损耗 Eoff 随着漏极电流 iD 和驱动中间电平 Vint 的增加而增加。实际设计中为了满足实际的效率、散热条件、漏极电流 iD 的工况以及器件的电压安全裕量要求，可结合图 3-10、图 3-11读取合适的过冲电压峰值 ΔVp 和关断损耗 Eoff 的值并选择合适的驱动中间电平 Vint的大小。

不同驱动电平作用时间的设置将直接关系到到驱动电平作用的准确性。在 SiC MOSFET 关断过程中发生驱动电平变化的时刻主要有两点：

第一点是由较大的驱动负向电压 VEE2 变为较小的驱动负压 Vint。从驱动电路开始输出驱动负向电压 VEE2 到驱动负压由 VEE2 变为 Vint 主要经历了关断延迟阶段、漏源极电压 vDS 上升阶段。对应的作用时间 tm1 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkzqAyq7mMGIWf2tay8yP5nu1QWLygoDvVzh1OaMiaX1W1JLYBbQ7L9kQ/640?wx_fmt=png&from=appmsg)

第二点是由较小的驱动负压 Vint 变为较大的驱动负向电压 VEE2，驱动负压由VEE2 变为 Vint 时刻到驱动负压由 Vint 变为 VEE2 时刻主要经历了漏极电流 iD 下降阶段，对应的作用时间 tm2 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkT3ppb0ic1IyKMjpcAIgWjrmL6icAsaKLCDzvG7qUH19x5Meo4or9mtSA/640?wx_fmt=png&from=appmsg)

本文以负载电流为 250A 的工况为例，从图 3-10 和图 3-11 读取的中间电平Vint 关键信息如表 3-3 所示。在中间电平 Vint=-5V 时的关断过冲电压 ΔVp 为 265.5V，关断损耗 Eoff 为 19.1mJ；中间电平 Vint=0V 时的关断过冲电压 ΔVp 为 225.1V，关断损耗 Eoff 为 19.34mJ。即相比于选用中间电平-5V，选用中间电平 0V 时可以减小40V 的关断电压过冲 ΔVP，仅增加约 1.2%的关断损耗。作用时间的选取根据关断模型并结合公式（3-22）和公式（3-23）可得 tm1 为 393.5ns。tm2 为 72.4ns。因此，在多电平关断驱动实验中，可选择中间电平为 0V，受 CPLD 步长的限制，设置作用时间 tm1 为 400ns，tm2 为 80ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkyPT47mYmxwojVRPtVib3LHia0ehrnmxUdztme4DiaPtRY21otIcrsQXQA/640?wx_fmt=png&from=appmsg)

3.3.2 多电平关断驱动电路的设计

通过上一节多电平关断驱动电路作用机理分析可知，多电平关断驱动电路的实现要求在不同的关断阶段快速切换输出不同驱动电平。现有的多电平驱动电路主要有以下三种：双半桥组合形式 1、双半桥组合形式 2和三极管结构。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk124ImkYOVJZmIT342XGpr1879ef7dxf4lucX0ibISV22nuaicgg82XUQ/640?wx_fmt=png&from=appmsg)

双半桥组合形式 1 是半桥组成的 H 桥的方式，该拓扑也存在一些衍生的结构，但原理基本相同。当开关管 T1 和 T4 导通时驱动电路输出电平 VCC1，当开关管T2 和 T3 导通时驱动电路输出电平-VCC2，当开关管 T1 和 T3 导通时驱动电路输出电平 VCC1-VCC2，当开关管 T2 和 T4 导通时驱动电路输出电平 0V，当开关管 T1、T2、T3、T4 均关断时输出高阻状态。该拓扑可以输出并快速切换 VCC1，-VCC2，VCC1-VCC2，0V 四种电平，仅需要两个单向的供电电源，通常半桥选择 IXDD609 等驱动芯片或 P 沟道 MOS+N 沟道 MOS 组成，若采用双 N 分立器件，则上管 N 沟道 MOS 驱动较为复杂。

双半桥组合形式 2 是半桥组成的另一种方式。当开关管 T1 和 T4 导通时驱动电路输出电平 Vint，当开关管 T3 导通时驱动电路输出电平 VCC1，当开关管 T2 和 T4导通时驱动电路输出电平 VEE。该拓扑可以输出并快速切换 Vint，VCC1，VEE 三种电平，输出电平等级少，且需要负向电源。通常半桥选择 IXDD609 等驱动芯片组成，采用分立器件的驱动电路较为复杂。

三极管的结构。由于开关管 T1 和 T2 的射极电压跟随基极电压变化，因此可以通过控制三极管的基极电压进而实现驱动电路输出多电平的目的。由于该拓扑的输出电平取决于基极电压，没有固定电平限制，仅需要一个单端电源，但处于中间电平值时，开关管 T1 和 T2 压降较大，驱动损耗较大。

本文鉴于驱动电路输出电平数量以及电路的复杂程度，选择三极管结构作为多电平关断驱动电路主体功率放大部分，具体实现电路如图 3-13。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkOlFJ3p3nnDpj2vkibejrOvMU4ibCtqwb4siavXMUsP71GWbz4sbw6iam5g/640?wx_fmt=png&from=appmsg)

其中 CPLD（Complex Programmable Logic Device）主要负责将驱动电平及作用时间等数据进行存储并转化为三位的逻辑数字信号进行输出，CPLD 选择型号为ATF1504AS，有 64 个宏单元，32 个 I/O，配套晶振选择 SG-8002CA 100MHz，供电电压为+5V，便于与其它逻辑器件匹配。

由于驱动电路传输延迟要求尽量的短 ， 现有的DAC （ Digital to analog converter）的传输延迟时间通常在几百 ns 级，难以应用。因此本文选择数据选择器 74HC4051，存在 8 路模拟电压输入，可供多电平驱动及软关断选择的电平数量多，供电电压为±5V，满足 SiC MOSFET 驱动正压到负压的电平需求，传输延迟仅为 4ns 左右。

电压放大部分本文选择的是 LM7171 运放组成的负反馈电压放大电路，将来自数据选择器的多路电压进行比例放大以满足驱动 SiC MOSFET 的电平等级。LM7171 的增益带宽积为 200MHz，压摆率为 4100V/µs，供电电压范围最大 36V。设计时应注意电压输出防止运放工作在饱和区，减缓开关速度。

功率放大电路仍采用两级三极管组成的功率放大的结构，功率放大电压的输出驱动电压跟随电压放大器 LM7171 的输出电压，输出驱动多电平。设计时需考虑基极-发射极存在 0.7V 左右的结压降。功率放大电路的工作原理和选型同 3.2.2节，本节不再赘述。

为了验证多电平关断驱动硬件电路设计的可行性，本文进行了 tm1=400ns，tm2=80ns，VEE2=-5V，Vint=0V 时驱动板空载测试。驱动板输出栅源极电压 VGS 波形如图 3-14 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkEfAcbM1CXxT9DETTPEFyvTEYmtJ794NM6yEzTzmGicNuz8bRtHJw4DQ/640?wx_fmt=png&from=appmsg)

由图 3-14 可知，实验作用驱动电平和作用时间与理论设计值一致。

3.3.3 实验分析和验证

为了验证所提出的多电平关断驱动电路的效果以及中间电平和作用时刻选择方法的准确性，在图 2-8 所示的实验平台上进行三组对照实验。三组实验的工况如下：工况 1 (Roff=5Ω 传统驱动电路关断)、工况 2 (Roff=5Ω 多级电平驱动电路关断)、工况 3 (Roff=10Ω 传统驱动电路关断)。测试条件为直流母线电压 VDC=600V，负载电流 iL 为 250A，开通电阻为 2.5Ω，驱动正向电压为 VCC1=+20V，驱动负向电压为VEE1=-5V，驱动中间电平 Vint=0V。实验测试波形如图 3-15 所示，表 3-4 为不同工况下器件关断性能对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkJBVxv1TrFIruc25icz6pbNS7mO8DMRkCjMGoBIxR2qFbp0tzG9Jm37g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkiaFIjdAjTkwoffewgwgfcLW0GssIiaAloG8Cm8bhewJ4dIBtXceicS9Bg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkv7iavWicHykdGQ0mQzDE5tNG4jXu0iaJbQIicIFFanLb8mnjqUjoEZF7Ng/640?wx_fmt=png&from=appmsg)

工况 1 为 Roff=5Ω 传统驱动电路关断，驱动中间电平为-5V，实验测试关断电压尖峰为 265V，关断损耗为 19mJ，表 3-4 中模型估计关断电压尖峰为 265.5V，模型关断损耗为 19.1mJ；工况 2 为多级电平驱动电路关断，驱动中间电平为 0V,实验测试关断电压尖峰为 220V，关断损耗为 19.4mJ，表 3-4 中模型估计关断电压尖峰为 225.1V，关断损耗为 19.34mJ。因此，实验验证了多电平关断驱动参数选择方法的准确性。

与传统驱动电路关断相比，采用多电平关断驱动电路的方式，关断时间 toff 基本保持不变、关断损耗 Eoff 增加较小，过冲电压尖峰由 265V 降至 220V，电压和电流振荡幅值显著降低。而采用增加驱动关断电阻至 10Ω 的传统驱动电路方式也可以显著降低过冲电压峰值 ΔVP，减小电压和电流振荡。但关断时间 toff 增加了200ns，这对于高频应用有所限制；关断损耗 Eoff 增加了 39%，对于变流器的效率和散热器的设计产生了不良的影响。

因此，均衡考虑下降时间、关断损耗、过冲电压峰值、关断电压电流振荡等方面，多级电平关断驱动电路的方式相比于增加关断电阻的方式更具优势。

3.4 驱动电路保护技术研究

3.4.1 短路保护电路的设计

由于 SiC MOSFET 具有电流密度大，跨导正温度特性，沟道迁移率较低等特点，使得 SiC MOSFET 短路承受能力较弱，这对于短路检测与保护电路的设计是一大挑战。目前主要有以下五种 SiC MOSFET 短路保护电路的研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkAYN0MyIeEbTZh4ib3o6PdO58Nv6hNM3MM1Ihp3tEiawibYoJTFU9ibTg4Q/640?wx_fmt=png&from=appmsg)

第一种方法是去饱和检测，如图 3-17。该方法源于 IGBT 的短路保护方式，也是目前 CONCEPT/PI 等厂商应用的方案。主要检测漏源极电压 VDS，然后通过器件输出特性间接反映漏极电流值 iD 的大小。这种方法应用范围广，简单易行，易于集成 IC 设计，但检测延迟时间稍长。

第二种方法是利用源极电感 LS 来检测电流，如图 3-16(a)所示。在开关过程中产生高的电流变化率 diD/dt 叠加在源极电感 LS 上产生电压，通过 Ri 和 Ci 积分获得电流。这种检测方式的优点是直接检测电流 iD，不需要设置盲区时间。但对源极电感 LS 有要求，若通过额外增加电感会加剧器件的开关振荡问题。因此该种方法适用于单管，不适用于桥臂模块和已成型的主电路。

第三种方法是采用罗氏线圈原理的电流检测和保护，如图 3-16(b)所示。这种方法通过线圈 Q1 测量电路的 diD/dt，然后通过积分电路得到电流值 iD，实现过电流保护。这种方法直接检测电流，实现保护，无需盲区时间。但设计较为复杂，需要设计检测线圈以及积分电路、比较器等逻辑处理电路。

第四种方法是通过附加的源极检测电流 ， 主要有三菱公司的FMF800DX-24A 等产品。电路原理如图 3-16(c)所示。SiC MOSFET 模块集成了电流检测模块，电流检测模块检测的电流 iS1 与 iD 成比例，通过在检测源极端子 S1和源极端子 S 外加电阻 RS1 将检测电流变为检测电压信号。这种方法可靠性高，但只针对特定的产品。

第五种方法是栅极电压和电荷检测相结合的检测方法\[40\]，如图 3-16(d)所示。在母线电压较高时发生开通时刻短路故障，漏源极电压较高，通过器件手册的电容曲线可以看出此时转移电容 CGD 容值很小且基本恒定，因此在开通过程中基本不会给转移电容 CGD 充电，密勒平台消失，栅极电荷 QG 较正常开通时较小。在母线电压变低时，漏源极电压较低，转移电容 CGD 容值变大。因此，当母线电压发生变化时电流保护值难以设定，该种方法只能适用直流母线电压较高且开通检测的工况，局限性很大。

表 3-5 对上述短路保护检测方法进行了总结。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkZhmvMjeuuQoyZqpebB2VqHRoz6XPhvpX6svPwVgRcyvuMaryk7icBjg/640?wx_fmt=png&from=appmsg)

综合各种短路保护方法来看，去饱和检测的方法具有适用范围广和简单易行的优点，本文主要采用去饱和检测的方案。去饱和检测电路原理图如图 3-17。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkp8F2eCRic9qgmBc9Qlldwqdic9OctovicRvVZJJ1SWu0RVTCDbRc72icbA/640?wx_fmt=png&from=appmsg)

当 SiC MOSFET 关断时，VDS 电压较高，D1 截止，G 点为驱动负向电压 VEE，电容 C1 通过 R3 和 D2 加速放电。关断稳态时，二极管 D3 导通，将比较器的输入电压钳位在-0.3V 左右的结压降避免承受过高的负压损坏。

当 SiC MOSFET 处于正常导通状态时，VDS 电压较低，二极管 D1 导通，G 点为驱动正向电压 VCC，通过 R1 和 R3 给电容 C1 充电。电容 C1 电压未达到保护值。

当 SiC MOSFET 处于短路故障导通状态时，VDS 电压变高，二极管 D1 截止，G 点为驱动正向电压 VCC，通过电阻 R2、R3 给电容 C1 充电。电容 C1 电压超过保护值动作。

短路保护值设置如公式（3-19）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkc9Rn0Vke3wuFpibq5J1ic0VQBnkWpnUEAnDEBnURMYJc6jOTmZia4pqJg/640?wx_fmt=png&from=appmsg)

其中 VCC 为驱动正向电压，VD1 为二极管正向结压降，Vref 为比较器设定参考电压。

盲区时间设置如公式（3-20）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkRyyGT171lF0xgB4om4cMyictFSlPIyUTaGy0mp2c3PMIp4aIp5z4aPA/640?wx_fmt=png&from=appmsg)

其中 VCC 为驱动正向电压，VD3 为二极管正向结压降，tb 为盲区时间。

短路保护电路参数选型时应注意：（1）二极管 D3 应选择反向恢复小和结压降小的二极管，否则会严重影响盲区时间和比较器的可靠性。（2）为了减小二极管D3 结电容的影响，盲区时间一定时，尽量增大电容 C1。（3）电阻 R2 的取值将会对功率回路产生影响，因此在保证盲区时间一定的情况下，应尽量减小电阻 R3，增加电阻 R2 的值。（4）二极管 D1 应选高耐压的快恢复二极管，否则会增加导通瞬间的短路保护检测时间。（5）电阻 R1 尽量选择小，减小其对于 VDS 保护值和参考电压 Vref 的影响。（6）比较器在满足电压范围的要求的基础上，延迟时间应尽量选择短。

针对 CREE 1200V SiC 功率模块的短路保护参数设置为：二极管 D1 为快恢复二极管 RGP02-20，二极管 D2、D3 选择肖特基二极管 BAT54，R1=0Ω，R2=1.0kΩ，R3=100Ω，C1=220pF，比较器选择 LM2903B，参考电压 Vref=7V。

实验时将 CREE 1200V SiC 功率模块上桥臂 SiC MOSFET 用导线短接，下桥臂设置脉冲宽度 2µs 的单脉冲。直流母线电压 500V 时开通瞬间短路实验波形如图3-18 所示，在开通瞬态 t1 时刻发生短路时，漏极电流 iD 迅速上升，短路保护电路响应，从短路时刻到栅源极电压 VGS 脉冲封锁总延迟时间仅为 520ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkPh2gAgpiaOE0ibjs48dfa7fMppnqzgEhTHqZs3tsb36BZDs2r4wenmsw/640?wx_fmt=png&from=appmsg)

3.4.2 软关断电路

当短路故障发生时，漏极电流 iD 迅速上升，并达到额定电流几倍以上。在 3.4.1节的短路实验测试中，当母线电压 VDC 电压为 500V，驱动正向电压为+20V，仅在短路后 700ns 漏极电流 iD 已达到 3000A。若在短路时仍采用正常关断，会产生比额定工况下正常关断高几倍的漏极电流变化率 diD/dt，进而造成更高的过冲电压ΔVP 和振荡，极大的增加了 SiC 功率器件的损坏风险。因此，抑制短路工况下过冲电压和振荡的关键在于减缓电流变换率 di/dt。 在短路时电流下降阶段 ， SiC MOSFET 仍工作在饱和区，漏极电流变化率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkCeEtfs22mdyiajUDf9tibf7ryBxlFkT6ZBvlBTY1gxhycaCHHPrOxHXw/640?wx_fmt=png&from=appmsg)

由式（3-22）可以看出短路时漏极电流变化率 diD/dt 主要取决于短路电流 iD2，栅极驱动电压 Vin1，栅极驱动电阻 RG\_1。由于短路电流 iD2 受短路状况及器件的限制难以改变，因此在短路时可以通过增大驱动电阻 RG\_1 或者栅极驱动电压 Vin1 来减缓短路时的漏极电流变化率 diD/dt。

变驱动电压的软关断示意图如图 3-19(a)所示，设计的硬件实现电路如图3-19(b)所示。当短路故障封锁脉冲后，通过逻辑控制电路设置功率放大电路的输入，使栅极驱动信号的输出首先为 560ns 的+5V，然后为 100ns 的 0V，此后变为驱动负向电压 VEE。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkvpA8HNmJUQ8Iyk90CUNKVsY8zyCVSZCmUF2xCVicjEa2yHExj2eI8YQ/640?wx_fmt=png&from=appmsg)

为了验证变驱动电压的软关断，实验测试了 CREE 1200V SiC 功率模块在开通电阻 Ron=2.5Ω，关断电阻 Roff=5Ω，脉冲宽度 2µs 时的短路实验，其中在母线电压VDC 为 500V 时短路工况下硬关断和软关断的波形如图 3-20(a)、图 3-20(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkbVlB8xY0QxYfS9bCx2Tia1VLSAFRwtZx8cEhbCUwFGncNuaXZqqiaJxg/640?wx_fmt=png&from=appmsg)

在母线电压VDC 为500V 时短路工况下，硬关断时，最大短路电流为 2650A，电流下降时间为 160ns，电流变化率最大为 12A/ns，过冲电压 ΔVDS 为 480V。变驱动电压软关断时，最大短路电流为 3000A，电流下降时间为 360ns，电流变化率最大为 7A/ns，过冲电压 ΔVP 为 330V。可以看出当采用变驱动电压软关断可以显著的降低电流变化率 diD/dt，减小关断过冲电压和振荡。

增大驱动电阻的软关断电路作用示意图如图 3-21(a)所示，设计的硬件实现电路如图 3-21(b)所示。当短路故障封锁脉冲后，IXDD609 的使能端为低电平，IXDD609 输出高阻状态，S1 导通，软关断电阻 RG\_1 接入栅极，软关断电阻 RG\_1 大于正常关断电阻 RG，可实现增大关断栅极电阻的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkSq8sH0eOniaDLKzLd4jBS0vfyE3nxL31ib4oIkmje6C0UKuoAHBhRw2Q/640?wx_fmt=png&from=appmsg)

为了验证增大驱动电阻的软关断，实验分别测试了 CREE 1200V SiC 功率模块在开通电阻 Ron=2.5Ω，关断电阻 Roff=10Ω，软关断电阻 RG\_1=30Ω，脉冲宽度 2µs时的短路实验，其中在母线电压 VDC 为 500V 短路工况下硬关断和软关断的波形如图 3-22(a)、图 3-22(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkZo4Qg20z8ia0mic5L9t9AKMsHoT1ODKRlca0noiczubqT2JKK18SWyiaAg/640?wx_fmt=png&from=appmsg)

在母线电压 VDC 为 500V 短路工况下，硬关断时，最大短路电流为 5350A，电流下降时间为 320ns，电流变化率最大为 13A/ns，过冲电压 ΔVP 为 530V。增大驱动电阻软关断时，最大短路电流为 5400A，电流下降时间为 1.2µs，电流变化率最大为 4.5A/ns，过冲电压 ΔVP 为 180V。可以看出当采用增大驱动电阻软关断也可以显著的降低电流变化率 diD/dt，减小关断过冲电压。

3.4.3 脉冲反馈电路

为了控制系统更好的监测驱动电路栅极输出信号，防止出现因驱动板故障导致的脉冲丢失、脉冲畸变等问题。本文设计了脉冲反馈电路如图 3-23 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk4icibZ8gOjSfg8yZ5dMQr91e1XDBM8OQ9ibQhf7a6QKewQr2tv8MAqeVw/640?wx_fmt=png&from=appmsg)

其中 U1 为比较器，配合外围电路组成滞环比较器，U2 为光耦，承担功率回路和控制回路的隔离作用。

采用滞环比较器的目的是：（1）当栅极电压受干扰时可以调节阈值电压减小误动作。（2）可以检测因图腾柱损坏等造成的正向脉冲和负向脉冲丢失等问题。工作波形图如图 3-24 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkJHvicYIEdmWWXuZOYMziaibcXn1Xa3iauUxiaiaqiceoU2iclOibMz4Cmjbk9PA/640?wx_fmt=png&from=appmsg)

当栅极驱动电压 vGS 高于正向阈值电压 Vth+，滞环比较器输出 VO 为高电平，由于此时光耦正向电流小于发光二极管的阈值电流，光耦未导通。当栅极驱动电压 vGS 低于负向阈值电压 Vth-，滞环比较器输出 VO 为低电平，光耦导通传递信号。滞环比较器的正向阈值电压为式（3-22），负向阈值电压为式（3-23）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkOYtia3UYKNYNmcjJ1NrslEXsCtZezgItFNdZ65IR63ZERn5icuURAtdQ/640?wx_fmt=png&from=appmsg)

其中 Vth+为正向阈值电压，Vf 为光耦的正向导通压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk5wQHQmAU51MunclGL0uKwCLBvFO58ajjZz3YXkdBnfHgibRFWOEw2Sg/640?wx_fmt=png&from=appmsg)

其中 Vth-为负向阈值电压，VOL 为比较器输出负向电压。

实验测试 CREE 1200V SiC 功率模块的驱动电路栅极输出电压为+20V/-5V，VCC1=+24V, VEE1=-10V 其中 U1 选择为 Ti 的 LM2903B，光耦 U2 选择为 Broadcom ACPL-W345，R1=10kΩ，R2=100kΩ，R3=3.3kΩ，R4=10kΩ。当滞环比较器 U1 输出高电平为 21.37V，光耦正向电流为 194µA 小于光耦阈值电流 0.5mA，光耦未触发开通。当滞环比较器 U1 输出低电平为-7.8V，光耦正向电流为 9.7mA 远大于光耦阈值电流 4mA，光耦导通，比较器 U1 的灌电流为 9.7mA。

实验测试 SiC 功率模块开通关断过程驱动电路脉冲反馈波形如图 3-25 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkOxhsHxvTWw5o0ibMR3iauAw3UuGnje6WLF6gevLR487UNF4L9bar7z5g/640?wx_fmt=png&from=appmsg)

脉冲反馈开通延迟时间为 640ns，主要包括驱动板开通延迟时间、栅极电压上升至正向阈值电压 Vth+的时间和脉冲反馈硬件电路的开通延迟时间。脉冲反馈关断延迟时间为 1040ns，主要包括驱动板关断延迟时间、栅极电压下降至负向阈值电压 Vth-的时间和脉冲反馈硬件电路的关断延迟时间。

3.5 本章小结

在分析 SiC MOSFET 开关特性的基础上，本章首先总结了驱动电路设计的基本要求。然后对驱动电路设计中驱动电压的选取、电源的设计、功率放大电路的设计、隔离方式的选择进行了深入的分析、对比、设计和测试。针对 SiC MOSFET的关断特性瞬态恶化的问题，设计了多级电平关断驱动电路的方案，优化了中间电平参数选取的方法，完成了硬件电路的设计，实验表明多级电平关断驱动电路的方式相比于增加关断电阻的方式更具有优势。最后根据 SiC MOSFET 短路承受能力弱等特点，研究了短路保护电路、软关断电路等驱动电路保护技术，实验测试了保护电路的效果和可靠性。

4 .变流器功率回路振荡问题研究

以 SiC MOSFET 替代传统的 Si IGBT，变流器可获得更高的开关频率和更低的损耗，但高 di/dt 造成 SiC MOSFET 结电容和寄生电感谐振从而引发高频振荡和过冲电压等问题。本章以电力机车全碳化硅辅助变流器功率回路振荡问题为例，在充分考虑系统寄生参数的基础上，首先分析变流器功率回路的主要振荡，然后建立分析模型，推导了解耦电容对于线路寄生电感完全解耦的条件，在频域上对高频振荡和低频振荡进行了分析，并针对功率回路的低频振荡提出一种谐振分析模型，对低频谐振电流进行计算。最后仿真和实验结果证明了功率回路振荡问题研究准确性，并对系统参数设计提供了指导意见。

4.1 变流器功率回路主要振荡分析

本文以电力机车全碳化硅辅助变流器为例进行研究，系统方案为 LLC 谐振变换器和 Buck 变换器如图 4-1 所示。其中 LLC 谐振变换器工作在软开关区域，将取自牵引回路直流环节的电压进行隔离、降压。Buck 变换器工作在硬开关区域，进行输出稳压。相对于其它工频逆变及移相全桥拓扑等方案，该方案具有效率高，体积小等优点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkgAPCJ4lkjoc41MsxO5SpPaDB99dOlpJ0TrRAwWjlBqOd0biblmwg6HA/640?wx_fmt=png&from=appmsg)

其中 CDC 为牵引回路直流环节的支撑电容，Cin 为 LLC 变换器输入支撑电容，Cr1和 Cr2 为 LLC 谐振电容。Q1 和 Q2 分别为 LLC 变换器的开关管，Coss1 和 Coss2 为 Q1和 Q2 的输出电容。T 为 LLC 变换器的变压器，Lr 为变压器的漏感，Lm 为变压器的励磁电感。二极管 D1、D2、D3、D4 组成 LLC 变换器的整流桥，C1 为 LLC 变换器的后级支撑电容，Rr2 和 Lr2 分别为支撑电容的寄生电阻和寄生电感。Rr1 和 Lr1 分别为 LLC 变换器和 Buck 变换器间线路的寄生电阻和寄生电感。C2 为 Buck 变换器的解耦电容，Rr4 和 Lr4 分别为解耦电容的寄生电阻和寄生电感。Rr5 和 Lr5 分别为解耦电容和开关管间的寄生电阻和寄生电感。Q3 和 Q4 为 SiC MOSFET 功率模块中的开关管，CGD、CGS 和 CDS 为 Q3 和 Q4 的寄生栅漏极电容、栅源极电容和漏源极电容，LD 为 Q3 和 Q4 的寄生电感，Q3 和 Q4 完成斩波和续流。LTotal 为 Buck 变换器的输出滤波电感，C3 为 Buck 变换器的输出滤波电容，R3 为 Buck 变换器的负载。

由于 Buck 变换器工作在硬开关区域，且采用 SiC MOSFET 时开关速度更快，在相同的功率等级下电路的电流更大。因此，线路寄生电感和功率开关管的输出电容间的谐振变大，进而导致 SiC MOSFET 关断时的振荡和过冲电压变大。为了解决这一问题，变流器通常采用加入解耦电容 C2 以解耦部分寄生电感 Lr1 达到减小母线寄生电感的目的 。但解耦电容的 引入会 引起解耦电容、前级系统输出DC-Link 电容和线路间的寄生电感低频谐振，这对于解耦电容和 DC-Link 电容的寿命及选型提出了挑战。因此，辅助变流器功率回路的振荡主要有两个，第一个为 Buck 变换器 SiC 功率模块关断电压振荡，另一个为级联系统的低频振荡。本章对此展开深入的研究，并给出抑制振荡相关参数的优化意见。

4.2 关断电压振荡分析

本节对 Buck 变换器 SiC 功率模块关断电压振荡进行详细的分析，首先建立关断时大信号模型如图 4-2 所示。将 LLC 谐振变换器等效成电压源和内阻串联，滤波电感 LTotal 的电流等效为电流源，二极管视等效电压源和电阻串联，开关管等效为电流下降具有一定 di/dt 的电流源和输出电容并联。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqkw2ufRIX2YSe341owEm8icQHjTLeSylIPk9n5h2AAVFP73Iw7Wpdic0WQ/640?wx_fmt=png&from=appmsg)

将关断时大信号模型中电压源视为短路，电流源视为开路，可获得交流小信号模型如图 4-3 所示。其中 Rd1=Rr5+RF，Ld1=Lr5+LD，主要谐振通路如 l1 和 l2 所示，l1 为高频谐振回路，l2 为低频谐振回路。

高频谐振回路 l1 谐振角频率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk05aNov6C75dGbZzeibxQrNRniaWJicfLCNabWITIvyO4wZqIqZY6yGPfA/640?wx_fmt=png&from=appmsg)

为了求得完全解耦 Lr1 最小解耦电容 C2min，可以假设最小解耦电容 C2min<<C1，C1 支路电压保持不变。因此在 ωl1 处满足（4-4）即可。首先令 Z1 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkFK0QWAYG91VFvNzN1TO8thTfs6lqdrvTibGbghUKBGBseCMyYRuGqYg/640?wx_fmt=png&from=appmsg)

分别设置解耦电容 C2 容值为 0nF，100nF，10µF，1.07mF，绘制阻频特性曲线，由图 4-4 可以看出加入解耦电容之后高频振荡的阻抗值峰值变小，但引入了低频振荡，关断电压振荡等效成高频振荡和低频振荡的叠加。随着解耦电容容值的增大，高频谐振频率趋向于fl1，低频谐振频率变小，阻抗值变小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkJ2RTwTzwlBkhOGfCjyzfuNiaIfXGoMnaXxyIs8cjzLlHegVTEtUu4TQ/640?wx_fmt=png&from=appmsg)

为了抑制关断电压过冲及振荡，在使用叠层母排的基础上，应首先使解耦电容满足解耦条件式（4-4）实现寄生电感 Lr1 完全解耦，使高频振荡尽可能变小。其次采取措施抑制低频振荡的大小。通常抑制低频振荡的主要方法有：（1）增大解耦电 容 。（ 2 ） 采用 RC 缓冲 电 路 。 由 于 电 力 机 车 辅 助 变 流 器 功 率 等 级 为100kW~400kW，采用 RC 缓冲电路会造成损耗增大和增加设计的复杂程度，所以通常采用多个薄膜电容并联增大解耦电容的方式。

4.3 级联系统电容低频谐振电流分析

在大功率电力机车实际应用中，为了保障辅助变流器的高效可靠运行，无源器件的选型至关重要，通常 DC-Link 电容的电压为直流母线电压，电流则主要取决于开关频率、输出功率和调制方式。但在电力机车的长期运行中发现为了抑制低频谐振引入大的解耦电容会造成解耦电容、前级系统输出 DC-Link 电容以及之间的寄生电感谐振，这会严重的影响 DC-Link 电容和解耦电容电流有效值，同时也增加了分析的难度。因此有必要建立解析模型获得准确的电容电流，并对变换器参数进行优化。

首先建立整个开关周期的等效模型，在变换器工作的整周期内，SiC MOSFET电压和电流高频振荡会很快衰减到零，因此可以忽略高频振荡对解耦电容和DC-Link 电容电流的影响。同时将直流母线电流等效成开关管对电感电流斩波的电流源，直流电压源短路可以得到整周期交流小信号模型如图 4-5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk6O4MlZ0ZfWSnwVicLNBJSTvJRexEEa4KySqkvaay7iaChhyc4kpeuHpg/640?wx_fmt=png&from=appmsg)

4.3.1 直流母线电流分析

为了求得 DC-Link 电容和解耦电容上的电流，首先进行直流母线电流分析。考虑电感电流纹波，调制方式选用单极性调制，调制波形如图 4-6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkxvEPyJCwuXW4oiaSrAgUwwm9w0nHq24lYIP5L1ZXhdQDpxicMqAobyrg/640?wx_fmt=png&from=appmsg)

其中 vC 为载波电压，vr为调制波电压，iD为开关管Q3中SiC MOSFET 电流。

电感电流纹波 ΔIL：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkS4BIo2wIhKdrWjobtlacT37ribJRsicRrFXQeY002KP0GXgQUmxN5VcQ/640?wx_fmt=png&from=appmsg)

其中 VDC 为直流母线输入电压，VO 为输出电压，LTotal 为 Buck 变换器输出滤波电感值，D 为占空比，Tsw 为开关周期。

通过对图 4-6 的分析可以得到直流母线电流 iC(t)的表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk9Sibpwb60lIWibCfcGpkygQYQ4SP2RbjhgBZAJkWKqbxROAJriaVvlwWA/640?wx_fmt=png&from=appmsg)

对母线电流 iC(t)进行傅里叶分解得到母线电流 iCF(t)，iCF(t)为直流电流和各整数倍载波频率谐波的叠加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkrkBBk9tiaV2ehz18x55rVmBricxxrYxZ3NkTMibias0mlGib0GhW3Ecic60g/640?wx_fmt=png&from=appmsg)

4.3.2 谐振电流分析

电容电流谐振的本质等效为直流母线电流各次谐波作用在阻抗网络上的叠加。为了求取阻抗网络关系，令:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkuibgvS1SdN9llhlK4DUKcndPpTDCQDMl15Cibncf9fGhE8vuEm7YplhA/640?wx_fmt=png&from=appmsg)

根据电路关系和 4.3.1 节的直流母线电流 iCF(t)，DC-Link 电容的电流 iC1 为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkXdvrQ2xaZhBfAQ7FFQ2jQOHHlRxftfbaRjzg15V6X46CLzAsCfWwTQ/640?wx_fmt=png&from=appmsg)

根据电路关系和 4.3.1 节的母线电流 iCF(t)，解耦电容的电流 iC2 为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkScblaRkMDPicjJNTLYGSicnqo0KMRVctZxrB31L8icBMNA5vssicRtJF8A/640?wx_fmt=png&from=appmsg)

由于电容选型中电流的参考为有效值，因此根据有效值的定义，分别求出各次谐波作用的电流有效值平方和开根号即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkW3nvDgFpiaLic9phpCepQbIAAX2UxzR09pm2lnYdy3FI3ghZcnWia4xjg/640?wx_fmt=png&from=appmsg)

通过式(4-18)获得解耦电容和 DC-Link 电容电流有效值，作为选型的参考。

4.3.3 谐振电流的仿真验证

在 LTspice 中搭建 Buck 变换器等效仿真电路，设置仿真参数如表 4-1 所示。同时在 MATLAB 中对 4.3.2 节谐振电容电流解析表达式进行计算。直流母线电流iC(t)仿真和解析表达式 iCF(t)的波形图如图 4-7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkEYVBTbRXdGoguUjKQTKU3ZGGOicF1VJKoX8JkhKibTh8vQbncibnicdd1w/640?wx_fmt=png&from=appmsg)

从波形图 4-7 中可以看出直流母线电流仿真波形和解析波形基本一致。稳态时正向电流偏差很小，仅为 4A。

DC-Link 电容电流的仿真与解析解波形如图 4-8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqknoLR3vhYvuhlRsPVYyxeo47K9ABmM6WpkiatGw4cON7OibhytheudQEA/640?wx_fmt=png&from=appmsg)

从波形图 4-8 中可以看出 DC-Link 电容电流的解析解与仿真基本一致，最大稳态偏差为 5A。仿真有效值为 140.55A，解析有效值为 144.48A，有效值偏差为2.8%。  

解耦电容电流的仿真与解析解波形如图 4-9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkPKhxibicEL7lLkSrkLOh3E97nQxFByJk8ozxKicbnicTv1oDAjYIfichIQQ/640?wx_fmt=png&from=appmsg)

从波形图 4-9 中可以看出解耦电容电流的解析解与仿真基本一致，最大稳态偏差为 2A。仿真有效值为 205.78A，解析有效值为 207.57A，有效值偏差为 0.8%。

因此，电容电流的解析分析具有较高的精度，误差小于 3%。

4.3.4 电路参数的优化

在验证解析模型准确的基础上，设置开关频率为 10kHz，DC-Link 电容为32mF。在 MATLAB 中绘制解耦电容与电容电流有效值相关曲线，如图 4-10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkFDFdmjyoiabVkD519wSiciat4LntFasf0G6XSfuolA0CQQW0E3ibbj2JQw/640?wx_fmt=png&from=appmsg)

由图 4-10 可知，随着解耦电容增大，DC-Link 电容和解耦电容电流有效值先增大后减小，在解耦电容为 120µF 达到峰值。因此选型时需要尽量避开 1µF-1mF。

同时应该考虑完全解耦的条件式（4-4）和低频振荡对于漏源极过冲电压的影响。

设置开关频率为 10kHz，解耦电容容值为 1.07mF。在 MATLAB 中绘制 DC-Link电容与电容电流有效值相关曲线，如图 4 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkxnKQaxEDhXJ9TBHOgvxCia0JWnouJDtXDBmXQ6bHa8UOetTotpuLwNA/640?wx_fmt=png&from=appmsg)

由图 4-11 可知，随着 DC-Link 电容值增加，DC-Link 电容电流有效值增加，解耦电容电流先减小后增大，在 DC-Link 电容 600µF 时有最小值。DC-Link 电容的选取还需考虑输出电压纹波。

设置 DC-Link 电容容值为 32mF，解耦电容容值为 1.07mF。在 MATLAB 中绘制开关频率与电容电流有效值相关曲线，如图 4-12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk8lm4RNeIyn9O8lfEkTEfrdBoLoaQ96f9NJv1VXM5bk1xsYCegfprvw/640?wx_fmt=png&from=appmsg)

图4-12表明，为了降低 DC-Link 电容电流和解耦电容电流有效值，开关频率应尽量的选择在 5kHz~20kHz 以外，此外开关频率选取还需考虑损耗和纹波。

因此，通过电容电流解析相关曲线的分析，并根据参数选型的建议，合理的设置开关频率、支撑电容和解耦电容可以显著的减小 DC-Link 电容和解耦电容谐振电流。

4.4 实验分析和验证

电力机车 Buck 变换器的等效电路参数表 4-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk9giczyBuIffhq0lBRDeOicRYEO82e5qXdW9bTIPCVeWFdRQhwJ4G4BCg/640?wx_fmt=png&from=appmsg)

其中线路寄生参数为阻抗测试仪所测得。

由于功率较大，本文根据表 4-1 参数设置双脉冲电路并进行仿真和实验平台搭建。双脉冲电路原理图如图 4-13 所示，实物测试平台如图 4-14 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4Kqk2QLOWa3JicqsqbwXG8h3ibUgE176ykDrF2urNgNRhBtcI57TNUwzzqQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkYoXzdMXo6UYVU5075jB60tE6xbChknSnU1MxNIq9UmOjY7trumHIcg/640?wx_fmt=png&from=appmsg)

设置脉冲宽度如图 4-15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkWmdprhPPRdxxLNR1ibziaISsOdLs4eurzYEvFE5W7mxUagGUbvf7EAwg/640?wx_fmt=png&from=appmsg)

实验时设置门极驱动电阻 Ron=2.5Ω，Roff=5Ω。DC-Link 电容电流 iC1 的测量选择罗氏线圈 CWTMini 3B；电感电流 iL 的测量选择选择罗氏线圈 CWT60B；上管的 VDS 电压的测量选择带为 100MHz 的高压差分探头 THDP0100。

母线电压为 700V，电感电流最大为 700A 时，LTspice 仿真双脉冲测试整体波形如图 4-16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkkAR18ljMiaaJRYvhdaYicBicaKcbshkgKlPtciaKoGIa5icMxzcd7V5b0WA/640?wx_fmt=png&from=appmsg)

从双脉冲仿真波形图图 4-16 中可以看出，存在低频振荡，峰值电流为 600A，第二个振荡峰峰值 ΔiC1 为 403A，振荡频率为 16.67kHz。

DC-Link 母线电压为 700V，电感电流最大为 700A 时，双脉冲实验整体测试波形如图 4-17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkRbuIFciaRp1scDfphiatDkgtxvNpI11ib2LQCy65Ld0SK17GKnpQ89EoQ/640?wx_fmt=png&from=appmsg)

从实验波形图 4-17 中可以看出 Buck 变换器 DC-Link 电容电流存在低频振荡，峰值电流为 600A，第二个振荡峰峰值 ΔiC1 为 405A，低频振荡频率为 16.67kHz。实验结果与仿真结果相一致，进一步验证了解析方法的准确性。同时低频振荡频率 16.67kHz 与阻频特性曲线图 4-4 中 1.07mF 解耦电容时低频振荡 16kHz 相一致，验证了关断电压振荡的低频分析。

双脉冲测试二个脉冲关断如图 4-18 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslD9CfaOWUicVzB4tcYC4KqkwtLLRgcDibS7GrJlVGqRjMPVeqhY0GU5Zfb9TCSQDcFCZhTZDiakZvKg/640?wx_fmt=png&from=appmsg)

在直流母线电压 700V 时， 关断电流为 700A 时， 漏源极过冲电压为ΔVDS=+280V，振荡频率为 11.1MHz。这与阻频特性曲线图 4 中 1.07mF 解耦电容时高频振荡 11MHz 相一致。同时由波形可以看出当解耦电容为 1.07mF 时低频振荡对 VDS 过冲电压的影响很小。

4.5 本章小结

本章以电力机车辅助变流器为研究对象，在充分考虑系统寄生参数的基础上，针对 SiC MOSFET 关断电压振荡问题，首先建立了 SiC MOSFET 关断振荡小信号模型，推导了解耦电容参数对线路寄生电感完全解耦的条件，在频域上分析了关断电压高频振荡和低频振荡的产生机理。针对功率回路存在的低频振荡问题，提出一种低频振荡分析模型，建立阻抗分析网络对电容谐振电流进行计算。最后仿真和实验结果证明了关断振荡分析以及谐振电流解析的准确性，并给出了考虑关断电压振荡和低频谐振电流的解耦电容、支撑电容和开关频率参数选型优化建议。

5\. 总结与展望

5.1 全文工作总结

与 Si IGBT 相比，SiC MOSFET 具有耐高温、开关速度快、导通电阻小等优点，应用全碳化硅的变流器可获得更高的开关频率、更高的功率密度和更低的损耗。但在 SiC MOSFET 的应用中仍存在过冲电压、振荡以及短路保护时间短等难点。为此，本文对 SiC MOSFET 开关特性分析、驱动与保护技术、变流器功率回路的振荡问题进行了深入的研究，具体完成的工作内容如下：

（1）介绍了 SiC 材料的优势、器件的发展历史及应用的现状和前景，阐明了SiC 应用的难点及研究方向，查阅相关文献总结了 SiC MOSFET 开关特性、驱动电路及变流器功率回路振荡问题的研究现状。

（2）研究了 SiC MOSFET 的器件结构和工作特性。对开通和关断过程的各个阶段进行了详细的定性和定量分析，给出了传输电容和输出电容参数的提取方法，完成了 SiC MOSFET 的开关瞬态模型的建立，双脉冲实验验证了模型的准确性。并基于模型仿真研究了电路参数对于开关特性的影响，为驱动电路优化和变流器的应用提供了参考。

（3）完成了驱动电路设计中驱动电压的选取、电源的设计、功率放大电路的设计、隔离方式的选择进行了深入的分析、对比、设计和测试。针对 SiC MOSFET关断电压过冲与振荡等问题，设计了多级电平关断驱动电路的方案，优选了多级关断中间电平与作用时刻，完成了多电平关断方法的硬件电路设计，实验验证了关断中间电平和作用时刻选取的准确性，并表明多级电平关断驱动方案可以有效地改善关断特性。根据 SiC MOSFET 短路耐受能力弱等特点，研究了短路保护电路、软关断等保护电路，实验表明短路保护时间小于 1µs，软关断电路可以有效抑制短路工况下的过冲电压和振荡。

（4）以全碳化硅辅助变流器为研究对象，在充分考虑功率回路寄生参数的基础上，建立了 SiC MOSFET 关断振荡小信号模型，推导了解耦电容参数对线路寄生电感完全解耦的条件，在频域上对关断电压高频振荡和低频振荡进行了分析。在此基础上，针对两级系统存在的低频振荡问题，提出一种低频振荡分析模型，建立阻抗分析网络对电容谐振电流进行计算。最后仿真和实验结果证明了关断振荡分析以及谐振电流解析的准确性，并通过电容电流解析相关曲线的分析，给出了为抑制谐振电流解耦电容、支撑电容和开关频率参数选型优化的建议。

5.2 后续工作展望

本文虽对 SiC MOSFET 开关特性、驱动电路和功率回路振荡问题做了一定的研究。但仍存在一些不足，总结如下为后续的研究人员提供参考。

（1）本文虽然针对 SiC MOSFET 开关特性建立了开关瞬态模型，但模型中需要的一些参数（例如功率回路寄生电感，寄生电阻）的提取未进行深入的研究。模型中并未考虑温度对于 SiC MOSFET 的参数（阈值电压、导通电阻）的影响。因此有必要针对电路的参数提取和温度的影响进行深入的分析。

（2）采用闭环设计的思想，优化多电平关断驱动电路研究，增加系统适用性。

（3）本文对变电压型软关断进行了分析和实验验证，下一步需要对中间电平和作用时间进行深入的理论分析。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)