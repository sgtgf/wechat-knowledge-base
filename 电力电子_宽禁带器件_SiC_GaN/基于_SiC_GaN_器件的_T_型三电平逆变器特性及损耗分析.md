# 基于 SiC/GaN 器件的 T 型三电平逆变器特性及损耗分析


> 原文地址: [https://mp.weixin.qq.com/s/i-bD01vWaJGN5DUIJKDoWA](https://mp.weixin.qq.com/s/i-bD01vWaJGN5DUIJKDoWA)

文章来源：燕山大学-电气学院

作者：张梦园（硕士学位论文）

摘 要：传统T 型三电平逆变器由于具有较低谐波的输出电压波形和较低的器件导通损耗，相对于其他逆变器更适用于光伏发电(Photovoltaic，PV)系统。但传统T 型三电平逆变器用于PV 系统时无法满足PV 系统在高效率和高功率密度等方面的要求。针对以上问题，本文围绕宽禁带功率器件特性、T 型三电平逆变器设计优化和损耗分析展开研究。本研究的主要工作如下：

首先，本文提出一种基于SiC/GaN 器件的T 型三电平逆变器，充分利用了宽禁带器件和T 型三电平逆变器的特点，满足了电力电子装置高效率、小型化、轻量化等需求。

其次，针对厂商提供的器件参数特性不能直接用于实际工作环境的问题，本文通过双脉冲测试对功率器件进行了准确评估，搭建了双脉冲测试仿真实验，分析了各功率器件开关波形；利用MATLAB 计算出精确的器件损耗，为PLECS 损耗模型建立提供数据支持。通过参数扫描评估了功率器件在25℃和125℃的开关能量，SiC MOSFET 和GaN HEMT 具有较低开关能量，且开关能量受电流和温度变化的影响较小。

进而，针对传统T 型三电平逆变器系统损耗估算值与实际实验值差距较大，本文充分考虑寄生参数影响，针对该逆变器推导了一种完整的开关分析数学模型，通过对比分析模型与仿真的开关波形，验证了分析模型的准确性。基于该开关分析模型进行了以下研究：（1）研究了一种损耗计算方法，通过仿真和实验分析，验证了损耗模型的准确性；（2）分析了寄生参数对开关转换和损耗的影响，优化设计了一种抗扰的串接驱动电路。

最后，搭建了基于SiC/GaN 器件的T 型三电平逆变器的实验平台，实验结果验证了理论分析的正确性。

关键词：SiC 器件；GaN 器件；T 型三电平逆变器；损耗分析；效率

第 1 章 绪 论

1.1 课题研究的背景和意义

在全球致力实现“绿色复苏”的大背景下，我国立足于“碳达峰、碳中和”工作的新要求和新形势，大力发展可再生能源，加快能源绿色转型，实现经济低碳发展。2021年底，我国可再生能源的装机容量达到10.64 亿千瓦，其中光伏发电装机容量占比约30%。其中，多电平逆变器在光伏发电系统应用广泛，最近的研究从半导体损耗和滤波器两个方面对两电平和三电平逆变器拓扑进行了详细比较，三电平逆变器拓扑每个开关器件只需要在每个转换处转换直流链路电压的一半，比两电平逆变器拓扑具有更低的半导体损耗。此外，在相同开关频率下，三电平逆变器的交流输出由于其改进的谐波消除而具有较低的谐波含量，因此可以显著减小交流滤波器组件的尺寸。

在节能减排这个重要的课题中，电力电子技术在电能的发电\-存储\-分配中具有关键作用，这些功能通过变换器来实现，而变换器的功能主要依靠功率半导体器件，可见，在电力电子技术中，功率器件具有重要的作用。功率器件经历了三代的发展和演变。第一代采用的功率半导体材料是硅(Si)、锗(Ge)等，成熟的Si 器件已经占据了几十年的市场。第二代功率半导体器件采用的材料是锑化铟(InSb)、砷化镓(GaAs)等，但是这些化合物原料比较稀缺，使第二代功率器件未能被广泛利用，因此他们正在被第三代功率半导体器件替代。第三代功率半导体器件采用的是氮化镓(GaN)、碳化硅(SiC)，它们具有更高的击穿场强和禁带宽度、更低的开关损耗等优点，更适用于应用在高效率和高功率密度的场合。因此，用SiC 二极管取代逆变器内部Si二极管，可以减少反向恢复损耗，或在内部双向通道中使用宽带隙(Wide Band Gap，WBG)开关器件，以减少导通和开关损耗。

将T 型三电平逆变器外部开关Si IGBT（更高的开关损耗）替换为SiC/GaN 功率器件（更低的开关损耗），变换器综合了T 型三电平逆变器和WBG 器件的特点，具有高效、小型化和轻量化的优越性能。当然，与Si 器件相比，SiC 和GaN 功率器件在原理上的降低损耗的优势已经得到了很好的验证。在T型三电平逆变器中，器件损耗和器件间结温分布不均衡的问题，都会对逆变器的稳定运行产生严重的影响，使逆变器的工作可靠性降低。器件的损耗分布不均、结温差别过大等因素的不利影响会使逆变器的寿命缩短，甚至会限制逆变器的功率输出。逆变器的可靠性分析主要是根据逆变器的运行情况来展开的，分段线性模型是比较常用的损耗模型，它能够快速、简单地计算出系统的损耗，但是它未考虑寄生参数的影响，对于采用WBG器件的变换器来说，误差较大。在偏远地区的光伏发电系统等一些场合中，电力设备的检修是十分困难的，因此对逆变器的可靠性分析是非常重要。本课题针对基于SiC/GaN器件的T 型三电平逆变器的损耗研究工作具有深远意义。

1.2 国内外研究现状

1.2.1 GaN 器件研究现状

WBG器件是高频、高效功率器件的一项使能技术。其中，SiC 和GaN 比Si 功率器件在各方面性能更具优势，如图1-1 所示。WBG 器件的较高击穿场允许用较薄的漂移区来优化器件，可以得到具有较低导通电阻的功率器件。GaN 材料具有高迁移率，使GaN 器件具有更低的导通电阻。这可以实现即使给定很大的电流，仍具有较小的管芯尺寸，同时，还能减小输入和输出电容。较小的电容和较高的饱和速度能实现更快的开关瞬态。总而言之，WBG 半导体的材料可让功率器件的开关损耗和导通电阻比具有可比电压和电流能力的硅器件低。尽管在高温应用中SiC 材料表现已经非常优异，但GaN 的材料特性在高效高频变换器中表现更加优异。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagmfQ68icwkGJOZd0hWqCBT0bo4H0THQ5mFMBrFDe2pVOIevyOgqricTIA/640?wx_fmt=png)

由于垂直GaN 器件尚未达到商业水平，目前可用的大多数GaN 器件都是横向异质结场效应传输器，也称为高电子迁移率传输器。这些设备的额定电压通常为600-650V，尽管制造商已经生产了更高的电压等级器件。由于横向异质结构，这些器件与MOSFET 有本质区别，具有独特的特性。

常关GaN 器件用耗尽模式HFET 制成，它的共源共栅结构如图1-2 所示。共源共栅器件需要耗尽型HFET 与低电压e 型MOSFET（通常为Si）的共封装。这两个管芯以MOSFET 的输出（漏极\-源极）电压决定HFET 的输入（栅极\-源）电压的方式连接。两个器件在导通时共享相同的通道电流，而在关断时阻断电压分布在它们之间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagY4CUyYFJ8f5R36IBKneDEr3ibkPdjmek5C3sSutJC2wyic7LR3O2XKKA/640?wx_fmt=png)

这两个模具在封装内部用线键或平面结构连接。封装内的寄生电感，特别是两个模具之间的寄生电感，是影响级联器件开关性能的主要因素。另外，两者的结电容匹配程度对级联器件的开关性能也有影响。开关损耗将因高寄生电感和低电容匹配度而增加。

表1-1显示了级联GaN 器件的商业状况。尽管International Rectifier 和MicroGaN已经生产了器件样品，但是 Transphorm 仍是目前唯一大规模销售级联芯片的供应商。这三种器件的额定电压均为600V，并使用GaN-on-Si。MicroGaN 还生产了一种他们的级联二极管，而不是有源场效应晶体管。

2014 年，RFMD 开始销售其650V GaN-on-SiC 器件的工程样品，但此后已经停止了这一产品线。与GaN-on-Si 晶圆相比，使用SiC 衬底可以提高性能，但由于SiC晶圆的成本较高，这并不像 GaN-on-Si 那样普遍。

德州仪器和VisIC 也被包括在表1-1 中，但值得注意的是，他们不使用图1-2 中描述的级联电路。然而，这些器件利用相同的概念，其中耗尽型GaN 器件与封装内的其他电子器件串联以创建常关器件。这些设备和级联器件之间的关键区别是VisIC和 TI 的栅极驱动程序直接连接到GaN 器件的栅极终端，但不直接连接到源终端，而级联器件允许连接到GaN 栅极，但不允许连接到源。在任何一种情况下，门源电压由封装内的附加电子设备控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagVIItJVTcjqpMculA3Po7icH8cQqDiaEtqaWRreeU55nouQ2KZb029QwA/640?wx_fmt=png)

尽管2DEG 使横向HFET 成为本征耗尽模式，但是栅极可以被修改为正偏移阈值电压，从而形成e 模式器件。一些公司已经生产了e-GaN 器件，表1-2 列出了这些器件的选择及其目前的商业可用性。

国内GaN 功率器件起步比较晚，但是经过研究所、高校和企业的不懈努力，也有了很大的突破。例如，国内首家GaN 电子材料和器件工厂的苏州能讯高能半导体公司，它主要研究GaN 功率器件技术，为电力电子的各个领域都提供了高效的半导体服务，并成功建设了产能为年处理3 寸GaN 晶圆6000 片，2018 年又改造成4 寸GaN 5万片。GaN 具有相当严格的制作工艺，需要在高温中，选择合适的衬底培养。GaN 的制作分为垂直型GaN 和GaN 单晶，前者以自身为衬底，后者以蓝宝石和硅为衬底。辽宁百思特达半导体科技有限公司在2019 年投资了15 亿元来建设以GaN功率器件为主的基地，可以预见，GaN 功率器件具有一个光明的未来。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagl8YFebibWEPrw7zdmjeO9FuG2PWIyzeJq4dV97KoEPvm2ptb7KkOWrQ/640?wx_fmt=png)

1.2.2 SiC 器件研究现状

WBG 材料的出现为实现紧凑、更高效的功率变换器带来了明显的机会，这些变换器在更高的电压、频率和温度下工作，可以满足PV 系统在追求高效率和高功率密度等方面高日益增长的需求。

SiC 具有比Si 更宽的带隙，这使得能够进行更高的温度操作。SiC 的更高击穿场导致更高的电压阻挡能力，同时具有实用的材料厚度和合理的导通状态电压降。更高的导热率降低了热阻，从而更好地散热。

虽然对SiC 功率器件的研究可以追溯到20 世纪80 年代，但随着SiC 肖特基二极管和JFETs 的引入，商用SiC 功率器件在2001 年才开始出现，然后在2010年引入 SiC MOSFET 和双极结晶体管(Bipolar Junction Transistors，BJTs)。本文中来自CREE/Wolfspeed 的1.7kV/25A 离散SiC 肖特基二极管，1.7kV/72A 离散SiC MOSFET，1.7kV/225A SiC MOSFET模块和来自GeneSiC 的1.7kV/160A SiC BJT 模块代表了部分最高的电压/电流额定器件。

在高温器件方面，GeneSiC 公司的210℃ SiC BJTs(600V/20A)已上市。根据已发表的文献，已在实验室以及250℃ SiC 模块中测试了15kV SiC IGBTs，10kV SiC肖特基二极管和MOSFET。目前，GaN 功率器件（例如高电子迁移率晶体管）的额定电压低于650V，而SiC 功率器件的额定电压一般为650V 及以上，主要针对直流链路电压高于400V 的应用。

目前SiC 功率器件的主要供应商有CREE/Wolfspeed、Infineon、GeneSiC、STMicroelectronics、ROHM、Microsemi 等。国内的SiC MOSFET 研发起步较晚。目前，国内具有领先水平的的高压大电流SiC MOSFET 器件研发平台由中国电子科技集团公司五十五所，并实现了1.7kV/50A、1.2kV/50A、6.5kV/25A、3.3kV/30A 等器件的研制。

1.2.3 T 型三电平逆变器研究现状

传统的两电平(Two-Level，2-L)逆变器仍然主导着市场。然而，工业界和学术界都投入了大量的精力来研究和开发新的拓扑结构，以解决2-L 逆变器的问题，例如输出电压的谐波高和高开关频率下的低效率。与2-L 逆变器相比，多电平逆变器的输出电压波形的谐波较低，能够更好地比拟正弦参考。此外，使用多电平拓扑也可以实现较低的dv/dt 和电磁干扰，使得体积较大的滤波器可以被体积较小、成本较低的滤波器替代。但是，随着电平数的增加，逆变器的复杂度也在增加。本课题最终选用三电平逆变器，而三电平逆变器主要分为NPC 和T 型两大类。三电平(ThreeLevel，3-L)逆变器，例如中性点钳位(Neutral Point Clamped，NPC)逆变器、有源NPC(Active Neutral Point Clamped，ANPC)和T 型NPC 是多电平逆变器拓扑中最常用的。在各种3-L 逆变器拓扑中，最成熟的配置是NPC 逆变器，如图1-3 a)所示，自 1981 年推出以来一直在进行深入研究。这种逆变器的优势是它的半导体器件只需要承担一半的直流链路电压。虽然这降低了开关损耗，但电流必须始终流经两个半导体器件，拓扑结构遭受了更高的导通损耗和不均匀的器件损耗分布。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagyp9OPqCzH27c33s00LgsZOreFXx0wibUxIqo0lia8BibR8AwyuuzBibS3w/640?wx_fmt=png)

图1-3 b)是T型三电平逆变器，它实现了相同的频率下具有更低的谐波输出。然而，T 型拓扑结构的外部开关管必须承担完整的直流链路电压，需要使用具有更高的半导体，这意味着与相同开关频率的NPC 变换器相比，其半导体开关损耗通常更高。因此，对于任何特定的应用，开关频率的选择成为在NPC 和T 型逆变器之间选择的关键参数。从本质上讲，T 型逆变器在较低的开关频率下具有较低的半导体损耗，因为它具有更低的导通损耗，而NPC 逆变器在较高的开关频率下变得更有优势，但开关损耗也会变得更加显著。

然而，由于单个开关位置上的较高电压应力，T 型拓扑中的开关损耗高于NPC，因此需要具有较高额定电压的器件。近期多项研究探索了各种方法来最大限度地减少T 型3-L 逆变器的损耗。例如，通过优化调制来让它的损失效益与交流输出谐波含量的增加进行权衡。本文使用新兴的WBG 器件来解决T 型三电平逆变器高开关损耗的问题。在本文中，使用了SiC 和GaN 器件，其具有比常规Si 器件较少的开关能量。有几篇关于使用Si、SiC 以及混合开关开发T 型逆变器的报道。文献\[46\]介绍了一种功率密度为25kW、峰值效率为98.5%的全SiC 250kW T 型牵引逆变器，并模拟了基本周期内的半导体损耗，计算器件损耗分析和系统效率。虽然它做了详细的运行模式分析和损耗评估，但未考虑SiC 功率器件寄生参数对运行的影响而产生的损耗，并不能准确的评估系统的损耗。文献\[47\]采用的SiC/Si 混合型的T 型3-L逆变器，并使用数据表值、开关损耗测量值和校准散热片热测量值来比较T 型逆变器的损耗，但未做SiC 功率器件分析模型的准确评估，对于散热片的校准也是不准确的。文献\[48\]介绍了一种使用IGBT 的10kVA T 型变换器。文献\[49\]中报道了一种100kW单相 T 型电力电子构建块(Power Electronics Building Block，PEBB)，其中Si 和SiC模块用于构建混合开关。使用单相 PEBB 构建三相系统需要额外的电缆或母线，这会进一步使设计复杂化，并可能影响整体系统性能。文献报道了一种使用SiC T 型模块的60kW 五电平交错T 型逆变器，但市场上没有此类模块。图1-4 所示的五电平SiC T 型光伏逆变器，其中两个T 型逆变器通过电池间变压器耦合。通过交错，电感器电流纹波和磁通波动减小，从而进一步缩小了磁性元件的尺寸，也让设计变得更加复杂，对系统性能有影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMage4w65KyCw7Vibwb4WlhPfjDLFhkMvtJ7JzAnCTLKFQLqibm4TZibbcHyg/640?wx_fmt=png)

传统使用双脉冲测试(Double Pulse Test，DPT)在半桥配置中表征分立SiC 器件的开关。对于T 型模块，由于涉及额外的装置，使得换相更加复杂。此外，T 型SiC模块短路保护也是个挑战，因为SiC MOSFET 的短路耐受时间只有几微秒。保护电路需要快速响应以有效地保护设备。由于低成本和易于集成等优势，去饱和保护方案被广泛用于设备保护。尽管如此，为Si IGBT 设计的具有去饱和保护驱动电路，对于SiC MOSFET 的保护速度不够快。最近，报道了一种用于SiC MOSFET的改进的去饱和保护电路，其响应时间小于 200ns。然而，它需要定制设计的IC，不能应用于商业驱动程序。

1.3 本课题研究内容

在全球致力实现“绿色复苏”的大背景下，面对“碳达峰、碳中和”工作的新要求和新形势，可再生能源发电越来越受到关注。光伏发电作为可再生能源的重要形式，而光伏系统的性能主要受到逆变器工作特性的影响。传统T 型3-L 逆变器用于光伏发电系统的一些不足，无法满足PV 系统在高效率和高功率密度等方面更高的要求。针对以上问题，本文围绕宽禁带功率器件特性、T 型3-L 逆变器设计优化和损耗分析这几个方面展开研究。

基于上面的内容，本文的主要工作有：

(1) 针对厂商提供的器件参数特性不能直接用于实际工作环境的问题，本文对双脉冲电路的模态进行分析，搭建了双脉冲测试仿真实验，采集并分析各功率器件开关波形，利用MATLAB 计算出精确的器件损耗，为PLECS 损耗模型的建立提供数据支持。通过参数扫描，评估了功率器件在25℃和125℃的开关能量。

(2) 介绍了基于SiC/GaN 器件的T 型3-L 逆变器拓扑结构及工作原理，通过建立了Si IGBT、SiC MOSFET 和GaN HEMT 的损耗模型，在PLECS 中搭建了T 型3-L 逆变器的仿真，采集并分析了系统开关损耗和导通损耗波形，对系统损耗和温升进行了分析，并计算了系统总损耗。通过参数扫描，在不同开关频率和温度下，对比分析了采用不同功率器件的T 型3-L 拓扑纯半导体效率。

(3) 针对传统T 型3-L 逆变器开关分析模型系统损耗计算值与实际实验值差距较大，本文充分考虑器件各寄生参数的影响，提出了一个完整、准确的开关分析模型，采集并对比了分析模型与仿真开关波形。该模型覆盖了开关的整个过程，对理解功率器件的动态特性和优化功率器件开关过程中的损耗具有重要意义。在此基础上，给出了一种精确的损耗计算方法。同时，基于开关分析模型，定量分析了寄生参数对开关转换和损耗的影响，优化设计了一种抗扰的串接驱动电路。

(4) 搭建了基于SiC/GaN 器件的T 型3-L 逆变器的实验平台。主要包括了基于SiC/GaN器件的T 型3-L 逆变器的硬件和软件系统设计。在硬件设计方面，详细介绍了主电路功率器件的设计、采样电路设计、驱动电路设计、直流母线电容设计和滤波器设计。在软件设计方面，主要介绍了如何使用DSP TMS320F28335 控制芯片编写程序并控制逆变器的运行。对基于SiC/GaN 器件的T 型3-L 逆变器的实验结果进行了分析，并对第3 章仿真结果、第4 章分析模型结果和实验结果进行对比分析。

第 2 章 功率器件的开关特性分析

IGBT 因其综合了GTR 饱和压降低和MOSFET 驱动功率小的优点，在600V 以上的电力电子变换器中被广泛应用。随着宽禁带功率器件技术的不断发展，国内外高压SiC 器件和GaN 器件取得了一定的突破。对于额定功率下的T 型3-L 逆变器，特别需要保证低寄生电感。因此，对宽禁带器件的开关性能研究至关重要。研究器件的动态特性，需要根据实验环境，考虑温度、短路、栅极驱动、二极管反向恢复、开关损耗等动态参数。本研究采用测试器件性能的最常用的方法，即DPT。进而能够详细的对器件的静态特性、动态特性和开关过程进行分析和对比。

2.1 器件结构

N 沟道增强型Si IGBT、N 沟道增强型SiC MOSFET 以及GaN HEMT 的基本结构图如图2-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagJCbx588UbzAsYPgDGDCYW2OZUKAk7hbujlRCYzEKORzM77MhqGWmGQ/640?wx_fmt=png)

Si IGBT 为四层结构，比SiC MOSFET 多一层体区，由于这一层体区具有电导调制，所以IGBT 具有高电压和大电流的特性，并且压降比Si MOSFET 低得多。凡事都有利弊，这一层的载流子也对IGBT 带来了不好的影响，比如引起电流拖尾，进而使Si IGBT 无法具有较高的开关频率，同时还增加了开关损耗。

SiC MOSFET 的结构与Si MOSFET 的结构基本相同，但是SiC MOSFET 采用的碳化硅材料制成。作为第三代半导体材料，SiC 由于其宽禁带、高饱和迁移率和高热传导率被认为是下一代高压功率器件的理想材料。值得注意的是，SiC MOSFET 作为单极性器件，在反向恢复过程中不需要提取少数载流子，导致反向恢复时间快，反向恢复能量低，比Si MOSFET 具有更高的耐压能力、更快的开关速度和更低的损耗。因此，在高压大功率领域使用SiC MOSFET 具有显著的优势。

横向GaN MOSFET 结构由通过二维电子气(Two-Dimensional Electron Gas，2DEG)通道连接的源极和漏极组成，栅极电压控制沟道的导电性。GaN 增强型HEMT 具有出色的性能以及相对较高的电荷密度和迁移率。GaN 因为它的2DEG 而不同于其它晶体管。2DEG 是GaN 层和AlGaN 层之间异质界面的副产品。由于GaN HEMT 的性能，它应用于软开关和硬开关带来了许多潜在的好处。将GaN HEMT 使用在开关操作时是有益的零电压开关(Zero Voltage Switch，ZVS)技术，这是由于它与传统Si MOSFET 相比，寄生电容要小得多。随着器件电容减小，所需的对该电容进行充电和放电所需的电感也减小了，从而使变换器更加紧凑。由于I/V 重叠的持续时间比Si短得多，GaN 器件更适用于硬开关变换器。GaN 设备也不包含物理体二极管导致反向恢复损失为零。因此，GaN 器件工作在变换器硬开关中只会产生较低的开关损耗。另外，GaN 器件没有反向恢复损耗，缩小了变换器的散热尺寸。

2.2 功率器件特性分析

第三代功率器件具有耐高温、耐高压、高开关速度等优点，因此被广泛应用于各种拓扑结构中。为了更好的评估功率器件的开关动态特性，更好的设计电路参数，有必要研究第三代宽禁带器件的开关过程和开关损耗。更好地模拟功率器件的开关过程并估算其开关损耗，能够为第3 章构建PLECS 仿真的损耗模型提供准确的数据。本文提出了一种计算半桥电路中功率器件开关损耗的方法。根据电路等效模型和功率器件的工作特性，得到了开关过程中的电压和电流波形，并对功率器件损耗进行了评估。

2.2.1 双脉冲测试电路及工作原理

大多数情况下，需要通过器件厂商提供的数据表来了解器件的参数特性，但是数据表的特性参数都是基于特定环境测试来的，因此这些参数不能直接拿来使用。可以通过双脉冲测试的方法，给定两个脉冲来测试功率器件的开关特性，能够对功率器件进行相对准确的评估。通过观察功率器件的栅极波形，评估功率器件驱动板是否能为功率器件开通提供足够的驱动电流，获取功率器件在开通、关断过程的主要参数，以评估 Rgon 和 Rgoff 的选择是否合适；观察开通、关断过程是否有电压尖峰，评估实际应用是否需要吸收电路；评估二极管的反向恢复行为和安全裕量。

半导体功率器件在半桥电路中的等效模型如图 2-2 所示，其中Cds1、Cds 、Cgd 、Cgs 、 Rg 分别代表寄生电容和驱动电阻。在此等效模型中，MOSFET 的寄生电感可以忽略，由于半桥电路工作时，两个开关不会同时打开，所以上端开关管相当于二极管。iL为流过并联在S1两端的电感 L 的电流。电感L为153μH，S1的驱动电压Vdrive1为-5V，保证S1保持关断状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagicUOWzeQssKBDxduoEia5SDvaGf7SBybg9V6DjmeibQzSib09jGGH1ZtlA/640?wx_fmt=png)

功率器件在双脉冲测试电路中的开关转换过渡图如图 2-3 所示。开通和关断过程均有 3 个阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMags6VoH4RnLquuuVwnBDiaJY8B4sJicUC3POksLyiccJiaE1j8GOicK71RXxA/640?wx_fmt=png)

阶段Ⅰ：S2开通延迟。在t0时刻，驱动电压变正，vgs持续上升到阈值电压Vth ，MOSFET 开始导通，此阶段结束。在t0\-t1期间，电流开始上升，由于二极管中仍有电流流动，所以 MOSFET 上的电压保持不变。根据电路电流电压关系可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagEfcBiaRE7rOK1mo65IicMRpCrYvXc5xZic5ocSzPhE6UFy5YvbkcMgqhg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagDJeuheibn4urCntI6DMp3nMuNKQr9yqADJdLRrEFfdiaUTCDh2KuEVDA/640?wx_fmt=png)

式中，iL为电感电流，iD为二极管电流，Rg为驱动电阻，vdrive为驱动电压。

阶段Ⅱ：iD上升：在t1时刻，vgs达到阈值电压Vth之后，MOSFET 开始工作在饱和区域，电压与电流的关系有式(2-5)所示的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagI7jhuV0U5lalP4fH1iaWia4H9o8KBURATDOfCEv8xvaGPx3McUsQDGXQ/640?wx_fmt=png)

式中，ich为通道电流。

在t1-t2期间，iD持续上升，当电流上升到主电路电流值时，该阶段结束，二极管电流为 0，可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagxBrxBHlrOJ1NEFo8sveB7bfxELx5aibMIRY8HQ68YsYlDNKcvWr2hZg/640?wx_fmt=png)

阶段Ⅲ：vds下降。在t2时刻，电流已经上升到最大值，vgs只与通道电流ich有关。在t2-t3期间，ich没有变化，所以vgs没有变化，vgs处于密勒平台阶段，vds持续下降，电压开始在二极管上积聚。与上述相似，可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMaghVYFMR5SVvurXn0KPTl04AiaAqTBcWh2PvvXJ3UMM1JQjBhRj5iasXmw/640?wx_fmt=png)

当漏源极电压满足式(2-8)时，MOSFET 开始进入线性区域，这一阶段结束

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagx7XvwDP2sSjau1UhICL2pg3meMwNNTgKvXiagick11JR9ibIAQA8rgWCQ/640?wx_fmt=png)

阶段Ⅳ：vgs上升。在t3-t4期间，MOSFET 工作在线性区域，vds处于振荡阶段，S2的输入驱动电压vdrive继续给输入电容充电，vgs恢复上升，可获得式(2-7)、(2-2)、(2-3)和(2-4)。当 MOSFET 工作在线性区域时，电压与电流之间的关系可得(2-9)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagxBh699cEEoUParSq9I35HQVOib6LnCjyAWLUvbCqOGs2VFlqeIsBkRw/640?wx_fmt=png)

当MOSFET 两端电压降至MOSFET 导通电压时，即满足式(2-10)时，这一阶段结束，导通过程完成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagDSrrLOkJY5IibKsIYqJvwe8K7sVNnlXCYsicxboSzMY5Yo0yWZXIDpJA/640?wx_fmt=png)

关断过程与开断过程相似，也可分为三个阶段。此处不再详细的介绍。根据以上公式，并通过厂商提供数据表，将功率器件的寄生电容数据导入到MATLAB，利用MATLAB 计算每个时间段的持续时间，通过每个时间段的电压、电流和持续时间计算开关损耗。采用这种方法计算时，直接使用电路电流进行计算，不考虑MOSFET寄生电容吸收或释放的电流。因此，与实际值相比，开通损耗缺少寄生电容释放的能量，关断损耗更多地计算寄生电容吸收的能量。最终得到基于实际环境中的各器件的开关损耗数据，在 3.3.1 节损耗模型的构建中进行了详细的展示。

2.2.2 仿真分析

评估Si IGBT、GaN HEMT 和SiC MOSFET 的损耗分布需要量化T 型逆变器应用中这三种开关器件的导通和开关特性。对于导通损耗，使用制造商的数据表就足够了，它提供了IGBT 饱和电压、MOSFET RDS(on)和反向并联二极管的正向电压的详细性能数据。因此，为了对功率半导体器件的开关损耗进行合理的比较，本研究利用 T型逆变器对其开关能量进行了仿真实验测量。

导通损耗是由器件的电压降和流过器件的电流决定的。使用Getdata 从厂商提供的器件数据表中提取IKW15N120CS7 Si IGBT、C2M0080120D SiC MOSFET 和GS66508 GaN HEMT在不同电流和温度水平的指定正向电压图如图2-4 所示，可以用来确定这些导通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagO6HibKrCqOJTpoAHrSFNxCh2wAMAict0JdlicCRDTnVFFqPia4FFffcfYw/640?wx_fmt=png)

在逆变器大部分的工作电流范围内，GaN HEMT 和SiC MOSFET 的电压降明显小于IGBT，其中GaN HEMT 的优势更为突出，也就意味着拥有更小的导通损耗。因此，根据欧姆定律，流过器件的较小电流将导致较小的电压降。相反，IGBT 是一种具有双极性输出特性的器件。这导致更大正向电压降，特别是在低电流的条件下。

为了充分评估器件的开关特性和开关能量，使用LTspice 专业电力电子仿真软件直接测量器件的开关转换和开关电压。在200V 电压下测量Si IGBT、SiC MOSFET和 GaN HEMT 在双脉冲测试中的开关过程波形，如图2-5 所示。从图中可以清楚地看出SiC MOSFET 和GaN HEMT 在di/dt 和dv/dt 方面具有优越的开关特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagE4mDKgEHpPiawhtILbkuew9Ericzb3zAwfEItcw5YCkLOI5R6DlKeFGw/640?wx_fmt=png)

根据上述仿真结果，对Si IGBT、SiC MOSFET 和GaN HEMT 在低温和高温下的开通和关断能量评估如图2-6 所示。需要注意的是，虽然Si、SiC 和GaN 的开通能量都相对较低，但Si IGBT 仍消耗SiC MOSFET 和GaN HEMT 开通能量的两倍以上。从上述结果中，可以发现，SiC MOSFET 和GaN HEMT 具有非常低的关断能量，且在电流和温度范围内几乎是恒定的。相比之下，IGBT 具有更大的开关能量且随电流线性增加。其中GaN HEMT 的优势更突出。更值得说明的是，温度主要影响Si IGBT 的开关能量，而几乎不影响狂禁带器件的开关能量。从这些测量结果可以看出，IGBT的关断能量在3A 电流时比SiC MOFET 和GaN HEMT 高16 倍以上，在7A 电流时高20 倍以上。SiC MOSFET 和GaN HEMT 的主要优点是其非常低的关断能量。在合适的电流和温度范围内，关断能量几乎是恒定的。相比之下，IGBT 有更大的开关能量，且随着电流线性增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMag8dniaPyZ5MTcn47L5pRibQOyc1BcInxF7dvuOAzuJLvXfJpngun9eE6A/640?wx_fmt=png)

2.3 实验分析

为了得到基于实际工作环境的精确的器件开关损耗，根据仿真模型，搭建了双脉冲测试的实验平台，等效电路图见2.2.1 节的图2-2。双脉冲测试实验直流输入电压为250V。双脉冲测试实验采用DSP28335 编程发出双脉冲信号。双脉冲测试下管的驱动波形如图2-7 所示。其中，第1 个脉冲波宽度为4μs，第2 个脉冲波宽度为2μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMag4eoP12Ricfr60EpesZ0EicDl6d9uRuHPAI8erTJ1fFqnqKusnTRLDUFA/640?wx_fmt=png)

在250V 下测量SiC MOSFET 和GaN HEMT 在双脉冲测试中的开关特性波形，SiC MOSFET 漏源极电压vds和流过SiC MOSFET 的电流id双脉冲测试实验波形如图2-8 所示。GaN HEMT 漏源极电压vds和流过GaN HEMT的电流id双脉冲测试实验形如图2-9 所示。

通过图2-8 和图2-9，可以得到功率器件的开关转换实验波形。SiC MOSFET 开关转换实验波形如图2-10所示，GaN HEMT 开关转换实验波形如图 2-11 所示。结合SiC MOSFET 和 GaN HEMT 的工作特性，得到开关过程中的电压和电流波形，进而计算开关损耗。为了确保准确的损耗计算，使用示波器上的校准功能对探头通道进行电流和电压校准。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagkWnggicIEhgiaSTrTVtXbmhhEXIohdACjklELia8hIs03P8aNpia7icABlQ/640?wx_fmt=png)

在实验中得到的功率器件的开关转换波形基本一致，但实验波形的振荡尖峰略大于仿真波形，主要是由于厂商提供 LTspice 的器件仿真模型与器件的实际参数略有差距，实验中 PCB 会产生大量的寄生参数导致实验波形振荡变大。根据具体的仿真实验参数，通过 MATLAB 具体计算出器件的开关损耗，具体数据见3.3.1 节。

2.4 本章小结

本章主要介绍了器件基本结构和器件开关特性。首先介绍了Si IGBT、SiCMOSFET 和GaN HEMT 的基本结构，并进行了对比分析得出SiC 和GaN 器件具有明显的优势。其中，SiC MOSFET 更适用于在高压大功率领域，GaN 器件更适用于在硬开关中引入较低的开关损耗变换器。采用双脉冲测试仿真和实验，对功率器件的动态特性分析，研究器件的开关特性，计算出基于真实实验环境中的功率器件开关损耗，为第3 章开关损耗模型的建立提供数据支持。最终结果表明，与Si IGBT 相比，SiC MOSFET和GaN HEMT 具有较低开关能量，且开关能量受电流和温度变化的影响较小。

第 3 章 基于PLECS的T型三电平逆变器工作原理及损耗分析

本章主要分析了基于不同器件的T 型3-L 的研究现状，提出了一种基于SiC/GaN器件的 T 型3-L 逆变器拓扑，分析了其运行模式及损耗评估。与SPICE 模型相比，PLECS 提供了相对更快的模拟，因为PLECS 使用查找表来近似开关损耗，这使得它适用于电力电子变换器的系统损耗分析。在本研究中，利用PLECS 进行了损耗建模，并对运行模式及损耗进行了详细的讨论。

3.1 系统损耗分析方法

PLECS 提供了比SPICE 模型相对更快的模拟速度，因为PLECS 使用查找表来近似开关损耗，该方法适用于电力电子变换器的系统损耗分析。PLECS 器件建模主要包括开关损耗Eon/Eoff，导通损耗和热阻抗三个部分。与SPICE 器件模型不同，SPICE 器件模型确定电流和电压传输的半导体损耗，PLECS 记录每个开关操作前后半导体的工作状态，用来确定损耗有漏极电流、电压和结温，然后PLECS 使用这些参数从三维查找表中读取产生的耗散能量。

GaN system 公司基于PLECS 的系统仿真建立了基于GaN 的同步降压变换器，对PLECS 器件模型进行了验证。应用的GaN 器件为GS66508T。通过构建开关器件的热阻，计算出总损耗。最后对有源开关的结温和功率损耗进行比较，得到重载条件下，仿真结果略大于实测结果。这可以解释为测量温度应该略低于实际结温度，因为它是在封装外测量的。简而言之，基于PLECS 的器件模型相对准确，可以帮助工程师和研究人员进行变换器级仿真，可以帮助用户选择最合适的开关设备，并为其特定的基于GaN 的功率变换器设计确定并行设备的数量。

3.2 基于SiC/GaN 器件的 T 型三电平逆变器拓扑

3.2.1 T 型三电平逆变器的拓扑结构及工作原理

基于 SiC/GaN 器件的T 型3-L 逆变器拓扑结构如图 3-1 所示。C1和C2为直流侧两分压电容，可实现直流侧中点和正、负直流母线具有相同的电压降。充分利用了GaN、SiC 和T 型3\-L 拓扑的优点，T 型桥臂由半桥模块和共源模块组成。S1和S4是半桥模块的两个开关，S2和S3是共源模块的两个开关。因为GaN HEMT耐压能力比SiC MOSFET略弱，所以在共源模块中选用GaN HEMT，半桥模块选用 SiC MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagOg5EzMVsWQn4DHiaHImoX3bnF1RiaHz4icM0qWzMgeP43GsnE3bhjJbhA/640?wx_fmt=png)

基于SiC/GaN 器件的T 型3-L 逆变器的工作是通过控制开关管的通断来实现的，以逆变器的A 相为例，对逆变器的高低电平换流过程的工作原理进行介绍。其余的工作状态相似，不再过多介绍。虽然GaN HEMT 没有体二极管，但器件的对称性有助于在第三象限导电，具有二极管的行为。因此，为了便于分析，按GaN MOSFET有体二极管情况进行分析。T 型逆变器的开关状态P、O 和N 的定义见表3-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMag1Yxe55QHrSjup8y6XJf4XtyINfsOlPv2US3NuxBlmGnzJSnfD5wojg/640?wx_fmt=png)

这三种开关状态产生了三种电压等级的线电压+Vdc/2，0 和-Vdc/2。T型桥臂在一个基本周期的运行可以分为4个区间，如图3-2 所示。在本研究中，负载电流从逆变器输出端流向负载时，定义为正方向，即I0。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagniaYwaDUmzovZ1VW5MNYoML5BDjzBcC4Xd6PyW4tkdLibkdvXpI1aD2w/640?wx_fmt=png)

本研究提供了基于SiC/GaN 器件的 T 型逆变器损耗分析，为了简化分析过程，

首先假设如下：

(1) 在各个运行模式中，变换器始终工作于正常且稳定的状态；

(2) 振荡对死区时间的影响忽略；

(3) 输入电容C1和C2足够大，使中性点两侧直流电压始终能够保持稳定；

(4) 开关管为理想器件，忽略寄生参数的影响。

以图3-3 为例，第一种工作模式为 P 状态，VxM为正，负载电流从S1场效应晶体管的源极流向漏极，因此工作在反向传导模式，具有反向传导损耗(Econ−R)，虽然S2被施加了门极信号，但由于S3处于关断状态，没有电流流过共源模块。应用于S1和S3的门信号有死区时间，以避免短路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagdRlXOEzgvZ0j6VWC7yGHgiacDVribM53DXGKIPKFIIHsuBzOLMruFibfg/640?wx_fmt=png)

第二种工作模式是死区状态，其中S1和S3处于关断状态，负载电流通过S1的反并联二极管D1，在从第一个工作模式到第二个工作模式的过渡期间，负载电流从S1的MOSFET 转移到其反并联二极管。由于二极管的传导，当 MOSFET 关断时，它两端的电压为 0。因此，MOSFET 关断过程接近 ZVS，且 MOSFET 的关断损耗可以忽略不计，一旦门信号被加在S3上，电流就会逐渐从D1转换到共源模块。在这种运行模式下，D1伴随着反向恢复损耗(Err)。

第三种运行模式，即 O 状态，I0仍然为负。S3导通，S2处于反向导通模式，由于在 1 区间，开通信号总是作用于S2，所以S2无开关损耗。第三种模式，S2和S3有导通损耗，S3有开关损耗。

总结区间 1 从 P 状态到 O 状态的切换过程，半导体损耗分布在S1、S2 、S3，包括S1的反向恢复损耗(Err)和反向导通损耗(Econ-R)、S2的反向导通损耗(Econ-R)、S3的开关损耗(Esw)和导通损耗(Econ-F)。

图 3-4 总结了四个时间间隔的操作模式。前面介绍的区间 1 的过程可用于分析其他区间。需要注意的是，如图 3-4 a)所示，从 O 状态到 P 状态，由于D1的续流，S1的 MOSFET 的开通电压接近于零。类似于 ZVS 的开通过程。因此，在这种情况下，S1的开通开关损耗可以忽略不计。类似地，如图 3-4 b)所示，从 P 状态到 O 状态，当S3的 MOSFET 导通时，由于S3中反并联二极管的续流，S3的开关损耗可以忽略不计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagdcrwwfTcrZsPlYFabnFJK1kEKBlQbbAcliacKpI01bI5AGxhiaicSXXTQ/640?wx_fmt=png)

表3-2 总结了与每个开关位置相关的功率损耗，它可以提供详细的功率损耗分布，并可以指导损耗建模和变换器效率分析。传统的分析模型，在死区区间没有考虑功率器件寄生参数引起的器件振荡而引起的损耗的变化，本节对功率器件的运行模式和损耗进行了粗略的分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslI1vOibqvFiaBqhKMpKdJMagEE31r9T0y3ibrM0gDVNJTyhsKEowbIZGE9TBo1dQ71CdIJsdliac7cww/640?wx_fmt=png)

3.2.2 三电平逆变器空间矢量调制

3-L 逆变器空间矢量调制(Space Vector Modulation，SVPWM)是将三个基本的矢量合成参考矢量，使三相逆变器输出的空间电压矢量的磁链轨迹接近圆形，具体包括参考电压矢量的大扇区和小扇区位置判断、合成矢量的作用时间以及时间状态的分配。在传统SVPWM 调制中，无论小扇区的判断还是合成矢量作用时间的计算，计算时都不可避免的涉及到三角函数，无疑加重了调制复杂度，为了使调制更加简单，本文介绍一种采用非正交的60°坐标系来实现SVPWM 的调制。

(1) 坐标转换

定义60°坐标系中g轴与a轴同向且重合，g轴超前h轴 60°。故gh坐标系与αβ坐标系间的坐标关系如下式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ1mYbpFibKibY5JWgyuiaE6mtibPwrh9Akesdc9blj2IwbYfKWQz2OTbnMg/640?wx_fmt=png)

  

式中，vα是gh坐标系下a轴电压分量；vβ是gh坐标系下β轴电压分量；vg为gh坐标系下g轴电压分量；vh为gh坐标系下h轴电压分量。

在保证前后功率不变的情况下，根据式(3-2)所示的 3/2 变换公式最终可以得到由三相静止坐标系转换到 60°旋转坐标系的转换公式，如下式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJppuLTeLr07QrkrbqbLPjXNlt8pibJqAibanbOeGCpqhdzyhFvbmZ1HZw/640?wx_fmt=png)

式中，VA 、VB、VC分别为 ABC 静止三相坐标系下 ABC 三相相电压分量。

(2) 大扇区判断

按照小矢量的长度为Udc /3，将矢量图归一化后，通过在 60°坐标系下将空间电压矢量图划分得到 6 个大扇区：A~F，如图 3-5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdNRR4o0goC1G4HSzoU06exQrYuTt8btIiaFDhagv1n0DGjpAK4CicXqg/640?wx_fmt=png)

可通过表 3-3 中电压矢量Vref(Vg,V h)的vg 、vh以及Vg+Vh间的逻辑关系进行判断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJDIhbsfUCGjLzvWw1hia68ge3TwJTOHP2icdcSfy9sdp6VsUvARytkYiaQ/640?wx_fmt=png)

在判断小扇区之前，通过将其它大扇区转化到同一扇区，使程序设计更加简单。

(3) 小扇区判断

每个大扇区由四个小扇区构成，以 A 大扇区为例，如图 3-6 所示，通过表 3-4 中｜gv ｜、｜vh｜以及Vg+Vh三个变量间的逻辑关系，按照相邻三矢量原则来确定每个矢量的作用时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJMQn9dlA6b2YMjsHLnseCp3XZ2Ssyq3YteqCynvxnpMoibVr8WmXezDQ/640?wx_fmt=png)

(4) 电压基本矢量作用时间

通过上述计算，三个基本矢量已知。之后，根据伏秒积平衡理论对三个矢量的作用时间进行计算，可得到下式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJMHWq0ib7OyGfzcZv4ibnkt1Qe2LGuBbicn7q6tANNbS7libkBtdhS2Criaw/640?wx_fmt=png)

其中，V1、V2和V3表示三个基本电压矢量；Vref表示参考矢量电压；d1、d2和d3表示三个基本电压矢量的占空比。在给定的参考矢量Vref (Vg ,Vh )下，通过式(3-4)可解得 60°坐标系下各矢量占空比计算公式如下式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJFWQAoCNfIARW4qxzMoClOBCvCzlrz1b2O9UpDRpnBgiabJIrhzB6FJA/640?wx_fmt=png)

式中，v1g、v2g和v3g为gh坐标系下g轴三个基本电压分量。

求解式(3-5)可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJcGwNZp3SXB2r174Ijj6fmZNIjIEKAT3249f211l89gflicau7e9ulMA/640?wx_fmt=png)

3.3 基于PLECS 的T 型三电平逆变器的损耗分析

3.3.1 损耗模型

PLECS 设备建模主要包括开关损耗、导通损耗和热阻抗三个部分。PLECS 记录半导体在每次开关操作前后的工作状态，用于确定损耗的关键参数是漏极电流、阻断电压和结温，然后PLECS 使用这些参数从3-D 查找表中读取产生的耗散能量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ1AoUpiavNaibxcI6yPjpic7eegaw6HoCeSfibyMydueNhkZYKbhLQdFFSg/640?wx_fmt=png)

本文选取Infineon 公司的IKW15N120、Wolfspeed 公司的C2M0080120D 和GaN Systems 公司的GS66508。导通损耗可以直接从器件的对应数据表中提取，分别建立了Si IGBT、SiC MOSFET 和GaN MOSFET 的损耗模型，其中导通损耗模型如图3-7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJlCZb6ticZ8TicRY8Tk24iaZDVSsQ2j59C9dCOyYEoWXqrLv2YgVKYJ0tg/640?wx_fmt=png)

考虑到各种条件的影响，开关损耗不能直接获取到。因此，为了对功率器件的开关损耗进行合理的评估，利用第2 章进行的双脉冲测试实验中计算得到功率器件的开关损耗，进而分别构建了三种功率器件的开通损耗和关断损耗模型如图3-8 和图3-9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJm1Yic98amvXal6X3Um1o9qeRtXj1EdqibN65icia86M3Klic9jH57DW5ExQ/640?wx_fmt=png)

3.3.2 仿真分析

为了研究T 型3-L 逆变器的损耗及进行热分析，利用PLECS 中的元件库，搭建基于SVPWM 调制策略下的基于SiC/GaN 器件的T 型3-L 拓扑仿真模型，如图3-10所示。在 PLECS 仿真环境中，将热常数 TconstG 模块温度、散热板的初始温度和环境温度均设为25℃。为了通过仿真能直接提取功率器件的损耗数据，需将构建的通态特性、开通能量和关断能量模型设定在图3-10 b)的T型结构中对应的功率器件中。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ1SXwD5ZDTdVXgCSdzUFt2QX5xI30gAcErtibscI7yy1YxvTAHIDweDw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ1ibhGlPsxGjiaE6Lbic0PWPIhbc8ibYQvF8F7ibauR85saPriahdIPU9qxow/640?wx_fmt=png)

表3-5 为T 型3-L 逆变器设置的仿真参数。在仿真中，使用周期脉冲模块来确定功率器件的导通平均损耗和开关平均损耗。为了对系统进行热分析，采用散热器模块模拟等温环境，并将其温度传播到它所包围的组件。采用恒温模块设置环境初始温度。系统中功率器件产生的损耗导致散热器温度上升，同时散热器也持续与外界环境进行温度交换。当散热器温度恒定时，两者达到平衡状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9dIl6xf3xnvXXLbicwVTPbuM18icK7fckhBRTfO1wlgGPjAGAbLVHjHg/640?wx_fmt=png)

功率器件两端电压和流过电流的仿真波形如图 3-11 所示，v1和i1为S1两端的电压和流过S1的电流，v3和i3为S3两端的电压和流过S3的电流，v2和i2为S2两端的电压和流过S2的电流，v4和i4为S4两端的电压和流过S4的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJgbB3ic47od0NbdEvYiaicwYEQAqzGSOJenf5icPurlcW3icea0MuIN2EMJg/640?wx_fmt=png)

在 PLECS 仿真中，通过分析开关器件的热阻，可计算出总损耗，最后获得了功率器件的结温和功率损耗。S1、S2 、S3和S4的导通损耗和开关损耗仿真波形如图 3-12 所示，Pcon1、Pon-off1、Pavcon1和Pavon-off1为S1的导通损耗、开关损耗、平均导通损耗和平均开关损耗，Pcon2、Pon-off2、Pavcon2和Pavon-off2为S2导通损耗、开关损耗、平均导通损耗和平均开关损耗，Pcon3、Pon-off3、Pavcon3和Pavon-off3为S3的导通损耗、开关损耗、平均导通损耗和平均开关损耗，Pcon4、Pon-off4、Pavcon4和Pavon-off4为S4的导通损耗、开关损耗、平均导通损耗和平均开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJru1rNltqNoIYyFc6SWu59BzA2qHOXCL3nb0ToXYM9zrGOX5sFLr5HQ/640?wx_fmt=png)

为了评估所提出的基于SiC/GaN器件的T 型3-L 逆变器的优越性，利用PLECS将全 Si IGBT、全SiC MOSFET 和SiC/Si 混合型T 型3-L 拓扑进行仿真分析，并从温度和开关频率等多个维度进行了分析对比，逆变器工作时的纯半导体效率，如图3-13 所示。采用PLECS 仿真分析能够快速有效验证基于SiC/GaN器件的T 型3-L 逆变器的性能，避免了繁琐的公式推导和理论分析。

在PLECS 中搭建了3 种T 型3-L 拓扑，分别是:

(a) 全Si IGBT 的T 型3-L 逆变器；

(b) 基于SiC/GaN 器件的T 型3-L 逆变器；

(c) 全SiC MOSFET 的T 型3-L 逆变器。

由基于仿真的损耗模型效率图3-13 可知，基于SiC/GaN 器件的T 型3-L 拓扑效率最高，全SiC MOSFET T 型3-L 拓扑次之，并且前两者功率器件损耗受开关频率和散热器温度变化影响较小。由图3-13 可知，在基于开关频率和散热器温度两种影响因素得到的效率图中，全Si IGBT T 型3-L 逆变器效率都是最低的。并且全Si IGBT T 型3-L 逆变器的功率器件损耗受开关频率和散热器温度的变化影响很大，特别开关频率变化影响更明显，变化范围为基于SiC/GaN 器件的T 型3-L 拓扑的5 倍以上。

仿真结果证明了，将SiC MOSFET 与GaN HEMT 器件混合使用，能够充分发挥宽禁带功率器件的优势，不仅降低了系统的损耗，减小了逆变器散热器的体积，提高了系统效率和功率密度，而且环境对器件的影响很小，具有重要的工程应用价值。再次验证了本文提出的基于SiC/GaN 器件的T 型3-L 逆变器，在温度和开关频率等多个维度均具有优势，可以有效满足 PV 系统高效率和高功率密度的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJphtUia60TnX6ibFR1BrjYN0Q99NiackFxX5hoAIYia1libPdhWrichn52wlA/640?wx_fmt=png)

3.4 本章小结

本章介绍了基于SiC/GaN 器件的T 型3-L 逆变器拓扑结构及工作原理，通过建立了Si IGBT、SiC MOSFET 和GaN HEMT 的损耗模型，在PLECS 中搭建了T 型3-L 逆变器的仿真，通过采集并分析了系统开关损耗和导通损耗波形，对系统损耗和温升进行了分析，并计算了系统总损耗，为后续T 型3-L 逆变器损耗建模仿真验证提供了基础。通过参数扫描，在不同开关频率和温度下，对比分析了采用不同功率器件的T 型3-L 拓扑纯半导体效率，证实了基于SiC/GaN 器件的T 型3-L 拓扑在效率和功率密度的优越性能。

第 4 章 基于 SiC/GaN 器件的 T 型 3-L 逆变器损耗建模

SiC MOSFET 和GaN HEMT 器件内部存在各种寄生参数，而以往传统T型3-L开关分析模型未充分分析其影响。详细分析 SiC MOSFET 和 GaN HEMT 器件寄生参数在 T 型 3-L 逆变器不同工作阶段下的开关状态，有助于完善基于新型宽禁带半导体器件的 T 型 3-L 的损耗模型，实现 T 型 3-L 逆变器的精细计算，使损耗更贴近现实，正确评价三相 T 型 3-L 逆变器的系统能耗。

4.1 器件端间电容

端间电容包括功率器件内部的寄生电容。栅源电容 Cgs 的值可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ6JWjje9YX6ia0pBDsOK9oZ07W34NfLCX8IDYPuy625R1fD1YKSWHvcg/640?wx_fmt=png)

式中，Cov1、Cov2和Cg1分别是栅极和 n+掺杂区、栅极和源极以及栅极和沟道的线性电容。  

所有这些线性电容只与材料的介电常数和器件的几何排列有关。Cc是 p 基层的电压依赖性半导体电容，这导致了Cgs的非线性特性。

栅漏电容Cgd由两个串联的基本电容组成，可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJicrRL2GuJibOMY07aUngV7NZ5icRt0SsZHs2lIgZmdrnMvIcwkG9aQb5w/640?wx_fmt=png)

式中，Cg2是栅极和 n−漂移层之间的线性电容，Cgdg是 n−漂移层的非线性半导体电容。漏源电容Cds可以简化为 p 基和 n−漂移层之间的非线性 PN 结电容Cds1，可表示

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJpP8wEmuAygnu6EMqL1E4UibtTKgPPWJogRQjwtBw8CpxpfDJ4SLDVqQ/640?wx_fmt=png)

为需要注意的是，输入电容 Ciss、反向传输电容 Crss 和输出电容 Coss 通常由制造商在数据表中给出。则它们与各极间电容间的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ3yibyBkUYuSSq4t1AgqurxH8LfauVpVUA5amZHrN2DR6mJGCiczqTjRg/640?wx_fmt=png)

非线性电容Cgs 、Cgd和Cds依赖于漏源电压vds，这种关系可以在制造商数据表中不同电压vds下的C-V 曲线中显示，使用GetData 从CREE和GaN System 分别提取SiC MOSFET 和 GaN HEMT 数据手册电容曲线如图 4-1 所示。从图中可以看出，随着漏源极电压的增加，SiC MOSFET 的输入电容Ciss基本保持在 1130pF 左右不变，GaN HEMT 的输入电容Ciss基本保持在 260pF，而它们的转移电容Crss和输出电容Coss则呈现强烈的非线性特征。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJvxS5rFrdPcoUQHdsj14MoA0OZX4LKOA4lKCL9nbXyslic34ZyOBaP6w/640?wx_fmt=png)

4.2 开关分析模型的建立

以三相T 型3-L 逆变器的A 相为例，展示开关转换和分析开关损耗。由于制造工艺不同，eGaN HEMT 没有p-n 结二极管，这与SiC MOSFET 有很大的不同。为了简化分析，本研究在GaN HEMT 中使用了“体二极管”进行分析。最后，考虑寄生电感和电容，确定了图4-2 所示的等效电路，用于推导解析模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJRpvWGllnYugq0XsdBbW2X3TReUXPqTAE90VzR5fLFMfeDsNoGMwxtw/640?wx_fmt=png)

图 4-2 为基于 SiC/GaN 器件的 T 型 3-L 逆变器计及功率器件寄生电容和电感的简化等效电路图，其中，LD1、 LD2 、 LD3和LD4表示漏极电感，LG1、 LG2 、 LG3和LG4表示栅极电感，LS1、LS2 、LS3和LS4表示共源电感，Cds1、Cds2、Cds3和Cds4表示漏源电容，Cgs1、Cgs2、Cgs3和Cgs4表示栅源电容，Cgd1、Cgd2 、Cgd3和Cgd4表示栅漏电容，确定以上参数对于获得准确的开关分析模型非常重要。这些寄生电感可以从 Maxwell Q3D 模拟中提取，并且这些非线性结电容可以通过曲线拟合方法从 SiC MOSFET 和GaN HEMT 的数据表中获得。

在T 型 3-L 逆变器中，开关器件S1和S4 、S2和S3具有相似的开关过程。因此，以S1为例，分析开通和关断过程。为了简化分析模型的建立，假设：(1) 各个运行模式中，变换器始终工作于正常且稳定的状态，(2) 输入电容C1和C2足够大，使中性点两侧直流电压始终能够保持稳定。

4.2.1 开通过程的分析模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJDQLcRuy0UsyHiczMalq9RQr0KbjrEuKibaKFHE9FhRLrpAUyFaLt2picw/640?wx_fmt=png)

S1的开通过程可以分为 6 个工作模态，图 4-3 为S1在 T 型三电平逆变器中开通过程的主要工作波形图，图 4-4 为每个工作模态对应的等效电路图。根据每个模态阶段的等效电路，可以推导出分析模型的关键方程，通过对每个模态的关键方程进行求解，可以计算出所需状态变量在开通过程中的分析模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJriar0bxZoEyIjHg4GEGdDEZPMeWZLZrjLibSdc1AScrtTvmq52kuRf8w/640?wx_fmt=png)

工作模态Ⅰ \[t0≤t＜t1，如图 4-4 a)\]：S3关断延迟。S3的栅极电压VG3移动，S3的输入电容Ciss3开始放电，由图 4-4 a)推导可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ6FDJrLVIksB8SHDq0olx7tDZT893uIyD8loP1nQAqQT7aob0icibVTKQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJAHomictk3keRCa3soGVl4KMfUDtOTKgfMqJXSS1TFOQXgDGiaDOGurKw/640?wx_fmt=png)

工作模态Ⅱ \[t1≤t＜t2，如图 4-4 b)\]：S3关断期间。当Vgd3下降到Vgd3th之后，通道电流ich3由Vgd3控制如下

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJAVcXD6VvRcvIzwHmvdOY1zyxrXLGMdxAm49jsTr34x7jEDQ9B3WxnQ/640?wx_fmt=png)

在此期间，vgs3和ich3继续下降，Ia的变化率受环路电感Lloop的限制，Lloop是S1 -S4的LD和Ls之和，S3正向充电的U1电流等于IA-Ia-ich3 。由图 4-4 b)可得到关键方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9Ve36PVMEAXPDadyNhOWf3vBAmw8LrTL10oibnribiaez6WYYwKS0gQeg/640?wx_fmt=png)

S1的Coss1开始反向充电，导致环路电感Lloop和Coss之间出现轻微振荡，可推导出以下等式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJFfbYcfboyUvk0O4RXeFiannWC3vfX7VPwriaQLN38wqKrxl0goGU1Avg/640?wx_fmt=png)

当IA开始流入S1的反并联二极管时，该过程结束。

工作模态Ⅲ \[t2≤t＜t3，如图 4-4c)\]：死区持续时间。在t2时刻，S1反并联二极管开始导通。由图 4-4 c)可得到关键方程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJO5wtjtNvkIWicWMxCQAXMr7wGu8FpK1IAl1YE1BwwAzvHAZibCbDqKicw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNju8b465ibjetHQJq1rfCv6Q9rQBAq5DC6A1qV9nFxA7neQfX0cpJhg/640?wx_fmt=png)

在此过程中，S3的输入电容Ciss3继续放电，直到Vgs3降至 0， IA完全流入S1的反并联二极管。

工作模态Ⅳ \[t3≤t＜t4，如图 4-4d)\]：S1开通延迟。t3 时刻，向S1施加栅极电压VG后，栅极电流对Ciss1输入电容充电。由图 4-4d)可得到以下方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJaAlwj4aka3VoDNZcMibiaFYmdBmkibRKqrPleF4iaKBibqibE3PI71ic9nt2Q/640?wx_fmt=png)

式中，L1是LD1和LS1之和，此过程结束时，Vgs1达到阀值电压Vth1。

工作模态Ⅴ \[t4≤t＜t5，如图 4-4e)\]：S1开通期间。当Vgd1在t4时刻达到阀值电压Vth1时，S1开始导通，之后通道电流ich1由vgd1控制。由图 4-4e)可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJUDDP2NKQV6hXEf5AlUlYVem4ydgmXAGGsdwUBGvGCxWotrVvY7CpKQ/640?wx_fmt=png)

在此期间，vgs1继续上升，S1二极管上的电流逐渐转移到场效应晶体管，通道电流ich1也继续上升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9xE2ygw9F1rOSuM153KYspRba7nYMS4GH1W0rseBWJmwqBxu2lD7lQ/640?wx_fmt=png)

此过程结束时，IA完全流入场效应晶体管。

工作模态Ⅵ \[t5≤t＜t6，如图 4-4f)\]：S1开通后的振荡期间。t5时刻之后，由于S3、S4处于关断状态，S3和S4可以等效输出电容Coss3和Coss4。环路电感Lloop与Coss3和Coss4发生谐振。由于振荡频率高，导致产生了很大的高频阻尼电阻Rloop，对振荡有抑制作用，由图 4-4 f)可得到以下方程

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJz3q5lGm9wg6DNyQCyCNicyiagZZVjsVyDJJZiafwuxLgb5yRbBhbXr8bw/640?wx_fmt=png)

当振荡完全衰减时，该周期结束。

4.2.2 关断过程的分析模型

S1的关断过程可以分为六个工作模态，图4-5为S1在T型三电平逆变器中开通过程的主要工作波形图，图4-6 为每个工作模态对应的等效电路图。根据每个模态阶段的等效电路，可以推导出分析模型的关键方程，通过对每个模态的关键方程进行求解，可以计算出所需状态变量在关断过程中的分析模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJmFhjsAzMr2VwgFXIcKqZfaOaqkicftmb4vVTEibZsAaqZqW5I2zvFV8g/640?wx_fmt=png)

  

振荡完全结束时，此过程结束。

工作模态I\[t0≤t＜t1，如图 4-6a)\]：S1关断延迟周期。在t0时刻，S1的栅极电压移动，Ciss1开始放电。在这个时间阶段，S1处于完全导通状态。由图4-6 a)推导可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJtib5OWKGVdoo828rJxRX2uj993VibicKwpib1JjY87ib24qGUUOI863RKWw/640?wx_fmt=png)

当IA开始流入S1的反并联二极管时，该过程结束。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdoenJe2HmmDuCMgqj435rLzruG4FaStrTWBnMgt5Q17m797NibtibflQ/640?wx_fmt=png)

工作模态Ⅱ\[t1≤t＜t2，如图 4-6b)\]：S1关断期间。当IA开始流入S1的反并联二极管时之后，S1通道电流ich1由vgd1控制。由图 4-6 b)可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJazvP6whPHNU5fSy9xyEo08SoeabCBMbkcBwYfy0UbqtrQ1VzTIibf7Q/640?wx_fmt=png)

在此期间，vgs1继续下降，通道电流ich1也继续下降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJpibvMNibdBCUXh3J6c0WZYjrkaCBsPLu8licdQBGqPibEcy2Zmic89LF68Q/640?wx_fmt=png)

式中，L1是LD1和LS1之和，此过程结束时，IA完全流入S1的反并联二极管。

工作模态Ⅲ \[t2≤t＜t3，如图 4-6c)\]：死区持续时间。t2时刻，IA完全流入S1的反并联二极管，S1的输入电容Ciss1持续放电，由图 4-6c)推导可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxQPIzCtHFWicQUEBVpbcCibD2b7D5lzG4icpJLWl31kOBu8Nr2TCmodCQ/640?wx_fmt=png)

当栅源极电压降为 0，此过程结束。

工作模态Ⅳ \[t3≤t＜t4，如图 4-6d)\]：S3开通延迟。t3时刻向S3施加栅极电压VG3后，栅极电流对输入电容Ciss3充电。由图 4-6d)推导可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJCDILT88yOGv0zv91e9G32UDFCQaXTYOogVSvl5W6bILJGccDx14vZA/640?wx_fmt=png)

式中，L3是LD3和LS3之和，此过程结束时，vgs3达到阀值电压Vth3 。

工作模态Ⅴ \[t4≤t＜t5，如图 4-6e)\]：S3开通期间。当Vgd3在t4时刻达到阀值电压Vth3时，S3开始导通，之后通道电流ich3由Vgd3控制。等效电路如图 4-6 e)所示。这个过程类似于开通期间分析模型的第 2 阶段，只是栅极电压由 0 变为VG3。

当S3在t5时刻完全开通时，该过程结束，并满足以下等式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxqAvV2icVdeZA6wLbcTg7lzP0GhicN1JZY0CY1cWEPrcaJkQjFpFz3icg/640?wx_fmt=png)

工作模态Ⅵ \[t6≤t＜t7，如图 4-6f)\]：S3开通后的振荡。在这个阶段，S1完全关断，S3完全开通，负载电流流过S3， Lloop与Coss1发生谐振。由图 4-6f)推导可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxzBKibEGyH1pA5IqRpcG81Pla0LXjiadDymaCCwq9uCD7XOych3CjaEQ/640?wx_fmt=png)

振荡完全结束时，此过程结束。

4.2.3 仿真验证

为了验证基于SiC/GaN器件的T型3-L逆变器开关分析模型的准确性，在LTspice软件建立了T型3-L 逆变器仿真。选取的开关器件是C2M0080120D 和 GS66508，仿真分析中主要的电路参数如表 4-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJC4AkMKCqubtom70icYRicLDPepTrqyurbkm54I7cSeztwhBttiaZReUHg/640?wx_fmt=png)

根据分析模型和 LTspice 仿真得到开通和关断过程的S1漏源电压vds1和S3漏源电压vds3的波形如图4-7所示。从图中可以发现，波形的吻合度很高。开关分析模型的准确性得到了初步的验证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ3I8JglszepRsYibnAEgYxQuNTPicpsSzW0uGcDkZ1mq0hFAeWau4DDPg/640?wx_fmt=png)

4.3 基于开关分析模型的损耗分析

对分析模型简化等效电路的损耗分析如下，主要包括S1和S3的导通损耗、开关损耗。S1在开关期间，S1的导通损耗Pcon-F 、S3的导通损耗Pcon-R，可以根据以下等式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJWAlFaHuUaT4yme9PFXV9P2o28SVhvnOwVNcapyzYyaIKVicr7PUxJdA/640?wx_fmt=png)

式中，Rds(con-F)和Rds(con-R)分别是器件S1和S3的导通电阻。

根据前面描述的分析模型，在开通和关断期间，总共有两种能量消耗，一是等效高频阻尼电阻，二是开关损耗。S1的开关过程类似于ZVS，几乎没有开关损耗。因此，准确的开关计算分析，可以通过计算前面提到的这些组件在一个开关周期内消耗的平均功率来执行。由图4-5和图4-3 可知，S3开通过程重叠损耗可推导如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJYCatzWqqysCticxmtCxTKLzfwyUZIc2ibP4Wric0Pia4J8ib0LjibczmVrxw/640?wx_fmt=png)

式中， fs为开关频率，t(ich3=0)表示S3完全关断的时间。

在S1关断过程中，伴随着S3开通的过程。因此，S3关断重叠损耗可以推导如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJhsjqbwXMn0vgqej0Sr14KAHEPnbVvxZVY9mIWIibLQhj6a0nlSiaLH3g/640?wx_fmt=png)

由于 SiC MOSFET 的反向导通电压较大，因此反向导通损耗占开关损耗的很大一部分。然而，由于缺乏反向导通分析模型，传统的反向导通损耗计算方法没有考虑导通和关断期间反向导通电压的变化。根据反向导通分析模型，导通期间和关断期间的反向导通损耗可计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJYBHGzA4JrebxVfl2g9Uen1404CVJ7MQ68zHMFa6wicD8g4VrUhHq5dA/640?wx_fmt=png)

最后，基于提出的分析模型和已经描述的损耗计算方法，计算出逆变器的损失分解，如图 4-8 所示。结果表明，反向导通损耗占总功率损耗的主导地位，需要仔细优化反向导通时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJn4G19Z8OEwH9iaqM8VP4BXqro7JiaYLMMkN4FibbOJ3We12Tzomf10Luw/640?wx_fmt=png)

4.4 滤波器损耗分析

本文采用的 LC 滤波器由滤波电容和滤波电感组成，考虑到滤波电容的介质损耗角正切值很小，可以忽略滤波电容对滤波器损耗的影响。因此，LC 滤波器损耗只需计算滤波电感产生的损耗，滤波电感的损耗由铜损和铁损两部分构成。

（1）铁损

磁芯损耗是滤波电感铁损的主要部分，单位体积的磁芯的损耗 PV为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJRzC6mqgNx26zV1luyuibpBPOKAb4vkW6YicJiaZbhFDc73mdc9opVKb5g/640?wx_fmt=png)

式中， △B0.2Io表示脉动电流△Io等于 0.2 倍的Io时的磁通密度变化量，N 表示电感匝数。

因此，铁损即磁芯总损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJcfbc2IVAPBjSGTA8Nibw9pic1SuxDAPn7NDKkMBb4YJvvGCiaEP9qKUUg/640?wx_fmt=png)

式中，Ue表示磁芯体积。

（2）铜损

滤波电感的铜损是电流流过电感电阻产生的损耗。电感电流的有效值表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJN59zZZCEZVHp73BXgrAw57kZ95wKwz7pPCcSdRznCCRYtia2S1icEtCA/640?wx_fmt=png)

电感电阻为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJQEpgKIz9j7ib1z39IHHicq0KRZhxNqL7teJhqhfKnA9BMSIwWDTqQNXQ/640?wx_fmt=png)

式中，l表示电感线的长度，S表示电感线横截面积，r表示铜线电导率。

可得铜损为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJLMxvVNGvzS60YVBoO3D2Htl7iadXicDXRtLIlaicLExv0uwdSNib5SzxhQ/640?wx_fmt=png)

因此，滤波器的损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJFRDmpQ5Bjm1egenKmiakpXMiauo51ko5yvePRKATT7zJw3HGPvxSkC8A/640?wx_fmt=png)

4.5 基于开关分析模型的开关暂态分析

4.5.1 寄生参数对开关暂态的影响分析

使用所提出的分析模型来分析栅极电阻、回路电感和漏源极电容会影响开关过程，因此可以给出一些有价值的结论对驱动电路的优化设计具有重要意义，进而能够定性地提高逆变器的效率。

栅极电阻对开关暂态以及逆变器损耗分布的影响如图 4-9 所示（横坐标只代表图形具有相同时间间隔，不代表同时刻发生），可以看出栅极电阻越大，器件的开关速度越慢，导致开关重叠损耗增加。随着器件开关速度变慢，导通反向导通时间会增加，而关断反向导通时间会减少，因此，关断反向导通损耗Prev off − 减小，而开通反向导通损耗Prev on − 将增加。由于关断反向导通时间的减少，较大的栅极电阻也会增加在关断过程中的直通风险。总之，根据图 4-9 可得总损失随着栅极电阻的增加而增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJC8hLslOiaia9Y7oQ19ouWdtAu3mOlsAzZ7icV4ibZicPO0MKia3IJzYuY8mw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJwGFOcFe2E9iaS1JPRhPx57fibF58wKod6kc9pmBRkJAUYick2ibgWm5Yqg/640?wx_fmt=png)

回路电感对开关暂态以及逆变器损耗分布的影响如图4-10 所示（横坐标只代表图形具有相同时间间隔，不代表同时刻发生）。可以看出，随着回路电感的增加，在切换开关期间漏源极电压的变化率变得更慢。此外，开通反向导通时间会增加，关断反向导通时间会略减少。因此，开通反向导通损耗会增加，关断反向导通损耗会略减少。随着回路电感的增加，漏源极电压的超调量会明显增加。随着回路电感的增加，漏源极电压的下降速度将加快，而通道电流的上升速度将减慢，因此，开通重叠损耗Poverlap-on将增加。总之，总损失也会随着回路电感的增加而增加。因此，在逆变器的PCB上，电源回路的尺寸应该最小化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJhCj8HicK7vEnwqzGK9aa2RRw98GibU3rOKHHpjImHY3Y8mrNzDcb3VqQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJHAXgb9NucCkJMdReOjrzj2e22SkoaR48fLxY8h1GEz76HibJ7EF858A/640?wx_fmt=png)

漏源极电容对开关暂态以及逆变器损耗分布的影响如图4-11所示（横坐标只代表图形具有相同时间间隔，不代表同时刻发生）。从图4-11可以看出，Cds的增加主要影响死区持续时间，随着Cds的增加，Coss也会增加，储存在Coss上的能量也会增加，这会导致导通重叠损耗增加。从图4-11可以看出，随着Coss的增加，S1和S3的关断速度变慢，这将导致关断反向导通时间减少，从而导致关断反向导通损耗减少。此外，由于Lloop和Coss在这期间产生谐振，vds的振幅减小，振荡周期增加，此时由于存储在Coss中的能量增加，导致关断重叠损耗减少。总而言之，总损耗将略有增加。

基于开关分析模型，探讨了寄生参数变化对开关特性和开关损耗的影响，可以得到以下结论：

(1) 随着电源回路电感的增加，总损耗也会增加，需要优化PCB 布局；

(2) 较大的栅极电阻不仅减慢了其开关速度，增加了总损耗，而且由于关断反向导通时间的减少，还存在击穿的风险。 因此，在实际应用中，栅极电阻不宜过大；

(3) 随着漏源极电容的增加，漏源极电压的振荡幅度减小，总损耗会增加。在实践中，并联电容器用于降低振荡幅度。

  
![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJsDTPLSuQYsKcVrPnibAE6wiawKu06XiaEDF6bx3dHxyCs0JqyM5iaRouSQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ54Q1BqicanTCICxZcJ32Q28SOHbThicG71r2ru1bF0QaZ1o6g1icVSsqw/640?wx_fmt=png)

4.5.2 驱动电路优化

与Si 功率器件相比，SiC 功率器件具有明显的性能优势。尽管近年来SiC 器件制造发展迅速，但现有商用SiC MOSFET 的最大额定电压仍仅为1.7kV。在一些高电压应用中，需要采用串联的SiC MOSFET 来提高SiC MOSFET 的额定电压。SiC MOSFET 的快速开断速度降低了开关损耗，但也使串联SiC MOSFET 的动态电压不平衡问题更加严重。为了解决这一问题，本文采用了一种抗扰的串接 SiC MOSFET栅极驱动电路。SiC MOSFET 抗扰驱动电路利用两被动触发晶体管串联电容结构，并且电路无需额外设计控制器，实现了完全依赖无源元件的被动触发进行串扰抑制作用。SiC MOSFET 抗扰驱动电路如图4-12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJB7o2u53v27yM5CU3aGVHrKbjmImOIvdWmuo6IDfc5CgN5t3v4uwx8Q/640?wx_fmt=png)

抗扰驱动电路是在传统驱动电路的基础上增加三极管串联电容结构和 RC 并联分压电路。反向钳位肖特基二极管D1串联在Q2的发射极，保证了驱动电源Vg在给功率器件的栅源极电容Cgs充电时，避免了电容C2接入驱动电路的工作回路中产生额外的功率损耗和容性负载的干扰。在Q2的基极和Q1的发射极之间串联驱动电阻R3，串扰现象产生的误触发的电流在R3两端产生的电势差，可以保证两个三极管的正常触发。另外，电容C1和电阻R2 、R3的并联分压结构，会产生关断负电压，降低了对驱动芯片的要求。Q1和C3的串联结构，保证了C1达到稳定负压之前，驱动电路对串扰仍有抑制作用。基于上节寄生参数对开关暂态影响分析，优化了驱动电路的参数。

4.5.3 仿真分析

使用 LTSpice 软件搭建了带抗扰驱动电路的双脉冲电路平台，如图4-13所示。其中，电路关键参数如表4-1所示。开关器件使用的是 C2M0080120D。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ6yy0mf9MODmicWHd01FCX27d23f9uc7n53cSW60fOVNmk5RM7qMH1qw/640?wx_fmt=png)

图4-14 展示了带抗扰驱动电路的漏源极电压和传统驱动路的漏源极电压仿真波形。从图中可以看出，抗扰驱动电路减小了功率器件开通过程中的振荡幅值约 9V 左右，同时，降低了振荡周期和提高了功率器件的开关速度。证实了抗扰驱动电路对误触发振荡的抑制效果，良好的驱动电路设计，可以降低功率器件的开关损耗，对整个系统的效率也具有提升作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJYsw94uCTQNia0ZEiaBLgMhVSkAOc8kpqwZh48U3xemuQ4qs2kXcpT28A/640?wx_fmt=png)

4.6 本章小结

针对传统T 型3-L 逆变器开关分析模型系统损耗计算值与实际实验值差距较大，本文充分考虑器件各寄生参数的影响，提出了一个完整、准确的开关分析模型，采集并对比了分析模型与仿真开关波形。该模型覆盖了开关的整个过程，对理解功率器件的动态特性和优化功率器件开关过程中的损耗具有重要意义。在此基础上，给出了一种精确的损耗计算方法。同时，基于开关分析模型，定量分析了寄生参数对开关转换和损耗的影响，优化设计了一种抗扰的串接驱动电路。

第 5 章 T 型三电平逆变器设计及实验分析

前面章节分析了功率器件的开关特性和基于SiC/GaN 器件的T 型3-L 逆变器的开关分析模型等。本章搭建了双脉冲测试电路和基于SiC/GaN 器件的T 型3-L 逆变器的实验平台。本章主要对基于SiC/GaN 器件的T 型3-L 逆变器的软件系统和硬件系统两方面设计，包括主电路开关管选择、驱动电路设计、采样电路设计、滤波器设计和控制电路设计。

5.1 主电路硬件参数设计

本文选取的基于SiC/GaN 器件的T型3-L 逆变器主电路结构拓扑如图5-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJIKj51tD34N7WBMFc8fGlJdoLREYNqDjkFRjuvsssicBG4Bqjwkk0icNw/640?wx_fmt=png)

5.1.1 主电路开关管的选型

功率开关管的优良对实验平台的整体性能具有直接的影响。由第三章对T 型3-L 逆变器工作原理分析，可知半桥模块的功率器件的最大关断电压Udc，共源模块的功率器件的最大关断电压为Udc/2。

为保证实验安全性和系统的稳定性，开关管的选型需留一定裕度。一般要求MOSFET的工作电流不超过额定电流的1/2~2/3 倍，工作电压不超过额定电压的1/2-3/5倍，结温不超过150℃。由于考虑到T 型3-L 逆变器实际应用大功率环境下，但实验验证并未做到对应的功率，器件选择是仍按实际实际应用环境考虑的。当直流侧电压为800V，半桥模块的MOSFET 承受800V 的电压，共源模块的MOSFET 承受400V 电压。若假定逆变器输出功率为10kW，可得功率因数为0.91 和工作电流为13.5A。通过前面的分析，本文选择了额定电压为1200V 和额定电流为36A,型号为C2M0080120D的SiC MOSFET 用于半桥模块；额定电压为650V 和额定电流为30A，型号为GS66508T 的GaN MOSFET 用于共源模块。综上可得，所选用的MOSFET 符合系统稳定和实验安全的要求。

5.1.2 驱动电路设计

本文SiC MOSFET 的驱动电路采用的是infineon 的驱动芯片1ED020I12-B2。可得到SiC MOSFET 驱动电路图，如图5-2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJgBdZTLibZ3ThPM0JfqmLd9QnNyuia7hjRZYI9CIl2UuoIzjaI4SXTGZg/640?wx_fmt=png)

本文GaN HEMT 的驱动电路选用ANALOG DEVICES 公司的驱动芯片ADuM4121ARIZ。对于GaN HEMT 的驱动电路是根据GaN system 提供的参考电路进行设计的，驱动电路如图5-3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdIr1iaKh0lclyNAE6jxiay9KzSokTBu0zTu3icCGzHxgCWXGaPGc0ibibPw/640?wx_fmt=png)

在第四章中，基于系统模型分析了寄生参数对系统的影响，可知驱动电阻的设计是非常有必要的。较大的栅极电阻不仅减慢了其开关速度，增加了总损耗，而且由于关断反向导通时间的减少，还存在击穿的风险。因此，在实际应用中，栅极电阻不宜过大。

5.1.3 采样电路设计

在采样环节对三相电压和电流、两个分压电容电位的采样值对计算结果至关重要，直接影响到控制系统的精准性。

1.电流检测电路

由于TMS320F2812 的模数转换模块只能处理0~3.3V 的模拟电压信号，但在实验中需要对交流电压、电流，直流电压、电流信号采样。因此必须将检测到的信号送入DSP 之前处理成可接受的电压电流范围。本文设计的电流采样电路如图5-4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJPPabnia6V6UAyjOuAXrJUicFrTtMeAEBvPbChMoBU1dSrVWibrOIor6DA/640?wx_fmt=png)

电路主要包括电压跟随环节、求和环节、反相环节以及输出限幅环节四部分。其中采样电路使用的霍尔电流传感器为森社公司设计的LA-50P，其原理采用了霍尔磁补偿理论，可以实现交流信号与直流信号的隔离测量。

令导线通过电霍尔m 匝，经过采样电阻Rm\= 200Ω，转化为电压信号，采样系数表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJaeawBeA9IibnRdAB2ibUWftpFweVpQxNiciaUEyrDgicyJwy3lBQoLSyxIA/640?wx_fmt=png)

2.电压检测电路

电压采样实现原理如图5-5 所示，电路结构与电流采样基本一致，在工作时首先将霍尔采样得到的电压值转换为电流值，以后的工作原理就与电流采样基本相似。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJbxtZmcNtooInh8aYdtt7iamduBgF8bEXbMzThdM5BFic2rjO5QURx8Rg/640?wx_fmt=png)

霍尔电压传感器的型号为CHV-25P，采样电压和输出电压的关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJQbk7bj3gCjSRIK6C7xqt65csRdicrZibXLhjnjfPICrQuLneJ8rj3MvA/640?wx_fmt=png)

  

为了使传感器有较高的测量精度，可以通过合理选择串联在传感器原边回路电阻Ru的阻值，使 CHV-25P 霍尔电压传感器的原边输入电流为 10mA。

由于采样电路中涉及+15V、-15V、+5V、-5V、+3.3V、+1.5 等多种电平，采样电路中集成了电平转换模块以减少辅助电源的的数量。直流电通过 MC7805ADC 和MC7905ADC 芯片进行电平转换如图 5-6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJrtxibDicjz9kF9swkBpIEcCDLQe7whnSzMMFjq6QwsPYrESTE4XOrbmA/640?wx_fmt=png)

5.1.4 直流母线电容设计

直流电容的体积通常占整个逆变系统体积的很大一部分。因此，设计和选择合适的直流电容对逆变器的体积功率密度至关重要。本文考虑了两个重要因素，即最小电容和均方根电流额定值。三相T 型3-L 逆变器中直流链路的最小电容可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJrC8eJOSfBVtOdCicEs8yuk2BgicM6wuoUQRlTVcch18FgYsVqAwkWdmw/640?wx_fmt=png)

式中，△PMax是逆变器的最大功率变化，TD是电压控制回路的响应时间（开关周期的5~10 倍），△Vdc是最大允许电压波动。在本文中，△PMax设置为满功率的 30%，△Vdc设置为直流母线电压的 15%。因此，最小直流链路电容为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJmiaVHGMQibrkshrCzS6tOpv5M71ryHQ0w6kqnWK4fUPLH4hMxnnJ1Daw/640?wx_fmt=png)

基于系统稳定性和实验安全性的考虑，直流母线电容的选取需留一定的裕度，最终选取直流母线电容值为330μF。

5.1.5 滤波器设计

基于SVPWM 调制的逆变器谐波的产生主要是由开关器件产生的高次谐波和非线性负载形成低次谐波构成。LC 型逆变滤波器设计的主要目的，就是要抑制系统输出电压中包含的大于截止频率的大多数谐波，因此设计滤波器的截止频率非常重要。图5-7 为LC 滤波器的等效电路图。其传递函数表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ7o8P9RibBPV4eOlCPx1lZqZFXxRjFyeiaEya03YMFWcCVrr9lHykuE7w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJj1L7HG0pFGX9FJog19jKGsuWsF6K26UTibVbNj5R82adO1rqEZKLEsg/640?wx_fmt=png)

滤波器设计的波特图如图 5-8 所示，从图中可得出LC型滤波器的滤波效果主要是由截止频率和阻尼比决定的。LC 滤波器的截止频率fc的代数关系式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ3fICdVfzwZl0B3eFPu2RTRhYtib6oruL5gGHFQHamfQhJoZWREZFib9w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJqReK7ft9hvsDKfzInjJELWDXVzBsvSXgmkibETy5cP9mSj94rSxrYTA/640?wx_fmt=png)

LC型滤波器截止频率的具体要求，当截止频率不大于0.1倍的PWM 载波频率和不小于基波频率的10倍时，滤波达到较好效果。当实验选择开关频率为10kHz 及基波频率为50Hz 时，fc 应当满足的范围是500Hz<fc<2000Hz，取fc\=1000Hz。在工程计算时电感基波电压降落要小于3%~5%的逆变器的输出电压；谐波电流不大于逆变器电流容量的10%~20%。其电感压降的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJNNmXEQL7wfsTejkTBCpLVtFqFOB4qrNWP9NwiaZ7ue5qY4XDCMO33BQ/640?wx_fmt=png)

式中，L 为电感值，Io为逆变器输出相电流有效值，φ表示为逆变器功率因数角。

电容基波电流表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9REBnEDsb8vGt8HXcx1JGw0IrHuDu02zuZib60kqhKaqLGVXicCNtkeA/640?wx_fmt=png)

式中，C 表示电容值，U0表示逆变器输出电压的有效值。

电感和电容的计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJvaBOGt7ricCZwy2mSEn8xWSE8NbicammMibeQJdGNDX1tyibWKFaknWhsg/640?wx_fmt=png)

式中，ωc为截止角频率。

考虑到系统稳定性和实验安全性，经计算得到的结果需考虑一定的安全裕度，最终选取滤波器的滤波电感为 10μF，滤波电容为 2mH。

5.2 控制电路软件设计

本文使用的 DSP 型号为 TMS320F28335 数字处理器，其最高时钟工作频率可达到150MHz，是32位高性能的处理器。F28335 控制芯片的外设 EVA/EVB，而 F28335控制芯片为PWM 外设，一共7组，每组有两路 PWM，为 PWMxB 和 PWMxA，每组一共有7个单元：计数比较模块 CC、时基模块 TB、动作模块 AQ、时间触发模块ET、死区产生模块 PC、错误联防模块TZ。除 ePWM 发生模块以外，F28335 控制芯片还包括A/D转换模块。12位的模数转换器，总共有16个模拟输入通道，包括采样保持器和模数转换器。模数转换通道是由硬件自动控制切换数据的，并将转换结果顺序存入对应的结果寄存器中。F28335 的中断采用三级中断机制，分别为 CPU 级中断、外设级中断和 PIE 级中断，本研究程序采用PIE级的PWM1中断，其对应的使能位 PIEIER3,1 和中断标志位 PIEIFR3。

编程前必须要进行初始化，初始化通常包括变量初始化和模块初始化。本课题涉及的模块初始化主要包括：I/O 初始化，CPU 配置初始化，PIE 初始化，ADC 模块初始化及事件管理器的初始化等。

在开环程序中，逆变器 SVPWM 控制的输入是通过编写正弦表在DSP 程序中形成的三路正弦波得到的，之后将其变换到gh 坐标系下，再通过大小扇区的判断和计算后得到的12路 SVPWM 驱动信号来实现对12 个MOSFET 管的驱动，所以开环调制的实现过程如图 5-9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJyVibvCD0OPsvJ4KDdC8orVAvf5Wjh7cia1VBBrnlicSTPPG1ty9yl0wEQ/640?wx_fmt=png)

  

为了使闭环控制得到实现，AD 采样是必不可少的，需在ADC 模块中设置采样周期、主上电顺序、ADC 时钟、通道和采样方式等等。然后由采样电路取样实时的系统电压值和电流值，经过相应处理之后，最终产生PWM信号。则闭环控制程序的流程图如5-10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJTbvtFoKQuxjk5XTRYA24qvmfic1x3aozVBb3ettap6KUibglr8H6NSicQ/640?wx_fmt=png)

5.3 实验分析

在前面章节中，对基于SiC/GaN 器件的T 型3-L 逆变器工作原理和损耗分析进行了研究。为了验证系统损耗建模的分析方法及拓扑的可行性，进行仿真和实验的验证。双脉冲测试实验结果已在第2.3 节进行详细的分析，并将实验损耗数据应用到了第3.3 节，本章不再进行介绍。T 型3-L 逆变器实验平台如图5-11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJtzoPNT6GA8Dmfc5EG1DYC8jnR7PDia039xx5hehj0wVBZJnaKmNLxwA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJVFm40v55Z2ruFoAS1k3AZVzX6O3h9YlJHrek3c5Os3928UzibtHqIfA/640?wx_fmt=png)

图 5-12 给出了 A 相驱动电路的实验波形。其中，S1的驱动波形与S4互补，S2的驱动波形与S3互补。B相和C 相的驱动波形类似。S1和S4驱动电压为 20V，S2和S3的驱动电压为6V。为了防止桥臂直通短路，设置了死区时间为1.2μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJfibe7YD3FCuSn0Ql2ueK8ibicaUaG8jcIWPS7yhRNoe6ooZMibGrBvTBbg/640?wx_fmt=png)

直流电压为 100V 时，逆变器输入侧直流电压Vin和输入电流I1的实验波形如图5-13 所示，根据直流侧输入电压和电流，可以计算得到逆变器输入实际功率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJP8QYwFQoJdtfX4QUicXPQhnImXVUJv6quuWkibEYAe23fHlWholMfn6g/640?wx_fmt=png)

图5-14 显示了当直流母线电压为100V 逆变器滤波前相电压和线电压实验波形。其中，CH1 为逆变器未滤波的输出线电压典型3-L 实验波形，CH2 为T 型3-L 逆变器的输出相电压实验波形。相电压波形以直流侧中点为基点，由实验波形可知逆变器每相输出相电压的电压幅值有三种，分别为+50V、0V 和\-50V，从而使逆变器输出3-L 的功能得以实现。图5-15 为滤波后的输出三相线电压实验波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJdZwIN79261VYFDRvNicmgSVJRxNdQUbSohf630CnLrp2Ftib4Mstciclg/640?wx_fmt=png)

图 5-16a)为逆变器输出侧滤波前相电压UA和相电流IA实验波形，图 5-16 b)为逆变器输出侧滤波后的相电压UA和相电流IA实验波形。通过逆变器输出侧电压和电流的有效值，可以计算出逆变器实际输出功率。流的有效值，可以计算出逆变器实际输出功率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJtaTXicLMPPMjw2F7ADbKiciakbAqL7mHj3KJ91kK6RKcBt5FFgHJyuZWQ/640?wx_fmt=png)

最后，基于提出的分析模型和已经描述的损耗计算方法，计算出逆变器的损耗，并与由仿真实验得出的数据计算得效率进行对比分析。其中，仿真数据来源于3.3 节的基于PLECS 的T 型3-L 逆变器的损耗和温升仿真设计。输入电压为100V 不变，对负载进行调节，得出的实验数据如表5-1 所示。由逆变器输入侧的电压和电流计算出输入侧的功率，有逆变器输出侧的电压和电流计算出输出侧的功率，进而得到系统效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ50Lty209USfwSuAc7yEtktA0ew12QAr23wVpeVn2u6TWS4FnqTicGiaw/640?wx_fmt=png)

所提出的基于分析模型的逆变器损耗模型结果与仿真结果以及实验结果进行效率对比如图5-17 所示。结果表明，由提出的损耗模型解得的逆变器的效率比仿真分析得到的效率更趋近于实验实测结果，且效率变化趋势也保持一致。因此，可以得出基于分析模型的损耗模型是可信的，也再一次验证了提出的分析模型的准确性。由图5-17可知，逆变器的效率随负载的增加先增大后减小，这是因为轻载效率由开关损耗主导，在负载较轻时开关损耗等一些固有和开关频率相关的损耗所占比重比较大，负载开始逐渐增大阶段，开关损耗减小，效率增加，而负载继续增加，导通损耗快速增加，所以在重载时效率有可能会有所降低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ5dJic8zbJ5A0lAkjStHVYbPQEO6LnC9dL513WKyPOTJa9q3dxqicEOibA/640?wx_fmt=png)

5.4 本章小结

搭建了基于SiC/GaN 器件的T 型3-L 逆变器的实验平台。主要包括了基于SiC/GaN器件的T 型3-L 逆变器的硬件和软件系统设计。在硬件设计方面，详细介绍了主电路功率器件的设计、采样电路设计、驱动电路设计、直流母线电容设计和滤波器设计。在软件设计方面，主要介绍了如何使用DSP TMS320F28335 控制芯片编写程序并控制逆变器的运行。对基于SiC/GaN 器件的T 型3-L 逆变器的实验结果进行了分析，并对第3 章仿真结果、第4 章分析模型结果和实验结果进行对比分析。

结 论

为改进T 型3-L 逆变器的不足，本文以提高PV 系统的效率和功率密度为出发点，从拓扑和损耗分析两方面入手。首先针对传统T 型3-L 逆变器用于PV 系统时效率和功率密度较低的问题，本文充分利用宽禁带器件和T 型3-L 的特点，提出了一种基于SiC/GaN 器件的T 型3-L 逆变器，有效解决了无法满足PV 系统在高效率和高功率密度的局限性；针对传统T 型3-L 逆变器中系统损耗计算值与实验值差距较大，本文充分考虑各寄生参数影响，提出了一种完善、准确的开关分析模型，并建立了精确损耗模型。本研究首先进行了理论分析和仿真分析，最后通过搭建实验平台，验证了上述方案的有效性及可行性，并得出以下结论：

(1) 提出了基于SiC/GaN 器件的T 型三电平逆变器，并从温度和开关频率等多个维度进行了仿真分析，验证了该拓扑具有明显优势。

(2) 针对该逆变器推导了一种完整的开关分析数学模型，通过对比分析模型与仿真的开关波形，验证了分析模型的准确性。

(3) 基于该分析模型，研究了一种损耗计算方法，通过仿真和实验分析，验证了损耗模型的准确性。

(4) 基于该分析模型，分析了寄生参数对开关转换和损耗的影响，优化设计了一种抗扰的串接驱动电路，通过仿真分析，验证了该驱动具有减小振荡幅值、降低振荡周期和提高开关速度的优越性能。

本文的课题研究仍存在一些不足之处，以下几个方面有待进一步研究：

(1) 当逆变器工作在更高的开关频率时，各寄生参数对系统振荡的影响更加复杂，所提分析模型在更高频率的有效性有待验证。

(2) 在闭环控制下的T 型3-L 逆变器开关器件的模态及损耗分析需进一步研究。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)