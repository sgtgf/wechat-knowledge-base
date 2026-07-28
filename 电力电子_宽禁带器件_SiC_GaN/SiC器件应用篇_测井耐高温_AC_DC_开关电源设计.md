# SiC器件应用篇：测井耐高温 AC-DC 开关电源设计


> 原文地址: [https://mp.weixin.qq.com/s/e4UA78JNBayig5hnkXU6zg](https://mp.weixin.qq.com/s/e4UA78JNBayig5hnkXU6zg)

文章来源：测井技术

作者：龚学海1，毛玉蓉1，2，杨居朋3，4，陈文辉3，4，郭庆明1，3，4，王宇星3，4（1.长江大学地球物理与石油资源学院，湖北武汉 430100； 2.油气资源与勘探技术教育部重点实验室（长江大学），湖北武汉 430100； 3.中国石油集团测井有限公司测井技术研究院，陕西西安 710077； 4.中国石油天然气集团有限公司测井技术试验基地，陕西西安 710077）  

摘要: 随着深层油气资源勘探开发的不断推进，井下测井仪器对供电系统的耐高温性能与大功率输出能力提出了极为严苛的要求。针对当前常规电源在极端工况下易失效、热稳定性差等问题，本文设计并研制了一种适用于175 ℃极端高温环境的AC-DC 大功率开关电源模块。采用单端反激式变换器架构，以军品级电流模式控制芯片UC1843 作为主控核心。主功率传输采用面积乘积法完成耐高温高频变压器的设计；在闭环稳压控制方面，构建了基于线性光耦TLX9300 与精密稳压源TL431 的隔离反馈网络，配合前级电磁干扰（Electromagnetic Interference，EMI）滤波器设计，有效抑制了传导干扰并保障了控制信号的高精度反馈；引入基于源极跟随结构的自适应高温启动电路与无源钳位网络（Resistor-Capacitor-Diode，RCD），进一步提升了系统启动的安全性并降低了功率开关管的瞬态电压应力。模块选用碳化硅（SiC）等宽禁带半导体器件，组合热匹配度高的陶瓷基板与厚膜混合集成工艺并使用熔点高达217℃的Sn96.5Ag3Cu0.5三元无铅合金作为焊接材料，结合导热硅脂整体灌封处理，极大增强了系统内部的热传导效率。借助电力电子仿真软件（Power Simulation，PSIM）完成仿真建模后，研制实物样机并在175 ℃高温烘箱内开展了100h的极限老化测试。实测结果表明：该电源模块稳态输出电压平稳保持在（72±1%）V 内，常温满载输出纹波仅为46 mV，电压线性调整率低至0.09%，且最高能量转换效率达88.632%。该电源方案在全温度范围内表现出优异的电气性能与卓越的热可靠性，能够较好地满足深井测井仪器在超高温环境下的持续供电需求。  

关键词: 175 ℃高温；开关电源；高频变压器；UC1843；隔离反馈；热设计

0 .引言  

随着全球能源需求的持续增长，深层油气资源的开发成为保障未来能源供应的重要方向。在深井测井作业中，高温环境对井下仪器电子系统的稳定性、耐久性与可靠性提出了更高要求。其中，电源模块作为系统动力核心，不仅需耐受严苛的高温环境，还需具备高效能量转换与较高功率密度，以确保测井设备的稳定运行。在众多供电方案中，开关电源凭借其高效率、结构紧凑与高可靠性等优势，成为极端环境下井下仪器供电的首选方案。此外，其低损耗特性也延缓了器件老化，降低了系统维护频率和成本。  

近年来，国内外学者围绕耐高温开关电源在拓扑结构、器件选择、封装形式与高温可靠性等方面开展系统研究，有力推动了相关技术从理论走向工程应用。在基础理论与拓扑结构研究方面，张占松等系统构建了开关电源的控制模型与设计体系，为后续复杂变换电路的演进奠定了理论基础。顾伟康则针对单端反激式等经典拓扑，提出了精细化的变压器参数设计方案，有效提升了系统的能量传递效率。在耐高温设计与关键器件选择方面，为解决大功率工况下的热管理难题，樊亚坤等通过协同优化磁芯材料与热结构，开发出具备高热稳定性的耐高温电感器。随着宽禁带半导体技术的突破，黄凌云将碳化硅（SiC）等具有优异高温高频特性的新型材料引入设计中，显著降低了开关损耗并提升了系统的耐热极限。在高温可靠性评估方面，极端工况下无源器件的长期稳定性成为制约寿命的关键因素，Kim等深入剖析了多层陶瓷电容（Multilayer Ceramic Capacitor，MLCC）在持续电应力下的老化机制，证实了微观铁电畴切换会导致器件电容量的不可逆衰减，这为高可靠电源模块的降额设计提供了关键依据。在封装形式与系统级补偿层面，Singh等将基于厚膜混合技术的DC-DC变换器成功应用于极端环境，通过高密度集成有效提升了电路的机械强度与热管理能力。针对测井等长距离线缆供电所引发的端电压衰减难题，Salavarin等提出了一种外置远端电压传感电路，通过外部闭环补偿策略，成功实现了长路径大电流传输下远端电压的高动态响应与稳定调节。  

尽管当前高温开关电源技术在多个关键环节已取得显著进展，但在石油测井等深井高温极端环境中，仍存在集成度不足、器件热稳定性差、封装工艺复杂及成本偏高等问题。为此，本文提出一种基于反激式拓扑结构与控制芯片UC1843的耐高温、大功率AC-DC开关电源设计方案。该方案采用热设计工艺，构建高度集成、热匹配性优异的模块化电源单元，满足小体积、大功率测井电源在175 ℃高温环境下的长期稳定运行需求。本文将从拓扑结构选择、电路参数优化、热设计仿真与样机实测验证这4 个层面，对该高温电源系统的研制过程进行详细阐述。

1. 系统总体方案设计

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMBpGkOXBloqtDf1VTItWmnPPRcQIap6vwyO0Saeg1ZmaBCXXOYkO3p3YwxicuVT8S21qiaKficgyibHEe2De4ibXWHlXl3RWqERyPk/640?wx_fmt=png&from=appmsg)

系统的整体性能高度依赖于其拓扑结构，合理的拓扑不仅影响功率转换效率，还深刻影响后续模块的热管理与集成策略。开关电源具有多种拓扑结构，其中，反激式（Flyback）拓扑因具备固有的电气隔离能力、电路结构简单及控制策略成熟等特点，在AC-DC 变换场合得到广泛应用。尤其在本研究所涉及的高温、大功率密闭空间条件下，反激式拓扑通过高频变压器不仅实现了输入输出的电气隔离，还提供了宽范围电压调节，能够有效满足测井电源模块对安全性、可控性与高集成度的要求。因此，本文选用反激式拓扑作为主功率变换单元，为后续控制电路设计与热管理优化提供稳定的结构基础。  

反激式AC-DC开关电源系统架构见图1。该系统由电磁干扰（Electromagnetic Interference，EMI）滤波及输入整流电路、反激式变压器、脉冲宽度调制（Pulse-Width  Modulation，PWM）控制电路、输出整流与滤波电路、光耦反馈电路和保护电路等模块构成。

反激式AC-DC 开关电源基本工作原理：输入端交流电经过整流与滤波电路转换为直流电，再通过滤波电容实现电压的平滑处理。整流后的直流电一方面为启动电路供能，进而驱动基于控制芯片UC1843 的PWM 控制电路；另一方面经反激式变压器输入侧，由金属\-氧化物半导体场效应晶体管（Metal-OxideSemiconductor Field-Effect Transistor，MOSFET）在PWM 控制下周期性导通与关断，实现储能与能量传输过程，输出电压由变压器的原副边匝比决定。输出侧采用同步整流或快恢复二极管，将变压器副边的交流电整流为直流电，并通过滤波电路进一步抑制电压纹波，提升输出质量。光耦反馈电路将输出电压的变化信号传回控制芯片UC1843的误差放大器输入端，动态调节MOSFET 的占空比（D），以实现闭环稳压控制。同时，系统设置过压、过流等保护电路，可在异常情况下快速关断功率管，保障电源系统的稳定与安全运行。  

2. 电路模块设计与参数优化  

在确定反激式AC-DC 开关电源系统架构后，具体电路模块的设计成为实现高温稳定运行的关键。本文对变压器、EMI 滤波及输入整流电路、PWM 控制电路、输出整流与滤波电路、保护电路进行优化设计与参数匹配。 

2.1 变压器设计 

2.1.1 MOSFET 反射电压及占空比计算  

开关电源设计要求输入交流电压为180～260 V，变压器原边直流电压为输入交流电压的1.3 倍，故其最小输入电压Vdc,min 为234 V，最大输入电压Vdc,max 为338 V。输出直流电压Vo为72 V；变压器辅助绕组输出供电电压Va为17 V；输出功率Po为120 W；输出效率η 为85%；工作频率fs为100 kHz。  

考虑到该开关电源设计需要在井下极端高温环境下使用，开关管选择耐高温的SiC 材质，高漏源击穿电压Vds,max为800V。在150V 裕量条件下所允许的最大反射电压Vf,max见式（1）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMWzT680k2HNAETTXhVKrN0drlw4HxNyqpZb6LRdE0btG6PicwYtoRQ19oWALvG2sgfmswlzdE6TKPFa8JMibNoVU9yiajBUNhdibo/640?wx_fmt=png&from=appmsg)

由式（1）可得，在150V 裕量条件下所允许的最大反射电压Vf,max为312V。最大占空比Dmax的计算见式（2）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPKyLciaicNW5MsAHqxyRiaDxW8IAuerU9oVAMuIlVFNBk77kOI8MT5icWItfkyCicj023TKP4gaENicxLBrOUYKkcnJeOr1whVpLbek/640?wx_fmt=png&from=appmsg)

式中，Vf为实际设计反射电压，V。  

由式（2）计算可得，Dmax约为0.57，为兼顾器件电压应力与占空比设计，在后文的参数设计中，Dmax取0.5。再将Dmax为0.5 带入式（2）中，可得实际设计反射电压Vf为234 V。 

2.1.2 变压器参数设计  

在变压器设计中，需要计算出变压器原边电感量、磁芯有效截面积、变压器原副边匝数及气隙长度等关键参数。为求得变压器原边电感量，需先计算变压器原边的工作电流。根据能量守恒定律有：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOxSH9Qke150U0VUndKicfhhsxqPIYRnhwHJUWmCsaeCPNjV2Ktq1ic7s3SiaSlke3hHv4jFX5hIjsICbichRawDdFopnVNyhnzdqU/640?wx_fmt=png&from=appmsg)

式中，Ip,max 为变压器原边的最大工作电流，A；Ip,min为变压器原边的最小工作电流，A。变压器输入总功率Pin见式（4）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNV9EQXGNtutr2MFeS6zicfzmiadHoy0CAQPSQC47ibXdJSIpCiaZ9t4ibLu3nXibMam1t1znsXrQ6KgFP9QuU0gUGZoJndNf0nEia7Bo/640?wx_fmt=png&from=appmsg)

变压器选择连续模式（Continuous Current Mode，CCM）设计，令Ip,max\=3Ip,min，可求得变压器原边电流。由式（3）和式（4）得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNQ4TNLvOfVYdmn6LicvHpPricicBmeMKicMl6OrsYxy4hKuavbicb9Jp6xrl9qTV7u8NibUNoLL26ge1gLib28yc0H0icUvG1GAlQkia90/640?wx_fmt=png&from=appmsg)

由式（5）可知，Ip,min 约为0.6 A。由式（6）可求变压器原边电感量Lp。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMeQkSbzUuetT8hibVqQn3P2UoARDl5KcEoUHa5MuqwQjkvxqSRHvdIO5ibia20qeLXQibx4LNgL1I5ajEYo6reRmp2k4RKOpYsO2U/640?wx_fmt=png&from=appmsg)

式中，Lp 为变压器原边电感量，mH；∆Ip 为原边电流变化量，A。  

根据CCM 设计得到：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP96nERNDjdhToxHLdSbmK0Noa9ibB78hmmPzJ1iaXbJfcPFQ5WxEkia4ibEho4qB2o1ehicxGKh2YLB779klRhw7IDv0aXg61dgfmk/640?wx_fmt=png&from=appmsg)

将式（7）带入式（6）中，可得Lp为0.98 mH。  

本设计采用面积乘积法（AP 法）选取磁芯参数。Ap 为变压器磁芯的有效截面积与窗口面积的乘积值，Ap计算公式见式（8）。式（8）的各项变量均为高频变压器设计的核心约束参数。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNYkicZ6cu7iae4G9IQgsekySCM8ZKBcVxJI7TIZuwnlOFCyn0ksqq4vN3gloicVHVjpt8H05OeWCWpsxdtQdhNh2n5hhEkMwD8D4/640?wx_fmt=png&from=appmsg)

式中，Ae 为磁芯有效截面积，cm²；Aw 为磁芯窗口面积，cm²；Bw 为最大磁感应强度，T，一般取值为0.1～0.3 T，本设计Bw取0.2 T；Ok为窗口面积利用系数，根据安全标准的要求和输出路数确定，一般取值为0.2～0.4，本设计Ok取0.3；Kj为电流密度，其取值为200～600 A/cm²，本设计Kj取400 A/cm²。将已知数据带入式（8）中，得Ap 为1.379 cm⁴。为留有一定裕量，选用锰锌铁氧体磁芯EE3825，该磁芯的电感量系数为2600 nH/N²，磁芯有效截面积Ae为84.80 mm²。  

变压器原副边匝比n 为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNPp4zEMHBnNo3SLoO6q7465MH6SibibwQhYUEkFTPXwGCaHl1OsW190NAdDaWwMV2qmsaRWQAib8IlpTbhX5sOoVmMjwIR02JBqc/640?wx_fmt=png&from=appmsg)

由式（9）计算可得，变压器原副边匝比n 为3.25。变压器原边绕组匝数Np见式（10）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPrRhI5icWxgqgRSlgNM2sxicGia0gicSQmLdTQOsAdmxDKuup2hOyT3AGOic2jIQgzyKnnKp0iaDXhtAxATEUBXuQ9XpbZ2Za3zOXzI/640?wx_fmt=png&from=appmsg)

由式（10）可知，Np约为104 匝。为避免变压器磁芯饱和，在磁回路中加入适当的气隙，变压器磁回路气隙lg计算见式（11）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNoWibsuTficyibxjzLgjnIwwZEB6LzFhEZVibEUXiaSg4kL0CuKcmg0D5bpJx7GTxiaWyHibKm990FX8QXqwltXQhtz5h0NrYdpPxvO0/640?wx_fmt=png&from=appmsg)

由式（11）可知，lg约为0.12 cm。通过输出直流电压Vo、变压器原边绕组匝数Np、变压器原副边匝比n 和变压器辅助绕组输出供电电压Va，可计算出变压器副边绕组匝数Ns和变压器辅助绕组匝数Na\[见式（12）\]。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO3gPibHJHUnuamO5mPYIauwGeGiahrY5pibA0CYSnRuG4freYoxWkprQQWQQPjBXtUkgtCQMf6vj6gvXWEnI5r3ibOlicc04VGvLdE/640?wx_fmt=png&from=appmsg)

将已知数据带入式（12）和式（13）中，可知变压器副边绕组匝数Ns为34 匝，变压器辅助绕组匝数Na为6 匝。  

 2.2 EMI 滤波及输入整流电路 

EMI 滤波电路用于抑制共模与差模干扰，以提升系统的电磁兼容性。其中，共模干扰由两级电感值为24 mH 的共模扼流圈（GM1、GM2）抑制。该扼流圈采用对称磁芯结构，在同相电流（共模电流）激励下呈现高阻抗，可有效衰减射频共模干扰。差模干扰通过2 个47μH 的差模电感（L1、L3）与3 个2200 pF的薄膜电容（CX1、CX2、CX3）构成π 型LC 低通滤波器进行抑制。该电容在高频段呈低阻抗特性，可为差模噪声提供低阻抗旁路通道，同时满足绝缘、耐压及介质损耗（小于0.1%）等设计要求。  

滤波后的交流信号经整流桥转换为脉动直流，再由滤波电容C1平滑输出。C1选用固态液钽电容，其具备优异的高温稳定性与较低的等效串联电阻（Equivalent  Series Resistance，ESR），可有效降低输出电压纹波，提升直流输出的稳定性与噪声抑制能力。EMI 滤波及输入整流电路原理见图2，其中，ACL、ACN 分别为交流输入的相线与中性线；Vdc 为经过整流桥与电容C1滤波后的输出直流母线电压，V；L 与N 分别为直流输出的正极与负极。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPvUjrAgyCkicicxmxaMQqhQocVczhk95H5RcQvJHaHxa4WA2HlJc4FiavOaxlUfkj28RBL52ZPDNwqWuxfb1sl13y3nIYJqPIyVI/640?wx_fmt=png&from=appmsg)

2.3 PWM 控制电路设计  

本设计中的PWM 控制电路选用高性能电流模式控制芯片UC1843。该芯片具有启动电流小、外围电路简洁、应用成熟度高等优点，其额定工作温度等级满足军品级温度（−55～125 ℃）。在前期器件选型阶段，本文对UC2825A-EP、UC1825A-SP、ISL8843A等多款满足军品级温度等级的电流模式控制芯片进行对比分析。基于芯片的拓扑兼容性、资料完备性、供应链稳定性以及成熟应用经验等多维考量，最终确定UC1843为本研究的控制芯片。需要说明的是，控制芯片UC1843标注的最高温度为125 ℃，这仅代表厂家在军品级条件下完成的最高可靠性测试温度。本设计采用非额定温度扩展应用（Out-of-Spec Application）策略，通过系统级热设计与优化措施，在3 套电源样机上开展了累计超过500h的175 ℃高温环境测试。结果表明，在本电源所需的特定高温工况下，控制芯片UC1843 能够保持稳定工作，满足深井油气测井等极端工况对反激式AC-DC 开关电源的性能要求。 

PWM 控制电路由振荡器、误差放大器、电流检测比较器、输出驱动级及多重保护模块组成。其核心功能是根据输出电压的变化动态调节MOSFET的占空比，从而实现电源输出稳压。控制芯片UC1843 的内部结构见图3。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPmllslF7HhlDaLpPOpCjw3GX2QEJClCeWjx4pF3F44VpcblVe3M6tfBTtciaUQ2KkM1MFYND3Ux0yskW4ey1lnTg3icUMzAdMN4/640?wx_fmt=png&from=appmsg)

PWM 控制电路的工作流程：当输入端经整流滤波后为控制电路提供直流供电，且芯片供电电压（VCC）超过欠压锁定阈值（典型值8.4 V）时，控制芯片UC1843 启动。芯片内部振荡器的工作频率由外部电阻（RT）与电容（CT）设定，本设计设定为100 kHz。通过连接在基准电压（Vref）与RT/CT端之间的电阻设置充电电流，而电容器经由RT/CT端接地实现放电，从而形成稳定的振荡周期，其频率fosc计算见式（14）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPJ1rOlX90DeI1qoMfRe3w9ib3PCc8OMCiaTAibupiasliaE2wmJ2x5iaibCxCRVibozYKv9cLTmSseFmeLyOKgkeBc8OpaCl5cibB3BNEI/640?wx_fmt=png&from=appmsg)

式中，RRT 为定时电阻器的阻值，Ω；CCT 为定时电容器的电容，F。根据UC1843的芯片工作手册可知，RRT一般取值5～10kΩ，CCT 一般取值1～100nF。本设计CCT取值2.7nF，根据式（14）可得，RRT为6.2kΩ。  

输出端电压经光耦反馈网络传入芯片，与5 V 基准电压进行误差比较，比较结果经误差放大器处理后输出控制信号。误差放大器补偿端（Compensation，COMP）与反相输入端（Voltage Feedback，VFB）之间连接补偿网络，由补偿电阻RCOMP（1 kΩ）与补偿电容CCOMP（3 nF）串联构成，其参数根据经验及工作手册推荐范围选取。在主开关管导通期间，其漏极电流经电流采样电阻转换为电压信号，通过电流采样引脚（IS 脚）送入芯片，与PWM 比较器中的锯齿波叠加，触发脉宽调制信号以实现精准关断，完成单周期控制。  

 2.4 输出整流与滤波电路

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNATggmzg8Nbh1iabxdkFic4AI6yeznzqIdKjhu3GQy6BufefD4FVqVk8yKs2KbDO6RcfDvQGWutPuE29xrpC5fK2Jju0WHraF4w/640?wx_fmt=png&from=appmsg)

输出整流与滤波电路用于将变压器次级感应电压转换为稳定的直流输出，并抑制开关噪声与高频纹波。输出整流与滤波电路原理图见图4，其中，Q1 为反激式变压器；GM3为共模扼流圈；LGND为输出侧参考地。  

在本设计中，为提升输出电流能力，输出整流采用4 个快恢复二极管（D3、D5、D6、D7）并联结构。次级输出的脉冲电压经整流后，通过并联电容C5（0.1µF）快速吸收尖峰电压，R5（1kΩ）作为阻尼电阻，用以抑制电容充放电过程中的振荡。主滤波电容C6（100µF）和辅助滤波电容C7（100µF）用于储能与平滑输出直流电压，可显著降低输出纹波和负载依赖波动的影响。为提升系统电磁兼容性，输出端引入24 mH 的共模扼流圈GM3，以抑制可能回传电网的共模噪声。此外，R1（100kΩ）作为泄放电阻，可防止电源关断后残压滞留于电容，确保系统安全性。该电路结构兼顾了高频效率、输出稳定性与抗干扰能力，适配于测井设备严苛的高温、高要求环境。

2.5 反馈电路设计  

反馈电路主要包括光耦隔离与磁隔离两种方案。光耦隔离电路结构简单、元件少，便于小型化和调试；磁隔离虽具有材料选型灵活、耐温范围大等优势，但电路复杂、调试难度大、散热性能较差，不利于高功率密度设计。综合考虑性能与实现难度，本设计选用日本东芝公司（TOSHIBA）的线性光耦TLX9300 与可控稳压精密源TL431 构建隔离反馈电路，该器件可在175 ℃环境下稳定工作，满足高温应用需求。反馈电路原理图见图5。反馈电路通过TL431输出误差电压控制光耦导通，实现输出电压与原边直流电压的隔离调节。设输出电压为72.0 V，TL431 的内部基准电压Vref 为2.5V，偏置采样电阻R35 与R36构成输出电压的采样分压网络，其中，偏置采样电阻R35 为68.00  kΩ，经分压计算得偏置采样电阻R36 约为2.43  kΩ。为确保TL431 在动态调节过程中始终满足最小静态工作电流要求，设置其工作电流为1.2 mA。由于偏置电阻R29与光耦原边发光二极管并联，其两端电压即为发光二极管的正向导通压降（约1.2 V），由此可得偏置电阻R29\=1.2V/1.2mA=1kΩ，此参数设计确保了反馈电路的稳定可靠。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQpJkMiaibnhkpetXTia1rLQcNfSlpIluKfm72nEYqsoFzEZrAVIL5F1kyeh10DiaB704Wh3oKkfplQPMiafgEYwqWFUP7QQ180kYE/640?wx_fmt=png&from=appmsg)

2.6 启动电路设计  

为保障系统在高温条件下实现可靠启动，本设计采用基于源极跟随结构的启动电路（见图6）。其中，Vin 为输入电压；L1 为主变压器辅助绕组；Q3、Q4 为MOSFET。  

启动电路启动过程中，次级输出的脉冲电压经整流后，经高阻分压网络R14（880kΩ）与R23（68kΩ）提供控制电压，驱动MOSFET Q3导通。Q3源极输出的电流经限流电阻R24（1kΩ）向PWM 控制器提供启动电流，实现系统预启动。同时，稳压二极管D14（18V）对Q3栅极进行钳位保护，防止栅极过压。  

系统进入稳定工作状态后，主变压器辅助绕组L1 输出的电压经快恢复二极管D10 整流、电容C10 滤波稳定后，作为控制器工作电压VCC。该电压同时触发稳压二极管D11（24 V）导通，使MOSFET Q4 开启，将Q4 栅极电位拉低，从而关断Q4，使启动电路退出工作。该电路实现了启动与关断的自动切换功能，既提升了系统启动可靠性，又减少了额外功耗，适用于耐高温场合下的开关电源启动需求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQcFKbqCTY1TJ4d2bOkkOk5x4UiaTOhK9BzwrWwsdxkvNQKNQ6ZXkvn7cp3dE0zwvPLRrScx3tQbwlWlScxQmEaLa42vlz4yH0/640?wx_fmt=png&from=appmsg)

2.7 保护电路设计  

针对MOSFET 关断过程中产生的瞬态电压尖峰及高频变压器漏感能量回收问题，本文提出基于电阻、电容和二极管构成的无源钳位网络（ResistorCapacitor-Diode，RCD）优化设计方法。该电路通过吸收电容C2 与泄放电阻R2 的参数协同配置实现双重功能：①吸收电容的容值直接影响漏感能量存储特性与电压尖峰抑制效果；②泄放电阻的电阻值需满足功率器件电流极限约束，并与PWM 逆程周期内C2的放电时间常数相匹配。经计算R2为6.7 kΩ，C2为5 nF，D4 选择快恢复二极管以缩短反向恢复时间。RCD 钳位电路原理图见图7。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN98ZlQVXqWojibBAx7QJWUtDufN6ia2nSFIHsEiaYmKP9knLDOqzzUMyPXenxhWSYkCAUlJeam74kOUnFjicTocYVibCCcaez0rXek/640?wx_fmt=png&from=appmsg)

3\. PSIM 仿真测试

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMZibl8lhJ7DNPZhXXvykicDo0JE3D9UGQrgHzuFBQgMFZp8ic3KiaCicyK5iaVTtMBQUtTibZlsdn0xyHw7JexkgfSxCj9NPH4yPh2VM/640?wx_fmt=png&from=appmsg)

为验证所设计电路的可行性，本文采用电力电子仿真软件（Power Simulation，PSIM）搭建基于控制芯片UC1843的单端反激式开关电源仿真模型，输入交流电压220V。由于PSIM自带器件库中未包含UC1843芯片，仿真中选用功能相近的UC3843芯片作为替代器件进行分析。开关电源PSIM 仿真原理图见图8，其中，Vg 为PWM 控制芯片输出端测量电压；Ics为输入到IS引脚的电流采样信号。图8中整个电路由整流滤波、RCD 钳位电路、高频变压器、输出整流与滤波、辅助供电、PWM 控制电路以及反馈电路组成。为便于理解，将其分为主功率级电路、PWM控制电路、反馈电路这3 个子电路模块。主功率级电路输入交流电压220V，经整流滤波后转换为直流电压供给主功率级电路，次级输出端经整流与滤波后得到稳定的72V 直流电压；PWM控制电路以UC3843 芯片为核心实现PWM 调制与占空比控制，通过驱动功率MOSFET实现能量传递与稳压调节；反馈电路将输出端的电压信号进行采样，经隔离网络反馈至PWM控制芯片的对应引脚，从而闭合整个电压调节环路。  

反激式开关电源PSIM 仿真结果见图9，图9 中采样频率为100kHz。由图9（a）可见，系统启动时输出电压快速建立，经约0.05 s 的动态调节后进入稳态，期间存在微小过冲。稳态输出电压平滑，稳定在72V，无明显低频纹波且稳态误差极小。由图9（b）可见，PWM驱动波形为规则方波，高电平幅值约为13V，足以保证功率MOSFET的可靠通断。根据波形测算，实际开关频率约为92kHz，与外围时序电路（RC）设定的理论值100kHz 略有偏差。该偏差主要由控制芯片内部比较器的传输延迟及振荡器充放电死区时间引起，属于工程上的合理误差范围，不影响系统的稳定运行。综合波形分析表明，该开关电源设计方案拓扑结构正确，控制环路参数配置合理，各项电气指标均满足设计要求。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMYzQ7OemfhXxUlMvnX5xoFibFhxOwfnKIOrqWndGTgfr8XtTueOsNhwVmXRj3CSDSP78fMMzO91Dlica13Pu2B2pGicutUU99ic9E/640?wx_fmt=png&from=appmsg)

4. 散热设计  

AC-DC电源模块主要发热器件为变压器、功率开关管和整流器件。为确保该模块在175 ℃高温环境下长时间稳定工作，需从工艺与结构方面进行热设计优化，具体措施如下。  

（1）焊接工艺设计。采用三元无铅合金（Sn96.5-  Ag3Cu0.5）作为主要焊接材料，其熔点约为217 ℃，该材料具有良好的高温可靠性和抗蠕变性能。焊接过程基于厚铜印制电路板（Printed Circuit Board，PCB）（铜厚≥70 μm）及厚膜混合集成电路工艺，整体工艺流程包括元器件预处理、助焊剂施加、回流焊接、冷却固化与后焊接检查5 个步骤。  

（2）壳体结构设计。反激式AC-DC 开关电源模块结构见图10。AC-DC模块内部结构分为控制板和功率板。为便于高温测试及散热，采用硬质氧化外壳封装控制板和陶瓷基板，封装后整体外形尺寸为338 mm× 57 mm×30 mm。其中，变压器、功率开关管等功率器件表面贴装在陶瓷基板（功率板）上，控制芯片等器件则贴装在控制板上，在实现小体积的同时有效增大了散热面积。最后采用导热硅脂对整个模块浇灌，增强电路导热能力，减小器件热应力，从而满足175 ℃高温环境下长期稳定工作的需求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNN1LRdcpv9J9bV4eBTJVy2NnQGxT0l0EfhgoHUEuibLuRWSeBgOlO12bJHGEagCNiaXW42icUethE46aEG7RB7SVia2Uv2MCvQLnc/640?wx_fmt=png&from=appmsg)

5. 实验结果及分析  

为验证仿真设计与结构热管理方案在实际高温环境下的可靠性，对本文设计的AC-DC模块进行175 ℃长时间高温模拟测试。测试前，先在常温条件下对电源满载输出特性进行基准测试。测试采用示波器探头直接连接AC-DC 模块输出线进行测量。由于输出线需从恒温烘箱内引出，引线较长，探头与输出线构成的环路面积较大，可能导致测量结果引入额外噪声，因此，该纹波结果仅供参考。测试波形如图11 所示，该电源在满载时输出电压能稳定在72V，波形无明显低频波动；输出电压纹波约46mV，幅值较小，常温下输出满足设计要求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPGOxQjfVBqxmNmodfCjoJzIOUIA9r07vnFll3lQwer1mSs7vxOqVCic9y9DgOsZITamuFnsvqDqlRic5Gm4VbkrMnbccaKmteE8/640?wx_fmt=png&from=appmsg)

为模拟井下恶劣工况，对电源模块进行了变温与恒温两阶段可靠性测试。首先进行升温测试：温度从25 ℃逐步升高至175 ℃，步长为25 ℃，在每个温度点保温30 min 后进行电气参数记录，以评估电源的温升稳定性。随后进行高温老化测试，在温度达到175 ℃后保持恒温，每小时采集一次数据，持续100 h。为直观展示长时间高温应力下各项参数的变化趋势，将测试数据绘制成折线图（见图12），AC-DC 电源模块加温数据的统计结果见表1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNLJ5SXaHacz9KokDIgr4l3koNxJ13xMrMiaIkYOKznh9vgRzD2XXALWkQ8iaXrdQcBu85ZMPtiagRG0rKKoPrjL0mplY8AJID1F0/640?wx_fmt=png&from=appmsg)

  
从表1可以看出，随着温度从25 ℃升高至175 ℃，电源效率从87.525%提高至88.632%（见图12），电源模块在温升过程中显示出良好的热稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP9LErzp3MqBqiaXib9d5DZVFzO9xRfLGqNQTYs3RQeP9FCFR9EGTAyR4lbbDFK0pUFKcYalRat3LV6qicRibABdiaCveibZEEHsJU1I/640?wx_fmt=png&from=appmsg)

虽然温度升高对输出电压有轻微影响，但效率的提升表明该电源模块在高温下仍能保持较高能效，验证了其在宽温度范围内的可靠性和适用性。在整个100h高温测试过程中，AC-DC电源模块的输出电压始终保持在（72±1%）V 内，最小输出电压为71.587 V，最大输出电压为72.752V，波动范围较小。随着温度的升高，输出电压和功率均略有下降。当温度升至175 ℃并持续加温40 h 后，输出电压逐渐趋于稳定，AC-DC 电源模块进入热平衡状态，输出电压、功率及效率基本保持不变，表现出良好的高温稳定性（见图13）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO6EwSAibWEV6AdNx3tVZ1qicSut8ueIT1c9Y6ofVRaAYhicgRlbjY7Rlic4Vt8EdbN9axibF2o3fib6G2A5sBicOZINumRIJp9o6vHcU/640?wx_fmt=png&from=appmsg)

AC-DC 开关电源在175 ℃时的电压线性调整曲线见图14。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM4Zt7XHJ6gPNmjZibwDOFZl8b1p0TIsLTboNIYOuaGU6Co5SLm8WxkiboFRaAuAkoekIia0XwXf5gfGYMkda2MVFLbzgIZUmJOzg/640?wx_fmt=png&from=appmsg)

该曲线展示了AC-DC 开关电源中输出电压随输入电压变化的比率，即线性调整率，这一比率反映了输入电压变化对输出电压稳定性的影响，是评估电源在不同工作条件下稳定性的关键指标。线性调整率M 计算见式（15）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO0rmbbmCLtFenRJHaXgnqV4C149JEsExRulicAk6jrepHHMibhYjkgdEg4iaZ6iaGOmUqbEIQDTonk5cybp19844xQmkD959QBmRg/640?wx_fmt=png&from=appmsg)

式中，ΔVout 为输出电压的变化量，V；ΔVin 为输入电压的变化量，V。

由式（15）可知，AC-DC 开关电源在175 ℃高温环境下的线性调整率为0.09%。这一结果表明，尽管环境温度高达175 ℃，电源仍能有效抑制输入电压波动对输出的影响，维持稳定的输出电压，满足高温环境下对电源稳定性的要求。  

6. 结论  

（1）针对深井石油测井仪器在极端高温工况下对大功率、高可靠系统电源的需求，本文研制了一套耐高温175 ℃的AC-DC 开关电源模块，从拓扑架构、电路参数、热管理到实物测试进行了系统性验证。在系统总体方案设计方面，确立以单端反激式拓扑与电流模式控制芯片UC1843 为核心的电源架构。该方案利用反激电路的电气隔离特性与PWM 调制优势，实现了宽压输入向低压稳定输出的高效转换，为耐高温电源系统奠定了高可靠性的拓扑基础。  

（2）在电路模块设计与参数优化方面，AC-DC开关电源模块采用面积乘积法完成高频变压器的参数计算与选型；并针对性地优化了EMI 滤波、基于高温光耦TLX9300 与TL431 的隔离反馈回路、自适应高温启动电路及RCD 无源钳位网络。各项参数有效兼顾了系统的瞬态响应性能与关键元器件在高温下的降额安全裕度。  

（3）在PSIM 仿真测试方面，AC-DC 开关电源模块构建完整的电源闭环系统模型。瞬态仿真结果证实，系统输出电压响应迅速且无明显低频波动，稳态电压精准维持在72V；主开关管驱动波形规则，实际工作频率约92 kHz，与理论设计值及工程容差高度吻合，验证了控制环路逻辑的正确性与理论设计方案的可行性。  

（4）在散热设计与工艺封装方面，AC-DC 开关电源模块采用热匹配性优异的陶瓷基板与厚铜PCB混合集成工艺，并优选高液相点（温度217 ℃）的Sn96.5Ag3Cu0.5 三元无铅合金作为主要焊接材料。辅以导热硅脂整体灌封技术，显著降低了系统内部的热阻，保障了功率器件在175 ℃高壳温下的长效热稳定性。  

（5）在实验结果及分析方面，实物样机在175 ℃极端高温环境下顺利通过了100h的连续加温老化测试。测试数据表明，系统输出电压稳定在（72±1%）V以内，常温满载输出纹波约为46mV，电压线性调整率低至0.09%，且高温下整机能量转换效率高达88.632%。各项电气指标与热稳定性均满足深井测井工况的严苛要求，具备良好的工程应用价值。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNLib13MQibOzrbjwyGK0q1spGlKibPeyLZxE0sqo4ku1bOISbFrysgBMyoNwCL1Yic0FxCpk6maiakJflJxeQdsbtqymHKaiax7SvZg/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSQDpCdBm0PI4icrR77QJTG0WZSdaziajTpjYiaia7icOtK138seuyPkbc4icT4ibEfTo43QGjOGgBeMTpiba64C8lCPoQ4kCcUicpIO5U/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPnO5Yd0flwhBRLjZKLc9oY6mqohltvEYo4DDveibEx1AYNjkLiciazPicYkicAlcZlrWzoYCLhIp31lOOKKkHibYHjKCDlx1DFrxTzk/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP1Kl5KbJkibiangUN1W1niaGtylmkxvw0CVibeFh8JDjdNMnxxknFIJQJT7cRUI6kWfsYGXZeFCOEKrevjNXgxS1k8Dlef1WHVOmM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)