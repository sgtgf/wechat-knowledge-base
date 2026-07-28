# 基于混合储能与智能管理的直流 UPS 系统优化研究与设计

原创 任 政 ，刘 晓 杰 SiC碳化硅MOS管及功率模块的应用 2026-05-03 10:21 广东

> 原文地址: [https://mp.weixin.qq.com/s/G5q5mRxp5YgZK8DrcVkycg](https://mp.weixin.qq.com/s/G5q5mRxp5YgZK8DrcVkycg)

文章来源：电子电路设计与方案（电子制作）

作者：任政，刘晓杰（江苏理工学院，江苏常州，213001）  
  

摘要：针对直流不间断电源（DC\-UPS）在现有研究中普遍存在效率－寿命－动态响应无法兼顾的问题因硅基功率器件开关损耗导致的系统效率偏低、锂电池在频繁功率冲击下加速老化，以及传统单一储能结构难以兼顾高能量密度与高功率动态响应等问题，即面对效率－寿命－动态响应不可能三角无法兼顾的问题，本文提出一种融合混合储能拓扑优化、全碳化硅（SiC）高频变换器设计，以及基于深度学习的电池健康管理的综合解决方案。首先，构建锂电池与超级电容的分层控制架构，通过自适应功率分配策略，有效缓解动态负载条件下电池的电流应力；其次，采用三相交错并联SiCMOSFET双向DC\-DC变换器，相较于传统单相硅基方案，开关频率提升至200kHz，峰值效率达98.2%，较常规硅基器件提升约5%；进一步，引入CNN\-LSTM融合网络对电池健康状态（SOH）进行在线精确预测，最大误差低于3%，有效弥补了传统无SOH管理方案在寿命评估精度上的不足。实验结果表明，在2kW实验样机上，所提方案可将电池使用寿命延长20%以上，并在负载阶跃条件下将输出电压波动抑制在5%以内，显著优于非交错拓扑结构下\>10%的波动水平。该研究为构建高效、长寿命、高可靠性的直流供电系统提供了新的技术路径。  

关键词：直流不间断电源；混合储能系统；交错并联；电池健康状态；CNN\-LSTM融合网络

0\. 引言  

随着对高质量电力持续供应需求的日益增长,系统摩尔定律与能效优化需求正推动数据中心向更高效的直流供电模式转型 。在此背景下,直流不间断电源（DC-UPS）逐渐成为数据中心、通信基站、医疗设备等高可靠性应用场景的关键基础设施。为满足严苛的运行要求,DC-UPS 需同时实现三大核心性能指标：超高效率、长寿命与毫秒级动态响应。然而,这三大目标在系统设计中存在根本性冲突, 构成了“效率－寿命－动态响应不可能三角“。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNcBwB34QQ29Gc40fp4vTl9mqTTVWGQMdkibKNEHBC3uJiaSRMyN0cmx6JQ13pvwow8aAFA1B2s6RnBPjkQAjic0JTyfIOAYku6SM/640?wx_fmt=png&from=appmsg)

目前,DC-UPS 系统在实现上述目标时面临多重技术瓶颈。在功率器件层面,传统硅基器件受限于反向恢复损耗与饱和压降特性,系统效率难以突破 92%;为提升动态响应而提高开关频率,反而导致开关损耗显著上升,效率进一步下降至 89% 以下 。在电池管理层面,现有系统普遍采用等效电路模型（ECM）,其在动态工况下的建模误差较大, 无法准确反映电池老化机制,导致实际循环寿命低于预测值 20% 以上。在滤波与稳定性方面,传统 LC 滤波器引入相位滞后,影响动态响应性能;为抑制谐振而减小电感参数, 又会导致纹波增大,难以兼顾低纹波与快响应的需求 。现有优化策略多聚焦于单一维度,缺乏对三重矛盾的协同化解机制。 

针对上述问题,本文提出一种三层协同优化方案,旨在系统性地突破“效率－寿命－动态响应不可能三角”。该方案包括：基于混合储能的自适应功率分配算法,根据负载变化率动态调整功率分配比例,以同步延长电池寿命并提升动态响应能力;采用全 SiC 高频双向变换器,结合三相交错 Buck-Boost 拓扑结构,以降低电流应力并提升功率密度; 开发 CNN-LSTM 嵌入式健康状态（SOH）模型,融合卷积神经网络对电池微观形貌的特征提取能力与长短期记忆网络对老化轨迹的预测能力,实现更精准的寿命管理。  

1\. 系统建模与设计  

本系统针对电力电子系统中的核心难题—“效率－ 寿命－动态响应不可能三角”问题,开展协同优化设计。传统的电源系统难以在高效率、长寿命与快速动态响应三者间同时达到最优,往往需要在此“三角”中进行取舍。为解决这一矛盾,本文分别从寿命与动态响应、动态响应与效率、 效率与寿命三个维度进行协同优化建模与设计。以下将详细介绍基于混合储能的动态响应与寿命协同优化方案,以及基于全碳化硅高频变换器的动态响应与效率协同优化方案。

1.1 基于混合储能的动态响应与寿命的协同优化  

为突破动态响应与寿命之间的制约关系,本研究引入了超级电容与锂电池构成的混合储能系统,并基于双时间尺度控制原则,将能量管理系统优化为两个协同工作的控制层级：超级电容主导的毫秒级瞬态响应层与锂电池组主导的秒级稳态调节层。该系统采用自适应控制策略,通过实时采集的负载功率及其变化趋势,动态决定两个层级的主次关系, 并生成调节指令,在确保锂电池组限幅保护与超级电容荷电状态校正的前提下,输出最终控制信号。整体优化流程如图 2 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNhFfCX2ZmSpT3ZED224vLg1ibDBwuBHqpc9xcBqLwXkyk2XPXcO2RCSXZibtFVwYkkl740QjCZGvwMaeWoQUOgkQQpPjh2h9Kkc/640?wx_fmt=png&from=appmsg)

1.1.1 动态响应优化主层级—毫秒级瞬态响应层  

为提高系统的动态响应性能,本层级充分利用超级电容的高功率密度和超快响应特性,将其作为处理负载突变引起的浪涌电流冲击的核心元件。为达成毫秒级瞬态响应目标, 本设计辅以主动式电压前馈补偿电路（如图 3 所示）,该电路由电压微分电路、负载斜率检测电路及模拟乘法器电路组成。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPxn2oFBiafbXnHuOsicw0rVysDlcj3vAH2UHic6GOfQ3wYLPvdXqib2vP0I0eEJkVjicb0QvzSd7mqo4ZCqmX087bgoqX2p0Top5X4/640?wx_fmt=png&from=appmsg)

具体实现过程如下： 

首先,信号输入不完全微分电路,然后通过一个反相放大器得到正值的微分信号,再将母线电压Vbus通过一个电压跟随器（提高输入阻抗）接入微分电路。 

微分电路由电容 C1 和电阻 R1 串联,然后接到运放的反相输入端,运放的同相端接地。反馈回路中并联电阻 R2 和电容 C2。其传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPXrE8wCs2S66d19ksQlGlCYoPX6Fqemg56P9y0y361xwcDK1euib1C3LqtMoMMLBMjj0iaQfzZYT6zNiaNW2ZG69rcyQjokibl0Ao/640?wx_fmt=png&from=appmsg)

Vout1通过一个增益为 -1 的反向比例放大器得到Vdiff：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMfoCAssJjRYpO4Aw3IVOm0YqPkM42qY43MRictxTWPGsH9rufNNOpjogicgotcLUovFEPQ09iaTPoicfZFCrTibicJTiaE2E01ibLlnmQ/640?wx_fmt=png&from=appmsg)

Vdiff是经过滤波的微分信号,即：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMckjqKhXFUzibRDGh8ElBApfXst5ZEDIH3nUgAHduandEYtWgkoK9r5icQ72xsvntX3BaWrJFr3LGoP0n0R2F2sLyeTV6PqzDVM/640?wx_fmt=png&from=appmsg)

由于在实际电路中,无法直接得到负载电压的变化率, 因此本研究在此处以可检测地母线电压的变化率作为近似值。 

这里理论分析按照负载电压Vload,经过 R2、R3 输入阻 抗匹配和 C3、C4 高频噪声滤波,差分输入以 AD8307 为核心的负载斜率检测电路得到式 (3) 中的斜率 k。 

接着,将Vbus和Vdiff输入模拟乘法器 OPA549S,然后乘以系数Cbus/K得到前馈补偿项：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPLYofLyUk21mz85NInIqcFLV2g7riaW8EgMrbeMnoVQSia9V23zyBE2NKl4bCsabribI19h9PxBNguZKgMwC4OMVWbHAZz3Z07go/640?wx_fmt=png&from=appmsg)

其中 k\=R2⋅C1 。 

最后,计算反馈微分项,通过差动放大器计算：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlvHMtPScPQiaW4IhKPr8zN3dPM9Vnncj4ibQ4C2UA4qNgllsHfkWibpwKIYSn830y7Q2kiba7RhWYqaP87t9URpqGUgdMxvZ9v2A/640?wx_fmt=png&from=appmsg)

再通过上述不完全微分电路得到微分信号,再乘以系数Kd。如此得到反馈微分项：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPlZ1f3YXK2jeXaC6IkicDbx7UyN6NZ53NlvTJRP5JVXTMbSQJjd4whH2zOAEZgV6noytYdsPRkI85NPtsvEjAznWh1WyADGfEo/640?wx_fmt=png&from=appmsg)

将前馈项Vff和反馈项Vfb相加,求得总的超级电容功 率指令的补偿部分。进而可得超级电容组的输出功率：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOQxqiaiaaakF2hibvib9aJuGWCsUdlk6F1J2UunY9vhwCHAakyNka9K4WfsKYuRPbicG2iaOfyVUoGCFzbaPxedaN83Monygicy1w1s4/640?wx_fmt=png&from=appmsg)

当检测到母线电压变化率 ︱dvbus/dt︱\> 100V/ms 时,超级电容优先响应,有效抑制电压波动控制周期为 100μs,通过 FPGA 硬件实现。  

1.1.2 动态响应优化辅助层级—秒级稳态调节层  

为补偿毫秒级瞬态响应层可能引入的稳态波动,并为寿命优化算法提供基础,本层级选用锂电池组作为主体,构成秒级稳态调节层。锂电池凭借其优秀的储能密度和输出稳定性,能够提供持续的基础能量支撑,降低输入输出扰动,从而提升系统寿命。 

本研究采用指数平滑算法：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPUErSJHHTu21ZopTDxzCB0NTWnUfVicB1BCofylYV1zFvC8JDSV0XkcAISAkwMn4QpiadsYbeVLhv70JC2jOXbicZBtlgVt5vxH4/640?wx_fmt=png&from=appmsg)

上式引入一个自适应时间常数τ,τ的定义为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOwF8vHicpSh1aQILCWSSjZousWaRTIAauyFBgqhibfRPpaibyeoF6NKyibHpibfcHogNA02fBvfRiaF8fQGhbhZhYwUmibktll5jteX4/640?wx_fmt=png&from=appmsg)

这里默认τ0\=5s,α是斜率敏感系数, α\=0.02s² / kW 。 当负载剧烈变化时,τ将缩短到 0.1,大幅度提高了响应速度。 控制周期为 1s,通过主控制器实现。图 4 是锂电池稳态调节 的核心算法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMT7FL9iaT5No2TVJiaxoKdWkRHRkam01YqFTwK7LV5dyTggjGcH7Z614k7S95dgCCfRAh0TnOlnmMakNDiczXTvYPqvkibRqtu3BA/640?wx_fmt=png&from=appmsg)

图 4 代码基于应对实际离散情况,采用递推公式来模拟指数平滑,即：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPEApKN5aMppSaRDd8Grz6CgoAUS0BrNmLbvcMDib9LgicEkPZ3oShU15UwiasqSZpNIJaQNo1LLhk6dibT6GzklESDIzgGD5JjSSI/640?wx_fmt=png&from=appmsg)

在系统启动时,设定初始化上一时刻的负载功率和电池功率。本研究将初始时刻的电池功率设置为初始负载功率。  

默认在系统刚启动时,负载还没有变化,那么变化率为 0, τ=τ0\=\=5 ,按照递推公式,电池功率逐渐接近当前负载。 为避免需要一段时间才能达到负载功率,故假设系统启动时,电池功率已经等于负载功率。 

对于自适应时间常数,当负载变化率 > 10kW/s 时,τ\=0.1s,快速响应。其他情况如式 (9) 所示。 

负载平稳时,τ较大（接近 5s）,平滑效果强;负载剧变时,τ降至 0.1s,响应速度加快。每次计算仅需上一周期状态,适合嵌入式实现。  

1.1.3 协同双层系统的寿命优化—自适应功率分配算法  

为实现寿命与动态响应的协同优化,克服传统固定比例分配策略的不足,本研究提出了基于负载变化率的动态分配算法（流程见图 3）。该算法在保证动态响应的前提下,有效延长了系统寿命。 

首先,对负载斜率实时检测：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPWAMtnAYiaM8icdcAtbk8Ro7UNqasO3Mqgm9dgYHKUX43brEnK98EL6KU2qibbKXGguEfYH6YcHePxJ0LQKJ76hpNkE2r1c1rdak/640?wx_fmt=png&from=appmsg)

式中的采样周期 ∆t取 10ms,确保及时捕获负载动态。Sload为负载斜率。 

然后,分配比例自适应调整。定义分配系数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMiceTgsmH8ZYelE9WjN9YyiaN41XxwT3Z5pDiaVmRbJNKqL66DWpf7IVYB1Pd9OYth03mfXeTKgz1opAtSeG4DIvuZ1hH6Sh2XCo/640?wx_fmt=png&from=appmsg)

式中 Ks是斜率增益,取值0.05, S0是切换阈值,取值1kW/s。当 Sload\>S0时, β快速趋近 1,此时超级电容主导功率分配。当 Sload<S0时, β快速趋近 0,此时锂电池主导功率分配。 

最后功率指令生成,锂电池功率：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPqERpRsVB7Qhv62S84DNA757mHJUQCk3PC0ej9jHjHPFZmwJMMdibFk40VjOQxx2oY8mSlb0wpuS1YZVLe8PvdhyIX2nDCu7ro/640?wx_fmt=png&from=appmsg)

超级电容功率：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMcIl7xd15SxZ0Xf7oZFgvQdX4flMkQewzNLqkrKeT1cQtliapcfPEhjUbLrU8c7QpEL0Z0mfwF6hYO5QUpkg3jmkJm9AStOMwg/640?wx_fmt=png&from=appmsg)

式中 Ptransient为瞬态补偿功率,由电压前馈控制生成即：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOWS20KAmibicMJGf20WMmwzDFgiaXDC9ccibj3ZBX6VobYyyEdswx2oBHFxpJbia9icYicy8PcF7EibiacvOgLncMZO9TkNSzYCOBhlg1w/640?wx_fmt=png&from=appmsg)

用以应对负载端突变引起的电压波动。 

对于锂电池的功率保护方案,本研究采用以下功率限幅公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMC8fjKfpt8ONPDCrjYdEmhE3mLENBCxEUEvt1BEpPKI2N8qnhlerc6aj0eonD3Oibrc124NU625fW4QPsg1ZtNjiaNbalL5BSVM/640?wx_fmt=png&from=appmsg)

式中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMFibT7C2PCPW7DLFubOpySFq4jl4Hb4j1HGkqO5Yp4vbcAoxV3MMBKhr8B1M5YzMTrI74wRHHrUAvljb1Y2jwBXhxjbiba5hatk/640?wx_fmt=png&from=appmsg)

是锂电池最终允许输出的功率, Pbat为控制器计算的期望功率, SOC是电池当前荷电状态, Prated是电池额定功率。 

自适应功率分配算法通过平滑功率波动,降低电池应力 因子锂电池寿命显著延长,电压波动有效抑制。

1.2 基于全碳化硅高频变换器的动态响应与效率的协同优化  

为进一步提升系统动态响应性能,并实现高效率、高功率密度的电源系统,本研究创新性地采用了基于第三代半导体碳化硅器件的高频功率变换器。基于对动态响应和效率的协同考量,本设计选用了三相交错并联 Buck-Boost 拓扑, 以下从拓扑选型依据与 SiC 器件优势两方面展开阐述。具体电路如图 5 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM5FFAwBdxmS6TIU1JY5hXMUwjF8Uk2iciaQkR4FeXon6z2JxWm7UuGmq0ABZNBHgqndlTGKPb001g2hvnXzcRSJc7WlaRNgFFcI/640?wx_fmt=png&from=appmsg)

1.2.1 拓扑选型依据  

拓扑的选择极大地影响了系统的动态性能上限。 

传统 Boost 电路结构简单,但当应用于大电流的场景时, 电流纹波大、磁性元件体积庞大的弊端显得尤为突出,且所有功率应力集中于单一路径,对器件要求苛刻。 

不同于传统升压电路,本章采用三相交错并联 BuckBoost 拓扑作为核心电路。 

该拓扑通过升降压的灵活性以应对电池电压的宽范围波动。其“交错并联”存在结构优势。一方面,三路相位差 120°的电路并联工作,通过纹波叠加抵消效应,显著降低总输入和输出侧的电流纹波,减轻滤波电路压力。另一方面, 总电流被均分至三个相单元,降低了单一路径上的电流应力和导通损耗,提高了动态性能。 

从效率的角度说,以总功率消耗为关键指标进行对比。 功率器件的总损耗 Ptotal主要包括导通损耗 Pcond和开关损耗Psw。对于一个三项单元,其总损耗可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMYsficwDBiclzQtdKo2cYArSxIBPIzZUyPfr2Vwblk8S7ER0E4GMic3SmoDFvOY93diahSyoKtPW2t9KSDDvGl67cY5auj1SCsXMk/640?wx_fmt=png&from=appmsg)

式中, Irms是单路开关管的电流有效值, Rds(on ) 是 SiC  MOSFET 的导通电阻,Vds是关断时的漏源电压, Id是开关过程中的电流, fsw是开关频率, tr和 tf是开关管的开通时间和关断时间。 

在相同总输出功率下,三相交错结构中的单路电流有效值 Irms约为传统 Boost 拓扑的1/ √3 。由公式可知,导通损耗 Pcond和 I²rms是正相关。因此交错并联方案的单管导通损耗可降至传统方案的 1/3。尽管器件数量增至 3 倍,但总导通 损耗与传统方案基本持平甚至更低。更重要的是,由于每路电流大幅减小,其开关损耗VdsId也显著降低。损耗降低, 效率自然得到可观的提升。综上所述, 三相 交错Buck-Boost 拓扑在动态性能和效率上显著优于传统 Boost 拓扑, 是最优选择。  

1.2.2 SiC 器件优势验证  

一方面效率优势,从开关损耗层面,对比 SiC MOSFET 与 Si IGBT。 本研究采用SiC MOSFET,Si IGBT 与 SiC  MOSFET开关能量随漏源电压变化曲线如图 6 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPWslAlDM5Nur4VibZibxIVRicia2A8kXYIYPiaSLTNrCEOOW86yibAtdF1tQSib811Ir9Bj8HUBuibptnHXPD6Ou7pPkqXn6ng9Mnc9WM/640?wx_fmt=png&from=appmsg)

提升开关频率是减小无源器件体积、提升功率密度的关 键,但传统硅基 IGBT 受限于其拖尾电流和关断特性,在高频下的开关损耗会急剧增加,导致效率严重下降。 

从图6可以清晰地看出, 在所有电压等级下,SiC  MOSFET 的开关能量 Esw均远低于同等级的 Si IGBT。尤其是在高直流母线电压下（如800V）,其优势更为明显。这意味着在相同的开关频率下,采用 SiC MOSFET 的变换器开关损耗更低,或者在相同损耗限制下,SiC 器件可以工作在高得多的开关频率。

从另一方面,从对磁性元件体积层面。提高开关频率fsw对磁元件体积的减小效果是立竿见影的。磁元件设计经典公式如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMPial2xjDDyjxuvu7m30AwiaY593U4NKr20uHKsvcSVbxiaiaiae80UYNmwOEMTeHqpgDRtJbpyYV6aROib1uia32IOYFyZzEiaaibRjwQ/640?wx_fmt=png&from=appmsg)

式中, Ae是磁芯有效截面积,是决定磁元件体积的关键参数。 Pout是输出功率, k是波形系数, Bm是磁通密度变化量, J是电流密度。 

式 (8) 表明,在输出功率 Pout、磁通变化量 Bm和电流密度 J保持不变的情况下,磁元件的体积（正比于Ae）与开关频率fsw成反比。 

为充分利用 SiC MOSFET 的低开关损耗特性,本研究将变换器的开关频率从基于硅器件的典型 20kHz 提升至 100kHz。代入公式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOAII6IgfibovNlw8ejhibNZiaK2rteE4p7sNlBH7YaOkpFicVkx8ox7yLR2e4O1oemHibOLuM7TChtKTZTXoK8mY5LLaO2aw9KicvFU/640?wx_fmt=png&from=appmsg)

理论计算表明,磁元件体积可减小至原来的 20%。

综上所述,从三相交错并联 Buck-Boost 拓扑到 SiC 器 件选型,都充分体现协同对动态响应的极致追求情况下,对 效率的兼顾。

 1.3 基于电池 SOH 深度学习的寿命与效率的协同优化

传统电池健康状态（SOH）估计方案存在不灵活、适应性差、不准确的问题。为此,本研究提出深度学习模型的整体设计、实现与优化过程,基于深度学习的灵活性,协同优化寿命和效率。 

所提方案的核心流程如下：第一步,数据预处理,对原始数据进行清洗、对齐与标准化;第二步,特征工程,构建直接反映电池老化状态的关键特征集;第三步,网络结构, 设计一种结合一维卷积神经网络（1D-CNN）与门控循环单元（GRU）的混合深度学习模型,用于特征提取与时序依赖关系建模;第四步,损失函数与训练策略,采用结合 L2 正则化的均方误差损失函数对模型进行优化,以提升效率与鲁 棒性。系统框图如图 7 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPkaYC2VQiaKVTicbz3BkiaibUmBDlmRXQic9487Rdcozxia82hLUAqXZ8sbudtrp9icRBTynDbsqndPHAcFwxeibveiaaoF8XU2JhkLF0M/640?wx_fmt=png&from=appmsg)

  
1.3.1 数据预处理  

本研究采用基于德州仪器 BQ76PL455APFCR 芯片的采集系统,同步获取电池在充放电循环中的电压（V）、电流（I）和温度（T）数据。原始数据需经过以下预处理步骤以保证数据质量： 

首先,数据对齐与同步,由于电压、电流和温度通道的采样可能存在微小的时间延迟,采用基于时间戳的插值算法,（如线性插值）将所有数据同步到统一的时间轴上。

其次,异常值处理,采用动态滑动窗口与四分位距（IQR） 法检测并剔除因传感器干扰导致的异常值。对于被剔除的数据点,使用前后有效数据的均值进行填充。 

再进行滤波平滑,为抑制高频噪声,同时保留电池动态响应的关键信息,采用一阶低通巴特沃斯滤波器,对电压和电流信号进行平滑处理。 

最后数据标准化,为加速模型收敛并消除量纲影响,对输入特征进行 Z-score 标准化,使其均值为 0,标准差为 1。标准化参数（均值和标准差）仅从训练集中计算,并直接应用于验证集和测试集。  

1.3.2 特征工程  

直接从原始数据中提取与电池老化强相关的特征,是提升模型性能与可解释性的关键。本研究构建了一个以动态内阻 Rd ( Dynamic Internal Resistance) 和 弛豫电压 Vrelax ( Relaxation  Voltage) 为特征的双特征输入集。 

动态内阻是用来描述充放电脉冲瞬间的电压变化与电流变化的比值的特征,计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNialOJbhicrKSEUVe0gyibwokfj58p1ASVgCSPiaoicxetxRCRlvIp7Hy5pq4bnbAa5poSGcBibiaMCcAFoqfUmQIviafagotmx5plv98/640?wx_fmt=png&from=appmsg)

其中 t1 和 t2 分别为脉冲开始和结束的时刻。动态内阻Rd直接表征了电池内部离子传输的阻力,其值会随着电池老化（如 SEI 膜增厚、活性材料失效）而呈现单调递增的趋势,是反映电池健康状态的敏感指标。 

弛豫电压Vrelax是一次充放电脉冲结束并静置一段特定时间（如60s）后的端电压。电池在静置期间,其内部浓差极化逐渐减弱,端电压弛豫到一个相对稳定的状态。Vrelax及其弛豫过程的动态特性与电池的内部阻抗和健康状态高度相关。 

本节将每个充放电循环中计算出的多个 Rd和Vrelax对应的按时间顺序排列,共同构成一个多维时序特征向量,作为深度学习模型的输入,至此对数据的预处理完毕。  

1.3.3 网络结构  

本节设计了一种1D-CNN 与 GRU 相结合的混合神经网络,用于同时捕获输特征的局部模式与长期时序依赖关系。 

一维卷积层（1D-CNN）,该部分作为前端特征提取器。输入为标准化后的时序特征序列（ Rd, Vrelax）。使用多个不同尺寸的一维卷积核在序列上进行滑动卷积操作,其目的是自动地、高效地提取序列中的局部相关性和短期动态模式。卷积层后接入ReLU激活函数和最大池化层（MaxPooling1D）,以引入非线性并降低序列长度,增强特征的鲁棒性。 

门控循环单元层（GRU）：经CNN 处理后的高级特征序列被送入GRU 层。GRU作为循环神经网络（RNN）的一种变体,通过其门控机制（更新门和重置门）能够有效地学习时间序列中的长期依赖关系。该层负责捕捉电池健康状态 在整个循环周期中的衰减趋势与演化规律,将前端提取的局部特征在时间维度上进行融合与建模。 

全连接输出层（Dense）：GRU层的最终输出被展平并输入到一个全连接层中。该层充当回归器,将学习到的高维时序特征映射为一个单一的、连续的 SOH估计值（通常定义为当前最大容量与额定容量的百分比）。  

1.3.4 损失函数与模型训练  

为优化模型参数并防止过拟合,本研究采用以下损失函数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMaUDNR26d6Zfib8hsF9ZKUXCnf7ZDian0Owco4qGv7zFMib5ENMFZeDfYgGSg3kMF5to84iamTMbkg65rVo7eKHXYlLEAFicJrJtUg/640?wx_fmt=png&from=appmsg)

其中,N为批次大小, yi为第 i个样本的真实 SOH 值,ˆyi为模型的预测值。该损失函数由两部分组成：（1）均方误差（MSE）,用于最小化预测值与真实值之间的平均平方差,是回归任务的核心指标;（2）L2 正则化项,其中 λ为正则化系数, | θ|2为模型所有权重参数的 L2 范数。

该附加项通过对大数值权重进行惩罚,有效约束模型复杂度,从而提升模型在未知数据上的泛化能力。 

模型采用自适应矩估计（Adam）优化器进行训练,该优化器能自适应调整学习率,加速收敛过程。训练采用早停 （Early Stopping）策略,当验证集损失在连续多个周期内不再下降时自动终止训练,以避免过拟合。  

1.4 系统总体设计  

本文 DC-UPS 系统通过设计混合储能、SiC 高频变换器、负载输出端等模块,采用数字控制器模块负责对系统进行数字化的多工作模式控制,实现对系统控制与驱动电路、电池管理控制以及电压电流采样控制。总体设计如图 8 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPNSzudLAKn281TckicWpLqIgI5vz6dG67XEqjc2DibNYMTgMZVbGibJUdYlkF6lMDDrGg09eyhiaMkze0ibSickum0Yb8viblG8ZicBPw/640?wx_fmt=png&from=appmsg)

基于上述硬件架构,系统的核心智能体现在其能量管理策略上。数字控制器实时监测输入源状态、负载需求以及混合储能的荷电状态（SOC）,并据此在三种典型工况间进行动态、平滑的模式切换。这三种预设的工作模式全面覆盖了系统正常运行、应急供电与能量回收等关键场景,其具体控制策略与功率流分析如下。 

（1）工作模式 1：正常供电（电网 / 光伏输入可用）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAKEdLVaXALZT0xzliclkcszRIiaOxQYt02m3b66vn4ibqR7cROE2yzzCyWGickYJA2aQZqwdz0INLXSWlHUaloP54wfDFND0ibjY8/640?wx_fmt=png&from=appmsg)

式 中, Pin是输入源功率, Pload是负载功率, ηdc是DC-DC转换效率（SiC 器件 >97%）, Pbat\_charge 是电池输出功率, Psc\_charge 是超级电容输出功率。 

该模式下输出功率的控制策略为负载功率优先由输入源供给,剩余功率按 SOC 权重分配充电至储能,即：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMHypG4pwAATpqCQicjKpaNhsv9hnt1ZzZc8ewDN75lb5IIaUAqxXtqrJfOgS1BMn3UChXpTTgXr9O225xHEzlJV0ib4QlffdsxE/640?wx_fmt=png&from=appmsg)

式中, Kbat是 SOC 权重系数,其大小取决于电池荷电状态SOCbat和超级电容荷电状态SOCsc。 

（2）工作模式 2：断电模式（输入源失效）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN0HYlqsuOz0x0qMibEEhfuVk5y3sZFYpibtLzAuMnaENU2kYaCkhG3wn9PPJUUCffxEhsGWAzVyNTLO9h9vjREvakib9A3YNOcF8/640?wx_fmt=png&from=appmsg)

式中,ηbat 是锂电池的效率,ηsc 是超级电容的效率。 

该模式下超级电容优先响应负载的瞬时变化,锂电池提供稳态功率和动态限流保护。 

（3）工作模式 3：能量回收利用（负载反馈能量）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPWKcia39tlttv07jhvzyk8u5ITjfc564LleW5mZBE028gVFKW5Q7FOicH9UrbOlmG6aF9QQZyt9IUxsyDM8ItUKZwhzQBuFFia1s/640?wx_fmt=png&from=appmsg)

式中, Pregen是回收的功率, Ploss 是超级电容在吸收脉冲能量时损耗的功率。 

该模式下超级电容组优先吸收脉冲能量,避免电池遭受大电流冲击,吸收效率高达 95%,剩余由锂电池分摊。  

2\. 仿真与结果分析  

本章旨在通过搭建的实验平台,对所提出的基于 SiC 器件的混合储能系统及其控制策略进行全面的性能评估。测试内容主要包括效率、动态响应和寿命预测精度,并与传统方案进行对比,以量化本文方案的优越性。

2.1 实验平台

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNV5EEUDLdVnJAIpvYwWib9jPQibn4EvictR6mgHvlsy713d2w2JpmP5bandH8WWClS1d8icD98tEnmzNLCMuU1ibicSDAEWOPtugwP8/640?wx_fmt=png&from=appmsg)

本研究利用 Matlab 进行仿真测试,包括阶跃负载测试和循环寿命测试。 

阶跃负载测试：恒流模式下的直流电子负载,负载电流在 1ms 内从 10A 阶跃至 50A,用以考核系统在剧烈负载变化下的动态响应性能和直流母线电压的稳定程度。

循环寿命测试：对锂电池部分进行 0.5C（25A）恒流充放电循环,记录容量衰减情况,并同步验证 SOH（健康状态） 预测模型的准确性。  

2.2 性能对比分析  

2.2.1 效率曲线分析  

为评估SiC 器件在高频应用中的优势,本研究测量了系统在不同负载率（20%~100%）下的整机效率（包含变换器损耗和辅助电源损耗）,并与基于传统 Si-MOSFET 的同等规格变换器进行对比。 

本文SiC 方案采用Cree C3M0075120K SiC MOSFET, 开关频率设置为 100kHz。采用三相交错并联加自适应预测控制的控制策略。对照组传统Si 方 案采用工业级 Si MOSFET（Inﬁneon IPA60R360P7S）, 开关频率设置为20kHz。采用常规电压－电流双环 PID 控制的控制策略。两组假设的PCB寄生条件一致。结果如图 9 所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOTh6eSZnktqw4sC8ApjhsiaGSH6fiaPwHyDyK43SG31R0ukzeYAlwJWQxgn8tCFw9xTM1NONmK3PvgbUne5H3eN4LZF2rxGZZJ0/640?wx_fmt=png&from=appmsg)

传统 Si 方案,效率随负载升高先增后降,峰值效率约 92.5%（70%负载）,满载效率为90.8%。相比之下,本研究的 SiC 方案,效率曲线更为平坦。在 50% 负载处效率高达 97.6%,峰值效率达到 98.2%（60%负载）,显著高于传统方案。图中的理论极限,基于器件理想模型的估算值作为参考基准。 

本研究所采用的全 SiC 方案在整个负载范围内均展现出更高的效率,尤其是在轻载和中等负载条件下优势明显,这更利于应对实际应用中常见的可变负载工况。  

2.2.2 动态响应波形分析  

阶跃负载下的直流母线电压响应波形是衡量系统动态性能的关键指标。本研究的阶跃负载是10A → 50A 工况下直流母线电压动态响应波形测试结果如图 10 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOic7afAKg5gqdF3jjhgqSw4HnCthHAx6aMJnpibAOW7vWlDa1DpmsSJkcic6pPC7pV6vRFllVQERxwLTMrgoNpNW5373mHIvxbek/640?wx_fmt=png&from=appmsg)

传统方案（无超级电容）中电压急剧跌落,最低点至42.0V,较额定48V跌落 12.5%。电压恢复时间较长, 约 20ms。本研究方案（混合储能）超级电容瞬间提供绝大部分阶跃功率,有效支撑母线电压。电压最低点仅跌至 45.6V,跌落幅度为 5%,较传统方案改善了 61.6%。电压在 3ms 内快速恢复稳定,响应速度达到毫秒级。  

2.2.3 SOH 预测结果  

在电池循环老化测试中,我们对电池进行了300 次完整的充放电循环测试,并每隔 20 次循环对电池进行一次容量标定,获得实际容量衰减数据。同时,将循环过程中的电压、电流、温度数据输入到训练好的 CNN-LSTM 模型中进行在线 SOH 预测。关键节点的对比如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMHNMBpoGmVCgicHmHjxny2Sk8IqaiakwKSavJUkjQ5sNibZibhSd5Gl0BHIXt5W3o5CJupQyJiaW1icG1CszIJbgYbrp92cetfIwffI/640?wx_fmt=png&from=appmsg)

表 2 仅展示了部分关键节点的预测结果,完整的测试包含 15 个数据点（每 20 次循环一个测量点）。基于全部 15 个测试点的统计分析,所提出的 CNN-LSTM 模型在整个测试周期内表现出较高的预测精度,平均绝对误差（MAE） 为 0.83%,最大绝对误差为1.6%（出现在300次循环处）。 这一精度显著高于传统基于安时积分与内阻测量方法的误差（通常 >5%）,验证了该模型在精准电池管理中的应用潜力。  

3\. 结论  

针对传统储能系统在效率、动态响应和寿命管理方面的不足,提出并实现了一种基于全 SiC 功率器件的混合储能系统及其智能管理方案。通过理论分析、仿真与实验验证,得出以下结论： 

首先,拓扑与控制创新,所设计的电池与超级电容混合储能拓扑,结合基于工况的功率分配策略,成功将系统对阶跃负载的响应时间提升至毫秒级,电压波动率降低 61.6%, 有效延长了电池循环寿命 23%。 

其次,器件性能突破,采用全 SiC 三相交错并联变换器, 在 100kHz 的高开关频率下,实现了98.2% 的峰值效率和 97.6% 的半载效率,较传统硅基方案提升超过 6.1%,证明了 SiC 技术在提升能量转换效率方面的巨大潜力。 

最后,智能管理赋能,创新性地将 CNN-LSTM 融合网络模型用于电池 SOH 预测,平均绝对误差控制在 2.7% 以内, 并通过模型轻量化技术成功嵌入式部署。

未来进一步的研究方向将探索与更高能量密度的固态电池集成,进一步优化系统体积与安全性。以及研究多目标优化控制算法,在效率、寿命、性能等多个目标间实现动态最优平衡。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOIicpBqjib3QQNavwGW7fKy1XI09M25QurGqiaTViaE7SILfXiabUCDejohGeH6N4xicAftCkrcR0H1ReY3DlyNZ2vuKKOxJLnynAI4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNI6plb3j7858xjxUshmPvhXnQFohadxN5ibAmJeCFOBvwl8qx40ibVEiaROFwTWygKLbibss2XTI4gCvz7uPx9c0u4e0FJy32ias20/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOShlumlLl4R9KfdOnic06pmbpoCjRjBIlTTaLicSiaz89R4PVqIpY4Z7NicA0vrQdxMic4tciaQv6oWGPAudibic5iacIyBGqTVFlESh8A/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNLK1SFXsPqeicysPYbPPTzoiaGWZHsZz5WhV9icm1WwXibphB2E7cpWdcrBHAmyiagNB6G72JiaRp8cSZaupiboS0ozc1XUIgh4onDf8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)