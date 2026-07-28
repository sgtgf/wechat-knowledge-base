# SiC MOSFET 高频驱动及在并网逆变器的应用


> 原文地址: [https://mp.weixin.qq.com/s/tN1jwhvaIeT0QQHn9pVfYg](https://mp.weixin.qq.com/s/tN1jwhvaIeT0QQHn9pVfYg)

文章来源：南京航空航天大学

作者：孙浩（硕士学位论文）

摘要：为了实现低碳环保的可持续发展道路，开发清洁的可再生能源成为必然趋势，与可再生能 源密切相关的分布式发电系统也得到研究人员的密切关注。目前国内外分布式发电研究以光伏 发电和风能发电为主，其中太阳能光伏发电在全球范围内发展迅猛。并网逆变器是分布式发电 系统的核心，其性能直接影响着系统的安全稳定性和使用寿命，IGBT(Insulated Gate Bipolar  Transistor)和 MOSFET(Metal-Oxide-Semiconductor Field-Effect Transistor)是并网逆变器应用最多 的器件。新能源器件的发展目标是：高效率、高可靠性、高功率密度，为了满足高功率密度的目标，市场对开关管的开关频率有更高的需求，新型宽禁带半导体器件SiC MOSFET(Silicon  Carbide Metal-Oxide-Semiconductor Field-Effect Transistor)的选用也得到了越来越多的关注。

本文比分析了SiC 器件和Si 器件的参数特性，总结基于SiC MOSFET 的驱动器设计要求； 在隔离驱动方案选择，对比调制解调方案和脉冲信号传输方案，通过理论和实验验证脉冲信号 传输方案延时更小、可靠性更高；提出一种利用RC 延时调节消隐时间的短路保护方案，保护电路结构简单，动态响应在300ns 以内；搭建双脉冲测试平台验证脉冲信号传输方案和提出的短路保护方案。

针对发展最为迅猛的太阳能发电，选用工业界通用的H6 桥拓扑搭建并网逆变器，对H6桥的拓扑与调制进行介绍；利用状态空间平均法建模得到逆变桥的传递函数；对 H6 桥进行共模分析，证明其共模电压低，产生的漏电流小；对单L 滤波的20 kHz H6 桥并网逆变器进行硬件设计，包括参数满足要求的功率器件选型、带低阻抗回路防止桥臂串扰的驱动方案、全隔离的采样方案、滤波电感和母线电容的设计；最后对PCB 布局要点进行分析，通过后续实验验证其可靠性。在控制策略方面，分析两种不同的锁相环方案，设计基于SOGI (Second Order  Generalized Integrator)的锁相环和基于L 型滤波器的电流环参数，通过伯德图验证环路稳定性。

建立H6 并网逆变器损耗模型，分析损耗理论分布，SiC 器件开关损耗小，在高频工作条件下相对于Si 器件更具优势；通过电阻负载实验对SiC 20 kHz、SiC 100 kHz、Si 100 kHz 进行效率测试；设计安全可靠的并网流程时序，在搭建的样机上验证硬件设计与环路设计的正确性； 在LCL 型逆变器平台验证不同电流控制环节对谐波抑制的效果，PI(Proportional Integral，PI)控制在谐波频率处增益较低，谐波抑制能力最弱；QPMR(Quasi Proportional Multi-Resonant，QPMR)控制能够有效减小并联支路项中心频率处谐波，但是并联项受环路稳定限制；重复控制相对QPMR 控制谐波含量进一步优化，且高次谐波含量也得到有效抑制，谐波抑制能力最强。

关键词：SiC MOSFET，驱动设计，并网逆变器，并网电流控制，谐波抑制

第一章绪论

1.1 研究背景

能源是人类活动的物质基础，优质能源的使用极大促进了人类的发展，随之而来的能源短缺问题也引起世界各国的重视。据世界能源委员会预测，地球上已探明的石油、天然气、煤炭按照现阶段的消耗速度分别还能再使用40 年、50 年、220 年。与此同时，化石燃料的燃烧排放出大量SO2、CO2，严重污染了大气，引起全球性气候变化。为了实现低碳环保的可持续发展道路，开发清洁的可再生能源成为必然趋势，与可再生能源密切相关的分布式发电系统也得到研究人员的密切关注。

分布式发电系统能够直接建立在用电现场附近，一方面满足用户的需求，一方面符合电网的的经济运行，通常是由发电机组、并网逆变器、隔离变压器构成。发电机组输出直流电，分布式发电系统中可再生能源主要有光伏发电单元、风能发电单元、生物质能发电单元、潮汐能发电等；并网逆变器将直流电转化成满足并网要求的交流电，经过隔离变压器后送入电网。基于直流母线的分布式发电将发电单元生成的直流电汇合送入逆变器，而基于交流母线的分布式发电每个发电单元都有独立的逆变环节，将发电单元生成的220 V 交流电经过工频隔离变压器统一送入电网，电能容量小、可靠性高，但是控制方式复杂。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUDlRkpQjLOlRF3jB6xGt8qPqcgUpia00GEFIU8BO2B6fjn2RWic3brYXQ/640?wx_fmt=png&from=appmsg)

相对于传统的集中式发电，分布式发电能够直接安装于用户附近，占地面积小、建设成本低、安装时间短，更加容易维护，能够有效减少长距离运输带来的电力损耗；利用新能源分布式发电不排放有害气体，环境污染小，且不存在资源短缺或耗尽现象。目前国内外研究以光伏发电和风能发电为主，其中太阳能光伏发电在全球范围内发展迅猛。2010 年光伏发电崛起的时候，全球总装机容量为1.27 GW，当时预测在2020 年左右全球装机总容量可以达到42 GW， 结果在2016 年时，仅新增装机容量就达到73 GW，其中中国达到34.54 GW。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUIu2HPibsCO5O3kJ2HTMYKxWselYFicUEPvWeiaicuQyFEibPqbFWbx51hfQ/640?wx_fmt=png&from=appmsg)

中国自2009 年实施“金太阳工程”以来，出来一系列光伏扶持政策，大力发展国内的产业，2016年12 月10 日，国家发改委下发《可再生能源发展“十三五”规划》，到2020 年底，全国太阳能并网发电达到1.1 亿千瓦，届时光伏并网建筑累计装机容量将占市场份额的62.5%。BIPV即光伏建筑一体化，利用建筑物为光伏系统提供土地面积与支撑，旨在将房屋发展成具有独立 电源，能够自我循环的新型建筑。

1.2 并网逆变器发展现状

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUU2kSD2693qN30zUAMYxBibUVsaYGDmyLKwwjwqEOAxATlNlUeAVYic9g/640?wx_fmt=png&from=appmsg)

并网逆变器是分布式发电系统的核心，功能是将发电机组输出的直流电转化成符合电网要求的交流电，其性能直接影响着系统的安全稳定性和使用寿命。并网逆变器主要包括逆变环节、 滤波环节、控制环节，目前光伏发电是国内外研究最多的发电方式，本章节基于单相光伏并网逆变器拓扑对并网逆变器三个主要部分的分析进行分析。

1.2.1 逆变环节

单相并网逆变器拓扑中，全桥逆变拓扑结构简单，运行对称，控制方便，应用较为广泛， 开关管一般选用IGBT，工作频率不超过20 kHz；混合全桥逆变拓扑将两个下管换成MOSFET， 上管IGBT 工作频率50 Hz，利用IGBT 的反并联二极管替代MOSFET 的体二极管，能够避免MOSFET体二极管的反向恢复损耗，同时发挥MOSFET 的高频优势，将下管开关频率提升到20kHz以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUOZ4DPTyicueP3jH6jPML9gIEc4anDv9yKStp3NpO6qEA5WvnrUExyKw/640?wx_fmt=png&from=appmsg)

  
在光伏并网逆变器的应用中，光伏阵列接收太阳辐射输出直流量，光伏阵列的接地机壳和光伏板之间有寄生电容，寄生电容的大小受光伏板面积、机壳面积、天气等因素影响，如果对寄生电容充放电产生漏电流，不仅会对光伏板造成损坏，还会对人身安全造成威胁，针对寄生电容的影响，H5、H6、Heric 等演变出的拓扑能够有效抑制漏电流。H5 逆变拓扑在直流侧和逆变桥中间加入开关管Q5，在输出电流为正的半个工频周期内，功率传输阶段Q5、Q1、Q4导通，续流阶段 Q1、Q2 导通，续流回路实现电网侧与光伏阵列的电气隔离，有效抑制漏电流；Heric拓扑在逆变侧与交流侧加入续流回路，输出电流为正的半个工频周期内，功率传输阶段Q1、Q4导通，续流阶段主管全部关断，只有辅管Q5导通；H6 桥在全桥基础上加入两个辅助开关管和功率二极管，输出电流为正的半个工频周期内，功率传输阶段Q1、Q3、Q6 导通，续流阶段主管只有辅管Q3 导通。其中H5 拓扑为SMA 公司专利，Heric 拓扑为Sunway 公司专利， 所以H6 桥是市场上应用最为广泛的光伏并网逆变拓扑，本文逆变拓扑即采用H6 桥方案。

1.2.2 滤波环节

并网逆变器运行时，输入电压、并网电压、死区等都会引起并网电流的谐波，一般高次谐波由电路中滤波器环节滤除，低次谐波通过电流控制器抑制。逆变器的驱动由正弦脉宽调制产生，会让逆变输出电压和并网电流引入高频谐波，利用滤波器滤除开关频率处谐波。

并网逆变器常用滤波器方案有单L 型、LC 型和 LCL 型。单L 型滤波器电感对低频信号阻抗小，对高频谐波信号阻抗大，设计简单，系统在PI 调节过程中较容易稳定，LC 型滤波器电 容并联在电网两端，对于并网逆变器，单L 型与LC 型可以当成一类分析，一般单L 型滤波器 对称分布在电网两侧，为了滤除高频纹波通常会加入滤波电容，广泛应用于工业级产品；LCL型滤波器利用电容对高频信号的低阻抗特性，让低频基波信号流入电网，高频谐波信号从电容 支路流出，有效减小电流的谐波含量，提升电流质量。

相对于单L 型滤波器，LCL 滤波器在相同的感值下谐波抑制能力更强，并网电流谐波含量更少，波形质量更高，但是LCL 作为三阶模型存在谐振尖峰，可能导致输出波形的畸变与失真， 造成系统震荡，需要加入阻尼环节消除谐振尖峰，提高系统稳定性。本文先采用单L 型滤 波方案设计H6 并网逆变器，再在LCL 平台采用电容电流反馈的有源阻尼法抑制谐振尖峰，对比电流控制环节对并网电流的影响。

1.2.3 控制环节

当单相并网逆变器功率因数为1 时，输出电压和输出电流同相位，控制环节主要包含逆变电流环和锁相环(Phase Locked Loop，PLL)，锁相环采集电网电压相位信号与基准电流送至电流控制器，经过正弦脉宽调制(Sinusoidal Pulse Width Modulation，SPWM)输出开关管驱动。

并网锁相发展至今，广泛应用的的主要分为过零检测、傅里叶变换锁相和锁相环。过零检测依靠外部硬件电路，检测电网电压的过零点采集相位和频率信息，检测方法简单易实现，但是由于电网电压在每个周期只有两个过零点，锁相的速度大大受到限制，如果电网电压发生畸变，过零检测受到干扰信号的影响无法被检测，最终导致相位偏差影响并网功能。利用傅里叶变换进行基波鉴相，可以把基准频率倍频次的信息，如相位、频率等提取出来，信号的同步不受谐波的影响，抗干扰能力强，计算精准，但是计算过程需要一个周期，且对内存空间要求高。 锁相环包括模拟锁相环、数模混合锁相环、数字锁相环等，目前工业界趋势是应用纯软件方法 实现锁相，避免了硬件方案带来的延时、抗干扰能力差等缺点。

逆变电流环利用电流控制器实现对基准电流的跟踪，常用的电流控制环节有比例积分控制、 比例谐振控制(Proportional Resonant，PR)和重复控制(Repetitive Control，RC)，根据内模原理，当控制环节包含与外部信号结构一致的模型时，系统能够实现无静差控制。表1\. 1 中重 复控制环节为理想模型的傅里叶分解项。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUZZ8DC2t860ibd7HPdrEpcn4TfWqgIUujgXmNdbv2jyVSWdC8GWOZkVQ/640?wx_fmt=png&from=appmsg)

本文在LCL 逆变平台设计满足三种控制方式环路稳定的参数并进行实验验证。

1.3 SiC 器件发展现状

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUyvnVqh4LToInefUGcAjbf6p3EibCDh5LN7DibBz7Rz7Y6V6ftLXepibBg/640?wx_fmt=png&from=appmsg)

SiC 材料的电击穿场强是Si 的十倍，意味着SiC 器件具有更薄的漂移层、更高的击穿电压 和更低的导通电阻。更高的禁带宽度和导热系数意味着SiC 器件比Si 器件更适合在高温条件下 工作。其中，SiC 二极管和SiC MOSFET 已经逐步替代 Si 的市场。

1.3.1 SiC MOSFET 驱动设计

制约SiC 器件应用的关键之一是适于高频、宽温条件下的可靠驱动技术，以保证设备运行的效率、可靠性和安全性。与Si 基器件不同，SiC 器件需要非对称驱动电压，存在驱动电压范 围较窄、门极电容小、导通阈值低易受干扰、过载能力低等问题，同时SiC MOSFET 对短路保护电路的可靠性和动作时间等性能有更加严格的要求，短路故障时 SiC 器件应用电路变化更剧烈，在相同的延迟时间内汇聚更多的能量，更快触发安全阈值，短路承受时间短。

在驱动设计方面，学者针对SiC MOSFET 开关过程中的不同区间提出许多创新。高频化应用虽然可以减小开关损耗，但是会带来如电磁干扰等开关噪声问题，日本学者Yamaguchi 等提出一种门极加速电路，在开通延时和关断延时阶段向驱动回路注入额外的电流，减少了开关延时过程，在开关损耗和开关噪声之间实现一个平衡，提高了变换器效率和功率密度。西班牙学者Paredes 等提出一种改变门极驱动电阻电路，在密勒平台期间增大驱动电阻，减小了区间内电压变化速度，进而降低了电压尖峰和震荡，在除密勒平台以外区间减小电阻，有效保持了驱动的快速性，在减小电路震荡的同时实现较低的损耗。美国学者Riazmontazer 等针对高dv/dt是共模噪声的最初来源、高di/dt 造成电压电流过冲，提出一种基于SiC MOSFET 的闭环 控制策略，在电压和电流变化区间通过闭环控制减小门极驱动电流，降低驱动速度，达到降低电压电流变化率的效果，实现对开关损耗、器件应力和EMI 的控制与调节。在短路保护方面，美国学者Dushan 等对变化电流积分后，通过FPGA 采样电压参数，提出一种适用于SiC MOSFET 模块，可以直接检测电流的PCB 罗氏线圈方案，但是设计复杂， 成本过高，且针对特定大小的模块，不利于推广。文献\[30\]提出一种通用的平面式罗氏线圈电流传感器方案，当电流变化时，微分环节会在线圈终端产生感应电压，但是该方案需要对积 分器带宽精心设计，同时由于电流回路变长，引入额外的源极电感，影响了SiC MOSFET 的高频开关特性。文献\[31\]采用电阻检测方案，但是需要器件提供额外的检测引脚，如CREE 推出的四引脚封装器件，虽然减小了源极电感对高频开关特性的影响，但是现在市场主流产品还是三引脚封装，通用性不强，且四引脚封装器件成本较高。

1.3.2 SiC 器件在并网逆变器的应用

IGBT 和MOSFET 是并网逆变器应用最多的器件。新能源器件的发展目标是：高效率、高可靠性、高功率密度，为了满足高功率密度的目标，市场对开关管的开关频率有更高的需求， 需要逆变器工作在更高的频率来减小滤波器体积。IGBT 开关速度较慢，关断时拖尾电流会带来较大的损耗，一般工作在小于20 kHz 的场合；而MOSFET 的体二极管反向恢复特性差，反向恢复过程中较大的电压、电流变化率容易损坏器件，在全桥结构中的工作频率也受限制。为了解决高频发展中损耗和应力的问题，除了新的拓扑和软开关技术的研究，新型宽禁带半导体器件的选用也得到了越来越多的关注。 SiC 二极管和SiC MOSFET 已经逐步替代Si 的市场。SiC 二极管同Si 基二极管相比，几乎没有反向恢复电流，关断损耗小。应用于光伏并网逆变器的Boost 电路和逆变电路后，可以提高器件的开关频率，降低能量转换的损耗。SiC MOSFET 的工作频率可以到200 kHz 以上，甚至到MHz 级别，工作频率提高后不仅可以降低损耗，还可以减小滤波电感的体积，增大功率密度，同时更高的应力和更好高温工作能力意味着SiC MOSFET 可以提高逆变器的可靠性。目前，大于100 A 的高功率场合采用Si IGBT 和SiC 二极管组成的SiC 混合功率模块，SiC MOSFET主要应用于电压低于 1200 V、电流小于100 A 的中小功率场合。

虽然器件更高的开关频率能够减小电感等无源器件的体积，但是器件损耗更大，会带来更高的散热要求。所以逆变器功率密度存在一个理论最大值，对于SiC 器件而言这个最高功率密度点在500 kHz 处，但是现有的SiC 逆变器因为驱动速度、电磁兼容、高速控制算法等难点，开关频率难以突破200 kHz，所以SiC 器件在高频化的发展中仍具有很大的挑战。

1.4 本文主要研究内容

并网逆变器是分布式发电系统的核心，功能是将发电机组输出的直流电转化成符合电网要求的交流电，其性能直接影响着系统的安全稳定性和使用寿命。IGBT 和MOSFET 是并网逆变器应用最多的器件，而新能源器件的发展目标是：高效率、高可靠性、高功率密度，为了满足高功率密度的目标，市场对开关管的开关频率有更高的需求，新型宽禁带半导体器件如SiC  MOSFET 的选用也得到了越来越多的关注。基于以上背景，本文对SiC MOSFET 驱动、SiC  MOSFET 并网逆变器、并网控制策略进行设计与分析。

第一章为绪论，通过查阅相关文献，介绍了本文的研究背景，从逆变环节、滤波环节、控制环节三部分对分布式发电的核心并网逆变器进行介绍，针对市场对高频、高功率密度需求引入新型宽禁带半导体器件SiC MOSFET。

第二章对比分析了SiC 器件和Si 器件的参数特性，通过调研市场上驱动器产品总结基于SiC MOSFET的驱动器设计要求；通过实验验证脉冲信号传输方案延时更小、可靠性更高，更加适合作为SiC MOSFET 的隔离驱动；提出一种利用RC 延时调节消隐时间的短路保护方案， 保护电路结构简单，动态响应快；搭建双脉冲测试平台验证脉冲信号传输方案和提出的短路保护方案，同时测试驱动器样机的上升时间、延迟时间等参数；

第三章介绍H6 桥并网逆变器的拓扑结构与调制方式；利用状态空间平均法对H6 逆变器建模并对H6 桥进行共模分析；对基于工业级单L 方案的20 kHz H6 桥并网逆变器进行硬件设计， 选择参数满足要求的功率器件、采用带低阻抗回路防止桥臂串扰的驱动方案、选择全隔离的采样方案、对滤波电感和母线电容的取值进行推导与分析；对PCB 布局要点进行分析，通过后续 实验验证其可靠性；

第四章分析两种不同的锁相环方案，设计基于SOGI 的锁相环参数，通过伯德图验证环路稳定性；设计基于L 型滤波器的H6 并网逆变器电流环参数并验证其稳定性；分析电网电压、母线电压和桥臂死区对电流谐波的影响；对比分析PI、PR、RC 三个控制环节，讨论其对基波电流的跟踪效果和对谐波电流的抑制能力；针对三种方案设计控制参数并通过伯德图或奈奎斯 特曲线验证其稳定性；

第五章建立H6 并网逆变器损耗模型，分析损耗理论分布；搭建SiC MOSFET 并网逆变器样机，通过电阻负载实验对样机进行效率测试，验证理论分析的正确性；设计安全可靠的并网流程时序，根据时序图编写程序进行L 型逆变器并网实验测试，验证硬件设计与环路设计的正确性；在LCL 型逆变器平台验证不同电流控制环节对谐波抑制的效果；

第六章总结了研究生期间的主要研究工作，并指出当前研究中存在的一些不足，最后，对下一步工作作出展望。

第二章 SiC MOSFET 驱动技术的研究

据绪论部分介绍，SiC 器件应用前景广阔，但是在高频化的发展中仍旧有很大的挑战，本章针对SiC MOSFET 的驱动部分进行研究与验证，为SiC MOSFET 驱动设计提供参考。

2.1 SiC MOSFET 特性分析

SiC 材料的电击穿场强是Si 材料的10 倍，这意味着在相同的电击穿场强下，SiC 器件可以有更薄的漂移层。目前Si MOSFET 的耐压一般到900 V 左右，而SiC MOSFET 的耐压可以达 到1700 V。漂移层的厚度与器件的导通电阻相关，更薄得漂移层也意味着更低的导通电阻，所 以SiC MOSFET 不需要电导调制获得低导通电阻，同时兼具MOSFET 没有拖尾电流、开关速度快的特点，有着比Si IGBT 更低的开关损耗，适合功率器件高频场合的应用。更高的禁带宽度意味着SiC器件承受高温的能力更强，SiC MOSFET 能够在150度~175度的环境下稳定工作， 如果封装合适，工作温度甚至可以达到200度以上。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUsugzCwzfwXfJExmtEMseZOS2GoFsusnKcrD6ia66Wwg1mxiabWiatpT1g/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的电路模型和器件结构与Si MOSFET 类似，可以参考Si MOSFET 的开关特性进行分析。MOSFET 的开通与关断可以近似看成对门极电容的充放电，表2\. 1 看出，SiC  MOSFET 的输入电容Ciss只有Si MOSFET 的十分之一，这意味着SiC MOSFET 的开关速度要比Si MOSFET 快很多，更适合在高频场合工作，如果直接使用Si MOSFET 驱动，不能发挥SiC  MOSFET 的高频优势。理想状态下，当门极电压达到阈值电压Vth 时器件开始导通，漏极电流 开始流过，SiC MOSFET 的阈值电压较小，门极信号容易受到干扰，很容易引起误开通，需要负压关断或者低阻抗关断回路。

在同一漏源电压Vds 下，驱动电压Vgs 越大，输出特性曲线的斜率越大，即导通电阻Rdson越小，虽然 Si MOSFET 的驱动电压范围大，但是在实际工作中，一般选择Si MOSFET 的驱动电压为12V~15V，因为当驱动电压继续升高时，导通电阻下降得不明显，会增加驱动损耗，而对于SiC MOSFET，虽然阈值电压小，更容易开通，但是在驱动电压达到16V 时才会完全导通， 如果直接采用Si MOSFET 的驱动电压，导通损耗会增加，一般选择驱动电压为18V~20V，具 体数值根据选取的器件手册设计。同时，Si MOSFET 和SiC MOSFET 对保护的要求也不一样， 需要考虑SiC MOSFET 特性对驱动进行专门设计。

2.2 SiC MOSFET 驱动设计

2.2.1 驱动设计要求

目前市场上使用较多的SiC MOSFET 驱动器厂商有美国的CREE 司、日本的ROHM 公司等，国内发展较晚，所以还未有成熟的SiC MOSFET 驱动器产品。所以对于SiC MOSFET 驱动 的研究，不仅是技术发展的需要，更在推动集成芯片国有化，掌握核心技术方面有着深远意义。

目前对于SiC MOSFET 驱动器的研究大多参考Si 器件驱动技术，根据SiC MOSFET 的需求进行改进优化，从Cree 公司SiC MOSFET 驱动器产品CGD15HB62P1 框图可以看出，驱动器主要包括驱动电源、驱动信号传输、驱动保护三大部分。驱动电源包括原副边的供电和电平转换。驱动信号传输包括原副边PWM 信号隔离、输入输出信号整形、功率信号放大、故障信号反馈等环节。驱动保护包括供电过欠压保护、器件应力过压保护、过流保护、短路保护，其中短路保护是核心环节。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUWX8moaoibicaDSQpnEyLFfQ0tVeEcpz1nEKnG78KCw2ACDqGcBZfDbQQ/640?wx_fmt=png&from=appmsg)

目前市场上成熟产品均采用变压器隔离方案。驱动电压均在+20 V/- 5V 左右，驱动电流能力大、驱动上升下降时间短，但是工作温度范围除比利时CISSOID 外均较窄，且比利时CISSOID的高温特性也是以高额的成本为代价，最高工作频率不超过 200 kHz，远远不能发挥SiC 器件的高频特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUvichI30NQD5epEoNicYl2wLt8JdenrBrZ2PIIPfYpgOzqoXN6OhEZxuQ/640?wx_fmt=png&from=appmsg)

对于上升/下降时间和延迟时间，不同厂商提供的参数测试条件不一样，ProDrive 的PT62SCMD17定义PWM 信号上升到50%到门极驱动电压上升到20%的时间为开通延时，而CREE的CGD15HB62P1 定义PWM 信号上升到50%到门极驱动电压上升到50%为开通延时， 可以在驱动器产品后接入等值模拟负载进行测定比较参数。通过对国外SiC 驱动器参数对比分析，目标研制出各性能参数均高于市面平均水平的SiC MOSFET 驱动器：采用变压器隔离，驱动电流达到±12 A，驱动电压+20/-4 V，上升下降时间都在60 ns，延迟时间200 ns，最大工作频率400 kHz，工作温度范围\-40～125度。

2.2.2 隔离驱动方案

驱动电路连接着控制器与功率器件，是实现SiC MOSFET 正常工作的关键环节，为了避免功率回路对控制回路造成干扰，需要在控制回路和功率回路之间采取隔离措施。常见的隔离驱动方案有光耦隔离、电容隔离和电磁隔离。

光耦隔离利用发光器件和光敏器件传输信息，成本低，抗干扰能力强，适合用于低频场合。 但是由于光电耦合器只能传递信息，不能传输能量，所以需要隔离电源分别给原副边供电；光耦合隔离的传输延迟较大，一般大于200ns；光耦隔离最大的缺点在于可靠性差，光学器件会 产生“光衰”影响器件寿命。

电容隔离采用容值低、介电常数高的电容器作耦合元件实现输入和输出端的电气隔离，速度快，延迟小，抗干扰能力强，但是在器件开关过程中，瞬态电压变化du/dt 会在电容产生一定的位移电流，如果耦合电容较高，产生较大的位移电流可能会导致自锁甚至破坏元器件，所以电容隔供电电压范围小。

电磁隔离利用变压器传输信号和能量，传播延时短，没有老化效应，性能稳定寿命长，利用变压器隔离只需要保证最小的爬电距离和电气间隙就能适用于所有的电压等级。是一种理想的隔离驱动方式。变压器隔离驱动的主流方案是利用变压器传输PWM 脉冲信号，变压器几乎不传递能量，损耗小，适用于占空比变化大的场合。本小节主要研究基于变压器隔离的调制解调方案和脉冲信号传输方案。  

(1)、调制解调方案

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUxDDQBXKnEgTD5seZdyolU6PzFxnBfq7ScPTsic2eRdF8ML7VfIBHYzg/640?wx_fmt=png&from=appmsg)

调制解调驱动方案主要包括调制模块、隔离模块和解调模块三个部分，低频调制信号为控制芯片发出的PWM 信号，高频载波信号由晶体振荡器生成，将调制信号和载波信号逻辑与后，利用隔直电容Cmi 构造负压生成交流信号，将只有零和正电压的信号波转化成具有正负电平的调制波信号。交流调制波经变压器传送到副边实现调制模块和解调模块的隔离。解调模块利用比较器滤除负压部分、经过Rm、Cm 构成的滤波器滤除高频分量，最后利用缓冲器实现整形，生成的方波与原边的PWM 控制波频率、占空比一致。TI 的驱动芯片UCC3724/UCC3725 即采用调制解调方案，能够有效实现原副边隔离，结构简单成本低。但是调制解调方案存在一定的不可靠性。调制模块中，如果PWM 信号的上升沿 和下降沿刚好对应高频载波的低电平，PWM 控制信号和高频载波信号进行逻辑与时会出现采样丢失的现象，输出方波的占空比发生变化，导致调制解调过程PWM 信号无法准确被还原，后级驱动也会受到影响。采样丢失示意图中，tdon为输出解调波的上升沿延迟时间，taoff为下降沿超前时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUV6xZXGGJDxBjUVdUCeKJuMhkcMJibNQpzoDn2v1jwu1UCzBoTK71K4g/640?wx_fmt=png&from=appmsg)

假设f1 为PWM 控制信号的频率，f2 为高频载波信号频率，理论上最大上升延迟时间和最大下降超前时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUz2tvHPqYrcfd0twckQEWQ0yfA5Pldw8zfa2aPQeg5ZhFEbXunQKkhg/640?wx_fmt=png&from=appmsg)

如果PWM 信号占空比为50%，输出方波的占空比最大丢失程度为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUH8TKwVL96dNWa9qXM2Wha0zsbZ8V4tYjLGRGa3TA3caiaibq0KJxchGQ/640?wx_fmt=png&from=appmsg)

由上式可得：低频调制波的频率越低，高频载波的频率越高，调制解调过程中占空比最大丢失程度越小，为了减小失真程度需要选择高频振荡器提供高频载波。如果出现焊接温度过高、 激励功率过大、频率漂移等不利因素，高频晶振会产生停振现象，直接影响后级的正常工作， 需要搭建额外的保护电路，增加器件的数量和体积，提高了成本。此外利用RC 滤波器滤除高频分量时，会造成一定的延时，在电阻两端反并联二极管可以减小PWM 的下降延时，但是无法减小上升延时。 

(2)、脉冲信号传输方案

在驱动高压全控型电力电子器件时，变压器隔离可靠性高、传输延迟小，可以实现较高的开关频率且不存在老化。由于变压器只能传输交流，直接传输大占空比PWM 信号时会造成变压器饱和，需要在初级串联隔直电容；同时变压器次级的输出波形满足等伏秒平衡，输出波形会随着占空比的减小整体上移，需要采用稳压管限制正脉冲幅值，增加了栅极电阻的损耗。 如果占空比减小，正脉冲幅值随着输出波形的整体下移减小，可能无法有效得驱动后级。因此基于传统变压器的PWM 信号隔离变换电路通常要求控制占空比小于50%，变压器磁芯的饱和问题也限制了工作频率，而变压器传输脉冲信号几乎不传输能量，能够适用于大变化占空比和大功率的场合，逐渐成为变压器隔离驱动的主流技术。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUlRfU4B4NBxLOdS36PeRibhIkSLUChrjDdaQlBGAj0xYp39uicNiclgsow/640?wx_fmt=png&from=appmsg)

脉冲信号传输方案中，同向缓冲器提取PWM 的上升沿，反向缓冲器提取下降沿，将方波信号转化成脉冲信号后通过变压器传到副级，隔离后再将脉冲信号还原成方波信号。积分型单稳态触发器能够将PWM 信号转化成窄脉冲信号，满足脉冲信号生成模块的功能。当Vpi输入低电平时，电路保持稳态，Vpm和Vpo 处在高电平；当Vpi随着PWM 信号变成高电平时，Vpo 立刻跳变成低电平，由于电容Cp 上电压不能发生突变，电路处于暂稳态，该状态在Vpm 通过Rp、Cp 放电至与非门低电平阈值时结束，此后Vpo 跳变回高电平。为了让脉冲信号方向与PWM 信号一致，后级还要加入非门。脉冲信号生成模块可以用双触发单稳态多谐振荡器芯片代替，保证该功能的稳定性。 

CONCEPT公司的IGBT驱动器1SC2060P 即采用这种利用磁耦合变压器来传递驱动信号的技术方案。变压器仅传输PWM 的微分脉冲信号，由于微分脉冲信号宽度很窄，当占空比宽范围变化时，只是微分脉冲的位置随之变化，脉冲宽度不变，伏秒数几乎不会改变，变压器仅对PWM 波的边缘进行耦合，而且几乎不传输能量，因此变压器的体积很小。所输出的微分脉冲， 再借助解调电路如RS 触发器恢复出PWM。这样，即便传递低频信号，变压器也不会饱和。  

 (3)集成芯片方案

目前市场上主流的驱动芯片均为外国厂商供应，且基于IGBT 和Si MOSFET 的集成芯片功能完善，性能优异，如Infineon 的1ED020I12-FA。虽然这些芯片不能直接应用于驱动SiC  MOSFET，但是可以利用隔离芯片、使能关断芯片等搭建满足SiC 器件驱动的局部功能电路。 隔离驱动芯片主要有TI 的电容隔离方案、Infineon 的磁隔离方案和Avago 的光耦隔离方案。

2.2.3 短路保护方案

驱动保护电路包括采样监测和故障保护告警等功能。对于SiC 驱动器，应提供过压、过流、过温保护和供电电压欠压保护。过压保护、过温保护、供电欠压保护等可以基本采用硅基方案,短路保护则需要根据 SiC MOSFET 的特性进行调整。

当IGBT 正常工作时处于饱和区，集射极两端电压为开关管导通压降，如果发生短路状况，IGBT退出饱和区，集电极电流迅速增大，电压迅速升高直至母线电压，去饱和检测即通过检 测集电极电压判断是否出现短路故障。三菱电机和富士电机生产的电机模块中包含多个IGBT单元，而其发射极有两个引脚。负载电流被分为两部分：主发射集电流和检测发射极电流，且这两个电流成一定比例，通过比例放大检测电流反馈实际主发射极电流对是否需要保护进行判断。而CONCEPT的2SP0115T.CISSIOD的EVK-HADES1210、CREE 的CGD15HB62P1 等都是采用传统的去饱和检测短路保护方案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUnHVO4pmZkfiaPxMVKOfciaXJ3OhWUsQ40oVCyW0ZnBTzicw35qVV0Lmow/640?wx_fmt=png&from=appmsg)

在传统的去饱和检测短路保护方案中，器件开通后，恒流源Im将消隐电容Cbl充电到设定的阈值电压，充电时间即为消隐时间tbl：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUib3LOt8aH5l65fyw8G8AsFjT3wAb5tcUYjMOsFVVd4JG1elekbCmwgA/640?wx_fmt=png&from=appmsg)

消隐时间内Vds 从母线电压下降到导通压降，而阈值电压大于导通压降，如果不设置消隐功能必将会误触发短路保护机制关断器件，进而无法有效得开通器件。消隐时间结束后，开启短路保护功能，利用短路时漏极电压迅速上升原理检测漏极电压并接入比较器正端，比较器负 端根据具体器件的输出特性曲线和实际需求选择阈值电压，当比较器正端检测到电压大于负相阈值电压时，比较器发生翻转发出故障信号关断驱动。当器件正常关断后导通Q1，消隐电容通过三极管回路放电，便于下一个开关周期内消隐时间的设置。

一般IGBT 的短路电流承受时间为10 us 左右，CONCEPT 的2SP0115T 在副边检测到短路故障后传到原边，经过1.4 us 延时后关断IGBT，而SiC MOSFET 短路电流承受时间小，要求在2us 以内有效关断，比利时CISSIOD 的EVK-HADES1210 延时0.6 us 后关断SiC MOSFET，所以在设计基于SiC MOSFET 短路保护方案时首先要考虑响应速度，保证及时关断器件。

检测到短路故障时，错误信号反馈到驱动原边拉低驱动，无论是将信号通过隔离变压器传递到原边还是通过采样电路反馈到DSP 都不能满足SiC MOSFET 对短路保护的快速响应性，所以需要在软件关断的同时，在驱动副边硬件关断。提出一种利用RC 延时设置消隐时间的过流保护方案，调节RC 参数自由设置消隐时间，不需要直流源对消隐电容充电，也不需要额外的回路进行放电；利用钳位电路限制Vds 电压检测值，使之不超过比较器引脚输入电压范围；利用单稳触发器接受故障信号，在原边软件关断执行前对后级驱动进行硬件级关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUJKdibPUnsnqmzBh41vXAgeVve75va9QJAe9T24sib1AicIdyiaWDqV490Q/640?wx_fmt=png&from=appmsg)

提出的短路保护方案由Vds电压检测、消隐时间设置、故障信号生成三部分组成，Vds电压检测模块中，实际电压通过阻断二极管Dsc\_m和限流电阻Rsc\_m接入比较器正向输入端，为了保护比较器，使比较器的输入电压不超过保护阈值，正向输入端通过上拉电阻Rlimit 接Vlimit 限制电压幅值。Dsc\_m的击穿电压要大于Vds 两端最大电压，VD2 为正向导通压降。Vds 电压检测后送入比较器的值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyULrJpDpwJmlXd71HTCHqjjT4m7ecmp4oNeJA3d1iae81NCXsoicwFicQdw/640?wx_fmt=png&from=appmsg)

消隐时间设置如图所示，生成的使能信号在高电平时检测故障信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUdNnueN8PfeibiaAB21yzHnIlngQE8UEicBVKohWOl1R5Zcs0iacXplWDUQ/640?wx_fmt=png&from=appmsg)

消隐时间在数值上约为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUXw6bg7D3r23dpkuX5CrvkRv2wL4z4lNuKpicdRdE91V7MS9tC4REZyQ/640?wx_fmt=png&from=appmsg)

当消隐时间设置生成的使能控制信号为低电平时，短路保护功能关断，无论比较器输出何种状态均不会对后级驱动造成影响；当使能控制信号为高电平时，保护功能开启。将Vds 电压 检测模块和消隐时间设置模块的输出经过与门送入单稳态触发器，经过前文分析可得，只有在使能信号高电平期间发生短路故障，才会在单稳后级生成一定时间的低电平信号关断驱动，通过配置单稳的阻容，让低电平维持时间大于DSP 的反应执行时间，对短路故障进行硬件级关断， 一般让硬件响应时间小于2 us。

2.3 SiC MOSFET 驱动方案论证

2.3.1 隔离驱动方案论证  

(1)、调制解调方案

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUKjG5NapLbXq9mIw1yicsQRE1cIs5EadFn0xq0H4ob6Jqicia2jXpy32Gw/640?wx_fmt=png&from=appmsg)

根据前文所述调制解调方案框图搭建样机，验证载波频率对延时的影响。表2\. 3 给出主要器件选型，在保证功能的同时也都满足高温需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUZPibR0xqq3Dqzm0Xff3yrPibIVhy8E4QlgDZvScf6ALp1EPs66uib5F8w/640?wx_fmt=png&from=appmsg)

低频载波测试中，载波频率fc 为300 kHz，PWM 频率fpwm为10 kHz，可以看出输出调制波fm相对PWM波有1.04 us的延时。高频载波测试中，载波频率为20 MHz，PWM频率为400 kHz， 输出调制波相对PWM 波只有50 ns 的延时，但是在实际测试中，高频晶振容易发热，经常出现停振现象，可靠性较差；比较器后级的RC 滤波也会带来较大的延迟，在电阻两端反并联二极管可以有效减小方波的下降延时，但是上升延迟还是较大。

（2）、脉冲信号传输方案

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU1MslF9demmPic7wjuQjmbAwnwdTOriah9jTtq1EoBlIBZtrcic2Bopgicw/640?wx_fmt=png&from=appmsg)

根据前文所述脉冲信号传输方案框图搭建样机，PWM 经过脉冲信号传输到副级，利用RS触发器还原成方波，接入使能驱动芯片实现电平转换，再接入一级图腾柱提高驱动能力。图腾柱上管接20 V 供电，下管接\-4 V 供电，直接输出\-4/+20 V 驱动波形。脉冲信号传输方案样机和主要测试波形如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU9otmY2KLl0VVE6Oe9aiaPcPfcCOMWpee5s5rqxnic2kicRq1nibnJ6o7zg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyULY6Zuqicibv0tCD7CEwK9Hajv3Spx1PpTLUxib2PI80JpmgE6QPJujypw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的开通和关断从本质上来说是对输入电容的充放电过程，在驱动后级接入薄膜电容模拟负载测试驱动性能。模拟负载电阻为1.1 Ω，电容为20 nF。分别测试驱动在100 kHz、200 kHz和400 kHz 条件下的上升、下降时间和开通、关断延迟时间。根据开关特性测试汇总， 开通、关断延时(50%~50%)满足目标参数200ns。上升、下降时间(20%~80%)满足目标参数60ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUK8eGe874z4mweQibqgXGE6wA9DV6FvB2vG9t685rl86jJUiaK6w8Zs4Q/640?wx_fmt=png&from=appmsg)

2.3.2 短路保护方案论证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUssocUTAzsJm83hiaibx8rp9R7CxiaWN4zNibrg8WiaglJjsianH0jOFyamicQ/640?wx_fmt=png&from=appmsg)

双脉冲测试平台可以用来测试开关特性，第一个脉冲驱动时母线电压通过电感充电，漏极电流线性上升，第一个脉冲结束，在第二个脉冲到来之前电流通过二极管续流，由于这段时间很短，导通损耗忽略不计，电流保持不变，在第二个脉冲到来后电流继续上升。利用电流线性 上升的特点模拟过流故障时电流的变大，测试设计的短路保护方案响应时间和效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUDxWr2x4KPxsMl9rEpRqVChykgiabELsWM0xSYbU76rCyzfB0hK0BBzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUqyCUNnDKCGbd9QsSy0g7CSiayuluKW2PiaOHiaHibap1Jr9gLLtrvR0eUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUEcibwEarzf8lWxFJlEicia2Nz0GEx7B8QRJ2eqPgHI85bxGuaVMMAXECQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUHJiaGpqoMLVichDtrVFTI0HKmTBaHJYz15pSyo61HnraEQ5k3zgPduSA/640?wx_fmt=png&from=appmsg)

Vpwm 是原边的PWM 波形，Vgs 是实际的驱动波形，Id 是实际的漏极电流。根据表中参数和双脉冲公式算得开关管在42 us 后开始触发保护，与实际波形基本一致。单稳配置的暂稳态时间为10 us，在驱动高电平期间检测到短路时，故障生成信号会拉低驱动10 us，方案中短路保护为硬件级关断，在软件关断前提前封闭驱动，只要保证在暂稳态时间内有效关断原边驱动即可。

短路保护测试波形中，信号在关断过程中出现振荡现象，由于单稳芯片的暂稳态由边沿信号触发，与之后的状态无关，所以不会影响故障后的正常关断。24 A 电流从保护触发到完全降低为稳态零点时长不超过300 ns，远小于2 us 的SiC MOSFET 短路电流承受时间。本章设计的短路保护方案只针对副边硬件级快速性响应，需要配合软件或者硬件关断原边信号，经过实验验证，根据DSP 响应速度配置单稳触发器的暂稳态时间，根据实际工况选择保护阈值后，该方案能够有效对SiC MOSFET 进行短路保护。

2.3.3 目标方案验证

本文研制的SiC MOSFET 驱动器采用延时更小、可靠性更高的脉冲信号传输变压器隔离方案，信号经过buffer 提高驱动能力，驱动电流达到±20 A，驱动电压+20/-4 V，上升下降时间都在60 ns 以内，延迟时间均小于200 ns，最大工作频率400 kHz，工作温度范围\-40～125度。

2.4 本章小结  

本章首先对比分析了SiC 器件和Si 器件的参数特性；其次对比分析调制解调和脉冲信号传输两种隔离驱动方案，调制解调方案存在采样丢失问题，且需要额外的保护电路；脉冲信号传输方案延时更小、可靠性更高，更加适合作为SiC MOSFET 的隔离驱动；提出一种利用RC 延时调节消隐时间的短路保护方案，利用单稳态触发器在软件关断前对驱动进行硬件级关断，保护电路结构简单，动态响应快；最后搭建双脉冲测试平台验证脉冲信号传输方案和提出的短路保护方案，同时测试驱动器样机的上升时间、延迟时间等参数。

第三章 H6 桥并网逆变器研制

并网逆变器将前级输入的直流电转化成符合要求的交流电送至电网，其性能直接影响着系统的安全、稳定和寿命，是并网系统的核心。由前文可知，随着市场对功率密度要求的提升，SiC器件在光伏产业的高频应用场合前景广泛，基于绪论部分对不同拓扑的比较与分析，本文选用H6 桥方案搭建SiC 光伏并网逆变器。本章对H6 桥逆变器拓扑结构与调制方式进行介绍， 基于技术指标进行器件选型，并对驱动、辅电、采样等硬件部分进行设计。为利用SiC MOSFET搭建并网逆变器样机研究新型半导体器件优势提供设计参考。

3.1 H6 桥逆变器介绍

3.1.1 拓扑结构与调制方式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUDibO8uwKphytdQqib2YLtJ13UusP24l2DRXewjGHOrPZECe4dnHzs2lw/640?wx_fmt=png&from=appmsg)

H6桥逆变器拓扑在全桥的基础上增加两个辅助开关管Q3、Q4和两个功率二极管D1、D2，L1、L2 为输出滤波电感，两个电感感值相等，对称分布。Q1、Q2、Q5、Q6 为高频动作开关管， 在能量传输阶段输送功率，辅管Q3、Q4 工频动作，在续流阶段与功率二极管构成回路分隔光伏阵列和电网。

并网逆变环节最常用的调制方式为正弦脉宽调制：将正弦波等效成方波脉宽按照正弦变化的等幅脉冲波形，方波脉宽由正弦调制波和三角载波相交而成，通过改变三角载波的频率和幅值可以改变逆变交流波的脉动频率和幅值。SPWM 主要有单极性调制、双极性调制、单极倍频调制，在一个载波周期内，单极性和单级倍频调制方式的输出电压为正向和零或者负向和零， 双极性调制的逆变输出电压有三个电平，正电压、负电压和零。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUhlvAzZ8C7xoIwFZj8QhwleGiaDCVyxdIoLnmC00pVEMgfcPYgn2N4tA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUiajzrzP6bmbicmibCgrqfP4adQe1lLdcViaJ2OMiaOwGnlUg97wlq8Fh48w/640?wx_fmt=png&from=appmsg)

本文H6 逆变桥采用单极性调制方式，共分为四个阶段：  

 (a)、t0~t1 阶段，在调制波Vm 为正的情况下，辅管Q3 持续开通，Q2、Q4、Q5 持续关断，当调制波Vm大于载波Vc时，Q1、Q6开通，能量从母线电压处传递到电网，输出电流为正，此时Va 处电平为Vdc，Vb 处电平为0，逆变输出电压为Vdc。 

(b)、t1~t2 阶段，调制波Vm为正，辅管Q3 继续开通，Q2、Q4、Q5 继续关断，当调制波小于载波时，Q1、Q6 关断，辅管Q3 与功率二极管D2 构成续流回路，实现母线与电网的电气隔离， 此时Q1、Q6共同承担母线电压，Va 处电平与Vb处电平相等，为0.5Vdc，逆变输出电压为0。 

(c)、t3~t4 阶段，在调制波Vm为负的情况下，辅管Q4 持续开通，Q1、Q3、Q6持续关断，当反向调制波\-Vm大于载波Vc 时，Q2、Q5开通，输出电流为负，此时Va 处电平为0，Vb处电平为Vdc，逆变输出电压为\-Vdc。 

(d)、t4~t5 阶段，调制波Vm为负，辅管Q4 继续开通，Q1、Q3、Q6 继续关断，当反向调制波小于载波时，Q2、Q5 关断，辅管Q4 与功率二极管D1 构成续流回路，Va 处电平与Vb 处电平相等为0.5Vdc，逆变输出电压为0。  

 H6 桥采用的单极性调制方式在工频半波周期内，一对桥臂只有一个开关管动作，不考虑过零点附近切换，能够有效避免双极性调制时死区过窄引起的桥臂直通，进而不需要设置裕量足够的死区，输出电流谐波较小。

3.1.2 H6 桥逆变器建模

H6 桥逆变器采用单极性调制方式控制输出电流，开关器件的通断由三角载波和正弦调制波相交而成，采用状态空间平均法分析这种开关状态不连续的方案。逆变器输出工频交流波，其频率远小于高频开关管动作频率，所以在一个开关周期内将分量的瞬时值替换成平均值，得到 连续状态空间模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU2lqE8ktC1jg8w7Zh5V3mBe02gnaaNqX8ojOSaVUHLcnl0X6jAhFq8A/640?wx_fmt=png&from=appmsg)

H6 桥逆变器工作状态示意图中，Va 点与Vb点的电位差即逆变桥的输出电压Vinv。当Q1 开通的时候SQ1 为1，当Q1 关断的时候SQ1 为0，同理可以根据Q2的开关得到SQ2的值，由于SQ1和SQ2不是连续的值，所以Vinv也不连续，利用状态空间平均法可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU88l38wAV04faRRHQv1XQ9DFPMNwJ8XTzAJIl0jqLOicIK9p7ft70P2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUvUAcXpKClLXuTy24ibAJcnlMTWsf1Yfx0Lf9e26Lial1WwAAjfsV2X5A/640?wx_fmt=png&from=appmsg)

调制波Vm 的频率远小于开关频率，所以在一个等效开关周期内认为调制波的幅值恒定， 由SPWM 调制示意图看出，驱动占空比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUibehfAQBkXkCAoIBbzJib84lSpicy2q2j4JyHeNONqV2ZQcagd0a1tOmA/640?wx_fmt=png&from=appmsg)

进而可以得到从SPWM 调制器输入到H6 逆变桥输出的的传递函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUAHBXRw61a3AlCs5yiaEz0Y0gVrIQv7mdBVfAhwu7unk7fPibQklOJdqg/640?wx_fmt=png&from=appmsg)

3.1.3 H6 桥逆变器共模分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU2iboVa7iaJbJXLh63uichy2yQ4dNKicGOlLpmzOV0oOHm6dMdxYZunVu1Q/640?wx_fmt=png&from=appmsg)

在非隔离光伏并网发电系统中，光伏阵列与接地机壳之间存在寄生电容，寄生电容与逆变电路阻抗、电网阻抗组成谐振电路。逆变器开关动作时会造成寄生电容上的共模电压Vcm变化， 进而在谐振电路中产生共模电流icm，增加系统损耗、降低电磁兼容性。根据工程经验，并网逆变器的共模电压可以近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU0bqbSU6laHREMPTichdqnUuuWw9hMZXNUnz3NBp1IQFGicGMOleLbsDA/640?wx_fmt=png&from=appmsg)

由前文3.1.1 小节H6 桥逆变器调试方式分析可得，无论是在功率传输阶段还是在续流阶段， 单级性调制下H6 桥的共模电压均为0.5Vcm，在开关管动作时，寄生电容上共模电压近似不变， 共模电流基本消除，并网系统损耗降低，安全性得到提高。

3.2 硬件设计与器件选型

本文搭建3kW 单相并网逆变器，逆变拓扑采用H6 桥，滤波器采用L 型方案，并网逆变器技术指标如下表所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUiboib7T1KuBkckaHG2PtpHxQ96rekED0ibNULlFECibYm7eI1xYe7IhSibQ/640?wx_fmt=png&from=appmsg)

为研究SiC 器件是否在工业级并网逆变器产品中占据优势，本文分别搭建Si 基器件并网逆 变器样机和SiC 样机进行比较与分析，两套样机除开关管不同外，其余硬件均相同，在驱动设计时需要考虑对两种器件的兼容性，且在后续的研究中会进一步提升高频管的开关频率。本章节针对高频开关管为20 kHz 的工业产品级并网逆变器进行样机设计，额定功率为3 kW，输出功率因数为1 时，输出电流与电网电压同相位。设计内容包括功率器件的选型、逆变输出滤波电感设计、母线电容设计、驱动电路设计、外围辅助电路设计等。

3.2.1 功率器件选型

根据技术指标：额定功率3 kW，输出电压有效值Vo为220 VAC，输出电流峰值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUK0VXiawSw2mbNtKH7bneadbOnkegXbribNBTDZxliafcsIEBMdfo5wZKQ/640?wx_fmt=png&from=appmsg)

输出电流有效值为13.64 A，峰值为19.28 A，选择的功率器件在100度下均能正常工作，对于选择Si MOSFET 而言，电流使用程度为45.9%，SiC 器件电流使用程度为59.3%。逆变模块开关管的最高耐压即为母线电压，实验过程中不超过450 V，保留裕量后选择的功率器件耐压为600 V，由于市场上出售的SiC MOSFET 最低耐压为900 V，所以在H6 桥并网逆变器中无法发挥SiC 器件的高耐压优势。

3.2.2 驱动电路设计

在一对桥臂中，下管开通的瞬间，上管漏源两端产生很大的电压变化，上管密勒电容Cgd\_H中流过位移电流 igd\_H，位移电流流过上管驱动电路的驱动电阻在门极形成压降Vgs\_H。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUIl79Tx8XyKrSqBWAD859Agc1oo8CnGfsQPGD01qksMUPA4x76xNk2w/640?wx_fmt=png&from=appmsg)

如果该电压降达到上管阈值电压Vth，就会使上管发生寄生开通。虽然这种开通状态通常只持续很短的时间，但是会产生很高的损耗导致故障。而SiC MOSFET 的开通阈值电压小，比Si基器件更容易造成误开通，必须做出相应的设计。可以采用额外的供电电路对开关管进行负压关断，也可以利用密勒钳位技术，在关断时为位移电流提供一条低阻抗回路。

为了减小驱动部分的体积，采用集成芯片方案，选择Si8271 单通道隔离芯片搭建H6 桥开关管驱动电路。外接辅助电源提供15 V 电平，通过金升阳模块B1505S-1WR2 提供驱动芯片原边5 V 供电，通过隔离模块B1515S-1WR2 提供副边15 V 供电，PWM 波经过芯片后，通过外 部驱动电阻连接开关管，实际的驱动电阻还包括内部的寄生电阻：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUP18CF7QNe0ibrJgFibxAX7htjyUkx9QCye20IZiaVhgBuwojJNoLuy1hQ/640?wx_fmt=png&from=appmsg)

使用负压关断不利于简化外围电路和供电电路，选择密勒钳位方案防止桥臂串扰，提高驱动可靠性。当门极回路产生位移电流，Qglr发射极电压大于基级电压0.7V 时，三级管导通，在门极和电源地之间建立一条低阻抗回路。C3M0065090D 的Cgd 为4 pF，漏源极两端电压变化为380V，内部寄生电阻为4.7 Ω，一般SiC MOSFET 关断较快，但是也需要几十纳秒，设电压下降时间50 ns。密勒钳位保护后，Qglr的导通压降为0.5 V 左右，内部寄生电阻压降小于0.15 V， 门极扰动电压小于0.7 V，低于阈值电压2.1 V，能够只使用密勒钳位进行串扰预防。如果应用于母线电压高的场合，建议使用负压关断和密勒钳位相结合的方案进行保护。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUfkKhAVZNEPMicZhEiaX7Ih08vKOfkshWpEJBIMzTRo1x40GWreZugwSg/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的开通和关断从本质上来说是对输入电容的充放电过程，充电电流为ig，内部驱动电阻、外部驱动电阻和线路电阻构成总的电阻参数Rg，线路寄生电感、驱动器引脚电感、 驱动器内部电感、SiC MOSFET 寄生电感构成总的电感参数Lg，Cgs 为电容参数，Rg，Lg，Cgs构成二阶 RLC 电路：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyULLpiaPNxQzTPu8m7lYfT7jAXWSUNXUia1iaFXsg7zicFXcNQq8J4flcRIw/640?wx_fmt=png&from=appmsg)

设门极电容恒定，Cgs 为660 pF，寄生参数Lg为25 nH，则Rgmin为12.3 Ω，选Rgext 为10 Ω， 外部电阻的大小影响着驱动的开关速度，虽然本文设计方案中开关频率为20 kHz，对外部电阻要求不苛刻，但是使门极回路不发生震荡的最小电阻值限制着高频化的应用。如果想要减小最小驱动电阻值，可以增大门极电容，但是会减慢开关速度，所以需要在门极电阻和门极电容间作出妥协；另一种方式就是减小寄生电感，不仅包括驱动回路线路寄生电感，还有SiC MOSFET的引脚寄生电感。通过解二阶 RLC 电路方程可以得到最大峰值电流Igpeak：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUqyBshonaIPk7Nk3yWNw86JAj98e9QCIoicHreITcsyAb6OokNKYb4Sw/640?wx_fmt=png&from=appmsg)

e 为自然对数，e=2.71828，Igpeak 即为驱动芯片需要满足的最大峰值电流，带入参数可以算得小于1A，Si8271 驱动芯片峰值电流为4 A，满足要求。数据手册中Qg为30.4 nC，可以估算出单管驱动所需功耗仅为9.12 mW，所以在后续损耗分析时忽略驱动损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyURPDItAlchSuSGYpCMaEW0k4FDUYQZInSQ5DNukFFko9edBNs6R7ibyA/640?wx_fmt=png&from=appmsg)

3.2.3 滤波电感设计

由于逆变输出被电网电压钳位，输出电压的幅值和频率为固定值，当调制比m 设计在0.8~0.9 范围内时能够最优化逆变器的效率。理想状态幅度调制比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUDCvxYvvNAEHgNlLE4nEfhTH0rY9c3CoLzAtp1pR9JDKLFfCh92q8IQ/640?wx_fmt=png&from=appmsg)

在一个载波周期内，母线电压与电感相连的时间为驱动占空比D(t)，电网与电感相连的时间为Ts，输出电流近似不变，所以直流母线电压和电网电压对电感电流产生的效果相同，即直流母线电压在脉宽时间D(t)内的积分与电网电压在一个脉动周期Ts 内的积分相等:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUSHtdlT6fRRsdHbNJJTnTeib6XSh0iaJedzicX3xu8PS6ZUNSpuYda0tRg/640?wx_fmt=png&from=appmsg)

驱动占空比D(t)作为脉宽瞬时值，满足正弦变化规律。联立可得输出滤波电感的电流脉动：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUKTEiaUbAiaibQSAhgFyz1kcQ1ebeOWnaib9C3pA0ezfoj0QkAB5E1rSzDw/640?wx_fmt=png&from=appmsg)

波电感电流脉动最大：  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUs4icNGVLlhiatEItxVH2ZxvqBu0w1zo2pL1Jveh5kcvo78zEHFibpNFqw/640?wx_fmt=png&from=appmsg)

设计时一般让滤波电感电流纹波不超过输出电流有效值的20%：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU9reUFfdV8lOogHOdkeszC2smJlVCyNvCjKSHe47AR0VzKQHYFwDSmg/640?wx_fmt=png&from=appmsg)

输出滤波电感至少为1.74 mH，选择两个输出滤波电感，大小相等，位置对称，每个滤波电感的感值至少为0.87 mH，留有一定裕量后选择电感参数为0.9 mH。由式3.16 看出，在输入输出参数一定时，提高开关频率，电感感值降低，当开关频率提高到100 kHz，输出滤波电感感值下降为0.18 mH，能够减小电感的体积与重量。选择美磁的77192-A7 铁硅铝磁环作磁芯， 两个磁环并绕，利用电感系数AL计算匝数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUrfzJKtvodjtdKicNXW6HPFv7hQajSjSAjPGVKoWzZNpPuqPicHnibfwvQ/640?wx_fmt=png&from=appmsg)

AL为每匝线圈产生的自感量，77192-A7 的电感系数为138 nH/N²，计算匝数时向上取整为58。磁芯的有效磁路长度le为0.116 m，根据美磁官网给出的电感系数与直流偏置曲线可以看出，匝数一定时，磁导率随着电流的上升而下降，在输出电流峰值时，磁导率下降到一半左右，电感的感量也减半，由式3.21 可知电流峰值处电流纹波并非最大，所以感值下降对最大纹波影响不大，根据实际情况适量增加线圈匝数到60 匝，在20 kHz 频率下电感感值约为1 mH。

由于集肤效应，导体内的高频交流电会集中在导体表面，导体的中心几乎没有电流流过， 所以线圈线径选择时需要小于两倍集肤深度，但是在实际工程应用中，并网逆变器滤波电感的高频纹波电流相对于基波电流幅值很小，可以直接选择粗线径线圈。以AWG11型号线圈为例， 线径2.3 mm，导线截面积Swire 为0.0417 cm²，设定导线电流容量Jwire 为350 A/cm²，需要并联股数Nwire 为1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUhjDHCMvPYuyKoRMtmGwOQ5Lf4xJGc4mKyphIdeiahQ8CTCLYickcCSSQ/640?wx_fmt=png&from=appmsg)

本方案磁芯窗口利用率为0.487，如果窗口利用率过大需要重新选择磁芯设计。此时每匝线圈长度为80 mm，本文采用双环并绕，还需加上两倍的高度，lave 约为110 mm，计算线圈的总长度和内阻：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU6CqZBKickHq6IrheMIiaAfCnAUp6aAGBslffGdJvGGl08IQ5tobzoUpg/640?wx_fmt=png&from=appmsg)

rwire 为AWG11 线圈的单位长度电阻4.13 mΩ，线圈的计算阻值为27 mΩ，实际测量约为40 mΩ，由此可计算单个电感满载下铜损约为7.348 W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUd60RYtUkmV5EXhSN1By4cpD41sHlkWAicUMnxMz3B1ejMmLXqRyFBQg/640?wx_fmt=png&from=appmsg)

计算电感的铁损需要计算每个开关周期内变化的磁通密度：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUtzzLYez0UGmojZQk2v2LjG6M1Z2YUgrCgUtNAAhs4gG2BQFtaO1CFA/640?wx_fmt=png&from=appmsg)

3.2.4 母线电容设计

母线电容不仅降低直流侧输出电压的纹波，还稳定逆变侧的直流输入电压，减小逆变输出的畸变。设Vo是输出电压有效值，Io是输出电流有效值：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUEjODY9Ul8pHVN7Sbze9QcmibB2j8icsrOZLdk0093jOGXlLUoicsqATiag/640?wx_fmt=png&from=appmsg)

功率平衡时，交流等效输出功率和前级直流功率相等，当母线电压处额定直流功率为3 kW， 则交流输出功率和直流功率差为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyURxTCq5iczoRFO3dadvkkSsASiaRXdyiaQMEtBpm8e34hOm3AsFl1W1SWw/640?wx_fmt=png&from=appmsg)

母线电容需要吸收波动的功率，对上式积分，则能量波动和最大波动分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU0UaBsncYVzLYlVEk40KwqVQC14ibBPZAE113Yztd1IS3oYTDVprmNKQ/640?wx_fmt=png&from=appmsg)

上述可得，母线电容上除了直流分量Vdc，还包括一个以二倍频进行脉动的纹波电压，设ηv是直流侧电压的纹波系数，纹波电压为 ηvVdc。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUx1bgHgFppN4fqD2OHIIdianic2KZ2oGNBtJZpZaKdZjNyPfcsVkSbcicg/640?wx_fmt=png&from=appmsg)

母线电容需要满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU9HyvdHadpxRg85Vo2Refb1QzP4GSbkHkZGEHYXEJOseib92QqfnfRdg/640?wx_fmt=png&from=appmsg)

直流侧电压的纹波系数ηv取0.03，此时电压波动最大为11.4 V，电网角频率ω 取值314， 计算可得母线电压至少为2205 uF，保留裕量后选择5 个470 uF/630 V 电解电容并联，母线电容最终为2350 uF。

3.2.5 采样电路设计

无论是对电路的输入输出参数进行阈值范围内的保护还是控制环节对被控参数的调节，都需要用到精确的采样数值，从而并网逆变器对采样环节的准确性、快速性、可靠性有较高的要求，本文设计的H6 桥并网逆变器需要采样输入母线电压、输出电网电压、输入电流、输出电流四个参数，为了提高系统的安全稳定性，均采用隔离方案保证功率模块与信号模块的电气隔离。采样对象通过模块或者芯片转化成电压信号送到微控制器，本文微控制芯片选用DSP28377， 信号端口电压不超过3.3 V，一方面需要通过运放对采样模块转化后的电压作数据处理，保证其范围在0~3.3 V 之间，使采样数值不会溢出，保证采样功能的正常实现；另一方面在采样环节和DSP 端口之间加入钳位环节，保护端口不会受到电压冲击损坏芯片。不同采样对象的采样环节基本类似，本小节只对输出电压Vo 采样电路作详细介绍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUZ74v7O1tI92T4u5e5W0VIsloHTtibK3puiaQaZJ6CqL2icZnHP4WcVeXg/640?wx_fmt=png&from=appmsg)

电压采样模块HNV025 输入端接入功率电阻34 kΩ，原边采样电流经过模块内部变比在副边放大25/10 倍，输出电压峰值为±311V，在输出电阻200 Ω 上电压为\-1.323 V~+1.323 V，为了使反向峰值电压送入DSP 端口的采样值大于0，利用运放实现1.5V 电压抬升调整到0~3.3 V 之 间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUfxjI0huiatF0SspqwqYKDvSjeohYuEf7iaaWJM4ltyL0jWx5ARagAic9g/640?wx_fmt=png&from=appmsg)

3.3 PCB布局与要点

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUSibR3LwH23ibNdV2UHyC4FawUia5AnVFumGLGJSpicvSPv679h6ebHYYQQ/640?wx_fmt=png&from=appmsg)

本文设计的功率板和控制板均为4 层板，功率板在PCB 布局时需要注意功率模块和控制模块的分离，尤其是驱动信号走线不能与功率回路交叠，否则驱动信号受到干扰，无法实现样机功能；DSP 到驱动芯片的控制信号传输回路中，让正向信号输入线和反向地线分布在不同层的 同一位置，实现物理上的“双绞”，减小走线带来的寄生参数；H6 桥并网逆变器需要6 路驱动， 驱动芯片到开关管之间的驱动回路尽量小，降低寄生参数减小驱动震荡；功率走线需要尽量宽 短，能够减小线路电阻降低损耗。上图所示逆变器PCB TOP 层布局，信号级走线与功率级走线完全分开，驱动部分与功率管之间的驱动回路足够短，经过后续实验验证可得该布局合理，驱 动、采样部分稳定不受干扰。

3.4 本章小结

本章首先介绍H6 桥并网逆变器的拓扑结构与调制方式，在全桥的基础上添加两个工频动作的辅管和两个功率二极管，在续流阶段实现电网与母线端的电气隔离；利用状态空间平均法对H6 逆变器建模得到SPWM 调制器输入到逆变桥输出的的传递函数；对H6 桥进行共模分析， 证明其共模电压小，产生的漏电流小，系统安全稳定；其次对基于工业级单L方案的20 kHz H6桥并网逆变器进行硬件设计，选择参数满足要求的功率器件、采用带低阻抗回路防止桥臂串扰的驱动方案、选择全隔离的采样方案、对滤波电感和母线电容的取值进行推导与分析；最后对PCB 布局要点进行分析，通过后续实验验证其可靠性。

第四章并网控制策略研究

并网逆变器将输入的直流电转化成交流电送入电网，输出电压被电网钳位，在单位功率因数下，需要通过调节电流环实现输出电流和电网电压同相位，电流环的相位由锁相环采集电网电压信息提供，电流环幅值由输出功率决定。本章先针对L 型滤波器的H6 桥并网逆变器设计其并网锁相环和电流环，为了进一步减小电流纹波，降低电流的总谐波畸变THD(Total Harmonic  Distortion)，采用LCL 型滤波方案，并分析不同控制环节对电流THD 的影响。

4.1 H6 桥逆变器并网控制策略

锁相环采样电网电压，跟踪得到电网电压的相位信息，将相位信息的正弦值与给定电流幅值相乘得到电流环的参考值，与反馈得到的实际电网电流相减得到误差，经过PI 调节器和母线电压增益消除环节，得到调制波，再经SPWM 得到开关管的驱动波形，实现闭环并网控制。基于第三章工业级H6 并网逆变器参数设计其锁相环和电流环，

4.1.1 单相锁相环

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUYwAKLbO2sKsiagOVud1GYhfYYrpKic7YIWLBJiciaMN9xicFLUHYEicKdsibg/640?wx_fmt=png&from=appmsg)

单位功率因数条件下，逆变器成功并网的首要条件是保持电网电压和输出电流同相位，这就需要提供电网的相位信息，锁相环就是一种能够跟踪相位、频率等信息的控制结构。并网时，认为电网频率为50 Hz，所以单相并网逆变器的研制中，锁相环主要提供相位信息并跟踪锁定。

最早的单相数字锁相环利用科斯塔斯斗环(Costas)实现。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUjiah3xLEebdE9PIjpWjq7e11iaY8vAeIxgoWJhfczCfs3pYgXse15UMQ/640?wx_fmt=png&from=appmsg)

Costas PLL 结构图的输入端输出信号分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUxh1XVPficiaN7QDswvUiclic2DZJavM46CGLINy5JpK5YLkdk3FvOiapN1w/640?wx_fmt=png&from=appmsg)

鉴相器乘以PLL 的输入和输出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUUXEoGS7MNjicMVfaCS5iaiaxpXXoLfaBBGdFj4VnohvpI0KTXK9Wia2FxQ/640?wx_fmt=png&from=appmsg)

对鉴相器的输出进行低通滤波滤除高频二次谐波分量：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUIib2uYsrkNNH5LbbAkWlN1URm0VibVsUxY7VN8DZkAQAEJcgOOa5aHPw/640?wx_fmt=png&from=appmsg)

当压控震荡器的频率与输入信号频率一致并成功锁相时：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUibKx2b8dF5M4jCnsEd7yVnpQyDRGVvOwu1Vv0Ac8peiamXkZAQTBH1wA/640?wx_fmt=png&from=appmsg)

该鉴相器输出信号正比于输入输出信号的相位差，进行PI 调节后加上基准角频率即可以得到输出角频率，对其积分得到输出相位。Costas 斗环中，鉴相器的输出包括高次谐波，所以需要额外的低通滤波器，影响了滤波器的设计，动态性能受到影响。为了改善Costas PLL 的性能， 消除鉴相器输出的二次谐波，可以将输入信号滞后90°一起作为鉴相器的输入。采用基于欧拉差分的二阶广义积分器(Second Order Generalized Integrator，SOGI)实现正交信号的构造，k 是 影响带宽系数的一个常数，k 值越小滤波作用越大，动态响应速度变慢，一般取值在0.8 左右。ωn是电网电压角频率，Vα是与电网电压信号同步的向量，Vβ 是滞后90°的向量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUyWGNYO6fdicZiaLPUQBEGahPhC4W6Hs2YJLMzmVMYMOmRGmJp7CEjQBA/640?wx_fmt=png&from=appmsg)

经过Park 变换把静止坐标系下的二维分量转换成旋转坐标系下的二维分量。Vg是电网电压在αβ 坐标系下的向量，θ1是电网电压和β 轴的夹角，θ2即为锁相环的输出，如图示dq 旋转坐标系所示，当电网电压相位为基准角频率且超前锁相环时，q 轴分量大于0，dq 坐标系转动速度即锁相环角频率提高；当锁相成功时，dq 坐标系旋转的角频率与电网电压的角频率相等，且 满足θ1 和θ2 近似相等，此时Vg在q 轴上分量为0，可以通过控制q 轴分量为0 以达到锁相的目的。q 轴分量经过PI 调节得到角频率偏差值，与基准角频率相加后得到当前控制下锁相环的角频率，当电网频率偏离基准50 Hz 时，可以利用锁相环稳定后的角频率更新SOGI 环节的ωn， 实现电网频率的自适应调节。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUYwcX6tMbY2MpHB1O6Mve26rTB7JX9PicndTS5RTiaZ6ic0s9oSlAB9OxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyULuOtMswjqDV7GT1BCib3icvUYkN0Q3JHCUdUicPLfVlCBLjOXT9sbpUSw/640?wx_fmt=png&from=appmsg)

在环路稳态分析时，把三角运算看成增益为电网电压峰值，延迟为采样周期的环节，本方案中采样频率fs为20 kHz，采样周期Ts 为50 us。根据基于SOGI 的锁相环控制框图可以得到补偿后的开环传递函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU3Qucruch2B2srYwDFXIn7pdc2MNySwhW8pmnHTqAcQwpAQtMQwicFjg/640?wx_fmt=png&from=appmsg)

传递函数中两项相乘的结果在伯德图的幅频曲线和相频曲线中表现为数值的加减，补偿前的锁相环已经进入稳态，伯德图穿越频率为50 Hz 左右，为了保持锁相环功能的稳定，加入PI环节将穿越频率控制在电网电压频率的 1/10 以内，选取kp 为0.03，ki为1，PI 调节前后开环伯德图中，虚线为PI 环节，补偿后穿越频率降低为3Hz 左右，相角裕度30°，幅值裕度大于0， 环路稳定满足设计要求。

4.1.2 逆变电流环

对于逆变电流环，基准电流的幅值由输出功率和输出电压给定，相位信息由锁相环输出给定，幅值和相位相乘得到电流基准。实际检测的电感电流值和基准值之间的误差信号经过PI调节后除以 Vdc，消除母线电压对环路增益的影响，再经SPWM 调制后驱动开关器件，改变桥臂电压开关周期内的平均值，实现对电感电流，即输出电流的调节。为了减小电网电压扰动对输出的影响，在控制信号经SPWM 调制前加入电网电压前馈，减小电流谐波提高输出电流质量。

根据第三章逆变器建模分析，从调制波到逆变器输出可以等效成母线电压与三角载波比值的增益环节，逆变环节等效成增益环节和延时环节的乘积，本文设计中控制延时即为采样周期Ts。DSP 程序中三角载波幅值为时基寄存器的值2500，PI 输出先乘以时基寄存器储存值再送入SPWM调制，实现对三角载波的归一化处理，所以控制环节三角载波Vc的幅值可以看成1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUKO4hVcicUsIHL73AKRjWhzEsNYKwWyAoLZcofJLX7YHO3CzREfrL3VA/640?wx_fmt=png&from=appmsg)

逆变器输出电压等于电感电压和电网电压的和，两个滤波电感感值和Linv为2 mH，两个滤波电感电阻约为80 mΩ，根据控制框图可以列出电感电流的传递函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUxct8CWrAV0PlklkDJ96wJby8ziaia0cXTWn3lbekmojWAFZJaWDjUCibQ/640?wx_fmt=png&from=appmsg)

环路中Hfb1 为输出电流反馈系数，程序里根据采样过程换算成1。电流环开环传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU8nRTnjkYCzb5LkWP2wdumq1xibYo19CPz7WsHwSlSKlyLR7BiaGqSPGw/640?wx_fmt=png&from=appmsg)

根据电流环调节前开环伯德图，环路已经进入稳态，此时穿越频率在100 Hz 附近，根据工程经验电流环穿越频率设计为开关频率的1/10 以内，通过PI 补偿将穿越频率调整到2 kHz 以内。选取kp 为20，ki为13000，PI 调节后开环伯德图的截止频率fc 为1500 Hz，相角裕度62°， 幅值裕度大于0，环路稳定。Hfb2 是电网电压前馈环节，可以补偿电网电压扰动对输出的影响， 电感电压对电感电流的传递函数为HLI，当输入量为0 时，输出分量对扰动分量的传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUhzsibkG6nIdFOWH45mnWoocIMNOKpWMAh8zGDLZRRdNP0cccLk1Tdrg/640?wx_fmt=png&from=appmsg)

4.2 并网电流谐波分析

并网逆变器将直流电转化为一定要求下的交流电输送到电网，并网电流除了包含50 Hz 的基波分量，还包括以3、5、7 次谐波为主的多次谐波。并网电流谐波会污染电网，增加电路设备的损耗，引起并网电压的畸变，影响整个电力系统的稳定。IEEE Std.929-2000 和IEEE  Std.1547-2003 对并网电流谐波含量和电流总共谐波畸变提出明确要求：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUwIvf34tPvibo0CXryL10VholbgPG7iaMIbccYHkib4emz3myOLCGCOWPQ/640?wx_fmt=png&from=appmsg)

本小节从直流母线电压和电网电压两个外部因素和死区内部因素分析谐波的产生机理，为并网电流谐波抑制提供参考。

4.2.1 输入输出电压对谐波的影响

参考第三章H6 桥拓扑结构，并网逆变器的输出通过L 型滤波器接入电网，电路满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUicNxcPC6A5Lzg9ib0oh9VsIO6hj2odcHheib7dKCwMXAes3ic4xsic3sNqg/640?wx_fmt=png&from=appmsg)

上式可以看出并网电流直接受逆变电压和电网电压影响，如果两个电压含有多次谐波，也会让并网电流包含谐波。实际应用中，电力运输过程中变压器饱和、非线性负载产生的谐波电流引起等效输出阻抗上的压降等多种因素让电网电压包含丰富的多次谐波。在逆变电流环控制中，电网电压前馈环节可以补偿电网电压扰动对输出的影响；在单相锁相环中，SOGI 采样电网电压生成一对正交分量，Vα 分量与电网电压同幅同相，Vβ 分量滞后90°，由于SOGI 具有低 通滤波特性，为了进一步减小电网电压带来的扰动，可以将锁相环中SOGI 生成的Vα分量替换 实际电压送至电网电压前馈处。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUy78P3JZs8FrSdxpdg5KoWpCMbRndA4RAKNIZ8dENImIAomfk6PfIiaQ/640?wx_fmt=png&from=appmsg)

D(t)是载波周期内等效驱动占空比，可以近似看成基频正弦波，由第二章母线电容设计分析可得，母线电容上除了直流分量Vdc，还包括一个以二倍频进行脉动的纹波电压，两项相乘后逆变电压包含一次分量和三次分量，一次分量影响电流控制环节对基波电流的跟踪精度，三次分量使并网电流带来三次谐波，如果三次谐波没有被控制环节消除，通过电流反馈环节进入下一计算周期的电流环生成包含三次分量的调制波，与母线电容相乘后逆变电压包含五次分量， 循环计算后会产生一系列奇次谐波。母线电容设计过程中，尽量减小直流电压侧纹波系数，减弱逆变电压对电流畸变的影响。

4.2.2 死区对谐波的影响

典型逆变器的一对桥臂中，上下管的驱动电平之间必须设置足够裕量的死区，防止桥臂直通烧毁器件，死区期间电流从二极管续流。由死区对调制波影响示意图可以看出，在一个载波周期Ts 内，调制波Vm保持不变，当调制波大于载波时，D(t)为Q1理想驱动波形，死区的存在让实际Q1 驱动及其互补的Q2 驱动波形上升沿滞后td。当输出正向电流时，在Q2关断到Q1开 通之间的死区内，电流从Q2的寄生二极管续流，此时桥臂中点电位被拉低到零，相对理想Vao存在 td 范围的电压缺失；当输出负相电流时，在Q1 关断到Q2 开通之间的死区内，电流从Q1的寄生二极管续流，此时桥臂中点电位被拉高到母线电压，相对理想Vao 存在td 范围的电压增益。同理可以得到另一对桥臂中点电压Vbo 存在td 范围的电压缺失和增益，且电压脉冲方向与Vao 反向，忽略驱动电平的上升延时和下降延时，则实际逆变输出电压与理想的差值△Vab 在一个开关周期内为两倍电压增益或缺失：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUF1UZ293KyFPibE98x6W6qzFNubuFTG3Z02sOodf6ZFpQ75vtYvrzPcw/640?wx_fmt=png&from=appmsg)

对差值△Vab进行傅里叶分解得到一系列奇次谐波，即死区会让逆变电压产生畸变，包含奇次谐波，进而影响输出电流。如果从死区对电流谐波产生机理角度减小影响，需要减小母线电压和死区或者增大开关频率，母线电压由实际工况决定，开关频率影响着驱动部分、滤波元件的设计，不能随意变换，在保证安全的情况下减小死区，尽可能减弱死区对电流谐波的影响。

4.3 三种电流控制对比

在理想状态下，功率因数为1 时并网电流与电压同频率同相位，并网系统只向电网输送有功功率，然而实际应用中，电网本身富含谐波且存在一定的频率波动，由前文分析，母线电压、 电网电压、桥臂死区都会使并网电流产生奇次谐波，并网电流控制环节能否有效无误差的跟踪基准电流信号至关重要。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU7oYZaaDYGMUeJguFTHq7v5XkzEQQ9MlBwCs81JiaC9umnwsVibe9WNmA/640?wx_fmt=png&from=appmsg)

一般高次谐波由电路中滤波器环节滤除，低次谐波通过电流控制器抑制。输出滤波器的目标是通过低频基波信号，抑制高频谐波，并网逆变器常用滤波器方案有单L 型和LCL 型。单L型滤波器电感对低频信号阻抗小，对高频谐波信号阻抗大，设计简单，系统在 PI 调节过程中较容易稳定，广泛应用于工业级产品；LCL 型滤波器利用电容对高频信号的低阻抗特性，让低频基波信号流入电网，高频谐波信号从电容支路流出，有效减小电流的谐波含量，提升电流质量。

与单L 滤波器相比，LCL 在相同谐波抑制能力下，所需电感感值更小，能够有效减小无源器件的体积和质量，提高系统功率密度；同理，LCL 在相同电感感值下，对输出电流的谐波抑制效果更好。LCL 型滤波器为三阶模型，存在谐振极点，在幅频曲线上有明显的谐振尖峰，需要将谐振处的增益补偿到0 dB 以内，常用方法有无源阻尼和有源阻尼。无源阻尼在滤波器中加入阻尼环节，如在滤波电容两端并联电阻，虽然能消除谐振尖峰，但是会带来额外损耗降低系 统的效率；有源阻尼利用虚拟电阻代替实际电阻，在不增加损耗的同时达到无源阻尼的改善效果。本小节采用电容电流反馈的有源阻尼法抑制谐振尖峰，讨论不同电流控制方案对谐波抑制的原理，针对LCL 实验平台设计控制参数并验证其稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUQSxhiaXeYG1MT4iacgUbe5lpdESgOawLhBBsNSj0fl0Ta4s4SsZJbM5w/640?wx_fmt=png&from=appmsg)

基于LCL 双电流环控制框图，改变GI，探究不同电流控制方案对电流谐波的抑制效果，滤波电感L1 感值650 uH，L2 感值360 uH，滤波电容Cf容值8.2 uF。电容电流反馈系数Hi1 为8， 输出电流反馈系数Hi2 为1，输出电流Io即滤波电感电流IL2。为了便于研究，将双电流环控制框图进行简化：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUicUibCEA9G0142yLdZ6BDom98qNJu1cHXeUmNwOQp574Aop3QswZasxg/640?wx_fmt=png&from=appmsg)

4.3.1 PI 控制

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUB3vsJrXrzyINkZD13Fic4FoAENkYOibR10yHzNWVk35JMxWx3ibfcVZIg/640?wx_fmt=png&from=appmsg)

比例积分控制作为一种线性控制器，将基准和反馈的误差信号进行比例和积分线性组合，调节被控对象。比例环节越大，调控速度越快，但是会影响系统的稳定；积分环节能够消除稳态误差，但是会使动态响应变慢。PI 控制较为成熟，参数设定简单，广泛应用于工业界产品。 根据前一小节LCL 滤波器参数计算谐振频率fLC 为3.65 kHz：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUlm93LkY8RD6GbskyFX6YqBZeuhxayKZB2ZBianJxdwjrzJKaKVoWozQ/640?wx_fmt=png&from=appmsg)

列出 PI 控制环节开环传递函数进行稳定性分析：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUGvibhWicuS8KZz5zxibHo8mRJbJrtYibRN8AVrQMXkrWGpaVZicefd8N4Ag/640?wx_fmt=png&from=appmsg)

调节前曲线没有加入有源阻尼，幅频曲线在谐振频率处存在尖峰，会造成系统震荡，加入电容电流反馈后，谐振处增益降低到0 dB 以下。PI 环节提高了低频处增益，能够更好的实现对基波的跟踪调节，除了幅频裕度和相角裕度满足要求外，控制穿越频率在1/10开关频率以内， 保证基波频率50 Hz 出增益至少为40 dB。选取kp为7.5，ki为19500，调节后开环伯德图满足上述要求，通过PI 控制系统能够稳定有效得跟踪参考信号，但是无法实现无静差调节。

4.3.2 PR 控制

根据内模原理，将外部信号模型植入内部控制器能够有效抵消外部扰动，提高跟踪精度。 对于并网电流环控制而言，外部的参考信号是正弦曲线，而PI 控制器只包含比例环节和积分环节，所以无法实现对并网电流的无静差追踪。比例谐振控制以不同频率的正弦波为内模，可以实现对参考电流的无静差控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUjCMuSaD54j7ib52xibFe7vp25BRjN99mDbbnyTPfpJxhib0jkGCB9KSaQ/640?wx_fmt=png&from=appmsg)

电流环将基准信号与反馈信号的差值送入控制器，如果想要得到好的调节效果，一方面使基准电流正弦波干净平滑，一方面基波和谐波频率处的增益足够大，这样基波电流才能有效跟踪基准，谐波电流得到有效抑制。理想谐振环节在ω0 处增益为无穷大，但是谐振带宽很小，如果电网频率发生小波动，基波频率在ω0附近震荡，此时震荡的基波频率对应增益大幅降低，电流环不能准确跟踪基准。为了提高谐振带宽，增强系统对电网波动的抗干扰性，并网逆变器常 采用准比例谐振控制(Quasi Proportional Resonant，QPR)：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUjicQ3lm1Itm2hvHvgVahicEuVibkyjlfLBZ9Vj2qxw2bVUmicu9nR9cj4A/640?wx_fmt=png&from=appmsg)

准比例谐振项可以看成带通滤波器，在谐振频率附近增益较高，其他频率处增益近似为0， 准比例谐振牺牲无穷大增益，提高控制器带宽，中心频率fcen和带宽频率fBW 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU1Nkxxic8KEYb6hhmXMZYRb9ksla3yliaHmKBX3MWfUabbEUHE9lZVY8Q/640?wx_fmt=png&from=appmsg)

中心频率fcen为电网基波频率，默认为50 Hz，增大ωc 能够增加控制器带宽，但是会带来相位问题造成系统不稳定，并网电流频率波动控制在±0.5 Hz 范围内，即fBW 设计成1 Hz，此时ωc 为π。基波频率处的准比例谐振能够提高基波频率处增益，在一定频率波动范围内有效跟踪电流基准，为了消除奇次电流谐波，可以采用准比例多谐振控制 (Quasi Proportional  Multi-Resonant，QPMR)同时并联多个准谐振项，由于准比例谐振项存在相位滞后问题，并联太多容易造成系统发散，一般针对并网电流包含较多的3、5、7 次谐波进行抑制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUczkOuV3xxFrPWiawlMGTBGkCK74AWYIKPwnYJZS5fHicNcxB3nyLPwlw/640?wx_fmt=png&from=appmsg)

配置kp 为7.5，ωc 为π，3、5、7 次准比例谐振项系数依次为300、100、100。系统幅值裕度和相角裕度均满足稳定条件，kp提高了整个系统的增益，将穿越频率提高到1kHz 附近，谐振尖峰被有源阻尼降低到0 dB 以下，并联项的中心频率处增益均大于40 dB。并联准比例谐振项时，中心频率不能超过穿越频率，为了满足相位要求需要减小谐振项系数，所以高次谐波对应频率处增益降低，抑制能力减弱。通过QPMR 控制，系统能够有效跟踪基波电流，实现无静差调节，同时抑制3、5、7 次谐波，但是无法对高次谐波进行抑制。

4.3.3 重复控制

重复控制控制中包含延时环节，每个计算周期控制器环节的输入不仅包含当前时刻的误差值，还包含一个基波周期时刻前的误差信号，通过对不同周期内同一位置的误差信号不断叠加，有效抑制周期性扰动。PR 控制只能针对单一频率处谐波进行抑制，准比例谐振控制的并联项受系统稳定性影响，中心频率不能超过穿越频率，并联项系数有限，不能对高次谐波进行抑制，而重复控制相当于无数个并联谐振项相加，理论上有无数个谐振点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUUvAz73bv7a4Ndqtf5Mo8C1pDRxuWT27fP64co8HuRupbTpkHdwBNxw/640?wx_fmt=png&from=appmsg)

重复控制基本环节为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUVICGHibic3ptCt296iblke1ic1TesLQRyAOeZPK3kFGjttBmtWMs2EK9JQ/640?wx_fmt=png&from=appmsg)

T0 是基波分量的周期时间，利用指数性质分解重复控制可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUkS5PLVwLk3MDob0B0rmI3M9uAcibicsII3uEp1k97hun72tstlvGnhibw/640?wx_fmt=png&from=appmsg)

基于内模原理，理想重复控制器包含基波及其整数倍频率处谐波，能够实现对正弦基准信号的无静差跟踪，鲁棒性强且稳态精度高；从伯德图角度，在基波频率及其整数倍频率处均具有较高增益，能够同时抑制所有次谐波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUpnz7859ybcVklEkP3IicoZlCAZJLjkNIhlzqWc1uWJ03FvP6v4bPWhA/640?wx_fmt=png&from=appmsg)

延时环节在模拟器件中不易实现，一般由数字控制器搭建，通常在离散域分析重复控制。 由于延时环节的存在，重复控制环节在第一个周期内不工作，系统存在较大控制滞后且动态响应较慢，一般与PI 或者PR 并联使用，保留谐波抑制能力的同时提高系统的响应速度，本文采用与QPR 并联方案。理想的重复控制环节不能使系统稳定，为了增强控制环节的鲁棒性和稳定性，在延时环节前加入内模系数Q(z)减弱内模的积分作用，加入补偿环节S(z)补偿被控对象带来的相位滞后：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUrmQBeygWIiacdoCSFeW5c9F619HGq9SJ3ibsJINDr8mOibxnqqxzb2Fvg/640?wx_fmt=png&from=appmsg)

Zeq1Zeq2 为LCL 并网逆变器的Z 域等效模型，ZQPR 为QPR 环节的Z 域等效模型，N 为一个基波周期内的计算频率，则重复控制的Z 域闭环传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUsLS9dYdoFyoYZibuta4BYiaP3piciaNxoUbSIT1libsQHicI20GHq0iaic28pQ/640?wx_fmt=png&from=appmsg)

根据自动控制理论，离散域特征多项式的根都在单位圆内则系统稳定，但是含有N 阶项的传递函数计算量太大，采用控制理论中小增益原理分析系统稳定的充分条件。由小增益原理可得，当系统特征方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUKqSsZa8QxAwnmXEEYmaPTFd8E5U6m6uYRuKouBzG5QyrWjiaVmYXxEw/640?wx_fmt=png&from=appmsg)

系统稳定的充分条件为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUAAptwHMWKCIpsWsNfLgsaBl5Rvnyz4JmEQK1NGmJWY7ndNTY0jWqDA/640?wx_fmt=png&from=appmsg)

根据小增益原理将RC 控制的Z 域闭环传递函数转化为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU9lJhKURUiac59DKIiahH8eGYYvDJ1u203pGSGic6NyQIJJbnaTScyPSrg/640?wx_fmt=png&from=appmsg)

系统稳定需要满足的充分条件为：

(1)、1 ZQPRZeq1Zeq2的根在单位圆内；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUZVKGsVkSVDf9lssgAsDEDdNFxQzJRy5RbV3ROXpDq7RdoXUS3njOnA/640?wx_fmt=png&from=appmsg)

由条件(1)可以选取并联支路QPR 环节中kp 值，为了探究条件(2)是否满足，可以绘制ZT(z)的奈奎斯特曲线，当曲线全部落入单位圆内，则条件(2)成立。选取kp为7.5，a1 为0.25，a2 为0.5，N 为400，c 为3，绘制奈奎斯特曲线均分布在单位圆1 以内，满足系统稳定条件。条件(2)为系统稳定的充分条件，若条件(2)满足系统一定稳定若条件，若条件(2)不满足系统也可能稳定。

4.4 本章小结

本章分析两种不同的锁相环方案，设计基于SOGI 的锁相环参数，通过伯德图验证环路稳定性；设计基于L 型滤波器的H6 并网逆变器电流环参数并验证其稳定性；分析电网电压、母线电压和桥臂死区对电流谐波的影响；对比分析PI、PR、RC 三个控制环节，讨论其对基波电流的跟踪效果和对谐波电流的抑制能力，PI 控制追踪电流存在静差，谐波抑制能力最弱；PR能实现无静差调节，能有效抑制特定次数谐波；RC 能实现无静差控制，能有效抑制周期性谐波，谐波抑制能力最强；针对三种方案设计控制参数并通过伯德图或奈奎斯特曲线验证其稳定性。

第五章并网系统测试与分析

本章基于前文硬件设计和控制策略搭建3kW H6 桥并网逆变器进行测试与分析，对H6 桥 逆变模型进行损耗分析；通过开环负载实验验证驱动、辅电和逆变等基本功能；通过闭环并网 实验验证锁相环和电流环的有效性和稳定性；在LCL 逆变平台验证基于PI、PR、RC 的三种电 流控制对电流谐波抑制效果。

5.1 H6 桥逆变模型损耗分析

根据功率开关管数据手册中的参数进行H6 桥逆变模型的理论损耗分析，本文实验中，辅助管工频动作，频率与输出电压频率fg一致为50 Hz，高频开关管动作频率fs为20 kHz，则在一个工频开关周期内，等效开关次数为400，设k 为每个工频周期内的开关次数的序列。为了简化理论分析，认为在一个开关周期内电流值不变，每个工频周期内的电流值为: 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUYHFg2BmyBZKsibqEw65KhgRNuH5hkXqHsAKuuyRwlRtvibKO0u4uVJ4w/640?wx_fmt=png&from=appmsg)

损耗的主要组成为二极管损耗、MOSFET 损耗、IGBT 损耗和输出滤波电感损耗。逆变器每个开关周期的调制比：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU86KoaNXwhZOBoNePDNtAzUhgeusVdrVrglauuIbpYbHCibaeNbOumJA/640?wx_fmt=png&from=appmsg)

5.1.1 二极管损耗

二极管损耗包括反向恢复损耗Prr\_D 和正向导通损耗Pcon\_D。反向恢复损耗Prr\_D 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUBxICh0HduoE2TWasxpJu9CUbxFmnZ1QRial7Hg40iav63VvgeBfbQkEA/640?wx_fmt=png&from=appmsg)

Qrr 为APT60DQ60BG 数据手册中的反向恢复电荷50nC。

二极管的导通压降根据数据手册中V-I 曲线拟合得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUMJxergaof3cCVcXnNUibPoQCYIjOfP1mGnBM7IMK8PF7O9V9DbK9olw/640?wx_fmt=png&from=appmsg)

在与驱动占空比互补的时间段里，滤波电感、电网、辅管和功率二极管构成续流回路，每个开关周期内都有一个功率二极管正向导通，损耗分析中驱动占空比可以用开关周期调制比等效，正向导通损耗Pcon\_D 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUujc6BCNjlkpU4r2RibhVB26WLNJWVLMFDnlEVuPicWEtqmeS2TpXFqGg/640?wx_fmt=png&from=appmsg)

5.1.2 MOSFET 和 IGBT 损耗

MOSFET 损耗包括开通损耗Pon\_M、关断损耗Poff\_M 和导通损耗Pcon\_M。

通过对开通过程中的电压、电流波形进行积分得到开通损耗Pon\_M 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUGibNAEENxQ28wllKraqpJajN7iaARDl3GA97nIem9sB09EqdGQ2ha5JA/640?wx_fmt=png&from=appmsg)

开通时间ton\_M 近似密勒平台期间对门极电荷充电时间：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUKCcg5icm6mmUV6PJayEicn6cicofjbdiaIrdJOOrhLgcCwFntxP6nicfkQw/640?wx_fmt=png&from=appmsg)

同理，关断损耗和关断时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUyaKN0FqE1Jy9nLplnylicCicFoicy5Dh58HMJ7FYgneUR4mia4MBAySZ0A/640?wx_fmt=png&from=appmsg)

SiC MOSFET 门极电荷小，开关速度快，密勒平台过程不明显，可以通过数据手册的开关能量耗散值进行估算。损耗分析时认为导通电阻在整个工作周期内保持不变，SiC 器件C3M0065090D为65 mΩ，Si 器件FCH47N60F 为62 mΩ。MOSFET 导通损耗Pcon\_M 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUzyQicU6t0q2DNKV7Hzxn8sR2jJRghOa3tV9SFLGbDpHgVnFJlfsFIDw/640?wx_fmt=png&from=appmsg)

由于IGBT 工频动作，开关损耗较小，损耗分析时只考虑导通损耗，导通压降Vce根据数据 手册中V-I 曲线拟合得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUnYDpbGryd1jSqsYqKyLwuCZbWtxXqhxrqsO6K5sgOGg62mBMyF7HNQ/640?wx_fmt=png&from=appmsg)

IGBT 在整个开关周期持续开通，导通损耗Pcon\_I 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUD62Gbn8NqGBP4ibHarIeBEUkO41F6B9iafXy9Tt1vUp41iag0vAF08Zmg/640?wx_fmt=png&from=appmsg)

5.1.3 输出滤波电感损耗

输出滤波电感损耗包括铁损PFe 和铜损PCu。由第三章滤波电感设计分析可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUHMsUGYbQ7K7bBbdOXDaswnSVz6uG32WzUI54iaA8icfSfmegiagDDcm2g/640?wx_fmt=png&from=appmsg)

5.1.4 理论损耗分布

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUrrJqFRaN3whVl1HiblEMhMx36VvBicxLeY8h8lb4n3Evon7aVsu3ibD3A/640?wx_fmt=png&from=appmsg)

根据3.1.3 滤波电感设计可知，相同输出电流纹波下，100 kHz 开关频率的逆变器滤波电感只需要20 kHz 时的1/5，实验选用的电感感值220 uH，铁损0.63 W，线圈阻值18 mΩ。根据前文H6 桥逆变模型损耗分析，在SiC MOSFET H6 桥满载条件下，分别计算高频管工作在20 kHz和100 kHz 的理论损耗分布。由图5\. 1 可知，20 kHz 条件下，H6 并网逆变器的主要损耗为功率管导通损耗、辅管导通损耗和滤波电感损耗；100 kHz 时，损耗主要为功率管导通损耗、辅管导通损耗和功率管开通损耗。频率变化时，功率管、辅管和二极管的反向恢复损耗基本一致； 功率器件的开关损耗随着频率的提高而增大；滤波电感感值随着频率的增大而减小，其重量、 体积、内阻都相应减少，电感的铜损和铁损降低。

5.2 H6 桥并网逆变器实验测试

5.2.1 电阻负载实验

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUcEwXFvCXyEZgKianCq71QJxz5NLGb9WUJZibtkaBGa0wGWPVSmUK1dWw/640?wx_fmt=png&from=appmsg)

搭建3 kW SiC 单相并网逆变器样机，对其进行电阻负载实验测试。将逆变器输出接入电阻负载，根据程序设定电流参考值选取输入380 VDC，输出220 VAC 对应阻值，程序烧录后检查驱动波形是否正常，驱动无误后增大逆变器输入直到380 VDC，逆变器进入闭环稳定状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUd9wxMEswWG4kuCG3UsZqZkCeuAnQB1IBhfHU0AcNsiaqWekjjJHs0uQ/640?wx_fmt=png&from=appmsg)

当Q1 与Q6驱动波形一致，且当Q1 有驱动波形的半个周期，辅管Q3恒为高，Q1没有驱动的半个周期辅管Q3 恒为低。根据电压应力波形可知，Q4 与Q6 管的电压应力与母线电压一致， 而Q2 管的电压应力为母线电压一半，但是在每个开关周期内，无论是功率管还是辅助管，变化值都是0.5Vdc。本章给出2.5 kW 电阻负载波形，输出电流有效值为11.6 A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUlXGwAiaSjwOicvxKicSyFhLtO8iaJdzZEpibN6U2hX95plLibXf1SaK0eThA/640?wx_fmt=png&from=appmsg)

样机设计中高频动作管开关频率为20 kHz，更换电感将频率提高到100 kHz，分别测试其效率曲线。由于20 kHz 条件下导通损耗和滤波电感损耗占据主导地位，占总损耗的75%，当开 关频率提升到100 kHz 时，导通损耗和开通损耗占据主导地位，占总损耗的75%，开关损耗由20 kHz时的9.3%增长到100 kHz 时的37.3%，使整体效率有着明显的下移，随着频率的提升，滤波电感感值随着频率的增大而减小，电感的铜损和铁损由20 kHz 时的34.4%减小到100 kHz时的 10%，单个电感重量由631 g 降低到360 g，提高频率能够减小无源器件的质量和体积，成本降低，功率密度提升。

将SiC MOSFET 更换成Si MOSFET，测试开关频率100 kHz 下两种器件的效率，SiC  MOSFET 门极电荷小于MOSFET，开关损耗更小，虽然选取的SiC 器件导通电阻稍大，但是在高频开关动作下仍然具有明显的效率优势，全功率范围内，SiC H6桥的效率比Si H6桥高0.4%。

5.2.2 并网流程设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUJicWELUt8FTmeo6XZDia1vafnSj7aarcUicunaZuj8FyytUJPlRoAAytw/640?wx_fmt=png&from=appmsg)

将逆变器输出端经过隔离变压直接接入电网，在隔离变压器与电网之前接入交流接合器手动切入切出并网状态。并网实验时，首先闭合交流接触器连接电网，起动程序后DSP 系统初始化配置并打开中断。本实验中断由EPWM 触发，中断频率与高频开关管一致为20 kHz，中断进入后进行采样定标与更新，将寄存器值换算成采样实际值，输出电压值进入锁相环计算更新相位信息，与输出电流值一起送入电流环，经过PI 控制生成调制波更新驱动，完成一次中断任 务。

使能中断后，主函数进入循环判断锁相环是否跟踪电网电压相位、输入电压是否达到一定值，并网条件满足后检测网测电压，在零点附近闭合继电器，过零点切入能够减小并网瞬间电网电压对逆变器的冲击，提高系统的安全稳定。实验需要选择固态继电器减小控制延时，否则过零点切入功能不能有效实现。为了减小电流突变带来的冲击，设置电流软启动程序，电流环参考值Io\_ref每隔1 ms 增加0.01 A，满功率下2 s 后系统进入稳态，时间间隔和电流变化值改变电流变化速率，根据实际情况自由配置。稳定运行时，主函数进行循环对输入输出参数进行检测，超过保护阈值后跳出循环，关闭驱动和继电器。为了保护人身安全，断开交流接触器后再对样机进行故障排查。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUeA1rRArpgSX8uZTNicOK4gl4tqO8SaNkWP1zg7dQF2Etib5Kw4Cg2wag/640?wx_fmt=png&from=appmsg)

5.2.3 并网实验测试

参考前一小节并网流程设计对搭建样机进行并网实验测试，在实验前对锁相环进行验证。 在输出端接入交流源，断开继电器且不加入输入电压，根据并网流程逻辑，驱动不会闭合，打开CCS 中Graph 功能，绘制电压采样波形与锁相环计算后正弦波形，比较其相位差。DualTimeA为220 V 交流电，DualTimeB 为锁相环计算后送入电流环相位参考，两条曲线相位基本一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUC0icYwVJn9ibxVdzIaDyyTAm2ibb7CBdicINv6U7QQGFqUiao4e2TXiaBxFA/640?wx_fmt=png&from=appmsg)

锁相环功能可以在并网波形进一步得到验证。本文给出1.5 kW、2 kW、2.5 kW、3 kW 并网实验波形及并网电流THD，谐波主要分量为开关频率下的纹波、电网电压扰动等，随着功率等级的提升，输出电流变大，谐波变化不大，并网电流THD 减小，满载3 kW 时THD 为2.6%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUtAuVJp2SSh8fxuJ3z1ib3CQSB0iaVgnaSyqWG5Hl2N8YZzvricTTn3yicw/640?wx_fmt=png&from=appmsg)

5.3 不同控制环节谐波抑制效果

由4.3 小节并网电流控制对比分析可得，PI 控制追踪电流存在静差，谐波抑制能力最弱；QPMR控制能实现无静差调节，有效抑制特定次数谐波，但是抑制谐波次数有限；重复控制能实现无静差调节，能有效抑制周期性谐波，谐波抑制能力最强。在LCL 并网逆变平台相同测试条件下验证不同电流控制器对谐波的抑制效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUG4NJLnwCKRflYhr0jDvl0bTSfEorSicsMen7TwFNVktg6cvicr0zwWRg/640?wx_fmt=png&from=appmsg)

将逆变器输出端经过220:380 隔离变压器接入电网，测试时电网电压有效值为242 VAC， 此时逆变输出电压被钳位在140 VAC，参考闭环并网实验测试步骤，将交流接触器闭合接入电网，提前设置母线电压240 VDC，锁相环计算后闭合继电器，电流环软启至峰值10 A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyUywmoZ1Gu8EM5xw9OsS7N5M8c9BeDC33D3QvZVIAjXdOicHrIlHDxn7w/640?wx_fmt=png&from=appmsg)

在相同测试条件下，PI、PR、RC 三种控制环节得到的并网电流波形如上图所示，左半部分为并网电压和并网电流，相位基本一致，验证锁相环的有效性；右半部分为并网电流及其快 速傅里叶分解(Fast Fourier Transform，FFT)，FFT 曲线的尖峰对应不同频率下谐波含量，尖峰 越高谐波含量越大。 PI 控制下的并网电流波形有较多毛刺，谐波含量丰富，FFT 分解下的低频奇次谐波增益大多超过\-20 dB，并网电流THD 为8.5%，谐波抑制能力最弱；PR 控制下的并网电流波形较PI控制波形有较大改善，波形除过零点与尖峰附近有毛刺，其余部分均较为平滑，FFT 曲线增益均小于\-20 dB，PR 控制并联项最大中心频率对应7 次谐波，所以在FFT 曲线后半段高次谐波处 增益仍比较大，并网电流THD 为3.5%，谐波抑制能力较好；RC 控制并联PR 加快系统响应速度，RC 控制下的并网电流较PR 控制波形进一步优化，过零点处毛刺减小，峰值附近震荡不明显，FFT 曲线增益明显小于PR 控制，高次谐波处没有突出的尖峰，并网电流THD 为1.8%， 谐波抑制能力最好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskAYHrY47bQTJEwdV5MahyU047sGaPiarBZ782m2iaD1eQ4MN5o9W8UwYyrj0y83SpZppt7BpXbZzdw/640?wx_fmt=png&from=appmsg)

谐波含量分布图展示了2 次谐波到20 次谐波占基波分量的百分比，谐波含量百分比越高， 波形质量越差，并网电流THD 越大。可以看出偶次谐波含量较低，谐波抑制时主要考虑奇次谐波分量。PI 控制在谐波频率处增益较低，并网电流谐波含量远高于QPMR 控制和重复控制， 谐波抑制能力最弱；QPMR 控制能够有效减小并联支路项中心频率处谐波，整体谐波含量较低， 由于本文QPMR 并联3、5、7 次谐波，7 次谐波以后的高阶谐波含量相对较高；重复控制相对QPMR 控制谐波含量进一步优化，且高次谐波含量也得到有效抑制，谐波抑制能力最强。

5.4 本章小结

本章建立H6 并网逆变器损耗模型，分析损耗理论分布，SiC 器件开关损耗小，在高频工作条件下相对于Si 器件更具优势；通过电阻负载实验对SiC 20 kHz、SiC 100 kHz、Si 100 kHz 进行效率测试，验证理论分析的正确性；设计安全可靠的并网流程时序，根据时序图编写程序进行L 型逆变器并网实验测试，验证硬件设计与环路设计的正确性；在LCL 型逆变器平台验证不同电流控制环节对谐波抑制的效果，PI 控制在谐波频率处增益较低，谐波抑制能力最弱；QPMR控制能够有效减小并联支路项中心频率处谐波，但是并联项受环路稳定限制；重复控制相对QPMR 控制谐波含量进一步优化，且高次谐波含量也得到有效抑制，谐波抑制能力最强。

第六章结束语

6.1 本文的主要工作

并网逆变器是分布式发电系统的核心，功能是将发电机组输出的直流电转化成符合电网要求的交流电，其性能直接影响着系统的安全稳定性和使用寿命。IGBT 和MOSFET 是并网逆变器应用最多的器件，而新能源器件的发展目标是：高效率、高可靠性、高功率密度，为了满足高功率密度的目标，市场对开关管的开关频率有更高的需求，新型宽禁带半导体器件如SiC  MOSFET 的选用也得到了越来越多的关注。基于以上背景，本文对SiC MOSFET 驱动、SiC  MOSFET 并网逆变器、并网控制策略进行设计与分析。

本文对比分析了SiC 器件和Si 器件的参数特性，通过调研市场上驱动器产品总结基于SiC  MOSFET 的驱动器设计要求；对比调制解调和脉冲信号传输隔离驱动方案，通过理论和实验验证脉冲信号传输方案延时更小、可靠性更高，更加适合作为SiC MOSFET 的隔离驱动；提出一 种利用RC 延时调节消隐时间的短路保护方案，保护电路结构简单，动态响应快，检测到故障信号后300 ns 以内将电流完全降为零；搭建双脉冲测试平台验证脉冲信号传输方案和提出的短路保护方案，同时测试驱动器样机的上升时间、延迟时间等参数；

介绍H6 桥并网逆变器的拓扑结构与调制方式；利用状态空间平均法对H6 逆变器建模并对H6桥进行共模分析；对基于工业级单L 方案的20 kHz H6 桥并网逆变器进行硬件设计，选择参数满足要求的功率器件、采用带低阻抗回路防止桥臂串扰的驱动方案、选择全隔离的采样方案、 对滤波电感和母线电容的取值进行推导与分析；对PCB 布局要点进行分析，通过后续实验验证 其可靠性；

分析两种不同的锁相环方案，设计基于SOGI 的锁相环参数，通过伯德图验证环路稳定性；设计基于L 型滤波器的 H6 并网逆变器电流环参数并验证其稳定性；分析电网电压、母线电压 和桥臂死区对电流谐波的影响；对比分析PI、PR、RC 三个控制环节，讨论其对基波电流的跟踪效果和对谐波电流的抑制能力；针对三种方案设计控制参数并通过伯德图或奈奎斯特曲线验 证其稳定性；

建立H6 并网逆变器损耗模型，分析损耗理论分布，SiC 器件开关损耗小，在高频工作条件下相对于Si 器件更具优势；通过电阻负载实验对SiC 20 kHz、SiC 100 kHz、Si 100 kHz 进行效率测试，验证理论分析的正确性；设计安全可靠的并网流程时序，根据时序图编写程序进行L型逆变器并网实验测试，验证硬件设计与环路设计的正确性；在 LCL 型逆变器平台验证不同电流控制环节对谐波抑制的效果，PI 控制在谐波频率处增益较低，谐波抑制能力最弱；QPMR 控制能够有效减小并联支路项中心频率处谐波，但是并联项受环路稳定限制；重复控制相对QPMR控制谐波含量进一步优化，且高次谐波含量也得到有效抑制，谐波抑制能力最强。

6.2 工作展望

由于时间有限，本文研究内容仍有许多不足，下一步工作可以分为以下几个阶段： (1)、本文提出的短路保护针对SiC MOSFET 的短路承受时间短研究，目的在于保护的快速响应，能够在300ns 以内完全关断，但是由于驱动置低由单稳功能提供，不能独立运用于驱动器，需要配合原边在软件关断驱动，下一步可以研究故障后持续置低的短路保护方案； (2)、H6 桥并网逆变器高频开关管使用SiC MSOFET，只利用低阻抗回路提高驱动稳定性， 如果母线电压等级或者驱动速度进一步提升，可能带来桥臂串扰等隐患，可以使用负压驱动； (3)、无论是锁相环，还是电流控制都是在电网电压频率波动不大的情况下进行参数设计， 下一步可以研究基于频率自适应的锁相环和电流控制环节。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)