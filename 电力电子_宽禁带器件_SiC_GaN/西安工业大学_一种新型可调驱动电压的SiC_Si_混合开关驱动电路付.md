# 西安工业大学：一种新型可调驱动电压的SiC/Si 混合开关驱动电路付


> 原文地址: [https://mp.weixin.qq.com/s/glOA2gYF8sqsKpJpzp0\_oA](https://mp.weixin.qq.com/s/glOA2gYF8sqsKpJpzp0_oA)

**文章来源：**中国电机工程学报

**作者：**付永升 1，任海鹏 2(1．西安工业大学电子信息工程学院，；2．西安工业大学机械工程学院)

**摘要：**为提高碳化硅金属氧化物半导体场效应晶体管(siliconcarbide metal oxide semiconductor filed effect transistor，SiC-MOSFET)与硅基绝缘栅极双极晶体管(silicon insulatedgate bipolar transistor，Si-IGBT)并联混合开关(SiC/Si hybridswitch，SiC/Si HyS)的可靠性与适用性，该文提出一种可变驱动电压的 SiC/Si HyS 栅极驱动电路结构，采用一路脉冲宽度调制(pulse width modulation，PWM)控制信号和一个驱动芯片产生不同电压幅值的栅极控制信号，分别控制 SiC/SiHyS 中的 SiC-MOSFET 和 Si-IGBT。相比于传统采用 2 个独立驱动电路的 SiC/Si HyS 驱动结构，该驱动电路大幅度降低 SiC/Si HyS 栅极驱动电路的复杂度，降低 SiC-MOSFET关断过程中 Si-IGBT 误导通的可能性，提升混合开关的工作可靠性。该文首先分析所设计驱动电路工作原理，给出驱动电压调节方法；其次，建立耦合电容端电压纹波和系统启动时电容端电压暂态数学模型，通过仿真和实验验证模型准确性；搭建 2 kW 的 SiC/Si 混合开关 Buck 电路，验证该文所提混合开关驱动电路可行性，从 SiC/Si HyS 功率器件关断损耗、驱动电路功率损耗、成本以及体积 4 个方面分析所提驱动结构的优势。

**关键词：**宽禁带半导体器件；碳化硅金属氧化物半导体场效应晶体管；硅基绝缘栅极双极晶体管；混合开关；门极驱动电路；耦合电容

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzztibQdJ2Owlt9hVSHZicrr1lWjv0FCF0RxMSwic3E2nSUHjgpCypvH7mZw/640?wx_fmt=jpeg&from=appmsg)

**0 引言**

功率半导体器件飞速发展至今，硅基功率半导体器件的性能已逼近其材料极限。碳化硅金属氧化物半导体场效应晶体管(silicon carbide metal oxidesemiconductor filed effect transistor，SiC-MOSFET)作为宽禁带半导体(wide-bandgap，WBG)器件的代表性产品之一，具有耐高温、高开关频率、低开关损耗等特性，为高功率密度、高效率的电力电子设备提供了更多可能性，但昂贵的价格和生产技术不成熟严重阻碍了该器件的应用。虽然传统硅基绝缘栅双极型晶体管(silicon-insulated gate bipolartransistor，Si-IGBT)开关损耗较大，但因其价格低廉、电流应力大等优势，目前工业功率变换系统仍普遍以其为核心器件。

为发挥 Si-IGBT 的大电流应力和 SiC-MOSFET的低开关损耗与高开关频率优势，2014 年美国北卡罗来纳州立大学 Alex Q. Huang 团队首次报道SiC-MOSFET 与 Si-IGBT 并联的混合开关\[3\](SiC/SiHyS)，并受到学术界广泛关注；2015 年，ABB公司报道了 3.3 kV 电压等级 SiC/Si HyS，并给出混合器件在开关过程中的电流分配机制，为 SiC/SiHyS 的应用奠定了基础。但由于 SiC/Si HyS 工作模式较多，且不同模式下损耗不相同，为揭示不同拓扑结构下 SiC/Si HyS 的最佳工作模式，南京航空航天大学秦海鸿和中科院宁圃奇等分别通过对 SiC/SiHyS 等效模型进行分析，构建不同驱动模式下SiC/Si HyS 的损耗模型，为不同拓扑结构下SiC/Si HyS 工作模式的选择提供了参考。但在实际应用中发现：SiC/Si HyS 工作在效率最高点时，SiC-MOSFET 的结温较大，过热导致失效可能性增大。为控制 SiC-MOSFET 工作时的温度，浙江大学徐德鸿和湖南大学王俊等对混合开关混合配比参数、门极时序以及参数选择做了大量研究工作，建立混合器件损耗数学模型，并采用主动结温控制策略有效提高了SiC/Si HyS可靠性。基于以上研究，代尔夫特理工大学、华中科技大学、中国科学院电工所以及合肥工业大学等团队将 SiC/Si HyS 使用在逆变器和 DC/DC 拓扑结构中，并获得了较高性价比。

但不同于传统三端功率器件，SiC/Si HyS 需要采用独特的驱动模式才能降低功率损耗，在实际应用中需要考虑以下 2 个问题：1）SiC-MOSFET 和Si-IGBT 的导通损耗受到各自开通时栅极电压幅值的影响(SiC-MOSFET 开通时的栅-源极电压通常为20 V，Si-IGBT 通常为 12~15 V)；2）SiCMOSFET 关断过程中漏源极电压快速上升，电流急速下降，负载电流给 Si-IGBT 的集射极寄生电容CCE 和栅集极寄生电容 CGC 充电，Si-IGBT 内剩余载流子需要承受较高电压变化率，Si-IGBT 的栅射极电压 VGE 因 CGC 的充电形成正向尖峰，导致Si-IGBT 误导通，同时增加额外关断损耗。为保证混合开关工作可靠性，SiC/Si HyS 中 Si-IGBT门极驱动电压需要较低负压关断。由以上原因可得，SiC/Si HyS 中 SiC-MOSFET 和 Si-IGBT 2 种器件需要采用不同门极驱动电压控制其开关(如SiC-MOSFET 常采用+19 V 开通，-5 V 关断；Si-IGBT 采用+15 V 开通，-15 V 关断)，提升其总体性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzhbpEp6fUgVfX5iaqu5P7hD3bestPffnXSzsp0drQVXCnPq2UW8JrQsA/640?wx_fmt=png&from=appmsg)

但 SiC/Si HyS 中 SiC-MOSFET 源极与 Si-IGBT发射极相连，使得 SiC/Si HyS 门极驱动需要 2 个独立驱动回路和 2 路脉冲宽度调制(pulse widthmodulation，PWM)控制信号分别产生不同电压等级的驱动信号，而且所对应电源模块需要具有双路正负电压的输出特性。如图 1(a)所示为 SiC/Si HyS 传统门极驱动器结构图，其需要 2 个能输出不同正负电压值的电源模块和 2 个集成驱动器分别实现对SiC-MOSFET 和 Si-IGBT 的独立控制。文献均采用如图 1(a)所示的驱动结构对 SiC/Si HyS 控制，该驱动电路需要独立产生 2 个相关控制信号，增加了电路板(printed circuit board，PCB)设计复杂度，降低了混合器件整体性价比，成为制约 HyS应用的瓶颈之一。文献虽然采用一路控制信号和一个驱动器实现了对 SiC-MOSFET 和 Si-IGBT的控制，但 SiC-MOSFET 和 Si-IGBT 的门极驱动电压幅值是按照 SiC-MOSFET 常用门极驱动电压幅值(+19 和-5 V)设计。SiC-MOSFET 关断过程中较大电压变化率容易引起 Si-IGBT 误导通，同时也导致 Si-IGBT 关断拖尾电流时间长，Si-IGBT 不能工作在最佳状态。现有研究可知：SiC/Si HyS 门极驱动在对SiC-MOSFET和Si-IGBT采用不同驱动电压控制时存在以下不足：1）需要 2 路驱动信号和 2个驱动器分别控制 SiC-MOSFET 和 Si-IGBT，电路结构及控制复杂度高；2）单控制信号和单驱动器构成的门极驱动电路采用统一驱动电压驱动(开通和关断电压取决于 SiC-MOSFET 栅极可承受的电压幅值)，Si-IGBT 栅极关断负压不足，降低了 SiC/SiHyS 可靠性。

文中提出一种可变驱动电压的多模式一体化SiC/Si HyS 驱动器，如图 1(b)所示，采用一路控制信号、一个驱动器和一个单路输出的电源模块为SiC-MOSFET 和 Si-IGBT 提供不同幅值的驱动电压，大大简化了驱动结构的复杂度。该驱动电路体积较小，容易与 SiC/Si HyS 功率模块集成，满足传统三端(栅极、源极、漏极)开关器件结构，使新混合开关器件能够原位替换变换器中传统开关器件，提升系统性能。本文内容如下：首先，介绍 SiC/SiHys 的不同驱动模式；其次，介绍所提驱动电路的工作原理；再次，给出参数选择依据和启动暂态过程描述；然后，给出仿真和实验结果，验证驱动电路可行性和理论分析正确性；最后，对所提驱动电路与现有方案进行性能对比分析，验证方案优越性。

**1 SiC/Si HyS 驱动模式**

相比于传统三端开关器件，SiC/Si HyS 增加了一个门极控制自由度，为实现优越的开关性能奠定了基础。目前，常用驱动模式如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzzk2dr1YBhIVpE5hphGBJiaU7HcppUQeeLmxggVBZLuAEWfj5YSWS4S5w/640?wx_fmt=png&from=appmsg)

模 式 A ：开通过程中 SiC-MOSFET 先 于Si-IGBT 开通，开通损耗由 SiC-MOSFET 承担，开通损耗较小。但在开通过程中，SiC-MOSFET 承担全部负载电流，短时间内 SiC-MOSFET 温度上升较快，有过热风险。

模式 B：SiC-MOSFET 和 Si-IGBT 同时开通，在负载电流较大时可有效减小 SiC-MOSFET 过热的风险，提高 SiC-MOSFET 的可靠性。但在小电流工况下，SiC/Si HyS 开通损耗增大，轻载条件下系统效率低。

模式 C：Si-IGBT 早于 SiC-MOSFET 开通，且晚于 SiC-MOSFET 关断。由于 Si-IGBT 能承受较大电流，模式 C 虽然可提升 SiC-MOSFET 的安全性，但该模式下 Si-IGBT 处于硬开通状态，系统开关损耗大，因此仅适用于软开关拓扑结构，应用范围小。

在模式 A 和 B 关断过程中，SiC-MOSFET 均比 Si-IGBT 晚关断，用于减小混合开关的关断损耗。模式 A 和 B 可根据不同负载电流，采用交错切换方式广泛应用于各种变换器中，如 DC-DC，逆变器。文中所提可调驱动电压驱动电路可实现工作模式 A 和 B，同时可满足 2 种器件不同驱动电压的需求。

**2 所提混合开关驱动电路**

**2.1 所提驱动电路结构**

如图 1(b)所示，文中所提 SiC/Si HyS 驱动器由一个驱动芯片和一路 PWM 控制，驱动芯片输出控制信号同时连接 SiC-MOSFET 和 Si-IGBT 的驱动回路。

在 SiC-MOSFET 驱动支路中：增加一个低压 N沟道 MOSFET Sd1 和由电容 Cd1 与电阻 Rd1 组成的RC 延迟电路，用来控制 SiC-MOSFET 的关断延迟；稳压二极管D1与耦合电容Cg1并联后串联于驱动回路中，用于构造不同的 SiC-MOSFET 开通和关断电压；电阻 Rg1和电容 CGS分别为 SiC-MOSFET 的门极电阻和栅极与源极间的寄生电容；电阻 Rgs1是为保证驱动系统在启动或出现故障时，SiC-MOSFET栅-源极电压能保持低电平，避免 SiC-MOSFET 导通。

在 Si-IGBT 驱动回路中：增加一个低压 P 沟道MOSFET Sd2和由电容 Cd2与电阻 Rd2 组成的 RC 延迟电路，用来控制 Si-IGBT 的延迟开通；稳压二极管 D2 与耦合电容 Cg2 并联后串联在驱动回路中，用于构造不同 Si-IGBT 开通和关断电压；电阻 Rg2和电容 CGE 分别为 Si-IGBT 的门极电阻和栅极与发射极间的寄生电容；电阻 Rge2 与电阻 Rgs1 具有相似功能，即：在驱动系统启动或出现故障时，为保证Si-IGBT 栅-射极电压能保持低电平，避免 Si-IGBT误导通。

vcc 和 vee 分别为驱动器输出的高电压值和低电压值，为保证 SiC/Si HyS 驱动电压在安全值(该值取决于SiC-MOSFET和Si-IGBT所能承受正门极电压与负门极电压差)范围内，电源模块输出电压值需要满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzz6cXBARaXiaeN1aSMc0fpzdWYsgbDUZAfiaXK2tUmPbkfk6fLNtqBt4nQ/640?wx_fmt=png&from=appmsg)

式中：VSiC\_on、VSiC\_off 分别为所选 SiC-MOSFET 在开关过程中栅极所能承受电压的最大值和最小值；VSi\_on、VSi\_off 分别为所选 Si-IGBT 在开关过程中栅极所能承受电压的最大值和最小值。

**2.2 工作原理分析**

当驱动器输出电压由低电平转向高电平时，SiC/Si HyS开始导通。在SiC-MOSFET驱动支路中，由于 Sd1 已处于开通状态，且其体内二极管导通，驱动器输出信号通过Sd1内部二极管直接给电容Cg1和 CGS充电。稳压二极管 D1 工作于反向击穿状态，电容 Cg1 两端电压被钳制为 D1 的击穿电压 VD1。驱动器通过门极电阻 Rg1给 SiC-MOSFET 的栅源极电容充电，完成 SiC-MOSFET 的开通。对于 Si-IGBT驱动回路，由于前一个开关周期结束时 Si-IGBT 比SiC-MOSFET 先关断，在驱动器输出电压由低电平转向高电平时，Sd2 处于断开状态，所以，Si-IGBT不能立即开通。驱动芯片输出高电平使电容 Cd2 两端电压降低，当该电压等于 Sd2 开通电压时，Sd2导通，Si-IGBT 开始导通。所提驱动电路开通等效模型如图 3(a)所示，由基尔霍夫定律可知，SiCMOSFET 和 Si-IGBT 的开通电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzz9gFpyb3qWFJz3OFOL2qHPW90sJWCIGicuK1zoFrgBiaLKljWHHY1FgEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzzsfic60Xd4qBmgQRbegDHNt9licFc73k97va28W9MOYybQiaGrAgU71PFg/640?wx_fmt=png&from=appmsg)

式中：VD1、VD2 分别为 SiC-MOSFET 和 Si-IGBT 驱动支路中的稳压二极管反向击穿电压；VSd1\_on 为Sd1 内部二极管导通压降；VSd2\_on 为 Sd2 工作时的源漏极导通压降。由于 VSd1\_Vd 和 VSd2\_on值较小，可以忽略。

当驱动器输出由高电平转为低电平时，SiC/SiHyS 开始关断。在 SiC-MOSFET 驱动回路中，SiC-MOSFET 处于开通稳态，Sd1 处于关断状态。因此，当驱动器输出低电平时，SiC-MOSFET 不能立刻关断。驱动器输出首先对由 Cd1 和 Rd1 组成的延迟网络进行充电，当 Cd1 两端的电压高于 Sd1 的门极开启电压时 Sd1 导通，SiC-MOSFET 栅源极电容开始放电， SiC-MOSFET 开始关断，此时SiC-MOSFET 栅源极的关断电压为VD1。对于Si-IGBT 驱动回路，当集成驱动器输出低电平时，Si-IGBT 的栅-射极电容可直接通过 Sd2 体二极管放电，无延时完成 Si-IGBT 关断。此时 Si-IGBT 栅射极两端电压为VD2。SiC/Si HyS 关断过程中的等效模型如图 3(b)所示，由基尔霍夫电压定律可知，SiC-MOSFET 与 Si-IGBT 的关断电压 VSiC\_off 和VSi\_off分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzdkmpeiaOD4sqqPtDNnODhbjwrQsxpmqRBxQ2IlLPLDf19Yic5btn37lg/640?wx_fmt=png&from=appmsg)

式中：VSd1\_on 为 Sd1 工作时的源-漏极导通压降；VSd2\_Vd 为 Sd2 体二极管导通压降。VSd1\_on 和 VSd2\_Vd很小可以忽略。

**3 参数选择及启动暂态分析**

文中所提驱动电路涉及低压 N 沟道和 P 沟道MOSFET、电容 Cgi(i = 1, 2)、稳压二极管 Di、RC延迟网络中电阻和电容值的设计。开/关延迟时间和低压 MOSFET 的选择方法详见文献，本文将重点介绍稳压二极管 Di 和电容 Cgi 的参数选择。

**3.1 稳压二极管参数选择**

由 式 (2) 和 (3) 可知， SiC/Si 混合开关中SiC-MOSFET 和 Si-IGBT 开通与关断的驱动电压主要取决于稳压二极管。电容 Cgi 的作用为在SiC-MOSFET 和 Si-IGBT 开通或关断后的稳态下，保持门极电压恒定。因此，稳压二极管 D1 的反向击穿工作电压 VD1 不能低于 SiC-MOSFET 栅-源极的最低关断电压。稳压二极管 D2 的反向击穿工作电压 VD2 不能低于 Si-IGBT 栅-射极的最低关断电压。即稳压二极管 Di 的取值应满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzz6iaa00G2RSTqqzP9kyMtYhRpc8IwD3pK7cTj4gKcOwBmSPurFNqs0Qg/640?wx_fmt=png&from=appmsg)

**3.2 耦合电容参数选择**

与稳压二极管并联的耦合电容在一个开关周期内完成一次充放电，较大电容值可保证 SiC/Si 混合开关在开通和关断过程中保持栅极电压平稳。电容值越小，栅极电压纹波越大。为保证 SiC/Si 混合开关安全稳定运行，需要选择合适的 Cg。

以 SiC-MOSFET 的驱动回路为例，假设耦合电容 Cg1 两端电压 VCg 恒定，在 SiC-MOSFET 开通过程中，通过 Cg1 的总电荷量为 SiC-MOSFET 栅-源极电荷量与消耗在 Rgs1 上电荷之和。因此，由图 1可知：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzz1248bwgez2UjTZY6elIxSd44PPVRVQOQMibHVdgEAx5xWItQ0l0owGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzOTSibibnoJGKdvcoad2ciajacRvNZHicTDUOaiaT63nt7WFBVRyQP7uRACQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzxHu7hEwUVzwcMVs4DnHPQPeapkKSpUny1dFUlE4cKxBt5O9az4NicWg/640?wx_fmt=png&from=appmsg)

不同耦合电容值下其端电压纹波如图 4(b)所示。结合式(7)和(8)，耦合电容值与其端电压的纹波关系可表示为式(9)。图 4 及式(9)可用于特定电压纹波下实际电路中耦合电容值的选择。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzAeRxNkcJz77JVKXyUiaQ8gpkJTWJhdW3CGPZW9YdfqnNqfyjqRVzFrQ/640?wx_fmt=png&from=appmsg)

**3.3 启动暂态分析**

对于特定电压纹波值，由式(9)可计算出所需耦合电容值。但当驱动系统初次启动或断电重新启动时，电容端电压从 0 开始增加，一段时间后，端电压达到稳态。为保证系统功率模块开始工作时栅极驱动系统已进入稳态，需要对所提栅极驱动电路启动过程分析。同时，在启动过程中 MOSFET 栅-源极正电压值从电源模块输出的最大值开始下降，而电源模块输出的最大电压值一般接近 MOSFET 所能承受的最大栅-源极电压，MOSFET 长期工作于该值附近，栅-源极损坏的可能性较大。为保证基于SiC/Si HyS 的功率变换器的可靠性，需要对耦合电容端电压暂态变化过程进行分析，得出耦合电容值的选择依据。

以 SiC-MOSFET 驱动回路为例，门极电阻 Rg1和栅-源极寄生电容 Cgs 均远小于栅-源电阻 Rgs1 和耦合电容，因此，耦合电容端电压暂态过程主要取决于 Cg1 值和 Rgs1 值。为能同时获得期望电压纹波和暂态过程，需要同时对耦合电容值进行优化。在SiC-MOSFET 驱动回路中，Cg1 和 Rgs1 组成简单的RC 延迟网络，其时间常数t1 = Rgs1Cg1。t1 越大，耦合电容端电压进入稳态的时间越长。同时，由式(9)可知，当 PWM 信号占空比 Don = 0.5 时，所求得的耦合电容值能保证整个电压纹波需求。因此，将t1 =Rgs1Cg1代入式(9)，并令 Don =0.5 时，可求得所需耦合电容最小值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzzweOn0TSEHic8dnjtdJFLiaibGW4Y5OTKg1KTGlvzkPyW5ffbCkFsZRtw/640?wx_fmt=png&from=appmsg)

**4 仿真与实验验证**

**4.1 仿真分析**

为验证所提驱动结构的可行性，采用 LTspice构建仿真模型。驱动系统中稳压二极管采用 6.2 V的 BZX84C6V2L；电源模块输出电压 24 V；电阻Rgs1=1k欧；开关频率 50 kHz；PWM 死区时间500 ns( 实际占空比为 0.475) ； MOSFET 采 用STP8NM60，由数据手册可知其门极电荷量在13~18 nC 之间。当耦合电容分别为 100 和 300 nF时，MOSFET 栅-源极电压及耦合电容端电压仿真波形如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzAWC2tfc4ZV04aWlmHwU9qy06r3ibjYdbB2ibButgOFV2rZohztrHgK2A/640?wx_fmt=png&from=appmsg)

由图 5(a)可知，当耦合电容为 100 nF 时，其端电压纹波达到 1.35 V，该值与图 4(b)所示的 100 nF电容下电压纹波分析结果相同。MOSFET 栅-源极电压有 0.5 V 的过冲。同时由式(9)可知，当耦合电压纹波设定为 1.35 V 时，所需电容值为 98.3 nF(以Qg\_SiC  13 nC 计算)。当耦合电容为 300 nF 时，其端电压纹波为 0.45 V，其相比于 100 nF 时端电压纹波减小了 64%，MOSFET 栅-源极过冲电压减小至0.2 V(减小了 60%)。同样由式(9)可知，当耦合电压纹波设定为 0.45 V 时，所需电容值为 295 nF。由此可以验证文中电容选择方法的正确性。

为验证耦合电容端电压启动过程，取 Rg1 =1 k欧，当 Cg1 = 100 nF 和 Cg1 = 300 nF 时，耦合电容端电压和 MOSFET 栅-源极电压如图 6 所示。如图 6(a)所示，当 Cg1 = 100 nF 时，电容 Cg1 端电压建立时间约为 0.3 ms；如图 6(b)所示，当 Cg1 = 300 nF时，Cg1 端电压建立时间约为 0.9 ms。因此，Cg1或Rgs1 越大，其端电压纹波减小，MOSFET 栅-源极电压越平稳，但到达稳态的时间也会越长。同时，较大电容值会增加电容体积，驱动回路面积增大、回路寄生电感增大，此时将会引起栅-源电压振荡。因此，实际电路中需综合考虑，获得折中方案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzrWIsEsich2aNic4SiaMiciaWNFClDh4hW35ic6AWE5WicYax2G8LezPlp6bOA/640?wx_fmt=png&from=appmsg)

**4.2 实验验证**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzZiagP8RveoFgWAG2R5H9YBRfL0ZQmt0c6tSL9HSzNBbYNY5vNH2ib3FQ/640?wx_fmt=png&from=appmsg)

按照所提驱动电路搭建如图 7 所示 SiC/Si 混合开关驱动器，器件参数及其型号如表 1 所示。图 8为 SiC-MOSFET 驱动回路 PWM 控制信号、栅-源极驱动信号及耦合电容端电压波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzKUW7aPRIV64HtSELviaGiaDCswbhNxgvGb6Vy4Fe5CFUHovt6Tg06zQw/640?wx_fmt=png&from=appmsg)

图 8(a)为 Cg1 =100 nF 时驱动回路中相关电压波形，由于电源模块采用 24 V 供电，因此驱动器输出 PWM 波形为 0~24 V。稳压二极管采用 5.1 V，因此耦合电容端电压被钳位至 5.1 V。SiC-MOSFET栅-源极电压在开通时为 18.9 V，关断为-5.1 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzkyEe3nkdqMia4P22DWYQqKeaWPW773exGaw7Q9ZktnXXjgkU21Dx0MQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzziaHZP8cZH4iaUL1uMX9xJzHc8kAvibapqc5CZbMQ4QQmwaibw5oPDMffcQ/640?wx_fmt=png&from=appmsg)

为清晰显示该工况下耦合电容两端的电压纹波，通道 2(耦合电容端电压检测通道)采用交流耦合方式，如图 8(b)所示。此时耦合电容端电压纹波约为 0.8 V。虽然 PWM 信号的上升沿和下降沿均有较大过冲，但不会影响 SiC-MOSFET 在开通和关断期间的栅-源极电压。

图 8(c)为 Cg1 = 300 nF 时驱动回路中相关电压波形，可见耦合电容值没有影响 SiC-MOSFET 的栅-源极稳态电压值，其开通和关断电压值仍能保持稳定。正如仿真和理论所述，较大电容可以抑制其两端的电压纹波。相比于 Cg1 = 100 nF 时，图 8(c)中耦合电容两端电压纹波减小至 0.4 V(减小了50%)，该仿真结果与理论分析一致。

为分析不同耦合电容值对系统的影响，图 8(d)、(e)分别为驱动电路在不同耦合电容情况下的启动过程。图 8(d)为 Cg1 = 100 nF 时 SiC-MOSFET 驱动回路的启动过程，电容 Cg1 端电压在 0.2 ms 内达到稳态。可见 SiC-MOSFET 栅-源极电压从 24 V 开通、0 V 关断逐渐变化为 18.9 V 开通、5.1 V 关断的稳态，该结果与仿真结果一致。图 8(e)为 Cg1 = 300 nF时 SiC-MOSFET 驱动回路的启动过程，由于电容值增大，系统启动的时间增大，从原来 0.2 ms 增加至0.46 ms，与理论分析结果一致。需要说明的是，由于器件参数本身的非线性，电容值的增加与系统启动时间的增大不是线性关系，实际所需启动时间需根据实验测试确定系统参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzHo2ia3aJ5UrwDnT96U9w8zw2vRGlbAicPQ3TszHs27JgUN6jQtzV8tpQ/640?wx_fmt=png&from=appmsg)

图 9 为 Si-IGBT 驱动回路 PWM 控制信号、栅源极驱动信号及耦合电容端电压波形。图 9(a)为Cg2 = 100 nF 时驱动回路各电压波形，与 SiCMOSFET 驱动回路不同的是稳压二极管稳压值变为 12 V。因此，在系统稳态时，Si-IGBT 开通电压为 12 V，关断电压为-12 V，耦合电容 Cg2 两端电压基本保持稳定。Cg2 端电压检测方式设置为交流耦合方式时，驱动回路电压波形如图 9(b)所示，稳态工况下 Cg2 两端电压纹波峰-峰值为 0.85 V。与SiC-MOSFET 驱动回路相同的是在 PWM 上升沿和下降沿，电容端电压均有较大冲击，但该值没有影响 Si-IGBT 栅-射极电压幅值。图 9(c)为 Cg2 = 100 nF时驱动回路电压波形，Cg2 两端电压稳态纹波峰-峰值降低为 0.45 V。由图 8(b)、(c)和图 9(b)、(c)可见，相同耦合电容和回路电阻下，Si-IGBT 驱动回路中Cg2 端电压纹波大于 SiC-MOSFET 驱动回路中 Cg1端电压的电压纹波，这是由于 Si-IGBT 门极电荷量大于 SiC-MOSFET 的门极电荷量，该实验结果与理论模型结果相同。

为进一步分析SiC-MOSFET与Si-IGBT驱动回路的不同，图 9(d)为 Cg2 = 100 nF 时 Si-IGBT 驱动回路的暂态启动过程，启动时间达到 1.05 ms，远大于相同回路参数工况下 SiC-MOSFET 驱动回路的启动时间。如图 9(e)所示，当 Cg2增加至 300 nF 时，驱动回路各电压波形达到稳态需要的时间增加至 3 ms，较大启动时间是由于 Si-IGBT 的输入电容较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzz2hh4z3SYg0wdVGQccEicH2fUSiahNvjTbGmmtMZXDyxIZEoPVE2Fqiaiag/640?wx_fmt=png&from=appmsg)

为验证 SiC/Si HyS 和所提驱动结构在实际应用中的可行性，文中构建 2 kW 的 Buck 测试平台，如图 10 所示。耦合电容 Cg1和 Cg2 均采用 100 nF，驱动系统启动时间约为 1 ms，其他系统参数如表 1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzDz02q01JRbRcevEfsDkzRkVupyj3OYPnwWVtjfsiaAczpREpn4HYV5Q/640?wx_fmt=png&from=appmsg)

图 11(a)为 A 触发模式下 SiC/Si HyS 的开通与关断过程。SiC-MOSFET 先开通，负载电流由 SiCMOSFET 承担，经过 650 ns 后，Si-IGBT 开始导通，集-射电流 ice开始增加，该过程中 SiC-MOSFET 导通电流 ids 基本保持定值。关断过程中，Si-IGBT 先关断，电流 ice 降为零，负载电流再次由 SiCMOSFET 承担，经过 780 ns 后 SiC-MOSFET 开始关断。由于 SiC-MOSFET 关断损耗远小于 Si-IGBT，SiC/Si HyS 关断损耗较小。图 11(b)为触发模式 B下 SiC/Si HyS 的开通过程， SiC-MOSFET 与Si-IGBT 几乎同时开通，但 SiC-MOSFET 开通速度较快，因此，在开通瞬间负载电流基本上由 SiCMOSFET 承担。当 2 种开关完全开通后，电流 ice随负载电流的增大而增加，而流过 SiC-MOSFET 的电流 ids 保持定值。触发模式 B 下 SiC/Si HyS 的关断过程与模式 A 相同。

**5 性能比较与分析**

由 4.2 节实验验证了所提混合开关门极驱动可行性，但门极驱动电压与功率器件损耗有直接关系，因此，需要对文中所提驱动电路对 SiC/Si HyS中功率器件损耗的影响作进一步分析。同时，相比于传统两路独立驱动支路的门极驱动结构，文中所提混合开关驱动结构增加了辅助器件，其功率损耗、成本及系统体积需要进一步分析比较。

**5.1 所提驱动电路对 SiC/Si HyS 损耗影响分析**

SiC/Si 混合开关损耗与传统三端器件相似，包含开通损耗、导通损耗以及关断损耗，且其均与门极驱动电压有关。SiC/Si HyS 的功率损耗模型详见文献。由此可知，IGBT 门极驱动电压变化对 SiC/Si 混合开关的开通损耗和导通损耗影响不大。因为 SiC/Si HyS 的电流分配取决于 SiCMOSFET 的导通电阻和 Si-IGBT 的饱和压降 vce，当SiC-MOSFET和Si-IGBT选定后各自传导的电流基本恒定不变，因此导通损耗不变；而开通损耗主要由 SiC-MOSFET 承担，SiC-MOSFET 的门极驱动电压未发生变化，其开通损耗基本不会变化。文中主要分析 Si-IGBT 门极电压发生变化时(由 18.9 V开通、-5.1 V 关断变化为 12 V 开通、-12 V 关断)SiC/Si HyS 关断损耗的变化。在此过程中 SiCMOSFET 的门极驱动电压保持 18.9 V 开通、-5.1 V关断不变。SiC/Si HyS 关断损耗可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzjbIoic5AiaPiaOtGAM7TsicXNey2NpFaES9mmQdriafd50RkepOlqlU4D3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzJaSM8qgiaYWov8uy03Lsa9cvXIFzc1X4a4o1OfuZLBfj2RQgrEP227w/640?wx_fmt=png&from=appmsg)

图 12(a)为相同门极驱动电压(SiC-MOSFET 和Si-IGBT 均为 18.9 V 开通，-5.1 V 关断)时 SiC/SiHyS 的关断损耗；图 12(b)为不同门极驱动电压(SiC-MOSFET 为 18.9 V 开通、-5.1 V 关断；Si-IGBT为 12 V 开通、-12 V 关断)下 SiC/Si HyS 关断损耗。由比较可知，当 Si-IGBT 的栅极驱动电压变为-12 V关断时可降低 15%的关断能量损耗。由此可知SiC/Si HyS 工作频率为 50 kHz 时，采用文中所提混合开关驱动电路可有效降低 SiC/Si HyS 0.15 W 功率损耗。

**5.2 所提驱动电路功率损耗分析与比较**

5.2 节比较了 3 种常用混合开关门极驱动电路的功率损耗。首先，由文献可得，在 50 kHz 开关频率时，具有单控制信号、单集成驱动芯片的栅极驱动电路比传统双独立驱动支路的栅极驱动电路功率损耗大 2.8%。文中所提驱动电路是在单控制信号、单集成驱动芯片的栅极驱动电路增加了 2 个辅助的耦合电容 Cg1 和 Cg2(Cg1 =Cg2 =Cg)，可在一个开关周期内完成充放电，其功率损耗可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzzf3mkXr7T0ibvxSjv6uKZhHr3L5arRuF4pxXEMKon9lF7E9Hdqtp9aEA/640?wx_fmt=png&from=appmsg)

式中![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzibFYT77otSsjbADX8vrnNBy2uwoYtTGZlsdhfPgic36E1HfEIfmg1CBw/640?wx_fmt=png&from=appmsg)为耦合电容端电压纹波幅值。当 Cg =100 nF，电压纹波![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzibFYT77otSsjbADX8vrnNBy2uwoYtTGZlsdhfPgic36E1HfEIfmg1CBw/640?wx_fmt=png&from=appmsg)\=0.8 V 时，耦合电容功率损耗如图 13 中蓝色线，在开关频率为 50 kHz 时损耗仅为 3.2 mW，相比于总体损耗为几百 mW 的驱动电路可忽略。橘色线为具有双独立驱动支路的传统驱动电路功率损耗。黑色线为单控制信号和单驱动器组成的具有相同栅极驱动电压的驱动电路功率损耗，其大于传统双驱动支路的驱动电路损耗。文中所提混合开关驱动电路损耗(如红色曲线所示)是在文献的基础上增加了耦合电容的功率损耗，因此，所提混合开关驱动电路与由单控制信号和单驱动器组成的具有相同栅极驱动电压的驱动电路产生功率损耗基本相同。但相较文献，由于给不同器件提供了不同驱动电压，该方案不仅提高了可靠性，而且降低了SiC/Si混合开关功率损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7Rzz5W1B2VT9oIHuwbTEmDicWFym40dcmUX0NFxPic4mtbKswaX8Biaf3pfIQ/640?wx_fmt=png&from=appmsg)

**5.3 成本比较**

目前，由于 SiC-MOSFET 开关频率较高( 大于或等于50 kHz)，开关动作期间所需瞬态门极驱动电流较大，隔离与驱动集成于一体的门极驱动较少。多数SiC-MOSFET 门极驱动结构中仍采用隔离芯片与驱动芯片分开的方式。该设计中，驱动芯片采用CLARE 公司生产的 9 A 最大驱动电流的IXDI609SIA 驱动器，数字隔离器采用 Silicon Labs的SI8711C-B-IS。SiC-MOSFET驱动支路和Si-IGBT驱动支路的低压 MOSFET 分别采用 NVR5198NL和 EMBA5P06J，隔离电源模块采用输入 12 V 转24 V 的 ISH1224A，常用电阻、电容价格不计。传统混合开关驱动系统价格及所提驱动系统价格如图 14 所示，相比于传统双驱动支路结构，所提混合开关驱动结构可有效降低 40%的成本；相比于文献方案，所提驱动结构虽然成本高 1.6%，但采用不同的电压驱动 SiC-MOSFET 和 Si-IGBT，提升了系统可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzdpZoBGibNCfy21k7rsDViaibrnafT8lJa8sPL7rYIXAkliaFMic1JTrYmibA/640?wx_fmt=png&from=appmsg)

**5.4 体积比较**

实际应用中，为减小驱动回路面积，门极驱动系统常与功率板设计于同一 PCB 板上，驱动系统所占面积越小，功率线布局越容易，可靠性也就越高。图 15 分别为传统双独立驱动支路的 SiC/Si 混合开关驱动器、单驱动信号具有相同驱动电压的混合开关驱动器，以及所提混合开关驱动电路的体积。传统双独立驱动支路包含 2 个电源，2 个数字隔离器及 2 个集成驱动器，驱动器体积较大；单驱动信号相同驱动电压的混合开关驱动器仅包含一个电源模块、一个数字隔离器、一个驱动器和小体积的辅助器件，体积大幅度减小；所提混合开关驱动器在之前基础上仅增加了 2 个二极管和 2 个电容，体积并无明显增加，在实际工程设计中有助于功率板的布局和系统集成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnAs2Akibmeta80hyf0l7RzzzNhpTH5lz5lKBgq7n10F4bzoNojSEBFNKC6OPjxXKej6l9vzeFYtkQ/640?wx_fmt=png&from=appmsg)

**6 结论**

本文利用耦合电容和稳压二极管设计了一种驱动电压可变的 SiC/Si 混合开关门极驱动器，可通过调节驱动回路中稳压二极管工作电压改变SiC-MOSFET 和 Si-IGBT 栅极的开通与关断电压，降低 Si-IGBT 在关断过程中误导通的可能性。通过分析得出SiC-MOSFET驱动回路和Si-IGBT驱动回路中稳压二极管的反向工作稳压值均不能低于SiC-MOSFET 和 Si-IGBT 关断时能承受的最低栅极电压，而耦合电容值的选择不仅与其端电压纹波有关，而且受系统启动过程时间的限制。文章通过2 kW 的 SiC/Si HyS Buck 平台，验证了驱动系统的可靠性。实验结果表示该混合开关驱动电路能有效降低 SiC/Si HyS 中 Si-IGBT 关断能力损耗的 3%，有助于提升 SiC/Si HyS 系统的传输效率。本驱动电路的设计为门极驱动电路提供了新的设计思路，对提高宽禁带半导体器件与传统 Si 基器件并联混合应用的可靠性具有较大意义。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)