# 基于换流–短路双回路解耦的 SiC MOSFET 功率器件抗短路封装构型设计


> 原文地址: [https://mp.weixin.qq.com/s/7GnoFr0mbDpX95\_Tj8t1JA](https://mp.weixin.qq.com/s/7GnoFr0mbDpX95_Tj8t1JA)

文章来源：中国电机工程学报

作者：罗皓泽，高洪艺，朱安康，金昱廷，李武华\*，何湘宁(浙江大学电气工程学院，浙江省 杭州市310027）

摘要：由于栅极氧化层可靠性差、短路电流密度大以及短路结温上升速率高，SiC MOSFET功率器件的短路耐受能力较弱，制约着其在电能变换领域的广泛应用。在此背景下，为了提升SiC MOSFET功率器件的短路耐受能力，文中基于换流–短路双回路解耦的思想，设计出具有抗短路能力的SiC MOSFET功率器件封装构型。该构型将半桥中的两个换流回路在功率器件内部解耦，两换流回路的中点各自连接一个交流功率端子(AC+、AC-)。与现有半桥封装构型相比，抗短路构型功率器件的换流电流路径和换流电感Lσ不变，而当发生桥臂直通短路故障时，短路电流因需要额外流经AC+和AC\-交流功率端子而延长了短路路径，同时DC功率端子与AC功率端子之间的互感进一步增大了短路回路电感Lsc。基于34mm封装构型设计制造具有抗短路极限工况能力的650V/162A SiC MOSFET功率器件，其短路故障回路电感达到了115nH，是正常换流回路电感的3.6倍；并且，通过短路实验验证所设计的构型相比于现有设计，短路电流峰值降低了20.07%，发热功率降低了21.41%，短路过程中的总发热量降低了30.04%，验证了所设计封装构型具有一定的抗短路性能。

关键词：换流–短路路径解耦；短路电感；短路抑制

0. 引言

SiC MOSFET具有耐高温、高压，导通损耗低及开关速度快等优势，能够提高电力电子装置的功率密度和运行效率，有望在可再生能源、电气化交通、消费电子产品等领域逐步替代硅基绝缘栅双极性晶体管(insulted gate bipolar transistor，IGBT)，但是由于单次短路承受时间短和重复短路测试易导致器件栅极退化，短路耐受能力弱成为制约SiC MOSFET功率器件广泛应用的主要因素之一。

相比于同电压/电流等级的Si IGBT，SiC MOSFET的短路电流峰值更高，可达其额定电流的十倍，继而发热功率远超Si IGBT；在此基础上，SiC MOSFET芯片面积相对Si IGBT小，散热能力较差，使得其短路时结温的上升速率更快，约为SiIGBT的数十倍。综上分析，大电流密度和高结温上升率两方面综合作用导致SiC MOSFET短路耐受时间普遍低于Si IGBT，根据文献\[2\]中的对比结果，电压/电流等级为1200V/25A的SiC MOSFET和Si IGBT的最大短路耐受时间分别为7.7μs和40μs。并且，由于实际应用电路中无法避免地存在寄生参数，高速开关动作会使SiC MOSFET功率器件在运行过程中面临更大的串扰电压，极易引发桥臂直通短路产生大量热量，进而器件失效，增加系统运行风险。因此，研究提高SiC MOSFET短路可靠性的方案至关重要。

国内外研究团队针对SiC MOSFET短路特性展开了研究。文献\[5-6\]评估了栅极电压、环境温度和直流母线电压对芯片短路耐受能力的影响，其中文献\[6\]还建立了热仿真模型用于计算芯片的短路耐受时间；文献\[7\]探究了芯片短路的物理机理，从微观载流子角度解释了短路过程中电流呈现出的变化趋势；文献\[8\]通过实验解释了SiC与Si器件在短路工况下电、热特性与失效机制上的差别；文献\[9\]探究了短路回路电感对芯片短路电流峰值、上升速率、短路损耗的影响，并设计电流源驱动器实现了短路保护；文献\[10\]针对SiC MOSFET设计了退饱和、固态断路器以及故障电流评估等3种保护电路。综上所述，现有关于短路的研究主要集中在短路特征影响因素、短路失效模式与机理以及短路保护方案等方面。其中，短路保护主要依靠驱动电路设计实现被动短路保护，而较少研究通过器件封装优化设计来主动提升器件抗短路能力。

此外，当前功率器件封装的电特性优化目标主要围绕以下两方面展开：1）提高并联芯片之间的均流性能；2）减小芯片关断电压过冲。例如通过优化绑定线落点、修改芯片排布位置等方式提高并联芯片驱动/功率回路阻抗的均衡性，进而提升并联芯片的均流性能；通过划分P-cell与N-cell铜层区域、设计双回路铜层布局、叠层功率端子/衬底等手段来降低换流回路电感Lσ，以减小芯片关断电压过冲。然而，在现有半桥功率器件构型中，桥臂直通短路回路与换流回路路径长度和回路面积基本一致，短路回路电感Lsc和换流回路电感Lσ大小基本相等，因此在优化Lσ时Lsc会一同降低。短路回路电抗的降低将导致发生短路故障时，短路电流和芯片结温的上升速率和峰值增大，降低功率器件的短路耐受时间，最终引发失效。综上分析，目前功率器件短路保护研究缺少封装主动抑制短路方案，同时封装的电性能设计难以实现器件短路耐量和关断电压过冲之间的协同优化。

本文从封装角度优化SiC MOSFET功率器件的短路耐量，基于换流–短路双回路解耦的思想设计出具有抗短路能力的功率器件封装构型；相比于现有封装构型，本文设计的构型将正常换流回路和故障短路回路解耦，在不改变换流回路电感的前提下，延长短路电流路径，同时利用直流功率端子和交流功率端子之间的互感效应进一步提高Lsc，最后通过对比实验验证抗短路封装构型对短路电流峰值、短路功率峰值及短路能量的抑制效果。

1. 器件封装电感设计对短路抑制机理分析

功率器件的短路类型分为两种，分别是硬开关短路(hard switching fault，HSF，也称I类短路)和带负载短路(fault under load，FUL，也称II类短路)。HSF是指功率器件在开通前，回路已经发生短路，即器件开通前后持续承受母线电压，并且器件电流上升至短路电流。FUL是指功率器件在导通过程中回路突发短路，使功率器件电压瞬时升高至母线电压的故障形式，并且器件电流由负载电流上升至短路电流。HSF和FUL是最常见的短路形式，因为当半桥功率器件受到串扰电压、电磁干扰或门极电压振荡等因素影响发生桥臂直通故障时，上/下桥臂芯片会分别处于HSF/FUL短路状态，如图1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUricaKDQNGRQBY000JVX53UrU51ibkhLpnQXCkmZ5cF1GXdIqrXgKiaia6Q/640?wx_fmt=png&from=appmsg)

由于器件始终在承受母线电压的状态下开通、关断，相比之下，HSF是更加严苛的短路故障工况，其运行工作点轨迹如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUpDzh3JA1Phr3AvEX8rYPsH4yRmIv25HkaGO6NWJnfOFXFhSv6oPs8Q/640?wx_fmt=png&from=appmsg)

1.1短路回路电感对电流上升率的影响

短路电流上升率的降低可减慢短路电流上升阶段的发热功率和芯片结温的上升速率，减少热量聚集，增大短路耐受时间，从而提高功率器件的抗短路能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUNYtJeXxhkicCMdkz6NjJ4VvTxK4clkyXc6icIhRkJRQgy1rv3Hv5mSibA/640?wx_fmt=png&from=appmsg)

如图1所示，短路回路电感Lsc包括测试平台的寄生电感Lt和功率器件自身的短路回路电感Lsc,m两部分；在现有功率器件构型中，Lsc,m与换流电感Lσ大小近似。HSF短路电流上升速率的影响因素与正常开通时相同，包括驱动电压、驱动电阻、阈值电压、芯片跨导、密勒电容以及回路电感等。短路回路电感Lsc越大，短路电流上升速率逐渐越低；当Lsc进一步增大时，漏源电压vds下降直至芯片进入欧姆区，其工作点变化轨迹如图3所示，此时电流上升率完全由母线电压VDC和Lsc决定：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUWkS47gY4HgSxbuMib6Sibwibv5eahd4bJpCHljBpTAicTJ3oicsfJmibvMlA/640?wx_fmt=png&from=appmsg)

当FUL故障发生时，由于功率芯片运行于欧姆区，vds\=Vds,on，短路回路电感Lsc上电压为VDC-Vds,on≈VDC，因此电流上升速率did/dt完全由VDC和Lsc决定。

文献\[9,17\]通过实验进一步证明了短路回路电感Lsc对HSF和FUL两类短路故障中电流上升率的抑制作用。综上分析，提高Lsc是降低电流上升速率的有效手段之一。由于测试平台确定后其寄生电感已确定，因此本文将聚焦于封装构型优化设计来提高功率器件自身的电感Lsc,m，进而提高SiC MOSFET功率器件的短路耐受能力。

1.2 抗短路半桥功率器件构型

以带有反并联二极管的SiC MOSFET功率器件为例，本节将介绍具有抗短路能力的半桥功率器件构型，并分析其换流–短路双回路解耦的衍生过程，如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUYHw5RgnTeFBWH9TC05ibTWoIm0SiaW3CFnrVIbOWV4MW3fEShZDkIkPg/640?wx_fmt=png&from=appmsg)

1）衍生过程a→b：图4(a)为现有半桥功率器件构型，具有DC+、DC-和AC等3个功率端子。正常运行时，换流电流路径包括了DC+、DC-两功率端子以及陶瓷衬底铜层，路径包络面积决定了换流回路电感的感值大小。当发生桥臂直通短路等极限工况时，失控电流由DC+端流入DC-端口流出且不流经AC端子，短路回路电感与换流回路电感基本相等，短路失控能量回路电抗极低，幅值为欧姆级，大量短路能量集中在器件内部释放。

由图4(b)所示构型，为了优化现有半桥功率器件构型的换流回路电感，在陶瓷衬底铜层上划分P/N换流单元，并调整有源/无源芯片间的相对位置缩短换流回路长度，实现了换流电感的降低。而当发生桥臂直通短路时，短路能量依然集中在器件内部释放，同时由于短路电感随换流电感的降低而减小，短路能量在器件内部的释放更加剧烈，对器件的伤害可能会更加严重。

2）衍生过程b→c：为了充分发挥芯片的功率输出能力，需要提高功率端子的载流能力，图4(c)所示的功率器件构型在图4(b)的基础上增加了一个AC功率端子，两个AC功率端子在功率模块内部直接相连于换流回路的中点位置。在该种构型下，交流输出电流平均分配在两个AC功率端子上，降低了功率端子温升；但是，换流电流以及短路电流均不流经AC功率端子，因此换流回路和短路回路电感不变，短路能量直接释放在功率器件内部。

3）衍生过程c→d：为了提高功率器件的短路耐受能力，同时不增大换流回路电感，本文利用换流–短路双回路解耦的思想从封装优化角度提高功率器件的抗短路能力。如图4(d)所示，该构型遵循阻感型负载上下对管的换流规律，两换流回路在功率器件内部解耦，将负责交流输出的功率端子AC在器件内部一分为二，AC+端子主要负责上管MOSFET与下管二极管(Diode)换流输出，AC-端子主要负责下管MOSFET与上管Diode的换流输出。正常交流工况输出时，将AC+和AC\-功率端子直接相连，则抗短路功率器件构型与现有构型的换流回路电感及其他电气输出特性基本无异；在AC+和AC-之间连接合适大小的电感，还可实现开关特性的优化。当发生关断失控或者开通直接短路等异常极限工况时，失控能量将由AC+端子流出，流经外部电路后，再通过AC-端子流回器件内部，一方面延长了短路电流路径的长度，增大了短路回路电感，抑制短路电流的上升速率，进而降低芯片温升速率和峰值，提高功率器件的短路耐受能力；另一方面，由于AC+端子和AC-端子在模块外部连接，因此短路能量无法在模块内部形成直接贯穿通道，从而避免了失控能量集中在器件内部释放，降低短路对功率器件的损坏。

2. 短路回路电感优化设计研究

本节基于商用34mm半桥功率模块，探索在有限空间内增加功率器件短路回路电感的优化方向，研究通过互感增强原理实现短路回路电感进一步增大的设计方法。

图5(a)为常见的34mm半桥功率模块外貌，图5(b)所示其换流回路电感与短路回路电感基本一致，约为32nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU6o5LjCG9oA3eMNDzA6W6ib1qKGcT5rVSDNuTkNhicSKgudjFeIEu8Rkg/640?wx_fmt=png&from=appmsg)

功率器件开关过程中的等效频率计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUjKSM2ELmovDKH6pbia30ryJicnwXr7BT58et8x24O9W9z1rmjoIqVKgA/640?wx_fmt=png&from=appmsg)

式中tr为电流上升时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUIOlicBjd1gswibW5ONLroJe4zMialDMjIVvbFaVM8hWZicFXmDryicp8rsw/640?wx_fmt=png&from=appmsg)

如表1所示，当前硅基、碳化硅基功率器件电流上升时间分布在0.015~0.2μs，等效激励频率为1.25~16.7MHz，因此可选取10MHz作为提取频率，利用有限元电磁仿真工具Q3D得到34mm功率模块的衬底电感和功率端子电感大小相当，分别占总短路回路电感的54%和46%。如图5(b)所示，衬底上短路电流路径与换流回路1、2均有交叠部分，若通过改变衬底铜层走线来提高衬底电感，势必会导致换流电感的增大。因此，提高Lsc需要从改变短路电流路径上的功率端子结构、数量以及间距等方面实现。

如式(3)所示，当两平行放置导体中的电流方向相同时，导体的等效电感等于自感与互感的和：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUjtnXkaQrodRus2aJJMjhe3aynSOhiaD0CLFdO09zguEMzpRNicJeaic7w/640?wx_fmt=png&from=appmsg)

式中：l、w、t、d分别为两平行导体的长度、宽度、厚度以及间距；μ0为真空磁导率。

图4(d)所示的构型已经通过增加短路电流路径上的功率端子数量提高了其自感。进一步增大短路回路等效电感，还可通过以下3种方式：1）延长功率端子的长度增大自感；2）利用流通同向电流的功率端子形成互感；3）减小同向电流功率端子之间的间距增大互感。图6为34mm功率模块的功率端子示意图，由于模块高度已确定，其功率端子的长度难以再增加，故只能通过改变互感来增大功率端子的等效电感。然而，在改变功率端子的相对位置时可能会带来换流回路电感的增大。因此，在保证不增大换流回路电感的前提下，如何放置功率端子使互感效应明显，同时设计出与之适配的衬底结构，是优化功率器件抗短路能力的挑战。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU5TKcMHHCBiaT4icptwdkL2LKoLoUkHTr6ZT5KU8CtjRMxVAAfdrThHPQ/640?wx_fmt=png&from=appmsg)

3. 抗短路功率器件的构型设计

本节基于图4(d)设计出两款换流–短路双回路解耦的650V/162A SiC MOSFET半桥功率器件，搭载中电五十五所650V/81A SiC MOSFET和米兹米650V/150A硅基二极管，如图7所示。其中，图7(a)构型相比于图5(b)现有构型，保持了DC+和DC-功率端子的相对位置，以保证器件的换流回路电感不变，同时增加了一个AC功率端子，以延长短路回路路径，增大器件自身短路电感。图7(b)中DC+和DC-相对位置及换流电感不变，并在图7(a)的基础上将DC+和AC-功率端子、DC-和AC+功率端子并列放置，利用功率端子之间的互感增强效应进一步增大了器件自身换流电感；其中，为保证绝缘间距，设定并联放置的两对功率端子之间间距为1.5mm。功率器件所采用的功率端子、陶瓷衬底的尺寸均与市面上34mm功率器件一致，尺寸如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU5YpgpsGqYSHTlltWs1EWu0RMrR7MIibHVDMcr73Lw8vDpXJzzzRu3dw/640?wx_fmt=png&from=appmsg)

图8所示为现有构型、无/有功率端子互感增强效应的抗短路功率器件的桥臂直通短路电流路径示意图。为便于区分电流路径，图中将从AC+功率端子流出的电流标注为蓝色。由图可知，抗短路功率器件构型延长了短路电流路径，同时实现了邻近功率端子流通同向电流的设计，以达到利用互感增大等效电感的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUM5ykk2Xyk7kazR0ZMiampeNLgXLH6DLfueRaiaR0onrDrtYMq0NHB5Qw/640?wx_fmt=png&from=appmsg)

利用有限元仿真工具ANSYS Q3D提取图7中两种半桥功率器件构型在10MHz下自身的换流电感和短路回流电感，提取结果如图9所示，无/带功率端子互感增强效应器件构型的换流回路电感基本一致，为32nH；无功率端子互感增强效应器件构型的短路回路电感为48nH，相比于现有构型增大了50%；带功率端子互感增强效应器件构型的短路回路电感为115nH，相比于无功率端子互感增强效应构型及现有构型的短路回路电感分别增大了140%和259%。下文将以带功率端子互感增强效应器件构型作为研究对象进行打样及实验测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUQrmbFwr4qI8Z4XvZatHyTdnKkvRzkr7uHFPIcL3pHZNUUL8XMKB02w/640?wx_fmt=png&from=appmsg)

4. 实验测试

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUMibOPW6Bv8ZStNyCZyl2otfQRibNKj5XkYmx0PnH4IuhS82YD55L9e8Q/640?wx_fmt=png&from=appmsg)

本节将通过实验测试提取功率器件的换流回路电感和带功率端子互感增强效应的抗短路功率器件构型对短路电流、功率峰值和短路能量的抑制作用。图10为打样的两款功率器件，其基本电气参数如表3所示。此外还搭建了如图11所示的双脉冲及短路测试平台。其中：母线电容的容值为1520μF；负载电感的感值为500μH；示波器采用泰克MSO58，带宽350MHz；电流传感器采用同轴电阻T&M 2M-2；电压探头采用SI-9010A，带宽为70MHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUYgicicGCdfR8DAJOwjjWJPvSWGREKea7v5quVMLia3TXDZ3anfVB6icezA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUjwGL6qpdmM65z4WFfrE6fAb3h7NkK2Dmvc12LLM0l18wlxdVE6loMg/640?wx_fmt=png&from=appmsg)

首先通过双脉冲测试评估现有构型和抗短路功率器件构型的换流回流电感，测试抗短路功率器件构型时将AC+和AC-功率端子连接后，再与负载电感连接即可。在母线电压300V，负载电流50A的工况下，计算得到现有构型与抗短路功率器件构型的换流回路电感分别为34.2、32.6nH，与仿真结果分别相差4.87%、0.40%，误差在5%以内。同时，图12为两种功率器件正常开通、关断时的漏源电压、漏极电流和栅源电压波形，由图可知，抗短路功率器件可实现可靠的开通、关断控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUHfT5ZgFibLeXLTAsIJTMUW6jViaLEwdEUQK8QmVpvFeuX3VRcsmgIPWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUJdbPqwIPVMvBmAfiaV486exVGrt9IU3k7tiamYcbxiakPErAwDtciapLLA/640?wx_fmt=png&from=appmsg)

并且，现有构型和抗短路构型功率器件的最大电压过冲值分别为372.28、369.22V，仅相差0.82%，进一步说明了抗短路功率器件构型未给换流回路引入额外电感。研究指出，由于SiC MOSFET功率器件的米勒电容值较小，HSF和FUL两类短路的电流波形相差不大，因此，本节仅进行HSF短路测试。短路测试时移除负载电感，利用导线在器件内部将上桥臂MOSFET的漏极、源极短路，以下桥臂芯片为被测器件。驱动电压选择为12V/\-4V，驱动电阻Rg,on\=1Ω，Rg，off=51Ω，母线电压300V，短路时长为1μs。两种器件的短路电流、功率和电压波形对比如图13所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUo1MbjJAneNqnqLBzXIkzhx1vhHs9RjgvHibTxwqB9AQeW91dj77gLow/640?wx_fmt=png&from=appmsg)

两种功率器件的电流、电压、功率峰值以及短路能量如表4所示，抗短路功率器件构型使得短路电流峰值降低20.07%，减小了功率器件承受的电流应力；功率峰值降低21.41%，抑制了芯片结温的上升速率；短路过程中的总能量降低30.04%，降低短路过程中的芯片结温峰值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUVRj2Tiac83CFUibqjdv2jYqtu5tbooatf4m84pjwpzuRXtkd9IoROMnw/640?wx_fmt=png&from=appmsg)

5. 结论

1）本文基于换流–短路双回路解耦的思想设出具有抗短路能力的功率器件封装构型。在功率器件内部解耦了两个换流回路，区分开正常运行和短路故障工况下的电流路径，打破现有功率器件设计时需要面临的“换流回路电感”与“短路耐受能力”之间的折中关系，实现了两者的协同优化。

2）利用解耦设计概念，本文基于34mm模块封装设计制造了具有抗短路能力的SiC MOSFET半桥功率器件。在换流回路路径长度及电感Lσ保持不变的前提下，通过在短路回路中引入AC功率端子延长了短路电流路径，同时利用DC+与AC\-，DC\-与AC+功率端子之间的互感增强效应进一步增大短路故障回路电感，最终Lsc升高至115nH，比现有构型提高了259%。

3）实验结果表明，相比于现有功率器件构型，采用换流–短路双回路解耦设计后，可以使功率器件在正常关断电压过冲基本不变的基础上，短路电流峰值降低20.07%，短路功率峰值降低21.41%，短路总能量减小30.04%，实现了延迟芯片结温上升，增大了功率器件的短路耐受能力的效果。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)