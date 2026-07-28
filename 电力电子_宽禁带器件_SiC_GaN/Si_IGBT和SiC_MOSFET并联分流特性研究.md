# Si IGBT和SiC MOSFET并联分流特性研究


> 原文地址: [https://mp.weixin.qq.com/s/pBsCzmezD39VZ7ayfzmb3Q](https://mp.weixin.qq.com/s/pBsCzmezD39VZ7ayfzmb3Q)

文章来源：重庆大学-电气工程

作者：蒋潇锋 （硕士学位论文）

摘   要 ：随着我国十四五规划的提出，发展基于第三代宽禁带半导体的光伏发电技术 和电动汽车等新能源领域已成为中国能源转型的大势所趋。其中，功率半导体器 件作为我国新能源汽车、无线通信、电网输变电等电力电子应用领域的“电力心 脏”，对电力电子装置的功率密度、效率及可靠性的提高有着至关重要的作用。 由Si IGBT和SiC MOSFET并联组成的Si/SiC混合器件除了提高电流容量以外， 还具有SiC MOSFET的高开关频率、低开关损耗和Si IGBT重载下低导通损耗以及低成本的优势，一方面打破了传统Si器件的性能瓶颈，另一方面缓解了SiC器 件工艺限制和较高成本的问题。因此，新型Si/SiC混合电力电子器件在满足电力 电子装置追求高性价比方面具有重大意义。 

本文以Si IGBT/SiC MOSFET混合器件为研究对象，从器件应用的角度出发， 以重载下SiC MOSFET和Si IGBT经历过流应力问题为驱动，研究了不同电流配 比以及不同栅极电阻对Si/SiC混合器件分流特性的影响，对较复杂的Si/SiC混合 器件开关过程进行了详细的分析，根据实验规律总结了栅极电阻的设计指导，为 高频、大电流、高可靠和低成本的新型Si/SiC混合器件的工程应用提供了理论支 持与实际指导。研究重点和成果主要体现在以下几个方面： 

①  研究了器件配比对Si /SiC混合器件HyS电流分配的影响。首先，根据Si  /SiC混合器件HyS的导通特性，提出了由不同电流容量的IGBT、MOSFET组成 的混合器件HyS额定电流的计算方法；其次，搭建了双管并联双脉冲测试平台， 对不同电流容量匹配的HyS混合器件进行了高温和常温的分流测试与分析，实验 结果表明当IGBT和MOSFET的电流配比接近1时，电流过冲在混合器件的开关 过程中对器件的可靠性影响最小，在实际应用方面，改变HyS混合器件的电流配 比不能很好地降低混合器件在重载时器件所经历的过流应力。过流应力产生的主 要原因是IGBT和MOSFET的器件结构差异，结合器件安全工作区的定义，分析出过流应力将会降低器件键合线的可靠性。 

②  研究了抑制Si/SiC混合器件动态过流应力的方法。为了让HyS的器件匹 配不受约束，调节栅极电阻来抑制混合器件的动态过流应力。首先，对现有研究所采用器件数据手册推荐的电阻匹配方式，进行了动态行为分析，找到了IGBT 或MOSFET发生过流应力的主要阶段，结合器件特性分析出抑制过流应力的栅极 电阻的调节方向；除此之外，利用Sentaurus TCAD构建了Si IGBT/SiC MOSFET的二维器件模型，分别对手册推荐的栅极电阻与优化后的栅极电阻的动态电流分布进行了仿真分析，从器件物理层面探究了栅极电阻对混合器件的动态分流规律，与前面理论分析的电流变化趋势相对应，理论分析与仿真的结果表明当MOSFET 的栅极电阻较大并且IGBT的栅极电阻较小时，MOSFET和IGBT的动态过流应 力能够被有效降低。 

③ 研究了栅极电阻对Si /SiC混合器件HyS开关特性的影响。基于双脉冲测试分析了不同栅极电阻下的混合器件HyS的开关损耗、过流应力以及dv/dt的变化 规律。理论、仿真和实验共同验证了动态电流在混合器件HyS开关过程中的分布 规律。对比了优化栅极时序和优化栅极电阻在混合器件HyS重载情况下的开关特性，研究表明相对于现有的优化栅极时序方法，在相同的过流应力抑制效果下， 优化栅极电阻可以实现更低的开关损耗，其中调节栅极电阻的情况比控制时序情 况下的开通损耗降低了40%。最后，结合之前栅极电阻的实验规律，总结出了Si/SiC混合器件栅极电阻在不同温度下和不同负载电流下的设计指导，为混合器 件Hy S的实际应用提供支撑。 

关键词： SiC MOSFET，Si/SiC混合器件，栅极电阻，可靠性；并联分流 

1\. 绪  论 

1.1 研究背景及意义 

目前，世界正处于百年未有之大变局，我国经济也将由高速发展转向为高质量发展。2021年3月中央财经委员会第九次会议中提出的“碳达峰、碳中和”目标， 皆是指向从可再生清洁能源代替现有传统的火力发电等污染较大的能源。近年来， 随着新能源等电气化设备的发展，大功率密度、大功率容量、高效高可靠的电力电子装置对日益复杂的用电工况显得尤为重要，如：新能源汽车和光伏逆变器以 及多电飞机上的电源均朝着大功率、高可靠性以及高功率密度的趋势进步。电力 电子器件身为电力电子装置中的“心脏”，在电力电子技术朝着高频、高可靠性、 高功率大电流的方向发展起着至关重要的作用，也是我国高速推进《中国制造2025》、《“十四五”数字经济发展规划》和实现现代化工业强国首屈一指的存在。 国家“十四五规划中”明确提出了对集成电路领域中的碳化硅、氮化镓等宽禁带 半导体的高度投入，并发展光伏、风力发电和新能源汽车等战略性新兴产业。因 此，功率半导体器件的相关理论研究、产业应用发展，符合我国当下的战略规划 布局，对我国加快绿色低碳发展起着重要意义。 

上世纪80年代末，硅绝缘栅双极型晶体管（Si IGBT）综合了大功率晶体管 （BJT）的大电流容量、低导通压降以及MOSFET开关速度较快等优点，在轨道 交通、航空航天、新能源以及柔性直流输电等电气工程领域中成为了主流器件， 现已具有制造成本低、材料缺陷低、可大规模生产高纯度单晶硅等特点。但是， 随着电力电子装置的小型化、轻型化发展，Si基材料性能已达到理论极限，Si基 IGBT的开关频率难以满足高功率密度的电力电子变换器的需求。与此同时，我国的IGBT与国际先进水平依然存在一定的差距，对于一些应用高端IGBT的需求市 场90%依赖进口。 

近年来，以碳化硅金属-氧化物半导体场效应晶体管(SiC MOSFET)为代表的第三代宽禁带半导体因其具有高开关频率和低导通电阻的特性，未来将成为电力 电子装置提高效率和功率密度的主流器件。目前在航空航天电源、新能源汽车中 的电机驱动以及光伏逆变器等应用中SiC MOSFET已呈现出逐渐取代Si IGBT的 趋势，比如：美国特斯拉（Tesla）公司2018年推出了以SiC MOSFET为核心器件的电机驱动Model3，以此来提升功率密度和续航里程。当下SiC电力电子器件和 应用已经成为电力电子学科前沿和产业热点。然而，放眼全球SiC器件市场占有 率，欧美日已形成三足鼎立的格局。如图1.1所示为2020年全球SiC器件的市场 份额，ST意法半导体、美国科锐旗下的Wolfspeed以及日本罗姆Rohm遥遥领先， 德国英飞凌Infineon和美国安森美OnSemi紧随其后，我国的市场占有率不足2%。因此，发展SiC器件已成为我国迫在眉睫的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJpogTlNHvJut7VJvwZfQyruawjiawsgtS933XLzQ7VohQh5pNoicbUBag/640?wx_fmt=png&from=appmsg)

尽管SiC MOSFET具备上述优点，但是在现阶段大规模产业化以及未来在直 流输电、高铁等高压大电流的应用场景中的使用依然存在一些技术瓶颈。首先， 由于SiC材料缺陷密度相对Si材料较高，SiC器件的工艺制造技术水平较不成熟， 导致SiC MOSFET存在栅氧可靠性、成本高等问题，现阶段SiC器件的价格约为Si基器件的5-8倍。其次，生产加工大电流容量SiC器件意味着需要加工更大面 积的SiC晶圆，随着晶圆面积的增大，SiC晶体中的缺陷也随之增加，导致良率降 低。因此，单颗SiC MOSFET器件的载流能力远不如单颗Si IGBT的能力大。为 了提高SiC MOSFET模块的载流能力，需要采用SiC MOSFET并联的方法，而同一批次生产出的SiC MOSFET器件也会出现阈值电压、导通电阻等参数不一致的情况，会导致并联器件的动态和静态电流分布不均。同时，由于Si C MOSFET开 关速度快，开关过程中的di/dt、dv/dt作用在分布不均的寄生参数上会产生不一致 的电压电流尖峰，进一步加剧并联器件动态电流的分布不均。将并联器件应用在 高频高功率的工况下，长时间工作会导致个别器件过流过热损坏，这进一步降低 了电力电子装置的可靠性。所以，受限于SiC材料的生长、SiC器件的复杂工艺以 及良率低等原因，致使SiC MOSFET模块的成本高，阻碍了SiC器件的推广应用。 

因此，现阶段由大电流Si IGBT和小电流SiC MOSFET并联组成的混合开关 （Hybrid Switch，HyS），结合了SiC MOSFET高开关频率、低开关损耗和Si IGBT 大电流低导通损耗和成本低等优点，打破了传统单一器件的技术壁垒，在满足电力电子装置追求大容量、高功率密度及高可靠性方面具有重大意义。 

1.2 Si/Si C混合器件研究现状 

功率器件的混合使用最早可以追溯到二十世纪八十年代，混合器件意在结合不同类型器件的独特优势。文献\[8\]中将具有驱动简单、开关速度快以及二次击穿 强度高等优点的场效应管（FET）与具有大载流能力的双极结型晶体管（BJT） 混合使用，组合出四组不同的拓扑以应用在不同的场景。上世纪九十年代，文献 \[9\]提出在桥式变换器中将MOSFET与IGBT并联来实现IGBT的软开关，该并联结构奠定了Si/SiC混合器件的应用基础。现如今一些应用场景采用IGBT和 MOSFET串联结构，如有源中点钳位变换器（ANPC）将原有拓扑中开关频率较高的IGBT换成SiC MOSFET，以最大程度的降低开关损耗并最小程度地降低变换器成本，显然串联的拓扑结构更多地与电力电子变换器实际的控制策略和 应用需求相关，从器件特性的角度出发，混合器件串联结构与并联结构相比其应 用具有一定的局限性，本文主要研究Si器件和SiC器件并联组成的混合器件。

1.2.1 Si IGBT/SiC Diode混合器件 

SiC材料最早可追溯到上世纪70年代开始投入研发，经过长达30年的积累， 2001年Infineon公司推出了第一款商用的SiC 肖特基二极管（Schottky Barrier  Diode，SBD）。SiC SBD主要由金属薄膜、N型半导体以及电极构成，由于在导 通过程中没有少数载流子的注入，因此其具有开关速度快、开关损耗小及反向恢复电流小等优势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJWmSwEsC05iciakmcltciaeNWkpGgsAibibAG57S910SAdR6SnnVogswP26A/640?wx_fmt=png&from=appmsg)

 相比于SiC MOSFET，SiC SBD因结构简单，工业上的生产工艺也比较成熟， 早在问世之初，就有研究人员提出将SiC SBD代替传统的Si PiN与Si IGBT并联 来降低IGBT的开通损耗。此后，各大厂商开始推出Si IGBT/SiC Diode的混合模块。早在2008年，日本东芝公司提出了一种基于Si IGBT/SiC Diode混合模块开关损耗分析模型的高功率变换器精确损耗计算方法。日本富士电机公司在2014 年采用1700V/400A的Si IGBT/SiC Diode混合模块应用于光伏风电系统AC690V的逆变器中，相比于传统的Si模块，总开关损耗降低了29%；为了进一步提高功率传输系统中的效率并降低模块的尺寸，如图1.2所示，富士电机在2017年研发出了一款3.3kV新型封装结构High Power next Core (HPnC)的混合模块，该新型封装结构采用了集电极发射机反向平行结构降低了模块内部的寄生电感。日本日立公司在2014年研发了3.3kV/1200A的Si IGBT/SiC Diode混合模块用于机车牵 引，相比于传统的Si模块，Si /SiC混合模块的体积降低了1/3，开关损耗降低了 35%；随后，为了降低二极管反向恢复引起的振荡，日立公司对一款3.3kV/450A的混合模块进行了模块内部杂散电感的优化。文献\[19\]对日本东芝 公司研发的1700V/1200A Si IGBT/SiC Diode混合模块（CMH1200DC-34S）进行了静态特性和动态特性的测试。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJWnNK4Awiawn2vYbicv3Q6B4ibf8fwlErj9tobFPqNhLcPBQnZiaJ0KutiaQ/640?wx_fmt=png&from=appmsg)

文献\[21\]分别研究了Si PiN和SiC SBD与IGBT反并联时的性能对比，发现 SiC SBD与IGBT的组合可以降低IGBT雪崩的风险并且IGBT可以实现更高的开关频率。文献\[20\]浙江大学团队结合钳位电路和有源栅极驱动提出了一种降低Si  IGBT/SiC Diode混合模块开通振荡的方法，该方法即降低了电磁干扰 （Electromagnetic Interference，EMI）噪声又保持了SiC SBD低开关损耗的优势。文献\[22\]提出了一种电流源驱动应用于IGBT/SiC Diode混合器件上，可极大的降低开关损耗。文献\[23\]中科院电工所团队研发了一款600V/150A具有直接冷却的IGBT/SiC Diode混合模块，如图1.3所示，相比于传统的Si IGBT模块，该模块应 用在电动汽车逆变器中的功率密度可以达到14.8KW/L。

 上述研究已经对Si IGBT/SiC Diode混合模块的电学特性、驱动结构及封装应用探索的入木三分，利用SBD单极性器件的优势，降低其反向恢复电流从而降低 IGBT的开关损耗，但该种组合并不能显著降低IGBT的关断损耗。同时，根据 IGBT和SiC SBD的器件特性可以看出Si IGBT/SiC Diode混合器件在导通时存在 一个拐点电压，导致其轻载时的正负导通损耗较大，因此限制了基于Si IGBT/SiC  Diode混合器件变换器频率的进一步提高。

1.2.2 Si IGBT/SiC MOSFET混合器件HyS研究现状 

近年来，SiC材料由于具备较宽的带隙而收到了广泛的关注。SiC材料本身具 有10倍于Si材料的击穿场强，3倍于Si的禁带宽度和导热率，因此相比于传统的Si基器件，SiC器件在高温、高频、高压等应用上具有更大的优势。2011年， 美国科锐（Cree）推出第一款商用SiC MOSFET产品。目前，全球已有十多家企 业拥有SiC MOSFET的设计以及制造量产销售等能力。根据美国Yole公司2017 年度SiC器件市场调研报道，2016年美国科锐（Cree）、德国英飞凌（Infineon）、 意法半导体（STMicroelectronics）、日本的罗姆（ROHM）和三菱（mitsubishi） 等公司的SiC市场占有率占到全球的近90%。预计2022年全球SiC器件市场收益将达到10亿美元，主要的市场应用包括：功率因数校正（PFC）、光伏、电 动汽车车载充电器、电动汽车充电桩、不间断电源、电机驱动、风力发电以及轨 道交通等。然而，我国目前的IGBT模块或SiC器件依然高度依赖进口，国内的工业水平还处在初级阶段。SiC SBD因为结构简单，目前国内已有一些公司 （泰科天润、中国中车）可以实现量产。但针对结构比较复杂的SiC MOSFET， 虽然目前已有中科院微电子研究所、浙江大学、西安电子科技大学、湖南大学、 中电集团55所、中国中车和北京泰克天润等部分高校、科研院所以及企业已经研 发出了器件样品，但是离量产还依然存在相当一段距离。同时，研发出的器件特性（如：栅氧可靠性导致的阈值电压漂移）与离英飞凌、科锐等国外企业依然存在比较大的差距。随着我国“十四五”规划的出台，政府和民间分别对功率半导 体产业大力扶持和发展，SiC器件工艺制造和相关产业链的布局正在逐步建设， 有朝一日可以到达国际先进水平。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ8Z3Tgm5XoPkmw16vnZ2TGqLkX5YECRzVpLhBDu3dUc6iaG5oJzZ48Sw/640?wx_fmt=png&from=appmsg)

目前SiC器件良率低价格高主要原因为SiC材料工艺面临着晶靛生长大小受限、材料生长速率太慢、外延条件苛刻等诸多难题。如图1.4所示，根据 SYSTEM Plus CONSULTING对英飞凌的FS820R08A6P2B和意法的SiC模块的成本对比，可知在逆变器中的SiC模块的主要支出是SiC芯片，该成本占整个模块 成本的82%，为同等电流等级下IGBT芯片的8倍多。根据《第三代半导体电力 电子技术路线图2018》可知，碳化硅产品的价格每年大约下降10%，预计到2032 年前后，碳化硅MOSFET的模块价格将与IGBT持平。所以在目前阶段下SiC器 件因其高昂的成本，阻碍了其在电动汽车、光伏风力发电等中大功率下的应用。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJmAMtycU4XfpLzOCicajHvIuibVRbyQP3oBdsS0bDq7MTKxMJj8kZ5giaA/640?wx_fmt=png&from=appmsg)

为了尽可能利用SiC MOSFET高性能并尽量降低成本，一些学者提出了Si  IGBT和SiC MOSFET并联混合器件（Hybrid Switch，HyS）的结构，如图1.5(a)所示。如图1.5(b)所示，该结构结合了SiC MOSFET导通时的线性电阻特性以及Si IGBT的电导调制效应，使得Si/Si C混合器件比相同芯片面积下的SiC  MOSFET和Si IGBT的导通压降在全负载电流下更小。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ4Ak4KHxHqnic8SPo4D6woy7NiazOYHNetGiaKcItHrBhKOMXSdzxj6hkg/640?wx_fmt=png&from=appmsg)

除了上述导通特性的优势外，混合器件内部的SiC MOSFET和Si IGBT通过 异步开通和关断实现轻载时IGBT的零电压开关，从而进一步降低混合器件的开关损耗。针对SiC/Si混合器件的优异特性，近些年国内外多个研究机构和高校对 SiC/Si混合器件及其应用进行了研究。北卡罗莱纳州立大学团队最早在2014年研 究了6.5kV SiC/Si混合器件的关断特性，研究结论得出相较于Si IGBT，混合器件的成本仅增加50%的情况下开关损耗可以降低70%；随后，研究了1200V  SiC/Si混合器件的开关特性，并对不同IGBT和MOSFET面积比情况下的性能和 成本折衷进行了初步的分析；为了实现混合器件中IGBT的零电压开关，需要两个独立的驱动信号来驱动混合器件，增加了驱动的成本和复杂性，针对这一问 题，设计了一款简单并且具有关断延时的驱动，为了适应单款驱动的使用，又设计了一款三端口的SiC/Si混合器件模块。另外，西安科技大学团队在简化混合器件驱动的问题上做了进一步的研究，在一颗驱动芯片的情况下通过较简单的RC延时电路实现了混合器件不同的开关时序。ABB公司于2016年对SiC/Si 混合器件的均流特性进行了初步的探讨，研究表明改变SiC/Si混合器件的栅极电阻和芯片面积比均可以影响SiC/Si混合器件的动态电流分配。

 美国俄亥俄州立大学Fang Luo团队在2017年研究了Si IGBT和SiC MOSFET之间不平衡寄生电感对器件动态分流的影响，针对不同的不平衡寄生电感对应不同的栅极时序，并通过实验证明了对于图1.6所示的栅极时序模式，模式II是可以最大化降低SiC/Si混合器件开关损耗的最优选择。中科院宁圃奇团队研发了电压等级1200V电流等级200A、400A、600A的Si/SiC混合器件模块，为了解决 IGBT关断后误开通的问题，又设计了带有弥勒钳位的驱动来降低IGBT的d Vge/dt， 最终在30KW的电机驱动平台上进行了验证。美国GE通用电气Jiangbiao He 团队提出了一种基于SiC/Si混合器件变换器随负载电流变化的控制策略，意在降低SiC/Si混合器件损耗的同时降低了SiC MOSFET在开关过程中的过流应力。

湖南大学王俊团队从2018年开始就SiC/Si混合器件的控制策略、可靠性及故障分析、芯片面积配比以及EMI干扰等方面进行了研究。文献\[45\]提出了一种降 低SiC/Si混合器件开关损耗的同时使得MOSFET和IGBT的结温相近的热平衡控 制策略。文献\[46\]建立了SiC/Si混合器件电热耦合损耗模型，并提出了不同负载 下动态改变栅极时序的控制策略来最小化MOSFET和IGBT的结温差异。文献\[47\] 提出了一种基于粒子群智能算法的可调栅极延时控制策略，实验证明相比于固定时序该控制方法可将SiC/Si混合器件的总损耗降低6.2%。文献\[48\]在文献\[44\]的基础上进一步优化了时序延时时间，并根据不同负载电流谐波含量调整开关频率使得逆变器的效率进一步地提高。在SiC/Si混合器件可靠性及故障分析方面，文 献\[50\]研究了SiC/Si混合器件的短路失效机理，实验表明栅极驱动电压和直流母 线电压对混合器件的短路能力有很大的影响，而SiC MOSFET的芯片尺寸和器件 外壳温度对混合器件短路能力的影响不是很大；文献\[52\]\[51\]分析了混合器件的冗余特性，提出了相应的冗余控制策略，来提高当IGBT或MOSFET在混合器件正 常运行发生故障时逆变器的稳定性和可靠性。为了充分发挥Si C MOSFET的性能并且降低混合器件的成本，文献\[53\]和\[54\]研究了不同SiC MOSFET芯片面积对 SiC/Si混合器件导通特性、开关损耗的影响，通过实验得出当IGBT和MOSFET额定电流比为2:1的组合具有最优的性价比；文献\[55\]建立了以SiC MOS芯片面积为输入，损耗和结温作为输出的SiC/Si混合器件损耗模型，通过最小化SiC芯 片面积优化器件损耗并使器件最大结温低于150℃。 

针对SiC/Si混合器件的EMI特性，美国俄亥俄州立大学Fang Luo团队早在 2018年基于DC-DC Boost电路对混合器件进行EMI传导的初步分析，实验表明 HyS的共模噪声传导介于SiC MOSFET和Si IGBT之间；湖南大学王俊团队提出了一种通过不同负载电流下改变开关频率的控制策略来抑制混合器件共模EMI噪声，随后又研究了不同电流配比下的共模EMI特性，实验表明随着IGBT和MOSFET的额定电流比增加混合器件产生的共模EMI噪声也越严重。 

1.3 Si IGBT/SiC MOSFET混合器件发展存在的不足 

虽然现阶段对于Si/Si C混合器件的电流分配已经有一些学者进行了研究，但 现有研究得出的实验规律不论是距离理论分析还是具体实际应用之间依然存在很 大的空间值得深入研究，具体如下： 

① 现阶段大部分Si/SiC混合器件的研究是基于轻载或中载电流工况，无法凸 显并联器件增加电流容量的优势，缺少对Si/SiC混合器件重载或额定工况下的研 究，同时，Si/SiC混合器件在开通关断过程中存在过流应力问题； 

② 由于Si IGBT和SiC MOSFET的器件结构差异，导致其开关过程较相同类 型并联器件更加复杂，对于Si/SiC混合器件而言，缺少比较详细的开关过程分析； 

③ 尚无Si/SiC混合器件栅极电阻的设计指导，现阶段混合器件的栅极电阻选 取缺乏理论和应用支撑。 

1.4 本文研究内容 

本论文的主要研究目的是：以Si IGBT和SiC MOSFET混合器件为研究对象， 系统地研究了不同芯片面积配比下Si/SiC混合器件所面临的过流应力问题，不同 栅极电阻对Si/SiC混合器件重载下动态电流分布的影响，根据实验规律总结出了 混合器件驱动电阻的设计指导，为Si/SiC混合器件在变换器中的应用提供了新思 路，打破了单一Si IGBT和SiC MOSFET功率器件的技术壁垒，为高可靠性、高 频、大电流容量的Si/SiC混合器件工程应用化奠定了基础。本文后续章节所提及 的Si/SiC混合器件均指的是Si IGBT/SiC MOSFET。 

论文的主要内容和章节安排如下： 

第一章，结合国家发展战略需要、相关政策以及电力电子器件相关调研报告， 分析并总结了混合器件的研究背景意义、发展前景以及研究现状；并根据研究现 状总结混合器件存在的不足。 

第二章，器件配比对重载下Si/SiC混合器件分流的影响。本章首先分析了 Si/SiC混合器件的静态特性，并根据导通特性提出了Si/SiC混合器件额定电流的 计算方法。搭建了双管并联双脉冲测试平台，针对不同电流配比下工作在额定电 流的Si/SiC混合器件进行测试，详细分析了不同电流配比情况下混合器件常温和 高温的分流情况，并结合功率器件的安全工作区，阐述了Si/SiC混合器件工作在 重载情况下，IGBT和MOSFET可能遇到的过流应力问题。 

第三章，抑制Si/SiC混合器件HyS动态过流应力的方法分析。本章承接上一章发现的过流应力问题，研究了Si/SiC混合器件较复杂的开关过程，通过理论结 合仿真分析找到缓解过流应力的方法。首先从器件特性及电路的角度，对分别采 用数据手册推荐的栅极电阻和优化栅极电阻的重载下Si/SiC混合器件的开通关断 行为进行了详细的分析；其次，建立了Si/Si C混合器件半导体器件模型，从半导 体物理的角度揭示了不同栅极电阻模式下负载电流在IGBT和MOSFET元胞内动 态分布的情况，与瞬态行为理论分析相对应。 

第四章，栅极电阻对Si /SiC混合器件HyS开关特性的评估。本章基于第三章的行为分析，研究了如何更好地将栅极电阻落实在Si/SiC混合器件的应用中。首 先研究了不同栅极电阻下混合器件开关特性的变化规律；其次分别从理论和实验 对工作在重载下的混合器件调节栅极时序和调节栅极电阻两种开关模式进行了对 比，突出了调节栅极电阻的优势；结合混合器件开关特性的变化规律，得到 MOSFET栅极电阻和IGBT栅极电阻在混合器件开关过程中所起到的作用，最终 总结出混合器件在Si/SiC混合器件实际应用中的设计指导。 

第五章对全文工作进行了总结，列举了本研究的创新点和主要贡献，并展望 未来可以进一步深入研究的重点和方向。 

2\. 器件配比对重载下Si/Si C混合器件分流的影响 

2.1 引言 

SiC MOSFET作为第三代宽禁带半导体，凭借轻载下极低的导通损耗以及极 高的开关频率被认为是未来代替Si IGBT的主流器件。然而，目前SiC MOSFTE 的成本依然是Si IGBT成本的五到八倍。因此，大电流Si IGBT和小电流SiC  MOSFET两者并联形成的混合器件实现了功率器件性能和成本的折衷。然而，现阶段很多Si/SiC混合器件特性和控制策略的研究都是基于轻载或中载的情况，比 如：40A的Si IGBT和12.5A的SiC MOSFET组成的Si/SiC混合器件工作在40A 的工况下，显然MOSFET的电流容量没有很好的利用。 

本章首先根据Si IGBT和SiC MOSFET不同的器件特性分析了Si/SiC混合器件的稳态导通特性，提出了Si/SiC混合器件额定电流的计算方法，搭建了双管并 联双脉冲测试平台，研究了常温和高温下，不同MOSFET和IGBT的器件配比对 混合器件重载下电流分布的影响，总结并分析了工作在额定电流下的Si/SiC混合 器件因经历过流应力而引发的可靠性问题。 

2.2 Si/Si C混合器件额定电流的计算 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJonb217S5ukrMhtuXuj6ic9O0FSJDGUvoIkADKs4jRGrtQt65lts2osA/640?wx_fmt=png&from=appmsg)

图2.1所示为Si/SiC混合器件的结构。同种类型相同的器件并联时的额定电流为并联器件数量与单个器件额定电流的乘积。然而，由于Si IGBT和SiC  MOSFET两种器件的类型不同， Si IGBT和SiC MOSFET并联而成的Si/SiC混合器件Hy S其额定电流IHyS并非直接相加那么简单。本节以Infineon公司CoolSiCT M系列的SiC MOSFET (IMW120R090M1H：1200V/25A)的和TrenchStop系列的Si  IGBT (IKW25T120：1200V/50A)为例，根据混合器件的导通特性来确定HyS的额 定电流。 

2.2.1 Si/SiC混合器件正向导通特性 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJIMxmMsic5KOT7iboe1pRTssw5QP1yUEMILY1L2O3oH20VrldL04jUziaw/640?wx_fmt=png&from=appmsg)

Si/SiC混合器件结合了Si IGBT和SiC MOSFET导通特性。图2.2(a)为沟槽栅 Si C MOSFET的导通电阻在MOSFET元胞内部的大致分布。MOSFET在导通的过 程中呈现线性电阻特性，导通电阻Rds(on)由源极电阻RN+、沟道电阻Rch、漂移区电阻RD、衬底电阻RSUB以及源极和漏极的接触电阻组成。如图2.2(b)所示，为IGBT的元胞结构，当集电极发射极间电压小于集电结内建电势时，IGBT几乎不 导通。因此，IGBT的导通特性曲线存在一个拐点电压。当集电极发射极间电压大于集电结内建电势时，双极性器件IGBT在导通时，集电结处的P区内部在外界电压的作用下向漂移区n-去注入空穴，与漂移区的电子形成等离子体降低了漂移区内部的电阻，该现象成为电导调制效应。 

当Si/SiC混合器件工作在轻载情况时，此时由于IGBT的拐点电压，因此电 流主要从具有低导通电阻的SiC MOSFET中流过；当负载电流增加时， IGBT随着漏源电压的增加逐渐开通，负载电流主要从导通电阻较低的IGBT流过。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJZZYBOia4OwZzwwxACibic9LQNYkPuILkEicMpduanYvtpYgzQmicThNX9WA/640?wx_fmt=png&from=appmsg)

如图2.3(a)所示，当器件的壳温为25℃且负载电流小于4A时，此时器件的导通压降未超过Si IGBT的拐点电压，Si IGBT依然关断，所有负载电流流过SiC  MOSFET；随着负载电流增加，导通压降也逐渐增加并超过Si IGBT的拐点电压 时，Si IGBT和SiC MOSFET共同承担负载电流，此时由于IGBT的电导调制效应，更多的负载电流流经Si IGBT使得Si/SiC混合器件在流过更大的负载电流时， 器件两端的压降变换幅度很小。SiC MOSFET的沟道电阻的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNjBjm0js1nqdHGUgBibFMcHYTWQwnHfW8apKSNPrqSicjpyiabbUfW93g/640?wx_fmt=png&from=appmsg)

 其中，L为沟道长度，P元胞宽度，μn为沟道电子迁移率，Cox为栅氧电容，VG为 栅极电压。对于MOSFET而言，随着器件温度的增加，阈值电压Vth降低，导致 沟道电阻的降低；随着温度的增加，器件材料的晶格震动加剧导致载流子散射程度会增加，从而导致导通电阻和漂移区电阻增加。因此，SiC MOSFET的导通电 阻随着温度的变化是由以上两种因素决定，从图2.3可以看出SiC MOSFET在全负载电流范围内呈现正温度系数。

对于Si IGBT，除了载流子迁移率随着温度的增加而降低外，载流子的寿命 会增加，所以温度增加会导致IGBT漂移区电阻降低，漂移区电阻随温度的变化 规律由上述两种机理共同决定。另一方面，温度升高，半导体器件内部本征载流 子增加，从而导致IGBT集电结的内建电势降低，即拐点电压降低。如图2.3所 示，当器件的壳温增加到150℃时，拐点电压从0.66V减小到0.45V，同时在小电 流范围内由于载流子寿命增加的效果显著，因此Si IGBT在小电流时呈现负温度 系数。随着负载电流的增加，载流子迁移率降低逐渐占主导因素导致IGBT在大 电流下呈现正温度系数。所以相同的导通电压下，高温下Si IGBT流过的负载电 流远比低温下的要小很多。结合上述分析，Si/SiC混合器件在全负载电流范围下 也呈现正温度系数。根据图2.3所示的Si/SiC HyS的正向导通曲线可以看出，相 同的负载电流时高温下Si/SiC HyS的导通压降明显高于常温下Si/SiC HyS的导通压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJRghnu9rSKKYMgtPibbjSd2IpqA4p493nduMib7brS2WNOxtBpty196NQ/640?wx_fmt=png&from=appmsg)

根据(2.1)可知，选定器件时，改变器件的栅极电压可以改变器件的沟道电阻。 图2.4(a)展示了不同栅极电压下（IGBT和MOSFET的栅极电压相同）Si/SiC混合 器件的I-V特性曲线，沟道电阻随着栅极电压的增加而降低，因此栅极电压越高 混合器件流过相同的电流产生的压降就越低。图2.4(b)为不同栅极电压下IGBT的 导通电流和SiC MOSFET导通电流的比值，结果表明当栅极电压增加时， MOSFET导通的电流越多；在同一栅极电压下，IGBT导通的电流也随着负载电 流的增加而增加。 

2.2.2 额定电流具体计算方法 

本小节根据上一小节中对Si IGBT和SiC MOSFET导通特性的分析，并结合器件数据手册中的I-V特性曲线对Si/SiC混合器件的额定电流进行计算。结合器件的I-V特性曲线，可以将Si IGBT等效成一个差分电阻RCE和电压源Vknee，SiC  MOSFET可以等效成一个导通电阻RDS。那么，稳态时IGBT和MOSFET的电流 表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJjdrTW8I4tJYlXRgHT4TJXzgZw1Rs14UrIpZm01Gc4ILWTT1DgnpDcg/640?wx_fmt=png&from=appmsg)

 在混合器件额定电流计算的过程中，为了保证混合器件能够长时间运行在此 电流下，IC和ID计算出来的结果通常要小于等于IGBT和MOSFET的额定电流值。 为了更充分利用Si/Si C混合器件的电流容量，通常是一个器件的电流到达额定电 流值，另外一个器件的电流小于等于额定电流值，不同厂家不同电流容量的IGBT和MOSFET最终情况可能不同。本研究中先假设IGBT可以达到额定满载 电流值ICr，之后计算MOSFET的运行电流值ID。此时，IGBT的端电压VCE与SiC  MOSFET端电压VDS相等，该VDS对应的电流ID即为MOSFET额定运行值。通过 调节VGS可以使得该导通电压下Si C MOSFET流通电流ID ≤ IDr。对(2.2)或(2.3)进 行变形可以得到ID的表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJsE1EebIpWfz0aZlwhPwibGXUj0g1LCIfpEXaaqNmgFLPg5icEaUf8g9w/640?wx_fmt=png&from=appmsg)

混合器件的额定电流的表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ0AMyHpPde6s19osOnx8Y8xFVcatoYibmNk9xdwefMKVjJyiazaDG4J7Q/640?wx_fmt=png&from=appmsg)

 若计算出来的ID在任何VGS下都大于IDr，则说明混合器件运行在额定电流下时，MOSFET最先达到额定运行条件。因此，这时应该先假设MOSFET达到额定 满载电流值IDr，之后再计算IGBT的运行电流值IC。此时，额定电流表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJosVk5SZpFg2KYbWb4nZblZD9BQqdom4XlJib7bovazmcZaF7NVGLooQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9ucqFzW4pLS0UJRber7fgLh5msYzI5y2IgX8dcRPPTEd4pMkARBfWQ/640?wx_fmt=png&from=appmsg)

实际上，器件数据手册上的器件额定电流值是根据芯片的热稳定性计算得到 的。因此，根据IGBT和MOSFET的额定电流ICr、IDr计算Si/SiC混合器件的额定 电流是具有参考价值的。下面以IMW120R090M1H和IKW25T120为例，对器件 在常温和高温下分别进行具体的计算。根据数据手册可知，IGBT在壳温为25℃时的额定电流为50A，MOSFET在壳温为25℃时的额定电流为25A。以IGBT和 MOSFET数据手册中芯片结温Tvj为25℃的I-V特性曲线为基准，IGBT的栅极电压VGE选为15V，如图2.5(a)所示，此时对应的导通压降为2.7V；因为IGBT与 MOSFET并联，所以MOSFET导通时的压降也为2.7V，在图2.5 (b)上找到电压为2.7V的竖直虚线，此时对应着一系列不同栅压的导通电流，MOSFET栅极电压选择20V，此时对应的导通电流约为25A。所以在25℃下Si/SiC混合器件的额定电 流可以为IGBT和MOSFET额定电流之和，即75A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJRx8v3XwjiaeIhb3vw6JQ6WaiaAxma0nbibqkW76Fc3VJwgeNhJkFPy2zg/640?wx_fmt=png&from=appmsg)

结合(2.4)和上述分析可知，在Si/SiC混合器件的实际应用中，器件具体导通的电流大小并不唯一，该值与器件的栅极电压与结温有关。对于栅极电压的选择， 需要根据器件数据手册上推荐的范围来选定，否则为了降低导通电阻而一味地提 高栅压，势必会降低器件栅氧可靠性。 

当器件壳温为100℃时，Si/SiC混合器件额定电流的计算思路与常温时大致相 同。根据数据手册可知，IGBT在壳温为100℃时的额定电流为25A，MOSFET在 壳温为100℃时的额定电流为18A。因为芯片的耐热能力是一定的，器件正常工 作运行时，散热越好器件的壳温越小，由于器件的封装固定即热阻不变，所以积 累在芯片上的温度就越小，对应器件能够导通的电流就越高。所以器件手册中高 温下的额定电流远小于常温下的额定电流。以IGBT和MOSFET数据手册中芯片结温Tvj为150℃和175℃的I-V特性曲线为基准，IGBT的栅极电压VGE依然选为15V，如图2.6 (a)所示，此时对应的导通压降为2.25V；MOSFET导通时的压降也 为2.25V，在图2.6 (b)上找到电压为2.25V的竖直虚线，MOSFET栅极电压选择 20V，此时对应的导通电流为13A，所以在高温和下，Si/SiC混合器件的额定电流 为38A，小于IGBT和MOSFET额定电流之和43A。 

2.3 Si/Si C混合器件不同电流配比下额定电流的验证 

本小节主要针对不同电流配比的Si/SiC混合器件额定电流进行计算，搭建了 600V/75A的双管并联双脉冲测试平台进行混合器件HyS静态电流分布的验证。除此之外，探究了不同电流配比的Si/SiC混合器件动态电流的分布情况。

2.3.1 并联双脉冲测试平台的搭建 

双脉冲测试（Double pulse test，DPT）是被广泛地评估功率器件动态特性性 能的测试平台。通过调节直流母线电压和第一段脉冲的时间来确定被测器件的第 一次关断和第二次开启的电流。因为在整个周期中功率器件只开关两次，所以器件的结温变化忽略不计。整个测试平台如图2.7所示，主要包括双脉冲主电路、 驱动电路、信号发生器、示波器、直流电源以及加热台。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJica6CX1e4vFGvBkxHdkkfiaKHLA2tlpm8Agr3k7vLQoZh9nLOoUHY9pA/640?wx_fmt=png&from=appmsg)

① 电路参数设计及选型 

除了被测的Si/SiC混合器件，双脉冲电路还包括负载电感、直流侧电容以及 门极驱动。负载电感在双脉冲电路中的作用是用来建立器件的开关电流，并在第 一次关断和第二次开通过程中尽可能保持恒定。因此，负载电感L应该足够大从 而在器件开关过程中能够限制电流变化ΔIL，于是有： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJuvLH2WxR4ibEj2mO8w3Nwfjl7vLwnn4iaD396sPjicRlRTRAQuTqjO98g/640?wx_fmt=png&from=appmsg)

其中tsw为一个器件开关的时间，ki为电流纹波常数，一般取1%~5%；以2.2节中选取的IGBT和MOSFET为例，直流母线电压取600V，负载电流75A，ki取1%， 根据IGBT数据手册关断时间为0.6μs，带入到(2.7)得出：L ≥ 480μH，最终电感L 选为568μH。 

直流侧电容的作用是维持直流侧电压的恒定，根据能量守恒定律可知，直流 侧电容电压降落ΔUDC输出的能量等于线路、器件上的损耗和电感上电流上升增 加的能量，于是有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJAX6lw3AHD9gLzyehDk0KA9yz3Ukjjbh5w2FKT2vyaDibWibPkCxCTaDQ/640?wx_fmt=png&from=appmsg)

将(2.8)化简近似得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9w3BRyLDQAHC6LbzySbygtbtOSo15kEaq7OgakoAyXRwld7ia8nTUBg/640?wx_fmt=png&from=appmsg)

ki为电压纹波常数，一般取1%~5%；本实验取2%，带入到(2.9)，得到Cbulk ≥  221.875μF，最终选取240μF的薄膜电容。 

目前针对驱动芯片的类型有光隔离、磁隔离以及电容隔离。光隔离型驱动芯 片主要受限于内部LED的开关速率且容易受温度变化影响，随着使用时间的增加， LED会发生光衰，进而影响驱动的高频使用；磁隔离和电容隔离可以提供较高的 传输速度，相比较电容隔离，磁隔离驱动具有较大的隔离电压，驱动芯片最终选 择英飞凌的1EDC20I12MH，该驱动芯片可以输出高达10A的峰值电流。 

② 硬件电路设计 

在双脉冲硬件电路设计时，除了本身电路功能的实现，在降低寄生电感方面 也进行了优化。寄生电感优化主要从直流母线的布局和驱动板的设计两方面进行。 首先，在母排上，根据电感的定义可知，当交流电流通过某一导线时在导线内及 周围产生交变的磁通量，该导线的磁通量与流过该导线的电流之比即为该导线的 电感。因此，从PCB布线的角度出发，减小寄生电感的主要方法为减小导线处及 周围的交变磁通。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJQAMXTjGXiaC1gNGACXvwIGzkic8Rpvz3tjBAaSxic2RiaovPoeBshrpJ7A/640?wx_fmt=png&from=appmsg)

如图2.8(a)所示，两个相邻且共平面的导线流经相反的电流所产生的磁场分 布，根据右手螺旋定则，两根导线中心处的磁场相互削弱，进而降低这两根导线 整体的寄生电感，所以可以将该种布局应用在双脉冲的直流母线处； 图2.8(b)展 示了三个薄膜电容并联的走线布局，为了在PCB和电容内部形成交错电流，将母 线电源VDC和接地点GND交错排布在PCB的顶层和底层上，进而降低直流母线处的寄生电感。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJiavibMpVia7PrxFI3PYMyicYibVnhbACObprQRqsdACeYZLZnnaxOasiczyg/640?wx_fmt=png&from=appmsg)

对于驱动板的设计，如图2.9所示采用功率回路为母板和驱动板为子板的方 案，其中功率器件的栅极和源极（发射极）直接与驱动板相连，功率器件的漏极 （集电极）和源极（发射极）与母板相连，该方案可以实现一定程度的功率回路 和驱动回路的解耦。一方面，驱动子板可广泛应用在多种逆变器拓扑中，有利于 对功率器件栅极驱动板实现标准化；另一方面，对于驱动板而言，驱动芯片输 出端连接栅极电阻后直连器件的栅极和源极（发射极），大大缩短驱动回路的长 度，从而降低驱动回路的寄生电感；同时，功率器件的漏极（集电极）和源极 （发射极）连接在功率母板上，消除了由PCB额外引起的弥勒电容Cgd或Cgc，降低了开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJLQ8IOwTCv3B3weDXK5oxzwryAEOmyw4ibrQcEFNxOWibDaEgqPogoliaA/640?wx_fmt=png&from=appmsg)

为了降低MOSFET和IGBT的两条支路上寄生电感的差异对两个器件电流的影响，在设计硬件PCB时，要尽力保证SiC MOSFET和Si IGBT到电感、二极管以及母线负压侧电容端的距离一致。为了保证两条支路的完全对称，在PCB设计完成后将PCB文件导入ansoftlink生成HFSS文件，再将其导入到Q3D中，对图2.10所示主回路中分布的寄生电感进行测量。表2.1为寄生电感参数仿真结果， 由参数可知两器件的线路电感仅差了0.49nH，对称性较好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJVQic6O4zlu1kQQvkbbDvY0hXRWEfnXHnfPdMvLGlVwtlw5XfUia0RjUg/640?wx_fmt=png&from=appmsg)

③ 加热平台 

为了测量器件高温时的导通特性，我们搭建了加热平台来模拟器件工作在逆变器中的实际工况。如图2.11所示，加热平台由PID温控仪、24V开关电源、继 电器、加热片以及K型热电偶组成，其中开关电源为PID温控仪、继电器和加热 片供电。开关电源与继电器和加热片构成串联回路，PID温控仪与继电器串联， 热电偶测量加热片的温度并反馈给PID温控仪。当加热片的实际温度低于PID温控仪的设定温度时，继电器导通，开关电源给加热片通电让其继续加热；当加热 片的实际温度高于PID温控仪的设定温度时，温控仪控制继电器断开，让加热片的温度降低到设定温度，如此反复实现对温度的闭环控制，PID温控仪的控制精度在±1℃以内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJycmdiakTbwtNdC2ILiajlecGkvibVU8pmJWYbhbAbFZoVTsEL0GQKTjoA/640?wx_fmt=png&from=appmsg)

④ 测量校准 

为了使测量的动态波形更加准确，需要测量功率器件的电压电流探头具有充 足的带宽来捕获开关波形的上升和下降沿。根据(2.10)可知，开关速度越快，上升 时间tr和下降时间tf越短，从而导致波形的最大等效频率fe越高。为了准确测量 Si/SiC混合器件的开关波形，系统的带宽应为最大等效频率fe的3~5倍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ0wAic0djzlsibuxiaUcicfZj8WCYWic6LZIicZicVicBaC7CaC5OsmzhKy7tEQ/640?wx_fmt=png&from=appmsg)

测量VDS的探头需要有高精度和高带宽的特性，对比了差分探头和无源探头， 最终选用了400M的无源高压探头HVP120；为了测量更加准确的IGBT和 MOSFET的动态电流，将两个10mΩ带宽400M的同轴电阻分别串联到两个功率 器件和地之间来测量电流；除此之外，使用了带宽为1GHz的数字示波器 Lecroy®610Zi来捕获器件的动态波形。  

2.3.2 不同配比下Si/SiC电流分配测试 

本小节选择了如表2.2所示的四种Si/SiC混合器件电流配比，将四种Si/SiC混合器件分别在上述搭建的双管并联双脉冲平台进行测试，使用的Si IGBT和SiC  MOSFET为1200V的英飞凌器件，具体参数如表2.2所示，其中HyS1和HyS2为 相同类型IGBT匹配不同电流的MOSFET，该组合的实验的目的是验证不同电流 容量的SiC MOSFET对混合器件电流分配的影响；HyS3和HyS4为相同负载电流 下不同Si/SiC混合器件的电流配比，该组合的实验的目的是验证器件电流配比对 Si/SiC混合器件分流特性的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJuLd2akunhy0eLX0soreOYyEpHY9oEib7xTUib1qqKnrcniahgI4VS4MDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJtEJIibRP5CClKfMpz53rP0iakd8T6hiaWk6osktoHicGKsD3SyfUjZe8Ig/640?wx_fmt=png&from=appmsg)

 常温条件对应器件的壳温为25℃，高温条件对应器件的壳温为100℃。表2.2 中的高温额定电流是根据结温150℃的I-V特性曲线计算得出的，比实际真实工况下的电流值要低一些。母线电压VDC为600V，开关电流为额定电流的计算值。 IGBT的栅极电压VGT选为-5/15V，MOSFET的栅极电压VGM为-5/15~20V，外部 栅极电阻采用数据手册推荐的阻值（RGText = 22 Ω，RGMext = 2 Ω），采用相同的栅极信号。电流比γ为IGBT额定电流ICr与MOSFET额定电流IDr的比值。ITSOA和 IMSOA分别为IGBT和MOSFET的SOA限制电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJBkDz1IYW0PxWOZJyk8HD6lWcfOjkZ9uOOLL4wNQcpTLgUicFe4jgPvQ/640?wx_fmt=png&from=appmsg)

 图2.12为Hy S1在常温下额定负载电流61A时的电流分布情况，稳态时的Si  IGBT的电流IC为50A，SiC MOSFET的电流ID为11A，与理论计算的电流分布一 致；对于图2.12(a)所示的开通过程，IGBT的开通电流峰值为28A，而MOSFET 的开通电流峰值为46A超过了器件的安全工作区21A；图2.12(b)所示的关断过程 中，IGBT的关断电流峰值为66A低于IGBT的安全工作区；图2.13为Hy S1在高 温下的电流分布情况，电流分配情况与常温相似，MOSFET的开通电流峰值为 30A超过了器件的安全工作区。由于温度升高导致半导体材料晶格散射程度增加， 使得载流子迁移率降低，导致IGBT和MOSFET的导通电阻增加，所以高温下混 合器件的导通压降略微增加，测量结果从2V增加到了3.2V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNAzp4eQ1yR36lgdMUcgaDnjsoFfncr9GqutT1eBZy6FvvqD6gaT55w/640?wx_fmt=png&from=appmsg)

图2.14为Hy S2在常温下额定负载电流75A时的电流分布情况，稳态时的Si  IGBT的电流IC为50A，SiC MOSFET的电流ID为25A，与理论计算的电流分布一 致；对于图2.14 (a)所示的开通过程，IGBT的开通电流峰值为30A，而MOSFET 的开通电流峰值为60A超过了器件的安全工作区50A；图2.14 (b)所示的关断过程 中，IGBT的关断电流峰值为81A高于IGBT的安全工作区75A；图2.15为Hy S2 在高温下的电流分布情况，稳态时的Si IGBT的电流IC为25A，Si C MOSFET的 电流ID为13A，与理论计算值相符。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJzIYq26maxypF1zZg91QtkB80p6Sd1rIFJ2qpTyEicY1iaXHozttbuuKg/640?wx_fmt=png&from=appmsg)

图2.15 (a)所示的开通过程中，IGBT的开通 电流峰值为13A，MOSFET的开通电流峰值为45A；图2.15 (b)所示的关断过程 中，IGBT的关断电流峰值为45A，全部在安全工作区之内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJJujb39iacEKcqdgC0a0wJO4JOxlGyASGic0gNZKnlD4ia4AE3SoTnGFjg/640?wx_fmt=png&from=appmsg)

图2.16为两组工作在额定负载电流41A不同电流配比的混合开关电流分布对比图，对于HyS3组合，Si IGBT的稳态电流IC为30A，SiC MOSFET的稳态电流 ID为11A，与理论计算值大致相同，IGBT的开通电流峰值为22A，而MOSFET的 开通电流峰值为34A超过了器件的安全工作区21A，IGBT的关断电流峰值为46A， 略微超过了IGBT的安全工作区；对于HyS4组合，Si IGBT的稳态电流IC为16A， SiC MOSFET的稳态电流ID为25A，与理论计算值大致相同，IGBT的开通电流峰 值为21A，MOSFET的开通电流峰值为40A，IGBT的关断电流峰值为36A，超过 了IGBT的安全工作区；图2.16可以明显看出，HyS4中的IGBT关断时间显小于HyS3中的IGBT关断时间，因此可以得出在相同额定电流下，MOSFET的电流容量越大，其混合器件的开关过程就越快，混合器件的开关损耗就越小。 

综合上述实验波形分析可以得出如下结论： 

① Si/SiC混合器件的稳态电流在IGBT和MOSFET的实际分布基本与理论值 相吻合； 

② 通过对比HyS1和HyS2中混合器件的动态电流分布可以得出：组成Si/SiC 混合器件的SiC MOSFET或Si IGBT的电流容量过小时，在不加外部调节手段的 情况下，若想保证混合器件的可靠性，那么混合器件的额定电流将受到限制，这 使得较大电流容量的IGBT或MOSFET没有被充分利用，造成了很大程度的浪费； 

③ 结合HyS3和HyS4中混合器件的动态电流分布可以得出：在Si/SiC混合 器件相同额定电流的情况下，不论MOSFET和IGBT如何匹配，混合器件的动态电流都有可能超过MOSFET和IGBT的安全工作区，虽然改变电流配比可以改变 Si/SiC混合器件动态电流的分配，但并不能很好地解决器件动态电流过冲的问题； 

④ 对比高温和常温下的电流分布可以得出：高温下混合器件的瞬态和稳态 的电流分配情况基本与常温下的一致，Si/SiC混合器件在高温情况下也存在过流应力的问题。 

2.4 Si/SiC混合器件过流应力分析 

根据上一节测量的Si/SiC混合器件不同配比的电流波形可知，不论哪种电流 配比组合，在混合器件开通和关断的过程中，IGBT或MOSFET都存在过电流应 力问题（动态电流超过了器件的SOA）。本小节以常温下IMW120R090M1H和 IKW25T120为例，先对混合器件的动态电流进行定量描述，再从SOA的边界条 件分析可能存在的可靠性问题。值得注意的是：本章所介绍的边界条件是正向安 全工作区（FBSOA），对应的是工作在放大状态的功率器件；而电力电子器件大 多工作在开关状态，本文中描述器件动态电流过冲对应的是开通和关断安全工作 区（SSOA）。对于SSOA，一般由dv/dt、击穿电压和最大限制电流来限定，其中 最大dv/dt的限定是防止器件关断时发生误开通，其余限定条件与FBSOA基本一致。  

2.4.1 动态过流应力 

在多个相同器件并联的开关过程中，由于功率模块的布局或驱动回路参数不 匹配等原因，其中的个别器件也会存在动态过流应力等问题。而在Si/SiC混 合器件中，由于器件结构本身的差异，IGBT和MOSFET的开关过程很难同步， 所以当Si/SiC混合器件运行在过载或满载情况下，必然存在MOSFET或IGBT导 通所有的负载电流经历过流应力的情况，尤其对于小电流的MOSFET而言，较大 的负载电流在器件开关过程中流过器件并超过了SOA的最大限制电流，会降低了 器件的可靠性。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJAeCOck66R8Sf234APia41JuahwzX4fPnibZoZdId8J4FvaSrvYgiadX5g/640?wx_fmt=png&from=appmsg)

关于SOA的限制电流具体由哪些边界条件来限制，下面以IMW120R090M1H 的正向安全工作区（图2.17）为例进行简要介绍。FBSOA即表示栅极电压超过阈 值电压时所对应的SOA。如图2.17所示，MOSFET的SOA的边界由四条线定义， 分别是：导通电阻RDS（蓝线）、最大限制电流（红线）、最大限制功率（黄线） 以及击穿电压（绿线）。由四条线所围成的区域为MOSFET可以安全稳定地运行的区域。 

如图2.17所示，RDS限制线给出了VDS和ID的线性关系，如(2.11)所示，该线 的斜率是VGS=10V，Tj=150℃的最大导通电阻RDS。当栅极电压、结温变化时， RDS限制线也会相应地发生变化。较低的VGS导致较大的RDS，从而导致导通电阻 限制线越低。当器件结温低于150℃时，RDS降低导致导通电阻限制线升高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJYvMJVtLNqrlFxDFUf4eNZdiajB19HtjxPCicVo9g4jaEaSK7RrLzpcNg/640?wx_fmt=png&from=appmsg)

沿着RDS限制线朝着电压和电流增加的方向是最大限制电流，该最大限制电流主要由器件的封装决定，具体体现在键合线的数量和尺寸，不同的封装类型对 应不同的最大通流能力，该电流通常大于器件的额定电流。当器件的封装确定后， 最大限制电流也随之确定，不随环境温度等其他因素的变化而变化。 

沿着最大限制电流继续增加电压，遇到的橙黄色的线对应的是最大限制功率， 该限制线是由器件在热平衡状态下到达稳定150℃结温和25℃壳温下的最大功率 计算出来的。器件工作的冷却系统、壳温以及热阻等变量对该限制线将有重要的 变化。对于热平衡，即器件产生的功率等于耗散的功率。对于该限制线上的电流有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJeZyBoDU5Ac4tCSWepy0tmjMJsg1UJVt2kF7h5WNAC0iaqtKD6dRWXlw/640?wx_fmt=png&from=appmsg)

其中，ZthJC(tpulse)为不同脉冲宽度下器件芯片到外壳之间的瞬态热阻，具体值可参 考器件的数据手册。根据(2.12)可知，最大限制功率上的电流值主要取决于由器件 允许的最大结温与器件壳温之间的最大温差ΔTmax。ZthJC(tpulse)的大小主要取决于 导通脉冲的长度以及占空比，在环境温度不变的情况下，脉冲越长且占空比越大 等效热阻越大，最大限制功率曲线向下移动。在耗散功率不变的情况下，电压越 大，电流越小。 

SOA最右侧的边界由器件的击穿电压所限定，击穿电压随着器件结温的降低 而略微降低。因此，在器件工作时必须要考虑器件实际工况的环境温度。IGBT和 MOSFET过流比的定义如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNVU3BPGcB9Ly6nc3dSSOpYdoxnQyr3o7CGWia5IT2mfotJibNMmVN9cw/640?wx_fmt=png&from=appmsg)

其中，ITp和IMp分别为IGBT和MOSFET在开关过程中的峰值电流。结合上述对 SOA边界条件的分析可知，当器件长时间工作在过流比超过1的工况下，器件键 合线上会经历热应力，热量会沿着键合线传递到芯片上，由于芯片和键合线之间 的热膨胀系数不同，产生的机械应力会让键合线发生脱落，从而降低器件的可靠 性。根据MOSFET和IGBT的数据手册可知：ITSOA=75 A，IMSOA= 50A。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJwQ58RUwXtf1w2bic4wg98rJLIyKwgDt4gOeWW6LVX47Qd4pYFicb5GHQ/640?wx_fmt=png&from=appmsg)

为了体现Si/SiC混合器件中由于器件结构差异而导致的分流问题，将单个 MOSFET和IGBT工作在额定电流的情况与混合器件工作在额定电流的情况进行 了对比。图2.18和图2.19分别展示了MOSFET和IGBT在混合器件中和单独开关 情况下的波形对比。对图中波形的特点进行了量化，总结在了表2.3中。由上述 图表可知，不论是在混合器件还是单个器件的情况，MOSFET和IGBT在两个情 况中开通和关断的di/dt基本相同。单个MOSFET开通时的过流比为0.6，然而在 Si/SiC混合器件中，MOSFET的开通过流比为1.6；在混合器件中IGBT的关断过 流比为1.2，超过了单个IGBT关断时的0.76。因此，相比于单个MOSFET和IGBT工作在额定电流的情况下时，混合器件中的IGBT和MOSFET更容易面临可靠性问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJjyax3mib1icMgmC7ES6LSLGSGbSu64bytbQgGZBaJDSujujKFianeBLlQ/640?wx_fmt=png&from=appmsg)

2.4.2 过流应力原因分析 

下面对Si/SiC混合器件产生动态过流应力的问题进行分析。Si/SiC混合开关 在相同栅极信号下的动态电流分布主要取决于栅极电阻和输入电容的乘积。输入 电容主要受半导体材料的介电常数、栅极结构、掺杂分布和芯片面积的影响。根 据器件的数据手册可知（图2.20），使用的IGBT的输入电容是MOSFET的两倍。 在现有的研究中，HyS的栅极电阻选择参考了IGBT和MOSFET数据表中的推荐 值。IGBT的外部栅极电阻RGText通常是 MOSFET RGMext 的数倍以上。因此，在栅 极信号相同的情况下，IGBT驱动电路的RC充放电时间常数大于MOSFET。除了RC常数，Si IGBT中的电导调制也会影响HyS的动态电流分布。当混合器件开启时，Si IGBT漂移区的等离子体需要一段时间才能建立起来，这进一步增加了SiC  MOSFET的安全风险。同时，当HyS关断时，Si IGBT漂移区的等离子体扫描也需要一些时间，从而降低了Si IGBT的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJo48RSNvFZSD2hrbhpyibQ6NUOEhouj4naut443ZibOb2ZsADkYkwkFicA/640?wx_fmt=png&from=appmsg)

从本章不同电流配比的角度出发，改变电流容量（芯片面积）大小，相应器 件的栅极电容也会发生改变。在安全工作区的最大限制电流为额定电流两倍的条 件下，当IGBT和MOSFET的电流配比接近1时，混合器件在开通过程和关断过 程的电流过冲对MOSFET和IGBT的键合线可靠性影响最小；当IGBT和MOSFET 的电流配比远远大于1时，开通过程中MOSFET将会承受较严重的过流应力；当 IGBT和MOSFET的电流配比远远小于1时，开通过程中MOSFET的电流过冲不 会超过器件的安全工作区，但关断过程IGBT将承受严重的过流应力。器件的栅 极电容与芯片面积成正比，因此一定存在合适的电容区间使得混合器件的动态电流在器件的安全工作区内，但这必将大大限制了器件的选型，从实际工程的角度 来说，相比于改变芯片面积，调节栅极电阻的灵活性更高。 

2.5 本章小节 

本章的主要目的是研究不同电流规格的IGBT和MOSFET匹配对重载下 Si/SiC混合器件HyS分流特性的影响。首先，阐述了Si/SiC HyS的导通特性，并 根据导通特性提出了Si/SiC混合器件在常温和高温时的额定电流计算方法；随后， 搭建了双管并联双脉冲测试平台。在常温和高温下，对不同电流容量的MOSFET 和IGBT组成的Si/SiC HyS在额定电流的工况下进行测试，重点观察静态及动态 电流在IGBT和MOSFET中的分布。在开关过程中，器件会经历过流应力，这会 降低器件键合线的可靠性。通过实验发现，在不改变驱动条件的情况下，当 IGBT和MOSFET的电流配比接近1时，重载下的动态电流过冲对器件的可靠性 影响最小；如果从器件配比的角度来改善混合器件的分流问题，则会使得实际应 用中的混合器件的电流配比受到很大的限制。因此，后面的章节将详细研究栅极 电阻对Si/SiC混合器件分流特性的影响。本章内容为第三章Si/SiC混合器件的瞬态分析与仿真、第四章栅极电阻对Si/SiC混合器件开关特性评估奠定了基础。 

3\. 抑制Si/Si C混合器件动态过流应力的方法研究 

3.1 引言 

由于Si/SiC混合器件中IGBT和MOSFET器件结构的差异，因此不同于相同器件的并联，Si/SiC混合器件的开关过程更加复杂。目前，现有的对Si/SiC混合器件开关过程的分析方法大多基于栅极时序控制策略，利用IGBT和MOSFET开 启和关断的延时一定程度实现了两个器件开关过程的解耦，该种暂态分析更适合 于工作在轻载下的Si/SiC混合器件，而对于第二章所描述的重载时的分流问题并 不能提供一个更系统的解决思路。对于重载下的分流问题，需要让IGBT和 MOSFET同时承担相应部分的动态电流，从而保证器件的可靠性。因此，有必要 对工作在重载情况下采用同步栅极信号的Si/SiC混合器件的开关过程进行瞬态分析。 

本章从问题出发，分别从电路和器件物理的角度对重载下同步调制的Si/SiC 混合器件HyS的开关状态进行了分析与仿真，并通过以上分析得出了解决Si/SiC 混合器件分流问题栅极电阻的调节方向。3.2节详细分析了在器件数据手册推荐的 栅极电阻情况下Si/Si C混合器件工作在重载情况时的开通和关断行为；在3.2节 分析的基础上，结合降低器件过流应力的目的，分析出栅极电阻的变化趋势，于是3.3节详细的分析了在优化栅极电阻情况下Si/SiC混合器件的开通和关断行为。3.4节基于Senataurus TCAD半导体仿真软件建立了Si IGBT和MOSFET的器件模 型，结合器件结构详细阐述了不同栅极电阻下Si/SiC混合器件内部的电流分配过程，验证了理论分析中的电流变化趋势。 

3.2 基于Si/SiC混合器件动态过流应力的开关特性分析 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJaH0icApDCSsGWObSjzjHrIGEickFCepKXCb5bDBWPsYVL2icEhSwoI5DA/640?wx_fmt=png&from=appmsg)

为了模拟变换器的真实工况，使用两个并联器件的双脉冲测试来分析Si/SiC  Hy S的开启和关闭行为，如图3.1所示。为了降低开通过程中二极管反向恢复的 影响，上桥臂中的续流二极管采用的是肖特基二极管(SBD)。VDC是直流母线电压， Cbulk是直流母线电容、L、LESL和Lσ分别是负载电感、直流母线电容的等效串联 电感和电路中的寄生电感。这里为简单起见，假设MOSFET和IGBT中的弥勒电 容CGD和CGC在开关期间的值恒定不变。Si/SiC HyS运行在额定电流工况，为了突出栅极电阻对HyS动态行为的影响，IGBT和MOSFET采用同步的栅极信号进行控制以及同样的栅压，MOSFET、IGBT的栅极电阻RGM和RGT描述如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJyDAQk6fiaQQc1TnBhn03hYdsr9vVibSbhmmDiaQev77Fx7pibDg8B1iahcw/640?wx_fmt=png&from=appmsg)

其中RGMext, RGMint, RGText和RGTint分别为MOSFET和IGBT的外栅电阻和内栅电阻。

在本节中，主要的分析对象是采用现阶段大多数研究所设计的电阻模式，即采用器件数据手册中栅极电阻推荐值的混合器件，根据IGBT和MOSFET的数据手册可知，开通和关断过程中推荐的电阻是一样的。RGMext的推荐值在2Ω左右， 而RGText的推荐值在几十欧左右，因此本节讨论的情况有τM < τT，其中τM =  RGM·Ciss, τT = RGT·Cies分别是MOSFET和IGBT的RC充放电常数，Cies = Cgc +  Cge和Ciss= Cgs + Cgd分别为IGBT和MOSFET的输入电容。

3.2.1 开通过程 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJQymWqibSX6SJRVCBdwMff3mH7GJGZKzYicDM85xWIqicKlsSx3F4mHKYA/640?wx_fmt=png&from=appmsg)

如图3.2所示，Si/SiC混合器件采用数据手册推荐电阻的开通过程分为5个阶 段，对于给定的栅极电阻，可以假设负载电流的斜率从t1到t3为常数，具体表达 式如下： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ8n3qdE3mMhTb5PXURvP9yoC6aF3P4Jnr0wR7sAA07AK68bGKrriaFbQ/640?wx_fmt=png&from=appmsg)

其中Ip、Irr和IF分别代表二极管的峰值电流、反向恢复电流和额定正向导通 电流。随着栅极电阻的增加，t3减去t1的差值会增加，而Irr会减少。下面对5个 阶段分别进行详细的介绍： 

阶段1 (t0 - t1):在t0时刻，栅极发射极电压VGE和栅极漏极电压VGS开始上升， IGBT和MOSFET的输入电容Cies、Ciss通过栅极电压源从VGoff向VGon进行充电， VGoff、VGon是驱动的负电压和正电压。驱动电流的大小受到RGM和RGT限制。当 τM < τT时，VGS上升快于VGE。VGS和VGE的表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ0WmDUYn2jr1HA2MNWTN43PMEeNxobQfZLAib23qgsAmB4CDI4GeFcSA/640?wx_fmt=png&from=appmsg)

阶段2 (t1 - t2):当VGS到达阈值电压时，MOSFET的沟道开启，漏极电流开始 上升，具体表达式如(3.6)所示。在该阶段，ID超过了MOSFET的额定电流IDr，并 且VGS达到了栅极电压最大值VC。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJATic2drtRTB7YXOqFDxPC5icWFTEoX8mpxv7BBsESmdm7fBn823Wrjibg/640?wx_fmt=png&from=appmsg)

同时，较大的dID/dt作用在电路中寄生电感Lσ上，导致MOSFET的漏源电压 VDS开始降落，具体表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJexEuUe9iccKLyKiayLDzdic1hnSib2WzU3VkGJ9OgYYqI3MY5uibCiahzlTw/640?wx_fmt=png&from=appmsg)

阶段3 (t2 - t3):当VGE到达阈值电压VTHT时，IC开始增加并且ID持续增加，此 时，MOSFET漏极电流的斜率开始下降，ID可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ5Kl69UeynEELLFC7oicIXmrEjOfRCp9noCtfApicibzqAd1sIibAdGKJww/640?wx_fmt=png&from=appmsg)

当负载电流达到额定负载电流时，因为存储在二极管中的电荷还没有被完全抽取，所以VCE不会瞬间下降。由于二极管的反向恢复，IC继续上升，在t3时达 到开启电流峰值ITp\_on，在VGE上也有相应的小幅度上升。因此，在第4阶段，可 以认为VGE等于VGPT1不变，其中VGPT1是IGBT在开通过程中的米勒平台电压。

当IGBT和MOSFET的开通栅极信号同时触发时，ID和IC之间的初始时间差 Δτon根据(3.4)和(3.5)计算可以表示为： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJGwu4HYias4BLpEVqZwYLEgpcxjq4ticTFaMSzk6wXSVwoHt5BafPsDQQ/640?wx_fmt=png&from=appmsg)

根据式(3.9)，随着RGT增加和RGM减小，仅MOSFET开启的持续时间Δτon将 增加。这是因为较小的RGM可以使MOSFET的开通速度更快，而较大的RGT可以降低IGBT的开通速度。 

阶段4 (t3 - t4): VDS在t3之后迅速下降。MOSFET的栅极电流IGM和IGBT的栅 极电流IGT分别为CGD和CGC充电。VGS上的电压降为IGM和RGM\_ext的乘积。根据 IGBT和MOSFET并联的关系，再结合米勒平台的表达式可以得到VDS的斜率表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJFZhUEyoib3ia75Ll7adT1x08AGFd39wN3yceTODtWDIjuzhUNVh0dFNQ/640?wx_fmt=png&from=appmsg)

其中，VGPM1为MOSFET在开通过程中米勒平台电压。因此，VDS可以表示为： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJY15EGuVl3RCve1k9Xia9qJOrcXTs6icW7LT2zvibaAyN9S4k49X4s5dqw/640?wx_fmt=png&from=appmsg)

在二极管反向恢复结束时，IL恢复到了稳态电流IF，并且ID达到最大值IDpon。 根据器件的跨导特性可知，ID和IC在阶段4可以认定为常数，ID的表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJDXibP3h4m0ZIuLia8Y5hVpMCZCibqDECY7W8CjmfRQQxae04icYSo7R1ibA/640?wx_fmt=png&from=appmsg)

在t4时刻，米勒平台结束，VDS近似为稳态导通电压Von。将混合器件作为一 个整体，根据图3.2中IL曲线可以确定Hy S的导通时间为t1到t4的时间。 

阶段5 (t4 - t5):IGBT和MOSFET的电流还没有达到稳态。此时，IGBT的沟道 电阻随着VGE的增加而减小。因此，在总负载电流保持不变的情况下，ID减小， IC增大。这个阶段可以称为IGBT和MOSFET的换相时间，ID的表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJYgrYeG0qISiaVy4YItYf40aJibIxBxRthQLWibZPicCOa0vqFjKF2BE3OA/640?wx_fmt=png&from=appmsg)

综上所述，SiC MOSFET的开通过流问题主要发生在t2到t5之间。  

3.2.2 关断过程 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJz9bN8v3DU14Zt19Qo56JtHddS6J7cNA76YTsWt0x6Sr5TXUfaxRLYw/640?wx_fmt=png&from=appmsg)

如图3.3所示，Si/Si C混合器件采用数据手册推荐电阻的关断过程也分为5个阶段，下面对5个阶段进行具体的介绍： 

阶段6 (t6 - t7):在 t6时刻，栅极电压源从VGon变为VGoff，VGE和VGS开始下降。 与开启瞬态类似，VGE下降得比VGS慢。当VGE = VGPT2时，其中VGPT2为IGBT关 断过程中的米勒平台电压，集电极电流IC保持恒定。因此，可以认为IGBT从t6 到t8期间一直处于导通状态。该种电阻模式下MOSFET关断，伴随着VDS振荡和略微增加，所以可以近似实现MOSFET的零电压关断，ID随着VGS的降低而降低。 VGS、VGE和ID的表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJYdSFDuG8FZ2Sq0SmvcxbeiaKgUtric12U9bxhzTl1yAjYghffs2JKjsA/640?wx_fmt=png&from=appmsg)

其中，βM是与MOSFET结构和掺杂有关的常量。

阶段7 (t7 - t8): t7时刻，VGS达到VTHM。Si IGBT的漂移区内部充满等离子体， ID依然迅速降低，IGBT的电流IC迅速增加并导通全部的负载电流IL，在器件跨导 的作用下VGE产生了电压尖峰。由于实际电路中较大的d ID/dt作用于寄生电感， 在MOSFET关断时会发生振荡，从而导致IGBT关断峰值电流ICpoff。ICpoff可能超 过IGBT的SOA限制电流。经历振荡后，ID达到零，IC下降到IF。VDS因导通电阻 增加而略有增加。IGBT的电流变化率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJSnlJwibV8zhdejjmW2fSoY8k9CJHkexHn3gANLSpC1TNS6qkmLnK2Bw/640?wx_fmt=png&from=appmsg)

 阶段8 (t8 - t9): t8时刻，VGE到达米勒平台电压，ID和IC下降的初始时间差Δτoff， 即IGBT的关断延迟时间表示如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJnzpI1v8IEbcshWEvyVsdKjOB8YS5Ufxicbj9evpyDv46AP7tZ79yzzA/640?wx_fmt=png&from=appmsg)

该阶段，CGD和CGC由栅极电流充电，导致VDS上升，IGM流经RGM\_ext以产生电压降。此时MOSFET已经关断，只有IGBT在导通，所以VDC的斜率可以表示 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJx7gufNU8OJiapKuvUHlNBnKlibJiaYDpUXiaNQezjdMI8X46EoEiceiccefA/640?wx_fmt=png&from=appmsg)

在VDS到达VDC之前，二极管维持了部分直流母线电压。此时，SBD中没有 电流流动。理论上IC保持不变。但实际上IC略有下降，这是因为SBD结电容在 高d VDS/dt下通过IGBT对母线电容进行放电。 

阶段9 (t9 - t10): 米勒平台结束后，VGE继续下跌。由于线路中杂散电感的作用， VDS超过VDC并导致二极管正向流通电流。IC迅速下降IC的斜率可以写为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ4jgFibiaGiaoj4FZYs9pI6Uv57AayosYS5S1HjxQNSibFIj4bgW8ib500Og/640?wx_fmt=png&from=appmsg)

阶段10 (t10 - t11): 在t10时刻，当VGE = VTHT时，IGBT的沟道关闭。IC开始进 入拖尾电流阶段。在t11时刻，IC降为零，Hy S的关断过程结束。 

综上所述，Si IGBT的关断过流问题主要发生在t6到t8之间。 

3.3 抑制Si/SiC混合器件动态过流应力的开关特性分析 

本小节主要内容是基于上一节中具有较大电流过冲的HyS开关行为，对采用 优化电阻模式的Hy S混合器件瞬态行为进行分析。器件的驱动回路可以近似看成 一个RC充放电回路，当MOSFET和IGBT的器件电流确定时，器件的栅极电容 一定，栅极电阻的变化将影响电容充放电的时间常数，具体表现为器件的开通和 关断速度的变化，从而改变了两个器件的相对初始开关时间（纳秒级），这对抑 制器件瞬态的电流过冲提供可能。由于IGBT的电导调制效应，开通过程中的优 化栅极电阻可能与关断过程的栅极电阻不同。下面具体介绍栅极电阻抑制Hy S混 合器件电流过冲的开关过程。  

3.3.1 开通过程 

由3.2.1节可知，IDpon由二极管结电容充电电流ICd和更多负载电流组成。ICd 占IDpon的小部分，是dVDS/dt的函数。根据3.2.1节的分析，为有效消除Si C  MOSFET开通的过电流应力，应先开通IGBT并让IGBT承载比MOSFET更大的 开通负载电流。等式(3.9)表明RGM和RGT可以在纳秒时间尺度内改变IGBT和 MOSFET的相对初始开通时间。所以应该有Δτon (RGM, RGT) ≤ 0，也就是在 datasheet推荐栅极电阻值的基础上增加RGM和减小RGT，从而使αMon < 1。本节中， Δτ的定义是为了便于理论分析，实际应用中，关于Δτon的具体值取决于功率器件 的选型以及不同的工况，具体的电阻取值将会结合实验规律以及经验公式在4.4 节中介绍。如图3.4所示，Si/SiC 混合器件优化栅极电阻的开通行为详细介绍如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJb4tFhdZ22hfOn2q5r6X3kRpIqQsibWezRj8icr141cGOSl74Jkp4kJKg/640?wx_fmt=png&from=appmsg)

阶段1 (t0 - t1):在t0时刻，栅极发射极电压VGE和栅极漏极电压VGS开始上升， IGBT和MOSFET的输入电容Cies、Ciss通过栅极电压源从VGoff向VGon进行充电， 此时有τM > τT时，VGE上升快于VGS，VGE和VGS表达式如(3.4)和(3.5)所示。 

阶段2 (t1 - t2):当VGE到达阈值电压VTHT时，IGBT的沟道开启，集电极电流开 始上升，具体表达式如(3.21)所示。由于电路中寄生参数的存在，该阶段VDS开始 下降，具体表达式如(3.7)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJcpicNKG3vTvhXbiawRJqECq2YQ6ibrYzln5b7X9WpF4vv6fCw3w9kVlwA/640?wx_fmt=png&from=appmsg)

阶段3 (t2 - t3):当VGS到达阈值电压VTHM时，ID开始增加并且IC持续增加，该 阶段当IL = IF时，二极管反向恢复电流流入MOSFET和IGBT中。IC可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxvIxKvy4DhibY2WG4hUmXD9VGsBIUERBwAh6KBe6ibcWoAGssZiafOujg/640?wx_fmt=png&from=appmsg)

阶段4 (t3 - t4): 在t3时刻，IC到达了开通的峰值电流ICpon，二极管反向恢复结 束，VDS快速下降，在t3之后迅速下降。同时，MOSFET的栅极电流IGM和IGBT 的栅极电流IGT分别为CGD和CGC充电。因此，VGE和VGS上出现米勒平台，VDS的 斜率表达式如(3.10)所示； 

阶段5 (t4 - t5): 在t4时刻，米勒平台结束，VGS和VGE继续上升。由于VGS上升 超过VGE，因此MOSFET的沟道电阻迅速下降，导致ID略微上升到峰值电流IDpon。 然后，随着VGS和VGE上升到VGon，IGBT的电导调制效应占主导地位。因此，IC略有下降后上升到稳定状态。同时，ID在适度增加后下降到稳定状态。RGM越大， VGS的上升速度越慢，导致IDpon越小。  

3.3.2 关断过程 

由3.2.2节可知，ICpoff由于大d ID/dt作用在寄生电感上的振荡和总负载电流组 成。为了使αToff < 1，SiC MOSFET以较大的RGM缓慢关闭以减少振荡。此外， MOSFET可以与IGBT一起参与关断过程，承载部分负载电流。结合(3.18)和 (3.20)，在数据手册中推荐的栅极电阻值的基础上增加RGM和减少RGT可以达到降 低IGBT过流比的目的。如图3.5所示，Si/SiC 混合器件优化栅极电阻的关断行为 详细介绍如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJl1AnjiajQVTYib42X5qaBH6mK3petIossc94qGbI5Kq2cJcKX5QVrIyA/640?wx_fmt=png&from=appmsg)

阶段6 (t6 - t7):在 t6时刻，VGE和VGS开始下降。由于RGM大幅增加，VGE下降 速度慢于VGE。与数据手册中推荐的电阻相比，ID下降速度变慢，导致关断过程 中更少的负载电流流入IGBT。随着RGT的降低，IC也将在更短的时间内从导通状 态切换到关断状态。尽管如此，由于IGBT中仍有大量等离子体，IGBT的导通电 阻依然小于MOSFET。因此，当RGM较大时，可以实现ID缓慢下降，IC适度增加。 

阶段7 (t7 - t8): t7时刻，IGT和IGM对CGC和CGD进行放电，VDS开始上升。由于 二极管结电容的存在，IL略有下降。在VGS和VGE上出现了米勒平台。MOSFET承 担总关断动态电流的一部分，从而降低了IGBT的过流应力。因此，受RGT和RGM 影响VDS斜率的表达式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJhChIdomrw0bawHg4J1sCqVuJicl1Lsk7CMdl9HVbK8dtuic2ReIO02Mg/640?wx_fmt=png&from=appmsg)

其中，VGPM2为MOSFET在关断过程中米勒平台电压。 

阶段8 (t8 - t9): 当 VDS达到VDC时，VGS和VGE继续下降。ID和IC开始减少。由 于VGE比VGS下降得更快，所以在t9时刻，当VGE = VTHT时，IC进入拖尾电流状态。 

阶段9 (t9 - t10): ID和IC继续降低。在t10时刻，当VGS = VTHM时，MSOFET的沟道关闭。 

阶段10 (t10 - t11):在t11时刻，IC降为零，HyS的关断过程结束。 

3.4 基于Si/SiC混合器件模型的电流分配仿真 

为了进一步理解负载电流在Si/SiC混合器件内部动态分流的机理，本节通过 Senataurus TCAD建立Si IGBT和SiC MOSFET器件模型，对不同栅极电阻情况下 的Si/SiC混合器件的动态电流分布进行了仿真，通过仿真结果可以直观的看到电 学参数在半导体结构上的变化规律，同时，仿真结果还可以与3.2节和3.3节的理 论分析相对应，从一定程度上验证行为分析的准确性。 

TCAD指的是利用计算机模拟辅助和优化半导体器件结构和半导体工艺的计 算软件。Senataurus TCAD主要通过运算相应的物理模型和偏微分方程模拟出具有 预测价值的结果，在实际工程中起到降低成本并加快研发进程的作用。因此 TCAD仿真在半导体工业中被广泛使用。TCAD主要分为工艺模拟和器件模拟。 不论是哪种模拟都是将设置好的晶圆和器件离散化进行有限元仿真，通过对每个 网格中的方程计算来分析其性质。 

本节主要利用的TCAD工具有：Sentaurus Structure Editor (SDE)和Sentaurus  Device。因本节的主要目的是研究电流分配的机理，并不是建立准确的器件模型， 同时也缺少真实器件的剖面图，因此很难一比一还原器件的结构及特性。和真实 的器件结构相比，在TCAD中所建立的IGBT和MOSFET具体元胞模型是经过简 化处理的。为了保证所建立模型具有实际参考价值，通过改变掺杂浓度、载流子 寿命等参数让器件模型的关键电学参数与实际器件参数相匹配。具体研究思路如 下：首先，在SDE中以几何形式生成MOSFET和IGBT简化过的二维器件元胞结 构；其次，将器件结构导入到Sentaurus Device中进行关键电学参量的模拟，与器 件数据手册中的数值进行对比，若差异较大，则返回SDE中对结构参数进行优化， 直到Sentaurus Device仿真的主要电学参量接近数据手册中的数值；最后，对优化 后的器件结构进行双脉冲仿真，观察动态电流在器件模型中分布。 

3.4.1 SiC MOSFET器件模型 

本文选择的SiC MOSFET均为Infineon CoolSiCT M沟槽栅系列，具体结构如图 3.6(a)所示。具体工作原理为：在栅极源极施加正压时，沟槽左侧P型区靠近栅氧 层的部分会形成反型层沟道；当漏源极施加正压的情况下，电子将从源极一次流 经N+区、沟道、N -漂移区、衬底以及漏极。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdmMiaN33dSxfaYCwiauvPmicQIERbbZBQ7jPI5ia7SLHaFnr6TMYEa50Kw/640?wx_fmt=png&from=appmsg)

该结构与传统的沟槽栅结构不同，沟槽相邻的区域并不是对称的，为了提高 沟道迁移率，沟槽左侧侧壁的MOS沟道与a平面对齐。沟槽底的大部分被嵌入到 了P型区，该P型区的主要功能为：①降低P-body区与源极电极之间的电阻； ②形成一个有效的P型发射极让体二极管更快地续流；③保护沟槽角落处的栅极 氧化物免受由漏极电压所导致高场强的影响。同时，由于很大一部分的沟槽侧壁 与源极相邻，从而导致栅源电容CGS比较大，能够有效抑制该器件应用在半桥结 构中时由寄生开通导致的额外损耗。因此，Cool SiCTM沟槽结构可以使MOSFET 在导通情况下承受较小的栅氧应力来实现较小的导通损耗，同时在阻断状态下也 能满足工业应用的可靠性要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNgUFbic4iakQcPw6Eg29dyfUkDsrK2OFqzFpmEcpvhXA5DD0ic9ibrP0cA/640?wx_fmt=png&from=appmsg)

在器件设计过程中，首先需要考虑的是器件的击穿电压，对于SiC材料而言， 1200V的器件对应的漂移区厚度大约为12μm。随后，根据寄生参数估算器件的芯片面积。由SiC MOSFET数据手册中的C-V曲线可知，寄生电容随着VDS的增加 而减小，最终稳定不变。如图3.6(a)所示，在漏源极施加正压时，CDS处的P-body 与N-drift形成的PN结的电场近似分布如所示。根据图3.7所示的PN结电场分布 的几何关系、泊松方程以及电容定义式得到寄生电容与VDS的关系如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJgrYpzR5200ocv0u6VeSnR9RkDc8rItj3oRRqnAUjQcUtW51NRiakLcw/640?wx_fmt=png&from=appmsg)

其中Em为PN结冶金界面处的电场强度；A为器件芯片面积；ε0、εs分别为真空静 电常数和SiC相对介电常数；ND为漂移区掺杂浓度；d为PN结耗尽层的长度。 CDS处的PN结在反压状态时，随着VDS增加，PN结的耗尽层增加，相当于增大了 CDS极板之间的距离，从而导致CDS减小。当增大到一定程度时，PN结完全耗尽， 此时结耗尽层的长度达到最大和漂移区的长度相等tepi，于是有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJkpyYq4GmVjuzqSlAUYpgJ3kmLdZiaLLQwjDPSiapNsU5msw4FWxJZEWQ/640?wx_fmt=png&from=appmsg)

随着VDS继续增加，CDS保持不变。CGS电容的间距主要由栅氧层厚度决定， 因此在VDS变化时，CGS基本不变随。查阅数据手册可得CDS最终稳定在40p F，将 tepi = 12μm，ε0 = 8.854187817×10-¹²F/m，εs = 9.7代入到(3.25)，算出Si C MOSFET 的芯片面积A ≈ 5.5mm²。 

本节设计的Si C MOSFET是1200V/25A的IMW120R090M1H。由于受 Sentaurus中器件模型边界条件的影响，最终在SDE中生成的元胞结构如图3.6(b) 所示。根据经验参数与反复调试，最终确定了MOSFET器件模型尺寸参数与掺杂参数，如表3.1和表3.2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJDZO16wohRPQtZUKSIzuphyzD0XALJBFdgBJKtq3zcCibK5BUJyR5aMQ/640?wx_fmt=png&from=appmsg)

 在调节SiC MOSFET器件模型尺寸、掺杂和面积等配置的过程中，需要对器 件模型进行关键电学参数仿真的校验。针对SiC MOSFET器件模型关键电学参数 为弥勒电容、阈值电压和导通压降。在器件的数据手册中，当VDS = 800V时，Ciss、 Crss、Coss分别为700p F、4p F、40p F；阈值电压VTHM的范围在3.5V到5.7V之间； 导通电阻Rds的范围在90mΩ到125mΩ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJBjZDwKfyu16Sm7BygDuCvDLZ7rWvhMbKmCp3MLW9iczPVibCIQMOwY0Q/640?wx_fmt=png&from=appmsg)

图3.8所示为Si C MOSFET器件模型C-V 测试曲线，因所建立的元胞栅极结构与实际器件中的栅极结构有差异，所以导致 MOSFET器件模型的Ciss与实际器件中的Ciss也存在差异；对于Crss和Coss，所建 立MOSFET模型与实际器件相吻合，意味着所建立模型能够较好地反应器件的转移特性；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxp7NWubze8FmhUCSo3dFO3Wa3icqibVGGicl2N2g7XUR8KR5SRSH1BBpw/640?wx_fmt=png&from=appmsg)

图3.9所示为MOSFET器件模型阈值电压测试曲线，器件数据手册中对 阈值电压VTHM的定义为VDS = VGS，ID = 3.7mA时的栅极电压，按照定义MOSFET 器件模型的阈值电压为4.57V，在器件手册标定的范围内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdB28HUkewIoJG37xVGvmHFPt5NdKqj52Abn8u24cWP2BJbZ6ZQEiacw/640?wx_fmt=png&from=appmsg)

 图3.10为Si C MOSFET器件模型I-V特性曲线，图中MOSFET漏极电流为 8.5A时对应的导通电阻为101 mΩ，在数据手册标定的范围内。综上，MOSFET 器件模型中的关键电学参数整体上与实际器件数据手册中的参数相匹配，所以该 器件模型具有实际参考意义。 

3.4.2 Si IGBT器件模型 

本文选用的Si IGBT为Infineon TrenchStop系列，其元胞结构如图3.11(a)所 示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJHTfMUqyRRAgkmxXjFPhv6b5jISPVE8yrFeydJibPLKvX15zNwgOFrDA/640?wx_fmt=png&from=appmsg)

沟槽栅器件具有较高的沟道密度，一方面会导致器件的饱和电流密度过大， 降低了器件的短路能力；另一方面，过多的栅槽会增加栅极发射极之间的电容， 导致器件开关变慢；为了解决上述的问题，将很多的栅极替换成了假栅。在仿真过程中，因为带有多假栅的元胞结构比较复杂，为了提升软件运算效率对真实的 结构进行了简化处理，采用了如图3.11(b)所示的元胞结构。由于SiC材料的击穿场强大约为Si材料击穿场强的10倍，因此1200V的IGBT对应的漂移区厚度大约为120μm。最终确定IGBT器件模型尺寸参数与掺杂参数分别如表3.3和表3.4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJWnUP5wib4phkHKJkNQFhpmwNjrocooBicicEz0Rzm7Sc8lBg8E3oYpAwA/640?wx_fmt=png&from=appmsg)

 与SiC MOSFET模型相同，建立IGBT的器件模型的过程中，需要对IGBT的关键电学参数进行校验。IGBT手册中提供的C-V特性曲线的电压范围比较小， 无法像MOSFET一样估算芯片面积，所以IGBT的芯片面积结合50A额定电流并按照Infineon官网裸片的面积进行估算A ≈ 50mm²。针对IGBT而言，阈值电压 VTHT、导通压降VCEsat和关断损耗Eoff为IGBT所建模型的关键电学参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJDae0xjkc3dpibvBzibn1RD8MhdNzzBhsicv0kibv3RE3XITe8pPiaxl2kibw/640?wx_fmt=png&from=appmsg)

图3.12 所示为Si IGBT元胞阈值电压的测试曲线，按照数据手册中对阈值电压的定义： IC = 1mA时，VTHT = 5.65V，在数据手册中标定的5V ~ 6.5V范围内；随后，对建 立的IGBT模型进行600V/25A的双脉冲测试，测量得到当负载电流为25A附近 时，IGBT的导通压降VCEsat为2.13V，落在了手册中标定的1.7V ~ 2.2V的范围内； 关断损耗Eoff为2.9m J，与手册中的2.2m J接近。综上，IGBT器件模型中的关键 电学参数整体上也与实际器件数据手册中的参数相匹配，所以该器件模型具有实 际参考意义。

3.4.3 不同栅极电阻下的混合器件动态电流分配 

在完成Si IGBT和SiC MOSFET器件模型的建立和校验后，将IGBT和 MOSFET器件模型并联组成Si/SiC混合器件，放在如图3.1所示的600V/75A条件 下的双脉冲电路中进行动态特性仿真，观察动态电流在传统电阻（数据手册推荐 电阻）下和优化电阻下IGBT和MOSFET中的分布。 

为了方便标定，下列图中的IGBT和MOSFET元胞采用相同的电流密度 （A/cm2）和流线（A/cm）刻度，但根据表3.1和表3.3的尺寸可知，建立的IGBT 元胞宽度为MOSFET元胞宽度的两倍多，IGBT元胞所在平面的面积远大于 MOSFET的元胞的面积，所以无法通过比较IGBT和MOSFET中的电流密度直观 地看出哪个器件的电流留的更多，电流密度主要是描述单个器件在整个开关过程 中电流在器件中的变化；通过元胞结构中黑色的流线密度比较IGBT和MOSFET 中的电流大小，流线越密代表流经的电流越多。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJhfyElClH2gNJJibqqWvVpD1LEzWqXXBbrPVfXMfu8oeUAeiaY3FKGjpg/640?wx_fmt=png&from=appmsg)

数据手册推荐电阻（τM < τT）：图3.13和图3.14分别为器件数据手册推荐电 阻下开通和关断电流在Si/Si C混合器件元胞中的电流分配，为了方便描述，图 3.13和图3.14中的时间刻度分别对应着图3.2和图3.3 中时刻。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ0HBQBQEjc70iaTdqFuibo5zTpMgB8aq7DDJsCLeJfmx9ZDvtDLyNaeEA/640?wx_fmt=png&from=appmsg)

对于图3.13中推荐电阻下的开通过程，t1时刻对应着MOSFET的栅极电压 VGS和IGBT的栅极电压VGE上升，且VGS刚要达到阈值电压VTHM。此时，IGBT 和MOSFET元胞中栅极处有流线，并且栅极和源极（发射极）部分的电流密度高 于元胞中的其他部分，代表着栅极电流为栅极和源极（发射极）之间的电容充电。 

随着VGE和VGS进一步增加，t2时刻，VGE刚到达阈值电压VTHT，此时 MOSFET已流通电流，但由于VDS仍然在母线电压附近，因此MOSFET的大部分 漂移区依然是耗尽层，导致漏极电流ID从小部分的漂移区流经沟道后，再从源极流出。 

t2时刻之后，集电极电流IC也开始从IGBT小部分的漂移区流经沟道再从集电 极流出，ID继续增加，根据t3时刻IGBT和MOSFET中流线疏密程度判断出ID大 于IC，此时混合器件的总电流等于负载电流和二极管反向恢复电流之和。 

t3时刻之后，栅极电流对弥勒电容放电，VDS开始下降，导致器件漂移区的耗 尽层逐渐减少，导致IGBT和MOSFET中的电流逐渐在漂移区中扩散开来，t3到 t4期间，二极管反向恢复电流逐渐减小，同时二极管寄生电容通过混合器件开始 充电，此时IGBT漂移区的等离子刚刚建立，其导通电阻依然大于MOSFET的导 通电阻，因此导致二极管的充电电流更多的流入MOSFET中，于是t4时刻，米勒 平台结束，IC略微降低和ID略微增加，VDS已接近导通压降Von，ID基本布满了整 个MOSFET的漂移区。 

t4时刻后，VGE继续增加，IGBT的导通电阻进一步降低，导致负载电流从 MOSFET流向了IGBT，t5时刻，开通过程结束，负载电流在混合器件中的分布达 到了稳态，此时栅极电压已经达到了栅极电压源的最大值，器件寄生电容不再有 电流流过，栅极处的电流密度降至蓝色，此时IGBT和MOSFET内部的流线密度相等，根据IGBT元胞宽度约为MOSFET的两倍，换算出稳态时IC大概为ID的两倍，与3.2.1节的分析相吻合。

对于图3.14中推荐电阻下的关断过程，t6时刻为稳态时刻，IGBT和MOSFET 分流的状态与t5时刻相同；t6时刻开始，栅极电压VGE和VGS开始下降，栅极电容 通过栅极电阻进行放电，所以器件栅极处的电流密度开始增加。因为MOSFET的 栅极电阻较小，所以MOSFET关断很快，而IGBT此时漂移区还存在大量的等离子，所以导致MOSFET减小的电流流向了IGBT，从而有t7时刻，IGBT导通了全 部的负载电流，MOSFET元胞中没有流线，ID降为0。 

t7时刻后，因为MOSFET的关断，导致导通电压略微增加，IGBT元胞中流线 数量不变，但流线的分布变得不像之前均匀，t8时刻开始，VGS进入到米勒平台。 

t8时刻后，随着VDS上升，二极管寄生电容通过混合器件进行放电，导致IC 略微减低，t9时刻IGBT流线的数量略微减少，同时IGBT中漂移区的耗尽层部分 增加，导致流线在漂移区两边部分分布比较稀疏，靠近沟道处分布比较紧密，此 时VCE达到母线电压。 

t9时刻后，IC开始快速降低，IGBT中的流线数量减少。t10时刻，VGE降低到 VTHT时，IGBT开始进入拖尾电流阶段，此时VGE还在下降，导致IGBT的寄生电 容中依然有电流流过。当IGBT拖尾电流减小到0，IGBT栅极处的电流密度降为 0时，混合器件的关断过程结束，电流分配过程与3.2.2节的理论分析一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdIEq088zhA8EYAUjB5CpVlJUmiak4piaNicD0pMiaJXeelZPCSquJibgWlw/640?wx_fmt=png&from=appmsg)

根据3.3节中的分析，需要增加MOSFET的栅极电阻并减小IGBT的栅极电 阻，来缓解MOSFET和IGBT中的过流应力问题。对于优化电阻（τM > τT）：图 3.15和图3.16分别为优化电阻下开通和关断电流在Si/SiC混合器件元胞中的电流 分配，为了方便描述，图3.15和图3.16中的时间刻度分别对应着图3.4和图3.5中时刻。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJMLZ4sALg099nE3Nia22hVJePKt3uyUsZ0IdoKgic88YmlnCt1r1oEexg/640?wx_fmt=png&from=appmsg)

对于图3.15中优化电阻下的开通过程，t1时刻对应着MOSFET的栅极电压 VGS和IGBT的栅极电压VGE上升，且VGE刚要达到阈值电压VTHT。此时，栅极和 源极（发射极）部分的电流密度高于元胞中的其他部分，并且IGBT元胞中栅极 处有流线。 

随着VGE和VGS进一步增加，IC逐渐升高。t2时刻，VGS刚到达阈值电压VTHM，此时，少量的电流从IGBT的漂移区流经沟道，再从发射极流出。 

VDS依然较高，因此MOSFET的大部分漂移区依然是耗尽层，导致漏极电流 ID从小部分的漂移区流经沟道后，再从源极流出。 

t2时刻之后，IC继续增加，IGBT中的流线增多，ID也开始逐渐从零增加，此 时，VDS依然较高，因此，IGBT和MOSFET中的流线都只能从小部分的漂移区流 经沟道。由于RGM的增大和RGT的减小，MOSFET的开通变慢，优化电阻下的t3， 时刻IGBT的流线明显多于MOSFET中的流线。 

t3时刻之后，VGS和VGE开始进入米勒平台，栅极电流对弥勒电容放电，VDS 开始下降，导致器件漂移区的耗尽层逐渐减少，IGBT和MOSFET中的电流逐渐 在漂移区中扩散开来，由于栅极电阻的调节，t3到t4期间负载电流在MOSFET和 IGBT中的分布已接近稳态时的分布，IGBT中的流线数量与MOSFET中的流线数 量接近。 

t4时刻后，VGS和VGE继续增加，MOSFET和IGBT的导通电阻进一步降低， 相比于推荐电阻的情况，t4时刻到t5时刻期间电流分布几乎没有很大的变化，t5时 刻，开通过程结束，栅极处的电流密度降至蓝色，用流线数量乘以元胞宽度换算 成电流，IC大概为ID的两倍，与3.3.1节的理论分析相吻合。 

对于图3.16中优化电阻下的关断过程，t6时刻IGBT和MOSFET分流的状态 与t5时刻相同；t6时刻，栅极电压VGE和VGS开始下降，器件栅极处的电流密度开 始增加。由于RGM的增大和RGT的减小，ID下降但MOSFET没有立即关断，而是 与IGBT在t7时刻一起进入到米勒平台。此时漂移区还存在大量的等离子，所以导致MOSFET减小的电流流向了IGBT，于是t7时刻，IGBT流线略微增加， MOSFET元胞中的流线略微减少。 

t7时刻后，由于VDS上升，器件漂移区中的耗尽区域增加，导致IGBT和 MOSFET元胞中的电流变得更加集中；同时，由于二极管寄生电容放电，导致IC 略微减低，t8时刻，VDS到达母线电压，米勒平台结束。 

t8时刻后，VGE和VGS继续下降，因为VGE下降速度更快，所以VGE先到达阈 值电压VTHT，导致IGBT进入拖尾电流阶段，此时ID也在逐渐降低，导致 MOSFET和IGBT中的流线都在减少。 

t9时刻后，IC和ID继续降低开始。t10时刻，VGS降低到VTHM时，ID降为零， 此时剩余少量拖尾电流，因此IGBT元胞中还有极少量流线，MOSFET元胞中已 没有流线，直到IGBT中拖尾电流降为零时混合器件的关断过程结束，电流分配 过程与3.3.2节的理论分析相对应。 

综合上述的机理分析，其负载电流在IGBT和MOSFET中的分布变化趋势与 3.2节、3.3节中的理论分析基本一致，并能够很好地对应有特征的时刻。 

3.5 本章小节 

由于Si IGBT和SiC MOSFET的结构差异，导致了Si/SiC混合器件开关过程的复杂性，产生了比相同器件并联更严重的分流问题。本章主要针对两种栅极电阻模式，一种模式是目前大多数研究所采用的器件数据手册推荐的电阻值，另外 一种是要解决器件过流应力问题的优化电阻模式。本章首先对采用数据手册推荐的栅极电阻模式并工作在重载下的Si/SiC混合器件进行了动态行为分析，找到了IGBT或MOSFET发生过流应力的主要阶段，结合器件特性分析出抑制过流应力 的栅极电阻的调节方向，并对采用抑制电流过冲栅极电阻的Si/SiC混合器件也进行了动态分析。为了进一步解释负载电流分布过程，利用Senataurus TCAD建立 了Si IGBT和SiC MOSFET的器件模型，分析了不同电阻下动态电流在IGBT和MOSFET中的分布情况，对理论分析中的电流变化进行了验证。分析结果表明， 在数据手册推荐栅极电阻值的基础上，减小IGBT栅极电阻同时增加MOSFET栅极电阻，有利于降低开通过程中MOSFET的过流应力和关断过程中IGBT的过流应力。 

4\. 栅极电阻对Si/SiC混合器件开关特性的影响评估 

4.1 引言 

上一章主要从器件特性和器件物理的角度，研究了栅极电阻对Si/SiC混合器 件动态电流分配的影响，但和现阶段的控制方式相比，对于调节栅极电阻的意义 以及栅极电阻的匹配如何落实到具体应用中，还需要进一步的研究和分析。 

本章首先研究了栅极电阻对Si/SiC混合器件开关特性的规律；随后通过理论 分析和实验测试对比了调节栅极电阻和现有研究中的栅极时序对Si/SiC混合器件 开关特性的影响，强调了工作在负载条件下采用同步栅极信号的混合器件调节栅 极电阻的显著优势；最后，结合之前研究的栅极电阻作用规律，分析出MOSFET 栅极电阻和IGBT栅极电阻在开关过程中承担的作用，总结出了Si/SiC混合器件 在实际应用中栅极电阻的设计指导。 

4.2 不同栅极电阻下Si/Si C混合器件开关特性的规律研究 

为了探究栅极电阻对Si/SiC混合器件开关特性的规律研究，采用第二章所搭 建的双脉冲测试平台，如图4.1所示。母线电压采用600V，负载电流为75A，负 载电感为568μH；MOSFET的型号依然采用IMW120R090M1H，其内栅电阻 RGM\_int为9Ω，栅极电压VGS为-5V和20V；IGBT型号为IKW25T120，其内栅电 阻RGT\_int为8Ω，栅极电压VGE为-5V和15V，下面对Si/SiC混合器件进行了多组 不同栅极电阻的动态特性测试，器件和测量设备的具体参数已在2.3节中介绍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJUFib21daRN7KAtibuJkmZRJqzyP2H4kFvXJY7jeqcrUicQQBlF8yX5JMw/640?wx_fmt=png&from=appmsg)

 图4.2为负载电流 75A 时栅极电阻RGM和RGT对Si/SiC HyS开通波形的影响。 如图4.2(a)所示，随着RGM的增加，结合开通过程的行为分析，Δτon减小，这意味 着MOSFET的开通速度会降低，更多的动态电流将流入IGBT，从而使得 MOSFET开通过程中的峰值电流IDpon减少，同时IGBT的峰值电流ICpon会相应增 加。在RGM增加的过程中，IDpon的位置从MOSFET刚进入弥勒平台时期转移到 IGBT和MOSFET换流时期，与此同时，ICpon的位置从换流时期转移到了刚进入 弥勒平台时期，这是栅极电阻影响器件电容充电速度和IGBT电导调制的共同结 果。如图4.2(b)所示，当RGM不变且RGT增大时，Δτon也增大，这意味着IGBT的 开启速度变慢，Ic的上升时间变晚，同时有更多的负载电流先流入MOSFET，当 RGM固定，RGT增大到一定程度时，会导致开通过程中当IL = IF后，Ic才开始上升， 此时IDpon将不再变化，这意味着在该种情况下IGBT可以实现零电压开通。此开 通波形与开通过程中的行为分析保持一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxIQUlWCMTR8JgWoMHDqV9icYHXgicZlf7T2Kvsls6AGQibkfM0rmoPBVw/640?wx_fmt=png&from=appmsg)

图4.3为不同栅极电阻下Si/SiC混合器件的关断波形。如图4.3(a)所示，当  RGT = 8Ω且RGM从9Ω增加到109Ω时，由于d ID/dt的减小，ICpoff振荡部分的值也将减小。此外，当RGM继续增加到139Ω时，SiC MOSFET开始承载部分负载电流以进一步降低ICpoff。如图4.3(b)所示，当RGM =9Ω且RGT从8Ω增加到48Ω时， d ID/dt不变，Δτoff增加，在该种情况下，Si C MOSFET可以近似实现零电压关断。 因此，当RGM保持不变时，RGT对IGBT的关断峰值电流ICpoff没有影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJlKssETt7sXgHMFbY0zCCFyHkZXwGbTiadia3HsTvHxzappWBQ1mUqC0w/640?wx_fmt=png&from=appmsg)

 4.2.1 开关损耗 

结合3.2.1节和3.3.1节中对Si/SiC混合器件开通过程的行为分析，本文所选 取的开通损耗时间为从2%总负载电流到电压下降到2%母线电压为止，大致对应 图3.2和图3.4中的t1 – t4阶段。图4.4为不同栅极电阻下Si/SiC混合器件的开通损 耗。如图4.4(a)所示，当RGT固定时，MOSFET的开通损耗EMon随着RGM增加先 上升后下降，这是因为降低MOSFET开通速度引起的损耗增加和更多负载电流流 入IGBT引起的损耗降低的叠加效应造成的。同时，IGBT的开通损耗ETon会随着 RGM的增加而增加。此外，当RGM保持不变且RGT增加时，Cies的充电速度会降低 以驱动更多电流进入MOSFET，从而导致EMon增加，ETon减少。结合图4.4(a)和 图4.4(b)，得到混合器件的总开通损耗随Eon电阻变化的规律：Eon随着RGM和RGT 的增加而增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJIMnkLwOAHT8SfryIENT5gvuVP3Z57iaMzyzlhc7uOEhMVkoo4ZSjVkA/640?wx_fmt=png&from=appmsg)

关断损耗的定义是从2%母线电压到2%总负载电流之间产生的损耗，大致对 应图3.3和图3.5中的t7 – t10阶段。图4.5展示了Si/Si C混合器件的关断损耗在不 同栅极电阻下的变化规律。与MOSFET的关断损耗EMoff相比，IGBT的关断损耗 EToff在总关断损耗Eoff中占主导地位。当RGT= 8Ω时，增加的RGM会减慢MOSFET 的关断速度，并驱动更多的动态电流从IGBT流向MOSFET。因此，随着RGM的 增加，EMoff增加而EToff减少。当RGT为其他较大值时（18Ω、28Ω和48Ω），EMoff 几乎保持不变，而EToff略有下降。这是因为在该种情况下，RGT不变，IGBT的关 断时刻不受影响，随着RGM的增加，MOSFET的关断速度变慢，导致IGBT导通全负载电流的时间略微减少；因为RGT较大，MOSFET近似实现零电压关断，所 以MOSFET的关断损耗EMoff基本不随RGM变化。对于Si/SiC混合器件的关断损 耗Eoff，当RGT = 8Ω时，它随着RGM的增加而略有增加，因为EMoff的增加大于 EToff的减少。然而，当RGT = 18Ω、28Ω和48Ω时，Eoff会随着RGM的增加而略有 下降，因为EToff的下降占主要因素。综上，结合图4.4和图4.5的变化规律， Si/SiC 混合器件的开关损耗与RGT和RGM整体上呈现正相关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJzSBg19bvQrql30B67rrjDia9XjQaaJaxnSEtofxbWutpTxXh4DKVX6Q/640?wx_fmt=png&from=appmsg)

 4.2.2 过流应力 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ20b5YTvicmvoYZefkZuh0b7C0kNQoYDnoUknEwg4MkbiaklyCI9MeNnw/640?wx_fmt=png&from=appmsg)

图4.6和图4.7分别展示了Si/SiC混合器件的开通过流比在不同栅极电阻下的 变化规律。根据第二章的分析可知，过电流比超过1会对器件的可靠性产生影响， 所有过流比超过1的方块都用黄色进行了标记。如图4.6所示，结合第三章的分 析，增加RGM并降低RGT可以驱动更多的开通电流进入IGBT，从而保证αMon < 1， 同时IGBT的开通过流比αTon会随之增加；如图4.7所示，由于采用Si IGBT的额 定电流比较大，所以αTon始终低于1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJqcDCu2WgA1DEkMEMRAltRvAXmOGia0Dkdh4cuCXDos9tico7UsTjkk1Q/640?wx_fmt=png&from=appmsg)

图4.8展示了不同栅极电阻下IGBT的关断过流比αToff。增加RGM降低RGT可 以提高IGBT在关断过程中的可靠性。同时，RGT会影响使αToff < 1的RGM临界值。 当RGT增加时，需要更大的RGM来抑制过冲并降低IC中的IL。综上，栅极电阻在 降低开通和关断过程中器件的过流比具有相同的调节趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJsxekKJabfnib8WzpKiaLfrVSeP3J8YNjNO5gqZTFgR0xooTibBpoeFNRg/640?wx_fmt=png&from=appmsg)

4.2.3 dVDS/dt 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJucSpt9EwYyqapoNXH8PQZPxUf82zDolXiaEyb49fQ5Jyaw9pnYrj9dg/640?wx_fmt=png&from=appmsg)

图4.9和图4.10分别展示了Si/SiC混合器件重载下具有不同栅极电阻的d VDS/dt。 如图4.9所示，对于开通过程，开通d VDS/dt随着RGM或RGT的增加而减小。根据 式(3.10)可知，虽然栅极电阻可以通过影响开启电流的分布来影响器件的米勒平台 电压，但VGPM1和VGPT1之和几乎保持不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJlyugWZPx5sPs3ms9W7tibrLiaKqHQIb7oGQT2vmgF8Y3nNdxXhqxlWlg/640?wx_fmt=png&from=appmsg)

如图4.10所示，当RGT较大时，RGM在很大范围内变化时无法改变混合器件 的关断状态，一直使得MOSFET近似实现零电压关断，IGBT实现硬关断，因此 该种情况下RGM对d VDS/dt没有影响，关断d VDS/dt随着RGT的增加而减小，这与 3.2.2节的关断分析一致。此外，当RGT = 8Ω且RGM范围为0Ω至109Ω时，该情 况下与RGT较大的情况一致，d VDS/dt基本不随RGM的变化而变化；当RGM范围为 139Ω至209Ω时，MOSFET与IGBT一起参与关断过程。在这种情况下，关断 d VDS/dt随着RGM或RGT的增加而减小，与3.3.2节的关断分析一致。

4.3 栅极电阻调节与栅极时序控制的对比 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNibZ7zGg9jffAibyjzupaJ0fnBmITTONf1G85GJiaOVaDJyyWYCicNZB3g/640?wx_fmt=png&from=appmsg)

图4.11是\[44\]和\[48\]中所提出的一种依赖电流的混合器件栅极时序控制策略。 具体策略为：在轻载和中载下分别采用模式I和模式II，以降低Hy S的开关损耗。 当负载电流超过Si C MOSFET的SOA限定值I2时，Si IGBT会提前开启并与Si C  MOSFET同时关闭，以保护低电流MOSFET。如图4.11 (b)所示，Δton和Δtoff分别 是IGBT和MOSFET之间的开通和关断栅极信号的延迟时间。显然在模式III中， 先开通和同时关断IGBT必定会带来较大的开关损耗，同时为了比较栅极时序控 制与栅极电阻控制的特点，下面分别进行原理和测试的对比。

4.3.1 原理对比 

栅极时序控制改变的是Si IGBT和SiC MOSFET沟道开通和关断时刻差，从 而让MOSFET或IGBT承担负载电流。在这种模式下，Si IGBT和SiC MOSFET 的开关速度是不变的。另一方面，结合第三章的行为分析，栅极电阻调节除了在 纳秒尺度上改变器件的相对初始开关时间外，最主要的作用是调节器件的开通和 关断速度，进而改变负载电流动态的电流分配，这就是栅极时序控制和栅极电阻 调节的区别。 

4.3.2 开关特性对比 

混合器件工作在75A的额定电流下，两种控制方式的设置如下：

① 栅极时序控制Δton和Δtoff：如\[48\]中所提出的模式III（Δton ≤ 0和Δtoff =  0）。外部栅极电阻的选择参考IGBT和MOSFET的数据表：RGT = 22Ω，RGM = 11Ω。 

② 栅极电阻RG调节：栅极时序采用Δton = 0和Δtoff = 0。栅极电阻在开启过 程中取值为RGT = 8Ω ~ 22Ω，RGM = 11 Ω ~ 69Ω；关断过程中取值为RGT = 8Ω， RGM = 139Ω。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJjpU9iajsyuZia535RGGWwOlqwV8icDII0CkHE2eNJboNqknophibSHaLYw/640?wx_fmt=png&from=appmsg)

图4.12为Si/SiC混合器件栅极时序控制（红线）和栅极电阻调节（蓝线）的 开通特性对比图。随着Δton的减小，Eon先减小后急剧增大，这与文献\[45\]中的结 论一致。图中右侧有一个共同的起点，该点αMon = 1.6。至于栅极时序控制Δton， 当Δton ≤ -200 ns时，αMon < 1。由于Si IGBT的低开通速度，随着Δton的减小， Eon而急剧增加。对于栅极电阻控制而言，降低RGT可以降低Eon和αMon，而增加 RGM可以降低αMon并增加Eon。与栅极时序控制相比，栅极电阻调节还可以降低 MOSFET的开通过电流的同时，实现更低的开通损耗。当αMon = 0.95，栅极电阻 控制的Eon可以降低到优化时序时的40%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJK0fHmGwN4MdBvWfMLhIG19AN3AyibHR3d6CGlGpHcpWyMiceovSxKibZA/640?wx_fmt=png&from=appmsg)

图4.13为Si/SiC混合器件栅极时序控制和栅极电阻调节的关断波形的比较。 如表4.1所示，在研究案例中，对于栅极电阻调节，αToff为0.9，而对于优化时序 的情况，αToff为1.1，这会降低Si IGBT的可靠性。此外，栅极电阻控制的关断损 耗小于优化时序情况下的关断损耗。

结合图4.12、图4.13以及表4.1可以看出，与重载下HyS的栅极时序控制相 比，优化栅极电阻具有明显的优势。对于开通过程，可以像栅极时序控制一样使 αMon < 1，此外RG调节还可以进一步降低Eon，对于关断过程也是如此。当 MOSFET的电流容量略小于或等于IGBT的电流容量时，栅极电阻调节仍能有效 降低IGBT的过流应力。因此，栅极电阻对重载下Hy S动态电流分布的影响值得 研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJllzJ9tL0YibSL8yiaiaKtADbnMQdad4J4PO231UZ7kdIoj0RJu6vlbMEw/640?wx_fmt=png&from=appmsg)

4.4 Si/SiC混合器件栅极电阻的设计指导 

本节结合前面章节的理论分析、仿真和实验规律，对混合器件工作在重载时 总结出一些栅极电阻的设计指导。该设计指导的目的是确保动态电流低于器件的 SOA限制电流，并将开关损耗降至最低。为了更好地确定设计指导的步骤，首先 分析RGM和RGT对开关损耗和过流比的影响。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJtds2oZFbO2Cic6s3A4bqrxPWKdaZiaW3Y4ACqxR1xFSnicVbd32JFKX9Q/640?wx_fmt=png&from=appmsg)

图4.14展示了混合器件中MOSFET的开通损耗和开通过流比之间的权衡关 系。随着RGT的减小，MOSFET在开通过程中的过流应力降低，同时开通损耗Eon 也在大幅降低；而随着RGM的增加，MOSFET的过流应力也在降低但混合器件的开通损耗Eon却在增加。为了更加准确地描述RGM和RGT在开通过程中所起到的作 用，以本实验中28组电阻组合为样本，定义RG (i, j) = (RGTi, RGMj), 其中i = 1, …,  4; j = 1, …, 7。比如RGon (3, 5) = (RGTon3, RGMon5) = (28Ω, 69Ω)。ΔEon和ΔEoff分别是 每单位栅极电阻（RGM或RGT）的开通和关断损耗变化率，单位RGM和单位RGT的 开通损耗变化率的具体表达式分别如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ29R2XIHkL8acSIqByypnJ7XBa8LFCDNEywKhj8WdIqf7PaPTHDJArw/640?wx_fmt=png&from=appmsg)

其中，Eon (i, j)表示电阻为RGTi, RGMj时混合器件的开通损耗。关断损耗的变化率只 需将上式中的Eon替换成Eoff即可。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJZwk6yibXCgcbJiaOcMUMvW6quXUnUM71AEqkqfYREfTtfXDtgePQXibEA/640?wx_fmt=png&from=appmsg)

具体开通关断损耗的变化率如表4.2所示，RGT的ΔEon为7.6 μJ/Ω几乎是RGM 的三倍。因此，RGT对开通损耗的影响在开通期间占据了主导地位。对于 MOSFET开通过流应力αMon，增加RGM和降低RGT可以降低αMon。在实际应用过 程中，栅极电阻的最小值应该受限于混合器件实际运行条件下允许最大的d VDS/dt。 这意味着RGT有一个下限，即 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJfJDhuibHMlWWY9FibACl6TMO0IrBBMoiarIErEVe9s67WMtJibkaz1WwmA/640?wx_fmt=png&from=appmsg)

与RGT相比，RGM具有更大的调节范围来降低αMon并确保αMon < 1。因此，在 开通过程中RGM对MOSFET过流应力的调节更能起到显著的作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJRTbtdwfuMEpmJeBv0Qqe9SshK2ibqDP6oEjsVomvlEbGnUNENVcDkFQ/640?wx_fmt=png&from=appmsg)

 图4.15显示了IGBT的关断损耗和关断过流比之间的权衡关系。当RGT = 8Ω 时（蓝线），关断损耗、IGBT关断过流比的变化趋势与开通过程中相同。当RGT =  18Ω、28Ω、48Ω时，结合4.2节的分析，此时因为RGT较大，RGM在对应的阻值 变化范围内无法让MOSFET参与关断分流过程；当RGM = 139Ω时（红线），RGT =  18Ω时出现拐点，这是因为RGT = 8Ω时，MOSFET同IGBT一起参与关断过程使 得MOSFET的关断损耗增量较大，进而使得混合器件总开通损耗较高。根据表 4.2可以得出与开通过程相似的结论：RGT对Eoff的影响在关断瞬态期间占主导地 位；RGM在保证αToff < 1方面的作用更为显着。结合图4.14和图4.15可知，使αMon 和αToff小于1的RGM的调节范围会受到RGT的影响。因此，应该先确定RGT，然后 再确定RGM。

现阶段大部分研究为了降低成本，研究人员倾向选择大电流的IGBT和小电 流的MOSFET组合为混合开关。根据4.2.1节测试的结果可知，当负载电流一定 时，混合器件的开关损耗整体上随着栅极电阻呈正相关的关系。当负载为轻载时 （IL < IMSOA），IGBT和MOSFET都不存在过电流应力的问题，所以轻载时通常让 MOSFET优先开通并延后关断，从而让IGBT实现零电压开关，若想进一步降低 开关损耗，则IGBT的栅极电阻推荐值为(4.3)，MOSFET的栅极电阻推荐值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJhl5f1ofia7Fc5ibbxlCBpZtSzJdYiaicRDpeQDu6GFrYz8ZpEL5djWo3NQ/640?wx_fmt=png&from=appmsg)

当负载为重载时，分成两种情况： 

① IMSOA ≤ IL < ITSOA，此时只有MOSFET在开通过程中会经历过电流，所以 IGBT的栅极电阻依然为(4.3)，只需优化MOSFET的开通电阻。因为器件工作过 程中栅极电压不变，为了简便，暂不考虑栅极电压对电流分配的影响。除了 RGMon会影响αMon外，αMon还会随着总负载电流和器件结温的变化而变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJHwdndibRGTN1ZQZxwenE2FShsK6HTib4ZmT8PNsw8bqct8uwicLhDE9WA/640?wx_fmt=png&from=appmsg)

 如图4.16所示为不同温度下MOSFET的栅极电阻和开通过流比的关系曲线。 当温度升高时，MOSFET的开通电流会增加，这是因为在高温下MOSFET的阈值 电压的负温度特性更加明显，这使得MOSFET比常温下更早地开启，从而导致 αMon也会相应增加。因为实际Si/SiC混合器件的开关过程中，除了等效的RC充 放电回路，分流过程中还涉及到半导体器件内部载流子漂移、扩散和复合等运动 及相关机理，所以对于器件的动态过电流很难得到相关的数学解析式，并且不同 商家的器件以及不同电流配比的Si/SiC混合器件，其RGM的取值是不同的。在\[55\] 中，非线性近似方法被应用于计算指定工作点的开关损耗，并扩展到其他期望或 实际工作点。为了得到器件的过流比与影响变量之间的关系，采用与文献\[55\]中 相同的方法，来得到Si C MOSFET开通过流比的经验公式，如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJMRXUcplpekwcib98YB2SOOKNY8y17HhIfroaDbe7djpOH6uic7tHaBJQ/640?wx_fmt=png&from=appmsg)

其中βR0, βR1, βR2和βR3是RGM的三阶多项式系数，βTc是外壳温度系数，TCref是参 考器件壳温，一般为25℃。βI是实际负载电流与额定电流比的修正系数。IHyS是 Hy S的额定电流。这些参数是根据经验确定的修正系数，可以从双脉冲试验中得 到。具体数值见表四。为确保MOSFET的开启电流低于SOA限制电流，RGMon应 满足αMon (RGMon, IL, TC) < 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ6Z9L3kPm7hp83QICcX9CxWUycoZHtPVGAvrT87eIl3bXR9zibqA5ezw/640?wx_fmt=png&from=appmsg)

② IL > ITSOA，此时，开通过程中的MOSFET和关断过程中的IGBT都会经历 过流应力，IGBT的栅极电阻选择依然根据(4.3)计算，而RGMon依然根据(4.5)计算， 所以需要优化MOSFET关断电阻RGMoff，与MOSFET开通电阻一样，除了RGMoff 会影响αMoff外，αMoff也会随着负载电流和器件结温的变化而变化，图4.17显示了 Hy S在25℃和100℃的情况下IGBT的栅极电阻和关断过流比之间的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJvbZRT2ekBIfPlibib95HFooDlquXnHibgMvGItMo3z7CM6TEicdlNeePFw/640?wx_fmt=png&from=appmsg)

高温下IGBT的关断过流比与正常温度下的关断过流比几乎相同，因为总负载电流和 MOSFET关断速度保持不变。然而，随着器件温度的升高，IGBT内部的等离子 体的寿命会增加。这意味着IGBT关断的时间增加，导致Hy S的关断损耗增加。 通过非线性近似方法得到Si IGBT的关断过流比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJv0icJaaziayBSmZhUiaXkdX48YOknr5zVqHqNdlfW4O1xzButlicyT6rZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ6JHCIybBYt55OWiaYY1HX41st9KdXMYFeicBLvOljJtDVoGD554omZqw/640?wx_fmt=png&from=appmsg)

基于上述分析，图4.18总结了一些栅极电阻设计指导。首先，确定混合器件的实际工作电压、电流以及栅极电压，参考2.2节Si/Si C混合器件额定电流的计 算选择合适的Si IGBT和Si C MOSFET。其次，用热电偶监测器件的壳温并监测负载电流，比较负载电流IL和MOSFET和IGBT的SOA的上限值，判断负载电 流的大小。再次，确定Hy S实际工作条件下允许的最大d VDS/dt，RGT由式(4.3)计 算得到。然后，根据不同的负载电流，将RGM的设计分为不同情况： 

(1) 轻载（IL < IMSOA）：RGM的数值由(4.4)确定； 

(2) 重载（IMSOA ≤ IL < ITSOA）：RGMoff的数值由(4.4)确定，RGMon可以由 min{RGMon | αMon < 1}确定，αMon的表达式如(4.5)所示。 

(3) 重载（IL > ITSOA）：RGMon仍需满足min{RGMon | αMon < 1}，RGMoff可以由 {RGMoff | αToff < 1}，αMoff的表达式如(4.6)所示。

总的来说，为了实现Hy S的低开关损耗和低过流应力，RGT是固定的，RGM可 以随着不同的负载电流而改变。因此，只需要对MOSFET进行有源栅极驱动的配 置。有源栅极驱动器的实现可以参考\[64\]-\[66\]，它们提供了在不同负载电流条件 下改变栅极电阻的简化编程方法。如图4.19所示为文献\[66\]中所采用的MOSFET 有源驱动拓扑，采用两个相反方向的二极管串联在驱动回路中来实现开通电阻和 关断电阻的隔离，为了根据不同负载电流来切换不同的栅极电阻，在每一个驱动 电阻支路中串联一个小MOS管，通过DSP的I/O口进行设置，作为小MOS管驱 动的输入信号。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJZXzJzSzCibBPKQpeqb3ia6rpJ6sxKuycpeL0FFZyCVkSHQQI4HeTicBCA/640?wx_fmt=png&from=appmsg)

4.5 本章小节 

本章基于第三章混合器件的动态行为的理论与仿真分析，研究了从如何更好地将栅极电阻落实在Si/SiC混合器件的应用中。首先通过双脉冲测试，研究了栅 极电阻对Si/SiC混合器件开关特性的规律，实验结果表明，在开通和关断过程中， 较大的RGM和较小的RGT能够有效降低MOSFET和IGBT的动态过流应力，与第 三章的理论分析和机理仿真一致；在有效降低器件过流应力的范围内，栅极电阻 越大，Si/Si C混合器件开关损耗越大，相应的d VDS/dt越小。此外，本章还比较了 在Si/SiC混合器件重载下调节栅极电阻和栅极时序的开关特性，以阐明两种方法 之间的本质区别。研究发现与栅极延迟时间控制相比，使用同步栅极信号调节栅 极电阻除了可以抑制过流外，还能够进一步降低开关损耗。 

以确保动态电流低于器件的SOA限制电流并最大限度地降低开关损耗为目的， 结合了栅极电阻对Si/SiC混合器件开关特性的规律，总结了一些针对Si/SiC混合 器件栅极电阻的设计指导，其中RGT对混合器件开关损耗的调节占据主要地位， 而RGM对混合器件过流比的调节作用更加显着。不论Si/SiC混合器件工作在轻载 还是重载，RGT的取值都可以参考最大d VDS/dt的原则进行选择；而RGM的选取主 要取决于负载电流的大小，并采用开通和关断两个电阻：当Si/SiC混合器件工作 在轻载（IL < IMSOA）时，RGM的选取参考最大d VDS/dt的原则，当负载电流为重载 （IMSOA ≤ IL < ITSOA）时，RGMoff与轻载时相同，RGMon的选择则取决于MOSFET开 通过流应力min{RGMon | αMon < 1}的函数关系；而当负载电流继续增大（IL > ITSOA） 时，RGMoff的选择由IGBT关断过流应力min{RGMon | αMon < 1}}的拟合关系所决定。 

5\. 总结与展望 

5.1 完成的主要工作 

论文以Si C MOSFET和Si IGBT并联形成Si/SiC混合器件Hy S为研究对象， 重点研究了Si/SiC混合器件的分流特性。本文首先研究了不同电流配比下的 Si/SiC混合器件的分流特性。针对不同电流配比的Si/Si C混合器件提出了额定电 流计算方法，搭建了双管并联双脉冲测试平台，对不同电流配比的Si/SiC混合器 件电流分布进行了测试和分析，发现了器件过流应力的问题。针对过流应力问题， 对Si/SiC混合器件的开关过程进行了理论分析和仿真，得出了缓解分流问题的栅 极电阻的调节方向。为了进一步将优化的栅极电阻落实在Si/SiC混合器件的应用 中，通过双脉冲测试研究了不同栅极电阻对Si/SiC混合器件开关特性的规律，并 对比了调节栅极电阻和调节时序的区别，最后基于栅极电阻对混合器件开关特性 的规律，总结了混合器件栅极电阻的设计指导。本文主要工作总结如下： 

① 本文研究了不同额定电流的IGBT和MOSFET对混合器件分流的影响，首 先提出了Si/SiC混合器件额定电流的计算方法，之后对不同组合的Si/SiC混合器 件进行了分流测试，分析了不同电流配比下电流分配的特点以及IGBT或 MOSFET面临的过流应力可靠性问题的原因。研究发现在不改变器件驱动的条件 下，Si/SiC混合器件的电流配比接近1时，动态电流过冲对器件可靠性的影响最小。 

② 本文详细分析了采用同步调制的Si/SiC混合器件HyS的开通和关断暂态过 程，研究了不同电阻下Si/SiC混合器件Hy S的分流过程，阐明了如何调节栅极电 阻来缓解器件工作在重载时的过流应力。对Si/SiC混合器件的开关过程进行了理 论分析，建立了Si/SiC混合开关的器件模型，通过仿真分析了不同栅极电阻下动 态电流在IGBT和MOSFET中的分布情况，分析得出较大的MOSFET栅极电阻和 较小的IGBT栅极电阻可以缓解Si/SiC HyS的过流应力。 

③ 本文研究了栅极电阻对混合器件开关特性的影响，基于双脉冲测试分析了 不同栅极电阻下的Si/SiC混合器件的开关损耗、过流应力以及dv/dt的变化规律。 对比了重载下控制栅极时序和调节栅极电阻两种情况下的Si/SiC混合器件开关特 性，阐明了两种控制方法的本质区别，研究发现当混合器件工作在重载时，与调 节时序相比，调节栅极电阻除了可以抑制过流外，还能够进一步降低开关损耗， 凸显了调节栅极电阻的意义。针对不同栅极电阻下混合器件开关特性的变化规律， 发现了RGT对混合器件开关损耗的调节占据了主要地位，而RGM对混合器件过流 比的调节起到了更显著的作用，基于上述特征总结了Si/SiC混合器件Hy S栅极电阻的设计指导。 

5.2 后续工作展望 

由于作者水平有限以及时间上的限制，所研究的内容还有进一步优化和丰富的空间，后续的工作可以从以下几点开展： 

① 第三章所研究的Si/SiC混合器件动态行为分析还可以进一步深入到模型层 面，可以根据每一个瞬态的等效电路模型列写基尔霍夫方程，最后形成状态空间 方程，对方程进行计算与实际波形进行对比，来验证理论建模的正确性。 

② 基于本文提出的Si/SiC混合器件栅极电阻的设计指导，后续可再搭建一个 混合器件有源驱动的全桥逆变实验平台，对调节电阻和栅极时序的工况进行成本 和效率的对比分析。可以基于双脉冲测试的实验结果，对本文中拟合的过流应力 模型进行校验，为查表法切换栅极电阻提供理论依据。重载下根据不同负载电流 下切换不同混合器件的栅极电阻，再结合轻载下调节栅极时序使得基于混合器件 的逆变器效率达到最高。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)