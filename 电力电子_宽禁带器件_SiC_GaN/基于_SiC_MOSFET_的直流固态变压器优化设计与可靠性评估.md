# 基于 SiC MOSFET 的直流固态变压器优化设计与可靠性评估


> 原文地址: [https://mp.weixin.qq.com/s/P-itWLsLRR\_9B5T0vsfqzQ](https://mp.weixin.qq.com/s/P-itWLsLRR_9B5T0vsfqzQ)

作者：马青（重庆大学硕士学位论文）

  

摘要：随着智能电网的快速发展，直流分布式电源和负荷的容量急剧增长，直流配电网的应用和示范，成为未来电网的一大关键技术特征。其中，直流固态变压器（DC Solid State Transformer，DC-SST），是直流配电网中的核心设备，主要用于电能的变换和传输，减少换流环节损耗，控制电能的双向流动，以及实现电气隔离。高效、高功率密度和高可靠，是DC-SST的发展趋势。宽禁带SiC功率器件凭借其优良的电热特性，能有效提升DC-SST的各项性能指标。本文以典型的双向双有源桥（Dual Active Bridge，DAB）拓扑为研究对象，围绕DC-SST的优化设计和运行可靠性评估展开研究，对比传统Si IGBT器件，基于理论分析、仿真结果和样机实验，验证了SiC MOSFET在DAB中的应用优势。本文主要内容如下：

  

①建立了DC-SST 的小信号模型，基于DAB 拓扑及其单移相调制方式，设 计了电压闭环控制器，并利用仿真结果和样机实验结果，验证了控制算法准确性和有效性。通过DAB 工作状态分析，建立了其传递函数模型，并设计闭环补偿器， 对比了补偿前后的系统频响特性。参考实际直流配电网的干扰源，利用仿真结果，评估了电压闭环控制器应对变换器输入端电压含低频扰动，及输出端负载大幅度阶跃等系统抗干扰的能力。基于本文搭建的DC-SST 样机平台，使用实验结果，验证了DC-SST 的抗干扰能力，及其电压闭环控制策略的有效性。

  

② 针对DC-SST 高效、高功率密度的需求，提出了DC-SST 的优化设计方法， 研究了高频变压器寄生参数的分布规律和控制方法，给出了辅助电感的优化整定方案，对比评估了SiC MOSFET 和Si IGBT 器件的静态和动态特性。基于Ap 法，给出了变压器本体磁芯材料及尺寸的选型设计，基于ANSYS 有限元分析，揭示了绕组漏磁场的分布规律，并给出了漏感最低的交错式绕组结构。此外，提出了DC-SST辅助电感的设计模型，以传输功率下限、器件电流应力上限、电流有效值上限作为边界条件规定有效工作区，从而确定不同DC-SST 工作频率下的辅助电感取值范围，并为样机工作点的选取提供依据。对比研究了功率器件的电学特性， 针对相同功率等级的SiC MOSFET 和Si IGBT，评测了不同结温下器件的阈值电压、输出特性和导通电阻等静态特性，以及不同驱动电阻下器件的开关速度、开关损耗等动态特性。搭建含直流电源和电子负载的测试平台基于DAB 电路拓扑，研制了3kW SiC 直流固态变压器样机，功率密度3kW/L最高工作效率达97%（50kHz 时），最高工作频率达200kHz。

  

③针对DC-SST 的应用可靠性，考虑器件的多源热耦合效应，基于功率器件的寿命模型，结合器件级的多物理场有限元分析，以及电路级的电热联合仿真，提出了DC-SST 的可靠性评估模型。建立SiC MOSFET 和Si IGBT 器件的电\-热力多物理场耦合模型，基于Anand 结构模型建立焊层疲劳指标，使用Morrow 物理模型确定器件寿命，基于Coffin-Manson 模型揭示结温波动与器件寿命的规律。 通过加速寿命试验结果，验证了上述寿命模型的准确性。考虑到SiC DC-SST 具有较高的功率密度，变换器中的功率器件之间，具有强烈的热耦合效应。为准确评估DC-SST 的可靠性，针对本文中的样机，基于有限元分析，建立了变换器系统的热耦合模型，有效提取出耦合热网络参数。针对典型日负荷曲线，计及多热源耦合效应，通过电热联合仿真，建立器件结温波动规律，基于雨流计数和器件寿命模型，计算得到DC-SST 中的SiC MOSFET 器件寿命为Si IGBT 器件的4.47 倍。因此，SiC 器件应用于DC-SST，在配电网低负荷波动的工况下，可明显提升系统可靠性。

  

关键词：SiC MOSFET，直流固态变压器，双向双主动全桥，优化设计，可靠性

  

1. 绪论

1.1 课题的研究背景和意义

随着社会的发展，面对高速增长的电能资源需求，地球上有限的能源已经满足不了可持续发展的要求，同时为了减轻环境污染方面的压力，以分布式电源为代表的新能源电源应运而生。分布式电源具有清洁、能源利用率高和可再生等满足可持续性的优点，同时相比传统能源发电，分布式电源初期投资更少，具有更强的灵活性，可使配电网具有双向流动控制功能（供电和发电），且具有较高的供电可靠性，随着电网的智能化发展，对分布式电源及储能的研究也在如火如荼地进行着。而分布式电源有着难以预测、对环境波动较敏感等特点，其电网接入系统对传统电网的稳定控制具有极大的挑战，该接入系统要求实现对功率转换的灵活控制，因而又称功率（或能量）转换系统（Power Conversion System，PCS）。在柔性直流配电网、微电网中，通过 PCS，各种高低压配电母线间才得以实现能量传递。未来，PCS 将代替传统配电网由变压器和开关组成的运行方式，成为智能电网中的核心部分，将交直流输配电网、新能源发电、用户侧（负荷）和储能等系统围绕 PCS 建立一个能量变换网络，同时实现 AC/DC 间的电压变换、功率潮流管理和控制、电压等级变换等功能。

  

作为先进电力电子技术的代表之一，功率转换技术采用大功率电力电子器件进行电网设备的设计，在电网运行过程中获得了超过预期的效果。而作为配电网中最重要的设备，代替传统变压器采取大功率电力电子技术进行研制的固态变压器（Solid State Transformer，SST）也应运而生，其不仅具有电压等级转换、传递功率以及电气隔离等传统功能，还具有分配和控制潮流、限制故障电流、恢复瞬时电压降和无功补偿等新功能，是一种将固态技术融合到变压器中、将高频变压器与电力电子器件相结合的新型变压器技术，具有重量轻、体积小、方便集成等优点。

  

用于 DC-SST 的功率器件的材料选取，也是影响其性能的重要因素。而碳化硅（SiC）材料因其优秀的物理特性，如较高的热稳定性、高频高压高效、导通电阻小、击穿电场高等，其在功率器件中的研究已成为如今一大热门。因此，须对采用 SiC 功率器件与采用 Si 功率器件的固态变压器进行分析和对比，以完成对基于 SiC 的直流固态变压器的优化设计和可靠性评估。

1.2 国内外相关研究现状

  

1.2.1 SiC 功率器件研究现状

  

①SiC 功率器件商业化进程 

  

SiC 功率器件作为新型半导体器件研究中最为活跃的领域，因其具有与Si 等其他材料相比更宽的禁带宽度、更低的损耗、更好的电热特性、更高的击穿场强 等特性，可增强电力电子变换器的性能，吸引了众多生产商的眼球。

  

当前，商业化的SiC 功率器件有SiC 肖特基二极管、SiC 结型场效应晶体管和SiC MOSFET。文献\[6\]通过对应用在三相功率因数校正变换器中的SiC 二极管的暂稳特性的分析，证明了其比Si 二极管具有更优秀的反向恢复特性，从而提高了变换器的效率。作为当前研究最成熟的SiC 功率器件，SiC JFET 具有比Si IGBT 和Si MOSFET更低的损耗和更高的开关速度，但因其为常通型，需与负压关断器件配合使用且易短路。而MOSFET 作为大规模集成电路中使用频率最高的功率器件，因而在SiC 领域中的研究具有重要意义，其中Cree、Rohm、Infineon 等公司为其研发代表，Cree 公司的CPM3-0900-0010A 900V/196A 芯片，为目前商用最大容量的SiC MOSFET 芯片。  

  

② SiC 功率器件可靠性研究

  

虽然SiC 器件具有低损耗，高阻断电压以及可限制短路电流和击穿场强高等优点，但因不成熟的制造工艺，会产生一定程度的可靠性问题，如较大的泄漏电 流、高温长时间耐受性差等。

  

为解决该问题，诸多学者对SiC 器件可靠性方向展开了研究，如针对栅极氧化层的可靠性，将其在一氧化氮中退火以减少氧化层陷阱并保证高温时有效的载流子势垒高度。逐步控制下得到的外延层生长和新沟道结构可削弱材料缺陷的影响，从而提升器件性能。

  

然而，限制SiC 功率器件使用领域的主要问题之一是器件封装系统的性能。 由于具有不同热膨胀系数的材料在封装时直接接触，当工况变化导致温度变化时，SiC器件的封装结构将承受热机械应力。该应力将导致封装系统可靠性较弱的元件加速老化，最终导致器件失效。关注封装可靠性是因为SiC 与Si 相比具有不同的热机械性能。虽然SiC 的热膨胀系数更接近于铜或铝，但SiC 更高的热导率和杨氏模量会在功率循环期间在芯片附着的焊料层上产生更高的应力。在一些可靠性要求一般的应用中，SiC 器件可以在更高的温度下使用，同时承受更多的功率循环。尽管具有上述优良的电性能，SiC 功率器件有限的可靠性阻碍了它们在诸如多电飞机和直流电网等对系统可靠性要求非常高的领域中的应用。标准功率循环测试常用于评估温度循环下封装系统的性能。通常功率器件的最薄弱部分是芯片附着的焊料层。老化的管芯附着焊料层将增加热阻抗和结温，这将导致其他故障机制，如键合线脱落。焊接疲劳是由功率循环过程中的塑性应变和蠕变引起的。当SiC 器件在高温下工作时，显著的热应力可导致明显的焊料层疲劳。来自不同样品的实验结果表明，SiC 芯片焊料层中的剪切应力高于Si 器件，并且应变能密度倾向于集中在芯片边缘，在相同尺寸和温度条件下，SiC 和Si 器件之间的应变能密度差异为1.5 倍。在功率循环之后，在相同的结温波动条件下，在Si IGBT 和SiC 二极管的边缘观察到裂纹和空隙，认为SiC 芯片焊料层的寿命是具有相同封装和额定电流的Si 器件的三分之一。  

  

针对上述可靠性问题，文献\[19\]建议双侧风冷和直接液体冷却，以增强散热并 减少热应力。新的焊料材料，如SnAg3Cu0.5，AuGe12，ZnAl5Ge0.1 和纳米银烧结， 也可以提供比通常的SnPb5 更高的可靠性。然而，有必要进一步研究SiC 本身的材料性能对热机械应力的影响。现有的研究仅考虑了在某些特定负载条件下的静态应力，但是忽略了在实际应用工况条件下，如应用于固态变压器的SiC 器件的寿命特性。

  

③ SiC 功率器件应用优势

  

目前，SiC 功率器件的应用领域囊括了新能源汽车、智能电网、分布式发电以 及轨道交通等各行业，与Si 材料器件相比工作频率更高，如图1.1 所示，红线为Si 功率器件的适用限制范围，在高频段中，其功率等级相当有限，相比之下SiC功率器件的应用范围就宽得多，且与氮化镓（Gallium Nitride, GaN）功率器件相比可承受的工作电压更高，因而SiC 功率器件在高频高压场合其优点更为突出。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHLBuwLJoQnNeZibF7LAEjheHOKLhu9xp13B4kIlcFKqrmdOlKyciavHzw/640?wx_fmt=png&from=appmsg)

  

在光伏发电领域，采用Si 功率器件的逆变器约占总成本的10%，但有超过80%的损耗。而改用SiC 材料的逆变器具有比Si 器件高10 倍的开关频率，可减少一半的能量转换损耗，效率也提升至99%，同时又能缩小光伏逆变器的体积，提高了光伏电站的可靠性以及光伏并网的整体效率。

  

在智能电网领域。由于早期大功率变换技术不够完善，以及大功率器件研发的不成熟，未能出现实用的SST。而随着SiC 功率器件研究方面的突破，使得SST的实用化成为了可能。由美国NSF 投资建立的FREEDM 中心（The Future  Renewable Electric Energy Delivery and Management，FREEDM）研制的第一代SST硅基 6.5 kV IGBT，单相串联3 个H 桥，具有较复杂的拓扑结构能够承受7.2 kV电压；第二代 SST 采用SiC MOSFET 效率可达97%，开关频率提升了20 倍，体积缩小为第一代的五分之一，同时大幅提升了可靠性。将直流断路器与电力电子器件相结合，不仅拥有高速的开关特性和更为方便的控制特性，同时还具有低损耗、实时和高可靠性的优点，受到了广泛的重视。FREEDM 中心在直流断路器中采用了15kV 的ETO 器件，在9kV/50A 工作环境下，证明了其可靠性，与硅基器件相比具有更大的潜力，未来，在柔性直流输电中，SiC 直流断路器的发展前景十分广阔。 

  

SiC 电力电子器件凭借其优异的性能使其在商业、工业界有着巨大的发展潜力，近年来对它的研究也正在不断深入。在当前世界范围内的节能减排趋势之下， 随着不断涌现的千伏级以上的SiC 大功率器件的问世，SiC 器件将在高压电力系统 中打开新的篇章，成为电力系统发展和变革的又一里程碑。

  

1.2.2 直流固态变压器研究现状

  

近年来，对分布式电源的研究逐步深入，而分布式发电系统如何安全可靠灵活地融入电网是一个全新的挑战，于是智能电网应运而生，而SST 是整个系统最 重要的部分，其实质是能量路由器，除了基础的传输电能和电压变换等功能外， 还有高频、含有交直流接口、改善电能质量、维持电压稳定以及全数字化控制等优点。 

  

①固态变压器的发展

  

1970 年，SST 的概念由美国通用电气公司的 W.Mc Murray 首次提出，是一种基于高频变换原理的两边都为半桥型的变压器拓扑，当时称为高频链功率变换器，是 SST 的雏形Brooks J L 于 1980 年将 BUCK 结构用于 SST，该结构能够有效降低输入电压，不过没有在电源和负载两侧进行电磁隔离，且耐压能力不足，故没有得到推广。Koosuke  Harada 采用开关管反向串联的办法实现具有双向开关功能的“智能变压器”，通过相位控制能够满足恒定功率和恒定电压控制。但其实验所用样机效率不高，仅为 80%。

  

早期的 SST 研究因当时电力电子器件的发展水平限制，无法满足实用性。而如今，随着电力电子器件的发展，SST 的发展也进入了新阶段，快速地发展了起来。J.W.  Kimball 等对双全桥 SST 的系统稳态运行进行分析，从模型上对 SST 代替传统变压器进行了可行性分析，同时还提出了移相控制策略。Ronan 等于 1999年提出了三级式的新型 SST 拓扑结构，由输入、隔离和输出级构成，具有减少谐波含量、不容易发生电力电子器件串联、方便分布式电源入网、采取相应的措施可控制功率因数为 1 等优点。有文献提出了一种单相 SST，所有变换器器件都使用全控器件，可以实现功率的双向流动。

  

**②直流固态变压器核心拓扑**

SST 的一般电路拓扑为三级功率电路级联结构，即由整流模块（AC-DC）、高频换压模块（DC-DC）以及逆变模块（DC-AC）三部分构成，而 SST 的关键就在于使 DC-DC 变换器的工作频率的提高，从而达到相比传统变压器具有更小的尺寸、更轻的重量等目的，DC-DC 变换器具有输送功率、变换电压等级、电气隔离等功能，是 SST 的核心拓扑。

  

在高频隔离的功率转换系统中，一般采用隔离双向 DC-DC 变换器为其核心拓扑。本文基于开关管数量提出 IBDC（Isolated Bidirectional DC-DC Converter）拓扑结构的一种分类方法，如表 1.1 所示。最简单的拓扑是双管结构，如：双反激式；三管结构如：正反激式；四管结构如：双推挽式、推挽正激式、推挽反激式和双半桥式；五管结构如：全桥正激式；六管结构：半桥全桥式；八管结构指 DAB。

![图片](https://mmbiz.qpic.cn/mmbiz_png/PRKzZoBY4VFcjGFEQgNVvEh0BYssCJucKbyhCOW5GWGLwT9wYXVNqFoKL4IuGQicAOMKhxH9xudMmW3eMkRXR9A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1)

虽然 IBDC 的电路拓扑众多，但概括起来就是对于开关管具有一定等级的电压和电流的 IBDC，开关管的数目成正比地影响着其能量传输能力，例如四管 IBDC的能量传输能力是八管 IBDC 的二分之一，而双管 IBDC 又为四管的二分之一，综上所述，DAB 的能量传输能力最好。除了优秀的功率传输能力外，DAB 不仅拥有双向功率传输能力，且动态响应快，同时拥有对称的模块化结构，其软开关也容易实现，在中大型功率场合具有很强的适应性。随着功率转换系统迅速发展，DAB在最近几年吸引了越来越多研究者的关注。如图 1.2 为DAB 拓扑结构，包含 2 个全桥变换器 H1、H2和直流电容 C1、C2，1 个辅助电感 Ls以及高频隔离变压器 T等。其中 Ls用以存储瞬时能量，变压器 T 负责实现电气隔离，同时完成电压匹配。

![图片](https://mmbiz.qpic.cn/mmbiz_png/PRKzZoBY4VFcjGFEQgNVvEh0BYssCJucuwDIXpYU6BC3lB7mOQlVoMG6RMJLK4fU1iaKrNF7b3dnV95Dsv51tMw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

德国亚琛工业大学的 Rik W. De Doncker 教授等人于1991年首次提出了DAB的概念，但由于当时的磁性材料限制以及功率器件发展水平的不足，DAB 高频特性的表现较差，其电路效率低、损耗大，不能满足实际应用，因而其发展相对较滞后，类似文献的讨论也不多。近年来，伴随新型大功率器件的问世、磁性材料的突破（尤其是 SiC 器件的突破），DAB 再次引起了众研究者的关注。目前，除了基本特性的研究，DAB 的电路拓扑分析、控制方法以及软开关等方面，为国内外相关研究的主要集中点，例如：有文献研究了 DAB 的基本特性，包括死区效应、动态模型等；文献以优化软开关特性和降低元件损耗等为目标，采用各种DAB 软开关方案和改进拓扑结构并进行分析对比；文献将混合移相控制算法用于 DAB，来增进变换器特性、传输效率等；文献对 DAB-IBDC 在稳态状况下的基本工作原理、设计和控制方法进行了系统介绍；文献提出了一种采用自然开关曲面的边界控制方案；文献对暂态状况下的基本特性进行了讨论并提出了改进变换器鲁棒性的方法。Hirofumi A.和 Shigenori I.于 2007 年提出在新一代的高频隔离 PCS 中，核心电路为 DAB 的观点，为众多研究者所接受。

  

伴随 SiC 功率器件领域的深入发展，DAB-IBDC 拓扑结构的变换效率可进一步提升，其发展会让高频隔离功率变换系统具有实际运用的价值。

  

**③直流固态变压器应用领域**

随着技术水平的提升，应用直流 SST 的领域也越加宽泛，包括新能源发电系统、电动汽车电源系统、不间断电源系统、储能系统等。目前双向 DC-DC 变换器的主要研究方向就是对可控、高效的直流固态变压器的研制。

  

风力发电系统。尤其是海上风电场，电能的聚集需要由交流电网来承担，采用工频变压器入网，但因工频变压器的体积巨大且需要配合无功补偿装置一起使用，需要用大量的资金建立一个海上平台，不够经济，且海底交流电缆的损耗较大。而高压直流输电技术作为一种解决方案，无需无功补偿，且效率较高，但仍需工频变压器，避免不了海上平台的经济性问题。为了解决风电场高压直流输电并网的以上问题，根据最新的直流变换概念，配合直流风机，建立直流型风电场，高功率密度的变换器代替了体积巨大的工频变压器，减少了投资费用，且采用的直流电缆损耗更低、费用更少。

  

电动汽车电源系统。目前双向 DC-DC 变换器已经广泛应用到电动汽车电源系统。有研究论文中的系统配备了超级电容复合电源，选取拓扑结构为双向交错并联的 DC-DC 变换器，满足了该电动汽车的工况需求，同时为了改进变换器的动态性能采取了多种控制策略。快充技术作为电动汽车的核心之一同样依赖于大功率的DC-DC 变流器。也有文献提出一种电网友好的由交、直流接口两模块构成的电动汽车快速充电模块，电网电压通过交流接口整流为 600V（DC）电压，该交流接口的电路拓扑为三相 H 桥结构，随后由直流接口变换成 48V（DC）电压给负荷供电，该变换过程由大功率 DC-DC 变流器完成，使用的是隔离型 DC-DC 变换器，对电动汽车的快充技术满足了恒定功率的要求。

  

不间断电源系统。有文献阐述了双向 DC-DC 变换器应用于其中的情况，采用双向 DC-DC 变换器将蓄电池接至直流母线上，一般情况下直流母线通过 AC-DC变换器可维持在恒压状态，以双向 DC-DC 变换器为桥梁，蓄电池的能量由从母线吸收而来。对于外部交流电源发生故障的情况，通过操作控制，可使得双向 DC/DC变换器工作状态发生改变，为反向状态，通过蓄电池的放电从而在短时间内保证恒定的母线电压，保持供电不间断，该不间断电源系统具有高效、简单等特点。

  

储能系统。有研究论文中的超导储能系统采用了双向 DC-DC 变换器，不仅具有电网调峰的作用，还能够保证电网质量，维持供电的稳定，还可增加有源滤波功能。目前常用的储能系统种类众多，除了最基本的蓄电池储能系统外，最具代表性的还有超导储能系统，以及超级电容系统等。另外，在风机混合储能方面，超级电容器通过配合蓄电池以及 DC-DC 变换器，经过合理的串并联设计，最终能够构成可靠的混合储能系统。

  

随着智能电网建设的深入，直流 SST 以及应用于其中的 DC-DC 变换器的发展潜力不容忽视，其未来的发展必将造福于整个电力行业。

  

1.2.3 直流固态变压器存在的问题

**①功率传输效率和功率密度**

由于高频变压器的传输功率受到绕组寄生参数的约束，所以其变压器本体结构布局设计应该引起足够的重视。在高频变压器设计过程中，其铁损和铜损是必须关注的两大问题，都与频率有着密切的关系，须满足损耗最小化的要求。其中，铁损取决于磁芯材料的性能，因此磁芯材料的选取和设计是首要的。选择合理的绕组结构来降低高频绕组的损耗，从而提高整机效率，是优化高频变压器效率的一个着手点。考虑绕组的相对位置，现有的绕组结构可分为层叠式（无交叉式）、三明治式、交错式，其原副边绕组的交叉程度不断加深。对比和选择合理的绕组结构不仅对变压器本体输出波形特性有影响，也决定了变压器本体功率传输效率。

  

**②设备可靠性**

相比传统工频变压器，由于电力电子功率器件的引入，固态变压器是否具有足够的可靠运行寿命将影响其商业化推广和应用。配电网工频变压器的寿命期限主要受绝缘材料老化影响，根据KEMA(Keuring  Van  Elektrotechnische  Materialen) 认证标准其寿命一般可达 40-80 年，均值在 55 年，并有大量针对配电网工频变压器的寿命模型研究。相比之下对于配电网中固态变压器的寿命预估研究较少。而调查研究发现：变流系统故障占整个能源发电系统故障的 13%左右，而功率半导体器件失效占整个变流系统故障的 21%。本文的DC-SST 作为能量路由器应用于直流配电系统，因此固态变压器中的功率半导体器件进行可靠性分析和寿命预测，可有效提高直流配电系统可靠性。功率 IGBT 和 MOSFET 作为功率变流系统的主要部件，在投入运行时受负载、机械振动、环境条件、加载在电力电子系统上的应力等因素影响，而温度波动占器件失效原因的 55%，因此从温度角度来研究功率半导体器件的失效机理是分析固态变压器运行可靠性的关键。

  

1.3 本文主要工作

  

本文围绕DAB 拓扑的DC-SST，搭建准确的小信号模型，实现稳定的电压闭环控制，完成变压器样机优化设计，并以器件寿命预估为基础，评估了配网日负 荷工况下样机运行可靠性。本文的主要工作如下：

  

第一章，阐述了宽禁带器件SiC MOSFET 的商业化进程、应用领域及可靠性研究现状，说明了功率器件最薄弱环节为器件芯片焊接层；梳理固态变压器发展 现状及拓扑结构，对宽禁带SiC 器件在固态变压器中的应用优势进行了阐述，为本文的研究工作奠定基础。

  

第二章，针对DAB 拓扑DC-SST 建模，并设计补偿器实现稳定的闭环控制，在副边负载功率阶跃扰动，及原边电压含低频扰动时，仿真均可稳定副边直流输 出电压水平，并利用样机平台验证仿真工况下的系统稳定性。

  

第三章，通过设计磁性元件、使用宽禁带功率器件，并基于辅助电感选择样 机工作点从而优化样机效率，准确计算整机损耗，对比Si IGBT 样机，测试带载500W 至1500W SiC MOSFET 样机效率曲线，进一步说明DC-SST 用SiC MOSFET降损优越性，为设备更高功率密度的实现提供可能。

  

第四章，通过Si IGBT 器件寿命预估模型，及其现有实验数据，佐证SiC  MOSFET 器件Coffin-Manson 寿命模型准确性；并考虑DAB 用功率器件多热源耦合，提取热阻耦合参数，实现电热耦合Plecs+Matlab 联合带载仿真，获得日负荷曲线下的器件结温波动情况，最终利用上述器件寿命模型，估算DAB 直流固态变压器用功率器件寿命，验证宽禁带器件低损耗运行特性对设备可靠性的提升。

  

第五章，总结本文的研究工作，并对后续研究方向进行展望。

  

2\. DAB 拓扑小信号建模与控制

本章针对DAB 拓扑结构的DC-SST，进行了工作状态分析和小信号建模，设计控制器，采用单移相调制(Single-Phase-Shift，SPS)下的电压闭环控制，实现输出端电压幅值稳定跟随参考电压幅值，并以实验验证。

  

2.1 DAB 小信号建模

  

2.1.1 工作状态分析

  

本节根据DAB 拓扑中8 个功率器件的导通关断情况，区分出DAB 拓扑的6种工作状态，并逐一分析其对应的电路关系，列写电参数关系表达式，求解流经辅助电感的电流解析式。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHdKUicRSDzxhRbGaic5NHV8licD9m7PFSovoQxGCAevgmTBOc2T7Cl855Q/640?wx_fmt=png&from=appmsg)

  

图 2.1 为本文分析的核心拓扑结构，即双向双主动全桥。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHSRiaDGic7CJqia9CSibsoIX5NDF1lo7bMMkPs4VkicZs2CVOHNvaHkR6jlQ/640?wx_fmt=png&from=appmsg)

为分析DAB 拓扑的各个工作状态，图2.2 给出了各个驱动信号、辅助电感左端电压Vh1，辅助电感右端电压nVh2，施加在辅助电感上的电压值VL \= Vh1 – nVh2，以及流经辅助电感的电流iL。

  

由于端电压V1/V2 与变压器变比n 的不匹配，会导致电压调制比k = Vh1 /nVh2， 大于或小于1。本文中通过给定参考电压值与变比匹配的原则，使得电压调制比始终等于1。在分析电路工作状态时发现，无论k 取何值分析过程中得到的电流表达式是一致的。为更直观地分析开关器件的导通与关断工作状态，DAB 所有工作状态如图2.3 所示。实线表示电流路径。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHpLpW00ZE0NY7U6NBZKLiaPHyjAichtQ4W42BV49qQuNicZfC3wuzDsUCQ/640?wx_fmt=png&from=appmsg)

  

工作状态1，如图2.3 (a)所示，（t0, t1）期间驱动给开关管S1、S4、Q2、Q3 高 电平导通信号，但由于初始时刻的电感电流为负（规定工作状态图中电流从左至 右流经电感为正），S1、S4、Q2、Q3 中不存在电流流入，电流只能从器件的反并联二极管D1、D4、M2、M3 中流过。因此Vh1 \= V1，Vh2 \=\-V2，此时电感电流两侧电压VL \= V1 \+ nV2 \> 0，电感电流iL从负值不断增加，在t1 时刻电感电流iL \= 0。

  

工作状态2，（t1, t2）期间所有开关管触发信号不变，开关管S1、S4、Q2、Q3高电平导通信号，由于此时电感电流已变为正值，电流转为从开关管S1、S4、Q2、Q3 中流过，电感电压VL \= V1 \+ nV2 \> 0，电感电流iL继续线性增加。若不考虑器件的换流，工作状态1、2 的等效电路相同，即在时间（t0, t2）区间，电感两端电压都为VL \= V1 \+ nV2 \> 0，电感电流始终线性增加。因此得出电感电流的变化率为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHQMCXEHqlia0t1ymAibib0PDERB9Ya5Kvb0Zm3ZMZGanJWYeXCQhgXNlGA/640?wx_fmt=png&from=appmsg)

  

工作状态3，（t2, t3）期间开关管S1、S4 保持导通，给开关管Q2、Q3低电平关 断信号，给Q1、Q4 高电平导通信号，但由于此时的电感电流为正，电流只能从D1、D4、M1、M4 中流过。电感两侧电压 Vh1 \= V1，V2h \=V2，电感电压 VL \= V1 –nV2  = (1– k)V1，当电压调制比k 大于1 时，电感两端电压为正值，电流继续抬升，如图2.2 (a)，当电压调制比k 小于1 时，电感两端电压为负值，电流减小，如图2.2 (b)。

  

t3 时刻的电流始终可以表示为

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHibGico6zEkNQrq8ZTN5D5GFgUktdyHUjsEZcml6ZKEeY9b1n6WjalZmg/640?wx_fmt=png&from=appmsg)

  

工作状态4，（t3, t4）给开关管S1、S4 低电平关断信号，给开关管S2、S3 高电平导通信号，其余开关管信号保持不变，由于此时的电感电流为正，电流从反并联的二极管D2、D3、M1、M4 中流过，电感两侧电压VL\= – (V1+nV2)<0，此时电感电流iL线性下降，在t4 时刻电感电流下降为零。

  

工作状态5，（t4, t5）期间保持所有开关管的触发信号不变，由于电感电流变 为负，电流转为从开关管S2、S3、Q1、Q4中流过。此时电感两侧电压VL\= – (V1+nV2)<0，电感电流iL保持线性下降。同样地若不考虑器件的换流，工作状态4、5 的等效电路相同，即在时间t3~t5区间，电感两端电压VL\= – (V1+nV2)<0，电感电流iL始终线性减小，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH4o8dXJbl6TscicibpMWYCPSCDXibYhLdhF6S3XoCdRyt0cmzRtq2wd1kg/640?wx_fmt=png&from=appmsg)

  

开关状态 6，（t5, t6）给开关管Q1、Q4 低电平关断信号，给开关管Q2、Q3高 电平导通信号，其余开关管信号保持不变，VL\= – (V1 – nV2) = (k–1)V1，该工作状态与工作状态3 类似，直到下一个周期开始。同理得到t6 时刻的电流表达式为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHqxLXeXwHwribSwwuicfy9j9onRgLibv4LQ04g6wqFeCpib3vS7T1y4XRyQ/640?wx_fmt=png&from=appmsg)

  

根据工作波形图及以上分析，不难发现，电感电流iL具有对称性，即i(t3)=-i(t0)， 联立公式可得表2.1 中的电流暂态表达式。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHQJlGLnSYEJ2SdewdBnUwJelsoSCFnqks0BnyeJPjiaB3k1jCz1K4JsQ/640?wx_fmt=png&from=appmsg)

  

2.1.2 传递函数求解

  

根据分析DAB 电路中辅助电感Ls 的充放电过程，在此基础上，以辅助电感流 经的电流状态为标准，合并电路状态相同的工作状态1 和2以及4 和5，得到4 种等效电路状态，通过分析这四个等效电路状态得到DAB 拓扑传递函数

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHCT2thJxia486mQ4F1meFyaM44bibUCHdlBoKsMOo7Mfe4eGfcIQhLTjw/640?wx_fmt=png&from=appmsg)

  

电路在图 2.4 的四个状态切换，根据电路基本理论，得到状态方程：

  

电路状态1：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHCdNxZ5hK5tfgH4kBlPNR9icmjh0PQCDviaucksJ7tLKsMVrWSpJNDHrw/640?wx_fmt=png&from=appmsg)

  

电路状态2：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH1xOeBgqibqRqibGTib9ongiccphwkUoHZZb1vdrayk6AedMmh9dgG4TYOg/640?wx_fmt=png&from=appmsg)

  

  

电路状态3：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHbb4wdQVqtLsV69mwzS88MA9GKTaVoFjiafh8czK3ybnv5fBjSGUheAg/640?wx_fmt=png&from=appmsg)

  

  

电路状态4：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH0eqPKBQH09GKus3BvZpzSDXam7dBF7s51ErPX1EkdPichM8wPE06Ocw/640?wx_fmt=png&from=appmsg)

  

从等效电路状态的空间方程不难看出，状态1 和状态3 等效，状态2 和状态4等效。实际上是由于波形的对称性，状态 1、2 对应于正半周波形，而状态3、4对应于负半周波形的情况。由于波形的对称性，故只需要分析\[0, Ts\]时间段的状态方程，也就是电路状态1 和电路状态2 这两个阶段。

  

对于电路状态1，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHBQaqKjuiaia4G62d0y3ZQF2g3eYDiaQlLde7wGDzg7ibM0qibmwAAkZSTyA/640?wx_fmt=png&from=appmsg)

  

因为RL 很小为铜线内阻，可以忽略，得到：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH5EB34VrAEAZMTMVxptgIg4PgWT2yU6yyRUmxteRb4hMqRSse6Gjpjw/640?wx_fmt=png&from=appmsg)

  

对等式两边积分，结合2.1.1 节对电感电流初值的计算，得到：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHwTvuPaWUSKbJZX6DkUd70tFGsDx9oMb5KHYc6XomXwDAF0wtxQnZ1A/640?wx_fmt=png&from=appmsg)

  

代入电路状态1 的状态方程得

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHJMQvgR7Kibm9ibEHb5YuM2IKiclEbIZh51ScUXYT8H7oribKq1jvpgu1jw/640?wx_fmt=png&from=appmsg)

  

同理，计算电路状态2 的电感电流并代入相应状态方程，可以得到：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHPTyo4LRcgBI4wkiczzXicVgxKXJyMML9PaNxMCibMJOQsLsfyqSzB5gkg/640?wx_fmt=png&from=appmsg)

  

将VC1 和nVC2 在\[0, Ts\]平均化处理，并进行矩阵化，重写状态方程：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHjIJ4MhpUlvPYVPaNuGLibudrNQeLrkkXf3Sicge8Yiab34w4gbGnicQY4w/640?wx_fmt=png&from=appmsg)

  

考虑由V1 侧电源供电，V2 侧作为负载，则V2\=0V，得到：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHiblc7eYo55fl7Zf5n7Px8ZibAgFEaFqqsd8ImPYJia69QBqpNeEBwvxyQ/640?wx_fmt=png&from=appmsg)

  

在电路达到稳定状态下，可认为 

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHhZ18koprgnjov030HaSRgjV4XWgux4naVQveDvBEDIX6ODjWgC56hA/640?wx_fmt=png&from=appmsg)

  

可以解得系统状态量的稳定方程：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHa2F6P2rt55hAuuDbDF30MmCZia8icA4g5gia4UeuKoZngibIU9OMTAjAYA/640?wx_fmt=png&from=appmsg)

  

假设移相角度D 有一个微小的变化干扰信号ΔD，D\+ ΔD 代替D 并代入可得到关于ΔD 的小信号方程：

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHb5hsO0LfMH8n40mCgMsEEGEHJsPOibHbXr9xwsyw4ibYZQoVBe3S0WHg/640?wx_fmt=png&from=appmsg)

  

经过拉氏变换，将时域变量转换为复频域，得到：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH6CtOFIbibzPgFAxZgVG8pKuhACplVdZ483t8pIqyI6J5nye6fjHAccg/640?wx_fmt=png&from=appmsg)

  

若假设RS1 \=0Ω，有：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHvywF9mGNiavDrJjUICfhEA3zfYkK28C2fTxvqPrFw4Zk9rrdCCnaXKw/640?wx_fmt=png&from=appmsg)

  

根据小信号建模得到的DAB 系统的传递函数，可以利用频率特性来分析系统 性能，为设计控制器提供理论依据。

  

2.2 DAB 电压闭环控制设计

  

2.2.1 闭环控制器分析

  

首先本文对 DAB 拓扑结构闭环控制的原理进行分析，闭环补偿系统如图2.5所示，将输出电压经过反馈网络 H(s)后，与参考电压Vref(s)进行比较，得到误差信号vˆ (s) ，再经过补偿器Gc(s)补偿后，得到vˆc (s) 输入给调制器1/VM，得到占空比扰动信号ˆd (s) ，最终经过传递函数Gvd(s)将经补偿的闭环信号输入给输出电压，使得输出电压跟随参考电压。另外负载扰动iˆ load(s)与交流扰动vˆ g(s) 是不可控的扰动变量，但经过输出电压闭环补偿后上述扰动信号的影响均可得到有效抑制。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHHBBv6mvKsH8E2BLNeAIfInmk6ypJETEb9huAjXBfbztAzpNMWSdRhA/640?wx_fmt=png&from=appmsg)

  

DAB 的输出电压受三个因素影响：控制信号d(s)、输入电压vg(s)以及负载电 流iload(s)影响。这三个量中，输入电压vg(s)以及负载电流iload(s)为不可控量。输出电压可以表示为

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHZlrfGWX4TSn5I19aHVPZCyIKZlicNTvPq6rP10Ilj1dpJK9PL1fwsWg/640?wx_fmt=png&from=appmsg)

  

式中

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHVW6SYdeskHHjhVmZvktA5iac68u2Cz2IJNGcqibMrA1ibMRJAt9QjWgSA/640?wx_fmt=png&from=appmsg)

  

根据图 2.5 可计算得到输出电压为

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHfJfRn4ZjaiaswoXPia8gR9tF6QiaiaJNHqLtN4HxfGtD15wT7eJRBAiaopw/640?wx_fmt=png&from=appmsg)

  

式中，T(s)=H(s)Gc(s)Gvd(s)/Vm 为环路增益，为设计控制器时关键的设计与分析量。在设计控制器时，应尽量增大T(s)在低频的增益，以便降低输出电压、负载的低频扰动对输出电压的影响，并实现输出电压对参考值的快速跟踪。

  

2.2.2 电压闭环补偿器参数设计

  

DAB 的静态工作点选为额定工作点参数，输入电压V1\=400V，输出电压V2\=200V，传输功率选为PN\=3kW，可以计算出Rload\=13Ω，对应移相比D=0.13。按照计算得到的参数以及前述分析，得到DAB 设计的参数以及静态工作点如表2.2所示。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHY7iasicfuEVIsqAwGkoIWJicahMh2Kl6zGDiaXpSElTRn1pgq9Dveyicqew/640?wx_fmt=png&from=appmsg)

  

按表2.2 可以计算出未补偿的传递函数为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHs8Q52LZgSeXrVcgCyVxLTYFqOnNC9NPIEymkE59zAkdgFh0FUCaxMg/640?wx_fmt=png&from=appmsg)

  

未补偿的环路增益为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH51cUomq4LdcNeDGOJa7sAxprQicoVFDH6eMV4xq6mJ4TvjicWq3rXSJQ/640?wx_fmt=png&from=appmsg)

  

未补偿的环路增益的 Bode 图如2.6 图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH474McgRL9Dic2ssAjT17DuP4VFgm6Menh71WrPQw8cSEDmIBTwNYJyA/640?wx_fmt=png&from=appmsg)

  

分析图2.6 可知在初始参数条件下，未补偿的环路增益的穿越频率为127kHz大于 1/10 的开关频率，需要进行补偿将穿越频率降至fc\=5kHz=1/10fs以下，同时保证足够的带宽。根据图2.6 可得在5kHz 处，增益为27.7dB，相位裕量为88.7°，认为在补偿前系统已经具有足够的相位裕度，PD 补偿显得并非必要。因此本文直 接采用PI 补偿器，增加低频环路增益，使闭环系统能在低频段更好地调节输出电压。选择反零点的频率fL 越大，低频部分的增益就越大，但该极点会拉低相频特性，由于原系统已经有较大的相位裕量，fL 直接取预期穿越频率，fL\=5kHz，ωL\=31415rad/s。设计得到PI 补偿器为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHQIrPKDYkia0Rc7QvCjQibwtUmmo1QMJY0NLDL9p5ib0pYLRNrFiavcBRicQ/640?wx_fmt=png&from=appmsg)

  

经补偿后的闭环增益为

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHTPwib2uV3CmItlaxQxDDjt7VczZygKz2bpO8ziaslhxASt4gkxANWiasA/640?wx_fmt=png&from=appmsg)

  

经过PI 补偿器的闭环增益Bode 图如图2.7 所示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHxH2o2SbWDGq9n32LnDoD6b4nzIkETNuHUZpGVZPfMHBuEUibKa6Matw/640?wx_fmt=png&from=appmsg)

  

最终设计得到的系统穿越频率为fc\=6.58kHz，相位裕量Pm\=53.9°，低频环路增益充裕。根据所设计的控制器求出对应的PI 参数：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHN6tvuMlZeFK0nJiaOJKOmrjjnRB7jjscOickz4ftO4pibRsibaapAStdUg/640?wx_fmt=png&from=appmsg)

  

2.3 DAB 电压闭环扰动仿真分析

  

按前面章节所述元件参数设计值以及控制器参数，搭建PSIM 仿真模型。仿真 采用定步长仿真，步长0.1μs。为校验闭环控制系统的控制效果，仿真分为负载电流跃变和输入电压含低频扰动两部分。负载电流跃变指输入电压保持400V不变，负载功率从750W 跃变至1500W。输入电压含低频扰动指传输功率保持750W 不变，直流输入电压以400V 为基准，同时输入电压增加一个Vpp\=40V，f =100Hz 的低频交流扰动。仿真参数如表2.3 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHOKnro8m2LoKSsuU4KxHlbowYskGaoCJa43MINAibxRZUnbzUWMchMUQ/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHbfGib7aXqcVfwVQtt2bdcXsmkt3yWUA5y9nOAVT6JbqgjVy1GicuW1NA/640?wx_fmt=png&from=appmsg)

  

2.3.1 负载功率跃变扰动仿真

  

对于未补偿的闭环系统，PI 设置默认为kp = 1，ki = 0，即电压反馈值与电压基 准值之差直接作为控制量，不经过任何补偿环节。设置负载功率在0.02s 时由750W跃变至1500W，图2.8 为无补偿器时传输功率和输出电压的仿真波形图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHE2V68ETWRa6wicWKicl1XsVukH8zlgDpKAm9iabmAtexNZib2ekia5qTAzw/640?wx_fmt=png&from=appmsg)

  

由仿真波形可知，未补偿的闭环系统不能将输出电压稳定在200V，而是存在 最大1V 的稳态误差，而功率阶跃后，稳态误差达到4.5V，为参考电压的2.25%， 且负荷调整率达8.3%，远超3%~5%的指标。这是由于闭环系统直接把输出电压与 期望电压的差值作为占空比信号传递给DAB 电路，则必定存在一定的输出电压误差使得占空比存在，并将输出电压稳定。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHySt2yBVYphhIjT40lHuky5WlibYzr0flY8icySrQW2hNevVBKQRiaK2RA/640?wx_fmt=png&from=appmsg)

  

分析图2.9，负载功率跃变时，带补偿器的闭环系统最大会产生2.5V 的过冲电压但迅速跟踪到参考电压200V，电压超调比仅为1.25%，动态响应时间在2.5ms以内，验证了设计在负载阶跃时的有效性。

  

2.3.2 输入电压含低频扰动仿真

  

设置输入交流扰动电压在0s 时作用于输入端，分别在未加补偿器和带有补偿器的闭环系统中进行仿真，图2.10 为输出电压的仿真波形图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH5Fzu3yczsY9Ckic6CVMTEDNOh20uFdk01r8icRw4wsyibjlx7MM65p2Kw/640?wx_fmt=png&from=appmsg)

  

由图2.10 可知，带有补偿器的闭环系统对于低频扰动具有良好的抑制作用。 由于输入扰动信号幅值为Vpp \=40V，未带补偿器的输出波动∆U≈20V，与此时输 入输出变比为2:1 相同，基本不能抑制低频扰动带来的影响。而带补偿器的闭环系 统将输出波动抑制在∆U≈4.7V，可以认为该补偿器对于闭环系统是有效的。

  

2.4 DAB 负载扰动实验

  

2.4.1 实验平台

  

为验证上述仿真控制器的控制效果，本节利用第三章搭建的DAB 样机实验平 台实现了大功率负载阶跃实验，电阻负载水平从1000W 阶跃至500W，再从500W阶跃至 1000W，并同时保证输出端电压稳定200V±5%。阶跃实验平台主要由AMETEK Sorenson SGI 1kV/10A直流电源、Chroma 63205A 电子负载，及DAB 样机构成，样机的设计将会在一章具体介绍。在负载阶跃实验中，直流电源工作在恒压输出模式，保证DAB 样机输入电压保持400V。电子负载工作在恒电阻模式， 通过电子负载电阻阶跃，即可实现负载功率阶跃，并设置阶跃速度为1Ω/μs，DAB工作频率 50kHz。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHBicqnOt4AVg4O8ZrKBp9nZtaVgzlP4xVwmcQdZxKKyeBlRng6pbfXsw/640?wx_fmt=png&from=appmsg)

  

2.4.2 实验结果分析

  

负载阶跃实验结果如图2.12 所示，测量直流端输出电压V2，辅助电感电流信 号iL，变压器原边输入电压VT1，直流输出i2电流。图2.12 (a)为负载阶跃从1000W阶跃至500W，2.12 (b)为负载阶跃从500W 阶跃至1000W，负载阶跃过程为一个周期时间20μs。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHcTHhRGyg0Qq9Kygxky2RtapnNYseSQLJibdoCtuW0VBXshots66yObA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHS3UcSmvNag6ZiaiaicLWMPmiblel6XP4ib4lgj8PERqqicpjcVoXchdibvduw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHDgn2hTeHS5bMuJPlG8cTqiaDD55YdVY6s4K69U76pXgGexhIzguZUow/640?wx_fmt=png&from=appmsg)

  

阶跃前后V2 基本保持稳定，直接验证了仿真设计的闭环电压控制是十分有效 的。在长周期的实验波形中可以观察到，输出电压有一定程度的波动，但波动幅度非常小，并且迅速稳定到给定电压值，且电压过渡过程无明显过冲。iL由于辅助电感磁芯饱和出现尖峰，因此在后续实验中对电感磁环研磨气隙，但本次实验电流幅值仍在李兹线载流能力范围内，且远小于器件电流额定值。VT1 方波波形十分稳定，波前波后振荡均较小，在负载阶跃前后电压波形保持不变，可见磁芯元件高频工作性能优良。i2快速跟随负载阶跃变化，无电流过冲和振荡，这不仅是依托电子负载的优良性能，更是由于控制算法本身的有效性，从而实现负载阶跃平稳过渡，进一步验证了闭环系统的抗干扰能力。

  

2.5 本章小结

  

本章分析了DAB 拓扑结构的DC-SST6 种工作状态，合并电气状态表达式相同的工作状态，得到4 个等效电路，由此建立DAB 拓扑小信号模型，推导传递函 数，并给出补偿器设计方案，最终实现了稳定的闭环控制。Matlab/Simulink 仿真说明了补偿后的闭环系统具有较好的抗干扰特性：当输出负载阶跃变化时，未补偿系统在阶跃前相对于输出电压设定值即存在0.4V 稳态误差，功率阶跃上升后输出电压稳定值误差达到4.5V，而补偿后的系统在阶跃前后均能输出与电压给定值无稳态误差的电压幅值，阶跃动态过程在2.5ms 内迅速跟踪给定电压值，且电压过冲波动不超过2.5V；当输入电压含低频扰动时，补偿后的系统输出电压所含低频扰动幅值从未补偿的∆U≈20V 降低至∆U≈ 4.7V 峰峰值，说明了小信号模型的有效性。

  

同时，利用本文第三章搭建的DAB 样机试验平台，本章完成了负载跃变实验， 实现负载电压稳定跟随给定值，输出电流平稳过渡，无明显电流过冲，且暂态过程在2 个周期40μs 内结束，直接验证了补偿后闭环系统抗干扰能力。

  

3\. DAB 直流固态变压器样机优化设计

  

本章将DC-SST 设计要求作为已知量，原边电压U1\=400V，工作频率f=50kHz，额定功率PN\=3kW，变比n=2。实际设计时，相比普通工频变压器，仍存在较多问 题：变压器磁芯材料选择及磁芯尺寸设计；高频变压器绕组选型并计及寄生参数影响；DAB 拓扑主电路辅助电感Ls 设计；功率器件选型并对比SiC MOSFET 与Si IGBT动静态特性。本章的组织架构如图3.1 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHjt2dRwFeCV8bAMxzLQzcwwBsXvn4fxQ2GxhxkJic5nsuhedDfd55kug/640?wx_fmt=png&from=appmsg)

  

3.1 固态变压器本体设计

  

3.1.1 磁芯设计

  

1) 磁芯材料

高频变压器材料的选择是变压器设计的重要环节，磁芯的材料特性将影响变压器的工作性能。常见的高频磁性材料主要有：软磁铁氧体（MnZn）；非晶合金； 纳米晶合金。硅钢虽然有较高的饱和磁密，以及较高的磁导率，但相对纳米晶合金、非晶合金、铁氧体等磁性材料，其高频工况下磁芯损耗很高，不适合用于制作高频变压器。常见的磁性材料的材料特性如表3.1 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHeIp1bCoFIjhyskv9mMoiaSsDkiahhlEkndYg50wQFbVicGJkxjfDcVTiaw/640?wx_fmt=png&from=appmsg)

  

文章中将高频磁芯总损耗与视在功率的比值定义为磁芯损耗因数，可以由 磁芯材料的磁芯损耗因数来解释和选择磁芯材料。文献中定义了Ap 为磁芯面积积， 即磁芯有效横截面积与磁芯窗口面积的乘积，Ap 越大对应的磁芯体积的越大，且容量越大。本文结合磁芯的损耗因数、Ap、饱和磁通密度、价格等因素提出磁芯材料选择方法：

  

①当变压器容量在5～30kVA（铁氧体Ap＜160cm4 纳米晶Ap＜75cm4）工作频率大于20kHz 时，铁氧体磁芯的损耗因数均低于纳米晶低和非晶，且价格较低， 因而是磁芯材料的最佳选择。

  

②当变压器容量在30～100kVA 时，纳米晶磁芯相对于非晶材料，其损耗因数水平较低。但在实际应用中，由于变压器设计的工作频率过低或容量过大，会导致变压器磁芯体积过大，又由于纳米晶材料价格昂贵，直接导致变压器成本过 高，不利于工程实际的推广应用。

  

③对于常规的Si 开关器件，其工作频率非常有限，当变压器容量提升，变压器磁芯体积将会明显增大。对于容量大于100kVA（Ap＞260cm4）的变压器设计， 由于磁芯体积的限制，只有可叠片制造的非晶材料可以满足尺寸要求，并且其损耗因数随频率的变化平稳，又由于材料成本较低，因此，非晶材料是超大容量高频变压器的首选。

  

结合此种磁芯材料的选择方法，本文的高频变压器样机选择铁氧体磁性材料。

  

2) 磁芯尺寸

  

本节利用AP 法设计磁芯尺寸。根据法拉利电磁感应定律，变压器端电压U与磁通密度的关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHHibHs2rAFvKpQfY8rbFvvDOzhK3M6AN5vttJ9Jc4fbNSyd4ibSzQF1gA/640?wx_fmt=png&from=appmsg)

  

其中 N 表示变压器绕组的匝数，Am 表示磁芯的有效截面积，B 表示变压器的工作磁通密度。对3.1 式进行积分得到变压器端电压的平均值Uavg 与磁通密度的关系:

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHJB0U1LjAHVFuFic4kOxotq2VgdKGldlhTZMAtGHLTGPG8grXA5ctBZg/640?wx_fmt=png&from=appmsg)

  

将上式转化成变压器端电压有效值Uarm与磁通密度、截面积的表达式

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHYakmwVkcd3NEiavD4bX4icNfKjOKNJfEkfvbn2ibUAIEsxWKrP9AXzP1g/640?wx_fmt=png&from=appmsg)

  

 其中 K 为电压有效值与平均值的比例系数，定义K 为波形系数，当变压器端电压为正弦波时，K=4.44，若电压为方波时，K=4.0。此时可得出变压器的功率方程

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH4xctQYGhEFpEp0O6I0tYaBbSjHJWthQOhIL88acibCE1mFk2SExvo8Q/640?wx_fmt=png&from=appmsg)

  

定义ku 为窗口利用系数，即所有绕组导体有效导电面积Aw 之和Wc 与磁芯窗口面积Wa 之比，即Wa Wc  / ku  AwN /ku ，将此式代入上式方程中的式(3.6)，其中Ap为磁芯有效截面积 Am与磁芯窗口面积Wa 的乘积。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHPxY3vBQdbzBselN4KuzdRkiaQrR5eYJ5jMEtIE9HJzIDTpwT7dhsfiaA/640?wx_fmt=png&from=appmsg)

  

根据经验公式Bm=0.6~0.7ΔB，ΔB=Bs-Br ，其中Br 为磁芯的剩余磁通密度，Bs为磁芯的最大磁通密度，查阅铁氧体的材料特性，此设计过程中 Bm取0.2T，变压器窗口利用系数ku 取0.4，磁芯材料的填充系数kf 取0.98，按李兹线载流能力j=5A/mm²，按照3kW 额定功率，代入相关系数求出磁芯面积乘积Ap\=3.8cm⁴。

  

根据所计算出的磁芯面积乘积，选择美磁磁环O 44925TC 磁环的尺寸如图3.2所示，其中D1\=49.1mm为磁环的外径，D2 \=31.8mm 为磁环的内径，H1\=19.5mm为磁环高度。Am\=(D1–D2)×H1/2=1.69cm²，Wa\=πD2 2/8=3.97cm²，Ap \=Am×Wa \=6.7cm⁴。 回带入3.6 式，求出该尺寸下的环形磁芯的功率传输能力，在50kHz 时为5.29kW， 因此所设计的磁芯能满足样机容量设计要求。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH0O9anu8A82paK9R87icQk7CP2cicRVgUGoVqPZ4AceYdGgpdIexFRGHg/640?wx_fmt=png&from=appmsg)

  

3.1.2 绕组设计

  

变压器本体在高频工作状况下输出特性易受到寄生参数的影响，尤其是变压器交流侧方波波形质量。高频变压器本体寄生参数主要包括：绕组漏感和绕组寄 生电容。本节首先通过Pspice 建立高频变压器集中参数模型，分析电路模型参数对输出波形质量的影响；再通过二维Ansys 有限元仿真，建立分布参数模型，对比分析层叠式绕法、三明治绕法及交错式绕法的漏磁场分布，同时对照三种绕组样品实际输出电压测试结果，确定最优的绕组绕制方法。

  

高频变压器绕组的位置结构对变压器的运行性能及其稳定性有很大影响，为了 预测不同绕组结构对变压器电磁参数的影响，本文建立了不同绕组结构的高频变压器有限元二维模型。模型包括层叠式、三明治式和交错式。绕组及磁芯剖 面如图3.3 (a)所示，为减小电流集肤效应，绕线均为李兹线，绕线表面设置绝缘，层与层之间为空气绝缘。在该仿真中所使用的磁芯材料为美磁公司O44925TC 型铁氧体，频率在50kHz，电流密度为4A/mm²。图3.3 (a)中形结构为铁氧体磁环，蓝色圆圈代表原边李兹线绕组，红色圆圈代表副边李兹线绕组，李兹线尺寸为0.1mm²×200，即单根绕线由200根0.1mm² 截面积的铜线组成。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHOPFOpuiaJA1oXepRIaBvRk4Y05BX8iaaHXQPoLDDpoJPcgJBsnIG8PjQ/640?wx_fmt=png&from=appmsg)

  

由于漏感是漏磁场强度的体积分，为分析不同绕组绕制结构对应的漏感，图3.3 (b)给出了漏磁场强度H 的分布及幅值。层叠式的绕组中，漏磁场强度最大值达 到6.3A/m，是三种绕制方法中漏磁场强度最大的一种，且原副边磁场耦合程度低， 漏磁场分布体积大，磁场没有很好地被约束在磁环中，电能转换效率低。在三明治式结构绕组中，漏磁场强度最大值降低至4.5A/m，漏磁场整体幅值相比层叠式明显减小，而漏磁场分布体积仍然很大。交错式绕组的漏磁场强度最大值为5.3A/m，比三明治绕组的漏磁场强度略大但绕组每匝之间具有良好的耦合，漏磁场分布体积明显下降，磁场被约束在磁环主磁路中，得到的漏感值最小。因此， 变压器绕组采用交错式可以得到更优的参数特性。

  

通过有限元仿真可以计算得到变压器的分布电容和漏感参数。图3.4 为高频变 压器集中参数等效电路，Rp、Rs 为变压器原、副边的绕组电阻，Cp、Cs 变压器原、 副边的分布电容，Lp、Ls 变压器原、副边的漏感，Lm 为变压器励磁电感。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHcibPHrBeg84pgzT4OoTRG98k5K6zghjnIdkG5uA1GQH6JtQmll89TGA/640?wx_fmt=png&from=appmsg)

  

 本节在Pspice 仿真中搭建上述集中参数等效电路，高频变压器的原边输入交流方波，U1vpp\=200V，fU1\=50kHz，占空比DU1\=50%，所有参数归算到原边，仿真主电路如图3.5 所示。为分析副边U2 的波形，可将副边方波分为三个阶段：脉冲前沿，脉冲平顶，脉冲后沿，分别讨论分布式参数对变压器输出波形质量的影响。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHad1RggLHau2dialvnSibPrtng8kYP7VicJa1w16PvuZ0yOZ0NCbN1hwhA/640?wx_fmt=png&from=appmsg)

  

当仿真中的高频变压器寄生参数较匹配时，漏感和寄生电容值均较小，分别为Ls=Lp+Ls'=10μH，C1\=1μF，C2\=0.1μF，得到较优参数时的副边输出电压波形， 如图3.6 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHwgQMh3yofPq4T3Np4rgLYbHdbdWDOepyXvq1JUkIAhFUI1hR33DzUg/640?wx_fmt=png&from=appmsg)

  

在上述T 型等效电路模型中，保持寄生电感不变，增加原边输入侧的寄生电 容，为了能够通过波形质量明显观察到输出特性变化，将原边寄生电容扩大10 倍，以分析高频变压器输出电压受寄生电容的影响。原边寄生电容变大10 倍后，高频 变压器副边输出波形如图3.7 所示。由图3.7 可见，原边寄生电容变大10 倍后， 高频变压器仿真电路中副边输出波形的震荡频率减小，但是输出电压的振幅却会增大，最大值接近输入电压幅值的同时，上升沿将会产生延迟。

  

对副边寄生电容的分析采用同样的方法，副边寄生电容扩大 10 倍后，高频变压器的仿真输出电压如图 3.8 所示。可见输出波形的震荡幅值减小，没有超调和顶降，但高频纹波较为明显，波形上升时间明显延长。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHQYkEkWYiac3nuYZvXv8plEYdrQxhDfjicDwtvYJiayxus1K2J1g8Psm6w/640?wx_fmt=png&from=appmsg)

  

在上述高频变压器等效电路模型中，分布电容保持不变，归算到一次侧的等效寄生电感扩大10 倍，以分析高频变压器输出电压受寄生电感的影响，如图3.9所示。寄生电感变大10 倍后，高频变压器副边电压波形质量明显下降，谐波震荡增大，且波形在一个半波内达不到稳定幅值，波形的稳定速度降低，这说明寄生电感对输出波形的影响十分显著。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHEROGJ26eDOXrWh0HGlU5w4a7ib1wmRJzUuWgn1OvjHwAkyBFalkvibpw/640?wx_fmt=png&from=appmsg)

  

寄生电容和寄生电感增大，都会使得输出波形畸变恶化，所以设计绕组时应当尽量使得两个参数都较小。但这两个参数在实际绕制时其实是矛盾的，绕组绕 制越紧密，耦合程度越高，绕组寄生电感降低，但匝间寄生电容与匝间距成反比， 匝间距越小寄生电容会增大。因此，希望通过调整绕线的间距，可以找到一个最优参数组合，使得高频变压器本体输出波形质量最佳。图3.10 (a)是按仿真设计绕制的高频变压器磁环及绕组实物。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHz8Q5J80VWR8wo2bacnOzAh5oLD4EicYa9gnByfwysibsgO5RyVImNN5g/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH4SeD1JhALCibbUP0SBasu4nxrs3vFgPTxtNTlYBwLAhDYvQAS5xsIxw/640?wx_fmt=png&from=appmsg)

  

对绕制的高频变压器进行输出特性测试实验，原边施加标准方波，电压幅值 为10V，电压频率50kHz。由实验输出电压波形对比可见，三种绕制方法得到的波形，如图3.10 (b)所示，均具有较小的平顶下降，而交错绕法得到的波形最接近标准方波，波前振荡最小，波形上升时间最短，与有限元仿真得到的结论吻合。因此，本文采用波形质量最佳的交错绕法，作为DAB 样机的变压器本体绕制方案。

  

3.2 DAB 拓扑辅助电感标定

  

DAB 拓扑结构中的辅助电感值是最为关键的一个参数，直接影响DAB 的功率传输能力、器件电流应力水平、器件电流有效值水平，其中器件电流应力水平直接影响器件的安全工作状态，器件电流有效值直接决定器件损耗情况。因此利 用上述指标划分有效的DAB 工作范围，本文定义有效工作区（Efficient Operation  Area，EOA），通过EOA 可以直观地选择不同工作频率下对应的辅助电感值，保证DAB 固态变压器样机在实际运行中的安全可靠工作。需要说明的是，本节中辅助电感L 包括外加辅助电感及变压器归算至一次侧的漏感，是一个等效电感值。

  

3.2.1 传输功率边界条件

  

在DAB 工作过程中，由于系统状态的变化（如蓄电池容量的变化），会导致 输出电压的变化，设变化范围为V2\_min~V2\_max。由于变压器匝比固定，为了减小环流，提高效率，通常控制对应的输入电压V1变化，使得电压变换比k=V1/(nV2)=1，设变化范围为V1\_min~V1\_max，有V1\_min/(nV2\_min)=V1\_max/(nV2\_max)=1。设DAB 额定功率为PN，考虑1/3 的过载量，DAB 传输的最大功率Pmax\=(4/3)PN。根据仿真分析， 给出计算EOA 采用的参数为，输入电压额定值V1N\=400V，输出电压额定值V2N\=200V，传输功率额定值PN\=3kVA，电压变化范围±10%。根据推导分析，DAB的理论最大传输功率PM 为

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHJO6ch96gU0BibhpXhEdj2tatcjSxUP5juvG8NQqj3oyOFF8ZIDiaibRvQ/640?wx_fmt=png&from=appmsg)

  

其中L 是辅助电感Ls和变压器漏感之和。最大传输功率的最小值为PM\_min 为

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHXz9ibW0B5pYuSDYapJD62ptoBVkia12vHaZ6zdJoloCibo5f0oIibHicsibA/640?wx_fmt=png&from=appmsg)

  

为了保证DAB 能够达到负载所需的传输功率，需要保证DAB 理论最大传输功率的最小值大于DAB 实际需要传输的最大功率，即

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHOADyO1icrqIPWASRInOHfbcM5CcEPsraibtN3YZVs0dP0SVGkgz9nKaw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHHP73XCjoBthLuicyHSuabNP4Hn3ibuQ6j9Oh4aOF0icZTAbOz2lToEvkA/640?wx_fmt=png&from=appmsg)

  

  

由式(3.10)可得PM\_min随fs 和L 的变化关系曲线。当最大传输功率的最小值大 于4/3 倍的额定功率PN时，认为工作在EOA 可以保证充足的功率传输裕量。而当 最大传输功率的最小值达不到设定值时，实际运行可能会存在功率传输能力不足的情况，因此传输功率的边界条件是必须满足的。将其转换成等效的二维曲线得到图3.11(b)。EOA 为大于Pmax的区域。可见，当工作频率提升时，为达到设定的最大输出功率的水平，须限制L 值的上限。

  

3.2.2 电流应力边界条件

  

在DAB 稳定工作时，为减小回流功率，一般调节输入电压，保证电压调制比k=1。电流应力是DAB 某一时刻达到的电流最大值，表征的是电流对器件的冲击效应，因此对其分析中不仅要考虑DAB 控制稳定运行（k=1）时的情况，还要考虑控制过程中的暂态（k≠1）情况。根据第2.1.1 节的分析，DAB 的电流应力IM 为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHaq4C8af8iacGFUmC2t4o48XiaeN8TOo4hIibvRo1icMoaxMFibUjNBG2KRQ/640?wx_fmt=png&from=appmsg)

  

对于相同的传输功率，总是有两个不同的移相比可以取得。为了减小环流，提高DAB 效率，通常选择小于0.5 的移相比，有：

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHeEhLlyahqv3WgL6BicUcKqBVbIBNpRKEOfO3iamjzFFdLe3ic4bdcyqzA/640?wx_fmt=png&from=appmsg)

  

代入式(3.11)得：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHQtvbuodfd7SkEF9o9szpgEYqwvHaRjS0LCyIMyYYPxQnOlOU82cL0w/640?wx_fmt=png&from=appmsg)

  

为取得最大电流应力IM 的最大值IM\_max，确定传输功率、输入输出电压V1和V2，首先对IM1求关于P、V1、V2的偏导，有：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHgcgTDGwuZ7HXNdtd5iar2cCYxQRtfe6t1hux0t0kaib5TibAQBaiacmPtg/640?wx_fmt=png&from=appmsg)

  

  

由偏导结果可知，IM1是关于P 的增函数，关于V1 的减函数；而对于nV2，可以得到其二阶导数大于零，所以最大值在端点处取得，通过比较知道，当V2\=V2\_max时，IM1 取得最大值。同理可对IM2 进行类似分析。可得电流应力的最大值IM\_max为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHiaaBMJqF5dqicw5LslOrlf2nM2CmR1RFI0vicGJUPKq5ibezbrQyaQnSfg/640?wx_fmt=png&from=appmsg)

  

为了保证系统安全工作，需要保证DAB 工作过程中电流应力的最大值小于器件所能承受的最大冲击电流，并留有一定的裕量，即有：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHH419cTc0RPj4NnU2Q8rMI8ic6SEm8cpiaShyHLicToLORNVv9ph0K2k8g/640?wx_fmt=png&from=appmsg)

  

ISiC\_max 为SiC 功率器件所能承受的最大冲击电流，查找C2M0080120D 型号

SiC MOSFET 的参数表，得到栅极驱动信号20kHz方波时，ISiC\_max\=36A(25℃)，ξ为裕量系数，通常可选择 1.5~2，本文取1.8，对于变压器副边器件，裕量系数还需要乘以变压器变比n。由IM\_max 的表达式，可以得到IM\_max 关于fs和L 的关系。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHzHwWD2LWCrx3mXKHDqPMUoyWLOdj83zKIrFlJ6Df74dVeqADpOXCew/640?wx_fmt=png&from=appmsg)

  

由图3.12 可见，最大电流应力与工作频率fs 及电感L 并不是简单的递增关系， 而是存在极小值，且EOA 域在极小值附近取得。在设计DAB 参数时，须保证最大电流应力小于器件所能承受的最大电流且保留一定裕度。IM\_max 关于fs 和L 的二 维关系图更加简明的指出了DAB 的受电流应力约束的EOA。fs\=50kH 时，辅助电感取值最大不应超过90μH，确保器件安全工作。

  

3.2.3 电流有效值边界条件

  

电流有效值是评估DAB 发热状态的重要指标，因为电流有效值的平方与损耗 成正相关。电流有效值是一个稳定周期内电流的方均根值，因此只考虑DAB 在稳 定运行时（k\=1）的情况。根据第一节电流有效值的公式，并将移相角用传输功率替换，得到电流有效值的表达式

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHqxpuveDuBHF7SWndxpYxbONe7HTiaKjcrpB89GO5fqadV2r7m5agtgA/640?wx_fmt=png&from=appmsg)

  

为了分析方便，对电流有效值的平方Irms ²取导，并且取k\= 1，有

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHzDzRVChiblCSofbHNMTJGZJ08UCzUicKOBW5icRlcUq95yKICibEiagWJFA/640?wx_fmt=png&from=appmsg)

  

  

根据上述分析知道，Irms 2 是关于P 的增函数，关于V1 的减函数。由于Irms＞0， 所以Irms 也是关于P 的增函数，关于V1 的减函数。可得DAB 工作过程中，电流有效值的最大值Irms\_max 为

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHnBb6oUlB9k2tFqROfy3Da7Jd4PJB1aec7nicNlUMvkask0nr2H9dpAQ/640?wx_fmt=png&from=appmsg)

  

为了保证系统安全工作，需要保证DAB 工作过程中电流有效值的最大值小于 器件所能承受的最大有效值，并留有一定的裕量，即有：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH2rfjpE1udTftFBjzmazDYJ7Mho0Aicoqq3icGpiaLMMLf3wHSksLYIj5g/640?wx_fmt=png&from=appmsg)

  

其中，ISiC\_rms 为SiC 功率器件所能承受的最大电流有效值，λ 为裕量系数，通常可选择1.5~2，对于变压器副边器件，还需要乘以变压器变比n。根据上述分析， 图3.13 给出了Irms\_max随fs 和L 的变化曲线。从图中可以看出，Irms\_max随着fs和L的增加而增加，仅仅在一定范围内，电流有效值的最大值小于 SiC 功率器件所能 承受的最大有效值电流，如图3.14 (c)中的EOA。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHTmzdMsHONqCIqMUojRJazHUxdjJ7jXl7dVGeRn0K5c5XaSXn9VUlRA/640?wx_fmt=png&from=appmsg)

  

结合上述三个限制条件，以电感L 为横坐标，工作频率为纵坐标，可以得到相 应约束条件下的EOA，如图3.14 所示。图3.14(d)为综合约束条件下电感L 与工作频率f 的关系。最终约束DAB 工作有效区的约束上限为器件的最大电流有效值，下限为器件最大电流应力。本节不同工作频率下的辅助电感标定为样机工作点的选择提供了十分重要的依据。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHYmBeMwMfjtib0Fib5cibAQ1gy9fv93ZEsDc6ZSU1p7zPbqEOseeSrr6kQ/640?wx_fmt=png&from=appmsg)

  

3.3 SiC MOSFET 与 Si IGBT 动静态特性对比

  

3.3.1 功率器件结构及工作原理

  

图3.15 给出了SiC MOSFET 元胞结构，它是以低掺杂的P 型SiC 半导体材料为衬底，用扩散工艺制作出两个高掺杂的N+区，在P 型半导体表面上生成一层氧化层薄膜绝缘层，从两个N+区引出两个金属电极，分别是源极和漏极，在氧化绝缘层上制作金属电极，作为栅极。若在栅\-源极之间施加一定大小的正电压，由于存在不导电的氧化层，电极上的正电荷大量聚集后，将在氧化层下表面的半导体感应出等量的负电荷，改变材料特性，形成导电沟道。当栅压达到阈值电压，导电沟道不断扩展，最终器件正向导通。关断过程与此相反，在栅极施加负电压，P 型材料又恢复为N 型材料，导电沟道消失，从而器件关断。由于MOSFET 的源极和漏极之间存在一个PN 结，等效为寄生二极管， 其正极和负极分别是功率SiC MOSFET 的源极和漏极。由于寄生二极管与功率SiC MOSFET 组成了一个整体，因此它对功率器件整体的静态特性与参数的影响不可忽略。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHJYdrU2qrSHdKb0BjuMALic4NkNHuQv9ibJIBXKcWFicicUf0Wn0IQqucWQ/640?wx_fmt=png&from=appmsg)

  

IGBT 的元胞结构如图3.16 所示。与MOSFET 器件相比，IGBT 具有P+注入区，从而可以形成一个双极性晶体管，其基极电流是由 MOS 栅压控制的。IGBT的开关作用与MOSTEF 类似，也是通过施加正向栅压形成导通沟道，使IGBT导通；门极电压加负压，导通消除沟道，器件关断。需要注意的是，区别于MOSFET，IGBT 由于存在PNP 晶体管，在沟道消失后载流子的复合还需要一定的时间才能完成，该过程中会形成相应的拖尾电流，而此时集射极电压未下降至零，从而产生更高的关断损耗。

  

3.3.2 器件静态特性

  

① 静态特性实验平台  

  

本章以SiC MOSFET 为研究对象，结合与Si IGBT 的对比，从器件的工作原理入手，分别分析其静态特性及动态特性，通过实验准确测量了包括阈值电压、 导通电阻、泄漏电流、输出特性及开关特性在内的多个参数，并在\-55C 至165C温度范围内，根据温度依赖性实验结果讨论了两种器件参数的温度特性。 

  

实验选用Cree 公司的SiC MOSFET (C2M0080120D/1200V/36A)，

以及Rohm公司

SiC MOSFET(SCT2080KE/1200V/40A)

和Infineon 公司

Si IGBT  (IHW20N120R3/1200V/40A)作为实验被测器件(Device under test, DUT)。实验 将DUT 置于不同结温和工况下进行测量。实验原理如图3.17 (a)所示，当栅源极的功率脉冲和脉冲幅度变化时，测量稳态导通状态测试点的电压。保持恒 定的栅极电压，通过反复改变源\-漏极的工作条件来估算导通状态下不同工作 情况的器件特性。测试模式分为脉冲测试模式，如图4 (c)，以及导通测试模式，如图4 (d)。DUT 被置于恒温试验箱中，测试温度范围为\-55℃到165℃。DUT栅极接入 Agilent B1505d 功率器件测试仪的驱动模块，提供正偏和反偏驱动电压；DUT栅源极接Agilent B1505d 的3kV/1.5kA 功率电源模块。实验平台如图3.17(b)所示，将被测器件放入恒温箱中，通过导线连出，接入Agilent B1505对应接口。设置恒温箱温度，在不同温度下测试器件静态性能和寄生参数。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHPeXlia6n9pkzBMQnmVq68YklDPicQBn8f0kq5sx5GunaFibEQWJS5JicDg/640?wx_fmt=png&from=appmsg)

  

② 阈值电压  

  

本文用线性外推法，通过截取栅极电压Vg 传输特性曲线的正切最大值再减去漏源极电压Vds的α 倍，实验Vds\=10V，取α\=0.6，获得SiC MOSFET的阈值电压。SiC MOSFET 与Si IGBT 阈值电压的特性曲线如图3.18 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH0ibNiaB1iaveXXJic4CoEOgzbYYrq3Yd97q5xlzMXJ0nzx71hdEic8ZoXgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHFMwtKMibCS5H0uyl8wph8OY8WicOzia9KiakicuTI0vOhhz0pJicmpgmAPrQ/640?wx_fmt=png&from=appmsg)

  

对比图3.18(b)可知，SiC MOSFET 的阈值电压随结温变化相对于Si IGBT 具有更高的敏感度。结温从\-55℃到+165℃变化范围内，SiC MOSFET 的阈值电压下降了60%，因此在高温工作状态下，应充分考虑阈值电压下降带来误导通的影响。

  

③ 导通电阻  

  

SiC MOSFET 的总特征导通电阻由源极接触电阻RCS、源电阻RN+、沟道电阻RCH、积累层电阻RA、JFET 电阻RJFET、漂移区电阻RD、衬底电阻RSUB以及漏极接触电阻 RDS 相加计算得到。其物理结构如图3.19 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHzJpTJRpLlD9BuUbFjCOfx7UqyOul6HX4RSvlFBHvicckCXwqtNpJ0gw/640?wx_fmt=png&from=appmsg)

  

如图3.20，由于测试系统的误差所引起的不稳定，在漏源极电流Id较小时， 导通电阻Ron的波动很严重，当Id处于较大值时，这个波动可以忽略。实验表明，在正常的工作状态下，无论漏极电流是何种状态，漏源极间电阻Rds,(on)保持不变，并且随着Tj的增加而呈现先小幅度较小而后大幅度增加的趋势，这是由于在不同的温度范围内，起主导作用的各电阻不同。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHUX2zZxzAxtibqrUyhTqoRExy0AicFBg4Jc1ib4vfxsNUGuZtEkcvxVFzg/640?wx_fmt=png&from=appmsg)

  

④ 输出特性

  

在脉冲模式下测试SiC MOSFET 和Si IGBT 输出特性。在低驱动电压Vg\=8V 下，输出电流随温度上升而增加，但当驱动电压增加，给SiC MOSFET驱动电压Vg\=24V，给Si IGBT 驱动电压Vg\=15V，正常工作状态，将产生一个 高温衰减效应，输出电流随温度上升而大幅下降，如图3.21(a)、(c)所示。另 外，SiC MOSFET 在低导通电流下，正向导通电压与结温成二次关系；在较低 导通电压下，导通电流在小范围内与结温成一次线性相关，如图3.21(b)所示

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHOncic6CZwY7eeXLlOse17Uibf0UtVcpOCqMjeRWKfD1bHHkUOtA3ibKhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHmq3uHdSgRhTicPWIRv2tnIK9GW04yjrzynZ8REoic9StcnVZyJPE2U7g/640?wx_fmt=png&from=appmsg)

  

3.3.3 器件动态特性

  

① 器件动态特性测试平台

  

对上述同型号SiC MOSFET 和Si IGBT 分别进行双脉冲实验，实验原理如图所示，续流电感L=568μH，直流电源Udc\=400V，SiC MOSFET 栅极驱动关断电压Vgs\_off\= -5V，开通电压Vgs\_on \=19V，Si IGBT 门极驱动关断电压Vge\_off \=\-5V，开通电压Vge\_on \= 15V。驱动信号第一个脉冲脉宽21μs，第二个脉冲脉宽7μs，间隔时间5μs。图3.22 (b)为双脉冲实验平台，被测器件位于测试板下方。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHM8b0C6I4Hadlk5tiauzqJSuY0Ps77M5dq1hYFB07LSTl64KwU80dGLg/640?wx_fmt=png&from=appmsg)

  

在高频变换器中，器件的开关速度和开关损耗直接影响整机的效率，因此器件的动态特性测试是必须的。本节通过改变驱动电阻Rgs，分别测试器件的开关速 度和损耗特性。Si IGBT 测试结果见图3.23，SiC MOSFET 测试结果见图3.24。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHFs3JUUdf3piczaELaRJNIFuq6iauj1eq1rf1jfJACX92frnZshhqETgw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHSKyRwTicBMPOSqO3NkOqJV2IL1gq2OW3WNazP5iagPXpp7mkBWl8quyw/640?wx_fmt=png&from=appmsg)

  

如图3.23，图3.24，两种器件的开通速度和关断速度都随门极电阻的减小而上升，但门极电阻过小将会使得波形过冲和振荡更为明显，这是需要避免的。而 门极电阻过大将会拖长门极驱动信号上升和下降时间，导致开关速度变慢，而开关速度与开关损耗成正相关。对比测试损耗结果计算如图3.25 所示，SiC MOSFET的开关速度（Rgs\=5Ω，ton\=20ns）为Si IGBT（Rgs\=5Ω，ton\=200ns）的十分之一，SiC MOSFET开关损耗也比Si IGBT 小一个数量级。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHZLd91ROfvQQQfuKQvBSKtzOCjYX4dQL6H5EXhKmBjl8m71ESfQGwEw/640?wx_fmt=png&from=appmsg)

  

3.4 固态变压器样机效率曲线数据采集

  

3.4.1 样机功率损耗理论分析

  

由于不同的调制方法，对应DAB 开关器件的不同工作状态，本文以单移相SPS调制为例，计算整个DAB 的运行损耗及效率。

  

①导通损耗

  

当电路进入稳定工作状态后，功率器件及其二极管的导通压降都可以看成常 数，根据器件工作状态可以计算出功率器件对应的导通损耗，其推导如下：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHKtVZu3v8VGMNXZlengYuxWu2fo3iaKZ2icMAxJ9HPtuTpjFiaZoTg0Uag/640?wx_fmt=png&from=appmsg)

  

其中，PCONS 和PCOND分别表示开关器件和体二极管的通态损耗，VDS 和VF分 别表示开关器件和体二极管的通态压降，n 表示变压器变比，iL为辅助电感电流。

  

由电流表达式，可进一步得到器件导通损耗关于电路参数的表达式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH0iaM4xx3oc3wXNaYHQNS42wltleLlWOkUEPtj8pA4kUicHOwVfjwCeIQ/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHZ7ibfEw9QfUGvgFAq3zVwkleSj3bqE47oyh1kIS2uRWTebzdGfU3tkw/640?wx_fmt=png&from=appmsg)

  

由于DAB两侧H 桥流过的电流不同，器件损耗也不同，为进一步分析每个器件的损耗情况，分别计算原边和副边单个MOSFET 器件导通损耗PCONS\_P、PCONS\_S， 得到以下表达式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHhkhXArRxru4mbxlpXIk10FYTFUT6cVBwJ9sTyYlforR5kA66pwJryw/640?wx_fmt=png&from=appmsg)

  

通态损耗的主导因素是通态压降的大小，同时，开关频率fs、变压器变比n、 辅助电感L 直接相关。在设计DAB 主电路参数时，器件导通损耗是不可忽略的影 响因素，因此，在设计变压器主电路参数时应考虑对器件导通损耗的影响。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHnOd2GFGb4oiaay5aOI46C8xvRsLNOy7KgP74kNUs6AZdXyCNYuecHtQ/640?wx_fmt=png&from=appmsg)

  

为准确计算样机额定工作点的器件导通损耗，根据本章3.2 节辅助电感标定， 得到表3.2 额定点的效率计算参数，并设置器件原边电流有效值Ic\_rms \= 7.5A，副边电流有效值I'c\_rms \= 15A，并查找对应器件的数据手册，可以得到如表3.3 所示的器件导通压降参数，相应的导通损耗计算结果如表3.2 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHGiao7W362AdMwcQ9BetHL0ia68dko3AeXbUWG3rvsHo2ExfXEZ483ejA/640?wx_fmt=png&from=appmsg)

  

②开关损耗

  

当功率器件处于零电压导通（Zero-Voltage-Switching, ZVS）软开关状态下，开关损耗一般都非常小，在相对应的开关状态下的损耗可以忽略不计。但当功率 器件处于硬开关状态时，其开关损耗不可忽略。本文合理简化了计算开关损耗的方法，假设功率器件在开关过程中的电流和电压都是线性变化的，因此器件的开关损耗可以用导通或关断时电流的峰值与电压峰值进行计算。根据2.1 节器件工作状态分析结果，可将所有功率器件均视为在零电压软开关状态下导通，但存在硬开关状态下关断的情况，即非零电流关断。此时各功率器件的开关损耗表达式为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHJCO6mlHfEnPKiaXhdQUeQbiay7vHg3YxQ5GGFdnFmCkkR6W7UCmO8wXQ/640?wx_fmt=png&from=appmsg)

  

由于SiC MOSFET 不存在体二极管反向恢复损耗，由已知的电流表达式，联立求解得开关器件的开关功率损耗关于电路参数的表达式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH7K12EepeH0YczRfR0yjohAuPVuWLITj1pu00Lc4T0KgcJl8iase7DNA/640?wx_fmt=png&from=appmsg)

  

同理分析原边与副边单个器件的开关损耗 PSW\_P、PSW\_S 为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHmbiatv2F8wKsbZ5zibug1u10BCg4dUpW1Ey7xXVNSiavFBuueBgk9B01Q/640?wx_fmt=png&from=appmsg)

  

关断损耗还应该包括二极管的反向恢复损耗计算，须说明的是SiC MOSFET的体二极管不存在反向恢复损耗；而Si IGBT 的反并联二极管反向恢复损耗则是不可忽略的。带入额定功率点参数，结合数据手册参数，得表3.3 数据

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH5oWCSMlSRjLhckHE8jJwaFnibszOUibJWEcp4EVgP5FW4wicdhrZpEv4w/640?wx_fmt=png&from=appmsg)

  

③高频变压器本体和辅助电感的损耗

  

高频变压器和电感的功率损耗按照铜耗和铁耗两部分进行计算，铜耗计算主要是绕组产生的热损耗，为简化计算假设它们的绕线电阻均为常数，采用电流有 效值的平方可以计算得到对应的铜耗：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHgUtt7ibsicaQgu2Iht3GcB6Z0IxOrWJXpFMusk9RiaGgZTQArCgr7faFw/640?wx_fmt=png&from=appmsg)

  

Rau 和Rtr 分别表示电感和高频变压器的绕线电阻；Irms 表示流过它们的电流有效值。 同时，描述高频变压器单位质量的铁芯损耗的常用方法是斯坦梅兹Steinmetz 公式。为便于分析高频变压器在其他激励形式下的损耗特性，引入磁通波形系数的概念并采用改进的Steinmetz 公式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHkhTTjuxiaXOlibJdeticxemQVtUWscfgbfQ46R3x96uLM2Vks5auKytpA/640?wx_fmt=png&from=appmsg)

  

式中Fw.c 为磁通波形系数，方波激励时为π/4，铁氧体磁芯在PWM 方波下的

Steinmetz 系数分别见表3.4。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHnhhpeqzWG1njoOer0QDxaJia2Uic3wn1pcF37KLiaRaQicnB1C6Fq0icKPQ/640?wx_fmt=png&from=appmsg)

  

④DAB 效率计算

  

按上述模型计算DAB 拓扑结构的损耗，在不同的静态工作点下，通过改变功 率变压器本体损耗及对应的功率传输效率。可见DAB 在重载或轻载下的传输效率 均有下降趋势，在1kW 至2kW 区间存在功率传输效率的最优点。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHbiciaauReTjarUkxmKSq41wx64eNbJNOW0hm9jTjWRfmyrbPWtOyuvbQ/640?wx_fmt=png&from=appmsg)

  

3.4.2 样机多带载率实验

  

不同带载率实验平台与2.4 节中所用的实验平台基本一致，唯一的区别在于， 由于Si IGBT 器件工作频率上限为30kHz，为避免变压器磁芯在较低频率下饱和，Si样机的变压器磁环尺寸更大，是由两个美磁磁环O46326TC 并联，外径/内径/高度分别为 63/38/24.5mm。为直观对比不同变压器尺寸，图3.27 展示了1.5kW 工 频变压器、20kHz 高频变压器本体及50kHz 高频变压器本体。可以直观的看到随着频率上升，变压器体积和质量均急剧下降。这是由于高频变压本文采用低损耗铁氧体材料，而工频变压器是用硅钢片材料，材料损耗相差几个数量级，更易实现高功率密度；高频状态下，变压器磁芯不易饱和，可避免电压电流波形饱和畸变的问题，而不需要牺牲磁芯尺寸降低磁通密度。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHAVCJfAaVCKNQ0kJ4rchl1jkGx7U6lZkPEHszibOESdlxspd1JiamB06A/640?wx_fmt=png&from=appmsg)

  

将直流电源调整为恒压输出模式、直流电子负载调整为恒电阻输入模式，即可获得一组DC-SST 工作状态效率点。通过不断调整直流电源和直流电子负载的 输入输出值，对离散采样点进行多项式拟合，即可获得对应的效率曲线。对于高频特性优良的SiC MOSFET，实验频率可提升至200kHz，并根据3.3 节辅助电感选型原则，对不同工作频率下的辅助电感值进行合理取值，保证样机传输功率能力同时约束器件电流应力水平及电流有效值水平。 

  

DC-SST 样机，各工作频率下输入电压V1、输出电压V2、辅助电感左端电压Vh1、变压器副边电压Vh2 及辅助电感电流工作波形如图3.29 所示。由于优化了磁性元件的设计，变压器高频电压及电流波形均无明显的畸变，尤其是高频方波波形质量较高。值得关注的是，随着工作频率的上升，电压波形逐渐出现波前震荡，且死区时间的设置对波形质量影响十分明显，图3.29 (e)中死区时间1μs 的工作波形明显发生畸变，而当死区时间设置为0.5μs 后，得到图3.29 (f)中更平稳的波形。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH1z2CuZLgjLgwoc1hGia9zw0zMskK2VNnLIhia8icW4rBPV1PwjiaBgVzRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHPZtmgYOd9PJLnzleWPWrewGI1oLWnnxYeichmMbvTuEcepBcWWtjguQ/640?wx_fmt=png&from=appmsg)

  

对于Si IGBT 器件在DAB 样机中的工作情况，实验设置了四组不同负载电阻， 并改变输入电压，分析样机工作效率。由图3.30 可见，负载电阻值越小，样机带载越高，样机效率越高；同时输入电压V1 越接近设计工作点400V，工作效率越高。 但Si 样机的整体效率最高仅为90%，这是由于Si 器件开关损耗过大引起的。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHh6evbYibMAB185h5ZJ4eIlfzYqDd7BlzVXMFgRBqVljlxozBXzSvczQ/640?wx_fmt=png&from=appmsg)

  

而对于SiC MOSFET 的DAB 样机测试着重与不同开关频率下器件带载情况及 其效率变化。由图3.31 可见，50kHz 时，SiC 样机效率最高达97%；随着器件开关频率每上升50kHz，整机效率下降1个百分点，但即使工作点频率达到200kHz， 整机效率仍高于Si 样机。值得思考的是，虽然高频下的SiC 样机工作效率下降， 但高频时可进一步减小磁性元件体积，为更高功率密度的样机设计提供可能。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHibztOEWsBXD8wv4vxqhmoQAdfGrsSLGXLg2RVkDLJDgVF7vibpDhnU1g/640?wx_fmt=png&from=appmsg)

  

3.5 本章小结

  

本章从磁性元件及宽禁带功率器件两部分展开，优化DAB 固态变压器设计。磁芯选型时发现，铁氧体磁芯作为高频变压器本体材料相对于纳米晶具有较低的损耗系数并且成本低廉，在几个千瓦容量等级中是最优的磁芯材料。在磁芯尺寸设计时，采用AP 窗口法，保证变压器传输功率水平达到5.29kW。变压器绕 组设计采用Ansys 有限元对比分析层叠式绕法、三明治绕法及交错式绕法的漏磁场分布，结果表面原副边耦合程度最强的交错式绕法具有最低的漏磁场强度；并在Pspice 中分析高频变压器本体绕组漏感和寄生电容对变压器输出波形质量的影响，得到寄生参数最优的高频变压器集中参数模型，指导实际样机高频变压器绕组绕制方法。

  

本章着重分析辅助电感的有效取值，划分了以DAB 传输功率下限、器件电流 应力上限以及器件电流有效值上限的有效工作区域，分析不同工作频率下为满足上述约束条件，辅助电感须符合的取值范围。分析结果表明，工作频率越高，电感取值范围的上限和下限均减小，但减小趋势逐渐减缓。在额定工况下，50kHz时辅助电感的取值在 25~60μH，200kHz 时辅助电感须小于15μH。因此高频下， 对变压器本体的寄生电感要求非常高，由于在高频变压器等效电路中变压器本体寄生电感可等效于辅助电感，当寄生电感量超过辅助电感取值范围上限时，高频变压器工作点将无法落入有效工作区内。

  

为合理引入宽禁带功率器件，本章对SiC MOSFET 和Si IGBT 进行了详实的动静态测试。测试结果表明，SiC MOSFET 阈值电压、导通电阻及输出特性均具 有更为明显的温度依赖性，显著的变温度参数有利于器件结温状态监测；SiC  MOSFET 具有更低的开关损耗和开关速度，在小驱动电阻时更有优势。

  

本章最后评估了DAB 样机的带载效率，当工作频率达到50kHz 时，带载1.5kW

可实现97%的工作效率，实验波形无明显畸变，大负荷时端电压稳定。

  

4. 计及热耦合效应的直流固态变压器用功率器件可靠性评估

随着电力电子设备向高温高速使用环境的方向发展以及不确定因素增加、工作环境恶劣等，设备级的可靠性问题较为突出，其疲劳损坏问题也得到了广泛关 注，疲劳寿命预测也在机械、材料、建筑等众多领域得到广泛应用，且功率器件的失效所占比重较大。因此，本文主要考虑DAB 中功率器件的失效和寿命评估。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHVgkwD5ibd10X3Bia93tPicKf2X0nmrtvvClFuQJU29DHMYbgqGPliafiavw/640?wx_fmt=png&from=appmsg)

  

图4.1流程图说明了DAB用功率器件寿命预估的方法。首先，根据第二章DAB的电压闭环控制在MATLAB中实现单移相控制，并将控制信号输入PLECS电热模块中搭建的DAB主电路；同时，利用Comsol热传导DAB及散热器模型提取耦合热阻参数，从而设置PLECS器件及散热器热阻；为接近DAB应用于配网时承受的负荷波动情况，仿真的负荷波动采用某地区实际日负荷曲线数据。对仿真得到的结温数据进行雨流计数，使用Coffin-Manson模型，得到仿真时间内器件产生的损伤， 计算各器件的寿命预估值，进而评估DAB设备的运行可靠性。

  

4.1 SiC MOSFET 与 Si IGBT 寿命对比评估

  

Si 和SiC 芯片的不同热机械性质使其对应器件具有不同功率循环能力。而功率循环测试是耗时的，并且需要许多实验样本以获得足够的数据从而确保对寿命 预估的精确预测。在SiC 功率器件测试中，考虑到硅和碳化硅器件之间的价格差异，进行大量的功率循环测试将耗费昂贵的费用成本。尽管存在上述问题，但是预期在未来对SiC 器件的功率循环能力和寿命的研究势在必行，尤其SiC 功率器件将极可能是硅功率器件的可靠替代物。因此，分别对Si 芯片与SiC 芯片在相同工况下进行寿命预估并对比，并引用现有实验数据，对Si 芯片的寿命预估进行实验验证，从而得到有效的SiC 芯片寿命模型，为SiC 功率器件应用于DAB 等特定设备中的可靠性评估做铺垫。

  

4.1.1 有限元可靠性评估模型

  

由于难以直接测量焊接层中的应力或应变，本文采用有限元模型在Comsol 软 件中评估焊接层中的应力。 测试芯片附着的铜层框架长宽尺寸为11mm×11mm，在芯片与铜层之间，由厚度为120μm 的SnAg3Cu0.5（SAC305）焊料层将裸片附接到框架。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHVgiap9jnfa4NXjicMlr7bO76SRkrdE6ACDks1xSkhWkbGb2nj5HBw6VA/640?wx_fmt=png&from=appmsg)

  

仿真选择具有相同的电流和电压额定值的SiC MOSFE 芯片CPM2-1200-0080B

和Si IGBT 芯片SIGC41T120R3E。芯片的尺寸示于表4.1 中，表中还确定了主要的热机械性能参数以及基底的尺寸和热机械性能参数。图4.2 为SiC 和Si 的测试载体模型，可明显观测到两种芯片尺寸的差异。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH7iaS4xTa6SJdHGwpYZRw5RQ7EtzTicE3kc0OuFGQiaibSaxpqYMmawHacA/640?wx_fmt=png&from=appmsg)

  

除焊料以外的所有材料均具有弹性性能。焊料层的粘塑特性使用Anand 粘塑性 模型，以计算von Mises 应力，蠕变应变和蠕变能量。这是一个广泛用于评估焊接应力的模型，考虑物理应变和温度效应，并假设塑性流动发生在所有非零应力值。 该模型考虑了应变率、应变硬化或软化特性以及晶体织构及其演化的物理现象， 且不需要明确的屈服条件。

  

Anand 粘塑性模型参数示于表4.2 中，其中s0是初始应变抗力，Q/R 是活化能 与玻尔兹曼常数的比率，A 是指前因子，ξ 是应力乘数，m0 和ŋ 是应变速率灵敏度和应变速率灵敏度的饱和值，h0 应变硬化/软化常数，s 是应变抗力饱和值，a 是硬化/软化的应变速率灵敏度。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHrIm9gyPOxGd7yoDGEfPazk4NQ3YdTzav8kdxctLA6PuTYtd0U7tMIA/640?wx_fmt=png&from=appmsg)

  

从3-D 测试载体中获得2-D 模型的过程如图4.2 所示。材料每一层的中心是重 合的。通过沿着芯片的长边的方向从对称中心线平面切割获得2-D 截面。该截面包含来自焊料层的不同位置的信息。Comsol 中的2-D 建模的计算方法和3-D 是近似的，2-D 模型在深度上具有作为“立方体”的厚度。仿真时，在对称中心线中选择2-D 部分，在有限元计算中假设为“立方体”而非对角线，使得2-D 模型更加接近实际。在切割平面的2-D 对称截面中，热机械性能也是对称的，为加速仿真进度节省计算机资源，可选取仿真截面对称轴的右侧一半进行仿真。与用于FEM中的应变能的计算相比，这种2-D 简化模型已被证实比3-D 模型具有大于90％的精度，并且可以代表焊料层的3-D 疲劳分析。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHeJqxsqia3UNUtYFlpUmetcj6VibmGhhv9ANSYEQMVElvN4JJ1naSia1lg/640?wx_fmt=png&from=appmsg)

  

经简化的2-D 对称有限元模型如图4.3 所示。由于较高的应力集中在芯片/焊料界面的边缘上，因此对该区域使用更精细的网格剖分，从而以更高的精度评估热应力和应变。分布在芯片/焊料界面上（图4.3 中沿AD 方向）的网格单元数量 分别为：SiC 模型50 个网格单元，Si 模型60 个网格单元。分布在焊料边缘上（图4.3直线AB 上）的网格单元数在两种模型中均设置为10 个。 Si 或SiC 模型中的焊接边缘中的每个网格元件的面积都为50μm²，从而可以针对相同的网格密度计算疲劳指标。有限元模型的边界条件设置如下：整个芯片热源是由芯片体积均匀分布的一般热源定义的；铜层的底部是辊固定；对流热通量定义为模拟底部铜表面强制水冷（板长为0.5m，流速为3m/s）的散热；模型的左侧边缘是对称边界；其余的开放表面被设置为自由移动而没有约束，并且将其设置为热绝缘以减少干扰因素。

  

4.1.2 疲劳损伤分析及寿命模型

  

功率循环可以分为快速循环和慢速循环。快速功率循环主要用于测试芯片附着焊料层的可靠性，而慢循环则使得基板焊料层上产生疲劳。在仿真中，芯片附着焊料层是可靠性的主要关注点，因此选择了快速功率循环。快速功率循环由 芯片中的脉冲功率周期性地触发几秒钟。快速功率循环使得芯片附着焊料层经受频繁的温度循环，并具有明显的温度波动。为了比较Si 芯片和SiC 芯片的功率循环期间的不同应力以进行可靠性评估，仿真使两个芯片经受相同的结温曲线， 由于不同的热机械性能，在Si 和SiC 芯片上将产生不同的热机械应力。

  

为了通过实验测量来验证该仿真结果，本文选择了特定的测试条件来约束变 量。所选择的平均结温为Tj,mean\=90℃，温度偏移Tj\=120℃。仿真中的结温采样点为图4.3 所示的2-D 对称模型中芯片的上表面的左侧角处的温度。考虑到Si 和SiC的不同电热特性，必须调节施加的脉冲功率负载以在两种材料的功率循环测试模拟期间获得相同的温度分布。在整个Si 芯片上均匀地施加振幅为2.75×1010W/m³的脉冲功率负载，对SiC 芯片则将负载调整为3.24×1010W/m³。脉冲功率负载的周期为2s，占空比为50%，如图4.4 所示，图中表示了每个芯片施加的脉冲功率和得到的对应的结温及结温偏移量。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHEDXyOontDRp0ib8PSWUA9SeywLrh871KHSnXx8HTJ552ibghwNW4TH5A/640?wx_fmt=png&from=appmsg)

  

仿真初始温度从室温开始，经过10 秒的模拟时间达到稳定，最大结温峰值点 为Tj,MAX\=420K，模型的温度分布示于图4.5。芯片、芯片附着焊接层以及芯片下方铜层的温度比模型的其他部分高得多。这些部件在整个模型中具有较高的温度， 并且承受较大的温度偏移量。温度偏移量直接导致由热膨胀系数失配引起的疲劳应力，并且高温可以导致在芯片焊接层承受更多的应力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHXMQQktJjGbHHStsWfhFicO636IdpSDug9lTglqC0ResYGjbATMwwxvg/640?wx_fmt=png&from=appmsg)

  

经受较高应变的焊料点是焊料/芯片界面的顶角处，因此在有限元模拟期间将监测该点的应力演变。芯片焊料层顶角的von Mises 应力，蠕变应变速率和蠕变能量密度示于图4.6 中。图中可以观察到温度的瞬态响应是导致热机械应力的主要原因，在加热瞬变期间比在冷却瞬态期间产生更高的von Mises 应力。von Mises 应力由材料之间的热膨胀和热膨胀系数不匹配引起，并且其在每个周期期间随温度波动。蠕变应变和蠕变能量由材料性质确定并且随着温度和应力增加而增加，并且它们在每个循环期间累积。蠕变应变率和蠕变能量变化率不同导致蠕变和蠕变能量的差异，在功率循环期间焊料层的蠕变和蠕变能量示于图4.6 中。疲劳可以通过循环应力来评估，例如von Mises 应力循环的幅度，蠕变应变和蠕变能量在一个循环期间的累积。在SiC 模型中，焊料层的顶角承受的循环应力（70MPa）是硅模型（32.1MPa）的2.2 倍。在一个循环期间，SiC 模型中的焊料拐角中的累积蠕变应变（5.85×10-⁴）是Si 模型（2.34×10-⁴）中的2.5 倍。这意味着SiC 器件焊料比相同结温度条件下的Si 器件承受更多的蠕变疲劳。通过蠕变能量评估焊料层的疲劳累积，可以看出，相同温度循环时SiC 器件的焊料层的累积能量密度（15891 J/m³） 是Si 器件（4459 J/m³）的约3.6 倍。因此，与Si 相比，蠕变能量可以在SiC 模型中产生更为严重的疲劳损伤，该指标评估区分度最高，因此用作评估SiC 器件寿命的疲劳指标。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHB593sIrvgHsEURrpQngaRkwF3OtgUSKlgu48HDJ5dVM3VCnPzGO1zQ/640?wx_fmt=png&from=appmsg)

  

Morrow 模型提出了疲劳寿命和蠕变能量之间的指数关系，使得焊接层寿命预估取决于蠕变能量。当给定一个循环的累积蠕变能量，失效循环的次数可以从下式获得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHWXHHUTnPPo2Kq7yWBCryIfwPIK7oqUttY1uQxiabTGyWA0a0abKhYBg/640?wx_fmt=png&from=appmsg)

  

其中，Nf 是失效的周期数，Wc 是在一个周期中累积的蠕变能量，Wf 是焊料材料的疲劳能量系数，m是疲劳能量指数。对于本研究中使用的焊料SnAg3Cu0.5，引用现有功率实验结果，在仿真中设置相同功率和温度条件，当对应得到相同寿命Nf时，获得准确的材料 Wf 和m 的值，并在表4.3 中给出。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHegUMx3u5tNYicj0IE7O4HKMwGe7Fmobh8iaIGRicSZB1eY8wf4icYLjMgg/640?wx_fmt=png&from=appmsg)

  

4.1.3 寿命预估结果验证与对比

  

基于Morrow 模型，使用有限元模型计算焊料层部分的寿命分布，如图4.7 所 示。蠕变能量密度分布表明，SiC 器件的焊料层顶角具有更显著的疲劳效应，寿命计算结果中焊料层的上角寿命最短，这是由于实际焊料层形变过程中，应力积累是由焊层中心向边缘集中的，在顶角处达到最大值，该现象在仿真与实验中的结果是一致的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHrFqf34MPzzIQ2Rz7GQmicoGKOpEf78nh4R9EQswvnic0BH4fE9xMkPNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHibZ8vIKylOmiaXc7libx70OEcPfaib8xotPoMWCVUKeQ53VAu5Wl0m3Tkg/640?wx_fmt=png&from=appmsg)

  

由于蠕变能量不能通过实验测得，而结温可以通过温度敏感电气参数（TSEP）来换算，因此本文需要建立结温波动ΔTj与器件寿命的关系。当结温波动小于140°C时，可以通过 Coffin－Manson 模型进行分析预测，其表达式为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHaNRb9AqlRPqatsnFos2TC1MFs5kc22oMkfuiczZsKI8kSFUGdXSiaFrQ/640?wx_fmt=png&from=appmsg)

  

式中的参数α、n 可通过实验测量以及数据进行拟合，该模型以器件结温波动变化量ΔTj 作为自变量，对于DAB 样机日负荷波动下的寿命预估具有足够的精确 度。根据Morrow 模型的Nf (Wc)关系，即可根据仿真输入变量ΔTj确定对应的Si器件及SiC 器件的焊层预估寿命Nf，进而确定Nf (ΔTj)曲线。可对Coffin－Manson模型的参数 α、n 进行拟合，得到的拟合结果如表4.4 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHFJibOhESzWv4xoEsHxfK7UYo1g6iaibXt2mkia4BcAjzy2Xia98rA7bicmIw/640?wx_fmt=png&from=appmsg)

  

为验证仿真结果，本文引用了现有的Si IGBT 功率器件的功率循环测试结果进 行分析。在文献\[73\]中，实验对硅IGBT 功率器件进行了功率循环测试，并且获得了不同结温偏移和平均结温下的焊料层寿命。实验电路如图4.8 所示。IGBT 器件始终保持导通，加热电流由辅助开关控制用于加热器件。当加热电流关闭时，器件进入冷却阶段，在每个周期中通过结温、外壳温度和功率损耗计算用作焊料层退化指标的热阻。结温测量方法为，在主控制开关关闭后，使用低电流（Isense\=100mA）下的正向电压作为温度敏感电气参数（TSEP）来换算结温。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHWHh2gmKDnaoY0N0GYic2iacRsnCdtkM6gaOZiciczGlpw9mT6puZq5S9jA/640?wx_fmt=png&from=appmsg)

在功率循环测试实验中，平均结温均设置为Tj,mean\=90℃ ，测试器件为具有相同焊料材料SnAg3Cu0.5的IGBT 器件，其中9 个经受结温波动在∆Tj\=90 ℃附近， 另外15 个相同模块经受结温波动在∆Tj =120℃附近。在功率循环测试期间监测每个模块的热阻，并且当热阻增加20％时认为器件失效。所有IGBT 模块在功率循环测试下的循环次数如表4.5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHIcKkEAoN4BqqZpK5b9ud07K8r3n0zrxibnN0bhZrDMreBXia3tVxdSJg/640?wx_fmt=png&from=appmsg)

实验结果表明，焊料层的寿命随着ΔTj 的增加而减小，与Coffin-Manson 模型所预测的一致。焊料的寿命测试设置平均结温Tj,mean\=90℃，结温波动范围ΔTj 从90℃到140℃。老化实验的失效标准为热阻增加20％，对应于有限元模型中焊料层23％的裂纹长度。实验和Coffin-Manson 模型预测结果如图4.9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHIfDdk83IPTNGxC2e20yHFSClSNBTanxUYvQr0MBzyvvYsNQz9QNFxA/640?wx_fmt=png&from=appmsg)

基于有限元的Coffin-Manson 预测结果与实验结果吻合，因此有限元可用于功率循环期间Si 器件焊料层的寿命和疲劳评估。由此可以推断，该模型也可以用于评估SiC 器件的热机械性能和老化过程。图4.10 还绘制了对于每个ΔTj 对应的SiC和 Si 器件的预测寿命的比率。可见SiC 焊层寿命在相同的温度条件下与Si 焊层寿命成二次相关。当ΔTj\=90℃，SiC 器件的寿命仅为Si 器件的寿命的60％；但随着温度波动ΔTj 增加，SiC 和Si 的寿命最终变得相似，比率接近1。该模型的仿真结果为SiC 器件可靠性评估和寿命预测奠定了基础，为本文下一节SiC 器件应用于DAB样机后的寿命评估提供了理论支持。

4.2 计及多热源耦合的 DAB 热网络模型

4.2.1 DAB 有限元热模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHBKEQXViasJ4y5zqkA3z09D5C7JcPNiaGa6sJNwicsOcF9OsOKVMWwibkMw/640?wx_fmt=png&from=appmsg)

为了分析DAB样机器件内部芯片间可能的热耦合作用，本节利用Comsol构建 八个功率器件及散热器1:1尺寸三维有限元模型，仿真分析芯片在热耦合作用下的结温变化，进而根据结温变化提取耦合热阻参数。为使仿真模型最大程度接近样机实物，仿真设置1:1尺寸三维有限元热传导仿真，仿真模型结构及剖分如图4.11(a)所示，DAB一次侧器件分别标记为P1、P2、P3、P4，二次侧器件分别标记为S1、S2、S3、S4，其距离位置如图4.11(c)所示。功率器件、焊层及散热器剖面图中各层材料的参数如表4.6所示，假设各层材料结合完好，无相对滑移。芯片与焊层尺寸与4.1节的模型完全一致，铜层尺寸参考TO-247封装，散热器尺寸与样机一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHgUWY7EXrPv1rrqlQmCwUhX9L9eIblLeg8oicSkhy2r4xYpQ0a6pmoqw/640?wx_fmt=png&from=appmsg)

根据上述表4.6所示的各层材料尺寸和特性参数，本节建立了DAB的三维热仿 真。由于铝键合线对功率器件温度分布的影响很小，因此模型忽略其影响。考虑DAB变压器原边全桥器件和副边全桥器件的功率损耗不同，根据3.4.1节的计算结果，当DAB传输功率为3kW时，由于副边电流有效值大于原边，Si IGBT原边芯片上施加功率损耗大于副边芯片功率损耗，环境温度为25℃，此时IGBT各层材料及散热器的热分布情况如图4.11(b)和4.11(c)所示。由于器件各个位置的温度分布是不均匀的，以芯片层中心点温度作为器件结温，DAB副边内侧Si IGBT器件Q2结温最高，为81.94℃。对于同侧的相邻器件，放大器件温度分布后可以观察到，位于中心位置的器件结温高于位于边缘位置的器件芯片结温，这是由于热耦合对器件结温产生了温度累积。并且副边器件结温高于原边器件结温。同样对SiC MOSFET的电热模型施加对应的热损耗功率，得到不同功率器件的DAB中，器件结温、壳温上升曲线，如图4.12所示。仿真模型中取铜层与散热器接触点侧面位置作为壳温测量点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHb6J6s69hBibqjnKhNJqthibvOea8vIe2eH33A7j3Nc6tazFYxbVZlTyw/640?wx_fmt=png&from=appmsg)

为了验证DAB功率器件有限元分析模型的有效性，本文以DAB样机为例，在上述工况下，带相同阻性负载，待样机进入稳定工作状态后，采用红外仪捕捉样 机功率器件侧面壳温，并与相同工况下有限元模型得到的测试点温度进行对比， 图4.13为红外热成像结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHjqExKHxwcKqNbm9DiaIsklRwtcYFpOdVrfiaqmc1Qkeib2iah0RHibQ6ORA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHWCdY5EYjnJgzfHbtKST4vAWVSgPTSmsw6GTMria68JuUXicwibIZ48eQg/640?wx_fmt=png&from=appmsg)

对比图4.13 (b)和4.13 (c)，相同负载功率下，Si器件的壳温偏高，并始终高于SiC器件，这是由于Si器件较大的开关损耗决定的。图中捕捉到的器件为编号S1和Q1两个器件，对比图4.12中的器件温升稳定值，红外热成像结果与仿真结果的数据十分吻合，Si模型壳温最高温度偏差仅为2.85℃，SiC模型壳温最高温度偏差仅为1.10℃，说明了本文DAB有限元仿真模型的有效性。另外，红外热成像图中的驱动模块仅有28℃左右，证明驱动模块工作效率非常高。

4.2.2 DAB 耦合热阻提取

由于DAB 在实际运行时各个器件存在不可忽略的热耦合。本节基于硅芯片发 热和单独传热的热网络，根据耦合热阻抗矩阵理论，分析建立了考虑多热源耦合影响的热阻网络。根据多热源耦合热阻网络的矩阵关系，在DAB 有限元热模型中提取各个器件的自热阻和耦合互热阻参数。

针对功率器件层状结构，基于芯片独立发热和传热的常规热网络模型见 图4.14。对Q1、Q2、Q3、Q4、P1、P2、P3、P4 芯片依次编号为芯片1、芯片2 至 芯片8。图中，Tj1 为芯片1 的结温，Zth\_jck 为芯片1 的结壳热阻抗，Zth\_ch1 为芯片1对应的管壳\-散热器之间的硅脂热阻抗，Ploss\_1 为芯片1 的功率损耗，其余依此类 推；Zth\_ha 为散热器热阻抗；Ta 为环境温度；Th为散热器温度；Tc 为壳温。由图4.14(a)所示功率器件及其散热器的热网络模型，可以得到芯片 k 的结壳热阻抗表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHZDqvNl1nodCco4MI95wl29jCTR8yQ6CfyurcqSDSTK2kamdRw3m1Jg/640?wx_fmt=png&from=appmsg)

在上述公式中代入结温Tjk 随时间变化的数据，可以得到结壳热阻随时间变化 的曲线，对该曲线按照热阻Foster 模型进行拟合，即根据图4.14(b)所示器件结 壳热阻抗的热网络模型，功率器件中某个芯片k 的结壳热阻抗Foster 四阶计算式可表示为: 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHsC7qZvicCEEmujaVrjyfmBjyBNWLO3DYic5Hk09cPiaqdBvicbrM87GFmw/640?wx_fmt=png&from=appmsg)

其中，τki、Rki、Cki分别为芯片k的热时间常数、热阻和热容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHYNz2cxESsImCC0IMGQjq8XmR32doibDQJicup5D4nibwEicHXhetDQJWFQ/640?wx_fmt=png&from=appmsg)

从图4.14及式(3.35)可知，目前常规热网络模型没有涉及多芯片间的热耦合影 响，而在三维有限元热传递仿真中发现，对单个芯片施加上述功率损耗，周边未被施加功率损耗的芯片具有明显的温升，最高达5℃。因此各个芯片间的热耦合不应被忽略，本文采用等效耦合热阻抗，代表某个芯片施加功率损耗时，周边的目标芯片稳态最高结温的增量，最高结温从Ta升至Tjn耦合热阻计算方法为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHGGnjreVsEVlRtL2047NcoP7njBc08ZHzbHk7G3F8QmkhkNGG9VzxqA/640?wx_fmt=png&from=appmsg)

对于多个芯片，考虑多热源的耦合影响，类推单芯片时的定义，可得各个芯片的 等效耦合热阻抗矩阵 Zcouple 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHoQlicZmnibVmnSNC4OJ8GfCaicG6Ho8w5yXIpudAUT5t6voz2QqaegwCQ/640?wx_fmt=png&from=appmsg)

其中，Zth（i,j）表示芯片 j 对芯片 i 的耦合热阻抗，Zth（i,i）表示器件的结壳自热阻抗，

Zself 可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHRhzbX9Rhh4kTn6otd16tibsJTBWjcAuOLMH2BumfIKaibJUhKqibPnCgQ/640?wx_fmt=png&from=appmsg)

在图4.14 (a)的基础上，考虑芯片之间的热阻耦合，则应在上述热网络模型中添加耦合热阻部分，添加后的拓扑结构如图4.15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHIMS3gricmgl7Ztib7jI2N4ygIU8cd5Ee0SL52icfueUrO7zdmlKIGDMAg/640?wx_fmt=png&from=appmsg)

本文提出的改进热网络模型包括了目标芯片周边各个芯片热源对其产生的热耦合影响，同时模型结温参数均采用有限元方法获取，其结温探测点可灵活控制，可实现多功率器件的DAB 热阻更为有效的评估。为准确得到改进热网络模型中的自热阻抗及耦合热阻抗参数，采用有限元法分析其功率芯片间的损耗和结温关系。即通过在某芯片上施加恒定损耗，监测该芯片及周边芯片的稳态结温最大值，具体流程如图4.16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH1a4LeImoPhiaRgTQPjgk5e28X6Te4yf8btTehvrVWNNwPhLBKrZ0k6w/640?wx_fmt=png&from=appmsg)

为提取功率器件自热阻抗参数，单次仿真仅对一个器件施加功率损耗，并对芯片结温及器件壳温进行采样，结壳之间的温差用于计算器件的自热阻抗参数， 两芯片间的结温温差用于计算互热阻抗参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHiahiahPz560OexKZUTPBjXl6OFxdrX8Td3brXZn83ibDnGzH3gNzbYkhQ/640?wx_fmt=png&from=appmsg)

根据公式(4.8)及热阻Foster 模型可得表4.7 Si IGBT 器件自热阻Rth(j-s) 包括芯片到外壳热阻Rth(j-c)和外壳到散热器热阻Rth(c-s)）。由于计算所用温升数据均由有限元热模型得到，为确保仿真模型的准确性，本文对照了样机所用器件自热阻抗，取样机中器件数据手册作为标准值，Rth(j-c)\_Si\=0.48℃/W，Rth(j-c)\_SiC\=0.65℃/W，仿真过程中始终保持单芯片加功率损耗时，器件结壳热阻保持与数据手册同步，从而 确保器件耦合热阻计算的准确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHbWeuXCNpic73s2GBgj7kfkWrOhzzXbwcIXxnZSkHLyzz5HaIm0ZVUhw/640?wx_fmt=png&from=appmsg)

为合理简化计算量，本文采用器件的稳态热阻，即Foster 多阶热阻中各阶热阻之和，代表器件稳态自热阻和互热阻。在此基础上，通过采样不同芯片结温参数，根据公式(3.37)可以得到DAB 中八个Si IGBT 器件稳态耦合热阻参数，如表4.7、表4.8 所示。表格对角线位置即器件自热阻，包括芯片到外壳及外壳到散热器热阻，各个器件参数值没有明显差异，并与器件在散热器上的位置无关，Si 稳 态 自 热 阻 值 为Rth(j-s)\_Si\=(0.75~0.78) ℃/W ，SiC 的稳态自热阻为Rth(j-s)\_SiC\=(0.88~0.92)℃/W，器件结壳热阻严格符合数据手册标准，可以认为仿真模型的参数与样机实际的热阻参数基本一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH4icEq5nP8q1icDznmO3pPic0J7BDKrgvKOsmogovmkm4abmeGyryYrqJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHOkDlOCuVbGQlbS51wwDWoicFeK6k7sYIWcOlhcdcibp1FbmyiaFUrg8oQ/640?wx_fmt=png&from=appmsg)

对表4.7 数据进行拟合，得到图4.17 耦合热阻三维关系图，由图4.17 可见， 耦合热阻幅值随器件相对位置距离增大而明显减小，成二次下降，位于异侧位置的器件（\>6cm）耦合热阻几乎为零，可以忽略不计。而同侧器件，尤其是相邻位置的器件，耦合热阻至少占器件自热阻的14.5%，其热耦合不可忽略。SiC 的耦合热阻分布与Si 的分布趋势类似，值得注意的是，本文选用的SiC 器件热阻较Si 器件大，相同功率损耗条件下，较大的热阻会带来更高的结温温升，但由于两种器件的功率损耗条件相差一个数量级，因此有必要进一步验证相同带载条件下两种器件的温升情况，从而客观评估器件实际运行中的可靠性。

4.3 配电网直流固态变压器用功率器件寿命评估

本节针对DAB 样机中的功率器件，在日负荷波动负载下，根据耦合热阻网络 产生的热损耗，对应准确的器件结温平均值及结温波动值，使用Coffin-Manson 模型，进行严密的寿命预估计算。

4.3.1 DAB 带载联合仿真

在准确提取热耦合参数的基础上，本文对Si IGBT 器件及SiC MOSFET 器件的DAB 样机建立了精确的热耦合电热模型，考虑器件自热阻、耦合热阻及散热器热阻，结合日负荷波动曲线的实际工况，在SPS 单移相调制、电压闭环控制下，实现了基于MATLAB Simulink 及PLECS 的联合动态仿真，动态监测器件实时结温，通过雨流计数获得器件结温波动数据，套用Coffin-Manson 模型，忽略无源器件的影响，预测DAB 样机的使用寿命，并与Si 器件的DAB 样机进行了对照。

由于DAB 固态变压器应用场合为低压配网，因此本文采用某地区低压配网的居民用电日负荷作为载荷，日负荷曲线如图4.18 所示，曲线包括全年数据，采样时间间隔为15 分钟。为体现全年日负荷曲线的走势，并保留负荷的波动特性， 取每个采样时刻的众数，进行差值拟合，得到众数日负荷曲线，如黑色曲线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHWPUPf9QWldkQcuMNZPvjFIm1ibJJLzj8yokgSAV59ZYx5Xia5pDGviatA/640?wx_fmt=png&from=appmsg)

本文搭建了MATLAB 与PLECS 的联合动态仿真。在MATLAB 中嵌入PLECS后，利用 PLECS 对器件结温的在线监测功能，可准确获得带载Pload（t）情况下的器件结温参数。MATLAB 主要实现的功能为单移相电压闭环控制，产生PWM 调制信号，控制DAB 主电路器件。PLECS 主要实现的功能是，搭建主电路，根据有限元仿真参数提取结果添加每个器件的Foster 热阻热容参数以及耦合热阻热容参数， 并通过探针实时监测器件结温变化，获得准确结温数据。电路拓扑见图4.19。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHeDNpggMX3wSSbb77Y0d4wcQSGPOMT1PLVBV4icdu6bIz6A9MTO381xQ/640?wx_fmt=png&from=appmsg)

各个器件结温采样结果如图4.20 所示，由于器件分布的对称性，图中只绘制 了DAB 原边全桥器件S1、S2 和副边全桥器件Q1、Q2 的结温波动曲线。为最大程 度接近DAB 变换器应用于配网时承受日负荷波动的真实工况，联合仿真将日负荷曲线标幺值，以1.2 倍 DAB 额定传输功率为基准值进行归算，模拟设备承受的实际负荷工况。由于日负荷曲线的波动性相比于风电等应用场合更为平缓，图4.20中结温波动集中在负荷峰值附近，需要说明的是，结温存在 1~5℃的高频扰动，幅值较小从而图中并不明显，但为确保寿命预估精度在下文的分析中小幅值波动仍然被计及。对比4.20(a) Si IGBT 结温波动情况，4.20(b) SiC MOSFET 的结温波动较为平缓，结温幅值较低，这是由于相同负荷条件下，SiC 器件的功率损耗远小于Si器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHibfanBHKDnledXiamWcOSAIiblhpshjk3YgBudoSK4CD3XvXDNudcJGfw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH5VyYZqXuVribNG36KGd2GgBH2VxfrwGuGU3eom1t1pIG4oCcVd1r7Gw/640?wx_fmt=png&from=appmsg)

4.3.2 功率器件可靠性评估

① 雨流计数

为分析不同ΔTj 对应的结温波动频次Ni，需对结温波动采样数据进行雨流计 数。雨流计数是常用的疲劳分析循环计数方法，由Endo 和Matsuishi 提出。把 结温\-时间顺时针转过90°，时间坐标轴竖直向下，如图4.21 所示，样本记录犹如一系列屋面，雨水顺着屋面往下流，故称为雨流法。雨流法有下列规则：

如果雨流起点为峰值： 

1) 雨流流到峰值处竖直下滴，一直流到有一个比开始时幅值更大的峰值处为 止。例如，图4.21 中蓝色雨流从B 点开始，终于D 点。 

2) 当雨流遇到来自上面屋顶流下的雨流时，就停止流动。例如蓝色雨流始于F点，但在遇到E 点屋顶流下的雨流时就停止了。 

3) 雨流可以一直流动直至遇到1)、2)中的终止条件。

如果雨流起点为谷值：  

 4) 雨流流到谷值处竖直下滴，一直流到有一个比开始时幅值更大的谷值处为 止。例如，图4.21 中红色雨流从A 点开始，终于E 点。 

5) 当雨流遇到来自上面屋顶流下的雨流时，就停止流动。例如红色雨流始于C点，但在遇到B 点屋顶流下的雨流时就停止了。 

6) 雨流可以一直流动直至遇到5)、6)中的终止条件。

每一雨流的水平长度是作为该结温幅值即ΔTj的半次循环计数的，在长时间温 度波动中，半周期将会遇到与之匹配的另半个周期形成一个完整全周期。根据上述流程即可编写雨流计数算法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHqneEtu3eKx4VCKMqicIZYibzJvSCvwUm1xqI8WbqoY2ffGZ8vu0mYwDw/640?wx_fmt=png&from=appmsg)

对图4.20 的结温波动数据进行上述的雨流计数，可以得到如图4.22 所示的雨流计数结果。图4.22 仅显示了4 个器件，这是由于DAB 样机布局的8 个器件位置 是完全对称的，原边互补导通的的器件S1 和S4 恰好均位于靠近散热器外侧，因此认为他们的结温波动情况是一致的。同理，位于原边内侧的S2 和S3、副边外侧的Q1 和Q4 及副边内侧的Q2 和Q3 均具有相同的实时结温。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHDJZib9Jbh6JEG9CcM2hMSkQMalHGiaicnRSLWC85uJggVrWByYk1ylD7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHPrpSXTkaqWib1Y9Ro2VibDiapeTawECKLbrZh0meGUDQPiaMWPSN1iauuEA/640?wx_fmt=png&from=appmsg)

②损伤计算

由图4.23 可见，结温波动集中在0℃~10℃，少数分布在10℃~30℃，极少数分布在30℃~50℃。但经过器件寿命模型计算Nfi，再通过式(4.10)计算结温波动对 器件产生的损伤Di 时，极少数分布在30℃~50℃的结温波动占有极大权值。结温波动频次如图4.23 所示，及其对应结温波动产生的损伤如图4.24 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHDWVWlzXBJM0vibrcdUjgqdOc5ya2Zl2kxOa5nnto7SNOqgY2A7Emxpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH54JD0FGRWYv4PU2Uw1A3ZRCLH1z0lj9RSgkhv0RnZQvXGXwOiapL64Q/640?wx_fmt=png&from=appmsg)

⑤寿命计算

根据仿真时间内各个器件的损伤累积D，和仿真时间Ttest\=24h，可得到器件预估寿命A=Ttest/D，各器件寿命对比如表4.9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHGib8wJ7Ew1ficXUiahF4Iz9UicmiczknPxxjH5YBiah1NlUqmcguPNMSnz8g/640?wx_fmt=png&from=appmsg)

根据表4.9 中的寿命计算结果对比，分析可发现DAB 原边的SiC 器件比Si器件寿命高 1.99 倍，DAB 的副边SiC 器件比Si 器件寿命高4.47 倍，首先直接说明了SiC 器件的应用对DAB 拓扑DC-SST 可靠性的显著提升，同时也可合理推测在更高负载水平下，ΔTj 波动范围更大的工况中，SiC 器件的优越性将更加明显。

原边器件S2 比副边器件Q2 的寿命大数倍，这是由于在DAB 中原边器件所承受的电流水平仅为副边的一半，器件损耗水平也较低，对应的器件结温波动也较为平缓，而结温波动与器件寿命成指数关系，因此得到的器件寿命差异较大。另 外，针对原副边器件寿命比值，SiC 器件仅为1.33 倍，而Si 器件则接近3 倍。图4.9很好的诠释了这个问题，图中Si 器件的Coffin-Manson 拟合曲线斜率较SiC 器件的更陡，因而当原副边工况发生差异时，Si 器件因ΔTj 不同而带来的寿命差异更为显著。

内外侧器件的对比结果发现，外侧器件比内侧器件寿命长8%，该部分差异主 要来自热耦合影响，因此考虑器件之间热耦合效应计及耦合热阻是有必要的。而外侧器件寿命更长的原因，是由于外侧器件与同侧其余三个器件的相对位置更远，耦合热阻更小，器件结温受影响程度更低。

4.4 本章小结

本章围绕DAB样机展开可靠性评估，针对样机中的功率器件进行建模与分析， 同时对SiC MOSFET 及Si IGBT 器件建立了精确的Coffin-Manson 寿命评估模型。 在建立Anand 粘塑性模型计算器件芯片焊接层老化等效应力时发现，SiC MOSFET由于其芯片更高的杨氏模量，使得器件最为脆弱的芯片焊接层因温度波动承受更大的蠕变能量，导致在相同结温波动条件下，SiC MOSFET 寿命低于Si IGBT，在结温波动90℃时，SiC MOSFET 寿命仅为Si IGBT 的60%左右。

但在DAB 拓扑的DC-SST 中应用时，由于高频下SiC 具有更低的损耗特性， 相同负载工况下，SiC MOSFET 结温波动明显更为平缓，且结温波动与寿命预估 值成指数关系，最终得到配电网日负荷工况下，SiC MOSFET 器件寿命远远超过Si IGBT，说明SiC MOSFET 在配电网的固态变压器中具有较高的应用价值。

5. 总结展望

5.1 工作总结

在日趋成熟的直流配电网中，作为能量路由器的DC-SST 是控制能量流动的核心设备。相对于工频变压器，DC-SST 推广应用面临的两大瓶颈即提升工作效率 和确保设备可靠性。本文从上述问题着手，展开了DAB 拓扑DC-SST 的样机优化设计，通过磁性元件选型、绕组绕法设计、辅助电感合理取值、安全工作点限制以及宽禁带器件使用，有效降低了整机损耗，大幅提升DC-SST 工作效率。本文随即针对整机故障率最高的功率器件进行精确的寿命预估，得到有效的SiC  MOSFET 及Si IGBT 寿命预估模型，并在DAB 拓扑中，在配电网日负荷曲线的工况下，准确预测功率器件的寿命。本文取得的主要研究成果和结论如下：

① DAB 拓扑电压闭环扰动仿真及样机试验均验证了本文小信号建模、闭环补 偿器及样机数字控制算法的有效性和正确性。本文逐一分析DAB 工作状态，列写状态方程，获得正确的系统传递函数，设计的闭环补偿器有效地消除了输出端电压与程序给定输出电压值之间的静差，确保端电压可承受负荷功率大幅度跃变。

②SiC MOSFET 固态变压器样机效率最高达97%，相比Si IGBT 样机提升7个百分点。本文选择高频磁芯材料锌锰铁氧体、优化绕组结构及采用李兹线绕组有效降低了变压器本体的铁耗和铜耗；多边界条件下 DAB 拓扑辅助电感的计算取值，保证了样机传输功率，控制器件所承受的电流应力及电流有效值均在额定值以内，限制了功率器件的导通及开关损耗，并确保了样机工作点的安全有效；宽禁带器件的应用大幅降低了功率器件损耗，且SiC MOSFET 的开通与关断损耗均比Si IGBT 低一个数量级，即使在200kHz高频下SiC 器件开关损耗仍低于30kHz工作频率下的 Si 器件。值得关注的是，当工作频率提升，Si IGBT 较大的开关损耗导致样机效率急剧下降，且工作频率超过30kHz后器件极易发生误导通；而SiC  MOSFET 器件开关损耗仅为Si IGBT 的十分之一甚至更小，在高频下仍可保证样机较高的工作效率，为固态变压器实现高效高功率密度提供可能。

③为评估固态变压器使用的可靠性，本文针对整机最易发生故障的功率器件进行寿命预估分析。本文对SiC MOSFET 及Si IGBT 器件建立了精确的Coffin-Manson寿命评估模型。本文引用的现有Si IGBT 功率循环试验数据与仿真模型数据高度吻合，验证了Si IGBT 芯片焊层寿命模型与实际物理结构的一致性， 又由于SiC MOSFET 芯片焊接层与Si IGBT 芯片焊接层材料相同，仿真模型除芯片材料及尺寸外无差别，从而佐证了SiC MOSFET 芯片焊层寿命模型的正确性， 克服了SiC 器件缺少功率循环寿命试验数据的难点。在相同温度波动条件下，通过上述寿命模型计算发现SiC MOSFET 器件最为脆弱的芯片焊接层，由于芯片更高的杨氏模量与焊层更不匹配，承受更大的von Mises 应力、蠕变应力及蠕变能量，导致在结温波动90℃时，SiC MOSFET 寿命仅为Si IGBT 的60%左右。

④ 本文将SiC MOSFET 与Si IGBT 应用于DAB 拓扑DC-SST 后发现，在相同配电网日负荷工况下，SiC MOSFET 固态变压器工作寿命远超Si IGBT。这是由 于相同负载工况下SiC 器件具有更低的导通和关断损耗，使得器件结温较低且结温波动幅度明显下降，而结温波动量与器件寿命成指数关系，从而得到SiC  MOSFET在DAB拓扑DC-SST中工作寿命更长的结论，进一步说明了SiC 器件有效提高了设备运行可靠性及其在DC-SST 中应用的实际价值。

5.2 未来展望

本论文围绕DAB核心电路分析、样机设计优化和功率器件评估三个方面对DC-SST的关键技术进行了研究，但仍有许多不完善的地方，拟在今后的研究中继续探索，主要包括：  

①对于大功率应用场合，可对多个DAB电路单元进行级联，高压侧串联低压侧并联的拓扑结构将更有利于系统容量的提升，其对应的闭环控制控制策略将面 临换流抑制和均压控制等挑战，在配电网中急需大容量直流系统以满足分布式电源及负载的大量接入，因此DAB电路单元级联具有实际的研究价值。

②对于中小型功率应用场合，更多新型禁带器件的应用值得尝试，尤其是GaN等高频开关器件解决了低频时磁性元件存在的瓶颈，可进一步缩小磁性元件的体 积，为更高功率密度的 DC-SST 设计提供可能。

③对于DAB 拓扑本身，软开关设计、双移相调制、扩展移相调制等方法的采 用，均有可能提升固态变压器传输效率，以及电流闭环控制的引入，也将提升系统运行稳定性。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7y6takB9fSysibKQHosicr8oxe78kybBtoHNEIe9m37GrhWmgzRKTXB5g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7IdKzsVAfsonk8XrEsLYcotJErMx7GsGpRTzbWqgcNA1hyxohsEXI4Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G79QVc4mUv0mUB6iaCbnIkLunouMLTPpicMiaLYV3hbye0xa68FuUM0IJow/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7ffbgpzt2NMsDcGiarMO5cibQGbgFyjCmOfBoeIn7JRUdsgXFHY7Fyialw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)