# SiC器件应用篇：电动垂直起降飞行器电驱系统研究进展综述


> 原文地址: [https://mp.weixin.qq.com/s/LGPfbJ3Q4i6OrW11cYm7WA](https://mp.weixin.qq.com/s/LGPfbJ3Q4i6OrW11cYm7WA)

文章来源：航空学报

作者：苗永泽 1，范兴纲 1,\*，李大伟 1，孙伟 1，黄礼浩 2,3，郝圣桥 2，方海洋 1，曲 荣海 1，尤延铖 3（1. 华中科技大学电气与电子工程学院、电能高密度转换全国重点实验室，武汉 430074  2. 中国航空发动机集团有限公司中国航发控制系统研究所，无锡 214063  3. 厦门大学航空航天学院，厦门 361102  ）

摘要：近年来，电动垂直起降飞行器（electric Vertical Take-off and Landing, eVTOL）这一新型航空载运工具作为低空经济的实际载体之一，吸引着越来越多的政策支持、资本投入和学界关注。电驱系统是eVTOL的核心动力装置，其性能对飞行器的运行品质具有决定性影响。本文首先阐述了eVTOL电驱系统的不同架构，并对其进行分类，归纳eVTOL电驱系统的技术特点和要求。其次，本文梳理并总结了国内外主要eVTOL整机产品及其采用的电驱系统，分析了各电驱系统性能指标和技术特点，明确了当前技术水平现状。此外，针对高性能电驱系统实现技术途径，本文还探讨了国内外在eVTOL电机电磁、冷却、结构、材料和电控设计技术方面的研究进展。最后，基于前述技术需求和现状分析，本文指出eVTOL电驱系统的发展趋势和技术挑战，以为此领域内研究人员提供参考。

关键词：低空经济；电动垂直起降飞行器；电驱系统；高转矩密度；功率密度；电机设计；技术路线

前言

电动垂直起降飞行器（electric Vertical Takeoff  and Landing, eVTOL）一般指采用分布式电推进动力系统（Distributed Electric Propulsion, DEP），具备垂直起降能力的飞行器，是航空电气化的重要分支方向之一。随着国内低空经济的兴起，eVTOL得益于高效率、低噪声、低成本、运营维护简单与安全系数高等优点，在国防、 旅游观光、城市空中交通（Urban Air Mobility,  UAM）等应用中具有广阔的应用前景，得到了全世界的广泛关注。 eVTOL电驱系统是eVTOL的核心动力装置， 主要包含电机、电机控制器（电控）及热管理附件等。相比于传统发动机将化学能转换为机械能 （效率约40%），电驱系统将机载电能转换为驱动旋翼旋转的机械能（效率约90%），能量转换效率更高。另外，电驱系统在分布式电推进飞行器整机构型气动优化、余度冗余设计和噪声优化等方面均扮演着重要角色。因此，电驱系统深刻重塑着飞行器设计，使得eVTOL相比于传统飞行器具有显著优势。

类似于传统发动机，eVTOL电驱系统是飞行器的“心脏”和性能基石，对整机的性能具有决定性影响。然而，作为一种新型航空动力技术，eVTOL电驱技术发展还不成熟，大功率电机与电力电子 技术应用于航空领域面临着高温、强振、散热困难、高压绝缘击穿、电磁干扰等诸多挑战，针对航空应用的大功率电驱系统设计方法、制造工艺 和测试标准体系还未完全建立。因此，eVTOL电驱系统技术门槛高，开发难度大，特别是对于大载重载人级电驱系统，其对电驱系统的转矩密度、 过载能力、冗余可靠等性能要求更高，需针对适航进行严格的安全性设计和验证。

国外eVTOL行业布局较早，经过多年技术发展，美国Joby、Archer等整机企业以及法国Safran、 美国MAGicALL等零部件供应商已经开发出高性 能电驱系统产品，甚至有产品已获得针对载人eVTOL电驱系统的适航认证（Safran  ENGINeUS100）。欧美的在电驱系统方面的 先发优势支撑着国外eVTOL整机的蓬勃发展。我国eVTOL行业则起步较晚，目前尚未拥有能够与国际先进水平相抗衡的商业化电驱产品。由于国外高性能电驱产品售价高昂，部分厂商对我国施行严密禁售，同时国内缺少成熟产品，这严重限制了我国eVTOL整机的发展。因此，大力开展eVTOL电驱系统技术研究，形成国产高性能电驱系统产品，对于降低国内eVTOL整机研发成本、 缩短开发周期，以及减少对国外技术依赖具有重要意义。

本文首先总结了eVTOL电驱系统的不同架构并进行分类，分析不同电驱系统设计的技术特点与要求；其次，总结了主流eVTOL飞行器所使用的电驱系统及部分已经商业化的电驱产品，分析其技术指标与应用现状；然后针对于高性能电驱系统设计过程应用到的技术途径及其研究现状进行总结；最后指出eVTOL电驱系统的发展趋势和技术挑战。

1\. eVTOL电驱系统架构及技术特点

1.1 eVTOL电驱系统架构

受旋翼输出特性限制，eVTOL电驱系统根据是否配备减速器可以分为低速电机直驱式与高速电机\-减速器式，架构示意图如图1所示。低速直驱式电驱系统，采用电机与旋翼直连，结构更加简单，在现有的eVTOL电驱中应用更多。但是 由于需要低速重载运行，电机的功率密度和效率可能受限，且电机壳体需考虑旋翼施加的复杂力载荷，因此，轻量化、效率等多重指标要求下， 电机设计挑战较大。高速电机\-减速器具体结构 类似电动汽车主流电驱系统，通过高速电机驱动齿轮减速器带动旋翼。由于电机转速高，电机的功率密度和效率相对较高。另外，其研制可参考现有电动汽车电驱系统技术路线和借助现有供应链，技术成熟度更高。但是，减速器的引入使系统增加了额外的重量和损耗，总的重量和效率不一定比直驱式低。由文献\[18\]可知，两种架构在重量和效率方面的优劣主要受到旋翼转速的影响， 在低旋翼转速速下，高速电机\-减速器式电驱系统一般拥有更高的效率和更低系统重量；在高旋翼转速速下，直驱式电驱系统由于结构简单，可靠性高，可能更具优势。此外，减速器式电驱系统结构更为复杂，可靠性受到影响，适航取证可能更为困难。两种架构的选取应该根据电驱系统功率等级、重量、尺寸、旋翼转速和系统可靠性等指标要求，综合选取。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4h4WbQ0utQ0nBpTclFUgbrndBtkhQeshqmJza8hlVBmuq5Tohiafy76g/640?wx_fmt=png&from=appmsg)

此外，eVTOL电驱系统根据能量形式可分为锂电全电型、油电混合动力型与氢燃料电池型， 如图1-3所示。 

1) 锂电全电型：锂电全电型电驱系统架构中所有动力来源形式均为电能，是电推进飞机的典型代表之一。锂电全电型电驱系统是eVTOL实现完全电气化的核心方向，具有零排放、低噪 声水平与高原适应性强等优势。然而受限于电池储能密度的不足（可安全使用的能量密度约100~200 Wh/kg），锂电全电型电驱系统现阶段主要应用于小型eVTOL与城市间短途交通运输任务。新型高能量密度储能系统如固态电池、超级电容等技术有待进一步验证其在载人航空应用 下的安全性与可靠性。因此未来锂电全电型电驱系统应用于大载重eVTOL长途运输任务更多依赖于高能量密度电池系统的技术突破与全国eVTOL充地面基础设施的完善。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4aa3hv8YIG1ibayDltdH0xggaicrME9ZJyXXy2nTPRlZPefZE5DEPtTuA/640?wx_fmt=png&from=appmsg)

2) 油电混合动力型：油电混合动力型电驱系统架构中，驱动单元由发动机和电机共同作用， 并且根据发动机是否直接提供推进动力可分为并联式架构和串联式架构，如图2所示。其中， 并联式架构与电动汽车中插电式混合动力系统类 似，发动机既驱动发电机为电池供电，又可直接驱动旋翼，由于电机无需承担全部的动力输出， 因此电机的功率和转矩可以相对较小，但一般应具备快速响应和精确控制能力以满足不同工作模式的精准切换。串联式架构与电动汽车中增程式混合动力系统类似，发动机与动力系统解耦，仅驱动发电机提供电能。受限于当前电池能量密度每年仅增加约8%，并且燃油的能量密度是电池的20倍以上，采用混合动力系统能够利用更高能量密度的燃油和更高效的电能转换为飞行器带来更大的续航里程和载重能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4OPYvOZFMIhRWuosywfOtDv6V2y3FnPPHQ3whmeTcmtu5txJ6x1RLFw/640?wx_fmt=png&from=appmsg)

3) 氢燃料电池型：氢燃料电池型电驱系统依靠氢气在燃料电池中发生反应产生电能，再由电动系统带动旋翼。液氢的沸点为20 K，可以作为大功率电推进飞机的燃料，同时对电驱系统中的超导部件进行冷却而无需额外的制冷装置。 此外，氢的热值为燃油的3倍，相同供能下氢的重量仅为燃油的1/3，因此氢燃料电池型电驱系统是eVTOL实现长续航和零排放的重要技术路径之一。尽管其在氢气储存、成本控制和基础设施建设方面仍面临挑战，但随着氢能技术的不断成熟，氢燃料电池型eVTOL有望在长途运输、区域通勤等领域发挥重要作用，为未来航空业的可持续发展提供新的解决方案。

罗兰贝格咨询公司对2022年以后立项的全球新能源航空器在研项目进行了统计，其中不包括无人机和简单概念项目，并针对303个项目进行了电驱系统能源类型分类，如图4所示。由图可知，作为电推进飞机的典型代表之一，锂电全 电型电驱系统架构是目前航空电气化发展的主流形式，低速电机直驱式方案的代表性企业包括美国Joby、英国Rolls-Royce等老牌电气企业；与之相对，代表性高速电机\-减速器式电驱方案则有美国Archer Midnight中自研的电驱系统，日本电装与美国霍尼韦尔为德国Lilium Jet所提供的电驱方案等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4wB1Zeibb28ic5OTAstbN2FxOKd3OPBr1iaLoVGX9Asqz1dTibILxia10GMg/640?wx_fmt=png&from=appmsg)

此外，德国DAP公司的XAEROS混动航空发动机项目、美国XTI航空公司的商务飞机TriFan 600、以及由美国霍尼韦尔提供混动电驱方案的美海军VTOL X-Plane项目等，均为油电混合动力型飞行器电驱方案的典型技术代表。

氢燃料电池型电驱系统架构同样吸引了全球范围内多家企业布局，如2024年7月11日，美国Joby公司宣布其氢电版的S4 eVTOL验证集在6月底的测试中一次性飞行了841公里，该验证机集成了液态氢燃料箱和氢燃料电池系统，搭载40公斤液氢，降落时还剩余10%，成为氢能航空的一个重要里程碑。此外，我国由清华团队创办的追梦空天科技完成了吨级氢燃料电池型倾转eVTOL DF600的第一阶段试飞，是继美国Joby公司后全球第二家进入试飞阶段的氢燃料电池型倾 转eVTOL企业。

综上，每种能源形式均有与之对应的整机方案。但是无论采用哪种技术路线，其电驱系统都是必不可少的核心动力单元，其性能的优劣将直接影响整机的性能表现与人员的驾乘体验。 

1.2 eVTOL电驱系统技术特点和要求 

eVTOL电驱系统的技术特点和要求由整机的工况需求和运行条件所决定，一般包括高功率/转矩密度、强过载、高容错、高效率、强环境适应性与低振动噪声等特点。在此基础上，电驱系统还应服务于整机的适航认证，作出针对性技术调整。2024年6月，美国航空管理局（FAA）发布了eVTOL电驱系统的适航条件征集意见，并在其中对于电驱系统的安装操作、输出功率、振动噪声、冷却系统、防火安全、使用寿命及轴承润滑等指标均提出了明确要求，对eVTOL电驱系统设计具有指引性作用。

考虑到城市上空的作业环境，相较于固定翼螺旋桨，eVTOL的旋翼面积应设计地更小、转速更低以满足低噪音需求，要求电驱系统具备高转矩密度能力以保证飞机达到相应载荷。图4给出了一架3.5吨级、最大载客数10人的矢量推力型eVTOL飞行器在距离200公里至300公里之间城市运输任务中的工况剖析图与飞行器对电驱系统的升力需求。在整个城市运输任务中，飞行器的运行工况被分为5个阶段，每个阶段所需要的推力如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4pOUWBsicWbSK6MIQibs6OLzZic3qDk4st4scEv1QmiadhT5P4w0HLzqNjw/640?wx_fmt=png&from=appmsg)

可以看到，在垂直起飞与降落阶段所需要的推力是最大的，约为巡航阶段的20倍， 而总的持续时间却不到巡航工况持续时间的5%。 这种短时高转矩的指标要求同时对电驱系统的过载性能提出非常严苛的要求。此外，在垂直起降阶段由于海拔较低，过高的扭矩输出对电驱系统的瞬时热管理能力造成严峻挑战。因此，这种复杂多工况的UAM环境要求电驱系统应当同时满足低速下高转矩密度、冷却条件欠缺下高过载性能、高载荷下低噪声与高效率等诸多性能要求， 是具体设计过程中的重点与难点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4CIclT0IibZBhKpPwqvFnALeUvL9dlC14vvkll5Hvp4sJbD3u5iaYjyLw/640?wx_fmt=png&from=appmsg)

图6给出了eVTOL与电动汽车电驱系统对电推进电机的性能指标需求对比。由于需要考虑大载重起降，eVTOL电驱系统对转矩密度的需求要远大于电动汽车电驱系统。同时，载人级航空应用下，eVTOL电驱系统的灾难性故障率应在10\-9次/飞行小时以下；而电动汽车电驱系统的故障率指标则在10\-7次/小时左右。而在使用寿命方面，电动汽车电驱系统的设计使用寿命一般在10年以上；eVTOL电驱系统中的电机则需要4~5年进行更换。并且，为了满足eVTOL复杂任务工况与不同使用条件，其电驱系统应具备陆上和海上低空空域下强环境适应性以应对沙尘和雨水盐雾等环境侵袭。一般地，eVTOL电驱系统要求具有分钟级过载时间以应对应急起降工况，而电动汽车电驱系统的过载时长则一般在30 s左右。 此外，更低的转速与大转矩性能需求在一定程度上损害eVTOL电驱系统的效率。因此，高性能eVTOL电驱系统需要综合转矩密度、可靠性、环境适应性等多方面因素考量，在设计难度与研发成本上，要远高于电动汽车电驱系统。

2\. eVTOL电驱系统发展现状

2.1 国外eVTOL电驱系统发展现状

永磁同步电机由于其功率密度与效率等优势是eVTOL电驱系统的主流电机拓扑类型。本节对国外主要厂商和研究机构的eVTOL电驱系统进行调研。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4y0AeibMSQP00vWH1icYu9QFLBe2NyYVnibARcVics37Y6gJiaCh3ics6AVQw/640?wx_fmt=png&from=appmsg)

美国的Joby公司自研的电驱系统装配于JobyS4型号飞行器中，具有在全球范围内已披露资料中最高的功率密度，其峰值电机+电控功率密度可达8.4  kW/kg，如图7所示。通过采用外转子永磁同步电机拓扑，电机及控制器一体化集成设计与高效液冷技术，使其系统重量仅28 kg，峰值功率可达236 kW，峰值扭矩可输出1800 Nm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4RVK04ALBu3keQDdroqQicCyGeEWtSJARXPLUEl35R6W3oqS5WmIEdjA/640?wx_fmt=png&from=appmsg)

美国Archer公司则采用减速器方案，用于Midnight型号飞行器。由于整机的构型设计和旋翼设计，倾转电机和升力电机是两种不同的规格型号，但是可以复用95%的部件。其电驱系统采用全封闭式液冷，电机\-电控\-减速器集成式结构，连续功率可达125 kW，电机转速为12000 r/min，连续功率密度达到5 kW/kg，如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4tg5Qj1qPHGrJ7rd8FsxuvBdhE9PoMqtHjWCF3aj6EJSUNTp4g4Zs1g/640?wx_fmt=png&from=appmsg)

法国Safran公司同样推出了50 kW级、百kW级与500 kW级三个不同功率等级的电驱系统，成为多个飞行器的电驱系统选择，比如国内上海时的科技公司E20载人eVTOL，如图9所示。对于ENGINeUS100型号的百千瓦级电机系统，其最 大功率为125 kW，峰值功率密度可达5 kW/kg， 采用风冷方式，在电机外壳可见明显的散热翅片。 此型号电机已于2025年2月2日获得EASA认证， 是全球首款“单独取证”的电推进系统型号合格证（TC）。而对于ENGINeUS XL型号的500 kW级电驱系统来说，则采用闭式液冷的冷却架构， 峰值功率密度为4 kW/kg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4WmNdwPwoQO00sSSEeY1aTSYd0WErn32gIcNQ0rpIaLjEVsX65f0BFA/640?wx_fmt=png&from=appmsg)

德国Airbus公司的第一代CityAirbus使用的电驱系统是西门子公司的SP200D型号电机，如图10所示。该电机采用全封闭油冷技术，整机重量49 kg（仅电机），最大可5分钟输出功率204 kW，转速1300 r/min。第二代CityAirbus则是选择美国MAGicALL公司为其提供电驱系统。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4oia4vvDpBUGkyEm8j0AyVa6f7Nz2ofIJu08QyvNtAV8BMqLff9D1otg/640?wx_fmt=png&from=appmsg)

此 外，同样采用MAGicALL电驱产品的代表性整机还包括英国Vertical公司的VX4原型机，如图11所示。该电机产品采用全封闭风冷冷却架构和电机-电控集成设计，电机+电控峰值功率密度为4.3 kW/kg，效率在94.5%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4E1pYXfmDKEmicKlXCDk8cdesPjngASLydlb3Uv26qZia77SUKZm9crlA/640?wx_fmt=png&from=appmsg)

美国H3X公司开发了可用于电动飞机和eVTOL的高功率密度集成电驱系统HPDM-250， 如图12所示，在其内部集成了电机、控制器与减速器系统，采用全增材制造技术绕组与壳体，并使用耐高温陶瓷绝缘材料。电机本体的最高转速为20000 r/min，在加上一个6.7:1的减速器后，总重量为18.7 kg，额定输出功率为200KW，峰值输出功率可达250kW，连续功率密度达到10.7  kW/kg。 MagniX公司专注于电动航空推进系统产品开发，分别推出了最大输出功率为350kW、转速2300r/min的Magni350和最大输出功率700 kW、 转速2300 r/min的Magni650两款针对低空通航的电推进装置（Electric Propulsion Unit, EPU），如图13所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4OQq7tw0COJcFyQPajoiaRY5ibvCMsQWflkalyQ7f894ngCkza7vO1BWw/640?wx_fmt=png&from=appmsg)

两款产品均采用油冷方式，系统峰值功率密度分别为2.7 kW/kg和3.4 kW/kg。尽管功率密度指标并不突出，但是FAA于2021年为这两款产品在33部动力系统审定规章下进行适航认证，使MagniX公司成为第一家拥有明确FAA审定的电驱系统制造商。目前与该公司合作的主机厂商包括Eviation、Harbour Air等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4GsI0mBmHiarTmYNABYPIPN58VKSeKGaU5bFyBAeGFrElC3ndePjorXQ/640?wx_fmt=png&from=appmsg)

除上述径向电机电驱产品外，市场上还有部分采用轴向磁通电机拓扑的电驱产品。其中，YASA 750型号轴向磁通电机以其无磁轭、分段式电枢绕组与直接油冷等设计，能够在5.4 kW/kg的功率密度下输出200 kW功率，如图14所示。

Evolito公司于2021年从YASA拆分出来，专注于航空电推进产品应用开发。该公司利用YASA的知识产权和电机技术的独家营销权，在YASA产品的基础上，推出了针对于UAM与eVTOL应用的三款轴向磁通电机产品，如图15所示。其中，D250型号电机重量约为13 kg，主要针对高速低转矩应用场景，电机峰值输出转矩密度达到16 Nm/kg。三款电机产品中，D500型号电机则提供中等转矩与中等转速输出，功率密度为12 kW/kg的产品可以通过堆叠以增加输出功率和转矩高达1MW。D1500型号电机产品提供最大的转矩输出，其峰值转矩是D250的6倍，D500的3倍，并且拥有超过1000小时的飞行测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4liblEBIxFFyND8k5XWH1keDaC5KZQRl4dl4wHwUOPD7FzNLZrpXqk4A/640?wx_fmt=png&from=appmsg)

Rolls-Royce针对城市空中交通所提出的电推进电机采用风冷的冷却方式，如图16所示，电机与电控功率密度为3.9 kW/kg，峰值功率为150kW， 转速1 100r/min，效率可达95%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4ibaAz0oticXd0zo2QAsS6WkEKYaZsQTbTS9icpCG20WrAibzeKPKjrm5Lg/640?wx_fmt=png&from=appmsg)

Magnax的代表轴向磁通电机产品AXF225仅重13 kg，采用无磁轭设计、取向硅钢与层压式散热器等技术方案，输出峰值功率高达220 kW。 其中，该产品分为风冷与液冷两种型号，如图17所示，在风冷方式产品中可以看到明显的机壳散热翅片，而液冷方式产品内部集成了减速器，以 满足不同电压等级与运行工况需要。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4ibZn4AN5UaxxxMMgHJIFIXG3PA7OqgSqC1JXXargHsPxvjI0rW3IYTg/640?wx_fmt=png&from=appmsg)

2.2 国内eVTOL电驱系统水平现状

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj45qnvhJ6E3j4GMIrZ7Msbcib6GARAM1rticILW4sLibs5SBdibFXIgxvhzg/640?wx_fmt=png&from=appmsg)

国内eVTOL电驱系统技术发展起步较晚，专业eVTOL配套厂家很少。目前尚未有针对电驱系统单独适航认证的载人eVTOL电驱产品，多采用“随整机批准”方式进行针对电驱系统的适航认定。峰飞公司获得全球首张吨级无人驾驶eVTOL型号认证，后续复合翼产品“盛世龙”最大起飞重量2400 kg，进入适航认定阶段，如图18所示。其搭载的电驱系统为自研设计，电机与电控分离，冷却方式采用空冷，将最大起飞重量按照固定翼eVTOL进行估算，其需要的电驱系统功率等级在75 kW左右。

沃飞长空公司作为吉利公司旗下品牌，推出5-6座级eVTOL产品AE200，如图19所示。其最大航程达200至300公里，巡航速度250公里/小时， 满足UAM高频次商业运营的使用需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4pfLQCvtOtApoaerXunOWnCFo8OOicv6cTM9uhR92q5NSoSQ4n6Rwmbg/640?wx_fmt=png&from=appmsg)

其电驱系统与卧龙电气合作，作为国内老牌电驱系统供应商，卧龙电气同样针对eVTOL电推进领域推出了80 kW、175 kW与250 kW共计三种功率等级的电驱系统，前两者均采用电机与电控分离式设计，功率密度分别为3.2 kW/kg与3.7 kW/kg，如图20所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4S0amsA5w6CtPG3iaiaRdl91cfJGur9YsLJFYaSh6ajXnbwgqo66sac3Q/640?wx_fmt=png&from=appmsg)

天津松正针对载人级电动航空领域，专注于高效功重比的电推进系统的开发，在纯电驱多旋翼垂直起降、涵道风扇等不同构型的飞行器均有研究及产品应用。其中，型号为SZ-100的旋翼直驱式电驱系统采用外转子电机与“风冷+水冷” 的冷却方式，峰值输出功率150 kW，最高转速为1200 r/min，如图21所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4Hbt6ML0FbdwjkkTcVXYdomgJNDU9FcWAgQQ1bumZtNKDs457FOedBw/640?wx_fmt=png&from=appmsg)

江苏迈吉易威早先从事军用高功率密度轮毂电机系统，并且已有多个型号产品在部队投放应用。现推出了面向eVTOL的电机系统配套产品， 目标客户群体和之前相似偏向于军口。在2024年中国航空航天博览会上，展出了多款航空电推进产品，部分如图22所示。其中，如图22(b)所展出的AP700型号电机峰值功率为130 kW，最高转速2100 r/min，采用风冷方式，电机重量32 kg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj44HELD1kolbr7oByicWB4N2mqCYJwibxZj43WA9k0norDDhDhWV6ictjRQ/640?wx_fmt=png&from=appmsg)

山东精创磁电产业技术研究院推出一款应用于电动航空领域的高效电机，如图23所示。该产品采用轴向磁通电机技术，重量为13kg，峰值功率为68 kW，峰值功率密度达5.2 kW/kg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4HafA6fibTK6nSXB71APbv46wnSJAqWoo54WbFMsh2tZo0ZoicPibbjueQ/640?wx_fmt=png&from=appmsg)

此外，由中国航空发动机集团自主研制的3吨级倾转旋翼eVTOL整机产品AE20同样亮相于2024年中国航空航天博览会。其中，应用于此机的电驱系统由中国航发控制系统研究所研制。飞行器包含前后电机，前倾转电机直驱旋翼，后升 力电机通过减速器带动旋翼，如图24所示。前倾转电机的峰值功率为125 kW，最高转速1500 r/min，重量33 kg；后升力电机峰值功率125 kW， 最高转速达8200 r/min，含电控和集成散热器， 总重量不超过30 kg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4FBibeXdZZbfNiaUZK8UGpBlUSFSBvJrqvib4A5QyRtWdCsAiaNeBiarYGHA/640?wx_fmt=png&from=appmsg)

最后，图25展示了国内外电驱系统功率密度 水平的对比情况，其中，绿色代表直驱式电驱系统；蓝色代表需要减速器集成的电驱系统。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4o6K6qYV7APNKpSbCgfAsHP0vrnnbic4DPZQV3f2Qf1UCFiciaGSNia0Bdw/640?wx_fmt=png&from=appmsg)

由于5座倾转旋翼型eVTOL对电驱系统的功率需求约为200 kW，图中统计了300 kW以下的主流电驱系统产品。可以看出： 

1) 国内eVTOL电机峰值功率多在150 kW以下，功率密度不足4 kW/kg，而国外电机与电控集成的电驱产品峰值功率达到200 kW以上，功率密度达到5 kW/kg。其中Joby电驱系统功率密度达到8.4 kW/kg，处于全球最先进水平。 

2) 国内eVTOL电驱系统技术成熟度相较国外较差，尚未有商业化产品获得适航认证。而国外存在已获得适航认证的商业化百千瓦级电驱系统（Safran ENGINeUS100）。 

3) 相较于高速电机\-减速器式架构，直驱式电驱系统目前获得更多主机厂商的选择。径向磁通电机目前占据应用主流，而轴向磁通电机具有一定应用前景。 

4) 国内eVTOL电驱系统目前主要采用风冷的冷却方式，而国外高水平eVTOL电驱系统则采用闭式液冷技术，较国内环境适应性更强。 

5) 国内eVTOL电驱系统的电机、电控主要为分离式，集成度较低。国外先进eVTOL电驱系 统已采用电机\-电控\-热管理“三合一”集成架构， 结构更加紧凑，具有更高的轻量化水平。

最后，本文汇总了国内外可应用于eVTOL电驱系统的主要产品及其参数、技术特点、配套厂家与产品成熟度等信息，如表1所示。

表 1 国内外主要eVTOL电驱系统  

 Table 1 Domestic and 

international major eVTOL electrical propulsion systems

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4Q8QKJfe6lSKkhCpRCJnUwObuFK9O3TjpyNU260eOrqKOlZLLEc1htg/640?wx_fmt=png&from=appmsg)

3.eVTOL电驱系统设计技术研究现状

eVTOL电驱系统的性能水平取决于其技术路线及电机和电控设计技术的创新突破。本节从电机电磁拓扑设计、电驱冷却设计、系统结构设计、 电工材料与控制器五个方面进行eVTOL电驱系统设计技术研究现状分析，以详细阐述高性能eVTOL电驱系统实现的不同技术路线。 

3.1 电磁拓扑设计

在eVTOL载人航空的应用背景下，其电驱系统不仅应具有高功率密度，还应具备高可靠性与高容错性能以保证航程的稳定与乘客的生命安全。然而，传统实现高容错性能的技术手段是通过增加电机的冗余备份来实现的，这与电驱系统 实现高功率密度指标相互矛盾，因此如何设计高功率密度与强容错性能兼顾的电磁拓扑是eVTOL电机的关键设计技术之一。

3.1.1 高转矩密度拓扑设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4Yh2ybUh4dA2r9QCTFkJYWiaW9ZpkTcwZ1m13kmMJnt5Hl0BDtXjHWiaQ/640?wx_fmt=png&from=appmsg)

分数槽集中绕组（Fractional Slot Concentrated Windings, FSCW）线圈仅跨一齿，相比常规叠绕组，相间互感小，耦合程度低，可以减小相间和多套绕组间短路故障的传播与相互影响， 具有更好的容错性能。此外，这种绕组结构能够在减小绕组端部的长度的同时提升槽满率，进而降低铜耗，提升电机的效率和功率密度，因此是eVTOL电机常用的绕组选择。

分数槽集中绕组电机的槽极配合是影响此类电机性能的一个关键因素。美国Joby公司对比了9槽/8极、3槽/2极与12槽/10极三种经典的FSCW单元电机极槽配合，指出12槽10极的单元电机具有适中的振动噪声与损耗水平和相对较高的绕组系数。根据Joby所公布的信息显示，其电机采用了外转子FSCW的电磁拓扑，其定子绕组由72个线圈组成，每个线圈采用扁线,以提升槽满率和冷却能力，如图26所示。对于低速直驱电机，多槽多极设计可以降低电机定转子轭部厚度，从而达到电磁减重的效果。因此，包括塞峰ENGINeUS100和西门子SP200D均采用了多槽多极分数槽集中绕组。外转子结构是无人机用小功率推进电机常用的拓扑。由于气隙直径大，外转子电机具有更大的转矩输出能力。对于推进场合，转子在巡航过程中置于来流之中，能够保证电机转动时转子永磁体得到充分冷却，从而提升转矩输出能力，同时降低了永磁体退磁的风险。鉴于其优良的转矩输出能力，Joby电驱也采用了外转子拓扑。但是， 针对于高安全场合的载人场合，外转子电机需设计成闭式结构，需注意定转子之间动密封的设计， 以防止沙尘水雾进入，影响电机安全运行。同时， 外转子电机设计成闭式结构之后需注意定子的散热问题。 Halbach永磁阵列是一种将不同充磁方向的永磁体按照特定顺序排布的电机转子设计。采 用这种设计，气隙磁密更加正弦，并且具有单边聚磁效果，在提升电机气隙磁密的同时减小甚至省去转子铁心轭部，进而提升电机的转矩密度与效率，减小转矩脉动。然而，Halbach永磁阵列在实际应用中，却存在着装配、固定难度大， 磁钢易退磁等工程问题。美国伊利诺伊大学K.S. Haran团队设计出一种用于飞机电推进的无 槽永磁同步电机，如图27所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4YBnMwaEmMCyBBic6ZAszoiaOgtZ7eibEemZv2RCnlfV7YNkujGHKmkq5w/640?wx_fmt=png&from=appmsg)

通过采用定制的Litz线与Halbach磁钢充磁角度优化，使电机输出功率300 kW，并且可以在10000 r/min转速下实现9kW/kg的功率密度；3600 r/min时连续功率密度超过3 kW/kg，最大效率同样达到了97%。

然而，其不同充磁角度的磁钢间形状仍保持相同，北京航空航天大学严亮团队发现，对于Halbach中的径向充磁磁钢，增大气隙侧占比并减小转子铁心侧占比，可以获得更大的转矩输出能力。并提出了如图28的三角形径向充磁磁钢三 段式Halbach转子结构，对比传统Halbach转子， 平均转矩提升了8.4%，转矩脉动可降低46.9%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4sLXIr0RJociauX0YmQN8rZ3nicKREibjKygxp7wMlkUGu5OxdkcPSvBnA/640?wx_fmt=png&from=appmsg)

除了上述径向磁通电机外，轴向磁通电机具有结构紧凑、转矩密度高、端部绕组短等特点，是未来高转矩密度电驱系统的重要发展方向之一。南京航空航天大学耿伟伟提出了一种采用 双U型磁钢形状转子的单定子双转子轴向磁通内置式永磁电机拓扑，能够利用磁阻转矩进一步提高电机的转矩能力与弱磁能力，转子具体由三层硅钢片叠压而成，结构如图29所示。实验结果显示，该结构对比轴向磁通表贴式永磁电机，转矩和功率密度分别可提高6.0%和5.8%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4DKP967QM9a9UtOhzYp598n5GH43vPPialsOb4qVly36YJcDqevE0NWA/640?wx_fmt=png&from=appmsg)

此外，北京航空航天大学郭宏教授团队提出一款针对航空电推进的三维磁路永磁同步电机， 如图30所示。该拓扑通过采用环形绕组与三种不同堆叠模式的定子铁心，在定子的轴向和径向同时放置永磁体，实现既有轴向磁路，又有径向磁路的三维磁路结构。最终通过仿真验证，电机输出功率为200 kW，转速3 000 r/min，效率达到96%，转矩密度达到25 Nm/kg。

为了获得更大的转矩输出能力，还可以采用多材料的拓扑优化方法，结合多目标遗传算法、 神经网络模型、人工智能与增材制造等手段进行优化设计，从而增加设计自由度，构建出高转矩密度转子拓扑。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4vLzcYt1cVUejlbSiaUibLeMPKrToWnic2gmW03jn2sIE63ykkc522LFWQ/640?wx_fmt=png&from=appmsg)

3.1.2 容错电机拓扑设计

由于永磁同步电机存在着故障下灭磁困难、 短路电流大等缺陷，除了高转矩密度研究，永磁电机应用于eVTOL场合还需开展电机高可靠性与高容错技术研究。现阶段永磁容错电机设计的主要目标是降低故障发生风险和短路故障电流，一方面通过增强线圈、相和绕组套件电磁、热和物理上的隔离能力，预防故障的发生，阻碍故障的扩散蔓延；另一方面，在短路故障发生后采用高阻抗设计对短路电流进行抑制，并结合多相设计提升故障下电机容错运行的能力。相应地，现有电机本体提升容错性能方法主要包括增强物理隔离与提高电机阻抗两类。

英国谢菲尔德大学Z.Q. Zhu团队通过将模块化思想与分数槽集中绕组拓扑相结合，提出如图31所示电机拓扑。通过在定子模块间分别设置3个和6个冗余齿，以实现模块化绕组的物理隔离， 并且改变了传统的FSCW极槽配合规律，实现了永磁电机高转矩性能和容错性能的协同设计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4DCzEJC7lF85lq15ppIvibTTAkmLDfhhZgxXypRNvhulibzjpnO3weaHg/640?wx_fmt=png&from=appmsg)

此外，威斯康星大学麦迪逊分校的Thomas M.  Jahns团队针对eVTOL提出了一种集成式模块化容错电驱系统设计。如图32所示，通过设置定子轭部磁障与去除相间槽齿尖，能够在单个模块失效后继续以全扭矩运行，并在两个模块失效后以降低功率运行。通过马尔可夫链分析方法，提出的模块化集成结构与故障检测相结合，可使单点故障发生风险可降低1000倍以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4TUXjKVhRf43qSiaeAtXnhCGlW8fW4VvDweibSiaml9BgK4VbU6Rtg7JMA/640?wx_fmt=png&from=appmsg)

采用模块化隔离方法虽然能在一定程度上降低短路电流，减轻短路故障的危害程度。但若要实现匝间短路电流被抑制在安全值以内，电机健康状态下的功率因数和功率密度会有较大牺牲。 因此，华中科技大学李大伟教授团队提出了可变阻抗环形绕组永磁容错电机拓扑，如图33所示，使故障下环齿漏磁自动变化，将匝间短路电流降低60%以上，最高可降低90%左右，大幅提高永磁电机的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4owq9mABS0wTIrFA7F448Ba42IEiapdnLDhFjJHHNTKibA07lTciaibaicPQ/640?wx_fmt=png&from=appmsg)

3.2 电驱冷却设计

高功率密度电机具有高电磁负荷特征，内部损耗密度大，需要高效冷却保证电机安全稳定运行。eVTOL电机的冷却方式有风冷、油冷和水冷，其中前两者应用较多。

风冷因其实施简单、成本低、可靠性高和易于获得等优点而成为最常用的冷却方法，可分为被动自然冷却和强迫空气冷却。由于旋翼旋转时会将冷却气流引入短舱，对电驱系统进行冷却， 因此应用于eVTOL电驱系统可以采用强迫风冷，其特点为在机壳表面设置大量散热翅片辅助散热。其中，Safran ENGINeUS45型号电驱系统采用强迫风冷，与电机同轴安装散热风扇与机壳散热翅片以增强冷却效果，如图34(a)所示。此外，资料显示Joby的初代电驱系统电机所采用的冷却方式为风冷，其结构如图34(b)所示。为了降低温度，通常会对鳍片的形状、排列层数、鳍片数量和鳍片间隙等进行优化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj49T5chCjqfSqv1hicHWFhQU5lUSopqHXteRUVEzgcNqV8oC23rgAWIKA/640?wx_fmt=png&from=appmsg)

此外，华中科技大学郑梓晨提出一种3D打印机壳风冷结构，如图35所示。通过将油冷电机散热器与机壳一体化设计，借助交错排列的风冷散热筋与内部轴向镂空流道，构建出应用于航空电推进电机的自循环油冷散热系统。实验结果表明， 在15 m/s的气流速度下，与平面结构相比，该结构的表面平均对流换热系数提高了105.6%，出口油温降低了6.6℃。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4hORib9SrbrSschibjVGPgPzePsP3FoAYHwxLC5fzfgt74cIRcpHicib9aQ/640?wx_fmt=png&from=appmsg)

水冷是电机热管理中另一种常见的冷却方式，常见于电动汽车电驱系统热管理中，具有热容较大、成本低、热管理系统相对简单等优点。传统的水冷方式是将机壳水套与定子铁心相包裹， 通过螺旋形或蛇形水路对电机有效部分进行冷却。华中科技大学范兴纲提出了一种轴向分段式水冷板技术，如图36所示。通过在轴向分段的定子铁心之间增加与硅钢片和绕组直接接触的水冷板，使热源与冷却剂直接接触，与传统水套相比可降低绕组最高温度20℃以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4icZu4skABia00kTOhdwtdbWvYUwrKUcO3eeUOarezUqW7NYH8LOYytzg/640?wx_fmt=png&from=appmsg)

除此以外，Sikora等人针对增强槽内冷却设计，通过在电机槽内增加水管的方式同样达到了减小绕组热源与冷却剂之间的热阻的目的，大幅提高了电机整体的散热效果，如图37所示。最终根据实验结果，这种水冷结构使电机稳态电流密度可达到24.7 A/mm²，瞬态峰值电流密度可达40 A/mm²。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4gqu6a202bFFLyYicZf68Mz0djyjtckkVkDvGTe5CxsMlWSLKwLMMALw/640?wx_fmt=png&from=appmsg)

然而，考虑到绝缘特性，水冷中冷却剂无法与绕组热源直接接触，仍存在着冷却不均匀、传热路径长等问题，无法满足eVTOL电驱系统极高功率密度需求。而除了水之外，油同样是另一种常用的液体冷却剂，并且由于油可以直接注入机器内部而直接传递绕组和转子的热量，油冷电机具有比水冷更高效的散热能力与功率表现。并且从系统角度出发，采用水冷方式的电驱系统需要额外考虑轴承的润滑与冷却问题，相应地，采用油冷方式则可以单独引出油路对轴承进行润滑与冷却，减轻系统后续维护保养难度。因此，尽管油冷方式存在着热管理设备复杂、成本较高且易造成污染等缺点，随着对更高效散热技术研究的不断深入，新型油冷技术已成为进一步提升电驱系统功率密度和开发一体化集成电机系统的关键手段。

华中科技大学王润宇提出了一种应用于航空内装式起发电机上的多支路浸油冷却结构，如图38所示。相较于传统轴向浸油冷却，通过在定子轭部增加pin-fin结构以增强扰动，大幅提升了电机的有效散热面积与冷却效果，最终通过实验测试，该结构最大可承受连续电流密度达到30 A/mm²，有效部分功率密度达到6.8 kW/kg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4FUpqcXoppD1n4iadH4sVpbtThDKOWZnkyvO19ibvy6fL5ZjgRGozSP7g/640?wx_fmt=png&from=appmsg)

此外，可以借助流道挡板，增加流体与热源的接触面积与流体流动的湍流强度，以增强浸油冷却效果、提升电机功率密度。如图39所示，西门子航空推进电机SP200D通过采用端部挡板， 使电机的连续转矩密度达到30.6 Nm/kg，转速仅为1 300 r/min。同时，英国牛津大学的R.  Camilleri针对YASA无轭轴向磁通电机拓扑设计浸油冷却方式，如图40所示。该冷却结构借助流道隔断和流道限制器来保持流路，将定子划分为4部分，保证冷却介质与定子的充分接触，最终实现电机热点温度降低13 K，电流密度提升7%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj49dghL7Q1JHp2icpHl5u0Rx5xJtuH6zOpraHkfT2Zv4HAWf8zvFu2rnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4oFFwOzOIWyVTKn6qGeF6qw1nn1dicNRl4rz4hzuwyVnZTzauYibeMv5Q/640?wx_fmt=png&from=appmsg)

根据Joby所发布的专利显示，其电驱系统同样采用油冷的冷却方式，预示着油冷技术研发是未来eVTOL电驱系统进一步提升功率密度的重要手段。通过设置绕组端部工装引导流路，使冷却油首先对绕组端部进行冷却，然后进入槽内流 道对槽中心的绕组进行冷却，如图41所示。虽然这种结构能增强油与电机发热部位的有效接触面积，提升散热效果，但是对于工装的生产制造与装配时整体的密封效果提出了较大的挑战。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4F1Irs3Ou88wFcScjYowXF9jiaWZSicibaVu8tVOAL3kBKeEwHNibibVtyqA/640?wx_fmt=png&from=appmsg)

为了进一步增强冷却介质与绕组热源的冷却效果，华中科技大学谭辉借助3D打印技术，提出一种应用于航空电推进轴向磁通电机的新型绕组结构，如图42(a)所示。通过在绕组两侧和顶部集成针翅式散热器结构，增强热源的冷却效果， 最终实验表明，与传统轴向磁通电机绕组相比，该结构的绕组温度可降低27.6℃。此外，C.  Wohlers等人借助增材制造技术，将油道与空心导体集成在一起，如图42(b)所示。实验显示， 该结构能够达到100 A/mm²的直流电流密度，并减少约50%的附加损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4dnzjWOTJJ8sHJtPGXl46ibXPeTxl8iaccRbCfBoKTatDooaFDzXs2plA/640?wx_fmt=png&from=appmsg)

相变材料利用介质相变潜热可以储存大量热量，其相当于一个较大的热容元件，可以在短时过载时进行热储能、轻载时释放热量，与eVTOL电驱系统短时高过载的工作特点十分匹配，可有效减缓电机过载下温度的上升速度，满足飞行器在垂直起降时的高功率输出需求。目前，将相变材料直接应用于电驱系统散热的研究相对较少， 根据相变材料的布置位置可以大体分为在机壳、 空心导体内部与绕组端部三类，如图43所示。其中，S. Wang等人将石蜡材料注入电机机壳腔内，使电机的工作时间延长了32.7%。为了减少PCM与热源之间的热阻，S. Ayat等提出了一种更紧凑的设计，将PCM集成到用于飞机起发电机的3D打印空心导体中。结果表明，采用PCM可使绕组温升降低8%，绕组重量降低18%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4jljBsLKJLEwxKEKWVLUFUXYjfx57AxRSeibrm6qVFBJENzDkI1nWg0w/640?wx_fmt=png&from=appmsg)

最后，B. Li等人通过在铜壳中填充相变\-泡沫铜复合材料，使电机的2倍过载时间延长175 s，相同时间下峰值温度降低16.9℃。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4SzWcSLq6XyyYiaibZkVVtqIQ8HlTSaHLEou8ibpO9uk2klzjSXfcA5ibVA/640?wx_fmt=png&from=appmsg)

热管是一种高效的被动冷却装置，它基于相变机制将热量从蒸发器端传递到冷凝器端，等效热导率可达5000~200000 W/m/K，远高于常用的导热材料（如铜，394 W/m/K）。M. Bradford首次将热管引入电机冷却领域，N. Putra 等人通过在电机机壳布置热管，使电机表面温度降低了33.8℃，如图44(a)所示。此外，哈尔滨工业大学李立毅教授团队提出了在电机槽内布置热管的冷却结构，如图44(b)所示，进一步增强了冷却效果。

总体上，eVTOL电驱主要冷却技术为风冷和油冷，其中风冷设计中翅片传热强化和内部热阻降低将是发展的两个方向，而油冷设计中磁热结构深度集成和融合设计已经成为了进一步加强散热的重要途径。此外，固\-液相变、热管散热等新型散热技术随着集成设计方法、封装工艺、复杂传热建模等关键问题的解决，在eVTOL电驱中的应用将逐步成熟。  

 3.3 系统结构设计 

3.3.1 电驱系统架构集成

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4xSulyYQGYBQelt28Q0LMhFXR3OC1ccGMVqicBzkOLfD8PNNe7dYXxDA/640?wx_fmt=png&from=appmsg)

常规电驱系统采用电机与电控分离设计，具有较长的线缆和冷却管道，系统体积和重量均较大，与飞行器狭小的短舱安装空间不匹配。为从电驱系统层面提升轻量化水平和结构紧凑度，可采用电机\-电控集成设计，甚至将热管理系统， 包括泵、风扇、散热器，以及旋翼变桨距机构等进行高度集成化设计。 Joby在其专利中给出了其电驱动模块的具体结构示意图，如图45所示。通过采用单轴承设计，电控可集成于外转子电机定子内部空腔。 同时，热管理系统集成于电驱端盖后部，泵与风扇共用驱动电机，通过集成式空气\-油换热器带走系统热量，以应对悬停、余度故障等恶劣工况。

另外，Joby还将变桨距机构、倾转架构及其驱动器等与电驱系统进行了更深入的集成。通过上述设计，Joby有效减少了线缆和管道等连接件实现了电驱系统极度轻量化设计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4MAeo0mc7QDZJFm8vxeFLw16v9uCIINM2PG03wNZPQyma8W0PSQ5yWQ/640?wx_fmt=png&from=appmsg)

专利给出了Archer电驱系统内部集成设计的具体结构示意图，如图46所示。其电驱系统为减速器集成式，整体架构与电动汽车电驱系统有所类似。其中，在电机与旋翼间增加了减速器总成与油泵，高速电机与减速器、旋翼同轴布置， 减小系统的体积与零件数量；双余度控制器与功率模块放置于电机下方，减小母排的长度与重量。

电驱系统采用油冷方式，然而由于没有专门设置散热风扇，因此需要单独引出空气风路以满足换热器的冷却需要。 

3.3.2 轻量化结构支撑

电机结构件占电驱系统的总重比例可达60%以上，因此为了达到电机的超高功率密度指标，除了对有效部分进行减重之外，对结构件的轻量化设计同样具有重要意义。Koch.等人提出一种如图47所示的采用碳纤维增强塑料（CFRP） 和钢组成的混合轴、玻璃纤维增强塑料（GFRP） 转矩传递组件以及软磁材料（SMC）磁钢载体的电机混合转轴结构，由于所应用到的生产技术是具有特定模具的注塑工艺，因此适用于大规模生产。与传统实心不锈钢转轴相比，该技术在保障机械强度的情况下减小约50%的电机转轴重量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj47YqiaxT0cGJkslicH8QTmJUIafa9cMUpXP3ic80ibgjL6g0cicDecubUXjg/640?wx_fmt=png&from=appmsg)

美国Joby公司借助增材制造技术对其电驱系 统的机壳结构件进行轻量化处理，如图48所示。在机壳内部设置通过3D打印出来的格栅支撑结构，能够保证其应力需求的基础上，最大限度降低重量并优化散热。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4J6QqSMgvKb7yGFtibq0zzAkrcSeuQ3iaggeNkGxnEZMd9XaU7TgFEAqw/640?wx_fmt=png&from=appmsg)

西门子公司SP260D电机产品中，同样可以看对其对端盖等结构件的轻量化处理，如图49所示。通过采用高强度合金材料与拓扑优化，最终其端盖结构仅保留了主要的结构支撑部位与加强筋，重量从初步设计的10.5 kg降为了最终的4.9 kg，大幅降低支撑材料的重量占比，提升电驱系统整体的功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4xrEW6yH8TwRkeMAR9MzqpT9vJ8RPpqDCHU2TVqHJy4icGJ7NFTFicP5Q/640?wx_fmt=png&from=appmsg)

3.4 先进电工材料 

3.4.1 铁磁材料

通过选用更高饱和磁密的铁磁材料作为电机铁心，提升电机磁负荷进而达到提高电机转矩密度的效果。其中，铁钴合金由于其饱和磁密高达2.4 T，成为了电机设计中备受青睐的铁心材料选择。然而其电阻率较低，仅有0.27 μΩ·m左右，在高频工况下会产生较大的涡流损耗。并且机械强度较差，加工困难，在切削加工过程中易产生裂纹，最终材料的性能好坏受到加工工艺的严重影响。国内对应牌号为1J22，为了减少加工工艺对磁性能的损害，通常在材料中添加适量的镍或者其他元素；在热处理方面，铁钴合金需要经过特定的退火工艺以保障磁性能的稳定和最大化。目前，国内已有公司能稳定生产饱和磁密为2.4 T的1J22冷轧带材，并实现叠压后饱和磁密在2.25 T的样环，国内正在积极推进铁钴合金1J22材料在航空高功率/转矩密度电机领域内的应用。

铁基非晶合金作为非晶体材料，其磁滞损耗较小，体积薄且电阻率较大，因此涡流损耗同样较小。因此当采用非晶合金作为电机定转子铁心材料时，铁耗较小，能够大幅提升电机整体的运行效率，是近年来电动汽车领域新兴的新型电机铁磁材料。尽管其饱和磁密较低，仅1.6 T左右， 但是考虑到其极低的铁耗水平，因此对于特定指标下的电驱系统而言，同样具有成为理想的先进铁心材料的潜力。此外，广汽埃安所发布夸克非晶驱动电机，功率密度达到12 kW/kg，非晶合金材料的使用降低电机50%铁心损耗，电机工况效率提升至97.5%，电机最高效率达到98.5%。

图50分别给出了四种不同硅钢片的B-H和B-P曲线，其中20JNEH1200型号代表目前主流技术成熟度较高的硅钢片性能；B20AVH1300是国内所推出与之对应的型号。材料对比所选取的数据在100℃下400 Hz频率时测试样环得到的，可以看到1J22在电磁性能方面优势显著，尽管受到生产加工影响较大，其饱和磁密仍在2 T以上；非晶合金材料则在铁耗方面优势明显，相同磁密下其铁耗大小不足1J22的10%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4U7VJMJ4aovFBicxiaEsiaLySAPfX1ByS4fKJMX1icnrBVItpkgwXhicYVAw/640?wx_fmt=png&from=appmsg)

3.4.2 绕组材料

绕组作为高功率/转矩密度电机的主要损耗来源，严重影响着电机温升并制约电机功率密度提升。如何突破绕组材料与成型技术限制，提升单位体积和重量下线圈的载流能力，使电机实现高频、高电负荷下低损耗运行是进一步提升推进电机转矩密度的关键技术。

铜基复合材料得益于其电阻率低、导热性强与延展性好等特点，被广泛用于制造导线与电极等。选择合适的增强相并设计其在铜基体中的最佳分布是提升铜基复合材料性能的关键，可通过添加不同的增强相如碳纳米管(CNTs)、石墨烯(Gr)、碳化硅等来提高导电性，例如CNTs/Cu复合材料(CNTs含量为1%)的电导率可达89.1%  IACS，Gr/Cu复合材料的电导率可达117.4% IACS， 热导率最高可达525 W/m/K\[123\]。碳垣科技生产的Gr/Cu复合材料产品电导率超过110% IACS，热导率超过520 W/m/K，与铜相比提高30%以上， 如图51所示。中科院电工所制备的冷拔Cu/Gr复合线具有94.85%IACS的高电导率和516MPa的高拉伸强度，为制备高性能石墨烯增强铜基复合材料提供了一种低成本、高效率的方法，为大规模生产不同形状的高性能铜/石墨烯复合材料开 辟了新的途径。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj43KqoJpoDgqLNQq27vrTZianChkGB2ELHSzpzxLNXcVqmmjfXTT2KCfA/640?wx_fmt=png&from=appmsg)

目前，超导特性的物理机理尚未破解，超导材料的载流性能受应力、温度、磁场等条件的制约，目前二代高温超导材料的性能只能通过实验去获取，性能数据尚不全面，阻碍了超导技术在电机行业的应用。并且eVTOL对于起飞重量、尺寸等因素要求苛刻，应用超导带材时的冷却装置非常复杂，国内超导材料的生产技术与国外有差距，千米级二代高温超导带材尚未量产，很大程度上限制了超导技术在eVTOL电驱系统中的应用和推广。  

3.4.3 电工绝缘材料

为确保电机长期稳定运行,绝缘必须具备良好的耐热性、耐腐蚀性和工艺性。有机绝缘以聚酰亚胺(PI)聚合物应用最为广泛,其具有介电性能强、力学性能好、耐老化性能强、耐高低温性能优异等特点,长期使用温度范围达240℃,短时工作温度达300℃。目前，有机材料聚芳醚桐（PEEK）产业链逐渐成熟，最大耐温、弯折性等指标更好，少数电磁线厂家使用该材料作为线材绝缘，长期使用温度范围达到260~290℃，如图52所示。在350℃甚至更高的环境中，选择以陶瓷、玻璃纤维为主的无机绝缘作为高温环境下的主要绝缘材料，然而由于成本过高、导热性差、易破裂与抗振性差等缺陷，目前电机领域成熟应用较少。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4JRFa9zrnLI0QdQF5wPF72OBlIPeor79ahFDa6tVibpHdwMkicODeFJ2w/640?wx_fmt=png&from=appmsg)

3.4.4 永磁体材料

永磁材料包括铁氧体、钕铁硼和钐钴三种永磁体类型。其中，铁氧体的性能最差，成本最低，多应用于民用电机与成本高度敏感的领域内，对于目前eVTOL电驱系统用高功率/转矩密度电机 来说匹配性较差。三种不同磁体的具体性能参数对比如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4hfkf01OVo5wJMib5WyYREqWuDSzkJYT6EM40Zd8Q388HObXwZBP4icAQ/640?wx_fmt=png&from=appmsg)

钕铁硼和钐钴永磁材料拥有近似的剩磁密度大小，钕铁硼的剩磁密度略高，其主要区别在于钐钴的最大工作温度高达350℃，如磁钢牌号Sm33E、28HE等；而钕铁硼仅有230℃，如磁钢牌号N42AH等。考虑到航空电机高可靠性的性能需求，因此对于钕铁硼永磁转子的设计工作温度还应保留充足的余量，以防止转子温度过高导致永磁体退磁。这两种永磁体代表着两种不同的技术路线：由于外转子电机对转子具有更好的冷却效果，因而可以选择剩磁更大的钕铁硼作为永磁材料；内转子电机结构中则由于缺少对电机转子的冷却，因此会选择耐温更高的钐钴材料作为永磁体材料。

3.5 控制器设计 

3.5.1 高集成度SiC器件设计

与电机类似，eVTOL对电控的技术要求包括高功率密度、高效率、高可靠性和强环境适应性等。为匹配电机的大功率高转矩或宽速度输出， 电控需具有高压大电流宽频率输出能力。

表3统计了部分eVTOL和航空电推进用电驱系统中控制器的容量、母线电压、功率密度与效率指标。可以看到，现有具有公开资料的百千瓦级航空电机用电控功率密度在15 kW/kg左右，效率达到99%，母线电压达到800~900V。采用800 V及以上电压体制则可以在相同功率水平下提升系统效率，并实现更快速的电源充电速率。 然而，这种高电压体制的应用对控制器的绝缘等级与电磁兼容提出了更高要求。针对航空场合日益严苛的性能需求，伴随着电力电子技术和散热技术的发展，电控功率密度的需求指标逐步提升。 英国航空航天研究所（ATI）发布FlyZero电推进飞机项目给出了技术发展路线图，2026年达到22 kW/kg，2030年达到40 kW/kg，2050年达到60 kW/kg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4iaqlSxjicPBUGEVEn6Kg0FgpQyK2kJcJ6IlZTicFzGFZVhwywK9GZDB3A/640?wx_fmt=png&from=appmsg)

新一代碳化硅（SiC）宽禁带功率器件在耐压等级、工作温度、开关损耗与开关速度等方面具有显著优势，正在逐步替代传统的硅（Si）基 功率器件，广泛应用于电动汽车与航空航天电驱系统。除了采用SiC器件，其耐高温低杂散参数封装技术和高效散热技术也是提升功率器件通流能力和电控功率密度的关键。但是，SiC器件具有较大的dv/dt，这导致SiC电控往往电磁干扰问题较为严重，尤其对于高电压紧凑型设计布局的电控，因此在设计集成式eVTOL电驱时应引起格外关注。

相较于传统控制器分散式布局，功率砖通过三维空间布局，将功率模块、电容、散热部件等集成于统一散热基板，并采用注塑一体成型工艺， 显著提升控制器件的功率密度与集成度，如图53所示。通过结构布局优化与一体化内部流道，此 技术可以减小30%以上的体积占用与20%以上的散热效率提升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4NuURnXjuNjxMmhghPbht7uewYPU7f7GoylFiaHLOicdr8dMicSaAYX6Lw/640?wx_fmt=png&from=appmsg)

对于常规电控设计，一般选用成熟的三相功率模块，但是对于集成式eVTOL电驱，由于空间尺寸限制，采用三相模块可能无法充分利用有限空间，导致无法布局，为此，可基于单相模块， 甚至基于分立器件来进行控制器设计布局。如图54所示为ENGINeUS100电控，由于电控部分需穿过电机轴，其采用12个单相模块进行机壳内壁周向布局 ，同时采用机壳进行风冷散热 。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4G6yrQwct9tSjdgddfj29ib3UibqaIeuiajcZxFIgzhiaq2JUkGyUjFeKUg/640?wx_fmt=png&from=appmsg)

Fraunhofer IZM团队则基于SiC分立器件，通过采用SMD表面封装技术，将电气层至于器件上方，形成低电感结构，抑制器件的寄生效应同时加强了散热效果，其结构示意图如图55所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4hdqYibEjDnBdQV0XMRdGEtlY5mdSBpTvrWDBavU0Hrb8LkvE3ZtWf4A/640?wx_fmt=png&from=appmsg)

3.5.2 容错拓扑设计

相较于电机本体，由大量电力电子开关器件组成的电机驱动系统具有更高的故障率。对 于半桥拓扑驱动的三相Y接电机，由于不存在零序电流通路，当故障发生后无法容错运行。因此，对于三相电机，可以通过添加冗余器件提供零序 电流流通路径，实现系统的容错控制。图56展示了一种经典的三相四桥臂容错变换器拓扑，通过将电机绕组的中性点与额外的桥臂连接，借助第四桥臂实现零序电流的主动控制，使电机在故障后保障转速不变、最大转矩变为额定的1/√3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4EOMMVHicfZXXFkzEey8odBdmeO478ZaftlJVZJYnEeleqDdkg13ibsYQ/640?wx_fmt=png&from=appmsg)

然而，单余度三相电机由于成本低、结构简单等优点，多应用于无人载货用eVTOL电控的驱动拓扑中；而对于载人级eVTOL，其电控要求具有高的冗余安全性，常采用双余度设计，并且还要考虑余度之间的防爆隔离。图57展示了一 种双余度热备冗余电驱系统拓扑，其电控母线供电、主功率回路以及信号传感部分为完全独立的双余度设计，因此，发生单点故障，不会导致整个电驱系统功率输出全部丢失。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4KiaBcAfYUcHRBBgu1shmfnKrryoDuZTtibYIVVVptvIBjicIt2K10vrBQ/640?wx_fmt=png&from=appmsg)

在多相电机中，随着电机相数的增加，其固有的控制自由度和容错性能也随之提升；然而相数越多，空间电压矢量也越复杂，因此多相电机容错运行的研究也主要集中于五相电机、六相电机或是由多套三相绕组构成的模块电机。由于多相电机系统的各相桥臂间互为冗余，因此多相逆变器的容错拓扑研究以半桥拓扑和H桥拓扑为主。湖南大学黄守道教授团队针对如图58所示的双三相电机半桥容错拓扑，分析了不同重 构方法下的桥臂电流应力，并给出了转矩降容最 小的拓扑重构方法，实现双三相永磁同步电机单桥臂故障下的低速全转矩驱动。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4zp1RyUebsnicvBxOxFmMNf06b54zTib7FAW0y4IhbAOyolavaVDLnDVA/640?wx_fmt=png&from=appmsg)

此外，华中科技大学王鹏业提出一种对称型开绕组的多相电机容错重构拓扑和控制策略，优化了桥臂开路故障下的容错性能。如图59所示， 在所提出的H桥容错拓扑结构中采用双向开关器件连接逆变器桥臂的不同端，使缺失电压的再生成为可能。通过零序分量注入优化绕组电流，相较于传统容错方法，单相开路故障时转矩输出能力提升14.0%，两相开路故障时转矩输出能力提升70%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4Mz2Y3zoXAkw8EtUsXwXdVgwVicAD0A8ooX7iab2SRIknWxtIBwn5UEVA/640?wx_fmt=png&from=appmsg)

3.5.3 容错控制算法

一般来说，对于具有正弦反电势的电机，其转矩主要由基波磁动势贡献产生。因此，只要电机的基波磁动势保持不变，即可实现电机系统的容错运行。该策略发展至今，可大致分为降阶解耦容错控制与最优电流给定容错控制两类。

降阶解耦容错控制的核心在于对故障非对称电机系统的精确解耦，需要基于故障诊断信息对解耦矩阵进行修正，并通过补偿故障带来的不对称及控制谐波空间分量确保基波平面旋转磁动势不变。基于此思想，H. M. Ryu等人提出一种 多相电机缺相运行的容错控制方法。通过注入三次谐波电流可实现容错电流幅值相等，控制框图如图60所示。通过实验验证，此方法既具有线性控制器优于传统滞环控制器的优点，也可以在不对称故障条件下保证转矩的稳定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj4oE2mruaW5bg8mbfoiad8Wib14nPYH3Ex6KTpsMbYsKYGeicicjwQ9TtH1Q/640?wx_fmt=png&from=appmsg)

最优电流给定容错控制的核心在于对剩余健康相电流幅值与相位的优化，并在各谐波平面实现电流的跟踪控制。基于此思想，清华大学李永东教授团队提出一种基于直流电流注入的多相变换器单开关管故障的容错控制策略，如图61所示。 通过故障发生后注入与相应基波相电流幅值相等的直流电流，有效减少了故障引入的非线性，并实现故障相电流的精确调节。实验结果验证，故障后的最大转矩输出可提高6.62%~17.44%；定子绕组损耗比现有容错技术降低了3.10%~33.22%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJK7ia1DDhibnf0YRmRfknj41op8VQB2N2mTSgmMZjMWibV8XXibzZjPUjawGFIfWcywAa6Gibreciagpw/640?wx_fmt=png&from=appmsg)

4\. eVTOL电驱系统发展趋势与未来挑战

基于对eVTOL电驱系统技术需求和发展现状的分析，未来高性能eVTOL电驱系统发展趋势主要包括： 

1) 极度轻量化。直驱式和非直驱式电驱将 分别将以Joby和H3X电驱为标杆，进一步提升功率密度水平，以满足整机严苛轻量化和载重需求。 

2) 安全冗余化。eVTOL电驱需满足适航验证高安全性要求，电驱系统将更多采用闭式设计，并且从电磁、驱动拓扑和电控软硬件层面考虑容错和余度设计。 

3) 高度集成化。电机与电控，甚至与散热系统、变桨距系统和旋翼等将进一步集成，以共用部分部件，减少管路、线缆和占用空间，提升系统整体功率密度和可靠性。 

4) 广域高效化。提升eVTOL电驱在低速大扭矩和高速大功率运行区间的效率，应对大载重起降、单余度失效和单电机失效等复杂严苛工况下效率急速恶化问题，可以尽量减少能量耗散，提升eVTOL续航水平。

同时，针对上述发展趋势与目标，研发未来高性能eVTOL电驱系统仍面临诸多技术挑战，主要包含以下方面： 

1) 高转矩密度、强容错和高效率兼顾的电磁设计。面向低空经济应用，eVTOL电机对转矩密度、容错性能和效率均具有很高要求。对于低速直驱式电机，为应对大载重起降，电磁有效部分峰值转矩密度将达到100 Nm/kg以上，电机电磁负荷水平很高，铜耗很大，效率将受到显著影响。同时，电磁部件的轻量化设计将使得磁路较窄、磁饱和程度更高，电机电感参数减小，电机短路电路可能更大。而如前所述，一些容错设计往往牺牲了一部分参与做功的磁链或者有效部分面积，使得相同输出下电机变重。因此，在性能 指标的矛盾之间，如何设计和优化eVTOL电机电磁拓扑，使得其兼具高转矩密度、强容错和高效率是未来技术挑战之一。

2) 高过载下部件\-系统级高效热管理技术。 极度轻量化设计使得电机和电控具有很高的热负荷水平，特别是对于单余度故障工况下，剩余余度需输出相同功率达到分钟级以保证飞行器安全着陆，此时电驱高过载输出，电驱部件，特别是电机绕组和电控功率器件损耗密度很高，这给部件级高效散热带来极大挑战。另外，电驱热量最终需通过空气带走，在空间、重量和恶劣环境温度工况限制下，增强机壳到空气散热或液冷介质到空气的换热效率面临极大困难。最后，在电机、 电控和热管理系统（机壳散热器或者液冷介质空气换热器、泵和风扇）一体化集成趋势下，为 实现系统级能效优化，多学科优化设计和管理运 行调控也是未来电驱系统需要攻克的重要技术挑战。  

3) 考虑复杂旋翼载荷的结构轻量化设计。 受城市高层、景区峰间等应用空域复杂气流影响，eVTOL在飞行过程中旋翼所受到的载荷非常复杂， 其载荷传导到电驱系统，对其结构轻量化设计构成严峻挑战。特别是对于倾转型eVTOL，电驱系统和旋翼在复杂气流中进行一起进行姿态变换， 除需考虑旋翼施加的较大的轴向拉力和轴力矩， 还需要考虑极端情况下旋翼所施加的很大的弯矩。 如对于某6旋翼2吨级eVTOL，单旋翼滚转力矩达 到2000 Nm以上。如此复杂和较大的力和力矩作用下，电机轴承寿命将受到很大影响。考虑电驱功率密度和轴承寿命，如何进行电驱系统传力路径规划，进行结构轻量化设计是电驱系统设计面临的又一个技术挑战。  

 4) 高功率密度双余度电控设计。电动汽车SiC电控技术发展已较为成熟，很多具体技术点可转化应用于eVTOL电驱系统。然而，eVTOL电控不仅具有更高的功率密度指标要求，同时还需针对适航进行安全性设计。特别是对于载人eVTOL，其电控需要进行双余度冗余，且余度间需要考虑余度失效下的防爆隔离设计，以提升系统可靠性。双余度设计使得电控硬件数量加倍， 且需考虑EMI、故障特征和切除逻辑，做到电控面对各类故障能够真正实现冗余运行。因此，在体积、重量、EMI和失效率等严苛指标约束下，eVTOL电控高功率密度双余度设计是未来需要解决的又一个技术挑战。

5. 总结与展望

本文主要针对eVTOL电驱系统的构型、国内 外发展水平、关键设计技术、发展趋势和技术挑战等展开论述。总结如下： 

1) 对电驱系统不同架构进行总结并分析各 自技术特点和要求。其中，锂电全电型电驱系统 为目前主流形式，但是电池储能密度的不足严重制约其发展；油电混合动力型与氢燃料电池型电 驱系统架构拥有更大的续航里程和载重能力，有 望在低空经济建设中发挥重要作用。 

2) 对国内外主流eVTOL整机及电驱系统， 以及部分部件供应商电驱产品进行整理归纳。对比显示国内eVTOL电驱产品在功率密度、集成度、环境适应性与适航进度等方面相较国外先进水平有所差距。 

3) 对eVTOL电驱系统的电机电磁、冷却、 结构、材料与电控设计技术国内外研究现状展开了论述，为进一步提升eVTOL电驱系统性能提供可行性技术路线与参考。 

4) 总结并归纳eVTOL电驱系统的未来发展 趋势和技术挑战。其中，发展趋势包括极度轻量化、安全冗余化、高度集成化与广域高效化；技术挑战包括高性能电磁设计、高过载热管理技术、 复杂载荷下结构轻量化与高功率密度双余度电控设计。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuicBk2h5qJDVCNdzYCDibtR03mlu6M2pyoAMw9B5DtDGCGpvkwzpYmoCQ/640?wx_fmt=other&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=79)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbugWQAPalzmPszTK7G8hCDP3eibqxmUAbmRTW0VP0mqAntpRq7CI8PicLA/640?wx_fmt=other&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu4LKYiahJuBTl8hYFUfgANHDnZfm6cpEE7F63zdSvVcrZyaIdyGEpk3Q/640?wx_fmt=other&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=81)