# SiC、Si、混合功率模块封装对比评估与失效分析


> 原文地址: [https://mp.weixin.qq.com/s/VhVLrKejsr22M11-UvAAZA](https://mp.weixin.qq.com/s/VhVLrKejsr22M11-UvAAZA)

文章来源：中国电机工程学报

作者：李晓玲 1，曾正 1\*，陈昊 2，邵伟华 1，胡博容 1，冉立 1(1．输配电装备及系统安全与新技术国家重点实验室(重庆大学)，重庆市沙坪坝区 400044； 2．阿肯色大学电气工程系，美国费耶特维尔 72701) 

摘要：随着SiC 器件在新能源发电、电动汽车等领域的快速发展，对定制化、高可靠SiC功率模块的需求日益迫切。然而，现有SiC 功率模块大多沿用Si 模块的封装技术，存在寄生电感大等问题，无法适应SiC 器件的高速开关能力，难 以充分发挥SiC 器件的优越性能。该文梳理了功率模块的材料选型准则，以及封装工艺方法，给出了自主封装功率模块的测试流程。针对全Si、混合、全SiC 功率模块，基于相同的封装技术和测试方法，对比研究了3 种功率模块的动态性能和温敏特性，为不同应用需求下的器件选型提供参考。 针对全SiC 半桥功率模块，提出了开关损耗的数学模型，并利用实验结果验证了其有效性。此外，结合功率模块的大量故障案例建立了数学模型，分析封装失效的机理，为下一代SiC功率模块的封装集成研究提供了有益的经验和思路。

关键词：SiC 功率模块；Si 功率模块；混合功率模块；封装集成方法；失效模式分析

0. 引言

SiC电力电子器件具有高温、高频、高压的工作能力，可以为高效、高功率密度、高可靠变流器提供技术支撑，在智能电网、交通电气化等领域， 具有重要的应用前景。随着制造工艺的不断革新，SiC 器件的成本持续下降，SiC MOSFET 已成为Si IGBT 的潜在替代者。然而，相对于芯片技术的快速进步，封装和测试技术方面的研究相对较少。SiC 器件大多沿用Si 器件的封装技术，商业化SiC功率模块的最高结温≤175℃、寄生电感≥20nH，难以充分发挥SiC 器件的优越性能，给SiC功率模块的封装技术提出了严峻的挑战。

一些国外企业和高校已经开始关注SiC 功率模块的先进封装方法。美国Wolfspeed 公司开发了结温超过225℃的高温SiC 功率模块，并将功率模块的寄生电感降低到5nH。美国通用电气公司研制的低感SiC 功率模块，使用条状交流母排，增大母排宽度，减小寄生电感至4.5nH。德国赛米控公司采用纳米银烧结和SKiN 布线技术，研发了SiC功率模块的高温、低感封装方法。德国英飞凌公司采用压接连接技术，研制了高性能SiC 功率模块。德国Fraunholfer 研究所采用3D 集成技术研制了高温(200℃)、低感(≤1nH)SiC 功率模块。瑞士ABB 公司采用3D 封装布局，研制了大功率低感SiC功率模块。瑞士ETH 采用紧凑化设计，优化功率回路，研制了寄生电感≤1nH 的低感SiC 功 率模块。美国弗吉利亚理工大学通过优化模块布局，研制了高温、大功率SiC JFET功率模块。 美国北卡州立大学将驱动芯片集成到功率模块内部，实现了开关频率高达3.38MHz 的SiC功率模块。针对电动汽车应用，美国田纳西大学和橡树林国家实验室研究了集成水冷、双面散热的SiC功率模块。日本尼桑公司基于双层直接敷铜板(direct bonded copper，DBC)封装，研制了低感SiC功率模块，应用于车用电机控制器。日本丰田公司采用双面散热封装技术，研制了高功率密度的SiC车用电机控制器。综上，国外已经掌握了SiC 功率模块的先进封装互连技术，然而，国内相关研究尚处于起步阶段，仅有几个企业和高校开始研究功率模块的封装技术，急需梳理功率模块的封装理论和方法，总结功率模块的失效模式，为SiC 功率模块的先进封装和性能评测提供理论和方法支撑。

本文针对SiC 功率模块的封装进行了研究，梳理了功率模块的设计原则和制作流程，结合全SiC、 全Si 和混合功率模块，归纳了功率模块封装互连的关键步骤和工艺，给出了自主封装功率模块的测试流程，建立了SiC 功率模块的损耗模型。此外，对3种自主封装功率模块进行了对比研究，印证了SiC器件对先进封装技术的迫切需求。最后，总结了大量的封装失效案例，并建立了失效分析的数学模型，为功率模块的缺陷判断和封装优化提供参考。

1. 功率模块的封装方法

功率模块是利用多种互连技术，将多个功率器件封装集成，并实现一定功能的功率电路，能满足芯片的电气互连、绝缘配合、机械支撑、物理保护等基本要求，具有装置体积小、系统成本低、系统可靠性高等优势。此外，相对于分立器件，功率模块的寄生电感小、缓冲吸收电路简单，可适应宽禁带器件的高频工作能力。

功率模块的关键在于封装互连技术和封装材料配合。封装互连技术包括半导体连接技术、引线键合技术、绝缘灌封技术等。同时，不同材料在一定环境条件、负荷工况和电热应力下的响应差别很大， 对功率模块的设计制造和失效分析提出了挑战。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj6bSjEyWib5Qp8CU4eOdkkZ074ZYtCzObA6yS1Jy5xbIY5YZ3U3yiaPVA/640?wx_fmt=png&from=appmsg)

以最常用的引线键合式焊接功率模块为例，梳理SiC 半桥功率模块的设计原则和封装工艺流程。 如图1 所示，功率模块主要由芯片、DBC、基板和端子构成。DBC 为“铜–陶瓷–铜”的三明治结构， 兼顾上层导电、中层绝缘和下层散热的功能。基板为DBC 提供机械支撑，并将芯片产生的热量传递至散热器。端子是功率模块与外电路的接口，并提供电能通路及测量端口。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjXOBib9VjV0JD7Pkibbu6dREt2I3QEwgdEx6xe6yiaib5kCuSlXyzDXiaLrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjEMzSkHXTiaK0yqXKP0UR9BkEeRpFZcupl9BuP6knx8U5pjm0ub8PKIQ/640?wx_fmt=png&from=appmsg)

半桥功率模块的内部互连如图2 所示。芯片位于DBC 上层铜的不同分块上，芯片与DBC 上层铜之间、芯片之间均通过键合线传输电流；DBC 陶瓷层及下层铜可保证芯片与散热器之间的电气绝缘和热传导。芯片与DBC 之间、DBC 与底板之间均采用回流焊连接，即先用高温焊料将芯片焊接到DBC上(一次焊接)，然后用低温焊料将DBC 焊接在基板上(二次焊接)。

1.1 功率模块的设计原则

功率模块的设计包括材料匹配选型和多物理场建模仿真。 

1.1.1 材料选型

综合考虑材料的电–热–力性能指标，特别是熔点、电导率、传热系数、热膨胀系数、抗拉强度等。 例如，对于焊料的选型，应确保二次焊接时，一次焊接的焊料不发生重熔，两种焊料的熔点之间要留有足够的裕度，并兼顾高导电、高导热性能，以及热膨胀系数的配合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjrqXHHTvldVxerCDKFhXSsQCxVGCHeqqQkCCqcG1u3QPqibjmapTxiaVA/640?wx_fmt=png&from=appmsg)

根据焊料熔点及应用范围，可将焊料熔点划分如图3所示。若功率模块的设计工作温度为150~175℃，避免过高的焊接温度影响芯片性能，一次焊接应选中温区焊料，二次焊料应选低温区焊料。

在此基础上，考虑电导率、热导率、抗拉强度等因素，且二次焊接面积较大，二次焊接焊料的热膨胀系数应与铜接近。 

Sn-Pb37 焊料具有融化温度低、浸润特性好的优势，被广泛用于二次焊接，而一次焊接的焊料可选择Sn-Pb10 等材料。此外，为获得良好的电、热特性及环保性能，往往选用含有Ag、Au 的焊料，但成本更高。 

1.1.2 多物理场建模仿真

功率模块以低感、低热阻、高可靠为设计目标， 综合考虑电–热–力等多物理场耦合的约束条件，如图4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj6lT1NU8maygpaQmNM1HstFBM4sfAuc0G05SnaCS5Z0xTlKu6tlOvnA/640?wx_fmt=png&from=appmsg)

首先，为了优化电学性能，应设计模块的电路拓扑，合理规划芯片布局，尽可能缩短布线长度，实现阻抗匹配，减小寄生电感，避免并联电流不均衡。

其次，为了提高散热性能，应合理设计芯片之间的距离、芯片距DBC 边缘的距离、封装结构的各层厚度，以减小热阻、提高功率模块密度。

最后，为了保证功率模块可靠性，计算应力分布，针对应力较高的位置，采用封装结构优化，提高材料界面的温度循环能力。通过功率循环、温度循环仿真测试，预测功率模块的薄弱环节，进一步优化封装结构。

此外，结合功率模块的失效案例，发现模块的缺陷，可以闭环指导封装设计。

1.2 功率模块的封装工艺

1.2.1 DBC 清洗与芯片归组

如图5 所示，硅凝胶被污染产生气泡及雾化， 严重影响绝缘性能。材料清洗是保证模块可靠性的重要步骤，采用有机溶剂和机械能，可以去除离子污染物和微粒污染物。通常将材料浸没在无水乙醇或三氯乙烯中，以40kHz 频率超声清洗约5min，再用去离子水将清洗剂洗净，充分加热干燥。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjdb8ndWqFaAoFXpyl8u9k1SPnsibP2oBtjZtxdGiaoleParYK3yTzkLlw/640?wx_fmt=png&from=appmsg)

芯片应被分类和归组，以保证一致性。SiC 器件的参数分散性明显大于Si 器件，容易引起并联器件的电–热应力不均衡，危及功率模块安全。因此，应根据静态特性对芯片进行分类和归组，并联使用时尽量选用静态特性一致的芯片。此外，相对Si芯片，SiC 芯片尺寸较小，对静电破坏的耐受能力低，应使用静电消除器保护芯片。 

1.2.2 芯片焊接

芯片焊接提供芯片与DBC 之间的机械支撑与电气连接，常见焊料有焊片或焊膏两种形式。焊片的焊层厚度和涂覆面积容易控制，有利于减少空洞。焊膏涂覆灵活，常采用扩散或丝网印刷等方式， 但难以保证厚度均匀。焊料不能长期暴露在空气中，防止吸水，并保证DBC 及芯片干燥，否则会造成焊接失效，甚至爆炸。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjuYsN2XibdD5tWVed5ybCXL69icWwZXWCDvLuZlV97dZFHN8ZBbTFtKxA/640?wx_fmt=png&from=appmsg)

焊接工艺常用真空回流焊，以减少焊接空洞，提高焊接可靠性。炉温需根据焊料的回流温度曲线设置，其曲线分段及操作注意事项，如图6 所示。 因焊件尺寸和炉内位置不同，实际温度与设置曲线可能存在一定的偏差，必要时，需使用热电偶对回流炉内温度进行校正。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjCLJicNeP5DiauOhGXTH1ISkjSKfO2afNGUKUwiczHAVsbRnnkLyfJvBVQ/640?wx_fmt=png&from=appmsg)

不良焊接的表现如图7 所示。焊料预涂覆不均匀，或预热区升温速度太快，都会导致焊料喷溅。

氧化后的焊膏会在非焊接区形成锡球或锡珠，因虹吸效应，在芯片边沿形成爬锡，缩短芯片场限环的爬电距离，造成绝缘隐患。可使用超声清洗，配合丙酮或无水乙醇，去除焊接残留，并在显微镜下确认不存在焊接缺陷。同时，可以利用X 光扫描、超声扫描等方法，确认焊接空洞率在可接受范围内。 

1.2.3 引线键合

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjocaicCQ9jWk2iciaSiay9mBQtnmFcrzrEgQdnK7hA75aZVk7Q3XLOSwNyQ/640?wx_fmt=png&from=appmsg)

电气互连常采用超声键合技术，在芯片或金属之间形成电流通路。键合线的材料、线径和键合点数等参数，应根据电流水平、开关频率和芯片尺寸合理选择，并保证适当的绝缘间距，以防止击穿和临近效应。常见的不良键合及效果如图8 所示。可通过推拉应力测试，检验键合线的连接质量。

1.2.4 基板及功率端子焊接

将键合完成的DBC 涂好低温焊料，压贴在基板表面后，送入回流炉进行二次焊接，同时焊接功率端子，焊接流程与一次焊接相同。焊接后的功率模块如图9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjBUbibJdKQqicNDqXrO9bFNKd979PVIpUwQiatfDbMegicWe7qsE1YWzPibg/640?wx_fmt=png&from=appmsg)

1.2.5 外壳和灌胶封装

灌封硅凝胶可以防止污染，提高绝缘强度。外壳为芯片和硅凝胶提供支持和保护。为满足SiC 高温封装的需要，外壳采用熔点为184℃的3D 打印玻璃纤维，外壳与基板之间的连接使用熔点为200℃的高温胶。连接完成后，灌少量酒精，测试四周是否封闭。灌封硅凝胶后，将模块放入真空脱泡机中做脱泡处理，静置至硅凝胶固化，即完成封装。 外壳和灌胶的典型不良现象如图10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjMRsmVDLvNF4VMbzHOTc3micjbNsiaFibGSQSPCYTcP9MJ9mMJR6GnsSXw/640?wx_fmt=png&from=appmsg)

此外，每一步结束后都应在显微镜下观察是否有芯片损伤，并测量各引脚的电阻是否匹配。功率模块的封装效果如图11 所示，在应用前，应对模块的封装性能进行测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjVA1zY536nBvknxPIIU9J6j3xlIT5XyicdqiatDHia4R5U1Jwc0c8Nl7dQ/640?wx_fmt=png&from=appmsg)

2. 功率模块的对比评估

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj5mXZDqyH6CUiaBTnwUPh2FuwphPaTxrLqsQf6Btk9aelkwLoBDknqeg/640?wx_fmt=png&from=appmsg)

功率模块的性能与封装和器件密切相关。对于半桥模块，器件可以是全Si(Si IGBT 和Si FRD)、 混合(Si IGBT 和SiC SBD)、全SiC(SiC MOSFET 和SiC SBD)。由表1 参数对比可知，传统Si 器件可实现SiC 器件相同的功率等级，但SiC 器件具有开关速度快、du/dt 和di/dt 高的特点，其封装参数敏感性和温度敏感性与传统Si 模块不尽相同。基于前文所述封装工艺和流程，自主封装完成的全SiC、全Si和混合功率模块如图12 所示，用于对比研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjloWTpT0t16uGdLUn8XOLiblVZFjYVrGLRSvADxsTiaSDhpkrYaIgM66Q/640?wx_fmt=png&from=appmsg)

3 种器件组合在相同封装结构下的性能差异性还未见文献报道。因此，在相同封装条件下，需要评测全SiC、混合及全Si 模块的性能、适用场合及经济性，为功率模块的应用设计提供参考。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjMENXYXQpib3Jagrhme23wqp4icUdNbHtm7BctSVQuziaun6UlpuwYexYg/640?wx_fmt=png&from=appmsg)

以SiC MOSFET 的动态行为为例，其典型开关过程如图13 所示，开通过程可分为3 个阶段。

1）第一阶段(0—t1)，栅极电源VGS向MOSFET电容充电，栅极电压 uGS 达到阈值电压VTH 之前，MOSFET处于截止状态，uGS可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj4lSI8wc2atehQVicuKb1zbJ4biaxtuIK9extGoCx4f7icXp0nXtJFPpcw/640?wx_fmt=png&from=appmsg)

式中τ 为时间常数，τ =RG(CGS+CGD)，其中RG 为驱动电阻，CGS、CGD分别为栅–源电容和米勒电容。

uGS从0 到VTH的时间(t1)为开通延迟时间，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjVWPlTNwORicicR7RhhP0U3dSLia3A3GsuuM0JpLib1uPCy12g3HstYHEEQ/640?wx_fmt=png&from=appmsg)

Si IGBT具有相同的开通延迟原理，但相同功率等级下，Si IGBT 的输入电容比SiC MOSFET 大， 如表1 所示，开通延迟时间更长。通常，SiC  MOSFET的开通延迟时间仅有几ns，而Si IGBT 为几百ns。 

2）第二阶段(t1—t2)，漏极电流iD 开始增加，漏源电压保持直流母线电压VDS，直至iD在t2 时刻达到负载电流IL，iD 可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjJFfKOYET4A7oiaiajPSD4thrLEpd092VFkykoxQQ4NSwpkhbrEnUp1iag/640?wx_fmt=png&from=appmsg)

式中：gm为跨导；k 为与器件制造相关的常数。

iD 以非线性平方关系随时间增加，如图13 所示。持续时间与负载电流相关，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjSDaaSVxTPMEF2A0ZoDUcZaolEAQmKJR93tWqiaFxiaDBL7lzth4Ppia3Q/640?wx_fmt=png&from=appmsg)

3）第三阶段(t2—t3)，iD\=IL，漏–源电压uDS 由VDS减小至正向导通电压VF，下降速率duDS/dt 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj7DH53pDSLZQuVk4maV71o5Zq2S5pSqEcSA1IvpomtIXpm6mgzQzM6w/640?wx_fmt=png&from=appmsg)

该阶段iG 全部为米勒电容充电，uGS、iG 分别维持在米勒平台电压VGP和电流IGP，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjJ5jvKheeL7T4Py4aKMbS334cDY6B64zsmR0LXTh9A88N1mkfia9HjMg/640?wx_fmt=png&from=appmsg)

第三阶段持续时间为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjNHgl6vOfehgocXS0sEO80NS6HeB1N64U3giaVSlZtH4ATyysqXY9tYQ/640?wx_fmt=png&from=appmsg)

由于最大损耗发生在电流峰值IL 和电压峰值VDS处，则开通损耗EON可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjickfX7jusVzibVPWhn95MoIQOxibBQBw8dMqibkeFjfmKAXuvW4LVSkneg/640?wx_fmt=png&from=appmsg)

由于SiC SBD 的反向恢复电流可以忽略，则SiC MOSFET的开通损耗近似为全SiC 模块的开通损耗。此外，SiC MOSFET的开关速度快，开通电流的非线性部分可做线性化处理。全SiC半桥功率模块的开通损耗EON可近似为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjgk544cic0XKfnYpgic48XVuGnKlwn5a8GKAUJ1XvJI39onBCV9SN9Cbg/640?wx_fmt=png&from=appmsg)

式中tri\=t3−t1 为开通时间。

类似地，关断损耗EOFF可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjISGwlTmtzYYuuqCiafRMkazxEb5aPFWKkOqzKPOoqZ35N3HeXZA874w/640?wx_fmt=png&from=appmsg)

将电压线性化处理，EOFF可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjexunQOMia4JefXFDy7FcABEhuicUZKpBUEOf0xa3b3tJZmtNfPQganMw/640?wx_fmt=png&from=appmsg)

式中tfu\=t6−t4 为关断时间。

因此，全SiC 半桥功率模块的开关损耗ESW可近似表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjpd86N0B3L2aOqmpEnxfoOaBmTGEjroFAotBS5VvPFcZiaiaRukxLY3JQ/640?wx_fmt=png&from=appmsg)

减小器件的输入电容、驱动电阻，降低负载电流以及直流电压，均利于减小瞬态功率及缩短开关时间，从而降低SiC 器件的开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjqDvY7bIP7Sib2PghUY5ZGdtpFlTKpNDiaIgibK9ca51BEvcjeZ6LADvXQ/640?wx_fmt=png&from=appmsg)

基于图14 所示的双脉冲测试电路，分别测试不同温度、电流等级下功率模块的性能。在VDS\= 600V、RG\=20Ω、结温温度25℃的测试条件下，3种功率模块的实验结果如图 15 所示，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjfrlQcyHnL4DnZbKHDTSoFsGibxTwxApJSxmkztrnJEBDOa4p5KXYoLA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjkkib43qBxgbGCbJia7hMr0qMFlwXUMnvBJicBJr56EWNq6Wicac4EDWeQg/640?wx_fmt=png&from=appmsg)

负荷电流40A时的动态对比结果如图 16 所示，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjTS4QotsKtOaKN5gZJjBPdicjwQIv3WzibL9USk2RsdVekkV3KKsmbf1w/640?wx_fmt=png&from=appmsg)

损耗对比结果如图17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjblUTO5wicQj3KJ1fnCNu4I5V54s9Vu9fc7pibLbKXuiauy1L6U90XHshQ/640?wx_fmt=png&from=appmsg)

如图16(c)所示，由于全SiC 模块封装寄生参数与开关速度不匹配，开关过程振荡不可忽略。振荡频率fr为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj881uFeicHZPtrXMVN6sSc72aNw3XZVDV7JS6LGRUrBA8tVQGUKarKbg/640?wx_fmt=png&from=appmsg)

式中：Lσ 为封装寄生电感；Coss 为器件的输出电容。根据振荡频率26MHz，可计算自主封装功率模块的寄生电感为24nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjVn6uGat70ErsjicBrETU414PlQialZiaib2eAVKjNAUY6r6AUhw1F8Eh9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjZDibafLTtqNM2K0ReVuqicsaySVE3aQibdT4ZDibBED6Gv2y3FEuia4xwXw/640?wx_fmt=png&from=appmsg)

如图17 所示，采用SiC器件后，模块损耗显著减小。对于全Si 模块，Si IGBT 开通时，Si PiN二极管的反向恢复电流引起较大的开通损耗。对于混合模块，SiC SBD 为多数载流子导电器件，其反向恢复电流小，因此混合模块的关断损耗可以比全Si模块减少34%。对于全SiC 模块，由于SiC  MOSFET没有Si IGBT 的拖尾电流，开关速度更快， 开关损耗仅为全Si 模块的33%。

在VDS\=600V、IL\=40A 测试条件下，3 种功率模块的温度特性如图18 所示，损耗与结温的特性如图19 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjJIn4sbKHReCJ4yAktIDkM7VrkqSybpf3ZDe5zKPnx4QcRshu2j24gA/640?wx_fmt=png&from=appmsg)

对于全Si 模块，在关断过程中双极型器件的载流子寿命具有正温度特性，Si FRD的反向恢复电流、Si IGBT 的拖尾电流，在高温下明显增大，150℃下的开关损耗几乎是25℃时的2 倍。 得益于SiC SBD 的使用，混合模块的开通损耗比全Si模块显著减小，避免了温度对损耗的影响。SiC模块采用多数载流子导电器件，损耗随温度的非常小，仅高温下阈值降低，导致开通损耗减小，而关断损耗稍微变大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjM0BHd5TNJ0XUkC61gCWfiaukG9tIxYGI3mgqicnKSELjk2wZSWC22cwg/640?wx_fmt=png&from=appmsg)

利用式(13)计算全 SiC 模块的损耗，并对比实验测试结果，进行误差分析，如图20 所示，理论计算能较好估计EON和EOFF，误差控制在15%以内。

以全SiC 功率模块为例分析封装的特性，其质量、体积、成本占比如图21 所示，基板的质量最重，密封剂的体积最大。功率芯片仅占模块总质量0.09%、总体积的0.12%，但所占成本高达90.52%。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjCUNzNLxw02xGVEXzCJkj4nsAC4ZYiaIRropnEBlRy0JmJNBnCHVdMAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjzZO1It3St2kaX0FfIuJYk6QBOm5Pw2hNFyuEyIsWWbdHHShA19T0XA/640?wx_fmt=png&from=appmsg)

由图22 可以看出，不同的封装结构对全SiC 模块损耗有显著影响。从另一种角度来看，为了实现高品质的功率模块，从优化封装结构及材料选择入手，远比改善芯片性能经济有效。因此，迫切需要先进的封装手段，以配合芯片性能，达到整体性能最优。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj3oeSEoEGToFplreFalibtf3Uq0M2tUJia87YC37rkYmmGhvJqrgGB2IA/640?wx_fmt=png&from=appmsg)

综上，全SiC、全Si 和混合模块适用领域不同。对于高开关频率场合，全SiC 模块是唯一的选择。

当频率在几十kHz 以下时，根据散热条件选择混合模块或全Si 模块。SiC器件表现了良好的温度特性和较低的损耗，但对线路参数敏感性较强，容易形成振荡，且成本较高；混合器件平衡了损耗和成本，但其损耗和温度特性并没有显著优势；全Si 器件在开关频率、损耗及温度特性都有一定限制，但成本远低于其他选择。因此，应根据具体运行条件和成本控制，合理选择功率器件。

3. 功率模块的失效分析

通过失效模式分析，可以发现功率模块的薄弱环节，并进一步指导模块的设计和改进。功率模块失效机理如图23 所示，根据失效的原因和部位，常见失效方式可分为热击穿失效、过电压击穿失效、栅极失效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjD6ewVr0cdmUDzyxGX55HBj0xDmjNt5Z6n0G3NuYYdhhPuq5SjKOOow/640?wx_fmt=png&from=appmsg)

3.1 热击穿失效

热击穿失效是最常见的失效模式，主要是高密度电流的热效应导致的。根据芯片损耗PG和封装的耗散功率PO之间的平衡关系，芯片升温的条件为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjqMmBNiaPkBxnAWYssrJPiaAibq3yrCKfmrmdQiaibxOQLYibZicWcIOmAqsJQ/640?wx_fmt=png&from=appmsg)

假定芯片特定位置的散热条件用热阻Rth表示，可定义热稳定系数S 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj7VTkz92WmNrreaOyZpEnQ5o8PWAOPwKJECaQM4AUia79sDrNXibZXnGw/640?wx_fmt=png&from=appmsg)

若S\>1，任意的温度扰动都会诱发热击穿。温度扰动由高功率产生，漏电流产生的高功率会使高温区域的漏电流进一步升高，形成正反馈；而过电压造成的雪崩击穿区域会向温度较低的区域移动， 形成负反馈。不论何种因素造成温度上升，热击穿总是因为温度达到了半导体材料的本征温度Tint。 此时，热激发的载流子浓度ni 等于本底掺杂浓度Ni，ni 具有显著的温度依赖性，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjoHwh9GFQIZle81QuXWoJatdaW1LALkicutOkBRZlqkZiaeE79ribJD5ug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjCtv7JhOHmibRFvOuRz6PzsGlhwnr7HkNU3jlAmLGibWugFicFYJbiaXHRw/640?wx_fmt=png&from=appmsg)

式中：n0 为半导体电子浓度；p0 为空穴浓度；Nc为导带有效状态密度；Nv 为价带有效状态密度；EF是费米能级；Ei 为禁带宽度。

当温度高于Tint 时，ni 处于主导地位，并随温度指数增加，从而进一步热激发，使ni 增加。一旦结温达到Tint，热激发将成为主导机制，载流子即进入正反馈，引起电流集中且热失控，最终达到温度耐受极限而失效。然而，实际工况下必须考虑温度局部过热的影响，低于Tint 时，也会发生击穿。

过电流引起的热失效表现为芯片表面烧毁，或局部半导体熔融。过电流可分为稳态过电流和瞬态过电流。

稳态过电流通常出现面积较大的烧毁区域，一般位于芯片源极或发射极中心，键合线引脚处金属融化，严重的过电流甚至会使芯片炸裂，如图24所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjUyRkrhzHQB0u3PI4UA4AXbufg8nkOD6iaibrCicbk6KuH9ErOBicpANzkQ/640?wx_fmt=png&from=appmsg)

瞬态过电流可能由电流尖峰或浪涌电流造成， 通常与模块的设计或封装电感有关，特别是键合线接触电阻的作用，常表现为引脚附近单点或多点烧毁，如图25 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmju1RWTVWjDVDUR14Pw9MrXLcQmibrJSARh8X7GmGElRNMmDicGKUN7dYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjEySp1r0hFc0MybFQNaYjnKmmZGic85SKl3CL4TkCrp24iaVOia5VdRdtg/640?wx_fmt=png&from=appmsg)

3.2 过电压击穿失效

功率器件的阻断能力受到雪崩击穿的限制，在感性电路的开关过程中，受到电路杂散电感影响， 较高的电流变化率会产生浪涌电压，发生雪崩击穿而导致过电压失效。

功率芯片在关断和开通的过程中，理论上对应着不同的失效位置。将功率芯片的电流分布以图26表示，功率芯片的驱动总线沿芯片边缘场限环分布，驱动信号脉冲从边缘传播到中心需要一段时间，因此芯片边缘场限环附近的晶胞比中间的晶胞先经历开通或关断。以芯片关断的过程为例，如图 26(a)所示，若关断过程中电流为i(t)，根据安培环路定律，可将磁场强度H(x,t)表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjY6GlHewaDibdme0qKQrv2gGWHINB8UuhPT0ibaNYVu9f8neooibqkzIqQ/640?wx_fmt=png&from=appmsg)

式中：d 为电流通道的宽度；2D 为芯片的宽度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjLZWG6LHbxsmxVDxVmpsbJgMpbOf06YbeXtfKbA2mx0nBRcSQ1qIEGA/640?wx_fmt=png&from=appmsg)

假设电流的拖尾时间为tf，di(t)/dt\=−IL/tf，i(0)\=IL，则x 方向的磁场恒为零(Hx\=0)，z 方向磁场变化率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj9g1pAnJmJ0ZxtJJLicQhODJARSogrk8fVvVFpSZFhiaibr8s0NPvXlT5Q/640?wx_fmt=png&from=appmsg)

根据麦克斯韦方程，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjMr4ACda6bg6REhEtORKpML48awWKiaYlXZcKqjn2QDmrpP26hwKQicUQ/640?wx_fmt=png&from=appmsg)

式中μ 为半导体材料的磁导率。

若x\=D 处场强Ey(x\=D)\=ED\=VDS/s(其中s 为芯片厚度)，在与原点距离为x 处的场强Ey表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjmAIodKtYU7scBMf9WH66vDzbHYlbZd7ibGf8lYLH9b6yQy7v99vuzUg/640?wx_fmt=png&from=appmsg)

因此，芯片上不同的点承受不同的关断电压。 在x\=d 处，有式(24)成立。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjjWD8l73ylzseO3wJCAxZXDoReZQDvo6AqjShZYFHQHCJibGgU95bUxg/640?wx_fmt=png&from=appmsg)

对于开通过程，重新建立坐标原点如图26(b)所示，同样可得式(20)、(21)，替换边界条件di(t)/dt\=IL/tf，i(0)\=0，Ey(x\=D)\=ED\=0，可将式(23)改写为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjCFQicicUgrMUYuVdnkuI8bicjFM794OcaLdNZxDgbOx37iaoyy3pNmT7eg/640?wx_fmt=png&from=appmsg)

由式(23)、(25)可知，关断时，场限环附近的元胞承受的电压应力最大；开通时，芯片中央处的元胞承受的电压应力最大。因此，理想状态下，关断过电压发生在芯片中心，开通过电压发生在芯片边缘第一场限环附近。由于Si IGBT 开关速度较慢，过电压击穿并不常见。但是，SiC MOSFET 的开关速度快、拖尾时间短，过电压击穿不可忽视。

尽管芯片有一定的过电压裕度，实际上难以避免器件的生产缺陷、封装缺陷及污染物。电场分布对缺陷和污染物十分敏感，尤其是键合线引脚处， 极易产生放电击穿，如图27(a)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjP4Z6Vb3ua25eeABLaW5ydY435vricicxa9AKteYmPzsHib7kqh4udpyYw/640?wx_fmt=png&from=appmsg)

此外，焊接不良也是导致过电压击穿的重要因素。爬锡导致芯片爬电距离减小，过电压沿着最短的路径击穿芯片的漏源极之间。芯片底面焊接空洞，导致局部导电缺陷，电场畸变下易发生击穿， 在硅凝胶中形成气泡如图27(b)所示。

过电压击穿通常表现为：在第一场限环附近，芯片表面出现针孔状穿透点，如图27(c)所示。优化封装是避免过电压击穿的有效途径，应合理配置键合线线径和键合方式，减小寄生电感，控制焊料涂覆均匀，避免爬锡和焊接空洞。

3.3 栅极失效

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjlXxPmm2uwDBX7HSu5IMBTlicAe1rWqV15Sxbh6L7L6KMofqIIoWV1cA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjibDmKM6JqJpPiaI1hIfxV7s3ibZXxf62qibDtWUp1ruKicEP8ibpOgoicWxZA/640?wx_fmt=png&from=appmsg)

根据失效模式，可将SiC MOSFET 的栅极失效分为机械损伤失效、过电压失效和过电流失效。 

SiC MOSFET 的SiO2 绝缘层非常薄，超声引线键合容易对栅极造成机械损伤。栅极承受电压时， 电势差通过机械裂纹经过芯片外延层连接至源极，形成最小导电通路，芯片过流失效，如图28(a)所示。适当减小超声键合功率，有助于减少绝缘层损伤，提高栅极可靠性。 

SiC MOSFET 栅极过电压多为感应过电压。即使栅极驱动电压在额定范围，栅极引线的寄生电感、漏–源极之间的电容耦合，产生的振荡电压也会使栅极氧化层损坏。栅–源过电压击穿如图28(b)所示，由于栅极与源极键合线小于绝缘净距，致使栅极过电压失效。灌注硅凝胶时，应注意速度和方向，保证键合线绝缘距离。

实际失效不一定源于单一失效方式，也可能是多种原因的综合。如图28(c)所示，爬锡与键合线之间被过电压击穿，但仍因过电流发生了局部烧毁。 因此，很难判断芯片失效是过电压失效，还是芯片存在薄弱点，而过电压时是否有大电流经过损坏点也难以确定。因此，失效是多种缺陷的综合表现，功率模块的改进需要全面考虑多个失效因素。

综上，根据过电流失效、过电压失效和栅极失效等常见的失效方式分析，可以发现功率模块的薄弱环节。减小模块热阻利于消除稳态过电流失效， 保持键合线引脚处良好的电接触则可避免瞬态过电流风险。根据芯片参数和寄生电感，合理匹配开关速度，防止过电压失效。在保证可靠性的前提下，适当减小栅极键合功率，可以减小SiC 栅极氧化层的损伤。

4. 结论

随着SiC 器件制造技术的成熟和推广，SiC 功率模块的封装技术亟待突破。本文以常用的焊接式功率模块为例，首先梳理了模块的设计目标、制作原则和工艺流程。然后，在相同封装结构和寄生参数下，对比研究了全SiC、混合和全Si 功率模块的开关特性、损耗特性、温敏特性。最后，建立了功率模块失效的模型，揭示了SiC 功率模块的失效机制，得出以下结论： 

1）在动态损耗、温度特性方面，全SiC 模块具有明显优势。其中，混合模块的关断损耗比全Si模块减少 34%，而全SiC 模块的开关损耗仅为全Si模块的33%。SiC 功率器件能大幅降低开关损耗，实现高效、高功率密度的变流器。 

2）SiC模块的开关特性更加接近于理想开关， 所建立的开关动态模型以及损耗估算方法，与实验结果相比，开关损耗的对比误差小于15%，可以有效评估SiC 功率模块的损耗。 

3）SiC MOSFET 常见的失效方式有过电流热击穿、过电压击穿和栅极失效等。热击穿表现为芯片熔融，关断过电压发生在芯片边缘第一场限环附近，开通过电压发生在芯片中心。栅极失效为SiC  MOSFET尤其需要关注的失效模式。

因此，可根据应用工况、开关频率和散热条件， 合理选择功率器件。高频工况选用全SiC 功率模块，应选择参数分散性一致的芯片，严格控制封装寄生参数，以抑制振荡和电流不均衡。中低频选工况择全Si 模块或混合模块，建立计及电热效应的损耗模型，以满足不同工作温度下的散热要求。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)