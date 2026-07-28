# 基于扩展谐波的三相 CLLC 谐振变换器同步整流控制


> 原文地址: [https://mp.weixin.qq.com/s/szkbzP\_KAbPairU7D53PKQ](https://mp.weixin.qq.com/s/szkbzP_KAbPairU7D53PKQ)

文章来源：电工技术学报

作者：程鹤，徐恺，董斌，苗赫勋，李朋圣（中国矿业大学电气工程学院徐州 221116）  

摘要：三相CLLC 谐振变换器凭借其高效率、高功率密度和低输出纹波等优异特性，在电动汽车车载充电领域备受关注。该变换器通过切相策略，在负载电流降低时关断一个或两个桥臂，覆盖电池充电的预充电、恒流充电、恒压充电三个阶段，从而有效缓解轻载效率下降的问题。为了进一步提高变换器的效率并实现能量的双向传输，采用同步整流（SR）控制成为必要手段。该文提出一种基于扩展谐波的三相CLLC谐振变换器同步整流算法，通过分析切相策略下三种工作模式的参数特性及驱动信号差异，建立扩展谐波阻抗模型，精确计算不同工作模式下二次侧开关管的导通时间，并利用三阶拟合模型显著减少DSP的运算量。为验证所提算法的可行性，设计并搭建一台基于SiC器件的 2.5 kW实验样机。实验结果表明，该算法在显著提升变换器全负载范围效率的同时，有效抑制了二次侧 SiC MOSFET 的发热。

关键词：三相 CLLC 谐振变换器、切相策略、同步整流、扩展谐波、拟合模型

0.引言  

三相CLLC 谐振变换器因其宽增益、高效率、全负载软开关等优异性能被广泛应用于电动汽车充电领域。随着宽禁带（Wide Band Gap, WBG）半导体器件的应用，高频GaN 和SiC 器件更有利于实现谐振变换器中磁性元件的集成，以实现更高的功率密度和效率。  

对于中高功率级别的充电器，采用交错并联的结构是更好的选择。与半桥和全桥结构相比，三相CLLC谐振转换器不仅可以满足高功率密度、高效率、高可靠性的需求，而且由于其输入和输出电流纹波更小，可以减小滤波器件的尺寸。  

然而，三相CLLC谐振变换器开关数量多、磁性元件多，在轻载时由于过多的开关损耗、驱动损耗和磁损耗，导致其效率下降。文献\[13\]提出了一种适用于三相CLLC谐振变换器的切相方法，通过关断一个桥臂来减小开关损耗和磁心损耗，且无需改变变换器的开关频率。文献\[14\]提出了一种新型的拓扑结构，变换器可以在三相模式、单相全桥模式和单相半桥模式切换，覆盖了电池充电的三个阶段：预充电阶段、恒流充电阶段和恒压充电阶段，使得变换器能够在全负载范围保持较高的效率。然而这种结构需要增加额外的二极管来满足半桥模 式，增加了系统的复杂度和额外的成本。文献\[15\]提出了一种基于三相CLLC 谐振变换器的切相策略，在无需增加额外器件的基础上，变换器可以工作在三桥（3B）、二桥（2B）和一桥（1B）模式， 显著提升了变换器轻载时的效率。  

为了进一步提升变换器的效率，采用同步整流控制至关重要。得益于SiC MOSFET 极低的导通电阻，将二次侧的二极管替换为可控的SiC  MOSFET，不仅能够实现能量的双向流动，还能进一步降低变换器的损耗。文献\[17\]针对谐振变换器的不同SR 策略进行了全面综述和深入比较。文献\[18-21\] 基于基波 分析（ Fundamental Harmonic  Analysis, FHA）法建立了变换器的等效模型，对SR控制策略进行了系统研究，并提出了有效提升效率的方法。  

传统上，基波分析法在谐振变换器的建模中被广泛应用，且在靠近谐振频率时具有较高的精度。 然而，对于CLLC 谐振变换器，当一次侧和二次侧LC 谐振电路的参数不匹配时，谐振频率不再唯一， 从而导致FHA 模型的精度下降。文献\[22\]深入分析了FHA 模型的局限性，并提出了一种基于扩展谐波分析（Extended Harmonics Analysis, EHA）的方法，该方法考虑了方波激励中其他奇次谐波的影响，从而更精确地计算出二次侧谐振电流的过零点。文献\[23\]介绍了一种基于GaN 器件的半桥LLC 转换器的数字SR 控制策略，该策略采用扩展谐波阻抗模型来精确计算导通时间，将转换器的效率提升至98.1%。然而，针对三相CLLC 谐振变换器的SR 控制策略研究仍然较少，尤其是在切相策略下适应不同工作模式的SR 方案尚未广泛研究。  

针对上述问题，本文提出了一种基于扩展谐波的三相CLLC 谐振变换器同步整流算法。针对切相策略下的不同工作模式，建立了扩展谐波阻抗模型，综合考虑了死区时间的影响，精确计算出不同工作模式二次侧MOSFET 的导通时间，从而实现了变换器在全负载范围内的效率提升。此外，利用Matlab对计算所得的导通时间进行拟合，进一步降低了DSP 的运算量。最后，通过搭建实验样机验证了所提算法的可行性。  

1.三相 CLLC谐振变换器切相策略  

电池充电阶段如图1 所示，电动汽车电池充电的过程可以分为三个阶段：预充电阶段、恒流充电阶段和恒压充电阶段。三相CLLC 谐振变换器可以通过切相策略，工作在半桥运行、三相运行和全桥运行和模式来覆盖电池充电的三个阶段，使变换器在全负载范围内保持较高的效率运行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMmaHCrytGKosR6HydLgGCziar743cF5HdkjqdRsz2PSXUnJOSxh81UXAUEQYQHA7fNBbVmOfCbYsCc09iaJGIHr1u66OEl4kjzY/640?wx_fmt=png&from=appmsg)

1.1三相运行模式  

在恒流充电阶段，谐振变换器以三相模式运行，三个桥臂驱动信号彼此相差120°，每个桥臂的上、 下管驱动信号以180°互补导通。拓扑结构和驱动波 形如图2 所示。图2 中，Q1～Q6 为一次侧开关管，S1～S6 为二次侧开关管，TA、TB、TC 为变压器，Lrp、Lrs 分别为一、二次侧谐振电感，Crp、Crs 分别为一、 二次侧谐振电容，Ts 为开关周期。在此阶段，变换器为电池提供恒定的大电流，使电池电压迅速上升。 通过三相模式分担负载，降低开关器件的导通损耗， 从而提高效率。同时，谐振电容以三角形联结方式， 有效地解决了三相CLLC 谐振变换器的均流问题。 此外，由于谐振电容没有直流偏置，有助于实现平稳的软启动过程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN5icGia667kBW1gzGJ9D5siaS9MwrwyqdnEuOXMK3BGmZUFic9P6Mg2icTyg1FyEmyMFeCaIBH5gRpyTE77jOom11Fo1gLJWEbFLKM/640?wx_fmt=png&from=appmsg)

本文采用的变压器电压比为1∶1，一、二次侧结构完全对称，故谐振电感Lr\=Lrp\=Lrs，由于谐振电容采用三角形联结，其值为星形联结的1/3，故谐振电容Cr\=3Crp，三相运行模式时，谐振频率fr 满足

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOm1XbYXIVTKW2FVXm4JR9m7UzOtAuS8ibfIOS93PFGhn4JEzjZQwl2AIm1jbuRSpsAPev9mmyKaKUH8ia1Up1V6RoH9xCjhKzQQ/640?wx_fmt=png&from=appmsg)

1.2全桥运行模式  

当电池容量达到70%～90%时，为防止过充并降低电池的热损伤风险，充电过程进入恒压阶段。 在此阶段，电池电压保持恒定，充电电流逐渐减少， 最终达到轻负载状态。图3 给出了恒压充电阶段的拓扑结构和驱动信号波形。在这个阶段，C 相的一、二次侧桥臂停止工作，其他两个桥臂的驱动信号以180°相移的方式导通。此时，拓扑结构类似于全桥谐振变换器。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMjdj8ExrLiaVqzkT8A1AQHNPYWE2wBib12IUCicW7vxGRJhgt5K7sEdvLCEibgGMfQZuFFcYq8EJ0fLiacw3ickXV4ROum3SSdFxAPU/640?wx_fmt=png&from=appmsg)

图3a 可知，当变换器切换为全桥运行模式时， 其等效谐振电感Lr2 和谐振电容Cr2 分别为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNwWLfjib5SHfW2jnNdZI9RnFl0po3E4OPDO8Ky4DxYUO6Wg5W0dEx4XJQVzTWEtw2lvnvU6mC4Kicf9X188icnpmoUMyRDEn1xjY/640?wx_fmt=png&from=appmsg)

故此时全桥运行模式的谐振频率fr2 为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPoGc0ic3hJUBmRMyhUMReV5jYgNvdREuPyibDETszeuaFkBIksUf3AMoMFT2tt5pmDbpvjrB9pBou2AXKIT563bXD89rbmibZHicU/640?wx_fmt=png&from=appmsg)

对比式（1）可知，三相运行模式和全桥运行模式的谐振频率相同，因此切相后谐振变换器无需改变开关频率。  

当电池电压保持恒定，充电电流开始减小至轻载条件时，切相策略可以通过减少开关器件和磁性元件的数量来提高效率，因为一个桥臂被关闭，不再承担负载，故没有电流通过，从而减少了开关损耗、驱动损耗和磁性元件的磁心损耗和绕组损耗。  

1.3半桥运行模式  

当电池完全放电时，其内部的化学状态可能变得不稳定。如果直接用大电流充电，可能会对电池造成损害，甚至带来安全隐患。因此，预充电阶段通过提供低电压和低电流逐渐“唤醒”电池。图4给出了预充电时的拓扑结构：在关闭C 相的基础上， 保持B 相的Q5 导通，Q2 关断，此时拓扑结构类似半桥电路，变换器的增益为全桥变换器的一半。通过半桥运行模式，能够有效地将电池从完全放电状态恢复到正常状态，为更高效的充电阶段做准备。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOMc7hGF9PFExV9z0jsicdy1pKstsEM1PPhuq54ZufiblnlBoibcmDFhcX5qAXcj4b33B5yuQ4XPWLwP5OUFDZc0pes6ia565fxDYw/640?wx_fmt=png&from=appmsg)

半桥模式在全桥模式的基础上，进一步减少了开关器件和驱动电路的数量，且谐振频率仍保持不变。因此当负载更轻时，切换到半桥运行，可以进一步提升变换器的效率。三种运行模式参数的对比见表1。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNNsfkXaicPL5oFhrVyKvqdvzUxCKf2SGl1d8iabzxuyBUBV5a9x9iaedyKLsiaaaNJicoP1bUP66bPo4Vz7KZeQRZmeXDibcCeFdd0k/640?wx_fmt=png&from=appmsg)

2.基于扩展谐波阻抗模型的SR控制  

SiC MOSFET 的体二极管具有较高的压降和较长的反向恢复时间，但其导通电阻仅为几十mΩ。因此，通过对二次侧的SiC MOSFET（以下简称SR  MOSFET）施加驱动信号，可以进一步提高变换器的效率。此外，同步整流控制必须适用于电池充电的各个阶段。本节基于扩展谐波分析法，提出了一种适用于不同工作模式的SR 控制方法，且适用于经过切相策略后的所有运行模式，包括三相模式、全桥模式和半桥模式。  

2.1 SR MOSFET的开通和关断时刻  

通常情况下，SR MOSFET 的驱动存在以下四种状态：①延迟开通；②提前关断；③提前开通； ④延迟关断。如果关断时间提前，电流将从SR  MOSFET 的体二极管流过，导通损耗将会增加。同样，如果延迟导通，电流也将流过体二极管。晚开通和早关断只会牺牲变换器效率，并不会影响变换器的正常运行。然而，当SR MOSFET 提前开通和延迟关断时，则输出电容放电，导致输出电流反向流过SR MOSFET 传输到一次侧，这种能量反向会产生环流，严重时导致电路中的元器件击穿，因此应当避免这两种状态。  

图5 显示了SR MOSFET的理想导通波形。通常情况下，当流入SR MOSFET 的电流为正时，应使其导通；当流入电流为负时，应使其关断。由于流入SR MOSFET 的电流近似呈正弦，在电流开始和过零时幅值较小，因此轻微的导通延迟或提前关断对变换器效率的影响可以忽略不计。因此，SR  MOSFET 可以与一次侧MOSFET 实现同步导通，通过计算导通时间ton，确定SR MOSFET的关断时刻。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOibheDMNzjTrkWkWGWZDZV1Oico0GWGQxn44iclQYUibbtnkXJ70bAtZiaibny4B6JUiaZAkOReM6sbpibXdmp3c1dQmDckp7wfTlhP3E/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMcN7NlJo6KLmIeT3EOr7LSib73dN0KAfiahhfeo78MsRCicMzAS7jBfa6ichZNe90z3jJv8OCy4Wwia9K33eSZ3GDrAMB6icTYwTVJA/640?wx_fmt=png&from=appmsg)

2.2 三相模式同步整流分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMzlJyz4bsV6PzhRsYXTRWA9OS9MUqwhlE7ibCS6WQUXUibB0U1s174aWOeBkevQHqMxvXNFiawicUlAEEe72B1ZVB9pLhMoUO0oWY/640?wx_fmt=png&from=appmsg)

图6 给出了变换器在三相模式时基于扩展谐波的等效电路模型。图6 中，Req\_3ph\_k 为三相运行模式下二次侧折合到一次侧的等效负载，Z1k 为二次侧谐振电感Lrs、谐振电容3Crs 和Req\_3ph\_k 的串联阻抗，Z2k为励磁电感Lm 和Z1k 的并联阻抗，Z3k 为谐振变换器输入阻抗。其输入信号为阶梯型方波信号VAN(t)。 三相模式输入电压波形如图7 所示，VAN(t)可以被拆分为两个频率和幅值相同的周期性方波信号VAN1(t)和VAN2(t)。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNcAY2O2YS6MG9cscEmdU1Gfpou9646IpfsCJbyOibXNJKpAYNbGhbLgs8GWntcNZ4eZPUja9Eia0lcCrtEl9aLC3t4qtIXxlCeU/640?wx_fmt=png&from=appmsg)

对VAN1(t)和VAN2(t)分别进行傅里叶级数展开可得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPY1xNO7gjggpgt6A5xXvRza1ibGJm7Oicibp8556Ao5jStksoYAib5kfOicYXvFeyzq74vBlk8jfvg3geUibWiaBcoEUC1ELPrPubibl4/640?wx_fmt=png&from=appmsg)

式中，ωs 为变换器的工作角频率；Vin 为CLLC 输入电压。  

图8 给出了经过傅里叶级数展开后，仅考虑基波、9 次谐波和99 次谐波时的波形与原始阶梯波VAN(t)的对比。可以看出，随着谐波成分数量的增加，重构的信号逐渐逼近原始方波信号。这表明，引入更多高次谐波能够更准确地还原原始方波信号，故其相较于FHA 模型的计算，在偏离谐振点时依然会有较高的精度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNrG77ttVncB5ibcsBKHoJLXQErlCTazHnOJKiaXB0NXiaTE72jqEcLAtYA0RH785H0Cn2x7ekEVhSwMCX4BcAiby1d9nQ0eOvMmiaM/640?wx_fmt=png&from=appmsg)

根据图6 所示的三相模式EHA 模型，可以计算出阻抗Z1k 为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPbu62s9OnodEZWMBMqWXNJViclOTDEa7aoKjXQwIdG0AlliaH2EfLtJ6BkO1KrYoPWKGlbjRya4mKPiaL7S8Sm8XZrLicoY6kPODs/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNc2TyV6TjRBrKGzIh0m2nW5voV088ccfYK86YtbyGfG2QAdymTSAR5iapqW9QRd92iaIIzvbAvYpJbdeS0RFtZoZK7oARGzTkUQ/640?wx_fmt=png&from=appmsg)

式中，Ro 为输出负载。

Z1k 的阻抗角θ1k 为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNkP7eNjRltzuk6byXq0dqmHZ7hekp6DdqGBtp8zhlfqGMCm0dmhIdttfxX2V66HMsDYkk5JylkxQXuNT7953mYY5X2CObcibicw/640?wx_fmt=png&from=appmsg)

阻抗Z2k 为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM7ATMp07UxK5hmaEyHFyMHzBH3emoI4tBOwL5zIOJ6D4YxZa6G1dMvA6pcqobMECyxLbamuCATYP6xYvibbXEXzXV7NUFTH9RA/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOJIagy9vbjj3iaeD055H7Tnyujk0fOZaibAzZFI9zibuuxNCgwApzZRttR7N8bdcnGKRBYcYIw84oTsnw15VTibQWmhl56bFJr75k/640?wx_fmt=png&from=appmsg)

Z2k 的阻抗角θ2k 为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNiczLWDykTYbXRcMe8HmuNcWBe7lTe3PHmwdYsSagSa4Mb7icu4PKNg6Dd6A2JbHAsibsxwqAVCbmic8dZkIzxh8FdVlPCf0iaMskc/640?wx_fmt=png&from=appmsg)

阻抗Z3k 为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP6EibEPCYFSs0C4UicdNfKQmkWxIsN4wibKNnoLLHwGqibEBqtdU4w9VRIoQypLHyC74g2aXPctjRQpHDaicBfXhK5LU7rBsdY1xrA/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNElNnLNlouxDTGXEsr8rqCpqwxjNM4iaccW6YYibOMtibTXFxMTB1Z3mUuRmlCdOufchH8sciaFiaGvHlwc0SicSKQtVKibicia7QjG7iaw/640?wx_fmt=png&from=appmsg)

Z3k 的阻抗角θ3k 为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOvcqZLtC5wV2FbhttbddnrqkBYkqqqVp8PAicRTgu7RBZaIF8Ic4AmoGtWf48pV4nUtQAlNpbsptYJrAr9nibU1GoLjnWIsm45o/640?wx_fmt=png&from=appmsg)

不妨设输入阶梯波电压的相位为0°，则可以根据扩展谐波阻抗模型，计算出二次侧等效到一次侧的谐振电流i′s为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO5TmWfujD6EJrLvTGY9m8xkJtVXePJaDc9vxc77niareQBcM8iaIQGeyfWymBnxnQH5ht1o3lJ4iauicwR77DAYkZCs4WicllxuIe4/640?wx_fmt=png&from=appmsg)

通过叠加定理，可求解时域下二次侧谐振电流为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNt2oo91jHCYHavr1BQk2yaiaQWTP3HiaxBVWOfedGZPjaNlJT4ibzmiaS3zqDHEpCC8hcEaT5Ooib6ibQUz1mJTOFmib4hH5R0yfRsibM/640?wx_fmt=png&from=appmsg)

式中，Is 为谐振电流的有效值。

为了求解输入信号和谐振电流的相位差θ，可以通过令i′s(t) \=0 并利用Matlab 计算其过零点实现。  

设二次侧谐振电流的过零点与SR MOSFET 开通时刻的相位差为ϕ，结合图9 所示三相模式不同频率SR MOSFET 重要波形可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPeh80yd6FB1a8d7DJR2WZKzNIs6RzOrnOIDwhkI5nKibicZicO28wxlx39n71NN2pdhVt4ghJI7fQnc0NxicA5Kp8fnyaj3hAPzf4/640?wx_fmt=png&from=appmsg)

式中，fs 为变换器工作频率；tdead 为死区时间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPPdtRJwbiaS46YkWa65cibgf4qicOcUTvoffia861tlNNn52UdInEAmeNoQhyibMXiaicazkFibVBMM5o8rOO58icosrZpQWaMr92uQoRk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNwmacOxCKjfVMjuibcZSiaGOvPduBfWlfjfhAb0uzVd5P66mzoib1Wg27ZqYMBsnOWH7EcNImIU0Yia8HxSRlLDYSKcJw2Flew3Pw/640?wx_fmt=png&from=appmsg)

由式（7）～式（19）可知，θ由变换器谐振参数和等效负载决定，当谐振参数确定后，导通时间ton 仅和开关频率fs 和输出负载Ro 有关。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNh3dNf92UWq7VgSTqZibCjH9CE56z6dCo0FWgWzC7U1jQXCt4EJPMxiau2KVbiafesdfRW80viadYJfU8NXaEE11eVRkI6L4hF1BQ/640?wx_fmt=png&from=appmsg)

本文所设计的变换器参数见表2，代入式（19）可得到导通时间与开关频率和输出负载的关系如图10 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMs41FiajmrcUvWtuogA7jYBBTbxoAVnsemsQl3hkBKMJyYKD9iam1fL5XEgGcJyxBeCHsr5E6ZWiaaHIIXFsMOTVmDt6mpRATcD8/640?wx_fmt=png&from=appmsg)

2.3全桥模式同步整流分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOMWzcGibVNpicyby5xg4s5FicrOTS7psJg42Vua1MztjEpIfpw1J4SPaJjBPCBmVRRDO9sppaHmtGyv8icwUBmjHNRpP6uUic1LYF0/640?wx_fmt=png&from=appmsg)

图11 给出全桥模式扩展谐波阻抗模型。图11中，Req\_fb\_k 为全桥运行模式下二次侧折合到一次侧的等效负载，Z1k\_f 为二次侧谐振电感Lrs、谐振电容1.5Crs 和Req\_fb\_k 的串联阻抗，Z2k\_f 为励磁电感2Lm和Z1k\_f 的并联阻抗，Z3k\_f 为谐振变换器输入阻抗。输入信号VAN 为方波信号，经过傅里叶级数展开后，得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOFWanGoluaBgYacIHKbMl6ic1icVPJPrPmekuwIsaDvIjgZQc6wZibbZEV5S2oxv7oYrNn58u4Myuzs7tfdDM0MsdaHYxyulZ8h8/640?wx_fmt=png&from=appmsg)

Req\_fb\_k 表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOK36LoZte22ibVYrxuvq9iciaqrbgUvocakRb31frCQIv2fsoF7QicjsN1mPLA4VIDv7qBPtqMKrhKvtwpX60BcKnDYtQQmX8g7NA/640?wx_fmt=png&from=appmsg)

通过对比三相模式下的扩展谐波阻抗模型可以发现，在切相后，全桥模式下的一、二次侧谐振电容减小为原来的1/2，而谐振电感增大为原来的2倍。根据式（7）～式（19）中关于三相模式阻抗的计算方法，可以进一步计算全桥模式下的二次侧谐振电流为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO3ia31s9fUTcXnHfPBiagEJC43LDbUiaUwo94gnfaAaickvpRfAS3VmQLicotHWrp76HhGBmicYMZ8OLSBMEzR3yniajHreW6LYiaicWf8/640?wx_fmt=png&from=appmsg)

同理，可以令i′s( t) \=0，求解出全桥模式下输入信号和谐振电流的相位差θ′。  

令i′s( t) \=0 可以求解其过零点，从而得到全桥模式输入信号和谐振电流的相位差θ′。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPdBMe5gFsHFslbp2H8ibloic4sVg7D0rq3wmxFN4pJovXRkiagUNvv5fpGrqT5OYSbUjBdjZ00Biatqb1zllnInrfia8iazKGJlqKQo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPoU7hDhdiaeaHzBoKOicibZcH6wJoakD9P3bVh3KduARRruV6XODdzKJHsIV53J2hNhzIibGZvoSVXd0iaRcjOYYXkCibLQE4lSNSRw/640?wx_fmt=png&from=appmsg)

结合图12 所示全桥模式不同频率SR MOSFET 重要波形，可以计算出不同频率下全桥模式的导通时间ton\_fb 为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNLopiaVEoLk3ibMfXZS8oYm5JibiaW43ypLQHjzL6kRAKKYDiaTMFztZLRlbVcgxx64pgibNLvad7Ouc0MV3lxW4RVoxyDJmbjDlEicY/640?wx_fmt=png&from=appmsg)

由式（23）可以得到出全桥模式下导通时间ton\_fb、开关频率fs 和输出负载Ro 之间的关系如图13所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkQeicP7tG5vlNJx9pP3grOTJBCmsWibqDPicdylyM94y7boxL1t4ibSj5jzmLGrFYeJLykobcWPJFaLH7yEr1tkmPymtYytSHdkE/640?wx_fmt=png&from=appmsg)

2.4半桥模式同步整流分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOxsnQ2Vic9IQDoIkOl44j91qCxZ2DykEJhriciavXibSMzpAmtARevq8C6t9FUVtPNb09iblsm2DSibcQcXSGWFBSjINxNQONHRZ2Yc/640?wx_fmt=png&from=appmsg)

半桥运行模式下的EHA等效模型如图14所示。 图14 中，Z1k\_h为二次侧谐振电感Lrs、谐振电容1.5Crs和Req\_hb\_k 的串联阻抗，Z2k\_h 为励磁电感2Lm 和Z1k\_h的并联阻抗，Z3k\_h 为谐振变换器输入阻抗。Req\_hb\_k为半桥运行模式下二次侧折合到一次侧的等效负载，其值为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOuMr4MfXgSjw8PZFlG8NkFVicKrrfJyrJ6icQQtSwmfZFibNg9FX8cOC14bxKP2aCAEoJLSy2DEZ9S6iakMqhTmfvlL5YDwUmOic1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSRI2d48uISgsiavtTIYKcIqia9LC85ZcvNLK3n7F1QuY8GjWq4KCr4LY646mIvof49aaRCiaVH771hicicyztDlTQF7jYBDWn1zFY/640?wx_fmt=png&from=appmsg)

半桥模式输入电压波形如图15 所示，输入信号经过傅里叶级数展开后，可得VAN(t)为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMlr0Bw8swYA2ibg2tPSHfvf6uFBpT9ahZkp5M1emBLkVtiaia3icGlXFIGU2ribygx40CQaBTyNYpkZLqZEnac2Ia0hW7KdATHs1B8/640?wx_fmt=png&from=appmsg)

通过对比图11 和图14 可以发现，除输入方波的差异外，两种模式下的参数完全一致。此外，由于输入电压幅值对谐振电流过零点的最终计算结果 无实际影响，半桥模式和全桥模式的计算结果保持一致，导通时间ton 相同。因此，后续分析和计算将主要针对三相模式和全桥模式，半桥模式不再重复讨论。  

3.基于三阶拟合模型计算导通时间  

基于上述分析可知，计算导通时间ton 需要进行大量复杂的阻抗和三角函数计算，尤其是在追求更高精度的情况下，引入更多次谐波会使计算量成倍增长。在高频系统中，这种计算不仅会占用大量处理时间，还可能因计算误差导致系统运行异常。表3 列出了叠加不同次谐波时DSP 运算量的对比，直观体现了谐波阶数对计算复杂度的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOicuibWuqLoJ5Cy4jvvD2drolNOl92TD2YqC9lt4T1GTkW65T8WZIwcUg7Hicw6wa7VX0VbFH4RRGP38CoRvHDJTdFyWiaGqmmYJ8/640?wx_fmt=png&from=appmsg)

由于ton 本质上只与输出负载Ro 和开关频率fs有关，通过对这两个参数进行预先的数据拟合，可以显著简化实时计算的复杂度。通过将复杂的在线计算转化为简单的函数调用操作，极大地提升了计算效率，同时增强了系统的实时性和可靠性。  

3.1三相模式SR拟合模型  

由图9 可知，当开关频率fs 小于谐振频率fr 时，SR MOSFET 会早于一次侧MOSFET 关断；而当开关频率fs 大于谐振频率fr 时，SR MOSFET 的关断会 滞后于一次侧MOSFET，每个周期的导通时间显著延长。因此，在过谐振情况下，为了避免因死区时间过短而导致SR MOSFET 产生额外的开通损耗，甚至可能引发上下管直通的严重故障，需综合考虑SiC MOSFET 的上升时间tr 和下降时间tf 以及满足其寄生电容实现完全充放电所需时间，设置一定的延迟开通和提前关断时间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPVxzNPQibUtVlicKib2qY3ygoySIAXkiabqAvQSrMNJ7micPn4Z4XrgKTpU3BduXicJjqfSP5E4wUOxft9HiccYIojBF7382GtjqQJqA/640?wx_fmt=png&from=appmsg)

表4 列出了本文样机所使用的SiC MOSFET 参数，其寄生电容特性如图16所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOamno9XQIY3lia7qT1kwhj9Eb75cjY9ZmrhxKYP62te1Pic0YfwQpcEbBnWw7ygmdpfzhuDnuUcsBOn3gZ1ILWicyW70A8bYDKiaQ/640?wx_fmt=png&from=appmsg)

为了实现寄生电容完全充放电，需满足

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNPhL00Vq0auZ6L4kSDsvoB2k01W6iaOh4EeggDeicbX1DBL6UqhQhr9hQTJ8ibEU1yy09Ol6ZwyhN4E0ZhwRdO8ONJaw2DznQcY4/640?wx_fmt=png&from=appmsg)

式中，tA 为SiC MOSFET 实现完全充放所需时间。 由式（26）可以求得二次侧SR MOSFET 实现零电压软开关（Zero Voltage Switching, ZVS）的最小时间。

此外，栅源极两端电容Cgs 也会对SiC MOSFET的开通和关断时间产生重要影响。如果同一桥臂的驱动信号所设置的死区时间过短，可能导致两个开关管同时进入线性工作区，从而引发直通现象。 因此，需综合考虑Cgs 的充放电时间tB，以避免因死区时间不足而导致开关管严重发热或直通故障。 同时，开关管的开通延时时间td(on)和关断延时时间td(off)特性也需要考虑在内，故SR MOSFET 的最小延迟开通和提前关断时间为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNgvTCvE2lOr3HrAXibAlbwibwDKFHhNN0CbONVLEVsb25LMYm2NFXGTmd00JNYce9Pu8pmPBumK5jvhmnJ0tHNKRM1TibueJKV1A/640?wx_fmt=png&from=appmsg)

为了提高拟合精度，本文利用Matlab 采用三阶多项式模型进行分频段拟合，当开关频率fs≤fr 时， 拟合函数为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMIuGibyn3aia78sBjo6TDSrxd0UQ9sibVg5sUedE3jghow50zlCO5P0bErmzcHWBlzMY76a0Vqetudu7ZJq3cMKb3sfBNz7RKxew/640?wx_fmt=png&from=appmsg)

系数矩阵A为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOI5hhDXcdsUjfMFHT7UFia3YMriaCbjj5zx3sAP7pl5E7DYGnic9kb4emMlD6MG888KnI5ah2aEbD0RUkpwBKz8kpZlygedQicHg/640?wx_fmt=png&from=appmsg)

系数矩阵B为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPmOo0YmGGgQM6OcAdrbxQibPSI5dYtYvWoeAj8xCHqkJAIvnTiacWuNO3XC1ChrjeCSq8FBaqy0hxpBPEYAOkkoVktRUF5849A0/640?wx_fmt=png&from=appmsg)

3.2全桥和半桥模式SR拟合模型  

同理，全桥和半桥运行模式下，当开关频率fs≤fr 时，拟合函数为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPhEiacg9OaTV58TjyWPaOhMwghtRe62hROBa3aYWMuTllpbX323BGA7mzZm0icrkXIhKicjWwINOnxIFLc1hdJlvRTrNq5McBibSY/640?wx_fmt=png&from=appmsg)

系数矩阵C为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPFw6OJDJEeIbgLOH40H8NsY7iaPqDqWiaXcSRzORTThGUOSqrpH6YeJnrU2ujfHOJ4NM0GohZH2aVFZuHicicEFnoAtZaUmq75Zn4/640?wx_fmt=png&from=appmsg)

系数矩阵D为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPNMgXyfC7Lib797Np69joI42px76EGBFl4xmEvayh4ubYMbhCkKzBcnj8yAYb8RoWL8dPXySUhd8gQR1iclNbB2OGUPX2wvEO9s/640?wx_fmt=png&from=appmsg)

3.3拟合模型精度分析

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPs9yeTVF1lB2E9bN8JBu7WskxKzMwdxKRLPRiaxicReiafGib2NhPt4y3bIS6PpLP2KicjUzmThJB0h7ibQ7lgJ6Le9fCmlrKPEk6zo/640?wx_fmt=png&from=appmsg)

图17 展示了三相运行模式下SR MOSFET 导通时间的拟合模型计算结果与实际计算结果的对比。从图17 中可以看出，拟合模型与实际计算的导通时间高度吻合，证明了拟合模型具有较高的精度和可靠性。在图中标注了误差最大的点，该点对应负载为600 Ω、频率为302 kHz。此时，实际计算的导通时间为1 401ns，而拟合模型计算的导通时间为1345 ns，误差为56 ns，误差率为3.99%。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPUOOzLN0W3iaJ2U5RolQh81W3gmbuQIsicTTkNJP4hf0DHhiazQ9Oy3K8YE2OcO42I8XaoyZ86Egu4v8wQlk1icicpsMC59an7gYbQ/640?wx_fmt=png&from=appmsg)

  
图18 为全桥和半桥运行模式下SR MOSFET 导 通时间拟合模型计算与实际计算结果的对比。从图18 中可以看出，拟合模型同样与实际计算结果保持较高的一致性。在标注的误差最大的点上，对应负载为600 Ω、频率为298 kHz ，理论计算值为1394 ns，拟合值为1354 ns，最大误差为40ns，误差率为2.87%。  

相比复杂的数学运算（如除法和反正切运算）， 采用三阶拟合模型只需进行9 次加法和18 次乘法，大幅度降低了计算复杂度，避免了高运算周期的非线性函数运算。这一优化有效减轻了DSP 的计算负担，提高了系统的实时性和响应速度。  

所提出的基于扩展谐波的三相CLLC谐振变换器同步整流控制流程如图19 所示，首先，系统通过DSP 的中断服务子程序对输出电压和电流进行采样，进而识别当前变换器的输出负载Ro。接下来， 系统根据当前的负载情况选择相应的工作模式和控制策略。具体来说，工作模式可选择三种类型：三 相模式、全桥模式及半桥模式；同时，控制方式可依据系统需求选择适当的类型。一旦工作模式和控制方式确定后，系统将根据变换器当前的工作频率fs 和输出负载Ro 利用拟合函数计算出二次侧MOSFET 的导通时间ton。最后，导通时间值会通过 增强型脉宽调制（Enhanced Pulse Width Modulation,  EPWM）寄存器进行更新，从而调整一次、二次侧MOSFET 驱动电路的波形。更新完成后，系统将等待下一次中断服务程序的触发，以继续进行动态调整。通过该流程，三相CLLC 谐振变换器能够在不同工作模式下实现高效的同步整流控制，从而提升 整个系统电力转换的效率。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOFro2OFRlMP4tswqNs4RZYLT0tic621aklYGiaoRObZRssdpicaKVaxQvBeh7eTHDp97qRKw6DvA6IQRIOkT8R6Wz4WpULicywrq0/640?wx_fmt=png&from=appmsg)

4.实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNoRibqicalZXibbjXVXz0eicOemGGWeHyk67v0UuYNjPBO8BrL27yYXgL9nvwlvdADI3WaUdkpuKnrTa9S572FoBRSxo8ZriaIVa7Q/640?wx_fmt=png&from=appmsg)

为进一步验证所提算法的可行性，搭建了一台 三相CLLC 谐振变换器实验样机如图20 所示。为了减小变换器的体积，采用了三相磁集成变压器。一、 二次侧开关管均采用了Wolfspeed 公司1.2 kV SiC器件C3M0040120K，数字控制器采用了TI 公司的TMS320F28335。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPSrcY5x3C3cuOicW1t2viah8W3Uze6EshZzIPpCdymtqib6oicYmI88w3Jov6zMckb9tCxcYMOG2ebRjch6z6OYBbngEpl2voYwUU/640?wx_fmt=png&from=appmsg)

图21 给出了不同运行模式下的效率曲线。可以看出，与传统控制方式相比，切相策略可以显著提高变换器轻载时的效率。三相模式、全桥模式、半桥模式的动态切换如图22 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPyuN3pjMaCDV8NvRKLVLT2yY5qYic18uDVrWICBdZwaNIamTv9gQBxMwHYMYmaIy0ETdxllF2jb6sVU4gJBFyhiadMHdgVVXNcM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNZVBYzV8azChib3hxFIIAEEma1Pqosn8jwJkOdIcMcSiaj51WiaLodxIJ6PDbYMl2tdR94yslfkwpicEoRx9gBM4cib73BLvicrhook/640?wx_fmt=png&from=appmsg)

图22a 显示了当负载从10%变为25%时，变换器从半桥运行模式切换到三相运行模式， 模拟电池从预充电阶段进入恒流充电阶段的过程； 图22b 显示了从满载变为半载时，变换器从三相运行模式切换到全桥运行模式，模拟电池从恒流充电阶段进入恒压充电阶段的过程，切换响应速度较快。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMpVpEmFxgtWgbicyV2Dxn5AU5uHxxoNibE3nzYgEoNZwHg5vRsCQ61zfuCI8sCruftzqj9AHWibYE4XeVdz4QYeRC68taIObAadg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNdBDEq4Zv8IyUQKtjnohUSjjcOsZKLFWN9MRhcbNtLCXDRle5EQhfmNnm2JkCrXRw5XvdfsYoMQrrqjfa34ibWDvuSib9dC1cbU/640?wx_fmt=png&from=appmsg)

图23 展示了在三相运行模式下采用本文提出的SR 控制时，不同频率下的波形，其中输入电压为400 V，负载电阻为64 Ω，输出功率为2.5 kW。实测波形与理论波形相符，均出现了延迟开通和提前关断现象。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOePQuFQgiaMYqwC6CLRSiaOlZObPcfLQKR8FMpH1gibRBUs9vcGpUCotpZQc4OIjJnUibtkrxsY6FmMpSqMhew2EqynxU5HfhSVjQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN9U9W2iah0ZmJWibPnBTdAibQtI2P2L6SE6k5iaJNRKTk7ZepaeVCoblnDFv5gBf7ND4Vz9yiadnejPFNbTqvzEDAV96HnZge6f4oQ/640?wx_fmt=png&from=appmsg)

为进一步验证所提SR 控制的有效性，图24 和图25 分别展示了在全桥运行模式（输入电压282 V， 负载电阻64 Ω，输出功率1250 W）和半桥运行模式（输入电压253 V，负载电阻64 Ω，输出功率250 W）下的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNqyum05IX9dkrglPmFD4Xl54mfBnIUJD8YvLF36mnhlXeictQ4ibh6Pciapyr1libvwCgvltskm9atoAjsLLJ5DU76NsDanqicdib5c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNr67kQ0icRPMHEAhhj6ynUmcEs6iaLkcE21qhsm1NKEko4MbWc80A4eDBy4jYELeyH5bFpBibxCYlQHFXHX0Rah1kt9tBZElHM54/640?wx_fmt=png&from=appmsg)

可以看出，当开关频率高于谐振频率时，二次侧SR MOSFET 会在整流电流过零点之前关断，使部分电流流经体二极管。然而，由于这些延迟和提前关断时间处于死区时间内且电流值极小，导通损耗可以忽略不计。实验结果表明，所提出的SR 控制适用于切相策略后的所有模式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOGuOKbELG6NjF6qYibBlrOooa16icZVucQXFDF1rXahwgOzKFI4BLttnv57Q96dBBGXnIyOLMu50ABHyEVmaUNg35mdWNtQquZg/640?wx_fmt=png&from=appmsg)

图26 给出了采用SR 控制后变换器不同模式下的效率曲线。对比图21 可知，采用所提SR 控制后，三种模式下的效率均有所提升。为了更直观地说明SR 控制在不同模式下提升效率的效果，表5 列出了各模式下效率提升最显著的点。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO7aCCHXSh7qLneRKFk4WgmnZu9yQg61uRNxatFhML7eIqORYGaRdfJg1cjCQOnhblRt08pBW4Wic8ZT7yv4iclRKTOVg1KWyyXo/640?wx_fmt=png&from=appmsg)

此外，采用同步整流后，不仅可以提升效率， 还能有效缓解SR MOSFET 的发热问题。使用同步整流前后SR MOSFET 温度对比如图27 所示，本文在输入电压400 V，频率300 kHz，功率2.5 kW， 室温10.3℃的测试环境下，对比了同步整流前后的SR MOSFET 温度分布，当运行稳定后，采用同步整流前整流侧最高温度为91.2℃，采用同步整流后整流侧最高温度为66.8℃，温度降低了24.4℃。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNBbhY3Jyn7UovJMEboJicOPbiauZcCTLlkwqacp0oicgNaFHLn78mvaQJHx8qGKm0o0b0mZQ2ug8KnFyZwFqO8vw0ptgVAYfBKHo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkco7yllORBVjTMuibDqIhJeia2uicJWbNibcaGiavkDPfbhbxf4QLJC2srXc8A4TM8g9qUDHyQh028qicInCp4v9bYCsH1UDVXEut4/640?wx_fmt=png&from=appmsg)

5.结论  

针对三相CLLC 谐振变换器在电能转换过程中面临的高效率需求、轻载效率下降以及同步整流实现复杂等关键挑战，本文提出了一种基于扩展谐波分析的三相CLLC 谐振变换器同步整流控制算法。 通过研究切相策略下变换器三种工作模式的特性及驱动信号差异，建立了扩展谐波阻抗模型，精确计算了不同工作模式下SR MOSFET 的导通时间。同时，利用三阶拟合模型显著减少了控制系统的运算量。为验证算法的可行性，设计并搭建了一台基于SiC 器件的2.5 kW 实验样机。实验结果表明，所提同步整流控制算法显著提升了三相CLLC 谐振变换器在全负载范围内的效率，并有效地缓解了SR MOSFET的发热。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNmcU8RbCZxictFcAaKJ2Q05Coibibm1zPjYAgGQkZJ7YjyiaNFsdueRKwxWQIDOSubku62AFN6EbcLbnEQ585eePq1iasDTWAM5VeQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMPmR1ibv4ticPHZKpo2gKen4Wdr86xRh9V4aibyRQOpBXLIH0uTBknQhNeyNnBrtUErA9gCRzheN2YWyQJYiad1klhYteJvDUiboQs/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOEeE73wUYKXqD7EEE3Zj4zUnFJjUkYjQpxe27aVqrzlls3vIUsmpiargwwLhJZxPkg0yLHeoWUFLdPJFibNKq3wibG9VQy3DK9a0/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMECrK64U1icrhJ1vMSL0Lxz84ZYtGzt9rca29xAUnic27wicA1DrNPtPLxaSibDpnHexv3MP3zCQ1buryPnicVibB4q8AL2dKfGMoWI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)