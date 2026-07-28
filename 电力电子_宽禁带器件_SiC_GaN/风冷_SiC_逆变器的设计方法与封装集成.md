# 风冷 SiC 逆变器的设计方法与封装集成


> 原文地址: [https://mp.weixin.qq.com/s/\_TNs\_dWJxvqFn4Nr7ixUMQ](https://mp.weixin.qq.com/s/_TNs_dWJxvqFn4Nr7ixUMQ)

**文章来源：**中国电机工程学报

曾正 1，王金 1，陈昊 2，欧开鸿 1，余跃 1，张欣 3

(1．重庆大学；2．阿肯色大学电气工程系；3．南洋理工大学电气与电子工程学院)

**摘要：**SiC风冷逆变器省却了复杂的液冷系统，使电动汽车的动力系统更加紧凑。然而，风冷SiC 逆变器缺乏系统的设计方法和关键的封装集成路径。提出一种风冷SiC 逆变器的分层协同设计方法，包括功率模块、母线电容和散热器3个层次。在功率模块层，采用电热力多物理场分析方法，建立SiC 功率模块的多维应力模型，提出一种改进的功率模块封装方法。在母线电容层，建立电容容值和纹波电流之间的数学模型，计及纹波电压、纹波电流和成本之间的相互制约，提出母线电容材料选择和电容值最小化的优化方法。在散热器层，采用电热协同仿真方法，建立风冷散热器的热阻模型，对散热器的结构和材料进行优化设计。在分层优化设计的基础上，研制SiC 功率模块和风冷SiC 逆变器样机，实验结果验证了所提设计方法和封装集成的可行性。所作研究为SiC 逆变器的研究提供了新的研究方向。

**关键词：**风冷SiC 逆变器；多物理场建模；设计方法；封装集成

**0 引言**

电机控制器控制电池和电机之间的能量流，是电动汽车的心脏。逆变器是电机控制器最为关键的部件，现有电机控制器普遍采用Si 逆变器。由于Si 器件的最高工作温度为 120~150℃，除了用于发动机和电机的105℃液冷系统之外，电动汽车还存在一套用于Si 逆变器的85℃液冷系统。得益于高熔点、高导热率、高击穿场强和高电子迁移速度，SiC 功率器件能在200℃以上的环境中持续工作。因此，对于SiC 逆变器，可以使用风冷散热系统取代复杂的液冷散热系统，提高动力系统的功率密度。此外，得益于SiC 器件的高速开关能力，SiC逆变器具有更高的工作频率，可以减小直流母线电容，使电机控制器更加紧凑。因此，为了提高车用电机控制器的效率和功率密度，采用风冷SiC 逆变器是一条有效的技术途径。

一些文献研究了SiC 逆变器的设计与实现，主要集中在功率模块封装定制、直流母线电容优化，以及热管理方法改进等方面。在功率模块封装方面，为了充分利用SiC MOSFET 的优良性能，极需高温大功率的功率模块封装技术，主要包括先进的封装材料和新颖的封装结构2个方面。为了提高功率模块的工作温度，减小散热器体积，需要采用耐高温的焊料、密封剂和外壳。为了提升多芯片并联模块的电热应力均衡度，减小封装寄生电感，需要采用更加对称的封装布局方法。此外，为了缩短功率回路，减小寄生参数，一些文献提出了新颖的封装概念，包括分离桥臂、双端源极、平面封装、混合集成、倒装、3D 堆叠等。在直流母线电容方面，需要同时考虑材料、纹波和成本之间的相互制约，优化选择电容的材质和容值，以确保母线电容具有足够的能量缓冲能力。文献对比研究了电解电容和薄膜电容在逆变器中的应用。为了提高电容的纹波电流耐受能力，文献将传统电容器与DC/DC 变换器相结合，提出了有源电容的概念。为了提高电容的纹波电流能力和功率密度，文献有机融合电解电容和陶瓷电容，提出了堆叠式开关电容的概念。在热管理方面，相对于Si 器件，SiC器件拥有更小的尺寸、更高的开关频率和功率损耗，也使得SiC 器件具有更高的热通量，这给SiC逆变器的热管理带来了挑战。一些创新的热设计方法可以提高散热性能，降低散热器热阻，包括散热器结构优化、Pin-Fin 或 Power-Shower、3D 打印散热器、纳米级热界面材料、冷喷涂低温焊接等。此外，文献提出自适应调节开关频率或直流母线电压的方法，主动管理功率器件的损耗。

功率模块、母线电容和散热器是逆变器的关键部件，占据了车用逆变器的大部分体积和重量。对于高功率密度车用风冷SiC 逆变器，目前还没有系统的设计方法。此外，现有针对上述关键部件的研究，大多局限于单一物理场和单一维度，缺乏从多物理场和多维度的研究。

本文针对风冷SiC 逆变器缺乏设计指导的关键技术问题，围绕功率模块的封装改进、直流母线电容的优化选择、散热器的优化设计，提出风冷SiC逆变器的分层设计方法。在功率模块封装层面，建立SiC 功率模块的电热力多物理场耦合模型，提出 SiC 功率模块的封装改进方法。在直流母线电容层面，分析纹波电压和纹波电流对母线电容选择的影响规律，给出直流母线电容的综合选择方法。在散热器层面，给出 SiC 逆变器的损耗模型，建立散热器热阻的数学模型，给出散热器的优化设计方法。本文所提模型和方法，可以为高功率密度风冷SiC 逆变器的研究和应用提供新的理论模型和技术支撑。

**1 SiC 逆变器的现状和瓶颈**

**1.1 SiC 逆变器的现状和发展趋势**

通过对现有商业化产品和文献的梳理，车用逆变器的现状和趋势可以归纳为图1 所示。由图1 可见，液冷Si 逆变器是目前市场上的主流，液冷SiC逆变器正在逐渐取代液冷Si 逆变器。此外，随着电动汽车对动力系统峰值功率和功率密度的持续要求，新兴的风冷SiC 逆变器有望应用于下一代电动汽车动力系统。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2sOxBeHgiaBxS6uJgUlicINa95BVbn1j0JFknYibibldyN1Cw9rnKib1upNw/640?wx_fmt=png&from=appmsg)

由于Si 器件的最高工作结温较低，对于液冷Si 逆变器，除了105℃的液冷系统外，还需要一套85℃液冷系统，用于逆变器的冷却。额外的液冷系统降低了逆变器的功率密度，增加了整车成本，降低了动力系统的可靠性。面对该问题，通常有2 种可行的解决方案。一方面，借助于SiC 的高温耐受能力，可以利用发动机的105℃冷却系统，冷却电力电子系统，省却85℃的冷却系统。但是，水冷系统复杂、元器件众多、可靠性差、运行维护成本高。此外，水冷系统的体积和重量较大，会大大降低SiC 逆变器的功率密度。另一方面，采用耐高温的SiC MOSFET 器件，可以用简单的风冷系统代替复杂的液冷系统，克服了液冷Si 逆变器的缺点。出于体积、成本、复杂性、可靠性、运行维护成本等因素考虑，空冷SiC 逆变器具有更强的吸引力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2NzhcxOoK31GrRrT3x1ujSEtpxHuxEQ3ud5dwOgsicS606rWkYNXVDOQ/640?wx_fmt=png&from=appmsg)

图2(a)给出不同冷却系统的热通量能力。虽然强制风冷的冷却性能低于液冷，但是仍然可以处理高达200W/cm2 的热通量。此外，图2(b)给出功率器件的热通量水平，可以发现，SiC MOSFET 的热通量接近120W/cm2，而Si IGBT 的热通量约为10W/cm2。因此，简单、廉价、可靠、紧凑的风冷散热方式，可能是下一代车用SiC 逆变器的最佳选择，而风冷SiC 逆变器相对其它几种逆变器有显著优势。

**1.2 高功率密度车用逆变器面临的挑战**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2sYr8v7deumV0YhrL2QBoYJY9GCItUaicJfaVlhG16ibjMpp84ZsfSXicw/640?wx_fmt=png&from=appmsg)

以大陆公司的车用逆变器为例，液冷Si 逆变器的分解情况如图3 所示。它由十几个关键部件构成，其中，功率模块、散热器和电容器占逆变器体积的 65%、占重量的 35%，是提升逆变器功率密度的关键。

采用SiC 器件可以有效提升逆变器的功率密度。利用SiC 器件的高温工作能力，采用风冷代替液冷，可以消除逆变器的冷却导管和液体循环系统。此外，利用 SiC 器件的高频工作能力，可以提高逆变器开关频率，降低无源元件的体积。

要实现下一代车用风冷SiC 逆变器，仍然面临诸多关键技术挑战，例如：1）如何考虑功率模块、直流母线电容和散热器的优化，从风冷的角度，提出逆变器关键部件的优化设计方法；2）如何考虑高密度逆变器的电热交互作用，从多物理场的角度提出逆变器关键部件的系统设计方法。  

**2 风冷 SiC 逆变器的分层设计思路**

针对车用风冷SiC 逆变器的高功率密度需求，以及异质集成的典型特点，需要充分优化逆变器的关键部件，提出SiC 逆变器的系统设计构建。本文提出一种SiC 逆变器的分层设计方法，具体如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2F5drc5xsKncr0bxMtqKFHTmKsBmUicbFn1aKe0W8ornnIJZNEcYJRew/640?wx_fmt=png&from=appmsg)

在图4 所示的分层设计构架中，在功率模块层面，采用电热力多物理协同设计方法，优化功率模块的封装尺寸和封装材料。在直流母线电容层面，根据特定的开关频率 fs、调制比 m、功率因数cos、纹波电压vdc 和负载电流 Im，优化母线电容的容值、体积和成本。在热管理方面，综合考虑散热器热阻、成本和重量之间的权衡，建立风冷散热器的电热联合优化设计方法。

**3 风冷 SiC 逆变器的分层设计方法**

基于图 4 所示的设计思路，在本节将详细阐释风冷SiC 逆变器的分层设计方法，包括 SiC 功率模块的封装改进、直流母线电容的优化选择和散热器的优化设计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2F5iczCrBAvLE0jiaMeM1Ew4xpzj0uwhwRPaamNV7b6EH2z1RibCeZMoug/640?wx_fmt=png&from=appmsg)

图5 给出风冷SiC 逆变器内部各环节之间的内在联系。从路的角度来看，直流母线电容和功率模块通过电路联系在一起，而功率模块和散热通过热路耦合在一起。从场的角度来看，电容和功率模块存在电磁场联系，功率模块内部涉及电热力多物理场耦合，功率模块和散热器之间存在电热多物理场耦合。可见，母线电容、功率模块和散热器之间通过路和场紧密联系在一起，是风冷 SiC 逆变器的关键组成部分。下文将详细阐释这些关键部件的设计方法。

**3.1 SiC 功率模块的封装改进**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2OOdgXetkEObUb34xPC0vFYtCnxdsCkgMCZQXicyiciaA3D55kAnRNbl6g/640?wx_fmt=png&from=appmsg)

图6 给出引线键线式功率模块的基本结构，二极管和晶体管通过高温焊料焊接在直接覆铜板(direct bonded copper，DBC)上，DBC 为铜陶瓷铜的三明治结构。陶瓷材料的导热系数较低，为了降低封装热阻，通常限制陶瓷层的厚度，使得DBC易碎。基板用于支持DBC，并减少陶瓷层的应力，提高功率模块的机械强度。芯片之间以及芯片与端子之间，采用超声焊接技术互连。

在SiC 功率模块中，存在明显的电热力交互作用。SiC MOSFET 和SiC SBD 的开关损耗和导通损耗使芯片发热，引起材料膨胀。由于各层材料之间的热膨胀系数不一致，使得模块内部出现明显的机械应力，撕裂焊接层或扯断键合线，使模块失效。因此，在 SiC 功率模块的设计过程中，应同时考虑电热力的多物理场交互作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ24TuDtFRiaOzmJ1ic9bQKQ11siaicOWUkSoyodE3KeYleKoH3rE8a0hWJgQ/640?wx_fmt=png&from=appmsg)

以市场上常用的EconoPACK 封装SiC 功率模块为例进行分析，模块的布局和结构如图 7 所示。功率模块内的电流场可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2wdM7Ao1ic7CTEN2twhQaQm7ED0EIFljPDD1mJrPNv4SHrc2llQyESZg/640?wx_fmt=png&from=appmsg)

式中：电场强度 U 是电势的梯度；J 为电流密度；为材料的电导率。

J 的梯度可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2Bjj3ebN1RLWIAhesZDruX9T1E2p8muDWlyHXamAwfkSymibmawCavTg/640?wx_fmt=png&from=appmsg)

由于功率模块的多层结构，各层材料的热膨胀系数难以一致，会导致功率模块内产生机械应力。总的应力由2部分组成：一部分，T由工作温度引起；另一部分，E由弹性张力引起，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2O1pZpT0e9tCiapVJL31CNxquo8hw1iaELO1GOLp5Kao4l0qwJRTlc9dQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2j6k7vbiayXiaAAYcIkpcIuFW9bFRibcicXVMkzcd9oSia1erD2XK1fpCAKw/640?wx_fmt=png&from=appmsg)

综上，在功率模块内部，电热力之间相互耦合，如图8 所示。在已知边界条件的基础上，根据式(1)—(11)，可以用有限元分析(finite elementanalysis，FEA)工具，研究功率模块内的电热力分布规律。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2ia8oQNFXfdmkgNicyjSgAwYbnsw6ArutwIASTMvy3icnw9gIHhtjHkKwQ/640?wx_fmt=png&from=appmsg)

在本文的研究中，采用Hestia 的SiC MOSFET芯片H1M120N060和SiC SBD 芯片 H2S120N060，芯片参数如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2A96a9XUHoVDYicFMiclyqNNmlHiaicUcGy0QE3wgfJVe9d5phgZWVYIMuA/640?wx_fmt=png&from=appmsg)

所研究SiC 功率模块的材料选型如下：DBC 陶瓷材料为Al2O3，基板材料为铜，芯片焊料为SAC305 (Sn96Ag3.5Cu0.5)，DBC 焊料为Sn60Pb40，键合线为半径580m 的粗铝线。所用封装材料的基本物理属性如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2UlV4PGcNLf5nwxicgpE4H1jiaziaicicWvUJrldAZHABYFjJJribyBPjaUJA/640?wx_fmt=png&from=appmsg)

采用FEA 分析方法，研究SiC 功率模块内的多物理场应力分布，功率回路的负荷电流设置为20A/50Hz 的交流电，每个SiC 芯片的损耗为10W。功率模块的基板底部固定。稳态情况下，功率模块的应力分布如图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2jZLg87sAHLexXdx3I0OE7Pjscpk066v4Is3nlnjzo4ZrnlMHKWFlOA/640?wx_fmt=png&from=appmsg)

如图9(a)所示，键合线和芯片以及DBC 接触处存在较大的接触电阻，并产生了较大的电压降，由此产生的损耗也会增加键合线连接位置的热机应力。在导线与芯片的接触点处，出现了较高的温度，键合线热膨胀导致键合线根部产生额外的应力，使得键合线成为功率模块的一个薄弱环节。因此，高电导率的材料有利于提高键合线的可靠性。此外，采用多根键合线并联的方法，有助于封装减少寄生参数和热机械应力。

如图9(b)所示，在DBC 中，拐角处的电流密度远大于其他位置。此外，键合线的电流密度也较大。电流密度越大的区域，电磁干扰问题越严重。因此，应采用尽可能粗的键合线，并避免 L 型 DBC 布局。

如图9(c)所示，考虑到DBC 的布局，芯片应该与DBC边缘保持足够的距离，以降低结壳热阻和芯片结温。功率模块封装的结壳热阻主要受热传导和热扩展2 个因素影响：一方面，根据傅里叶定律，芯片的热量会沿着温度梯度方向传导；另一方面，当热量在异质层之间传递时，由于界面处材料的导热系数不同，热传导的路径会发生扩展，增加等效的传热面积，有利于降低结壳热阻。当芯片之间的距离大于5mm 时，可以有效抑制芯片之间的热耦合，避免热应力分布不均衡，控制局部过热。

如图 9(d)所示，键合线根部与芯片的结合处应力最大，在车用大范围功率交变和深度热循环的环境中，键合线非常容易脱落。芯片周围的最大应力位于芯片的边缘附近，容易引起焊层裂纹和空洞。综上，芯片焊层和键合线是功率模块中较为薄弱的环节。

基于以上多物理场分析结果，在设计功率模块过程中，功率回路应避免L 走线，以减小电流密度和电磁干扰问题。此外，接线端子应采用铜，以降低电流密度。得到的这些设计规律是SiC 功率模块的基本原则，除了EconoPACKTM封装外，对于其他EasyPACKTM、34mm、62mm 等封装仍然适用。针对多物理场的建模与分析中发现的问题，在上述基本设计原则的基础上，本文采用AlN 陶瓷和CuW 基板设计一款改进的SiC 功率模块，如图 10(a)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2unvcic05lm8RfNpfA09jCPs7DMdvqiaiaiclOKmN7mJoTafQgFOzttKInA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2LprjaVKjW4NzJicCaKIOQLmeE04OTqE9rGFLjYjwUHn3E9iajq8HCgAw/640?wx_fmt=png&from=appmsg)

与图9 的设置相同，改进后的功率模块的多物理场仿真结果如图10(b)所示。与图9 相比，通过消除L 走线和采用铜母排，降低电流密度。此外，由于优化的功率回路和封装材料，降低了功率模块的温度和应力分布。

**3.2 直流母线电容的优化选择**

如图4 所示，为满足轻量化和高紧凑的设计目标，需要优化直流母线电容的材料、容值和体积。SiC MOSFET 器件高频开关会引起纹波电压和纹波电流，使电容极易疲劳老化，通常母线电容也是逆变器最薄弱的环节之一。电容的纹波电压和纹波电流耐受能力与电容材料直接相关。此外，优化直流母线电容，还应综合考虑电容的成本和体积。

在变流器中，常用3 种不同材质的电容：陶瓷电容、电解电容和薄膜电容。陶瓷电容耐高温，但容量小，对湿度敏感。电解电容虽然容量大，但无法耐受高温。此外，高温工作条件会使电解液干涸，损坏电容。薄膜电容的性能介于陶瓷电容和电解电容之间。

根据KEMET和TDK公司的数据手册，图11(a)给出不同电容的功率密度分布情况。电解电容器功率密度最大，大于 4F/cm3。薄膜电容和陶瓷电容的功率密度分别为 1F/cm3 和 2F/cm3。应指出的是，与其他电容相比，陶瓷电容的价格更高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2q6cLXlu6tBgZLjicjftuA1fVHhlbHJQodG6ryT3wvSnbSjneowIOxRg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2Zg8caClsCMGG1A7hOgunWsbNcbMRIuynVNw0mfSud86s9jTFgmEJsw/640?wx_fmt=png&from=appmsg)

对于逆变器的应用，薄膜电容通常是性价比更高的解决方案。

根据上述公司的数据手册，电容的纹波电流耐受能力如图 11(b)所示。电容的纹波电流耐受能力Icrms 可以表示为容值 C 的二次函数，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2qxf9MfdXibsprEd3CliaXX7DLy3tjcBhFhxQ6Zx5X14WOJEFOJ4jETvw/640?wx_fmt=png&from=appmsg)

式中 a1、a2和 a3 为常数，根据图 11(b)，可以得到这些参数的估计值，

如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2KY13wcfupkKAcvpOomezvTYUI1ZzQsconiaw4k9BnicHS1XzwQWfkaoA/640?wx_fmt=png&from=appmsg)

除额定电压外，电容的纹波电压和纹波电流都应满足逆变器直流侧的工作条件。

考虑逆变器的纹波电压，所需要的最小电容Cv 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2W4GnLGbyImDribUGBvzPTunB158sKJjIsMv9c0q3BHK5t1FmFcScufQ/640?wx_fmt=png&from=appmsg)

对于纹波电压，图12 给出vdc、fs、m 对直流母线电容优化选择的影响规律。可以发现，较高的开关频率 fs 和较低的调制度 m，可以显著降低逆变器对直流母线电容的需求。此外，通过使用具有高纹波电压耐受能力的电容，也可以减小直流母线电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2uymqC0UfR6bLMdXOCiblbU8VEwOcyJcWDbdeUa3fFwRqg4PJZhKb1Sg/640?wx_fmt=png&from=appmsg)

此外，直流母线电容还需要承受 SiC 器件开关引起的纹波电流。电容的最小纹波电流能力 Ipmin，可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2q2h0TK9vRITlzxlwwZLK5LeH9IzBSeWhxE6TFCTPhVGwj5W1mAHulg/640?wx_fmt=png&from=appmsg)

根据表4 提供的SiC 逆变器参数，当Cdc10F时，线电压、相电流、纹波电压、纹波电流的仿真结果如图13 所示，纹波电压和纹波电流值分别为10V 和7.2A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2xGrsK1seHia8XgOExtIhm33nY4fJIfCI3LbY4tR6HY3QgyXicohtDLPQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ23xibom5HCnWADg1eIUMUhsTx2EkALPIgDctaJxWmn1c6PVPfT43Gz2Q/640?wx_fmt=png&from=appmsg)

对于纹波电流，图14 给出使用不同材质电容时所需的最小电容值。与电解电容相比，采用陶瓷电容和薄膜电容，直流母线电容的容值需求可以降低90%以上。薄膜电容和陶瓷电容具有良好的纹波电流特性，对于降低直流母线的复杂度非常有价值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2OCvKxK1BXZaarMIl2Bcjxke9x9U3FCX0JWAb7bnkAnCalAiaLAjSYmw/640?wx_fmt=png&from=appmsg)

为了选择直流侧电容 Cdc，需要同时满足纹波电压和纹波电流的要求，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ26LCKCnHp0Q2HR1Qno8UuWmhoyxjjRjCFvAp4IxbAXUDM5mjqIQ0oEQ/640?wx_fmt=png&from=appmsg)

在不同vdc 条件下，不同开关频率和电容材质对Cv 的影响如图15 所示。当开关频率 fs50kHz，纹波电压vdc/Vdc5%时，可能的直流母线电容方案如表5 所示。与电解电容相比，陶瓷电容可以使逆变器更加紧凑，但是会增加逆变器成本。考虑到性能和成本的折中，本文选择薄膜电容方案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2ibqWZbv1envzZpoTKXHQ2hRl5KQOSfozRUJ9tYkrF06UYqJ6IDQiaRvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ27RsurG0pQoKEoZJ0ictUNHibUESOxn7MIcGk3p9uP0icGQtaiakJ7uiblIA/640?wx_fmt=png&from=appmsg)

**3.3 散热器的优化设计**

SiC 逆变器输出功率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2tQ0fFHBFklbvDItekKmEg8CBYr1r7QEGYZichNIKeFNNucc9LjMwiaWQ/640?wx_fmt=png&from=appmsg)

表4 给出所用Hestia 的SiC MOSFETH1M120N060 和SiC SBD H2S120N060 的关键参数。

根据式(18)和表4 可知，MOSFET 和SBD 的导通损耗分别为5.5W 和 3.2W。

类似地，SiC MOSFET 和SiC SBD 的开关损耗可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ28jW1RRr8GLcxKGfJRrIGt28yBd7Dia45ZoEiaU9SvpuhS2gs21iaAGCUA/640?wx_fmt=png&from=appmsg)

式中：Vn、In 分别为器件的额定电压和额定电流；Eon、Eoff分别为 SiC MOSFET 在额定测试条件下的开通损耗和关断损耗；Erec为 SiC SBD 在额定测试条件下的反向恢复损耗。这些开关损耗可以通过SiC 器件的开通和关断轨迹计算得到，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2YOCcOR6EKm2lOYaytoico6nK8qXIR043RKLpZ0bwhfQ2Rt1vKCmTiczA/640?wx_fmt=png&from=appmsg)

式中ton、toff和 trec分别为SiC 开通、关断和反向恢复的时间。

因此，可以得到SiC MOSFET 和 SiC SBD 在各个周期内的平均功率损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2hektjXO3qFtXba6HMOvOFkjttbeEVA14wYmrrD2rLzcxcjeqTEGsnQ/640?wx_fmt=png&from=appmsg)

根据表4 中的逆变器和器件参数，以及式(19)—(21)，可以得到 PMs3.6W，PDs0.5W。

SiC 器件的损耗分布如图16 所示。可以发现，导通损耗与开关频率无关，但随输出功率的增加而增加。开关损耗随输出功率和开关频率的增加而增加。在额定功率条件下，SiC MOSFET 的损耗占逆变器损耗的 70%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2QdOFVSVM2icQrCbNoRy5dQB1JLm1vm4w3XPG21nq1pibUDVPQeCSmElQ/640?wx_fmt=png&from=appmsg)

借助于多物理场分析工具，采用有限元计算方法，研究SiC 逆变器的散热器优化设计。逆变器运行条件如表4 所示，设置环境温度为25℃，散热器表面的换热系数为 50W/(m2·K)，以模拟强制空冷条件。每个MOSFET 的功率损耗为 PM5.53.69.1W，每个 SBD 的功率损耗为 PD3.20.53.7W。根据图 17 的仿真结果，SiC 芯片上的最大结温约为140℃。热设计可以满足碳化硅器件的功耗要求。由于现有 SiC 芯片的最高结温通常为 175℃，该设计留有足够的裕量。随着 SiC 芯片最高结温的持续增加，进而提高芯片的工作结温，有望进一步简化散热器结构，提高逆变器的功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ26buY5ZoZ4Unm5n4OXu9sFRTnOKqgiartCeUBwyW8aOtB7Ib2Vcb25Lg/640?wx_fmt=png&from=appmsg)

在不同芯片尺寸条件下，不同散热器齿数、齿宽度、齿高度和材料对散热器热阻的影响如图18所示。可以发现，采用大的芯片尺寸有助于降低散热器的热阻。

根据仿真结果，在芯片尺寸为100%的情况下，建立散热器的热阻模型，具体表示如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2ibQeq1UkDh7Adl8Gu4PibhUbV0AzTYWI90DyFl3LhIeLEtB31ODiaOTLw/640?wx_fmt=png&from=appmsg)

式中 n、w 和 h 分别为齿的数量、宽度和高度。

根据图 18(a)可知，热阻随着齿数的增加而减小。满足热阻0.35K/W 的最小齿数为 8。类似地，如图18(b)所示，齿宽越大，热阻越小。为满足热阻0.35K/W 的要求，最小齿宽为2mm。如图18(c)所示，当齿高大于46mm 时，散热器的热阻将小于0.35K/W。此外，散热器材料对热阻的影响规律，如图18(d)所示。当材料的热导率大于 240W/(m·K)时，散热器热阻将小于 0.35K/W。考虑到材料的成本，铝仍然是散热器的最佳选择。齿数越大，生产过程更复杂，成本越高。此外，齿越宽，散热器越重。因此，散热器在热阻、成本、重量之间存在折中。最后，以热阻小于 0.35K/W 为目标，优化设计后，散热器的齿数为8、齿宽为4mm、齿高为50mm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2IoDA5hJ9RG4hRInuN34Y1IicShBXpc9oClE9FbympuEj2SIVsDNrurA/640?wx_fmt=png&from=appmsg)

强制风冷散热器的换热系数 hc由风速 va确定，经验公式如式(24)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2Q8FKnWyktnTe1yJYTytEJKmun8eGCDPC9qzJNp9NJtMeMw3Yy1Bx3g/640?wx_fmt=png&from=appmsg)

由图 19(a)可见，较大的va 有利于提高hc，降低热阻。然而，较大的va需要体积更大、成本更高、功耗更大的风机。如图19(b)所示，为了满足热阻为0.35K/W 的要求，换热系数hc应大于40W/(m2·K)，相应地，风机提供的风速最少为 3.8m/s。

本文设计中，所研制的风冷SiC 逆变器采用2 个SUNON 6015 (60×60×15mm3，42g)风扇，风速大于4m/s，风量为 0.504m3/min，转速为 3600r/min。

**4 实验结果**

**4.1 样机和实验平台**

为了验证所提分层设计方法和系统集成方法的可行性，根据前述设计和分析，本文研制 SiC 功率模块和风冷SiC 逆变器，并开展实验测试。

基于前述分层设计方法，研制10kW 风冷SiC逆变器，如图20 所示，功率模块为改进封装的50A/1.2kV 三相SiC 模块，直流母线选用4 个TDK公司的 30F/800V 薄膜电容器B32776E8306K，散热器为前述优化设计的铝质散热器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2dvrp6Mq5iaa4qXr0KYhicd80yb9RQmqxgibDaLicRjqtTCcOIdM2QFh4dQ/640?wx_fmt=png&from=appmsg)

对于所研制风冷SiC 逆变器样机，体积和体积功率密度分别为0.77L 和13kW/L，逆变器的体积分布如图21(a)所示。逆变器的质量和质量功率密度分别为1.5kg和6.7kW/kg，质量分布如图21(b)所示。此外，逆变器的综合成本是$485，成本分布如图 21(c)所示。可见，散热器成为风冷SiC 逆变器体积和重量的主要组成部分，是进一步提高功率密度的瓶颈。此外，功率模块是制约SiC 逆变器成本的关键因素。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2yz4Ae9yxoMrKlH4yeJNo64AU5Etm7g5yrtdIZD2gpdWaHEbjjmnfmA/640?wx_fmt=png&from=appmsg)

为了测试SiC 功率模块和风冷SiC 逆变器的基本性能，搭建如图22 所示的测试平台。该平台包括：TI TMS 320F28335 DSP 控制板、1GHz 带宽示波器 610Zi、200MHz 差分电压探头 DP6150B 和20MHz 罗氏线圈 CP9006S。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2icdpicP9Yic7hOrJicPczFJyJHOJXDpS249GRiaB3Sm8Noibh3GMINdwMXFA/640?wx_fmt=png&from=appmsg)

**4.2 SiC 功率模块的实验结果**

基于感性钳位双脉冲测试方法，图23(a)给出当负荷电流为 10~40A 时，SiC MOSFET 的开关波形。测试条件为：结温 25℃，直流母线电压600V，栅极驱动电阻10。可见，SiC 器件的开关速度非常快，开关时间在50ns 以内。同时，开关时间随负荷电流的增大而增大。

将直流母线电压和负荷电流分别固定为600V和 40A，当器件结温从25℃到150℃变化时，SiCMOSFET 的开关波形如图23(b)所示。可见，结温对 SiC MOSFET 的开关过程影响不大。

根据图 23 所示实验结果，可以计算得到 SiCMOSFET 在不同负荷电流和工作结温条件下的开关损耗，如图24 所示。提高结温可以降低阈值电压，提高开关速度，降低开通损耗。但是，结温和负荷电流对关断损耗影响不大。此外，开通损耗包含了二极管的反向恢复损耗，受结温和负荷电流的影响，但是温度引起的开关损耗变化不超过20%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ23mIFaBrcaFTQPbJzIKSoLTp2e2T7ibqmZjeTJrspibFJSyrjWTQibrdag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2jvvQ9zk8SOgGSv3m55khLuic7upQLDmPfAeTW7TwUAKt5Ce1NVvZribQ/640?wx_fmt=png&from=appmsg)

**4.3 SIC 逆变器的实验结果**

对于所研制的风冷SiC 逆变器，图25 给出线电压和相电流的典型实验测试结果，测试条件为：直流母线电压 600V，输出线电压有效值320V，调制比为 0.9，开关频率为50kHz，阻感负载(电阻R10，电感 L1mH)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ28Rv3ebicKN2ib8JxjHIquCPwngtYCDKpY7256l1wBSsy16GCmYSjRcCA/640?wx_fmt=png&from=appmsg)

**4.4 逆变器对比评估**

参照丰田普锐斯和大陆Gen 2.8系列车用电机控制器产品，表6 对比了所提逆变器样机与实际产品的基本性能。可以发现，空冷SiC 逆变器样机的功率密度接近丰田普锐斯系列电机控制器产品。此外，随着SiC 逆变器功率等级的进一步提高，其功率密度还有望进一步提升。值得指出的是，液冷逆变器忽略了循环冷却系统的体积，风冷 SiC 逆变器包含了散热器和风扇的体积。考虑冷却系统的体积和重量之后，商业化液冷逆变器的功率密度将大打折扣。采用风冷技术后，SiC 逆变器可以消除复杂的冷却系统，显著提高车用电机控制器的功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2Dp3yrabXkOJVFleclCEShVLd2eA9ialjXkwP3jcmRC1SWEGRoAUrJlg/640?wx_fmt=png&from=appmsg)

**5 结论**

针对车用高功率密度逆变器的发展趋势，本文研究风冷SiC 逆变器的可行性，围绕功率模块封装改进、直流母线电容优化选择和散热器优化设计，提出风冷SiC 逆变器的分层设计方法，研制50A/1.2kV 的 SiC 三相功率模块，以及10kW 的风冷SiC 逆变器样机，实验结果验证了所提模型和方法的可行性，可以得到如下结论：

1）利用SiC 器件的高温和高频工作能力，可以消除复杂的液冷系统，简化无源元件的设计需求，降低散热器和无源元件的体积，提高车用逆变器的功率密度，风冷 SiC 逆变器有望成为下一代高功率车用动力总成系统的发展趋势；

2）SiC 功率模块内存在电热力强相互作用，多物理场建模和协同设计表明，功率端子、键合线和芯片焊层是功率模块的薄弱环节，封装设计中，应避免 L 形走线，宜采用铜端子和粗键合线，降低电流密度，提高功率模块的可靠性；

3）直流母线电容在稳定母线电压的同时，需要具备足够的纹波电压和纹波电流耐受能力，电解电容能量密度高，但是纹波电流耐受能力差，陶瓷电容具有很强的纹波电流耐受能力，但是价格非常高，薄膜电容的性能介于两者之间。直流母线电容的优化选择，在满足纹波电压和纹波电流的基础上，还应该综合考虑材料、体积和成本的折中；

4）散热器是制约风冷 SiC 逆变器功率密度的决定因素，散热器的热阻直接决定于齿数、齿宽、齿高、材料热导率和换热系数，在满足特定热阻的条件下，散热器的优化设计还需要综合考虑散热器的体积和重量因素。

本文所提风冷SiC 逆变器的分层设计方法，可以为车用高功率密度SiC 逆变器的优化设计提供新的理论模型和技术支撑。此外，低感、低热阻、高温SiC功率模块封装及其高温驱动，仍然是风冷SiC逆变器的关键技术瓶颈。高温、低寄生、低热阻、高纹波电流电容器，也是高功率密度SiC 逆变器的关键部件。此外，风冷SiC 逆变器是一个复杂、有机的电力电子装置，除本文所讨论的关键部件优化之外，其 EMI 建模与抑制、高频控制、高频高温驱动等都还有待进一步深入研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2TRiap14siaiclYhMGr7X2IbiaGMSqOXdJ6r6MgQDVwFDD4hzx6hgpajBfQ/640?wx_fmt=png&from=appmsg)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslm0dicydicdJ0pJedyJsFQZ2KRIZqDKcZ494uX8D4ibBD5uh1nTicrQvvsdMaPwnGg2QrkZ4J8wa6n4w/640?wx_fmt=png&from=appmsg)