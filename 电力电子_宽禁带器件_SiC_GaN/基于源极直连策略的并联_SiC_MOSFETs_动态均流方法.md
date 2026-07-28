# 基于源极直连策略的并联 SiC MOSFETs 动态均流方法

原创 陈浩斌 ，闫海东 SiC碳化硅MOS管及功率模块的应用 2026-07-14 10:23 广东

> 原文地址: [https://mp.weixin.qq.com/s/k8NmipglWW1TJVp4e3wUgQ](https://mp.weixin.qq.com/s/k8NmipglWW1TJVp4e3wUgQ)

文章来源：电工技术学报

作者：陈浩斌 1闫海东 1马凯 2郭清 1盛况 1（1. 浙江大学电气工程学院杭州 310000  2. 广东电网有限责任公司电力科学研究院广东省电力装备可靠性企业重点实验室广州 510080）

摘要：并联 SiC MOSFETs 是提高大功率电力电子系统电流容量的经济高效方法。然而，在多芯片功率模块中，容易出现动态电流不平衡现象。该文提出一种在并联 SiC MOSFETs 芯片之间进行源极直连的动态均流方法。基于电路模型和理论分析，阐明动态电流不平衡机理和动态均流方法的作用机制。仿真和实验均验证了该机理和方法的有效性。研究表明，采用该文提出的动态均流方法后，并联 SiC MOSFETs 的动态电流差异和开关损耗差异降低大于50%；另外，在具有更多芯片并联的 SiC 功率模块中验证了该方法的有效性。与传统方法相比，且该方法无需增加额外的大体积元件，也无需改变直接覆铜陶瓷（DBC）基板的布局，实现简单，经济性高。同时， 与传统的制程技术兼容性好，且不需要复杂设计或精确计算，能够很好地满足极简封装制程的要求。  

关键词：并联 SiC MOSFETs ；动态电流不平衡；动态均流方法；源极直连（DSI）多芯片；SiC 功率模块

0.引言  

碳化硅（Silicon Carbide, SiC）金属\-氧化物\-半导体场效应晶体管 （ Metal-Oxide-Semiconductor  Field Effect Transistor, MOSFET）具有高阻断电压、 高开关频率、低导通电阻和出色的热性能。因此，它被认为在大功率领域中具有广泛的应用前景，如混合动力或全电动汽车、新能源发电和充电桩。随着对更高额定功率的需求持续上升，SiC  MOSFET 芯片需要更高的电流容量。然而，受限于制造水平和成本，单个芯片的有源区有限。因此，单个SiC MOSFET 芯片的额定电流受到限制。 

SiC MOSFETs 的并联工作是提高电流容量的有效解决方案。然而，由于芯片布局的不对称、芯片参数的不匹配以及散热条件的不同，多芯片并联功率模块中的动态电流不平衡是不可避免的。不平衡的动态电流将带来一系列问题，包括电流过冲、栅极电压振荡、损耗不均匀和结温不均匀。值得特别注意的是，SiC MOSFET 的阈值电压Vth 具有明显的负温度特性。因此，结温较高的SiC MOSFET 将具有较低的Vth，进而承受更高的动态电流，该机制会导致并联芯片中出现热失控现象，且开关频率和电流水平越高，热失控的风险也越高。此外，Vth 的减小也会增加串扰并引起误开通现象，这些都会降低芯片的预期寿命，导致提前失效，降低了系统的稳定性。因此，很有必要研究多芯片功率模块中，并联SiC MOSFETs 的动态电流不平衡机理和动态均流方法。  

过去的研究已对动态电流不平衡机理进行了探讨。开尔文源极连接已经被广泛用于并联SiC  MOSFETs 中，以提高开关速度和降低开关损耗。文献\[23\]的实验结果表明，采用开尔文源极连接可以有效地缓解动态电流不平衡现象。文献\[24\]的研究进一步得出，阈值电压和功率源极寄生电感不平衡是导致动态电流不平衡的主要因素，而其他寄生电感的不平衡影响相对较小。然而，这些研究中并没有揭示动态电流不平衡的内在机理。文献\[19\]的研究指出，栅极和驱动源极之间的电流差异反映了功率回路对驱动回路的扰动，且电流差异越大，动态电流不平衡越严重。尽管如此，该研究并未深入分析这一现象的产生原因及其内在机理。文献\[25\]揭示了动态电流不平衡的内在机理，不平衡的功率源极电流会导致源极电压差异和驱动回路差异，进而导致动态电流差异。但是，文献\[25\]没有说明功率回路和驱动回路之间的电流耦合和产生原因。因此，为进一步优化并联SiC MOSFETs的动态均流性能，仍需对并联芯片动态电流不平衡进行进一步分析。  

对过去并联芯片的动态均流方法进行总结，可以分为有源方法和无源方法。有源方法主要集中在开发有源栅极驱动器（Active Gate Driver, AGD）技术。例如，文献\[27\]利用电流传感器测量每个器件的电流，从而调整驱动信号实现动态电流的平衡；文献\[28\]则使用主从栅极驱动器进行驱动电压跟随，进而平衡动态电流。这些有源方法都能有效地改善并联SiC MOSFET 分立器件的动态均流性能。然而，它们很难应用到多芯片功率模块中，因为功率模块内部没有足够的空间来插入电流传感器和处理电路。同时，这种方法显著增加了成本和复杂性。  

无源方法通常是在功率模块内部添加额外的无源元件。在文献\[29\]中，通过引入陶瓷去耦电容器，以实现平衡的动态电流和较小的回路电感。文献\[25\]则在功率回路中加入RC 缓冲器，减轻了动态电流的不平衡。然而，这些方法需要对无源元件进行精细设计，而且不可避免地增加了占地面积，破坏了原有的直接覆铜陶瓷（ Direct Bonded Copper  substrate, DBC）基板的布局。此外，文献\[30\]通过在每个驱动源分支使用电阻来缓解动态电流的不平 衡。在文献\[31-32\]中，将耦合电感用于每个功率源极分支，实现动态电流平衡，这些方法需要使用额外的电阻或电感，增加了制造过程的复杂性。文献\[33\]中，在栅极回路中引入带辅助电路的附加电阻，来减轻不对称布局引起的环流，从而实现动态电流平衡。然而，这种方法需要增加额外的电流放大级和有源开关，增加了成本且降低了系统的稳定性。在上述方法中，当多于两个芯片并联时，添加无源元件的设计和制造过程将变得非常复杂。因此，这种方法也难以用在多芯片功率模块中。而且，添加这些无源元件也会增加总成本。  

另一种无源方法是优化功率模块的结构。在文献\[34-35\]中提出了几种方案来实现功率回路，以获得平衡的动态电流。文献\[36\]介绍了具有多端子的布局结构。上述方案虽然能获得较好的动态均流效果，但需要改变原有DBC 基板的布局，不利用实际应用。在文献\[19, 37\]中，调整键合线和铜迹长度以获得对称的功率源极寄生电感，实现动态电流平衡。然而，这种方法需要精确计算和控制键合线长度及连接处，相对复杂。  

本文提出了一种在并联SiC MOSFETs 芯片的源极之间采用直连（Direct Source Interconnection,  DSI）的方式，来实现平衡的动态电流。并联SiC  MOSFETs 芯片的源极之间通常采用的是间接互连 的方式。具体地，源极键合线一端在芯片源极；一 端在DBC 基板，并联芯片的源极间接通过DBC 基板上的铜迹进行互连。在此基础上，本文提出的源极直连方式，指并联SiC MOSFETs 芯片的源极之间直接通过键合线进行互连。该方法通过改变功率模块内部芯片之间的互连来实现均流，属于无源方法。 与有源方法相比，该方法不需要复杂的传感器或处理电路，兼容性好；与以往无源方法相比，该方法不需要增加电阻、电感或电容等无源元件，实现简单，经济性高。而且，不需要改变原有DBC 基板的布局，也不需要复杂的结构设计和精确的计算。此外，该方法与传统的制程技术兼容性好，能够很好地满足极简封装制程的要求。首先，本文深入分析了在开尔文源极连接下，采用DSI 方法和未采用DSI 方法时，并联SiC MOSFETs 的动态电流不平衡机理。基于电路建模和数学分析，揭示了并联SiC  MOSFETs 在不平衡功率源极寄生电感下，功率回路和驱动回路之间电流耦合的机制，进一步明确了该电流耦合引起的驱动回路差异和动态电流差异。在推导的机理中，确定了影响动态电流不平衡的关键参数。基于上述机理，本文详细解释了DSI 动态均流方法的作用机制。其次，本文设计了采用DSI 动态均流方法的SiC 功率模块，并针对不同DSI 参数下功率模块的动态均流效果进行讨论。最后，本文通过仿真和实验，验证了在不同参数下，动态电流不平衡机理和DSI 动态均流方法的有效性。  

1.基于DSI方法的动态均流分析  

本节首先推导了并联芯片动态电流不平衡机理，然后利用该机理的结论，分析DSI 动态均流方法的作用机制。过去的研究表明，在具有开尔文源极连接的多芯片并联电路中，引起动态电流不平衡的主要因素是功率源极寄生电感，相比之下，其他寄生电感对动态不均流的影响很小。因此，本节建立带开尔文源极连接的动态电路模型，研究不平衡功率源极寄生电感下的并联芯片动态电流不平衡机理。通过对比采用DSI 方法的功率模块（优化功率模块）和未采用DSI 方法的功率模块（初始功率模块）的结果，分析该动态均流方法的作用机制。  

1.1动态电路模型

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOe1egNwxQQNUqFB2dHicfXFBZD0ZvWLodhWUOhw5DBmmm9kvQ5H503uTrwE1QSPznIUW4eGSUpStOtM02Uo1NKjvnR4GicOdwR4/640?wx_fmt=png&from=appmsg)

图 1 展示了具有两个SiC MOSFET 并联的优化功率模块在双脉冲测试下的动态电路模型。其中，DSI 动态均流方法引入的支路用点画线框突出表示。图1 中各元件的含义见表1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNhoTUNuDD99ql6t4Itk9MndH04YGicskJg09xHYNHdzicCNpyMicV3WWzYsaGDNeO3EsibianbfybBOC9OM5PS5fmwKar4ptpLd7C0/640?wx_fmt=png&from=appmsg)

动态电流不平衡发生在开关瞬间。此时，SiC  MOSFETs 工作在饱和区。因此，Q1 和Q2 能等效建模为由栅源电压vgs 控制的电流源id，表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNjZF9qKaZoeLw2Jic936l9rtOl4W2LoQ04bROD5jYJ4JKGGiayrAG6LgC6KBB4OicjyKKUfTwibCsdANfI5n2ian4vQenLsqL93C8U/640?wx_fmt=png&from=appmsg)

式中，g为SiC MOSFET 的跨导；Vth 为SiC MOSFET的阈值电压。受本文研究功率源极寄生电感的影响，认为SiC MOSFETs 中的g、Vth 均相等。  

漏源寄生电容Cds 可以忽略，输入电容Ciss由栅漏寄生电容Cgd 和栅源寄生电容Cgs 并联而成，表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOSB9riaCzKMgPIiabcC2pffXZmBHhbX2FjiafibZ3cqSaAJeHvcDlEC7VsHOUicdj0hs698BOrF6DicrqicZyHD9kJ2ektAUh6KZ5gGM/640?wx_fmt=png&from=appmsg)

负载电感等效建模为电流源iload，续流二极管等效建模为寄生电容Cp。基于上述分析，图1中的电路可以等效为图2 所示的优化功率模块的初始动态电路模型。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMuMUicjeRU6icFvibuc2WGZWIyytPy8Rpzbck5ub3V9esnjiaFvDQMj0Cg0wwembl6QYnWjZRum9VMma5TRH7eWYwVmSAJ3ia4MrHU/640?wx_fmt=png&from=appmsg)

考虑到动态电流不平衡主要受并联支路差异的影响，且漏极寄生电感Ld1 和Ld2 与电流源串联。因此，图2 电路可以进一步简化为图3 所示的优化功率模块的简化动态电路模型。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO3fMJYafG9bumBmG4sI52qq4chFSKBVB0W9ibmk6VkA41RFnHfXKhAm9vNzZbjiaGCdibTnLo1pDrrqITVqfCQfrcETBHWkasHHo/640?wx_fmt=png&from=appmsg)

1.2动态电流不平衡机理的分析  

本文利用图3 的简化电路进行后续分析。用基尔霍夫电压定律（Kirchhoff’s Voltage Law, KVL）求解图3 中的4 个闭合回路，如黑色虚线所示。将KVL应用于驱动回路中，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOHCncle0K9jGsgsyfWVQSQ59ButntmPLImmSCKGdj0fLmNQGMbCn079fOetjtQdVu4ZAd8GouXOmUDrw94VB8Uzl5DicRRYfUg/640?wx_fmt=png&from=appmsg)

式中，栅源电压vgs1 和vgs2 可分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPkSiaMxDTiaRqUMFlcydl1DXD9XZYRdSWdVDXMvJFZWZUExr2j83cHtVNxWsia1dkDSreQiaYmpZ7mzv59HsErKTDKyjB5seoFR9Q/640?wx_fmt=png&from=appmsg)

式中，vgs1(0)和vgs2(0)分别为vgs1 和vgs2 在初始时刻的值。将开通或关断的开始时刻，即动态电流开始变化时刻，定义为电路的初始时间（t\=0）。  

将KVL 分别运用于包含Ls1、Ls2、Lk1 和Lk2 的 回路以及包含Ls1、Ls2 和Ls1s2 的回路，其关系表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN9ecsfktJKxnPf5h8ickd5ib1ZwlYmehicV80dic2sasbggNDV726TYOEic7kTRS8ZjISdk1kFibuomUdaySQSU2X1TkibNsXXZQlCVQ/640?wx_fmt=png&from=appmsg)

用基尔霍夫电流定律（Kirchhoff’s Current Law,  KCL）求解图3 中的功率回路、驱动回路和CS 节点，表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP7ibwDQXVIrxPibSCv8icx7bZ9DXXfFsL1aftLGB6pB5W4wiahubOY0gRhPp7tEcRGbw2bZbrwSD4sSQvEOXVSqD2GCpdPjDoY8yI/640?wx_fmt=png&from=appmsg)

在进行后续推导之前，本文做出以下合理假设：  

（1）本文重点研究不平衡功率源极寄生电感对动态均流的影响，认为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpONzHavmHXQeVCPBNKFic309EQOrMZuSZewWHF7hSy9yWYWrhfJBichmcUBnVpFIemVDqtM9tlcgxr80Npf6ghUQhc1qlv9VfJrA/640?wx_fmt=png&from=appmsg)

（2）忽略静态电流差异，图3 电路中各参数的初始值定义为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNgh7DjT4esxGHBJ4SkDqibytKtx0kW5ryrtGnbDAu0PTnRZYcicCWDOASOoeZUKTpV4fp3gAqUD5BrgibEQ6rr9PIoHRFZfVIyZU/640?wx_fmt=png&from=appmsg)

基于式（1）～式（8）进行拉普拉斯变换，得到式（A1）～式（A5），具体公式和推导过程见附录。式（A1）～式（A3）中各自两个式子相减，再经过化简得到

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO92CYj1ziaVXHEVkKhpbr2G0uc3BH7Sd4K1tVeWvaCHOfFSmlazhFdtJxO16Tw1ibl8931AR0Qianq32DriaBUTwKctOqWcJsHb8E/640?wx_fmt=png&from=appmsg)

式中，s为拉普拉斯算子。  

结合式（A1）～式（A5），化简得到

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOWNpjXMONRzBh4sbDOqb8sUnkRb86HHepEzjAVPWlJFubrQcTA3apbEl7t3icYvK7sLMzx7KbNDIUmbUrg2cLVgamnibgMmjSpw/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNq4v0g5VVsVpteVYzDay7olCAm0K50PXvSR7KI0gvb5q1lQcjDFCjLP95M4NvKbNeclV0rm4xYfCuHiczazm3ubROicibkE1D5QE/640?wx_fmt=png&from=appmsg)

式中，a为不平衡电感衰减系数，a\=Ls1s2/(Ls1+Ls2+Ls1s2)，数值范围为0＜a≤1，并且随Ls1s2 的减小而减小。  

由式（9）～式（11）构成了优化功率模块的动态电流不平衡机理。移除Ls1s2 支路，则可以得到初始功率模块的简化动态电路模型如图4 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPlnMibmhesRIMB4d5PPnDDvCuXJH1GaytRYvRic8T2NkoKsdCxWrRVAfxByic2buWwdmZRUag2icgX9zltocZUnOfovib0yWHHd1Yw/640?wx_fmt=png&from=appmsg)

此时，相当于Ls1s2 支路开路，即Ls1s2≫Ls1+Ls2，则不平衡电感衰减系数a\=1。而且，无支路电流is1s2。

因此，由式（9）～式（11）变换可以得到，初始功率模块的动态电流不平衡机理为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNGTEaY4OIVM8WMNATNAJ6toicElLwCVS92lFo4LNumFpBm3TtSt0zue58FFPGVYccMRtkYeicHib6RR0OKzNYjEEadOgdlbbdzaU/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPHCPnKTqibRQLwOlzuZH9oDV3sCMxk8gwM0Bd94MJVUia4UWY6KI3z5tt7cGRRzib8zjYWOY3Tugb5SQQLicgkBGbwPEPia1dScrAk/640?wx_fmt=png&from=appmsg)

文献\[23\]研究指出，开尔文源极连接可以解耦功率回路和驱动回路，从而改善动态电流不平衡。但本研究揭示的机理表明，功率源极寄生电感差异ΔLs 仍然会引起芯片栅极和驱动源极之间的差动电流，进而加剧功率回路和驱动回路的耦合程度。在一定时间内，差动电流越大，耦合越严重，进而导致更大的栅极差异和动态电流不平衡。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNaeHuicZpC1seGwWNZDuVnDHHeK6TkyCH262KsAh1QX7aAghFalmHdicXPh9ZOTPoHeSu74eCOTEyL0iaKL1Mdft8RhwHIEamDkc/640?wx_fmt=png&from=appmsg)

图5 展示了ΔLs 引起功率回路和驱动回路耦合的物理机制。若移除Ls1s2 支路，则对应于初始功率模块的情况，在开关瞬间，功率源极寄生电感差异ΔLs 会在动态电流的作用下产生感应电压差Δvs（即vs1−vs2）。该电压差会在功率回路中产生一个环流ic，并流经驱动回路，进而导致功率回路和驱动回路之间的电流耦合。然而，采用DSI 方法后，Ls1s2 支路的存在减小了环流| ic |，具体而言，在开关瞬间，部分动态电流将流经Ls1s2 支路，从而降低电压差| Δvs |。此外，由该电压差产生的环流被分为两部分：ic 流经驱动回路；is1s2 流经Ls1s2 支路。因此，采用DSI 动态均流方法后，在一定时间内流经驱动回路的环流| ic | 将减小，从而降低了功率回路和驱动回路的耦合程度，进而减小了动态电流的差异。  

结合图4 电路，栅极和驱动源极的差动电流，也就是环流ic，可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNdUSS6WxLk3TRsia9Kn9e7Pgf3GKbA75Kh0BsXZlnWvunyscKdCmQKNXIXdPovbPRX9amx9AhKppOzicI2IUwzcWGjIc9YDj0dM/640?wx_fmt=png&from=appmsg)

由式（8）可知，ig1(0)=ik1(0)=ig2(0)=ik2(0)，则环流ic 初始值ic(0)=0，将式（14）进行拉普拉斯变换，可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN1kiaGoWpRF1da1crazKZxtAGkxzxreuRvhW6RCh38YfsNQazfiamRjibHSK0mj6sQ87BydHwazfYFRZKHV9US1COfXO3lJEnDJw/640?wx_fmt=png&from=appmsg)

最终，结合式（12）和式（15），初始功率模块的动态电流不平衡机理可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN9LPHXn8nPgIgGGxUA0icuQxrgeolLiccnnouNegqJHKkJkgs17vC5GaVUCmyg2ddJ3t8iblg1UAuDZBHmEppXxElIYepQib8R5w4/640?wx_fmt=png&from=appmsg)

在一定时间内，环流| ic | 的大小表征了功率回路和驱动回路的耦合程度，与文献\[22\]的结论一致。  

结合式（9）、式（10）和式（15），优化功率模块的动态电流不平衡机理为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPpFts4qoQ9tTWcjdL2HB3KvY04GG7ZfFjkdb6xmFbElYibLqnAt11XHtE2SPeKdyZ5vgtyappJj6Kmm3d0hY10e679u1P8jcwQ/640?wx_fmt=png&from=appmsg)

动态电流不平衡机理在时域解下的等效电路如图6 所示。电路的初始条件为0，即Δig\=0，Δvgs\=0。 若移a分量和−dis1s2/dt分量，则可得到初始功率模块的情况。结果表明，由ΔLs 引起的环流ic 在驱动源极电感Lk 上产生感应电压−2Lkdic/dt，进而导致驱动回路中的Δig 和Δvgs，最终形成动态电流差Δid。dic/dt为引起驱动回路差异和动态电流不平衡的主要因素。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNRctJkar2wQlpQQzu0bkKl2zkdFmmujP27ebkf28ficTzs5s3fyub6E8h1g291k9Q1V8ibbVib4svEjTnRwGEF59qvTQdfDEINqU/640?wx_fmt=png&from=appmsg)

DSI 方法旨在减小| dic/dt|，从而实现动态电流平衡，如图6 中a分量和−dis1s2/dt分量所示。DSI动态均流方法的作用机制可以解释如下：采用DSI后，引入了不平衡电感衰减系数a（0＜a≤1﹚和电流变化抑制分量−dis1s2/dt。这使得功率源极寄生电感差异降低至| aΔLs | ，同时流经驱动回路的环流变化率还要减小| dis1s2/dt|，因此，由ΔLs 引起的| dic/dt|减小。相应地，在驱动源极电感Lk 上产生的感应电压| 2Lkdic/dt| 也减小，进而减小了驱动回路差异| Δig |和| Δvgs |，最终实现了| Δid |的减小。采用DSI方法后，可以有效地减小| dic/dt|和| Δid |，从而实现更加平衡的动态电流。  

1.3动态电流不平衡机理的结论  

图6 中展示了ΔLs、dic/dt、Δig、Δvgs 和Δid 之间的关系。结合式（8）、式（11）和式（13）可知， 在开通时刻，ΔLs 与dic/dt同号；在关断时刻，ΔLs与dic/dt异号。此外，图6 中电路还表明dic/dt与Δig、Δvgs、Δid 异号。具体而言，当dic/dt＞0 时，Δig＜0，Δvgs＜0，从而导致Δid＜0；当dic/dt＜0 时，Δig＞0，Δvgs＞0，进而使得Δid＞0。基于上述动态电流不平衡机理，不同情况下的动态电流分布可以总结如下：  

（1）当Ls1\=Ls2，即ΔLs\=0 时，开通和关断时刻dic/dt\=0。此时，Δig\=0，Δvgs\=0，Δid\=0，即id1\=id2。  

（2）当Ls1＜Ls2，即ΔLs＜0 时，开通时刻dic/dt＜0，Δig＞0，Δvgs＞0，Δid＞0，即id1＞id2；关断时刻dic/dt＞0，Δig＜0，Δvgs＜0，Δid＜0，即 id1＜id2。  

（3）当Ls1＞Ls2，即ΔLs＞0 时，开通时刻dic/dt＞0，Δig＜0，Δvgs＜0，Δid＜0，即id1＜id2；关断时刻dic/dt＜0，Δig＞0，Δvgs＞0，Δid＞0，即id1＞id2。  

上述结论与文献\[24\]一致，即功率源极寄生电感越小，相应位置的MOSFET 的开通电流越大，而关断电流越小。该结论在优化功率模块和初始功率模块都成立。  

从图6 也可以得到| ΔLs |、| dic/dt|、| Δig |、| Δvgs |和| Δid |之间的大小关系。在其他参数一定时，| ΔLs |越小，则| dic/dt|、| Δig |、| Δvgs |和| Δid |越小。为了 获得较小的| ΔLs | 和| Δid | ，往往需要重新进行复杂的设计。然而，采用DSI 方法，不需要改变原有布局，| dic/dt|也将明显减小。因此，可以减小| Δig | 和| Δvgs |，进而减小| Δid | ，该方法简单有效。 此时，若Ls1s2 越小，a越小、| dis1s2/dt|越大，这将使得| dic/dt|越小，| Δid |越小，均流效果越优。  

2.DSI动态均流方法在功率模块中的实现  

采用DSI 方法的SiC 功率模块结构如图7 所示。模块中，高侧续流二极管VD 使用SiC 肖特基二极管（S6305），低侧开关使用两个SiC MOSFET（S4103）并联。为了实现动态均流，在相邻的芯片顶部通过键合线进行源极直连，互连的两端分别是相邻两个芯片的源极。该方法无须改变原有DBC基板和芯片布局，也无须额外添加大体积无源元件，因此具有高度的集成性和实现的简便性。此外，该方法便于和其他均流措施灵活结合使用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOLeIGOds7dJJEIZEIEY242NFPHOCo68M9VPrLicL2WdQzsO8Ol6rDFbEcfeLJLCOxftLibspxCmmjlvNjicYRfQjp2O0ct3n7LlI/640?wx_fmt=png&from=appmsg)

本文利用有限元仿真软件Q3D，提取了未采用DSI 时初始功率模块的寄生参数，具体参数见表2。 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtpl5ZySicrZic9bAcwdD9B8bmNEM1gB9oTSqYgWLlhcLDMuAodaMTW50aNgia6B6Q3aO9BTEAsuibv2VickyazYl5aqibFVGqY6KuU/640?wx_fmt=png&from=appmsg)

采用DSI 方法后，优化功率模块的内部新增了等效寄生电感Ls1s2，表3 展示了采用不同DSI 参数时，等效寄生电感Ls1s2 的数值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM3IhuIwJhRo0K1f4CQrPrRnnRkDUFKDzibZGWPF88hCBbJaM9Wqgw5t0sWldUibT6ZwDD6Boox5GDKx0LBDAKjAvnZ8e4FWEvdE/640?wx_fmt=png&from=appmsg)

当调整DSI 方法的键合线位置、数量或参数（如长度、高度和线径等）时， 引入了不同数值的等效寄生电感Ls1s2，从而实现了不同程度的均流效果，后续部分将通过仿真和实验来研究不同DSI 参数下的均流效果。  

为了研究不同寄生参数下的动态电流不平衡机理以及DSI 动态均流方法的有效性，需要制造多个功率模块。然而，这将耗费大量的时间、精力和材料。此外，不同功率模块使用的芯片也不一致，这将使得实验变量不唯一，从而严重影响实验结果的准确性和可靠性。鉴于此，本文从考虑实验的经济性、可重复性和准确性出发，选择基于分立器件并联电路进行研究。  

尽管实验采用了分立器件而非理论推导中的芯片并联，但通过合理的实验设计、严格的变量控制和精确的数据分析，实验结果仍然具有很强的说服力，能够有效验证功率模块中并联芯片的动态电流不平衡机理，以及DSI 方法的动态均流效果。  

为了等效反映SiC 功率模块的特性，本文设计的分立器件并联电路PCB 如图8 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPA0DZDwmbSTJFpxPDT2bj3Gmfl74o8CSCGbA2tnP0XX1mLPWF8yvicFq3Mf6e4nyMEfMuZ00tmKlwWzcLiaiaqM1TUr5ChCAyC1M/640?wx_fmt=png&from=appmsg)

实验中使用的器件（包括VD、Q1 和Q2）型号与功率模块中使用的完全一致。此外，设计了两个并联分立器件的PCB走线对称布局，并采用了相同的封装参数制造分立器件，从而确保测试回路的寄生参数保持一致。因此，可以认为两个并联分立器件的寄生电感差异取决于外部插入的电感差异，如图8 中点画线框所示，在功率回路（Ld1、Ld2、Ls1、Ls2、Ls1s2）处和驱动回路（Lg1、Lg2、Lk1、Lk2）处分别插入相应的外加电感，以等效不同参数下的功率模块。当Ls1s2 支路断开时，等效于未采用DSI 方法的功率模块；而在Ls1s2支路插入电感时，则等效于采用DSI 方法的功率模块。  

外加电感的数值由有限元仿真软件Q3D 提取的功率模块寄生参数结果确定。通过在Ls1 和Ls2 处分别插入不同组数值的功率源极寄生电感，可以研究不同模块参数下的动态电流不平衡机理；通过在Ls1s2 处插入不同数值的等效电感，则可以研究不同DSI 参数下的动态均流效果。在不同组实验中，只需要更换外加电感，而保持所用分立器件一致，使用并联分立器件的实验，不仅容易更换和控制电感值以验证结论，而且无需更换器件，测量过程也会更加灵活、方便和可靠。这在带有DBC 基板的功率模块中是相当困难的。同时，实验结论同样适用于功率模块。  

3.仿真验证  

为了验证动态电流不平衡机理和动态均流方法的有效性，本文在Pspice 软件中搭建双脉冲测试电路进行仿真。其中，通过有限元仿真软件Q3D 提取了功率模块和测试板的寄生参数，并用于电路仿真中，该仿真电路模拟了实际工况，精确反映了并联芯片的电流分布情况。通过将仿真结果与理论分析的结论进行对比，从而验证动态电流不平衡机理和动态均流方法的准确性和有效性。  

在Pspice 中搭建了测试装置的等效电路进行仿真和分析，如图9 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNNVha5tfj824OGlFShOyOgfPicFludq1cVHauIrbYpBw5DrrgTLzdPjoweP7WiaMIRugrpD81F4AUzicn243SBia1CAkI5sC8Odn4/640?wx_fmt=png&from=appmsg)

其中，功率模块的寄生电感，即为在功率回路和驱动回路插入的外加电感， 用Ld1、Ld2、Ls1、Ls2、Ls1s2、Lg1、Lg2、Lk1、Lk2 表示。不考虑互感影响。利用Q3D 提取了此部分寄生电感，见表2 和表3。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN9wUpfmkNPYpHHIcH5QQIvBgtRRegNqicGibD2q9st3CoQpzMQssdjZyKLzckWQ7DicFOiaUJU6U2USXia8P3FGWA3eR3pky8pRFZ8/640?wx_fmt=png&from=appmsg)

  
PCB测试回路走线的寄生电感部分用Ld1′、Ld2′、Ls1′、 Ls2′、 Lg1′、 Lg2′、 Lk1′、 Lk2′表示，含义见表4， 同样利用Q3D 提取了此部分寄生电感见表5，采用表2、表3 和表5 的参数进行仿真。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPGHnn8iackGN5SZ7Aic25zpqIG2qwkoHN5ticqIksHbm1C8R3xj1ibxib6JfbwfibCzy9y7OLQfbACichL5fw503F3x0oQGrfctVUMiaE/640?wx_fmt=png&from=appmsg)

此外，为保持与实验一致，仿真中的直流母线电压VDC 和负载电流Iload 分别为300 V 和60 A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRkt83W8ujSxwVoYvZGDGK54viaGmFiccleB2bExArfDnkqvVYPHIoD6GGFFQlhyL9PR5L0uUC0NCQX30ggwasw6S6Ohp9IbjTc/640?wx_fmt=png&from=appmsg)

通过移除Ls1s2 支路，仿真电路转换为初始功率模块的电路；而添加Ls1s2 支路后，仿真电路转换为优化功率模块的电路。  

当Ls1s2 选取表3 的最大参数12.5 nH 时，初始功率模块和优化功率模块的仿真波形对比如图10所示，无Ls1s2 支路时的仿真波形也在图10 中进行比较。由于Ls1＜Ls2，在关断时刻，dic/dt＞0，导致Δig＜0，Δvgs＜0，进而Δid＜0，即id1＜id2；在开通时刻，dic/dt＜0，导致Δig＞0，Δvgs＞0，进而Δid＞0， 即id1＞id2。在两种情况下，ΔLs、dic/dt、Δig、Δvgs和Δid 之间的符号关系都与动态电流不平衡机理的结论完全一致。然而，当采用DSI 动态均流方法后，开通和关断时刻的| dic/dt|都明显减小，驱动回路差异| Δig | 和| Δvgs | 也随之减小，最终动态电流差异| Δid |减小。这一结果与第1 节中DSI 动态均流方法的作用机制分析一致。因此，仿真结果验证了DSI动态均流方法的有效性。

4.实验验证

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNGvu3p717NLZTTic9WOGEZZkdjjkXhV6LCXcGvPhzN9mTew7W4QZpU9VysPKdNvhuP5vnTRibA5OlzViaWkucwJysDCaiakBecYf0/640?wx_fmt=png&from=appmsg)

实验测试如图11 所示。本文中，使用图11a 所示的测试电路，在不同电路参数值下进行双脉冲测试，以验证动态电流不平衡机理和DSI 动态均流方法的有效性。测试电路的PCB 布局设计详见第2 节，其结构为对称设计，为减小器件参数差异对实验结果的影响，使用Keysight B1505A 功率器件分析仪对芯片进行筛选，在相同测试条件下，最终选用SiC  MOSFETs 的参数见表6。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMNibK9rwsAIzTsTibVRFMRJ16VKtPx7dAIp5CQibRzrFcbc3EhFvOZW6eorFwibOyyha9zS12D3I9lFQN0iaEPIFX96ZRvndgvSDY4/640?wx_fmt=png&from=appmsg)

并联电路中每个支路都有焊盘连接到SiC MOSFET，在焊盘上焊接表2 和表3 中相应数值的空心绕线电感，如图11b 所示，空心绕线电感的数值由Q3D 仿真和环路分析仪Bode  100 测试确定。通过改变电感的参数，可以验证不同参数的影响，除考察的参数外，其他参数均控制不变，以确保不同实验间的一致性。

测试装置如图11c 所示。使用两个60A/30 MHz罗氏线圈分别测量MOSFETs 漏极端子上的电流id1和id2，以及两个30 A/30 MHz 罗氏线圈分别测量MOSFETs 栅极（或驱动源极）端子上的电流ig1 和ig2（或ik1 和ik2）。计算ic\=ik1−ig1。使用150 V/200 MHz电压探头测量MOSFETs 栅极和驱动源极端子上的电压vgs1 和vgs2。由于空心绕线电感会在回路中引入较大的寄生电感，造成较大的关断过电压。而且，在负载电流较大时，电感磁饱和影响实验结果。因此，实验直流母线电压VDC 和负载电流Iload 分别设置为300 V 和60 A。SiC MOSFETs 在该条件下能够完全开通，所以实验得到验证。  

当未采用DSI 均流方法，即不焊接Ls1s2 时，实验波形如图12 中黑色线所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQdpkm4Um4EQoGQHYvyWsshpNppCfia5J6pYZVmgbq2lUxxnNBmn3KmBupb1SVebvjRYOEIm3sfI7xq2GKLoZU9fh1ywLuSMKc/640?wx_fmt=png&from=appmsg)

由于Ls1＜Ls2，在关断时刻，dic/dt＞0；而在开通时刻，dic/dt＜0。在关断时刻，由于dic/dt＞0，导致Δig＜0，Δvgs＜0，进而Δid＜0，即id1＜id2；在开通时刻，由于dic/dt＜0，导致Δig＞0，Δvgs＞0，进而Δid＞0，即id1＞id2。实验波形与理论分析和仿真结果高度一致。  

当采用DSI 均流方法，即焊接Ls1s2 时，实验波形如图12 灰色线所示。在Ls1s2 取最大值的情况下，ΔLs、dic/dt、Δig、Δvgs 和Δid 之间的符号关系与理论分析和仿真结果完全一致。采用DSI 动态均流方法后，无论是在开通还是关断时刻，| dic/dt|都明显减小，同时| Δig |和| Δvgs |也随之减小，最终导致| Δid |明显减小。这与理论分析和仿真结果高度吻合，充分验证了DSI 动态均流方法的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMGjcw5dGk3M7GZGy31eTbr77mpZqJ1ia131hgibbq9nxpMzIFvq5bmQY2As6m2OHycs4gJyHjycRUib5Kn9vt3n4iafBDuxib5Eqts/640?wx_fmt=png&from=appmsg)

图13 进一步展示了在上述相同情况下，仿真波形和实验波形的对比。在仿真和实验波形中，ΔLs、dic/dt、Δig、Δvgs 和Δid 之间的符号关系与理论分析一致。在Ls1s2 取最大值（此时Ls1\=2.5 nH，Ls2\=8 nH，Ls1s2\=12.5 nH）的情况下，不平衡电感衰减系数a约为0.6。此外，部分动态电流将通过Ls1s2 支路流动，这些因素都使| dic/dt|减小，也使得DSI 动态均流方法具有较明显的效果，本文提出的动态电流不平衡机理和DSI 动态均流方法的有效性得到了充分验证。

尽管仿真与实验结果在整体趋势上保持一致，但两者之间仍存在一定的误差。为了更深入地理解实验设计的可靠性和结果的准确性，本文对误差源进行了详细分析，尤其是针对小电流测量中的误差，电流测量使用的是罗氏线圈，其精度和输出噪声限制了实际测量结果的准确性，特别是当测量小电流时，信号较弱，容易受到噪声的干扰，从而导致较大的误差。在本文中，使用了PEM 公司生产的罗氏线圈，其典型精度为±2%，且由于不期望的噪声，最大误差可达0.1～0.2 A。此外，外部电磁干扰和信号噪声对测量结果的影响也不容忽视，实验环境中存在的电磁场可能与测量电路耦合，引入额外的噪声信号，从而影响测量精度。仿真模型与实际实验条件之间的差异也是导致误差的另一个重要因 素，例如，仿真模型中的SiC 器件参数与实际器件参数并不完全一致。通过对上述误差源的详细分析，明确了仿真与实验结果偏差的主要原因，尽管存在这些偏差，但采用DSI 均流方法前后的波形变化趋势保持一致，这表明该方法具有较强的鲁棒性，从而达到了验证目的。  

通过调整Ls1s2 支路的电感值，可以实现不同DSI 参数下优化功率模块的动态均流效果，实验波形如图14 所示，初始功率模块的实验波形也用于图14 中进行比较。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMVibf60oovYtqd7EhdCHTiaFkQMmVMCkYbbThFuQicbFqiaxdypdXibCKcBScXCMJianhUlZ1lAEUdZ3ckO70frXzibjyeTDOLPbEdvU/640?wx_fmt=png&from=appmsg)

采用DSI 动态均流方法前，由于Ls1＜Ls2，在关断时刻，dic/dt＞0；而在开通时刻，dic/dt＜0。因此，在关断时刻，Δid＜0，即id1＜id2； 在开通时刻，Δid＞0，即id1＞id2。这一现象与动态电流不平衡机理的理论结论一致。采用DSI 均流方法后，无论在开通还是关断时刻，| dic/dt|都减小，进而使得| Δid |明显减小，且随着Ls1s2 减小，| dic/dt|进 一步减小，| Δid |也逐渐减小。这是因为Ls1s2 减小时，不平衡电感衰减系数a减小，功率源极寄生电感差异也随之减小。同时，Ls1s2 支路的阻抗减小，使得更多的动态电流流过Ls1s2 支路，从而增大了电流变化抑制分量| −dis1s2/dt| 。这些因素共同作用，进一 步减小了| dic/dt|，进而减小了| Δid |。当Ls1s2 足够小（Ls1\=2.5 nH，Ls2\=8 nH，Ls1s2\=1.25 nH）时，a约为0.1，| dis1s2/dt|达到最大值，此时，| dic/dt|几乎为0，id1 与id2 接近相等，| Δid |几乎为0，均流效果最佳。 这一结果与理论分析和仿真验证高度一致，充分证明了DSI 动态均流方法的有效性。  

为进一步论证DSI 动态均流方法的有效性，图15 对比了上述不同组实验下优化功率模块的最大动态电流差异Δid(max)。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMpBYiavo1nuJ7BCn8lUejSgybG9lMwu6aY2FOnCe6KbfJfIWzU3E6NVibOg0mPKLd1ajibFMibqXzmGcmdTE3icAVgHfNeraXRLnwE/640?wx_fmt=png&from=appmsg)

其中，0 组代表无Ls1s2 的情况；1～4 组分别代表Ls1s2\=12.5 nH, 8.0 nH, 5.0 nH,  1.25 nH 的情况。开通时刻的Δid(max)和关断时刻的Δid(max)符号相反，这是因为Ls1＜Ls2，在关断时刻，dic/dt＞0，导致Δid＜0；而在开通时刻，dic/dt＜0， 导致Δid＞0。此外，开通时刻的动态电流不均衡现象更为显著，采用DSI 均流方法后，最大动态电流差异| Δid(max) |至少减小了50%。随着参数Ls1s2 的减 小，| Δid(max) | 也逐渐减小。该过程的物理机制可以 解释如下：Ls1s2 越小，其支路阻抗越小，在开关瞬间有更多动态电流通过该支路，因此，动态电流在ΔLs 上感应的| Δvs |将减小，由Δvs 产生的环流也将减小，同时，阻抗减小的Ls1s2 支路也将承担更多的环流，最终使得一定时间内流经驱动回路的| ic |减小，在驱动源极电感Lk 上产生的感应电压| −2Lkdic/dt|也随之减小，进而减小驱动回路中的| Δig |和| Δvgs |， 最终显著减小动态电流差异| Δid |。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZsdliaPfficZv2CSpibbKF8V5xulbLfPwLxDTj1Qic6jziagVG7UDoslYCwwtsmdyX25vcu93sWVMkibb5g9raWW8sGwUfVmQjkaW4/640?wx_fmt=png&from=appmsg)

为研究DSI 动态均流方法对开关损耗差异的影响，图16 展示了不同DSI 参数下优化功率模块的开通损耗差异ΔEon、关断损耗差异ΔEoff 和总开关损耗差异ΔEtotal，ΔEon 和ΔEoff 符号相反，在某种程度下可以互相补偿。然而，开通损耗差异是造成总损耗差异的主要原因，ΔE随Ls1s2 参数值的变化趋势与Δid(max)一致，采用DSI 动态均流方法后，总开关损耗差异| ΔEtotal |至少减小了60%，随着Ls1s2 参数值减小，| ΔEon |和| ΔEoff |也减小，进而| ΔEtotal |也逐渐减小，最终，相比初始模块，优化模块的| ΔEtotal |减小高达95%，通过DSI 动态均流方法，总开关损耗差异| ΔEtotal |明显减小了60%～95%。因此，采用DSI动态均流方法后，可以有效地降低总开关损耗差异。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPXYf7dK46bgf5Gf4lG9WfCYmrKGw0nohq1drRmg9WNUY4fibGfTG7RdhDOLQk56ia1ZcUVny5FlibOVvJdxVSzpA87EF1oRib6Oy4/640?wx_fmt=png&from=appmsg)

为了评估DSI 动态均流方法对功率模块效率的影响，图17 展示了不同DSI 参数下优化功率模块的开关损耗，包括Q1 的开关损耗E1、Q2 的开关损耗E2，以及两者的开关损耗之和E1+E2。采用DSI动态均流方法后，E1随Ls1s2参数值减小而明显减小，E2 则随Ls1s2 参数值减小而明显增大。这一趋势使得E2 逐渐接近E1，E2 的增大速度略高于E1 的减小速度，使得E1+E2 略微增加。采用DSI 动态均流方法后，总开关损耗E1+E2 仅增加了3%～5%，优化功率模块的开关损耗与初始功率模块相比仅略有增加，说明DSI 动态均流方法基本不会降低功率模块的效率。因此，DSI 方法在实现动态均流的同时，能够有效地保持功率模块的效率水平，兼具均流效果和效率平衡的双重优势。  

5.DSI动态均流方法在较多芯片并联功率模块中的应用  

为了进一步验证DSI 动态均流方法在较多SiC  MOSFETs 并联时的有效性，本文对一个常见的多芯片并联半桥模块进行了优化设计。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO6MxtFiaFbbJgHmsOot61t7rSiaP2ZpZm4HkDKuBPluSaLN0rFMMw5Oqr9sib1ibazWgX10uWiaTy7ojGZgvwOnvQ2zDlygkSD0fxo/640?wx_fmt=png&from=appmsg)

该SiC 模块的结构如图18a 所示。高侧续流二极管使用6 个SiC 肖特基二极管（S6305）并联，低侧开关使用6 个SiC  MOSFETs（S4103）并联，构成1 200V/600A 大功率模块。并联的SiC MOSFETs 均采用了开尔文源极连接，点画线框中显示了DSI 动态均流方法在功率模块中的简单应用，该方法无需改变DBC 基板和芯片布局，也无需外加无源元件，较容易集成，便于和其他方法结合，实现简单。图18b 展示了该模块的简化等效电路模型，DSI 动态均流方法的等效寄生参数被特别标出，其他寄生参数未被标出。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPJhN7ShK7AOISHJ4jm1uVjhavPq8sx9pPA1AonohicbgmsSOdfC66s0K88GiaCAnUcDjnjibP1bV76FdhwC0BeTafMfbnUDpBFK4/640?wx_fmt=png&from=appmsg)

基于有限元仿真软件Q3D 和电路软件Pspice的电磁耦合仿真方法，已经被广泛用于分析多芯片功率模块中的均流情况，因此，利用Q3D 提取功率模块的寄生参数网络，在Pspice 使用提取的寄生参数网络和器件模型进行双脉冲测试。低侧MOSFETs 作为有源开关电磁耦合仿真拓扑如图19 所示。通过改变模型结构进行仿真，可以得到采用DSI动态均流方法前后的仿真波形。仿真直流母线电压VDC 和负载电流Iload 分别设置为800 V 和600 A。Q1～Q6 的漏极电流分别表示为id1～id6。采用DSI 动态均流方法前后，Q1～Q6 的仿真波形如图20 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOhq9PfrM2nGKTRiaBthoKd9LSA8VbZljDJb16iatdxmnwHaNOkT5ha6WKRCdiaH9Pqjb4mKzZpibD3IKqFX2d8epRLOsH3qO31F5E/640?wx_fmt=png&from=appmsg)

图20a 展示了未采用DSI 均流方法时的开通和关断波形，尽管采用了开尔文源极连接，动态电流的差异仍然显著，开通时刻的动态电流最大差异为92.55 A，占Iload/6 的92.55%；关断时刻的动态电流最大差异为47.39 A，占Iload/6 的47.39%。简单采用DSI 动态均流方法后，等效寄生电感Ls1s2 的电感值为b。此时开通和关断波形如图20b 所示，可以看到，动态电流不平衡现象得到了显著改善，与初始功率模块相比，开通和关断时刻的动态电流最大差异分别减小了40.65%和35.58%。进一步调整DSI的参数，使等效寄生电感Ls1s2 电感值减小到c（c＜b﹚，此时，动态电流差异可以进一步减小，如图20c所示。与初始功率模块相比，开通和关断时刻的动态电流最大差异分别减小了56.63%和41.34%，因此，通过调整DSI 的参数来减小Ls1s2，如改变键合 线位置、增大键合线的线径、减小键合线的长度或增加键合线的数量，可以显著提升均流效果。DSI动态均流方法在较多MOSFETs 并联时的有效性得到了验证，在后续的研究中，将基于上述仿真结果，开展一系列实验，以进一步验证DSI 方法在更多芯片并联功率模块中的有效性。  

上述结果表明，在多芯片并联应用中，DSI 方法相较于传统的开尔文源极连接法展现出显著的性能优势。尽管开尔文源极连接能够优化单个芯片的开关性能，但在多芯片并联时，其动态电流不平衡问题仍然突出，相比之下，DSI 方法可以进一步有效缓解功率回路和驱动回路之间的电流耦合现象，减小驱动回路差异和动态电流差异，从而显著改善动态电流的不平衡。同时，该方法也兼具开尔文源极连接法的优点，能够提高芯片的开关速度并降低开关损耗，此外，DSI 方法简化了封装设计，降低了系统复杂性和成本，它仅需增加一步键合工序，无需改变功率模块的整体布局，也无需额外引脚，这使得DSI 方法在实现上更为简洁高效。因此，在高功率密度和高频应用场景中，DSI 方法不仅能够满足多芯片并联的动态均流需求，还具备更低的实现成本，使其成为一种更具优势的解决方案。  

本文中，虽然重点探讨了DSI 方法在动态电流平衡方面的优势，但对系统可能出现的电磁干扰（Electromagnetic Interference, EMI）问题尚未进行深入探讨。例如，额外的键合线可能会增加寄生电感，导致高频噪声和电压尖峰，DSI 方法改变了电流回路的布局，可能会增加共模干扰的风险，尤其是在高频开关应用中，额外的键合线可能成为磁场耦合的路径，影响周围元件的稳定性。为降低DSI方法可能产生的EMI 问题，可以考虑以下优化方向：首先，采用低噪声互连技术，如柔性PCB 或铜夹片（Cu-Clip），以减少寄生电感和高频噪声；其次，通过调整栅极驱动电路中的电阻，适当降低开关速度，从而减少高频噪声，但需权衡开关损耗与EMI 之间的关系；最后，通过这些措施，可以在保持DSI 方法优势的同时，有效降低其对EMI 的影响，从而提升系统的电磁兼容性。  

6.结论  

本文提出了一种针对功率模块中并联SiC  MOSFETs 的动态均流方法，即在SiC MOSFETs 的源极之间进行直连（DSI）。首先，通过电路建模和数学分析，推导了在采用DSI 方法和未采用DSI 方法时，并联SiC MOSFETs 的动态电流不平衡机理，该机理表明，在具有开尔文源极连接的并联SiC  MOSFETs 电路中，功率源极寄生电感差异ΔLs 会在开关瞬间产生环流ic，进而引起功率回路和驱动回路的电流耦合，这对并联SiC MOSFETs 的瞬态电流分布具有显著影响。具体而言，ΔLs 会引起dic/dt，进而导致驱动回路中的差异Δig 和Δvgs，最终形成动态电流差异Δid。在开通时刻，ΔLs 与dic/dt同号；在关断时刻，ΔLs 与dic/dt异号，而dic/dt则始终与Δig、Δvgs 和Δid 异号，因此，dic/dt是引起驱动回路差异和动态电流不平衡的主要因素，| dic/dt|越大，| Δig |和| Δvgs | 越大，| Δid | 也越大。通过仿真和实验共同验证了动态电流不平衡机理的准确性。  

基于动态电流不平衡机理，本文进一步分析了DSI 动态均流方法的作用机制。研究结果表明，该方法可以显著减小| dic/dt| ，从而缓解ΔLs 引起的功率回路和驱动回路之间的电流耦合，实现动态电流平衡。该方法仅需增加一步键合线互连工序，无需额外的复杂操作，因此成本低廉且容易实现，与传统的多芯片功率模块的制造工艺兼容性好，仿真和实验都验证了该动态均流方法的有效性。采用DSI动态均流方法后，并联SiC MOSFETs 的动态电流差异和开关损耗差异都减小了50%以上，动态均流效果显著。最后，本文还在具有更多芯片并联的功率模块中验证了该方法的有效性，值得注意的是，该均流方法同样适用于无键合线模块（如双面冷却模块和压接模块），只需改变DSI 的实现方式（如采用铜夹片、钼块和银垫片）即可。

附录  

运用拉普拉斯变换，式（1）变换为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMsHoMVC0dhU97PPv2bFsXJ2ecmsia49p754YTTV6MlFPrRJ5fuA2sttsiaOicAibfOW35gw0fZ7EHHuIGFJqN34PQYbQ7zzvwoPUc/640?wx_fmt=png&from=appmsg)

式中，s为拉普拉斯算子。运用拉普拉斯变换，结合式（3）、式（4）、式（7） 和式（8），变换得到

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPqcokNjo4WgFTCEPw9SWGXkA1WQ146FibuF1wJL3Nqgsnh7eLc8UNCWb2ibqW1ULkibfJMs2aAC2G1TldMZYK1QByMwPgL2ITXtw/640?wx_fmt=png&from=appmsg)

运用拉普拉斯变换，结合式（5）～式（8），变换得到

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMhoqicGMOHDjM8BkMtyib18z0MgSOq4J3O73ic9LC6veGF0bs9m2y9w4dT86gsUxcDvCmhnmp7MVFTsfZaic6g5Bfsx84a97yY8fc/640?wx_fmt=png&from=appmsg)

而且，由式（6）～式（8）可以得到

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpONhT4eOI3ARt574rx5eVj243WTJTgw07zib97WAzNicaAWtLqkWQFbl6p6CiaH3ZPjcaNLleBZlhVBVMZPlUEW677YWqKW5HmTeo/640?wx_fmt=png&from=appmsg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpP6RlqWMIBnxPoibbUGqUxpkh56xazywYsb59ibExzic0k9tENW42HuxaCgqQhGU8FJadCfzpV6bgeiavfBssb5Xg8EibCEVGdMN4Cw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUL1w4QGqv7h9617YNtLkkv513uDozjGRRTmq3UcsW5smvHQuwW2aSvtN758wOPQZGqjiaO582gUCVNVj2lxvkm6KlpSqsObnI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOTJicltorovHQB4aybK2GvPogs61NENFt6IJzPwzFZZ0FSPmNuDOcXkCicJagkHxncpa92xFkGZBRpcjx8WzSu7lm22TcU4bUY4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNDjpSlwOrYdtSpiblj3RcOk4qEY3hQAGKvEho58icO9pUEZbXcJAAzSMVIJvtTqgTNiaxiawh7NCfIJWpyJjN2RCkQXtJfGyhIjww/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)