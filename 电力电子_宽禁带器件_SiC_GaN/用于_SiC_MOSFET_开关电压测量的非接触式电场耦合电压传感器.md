# 用于 SiC MOSFET 开关电压测量的非接触式电场耦合电压传感器


> 原文地址: [https://mp.weixin.qq.com/s/\_5oTgKlAR3Z2mSOcgyfy8g](https://mp.weixin.qq.com/s/_5oTgKlAR3Z2mSOcgyfy8g)

文章来源：中国电机工程学报

作者：耿嘉一，辛振\*，石亚飞，刘新宇(省部共建电工装备可靠性与智能化国家重点实验室(河北工业大学)，天津市 北辰区300130)

摘要：准确测量碳化硅(silicon carbide，SiC)金属–氧化物半导体场效应晶体管(metal-oxide-semiconductor field-effect transistor，MOSFET)开关电压是评估SiC MOSFET开关特性、计算开关损耗、优化变换器设计的关键。随着SiC MOSFET开关速度、耐压及功率密度的提升，开关电压测量难的问题逐渐凸显，因此对电压传感器的带宽、耐压和侵入性提出了新的要求。该文以SiC MOSFET的开关电压为研究对象，根据目前开关电压的测量需求，提出一种利用电场耦合原理测量开关电压的非接触式电压传感器，并设计混合积分电路对传感器输出信号进行电压重构。在此基础上，通过仿真和计算着重分析电场耦合电压传感器的结构和电路参数的设计依据。传感器带宽范围为5Hz~260MHz，量程为1000~1000V，输入电容约为0.73pF，最后利用双脉冲测试，将其与商用示波器探头的测量结果进行对比，验证电场耦合电压传感器的准确性。

关键词：非接触式电压测量；电场耦合；碳化硅金属–氧化物半导体场效应晶体管；开关电压

0. 引言

近年来，碳化硅(silicon carbide，SiC)金属–氧化物半导体场效应晶体管(metal-oxidesemiconductor field-effect transistor，MOSFET)已进入产业化快速发展阶段，逐渐应用在新能源汽车、5G通信、高速轨道交通等领域。在应用SiC MOSFET之前，需了解其开关特性。开关电压作为分析开关特性的重要参数，其准确测量是器件特性分析、损耗计算、结温提取的前提，是对器件短路保护、寿命预测及可靠性大数据模型建立的关键。然而，SiC MOSFET广泛的应用和优异的性能给其开关电压的测量带来了需求和挑战，高开关速度要求传感器需满足数十MHz的带宽及更低的侵入阻抗，高功率密度要求传感器体积小易集成，广泛的应用要求传感器有更低的价格。因此，对如何准确、高效地获取SiC MOSFET开关电压信息进行研究具有一定的现实意义和学术价值。

目前，示波器电压探头广泛应用于SiC MOSFET开关电压的测量，主要包括无源探头、有源差分探头和光隔离探头。文献\[11\]对不同示波器探头的性能进行了对比评估。以Tek示波器探头为例，低压无源探头价格低带宽高，最高带宽可达1GHz，但其耐压仅限于300V，难以满足SiC MOSFET千伏级耐压要求；高压无源探头耐压相对较高，但随耐压的增大，带宽会相对减小，价格也随之升高。有源差分探头用于测量不同电位两点之间的电压，其隔离能力和共模抑制能力都优于无源探头，通常具有较高耐压，例如Tek THDP0100耐压最高可达6kV，但带宽(\-3dB)却仅为100MHz。光隔离探头带宽高、耐压高，可耐受共模电压甚至达60kV，但其价格高达数万美元。可见，示波器探头的耐压与带宽之间呈负相关，价格与耐压、带宽之间呈正相关，三者难以同时满足用户的要求。

为平衡上述3种特性的关系，可利用阻容分压器，增大低压无源探头的耐受电压。文献\[15\]应用阻容分压电路实现了基于SiC MOSFET电力电子装置的过压和零电压开关检测，但是其带宽仅达10MHz。文献\[16\]中提出耐压为20kV的阻容分压电路，带宽也仅为15.49MHz。文献\[12\]中采用小电容与电阻并联分压，减小无源器件自身寄生参数的影响，以进一步提高阻容分压电路的带宽与耐压，然而此方案中无源器件个数达几十个。由此可见，在SiC MOSFET高功率密度的发展前提下，阻容分压器的接入会增加原电路的体积，降低测量电路的功率密度，且不利于传感器集成技术的发展。

以上所述传感器连接方式均为接触式，在SiC MOSFET开关电压测量中，接触式传感器直接与被测器件两端进行电气连接，除对带宽、耐压、成本以及体积的要求外，对原电路的侵入性问题和安全问题不容忽视。

针对以上分析，本文提出一种非接触式电压传感技术。其利用电场耦合原理测量开关电压，避免了与原电路的直接接触，很大程度上解决了接触式传感器的侵入性问题和安全问题，且高性能的处理电路可实现高压高频测量。该传感器利用印制电路板(printed circuit board，PCB)制成，降低了传感器的成本，其体积小、结构简单，可用于系统集成。

本文首先对SiC MOSFET的开关特性进行分析，并深入探究目前电压传感器的不足。其次，分析电场耦合测量的原理，提出高性能混合积分电路，并对其频率特性进行分频段的理论推导和验证。此外，通过仿真和计算着重分析电场耦合电压传感器的结构和电路参数的设计依据。最后利用双脉冲测试，将所提出的电场耦合电压传感器与高带宽示波器探头的测量结果进行对比，验证电场耦合电压传感器的准确性。

1. 电压探头对开关特性的影响

双脉冲测试平台用于获取SiC MOSFET的开关电压，图1为双脉冲测试原理图，主要包括高压直流源Vdc、储能电容Cdc、负载电感L、续流二极管D1和驱动电路，Rg为驱动电阻。虚线框内为包含了封装内部寄生参数的MOSFET，主要有管脚寄生电感Ld、Lg、Ls，各极间寄生电容Cgd、Cgs、Cds，外部线路寄生参数主要有环路寄生电感Lloop和寄生电阻Rloop。电压探头测量漏源极电压Vds，并接入示波器，其等效电路参数主要有探头分压电阻电容Rp、Cp，示波器输入电阻电容Rs、Cs，探头寄生参数有接地线寄生电感Ln和寄生电容Ci。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU02q3V7ESQVaSjJ84ZBWTa4DOWTiaIZ5bDGCLDMNbq5F4FeEmrpWvicnw/640?wx_fmt=png&from=appmsg)

由图1可知，双脉冲测试电路中存在多种寄生参数，这使电路形成复杂的LC谐振网络。实际工况下SiC MOSFET开关电压波形如图2(a)所示，图中：tr和tf为器件开关过程中的电压上升和下降时间；Ton\_ring和Toff\_ring为电压振荡周期。可见，受到寄生参数的影响，器件在开通和关断过程中表现出显著的电压过冲和振荡，会给器件带来严重的电磁干扰(electromagnetic interference，EMI)问题。电压探头的接入，会加剧这种威胁，主要影响因素有：

1）探头寄生电容。如图1所示，探头接地线引入的寄生电容为Ci。在测量过程中，探头的接入使Ci与Cds并联，增加SiC MOSFET的容性负荷，其对开关特性的影响反映在式(1)和(2)中。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUYbVWAvFyX1wZCPYu5ickywaxsT60zgDY16D6sYYnlelkwDPxRGDHDog/640?wx_fmt=png&from=appmsg)

式(1)为Vds的变化速率随各参数的变化情况，其中：VDr为驱动电压；Vmiller为米勒平台电压；did/dt为电流变化速率；gfs为跨导；S为二极管的软度因子。式(2)表示开关电压瞬态的振荡周期，其中：Lt为双脉冲测试环路中寄生电感的总和；Coss(Coss\=Cgd+Cds)为SiC MOSFET输出电容。图1中寄生电阻Rloop起到阻尼作用，决定振荡的衰减情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUHQ9geXcZ6l3GTic15HVuOoYNEwGElzyAXOKyiaESowTyTXKCicOiaPBkWA/640?wx_fmt=png&from=appmsg)

可见，额外的电容负荷对SiC MOSFET开关速率和电压瞬态振荡周期有直接影响，Ci越大，Vds变化速率越小，电压瞬态振荡周期越大。

2）探头接地线的寄生电感。示波器电压探头在实际应用中，为使测试更加方便灵活，采用长引线接地。根据长导线的建模理论，探头接地线引入的寄生电感值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUTmp99nOmFMbJtbIM8ToKug4IYicvCovZkW0NpWpWtFbNbguyOG5l9ew/640?wx_fmt=png&from=appmsg)

式中：l为接地线的长度；d为直径；Li单位为nH。由式(3)可知，接地线长度越长，接地回路越大，引入的环路寄生电感越大，这会直接减小探头的带宽。

图2(b)为接入带有寄生参数的电压探头前后的开关电压对比图，由图可知，在SiC MOSFET高开关速度下，探头寄生参数的引入增大了电路中LC谐振网络的复杂程度，限制了器件的开关速度，加剧了开关过程中的振荡幅值。这不但造成测量信号的失真，还进一步威胁到器件的寿命与安全。由此可见，研究寄生参数小，侵入性弱的电压传感器对SiC MOSFET开关电压的测量至关重要。

2. 电场耦合电压传感器设计

本文提出一种电场耦合电压传感器来测量SiC MOSFET开关电压。该测量方式可实现传感器与被测线路的非直接接触，避免了与原电路直接的电气连接，可削弱目前传感器由于对原电路引入寄生参数而带来的侵入性。

2.1电场耦合测量原理

如图3所示，电场耦合电压传感器包括金属感应电极和接地层，接地层作为参考零电位，金属感应电极与接地电阻Rm相连接。当传感器位于存在变化电场的空间中时，由于静电感应原理，金属电极上产生感应电荷，形成电流，电流流过接地电阻Rm产生压降vc，vc与被测导体周围电场变化率呈线性关系。电场耦合传感器感应电极与被测导体之间相互绝缘，同时由于电势不同、距离接近，相互之间的耦合通过耦合电容来体现，传感器的集总参数电路模型可由图4(a)中电路所表示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU1ZvUIGicWBkFp6hn4KcFuF4jHGZV3V5Fq7y8EuUj8DaEJKbqvzrucwg/640?wx_fmt=png&from=appmsg)

由图4(a)中电路原理图可知，电场耦合传感器可等效为一阶RC电路，其传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUYwkFt0xTNckEKL29gNxwibxeEzFtHIHo3fGevUxARibQ978HIsfLbia2w/640?wx_fmt=png&from=appmsg)

式中：vi为被测导体电压；Cm为传感器感应电极与被测导体之间的耦合电容；Cs为传感器电极与参考地之间的负载电容。

通过式(4)可得到电场耦合传感器幅频特性曲线，如图4(b)所示。图4(b)中，ωh为电场耦合电压传感器幅频特性曲线转折频率，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUMLSeOVjiaBaXY5HHia5LVZ7on0mkicROniaZ4LSrNIocfibYia2mKDLnc4Nw/640?wx_fmt=png&from=appmsg)

当转折频率较大，即(Cm+Cs)Rms<1，且被测电压频率上限小于ωh时，式(4)中的传递函数可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUrDj8DRCialEQNibCy1GHjTlSG1SOc8Qg80xVO7ZptJxWr9Af4tOBBc6A/640?wx_fmt=png&from=appmsg)

此种状态传感器工作在微分模式。

当转折频率较小，即(Cm+Cs)Rms 》1，且被测电压频率下限大于ωh时，式(4)中的传递函数可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU5tjUUibknLiaGzhqfssmmOLHVtw2s5eqCgvqra1Sich09mlfwmr1ofKtg/640?wx_fmt=png&from=appmsg)

此时，传感器不需外加积分器即可实现被测电压信号的成比例输出，称为自积分模式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUAjYfXu7XRribq9Kfxonh3sxnes0zg2oNicRulPszsqiapZZiaOpibKibYarg/640?wx_fmt=png&from=appmsg)

图5为不同频率点处输出信号与输入信号的对比图，当电场耦合电压传感器所感应的信号频率小于转折频率时，传感器输出信号与输入信号间相位差Δφ为兀/2，且输出信号幅值随频率的变化而变化。当电场耦合传感器所感应信号频率大于转折频率时，传感器工作在自积分频段内，输出信号与输入信号间相位差Δφ为0，且输出信号幅值不随频率而变化。

以上内容对传感器的测量原理进行了分析，由此可见，在全频率段范围内，传感器既有微分特性又有自积分特性。因此，为保证SiC MOSFET开关电压测量的准确性，传感器本身以及处理电路参数的优化设计对传感器测量系统至关重要。

2.2 混合积分电路的提出

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUmNznLoNRErf3N4C0qxh4OmO2cibSlBmQ1HxcS7ibupbpmmwnchNAZ4PQ/640?wx_fmt=png&from=appmsg)

混合积分电路原理图如图6所示，由自积分模式下的自积分电路和正相有源积分电路构成，高通滤波器滤除运算放大器引入的偏置电压。其中，有源积分电路传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUvqK7NWdib7KlMlD6PyTWzWDp5RoNOK63wR61icNZgWZNfFXlvcctq4Kw/640?wx_fmt=png&from=appmsg)

高通滤波器传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU448G4tsbEDOx1doLiamM13fYEjbAhm9GkIwqSZz2r7QxeBgicud9mcyQ/640?wx_fmt=png&from=appmsg)

自积分电路的传递函数由式(4)给出。混合积分电路的各部分频率特性曲线如图7所示，为保证混合积分电路的正常工作，各部分转折频率应相互对应，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUicb9KEOWnt2dnPoSKsB2XxwHcDHM9MkQ13LulXZ8CzvFxIrrxOlAxtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUzzpufbEFia4SWzP65vBgRR8fMETZfpJaXicyFD9eaIgCqsosU13MbQjQ/640?wx_fmt=png&from=appmsg)

1）0≤ω<ωm1时的频率特性。

当被测电压信号的频率小于转折频率ωm1，即RfCfs\=RhChs<<1时，自积分电路工作在微分环节，其传递函数由式(6)给出。有源积分电路工作在比例环节，式(8)中传递函数可化简为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUenSeBQVVTxycht0icFGvvcRoawdDA9BcnKo15APo32SFLTibIcyUJbGg/640?wx_fmt=png&from=appmsg)

此时高通滤波器呈微分特性，其传递函数可化简为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yURcib1papN1xCz6d3om8YlsNRbXB7mvwsiawGF9HYoia4WGBbr2Xv04wIA/640?wx_fmt=png&from=appmsg)

自积分电路、有源积分电路和高通滤波电路通过级联的方式共同作用，则根据式(6)、(12)、(13)，电场耦合电压传感器的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUfvnlKL2EEBATIMr6r2eNMOXDsPYakkvb6pAJbgKh3ViaUuFbPPVXNKg/640?wx_fmt=png&from=appmsg)

将式(10)、(11)中的转折频率等效关系代入式(14)中，电场耦合电压传感器的传递函数可化简为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUUsXXsJFmWibEDgIR5vmagaDEWu7iaXhkUaj5JtwjR7UuVg1Rmib0516icg/640?wx_fmt=png&from=appmsg)

2）ωm1≤ω<ωm2时的频率特性。

当被测电压信号的频率大于转折频率ωm1，小于转折频率ωm2，即RhChs\=RfCfs 》1，(Cs+Cm)Rms\=R1RfCfs/(R1+Rf)<<1时，自积分电路仍然工作在微分环节，其传递函数由式(6)给出。有源积分电路工作在积分环节，式(8)中传递函数可化简为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUkrcx8lIUeSIp2Azs4ZbCico7XF6a70uXtAMClWiaEClEEpgk7icXfbYpg/640?wx_fmt=png&from=appmsg)

此时高通滤波器工作在比例环节，且比例系数为1，所以根据式(6)和(16)，得出电场耦合电压传感器的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUPptibTcib1syFFoq9PNBjIqfibOQOS662YPJib3sxSm0l9T4LvTQDYdHSA/640?wx_fmt=png&from=appmsg)

将式(11)中转折频率之间的等效关系代入到式(17)中可化简得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUb9iaT2jvwdPCm0N5j7oiamB6G95eGiabo3lj8K6pYZKmc1L2IfrePDVhQ/640?wx_fmt=png&from=appmsg)

3）ω≥ωm2时的频率特性。

当被测电压信号的频率大于转折频率ωm2，即RhChs\=RfCfs 》1，(Cs+Cm)Rms\=R1RfCfs/(R1+Rf)<<1时，自积分电路工作在比例环节，其传递函数由式(7)给出。有源积分电路和高通滤波电路都工作在比例环节，且比例系数为1，所以，此时电场耦合电压传感器的传递函数可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUvuiaYEmYUX3u3UEPLVic7gAqdN181OZgUebwt4GHPfnPe20DF6uuPZGQ/640?wx_fmt=png&from=appmsg)

通过以上分析可知，电场耦合电压传感器的带宽下限由有源积分电路的参数决定，带宽上限由自积分电路的性能决定。该传感器在0≤ω<ωm1频率范围内为二阶微分特性，呈-40dB衰减，由此可见，其对低频信号不敏感，甚至无法测量直流电压信号，因此，为削弱在测量SiC MOSFET漏源极电压过程中低频信号的衰减，电场耦合电压传感器在设计过程中应尽量减小ωm1的值，即增大有源积分器中Rf与Cf的值，以增大传感器的频宽。电场耦合电压传感器在ω≥ωm1频率范围内呈比例特性，且比例系数为Cm/(Cm+Cs)。因此，传感器的灵敏度主要由自积分电路决定，即图7中可满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUQTq4JHlOpS7ibvN6NN3mJW5l0qImG3ic4eNtmK8X5RhWhjyeF1YWKHnw/640?wx_fmt=png&from=appmsg)

3 .参数设计

3.1电场耦合电压传感器传感头的参数设计

本文设计了贴片式PCB电压传感器，通过紧贴于被测线路表面的方式来测量SiC MOSFET漏源极电压。如图8所示，贴片式PCB电压传感器由四层PCB板构成，探头的感应层位于第二层，形状设计为正方形，尺寸为3mm\*3mm。顶层与底层为接地层，可起到屏蔽外接信号干扰的作用，除此之外，接地层需与被测信号参考地相连接，以提供准确的参考电位。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUEthIeTsAJRLI1tZIcqbgbBWCgWPZnjx0lp8jWPXyL8e0ZJ6iaGeAX7w/640?wx_fmt=png&from=appmsg)

传感器耦合电容Cm的大小与被测线路的感应距离和被测线路的面积有关。其中，感应距离由PCB板的制作工艺所决定，如图8所示，感应距离为1.265mm，中间介质层材料为FR4，相对介电常数为4.6。在实际测量中，被测线路面积应尽量大于感应层面积，如图9所示，当被测线路面积超出感应层面积一定程度时，耦合电容值变化程度变小。因此，为避免在实际测量中因放置偏差导致耦合电容值浮动较大，本文设计被测线路边长大于传感器1mm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUlMnas7GlwqTLE0uaeGqedkIERBqC3ZOeia5b5aeVyjD3jBia5m3mzH7Q/640?wx_fmt=png&from=appmsg)

在SiC MOSFET高开关速度下，为屏蔽感应头垂直方向的干扰以及衰减水平方向的干扰，图8中顶层接地层面积应大于传感器感应头的面积。图10为屏蔽层屏蔽程度与面积之间的关系，本文定义干扰程度为干扰电容Cj占耦合电容Cm的百分比，其中Cj为侧面干扰线与传感器感应头的耦合电容。当在电场耦合传感器侧面加强干扰时，周围线路对传感器的干扰程度随屏蔽层面积的增大而减小。为同时保证传感器良好的屏蔽效果和小体积，本文设计选取Δx2\=1mm。

为确定耦合电容的最终值，该文结合图9、10中的分析，利用Q3D仿真，仿真结果如表1所示，耦合电容Cm的值约为340fF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUAYiaZC57r8NiapAxK4k9mxjcs7TNUrdoePibNNSu3KKNOiaeia80koaTbGg/640?wx_fmt=png&from=appmsg)

3.2传感器电路拓扑参数设计

本实验中处理电路参数以传感器的灵敏度0.005，处理电路带宽下限小于1Hz，带宽上限充分利用传感器的自然频带为目的来设计。原理图如图6所示，其中运算放大器型号为ADA4817，带宽1050MHz，偏置电流2pA，常用供电±5V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUyNVkB0J0Vg0kN5wCdItndve7MDCJeg4fVlRjd74qNqoibPEq0ibib8Mqw/640?wx_fmt=png&from=appmsg)

在实际测量中，为保证示波器与输出线的阻抗匹配，示波器内阻应选择50Ω档。但是如图11所示，50Ω的示波器内阻Rscope会与高通滤波器的接地电阻并联，导致高通滤波器性能失效，因此，在实际电路中，本文在高通滤波器后接入电压跟随器，并在电压跟随器后串联50Ω电阻，与输出线的阻抗匹配。此种情况下，式(19)中电场耦合电压传感器的幅值衰减比的计算公式变为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUWcicz0JwTJ7rONGVxJakBnSSdT1OecEkp0A663logyuotRMAHriaRr7g/640?wx_fmt=png&from=appmsg)

根据以上公式分析可得混合积分器中各元件参数，如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUceibvx9l1dEHsZasVxK8zItDCdnOrgFhLBsCIrwehgyTA89ibOjQaFEQ/640?wx_fmt=png&from=appmsg)

4. 仿真与实验验证

4.1抗干扰能力

为进一步验证屏蔽层的作用，仿真时在传感器周围加不同电压幅值和频率的干扰源，并令干扰源尽可能接近感应头的侧面。所加干扰源的电压变化范围为100~2000V，频率变化范围为0~1GHz，仿真得到电场耦合电压传感器所感应到的干扰电压值，有无屏蔽层的干扰电压对比如图12所示。从图中数据计算可知，有屏蔽层的传感器比无屏蔽层的传感器感应到的干扰电压值低约97%，由此可证明上文的参数选择合理，屏蔽层的屏蔽效果良好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU4rWU7T9o7gVNLkGtBficlcKqzYfhKlfZxx2pTN7FXcusiaH6H5oIPw1w/640?wx_fmt=png&from=appmsg)

4.2输入电容

电压传感器对原电路的侵入性问题是目前亟需解决的问题。本文所研究电压传感器利用电场之间的耦合原理，在测量过程中会使被测线路周围的电场线分布发生变化，即被测线路与传感头顶层屏蔽之间存在分布电容，进而表现为传感器的侵入性问题。因此，侵入性的强弱主要取决于电压传感器电路总的输入电容。为验证电场耦合电压传感器对原电路的侵入性，提取图6中的电容参数，电路图则为图13中所示，其中：Ca为被测电路与电场耦合电压传感器的地之间的寄生电容，根据以上参数，利用Q3D仿真结果约为0.44pF；Coi为运算放大器的共模输入电容，根据数据手册，该值为1.3pF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUeCwtjcNQWUibnFAyc4LIzqfjZzAPfHxuEVvKHG124sjv0W2rDFIJIXg/640?wx_fmt=png&from=appmsg)

由图13可知，电场耦合电压传感器的输入电容计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUpIzVWM3hoMM7wbtsL2zDXszhreXuicHicCL3VHICQfRA7MI5xXRj8vqQ/640?wx_fmt=png&from=appmsg)

根据以上参数分析，可计算得到电场耦合电压传感器的输入电容约为0.77pF。在实际中本文也利用E4990A阻抗分析仪对传感器输入电容进行测试，测试结果约为0.73pF，与计算结果近似。

表3为电场耦合电压传感器与Tek电压探头输入阻抗值的对比，图14为利用E4990A阻抗分析仪测试的Tek示波器探头与本文研发传感器的输入阻抗曲线对比图，传感器输入电容越小，阻抗越大，因此在测试中对原电路的侵入程度越小。由图14可见，电场耦合电压传感器侵入性小于目前商用示波器电压探头的侵入性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUY1icMR9UXcaVT4K8A7YtIgiaZuCYTG9uEehicIEbZSFs2FZolh1WI5S4w/640?wx_fmt=png&from=appmsg)

4.3量程、带宽及灵敏度误差

受到运算放大器耐压的限制，该传感器的量程为-1000~+1000V。本文在第2节中分析到，传感器的灵敏度主要由耦合电容Cm和接地电容Cs确定，当传感器感应头的参数确定后，即耦合电容Cm确定，可通过仅改变Cs的值灵活调整灵敏度，以使传感器适应不同的测试要求。

为获取传感器的频率特性曲线，本文利用Bode100和Tek TTR503A对其频率特性进行测量，仪器量程分别为10Hz~50MHz和300kHz~3GHz，如图15所示其带宽可达260MHz。为确定在带宽范围内各频率点的测量误差，根据幅频增益计算公式，计算了传感器灵敏度误差随频率的变化，如图16所示，由图可知，在低频和高频信号测量中，传感器接近带宽极限(3dB)误差较大，而在约60Hz~80MHz范围内，灵敏度误差则可控制在3%以内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUhqURKGFkJhdbpusnYNwaX86JDiazGFEf3f00vIFsic9WHTv075y3xKibQ/640?wx_fmt=png&from=appmsg)

经过上文分析，电场耦合电压传感器对直流信号不敏感，测量低频信号时误差大，因此在测量脉宽较长的脉冲信号时，低频测量的不准确性会造成波形的下垂。根据式(4)、(8)—(11)，电场耦合电压传感器的传递函数可化简为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUy1iaiaPeG9ZLFlTYaKcd1LicwbmyTEkchzb3Cr3TUtD8KehLf5iciamBxyQ/640?wx_fmt=png&from=appmsg)

经拉普拉斯反变换，其时域下的阶跃响应为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUDxDicMhAicVDhARFMBvmyqeOR95SpZfWFdyFDTZHiamFzd72SKeJYlic6g/640?wx_fmt=png&from=appmsg)

将表2中给出的参数值，代入式(24)中，则传感器阶跃响应曲线如图17所示。由图可知，在200μs内，电场耦合电压传感器下垂程度小于0.12%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUQ84Juol4PQzSbWWc2r4e9fRicdWUsO1bWib8Qkicz8mT0USsCHmhtMmSg/640?wx_fmt=png&from=appmsg)

4.4电场耦合电压传感器性能验证

为测试传感器实际的频宽下限，依据图18所示的测试方法，测量100、50、10和5Hz正弦信号，测试结果如图19所示。测量结果显示，传感器可准确测量100和50Hz的信号，测量10Hz正弦信号幅值的误差率约为6%，测量5Hz正弦信号幅值的误差率约为30%。因此根据带宽定义，传感器实际低频信号测量频率下限约为5Hz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUicvvsjBpBPibEZPJZbMmWt40htFTUe9Txkq7GtQ5Cb0OahibBH4icichO7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU5ibVd9ozVqKwx055PDGiaMe0w5bMQRib4gPluuCoFFzcRbpfXczJ8fRVw/640?wx_fmt=png&from=appmsg)

为验证有源积分电路对所感应信号的还原效果及有源积分电路的引入是否会对自积分电路的还原产生影响，本实验将混合积分电路作用前后的波形在图20中进行了对比，测量示意图如图18所示。图20(a)中被测信号频率为1kHz，当混合积分器不作用时，该频率点位于传感器的微分频段，故传感器输出信号相位超前被测信号π/2，且幅值衰减过大，与图5(a)所述一致。当混合积分器作用于微分频段时，输出信号与被测信号呈比例关系，相位差为零，衰减倍数为200倍，符合本文中对传感器参数的要求，因此验证积分电路的有效性。图20(b)中被测信号频率为1MHz，该频率点位于自积分频段。由图可知，该频率点电压的输出主要为自积分电路的作用，积分器无作用，因此也可验证加入积分器前后对自积分的工作并无影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUoYEL2I5L13aGfzjO4bw1SibicibX7yEojfoTAtAE2PT0KicI0kxJXFJ2VA/640?wx_fmt=png&from=appmsg)

4.5 SiC MOSFET开关电压测试

本实验搭建基于SiC MOSFET C3M0075120K的双脉冲实验平台来测试开关电压信号，如图21所示，其中驱动栅极电阻为5Ω。实验将电场耦合电压传感器与Tek TPP0850电压探头(带宽为800M)的测量结果进行对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUM7Do3nC3Vt4ScY4AOVvjeV3IOeRW7VruAhMPkQ2icN10poBkTibhWb8w/640?wx_fmt=png&from=appmsg)

在上文分析中提到，电场耦合电压传感器对直流信号不敏感，容易出现下垂效应，故图22中采用多脉冲实验进行验证，脉冲宽度为20μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUZhPcoXrbzicX6j79wHovian4ibagAVksDsHnU5UpeLK0uR9bw1Mo2qIcQ/640?wx_fmt=png&from=appmsg)

根据图15计算，20μs时下垂程度小于0.01%，下垂效应较弱。因此在实验结果中，其输出波形与Tek TPP0850输出波形重合度高，波形下垂导致的误差可忽略不计。

图23为SiC MOSFET双脉冲实验结果。如图所示，器件开关过程中振荡周期为20ns，频率达50MHz。开关电压的关断上升时间为13ns，开通下降时间为16ns。经过与Tek TPP0850探头的测量结果对比，图21中电场耦合探头电压重构效果良好，可准确测量SiC MOSFET开关电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUl8ydCeIsVBr5jFRC8XcwDNygbTdLloDicM3QVw0kVaQ63XjLMduPXbA/640?wx_fmt=png&from=appmsg)

5. 结论

本文提出一种利用非接触式电场耦合原理测量SiC MOSFET开关电压的方法，并利用有源积分电路和自积分电路组成的混合积分器对传感器输出信号进行电压重构。文中对传感器电路参数进行了详细分析，结果表明：

1）有源积分电路的参数决定传感器的低频转折频率，自积分电路的参数决定传感器的灵敏度，这为电场耦合电压传感器性能指标的设计提供了理论指导。

2）电场耦合电压传感器量程为\-1000~+1000V，带宽下限约为5Hz，带宽上限为260MHz，灵敏度0.005，在约60Hz~80MHz范围内，灵敏度误差可控制在3%以内，传感器输入电容仅为0.73pF，与目前商用示波器电压探头相比具有更低的侵入性。

3）通过双脉冲实验，将电场耦合电压传感器的测量结果与Tek TPP0850示波器探头进行对比，验证了其测量的准确性，证明了电场耦合测量方案的可行性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)