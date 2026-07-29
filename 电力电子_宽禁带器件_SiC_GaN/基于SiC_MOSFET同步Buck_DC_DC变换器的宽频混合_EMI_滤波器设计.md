# 基于SiC MOSFET同步Buck DC-DC变换器的宽频混合 EMI 滤波器设计


> 原文地址: [https://mp.weixin.qq.com/s/pzJniXV\_mQBNB\_Y1yoEi0g](https://mp.weixin.qq.com/s/pzJniXV_mQBNB_Y1yoEi0g)

**文章来源：**电工技术学报

**作者：**徐浩东 1 罗嗣勇 2 毕闯 2 孙渭薇 3 赵海英 4 刘娇健 1

（1\. 国网陕西省电力有限公司电力科学研究院2\. 电子科技大学航空航天学院/飞行器集群智能感知与协同控制四川省重点实验室3\. 国网陕西省电力有限公司营销服务中心4\. 国网西安市南供电公司）

**摘要**：由于SiC MOSFET 在高速开关电源中的广泛应用，导致严重的电磁干扰（EMI）问题，因此EMI 滤波器的设计成为研究热点。为了满足电磁兼容（EMC）标准，无源 EMI 滤波器可以有效地降低 DC-DC 变换器产生的电磁干扰，但是无源磁性器件的体积较大，不利于提高 DC-DC变换器的功率密度。该文分析 DC-DC 变换器的电磁干扰源和噪声源阻抗特性，建立无源和有源EMI 滤波器的理论模型，提出宽频混合 EMI 滤波器的设计方法。最后，通过实验验证宽频混合EMI 滤波器对 DC-DC 变换器 EMI 的抑制效果。

关键词：SiC MOSFET 电磁干扰（EMI）噪声源阻抗混合 EMI 滤波器  

**0引言**

宽禁带半导体器件碳化硅场效应晶体管（Silicon Carbide Metal-Oxide-Semiconductor Field-EffectTransistor, SiC MOSFET）在导通和关断时，由于其较高的 du/dt 和 di/dt，会产生严重的电磁干扰（Electromagnetic Interference, EMI）噪声。随着 SiC MOSFET的广泛应用，功率变换器，如 Buck DC-DC 变换器，会产生传导和辐射 EMI，较高的 EMI 可能导致保护电路的运行故障，以及系统 EMI 超标\[1\]。为了使待测电力电子设备满足相应的电磁兼容（ Electromagnetic Compatibility, EMC）标准，通常需要在主回路中添加 EMI 滤波器来抑制系统的电磁干扰\[2-3\]。滤波作为解决 EMI 问题的主要措施之一，需要将滤波器放置在对外干扰严重或者非常敏感的电子设备的输入输出端，使EMI 被衰减，从而提高系统的EMC 性能\[4\]。EMI 滤波器主要有无源EMI滤波器（Passive EMI Filter, PEF）和有源 EMI 滤波器（ActiveEMI Filter, AEF）\[5-8\]两种。PEF 主要使用电感和电容来衰减 EMI，而AEF 主要使用晶体管和运算放大器（Operational Amplifier, OPAMP）将补偿电压或电流注入电路来衰减EMI\[9\]。

PEF 已经成熟应用，并且早已实现商业化，由于电力电子系统逐渐向高功率密度发展，因此针对系统功率密度的EMI 滤波器设计方法是目前的研究热点。文献\[10-11\]在 LCL 型滤波器的基础上，分别研究了PWM 整流控制策略和自适应共模3次谐波抑制方法。文献\[12\]分别针对共模（CommonMode, CM）和差模（Differential-Mode, DM）无源EMI 滤波器分析并提出了一种对称型EMI 滤波器集成设计方案。AEF 是提高系统功率密度的一种非常有效的方法，AEF可以分为模拟 AEF 和数字AEF两种类型。文献\[9\]基于电机驱动系统分析了CM 噪声传播路径，提出在共模接地点嵌入模拟 AEF抑制CM 噪声，极大地减小CM 滤波组件的体积。文献\[13\]建立了DM 模拟 AEF，针对建立的AC-DC 功率变换器系统模型，计算了DM 有源滤波器的插入损耗和环路增益。文献\[14\]在复数滤波器结构完全复数化的三相锁相环技术基础上构建了数字AEF 从而实现完全消除电网谐波对系统输出的影响。文献\[15\]基于稳定性、频偏性、幅值增益以及正交特性四个角度为自适应数字 AEF 提供了理论指导依据。  

AEF 可以有效地抑制低频 EMI，而PEF 可以有效抑制高频EMI，为了进一步提高系统的功率密度并结合两种EMI 滤波器的优点，混合EMI 滤波器（Hybrid EMI Filter, HEF）设计成为了当前的研究热点。文献\[16-18\]基于模拟AEF 拓扑，在不增加PEF 体积的情况下，等效增加了PEF 的电感电容值，取得了良好的EMI 抑制效果。文献\[16-17\]设计了一种AEF，通过注入反馈电流来等效增加CM 电容值，从而抑制系统的共模电磁干扰。文献\[18\]提出了一个三绕组的共模电感，基于运算放大器在第三个绕组上搭建了负阻抗网络来增加共模电感值，因此在不增加共模电感体积的情况下增大了共模电感值，通过等效电感值，不需要增大电感体积，就可以更好地抑制系统的 EMI。  

由于高功率密度的需求，在设计阶段就要考虑量化EMI 滤波器电子元件的尺寸和质量，因此需要针对EMI 滤波器进行规范化设计。文献\[19-22\]针对基于插入损耗（Insertion Loss, IL）的PEF 进行了设计并验证。PEF 设计需要掌握功率变换器的噪声源特性，基于线性阻抗稳定网络（Line Impedance Stabilization Network, LISN）的测试平台对插入损耗进行限定以达到 EMC 标准。为了使 EMI 滤波器达到预期的插入损耗，文献\[23\]提出了基于插入无源二端口网络的噪声源阻抗提取方法。文献\[24\]针对 AC-DC 功率变换器研究了模拟 AEF 的设计过程，对电压采样电流补偿（ Voltage-Sensing CurrentCompensating, VSCC）拓扑模拟有源 EMI 滤波器进行建模和分析，找到了与插入损耗有关的函数关系，最后提出了VCCS 一般设计准则。文献\[25\]针对由于小型体积的 PEF 的低频段衰减能力较低以及高频增益限制情况下 AEF 高频段衰减能力有限的问题，利用电机驱动系统设计了一种基于 LCL-LC PEF 和模拟 AEF 集成的混合 EMI 滤波器，改进了混合 EMI滤波器的设计方法。文献\[26\]采用了一种电流采样电流补偿（Current-Sensing Current-Compensating,CSCC）模式模拟AEF 电路，同时增加高谐振频率的小型 PEF 以抑制高频段从而得到了良好的 CMEMI 衰减。  

在上述的文献研究中，由于PEF 的体积限制和模拟AEF 的高频环路增益限制，集成无源和有源的EMI 滤波器是抑制EMI 的可行解决方案，但已有参考文献中基于系统的混合噪声进行EMI 滤波器设计，没有针对性考虑系统DM 和CM 噪声源特性。本文首先研究了同步Buck DC-DC 变换器的DM 和CM 噪声源特性，然后基于噪声源阻抗模型提出了一种混合EMI 滤波器设计方法，以规范化设计宽频混合有源EMI 滤波器。

**1  同步Buck DC\-DC 变换器的电磁干扰分析**

首先，分析同步Buck DC-DC 变换器的噪声源及其阻抗特性，研究同步Buck DC-DC 变换器电磁干扰的产生特性；然后，基于同步Buck DC-DC 变换器的电磁干扰分析，规范化设计相应的EMI 滤波器或者优化设计现有的EMI 滤波器。

**1.1 同步Buck DC\-DC 变换器的噪声源阻抗分析**

由于SiC MOSFET 在导通和关断时产生较高的du/dt 和 di/dt，与变换器本身存在的寄生电感和寄生电容相互作用，从而在同步Buck DC-DC 变换器中产生了严重的电磁干扰。通过对同步Buck DC-DC变换器中噪声的路径进行分析和测量，得到同步Buck DC-DC 变换器的噪声源阻抗，可以分为CM噪声源阻抗和DM 噪声源阻抗。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_000_41bfc61e8026.png)

同步Buck DC-DC 转换器的等效电路如图1 所示。CM 噪声通过寄生电容Cqg 和寄生电感Lqg 从同步Buck DC-DC 变换器半桥中点转移到地面，考虑到散热器和地之间的不完全连接，因此引入寄生电感 Lqg 的影响。同时分别考虑母线中L 线和N 线对地的寄生电容Cb1 和Cb2 的影响，以及印制电路板（Printed Circuit Board, PCB）布局寄生参数Lpl、Lpn、Rpl 和Rpn，可以得到同步Buck DC-DC 转换器中CM阻抗网络的等效电路和CM 阻抗特性曲线，如图2所示。VDC 为直流电压源，L1 和L2 分别为L 线和N线的直流隔离电感，Q1 和Q2 分别为同步Buck 控制管和续流管，Lout、Cout、Rout 分别为输出电感、输出电容和输出负载。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_001_79344c981f2f.png)

同理，DM 阻抗网络的等效电路和DM 阻抗特性曲线如图3 所示。由于直流母线支撑电容的低阻抗特性，变换器的差模噪声源阻抗ZDM1 可以被忽略，因此直流母线支撑电容Cin 决定了变换器的DM阻抗特性，ESR、ESL 分别为直流母线支撑电容Cin的寄生电阻和寄生电感。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_002_3f17a3f8dfc0.png)

**1.2  同步Buck DC\-DC变换器的CM/DM噪声源分析**

Buck DC-DC 变换器传导EMI 的实验测试平台如图4 所示，由Buck DC-DC 变换器、EMI 滤波器、线路阻抗稳定网络（Line Impedance Stabilization Network, LISN）、直流电压源和电阻负载组成。基于EMI 测试标准国际无线电干扰特别委员会25（International Special Committee on Radio Interference 25,CISPR 25），可以分别测量DC-DC 变换器的DM 和CM 电磁干扰噪声。

Buck DC-DC 变换器的两个输入端口分别接L线和N 线，测量设备LISN 被放置在直流电源和EMI滤波器之前。被测对象的传导电磁干扰由LISN测量，分别可以得到L线和N线上对地的电压Vlisn+和Vlisn−，然后经过差值和均值运算，分别得到变换器的CM 电压VCM 和DM 电压VDM。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_003_30cbacefecc3.png)

基于实验测量结果，通过式（1）和式（2）对CM 和DM 电磁干扰噪声进行分离提取，得到同步Buck DC-DC 转换器中CM 和DM EMI 的频域波形（150 kHz～30 MHz），如图5 所示。同步Buck DC-DC 转换器的原始电磁干扰噪声，在150～200 kHz频段DM 噪声会对EMI 滤波器的设计产生重要影响。为了有效地设计混合EMI 滤波器，需要考虑低频段DM 噪声的抑制，在1～10 MHz 频段CM 噪声幅值高于DM 噪声幅值，可以考虑通过有源滤波器进行抑制，在高频段10～30 MHz，考虑设计合理的无源滤波器参数进行电磁干扰的抑制。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_004_8bb72bdfd577.png)

**2  混合EMI 滤波器设计**

为了设计一个适合开关电源的混合EMI 滤波器，基于文献\[1-2\]中EMI 滤波器设计过程，本文提出了一个系统的EMI 设计流程，所提出的混合EMI滤波器设计流程如图6 所示。EMI 滤波器的最重要的特性是衰减电磁干扰源的发射能力，其衰减率定义为插入损耗（Insertion Loss, IL）。为了让EMI 滤波器获得最大插入损耗，在计算滤波器IL 时需要考虑滤波器输入输出端的阻抗参数，在选择EMI 滤波器的拓扑结构时需考虑噪声源和负载阻抗，包括LISN 的CM-DM 回路阻抗。在确定所需的插入损耗ILReq 后，可以得到EMI 滤波器组件的参数值。因此，必须利用LISN 对同步Buck DC-DC 变换器的原始噪声进行测量，即没有加入EMI 滤波器情况下的CM 和DM 电磁干扰噪声测量。根据CISPR 25 给定的峰值标准线，通过从测量的噪声Vmeasure 中减去指定的极限ALimit 可以计算出所需的插入损耗ILReq，并适当增加安全裕度值ILMargin，有

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_005_f3a7816707a5.png)

通过计算EMI 滤波器参数，使加入EMI 滤波器后同步Buck DC-DC 变换器符合EMC 标准要求。为了确定EMI 滤波器组件的参数值，需要将ILReq与所计算的插入损耗 ILcalc 进行比较，在符合EMC标准的要求情况下（包括CM 和DM 电磁干扰），计算EMI 滤波器组件参数，使ILReq 和ILcalc 的二次方均值在整个频率范围内最小。同时，整个过程的必要条件为ILcalc≥ILReq。

设计同步Buck DC-DC 变换器对应的EMI 滤波器之前，必须计算出各个滤波器组件的实际参数值，实际参数值可以用矢量/阻抗网络分析仪进行测量，然后给定方程再次计算插入损耗ILcalc。如果CM 和DM 的ILcalc 仍然大于ILReq，则可以从选定的组件参数设计EMI 滤波器。若不满足ILcalc≥ILReq，则需要调整所选组件参数值，重新计算ILcalc 是否满足条件。在满足条件后，搭建混合EMI 滤波器原型，插入LISN 和同步Buck DC-DC 变换器之间，通过测量插入EMI 滤波器前后的EMI 噪声来评估EMI 滤波器的抑制效果。由于所选定的EMI 滤波器组件存在高频寄生参数，往往并不具有理想的特性，比如组件内部元器件的高频寄生参数和组件间电磁耦合的影响，因此会导致测量的 EMI 噪声和期望的EMI噪声不一样。当EMI 噪声仍然大于CISPR 25 标准限值时，需要添加级联阻尼、替换寄生参数更少的组件以及解耦设计（若混合有源滤波器无法满足设计要求，需要设计解耦电路以隔离Buck 电路与外部电路之间的噪声干扰），进而需要对整体布局或者组件进行优化设计，并重新计算ILcalc 直至满足所需EMI 抑制要求。

**2.1 无源 EMI 滤波器设计**

无源EMI 滤波器采用CL 结构和π 型结构来分别衰减CM 和DM 信号，如图7a 所示。无源EMI滤波器的CM 和DM 等效电路，如图7b 和图7c 所示。无源CM 滤波器由两个并联的Y 型电容器Cy和一个共模扼流圈Lc 组成（见图 7b）。同理，无源DM 滤波器由X 电容器Cx、共模扼流圈漏感Lc\_lk和两个Y 型电容器串联组成（见图 7c）。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_006_3608ec7ba8ad.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_007_0e5359eb45b8.png)

由式（4）可计算无源EMI 滤波器插入损耗ILcalc，VZ′\_LISN 为未插入滤波器前ZLISN 两端的电压，ZLISN 为LISN 两端的阻抗，VZ\_LISN 为插入滤波器后ZLISN 两端的电压。根据图7 中CM 和DM 滤波器的拓扑，可分别计算得到无源EMI 滤波器的CM 插入损耗ILcalc\_CM 和DM 插入损耗ILcalc\_DM。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_008_ed46338fd51d.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_009_a3dc47e47822.png)

式中，ZLISN\_CM、ZLISN\_DM 分别为 LISN 的共模阻抗、LISN 的差模阻抗；ZL\_c、ZL\_c\_lk 分别为共模扼流圈Lc 阻抗、共模扼流圈漏感 Lc\_lk 阻抗；ZC\_y、ZC\_x 分别为 Y 型电容器 Cy阻抗、X 型电容器 Cx阻抗；ZS\_CM、ZS\_DM 分别为噪声源共模阻抗以及噪声源差模阻抗。设定无源 EMI 滤波器各个组件的参数值，通过设计流程得到满足 EMC 标准的无源 EMI 滤波器，但由于单一的无源 EMI 滤波器通常体积较大，为了提高开关电源的功率密度，本文在基于无源 EMI 滤波器的基础上，加入模拟有源 EMI 滤波器设计，从而在宽频范围内增加系统的 EMI 抑制效果。

**2.2 模拟有源EMI 滤波器设计**

本文采用电流采样电流补偿 CSCC 模式模拟有源滤波器电路（基于式（11）和 Buck DC-DC 变换器中低频段 ZS\_CM≫ZLISN\_CM，抑制同步 Buck DC-DC变换器中共模回路的共模 EMI 噪声信号，其等效电路拓扑如图8 所示。图8a 展示了没有插入模拟有源滤波器的同步Buck DC-DC 变换器、LISN 和直流源的测试电路中共模回路等效拓扑，图中，iS\_CM 为同步 Buck DC-DC变换器中共模噪声的等效电流源，因此同步 Buck DC-DC 变换器共模回路中 LISN 两端的电压可以表示为

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_010_7e219deccf8f.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_011_7fcf1c964d70.png)

在LISN 和同步 Buck DC-DC 变换器之间插入CSCC 模式模拟有源滤波器电路后，其共模回路等效拓扑，如图8b 所示。共模回路中LISN 两端的电压可以表示为

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_012_4291fd32024f.png)

主回路电流 iL 经过共模电感耦合感应电流，感应电流输入至运算放大器两端反向 G 倍放大得到注入电流 iCO。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_013_42bf09a13f44.png)

对图 8b 整个拓扑利用电压电流关系可得

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_014_c2d2d86a3ff7.png)

联立式（7）～式（10）可得模拟有源EMI 滤波器插入损耗ILcalc\_CM 为

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_015_3ea62871a97d.png)

模拟有源 EMI 滤波器与无源EMI 滤波器类似，插入损耗与测试平台 LISN 阻抗和噪声源阻抗有关。当 Z Z S\_CM LISN\_CM≫时，模拟有源 EMI 滤波器插入损耗 ILcalc 满足最大插入损耗的条件，且 ZLISN\_CM ≈25 Ω，约为 28 dBΩ，由图 2 可知，在中低频情况下（ZS\_CM＞ ≈ 250 48 dB Ω Ω ）容易满足ZS\_CM ≫ZLISN\_CM 。

**2.3 混合EMI 滤波器设计**

由于同步 Buck DC-DC 变换器的共模阻抗ZS\_CM在高频阶段通常会产生 RLC 谐振点（见图 2），阻抗不能总是满足 Z Z S\_CM LISN\_CM≫，因此为了减少高频信号对有源 EMI 滤波器的影响，基于模拟有源EMI 滤波器的拓扑结构，将无源 EMI 滤波器插入在模拟有源 EMI 滤波器与噪声源之间，从而得到混合模拟有源和无源 EMI 滤波器，如图 9 所示。插入混合 EMI 滤波器后，在电流注入节点可得

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_016_d16e0a0aa37d.png)

式中，iL\_c 为共模扼流圈 Lc 电流；VL\_c 为共模扼流圈两端电压。联立式（7）～式（9）和式（12）～式（14）可得，混合 EMI 滤波器插入损耗 ILcalc\_CM 为

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_017_cf7c4af178d5.png)

基于式（6）和式（15），将混合 EMI 滤波器插入损耗 ILcalc 代入图 6 设计流程，完成滤波组件参数计算，最终实现混合 EMI 滤波器的设计，所计算得到的混合EMI 滤波器组件的参数值见表 1。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_018_7573ed91c92e.png)

将式（1）、式（2）所得到的结果，以及CISPR25 准峰值代入式（3），可得到 ILReq\_CM 和 ILReq\_DM所需 CM 和 DM 插入损耗，如图 10 所示。在无源EMI 滤波器设计部分，通过式（5）、式（6）代入表 1 参数值和噪声源阻抗（见图 2 和图 3），可计算得到 ILcalc\_CM 和 ILcalc\_DM，由于参数值选择以及电路谐振的影响，计算得到的无源 EMI 滤波器的共模插入损耗 ILcalc\_DM 并不满足 ILcalc≥ILReq 的条件，因此本文加入模拟有源 EMI 滤波器部分增加共模插入损耗。在增益为 8 倍的情况下，通过式（15）计算得到混合 EMI 滤波器的宽频共模插入损耗ILcalc\_hyb\_CM 均满足 ILcalc≥ILReq。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_019_4f50636afdd9.png)

**3 实验验证**

为了验证第2 节中理论计算的准确性，在本节中进行基于同步Buck DC-DC 变换器的滤波器实验，如图 11 所示。在实验中，控制管 Q1 和同步管Q2均采用 CREE 公司的 SiC MOSFET C2M1000170D，由现场可编程逻辑门阵列（Field Programmable Gate Array, FPGA）产生驱动信号，运算放大器为德州仪器 LM7171，直流源电压设置为 400 V，水泥负载为20 Ω。双管 SiC MOSFET 的开关频率为交替互补的50 kHz，死区时间为0.05 μs。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_020_aefaac9b4d7e.png)

基于表1 中混合EMI 滤波器组件的参数，选取对应的元器件，搭建实验平台，分别通过LISN 测量同步 Buck DC-DC 变换器的原始 EMI 噪声和加入混合EMI 滤波器后的 EMI 噪声效果，对比如图 12所示。通过实验结果可知，加入混合EMI 滤波器后EMI 噪声抑制效果较好，整个频段内平均抑制近35 dB。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_021_f3b2951e4869.png)

在所提的混合滤波器设计方法下，本文研究了不同输入电压情况下滤波前后的系统效率对比，如图13 所示。由于增加了混合滤波器部分，会使得系统的效率有所下降，效率平均下降 1.24%。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_022_df60df8fee67.png)

**4 结论**

本文提出了一种基于同步 Buck DC-DC 变换器的宽频混合 EMI 滤波器设计方法。为了一个有效的EMI 滤波器，在设计过程中，除了需要了解同步Buck DC-DC 变换器 CM 和 DM 噪声源的电磁干扰特性，还需要考虑同步 Buck DC-DC 变换器的CM和 DM 噪声源阻抗以及负载阻抗。

通过计算 EMI 滤波器的插入损耗，得到EMI滤波器的设计参数，但由于较小体积的无源EMI 滤波器组件不能满足插入损耗的要求，这将使得设计的EMI 滤波器不能满足EMC 标准的要求。为了增大 EMI 滤波器的插入损耗而不增加无源EMI 滤波器体积，给出了混合有源和无源 EMI 滤波器的设计流程，以满足 EMI 滤波器插入损耗的需求和EMC标准。最后，基于同步Buck DC-DC 变换器实验平台，制作了混合 EMI 滤波器的实验电路，验证了宽频混合EMI 滤波器的电磁干扰抑制效果。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_023_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_024_3ade3c3d8599.jpg)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET同步Buck_DC_DC变换器的宽频混合_EMI_滤波器设计_images\img_025_84aa944feb13.jpg)