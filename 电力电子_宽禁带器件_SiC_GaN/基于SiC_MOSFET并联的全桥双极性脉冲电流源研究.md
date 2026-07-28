# 基于SiC MOSFET并联的全桥双极性脉冲电流源研究

原创 施添炜 ，岳晓明 SiC碳化硅MOS管及功率模块的应用 2026-04-01 11:46 广东

> 原文地址: [https://mp.weixin.qq.com/s/fgLDsu6iHbM8VCNvizOaWw](https://mp.weixin.qq.com/s/fgLDsu6iHbM8VCNvizOaWw)

文章来源：强激光与粒子束

作者：施添炜1，岳晓明2，姜松1，李孜1，王永刚1（1. 上海理工大学 机械工程学院，上海 200093；   2. 山东大学 机械工程学院，济南 250061）  

摘要：为满足高功率脉冲应用对大电流双极性输出及灵活调控的需求，本文提出并实现了一种基于SiC MOSFET 并联全桥拓扑的紧凑集成式双极性脉冲电源系统。该系统在单板上集成主功率级、隔离驱动、辅助电源与控制保护模块，兼具高功率密度与良好扩展性。实验结果表明：在50～300V母线电压下，输出峰值电流与母线电压保持高度线性相关，脉宽调节实现了峰值电流的连续可 控 ，最大增幅达37%。系统可稳定输出高达±300A的双极性脉冲电流，充分验证了大电流输出与紧凑设计的兼容性。此外，在500ns 脉宽下四管并联的均流不均匀系数为12.87%，验证了协同驱动与独立栅极电阻设计的有效性。研究结果表明，该紧凑集成方案在大电流双极性脉冲输出与参数可调性之间实现了兼顾，为中压条件下高功率脉冲源的小型化与工程化提供了实验依据和设计参考。  

关键词 ：双极性脉冲电流源；SiC MOSFET并联；全桥拓扑；协同驱动；大电流脉冲输出

近年来，随着等离子体处理、脉冲电磁检测、电火花加工等技术的快速发展，大电流脉冲电源系统不仅在基础科研得到广泛使用，也在工业制造和装备测试等领域展现出重要应用价值。此类系统通常要求具备快速上升沿、高峰值电流、可调脉冲宽度以及高重复频率等性能指标，这对功率器件性能、电路拓扑设计以及控制策略提出了更高的要求。尤其是在中压（200～500V）条件下实现百安培级脉冲电流输出，需在保证动态响应速度的同时兼顾系统稳定性与可靠性。

宽禁带半导体器件，尤其是碳化硅金属\-氧化物\-半导体场效应管（Silicon Carbide Metal-Oxide-Semiconductor Field-Effect Transistor, SiC MOSFET），凭借高击穿电压、低导通电阻及优异的高温和高频特性，已成为高频、大电流脉冲电源系统的重要器件基础。然而，单个SiC器件受限于封装热阻及电流承载能力，难以直接满足百安培级脉冲输出需求。多器件并联是提升电流输出能力的有效途径，当前虽已存在集成化大电流全桥SiC模块，但其生产成本高昂、采购成本显著高于分立器件；相较而言，采用分立SiC MOSFET 进行多管并联的方案，在满足电流扩展需求的同时，更具备经济性优势，更适配中压脉冲电源的工程化推广场景。然而，多管并联也引入了驱动同步性、动态均流及寄生参数不匹配等工程难题，若处理不当，可能导致电流分配不均、器件过应力乃至系统失效。 

现有高电流脉冲源多依赖高压储能拓扑，如 Marx 发生器及大容量电容放电系统，可实现 kV/kA 级脉冲输出，适用于等离子体驱动和强电磁发射等高能应用。然而，这类系统体积庞大、调节灵活性不足，且在中压条件下 难以实现高重复频率及双极性输出。相较之下，中压条件下的半桥及改进型单极性拓扑虽可实现一定的参数调 节，但受限于单极性输出，难以满足需要双向能量传输的应用场景。因此，在中压条件下构建具备双极性输出、高峰值电流和良好调节能力的紧凑型脉冲电源系统，仍面临显著的技术挑战。 

针对上述问题，本文提出并研制了一种基于多管并联SiC MOSFET全桥拓扑的中压高电流双极性脉冲电源系统。该系统采用单桥臂四器件并联结构，有效降低单管峰值电流应力，并保留全桥拓扑的双极性输出特性。结合基于FPGA的多通道协同驱动策略与独立栅极电阻补偿，在百安培级瞬态条件下，实现了较低的动态均流偏差。 实验结果表明，该系统在300V母线电压和特定负载条件下，可稳定输出峰值300A的双极性脉冲电流，并在驱动 脉宽与负载变化时均保持良好的参数可调性与运行稳定性。本研究不仅验证了所提方案的可行性，也为中压条件下高频、大电流脉冲电源的工程化实现提供了有价值的参考。  

1.系统结构与拓扑设计  

1.1并联全桥拓扑结构及工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPTB7J9GfnjVCSktQpJZYJ5FG0GaZBSbjOcTCAErFkPCLnMFBibPpibmoF8UFrVgvS76ICvyBhCH77lV55EpFDc8Tqnpe3wGx0lI/640?wx_fmt=png&from=appmsg)

如图 1（a）所示，系统采用模块化架构，单板集成控制、驱动及功率单元。各级间采用电气隔离与差分信号传 输，以确保高压工况下的抗干扰能力与紧凑性。控制核心FPGA 通过SPI总线配置驱动芯片参数，并输出差分PWM信号；驱动级采用15 V/–4 V非对称隔离电源供电以驱动 SiC MOSFET。为实现大电流双极性输出，功率级采用 SiC MOSFET并联全桥拓，如图 1（b）所示。  

针对±300A双极性脉冲电流的负载输出要求，本研究选用型号为IMZA65R015M2H的SiC MOSFET。根据额定电流为ID=100A计算得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNLJK7IcGDzmR3QZcW2mfS9zhQf67PuUsrfzicP2JgiaFkndGkEaUU5ibgD0R2fyIicXW5g8ZphgXJAtj5qQ8JzjW2YEzkLX2wTnias/640?wx_fmt=png&from=appmsg)

式中：Iout为系统目标输出脉冲电流峰值，ID为单颗 SiC MOSFET 的额定漏极电流，n为每个桥臂中并联的器件数量。计算结果表明，理论上每个桥臂至少需要三颗器件并联以满足额定输出电流要求。然而，考虑到器件在高频、大电流条件下的动态均流偏差、结温上升及老化裕量等因素，实际设计中适当放宽电流承载能力，将每桥臂的并联数增加至四颗。该配置能在保证足够电流裕量的同时，有助于提升系统的可靠性与热分布一致性。  

如图 2 所示，并联全桥拓扑如同传统全桥拓扑一样通过对角管成对导通实现能量传输。极性翻转通过对角桥臂交替导通实现。一个完整的换向过程可划分为三个阶段：  

1）正向导通阶段：当 Q1 和 Q4 同时导通时，负载两端 施加正向电压+Vdc；  

2）续流阶段：当所有功率器件关断，负载电流由于电感电流连续性约束，通过 Q2 与 Q3 的体二 极管续流。由于 SiC MOSFET 体二极管正向压降较高，该阶段存在较大的瞬态导通损耗。随着能量消耗，电流逐渐衰减；  

3）反向导通阶段：当 Q2 和 Q3 同时导通时，导通机制由二极管切换为低阻抗的反型层沟道。负载两端施 加反向电压−Vdc，电流方向翻转并上升至负峰值，从而完成以此双极性电流换向。

通过周期性地重复上述过程，可实现负载电流在正负极性间地快速可控切换。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN3bCWQcSWnZAeFhyss4CcYfWxpRgA3LZF4tv10bIBtDsZYfplInzNQJ78gmhOSCMice8YBHnZ8cJQGjbRhaib0m8Ltn1vUeTrNM/640?wx_fmt=png&from=appmsg)

在全桥输出端，负载建模为电阻\-电感串联支路，其等效电阻为 R，等效电感为 L，主回路的方程可推导为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNvF4IF56wI8obhycZNhBM2qoq9EGySmBndTLlib6LkxwiaCRsZb2kffutibBcAj5bf3vKDG5hrAIxiaJTJl6qAXRgicUibs4dCjQNJQ/640?wx_fmt=png&from=appmsg)

其中全桥输出电压为uo(t)，全桥输出电流为i(t)。假设一个完整换向周期起始时负载电流为零，根据桥臂状态的不 同，可将电流响应划分为以下三个阶段。  

（1）正向导通阶段：当 Q1 与 Q4 同时导通，全桥输出正向电压uo\=+Vdc时

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPfwZa5VR5xiaCYGQ0aovlr3DB7jrJdmWnbe73dmWFecprnjun26QLibP69UouNpYYB2yFD7J8lfejpdV5jJS2JFGZarXQfKpL2o/640?wx_fmt=png&from=appmsg)

式中：τ=L/R为电路时间常数，此时电流从0开始逐渐上升，最终趋近于正向稳态值Vdc/R。在火花放电场景中，电弧电阻 R基本保持恒定，因此可通过调节电感 L改变时间常数 τ，进而调控电流的上升速率。  

（2）续流阶段电路可近似为一阶 L-R 网络，uo\=−Vdc，电流初始值i(0)\=I0，其解析解为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPhbtYD9ZapicKdRmZX959jaETdlNyiaU1rA4BbOEys6tdkk8icBGQiblwHOGMjqmceVubias4mtg21yn3XP1nFkKog70R0Xmm5caA0/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMNXoloZ9aICEIXDcCKUFuj3AgBYttt2WRhTVrLibawwJw5aOCibHJ77icibQN1kePqdXuhp3KoO9So6hNhH3xZJQRuqwIibLCXwibpY/640?wx_fmt=png&from=appmsg)

电流在此阶段单调下降。值得注意的是，尽管该阶段依赖体二极管续流，理论上存在较高损耗，但为了确保全桥在中高压工况下的安全性，本设计采用了微秒级的死区时间，并于i(t0)=0 时刻过零。 

零点时间可由式（6）求得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMdlaNAqu4NStBGdh4fo4YgS2sh5IEI3ibm97fibOlYC0niblzR2bDn4kj391gXDicq3ojezM6BCfibiaFpHPAaz4RNIQCWdUw4OicRcY/640?wx_fmt=png&from=appmsg)

当 R很小时，上式可近似为线性衰减形式：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnr4GWlKmozJlO7XEKbv27eKr7uC3chHGicreib0q4svibr6CNibQveTdhy79bBxThiaKjJcchEzicBW7lrq9D90qxUj7UvTflLJsOg/640?wx_fmt=png&from=appmsg)

此阶段电感释放能量，电流下降速度主要受等效电感 L限制，阻尼 R仅决定衰减速率。 

而当电流降至零且二极管截止后，电感剩余能量在等效电感Leq与结电容Ceq之间交换，形成弱阻尼振荡，该回路可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP81xUhvicRlXFL0g4YqFlsGkiazGCZRVlL2FAXw44jaekeK5MMMqYHOSFwkHicmTABmcia63MawupB6Fen8MWj0QpzAYl0DsibeG7U/640?wx_fmt=png&from=appmsg)

其解为阻尼振荡形式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNibDXDm1zXG248xYpa7oTUJVR66wE3y1IAQNgdvdiaUe1N5ZswQ7R2yWMxicbIzagzgdBRxPYCNXf25P6ejvWwsxicDz0ZKen6PPM/640?wx_fmt=png&from=appmsg)

在换向暂态过程中，器件电流的衰减可近似表示为阻尼振荡形式，其阻尼系数与环路寄生参数密切相关。定义阻尼系数ɑ与振荡角频率ωd分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPustabia60htSMZpyvd5wNv4cvFFReQxpMylwBEsD0gYuqeUW2UEtpdwcRscmPjxRorIjJvBP2lVOU8ffBy4xUAHYluCKo5auQ/640?wx_fmt=png&from=appmsg)

则该阶段电流呈指数衰减并伴随高频振荡。振荡频率主要由等效寄生电感Leq与结电容Ceq共同决定，而阻尼 程度则取决于回路等效电阻Req 。  

（3）反向导通阶段：导通路径由高压降的体二极管转变为低阻抗的 MOSFET 沟道。由于前一阶段电流已归零，Q2 与 Q3 实现了零电流开通，有效降低了开关损耗。此时，uo=−Vdc。则：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP5ibMJbvbS2BF4b4iavdeqnicagh1LWCs21QbK7QH5DL9dMpxE2KX9zc2texUxUg5DbDao3xiarmjnaPQ6bnVxYJkOBM6dqTlMk2E/640?wx_fmt=png&from=appmsg)

电流转为负向，并最终趋近于-Vdc/R。

综上所述，导通与反向阶段由R−L参数决定，而续流阶段的高频振荡由器件结电容与寄生电感决定。尽管振荡幅度较小，但不会改变电流主特性，因此该简化模型能有效描述换向过程的整体规律。在此基础上，本文进一步采用并联全桥拓扑。与传统单管全桥相比，该结构更符合器件的降额设计原则：既能分摊单管的电流应力，降低导通损耗，又能在高电流和高频率条件下提高系统的可靠性和可维护性。  

1.2多管并联 SiCMOSFET全桥拓扑的一致性优化设计 

1.2.1 多管并联均流特性的量化分析 

在多管并联全桥拓扑中，MOSFET 间的电流均分能力直接关系到系统的可靠性与开关损耗控制。由于器件存在工艺偏差，若不加以优化，往往会引发静态与动态不均流现象，进而导致个别器件过热或失效。  

静态工况下，并联 SiC MOSFET 的电流分配由器件导通电阻RDS(on)主导。理想状态下，多个并联器件的电流Ii应满足：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOP0vnZ1LrJgsJuy1sJRedY52x56FKT2z8ibdQkaia7dTKv58C0hvfkMuLLyfgicQlAjKGqhb5ElFOuUMhrC31cdz32TOicNOsibRk4/640?wx_fmt=png&from=appmsg)

其中Ii 表示第 i个并联器件的漏极电流，VDS为器件漏源极之间的电压，RDS(on),i为第 i个器件的导通电阻。该关系式表明，静态均流特性主要取决于各并联器件RDS(on) 的一致性。 

而在实际工况下，尽管RDS(on)具有正温度系数，可通过热反馈实现部分电流自均衡。但同一批次器件RDS(on)的固有离散度（典型值±8%）仍会导致静态偏流，为量化该偏差，引入电流不均匀系数（Current Sharing Imbalance Factor, CSIF）：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN1PEwOvy3TxiczKQl9EvEEgJv423Y6xGD95SExc0XwiaDH4IaxwIgIKRVjxxuvMHRqzjlM1YhftRibdDocuIsrUvFUL7ANBzvZKQ/640?wx_fmt=png&from=appmsg)

其中Imax、Imin和Iavg分别为并联器件的最大、最小和平均电流值。 

基于上述静态均流原理，本研究在器件选型策略上，优先选取了具有显著正温度系数特性的 SiC MOSFET。该器件的导通电阻随结温升高而增加，这种物理特性在并联系统中形成了一种“热\-电负反馈”机制：当某一支路因参数离散分流过大导致结温升高时，其阻抗会自动增大，从而迫使电流向其他支路转移。这种自平衡机制为系统的静态均流提供了物理层面的基础保障，降低了对器件个体参数严格一致性的依赖。  

在动态工况下，开关瞬态的均流偏差主要源于开关瞬态器件的栅极驱动匹配、电压应力、电感分布及器件寄生参数。特别是在上升沿和下降沿，栅极电阻RG 、输入电容Ciss与驱动压差共同决定充放电速度，其上升沿栅源电 压的变化率可表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNug9b9MqH37r7oxGa5yuPBThFwPVl8pk5OksGrCJuV80fH0vh4oYGFeumWV4nD9vAOXYzlEzG7IylX6UQHBXMib73CSxmcNQsc/640?wx_fmt=png&from=appmsg)

其中，dVGS/dt表示器件栅源电压的变化率；VDRV为驱动电路提供的栅极电压幅值；Vth为器件阈值电压；RG为外加栅极电阻；Ciss为输入电容。由式（14）可知，通过调节栅极电阻RG 可直接控制dVGS/dt ，进而影响开关瞬态的电流分配。 

为量化动态偏差，定义瞬态电流偏移率：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP2afhiad54RRPiaby6dbAeoK5aicFlLHVVSgVjIK73zoS1FCbdcb7honrqKvSlo6FIJAhB1tcQnTrbwezicwDsUKeLUPKnmxmtDwo/640?wx_fmt=png&from=appmsg)

其中 i(t)表示第 i个器件在某一开通瞬间的电流，iavg(t)为该时刻所有器件的平均电流。  

需要指出的是，并联系统的均流机制存在显著的时域差异：稳态导通阶段的电流分配主要由器件导通电阻RDS(on)的匹配度及其正温度系数特性决定；而驱动信号的一致性则主导了开关瞬态过程的电流动态分配。基于此，本研究综合采用统一驱动信号、独立栅极电阻配置等策略，重点针对瞬态过程，有效抑制了因驱动时序错位或器件参数离散导致的瞬态偏流问题，从而提升了并联器件的电流一致性和系统稳定性。 

1.2.2  独立栅极电阻的精细化均流补偿设计  

尽管前述基于FPGA的驱动架构已通过时序同步与信号映射实现了宏观驱动一 致性 ，但受限于SiC MOSFET器件自身参数的固有离散性，各功率器件的实际开通与关断特性仍可能存在偏差。具体表现为栅极阈值电压Vth在同一批次内可存在±0.5V 的波动，而输入电容Ciss的典型离散度可达±10%。这些参数不一致将直接影响栅极充放电速度，进而导致开关特性偏差。 

为定量分析该影响，可将开关过程中栅压变化时间常数表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQuhhH5QI1VicgxibFZ40AgGvqmXqjV5iad7UHDJBibtnicq1ts53QKT7rDO1ljNjxe5IZ4VnYG32z0icc6AIBnfAOw1jB42bpTDvrQ/640?wx_fmt=png&from=appmsg)

其中τ为栅极驱动时间常数，RG为串联栅极电阻，Ciss为输入电容。由上式可见，在Ciss 离散的情况下，采用相同的RG将导致不同的驱动响应速度，最终影响器件间开关同步性与电流均流特性。  

为此，本研究在驱动链路中引入基于独立栅极电阻的推挽式驱动网络，如图 3 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOK1mOSZpYlg4z1iaMSlMicJibUH0CrlE8Niciaq04ibGY83vp58tibys9aQxe8ZsibWb2zFibibxpYWL0Ql6yWeXDv5tXWpLoFhibt1CKHOw/640?wx_fmt=png&from=appmsg)

与传统共用栅极电阻方案不同，本系统为每一个并联SiC MOSFET 支路配置了独立的开通电阻Ron与关断电阻Roff ，实现了驱动回路的电气解耦与非对称调控。

这种拓扑结构对动态均流的补偿机制，可基于前文公式（14）所描述的栅压变化率进行分析。在忽略次要寄生参数影响且处于米勒平台前的等效阶段，开通阶段的栅源电压上升率可近似表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNvEZnnYcBa7W8Kc0uqEic1ZSn3wpJacsDQ8uZBrSbiaaymepKdgk3bibM6s5lvPbh6lQCHbjK9ibbtSfr1Z2cibxuSVEpTUnSfzdcs/640?wx_fmt=png&from=appmsg)

式中，Ron为独立配置的开通电阻，Rg,int为器件内部栅极电阻。  

由上式可知，该拓扑具有两重优势：1）开通速度可调：针对Ciss较小或Vth较低的快支路，通过适当增大其独立电阻Ron，可有效调节dVGS/dt，从而拉齐各支路的电流上升率di/dt，抑制开通瞬态的电流失衡；2）关断阻抗独立：关 断过程由独立的Roff路径主导。设置较小的Roff可在不影响开通均流调节的前提下，提供低阻抗关断回路，有效抑制米勒效应引发的误导通风险。 

综上所述，这种Ron/Roff独立解耦的非对称驱动设计，在无需精密筛选器件的前提下，通过驱动参数的针对性配置，有效缓和并抑制了器件参数离散性对动态过程的影响，提升了并联系统在开关瞬态阶段的均流一致性。  

2.仿真结果  

为了验证所提出的大电流双极性脉冲电源系统的工作原理，本文利用 LTspice 软件构建了主电路的仿真模型。为简化分析过程，FPGA生成的驱动信号在仿真中由理想脉冲源等效替代。电路的具体仿真参数如表 1 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMib57YA07XaiaBZrcb1LvqzFTHL4HAFTX8RRtIxwpVASvU3X11lYGv7I2VDq3XVLVXkvkAswT8aXqMNiauTx6sQjic3gic95RBP6Dc/640?wx_fmt=png&from=appmsg)

2.1寄生参数对系统性能的影响  

为了评估实际电路中寄生参数对输出波形的影响，本文构建了包含回路寄生电感与器件分布参数的仿真模型，如图 4 所示。仿真结果显示，在负载端引入串联寄生电感后，系统输出电流波形呈现出明显的非理想特性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNzXibwiaIWUhgpl5XOE46Q11ISkfickvYfpJqV8nfJKfKwIFlJmop6kZHvKgibwdc6zqgK9pDEZwF1GU4aoFaoQLfzhvsbKvtdvicQ/640?wx_fmt=png&from=appmsg)

如图 4（a）所示，负载电流虽仍保持双极性特性，但受寄生电感阻碍电流瞬态突变的影响，脉冲上升沿显著变缓，未出现高电平平台，波形整体呈尖锐单峰状；下降沿则伴随高频振荡，这源于器件关断后，电感剩余能量与系统寄生电容在 LC 回路中发生的弱阻尼谐振。图 4（b）进一步展示了该工况下功率器件的漏极电流波形。可以看出，在桥臂换向瞬间出现了向下的反向尖峰。这一现象是换向过程中寄生电感迫使电流通过体二极管续流，并与结电容发生动态耦合谐振的结果。尽管寄生参数引入了波形畸变与瞬态尖峰，但其幅值与持续时间均处于器件安全工作区内，表明所设计的驱动时序与拓扑结构在非理想工况下仍具备良好的鲁棒性。  

2.2并联 MOSFET源极寄生电感对均流特性的影响

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQUEKyPCgQyCicDbGEkKtA7H76YyjFSiathY2YHS73PuCz5J6MJYo24k3OKjeuicvewx4UB7wCoicqlian2veiapqhoBcmnXib19TIbs/640?wx_fmt=png&from=appmsg)

如图 5 所示，随着源极寄生电感从 5nH增至 20nH，漏极电流的上升率与峰值显著降低，表明寄生电感对开关过程具有强烈的抑制作用。在多管并联中，这种电感参数的离散性将直接导致动态均流失衡，使低电感支路承受过大的电热应力。更关键的是，源极寄生电感作为驱动回路与功率回路的公共阻抗，其感应电压会削弱有效栅极驱动电压。为此，本研究在硬件设计中采用 Kelvin 源极引脚结构，将驱动回路与功率回路在电气上解耦，从而有效消除了公共源极电感对驱动电压的干扰，提升了开关速度与并联一致性。  

2.3回路电感对均流特性的影响  

除了上述源极寄生电感外，主功率回路的等效回路电感同样是决定系统级性能的关键参数。这一点可直接从前述图 5 的仿真结果得到印证：即使仅引入微小的源极电感（从5nH增至 20nH ），电流上升沿的斜率也出现了显著下降。同 理，作为量级更大的回路电感，其对瞬态电流变化率di/dt的抑制作用将更为明显。  

从电磁机理角度看，回路电感对电流变化具有抑制作用。在并联功率器件中，当某一支路电流上升过快，即di/dt较大时，其感应电压随之增大，从而对该支路电流形成负反馈抑制；而电流较小的支路所受抑制较弱，这种机制在一定程度上有利于改善并联器件的动态均流特性。因此，适当的等效电感在电流瞬态过程中具有均流缓冲作用。但另一方面，电感同样会限制电流的上升速率。在本文研究的µs级脉冲条件下，过大的等效电感将显著延缓电流建立过程，使峰值电流难以在有限脉宽内达到设计值，从而不利于系统的瞬态响应能力和输出性能。  

因此，回路电感对动态均流与瞬态di/dt的影响并非对立，而是同一物理机理下的性能权衡。基于这一认识，本系统的设计策略并非通过人为增加电感来换取均流稳定性，而是通过对称化布局与紧凑化布局将回路寄生电感将至最低，以确保高di/dt输出能力；同时利用上文所述的FPGA 协同驱动与独立栅极电阻配置等主动控制手段，来实现系统瞬态性能与均流指标的协同优化。  

3.实验结果与分析  

为评估所提出的大电流双极性脉冲电源系统的基础性能，本研究在尺寸为 20 cm\*25 cm的单一 PCB上集成了主功率级、隔离驱动级、辅助电源以及控制保护电路，构建紧凑一体化实验平台，如图 6 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPlOtgTpib03CbCrfTnLLmSa0ydXBhYqRKjibEV8TNIfSVXKKvO8BOMrpJwRJD4F5mGSibUasKSZCKiagzDQKHh51iaA2SakursibGyw/640?wx_fmt=png&from=appmsg)

在功率回路的设计 中，为最大程度降低回路电感对di/dt的限制并抑制并联支路的动态不均流，本研究采用了高度对称化与最小化换流回路的布局策略。通过优化PCB叠层结构与走线几何形态，确保了四路并联 SiC MOSFET 的漏极与源极走线阻抗高度匹配，从而在硬件层面为均流一致性提供了基础保障。平台配备可调直流母线电源和匹配负载，采用带宽350MHz、采样率 3 GSa/s 的数字示波器同步采集输出电流和电压波形，以评估系统在不同工况下的输出性能。  

3.1单桥臂器件的瞬态均流特性  

在对峰值输出能力进行分析之前，首先对单桥臂并联系统的均流性能进行验证。本研究选取500ns脉宽作为典型工况。一方面，该工况处于电流快速上升阶段，di/dt较大，器件间寄生参数差异对瞬态分流影响显著，有助于揭示均流设计的极限性能；另一方面，短脉宽工况对器件动态一致性的要求较高，能够在有限实验条件下对均流能力进行较为严格的评估。值得说明的是，为评估所提并联系统在实际工程条件下的适应性与鲁棒性，实验中所采用的SiC MOSFET未进行任何额外的参数筛选或配对，且未限定生产批次。因此，实验结果自然包含了器件在实际应用中可能存在的阈值电压Vth与跨导等参数的离散型。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPlxtFAClDyrXEich2T2HD5tyvfok1hib60BmumJtzOApXQzShTLfrosH0Z5qsjLIPNOpTOL1LibaxvsgdLRk22cyW3GC1qZHiaIjs/640?wx_fmt=png&from=appmsg)

  
图 7 展示了在 500ns脉宽条件下，单桥臂四个并联 SiC MOSFET 的均流测试结果。测试波形显示，电流波形上升沿陡峭，峰值处无明显过冲，仅下降沿尾段出现轻微振荡，反映出主回路阻尼适中，寄生参数控制得当。另外，各MOSFET分流通道的峰值电流基本一致，表明器件选型与驱动匹配较好，回路布局实现了较好的电流均衡性。  

为了定量评估系统的均流特性，选取波形偏差最大的时间段进行数据处理。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNJYpib18E5CRO2LHN8Y1InZHiaRnGjPn4HI8XCD9XPFmENDppmR3UQ0ATjfXxUZQBPNoC7UGmwvtrprqZFLoMSAtFlrsibJyicZqQ/640?wx_fmt=png&from=appmsg)

  
表 2 中列出了各分流通道对应的峰值电流、绝对偏差等均流评估参数。四个器件的峰值电流的最大绝对偏差为3.57 A，均流不均匀系数CSIF为12.87%。该 结果表明，所提方案在无需器件精密配对的情况下，仍具有良好的工程可行性与参数离散适应能力。从各通道的相对偏差对比来看，MOSFET1 的偏差最大，表明该通道电流较平均值偏低，可能受器件特性影响；而 MOSFET2 偏差最小，表现较为理想。整体而言，电流分布较为集中，反映出系统具有良好的均流性能。这一结果为后续开展峰值电流输出能力与线性调控特性的研究奠定了可靠基础。  

3.2双极性脉冲电源在典型负载下的峰值电流线性分析  

在均流特性得到验证的基础上，为系统化评估所构建双极性脉冲电源的电流输出能力及其母线电压依赖特性，本研究在1μs脉宽与 1kHz 重复频率下，将母线电压Vbus 由50V递增至300V，并同步测量输出峰值电流，波形如图 8 所示。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO1t7gTXKU73GIQO3GCoOnG24rkbaBPJjrMiaFKl0I5pNkjCiaexPLbiaweFasIcO4dkY9omeX1YPVqxrO7fu4vUFNIskDxOia2LTM/640?wx_fmt=png&from=appmsg)

电流峰值随母线电压近似线性增加，当母线电压增加到300V时达到峰值。波形正负半周对称性良好，表明系统在双极性切换时驱动一致性较高。整体波形平滑，边沿陡峭，热效应对瞬态响应不明显。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNb3FaibLw44dJnQEVQrdc7TVDyEvE3jujwuCFDC5SfcCciazAKLuG17J2mF08VTmAY7icibPJj4CIlBDzFXYboDwJCHStduLbooHA/640?wx_fmt=png&from=appmsg)

为进一步验证系统电流幅值的线性调控能力，对图 9 中 不同母线电压对应的峰值电流进行了线性拟合。拟合函数形式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPY8PdxxR7A2TZgfI1rSgPsxvchNibaNP27yIDIkTicczfYHuVbCAaeMHAXicqzibmg0sJQWGYW2svfCYI6FVyl4XGsXcWfMAGGPiaw/640?wx_fmt=png&from=appmsg)

其中，k表示电流对母线电压的敏感系数，b为截距。拟合得到的参数及拟合优度指标见表 1。  

由表 3 的拟合参数可知系统具备良好的线性调控能力，斜率接近 1，说明电流与母线电压呈比例关系明显，决定系数R² 与皮尔逊相关系数 ϒ 均接近 1，反映系统线性相关性较强，但较大的残差平方和RSS表明高电压区存在一 定偏离。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnaiaUV05ib2AUskVYWB3lXd2xoAwsriaPBU1oXP1Sjc4xyAVKB7V0GNoZWbgYAk1tsw6D5RCaeneZCtZGiciaGgyzckiczXj9dOcibQ/640?wx_fmt=png&from=appmsg)

3.3不同驱动脉宽下输出电流的瞬态特性与幅值调控规律  

在峰值电流与电压关系明确后，为分析驱动脉宽对输出电流瞬态特性的影响规律。本文所采用的负载在μs级脉冲条件下仍表现出明显的等效寄生电感特性，系统电流在单个脉冲内主要处于瞬态建立过程，其峰值并非由器件电荷控制所限制，而由回路等效电感主导。本研究分别选取了500ns∼1µs ，并利用高带宽示波器采集输出电流波形。为更直观地对比不同脉宽下的输出电流特性，本文仅呈现正脉冲波形，其变化规律可延伸至负脉冲，二者具有一致性。如图 9（a）所示，各工况下电流波形均呈尖锐单峰形态：上升沿陡峭，可在极短时间内由零电流跃升至峰值，且未出现明显过冲；下降沿同样快速回落，波尾仅伴随轻微振荡，显示出良好的瞬态响应特性。  

峰值电流总体上随驱动脉宽增加而升高，呈现出较为稳定的正相关趋势。这一规律与公式（3）描述的L-R回路暂态特性高度一致。由公式（3）可知，回路电流i(t)是关于时间t的单调递增函数，其上升速率由时间常数 τ决定。在本文研究的μs级脉冲条件下，由于负载存在等效电感，电流处于指数上升的暂态过程，尚未达到稳态值Vdc/R 。在此数学模型下，驱动脉宽直接对应公式中的时间变量 t。驱动脉宽的延长，使得电感由更长的充能时间，使得 

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpP2hVSrBLuIe1Q0iczJ59yn9h3CPSWlM0EB7xwLYiaVLak4vTicUiagMtNhysMFUFglakETjB6sRf7OveJJQG8Fjp7gttz4VHGdzfA/640?wx_fmt=jpeg)

这一项的数值增大，从而允许电流在关断时刻前攀升至更高的瞬态峰值。此种特性表明，在负载电阻及其等效寄生电感参数保持不变的条件下，通过调节脉宽可实现峰值电流的连续可控，为脉冲功率及瞬态高功率驱动等应用提供了简便且响应快速的调节手段。  

图 9（b）直观展示了峰值电流及其相对增幅随脉宽的变化趋势。由图可见，峰值电流随脉宽增加呈显著上升趋势，相较于500ns 基准工况，1μs时的峰值电流相对增幅达37%。这种良好的线性正相关特性表明，在负载参数固定的条件下，调节驱动脉宽时控制输出电流幅值的有效手段，其本质原因在于驱动脉宽决定了功率器件的有效导通持续时间，从而影响回路等效电感在单个脉冲内的储能过程和电流上升终点。这为高功率脉冲源的精确能量调控提供了依据。  

4. 结论  

本研究通过对基于 SiC MOSFET 并联全桥结构的双极性脉冲电源系统的系统性仿真与实验验证，形成如下核心成果与结论：  

大电流双极性脉冲的精准可控输出：系统采用四器件并联的全桥拓扑结构与 FPGA 协同驱动策略，在±300A量级实现了稳定、可控的双极性脉冲输出。仿真与实验结果一致表明，峰值电流与母线电压之间呈近似线性关系，决定系数大于 0.989，说明系统的输出电流受母线电压调节灵敏、可预测性高。通过调节驱动脉宽，可实现峰值电流的连续可控，最大相对增幅达 37%。该结果表明所设计系统在保证高电流输出的同时，实现了响应速度与调控精度的良好兼顾，为高功率脉冲源的小型化与可调化设计提供了有效途径。 

实际工况下寄生电感的影响规律与系统适配性：含寄生电感的L− R串联负载仿真与实验结果显示，电感值对 电流上升沿及下降沿特性均具有显著影响。寄生电感的存在会限制电流上升速率并在关断阶段与结电容形成弱 阻尼谐振，从而引起反向尖峰与振荡。实验表明，该尖峰幅值与持续时间均处于 SiC MOSFET安全工作范围内，说明系统在存在寄生参数的实际工况下仍可稳定输出双极性脉冲电流。该结果为后续封装布局与寄生参数优化提供了重要的工程参考。 

并联均流设计的实用性：在瞬态应力严苛的 500ns脉宽工况下，四管并联的均流不均匀系数控制在12.87%，小于工程标准要求的15%。这表明通过优化器件选型、驱动匹配与回路布局，可有效抑制并联器件的电流失衡问题。这一结果这为高功率脉冲电源中多器件并联的可靠性设计提供了可推广的技术方案，降低了大功率输出时的器件局部失效风险。 

综上，本文提出的紧凑集成式双极性脉冲电源在中压条件下实现了高电流、高线性度与高一致性的协同优 化。研究结果不仅验证了基于 SiC MOSFET 并联全桥拓扑的工程可行性，也为后续高重复频率、模块化扩展及多 通道协同脉冲系统的设计提供了理论依据与实验支撑。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPCqxYec8HqvibEOTFu0dFYNS7EdPVQskAOicpgCs3K1sP5YLW9A3NyleOOo2u9Hy1lL6DqHA23jmIG1pYMSTEtEhAPp9Fk11abc/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPUIWQUFdicpoGWbANHxiaUK6HAzWdXt44q24jYic4lW3ibGTO99ibk9TZ3Zp3DLSVM5fW3jicr4N6kfa5iaOA34FEarrzT81Ov4pAhRg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPgibiaDiboXjCcqYXkVjnRN9U1nuWfSy6H8iagErKYat6LZfLlKicXdw6bIbTjJosqCH1ic0qnTWvxmXIJxwpOQkmh4nRIQzOkicD1yE/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNV8kHeKNnwevCEgz1xTft2rEzwvGQLNXM0LCV3hWMTWEv3Kr7icTwr80NJYkmiad2ibj4C4dlb2XglyR9v4pP27e2IElBicVXWMTc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)