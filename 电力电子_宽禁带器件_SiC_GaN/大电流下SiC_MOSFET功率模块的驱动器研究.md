# 大电流下SiC MOSFET功率模块的驱动器研究


> 原文地址: [https://mp.weixin.qq.com/s/PLlnX9ttABX9nbu1QIuvvw](https://mp.weixin.qq.com/s/PLlnX9ttABX9nbu1QIuvvw)

**文章来源：**电气传动

**作者:**温传新1，朱金大1，武迪1，云阳1，程远2，杜博超2

（1.国电南瑞科技股份有限公司，2\. 哈尔滨工业大学 电气工程及自动化学院)

**摘要：**由于碳化硅（SiC）MOSFET具有高频、低损耗、高耐温特性，在提升新能源汽车逆变器效率和功率密度方面具有巨大优势。对于SiC MOSFET功率模块，研究大电流下的短路保护问题、高开关速度引起的驱动振荡问题尤为重要。针对这些问题，设计了大电流下SiC MOSFET功率模块的驱动器，包括电源电路、功率放大电路、短路保护电路、有源米勒钳位电路和温度检测电路。在分析了驱动振荡机理后，通过有限元软件提取了驱动回路的寄生电感，优化驱动回路布局，使得开通与关断回路杂散电感分别降低到 6.50nH和5.09nH。最后，以Cree公司的1200V/400A CAB400M12XM3功率模块为测试对象，利用双脉冲实验验证了所设计驱动电路的合理性及短路保护电路的可靠性，对于800A的短路电流，可以在1.640μs内实现快速短路保护。

**关键词：**碳化硅 MOSFET；驱动器；短路保护；驱动振荡；双脉冲实验

随着电力电子技术的发展，高耐压、高效率、高结温已成为电力电子器件技术的发展趋势。与传统的 IGBT 相比，第三代宽禁带半导体器件SiC MOSFET 在高开关速度、高耐压、低损耗等方面具有优势，已成为近年来新的研究热点。电动汽车要求电驱动系统具有高功率密度、高效率、高工作温度以及高可靠性，SiC MOSFET 在电驱动系统中的优势与潜力，为电动汽车小型化、轻量化的发展注入了新的动力。

然而，SiC MOSFET 的高频、高速开关速度特性，使其对驱动回路与功率回路的寄生参数敏感度增大，在开关过程中更易产生电压电流的过冲和振铃，引发电磁干扰问题，也会导致桥臂串扰和驱动振荡问题，严重威胁电驱动系统的安全。文献设计了 SiC MOSFET 的驱动电路，通过在器件栅极和源极两端并联电容，减慢开关速度，在牺牲效率的情况下，避免了桥臂串扰引起的驱动振荡问题。但是该研究只是针对电流等级比较小的单管 SiC MOSFET 设计的驱动电路，而随着电流等级的增加，桥臂串扰、驱动振荡以及短路保护问题会变得严峻，有必要对大功率SiC功率模块的可靠驱动进行研究。文献设计了一种 SiC MOSFET 快速保护电路，利用分流器检测法检测短路电流，虽然可以实现快速保护，但是串联的电阻会增加损耗。文献采用分立器件搭建了一种 SiC MOSFET 高温驱动电路，高温驱动下效果较好，但是分立器件增加成本的同时也增加了故障率。文献设计了一种栅极有源钳位电路来抑制桥臂串扰问题，但是实验验证使用的 SiC MOSFET 仍然为小功率的单管器件，对于在大功率SiC功率模块中的实际应用效果没有进行实验验证。

本文针对大电流 SiC MOSFET 功率模块的驱动与保护问题，设计了一款驱动器。采用高可靠性、高抗扰性能的电源及驱动芯片设计驱动电路，增加共模电感提高驱动电路抗扰性能，设计短路保护电路实现对大电流短路故障的快速响应。通过对 SiC MOSFET 驱动振荡机理的分析，指出优化驱动回路PCB走线布局，减小驱动回路寄生电感是抑制振荡的有效途径。利用 AnsysQ3D Extractor 软件提取驱动回路寄生电感，进而优化驱动电路布局。最后，通过双脉冲实验验证驱动电路设计的合理性，通过短路保护实验验证短路保护的快速性和可靠性。

**1 驱动及保护电路设计**

SiC器件的高频和高开关速度特性会带来一些特殊问题。例如，高开关速度引起的高dv/dt和di/dt会产生较大干扰，这些干扰很容易串入驱动回路，使驱动信号受到干扰。因此SiC MOSFET驱动电路设计的着力点在于增强可靠性和抗干扰能力。

**1.1 电源电路设计**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzdPRls3UyvmqbKNa1dWibLx95mnsia87K6jZLnm1oqZiblsiboemERXopPg/640?wx_fmt=png&from=appmsg)

为了保证功率器件可靠关断，抑制桥臂串扰引起的误开通问题，SiC MOSFET需要采用负压关断。采用高可靠性隔离电源模块 MGJ2D121505SC将+12 V 的输入电压转换为+15 V和\-5 V。MGJ2系列 DC-DC 转换器具有很高的隔离度和抗干扰性能，超低的耦合电容可以抑制干扰的影响。MGJ2D121505SC 电源转换电路如图 1所示，为了进一步提高抗干扰能力，在电源的输入端加入共模滤波电感。

驱动电路的关断负压采用\-4 V，本文采用线性稳压器LT3015EDD将\-5V转换为\-4V，该稳压器具有瞬态响应速度快、噪声低等特点。LT3015EDD电源转换电路如图2所示，电路输出电压范围为\-1.22 ～\-29.3 V可调，输出电压Vout由R6HT，R7HT，R8HT三个外部电阻决定，计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzibJWTLtx3dFN4PqDTrQfunLyvYXN7M3dfS1CwMs7wbk3eck3pN6hdLA/640?wx_fmt=png&from=appmsg)

**1.2 驱动放大电路设计**

控制器输出的 PWM 控制信号需要经过驱动电路进行功率放大，产生驱动信号作用于 MOSFET 栅极。除了驱动开关管正常开关以外，驱动电路还需要具有电气隔离、短路保护、有源米勒钳位、欠压保护等功能。SiC MOSFET 的高开关速度和高开关频率对驱动电路的峰值驱动电流和驱动稳定性提出更高的要求。本设计选用TI公司单通道电流隔离式栅极驱动芯片 UCC21750，该芯片具有高达±10 A的峰值源电流和灌电流，可使开关器件快速跨越米勒平台，提高驱动速度。UCC21750 还具有短路检测、有源米勒钳位以及欠压保护等功能。采用UCC21750芯片设计的驱动电路如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzp0DrJr9djPnx231LSQ1QQYlaQf08GNic8z5TpqlE5WFluqG4lfcevOw/640?wx_fmt=png&from=appmsg)

**1.3  短路保护电路设计**

短路保护电路原理如图 4 所示。UCC21750芯片的 COM 端与 SiC MOSFET 的源极相接，DESAT 引脚相对于 COM 端具有典型的 9 V 阈值电压。当功率器件关闭时，UCC21750 内部 MOSFET M1开通释放DESAT引脚电压。同时，DESAT引脚会被拉至COM端电压（驱动负压），防止过电流和短路故障被误触发，这意味着过电流和短路保护功能在功率器件处于关断状态时不起作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzTtT1hgwueHhPCAHjGia93P4PUg6mXwnGfaZjKNYFsRoeyjQRXWVUgUw/640?wx_fmt=png&from=appmsg)

当SiC MOSFET 处于导通状态时，UCC21750内部 MOSFET M1关闭，内部电流源为消隐电容CBLK充电，并且二极管 VF和稳压管 VZ导通。在正常工作期间，电容器CBLK电压被钳位，钳位电压为SiC MOSFET 正向导通电压、二极管、稳压管、限流电阻RDESAT的压降之和。正常工作时，SiC MOSFET正向导通电压和RDESAT上的压降较小，可以忽略。当发生短路故障时，电容 CBLK电压会快速充电至 VDESAT阈值电压，从而触发 UCC21750芯片内部短路保护功能，本设计中VDESAT=9 V。在短路保护过程中，电容CBLK的充电时间称为消隐时间，根据图4可以得到电容充电公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRztZKWrBQuvmbeHJU5ZodLcDUUYa8eo2TErwPPwZfcrCEU0YAEslwGPw/640?wx_fmt=png&from=appmsg)

式中：500 μA 为芯片内部电流源电流；VC0为短路故障发生时 CBLK电容充电的初始电压；VF为二极管压降；VZ为稳压管压降；RP为外接的上拉电阻，2.2 kΩ。RP连接+15 V 电源，目的是增加消隐电容的充电电流。

图4短路保护电路的二极管的选型计算可根据下式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzcmTlZfFhYiavl6nMB6w5SsjMm7bxqSyJQTHy1vuC3aK6QrFUyhJjCibQ/640?wx_fmt=png&from=appmsg)

首先参考 SiC 器件数据手册，确定短路保护的最大电流，之后查阅 SiC 器件手册中的输出特性曲线，确定在最大短路保护电流下的 Vds值，此值即为式（3）中的 VDS\_Trip，利用式（3）可以对二极管 VF和稳压管VZ进行选型设计，通过预估器件正常工作时的温度范围，确定稳压二极管VZ电压和二极管 VF导通压降，最终设计的短路保护电路如图 5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRznfhvSDxK0iawdCaiavn4eicnZ8otRaSskjNORuWfpgQaQqsXHOVfsCMCA/640?wx_fmt=png&from=appmsg)

**1.4  有源米勒钳位**

在半桥电路的开通过程中一直存在上下桥臂串扰问题，对于高开关速度的 SiC MOSFET 来说，串扰问题更为严重。同一桥臂的两个开关管，当一个器件处于关断状态时，体二极管会在死区中传导电流，漏极\-源极电压保持不变。此时当另一个器件导通瞬间，将会产生较大的dv/dt加在处于关断状态器件的漏源极两端，通过关断器件的米勒电容 Cgd耦合到驱动回路，产生流经Cgd的米勒电流Idg，该电流计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRz8BFcblK5Mjb98ZiaNQqTqlEHu5w1YQOm1VpGLhDKoX3HUf6dtF8D3Dw/640?wx_fmt=png&from=appmsg)

电流Idg通过栅极电阻和栅源极寄生电容Cgs分流，在栅源极间引起串扰电压，当串扰电压高于功率器件开通的阈值电压 Vth时，器件误开通，导致桥臂直通损坏器件。UCC21750的有源米勒钳位功能能有效避免由于桥臂串扰引起的器件误开通问题。

图 6 所示为有源米勒钳位的原理图，在 SiCMOSFET 关断时，当耦合到栅极的串扰电压大于VCLMPHT后，UCC21750 内部的 MOSFET M2导通，将功率器件的栅极引脚电位拉至VEE引脚电平（驱动负压），为栅极驱动端的桥臂串扰电压创建一条低阻抗路径，VCLMPHT比 VEE 引脚的电压高 2 V，确保在功率器件误导通之前M2动作，释放栅极驱动端电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzhs3r12TyiayJdYweDxyLbyMbyjqeVaGshE3zP16yrJt8C3nvDWt7H0w/640?wx_fmt=png&from=appmsg)

**1.5  SiC MOFET结温检测**

SiC MOSFET 模块内部靠近管芯位置集成温度检测电阻器，该检测电阻与 SiC 模块芯片结温呈一定数值关系。SiC MOSFET结温检测电路如图7所示，UCC21750内部集成有一个200 μA电流源，SiC MOSFET功率模块的温度输出引脚连接到UCC21750 芯片的检测引脚 AIN，SiC 功率模块内部的温度检测电阻在电流源的作用下产生压降，UCC21750芯片将检测到的电压信号转化为PWM信号，通过 APWM 引脚输出给控制器，控制器根据下式计算出温度采集电阻两端的电压值，进而通过电阻与温度的数值关系得到芯片工作结温。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzicOeq38u4pvavUQYibM21Iou1dCQP8eNX7fPGZTfeIibgaZcFT50f9DOw/640?wx_fmt=png&from=appmsg)

**2  驱动回路优化设计**

**2.1 SiC MOSFET驱动振荡机理分析**

以 SiC MOSFET 半桥功率模块双脉冲实验电路为例，其简化双脉冲电路模型如图 8 所示。上管栅极驱动端接负压，等效为一个二极管，下管施加双脉冲驱动信号。图中，LESL为直流母线电容Cbulk的等效串联电感；Lloop为母线回路寄生电感；CJ为二极管 D的结电容和负载电感 Lload的等效并联电容之和；Cgs，Cgd，Cds分别为开关管 M 的栅源、栅漏、漏源极寄生电容；Ld，Ls分别为下管的漏极与源极寄生电感。在直流电源UDC为母线电容Cbulk充电结束后，接触器 K1将直流电源从电路中切掉，利用母线电容Cbulk中存储的电压向后级放电，完成实验，实验结束后K2和Rload为母线电容放电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzw7rrE9ade9vQQVIXoCronRfxOzmGKkuuV1O4dkRXvT3JOCjhuXOpnA/640?wx_fmt=png&from=appmsg)

栅极寄生电感Lg与栅极驱动电阻Rg以及SiC MOSFET 的输入电容Ciss（Ciss=Cgs+Cgd）构成RLC谐振网络，在 SiC MOSFET 工作时该谐振网络将引起栅极\-源极电压 Vgs波形的过冲和振荡，严重时驱动电压有可能超过栅极耐受值，造成栅极氧化层损坏。该谐振网络的系统阻尼率ξ计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRznia6UqmGQhe64REILE6vvN54o3vTuN55HcticWddGrlgOVr6FhWpvv2Q/640?wx_fmt=png&from=appmsg)

根据式（6），通过增大栅极驱动电阻来增大ξ，可有效缓解回路振荡，但会降低开关速度，增大损耗，无法发挥SiC MOSFET高速、高效率的优势，因此有效的途径是：通过优化驱动回路寄生电感，减小Lg来抑制驱动振荡。

此外，在SiC MOSFET关断时，高di/dt和逆变器功率回路中所有的寄生电感 Lstray（Lstray=LESL+Lloop+Ld+Ls）作用导致开关管漏\-源极两端的 Vds电压产生过冲，电压过冲值计算如下式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzAiat5UZBicuHia1cHm0vZxSycDOFEAVfPEK8vKkF8us2xAX8qL9X7fd2Q/640?wx_fmt=png&from=appmsg)

漏\-源极寄生电容 Cds、结电容CJ及功率回路寄生电感 Lstray产生串联谐振，使得 Vds波形过冲之后出现明显振荡，并且该Vds电压振荡会通过米勒电容耦合到栅极回路，导致驱动波形产生明显振荡。可以通过前文的有源米勒钳位方法抑制漏\-源极两端的Vds电压振荡，减小 Vds电压振荡对驱动回路的影响，从而间接抑制这种驱动振荡。

**2.2 驱动回路杂散电感优化设计**

根据以上分析，驱动回路寄生电感对驱动波形振荡有较大影响，在实际电路设计时，驱动电路与功率器件之间的走线距离应尽可能短，构成的栅极回路面积应尽可能小。驱动回路的寄生电感主要由驱动电路的PCB线路布局决定，将绘制好的驱动电路 PCB 导入到 Ansys Slwave 中，选择驱动回路相应的网络后导入Ansys Q3D Extrac⁃tor软件进行寄生电感提取，导入Q3D Extractor后的寄生电感提取界面如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzlhISk9zL6b8Toatk1TibjZ796nlL4olObPRrOcAXhPXkY8n08NmLa4w/640?wx_fmt=png&from=appmsg)

根据实际电流情况对导入Q3D Extractor后的模型分别添加Source源与Sink源，设置相应的仿真参数并运行仿真，得到如图10所示的杂散电感提取矩阵。图中，主对角线上的数据为自感，非主对角线上的数据为互感，互感的正负与电流方向相关，根据下式可计算出开通和关断回路的杂散电感：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzHp91xSBmhiaZAGJMdYLGUKsKXAtwAiavkBzGN5aKnxAAm2WVhrW2ABvQ/640?wx_fmt=png&from=appmsg)

以得到的驱动回路寄生电感值为参考，优化驱动回路PCB走线设计，使得最终PCB线路布局的开通与关断回路杂散电感分别降低到 6.50 nH和5.09 nH。

**3 实验验证**  

为验证本文所设计的驱动电路性能，搭建了双脉冲实验平台，采用Cree公司1200 V/400 A的半桥 SiC MOSFET 功率模块 CAB400M12XM3为实验对象，该模块内部无反并联二极管，同时采用新型封装结构，使得体积得到显著降低，适用于高功率密度要求的电动汽车领域。

搭建的双脉冲实验平台如图11所示，为降低功率回路PCB走线带来的寄生电感，实验用的评估板参考 Cree 官方推荐方案进行设计。双脉冲测试评估板如图12所示，评估板中电流测量采用高精度低阻值电流检测电阻（current viewing resistor，CVR）W-2-0025-4FC，通过 BNC 电缆连接示波器；支撑电容采用 4 个 40 μF 的薄膜电容并联，实验控制及测量设备参数如表1所示，双脉冲实验参数为：直流母线电压 Vbus=0~540V，支撑电容 Cin=160 μF，负载电感 Lload=24 μH，SiC 模块驱动电压Vgs=-4/+15 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzsGN2ibRqBLMSmTEakBCp6s3QxCicCAviarMCSkvv3CMYj6KuX38QLlA3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRziaqn3xMerpZzvaEtMP4Me4xSsMANhu59rp7yUh1nyXiaymmAyLuRn2PQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzLA6Ogm7pzpObv907WXOYZVkZTiae4za1HFcRX4sn5OegNBfhiaE2VsJQ/640?wx_fmt=png&from=appmsg)

本文所设计的 SiC MOSFET 驱动电路应用于纯电动汽车 SiC 逆变器，该逆变器的母线电压为540 V，所以本文所进行的双脉冲实验，直流母线电压为 0~540 V 可调。在驱动电阻 Rgon=Rgoff=1 Ω和Rgon=Rgoff=2 Ω时，双脉冲实验波形分别如图13a和图 13b 所示，第 2 个脉冲的开通关断过程放大分别如图 14和图 15所示。由于利用该功率模块设计的SiC逆变器实际工作电流不超过400 A，所以通过计算使得双脉冲结束后，Id电流达到400 A，计算得到第 1个和第 2个高电平脉冲的持续时间分别为 13 μs 和 5 μs，两个高电平脉冲中间的低电平持续时间为 8 μs，中间低电平时间要保证SiC MOSFET能够完全关断。

从图 13~图 15中可以得出，本文所设计的驱动电路应用在高功率 SiC MOSFET 模块驱动中，驱动电路输出驱动波形稳定，开关振荡小，抗桥臂串扰能力强，可以有效避免误开通问题。随着驱动电阻的增加，Vds 和 Id 波形尖峰变小，但是开关速度变慢，Rgon=Rgoff=1 Ω和Rgon=Rgoff=2 Ω时的开关时间分别为：Ton=83 ns，Toff=50 ns；Ton=143 ns，Toff=72 ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzZ4ybu3VaK21HRRbN478WxSgEN5gwQ82uNcVyUbUgQkmrb07rBESbUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzDyncIicjQnIDAyZIFjRs3KLf0z8blBOia7EQ5b314vZXCm2rp5oz85wA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRz5JkPk6U6GZxRNL6meOrIcDibWPIUrrbzXLZ1wYibtoK0XmQNVz6aMCeg/640?wx_fmt=png&from=appmsg)

在双脉冲实验平台的基础上进行短路实验，去掉图 8中的负载电感 Lload，通过调整图 4电路中二极管的参数，设置电流保护阈值为 800 A。控制 SiC 模块上管一直处于开通状态，控制驱动器给模块下管3 μs的高电平脉冲，使得直流母线通过模块上、下管直通短路，得到短路保护波形如图16 所示。图 16 中，Vdsp为控制器输出的 3 μs 的控制信号，Vdsp和驱动器输出电压Vgs之间存在80 ns的延时时间。在驱动电压Vgs控制桥臂下管开通时，桥臂发生短路，短路电流迅速增长，前文已提到测量电流的同轴分流器采样电阻为0.002 526 Ω，所以图 16 中所示的电流测试通道 1 V/格代表1/0.002 526 = 400 A/格。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPrpDreeiaEWkEFbvpTFgRzibdyuibKN2kqbobC64PPsRdvjrfe9Pbd0x90ny6Jh8v0jXUQeblMyOZg/640?wx_fmt=png&from=appmsg)

当短路电流达到 800 A 时，驱动器检测到短路故障发生，经过 t1=80 ns的延时，驱动器开始保护动作，对应于图 16中驱动波形 Vgs开始下降，这段延时时间 t1对应图 4 中电容 CBLK充电的消隐时间，在这段时间内电流Id一直在增加，在t1延时时间结束后，电流 Id增加到 900 A。在 t2时间内，驱动芯片内部对故障进行逻辑处理，使得驱动电压Vgs经过软关断缓慢下降，减小电流瞬间关断引起的电压尖峰。在 t2时间结束时，短路电流 Id达到最大值1 240 A，之后在t3时间段内短路电流开始下降，并最终降为 0，驱动电压 Vgs降为驱动负压，驱动输出被封锁。从检测到短路故障至最终Id降为0，封锁驱动输出，共用时1.640 μs，驱动器实现快速短路保护。

**4 结论**

本文对 SiC MOSFET 高可靠性驱动电路进行了设计，对驱动回路的寄生电感进行了提取，并优化了驱动回路PCB布局，使得驱动波形振荡得到有效抑制，提高了驱动电路的抗扰能力。通过实验验证，得到结论如下：

1）所设计驱动器的短路保护功能，当短路保护电流阈值设定为 800A 时候，可以在 1.640 μs内实现快速短路保护。

2）通过采用高可靠性驱动芯片，增加共模滤波电感，优化驱动回路的走线布局，使得所设计的驱动电路具有较高抗干扰性和可靠性，适用于大功率SiC MOSFET模块的驱动场合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqb8Po3qdBDOEjHEmo3DibcFdSeQxPepq4CgmLpeSttlMicicb3ru8mu738A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)