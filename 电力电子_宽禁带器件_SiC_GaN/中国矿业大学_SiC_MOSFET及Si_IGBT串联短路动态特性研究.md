# 中国矿业大学：SiC MOSFET及Si IGBT串联短路动态特性研究


> 原文地址: [https://mp.weixin.qq.com/s/eqC-18LO-sUYfVP-UwCRhA](https://mp.weixin.qq.com/s/eqC-18LO-sUYfVP-UwCRhA)

**文章来源：**电气传动

**作者：**张甜，宋明轩，冯源，何凤有（中国矿业大学 电气与动力工程学院，江苏 徐州 221000）

**摘要：**针对因器件击穿、控制失效等问题导致的串联短路现象，基于半桥结构分析了 SiC MOSFET 及 Si IGBT 不同的串联短路动态分压特性。同时，结合开关过程中电压、电流的变化分析串联短路分压原理，并 在输出特性曲线上标注器件的分压路径。实验结果表明，驱动电压、负载电流、母线电压等外部驱动参数对 两种器件串联短路分压特性的影响不同，其中反向负载电流改变了串联短路的分压趋势且对串联短路特性 影响最大。充分认识器件的串联短路机理对改进短路保护具有现实意义。**关键词：**碳化硅MOSFET；硅IGBT；串联短路

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDOQJAPHfrSytnfLU2O5UWRyWprhS4b9VGEiab30vtsL2vUgHfj2VAbNQ/640?wx_fmt=jpeg&from=appmsg)

近年来 SiC MOSFET 和 Si IGBT 不断向高功率密度和高可靠性方向发展，以其优异的性能在以电力电子变换器为代表的高压大功率场合得到了广泛的应用。然而短路仍然是威胁系统安全不可忽视的问题，学者们主要从内部失效机理、热特性、短路特性、保护电路等多个维度出发，在短路方面做了很多研究，在通过实验了解其短路特性的同时分析内部热和载流子的变化，从而改进保护电路。目前在多电平系统运行过程中因硬件电路缺陷、控制失误等问题使某一器件误导通时，存在多个器件处在电流回路中的复杂串联短路现象，因此分析单个器件短路特性得到的结论不足以支撑复杂电力电子装置的保护策略。文献分析了SiC MOSFET串联短路动态特性，在此基础上本文基于半桥结构详细分析 SiC MOSFET 和 Si IGBT 的串联短路动态特性，并对两种器件在短路分压过程中表现出的不同现象进行讨论，在负载电流为 0 A 时，SiC MOSFET出现均压现象，而Si IGBT有一个器件承受较大电压。

**1 .器件特性分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDYUiapM2HV4DFkuriacBSlFK8yyYxuRXeO6rVV63SclVYQMUaz2LJajeA/640?wx_fmt=png&from=appmsg)

图 1 为 SiC MOSFET 和 Si IGBT 输出特性曲线。SiC MOSFET栅极达到阈值电压后导通，沟道电流随着漏源电压的增加线性增大，此时 SiCMOSFET呈电阻性，随着漏源电压VDS增大，器件逐渐进入饱和区。Si IGBT集射极电压增大，器件从截止区进入饱和区。查阅器件手册 Si IGBT 驱动电压为15 V，SiC MOSFET栅极驱动电压为18~22V，根据图1所示，栅极电压增加，器件的饱和电流增大。发生短路时流过器件的短路电流是额定电流的数倍，产生的热量在较短时间内无法通过封装消散，加剧了器件的老化和损坏。在工业上对SiC MOSFET 和 Si IGBT 保护时间的要求不同，Si IGBT为8 μs，SiC MOSFET的要求较高，为3 μs，重复短路试验后特性退化等不稳定性因素成为 SiCMOSFET 不能在相关领域应用的重要原因。因此，SiC MOSFET面临的短路问题更加严峻。

**2\. 串联短路原理和分析**

**2.1 串联短路动态分压原理**

单个器件短路时几乎承受全母线电压，而两个器件发生串联短路时存在分压现象。图 2 为SiC MOSFET 及 Si IGBT 半桥结构串联短路原理图，其中 T1，T2为待测器件 SiC MOSFET 或 Si IGBT；VDC为母线直流电压；Ls为杂散电感；Lload为感性负载；IL为流过负载 Lload的正向电流；T1，T2由MOSFET 器件 MP.x，MN.x组成的推挽电路驱动，驱动信号为VG.x，x取1和2分别为T1，T2的驱动参数；Vx为推挽电路提供电压；Ron.x，Roff.x分别为开通电阻和关断电阻；Rgin.x为栅极电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDmiaHQyJ3AKf6kxLp0bwhv0LNT2zcLvKDGwRticOnmQQYFwgUFbeCNOJg/640?wx_fmt=png&from=appmsg)

图 3 为 SiC MOSFET 和 Si IGBT 在负载电流为0 A时的串联短路波形示意图。当T1处于正常导通状态时，T2因某种原因误导通，形成串联短路，短路电流 Ish快速增大，在此过程中 T1，T2上的电压发生变化，经过一段时间后T1，T2同时关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDfApz7u8DGPf7l77QofVwibT4qC6HdqkMpf6K5cvv6cE9tttTNHrCI9A/640?wx_fmt=png&from=appmsg)

**2.2 动态分压过程分析**

T1，T2串联短路共分为四个阶段：T1正常工作阶段\[t0—t1\]、短路电流上升阶段\[t1—t2\]、短路分压阶段\[t2—t3\]、关断阶段\[t3—t4\]。在忽略温度的影响、负载电流为 0 A且 T1，T2驱动参数相同的理想条件下对串联短路原理进行分析。

2.2.1 T1正常工作阶段\[t0—t1\]

在 T2未导通之前，T1处在正常工作状态，通态压降很小，T2几乎承受全母线电压。

2.2.2 电流上升阶段\[t1—t2\]

T1，T2形成串联短路后，短路电流迅速上升。在杂散电感Ls上产生压降，T2的电压缺口ΔVT2为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDF96FPo4yCbBL4KWddgweWUfnd1GbybSUibswr3sdu5Xg1JDs1lrIzaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDD75Y8AZsPkkxLnF5wlhtxyzUiazLwu1VxsOzjggHmyEdLaJ11FIMwdw/640?wx_fmt=png&from=appmsg)

式中：Lch为沟道长度；μni为沟道载流子迁移速率；Wch 为沟道宽度；Cox 为栅氧化层等效电容；λ 为SiC MOSFET沟道夹断系数；αPNP为Si IGBT的PNP晶体管共基极放大系数；τ1，τ2分别为 SiC MOS⁃FET和Si IGBT栅极时间常数。

Lch，Cox为器件参数，μni，αPNP和Vth.x与温度相关。

2.2.3 短路分压阶段\[t2—t3\]

按照短路类型分类，发生串联短路时 T1属于二类短路，T2属于一类短路。t2时刻短路电流达到峰值，受结温影响短路电流达到饱和后呈下降趋势。此时T1和T2都处在导通状态，母线电压由T1和T2共同承担。发生串联短路后，SiC MOSFET和 Si IGBT 出现动态分压现象，T1，T2在输出特性曲线上的路径变化如图4所示，t，t'分别代表待测器件T1和T2的时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDRSMDbndbVWxyP7ZZnwJF4kcfMpyzql2lIqNJ2dc992HjvJh8gtxH2A/640?wx_fmt=png&from=appmsg)

SiC MOSFET的电压可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDN2ooOTUVQbdxk2gXiaVADO6rJNtnOOWodydHFpm9X1mibps3bm698ZdQ/640?wx_fmt=png&from=appmsg)

因此当负载电流为0 A时，SiC MOSFET串联短路具有均压现象，从图 1 可以看出，SiC MOSFET 的饱和电流随 VDS 的增加而增大，所以 SiCMOSFET 具有分压特性。Si IGBT 输出特性曲线低电压侧有明显的饱和区和线性区，受 MOSFET沟道效应以及PNP晶体管调制效应的影响，在高压侧饱和电流有所抬升，但变化远不如SiC MOSFET 明显，可以忽略不计。在分压阶段，Si IGBT其中一个器件承受了大部分母线电压，需要经过远长于短路保护的时间才会达到均分电压的效果，因而可以认为 Si IGBT不具有均压特性，且电压保持在较小的变化范围内。随着短路电流的增大，T1漏源极电压大幅下降，T2漏源极电压大幅上升，最终在 VDC/2 附近保持稳定。Si IGBT 的 T1集射极承受较小的电压 VL，T2集射极承受较高的电压 VH，分压结束后 T1，T2分别在 VL，VH处趋于稳定。

2.2.4 关断阶段\[t3—t4\]

短路电流的急剧下降使杂散电感 Ls产生感应电势，T1和T2形成过压尖峰ΔVpk：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDwosKVmYsEfo86sF4YLSrNmW1Cg1N2NThL83Zkh6u6SLOY2ibEiaXmx4w/640?wx_fmt=png&from=appmsg)

**3\. 实验分析**

在实际运行过程中，T1和 T2负载电流、母线电压、驱动电压改变时形成了不同的串联短路分压特性。本文采用 ROHM 公司的 SiC MOSFET SCT3105KLHR（1200 V，24 A）和 Si IGBT RGS50TSX2DHR（1200 V，25 A）进行实验。依据器件特性和短路保护选择的短路时间应满足串联短路特性明显而稳定、可重复实验两个要求。因此设定 SiC MOSFET 短路时间为 3 μs，Si IGBT短路时间为7 μs。

**3.1 负载电流对分压特性的影响**

由电感的特性知，负载Lload越大，负载电流受母线电压、驱动电压等外部电路参数的影响越小。流经T1，T2的短路电流关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlD9xjfCLVId3XzeUDyibXECxtw6zwA0tNY7XgibapllN5ZTBGwKITSOUSw/640?wx_fmt=png&from=appmsg)

电流流过负载的方向不同时，T1和 T2串联短路分压特性发生变化。图5为正向负载电流分别为 10 A 和 20 A 的串联短路分压波形，SiC MOSFET 和 Si IGBT 在分压过程中 T1承受更多的母线电压，T1电压从 0 V上升至超过 50%母线电压，T2电压从 VDC降至 50% 母线电压以下，二者电压出现交叉，且交叉点在50%母线电压附近。当流过T1的短路电流不变，负载电流增大时，由式（9）可知流过 T2的短路电流减小。由图 1 可知，在同一驱动电压下，器件承受的电压随着电流的增加而上升，因此 T1承受的短路稳态电压上升，T2对应的短路稳态电压下降，二者的短路分压完成时间t2提前。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDCtLEg5wW0B2w2d5SSukABLoAib9P0pic4QRFG7rCV6TXhPSRy5nWCRBQ/640?wx_fmt=png&from=appmsg)

图 6 为反向负载电流-10 A 和-20 A 的串联短路分压波形，当负载电流反向增大时，由式（7）、式（9）可知流过 SiC MOSFET T2的短路电流增大，T2承担较大的电压，T1和 T2上的电压无交叉。根据 Si IGBT 的输出特性分析，其电压保持在较小的变化范围内，因此相比 SiC MOSFET，Si IGBT器件T2分担更大的电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlD1Mw84Ehu2R08qqM4EuTfJgSQiaCx4mwR4PoqbFqC6QTmM1YdHYhlbpg/640?wx_fmt=png&from=appmsg)

**3.2 母线电压对分压特性的影响**

母线电压 400 V 和 600 V 的串联短路波形如图 7 所示。SiC MOSFET 在 50% 母线电压附近均压，Si IGBT 的 T2 始终承受较大电压。对于 SiCMOSFET，母线电压的增大使分压的过程变长，即分压完成时刻 t2延后。当母线电压过小时，T1，T2漏源极电压在短路电流上升过程中已经达到50% 母线电压，分压提前结束。对于 Si IGBT，随着母线电压的增大，T1分担电压增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDxZm7ARFxw2U6mH7DWzzm0kJM74b7nVkib0ibmHkpRcJjI2Nl4I3t1eCg/640?wx_fmt=png&from=appmsg)

**3.3 驱动电压对分压特性的影响**

图 8 为不同驱动电压下的串联短路分压波形。驱动电压增大加快了电流上升速率，增大了短路电流峰值。SiC MOSFET驱动电压从18 V上升至 20 V 时，短路电流增加，因为驱动电阻和电容参数不变，短路电流达到峰值的时间不变。电流上升速率加快使T1，T2漏源极电压下降加快，分压完成时刻 t2提前。Si IGBT 驱动电压从 14 V 上升至 15 V 时，短路电流增大，T2始终分担更大的电压，且随着门极电压的增大，T1分担电压减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDVPsLcrM4ldwEXX0oEIHiavae6JEpibG4lh0203LFiaN19JZGmiaIqfSMWw/640?wx_fmt=png&from=appmsg)

**3.4 串联短路损耗分析**

随着短路时间的增加，损耗增加，结温上升，负温度相关的声子散射机制影响比重增加，进而使短路电流下降。Si IGBT为双极性器件，在电流增加时，电导调制效应中和一部分电流。因此与Si IGBT 相比，SiC MOSFET 短路电流下降趋势更为明显。SiC MOSFET 和 Si IGBT 短路损耗如表 1和表 2所示，SiC MOSFET 均压较为明显，T1，T2的短路损耗相差较小。Si IGBT 始终由 T2承担较大电压，损耗较大。短路损耗随着短路电流的下降而降低，与 Si IGBT 相比 SiC MOSFET 每个器件的损耗较小，每个器件承受的短路冲击较低。随着负载电流正向增大，T1损耗增大，负载电流反向增大，T1损耗减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDPeISe45pQ336XKUiaf05I49OGXt0ILqt0s0pjF7xkeEzcwaicmGookjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlD1SuDwQsahYRICLu7B0amOjOcUGNE7sQsuFg9PdEdTXhLkGQ6vVNu7A/640?wx_fmt=png&from=appmsg)

**4 .结论**

本文基于 SiC MOSFET 和 Si IGBT 半桥结构，结合理论和实验详细分析了串联短路动态分压特性。在发生串联短路时，上下桥臂分压的大小、分压完成时间随电路参数的改变而变化。承担较高电压的器件损耗较大，关断时有过压击穿的风险。然而结温是 SiC MOSFET 和 Si IGBT 在短路时不可忽略的影响因素，短路电流受结温影响呈下降趋势，短路电流的变化对器件分压影响较为明显，应进一步研究温度对串联短路的影响。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)