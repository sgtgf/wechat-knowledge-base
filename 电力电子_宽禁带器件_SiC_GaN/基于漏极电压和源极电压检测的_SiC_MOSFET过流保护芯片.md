# 基于漏极电压和源极电压检测的 SiC MOSFET过流保护芯片

原创 李 强 ，杨 媛 SiC碳化硅MOS管及功率模块的应用 2026-06-18 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/eFvqDRlCB9T89Y9K5ExoUQ](https://mp.weixin.qq.com/s/eFvqDRlCB9T89Y9K5ExoUQ)

文章来源：电子学报

作者：李 强1，2，杨 媛1\*，文 阳1，赵天阳1，李亚兰1，茹 逍1（1.西安理工大学自动化与信息工程学院，陕西西安710048；2.包头师范学院物理科学与技术学院，内蒙古包头014030）  

摘要：为解决碳化硅金属氧化物半导体场效应晶体管（SiC Metal Oxide Semiconductor Field Effect Transistor，SiC MOSFET）硬开关故障（Hard Switch Fault，HSF）、负载故障（Fault Under Load，FUL）和过载故障（OverLoad fault，OL） 的问题，本文提出了一种基于SiC MOSFET漏极电压和源极电压检测的过流保护方法（Over Current Protection method based on the Drain\-voltage and Source\-voltage Detection，DSD\-OCP）.该方法通过检测电路实时监控SiC MOSFET的漏极电压和源极电压来准确识别短路故障和过载故障，并利用驱动电路控制SiC MOSFET的开通和关断，从而实现快速短路保护和自适应过载保护，同时还集成软关断功能.基于0.5µm双极型\-互补金属氧化物半导体\-双扩散金属氧化物半导体（Bipolar\-CMOS\-DMOS，BCD）工艺，设计了DSD\-OCP电路并进行流片，芯片面积为 2.8mm².采用研制的芯片搭建1200V/80mΩ SiC MOSFET测试平台，并验证了DSD\-OCP方法的有效性 .实验结果表明，SiC MOSFET在DSD\-OCP芯片保护下的HSF和FUL持续时间分别为88ns和105ns.在不同母线电压下，DSD\-OCP芯片能够为SiC MOSFET提供自适应的过载保护.因DSD\-OCP芯片具有软关断功能，SiC MOSFET在过流保护时的漏极电压过冲不超过110V.  

关键词：SiCMOSFET；漏极电压和源极电压检测；快速短路保护；自适应过载保护；软关断功能

1.引言  

碳化硅（SiC）MOSFET具有开关速度快、击穿电压高、导热性能好等优点，广泛应用于电力电子领域.然而，高电场强度和高功率密度使其短路耐受时间显著低于硅绝缘栅双极晶体管（Si Insulated Gate Bipolar Transistor，Si IGBT）.同时，若器件在连续过载条件下工 作，则容易引起SiC MOSFET阈值电压偏移、导通电阻改变、栅极漏电增加等性能退化问题，严重时会导致SiC MOSFET因过热而失效.因此，当 SiC MOSFET发生短路和过载故障时，栅极驱动电路应能够对其进行快速可靠的保护.  

短路故障是功率器件失效的重要因素，通常短路故障包括硬开关故障（HSF）和负载故障（FUL），对器件进行短路保护是驱动电路的重要功能.退饱和检测是IGBT等功率器件短路保护中常用的检测方法，通过改进电路设计，退饱和检测方法也可用于SiC MOSFET的短路保护，关键问题是解决SiC MOSFET的退饱和保护的同时，处理好抗噪声性能和响应速度之间权衡关系 .基于印制电路板（Printed Circuit Board，PCB）线圈的电流检测方法能够识别SiC MOSFET的过流故障，并为 SiC MOSFET提供快速短路保护，该方法的难点是设计较为复杂的PCB线圈硬件结构，消除有源积分电路引入的检测误差 .栅极电压检测技术通过检测SiC MOSFET栅极电压的密勒平台，实现SiC MOSFET的HSF故障识别，但是难以实现FUL故障识别.  

为了实现 HSF和 FUL双重检测，一种基于准飞栅概念的双端口栅极驱动电路被用于 SiC MOSFET的短路保护，然而，FUL检测所需的盲区时间会降低短路保护的响应速度.另一方面，双端口栅极驱动电路使用高栅极电阻检测 SiC MOSFET的 FUL故障会使栅极电压升高，增加了栅极过压损坏的风险.文献［12］提出了一种基于源极和栅极电压检测的 SiC MOSFET过流保护方法，但栅极电压和漏极电压的振荡容易引起短路保护的误触发 .文献［13］提出一种用于 SiC MOSFET HSF和 FUL保护的间接功率耗散二维检测方法 .但该方法中，由于正常关断和软关断使用了相同的栅极电阻，在确保电气应力安全的情况下会增加器件的关断损耗.  

过载故障（OL）也是导致功率器件失效的重要因素之一.为了实现SiC MOSFET过载故障和短路故障的双重保护，一种基于源极电压检测的栅极驱动电路被用于SiC MOSFET模块的过流保护，其问题是负的检测 电压需要双电源供电，增加了供电电源的数量和成本.文献［15］提出了一种基于隧道磁阻（Tunnel Magneto Resistance，TMR）检测的 SiC MOSFET模块过载和短路保护方法，如何设置隧道磁阻的位置和检测阈值，避免引 入检测误差是该方法的重要问题 .另一方面，SiC MOSFET在连续过载故障下，其性能退化程度会随SiC MOSFET漏极电压的升高而加剧.传统的方法往往基于SiC MOSFET电流检测来实现过载保护，这些方法未考虑 SiC MOSFET漏极电压变化对过载故障的影 响 .因此，保护电路应同时检测 SiC MOSFET漏极电流和漏极电压变化，以提供全面可靠的过流保护.  

鉴于此，本文提出了一种基于 SiC MOSFET漏极电压和源极电压检测的过流保护方法（DSD\-OCP），实现SiC MOSFET的快速短路保护和自适应过载保护.  

2.DSD\-OCP的基本原理  

2.1传统的过流保护电路  

传统的 SiC MOSFET过流保护电路原理如图1所示，该电路由短路故障检测电路和过载故障检测电路构成.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPe1EsmoIyibJ0vtJ1hJIOcAluNn3NVGCaBT3uzEgC8SicLoMC037iaJiaIsgcta3EEFiaExeo8wBzauw2v4LNfic6OqgGNvcN34HKEg/640?wx_fmt=png&from=appmsg)

在短路故障检测电路中，由电容CS和电阻RS构成的低通滤波电路通过检测 SiC MOSFET的源极电压 VS， 产生输出电压V1.比较器CP1将电压V1与短路保护阈值电压VSC（th）进行比较.当SiCMOSFET发生短路故障时， 电压V1低于电压VSC（th），则比较器的输出电压VSC由低电平变为高电平，从而触发 SiC MOSFET的短路保护 .在过载故障检测电路中，由电容CO、电阻RO和电感LO构成的带通滤波电路通过检测 SiC MOSFET的源极电压 VS， 产生输出电压V2.比较器CP2将电压V2与过载阈值电压VOL（th）进行比较.当SiC MOSFET发生过载故障时，电压V2低于电压VOL（th），比较器的输出电压VO1由低电平变为高电平，则二极管 D1导通，并通过电阻 R1对电容 C1充 电.其中，电阻R2用于对电容C1进行放电.一旦电容C1两端的电压VO2高于过载保护阈值电压VOL（th1），则比较器 CP3的输出电压VOL由低电平变为高电平，由此触发SiC MOSFET的过载保护 .只要电压VOL或VSC为高电平，则或门的输出电压 VFUT由低电平变为高电平，并利用栅极驱动器关断SiC MOSFET.输入电压VIN控制 SiC MOSFET的开通和关断，栅极电阻Rg\_on和Rg\_off分别用于 设置 SiC MOSFET的开通和关断速度 .VGS、VDS、IDS分别 为SiC MOSFET的栅\-源电压、漏\-源电压和漏极电流.LS为SiC MOSFET的Kelvin源极与源极之间的寄生电感.  

由以上分析可知，传统的 SiC MOSFET过流保护主要存在如下不足 ：

（1）过载保护方法未考虑 SiC MOSFET漏极电压对过载故障的影响，降低了过载保护的可靠性；

（2）栅极驱动器未集成软关断功能，过流保护时产生了明显的漏极电压过冲和电气应力；

（3）检测电路采用双电源供电，导致更高的供电系统复杂度和应用成本.  

2.2提出的DSD\-OCP过流保护电路  

为了解决传统SiC MOSFET过流保护存在的问题， 本文提出了基于SiC MOSFET漏极电压和源极电压检测的过流保护方法（DSD\-OCP），其电路原理如图 2所示 .该过流保护电路由检测电路和驱动电路两部分构成.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMjXy32oCAiaUKrRB8hk6EsDCw0X0Zu4OBUOyE0pu5qZX7XGNk0f886ahTDBgGvCmZDYwibrWWQ8hE1lWvWY4qqlJTRWcSMnibuDc/640?wx_fmt=png&from=appmsg)

检测电路包括短路故障检测电路和过载故障检测电路.在短路故障检测电路中，电流转换单元通过片外电阻RS和RSA分别连接到 SiC MOSFET的源极和 Kelvin源极（接地点位），其输出电压VC (kC IDS)与 SiC MOSFET漏极电流成正比，比例系数为 kC.比较器 CP1将电压 VC与短路保护阈值电压VSC（th）进行比较.当电压VC高于电压 VSC（th）时，比较器的输出电压 VSC由低电平变为高电平，从而实现 SiC MOSFET的短路故障检测 .在过载故障检测电路中，电压转换单元通过片外电阻RD和RDP分别连接到 SiC MOSFET的漏极电压 VDS和基准电压 VCC， 其输出电压 kVVDS 与电压 VDS 成正比，比例系数为 kV.为了兼顾漏极电压 VDS对过载故障的影响，设计了热量转换单元 .该单元电路将电压 kC IDS 与电压 kVVDS 进行相乘和积分运算后，输出电压 VE.因此，电压 VE由 SiC MOSFET的漏\-源电压和漏极电流的共同决定，并间接地反映了SiC MOSFET开通过程中的热量积累.比较器CP2将电压 VE与过载保护阈值电压 VOL（th）进行比较 .当电压 VE高于电压 VOL（th）时，比较器的输出电压 VOL由低电平变为高电平，从而实现SiC MOSFET的过载故障检测.只要电压VSC或VOL为高电平，则检测电路的输出电压VFUT也变为高电平.  

在驱动电路中，输入电压 VIN通过电平移位电路控制功率管MP和 MN的开通和关断 .当 SiC MOSFET发生过流故障时，电压 VFUT变为高电平，功率管 MP和 MN关 断，功率管 MS导通，并利用片外电阻 Rg\_s缓慢地关断SiC MOSFET.当栅\-源电压VGS低于4V时，功率管MC导通，并将SiC MOSFET的栅极电压钳位至地电位，同时驱动电路处于锁定状态 .电压 VEN为使能信号，当电压VEN由低电平变为高电平时，驱动电路被激活，并实时响应电压VIN和电压VFUT的变化来控制SiC MOSFET.栅极电阻Rg\_on和Rg\_off分别用于设置SiC MOSFET的开通和关断速度.  

3.DSD\-OCP的电路实现  

3.1检测电路  

DSD\-OCP的检测电路由短路故障检测电路和过载故障检测电路组成，电路原理如图3所示.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO7x1bJncPXWb6MVSf4eiazbpR2plTpDjGExyp7QGibxqEQBvABpjpMgFMwzQ115a9AJRI82gTEvKFat24P8kQ4RvI3ohQ3jJEyY/640?wx_fmt=png&from=appmsg)

3.1.1短路故障检测电路  

在短路故障检测电路中，电流转换单元通过片外电阻RS和RSA分别连接到SiC MOSFET的源极电压VS和地电位.N沟道金属\-氧化物\-半导体（NMOS）晶体管MN1和 MN2的栅极由固定电压 V1偏置 .由于晶体管 MN1和MN2的宽长比（W/L）较大，晶体管MN1和MN2的栅\-源电压VGS近似等于其阈值电压 Vthn.因此，电阻 RS的电流 IS和 电阻RSA的电流ISA分别表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAaZdXhLYjQFKiaSZGB1A6qXwvSNsGonibPv5mqfrUvZp4jKicgKCpneJcUE91FibtunRoO5HFuXMHe3Z3dBSZQFXKNPWjcWUF7qQ/640?wx_fmt=png&from=appmsg)

电流 IS流过 P沟道金属\-氧化物\-半导体（PMOS）晶体管 MP1和电阻 R1，形成 PMOS晶体管 MP5的栅\-源电压VGS\_P5.同理，电流 ISA流过 PMOS晶体管 MP2和电阻 R1A，得到 PMOS晶体管 MP3的栅\-源电压 VGS\_P3.由于晶体管MP2和MP3具有较大的宽长比，晶体管 MP2和 MP3的栅\-源电压近似等于其阈值电压 Vthp.在 PMOS晶体管 MP4和MP6的作用下，晶体管MP3和MP5工作在线性区.因此，晶体管MP3的漏极电流 IP3和晶体管 MP5的漏极电流 IP5分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOcZzz3icCQcJLToMicHf9MbXokXZXvWGtgnXMdtib1ibQlpS9IFoWibW5DqnXl93sQSMhlibegPTXtJskMVABnehgFSQnn6fWvJDqtE/640?wx_fmt=png&from=appmsg)

其中，VDS\_P3和 VDS\_P5分别为晶体管 MP3和 MP5的漏\-源电压，且近似相等 .在电流转换电路中，电流 IP5用于对电容 CC充电，而电流 IP3通过 NMOS晶体管 MN3和 MN4构成的电流镜对电容 CC放电 .由于电流转换电路采用对称设计，则关系式R1\=R1A，（W/L）P3\=（W/L）P5和VDS\_P3\=VDS\_P5成立 .考虑到集成电路工艺偏差和器件失配，电阻 RSA应略低于电阻RS.因此，电容CC的充电电流IC可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP9ayDgyc3NZqSjxrsWyuzfOcibichqQ3qsDcGhibzWDCzTVYc4oOMfoW7u2KFpUorw96JAtME0jzs8DQHEkvBOibY5L1oCVjXvMno/640?wx_fmt=png&from=appmsg)

SiCMOSFET的源极电压VS表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPBDlNZ9JXeT30SEtujuz2U4pibsUdU4jnUIHvltPGwboIxPDIgBb5rt2uWTJdouXxMYR92O2IeugVPMu5Idc1rGuj1lsNibqcHE/640?wx_fmt=png&from=appmsg)

将式（6）代入式（5），电容CC两端的电压VC表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNp3exmH21qS3QAzxQgcKgF5MNCrZstGp07NpZ28ZXnPA9gNPjbeO2dlUiaCZtxia6mYu5uFH3KLF0X9JPS4WP1q3K3Mod85ic4m4/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPWB1oyolypM6ISRiaspYiacslXUB8XndIGyvQyGiaDjU9xOpibhjzdf75qMspHEelMKea1LQ1OjnCJUDf4iamLSNUZwZDmUPLSlnds/640?wx_fmt=png&from=appmsg)

由式（7）可知，电压 VC与 SiC MOSFET开通过程中的漏极电流 IDS成正比 .比较器 CP1将电压 VC与短路保护阈值 VSC（th）进行比较 .当电压 VC高于电压 VSC（th）时，比 较器的输出电压 VSC由低电平变为高电平，从而实现SiC MOSFET的短路故障检测 .电压 VIN为低电平时，NMOS晶体管 MN5导通，并对电压 VC进行复位，确保DSD\-OCP在 SiC MOSFET开通过程中准确检测短路故障.  

3.1.2过载故障检测电路  

在过载故障检测电路中，NMOS晶体管MN11和电阻R2构成的电压转换单元通过片外电阻RD检测 SiC MOSFET的漏极电压VDS，并形成NMOS晶体管 MN8的栅\-源电压VGS\_N8.由于晶体管MN11的宽长比（W/L）较大， 其栅\-源电压VGS\_N11近似等于其阈值电压Vthn.因电压VDS远大于电压Vthn，则电压VGS\_N8可近似表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNCVH6zKN7P34SLhKleHhQXzj0jHXQAm0LPhlkAicH0hjhGHnXPHSq1x8p8zoHJpsnZfBQEnoSW0LbuxBSbXF7k82ZMnlKfYk64/640?wx_fmt=png&from=appmsg)

NMOS晶体管 MN6和 MN7具有相同的器件尺寸，因此 NMOS晶体管 MN8的漏\-源电压VDS\_N8近似等于电压VC.在 SiC MOSFET开通过程中，较低的电压 VC使晶体管 MN8工作在线性区 .利用 PMOS晶体管MP7和 MP8构成的电流镜结构，则晶体管MP7的漏极电流IP7表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOVLRXApU7iaibiaQNd4iaicbyZqgOXUJicCeumqgURMHRPBtuohPbB86mMvaMwvLLheP9DO8IETduXMgSiampkZZq5Ebn3l26GfCO3Fw/640?wx_fmt=png&from=appmsg)

将式（7）和式（8）代入式（9），电流IP7表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOicnoXwYg2C7sMCY5O6ITibqyTnSBbdgst6Nu7kPQG7owYzys24aehpT3VtSQDeH1XicaJufr34FY1oqo7KWwqkiciaF7iaqBBBKoia4/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPu0XkFEwxd44Fs7WqIJibdibxb6Bo3ogGiaX65ficiczA5Jr27XyyvlXMoYlJxRNXKcc075JcA2EIm9ayAy43vU2wISpJlYv7swiaco/640?wx_fmt=png&from=appmsg)

由式（10）可知，电流IP7与SiC MOSFET的瞬时功率成正比，其比例系数为 kC kV.因此，晶体管 MN7和 MN8构 成了乘法电路，实现电压VDS和电流IDS相乘运算.  

在热量转换电路中，片外电阻 RDP和 NMOS晶体管MN9和 MN10构成电流基准电路，且晶体管 NM10的漏极电流IDP用于对电容CE放电.由于电阻RDP较大，则晶体管MN9和MN10的栅\-源电压近似等于其阈值电压Vthn.因此， 电流IDP表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPxk8E1u0BUJJrdIe6fgRXAfTKs6XeadLMth1JPxo6gDlSnFuVrOx5DdSSx9U6HKgHp8icap7JtNZMO2lq3qBJzTcjGB63scOo8/640?wx_fmt=png&from=appmsg)

由基尔霍夫电流定律可知，电流 IP7与电流 IDP之差形成了电流IE，用于对电容CE充电，则电容CE两端的电压VE表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMgeUQxwDUofocADiciba4KW2nVV7uMEpYlDeKvc5bfwo5ulIC4Fqdgqsl3yz5vcAw4V1qrMUZ6H4icucRSCxvvKqXg5o7CuCEu9Q/640?wx_fmt=png&from=appmsg)

其中，式（12）右侧的第一项和第二项分别表示由 SiC MOSFET的热量产生和热量耗散引入的电压分量 .因此，电压VE表示SiC MOSFET开通过程中热量积累的电压量 .当 SiC MOSFET的热量产生大于热量消耗时，电压VE将逐渐增大 .比较器 CP2将电压 VE与过载保护阈值电压VOL（th）进行比较.当电压VE大于电压VOL（th）时，比较器 CP2的输出电压 VOL由低电平变为高电平，从而实 现SiC MOSFET的过载故障检测.  

3.2驱动电路  

DSD\-OCP的驱动电路由电平移位电路、死区控制电路、密勒钳位电路和软关断电路构成，电路原理如图 4所示 .电平移位电路将控制信号从低电压域（VCC） 传输到高电压域（VDD）.死区控制电路由驱动能力逐级增强的反相器链构成，两路反相器链首尾相连，分别用于驱动功率管MP和MN，并为功率管产生非交叠导通所需的死区时间，从而降低功率管的直通损耗 .当电压VFUT和VEN分别为低电平和高电平时，功率管MP和MN在电压 VIN的控制下驱动 SiC MOSFET的栅极 .密勒钳位电路利用分压电阻R3和R4检测SiC MOSFET的栅\-源电压，得到与栅\-源电压成正比的电压VGSA，比较器将电压VGSA与基准电压VMC进行比较，当SiC MOSFET关断过程中的电压 VGSA低于基准电压 VMC时，功率管 MC导通，则SiC MOSFET的栅极被钳位至地电位 .在 SiC MOSFET发生过流故障时，负载电流远大于SiC MOSFET的额定电流，导致关断过程中的电压VDS会产生非常大的过冲，有可能损坏SiC功率器件 .为了保护SiC MOSFET， 软关断电路通过驱动强度逐级增强的反相器链控制功率管MS，当SiC MOSFET发生过流故障时，电压 VFUT由 低电平变为高电平，功率管 MP和 MN关断，功率管 MS导 通，DSD\-OCP芯片通过电阻RS对SiC MOSFET的栅极电容放电，用于降低 SiC MOSFET的关断速度，从而降低电压VDS的过冲.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMctLYnlcNSTUNgXgWtJEkExc2CsapicjzsEHcmqXOSCibrUd3ZXXlUqBMictchSY2NIyD0oPuiaREOicicFia2gibnZsOibqplpTT5d3zs/640?wx_fmt=png&from=appmsg)

SiC MOSFET过流保护时的软关断原理如图 5所 示 .图 5（a）为 SiC MOSFET软关断的原理图，DFW、LLD、LLP分别为续流二极管、负载电感、功率回路寄生电感 （不包含寄生电感LS），IFW、ILD、Vbus分别为续流二极管电 流、负载电流、直流母线电压.图5（b）为SiC MOSFET软关断的等效电路，Cgs、Cgd、Cds、gm分别为 SiC MOSFET的栅\-源电容、栅\-漏电容、漏\-源电容以及跨导，而大的负载电感LLD可等效为电流源ILD，功率回路电感L'LP包含了寄生电感LS.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMuA0WlibpoX2KFU2hxGhKU8C8GAIjgUjL8Qico18YN1sibPpQ5tqDGrT6gKibcqBWZ7uvHVmyFkUao1libzxw4FPXW2iagypdcDgDfM/640?wx_fmt=png&from=appmsg)

在 SiC MOSFET关断过程中，其漏极电流 IDS减小， 续流二极管电流IFW增大，则电感LLP两端产生的电压为vLP.利用基尔霍夫电流电压定律，可得到关系式（13）~式（15）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtP4nOUicCucbfb8BcszNmRPib43fvQx9CMUBiaaCTDqQGX8oFez1Jz79YksibmdnFeEpS8HZ85TuJjrCAaWqzcFicdiadkcHZALwkw/640?wx_fmt=png&from=appmsg)

当电压 vLP 达到电压峰值 Vos时，电压 VDS的变化率为零，即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO1NBS6GV1On3pHibXMMhSJMwe8GrDSmIuzicichcoiaMnROzZy3NO0YwQKpibIHvgCS4m2jcicRA13okODFiaUraInFAfaW9Gegf0JXQ/640?wx_fmt=png&from=appmsg)

将式（13）~式（14）和式（16）代入式（15），电压Vos可表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPoS424ibDBcMl57NC9ia9ppE3PM6XO5RgVVLQibS7NO9fEWmeKnN21ficEf5TUs2s8usDvNI43XEhoWBnSkBNDxtJWsFj5U4hZUkQ/640?wx_fmt=png&from=appmsg)

其中，Ciss \=Cgs +Cgd；Vth为SiC MOSFET的阈值电压.  

由式（17）可知，SiC MOSFET关断过程中的漏极电压过冲Vos随着栅极电阻Rg\_s的增加而减小.因此，DSDOCP芯片利用软关断电路能够降低 SiC MOSFET过流保护时的电压过冲Vos.  

3.3电路仿真  

利用集成电路仿真程序（Simulation Program with Integrated Circuit Emphasis，SPICE）模型仿真了 DSD\-OCP电路，仿真结果如图6所示.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPjSTbUeQaicLeCEdjVNrFLNyVDQjZR0ciauoMn4LWBWJWYMvjTN0ClM5dnbOJZxN4Peen8cYibg0yMx4sSrQibibA8kkNpKIiaMck80/640?wx_fmt=png&from=appmsg)

SiC MOSFET的SPICE模型由罗姆半导体提供的 SCT3080（1200V/80mΩ），封装形式为TO\-247\-4L.通过实验测得电压 VS和电流 dIDS/dt的值，将其代入式（6）可计算出 SiC MOSFET的寄生电感 LS为 6.5nH，该电感用于校准 SiC MOSFET的SPICE模型 .电阻RS、RSA、RD和 RDP分别设置为10kΩ、10kΩ、6MΩ和500kΩ.  

图6（a）为DSD\-OCP短路故障检测的仿真结果.从仿真结果可以看出，SiC MOSFET开通过程中的电压 VC与漏极电流IDS成正比.当电压VC高于短路保护阈值电压VSC（th）时，DSD\-OCP经过延时td后利用软关断电路关 断SiC MOSFET，从而实现 SiC MOSFET的快速短路保护 .其中，tsc为 SiC MOSFET在 DSD\-OCP保护下的短路持续时间.图6（b）为DSD\-OCP过载故障检测的仿真结果 .在该仿真实验中，负载电感 LLD分别设置为 400µH和 600µH，对应 的直流母线电压分别为400V和600V.当SiC MOSFET工作在连续开关模式时，电流IDS的变化速率相同 .在相同电流 IDS情况下，验证了 SiC MOSFET漏极电压对DSD\-OCP过载故障检测的影响 .由图 6（b）的仿真结果可知，SiC MOSFET的热量积累Q和电压 VE随直流母线电压 Vbus的升高而增大 .当电压VE高于过载保护阈值 VOL（th）时，DSD\-OCP触发过载保护 .因此，DSD\-OCP能够根据 SiC MOSFET热量积累实现自适应的过载保护.  

DSD\-OCP芯片的过流保护延时仿真结果如图 7所示.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNVeKPnzbTDns1oIeM2ZcZgCGCjYZnrDFl8iaIHMaGhZzLZQUtKIkgqhXUeQUwL8HfibAk1icFrTH66hciaClRic1DN2eg2O4S23ojs/640?wx_fmt=png&from=appmsg)

图7（a）为过流保护延时td的温度特性仿真结果，仿真温度范围为\-25℃至 100℃，由仿真结果可知：室温下的延时 td约为 25ns，延时 td随温度升高而增大，其温度系数约0.048ns/℃，其主要原因是MOSFET的输出电流能力随温度的升高而降低，从而导致传输延时随温度升高而增大 .图 7（b）为过流保护延时td的蒙特卡洛仿真结果，仿真采用低差异序列（Low\-Discrepancy Sequence）采样方法，采样点的数量为500个，由仿真结果可知，过流保护延时td的平均值为 24.9ns，标准偏差为0.34ns，该结果表明 DSD\-OCP芯片的延时 td具有较高的一致性.

3.4芯片实物  

基于 0.5µm BCD工艺完成了 DSD\-OCP芯片的电路设计和流片 .图 8（a）为 DSD\-OCP芯片的显微图，芯片面积约为 2.8mm².在该芯片中，基准电路用于产生芯片内部的偏置电压和电流，并为电压VDD提供欠压锁定功能 .驱动电路根据输入信号的变化控制功率管MP、MN、MC和MS的开通和关断 .检测电路通过检测 SiC MOSFET的漏极电压和源极电压来识别短路和过载故障，并将故障信号传送给驱动电路 .图 8（b）为 DSD-OCP芯片封装后的实物照片，封装采用20引脚的窄间距小外型塑封（Shrink Small\-Outline Package，SSOP）.芯片供电电压 VDD的范围为12V至 22V，电压 VCC为5V.功率管 MP、MN、MC和 MS的最大输出电流分别约为 3A、5A、1.5A和1A.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPaaATIWFlrtP7EzfOSnHWddu3va2k1HLYibFzME91eicnO9PNvYVDgJVgb1XMHWOEG7Bk4icG9u0Aw36QVToLfQOTST0VqZm3GYI/640?wx_fmt=png&from=appmsg)

4.实验验证

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPwic5ZQbZV6yFvygwD5PnPka6SYTcBI43ialR5xykEQZrNIpnnmVdk0XSEic8FSWHlnLaX8qkUU7qwqK9pzpAgXazickHCRCbEk88/640?wx_fmt=png&from=appmsg)

通过实验验证了DSD\-OCP芯片的有效性，测试原理如图9所示 .图 9（a）为DSD\-OCP芯片的测试原理 .其中，DSD\-OCP芯片驱动低侧SiC MOSFET（待测器件Device Under Test，DUT），而商用的栅极驱动芯片（英飞凌的1ED3123）驱动高侧SiC MOSFET（MH）.LLD和Vbus分别表示负载电感和直流母线电压.高压直流电容Cdc为SiC MOSFET和电感LLD提供足够的电流能力，解耦电容Cdec用于滤除直流母线上的高频噪声.图9（b）为测试电路的控制时序 .在HSF测试中，先使高侧功率器件 MH处于导通状态，然后开通待测器件 DUT，则待测器件DUT会在短时间内发生硬开关故障.在FUL测试中，先使待测器件 DUT处于开通状态，然后开通功率器件MH，则待测器件 DUT在短时间内就会产生负载故障 .在 OL测试中，待测器件 DUT工作在连续开关模式，处 于常关状态的功率器件 MH被用作续流二极管，则电流IL逐渐增加，直至触发过载故障.  

基于 DSD\-OCP芯片的测试原理，搭建了测试平台如图10所示.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOUKPDib9dhKqd8WrVzib2INCoSoR1dl9vWrazmVaPPOCqibR3sKmiaHSlO2EibSNBeETu31ZdhJ9um2wLKnumMRqFXs75MShVptdHY/640?wx_fmt=png&from=appmsg)

DSD\-OCP芯片的测试板如图10（a）所示.其中，高压直流电容Cdc由4个30µF/1.1kV薄膜电容组成；解耦电容Cdec由4个0.1µF/1.1kV薄膜电容组成 （其中两个在测试板的底部）.低侧驱动使用了DSD\-OCP芯片，而高侧驱动采用英飞凌的商用驱动芯片 .高侧和低侧SiC MOSFET为罗姆半导体的SCT3080KR（1200V/80mΩ）产品.电阻Rg\_on、Rg\_off和Rg\_s分别为5Ω、5Ω和 10Ω.电阻 RS、RSA、RD和 RDP分别为 8kΩ、8kΩ、4MΩ和 500kΩ.图10（b）为DSD\-OCP芯片的实验平台 .该平台由DSD\-OCP测试板、控制信号产生电路、低压直流电源、高压直流电源Vbus、负载电感LLD、示波器以及测试探头（无源探头、差分探头和罗氏线圈）等组成.其中，电感LLD作为DSD\-OCP测试板的负载 .脉冲产生电路采用FPGA控制，用于向低侧和高测栅极驱动电路发送控制指令 .无源探头（TPP0500B）、两个差分探头 （THDP0200）和罗氏线圈（CWT）分别用于测量电压VGSL、VGSH、VDS和电流IDS.  

实验平台中的设备技术参数如表 1所示 .示波器和测试探头具有高的带宽和分辨率，能够准确测量SiC MOSFET的开关特性 .信号产生电路的时钟频率高达475MHz，用于为栅极驱动产生精确的控制时序信号.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPz4qz7fDmTejVsib36aMOcXhCiaoz2DH8U23PJlJwXCtvk5BfxX1mudmgN300xq4OheWfcITWStv05b1A8VQd8shodIK59eTl5U/640?wx_fmt=png&from=appmsg)

4.1短路保护测试

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOGJE2xsNtoWSfBqQagdO8f1JICTxp9uyCHAUlhq3vwTs4DUd3Sc3QDcmaOzvkbBKzxxjxHmQ8fT0eg17uQvRiaNcT9N67XuY7w/640?wx_fmt=png&from=appmsg)

利用搭建的实验平台验证了DSD\-OCP芯片的HSF保护功能，测试结果如图11所示.其中，DSD\-OCP芯片 实施短路保护的延迟时间td约为 25ns；母线电压 Vbus为 600V，短路保护阈值电压 VSC（th）分别设置为 0.5V、0.6V、0.7V、0.8V和 0.9V.由实验结果可知，DSD\-OCP芯片能够准确地检测SiC MOSFET的 HSF故障并提供快速的短路保护，且触发 HSF保护时的电流 IDS随着电 压 VSC（th）的增加而增大 .在 DSD\-OCP芯片的保护下，SiC MOSFET的HSF持续时间tsc约为88ns.由于DSD-OCP芯片集成了软关断功能，SiC MOSFET在 HSF保护时的漏极电压过冲Vos约为110V.  

在不同的短路保护阈值情况下，验证了DSD\-OCP为0.5V、0.6V、0.7V、0.8V和 0.9V.由实验结果可知，DSD\-OCP芯片能够准确地检测SiC MOSFET的 FUL故障并提供快速的短路保护，且触发FUL保护时的电流IDS随着电压VSC（th）的增加而增大 .在DSD\-OCP芯片的保护下，SiC MOSFET的FUL持续时间tsc约为105ns，该时间大于HSF的短路持续时间tSC，这是因为FUL保护过程中的电压VDS通过密勒电容Cgd降低了待测器件DUT的关断速度 .在FUL保护时，DSD\-OCP芯片利用软关断电路关断SiC MOSFET，其漏极电压过冲Vos约为110V.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOfTneYYEUn4bFfIiaBMEqw3VdwILeibB2cPedtzJZZic4nvZZVq4AFDQ0HpFiccIsRWvUJ4yaDtt5ADxEM6oTsLUHTiaocRoOiaicF2g/640?wx_fmt=png&from=appmsg)

在不同的测试温度下，验证了DSD\-OCP芯片的短路保护功能，测试结果如图13所示 .其中，母线电压Vbus为800V，测试温度范围为\-25~100℃.由实验结果可知，DSD\-OCP芯片在不同的温度下能够实现SiC MOSFET的快速短路保护，其短路电流 IDS的峰值和短路时间tSC随着温度的升高而增大，这是因为随温度的升高，电阻 RS增加，由式（7）可知，比例系数kC减小，而电压VC的短路保护阈值VSC（th）不变，则触发短路保护的电流IDS增加 .同时，由于DSD\-OCP芯片的过流保护延时td随温度的升高而增大，从而导致短路电流IDS的峰值和短路时间tSC随着温度的升高而增大.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOzRkaTgfr3eOA7H768tDlMtkwkLduTpIyAvs7dCPYOBSC89LcAA91I5jsiblwx4nK1HNsatcJoTZFYdPgKA7agFjJH3rk7SVyI/640?wx_fmt=png&from=appmsg)

4.2过载保护测试

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMdSLQ6AoygiblSB2ibhbINwWHgNfCWVk2ToFW8aXzGgWWvTbBAQTvzehEudFicibAtibSVUqVzNT2vyWJiahN5Sw2KldfA8RLJgvCkw/640?wx_fmt=png&from=appmsg)

利用搭建的实验平台验证了DSD\-OCP芯片的过载保护功能，测试结果如图14所示.  

在该实验中，待测器件DUT的开关频率为250kHz， 而功率器件MH保持常关状态 .在负载电感LLD分别取值为300µH、360µH和 420µH时，对应的直流母线电压Vbus分别设置为400V、495V和 595V.因此，电流IDS在三种不同电感LLD下的变化速率保持一致.从实验结果可以看出，触发过载保护时的电流IDS随着电压Vbus的增加而减小 .由此可知，DSD\-OCP芯片通过实时监控SiC MOSFET的热量积累，且基于电压Vbus的变化为SiC MOSFET提供自适应的过载保护.其中，过载保护阈值VOL（th）由芯片内部的2V基准电路产生.  

利用搭建的实验平台测试了DSD\-OCP芯片在不同电阻RDP下的过载保护，测试结果如图15所示.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP1BpM1MoEEOKHtyh3oc4o9xwBeh5KMY1vIM3FicGeLcpj5vttPH528xylibjmKsdmlNndcGeKzibMzP8Q6pEMibeuibsAgibGBo6TQ4/640?wx_fmt=png&from=appmsg)

在该实验中，电阻RDP分别选用0.5MΩ、1MΩ、1.5MΩ和2MΩ.由实验结果可知，触发过载保护时的电流IDS随着电阻RDP的增加而减小，其主要原因是电阻RDP利用MN9和MN10构成的电流镜控制电流IDP，随着电阻RDP的增大，电流IDP减小，由式（12）可知，在电压 VE的过载保护阈值VOL（th）不变的情况下，则触发DSD\-OCP过载保护所需的电流IDS减小 .因此，触发过载保护的电流IDS随着电阻RDP的增加而减小.基于电阻RDP的调控原理，在实际应用中，可以根据SiC MOSFET的散热情况改变电阻RDP，从而优化DSD\-OCP芯片的过载保护.  

在不同的测试温度下，验证了DSD\-OCP芯片的过载保护功能，测试结果如图16所示 .在该实验中，母线电压Vbus为800V，测试温度范围为\-25~100℃.由实验结果可知，DSD\-OCP芯片在不同的温度下能够为SiC MOSFET提供有效的过载保护，且触发过载保护的电流IDS随着温度的升高而增大，其主要原因是：随温度的升高，电阻 RS增加，而比例系数 kC 减小，由式（11）可 知，在电压VE的过载保护阈值VOL（th）不变的情况下，则触发过载保护时的电流IDS增加.另一方面，由于DSD\-OCP芯片的过流保护延时td随温度的升高而增大，也会导致过载保护的电流IDS随着温度的升高而增大.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO27qc4icmfjGXhbPyXUB4deu98NH4XpZa8huPOK3vZsVGV2lE87pE0iaruLAPlKHxYARgG4VXUYIKyS2hNqaI4rwgDuWC7ibG9vE/640?wx_fmt=png&from=appmsg)

4.3过流保护测试

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMzaYaObPcYYTNCibwQ5lianODPq3tQ8uYAdicIgyEadrGoVhBk4RtOQRNeKfFMSap16fxxvK9etDWnCECPTF0fBJshaAnticScSv8/640?wx_fmt=png&from=appmsg)

  
在 SiC MOSFET同时发生过载和短路故障的情况 下，验证了DSD\-OCP芯片的过流保护，测试结果如图17所示.  

在该实验中，待测器件DUT在500kHz的连续开关模式下工作，高侧SiC MOSFET处于关断状态，则电流IDS在开关过程的第 22个周期时触发 DSD\-OCP芯片的过载保护，则 DSD\-OCP芯片对待测器件 DUT进行软关断，电压过冲Vos约为110V.在此基础上，验证了DSD\-OCP芯片在SiC MOSFET同时发生过载和短路故障的过流保护，即待测器件DUT工作在500kHz的连续开关模式 下，高侧SiC MOSFET（MH）分别在待测器件DUT开通过程的第 19、20和 21个周期处导通，则待测器件 DUT和功率器件MH发生直通，从而使待测器件DUT处于过载故障和短路故障并存的状态.由实验结果可知，当待测器件 DUT同时发生过载故障和短路故障时，DSD\-OCP芯片能够利用过载和短路检测方法实现有效的过流保护，并利用软关断电路关断SiC MOSFET.  

4.4兼容性讨论  

SiC MOSFET作为第三代半导体相较于硅绝缘栅双极型晶体管（Si Insulated Gate Bipolar Transistor，Si IGBT）， 具有更低的导通电阻、更快的开关速度、更小的寄生电容等，同时其对驱动电路和保护机制的响应要求也更为敏感.首先，SiC MOSFET更快的di/dt特性，导致发生过流故障的时间非常短，而DSD\-OCP芯片的响应时间仅为25ns，短路保护时间约100ns，能够满足SiC MOSFET对快速保护的要求；其次，SiC MOSFET普遍提供独立的Kelvin源极引脚来降低栅极驱动回路的寄生电感，这也使得DSD\-OCP芯片可以广泛地应用于 SiC MOSFET的过流保护；最后，DSD\-OCP芯片的过流保护阈值可通过电阻RS和基准电压 VSC（th）进行调节，能够适用于不同电流和电压等级SiC MOSFET，具备良好的通用性.  

为了验证验证DSD\-OCP芯片的兼容性，以英飞凌1200V/90mΩ（IMZ120R090M1H）SiC MOSFET为例进行实验测试，其器件参数如表2所示.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOuPKJQzSblTWSvtGIa4Hib362VPFtRiajbNdy2anPANKiccobk50K330nP504gVeGBwXwSj0YXXf8PMiaqhicibmT2K9TVpafU0ZEPI/640?wx_fmt=png&from=appmsg)

利用搭建的实验平台上验证了DSD\-OCP芯片的短路和过载保护功能，测试结果如图18所示.测试条件：电阻Rg\_on、Rg\_off和 Rg\_s分别为5Ω、5Ω和10Ω，电阻RS、RSA、RD和RDP分别为10kΩ、10kΩ、4MΩ和 500kΩ，电 压VSC（th）为0.7V，母线电压 Vbus为800V.由图 18（a）可 知，HSF短路时间tSC为82ns，该值小于SCT3080的88ns，这是因为低的电容Ciss使SiC MOSFET具有更快的关断速度 .由图18（b）可知，FUL与HSF的短路时间tSC相近，这是由于IMZ120R090的电容Crss非常低，其关断过程的密勒效应较弱.同时，低的短路峰值电流降低了SiC MOSFET流保护时的电压过冲 Vos.由图 18（c）可 知，DSD\-OCP芯片在负载电流为40A时触发过载保 护 .因此，提出的DSD\-OCP保护方法能够较好地兼容第三代SiC MOSFET.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPMXsNcFwkwjGxricKwlzwIna21Mn3EibTwG1YTuicvkIwnfSrM0Cqod6Pr5ov1EfHo9NRIdLPwHWn0Nk0aFCKic3GRJd7T2hNf5iaQ/640?wx_fmt=png&from=appmsg)

4.5性能对比  

本文提出的DSD\-OCP方法与现有过流保护方法的对比结果如表3所示.基于退饱和检测的短路保护所需的盲区时间会导致较大的短路持续时间tsc.类似的，基于栅极检测中的积分电路和基于TMR检测中的隔离器也增加了短路持续时间tsc.尽管采用di/dt检测可以实现快速短路保护，但由于栅极驱动器未集成软关断电路，SiC MOSFET在短路保护时的漏极电压VDS产生了明显的电压过冲 .此外，退饱和检测方法和栅极检测方法难以实现SiC MOSFET的过载保护.虽然基于电流检测的保护方法能够为SiC MOSFET提供短路和过载双重保护，然而该保护方法并未考虑SiC MOSFET的漏极电压对过载故障的影响.与现有保护方法相比，本文提出的DSD\-OCP方法不仅可以为SiC MOSFET提供快速的HSF保护和FUL保护，还可以在SiC MOSFET开通过程中基于其漏极电压和源极电压检测实现自适应的过载保护 .此外DSD\-OCP保护方法采用专用芯片实现，其过流保护的响应时间仅为25ns，能够实现SiC MOSFET的快速过流保护，SiC MOSFET在HSF和FUL短路保护过程中产生的损耗E\_HSF和 E\_FUL分别仅为7mJ和 3.7mJ.由于 DSD\-OCP芯片集成了软关断功能，SiC MOSFET过流保护时的漏极电压过冲约为110V.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOpGLdN5SpbzhkNOPfriaQY5FrSGG8Nu5KpDTxdgguXSjcI4JQAibU7WIakj16Wm7PSUfe6F5ib6FBEABib8rZXvDDmgxCUcYYolu0/640?wx_fmt=png&from=appmsg)

5.结论  

针对SiC MOSFET的硬开关故障、负载故障和过载故障，本文提出了一种基于SiC MOSFET漏极电压和源极电压检测的过流保护方法（DSD\-OCP）.采用 0.5µm BCD工艺，设计了DSD\-OCP过流保护电路并进行流片，芯片面积约为 2.8mm².利用搭建的1200V/80mΩ SiC MOSFET测试平台，验证了DSD\-OCP过流保护方法的有效性 .测试结果表明，DSD\-OCP过流保护能够为SiC MOSFET提供快速的短路保护和自适应的过载保护 .采用DSD\-OCP过流保护芯片，SiC MOSFET的HSF和FUL持续时间分别为88ns和105ns.在不同的母线电压下，DSD\-OCP过流保护芯片能够实现SiC MOSFET的自适应过载保护.由于DSD\-OCP芯片集成了软关断功能，SiC MOSFET过流保护时的漏极电压过冲低于110V.

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPsg858tibXib82rJibcsXiaCicksobNZuDhkGNq5DVgMHN7kLRqt32vsTSHuLqQukbPDMg2ibjY3BV8X1eFftpBCcibkYjicW3kaqeHuU/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMpAmakQkbSgSnZlhMHhibibMnILtT4KtbADu1yib0NGrGYdhyibwvZAg6jxnrw86xbIlqyiaC7mF7ia6kd3Fg8lYElg7f41hPJxf3Hc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOyEUgKGS2ZLECAcWGQZWO6EcnDPWwVYEsVykHicsW0fxjVdPDFEnZovf25gmEIOy9ibUlCdVedXu7UGVjYtoMR95KrE637cGzHI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMb6k2nLBt1eemYOnsskiabmfnZgOWe7mgrJQwvvudjnrkxmeVEOjx4rAvGQibgeicsEdqV3seOzBbl0bYViaDsafuYWiaTibtahwuT4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)