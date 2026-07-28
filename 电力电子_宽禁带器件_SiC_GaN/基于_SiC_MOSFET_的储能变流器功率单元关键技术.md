# 基于 SiC MOSFET 的储能变流器功率单元关键技术


> 原文地址: [https://mp.weixin.qq.com/s/pXo36LJEoLpyXtR\_wb32IQ](https://mp.weixin.qq.com/s/pXo36LJEoLpyXtR_wb32IQ)

**文章来源：**南方电网技术

**作者：**张海1，谢文刚2，樊芳芳2，刘凯2，贾文萱3  

（1. 国网山西省电力公司；2. 山东泰开高压开关有限公司；3. 新能源电力系统国家重点实验室（华北电力大学））

**摘要**：随着储能变流器向大容量、模块化发展，碳化硅（SiC）器件由于其低损耗、耐高温的特性，逐渐成为研究热点。然而SiC器件过高的开关速度使其对电路中杂散电感更加敏感，并且高温运行环境也会对器件长期安全可靠的运行带来影响。因此针对基于SiC MOSFET的储能变流器功率单元，重点研究了其低感设计和散热设计方法，并提出了功率单元的整体设计方案。通过优化叠层母排的结构，将高压交流模块与低压直流模块的杂散电感分别降低至 794 μH和235 μH，有效减小功率单元的关断过电压。通过热仿真研究，确立了散热方案，使器件在运行过程中的最高温度不超过 50℃。

最后，搭建了功率单元样机并进行对拖实验，验证了叠层母排结构优化设计和功率单元散热设计方案的有效性。

**关键词：**储能变流器；功率单元；叠层母排；杂散电感；散热设计

**0　引言**

储能变流器作为储能系统和微电网之间的接口，可以实现电能的传递和变换，具有削峰填谷、负荷控制、应急电源、并离网切换、孤岛运行等功能，在新能源发电的趋势下是未来电力系统的重点发展装备。随着储能变流器向大容量、模块化发展，其一般采用基于 DC/AC 变换器与 DC/DC 降压变换器的双极式结构。在功率器件的选择上，与硅 IGBT 相比，硅 MOSFET 具有开关频率更高、开关损耗更低和运行结温更高等特点。但受到硅材料本身特性的限制，硅制器件已接近发展上限，谈话硅（SiC）器件将成为器件发展的新方向。对比硅材料，其在能量损耗、发热量、使用频率以及电流密度等方面均具有明显优势，在相同功率等级下拥有更小的体积，且更适合在高频下使用。美国的 Cree、日本的富士和 ROHM 等公司已经推出 SiC 功率单元，并在光伏、电动汽车等领域开始应用。国内仅有部分厂家使用 TO\-247 封装的 SiC 功率器件设计功率单元，但是此类器件功率很小，由此构成的功率单元不适合应用在大功率储能变流器中。随着储能变流器功率单元向着高度集成化、高工作频率和大容量发展，对 SiC 器件构成的储能变流器功率单元的研究及设计具有重要意义。

由于 SiC 功率器件具有高开关速度，会产生比IGBT 更高的 di/dt和 du/dt，从而更容易出现更高的关断过电压、更大的开关振荡以及更高的工作温度等问题，因此功率单元的低感设计和散热设计尤为重要。针对低感设计，一般采用叠层母排减小杂散电感。文献提出了一种叠层母排分组连接结构，减小了电解电容发热问题。文献提出一种四层母排器件对称排列的方式实现低感设计。文献建立了考虑自感和互感的叠层母排数学模型，并对叠层母排参数和布局方式进行优化设计。虽然目前有较多文献针对 SiC 功率器件进行杂散电感分析，但是缺少基于SiC MOSFET的储能变流器功率单元的低感设计。针对散热设计，一般采用将模块贴在散热器上，再通过风冷或者水冷方式进行散热。文献提出了一种将芯片通过金属镀层和热介质材料直接连接到Si基微通道的新型结构，从而消除了模块多层结构的限制，提高了芯片的散热效率。文献针对SiC MOSFET强迫风冷逆变器的散热器给出了设计思路。

本文系统地研究了基于新一代功率器件 SiC MOSFET的储能变流器功率单元设计方法，具有较强的理论性和实践性，尤其适合在新能源发电中应用。首先简单介绍了功率单元的电路原理，其次利用叠层母排实现了低感设计，然后对功率单元进行强迫风冷的散热设计，并基于COMSOL Multiphys⁃ics 软件进行仿真计算，给出了适用的方案。最后搭建了实验样机进行验证，证明功率单元设计方案的有效性。

**1　储能变流器的工作原理**

**1\. 1　储能变流器主电路拓扑**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaALwIaOEE96XdVzWGeHxuXvCSPEjIXs85C0gWQe77kyX0hemx8QU8kJg/640?wx_fmt=png&from=appmsg)

高频隔离型大容量储能变流器的拓扑如图 1所示，该变流器采用模块化级联设计，可以通过串联相同的功率单元实现更高电压等级，结构更加灵活，便于扩大容量，单台变流器的容量可达到兆瓦级别。采用高频低损耗功率模块SiC MOSFET，其最高工作频率可达几百 kHz，并且能够满足 10%长期过载运行以及 20% 过载运行 1 min 以上的过载需求，可以提高变流器开关频率，进而提高变流器的功率密度。同时，从耐高温角度看，与 Si IGBT 模块相比，其具有更高的热导率和热流密度，SiC MOSFET模块本身的温度耐受能力提高，可以耐受高温环境，且散热性能良好。基于SiC MOSFET功率模块的使用更有助于变流器的小型化、轻量化、高功率密度化设计。

受SiC MOSFET耐压水平限制，采用若干功率单元高压侧串联，低压侧并联的拓扑结构以进一步扩大容量，形成低压、大电流的直流端口。而当大量功率模块级联时，串联电压分配不均容易造成器件过压损坏，并联电流不均衡会严重制约设备的容量提升。为了保证串联功率模块之间的均压以及并联功率模块之间的均流，分别采取了相应的控制策略。在串联高压侧，功率单元的均压策略分为静态均压和动态均压。静态均压依靠单元内部的风扇耗能实现，动态均压通过软件算法排序调制实现。

高压侧功率单元内部的高频变压器采用真空环氧浇注，以提高绝缘能力。并联低压侧，采用功率均衡控制方法以实现并联均流。高压交流侧功率单元由一台高频变压器、两组H桥及其之间的直流电容组成，低压直流侧功率单元由一组H桥和直流电容组成。高压交流模块中直接与交流侧相连的 H 桥为 AC/DC 变换单元，高压交流模块中与高频变压器相连的H桥、低压直流模块的H桥以及高频变压器组成双有源全桥型DC/DC变换。其中双有源全桥型 DC/DC 变换拓扑可有效抑制各级二倍频功率波动，获得平稳的电池电流，延 长 电 池 寿 命 。H 桥 中 所 有 功 率 模 块 由 SiCMOSFET来实现。

**1\. 2　功率单元的工作原理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaA0H6XIBdL62DnSUcvWia6OXGYbtOn40Td25tALibvzqhAjlqERQxuCJ8w/640?wx_fmt=png&from=appmsg)

本文所设计的 SiC 功率单元包含 10 kV 高压交流模块和 750 V 低压直流模块，两个模块均基于隔离型H桥拓扑，如图2所示，相关参数见表1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAFoggrk3my8SHUwzQVHTLsvDLajiaDECH3yrfYicP05zoZxicfzcpgScRg/640?wx_fmt=png&from=appmsg)

对于 10 kV 高压模块，开关器件采用型号为CAS120M12BM2 的 SiC MOSFET，每个器件源漏极电压 Vds\=1. 2 kV，每相采用 15 个模块串联为 18kV，10 kV端口相电压峰值为8. 2 kV，具有足够的绝缘裕度；整机总容量 1 MW，每个模块容量为23. 8 kW，按每个模块输出电压 700V 计算，额定通流约 34 A，远小于 SiC MOSFET 的额定电流 120A，具有足够的通流裕度。

对于 750 V 低压模块，开关器件采用型号为CAS300M12BM2 的 SiC MOSFET，每个器件源漏极电压 Vds\=1. 2 kV，远高于额定电压 750 V，具有足够的绝缘裕度。端口总容量 1 MW，每个模块容量为 66. 7 kW，按每个模块输出电压 700 V，额定通流约95. 3 A，远小于 SIC MOSFET的额定电流300 A，具有足够的通流裕度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAYicGtVnzka64WvIasONSYq503KRMDzgS2yuOggWkKCPO94aEKrwTZng/640?wx_fmt=png&from=appmsg)

双有源全桥型 DC/DC 变换采用单移相控制方式，每个全桥斜对角对应的两个开关管的脉冲信号相同，每个桥臂对应的两个开关管的脉冲信号相差180 °。系统运行时，通过改变两个H桥之间移相角的大小，就可以调节传输功率的方向和大小，实现能量的双向移动。当桥臂电压相位超前于交流电网电压相位时，能量从直流侧流向交流侧，电池放电；当桥臂电压相位滞后于交流电网电压相位时，能量从交流侧流向直流侧，对电池进行充电。其移相控制下电压波形漏电感的电流如图 3 所示，其中，移相角φ为功率传输过程中超前桥HB1与滞后桥HB2 的相位差，Ts为一个开关周期。

**2　储能变流器功率单元关键结构设计**

**2\. 1　低感设计**

**2. 1. 1　换流回路杂散电感分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaArQFWqczU2ZRvYSdIn5gdOmxlk9VR0C9TjaDAOa6vyHibJIJX22q7XFQ/640?wx_fmt=png&from=appmsg)

以低压侧S22、 S23关断时换流过程为例，说明功率器件关断电压尖峰现象。图 4所示的回路A和回路B中，S22、S23正在关断。在换流过程中，通过功率开关管的电流 iS逐渐减小，而通过反向二极管的电流iD正在增大。快速的电流变化作用到流经路径和器件的寄生电感上，使其感应出高频电压，并形成换流回路。换流回路上感应的电压直流母线电压叠加，共同作用到功率器件 S22、 S23 上，导致过大的du/dt，即形成电压关断尖峰，尖峰电压表示为式（1）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAibVnibyZDogkqaJGey5Q7AUVDSLOlRurSsQ12S8IIBGU7FghVGghuCGA/640?wx_fmt=png&from=appmsg)

式中：Umax为关断过电压尖峰；Uc为模块支撑电容充电电压；L23和 L24分别为功率器件和母排的等效杂散电感。这种现象尤其发生在分布电感量大、负载电流大、功率开关管电流下降时间短的情况下。降低寄生电感量是消除电压关断尖峰的有效方法。

**2. 1. 2　叠层母排设计**

根据功率模块结构布局的不同，叠层母排有多种拓扑。考虑换流回路杂散电感平衡问题，本文采用的叠层母排为对称结构，由两电平的正、负铜排导体通过叠层结构，在导体间叠加绝缘材料进行热压处理构成，其模型如图5所示。多电容并联使得杂散电感支路增加且一致性变好，磁场抵消以降低回路电感。但随着吸收电容数量的增加，电感见效的幅值减小，因此综合考虑，选择 4个吸收电容结构。安装电容组和功率器件的叠层母排的三维结构模型如图6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaA8ndnNk8WQ6s8qTVibucRrxibraJeUc6bE5ia4FZ1r2ChaXa9ewZ8yfFMw/640?wx_fmt=png&from=appmsg)

仿真提取叠层母排的杂散电感，高压交流模块的叠层母排杂散电感Lt\_H\=734 nH，低压直流模块的叠层母排杂散电感 Lt\_l\=175 nH。查阅厂家给出的器件数据手册以及文献，型号 CAS300M12BM2和 CAS120M12BM2 的 SiC MOSFET 高频寄生电感Lstray 均为 15 nH，二极管的杂散电感 Lsak 为 15 nH，则高压交流模块换流回路（如图 4所示）的总杂散电感Ls\_h和低压直流模块换流回路的总杂散电感Ls\_l分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAicia4F1ibMnDhULhC5HfnbD1agMdJaT6k07pkWc1p8EIUoIyZm2J8XFdA/640?wx_fmt=png&from=appmsg)

**2\. 2　散热设计**

**2. 2. 1　功率器件热损耗分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaASZt4ww8HqPfZK9Ts5mlehlN8CVS3q7LsVl8YdE88w2f7YPNUaDneXQ/640?wx_fmt=png&from=appmsg)

对于大容量高频器件 SiC MOSFET，需要通过合理的散热设计保证其工作在允许的温度范围内。热源的基本参数如表 2所示，由于功率模块壳体直接放置在散热器上会有缝隙面，因此可以在装配过程中涂一层很薄的导热硅脂，导热硅脂的导热系数为 1 W/（m·k）。功率器件模块安置于散热器上的等效热阻分析如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAn51eNXzVicovEZqJhxKD5JHtMIbTkXvN1sRZOuwbRm6VLCfLVONU5Uw/640?wx_fmt=png&from=appmsg)

**2. 2. 2　散热器设计**

散热器的尺寸布局要和叠层母排、器件摆放相配合，并受到散热器材质、工艺、翅片参数等因素影响。本文散热器选用铝合金材质，具有重量轻、散热好等特性。材料表面越粗糙，表面辐射率越大，导热性能越差，不利于散热，因此首选光面的铝合金。增大散热面积有利于减小热阻，因此增加翅片的数量可以提高散热效率，另一方面，翅片数过多会导致散热器尺寸变大，不利于功率单元的小型化、轻型化设计，综合考虑，翅片数量为15个。

高压交流模块中强迫风冷散热器的总热阻 Rth\_h\=0. 794 4 ℃/W，低压模块的散热器总热阻 Rth\_l\=0. 708 7 ℃/W。满载时，SiC MOSFET 的损耗约为150 W，根据文献提供的公式计算出功率器件最大容许热阻为 0. 83 ℃/W，说明散热器选型满足散热需求。

在仿真软件中对一个散热器以及 4 个 SiC 模块进行散热计算，要求功率器件最大温升值 T≤40 K。为了简化分析，忽略热辐射散热，得到不同入口风速（v）下 功 率 器 件 的 温 升 变 化（ΔT）曲 线 如 图 8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAgGeXAg7Fk57yL23CCsPeibE2WleDPAbX3Gkc3mR2akU7ibcuJZ0Jtl1g/640?wx_fmt=png&from=appmsg)

从图8中可以看出，在风速小于2 m/s时，功率器件的最大温升随风速增大而迅速下降；风速大于4 m/s 时，增加风速对温升减小的效果不再明显。风速为 4 m/s 时，功率器件的最大温升满足散热需求，因此确定流入散热器的风速不小于4 m/s。图9为入口风速为 4 m/s 时散热器和功率器件的温度分布图，由图可以看出，越靠近风扇，功率器件温度越低，最高温度出现在风冷出口处上的功率器件处；散热器温度分布也不均匀，靠近功率器件的部分温度比较高，最低温度出现在风冷入口散热器翅片底部，温度接近入口空气温度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAibbQL6rPHCYrBNNgrCn9jScESSuacI3ia8DhH8LzaMxthQEjzOAc5ibbw/640?wx_fmt=png&from=appmsg)

为满足入口风速≥4 m/s，本文选用两只型号为PMD2406PMB1\-A（2）的风机，其单台风量 Q1 为56. 5 CFM，等效入口风速v为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaA62wUXAwTfrvUhX4j8d7Vza9HJlxFx3MCdCfD6Lt0acUuNjgxU1ffCw/640?wx_fmt=png&from=appmsg)

式中 S为风机入口的截面积，考虑到模块风机输出风量消纳、不同位置模块进风量不均衡性以及屏柜的密封等问题，屏风机风量Q2需大于模块风机风量总和Q1s。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAM6ZJMzSjEN8DFL5QPia5VyD8GeQesM2AIqpmtvkkP3XXURsRibwIazqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAbvo49k7JI8rMmQffTTzWXWOmfyLKrL3fe74ib1iaibBTBmAMoeibSM12xQ/640?wx_fmt=png&from=appmsg)

式中：k为裕度系数，暂定取值在1. 2~1. 5之间。综合考虑性能、成本、供期、市场占有量等方面因素，选择型号为 R4D450\-AK01\-01 离心风机，其工作特性曲线如图10所示。根据图 10 所示的工作特性曲线，计算出风机工作在230/400 V时的裕度系数k的计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAKZTmphUviaS1TgdY1NHUqVicqF1QOqLdk6RA69ecEVBKd9lKPuOu08YQ/640?wx_fmt=png&from=appmsg)

由上述计算结果可知：k 的取值可满足预期设计要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAAPIz562PHaq7ibtHBvdEIoqDvhiazbqosPVRj0FSdkkR72gl5Av2Xhcg/640?wx_fmt=png&from=appmsg)

基于SiC MOSFET的储能变流器功率单元设计如下所述，相应的元件布局如图11所示。功率单元由模块化 SiC 功率器件、高频变压器、吸收电容、隔直电容、叠层母排、风冷散热器和金属机壳组成。金属机壳分隔室设计，隔室通过风冷散热器的风道相互贯通，进行对流换热；隔室一内，SiC 功率器件置于风冷散热器表面，吸收电容列于风冷散热器一侧，通过叠层母排与 SiC 功率器件连接，SiC功率器件驱动电路、控制电路固定于金属机壳上，取电于连接吸收电容的开关电源，实现高位取能；隔室二内，隔直电容连接于模块与高频变压器之间，分别固定于金属机壳上，高频变压器输出采用刀型触头结构。交流侧接口铜排置于功率单元前方，穿过霍尔传感器后固定于前侧面板上，高频侧接口为高频变压器的次级输出，即具有穿墙套管结构的刀型触头。叠层母排将吸收电容的正负极端子连接至位于前方面板上的测量端子上，便于测量电容电压。

该方案使用叠层母排结构，可降低回路杂感，减小器件开关过程中的过电压水平。模块风扇在吸收电容电压高于一定值时自动投入，风冷散热的同时，还可保证在不控整流充电阶段功率柜内所有模块之间的均压。

**3　实验验证**

搭建 10 kV 高压交流模块和 750 V 低压直流模块样机，并对功率模块进行对拖实验。对于 10 kV高压交流模块，高压交流单个模块两个H桥之间进行对拖，实验原理如图 12（a）所示。首先通过直流电源给功率单元支撑电容 C 充电至额定工作电压，然后同步触发两个 H 桥，器件开关频率均为 20kHz，由于两个 H 桥的输出幅值、相位相同，初始电流I为0，然后通过移相控制调节两个H桥的输出电压相位差，电流 I 逐步增大直至运行至满功率。实验过程中，模块风扇始终处于工作状态。对于750 V 低压直流模块，低压交流功率单元为两个模块的两个H桥之间进行对拖，实验过程同高压功率单元，原理如图12（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAANQQz1fDjQGribib1gREEBGc7ymdfm8xvWLV3vr1pCmHRshXh67ibZaHQ/640?wx_fmt=png&from=appmsg)

高压交流功率单元的对拖实验回路如图 13（a）所示，电容充电电压为 720 V；低压直流功率单元的对拖实验回路如图 13（b）所示，电容充电电压为720 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAiauplNEkvr2WQjKAeeK0RGxDSvZ8KS95lBCgKYX7rRa6yY3XRNxp8xw/640?wx_fmt=png&from=appmsg)

图 14 为高压交流模块对拖波形，高压交流模块中H1桥的电压有效值UH1为709. 55 V，关断电压尖峰小于 733 V；H2 桥的电压有效值 UH2为 692. 73V，关断电压尖峰小于813 V；电流有效值为40 A。上述分析表明本文提出的叠层设计方案有效的减小了杂散电感，提高了模块抑制过电压的能力。在环境温度为 10 ℃，电流有效值为 40 A，充电机工作在 720 V/0. 7 A 的实验环境下，采用热成像仪每运行半小时测量一次各功率器件的温度，得到图 15。3. 5 h 后温升逐渐趋于平稳，各功率器件温度最高不超过90 ℃，其中SiC功率器件的温度不超过40 ℃，可见散热效果明显，满足设计需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAVHuougKxevrwVJNEvtwkbtO6zdlforEYUELsNQ1Fh59743VKk0VyOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAdfgJIEsibhc4dDncEyZiaQFyHIOOJmRW9wtsE8L2nVGB4JySdPy4RRFA/640?wx_fmt=png&from=appmsg)

同理，图 16 为低压直流模块对拖波形，低压直流模块中模块 1 的电压有效值 UHF为 700. 00 V，关断电压尖峰小于 753 V；模块 2 的电压有效值ULVDC为 723. 43 V，关断电压尖峰小于 776 V；电流有效值为 130 A。同样可见叠层母排具有比较好的应用效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAicRt8lMicMwRS4ibMibrvgl7hnDFzW3LwONzQ5ibBTdZVFvFicKwkaUYOduQ/640?wx_fmt=png&from=appmsg)

在环境温度为 10 ℃，电流有效值为 130 A，充电机工作在 720 V/2. 4 A 的实验环境下，采用热成像仪每运行半小时测量一次各功率器件的温度，得到图 17。2. 5 h 后温升逐渐趋于平稳，各功率器件温度最高不超过70 ℃，其中SiC功率器件的温度不超过50 ℃，可见散热效果明显，满足设计需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbj3DpQSDzvxHSDCZFsXaAjSxrlttIJqJaNwibeB3NkZxclV2HrCclJ5Tuxrw5ljQrYlmKkaIYtSw/640?wx_fmt=png&from=appmsg)

**4　结论**

本文设计了一种基于SiC MOSFET的储能变流器功率单元，包括 10 kV 高压交流模块和 750 V 低压直流模块，适合于储能变流器的集成化、模块化发展。并重点针对功率单元的低感和散热进行设计，得到以下结论。

1）功率单元由模块式SiC功率器件、高频变压器、吸收电容、隔直电容、叠层母排、风冷散热器和金属机壳等组成。结构对称，拆装维护方便，且便于进一步扩大容量。

2）叠层母排的应用可以改善器件的开关特性，有效减小换流回路的杂散电感，并且使得功率单元整体结构紧凑，提高其集成度，具备良好的电磁兼容特性。

3）采用强迫风冷散热设计，选用合适的风机和散热器，保证散热需求，延长器件使用寿命。风机控制策略还可保证不控整流充电阶段功率柜内所有模块之间的均压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIDa65NThz7icmXgD9ukickv5ysLdiaW96X2Gc8cElM2j0tVFNnhbkSPYIhDVYbzRz3k0cLT3PdHFWg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIDa65NThz7icmXgD9ukickv9ibtj9UXrU3X3QeRWc2zECfiaJzSLa0Jdovw5FbjI5QJ8icQcBDPYjFHQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)