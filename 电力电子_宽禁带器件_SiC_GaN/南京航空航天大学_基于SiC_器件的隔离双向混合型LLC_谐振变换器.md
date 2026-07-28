# 南京航空航天大学：基于SiC 器件的隔离双向混合型LLC 谐振变换器


> 原文地址: [https://mp.weixin.qq.com/s/rUCerBCOli84EUyQpirAPA](https://mp.weixin.qq.com/s/rUCerBCOli84EUyQpirAPA)

**文章来源：**电工技术学报

**作者：**朱小全.刘康.叶开文.蒋黎明.金科（南京航空航天大学自动化学院）

**摘要：**针对传统双有源桥型直流变换器的软开关范围窄、开关频率低等问题，该文提出一种隔离双向混合型 LLC 谐振变换器，适用于可再生能源分布式发电系统的储能结构中。在不增加使用额外器件的条件下，通过不同调制方案转换，该变换器可以在全桥变换器、双半桥变换器和单半桥变换器三种工作模式下混合运行。在变压器励磁电感协助下，三种不同工作模式无论正向或反向运行，均可实现所有开关管的零电压开通，以减少开关管的开通损耗，实现高效的双向功率转换和宽电压增益调节，提高轻载下的变换器工作效率，且三种工作运行模式可以平滑、稳定地过渡切换。最后搭建一台基于 SiC 器件的 800W 样机，实验结果证明了该变换器拓扑及其控制方法的可行性、有效性和稳定性。

**关键词：**LLC谐振变换器，分布式发电系统，双向运行工作，零电压开通， SiC器件

**0引言**

随着高耗能产业的迅速发展，为应对能源短缺及环境保护问题，越来越多的研究投入到对可再生能源的开发与利用上来。然而受到自然因素的制约，这些能源的间歇性特征影响到系统的稳定性、可靠性和功率质量。因此储能环节成为可再生能源发电系统的必要环节\[1-3\]。考虑到成本和性能优势，电池储能系统和超级电容成为最受欢迎的储能部件，从而得到广泛应用。新的储能系统应具备双向功率传输能力，以存储可再生能源产生的多余能量，并在可再生能源不足或消耗高峰时释放能量\[4-5\]。图1 为典型的可再生能源分布式发电系统结构。其中，双向直流变换器是储能系统的关键环节。但由于电池或超级电容器端子电压变化范围较大，因此需要具有宽电压增益范围的双向直流变换器\[6-8\]。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peZKsBFxSPqAkZSZGZMYtwtXHYyH3Mdroow0ibg4MpiaicicYhkJuicu6lqAQ/640?wx_fmt=png&from=appmsg)

由于 LLC 谐振变换器具有实现变压器一次侧开关管零电压开通（Zero Voltage Switching, ZVS）和二次侧开关管零电流关断（Zero Current Switching,ZCS）的特性，因此为了进一步提高变换器的转换效率，LLC 谐振变换器广泛应用于储能系统中。一般来说，通过有源开关管取代单向直流变换器中的无源整流二极管可得到双向直流变换器。根据这一原理，已提出了各种各样的隔离双向直流变换器。其中，双有源桥（Dual-Active-Bridge, DAB）型直流变换器因其结构简单、ZVS 以及开关管电压应力低而得到广泛关注\[8-12\]。对于 DAB 直流变换器，根据变压器一次侧和二次侧开关管的移相角确定导通方向和输出功率。但是 DAB 直流变换器采用传统移相控制时也存在一定问题，如：轻载状态时，变换器的软开关范围较小，较高的关断损耗和反向功率回流，降低了整体效率。针对这些问题，文献\[13\]提出了一个双向串联谐振变换器，其电压增益仅和占空比有关，与传输功率的振幅和方向无关，且在辅助电感的帮助下能实现所有开关管的 ZVS。文献\[14\]提出一种基于开关阻抗功率控制的 DAB 谐振变换器，可以在输出电压和电流大范围变化下实现软开关，并通过控制串联谐振腔中的开关来控制谐振电容以确保谐振腔中电流最小。但是在上述 DAB直流变换器中，由于电压型电路拓扑结构会引起较大的电流纹波，文献\[15\]提出了一种双向电流源型串联谐振变换器，可以实现软开关和低电压应力，如果使用低电压或大电流的蓄电池或超级电容，可减小电流纹波和开关管关断损耗，以增加样机的使用寿命和效率。

在储能系统中，越来越多的变换器拓扑追求高功率、高效率和高功率密度。上述文献所提的变换器中开关器件均采用的是 Si-MOSFET 器件，工作频率为 100kHz。采用传统的 Si 器件，其最高工作频率通常不超过 100kHz，将导致电路系统无源元件体积较大，降低了系统功率密度。而随着宽禁带半导体器件碳化硅（Silicon Carbide, SiC）和氮化镓（Gallium Nitride, GaN）的出现和发展，因其开关速度快、开通损耗小、阻断电压高、开关频率高和耐高温等特性而得到广泛应用\[16\]。在更高工作频率的情况下，通过减小无源元件体积可以实现更高的系统功率密度。因而，高压低导通电阻的 SiC 器件更加适合应用在可再生能源分布式发电系统的大功率双向储能系统中。但在高频状态下，SiC MOSFET高开关速度会引起较大的 dv/dt 和 di/dt，以及器件和应用回路中存在的寄生电感和寄生电容等问题，会增大器件的开关损耗和电磁干扰\[17\]。针对桥式电路中 SiC MOSFET 高速导通带来的串扰问题，文献\[18\]提出了一种 SiC MOSFET 的谐振门级驱动电路，使用三个辅助开关管实现 SiC MOSFET 谐振门极驱动电路以减少驱动损耗。文献\[19\]提出了一种改进 SiC MOSFET 开关性能的有源驱动电路，可以在不同驱动电阻和负载电流条件下有效抑制器件的电流、电压过冲和振荡，但是借助辅助开关的驱动回路实现和使用都较为复杂且成本相对较高。文献\[20\]针对串扰问题设计了一种高速且具有强串扰抑制能力的驱动回路，利用无源器件制造可调电压代替电压源，结构相对简单、成本低廉。但以上驱动回路所使用元器件数量较多，电路结构相对复杂。

本文提出了一种基于 SiC MOSFET 的隔离双向混合型 LLC 谐振变换器。在 DAB 直流变换器基础上利用 SiC 器件可实现大范围开关频率的改变，并且在三种不同工作模式下不需要添加额外的开关器件就可以实现双向工作和所有开关管 ZVS。针对拓扑结构中的 SiC MOSFET，本文设计的驱动回路仅由电阻和电容组成，价格低廉，通过不同的开通电阻和关断电阻来控制开关器件的开通和关断速度。而对于高频状态下，SiC MOSFET 高开关速率引起的 dv/dt 和 di/dt 较大问题，可以在桥臂之间并联低内阻电容，这样既可以减少损耗也能稳定驱动。此外，双相结构允许输出功率低于额定功率一半时关闭一相以提高轻载效率。由于变换器的三种工作模式在开关频率改变时都能实现较宽输出电压增益范围，因而该变换器拓扑适用于蓄电池和超级电容等直流端子输出电压范围变化较大的分布式发电系统储能结构中。

**1 隔离双向混合型 LLC 谐振变换器**

**1.1电路拓扑**

隔离双向混合型 LLC 变换器如图 2 所示，变压器一次侧由 4 个 MOS 管 Q1～Q4 组成全桥电路，每个桥臂的中点 a、b 连接谐振电感 Lr 和集成励磁电感的高频变压器，谐振电容 Cr 连接两个变压器中点和电源负极；变压器二次侧由 4 个 MOS 管 S1～S4组成整流电路，电容 Co1 和 Co2 组成滤波电容。在这个电路中，两个谐振电感 Lr 和变压器的励磁电感 Lm相同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peicKLCjaKrL8aibz2bj3oMlZZoTYtf8NBwU05Wy2nedMgVy0ibG2klnHTw/640?wx_fmt=png&from=appmsg)

**1.2工作原理**

通过不同的脉宽调制控制策略，所提出的隔离双向混合型 LLC 谐振变换器能实现三种工作运行模式。每种运行模式下都可以输出不同的电压增益，且电压增益只和开关管的工作频率 fs 有关。由于双向导通工作原理相同，故本文只研究其正向导通工作原理，且二次侧电源 V0 视为负载 R0 电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pefcLGibshFVQZ3ztj90AF8HqSq2CH5q7u3r0uxlMt52iar9gMmalhDh0Q/640?wx_fmt=png&from=appmsg)

1）工作模式一，全桥工作模式（Full-bridge LLC converter, FLLC）：在该模式下，变压器一次侧开关管 Q1、Q4 和 Q2、Q3 以及二次侧开关管 S1、S4 和 S2、S3 以 50%占空比同时开通和关断，此时变换器的主要工作波形如图 3 所示。图 4 给出了全桥工作模式下变换器各工作模态等效电路。由于 t0～t2 时段内的工作模态和 t2～t4 时段内相同，故本文只给出了t0～t2 时段内的工作原理分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peUnWXw7TyGfWMWknSXhydobqJMEH1DtSQF2MIv3ciaZKWOkz9ibNIclEw/640?wx_fmt=png&from=appmsg)

模态Ⅰ\[t0, t1 ) ：变压器一次侧 MOS 管 Q2 和 Q3关断，Q1 和 Q4 的寄生电容电压放电至 0。当 Q1 和Q4 的漏源极电压 VDS 降为 0 时，在 Q1 和 Q4 零电压开通（ZVS）之前，变压器电流自由流经 MOS 管的体二极管。二次侧 MOS 管 S2 和 S3 由开通到关断。变压器一次电压 vp1 和 vp2、谐振电感电压 VLr 和变压器输入输出电流 ir（ir1=ir2=ir）分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peVFib1DoRLxcpj7ffDym4qs4iarfcJ87eogRNyJpVicrZeEiaGM2Tpqx1TQ/640?wx_fmt=png&from=appmsg)

由归一化电压增益式（9）可知，电压增益 M1受开关频率 fs 控制，且随着谐振电感 Lr 增大，可以得到输出宽范围电压增益。

2）工作模式二，双半桥工作模式（Dual-phasehalf-bridge LLC converter, DLLC）：在该模式下，变压器一次侧开关管 Q1、Q3 和 Q2、Q4 以及变压器二次侧开关管 S1、S3 和 S2、S4 以 50%的占空比互补开通和关断。变压器T1、T2 的一次侧和二次侧并联，相当于一个双半桥LLC谐振变换器。这里使开关管的工作频率大于谐振频率，以保证变压器一次侧和二次侧所有 MOS 管均实现 ZVS。图 5 给出了双半桥工作模式下变换器的主要工作波形。图6 给出了该运行模式下的两种工作模态下的等效电路。t0 开始之前，变压器一次侧 MOS 管 Q1 和 Q3 的寄生电容放电至 0，因此在 t0 时刻，Q1 和 Q3 可以实现 ZVS，此时 Q2 和 Q4关断，二次侧MOS管S2和S4处于导通状态。至t1时刻，二次侧MOS管S1和S3同理可实现 ZVS。在 t2 时刻，变压器一次侧的开关管 Q1和 Q3 关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peoyGCvQlzEe0JibOteZFpibEMuib9eQSnglAxr6lXdKNw9FeibNdp9qYwMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0petM2AJyypFTdsNv4bfibSEW6bSXJ6LIMysG0wJ5jMOnHURocOqpyeuYA/640?wx_fmt=png&from=appmsg)

单半桥工作模式下其基波等效分析的等效电路如图 10 所示，由 DLLC 工作模式的分析，同理可得出该工作状态下 FHA 归一化电压增益为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pectBDeQskxCHfovjZ5Heicm3fSKYibNuomQLV0klOny4IOSs7CQ0Fyofw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pevS3CHGicQ1fhEibO6F67CyBXmePNdXTK73naDl9tlM8qD9r4dVSzzdfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peXl9bIJOteSFQMpUCDia94ibecBjKBPAUKsejArUP6BdHPdHMtLyhyGFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peicUYCez0h0SATWYvRPBIySRv63I33uzf4fxFTxsaLHnd5mX2Gjiba2tg/640?wx_fmt=png&from=appmsg)

本文所提变换器在三种工作模式下都是对称运行的，反向工作时需要将一次侧与二次侧的驱动互换，一次侧并联两个滤波电容，两个电容中点与两个变压器中点连接。由于反向工作过程与正向工作过程一致，因此本节不再赘述。

**1.3 电压增益分析**

借助 Matlab 仿真软件，本文分析了基于 SiC MOSFET 的隔离双向混合型 LLC 谐振变换器在三种工作模式下电压增益与开关频率的关系。考虑到变换器双向导通对称性，取变压器电压比 n\=1，励磁电感 Lm=120μH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peAiagYRYgDbWiaHKEuvGEOY17xPpEIColOpOd4DLwwZE75JZEvicVw4TcQ/640?wx_fmt=png&from=appmsg)

图 11 给出了全桥工作模式下变换器归一化电压增益与开关频率的关系曲线。由图 11 可知，当取R0=31.25Ω时，归一化电压增益随着开关频率 fs 增加而降低。且全桥运行模式下归一化电压增益与谐振电感 Lr 有关，不同的谐振电感取值可得到不同的增益范围。因而谐振电感 Lr 的取值既要满足宽增益需求，又要满足工作状态下的调频范围，需要综合考量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe8JG1SZEpcpdMOF73oJMqohLUWqoS9XbsQbhSYMrlrOtZg5lhXLSQuA/640?wx_fmt=png&from=appmsg)

在双半桥和单半桥工作模式下，取λ (λ \=Lr/Lm)=0.11，则两种工作模式下的谐振频率分别为 fr=220kHz 和 fr′ \=160kHz。双半桥与单半桥工作模式下归一化电压增益分别如图 12 和图 13 所示。由图 12可知，当归一化开关频率 fn（fn=fs/fr）＞1 时，输出电阻阻值越低，归一化增益曲线斜率越高。而图 13中，当归一化开关频率小于 1 时，输出电阻越高，归一化增益曲线斜率越高。在单半桥模式下，通过选取不同的输出电阻值，可使拓扑实现 Buck-Boost功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0petJ6V2ichjge0xMdmcXNye5JVq3vSXWibDSZx7dmfoYMbwyPXmicLVlpDw/640?wx_fmt=png&from=appmsg)

**2 控制策略**

图 14 为混合式 LLC 谐振变换器在不同工作模式下的控制框图。图 14a 为全桥模式下的控制策略，Q1～Q4 为变压器一次侧 MOS 管，S1～S4 为变压器二次侧 MOS 管，Q1,4 与 Q2,3 互补导通，而 S1,4 相对于 Q1,4 移相导通，S1,4 与 S2,3 互补导通。三种工作模式的控制框图相似故不再赘述。在输出电压闭环控制环路中，输出电压 V0 与基准电压 Vref 比较，误差信号经过 PI 调节器后，得到调节器输出信号用于调节所有开关管的开关频率，最终将变换器输出电压控制于基准电压值处。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peBTzIZwV5bU4IrHnZQyd3hNticT2vSic1XDlcc73z4CBX93V2Fhr1KwWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peiafgLGZuzkqR73x6F0gdM3VNNhgSiabgVgRpjWBseqQyG0mmGmbpsnuA/640?wx_fmt=png&from=appmsg)

**3 变换器参数设计分析**

**3.1谐振参数设计**

为保证变压器一次侧和二次侧 MOS 管 Q1～Q4、S1～S4 实现 ZVS，MOS 管的关断电流应高于 IZVS，IZVS 为在截止时间 Td 期间完全放电时，MOS 管的输出电容 Coss 所需的电流。

在全桥工作模式下，输入阻抗包括 Lr 和 Lm，变压器电流处于峰值状态时，变压器一次侧 MOS 管处于关断状态，故在全桥工作模式下开关管的关断电流最高。因此，本文仅分析双半桥工作模式和单半桥工作模式中的 ZVS 条件。

双半桥工作模式下，当开关管的工作频率 fs 等于谐振频率 fr 时，开关管的关断电流最低。在此状态下，开关管关断电流与变压器励磁电流相等，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peUgiakRPL6bgFfUHtzxhOQribGNag25YZrMicnJPt4Y3kuyNNQk7OAB01Q/640?wx_fmt=png&from=appmsg)

在工作模式一（FLLC）时，所提变换器处于降压模式，而由工作模式一（FLLC）切换至工作模式二（DLLC）时，变换器在 DLLC 运行模式下对应的归一化电压增益 M2 最大为 1。为了实现两种工作模式切换过程中变换器的功率相等或变化不大，变换器在两种工作模式下的增益应当接近或相等，在保证工作模式二实现 ZVS 前提下，取变换器在FLLC 运行模式下的归一化电压增益 M1=0.75，其中λ \=Lr/Lm=0.11，进而求得谐振电感 Lr=13.5μH，这样既能保证谐振电感较小利于集成在隔离变压器中，又能满足工作模式一（FLLC）和工作模式二（DLLC）的增益要求，同时也保证了两种工作模式在转换过程中实现平稳过渡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peBbmfmttBYJYfFjGhyzjXzCicWGiaOs3tn7Y7814hibN2oXvDsd34YSX4A/640?wx_fmt=png&from=appmsg)

图 15 给出了双半桥模式下，λ 取不同值时归一化增益与归一化开关频率的关系曲线，由图 15 可知，归一化增益范围随λ 增加而减少。本实验中取λ \=0.11，谐振电感 Lr=λLm，谐振电容根据式（10）求得。因此，实验样机理论参数见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peC8UCQDanB8bc9BeyrfuFic8ZDQptXboa1MPPeh6MLvWY010GtCiaOTdw/640?wx_fmt=png&from=appmsg)

**3.2变压器设计**

为保证双向 LLC 谐振变换器稳定运行，将λ 优化为 0.11，Lm=120μH，谐振电感为 13.5μH，谐振电容 82nF。变压器型号为 PQ40/40，材料为 DMR95，选自东阳磁业集团公司（DMEGC）。考虑到变换器双向工作，高频变压器的一次、二次侧匝数 np 和 ns相等都设置为 16，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pez63PM2Z6LiaxxEIDnzYJFibJUwKKT9K5jfupwnqqxFeK1LfNlsfhY4Cw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pewqlwvGqeicc6KEJ2rnBjsI6H3ORxaraEicrzWSCTVqxaP9DE0gDeFJzw/640?wx_fmt=png&from=appmsg)

**3.3器件应力分析**

**3.3.1 开关管电压电流应力**

输入电压恒定时，忽略二极管压降，变压器一次侧 MOS 管的漏源电压Vds\_Q1-4 等于输入电压，变压器二次侧 MOS 管的漏源电压Vds\_S1-4 等于输出电压，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe4f0MjTHxib5N8VVWr0g5rCrRQXCqPXXnM7EIsTROSFXetQphchoGfnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peHjfWaZ3UczypsvrjPngeTSpzzjjPo2HNU1zU7KzpGbamKszvCv2Jicg/640?wx_fmt=png&from=appmsg)

开关管的最大耐压应选取 50%左右的安全裕度，额定电流一般取为峰值电流的 1.5 倍左右。但在实际实验过程中，考虑到实际导通电阻和驱动损耗等因素，开关管所选择的额定电压和额定电流将会更大。本实验样机这选择的变压器一次侧和二次侧 MOS 管型号为 C3M0045065D（VDS=650V, ID@25℃ \=49A）。

**3.3.2谐振电容Cr 电压应力**

全桥工作模式时谐振电容 Cr 不参与电路运行，故本节只讨论双半桥和单半桥模式时谐振电容的电压应力。忽略死区时间，谐振电容 Cr 仅在LC谐振阶段有充放电作用。在进入死区时间t2～t3时，谐振电容两端电压 VCr 达到最大值。

在双半桥工作模式下，谐振电容Cr 两端的电压的有效值VCr\_RMS2 均表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peY6mZNrdNepbB6NGxBvsricLFvOjf24icDyvib63ibFoR0zhnKmrEdD5FxQ/640?wx_fmt=png&from=appmsg)

**4实验结果**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pem2DApS9zEK4zv2888fumR5xnQ1rBBMBPxEmSPsm4HUA85hmWVRLUjw/640?wx_fmt=png&from=appmsg)

为了验证所提出的基于SiC 器件的隔离双向混合型 LLC 谐振变换器可行性，按照图 2 所示的电路拓扑结构，制作了一台双向运行的 800W 实验样机。具体实验样机参数见表 2。图 16 给出了该双向混合型 LLC 谐振变换器样机。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peHicg0AVOF91pDj3UicefdkXMBIrsLStwcI5eL4ibj4pwWknrstPibRQjHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peOkDIfrzUvaASqc6JPDohMz6889p4gKt3CKoz7OWLHwbPEmicQUEgBicQ/640?wx_fmt=png&from=appmsg)

图 17 为全桥模式正向工作时，输入电压为300V、负载电阻 R\=100Ω 情况下变压器一次侧开关管 Q1 的栅源电压 VGS、漏源电压 VDS、谐振电感电流 iLr 以及谐振电容电压 VCr 的实验波形。由图 17可知，开关管 Q1 可以实现 ZVS。由于变压器一次侧开关管 Q1～Q4 工作状态完全一致，因而一次侧其他开关管 Q2、Q3、Q4 亦可实现软开关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0perKcu84HVia1oibEmiclxWf7xJCCY18xjziaekNRFdibUUzZft0pFkpg6CdA/640?wx_fmt=png&from=appmsg)

图 18 为全桥模式下变换器反向工作时，变压器二次侧 MOS 管 S1 的栅源电压 VGS、漏源电压 VDS、谐振电感电流 iLr 以及谐振电容电压 VCr 的实验波形。从图 18 可知，开关管 S1 可以实现 ZVS，由于变压器二次侧开关管 S1～S4 工作状态完全一致，因而变压器二次侧其他开关管可实现软开关。图 19～图 22 分别为双半桥工作模式和单半桥工作模式下变换器正向和反向运行的实验波形。从实验波形可以看出，在三种工作运行模式下，无论正向工作或反向工作，谐振电感电流波形和谐振电容电压波形相似，和仿真结果一致，且在栅源驱动电压 VGS 到来之前，漏源电压 VDS 已经降为 0，即可使所有 MOS管实现 ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe9Z98UMBuSUZgRg9E9TbmmT3au6bIXLIKGiatw6SXUUicqOibQLjib1l77g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peEuNkVUgp2y0OjuCibDInZSFb48wo97KSrb6KmeDgQ0dicOzVyoLllmag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pesCOIiabBAe7MW7SAh6vLLxqH93qtoYCGOp52UROaribRgxuPicFo1IaqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0penCWFZPpeLdCvVcfk0fIMFsRCDwH1icyfT8xH3LORJLa1G69M4icBHS9Q/640?wx_fmt=png&from=appmsg)

图 23 为三种运行模式正向工作时相互转换的波形。由图 23 可以看出，三种工作运行模式下可以自由切换，模式一（FLLC）转至模式三（SLLC），开关频率由 100kHz 瞬时增加至 170kHz，模式三（SLLC）转至模式二（DLLC），开关频率由 170kHz再增加至 240kHz。通过工作模式切换让开关频率获得较大的变化范围，且因为模式三（SLLC）属于单半桥工作，因此选择模式三过渡时可减少变压器一次侧和二次侧一半数量开关管的使用损耗。图24给出了三种运行模式下正向工作时在不同输出功率下的实验效率。全桥工作模式下效率随输出功率的增加而增加，满载效率为 96.16%；双半桥模式下效率曲线有一定起伏且随着输出功率增加，效率曲线逐渐趋于平稳，其最高效率为 97.9%；单半桥运行模式下效率曲线稳定，满载时为 96.35%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peGCHVA9DsEEUNqto0VCjpEtgPaXDqWZBhPZDvMCgibePh99ULsmTqTGQ/640?wx_fmt=png&from=appmsg)

**5 结论**

针对 DAB 变换器软开关范围窄、开关频率低等存在的问题，本文提出了一种适用于可再生能源分布式发电系统的混合式 LLC 谐振变换器。所提变换器可以在三种不同工作模式下运行且不需要增加额外的开关管，每种工作模式无论正向运行或是反向运行，变压器一次侧和二次侧所有开关管都可以实现 ZVS，实现了高效的双向功率转换和宽电压增益调节。本文为所提变换器提供了设计参考，并搭建了一台 800W 基于 SiC MOSFET 的实验样机来验证所提拓扑和理论分析的可行性和优越性。

参考文献

\[1\] Sun Bo, Dragičević T, Freijedo F D, et al. A control algorithm for electric vehicle fast charging stationsequipped with flywheel energy storage systems\[J\].IEEE Transactions on Power Electronics, 2016, 31(9):6674-6685.

\[2\] 江添洋, 张军明, 汪槱生. 同步控制双向 LLC 谐振变换器\[J\]. 电工技术学报, 2015, 30(12): 87-96.

\[3\] 鲁思兆, 吴雷, 李思奇, 等. 零电压开关 N 型交并三电平双向 DC-DC 变换器\[J\]. 电工技术学报, 2020,35(增刊 2): 461-469, 493.

\[4\] Liserre M, Sauter T, Hung J Y. Future energy systems: integrating renewable energy sources into the smart power grid through industrial electronics\[J\]. IEEE Industrial Electronics Magazine, 2010, 4(1): 18-37.

\[5\] 杨东江, 段彬, 丁文龙, 等. 一种带辅助双向开关单元的宽输入电压范围 LLC谐振变换器\[J\]. 电工技术学报, 2020, 35(4): 775-785.

\[6\] 冯兴田, 邵康, 崔晓, 等. 基于多模态切换的宽电压增益 LLC谐振变换器控制策略\[J\]. 电工技术学报,2020, 35(20): 4350-4360.

\[7\] 刘瑞欣, 王议锋, 韩富强, 等. 应用于宽输入电压范围的两模式切换型软开关谐振直流变换器\[J\]. 电工技术学报, 2020, 35(22): 4739-4749.

\[8\] 陈梦颖, 王议锋, 陈庆, 等. 一种可变结构型高效宽增益多谐振软开关直流变换器\[J\]. 电工技术学报,2021, 36(12): 1000-6753.

\[9\] Weise N D, Castelino G, Basu K, et al. A single-stage dual-active-bridge-based soft switched AC-DC con verter with open-loop power factor correction and other advanced features\[J\]. IEEE Transactions on Power Electronics, 2014, 29(8): 4007-4016.

\[10\] Liao Yuefeng, Xu Guo, Sun Yao, et al. Single-stage DAB-LLC hybrid bidirectional converter with tight voltage regulation under DCX operation\[J\]. IEEE Transactions on Industrial Electronics, 2021, 68(1):293-303.

\[11\] Everts J, Krismer F, Jeroen V, et al. Optimal ZVS modulation of single-phase single-stage bidirectional DAB AC-DC converters\[J\]. IEEE Transactions on Power Electronics, 2014, 29(8): 3954-3970.

\[12\] Jauch F, Biela J. Combined phase shift and frequency modulation of a dual active bridge AC-DC converter with PFC\[J\]. IEEE Transactions on Power Electronics,2016, 31(12): 1.

\[13\] Wu Hongfei, Ding Shun, Sun Kai, et al. Bidirectional soft-switching series-resonant converter with simple PWM control and load-independent voltage-gain characteristics for energy storage system in DC microgrids\[J\]. IEEE Journal of Emerging & Selected Topics in Power Electronics, 2017, 5(3): 995-1007.

\[14\] Yaqoob M, Loo K H, Lai Y M. Fully soft-switched dual-active-bridge converter with switched- impedancebased power control\[J\]. IEEE Transactions on Power Electronics, 2018, 33(11): 9267-9281.

\[15\] Wu Hongfei, Sun Kai, Li Yuewei, et al. Fixed frequency PWM-controlled bidirectional current-fedsoft-switching series-resonant converter for energy storage applications\[J\]. IEEE Transactions on Industria lElectronics, 2017, 64(8): 6190-6201.

\[16\] Teerakawanich N, Johnson C M. Design optimization of quasi-active gate control for series-connected power devices\[J\]. IEEE Transactions on Power Electronics, 2014, 29(6): 2705-2714.

\[17\] Diab M S, Yuan Xibo. A quasi-three-level PWM scheme to combat motor overvoltage in SiC-based single-phase drives\[J\]. IEEE Transactions on Power Electronics, 2020, 35(12): 12639-12645.

\[18\] 张建忠, 吴海富, 张雅倩, 等. 一种 SiC MOSFET谐振门极驱动电路\[J\]. 电工技术学报, 2020, 35(16):3453-3459.

\[19\] 李先允, 卢乙, 倪喜军, 等. 一种改进 SiC MOSFET开关性能的有源驱动电路\[J\]. 中国电机工程学报,2020, 40(18): 5760-5770.

\[20\] 李国文, 杭丽君, 童安平, 等. 串扰有源抑制型 SiC MOSFET 驱动方法\[J\]. 中国电机工程学报, 2021,41(11): 3915-3923.

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)