# 脉冲变压器驱动 SiC MOSFET 型 Marx 同步特性


> 原文地址: [https://mp.weixin.qq.com/s/pvbuQqHTWVKEQla0dUXj0w](https://mp.weixin.qq.com/s/pvbuQqHTWVKEQla0dUXj0w)

**文章来源：**强激光与粒子束

**作者：**江进波1,2，   陈　锐1，   赵　青3，   马　可3，   姚延东1，   陈桂丰1

（1\. 三峡大学 电气与新能源学院，湖北 宜昌 443002；   2. 湖北省输电线路工程技术研究中心（三峡大学），湖北 宜昌 443002；   3. 国网宜昌供电公司，湖北 宜昌 443002）

**摘要 ：**   为实现全固态 Marx 发生器中多个 SiC MOSFET 开关的同步驱动，设计了一种基于脉冲变压器的驱动控制电路。多路驱动信号的同步性会影响到 Marx 发生器的输出波形参数，因此要求驱动信号具有快脉冲前沿、低抖动特点。根据 SiC MOSFET 驱动原理及要求，分析了 SiC MOSFET 驱动电路脉冲前沿的影响因素，分析计算其相关参数，进行仿真模拟验证。设计了共初级穿芯 10 级串联的脉冲变压器，初次级的匝数分别为 1 匝和9 匝，次级经正负脉冲信号调理电路后驱动 10 级 Marx 电路。实测结果表明利用脉冲变压器原边漏感与谐振电容构成的谐振电路在断续模式下，驱动功率越大，脉冲前沿越快且同步性越好。该同步驱动电路的脉冲前沿为112 ns，脉宽 1～10 μs 可调，频率 10～25 kHz 可调，满足固态 Marx 发生器参数调整需求。

**关键词：**SiC MOSFET；同步驱动；脉冲变压器；谐振；驱动功率

近年来，脉冲功率技术飞速发展并逐渐从军用领域向工业应用扩展，工业应用对脉冲功率装置的功率容量要求相对较低，但对其重复频率和寿命提出了更高要求。全固态脉冲功率源利用半导体开关代替传统的气体开关，具有通断控制方便、高重频、长寿命、稳定可靠，易模块化和紧凑化设计等优点，目前已在环保、材料、生物、食品、医疗等方面有相关的应用研究。典型的固态脉冲功率装置主要为 Marx 发生器和 LTD 装置，其中 Marx 发生器相比于 LTD 装置无磁芯且其脉宽可调，更加适用于长脉冲高阻抗负载。随着半导体开关和电力电子技术的发展，以碳化硅 (SiC) 和氮化镓 (GaN) 为衬底的宽禁带电力电子器件快速发展，其相较于传统硅基的 IGBT 和MOSFET 具有耐压高，寄生参数小，开关损耗低，热稳定性好等优势，且具有更高的重复频率。因此本文主要研究基于 SiC MOSFET 的 Marx 发生器，SiC MOSFET 的同步驱动是本文的研究重点。

目前国内外学者对 SiC MOSFET 的开关特性和驱动电路做了大量的研究。A. Manuel 等人设计了一种基于TLP250 光耦隔离芯片的驱动电路，驱动电路结构简单，针对的是单开关驱动。Zhang Weiping 等人设计并分析了基于推挽电路和基于磁隔离的两种驱动电路，该驱动方式可提高驱动能力，减少开关损耗，但驱动电压存在振荡尖峰并牺牲了器件的开关速度。张建忠等人设计了一种基于谐振门极的驱动电路，降低了器件在高频工作时的驱动损耗，但采用的辅助开关管较多，一定程度上增加了电路的控制难度。Li Zi 等人设计了一种针对固态 Marx 发生器中多个开关的驱动电路，该电路具有过电流保护和信号延时驱动功能并利用一个同步信号驱动两组开关 。饶俊峰等人设计了一台基于谐振电路和脉冲变压器的高压脉冲源，并分析了变压器初级漏感与谐振电容产生的谐振效应。以上驱动方式为本文的驱动电路设计提供了参考，但未深入研究驱动前沿对多个 SiC MOSFET 导通特性的影响。为了减小多个开关同步驱动存在的前沿级差，提高其开通速度，充分体现 SiC MOSFET 开关器件的优势，本文研究驱动功率对其前沿和同步性的影响，并对多个 SiC MOSFET 同步驱动存在的问题进行分析，得到多个开关器件同步驱动的设计要求，同时对相关的参数进行计算分析，针对驱动前沿、驱动同步性以及驱动的脉宽和频率可调等问题，设计一种基于 10 路脉冲变压器共初级穿芯结构的驱动控制电路，最后通过仿真和实验进行验证。

**1.  多路 SiC MOSFET 驱动电路**

**1.1 驱动过程存在的问题及驱动要求**

在全固态 Marx 发生器中，高压主电路部分的 SiC MOSFET 开关器件需要低压信号进行驱动控制，两部分的电压差较大，若不采取合适的隔离方式，主电路运行时会对低压控制电路造成电磁干扰，甚至损坏器件。SiC MOSFET 的驱动过程实则是对输入电容 Ciss 的充放电过程，该过程与输出驱动波形的前沿密切相关，若前级驱动电源提供的驱动功率不足，可能会导致其驱动前沿变慢，甚至无法开通，直接影响整个发生器装置的性能。由于固态 Marx 发生器中 SiC MOSFET 开关数量较多，因此所设计的驱动电路中每路驱动信号应同时传递到每个开关的栅源极，而驱动前沿、脉冲变压器性能、驱动电路整体结构、PCB 布局等因素均可能对驱动信号的同步性产生一定影响。发生器装置应用于不同场合可能需要不同的脉冲频率和脉冲宽度，单一的频率和脉宽难以满足需求，因此驱动电路应具有调节驱动信号频率和脉宽的功能。

通过对多路 SiC MOSFET 的同步驱动过程中易存在的问题进行分析，所设计的驱动电路应满足以下要求：

①良好的信号隔离功能；②前级驱动电源能提供足够的驱动功率；③驱动前沿尽可能快，且具有良好的同步性，整个驱动电路结构简单、紧凑；④输出驱动波形的频率在 10～25 kHz 内可调，脉宽在 1～10 μs 内可调。

**1.2 驱动电路原理**

SiC MOSFET 属于电压控制型器件，其驱动过程需要提供正压和负压，正压维持开通，负压控制关断，可采用单相可控全桥逆变电路来获得正负压驱动信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPia6JmcQBWMzGspW02AIPTMEibuYvQbmyAPykjYIeyhWOCOPheJnpcQVSA/640?wx_fmt=png&from=appmsg)

图 1 为驱动电路原理图，10 路脉冲变压器采用共初级穿芯结构，其初级为高频逆变电路，由直流电源 DC，IGBT 开关 T1、T2、T3、T4 以及谐振电感 Lleakage 和谐振电容 Cr 组成。该电路的工作状态由谐振频率 fr 和 IGBT 开关频率 fs 决定，在 fs≤0.5fr 的工作状态下可使 IGBT 工作于软开关状态，减小开关在高频工作时的开关损耗，并可以有效抑制 IGBT 驱动脉冲信号的过冲。电路中直流电源 DC 输出的电压在一定范围内可调，以实现 SiC MOSFET 驱动过程所需功率的变化；谐振电感 Lr 可采用一定电感量的磁环电感接入脉冲变压器的原边或者直接利用变压器的寄生参数漏感Lleakage 来替代；谐振电容 Cr 采用多个电容并联。

10 路脉冲变压器的次级为 10 个 SiC MOSFET 驱动脉冲信号调理电路。当脉冲变压器次级输出的正脉冲到来时，二极管 D1 正向导通，D2 反向截止，三极管 S1 共基极连接，其发射结和集电结均正偏，S1 导通并处于饱和状态，将驱动信号经驱动电阻 Rg 传至 SiC MOSFET 开关管 Q 的栅极 G，为输入电容 Ciss 充电。稳压管 Z3 用于限幅，将开关管Q 的栅源电压 VGS 控制在 18V 左右，维持其开通。同理，脉冲变压器次级输出的负脉冲到来时，二极管 D2 导通，D1 截止，S2 导通并处于饱和状态，稳压管 Z4 将开关管 Q 的栅源电压 VGS 控制在–5 V 左右，使其关断。

SiC MOSFET 驱动信号经逆变电路产生，为保证每个开关管驱动信号的同步性，信号先经过 10 路脉冲变压器隔离变换及正负压信号调理电路作用后，输出 10 路幅值、脉宽及频率均一致的同步电信号，再将信号传输至10 个 SiC MOSFET 开关管的栅源极上，驱动控制其同时开通和关断。

**1.3 逆变桥控制电路设计**

逆变桥由 4 个自带反并联二极管的 IGBT 构成，共需 4 路驱动信号，将驱动信号分为两组，每组需同时输出+14 V和−8 V 的驱动电压用于控制 IGBT 的通断，两组电压信号之间设置死区时间以防止桥臂直通而发生短路。采用TL494 芯片提供 PWM 信号，将输出的 PWM 接至 IGBT 驱动板为逆变桥提供驱动信号。TL494 的调脉宽、调频率控制电路可实现 IGBT 驱动脉宽和频率调节的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPianocLTnOBA6xmAIOkjWdxvnzAibfUSh5Th2Cyb0wIJ1JG9MFBuHjRYhQ/640?wx_fmt=png&from=appmsg)

为实现上述功能，根据 TL494 的逻辑原理与控制方式，设计了如图 2 所示的芯片控制电路。控制芯片的供电电压范围为 7～40 V，设计中选用+12 V 电源为芯片供电，三极管 Q1 的逻辑输入为前级比较电路的输出，当前级逻辑输入为低电平时，三极管 Q1 导通，此时，+5 V 参考电压 Vref 加到死区引脚 OT，同时，Vref 电压经过稳压管 Z1 后，三极管 Q2 导通，振荡定时电容 C3 被短接，PWM 信号输出截止；当前级逻辑输入为高电平时，三极管 Q1 截止，输出死区与振荡定时电容 C3 正常工作，TL494 输出 PWM 信号，实际电路工作时，逻辑输入持续为高电平。芯片内部振荡器的振荡频率与输出的 PWM 信号频率一致，该频率受外接电阻 RT 和外接电容 CT 的影响。两路 PWM 信号的脉宽受芯片内部死区时间控制补偿器的输入电压大小的影响。本文设计的芯片控制电路中，输出控制端 ECO 引脚为高电平，作推挽输出，因此芯片内部振荡器的振荡频率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiahx6ibvQyc4MB3c3ptLQSMyIYMv6XjA7jPzYSwX0V0L9tf9crtuXLXMw/640?wx_fmt=png&from=appmsg)

式中：R1 和 RP6 为振荡定时外接电阻；C3 为振荡定时外接电容。

所以，该电路通过控制三极管 Q1 实现 PWM 信号的输出与截止；电位器 RP6 控制 PWM 信号的频率；电位器RP5 控制输出 PWM 信号的脉冲宽度。

2.   驱动电路设计

2.1 脉冲变压器设计

10 路脉冲变压器采用共初级穿芯结构。这种结构能够保证驱动信号同步性的同时，还可有效地对高低压信号电路进行隔离，有利于整个驱动电路的模块化、结构化设计。

为减少脉冲变压器次级输出电压的损失,需选用具有磁导率高、磁感应强度大、低损耗、低矫顽力等特点的磁芯材料，满足励磁电感远大于漏感，表 1 给出了四种磁芯材料的基本特性比较。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaU4wtYsXjkiaERESxgAbibibMGTFYTmIVLsXtgHsh01yQLPlgpFANMMWYA/640?wx_fmt=png&from=appmsg)

根据表 1，锰锌铁氧体和钴基非晶磁芯材料的饱和磁感应强度较低，易饱和，不适合本设计。而铁基纳米晶合金材料的综合特性相较于铁基非晶材料更优，更适合用来做驱动变压器，因此本文选用铁基纳米晶磁环。

为防止磁芯饱和，输入方波脉冲的伏秒面积应小于磁芯的最大伏秒面积\[18\]。伏秒面积公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiajCAsa6NuMVBdhhPmaQVSzKcJPfVxYebdJGKBsicqnJ4V5Yo1FmaiclYg/640?wx_fmt=png&from=appmsg)

式中：U1 为变压器初级输入方波脉冲的幅值；T1 为输入方波的脉宽；ΔB 为磁感应强度增量；Sc 为磁芯横截面积；N1 为初级绕组匝数。由式（2），采用横截面积为 0.88 cm2，尺寸为 40 mm×25 mm×15 mm 的铁基纳米晶磁环满足设计需求。脉冲变压器的初级绕组采用单根 0.1mm×500 股的利兹线，一次性同时穿过 10 个脉冲变压器并绕制 1 匝；为减小漏感，次级绕组采用两根 0.1 mm×45 股的利兹线并绕，分别在 10 个变压器上各绕制多匝。

考虑到每个脉冲变压器的初级绕组由单根线绕制 1 匝，这对变压器的能量传递效率和初级漏感影响较大。若次级绕组匝数过少可能会出现电压无法升高的情况，因为变压器实际变比与初次级的绕组电感有关：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPia04HeDlXS809tfcMCbhBib9V1SFmMytCzk4qib3ib3t3OJMraqMA2Mypkw/640?wx_fmt=png&from=appmsg)

式中：n 为升压变比；L1 为初级绕组电感；L2 为次级绕组电感。由于磁芯的电感较大，而本文所采用的穿芯共初级结构将每个磁芯串联起来会使得初级绕组电感变大，根据式（3）可分析得到，随着 L1 增大会使得实际的升压比n 变小，进而在变压器次级感应出的电压会比理论计算值低。经上述分析，脉冲变压器次级绕组匝数为 9 匝。

**2.2 驱动电源与开关器件的选型**

SiC MOSFET 驱动过程除了提供栅源极正负压外，还需要足够的驱动功率。图 1 中直流电源 DC 的最大输出功率为 500 W，其输出的电压范围在 0～24 V 连续可调，输出的电流范围为 0～20.8 A；在逆变桥正常工作过程中，考虑到每个桥臂构成的谐振回路会有较大的电流流过，故 IGBT 开关 T1、T2、T3、T4 选用 Infineon 公司的 IKW50N65ET7，该器件耐压为 650 V，最大电流为 50 A。本文设计的驱动电路是针对 10 级全固态 Marx 发生器中的 10 个 SiC MOSFET 开关管，该开关选用 CREE 公司的 C2M0045170D，其工作参数见表 2。

**![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPianxicPfrt4VmicLEGmkoibUO004micctllkEnqPZZJOHMiajlQqJEGicEicGQA/640?wx_fmt=png&from=appmsg)**

**2.3 驱动信号调理电路器件的选型**

图 1 中，D1、D2 选用导通损耗低的肖特基二极管；三极管 S1、S2 为对管，S1 为 PNP 型；S2 为 NPN 型。稳压管Z1、Z3 选用 18 V；稳压管 Z2、Z4 选用 5.1 V；R2=220 kΩ，R3=R5=1 kΩ，R4=100 Ω。SiC MOSFET 虽为电压控制型器件，但其开通过程需要一定的驱动电流，其驱动过程主要受输入电容 Ciss 和反向传输电容 Crss 的影响。在 ton 时间内栅极驱动电压达到 Vgs，所需要的电流平均值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaUkDRcicYRFFQSiaf6ibNguav9NdY3o8492ahWsM5JyZw9SuhFh1pYXgQA/640?wx_fmt=png&from=appmsg)

式中：ton 为开通时间；Vgs 为驱动电压。

设漏源极间供电电压为 Vdc，当驱动电压达 Vgs 时，漏极导通，若忽略 SiC MOSFET 导通压降 Vds，那么漏源极间电压下降了 Vdc。反向传输电容 Crss 的上端电压下降了 Vdc，其下端电压上升了 Vgs。此过程所需要的电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaFHXTzBzmM8ebaBppgJBeUqADPf6FzthpjTbicua4amZVSeKlYf5cqXw/640?wx_fmt=png&from=appmsg)

根据前文分析，结合式（4）、(5) 可得出 SiC MOSFET 需要的驱动电流约为 0.86 A，实际设计中按 1 A 计算。

SiC MOSFET 栅极电阻由内部电阻和外接驱动电阻组成，当驱动电压恒定时，驱动电阻与 SiC MOSFET 的开关速度，开关损耗、dVDS/dt、dID/dt 等有密切的关系。外接驱动电阻 Rg 可取数据手册中所给推荐值，但不超过推荐值的三倍，在设计中，需根据实际情况，选取不同的外接驱动电阻，调节至综合性能最优为止。一定条件下，驱动电阻越大，输出驱动波形的电压振荡尖峰就越低，驱动前沿越慢。考虑到本文设计的驱动电路中没有采用驱动芯片，SiC MOSFET 开通过程所需的驱动电流完全由直流电源 DC 提供，为了获得更大的驱动功率，实际电路中的外接驱动电阻 Rg 取 2.5 Ω。

**3.  仿真与实验结果分析**

**3.1 漏感测量与仿真结果分析**

实验前，先利用短路试验对脉冲变压器的漏感进行测量。将每个变压器次级绕组短接，利用 LCR 测量仪测得漏感约为 963 nH。实际仿真与实验中将漏感 Lleakage 按 1 μH 计算分析。

为研究驱动功率对 SiC MOSFET 驱动前沿的影响，可先利用 Pspice 软件进行初步的仿真研究。在 Pspice 中搭建图 1 所示的电路图，IGBT 开关频率 fs 为 25 kHz，脉宽为 10 μs，谐振电感 Lr 设为 1 μH，谐振电容 Cr 为 10 μF，则谐振频率：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiarC2736icCxssL60uXN8OsQmlmxtciazAT1SwHJQcdJGkibzFvD2ST8p0Q/640?wx_fmt=png&from=appmsg)

由式（6）可知谐振频率为 50.3 kHz，满足 fs≤0.5fr，将直流电源 DC 取值 18、20、24 V，依次得到驱动电压 VGS1、VGS2、VGS3 的仿真波形见图 3，对应时刻的驱动电流波形 IG1、IG2、IG3 见图 4。对比仿真结果可发现，一定条件下，随着直流电源 DC 输出的功率增加，SiC MOSFET 获得的驱动功率越大，驱动波形前沿越陡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiao19fia3epKKy3ouTGY4j71xERpy2YFjdYsUBuPL6ib4SXnbdxdlKibQdA/640?wx_fmt=png&from=appmsg)

**3.2 实验结果分析**

为进一步研究驱动功率对 SiC MOSFET 驱动前沿的影响并与仿真结果进行对比，设计了下列实验。将驱动频率 fs 调为 25 kHz，驱动脉宽调至 10 μs，谐振电感 Lr 为脉冲变压器漏感 Lleakage，谐振电容 Cr 为 10 μF，由式（6）得谐振频率 fr 为 50.3 kHz 并满足 fs≤0.5fr。将前级驱动电源 DC 的电压调至 18、20、24 V，并在该电源的正输出端口串入直流电流表，依次测量得到的驱动波形 VGSa、VGSb、VGSc 见图 5；从电流表中读取得到上述三种电压下电源输出的电流依次为 1.9、2.8、5.3 A，对应的谐振电流波形 Ira、Irb、Irc 与 IGBT 开关 T1、T2 驱动波形 Vge1、Vge2 见图 6。三种电压下电源输出的驱动功率分别为 34.2、56.0、127.2 W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaMwqCp0C8ha7qOYwsIKVMvTDfHdjOUqfvTYAYv6Oqh3Yvs5BqEassSA/640?wx_fmt=png&from=appmsg)

由图 5 中前沿展开部分可知三种驱动功率下，驱动前沿 (10%～90%) 依次为 210、145、112 ns。图 6 中，脉冲变压器初级侧谐振电流过零时刻与逆变桥中 IGBT 开关 T1、T2 的开通和关断时刻基本对应，可实现零电流开关（ZCS），降低了开关损耗。实验结果表明，一定条件下，驱动功率越大，SiC MOSFET 的驱动前沿越快，与仿真结果相对应。

为研究驱动功率对 10 路 SiC MOSFET 同步驱动存在的前沿级差影响，在相同谐振频率，不同谐振参数，相同驱动频率和脉宽、相同电源电压下进行实验。

驱动频率和脉宽保持不变，将前级驱动电源电压调至 24 V，在 10 路脉冲变压器初级串联接入 0.9 μF 谐振电容Cr 和 10 μH 电感 L，此时谐振电感 Lr 等于接入电感 L 与变压器漏感 Lleakage 之和，为 11 μH；由式 (6) 得谐振频率 fr 为50.5 kHz 且满足 fs≤0.5fr。得到 10 路驱动波形、前沿及级差见图 7，脉宽为 10 μs；前沿 (10%～90%) 为 546 ns；级差最大为 107 ns。实验中，由电流表可知前级电源 DC 输出的电流为 1.2 A，驱动功率为 28.8 W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaTic39YAIy6GMjbC6nlHgWkuJMQic4FsU0own8hr1Vtuc8agicNz1kLplQ/640?wx_fmt=png&from=appmsg)

不接入电感 L，在 10 路脉冲变压器初级仅串联接入 10 μF 的谐振电容 Cr，此时谐振电感 Lr 等于变压器漏感Lleakage，为 1 μH；由式（6）得谐振频率 fr 为 50.3 kHz。得到 10 路驱动波形、前沿及级差见图 8，脉宽为 10 μs；前沿(10%～90%) 为 112 ns；级差为 23 ns。由电流表知电源 DC 输出的电流为 5.3 A，驱动功率为 127.2 W。

对比图 7 和图 8 的实验结果可发现，仅以脉冲变压器的原边漏感 Lleakage 作为谐振电感时，SiC MOSFET 的驱动前沿明显加快，因为在该情况下，脉冲变压器的初级阻抗变小，使得前级电源 DC 输出的电流变大，从而每个 SiC MOSFET 获得了更大的驱动功率。经上述实验结果分析，对多路 SiC MOSFET 的同步驱动，驱动功率越大，驱动脉冲前沿越陡且级差越小。此外，驱动前沿较缓的主要原因是共初级穿芯 10 级脉冲变压器的初次级漏感相对较大，影响了耦合系数，以及驱动回路的杂散参数等因素导致的。减小变压器磁芯大小和驱动回路的长度将能够获得更快的脉冲前沿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaFEpG5GDlibreCciczQdq4nuXSmAfCZIq6Aury12jbq5UA91cqG5P0HOw/640?wx_fmt=png&from=appmsg)

图 9 为同一频率下，调节 TL494 芯片控制电路中电位器 RP5 的值得到 SiC MOSFET 的不同驱动脉宽；图 10 为同一脉宽下，调节电位器 RP6 的值得到 SiC MOSFET 的不同驱动频率。结合上述实验结果分析可知，电路的驱动脉宽在 1～10 μs 内可调，驱动频率在 10～25 kHz 内可调。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaDkBVLzvIyZaj8iabFBFZg8hqMy3aUYTLYa7DicvVx0HL8yvibrreHaMmA/640?wx_fmt=png&from=appmsg)

10 级基于 SiC MOSFET 的 Marx 发生器电路实验平台如图 11 所示。改变直流充电电源工作电压，将 Marx 电路中电容充电至 1 kV，在 10 kΩ 纯阻性负载下，控制 SiC MOSFET 驱动脉宽为 3 μs，调节驱动频率，得到不同重复频率的脉冲电压波形见图 12，其频率分别为 10、18、25 kHz，幅值为 10 kV。图 13 为 25 kHz 频率下，调节 SiC MOSFET驱动脉宽，Marx 发生器在不同脉宽下输出的 10 kV 高压脉冲，其脉宽分别为 1、4、6、8、10 μs。图 14 为频率 25 kHz，脉宽 5 μs 下，调节直流充电电源的工作电压，得到幅值为 2～10 kV 的脉冲电压波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiakMLf0FKcLticoaJ6thPd4bkFtfUmuCXEUfw5iaxjZNUWPcOmPzibE4aEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaW9UtatZAw3vB9mbHoEFAAGLribWcNobUeJ2W1npV3galmP6eHlw9mLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiak66a7022I7MyOHeJhOHQChMVAhClNLb7bHeycd63BARyEVib1gT0Ujw/640?wx_fmt=png&from=appmsg)

对驱动控制电路和固态 Marx 发生器的实测结果表明，本文设计的驱动电路可实现多个 SiC MOSFET 的同步驱动，且具有较好的灵活性。

**4 . 结　论**

SiC MOSFET 驱动电路的前沿和抖动会影响到其同步性能，从而影响到 Marx 电路的输出参数。本文设计了一种基于共初级穿芯 10 级串联的脉冲变压器驱动电路，次级采用 9 匝密绕减小其杂散电感，提高耦合系数，同时能减小其脉冲前沿。仿真和实验结果表明，利用变压器原边漏感作为谐振电感，在保证谐振频率和开关频率不变时，驱动功率增大，脉冲前沿和抖动都将减小。该同步驱动电路的脉冲前沿为 112 ns，前沿级差为 23 ns，实现了基于SiC MOSFET 的 10 级 Marx 电路同步驱动，Marx 方波脉冲电压源的脉宽 1～10 μs 可调，频率 10～25 kHz 可调，幅值1～10 kV 可调。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)