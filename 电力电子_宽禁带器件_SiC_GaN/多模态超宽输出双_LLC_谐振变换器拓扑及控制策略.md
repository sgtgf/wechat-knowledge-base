# 多模态超宽输出双 LLC 谐振变换器拓扑及控制策略

原创 张俊涛， 林国庆 SiC碳化硅MOS管及功率模块的应用 2026-02-24 10:52 广东

> 原文地址: [https://mp.weixin.qq.com/s/GuWZR1anu2tHmpxjT4pmhw](https://mp.weixin.qq.com/s/GuWZR1anu2tHmpxjT4pmhw)

文章来源：电工技术学报

作者：张俊涛，林国庆（福州大学福建省新能源发电与电能变换重点实验室福州 350116）  

摘要：针对传统 LLC 谐振变换器在宽电压范围应用中存在开关工作频率范围宽、整体效率较低等问题，该文提出一种多模态超宽输出双 LLC 谐振变换器。该变换器基于可变拓扑思想，通过一次侧半桥、全桥逆变切换以及二次侧桥式、倍压整流切换，构造出四种不同增益范围的工作模 式，实现了超宽输出电压范围，所用开关管在全功率范围内均具有较好的软开关特性。为进一步提高工作效率，针对所提变换器设计一种脉冲频率调制与脉冲宽度调制相结合的混合控制策略。 基于SiC 开关器件，设计并搭建一台输出电压 40～480 V，最大功率为480 W 的原理样机，验证了所提变换器的可行性和有效性。  

关键词：LLC 谐振变换器多模态宽输出电压范围双变压器

0.引言  

在全球能源危机背景之下，传统化石能源逐渐被以风能、太阳能为代表的新能源替代，风力发电、光伏发电以及电动汽车等新能源的生产和应用受到广泛关注。由于风力发电、光伏发电具有波动性，电动汽车车型各式各样，充电标准各不相同，电池在深度放电时，电压下限可能降低至额定电压的30%以下，已经有CHAdeMO 标准规定非车载充电机需要达到50～500V 的10 倍输出电压范围。因此，需要针对宽范围、高效率DC-DC 变换器展开研究。 

LLC 谐振变换器以其优越的软开关和电磁兼容特性，以及高效率、高功率密度等特点，在宽电压范围DC-DC 变换器领域成为研究热点。但传统的LLC 变换器采用脉冲频率调制（Pulse Frequency  Modulation, PFM），在宽电压范围应用时开关频率范围过宽，能达到的增益范围十分有限，且环流损耗大，导致变换器整体效率下降，限制了其应用范围。为了在保持LLC 变换器高效率的同时实现宽电压范围，国内外专家学者进行了多种改进研究。  

文献\[7\]对传统LLC 谐振变换器进行精确建模， 通过峰值增益近似得到不同负载和开关频率下的最优电压增益曲线，从而达到电路的最大增益范围，但这种方法只能微调曲线范围，不能从本质上改变变换器的增益范围。文献\[8-10\]提出LLC 谐振变换器的参数设计方法，通过对变换器的参数进行优化设计，提高了变换器的整体工作效率，但工作频率远离谐振频率时效率仍会显著下降。  

文献\[11\]在全桥LLC 谐振变换器的基础上增加了输入电容均分中点的双向开关，将变换器的增益范围拓宽为全桥LLC 与半桥LLC 的合集。文献\[12\]在变换器二次侧增加了有源开关管，将整流侧配置为倍压整流，变换器电压增益可拓宽为原来的2 倍。文献\[13-16\]中给出了适合宽电压范围的多电平LLC结构，但是变换器仍采用变频控制，并且频率变化范围较大，不利于磁性元器件及滤波器设计与优化。在文献\[17-20\]中，脉宽调制（Pulse Width Modulation,  PWM）和移相调制（Phase Shift Modulation, PSM）分别被应用于LLC 谐振变换器，变换器恒定工作在谐振频率下，但存在轻载时失去软开关特性的问题。  

在宽电压增益范围领域，拓扑可重构思想被广泛运用。通过适当增减器件、组合不同开关信号等方式，在现有拓扑的基础上构造多种不同增益范围的工作模态，从而实现更宽的增益范围。文献\[21\]通过检测开关频率大小来控制变换器分别工作在三相交错、全桥和半桥模态，加入三相模态后变换器能适应更高的输入电压，实现更宽的输入电压增益范围。文献\[22\]增加一个谐振回路，以较少的开关器件构造出四种工作模式，实现了6 倍的电压增益范围，但单半桥模式非工作谐振腔存在较大电流，降低了变换器效率。文献\[23\]通过配置H5 桥的开关模式，两个非对称LLC 谐振回路可以在空闲、半桥、 混合桥和全桥模式下工作，实现较窄频率范围下的超宽输出电压范围。文献\[24\]通过控制LLC 逆变环节在全桥和半桥之间切换，二次侧整流环节通过增加开关管，配置为桥式整流、倍压整流切换，实现了较窄频率范围内7.5 倍的超宽电压增益，但低压时整流管寄生电容会造成整流电流畸变、电压波动、 效率降低。  

鉴于此，本文提出了一种多模态超宽输出双LLC 谐振变换器，通过控制开关管的工作状态，将四种具有不同增益的模式组合，实现了12 倍的超宽输出电压范围，并且在全工作范围内具有较高的工作效率，所用开关管、二极管具有良好的软开关性能。由于碳化硅（Silicon Carbide, SiC）器件导通损耗小、散热性能好并且能满足现代电子对高功率和高压等要求，最后基于SiC 器件搭建一台最大功率480W，输出电压40～480V的实验样机，仿真和实验表明，所提变换器能够实现超宽输出电压范围，且总体效率较高。  

1.多模态超宽输出LLC谐振变换器  

1.1电路拓扑  

所提多模态超宽输出双LLC 谐振变换器拓扑如图1 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOBicTGpATXS6iaUaoEmDhvKCM3XxcPmN842qK6rG8gMXc31JXIVTa0x2kthCfNmADiaUEwWcMVaQgrkA4PJIqhM2t6FyPYg3wp0M/640?wx_fmt=png&from=appmsg)

图1 中，Vin 为输入电压，开关管S1～S4 构成一次侧全桥逆变电路，谐振电感Lr1、Lr2， 谐振电容Cr1、Cr2 和励磁电感Lm1、Lm2 构成谐振腔1 和谐振腔2；开关管S5、二极管VD1～VD6 和隔直电容Cs1、Cs2 构成二次侧整流电路；T1、T2 为高频变压器，电压比分别为n1、n2；Cin 为输入电容，Co 为输出电容、Ro 为负载。  

1.2工作原理  

所提LLC 谐振变换器一次侧采用全桥逆变环节，通过调制4 个有源开关S1～S4 的驱动信号操作逆变环节；整流电路中通过控制开关管S5 的占空比来改变桥式、倍压整流的占比。变换器分为四种工作模式，根据电压增益不同可分为：串联半桥（SeriesConnected  Half-Bridge, SCHB）模式、单半桥（Single  Half-Bridge, SHB）模式、双半桥（Dual Half-Bridge,  DHB）模式、混合桥（Mixed Bridge, MB）模式。 本文将以增益由低到高顺序进行介绍。  

1.2.1串联半桥模式

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMezJAUicA1wcnsAf1aXm8rOB82hMKxeicicaqpxWU9gy6FbP4ze4tYo1CWahqmtJic6JWXnbDhuia4mBZAfZ8libEqwoOe7TrGlJZww/640?wx_fmt=png&from=appmsg)

串联半桥模式运行状态如图2 所示，当开关管S1、S2 和 S5 恒定关断，S3、S4 以50%占空比互补导通时，变换器工作在串联半桥模式。此时两个谐振回路在一次侧串联，其输入端口BC 两端电压是幅值为Vin 的单极性方波uBC。在变换器二次侧，两变压器分别进行全桥整流，由于两变压器电压极性相反，流入连接点的电流方向相同，可以复用由二极管VD5、VD6 构成的桥臂。其工作原理与半桥LLC谐振变换器类似，不再给出其关键工作波形。

1.2.2单半桥模式

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOp6X6K8Iib9ZR0DXXPDtPVtgiaHicH9JQJqia96NqWMJDPHZaJHeJLUePiaqXPfDBzNCrA5vwM6QcBrqg3snbHD5v644iccvjUfQMUc/640?wx_fmt=png&from=appmsg)

当开关管S1、S5 保持关断，S2 保持导通，S3、S4 以50%占空比交替导通时，变换器工作在单半桥模式，其等效电路如图3 所示。在该模式下变换器谐振腔2 不进行能量传递，仅通过谐振腔1 向二次侧传输能量，变换器二次侧构成全桥整流，该模式下变换器等效于传统的半桥LLC 谐振变换器，由于原理简单，这里不再给出其关键工作波形。

1.2.3双半桥模式

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOtFHa4No7wsl7vjyu44Uyqp8Fs5KjjuEEgrYShzppQ1Lxf3OJrsc2JcaAiasOx2dAJYibdCozgicO4LSsLekicD3NQvfzSNocgOc4/640?wx_fmt=png&from=appmsg)

图4 所示为双半桥模式下的等效电路，该模式下变换器开关管S3 处于常断状态，S4 保持导通，开关S1 和S2 以50%占空比交替导通。此时变换器两个谐振腔都以半桥模式工作，等效为两个一次侧并联、二次侧串联的半桥LLC 谐振变换器，其工作原理与半桥LLC 谐振变换器原理相同。

1.2.4混合桥模式

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPB2U5zicib8mo5JpDRzh8r8F2Lfkx6BgUnO7sSymeHCCPju2efiauk8R3lMrQeuVMwl2oQicODtepn8VVBjOgBhlGhk6HfiaeMT7ibE/640?wx_fmt=png&from=appmsg)

图5 为混合桥模式下变换器等效电路。该模式下开关管S1、S2 以50%占空比交替导通，开关管S3 以占空比D导通，且S4 与S3 互补导通，开关管S5 在S1 导通tdelay 后导通，与S3 同时关断。该模式下工作频率恒定不变，通过改变开关管S3、S4 和S5的占空比，控制变换器输出电压变化。图中，uAB、uBC 分别为谐振腔1 和谐振腔2 的端口电压，iLr1、iLr2 分别为两谐振腔的谐振电流，iLm1、iLm2 分别为两励磁电感的励磁电流，is1 为二次电流，iS5 为流过开关管S5 的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNFK9fic6MHDJJO9icweEr8TRdvc3b7cX1KPssNUH5uyJdIL2icFicm0oDWyBUTZTVibfpBoJUsEQ3AhJ7Jjr17CD9hKlo9cjGrNhtI/640?wx_fmt=png&from=appmsg)

图6 为变换器的稳态工作波形，从图6 中可知，变换器每个工作周期分为9 个工作阶段。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMDgXVmrWVaBUFcOLeydA7gAmIcpYiaeg2YJhgZFhibm01CxkmicgC9bSRuteX5Vx0uvfggy8lsnenx9ToOJJ1mfmHIcd79icJzBgs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNdWcAfhZEFnYCqrvnOEDg550IYqzibhSOLk4majHr8Tp3JPWb9aMibwd5mRNC9jP6cEqHnLv8k1ibt2fJHmtBSEtUO4adefnKoSI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNqb4w611zUwxej1QBSzCZ9FQicVlO6IbMdKWAtFREFGW5Jyhuh97poVwORMnS50rsnp6GZTtSWxNTfYKBeFUeia1hK4NpTicmrhc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPyFmqibM20gewZF9pC8s0WjFQIrM1ic85h5qf7Vo7D1SSJvgTwSdkIm20Xf1Jcnj9qjszotDZTSYgMM8yRLjCUurVRp4UkkXbUk/640?wx_fmt=png&from=appmsg)

图7 为每个阶段的电路模态。定义变换器的特 征阻抗Zr、谐振角频率ωr 、励磁电感参与谐振时的谐振角频率ωm 和电感比k分别为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPu8fSQ2pdrSfBqicuauyAcbu3NZa1DicBOghMm2HnDJeUJuH3zrRic9G4ibErYcx6bvXJLWiah43OanOPVC5icRK5kr8f1g4lw28WqA/640?wx_fmt=png&from=appmsg)

（1）阶段1 \[t0,t1 ) ：t0 时刻前，开关管S1、S4和S5导通，谐振电流iLr1、iLr2 为正，二次侧能量经过VD2 和S5 向负载供电。t0 时刻，开关管S1、S4关断，励磁电流iLm1、iLm2 线性减小，谐振电流iLr1、iLr2 分别对开关管S1、S4 和S2、S3 的寄生电容进行充电和放电，当谐振腔1 端口电压uAB 由正变负时， 谐振电流iLr1 通过S2、S3 的体二极管续流，为S2、S3 的零电压开通做准备。  

（2）阶段2 \[t1,t2 ) ：t1 时刻，S2、S3 实现零电压软开关（Zero Voltage Switching, ZVS），两谐振腔发生串联谐振，谐振电流iLr1、iLr2 快速减小，二次侧仍然经过S5 和VD2 向负载供电。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMD5WBibLyYlJxnxyPoMiaxiamic6VArl6X2ahwsv8IqweAjZy5oqYPWSDlibicpgiaRgbTuJdoXY5E4KAGJY0cqx8sR5W5mjm0JrK8yM/640?wx_fmt=png&from=appmsg)

（3）阶段3 \[t2,t3 ) ：t2 时刻，开关管S3、S5 关断，谐振电流iLr1、iLr2 共同对开关管S3、S4 的寄生电容充放电，谐振电流iLr1、iLr2 线性减小，励磁电流iLm1、iLm2 线性增大，二次电流is1 对开关管S5 的寄生电容充电。当谐振腔1 电压uAB\=0 时，谐振电流iLr1 通过开关管S4 的体二极管续流，为开关管S4零电压开通做准备。  

（4）阶段4 \[t3,t4 ) ：t3 时刻，开关管S4 实现ZVS导通，谐振电流iLr1、iLr2 线性减小，励磁电流继续线性增大，二次电流is1 线性下降。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM2nDhGP9qibftd8PUq5CArc8wdt9IVuCGVpbR4PJQRgiaJj4eIBenfp2kPM808viaGqJvVJITLSiat0YSt7te0Ee3SYe4t4WxySmA/640?wx_fmt=png&from=appmsg)

（5）阶段5 \[t4,t5 ) ：t4 时刻，谐振电流iLr1、iLr2下降至与励磁电流iLm1、iLm2 相等，此时二次电流is1降为0，二极管VD2、VD3 实现零电流软开关（Zero  Current Switching, ZCS）关断。励磁电感Lm1 和Lm2上的钳位电压消失，一次侧谐振电感、谐振电容和励磁电感共同谐振，输出电压Vo 由输出电容Co维持。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOwEZtGLuAYTYZylnkPk2ibfgvNtH5VSCnvksNHAWfsjOXicQAgibbhJQX0hfV2sAdDDDgJGVHDeGZtvibSYxnYiatmCwPnecF3UzrM/640?wx_fmt=png&from=appmsg)

（6）阶段6 \[t5,t6 ) ：t5 时刻，开关管S2 关断， 谐振电流iLr1 和iLr2 共同对开关管S1、S2 的寄生电容充放电，当uAB 和uAC 变为输入电压Vin 时，谐振电流经过开关管S1 的体二极管续流，为开关管S1 零 电压开通做准备。二次电流is1 在该阶段经过二极管VD1 和隔直电容Cs1 对开关管S5 的寄生电容放电。  

（7）阶段7 \[t6,t7 ) ：t6 时刻，开关管S1 实现ZVS导通，两谐振腔端口电压uAB 和uAC 都变为输入电压Vin，励磁电流iLm1 和iLm2 线性上升，Lr1、Cr1 和Lr2、Cr2 串联谐振，谐振电流iLr1、iLr2 开始以正弦趋势变化。经过时间tdelay 后，开关管S5 的寄生电容放电完成，此时二次电流is1 经过S5 的体二极管续流，为开关管S5 实现ZVS 开通创造条件。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNWCDNf3ULSytENG5UCvrNboqDqZHgqaxcBA3XYMLzzqic4jOvVr4lib7icPicbB2Xhiah5AFbE2SAkgvmzIFxVCqnR0D4ibHuwN715M/640?wx_fmt=png&from=appmsg)

（8）阶段8 \[t7,t8 ) ：t7 时刻，开关管S5 实现ZVS导通，励磁电流iLm1 和iLm2 继续线性上升，谐振电流iLr1、iLr2 继续以正弦趋势变化。  

（9）阶段8 \[t8,t9\]：t8 时刻，谐振电流iLr1和iLr2与磁化电流iLm1 和iLm2 一致。Lm1 和 Lm2 上的钳位电压消失，输出电压Vo 由输出电容Co 维持。二次电流逐渐减小到0，二极管VD1 实现ZCS 关断，t9 时刻，变换器一个工作周期结束，进入下一个周期。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNmMMLgOUePfERkJnF3DSURffLibibEI0j0ILml5K5oUiaXqCYHicuhZeyZia7ib3x5Wcl866icBgPIc1NVqopuaCCzKhN2yIcY8IlliaE/640?wx_fmt=png&from=appmsg)

2.特性分析  

2.1电压增益特性  

为简化分析，假设二次侧隔直电容足够大，其两端电压可视为恒定值。本文使用基波近似（First  Harmonic Approximation, FHA）法分析变换器的电压增益。所提变换器的两个谐振回路完全相同，因此将其中一个谐振回路作为参考，定义谐振频率fr0、 交流等效阻抗Rac0、品质因数Q0 分别为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPHuMmJQeKX2Rib2SEhpbFmX6jdiaLCa7w3anMwZymMRiccbvsyUrSic5xULibcaK3nRoLcL5gxXWMjx9G3ZsIADPNZvZmHDQFCQAfw/640?wx_fmt=png&from=appmsg)

1）串联半桥模式

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMqQZJ4deZgPibGKjjEgy5UXCtSkPqxWWIDvMiaxuoSjlgUnQpDzelficicRRwrrCcAbYyUOf75tN64gME0ZLAl89Vq9GW4SSyNeyI/640?wx_fmt=png&from=appmsg)

串联半桥模式下变换器的FHA 等效电路如图8所示。该模式下变换器两个串联连接的变压器在一次侧可等效为一个变压器，其电压比等效为n\= n1+n2，变压器一次电压基波分量的方均根值加倍。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtQicsvQM0ppicr9xSRVJfR5hpTZJkgicgrGuMJZpf34Qg3E2rg3KupGQzrVGcuWMWqderRbr5sAGwsquxjb6UHnohAkXnmuwiadY/640?wx_fmt=png&from=appmsg)

式中，Vo\_SCHB 为变换器在串联半桥模式下的输出电压。  

由于两个谐振回路的等效交流电阻相等，可以得到该模式下的交流等效电阻Rac\_SCHB 和品质因数QSCHB 分别为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPLNeu2A9pEh2yMYNr9V4BS9jRKGyob3Xl8xbkuheasulqbAQeKojJ7rYQmbT277xHyibvKVKaicLibsnRJMcp9skVpzjEoXqHfeQ/640?wx_fmt=png&from=appmsg)

并且该模式下谐振频率大小为fr0，可以简单推导出串联半桥模式下的电压增益表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMibibaaf6T1CCDsAWNBh9Gb9m2Gk9APxKaGLSzrTxMG66CcrHBhSwvjIrJA18GhZbbt534d7jAfRFkMp8kPxuHkCWBbn7JDLhLY/640?wx_fmt=png&from=appmsg)

式中，fn 为变换器的归一化频率，fn\= fs/fr0；k为变换器的电感比，k\=Lm/Lr。 

2）单半桥模式  

该模式下变换器等效于传统的半桥LLC 谐振变换器，谐振频率fr\_SHB、交流等效电阻Rac\_SHB 和 品质因数QSHB 等于式（7）中的参考值。该模式电压增益为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMo75vgxEw4iaWVJY8qhQbCvH9NkomHRlaDIz6N9icriaiaNia5wVels7icYwQB9bgiaVDRIh6I5JzITA1gjY8q02OJlIpp8LaTmto7qc/640?wx_fmt=png&from=appmsg)

3）双半桥模式  

该模式下变换器等效为两个一次侧并联、二次侧串联的半桥LLC 谐振变换器，与单半桥模式相比，其交流等效电阻Rac\_DHB 变为原来的一半，因此可得到其增益为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO637Je0ia8kw3cCMeCG99W13icHzYkcUnBzrDcSPicP4OLicicvpqzGOf5RMSqLV4JxbBY21YSwupiaqtAEPo8y6PmibextNMYUpPZMM/640?wx_fmt=png&from=appmsg)

4）混合桥模式  

所提变换器在混合桥模式下稳态工作时，死区时间远小于开关周期，为了简化推导，分析混合桥模式电压增益特性时忽略死区的影响，变换器归一化电压增益定义为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAYKEQ3eQC2v6ic5RD1FLicoNW6IoOMb65DxibRicmqZX39lBic3jgzTVkJZbYwoaMdfREfFREXibvTHW9GtxM2SHXzUNdkEVDPHuHI/640?wx_fmt=png&from=appmsg)

根据第1 节分析，由于变压器二次电流在阶段5 和阶段9 为零，仅有阶段2、4、7、8 向负载输送能量。忽略功率损耗并应用基尔霍夫电流定律，电路参数与输出功率之间的关系可以推导为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPfKe1fyiaakNfGpfzvEKFYfRyaIgWoaiaAlVvy11B4LOahnibcTXvf9njS2J3x0HB3J90TtFf5pxBJr6MhYHgNSibyeI76AkYbKmU/640?wx_fmt=png&from=appmsg)

阶段4 的is1 近似于线性变化，该阶段传输的能量可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN89ldfCQy0E4zqKJUfMWibCQx5EZjlYrR62uUsELjncqGMC0XF9MPoWUVaLDKSyicEzCz6kkDksV99qkZb813m3j52FLhpzjbKE/640?wx_fmt=png&from=appmsg)

根据隔直电容Cs1 和Cs2 的电荷平衡，阶段2、7、8 中二次电流is1 平均值应该相等，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM0Jp00d9NDbf7zDdyusY8xjPemibt25ldfkFufRvZICfAHuibTPETqHJOQfncVayfYcyvaDXZ9B0U7DmsPtHcphJy6uersMPKoo/640?wx_fmt=png&from=appmsg)

电容电压和电感电流在任何相邻阶段之间总是连续的，即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPBFECNOWLy6icz4lbKax3DUXZTSYHEywtTfGHUCafz0lYJf2eXpiaOY3B02xiaILcbRvIBxpupwq0Ncl359aHVHPQk3ZuV50XSH8/640?wx_fmt=png&from=appmsg)

式中，X、Y代表相邻的两个阶段；下标“s、e”表 示特定阶段的开始和结束。  

在t4和t8时刻谐振电流iLr1、iLr2和励磁电流iLm1、iLm2 相等，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO4ah2x32f14hJmmYd6wHicdINibCVRQOLTRdau5OXlTk6tWHQjeQ21e6fqjBR2DmfRcMSSt0YOUC0z2VbMNUIiamJQUEFS397x8o/640?wx_fmt=png&from=appmsg)

在稳态下，iLr1、iLr2、iLm1、iLm2 和uCr1、uCr2 的最终值和初始值在一个开关周期内相等，又提供了额外的约束条件为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM5aAwW9iaChz35icLcy1gLJqvJwabO8wmLKUlYKB5UbWR9kR2NOibq4m9DkBTb3qbapFHeZibYcricgBibNTLIbXalmEysMm4fuAyS4/640?wx_fmt=png&from=appmsg)

联立式（1）～式（5）和式（12）～式（18）， 可以推导出占空比D和归一化电压增益MMH之间的关系。这些方程构成超越函数，可以通过Matlab 求 其数值解。图9 绘制了在不同有效负载电阻Ro 下占 空比对归一化电压增益的曲线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOvJwtBtfX2XZnndqkYhQDJK2HOSEch5AFg8ic2pF1eJzfAZVOfDVQnq7M9oukL7459SN5qZJNAo1VRIy86tdZZP1AR9L2ve1pA/640?wx_fmt=png&from=appmsg)

该模式下LLC 变换器通过改变占空比D进行电压调节。当D\=0 时，变换器等效于谐振频率下的双半桥模式，此时变换器电压增益最小，得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMW5ZBPMiauoialoyxnydI9enr2qvkvEI2SMCdhL4PuYhoDG3al1k6gKAiaLQRurFPXSugYkgnV8bicAsH4cSJKialPBKlGlfI5ySEM/640?wx_fmt=png&from=appmsg)

当D\=0.5 时，变换器谐振腔1 工作在全桥模式，谐振腔2 工作在半桥模式，二次侧等效于传统的倍压整流，因此，最大归一化电压增益为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNpfrs5qkBA9998GsnEXQQbzFUgum9GFKib13dM4lz2iat1g2rYvu9273iaKUPa585vEgibmOWEohFWyOx7e8oDdibbqgARsPmYBaws/640?wx_fmt=png&from=appmsg)

由式（9）～式（11）可得到图10a 所示的变换器在PFM 模式下的电压增益曲线，结合占空比D和归一化电压增益MMH 之间的关系可以得到变换 器总体增益曲线，如图10b 所示。由图10 可见，变换器四种模式可以实现增益平滑衔接，变换器总体归一化电压增益的调节范围可达到0.25～3。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKdnvZVQLjCZBc2fJ0ZjVican9oEqKuu3lfsDiazlz348cLn1EfCiaRW5YX6MFxRkDpznbbZo2bTqWDmWe55QewLKkjeUABy6C9U/640?wx_fmt=png&from=appmsg)

2.2 ZVS特性  

LLC 谐振变换器具有优秀的软开关特性，容易实现变换器的高效率，本节将对MOSFET的软开关特性进行分析。在PFM 控制下，为了保证ZVS，在第一个半周期结束时的储能电流应该足够大，以在死区时间间隔td内完成对开关管寄生电容完全充放电。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP2FCoJ06FCx52gOyTT9xHwPg17YsATRaotxJ72icVAXkGaekn7m8Ue61mhdO2ME2HfzFicT4aDRny4JHoibWlG2nBoRpKz39Zt0M/640?wx_fmt=png&from=appmsg)

式中，IZVS 为开关管实现ZVS 导通所需的电流；Coss为开关管的寄生电容。  

根据第2.1 节中的分析，谐振回路的能量由死区时间内的磁化电流峰值决定，磁化电流峰值ILm\_p可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPt5M83sgwMOcT3dZk1Wicf4bP45lSrZmibE6sfr56X4WJ2IbhicjMZ8dCYmKUrb7MXAnhAE5IyEzo5mauS1n7hmnicUIXtlWzYA4E/640?wx_fmt=png&from=appmsg)

可以得到励磁电感约束条件为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO2RouFkwheW25EqBq9DGyiaYmiafkdFpRvnY1K6RBickQbQbib7ptseIvUV6MfDDxibiccjfBN3ztX9Hwr2xN0aONVy6bcibfWrYcngg/640?wx_fmt=png&from=appmsg)

在变换器工作范围内，串联半桥模式下的磁化电流峰值最小，具有最小的nVo/Vin\=0.25，因此可以得到励磁电感的取值范围为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMg8miaM5jRlEogYQVwWTqibiaJmAcOMTXgtdGD0aQ2cM9UZlffjycpoySEwIsAmy6hYWjLF2sahdAVJ3VCumgDVnmFYZjEwQwAJs/640?wx_fmt=png&from=appmsg)

对混合桥模式，此时变换器采用PWM 控制，容易得到式（26）以满足开关管S1、S2 和S3 的ZVS条件。在开关管S4 导通之前（t2～t3），励磁电流iLm1对S3、S4 的寄生电容充放电，满足式（27）即可实现S4 的ZVS 开通。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPYiaNRqibgJT2C0l3Xaliaiclesia5KCFO6ibNz881siaP2ialI9Qicatp50F5Lf7uuvyT9gdNMvO9UlHaXL5XsmfRvib90Ifroofm4N73c/640?wx_fmt=png&from=appmsg)

若要实现开关管S5 的ZVS 开通，需要二次电流is1 在t7 时刻前经过S5 的体二极管续流。观察变换器的工作波形容易得到，在阶段8\[t7, t8)内任意时刻开通S5 即可实现其ZVS 导通。  

由于开关管的体二极管导通损耗较大，为进一 步提高工作效率，iS5 流过体二极管的时间应尽可能短，即开关管S5 应实现同步整流。在S5 导通前， 励磁电流与谐振电流相等，此时变压器相当于开路， 二次侧开关管S5 没有电流流过，其两端电压大小等于隔直电容Cs1 两端电压VCs1。与式（27）相似， 可以得到S5 的ZVS 条件为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOmibPR38ofkJjhovIMZeib4vwfiaayRtdXIRFQRS9BKxVU4UEE02xCiaaW68afMEK0ibibXY32ef9anic4O6tuNt7mIBFQKuXHmiadhAs/640?wx_fmt=png&from=appmsg)

基于上述分析，为保证变换器在全工作范围内具有软开关特性且留出一定的裕量，励磁电感Lm应满足式（26），占空比D范围取0.03～0.5，tdelay\= 500 ns，以保证变换器在所有模式下实现ZVS。  

2.3损耗分析  

本文所提变换器的所有开关管均能实现ZVS， 二次侧整流管均能实现ZCS，在损耗分析中忽略开关管的开通损耗以及二极管的反向恢复损耗。变换器的损耗主要包括：开关管的通态损耗、关断损耗，磁性元件损耗和二极管导通损耗。  

变换器工作过程中，开关管的损耗为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMu6bSmBoOcJmMUH4b0tPjzqkuWRHZAXUmHZiaPd6YzPiaNfFJgbDAVMtk1yicTVph1OTzuf3FbjU3fwdvjPWSTibTTwIhemdxj2B8/640?wx_fmt=png&from=appmsg)

式中，Ids\_off、Ids\_on 为开关管的关断电流和导通电流；toff 为关断过程时间；Rds(on)为开关管的导通电阻。  

磁性元件损耗包含谐振电感和变压器的铜损和铁损，其中谐振电感损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMogBlnyXKHAia57D6vqBnWoArBg6sWzTDXs5TzNsdibKl2MuYZtbV3VXiaIeBwNr7rReOvVyzhKr3nvJXYuDWl41Ig1IKZvDgTXM/640?wx_fmt=png&from=appmsg)

式中，RLr 为谐振电感的绕组等效电阻；ILr\_rms 为电感电流有效值；Ke 为磁心损耗系数；BLr 为谐振电感磁通密度；VLr 为谐振电感磁心体积；m和n为损耗指数。  

变压器损耗的计算公式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNEZPPibgFwat0WYibGG8EuicIqVuEibSwXicNlO18rTdpxP55N4QbIW5jkjzex7VWjLng9nUFiaPJOTL1blDOianiatmZVasYdqWeJiakA/640?wx_fmt=png&from=appmsg)

式中，Rp 为变压器的一次绕组等效电阻；Rs 为变压器的二次绕组等效电阻；Is\_rms 为二次电流有效值；BT 为变压器磁通密度；VT 为变压器磁心体积。  

整流二极管的导通损耗为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMdFTrwzh31Y1RW2qIys30ibW9YRoQic8vbib1NnLaRLC4HH50n5bgAaXjwicljmY0v1wZ1lv9ktrcP00xWGER28AuVoUGpIUT23BQ/640?wx_fmt=png&from=appmsg)

式中，UF 为整流管导通压降；Id\_ave、Id\_rms 分别为整流管电流平均值和有效值；Rd 为二极管导通电阻。

2.4参数设计  

在众多参数设计方法中，基于峰值增益配置的优化设计可以实现LLC 谐振变换器的更高效率， 本文采用该方法来设计所提变换器的谐振参数，设计样机参数见表1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNnq1sFFyTnQSibD830rcPYcOBZfpwTnPjIlm40RM6IcPtDnqONufokzSlZJhNiblrWSMdQh2CQ4NvL7UYLzJmNXOz6ficIK2zrA8/640?wx_fmt=png&from=appmsg)

为满足变换器输出电压要求，SHB 模式谐振频率的输出电压为80 V，得到变压器T2 的电压比n2 为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM7kLDicZxOHfn2osWleuzOvLewcibSVtKg7WorMoTE5X15iaicwWBHvgpqSib040PHlpBkLzhrbo2WQfwpljyUZnsDD67Q8PZ5ZuXU/640?wx_fmt=png&from=appmsg)

实际设计中，两个谐振回路参数相同，得到变压器T1 的电压比n1\=1.25。  

根据峰值增益配置方法，可以得到所需的最大电压增益与电感比k的关系为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNq0qgjj03hh7licmv0Jafoice8scEAGGGfjuj2I0CmU4Hqjkb2QXHibFVBBQicgBQQEtXzQwDT7F0PRQ3eKcn1UgUX3da67ibgubibE/640?wx_fmt=png&from=appmsg)

式中，Mmax 为最大电压增益；Vo\_max 和Vo\_min 分别为最大、最小输出电压；fn\_max 为最大归一化工作频率。  

由PWM 控制下改变谐振参数对增益影响较小。由图10a 可知，在PFM 控制下以SHB 模式的增益跨度最大，主要针对该模式进行设计。为避免SHB 模式的环流损耗过大与增益过低失去软开关特性，令输出电流为1 A 时，SHB 模式和DHB模式的增益交点为M\=0.9，与SCHB 模式的增益交点为M\=0.45，即Mmax\_SCHB≥0.45，Mmax\_SHB≥0.9。  

假设变换器工作在理想状态，变换器稳定工作 时两谐振腔传输的功率Pin1、Pin2 分别为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOJ8BMhsicNWPsuT4RkrrGWa9Pu7tEEU4q21KJNpwia8gz85qqrviaP9jmdGxm95fwic0qiam4Y0HWqxyRibgcdLUhoHDibicJvuODCWuI/640?wx_fmt=png&from=appmsg)

结合1.2 节分析容易得到，变换器工作过程中谐振腔1 的传输功率始终大于或等于谐振腔2 的传输功率。实际工作中，谐振腔2 承担功率较小，且对变换器性能影响较小，为简化设计难度，两谐振腔取相同参数。结合式（26）和式（34），考虑到基波分析法在工作频率远离谐振频率时误差较大，同时要保留一定裕度，借助Matlab/Simulink 仿真进行参数设计调整，最终得到Lr1\=Lr2\=24.54 μH，Cr1\=  Cr2\=97.3 nF，Lm1\=Lm2\=125 μH。  

2.5控制策略  

由图9 可知，变换器在PWM 模式下改变负载对电压增益特性影响较小，为简化参数设计、提高变换器的工作效率与功率密度，所提变换器采用PFM+PWM 混合控制，根据变换器所处工况判断工作模式，再根据不同工作模式确定开关器件的工作频率与占空比。本文所提变换器在串联半桥模式、 单半桥模式和双半桥模式使用PFM 控制，在混合桥模式使用PWM 控制。  

在实际应用中，变换器需要工作在连续的增益范围内，当输出电压达到切换点时，需要进行模式切换。考虑到输出电压存在纹波和抖动，为了避免变换器反复在两种模式间切换，需要在切换过程中加入滞环比较，图11 为LLC 变换器的控制策略。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMOteJhEAHyhLic9WQ0gCeNX6Uh8s8ceHaPjncUc6X1uibzcITjCxNV5GeYEW3Tmx10ON2OYIZK428OQszr01oTcEOr0mQw4RJus/640?wx_fmt=png&from=appmsg)

3.实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPJNyAKghI0wIicqLicZgwEbicPZOMuxYLFH5dsPiayQGW8icpDnbfu6p1C2XEXfnmNQx6liacnJosPQCwziaicI7mrJuU7rhSZUtMLmyc/640?wx_fmt=png&from=appmsg)

为验证所提方案正确性与可行性，本文研制了一台输入电压200 V、输出电压40～480 V，负载恒定1 A，最大功率480 W 的原理样机，如图12 所示。 表2 给出原理样机的主要参数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPhm0o1hrtqNOK7dq69CaN4bQvR1ia0FQ3Hh2W8gib593NK8qFQP6Sb8fp0mcjARBial7V8IDoO1icJRJ5I1oDqxLgLBOfWp9uLHxY/640?wx_fmt=png&from=appmsg)

图13 给出了输出电压40 V 和72 V 的电路工作实验波形。此时变换器工作在串联半桥模式，如图13 所示，两个串联谐振回路的谐振电流几乎完全相同，工作开关管S3 和S4 能够实现ZVS 导通，但开关管S1 和S2 的寄生电容导致谐振回路存在干扰，使谐振电流iLr1 和iLr2 存在扰动，尤其在开关时较为剧烈，但不影响变换器正常稳定工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOhLtp4UtMoTFHp1PJD0eEwoDuayaMvfdCjrmhIlZbl03j7sMg5yyFkCyZfneicKo3B1y4BFhtWBxIXvGI8E2KILZDAVb3el2BM/640?wx_fmt=png&from=appmsg)

图14 给出了单半桥模式下输出电压72、80 和144 V 的波形。该模式下变换器仅通过谐振腔向二次侧传递能量，但由于二次侧整流桥工作时，VD3、VD4 不能完全关断，存在一个小电流流入变压器T2， 导致谐振腔2 中存在一定电流，使该模式导通损耗增加，但不影响变换器正常稳定工作。该模式下开关频率逐渐降低，谐振电流逐渐增大，开关管S1和S2 同样具有良好的软开关特性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPepcNrsr8o44MpmoBFMyGEzE6FcYpsO4Fias21twJQZW1AFh8worIZbT5sORT62KxKfS0MkHWupF33sRicic4SDZDzgnxZwLRTY0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOWqp4K5VSH1BW8cia8bQxvoDJQUTt10yGbib3acaicscOzawhACUoSVAKGiaSkexQNIjRwSicwXZBg1veT5xGWIsz4ZMEPHsNhMD6U/640?wx_fmt=png&from=appmsg)

图15 给出了双半桥模式下输出电压144、160和180 V 的波形。可以看出，该模式下电流iLr1 与iLr2 相同，每个谐振回路承载一半的功率。同时，由于该模式下隔直电容Cs2 两端电压恒为负，即使二极管VD4 导通，Cs2 也不会通过S5 的体二极管放电， 此阶段开关管S5 电压、电流基本为0。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPWIXlVDc86Ngb9PSnAWfvhr1CV37JQelHLqXrkzvLhLib3YJTB0eviabmBVhg27whu89hSeeVnkDPG87OD3jMFN2gdDeSgosTibQ/640?wx_fmt=png&from=appmsg)

图16 为变换器在混合桥模式下输出180、335和480 V 的工作波形。该模式下仅调整开关管S3、S4 和S5 的占空比，此时谐振腔1 在全桥工作和不工作之间切换，谐振器2 工作在半桥状态，因此谐振电流iLr1 在占空比D较小时与iLr2 相近，在D增大后大于谐振电流iLr2。同时，开关管S5 在二次电流为正时导通，避免二次电流通过其体二极管续流， 实现了同步整流。变换器在设定的工作范围内能很好地实现开关管ZVS 开通。在占空比D\=0.5 时，Vds5恒为0，此时电路达到最大增益M\=3。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOCs1CljAWZI3obYhXc4LWlF3RkYCGquvicic6zQIdzXtnPdNJ2Z3zrGKFPs0j6woLwcuqqbXAru6k6GO58mIxLMlJfia3mqSLia7I/640?wx_fmt=png&from=appmsg)

图17 给出了变换器输出电流1 A 时，变换器模式切换的动态波形。从图中可以看出，在四种工作模式间进行正向和反向切换时，输出电压的波动较小，切换速度快，变换器具有较好的动态响应特性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO44Lym0P41Seaa7jibc8vp1dOss1P0PyvsyRGFedfx8QJ8Tg7qMJJ1D5jW5QCqMrd4Zh1oSh5fqNUWtxM4tS9cQD9zjdniaQVok/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPBEFibnGGLr4LIibJ67GZeaSnWDiaibryhkeLTY0JWEMYAeO75Q2V0Cib1h0nbfOusHqCCH1Va30kVuwdapcM3Uf34d72M7wia6ciavA/640?wx_fmt=png&from=appmsg)

图18 给出了变换器在40～480 V/1 A 输出下的效率曲线和4 个工作模式下最大效率情况的损耗分布数据。由图18 可知，变换器效率曲线较为平坦，峰值效率为94.9%，最低效率在92%以上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPHmxhlibaic4ibSpLYr6YRX80AyngGfEnCprDdeQmDXiawvib6dH3epwbnUodTCF2KBK7TvHTlVArlPCCffb4O98sg0x7NTibCJ6WF0/640?wx_fmt=png&from=appmsg)

变换器在SCHB 模式输出40 V 时，输出电压较低，整流二极管损耗较大。在SHB 模式输出80 V时，由于一次电流增大，导致开关管和磁性元件损耗增加。DHB 模式输出160 V 时，两个谐振腔同时工作，变压器和电感的损耗占比增加。MB 模式480V输出时，由于一次电流继续增大，两变压器损耗和开关管的关断损耗增大，同时开关管S5 作为同步整流管工作，二极管损耗降低。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3bWXtSgWp4no2vKic492EvftibPaCwvibwYKeeT6mfPVNibAltFywBibRFvcw5OvdLpezGDlibtrdCZGJuCPF1S5oNOX6M4qg2eIyI/640?wx_fmt=png&from=appmsg)

表3 将所提变换器与近几年宽范围LLC 谐振变换器进行对比，可以看出，所提变换器在传统LLC谐振变换器的基础上增加了1 个有源开关管和1 个高频变压器，可以实现12 倍的超宽输出电压范围， 在电压增益范围存在较大优势，同时变换器具有较高的工作效率。

4.结论  

本文提出了一种超宽输出电压的双LLC 谐振变换器，该变换器一次侧两谐振腔分别为全桥、半桥结构，二次侧可配置为桥式和倍压整流，根据不同开关模式组合出四种工作方式，以较少的开关器件实现了12 倍的超宽输出电压范围，所有开关管可在全功率范围内实现零电压软开关，二次侧开关管还可作为同步整流管，进一步提高了变换器的工作效率。为了验证其可行性，设计了一台480 W 的实验样机，变换器可以实现40～480 V 的超宽输出电压范围，其峰值效率达到94.9%。所提变换器具有良好的电压调节能力，能够适应CHAdeMO 标准或类似标准下的电动汽车充电等宽输出电压增益的应用场合。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOvBtnjxuS2cPQYnRO6TT0jj2LLFiceamPticZVUDqVZQ6LZibQXJicYVveh4hUicyauS79S4YVYKOGnhKKq8hZhjviajpcEWiburgMJI/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOicH5fOibAOcMdpj2Xl5l6ylOcZNp4XnVzJdtTF4IIgO0e8frP8WbAibXZft9VX6WFMbvRGoiabV3P90aytZ4Ayyl9jibWhZ703D6s/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPNqcxicibQIxoHLPgddFP7vl8rLIfAVVAhRKSLicHk1kwybTeqQ5SWMYf1mtyqUhSrxW0aGD6JvjvBV1TuZHfeYLrHmqiaFOmMR00/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMRXiaC4Xsk2zpXSNc7VluAo0twAiaNXWjVF4POu84VpzIic5x6ibt1nz1p0CVU4IvX4wb1bV3U7FrxZcPDnn25kjYHxPWXkY7DUoY/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)