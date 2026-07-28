# 基于SiC的新能源汽车双向DC/DC变换器及控制研究


> 原文地址: [https://mp.weixin.qq.com/s/6koG6pC0DwsqFTDsY7b-fA](https://mp.weixin.qq.com/s/6koG6pC0DwsqFTDsY7b-fA)

文章来源：广西科技大学（控制理论与控制工程）

作者：王涛（学位论文）

摘  要 ：随着能源枯竭和全球变暖，电动汽车成为解决该问题的最佳方式之一，近年来发展迅速，车载双向DC/DC变换器作为连接电动汽车动力电池和电机驱动模块的桥 梁，它的转换效率和功率密度要求不断提高。目前电力电子技术正朝着高频高可靠性高功率密度的方向发展，相较于传统硅器件，高效功率器件SiC具有开关频率高、 开关损耗小、开关速度快等优势，能明显提高车载双向DC/DC变换器的功率密度。 

本文首先介绍了电动汽车的动力系统结构、组成部分以及车载DC/DC变换器的 特点。通过对多种拓扑结构对比，最终选择CLLC作为主电路拓扑结构。选择SiC功率器件作为DC/DC变换器的功率开关器件。针对SiC MOSFET相较于传统Si  MOSFET门极阈值电压低、栅极开通电压范围窄、高频工作时驱动电路会出现较大 电压尖峰的情况，分析了SiC MOSFET的开关原理、开关特性、静态特性以及寄生 参数对SiC MOSFET驱动电路的影响，并且结合变换器拓扑的特点，设计了SiC  MOSFET驱动电路。 

其次分析了双向全桥CLLC谐振变换器的拓扑结构和工作原理，采用基波分析法进行稳态建模分析，对比分析各参数不同的取值对谐振变换器性能的影响，并依据变换器在全负载范围内实现零电压开通（Zero-Voltage-Switching，ZVS）的约束条件，提出可靠地参数设计方案。针对传统控制策略动态性能不足，电压达到稳态值较慢、受到负载切换扰动较大的缺点，提出了一种对CLLC谐振变换器的自抗扰控制（ADRC）策略，在不需对CLLC谐振变换 器精确建模的情况下，建立扩张状态观测器和设计PD控制器，达到提升动态响应性能，降低超调量，减小调节时间，减少谐波含量的目的。对变换器的关键器件设计选型，完成硬件电路及软件程序设计。 

最后，采用Simulink对谐振变换器进行仿真验证，并搭建实验样机对变换器进 行多工作模态下的正向与反向实验。结果验证了双向全桥CLLC谐振变换器参数设计的合理性，正向与反向运行时均能实现开关器件的软开关，具有良好的效率，满足了变换器宽范围调压的需求。 

关键词： SiC MOSFET；双向全桥CLLC谐振变换器；自抗扰控制；软开关 

第一章 绪论  

1.1 课题研究背景及意义 

随着不可再生能源的日益枯竭，寻求新能源已成为世界各国人们伟大的历史重 任。汽车产业的发展和汽车科技水平的进步，推动了新能源汽车的更迭。传统的燃油车不仅消耗了大量的石油资源，而且发动机效率较低，产生的废气对空气造成污染。 新能源汽车采用可再生能源作为动力来源，能量利用率高。新能源汽车对于世界各国来说是一个新的领域，这对于我国来说是一个重大的机遇，这可使我国在汽车领域打破其他国家在传统燃油车上设置的技术壁垒，主导未来汽车发展的话语权，具有重大的意义。新能源汽车的主力是电动汽车，以动力电池内储存的能量作为能量来源。 它具有零污染、高效、节能、低噪声等优点，能减少有害气体排放，减少对环境的污染，降低对不可再生能源的依赖，顺应了当今节能环保的主题。动力电池是电动汽车的核心器件。当汽车加速行驶时，动力电池通过车载双向 DC/DC变换器将存储的能量传递给电机驱动模块，为电机提供能量。此外，当电动车减速或制动行驶时，车载双向DC/DC变换器将能量传回动力电池。提高能源利用率，延长续航里程。为使动力电池性能趋向最佳，车载双向DC/DC变换器充当着不可或缺的角色。它连接动力电池与驱动模块，安装在电动汽车中，因此高功率密度和 高效率是重要的指标之一。对于电力驱动子系统中的双向DC/DC变换器而言，当 汽车行驶工况改变时，变换器负载存在突变的情况，母线电压出现较大波动。因此车 载双向DC/DC变换器除了安全、可靠等要求外，还需具备更高的动态响应性能。  目前将新兴的宽禁带半导体材料应用于功率变换器成为热点话题，世界各国都致力于碳化硅器件的开发与应用研究。目前，在美国能源部部署的新能源车开发项目中，60%的项目与碳化硅器件应用相关。欧洲也制定了碳化硅技术应用的ES CAPEE 计划和E3Car计划，希望突破碳化硅器件设计、器件制作以及应用技术。 宽禁带半导体材料优越的特性为电力电子技术发展带来了新的提升。与硅材料相比， 碳化硅材料具有更高的电子饱和速度，更低的器件功率损耗，单位面积载流能力强。 具有开关速度快、导通电阻小、寄生参数小、应用频率高的特点。因此可以通过应用高效功率器件，增大变换器的功率密度，提高变换器的转换效率，减小变换器的大小、重量以及滤波器的成本。本文将新材料器件应用于双向DC/DC变换器有着实 际的研究意义，提高车载功率变换器的功率密度，适应当下的发展趋势。 

1.2 车载双向DC/DC变换器拓扑研究  

1.2.1 车载双向DC/DC变换器的特点 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHxibJs8alYiceeEFa603zVSbCmTY2N4WDY9TA071ichvn6cibvjaficJOJqA/640?wx_fmt=png)

新能源汽车的电源系统架构如图1.1所示，电动汽车动力系统主要包括动力电 池、逆变器、双向DC/DC变换器、电动机、车载辅助DC/DC变换器等设备。大致 可分为动力电池充电子系统、电力驱动子系统、辅助电源子系统。随着新能源汽车种类与型号日益增多，车载双向DC/DC变换器的规格类型也随之增加。不同车型所对应的车载双向DC/DC变换器的电压等级不同，但高压锂电池组的电压范围一般分布在270V～400V之间。纯电动汽车的高压锂电池包是由许多的单体电池串并联组合而成，例如特斯拉电动汽车的高压锂电池包由大量的18650 型钴酸锂电池构成。18650型钴酸锂电池的主要参数如表1-1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHAscGsVGV3JSUD8h2SibmFsbgurmSAxo2cVTsT2wpXwjYib5OkiclyPKlA/640?wx_fmt=png)

特斯拉Model S 85型号电动汽车的高压动力电池是由7104个单体电池构成的。 由表1-1可知，钴酸锂电池的电压变化范围是2.75V~4.2V，其高压电池包的电压变化 范围是264V~403V，因此所设计的车载双向DC/DC变换器需满足宽范围输入电压的需求。常规的拓扑结构难以满足宽范围输入电压要求，且变换器的效率亦会降低，需选择合适的拓扑结构来克服输入电压范围宽的问题。 

车载双向DC/DC变换器除了追求高效、高功率密度外，还必须考虑汽车的安全 性。从使用者的安全考虑，变换器需进行电气隔离。由以上分析可知，车载双向 DC/DC变换器需具备以下特点： 

（1）出于电动汽车续航里程的需求，变换器需高效的进行电能传输；  

（2）由于动力电池包电压的变化，变换器需满足输入电压范围宽的需求；

（3）从使用者安全考虑，变换器需要进行电气隔离；  

1.2.2 双向DC/DC变换器的拓扑结构 

双向DC/DC变换器(BDC)能够实现能量的双向流动，与采用两个单向器件实现 能量双向流动相比，具有体积小、功率密度高、成本低等优点。按是否具有隔离功能可将其分为隔离型与非隔离型两类，在一些对安全要求较高的场合，选择隔离型的拓扑是必要的，优越的电气隔离能保护其它精密器件的安全运行或保证人员的人身安全。非隔离型的双向DC/DC变换器一般运用在对安全要求不高的场合，对于汽车 来说，电气隔离是必要的。 

隔离型双向DC/DC变换器包括双向反激、双向正激、双向推挽、双向半桥和双 向全桥变换器等多种拓扑结构，各有特点。其中双向正激变换器工作原理简单，其控制和驱动电路易于设计，但所用的变压器处于单向励磁状态，利用率较低。双向反激 变换器同样拓扑结构简单、成本低，但相比于双向正激，它的功率器件电压应力较大， 不适用于高压场合。推挽BDC的2个开关管的源极共地，因此其驱动也共地， 驱动电路简单，但电压电流应力较大。双向半桥DC/DC变换器结构所需器件较少， 并能通过移相控制实现ZVS，降低开关损耗。但其反向工作时，电压增益总小于等于1，存在一定的局限性。双向全桥DC/DC变换器与上述几种电路相比，虽然增加了开关管的数量，成本提高，但开关管的电压电流应力较小，并且有着较高的功率密度，广泛应用于较高电压的应用场合。以上为常见传统的隔离型双向DC/DC变 换器拓扑，除了这些常见拓扑外，还有将多种拓扑组合的复合型拓扑以及在常规拓扑上添加其他元器件的衍生拓扑等。  

电力驱动子系统中的双向DC/DC变换器为本文的研究对象，需满足前后级的电压变换及能量传输，实现电气隔离。根据要求本文选用以双向全桥DC/DC电路为基础拓扑进行研究，它的多种衍生型拓扑成为了当前的热点研究方向。 

双有源桥式双向DC/DC变换器的拓扑由一个含漏感的隔离变压器和两个全桥构 成，如图1-2所示。结构简单可靠，能应用于高压场合。其基本控制方法为移相控制，控制方式简单。但当变换器的输入输出电压不匹配时会存在功率回流象限，产生较大 的无功环流导致效率降低。且在实际应用中，高频隔离变压器根据实际电路需求设计，它的漏感并不会做得很大，当轻载运行时，隔离变压器中的电流很小，变压器 漏感提供的能量不能满足功率开关管寄生电容的充放电，此时不能实现软开关。 因此双有源桥式双向DC/DC变换器不适合将其应用于负载变化较大的场合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHTI5fZEuyT5Zcgkzu55icIsItTQ8QVweS47U4NQ8FBibHtCQxFOckdcog/640?wx_fmt=png)

双向全桥LLC谐振拓扑结合了LLC与双有源桥拓扑的特点。它不光具备LLC 谐振电路能宽范围调节电压，开关管能ZVS开启的优点，而且没有双有源桥式双向 DC/DC变换器空载时不能软开关的缺陷，提高了变换器转换效率。拓扑如图1-3所 示。它的原副边结构不对称，当变换器正向工作时为LLC谐振电路，此时具有较宽的调压范围。但当变换器反向工作时为LC谐振电路，此时变换器的电压增益最大值 为1。因此电压增益范围变窄，限制了它的应用场合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHtBfWicC8vTPDBTAdibzZHVKRuNjeTM7YSMhZXiaibhxDLm1yS1fRZo6aZQ/640?wx_fmt=png)

为了解决双向全桥LLC谐振拓扑反向工作时电压增益范围窄，只能工作在降压 模式的缺陷，有研究人员在双有源桥式双向DC/DC变换器的副边加入一个电容，使其反向工作时也是LLC谐振电路。具有很好的电压调节特性，满足软开关，使双向全桥LLC谐振变换器拓扑变为不对称的CLLC双向谐振型变换器拓扑。如图1- 4所示。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHyAJlTPlZpiciamiaGYvKdhuBvSib5GIPrnz9QrH7pWnGvBQnIianjTrmtIQ/640?wx_fmt=png)

该拓扑原副边结构不对称，正反向谐振过程相差较大，因此在进行谐振参数设计和正反向运行控制都相对复杂，需要对其中诸如变压器匝比，原副边电感电容的取值进行一系列的迭代与优化来确定参数，参数设计较为繁琐。基于其复杂的参数计算，提出了对称CLLC谐振型双向DC/DC变换器拓扑，通过在变换器副边加入一个谐振电感，使正反向工作状态一致，拓扑如图1-5所示。与不对称的CLLC双向谐振型拓扑相比参数计算较为简便，利于设计它的控制策略。其正反向运行均具备LLC 谐振变换器的优点，能实现原副边的软开关，电压调节范围较宽，有较好的电压调节特性，正向反向运行时均具有较高的效率。近年来它成为了双向变换器领域的研究热点之一。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHQCO2GjqoWiacTkmcgA30Tfhbl0eag8lb6Yngp9Jhicm1BIXLXiaoNAuOQ/640?wx_fmt=png)

1.3 碳化硅器件的应用研究现状 

半导体器件的进步是电力电子技术发展的强大助力。目前，传统Si器件的性能 逐渐接近其理论极限，但随着电力电子技术应用范围的不断扩大，传统Si器件已经不能很好地应用于一些要求较高的应用场合。因此以SiC为代表的第三代宽禁带半导体越来越多地受到业界重视。GaN、SiC、GaAs和Si材料的主要性能比较如表 1-2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHzicRjDJybI74vgH1ibJDvoib84MtMr7evgDiaecWIxfdOHCQ7yjGCpY64Q/640?wx_fmt=png)

由表1-2可知，碳化硅材料的禁带宽度更高，使其不易吸收能量跳变到导带，更 难被击穿，能承受更强的电压。碳化硅材料的电子饱和漂移速度更高，它的导通电阻更低。碳化硅材料的临界击穿电场更大，使SiC比Si耐压值更大。碳化硅材料的导热率更高，可以减小现有冷却系统，具有更佳的稳定性。宽禁带半导体具有应用频率高、散热快、耐高温、导通电阻小的优势。目前，以SiC为代表的第三代半导体材料功率器件，正在引领电力电子领域的一次技术革命。

文献\[34\]针对高输入电压场合，设计了基于SiC MOSFET的共初级开关管的多 变压器输入串联输出并联LLC变换器。通过采用SiC器件提高了变换器开关频率， 减小了DC/DC变换器体积，制作输入电压为800-1000V，输出为25V/2KW的样机， 实验结果表明，采用SiC器件可以有效降低开关损耗，提高效率，变换器设计合理。 

文献\[35\]针对风电机组中变桨充电器小型化与高功率密度的需求，通过选取SiC  MOSFET作为功率器件，设计了基于SiC MOSFET的三相谐振LLC变换器，实验结果表明相较于采用Si MOSFET，采用SiC MOSFET的变换器在输出功率、功率密度、 最高效率均得到明显提升。 

文献\[36\]针对SiC MOSFET在开关过程中出现电流、电压过冲和振荡的现象。根据影响电流、电压过冲和振荡的关键因数，设计了一种有源驱动电路。该有源驱动电 路在器件开关的特定阶段内同时增大驱动电阻和减小栅极电流，抑制了器件开关过 程中的电流、电压过冲和振荡情况。 

文献\[37\]为提升DC/DC变换器高压侧的工作电压、减少模块级联数量、降低变 换器体积和控制复杂度，通过采用SiC功率器件和混合三电平的方案进行设计，结果表明变换器最高效率可达到98.7%，并且模块的高压侧直流工作电压得以提升，减 少了模块级联数量，降低功率变换的体积和控制难度。

文献\[38\]设计了输出750V ，30kW的不间断电源，通过将碳化硅器件应用于三相四桥臂逆变器，使得不间断电源更加高效和稳定可靠。此外采用去饱和保护方法来保护SiC MOSFET短路状态下的过电流。通过互补开关和齐纳二极管电压优化实现快速保护。实验表明在10kW负载条件下它的最高效率可达99.1％。 

文献\[39\]为确保SiC MOSFET栅极驱动信号能稳定可靠的进行控制，设计了专 用于SiC MOSFET模块的栅极驱动器，能工作于高压达1200V的环境下，采用短路检测和执行软关闭来保护SiC MOSFET。实验表明开发的栅极驱动器在高强度干扰的环境中仍具备良好的性能。 

1.4 DC/DC变换器的自抗扰控制研究现状 

自抗扰控制（ADRC）是我国著名控制论学者韩京清教授创立的一种不依赖于被 控过程模型的原创性控制思想和方法，实践表明这是一种具有很好工程应用潜力的新型先进控制技术。诸多文献表明，DC/DC变换器采用自抗扰控制方法，能明显改进变换器性能。 

ADRC不需要系统的精确模型，可以将系统的多种扰动视为系统的一部分加以 控制。文献\[41\]针对DC/DC变换器在实际应用中会受到多种输入扰动、负载扰动及电磁扰动影响的问题，设计了基于降阶扩张状态观测器和以比例控制作为误差反馈律的自抗扰控制器用于实际系统。结果表明,该控制系统具有比传统PI控制系统更优的快速性、鲁棒性和适应性，且大大简化了传统自抗扰控制器设计过程中参数过多、 取值困难的问题。文献\[42\]针对矩阵变换器的非线性、多变量和参数时变性使其数学模型不能被确定，在内外部扰动不稳定的条件下，设计一种与对象模型无关的自抗扰控制器。结果表明采用自抗扰控制器，无论在电网输入侧本身存在谐波污染或者在电网电压非正常工况条件下，其控制效果都优于常规PID控制。文献\[45\]以光伏储能双向DC-DC变换器为应用对象，为了提高光伏储能系统的快速性和抗干扰能力，兼顾双向变换器的非线性特性，设计了适用于光伏储能双向DC-DC变换器的自抗扰控制器。结果表明基于ADRC的控制策略能有效抑制直流母线电压波动和冲击,提高光伏储能系统的动态性能和抗干扰能力。 

自抗扰控制的控制能力突出，但它的参数整定相对复杂。文献\[43\]以Buck变换 器为应用对象，针对它的ADRC参数设计，利用混沌算法来进行参数优化。结果表明，该参数优化方案起到了良好的控制效果。文献\[44\]以添加了扰动的Boost变换器为应用对象，针对ADRC参数难以设计的问题，系统采用线性自抗扰控制（LADRC）进行控制，仿真结果表明LADRC能迅速使系统稳定，具有优秀的控制性能，且参数设计更为简便。

1.5 本文研究的主要内容 

随着新能源汽车的发展，人们对车载双向DC/DC变换器其提出了更高的要求， 作为电动汽车动力系统中重要的一环，双向DC/DC变换器如何更高效，高功率密度工作成为人们研究的热点之一。本文选择SiC MOSFET作为变换器的开关器件，利用它的优势来提升车载双向DC/DC变换器的效率和功率密度，并提出了一种对 CLLC谐振变换器的自抗扰控制策略，在不需对CLLC谐振变换器精确建模的情况下，建立扩张状态观测器和设计PD控制器，达到降低超调量，减小调节时间，减少谐波含量的目的。主要研究内容概括如下： 

第一章 主要讨论了研究背景以及总结了当前研究现状。对电动汽车动力系统的 典型架构进行介绍，并列举多种类型的直流变换器，通过对它们在应用场合、电压等级、驱动复杂程度、安全性等方面进行比较，最终选用能实现软开关的双向全桥CLLC 谐振变换器。然后分析了SiC器件与ADRC的研究现状，对研究现状做了简要综述。 

第二章 主要介绍了SiC MOSFET的电气特性和对SiC MOSFET驱动电路进行 设计。首先分析SiC MOSFET的基本的工作原理与特点，其次对它的静态特性和开 关特性进行分析，最后根据之前的分析及实际电路中驱动的应用场景设计了SiC  MOSFET的驱动电路，并对驱动电路进行性能测试实验。从驱动电路的输出电压、 桥臂互补驱动电压、脉宽连续可调性等方面验证驱动电路的合理性。 

第三章 首先分析了双向全桥CLLC谐振变换器的拓扑结构，它在连续模式、临 界模式和断续模式的工作过程。然后根据基波分析法进行数学建模，得到电压增益， 分析g，h，k，Q等谐振参数对电压增益的影响。最后推导了CLLC谐振变换器实现 ZVS的约束条件。 

第四章 主要根据设计要求对电路进行参数设计，合理的选择参数，使变换器满 足宽范围调节电压需求。通过所得的参数结合变换器实际工作情况，对CLLC谐振 变换器的关键元器件进行设计与选型。然后对变换器的主要硬件电路以及软件程序进行设计。 

第五章 首先分析自抗扰控制（ADRC）的特点与结构，其次结合CLLC谐振变换器不精确的模型与特征，设计了适用于CLLC谐振变换器的LADRC控制器。最后，采用Simulink对基于自抗扰控制的CLLC谐振变换器系统进行仿真，并与PID控制策略进行仿真对比。 

第六章 主要对变换器进行仿真及实验结果分析。通过Simulink仿真软件搭建双 向全桥CLLC谐振变换器进行仿真，根据前面的分析设计搭建双向全桥CLLC谐振 变换器实验样机，对实验结果进行分析。

第二章 Si C功率器件的特性及驱动电路分析 

本章以罗姆公司的SiC功率器件为例，首先分析SiC功率器件的特性，了解SiC 功率器件的特点。然后结合变换器，针对性的分析SiC功率器件在驱动电路设计中存在的问题，并给出了解决方案，对其驱动电路进行设计。 

2.1 SiC MOSFET的工作原理  

选择MOSFET时，通常从NPN、PNP型与增强型、耗尽型两个方面进行选择， 由于PNP型MOSFET存在导通电阻大、成本高、种类少等问题，耗尽型MOSFET 在栅极电压为零时仍存在导通电流，这会导致误触发MOSFET，导致整机失效，因此本文选择NPN增强型的MOSFET进行开关电源的设计。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHzFYRsqaqmttNp2N4QMicxWGS6SEjxrtnWN8ticmxzeOpgPKfGoh3t5JA/640?wx_fmt=png)

SiC MOSFET的等效电路图如图2-1所示。在SiC MOSFET的等效电路图中，CGS为栅源寄生电容，CGD为栅漏寄生电容，CDS为漏源寄生电容，LD为漏极电感，LS为源极电感，LG为栅极电感，RD为漂移区电阻，RB为寄生晶体管电阻，RG为栅极电阻。其寄生电容包括 CGS、CGD、CDS。寄生电感包括LD  、LS。寄生电阻包括RD、RB、RG 。SiC MOSFET为压控型器件，它的开关过程主要受寄生参数的影响。

SiC MOSFET的外延层和衬底材质均为碳化硅。当VGS≤VTH（开启电压），此时S极和D极形成两个背靠背的PN结，其中一个PN结反偏，故DS极之间无电流流过。当VGS>0，则门极和P阱以门为介质形成两个平板电容器，产生从门极指向P阱的电场，排斥空穴吸引电子，随着VGS的增大，该电场愈强。当VGS  >VTH，被吸引到门极附近的电子在P阱表面形成一个N型的反型层，DS极形成导电沟道，DS极导通。 

2.2 静态特性  

本文选取罗姆公司650V系列的SiC MOSFET STC3060AL产品作为研究对象， 进行静态分析。其漏源极耐压为650V，连续漏极电流为39A，并且它的脉冲漏极电流高达97A，避免了一些情况下因脉冲电流击穿开关管。同时它的反向恢复时间仅15ns，作为二极管整流时避免了因频率过高导致开关管过热损坏。其导通电阻为80mΩ，上升时间为37ns，下降时间21ns，大幅度减小了开关损耗，减小了开关管的温升。SiC MOSFET的静态特性如图2-2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH4zLDrPb5tErRiaIDiahTCZiaCoxDSiabF5m884NNRicGVa7t7FNFDUhuZng/640?wx_fmt=png)

如图2-2所示，SiC MOSFET开启时，此时驱动电压小于开启阈值电压，此时还未形成反型层，表面不能形成导电通道，为关断状态。当驱动电压大于开启阈值电压时，随着驱动电压的增大，P阱表面形成一个N型的反型层，此时漏源之间的电流从零开始上升。这里可以大致将其分为3个工作区域。（1）可变电阻区，此时VGS >VTH，VDS<VGS－VTH，因VDS较小，沟道电阻主要由VGS 决定。当VGS一定时，ID与VDS近似为线性关系。（2）恒流区，此时VGS >VTH且VDS>VGS－VTH。在该区域内，沟道电阻基本不变，ID仅受VGS控制，呈恒流特性。（3）截止区，此时VGS< VTH，在此区域内，沟道被全部夹断，此时ID=0，开关管关断。由SCT3060AL的静态特征曲线可知，当驱动电压VGS低于12V时，MOSFET工作在恒流区，此区域的开关损耗较大，对于一个开关周期，此时间段越长，开关损耗越大。当驱动电压VGS高于14V时，此时开关损耗大幅降低。

2.3 SiC MOSFET的开关特性  

2.3.1 SiC MOSFET的导通过程 

SiC MOSFET的导通过程由4个时间段组成，如图2-3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHdB8Jby2megBNcYJnztiaS6Fapm94XKib63giakYV8WhhLxfXLc4ovsmJg/640?wx_fmt=png)

阶段1 \[ t0− t1\]：驱动器开始输出正向驱动电压，驱动电压VGS从VEE上升到 VTH。 在这段时间内，因为VGS<VTH，所以ID=0且VDS保持不变，但IG瞬间达到峰值，此瞬时峰值电流IG主要由栅极驱动器中的电荷提供, IG给CGS和 CGD充电，这一过程也被 称为开启延迟阶段。 

阶段2 \[ t1 −t2\]：驱动电压VGS持续增大，从高于VTH上升至米勒平台处。在这一 阶段器件开始导通，ID从零开始逐渐增大。相反IG从峰值开始减小，VDS 仍然保持不变，这是因为此时ID仍然很小且RDS较大的原因，此时SiC MOSFET的本征体二极管处于阻塞状态。 

 阶段3 \[ t2−t3\]：在此阶段驱动电压VGS位于米勒平台处。对于SiC MOSFET来说，此刻通常位于8V左右。在这段时间内，满载电流流过RDS，且本征体二极管不再处于阻塞状态，因此漏极电压开始下降，导通电阻持续减小。虽然此时满负载电流通过D极，但RDS在此阶段内依然较大，损耗依然较为严重。  

阶段4 \[ t3 −t4\]：在此阶段驱动电压VGS处于米勒平台尽头VMP处，VDS持续下降。 当VGS从8V向18V接近时，通道电阻继续降低，从而使VDS持续下降。当VGS>14V时，SiC MOSFET完全导通，但导通电阻RDS的大小仍受到VGS    的最大值影响。栅极电流IG给CGS和CGD充电，充电速率减缓。   

2.3.2 SiC MOSFET的关断过程 

SiC MOSFET的关断过程实质上与导通过程的顺序相反。此时栅极驱动电路的 作用是吸收大量峰值电流，能够使SiC MOSFET寄生电容CGS与CGD尽快放电。SiC  MOSFET的关断过程同样由4个时间段组成，如图2-4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH24FQ4ico3MbZxVoLhccxj7BztyLg19SvLg6SrE2P1RgtDQM5w6KwYww/640?wx_fmt=png)

阶段1 \[t0−t1\]：驱动电压VGS从VDD下降到VMP。SiC MOSFET寄生电容CGS与CGD释放储存的电能形成灌电流IG。在这一阶段，漏极电流ID保持不变。不过随着VGS的逐步降低，沟道电阻的阻值也开始缓慢增加，使得VDS略微增加。   

阶段2 \[t1− t2\]：在这一阶段内，由于驱动电压VGS下降缓慢近乎保持不变，因此灌电流IG的大小主由CGD决定。在整个米勒平台处，VDS迅速上升到VDS的源电压， 并在此处被SiC MOSFET的本征体二极管钳位。漏极电流仍然ID保持不变，由于此时VGS<12V，RDS随之继续增大。   

阶段3 \[t2−t3\]：随着驱动电压VGS从米勒平台电压向VTH持续下降，漏极电流ID在此阶段迅速下降直到接近零安培。VDS通过SiC MOSFET固有的体二极管被钳位到漏极电压VDD 。    

阶段4 \[t3−t4\]：在这一阶段内，漏极电流ID持续接近于零安培且VDS保持不变。VGS降至0V或者为负，SiC MOSFET内部输入电容器完全放电。此时应尽量降低驱动电路的阻抗。从而保证SiC MOSFET的栅极处于低电平的状态，这对防止外界干扰因素引起的误导通起着重要的作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH25utzA7m9uuWL2g4Xlqc3WvPQfQD16ltyv623KREtPvibYUbSukxu0Q/640?wx_fmt=png)

 2.4 SiC MOSFET的驱动电路分析与设计  

2.4.1 驱动的电压尖峰分析 

SiC MOSFET能工作于更高频率的环境中，其开通与关断速度比Si MOSFET更 快，这就使得它的驱动信号上升和下降速度都更快，在这一情形下，开关管会更容易产生更大的电压尖峰。因此，在设计驱动电路时需考虑电压尖峰的因素，防止SiC  MOSFET被击穿烧毁。图2-5为SiC MOSFET驱动简化电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH52eCtZicHBQSuf1ZWaYQoLibic2yq7O4CwvEHjicfOvQWRffAWIMxia3j2w/640?wx_fmt=png)

其中Cgs为栅源极两端的等效电容，Rg为驱动回路总等效电阻，Lg为驱动回路总等效电感。当驱动信号传输到栅极，SiC MOSFET闭合，这个过程可将其看作RLC电路的阶跃响应，得到SiC MOSFET栅源极两端的驱动电压Ucgs与Ugs之间的传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHhSyFYPicCGNfO4j6HicicF2xEYQ7yp6P0tiauXe5ZibooWLibAJkoWvEPPNA/640?wx_fmt=png)

从式（2-7）可知，Rg与Lg正相关，为了减小电压尖峰并且兼顾Rg过大导致开关速度减慢加剧损耗的影响，因此驱动回路总等效电感Lg的取值尽可能小，Lg 的大小与驱动电路的长度有关，这就要求我们在绘制PCB时尽可能缩短驱动线路，减小总等效电感Lg的值，让SiC MOSFET与驱动芯片尽量接近。  

2.4.2 SiC MOSFET的驱动设计要求 

本文以SiC MOSFET开关电源为应用背景，通过对SiC MOSFET的静态分析、 开关特性分析、驱动电压尖峰分析与应用场景可得到SiC MOSFET驱动电路的需求。为保证SiC MOSFET能高效可靠的工作，驱动电路应满足如下功能： 

（1）驱动电路应该与功率电路进行隔离，防止控制回路受到主回路的影响，保证控制芯片的安全运行，使系统的正常运行。 

（2）使驱动信号的上升沿和下降沿陡峭，加快其关断与开通，减小损耗，保证SiC MOSFET高效运行。 

（3）尽可能减小驱动电路的寄生电感，这样能有效减小电压尖峰，避免在驱动过程中使SiC MOSFET损坏。 

（4）驱动电路需对控制芯片的控制信号进行功率放大，使其满足SiC MOSFET的开通需求。 

（5）应选择合适的驱动电压，相较于Si MOSFET它的驱动电压范围较窄，较高的驱动电压会损坏开关管，且在实际工作中，需留有一定的裕量，防止开关管被电压尖峰损坏。同时驱动电压过小会导致开关管工作在饱和区，损耗较大，故因选取合适的驱动电压。 

（6）应选择合适的驱动电阻，保证SiC MOSFET高效工作。驱动电阻影响着SiC  MOSFET的开通与关断过程，合适的驱动电阻不仅能有效地减小SiC MOSFET的损 耗从而提升驱动电路的性能，而且还能在一定程度上减小驱动电路的电压尖峰。  

2.4.3 驱动芯片 

在目前驱动芯片中，SILICON LABS公司的隔离驱动应用较为可靠，根据上述的 驱动设计要求、变换器拓扑结构以及驱动芯片需满足Si C MOSFET的开关频率要求， 选择使用该公司的驱动芯片SI8233BD-D-ISR。它具备以下特点： 

（1）芯片可以满足半桥或者全桥类型拓扑的MOSFET驱动，并且实现对原副边最高达5KV的电压进行隔离，保障驱动电路与芯片供电电路的安全运行。 

（2）芯片的原边具有Disable引脚控制功能，当该信号为高电平时，输出信号均为低电平，输出无法驱动MOSFET开通。只有该引脚信号为低电平时，信号才可以正常的从芯片内部通过。 

（3）驱动芯片原边电压供电4.5V-5.5V，副边供电电压6.5V-24V，可实现输出最高24V的驱动电压，输出驱动电压范围较宽，符合设计需求。 

（4）驱动电流峰值电流可以达到4A，满足驱动设计的要求。  

（5）SI8233BD具有DT功能，可以通过外接电阻来设置输入信号VIA和VIB 的死区时间，计算公式Dt=10Rt(ns)，也可以通过软件设置死区时间。 

（6）具备防止驱动侧MOSFET上下桥直通的保护，当芯片的输入端均为高电平时，驱动芯片自锁，使其输出均为低电平，输出侧无法驱动MOSFET，保护桥式功 率电路。  

2.4.4 自举电路 

设计采用自举电容的方法，利用自举电容来给上管供电驱动SiC MOSFET，有效减少芯片供电的数量。这一设计，能有效减小体积，降低成本，提升变换器的功率密度。桥式自举电路如图2-6所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH610DgrEpiaHB5EXUvuwKvFkURMc8YVECbbq3vWL6IdJVu7DwWWaAckg/640?wx_fmt=png)

它的工作原理为：在Q2接通，Q1断开低侧驱动期间，CB开始充电。在此期间， 充电电流从VDD流入ISOdriver VDDA输入端，并通过自举电阻RB的充电环路流过二极管D1、CB和Q2后到地。在低侧驱动周期结束时，Q2关断，Q1导通。Q1的源极电压迅速上升至漏极电压，使得自举二极管D1反向偏置，从而将接地的VDD电源与CB断开。此时CB的低端电压为SiC MOSFET的源极电压，所以Q1源极和栅极之间通过OUTA引脚保持VDD-0.7V的偏置电压，直到上管驱动周期结束。这一阶段由CB提供维持工作所需的所有电流，因此自举电容取值大小对于电路来说至关重要。自举电容过过大，在下管导通时间内电源不能将自举电容充满，造成上电压偏低。 自举电容过小，储存的电荷量不能满足需求。 

设计首先计算CB在最大占空比下必须提供的总电荷QCB，该电荷主要由两个成分，VDDA电源偏置电流IB和Q1栅极电荷QG，比较而言其它损耗忽略不计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHJhBEXl24ibS3TCOtEgs8QCcP18uT1xwqsaAC0HYFWsI7TfjwOriaaQOA/640?wx_fmt=png)

2.4.5  驱动电路

本文选取的SiC MOSFET为罗姆公司的650V系列的SCT3060AL，其漏源极耐压为650V、连续漏极电流为39A、脉冲漏极电流97A、上升时间为37ns、下降时间 21ns、导通阻抗为65mΩ 、反向恢复时间为15ns。它的栅极驱动电压信号最大范围为-3~+23V，典型的栅极驱动电压信号范围为0~17V。与常规的Si MOSFET相比，它的栅极驱动电压信号范围较窄，为了防止驱动电压过大及电压尖峰等因素导致芯开关管烧毁，一般驱动电压的选取留有一定的裕量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH2iaUhus6l9bug0qrPiaRTZc7T091fbGicB4hGhPjfCQoFPycfyF9jAUfA/640?wx_fmt=png)

通过前面的分析，设计的驱动电路如图2-7所示，本设计采用自带Boost-Strap功能的5kV隔离驱动IC SI8233BD-D-IS，用以驱动高位与低位SiC MOSFET，并保证控制信号与原边SiC MOSFET隔离，保护控制电路，并且具有防止上下管同时导通烧毁主电路的保护。原边2个驱动端均增加较小截止频率的RC滤波电路，去掉控制芯片产生的杂散波形，能有效抑制干扰信号对驱动电平的影响。原边供电端增加一个2.2uf的滤波电容，提高供电端输入电压的稳定性。DT端接上拉电阻将引脚上拉为高电平，驱动通过软件设置死区时间，便于调整与控制。 

副边驱动端均将驱动电阻与肖特基二极管反向并联，使其快速下拉，保证SiC  MOSFET的快速关断，减小SiC MOSFET的关断损耗，提高电源整体效率。在SiC  MOSFET的栅源极增加一个TVS二极管，防止SiC MOSFET栅源极因过高的电压尖峰被烧毁。桥式电路的上下管低电平不相同，本文设计副边采用自举电容的方法，利用自举电容来给上管供电，驱动SiC MOSFET，有效减少供电芯片的数量。在副边电源输入端接入具有较高反向截止电压的二极管，防止电流倒灌回电源输入端，保护供电电路。 

SiC MOSFET的驱动电路还包括芯片供电电路，如图2-8所示。供电电路采用 自带隔离的隔离电源模块，本文使用的隔离电源模块为B2415S-1WR2与B2405S-1WR2，它们的输出电压变化范围为±10%Vin，较为稳定。并且输入输出之间有高达1500V电压隔离保护，为电源提供隔离保护。芯片供电电路均增加滤波电路，保障输出电压的稳定性，并且采用零欧电阻与滤波电容来分开数字地与模拟地，减小模拟信号和数字控制信号的相互干扰。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHGj2elUAgnuRpYNcZR1axPK1VUs52PDy5ibnyQqeSFbeBSLYbdMMxh5Q/640?wx_fmt=png)

2.5 SiC MOSFET的驱动电路测试 

为确保设计的驱动电路能按要求正常工作，需对设计的驱动电路工作性能进行测试验证，测试其是否能为SiC MOSFET提供稳定且可靠的控制信号。驱动电路的测试内容主要包括：驱动电路的输出电压测试、桥臂互补驱动电压测试、脉宽连续可调性测试、以及稳定性测试。  

2.5.1 输出电压测试 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHJMpVrqv04yicY6ricNcxGE4Pib1elju0kgKxuRhdOVTf7AqOHc5xrNicDQ/640?wx_fmt=png)

本文SiC MOSFET的型号选择为罗姆公司的SCT3060AL，根据数据手册推荐的 驱动电压，驱动电路设置的驱动电压为15V。测量驱动电路栅源极输出的电压波形， 测量控制芯片DSP28335输出波形如图2-9所示，图中DSP输出波形的占空比设置为0.48，开关频率设置为125kHz。驱动电压为3.3V，输出波形高压尖峰为3.7V，低压尖峰为-0.8V，符合驱动芯片SI8233BD-D-IS的输入阈值范围。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHJHH76Y0yE22jibJ5c1SGrZoU2ZKiaWoiaLne5eGCpicNyXfJF0BDIS4cVA/640?wx_fmt=png)

图2-10为将驱动电路与SCT3060AL连接后测量得到的带载波形图,同样其占空比为0.48, 开关频率为125kHz。从图中可得输出波形高压尖峰为15.9V，低压尖峰为-0.2V，处于SCT3060AL的阈值电压+22V/-4V内，没有产生栅极驱动电压过高或过低损坏SiC MOSFET的情况，满足SiC MOSFET所需的开关电压。

2.5.2 桥臂互补驱动电压测试 

设计驱动电路的信号输入输出端连接的电容较少且容值也较小，从控制芯片发 出PWM信号到SiC MOSFET接收到驱动电路的信号，电路的响应时间主要由驱动芯片的固有延迟及电路和电路的电磁干扰决定。为了明确以上干扰是否影响了驱动电路准确控制SiC MOSFET的开通与关断，是否能够满足桥式电路中同一桥臂驱动电压的互补输出，避免同一桥臂上下管因同时导通导致电路烧毁的情况，本文对同一桥臂上下开关管进行测试，测量结果如图2-11所示。测试结果表明设计的驱动电路连接同一桥臂上下开关管的驱动信号为互补导通与关断，没有同时处于高电平的时候，工作正常，不存在上下管同时导通的情况，符合设计要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH4I1Ro6BmfentpwFCdghYzAVZl6jh3COLxTBLKEBXQb62pTWNZYAarQ/640?wx_fmt=png)

2.5.3 脉宽测试 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHcLKhg69TCQabKNEicmVvebGNRic6k5XMJC2z727nslsaL2JUOibickM5wA/640?wx_fmt=png)

变换器是通过控制开关器件的频率与脉宽来实现对输出电压的控制，这便要求 驱动电路能够跟随控制信号的输入脉宽的变动来改变它的输出脉宽。因此本文分别在2us、4us输入脉宽下测试了驱动电路的波形，测量结果如图2-12与2-13所示， 验证了驱动电路输出脉宽的可调性。时间的倒数为频率，当其输出2us的输入脉宽对应它的输出波形频率为250Khz，从侧面也验证了驱动电路能正常工作在高频的情况下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHAdAdYclhUz3ue3NnRkftcefnE245kzmiaMEZWaF5cav87NgM1giaMQzQ/640?wx_fmt=png)

2.5.4 稳定性测试 

为了保证驱动电路能够长时间正常运行，保证驱动电路能持续稳定的为SiC  MOSFET栅极提供稳定的输入，本文对驱动电路的输出波形进行了较长时间的持续测量。通过在SiC MOSFET栅极测量驱动电路5种不同频率的输出波形，再计算出输出频率的平均值和标准差，具体数值如表2-1所示，由表中测量数值计算出该驱动电路的输出脉宽稳定度好于0.1%，满足设计要求。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHqHibicshMQy7QUGdLzrVXFjN6jibyacSOUSV0DlRicw4SEC4o2153oUMtA/640?wx_fmt=png)

2.6 本章小结 

本章主要介绍了SiC MOSFET的电气特性和对SiC MOSFET驱动电路进行设计。 首先分析SiC MOSFET的基本的工作原理与特点，然后对其静态特性和开关特性进行分析，最后根据前面的分析及实际电路中驱动的应用场景设计了SiC MOSFET的驱动电路，并对驱动电路进行了性能测试实验。从驱动电路的输出电压、桥臂互补驱动电压、脉宽连续可调性等方面验证驱动电路的合理性。实验结果表明设计的驱动电路输出电压能够与目标SiC MOSFET匹配，满足SiC MOSFET的工作需求。 

第三章 双向全桥CLLC谐振变换器特性分析 

由于双向全桥CLLC谐振变换器区别于传统的LLC谐振变换器，所以有必要对它的工作特性进行分析。首先分析它的拓扑与工作原理，采用基波分析法 （FHA）建立数学模型，得到增益表达式， 分析谐振变换器中各个参数对电压增益曲线的影响。最后推导了CLLC谐振变换器开关管ZVS的约束条件，为后续变换器的参数设计做准备。 

3.1 双向全桥CLLC谐振变换器拓扑结构 

本文研究的车载双向DC/DC变换器作为连接电动汽车动力电池和电机驱动模块 的桥梁，变换器出于安全考虑需实现电气隔离，能够承受较高电压，调压范围较大， 且保证较高的传输效率避免能量的大量损耗。由于双向全桥CLLC谐振变换器具有调压范围较广、具备谐振变换器的软开关、功率密度高等优点、具备全桥电路开关应 力小、中间含有高频隔离变压器具备电气隔离等优点，能很好的满足应用需求。 

本文采用的双向全桥CLLC谐振变换器拓扑结构如图3-1所示，拓扑由原副边 全桥电路和谐振网络组成，其中S1—S4和S5—S8构成两个全桥电路，Lr1 、Lr2、Lm、Cr1与Cr2构成谐振网络。拓扑结构对称，正反向运行时都相当于LLC谐振变换器，均能实现软开关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH0Cr2XlLYoQKfndSKVuBRT4yGGic8sOmlD7J9icTQYRicE6oahhtWebDhQ/640?wx_fmt=png)

双向全桥CLLC谐振变换器工作时具有两个谐振腔，它们的谐振频率分别为fr   和fm，表达式为： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHJXnpxmjyO6v4aDGRC3UrQZ8CwadCJLnibm11tAcJ7vEKESCc4QnSV9g/640?wx_fmt=png)

根据fr和fm的大小关系，CLLC谐振变换器可以分为三种运行状态fs >fr、fm    <fs < fr 和 fs< fm，根据开关频率fs的范围，变换器工作在fs>fr 、fm<fs< fr和fs<fm三个不同的区域，当开关频率fs>fr时不能满足零电压开启，fs<fm  时，谐振网络呈现容性。当开关频率处于fm<fs<fr运行状态时，谐振变换器同时满足零电压开启与零电流关断（Zero-Current-Switching，ZCS）。 

3.2 双向全桥CLLC谐振变换器的工作原理   

3.2.1 断续模式 fm<fs<fr时的工作原理  

当开关频率工作在fm<fs<fr范围内时，双向全桥CLLC谐振变换器的工作波形如图3-2所示，此时电压增益大于1，且开关频率的改变对电压增益影响非常灵敏， 开关频率的微小变化就能对应较大的电压增益范围。因此，出于实现谐振变换器的宽电压范围调节和电压的快速响应，通常要更多的考虑让变换器工作在此谐振状态。由图可知，此时能实现原边ZVS开通与副边ZCS关断，这一区域的工作模态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHHvkBHiaNQRbIicknd6JrJ8BILRcsYcTib6Hu7lK1fcetib3sTIjyf7iaWgA/640?wx_fmt=png)

阶段1\[t0−t1\]：在t0时刻，开关管S2、S3关断，电感电流iL1对开关管寄生电 容Cs1 、Cs4充电，给Cs2、Cs3放电。完全充放电后，电感电流iL1反向流过S1、S4的体二极管Ds1 、Ds4续流，为实现S1、S4的零电压导通做准备。此时谐振电流iL1 、励磁电流iLm均为负，它们的差值电流流过变压器原边，副边二极管Ds5、Ds8导通, Lm被输出电压钳位，iL1、iLm开始增大，iL1增加更快，在t1时刻，ir1增大到0，iLm仍为负值。

阶段2\[ t1−t2\]：在t1时刻，S1、S4已经正向导通，ir1给Lm充电。在t2时刻电感电流ir1与励磁电流iLm相等，此时副边电流iDS下降为零。二极管Ds5、Ds8 实现ZCS关 断，不存在反向恢复过程，能量由Vin传递到输出Vo  。  

阶段3\[t2  − t3 \]：此阶段，ir1和iLm一直相等，副边没有电流通过，整流二极管均反向偏置，输出电压被变压器隔离。Lm参与谐振，能量存在谐振槽内。t3时刻S1-S4 关断，阶段3工作状态结束，进入死区时间。之后的工作过程与之前的类似，故不再重复。 

3.2.2 临界模式fs=fr时的工作原理  

当开关频率 fs=fr时，处于临界模式，变换器工作波形如图3-3所示，此时电压 增益等于1，该阶段谐振电流为正弦波形，此时副边整流管电流为临界连续状态，自然续流到零，实现ZCS关断。这一区域的工作模态如下： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHWcnSib7iaa39HL3chDyiaRwANnsjJorjpLbH5U0GPb6CqE8ibt8yk2fQfg/640?wx_fmt=png)

阶段1 \[t0−t1\]：t0时刻，S2、S3关断，此刻ir1与iLm为负，它们的差值电流流过变压器原边，副边二极管Ds5、Ds8导通,，励磁电感Lm被输出电压钳位，谐振电流iL1对电容Cs1、Cs4充电，给Cs2、Cs3放电。  

阶段2 \[t1−t2\]：在t1时刻，电容Cs1 、Cs4与Cs2、Cs3充放电完成，ir1流过 S1、 S4的体二极管Ds1 、Ds4，为S1、S4的ZVS开通做准备条件，该阶段副边的Ds5、Ds8仍导通，励磁电感Lm被输出电压钳位。此时，能量由Vin传递到输出Vo。  

阶段3 \[t2−t3\]：该阶段，副边二极管Ds5、Ds8导通，谐振电流ir1按正弦规律增大后下降，励磁电流iLm仍然按线性增加，在t3时刻，S1，S4关断，实现ZVS，ir1与iLm相等，整流二极管Ds5、Ds8的电流为零，实现ZCS关断。 

阶段4 \[t3−t4\]：该阶段，iLm大于ir1，它们的差值电流流过变压器原边，电压上负下正，副边二极管Ds6 、Ds7导通，ir1给开关管寄生电容 Cs1、Cs4与 Cs2 、Cs3充放电。 之后的工作过程与之前的类似，故不再重复。 

3.2.3 连续模式fs>fr时的工作原理  

当开关频率fs>fr时，处于连续模式，双向全桥CLLC谐振变换器的工作波形如 图3-4所示，此时电压增益小于1，在该频率范围内，副边整流管为硬关断，不能实现ZCS。这一区域的工作模态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHS7oCT97HllicPVeiaBXvqwichSZlnicsQ8WibHSiaLWaIEdPwvvv3O5cqCicg/640?wx_fmt=png)

阶段1 \[t0−t1\]：在该阶段，S1、S4处于导通状态，iLm小于ir1，它们的差值电流流过变压器原边，电压上正下负，此时副边二极管Ds5、Ds8导通，Lm被输出电压钳位，能量由Vin传递到输出Vo。  

阶段2 \[t1−t2\]：在t1时刻，S1，S4关断，ir1开关管寄生电容给Cs1、Cs4与Cs2、Cs3充放电，在t2时刻，充放电完毕。该阶段，iLm小于ir1，副边二极管Ds5 、Ds8仍然导通，  被输出电压钳位。能量由Vin传递到输出Vo。  

阶段3 \[t2−t3\]：在t2时刻，S2、S3的寄生电容Cs2、Cs3放电完毕，ir1流Ds2、 Ds3，为S2，S3的ZVS开通做准备。该阶段，ir1下降，iLm仍继续上升，ir1仍大于iLm，副边二极管Ds5、Ds8仍导通，能量由Vin传递到输出Vo。  

阶段4 \[t3−t4\]：在t3时刻，副边二极管Ds5、Ds8关断，iLm大于ir，它们的差值电流流过变压器原边，上负下正，此时副边二极管Ds6、Ds7导通，未能实现ZCS，能 量由Vin传递到输出Vo。之后的工作过程与之前的类似，故不再重复。  

由以上的分析可知， 当fm<fs<fr时，谐振变换器能实现ZVS与ZCS，故在设计时，因尽量让变换器长时间工作在这个范围内，减少能量损耗。 

3.3 双向全桥CLLC谐振变换器的稳态分析 

3.3.1 等效电路模型分析 

CLLC谐振变换器与LLC谐振变换器类似，是一个非线性系统，若采用时域分析法进行分析，则求解过程复杂计算繁琐。因此，本文采用基波分析法对CLLC谐 振变换器进行分析。 

为了简化谐振变换器的建模过程，需对变换器作如下假设：   

（1）忽略上下开关管的死区时间； 

（2）原副边的谐振电流均视为正弦电流，忽略谐波分量；   

（3）元器件均视为理想器件。 

CLLC谐振变换器的拓扑如图3-1所示，输入电压为Vin，经开关管S1、S4和S2、 S3逆变后，变压器原边得到幅值为Vin的方波，将该方波电压用傅里叶级数展开如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHUtIXR3nxoanxR5Gic8Y88S4bWmK7e4NNWqTR0tntgCWTiaodh7ibsicSDQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHM4RJkgkMT1FWBPkZEUsACIJBhFptgGxOH8Vic5ibhSTs1tLDiacQeyHMQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHsJmuvyp9um8QYUxKYOXmKTwkqE8Ke4PVyIWZCMuJZhGRJnVmTiaWBBQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHP6DNh9071HKutGIsVGXT9uAZPpxvrOf1Coj5wO9LdPl964oUSceXow/640?wx_fmt=png)

3.3.2 CLLC电压增益特性分析  

（1）电感比g与电容比h 

CLLC谐振变换器相较于LLC谐振变换器多了电感比g与电容比h。它的谐振 点电压增益受g，h参数影响，因此在设计时需要明确它们的关系。 

在谐振频率点时fn=1，将其代入式（3-21）得到谐振点的电压增益为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHvMJxhyovZkroDsCSY2QEclDZvLGzgdMur8BqYYHkXaIq5rk6Zcgiccw/640?wx_fmt=png)

绘图得谐振点电压增益与g，h关系图如图3-7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHCXkQDSRNSlg7YXibZ7CW5zWwcWGynkPBvgLNS5LC1uNEX1oe4WfHrjw/640?wx_fmt=png)

为了CLLC谐振变换器在谐振点电压增益的稳定性，要保证CLLC变换器与LLC谐振变换器一样在谐振点电压增益始终为1，便于设计与控制。由图3-7与公式（3- 23）可知，电感比值g和电容比值h需要满足gh=1。除了考虑正向电压增益，还需考虑反向电压增益。为了简化设计步骤，设置变换器正反向运行的增益一致，取g=h=1，正向电压增益表达可简化为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHUWKKkCTk3bvapbZ5h32nuLGhdqbkMu6xv052Xgiaeibxclib4g2AtSvfA/640?wx_fmt=png)

2）电感系数k与品质因数Q 

图3-8为不同k值的电压增益-频率曲线，为了便于观察将Q值固定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHs8aDhNrkibMNBRfkMBy8taGMnZ6k50dU5ic84JhJ7CRK5vkBGzwk5V8Q/640?wx_fmt=png)

由图3-8可知，谐振点的电压增益不受k变化影响。随着k值变大，变换器电压增益范围变小，电压增益随频率变化速率变慢，此时频率对电压增益的调节敏感度降低。k值变大，谐振电流减小，损耗减小。随着k值变小，电压增益范围变宽，频率对电压增益的敏感度升高，利于宽电压范围谐振变换器设计。但 k 值减小会导致谐振电流增大，损耗增加。因此需根据设计需求选取合适的k值兼顾电压范围与电路的效率。 

图3-9为不同Q值的电压增益-频率曲线，为了便于观察将k值固定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHDLVl51icW4255iby4IR0adicnWibHJreeMtmrdbEoGQIKmQfk1Hoahtfog/640?wx_fmt=png)

由图3-9可知，当Q增大时，电压增益的峰值降低，频率对电压增益的调节能力变差，需要改变较大的频率才能调节相应的电压增益大小。但是随着Q值减小时， 电压增益范围变大，空载时Q值达到最小值，电压增益随频率变化的速率变快，频 率对电压增益的影响变得敏感，但是会导致稳定性降低。因此Q值需根据设计要求折中选取。 

3.4 实现ZVS软开关条件  

3.4.1 死区时间和Lm的关系 

由双向全桥CLLC谐振变换器的工作原理可知，在死区时间内开关管寄生电容完全充放电是实现ZVS的必要条件。由图3-2谐振变换器的主要工作波形可知，当ILr上升到ILm的峰值时，谐振变换器进入死区时间，ILm的峰值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHp1SPpXlXoAicbTO6IvV1FlViaFicRRzMfrs9dr75TXWejrLdU8xbM2vVw/640?wx_fmt=png)

 在设计时需取合适的励磁电感。励磁电感的大小不光会影响ZVS的实现，还会影响变换器的效率与电压增益。  

3.4.2 电感系数k的限定条件 

k值范围的选取对于CLLC谐振变换器的设计至关重要，为了提高谐振变换器的效率，需保证变换器能在全输入电压范围和全负载范围内实现ZVS，为了满足设计需求，k取值应满足以下条件： 

若使变换器在全负载范围都满足最小电压增益，则空载时的最大频率点电压增益需满足工作时的最小电压增益，当Q为零时变换器空载，则k的限定条件为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH2ueMV5wibPjGg70OccygPFVI2mia0Cljj8KOzIxaU3adkzfVpUGgCX3w/640?wx_fmt=png)

其中，Kmax为k的最大值， Mmin为电压增益的最小值，fn\_max为归一化频率最大值。  

3.4.3 品质因数Q的限定条件 

Q值的选取需满足变换器能ZVS开启。当输入电压最小时，此时CLLC谐振变换器对应的直流增益为最大直流增益Mmax。为了保证变换器能够实现ZVS，变换器不能工作在容性区域。谐振变换器空载时对应的谐振点频率为感性区与容性区的分 界点，当变换器工作频率大于分界点频率时，满足实现ZVS的条件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHyuMwAqlvNBO58oFFiapFHkov79Tp0IACkxVhssqibHvVhiaEcHicMtYWqw/640?wx_fmt=png)

3.5 本章小结 

本章分析了双向全桥CLLC谐振变换器的拓扑结构和其在连续模式、临界模式和断续模式的工作过程，设计时尽量让谐振变换器处于断续模式，在此范围开关管能实现ZVS开启与ZCS关断。根据基波分析法对双向全桥CLLC谐振变换器建模，得到电压增益，分析g，h，k，Q等参数对电压增益的影响。讨论了CLLC谐振变换器实现ZVS的约束条件，推导了电感系数k与品质因数Q的软开关约束条件。

第四章 双向全桥CLLC谐振变换器系统设计 

首先根据之前CLLC谐振变换器的特性分析与ZVS约束条件，对变换器进行参数设计，使其满足全范围调节电压要求。然后按照设计的参数对高频变压器、谐振电感进行设计，并对谐振电容、滤波电容器件选型。最后采用立创EDA的PCB绘制平台和Code Composer Studio（CCS）软件平台，设计搭建一台CLLC谐振变换器实验样机。 

4.1 变换器主电路参数的设计   

4.1.1 变换器的设计指标  

本文的研究对象为电动汽车电力驱动子系统中的双向DC/DC变换器，因此根据设计要求本文拟搭建一台基于SiC器件具有电压宽范围调压、电气隔离、高效率的双向全桥CLLC谐振变换器样机，主要参数指标如下表4-1所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHxNBiapjicgLUpXbNb9gePpy7EpD0Q2FRiacZcxSXgnmKib18ib7DKCmLVZw/640?wx_fmt=png)

4.1.2 确定变压器匝比 

变压器合适的匝比有利于输出范围的覆盖，实现对谐振变换器的优化。变换器工作在谐振点时效率最高，为了实现效率最优化，本文的谐振点选取为动力电池额定工作状态，即按照额定输入电压与额定输出电压之比来确定匝比，使变换器多数时间都工作在谐振状态，变压器匝比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHF86aCvlTtb60C9nU1nt9STIQVCUqal0XJcJXEGIpOt7SEDiaDiak0iaMg/640?wx_fmt=png)

其中Vin为变换器额定输入电压，Vout为变换器额定输出电压。

4.1.3 死区时间和励磁电感Lm的设计 

原边开关管的源极与漏极间自身就存在着寄生电容，并且在进行硬件设计时为了防止漏源极电压尖峰击穿开关管，通常会增加RC电路来抑制电压尖峰。为了保证变换器实现ZVS，在死区时间内开关管的漏源极电容需完全充放电。死区时间过短会导致无法完全充放电，不能达成ZVS软开关条件，死区时间过长和RC电路电容过小虽有利于ZVS的实现，但会增大原边谐振电流的有效值，增大损耗，降低 效率，且RC电路抑制电压尖峰能力减弱。因此需选择合适的死区时间及RC电路电容的值。通过综合比较，本文选取死区时间为200ns，RC吸收电路的电容设置为150PF，本文选取的Si C MOSFET为罗姆公司的STC3060AL，其输出电容为55PF。 将这些参数代入式（3-27）得最大励磁电感为： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHeDNDkDiaEtQbaibY0RgslGeOCSicqkWyGlzqH3ysvqib37dce74gNdfpWA/640?wx_fmt=png)

4.1.4 谐振网络参数计算 

由前面的分析可知，k与Q的取值不仅会影响到开关管的ZVS，而且对谐振变换器的电压增益有很大影响。因此需要合理选取k、Q值，使其兼顾变换器的宽电压调节范围与较高的转换效率。 

按照谐振变换器的设计指标求得变换器最大最小增益归一化频率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHxvz4qiaSZ4gicprBvRh1olibnExvicTYsZgcsAatpSWicLC8Iqaa6UIEiajQ/640?wx_fmt=png)

Q值增大，则电压增益变小，频率灵敏度降低，较为稳定。Q值减小，则电压增益变大，频率灵敏度提高，反应迅速但不稳定，为了提高效率，在满足软开关的条件下Q 值也尽量取较大值，根据设计要求Q取值为0.42。

完成对电感系数k与品质因数Q的取值后，按照谐振变换器的设计指标可得以下CLLC谐振变换器参数的值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHBP3DAIfOiavTxtIOaDx3mnotBhwuNKHuBJ35nWWiaQ16pF6IqGTW9ib2g/640?wx_fmt=png)

其中，励磁电感Lm的取值小于励磁电感的最大值，满足ZVS的设计要求。根据以上的参数设计可画出电压增益曲线，如图4-1所示。通过该增益曲线验证了设计的谐振参数满足Mmax=1.249,Mmin=0.874的增益范围，空载和满载情况都工作于感性区，满足软开关要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH66AxqVgLVQy0fLpjQnuqdMhLE8nUQtTqMEugZXc9l2ibTatABVmfgoQ/640?wx_fmt=png)

4.2 变换器整体系统硬件框架 

本文实验样机的数字化系统硬件电路主要分为主电路和控制电路，主要包括采样电路、隔离驱动电路、辅助电源电路以及保护电路，其整体硬件框图如图4-2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHSdZCicbCicoickl4blNibtvlPCsNTlKFeXLAsDAhXTINhDkHeqhLNZd2CA/640?wx_fmt=png)

整个电源设计分8部分组成：   

1\. 全桥CLLC原边SiC MOSFET电路；   

2\. CLLC谐振网络；  

3\. 高频隔离变压器，实现能量传递和原副边隔离；   

4\. 输出整流电路，CLLC输出整流与滤波；  

5\. 隔离驱动，实现原边SiC MOSFET驱动与副边控制器隔离；   

6\. 控制器，采集输出电压电流信号，环路计算得到原边驱动信号；   

7\. 辅助电源1，提供原边驱动供电15V;   

8\. 辅助电源2，为副边控制器供电，驱动副边供电5V。  

4.3 变换器关键器件选型   

4.3.1 高频变压器的设计 

高频变压器连接双向全桥CLLC谐振变换器的原边与副边，是变换器的重要组成部分，具有变压、电气隔离、储能、变流和能量传递等功能。变压器设计是否合理影响着系统的效率、质量、体积和成本。高频变压器的设计方法主要有几何参数法和面积乘积法(Area Product，AP)，本文采用AP法。  

1\. 选择变压器磁芯的材料及型号 

合适的变压器磁芯有利于变压器性能的稳定性。高频变压器的磁芯材质主要为铁氧体和合金类两大类，其中铁氧体磁芯在高频工作时损耗小、稳定性好且价格便宜，因此该磁芯在开关电源中有着广泛的应用。铁氧体磁芯又分为锰锌系和镍锌系， 他们的特点如表4-2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHicY1dibISE2v7YJnbE7VHDHFmLJMNGGLLOHt3KNlAq1k6z7sfLwPqzeg/640?wx_fmt=png)

从上表可知，锰锌系的铁芯损耗更低，常用作功率变换器，故本文磁芯材料选为铁氧体磁芯的锰锌系材料。它的饱和磁通密度Bs=0.3~0.5T，正常工作时的磁通密度Bw=0.15T，剩余磁通密度Br=0.1T 。由表4-2可知，PQ形结构常用于功率变换器的变压器及电感设计，本文选择PQ形结构进行设计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHKcDxluJPZpjVgiaUZz0kw6rgHqrh38UgP8TmDxhgZaBsmA8B8Txbk6A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH0aMy7CibtXZscDbYyHxhConjWefVzcmIyZhiaxRv4mT3ZECVpcpeUOmw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHVVtU4IHZgo4Ricnprt65XNarczJzzcQGXh761G5OdSlgynyTQzPrlUA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHLC4WcZ4996dFEzNR5Wh1npNL4IzvDicoojcD9UFYXepRtVcEeFEjNpw/640?wx_fmt=png)

4.3.2 原副边谐振电感设计  

1\. 选择原副边谐振电感磁芯的材料及型号 

原副边谐振电感也采用AP法进行设计，磁芯同样选择铁氧体锰锌系材料，选择 PQ形结构，再通过AP法确定磁芯的型号。 

根据AP法确定原边谐振电感磁芯的型号，AP法计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHiakFDJOr67FjVfCLOlvpc1LAaebOV5zOufQ9fBEJ1icNrIic5fzmIqZJA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHdlEbJQju1AciaaUO1Seice1kicUn2nyps5Wjq9q7NJEM7kXibn8og9zxYA/640?wx_fmt=png)

由于谐振电感与变压器串联，其电流变化率相同。因此原副边谐振电感的绕组导线的选取与变压器一致，均采用直径d=0.3mm的漆包线。设计的原副边谐振电感实物如图4-4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHgEQlibpRpSric6oMHQzI2byJo93Ek0bt6RxbdPrUBdEMUnIldlcrSb5g/640?wx_fmt=png)

4.3.3 滤波电容与谐振电容的选择  

1\. 滤波电容选择 

CLLC谐振变换器区别于一般LLC谐振变换器，其主电路原副边都存在滤波电容，其选型主要与纹波电压、开关频率、输出功率等相关。假设CLLC谐振变换器原副边输出滤波电容的纹波电压∆Vc1=1%Vin=3.5V与∆Vc2=1% Vo=3V，则可得其原副边滤波电容为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHVibrA16vIyCkL0O9182DibtwwBb3NuROaHTI4fccVHa3NvicAMrXDJCnQ/640?wx_fmt=png)

对于滤波电容来说还需考虑其电压应力，因此选择TOPAZ的引线型铝电解电容ECRF1020100M501P00与永铭的引线型铝电解电容 LKME1252H4R7MF并联连接， 他们的耐压值均为500V。   

2\. 谐振电容选择 

谐振电容在电路中起能量储存和能量传输作用，是一个关键的器件，它的可靠性对谐振电路来说具有重要的意义。因谐振频率较高，本文选择高频电容作为谐振电容，其中MKP、CBB薄膜电容耐压性能好、高频特性好、工作损耗小、串联等效电阻小、温升低，常用于高频电路中。对于谐振电容来说首先考虑的是它的电压应力， 因电压过高致使电容被击穿会导致严重后果，选择谐振电容时必须考虑它的耐压性 能。电流应力常可通过将多个电容并联来满足设计要求。故通常根据电压应力来选择 合适的电容规格。可由式（4-34）得谐振电容的电压应力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHJLe3E9mXYk01Dk61lHH8aFhlMEK48MyXGNLUU1HIvqd6feGL8W0QTw/640?wx_fmt=png)

计算得原边谐振电容的电压应力为699V，副边谐振电容的电压应力为627V，设 置2倍以上的安全裕量。通过综合考虑，原副边均选择耐压值为2000V的CBB电容 。原边采用3个33nF并联，构成99nF的原边谐振电容；副边采用3个33nF和1个27nF并联，构成126nF的副边谐振电容。

4.4 系统硬件电路设计  

4.4.1 功率主电路设计 

双向全桥CLLC谐振变换器的功率主电路由原边全桥电路、副边全桥电路以及 谐振网络3大部分组成，如图4-5所示。原边采用4个SiC MOSFET组成全桥电路。 采用多颗电容并联作为谐振电容，多颗电容并联在保证板子体积的情况下，减小每颗电容流过的电流，降低损耗与电容发热量，减小每颗电容所承受的电流应力，副边谐振电容采用相同的设计，滤波电容同样采用多个并联的方法。同时在每个SiC  MOSFET的漏源级并联上一个RC电路来吸收电压尖峰，较小波形震荡。在SiC  MOSFET的栅源级并连上一个10KΩ的泄洪电阻，加速SiC MOSFET开启时电荷量的释放，防止在高频时因电荷量未能及时释放导致开关管误导通的现象。副边电路整流采用4个与原边相同规格SiC MOSFET，既能实现快速恢复整流，也能保证反向运行时高效逆变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH97YiaiaFLEaBicTiczYOpWDKsSI1eL1Iu2nkGhRhSfA585qwBI3vpMGc9g/640?wx_fmt=png)

4.4.2 输出电压电流采样设计 

CLLC谐振变换器工作于高频开关模式，存在较大干扰信号，为保证对输出电压与电流的准确采样，实现环路对输出的精确控制，采样电路使用运放差分采样方式，从功率电路采集电压信号经电阻分压，再经过运放电路放大传送至DSP的ADC模 块。对电压差分采样而言，在反馈端增加RC滤波，滤除高频电压分量。对电流差分采样而言，在反馈端增加C滤波，滤除高频电流分量。同时在DSP的电压电流采样 端口增加RC滤波，二次滤除杂波信号。变换器的电压电流采样电路如图4-6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHy6yccCoLTAwyDnmPg5JYnnpky5ZCAY9Agh6CialCzEYRd3Q2Grjh2cQ/640?wx_fmt=png)

 4.4.3 保护电路设计 

对于谐振变换器来说，工作时的可靠性是很重要的，当工作出现异常时需及时的处理问题，因此其电流保护电路同样重要。其峰值电流保护电路如图4-7所示。变换 器电流采样后经过整流桥整流后，R76将原边电流源信号转化为电压源信号，经DSP 内部比较器比较，判断是否满足PWM错误联防模块的触发条件，从而切断DSP的 PWM的输出，用以实现原边电流过流保护。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHMf0icTCF6DaDxymQLyvoXicjxXd1ButjFIUSV05o048tcu9S0ykOX13g/640?wx_fmt=png)

4.5 变换器软件程序设计  

4.5.1 硬件及软件框架 

CLLC谐振变换器主功率电路为全桥结构，PWM1A/B，PWM2A/B用以驱动全 桥的低边与高边SiC MOSFET，DSP28335采样输出电流电压信号，经环路计算后输出不同电压电流控制，比较器获取CLLC原边电流，实现电流过大时快速关闭PWM， 快速保护变换器不损坏。变换器控制硬件与软件架构如图4-8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHLG5iaVOSawJIIdZO7EEJnicxybpmTtxqS5icAcEeLzK4mCFXkquslZTnQ/640?wx_fmt=png)

图4-8 CLLC控制硬件与软件架构  

Figure 4-8 CLLC control hardware and software architecture 

4.5.2 状态机设计 

CLLC程序状态机运行周期为5ms，包括初始化状态、等待状态、软启动状态、 正常运行状态、故障状态，各个状态之间跳转条件如图4-9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHumI3x6OyMO4vELTHkbSUo3AHWB7b30nWonlOias7SxhZ5rVHGH4J9GA/640?wx_fmt=png)

状态跳转条件如下：  

初始化状态至空闲状态：上电程序初始化后跳转。   

空闲状态至软启动状态：等待3秒后自动跳转。   

软启动状态至正常运行状态：正常启动结束后。   

软启动状态至故障状态：启动过程中发生故障或保护。   

正常运行状态至故障状态：正常运行过程中发生故障或保护。    

1\. 初始化状态  

初上电程序进入初始化状态，完成程序运行相关参数的初始化配置，包括关闭PWM，故障标志位清零，初始化输出电压参考为0，设定输出最大限流值22A。程序完成初始化后状态机进入空闲状态。  

2\. 空闲状态  

程序等待3秒后（等待母线上电后电压稳定），若故障标志位都为 0（模块无故障），则状态至软启动状态，并初始化软启动子状态机标志位。  

3\. 软启动状态  

程序软启动状态机采用子状态机设计，由初始化、等待、启动、启动完成四个子状态构成。初始化阶段，设定CLLC原边电流保护值，PWM的限定启动周期量（频率值），输出参考电压初始值。随后进入等待状态等待100ms，并以最高频率200KHZ发送矩形波。在软启动过程中，为了抑制启动过程原边谐振电流过大，启动从最高频 率（最小周期量）开始启动，以最大死区启动，每隔5ms最大周期量限制值逐渐增 加，即CLLC运行的最低频率逐渐降低，死区逐渐减小。当PWM的最大周期量增加 至额定工作周期时，软启动结束，状态机跳转至运行状态。其流程图如图4-10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHdc4CxNvflUpqPQ3Bic1AokjTarOZrFnV000bRSeqviaTjoIz2iaXzbuiaw/640?wx_fmt=png)

 4. 正常运行状态  

该状态机内程序不处理任何内容，环路运行和各种保护通过中断函数处理。   

5\. 故障状态  

当模块发生故障或需要保护时，如过流保护时，模块进入保护状态，触发 DSP28335的PWM错误联防模块，关闭PWM和待故障清除后跳转至等待状态重新启动。

4.5.3 故障和保护设计  

1\. 过压保护  

当检测到输出电压大于420V，且连续保持100ms，判断为输出过压，关闭PWM， 同时过压标志位置位，状态机跳转至故障状态。  

2\. 过流保护  

当检测到输出电流大于22A，且连续保持500ms，判断为输出过流，关闭PWM， 同时过流标志位置位，状态机跳转至故障状态。当检测到过流标志位置位后（发生过 流保护后），程序等待4秒后，清除过流状态位，等待重新启动。  

4.6 本章小结 

本章根据CLLC谐振变换器的设计要求对电路进行参数设计，合理的选择参数， 使其满足全范围调节电压的要求，并且通过仿真验证了设计的谐振参数满足所需的电压增益范围，空载和满载情况都工作于感性区，满足软开关要求。结合变换器实际工作情况，对CLLC谐振变换器的变压器、谐振电感、谐振电容、滤波电容等关键元器件设计与选型。对各部分电路进行设计，包括系统硬件框架、功率主电路、采样电路和保护电路等。最后设计软件程序，软件程序框架包含状态机、故障保护程序以及为防止谐振电路启动时因启动电压过大击穿元器件而设置的软启动等子程序。

第五章 双向全桥CLLC谐振变换器的自抗扰控制 

新能源汽车行驶工况较为复杂，母线电压受负载变化而扰动，这就要求车用双向DC/DC变换器具有更高的动态响应性能。传统PID控制器存在误差反馈常使系统反应迟钝，动态性能不足，受到负载切换扰动较大。此外双向全桥CLLC谐振变换器 是强非线性系统，现有的建模或辨识方法很难获取其精确的模型，目前很多控制方法都需要在知道系统精确模型的基础上进行设计。基于上述问题，本章对CLLC谐振变换器设计了不需对变换器精确建模的自抗扰控制策略。 

5.1 自抗扰控制的基本原理 

自抗扰控制器（ADRC）是在PID控制思想的基础上发展而来的，我国著名控制论学者韩京清教授吸收了经典PID控制的“以误差反馈消除误差”这个思想精髓， 改进经典PID控制闭环系统中“超调”和“快速性”之间的矛盾，超调降低常伴随有稳定时间增大的情况，误差的“过去、现在、将来”组合只是以简单的线性加权和形式等缺陷而提出的一种用于处理非线性对象的控制器。 

ADRC不依赖于被控对象的精确模型，它把外部扰动、内部扰动和被控对象的未知部分看作系统的总扰动，把总扰动看作原系统的一种状态，构造一个扩张的状态观测器，将原系统状态和扰动一起估计出来，从而为扰动的实时消减与抑制提供了可能，利用扩张状态观测器进行实时估计补偿扰动作用，把原系统补偿成积分串联后就可采用一般的误差反馈办法在进行设计。总扰动与系统的输入输出相关，借鉴状态观测的思想，在大多数情况下，这个扩张状态是可以由系统输入输出重构的，大大简化了扰动获取的途径。 

在非线性自抗扰控制器中，由于非线性结构算法的大量使用，导致其调试参数较多，同时由于部分参数的物理意义不够明确，难以通过合适的方法计算出具体数值。 这也是非线性自抗扰控制器在实际工程领域难以获得广泛应用的主要原因。针对其参数繁多且难以整定的情况，高志强教授提出了线性自抗扰控制器（LADRC）。 LADRC的简化思想为: 忽略跟踪-微分器，将系统带宽与控制器参数相关联，简化控制器参数设计。简化后LADRC控制器仅需设计补偿因子、控制器带宽和观测器带宽三个参数。LADRC控制器基本结构如图 5-1 所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHmiboYSiblnKBu5k0OCJ2EDibmWbVUrHVY72rWyNDbnK70ZUluXzyiaDkwA/640?wx_fmt=png)

图中y表示被控输出量，即对应双向全桥CLLC谐振变换器的输出电压；Uref表示y的期望给定值；u表示被控对象的输入，即系统的控制量。 

5.2 自抗扰控制构成 

5.2.1 线性扩张状态观测器 

LADRC的控制核心是线性扩张状态观测器（ LESO），它不依赖于被控对象的精确模型，它除了能够观测系统各阶状态变量之外， 还可以对系统的总和扰动进行实时估计，再予以补偿。当LESO扰动估计能力足够 时，系统可被补偿为积分串联型，在此基础上可以通过简单的控制律获取期望的性能指标。 

对n阶被控对象来说：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHicib1ICnDkTWgsric46icAt7uZzqu6QlaQlrqrmCmVibrXj1kptsfGE1RPA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHQHsvPQV0K6afZYKTzYQjzll8ajN4hzXNlxPtUVoIicuB8UeHX1ybpdA/640?wx_fmt=png)

5.2.2 扰动补偿 

线性扩张状态观测器对系统的总和扰动进行实时估计时，使系统具有积分环节的特性，系统精度被提升的同时也避免单独积分环节带来的稳定性问题。 

采用如下控制率对扰动进行补偿：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHBzLbOxLzRc8aSXevBSwib9sh51FcP7eiaghN5deB7iboqJKsLHHtQR42A/640?wx_fmt=png)

式中uo为线性状态误差反馈率输出。将式(5-5)代入式(5-2)，在总和扰动估计准确时，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHibGsrric8dxcibjeltfFVVfFjCHqys7mn1gFp2Rt1dqlqy7MD3CibA9xcA/640?wx_fmt=png)

式(5-6)为经过扰动补偿之后重构的系统，当扰动可观测时，系统可近似看作积分串联型系统。

5.2.3 线性误差反馈控制率 

对于经过扰动补偿之后的串联积分型系统，通过简单的线性误差反馈率控制，系统即可获得满意的控制性能，因此，可以由比例微分控制器（Proportional Differential， PD）作为反馈率进行控制，如式(5-7)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHrZTSJnhnlwMNCxY0rXFBsboQRwTGskRQC0N5mAgI7VfJGQyx2hJluw/640?wx_fmt=png)

由式(5-8)所示的 LADRC闭环控制系统的传递函数可见，LESO估计出的扰动 观测量在经过扰动补偿得到积分串联型结构后，通过线性状态误差反馈率进行控制的系统，其闭环特性类似于n 阶低通滤波器，由此可以实现输出对参考输入的快速 无超调跟踪。

5.3 CLLC谐振变换器的自抗扰控制 

对于n阶系统 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHaCVn3ic1bNbsia6R7ZwA3HficLpZViaZqrbOUgDymoquCUaibMjD6AbcibPw/640?wx_fmt=png)

式中v为CLLC谐振变换器的额定输出电压标定值，Kp，Kd为控制器增益，这里CLLC 谐振变换器的PD控制器区别于一般采用v −z1的形式，因为CLLC谐振变换器区别 于一般变占空比的控制方式，它属于变频控制，CLLC谐振变换器的输出电压随着频 率升高而降低。根据式（5-11）~（5-14）得系统闭环传递函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHL4BaZ11BpTSO8fTviaC5YKwtsMLl2ah71U9XAmWQIJC6p5AobTVyS8w/640?wx_fmt=png)

设置CLLC谐振变换器全部的闭环极点为控制器带宽Wc，可得参数方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHdYfY2ctHiaoib8icicib0kMyu9ECvyb6Tvu65jUbSH2xiapXQhUWnEtUBJbQ/640?wx_fmt=png)

综上所述，在Matlab/Simulink中搭建的CLLC谐振变换器的自抗扰控制器如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH4bPZPDtThv4og6KrGIaDTecLib94PoqF1lDRE9LZYceibShCBb0Nfsnw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHDPDPUjIqI0ELBbml0uAyiaOjaIGUB2Lute6blibzHfzXmNuFLM82hoxA/640?wx_fmt=png)

5.4 对比仿真 

根据之前设计的参数在Matlab/Simulink中搭建CLLC谐振变换器模型，然后在同一模型中添加PID控制进行对比仿真对比验证，搭建的模型如图5-4所示。这里PID的控制参数分别设置为P值取633， I值取1555431， D值取0.000445。LADRC参数为bo取2e9，wo取3.9e5，wc取1.3e5。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHOSmWhpqwnRaxXXHpHIGQPsXUPg5mfFEqdC0nmhBaLZTfiaLP7wJW2wA/640?wx_fmt=png)

 图5-5为变换器由半载切换到满载时输出电压动态响应图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH2VWvnuFibMfbKYfI1bRx7f9NBejyLMaAzNDibS8s27ibP816zWVnPEwSA/640?wx_fmt=png)

变换器正向工作时，变换器由半载切换到满载，通过对比仿真，相较于PID控制策略， ADRC控制的超调量从3.3%降低至1.6%，且调节时间更短，并且采用自抗扰控制的系统谐波含量更少。验证了对于CLLC谐振变换器的自抗扰控制相比于传统的PID控制策略具有抗扰性能强，超调量小，调节时间短，输出电能质量好的优点。 

图5-6为变换器反向工作时输入电压由350V切换为300V时的电压动态响应图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHMuG1Y87wQ2dWv5MmOucFkxT3iaNSwANLIcbUFYu7ciaMv9hBBKSibRTfQ/640?wx_fmt=png)

变换器反向工作时输入电压由350V切换为300V，通过对比仿真，ADRC控制的调节时间1.269ms，PID的调节时间为8.603ms，ADRC较于PID控制策略它的 调节时间与超调量都更小，并且采用自抗扰控制的系统谐波含量更少。验证了对于CLLC谐振变换器的自抗扰控制相比于传统的PID控制策略具有抗扰性能强，超调量小，调节时间短，输出电能质量好的优点。 

5.5 本章小结  

本章分析了LADRC的特点与结构，结合CLLC谐振变换器的大致模型与特征， 设计了适用于CLLC谐振变换器的LADRC控制器，在不需对CLLC谐振变换器精确建模的情况下，建立扩张状态观测器和设计PD控制器。将LADRC控制器与PID控制器进行对比仿真。结果表明，变换器正向工作时变换器由半载切换到满载，系统超调量从3.3%降低至1.6%。变换器反向工作时输入电压350V切换为300V，调节时间从8.603ms降低至1.269ms，LADRC能够高速稳定的控制谐振变换器的输出电压，相比于PID控制具有超调量小，调节时间短，抗扰性能强，输出电能质量好的 优点，证明了CLLC谐振变换器的LADRC具有较好的控制性能。

第六章 仿真及实验结果分析 

通过Simulink仿真软件搭建双向全桥CLLC谐振变换器进行仿真，根据前面的 分析设计，分别对系统正向和反向运行进行仿真，并且通过搭建的双向全桥CLLC谐 振变换器实验样机对实验结果进行分析。  

6.1 CLLC谐振变换器仿真分析  

6.1.1  正向运行分析 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHGEg7ibILt2d9tjcgyaCut0ia8yV9tIdYhstRlAw65J7nCLRtOBlpWfXw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHicWQ734cMqer7MZENFINpIIaICrM80yNnZWAcHXkx4HzojoDwZYEoHQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHKeM4hcflx94jseGaTaddIkAyVTk10RdMWgJfVrT6eHX7hj4ARGljgw/640?wx_fmt=png)

6.1.2  反向运行分析   

1）当二次侧输入电压Vin=300V时  

此时变换器满载工作在额定工作点（fs=fr），工作频率为125kHz，输出电压Vout=350V 。波形图如图6-4所示。图6-4（a）中，副边开关管的漏源级电压先到零，开关管才导通，满足ZVS开通。图6-4（b）中，谐振电流近似为正弦波。由图 6-4（c）知副边整流二极管恰好实现ZCS关断。由图6-4（d）可知，此时输出电压 能够很好地稳定在350V，输出电流稳定在8.5A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHyVX1VibAQmxyXaYEMd8SUxODVg55RkAGqoOnAorB5R3XPbNwKibq5siag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHX0EFhWD00eYamyOWHS6yxRBe0Cl5m9aoxltV4t0UAGtb9MA6lNaPow/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHsD8o69XdAVVe9NaHFj0olZibHkmIP6yCP3uBaicz8icBuK42oercLzWdQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHaQW9fibEV2SgcYnb1hOO8Kiaok3T4VCYdXtRB7KliaJ5vhd7fRsxwB25A/640?wx_fmt=png)

6.2 CLLC谐振变换器实验结果分析 

根据参数设计及对样机的相关器件的设计与选型，样机的元件的相关型号与参数整合如表6-1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHc7KTRFS6tHudsLfgksRCFFZfg98ianp7TZakpHdNPoaulUQFQbOiaiaxA/640?wx_fmt=png)

图6-7为搭建的实验样机平台，由控制电路、功率驱动电路、直流电源、电子负载、示波器组成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHOHUrafocATDlvQJZvbItWvQelhUlDqwwvsEkAibibxetkCia2D54cxqyw/640?wx_fmt=png)

6.2.1 正向运行实验分析  

（1）变换器工作在临界模式时 

图6-8为开关管S4的VGS与VDS的实验波形。由图6-8（a）可知，当VGS高电平时， SiC MOSFET导通，此时VDS为零。当VGS为低电平时，SiC MOSFET关断，VDS等于变换器350V的输入电压。6-8（b）为其局部放大图，从图中可知当VDS降为零后，过了一段时间VGS为高电平，实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHF2ZzQHibmXE5wn6PJnx0tjW65y5Mibab0EVibWibJW3y5QDuhIzxgf05hA/640?wx_fmt=png)

图6-9为临界模式时原边谐振电流iLr1的实验波形。此时变换器工作在额定工作点，iLr1的波形近似正弦波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHZO2CzUR12VVg26rsS9lPBMWYOTc9pA9wHPqlxrEKRjekbPWhI3ial5A/640?wx_fmt=png)

图6-9临界模式时原边谐振电流波形  

Figure 6-9 Primary resonant current waveform in critical mode 

（2）变换器工作在断续模式时 

由图6-10（a）可知，当VGS为高电平时，SiC MOSFET导通，此时VDS为零。当VGS为低电平时，SiC MOSFET关断，VDS等于变换器280V的输入电压。由图6-10（b）可知当VDS降为零后，过了一段时间VGS为高电平，实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHjkha01mEWKbV8rc1gYjhdax2VcVsiazLZSlYox4Nkdo1icibtVsyLgvxw/640?wx_fmt=png)

图6-11为断续模式时原边谐振电流     的实验波形。此时fs<fr，变换器工作在欠谐振区，谐振电流波形与谐振点处的正弦波有所区别，不再类似于正弦波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHrTVuicFKUgd08icTicb9XuSFvV0Qg7Sz25XBNxOrY8T8icEMDN4cunZ6KA/640?wx_fmt=png)

（3）变换器工作在连续模式时 

由图6-12（a）可知，当VGS为高电平时，SiC MOSFET导通，此时VDS为零。当为低电平时，SiC MOSFET关断，VDS等于变换器400V的输入电压。由图6-12（b） 可知当VDS降为零后，过了一段时间VGS为高电平，实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHnrRTYLn0FDyNp1iawl3GRm5ibfgvFvCyLfWSZv001dmGV7tKqQBIUz0A/640?wx_fmt=png)

图6-13为连续模式时原边谐振电流iLr1的实验波形。此时fs>fr，此时谐振电流的波形近似三角波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHmZG5l6FRGmqCezVsXemmjW8tMLwAuLXElCTkhUFicRyhGC37J5pl0Xg/640?wx_fmt=png)

6.2.2 反向运行实验分析  

（1）变换器工作在临界模式时 

图6-14为开关管S6的VGS与VDS的实验波形。由图6-14（a）可知，当VGS为高电 平时，SiC MOSFET导通，此时VDS为零。当VGS为低电平时，SiC MOSFET关断，VDS等于变换器300V的输入电压。由图6-14（b）可知当VDS降为零后，过了一段时间VGS为高电平，实现了ZVS。 

（a）驱动信号和漏源极间的电压波形 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHx0ST5boYczPFuuRuvViaOtERAmdT7NlvPdl37fN2GJJjfsRJUfbvUZQ/640?wx_fmt=png)

图6-15为临界模式时副边谐振电流iLr2的实验波形。此时变换器工作在额定工作点，iLr2的波形近似正弦波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHl1IVkO1dnOV8vldUvoXUJ6vialrfBVg2iap3ib6o5NCx9kdPaqeWctPSg/640?wx_fmt=png)

（2）变换器工作在断续模式时 

由图6-16（a）可知，当VGS为高电平时，SiC MOSFET导通，此时VDS为零。当VGS为低电平时，SiC MOSFET关断，VDS等于变换器270V的输入电压。由图6-16（b） 可知当VDS降为零后，过了一段时间VGS为高电平，实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHkRnyI27k3hqSicM9bKTbE5F1BJpjtO1IBAftD3FWx3D1axvYXpeLY8Q/640?wx_fmt=png)

图6-17为断续模式时副边谐振电流iLr2的实验波形。此时fs<fr，变换器工作在欠谐振区域，谐振电流波形与谐振点处的正弦波有所区别，不再类似于正弦波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHcaWDIyiaFpZHzXHRE4wzzTv45FpUGHJIG5KCWp1HaYuqhjl3ZZMCLkw/640?wx_fmt=png)

（3）变换器工作在连续模式时 

由图6-18（a）可知，当VGS为高电平时，SiC MOSFET导通，此时VDS为零。当VGS为低电平时，SiC MOSFET关断， VDS等于变换器380V的输入电压。由图6-18（b） 可知当VDS降为零后，过了一段时间VGS为高电平，实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHZmaRvB2OmFEibILeCxHibFM4ujl5ic4gPANndKlkjYTTiamHlz2vkiac2Pg/640?wx_fmt=png)

图6-19为连续模式时副边谐振电流iL2的实验波形。此时fs >fr，谐振电流的波形近似三角波。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYHlCp1FueKFudlNpS4hl8UiaVgp5EibfT3AbAS1QlrhKyib4IlEicLRg5GXw/640?wx_fmt=png)

图6-20为样机分别工作在正向、反向额定工作点时，在改变负载的情况下测量得到的效率曲线。正向运行的最高效率为95.1%，反向运行的最高效率为 94.8%，因 为变压器匝比为1.16接近于1，故正、反向工作效率相差不大。综上所述，变换器在 正向和反向运行时都具有较高效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnicticUnjNBuYJREF8gm4qYH73YjGpeune5oLTTTtFUV6smyuslsThdUS3ibZJhvYVnRacPTiaibOfBpQ/640?wx_fmt=png)

6.3 本章小结 

本章主要根据之前的设计，采用Simulink仿真软件对搭建的双向全桥CLLC谐 振变换器分别进行正向与反向仿真，仿真结果验证了本文参数设计的可行性和正确性，实现软开关，满足宽范围调节电压的需求。通过搭建的实验样机对实验结果进行 分析，验证了本文参数设计的可行性和正确性，实现软开关，满足宽范围调节电压的需求，结果表明变换器正向、反向运行时的最高效率分别为95.1%与94.8%，实现软 开关，具有较好的稳态波形和较高的效率，变换器正、反向工作均能宽范围调节电压， 满足设计要求，验证了变换器分析与设计的正确性。

结论与展望

结论 

本文主要研究应用于电动汽车领域较高、较宽输入电压的双向DC/DC变换器。 设计了基于SiC MOSFET的双向全桥CLLC谐振型变换器。本文主要工作及创新总结如下： 

1\. 综述了隔离型双向DC/DC变换器的研究现状，对其分析比较，结合车载 DC/DC变换器的特点，确定了双向DC/DC变换器的拓扑。 

2\. 针对SiC MOSFET门极阈值电压低、栅极开通电压范围窄、高频工作时驱动电路会出现较大电压尖峰的情况。从SiC MOSFET开关原理、开关特性、静态特性 以及寄生参数对驱动电路的影响出发，并结合变换器拓扑的特点，设计了SiC  MOSFET驱动电路。通过实验验证驱动电路满足开关速度、开关频率、驱动电平的要求，并且桥臂互补、脉宽连续可调、具有防止桥式电路上下管同时导通的保护。  

3\. 介绍CLLC谐振变换器的工作原理，采用基波分析法建模，推导变换器的电压增益。根据软开关实现条件和k、Q等参数对谐振变换器的影响，合理设计变换器参数，满足宽范围调节电压需求。 

4\. 分析LADRC的特点与结构，然后结合CLLC谐振变换器的大致模型与特征， 设计适用于CLLC谐振变换器的LADRC控制器，在不需对CLLC谐振变换器精确建模的情况下，建立扩张状态观测器和PD控制器，并与PID 控制仿真对比。结果表明，设计的控制方法能高速稳定的控制谐振变换器的输出电压，具有超调量小、调 节时间短、抗扰性能强、输出电能质量好的优点。 

5\. 根据CLLC谐振变换器设计的参数对隔离变压器与谐振电感进行设计，完成关键器件的选型。搭建实验样机，对变换器的主要硬件电路和软件程序进行设计。 

6\. 通过Simulink仿真以及硬件实验验证，结果表明变换器最高效率可达到 95.1%，实现了软开关，具有较好的稳态波形和较高的效率。变换器正、反向工作均 能满足宽范围调节电压需求，验证了变换器分析与设计的正确性。  

展望 

本文在研究过程中，由于时间和实验条件的限制，研究内容还有许多不足之处， 有待进一步改进和完善，总结如下： 

1.本文设计了高频变压器与谐振电感等多个磁性元件，若采用磁集成技术则可以减小变换器的体积，提高功率密度。  

2\. SiC MOSFET存在导通压降较大的问题，可以考虑从软件上设计同步整流或从硬件层面上加入肖特基二极管并联解决问题。

3.对CLLC谐振变换器的自抗扰控制研究只进行到仿真阶段，只限于理论跟仿真高度，限于驱动的复杂性没有进行实验验证。

**说明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)