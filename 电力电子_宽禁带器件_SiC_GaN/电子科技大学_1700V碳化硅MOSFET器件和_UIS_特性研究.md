# 电子科技大学：1700V碳化硅MOSFET器件和 UIS 特性研究


> 原文地址: [https://mp.weixin.qq.com/s/emSQoyxyYGgKQDJZO0\_c2A](https://mp.weixin.qq.com/s/emSQoyxyYGgKQDJZO0_c2A)

**摘 要：**碳化硅（SiC）材料作为第三代宽禁带半导体材料，以其为衬底制备的金属氧化物半导体场效应晶体管（Metal-Oxide-Semiconductor Field Effect Transistor，MOSFET）具备优越的性能。然而，在功率转换领域应用中，MOSFET 在关断瞬间，外接或寄生的电感存储的能量通过功率器件释放，迫使器件发生雪崩击穿，产生的高压大电流冲击极易造成器件失效。值得注意的是，SiC 材料的介电常数约为二氧化硅（SiO2）的3 倍，因此在雪崩状态下，MOSFET 氧化层承受的电场强度远高于 SiC 的电场强度，这使栅氧化层面临严峻的可靠性挑战。利用非钳位感性负载下的开关过程(Unclamped Inductive Switching，UIS)可模拟器件在系统应用中所承受的极端电应力情况，可用于评估器件的抗雪崩能力。本文旨在设计一款1700V SiC MOSFET 器件，并针对其 UIS 动态特性进行研究，以提高 SiC MOSFET器件的雪崩鲁棒性。

本文首先利用半导体数值分析工具 Silvaco TCAD 设计优化了 1700V SiC MOSFET 器件元胞结构的物理尺寸参数，包括器件漂移层区的掺杂浓度和厚度、N+/P+源区和 Pbase 区的浓度分布、JFET 区的宽度和掺杂浓度等，着重研究了器件导通电阻和击穿电压与器件结构参数的相互关系，获得的 SiC MOSFET 器件的漂移区掺杂浓度和厚度分别为 6e15cm\-3和 14μm，JFET 区域宽度为 2μm，栅氧厚度为 60nm。接下来对多区缓变间距场限环终端结构展开了研究，获得了 2180 V 的反向阻断特性。

其次，本文研究了 SiC MOSFET 器件结构特点及其 UIS 失效机理和模式，获得了不同物理结构和电路参数对其特性的影响。考虑国内现有 SiC MOSFET 制造工艺技术以及 UIS 对器件可靠性的影响，基于雪崩电流路径分离的思想，提出了一种深槽 P+源极 MOSFET 结构，使得雪崩击穿点从 Pbase/N-Drift 拐角处转移至P+源极下方，减少了雪崩过程中栅氧化层中热载流子的注入。相较于平面型MOSFET 结构，深槽 P+源极 MOSFET 在雪崩击穿时的栅氧化层最大电场强度下降了 15%，有效提高了栅氧化层的可靠性，改善了 SiC MOSFET 器件的 UIS 可靠性。

最后，根据 SiC MOSFET 器件的元胞和终端结构设计参数，基于国内 SiC MOSFET 器件制备工艺平台，开展了深槽 P+源极 SiC MOSFET 器件流片实验和测试分析研究。测试结果表明：当 VGS\=22V，VDS\=2.5V 时，漏源电流 IDS为 15A，比导通电阻为 16.7mΩ•cm2；阈值电压为 3V；击穿电压为 1850V，结终端效率为理想平行平面结击穿电压的 84%。

本文通过开展 1700V SiC MOSFET 器件设计以及其 UIS 特性研究，为高动态可靠性 SiC MOSFET 器件的研制提供了前期研究基础和技术指导。

**关键词：**碳化硅，MOSFET，非钳位感性负载开关，深槽 P+源极，栅氧可靠性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAGzOibSr2XIj241gHryr1ey7k7BIfZHUaolx8W1rtyD1NkAZchW1bOHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMARM7wYibM7rPGFb02ur6KmQKyialaaFvbrpukhPE6H9SJEJoiaMYz1BLLw/640?wx_fmt=png&from=appmsg)

**第一章 绪论**

**1.1 SiC 材料特性**

如今，电子技术广泛应用于工业、消费、汽车、航空航天等许多不同的领域，随着人们对尺寸和成本的要求越来越高，对效率和功率的要求也越来越高。经过几十年的发展，硅基器件的制造技术日益成熟，在功率半导体工业中以制造能力高、成本极低的优势占据了主导地位。然而，由于其材料理论极限，硅基器件的发展几乎已经达到了极限。因此，需要新的替代材料来满足高性能电力系统的要求，碳化硅（SiC）材料由于其固有的物理特性，如宽禁带、高临界电场、高热导率等，在应用中有许多优点。相较于硅基器件，SiC 基器件具有低导通电阻、高开关频率、高工作结温等优点，是高压大功率器件领域的研究热点之一。

碳化硅材料的一个显著特征是同态多晶型，即具有多个不同的晶体结构，这是由碳原子和硅原子层的堆垛顺序不同而决定的。每种多型结构都有其特有的物理特征。在所有的多型中，电子应用中研究最多的是 3C-SiC、4H-SiC 和 6H-SiC这三种。由于具备较高的迁移率，功率器件的首选是 4H-SiC 晶型。以下将对 4H-SiC的主要物理性质进行简要描述。

碳化硅作为一种宽带隙半导体，意味着价带和导带之间的能隙比其他半导体材料（如，硅或砷化镓）更宽。4H-SiC 的带隙约为 3.26eV，几乎是硅的 3 倍。本征载流子浓度可根据温度 T、能带间隙 EG和价带导带的态密度表达为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAtODCn3RuZ7UHqnEF46YD6M7f2RN9ibpBlSsxbSDGPdnnKxZeziciaFv6g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMACkd8XneRsqGDJAzgGZ11icx5sa8H98sV0wGviahnNjBMsyYEOyThjZCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMARUFcLFO7e9bYgKxtb6znAOYrjvc1uZ41Du0XribuBrekvFbsVjfvOSg/640?wx_fmt=png&from=appmsg)

**1.2 国内外 SiC MOSFET 器件的研究现状**

最初，SiC 基器件的发展受到材料质量和 SiC 晶片缺陷的限制。然而，随着市场演变，从 2001 年的第一个商业化的功率 SiC 器件（肖特基二极管）\[10\]，到 2011年第一个大规模生产的功率碳化硅 MOSFET，均标志着功率 SiC 器件的崛起。自 20 世纪 70 年代末引进功率 MOSFET 以来，由于其具备的性能优势比功率双极型晶体管（BJT）明显，从而得到了更为广泛的应用。MOSFET 优势在于具有高输入阻抗，并且作为压控器件，功率 MOFEST 更易于控制。此外，功率 MOSFET不受漂移区储存电荷的影响，因此具有较高的换相频率，使其成为高功率、高频系统的首选器件。由于导通电阻随着最大阻断电压的增加而增加，硅基功率MOSFET 的耐压值通常不高于 900V（Super Junction MOSFET），一旦高于这个值，器件的导通电阻过大将影响正向特性。而碳化硅材料的引入使功率 MOSFET 能够实现高耐压、低功耗器件的设计，从而使功率 MOSFET 进入了新的发展阶段。

1997 年，美国普渡大学的 J.N. Shenoy 研究团队报道了首例平面型 6H-SiC MOSFET，平面型 MOSFET 器件元胞横截面结构如图 1-1 所示\[13\]。由于 SiC 材料的低扩散系数，SiC MOSFET 舍弃了 Si MOSFET 器件制备中常用的垂直双扩散技术，采用了高能离子注入法依次形成 P-Body 区和源极接触，器件的击穿电压为760V，比导通电阻为 66mΩ·cm2。器件为垂直结构，该结构具有垂直于器件表面的导电路径，漏极位于背面衬底，表面只有源极和栅极，漏极与栅源极分别处于两端的结构有效地减小了表面布线扰乱的风险。SiC MOSFET 器件的击穿电压与漂移区浓度和厚度相关，当低掺杂漂移区比较厚时，器件能够承受较高耐压。由于MOSFET 器件为多数载流子导电，SiC MOSFET 的导通电阻随温度增加而增加，故一般不考虑存在二次击穿的情况。正向导通时，为了获得合理的阈值电压，P-Body 区的掺杂浓度应该很低。然而，较低的基区掺杂会致使器件 P-Body 区穿通而不能承受高反向耐压值。因此，需要合理设计 P-Body 区域的掺杂浓度和剂量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAMIt74vu3ibxGXVxR0BdPjDNebPxBcEBDenGYQuGGLEqQZyHpjn1Yia1w/640?wx_fmt=png&from=appmsg)

然而，功率 SiC MOSFET 也存在一些问题，其中最为关键的是氧化物/半导体界面质量非常差，SiC/SiO2的界面电荷比 Si/SiO2大约高两个数量级，这导致低沟道迁移率和器件的栅氧化层可靠性等问题。此外，栅极氧化物受到的高电场也是 SiC MOSFET 结构面临的一个重要问题，由于碳化硅的介电常数约为二氧化硅的三倍，因此氧化物的电场强度接近器件稳定工作的临界极限（～106 V/cm），一旦超过氧化物击穿强度，将会导致器件失效，难以实现高耐压\[16\]。为了提高 SiC器件的栅氧化层可靠性，可以从两方面考虑：一是采用可替代的介电材料改善界面态质量，二是利用新结构以缓解栅氧化层的电场强度。

2012 年，Yi-Men Zhang 团队引入堆垛介质，发现采用 Al2O3/SiO2堆栈层会使正电荷产生率较低，且平带电压的漂移幅度在恒定电压应力下变小，因此获得了高介电可靠性和较好的界面质量，该堆垛结构在功率 4H-SiC MOSFET 器件的应用方面具备优势。2015 年，王弋宇采用了具有高介电常数的介电材料，介绍了原子层淀积（Atomic Layer Deposition，ALD）Al2O3薄膜在 SiC MOS 中的应用。研究表明采用 ALD 的方法在 SiC 表面生长高介电常数介质，可以降低介质中的电场强度，同时有可能避免热氧工艺带来高界面态密度。此外，SiO2/SiC 界面钝化工艺也是获得高质量的介质/半导体材料界面的方式，目前普遍采用的是氮化工艺，即热氧化后的退火是处于含氮的氛围中。氮化技术是目前改善界面态中最为常见的技术，包括 Cree 和 Rohm 在 MOSFET 器件商业化量产中也是采用氮化技术作为钝化工艺。

1996 年，Baliga B.J 改善了平面型 MOSFET 器件结构，在 N+源区和 Pbase 区下方进行 P+注入，形成了 P+埋层作为电场的屏蔽结构，可以降低栅氧化层的电场强度。通过合理地设计屏蔽层的宽度可以保持对栅氧化层电场较高的屏蔽能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA43IH01t0Y7Ccfu8ZZ7ok3N7Cbt2jxfibU5KoXEkjOVrk0XGjM5xwYrg/640?wx_fmt=png&from=appmsg)

1994 年，J. W. Palmour 等人首次报道并且制备了 SiC UMOSFET，器件消除了JFET 区的寄生电阻，如图 1-2（a）所示，但是由于栅氧底部尖峰电场较大，器件的阻断电压仅为 330V。2002 年，I. A. Khan, J. A. Cooper 等人提出了有 P+ Shield结构的 UMOSFET 结构，如图 1-2（b）所示，该结构采用了完全包裹栅槽底部的 P+屏蔽层，降低了栅氧底部电场强度，使器件具备较好的阻断特性，阻断电压高达 5050V。正向导通时，在电流密度为 100A/cm2 的条件下，比导通电阻为105mΩ·cm2。2011 年，罗姆半导体集团的 T. Nakamura 等人提出了 Double TrenchMOSFET 器件，如图 1-2（c）所示，在沟槽栅结构基础上，该结构对器件的源区进行了刻蚀，随后进行离子注入以形成高浓度的 P+屏蔽层，有效缓解了栅氧化层底部的尖峰电场，提高了阻断电压，最终得到的耐压值为 1700V，比导通电阻Ron.sp为 1.41mΩ·cm2。

近年来，我国也加大了宽禁带半导体电力电子器件的发展力度，开启了多项SiC 单晶、外延材料和器件以及装置的探索工作。天科合达公司已经向市面提供 6英寸衬底，开启了 SiC 单晶方面的制备工作。东莞天域和瀚科天成形成了 4~6 英寸外延片的生产线，不仅提供国内企业，也向国外企业提供。而在 SiC 器件商业化领域，泰科天润推出了 SiC 二极管产品，包括 1200V/1700V/3300V 器件。然而SiC MOSFET 器件的生产制备，目前国内的发展不够理想，仍处于研究阶段。其中株洲电力机车研究所与电子科技大学等高校展开了 SiC MOSFET 的研制工作，取得了一定的成果。目前，国内在 SiC MOSFET 领域与国际依旧存在着明显的差距，需要进一步研究和制备以缩短差距。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaxz7XWiadHQnXWpE0zG6of10Ump7k09ZhnKy0P9zmf9ftrULWXRm9oNPtjA5MlhD4cOYHWoO6Wgg/640?wx_fmt=png&from=appmsg)

**1.3 UIS 特性研究意义**

非钳位感性负载下的开关过程(Unclamped Inductive Switching，UIS)是基于应用领域建立的电路模型，其中需要考虑的应用领域主要包括不断电系统、混合动力汽车、光伏逆变器等功率转换领域，在这些应用中，MOSFET 漏极和感性负载相接，同时在寄生或者外接的感性负载的两端并联二极管实现电压钳位作用。然而，如果系统中没有配置钳位二极管，在器件关断瞬间，电感在回路导通时存储的能量会通过功率器件，电感的感生电动势会导致功率器件两端产生很高的电压值，该电压值甚至高于器件的反向击穿电压。器件处于高压大电流工作环境中时，发生雪崩击穿，导致结温上升，器件极易发生失效。因此，电力器件动态可靠性的一个重要表征条件是器件能够在雪崩运行期间承受一定的能量，抗雪崩能量与器件结构参数相关。

平面型 MOSFET 结构中存在由 N-Drift/P-Base/N+源区形成的寄生双极型晶体管（BJT），如图 1-3 所示，在雪崩击穿情况下，经过 P-Base 的电流在寄生电阻Rb上产生一定的压降。当电流增大到一定时，Rb两端的电压大于寄生 BJT 的开启电压，则寄生 BJT 导通，电流迅速增大，器件失效。因此，器件具备防止寄生双极型晶体管开启的抗雪崩能力是十分重要的，尤其在实际应用中需要严格的设计。

目前已经报道了几种抑制寄生双极型晶体管开启的方法：一种是使用高能离子注入或者采用侧壁工艺来降低 N+源下方的 P-Base 的电阻。然而，在不改变阈值电压的情况下控制掺杂浓度和侧壁的几何形状是相当困难的。另一种方法是将电流的方向从 P-Base 的弯曲区域转移到 P-Base 的底部，从而减小 N+源区下面的电流，Rb两端的压降也减小了，从而减小了寄生双极型晶体管开启的可能。相比于第一种从工艺角度减小 P-Base 寄生电阻的方法，设计能够转移电流路径的新结构可以大大降低器件制备的难度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAZJ0vWERWZdJv2BasibPN3wgFpaW4XSfbH6mZd3XZvia4std76YxiaicEEQ/640?wx_fmt=png&from=appmsg)

2008 年，韩国电气工程学院的 In-Hwan Ji 等人提出了采用分段沟槽 P-body 接触的新型功率 MOSFET 以改善雪崩能量，如图 1-4（b）所示。P-body 的深沟槽结构改变了击穿点，转移了电流路径，有效地提高了雪崩能量，采用的分段沟槽P-body 接触在不牺牲器件其他特性、不增加额外成本的基础上提高了 UIS 性能。然而，分段的沟槽 P-body 接触会降低沟槽的连续性和 n+源极接触的自对准程度，导致器件具备不均匀的阻断特性和导通特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAfNd5FxU70XTGaHyDNPCMS9OiaF5ZOBrvF3O6HUGIEU7Ficb1ZxWRA53Q/640?wx_fmt=png&from=appmsg)

除此之外，相较于 Si 基器件，SiC 材料的禁带宽度更大，因此 SiC MOSFET器件单次抗雪崩击穿的能力比较强。然而，对于 SiC 器件来说，当临界击穿电场达到 3MV/cm 时，由高斯定理可知，氧化层中的电场强度是 SiC 中电场的 3 倍，如此高的电场强度使得栅氧化层面临严峻的可靠性挑战。此外，当器件长时间工作在 UIS 应力情况下时，氧化层中的陷阱俘获热载流子的能力增强，SiC/SiO2界面态密度增加。这些因素使得器件在雪崩击穿过程中，容易造成栅氧化层击穿，器件失效，因此 SiC MOSFET 的关键问题之一在于栅氧化层的可靠性问题。

2016 年，Siyang Liu 团队为了提高栅氧化层的动态可靠性，减小热载流子的注入效率，提出了三种改进的 SiC MOSFET 结构，如图 1-5 所示。结构 A 是在 JFET区上方采用阶梯栅氧化层结构；结构 B 采用阶跃 P-body 结构，位于 JFET 区的P-body 区掺杂浓度更低；结构 C 在栅氧化层的下方中部添加了低掺杂的浅 p-well结构。提出的改进结构可以降低界面表面的电场强度和碰撞电离率，从而提高了器件的雪崩鲁棒性，减少了重复应力作用下 SiC MOSFET 的退化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAy2j6nxWockoTnDMSCM6agFBXiatpXqQrnrib2f633M7CWX07PZjm7QUg/640?wx_fmt=png&from=appmsg)

近年来，功率碳化硅器件（主要是功率二极管和 MOSFET）已经实现商业化，并开始在许多应用领域取代硅基器件。尽管在器件制备技术方面高速发展，器件的工艺制备能力有所提高，但在可靠性和成本方面仍有提高的余地。实际上，如果要实现功率碳化硅器件的广泛应用，就必须对其动态可靠性进行深入的研究分析。通常，功率器件的一个关键特性是能够承受超过其标准额定值的电流、电压和温度条件。为了确定其在苛刻条件下的工作极限，通常需要在临界压力条件下对器件进行研究。在这一背景下，通过物理模拟和实验表征，进行 UIS 特性研究，这对提高 SiC 功率 MOSFET 器件的动态可靠性至关重要。

**1.4 本文主要工作**

本文以半导体器件物理理论和功率半导体器件基础为理论依据，以半导体数值仿真软件 Silvaco 为主要工具，设计优化了 1700V SiC 平面金属氧化物半导体场效应晶体管（MOSFET）器件元胞结构和终端结构的基本物理参数；着重研究器件导通电阻、击穿电压以及动态特性与器件结构参数的相互关系。并且针对 SiC MOSFET 器件的非钳位感性负载下的开关过程(Unclamped Inductive Switching，UIS)，研究器件结构特点及其 UIS 失效机理和失效模式，获得不同物理结构和电路参数对其特性的影响。基于分离电流路径思想，开展了对深槽 P+源区 MOSFET结构的研究，最后开展了 SiC MOSFET 器件的流片实验和测试分析研究，为高可靠性 SiC MOSFET 器件研制提供先行理论研究基础和指导。

本文工作内容如下：

第一章介绍了 SiC 材料特性，并阐述了 SiC 材料功率器件的优势；归纳介绍了 SiC MOSFET 国内外的发展历程以及 UIS 研究现状。

第二章总结了 SiC MOSFET 的基本静态电学特性包括阻断特性、转移特性、输出特性等；并且针对界面处的缺陷，详细说明了功率 SiC MOSFET 器件动态雪崩失效机理。

第三章基于 Silvaco 半导体器件二维仿真平台，设计优化了 1700V SiC MOSFET 器件元胞结构的物理尺寸参数，包括器件漂移层区的掺杂浓度和厚度、N+/P+源区和 Pbase 区的浓度分布、JFET 区域宽度和掺杂浓度等，着重研究器件导通电阻和击穿电压与器件结构参数的关系。接下来研究了等间距场限环结构和多区缓变间距场限环两种终端结构，采用了多区缓变间距场限环结构。接着开展了1700V SiC MOSFET 器件的 UIS 动态特性的研究，获得不同物理结构和电路参数对其特性的影响，研究器件结构特点及其 UIS 失效机理和模式。作为改进结构，设计了深槽 P+源区 MOSFET 结构，使得在雪崩情况下电压击穿点得到了有效转移，通过减少雪崩过程中栅氧化层中热载流子的注入来减小 SiC/SiO2的界面态密度，研究改进结构对栅氧可靠性和器件的抗雪崩能力的影响。

第四章根据 SiC MOSFET 器件的元胞和终端结构设计参数，基于国内 SiC MOSFET 器件制备工艺平台，开展了 1700V SiC MOSFET 器件的流片实验和测试分析研究，验证器件设计方法和结构特性。本文通过设计 1700V SiC MOSFET 器件以及研究其 UIS 特性，为高动态可靠性 SiC MOSFET 器件的研制提供先行理论研究基础和指导。

第五章对完成的工作进行了总结，并对未来的工作计划进行了安排。

第二章 SiC MOSFET 器件工作原理

**2.1 SiC MOSFET 器件静态特性**

MOSFET 使用 MOS 结构来控制场效应晶体管的开关\[30\]。MOSFET 的示意图如图 2-1 所示。当在栅极施加的电压大于阈值电压（VTH）时，半导体/氧化物界面下方的 Pbase 区域中形成了反型沟道，提供电流路径。在低 VDS下，MOSFET 工作在线性区，随着 VDS的增大，漏电流 IDS也随之增长；如果 VDS大于 VGS\-VTH，MOSFET沟道夹断，器件随后进入饱和模式，以下将以 N 沟道 MOSFET 器件为例，对 SiCMOSFET 器件的电学特性进行描述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA5dj4oHtptt10SMCt41iaDn6icvnlpRHylO1WMYIydSo2mAFCiaCQicaADg/640?wx_fmt=png&from=appmsg)

**2.1.1 转移特性**

SiC MOSFET 的转移特性体现了栅源电压对输出电流的控制能力。阈值电压VTH为器件沟道表面发生强反型时栅源电压 VGS的大小，是 MOSFET 最重要的参数之一。随着栅极电压的增加，耗尽区更宽，能带弯曲程度更大，当表面电位φS=2φF时，表面单位体积的电子密度正好等于单位体积的空穴密度，此时，表面发生强反型，则称对应的栅极电压大小为阈值电压 VTH。

阈值电压 VTH的表达式如式（2-1）所示

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAslKd7dyHywPLKafE449m3KFTjsWs312FvM2gvxWDjia0UJhibGToNBdg/640?wx_fmt=png&from=appmsg)

由于在实际测试中难以准确地判断沟道导通这一状态，因此针对不同情况引入了不同定义的阈值电压。其中，从实验测试方面，阈值电压（VTH）的定义为：当漏极电流 IDS达到某一固定的小值所施加的栅极电压。

转移特性曲线为饱和漏极电流（IDsat）与栅极电压（VGS）之间的关系曲线。因此，转移特性曲线的测试条件主要采用栅极与漏极短接，然后在栅极上施加电压并逐步增大，最后测量记录的漏极电流与栅极电压的关系曲线即为转移特性曲线，如图 2-2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMADc6ZiajY31jNKMlEz2QIqvpE4yQS4HObTTQfWucujFXGW8SH6t7rHwA/640?wx_fmt=png&from=appmsg)

**2.1.2 输出特性**

对于 N 沟道 MOSFET，当施加正的栅极电压时，在半导体/氧化物界面下方的Pbase 区域反型，提供电流通路。通常，对于功率 MOSFET，阈值电压通常为 2-4V。当对漏源电极施加正电压时，电子可以自由流动。I-V 特性由沟道层的反型情况决定，它是与栅漏电压相关的函数。当 VGS<VTH时，尚未形成沟道，因此结构中不存在电流。当 VDS施加电压时，器件产生漏电流，与 VGS成指数关系。当 VGS\>VTH时，且漏极偏压较小时：VDS<VGS–VTH，漏极和源极之间形成电子电流通道，沟道类似于一个电阻，器件进入线性区，漏极电流可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAicXKXzIfrYB2w9d42NNDbS6PHJVQ5bY9zCvBU7g5nSDySUlOUVazuBA/640?wx_fmt=png&from=appmsg)

当 VGS\>VTH时，且漏极偏压较大时：VDS\>VGS-VTH，漏极附近电子反型层逐渐减薄至沟道夹断，此时漏极电流达到饱和值 IDsat。当漏极电压继续增大，夹断点从漏极向源极移动，夹断区即为耗尽区，增加的电压均降落在耗尽区，载流子以漂移的方式通过该区，漏极电流 IDS维持饱和电流值，器件进入饱和区，电流表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAe4Q3rdu9cEckI7ULINybp2iaLicbylic2nq3OAc7tH3ulaYPXYnSLhedg/640?wx_fmt=png&from=appmsg)

SiC MOSFET 输出特性曲线示意图如下图 2-3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAFH7RtgUnlsqO1yO0g9gB35SF6rGT9rNRibaw1C0uGU6iccMNMKcYvricA/640?wx_fmt=png&from=appmsg)

根据从源极到漏极的电子路径，电阻分布如下图 2-4 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAC1ENjxT0ibGGj21ECBfCyv8yZCV13QdDWqWjMf3ibUfns5dwAWL1gQzg/640?wx_fmt=png&from=appmsg)

RCH是电子在沟道中流动所产生的电阻。从沟道注入的电子在 JFET 区扩散，这一过程与两个电阻相关：RJFET和 RA。其中，RJFET与 JFET 区掺杂浓度和漂移区耗尽宽度相关；RA与栅极氧化层下方的积累层相关，该积累层由栅极加正压形成。随后电子流经漂移区，RDRIFT与漂移区掺杂浓度相关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAHibia0cWzD3MFeJR1DkPFSfMmFETw5me3XvymYUpE7fv4vase62IheRw/640?wx_fmt=png&from=appmsg)

比导通电阻的引入是为了能有效对比不同有源区面积的器件的导通阻值，其计算方式为器件导通电阻与器件面积的乘积，表达式如式 2-8 所示。目前器件的导通电阻的计算方法有两种：在一定栅源电压 VGS 下，（1）求解 IDS-VDS输出曲线的最大斜率的倒数；（2）在线性区内确定一个固定的漏极电流 IDS，计算对应的漏源电压 VDS和漏极电流 IDS的比值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAprDO3zJqNEhqLsVS3F6S9ZHPibHbM0qp20OjeW0Og6MJN4j2BRocRpg/640?wx_fmt=png&from=appmsg)

**2.1.3 阻断特性**

阻断特性是指当栅源短接且所接电位为零时，漏极漏电流 IDS 随漏极电压 VDS的变化趋势。图 2-5 所示为 SiC MOSFET 的阻断状态下载流子流向示意图。当施加的漏极电压为正，N-Drift/Pbase 区形成的 PN 结反偏，器件耐压由该 PN 结耗尽区承受，随着漏极电压 VDS的增大，耗尽区不断扩展。当漏极电压 VDS大于击穿电压 BV 时，N-Drift/Pbase 结上的电场强度达到临界击穿电场，此时器件发生雪崩击穿，器件的漏极漏电流 IDS急剧增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAUUibibVJoibgMjAZMetXhrGW8siaVuMGcBObTxEz1JiaEhTSJJia5V7N9cuQ/640?wx_fmt=png&from=appmsg)

考虑以一维突变结为例，最大电场强度 EMAX 和耗尽区的宽度 WD（一般取漂移区的耗尽宽度）的计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMApdVib3I4ppZH0uOJLGXBKB0GmbO6FG80dPvsic4W02m1qciaU0lRcW3cw/640?wx_fmt=png&from=appmsg)

其中，ND为漂移区的掺杂浓度，EC为临界击穿电场强度。需要注意的是，EC与杂质浓度关系不大，其大小主要由禁带宽度 EG决定。

当外加电压增加时，EMAX达到发生碰撞电离的临界值，器件击穿，此时漏源两端的电压 VDS即为击穿电压 BV，如图 2-6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAK3cWzAO1s46dzeAvJtdY80AXibwHO6PGBA24icicNJrZBSGWct1N1TFzA/640?wx_fmt=png&from=appmsg)

**2.2 动态雪崩特性**

非钳位感性负载下的开关过程（Unclamped Inductive Switching, UIS）可用于模拟功率 MOSFET 在系统应用中所能遭遇的最极端的电应力情况。这是由于在关断瞬间，外接或寄生的电感存储的能量通过功率器件释放，施加在功率器件上的高电压和大电流极有可能造成器件失效。UIS 测试主要用于评估器件的抗雪崩能力和可靠性。UIS 测试电路如图 2-7 所示，施加在栅上的脉冲，其高电平时间记作ts，通过改变 ts值以得到器件所能承受的最大雪崩能量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAu9nrOWEG341pGqmibAfDYicicwasNxqpyBgpJ7a52k5HNWLmGb2w2kplA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA6Y9JicYpYficVzXGMsR8sGM8GWQBv7nibVeGCrPccCVA45HwRorUUJJ1g/640?wx_fmt=png&from=appmsg)

典型的 UIS 测试波形如图 2-8 所示。在 0-t1期间，MOSFET 器件关断，漏极电压等于外加电压源 Vdd。在 t1时刻，SiC MOSFET 的栅极开启，器件导通，电压源向负载电感 L 充电，电流缓慢增长，电流增长速率表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAic3LOsSBXXMmsYxKX2bGd77kDvhib8BCJt2Fq0dtq9UVk7MecTibnqnJQ/640?wx_fmt=png&from=appmsg)

在 t2时刻，SiC MOSET 的栅极关断，沟道断开，电流值达到峰值雪崩电流 Iav，但是因为电感的存在，回路中电流不会发生突变，电感电流保持原路径继续向下流经 SiC MOSFET 器件，并以恒定速率减小。此时由于 MOSFET 器件关断，电流流经器件的 Pbase/N-Drift/N-Substrate 形成的 PiN 体二极管，形成雪崩电流。此时器件的 VDS达到器件的雪崩击穿电压值 VB，该值远远高于母线电压 Vdd。器件的雪崩击穿时间 tav是指从器件关断的时刻开始到 IDS减小到 0 的时刻，即为 t2\-t3这一时间段，在此期间放电速率表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMANpjXAfcwq5uicbCOVs7KVOZLRDibh3MRXCosEWxPux3jrKKOxrRz9k7w/640?wx_fmt=png&from=appmsg)

在动态雪崩期间，器件工作在高电压大电流的环境下，存储在电感中的电磁能以热能的形式发散，器件内部的晶格温度也随之迅速上升。Eav定义为器件在指定负载下能承受的最大单次雪崩能量，Eav的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA6qlufNRClyJAQxw4tXUmOp9KibsaYO374ZVbsymkWaan6OnszLQYj1A/640?wx_fmt=png&from=appmsg)

当 t3 时刻结束时，可能会出现两种情况。一是 SiC MOSFET 安全关断，器件可恢复，如图中实线所示。二是 SiC MOSFET 发生 UIS 失效，这是器件晶格温度到达临界值或寄生 BJT 开启等原因，如图中虚线所示，在 IDS未下降至零值时，此时器件对外的端特性表现为电阻，IDS继续线性上升。

根据文献调研可知，在 UIS 测试中，栅氧化层存在热载流子的注入等情况，影响了界面态和栅氧可靠性，造成了器件的性能退化，对 SiC MOSFET 的应用制备是个极大的挑战。因此，SiC MOSFET 的界面态问题和雪崩鲁棒性问题亟待解决。

**2.3 结终端结构**

**2.3.1 曲率效应**

在平面工艺中，杂质通过二氧化硅掩模形成的窗口扩散，从而形成平面结，如图 2-9 所示，将位于 N 型衬底上方的二氧化硅掩蔽层中蚀刻形成矩形窗口，以便通过气相或离子注入对暴露在窗口的碳化硅表面进行掺杂。通常在高温下，杂质在衬底中会产生合适的结深。在这个过程中，杂质除了在注入窗口内垂直向下移动，形成一个平行的平面结；同时在窗口的边缘，位于在二氧化硅的下方的杂质产生横向运动。假设横向扩散长度与结深一致，则该过程在窗口边缘产生柱面结，这种曲面效应的存在降低了平面结的击穿电压。此外，在矩形扩散窗口的拐角处形成四个尖点，这些尖角分别为一个 1/8 球面结，对应的电场强度更大。因此，拐角处球面结的击穿电压将低于在窗口边缘的柱面结的击穿电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAnEOlxoefd4m5OiarpXQGicot9zVH3droBU4PEpN9KmAiaGvZjnnKV48EA/640?wx_fmt=png&from=appmsg)

柱面结的横截面如图 2-10 所示，其中结深设为 rJ。假设 PN 结为突变结，P+掺杂的浓度远远高于 N 型衬底的掺杂浓度，则耗尽层更多地向 N 型衬底扩展，P+掺杂的耗尽层可忽略不计。假设耗尽层的深度为 rD，利用泊松方程解析，则柱面结的击穿电压表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMACzicSmice163XSSuIQXJsbhuJBrh9lYS3XoJy6CByy3mnvxBr3wpic8HQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAuRia163ibGWwLfibLEia36CDIFtoVrYIJRr7fJazAFQPHaeRhV1Qic5lmuA/640?wx_fmt=png&from=appmsg)

由式（2-23）可以得知，对于曲率半径较小的浅结，其柱面结的最大电场明显大于平行平面结的最大电场。当结深为 1μm 且耗尽区的深度为 30μm 时，则柱面结处的最大电场将比平行平面结处的最大电场大 15 倍。由于碰撞电离率会随着电场强度的增大而增高，因此相较于掺杂浓度相同的平行平面结，柱面结承担的电场强度更大，会在更低的电压下发生雪崩击穿，即柱面结的击穿电压更低。

在实际器件的工艺制备中，由于浅结器件（如 MOSFET、IGBT 等）受曲率效应的影响更大，且基于碳化硅材料的器件多用于高压领域，因此更需要进行曲率效应的优化。研究发现，目前通常利用结终端技术以得到理想的击穿电压，因此，结终端技术的优化也是功率 SiC 器件重点研究方向之一。

**2.3.2 工作原理**

**2.3.2.1 场板**

场板（Field Plate）的基本结构如图 2-11 所示，在平面结的场氧化物的边缘放置金属场板，通过对金属施加偏压可调制平面结边缘电场。在没有偏压作用于场板的情况下，耗尽区边界如图 2-11 中曲线 A 所示。当正偏压作用于 N 型衬底的场板时，耗尽线如曲线 B 所示，正偏压将电子吸引到表面，缩小了耗尽层沿表面的延伸，增强了 PN 结边缘处的电场，从而降低了击穿电压。当负偏压作用于 N型衬底的场板时，耗尽线如曲线 C 所示，负偏压会使电子远离表面，扩展了耗尽区表面的延伸，减小了 PN 结边缘处的电场，从而导致击穿电压的增加。然而，场板的引入在场板的末端下方引入了一个新的电场峰值点，击穿电压的提升效果不太明显，因此在实际应用中，通常将场板结构与场限环结构结合使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAwf7dRI38t5ia0fQ2grFzdDdjMkMxrOEgh3cmUvkRpSvacxxQR9RgiaqQ/640?wx_fmt=png&from=appmsg)

**2.3.2.2 场限环**

场限环（Field Limiting Ring）的基本结构如图 2-12 所示，通过在扩散窗口周围设置一个或多个浮空场环以提高平面结的击穿电压。在工艺设计中，通过在主结注入的同时进行场限环注入，因此无需额外的工艺步骤。需要注意的是，场限环上没有金属接触。尽管场限环的深度可以大于或小于主结，但实际上场限环总是与主结同时形成，因此场限环和主结具有相同的深度。本节中讨论的是主结与场限环同时注入的浮空场限环结构。

为了使场限环承担主结处的电场，场限环必须位于主结的耗尽宽度内。如果场限环的间距比较小，场限环距离主结太近，因此其电位也接近主结，此时击穿点位于场限环处，击穿电压没有实质性的提高。另一方面，如果场限环距离主结太远，则对主结处的电场影响很小，对器件击穿电压的改善不明显。因此必须将场限环放置在最佳间距处，以提高击穿电压。值得注意的是，设计场限环终端结构时，由于离子注入存在横向扩散的现象，故掩模上的间距也需要进行考虑。

在功率 SiC 器件中，通常采用多个场限环结构承担主结处的电场。这是因为远离主结处的场限环分别承担前一个场限环的电场，缓解了电场集中效应，有效扩展了耗尽层的宽度。通过合理优化场限环的环间距和宽度，能够有效地改善曲率效应，提高击穿电压。虽然场限环工艺简单且击穿电压改善效果明显，然而它往往需要较多的场限环以得到理想的击穿电压，这将占用芯片过大的面积。但是在目前功率 SiC 器件的设计中，场限环仍是常用的结终端技术之一。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAW5icqZNdviaLr7c5T0I6R67sVfewLRDMHcugkLej7scS0ibqbo5Tcl66Q/640?wx_fmt=png&from=appmsg)

**2.3.2.3 结终端扩展**

结终端扩展(Junction Termination Extension，简称 JTE)，如图 2-13 所示，是一种通过添加电荷以改变主结边缘表面电场的方法。通过在主结边缘处注入硼离子以形成 P 型区域得以实现，这个注入的区域被称为结终端扩展区域。JTE 内的电荷可以利用控制离子注入剂量精确调节，从而控制结边缘电荷以保证其均匀性，有利于在单个晶圆上制造多个小功率器件。

JTE 的击穿电压与离子注入 JTE 区的电荷密切相关，为了保证得到较高的击穿电压，必须精确控制 JTE 区域内的电荷量。尽管理论上可以精确控制离子注入剂量和能量，但 JTE 区的电荷量因为工艺条件的影响仍具备不确定性。此外，JTE区的电场分布也会受到晶圆的固定氧化电荷的影响。这都会导致晶圆上的击穿电压点发生变化。如果 JTE 中掺杂浓度过低，则对于主结的电场分布影响很小，电场峰值将出现在 A 点，此时 JTE 几乎没有起到对主结的保护作用，因此，击穿电压仍然受到柱面结曲率效应的限制。如果 JTE 中掺杂浓度过高，击穿点则会转移至 JTE 区域边界，如图中 B 点所示，此时 B 点的曲率半径较小，位于 B 点的柱面结处的曲率较强，因此降低了击穿电压。理想情况是击穿点位于 A 点到 B 点中曲率半径较大的地方，让 JTE 区的电荷被完全耗尽。

通常利用在主结边缘使用多个 JTE 区域来提高击穿电压，改善 JTE 性能。从靠近主结处的 JTE 区域到边缘区域，每个 JTE 区电荷量均匀地下降 2 倍，在工艺制备中，为了简化工艺步骤，采用了不同大小的掩膜窗口以得到不同电荷量的JTE 区域。相较于理想平行平面结的击穿电压，采用多个 JTE 区的终端结构的终端效率可以达到 90%。在功率 SiC 器件中，结终端扩展技术（JTE）是另一种常用的终端技术。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAU255pl617J7wUCt9ZqeuuV0L3S1Vgz86oe6d0F3McLVQPKa8nRib6dw/640?wx_fmt=png&from=appmsg)

**2.4 仿真软件**

本文采用的是半导体数值分析工具 Silvaco TCAD，在仿真过程中主要运用的工具为 Atlas，它提供了基于物理的半导体器件二维和三维模拟的通用功能，提供了一整套物理模型，包括：直流模型；交流小信号模型；漂移扩散传输模型；晶格加热和散热模型；费米\-狄拉克和玻尔兹曼统计模型；迁移率模型；欧姆、肖特基和绝缘接触模型；SRH、辐射、俄歇和表面复合模型等。

在仿真时还配合了其他 VWF 交互工具一起使用。包括 DeckBuild、TonyPlot、DevEdit 等。本文在利用 Silvaco 软件进行器件仿真时，包括以下几个步骤：

（1）DevEdit 是用于结构和网格规格说明及细化的交互式工具。利用该工具定义一定的区域，并对该区域进行网格划分。

（2）Athena 可进行工艺仿真，在 DevEdit 定义区域中，通过定义注入剂量和能量以模拟工艺条件下的离子注入的情况。

（3）DeckBuild 提供了一个交互式的运行环境，可定义器件物理结构，优化网格分布，通过引入 Athena 中的器件掺杂分布完成器件结构的定义。在该工具中设置与测试条件相关的电学参数，可以模拟器件的运行条件，以得到对应的电学参数。

（4）TonyPlot 提供科学的可视化功能，可以查看仿真结果，比如掺杂分布、电场分布、特征曲线等。

**2.5 本章小结**

本章主要阐述了 N 沟道 SiC MOSFET 器件的工作原理，并针对界面态和栅氧可靠性，介绍了 SiC MOSFET 器件的动态雪崩过程。第一部分主要介绍了 SiC MOSFET 的静态特性，包括器件的转移特性、输出特性、比导通电阻以及阻断特性。第二部分主要介绍了 SiC MOSFET 的动态雪崩特性以及 UIS 测试的基本条件和失效机理。第三部分主要介绍了曲率效应以及目前功率 SiC 器件常用的结终端技术。第四部分主要介绍了本文使用的仿真工具 Silvaco，为 SiC MOSFET 器件和UIS 特性的研究提供仿真分析平台。

**第三章 SiC MOSFET 器件结构设计**

本章针对 1700V SiC MOSFET 器件结构进行了设计优化，主要包括静态特性和动态雪崩特性。首先采用经典的平面型 SiC MOSFET 结构，对器件元胞的基本物理参数进行仿真优化；其次探讨了元胞结构参数对静态电学特性的影响，为研究器件动态雪崩特性提供理论基础。为了提高器件的抗雪崩能力和动态雪崩时的栅氧可靠性，提出了深槽 P+源极 SiC MOSFET 新结构，通过对 P+源区的沟槽深度的设计优化，在保证耐压需求的同时实现了器件雪崩击穿点的转移，研究了新结构对 SiC MOSFET 器件动态雪崩特性的影响。

**3.1 元胞结构设计**

1700V SiC MOSFET 器件结构如图 3-1 所示。主要研究器件的结构参数对静态电学特性的影响，包括漂移区（N-Drift）掺杂浓度和厚度、N+源极、P+源极和Pbase 区的注入工艺参数、JFET 区域的掺杂浓度和宽度。下面将会对这些影响器件静态电学特性的基本参数进行仿真和优化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAzSdtViaObc0JNIjVlj7gdVdp60Aiaq8xichsAE9W6tfQgUP6a8eO91JjA/640?wx_fmt=png&from=appmsg)

**3.1.1 N-Drift 区**

本文设计的 SiC MOSFET 器件耐压需求为 1700V，对于功率 SiC 器件来说，漂移区掺杂浓度与厚度对击穿电压的影响很大，击穿电压可根据式（3-1）、（3-2）计算得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAmoSicLGRSSUXdXdJVutCmnUyhdQTkjlSX033zPBibaqvprMvhq8SBtHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAGCH6QUcoQp7hjiaia2IpZed2SzaUHMJ50X8MAkQknOQiaXJ68CQhGn8DA/640?wx_fmt=png&from=appmsg)

在流片实验中，主要有两个因素会影响器件实际的耐压值，一是由于曲率效应的存在使终端效率无法达到 100%，二是可能存在工艺偏差的问题。综合考虑到终端效率、仿真误差以及工艺误差等因素后，在设计时考虑了 10%的耐压值余量。根据式（3-1）和（3-2），可以粗略计算出漂移区掺杂浓度范围为 6e15 cm-3~8e15cm-3，厚度范围为 12μm~15μm。为更好的研究漂移区掺杂浓度和厚度对器件性能的影响，在上述的范围内，研究了击穿电压和导通电阻分别随漂移区参数的变化，如表 3-1 和 3-2 所示。其中，JFET 区初始宽度设为 5μm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAiaCr8nF2QpFqBOJWFM6GDDqakuByU3iaen0StHC5MibEv9Yae5Beic5icNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAg9hOvuctDNuAhdd15d9wu3gIgYgSf6EwPAt6rCdGdVuF8qCmt4BJvA/640?wx_fmt=png&from=appmsg)

**3.1.2 Pbase 区**

本文设计的 1700V SiC MOSFET 漂移区采用外延生长，而 P+源区、N+源区、Pbase 区和 JFET 区均采用高能离子注入。P+源区、N+源区的掺杂浓度通常比较高，以形成欧姆接触来抑制寄生三极管，因此其掺杂浓度一般应高于 1e19 数量级。根据图 3-2（a）（b）的杂质分布所示，P+源区、N+源区掺杂浓度处于 1e20 数量级，深度约为 0.2μm，在此情况下可以形成较好的欧姆接触。

Pbase 区掺杂浓度的定义是设计 MOSFET 的关键问题之一。这是因为 Pbase区掺杂浓度对器件的阈值电压和击穿电压等静态电学特性均有较大的影响，主要表现在：如果 Pbase 区掺杂浓度过高，沟道表面难以反型，器件阈值偏高，正向电流特性较差。如果 Pbase 区掺杂浓度偏低，反向耐压时，Pbase 区耗尽区展宽，器件击穿电压会有一定的下降趋势，当 Pbase 区掺杂浓度过低时，会发生穿通现象，器件耐压能力会出现大幅下降。

在设计中，Pbase 区的理想掺杂分布为倒掺杂分布，在靠近器件界面处的沟道位置为较低掺杂浓度，以获得理想的阈值电压；在下方靠近漂移区处为较高的掺杂浓度，以保证器件正常耐压。为了得到有梯度且平缓的注入曲线，Pbase 区采用多次离子注入，其中注入剂量影响每次注入的峰值，注入能量影响注入的深度。

如图 3-2（c）所示，Pbase 区掺杂浓度在表面处约为 1e16 数量级，体内的掺杂浓度有所提高，最大掺杂浓度可达到 1e18 数量级，掺杂深度约为 1.0μm，在此掺杂分布下，可较好的满足阈值电压和击穿电压的需求。综上，在此后的仿真设计中，P+源区、N+源区以及 Pbase 区域的掺杂分布均采用以上方案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAVDqe4aGKVTYHLUs6wlw1ic2Z0VypU1HtzxhO9hk9Ch5qUibaUIdPjuag/640?wx_fmt=png&from=appmsg)

**3.1.3 JFET 区**

平面型 MOSFET 器件存在寄生 JFET 效应，它对于器件的正向特性和阻断特性均有影响。其中的影响参数主要是 JFET 区域的宽度以及掺杂浓度，接下来将对于 JFET 区域有无注入以及宽度进行对比和优化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMADt8FibcAU3ygVctUK1oMuRrsjEO85sXqhUO9pibMLiaC1mHjFDINqLjRg/640?wx_fmt=png&from=appmsg)

JFET 区注入的目的是通过增加该区域的 N 型杂质浓度，减弱 JFET 区的等效导通电阻值来提高器件的正向电流导通能力。首先需要对 JFET 区域离子注入的剂量和能量进行确定，由于选取的漂移区掺杂浓度为 6e15cm-3，所需的 JFET 区域掺杂浓度需要高于该值，综合考虑正向特性和阻断特性，将其值设置为 1e16cm-3数量级。同时也应合理设计 JFET 掺杂的深度，如果深度不够，则电流的提升效果不明显，如果深度过深，超过了 Pbase 区，则会降低击穿电压、增加栅氧化层电场强度，从而降低 SiC MOSFET 的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAB7zGhsPDtjT7icsibqW6vZqN1GdpB0WiaD8jgbdDV4bic5XgDwm0sxyedQ/640?wx_fmt=png&from=appmsg)

通过多次离子注入，JFET 区杂质分布如图 3-3 所示，得到的 JFET 区有效深度约为 0.8μm，掺杂浓度约为 1e16cm-3，掺杂分布较为均匀。

为了研究 JFET 区的掺杂和宽度对器件静态特性的影响，分析了 JFET 宽度为1.8μm、2.0μm、2.2μm 情况下，有无 JFET 掺杂的六种不同 JFET 情况。阻断特性曲线如图 3-4（a）所示，可知 JFET 区域的宽度和掺杂浓度对击穿电压影响不大，最大差值仅为 100V。随着 JFET 宽度的增加，Pbase 区对于栅氧化层的屏蔽作用下降，致使其栅氧场强也有所增加，因此对应的击穿电压下降，如图 3-4（b）所示。当 JFET 宽度大于 2μm 时，Pbase 区对栅氧化层的保护作用近似消失，击穿电压不再下降。如图 3-5 所示为 JFET 区域注入对 Pbase 边缘电场强度的影响，根据仿真结果，存在 JFET 注入的器件，发生雪崩击穿时，由于 Pbase 区中的耗尽区展宽，Pbase 区边缘临界电场强度增加，栅氧电场强度也更高，可承担的击穿电压值更低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAJ984c8Tw8nwAfJA4qqzLpRkPMx2fiammLxvicGiblDTzE5JyFvTyqSy7w/640?wx_fmt=png&from=appmsg)

如图 3-6 所示，器件采用 JFET 注入时的正向电流能力比未采用 JFET 注入的器件更强，这是由于 JEFT 区域注入提供了更高的 N 型掺杂浓度，使得 JFET 区的导通电阻更低。随着 JFET 宽度增加，电流路径更宽，故 MOSFET 的正向导通能力也有所增加。但是当 JFET 宽度达到一定时，电子的电流能力不再有明显的提升，这是由于此时器件电流路径已足够宽，器件的导通电阻值也保持一定，不再继续降低。值得注意的是，当 JFET 宽度为 1.8μm 时，输出特性曲线呈现了夹断特征，这是由于当 JFET 区过窄时，Pbase/N-Drift 形成的 PN 结耗尽区相连接，JFET 区夹断，电子无法从沟道经 JFET 区到达漏极，器件无法导通。随着 VDS施加的电压增加，JFET 区中的电子增加，等效于 N 型掺杂浓度提高，因此等效的 PN 结耗尽区变窄，电流通路形成，器件导通。如图 3-7 可知，在 VDS较小时，JFET 宽度分别为 1.8μm 和 2.0μm 的耗尽线分布，图 3-7（a）中存在明显的夹断特征，图 3-7（b）中 N-drift 侧的耗尽线独立未相接，电流路径导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMApyYXBF9J30hMpbmykiaLlhVwqccyL0qveDcRqvAZnWiaIwZLktVsZEBw/640?wx_fmt=png&from=appmsg)

由图 3-8 可以看出，JFET 区域的注入与否对阈值电压的影响较小，阈值电压均为 3V，此时，即使漏源电压 VDS很小（为 0.1V），采用 JFET 区域注入的器件正向电流能力仍强于无 JFET 注入的器件。综合考虑阻断特性和正向电流特性，JFET 区宽度设为 2μm，采用离子注入形成 JFET 区，此时击穿电压为 2208V，比导通电阻为 4.8 mΩ·cm2，阈值电压为 3V。

**3.2 终端结构设计**

本文设计的 SiC MOSFET 器件耐压等级为 1700V，考虑到工艺难度和结终端效率，器件采用场限环结终端技术。

场限环的目的是通过增加浮空场限环缓解主结处的尖峰电场，以主结部分为基准，场限环逐个向后布置，利用后一个场限环对前一个场限环场强的分担，扩宽了耗尽区，改善了曲率效应，提高了器件的击穿电压。在设计优化场限环结构时，为了简化工艺流程，场限环与 Pbase 区同步注入，掺杂浓度一致。故设计结终端主要从场限环数量(N)、环间距(Spacing)、环宽(Width)三个方面考虑，并且从节省功率器件外围边缘终端占用空间的角度出发，尽可能减小场限环的总长度。

针对常规的平面型 MOSFET 的耐压等级，仿真设计的场限环结构如图 3-9 所示。其中，环数设为 n，第一个环间距设为 S1，第一个环宽设为 W1，第 n 个环的环间距设为 Sn，第 n 个环环宽设为 Wn。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAhywHMvYMRGZ6pI76F1Dc3icIK11kYQ0FadAbxTWalQcRjLJiazJGHP0w/640?wx_fmt=png&from=appmsg)

**3.2.1 均匀间距场限环**

在本小节中，场限环结构是均匀环间距结构。设置的初始环宽 W 为 3μm，环数 n 为 25 个，环间距 S 从 1.0μm，以 0.1μm 的增量线性增至 2.0μm。如图 3-10（a）所示，随着环间距的增长，击穿电压呈现先增加后下降的趋势。当环间距为 1.6μm时，击穿电压值达到最高，为 2167V。不同环间距的场限环电场强度分布图如图3-10（b）所示，外侧场限环的电场强度随着环间距增加而降低。这是因为当环间距过小时，场限环对于主结的场强分压能力较强，在环数一定的情况下，此时最外侧的场限环电场强度较强，击穿易发生在外侧场限环拐角处，击穿电压较低。当环间距过大时，内侧的场限环对于主结的场强分压能力不够，反向耐压能力下降。当环间距为 1.5μm-2.0μm，击穿电压均高于 1700V。选取合适的环间距，既要达到更高的终端效率，也要同时满足较小的终端长度，节省器件面积。在均匀场限环终端结构仿真设计中，可选择的环间距为 1.5μm 和 1.6μm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAibNibibJgy1r9ng1gohASDNE0Ayph1ibVf99P9QpYiciboa8kPkyQKLnwDNA/640?wx_fmt=png&from=appmsg)

接下来研究环宽 W 对击穿电压的影响，选取的环间距为 1.5μm，通过图 3-11可以看出，当场限环宽度过小时，场限环宽度对提高器件的击穿电压有一定的作用；当场限环宽度达到一定时，击穿电压维持在一定值（2010V），再次增加环宽对阻断电压值影响较小。因此在击穿电压值能达到最高的情况下，选取较小的环宽值可得到较小的终端长度。

通过对均匀环间距场限环设计可发现，从器件耐压条件和电场分布情况可知，以下两种设计均可取得较好的效果：一是当 S=1.5μm，W=3μm，击穿电压值可达到 2010V，对主结处的电场有较好的分压作用，但是结终端边缘的电场仍存在尖峰电场；二是当 S=1.6μm，W=3μm，击穿电压值达到 2167V，电场强度分布平缓，相较于环间距为 1.5μm，其终端面积更大，从而在同一芯片面积下，有源区面积下降，器件的性能下降。为了进一步优化器件的结终端，本文接下来将采用多区缓变间距场限环结构。

**3.2.2 多区缓变间距场限环**

多区缓变间距场限环是指将场限环分为多个组（N），同一组内的环间距一致，相邻组之间的场限环环间距以δ为增量缓变增长，即第 i 组场限环环间距表示为式（3-4）：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA5J6ibtGj8L7fQ32mOytZGMZy2HhEzscrPcUjicH7hMibsMs75yqgqiae5Q/640?wx_fmt=png&from=appmsg)

根据均匀间距场限环优化参数，选取的环宽为 3μm。初始环间距 S1分别选取1.4μm、1.5μm、1.6μm。初始环间距 S1 的选取包括 1.4μm 是因为：虽然均匀环间距为 1.4μm 时器件耐压值较低，但这是由于终端边缘场强较高，而采用缓变间距场限环会在一定程度上提高终端长度，故也将环间距为 1.4μm 作为考虑对象之一。为了保证电场分布的平缓，尽量避免场强在终端方向的突变，因此考虑分组为以下两种情况：一种是每组环数为 5 个，共有 5 组，表示为 5×5；还有一种是每组环数为 4 个，共有 6 组，表示为 4×6。接下来将对两种情况进行仿真与分析。

**3.2.2.1 每组环数×组数：5×5**

初始环间距 S1分别选取 1.4μm、1.5μm、1.6μm，环间距增量δ分别为 0.1μm、0.2μm，得到击穿电压如表 3-4 所示，可以看出当环数和环宽一致的情况下，当S1 为 1.6μm 时，随着环间距增量δ变大，击穿电压反而下降。根据图 3-12 所示的电场强度分布图，可知随着δ增大，后端的场限环无效，对主结失去保护作用，且前端的场限环环间距过大，电压分担作用减弱，故击穿电压下降，因此不再考虑以 1.6μm 为初始环间距的缓变终端结构设计。

由图 3-13 可以看出，当 S1为 1.4μm、1.5μm 时，随着环间距增量δ变大，击穿电压也增大。其中当 S1为 1.4μm，缓变环间距终端结构的击穿电压显著提高：主结处的电场强度更高，外侧电场强度更低，电场强度分布更平缓。根据击穿电压值和场强分布图，选取的终端参数为（1）S1=1.4μm /δ=0.2μm；（2）S1=1.5μm /δ=0.1μm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAgM6RKxs8pEZj0oAiav9lRFLnByB4486WE0iaggbEYn4TvCjicHdYE6duA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMATuN9GQTYp8q7TYRpWnRGEG8icxmZ3IDIdeASBquLJ8oYp46sc1f4Klw/640?wx_fmt=png&from=appmsg)

**3.2.2.2 每组环数×组数：4×6**

参考前两节，初始环间距 S1分别选取 1.4μm、1.5μm，环间距增量δ分别为 0.1μm、0.2μm，得到击穿电压如表 3-5 所示，可以看出当环宽和初始环间距一致的情况下，随着环间距增量δ变大，击穿电压增加。同样当 S1为 1.4μm，与环间距相同的均匀环间距终端结构相比，缓变环间距终端结构的击穿电压明显提高。电场强度分布图如图 3-14 所示，当环间距增量δ相同，S1 越大，对主结的电场承担减小，主结处的电场强度更高，外侧电场强度更低；当初始环间距 S1相同，δ越大，则电场分布越平缓，最外侧更不容易产生尖峰电场，电场强度分布更平缓。根据击穿电压值和场强分布图，选取的终端参数为（1）S1=1.4μm /δ=0.2μm；（2）S1=1.5μm /δ=0.2μm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAROBwqyiaYXq5nDEY54GmsrNHWC58D1FXrNa4yuBqMQrJMowGGCk4sag/640?wx_fmt=png&from=appmsg)

在终端设计中，还需考虑终端长度，这是由于如果终端面积较大，在同一芯片面积下，有源区面积将会下降，从而器件的性能下降。多区缓变场限环设计的终端长度如式（3-5）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAmqYP625Hq2xeFpaAWdH0KZ0YME7opZGCGvdziaJIrgQ8ibTphDl222CA/640?wx_fmt=png&from=appmsg)

其中，终端总长度设为LTermination，场限环个数设为 n，场限环组数设为 N。最终各个终端结构所得的终端长度如表 3-6 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAQO1AHcWhPDHD7kbCqMQ81jIvTbD5bzXouG6Sc5hNE10ax1NibMrducQ/640?wx_fmt=png&from=appmsg)

两种终端设计方案中的器件击穿电压值相差不大，且均满足器件耐压需求，因此在确认场限环参数时，主要从电场强度分布曲线图和场限环长度进行分析。从电场强度来看，为了得到电场分布更为平缓的结构，5×5 组选取了（1）S1=1.4μm/δ=0.2μm；（2）S1=1.5μm /δ=0.1μm，4×6 组选取了（1）S1=1.4μm /δ=0.2μm；（2）S1=1.5μm /δ=0.2μm。从场限环长度来看，4×6 组的场限环长度更短。综上，选取的终端结构为，场限环分为 6 个组，每个组有 4 个场限环，环宽均为 3μm，初始环间距 S1为 1.4μm，随后环间距以 0.2μm 的增长速度缓慢增长，得到击穿电压为2180V。相同掺杂浓度和厚度条件下，理想的平行平面结击穿电压为 2210V。因此，与理想平行平面结相比，终端效率高达 98%。

**3.3 深槽 P+源极结构设计**

研究表明雪崩击穿时，碰撞电离产生的热空穴会在电场的作用下注入到 JFET区域上方的栅极氧化物中，引起器件性能的退化，降低了 SiC MOSFET 的可靠性和寿命。为了提高器件的抗雪崩能力，本文提出了深槽 P+源极 MOSFET 结构，新结构与常规的平面栅 MOSFET 的漂移区掺杂浓度和厚度一致，但增加了其 P+ 源区的注入深度（Dtrench），形成深槽的 P+源极结构。首先由于离子在 SiC 中扩散系数较低，无法采用硅基器件常用的扩散法，再者缺乏高能（MeV）离子注入机，故 P+源极直接实现深注入不现实，因此选择在 P+源区上方先刻蚀槽再进行离子注入，深槽 P+源极器件结构如图 3-15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAgg5ZyeP2M9Y3yM5ZYcbm3DGSpAjRMsmbCZ4nU9qrIusnrdJWSfJBiaA/640?wx_fmt=png&from=appmsg)

相比于平面型 MOSFET，深槽 P+源极型发生雪崩击穿时，击穿点除了在Pbase/N-Drift拐角处，还可能出现在 P+源极下方，击穿点的位置和沟槽深度（Dtrench）有关。当 Dtrench增加到一定时，击穿电压由位于 P+源区下方的 Pbase 区和 N-漂移区形成的 PN 结承担，由于 P+源区存在刻蚀沟槽的缘故，Pbase 相对平面型结构更窄，甚至在反向耐压时完全耗尽，因此击穿点位于 P+源区下方时的击穿电压小于Pbase/N-Drift 的击穿电压，击穿首先发生在 P+源区下方的 PN 结处，雪崩击穿位置将从 Pbase/N-drift 拐角处转移至 P+源区下方，雪崩电流从漏极通过最短路径从P+源极流出。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAEWBvYXP113LB7CN4n0EbltYZudCrfQdQCKiawiaBgupg6DCjVzcVaAZQ/640?wx_fmt=png&from=appmsg)

对于深槽 P+源极 MOSFET，除 P+源极深度外，其他参数和上一节确定的平面型参数一致，针对 P+源极的刻蚀深度进行设计优化。随着 P+源区深度 Dtrench增加，器件的击穿电压呈现下降趋势，其中当 Dtrench为 0.6μm 时，深槽 P+源极 MOSFET的耐压值和平面型 MOSFET 的耐压值几乎一致，为 2208V。当 Dtrench继续下降时，击穿电压值小于平面型结构，且呈现逐步降低的趋势。其中 Dtrench为 0.8μm 时约为 2000V，Dtrench为 1.0μm 时约为 1800V，均满足 SiC MOSFET 设计耐压需求，如图 3-16 所示。

当耐压值分别为 2000V/1800V 时，由击穿电压计算表达式（2-11），发现击穿电压值与漂移区参数不符合。根据 PN 结的工作原理可知，空间电荷区为中性区，即正电荷量与负电荷量相等，如表达式（3-6）所示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMALibdXbptacZX6PiamkNF2FcdveWWHgDDG9V9zdDJwdCIdEI8c4TJIBsA/640?wx_fmt=png&from=appmsg)

其中 Q 为电荷量值，A 为电流垂直经过的面积，xp/xn分别为 p 型/n 型杂质的耗尽区宽度，NA/ND 分别为 p 型/n 型杂质的掺杂浓度。根据掺杂浓度和击穿电压值，计算可知 Dtrench从 0.8μm 下降至 1.0μm 时，击穿电压下降了 200V，由式（2-9），则漂移区的耗尽区厚度减小了 2μm，根据式（3-6）计算可知 Pbase 区的耗尽区宽度差约为 0.2μm。由于 P+源极的槽深的差值为 0.2μm，则位于 P+源极下方的 Pbase区的厚度也减小了 0.2μm，与耗尽区宽度差值一致，验证可知与预期的击穿时发生了 Pbase 区穿通情况相符。因此，采用深槽 P+源区结构，且当深度大于等于 0.8μm时，漂移区未完全耗尽，此时发生了 Pbase 区穿通现象。

根据图 3-17 可知，随着 P+源区深度 Dtrench增加，电场强度和电流路径发生了转移。当 Dtrench为 0.6μm 时,电场强度最大值处于 Pbase 区拐角处，电流路径也流经此拐角处，因此击穿点处于 Pbase/N-Drift 拐角处，与平面型的一致。当 Dtrench继续增加时，击穿电压值小于平面型的，这是由于当 P+源区深度达到一定时，P+源区下方形成的 PN 结由于 Pbase 区较窄造成了 PN 结穿通，峰值电场部分转移至P+源区的拐角处，电流从 Pbase/N-Drift 拐角处转移至 P+下方，相较于平面型MOSFET，深槽 P+源极结构的耗尽区更窄，因此器件更易击穿，击穿电压下降。当 Dtrench为 1μm 时，击穿电压继续下降，根据曲率效应可知，当 Dtrench值较大时，Pbase 区对 P+源区的保护作用减弱，迫使 P+源区拐角处的电场强度最大，电流路径转移到了 P+源区的拐角处，耐压值进一步降低。因此在下文对比研究 UIS 特性时，选取的深槽 P+源极结构的沟槽深度为 0.8μm，其他参数和平面型结构一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMADsiaFt2iboPHNdTwBfhOKXmqQXhHgrphONtqWeSX0n6IcIvHibj76sddw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAjmlPdPiaibqdKElrVWzp9jQ7rchRlvvwRM7oicPiaBAMW1eEDswFXDL7Wg/640?wx_fmt=png&from=appmsg)

**3.4 动态雪崩失效机理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMACeu54dpAicwHl0WnbXIialbcDR7w2Wv0EFp3Oc6BSYA07nbc9ZDicdJCg/640?wx_fmt=png&from=appmsg)

  

UIS 测试电路如图 3-18 所示，被测试器件（DUT）为前两节设计的平面型MOSFET 和深槽 P+源极型 MOSFET。通过在栅上施加电压脉冲以控制器件的开启和关断，将栅极所加的电压值记作 VGS，栅极高电平时间即器件的开启时间记作ts。采用一定的步长逐步增加 ts以改变雪崩峰值电流，当 ts达到一定值时，存储在电感中的能量经器件释放并造成待测器件的失效，计算可得器件所能承受的最大雪崩能量 Eav。本节分别研究了两种结构的 UIS 特性，探究了深槽 P+源极型MOSFET 对栅氧可靠性和器件的抗雪崩能力的影响。

**3.4.1 仿真模型**

本文利用 Silvaco 软件进行器件的仿真优化，除了常规的迁移率模型、复合模型以及不完全电离模型外，还需要考虑相关热模型的选取。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAbV1bLZ18cnicYdS9D4SR2SNbnWKOUKSE6ANRjfGBJgq5oICZCx76dVA/640?wx_fmt=png&from=appmsg)

其中，TL为晶格温度，N.ANISOHW 和 P.ANISOHW 值的设置可参考用户手册，需要注意的是，N.ANISOHW 和 P.ANISOHW 值越大，与温度关联性越低。

**3.4.2 电学参数对 UIS 特性的影响**

在本节中，主要研究不同电学参数对于器件 UIS 特性的影响，包括电感 L、栅极电压 VGS 和栅极电阻 RG。首先，分析了不同电感负载 L 的影响，研究了在不同电感负载情况下峰值雪崩电流和单次雪崩能量的大小；其次探讨了栅极电压的改变对 SiC MOSFET 结构抗雪崩能力的影响；最后研究了栅极开启速度对 UIS 特性的影响。

**3.4.2.1 电感负载 L**

当 SiC MOSFET 的栅极开启且施加的栅极高压的时间（ts）相同时，器件导通，电压源向负载电感 L 充电，电流缓慢增长。不同的电感下，电流增长速度不同，电感值越高，电流增长速度越慢，其峰值雪崩电流越低，如图 3-19（a）所示。根据式（2-12）可知，峰值电流与电感为线性负相关。因此，当电感值分别为 0.5mH、1mH、2mH 时，得到的峰值电流密度分别为 1190A/cm2、603A/cm2和 309A/cm2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAr72XiaicqfcdE1sTfAOVu4uJ3Dc4ibr4TR76qv4yDLfLJkicfublRbwa0Q/640?wx_fmt=png&from=appmsg)

在栅极关断的同时，漏源电压 VDS迅速增长，其雪崩电压值 VB均为 2350V。其中，当电感值为 1mH 和 2mH 时，器件正常关断，漏源电流下降为零，根据式（2-14）可知，电流下降时间（tav）一致。当电感值为 0.5mH 时，器件发生 UIS失效，电流下降一段时间后再次上升，故其雪崩电压值维持时间较另外两种情况更短。器件的晶格温度也随着电感值的降低而增高，未发生 UIS 失效的情况下，器件的温度在漏源电流下降为零后呈现下降趋势，而发生 UIS 失效的器件的晶格温度在一定时间内维持 1750K，且随着温度的增加，漏源电压在雪崩失效期间的上升更为明显，如图 3-19（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMATXbaR5gOOgibdhSYjicgW4e09rZpGlhqldCewPPlfhAcy7ibNo6QzSTqg/640?wx_fmt=png&from=appmsg)

为了进一步研究电感负载对 UIS 特性的影响，设定了额定的单脉冲雪崩能量（Eav=3.7J/cm2）。在不同电感负载情况下，通过逐渐增大栅极驱动脉冲宽度，直至器件达到指定的雪崩能量值，以得到不同电感负载的 UIS 曲线。当电感负载值改变时，可以得到不同瞬态雪崩电流波形，如图 3-20（a）所示。在同样的雪崩能量情况下，电感负载较小时（L=0.2mH），器件已发生 UIS 失效，而其余情况器件均正常关断。这是由于较小的电感负载会产生大电流，温度迅速上升导致热量集中，器件单位面积产生的功耗也更大，从而器件更易发生失效，如图 3-20（b）所示。

图 3-21 展示了不同电感值的测试电路对峰值雪崩电流和器件抗雪崩能力的影响。随着电感增大，器件的单次雪崩能量基本维持一定值（4.0 J/cm2），而峰值雪崩电流值则随之下降。根据式（2.14）和式（2.17）得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAzS1UMX1hWXtr9QPpoNYLlIAb9S8iaFNtzYQ8vKyfia3icgLAfia6plS47Q/640?wx_fmt=png&from=appmsg)

由式（3-13）可知，当电感 L 变小时，由于器件雪崩能量不变，故其雪崩峰值电流上升。此外，在 Si 基 MOSFET 的 UIS 测试中，如若测试电感值较低时，漏源电流值较大，因此 Pbase 区电阻产生的压降也较高，从而由 N-Drift/Pbase/N+ 源区形成的寄生双极型晶体管（BJT）导通，器件失效。此失效模式通常先于热失效，因此能承受的单次雪崩能量更低。在本小节中，当 L 为 0.2 mH 时，电流密度高达 1467A/cm2，虽然雪崩能量略低于大电感负载情况，然而电流路径经过 Pbase区从 P+源极流出，未经过 N+源极，表明寄生 BJT 发射极与基极间的 PN 结并未导通，故排除了 SiC MOSFET 中寄生晶体管开启这一失效模式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAgFla0ZYBfnotObSe3wiauCSuoAFO785NgQySWriaGH88orygsG7CnJ6w/640?wx_fmt=png&from=appmsg)

**3.4.2.2 栅极电压 VGS**

在本小节中主要探究器件关断阶段，栅极施加的低电平对 UIS 特性的影响。图 3-22 所示为栅极高电平时间为 60μs 时，不同栅极低电平对于漏源电流、漏源电压的影响。可以看出当 VGS=0V 时，峰值雪崩电流密度达到 646A/cm2，栅极关断后电流先下降随后上升，发生了 UIS 失效。在相同的测试条件下，将栅极低电平变为 VGS=-5V，由于栅极高电平时间一致，故峰值雪崩电流一致。此时，漏源电流下降至零，雪崩过程结束，器件顺利关断，未发生 UIS 失效。因此，在 VGS=-5V条件下器件要发生 UIS 失效，则需要更高的峰值雪崩电流，即需要更大的雪崩能量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA8092BUlhp72KXVia2pqic2psibia6u1SDP12Hgd6CbTicoXzbewT88A2iagw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA82tLTKBdX7rL6cicPny8ibIeCWy8vsLQF1wqOciaLr27MHyTQkdhIBbWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAg9Z3ibGbXl9VdibOJMK6KJt77xLrkQkAG6DzczmLBlU15WktoZwt8PfA/640?wx_fmt=png&from=appmsg)

图 3-22 当 ts为 60μs 时，不同 VGS对漏源电流（左轴）和漏源电压（右轴）的影响图 3-23 显示了当 VGS=-5V 时，待测器件发生 UIS 失效时的曲线。此时栅极维持高电平时间为 63μs，达到的峰值雪崩电流密度更高（679 A/cm2）。根据式（2-16）可得，VGS 为 0V 和-5V 的雪崩能量分别为 4.2 J/cm2和 4.4 J/cm2，可以看出，负关断栅极电压 VGS使器件的雪崩耐受能力略有提高。

针对负栅极低电平能够提高抗雪崩能力，研究了器件在雪崩击穿过程中的电流路径，分析了栅电压对 UIS 特性的影响因素。图 3-18 为雪崩过程中的电流密度分布图，其中图 3-24（a）为器件在雪崩击穿发生的初始时刻的总电流密度分布图，图 3-24（b）为器件在雪崩击穿过程快要结束时的总电流密度分布图。可以看出在雪崩击穿阶段，电流从体二极管逐渐向沟道转移。因此，到雪崩击穿后期，电流在 N+源区正下方的沟道和 Pbase 区中流动，图 3-25 进一步展示了此时的电流分布情况。图 3-25（a）为空穴电流密度分布，这是体二极管发生雪崩击穿，产生的空穴通过 Pbase 到达源电极，形成空穴电流。图 3-25（b）所示为电子电流密度分布，这是 MOSFET 工作而产生的电子电流，雪崩过程中器件处于大电流高电压的情况下，晶格温度增高，导致沟道误开启，则在关断时采用负栅极电压可以更有效地延迟或避免器件沟道的误开启。因此，在其余测试条件相同的情况下，采用负栅极电压关断时，需要更长的栅极高电平时间，得到更高的峰值雪崩电流才会导致 UIS 失效，从而器件的最大雪崩能量更大。

**3.4.2.3 栅极电阻 RG**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAF22xg0O4GpEsjpdRZfZU0byqA49xTEKibcgpjDjMEPkR0XzYj5ugSlA/640?wx_fmt=png&from=appmsg)

研究不同栅极电阻的测试电路对峰值雪崩电流、器件抗雪崩能力以及晶格温度的影响，可以看出，所有曲线完全重合，如图 3-26 所示。故栅极电阻值较小时（小于 30Ω），对于 UIS 仿真结果完全没有影响，其功能为保护电路。

**3.4.3 UIS 特性研究**

根据 3.4.2 节可知，UIS 仿真研究中采用的参数为：栅极电阻 RG 设为 10Ω，电感 L 设为 1mH，电压电源 Vdd设为 200V。仿真最开始时，MOSFET 关断，关断时长 t1设为 50μs。接着栅极施加正压，设置栅压为 20V，器件开启，经过 ts 后，栅极电压由高电平转换为低电平，随后保持低电压，低电平时长为 t2。值得注意的是，t2时长不应过小，否则无法得到完整的 SiC MOSFET 失效过程。

**3.4.3.1 常规 SiC MOSFET 器件**

为了研究常规的平面型 SiC MOSFET 器件的 UIS 特性，主要从两个方面入手，一个方面是研究器件在 UIS 过程中的曲线规律，如漏源电流、漏源电压和晶格温度随时间的变化。另一个方面是研究平面型 MOSFET 在雪崩过程中的各项物理参数分布图，为后续分析提供基础。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMApO3NXhUia6mUQiazAHlqI2qICWL8PYFaCYwanYDMvXSdLt3X57r1g8mw/640?wx_fmt=png&from=appmsg)

图 3-27 平面型 MOSFET 分别在 ts=55μs、58μs、60μs 时，（a）漏源电流 IDS与时

间 t 的关系曲线；（b）漏源电压 VDS与时间 t 的关系曲线；（c）晶格温度，T 与时间 t 的关系曲线；其中，小图为红圈部分的放大图

从图 3-27 可以看出，随着 ts 增加，电流峰值增大，最高晶格温度提高。在器件关断瞬间，漏源电压 VDS 迅速上升，器件雪崩击穿电压值达到 2350V。当设定的 ts 值不大于 58μs 时，漏源电流 IDS 线性减小至零，器件的雪崩击穿过程结束。VDS由于电路电感等杂散参数而产生一定的震荡，随后逐渐恢复到母线电压 200V，器件安全关断。

当设定的 ts 值大于 58μs 时，SiC MOSFET 发生 UIS 雪崩失效，IDS 在器件关断后线性下降，然后在某一时刻，器件失效，栅极失去了控制器件开启或关断的能力，IDS以一定的速率再次增长。由于器件失效，逐渐增加的电流流经器件，源漏两端的电势差也逐渐下降，因此 VDS经过一段时间下降至 0V。随着 ts的增大，峰值电流也随之增大，最高晶格温度达到 1600K。取 ts为 58μs 作为 UIS 失效的临界点，单次雪崩能量为 4.29 J/cm2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAOibcaqPkR1wXyYxzGUuPNCqP6tMrhZWTrV9ugGbkhZOfqDQvkUuiaylg/640?wx_fmt=png&from=appmsg)

当栅压加压时间为 58μs 时，在电流下降过程中的电场强度分布、电流密度分布、碰撞电离率以及晶格温度分布如图 3-28 所示。可以看出在发生雪崩击穿时，最大电场强度处于 Pbase 拐角处，电流主要从漏端通过 N-漂移区经过 Pbase 拐角，最后从 P+源区流出。最大碰撞电离率集中在 Pbase 拐角处，电离碰撞产热，与器件的晶格温度相关，因此可看到最高晶格温度也主要集中在漂移区中央。

**3.4.3.2 深槽 P+源极型 SiC MOSFET 器件**

针对 SiC MOSFET 器件的 UIS 特性，考虑现有 SiC MOSFET 制造工艺技术以及 UIS 对器件可靠性的影响，基于转移雪崩电流路径的思想，通过减少雪崩过程中栅氧化层中热载流子的注入来减小 SiC/SiO2的界面态密度，本文提出了一种深槽 P+源极 MOSFET 结构作为改进结构，通过研究改进型 MOSFET 的结构特点，获得不同物理结构和电路参数对其 UIS 特性的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAjcKXs5RQQaqOgdbOt3iaG890Gj57iaZMicKHBicGWH7jQN15wicV0CzuWsQ/640?wx_fmt=png&from=appmsg)

在栅压关断时，深槽 P+源极型 MOSFET 的漏源电压 VDS瞬间迅速上升至器件雪崩击穿电压值 2150V。当设定的 ts 值不大于 60μs 时，漏源电流 IDS线性减小至零，器件的雪崩击穿结束。VDS迅速下降，经过一定的振荡后逐渐恢复到 Vdd，器件安全关断。当设定的 ts 值大于 60μs 时，SiC MOSFET 发生 UIS 雪崩失效：IDS在器件关断后下降，产生的雪崩能量超过器件的承受范围，器件失效，栅极失去了控制器件的能力，IDS以一定的速率再次增长。由于器件失效，逐渐增加的电流流经器件，源漏两端的电势差也逐渐下降，因此 VDS经过一段时间下降至 0V，如图 3-29（a）（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA5pMZG1WtYywib3xiayDJuPmQUS8SqIQTvvA3H8Zr39icibrSz7ThvWP4aA/640?wx_fmt=png&from=appmsg)

当栅极加压时间为 60μs，器件临界 UIS 失效，在电流下降过程中的电场强度分布、电流密度分布、碰撞电离率以及晶格温度分布，如图 3-30 所示。可以看出发生雪崩击穿时，相较于平面型 MOSFET，峰值电场主要集中在 Pbase 拐角处和深槽 P+源极拐角处，这是由于该突出的部分存在曲率效应。电流从 Pbase 拐角处转移至深槽 P+源极源区下方，避免了横向流经 Pbase 区后经 P+源区流出的电流路径。最大碰撞电离率集中在两端 P+源区，电离碰撞产热，晶格温度上升，因此最高晶格温度也主要集中在两端 P+源区。如图 3-29（c）所示，随着 ts 增大，Iav 增大，晶格温度 T 也随之增大，当达到 UIS 失效情况时温度可达 1520K。综合分析可知，当栅极加高压时间为 60μs 时，改进结构处于临界 UIS 失效情况，单次雪崩能量为 4.50 J/cm2。

通过对比两种结构的击穿位置，发现深槽 P+源极结构有效转移了电流路径。观察其 UIS 仿真曲线随栅压时间的变化，并计算两种结构的单次雪崩能量。由仿真结果可知，平面型 MOSFET 在栅极加压 58μs 后发生 UIS 失效，深槽 P+源极型MOSFET 在栅极加压 60μs 后发生 UIS 失效。由于器件的耐压等级一致，外部电路参数一致，峰值电流与所加栅压时间正相关，因此根据式（2-17）计算可得，平面型和深槽 P+源极型雪崩能量 Eav分别为 4.29 J/cm2 和 4.50 J/cm2，改进结构将单次雪崩能量提高了 5%，提升效果不明显。根据第二章调研可知，MOSFET 器件的雪崩击穿机理有二：一是大电流高电压情况下结温升高，发生热击穿；二是由 N-Drift/Pbase/P+源极形成的寄生晶体管开启导致器件击穿，且该失效模式先于热击穿发生。在本节中，深槽 P+源极型结构的单次雪崩能量与平面型 MOSFET 的相差不大，且从图 3-28（b）可以看出，电流路径经过 Pbase 区从 P+源极流出，未经过 N+源极，表明寄生 BJT 发射极与基极间的 PN 结并未导通，因此可以排除 SiC MOSFET 中的寄生 BJT 在雪崩过程误开启的这一种 UIS 失效模式。通过分析两种结构的最高晶格温度可看出，晶格温度均高于 SiC 材料的本征晶格温度（约为1500K），推测此时的失效模式为体二极管承受雪崩耐压，随着晶格温度升高，发生热失效。

**3.4.4 动态雪崩失效对比分析**

根据调研发现，SiC MOSFET 的氧化物/半导体界面质量较差，SiC/SiO2的界面电荷比 Si/SiO2大约高两个数量级。当 SiC MOSFET 器件长时间在高栅压应力条件下工作，位于 SiC/SiO2 交界处附近的氧化层陷阱容易俘获热载流子，增大了SiC/SiO2界面态密度，因此雪崩击穿过程中，SiC 器件栅氧化层的可靠性问题亟待解决。

在本节中考虑当SiC MOSFET器件处于多次重复UIS测试时，器件的SiC/SiO2界面陷阱中存在热载流子俘获效应，SiC/SiO2 界面态密度增大。在上一节可以看出，雪崩击穿时，深槽 P+源极型结构（改进型）MOSFET 结构有效转移了雪崩击穿点，电流不再经过 Pbase/N-Drift 拐角处，而是从漏极流经 P+源极下方再从 P+ 源极流出。接下来以平面型 SiC MOSFET 结构作为对比，研究长时间工作在高栅压应力条件下，改进型 SiC MOSFET 的 UIS 特性以及该结构对栅氧化层的保护作用。

改进型 MOSFET 结构通过转移雪崩击穿点转移了电流路径，从而有效地减小了雪崩击穿过程中的热载流子注入，降低了 SiC/SiO2的界面态密度。由于难以对动态过程中的陷阱俘获与释放进行仿真，因此参考了国内外学者的处理方法，在仿真中采用添加界面态密度的方法\[63\]。根据两种结构的氧化层陷阱对热载流子的俘获作用不同，在对比实验中，深槽 P+源极结构的界面态密度值为 5e11cm-2，平面型结构的界面态密度值为 1e12 cm-2。当选取的栅极施加高压的时间为 60μs 时，两种结构均发生 UIS 失效，分别研究两种结构在有界面态和没有界面态情况下的UIS 特性。由图 3-31 可以看出，电流曲线均呈现失效特性，在同一结构中，添加界面态的电流抬起值更高，可以推断出器件失效时刻更早，雪崩能量更低，抗雪崩能力更弱。在晶格温度曲线中可以看出，平面型的温度约为 1600K，高于深槽P+源极型的晶格温度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA47VUQ3R9zf9sEibmOHCNM2Gmriba4nxxhOrE9ZUR8ZqxhBgEVHtJ0eww/640?wx_fmt=png&from=appmsg)

为了研究深槽 P+源极结构的抗雪崩能力和栅氧可靠性问题，接下来研究不同结构分别在不同界面态时的 UIS 特性。图 3-32（a）为器件均未添加界面态时，临界 UIS 失效情况下的漏源电流和漏源电压随时间变化的曲线，在上一小节中已经详细讨论，平面型的和深槽 P+源极型选取的 ts分别为 58μs 和 60μs。图 3-32（b）为器件有界面态时，在 UIS 临界失效情况下的漏源电流和漏源电压随时间变化的曲线，界面态情况与前面设定一致。具有界面态的平面型和深槽 P+源极型结构施加的栅极高电压分别为 55μs 和 58μs 时，SiC MOSFET 器件达到临界 UIS 失效。

图 3-33 为两种结构具有不同界面态的晶格温度曲线，可以看出，未添加界面态的晶格温度略高于添加了界面态的晶格温度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMADxIuCVsY0iaE04kukokwbXAHly6secG5fvcBL6RAkSOsFVWicFc7cOvA/640?wx_fmt=png&from=appmsg)

为了更准确地对比器件的抗雪崩能力，通过式（2-17）分别计算出单次雪崩能量，结果如表 3-7 所示。同一种结构，存在界面态的 SiC MOSFET 器件的单次雪崩能量更低，峰值雪崩电流更低；同一种界面态状态，深槽 P+源极型结构抗雪崩能力更强，峰值雪崩电流更高，如图 3-34 所示。需要注意的是，临界 UIS 失效时，无界面态的平面型和有界面态的深槽 P+源极型的 ts 均为 58μs，因此峰值雪崩电流密度一样，然而由于结构特点，深槽 P+源极型雪崩击穿电压（VB）略低于平面型的 VB，因此雪崩能量也略低于平面型的雪崩能量。

多次重复 UIS 测试时，器件 SiC/SiO2界面陷阱容易俘获热载流子，本文提出的深槽 P+源极型 MOSFET 结构能够有效地转移雪崩击穿点，减小雪崩击穿过程中的热载流子注入，降低了 SiC/SiO2 的界面态密度，因此接下来研究了改进型MOSFET 对提高器件栅氧可靠性的能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAPSVacqGBjW8qZkJZ4nDtCicuoNScSibJ3ANoPxDIEKyU2icuwriaEJ7Z8A/640?wx_fmt=png&from=appmsg)

图 3-35 展示了平面型和深槽 P+源极型 SiC MOSFET 分别为无界面态、界面态密度分别为 5e11cm-2和 1e12 cm-2的碰撞电离系数，取值点分别距离 SiO2/SiC 界面0.9μm 和 1.9μm，位于器件的最大碰撞电离率处。可以看出，同一结构中，界面电荷密度越高，电离碰撞越集中，主要发生在 Pbase 拐角处。相同界面电荷密度时，深槽 P+源极结构的碰撞电离分布曲线集中在 P+源区下方，且碰撞电离率明显低于平面型，故其发生 UIS 失效时晶格温度也更低。

平面型和深槽 P+源极型 SiC MOSFET 具有不同界面态密度时的栅极氧化层电场强度如图 3-36 所示，图中所示为距离 SiO2/SiC 界面 0.01μm 处的栅氧电场强度。可以看出，同一结构中，界面电荷密度越高，栅氧化层承受的电场强度越高，栅氧化层更容易受破坏，器件更容易发生 UIS 失效。相同界面电荷密度时，深槽 P+ 源极结构的栅氧化层电场强度明显低于平面型。在多次重复 UIS 测试情况下，即平面型和深槽 P+源极结构的界面态分别为 1e12 cm-2和 5e11cm-2时，平面型的栅氧化层电场强度远大于深槽 P+源极型，证明了改进结构对栅氧化层的保护作用，为器件的雪崩鲁棒性研究提供了基础。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAsSric5XDL7dpGYwcUf1XcSu8blvGgK10Wntze6xiawjkxRuq3vaoaLRw/640?wx_fmt=png&from=appmsg)

**3.5 本章小结**

本章主要目的是设计 1700V SiC MOSFET 器件，并对其静态特性和动态雪崩特性进行仿真研究。

第一部分主要是对 SiC MOSFET 器件的设计，首先采用的结构为常规的平面型 SiC MOSFET 结构，调整元胞结构的基本物理参数，如漂移层区的掺杂浓度和厚度、N+源极、P+源极和 Pbase 区的注入能量和剂量，JFET 区域宽度和掺杂浓度。最终确定的漂移区掺杂浓度为 6e15cm-3，厚度为 14μm；P+源区与 N+源区均采用离子注入，掺杂浓度为 1e20cm-3 数量级；Pbase 采用离子注入，表面掺杂浓度为1e16cm-3数量级，深处的掺杂浓度更高，为 1e18cm-3数量级；JFET 区采用离子注入，宽度为 2μm，掺杂浓度为 1e16cm-3数量级。

第二部分主要进行终端结构的优化设计，采用了以下两个场限环终端结构进行对比仿真：等间距场限环结构和多区缓变间距场限环结构。通过优化场限环间距、宽度以及场限环的递增量得到最优的终端结构，得到的最优场限环参数为：场限环分为 6 组，每组 4 个，环宽为 3μm，初始环间距为 1.4μm，随后每组环间距以 0.2μm 增量线性递增，最终得到的耐压值为 2180V，相比于理想的平行平面结，终端效率达到 98%。

第三部分设计了深槽 P+源极 MOSFET 结构作为改进结构，主要研究槽深度与

静态电学特性的关系，对结构进行调整优化，在器件电流路径得到转移的情况下满足器件耐压需求，最终确认 P+源极槽深为 0.8μm。为接下来研究深槽 P+源区结构对动态雪崩特性的优化和栅氧化层可靠性的提高提供基础。

第四部分针对平面型 SiC MOSFET 器件和作为改进结构的深槽 P+源极型MOSFET 器件，进行功率 MOSFET 器件的 UIS 仿真研究，研究器件结构特点及其 UIS 失效机理和模式，获得不同电路参数（电感负载 L，栅极电压 VGS 和栅极电阻 RG）对其特性的影响。仿真结果显示，在雪崩情况下深槽 P+源极型使得电流路径从 Pbase/N-Drift 拐角处转移至 P+源区下方，缓解了界面陷阱中的热载流子俘获效应，SiO2/SiC 界面的电场强度下降了 15%，因此，改进结构有效提高了器件的栅氧可靠性和雪崩鲁棒性。

**第四章 SiC MOSFET 器件实验与测试**

**4.1 工艺流程与版图设计**

本章节在第三章对平面型 SiC MOSFET 和深槽 P+源极型 SiC MOSFET 两种器件结构的静态特性和动态特性进行仿真分析的基础上，对制备工艺流程进行了设计。流片采用了厚度 14μm，掺杂浓度 6e15cm-3 的 4H-SiC 外延片。由于平面型和深槽 P+源极型的工艺流程相差不大，只是针对深槽 P+源极型还需额外考虑沟槽刻蚀的问题。因此根据目前的工艺条件，制定了深槽 P+源极型 SiC MOSFET 器件的主要工艺流程，如图 4-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAcopibDg48jUbZbsvN3UJiaGw8SCLFDmbJOv9GpO8ibQia2zhRF4giaEWVGg/640?wx_fmt=png&from=appmsg)

其中器件工艺流程简要分为以下几个步骤：

（1）晶圆清洗并进行标记刻蚀；

（2）Pbase 区掩膜注入，其中多区缓变场限环与 Pbase 区注入条件一致，故采用同时注入；

（3）P+源区沟槽刻蚀；

（4）N+源区、P+源区和 JFET 区掩膜注入，离子注入后退火激活；

（5）栅氧生长，多晶硅淀积刻蚀形成栅极；

（6）层间介质淀积并开孔；

（7）依次形成正面及背面的欧姆接触；

（8）正反面金属加厚；

（9）PI 胶固化并开孔。

器件结构参数的设计与工艺流程已经确定，使用 Ledit 软件进行了 1700V SiCMOSFET 器件版图的绘制，如图 4-2 所示。芯片尺寸为 3×4mm2。版图元胞为条形元胞，终端采用场限环结构。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAwZT3jJQUnd3ZkZWHxJJChC9s250DoDDUWyxiaejOkOl0XFuqZr6EbCw/640?wx_fmt=png&from=appmsg)

**4.2 SiC MOSFET 的电学特性测试**

图 4-3 为 MOSFET 芯片的光学显微照片和 TO-247 封装样管。图 4-3（a）上方部分为 SiC MOSFET 的 Gate 极，两边为 Source 极，背面为 Drain 极。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMA9b0icQqJmRtl6lkbUcgia3klSU756bNwtYic5XRlbIXYJ3KB82hNE2MIw/640?wx_fmt=png&from=appmsg)

图 4-3 为 MOSFET 芯片的光学显微照片和 TO-247 封装样管。图 4-3（a）上方部分为 SiC MOSFET 的 Gate 极，两边为 Source 极，背面为 Drain 极。

**4.2.1 阻断特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMARkFlaAichuZTGErlcaten0qeQ9mwBbHZnTVjDeYiaGqSWrUsl98ibibm2g/640?wx_fmt=png&from=appmsg)

图 4-4 所示为器件的阻断特性曲线，SiC MOSFET 器件的击穿电压为 1850V，此时的漏极泄漏电流小于 1μA，满足器件 1700V 的设计要求。相较于理想平行平面结的击穿电压，结终端效率为 84%。实际测试的器件耐压值略低于仿真值，这是由工艺条件的偏差引起的，场限环未完整地发挥分担主结电场强度的作用。

**4.2.2 转移特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAc4kWqiaWicO50FyFq7iadyGuribKSx6cgeT3K4EJzY14GS3Aw6z1xUEtuA/640?wx_fmt=png&from=appmsg)

图 4-5 所示为器件的转移特性曲线，测试条件为 VGS=VDS。漏极电流为 100μA时，阈值电压为 3V。根据 2.1 节可知，测试所得的阈值电压值是较为理想的值。在保证了阈值电压不会因为过高而使沟道难以开启的同时，也避免了当阈值电压过低时而发生误开启的情况。

**4.2.3 输出特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAuNtXhiaiajU2WTay853cK61njkZ6Egvylxib9hoQ4Iqm8ZC0iakpwKW7Uw/640?wx_fmt=png&from=appmsg)

如图 4-6 所示为器件的输出特性。栅极电压从 0V 扫描到 22V，漏极电压从 0V扫描到 10V。当 VGS=22V，VDS=2.5V 时，漏源电流 IDS为 15A，此时的比导通电阻为 16.7mΩ•cm2。

**4.2.4 栅极泄漏电流**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAq8csibjYrticwc97RaUKGiaqalMdpdofwJcwoHFEwFwAK3kx5xXHDKIzg/640?wx_fmt=png&from=appmsg)

图 4-7 为 1700V/15A SiC MOSFET 器件的栅极泄漏电流测试曲线。测试条件为VDS=0V，将栅源电压VGS从0V逐渐增加至20V，栅极漏电流Igss最大值仅为0.5nA，表明器件栅极具有良好击穿特性。

**4.2.5 寄生电容**

图 4-8 为功率 MOSFET 的寄生电容示意图，主要分为栅源之间电容 CGS，栅漏之间电容 CGD，漏源之间电容 CGS。其中，CGD 也称为反向传输电容、米勒电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAqYUibQIIIbRf4v6FUrgc1vdY2wpIhw5uTduR30WCB9V05vRcTc4Rib5w/640?wx_fmt=png&from=appmsg)

若利用功率 MOSFET 的寄生电容参数进行定义，将器件电容分为输入电容 Ciss、输出电容 Coss、反向传输电容 Crss，相应的关系是：

输入电容：Ciss=CGS+ CGD

输出电容：Coss=CDS+ CGD

反向传输电容：Crss= CGD

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnoicFtqBicgDIVH9Z6H9XibMAkLWPMnKEfbGjqVnAiczaN9SFwmJR8ABy00dHGD4781extC1PZicHAYbA/640?wx_fmt=png&from=appmsg)

图 4-9 给出了 SiC MOSFET 器件的寄生电容测试曲线，测试条件为 VGS=0，f=1MHz，VDS 从 0V 逐渐增加到 800V，MOSFET 的电容随着漏源直流偏置电压非线性变化。当漏源电压 VDS 为 800V 时，Ciss 为 1.5 nF，Coss 为 71.5 pF，Crss 为 17.9 pF。寄生电容随着漏源电压 VDS 的增加而减小，其中，输出电容Coss 和反向传输电容 Crss 下降速率明显快于输入电容 Ciss。这是由于 MOSFET的寄生电容主要由两部分组成：一是氧化物相关电容，其值与漏源偏置电压无关，为 CGS；二是衬底耗尽层相关电容，其值与漏源偏置电压相关，为 CDS和 CGD。当电压增加时，耗尽层扩展，耗尽层电容减小，因此与耗尽层相关的电容 CDS 和 CGD 会随外加电压的增加而减小。因此输出电容 Coss 和反向传输电容 Crss 随着栅漏电压增加而减小，而输入电容 Ciss 中 CGS 比重更大，因此随栅漏电压变化很小。

CGD 是功率器件设计中需要考虑的关键电容。当栅极电流给 CGS 充电达到一个平台后，随后给 CGD 充电，在这个充电过程中栅源电压 VGS 保持不变，达到米勒平台。如果充电过快会导致米勒震荡，而充电过慢也会导致过大的开关损耗。因此合理的电容大小是解决米勒平台的关键参数。

**4.3 本章小结**

本章主要对 1700V SiC MOSFET 进行工艺流程和版图设计，基于国内 SiCMOSFET 工艺制造平台完成了流片实验芯片封装成 TO-247 分立器件后进行了测试验证。第一部分主要是简要描述了深槽 P+源极型和平面型的 SiC MOSFET 的工艺流程，完成了版图绘制。第二部分主要完成了部分电学特性的测试，其中当VGS=22V，VDS=2.5V 时，漏源电流 IDS 为 15A，比导通电阻为 16.7mΩ•cm2；阈值电压为 3V；击穿电压为 1850V，结终端效率为理想平行平面结的 84%。器件的静态电学特性测试值基本满足了 1700V SiC MOSFET 器件的设计要求。第五章 总结与展望

**5.1 全文总结**

碳化硅 MOSFET 具备优越的性能，如高压、高频、低导通电阻以及低开关损耗等，国外如 CREE 公司、罗姆公司等公司引领发展 SiC 电力电子器件领域，国内如中车株洲电力机车研究所与中科院微电子所、电子科技大学、西安电子科技大学合作，展开了对 SiC MOSFET 的研制工作。然而，SiC MOSFET 器件的半导体/氧化物界面质量较差，严重影响了 MOSFET 器件的栅氧可靠性，因此在本文中需要考虑 SiC MOSFET 的栅氧化层可靠性。非钳位感性负载下的开关过程 (UIS)可模拟器件在系统应用中所承受的极端电应力情况，可用于评估器件的抗雪崩能力。因此，研究器件的 UIS 动态特性对提高系统的稳定性和可靠性尤为重要。本文主要目的是设计一种 1700V SiC MOSFET 器件，针对 SiC MOSFET 面临的 UIS可靠性问题，提出深槽 P+源极型 SiC MOSFET 改进结构，并对其机理进行了分析。

本文所作的主要工作和研究成果可总结如下：

首先介绍了 SiC 材料特性，并阐述了 SiC 材料功率器件的优势；介绍了 SiCMOSFET 国内外的发展历程以及 UIS 研究现状。总结了 SiC MOSFET 的基本静态电学特性包括阻断特性、转移特性、输出特性等；并且针对界面处的陷阱，详细说明了功率 SiC MOSFET 器件动态雪崩失效机理。

接着利用 Silvaco 设计优化 1700V SiC MOSFET 器件元胞结构的基本物理参数，包括漂移层区的掺杂浓度和厚度、N+源极、P+源极和 Pbase 区的注入能量和剂量，JFET 区域宽度和掺杂浓度，着重研究器件导通电阻、击穿电压以及正向特性与器件结构参数的相互作用关系。设计所得的漂移区掺杂浓度和厚度分别为 6e15cm-3和 14um；JFET 区域宽度为 2μm；栅氧厚度为 60nm。接下来采用多区缓变间距的场限环终端结构并进行终端结构的设计优化，最终得到的耐压值为 2180V，相较于理想平行平面结，终端效率为 98%。接着针对 UIS 引起的栅氧可靠性问题，设计了深槽 P+源极 MOSFET 结构作为改进结构，使得在雪崩击穿情况下电流路径得到了转移。在其他结构参数和平面型结构一致的情况下，优化 P+源极槽深，最终得到的最优槽深为 0.8μm。

接下来针对 SiC MOSFET 器件的抗雪崩能力，研究器件结构特点及其 UIS 失效机理和模式，获得不同电路参数（电感负载 L，栅极电压 VGS 和栅极电阻 RG）对其特性的影响。为了提高器件的栅氧可靠性，本文提出了深槽 P+源极型 MOSFET结构，深槽 P+源极型在雪崩击穿情况下击穿点得到了有效转移，从 Pbase/N-Drift拐角处转移至 P+源极下方，降低了热载流子的注入，减少了 UIS 仿真测试中的界面态密度，雪崩击穿时栅氧化层最大电场降低了 15%，有效地提高了 SiC MOSFET的栅氧可靠性。

最后根据 SiC MOSFET 器件的元胞和终端结构设计参数，基于国内 SiCMOSFET 器件制备工艺平台，开展了 SiC MOSFET 器件的流片实验和测试分析研究。当 VGS\=22V，VDS\=2.5V 时，漏源电流 IDS为 15A，比导通电阻为 16.7mΩ•cm2；阈值电压为 3V；击穿电压为 1850V，结终端效率为理想平行平面结击穿电压的 84%。本文通过设计 1700V SiC MOSFET 器件以及研究其 UIS 特性，为高可靠性 SiCMOSFET 器件研制提供了前期理论研究基础和指导。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)