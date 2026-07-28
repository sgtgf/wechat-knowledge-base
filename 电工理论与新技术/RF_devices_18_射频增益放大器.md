# RF devices-18：射频增益放大器


> 原文地址: [https://mp.weixin.qq.com/s/cRw-N3FoByi54AhixFt8kA](https://mp.weixin.qq.com/s/cRw-N3FoByi54AhixFt8kA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRplI9OrptvmUvGgoH22HYMeOHGsy5NvicPIKz907OaMNGds0diaIiaAvQenAgM4wicFKTLiap0h264ickw/640?wx_fmt=png&from=appmsg)

____**★★★**______PA-18---Gain PA______**★★★**____

引言：前面介绍的LNA和PA是两类使用最为鲜明的放大器，在中大功率的RF系统中，除了这两类，还会涉及到更多具备其它特征的功率放大器，这类统称为射频增益放大器。本节主要简述射频增益放大器这一大类，相关指标参数参考前面章节即可。（传送门：[RF devices-17：PA](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247496746&idx=1&sn=7e8d40da8107b01cf82a595f8b78bea1&scene=21#wechat_redirect)）

___€1.增益模块___

**增益模块是最灵活的放大器，因为它能在IF到RF的宽频率范围内提供固定的增益。**选择增益模块时需要考虑的特性取决于其实际应用，不过在宽带应用中，增益平坦度与频率的关系很重要，此外为防止信号因为放大而发生失真，动态范围也很重要。

如图18-1所示，增益模块在内部具备输入输出阻抗匹配部分，阻抗匹配至50Ω，可提供各种增益和线性度水平，从而为系统设计提供多种选择。凭借高达约22dBm的输出功率（5dBm至约1W），射频增益模块涵盖了广泛的带宽和增益水平。增益模块作为一个完全级联的通用放大器，随附的有源偏置电路确保了放大器的性能，在整个工作温度和电压范围内都进行了优化。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR5IHsQtTkkkDEGcpgEH59MquZ0Zs0jTlPsOsFtIvIubCvrpFxjuibTXWekbkSibiaw9QbqicOBXEmCFA/640?wx_fmt=png&from=appmsg)

图18-1：增益模块框图

**___€2.___RF/ IF可变增益放大器（VGA）**

许多应用都希望通过集成来减少电路板空间，射频可变增益放大器（VGA）具有基于振幅调制和电平压缩的控制逻辑的可调增益，VGA通过集成各种放大器拓扑和数字步进衰减器（DSA）来达到这一目的。射频VGA无需外部匹配即可在宽带宽范围内提供高动态范围，而不会影响线性度，从而能够实时调整信号振幅。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR5IHsQtTkkkDEGcpgEH59MKnkaMluKiaibTic66libFEpqwIEacqvHXRmaTbdB1XEKwVtjEqw94ww6nw/640?wx_fmt=png&from=appmsg)

图18-2：VGA内部框图

射频VGA的基本构成由三部分组成：固定增益放大部分；步进衰减部分；逻辑控制部分，所以关注的参数还是集中在放大器部分（Gain、OIP2、OIP3、NF等等）。

VGA常用的环节如图18-3所示，直接作为基带输入/输出信号的一级放大（LMH6401）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR5IHsQtTkkkDEGcpgEH59M3m9mJTGd1B59ib8r4WESokTN7Sg9pP3egn9ZM1CoibhHadMqW5SY7llQ/640?wx_fmt=png&from=appmsg)

图18-3：VGA使用节点

中频放大器设计用于实现IF频率范围（无线电架构中通常低于500MHz）内的高性能，接收器的IF部分需要高动态范围放大，否则信号将在ADC进行数字化处理之前发生失真，放大器要实现高动态范围，必须同时具有低噪声系数和高OIP3。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQMkkIKIZ5CsZnGfVJF4gcrucEmFzureTB1jKII4EoeRzl2ScicSBV6AVuxK6zC42ucXSPqlOTN5FQ/640?wx_fmt=jpeg&from=appmsg)

图18-4：VGA典型曲线

**___€3.___驱动放大器  
**

在射频放大器系统中，**驱动放大器（Driver Amplifier，简称“驱动级”），**一般用在无线电架构的发射路径中，****是连接“小信号放大环节”与“末级功率放大环节”的关键中间级放大器，核心作用是为末级功率放大器（Power Amplifier, PA）提供足够幅度、低失真的射频信号，为了有效实现这一目的，驱动器需要针对给定输出功率提供高线性度，以便实现低失真、高输出驱动能力，确保整个RF系统高效、稳定地输出目标功率。

首先明确RF放大器的典型层级结构：通常RF系统的信号链路是**“信号源（如振荡器、混频器输出）→小信号放大器（低噪声放大器LNA，若为接收端）→驱动放大器→末级功率放大器（PA，若为发射端）→负载（如天线）”**。驱动放大器正处于“信号放大链的中间枢纽”位置，其设计目标与前后级有显著差异。

**1#：信号幅度放大，满足末级PA的“驱动需求”**  

末级PA的核心任务是输出大功率（通信基站PA需输出几十至上百瓦），但PA要达到额定输出功率，需要输入一定幅度的“激励信号”（即驱动信号），如果输入信号太弱，PA会工作在非线性区，导致功率输出不足、失真严重。驱动放大器的首要作用就是将前级（如小信号放大器、调制器）输出的微弱信号（可能仅毫瓦级）放大到PA所需的 “驱动电平”（通常为几百毫瓦至几瓦，具体取决于PA的功率等级），让PA能工作在高效、线性的状态。

**2#：抑制信号失真，保证输出信号质量**  

RF系统（如通信、雷达）对信号失真度要求极高（例如5G通信需严格控制邻道干扰，雷达需保证回波信号的准确性）。驱动放大器作为PA的 “前置激励级”，若自身失真大（如产生谐波、互调产物），会被后级PA进一步放大，最终严重恶化整个系统的信号质量。因此，驱动放大器需具备**高线性度**（低谐波失真、低互调失真），确保放大后的信号能忠实还原原始信号的幅度、相位特性，为PA提供“干净”的激励信号。

驱动放大器的关键性能指标

与其他RF放大器（如LNA、PA）相比，驱动放大器的性能指标侧重“线性度、增益稳定性、阻抗匹配”，而非极致的低噪声或高功率，核心指标包括：线性度IP3，增益（通常增益为10-30dB），增益平坦度，输出功率（通常为20-30dBm，即100mW-1W），噪声系数NF（通常＜3dB）。

为更清晰理解其定位，可将驱动放大器与RF系统中另外两类核心放大器（LNA、末级PA）对比：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ1XQZRlzt0ZD7vaVibM4tfpO23OpX7dLEN8NeIvACENCTGNpzTJtchDgtVKtdMMXHwEbf4jBhWSrw/640?wx_fmt=png&from=appmsg)

驱动放大器是RF放大链路中的 “桥梁级” 器件--->它不追求极致的低噪声（LNA），也不追求最大输出功率（PA），而是以 “高线性、稳定增益、精准阻抗匹配” 为核心，解决“小信号无法直接驱动大功率PA” 的问题，是保障整个RF系统功率、效率、信号质量的关键环节。

___€4.___射频FDA

如图18-5所示，Fully Differential RF Amplifier，全差分放大器为射频设计提供了单端输入到互补差分输出或差分输入到差分输出的转换，射频差分放大器提供低失真以驱动精密和高速ADC。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR5IHsQtTkkkDEGcpgEH59Mes1iaibHrf3G99rZ3hPwXaxVm7n2KTxyXT0NlwgBwW70TibSyIfzzmhQQ/640?wx_fmt=png&from=appmsg)

图18-5：典型FDA架构

常见应用是驱动具有差分输入的高速ADC，图18-6中，TRF1208单端转差分后驱动ADC12DJ5200，该器件专为交流耦合应用而设计，低频响应仅受PCB上的交流耦合电容器的限制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR5IHsQtTkkkDEGcpgEH59MBVRz5icLzZEnwcFzX3FVic9LHfzsSfGGwTY26XicC8snZJ7EzTadIGAdw/640?wx_fmt=png&from=appmsg)

图18-6：FDA的典型使用场景

___€5.___低相位噪声放大器

低相位噪声放大器对于许多需要高信号完整性的应用至关重要，尤其是在仪器仪表、防务和电信应用中，随着振荡器不断得到改进，低相位噪声放大器在这些应用中变得越来越重要。相位噪声描述为近载波噪声，在时钟信号中通常表现为抖动，低相位噪声放大器可以满足LO网络、接收器和发送器的各种要求。

___€6.___宽带分布式放大器  

基于GaAs MMIC（砷化镓微波单片集成电路是以砷化镓为半导体材料，通过微电子工艺在单片衬底上集成晶体管、无源元件及互连结构，实现微波功能电路的集成电路。其核心优势包括高频段（5-10GHz）、高功率、低噪声和低功耗特性，广泛应用于卫星通信、移动通信、雷达系统等领域）的宽带分布式放大器涵盖了各种超宽带宽中DC至65GHz的频率范围，包括低噪声放大器、功率放大器和驱动器放大器设计，可满足在电子战、雷达、电子对抗、光学应用和仪器仪表等应用中的需求。