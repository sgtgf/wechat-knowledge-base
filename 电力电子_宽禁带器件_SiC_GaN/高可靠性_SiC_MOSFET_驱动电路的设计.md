# 高可靠性 SiC MOSFET 驱动电路的设计


> 原文地址: [https://mp.weixin.qq.com/s/EIIyf3CO6ZPEBtLNBPnxfA](https://mp.weixin.qq.com/s/EIIyf3CO6ZPEBtLNBPnxfA)

作者：刘晓琳（电子科技大学-硕士学位论文）

摘 要：随着汽车电子、电力电子产品市场的发展，功率开关器件及其驱动芯片市场的需求日渐扩大。而电子设备的体积逐代减小、应用环境越来越苛刻，其对功率开关器件及其驱动芯片的性能要求也在日益提高，这主要体现在对更高效、更高功率密度、更高可靠性的要求，而第三代功率半导体中SiC器件因其高速、高功率密度、耐高温等特性被广大厂商所青睐。SiC功率MOSFET的高速、高工作电压、大工作电流决定着其驱动芯片需要具有完备的保护功能，防止SiC 功率MOSFET 因非理想外界因素而失效。 

SiC 功率MOSFET 驱动技术的核心问题主要在于提高SiC功率MOSFET的抗dv/dt 能力（即当功率管漏端的dv/dt变化通过密勒电容耦合到功率管栅极时，对该耦合的抑制能力）、对SiC 功率MOSFET的瞬态及稳态驱动能力以及对SiC 功率MOSFET 的异常状态保护能力等。  

以上核心技术可在汽车电子、工业电子高压高频应用中得以体现。本文针对上述核心技术提出了动态密勒钳位电路以及负压关断功能，所述电路在SiC功率MOSFET功率管直流电压为1200V的情况下，实现150V/ns 以上的抗dv/dt 能力； 提出了双浮动电源轨电路，在驱动芯片供电电压为\-8V 至20V 的情况下，产生\-3V的负浮动电源轨与15V 的正浮动电源轨，实现对薄栅氧MOSFET 的驱动，避免使用厚栅氧器件，从而保证了4A 的大电流驱动能力、1nF 负载电容下低至8ns 的瞬态延时以及低至20ns 的传输延时；提出了完备的欠压保护功能，包括1V 迟滞窗口且欠压点可片外配置的芯片母线欠压保护功能以及内部模块电源欠压保护功能；提出了过温保护功能，实现了150°C 触发的过温保护，迟滞窗口为25°C，从而保证硅基的驱动芯片不会因高温而失效；提出了过流保护功能，实现了520ns的前沿消隐功能且过流点可片外配置。以上所述功能皆为片内集成，且整体芯片搭载了基准、低压差线性调整器、 电流偏置、片内集成负压电荷泵。驱动芯片在0.35μm BCD 工艺下完成芯片电路设计、仿真验证并给出芯片版图设计，仿真结果显示驱动芯片传输延时、瞬态驱动延时、及峰值驱动电流均达到理论设计值，满足SiC 功率MOSFET 的驱动要求。  

关键词：SiC 功率MOSFET 驱动，抗dv/dt 能力，过流保护，欠压保护，过温保护

第一章绪论  

1.1 课题研究背景及其意义  

随着全球能源系统的发展，风力发电和核能发电被广泛应用，同时也提出了高效用电的理念，以配合清洁能源实现可持续性发展，从而对电力电子设备提出 了高效高性能的要求，由于功率开关器件在电力电子设备中占据着极其重要的地位，也就进一步地要求功率开关器件具有高效高性能。  

半导体行业发展至今，其所用半导体材料已发展至第三代，如图1-1 所示。第 一代半导体材料为以硅（Si）及锗（Ge）为主的半导体材料，第一代半导体材料奠定了半导体行业的基础，并以此为基础发展出了各式分立器件及集成电路芯片。在功率电子中，常见的硅材料功率开关器件为硅基LDMOS，DEMOS，VDMOS，IGBT及超结器件，其中在我国广泛生产及应用的主要为IGBT 器件，如士兰微电子公司的主营方向之一即为IGBT 分立器件；第二代半导体为化合物半导体材料， 其中二元化合物主要以砷化镓（GaAs）、锑化铟（InSb）为主，三元化合物主要包括GaAsAl 等材料；第三代半导体材料主要包括碳化硅（SiC）、氮化镓（GaN）， 第三代半导体为宽禁带半导体，相比于硅1.2eV的禁带宽度，第三代宽禁带半导体材料的禁带宽度为2.3eV以上，同时具有更高的击穿电压、更高的导热率、更高的电子饱和速率以及更高的抗辐照能力，使得第三代宽禁带半导体材料相比于硅更适合于制作高频高压高温的大功率开关器件，常见的应用第三代半导体材料的功率开关器件有SiC MOSFET及GaN HEMT，用在高压高频应用环境下。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN1SjFmrk8b5Py6dQZ2FjX3LMv24ABsT5PCmfhJmZz9TNGNgVe5IxfiaR7SS8ia6l9Ca3y0We8lnXVvdricBKLv6gUgok4icqlcrA8/640?wx_fmt=png&from=appmsg)

碳化硅材料作为宽禁带半导体的典型代表，具有上述优点，且随着碳化硅单晶材料制备技术的进展，以及实现零微管密度和碳化硅外延生长技术的突破后， 各种碳化硅电力电子器件相继被研发和制造出来，其器件特性不断提高，目前已被运用于雷达等军事领域。同时，在电力装备、移动电话、无线通信、个人通信网、定位系统、卫星接收等国民经济主要领域也有重要的发展潜力。  

1.2 SiC MOSFET 现状及发展趋势  

20 世纪80 年代末期，以硅为基础的功率开关器件的性能已被发展至极限，随 后第三代宽禁带半导体材料的出现使得电力电子器件得到了进一步发展。宽禁带半导体材料以其较宽的禁带宽度、较高的饱和电子漂移速度、较高的击穿电场强度以及较低的介电常数等优点，更适于高频高功率的应用条件。在众多宽禁带半导体材料中，碳化硅功率器件由于其显著优点受到最为广泛的关注。SiC MOSFET比Si MOSFET 的耐压性能更好，输入电容更小，饱和电子迁移率更大，因此更适合应用在高压高频场合下。GaN 器件在上述特性中与SiC MOSFET 具有相同的性能，同样适用于高频高压场合，但SiC MOSFET 的热导率要高于GaN 器件，因此SiC MOSFET 更适合应用在高温高功率密度的场合中。 

1992 年，美国Cree 公司于1992 年公布了世界上第一款6H-SiC 槽栅MOSFET器件，其耐压等级和特征导通电阻分别为150V 和33mΩ\*cm²，其结构如图1-2(a)所示。以外延生长和干法刻蚀的技术生成UMOSFET 的P-base 区，但其反向恢复特性会由于器件trench 底部的栅氧化层未受到保护而恶化，因为电场会聚集在拐角处。 

1997年，SiC Double-Implanted MOSFET可以通过双注入方式生产的思路被P.M.Shenoy等人提出，该器件的剖面图如图1-2(b)所示。该平面结构改善了其他团队制造碳化硅UMOS晶体管遇到的高场应力问题，使得其击穿电压超过750V，在当时大大提高了SiC MOSFET的耐压等级。 

2004年，一种以双外延的技术来生产SiC DEMOSFET的方法被Shillsuke  Harada等人提出，该团队所属为日本产业技术综合研究所，其VDS耐压达到600V， 在栅压15V下的特征导通电阻为8.5mΩ\*cm²。为防止漂移区和源区之间发生串通， 该技术提出以外延生长的方式于N-漂移区上额外生长出一个P+阻挡层，而后于其上刻蚀出窗口，并再次外延生长出P-层，最后通过离子注入在P-层注入埋沟与JFET区，器件剖面图如图1-3(a)所示。  

2006年，Shillsuke Harada等人为了避免对SiC 层的刻蚀操作，在之前的基础上，通过优化双外延技术，以掩膜注入的方法形成P+阻挡层，制造了注入外延型MOSFET（IEMOSFET）。该器件最终实现VDS 耐压660V，导通电阻相比于DEMOSFET 低约4 倍，仅为1.8mΩ\*cm²。器件结构如图1-3(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMl3AVx2ibxL3ZofUaTLnSODroCrPHuhx8hlHcDWsRk0CB7W4P08wy2ZDkuKfmpENIzYfIDpMEp2mkCmNAalhkp9novBb6VVLRI/640?wx_fmt=png&from=appmsg)

上述提及技术为典型的SiC MOSFET 制备技术，相较于DEMOSFET及IEMOSFET，DIMOSFET 与UMOSFET 更为常用。  

国际上具有成熟生产线的SiC MOSFET 厂商主要有美国科锐公司，日本罗姆公司以及德国英飞凌。罗姆公司在2010年12 月首次将碳化硅MOSFET 推向市场， 以定制品的形式量产SiC MOSFET。科锐公司于2011年1 月推出商用1200V SiC  MOSFET。2011年7 月，罗姆公司实现了SiC 肖特基二极管与MOSFET 的一体化封装。2012年年初，科锐推出了耐压等级高达1700V的，并于2015年和2016年 先后推出两种不同耐压等级的SiC MOSFET器件，分别为900V和1000V。英飞凌公司在2016年展示了首款全SiC模组EASY1B，该模组已于2017年实现量产。经过各公司的持续研发，商用的SiC MOSFET逐渐扩展出900V、1000V、1200V、1700V四个耐压等级，器件的最大电流能力也得到了提升，以应对工业上的新要求。表1-1 为上述公司目前推出的主流SiC MOSFET 器件。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPvwtsFsIwqHYoIvlhtr4WmXTxC4m1IyR5RIAApeRDiaHKYamED2xNqnW73UeQ2CsUyicX1TOyVOVeDTMGX2m4aYGexvz9VvFwoI/640?wx_fmt=png&from=appmsg)

国内的碳化硅产业链虽未能达到国外实现完善商业化量产的程度，但整个产业链也已相对完善，从衬底、外延、器件到模块制造都已经有相关公司研发生产。 在碳化硅衬底方面，世纪金光可成产2至6寸衬底晶片，同时也具有部分SiC SBD及MOSFET产品；三安集成完成了对瑞典公司Norstel 的收购，拥有了制备SiC 衬 底的IP。外延方面，普兴电子具有4 英寸N 型120μm 和6 英寸N 型60μm 的制备技术，可满足大部分器件制作需求。在器件制备方面，中电55 所及中电13 所均具有器件制备方面的技术积累，并已推出数款实用SiC MOSFET及SiC SBD。  

1.3 SiC MOSFET 驱动技术发展现状  

碳化硅MOSFET与硅IGBT、MOSFET一样都属于电压控型开关器件，在驱动方面有许多相似之处，因此其驱动电路可以借鉴已有的硅器件的驱动电路设计 方法。但是，碳化硅和硅功率器件存在差异，对于驱动电路的要求也有所不同。 例如，碳化硅MOSFET 的栅极电荷QG 更小，其栅源电压更容易震荡；碳化硅MOSFET 的短路承受时间要比硅功率器件低，其驱动保护电路检测时间以及短路情况反应时间更短，对驱动电路的响应速度要求更高。目前SiC MOSFET的驱动 电路芯片大部分是采用IGBT 的驱动芯片，因为SiC MOSFET 与IGBT 具有相似的特性，但由于IGBT 工作在低频情况下，因此已有的成熟的IGBT 驱动芯片的驱动能力均较小，驱动电流一般为2A 左右，不能充分发挥SiC MOSFET 高频的特点。 综上，研究一款专门驱动SiC MOSFET 的芯片是有意义的。  

在国外，目前主流的SiC MOSFET 驱动厂商有安森美，英飞凌等，这些厂商研制了SiC MOSFET专用驱动芯片，而不是以IGBT驱动芯片来驱动SiC MOSFET。 其中安森美的驱动芯片拥有大驱动能力以及完善的保护功能，英飞凌的驱动芯片 具有两级关断技术，以抑制关断瞬态中的dv/dt。学术方面，日本功率电子研究所的Akimasa Niwa 等人提出了利用SiC MOSFET 内置的senseFET作为电流传感器来实现死区时间控制的电路，实现了短至100ns 的死区时间，相比于不具备死区时间控制的驱动电路，该电路效率提高了1%；西班牙加泰罗尼亚理工大学的Alejandro Paredes等人提出了一种带反馈的SiC MOSFET驱动电路，通过反馈调节，降低了EMI，减小了由高dv/dt 及di/dt 造成的过冲，同时降低了开关损耗；俄亥俄州立大学的Zhang Xuan 等人提出了一款应用于15kV SiC MOSFET 的驱动电路，该驱动短路具备小体积、轻重量以及完备保护电路的特点，同时应用光耦隔离传输信号，具有实际应用价值；南洋理工大学的Yin Shan等人提出了一种针对半桥应用的SiC MOSFET驱动电路，通过增加辅助电路，实现了减少34%的开关损耗以及31V/ns 的抗dv/dt 能力；印度电子工业研究所的Aamir Rafiq 提出了 一种谐振式驱动，通过调整谐振电感实现对开关瞬态时dv/dt 的控制；印度理工学院的Vamshi 等人提出了一种闭环模拟有源驱动电路，用于驱动高速SiC  MOSFET，通过模拟电路闭环的方式实现了对功率管的调控，从而控制瞬态期间 的dv/dt 及di/dt；美信的Jaya 等人提出了一种谐振式驱动电路，通过谐振方式对SiC MOSFET进行驱动，实现了相较于常规驱动电路将近50%的能量节省。  

在国内，南京大学的Qin Haihong 等人针对目前的SiC MOSFET 常用驱动技术及发展进行了概述，针对各特性指标给出了总结；北京交通大学的袁捷提出了 一种利用分立式器件搭建的SiC MOSFET 驱动电路，并针对过流保护功能给出了详细的设计思路及仿真验证，实现了800ns 以内的总体延时；西安电子科技大学的许耀针对SiC MOSFET的高速应用展开了相关研究，并实现了200W 下1MHz的高速驱动，并具有动态均流功能，实现了SiC MOSFET 的并联应用；华中科技大学的雷冕提出了一种闭环驱动芯片，通过外围电路检测芯片dv/dt及di/dt大小， 动态调节驱动电流从而减小SiC MOSFET 开关损耗；山东大学的周琦对SiC  MOSFET 的串联驱动设计进行了分析，提出了一种SiC MOSFET 串联均压电路， 并对其电路进行了仿真验证。  

1.4 论文的主要研究工作和结构安排  

本论文主要涉及高速高功率密度应用下高可靠性SiC MOSFET驱动电路核心技术分析及设计，重点阐述了在充分发挥SiC MOSFET器件性能及提高SiCMOSFET器件可靠性的要求下，SiC MOSFET 驱动级模块及过温、过流、欠压保护模块的设计。根据设计需求，讨论了SiC MOSFET 器件的具体特性及在电路设计中所对应的核心技术；讨论了适合SiC MOSFET 器件的具有双浮动电源轨、具有密勒钳位功能的驱动级电路的系统控制方式、系统架构及具体电路设计；讨论了为保证SiC MOSFET 器件具有高可靠性所需要的过流、欠压、过温保护功能的 控制策略、系统架构及具体电路设计。所述方案及电路均为全集成方案，采用0.35μm BCD 工艺进行电路搭建及仿真验证。  

本论文共六个章节。  

第一章：阐述 SiC 材料功率开关器件、SiC MOSFET 驱动技术的应用意义， 并综述了SiC MOSFET 器件、SiC MOSFET 驱动技术的国内外发展现状及其研究意义。  

第二章：阐述SiC MOSFET的器件特性及性能参数，并综述了各器件特性对于电路设计的要求及指导意义，说明了SiC MOSFET驱动电路设计的难点和要点。对SiC MOSFET的寄生参数进行分析，并给出在瞬态器件各寄生参数对器件性能造成的影响分析。  

第三章：阐述SiC MOSFET 驱动电路的传统设计方案，总结了SiC MOSFET驱动电路已有的设计要点及难点，分析了各方案如何抑制dv/dt、如何对SiC  MOSFET 器件作出保护。  

第四章：设计本论文提出的具有密勒钳位功能的双浮动电源轨驱动电路、过流保护电路、过温保护电路、欠压保护电路，对各电路方案的原理进行讲解，并 给出具体电路图。具有密勒钳位功能的双浮动电源轨驱动电路具有4A(tt  corner@27°C)的峰值驱动电流，在1nF 的负载电容下可满足8ns 的上升/下降延时，传输延时在20ns 以内，抗dv/dt 能力可达到150V/ns；过流保护电路可实现片外调 节过流点，且系统响应时间在150ns 以内；过温保护电路可实现150°C 过温，且具有25°C 迟滞窗口；欠压保护电路可实现片外调节欠压点，且具有低至1V 的迟滞窗口，以保证SiC MOSFET 器件的正常工作。  

第五章：对所述各电路进行仿真验证，所述各指标均经仿真验证达到设计要 求，满足应用需求。  

第六章：给出本芯片的版图设计结果，已完成版图设计，等待流片验证。  

第七章：对本论文工作进行总结，针对SiC MOSFET驱动电路的先进控制方案进行简单的讨论及展望。

第二章 SiC MOSFET 的基本特性  

2.1 碳化硅材料与硅材料参数对比

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNKqnwoRiay1tvicuicnrO0RBE72cE7FfBeI32zcTdIY513Dia2Y7xmqgChxBVnG541zgVKTQSibpzrR91hHvAAIWsCELAgVlMsDw9c/640?wx_fmt=png&from=appmsg)

SiC 材料作为宽禁带半导体材料的一种，由于其各种优异特性，被广泛应用在 功率电子领域中。表2-1 所示为Si 材料、SiC 材料、GaN 材料之间的特性对比。  

由表2-1-可见，传统的Si 材料的带隙能量为1.12eV，而宽禁带半导体材料SiC及GaN 的带隙能量分别为3.26eV 与3.50eV，这意味着上述宽禁带半导体材料相比于Si 材料来说，需要消耗近三倍的能量才能将电子从价带移动到导带，使得上述宽禁带半导体相对而言表现得更像绝缘体。宽禁带意味着碳与硅之间的键能更大，使得碳化硅晶体在高温下仍能保持稳定的结构，从而使得碳化硅功率器件相较于硅器件在更高温极端条件下仍能正常工作，即SiC MOSFET 的耐热性更好。 此外，SiC 材料的击穿电压更高，可以达到Si 材料击穿电压的十倍，因此对于同一耐压等级的器件来说，SiC 器件和GaN 器件可以采用更薄的氧化层，这又进一 步使得SiC 器件与GaN 器件具有更低的导通电阻和更大的电流能力。在寄生参数方面，SiC MOSFET 具有更小的寄生电容，因此对高频噪声更为敏感，需要在电路设计中着重考虑对噪声的抑制。SiC 材料最突出的特性是，它的热导率是Si材料与GaN 材料的三倍，因此在同等级功率及散热装置应用条件下，碳化硅功率器件的数量和体积小于其他材料器件，结合其低寄生电容的特点，使得SiC 功率器件更适合工作在高功率密度及高频的场合下。SiC 材料的饱和电子迁移率为Si材料的两倍，使得其器件可工作在更高的开关频率下，此外SiC 的本征载流子浓度更低，漏电流更小，因此SiC 器件的反向恢复特性十分优异。目前商用的SiC  MOSFET 的工作温度可达150°C-200°C，虽然SiC 材料的结可承受600°C 的高温，由于封装技术的限制，使得SiC MOSFET不能在如此高的温度下工作。SiC  MOSFET 的VDS 耐压高达1.7kV，主流商用SiC MOSFET 的耐压一般为1.2kV。SiC材料相比于Si 材料不同的特性一方面使得SiC 功率器件具有更优的性能，另一方 面也对SiC 功率器件驱动电路的设计提出了挑战。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPjM6J55GicDX2f5UvsvdO2vohc20yeOJjEFO6AR8yNZHYosiavxbjBaKs1wIONWTibibIj4E65JnBDXeGukPCKWS4icX1Z6icgIVcqQ/640?wx_fmt=png&from=appmsg)

图2-1 所示为Si 材料、SiC 材料、GaN 材料的功率开关器件的应用场景对比， 其中Si 材料的功率开关器件为LDMOS 等器件、IGBT 及超结器件。如图所示，在Si 材料中LDMOS 等器件覆盖了低频、中低功率应用环境，IGBT 覆盖了低频、较高功率应用环境，由于存在尾电流问题，IGBT 无法应用在高频环境下，高频应用环境的空白由超结器件进行填补，但超结器件的功率密度相比于SiC 器件与GaN器件仍较低。相较于Si 器件，SiC 器件与GaN 器件的应用环境主要为高频条件下的高功率场合，这得益于其材料特性所赋予的高频优势。而SiC 于GaN 材料对比，二者各有优势，如图所示，SiC 器件主打低频（此低频为相对于GaN 工作频率而言，而非相较于Si 材料的工作频率。）高功率，而GaN 器件主打高频低功率。

2.2 SiC MOSFET 阈值电压

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPpB9xWGvNFMn4C0fRgIsw2BKOykjlaS91NQXqszxFQbibNlbpSVG0HrF2fvJaoK1OjIlWhbwjPuLibW1K7yI4Bf7icqPNdS9iaSek/640?wx_fmt=png&from=appmsg)

SiC MOSFET在关断状态下具有优异的阻断能力，以CREE 公司一款1200V，115A 的第三代SiC MOSFET为例，在VDS\=1200V的条件下，对碳化硅MOSFET栅源端子进行短路处理时，即VGS=0 时，其漏电流idss 的典型值为1μA，\-40°C 到175°C 的范围内最大值为50uA。上述现象表明碳化硅MOSFET 在较宽的温度范围内具有很好的阻断能力，其漏电流并未随着温度变化而显著增加。 

SiC MOSFET 的阈值电压Vgs(th)随温度升高降低，仍以上述Cree 公司SiC  MOSFET为例，如图2-2 所示，其Vgs(th)从\-40°C时的2.8V 跌落到175°C 时的2.1V。 考虑到其较高的开关速度，SiC MOSFET 通常需要负压关断技术、密勒钳位技术或斜率控制技术来提高对dv/dt 的抗扰度，以避免在桥式应用中，由于高dv/dt 通过密勒电容造成二次开启或二次关断效应。

2.3 SiC MOSFET 导通电阻  

SiC MOSFET 的输出特性随温度变化与硅器件相比有明显的区别，主要体现 在：低电压驱动时，I-V 曲线随温度升高持续上升；高电压驱动时，I-V 曲线随温度上升而下降。该特性是由于SiC MOSFET 内部的沟道电阻RCH和体电阻RBulk 存 在相反的温度特性。在SiC MOSFET 正常的工作范围内，器件沟道迁移率随着温度的升高而增加，导致在给定VGS下RCH 不断降低；然而，漂移区中的电子迁移率随着温度的升高而降低，导致RBulk 随温度升高增大，RCH和RBulk截然相反的温度特性降低了SiC MOSFET 的RDS(on)温度灵敏度。另一方面，在较低的VGS下，RCH 在整个导通电阻中占主导；在较高的VGS 下，JFET电阻和RBulk 占主导。SiC MOSFET的RCH很大，RBulk 很小，因此为了得到足够小的导通电阻，通常建议器件的导通电压为20V，以实现更低的导通损耗。  

图2-3 所示为一款SiC MOSFET 的I-V 特性曲线，从图中对比A,B 两点的导通电阻有

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOFJibGQdraNrIlJaWe89YHXic8JwAkKgibkdRLTIOSrVRQAOsrXwMBHV4cUPFrJu3Fj927DANDwljlLmGYnkhAK1s81fD7Pje6PI/640?wx_fmt=png&from=appmsg)

当VGS\=12V 时，相比于VGS\=20V 而言，导通损耗增加了2.3 倍。从该计算也可看出，在应用SiC MOSFET 时，应将额定VGS 设置在17V 至20V 之间，对于一 些特殊的应用要求可以考虑将VGS 设置为25V。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO15OAF9S7ysPvS2KBPvnPMXkr6FAs2bFEQS1xJe3wSJ84mrQ6NuFCjT1Zp3LAFcibVpTDAJXLziaw7QvELGVJw8PV7lBsyySGfQ/640?wx_fmt=png&from=appmsg)

2.4 SiC MOSFET I-V 特性曲线  

对于Si MOSFET 而言，其从线性区到饱和区的过渡过程很快，如图2-3 所示， 从I-V 特性上看，从线性区到饱和区的曲线非常陡峭，这使得Si MOSFET 在饱和区时可以被视为一个近似理想的电流源。而与Si MOSFET 截然不同的是，SiC  MOSFET 从线性区到饱和区的过渡十分缓慢，没有一个如Si MOSFET 一样的陡峭的曲线，从I-V 特性曲线的角度来说SiC MOSFET 并不具有“饱和区”这一定义， 其表现得更像一个可变电阻，而不是一个近似理想的电流源。SiC MOSFET 独特的I-V 特性曲线使得其瞬态开关特性与传统Si MOSFET 存在一定的差别，其瞬态开关特性将在后续章节进行阐述。

从 I-V 特性上看，在线性区时

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOhTV6r3tHoWxUdlgoSKoazhBDVfSkH0UJgIJRogh51iczNC9PnM8qyVBicmhN9bmzVnt8ElU3EnlmQibsNBOyZYd1OyPsia8ffI4g/640?wx_fmt=png&from=appmsg)

其中 μ 为载流子迁移率，COX 为栅氧化层单位电容，S 为器件宽长比。由于SiC 材料的μ 更小，因此ID 关于VDS 的函数的一阶导数与二阶导数在相同的VDS下相比于Si MOSFET 都更小，故从I-V 曲线上看，SiC MOSFET 在线性区时的曲线更平缓，在I-V 曲线上看不到明确的线性区与饱和区的界限。  

2.5 SiC MOSFET 内部栅极电阻  

MOSFET的内部栅极电阻与芯片面积成反比，对于给定的击穿电压，SiC  MOSFET的芯片面积要远小于Si MOSFET，因此SiC MOSFET的内部栅极电阻要更大。而更小的芯片面积带来的好处是它使得SiC MOSFET的输入电容更小。表2-2所示为两种不同生产商生产的SiC MOSFET和两种超结Si MOSFET不同参数的对比。从驱动的角度而言，表中最值得关注的参数使RGI\*CISS，可见SiC\_1拥有最低的RGI\*CISS。将Si\_2与SiC\_1进行对比，虽然它们在很多参数想相近，但SiC\_1有近两倍大的耐压和三倍小的输入电容。栅极输入电阻会限制驱动电路给输入电容的充放电电流，因此一个可靠高效的SiC MOSFET驱动电路需要有尽可能 低的输出阻抗，这样可以在考虑限制dv/dt 时，留有更大的容限去添加外部栅极电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPGhuHj4icyHpDpdMDF5hkcdrZV51PVHSeOdcrFmtZHDiawY9zY1eXqm7zmf8ricdDbTY3YWHrgnLbMb0oq0I1nbyicvHvWlDB5oKI/640?wx_fmt=png&from=appmsg)

2.6 SiC MOSFET 栅极电荷  

在瞬态切换时，通过将VGS拉至VGSMAX(即VDD)使功率管开启，将VGS 拉至VGSMIN（即VEE）使功率管关断，在这一过程中，一定量的电荷将注入或抽离功率管输入电容。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMlHXPMWL7ibsjBbn1avnmZzK1veeV5KKicsGBNNBCoJT0hiaRtFy9LPS2I9nWVbQ3P488SPicibxr3NGuqYyMSKlo1iaq9ZicPkcuaZk/640?wx_fmt=png&from=appmsg)

图2-4 所示为栅极电荷与VGS 之间的关系曲线，由图可见，当VGS\=0 时，栅极电荷并不为零，因此对于SiC MOSFET 来说，VGS\=0 的关断稳态栅源电压并不能保证SiC MOSFET 彻底关断，故在关断稳态时，应在栅源之间加负压。此外， 由前文可知，以CREE的SiC MOSFET为例，其阈值电压最低会随温度漂移到2.1V，若再考虑到工艺角的影响，SiC MOSFET 的阈值电压在某些情况下会降低到1V 左右，此时如果VGS 在0V 至VDD 之间切换的话，dv/dt 等噪声可能会使SiC MOSFET误开启。考虑到这些状况，SiC MOSFET 的VGSMIN 一般应在\-5V 至\-2V 之间。  

2.7 SiC MOSFET 开关特性  

SiC MOSFET的瞬态特性与Si MOSFET非常相似，但由于I-V特性曲线的区别，导致二者在瞬态上还是存在一定的差异，在接下来的分析中，本文首先假设SiC MOSFET与Si MOSFET具有相同的I-V特性，在此条件下分析其瞬态过程，然后再给出实际的SiC MOSFET的瞬态波形图。对于SiC MOSFET驱动来说，为了减小SiC MOSFET的开关损耗，需要尽可能地缩短瞬态过程消耗的时间，因此就要求驱动电路足够大的驱动电流能力，以快速对SiC MOSFET的输入电容进行充电。例如，假设使开启瞬态过程在10ns内完成，VGS在开启瞬态过程中的变化量为30V，SiC MOSFET输入电容CISS\=CGS+GGD\=1000pF，根据式2-4 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNOVVAQ9f7LFYu0ggAGmyeEHPCmnKqE1roALaic51I6Nz4d849nWAicGIHbSLeXRiaq6oq5FNpt6uqITeTEtb8Kxxmt7D0iadrNEYc/640?wx_fmt=png&from=appmsg)

可以计算出，为了使开启瞬态在10ns 内完成，驱动电路需要输出的source 电流为IG(SRC)\=3A，这是对驱动电路驱动能力的要求。SiC MOSFET驱动电路在开启瞬态过程中的示意电路图如图2-5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMC0LREr7DemIyJRUZQUGGAFPREAt4nQiaGkfIfag1eb2AFVMyRIJ6NNkcJQgmAlD281Pa222ch6QJmzVIvhkJeDA5UjjgHeU1U/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的开启瞬态过程可以分为四个部分，图2-6 所示。  

 t0-t1 阶段：VGS 从负电源轨VEE 上升到VTH，在这一过程中驱动需要提供一股大充电电流IG(SRC)，这一过程中的充电电流由CVDD 及VDD 提供。因为在这一时段内，ID和VDS 都未发生变化，因此这一过程也叫做开启延时阶段。由图2-5 可见，在开启瞬态中，驱动电路的充电电流将流过三个电阻，RHI，RGATE，RGI。RHI是驱动电路的等效内部电阻；RGATE 是路径寄生电阻与额外添加的damping 电阻之和；RGI是SiC MOSFET 的内部栅极电阻。其中RHI和RGATE 一般为几欧姆，而SiC  MOSFET 的内部栅极电阻RGI一般为十几欧姆。因为这三个电阻将和SiC MOSFET的输入电容CISS 形成RC 时间常数，因此栅驱动需要输出足够高的电流来保证栅驱动输出信号有一个足够快的上升沿。 

t1-t2 阶段：VGS 从VTH持续上升至米勒平台。ID在这一阶段内持续上升，并将在达到米勒平台时达到最大值。对于SiC MOSFET 来说，在这一过程中，VGS 还是处于一个比较小的值，导致SiC MOSFET 的导通电阻中沟道电阻占主导。而因为SiC MOSFET的沟道电阻阻值较大，因此在这一过程中SiC MOSFET 的导通电阻是一个比较大的值。因为当VGS 小于13V 时，SiC MOSFET 的RDS较大，因此不能让SiC MOSFET 长时间工作在VGS 小于13V 的条件下，以防止SiC MOSFET由于发热而损坏。这对驱动电路设计提出的要求是，应使SiC MOSFET 的VGS 尽快从VTH 上升到13V 以上的状态，一般应小于几纳秒，以减小ID²RDS 的损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO0dr8QYewRTBnH26EvHB5R2V1DXgqtwQ5AGQrVO6latq6h9GDTkIBA0Xp2YFeg5KAXicibLhZEZpkRVZyu3uQicvBp5kJV0mjjbU/640?wx_fmt=png&from=appmsg)

t2-t3 阶段：VGS 在这一阶段将处于米勒平台，对于SiC MOSFET 来说为8V 左右。在这一过程中，满载的ID 将流过SiC MOSFET，VDS 在米勒平台阶段将下降。 同时，RDS 中沟道电阻仍占主导，仍是一个比较大的值，且在这一过程中，ID为满载的状态，因此VGS 应尽可能快地渡过这一过程。因为这一过程过渡的快慢是由驱动的输出电流IG决定的，因此栅驱动在米勒平台时的驱动能力格外重要。 

t3-t4 阶段：在米勒平台的末尾，VDS 将下降到接近零的值，等于ID\*RDS。在VGS 从8V 上升到20V 的过程中，沟道电阻的比重将逐渐降低，同时JFET 电阻和漂移区电阻的比重将逐渐增加，最终阻值较小的漂移区电阻将占主导，使得RDS下降到一个比较小的阻值。  

综上可见，SiC MOSFET驱动电路需要有足够的电流驱动能力，以加快SiC  MOSFET的瞬态过程，缩短SiC MOSFET工作在高RDS状态的时间，以保证SiC  MOSFET的可靠性。此外，由于SiC MOSFET的RDS在低VGS下阻值会变大，因此为了保证SiC MOSFET 在开启稳态中能可靠地工作，需要增加欠压保护功能，当开启稳态下的额定VGSMAX即VDD低于18V时，关闭SiC MOSFET，以防止SiC  MOSFET由于RDS过大而过热烧毁。  

SiC MOSFET 的关断瞬态过程可以认为是开启瞬态过程的逆过程。关断过程中栅驱动示意电路及关断波形图分别如图2-7 及图2-8 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOG1k92e6WMApA13XLBQCP9IdVqYkuznLQOLfpo4tVPKhK2SUlQ4wFZViaeqncDGLQVjibNhibhy9zHB1I46zTHfuibrZs04tHmDAc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMVbEmtfLaXia6O15LlZibvsNERg5lBYgF8Qq0tFKSdTvx1J62Y9Qe7iaQDujgZCoTZUHAdVJX75y7zKeP6lanMmxAXV4zzWMuEQE/640?wx_fmt=png&from=appmsg)

在SiC MOSFET 的关断瞬态中，驱动电路需要有足够大的抽电流能力，将SiC  MOSFET 的输入电容CISS 快速放电。此外驱动电路的输出阻抗在关断过程中要足够低，以使SiC MOSFET 的栅极保持低电位。关断瞬态过程同样可以分为四个部分。 

t0-t1 阶段：VGS 从VDD 下降到米勒平台。这一初始阶段中IG最初是由储存在CISS 中的电荷提供的，同时CDD将被重新充电至接近VDD，为下一次开启瞬态做准备。在这一过程中ID 保持不变，由于VGS 降低，RDS 将会增加，从而使得VDS会有少许的增加。 

t1-t2 阶段：这一段为米勒平台阶段。在米勒平台阶段，栅极电流IG主要用CGD提供，CGS 看到的电压VGS 几乎保持恒定（但不是恒定，如前文所示SiC MOSFET的米勒平台不是平缓的）。在这一过程中，VDS 将会升高至功率管所在拓扑中的最高电源轨。在这一过程中ID保持不变，而RDS 由于VGS 的降低而增加，功率管的压力将增大，因此在栅驱动的设计中，驱动电路应能提供足够大的抽电流能力，使SiC MOSFET 快速渡过米勒平台阶段。 

t2-t3 阶段：这一阶段中，VGS 将从米勒平台下降到VTH，ID将逐渐减小最终接近零。在这一阶段VDS 将保持最高值，这也意味着CGD 被完全放电，即这一过程中栅驱动电流将全部用于对CGS 放电。 

t3-t4 阶段：在这一阶段中，ID和VDS 都保持不变，SiC MOSFET 将处于最后的关断过程。一方面，由于当VGS 等于0 时，SiC MOSFET 的输入电容不能被彻底放电，另一方面，SiC MOSFET的阈值电压仅为2至3V，因此为了使SiC MOSFET彻底关断，以及防止dv/dt 等干扰使得SiC MOSFET 误开启，VGS 最终应处于一个负压，以满足上述要求，这对于半桥拓扑和全桥拓扑格外重要。此外，驱动电路 在关断状态时保持低阻以保证VGS 稳定在负压也十分重要。  

综上所述，SiC MOSFET 关断瞬态过程对于驱动电路设计的指导和要求是， 驱动电路需要能够提供足够大的抽电流能力，以保证SiC MOSFET 能够快速关断，减小SiC MOSFET 在关断期间由于增大的RDS 和较大的ID而承受的压力；此外，为了保证SiC MOSFET 彻底关断以及抗dv/dt 能力，驱动电路在关断稳态时需要提供负压关断条件。 

SiC MOSFET 实际开关瞬态波形图如图2-9 所示。该实际波形图与图2-6、图2-8 的区别是由SiC MOSFET 的I-V 特性曲线并不如Si MOSFET 理想而导致的（如图2-3-1 所示），其主要区别在于ID的上升（下降）过程与VDS 的下降（上升）过程在时间上存在重叠。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNiaJTibLRVxicwH7HNSjibxt5cUhl9PZWybkiaQPmJQeGCQL3oIpN8nUAibYZjOqLbfNGh7oLFK6mVoJG6OIv84DCqTiaXKfwWZMhtKA/640?wx_fmt=png&from=appmsg)

2.8 SiC MOSFET 的寄生参数及其影响  

SiC MOSFET 虽然与Si MOSFET 采用不同材料，但其器件结构是一致的，本 质上都是金属氧化物半导体场效应晶体管，故二者的寄生参数基本是一致的，区 别仅在于各寄生参数数值的大小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPictm4DCmSt7dIcx2xTupcD4O1F4AnHdglm7ynhqA6ibmELQaJPuFiaJ6iajXM1pP1KTMfZZK5GrOjgEcQSPfJq7b1CklJrUW23Fc/640?wx_fmt=png&from=appmsg)

如图2-10 所示为SiC MOSFET 的寄生参数等效示意图。如图所示，其寄生参 数主要包括源端寄生电感LS、源端寄生电阻RS1、RS2、漏端寄生电感LD、漏端寄生电阻RD1、RD2、栅端寄生电感LG、栅端寄生电阻RG1、RG2、栅源寄生电容CGS、 栅漏寄生电容（即密勒电容）CGD以及源漏寄生电容CDS。在功率管开关过程中， 对于栅极回路而言，在密勒平台之前，驱动电路对CGS 充电，由于内部栅极寄生电阻、内部栅极寄生电感的存在，LG、RG、CGS 将发生振铃；在密勒平台期间，由于此时为对密勒电容CGD充电，故这一时段内LG、RG、CGD将发生振铃；在密勒平台结束后，驱动电路继续对CGS 充电，故该时段内又将变为LG、RG、CGS 振铃。 此外，由于从进入密勒平台时存在充电电容的切换，故栅极电压将存在一个切换的状态。  

密勒电容CGD将在瞬态期间由于VDS 的dv/dt 而感生出瞬态电流，结合内部栅极电阻RG将使得SiC MOSFET 可能出现误开启或损坏器件的现象，其具体原理如下所述。  

如图2-11 所示为半桥应用中，当低端功率管处于关断状态，高端功率管由关断状态转为开启状态时的等效电路图，其中RDRV\_H、RDRV\_L 为驱动电路等效阻抗，LPGH、LPGL 为从功率管栅极PIN 脚到芯片驱动PIN 脚的寄生电感。在上管由关断到开启的瞬态过程中，SW 点将随着上管的开启而快速抬升（该抬升过程如前文所 述理论上发生在上管的密勒平台期间），使得下管的VDS 快速上升，从而在下管 的密勒电容两端产生dv/dt，由于SiC MOSFET 的应用电压一般为1kV 以上，同时为了有效利用其高速特性及出于功率管可靠性的考虑，其瞬态时间一般为10ns 以内，故该dv/dt 可高达100V/ns，从而使得密勒电容上感生出瞬态电流，其大小为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNJbbXuygpA8vYegjf5Vem0pLUHmic8AOA7nicCCqib1G98Z0fJYSbt2305zAEU9GZvLib9NEQETLBgggSFVvdksJLT7jcFDqSDcUU/640?wx_fmt=png&from=appmsg)

该电流将分为两部分，分别如图所示为I1、I2。I1 流过内部栅极电阻、外部栅 极电阻以及驱动电路等效内阻；I2 流过功率管栅源寄生电容CGS。此外，由于功率管还存在漏源寄生电容CDS，故SW 点的快速变化也将使得CDS 感生出瞬态电流I3。 为了便于计算，忽略源端及漏端寄生参数，忽略RLG1，忽略I2 及I3，考虑到漏端电压的变化量级远大于栅端，故将VDG近似为VDS，则由

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOtjYZd78ibDagF0Xf76vbZCmwVahT5kHuDtYrc3R1xnjgbcu45vb7fSu4Exsg1NXrJuJEAqgsUVkbQ2UqwicTcgZ4FU9NCgDJ5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMPm6jZ28MZx7hnyVDvUz2TMkFPOrOgRGuyAfJNM5yA07IuYbg0jFFXZibibjB84sYDnibu94I0Z5PbmlNORMgFrz6IUKWrLBLKEk/640?wx_fmt=png&from=appmsg)

可有

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPT8PuuRayGxjZiacxmPcvVsJp2fTRdD3MyicOAaSYEstjpuib1ib6libp1g8ibzCKKlkffAwAvIsBHE00Hko6aHMXjWjrIK9GmP7ubA/640?wx_fmt=png&from=appmsg)

化简可得最终结果为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOu7Zzusic2uGLsqo29E7gbEylSD5OHwL0EAabwDEm9xOpX6ZqrOJOzY2tpcF2ziavOuaP4UpTRZTvWlfgFB0j4xQwzp9r1P4xSE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPwrhprBXW2IJCJd0uABwkRUVMoeU8HZBGbR1PmFzSNAXyVTxphdB9b4cS7DjAw2ghfgPTOk0MkvDplXevibwTU5VydAS0I6rzM/640?wx_fmt=png&from=appmsg)

由式2-10 可知，在忽略一定参数的情况下，当下管处于关断状态，上管经历 开启瞬态时，SW 点的上升瞬态变化将使得下管的VG（S 需注意，该VGS 为core MOS的VGS，而不是包含了寄生参数，从封装上看到的VGS）将出现一个正的压差，该压差与功率管内部栅极电阻、外部栅极电阻、驱动电路等效阻抗、功率管内部寄生电感、板级寄生电感、密勒电容以及SW 点一阶变化速率、二阶变化速率有关， 由于SW 点的二阶导数在SW 点上升的开始阶段最大，而SW 点的一阶导数在SW点上升的中段最大，故VGS 的最大值一般出现在SW 点上升过程中。若参数处理 不得当，将会导致下管在上管开启瞬态中误开启，从而造成穿通电流，一方面可能会烧毁功率管，另一方面会对输出电压电流产生影响。故从驱动电路的设计角度来讲，一方面需要减小驱动电路的等效阻抗，从而削减密勒电容感生电流在栅源之间产生的压降，另一方面需要采用负压关断技术，来提高功率管对瞬态dv/dt的抵抗能力；此外，由于外部栅极电阻有削弱瞬态过程栅极振铃的作用，故需要综合考虑振铃现象与dv/dt 现象，对外部栅极电阻的取值做折中处理。从板级的设计角度来讲，需要通过合理的板级设计，使功率管与驱动芯片尽量靠近，从而减小从功率管栅极到驱动芯片驱动PIN 脚的寄生电阻、寄生电感，进而达到提高功率管抗dv/dt 的能力。  

对于上管而言，在这一过程中，VGS 增大，VDS 减小，如图2-12 所示，VDS的减小将耦合到功率管栅极，从而导致VGS 存在一个下掉的现象，若该下掉值过大， 即ΔV 过小，将使得功率管关断，而后再重新开启，出现二次开启现象。为了避免功率管的二次开启现象，需要增大驱动电路的驱动能力，从而保证不会出现二次开启。在功率管关断的瞬态中，同理将出现VGS 由于VDS 的耦合而上抬的现象， 若处理不当将出现二次关断现象，同样可以通过增大驱动电路的驱动能力来避免。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPkKuNg006XBdelY7cAd4h5GYIAeEweTO65ZZ4LFQNmnmlUfWmevb5wKtapbia3ssAnkm5XquiaQgnraE1grYJZpqlp9ia4aL3hao/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOwVYwtkAhQAblCyY9nSrsicvmPbJJEpDicXHfFOe1W7JuhqqXdnjj5fHWcYrXnTOgbChzE3I0ibEnyQfUibswc7icFs0icicbPcE2ibW4/640?wx_fmt=png&from=appmsg)

与图2-11 同理，在半桥应用中，当下管处于关断状态，上管经历关断瞬态时，密勒电容、CDS 也将由于SW 的变化而出现感生电流，电流组成成分与图2-11 相同，具体如图2-13 所示。与图2-11 的分析同理有，I1 将使得core MOS 的VGS 出现负电压，若该负压值过大，将会损坏功率管。考虑到需要提高功率管的抗dv/dt能力，而采用了负压关断技术，使得功率管在关断状态时已存在一个负压，故负压关断的负压值要采取折中处理，在功率管的最大负压耐受值与抗dv/dt 能力之间 进行折中；另一方面可以增大驱动电路的关断能力，从而保证减小由于SW 点瞬 态变化而产生的VGS 负压。  

综合来看，在高频应用中，寄生电感将影响SiC MOSFET 驱动电路的有效性，故在板级设计上，驱动电路应与SiC MOSFET 器件尽量靠近，以减小寄生电感； 另一方面，半桥应用中上下管的相互串扰将导致功率管的误开启或栅极损坏，应从合理的负压关断值选取、增大驱动能力、分段驱动等角度做电路上的优化；最后，对于单管开关瞬态而言，密勒电容的耦合效应易导致功率管的二次开启、二次关断效应，应从驱动能力、分段驱动等方面做出相应优化。  

2.9 本章小结  

本章介绍了SiC MOSFET 的器件特性，并从器件特性角度得出对驱动电路设 计的指导及要求；分析了SiC MOSFET 寄生参数在瞬态变化过程中产生的各种影 响，得出了驱动电路相应的设计要求。下一章将讲解SiC MOSFET 驱动电路的传 统结构及现有技术。

第三章 SiC MOSFET 驱动技术概述  

3.1 防串扰功能  

如第二章第八小节所述，由于SiC MOSFET具有高速特性，故在驱动电路设 计中常常选择增大驱动电路的驱动能力，从而将SiC MOSFET 栅极的瞬态上升沿 时间、下降沿时间控制在8ns 左右，而这样做带来的问题是，使得SiC MOSFET漏端在瞬态期间经历高达150V/ns 的dv/dt（1200V 情况下），以半桥应用为例， 会带来上下管之间的串扰问题，若串扰过于严重，可导致功率管误开启，造成串通问题以及输出被干扰等问题。因此在SiC MOSFET 驱动电路的设计中，防串扰功能尤其重要，虽然在Si MOSFET 中同样存在串扰问题，但由于Si MOSFET 的瞬态dv/dt 远小于SiC MOSFET，故在SiC MOSFET 驱动电路中需要着重考虑串扰问题。论文2.8 小节已详细分析串扰机制及串扰带来的影响，此处不再累述。抑制串扰的方法主要分为两种，一种是采用有源密勒钳位技术，当检测到功率管处于瞬 态过程时，动态启用密勒钳位电路，抑制串扰的发生；另一种是斜率控制技术， 即通过控制驱动能力的大小，分段控制瞬态驱动能力，从而达到控制dv/dt 的目的。  

3.1.1 有源密勒钳位技术  

图3-1 所示为文献\[37\]提出的一种有源密勒钳位电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPgbBUprhmWR6Tg7aK7aC09xGkORExnkzwicx0v0VoAdyZDAb6J2zSmicRbHtLQd8WBLxaTuF2Z0rc1R4NOia8Z4gUb30lKlCazKY/640?wx_fmt=png&from=appmsg)

图中以上管驱动电路的有源密勒钳位电路为例，下管的有源密勒钳位电路省略未画。传统的有源密勒钳位电路采用辅助三极管或辅助MOSFET 并联在主驱动管上，在瞬态期间将SiC MOSFET 功率管的栅极钳位到地或者负压，从而达到有源密勒钳位的作用，可以很好的抑制串扰现象，但这样做会加快关断速度，从而加剧另一功率管的负压串扰现象，故不是最优的有源密勒钳位方案。该文献提出的有源密勒钳位电路由辅助三极管、电容、电阻构成，在上管开启过程中，辅助三极管处于关断状态，不会对驱动支路产生影响；在上管关断过程中，串扰带来的密勒电流流过驱动支路的电阻，将使得辅助三极管开启，从而将辅助电容CA\_H并在上管SiC MOSFET 栅源电容上，由于CA\_H的取值为上管SiC MOSFET 栅源电容的10 倍左右，故该辅助电容将为密勒电流提供低阻放电通路，从而有效抑制上管栅源之间的正向串扰电压；在下管开启瞬态过程中，同理，下管辅助三极管将导通，将下管辅助电容并在下管栅源电容上，从而降低的下管的开启速度，进而 达到抑制上管栅源之间的负向串扰电压的目的。  

虽然该电路可以起到有源密勒钳位功能，且避免了传统有源密勒钳位加快关断速度的问题，但该方案一方面需要较大的辅助电容，无法实现片内集成，另一 方面会大大减慢功率管的上升沿时间，无法发挥SiC MOSFET 高速的特性，故仍存在一定的局限性。  

3.1.2 多电平驱动技术  

图3-2 为文献\[38\]提出的一种多电平驱动电路，图3-3 为其工作时序图。  

如图3-2 所示，该电路可实现四电平驱动，分别为负压关断电平\-5V，正压开启电平20V，dv/dt 控制电平15V 以及di/dt 控制电平0V。通过检测功率管漏端电 压的大小，当漏端电压下降时，产生驱动电平变更信号，经过一定延时td1 后，驱 动电平由20V 变更为15V，该电平的保持时间由控制器决定，保持时间结束后， 再将驱动电压切换到20V，使功率管处于开启稳态并减小功率管导通电阻。通过合理的设置电平变更时刻以及电平保持时间，可以使得驱动电路在密勒平台期间 的驱动能力为15V，从而减小了驱动能力，进而减慢密勒平台时间，一方面减小了dv/dt 的大小，另一方面削弱了功率管尖峰电流，其开启瞬态波形图如图3-3(a)所示。在功率管关断瞬态中，如图3-3(b)所示，通过检测功率管源端寄生电感上的 压降，可以检测到功率管电流开始变化时刻及变化停止时刻，即可以检测出di/dt出现的时段，在该时段内，将驱动电平由\-5V 变更为0V，当di/dt 结束后，再将驱 动电平变更为\-5V，使功率管处于挂断稳态，并通过\-5V 的负压增强功率管的抗串扰dv/dt 能力。通过在di/dt 期间将驱动电压变更为0V，可以减慢功率管关断速度，增加di/dt 持续时间，从而达到减小di/dt 以及功率管漏端尖峰电压的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNQYDm0licCDibkp5hQBXVLI4fgq40ZZWFubdoLhH8eia4112qvMGh6R0xkqI6Lv5xWtfECLdJibN3577VzrydGo6q6PM87juzKnBM/640?wx_fmt=png&from=appmsg)

该文献所提出的多电平驱动电路的优点在于可以有效控制di/dt以及dv/dt的大 小，从而增加SiC MOSFET 的可靠性，相比于文献\[37\]提出的有源密勒钳位电路， 该多电平驱动电路对功率管上升沿时间及下降沿时间的影响要更小，更能发挥出SiC MOSFET 高速的特性。由于SiC MOSFET 的上升沿时间及下降沿时间一般在10ns 以内，密勒平台时间及di/dt 时间要更短，故多电平控制电路需要极快的比较电路。此外，该文献采用控制模块计时来估计密勒平台持续时间，这种方法无法准确完美准确覆盖密勒平台时间，故仍存在一定的局限性。  

3.2 欠压保护功能  

由第二章SiC MOSFET的器件特性可知，SiC MOSFET需要足够大的稳态开启栅源电压，以保证SiC MOSFET 的导通电阻足够小，从而降低功率级损耗，若SiC MOSFET的稳态开启栅源电压没有达到要求的值，则会导致SiC MOSFET 导通电阻增大，一方面会使功率管发热，严重时可能会烧毁功率管，另一方面会增大功率级损耗，降低系统效率，故SiC MOSFET 驱动电路需要具有关于稳态开启栅源电压的正向欠压保护功能，当稳态开启栅源电压值小于预设值时，关断功率管，从而起到保护功率管的作用，同时欠压点应片外可调，以配合不同型号SiC  MOSFET。同样由第二章可知，当SiC MOSFET 处于关断稳态时，其栅源电压应加负压，以提高功率管的抗dv/dt 能力，若稳态关断栅源电压值没有达到要求的值，则可能会导致功率级的串通现象，严重时会导致功率管烧毁，故SiC MOSFET 驱动电路也需要具有关于关断稳态栅源电压的负向欠压保护功能。综上，SiC  MOSFET 驱动电路需要具有双向欠压保护功能，以保证SiC MOSFET 的可靠性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM1tgUaibat9YeiawsLnpCUlj6BNt0qf8DVhyfFUX4R14bKQW8r6jxnibefszZ1ZAoV0fYMibicadbQrp1pFaZkmt6we77UA7OPPGDg/640?wx_fmt=png&from=appmsg)

图3-4所示为文献\[39\]提出的一种欠压保护电路。该文献提出了一种由分立式 器件搭建的板级SiC MOSFET 驱动电路，优点在于耐高温（最高工作温度180°C）， 结构简单，成本低，基本功能齐全。如图所示，VCC为驱动电路供电电压，同时也 是功率管开启稳态栅源电压，VOC为过流信号，由其他过流保护模块产生，VCCL为信号电源，Vfault为错误信号集合，VUVLO（即Q13 基极电压）为欠压flag 信号。D7至D9 为齐纳管，击穿电压为6V，当VCC大于18V时，D7、D8、D9击穿，使得其所在支路存在电流通路，进而使得Q14处于开启状态，为Q13 提供基极电流，此时可理解为VUVLO信号为高，未发生欠压，假设VOC为高（即未发生过流），则最终Vfault 为高，表示没有错误发生；当VCC 低于18V 时，D7、D8、D9 无法正常击穿，使得Q14关断，无法为Q13 提供基极电流，故Q13关断，此时可理解为VUVLO信号为低，发生欠压，最终Vfault为低，表示有错误发生，通过后续电路关闭功率管，达到保护功率管的目的。  

该文献所提出的电路虽然具有上述优点，但作为板级驱动电路，其所占面积要远大于芯片级驱动电路，成本更高；此外，该欠压保护电路不具备迟滞功能， 因此可靠性不高；考虑到齐纳管击穿电压随温度漂移的特性，该电路不具备稳定的欠压点，因此实际应用上会产生较大的欠压点误差，从而降低了该欠压保护电路自身的可靠性。  

从对\[39\]中欠压保护电路的分析可见，对于 SiC MOSFET 而言，1.其欠压保护电路需要具有一定的欠压迟滞窗口;2.其欠压点随PVT的变化应足够小;3.欠压点应做到片外可配置，以配合不同型号的SiC MOSFET。  

3.3 过流保护功能  

SiC MOSFET的过流保护电路需要具有高速高精度的特性，这是因为对SiC  MOSFET，当其发生过流时，由于SiC MOSFET I-V 特性曲线的特殊性，较小的VDS 变化会引起较大的IDS 变化。常用的SiC MOSFET过流保护电路一般有三种方法：SENSEFET电流采样过流保护功能、寄生电感采样过流保护功能、去饱和(desaturation)过流保护功能，这三种方法各有利弊，下面将分别举例讲解其原理。  

3.3.1 SENSEFET 电流采样过流保护功能  

SENSEFET电流采样过流保护功能要求所用的SiC MOSFET具有SENSEFET， 在此基础上，采用SENSEFET电流采样电路来对功率管负载电流进行采样，考虑到具体的采样原理与BUCK电路中的SENSEFET电流采样原理相同，下面以一种BUCK电路中的SENSEFET电流采样电路为例介绍SENSEFET电流采样的原理。  

如图3-5 所示，SENSEFET 电流检测是通过将采样管与功率管的漏端及栅端短 接，然后通过运放钳位的方式使得二者源端电压相等，从而使得当功率管开启时， 采样管与功率管的栅源电压相等，漏源电压相等，故二者的电流之比仅等于尺寸之比，消除了沟调效应。而后通过将采样电流转化为采样电压输出，即可实现对功率管电流进行采样。这种方法可以较为准确地采样到功率管的实际负载电流， 但这种方法要求功率管必须自带SENSEFET，因此并不能适用于所有型号的功率管，故存在一定的局限性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnEPO5KgtffUqXT6eEwZskO8yRia9foLEunlE5d40ficAkwdMy3CsJT7rOReLBZPF5sNmvpZTqGsBdYfds138A6zqM7E0wS8zrY/640?wx_fmt=png&from=appmsg)

3.3.2 寄生电感采样过流保护功能  

寄生电感采样过流保护功能利SiC MOSFET封装上源端寄生电感来得到输出电流信息，从而根据该信息进行过流保护的判断。图3-6 为\[40\]提出的一种过流保护&短路保护电路。  

如图所示，该电路具有过流保护功能（OC detection branch）和短路保护功能 （SC detection branch），应用了从开尔文源端到功率源端之间的寄生电感来对输出电流进行采样。  

对于其短路保护功能，工作原理为：由图中所示电路可以得出id 到Vo 的传输 函数为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMGtrSy9YceFRhY53DaUTjz00xZ5Mak9UTic7Mt8zthq0z0gNU15SibzAepHokPZDvj4022xqwwjgjOUibDbmxNMlOIsScu5X5TpU/640?wx_fmt=png&from=appmsg)

从式3-1 可见，从id 到vo 的传输函数具有高通滤波器的特性，在高频时，vo随id 线性变化。在功率级发生短路时，id 会出现高频大电流尖刺，因此，通过合理设置高通滤波器的平带频率，可以使得输出仅采样到发生短路错误时的id 信息， 通过后续比较器即可输出短路错误flag 信号。在电路设计上，为了防止正常工作时Cs 与Rs 分流，应保证Cs 与Rs 的阻抗远大于LP 的阻抗；二极管DS1 及DS2 的作 用是保护比较器的输入端，由于二极管存在寄生电容，为了防止该寄生电容影响到vo 与id 传输函数的准确性，应保证Cs 的容值远大于二极管寄生电容，同时应尽量减小DS2 的寄生电容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMYHelLGrAkCKDzw6TqQxRcqtmrEL3eU0siajEDicVmyJw3eMCMmugLn58IoMxNroibPwd2qabFux4YMr5oP5AHstLmeIpE2MxibkI/640?wx_fmt=png&from=appmsg)

过流保护电路同样是利用功率管从开尔文源端到功率源端的寄生电容来采样输出电流信息，但由于在正常功率管开关过程中，会出现开启时的过冲电流以及 关断时的下冲电流，若用和短路保护相同的电路做过流保护，会误采样到过冲&下冲电流，因此该文献增加了一个电感Lo，使得从id 到vo’的传输函数变为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPyibE3icN8kpQujKPicQeZwDn8GGoJuTRzqahA7ic5PyJdI53hFUZvzgbicmpAhW9qPjcpKpRZnibY010j3rZv90GaJic1P1h0wibwMHo/640?wx_fmt=png&from=appmsg)

从式3-2 可见，过流保护电路中的传输函数具有带通特性，通过将平带频率范 围设置为包含功率管开关频率，并滤除过冲&下冲电流频率，即可得到与稳态输出电流相关的电压信息，进而可以通过比较器产生过流错误flag 信号。  

通过寄生电感进行采样并判断过流的方法优点在于对SiC MOSFET 没有特殊要求，检测方式简便；缺点在于电路设计难度较大，不同的外围拓扑会产生不同 情况的电流尖峰，设计完成的电路很难自适应地配合不同的外围拓扑，且电路检测精度不高，检测速度也要受到环路带宽的限制。

3.3.3 去饱和过流保护功能  

去饱和过流保护功能常用于以IGBT 为代表的双极型功率开关器件，以IGBT为例，正常情况下器件工作在饱和区，当发生过流时，器件会退出饱和区进入线 性区，此时器件的VCE 会随电流增大而增大，通过检测器件VCE 的大小，可以判断器件是否处于过流情况。SiC MOSFET的I-V 特性曲线相比于Si MOSFET 更接近于IGBT，因此去饱和过流保护功能的思路也适用于SiC MOSFET，但由于IGBT专用驱动芯片的过流保护响应时间一般为微秒级别，不适用于高速的SiC  MOSFET，因此无法直接用IGBT 专用驱动芯片驱动SiC MOSFET。  

图3-7 所示为\[41\]提出的一种去饱和过流保护电路，图中buffer output 为buffer输出，该值高于Vdesat\_th。当功率管关断时，Mdg 开启，将比较器负端Vdesat 拉至GND， 使比较器输出未过流信号；当功率管开启时，在前沿消隐时间内，Mdg 将保持开启 状态，前沿消隐结束后，Mdg 将关断，未发生过流时，功率管漏端电位接近GND电位，DSS 导通，将Vdesat 拉至低于Vdesat\_th，比较器输出未过流信号；当功率管发 生过流时，其漏端电位抬升，使得DSS 截止，buffer output 将对Cblk充电，最终使得Vdesat 高于Vdesat\_th，使比较器输出反转，输出过流信号，最终使得功率管关断。 其优点在于既加入了前沿消隐以屏蔽开关尖峰，又以简单电路实现了片内集成， 但缺点在于无法通过调整片外参数以调整过流点，对不同型号功率管的适用性低。  

相比于SENSEFET 过流保护与寄生电感采样过流保护，去饱和过流保护具有电路简单，容错率高，检测精度高的特点，同时可通过简单的设计实现片外调整 过流点，提高对不同型号SiC MOSFET 的适用性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOduiaBFeuQjIOCmJ4wBrL7z2zWMBciaGaSFDyk1SSHvqicgEvOSguPxO0tZCicNMFJwwS1nMKBFeT4gEoia7M8QDIA84BZA8Fcxdgc/640?wx_fmt=png&from=appmsg)

3.4 过温保护功能  

SiC MOSFET结温一般最高可耐受600°C，考虑到封装条件，SiC MOSFET 器 件耐受温度一般可达150°C 至200°C。出于减小板级寄生参数的考虑，SiC MOSFET器件与驱动芯片要尽可能贴近，因此驱动芯片的温度接近SiC MOSFET 器件温度， 故可以以驱动芯片自身的过温代表SiC MOSFET 器件的过温，因此SiC MOSFET过温保护的设计思路是检测驱动芯片自身是否发生过温，若芯片发生过温，则关闭功率管以起到保护功率管的目的。需要明确的是，由于现代封装技术所能达到的最高温度耐受值一般高于硅基芯片的最高温度耐受值，故过温保护功能的存在主要是用于保护驱动芯片不因高温而失效，其次才是防止功率管温度过高。  

图3-8 为\[42\]提出的一种过温保护电路。如图所示，当温度较低时，A 点电压 低于Q1 开启所要求的VBE 大小，故Q1 关断，使得输出VOUT 为低，同时M9 开启， 将R3 短路，当温度逐渐升高时，VA逐渐增大，同时Q1 开启所要求的VBE将逐渐 减小，当VA大于该所要求的VBE 时，三极管Q1 导通，当VA继续升高，达到设定 的过温点时，Q1 将进入深度饱和区，使得Q1 的集电极电位变为低电平，使得输出VOUT 翻高，输出过温信号，同时使得M9 关断，将电阻R3 接入A 点所在支路，从 而加入迟滞量；当温度再从高逐渐降低时，VA 逐渐降低，同时Q1 开启所要求的VBE 逐渐增大，当VA降低到低于Q1 开启所要求的VBE 时，三极管Q1将关断，使 其集电极电位变为高电平，进而使得输出VOUT 翻低，同时使M9 开启，将R3 短路。  

该文献提出的过温保护电路实现了过温功能及迟滞功能，且电路结构简单。 该电路的设计思路为PTAT 电压与CTAT 电压（即Q1 的VBE）相比较得出过温点， 但由于Q1 的VBE 是温度的复杂函数，因此该电路在理论计算上很难确定准确地过 温点。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMmnNJZyG2Kte57epkvgwGDvhia2UKysvFWDhOWia0d4icD5BDSib9wZur4iczD1Gw62apQh6GlrKRbzJvJJG06yzbax7GwUpNZYqiaE/640?wx_fmt=png&from=appmsg)

3.5 本章小节  

本章介绍了SiC MOSFET 驱动电路的常用功能，并介绍了传统SiC MOSFET驱动电路及其各自优缺点，下一章将讲解本论文提出的SiC MOSFET 驱动电路理 论设计及对应电路图。

第四章高可靠性 SiC MOSFET 驱动电路设计  

如前文所述，为了充分发挥SiC MOSFET 的器件优势，SiC MOSFET 驱动芯 片需具备具有大驱动能力及密勒钳位等功能的驱动级模块；为了保证SiC MOSFET的正常工作状态，SiC MOSFET 驱动芯片需具备过流保护功能、欠压保护功能、 过温保护功能等必要保护电路。本章将根据SiC MOSFET 的驱动要求及可靠性要求提出一种具有大驱动能力、密勒钳位功能及浮动电源轨的驱动级模块；一种基于desaturation 过流保护原理的过流保护模块；一种欠压点可调且迟滞窗口小的欠压保护模块以及一种电路结构精简的过温保护模块。  

4.1 具有大驱动能力及密勒钳位功能的驱动级模块设计 

4.1.1 具有大驱动能力及密勒钳位功能的驱动级模块结构设计  

根据SiC MOSFET器件特性，对SiC MOSFET驱动级模块需要具有以下三点要求：  

1.驱动级模块的开态输出电压应达到20V，关态输出电压需达到\-8V（此处 给出的20V及\-8V的数据为仅以一种SiC MOSFET器件应用条件为例）；  

2.驱动级模块在瞬态期间的电流输出能力应达到4A；  

3.驱动级模块需具备密勒钳位功能。 

针对以上三点要求，本文提出的SiC MOSFET驱动级模块架构图如图4-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMcibAg3iaJeCLJH0NOibZB5xMdrH8T7brzpLlmHqovhaHTjs2OFcpeG2DyTZvRykq8tVlfr5lztlRJC69G51NYicvSmVibpAicbjeB8/640?wx_fmt=png&from=appmsg)

为达到第一点要求，本文提出的驱动级模块的供电范围为VDD=20V，VEE=-8V，在此条件下，为了达到第二点要求，使驱动管具有大电流输出能力， 同时出于节省芯片面积的考虑，电路内所有器件均采用薄栅氧器件；为达到第三点要求，驱动级模块在原有两条驱动支路的基础上，增加了密勒钳位支路，以起到密勒钳位功能。  

由于薄栅氧器件的栅源耐压为5V，芯片供电范围为\-8V 至20V，故为了保护芯片内器件的栅源不被击穿，芯片内部额外增设三条电源轨，分别为  

V5V：5V LDO 输出电源轨，用以供给输入逻辑模块及各保护模块； 

RAIL\_H：相对于VDD 低5V 的电源轨，用以供给上拉驱动管所在驱动链， 即该驱动链的供电电压为如图4-1 所示的RAIL\_H 至VDD； 

RAIL\_L：相对于VEE 高5V 的电源轨，用以供给下拉驱动管及密勒管所在驱动链，即该驱动链的供电电压为如图4-1 所示的VEE 至RAIL\_L。  

其中，由于RAIL\_H 及RAIL\_L 这两个电源轨所供给的驱动链没有模拟模块， 故RAIL\_H 及RAIL\_L 不需要由LDO 产生，对应的电源轨产生电路将在后文给出。  

为了加快瞬态期间的信号传输速度以及减小瞬态期间RAIL\_H 及RAIL\_L 的电压变化，本驱动级电路增加了瞬态增强模块Tran-DRV，在瞬态期间产生额外的 电流以做瞬态增强功能。  

此外，考虑到输出驱动管的串通问题，本驱动级电路增加了防串通模块，如图4-1中所示的H-Anti PT(punch-through)及L-Anti PT(punch-through)即为防串通模块，该模块通过简单的电路设计实现LS 功能，以完成上拉驱动链与下拉驱动链之间的信号传输。  

该驱动级模块的工作原理为：input logic 模块将片外输入的PWM 信号转化为IN 信号，输入到上移电平位移模块H-level shifter 及下移电平位移模块L-level  shifter。H-level shifter 的输出信号输入到上拉管驱动链DRVH 与防串通模块H-Anti-punch-through，根据H-Anti-punch-through 输出信号及H-level shifter 输出信 号判断是否开关上拉管；L-level shifter 的输出信号输入到瞬态增强模块Tran-en、 下拉驱动链DRVL 、 密勒钳位模块Miller clamp 以及防串通模块L-Anti-punch-through，根据L-level shifter 及L-Anti-punch-through 的输出信号综合判断是否开关DRVL及Miller clamp。此外，驱动级还具备一个XEN PIN 脚，用于输出可实时反映功率管开关状态的信号，当XEN 信号翻转时，代表功率管以处于开启或关断的稳态，该PIN 脚未在图4-1 中画出，但将在后文给出详细电路。  

4.1.2 具有大驱动能力及密勒钳位功能的驱动级模块电路设计  

本文提出的驱动级模块电路结构如图4-2 所示。各模块电源轨范围如图中虚线 框上下阴影所示，需注意的是，H-Anti-punch-through 及L-Anti-punch-through 电源轨为VEE 至VDD。驱动级模块内各电源轨的关系如图4-2 内RAIL generator 模块左侧波形图所示，VDD 与RAIL\_H、V5V 与GND、RAIL\_L 与VEE 之间的压差均为5V（理论上）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO0GMian1uIuS2zgQQoYU5anOztdaXIqg8jamMCoYsQwLriaZLxTanomOElf35q98Mg1v3g0GY1SGhQEEhN6kn33NHL7PdS6gfEs/640?wx_fmt=png&from=appmsg)

该驱动级模块具有三组驱动管，上拉驱动管MSRC，下拉驱动管MSNK 及密勒 钳位管Mmiller，分别由上拉管驱动链、下拉管驱动链及密勒钳位管驱动链驱动。对 于MSRC 所在的上拉管驱动链，当输入PWM 信号翻转时，高侧电平位移器 H\_LS将 IN 信号（input logic 的输出信号，与PWM 信号同相）的电平从 GND 至 V5V的电源轨位移到RAIL\_H 至VDD 的电源轨，H\_LS 的输出一方面经过INV1 后输 入到NAND1 中，另一方面输入到H-Anti-punch-through 中。当PWM 信号由高翻低时，INV1 的输出为低电平，使得NAND1 的输出VX 为高电平，进而关断上拉 驱动管，可见在PWM 信号翻低时，MSRC 直接关断，无需根据H-Anti-punch-through判断下拉驱动管开关状态；当PWM 信号翻高时，INV1 的输出为高电平，此时需要根据 H-Anti-punch-through 输出的电平情况来决定VX 的电平，如图4-2 中H-Anti-punch-through 模块右侧时序图所示，当MSNK 的栅极电压VL为高电平时，H-Anti-punch-through 输出为低电平，使得VX为高电平，当MSNK 的栅极电压为低电平时，H-Anti-punch-through 输出为高电平，使得VX为低电平，故当PWM 信号 翻高时，需要MSNK 先关断（即栅极电压变为低电平），而后才可以开启MSRC， 从而起到了防止驱动管串通的作用。

对于下拉驱动管MSNK 所在驱动链，当PWM 信号翻转时，低侧电平位移器L\_LS 将IN 信号所在电源轨由V5V 至GND 位移到RAIL\_L 至VEE，其输出信号 经过低侧整形比较器CMP\_L 整形后输入到NOR1 与L-Anti-punch-through，L-Anti-punch-through 的工作原理与H-Anti-punch-through 相同，故当PWM 信号翻高时，MSNK 直接关断，当PWM 信号翻低时，需等待MSRC关断，而后才可以开启MSNK。L\_LS 的输出信号也将输入到瞬态增强模块TRAN-DRV 中，在PWM 信号的每个翻转沿都产生瞬态增强电流，加强RAIL generator、H\_LS、CMP\_L、密勒整形比较器CMP\_M 的瞬态特性。  

对于密勒钳位管Mmiller所在驱动链，当PMW 信号翻高时，L\_LS 的正输出端 为低电平，故此时NAND2 的输出直接翻高，由于其后的驱动链与MSNK 所在驱动链相同，因此Mmiller 与MSNK 同步关断；当PWM 信号翻低时，L\_LS 的正输出端为高电平，故此时NAND2 的输出电平取决于密勒电平位移器M\_LS 的输出电平， 由于从IN 端到M\_LS 的输入端存在延时电路，延时时间结束后M\_LS 的输出翻高， 进而使NAND2 的输出翻低，随后通过驱动链使Mmiller 开启。由此可见，当PWM信号翻高时，Mmiller 与MSNK 同步关断，当PWM 信号翻低时，MSNK 在MSRC关断后直接开启，Mmiller 在延时结束后开启。从IN 端到NAND2 输出端的时序图如图4-1-2 中密勒延时单元delay Miller 模块下方所示。通过合理设置delay Miller 模块 的延时时长，可以做到在SiC MOSFET 关断完毕后，额外增加一条密勒钳位下拉通路，从而实现密勒钳位功能。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPf82YRCJfr5AgeNHRhxrO8lFwgVtoFvWgMnIz6TX3s7os3HfTdEQhUPqwb6YI53trlKdq5MsiaKjmLFicW9SUoKDVdVzqn6AMOk/640?wx_fmt=png&from=appmsg)

对于XEN PIN 脚，所在通路如图4-2 所示，XEN 信号为Mmiller 驱动信号VZ经过XEN 延时单元DELAY\_XEN 后，再经过电平位移到V5V 至GND 范围后得 到，因此当PWM信号翻高时，如图4-3所示经过一定传输延时及DELAY\_XEN延时后，XEN 信号翻低；当PWM信号翻低时，经过一定传输延时及delay\_Miller延时加DELAY\_XEN 延时后，XEN 信号翻高。通过合理设置延时时长，可使得XEN 信号准确表示SiC MOSFET 栅极信号电压水平。  

4.1.3 相对电源轨产生电路（RAIL generator）设计  

如前文所述，为了保证各驱动链中薄栅氧器件的正常工作，需要产生相对于VDD低5V的相对负电源轨RAIL\_H与相对于VEE高5V的相对正电源轨RAIL\_L， 其电路图如图4-4 与图4-5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOcyhQF873tBbn2pN7kUwvBmISZwB3cSel8KogZUAsqJlicnN6GyKJy52NKKMj4JtVGrENYgbGibF4dhjoTJXcfSttcIxTywzTj8/640?wx_fmt=png&from=appmsg)

如图4-4 所示，相对电源轨产生电路整体分为两部分，RAIL\_L 产生电路与RAIL\_H 产生电路，该模块所有MOSFET 均为源漏耐压36V 的LDMOS，供电范围为VEE 至VDD。对于RAIL\_L 产生电路，MC1 至MC5 为电流镜，为齐纳管ZL及调整管MNL提供静态偏置电路，IB\_TL 为瞬态增强电流，其实际电路图如图4-1-5所示，CL 为稳压电容，Z4 为保护作用的齐纳管，RAIL\_L 与VEE 之间的压差为ΔRAIL\_L。对于RAIL\_L 产生电路，MNL 的栅极电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSQ7aiatmTJ3W1ZJicQ9BRn7PXHfMuVCHGAOmZ1ibYutvDticY4qCxnMljRhPlQMPk7FYIOUPuial7vpVNSzFicqBzKzGnGehAZ1f94/640?wx_fmt=png&from=appmsg)

故 RAIL\_L 的电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMqtmYDYXRTfY01aHxONcvicBEf1W3z7M17NGxXmwdfKtia6CvNNKfNdibyQuDic3Ubic7LzIQHric2WCpic3leNO8yG0SvicLYFhWlnGU/640?wx_fmt=png&from=appmsg)

因此 RAIL\_L 与VEE 之间的压差为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNFNQa28yOQlicDEiaF079Kmml9nuBriawG5ZsLiaznOcW3wJkL8PAxCiaVXb7e07zIkmZwItIicmvFHJUsnXENTSb2yibyZ5QAECbHlI/640?wx_fmt=png&from=appmsg)

由于瞬态增强电流IB\_TL 加入到了ZL 所在支路，故在瞬态增强期间ZL 上的电流将增大，因此ZL 的击穿电压VZL 将升高，所以在瞬态增强期间，VΔRAIL\_L 将增大，这是因为在瞬态期间，MNL 的负载将加重，从而使得VΔRAIL\_L会由于负载加重而减小，而通过增加流过ZL 的电流，可以缓解因MNL 负载加重而导致的VΔRAIL\_L减小，同时，由于MNL 的自我调节能力，也可以在其负载加重时对VΔRAIL\_L 进行调整。电容CL 的作用为瞬态期间的缓冲，Z4的作用是防止VΔRAIL\_L过大，从而损坏后续负载电路。  

对于RAIL\_H，其原理与RAIL\_L 相同，VDD 与RAIL\_H 之间的压差为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOTN20OqcwRXc4zrWuSPG86fibicw0qEv98QWzk1b8uicKQbclZw5Xc6WWwICn30hjickic2kicwvYTDeKricDAvBfDex9rOFQCoN77ibs/640?wx_fmt=png&from=appmsg)

在瞬态期间除了 MPH的自我调节作用外，MC9与MC10 构成的电流镜，也增强了该电路的瞬态调整能力，其原理为当MPH的负载加重时， VΔRAIL\_H 会减小，MPH的电流通过MN10 与MN9 电流镜的放大，将RAIL\_H 向下拉，从而使得VΔRAIL\_H 增大，从而达到调整的作用。IB\_TH 的瞬态增强电流对VΔRAIL\_H的调整作用与VΔRAIL\_L相同。  

 IB\_TL 与IB\_TH 的产生方式如图4-5 所示，是通过将瞬态增强电流IV 镜像而 产生的，IV 的产生方式将在下一小节讲解。

4.1.4 瞬态增强电路（TRAN\_DRV）设计  

瞬态增强电路的目的是在PWM信号反转，功率管开关瞬态过程中提供瞬态增 强电流，如图4-2 所示提供给CMP\_M、CMP\_L及H\_LS 以加快信号传输速度； 提供给RAIL generator 以强化电源轨，增强电源轨稳定程度。  

瞬态增强电路的具体电路图如图4-6 所示，其输入信号为IN\_TRAN 信号，该 信号为L\_LS 的负输出端经过反相器整形后产生。当IN\_TRAN 翻低时，R1 所在支路将产生延时，延时时间由R1 及C1 大小决定，当设置逻辑门的翻转点为供电电压的一半时，其延时时间为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMzpDlw3eoPib1kv1DySUupJHmhsx43yVlo17aibD6LIR4DX0Fibfgx8vVCNibtDnXViaibibzvvdBGG09LH3wuwx8gpLIZeobAsDicsN8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMcO18VjO5ibE6icicOEzmxYBWPYMbph1QPqYbI8NYFOnBTZGKdaiaOtN8hPjhmJYxTaic8UmyHAdlibuEaDdXGc8t5HarPcaibhf3PJo/640?wx_fmt=png&from=appmsg)

该延时时间最终在MS 的栅极产生了低电平的窄脉冲，在窄脉冲时间内MS开启，从而为电流镜的源头产生电流，进而镜像给各模块。MH 的源头电流为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlbL7nCUKyzGGVxrNEowmKRiaZ9iaPP93z2QEwkAvbsmjESTRYrGorjgxZXpQm8N1wMVJKvVqGTqDibMCBEMLGoHLPMJibJxesNLg/640?wx_fmt=png&from=appmsg)

4.1.5 延时单元设计  

如图4-2 所示，本文提出的驱动模块中具有两个延时单元，分别是密勒钳位通 路的延时单元DELAY Miller，以及XEN 通路中的延时单元DELAY\_XEN，作用分别是提供密勒钳位所需的延时时间以及拟合功率管瞬态延时。 

DELAY Miller 延时单元的电路图如图4-7 所示，该延时单元为两级延时结构，每一级均仅在下降沿产生延时，延时时间由C1，R1 及C2,R2 控制，当设置逻辑门的翻转点为供电电压的一半时，其延时时长等于

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNkerbZOKsbIvRoOaZhJ4YLfkpticM4LeE5OOfPRKNxKd6icCprb7cy3YeulvVqTjc4UQoD0Uay1wzZGtLt7g3v5FSUmmYNxib3Ac/640?wx_fmt=png&from=appmsg)

为提高流片成功率，该延时模块额外添加了两组trimming 电容单元，以对芯 片的密勒钳位功能进行修调，防止密勒钳位管过早或过晚开启，从而影响功率管的可靠性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRwBEEN2Qqh1C6fTLfPFvsQgkf8ol9nauMdN09g70AcdWktpu7IibGvGENn09esawBNL8BI0p7rfKRb1nTgPPUfvrrsLVToO2E/640?wx_fmt=png&from=appmsg)

DELAY\_XEN 延时单元的电路图如图4-8 所示，其结构与DELAY Miller 延时 单元类似，同样为两级结构，但DELAY\_XEN 延时单元在输入端的上升沿和下降沿均存在延时，如图所示，其延时时长由C1，R1 及C2,R2 控制，当设置逻辑门的翻转点为供电电压的一半时，其延时时长等于

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMvw7bhzsTr9fP63DJzxuOD1l7gKuqTibIOOvD05l458Fyiczp09C3QahuzHUFoOjHX85q86swZKncJ6wTHAQhRO6xeXPTXn3dsc/640?wx_fmt=png&from=appmsg)

通过合理设置延时时长大小，可以拟合功率管开关瞬态延时，从而使得XEN  PIN 脚在功率管开启完成后翻低，在功率管关断完成并且密勒钳位管开启后翻高，作为功率管开启关断完成的flag 信号输入给主控芯片。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOj7ZGL4Tj1RtxdVRZrqkicqZ3dCgYlN5wNJ6atznw4ibc7tWEksChZXhpCFMcHWiamoMoVwGfDvoCdlrH2vd1iaoVks6FUFGljiazs/640?wx_fmt=png&from=appmsg)

4.1.6 防串通电路设计  

防串通电路L-Anti-punch-through 及 H-Anti-punch-through 的作用如前文所述， 对于L-Anti-punch-through，要实现的主要功能是将上拉驱动管MSRC的栅极信号传 递到下拉驱动管及密勒钳位管所在通路，以保证MSNK 及Mmiller 仅可在MSRC关断后开启 ，防止串通现象产生 ；H-Anti-punch-through 实现的主要功能与L-Anti-punch-through 类似，是将MSNK 的栅极信号传递到MSRC所在通路，以保证MSRC 仅可在MSNK 关断后开启，防止串通现象产生。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOFvk4Ciat6CGWme6DW3sibDJibJmbns8SUKrq56I4F0AD8MKiaHU4eyOPP7QQwoV6t24UMbGwT6hVRecSCPjAYaDCAcsajibJ3f8r0/640?wx_fmt=png&from=appmsg)

H-Anti-punch-through 及L-Anti-punch-through 电路图如图4-9 所示，其中MP1与MN3 为5V 低压管，MP2，MN1，MN2，MP3为LDMOS 高压管；波形图如图4-10所示，其中VOH\_LS 与PWM 信号反向，故图4-10(a)中NPWM 信号的逻辑态与VOH\_LS 一致，VOCMP\_L与PWM 信号同相，故图4-10(b)中PMW 信号的逻辑态与VOCMP\_L 一致，为了便于表示，图4-10 采用PWM 信号与NPWM 信号表示VOCMP\_L与VOH\_LS。如图 4-9(a)所示，VOH\_LS 为H\_LS 输出信号，其电源轨范围为VDD 至RAIL\_H，当VOH\_LS 翻高时（对应功率管关断瞬态），MP1 关断，在VL 翻高前，MN1 处于关断状态，故VOH-Anti 节点处于高阻态，由于该节点对VDD 的寄生电容 要远大于对 VEE 的寄生电容，故此时VOH-Anti 理论处于较高电平状态，由于此时 图4-2 中INV1 的输出为低电平，故无论此时VOH-Anti 的电平为何种状态，NAND1的输出均为高电平，因此VOH-Anti 的高阻态不会影响后续电路的逻辑正确；当VL翻高时，MN1 开启，使得VOH-Anti 开始下降，由于MP2 的栅极电压为RAIL\_H，故最终VOH-Anti 将下降到RAIL\_H。当VOH\_LS 翻低时（对应功率管开启瞬态），MP1开启，通过设置较大的MN1 静态电流能力以及较大的RH 电阻阻值，可以保证VOH-Anti 处于较低电平，而不会被NAND1 识别为高电平，同时通过MOS 管尺寸 设计，将NAND1 的翻转点调高，可以进一步保证此时的VOH-Anti 不会被NAND1识别为高电平，由于此时VOH\_LS 为低电平，故NAND1 的输出不会翻转为低电平； 当VL 下降到低电平时，MN1 关断，使得VOH-Anti 变为高电平，进而使得NAND1的输出翻转为低电平，MSRC 开始开启。  

通过上述分析可见，H-Anti-punch-through 配合INV1 与NAND1 实现了如下功能：当PWM 信号翻低时，MSRC 立刻关断，无需考虑MSNK 的开关情况，当PWM信号翻高时，MSRC 需等待MSNK 关断，而后方可开启，从而达到了防串通的目的； 同时通过简单的电路设计，实现了电平位移的功能，省略的电平位移电路，从而节省芯片面积。齐纳管Z1的目的是防止VOH-Anti与VDD 差值过大从而损坏 NAND1中 MOS 管的栅极，同时，由于齐纳管的存在，使得 MP1 可以选择低压管。由于MP2 及MN1 需承受高压，因此选择LDMOS，其耐压值应大于VDD 与VEE 的差值， 且应留有裕量。 

L-Anti-punch-through 的工作原理与H-Anti-punch-through 相同，不再累述。  

4.1.7 电平位移模块及整形比较器模块电路设计  

如图4-2 所示，本文提出的驱动级电路具有四个电平位移模块以及两个整形比 较器模块，分别为H\_LS，L\_LS，M\_LS，LS\_XEN，CMP\_L 以及CMP\_M，其电平位移的目标分别为： 

H\_LS：将电源范围为V5V 至GND 的信号位移至VDD 至RAIL\_H； 

L\_LS&M\_LS：将电源范围为V5V 至GND 的信号位移至RAIL\_L 至VEE； 

LS\_XEN 将电源范围为RAIL\_L 至VEE 的信号位移至V5V 至GND； 

CMP\_L&CMP\_M：对下拉管驱动链及密勒钳位管驱动链的驱动信号进行整 形，防止出现错误逻辑。  

之所以不在上拉管驱动电路中增加整形比较器，是因为VDD 是由外部电源提 供，非常稳定，在瞬态开关期间基本不会出现波动，而VEE 是由片内电荷泵产生，在瞬态开关期间会出现波动，考虑到bondingwire 的寄生电感，VEE 的波动会较大，为了防止以VEE 为电源轨的驱动链中信号因VEE 波动耦合而出现错误逻辑，需要再该驱动链中增加整形比较器以提高抗干扰能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSIUtBk0qxUuq91L2BoXtibwpmqCiaRo7aPTupfibPs289myJuqaaS35w4aSbFUn19VdMicoc9GulBTIj9IBOwUTds64wmW458vxs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOKMNwibJcUhuiblLlic1eC0kpn4mhppmzRdvH8JG70z19Roxc5qCx7gLd87AvVKp5gMF4UfgFtObHPREibQdB67m38y7SlxLfWD6Y/640?wx_fmt=png&from=appmsg)

出于电源轨的考虑，为了电路设计方便，瞬态增强模块的输入信号是L\_LS 的 输出，故在时序上来看，L\_LS 输出的翻转会先于瞬态增强信号的产生，因此瞬态增强信号不提供给L\_LS 模块；由于M\_LS 所在支路存在延时单元，因此瞬态增强 电路也不提供给M\_LS。故瞬态增强电流仅提供给H\_LS，CMP\_L，CMP\_M 以及RAIL generator。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3XBSgOw5Z9ttLicqpzGLKc5ouCelibj4ZHjZbBdONBpgoSTxUBCic5ECUGcb3icueia5u7wvzrVOpD4cb7qZ02ePODGeEZ8wYiat1s/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPL1SGrP3EJQJ3myEDZg1hBDib8c4M6G4icAukcG3jjj1GOkAe2l5zyBGhvFWZoWmdIWUwxiaIeO6HtMnYQctn2ZvicGE9e8z8RK0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOeRez66xOy7sAkY4kNY538UicIp0SIIiahmicrlv7ycC451GudfABKichibuXYv3VcgRbJibziaNTbxw1PfIG3uCuXibGbaxJ0giaXrYJI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN2nibRmEsxDbXF10xkV22rAsBgJdmswibyoibNiapQgxI96UdTjVjz3ZmiaZJlrggKjQneuXyiaibJkYt646WVhK57FbQCPkEK53AA78/640?wx_fmt=png&from=appmsg)

H\_LS 电路图如图4-11 所示，其中MN1 与MN2采用高压管LDMOS，其余均为5V 低压管。由于输入信号INN 与INP 的电源轨范围为V5V 至GND，故需添加齐纳管以保护MP1,MP2,MP3,MP4 的栅极。IBH\_LS 为静态保持电流，IBTRAN\_III 为瞬态增强电流，由于IBH\_LS 的存在，使得该电路不需要添加锁存结构以防止偏置电流消失时输出逻辑的错乱。该电路的主要工作原理与比较器相同，当INN 翻低（GND），INP 翻高（V5V）时，MN2 开启，MN1 关断，进而使得偏置电流全部流过MN2 所在支路，MN1 所在支路电流为零，通过电流镜的镜像作用，使得MP4 的电流等于电路偏置电流，MN4 的电流为零，使得输出端VO 为高电平，且该高电平为VDD，从而实现了将V5V 至GND 的信号位移到VDD 至RAIL\_H 的目的。  

L\_LS，M\_LS 及LS\_XEN 分别如图4-12,4-13,4-14 所示，其结构及工作原理与H\_LS 相同，齐纳管作用及高压管低压管的选取也与H\_LS 相同，不再累述。 

CMP\_L 及CMP\_M 的电路图如图4-15 及4-16 所示，由于该模块的输入信号 与输出信号的电源轨范围相同，因此所有MOS 管均选用低压管，出于保险起见， 仍保留齐纳管。其结构与工作原理与H\_LS 相同，不再累述。  

4.2 去饱和过流检测模块设计 

4.2.1 去饱和过流检测模块结构设计  

本文采用的过流保护方式为去饱和过流保护，即如前文所述，通过检测功率管漏端的电压大小来判断功率管是否发生过流。去饱和过流检测模块的结构图如 图4-17 所示，主要由两部分组成：过流检测判断部分以及动态下拉电阻LEB 延时部分。芯片PIN 脚DESAT 通过电阻R 与防反二极管D 连接到功率管漏端，芯片 内部产生不随温度变化且电流值大小可片外修调（以保证在不同工艺角下的电流 值大小一致）的偏置电流源IDESAT，该电流源通过DESAT PIN 脚流过R及D，最 终流入功率管，为了防止片内电阻R1 及R2 分流导致精度下降，要求片外电阻 R的阻值远小于片内电阻R1 及R2 阻值之和。  

当PWM 信号翻高时，LEB 模块开始工作，在LEB 时间内，动态下拉电阻并入R1及R2 所在分压支路，由于动态下拉电阻R3 的阻值远小于R，故此时VDESAT接近GND，故比较器CMP 的正端接近GND，小于负端所接的VREF，因此比较器输出为负，未产生过流信号；在LEB 时间结束后，动态下拉电阻退出该分压支路，此时DESAT 端的电压等于

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN6ictb5KdGRfmUl52NiaTWXicyrFBcxOpF6xOiaiaz907BkobkxjmS1xdCTBXbwe120HDm0vGN8t6dFcmFbIbbPJrl8lPQiarAicYoibg/640?wx_fmt=png&from=appmsg)

随着功率管电流逐渐增大，VDESAT 逐渐增大，进而使得比较器正端电压逐渐 增大，结合片内R1 与R2 的分压，可得出当比较器输出过流信号时功率管电流的大小为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO5rerah6Z6zLrpYu7bHzn7bf8YtuuGyGBCibIbYYtnPlCSsJHj7DPUD9r0hSUn6SohM7uicjnucicufSWwyicquODJeD6K4e7AZyA/640?wx_fmt=png&from=appmsg)

同时通过对上式进行变形，可得出用于指导片外电阻R 阻值选取的公式

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMXuNFjPy4jSicBkLIQkhIvZX08QR1ZMCzIPzf2cxgX4WXvbjLCXSL0LM4tCJbEl556WwhiaS8nO9DFWKhpibPlIQj39ksv1ib7Mhs/640?wx_fmt=png&from=appmsg)

在实际应用中，可结合所选用的SiC 功率管应用手册中的I-V 特性曲线来根据VDS 的大小来进行电阻R 阻值的选取，即通过下式选取

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNicsrY4udCUWnQ9RLWwL0L0iaCpSbmZNBU7hKzRxQficQ8rXhZIOtFibjpSbNjq8cyPib0r2zM5UWic6XncebJWFPyicMm3BywkKK7Tg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOB8a8Iz2TANiaWjNAuLV63hQ8icN3yjq77ICy6a8mhJLQtGQAK9LBxUGHyT3pzKhwVHQpI1IWiaqQtDrUReSpibGr53EGOSsWwtq4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPibxtPunRGibzNl9QVebyCyIUdGXgvcc7Wbx28jtIZTzeYprg3xibQqiaffRbOxBEiaXIWckOv48QA4QBJxxL0no82arjylib9C8ECk/640?wx_fmt=png&from=appmsg)

当比较器输出翻高时，产生过流信号，输入到输入逻辑模块，从而关闭功率 管。当PWM 信号翻低时，LEB 模块启用，此时LEB 模块并不起到LEB 功能，而是屏蔽功能，通过将动态下拉电阻并入分压支路来将比较器正端拉低，从而屏蔽 过流信号。之所以要在功率管关断的时候将动态下拉电阻并入分压支路，是因为 由于要保证分压电阻远大于片外电阻R，故R1 与R2 之和较大，当功率管关断时，其漏端电压上升至接近DC BUS，由于功率管所在DC BUS 远高于VDD，故此时片外二极管D 将截止，片内偏置电流IDESAT 将全部流过R1 与R2，使得比较器正端高于VREF，从而产生错误的过流信号，故为了保证逻辑正确，需要在PWM 信号 翻低时将比较器正端拉低，以屏蔽过流检测信号。过流检测模块的时序图如图4-18所示，其中INP\_CMP 为比较器的正输入端，OCP\_FLAG 为比较器的输出，td1 为 从达到过流点到功率管关断的延时，td2 为从IN 翻低到动态下拉电阻启动完成的延 时。  

4.2.2 去饱和过流检测模块电路设计  

本文提出的去饱和过流检测模块电路图如图4-19 所示，如图所示，该模块可 分为三部分：LEB 部分，动态下拉电阻及其防串通驱动部分，过流检测部分。对于LEB 部分，当PWM 翻低时，IN 翻低，使得A 点电位翻高，同时MS 开启，使得电容C 放电，比较器CMP\_TM 的正端被拉低，比较器输出翻低；当PWM信号翻高时，MS关断，基准电流IBTM 开始对电容C 充电，CMP\_TM 正端开始升高，当其正端电压上升至超过负端基准电压VREFTM 时，比较器输出翻低，进而使得A 点电位翻低，从IN 翻高至A 点电位翻低的时间即为LEB 时间，大小等于

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO7T0jZy62z1IC39Dia8XBic1yeMpNDuLcwG70kDYg5y3NQvKfahu4Nia1BLet9IR2Yslj3dicC12qCoAXYeQ3P4Qg7tBibAuvju2m4/640?wx_fmt=png&from=appmsg)

此外，CMP\_TM 受VDD 欠压信号控制，当VDD 发生欠压时，将关闭比较器 以节省功耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMrbibicLbTsxpuyBibfn04bQmvjGL3ntCYd4ibQY5mIibnQo0tUgVEXZ1x6kxZhEPHCAiceYVpagCyRcJibbq5PCzsQ8ibcTB7mxbGcBs/640?wx_fmt=png&from=appmsg)

对于动态下拉电阻及其防串通驱动部分，如图所示，动态下拉电阻由MAP 构 成，为高压LDMOS，通过尺寸设计可使得其导通电阻为欧姆量级，其开关状态由防串通驱动决定。当A 点翻高时，MN3 开启，对MN1 与MN2 的栅极DN 节点放电， 由于通过尺寸设计使得MN1的下拉电流能力要强于INV内PMOS的上拉电流能力， 故在DN 翻低使得MN1 关断前，B 节点保持为低电平，故MN5 处于关断状态，虽然MN4 处于开启状态，但此时UP 节点仍没有下拉电流，故MP2 保持关断状态；当DN 节点翻低时，MN1 与MN2 关断，B 节点被INV 拉高，故MN5 开启，对UP节点放电，使得MP2 栅极电压降低，动态下拉电阻MAP 开始开启。可见，该防串通驱动可以保证MP2 只有在MN2 关断后才能开启，从而有效防止了MP2与MN2之间串通电流的产生。需要注意的是，当MP3 关断，MN5 关断，MN4 开启时（即A 点为高，B 点为低时），由于UP 节点对V5V 的寄生电容要远大于对GND 的寄生电容，故虽然此时UP 节点处于高阻态，但其默认保持高电平。A 点翻低时对应的状态时MP2 关断，MN2 开启，其防串通工作原理与A 点翻高时相同，不再累述。  

对于过流检测部分，其工作原理如前文所述，此处不再累述。由于CMP 中的MOS 管均为薄栅氧器件，故为了保护输入对管的栅极，此处增加了钳位保护电路，如图4-19 所示，MCP 为LDMOS，通过将其栅极接5V LDO 输出V5V，源端接CMP正输入端，可以保证正输入端的电压不会超过5V，同时为保险起见额外增加了齐纳管Z1。电阻R4 可以与Z1 的寄生电容构成低通滤波器，以滤除高频噪声；比较器负端的RF 与CF 构成低通滤波器，以滤除高频噪声，提高检测精度。  

4.2.3 过流检测模块内具体电路设计  

图4-19 中CMP\_TM 的具体电路图如图4-20 所示，该比较器为传统结构，由 于该比较器所处模块是LEB 模块，故对比较器的速度没有严格的要求，出于节省功耗以及节省芯片面积的考虑，采用了传统结构比较器。该比较器的使能信号为VDD 欠压锁定信号VDD\_UVLO，当VDD\_UVLO 翻高时（即VDD 发生欠压锁定 时）MS1 及MS2 开启。MS1 开启将切断比较器的偏置电流，从而节省功耗；当偏置电流被切断时，MP3 的栅极将处于高阻态，此时MS2 开启，将MP3 的漏源电压置零， 从而防止MP3 由于栅源电压大于阈值电压而产生电流。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOxQBrdftXMcBe2gLppdfeUME3OaqEGXvziavcYrD1EdmoBos7ibcYte5Y6YWaxFVd50GhSvbJXUnuSXSicDrBl8Ha5McBZStmXibc/640?wx_fmt=png&from=appmsg)

图4-19 中的CMP 模块具体电路图如图4-21 所示，该电路同样采用传统结构， 考虑到该比较器具有高速要求，故其偏置电流相对于CMP\_TM 较大。该比较器同样受到VDD\_UVLO 信号的使能控制，当VDD 发生欠压时，MS2 开启以将比较器 内部电流置零；MS3 开启将比较器输出拉低，从而屏蔽过流检测功能；MS1 开启， 将MN3 栅极节点拉低，以防止栅极节点处于高阻态。考虑到比较器输入端的电压较低，为了满足共模输入范围，该比较器采用P 对管输入，其共模输入范围为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMAHl6GIw4JHmUBPx8lo1X5zuYkbt2boICgdqoBG8ic2eBfzYSV4LplVJ4yJQmNqzZzngQmdTaPicnZrjJnYzZtibPnHW7GeMk3dk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPDdpqGal08N8pwZyqV0x9IfksU5cYDNElqCf3NHl6srxJL2C0HQSXM2TlD3ObibuWDOg7oFGX4GQ6icaCqnnXvd25z3DQMCORe0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM6ddaYye52eRZeibibCZnycSyIZbIQGk3Ga6EltreuV4pY5XBoyXibURX2AGvdia0ytsuibuCQasGoIrlk3LaTuQ4uFgXBvUf5H2rM/640?wx_fmt=png&from=appmsg)

图4-19 中的IDESAT 模块具体电路图如图4-22 所示，为cascode 电流镜，使得镜像精度更高，其源头为电流值可片外修调的零温电流，从而保证电流值与PVT无关。齐纳管Z 的作用是保护MP1 至MP4 的栅极，由于MN1所在支路的最高电位为5V，故MN1至MN4的栅极不需要齐纳管保护。二极管D的作用是防止DESAT PIN脚发生电流倒灌，电阻RESD是出于ESD 考虑的限流电阻。当IN 翻低时，MS 开启，将该电流镜模块关断，以节省功耗，由于此时比较器CMP 的正端被动态下拉电阻拉低，故此时切断电流镜电流不会产生高阻节点。  

4.3 欠压锁定模块设计 

4.3.1 欠压锁定模块结构设计  

本文提出的欠压锁定模块结构图如图4-23 所示，可分为四部分，VDD 欠压锁 定判断部分，UVSET PIN 脚电压判断部分，瞬态增强部分，5V LDO 欠压检测部分。  

VDD 欠压锁定判断部分由分压电阻R1，R2、迟滞电流IHYS、欠压比较器CMPM以及迟滞电流控制逻辑构成。VDD 欠压解锁点由片内零温电流IUV 以及片外电阻RUV设定，片内恒定电流IUV通过UVSET PIN 脚流入片外电阻RUV，稳定时UVSET PIN 脚的电压值为IUVRUV。芯片上电开始时，UVSET PIN 脚由于IUV 充电开始升 高（ITRAN为瞬态增强电流，后面详细讲解，此处忽略），该PIN 脚接CMPM 正输 入端，比较器的负输入端接VDD 分压信号，由于芯片上电时VDD 也是逐渐升高 的过程，故根据VDD 和UVSET 的上电速度，欠压启动过程可分为两种情况。第一种情况是UVSET PIN 脚上电速度大于VDD 上电速度的慢上电情况，即UVSET PIN 脚先上电到稳定状态，而后VDD 分压值（即比较器负端电压）超过UVSET PIN 脚电压值。当VDD 分压值低于VUVSET 时，迟滞电流IHYS 受逻辑信号控制处于关断状态，此时CMPM 负端电压值为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMWs1SA99UN6hvbbalU6ibVFC9ygRW4pgPk50c4FQTJoicriaT2pc40N8KLoEK5YBjczKKicRCuNvDjzlNtuibps8sYBX8fzxkZx5ibk/640?wx_fmt=png&from=appmsg)

故当CMPM 翻转输出欠压解锁信号时，VDD 的电压值为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO758lQ0hpnibjnv7sIWia7Mokmoj0Whia31ch1ibBRD8YBibGHdIAhE0NQ1bgnwmrxKQPwwP4dNNybBtlkmYYnog3co53jplGopJJs/640?wx_fmt=png&from=appmsg)

当CMPM 翻转后，逻辑信号将使得迟滞电流IHYS 开启并注入R2，此时CMPM负端电压值为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNMtGugf2t58ibSfp7VicFe2iak9tbPNELLl01VkibkMLHRMuP1VLjSwTTticD17AlyWJvvndFQDibn4nXNjtkLghcQkI0Q22MO82ERw/640?wx_fmt=png&from=appmsg)

当发生欠压时，VDD 从正常状态缓缓降低，当VDD 降低到使得CMPM输出 欠压锁定信号时，VDD 的电压值为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMw7YTW5uW0P28QWIM5ncRF3iae3JoApibOx1u6XyicUy74oTXN9Y4k8QqjwlJGCp8IwDpiczLZjYsvYcxtyHmjpaaFx2QbWiaph2Ic/640?wx_fmt=png&from=appmsg)

故VDD 欠压锁定模块的迟滞窗口大小为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQEDBUM0NJaIVQy6a5jt7WbOSiabju1sTqF0iaagibax44dBWpic8JkUxB1b1LTv89DxeXGuZXk8pDhAKlR9QPOx3XmIWsd90ub1E/640?wx_fmt=png&from=appmsg)

通过设置IHYS 与R1 的大小，即可达到设定迟滞窗口的目的。  

第二种情况是UVSET PIN 脚上电速度低于VDD 上电速度快上电情况，即当CMPM 输出翻转时，VUVSET 仍未达到稳定值，由于CMPM 本身没有鉴别VUVSET电 压值大小的功能，因此需要增加UVSET PIN 脚电压判断部分，保证VUVSET 达到一定电压值后，才能使VDD 欠压锁定模块输出欠压解锁功能，即UVSET PIN 脚电 压判断部分设定了最低的VDD欠压解锁值。UVSET PIN脚电压判断部分由CMPH、CMPL 以及后续锁存电路构成。如图4-23 所示，当VUVSET 低于VREFL 时，UVSET  PIN 脚电压判断部分的输出为低电平，从而屏蔽CMPM 的输出信号，使整体模块 输出欠压锁定信号；当VUVSET 高于VREFL，低于VREFH时，UVSET PIN 脚电压 判断部分的输出仍为低电平；当VUVSET 高于VREFH时，UVSET PIN 脚电压判断部分输出翻高，从而解除对CMPM 的屏蔽，使VDD 欠压锁定判断部分开始控制UVLO\_VDD 的电平，故可以使得VDD 欠压解锁的最小VDD 电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP7ia0G2hLuNWGZ1mZJXoIYMy2KGwrROw3ialazXa1nOIbNRMcnQGcmdqz4HdYB8UgcSzhxhuxXN0thBJHBemELSmeelYnCq2dS4/640?wx_fmt=png&from=appmsg)

此外，该电路的迟滞功能可以有效防止UVSET PIN 脚由于外界干扰产生波动 而使得UVSET PIN 脚电压判断部分的输出发生误翻转，即VUVSET 仅在低于VREFL时才能使得UVSET PIN 脚电压判断部分的输出翻低。  

为进一步确保功率管的驱动电压在欠压点以上，在总输入逻辑部分还加入了 由VDD\_UVLO 到逻辑电路之间的延时电路，这样使得功率管开始开关时其驱动 电压高于预设最低驱动电压。

为了保证VUVSET 的稳定，不出现较大波动，芯片外部需要添加稳压电容CUV， 出于稳压效果的考虑，该电容容值较大，故为了加快VUVSET 的上升速度以加快芯 片启动速度，本文增加了瞬态增强部分，该部分由CMPT 与瞬态增强电流ITRAN 构成。当VUVSET 低于VREFBG（带隙基准源输出基准电压）时，启动瞬态增强电流ITRAN对UVSET PIN 脚外挂电容快速充电，当VUVSET 高于VREFBG时关闭瞬态增强电流。 

5V LDO 欠压检测部分由图中CMPV构成，VREFV5V 为5V LDO 输出分压，通过将LDO 输出分压值与VREFBG进行比较，当分压值高于VREFBG时5V LDO 欠压解锁，通过设置VREFV5V 关于LDO 输出的分压比，可以设定5V LDO 欠压解锁点。图4-23 中各比较器均为常规结构，故不再给出具体电路图详细讲解。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOLqraEMHiby9WiblLyKic3icMyopvzJrujPrScAQWbibyJzgib1MzLPusxoaxLkBEIsskIQkx5MTH1FXQtluh2CNguQbvVamiaYl15Mk/640?wx_fmt=png&from=appmsg)

4.3.2 VREFH及 VREFL产生电路设计  

图4-23 中的VREFH及VREFL 需要具有较好的DC 电平稳定性，即这两个电压不可以出现大波动，以防止UVSET PIN 脚电压检测部分产生误判断，故不可以用5V LDO 输出的分压的方式来产生。VREFH 及VREFL 产生电路的结构图如图4-24 所示，以带隙基准源输出VREFBG 作为钳位电压，通过运放钳位的方式产生VREFH及VREFL。如图所示，电阻分压支路的电流大小为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM65cibvk44iczBzSgSYeGXh3rjoia6e110lKjnOyiav9jWq1Elx0IogkqnbrklCZED4I3b1hhD0lIIAkPVSAoj2KmH1TgP2u10JYE/640?wx_fmt=png&from=appmsg)

因此可以得出VREFH 及VREFL 的电压值为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNKOLPJyBe3bSYGBXTs9uo4d3rVGvJgXbC3geSZDKz5xCKb5jicxJWDNHib89aYWkTjzl4f5QepXYVWectExiaU6HEE9yibibOkdf18/640?wx_fmt=png&from=appmsg)

钳位运放OP 为常规结构，考虑到VREFBG电压值较低，故采用P对管输入结 构，具体电路图不再详细给出及分析。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMSpDgyVpiaJatPI1ibm8W87ic2pichyOslvJZOsvgylpekqNmmT8jZpATuzBS4sZORSBGYjNFVxNBZBDeAcJwh0vGaR7YrNuHpA6k/640?wx_fmt=png&from=appmsg)

4.4 过温保护模块 

4.4.1 过温保护模块结构设计  

本文提出的过温保护模块的结构图如图4-25 所示，由钳位部分，过温比较器 部分以及逻辑部分构成。钳位部分的工作原理与上一小节中产生VREFH的原理相同，不再累述。过温比较器具有两个输出端，一个输出端接后续逻辑部分，另一个输出端控制开关管MS，以加入迟滞。逻辑部分增加了过温模块功能选择，可通过片外修调调整OTP\_OPTION 的电平，从而选择是否屏蔽过温模块，以应对某些特殊应用情况（如测试芯片极限工作温度）。

比较器的正端接通过带隙基准电压钳位而产生的基准电压，故在电阻分压值不变的情况下比较器正端电压为零温电压。比较器负端接二极管连接NPN 三极管的集电极（该三极管实际位于比较器内部，为方便表示图4-25 将其画在外部），故比较器负端的电压为CTAT 电压VBE。当温度较低，低于过温点时，VBE 大于比较器正端基准电压VINPREF，故此时CMP\_OTP正输出端为低电平，OTP\_FLAG为低电平，CMP\_OTP 负输出端为高电平，MS 处于开启状态，将R3短路，故此时VINPREF 的值为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMkFNIPibIEbRTg3cYzrl7BfMFvf1yYhZznNE7sk0aRSWXP4fSMRcicAOh5aPPWWr3ZgpiaeIUd7VxnSdLPApOTib7xF0uzvaKreaU/640?wx_fmt=png&from=appmsg)

VBE 关于温度的表达式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOsKRQlZFd5vG28wTdSRnhCcrPSDd7GTmfmTQRlpp86kjibnk5HWmDW285bWiaRHhNeXhyrp6SQ7nS0MoABAgVN4iauRJ3j66IqJo/640?wx_fmt=png&from=appmsg)

当CMP\_OTP 输出发生反转时有

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNJQwyfqsaq0K96ZKMC79eD5sJ1O2tGg1FQI1aYSCwdsAlQBDvTluXm9Jib5uts34mEicvTibVWClaUaVszha9tSEexbL09lEV3XE/640?wx_fmt=png&from=appmsg)

由于VBE 是关于温度的复杂函数，很难将温度表示为VBE 的函数，故在实际电路设计中，先测定预设过温点下VBE 的大小，而后用上式计算R1与R2 的取值。当温度上升到超过过温点后，CMP\_OTP 正输入端翻高，使得OTP\_FLAG 翻高，CMP\_OTP 负端翻低，使得MS 关断，R3加入分压支路，故此时VINPREF 的值 为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMxtiaLAsibHhlVWwcicMLNibWV3qVoAgFEJun3VShicSHUbjicianwKIkbrtR7wlbQXX9XkOOSYMKy9cfLKNI7kGHGXLHsXNDooQF7d0/640?wx_fmt=png&from=appmsg)

由于VINPREF2 大于VINPREF1，故当温度由高于过温点开始下降时，相交于T1需要下降更多才可以使得CMP\_OTP 翻转。同理可得出当比较器再次输出未过温 信号时

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPrBAxmpyIpD46uKbXkc5cYBflcgiamDS24R6d0a6aibIMao68Xtfbu0gibt9oRQk3KWAOwXdh1wia4CDG0Ooiay4KOJpetcNpBdDCM/640?wx_fmt=png&from=appmsg)

当温度低于T2 时，比较器再次输出未过温信号，MS 再次开启，从而引入了迟滞量，通过R1，R2，R3 电阻的比例设计，可以实现可控的迟滞量大小。由于VBE 关于工艺的漂移较大，故该过温检测模块需要加入修调单元以在温度漂移时将过温点修调回预设值，修调单元如图4-25 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMWsLBvmWicGsKbotYfibYe2xn8t1Qy4KMFopibNTaACUhBWjMEfObQOvlmKCvgSlEkjEbzW79S0mrlpiaeLPibvh37ib067ObKiciaaUk/640?wx_fmt=png&from=appmsg)

4.4.2 CLAMP\_OTP 及CMP\_OTP 具体电路图  

钳位电路CLAMP\_OTP 功能如前文所述，其具体电路图如图4-26 所示，考虑 到带隙基准源的输出VREFBG 的电压值较低，故该运放采用P 对管输入结构。其共模输入范围为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNkicQgX3oElxppyvT6gjomxYmqcWKWFBfIA5ZCzS6NiaNK1dd0LZPeEJSLsddew96uABjCFPC7MLiaZMlt0q1YLMgmGBNYaj5SHs/640?wx_fmt=png&from=appmsg)

该运放的低频增益，主次极点，零点分别为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPxpgpjMDOAT5Xseh5EribRRxQDQU55qEzeJcAaM4MEG1ICCTqdCqAltZeLA7bTu5PVRFWKiaI2ib4txheHY5GPrpkqD0oJow7PicM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOeqZJiaeJ9g5tFzUfQqkVbrVBoyUXT7d5N8hdp3PZF5hyUnuD3iaslIDZNMFGKlCvDtxZbYbLKARhfL7r9aN0TIFGokLg6lxnww/640?wx_fmt=png&from=appmsg)

该钳位电路对运放的要求较低，故常规结构即可满足需求。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPl5CtTSblNhQibmX78AWH4WBPafkBgmewhZ1eP3J7emq6lOlSHaFVo81icL6BfSy0acdS2vqjY8R5b5HCDORRiccN1TJKYOSAf0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAfgKFSibqN3lw8GWtVxrHNpD9YPwiaJOpdUHbdzsdz8XpD66h8Kyd5mibJRGYxFOUL9ZIfTASbGBPjbFnuhKtD5rSvL70GOXNK4/640?wx_fmt=png&from=appmsg)

CMP\_OTP 具体电路图如图4-27 所示，如前文所述，在该比较器内部，其负 输入端接二极管连接的NPN 三极管集电极，考虑到其输入端电压范围较低，故输 入对管采用P 管。此外，考虑到三极管的VBE 与其偏置电流有关，故内部电流镜采用cascode 电流镜以保证镜像精度，提高过温模块的精度。由于该比较器不要求较高性能，故采用传统结构，具体工作原理不再累述。  

4.5 本章小节  

本章给出了本文提出的高可靠性SiC MOSFET 驱动电路主要模块的电路图及设计思路，并强调了各模块的设计重点，下一章将给出各模块的整仿验证结果。

第五章高可靠性 SiC MOSFET 驱动电路仿真与实验验证  

5.1 具有大驱动能力及密勒钳位功能的驱动级模块仿真与实验验证 

5.1.1 整体驱动级模块仿真验证  

驱动级模块功能验证外围图如图5-1 所示，由于本文不涉及电荷泵设计，故该 外围图为给出电荷泵相关PIN 脚。芯片VDD 所加电压为20V，SiC MOSFET 漏端最高电压为1200V，同时芯片外加上拉栅极电阻RSRC\=3Ω，下拉栅极电阻RSNK\=1Ω，PWM 信号为500kHz。SiC MOSFET 模型为CREE 公司第三代SiC 功率管，型号为C3M0075120K，输入电容1390pF，VDS 耐压1200V，导通电阻RON\=75mΩ，ID典型值为30A@25°C。  

驱动级模块的整体功能验证结果如图5-2 所示，其中I\_G 为SiC 功率管栅极电流，I\_D 为SiC 功率管漏极电流，VGS 为SiC 功率管栅源电压，VDS为SiC 功率管漏源电压,PWM 为输入信号，仿真条件为TT Corner@27°C，VDD=20V，VEE=-8V，VDD 经历快上电，上电时长为30μs。从图5-2 的大周期仿真结果可见，该驱动级模块可以完成对SiC 功率管周期性驱动。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN7VWNPd335GOp2DdTich8gtGlXChVe5mCIDlNFiaIicvmZ3xLBq0vW3S9x9LhdSjMYxKH4nytxibetwO0rTGRORhxBLF98gM9rFds/640?wx_fmt=png&from=appmsg)

图5-3 所示为SiC 功率管在开启瞬态时的具体仿真结果，在实际整体仿真中， 考虑到抑制栅极振铃，实际应用中会添加外部栅极电阻。添加外部栅极电阻后，在开启瞬态时功率管栅极峰值充电电流为1.52A，芯片传输延时（即从PWM 信号反转到功率管栅极开始抬升的延时）为17.12ns；图5-4 所示为不加外部栅极电阻，1nF 负载电容条件下功率管开启瞬态的栅极波形，如图所示，按照10%至90%的标准计算，该情况下的上升沿时间为7.40ns，最大栅极充电电流为3.95A，满足快速驱动的要求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOLfeYfjgvBljibvcUQWEEp4ZzKdqS6M1vEMtIKxCCqD1aRa6AibicSKLbzMAN7qFfLWfibvpO7d1M8fEb1abia6Zo1dDD4GN0UAGkk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN3RTSQAPKhzor7F66ViaUxBGTICZ8IqYBITAcqfBvx42p549lo3nHRoVZoLzTSKtyyrv3iaFkf7jsr3rXHeniaaX7Hn0WHeSXOdI/640?wx_fmt=png&from=appmsg)

图5-5 所示为在添加外部栅极电阻的情况下功率管关断瞬态仿真结果，如图所 示，在1Ω 的外部下拉栅极电阻条件下，功率管栅极峰值电流为1.76A，芯片传输延时为15.68ns；图5-6 所示为无外部栅极电阻，1nF 负载电容条件下功率管栅源电压波形，如图所示，在无外部栅极电阻的情况下，同样按照10%至90%的标准测量，其下降沿时间为6.94ns，最大栅极放电电流为3.94A，同样满足快速关断的需求。在实际应用中，应根据板级相关寄生参数适当添加外部栅极电阻，减缓功率管开关速度，以抑制功率管栅极及漏极振荡的幅度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNd3KL1KKmqibNpHEuCfbON1I1Ol8WicAqicN02RAXepe5iaiaqg4zoYNUNzp9yIXJuia6k1cXfibX3EN26pkZHr7dRhZ42jj4ia5PcYl8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNrrbjSEEXUI5BE7OSWI3lH1GcpQvcDkj7XIZEqp5hCdAZTgS9fXMCmbWsZ57KFHt86LXgO3UJLSqcGSa2jg36tFYSA7H0L664/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPh25Gv1phb5eZe2JOsA9hMFKuWEsSBHN6sAiaqBztyT6Z5SPxQXleApmnxCtpuf5r5wJJqbTGIpdk8rd1DoggFllYolEyD6v4M/640?wx_fmt=png&from=appmsg)

驱动级上拉驱动管MSR及下拉驱动管MSNK 的最大电流能力仿真结果如图5-7所示，由仿真结果可见，在TT@27°C 的条件下，其电流能力分别达到了4.74A 以及4.69A，满足SiC MOSFET 对于大驱动能力的要求，单由于所用工艺器件特性的原因，在高温下（150°C）电流能力仅为3.74A 以及3.80A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMF3f9KA4aPYee1mBp4CPpxM1nYa5nxS2xTynhHWNqoa6ovicYcapNJKuWbE5LeUAZxXbwyXOFZRsk1AKLico7hh2ZUPVxAm9wJs/640?wx_fmt=png&from=appmsg)

图4-3 各关键节点时序图所对应的仿真结果图分别如图5-8（功率管开启瞬态）与图5-9（功率管关断瞬态）所示，其中图5-8 中，由于在开启瞬态过程中MSNK与Mmiller 同时关断，故VM 与VL 重合。在开启瞬态过程中，仿真结果与前文分析 一致，MSRC 在MSNK 与Mmiller 关断后才开启，当XEN 翻转时，功率管栅源电压为18V 左右，已处于开启状态，故该信号可实时反映功率管的开启状态；在关断瞬 态过程中，仿真结果与前文分析一致，MSNK 在MSRC 关断后才开启，当功率管基本关断完成时，Mmiller 开启，加入密勒钳位通路，当XEN 翻转时，功率管已处于关断状态且密勒钳位通路已开启，故XEN 信号同样可以实时反映功率管的关断状态。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpML06QMzqr7vRqS7Bam0ogGM2NlXqhE5gGdty73lLiahFcPcUicFSAKZ7bMxA4exolPWGBKVorslUDUrHfIZnMiaIbK0Av2RRNs2I/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPbRueNFch5YnkD2bIusIGLXO0A88WtpjVEyQeRX0PWUCIXlZA44vs9kYSPAEcYI5afWrh0H6woU68hVzsKibZxIhzG7UibicWy1o/640?wx_fmt=png&from=appmsg)

图 5-9 各关键节点关断瞬态仿真结果

5.1.2 电源轨产生模块仿真验证  

电源轨产生模块的仿真结果如图5-10 所示，其中detaRAIL\_L 及detaRAIL\_H分别为RAIL\_L与VEE的差值以及VDD 与RAIL\_H 的差值，I\_G 为功率管栅极电流。右图可见，在功率管处于开启及关断稳态时detaRAIL\_L 与detaRAIL\_H 的值分别为5.54V 及5.12V；在功率管的开关过程中，由于瞬态增强电流的加入以及 驱动链的抽载，导致RAIL\_L 及RAIL\_H 会出现一定的波动，detaRAIL\_L 在功率管开启及关断时的最大值分别为5.68V以及5.67V，detaRAIL\_H的最大值为5.90V。 考虑到所用工艺的薄栅氧器件可经受的最高长时间工作电压可达6V，故虽然detaRAIL\_L 与detaRAIL\_H 的电压值超过5V，但在本文的条件下仍可正常使用， 不会出现问题，同时考虑到在电源轨产生模块中加入了齐纳管作为保险措施，故detaRAIL\_L 与detaRAIL\_H 的电压值是可以接受的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPtPK9fUySZDuH0JO43ic1KEIGY9lDUlhIOrslhx70dUWRwMGiayhDz5t0d2piclCWLmwLOsvcaNGjicKEr314nDfmRTLfDcfrVVhA/640?wx_fmt=png&from=appmsg)

5.1.3 瞬态增强模块及各延时模块仿真验证  

瞬态增强模块的瞬态增强时间仿真结果如图5-11 所示，如图可见，在瞬态增 强输入信号的上升沿和下降沿分别可产生长度约为100ns 的瞬态增强时间，在该时间端内开关管MS 开启，产生瞬态增强电流，以加强相关模块瞬态特性直到功率 管开关完成。考虑到整个功率管的开关瞬态时间小于100ns，故该瞬态增强时间满足应用需求。  

密勒钳位延时模块仿真结果如图5-12 所示，如图所示，结合逻辑门NAND2，该电路实现了仅在PWM 信号的下降沿产生延时信号，延时时长为51.2ns，考虑到芯片内部的传输延时以及功率管关断时的下降沿时间，该延时时长可满足在功率 管关断再使密勒钳位管开启。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMKV1YbdlNL34DCdQ9G4jrcXpaC8C8rhaKxK1qw226y1ibibNpsRwuOibpgIzXlfVPyibNP0yXf9MwYsRCyuiaqaiaeKggZ6PRkdsfAU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOVvD7Z1XqHmsoicRBjO0iaBFzqMAjsvQPyqsXauE5EseD96icmzlmllFSC0Y0hU8XeEDCq1mWb45L7vc2zUkkziaOUiaB9nVSpS0ia4/640?wx_fmt=png&from=appmsg)

XEN 支路延时模块的仿真结果如图5-13 所示，该延时值的设置是针对添加外 部栅极电阻的应用条件，如图所示，在延时模块输入的上升沿和下降沿均会产生延时，延时时间分别为50.1ns 以及49.1ns，该延时时间对XEN 翻转时刻的影响如图5-8 及图5-9 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPsPvVT1W8Ow5eUCClG4tpMTib1hKVibF0JFImVGeTWXOfM8LAoMOHpvhV1D7cGM7g2o3Cq2O6q2FCXibaxH1ohib7FYN3psFUNHm8/640?wx_fmt=png&from=appmsg)

5.1.4 H-Anti-punch-through 及L-Anti-punch-through 仿真验证  

H-Anti-punch-through 的瞬态仿真结果如图5-14 及5-15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtQhodb3yic1rzjxSicb1UA3hKjLKJyiadI8ek5DA3F1f5BCkAybJrxYQex2kam4SMvO2xIVehLqv4ZwK9k3YmQCM403s3W1SQIw/640?wx_fmt=png&from=appmsg)

如图5-14 所示，在功率管关断瞬态时，其波形与前文理论分析一致，VOH\_LS的翻高使得VH立刻翻高，将MSRC 关断，而后VL 升高使得MSNK开启，当VL升高后VOH\_Anti 翻低；在功率管开启瞬态时，如图5-15 所示，在VOH\_LS 降低之前，VOH\_Anti为低电平，当VOH\_LS 降低后且VL 降低前，VOH\_Anti 的电压有一定的抬升，但不会触发后续逻辑门，当VL 降低后，进过一段时间（图中所示3.1ns）VOH\_Anti开始升高，触发后续逻辑门，随后VH开始降低，使得MSRC 开启。图5-15 中3.1ns延时的原因在于，当VL 降低使得MN1（图 4-9a）关断后，MN1的漏端节点需要先 充电使其漏端电压上升，而后才能使得输出节点上升，故该延时来自于MN1 漏端 节点充电延时，由于时间较短，故不会对整体电路产生影响，而且该延时的存在 可以使得驱动管更不易出现串通现象。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM9R3reEl9kRJmWG15ecKwdAUPf1uJnG1acQwYUv8F1ZXzV9QPN34jhGQSoKmXWgxupU8VMiaXKqH2ROS6BxyGYAO8swcUO3Eok/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMM4QDQicantibVIWRneNg4kBcIDIyf35kwbr8ZznaHKYpPaBAQorYIQk2rwkcibiaeIruMxjrIZ27icsEo4ftIyKjnkyvHwtT7mpo8/640?wx_fmt=png&from=appmsg)

L-Anti-punch-through 的瞬态仿真结果分别如图5-16 及图5-17 所示。其仿真结果与前文理论分析一致，在图5-16 中功率管关断瞬态仿真结果中，同样存在图5-15中提到的延时的问题，该问题出现的原理与图5-15 相同，不再累述。通过对H-Anti-punch-through 及L-Anti-punch-through 的仿真结果可见，防串通模块可以有效防止驱动级驱动管串通现象的产生，从而增强了电路可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPT8GGgxAkedPVt7q2DfiaSApPv3RvUSQq8Z16BAo88ib63G3vIicP82z7R5xDVgDGIaVHicGRLzib5XCshLyPvme7TiaD488eRYicYyU/640?wx_fmt=png&from=appmsg)

5.1.5 电平位移模块仿真验证  

图5-18 所示为L\_LS 的大周期瞬态仿真结果，图5-19 为翻转沿仿真结果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPccicSa5QgiaicltPsmVBA99hiaS1mhvjAZZA6gZ5cslNcQK9ibmGtulQhKOqq333bIBcIp1xEfa2jpFy7WthKATe9QAiatnlGTpe9M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN5kicBoapAYWHzX5glFsNOqjvDYVW5tjbnkehKylo6z4rbgVLhz8IFq2E5VJ0lR5UETWcPPgf0Lb4GkTMImibLOsRQRqUg8743o/640?wx_fmt=png&from=appmsg)

如图5-18 所示，该电平位移电路可实现电平位移功能，将输入信号从V5V 至GND 的电源轨位移至了RAIL\_L 至VEE 的电源轨。如图5-19 所示，从输入到输出的延时分别为3.6ns 和3.2ns，参考前文的传输延时仿真结果，该电平位移器的 延时满足应用需求。  

5.1.6 双脉冲测试仿真验证  

如前文所述，SiC MOSFET 由于母线电压可高达1200V，故在瞬态期间功率管漏端将经历高达100V/ns 以上的dv/dt，因此SiC MOSFET 驱动芯片需要具有足够的抗dv/dt 能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNnhE7sn4ic1T2SGCib1VibjhS2VUuKuAiaib8kPDoWSYfJj6UOCerVTgkDOcx8eD4EUJoPEzs034bponaPQJ1VMhOnFoicoYavBwwNE/640?wx_fmt=png&from=appmsg)

采用双脉冲测试方式的仿真外围图如图5-20 所示，在tt Corner@27°C，外部上拉栅极电阻1Ω，外部下拉栅极电阻3Ω 的条件下仿真得到的瞬态结果如图5-21及图5-22 所示，其中GATE 为功率管栅极电压，VDS 为功率管漏源电压。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO3CJDicLfxMTUutbWeNozFshURicfalOoxy1DajfdfjchEOgd3fS2ZVx5Ano2VO4q0Z1IlP4TysgYMXYEUcRavic5nJWucsnePbM/640?wx_fmt=png&from=appmsg)

图 5-22 功率管关断瞬态双脉冲仿真结果

由图5-21中双脉冲仿真下开启瞬态的仿真结果可见，按照10%至90%计算功 率管漏端的dv/dt，可见在开启瞬态中，功率管漏端的dv/dt 达到了173V/ns，在该dv/dt 作用下，功率管栅极GATE 下掉量为3.81V，最低下掉到15.12V，仍远高于功率管的阈值电压，可见在开启瞬态中驱动级模块具有具有较好的抗dv/dt 能力。  

由图5-22 中双脉冲仿真下关断瞬态的仿真结果可见，由于外部栅极下拉电阻 更大，关断瞬态时功率管漏端的dv/dt 为118V/ns，在该dv/dt 的作用下，从仿真结果可见，功率管栅极GATE 并没有出现明显的上抬现象，即在本文提出的驱动模块的驱动下，118V/ns 的dv/dt 并不会对功率管造成明显影响，本文提出的驱动模块的抗关断瞬态中的dv/dt 能力明显远高于118V/ns，考虑到图5-7 中所示的上拉驱动管与下拉驱动管的电流能力基本一致，有足够的把握认为抗关断瞬态中的dv/dt 能力也在170V/ns 左右。  

5.2 去饱和过流检测模块仿真与实验验证  

5.2.1 去饱和过流检测模块整体功能验证  

去饱和过流检测模块整体功能仿真外围图如图5-23 所示，以缓变电流IPWL 流经1Ω 电阻RON产生的电压VDS 模拟功率管发生过流时漏端电压逐渐升高的过程；芯片输出端外挂1nF 负载电容。仿真所选用的外挂二极管D 的正向导通压降为986mV。仿真条件为TT Corner@27°C。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQJgg4alwc88vAia9pEUE5uQ85b8sTl2ONg67obOFqEyyibtUEKqI7XZ9PAKZkhgsKxiaQhJDgDgX81SAIicx3XK4iavHT33iagpVNA/640?wx_fmt=png&from=appmsg)

去饱和过流检测模块整体功能仿真大周期结果如图5-24 所示，其中VDS为模 拟的功率管漏端电压，V\_DESAT 为DESAT PIN 脚电压，VINP\_CMP 为比较器正输入端电压，VREF 为比较器负输入端所接基准电压，VG\_MAP 为动态下拉电阻栅极电压，IN 为总输入逻辑的输出信号，GATE 为负载电容电压。由仿真结果可见，在VDS 上升至4.67V 之前，即V\_DESAT 上升至7.60V 之前，OCP\_FLAG 保持低电平，不输出过流信号；当VDS 上升至4.67V 时，由VDESAT\=VDS+VD+IDESATR理论计算有此时VDESAT\=7.656V，考虑到片内分压电阻由一定的分流作用，仿真结果所示的VDESAT\=7.60V 在可接受范围内，此时去饱和过流检测模块输出过流信号，OCP\_FLAG 翻高；芯片理论过流翻转点为VDESAT\=7.50V，考虑到模块延时，实际仿真结果所得7.60V 的翻转点在可接受范围内。在VDS 大于4.67V 之后，由于此时芯片判断功率管一直处于过流情况，故去饱和过流检测模块周期性输出过流信号。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMSf1rMiaicqx7trJUmE5Mx4jVkPuicTXctqTcCudoicDP4Lkg4jYPg6622QKHSa6ElnouvmiaWcQiaEqamfcYeoRasNyfT1JCZeAKX8/640?wx_fmt=png&from=appmsg)

去饱和过流检测模块整体功能单周期仿真结果如图5-25 所示，该仿真结果为 已发生过流时的时序图，如图所示，PWM 信号翻高时，功率管开启，同时过流检测模块开始进入LEB 时间，在LEB 时间内，VG\_MAP 保持为高电平，动态下拉电阻处于开启状态，故由仿真结果可见，该时段内DESAT PIN 脚保持低电平。LEB时间结束后，动态下拉电阻关断，DESAT PIN 脚电压快速抬升最后等于VDS+VD+IDESATR，在t3时刻，VDESAT 的分压值VINP\_CMP 超过比较器负输入端基准VREF，经过一段传输延时后，在t4 时刻比较器输出OCP\_FLAG 翻高，输出过流信号，随后输入到总输入逻辑模块，最终使得IN 翻低。IN 翻低使得动态下拉电阻开启，如t4 时刻所示，VG\_MAP 翻高，将VDESAT 再次拉低，经过一段传输延时后，在t5 时刻使得OCP\_FLAG 再次翻低，从而屏蔽过流功能，直到下一周期到来。从图中可见，当检测到过流时，芯片将忽略本周期PWM信号的高电平，直接关断功率管，直至下一周期到来。从t3 时刻达到过流点到t4 时刻输出过流信号，该段延时为34.0ns，满足前文低于150ns 的理论指标。故由仿真结果可见，该过流检测模块的实际功能与前文理论设计功能一致。  

此外，由图5-25 还可以看出，从t2 时刻LEB 结束到VDESAT 上升至VDS+VD+IDESATR 需要较长一段时间，该时间与片内分压电阻的阻值有关，阻值越大，VDESAT 上升时间越长，这将影响到芯片最高工作频率，但由于分压电阻的分流作用减小，过流模块的检测精度也将提高，故需要在检测精度与芯片最高工作频率之间进行折中考虑。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPh8yKAnn5RRpOYDA9vgZLndARAbSCVUQ2xFVSvibZRXYUlNUqDE2dWrHRbRLkXBJAdjbTeMMNXVQcbSAMagtgA6HfTVu4xqPqM/640?wx_fmt=png&from=appmsg)

5.2.2 LEB 模块仿真验证  

图5-26 所示为LEB 延时模块的瞬态仿真结果。如图所示，当PWM 信号翻高 时，电容C 开始在偏置电流IBTM 的作用下充电，使得CMP\_TM 正输入端电压逐渐升高，当升高到等于负输入端基准电压VREFTM 时，A 点电压VA翻低，最终使 得动态下拉电阻关断，故LEB 延时时长为从PWM 翻高到VA翻低的间隔，如图所示为519.2ns，实际仿真结果与理论设计中的500ns LEB 时间基本一致，考虑到LEB延时时长没有严格的要求，故该仿真结果在可接受范围内。当PWM 信号翻低时，MS 立刻开启，使得电容C 立刻放电，故VINP\_CMPTM 立刻翻低，比较器输出翻转，将VA拉低。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPzXdL69gbric5Efj0KcCPcYHeDAPM2OEWHibr7Cg9O94SYQ5mHduicft48WbviaZFektH7UDB1gQCtC5laWOuWehT7NwFNvprtNEU/640?wx_fmt=png&from=appmsg)

5.2.3 动态下拉电阻防串通驱动电路仿真验证  

动态下拉电阻防串通驱动电路的开关瞬态仿真结果分别如图5-27 与图5-28 所 示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPoruoKkjSBXmx7vv2t0BNWoiaRketlTNQzZq86St2rnfa6Mx2Qsl2B8PEbBoZbWEQTEEpBD3iaHVxxnU0B2r6KQegSib26fQ6xicU/640?wx_fmt=png&from=appmsg)

如图5-27 所示，当VA翻高时，DN 开始下降，VB 保持低电平，当DN 下降到一定程度后，VB 开始上升到高于MN5 的阈值电压后，UP 开始下降。当DN 下降到700mV 时，UP 仅下降到4.51V，此时MN2 已关断，而MP2尚未开启，随着UP 继续下降，MP2 开启。故从仿真结果可见，该防串通驱动在动态下拉电阻开启瞬态过程中可以起到防串通的作用。  

图5-28 所示为关断瞬态时的仿真结果，如图所示，当VA翻低时，VB保持高 电平直至UP 翻高，而后DN 开始逐渐升高，将动态下拉电阻关断，当DN 开始升高时，UP 已处于高电平，故在关断瞬态中，该驱动同样可以起到防串通的作用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPbfTVfXbNbJAjLtE176desGfhQryaAicsAbicay97Zwprlxdsb0dUyexHYKKVSE6R8zLTgxiaK0YZJEXI5bJpnKJrrwREVLEydec/640?wx_fmt=png&from=appmsg)

5.3 欠压保护模块仿真与实验验证  

欠压保护模块仿真外围图如图5-29所示，其中该仿真包括慢上电与快上电两个部分，快上电情况的VDD 上电时长为30μs，慢上电情况的VDD 上电时长为2ms； 本模块的仿真条件为TT Corner@27°C，R1\=5R2，片外设置欠压解锁点为17V。为加快仿真过程，慢上电时CUV容值为1nF，慢上电时CUV容值为5nF。  

图5-30 所示仿真结果为芯片快上电的瞬态图。如图所示，由于芯片为快上电， 故在VDD 上升至解锁点17V 后，UVSET 仍未上升至预设稳态值，因此对于CMPM而言，芯片一直处于欠压解锁状态，VDD\_UVLO 信号是否翻转取决于VUVSET 何 时高于 VREFH。如图所示，VDD\_DIDVDE6 为VDD 分压信号（即 CMPM的负输 入端），VDD\_DIVIDE6 始终高于UVSET 电压值，故 VO\_CMPM 始终保持低电平； 在t1 时刻之前，PWM 信号输入到芯片内部，但由于t1 时刻前芯片处于欠压锁定状 态，故功率管栅极GATE 保持为\-8V，功率管处于关断状态；在t1 时刻，UVSET的电压值大于VREFH，UVSET 电压检测模块的输出VO\_UVSET\_DETECT 翻高， 使得VDD\_UVLO 信号翻高，输出欠压解锁信号，在总输入逻辑模块经过一段时间延时tdelay 后，功率管开始开关动作。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOOzdJp1XBoBpbTSNajeFvibrWQctCpZZ3hyk3GsKibM8g9BN3mZxjSmWChgiauu0aRp4I6vNX8HvP8CjhAjLuH3l8C9uT0xbMldU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOXDfSLLAFrJL2pXq2IUuE5ZyTZYl20Ts0Yf4ZrvLNV8bDFMk9KQKjI66q32iakZaoQibuA8tZKIg9W0mawBzicJazAsCWv3yMaSk/640?wx_fmt=png&from=appmsg)

慢上电的仿真结果如图5-31 所示，t1 时刻之前，由于VDD 低压较低，芯片内部部分模块未建立完全，导致CMPM 判断认为VDD 处于欠压解锁状态，误输出解锁信号，但由于t1 前UVSET 电压低压VREFH，故总UVSET 电压检测部分会锁定总输出信号VDD\_UVLO,因此不会令芯片误解锁；t1 时刻之后，UVSET 上升至超过VDD\_DIVIDE6，并快速达到稳态值，CMPM 不再产生误判断信号；t2 时刻，UVSET 电压上升到超过VREFH，UVSET 电压判断部分输出解锁；t3 时刻，UVSET电压上升至稳态值；t3至t4 时刻，VDD 缓慢上电，由于CMPM 判断VDD 处于欠压状态，故该时段内锁死芯片；t4 时刻，VDD 上升至17V，使得CMPM 输出翻转， 经过总输入逻辑部分的延时时间tdelay后，功率管开始开关，且由仿真结果可见，在VDD达到17V时，VDD\_DIVIDE6由于迟滞电流的加入，该电压值出现台阶， 从而在欠压锁定点上添加迟滞量，与理论设计一致，根据理论设计值，该迟滞量 最终带来的欠压窗口的迟滞量为1V。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMovPRAicZD6DPQf7W5xTPTYEibpias6uGticV2hZ3ffnTcyGriaG5oqAqxWy7ZXYOP4jFWKxk8AwTrpsK5rXTR2MfDaHFYadX2SGH8/640?wx_fmt=png&from=appmsg)

芯片慢上电及掉电的全过程仿真如图5-32 所示，由图可见，t1 时刻芯片欠压 解锁，解锁点为17.072V，功率管开始开关动作，t2 时刻VDD下降到欠压点，欠压点为16.109V，芯片欠压锁定，功率管停止动作，可见迟滞窗口达到了理论设计的1V。掉电过程中的详细仿真结果如图5-33所示，由仿真结果可见，当VDD下降到16.109V时，触发欠压锁定，在输出欠压信号的同时，VDD\_DIVIDE6由于迟滞电流的取消而出现了一个向下的台阶，从而引入了迟滞量，与理论设计一致， 实际仿真得到的迟滞窗口为0.96V，与理论设计的1V 存在一定的偏差，在可接受范围内。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPHOQ9DiakYGT26QOF0gx7JF1hInhOtMjaD0HTCexQlX3SlJ5xpuKXpvMw74icrpx7uicvqFBG9eyRQmVGkHxeZwLgczlX4gibvicqE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMMFDXzu3bQ99NavIWmk3A3meQYeCiaHHJ8QkbA5uHotRZkMKbAZznB6EozLSetn3yFObAqA2FMian352ticYEw2O8icMia0LLyuiclI/640?wx_fmt=png&from=appmsg)

5.4 过温保护电路仿真与实验验证  

过温保护电路的仿真结果如图5-34 所示，仿真条件为tt Corner，温度扫描范 围为\-55°C 至180°C。图中所示为横轴放大后的仿真图，以便于体现相关数据。如图所示，过温点为151.6°C，当温度下降到124.9°C 时解除过温状态，迟滞窗口为26.5°C，相较于理论设计的过温点及迟滞量存在微小偏差，在可接受范围内。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNHaSerBiaTj4viaLoawthhwU13B9fmQNp9srMXgMnWYhPNicxdN9EApqWEd632MMwkuCGcLRQjXLJDIJvbqMO8swKnID50XGw2L0/640?wx_fmt=png&from=appmsg)

钳位运放CLAMP\_OTP 稳定性仿真结果如图5-35 所示，显示了\-55°C，27°C以及170°C 下的稳定性，具体参数如表5-1 所示。如图所示，170°C 下运放的低频增益在78.8dB，相位裕度在79.0°，带宽为180°C 下，为619.3kHz。可见该运放在全温度范围内具有足够的稳定性，满足过温检测模块的需求。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNWmnauMy0Dib4ul3q7XvtJ9NIh210TIXdvvv7sKUyk6p69N6ZMia7XEM4bj8JHzPlslCxYWvvicp9yx7PKYOTWicfXgwqGSHv1I7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNwZQ18LaBPKcSzmsEibQIpyGtTiaTW6dxjtadgAc1Vbp1eicjiaXqtn61xIaUAP3oMxfSicJicu0xgvzXqXnYjgACbPdPibPNNGn1iclE/640?wx_fmt=png&from=appmsg)

5.5 本章小节  

本章给出了各功能模块详细整仿验证结果，各功能参数如表5-2 所示，通过该 参数表可见，本文提出的各模块功能参数符合理论设计指标，满足对于SiC  MOSFET 驱动的要求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPFDHDygpZUKFyiaHj6XIiaIuyibE8g8orZqOXr1gWR9nfUnFDfPHoAElIvCFJzKed95SqGNkIArqcA8Zdcj6Lkyn6iciaoIiaiaib1oibQ/640?wx_fmt=png&from=appmsg)

第六章芯片版图设计  

本芯片版图如图6-1 所示，芯片版图整体面积为3253μm\*3296μm，具体包括的模块如图6-2 所示，除了本文给出的模块外，还包括芯片供电及偏置模块、输入逻辑模块、电荷泵模块以及trimming 模块。本芯片目前处于投片准备阶段，等待投片流片测试。作为工程性应用芯片，本芯片具备完整的修调功能，修调具体涉及供电偏置模块、驱动DRV 模块、过温保护模块以及电荷泵模块，保证芯片流片各性能指标可被调整回预设值，以应对Corner 变化。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpME4EemGZnrEYpDMu1iaiaKroSA57SXCrfSsgtO5nMgibSZiaTeSehuA1XrhT4T9Q9heTOEic08k5ls3NVl9TZE9yUkIKf233hibCkIc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOFaAEmFNVOcqGHPZyXUTb1FcBWYTx1hsKVe0CXbFlzTVAGQ8Iy3lVjsicr0KAhN4zhChmNyaicwCOJmkU0Oh0JjGLQE7rfW6vUE/640?wx_fmt=png&from=appmsg)

第七章总结与展望  

本文基于SiC MOSFET 的器件特性及其优势，针对实际应用中对器件高可靠性的要求，设计了一款SiC MOSFET专用驱动芯片，分别介绍了本文提出的具有 大驱动能力及密勒钳位功能的驱动级模块、去饱和过流检测模块、欠压保护模块以及过温保护模块，给出了各模块的总体结构以及详细电路结构，最后给出了各模块功能的仿真验证结果及芯片版图，表明本文提出的电路符合理论设计及高可靠性的需求。  

通过对各相关模块电路文献的查阅及总结，可见目前SiC MOSFET 驱动芯片的设计主要还是集中在过流保护设计上，而相关文献的设计重点考虑了如何设计 新的过流保护电路，需要注意的是，怎样使得过流保护电路的过流点片外可调以提高过流保护电路对于不同型号SiC MOSFET 的适用性，也是同样重要的。  

此外，在板级SiC MOSFET 驱动电路设计上，谐振驱动以可回收能量可达到更高的驱动效率而被着重研究。虽然目前片上电感工艺技术还不够成熟（针对国 内工艺水平），但谐振驱动的设计思路却是非常值得学习和思考的。  

考虑到SiC MOSFET 主要应用在1200V 左右的高压场合下，结合其高速的特性，瞬态期间的功率管漏端dv/dt 可达100V/ns 以上，本文主要是通过驱动管的大 电流能力以及密勒钳位支路来应对瞬态的dv/dt，但这种方法的缺点在于驱动管的尺寸会非常大，从而增大版图面积，后续如若从事相关方面工作，将会在此方面进行优化，在提高芯片抗dv/dt 能力的同时，对版图面积进行优化。  

本文提出的驱动级电路在XEN 功能上还有待改进，以片内延时拟合功率管开 关瞬态时间存在一定的误差，当更改片外栅极电阻时，可能会出现延时与实际开 关瞬态时间不匹配的问题，可考虑的改进方式是通过本周期对功率管的开关瞬态 时间计时，在下一周期动态调节延时单元时长，从而实现XEN 真正的实时反映功 率管的开关状态。  

关于过温检测功能，考虑到三极管BE 结电压会随工艺漂移，本文额外添加了修调电路。这种方法虽然可以通过修调来弥补缺点，但修调电路的添加一定程度上增加了流片后的工作量，这里提出一种可行的改进方法：考虑到当工艺发生漂移时，带隙基准电路中的ΔVBE 是保持不变的，等于VTlnn，其中n 为带隙核心中两三极管的发射极尺寸只比，故可用带隙基准电路中ΔVBE 所产生的PTAT电流流过电阻R（该电阻需与带隙核心中的电阻类型一致，且尽量做到匹配），进而产生一个与工艺漂移无关的PTAT 电压，通过将该电压与零温电压进行比较，即可实现过温检测功能。  

本文的工作主要集中在单片驱动上，如果将应用延伸到例如高压BUCK 的半 桥应用中，则需考虑如何设计出充分利用SiC MOSFET 器件优势的死区时间控制 电路以及谷值检测电路，这也是SiC MOSFET 驱动需要考虑的一点。  

本人在SiC MOSFET 驱动技术研究方面尚不够深入，限于在校生涯时间限制， 许多设计要点还没有完全参透掌握，芯片的流片及测试也尚未完成，本文难免出 现错误及纰漏，希望各位老师及读者发现问题时给予指正。望本文能够抛砖引玉，为后续SiC MOSFET驱动技术研究人员提供些许帮助。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVh6bKUxPaOgeibFb9jqZNHI3BrQXmuQebmuOcrXItceuSicmMoebicHUAVw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhZu3AaXzoAmk8gqSQX4iamvd0yPgP32nltaSgLBEahtzSdm8j1r2zRAQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhDicxyCahRltEGUtckd1cFeWOrZJX5GWtic80jZd2svxnVGXicPungbuQA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhXjo47D5Bg9oB5hfRqavLpfictjkKzOnicrJ2jR3QX2wFndqR0VEgkaicQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)