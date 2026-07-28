# 基于双面布局的低寄生电感SiC功率模块

原创 马浩浩, 杨 媛 SiC碳化硅MOS管及功率模块的应用 2025-10-16 11:57 广东

> 原文地址: [https://mp.weixin.qq.com/s/x7vSmPP0x1Da58UZR6IYeQ](https://mp.weixin.qq.com/s/x7vSmPP0x1Da58UZR6IYeQ)

文章来源：电工技术学报

作者：马浩浩1,2 ；杨 媛1 ；郭孙毓1 ；Santiago Cobreces2 ；李 言3,4（1. 西安理工大学自动化与信息工程学院 西安 710048 2. 阿尔卡拉大学电子工程学院 马德里 28805 3. 西安理工大学机械与精密仪器工程学院 西安 710048 4. 新疆工程学院 乌鲁木齐 830023）

摘要 ：碳化硅（SiC）功率模块的高开关速度导致其对寄生电感更加敏感，大的寄生电感使器件承受更大的电气应力，增加开关损耗。为降低模块寄生电感，该文提出一种双面布局SiC功率模块结构。该结构通过在直接覆铜陶瓷基板（DBC）上对称布置功率器件和功率端子，并利用穿孔实现三维电流流动，显著减少了空间占用和寄生电感，从而提升了模块的整体性能。此外，通过仿真和实验测试对该模块进行了系统分析，仿真结果显示，与传统二维键合线封装相比，双面布局结构将寄生电感降低了95%；实验测试进一步验证了该结构在动态特性方面的优势，与商用模块相比，该模块的电压超调减少了37%，开关损耗降低了14%。这些结果表明，双面布局结构在提高电气性能和优化开关特性方面具有显著优势。

关键词：双面布局功率模块；功率模块封装设计；低寄生电感封装；碳化硅功率模块

0\. 引言

随着全球经济的增长，碳排放量持续攀升，环境污染问题日益严峻，提升能源利用率已成为全球关注的焦点。新能源汽车凭借电驱动系统能量转换效率超过90%，远高于传统内燃机的20%～30%，正在推动汽车产业快速转型。作为电驱动系统的核心组件，功率模块的效率提升对于延长车辆续航里程和减少碳排放具有关键作用。碳化硅（Silicon Carbide, SiC）金属氧化物半导体场效应晶体管（Metal-Oxide-Semiconductor Field-Effect Tran-sistor, MOSFET）以其更低的导通电阻、更高的击穿电压以及关断时几乎无拖尾电流的特性，在降低开关损耗方面展现出了巨大的潜力。当前商用SiC MOSFET功率模块普遍采用传统引线键合封装技术，基于该技术的功率模块存在寄生电感大的缺点。但是，SiC MOSFET开关速度快，对寄生电感尤为敏感，大的寄生电感可能诱发电压过冲现象，威胁器件的安全工作区域（Safe Operation Area, SOA），并间接导致开关损耗的增加。这些问题给SiC MOSFET在新能源汽车领域的规模应用带来了新的挑战。

近年来，国内外学者及企业在SiC功率模块的低寄生电感封装技术领域取得了较大突破。现有研究主要分为两大类。一类是基于二维（Two- Dimensional, 2D）封装结构进行优化。德国英飞凌公司提出带状线设计理念，通过采用多根螺杆状端子替代传统的片状铜母排，成功地将电流等级为200A的模块寄生电感降低至8nH。德国卡尔斯鲁厄理工学院则聚焦于并联键合线数量的优化，通过增加键合线并联数量，显著地将电流等级为20A的模块功率回路寄生电感降低至6 nH，进一步提升了封装性能。美国电力电子系统研究中心的Chen Zheng博士等，则凭借其在直接覆铜陶瓷基板（Direct Bonded Copper, DBC）布局优化方面的深入研究，提出了“开关对”概念，该策略有效地缩短了功率回路路径，将电流等级为120A的模块寄生电感降至4.8nH，为SiC功率模块的高性能封装提供了重要支撑。美国阿肯色大学提出了倒装芯片封装技术（Flip-Chip-Bonded, FCB），该技术巧妙地运用金属垫块设计，成功解决了功率器件栅极与源极同侧排列的问题，实现了功率器件结构上的重新布局。该结构摒弃了传统的键合线连接，采用焊球焊接的方式实现了SiC MOSFET与DBC基板铜层的连接，进而将电流等级为81A的模块寄生电感降低至5nH。尽管该封装方法摒弃了传统键合线互联，但其设计核心仍与传统2D封装优化思路相似，主要通过缩小功率回路的物理面积来降低寄生电感。然而，这种优化虽然在降低寄生电感方面取得成效，却伴随着换流回路缩短所导致的热耦合加剧，限制了封装性能的进一步提升。

另一类研究则是基于三维（Three-Dimensional, 3D）换流结构实现低寄生电感封装。瑞士ABB公司提出采用多块DBC基板进行封装。在该结构中，巧妙地整合多块DBC基板，实现了3D换流结构，成功将电流等级为150A的模块功率回路寄生电感降低至6.3nH。美国弗吉尼亚理工大学则采用多块直接覆铝基板（Direct Bonded Aluminium, DBA）材料，通过构建3D换流回路，将电流等级为120A的模块功率回路寄生电感进一步降低，达到了5nH优异水平。而日本未来电力电子技术联合研究中心则通过定制双层陶瓷基板，利用上铜层与中间铜层构建的3D换流回路，成功地将电流等级为80A的模块寄生电感降至4.5 nH，且该陶瓷基板制造技术目前仅日本掌握。德国塞米控公司则凭借其创新的SKiN封装技术，采用多层柔性印制电路板（Printed Circuit Board, PCB）替代传统键合线，实现了电流等级为400A的模块功率回路寄生电感低至1.4nH的3D换流回路设计。此外，华中科技大学在DBC基板与PCB混合封装技术领域取得了关键性的突破。该团队通过优化换流回路布局，并利用PCB的立体结构实现3D换流路径，成功地将电流等级为120A的模块功率回路的寄生电感降低至1 nH以下，这一成就极大地提升了封装性能。值得注意的是，功率模块的寄生电感是由功率端子和功率回路中的寄生电感共同构成的。即便如此，相较于传统键合线封装框架内的优化措施，这种3D换流技术的引入无疑为功率模块寄生电感的进一步降低开辟了全新的途径。法国格勒诺布尔电气公司提出了3D芯片堆叠封装（Chip-on-Chip）方法，通过铜片垂直连接功率芯片，将电流等级为72A的模块寄生电感降低至1.5nH，为SiC功率模块的小型化与高性能化提供了新的思路。

国内外研究表明，虽然通过优化传统2D键合封装结构的电路布局和键合线数量能有效降低功率模块的寄生电感，但其降幅有限，难以满足高性能应用的需求。引入3D换流设计可以进一步降低寄生电感。然而，目前的3D换流大多通过DCB与PCB的组合实现，但PCB材料的电流承载能力成为其进一步发展的瓶颈。值得注意的是，Chip-on-Chip封装技术通过最小化换流回路面积，达到了与3D换流封装相近的寄生电感降低效果。这表明，通过进一步优化3D换流封装方式，功率模块的寄生电感有望显著降低。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHHB5JshKD88EhAWclFaNibicuDEqicJfDibKXr9sXtHy9vSFELmeskPnicvA/640?wx_fmt=jpeg)

图1 双面布局功率模块

Fig.1 Photo of the double-sided layout power module

鉴于此，本文提出了一种双面布局封装结构，如图1所示。该结构利用DBC基板的结构特点，在基板上下两侧均衡布置功率器件和互联结构，通过对称布局最大化互感效应，提升整体性能。基板开孔实现上下铜层的电气导通，构建3D换流，有效突破传统2D封装的局限，提升空间利用率。该结构相较传统方案减少了50%的基板面积，并使用螺母替代铜片作为功率端子，进一步降低寄生电感，为高性能功率模块封装设计提供了一条新的研究思路。

1\. 双面布局功率模块设计基本思想

基于上述分析，本文将重点研究优化3D换流封装方式。首先，有必要探讨3D换流实现低寄生电感的基本原理。众所周知，当变化的电流通过导体时，会产生电感效应，这是导体的固有物理属性。如图2a所示，平板A的长、宽、高分别为L、W、H，在这些尺寸固定的情况下，其电感值也是确定的。因此，在不改变导体几何尺寸的情况下，自感无法降低。传统2D键合线封装方法通过缩短导体长度来有效降低寄生电感。尽管无法消除平板A的自感，但当给平板B通电时，如图2b所示，整体回路的电感不再是平板A与平板B电感的简单相加，其总电感Ltotal可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHIh0PjeMC2WFeT2knEldCYZiapRoRiaz6todsfIH1w1UcdDLC36Xeb3bA/640?wx_fmt=png)

式中，L1与L2分别为平板A与B的自感；M21为平板B对平板A的互感；M12为平板A对平板B的互感。当平板A和B通有相同方向的电流时，M21和M12为正值；而当电流方向相反时，M21和M12为负值。这种互感特性有助于降低整体回路的电感值，这正是3D换流封装实现低寄生电感的基本原理。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsH9zOOe7GXM46uA1u3qa7G9iaW2tgcy6yP1jECMsUgIg1XMQozedxnqRA/640?wx_fmt=jpeg)

图2 铜导体

Fig.2 Copper conductor

现有的3D换流封装主要通过以下方法降低寄生电感：首先，通过优化布局来降低L1；其次，在该布局中实现3D换流设计，即引入M21，从而进一步降低寄生电感；再次，进一步减小L1会导致芯片间的热耦合加剧，因此设计中不建议继续减小L1；最后，鉴于L1减小的局限性，建议通过增大M21的数值（M21为负值）来降低整体回路的寄生电感。为验证这一策略，利用Ansys Q3D软件对图2所示的平板A和平板B进行通电测试，箭头指示为电流方向。针对不同间距d，进行了回路电感的仿真分析。仿真设置包括：平板A和B的几何尺寸均为L= W=20mm，H=0.3mm，且两平板通有方向相反的1 A电流。本文中的电感值均基于100MHz频率获得。在此条件下，L1和L2的电感值均为5.5 nH，不同距离下的M12、M21及总电感Ltotal的值如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHn2BJqsafrqbP9ZCjDuPAlGTbymFvvqz4jLVV5F8QRWbk8hbpJPm6Gw/640?wx_fmt=jpeg)

图3 相同尺寸双铜板不同间距下的互感与总电感计算

Fig.3 Calculation of mutual and total inductance of identical copper plates at different distances

从图3不难看出，随着d的增加，互感逐渐增大，导致整体回路电感上升。因此，较小的d有助于降低整体回路的寄生电感。基于这一原理，本文提出了一种新型封装方案：将功率芯片焊接于DBC基板的两侧以实现低寄生电感，双面布局示意图如图4所示。在该方案中，芯片1和芯片2代表半桥电路的上桥臂，焊接在DBC基板的上铜层；芯片3和芯片4代表下桥臂，焊接在DBC的下铜层。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHB2klhSZF50AiaqhnEYbqLvicXsE4wMicB7ehg7icAohypm2FcmgCKJUicYQ/640?wx_fmt=jpeg)

图4 双面布局示意图

Fig.4 Schematic of a double-sided layout

2\. 双面布局功率模块设计与制造

基于图4所示的芯片布局设计，本节将进一步探讨双面布局功率模块的设计。此外，还将通过Ansys Q3D有限元仿真对寄生电感性能进行分析。最后，详细介绍加工制造工艺流程和具体实施细节，以验证该结构的可行性。

2.1 芯片互联设计

在现有封装工艺中，图4所示的封装方法可通过多种芯片互联方案实现，主要包括键合式互联、压接式互联和焊接式互联。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHDjibxJricmabP8vfCeuBibLqPEoOVV2A3x78an72cniaCSALQYJKIvGWWg/640?wx_fmt=jpeg)

图5 芯片互联示意图

Fig.5 Chip interconnection schematic

键合式互联通常使用金属键合线如图5a所示进行电气连接。该方法工艺成熟且成本较低，但无法提供有效的散热路径。在本文中，芯片互联不仅需要确保电气连接，还需要为芯片提供有效的散热通道。因此，键合式互联不适用于本文的设计需求。

压接式互联通过在芯片上、下表面施加压力，利用金属垫块或弹簧组实现电气连接。这种方式不仅能够提供电气连接，还能有效散热，广泛应用于大尺寸芯片（如10mm×10mm及以上）的IGBT模块封装。例如，ABB公司StakPak模块中采用的IGBT芯片尺寸为12.6mm×12.6mm。然而，本文中使用的SiC MOSFET芯片尺寸仅为5.7mm×5.2mm，且其源极金属化划分了多个区域，进一步减少了可接触面积。因此，在这种小尺寸芯片上实现有效的压接接触存在较大挑战。

此外，压接封装通常使用低温共烧陶瓷（LTCC）材料，这种材料具有较好的热稳定性，但其高成本和复杂的封装结构增加了设计的难度。虽然压接式互联能减少由键合线引起的寄生电感，但综合考虑接触面积、成本、封装复杂性以及其对小尺寸芯片的适应性，本文未选择该互联方式。

焊接式互联通过金属垫块与焊料的结合实现电气连接，并有效提供散热通道。尽管在高温环境下焊接可能面临焊料疲劳问题，但选用高温稳定性的焊料材料可有效缓解这一问题。为确保可靠性，本文选用熔点高于200℃的焊料，以降低焊料疲劳的风险。

由于采用焊接式封装方案，本设计使用了三块DBC基板进行封装，如图5b所示。顶部和底部的DBC基板不仅提供电气连接，还为模块提供散热路径；中间层的DBC则为功率芯片提供机械支撑，并起到上、下桥臂绝缘的作用。值得注意的是，中间层DBC的上、下铜层部分区域包含AC输出电路，这些区域电路是连通的，因此对这些区域的DBC进行打孔，以实现电气导通。

2.2 功率端子设计

功率端子的电感对功率器件的电气性能至关重要。文献\[11\]指出，在商用功率模块中，功率端子的寄生电感占整体寄生电感的50%～60%。因此，降低功率端子的寄生电感对于减少功率模块的整体寄生效应具有重要意义。本文分析了英飞凌EconoDUAL和CREE 62mm封装，发现这些模块通常使用铜片作为功率端子与外部电路连接，螺母位于功率端子的下方，通过螺杆和螺母固定功率端子与外部电路的连接，从而确保电气接触的稳定性。然而，现有研究往往不将这部分寄生电感计入功率模块的寄生电感中，尽管这些电感对功率芯片的性能有显著影响。

为了减少这部分寄生电感带来的影响，研究者通常在功率端子间焊接吸收电容。然而，由于吸收电容直接焊接在DBC基板上，DBC基板通常位于高温区域，而吸收电容的高温不耐受性以及温度升高导致电容值下降的问题，可能引发电容损坏及短路，进而影响功率模块的可靠性。针对这些问题，本文提出将螺母直接焊接在DBC基板，这一改进不仅增强了与外部电路的电气连接，还有效地降低了功率端子的寄生电感。

2.3 材料选择

根据上述讨论，模块电气连接和散热路径的设计已完成。然而，在实际设计热路径时，材料选择仍然是关键因素。

首先，需要选择DBC基板的中间陶瓷层材料。目前用于功率模块的主要陶瓷材料包括氧化铝（Al2O3）、氧化铍（BeO）、氮化硅（Si3N4）和氮化铝（AlN），其热特性参数见表1。Al2O3是最常用的绝缘材料，成本最低，但其热导率仅为30W/(m·K)，对散热提出了较大挑战。BeO虽然具有最高的热导率，达到Al2O3的8倍，但其固态粉末和气态形式均有毒，因此未被考虑。Si3N4的热导率为Al2O3的2.5倍，但其材料成本较高。相比之下，AlN是一种安全材料，其热导率是Al2O3的6倍，且价格适中，同时AlN陶瓷支持打孔工艺。因此，综合考虑性能和成本，AlN在两者之间提供了最佳平衡，故在本文中选择了AlN作为陶瓷层材料。尽管分析表明，陶瓷基板厚度越小对模块寄生电感的减小效果越好，但为了满足1.2kV的绝缘要求，本文选择了0.63mm的陶瓷层厚度，同时DBC的上下铜层厚度为0.3 mm。

表1 绝缘衬底的热特性

Tab.1 The thermal characteristics of the insulating substrate

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHxxPfLH2XSax6Mppt2K8DLxaPQEia7TzWjOyHdvl040ibM9tnkaLlwNIA/640?wx_fmt=jpeg)

市面上提供了多种类型的金属垫块，其中最常见的类型见表2。在选择金属垫块时，与选择陶瓷材料不同，还需关注热膨胀系数。由于功率芯片主要依靠金属垫块进行热传导，如果热膨胀系数不匹配，可能会导致机械疲劳或失效，从而对模块的寿命构成挑战。纯铜虽具有较高的热导率，但其热膨胀系数与4H-SiC存在较大差异。虽然钼金属（Mo）的热膨胀系数相对更匹配，但其热导率较低。相比之下，铜钼铜（Copper Molybdenum Copper, CMC）材料在热膨胀系数和热导率之间实现了较好的平衡，因此在本文中选择CMC材料作为金属垫块。

表2 金属垫块的特性参数

Tab.2 The characteristic parameters of the metal posts

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHpDS7ribic6uOEdbZlY8BIiboN14XPQl5iapk0ESBHA9UFv00WQEDj2hCDA/640?wx_fmt=jpeg)

由图5b可知，与传统的单面散热模块相比，本设计在散热路径中增加了金属垫块的热阻。为应对这一挑战，选用了可在高温环境下工作的SiC器件。该器件在高达200℃的温度下，表现出优异的电气性能，如低漏电流、低导通电阻以及快速的开关速度。此外，其导通电阻RDS(on)和开关损耗对温度变化不敏感，使得该器件在高温操作下，相较于Si器件更不易发生热失控现象。鉴于110A电流等级功率模块的设计需求，本文选用中电国基南方集团有限公司生产的1200 V、115A SiC MOSFET（WM2A016120B）。设计中利用其体二极管作为半桥电路中的续流二极管。此外，考虑到SiC MOSFET的源极焊盘需与金属垫块焊接，源极焊盘进行了金属化处理（镀金）。

在芯片固定过程中，焊接仍然是最常用且成熟的方法。为了满足功率回路对高温的需求，本文优先选用熔点高于200℃的焊料。此外，鉴于模块制作过程中需要进行3次焊接，为保证焊接的可靠性，焊料的熔点温度梯度需超过40℃。基于这些考虑以及实验室现有的焊料和焊接工艺，功率芯片与DBC基板的焊接采用了烧结银工艺，而CMC金属垫块的两次焊接则使用焊料焊接。在CMC金属垫块焊接焊料的选择上，选用了熔点为260℃的Sn90Sb10和熔点为217℃的Sn96.5Ag3Cu0.5作为CMC金属垫块与其他结构的互联材料。在实际的真空回流焊过程中，Sn90Sb10的实际焊接温度为320℃，而Sn96.5Ag3Cu0.5的实际焊接温度为250℃。所有材料的选型详见表3。

表3 双面布局功率模块的材料

Tab.3 Materials for the double-sided layout power module

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsH3Hoy9uibr3qUPn3uoRR0iaAbHqRiaJcY94qhh0NahibY5q9U5Ivh813Ymg/640?wx_fmt=jpeg)

2.4 DBC基板布局设计

带电路的DBC基板如图6所示，DBC基板布局包括两种类型的开孔。第一种为贯穿孔（开孔1），需要切割上铜层、下铜层及陶瓷层，以实现DBC基板上下铜层的局部电气导通。考虑到芯片的有效载流面积为4.3mm×4.24mm，以及焊料填充的要求，该孔的尺寸设计为3mm×5mm，以确保孔洞既不过大导致填充困难，亦不过小影响载流能力。第二种为非贯穿孔（开孔2），仅需切割铜层，主要用于芯片定位。由于该区域为DBC温度最高的部分，热膨胀较为严重，因此该孔还兼具释放热应力的功能，尺寸设计为1mm×1mm。此外，为优化互感效率，DBC的上、下铜层设计尽量与陶瓷层对称。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsH04S9gUiatTblnLEXCrAFpuVyI59wV62Jibzk0nkeNlW6ytHVg2bLgm1w/640?wx_fmt=jpeg)

图6 带电路的DBC基板

Fig.6 DBC substrate with circuitry

基于图6，功率模块的整体布局已被确定，详细布局如图7所示。图7a展示了半桥功率模块的上桥臂布局，图7b展示了下桥臂布局。该布局设计充分考虑了热管理和电气性能的要求，并结合了实验室现有的加工工艺进行优化。在设计过程中，理想状态下用于散热的两块DBC基板尺寸应与中间层DBC基板相同，即24mm×27mm。然而，考虑到实际加工工艺的限制，本文选择了尺寸较小的陶瓷基板，优先保证电气性能。在此基础上，设计中的调整不仅确保了功率模块的电气连接与散热效果，同时兼顾了制造的可行性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHpw6bkhECZeeEXxwHHnuE7TSpmH6XosKpaIJc4VB7BibqHCLwV7DS71w/640?wx_fmt=jpeg)

图7 双面布局功率模块

Fig.7 The double-sided layout power module

为进一步验证该结构的电气性能，通过Ansys Q3D软件对该功率模块的寄生电感进行了仿真计算，结果如图8所示，在工作频率为100MHz时，该模块的寄生电感为0.92nH。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHft9hhpVRIPjFJZicLbUBfKfeVBjYegjqSZ2SmJq8VZMw9koORwbmsIA/640?wx_fmt=jpeg)

图8 Q3D仿真结果：双面布局功率模块寄生电感

Fig.8 Q3D simulation results: parasitic inductance of double-sided layout power module

2.5 双面布局功率模块电磁兼容

功率模块的布局不仅影响寄生电感，还会影响内部电场分布。在双面布局半桥模块中，上桥臂MOSFET的高频开关可能会对下桥臂MOSFET产生干扰，导致性能下降或误动作。因此，为确保模块运行时满足电磁兼容（Electromagnetic Compatibility, EMC）要求，有必要对内部电场进行分析。

  

在Ansys HFSS中对双面布局功率模块进行电场仿真，仿真模型如图9a所示。仿真中，对下桥臂MOSFET施加激励，计算其产生的辐射电场。在50Hz下，提取上桥臂MOSFET（AB线段）处的电场分布数据，计算结果如图9b所示。结果表明，AB线段的最大辐射电场强度为25dB（相对于1V/m参考电场强度）。上桥臂MOSFET处的最大电场强度约为17.78 V/m。鉴于电场强度限值为61 V/m，该模块符合电磁兼容要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsH7RrB6ZCtJz1xWcJcQXkcmhL1PQWTVJwVe9kfJcgxC83wneBupWXPNQ/640?wx_fmt=jpeg)

图9 Ansys HFSS中辐射场仿真

Fig.9 Radiation field simulation in Ansys HFSS

2.6 双面布局功率模块的制作

双面布局功率模块的制作工艺流程如图10所示。首先，将准备好的具有电路图案的DBC基板进行超声波清洗，以消除表面污染物，确保后续焊接效果。其次，通过钢网将烧结银均匀涂覆在DBC基板上，并利用真空烧结炉完成芯片与DBC基板表面铜的互联。然后，对该DBC基板进行清洗，并通过钢网将Sn90Sb10焊料分别涂覆在芯片的源极和DBC基板上，在真空氮气炉中完成金属垫块及功率端子的焊接。随后，再次清洗DBC基板，进行功率芯片栅源电极与陶瓷基板的键合互联。最后，向散热陶瓷基板涂覆Sn96.5Ag3Cu0.5焊料，并在真空氮气炉中完成垫块与散热陶瓷基板表面铜的互联。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHWTTFY2GNoAfY3AvPosPXpDShLibrJo3rfP624R5nKFTAgJ7Bbx6Jxjg/640?wx_fmt=jpeg)

图10 双面布局功率模块的制作工艺流程

Fig.10 Manufacturing process flow chart of double-sided layout power module

从图10所示的加工流程可以看出，该模块的制作遵循常规工艺，能够与现有的封装设备和技术兼容，从而具备支持大规模生产的潜力。图11进一步展示了双面布局功率模块的实际封装过程。图中显示，虽然整个DBC的外形尺寸为100 mm×100mm，但实际有效的工作面积为24mm×27mm。这一额外尺寸的设计是为了适应实验室的加工需求，在加工过程中提供固定支持，确保操作顺利。陶瓷基板上还设有3个贯穿孔，其中孔1和孔2用于在DC+和DC-之间焊接吸收电容（预留），孔3用于陶瓷基板正面与背面局部电气导通。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHdD5BGdm7pZAib8QNHF4to0k2Qk6ZuNPT2zSXyLI13KkLUGrN3NicY51A/640?wx_fmt=jpeg)

图11 双面布局功率模块加工流程

Fig.11 The manufacturing process of the double-sided layout power module

图11显示，顶部和底部的DBC基板上未焊接铜基板或Pin散热器作为支撑结构。由于该结构的加工工艺仍在优化中，并且本文的主要目的是验证双面布局封装结构在降低寄生电感方面的优势，因此，目前未在用于芯片互联的DBC基板上增加支撑基板。

此外，功率端子（螺母）直接焊接于DBC基板上。为避免外电路连接时螺杆与DBC基板接触引发的应力集中，后续工作计划在螺母焊接基面增设支撑基座，以降低应力集中，提高外电路连接的可靠性，并降低基板损坏的风险。

值得一提的是，该模块与商用单面散热模块相比，成本方面多了两块DBC陶瓷基板的费用，与商用双面散热模块相比多了一块DBC陶瓷基板，其总费用增加在100元以内。

3\. 双面布局功率模块实验验证

为了验证双面布局功率模块的动态性能，设计了双脉冲测试电路，并与商用模块（WCMS75B120E53）进行对比测试，该商用模块与本文提出的双面布局功率模块使用相同的SiC MOSFET功率芯片，测试原理如图12a所示。图中，Vbus和CDC分别为高压直流电源和直流母线电容。分流电阻用于测量漏极电流Id，并将模块上桥臂MOSFET的栅、源短接，使其保持关断状态。测试时，确保两个模块的外部连接完全一致，并使用相同的驱动电路板。测试平台如图12b所示。实验中，使用泰克MSO58B示波器观测波形，THDP0200探头测量栅源电压Vgs和漏源电压Vds，T&M Research 1M-1同轴电阻作为分流电阻。高压直流电源为TSLAMAN TRC202，负载电感为271μH空心电感，母线电容为1 020μF、额定电压1100V的电解电容。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHdAPn5MkSdHCpFydSnERmyicOYmibtuRA17bb8vwUraYb4sWibuFmWzJPQ/640?wx_fmt=jpeg)

图12 双脉冲测试

Fig.12 Double pulse test

3.1 功率模块寄生电感计算

在通过双脉冲测试验证功率模块动态特性时，有两种计算寄生电感的方法。第一种基于SiC MOSFET关断瞬态的电压过冲现象，通过精确测量过冲电压Vpeak并结合电流变化率，可以推导出寄生电感L，计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHspn39HzTYe3qudCmhwsrAjM3PG6MFqq3icgjtbY3J9AsG23JTtO1ib0Q/640?wx_fmt=png)

另一种方法是谐振频率分析法，基于电路中的寄生电感和寄生电容效应。在开关过程中，SiC MOSFET的Vds和Id会发生谐振。通过测量谐振频率，可以推导出寄生电感，计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHnt0PQOIblZgU5HZps3ichxibYKf19WSrmjjbooybgfHYrmlV6xh7bVdw/640?wx_fmt=png)

式中，C为功率模块的等效输出电容。在测试中，Vds通常从功率端子处采集，但测得的Vds值往往低于SiC MOSFET的瞬态峰值电压，导致对电压过冲的低估。同时，Id的变化率也难以准确测量。值得注意的是，SiC MOSFET和功率端子处的Vds振荡频率保持一致。因此，本文采用第二种方法测量功率模块的寄生电感，以提高测量精度。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHicfGmpGvd6YwJVEcWyK97I0VRTBQz9icicQc1Sxu1yYDicGNoJEtJC7p5w/640?wx_fmt=jpeg)

图13 400 V/110 A下商用模块和双面布局模块关断波形

Fig.13 Turn-off waveforms of commercial module and double-sided layout module at 400 V/110 A

图13展示了在400V/110A条件下两种功率模块的关断波形对比。商用模块的电压过冲尖峰为700V，振荡频率为17.7MHz。根据该模块的数据手册，其在400V时的输出电容为300pF，利用式（3）计算得出其总电感为269.5nH。该电感值由三部分构成：①来自CDC电容连接功率模块DC+和DC-端子的铜条；②同轴电阻连接时引入的不可避免的寄生电感；③商用模块本身的寄生电感为20nH。因此，电路连接引入的寄生电感约为249.5nH。

相比之下，双面布局功率模块的电压过冲降低至590V，减少了110V，尽管外电路引入的寄生电感比双面布局功率模块寄生电感高两个数量级，电压过冲仍减少了37%，且振荡频率为18.35MHz。经计算，其总寄生电感为250.8nH，扣除外部电路寄生电感后，双面布局功率模块的自身寄生电感为1.3nH，与仿真结果的0.92nH非常接近，进一步验证了该结构的可行性。

此外，对两个模块在不同电流等级下的开关特性进行了测量。商用功率模块与双面布局功率模块在400V下不同电流条件的开关波形对比如图14所示。在相同的开关速度下，双面布局功率模块的关断电压过冲显著低于商用模块，这表明双面布局功率模块具有较低的寄生电感。同时，对六种不同电流下的电压过冲进行分析，结果显示其平均降低了31%。

为进一步验证设计的效果，采用积分法计算功率模块的开关损耗。具体而言，开通损耗的计算时间为MOSFET开通电流达到10%至开通电压降到10%的区间，关断损耗的计算时间为MOSFET关断电压达到10%至关断电流降到10%的区间。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHkWHthKiaty4pZq2g3vKcmOia3VJoDoibQtB2zCZbictBSic3w4ibqNr9Mx4Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHQBYykVYTESiaoPyHSEwVYAnndkrqZesvW5LGREl4IWtJxzKdsz3X0BQ/640?wx_fmt=jpeg)

图14商用功率模块与双面布局功率模块在400V下不同电流条件的开关波形对比

Fig.14 Turn-on and turn-off waveforms of the commercial power module and double-sided layout power module under 400 V at different current conditions

基于上述方法，对图14所示的数据进行了详尽统计，并绘制了不同关断电流下的开通损耗、关断损耗及总损耗情况如图15所示。虽然两个模块的关断损耗差异相对较小，这主要由于外部电路连接引入的较大寄生电感，但双面布局功率模块仍展现出较低的关断损耗，进一步验证了其在减少能量损失方面的有效性。此外，对六种不同电流下的开关损耗进行了详细分析。结果显示，双面布局功率模块的关断损耗平均值为87mJ，比商用模块低3%；开通损耗平均值为124mJ，比商用模块低42%；总开关损耗平均值为154mJ，比商用模块低14%。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsH1SX05cCONFYuwkMZmJdlJjczY8ZRAcQU79cRjEgKIBqibfGesTSTNvg/640?wx_fmt=jpeg)

图15 不同关断电流下开关损耗

Fig.15 Turn-on and turn-off losses at different currents

3.2 功率模块大电流冲击测试

SiC MOSFET具有更快的开关速度和更高的功率密度，因此，大电流冲击测试在功率模块设计与评估中至关重要。本文通过短路测试实验评估模块在大电流冲击条件下的性能。短路测试主要涉及一类短路测试和二类短路测试。其中，一类短路测试是在MOSFET漏-源极之间施加Vds，然后在栅-源极之间施加驱动电压Vgs，使器件进入短路状态；二类短路测试则是先在栅-源极之间施加Vgs使MOSFET导通，然后在漏-源极之间施加Vds以触发短路。本文选用一类短路测试进行实验，以评估双面布局模块在大电流冲击条件下的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHpzIaLhnUoSS5lPBYic55WPqkRCM9QdfoGMOJ0ibRypib7AQxg77Ck5Shw/640?wx_fmt=jpeg)

图16 大电流冲击测试

Fig.16 High-current stress test

图16是双面布局功率模块在一类短路测试条件下的波形，测试条件为母线电压为500V，栅压为18V。测试结果表明，短路电流达到1.20kA，为额定电流的10.4倍，验证了该模块在大电流冲击条件下的承受能力。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHlAN9juHQVqWsVahrnicpx091G6HkR7f4FtuNXfnEicmIzLPs3AJcQe7g/640?wx_fmt=jpeg)

图17 不同母线电压下的大电流冲击测试

Fig.17 High-current stress test under different bus voltage condition

此外，针对不同母线电压条件下的大电流冲击特性进行了测试，结果如图17所示。分别在母线电压600、700、800和900V下进行实验，测得短路电流分别为1.18、1.16、1.14和1.14 kA。短路电流随母线电压的升高呈下降趋势，并在800V以上趋于稳定。这一现象可能受器件短路特性、寄生参数影响以及自发热效应的共同作用，其中，较高电压可能导致更大的功率损耗，影响短路电流的瞬态演化。此外，驱动控制板的时间精度也可能对短路电流的具体数值产生影响。实验结果进一步验证了双面布局功率模块在大电流冲击条件下的可靠性，为其在高功率应用中的稳定性提供了支持。

4\. 结论

本文提出了一种创新的双面布局SiC功率模块结构，旨在解决传统设计中存在的高寄生电感问题。通过将功率器件和功率端子对称布局在DBC基板上，并利用穿孔实现3D电流流动，此设计显著减少了空间占用和寄生电感，从而提升了模块性能。通过仿真和实验测试分析，得出以下结论：

1）相比传统的二维键合线封装，双面布局设计有效地减少了寄生电感，改善了电气性能。优化的电流路径降低了开关损耗，提高了模块的开关特性。

2）双面布局设计不仅提供了更紧凑的空间利用，其对称排列的功率器件和功率端子还显著提高了模块的电性能。

3）通过双脉冲测试，验证了双面布局模块在动态特性方面的优越表现。测试结果表明，相比商业模块，该结构在减少电压超调和提高开关特性方面具有明显优势。

本文提出的双面布局设计在降低寄生电感和提高空间利用率方面取得了较好的效果，但距离商业化应用尚有一定的差距。后续研究需进一步优化结构参数，并深入探讨加工工艺，以满足大规模制造的要求。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqv76UU9ZvicJKZhD2pgZviahDty1vtqrZmCxHY50vtC0GXxqKpLIWUibOQ/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqV3uS8ic8mibzBCazWnUXLd14icKZNS9hRN95tOzlRuP6kWVN6hic1Y7fzQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqriborF9pMVibUnEaywicZ2l3DUia5Eia1xa5IIOBKbjndxf50iakLacsvMxg/640?wx_fmt=png)