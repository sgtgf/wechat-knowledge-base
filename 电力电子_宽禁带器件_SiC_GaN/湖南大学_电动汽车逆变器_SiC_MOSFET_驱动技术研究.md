# 湖南大学：电动汽车逆变器 SiC MOSFET 驱动技术研究


> 原文地址: [https://mp.weixin.qq.com/s/FWAi6SYgOgAQMAA-RkC4pw](https://mp.weixin.qq.com/s/FWAi6SYgOgAQMAA-RkC4pw)

**文章来源：**湖南大学电气与信息工程学院

**作者：**苏杭（硕士学位论文）

**摘 要：**电动汽车的发展对电机控制器的小型化、轻量化和高能效提出了更高的要求。以 SiC MOSFET 为代表的宽禁带器件超越了传统硅基功率器件在电压等级、开关频率与工作温度上的极限，可降低电机控制器的体积、重量和成本，提高系统效率，在电动汽车应用中具有明显优势。驱动电路影响着电机控制器的性能与可靠性，驱动技术研究对 SiC MOSFET 在电动汽车中的应用有着重要意义。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmVKN2y13WhzklDnSicaaEJ8ONLSnV5QFQ2GibpAKIGemlU79hoRNlHJmVwK2ChArgRNlkJJLonS7Ug/640?wx_fmt=jpeg&from=appmsg)

本文分析了 SiC MOSFET 的器件特性，研究了 SiC MOSFET 在高频应用中的主回路振荡与驱动回路振荡产生机理。针对 CREE 1200V/300A 半桥模块，搭建了包含寄生参数 LTSPICE 仿真电路，并通过理论分析和仿真研究了驱动参数对 SiC MOSFET 开关瞬态的影响。

根据电动汽车逆变器驱动电路的要求，设计了 60kW 碳化硅逆变器的驱动电路，其具有信号隔离、缓冲放大、有源钳位、栅极钳位及两级过流保护功能，并针对减小驱动回路寄生电感，提出了驱动回路低阻抗路径的布局方案。制作了驱动板并搭建了实验样机，通过双脉冲实验测试了 SiC MOSFET 的开关性能并选择了最优的驱动电阻与栅极电容。通过过流保护实验验证了本文设计的过流保护电路可以正常动作，过流点与设计值接近。通过电机台架试验对逆变器进行了功率测试和桥臂串扰测试，结果表明串扰电压在安全范围内，本文所设计的的驱动电路能有效保障逆变器的安全可靠运行。

传统驱动电路使用固定驱动参数，无法有效利用 SiC MOSFET 高速开关的优点，为此本文提出了一种新型主动驱动电路，其通过 di/dt 检测电路与分流电路对电流上升与下降时间进行控制，在相同电应力条件下降低了开关延时与损耗。此外，本文还研究了基于主动驱动电路的结温控制策略，基于 SiC MOSFET 的损耗模型，通过改变驱动电压与驱动电阻对导通损耗与开关损耗进行控制，以降低负载变化造成的结温波动。建立 LTSPICE 模型进行了仿真分析，结果表明使用结温平滑控制后可显著降低 SiC MOSFET 的结温波动，提高了逆变器的功率循环次数。

关键词：电动汽车；SiC MOSFET；振荡；串扰；保护电路；主动门极驱动

（AGD）

第1章 绪论

1.1 课题研究背景和意义

为了实现经济社会可持续发展，能源转型以及环境保护问题成为了国际各界关注的重心。电动汽车的发展可以降低我国对石油进口的需求，保障我国的能源安全，同时也有利于防止大气污染和节能减排政策的实施。2018 年，全球新能源乘用车销量超过 201.8 万辆，同比增长 65%；中国作为全球最大的电动汽车市场，2018 年新能源乘用车销量达 125.6 万辆，占全球市场的 62.2%。国家的“十三五”战略性新兴产业发展规划，将新能源汽车作为重点支持的范围。

随着电动汽车的发展，对电机控制器的小型化、轻量化和高能效提出了更高的要求。美国能源部制定的 2020 年电动汽车发展目标要求电机控制器的功率密度达到 13.4kW/L，效率超过 98%且成本低于 3.3 美元/kW。在《节能与新能源汽车技术路线图》中，提高电驱动系统效率和新型电机控制器技术是纯电动和插电式混动汽车的发展重点之一。

在当前纯电动和插电式混动汽车动力系统中，多采用传统硅基材料为主的IGBT 或功率 MOSFET。在大功率电机控制器中，为了提高效率往往使用更高的直流母线电压，目前驱动逆变器的输入电压已经从 300V 发展到了 600V。在此电压等级下，硅基 MOSFET 由于导通内阻较高会产生过大的导通损耗，而硅基IGBT 又存在着电流拖尾问题，开关损耗较大。在高温、高频和高功率应用领域中，传统硅基器件已接近材料本征极限，难以满足电动汽车的发展需求。

以碳化硅(Silicon Carbide，SiC)为代表的第 3 代半导体材料具有宽禁带、高饱和速率、高导热率和高击穿场强等特性，表 1.1 给出了 Si 和三种 SiC 半导体材料的物理参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMKYx0xz1WNdkT2APiaLCPJdlaBDk2PGn91jSPdpFnicBe8IRqPwgwywJA/640?wx_fmt=png&from=appmsg)

SiC 功率半导体器件打破了已有硅基半导体器件在电压等级、开关频率与工作温度上的极限，可降低电机控制器的体积、重量和成本，提高系统的性能。研究 SiC 功率器件在电机控制器中的应用，是推动电动汽车行业发展的重要路径之一。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM6ms0ZKmL8zEIZibftDWSqZegSF4pQggiaSm1FtF27SV6gNUqd8Cev1nA/640?wx_fmt=png&from=appmsg)

根据 IHS 在 APEC2016 会议关于 SiC 发展历程的报告\[7\]，2001 年英飞凌（Infineon）公司首先推出了 SiC SBD（Silicon Carbide Schottky Barrier Diode，碳化硅肖特基二极管），相对于硅基肖特基二极管，其拥有更高的耐压和更快的反向恢复速度；2006 年首款 SiC JFET（Silicon Carbide Junction Effect Transistor，碳化硅结型场效应晶体管）上市；2010 年，罗姆（ROHM）开始生产 SiC MOSFET（Silicon Carbide Metal-Oxide-Semiconductor Field-Effect Transistor，碳化硅金属氧化物场效应晶体管）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX9P3vkau858X9wxWxibVmNzUYMpPiayfBuSeIYKSjlbLJqOAA4tYyWMw/640?wx_fmt=png&from=appmsg)

2012 年科瑞（CREE）公司量产 6 英寸碳化硅晶圆，标志着碳化硅功率器件走向市场化。2017 年 2 月，科瑞公司发布了第三代 1200V SiC MOSFET 器件，美国环境保护局（EPA）对其进行了续航标准测试，相较于传统硅基逆变器，SiC 器件使 EV 电机驱动器的损耗降低了 78%。

在过去的几年中，碳化硅功率器件研制取得了重大进展。2017 年 8 月，中科院微电子研究所和中车时代电气研制出五种 650V~5000V 不同电压等级的 SiC SBD 和三种 600V~1700V 电压等级的 SiC MOSFET，部分产品已在光伏逆变、轨道交通和电动汽车等领域应用。

目前碳化硅功率器件中，SiC SBD 和 SiC MOSFET 研究最为成熟且得到了广泛应用，其他常见器件如 JFET、BJT、IGBT 等相关技术尚不成熟，例如 SiC IGBT导通电阻较大，SiC BJT 存在电流控制不稳定问题，目前还处于持续研发阶段。

SiC MOSFET 极快的开通与关断速度对因封装、布线及应用电路引起的寄生参数和器件自身的结电容等非常敏感，在高压和高开关速度的应用场合，环路内出现很高的 dv/dt 和 di/dt，因寄生参数的存在极易产生开关振荡以及驱动失效等问题，进而明显降低了 SiC MOSFET 应用电路的输出能力和电磁兼容性。而且上下桥臂中的 SiC 器件通常工作在互补开通模式，产生的 dv/dt 在器件的寄生电容上形成位移电流引发串扰，使得更低门槛电压的 SiC MOSFET 更容易发生桥臂直通而导致器件击穿损坏。

在电动汽车电机控制器中，需要研究 SiC MOSFET 快速、高频开关和高密度集成所造成的振荡与串扰特性、高频支路特性，掌握振荡、串扰产生和传播的规律，在驱动电路设计中解决 SiC MOSFET 高速开关所造成的电磁干扰的问题。另外，电动汽车电机控制器需要在更高的环境温度下工作，设计匹配 SiC MOSFET的汽车级驱动电路是宽禁带半导体器件在电动汽车应用中发挥优势的关键因素。

本论文的选题来源于湖南省战略新兴产业科技攻关与重大成果转化专项项目“新能 源乘 用车用 高效高 功率 密度电 机控制 器的 研究与 应用”（项 目编 号：2017GK4020）。

**1.2 国内外研究现状及分析**

**1.2.1 SiC MOSFET 驱动电路研究现状**

近几年，随着 SiC 功率器件的商业化和成本的降低，SiC MOSFET 驱动电路成为了研究热点之一。表 1.2 中给出了 6 种 1200V 功率管的参数，相对于硅基IGBT 和硅基 MOSFET，碳化硅 MOSFET 的寄生电容较小，更容易受到驱动电路的寄生参数影响；此外，其栅极耐压与阈值电压更低，驱动电路产生的震荡或串扰可能造成栅源极氧化层的击穿或器件的误导通，影响系统的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMS4b3wic9ebJCibecELiaKicJS3wViaMyXpkyJx8cwTqHiaNP17lI8hBtIucQ/640?wx_fmt=png&from=appmsg)

根据 SiC MOSFET 的特点，驱动电路的设计应该满足以下要求：

(1)驱动电路的响应时间快，驱动电流大，以发挥其快速开关的优势；

(2)减少驱动回路寄生参数，避免产生不必要的振荡，增加钳位电路和吸收电容，减小电压尖峰增强门极稳定性。

(3)使用负压关断或米勒钳位，保证器件可靠关断，避免桥臂噪声干扰。

目前，各大 SiC MOSFET 生产公司都提供了参考驱动电路。CREE 公司为其第二代 1200V SiC MOSFET 半桥模块设计了 CGD15HB62P1 驱动板，其供电电源使用+20V/-5V 隔离电源模块，可提供最大 9A 峰值驱动电流，信号隔离使用英飞凌 1ED020I12-F2 磁隔离驱动芯片，最大开关频率可达 64kHz，并具有退饱和检测功能。ROHM 公司为其分立 SiC MOSFET 功率器件提供 BM6104FV-C 芯片，其最小延迟为 150ns，最小脉冲宽度为 90ns，内置米勒钳位功能、故障信号输出功能、低电压时误动作防止功能、短路保护功能和栅极状态监视功能。比利时高温半导体供应商 CISSOID 公司为其 1200V/100A SiC MOSFET 智能功率模块设计了高温驱动电路，如图 1.3 所示。其使用绝缘体上硅(Silicon OnInsulator, SOI)工艺，可在200°C 以上的环境下稳定工作，每个半桥使用 3 个 HADES2 驱动芯片，使用分立变压器隔离，二次侧驱动芯片 CHT-HADES2P 具有电源驱动和信号调制功能，一次侧驱动芯片 CHT-HADES2S 具有信号解调，缓冲放大，低电压检测和退饱和检测功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMws6MvGx00K0EP0LAtMyuXriakf2xDAlFdceyZypMoHy6qzJl6PCXCMw/640?wx_fmt=png&from=appmsg)

在 SiC MOSFET 驱动电路设计方面，文献\[24-26\]使用传统 Si 器件驱动芯片设计了驱动电路，使用正负双电源供电，三种方案均采用磁隔离方式，并利用驱动芯片集成的保护功能。文献设计了基于分立器件的驱动电路，使用脉冲变压器将控制电路与栅极驱动隔离，并在一次侧与二次侧对 PWM 信号进行调制与解调；驱动电路使用并联 BJT 提供栅极电流，选用耐高温被动元件，可在 150°C以上的环境温度下工作。为了发挥出碳化硅 MOSFET 优异的高温性能，文献。

设计了基于 SOI 工艺的半桥驱动 IC，其具有电平位移、短脉冲抑制、电流缓冲功能及图腾柱式输出结构，上升下降时间均小于 100ns，适合 500kHz-1MHz 应用，该驱动电路经过了 420°C 高温测试，并应用于丰田普锐斯充电模块中。SiC MOSFET 的短路电流大且短路承受时间比 Si 器件短，对短路保护电路有更高的要求。文献采用了使用去饱和检测法对 SiC MOSFET 进行短路保护，但未对保护点设置与保护时间进行分析计算。文献对三菱 1200V/800ASiC MOSFET 模块设计了过流保护电路，其使用镜像电流法进行过流检测，并使用比较器与 D 触发器控制软关断电路完成过流保护。文献使用 PCB 布线与过孔组成了小型罗氏线圈，安装在 SiC MOSFET 功率模块的接线端子上，并通过积分电路对还原漏极电流进行过流保护，其响应速度小于 20ns。

SiC MOSFET 的开通与关断易受杂散参数的影响，选择合适的驱动回路参数可以最大程度发挥出 SiC MOSFET 的性能。在驱动参数优化方面，文献对SiC MOSFET 开关过程进行建模，并对开关过程中的振荡及串扰产生原理进行了分析。文献分析了不同栅极电阻、栅极电容与栅极电压对器件开关的影响规律，通过调节驱动参数降低过电压与过电流的同时会减慢器件的开关速度，增加额外的开关损耗。文献研究了寄生电感对开关瞬态的影响，并给出减小驱动回路寄生电感的布局建议。

SiC MOSFET 驱动电路方面的研究主要集中在高温应用与降低器件应力方面，对电动汽车逆变器驱动电路的研究较少。与工业用电机控制器相比，电动汽车电机控制器对环境温度、电磁兼容性与功能安全性有更高的要求。

**1.2.2 主动驱动技术研究现状**

传统驱动电路无法动态改变驱动参数，往往为了限制过电压与过电流而选择较大的驱动电阻和栅极电容，降低了开关速度，无法发挥出 SiC MOSFET 高速开关的优势。主动驱动电路（Active Gate Driver, AGD）是在传统驱动电路中加入有源控制器件，可根据需要调节驱动参数控制器件的开关特性，可以在保持开关速度的同时，减少电压尖峰与电流过冲。

主动驱动电路调节驱动参数的方法主要分为三种，即变驱动电压、变栅极电阻和变栅极电流。文献采集 SiC MOSFET 的栅极电压，并使用比较器判断开关阶段，使用短路电阻法调节 di/dt 和 dv/dt，在控制相同电压过冲与电流过冲的条件下，比传统高栅极电阻驱动开关损耗降低了 57%，文献也采取类似变驱动电阻的方法，通过设置不同的开通关断电阻控制 SiC MOSFET 的开关过程；文献使用+25V 主驱动电源与+5V 源极升压电源组合成四种驱动电压动态调节，相对于传统驱动电路降低了开关延时与开关损耗；文献在驱动电路中添加了镜像电流源，分别通过检测 SiC MOSFET 的电压与电流对驱动电流进行闭环模拟控制。

针对主动驱动技术控制算法时效性要求过高问题，文献设计了一种开环主动驱动电路，其通过定时器设置各阶段间隔，无需对开关阶段进行监测，并对高速开关中的死区效应进行了补偿。

针对桥臂串扰问题，文献设计了两种抑制串扰的主动驱动电路，一种通过增加 NMOS 控制的电容支路降低栅极阻抗，另一种通过两个辅助晶体管与一个二极管主动控制栅极电压以消除串扰；文献对闭环电流源主动驱动电路(ACSD)的米勒电容串扰与反馈串扰进行了分析并设计了串扰抑制电路，其在上桥臂开关时阻断主动驱动电路的反馈信号，适用于使用 di/dt 与 dv/dt 反馈的主动驱动电路的串扰抑制。

主动驱动电路一般采用分立器件，为了降低电路的复杂程度，已有对专用主动驱动 IC 的研究。文献设计了一种可编程驱动集成芯片，芯片内部包含上下各 63 个并联 MOS 管，使用 12bit 编码控制开通与关断的门极电流，并优化了编码序列实现了浪涌电压与开关损耗的平衡。文献设计了一种多电平主动驱动电路，使用专用主动门极驱动芯片与 2 个辅助驱动芯片精确调节驱动电压，其中主驱动芯片由可编程分压电阻产生 0-5v 可调电压，辅助驱动芯片与主驱动芯片串联产生 SiC MOSFET 所需的正电压与负电压。主动驱动电路可以控制器件的导通损耗与开关损耗，对其结温进行控制。文献分别使用可切换门极电阻网络、两级驱动电压和商用主动驱动芯片控制功率器件的开关损耗，并降低了负载电流变化时的结温波动，提高了设备的寿命与可靠性。此外，使用缓冲电路可以将硬开关器件变为软开关以减小开关损耗，基于此思路，文献使用辅助开关管对 RCD 缓冲电路进行切换控制开关损耗，实现对结温的调节。

综上所述，主动驱动电路可以对驱动参数进行灵活调节，在不同工况下使用不同的驱动参数，可以控制器件所受应力的同时提高器件开关性能，与传统驱动电路相比具有无可比拟的优势。此外，主动驱动电路通过调节驱动参数可以实现器件结温的控制，为逆变器的主动热管理提供了新的途径。然而，目前 SiC MOSFET 主动驱动电路的控制方式较为复杂，在实际应用中有一定的局限性。另外，主动驱动技术的结温控制研究主要集中在 IGBT 中，且仅使用一种调节手段，未建立驱动电阻与驱动电压对器件损耗的控制模型。为了发挥出 SiC 器件高频高温应用的优势，需要对主动驱动技术进行深入研究。

**1.3 本文研究工作及章节安排**

本文的主要研究内容包括 SiC MOSFET 特性分析、SiC MOSFET 驱动电路设计以及主动门极驱动电路研究，内容安排为以下几个部分：

第一章综合介绍了 SiC 材料特性和发展现状，以及 SiC MOSFET 在电动汽车应用中所面临的电磁干扰等问题，然后介绍了 SiC MOSFET 驱动电路的研究现状，分析了驱动电路的设计要求，最后概述了主动驱动电路的研究现状及不足。

第二章简要介绍了 SiC MOSFET 的结构特点，分析其静动态特性与开关过程，探讨开关振荡和串扰的产生和传播规律，并使用 LTSpice 软件搭建了 1200V/300A半桥模块的仿真模型，通过仿真研究了驱动参数对 SiC MOSFET 开关过程的影响。

第三章首先分析了电动汽车逆变器驱动电路的需求，其次进行了电源设计、信号传输电路设计及保护电路设计，确定了 SiC MOSFET 驱动电路的整体方案，并提出了驱动回路低阻抗路径的布局方案，使用 ANSYS Q3D 有限元仿真软件提取了 PCB 电路板的寄生参数，最后搭建了双脉冲实验平台与 60kW 电机对拖实验平台验证了驱动电路的性能与可靠性。

第四章研究了主动驱动电路控制 SiC MOSFET 开关过程的原理，设计了一种降低开关过程 di/dt 的主动驱动电路，并提出了一种通过主动驱动电路平滑功率模块结温波动的方法，使用仿真电路进行验证。

第2章 SiC MOSFET 特性分析及驱动参数优化

SiC MOSFET 的特性与传统硅基器件具有差异，在设计驱动电路前，首先要对其静态特性和开关过程进行研究。本章介绍了 SiC MOSFET 的物理结构和工作原理，分析其与 Si MOSFET 静态特性的不同，研究了开关振荡和串扰的产生和传播规律。此外还搭建了 1200V/300A SiC MOSFET 功率模块 LTSpice 仿真电路，研究驱动回路参数对开关瞬态的影响。

**2.1 SiC MOSFET 器件特性分析**

**2.1.1 SiC MOSFET 的物理结构与工作原理**

SiC MOSFET 与 Si MOSFET 的结构类似，通常分为平面栅双注入型（DMOSFET）和沟槽型（UMOSFET）结构\[59\]，如图 2.1 所示。两种结构的衬底层与外延层均为 SiC 材料，栅极设计有所不同。DMOSFET 使用平面自对准扩散工艺在外延层上产生横向沟道，UMOSFET 采用等离子蚀刻技术形成 U 型沟道，使导电沟道变为纵向。相对于 DMOSFET，UMOSFET 具有更强的导通能力，但是栅极稳定性较差、导通电阻较高且制备工艺复杂。本文使用 CREE 公司第二代1.2kV SiC MOSFET，采用 DMOSFET 结构，下面对其工作原理进行分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMic4iaRCmDT1mEia5RG1sibVptJ3FnUturEHcpDrNjias1lbVTuhNeeJcLVA/640?wx_fmt=png&from=appmsg)

当栅源极电压 Vgs 为零时，P 基区与 N-漂移区间的 PN 结反偏，栅源极无电流通过，器件工作在截止状态；当给栅源极加入正电压时，栅极电压会将 P 基区的空穴推开，并将电子吸引至栅极下方的 P 区表面，当 Vgs 达到导通阈值 Vth 时，栅极下方 P 基区的电子浓度大于空穴浓度，反转为 N 型导电沟道，将漏源极用一条完整的 N 型沟道连接起来，器件导通；SiC MOSFET 导通后，当漏源极电压 Vds较小时，器件工作在恒定电阻状态，Vds 随 Id 线性上升；当漏极电流 Id 达到所需电流时，Vds 不再增加，载流子速度饱和；当 Vds 增大到 Vgs\-Vth 时，即漏极与栅氧化层压降小于 Vth 时，P 基区漏端反型层电荷密度降为 0，导电沟道夹断漏电流保持 Idsat 不变，SiC MOSFET 处在恒定电流区。

**2.1.2 SiC MOSFET 静态特性**  

SiC MOSFET 的静态特性包含输出特性与转移特性，其与 Si 器件相比有较大差异。图 2.2 是 SiC 与 Si MOSFET 的输出特性曲线，功率器件选用 C2M0080120D和 APT12057B2。通过对比可以看出 Si MOSFET 在驱动电压 Vgs 大于 8V 以后的输出特性基本不变，而 SiC MOSFET 的输出特性变化明显，驱动电压越高导通能力越强。这是因为 SiC 器件的饱和电子迁移率高、跨导系数小，所以相比 Si 器件需要更高的驱动电压，一般为 18~20V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM1n3GD61fylw5YIM9vKA9PgFlIAxA3bMeNa1eQyVtWiaomVjsCWCc7icQ/640?wx_fmt=png&from=appmsg)

相对于 Si MOSFET，SiC MOSFET 最大的优点是在具有更低的导通电阻。在高耐压器件中，漂移层阻抗是导通电阻的主要部分，使用 Si 材料制作高压MOSFET 会引起导通电阻增大。为了解决导通电阻增大问题，1200V 以上的 Si 功率器件通常制作成少数载流子器件，例如 IGBT，但由于电导调制效应，IGBT 的关断电流存在拖尾现象，关断损耗大，限制其高频应用。在相同的耐压下，SiC 的漂移层阻抗仅有 Si 的 1/300，所以使用 SiC 材料制作 MOSFET 可以同时满足高耐压、低导通电阻和高频的特性。此外，SiC MOSFET 的宽带隙特点使得其高温性能更强，图 2.3 是 SiC 与 Si MOSFET 导通电阻随温度变化曲线，结温由 25°C 上升至 150°C 时，Si 器件的导通电阻增加了 1.5 倍，而 SiC 器件仅增加了 0.6 倍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMAZIsFGJqsC4akP0TRlxVojV98tqk1Un4QnXiafjGncyjpgyhGUXG8Pw/640?wx_fmt=png&from=appmsg)

SiC 与 Si MOSFET 的转移特性曲线如图 2.4 所示，可以通过转移特性曲线分析阈值电压与跨导的差异。SiC MOSFET 的阈值电压较低，常温下为 4V，150°C结温时阈值电压降低到 2.5V，而 Si 器件的 Vth 为 3~5V 左右。因此，SiC MOSFET的栅极电压振荡更容易产生误导通。跨导 gm 代表了 MOSFET 的栅源极电压 Vgs 对漏极电流 Ids 的控制能力，其对应于转移特性曲线中的斜率，即：gm\=ΔId/ΔVgs。由图 2.4 中的曲线可以看出 SiC 的跨导小于 Si MOSFET，其 Vgs 对 Id 的控制能力弱，在流过相同电流时需要更高的驱动电压摆幅。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMia7SFdQmzEByE7sYgFFEf94PIU50YMOxsnPMdBz5s7b56TZ5WxKhlAg/640?wx_fmt=png&from=appmsg)

**2.1.3 SiC MOSFET 动态特性**

SiC MOSFET 的动态特性主要指其开关特性，主要受器件工艺和封装工艺产生的寄生参数影响，图 2.5 是包含寄生参数的 SiC MOSFET 等效电路模型。其中，MOSFET 的主体由压控电流源表示；Rds,on 为导通电阻，代表了器件的导通损耗；Cgd 为栅漏极寄生电容，Cgs 为栅源极寄生电容，其由器件工艺产生；BD 是 MOSFET内部寄生的体二极管，Cds 为其结电容；Ls 和 Lg 为源极和栅极的引线电感，由封装工艺产生；Rg 为栅极内部寄生电阻，其与外部电阻共同抑制栅极振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMKicEibLveeEM4mlF1Dic2xXHDena7hMNibs8tYc5iaSgNboIicpQBOphO7gA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的寄生电容 Cgd、Cgs 和 Cds 是非线性电容，主要受到漏源极电压 Vds 影响。在数据手册中，寄生电容通常由输入电容 Ciss\=Cgs+Cgd、输出电容Coss\=Cds+Cgd 和反向偏置电容 Crss\=Cgd 表示，图 2.6 为 SiC 与 Si MOSFET 的寄生电容变化趋势。输入电容 Ciss 受 Vds 影响较小，仅在较低 Vds 下略有增加；输出电容 Coss 与反向偏置电容 Crss 受 Vds 影响较大，在 Vds 从 0 变为 15V 时剧烈下降，之后缓慢减少直到 Vds\=200V 时趋于不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMqrbLdQxIQ2iavgK1XpjUvUiaVvl52MX54Z2oxgPldTeRdDPMA9Z8dnbA/640?wx_fmt=png&from=appmsg)

在相同功率等级下，SiC 的寄生电容远小于 Si 器件，较小的 Ciss 减小了驱动损耗；Coss 在器件关断时存储能量，并在器件开通时通过沟道释放，较小的 Coss 可以降低开通损耗；较小的 Crss 减小了 SiC MOSFET 的米勒平台时间，加快了开关速度。碳化硅器件的寄生电容特性使得其更适合高频应用，但是较小的寄生电容容易与驱动回路中的寄生电感产生振荡，在驱动电路设计时应尽量降低布线电感。

碳化硅 MOSFET 的体二极管是 PN 二极管，但其少数载流子寿命较短，拥有与肖特基势垒二极管（SBD）同样超快恢复的性能，其恢复损耗通常只有快恢复二极管（FRD）的几分之一。图 2.7 为碳化硅 MOSFET 体二极管的伏安曲线，其导通压降为 2.5V 左右，产生的导通损耗较大，所以大电流场合一般需要反并联低压降的 SiC SBD 以减小续流损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMKIXiaEOwxm911MQ2JYxftjAdLNtEfeBN8jNSBad9e2S1Wbbicv41HzYw/640?wx_fmt=png&from=appmsg)

**2.2 SiC MOSFET 开关动态特性分析**  

**2.2.1 SiC MOSFET 的开关过程**  

SiC MOSFET 的开通波形如图 2.8 所示，其主要分为四个阶段，包括开通延时阶段、电流上升阶段、电压下降阶段和饱和导通阶段。下面对开通过程进行具体分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMcOCRlnVRJqsD47lZNNVS3OcFjqWgZVcF4YEYZvXNVPib7z6zcRKyUIA/640?wx_fmt=png&from=appmsg)

开通延时阶段（t0-t1）：驱动电路收到开通信号后，输出正电压 Vg+，向 Cgs 与Cgd 充电，SiC MOSFET 的 Vgs 开始上升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMZahudXcw1icB2LKcAJ4pI2g9HluQEQqRU3ewx7G7ME6QyNS7iaGcdiaBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhv4zfAZUe7KLQAFZDJlgtVJUmxicunxfMyUyUPAFHpdTJCsXcwFxsia74w/640?wx_fmt=png&from=appmsg)  

电流上升阶段（t1-t2）：Vgs 到达导通阈值 Vth 后，漏极电流 Id 开始上升，续流二极管中的电流不断下降。续流二极管仍正向导通，SiC MOSFET 的漏极电压被钳位至直流母线电压 Vdc 附近，此时不断上升的漏极电流在主回路的寄生电感上产生了感应电压，其方向与母线电压相反，器件的漏极电压略有下降。当 Id 上升至额定值后，续流二极管进行反向恢复，漏极电流与反向恢复电流叠加产生电流尖峰。反向恢复电流消失后，Id 保持额定不变，电流上升阶段结束。

电流上升阶段漏极电流为：  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvjyu39OPOC8IxHBkuricfWmvhyTLicV9qibiaD47a3ZA5FK5vNqO7lO2iaBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvdp6AWZQM80A17XKyAFYkHDZGhD5sqK1vIg1ncNVOdrKNUc27kX17Dg/640?wx_fmt=png&from=appmsg)

饱和导通阶段（t3-t4）：Id 保持额定电流 IL 不变，漏极电压保持导通压降 Vds,on不变，驱动电压为栅源极电容 Cgs 与栅漏极电容 Cgd 充电，直到栅源极电压上升至Vg+。

SiC MOSFET 的关断过程也分为四个阶段：关断延时阶段、电压上升阶段、电流下降阶段和关断结束阶段，如图 2.10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMm2f0L5ic1Tp7ZyA8IxvianVQqPqLNoTBkeujtqXW9qJOczBMoCU5oOtg/640?wx_fmt=png&from=appmsg)

关断延时阶段（t5-t6），驱动电路收到关断信号后，输出低电平电压 Vg-，栅源极电容 Cgs 与栅漏极电容 Cgd 通过驱动电阻 Rg 放电。栅源极电压下降，在其达到米勒平台电压 Vmiller 前，Id 与 Vds 保持不变。关断延时阶段栅源极电压 Vgs 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvyVxNyprXdktKXl0dxtUibyQ4jc1PhuPviabxPbBJ9XzMgxa4iaVkSkgUg/640?wx_fmt=png&from=appmsg)

电流下降阶段（t7-t8）：当 Vds 到达直流母线电压 Vdc 后，续流二极管导通，IL向续流二极管转移。栅源极电压米勒平台消失，Cgs 与 Cgd 放电，直到栅源极电压Vgs 到达阈值电压 Vth，漏极电流 Id 下降为 0。栅源极电压 Vgs 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvQ1vW4qicVjZq0IVF55o4PIRGETjzHdician4jibEicUAn0btdAFldAHibxpg/640?wx_fmt=png&from=appmsg)  

**2.2.2 SiC MOSFET 的开关轨迹**

如图 2.11，SiC MOSFET 的开关过程可由输出特性曲线上的开关轨迹线表示，使用开关轨迹可以更直观地了解 SiC MOSFET 开关行为。

SiC MOSFET 的开通轨迹：开通延时阶段，Vgs 未达到导通阈值 Vth，器件处于截至区，Vds 与 Id 保持不变，如图中工作点 1；电流上升阶段，漏极电流 Id 随着栅源极电压 Vgs 的上升而上升，直到达到额定负载电流，如图中工作点 2，在此阶段 Vds 受到主回路寄生电感反电势影响略有下降；电压下降阶段，栅源极电压 Vgs保持米勒平台电压 Vmiller，续流二极管的钳位作用消失，Vds 下降至 Vmiller 下的导通压降，如图中工作点 3，在此阶段漏极电流 Id 因为续流二极管的反向恢复作用产生过冲与振荡；开通结束阶段，漏极电流 Id 保持不变，栅源极电压 Vgs 继续上升至驱动正电压 Vg+，Vds 随之减小至导通压降 Vds,on，如图中工作点 4。

SiC MOSFET 的关断轨迹：关断延时阶段，器件仍处于导通状态，栅源极电压 Vgs 下降，Vds 略有上升，由工作点 5 变为工作点 6；电压上升阶段，Vgs 下降至米勒平台电压 Vmiller，栅极电流为栅漏极电容 Cgd 放电，Vds 持续上升至直流母线电压 Vdc，位于工作点 7，在此阶段 Id 受续流二极管寄生电容放电电流影响略有下降；电流下降阶段，续流二极管导通，漏极电流 Id 向续流二极管转移直至降低为零，栅源极电压 Vgs 降低至 Vth，如图中工作点 8，在此阶段漏源极电压受到主回路寄生电感影响产生过冲与振荡；关断结束阶段，Vds 与 Id 保持在工作点 8 不变，Vgs 下降至驱动负电压 Vg-。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM2Sick7nA4EhAE99NGMUxLGtl4Le0h3x7fSSUv0HG5NDSNInxluNClCw/640?wx_fmt=png&from=appmsg)

**2.3 SiC MOSFET 应用中面临的问题**  

在高电压与大电流应用时，因为 SiC MOSFET 高速开关的特点，容易受到主电路、驱动电路和器件寄生参数的影响，产生过电压与过电流，造成电磁干扰（EMI），降低器件裕量。此外，开关电压通过寄生电容耦合进驱动电路中，产生的过冲与振荡可能使器件误导通，严重时可能导致栅极失效。本节对 SiC MOSFET在高频应用中的主回路振荡与驱动回路振荡产生机理进行分析，为驱动电路的设计提供参考。

**2.3.1 主回路开关振荡**

电感上的电压降由电感乘以电流上升速率表示，即 VL\=L∙di/dt。PCB 布线寄生电感可以根据最短电流路径估算，其经验值为 10nH/cm\[61\]。如果器件开关的di/dt 足够高，寄生电感上的电压就越大。

在 SiC MOSFET 应用电路中，应确保电压超调不超过器件的最大额定值。电压超调通常是器件输出电容和模块与直流母线电容间杂散电感 Lp 谐振产生的，图2.12 为 SiC MOSFET 开关瞬态桥臂等效电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMGia0oczDWdnWletibh8CiaCcprcLCiaeLkF98oJG9a6fWOZG3HZM9mZTdg/640?wx_fmt=png&from=appmsg)

SiC MOSFET 关断阶段，下管漏极电流 Id 下降时，上管续流二极管维持导通压降 Vdiode，下管的 di/dt 在主回路电感上产生感应电压 Vov，其与母线电压叠加产生关断过电压：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhv7okiazEx3caM1QMT6DibuZEicaxSrBkNnjBDDDHMjE2etFX5nG2sNrCHg/640?wx_fmt=png&from=appmsg)

等效电路中的电感与电容一般为同一数量级，电感 L 为 nH 级别，等效电容C 为 nF 级别，而 SiC MOSFET 的开通电阻 Rds,on 仅有几毫欧，所以主回路的阻尼系数很小，器件的开关振荡难以避免。增大门极电阻 Rg 可以减缓 SiC MOSFET 的开关速度，降低器件电压与电流过冲，但会增加额外的损耗，所以在设计驱动电路时需要在电压电流超调和开关损耗之间做出权衡。此外，使用主动门极驱动电路对开关过程的 di/dt 和 dv/dt 进行控制，可以在保证安全电压电流超调的情况下，加快开关速度，本文第四章将对主动门极驱动电路进行深入研究。

**2.3.2 驱动回路振荡与串扰**

在实际的驱动回路中，不可避免地会引入分布电感。高频开关时驱动电路的寄生电感会与 SiC MOSFET 的输入电容发生串联谐振，其品质因数 Q 为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvR95OzEKibth8ptloSaoN4GPT3wo8jxlNCAvf55EQjXDHLEAap13f6PA/640?wx_fmt=png&from=appmsg)

因为 SiC MOSFET 的 Ciss 比 Si MOSFET 小很多，所以其对驱动回路的寄生电感更加敏感。此外，驱动回路的寄生电感还会影响 SiC MOSFET 栅极充放电速度。为了避免驱动回路振荡产生的弊端，在驱动电路布线时应尽量缩短距离，以减小分布电感。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMuLU7jc8OcbvN0L6QjnkE9mdGgC6ibbfknhluqMFC74rvqQtHvb6IxGw/640?wx_fmt=png&from=appmsg)

在上下管互补导通的桥臂应用中，以上管开通为例，如图 2.13 所示。在上管处于开通电压下降阶段时，下管漏源极电压 Vds 会随着上管漏源极电压的下降而上升。此时下管栅漏极电容 Cgd 产生位移电流：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvdsNXxiaVWJL7pP6a9P5tHpzmRhlCAwjC2MsV5Kz7prIstrByvcw34Fw/640?wx_fmt=png&from=appmsg)

感应电流 iCgd流进栅极后，会流经栅极驱动电阻 Rg 或为栅源极电容 Cgs充电，在 下 管 栅 极 产 生 正 串 扰 电 压 ， 如 果 串 扰 电 压 大 于 开 通 阈 值 电 压 就 会 使 SiC MOSFET 误导通，造成桥臂短路。为了防止误导通，SiC MOSFET 的驱动电路通常使用负压关断或增加低阻抗回路减小串扰影响。

同理，在上管关断过程中，下管漏源极电压 Vds 下降， Cgd 产生的感应电流在驱动回路中产生负串扰电压。SiC MOSFET 的栅极氧化层更薄，可承受负压的范围较低，通常只有\-10V 左右，在使用负压关断时，负串扰电压可能使栅极电压低于临界值，造成器件的栅极击穿。

**2.4 SiC MOSFET 驱动回路参数优化仿真**

驱动回路参数影响了 SiC MOSFET 的开关速度、电压电流尖峰与开关损耗，为驱动电路匹配合适的驱动参数可以提高逆变器的性能与可靠性。本节通过理论分析与 LTSpice 仿真研究了驱动回路参数对器件开关瞬态的影响。

**2.4.1 驱动参数对 SiC MOSFET 开关瞬态的影响**  

由图 2.14 所示，驱动电路中的关键参数包含栅极电阻 Rg，栅极电感 Lg，源级电感 Ls，栅源极电容 Cgs 和栅漏极电容 Cgd。驱动回路中的寄生电感 Lg 与 Ls 一方面会降低开关速度，另一方面可能引起 Vgs 振荡，易造成器件误动作。因此在驱动电路 PCB 布置上，要将驱动电路在功率模块的栅极和辅助源极附近布置，以尽量减小 Lg 与 Ls；并在缓冲电路电源两端并联解耦电容，减小驱动电流路径。本文主要分析 Rg、Cgs 和 Cgd 对器件开关瞬态的影响，并忽略 Lg 和 Ls，以及驱动回路参数的非线性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMzTrKf6LzAG92HiaZKOjunlCUaUw95WoORq1ocl5a3Ria1XnHydp48GJw/640?wx_fmt=png&from=appmsg)

开通过程的 di/dt 在电流上升阶段产生，当 Vgs 达到 Vth 后，ig 对 Cgs 充电，此时漏电流 id 近似为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvzUGy5HonibATWeeKjSMZ9x0WavXOjIc9XHs7xZiaD6LnKaWnwH3ju3hA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvJNgkSoTsPBRYaq7U1QXBbznzJSdO121UtyKcktrduWl2aSXroE7BfQ/640?wx_fmt=png&from=appmsg)

从以上分析可以看出，驱动回路参数中驱动电阻 Rg 同时影响 SiC MOSFET 的电压变化率与电流变化率，Cgs 主要影响开关过程的 di/dt，Cgd 主要影响开关过程的 dv/dt。然而，上述分析是建立在忽略驱动回路寄生电感与非线性的条件下，与系统实际工作条件有差异，所以下面将使用 LTSpice 软件分析驱动参数对器件开关瞬态的影响。

**2.4.2 CAS300M12BM2 模块 LTSpice 仿真电路搭建**

SPICE 模型使用网表格式描述了器件内部实际的电气连接，使用 SPICE 模型对电路进行非线性直流分析、非线性瞬态分析和线性交流分析，可以精确模拟半导体器件的特性，为驱动电路的设计提供评估手段\[62\]。CREE 公司为其 C2M 系列SiC MOSFET 提供的 SPICE 仿真模型只有 TO247 封装和 TO263 封装的器件以及裸片模型，而在电机控制器设计中往往使用半桥功率模块而非分立功率器件，因为功率模块具有更大的容量和更好的散热条件，并且对杂散参数进行了优化，有利于结构设计及系统的集成。

虽然 CREE 未提供功率模块仿真模型，但是可以根据模块内部构造与数据手册使用裸片模型进行搭建。文献\[63\]给出了 CAS300M12BM2 模块的内部构造图，如图 2.15 所示。CAS300M12BM2 上下桥臂各有 6 个 SiC MOSFET 芯片和 6 个 SiC SBD 芯片并联，由引线键合，三个功率端子分别为直流端子 DC+，DC-与输出端子 OUT，并在模块左端引出了上下桥臂的栅极与开尔文源极，供驱动电路使用。

根据 CAS300M12BM2 数据手册中的描述，其导通电阻 Rds,on 为 4.2mΩ，反并联二极管电流 If 为 300A，可以推算出 SiC MOSFET 芯片为导通电阻 25 mΩ 的 CPM2-1200-0025B 裸片，SiC SBD 芯片为额定电流 50A 的 CPW5-1200-Z050B 裸片。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM6B3M3TxRzB2XTzNZsdtUcvK7L3wqXuZaguWrXFDLcqmrNVCyQ228yw/640?wx_fmt=png&from=appmsg)

为了更准确地模拟功率模块的行为，需要对封装中的杂散电感进行提取。文献\[63\]使用 Ansys Q3D 有限元仿真软件提取了 CAS300M12BM2 模块的寄生电感，但未给出功率模块完整模型及各部分电感值。本文使用模块提供的数据手册和内部构造图，根据寄生电感 10nH/cm 的经验值推导封装中各部分杂散电感。

CAS300M12BM2 模块内部由芯片、DBC 衬板、键合线和接线端子四部分构成，其中芯片中的寄生电感很小，模块的杂散电感主要分布在接线端子、导电铜层和键合线上。半桥模块一般工作在互补导通状态，其工作电流回路如图 2.16所示，所以在计算与测量功率模块寄生电感时，主要考虑一个桥臂 MOSFET 通路和另一桥臂二极管通路的杂散电感\[64\]。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMfcm1hicy5O7VyDicWaOTTAwOEHI8EOK0upcVWr9TmvBvNNGB2RIV3hdA/640?wx_fmt=png&from=appmsg)

CAS300M12BM2 模块数据手册中给出的直流母排端子间的寄生电感 Lstray 测量值为 15nH，根据模块内部构造图设置各部分寄生电感，建立仿真电路如图2.17 所示。其中，直流端子电感 La1、La2，输出端子电感 La3 为 4nH；DBC 衬板电感 Lb1~Lb24 为 3nH；键合线电感 Lc1~Lc4 为 1nH；栅极电感 Lg1、Lg2，开尔文源极电感 Lss1、Lss2 取最长回路的电感值 10nH。寄生电感设置未考虑模块中各芯片的位置差异，设置后电流回路总电感为 15nH，与模块数据手册中一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMEhVt3nwkwHE6oUCDzeoGPNEY7NEMSt4lNQzkKtGq7ibPw5InS88AiaTQ/640?wx_fmt=png&from=appmsg)

CPM2-1200-0025B 裸片仿真模型未包含模块封装的热阻信息，为了模拟 SiC MOSFET 工作过程中的结温变化，需要对模块的热阻网络进行建模。在对功率模块热阻进行建模时，通常忽略各芯片间的温度耦合，只考虑垂直方向的热传导，常用的一维热阻网络有 Cauer 网络与 Foster 网络，如图 2.18 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMO5JVwjM19Z0iako0PwyWEiaX5n5oqBo65vXRxJX9bz95w4gSJvG3dTicA/640?wx_fmt=png&from=appmsg)

Cauer 热网络结构可以反应模块内部各物理层的传热过程，RC 代表了各层的热阻与热容。Foster 热网络与 Cauer 热网络互相等效，但其中的 RC 没有具体的物理意义，无法准确模拟模块各层温度分布\[65\]。建立 Cauer 热网络通常需要模块各层封装材料与尺寸信息，通过公式计算或有限元仿真获得各层 RC，而Foster 热网络可以利用模块数据手册中的瞬态热阻曲线，进行多阶指数拟合得到RC。本文未能获得 SiC 模块的详细封装结构，所以采用瞬态热阻曲线建立Foster 热网络。

图 2.19 为 CAS300M12BM2 模块 MOSFET 芯片的热阻曲线，在建立热阻网络模型时，需选用最下面一条单脉冲（SinglePulse）瞬态热阻曲线。SiC MOSFET 模块的热阻网络拟合公式为\[66\]：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm0C9GQb86Qibu0HiaDVQGZhvpZibRr2lIjyW850hQE9ribxR3xwzD2a5VPIq7ahg9N2wAk0BOj1gmqrg/640?wx_fmt=png&from=appmsg)

其中 Ri 为热阻参数，单位为 K/W；τi 为时间常数，τi\= Ri∙Ci，单位为 s；Ci为热容参数，单位为 J/K。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM2UlK6s9oAW5tHkxoRMjDDrAxtu6XtZFm9J9xVIvibJnFLSdE69LTQMA/640?wx_fmt=png&from=appmsg)

根据文献\[67\]，使用 4 阶 RC 热网络已经可以精确描述功率模块的热特性。因此，本文使用 getdata 软件对 CAS300M12BM2 模块的瞬态热阻曲线进行提取，并使用 MATLAB 的曲线拟合工具箱 cftool 对公式(2.30)表示的四阶热网络参数进行拟合，其参数见表 2.1，在仿真中使用拟合参数搭建 Foster 热阻网络如图2.20 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMk7VlicM4dhianFwDkfJlKT6jE1LewvsH3WdhhwOwnw5eZmsKPRmnmNZw/640?wx_fmt=png&from=appmsg)

图 2.21 将热阻网络拟合结果与数据手册中热阻曲线提取点进行对比，可以看出本文建立的 4 阶 Foster 热网络模型与模块热阻基本吻合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM59CGQVU36lb0c1VibB80qaMvvEHMGj7WiclObIxUudyb46icG1wqtic7vw/640?wx_fmt=png&from=appmsg)

**2.4.3 驱动回路参数仿真及优化**  

在上一节搭建的 CAS300M12BM2 模块的 LTSpice 仿真模型的基础上，使用330V 直流电压与 300A 电流激励，设置主回路寄生电感为 20nH，对电机控制器实际工况中 SiC MOSFET 的开关瞬态进行仿真，并通过改变 Rg、Cgs 与 Cgd 分析驱动回路参数对开关过程的影响。在仿真中使用.MEAS 命令获取 SiC MOSFET 电压电流的超调与变化率，并计算开通损耗 Eon 与关断损耗 Eoff。

a.驱动电阻

图 2.22 与图 2.23 给出了不同驱动电阻 Rg 下 SiC MOSFET 开关瞬态的仿真结果，当 Rg 由 2.5Ω 增加至 10Ω 时，开关过程的 dv/dt 分别降低了 28.2%与 54.6%，开关过程的 di/dt 分别降低了 47.5%和 55.2%，电压超调与电流超调分别降低了47.2%与 29.3%。结果表明驱动电阻 Rg 增加时，SiC MOSFET 开关瞬态的电压变化率与电流变化率均都有明显下降，且对关断过电压的抑制能力更强。但是通过增大 Rg 来降低 SiC MOSFET 电压电流应力是以开关损耗增加为代价的，开通关断总损耗由 2.5Ω 时的 8.19mJ 上升至 10Ω 时的 13.37mJ，增加了 63%。Rg 为 5Ω时，器件的过电压降低了 18%，总损耗为 9.62mJ；Rg 大于 5Ω 时，增大驱动电阻对电压超调的抑制能力降低，且开关损耗会大幅增加，所以本文拟选择 5Ω 驱动电阻，并在后续仿真中固定不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMNTdxXDtgibvbGrBXZaEegAEsvgPcztgDo7TSqia4wpib8UcOLJaUuG6sw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM0bSFk1TQAJBCOHT60YjBThWQ88sACgZoSfLs1eibB9MJiaCsYxOdiar0w/640?wx_fmt=png&from=appmsg)

b.栅源极电容

图 2.24 与图 2.25 为栅源极电容 Cgs 对 SiC MOSFET 开关瞬态影响的仿真结果。结果表明栅源极电容对开通关断 dv/dt 的影响较小，当 Cgs 从 0 增加至 20nF时，开通中的 dv/dt 降低了 19.5%，关断中的 dv/dt 降低了 16.8%。栅源极电容对开通关断过程 di/dt 的影响显著，Cgs 增加过程中，开关过程的 di/dt 分别降低了32.9%与 42.3%。增加栅源极电容可以同时降低 SiC MOSFET 的电压和电流应力，电压与电流超调分别降低了 24.3%与 23.7%，总损耗上升了 30.3%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMFHfadLJicpnu7XP9CU6N2ibBPr3Licgu8WlwIKt5nCrYX40mfvq4EH4cA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM5S7T6DkVuVKicCTkcYzibCFAMJvAHgSODbffjo2xkaXCFLVB9p8icaSuQ/640?wx_fmt=png&from=appmsg)

c.栅漏极电容  

图 2.26 与图 2.27 为栅漏极电容 Cgd 由 0pF 增加至 200pF 时的开关瞬态仿真结果，同样使用 5Ω 驱动电阻。与理论分析一致，增加栅漏极电容会使电压变化率明显降低，开通关断 dv/dt 分别下降了 30.1%与 34.8%，而开通关断的 di/dt 仅下降了 15.6%与 13.8%。同时，相对于开通过电流，增加 Cgd 对降低关断过电压的效果更显著，但会大幅增加关断损耗。根据仿真结果，关断过电压降低 15%时关断损耗增加了 40%，开通过电流降低 9%时开通损耗增加了 14%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMgpOCNVnJbriaTvmRZ2TiaH7R9ia91YeibXc0q9ibZWGCR84uR7CJzJSj8wA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMJvOFTOYIjzic5vMDchatKtzS771GVPeZqibfoDG9HBtFupB3lbXIC55Q/640?wx_fmt=png&from=appmsg)

d.驱动参数选择  

驱动回路参数对 SiC MOSFET 开关瞬态中的电压电流变化率、过电压过电流以及损耗呈现不同的影响关系，在实际电路中需要进行选择。根据 Rg、Cgs 与 Cgd的仿真结果可以看出，Rg 对开关过程中的 dv/dt 与 di/dt 均有较强的可控性，而 Cgs对 di/dt 的可控性较强，Cgd 对 dv/dt 有更高的可控性。此外，增加 Rg 和 Cgs，可以同时降低器件的电压尖峰与电流尖峰，增加 Cgd 对电流尖峰影响较小，且在增加相同开关损耗时对电压尖峰的抑制能力比增加 Rg 与 Cgs 要弱，如图 2.28 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMZ1VuibRBTe6WzVcvKWOtBwrIM2uz4cgGUNGLqSXUTGnCQ5oIJg6giarw/640?wx_fmt=png&from=appmsg)

本文在选择驱动回路参数时，主要对驱动电阻 Rg 与栅源极电容 Cgs 进行调节，而不使用外部并联栅漏极电容。一方面 Cgd 对抑制 SiC MOSFET 开通过电流及关断过电压的能力较差；另一方面并联 Cgd 需要使用高压电容且无法靠近模块驱动引脚布置，可能会引入额外的杂散电感。根据仿真结果，本文拟采用 5Ω 驱动电阻且在栅源极并联 5nF 电容，将峰值电压及峰值电流限制在 500V 与 400A 以内。相较于模块数据手册中 Rg 的 2.5Ω 推荐值，开关损耗升高了 24%，但明显降低了器件的电压应力。

**2.5 本章小结**

本章首先分析了 SiC MOSFET 的结构和工作原理，结合寄生参数模型，分析其静态特性与动态特性，对比了 SiC 与 Si MOSFET 导通电阻、阈值电压、跨导、寄生电容和体二极管等参数的差异。其次对 SiC MOSFET 的开关过程进行深入研究，在输出特性曲线上绘制非理想开关轨迹，更直观地描述器件的开关行为。之后，对 SiC MOSFET 在高频应用中的主回路振荡与驱动回路振荡产生机理进行分析，为驱动电路的设计提供参考。最后，探讨了驱动参数对 SiC MOSFET 开关瞬态的影响，并搭建了 LTSpice 仿真电路对驱动电路中的驱动电阻与栅极电容进行优化选择。

**第3章 SiC MOSFET 驱动电路设计与验证**

由于器件特性的差异，传统 Si IGBT 与 Si MOSFET 驱动方案并不能直接应用于 SiC MOSFET，且为了发挥出 SiC MOSFET 具有高速开关、耐高温的优点，需要设计适用于碳化硅器件的高性能高可靠性驱动电路。本章针对科锐1200V/300A 碳化硅功率模块 CAS300M12BM2，设计了一种小体积、高效率、高可靠性的驱动电路，并应用于 60kW 电动汽车电机控制器中。

**3.1 电动汽车逆变器驱动电路设计要求**

逆变器是电动汽车行驶中的重要执行单元，与工业用电机控制器相比，电动汽车逆变器对环境温度、电磁兼容性与功能安全性有更高的要求。

(1)环境温度要求

受汽车机电一体化程度的提高，电动汽车逆变器要求能在更高的环境温度下工作。根据 GB/T 18488.1-2015《电动汽车用驱动电机系统 第 1 部分：技术条件》中的要求，驱动电机逆变器应能在 55°C 的工作环境下保持额定电压、转矩、功率持续工作 2 小时，对于装在发动机上的产品，最高测试温度将达到 120°C。为了满足电动汽车逆变器对工作温度的要求，在驱动电路设计时，需要选用汽车级芯片（工作温度\-40°C ~125°C）与高温元器件，并使用耐高温电路板材与焊料。

(2)电磁兼容性要求

电动汽车系统的电磁环境复杂，逆变器需要做好防护，保证设备可以抵抗环境电磁干扰，同时也要保证自身的电磁干扰不会进入到其他设备中。根据 GB/T36282-2018《电动汽车用驱动电机系统电磁兼容性要求和试验方法》 和 GB/T18387-2017《电动车辆的电磁场发射强度的限值和测量方法》中的规定，电动汽车逆变器需要满足 150kHz~30M 电场强度与磁场强度的发射限值，并需要完成30MHz~100MHz 电磁辐射发射试验与 20MHz~2000MHz 电磁辐射抗扰度试验。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMGdpHufOnpybsjglmMTL8qyibPwQpcmPPyEKTCcjkP8It6XKFD4rWH5A/640?wx_fmt=png&from=appmsg)

电动汽车驱动系统中，电池组、逆变器与电机之间通过母线连接，并且通常都会有金属外壳，导致各元件与大地形成耦合路径，如图 3.1 所示。在 SiC MOSFET的开关瞬间产生的 dv/dt 可达 50kV/μs 以上，快速变化的电压在各部件的寄生电容上形成共模电流 Icm，导致系统中产生共模干扰。

作为干扰源，逆变器中的功率器件运行在快速开关状态，在 SiC MOSFET 和二极管两端的电压脉冲与电流脉冲频率一般在数十兆赫兹，会对低压电路以及其他设备造成较强的辐射干扰。为了满足电动汽车控制器对电磁兼容性的要求，在驱动电路设计时，需要优化驱动回路参数配置，对 SiC MOSFET 的电压尖峰与电流尖峰进行抑制，减小对外部设备的干扰。另外，驱动电路中应加入屏蔽、接地和滤波等措施，降低对外部电磁干扰的敏感性。

(3)功能安全性要求

根据 ISO 26262《道路车辆功能安全标准》要求，在电动汽车电机控制器的设计过程中，要对相关系统和零部件故障进行分析，采用软硬件冗余设计，保证其功能安全\[68\]。在驱动电路设计时，可从以下几点考虑：1.使用多级过流保护电路，根据相应时间设置不同的保护点；2.同时对三相电流进行采样，可确保一相电流采样故障时，保护电路可以正常工作。3.针对所有可能发生的故障，都要有相应的检测措施和应对方法，防止故障的扩大。

**3.2 驱动电路硬件设计**

SiC MOSFET 的开通关断由驱动电路控制，驱动电路保障了 SiC MOSFET 的安全可靠运行。电机驱动器应用中，为了防止功率侧强电信号对控制侧弱点信号的干扰，驱动电路与 SiC MOSFET 之间必须实现电气隔离，每个 SiC MOSFET 需使用独立的隔离电源供电。此外，驱动电路还需要避免 SiC MOSFET 受到损坏，拥有过流保护、过压保护、防止误动作等功能，并在故障时及时关闭输出。下面对 SiC MOSFET 驱动电路各部分的硬件进行设计分析。

**3.2.1 供电电源设计**

根据第二章对 SiC MOSFET 导通特性的分析，其跨导小，Vgs 对电流的控制作用较弱，通常 18V~20V 的驱动电压才能使其栅极沟道完全开通，驱动正电压越高，导通电阻越小。另一方面，SiC MOSFET 的开通阈值电压 Vth 较小，且随温度升高而降低，为了防止桥臂串扰导致的误导通，通常采用\-2V~-5V 的负压关断，更低的关断负电压可以减少关断时间，并对串扰具有更强的抑制能力。

CAS300M12BM2 模块数据手册中制造商给出的驱动电压安全工作范围为\-10V~25V，考虑到驱动回路的电压震荡，选择驱动电压时应留有裕量。因此，对SiC MOSFET 性能与可靠性综合考虑，选用+20V/-5V 作为驱动电压。

在 SiC MOSFET 开关过程中，栅极电容的充放电电流会在驱动电阻和驱动芯片上产生能量损耗，供电电源应供给足够的功率才能保证模块的正常开关。当驱动功率不足时，供电电源的输出电压下降，导致开关速度变慢，导通电阻增大。SiC MOSFET 开关所需的驱动功率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMiaSkMTXSibV7Iwj9KQfsSDueeYzGG0ndn6icN3iahCVdYHCAHGbOjtuB4g/640?wx_fmt=png&from=appmsg)

其中 ΔVGS 是正负驱动电压差，QG 为总栅极充电电荷，fsw 为开关频率。由CAS300M12BM2 模块数据手册中的栅极充电电荷为 1025nC，则开关频率 30kHz下的单管驱动功率为 0.769W，考虑到驱动芯片及驱动回路中的其他损耗，并为提高开关频率留下裕量，驱动电源总功率应不小于 2W。

在驱动电源的设计中，还需要考虑隔离电压和对共模噪声的抑制。为了保证低压侧与高压侧的电气隔离，驱动电源的隔离电压通常为开关器件耐压的两倍以上，对于 1200V SiC MOSFET，需要 2500V 以上的隔离电压。另外，如图 3.2 所示，隔离电源的低压侧与高压侧之间存在分布电容，在桥臂开通关断的过程中，上桥臂驱动电路参考地的电压在零到母线电压之间摆动，产生的 dv/dt 通过隔离电源的寄生电容传导至低压侧，产生共模噪声。由隔离电源引入的共模噪声会增加电源的输出纹波，并且可能干扰 PWM 信号，影响功率器件的开关安全。对于SiC MOSFET，驱动电源的共模抑制比要求在 50kV/μs 以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMfJRoJWNvII1FDcJAepRTibEDfCndOZzQPHF7qEej4ZUe1JxE4ODthNg/640?wx_fmt=png&from=appmsg)

本文选用了 Murata 公司的 MGJ2D122005SC 模块作为驱动电源，其体积小、效率高，输出电压为+20V/-5V，总输出功率 2W。此外，MGJ2D122005SC 电源模块具有 5200VDC 的隔离电压和 80kV/μs 的 dv/dt 免疫能力，且工作温度范围可达\-55°C~125°C，适合大功率电动汽车电机控制器应用。

**3.2.2 信号传输电路设计**

SiC MOSFET 驱动电路需要对开通、关断信号和错误反馈信号进行隔离。常用的隔离方式主要有电平转换隔离、光电耦合器隔离、电磁隔离、电容隔离及光纤隔离。

电平转换式隔离使用自举电容提升功率侧电压，仅适用于 600V 以下的功率器件，不适用于高压场合。光纤隔离使用激光二极管对信号进行调制，并在接收端进行信号解调。光纤隔离的优点是信息传输完全不受强静电场与强电磁场的影响，但其成本较高且传输延时一致性较差。光电耦合器广泛应用于 IGBT 与MOSFET 的驱动电路中，其电气隔离性能好、抗干扰能力强，只能单向传输信号而不会引入反馈噪声，但是光耦的传输延时误差较大，随着时间的推移最终可导致高达 1μs 的偏差\[69\]。电磁隔离需要一个脉冲变压器进行“电\-磁\-电”之间的转换，可以适用于所有的电压等级且传播延时非常短，在工作寿命范围内传播延时及误差不会发生变化。电容隔离使用电容器耦合数据信号，通过不断变化的电场实现信息传输。电容隔离仅有一条信号通路，可以避免差分信号的干扰，此外其隔离电压高、传输速度快、功耗低。

本文选取了博通、英飞凌、罗姆和德州仪器公司的几款汽车级驱动芯片进行对比，其主要参数如表 3.1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM5mEcANrIphVOAwPV4H6qS6GeVibD1JicH7849BXfMcQkGhk8C2BwAuUA/640?wx_fmt=png&from=appmsg)

根据表格中的对比，TI 公司的 ISO5451-Q1 芯片拥有最优异的传输延时、最大脉宽失真、隔离电压和共模抑制性能，且供电电压范围较宽，可采用+20V/-5V双电源，满足 SiC MOSFET 驱动电路的需求，所以本文使用 ISO5451-Q1 芯片作为信号隔离。

通常信号隔离芯片内部集成了输出缓冲电路，具有灌电流及拉电流能力，例如 ISO5451-Q1 芯片可以输出 2.5A/输入 5A 的峰值电流。然而实际应用中，隔离电路的输出电流往往无法满足 SiC MOSFET 功率模块对驱动电流的要求，所以在信号隔离芯片后需要增加栅极驱动器提高驱动能力。

SiC MOSFET 常用的栅极驱动结构有两种，分别为互补 BJT 射极跟随器结构与 MOSFET 反向推挽结构，如图 3.3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMAp1VcEE51uhR1Ye2TqkgsQBkzPCBa0MYbc1PJQcXZ4TGNJDyjRBs5Q/640?wx_fmt=png&from=appmsg)

互补 BJT 射极跟随器结构简单，由两个 PNP 与 NPN 双极结型晶体管组成，上桥臂 NPN 管接驱动正电源，下桥臂 PNP 管接驱动负电源，两管的基极相连由电阻 Rb 提供开通电流，共射极接驱动电阻 Rg，提供栅极驱动电流。当需要更大的驱动电流时，可以并联 BJT 提高驱动能力。MOSFET 反向推挽结构与 BJT 射极跟随器类似，主要的不同是输入输出电平相反，需要在控制程序中对 PWM 的极性进行改变。使用 MOSFET 作为栅极驱动器的优点是其输出不受栅极电流控制，输出电流大且开关速度快、损耗低。

在 SiC MOSFET 开关过程中，可以使用不同的驱动电阻优化开关性能，即非对称栅极输出级电路。如图 3.4 所示，设置不同开通电阻 Rg,on 与关断电阻 Rg,off 的方式主要有两种。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM1xg56iarZzNKyw0Jp8L0kZM6yZnFnhNYCny2btPUKuavpALghNoIzmg/640?wx_fmt=png&from=appmsg)

第一种是使用二极管的单向导电性设置 Rg,on 与 Rg,off，当器件开通时，驱动电流流向栅极，二极管截止，驱动电流仅流过电阻 Rg1；当器件关断时，驱动电流反向，二极管正向导通，电阻 Rg1 与 Rg2 并联。另一种方法是将栅极驱动器的输出分离，为开通关断电流提供不同的路径，SiC MOSFET 开通时上管 PMOS 提供驱动电流，关断时下管 NMOS 提供放电电流，这样就可以对开通电阻与关断电阻进行独立设置。

当选择栅极驱动器时，首先要确定驱动 SiC MOSFET 所需的最大峰值电流Ipeak，可由器件上升时间与栅极电容估算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMBplEUVXWCJ9jEIWqp6kvw1m23P1vHGbriclibsTASjKdFhLecVOGwkibQ/640?wx_fmt=png&from=appmsg)

其中 QG 是总栅极充电电荷，td,on 与 tr 为导通延时与电流上升时间，td,off 与 tf为关断延时与电流下降时间。由 CAS300M12BM2 模块数据手册，计算的开通电流峰值为 7.12A，关断电流峰值为 4.86A。为了简化驱动电路，本文选取 IXYS 公司的 IXDN614 芯片作为栅极驱动器，其可在\-40°C~+125°C 工作环境下提供 14A的峰值输入输出电流，最大延时为 90ns，工作电压范围为 4.5V~35V 并可提供轨至轨输出。图 3.5 为栅极驱动部分电路图，输出级使用二极管设置开通与关断电阻，SiC MOSFET 的驱动电流均由 IXDN614 芯片提供，在其电源侧并联 4.7μF 电容与 0.1μF 去耦电容，可以将驱动电源至栅极驱动器前的杂散电感解耦，增加环路稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMr0SpTwrqdUic1yk6cAqVPeHkDsdVsXZFYWxQeT2ZXKDWk6QrV4dgibKg/640?wx_fmt=png&from=appmsg)

**3.2.3 保护电路设计**

a.安全工作区

CAS300M12BM2 模块安全工作区（Safe Operating Area,SOA）如图 3.6 所示，SOA 曲线可以分为四部分，模块正常工作时处于曲线 1，即饱和导通状态，此时工作区受导通电阻 Rds,on 限制；当电流达到 1500A 后，SiC MOSFET 受器件最大脉冲电流 Id,pluse 限制，即曲线 2；曲线 3 分为几条，分别对应不同的脉冲时间 tp，此处主要是受到器件所能承受的最大损耗限制；曲线 4 是器件的反向击穿电压限制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMEaGYx3GfY0SoNeQB16PjpFLiaw03v9vyVtgI04KKDIdLnFXuQTE4vsw/640?wx_fmt=png&from=appmsg)

b.过流保护电路

在传统硅基逆变器中，发生短路时 IGBT 的工作状态由饱和区转变到不饱和区，而在不饱和区 IGBT 的故障电流通常为额定电流的 3~5 倍，可以承受几个微秒的短路电流，对保护电路时效性要求不高。SiC MOSFET 使用 18~20V 的驱动电压，其沟道迁移率较低，导通电阻较小，短路时 SiC MOSFET 的电流增加为额定电流的 8~10 倍，通常只能承受 3~4μs 不失效\[31-32\]。因此，SiC MOSFET 过流保护电路更短的检测延时和更快的保护速度。

针对 SiC MOSFET 的过流检测，较常用的方式有采样电阻检测、感应式电流检测和退饱和检测，如图 3.7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMbeYPaRES15aOS5M6KHgCVPxG27xYKPicDGqaI99rZrUYbbpicBbwxmew/640?wx_fmt=png&from=appmsg)

采样电阻检测法是在 SiC MOSFET 的源极串联一个低阻值的无感电阻，并经过放大电路采样分流电阻两端的电压获得漏极电流 Id。采样电阻检测法电路结构简单、响应速度快，但是测量信号没有电位隔离，且在主回路中产生额外损耗。

感应式电流检测法通过非接触式电流传感器（罗氏线圈、霍尔元件等）检测SiC MOSFET 的电流。电机控制器中的电流传感器大部分都是霍尔传感器，其缺点是相应速度较慢，通常为 1μs 以上，且电流过大时磁芯会饱和，对于短路瞬间产生的大电流检测效果较差。

退饱和检测法是利用 SiC MOSFET 的输出特性，当发生短路时漏源极电压 Vds会 迅速升高退出饱和区。退饱和检测电路使用一个快速高压二极管对SiC MOSFET 导通时的 Vds 检测，并与参考电压 Vref 进行比较，如果 Vds 超过参考电压则认为发生短路故障。通常退饱和检测电路还包含一个 RC 电路，用于设置保护时间及避免误动作。退饱和检测法作为最常用的短路保护检测方法，其原理简单适用于所有功率等级的 IGBT 与 MOSFET，已经成为许多驱动芯片的集成功能。

为了提高电机控制系统的可靠性，本文同时采用感应式电流检测法与退饱和检测法设计过流保护电路。退饱和检测法相应时间快，用于功率模块的短路保护，同时利用电流传感器采样的三相电流，对功率模块进行过流保护。

本文设计的 60kW 电机控制器直流母线电压为 330V，额定输出电流为157Arms，取 2.5 倍峰值电流作为过流保护点，即 Id 大于 550A 时进行过流保护。由 SOA 曲线可知，在 330V/550A 时，CAS300M12BM2 能承受的短路时间为 50μs左右，所以过流保护电路的动作时间需要小于 50μs。

本文使用 LEM 公司的汽车级霍尔传感器 HC5FW500S 采样输出电流，其额定电流为 500A，在电流传感器后加入了分压网络、电压跟随以及二阶有源滤波器，如图 3.8 所示。电流采样电路灵敏度为 2.4mV/A，总延时为 3μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMdiarbkZtNciaOuyUfveg0SDEllLzmibeXBZjOhzOVecLvm9qrfe6OMKCg/640?wx_fmt=png&from=appmsg)

过流保护电路使用 LMV393-Q1 比较器对三相电流 IU,IV,IW 进行比较，6 个比较器的输出进行“线或”得到短路信号 FAULT，并接入数据缓冲器 SN74HC244-Q1 的使能引脚，如图 3.9 所示。过流保护电路使用 4 个分压电阻分别设置比较电流的最大值 IVERH 与最小值 IVERL，当任意一相采样电流大于 IVERH 或小于IVERL 时，比较器输出低电平，FAULT 信号拉低将 PWM 信号锁存。过流保护电路的动作时间小于 5μs，总响应时间为 8μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMaLoRj2cTlbob9ibib0icl2QM9RiaBmavBhYibbPibxU6sXKMtZ7hgxNrlEIg/640?wx_fmt=png&from=appmsg)

本文使用信号隔离芯片 ISO5451-Q1 的 DESAT 功能实现功率模块的短路保护，如图 3.10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMqqibiaeoLARqWnd7DHrAABpHW585HNud29cORYawKMWAMnIgah4qBatw/640?wx_fmt=png&from=appmsg)

ISO5451-Q1 芯片内部提供了一个 500uA 电流源为 DESAT 检测电容充电；一个比较器检测 Vdesat 电压是否超过 9V 预设值，如果超过则将输出 PWM 锁存并发出故障信号；此外还有一个由 PWM 控制的 MOSFET，在功率器件关断时为 DESAT检测电容提供放电通道。ISO5451-Q1 芯片外仅需一个二极管 Ddst、一个限流电阻Rblk 与一个充电电容 Cblk 即可实现保护功能。其中二极管 Ddst 必须满足高耐压与快恢复速度的要求，本文选用 1000V/1A 汽车级快恢复二极管 US1MFA，其恢复时间为 75ns；感性负载开关时，SiC MOSFET 反并联二极管两端会产生很大的负电压瞬变，向 DESAT 引脚抽取大量电流，限流电阻 Rblk 可以降低负电压尖峰的影响，通常取值 100Ω~1kΩ；充电电容 Cblk 可以减小 Vds 开通电压振荡对 DESAT保护电路的影响，此外可以通过 Rblk 与 Cblk 设置 DESAT 保护电路的消隐时间(blanking time)。

当 SiC MOSFET 处于导通状态时，导通压降 Vds 很低，二极管 Ddst 正向偏置，将 DESAT 引脚电压钳位至 Vds+VF，未超过预设 9V 比较电压，DESAT 保护电路不动作；当其发生短路故障时，漏源极电压 Vds 迅速增加，ISO5451-Q1 芯片通过电流源为充电电容 Cblk 充电，当 Cblk 上的电压超过 9V 时，比较器输出低电平关断 PWM 输出；当其处于关断状态时，Cblk 通过 ISO5451-Q1 芯片内部的 MOSFET快速放电，DESAT 电路恢复至初始状态。

DESAT 电路可以通过将多个 DESAT 二极管或齐纳二极管串联设定漏源极电压 Vds 的动作阈值，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM1Ff33NKA5xbGO0j0Wd6KgsZia4PzVsCgdt2iaApQ54RgFDQfJiajdy10Q/640?wx_fmt=png&from=appmsg)

式中 VF 为 DESAT 二极管导通压降，VZ 为齐纳二极管击穿电压。

图 3.11 是 CAS300M12BM2 模块的输出特性图，可以看出其没有明显的饱和区，其导通压降可以由电流与导通电阻的乘积表示，即 Vds\=Id∙Rds,on。本文仅使用一个快恢复二极管进行 DESAT 检测，US1MFA 的导通压降为 0.6V，Vds 的动作值为 8.4V，对应 SiC MOSFET 的电流为 1090A，小于 CAS300M12BM2 模块的最大脉冲电流 Id,pluse。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMbOPcSXMYvau3ib22jGdicAPvYU5nwJSdicC6xHlnLOFDkmBtXia4qDxY9w/640?wx_fmt=png&from=appmsg)

为了提高去饱和检测电路对噪声抗干扰性能，且在短路时及时动作关断功率器件，需要对其消隐时间𝑡𝑏𝑙𝑘进行设置，本文设计的去饱和检测电路消隐时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMu3PflEHAXLARGyxdLIPboA8x0z1M1L3Zic2m9lick5PkibdgN0YVMI9aw/640?wx_fmt=png&from=appmsg)

CAS300M12BM2 模块的开通电流在 200ns 内达到稳定值，为了留有裕量，选择 400ns 消隐时间，计算得到 Cblk 的值为 22.2pF。根据数据手册，ISO5451-Q1 芯片 DESAT 检测到短路故障到输出拉低的最大延时为 500ns，总动作时间 tact\=tdio+tblk+tdly\=975ns，可以满足 CAS300M12BM2 模块对短路保护时间的要求。

c.有源钳位电路

SiC MOSFET 受主回路寄生电感影响，在关断过程中会产生很高的关断过电压。且在器件短路时，过流保护电路动作关闭输出，会导致更高的 di/dt 和电压过冲，可能超出 SiC MOSFET 的击穿电压损坏功率器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM1a8OG1a4GbksPdI0ib030iauXlrOCYxOB1icgibgHMorJGibzbpRpgeOMzQ/640?wx_fmt=png&from=appmsg)

保护功率模块免受过压损坏的方法是使用有源钳位，图 3.12 为常用的有源钳位电路，其由一个快恢复二极管与瞬态电压抑制（TVS）二极管或齐纳二极管串联，接入栅极与漏极之间。

有源钳位电路的工作原理是当漏源极电压 Vds 超过某一特定电压临界值后，TVS 二极管会导通将漏源极电压钳位，同时电流从 TVS 二极管流入 SiC MOSFET栅极，为栅极电容充电并提高栅极电压，降低漏极电流 di/dt 以抑制电压尖峰。图3.13 为使用有源钳位电路后的 SiC MOSFET 关断过程波形图，其可分为五个阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMaHAX0RzsKhJJibYG59jibiatBzU0JRNJcKL9vpRyWXEWhtuxPgMrd7iaSg/640?wx_fmt=png&from=appmsg)

t0~ t1 阶段，栅极电压由驱动正电压下降至米勒电平，SiC MOSFET 保持导通状态。

t1~ t2 阶段，SiC MOSFET 开始关断，漏源极电压上升，栅源极电压维持在米勒电平。

t2~ t3 阶段，漏极电流 Id 开始下降，此时由于主回路寄生电感存在，Vds 继续上升直到达到钳位电压 Vact，有源钳位电路动作。

t3~ t4 阶段，TVS 二极管被反向击穿，吸收主回路寄生电感上的冲击能量，并产生电流流入 SiC MOSFET 栅极，使栅极电压升高，减缓了漏极电流下降速度。

在此阶段，Vds 在 SiC MOSFET 引入栅极负反馈，Vds 越大栅极电压提升越高，漏极电流 di/dt 减小，由寄生电感造成的电压过冲也随之减小，通过这个负反馈可以更快地将 Vds 降到钳位电压范围内。

t4~ t5 阶段，Vds 下降至钳位电压以下，有源钳位电路关闭，电流 Id 下降至 0，结束关断过程。

有源钳位电路中，因为 SiC MOSFET 栅极电容充电电荷较小，如果钳位电路动作时栅极充电电流过大会造成 SiC MOSFET 栅极电压超过安全电压，所以不应选择过大电流的 TVS 二极管。本文设计的有源钳位电路选用 TPSMB650CA-A 瞬态 电 压 抑制二极管，其额定击穿电压为650V，峰值电流为800mA，可将CAS300M12BM2 模块的过电压限制在安全范围。

d.串扰抑制及栅极保护电路

在桥臂中的一个开关管开通或关断时，产生的 dv/dt 会经过另一开关管的栅漏极电容产生位移电流，流入驱动回路产生串扰，可能会造成桥臂直通或栅极过电压。

通常串扰导致的寄生开通状态持续时间很短，大概在 10ns~100ns 之间\[70\]，不会造成 SiC MOSFET 短路，但会产生很高的额外损耗与 EMI，影响其他元件工作。为了预防器件的寄生开通，必须确保栅极电压小于导通阈值电压，较为常用的方法是使用有源米勒钳位(Active Miller Clamp,AMP)。其原理是在器件关断时，在栅极与源极之间提供一条低阻抗通路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMRNW5enJ94LuSSgb5O5oEvY9bjyuX0ibRRPdaE2Fw9ugNYEahjyodHrQ/640?wx_fmt=png&from=appmsg)

ISO5451-Q1 芯片具有有源米勒钳位功能，其在内部提供了一个比较器与一个额定电流 2A 的 NMOS，由 CLAMP 脚引出。由 ISO5451-Q1 构成的米勒钳位电路如图 3.14 所示，其原理是当器件处于关断状态时，CLAMP 脚检测器件的栅极电压并于 2V 预设值比较，如果栅极电压超过预设值则认为发生了串扰，比较器控制 NMOS 导通，将外部驱动电阻旁路，为栅极位移电流提供一条低阻抗路径。

然而与 IGBT 相比，SiC MOSFET 的导通阈值更低，且有着更大的内部栅极电阻。CAS300M12BM2 模块的阈值电压为 2.5V，栅极电阻为 3Ω，在使用 ISO5451-Q1 芯片的有源米勒钳位功能时只有 0.5V 裕量，如果位移电流很大则在内部栅极电阻上产生的压降仍会导致 SiC MOSFET 寄生开通。所以本文未使用 ISO5451-Q1 的有源米勒钳位功能，而是使用负压关断提高抗串扰能力。

为了抑制栅极电压振荡或有源钳位电路在 SiC MOSFET 栅极产生的电压尖峰，提高栅极可靠性，需要在驱动电路中加入栅极电压钳位功能。图 3.15 为两种不同的栅极电压钳位电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM7JtDIQjkclfx54ZtUw8uTOv9ictzosbtia35ToIevCLgM1ibQrh2w9w2g/640?wx_fmt=png&from=appmsg)

TVS 二极管钳位电路可以将栅极电压限制在 TVS 二极管的击穿电压范围内，在应用时需考虑其最高及最低击穿电压范围和温度变化对击穿电压的影响，选型时应确保最高击穿电压在功率模块的安全栅极电压范围内且最低击穿电压不应超过驱动电源电压。

另一种栅极嵌位电路是直接将栅极和驱动电源通过二极管连接，将栅极电压钳位在电源电压加上二极管压降以内。使用驱动电源钳位必须选择反向漏电流 Ir较低的二极管，如果反向电流过高可能造成关断后 SiC MOSFET 的栅极电压升高，造成寄生开通现象。

本文选择 TVS 二极管钳位电路作为 SiC MOSFET 的栅极电压保护，由于驱动电路使用+20V/-5V 非对称电源，所以选用与 SMBJ20AHE 与 SMBJ5.0AHE 两只 TVS 二极管串联，其保护范围为\-7V~24.5V。

**3.2.4 PCB 布置与寄生参数提取**

a.信号隔离布置

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMK9fnqGX0Kl0pffH4icrX6K3V6ic4lU66ic1492abB39nfOKJia8CclAwdw/640?wx_fmt=png&from=appmsg)

如图 3.16 所示，在 PCB 布置时，信号隔离芯片的布局会影响其原边与副边之间的共模电容 CIO，PCB 布局产生的寄生电容大小为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMWAI6mlMhhDuzK3lL4hyOia1Jjb6iaXw3UYGesyRBMer4xic3Rjtqsagzg/640?wx_fmt=png&from=appmsg)

式中 W 为 PCB 布线铜厚，L 为 PCB 布线长度，e0 为空气的介电常数，er 为PCB 板相对介电常数，d 为两条 PCB 布线间的距离。

在隔离器布置时，应尽量增大输入侧与输出侧之间的间距，在下方不应放置信号线、覆铜和焊盘，可将隔离器下方镂空或切槽增加爬电距离与抗干扰性能。

PCB 的布置影响了驱动电路的栅极电感，为了减小栅极寄生电感，需要将栅极驱动器尽量靠近 SiC MOSFET 模块的栅极与开尔文源极；在栅极驱动器的两端并联去耦电容，栅极电容充放电电流由去耦电容提供，可以有效降低回路总长度。

b.PCB 叠层选择及布线

PCB 设计时，使用多层板可以有效降低电路的 EMI\[71\]。以四层板为例，其叠层自上而下按照高速信号层、地平面、电源平面、低频信号层顺序配置，如图 3.17所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMxiaI7XUFR0fv0kvxGMC5ZiaT76PYZwC6Ja8t9eEGgNr83W6g7HiacOQxQ/640?wx_fmt=png&from=appmsg)

通常驱动芯片以及主要元器件放置在顶层，在顶层布置高速信号线可以避免过孔引入的电感；将地平面紧邻高速信号层放置可以为信号传输线提供可控阻抗，为驱动回路电流提供最优的低电感路径；电源平面放置在地平面下方，可以为驱动电源提供一个额外的大约 15pF/cm2 的高频旁路电容，减小电源高频噪声；将较慢的控制信号对寄生参数要求不高，可使用过孔将这些信号引入 PCB 的最底层以提高布线的灵活性。

根据以上原则，本文设计 PCB 时使用 4 层电路板，将 PWM 信号和主驱动回路放置在顶层，第二层放置信号地与功率地平面，第三层放置低压侧电源与驱动回路所需的正负电源，将短路信号、复位信号及采样信号放置在最底层，并采取交叉布线，避免对高速信号层的干扰。

为了保持信号完整性、避免噪声干扰以及降低 EMI，在 PCB 布线时需遵循以下原则：

1\. 保持两条信号线之间距离 d 为信号距地距离 h 的三倍，因为信号线下地平面返回电流密度呈 1/\[1+(d/h)2\]规律减小，如图 3.18(a)所示，d\=3h 时可将信号线间的串扰降低至 10%。

2\. 在线路转弯处使用斜 45°或圆角布线，且在与插件或器件引脚连接时使用滴泪，可以使线路各部分阻抗保持一致，减小直角信号反射产生的 EMI。

3\. 信号路径与地平面回流路径平行布置，如图 3.18(b)所示，可以利用两路径的互感降低回路的总寄生电感。当两根导线相距很近且带有大小相等方向相反的电流时，导线产生的磁场相互抵消、电场紧密耦合，大大降低了 EMI。

4\. 当使用过孔时，需确保过孔不会中断地平面上的返回电流路径，如果过孔位于返回路径中，返回电流会在其周围寻找电感最小的路径，如图 3.18(c)所示。返回电流可能会与其他信号的轨迹交叉，从而引入噪声和 EMI。

5\. 使用过孔连接地平面时，需使用多过孔多点接地。PCB 中过孔的寄生电感Lvia 可由过孔长度 h 和过孔直径 d 估算：Lvia\=2h\[ln(4h/d)+1\]，增加过孔直径无法有效降低寄生电感，使用多点接地可以降低过孔连接处的等效电感与等效电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMVY8rJ7k5FVrybCnyMqibAqEAPfOTJrpgT6pLEO8CIickTITpFXrxnkUw/640?wx_fmt=png&from=appmsg)

c.驱动电路整体结构及寄生参数提取

本文使用 Altium Designer16 软件绘制了驱动电路板，其布局图与 3D 图如图3.19 所示。PCB 布局满足 380V 三相逆变器安规距离要求，强电间距离 4mm、强弱电距离 5.5mm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMuHeWWxh9iaCG5ib59SGgHjULvsoGG7OGW02ANnNlVV53EPSC5fB1BicaA/640?wx_fmt=png&from=appmsg)

为了减小驱动回路电感，将 IXDN614 缓冲芯片与驱动电阻放置在模块驱动引脚附近，并在其两端并联 2 个 4.7μF 电容提供驱动电流以减小回路长度。本文使用 Ansys Q3D 软件对驱动回路寄生参数进行提取，对驱动回路的每一部分设置激励电流源的 source 与 sink，如图 3.20(a)所示。驱动回路电流由栅极缓冲芯片流入驱动电阻，再从驱动电阻流入功率模块的栅极，之后返回电流从模块的开尔文源极出发，流入栅极缓冲芯片的参考地。

Ansys Q3D 的仿真结果如图 3.20(b)所示，将电流回路自感与互感叠加后，驱动回路总寄生电感为 3.6nH，加上 2512 封装驱动电阻的寄生电感估算值 1nH，本文设计的驱动电路总寄生电感为 4.6nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMjqoLxTsiaztZ2JgtnTUF2N2DgYiaFdibJQPc7xp9QxwVgQ8n7fTcmrBPA/640?wx_fmt=png&from=appmsg)

**3.3 实验与结果分析**

根据驱动电路的硬件设计，本文制作了驱动板并搭建了 60kW 逆变器实验样机，如图 3.21 所示。驱动板结构紧凑，对功率模块间空闲体积进行了有效利用，且高度仅为 3mm。其一端由螺柱固定在水冷散热器上，另一端直接焊接在功率模块的驱动引脚上，直流母排及电容可直接搭接在功率模块上，实现了逆变器结构优化设计。逆变器整机尺寸为 230mm×186mm×90mm，峰值功率为 120kW，相对于文献\[72\]中的 110kW SiC 逆变器样机，功率密度由 23 kW/L 提高到了 32kW/L。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMUYClY9S9MGTSuAyicCGAbJBwvkia64fTXcuF7BzpricRjx1p80c57Jnhg/640?wx_fmt=png&from=appmsg)

为了验证实际工作条件下驱动电路的性能和可靠性，本文使用双脉冲测试平台与电机对拖台架进行实验验证。

**3.3.1 双脉冲实验**

双脉冲测试是功率器件与驱动电路性能测试的常用方法，通过此方法可以获取功率器件实际的开关延时、上升下降时间、电压电流尖峰、开关损耗与导通损耗等参数，用于评估驱动回路参数选择是否合适，以及检验保护电路的动作情况。双脉冲测试电路及波形如图 3.22 所示，其原理在此不再赘述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMiaHf3DINFRxPdHHTUv2cHnvyX5ZtY4axVM7sxqDJG5OsQAbAmuKRDOw/640?wx_fmt=png&from=appmsg)

图 3.23 为本文搭建的双脉冲实验平台，包括待测电路、续流电感、控制板、直流电源、驱动电源及测量设备等。其中待测逆变器包括三个 CAS300M12BM2 模块与驱动板，使用母排与直流支撑电容连接，直流支撑电容容量为 350μF 耐压800V；续流电感使用飞仕得多抽头空心电感，其峰值电流可达 20kA，可以通过不同的连接方式获得最小 6μH 最大 520μH 的 13 个不同电感值；控制板用于发出双脉冲信号，并通过一个外部按键触发；直流电源使用自耦变压器与不控整流提供直流电压，12V 驱动电源为控制板和驱动板供电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMOC9jWGY1jiaYicWlibJBibOksm6nER0lKjangppNrGVhkbb3p5KPHsrM2Q/640?wx_fmt=png&from=appmsg)

测量设备包含示波器、高压隔离探头与电流探头。示波器为Keysight DSOX3014T 四通道数字示波器；高压隔离探头为 Tektronix P5200A 有源差分探头，其带宽为 50M，最大测量范围为±1300V；电流探头使用 PEM CWTMiniHF15B罗氏线圈，其带宽为 30M，最大测量范围为 3000A。实验中电压与电流震荡频率小于 20Mhz，所选测量设备带宽均满足 SiC MOSFET 双脉冲测试要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMj26g9oiaXGNuTnibVHHwJmR9LB8iarYA0iae7FkNibvcA7xpDOdTia4rw4NA/640?wx_fmt=png&from=appmsg)

图 3.24 为双脉冲测试实验整体波形图，实验中选取 20μH 续流电感，设置两个脉冲宽度为 16.5μs 与 7μs，脉冲间隔为 7μs，直流母线电压为 340V，脉冲电流分别为 310A 与 480A。

从双脉冲测试波形可以看出 SiC MOSFET 带载开通关断时，漏源极电压与漏极电流均产生了振荡现象。为了匹配最优的驱动回路参数，下面通过改变驱动电阻 Rg 与栅源极电容 Cgs，测量 SiC MOSFET 的电压电流尖峰与开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMlmWV4XgygAXHknxkcAsnhBMDib9JqNfE5PmRAAvReU5qP7htIjibzXBg/640?wx_fmt=png&from=appmsg)

图 3.25 是 Rg 在 2.5Ω~10Ω 变化时 SiC MOSFET 的关断波形。当 Rg\=2.5Ω 时，关断电压振荡明显，电压尖峰达到了 505V。当 Rg 增加到 5Ω 以上时，驱动电压振荡减弱，漏源极电压尖峰随着 Rg 的增加而减小。Rg\=5Ω 时的电压超调相对于Rg\=2.5Ω 时降低了 12%，关断损耗增加了 13%，关断延时为 250ns。Rg 为 7.5Ω 或10Ω 时，虽然电压尖峰与振荡进一步降低，但其开关延迟与损耗显著增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMzATdrIyibTTad7TfzhtJS7ic4M7afofibxcOlHHiaTOm3icic7Nq1u3JLniaA/640?wx_fmt=png&from=appmsg)

图 3.26 是 Rg 变化时 SiC MOSFET 的开通波形，可以看出 SiC SBD 的反向恢复电流较小，Rg\=5Ω 时的电流尖峰为 402A，超调仅为 28%。Rg 增加对电流尖峰的影响较小，且器件开通损耗会大幅增加。对 SiC MOSFET 的关断过程与开通过程综合考虑后，本文选择 5Ω 驱动电阻，其电压振荡、开关速度与开关损耗较为均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMwKRpKRDRuXiaxdHe1vkGsPFbicNAu64bWQ51C7xBQxjhj3TeFjZq1E6g/640?wx_fmt=png&from=appmsg)

图 3.27 与图 3.28 是 Cgs 在 5nF~20nF 变化时 SiC MOSFET 的关断波形与开通波形，Rg 保持 5Ω 不变。相较于不使用栅源极电容，Cgs\=20nF 时电流超调降低了16%，而电压超调仅降低了 6%，开关损耗由 11.4mJ 增加至 19.7mJ。由实验波形可知，栅源极电容可以有效抑制过电流而对关断过电压几乎没有抑制作用，而 SiC MOSFET 开通过电流很小，无需使用 Cgs 进行抑制。另一方面，并联 Cgs 对驱动回路中的杂散电感具有解耦效果，可以改善栅极电压振荡现象，经综合考虑后本文使用 5nF 栅源极电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMVzD4HiblYya6fs18EI11UERzGMLCicOPhsficdbp1T7ljp4wziaWeETYQQ/640?wx_fmt=png&from=appmsg)

双脉冲实验还可以测试驱动电路的过流保护功能，图 3.29 是过流保护实验波形图，实验中电路参数不变，将两个脉冲时间和脉冲间隔都设置为 30μs。由实验结果可以看出当电流上升至 1139A 时，退饱和检测电路动作关断功率管，并在1.6μs 后发出故障信号。上文中退饱和检测电路动作点的计算值为 1090A，实验结果与计算值接近。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMr0OhcrF2btUicjzFHjEf3ZoGyLAeGlqZmKoj10aLUhVTYnAoMxDPYtQ/640?wx_fmt=png&from=appmsg)

**3.3.2 电机台架实验**

电机台架实验可以对电动汽车的实际工况进行模拟，测试逆变器的稳态性能、动态性能、效率与可靠性。电机台架实验平台如图 3.30 所示，其中测试电机额定电压 220V，额定转速 4000r/min，额定功率为 45kW，峰值功率 120kW；待测逆变器与陪试电机控制器采用共母线连接并由直流电源提供 330V 母线电压，实验时陪试机处于发电状态，将电能回馈至直流母线，直流电源仅提供小部分损耗电能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMc9p5UdvF9EWwBqXOuMm5ba51yX8bTkoXrG18AEOgYe1Hdp5PpwkgDg/640?wx_fmt=png&from=appmsg)

本文通过电机台架实验对逆变器实验样机进行了高速区、低速区实验，并通过转矩分析仪与功率分析仪测试了逆变器效率，使用示波器采集了逆变器输出波形。图 3.31 是测试电机工作在 5500r/min，转矩 105.65N∙m 工况下的逆变器输出波形图，此时逆变器输出功率为 63.47kW，效率为 98.4%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMuIFc6AlaB18Xjias6wWqz6gLQnOGYXzOO27AtA14TTV7S3d0apCOjXg/640?wx_fmt=png&from=appmsg)

为了验证驱动电路的栅极可靠性与抗串扰能力，本文测试了上下桥臂的栅极电压波形，如图 3.32 所示。实验时待测电机保持 60kW 额定功率运行，开关频率为 30kHz。由实验波形可以看出上桥臂开通瞬间对下桥臂的栅极电压产生了串扰，且其他桥臂的开关也会在本桥臂产生串扰现象。本文设计的驱动电路采用\-5V 关断电压，串扰尖峰均未超过 0V，不会产生寄生导通现象。另外，驱动电路使用了TVS 管对 SiC MOSFET 进行栅极保护，使得串扰电压正尖峰与负尖峰均在安全范围内，保证了栅极可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMl9tAurL58bEDbpnn07OtSmTI5Gn7TNbnDZrIbTEX8GRor01Qy9emZg/640?wx_fmt=png&from=appmsg)

**3.4 本章小结**

本章首先分析了汽车级电机控制器对环境温度、电磁兼容性与功能安全性的要求，阐明了 SiC MOSFET 驱动电路的设计要点。之后针对 CAS300M12BM2 模块进行驱动电路硬件设计，对电源模块、信号隔离芯片、栅极缓冲器等元件进行了选型；针对逆变器工作中的过电流过电压与串扰，设计了过流保护电路、有源钳位电路和栅极保护电路；提出了驱动回路低阻抗路径的布局方案，并通过 AnsysQ3D 仿真提取驱动电路的寄生参数。最后搭建了 60kW 逆变器实验样机，通过双脉冲实验对驱动电路进行了开关性能测试和过流保护测试，通过电机台架实验对实验样机进行了功率测试，本文设计的驱动电路可以稳定工作，且各桥臂均未发生由串扰引起的寄生导通现象。

**第4章 SiC MOSFET 主动驱动技术研究**

传统驱动电路无法动态改变驱动参数，往往为了限制过电压与过电流而选择较大的驱动电阻和栅极电容，降低了开关速度，无法发挥出 SiC MOSFET 高速开关的优势。主动驱动电路可以动态调节驱动参数，对各开关阶段进行独立控制，在保证开关速度的同时减小器件所受的电压电流应力。此外，主动驱动电路通过控制器件的损耗，实现各功率器件结温的调节，可提高 SiC 器件和逆变器的可靠性。本章将对 SiC MOSFET 的主动驱动电路原理、开关过程控制以及结温控制进行研究。

**4.1 主动驱动电路原理**

主动驱动电路是在传统驱动电路中加入有源控制器件，控制方法主要分为三种，即驱动电压调节、驱动电阻调节和驱动电流调节。

**4.1.1 驱动电压调节**

(1)驱动电源调节法

驱动电路一次侧电压通常由隔离 DC/DC 开关电源提供，可以通过改变开关电源的占空比或反馈系数线性调节其输出电压。但可调 DC/DC 电源设计复杂、电压变化范围小，且往往需要较大的滤波电容，相应时间较慢无法满足开关过程控制对电压变化速度的要求。

(2)多电平控制法

多电平控制法使用多个隔离电源或驱动器，在开关过程的不同阶段进行串联以调节驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMogcPbuVV87iaC5VRYic5vPtvhaHDPcONcHmznt7FoEpwfUzYQhZK463A/640?wx_fmt=png&from=appmsg)

文献\[55\]提出了三级驱动电压对 SiC MOSFET 的开关过程进行控制的方法，如图 4.1 所示。其中第一个驱动器为 SiC MOSFET 提供\-4V 负压，并在器件开始导通时将电压抬升至 3V 附近，使其刚好低于栅极电压导通阈值 Vth；第二个驱动器的输出电压 0~5V 可调，可在导通阈值与米勒电平之间对驱动电压精确控制；第三个驱动器在开关完成后提升栅极电压以降低导通电阻 Rds,on。

(3) 源极升压法

源极升压法通过对 SiC MOSFET 源极电压抬升，来改变驱动电路的等效电压\[48\]。典型源极升压电路如图 4.2 所示，其通过+20V 主驱动电源与+5V 源极升压电源组合成+20V/+15V/0V/-5V 四种驱动电压，对器件的开通关断过程进行调节。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMecrGkuWVOo79jbiatFCrfUtW4GSCrpFIhber3yGHFKnISh0mmd6sA7w/640?wx_fmt=png&from=appmsg)

**4.1.2 驱动电阻调节**

(1)短路电阻法

短路电阻法在 SiC MOSFET 栅极串联多个驱动电阻，使用开关对电阻进行投切，如图 4.3 所示。由于 SiC MOSFET 开关时的电流方向不同，使用短路电阻法调节驱动电阻时需要使用两个 MOS 反向串联组成的双向开关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM9R2ibbEnTKibrzCwroHCibuDTdall7fgXV3aicp97XgsicNgCgx2M55eURg/640?wx_fmt=png&from=appmsg)

(2)多电阻切换法

当驱动电路使用输出分离式栅极驱动器时，可以使用多条开通与关断支路对驱动电阻进行调节，如图 4.4 所示。选择驱动电阻时，可以使用 74 系列多路选择器将 PWM 信号分配给任意开关，或使用 FPGA 对各个开关信号进行独立控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMWJdej3CNPCJjicOyYmPHL9Zg0NxfSNNNokjEgALmZRA7cMv2KEU1ibuw/640?wx_fmt=png&from=appmsg)

**4.1.3 驱动电流调节**

(1)栅极分流法

栅极电流分流是最简单的调节驱动电流的方法，通常选择在外部驱动电阻与SiC MOSFET 栅极之间加入一条分流路径，通过开关管控制分流支路工作并通过改变电阻设置分流电流大小，如图 4.5 所示。栅极电流分流法通常用于减慢功率器件的开关速度，此外还可以将分流支路与驱动正负电源连接，对 SiC MOSFET栅极注入电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMpQUWOAd4XIYhsoHGLCeic93n5icJcJKJe7GCDQlqefxXZicniaHnzzw6mA/640?wx_fmt=png&from=appmsg)

(2)三极管控制法

三极管控制法是在驱动回路中串联 BJT，使 BJT 工作在放大区控制栅极电流\[73\]。由于 BJT 只能单向导通，所以需要使用 PNP 与 NPN 分别构成充电回路与放电回路，其原理图如图 4.6 所示。改变电压 Vb1 与 Vb2 可以栅极的开通关断电流进行控制，其公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMAfqXYMZcMXSCMuvHWRvyicMPorD24ibicXysWcBFBEibfzkHzm96HcViarg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMgaybSTbib7azWkkplDI1mPqY8WUsUFQpBeAYo5ficMNMibV2Qtf3iccztg/640?wx_fmt=png&from=appmsg)

其中 β 为三极管电流放大倍数，Vbe 为 PN 结压降，Vg+与 Vg-为驱动正电压与负电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMD1arqmwpYS0EmPbiaiagKgUaL5udicFeOsug7V2D0dbSn9rOOaLQaYOTw/640?wx_fmt=png&from=appmsg)

(3)镜像电流源法

镜像电流源是集成芯片中的常用电路，可为各个放大级提供恒定电流，其电路原理如图 4.7 所示。镜像电流源使用两根特性相同的 BJT 构成，它们的射级相互连接，基极共同连接至一根管子的集电极。镜像电流源工作时 T1、T2 的基极电流与集电极相等，且当电流放大倍数 β\>>2 时，T1 管及 T2 管集电极电流大小为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMJicqGEenHmn5jHC6ypAsbOwicL4V5pKOyRVkwos12UOVoblEbds9qpLA/640?wx_fmt=png&from=appmsg)

其中 Vbe 为 BJT 的 PN 结压降。使用镜像电流源可通过改变电压 Vc 控制 T2从栅极抽取电流，同理可使用 PNP 管组成的镜像电流源对栅极注入电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMepgpscdMnAmcLUAMzZsUvrJLpx2xtMqF7oNVe5EXJ8gFwXoEKEsSSg/640?wx_fmt=png&from=appmsg)

**4.2 主动门极驱动开关过程控制**

由第二章对 SiC MOSFET 开关过程的分析可知，为了减小电流和电压过冲需要降低其开通与关断时的电流变化率，本节对 SiC MOSFET 开关阶段的 di/dt 控制进行研究。

SiC MOSFET 理想的开关过程是在导通或关断延时阶段有较大的栅极驱动电流 ig，减少输入电容 Ciss 的充放电时间，缩短导通或关断延时；在电流上升阶段和电流下降阶段减小驱动电流 ig，降低漏极电流 Id 的变化率，以减小电压过冲以及电流过冲；在电压上升/下降阶段再次增加栅极驱动电流，以减小米勒效应的影响，加快栅源极电压 Vds 的变化速度，降低开关损耗。

**4.2.1 开关阶段的检测方法**

为了对 SiC MOSFET 的开关过程进行控制，首先需要判断其所处的开关阶段。SiC MOSFET 的开通阶段与关断阶段中，漏极电流 Id、漏源极电压 Vds、栅源极电压 Vgs 和栅极电流 ig 发生了变化，其中栅极电流检测方法较为复杂，一般不用作判断开关阶段。根据选择参数的不同，开关阶段的检测方法通常分为三种：栅极电压检测、di/dt 检测与 dv/dt 检测。

(1)栅极电压检测

在整个开关过程中，SiC MOSFET 的 Vgs 随着开关阶段改变。使用栅极电压判断开关过程需要对阈值电压 Vth 和米勒电平 Vmiller 两个电压进行比较。然而，阈值电压与米勒电平并不是保持不变的，Vth 会随着结温的升高而减小；米勒电平 Vmiller受到漏极电流 Id 的控制，在检测时需要对 Id 进行补偿，且受到寄生输出电容 Coss的影响，导通时的 Vmiller 电压往往高于关断时的 Vmiller 电压\[74\]。所以在使用比较器判断开关过程时，往往需要为开通或关断阶段分别设置比较电压，如图 4.8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM7NGQgswzWfVYUqNXaODmfwv7rA5dcKB0MVl0mmz1AvyVUVsfp1hmaQ/640?wx_fmt=png&from=appmsg)

(2)di/dt 检测

在判断开关阶段时，不需要对实际的电流进行采集，只需测量电流的变化率di/dt 即可。如图 4.9 所示，对于含有开尔文源极的功率模块，可以通过检测源极电感 Ls 上的电压，即 VLs\=Ls∙di/dt。以驱动回路地作为基准，当 SiC MOSFET 处于电流上升阶段时，感应电压 VLs 为负，在 SiC MOSFET 的电流下降阶段中 VLs 为正，其他阶段漏极电流不变，VLs 为 0。

然而在非理想开关过程中，漏极电流并不是单调变化的。在开通过程电流上升阶段后，续流二极管产生反向恢复电流，造成漏极电流的过冲与振荡；在关断过程电压上升阶段后，受续流二极管寄生电容影响，漏极电流会略微下降。非理想开关过程中漏电流的变化与振荡影响了 Ls上的感应电压 VLs，所以实际应用中，不能仅凭 VLs 的正负判断 SiC MOSFET 开关过程所处的阶段，合理设置比较器的动作范围，可有效降低漏电流非理想变化造成的误判。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM1gWLcL8czra5b71lLWLjianXOb85jWZuXbWnoXkVeLWfpicgvP2icSggg/640?wx_fmt=png&from=appmsg)

(3)dv/dt 检测

与使用电感上的感应电压检测 di/dt 相似，使用电容上的位移电流可以对 dv/dt检测，以判断电压下降阶段与电压上升阶段。典型 dv/dt 检测电路如图 4.9 所示，其在 SiC MOSFET 的漏极并联了一条阻容支路，当漏极电压变化时，反馈电容上的位移电流为 iCf\=Cf∙dv/dt，位移电流在串联电阻上产生的压降为 Vf\=Rf∙iCf。通过对反馈电阻 Rf 上的电压进行检测即可判断 SiC MOSFET 所处的开关阶段。相应的，非理想开关造成的电压振荡会影响 dv/dt 检测电路的准确性，在实际应用中也需要设置比较电压裕量，以降低误判。

此外，三种方法均需要使用比较器进行开关阶段的判断，SiC MOSFET 开关时间在 200ns 左右，为了实现开关过程的精确控制，选用的比较器带宽应大于100Mhz。

**4.2.2 新型主动驱动电路**

本文提出了一种新型主动驱动电路，其原理图如 4.10 所示。该电路在现有传统 SiC MOSFET 驱动电路基础上加入了 di/dt 检测电路与分流电路，辅助电路无需额外电源及驱动，结构简单易于实现。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMnx1X0rVzmCqt9N19O2hvrsnnbHibc22ExYWLRsQoiatibOkMfX8hTQj8A/640?wx_fmt=png&from=appmsg)

di/dt 检测电路通过检测 SiC MOSFET 功率模块源极电感的感应电压，判断其是否处于电流上升阶段或电流下降阶段。分流电路接收 di/dt 检测电路的控制信号，在电流上升或电流下降阶段减缓 SiC MOSFET 栅极充放电电流，降低漏极电流变化率。下面对其工作过程进行分析：

电流上升阶段时，漏极电流 Id 在源极电感 Ls 上产生感应电压 VLs，其方向与电流方向相反(上正下负)。当感应电压低于比较器 U2 的比较电压 Vc,low 时，即Ls×di/dt<Vc,low，其输出由低变为高，控制分流电路下桥臂导通，对驱动电流 ig 进行分流，延长 SiC MOSFET 电流上升阶段时间，如图 4.11(a)所示。

电流下降阶段时，感应电压与电流方向相同（上负下正）。当感应电压高于比较器 U1 的比较电压 Vc,high 时，即 Ls×di/dt\>Vc,high，其输出变为低电平，分流电路上桥臂导通，驱动正电压向门级注入电流，减缓栅源极电容放电速度，如图 4.11(b)所示。

其他阶段时，漏极电流基本不变，源极电感 Ls 上的感应电压近似为 0，比较器 U1 输出高电平，比较器 U2 输出低电平，分流电路不动作。

为了避免寄生电容与电流振荡对 di/dt 检测电路的影响，需根据实际工况设置比较器 U1 与 U2 的比较电压值，通常使用电阻分压得到 Vc,high 与 Vc,low。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMSLOLeC93QiciaFwTmADRRZ6WvjibXJsFpUMErJgOiaXpwjibqHZ5yHU9DCw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 开环主动驱动电路可以通过设置 Rg,ext、Rpull、Rpush 对开关 di/dt进行精确控制，驱动电路开通过程的等效电路如图 4.12(a)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMfLXZiaKNic7wV56gYRBhEe8sb5r9v45iaanEwefZQ1WyDj8XymKeGA6uQ/640?wx_fmt=png&from=appmsg)

开通过程电流上升时间 tri 计算步骤如下：

电流上升阶段开始时，Ciss 电压为阈值电压 Vth。开关 S1、S2 闭合，将简化电路进行 Y-Δ 变换，如图 4.12(b)所示。其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMzjEdTCorRDmhrMZ0L8ufywoA4dUADLUFib4rOXhHqoAvMg70yVV8qfA/640?wx_fmt=png&from=appmsg)

驱动电路关断过程的等效电路如图 4.13 所示，同理可以计算关断过程的 di/dt

与电流下降时间 tf。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM871XgtYJNm8Wj7SFCpDx6qehOUFuMf9ZVCu0K77ibrXq2M26QnPrdvQ/640?wx_fmt=png&from=appmsg)

**4.2.3 仿真分析**

为了验证开环主动驱动电路工作原理，本文在第二章搭建的 CAS300M12BM2模块驱动回路参数的仿真模型上，加入了 di/dt 检测电路与分流电路，如图 4.14 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMUooJ40icNr4StUEggN5V129hTx8rFEgchgicdRDrl5YIukNYIb4xgfaQ/640?wx_fmt=png&from=appmsg)

di/dt 检测电路使用两个电压比较器 LTC6752 采集功率模块源极电感 Ls 上的感应电压，并与预设电压 VCMP1 与 VCMP2 比较。VCMP1 为关断过程感应电压比较值，设置为 15V 抑制输出电容造成的电流下降，VCMP2 为开通过程感应电压比较值，设置为\-30V 抑制开通电流振荡。为了简化仿真电路，在分流电路中使用两个理想开关代替上下桥臂 PMOS 与 NMOS，di/dt 检测电路的两个比较器控制S1 与 S2 的开关。开通与关断分流电阻均为 15Ω，根据公式(4.10)与公式(4.13)可以计算出开通中点电压 Vmid,on 为 13.75V，关断中点电压 Vmid,off 为 1.25V，可保证器件可靠开通与关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMGsBxDO0x7pWUUB1IxcPofNowL6phiadxY75icjcOGjHSicEbJQLl4ic9QQ/640?wx_fmt=png&from=appmsg)

使用本文提出的主动门极驱动（AGD）以及传统驱动方法（CGD）Rg 分别为5Ω 与 10Ω 时的开关波形如图 4.15 所示。SiC MOFET 开通过程中，AGD 减缓了漏极电流的上升速度，但与此同时主回路寄生电感产生的压降减小，增大了开通损耗。使用 AGD 时，电流过冲较 Rg\=5Ω 时的 CGD 降低了 22%与 Rg\=10Ω 时持平，开通损耗较 Rg\=5Ω 时增加了 25%，较 Rg\=10Ω 时降低 14%。SiC MOFET 关断过程中，使用 AGD 不会影响 Vds 的上升过程，在电流下降阶段减小了 di/dt 对关断过电压与振荡有明显的抑制作用。使用 AGD 较 Rg\=5Ω 时的电压过冲降低了30%，且由于电压超调与振荡的减小，关断损耗由 5.77mJ 降低至 5.7mJ，较 Rg\=10Ω时降低了 26%。

另一方面，使用 AGD 可以显著减少开通与关断延时，在电压超调与电流超调相当的情况下，相对于 Rg\=10Ω 时开通延时降低了 40ns，关断延时降低了 132ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMNBhECYiakx0b3Ky6JWPsOG1YykhSk6T7l4nSHzqyuBccuv7xsCWjsZw/640?wx_fmt=png&from=appmsg)

图 4.16 是 AGD 中 di/dt 检测电路以及分流电路波形，从图中可以看出当比较器 U2 检测到源极电感的感应电压小于 VCMP2 时，输出低电平控制下桥臂分流电路导通，驱动电流通过 Rpush 分流，流入 SiC MOSFET 栅极电流减小，值得注意的是此阶段电流振荡在 Ls 上产生的干扰较大，主动驱动电路可能发生误动作；在关断阶段，比较器 U1 检测到 VLs 大于预设电压 VCMP1 时，输出高电平控制上桥臂分流电路导通，驱动正电源通过 Rpull 为栅极注入电流，减小栅极放电电流，仿真结果与上文中的理论分析一致。

本文提出的新型 SiC MOSFET 主动驱动电路通过对 di/dt 的调节，显著降低了开关过电压与过电流，并且在控制电压过冲与电流过冲相等的情况下，较传统增大驱动电阻控制可以降低 36%的开关延时与 21%的开关损耗。虽然使用主动驱动电路有着诸多优势，但其容易受到电流振荡的影响导致 di/dt 检测电路与分流电路误动作。针对此缺陷，除了设置合适的比较电压之外，还可以使用逻辑电路对比较器输出信号进行处理，使分流电路只响应比较器发出的第一个信号，对其他短脉冲进行抑制。

**4.3 主动驱动结温控制策略**

**4.3.1 结温控制意义**

由于 SiC MOSFET 各层材料特性和制造工艺不同，当功率加载到器件上时，各层材料热膨胀程度不一致产生热应力。而长时间的功率循环也将导致材料疲劳和老化，最终过高的机械过应力使得器件键合引线及键合失效\[75\]。衡量器件可靠性的重要指标是功率循环总次数 Nf，其 Coffin-Manson-Arrhenius 模型为\[76-77\]：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMmpdnibrXX8gQOZmO7Gic4nBWo1UbDMEq8jwnFh3rGmfmiaZACtys4Okeg/640?wx_fmt=png&from=appmsg)

其中 Tm 为器件平均结温，ΔT 为结温波动，A 与 α 是器件相关常数，通常由实验测得，Ea 为激活能量常数，取 7.8×104J/mol，kB 为玻尔兹曼常量，其值为8.314J/(mol•K)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMAgo1mvXR9uGzFSRz3vPpllGARhlZdMo7fBkZXAUr5wp9ibkqrEEkhdA/640?wx_fmt=png&from=appmsg)

图 4.17 是根据 Coffin-Manson-Arrhenius 模型绘制的平均温度和温度波动对功率循环次数的影响曲线，可以看出平均结温和结温波动影响器件运行寿命，且结温波动对器件运行寿命影响更大。

主动驱动电路可以通过调节驱动电压、驱动电阻和栅极电流等驱动参数，控制 SiC MOSFET 的损耗，并可对各功率器件结温独立调节。使用主动驱动电路控制功率模块的结温波动，可以增加器件的功率循环次数，提高逆变器整机的可靠性。

**4.3.2 导通损耗及开关损耗控制**

SiC MOSFET 的损耗主要由导通损耗 Pcond、开关损耗 Psw 与驱动损耗 Pdriver构成，其中驱动损耗主要是栅极电容充电电流在内部栅极电阻 Rg,int 上产生热损耗，其数值很小可以忽略不计。

SiC MOSFET 的导通损耗由漏极电流 Id 在器件的导通电阻 Rds,on 上产生，而Rds,on 会随着 Id 的增加而增加，且受到栅极电压影响，Vgs 越大 Rds,on 就越小。本文利用 CAS300M12BM2 模块数据手册中的输出特性曲线，使用 getdata 软件取得漏极电流 Id 与漏源极电压 Vds 组成的数据点，两者相乘可以得到 SiC MOSFET 的导通损耗 Pcond。将漏极电流 Id 与导通损耗 Pcond 的数据点导入 MATLAB 中使用CFTOOL 工具进行二次拟合，其拟合公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMa6NagfafgKhqcN8hSvXryh7ibSYa1JcmNnP2nRxhF7tic0BSLq32z9Bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUM9ibwV0vmplTVBiccpic51YIYOXhWhV1JPS1GmJIymjR7j8JKaF9Fpg8tw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMqku3HxtDtdUKickPNSxfzx5clFhO9d7hficmH2yUQolppoAFnXgFoGsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMWX1z35aDaa1eHhIoCRemUGicFlFf2ZqNs1drAiclibmcZTcUPgLm8fYBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMJJ79C2BdVDWOg1bSuxfsdVQy3HIbY5nMlfVvlNQBfZvca6HqTXStEA/640?wx_fmt=png&from=appmsg)

由公式(4.27)可以看出电压电流上升时间与下降时间均与 Rg 成正比，改变驱动电阻可以同时影响开通损耗与关断损耗。在开通阶段，可以通过改变驱动电压改变开通速度，驱动电压越高开通损耗越低。在关断阶段，改变驱动正电压只会影响的关断延时，无法改变关断损耗。

由以上分析可以得出 SiC MOSFET 的导通损耗主要受驱动电压 Vg 和漏极电流 Id 影响，可以通过控制 Vg 调节器件的导通损耗；其开关损耗同时受到 Vg、Rg、Id 与 Vds 影响，在驱动电路中改变 Vg 与 Rg 可以实现开关损耗的调节。

**4.3.3 结温平滑控制仿真分析**

电动汽车逆变器作为非稳定工况变流器，在大范围功率波动工况下承受很大的热应力冲击，根据主动驱动电路可以控制器件损耗的特点，可以平滑功率器件的结温波动，其控制框图如图 4.19 所示。其中工况判断模块根据负载电流计算功率器件所需损耗，在大电流负载时降低损耗并在负载降低时增加损耗，之后由公式(4.19)与公式(4.27)计算主动驱动电路电压与电阻设置值，并由主动驱动电路动作切换 Vg 与 Rg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMNScSfl5wibGiaEgDeyDxicxoD0mr7bgMA28VLVe4ADk9ibhRSKNh2Q6jIg/640?wx_fmt=png&from=appmsg)

本文在第二章搭建的 CAS300M12BM2 模块的 LTSpice 模型的基础上，加入了驱动电压调节与驱动电阻切换电路，对主动驱动电路的结温平滑控制进行了仿真，如图 4.20 所示。其中，驱动电压调节使用源极升压法，驱动电阻调节使用短路电阻法。为了模拟逆变器大功率低频波动工况，在仿真中使用一个开关切换负载，使负载电流峰值在 300A 与 150A 之间以周期 0.8s 变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMz40sY5Priaeu4J7JLj1FqaVicH03xNf3Knslias6cyVakZVMsOAFj2Q7Q/640?wx_fmt=png&from=appmsg)

未添加结温平滑控制时驱动电阻 Rg 设置为 5Ω 并保持驱动电压为 20V 不变，使用结温平滑控制时 SiC MOSFET 升温阶段使用 2.5Ω 驱动电阻与 20V 驱动电压，降温阶段 Rg 与 Vg 设置为 15Ω 和 14V。根据公式(4.19)与公式(4.27)计算，未使用结温平滑控制时升温阶段的导通损耗 Pcond 与开关损耗 Psw 分别为 386.7W 和204.3W，降温阶段 Pcond 与 Psw 分别为 93.5W 和 83.9W；使用结温平滑控制时升温阶段的 Pcond 不变，Psw 降低为 140.5W，降温阶段 Pcond 升高为 116.2W，Psw 升高为 236.5W。使用结温平滑控制主要作用于 SiC MOSFET 轻载时提高结温，升温阶段总损耗降低了 63.8W，降温阶段总损耗增加了 175.3W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMwBrNcgFqicsw1YxMAzspF2ZibThoBQcb2OnI6KJfWw2Tdva6XlZpGCsg/640?wx_fmt=png&from=appmsg)

图 4.21 是使用结温平滑控制前后 SiC MOSFET 的栅极电流波形，未加控制时驱动电阻与驱动电压不变，栅极电流峰值始终维持在 3.1A；加入控制后在重载阶段使用更小的驱动电阻，栅极电流峰值为 4.4A，轻载时驱动电压降低驱动电阻增加，使栅极电流降低为 1.1A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMhiacpIAs1a9MiarcN03o2IgbO4koldlCicguzya8WRjibiadFbgHMicmqbuA/640?wx_fmt=png&from=appmsg)

图 4.22 为栅极电流局部放大图，可以看出改变 Rg 与 Vg 可以控制 SiC MOSFET的开通时间，Rg 为 5Ω 时开通时间为 1.7μs，Rg 为 2.5Ω 时开通时间为 1.5μs，Rg 为15Ω 且 Vg 为 14V 时开通时间为 2.7μs。

结温平滑控制前后 SiC MOSFET 的结温变化如图 4.23 所示。从图中可以看出温度控制前器件最高结温为 141°C，最低结温为 78°C，低频结温波动为 43°C；使用结温平滑控制后器件最高结温为 133°C，最低结温为 91°C，低频结温波动为20°C。在相同功率循环条件下，使用主动驱动电路对 SiC MOSFET 进行结温平滑控制，降低了 23°C 的结温波动，且将器件最高温度降低了 8°C，显著减小了器件的热应力冲击。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMwMged9SzzCO06ibXE67uicIMxECEmrLDoiaxqswgNaZOibUQ4Q4sEKImEQ/640?wx_fmt=png&from=appmsg)

结温平滑控制虽然可以有效降低结温波动，但是其提高轻载时器件结温主要是通过增加导通损耗与开关损耗实现的，会降低轻载时逆变器的系统效率。此外，由于在降温阶段提升了结温，采用结温平滑控制时 SiC MOSFET 的平均结温较未加控制时提升了 5.4°C，但因显著减小了结温波动，器件的功率循环周期数增加了了 2 倍以上。

**4.4 本章小结**

本章对 SiC MOSFET 的主动驱动技术进行了深入研究，首先介绍了主动驱动电路的基本类型，研究了变驱动电压、变驱动电阻与变驱动电流三种方式的电路拓扑结构；之后提出了一种新型主动驱动电路实现 SiC MOSFET 的开关过程控制，其通过 di/dt 检测电路与分流电路对电流上升与下降时间进行控制，可以显著减小开关过电压与过电流；最后，本章研究了基于主动驱动电路的结温控制策略，通过改变驱动电压与驱动电阻对 SiC MOSFET 导通损耗与关断损耗进行控制，降低负载变化造成的结温波动，提高了逆变器的寿命。

**结论与展望**

新能源汽车的发展对电机控制器的小型化、轻量化和高能效提出了更高的要求。传统硅基半导体的性能已经逼近物理极限，以 SiC MOSFET 为代表的宽禁带器件具有耐压高、开关速度快、损耗小和高温性能优异的特点，在电动汽车应用中具有明显优势。本文针对电动汽车逆变器 SiC MOSFET 驱动技术进行了深入研究，具体完成的工作内容如下：

（1）分析了 SiC MOSFET 的器件结构和工作原理，对比了 SiC 与 Si MOSFET静态特性与动态特性的差异。研究了其在感性负载下的非理想开关过程，并对 SiC MOSFET 在高频应用中的主回路振荡与驱动回路振荡产生机理进行分析。分析了驱动参数对 SiC MOSFET 开关瞬态的影响，使用 CREE 公司提供裸片模型搭建了包含寄生参数的 CAS300M12BM2 功率模块 LTSpice 仿真电路，对驱动电路中的驱动电阻与栅极电容进行优化。

（2）根据电动汽车逆变器驱动电路的要求，针对 CAS300M12BM2 模块进行驱动电路硬件设计，对电源模块、信号隔离芯片、栅极缓冲器等进行了选型；针对逆变器工作中的过电流过电压与串扰，设计了过流保护电路、有源钳位电路和栅极保护电路；提出了驱动回路低阻抗路径的布局方案，并通过 Ansys Q3D 仿真提取驱动电路的寄生参数。搭建双脉冲实验平台对本文设计的驱动电路进行了开关性能测试，并根据实验结果选择最优的驱动电阻与栅极电容。之后对驱动电路进行了过流保护实验，本文设计的短路保护电路可以正常动作，保证 SiC MOSFET不被损坏。最后对驱动电路进行了电机台架实验，在 60kW 额定功率下驱动电路可以稳定工作，且各桥臂均未发生由串扰引起的寄生导通现象。

（3）研究了主动驱动电路提高 SiC MOSFET 开关性能与可靠性的方法。提出了一种新型主动驱动电路控制 SiC MOSFET 的开关轨迹，其通过 di/dt 检测电路与分流电路对电流上升与下降时间进行控制，可以显著减小开关过电压与过电流。研究了基于主动驱动电路的结温控制策略，通过改变驱动电压与驱动电阻对SiC MOSFET 导通损耗与关断损耗进行控制，降低负载变化造成的结温波动，提高了逆变器的寿命。

受研究时间和实验条件限制，本文还有以下几方面有待进一步的研究和改进：

（1）由于未能获得 CAS300M12BM2 模块完整的封装模型，本文搭建的仿真模型中的寄生参数与热阻网络参数是根据数据手册和经验公式推算的，如果使用实际封装模型进行建模会使仿真结果更准确。

（2）本文使用去饱和检测进行短路保护，其响应时间较长，需要进一步研究快速高效的 SiC MOSFET 短路保护方案。

（3）本文未对驱动电路进行温度循环测试，后续将在高低温试验箱中测试高温下 SiC MOSFET 性能变化与驱动电路的稳定性。

（4）本文仅对主动驱动电路进行了理论计算和仿真分析，但受时间所限未搭建实验平台。后续经过实验验证后可以将其应用于本文设计的驱动电路中，以提高开关性能及可靠性。

参考文献

\[1\] 陈清泰 . 电 动 汽 车 引 领 工 业 革 命 的 新 一 轮 变 革 \[N\]. 中国科学报 ,2019-01-28(007).

\[2\] The electric vehicle world sales database. Global EV Sales for 2018 – Final Results.\[EB/OL\].\[2019-03-15\].http://www.ev-volumes.com/news/global-ev-sales-for-2018.

\[3\] 王学梅.宽禁带碳化硅功率器件在电动汽车中的研究与应用\[J\].中国电机工程学报,2014,34(03):371-379.

\[4\] 节能与新能源汽车技术路线图战略咨询委员会. 节能与新能源汽车技术路线图\[M\].北京：机械工业出版社,2016:104-123.

\[5\] 董耀文,秦海鸿,付大丰,徐华娟,严仰光.宽禁带器件在电动汽车中的研究和应用\[J\].电源学报,2016,14(04):119-127.

\[6\] Shang F , Arribas A P , Krishnamurthy M . A comprehensive evaluation of SiC devices in traction applications\[C\]// Transportation Electrification Conference & Expo. IEEE, 2014.

\[7\] Rechard Eden. Market Forecasts for Silicon Carbide & Gallium Nitride Power Semiconductors\[C\]// IEEE Applied Power Electronics Conference. 2016.

\[8\] 许 泓 , 任荣杰 . 碳 化 硅 器 件 在 节 能 减 排 领 域 的 应 用 展 望 \[J\]. 中国能源,2018,40(08):43-47.

\[9\] 佚 名 . 中 车 时 代 电 气 碳 化 硅 器 件 项 目 通 过 科 技 成 果 鉴 定 \[J\]. 半 导 体 信息,2017(05):13-14.

\[10\] 曹峻.碳化硅半导体技术和市场应用综述\[J\].集成电路应用,2018,35(08):5-9.

\[11\] Singh R , Jeliazkov S , Grummel B , et al. Switching and robustness analysis of 10 kV SiC BJTs\[C\]// Wide Bandgap Power Devices & Applications. IEEE, 2015.

\[12\] S. Madhusoodhanan et al. Harmonic Analysis and Controller Design of 15 kV SiC IGBT-Based Medium-Voltage Grid-Connected Three-Phase Three-Level NPC Converter\[J\]. IEEE Transactions on Power Electronics, 2017, 32(5):3355-3369.

\[13\] 漆宇,李彦涌,胡家喜,范伟,唐威.SiC 功率器件应用现状及发展趋势\[J\].大功率变流技术,2016(05):1-6.

\[14\] Han D , Sarlioglu B . Study of the switching performance and EMI signature of SiC MOSFETs under the influence of parasitic inductance in an automotive DCDC converter\[C\]// Transportation Electrification Conference & Expo. IEEE, 2015.

\[15\] Bogonez-Franco P , Balcells J . EMI comparison between Si and SiC technology in a boost converter\[C\]// 2012 International Symposium on Electromagnetic Compatibility (EMC EUROPE). IEEE, 2012.

\[16\] 钟志远,秦海鸿,袁源,朱梓悦,谢昊天.碳化硅 MOSFET 桥臂电路串扰抑制方法\[J\].电工电能新技术,2015,34(05):8-12+23.

\[17\] Jahdi S , Alatise O , Ortiz Gonzalez J A , et al. Temperature and Switching Rate Dependence of Crosstalk in Si-IGBT and SiC Power Modules\[J\]. IEEE Transactions on Industrial Electronics, 2016, 63(2):849-863.

\[18\] ZVEI Robustness Validation Working Group. Handbook for Robustness Validation of Automotive Electrical/Electronic Modules\[M\]. 2nd edition.Frankfurt:Zentralverband Elektrotechnik-und Elektronikindustrie,2013.

\[19\] 黄润华,钮应喜,杨霏,陶永洪,柏松,陈刚,汪玲,刘奥,卫能,李赟,赵志飞.碳化硅MOSFET 栅氧化层可靠性研究\[J\].智能电网,2015,3(02):99-102.

\[20\] Hull B , Allen S , Zhang Q , et al. Reliability and stability of SiC power mosfets and next-generation SiC MOSFETs\[C\]// Wide Bandgap Power Devices &Applications. IEEE, 2014.

\[21\] Wang X, Zhao Z, Zhu Y, et al. A comprehensive study on the gate-loop stabilityof the SiC MOSFET\[C\]//2017 IEEE Energy Conversion Congress and Exposition (ECCE). IEEE, 2017: 3012-3018.

\[22\] 邹世凯,胡冬青,黄仁发,崔志行,梁永生.SiC MOSFET 驱动电路设计与实验分析\[J\].电气传动,2017,47(09):59-63.

\[23\] 张 旭 , 陈 敏 , 徐 德 鸿 .SiC MOSFET 驱动电路及 实 验 分 析 \[J\]. 电源学报,2013(03):71-76.

\[24\] 彭咏龙,李荣 荣,李亚 斌.大功率 SiC MOSFET 驱动电路 设计\[J\].电测与仪表,2015,52(11):74-78.

\[25\] 刘 仿 , 肖 岚 .SiC MOSFET 开 关 特 性 及 驱 动 电 路 的 设 计 \[J\]. 电力电子技术,2016,50(06):101-104.

\[26\] Gao R , Yang L , Yu W , et al. Single chip enabled high frequency link based isolated bias supply for silicon carbide MOSFET six-pack power module gate drives\[C\]// Energy Conversion Congress & Exposition. IEEE, 2017.

\[27\] 金淼鑫,高强,徐殿国.一种基于 BJT 的耐 200℃高温碳化硅 MOSFET 驱动电路\[J\].电工技术学报,2018,33(06):1302-1311.

\[28\] 祁锋,徐隆亚,王江波,赵波,周哲.一种为碳化硅 MOSFET 设计的高温驱动电路\[J\].电工技术学报,2015,30(23):24-31.

\[29\] 王翰祥,蒋栋.基于分立器件的 SiC MOSFET 功率模块门极驱动电路设计\[J\].电工电能新技术,2018,37(10):51-57

\[30\] Lamichhane R R, Ericsson N, Frank S, et al. A wide bandgap silicon carbide (SiC)gate driver for high-temperature and high-voltage applications\[C\]//2014 IEEE 26th International Symposium on Power Semiconductor Devices & IC's (ISPSD). IEEE,2014: 414-417.

\[31\] Reigosa P D, Luo H, Iannuzzo F, et al. Investigation on the short circuit safe operation area of SiC MOSFET power modules\[C\]//2016 IEEE Energy ConversionCongress and Exposition (ECCE). IEEE, 2016: 1-6.

\[32\] Wang Z, Shi X, Xue Y, et al. Design and performance evaluation of overcurrent protection schemes for silicon carbide (SiC) power MOSFETs\[J\]. IEEE Transactions on Industrial Electronics, 2014, 61(10): 5570-5581.

\[33\] Rice J, Mookken J. SiC MOSFET gate drive design considerations\[C\]//2015 IEEE International Workshop on Integrated Power Packaging (IWIPP). IEEE, 2015: 24-27.

\[34\] Rujas A, Garcia G, Etxeberria-Otadu I, et al. Design and experimental validation of a high frequency gate driver for silicon carbide power modules\[C\]//2014 IEEE Energy Conversion Congress and Exposition (ECCE). IEEE, 2014: 5729-5735.

\[35\] 周帅,张小勇,饶沛南,张庆,施洪亮.大功率 SiC-MOSFET 模块驱动技术研究\[J\].机车电传动,2018(02):26-31.

\[36\] Wang J, Shen Z, DiMarino C, et al. Gate driver design for 1.7 kV SiC MOSFET module with Rogowski current sensor for shortcircuit protection\[C\]//2016 IEEE Applied Power Electronics Conference and Exposition (APEC). IEEE, 2016: 516-523.

\[37\] 巴腾飞,李艳,梁美.寄生参数对 SiC MOSFET 栅源极电压影响的研究\[J\].电工技术学报,2016,31(13):64-73.

\[38\] 柯俊吉,赵志斌,谢宗奎,徐鹏,崔翔.考虑寄生参数影响的碳化硅 MOSFET 开关暂态分析模型\[J\].电工技术学报,2018,33(08):1762-1774.

\[39\] Mukunoki Y, Nakamura Y, Konno K, et al. Modeling of a silicon-carbide MOSFET with focus on internal stray capacitances and inductances, and its verification\[J\].IEEE Transactions on Industry Applications, 2018, 54(3): 2588-2597.

\[40\] 曾正,邵伟华,陈昊,胡博容,陈文锁,李辉,冉立,张瑜洁,秋琪.基于栅极驱动回路的 SiC MOSFET 开 关 行 为 调 控 \[J\]. 中 国 电 机 工 程 学 报 ,2018,38(04):1165-1176+1294.

\[41\] 王旭东,朱义诚,赵争鸣,陈凯楠.驱动回路参数对碳化硅 MOSFET 开关瞬态过程的影响\[J\].电工技术学报,2017,32(13):23-30.

\[42\] Tiwari S, Midtgård O M, Undeland T M, et al. Parasitic capacitances and inductances hindering utilization of the fast switching potential of SiC power modules. Simulation model verified by experiment\[C\]//2017 19th European Conference on Power Electronics and Applications (EPE'17 ECCE Europe). IEEE,2017: P. 1-P. 10.

\[43\] 柯俊吉,谢宗奎,林伟聪,赵志斌,崔翔.碳化硅 MOSFET 开关特性分析及杂散参数优化\[J\].华北电力大学学报(自然科学版),2018,45(02):1-9.

\[44\] 秦海鸿,朱梓悦,戴卫力,徐克峰,付大丰,王丹.寄生电感对 SiC MOSFET 开关特性的影响\[J\].南京航空航天大学学报,2017,49(04):531-539.

\[45\] Paredes A, Ghorbani H, Sala V, et al. A new active gate driver for improving the switching performance of SiC MOSFET\[C\]//2017 IEEE Applied Power Electronics Conference and Exposition (APEC). IEEE, 2017: 3557-3563.

\[46\] Acharya S, She X, Tao F, et al. Active Gate Driver for SiC-MOSFET based PV Inverter with Enhanced Operating Range\[J\]. IEEE Transactions on Industry Applications, 2018.

\[47\] Nayak P, Hatua K. Active gate driving technique for a 1200 V SiC MOSFET to minimize detrimental effects of parasitic inductance in the converter layout\[J\]. IEEE Transactions on Industry Applications, 2018, 54(2): 1622-1633.

\[48\] Yang Y, Wang Y, Wen Y. An active gate driver for improving switching performance of SiC MOSFET\[C\]//2018 7th International Symposium on Next Generation Electronics (ISNE). IEEE, 2018: 1-4.

\[49\] Jiang Y, Feng C, Yang Z, et al. A new active gate driver for MOSFET to suppress turn-off spike and oscillation\[J\]. Chinese Journal of Electrical Engineering, 2018,4(2): 43-49.

\[50\] Krishna M V, Hatua K. Closed loop analog active gate driver for fast switching and active damping of SiC MOSFET\[C\]//2018 IEEE Applied Power Electronics Conference and Exposition (APEC). IEEE, 2018: 3017-3021.

\[51\] Sukhatme Y, Titus J, Nayak P, et al. Digitally controlled active gate driver for SiC MOSFET based induction motor drive switching at 100 kHz\[C\]//2017 IEEE Transportation Electrification Conference (ITEC-India). IEEE, 2017: 1-5.

\[52\] Zhang Z, Wang F, Tolbert L M, et al. Active gate driver for crosstalk suppression of SiC devices in a phase-leg configuration\[J\]. IEEE Transactions on Power Electronics, 2014, 29(4): 1986-1997.

\[53\] Shu L, Zhang J, Shao S. Crosstalk Analysis and Suppression for a Closed-Loop Active IGBT Gate Driver\[J\]. IEEE Journal of Emerging and Selected Topics in Power Electronics, 2018.

\[54\] Obara H, Wada K, Miyazaki K, et al. Active Gate Control in Half-Bridge Inverters Using Programmable Gate Driver ICs to Improve Both Surge Voltage and Converter Efficiency\[J\]. IEEE Transactions on Industry Applications, 2018, 54(5):4603-4611.

\[55\] Dymond H C P, Liu D, Wang J, et al. Multi-level active gate driver for SiC MOSFETs\[C\]//2017 IEEE Energy Conversion Congress and Exposition (ECCE).IEEE, 2017: 5107-5112.

\[56\] Luo H, Iannuzzo F, Ma K, et al. Active gate driving method for reliability improvement of IGBTs via junction temperature swing reduction\[C\]//2016 IEEE 7th International Symposium on Power Electronics for Distributed Generation Systems (PEDG). IEEE, 2016: 1-7.

\[57\] Prasobhu P K, Buticchi G, Brueske S, et al. Gate driver for the active thermal control of a dc/dc gan-based converter\[C\]//2016 IEEE Energy Conversion Congress and Exposition (ECCE). IEEE, 2016: 1-8.

\[58\] Mahmodicherati S, Ganesan N, Ravi L, et al. Application of Active Gate Driver in Variable Frequency Drives\[C\]//2018 IEEE Energy Conversion Congress and Exposition (ECCE). IEEE, 2018: 1796-1799.

\[59\] 吴军科,周雒维,王博,李亚萍.基于开关轨迹动态调整的变流器内部热管理\[J\].电源学报,2016,14(06):46-52.

\[60\] 李金平 , 王 琨 . 碳化硅基 MOSFETs 器件研究进展 \[J\]. 西安邮电大学学报,2016,21(04):1-8.

\[61\] Design Considerations for Designing with Cree SiC Modules Part 1. Understanding the Effects of Parasitic Inductance\[EB/OL\]. \[2015-09-03\]. https://www.wolfspeed.com/power/tools-and-support/application-notes.

\[62\] Stefanskyi A, Starzak Ł, Napieralski A, et al. Analysis of SPICE models for SiC MOSFET power devices\[C\]//2017 14th International Conference The Experienceof Designing and Application of CAD Systems in Microelectronics (CADSM).IEEE, 2017: 79-81.

\[63\] Sadik D P, Kostov K, Colmenares J, et al. Analysis of parasitic elements of SiC power modules with special emphasis on reliability issues\[J\]. IEEE Journal of emerging and selected Topics in Power Electronics, 2016, 4(3): 988-995.

\[64\] 文驰,李保国,熊辉,黄南,袁勇,时海定.IGBT 模块杂散电感分析与仿真\[J\].大功率变流技术,2016(04):30-33.

\[65\] Drofenik U, Kolar J W. Teaching thermal design of power electronic systems with web-based interactive educational software\[C\]//Eighteenth Annual IEEE Applied Power Electronics Conference and Exposition, 2003. APEC'03. IEEE, 2003, 2:1029-1036.

\[66\] 李志刚,梅霜,王少杰,姚芳.IGBT 模块开关损耗计算方法综述\[J\].电子技术应用,2016,42(01):10-14+18.

\[67\] Profumo F, Tenconi A, Facelli S, et al. Instantaneous junction temperature evaluation of high-power diodes (thyristors) during current transients\[J\]. IEEE Transactions on Power electronics, 1999, 14(2): 292-299.

\[68\] 彭忆强,芦文峰,邓鹏毅,王洪荣,马媛媛,徐磊,何波,杨丽蓉.新能源汽车“三电”系统功能安全技术现状分析\[J\].西华大学学报(自然科学版),2018,37(01):54-61.

\[69\] （德）安德烈亚斯·福尔克（Andreas Volke），（德）麦克尔·郝康普（Michael Hornkamp）著.IGBT 模块 技术 驱动和应用 中文版\[M\].北京：机械工业出版社.2016.

\[70\] 孙国勇. 高性能驱动关键技术研究\[D\].北京交通大学,2018.

\[71\]DigitalIsolator Design Guide\[EB/OL\]. \[2018-08-01\].http://www.ti.com.cn/cn/lit/an/slla284b/slla284b.pdf.

\[72\] Olejniczak K, Flint T, Simco D, et al. A compact 110 kVA, 140 C ambient, 105 C liquid cooled, all-SiC inverter for electric vehicle traction drives\[C\]//2017 IEEE Applied Power Electronics Conference and Exposition (APEC). IEEE, 2017: 735-742.

\[73\] 于燕来. 基于驱动电路参数调整的功率模块结温控制研究\[D\].重庆大学,2015.

\[74\] 李明,王跃,高远,王兆安.采用动态电压上升控制的 1700 V 大功率 IGBT 有源门极驱动技术\[J\].高电压技术,2014,40(08):2513-2519.

\[75\] 李晓玲,曾正,陈昊,邵伟华,胡博容,冉立.SiC、Si、混合功率模块封装对比评估与失效分析\[J\].中国电机工程学报,2018,38(16):4823-4835+4988.

\[76\] Bryant A T, Mawby P A, Palmer P R, et al. Exploration of power device reliability using compact device models and fast electro-thermal simulation\[C\]//Conference Record of the 2006 IEEE Industry Applications Conference Forty-First IAS Annual Meeting. IEEE, 2006, 3: 1465-1472.

\[77\] Bryant A, Parker-Allotey N A, Hamilton D, et al. A fast loss and temperature simulation method for power converters, Part I: Electrothermal modeling and validation\[J\]. IEEE transactions on power electronics, 2012, 27(1): 248-257.

\[78\] Power Loss Calculation With Common Source Inductance Consideration for Synchronous Buck Converters\[EB/OL\]. \[2011-08-01\]. http://www.ti.com/lit/an/slpa009a/slpa009a.pdf.

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=jpeg&from=appmsg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)