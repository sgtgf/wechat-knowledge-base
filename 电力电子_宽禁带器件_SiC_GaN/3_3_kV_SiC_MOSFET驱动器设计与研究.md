# 3.3 kV SiC MOSFET驱动器设计与研究

原创 忻兰苑 ，林珍君 SiC碳化硅MOS管及功率模块的应用 2026-06-27 08:03 广东

> 原文地址: [https://mp.weixin.qq.com/s/P-YlSdBXlmgmcPN18Hi8GA](https://mp.weixin.qq.com/s/P-YlSdBXlmgmcPN18Hi8GA)

文章来源：机车电传动

作者：忻兰苑1，林珍君1，陈燕平1，王晓年1，徐绍龙2（ 1. 中车株洲电力机车研究所有限公司，湖南株洲 412001；2.株洲中车时代电气股份有限公司，湖南株洲 412001 ）  

摘 要：文章深入分析了3.3 kV SiC MOSFET的电气特性，全面梳理了当前SiC驱动器的研究现状。在此基础上，详细阐述了高压SiC MOSFET驱动器的设计方案，比较了其与传统IGBT驱动器的技术差异，设计了一款具备多级软关断功能的3.3 kV SiC MOSFET数字驱动器，并通过双脉冲测试、短路测试和功率试验 对该驱动器进行了全面的功能验证和性能评估。试验结果表明，这款驱动器具有瞬时驱动电流高、栅极串扰低、短路保护速度快的特点，多级软关断功能在减少电压应力的同时还能缩短关断时间，实现器件的快速关断。  

关键词：SiC MOSFET；驱动器；多级软关断

0.引言  

低碳、节能是目前我国轨道交通行业主要的发展方向。电能作为轨道交通车辆消耗的主要能源和运营的主要成本，如何降低能耗备受关注，而牵引系统和辅助供电系统作为车辆主要的耗能部件，其节能减重 是重点研究方向。 

作为新一代半导体材料，SiC具有宽禁带、高击穿场强、高热导率、高电子漂移速率等特点，相比Si基材料，以 SiC材料制成的功率器件具有更高的工作温 度、更高的阻断电压、更高的工作频率以及更低的导通电压。  

SiC MOSFET 兼具 Si MOSFET 和 Si IGBT 的优点。 由于SiC 具有高击穿场强特性，相比Si MOSFET，其阻断电压可以提升至更高，阻断电压范围基本覆盖Si  IGBT的电压等级，并且具有更低的导通压降。同时， 由于SiC MOSFET为单极型器件，其开关速度更快且没有拖尾效应，相比Si IGBT，具有更低的开关损耗和更高的开关频率。 

尽管IGBT在运行结温、损耗特性等方面也在不断优化升级，但是仍然受限于Si材料和双极型器件自身的局限性。随着SiC技术不断成熟，SiC MOSFET为轨 道交通变流装置提供了一种新的选择，同时也为变流技术的升级提供一种新的可能。 

目前，在轨道交通牵引应用中，主要使用3.3 kV电压等级的 IGBT，如采用 SiC MOSFET 进行替换，可大幅降低损耗、提高应用频率和功率密度。相比IGBT，SiC 器件具有更低的导通电压阈值、更快的开关速度、结电容小等特点，因此直接将IGBT驱动移植到SiC应用方面不可行，需要根据SiC器件的特点对驱动器进行专门的开发设计。 

有关 SiC MOSFET 驱动器设计的研究大多聚焦于1.2 kV 电压等级的低压器件，在这一电压等级方面存在较多成熟的驱动隔离芯片供选择，降低了驱动器设计的难度，而关于3.3 kV电压等级的SiC驱动器研究较少。文献\[6\]提出了3.3~15 kV SiC MOSFET驱动器设计需要重点关注的问题，如绝缘设计和过流保护设计，但是并未就某一具体 SiC 器件开展驱动器设计。文献\[7\]设计了一款用于 3.3 kV SiC MOSFET 的即插即用型驱动器，但是驱动逻辑单元采用商用驱动芯片实现，研究重点为功率PCB的寄生电感对器件开关特性的影响，对驱动器设计未做深入的探讨。 

本文对3.3 kV的全SiC MOSFET器件进行了电气特性分析，基于轨道交通的应用需求，结合原IGBT驱动的技术平台，基于逻辑门阵列（FPGA） 芯片开发了一款3.3 kV SiC MOSFET专用的即插即用驱动器，并通过双脉冲试验和短路试验开展了驱动器的功能和性能验证。  

1.SiC MOSFET特性  

SiC MOSFET与Si MOSFET、IGBT一样都为电压控制型器件，因此驱动器的基本实现方式和功能比较相似。 

根据芯片栅极结构，可分为平面栅和沟槽栅。其 中，平面栅所承受的电场强度更低，工艺实现难度相对较小，更有利于制作高耐压等级器件，目前大部分3.3 kV电压等级的SiC MOSFET采用平面栅。沟槽栅由于具有更小的元胞尺寸、更低的沟道电阻、更小的米勒电容等优势，在进一步降低损耗、提升电流密度方面有较大潜能，依然是未来重要的发展方向。  

3.3 kV全SiC器件采用新型开源半桥标准封装，从结构形式上分为两种：一种接近IGBT的形式，器件内部的MOSFET芯片与SBD芯片反并联；另一种内部只有MOSFET芯片，利用体二极管和MOSFET沟道流通反向电流。  

SiC MOSFET与IGBT相比存在较大的物理性能差异，SiC MOSFET具有更快的开关速度、更小的损耗、反向恢复应力更小的特点。更快的开关速度意味着器件开关瞬间有更高的dV/dt，以3.3 kV电压等级的SiC  MOSFET与IGBT为例，SiC MOSFET 的dvdt可达12~ 18 kV /μs，而IGBT仅为2.2 kV/µs。 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOy4aSicpbldI5gDvkibwAZTcRhqRSmGoePa7AA43HeuiclkMpvzPMYUD8qiczWajHJuTHcGspfnG5IAuGnLNNePkhicJm24hEI1uYY/640?wx_fmt=png&from=appmsg)

表 1 列出几款 3.3 kV、相同电流等级 IGBT 和 SiC器件的部分电气参数。由表 1 可知，SiC MOSFET 的栅极电压与 IGBT 的栅极电压有较大不同，3.3 kV 的IGBT栅极电压均为±15 V，SiC MOSFET栅极关断负压为-5 V，栅极开通电压为15 V或17 V。在设计SiC驱动隔离电源时，需要关注 SiC MOSFET 栅极负压与IGBT栅极电压的差异。

对于阈值电压Vth，SiC的阈值电压根据厂家的不同有所差异，但均低于IGBT，当结温升高后，Vth还会进一步降低，过低的阈值电压会加剧串扰带来的负面影响。

当功率器件开通或关断时，对管会通过米勒电容在栅极产生正向或者负向的电压尖峰，称之为串扰电压。以半桥电路为例，当上管开通时，下管漏极（D） 的电位迅速抬升，米勒电容CGD向栅极放电产生电流，一部分电流向栅极电容CGS充电，另一部分电流通过栅极电阻流向驱动器，使得栅极电压VGS抬升，产生正向串扰。反之，上管关断时，电流方向相反，VGS下降， 产生负向串扰。栅极串扰产生的原理如图1所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNRLkLcDKA4D8dpx7lZeCMhEWClrsvEjTABIiawY5iaaZMI9pcPsVkJHKYUk5xW9Bn2ZSvv45Zplb1DWeWjdVzlvbcNeuGL1A7W4/640?wx_fmt=png&from=appmsg)

正向串扰电压容易导致对管误开通，负向串扰电压容易导致SiC器件的栅极电压超出最低负栅压的限制值，引发栅极失效。串扰电压的大小与器件的dVDS/dt及结电容相关，当SiC MOSFET 开关时，会产生数倍于同规格IGBT的dVDS/dt值，造成较大的串扰电压，同时SiC器件更窄的栅极电压范围对串扰的冗余范围更窄，进一步加剧了串扰带来的负面影响。因此，在SiC  MOSFET应用中需要特别关注串扰电压幅值，当串扰电压值过高时应采取必要的抑制措施。

常见的抑制串扰电压方法有减小dVDS /dt、增加外部栅极电容、减小栅极电阻，这些方法简易便捷，但是会影响功率器件的开关特性；也可在驱动器设计时增加米勒箝位电路，为处于关断状态的器件栅极提供一条低阻抗路径，快速泄放串扰能量。  

SiC MOSFET芯片面积比Si IGBT小，发生短路工况时电流比IGBT更大，而短路时SiC MOSFET芯片内部的温度分布更加不均衡，且上升速率更快，从而导致更快达到临界温度而发生失效。通过表1列出的短路时间 TSC 可看到，IGBT 可承受10 µs 短路，而 SiC  MOSFET仅3~4 µs，因此驱动器需要有更短的短路检测时间和更快的保护响应速度。  

SiC MOSFET更快的开关速度使其对驱动回路的寄生参数更加敏感，驱动回路上过大的寄生参数容易引发更多振荡，影响SiC器件的动态特性，因此驱动器与SiC器件的连接方式需要谨慎评估。

2.驱动设计  

2.1驱动架构  

3.3 kV SiC MOSFET器件为半桥器件，内部有2只开关管，中间部分为辅助端，直流端和交流端分别位于辅助端两侧。 

本文设计的 3.3 kV 驱动器采用叠板结构，上下层叠板之间通过排针进行硬连接，下层板直接安装在SiC  MOSFET器件上，如图2所示。轨道交通用3.3 kV功率器件驱动器常见的互连方式为驱动器通过导线与安装在功率器件上的适配板连接。相比传统的导线连接， 排针连接使得栅极回路的寄生电感值更低，可有效减小器件栅极的正向串扰峰值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMffj9Sic2CmlXWbgqZGPpI1ITwRPgFzctjwRvM6tJoQiaFH9uQE9YR7Jcffvp5eKmtT5wYpiaLv5nD4RVOfbeDGE4MGWcnAJ1iaaU/640?wx_fmt=png&from=appmsg)

驱动器整体架构如图3所示。其中，驱动隔离电源的输入侧采用 15 V 供电电源，输出侧分成 2 路供电， 分别驱动功率器件的上开关管和下开关管；PWM脉冲信号和故障反馈信号位于驱动电源的输出侧，通过光纤通信的方式与上级联通，相比通过隔离芯片实现信号隔离的方式，光纤通信具有更强的共模抗扰能力； 驱动逻辑功能由FPGA实现。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOxiaDL1t3B54YjJ2LibJN1YcpeeDtBeWzAIrkANDZRDiclyDMcmfl54D5E9f2Jn8LGarTCnj0ibBRhzibBs5oEW7BslGMZ9JjKRUVI/640?wx_fmt=png&from=appmsg)

2.2驱动电源  

驱动电源采用推挽电路，通过变压器实现输入与 输出、两路输出的隔离，变压器的耐压根据3.3 kV SiC  MOSFET 实际应用的母线电压选取为 6.0 kV，驱动电源每路可输出5W功率。 

当SiC器件开关时，输出侧产生较高的dVDS /dt， 形成高频干扰源，变压器内部的寄生电容为高频信号提供耦合路径，容值越大、阻抗越小，导致输入侧产 生共模干扰。因此，在设计驱动器时，隔离变压器的耦合电容小于10 pF。 

由表1可知，SiC MOSFET的QG约为同规格IGBT的1/6~ 1/5，但是应用开关频率可达到5~10倍。栅极功率为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNV5Dz3WxIJVJZaejx4rAxuibsVFhkOZUVXuCYeOEZic4TnEM7jMDWXibfwbML1ctI3qhwpbkTnpJ8OgWa7wunFibk5KMzrxEogL1g/640?wx_fmt=png&from=appmsg)

式中：QG为栅极电荷；VG\_ON为栅极开通电压，VG\_ON\= 15V；VG\_OFF 为栅极关断电压，VG\_OFF\=\-5 V；fSW 为开关频率。 

根据轨道交通SiC牵引变流器的应用工况，开关频率约为2 kHz，因此该驱动器隔离电源功率满足需求。 驱动器输出侧的3.3 V电源用于FPGA等逻辑电路供电。为确保电源可靠工作，设置了欠压检测电路 （15V, \-5 V, 3.3 V）。为确保SiC器件栅极始终处于正常工作范围，15 V电源的欠压保护阈值为12.6 V。  

2.3驱动逻辑功能  

驱动器输出侧采用FPGA芯片实现逻辑功能，包括PWM 信号处理、短路故障信号处理、欠压信号处理等。外部通过光纤输入PWM信号，在FPGA中进行信号处理，生成功率器件开通和关断信号。短路检测电路和欠压检测电路将处理完成后的信号输入到FPGA， 当发生功率器件短路或者电源欠压时，FPGA立刻发出停止功率器件开通的信号，并通过光纤向外部控制器反馈故障信息，若发生短路故障还会额外触发软关断功能，并进行故障锁存。FPGA的逻辑功能和主要信号时序分别如图4和图5所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNaHhDZ4JStWwHJPRlutPs41ppsQhSRoVlf890iaib76IMVibrh9M2cYlMbxKgPfv8kRZK1BhjAianpvVKICCDWoXvIDGiaiaWVNP64o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNic23ibVv14xr17x9OLXpqcgNUFvfHufJ0mFN0EhITjIiaM35Ut6FYaPN0UP60ib5pISzpCJVBrQS6ia2Tu2qxQbvZVooaUPiaVzabw/640?wx_fmt=png&from=appmsg)

2.4驱动放大电路  

逻辑单元发出的开通/关断驱动信号为3.3 V电平，无法满足SiC栅极驱动要求，需要配置驱动放大电路，即通过MOSFET栅极驱动器芯片推动一对PMOS(Q1)和NMOS(Q2)，如图6所示。当逻辑单元发出开通信号时，Q1导通；当逻辑单元发出关断信号时，Q2导通。 为防止Q1 和 Q2 发生贯穿、减少功耗，在开通和关断信号之间设置0.1 µs的死区时间，如图5所示。Q3为软关断NMOS管，当软关断功能被触发时，软关断电阻RG\_SS将SiC器件的栅极电压拉低到0 V，降低关断时的电应力。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPcMuByP8m64Tia06udVEXibHzgNFJ93CpJnmz821dMY37ylXTkWIKZE6mPpWkpCmfLJdmnPD0VCZLeEiatO4D7Q2IezT8BTfxX8I/640?wx_fmt=png&from=appmsg)

SiC MOSFET在开关时会产生较大的瞬时栅极电流IG，在设计时需要选择合适的Q1和Q2，使其电流峰值满足栅极瞬时电流要求。栅极电流IG为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOH2R2njEpLAYOBre6ZG5eBm0wnfUTjMHIgZjqtCib2zeiaEYEzbcENUlz1KPCzTnj6gAsXZRK1sC3icIco1HlrY25zr6TZjfGLok/640?wx_fmt=png&from=appmsg)

式中：Rint为功率器件内部栅极电阻；RG为驱动电阻；RMOS为Q1和Q2的导通电阻。 

在 IGBT 驱动中，Q2 的 S极连接负电源，一般为\-15 V，Q2栅极信号以0 V为高电平，\-15V为低电平。 在SiC驱动设计中，负电源为\-5V，若Q2的栅极信号 依然以0 V为高电平，那么电压DVGS只有5 V，这会极大限制Q2的电流输出能力，影响SiC MOSFET的关断特性。因此，在驱动器设计时，需要将Q2的栅极信号电平移位为\-5 V和10 V。当SiC MOSFET开通时，Q2的栅极信号为\-5 V，电压DVGS为0 V，确保Q2保持关断状态；当关断时，Q2的栅极信号为10 V，电压DVGS为15 V，为确保Q2的瞬时电流能力，设计最大瞬时值为50 A。  

2.5短路检测和保护电路  

SiC MOSFET能承受的短路时间远小于IGBT，因此整个检测和保护环节需要快速响应，逻辑电路响应时间很短，且方便通过软件调节，能更好地适应不同的SiC器件应用需求。

常见的短路检测方式有VDS 退饱和检测和 di/dt检 测。VDS检测使用最为广泛，检测电路有二极管和电阻2种，其中二极管检测电路器件用量较少，在驱动器尺寸受限的情况下更加适用。di/dt检测电路基于SiC器件功率S极上的寄生电感，通过检测其压降值来判断电路是否发生短路。但是当杂感或di/dt过小时，难以确保检测的准确性。 

退饱和检测方式能同时实现过流检测和短路检测，当检测电压达到阈值Vref时，比较器将过流或短路故障信号输入给逻辑电路，并在3~4 µs内触发软关断功能， 具体如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOAc1s7bfMtEI6s1HcTMLA85ul3oMwB4gB4aiaF4KK6Lh4R1xpB2fia3EMiaXhHUV75SwEvOLnv84DSRicLJhQ32byI8Cib6H800udY/640?wx_fmt=png&from=appmsg)

3.试验分  

3.1主电路  

为验证该驱动器的功能，搭建半桥测试电路，如图8所示。在图8中，以下管S2为被测管，上管S1作为陪测管，为避免栅极串扰电压引起陪测管误开通， 需要在栅极提供恒定的负压；Cd为直流母线电容，先由高压直流电源预充电至试验电压，然后断开充电开关K，当被测管导通时由Cd提供能量。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMIAgEjCgu8CR6wnuWBVupFGJykLyJe7jRY6oNKDLiaMmqm7yKHD2XZYXh7X6R0lzrCYCoMp8CJQKEFMOcUXLScXorQnzxOl0qI/640?wx_fmt=png&from=appmsg)

3.2开关特性试验  

图9为3.3 kV/750A的SiC MOSFET器件在1.8 kV/ 750A时的开关特性测试波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQGF9mk9N2EN3PibMcY0aV6zGT5Vqc60ibrTQEmDicniaduYj3CFMfkEDjvD2oglwvibxCYUZibynSs3vQKK7OGnbSonqh7H8LcdrFI/640?wx_fmt=png&from=appmsg)

由图9可知，随着栅极电阻增大，开通和关断时间变长，di/dt、dV/dt斜率明 显变缓；由于被测 SiC 器件内部并联了 SBD 芯片，因此开通时几乎没有反向恢复电流，反向恢复能量Erec极低，同时也能减小开通损耗EON，VDS下降时没有IGBT常见的拖尾电压，进一步减小了EON；关断时同样没有IGBT的拖尾电流，VDS以远高于IGBT VCE的速率上升， 因此关断损耗EOFF很小。 

针对不同的功率器件，使用相同驱动电阻RG\_ON \=1.65 Ω、RG\_OFF \=3.30 Ω开展不同输出电流测试， 如图10所示。由图10可知，驱动信号一致性较好，随电流增大开通时间变长、关断时间变短。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNt4W5Sic1FHwZdTj989v56y4ib0B8k3lmEgx81rHMJ97WFO0Yh0PehQfgklXBM8nthSKth6KRJYEFnsKymDpJK6QeockVAXZMmg/640?wx_fmt=png&from=appmsg)

3.3驱动能力  

根据驱动放大电路设计中的结论，当图6中NMOS(Q2)的栅极电压沿用 IGBT驱动设计时，会导致Q2 无法输出足够的瞬时电流，SiC MOSFET的关断栅极电流变小，关断速度受到影响。图11为栅极瞬时驱动电流能力对功率器件动态性能影响的示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMNjnPQ4wYicTrD7OqibXc77CZ8cvlu0c7mO2Nz6mUPKZQWAVNJXACNOZ29BBUthoVBEYGREicxyeqneDTr37czUdGbibY7rALKk2E/640?wx_fmt=png&from=appmsg)

由图11可知，对IGBT驱动器仅改变栅极负电源值，并直接作用于SiC MOSFET 时，在同样的关断电阻RG\_OFF和相同测试条件下，IGBT驱动器对应的关断能量EOFF、关断时间tOFF都在增大，且随着RG\_OFF的改变，EOFF、tOFF 变化幅度非常平缓，这说明受限的NMOS 输出能力也限制了驱动电阻对 SiC MOSFET 关断特性的调节能力。  

3.4多级软关断  

驱动器通过检测SiC MOSFET的VDS电压来进行故障识别，实现过流保护和短路保护。当VDS超出阈值电压时，图7中驱动器故障检测电路的比较器发出故障信号，逻辑电路动作，触发软关断功能。图12为软关断和正常关断的电路波形，表2为软关断和正常关断试验数据对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNW1FSsaBL30ehygnwFHMBK2BK8Qw5UV29ypHiba8e6hnJw9r5HbDrUFZibAjvWxFRJznsBzjeBV2YiciaBVwgSC3CiaKFdFku5c8O0/640?wx_fmt=png&from=appmsg)

由图12可知，在时刻t0，栅极电压VGS开始下降，此时图6中的关断NMOS(Q2)和软关断NMOS(Q3)同时工作，加速关断时间；在时刻t1，Q2停止工作，Q3单独工作，通过降低关断速度抑制关断电压尖峰；在时刻t2，VDS电压已经建立，Q3停止工作，切换至正常关断信号，加快栅极电压下降，信号时序如图5所示。 

由表2可知，这种多级软关断功能能有效降低VDS电压上升速率、抑制关断时的电压尖峰，避免大电流关断时产生过大的电压应力；同时，从波形中也可看到，与传统的软关断相比，多级软关断不会延长关断时间，可以安全并快速地切断电流。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP7epOh3cn99RibPAQWiaCiblOFWuTVVBIbib9QaEkqY4gZU9pYvVXaXXb5IG792WdmWibwV8rQIHTcEVia4Wia6jcvXW8CrdXakNneUU/640?wx_fmt=png&from=appmsg)

3.5短路试验  

当IGBT短路时，电流会迅速上升到峰值之后维持在相对恒定的饱和电流值，而SiC MOSFET很难达到饱和电流，短路电流线性上升，其斜率由短路回路阻抗决定，因此需要及时关断SiC器件，防止电流继续增大引发热失效。图13为短路测试波形。由图13可知，SiC驱动器能迅速检测到短路故障并执行软关断，有效保护了SiC MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPdXu6q8YicBUia7R308b647CL3581ptkopyaTel9A0wqHzdTvuMZb2VQJfgt7e6pW1TxH1gOSby15ic45r6V4Gictd6FOmYxqHUdw/640?wx_fmt=png&from=appmsg)

3.6功率试验  

将该驱动器装备于SiC MOSFET 三相逆变器中，在直流电压 1.8 kV、开关频率 1~5 kHz、电流 200~500 A 的工况下进行功率试验，各项性能指标均满足技术要求，设备能够正常运行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOX2EhbibWwRiapQVoickcoE8bicjKgDrdsQhxtkBiccXxQ45bJmjdA9r2YaXzJMKS8sS0ibx5YJLkApHU55CtyYVoYzcMMU43Lt9SRg/640?wx_fmt=png&from=appmsg)

图14为开关频率2 kHz、逆变输出电流375 A的试验波形。 

图15为功率试验时有关信号波形的放大图。由图15 可知，当上管开通或关断时，下管SiC MOSFET 栅极的串扰电压幅值很小，不会对SiC器件的运行造成影响。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPt1xYjMvTNje6Dv4v8Q7ibLicZS9KQcfrkBm54cMsLOcaVjYpu1puJIPhwn5cWFwOHZcmvUSBP8JPHPO3OmAXDjOiaUlAJXtdaZk/640?wx_fmt=png&from=appmsg)

4.结论  

本文通过对 3.3 kV SiC MOSFET 器件的电气参数及其行为特性进行分析，总结了大功率高压SiC驱动器的设计要点。基于3.3 kV全SiC功率器件开发了一款数字驱动器，从电源、功率放大、短路检测与保护等方面详细阐述了驱动器设计的关键技术，并通过试验验证了驱动器的功能满足 3.3 kV 大功率 SiC MOSFET 的应用，充分证实了分析和设计的有效性，为高压大功率的SiC MOSFET 器件应用提供了技术保障。该驱动器采用FPGA芯片实现驱动逻辑功能，不仅可以有效减小驱动器尺寸，而且能进一步实现故障的分类分级、 故障信息存储等丰富功能。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMcgibv3WGLQYE9M3DkhliauS5E3IeibqeJbD55vSazCA0xrlH1KE9e1dqeLIOacLu15eyOCus1AjGK1BJUHV154ljmQHia0VGe8Bk/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNorfWbWYWnSOXKvbYicb2PEmUWBpqYXOU7vLo3qXL2tzpQicI0rricxLVI1aGibXyiaboEWU9q53Hbr3gpzNFq5W4iby97iaHbeALgY0/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP7T6BWGRCeeMIaJib5ttNic8ia11hKhE6ibesAnibFHj9iaoicyXNwdE4lVMw1MiblyJDKxaiaeqmwA9pQDM2dwhBOm5Mru15dUm8YO7E8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNfGDMqL5KibQctyd5HqW06Y4uCKXibE9z7MKteadLEHDRujV4DposfcKWCJuj7XoT0dbKn4ibsrHQcfRpM0OuiaicAibv96TpRBZFMY/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)