# 基于有源箝位技术的 SiC MOSFET 串联均压有源驱动电路研究

原创 项鹏飞 ，郝瑞祥 SiC碳化硅MOS管及功率模块的应用 2025-01-01 00:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/TjmFxSuYzOTMIPUCFN8hhg](https://mp.weixin.qq.com/s/TjmFxSuYzOTMIPUCFN8hhg)

文章来源：中国电机工程学报

作者：项鹏飞 1，郝瑞祥 1\*，王启丞 1，游小杰 2，徐云飞 3，袁帆 1(1．北京交通大学电气工程学院，北京市 海淀区 100044；2．轨道交通安全协同创新中心，北京市 海淀区 100044；3．先进输电技术国家重点实验室(国网智能电网研究院有限公司)，北京市 昌平区 102209)

摘要：功率器件串联技术是实现高压应用的有效途径之一，而串联应用的主要制约因素是串联器件之间的动态均压问题。该文针对不均压条件下串联器件的关断行为进行了理论分析，探究不均压的产生机理，提出一种基于有源箝位技术的碳化硅金属\-氧化物半导体场效应晶体管串联均压有源驱动，其利用有源箝位电路检测串联器件之间的电压不均衡，并箝位电压尖峰，通过反馈控制器件栅极电荷及开关瞬态行为实现均压。该方案不存在不均压的调节周期，即使在交变负载下依然能在每一个开关周期的关断时间内实现均压控制。此外，该文还详细介绍所提出方案的电路原理和参数设计过程，并通过试验验证该方案均压控制效果的有效性。结果表明，所提出方案具有有源箝位电路拓展性强的特点；是独立于原有栅极驱动电路的辅助电路，适用性强；且控制电路结构简单，无需可编程逻辑芯片和额外的信号隔离。

关键词：碳化硅金属\-氧化物半导体场效应晶体管；串联；有源箝位；均压控制

0\.  引言

近年来，电力电子应用对大功率、高电压的需求不断增加。在高压逆变器、高压脉冲发生器、高压直流输电系统、柔性交流输电系统等应用场合中，工作电压会达到几十千伏，单个功率器件已难以实现。相比于传统Si 器件，新兴的宽禁带器件碳化硅金属\-氧化物半导体场效应晶体管(siliconcarbide metal-oxide-semiconductor field-effect transistor，MOSFET)虽然有更高的耐压能力，同时还具有导通电阻小，导热率高，开关速度快等优势特性，但依然无法由单器件实现这些高压应用。半导体器件串联技术和模块化多电平转换器(modular multilevel converter，MMC)是2 种利用低压器件实现更高电压应用的有效方法。串联使用两个或多个低压器件比使用单个高压器件带来的开关损耗更小，更适合高频应用场合，同时成本更低。且串联技术需要的器件数量仅为MMC 的一半，其控制策略也更为容易。串联技术的主要制约因素是串联器件之间的均压问题，这一问题可能会导致串联的器件损坏，危害系统稳定性。

半导体器件串联均压问题分为静态均压和动态均压2 种。其中静态均压问题主要是由串联器件进入关断稳态前所承受电压差异或进入关断稳态后等效漏电阻差异导致的，可以通过并联平衡电阻来解决。而动态均压问题的影响因素则较多，主要有器件杂散参数不一致、驱动电路参数不一致、驱动信号不同步、换流回路杂散参数不一致等。对于开关速度更快，受寄生参数影响更严重的SiC MOSFET 而言，对动态均压控制技术的要求也更高。

根据电路作用位置的不同，动态均压技术可以分为负载侧均压和驱动侧均压两种。其中负载侧均压以缓冲电路为主，将无源器件(电阻、电容等)并联于器件负载侧，以降低电压变化速度并吸收电压不平衡所产生的能量，进而抑制不均压该类方式容易实现且可靠性高，但缓冲电路自身体积大、损耗大，降低了系统频率和功率密度，不利于高频应用。相比之下，驱动侧方案则以栅极有源控制方案为主，通过调节栅极充放电电荷控制器件开关行为，从而实现均压，这一类方案大大降低了对系统损耗的影响。其主要包括栅极反馈控制、有源箝位、栅极信号延时控制以及主从控制等。

在栅极反馈控制中，文献\[9,14,16\-17\]通过对器件负载侧电压的实时采样，反馈调节驱动电压、电流，以控制器件的开关瞬态行为，并配合相应的控制算法实现串联器件的电压均衡。这类方法多数应用于硅绝缘栅双极型晶体管(silicon insulated gate bipolar transistor，Si IGBT)，当其应用于开关速度更快的SiC MOSFET 时，电压采样及反馈控制等 环节的响应速度就难以满足实际的控制需求。文 献\[5,18\]虽然同样是通过电压采样\-反馈调节\-驱动侧控制的方式实现均压，但其将控制步长拓展为一次开关动作，通过多个开关周期的不断采样\-反馈\-调节，最终实现均压控制，因此这种方案需要多个不均压的调节周期才能实现串联器件的均压。文 献\[19\]针对器件电压变化率进行采样并反馈调节，提前驱动侧调节电路的动作时间，实现 2 个串联器件的均压控制。但是其通过磁环实现的驱动侧调节电路增加了额外的体积，且在应用于多个器件串联时可拓展性差。

文献\[1,8,20\-22\]的有源箝位均压方案具有电路简单、拓展性强、适用性强的优点。这一类方案利用的是瞬态抑制管(transient voltage suppressor，TVS)的电压箝位作用，当器件电压超过TVS 的阈值电压时，TVS 管被击穿，有源箝位电路导通，TVS管的雪崩电流注入器件的栅极，相应的栅极电压升高，器件负载侧的高电压就可以得到抑制。文献\[1\]利用两级 TVS 管箝位实现在器件负载侧电压达到第一级阈值电压时降低电压上升速度的效果。文 献\[8\]给出了针对高压串联系统的有源箝位电路阈值电压设计方法。然而，TVS 管虽然可以同时起到电压箝位和栅极电荷调节的作用，但其被击穿时瞬时功率很高，且容易出现反复动作，这种高瞬时功率工作下的TVS 管寿命有限，在长期应用中容易出现TVS 损坏从而威胁系统可靠性的情况。栅极信号延时控制是一种当前被广泛研究的均压控制方案，其将对负载侧电压信号的采样/箝位结果与栅极信号时序控制相结合，通过在多周期下调节串联器件之间的栅极信号延时实现均压。

其中文献\[7, 23\-24\]通过采样门极有源钳位电路的工作时间对驱动信号延时进行调节，文献\[25\-26\]在此基础上对控制算法进行优化，缩短均压所需要的周期数，并提出类似的可作用于开通均压的控制方案。文献\[27\]则直接以电压采样为基础，并通过算法调节多周期的驱动信号延时，最终实现串联均压控制。这一类方案降低均压控制对于开关损耗的影响，但其需要先经过多个固有的不均压调节周期，才能最终实现均压。在实际应用中，负载工况甚至温度的变化都会导致串联系统重新出现不均压，而每一次均压条件的变化就意味着需要新的调节周期以调节信号延时，因此这一类方案就难以应用于类似于交变系统或其他负载电流不断变化的系统中。此外这类方案还需要可编程逻辑芯片以及额外的信号隔离，增加驱动设计的复杂性。综上所述，为满足开关速度更快的SiC MOSFET 在每个开关周期都实现串联均压的需求，均压电路必须具有快速响应和反馈的能力。TVS 管对固定电压值的箝位作用虽然可以满足这一要求，但必须限制TVS管的瞬时功率，以增加有源箝位电路的使用寿命和提高系统稳定性。同时又要求其具有足够的反馈能力，以实现器件开关瞬态行为的调节。

本文提出一种基于TVS 管的SiC MOSFET 串联均压有源驱动，其利用TVS 管的阈值电压实现对串联器件电压不均衡的检测，箝位电压尖峰，同时限制其峰值功率，通过辅助电路实现反馈和放大，以控制器件的栅极电荷及开关瞬态行为，实现串联均压，所提出的电路不存在调节周期带来的固有不均压周期问题，即使在交变负载下依然能够实现每个开关周期关断过程内电压均衡。电路保留有源箝位电路拓展性强的特点，是独立于原有驱动电路的辅助电路，适用性强，控制电路结构简单，无需可编程逻辑芯片和额外的信号隔离措施。

1\.  SiC MOSFET 串联关断行为分析

2个SiC MOSFET串联的典型电路如图1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8eoffAq5gHBIWfqWJmk2z6yRdWqWmSnbezARefcDQLkUTORVeMH97Gg/640?wx_fmt=png&from=appmsg)

以2 个SiC MOSFET 串联为例，分析SiC MOSFET串联关断时的开关行为。图 1 中包括母线电压UDC，负载电感Lload，反向续流二极管Dh 以及串联工作的2 个SiC MOSFET 为Q1 和Q2，2 个器件各自的驱动为udriver1和udriver2，驱动电阻RG1和RG2，静态均压电阻为RS1 和RS2。SiC MOSFET 内部主要包括寄生结电容CDS、CGS、CDG以及体二极管Dbody。在动态过程的计算过程中，非线性寄生电容CDS 和CDG可以取其平均值。

SiC MOSFET 关断过程通常被分为4 个阶段，即关断延迟阶段、漏源极电压上升阶段、漏源极电流下降阶段、栅极电压继续下降阶段，其中漏源极电压上升阶段是漏源极电压发生变化的主要阶段。整个关断过程都被称为瞬态均压阶段，当关断行为完全结束之后，为静态均压阶段。串联不均压的直观表现是串联SiC MOSFET 漏源极电压上升阶段开始的时间不一致或电压上升的速度不一致，将关断电压上升更早或更快的器件称为超前动作器件，另一个则被称为滞后动作器件。通常情况下，超前器件的漏源极会承受更高的电压。这里仅考虑滞后器件电压上升开始的时间要早于超前器件电压上升结束的时间，否则超前器件的电压在滞后器件电压变化开始之前就已经上升到稳态电压，导致母线电压完全由超前器件承受，这也是不均压情况中的极限。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8iaywj67ib28HoYvvNsKQkGPicVxv7Zp2kdTFaAmfeJXGQibSX9GVRLy15w/640?wx_fmt=png&from=appmsg)

图2、3 分别为2 种关断不均压过程的理论波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK88XibnMoXw0UWicvWZfIicpg9vWhJPCibQ1UAnLoTenLUxXNH2bfEVVrx4Q/640?wx_fmt=png&from=appmsg)

第1 种在图2 中，2 个器件的关断开始时间存在差异，但是电路参数一致，关断速度一致。在t5时刻，串联器件开始关断，进入关断延迟阶段，其中 Q1 首先开始关断，而Q2 管在t'5 时刻才开始关断，设 ΔT1 \= t'5－t5。在该阶段中，器件栅极电压由驱动正电压UGG 下降至米勒电压Umiller，这里假设串联器件输出特性、跨导特性和阈值电压是一致的，因此在共同的负载电流下，二者的Umiller 也应该是一致的。该阶段的持续时间Tp1 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK82nKzxo2SSpFiahArcOReWZAjLqpWTFTTaDysg1lUK9xKOUhqDsS9V4g/640?wx_fmt=png&from=appmsg)

式中：n \= 1, 2，表示器件的标号，无下标则表示串联器件的该参数相同；USS为驱动负电压。

t6 时刻，超前器件Q1 栅源极率先达到米勒平台电压，并开始漏源极电压上升阶段。在该阶段中，其栅极电压保持在米勒电压不变，漏栅极电容充电，漏源极电压升高，此时漏源极电压上升变化率可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8yHv4mXGmckcicARCVEUGrUwZEaMmuKV7VDicZSHuY1px0Lqkfpt5eB6A/640?wx_fmt=png&from=appmsg)

滞后器件Q2 于t'6 时刻才开始电压上升。此时t6 和t'6 之间的时间差依然是 ΔT1。在滞后器件Q2 开始电压上升时，超前器件Q1 漏源极电压已经上升ΔT1 时间，此时电压差 Δu1 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8beyhZwenRLYSJEEzT5SuYVs28NWSQyRTIHTaHWiaDBicwhtQJoNbsOAw/640?wx_fmt=png&from=appmsg)

在电压上升过程中，串联器件输出电容处于充电状态，因此漏源极电流由2 个部分组成：一部分是器件输出电容的充电电流，与电压变化率和输出电容的大小有关；另一部分是沟道电流iCH。器件的漏源极电流可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8KVAeGWj1xkl1a1ibhT959p7EwoIPX2EqiaHkgVAQjDtxkThCZfKXBiaGA/640?wx_fmt=png&from=appmsg)

在t'6 之后2 个器件电压同时上升，由于上升速度相同，且2 个器件的漏源极电流是一致的，则2个串联器件电流中沟道电流和输出电容充电电流的比例是一致的。t7 时刻，当2 个串联器件漏源极电压之和等于母线电压时，该阶段结束。此时器件之间的电压差依然为 Δu1。

在图3 中为第2 种情况，2 个器件的关断信号同步，但关断速度不一致，这里关断速度不一致的原因主要有2 种，分别是驱动电路驱动能力不一致和器件输入电容不一致，在这里将驱动电路驱动能力不一致等效为驱动电阻RG 不一致导致的驱动电流差异，而器件输入电容不一致则表现为器件的输入电容CGS 和CDG 的差异，此处将Q1 器件作为关断速度更快的超前器件。t5 时刻，Q1 和Q2 同时关断，进入关断延迟阶段，但关断速度不同，二者在该阶段的持续时间差，即t6 和t'6之间的时间差 ΔT'1可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8FV4yXHAnKzpx9pu4MJ8qxGnbsW0eTjBWbLAFQsW8rFx2BwDRMIPfXw/640?wx_fmt=png&from=appmsg)

式中 Δτ = RG2CGS2 − RG1CGS1。

类似的，超前器件Q1 栅源极于t6 时刻率先达到米勒平台电压，并开始漏源极电压上升阶段。而滞后器件Q2 于t'6 时刻才开始电压上升，此时超前器件Q1 漏源极电压上升 ΔT'1，电压差 Δu2−1 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8eNKNDmyjficpVw4BqNzRjmVicZiakNSxWIGflL6eU65phibtWzicsCKF8sQ/640?wx_fmt=png&from=appmsg)

t'6 之后2 个器件电压同时上升，但上升速度不相同，则式(4)中2 个器件各自的电压变化率及对应的输出电容充电电流是不同的，又由于串联器件漏源极电流相同的限制，2 个器件漏源极电流中沟道电流和输出电容充电电流的比例也是不同的，对于电压上升更快的超前器件Q1 而言，其输出电容充电电流相对更大，而滞后器件Q2 的输出电容充电电流则相对更小，沟道电流则相对更大。t7 时刻，当2 个器件漏源极电压之和等于母线电压时，该阶段结束。2 个器件电压共同上升阶段t'6\-t7 的持续时间T'p2 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8HnOQXzGd4SCugHyYo17dX7dFfM7aU6tDBkRDA5oewSibJ3EPWRluC8w/640?wx_fmt=png&from=appmsg)

此时串联器件的电压可以分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8xGG3rK7kRnxqyN2Bk4ae3fYGI13ROsaYRmODhYcEiasbZSibMlCcoV3w/640?wx_fmt=png&from=appmsg)

随着电压上升阶段结束，串联器件电流开始下降，在第1 种情况中，串联器件的电流同步下降，栅源极电压相同，则沟道电流和输出电容充电电流的比例也是一致的。因此由寄生电感和电流变化率导致的关断过电压会均衡的分布在2 个串联器件上。而在第2 种情况中，串联器件的漏源极电流虽然是同步下降的，但由于栅源极电压的差异，则对各自沟道电流的限制是不同的。由于超前器件的栅源极电压更低，其可允许的沟道电流也是更低的，就会导致有更多的电流流入超前器件的输出电容，进而导致更多的关断过电压分布在超前器件上。因此在电压上升阶段和电流下降阶段中，串联器件之间沟道电流和输出电容电流的比例差异是导致串联器件不均压的根本原因，如果通过对串联器件栅极电荷和电压的调节来调整器件沟道电流和输出电容电流的比例，就可以实现串联器件之间的电压调整。t8 时刻串联器件电流下降至零，电流下降阶段结束。t8 时刻之后，2 个器件的栅极电压继续降低直至驱动负电压USS。

在实际应用中，器件的米勒电压Umiller 还受其输出特性、跨导特性以及阈值电压的影响，而2 个器件的这些参数又可能存在由于器件制造工艺造成的参数误差，这就会导致他们在关断过程中的米勒电压Umiller不一致，且在不同的负载电流情况下，他们的米勒电压的差异情况也不相同。无论是在哪种不均压情况下，米勒电压的差异都会进一步影响串联器件开始漏源极电压上升阶段的时刻差异，进而影响漏源极电压的不均压情况。因此在不同的负载工况下，串联器件的不均压条件是不同的。

2\.  串联均压驱动电路结构及工作原理

本文提出的串联均压有源驱动电路结构如图4所示，其中，驱动控制器为串联器件提供驱动控制信号；RSn 为静态均压电阻；驱动推挽电路、驱动电阻RGn 为器件Qn 的传统驱动电路，用以实现开关控制；所提出的均压有源驱动是独立于传统驱动电路的辅助电路，主要包括箝位/采样电路和反馈\-补偿电路2 个部分。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK86Rcwv2KqBICeK8ABJYiaDpY3RRCbDiagjBHlTdica0aiaeouUgYfBJTQKg/640?wx_fmt=png&from=appmsg)

其中箝位/ 采样电路用于采样串联SiC MOSFET 开关瞬态中的不均衡电压，并对单个器件承受的最大电压值实现箝位。串联TVS 管组Z、二极管D1、限流电阻R1、采样电阻RZ连接于器件漏极和栅极之间，用于采样不均衡电压，串联TVS管组 ZM 则用于箝位最大电压值。运放1 和运放2构成的电压跟随电路通过比例跟随电阻 RZ 两端的电压实现其所在支路电流的采样。在反馈\-补偿电路中，运放3 构成的减法放大电路可以放大采样结果得到的电压差，并驱动由开关器件M1和M2 构成的上拉电路，最终通过电阻RA向Qn 栅极注入电流iAn实现均压控制。

2.1  TVS 管参数设计

为箝位单个SiC MOSFET 的最大承受电压，串联TVS 管组ZM的最大箝位电压值UZM要低于单个器件所能承受的最大电压值UDSM，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK89UwFNVgx4jibF6PqLo6ua3gMFmzecOTFHopHPzjZCeGsdib8TVMAic1Xg/640?wx_fmt=png&from=appmsg)

对于采样串联不均衡电压的采样支路而言，串联TVS 管组Z 的箝位阈值电压UZ应略高于器件电压均衡时的稳态电压，考虑到控制效果和灵敏度的要求，通常要求静态分配电压差值不大于10%，对于2 个器件串联的系统，采样箝位阈值电压 UZ可以设计为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8NmIY0CK4B57X4VT7K8T6YUN4IQVlaXf7dect9BD1hGuFnb8E5KmdRw/640?wx_fmt=png&from=appmsg)

由于TVS 管组的动态阻抗和采样支路电阻的存在，箝位电路工作时采样支路的实际电压值UP要高于 UZ，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8qRHc1lxvQp9I3lqFOWMYwSef7myK3uBpuJShXR48Re7KsmtfgpI5sw/640?wx_fmt=png&from=appmsg)

式中：IPP 为TVS 管组工作时的峰值电流；rP 为Z的动态阻抗。类似的，采样支路工作时的最大电压值也需小于单个器件所能承受的最大电压值UDSM，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8MaT1uA8BTu4PQyQCxQNb9LT0kzwd8y9qMY3vLbHPGb9JtyfrQSV4Fg/640?wx_fmt=png&from=appmsg)

此外，TVS 管的脉冲峰值功率通常指在占空比0.05%、脉宽10/1000 μs 标准浪涌电流下能承受的最大功率。结合SiC MOSFET 所适用的高频工况，考虑到其浪涌电流占空比和频率的变化，以及脉冲功率所产生的热量的累积，所选取的TVS 管脉冲 峰值功率 PZP 需要进行校正，其校正结果可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8a3baqPqQN2xk7qR4yWG1icicJ1Jsqqr4euvCHbqftpHmhREB0tID5DhQ/640?wx_fmt=png&from=appmsg)

式中：TS表示SiC MOSFET 开关周期；tPmax 表示一个开关周期内TVS 管被击穿的最长时间。在直接利用TVS 管实现电压箝位的电路中，TVS 管需要反复承受高于其箝位电压的电压，并被大电流雪崩击穿，这就对TVS 管的脉冲峰值功率提出很高的要求，同时也容易导致TVS 管过热损坏，因此利用限流电阻实现对TVS 管峰值电流的限制是必要的。

在高频应用下，除脉冲峰值功率需要被降额校正外，TVS 管的浪涌寿命同样需要被关注，器件浪涌寿命N 与脉冲峰值电流IPP、温度TC 的关系可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8lbWOHArDJ6kV583CoXckAFkRDicib0tCGuYbCia9AuI8t6HGbbrofmeWQ/640?wx_fmt=png&from=appmsg)

式中a、b、c 为数据拟合后得到的系数。从式(15)可以看出，在温度条件保持不变的情况下，浪涌寿命与脉冲峰值电流在对数坐标系下呈现线性关系，而实际中系数 c 的拟合值通常大于10，因此浪涌寿命与脉冲峰值电流呈现极大的负相关性。如果脉冲峰值电流越大，其脉冲浪涌寿命就越低，可能会导致高频应用下的TVS 管率先损坏，继而影响系统稳定性。因此，必须采取措施限制流过TVS 管的峰值电流以提高浪涌寿命。

2.2 驱动电路均压原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8GA1BkuXgxfo4cxsmaehEWoQvibVGNDdialM9jqaKVBZ0PFCvyiacaoQqQ/640?wx_fmt=png&from=appmsg)

图5为所提出的均压有源驱动工作过程理论波形。t5 时刻，串联器件Q1 和Q2 开始关断，t6 时刻，超前器件Q1 漏源极电压UDS1 开始上升，随后滞后器件Q2 漏源极电压uDS2 也开始上升。在电压共同上升过程中，由于串联器件的电流一致，超前器件Q1 电压上升速度快，则其流过输出电容的电流就相对较大，其沟道电流iCH1 相对较小，而电压上升更慢的滞后器件Q2 的沟道电流iCH2 则相对较大。当超前器件Q1 电压超过采样TVS 管支路的阈值电压，采样支路中的TVS 管被击穿并箝位电压，产生iRZ1。由于限流电阻的限制，采样支路的电流iRZ1很小，即使该电流注入器件栅极，也无法使超前器件 Q1 栅极电压上升至有源区并起到降低其关断速度、平衡电压的效果。

t7 时刻之后，随着串联器件的漏源极电压之和达到母线电压UDC，器件同时开始电流下降阶段。t'7 时刻，当TVS 管被击穿时，采样电路对采样电阻RZ 的电流iRZ1 进行采样，并由反馈\-放大电路中的减法放大器对采样结果进行放大，运放3 的输出电压升高，MOSFET M1 和M2 导通，辅助电路通过上拉电路的电阻RA 向超前器件的栅极注入更大的上拉电流iA，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8epicaQoZsmEbiaFjbNgQQJVGACgicGqDBo98IpsPXOwXic5MibdyibSuQnbQ/640?wx_fmt=png&from=appmsg)

式中UF-M2和UF-D2为开关器件M2和二极管D2的通态压降。

随着超前器件Q1 栅极被注入电流，其栅极电压uGS1 升高，其可允许的沟道电流变大。此时滞后器件Q2 的栅极电压更低，则其可允许的沟道电流也相对更低。在串联器件电流相同的情况下，对超前器件Q1 而言，几乎所有的电流都流经其沟道，不再给输出电容充电，而对于滞后器件Q2 而言，则有部分电流流入输出电容以继续提高其漏源极电压，由此实现对串联器件沟道电流和输出电容电流比例的调节。此时超前器件Q1 的电流分布可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8KujHqo9iagsicHjqyQhnibanbRm3sJJniaWfzDoTFTgR4tcVvbGdwkrHZg/640?wx_fmt=png&from=appmsg)

滞后器件Q2 的电流分布依然可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK88LLSwVQVPyF3rxqHtpHPENw7yV8VqndVVZIOaRlS6j8jRMmZWekN1Q/640?wx_fmt=png&from=appmsg)

在这一过程中，除了叠加的关断电流导致的关断过电压外，超前器件的电压不再上升，滞后器件的电压则持续上升，使得2 个串联器件的电压趋于均衡。

在辅助电路不改变正常关断逻辑的情况下，串联器件的电流持续下降，直到电流降为零。为保证器件的正常关断逻辑，辅助电路电流iA必须要小于驱动输出的最大栅极电流，则iA 以及辅助电阻RA需要满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8qu72RI7VibXmhI3wFgiaEVKYfoZz64f5y85AiaibkzqrlYiaAy6okEkibg5w/640?wx_fmt=png&from=appmsg)

随着辅助电阻RA的增大，超前器件Q1 栅极被注入的上拉电流就越小，其栅极电压和输出特性被影响的程度也就越小。相对应的，滞后器件漏源极电流中流入输出电容的比例就越低，对于滞后器件漏源极电压的提升效果就越弱。在实际工况中，在不同的应用中器件对于调节效果的需求也是不同的，可以通过调节辅助电阻RA 的大小以调整对滞后器件漏源极电压的调节效果强度。同时，在TVS管箝位阈值电压的限制下，串联器件之间的静态分配电压差值会在 10%之内。

此外，从整体驱动行为而言，辅助电路向栅极注入电流相当于减少器件栅极流入驱动推挽电路的电荷，而关断过程中输入电容放电量的一致性是确保其关断承压均衡的关键，这也就保证最终的关断承压的结果的一致性。

3. 串联均压驱动实验验证

参考图1 搭建基于SiC MOSFET 串联的半桥电路，如图6(a)所示。所采用的串联器件为CREE 公司1200V-300A-SiC MOSFET模块CAS300M12BM2，利用一个模块中串联的2 个器件形成半桥的下桥臂，用另一个模块中串联的两个器件形成半桥的上桥臂，串联器件漏源极仅并联静态均压电阻，无其他均压缓冲电路。测试采用Tektronix MDO3034 示波器、Tektronix TPP0500B 无源电压探头、TektronixTHDP0200 隔离探头、PEM CWTMini 3B 罗氏线圈电流探头以及Tektronix TCP0030A 电流探头。图6(b)为所提出的驱动电路，驱动芯片为 Infineon 1ED3124MU12HXUMA1，驱动输出正负压分别为+18 V 和 −5 V，均压控制电路中TVS 管采用Littelfuse P6SMB 系列，运放采用TI OPA859。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8KpibRvPgMmTFEBCPFd3nwlObN21bxAKsOY5SesYLobibheyGT0Z4sK9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK84q6euvoICjmuibdY47vsEPibrdE4nC92z3zgY7GicKF2VpElEqrLm1GJA/640?wx_fmt=png&from=appmsg)

3.1 脉冲工况串联均压实验

在脉冲工况下对比和验证所提出的均压控制方案，脉冲工况下半桥上桥臂的2 个串联器件始终处于关断状态以实现续流二极管的作用。为体现无均压控制时的串联不均压现象，以便对比无均压控制和有均压控制后的实验结果，将1200 V SiC MOSFET 模块漏源极电压降额使用，设计母线电压为800 V，单个器件理论承压为400 V，负载电流200A，负载电感为320 μH，TVS 管箝位阈值电压为450 V。

图7为关断速度不同的不均压条件下串联关 断过程实验波形，其中 RG1 \= 12.5 Ω，RG2 \= 10 Ω。图7(a)为无均压控制时的关断波形，由于Q2 器件的驱动电阻更小，关断速度更快，率先开始漏源极电压上升，且在漏源极电压共同上升过程中的电压上升速度也更快，因此由Q2 器件承受的母线电压和关断电压尖峰都更大，叠加了关断过电压的Q2 器件电压超过800 V。在关断过程结束之后，其电压分配差值也达到单个器件电压的50%，严重影响器件之间的损耗平衡和系统的稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8TpHIAhrMpzMQI8N9eLOI3uA6ic7nZMsoyfMME0WNFyslURetpwHxEAg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK88mFqvzxR7friaBvwAWibwnSwJFCxxFzPcuX4kaW8OXC64PiaVVXwU3NwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8CSJoiaibhVdXaLUf45Y9IapFxJcbmlcH8GB2owW1566tvdaUibGIJicic8w/640?wx_fmt=png&from=appmsg)

图7(b)为采用TVS 箝位直接均压时的实验波形，为限制TVS 管电流和反复调节造成的器件损坏，此处的TVS 管阈值电压为500 V。当Q2 器件漏源极电压超过TVS 管箝位阈值电压时，TVS 管被雪崩击穿，箝位峰值电压，并产生较大的击穿电流iTVS2 并流入Q2 器件的栅极，大幅提高Q2 器件的栅极电压，并起到提升Q1 器件漏源极电压、调节不均压情况的效果，但由于TVS 管的雪崩电流的太大，Q2 器件漏源极电压下降明显，且升高后的Q1器件漏源极电压反而超过 TVS 管箝位阈值电压，因而调节电路又在2 个器件的栅源极电压和漏源极电压之间进行1 次反馈调节，在进行3 次的反馈调节之后，2 个器件的漏源极电压最终都满足箝位阈值电压的限制，结束关断过程。调节过程中TVS 管峰值电流达到5 A 以上。此外，串联器件之间反复的反馈调节导致关断时间被明显拉长，增大关断损耗。

图7(c)为采用本文所提出均压方案时的关断实验波形，当Q2 器件漏源极电压超过TVS 管阈值电压时，TVS 管箝位并保护超前器件Q2 的电压尖峰，后通过控制电路的响应，其栅源极电压被抬高，Q1器件漏源极电压在控制电路的调节作用下逐步升高，并在关断过程结束之前实现了串联器件的电压均衡。在调节过程中 TVS 电流被限制在0.5 A 左右，电压均衡过程对于关断速度的影响也远小于通过TVS直接均压的方案。

将图7(b)、(c)中的实验结果参数代入式(14)，可得在10 kHz 的等效频率下，在长期应用中，如果采用TVS 管直接均压，则要求TVS 管峰值脉冲功率达到10 kW，如果采用所提出方案，则要求TVS管峰值脉冲功率达到 1 kW。所采用的LittelfuseP6SMB 系列TVS 管的额定峰值脉冲功率为600 W，所提出方案仅需要选用2~3个电压等级合适的TVS管串联实现即可，而 TVS 直接均压则需要15~20个器件串联实现，可实施性较差，电路设计困难。此外，由于峰值电流的降低，根据式(15)，所提出方案大大提高TVS 管的脉冲寿命。

图8 为在多个连续脉冲下的串联器件实验波形，等效频率10 kHz，不均压条件依然是驱动电阻不同导致的关断速度不同，即RG1 \= 12.5 Ω，RG2 \=10 Ω。其中图8(a)为无均压控制时的实验波形，由于Q2 器件的驱动电阻更小，关断速度更快，关断时则承受更高的电压，且每个关断过程都会出现类似的动态不均压结果。关断结束后，在静态均压电阻的作用下，串联器件电压分配逐渐趋于一致。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK81kbRia87b6wYm2N0iaDFEzFZ6Y1zd3o1zhWTts38UxQ0HMRZYvFianOog/640?wx_fmt=png&from=appmsg)

图8(b)为采用了所提出的均压控制电路时的实验波形，其在每个周期的关断过程内都实现了串联器件的电压平衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8QiaKx2cZVf6fsT8FsopzMvK54OU8ia11Zm3gqqsDepPw7icXIPkNqdLjg/640?wx_fmt=png&from=appmsg)

图9(a)为更加严重的由于驱动电阻不一致导致的电压不均衡结果，其中RG1 \= 15 Ω，RG2 \=10 Ω，图9(a)相比于图8(a)的不均压情况更加严重，而图9(b)中仍可以实现每个周期关断过程内的电压平衡。

为进一步验证所提出的均压方案的有效性，在其他不均压条件下进行串联多脉冲实验。如图10为驱动脉冲信号不同步的不均压条件下串联关断过程实验波形，此时串联器件的驱动电阻保持一致，Q1 器件的关断脉冲信号超前于Q2 器件80 ns。图10(a)为无均压控制时的关断波形，由于超前器件Q1 的关断脉冲信号更早，其电压上升阶段的开始时间相比于滞后器件要早得多，关断过程中的母线电压几乎都由Q1 器件承受，滞后器件Q2 的电压非常低，叠加了关断过电压之后的Q1 器件电压尖峰超过了母线电压，这一过程严重影响了器件之间的损耗平衡和系统稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8MH1SeKIburekib4fLNPV1rdq1XRMZriaVEtjDiaLWXYRwwVWibe3iaIaj0w/640?wx_fmt=png&from=appmsg)

图10(b)为采用本文所提出均压方案时的关断波形，当Q1 器件漏源极电压超过TVS 管阈值电压时，TVS 管箝位并保护超前器件Q1 的电压尖峰，后通过控制电路的响应，其栅源极电压被抬高，Q2 器件漏源极电压在控制电路的调节作用下逐步升高，并在关断过程结束之前实现串联器件的电压均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8or4XibVY22ZUFDs1vG3ZqdBYkic93apq7OcVJxPhHMxruuicSNuRdic3eQ/640?wx_fmt=png&from=appmsg)

图11 为在多个连续脉冲下的串联器件实验波形，等效频率10 kHz，不均压条件依然是驱动脉冲信号不同步，Q1 器件的关断脉冲信号超前于Q2 器件80 ns，驱动电阻一致。其中图11(a)为无均压控制时的实验波形，由于Q1 器件的关断脉冲超前，关断时则承受更高的电压，且每个关断过程都会出现类似的动态不均压结果。关断结束后，在静态均压电阻的作用下，串联器件电压分配逐渐趋于一致。图11(b)为采用所提出的均压控制电路时的实验波形，在每个周期的关断过程内都可以实现串联器件的电压平衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK88pflcmviaWPIoVYPnHice2ShvJtXakt90SXysuJrylmEV6Q1XLicYIiaLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8nKFhU3EtuiaVG0ooZ2psJtrvialKEuwicbnOfU5r9LN4ZiaANZxouyZSKw/640?wx_fmt=png&from=appmsg)

图12 为驱动脉冲同步且驱动电阻一致时的多脉冲实验波形，受驱动电源对地电容差异的影响，即使驱动脉冲同步且驱动电阻一致，Q1 器件的关断速度依然大于Q2 器件，并在关断过程中承受更高的电压，串联器件关断过程依然存在不均压现象。结合图12(b)及其他实验结果可知，无论是哪种不均压条件，所提出的均压控制电路都可以实现每个周期关断过程内的电压平衡。

3.2 逆变电路中的均压电路实验

为进一步验证所提出均压电路有效性，利用2个 SiC MOSFET 模块搭建基于串联器件的半桥逆变电路。逆变电路输入直流电压为800 V，开关频率为5 kHz，调制比为1，死区时间为1.5 μs，逆变电路输出侧电感为160 μH，输出侧电容为160 μF，不均压条件为驱动电阻不同导致的关断速度不同(RG1 \= 12.5 Ω，RG2 \= 10 Ω)，其关键波形如图13 所示，所测量的对象为半桥的下桥臂的2 个串联器件，其中uOUT 为半桥逆变器输出基波电压。图13(a)为无均压控制时的不均压情况，由于Q2 器件的关断速度更快，导致其在关断过程中承受更多的电压，另外在逆变基波周期中器件每个周期的关断电流并不一致，导致每个开关周期关断过程的不均压程度也有所不同。在图 13(b)中，利用所提出的均压控制驱动，可以箝位超前器件的电压峰值，并可以在每个开关周期关断过程内基本实现串联器件的电压均衡，电压分配差值被限制在设定的阈值电压以内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8BEly623jfpVeX6nOCD60dic6PRTnMJUiawLkgYxvXQJHFsSFJ5PyvIng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8oKic1c8dqSkjXJNSSiboXwHfk83xAS2CCtHFYicvibVo6Z3dk0icvvhnJ2w/640?wx_fmt=png&from=appmsg)

为展示不均压结果作为对比，上述实验中单个器件电压均降额至400 V，并非所采用的1200V的SiC MOSFET适合的应用场合，母线电压过低导致不均衡电压中关断过电压的占比较高，有损均压效果。为体现串联技术的实际作用，将逆变器直流侧输入电压提高到1300 V 进行实验，调制比调整为0.6 以保证输出电压基本不变，输出侧电感调整为240μH，输出侧电容160 μH，TVS 管箝位阈值电压调整为700 V，不均压条件依然为驱动电阻不同导致的关断速度不同(RG1 \= 12.5 Ω，RG2 \= 10 Ω)。如图14(a)所示，所提出的均压控制电路能够在逆变基波周期的每个开关周期关断过程中箝位超前器件的电压尖峰，并实现串联器件的电压均衡，保证电压分配差值被限制在所设定的阈值电压以内，充分证明所提出均压方案的有效性。图14(b)为单次关断过程瞬态波形，由于单个器件电压升高，叠加关断过电压的超前器件电压尖峰相对于母线电压的占比降低，瞬态均压效果更加明显。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn7siaCFSaobAq5zziaXs4ibK8IhNF4RcMDgb2jrib9m1mNMPs45icqH69SlhpEDBJvic4eMtOVQ3RPCy0g/640?wx_fmt=png&from=appmsg)

4\.  结论

本文针对SiC MOSFET 串联应用的电压不均衡问题及均压方案展开研究，并提出一种基于TVS管有源箝位技术的串联均压有源驱动电路，得到如下结论：

1）SiC MOSFET 串联应用关断过程中出现不均压的根本原因是串联器件之间的沟道电流和输出电容电流的比例差异。

2）所提出方案利用TVS 管实现串联关断不均压的快速检测，箝位并保护超前器件的电压尖峰，同时采用辅助电路控制串联器件的栅极电荷，调节沟道电流和输出电容电流的比例，实现串联关断均压。此外，在检测环节限制TVS 管的瞬时功率，可以降低对其峰值功率的要求，延长脉冲寿命，保证其在高频SiC MOSFET 应用中长期工作的可靠性。

3）所提出方案的响应速度和反馈能力能够满足在单次关断动作内实现SiC MOSFET 串联均压的控制需求，在每个开关周期都能实现串联均压，不存在调节周期，且不受负载电流变化的影响。

4）所提出的串联均压电路具有有源箝位电路拓展性强的特点；还是独立于原有驱动电路的辅助电路，适用性强；且控制电路结构简单，无需可编程逻辑芯片和额外的信号隔离措施。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)