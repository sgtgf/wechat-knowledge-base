# 应用于中低压领域的高串扰抑制SiC MOSFET 驱动电路研究与设计


> 原文地址: [https://mp.weixin.qq.com/s/rMfqqg6CBGcRYB3OzCDzoQ](https://mp.weixin.qq.com/s/rMfqqg6CBGcRYB3OzCDzoQ)

文章来源：华南理工大学

作 者：陈康平（硕士学位论文）

摘 要：随着新能源发电、新能源汽车以及电力电子产品的快速发展，对功率器件的要求日益提高，表现为功率器件需要工作在更高频率更高功率密度场合以及更高的可靠性要求。传统的Si基功率器件在应用中受到限制，SiC MOSFET由于其优异的材料特性，如禁带宽度大、击穿场强高、散热性能好，能够更好地工作在高频及高功率密度条件下，已经在一些应用场合逐步取代传统Si基功率器件。

快的开关速度以及高的开关频率，在SiC MOSFET应用中带来严重的串扰问题。论文对串扰问题产生机理及其抑制方法进行了理论研究与分析，对比了不同串扰抑制方法的优缺点，提出一种多电平SiC MOSFET驱动策略，并基于此驱动策略，设计了一款具有高串扰抑制能力的SiC MOSFET驱动芯片。

所设计的高串扰抑制SiC MOSFET驱动芯片，集成了输入逻辑电路、电源轨产生电路、电平移位电路、驱动输出级电路、S3control电路、电容充电提速电路、退保和检测过流保护电路、过温保护电路、欠压保护电路、电流偏置电路。在设计中，引入辅助支路，控制SiC MOSFET的源极电位，实现多电平驱动功能，该电路结构简单，控制逻辑简单，不需要外部提供负压且输出负压可调；采用有源密勒钳位技术，进一步提高驱动电路串扰抑制能力，并且该模块不影响SiC MOSFET的导通过程；采用电源轨技术，可以在设计中尽量使用低压器件，节省芯片面积，设计的电源轨产生电路采用互补超级源跟随器，带负载能力强；配备退饱和检测过流保护功能，退保和检测过流保护电路能够根据需要设置过流保护定值，具有300ns消隐时间：配备欠压保护功能，欠压保护电路动作阈值为12.8V，迟滞窗口0.9V；配备过温保护功能，过温保护电路动作阀值为150℃，迟滞窗口25℃。

本文设计的SiC MOSFET驱动芯片基于华润上华（CSMC）0.8umBCD高压工艺平台进行电路设计、电路仿真以及电路版图设计，仿真验证模型基于Wolfspeed的产品C3M0075120D，仿真结果表明，设计的SiC MOSFET驱动芯片面积为2967um×3180um，输出驱动电流为3.6A，抗串扰能力超过150V/nS，能够可靠驱动SiC MOSFET功率器件。

关键词：SiC MOSFET；多电平驱动；有源密勒钳位；串扰抑制

* * *

第一章 绪论

1.1 课题研究背景及意义

近年来，随着世界经济的快速发展，能源问题和环境问题日益凸显。为了实现绿色、健康的经济发展，碳中和上升为大多数国家的国家战略。在节能减排的战略背景下，新能源发电、新能源汽车等领域实现快速发展。2022年上半年，全球电动汽车销量增幅超过60%，累计435万。中国作为世界第一大电动汽车市场，2021年电动汽车销量增幅超过150%，销售总量约350万辆。IntemationalEnergyAgency（IEA）预计，到2030年，全球电动汽车年销售量将达到3000万辆，电动汽车保有量将达到1.45亿辆。在全球推行节能减排与能源转型的推动下，2030年全球电动汽车保有量可能增至2.5亿辆以上。

功率器件在新能源发电以及电动汽车应用中扮演着重要的角色，电动汽车的电机驱动、DC-DC变换、充电以及空调驱动等都需要用到功率器件，新能源发电的核心器件逆变器也需要用到功率器件。1957年美国通用电气公司研制出第一代大功率晶闸管，开启了功率半导体发展的大门。硅（Si）基功率半导体器件经历了六十多年的发展，目前拥有以金属氧化物半导体场效应管（Metal-Oxide-SemiconductorField-EffectTransistor，MOSFET）为代表的单极型器件，以二极管、电力晶闸管、可关断晶闸管等为代表的双极型器件以及以绝缘栅双极晶体管（InsulatedGateBipolarTransistor,IGBT）为代表的复合型功率器件。然而，随着新能源发电、新能源汽车等快速发展，对功率器件在更高工作频率和更高功率密度场合以及更高可靠性方面提出了更严苛的要求。以碳化硅（SiC)、氮化镓（GaN）为代表的第三代半导体器件，由于禁带宽度大、击穿场强高、导热性能好等材料特性，在新能源发电、电动汽车等领域被广泛应用。

目前，全球SiC产业格局呈美国、欧洲、日本三足鼎立，SiC相关的技术和市场被国外企业垄断，商用SiC MOSFET大厂包括CREE、Infineon、Rohm等。CREE公司于2011年发布其第一代SiC MOSFET，至2017年，CREE已发布其第三代沟槽型SiC NOSFET。2012年，Rohm公司实现全SiC功率模块量产，2015年，实现沟槽结构SiC MOSFET量产。国内在SiC技术相关也有布局，但相对国外落后。西安电子科技大学于2012年研制出850V SiC U型 MOSFET（UMOSFET）。2017年，南京电子器件研究所成功研制出1200V SiC 功率 MOSFET 器件,其击穿电压达1800V，比导通电阻8mΩ•2cm²。目前，三安集成已经能够实现碳化硅外延生长、芯片设计与制造、模块封装领域全产业链制造。

SiC MOSFET驱动电路作为外部逻辑控制信号与SiC MOSFET功率电路之间的接口，对于发挥SiC MOSFET器件的优越性能至关重要。快的开关速度以及高的开关频率，会在SiC MOSFET开启和关断的过程中产生的较大的dv/dt和di/dt，在SiC MOSFET自身寄生参数的影响下，会引起栅极严重的电流电压尖峰、振荡以及串扰问题，这些问题可能导致额外的开关损耗和SiC MOSFET在关断时的误开启，甚至导致器件击穿。为了充分发挥SiC MOSFET的器件优势，对SiC MOSFET驱动电路设计提出了新的要求和挑战。

1.2 SiC MOSFET驱动技术研究现状

近些年，商业界和学术界对SiCMOSFET驱动都进行了大量研究。目前，国际上主流的SiC MOSFET驱动厂商有Infineon、CREE、RoHM、OnSemi等，他们都研发了SiC MOSFET专用驱动芯片。Infineon研发的SiC MOSFET驱动产品1EDI3030AS，是一款1200V SiC MOSFET单通道高边栅极驱动器，采用无芯变压器隔离，共模瞬态抗扰度（CommonModeTransientImmunity，CMTI）高达150V/ns，同时具备短路保护、过流保护、电源监控功能。CREE公司旗下的Wolfspeed推出的产品CGD1200HB2P-BM3，是一款针对1200V SiC MOSFET的双通道驱动板，采用密勒钳位技术，共模瞬态抗扰度为100V/ns，具备过压保护、欠压保护、过流保护以及短路保护。上述SiC MOSFET驱动器功能完备，但都需要外部提供负压，对芯片供电要求较高。

学术界对SiC MOSFET驱动的研究主要集中在SiC MOSFET的电流电压过冲问题以及桥臂串扰问题。论文主要针对SiC MOSFET桥臂串扰问题进行研究，下面按照串扰机理分析与串扰抑制方法两个方面进行分析总结。

（一）串扰机理分析研究现状

2012年，美国田纳西大学CuiYutian、橡树岭国家实验室Chinthavali等人分析了SiC MOSFET的静态特性以及开关特性，通过实验证明讨论了SiC MOSFET并联运行时电流的不匹配。2017年，美国田纳西大学JiShiqi、ZhengSheng等人分析了第三代SiC MOSFET在稳态和开关瞬态期间的温度相关特性，提出一种SiC MOSFET行为模型及其参数提取方法来描述其静态特性和开关特性，最后基于该模型，讨论了串扰对SiC MOSFET开关速度的限制。2019年，库尔纳工程技术大学Sarkar、阿达玛斯大学Adhikary等人针对可变迁移率、沟道长度以及不同沟道状态，分析了不同工作状态下SiC MOSFET的I-V特性曲线，提出一种新颖的SiC MOSFET电流电压特性模型，与现有模型相比，提出的新模型在漏电流方面性能显著提升。2019年，意法半导体PulvirentiMario、SalvoLuciano等人考虑了印制电路板（PrintedCircuitBoard，PCB）、汇流条等器件封装元素，建立了半桥转换器拓扑中SiC MOSFET的导通瞬态分析模型，可以在更大工作范围内准确预测功率器件的性能。2021年，意法半导体PulvirentiMario、SalvoLuciano等人分析了开关瞬变期间，SiC MOSFET栅源电压变化趋势，提出更为准确的功率转换器中SiC MOSFET模型，通过对栅源电压的测量来提取与SiC MOSFET半桥转换器中的串扰现象有关的信息。最后基于1200V/70A的SiC MOSFET半桥变流器进行了仿真实验，证实了该方法的有效性。

国内学者针对串扰机理分析也有大量研究。2018年，山东大学电气工程学院JINGYang、GAOFeng等人分析了SiC MOSFET的开关过程，建立了SiC MOSFET在双脉冲测试（DoublePulseTest，DPT）电路中的等效模型。考虑SiC MOSFET体二极管的反向恢复特性，从理论上分析了SiC MOSFET驱动电路栅源电压建立的过程。基于仿真验证，得出SiC MOSFET的最大栅源电压发生在反向阻断恢复阶段，减小源极电感的尺寸可以在设计驱动电路时抑制串扰问题。2020年，浙江大学的陈滢、李成敏等人提出考虑公共电感的分段线性串扰电压模型，并基于该模型，提出一种抑制串扰电压的方法。所提出模型基于器件数据手册以及双脉冲实验中提取的参数，同时考虑了栅漏电容、共源电感和二极管反向恢复等非理想因素。2020年，北京交通大学电气工程学院LiHong、JiangYanfeng等人考虑了SiC MOSFET栅漏电容的非线性，提出一种准确判断SiCMOSFET串扰电压峰值的预测算法，对于更好地设计SiC MOSFET的驱动和保护电路具有重要意义。2021年，北京工业大学信息技术学院YuanDakang、ZhangYiming等人根据SiC MOSFET开关过程各阶段的关键参数对相应主变量的影响权重，提出一种桥臂配置SiC MOSFET详细分段线性分析模型。基于该模型，分析了不同关键参数对开关速率变化、功率环路衰减振荡和驱动环路串扰现象的影响机制和趋势，并在600V/20A SiC MOSFET的桥臂测试电路中进行双脉冲测量，验证模型的准确性。2021年，西安交通大学电气工程学院LiYang、ZhangYan等人提出一种改进的评估方法，对采用共源电感（TO-247-3）和开尔文源连接（TO-247-4）封装的SiC MOSFET进行了全面比较，讨论了共源电感对SiC MOSFET开关过程和串扰的影响，并通过数学模型分析和实验测试验证了所提出评估方法的优越性。2022年，南通大学电气工程学院GuoXiaoli、WuDian等人建立了SiC MOSFET半桥逆变器开关过程的数学模型，对各种寄生参数对串扰电压的影响进行了详细分析和建模。基于对串扰的分析，提出了一种新颖的串扰电压抑制电路，可以抑制栅漏电容及其他寄生参数引起的串扰问题。最后搭建双脉冲测试平台，验证了串扰抑制电路在不同电压、电流条件下的有效性。

目前，针对SiC MOSFET串扰机理研究，主要集中在以下三个方面。

（1）SiC MOSFET电流电压模型建立，尽可能建立准确的模型描述SiC MOSFET电流电压特性。

（2）SiC MOSFET开关过程建模分析，包括行为模型和数学模型，并讨论环境温度、封装等外界条件对SiC MOSFET开关特性的影响。

（3）桥式应用中SiC MOSFET栅源串扰电压分析与建模，研究分析不同寄生参数对SiC MOSFET栅源串扰电压的影响。

（二）串扰抑制方法研究现状

为了抑制SiC MOSFET的串扰电压，2016年，新加坡南洋理工大学ShanYin,K.J.Tseng等人通过在SiCMOSFET栅源之间并联大电容，减小SiC MOSFET栅源之间的寄生阻抗，实现对SiC MOSFET栅源之间串扰电压的抑制。2017年，韩国首尔大学KimJaesuk、ShinDongho等人提出一种抑制SiC MOSFET开关振铃的谐振阻尼电路，用于改善开关损耗和EMI之间的折中。基于1200V/180A SiC MOSFET模块进行实验验证，实验表明，所提出的无芯PCB谐振阻尼电路系统，与没有阻尼电路的系统相比，开关振铃的谐振分量减少了一半。2017年，美国田纳西大学ZheyuZhang、JefferyDix等人提出一种SiC MOSFET栅极驱动器，通过引入由两个辅助晶体管和两个二极管组成的栅极辅助电路，在不同的开关瞬变期间主动控制器件的栅极电压和栅极环路阻抗，实现对串扰的抑制。实验结果表明，与传统的栅极驱动器相比，所提出的栅极驱动器能够将串扰电压控制在器件正常工作范围。2022年，佛罗里达州立大学DongwooHan、SanghunKim等人提出了一种集成的多电平有源栅极驱动器，以灵活有效地解决SiC MOSFET应用中的EMI噪声问题。所提出的栅极驱动器通过实时控制驱动电压来控制导通开关的转换速率，多电平驱动电压由支路控制器根据系统变量生成，这些变量可以显著影响开关特性，例如直流母线电压、输出电流和设备温度。

国内学者对SiC MOSFET串扰问题也展开了大量研究。2018年，北京交通大学LiYan、AseaBrownBoveri（ABB）中国研究中心LiangMei等人提出了一种基于非开尔文封装和开尔文封装SiC MOSFET的低栅极关断阻抗驱动器来抑制串扰，经过验证，在1.1kW的降压转换器应用中，与传统驱动器相比，所提驱动器的转换器效率可提高0.6%。2018年香港城市大学智能能源转换及利用研究中心TangBlueHo-Tin、FanJohnWing-To等人提出一种由无源电平转换器和谐振回路构成的串扰抑制电路，无源电平转换器在SiC MOSFET关断时提供静态负栅源电压，谐振回路可以产生电压脉冲抵消串扰电压，使其降低到SiC MOSFET阈值电压以下，从而避免SiC MOSFET误导通。电路在基于SiC MOSFET的1kW桥逆变器上进行了实验，实验结果表明，采用串扰抑制电路后，逆变器的总损耗可降低16.43%。2018年西北工业大学自动化学院ZamanHaider、WuXiaohua等人提出一种负压关断SiC MOSFET栅极驱动电路，用于抑制串扰的产生，该驱动电路负压由驱动器自己生成，不需要外部提供，此外该驱动电路还带有RC缓冲器，用于抑制开关振铃。验证结果表明，在1MHz开关频率下，所提出的带有RC缓冲器的栅极驱动电路能够将串扰电压保持在栅极阀值电压以下。2019年，浙江大学DongZezheng、WuXinke等人通过采用添加屏蔽层、优化DBC布局、减小SiC MOSFET外部电阻等方法，对SiC MOSFET串扰进抑制，通过实验验证，在电压转换速率超过80V/ns的情况下，SiC MOSFET仍能正常工作。2021年嘉兴学院ZhuYaodong、HuangYongsheng等人提出一种新型的多电平SiC MOSFET栅极驱动器，该驱动器在SiC MOSFET的栅极和源极之间添加辅助MOSFET支路，通过控制辅助支路，在SiC MOSFET关断时产生负栅源电压和零栅源电压，分别对正栅源串扰电压和负栅源串扰电压进行抑制。实验表明，与传统的栅极驱动器相比，所提出的多电平栅极驱动器可以将正串扰电压降低至-2.2V，将负串扰电压降低至-4.4V。

针对SiC MOSFET在桥臂应用中的串扰电压抑制，目前主要有以下几类方法。

（1）通过在SiC MOSFET栅源之间并联大电容，减小SiC MOSFET栅源之间的寄生阻抗，实现对SiC MOSFET栅源之间串扰电压的抑制。这种方法的缺点是减慢了SiC MOSFET的开关速度，同时增加了开关损耗。

（2）通过优化PCB版图，减小寄生参数，来实现对串扰的抑制，但是受封装结构成本以及功率等因素限制，对串扰的抑制效果有限。

（3）通过采用缓冲电路和较大的栅极电阻，减缓SiC MOSFET的开关速度，来达到抑制串扰的目的，但是不能完全发挥SiC MOSFET的器件优势，同时也增加了开关损耗。

（4）采用负栅源电压关断SiC MOSFET，这类方法对SiC MOSFET正栅源串扰电压有一定抑制作用，不能抑制负栅源串扰电压，在负栅源串扰电压影响下，栅源之间负压加剧，可能导致SiCMOSFET负压击穿。

（5）采用多电平栅极驱动，在SiCMOSFET关断时分别采用负压和零压，能够有效抑制正负串扰电压，但控制逻辑复杂，需要提供额外的控制信号。

1.3 论文主要研究工作和结构安排

本课题来自于广东省重点领域研发计划项目“变频器节能器件SiC IPM开发”（项目编号：1920001001036)。论文在研究SiC MOSFET基本特性及其驱动技术的基础上，针对SiC MOSFET在桥式电路中易出现的串扰问题，提出一种多电平驱动策略抑制串扰问题。基于此驱动策略，设计一款高串扰抑制SiC MOSFET驱动芯片，可应用于汽车电子、家电以及新能源领域，芯片设计指标如表1-1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8Xm6OlQQRKlBq4QozjUgmMGkNgZmVQIlvTnC6hEyxIP7SgZfyh5rrUQ/640?wx_fmt=png)

芯片采用多电平驱动及密勒钳位技术，抑制SiC MOSFET桥臂串扰问题；采用电源轨技术，在设计中可以尽可能使用低压器件，节省芯片面积。基于CSMC 0.8μm BCD高压工艺平台，完成电路设计、版图设计以及后仿真。论文组织结构如下：

第一章绪论，介绍课题的研究背景及意义，分析SiC MOSFET在高功率密度高频率场合的应用与挑战，讨论SiC MOSFET驱动技术研究现状，阐述本文研究内容。

第二章SiC MOSFET特性研究及桥臂串扰分析，对比Si基器件与SiC器件之间不同，分析SiC MOSFET应用中的桥臂串扰问题，建立其等效电路图，讨论寄生参数对桥臂串扰问题的影响。

第三章SiC MOSFET驱动电路系统设计，分析现有的SiC MOSFET驱动技术以及各种驱动方法的原理，总结各种驱动技术的优缺点，阐述论文提出的高串扰抑制SiC MOSFET驱动电路系统框图及其工作原理。

第四章SiC MOSFET驱动电路设计与仿真分析，针对论文提出的高串扰抑制SiC MOSFET驱动电路进行电路模块研究与设计，包括电源轨电路、电平移位电路、上拉驱动电路、下拉驱动电路、防串通电路、过流保护电路、欠压保护电路、过温保护电路等，并且对论文提出的高串扰抑制SiC MOSFET驱动电路进行电路仿真验证和分析。

第五章版图设计结果分析，针对论文提出的高串扰抑制SiC MOSFET驱动电路进行版图设计，分析其仿真结果。

总结与展望，总结本文的研究工作，展望未来的研究方向。

1.4 本章小结

本章介绍了本文的研究背景及意义，分析了国内外SiC MOSFET驱动电路研究现状，阐述了本文的主要研究内容与组织架构。

* * *

第二章 SiC MOSFET特性研究及桥臂串扰分析

本章介绍SiC MOSFET基本特性，阐述SiC MOSFET桥式应用中桥臂串扰产生机理，讨论相关参数对桥臂串扰的影响。

2.1 SiC MOSFET器件特性

目前，市场上已经推出不同的SiC MOSFET功率器件产品，本文以Wolfspeed的产品C3M0075120D为例，对SiC MOSFET基本器件特性进行介绍。

2.1.1 SiC MOSFET栅极电荷

C3M0075120D栅极输入电容Ciss随漏源电压VDS的变化曲线如图2-1所示，栅源电压VGs与栅极电荷QG的关系如图2-2所示。可以看出，SiC MOSFET的栅源电压与栅极电荷正相关，在栅源电压VGs上升过程中存在密勒平台，与Si基MOSFET相似。在栅源电压VGs为零的时候，SiC MOSFET的栅极电荷并不等于零，意味着SiC MOSFET使用零栅源电压关断时，在外界干扰下易使其发生误导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8cUJUhvNOGR4J1RWqEiaibHmLFPZ8SUc8GeXLpYAXAcefricCXic3zib0CEQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8OzqPxWTLBTPLpusoLVgBMdvvdMafqiaBc9BMibGpqujYHaZlWqPqALDQ/640?wx_fmt=png)

2.1.2SiC MOSFET 栅极电阻

SiC MOSFET 栅极电阻包括栅极内阻以及栅极外接电阻。MOSFET的内部栅极电阻与晶体管的材料、晶体管的尺寸密切相关。晶体管尺寸越小，其内部栅极电阻越大。 同等耐压下，SiC MOSFET的尺寸约为Si基MOSFET尺寸的十分之一，因此其内部栅极电阻更大。小的晶体管尺寸意味着SiC MOSFET输入电容更小，因此SiC  MOSFET开启时，所需的栅极电荷也会更少，从而使得其开关速度更快。快的开关速度带来的电磁干扰对SiC MOSFET 驱动设计来说不可忽视，在驱动电路中增加外部栅极电阻可以减缓SiC MOSFET的开关速度，降低SiC MOSFET 开关瞬态期间产生的电磁干扰。图2-3 展示了C3M0075120D外部栅极电阻大小与开关损耗的关系，图2-4展示了外部栅极电阻大小与SiC MOSFET开关时间的关系，其中tr为上升时间，tf为下降时间，td(𝑜𝑛)为开启延迟时间，td(𝑜𝑓𝑓)为关断延迟时间。可以看出，外部栅极电阻大小与SiC MOSFET开关损耗以及开关延时密切相关，在设计SiC MOSFET驱动电路时， 应尽量减小驱动电路的输出阻抗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8MflLaicakqliagpxgibol7cdbYxU36ibHNhPw9LQbib43INhibYbhQuzzMEQ/640?wx_fmt=png)

2.1.3 SiC MOSFET开关特性

SiC MOSFET的开启瞬态过程如图2-5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o84IaPibNfy6GOP47xl7Ugkn8hDXELWzw6nrtqb01IcniawuwibVlt8wibag/640?wx_fmt=png)

阶段1\[t0-t1\]：t0时刻，SiC MOSFET栅极驱动信号变高，栅极充电电流IG对栅极输入电容CGs进行充电，栅源电压VGs开始抬升。在栅源电压VGs抬升至阀值电压Vth之前，漏源电流ID和漏源电压VDS维持初始值，因此该阶段也叫开启延时阶段。

阶段2\[t1-t2\]：SiC MOSFET的VGS大于阈值电压Vth，SiC MOSFET开启，漏极电流ID开始增加。在此阶段，栅极电流IG持续给栅极电容充电，栅源电压VGS继续上升，直至密勒平台，漏极电流ID上升至负载电流。由于栅极电压VGs较低，SiC MOSFET导通电阻较高，为了降低此阶段的热损耗和发热损坏，应减小t1到t2的时间差。

阶段3\[t2-t3\]：在t2时刻，栅源电压VGs达到密勒平台，栅极电流IG开始给密勒电容充电，VGs基本维持不变。达到密勒平台后，ID达到最大值，漏源电压VDS开始下降，密勒平台结束时，Vps降到最小值。

阶段4\[t3-t4\]：经过密勒平台后，VGS继续增加，直至VDD。在此阶段，SiC MOSFET导通电阻Ron下降到较小值，栅极电流IG完成对栅极输入电容充电，漏极电流ID和漏源电压VDS保持不变。

SiC MOSFET的关断瞬态如图2-6所示，关断过程为开启过程的逆过程，此处不再赘述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8N9VCibgmWLA8WC0vj7IpKCAxGtFDwmaYZlmYn8mWqkkHwjHsWweeOtg/640?wx_fmt=png)

减小SiC MOSFET的开关时间，有助于降低其开关损耗，因此要求SiC MOSFET驱动电路能够快速导通和关断SiC MOSFET。

2.2 SiC MOSFET桥臂串扰分析验证

由于SiC MOSFET开关状态快速切换，会引入较大的dv/dt和di/dt，在电路寄生参数的影响下，会在其互补SiC MOSFET栅极引起高频的尖峰和震荡。加之SiC MOSFET阀值电压较低，能承受的最大负压较小，即SiC MOSFET栅源电压安全区较小，较大的串扰电压会导致SiCMOSFET误导通，甚至负压击穿。

2.2.1 SiC MOSFET桥臂串扰分析

以SiC MOSFET半桥应用为例，分析SiC MOSFET串扰现象产生的机理及其影响。图2-7展示了SiC MOSFET半桥应用中串扰现象的产生及其对栅源电压的影响。其中，QL为低侧功率管，QH为高侧功率管，VGS\_H、VGs\_L分别为高侧和低侧功率管栅源电压，RGEx\_H、RGEx\_HL分别为高侧和低侧SiC MOSFET外接栅极电阻，RGIN-为SiCMOSFET栅极内阻，RDriver\_H、RDriver\_L为高侧和低侧SiC MOSFET驱动电路内阻，Ls1\_H、Ls1\_L为高侧和低侧SiC MOSFET的栅极寄生电感，Ls2\_H、Ls2\_L为高侧和低侧SiC MOSFET的源极寄生电感，CGD\_H、CGD\_L为高侧和低侧SiC MOSFET的栅漏寄生电容，CGS\_H、CGS\_L为高侧和低侧SiC MOSFET的栅源寄生电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8wVaEy7QIXBQLMaXxBXdSibmlL7CKKttT7nhRzicTSVXdkmtqxzPMmRCg/640?wx_fmt=png)

图2-7（a）为QL关断状态下，QH开启时的等效电路，在QH导通之前，QL漏源电压接近于零。QH导通后，QL漏源电压升至VDD，由于SiC MOSFET 开关速度快，QL漏源电压快速变化产生的密勒电流通过栅漏寄生电容C𝐺𝐷\_L、SiC MOSFET 栅极电阻流向地，从而在低侧功率管栅极产生一个正的串扰电压。QL关断状态下，QH关断时的等效电路如图2-7（b）所示，在QH关断之前，QL漏源电压接近VDD，QH关断后，QL漏源电压降零，此时将在低侧功率管栅极产生一个负的串扰电压。图2-8 为高侧功率管导通和关断时对应的电压波形图，V𝐼𝑁\_H和V𝐼𝑁\_L分别为QH和QL的栅极控制信号。可以看出，在高侧功率管导通时，如果产生较大的正串扰电压，可能致使低侧功率管误导通，造成桥臂直通。在高侧功率管关断时，如果产生较大的负串扰电压，可能致使低侧功率管负压击穿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8NWVdA7vbx9dl817vpdpDD6nr8cDnOLdFiaEk3DzVAqcQbG0JAcnZjFg/640?wx_fmt=png)

串扰现象已经成为影响 SiC MOSFET 变换器可靠工作的重要因素，为了分析 相关寄生参数对串扰电压的影响，本文建立了半桥电路中低侧功率管的等效电路，如图2-9 所示。其中V𝐸𝐸为低侧管关断时的电压，RG为低侧管栅极等效电阻，其数值为低侧管驱动电路内阻R𝐷𝑟𝑖𝑣𝑒𝑟\_L、低侧管栅极外接电阻R𝐺𝐸𝑋\_L、以及低侧功率管栅极内阻R𝐺𝐼𝑁𝑇之和，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o84f19picaNBzmfLvuTngza1jTb6tVOQYSb3bwvxn4FiczyyErraQglXzA/640?wx_fmt=png)

由式（2-5）和式（2-6）可以看出，串扰电压大小与功率管栅源关断电压VEE，栅极电阻Rg，栅极电感Ls1，栅极输入电容Ciss以及漏源电压变化率息息相关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8a7ewh43BfyMdK3Bh0SrbpjhIfZdl7R7Lu9MjEf235LZVOlBuz89F8Q/640?wx_fmt=png)

2.2.2 SiC MOSFET桥臂串扰验证

由上一节可知，栅源关断电压VEE，栅极电阻Rg，栅极电感Ls，栅源电容CGs以及漏源电压变化率均会对串扰电压产生影响。为了分析不同寄生参数对串扰电压的影响，搭建双脉冲测试电路进行验证，电路如图2-10所示。SiC MOSFET模型采用Wolfspeed公司1200V N沟道SiC MOSFET，型号为C3M0075120D，其器件参数如表2-1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8cicDia63fjKpm2ffoSHkPt8ibVq6A2utjsoJOGnGG4AoWtiar1aJspiadOw/640?wx_fmt=png)

图2-11（a）为零压关断情况下，不同外接栅极电阻对正串扰电压的影响。可以看到，正串扰电压与栅极电阻呈正相关关系，栅极电阻越大，正串扰电压越大，外接栅极电阻为2Ω时，串扰电压大小超过器件的阈值电压，将会导致SiC MOSFET误导通。外接栅极电阻对负串扰电压的影响如图2-11（b）所示，栅极电阻越大，负压绝对值越大。图2-12展示了负压关断时，不同外接栅极电阻对正负串扰电压的影响。可以看出，随着栅极电阻值变大，串扰电压值变大，相比零压关断，负压关断时串扰电压整体下移，相同工作条件下，负压关断可以提高SiC MOSFET抗串扰能力。但也要注意到，采用负压关断时，负串扰电压会加剧SiC MOSFET栅源负压，可能导致SiC MOSFET负压击穿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8XZCmNbwX5LEHMnGwj6QPyXNtQiclhR2cUyJQU9ctKXSpmSCtLpT0ZCA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8cycTTS01VxkDMF8rMicLMVIefynNFicJK8Kk6Y84Tyj0amiaNgZ1Csh2A/640?wx_fmt=png)

为了验证栅源电容对SiC MOSFET串扰电压的影响，在SiC MOSFET栅源之间并联不同大小的电容进行仿真验证，仿真结果如图2-13所示。可以看出，串扰电压绝对值大小与栅源电容呈负相关，随着栅源电容变大，串扰电压值变小。从仿真结果还可以看出，加大栅源电容可以减小串扰的影响，同时也减缓了SiC MOSFET的开关过程。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8zBSjyLicFPdouhTE804eUrahImnjpwCItqJdh0Gh4WwbTBu9Gyibs7Ew/640?wx_fmt=png)

2.3 本章小结

本章主要阐述了SiC MOSFET基本特性，分析了SiC MOSFET栅极电荷和栅源电压的关系，以及SiC MOSFET栅极电阻对SiC MOSFET开关特性的影响，讨论了SiC MOSFET开关特性以及SiC MOSFET桥式应用中串扰问题的产生及其影响因素，验证了不同寄生参数对串扰电压的影响。

* * *

第三章SiCMOSFET驱动电路系统设计

本章介绍SiC MOSFET驱动电路设计基本要求，阐述SiC MOSFET驱动电路相关驱动技术，对论文提出的高串扰抑制SiC MOSFET驱动电路进行系统设计，介绍其工作原理。

3.1 SiC MOSFET驱动电路设计要求

SiC MOSFET驱动电路作为外部逻辑控制信号与SiC MOSFET功率电路之间的接口，对于发挥SiC MOSFET器件的优越性能至关重要。SiC MOSFET驱动电路要求如下:

（1）高电压驱动：在相同的漏源电压下，SiC MOSFET栅源电压越大，输出电流越大，跨导越大，导通电阻越小。采用高电压驱动可以减小SiC MOSFET导通电阻，减小电路的开关损耗。

（2）大电流驱动：SiC MOSFET导通和关闭时，本质是对SiC MOSFET栅极电容进行充电和放电。采用大电流驱动，可以减小SiC MOSFET导通和关断时的密勒平台时长，加速SiC MOSFET开关过程，减小开关损耗，提高工作频率。

（3）负压关断：由2.1.1分析可知，当SiC MOSFET栅源电压为零时，其栅极电荷不为零，采用零压关断存在SiC MOSFET误开启的风险，采用负压关断可以一定程度避免SiC MOSFET误开启。

（4）保护功能：包括欠压保护、过温保护、过流保护等，为SiC MOSFET可靠运行提供保障。

3.2 SiC MOSFET驱动技术概述

本节将对有源密勒钳位技术、负压驱动技术以及多电平驱动技术进行分析。

3.2.1 有源密勒钳位技术

在桥式电路中，由于SiC MOSFET较快的开关速度，会引入较大的dv/dt和di/dt，在电路寄生参数的影响下，会在其互补SiC MOSFET栅极引起高频的尖峰和震荡。有源密勒钳位技术即在SiC MOSFET栅极和源极之间增加辅助支路，当栅源电压达到一定条件时，辅助支路将栅极和源极短接，对由dv/dt引起的密勒电流进行分流，防止密勒电流流经外部栅极电阻以及驱动电路内阻，从而减小电磁干扰对电路的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8WIOnMflKEnYwNpMMzricEfoUmpiarHC9YudAMsENfRajicvbKzGXEl8BA/640?wx_fmt=png)

文献\[46\]提出一种有源密勒钳位方法，与传统有源密勒钳位方法相比，文章提出的有源密勒钳位方法不仅能够旁路栅极驱动器的栅极电阻，而且能够旁路到栅极驱动器的源极阻抗，驱动电路结构图如图3-1所示。其中晶体管Q、电容C以及5V附加电源构成有源密勒钳位电路，当晶体管Q开启时，该有源密勒钳位电路为密勒电流提供旁路，根据可能出现的密勒电流大小，可以确定电容C的大小。

3.2.2 负压驱动技术

负压关断技术即采用负的栅源电压来关断SiC MOSFET，负压的来源包括外部提供、负压电荷泵提供以及无源器件生成。

文献\[47\]提出一种集成负压电荷泵的SiC MOSFET驱动方法，驱动电路采用的负压电荷泵结构框图如图3-2所示，电荷泵输出的负压值能够根据外部信号进行设置，采用闭环线性环路，能够实现负输出电压高可靠性。电路中比较器和运放均为5V电源供电，VREF1、VREF2、VREF3由外部负压设置信号产生，其产生电路图如图3-3所示。电荷泵工作时，VREFI与电荷泵输出反馈电压比较，调节电荷泵输出。VREF2稳定电压VB，让VB与外部设置电压保持线性。VREF3与电荷泵输出反馈电压比较，决定环路闭环调节过程。SR锁存器真值表及其对应的电荷泵工作状态如表3-1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8O6mLakvbO2QYHUZn5j5BNtibbzapRfnTicZ0965FNITsXGuL5unLVmibQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8PFbWJiaHNNArwuticKvV9RiaVvvjqJvfHpPRYK6epBLVbAeXWSqwg5TlA/640?wx_fmt=png)

文献\[48\]提出一种新型的电阻-电容-二极管(RCD)电平移位器，用于产生SiCMOSFET关断时的负栅源电压。RCD电平移位器电路原理图如图3-4所示，由电容CN、电阻RN、电容Cp、电阻Rp以及二极管Dp构成，其中电容CN、电容Cp远远大于SiC MOSFET的栅源电容Cgs。电路工作时的等效电路图如图3-5所示，SiC MOSFET驱动电压Vg在VGG与0之间切换。驱动电压Vg为VGG时的等效电路如图3-5（a）所示，此时二极管Dp正向导通，电阻RN、Rp构成分压电路，加在SiC MOSFET栅源之间的电压为VcP，电压VcN、Vcp由式3-1、式3-2计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8R8ovbYBtqVcrMvPz4vLdbLQyH3PiaUE3ar0icLtmyCr0jheNSFuDVrGA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8tgIkwuIq0DVGqQZt5MEeTDUZb3HFhb6KkmPwGGhqfiaN4uh0dTvvwnA/640?wx_fmt=png)

驱动电压Vg为0时的等效电路如图3-5（b）所示，此时二极管Dp关断，由于电容CN较大，此时加在SiC MOSFET栅源之间的电压为-VCN。电平移位器的瞬态波形图如图3-6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8hFuljZkVNzicQvHzYrq6BcJoLywD6YhzNmDFWrticCwP9icuPQXBg6cuA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8ZvlShMfFqdmZIY6R9IO632IkLxKKMUcmDgBsLFiaW2OJUpnWWKfFZbg/640?wx_fmt=png)

文献\[49\]提出一种新型的负压关断SiC MOSFET栅极驱动电路，电路原理图如图3-7所示。该电路由四个电阻R1、R2、R3和Rg，两个电容C1和C2，一个二极管D和一个p-n-p晶体管Q组成。R1和R2串联构成分压器电路，调节R1和R2的比值可以产生各种负的栅源关断电压，无需使用额外的负电压源。电容C1应该足够大，以保持关断电压几乎恒定。电容C2与p-n-p晶体管Q串联，当负栅源电压尖峰发生时，提供一个小阻抗环路，电阻R3用于被动打开或关闭晶体管Q。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8s0rOsCD2MRrRTFmFed39uE2NPN1gRCmZMqs7yFgUGy0lbiaf5pdkCicg/640?wx_fmt=png)

上述SiC MOSFET栅极驱动电路在使用时需要对电路进行预充电，以保证电容C1、C2上的电压恒定。预充电过程主要有两个阶段，第一阶段为寄生电容Cgs充电，第二阶段为电容C2充电，预充电阶段等效电路图如图3-8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8G19whQ0eGicia3V5UCy3VsVxXYU9hwnkic4BFpXCtZMciar5fmLUfMY0rw/640?wx_fmt=png)

预充电结束，驱动电路即可进行正常工作。如图3-9所示，当下管关断，上管导通时，下管关断电压为C1\_L产生的负压，可以防止正串扰电压导致下管误开启。如图3-10所示，当下管关断，上管由导通到关断时，此时电流流经R3\_L，下管驱动电路晶体管Q开启，电容C2连接到SiC MOSFET栅源之间，提供一个低阻回路，可以减小负串扰电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8RiatLEXDgWwAH7pRfC9fRPjshwpfgwkmvOclYI7DVcicnXzaiahhxUL5g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8gEmyywJToN2dlHder9wRhOI4Zbbnh72WAdfsfMJib5X61FCXCIQqtPA/640?wx_fmt=png)

3.2.3 多电平驱动技术

采用负栅源电压关断SiC MOSFET，对正栅源串扰电压有一定抑制作用，不能抑制负栅源串扰电压。负压关断条件下，负栅源串扰电压会加剧SiC MOSFET栅源之间负压，可能导致SiC MOSFET负压击穿，因此出现了多电平驱动电路。多电平驱动技术即在正串扰电压出现时，采用负压关断SiC MOSFET；在负串扰电压出现时，采用零压关断SiC MOSFET，从而实现SiC MOSFET正负串扰电压有效抑制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8MOsoVQYp4uqjbcUs85fyz75ABbUVAjibVM9cq50lBicqxMic0NEeKdUsA/640?wx_fmt=png)

文献\[50\]提出一种SiC MOSFET多电平驱动电路，电路原理图如图3-11所示，Vdrive、S1、S2构成一个传统的SiC MOSFET栅极驱动器，电阻Rp、R1、晶体管S3、电容Cn以及二极管Dn构成多电平产生电路，电阻Rp远远大于R1。控制开关管S3的导通和关断，可以实现不同的栅源关断电压。S3的控制时序如图3-12所示，一个S3控制周期可以分为如下6个阶段。以下通过S3的控制时序，分析电路的工作原理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8RACTYJ9oVgmHJgdMBQ8ks2qLkibic6edCA2RekvkZ3SrPbCTxuH2YHQw/640?wx_fmt=png)

阶段1\[t0−t1\]：负串扰电压抑制。负串扰电压出现时，S3 保持导通状态，由于R1<Rp，Vn≈0，因此Vgs≈ 0V，即在负串扰电压出现之前，栅极\-源极之间施加零偏置电压。

阶段2\[t1−t4\]：Ql导通瞬态。在此期间，S3保持导通状态，S1导通，图3-13(a)为此阶段的等效电路图。

阶段3\[t4−t5\]：S3关断瞬态。在此期间，S3关闭，Ql保持导通状态，图3-13(b)为阶段3 的等效电路图。当S3 关闭时，Vn 将从零增加到稳压管稳定电压VZ，同时，Vp 和Vgs下降到Vdrive−VZ，Vn的上升时间取决于Rp和Cn的大小。

阶段4\[t5−t7\]：Ql关断瞬态。此阶段，S3保持关闭，Ql的关断电压等于\-Vn，该区间 的等效电路如图 3-13(c)所示。

阶段5\[t7−t9\]：正串扰电压抑制。在此期间，S3 保持关断状态，当出现正串扰电压时，负关断电压可以抵消正串扰电压，保证Vgs在SiC MOSFET 阈值电压以下。

阶段6\[t9−t11\]：S3导通瞬态。S3导通，Ql处于关断状态，R1远小于Rp，Vn迅速下降到零，Vn的下降时间取决于Cn和R1的值，图3-13(d)为此阶段的等效电路图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8pL8iblm2TkS36huPINfd6dUzI09AuzgOumWvdfofLnkMxG1DTpdbkqQ/640?wx_fmt=png)

3.3 SiC MOSFET驱动电路系统设计

上一小节对有源密勒钳位技术、负压关断技术以及多电平驱动技术进行了分析，文献\[50\]提出了一种多电平驱动电路，能够对正负串扰电压进行有效抑制，但该电路存在缺陷。一是下管导通过程中，栅源开启电压Vgs存在突变，这是因为辅助支路S3开关在下管导通时关断，导致Vgs电压降了一个稳压管的稳定电压值，为了保证SiC MOSFET不工作在欠压状态，需要提高SiC MOSFET驱动电路的驱动电压。二是多电平产生电路中用到了大电容Cn，Cn的充放电速度影响电路的最高工作频率，图3-14展示了电容Cn在不同稳压管下的电压波形图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o81wgkP73gg7rdcXUldicNKWJCIocagnWzDehlGw4O2NZQp3mwwEY5HicQ/640?wx_fmt=png)

针对以上缺陷，本文提出一种改进的多电平SiC MOSFET驱动电路，电路原理图如图3-15所示。驱动产生电路添加S3控制电路，优化S3控制时序，优化前后的S3控制时序对比如图3-16所示，可以看出，S3控制时序优化后解决了SiC MOSFET栅源电压Vgs突变的问题。针对电容Cn充电速度问题，添加电容充电提速电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8ibG19l223rK7AEialvHgibUUqAvp1oM8ibCVHIiadocPgvC3skhZZ16tzGA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o80N4BPTpVML9hnGnJCHlggtrllkltwdtZqVC29VcbNpiboaOfiaHlReTQ/640?wx_fmt=png)

基于改进的多电平SiC MOSFET驱动电路，论文设计了一款高串扰抑制SiC MOSFET驱动电路，驱动电路系统框图如图3-17所示，包括输入逻辑电路INPUTLOGIC、电源轨产生电路Rail Generator、电平移位电路LS-L以及LS-H、驱动输出级电路、S3control电路、电容充电提速电路、退保和检测过流保护电路、欠压保护等模块。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8Wc0ibuo1gicuibgKmZoAaACbyCef4PWpYPtaQ9HmnTEBvTPBo1DfSk8jw/640?wx_fmt=png)

如图3-17所示，论文提出的高串扰抑制SiC MOSFET驱动电路一共包含三条驱动链路，分别是上拉驱动链，下拉驱动链，以及有源密勒钳位链路。为了发挥SiC MOSFET的性能优势，芯片采用高电压、大电流进行驱动，VDD电源范围为15V~20V，驱动电路输出的最大拉灌电流为3.6A。在多电平驱动的基础上，电路增加有源密勒钳位功能，进一步提高驱动电路的抗串扰能力。驱动芯片支持3.3V~5V的逻辑信号输入。芯片采用电源轨技术，在驱动电路设计中尽可能使用低压器件，节省芯片面积。驱动电路用到的电源轨为图3-17中的RAIL\_H以及RAIL-L，其中RAIL-H为比VDD低7.5V的电压，RAIL-L为比GND高7.5V的电压。同时，芯片配备有欠压保护、退饱和检测过流保护以及过温保护功能，能够保障SiC MOSFET安全可靠运行。下面对驱动芯片的工作原理进行介绍。

输入逻辑电路：外部输入信号到达时，首先经过输入逻辑电路，输入逻辑电路的功能是对电路进行逻辑处理，包括保护电路输出判断以及输入信号处理，如果系统存在保护动作情况，则输入逻辑电路输出低电平，关断SiCMOSFET。当电路正常工作时，输入逻辑电路对输入信号进行处理，并传递至后续电路。

上拉驱动链：当输入逻辑电路输出信号为高时，信号经上拉电平移位电路LS\_H、上拉管防串通电路AntiPT\_H、上拉管驱动电路，打开上拉管MsRc，最终开启SiC MOSFET。上拉电平移位电路LS\_H将0~5V的输入信号转移到RAIL\_H至VDD。为了防止上拉管和下拉管出现同时导通的情况，损坏驱动电路，添加上拉管防串通电路AntiPT-H，AntiPT-H的输入输出波形如图3-17所示。当输入逻辑电路输出信号为高时，在下拉管完全关闭以后，AntiPTH输出为高，打开上拉管MsRc，当输入逻辑电路输出信号为低时，信号经上拉电平移位电路LS\_H、上拉管驱动电路，关闭上拉管MsRC，此时信号传输不需要经过AntiPT-H电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8ibiaNOlveTicnFQFCxLlRfXDYib58UWqhrRnutgrDPIdBwzIYmibo0bia0KQ/640?wx_fmt=png)

下拉驱动链：当输入逻辑电路输出信号为低时，信号经下拉电平移位电路LS\_L、下拉管防串通电路AntiPT-L、下拉管驱动电路，打开下拉管MsNK，最终关断SiC MOSFET。下拉电平移位电路LS-L将0~5V的输入信号转移到GND至RAIL-L。为了防止上拉管和下拉管出现同时导通的情况，添加下拉管防串通电路AntiPT\_L，AntiPT-L的输入输出波形如图3-18所示。当输入逻辑电路输出信号为低时，在上拉管关闭以后，AntiPT\_L输出为高，打开下拉管MsNK，当输入逻辑电路输出信号为高时，信号经下拉电平移位电路AntiPT\_L、下拉管驱动电路，关闭下拉管MsRc，此时信号传输不需要经过AntiPT\_L电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o83u5jibnw2ptNBTkoEWiaaic1jU2HbK3SHpFQBFXABlTThiaRAsoyLWNibfw/640?wx_fmt=png)

有源密勒钳位链路：有源密勒钳位链路的功能是在SiC MOSFET关闭时，为密勒电流提供一条低阻路径，提高电路的抗串扰能力。如图3-17所示，当输入信号INPUT为低时，此时下拉驱动管MsNk栅极控制信号VO-L变为高电平，VO-L经过一定延时后，开启有源密勒钳位管MMiller，有源密勒钳位电路工作。当输入信号INPUT为高时，有源密勒钳位管MMiller关闭，有源密勒钳位电路退出，不影响SiC MOSFET的开启过程。

多电平驱动产生电路：多电平驱动产生电路由施密特触发器、延时模块Delay\_S、S3Control模块、电容C充电提速模块、开关S3、稳压管Z1、电容C以及电阻R1组成，开关S3的导通电阻远小于电阻R1。当输入逻辑信号为高时，SiC MOSFET开启，此时开关S3导通，SiC MOSFET源极电位Vs为零。当输入逻辑信号为低时，SiC MOSFET关断，为了实现多电平驱动，将SiC MOSFET关断区间分为两个阶段。第一阶段开关S3关断，VDD对电容C1充电至稳压管稳定电压Vz，此时SiC MOSFET栅极电位为零，源极电位Vs为Vz，实现SiC MOSFET负压关断，在此阶段电容充电提速电路工作，加快电容C电压从0上升至Vz的速度。第二阶段开关S3导通，SiC MOSFET源极电位Vs快速降至零，实现SiC MOSFET零压关断。S3control模块生成控制开关S3的控制，控制开关S3导通和关断，不需要外部提供开关S3的控制信号。

3.4 本章小结

本章阐述了SiC MOSFET驱动电路的基本要求，分析了SiC MOSFET驱动技术，提出了高串扰抑制SiC MOSFET驱动电路系统设计，相比现有的SiC MOSFET驱动电路，本文提出的SiC MOSFET驱动电路采用多电平驱动，其结构简单，不需要外部提供负压，且多电平产生控制信号系统集成，不需要额外提供，在多电平驱动的基础上，驱动电路增加了有源密勒钳位功能，进一步提高了驱动电路的抗串扰能力。

第四章  SiC MOSFET驱动电路设计与仿真分析

上一章节已经对论文提出的高串扰抑制SiC MOSFET驱动电路系统框图及其工作原理进行了介绍，本章详细阐述驱动电路模块设计，包括输入逻辑电路、电源轨产生电路、电平移位电路、驱动输出级电路、S3control电路、电容充电提速电路、退保和检测过流保护电路等模块，分析电路的仿真结果。

4.1 驱动电路模块设计

4.1.1 输入逻辑电路设计

输入逻辑电路的电路原理图如图4-1所示，由施密特触发器和或非门NOR1构成。施密特触发器完成输入信号处理，将3.3V~5V逻辑信号输入，统一到5V信号输出。或非门对保护信号进行判断，当保护电路动作时，输入逻辑电路输出低电平，关断SiC MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8O5EexWqs2DhwBNBkFiaB2OTLMZXsEQqup40bLicnSFWbw5JE7dZlu9Sg/640?wx_fmt=png)

4.1.2 电源轨产生电路设计

电源轨产生电路的原理图如图4-2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8vTIAmgj86OiaMGO1pOTarchpws9PbLrOlAtnhia0Zl6TXRgtmULablsA/640?wx_fmt=png)

电源轨产生电路中，所用MOS管均为源漏击穿电压30V的高压MOS 管。MOS管MN1、MN2、MN3、MN4、MN5、MN6 构成N 型电流镜，MOS管MP1、MP2、MP3、MP4、MP5 构成P 型电流镜，为电源轨产生电路提供电流偏置。电容C1、电容C2为稳压电容，在负载电流变化时，稳定RAIL\_L 以及RAIL\_H 输出电压。RAIL\_L 生成电路具体工作原理如下，偏置电流I𝐵𝐼𝐴𝑆经电流镜MN1、MN2、MP1、MP2 复制，流过二极管D1、D2，以及稳压管Z1，得到稳定电压VA，VA经MOS 管MN8、MP8、MP3、MN7构成的源跟随器传递，最终输出电路需要的电压V𝑅𝐴𝐼𝐿\_L。假设稳压管稳定电压为VZ，二极管D1、D2 的正向压降为VF1，VF2，则A 点电压为VA为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8BRYmkBwqq8fIS3CfrWP2BQPFcExNf77PJn5bpmnnGebaibaKHsSEvrA/640?wx_fmt=png)

MN3、MN4 电流镜为MOS 管MN8、MP8 提供偏置电流，调节偏置电流大小，能够调节VGS𝑀𝑁8、V𝐺𝑆\_𝑀𝑃8的大小，从而调节输出电压V𝑅𝐴𝐼𝐿\_L的大小。MP8、MP3、MN7构成超级源跟随器，其电流关系满足式4-3，其中I𝑙𝑜𝑎𝑑\_L为RAIL\_L 的负载电流。当负载电流变化时，源跟随器能够调节流过MOS管MN7的电流，提高电路的带负载能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8EUuoNbEGlwyysrVD9NJgOHUibiaJO3Ce1icqgpyxagRYxubBicyjibxqIicw/640?wx_fmt=png)

RAIL\_H 生成电路的工作原理与RAIL\_L 生成电路工作原理相似，此处不再赘述。

4.1.3 电平移位电路设计

LS\_H电路原理图如图4-3所示，其中，MN5、MN6为击穿电压30V 的LDMOS， 其余MOS 管均为低压MOS 管。INN 和INP 是互为反向的0V~5V 输入逻辑信号，MOS管 MN1、MN2 构成电流镜为电路提供偏置。MOS 管MP3、MP4 为二极管连接形式的MOS管，其尺寸相同，用于钳位X、Y 点的电位。添加MOS 管MP3、MP4 后，X、Y点之间点的阻抗变为2/(g𝑚𝑝3,4 − g𝑚𝑝1,2)，为了保证电平移位电路正常工作，MP3 和MP4的跨导系数应该比MP1 和MP2 的跨导系数小。MOS 管MN3、MN4、MN5、MN6、MP5、MP6、MP7、MP8 构成输出电压钳位电路，能够将电平移位的输出电压钳位在RAIL\_H到VDD。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o83nico0vFzHv5EuYeaTlmq22A2phbibgmuVIcTsOnpAibUibRY4ChxQQleA/640?wx_fmt=png)

LS\_H电平移位电路工作原理如下。当输入信号INN为1，INP为0时，MN5导通，MN6关断，X 点输出低电平，进而MP2 导通，对Y 点充电，Y 点输出高电平，此时电平移位钳位电路X 为低电平，Y 为高电平，MP5、MP6 导通，MP7、MP8 关断，MP6的电流经MN5 复制至MN6，OUT端输出低电平RAIL\_H。当输入信号INN 为0，INP为 1 时，MN6 导通，MN5 关断，Y 点输出低电平，进而MP1 导通，对X 点充电，X 点输出高电平。此时电平移位钳位电路X为高电平，Y为低电平，MP7、MP8 导通，MN5、MN6 处于关断状态，VDD 对OUT 端充电，最终输出高电平VDD。

对图4-3 左边电路进行分析，当输入信号INN 为1，INP 为0 时,流过MN5 的电流约等于流过MP3 的电流，此时X 点满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8WOkyCRqKeSiaKYDZicFuz6OPCUBrribEdZEAsgts5N7oCnhwaFNObyW5A/640?wx_fmt=png)

LS\_L 电路原理图如图4-4 所示，其工作原理与LS\_H 电路工作原理相似，此处不 再赘述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8aIfbxicOib55Iny0WfPhljBVUiaog8m8EBiboWf0RObMgNRGojhkFUwLEQ/640?wx_fmt=png)

4.1.4 驱动输出级电路设计

驱动输出级电路包括上拉输出级电路和下拉输出级电路，论文设计的驱动输出级 电路均采用反相器级联的驱动结构。N 个反相器级联电路结构图如图4-5 所示，其中Cg,i为第i 级反相器链输入电容，CL为反相器链负载电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8hwGARY2RQdh3vFUXR0jzOEzZWaEibt3PWia3LCfyzhOsibmGISr3X2quw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8VeIDeX3iaXjxvgkNaf9oOibCgyUYQibBGSN6Xxps1JhhwDIosxp6eVyDA/640?wx_fmt=png)

在N级反相器级联结构中，通常Cg,1以及负载CL已知，因此式4-10存在N-1个未知量，分别是Cg,2，Cg,3，…，Cg,N。求反相器链最小传输延时时，对N-1个未知量取偏导数，并令其等于零，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8iaPm7a9eMuoFS3zPQ0EPhOyLlricF07AdkG4TBGLffS5C5lPicKycwicCQ/640?wx_fmt=png)

上拉驱动输出级电路和下拉驱动输出级电路原理图分别如图4-6、图4-7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8yaTFegJElTXalGbwjL188LBBN8Ql65M9B1chJ0pIAPp1wqs93J4Kfw/640?wx_fmt=png)

4.1.5 防串通模块设计

SiC MOSFET 驱动电路包括AntiPT\_H 和AntiPT\_L 两个防串通模块。AntiPT\_H 防串通电路利用下拉管MSNK栅极信号控制上拉驱动管MSRC，保证下拉驱动管MSNK完全关断后，上拉驱动管MSRC 再打开。AntiPT\_L 防串通电路利用上拉管MSRC 栅极信号控制下拉驱动管MSNK，保证上拉驱动管MSRC完全关断后，下拉驱动管MSNK再打开。 

AntiPT\_H 电路原理图如图4-8所示，电路输入信号VO\_L和IN\_LSH分别表示下拉 驱动管MSNK 栅极控制信号和上拉驱动链电平移位电路LS\_H 的输出信号。由于VO\_L为GND-RAIL\_L电压域信号，IN\_LSH为RAIL\_H-VDD电压域信号，因此需要将VO\_L信号进行电压转换，转移至电压RAIL\_H-VDD，再对VO\_L和IN\_LSH进行逻辑运算，AntiPT\_H电路的输入输出波形如图4-9 所示。当SiC MOSFET 由关断状态转为导通状态时，AntiPT\_H电路输出信号VO\_L信号控制，当下拉驱动管MSNK 完全关断后，AntiPT\_H电路输出信号才发生翻转，由低电平变为高电平，最终打开上拉管MSRC。当SiC MOSFET由导通状态转为关断状态时，此时IN\_LSH信号由RAIL\_H变为VDD，AntiPT\_H电路OUT端信号随IN\_LSH 信号翻转为低电平，不受VO\_L信号控制。可以看出，AntiPT\_H电路仅在上拉管MSRC导通时工作，不影响上拉管MSRC关断过程。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8I6FsB7DYUaVU1PkaIibGR0ZeE4NBfzRJGLFCoCicQcm9syDbY2nyNwCg/640?wx_fmt=png)

AntiPT\_L 电路工作原理与AntiPT\_H 工作原理相似，其电路原理图及输入输出波形分别如图4-10、图4-11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o85sd1d8YYTIdicNxfcj6zpuWviaLGjvmicY3Ndwxm28IJic08icSj5DrWBIg/640?wx_fmt=png)

4.1.6 S3control电路设计

S3control电路原理图如图4-12所示，其中输入信号IN与驱动电路输入逻辑信号INPUT反向。假设SiC MOSFET处于导通状态，此时IN为低电平，结点A为高电平，结点B、结点C为低电平，因为结点A为高电平，OUT端输出高电平，开关S3导通。当SiC MOSFET由导通状态转变为关断状态时，下拉驱动管MsNK打开，输入信号IN由低电平变为高电平，此时A点电压为低电平，MOS管MN1关断，MP1开启，VDD对节点B充电，B电电压升高。在结点B的电压达到反相器INV2的翻转电压之前，结点C仍然保持低电平，输出端OUT保持低电平，开关S3关断。当结点B的电压达到反相器INV2的翻转电压V时，此时C点电压变为高电平，OUT端输出高电平，开关S3导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8boNhcicpOibjiaf4UYxooyPSsia7iaXVgia91n0ABe29qq5jTtUtdrSxjlZw/640?wx_fmt=png)

结点B 电压抬升的实质是电压VDD 通过MP1、电阻R 对电容C1 进行充电，其等效电路如图4-13 所示，电容C1 两端的电压Vc1表达式如式4-15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8myW8QKnZhoZ2tcyHZekzx25CoibRQoHtAVFvlEgS3d5DapZGLvCY2YA/640?wx_fmt=png)

4.1.7 电容充电提速电路设计

电容充电提速电路仅在开关S3关断以后投入工作，其电路原理图如图4-14所示，由上升沿脉冲产生电路，反相器INV1、INV2，或非门NORI，以及MOS管MN1、MN2、MP1、MP2构成。其中，上升沿脉冲产生电路、反相器INV1、反相器INV2、或非门NORI构成MN2栅极控制电路，控制电容充电电路工作状态。当SiC MOSFET关断时，VO-L信号由低电平变为高电平，此时上升沿脉冲产生电路生成上升沿脉冲，在上升沿脉冲期间，MN2导通，电容充电提速电路工作。MOS管MN1、MN2、MP1、MP2构成电流镜，输出电容充电电流，加速电容充电过程，调节MOS管MN1、MN2的尺寸，可以调节输出电流大小。上升沿脉冲产生电路原理图如图4-15所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8sTq2vaJEvdqrRD0PeJx3UibK9Ctq26XaGtrIOMTic8rib1LnEeicOunfrg/640?wx_fmt=png)

4.1.8 保护电路设计

（一）过流保护模块设计

过流保护模块采用退保和检测方法，即通过检测功率管漏源之间的电压大小来判断功率管是否发生过流，其电路结构图如图4-16所示，其中IDEASr为不随温度变化的偏置电流，LEB为受输入信号控制的开关，电阻R1和R2阻值之和远远大于电阻R的阻值，整个电路的工作原理如下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8eUxyLOWicWwS8Iwd7LcVh9zLGonKHFLd0HwJBRaicgIpOe8H6ibjVLRFQ/640?wx_fmt=png)

当PWM为低电平时，此时功率管处于关闭状态，LEB开关闭合，比较器正向输入端电压为0，过流保护不动作。当PWM为高电平时，经过适当延时，开关LEB断开，由于电阻R的阻值远远小于R1和R2阻值之和，电流IDEAST经过电阻R、二极管D1、SiC MOSFET以及多电平控制开关S3流向地，此时DEDAT端口电压VDESAT如式4-17所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8Zcn6uicibxCCaY9Cice356KxCLElsiaLhEgHjibALf48oLDRMq1ErkIDPcg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8GnEmKpK4sBNGyic43rz93jYLsgZU6qclY3ibQBcH8nrwKZ0hm5bFFicuA/640?wx_fmt=png)

退饱和检测过流保护模块具备一定的消隐功能，当SiC MOSFET 功率管发生过流， 但过流持续时间小于300ns，此时电路滤除保护动作信号，过流保护不动作。当SiC  MOSFET 功率管发生过流且过流持续时间超过300ns，此时电路输出高电平，过流保护动作。

退饱和检测过流保护动作时序图如图4-17 所示，具体电路原理图设计如图4-18 所示。

其中，VREF产生电路原理图如图4-19所示，电阻R1、R2、R3、R4、R5、R6，MOS管MP3、MP4、MP5、MP6、MN5、MN6、MN7以及电容C1构成运算加法器，满足R3=R4=R5=R6，且R1//R2远小于R3的大小。MOS管MN1、MN2、MN3、MN4、MP1、MP2以及电阻R构成偏置电路，为电路提供偏置电流。VREF1为外部提供参考电压，其表达式如式4-20所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o83StSicJbUyJZcdMFcdsPgbhYMZs9svXiauJSxtibKvXe93x8E3MaicmEmQ/640?wx_fmt=png)

（二）欠压保护电路设计

欠压保护电路的功能是监测SiC MOSFET稳态开启栅源电压，当SiC MOSFET稳态开启栅源电压值小于设定值时，欠压保护动作，输出高电平，关断功率管。论文设计的欠压保护模块具有滞回功能，其电路结构图如图4-20所示，CMP为比较器，ST1为施密特触发器，INV1、INV2为反向器，电路工作原理如下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8T3deDrLRO6Mk3uwTEibbXHDT5ufqNLOzaPiadkMdW4J4v9lWDTmKic8CA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8hEOBxvACXWQwIOZv8tALuH4q4OJKQib3jDv3H8U3dD6ibb7d16tVHguw/640?wx_fmt=png)

欠压保护电路的迟滞窗口为V𝑈𝑉𝐿𝑂−到V𝑈𝑉𝐿𝑂+，通过调节电阻R1、R2、R3及V𝑅𝐸𝐹， 可以得到满足实际应用需求的欠压保护电路。论文设计的欠压保护电路原理图如图4- 21 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8GE711rf0RxjXQOICmpU2YoTXc5dmJDf2hPrHlQ7RW4AJwL0Z5zB7nw/640?wx_fmt=png)

（三）过温保护模块设计

论文设计的具有迟滞功能的过温保护电路结构图如图4-22所示，其中CMP为比较器，ST1为施密特触发器，INV1和INV2为反相器，IPTAT为与温度成正比的偏置电流，过温保护模块通过比较电压VN与电压Vp的大小，来判断电路是否发生过温异常。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8AyEDUFicC7uzlmibpHM0MuPLcsibo6Mmnxxh2xnLAtgu8IQFMg5nMN1bw/640?wx_fmt=png)

随着温度不断升高VN增大，当VP \=VN时，过温保护模块动作，关闭SiC MOSFET功率管。此时温度达到关断阈值温度T𝑜𝑓𝑓，其值为

随着温度不断升高V增大，当Vp=VN时，过温保护模块动作，关闭SiC MOSFET功率管。此时温度达到关断阈值温度Toff，其值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o80HmvyLznwoLicARuQaXm2uc9qvZrgso8orLG6xbqAF7WOjq3TkcHYiaw/640?wx_fmt=png)

基于上述原理，报告设计的过温保护模块具体电路原理图如图4-24所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o82UKcD42AxIEK3WL6NUcGJtdIj3QemuiaQWc0H9IPXClJAYd4IY0RXcg/640?wx_fmt=png)

4.2 驱动电路仿真验证与分析

基于华润上华（CSMC）0.8um BCD工艺平台，设计的驱动电路功能仿真验证平台如图4-25所示，SiC MOSFET模型采用CREE公司推出的第三代N沟道SiC MOSFET，型号为C3M0075120D，其器件参数如表4-1所示，驱动芯片各引脚功能定义如表4-2所示。驱动电路功能仿真验证平台中，INPUT为一定频率的PWM信号，VDD=15V，CH为电源轨产生电路RAIL\_H的稳压电容，CL为电源轨产生电路RAIL\_L的稳压电容，CH=CL=10nF，Ron为SiC MOSFET导通外接电阻，Roff为SiC MOSFET关断外接电阻，IDESAT为过流保护电路不随温度变化的恒定电流，S3、Z1、D1分别为多电平驱动模块中的开关、稳压管以及电容，稳压管稳压值Vz=6V，C1=33nF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8YDcddBgEKt1c6B4iaiby5zkia5QkvNM4VtFxKM35icNFWpHCbaBWpqibrfw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8PJHhVurUtUz8uemMeFbWArdiakL47XLoJsmhbeGUjQXqBzk456Fuluw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8yyPGGbicjXjd29T4QyUcVU6Qf6xicO1xo6dPic4JddsjBGUMUkpz1sFHA/640?wx_fmt=png)

4.2.1 电路整体驱动功能仿真分析

TTConer@27℃仿真条件下，芯片整体驱动功能仿真验证结果如图4-26所示。其中INPUT为输入PWN信号，频率200KHZ。VO\_H和VO\_L分别为上拉驱动管MsRc的栅极控制信号以及下拉驱动管MsNk的栅极控制信号。IG为SiC MOSFET功率管栅极电流，VG为SiC MOSFET功率管栅极电压，VS为SiC MOSFET功率管源极电压，VGS为SiC MOSFET栅源电压，VDS为SiC MOSET漏源电压，Iload为负载电流。从图4-26中可以看出，VGS电压在SiC MOSFET功率管关断期间分为两个阶段，第一阶段VGS为负压，第二阶段VGS为零压，所设计的SiC MOSFET驱动模块可以实现多电平驱动功能且能周期性驱动SiC MOSFT功率管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8R2FT2qbpQjgg9dK5r3XbQGhWrP7rrf08B4MkqmITpgVHgiawhsic9N2g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8x09dmia7x8ELvjtMQpOxxMKdzlibrvMic5nszz6L5ZERN6gnm9ypmaeMw/640?wx_fmt=png)

图4-27为SiC MOSFET开启过程瞬态仿真结果，其中外接栅极导通电阻Ron=2Ω。从仿真结果可以看出，栅极最大充电电流IsRC\_pk=1.167A，SiC MOSFET开启过程传输延时tpDom=26.40nS。图4-28为SiC MOSFET开启瞬态局部图，SiC MOSFET开启时的上升时间trise=9.80ns。芯片延时相关参数定义如图4-29所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o88HmiaBIIkxYPjALH1RcpEFezHL9IIyUVLWkq7QTD8DfuGc7fWpB2nbw/640?wx_fmt=png)

图4-30为SiC MOSFET关断过程瞬态仿真结果，其中外接栅极关断电阻Roff=2Ω。从仿真结果可以看出，SiC MOSFET关断时栅极最大放电电流IsNK\_pk=1.351A，SiC MOSFET关断时传输延时tpDoff=26.8ns。图4-31为SiC MOSFET关断瞬态局部图，可以看出，SiC MOSFET关断瞬态下降时间tfall=11.6nS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8VgADrkG1aKQibicicLKxZL2kjk9CKv2ERVjn7rznXqJEzfbVHp0gC1tiag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8oO42UGXK5Eibg2sHkEkalNkQeChNqicqNzesQ2VbzwD8BXMtibF0kXic2w/640?wx_fmt=png)

不同工艺角下芯片整体驱动功能仿真对比如表4-3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o88OVia5Kf1J4ro4pk9Sxb3OtVcyn0ZpwiaPsm5Is4dLo40CVyJ3gIRUFw/640?wx_fmt=png)

SiC MOSFET驱动芯片拉灌电流测试验证平台如图4-32所示，R=1Ω。TTConer@27℃仿真条件下，仿真验证结果如图4-33所示，驱动芯片拉灌电流分别为4.56A和4.60A，不同工艺角驱动芯片拉灌电流仿真结果如表4-4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8uAwBicrkUnhctboibvSBbw9l7NWhnOicAicRTByDeDqN3VDwaaJxbsk6xA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8oqCAOTaQ2h1dBUicP9G8CuplKTYOHNZD0SCibtKbcm4UFPwAlxAbCu2Q/640?wx_fmt=png)

4.2.2 电源轨产生电路仿真分析

TTConer@27℃，VDD=15V仿真条件下，电源轨产生电路仿真结果如图4-34所示，其中△RAIL-H表示VDD与RAIL-H之间的电压差，△RAIL-L表示RAIL-L与GND之间的电压差。由于在SiC MOSFET开启和关断过程中，电源轨产生电路负载电流发生变化，导致RAIL-L和RAIL-H电压产生波动。从图4-34可以看出，△RAIL-H的波动范围为7.41V至7.53V，△RAIL\_L的波动范围为7.46V至7.61V。在VDD=15V条件下，不同工艺角电源轨产生电路仿真结果如表4-5所示，SS以及FF工艺角下，电源轨电压发生了偏移，但电路采用的低压管最大栅源耐压为8.5V，不影响驱动电路整体的驱动功能，电源轨电路仍能实现其功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8abUJqupSqG8Ctichz2EaMEO6QpZbWJZBWWju7wEiboLkmHJThZd52XOg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8JpGtgOMWBT5FNLicsorzXiczCKth2S0mu6JZt0GkJ22bVPibgDBzlFTqA/640?wx_fmt=png)

4.2.3 电平移位功能仿真分析

TTConer@27℃仿真条件下，电平移位电路LS\_H以及LS\_L仿真结果分别如图4-35、图4-36所示，其中INN、INP为电平移位电路的输入信号，OUT为电平移位电路的输出信号，可以看出，LS-H以及LS-L均能实现其功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o80zOKVEP5ic6ZEAicYPBZwRR2MxqXWBZlgxQgCV7bqeYYb8iaCUiaPnLVhw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8hTk54r66GwcX8fUKDSGZiaoQVLztUjxTXasiascH7zFOBdvcfa8ukiacQ/640?wx_fmt=png)

不同工艺角下，电平移位电路仿真结果如表4-6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8xFnG3ibwZicoKR2ZB5riamlm3ibicHKdUC76j1K80LTu8IiaPYGic7jHicsRqQ/640?wx_fmt=png)

4.2.4 防串通电路仿真分析

TTConer@27℃仿真条件下，上拉驱动管MsRc防串通电路AntiPT\_H仿真结果如图4-37所示，下拉驱动管Msnk防串通电路AntiPT\_L仿真结果如图4-38所示，仿真验证表明，防串通电路AntiPT\_H以及AntiPT\_L能够实现其功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8gwLSFAD7iaOKdy3qECciawqnECnr4ZAjicpVPySibH8ibMb3ZuVicfughBKA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8gB47YNJwurQeXptAg7rb7OoNch3LRDlJANWutjmM8bx09TmydzYYbQ/640?wx_fmt=png)

4.2.5 多电平驱动功能仿真分析

TTConer27℃仿真条件下，驱动电路多电平驱动功能仿真结果如图4-39所示，其中SControl为S3control电路的输出信号，IOUT\_CCharge为电容充电提速模块的输出电流。可以看出，在SiC MOSFET关断时，SiC MOSFET栅源电压VGS分为两个阶段。第一阶段，在VO-L信号的上升沿，S3control电路输出800ns的低电平，开关S3断开，VDD对电容C1充电，SiC MOSFET源极电压上升至稳压管稳定电压Vz，在此阶段，SiC MOSFET功率管栅极电压VG为零，从而实现SiC MOSFET功率管负压关断，负压关断持续时长约800ns。第二阶段，S3control电路输出高电平，电容C1快速放电，SiC MOSFET源极电压降至零，SiC MOSFET功率管实现零压负压关断。

在VDD对电容C1充电过程中，电容充电提速模块输出386.92mA的充电电流，加速电容电压上升。图4-40显示了有电容充电提速电路与没有电容充电提速电路，电容C1两端电压上升到稳压管稳定电压Vz的时间，可以看出，没有电容充电提速电路时，电容C1两端电压上升到稳压管稳定电压Vz的时间745.06ns，添加电容充电提速电路后，电容C1两端电压上升到Vz的时间为378.21ns，充电速度提升366.85ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8TpzSLKm5sicBcCMjGicCkSp94WyuDKq5Rpl0C17C8ZVDG4M7I2tOCCRA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8cGFSbTxD1t3U0ummB3jIia3aWNvuc8vkhV1DoNgt6d1SlnE2ibsu5VNQ/640?wx_fmt=png)

不同工艺角下，多电平驱动模块相关参数仿真结果如表4-7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8JWnSAILOBYBcHa04EtyxkVTwVchIytklQBEMROgmy7sBdUGib3MBSKQ/640?wx_fmt=png)

4.2.6 抗串扰能力仿真分析

驱动电路抗串扰能力仿真验证平台如图4-41所示，与双脉冲测试平台相似，论文采用的抗串扰仿真验证方法模拟SiC MOSFET在半桥应用时的状态，在其漏端施加一定强度的dv/dt，在SiC MOSFET关断时，观察其栅源电压变化。TTConer@27℃，外接关断电阻Roff=0.35Ω，dv/dt=150V/ns的仿真条件下，SiC MOSFET关断时的栅源电压变化如图4-42所示。从仿真结果可以看出，SiC MOSFET关断时，正串扰栅源电压大小为-1.621V，低于SiC MOSFET的阈值电压，负串扰栅源电压大小为-416mV，在SiC MOSFET可承受负压范围。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o87hYa1DrZq2EGlkeqpdITRl8KAlGuctn2e2pEG3BfAC1icbSm1j1t1qA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8Wo283t9q3bI7yt5Uj8cYApGg31DJxhjE7uyGzZ0zu4PyGQvwJAImrw/640?wx_fmt=png)

外接电阻Roff=0.35Ω，dv/dt=150V/ns情况下，不同工艺角下驱动电路抗串扰能力仿真结果如表4-8所示，可以看到，正串扰电压均在SiC MOSFET阈值电压以下，负串扰电压均在SiC MOSFET可承受范围，论文设计的SiC MOSFET驱动电路抗串扰能力超过150V/ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8Tv6pB8nG7la28KhwTPJPJwWmVYLP5begkFD8mt33MeSePesST7rsrQ/640?wx_fmt=png)

4.2.7 保护功能仿真分析

（一）退饱和检测过流保护模块仿真验证

退饱和检测过流保护模块仿真验证平台如图4-43所示，其中D1为外接二极管，R为外接电阻，IDS模拟流过SiC MOSFET功率管的电流，RDS模拟SiC MOSFET功率管导通时漏源之间的电阻，Cloa模拟SiC MOSFET功率管输入电容，IDESAT=50μA。由表4-1可知，在环境温度25℃条件下，仿真采用的SiC MOSFET功率管允许流过的持续电流为32A，设置退饱和检测过流保护保护动作定值为33A。在TTCorner@27℃仿真条件下，过流保护功能仿真验证结果如图4-44所示，其中INPUT为输入逻辑信号，IDS为流过SiC MOSFET的漏源电流，VN、VP分别为图4-18中比较器CMP2的负端电压和正端电压，VA为图4-18中A点电压，OUT\_OCP为退饱和检测过流保护模块输出信号，VG为电容Cload电压。从仿真结果可以看出，当系统发生过流时，过流保护模块能够正确发出过流保护信号，关断SiC MOSFET功率管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8FC4FfwWv8v9D3KU4pOEMpCHTUKYW3WNrHPUkCDYQeXWtV2LjQ0mRQQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8c69HLjyXVJhFsrqQ6zRGeLe1aqHwcFMXzjiawfsvS3SsnYtaazyCqxQ/640?wx_fmt=png)

过流保护模块消隐功能仿真结果如图4-45所示，当系统过流时间小于300ns时，过流保护不动作。不同工艺角下过流保护仿真结果如表4-9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o88xwezA6nmKrTOlma9X0OGImaHw1Dc25ybQDutkUKGaouUB0SHxIh3w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8vROXibrYNw1Kq0bs3HVkAPSLZBcqPqEicUnGduB5ibpzCMEqOmuibd3r9Q/640?wx_fmt=png)

（二）欠压保护模块仿真验证

根据SiC MOSFET器件特性，欠压保护动作值电压Vt\_设置为12.9V，欠压保护退出值电压Vr+设置为13.7V，退滞窗口为0.8V。TTConer@27℃仿真条件下，欠压保护模块仿真验证结果如图4-46所示，其中INPUT为输入逻辑信号，VDD为电源电压，VP、VN分别为图4-20中比较器的正负输入端电压，OUT\_UVLO为欠压保护模块输出信号，Iload为驱动电路负载电流，从仿真结果可以看出，论文设计的欠压保护模块能够正确动作。不同工艺角下欠压保护模块仿真结果如表4-10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8UqF3Qzx4JxzhVeceGQmic3z5INC4ia9S0oE7xINh22urAsJyqk6hlVdw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8krowa05WOiaK8adWTTVwXgAk9yh7xNdnLJvibLKrmnAtzkmHicXNhv97w/640?wx_fmt=png)

（三）过温保护模块仿真验证

温度扫描范围为-40℃\-175℃，TTCorner仿真条件下，过温保护模块仿真结果如图447所示。从仿真结果可以看出，当工作温度超过153.38℃时，过温保护模块动作，输出高电平，当温度回退至132℃时，过温保护模块退出，输出低电平，过温保护模块迟滞窗口为21.38℃。不同工艺角下过温保护模块仿真结果如表4-11所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8EZGL5CDOjHfPjrdCpLRLVqjIaibpIyuuiaWMs4GkXJPnOicWib4QzkW6ag/640?wx_fmt=png)

4.3 本章小结

本章对论文提出的SiC MOSFET驱动电路进行电路设计与分析，包括输入逻辑电路、电源轨产生电路、电平移位电路、驱动输出级电路、防串通电路、S3control电路、电容充电提速电路、退保和检测过流保护电路、欠压保护、过温保护等。基于华润上华（CSMC）0.8μm BCD工艺平台，基于Wolfspeed的产品C3M0075120D，对电路进行仿真和验证。仿真结果表明，论文设计的SiC MOSFET驱动电路满足设计要求，能够可靠驱动SiC MOSFET功率管。

第五章 版图设计与结果分析

本章介绍SiC MOSFET驱动电路版图设计，分析版图后仿真结果。

5.1 版图设计

在进行版图设计时，需要考虑电路的布局、连线、电容、电感等因素。优化电路的版图布局和连线，可以减少电路信号延迟，避免电路发生串扰，提高电路的可靠性和稳定性。除此之外，版图设计时还应充分考虑寄生效应以及工艺偏差对最终电路性能的影响，包括门锁效应、浅槽隔离、阱邻近效应以及静电防护等。

设计的SiC MOSFET驱动电路版图布局如图5-1所示，芯片整体版图如图5-2所示，版图面积为2967umx3180μm，目前芯片处于投片准备阶段，等待流片测试验证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8U4NMasMicO5eZt5BBaRVJuziaSYwpTGWIfLzUfEfWruajqdm62uQXrBw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8330hgcibfSibWvLrib31HS7yVTbuibrpTSiblHS55A72GAzGv4iaianSPDxJg/640?wx_fmt=png)

5.2 版图后仿真结果

提取版图寄生参数，对驱动电路进行版图后仿真，仿真条件为TTConer27℃。外接电阻Ron=Roff=2Ω，驱动电路驱动功能后仿真波形如图5-3所示，驱动电路整体驱动功能后仿真结果如表5-1所示，可以看出，由于寄生参数的影响，驱动电路输出峰值电流有所下降，IsRc\_pk由1.167A变为0.632A，IsNK\_pk由1.351A变为0.902A，驱动电路相关传输延时有所增加，优化版图布局及连线，可以减小版图后仿真传输延时。驱动电路拉电流、灌电流后仿真波形如图5-4所示，驱动电路拉电流、灌电流后仿真结果如表5-2所示，由于寄生参数的影响，拉电流由4.56A变为3.57A，灌电流由4.60A变为4.0A，满足设计指标。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o82lCQjKjiayeGCjgxFRCDw20jY1ynWXUyPTzjgLozichuBUdUnFlAIX7A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8drvXCQUVI2s4aC7xK2icO39wEClRumHy3NhHQicsQXJ1wp9ibg0TicKA1w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8wZrrQnVRVDzWicAm376fTUR2gCico45au5xUoibLf2Cay2ZQwN8Iypicvw/640?wx_fmt=png)

驱动电路抗串扰能力后仿真波形如图5-5所示，驱动电路抗串扰能力后仿真结果如表5-3所示，仿真条件为dv/dt=150V/ns，可以看到，正串扰电压由-1.621V变为0.216V，小于SiC MOSFET的开启阈值电压，负串扰电压由-0.416V变为-0.638V，在SiC MOSFET栅源能承受负压范围，驱动电路抗串扰能力大于150V/ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8J8ffalT7QZvCicYduceK5OmZGvMv3P9sa7iblstaPNKdCaolMwBCNO5Q/640?wx_fmt=png)

过流保护模块功能验证后仿真波形如图5-6所示，过流保护模块消隐功能验证后仿真波形如图5-7所示，欠压保护模块后仿真波形如图5-8所示，过温保护后仿真波形如图5-9所示。驱动电路保护功能后仿真结果如表5-4所示，达到芯片设计指标。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8LxtALAJTI5yUQ6y2LfW2tOr64jk8fz8dwpKjXPp3sMGPfv23KUtlEg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8Mia3HQAVHwsG4b1UPriarngbtNX9cw6rlia7mtQdib7icDg2EGEiaLVfhAsg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8dHG8PI2n7P4xron7mmfVzkm2QcpC7CDAutF6ADRSmkzAiaE9Jy1kWkw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8DT2Kjmhzekj9t1iatpQQDmib4O6Yunq0MicX4da1GcxyubkfHz5TQiaOqw/640?wx_fmt=png)

论文设计的驱动芯片与Wolfspeed公司推出的产品CGD1200HB2P-BM3性能对比如表5-5所示，CGD1200HB2P-BM3为Wolfspeed推出的SiC MOSFET驱动板，针对其1200V SiC MOSFET。可见，采用多电平驱动加有源密勒钳位技术，论文设计的芯片具有更高的抗串扰能力。值得注意的是，虽然论文设计的芯片灌电流小于CGD1200HB2P-BM3的灌电流，下降时间却小于CGD1200HB2P-BM3的下降时间，这是因为负载电容较大，在SiC MOSFET关断过程中，密勒钳位模块开启，加速SiC MOSFET关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJfRTdFJZialZlazUHzu1o871NhlRUXe8osIlQibJXAcDetiaCeUKoCnrWNHesaoDs9y5QTgENL0jSg/640?wx_fmt=png)

5.3 本章小结

本章介绍了SiC MOSFET驱动芯片版图设计，后仿真结果表明，设计的SiC MOSFET驱动芯片面积为2967umx3180um，输出驱动电流为3.6A，抗串扰能力超过150V/ns，各项参数均达到设计指标，能够可靠驱动SiC MOSFET功率器件。

总结与展望

1.本文总结

SiC MOSFET由于其优异的材料特性，如禁带宽度大、击穿场强高、散热性能好等，能够更好地工作在高频及高功率密度条件下，已经在一些应用场合逐步取代传统Si基功率器件。快的开关速度以及高的开关频率，在SiC MOSFET应用中引起严重的串扰问题。目前采用的串扰抑制方法有：在SiC MOSFET栅源之间并联大电容，减小SiC MOSFET栅源之间的寄生阻抗，但减慢了SiC MOSFET的开关速度，增加了开关损耗：优化PCB版图，减小寄生参数，但是受封装结构、成本以及功率等因素限制，对串扰的抑制效果有限；采用负压关断SiC MOSFET，但是不能抑制负栅源串扰电压，在负栅源串扰电压影响下，栅源之间负压加剧，可能导致SiC MOSFET负压击穿：采用多电平驱动，能够有效抑制正负串扰电压，但控制逻辑复杂，需要提供额外的控制信号。论文对串扰问题产生机理及其抑制方法进行理论研究与分析，对比了不同串扰抑制方法的优缺点，提出一种多电平驱动策略，通过引入辅助支路，控制SiC MOSFET的源极电位，实现多电平驱动功能。基于此驱动策略，设计了一款具有高串扰抑制能力的SiC MOSFET驱动芯片，芯片具有如下特点：

（1）驱动能力强。驱动电路输出驱动电压15V~20V，输出驱动电流3.6A，能够快速导通和关断SiC MOSFET，减小SiC MOSFET的开关损耗。

（2）多电平驱动技术。在SiC MOSFET关断时，分别采用负压和零压，能够对SiC MOSFET应用时的正负串扰电压进行有效抑制。提出的SiC MOSFET多电平驱动技术，其电路结构简单，不需要额外的多电平产生控制信号，且不需要外部提供负压。

（3）有源密勒钳位功能。在多电平驱动的基础上，电路增加有源密勒钳位功能，进一步提高驱动电路的抗串扰能力。设计的SiC MOSFET驱动电路，抗串扰能力大于150V/ns，且有源密勒钳位模块不影响SiC MOSFET的导通过程。

（4）保护功能。驱动电路具有退保和检测过流保护、欠压保护以及过温保护，能够监测电路运行时的状态，保障SiC MOSFET安全可靠运行。退保和检测过流保护电路能够根据需要设置过流保护定值，具有300ns消隐时间；欠压保护电路动作阈值为12.8V，滞窗口0.9V：过温保护动作阀值为150℃，退滞窗口25℃。

2.研究展望

本文研究过程中，以下问题可以继续完善：

（1）设计的SiC MOSFET驱动芯片尚未完成流片测试，后续需要对驱动电路进行流片测试验证。

（2）目前驱动电路采用双电源供电，后续可以优化驱动电路供电方式，添加低压LDO模块，由电压VDD生成5V供电电压。

（3）由于多电平开关S3在导通时需要具有非常小的导通电阻，传统MOS管开关实现S3开关功能，开关面积较大，目前驱动芯片多电平开关S3采用外接方式，后续可以优化开关S3，将其集成到驱动电路内部。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslJfRTdFJZialZlazUHzu1o8sGCfbNnJzLOrxjIibkNS87Imhr9hiatZ9LzMMJjibwDvK4mac2L8q3XPg/640?wx_fmt=jpeg)

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kI1xUdGHI4mr7IjjPseYSBu8vQfEg5Mlvn04OJau7EABPcOTRCayKSw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4ktH42XJDAhPQHAEplDKjbyTu0O1BCmuiauFPlnseeU0SQTwh0Ju1CFdw/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kBmUGdey8EUaYInibDZGLTGR3fzrhv6txBkpp2WSjaFWVfEJxXic0lUkA/640?wx_fmt=png)

* * *

  

###