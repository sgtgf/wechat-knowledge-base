# 1200V IGBT与SiC MOSFET驱动保护电路设计


> 原文地址: [https://mp.weixin.qq.com/s/tt40boZ267U0wXPhyD-Y8Q](https://mp.weixin.qq.com/s/tt40boZ267U0wXPhyD-Y8Q)

文章来源：西安交通大学-学位论文

**摘要：**IGBT和SiC MOSFET各有其应用场景和优势，‌选择使用哪种器件取决于具体的工作条件、‌功率需求、‌成本考虑等因素。‌

IGBT（‌绝缘栅双极型晶体管）‌因其芯片尺寸较大，‌内部栅极电阻较小（‌约1Ω）‌，‌可以使用较大的外部栅极电阻。‌IGBT在智能汽车的发展中虽然不是必需品，‌但作为一种潜在的技术选择，‌其应用还依赖于电池技术、‌传感器技术、‌控制算法、‌通信网络等其他方面的创新和突破。‌IGBT的应用范围广泛，‌不仅作为独立的元器件使用，‌还广泛应用于与其他基本部件组合在一起的模块形式中。‌  

SiC MOSFET（‌碳化硅金属-氧化物半导体场效应晶体管）‌在能效提升方面表现出色。‌在相同运行条件下，‌SiC MOSFET的开关损耗比硅基IGBT低五倍，‌导通损耗可减少一半，‌大幅节省空间，‌是新一代工业电机更高效驱动的选择。‌此外，‌SiC MOSFET和IGBT在应用中都需要考虑抗尖峰滤波、‌互锁功能、‌逻辑电路、‌温度检测等措施，‌以确保器件的可靠性和安全性。‌  

综上所述，‌IGBT和SiC MOSFET各有其优势和应用场景。‌IGBT适用于需要较大芯片尺寸和较低成本的应用，‌而SiC MOSFET则更适合追求高能效和空间优化的应用。‌选择哪种器件取决于具体的应用需求和技术要求。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlm7GiaRa7p8XJnKD7OJrW795j97alIny1MN50rrQH6KBMLSeDj18BFfQ/640?wx_fmt=jpeg&from=appmsg)

**前言：**随着电力电子技术的飞速发展以及应用要求的不断提升,功率器件得到了高速的发展。IGBT作为第三代电力电子器件因其良好的综合性能在新能源发电、轨道交通、智能电网、电动汽车、国防工业等领域有着举足轻重的地位。但随着电力电子技术的发展,对电力电子器件的温度、频率等性能提出了更高的要求,以碳化硅(SiC)等材料为代表的电力电子器件走进了人们的视野。近年来,随着商业化SiC器件不断推出,关于SiC器件的研究也成为了热点话题。IGBT与SiC MOSFET作为当下应用最广泛与研究最热门的两种电力电子器件,其门级驱动与保护技术的研究对于二者的应用均具有重要的意义。本文详细分析了 IGBT与SiCMOSFET的基本结构、工作原理、开关过程。首先,通过详细对比IGBT模块(FF300R12KT4)和SiC MOSFET模块(CAS300M12BM2)的参数特性,指出了 IGBT与SiCMOSFET在驱动保护电路设计上的区别。其次,根据二者的区别分别设计针对IGBT与SiCMOSFET的驱动保护电路。在上述研究的基础上,搭建了双脉冲测试平台,对IGBT和SiCMOSFET的驱动电路和保护电路进行测试,验证了本文所设计的驱动保护电路的可靠性与先进性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl2JLCZYnwEBzdUc0nRNg3IXfomjX1UdOyV6NmX92kcVnZVAibIVgaVzQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlsEhPQ8Fz1NXp5pBNwWU5EQvQvZfSdtjj4ekJHoIygKOOia4ZjhziaR8Q/640?wx_fmt=png&from=appmsg)

1.  **绪论**
    

**1.1课题背景与意义** 

电力电子技术经历了近几十年的飞速发展，无论在结构还是性能上均有很大 的提升。在功率半导体器件快速的发展历程中，经历了半控型器件即晶闸管 （SCR）；全控型器件即可关断晶闸管（GTO）、巨型晶体管（GTR）和功率 MOSFET；复合型电力电子器件即MOS控制晶闸管（MCT）、功率集成电路（PIC） 和绝缘栅双极晶体管（IGBT） ；新材料如氮化嫁（Ga N）和碳化硅（SiC）材 料的电力电子器件 。

 IGBT是近些年电力电子器件中最为重要的开关器件，它具有高耐压、低饱和压降、低驱动功率等特点，广泛应用于各种功率等级环境中。IGBT及其驱动 电路的稳定与否往往直接影响着电力电子系统的稳定与可靠 。目前IGBT广泛 应用于电动汽车、小功率家用电器、变频器控制、开关电源、光伏发电、风力发 电、电力机车牵引等领域，是当今最主流、使用最广泛、技术最成熟的电力电子器件。 

但随着技术的不断进步以及应用领域需求的不断提高，由于硅材料本身的物理特性，使硅基电力电子器件逐渐不再适用于某些场合。这种不适主要表现在两个方面，一是硅基器件的开关损耗无法继续降低，这是导通电阻较高的原因。另一方面，硅基器件无法适应当前高温、高频、高功率密度的场合。因此，以碳化硅（SiC）、氮化镓（Ga N）等为代表的新型半导体电力电子器件逐步走进了人们 的视野 。SiC器件在高压大功率环境下优势明显，它的禁带宽度、击穿场强和 热导率均高于Si器件。SiC MOSFET是近些年电力电子器件领域最热门的研究对象之一，它具有高温、高频、低损耗、高阻断电压等特性 。SiC MOSFET应用在电力系统等领域的电力电子设备中，可显著提高其性能水平 。  

通常电力电子器件在高电压、大电流的使用环境中工作，会因多种因素引起 器件故障，进而引起器件的失效，甚至会损坏整个电力电子系统，造成不可挽回的经济损失。如何保证器件安全、稳定、高效的工作，如何提高器件的可靠性， 发挥功率器件的最大效能成为了一个新的命题，所以设计一款性能优良的驱动保 护电路显得尤为重要。IGBT是当今应用最广泛、最成熟的电力电子器件，SiC  MOSFET是最具发展潜力、性能更加优异、研究最热的电力电子器件，所以针对 二者的驱动保护电路的研究具有重大的意义。  

**1.2国内外研究现状**  

**1.2.1 IGBT驱动技术研究现状** 

IGBT驱动保护电路的设计和研究一直备受国内外公司的瞩目。但是由于国内电力电子器件技术的发展相对滞后，导致IGBT驱动保护电路的发展起步较晚， 技术累计薄弱。国外的三菱、CONCEPT、ALSTOM、塞米控、IR等公司发展历史悠久、技术积累雄厚、产品成熟，已经有成体系的专用驱动器。而国内针对IGBT 驱动器的研究相对较少且主要集中在中小功率等级上。现今，IGBT驱动器主要 可以分为以下几种类型： 

a.集成电路IC 

集成电路IC的驱动器主要应用于中小功率的IGBT应用领域，如PC929、 HCPL-316J等。集成电路IC驱动器具有结构简单、成本低、体积小的优点。但是该类驱动器需要按应用实际需求搭建外围电路（逻辑信号隔离控制电路、高压隔离电源、死区时间设置电路和滤波电路等），所以对于实际应用还需要做很多的工作，设计周期长。另外，集成电路驱动器的驱动电流一般较小，驱动能力受 到了很大的限制，这也是该类驱动器仅应用于中小功率IGBT领域的原因 。  

b.厚膜驱动电路 

厚膜驱动电路具有了检测和保护的功能（过电流、栅极电压箝位等），该类驱动电路主要应用于中功率的IGBT，它的隔离电压可达2000V。国内外常见的有落木源962系列、富士EXB841（VLA517）、三菱M57962（VLA542）等。

 c.驱动核心 

驱动核心相对前两种驱动器具备了很强的普遍性，这种驱动器不再只针对某一厂商生产的IGBT模块，减少了设计开发成本。驱动模块的集成度高（具备高 隔离的DC/DC变换器、短路保护、高级有源箝位、驱动信号隔离处理和电源电 压监控等功能）、可靠性高等优点。使用者只需要搭建外围电路即可。主要代 表国内有青铜剑公司的2QD15A17K-C和落木源电子的2DE300M17。国外有 CONCEPT公司的SCALE-iDriver系列等。

 **1.2.2 SiC MOSFET驱动技术研究现状** 

SiC MOSFET器件特性不同于IGBT，SiC MOSFET对回路参数更敏感，易产生波形的振荡过冲，栅极电压的安全阈值比IGBT要小，栅极氧化层容易击穿， 在驱动保护电路设计上比IGBT更加困难。 

目前，市场上应用最多的SiC MOSFET主要来源于罗姆（Rohm）、CREE等 厂商，他们都为自己所生产的SiC MOSFET模块设计了配套的驱动电路【 13-14】 。其 中罗姆（Rohm）公司推荐的驱动电路使用的是集成电路驱动，驱动电压选取 +18V/-4V，功率放大电路采用推挽放大缓冲电路。而CREE公司提供的datasheet 给出了其使用的驱动电路电源采用电源模块，驱动部分采用光耦隔离驱动芯片， 测试该驱动板时发现会出现栅源极电压跌落的问题。CREE公司也为其推出的半 桥结构的SiC MOSFET功率模块设计了驱动板。例如CREE为其CAS300M23BM2模块设计的PT62SCMD12驱动板，该驱动板采用+20V/-4V驱动电压，推荐最大开关频率为125kHZ，输出峰值电流为20A，具有设置盲区时间、过流保护、欠压保护、过压保护功能。该驱动方案的隔离方式为电磁隔离， 而其电压输入采取从15V到24V的宽范围输入。尽管这款驱动板具备足够好的 驱动能力，然而假设构成桥臂的是分立元件，则由此而产生的寄生电感会显著的 增加，因此该驱动板的可靠性还存在一定的疑问。另外该驱动板的售价过高，不利于产品的商用化推广。 

**1.3本课题主要研究内容**   

本文针对IGBT与SiC MOSFET的不同，通过对比两种器件的特性，为两种器件分别设计了一款性能优良的、功能完善的驱动保护电路。并通过分析回路参 数对两种驱动结构的影响，为未来其他功率等级IGBT与SiC MOSFET的驱动 保护电路设计提供重要依据。本文主要研究内容有：  

（1）IGBT与SiC MOSFET特性对比 

根据击穿电压和额定电流相同的原则选择1200V/300A的IGBT与SiC  MOSFET，先对二者的器件结构和工作原理进行阐述，并根据datasheet对二者的 器件参数和特性进行对比，同时综合实际应用特点和使用成本等因素，分析二者驱动保护电路设计的区别。  

（2）驱动保护电路设计 

根据IGBT与SiC MOSFET驱动保护电路设计的不同点，分别设计IGBT与 SiC MOSFET驱动保护电路。包括电源设计、驱动电路、故障检测、保护电路， 以及SiC MOSFET驱动保护电路的数字实现。

 （3）驱动电路及保护电路实验验证 

基于双脉冲测试平台对IGBT与SiC MOSFET驱动保护电路进行了双脉冲测试和短路测试，验证了电路的优越性与可靠性。 

（4）回路参数对两种器件驱动结构的影响 

基于双脉冲测试平台，分别研究不同数值大小的栅极电阻、栅极电容、电感 （Lg . Le/Ls）对IGBT和SiC MOSFET开关过程的影响，分析了回路参数对二者影响的异同点，证明了IGBT与SiC MOSFET驱动保护电路互相不能移植，需要分别设计。同时，为驱动保护电路的参数设置提供了参考依据。 

**2.IGBT与SiC MOSFET的结构与特性对比** 

IGBT与SiC MOSFET在结构与特性上具有共同点，但同时也具有许多的区别。本章以Infineon公司型号为FF300R12KT4的IGBT和CREE公司型号为 CAS300M12BM2的SiC MOSFET为例，通过对比两种器件在结构与特性上的共 同点和不同点，为两种器件的驱动保护电路设计奠定基础。 

**2.1器件结构与工作原理** 

**2.1.1 IGBT器件结构与工作原理** 

IGBT同时具有电力晶体管GTR和电力MOSFET的优点，具有开关频率高和饱和导通压降低的优势，且通态损耗低，是当今变流器开关器件的主导者。 

IGBT的结构类似于MOSFET，是在N沟道MOSFET上发展来的，如图2- 1所示。IGBT是在MOSFET的N+区增加了一个P+型衬底，因此得到了一个大面积的P+N结J1。当IGBT导通时，P+型衬底向N-漂移区发射少子，调制漂移 区的电导率，增强了IGBT的载流子密度，降低了IGBT的导通压降，平衡了N- 漂移区高耐压需求和导通压降低需要之间的矛盾。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzleqibicMRKAhrgAFgqSR515GBibRACfPn3BYmFXia88r0qr3P6PbvSSbEzA/640?wx_fmt=png&from=appmsg)

IGBT有三条并联通路存在于集电极C和发射集E之间。第一条作为IGBT 的等效输出端，它由含P+—N+—N-—电力MOSFET栅结构的N区域构成的N 沟道理想MOSFET通路构成；第二条作为IGBT的载流通路，由P+—N+—N-— P区域组合构成的一个PNP晶体管通路构成；第三条是由P+—N+—N-—电力 MOSFET栅结构的P层和N+区域一起构成的寄生晶闸管通路。第三条通路可看 作是寄生NPN晶体管和PNP晶体管组合构成。另外，在寄生的NPN晶体管发射极下的P区存在一个基极-发射极电阻Rw，该 Rw在实际设计IGBT时应采取相应的技术工艺尽量减小，使NPN晶体管可以忽略，避免IGBT因擎住效应而发生失效损坏。如图2-2所示为IGBT的简化等效电路和电气图形符号，当Rw足够小时可以忽略，NPN晶体管基本不存在，IGBT可以看作一个由MOSFET驱动的PNP晶体管。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlqpibcicPEJva8V43kib4K7vGG5ZTJyeb0f3TyTic5lbfKcsvJ5avBLGFibA/640?wx_fmt=png&from=appmsg)

**2.1.2 SiC MOSFET器件结构与工作原理** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlcYSbG2oQUcYl9NicJMSSqH6Qck4rnGiayKtricfHFJ9Kuwqx1YtKmbWSA/640?wx_fmt=png&from=appmsg)

当前大部分的功率MOSFET的结构是垂直导电双重扩散MOS结构，使用这种结构生产的功率MOSFET被称作VDMOSFET（其中V表示垂直，D表示双扩散），如图2-3所示为其基本的单元结构。VDMOSFET是在N+衬底上面生长外延层（也就是通常所说的N-漂移区），在该外延层之上使用的是平面自对准 双扩散工艺，分别形成了p体区和源极N+区，而在水平方向则会形成自由电子 （也称为多子）的导电沟道，该沟道长度通常只有1~2μm。 

VDMOSFET的基本单元结构当中，PN结由p体区和N-漂移区形成，器件 耐压能力由漂移区厚度和掺杂浓度共同决定。而其寄生的NPN三极管则由源极 区（N+）、p体区以及N-漂移区组成。因为VDMOSFET栅极氧化层的存在，所 以外加的栅压不能经过栅极向p体区中注入电子而开通寄生二极管，并且实际中会把p体区和源极区（N+）进行短接，这样也进一步降低了寄生二极管开通的 风险，保证了器件的安全可靠工作。而SiC MOSFET的p体区是以低掺杂的P 型SiC材料构成的。 

SiC MOSFET的开关电路等效模型和电气图形符号如图2-4所示。采用了输 入电容Ci ss、输出电容Coss以及转移电容Crss来反映各个电容对SiC MOSFET开 关过程的影响。式2-1给出了输入电容，输出电容和转移电容的表示方式，由SiC  MOSFET的开关电路等效模型可得，输入电容Ciss决定了电路的RC时间常数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl20tiakofsgXWmG4NvPhdY7196CKIDrOphxSKbpyxAECeEUTebJ2Sk7w/640?wx_fmt=png&from=appmsg)

**2.2特性对比** 

**2.2.1器件参数** 

本文根据击穿电压和额定电流相同的原则选取了Infineon公司型号为 FF300R12KT4的IGBT和CREE公司型号为CAS300M12BM2的SiC MOSFET作为比较对象。表2-1是FF300R12KT4和CAS300M12BM2两种器件的参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl6ibOQia4qPJjTbFfEUUe6Dyxl4QAFicxMeCIPNnTf6Gu76OwDWzfD2z1A/640?wx_fmt=png&from=appmsg)

**2.2.2转移特性** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlh4Tmj8IGOLadgf1SxXoxw1yWKVC0ibUjtDThI6cFfUCz5CHkg5oEm4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlKEbBw6YdkdLfkfibDL9x2toLzECz5dTuGHKElsKEzias5vLnK53T04jQ/640?wx_fmt=png&from=appmsg)

图2-6为FF300R12KT4和CAS300M12BM2在栅级驱动电压变化时I-V输出特性曲线。由于两种器件的跨导不同，FF300R12KT4的非线性区与放大区有明显的拐点，而CAS300M12BM2则没有。FF300R12KT4的I-V特性曲线斜率 在Vge大于11V之后变化很小，而CAS300M12BM2的I-V特性曲线斜率在Vgs大于14V之后变化较小。由于CAS300M12BM2的跨导系数（gfs）小，沟道迁移 率低，此时为了使导通电阻低，必须使其驱动电压高于18V。所以CAS300M12BM2与FF300R12KT4所需的驱动电压不同。  

**2.2.4动态特性** 

由IGBT与SiC MOSFET的结构可知，二者的开关过程十分相似。本文以 IGBT为例，来描述二者的开通、关断过程。将IGBT与SiC MOSFET开通和关 断过程主要分为四个阶段 ，如图2-7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzltrAXibbrj2rricCibQmOWmqDFAKYdKpF17SSgicibwVQqPoevmsrWtSa4pw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlddJE3zo9yZNdFTmyrIQB42HXfEf0RPwibIEnAEEWVEuhb4o7AyDiczXw/640?wx_fmt=png&from=appmsg)

**2.3.2 SiC MOSFET安全工作区** 

与IGBT相类似，SiC MOSFET也存在安全工作区，SiC MOSFET的安全工作区分为正向偏置安全工作区（FBSOA）、反向偏置安全工作区（RBSOA）、转换安全工作区（CSOA），如图2-9所示。 

正向安全工作区由漏极最大电流Idm，漏极-源极电压最大值Vdsm、漏极-源极导通电阻、最大耗散功率在漏极电流DI-漏源电压Vds平面围成的区域。最大耗散功率由器件的热响应特性、最大允许结温、器件热阻抗确定，开通持续时间不同，耐量也不同，开通持续时间越短，耐量越高。 

反向偏置安全工作区由最大漏极电流Idm、最大漏极-源极击穿电压Vds和最大结温TjM决定，它反映了器件的极限工作范围。 

转换安全工作区由寄生二极管最大正向电流极限线（平行于横轴）、最大重复电压极限线（平行于纵轴）、转换速度线（中间曲线）构成。它反映SiC MOSFET 处于高频率的开关状态转换时体内的寄生晶体管对其转换的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlCNTywZEte71PQt44l6KbkRPvHVx7UdwK3XwS5j47BhdTZ1YsdKw92g/640?wx_fmt=png&from=appmsg)

**2.4功率损耗** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl0R8hI4s4l33L2M03cMiaYeRNDiaMiblzJPIZXNb59cRQVXduuoe801fFA/640?wx_fmt=png&from=appmsg)

电力电子器件工作时均会产生功率损耗，如何减小功率损耗也成为了驱动保 护电路设计工程师考虑的重点问题。电力电子器件主要工作在开关状态，并且在 静态与动态工作中交替往复。每个工作状态的功率损耗和能量损耗之和即为器件的总损耗。图2-10为功率器件在工作中各种可能的损耗示意图。 

在功率模块的损耗中，IGBT或SiC MOSFET本身的损耗占绝大部分，即通态损耗与截至损耗。通态损耗与直流母线电压、负载电流、驱动信号的占空比、 结温有关；截止损耗是指IGBT或SiC MOSFET处在正向截止状态时的功率损耗，一般情况下截止损耗非常微小可以忽略不计。开通损耗和关断损耗与负载电 流、直流母线电压、开关频率、结温有关，此时的驱动参数应保持不变。续流二 级管的功率损耗也占总损耗的一部分。因此总功耗为： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlYeR94qicibtGSgjg6t0waiavCvP2Fy1ZFtzVUEXm97Yic3tGTg09oxZbbg/640?wx_fmt=png&from=appmsg)

**2.4.1开关损耗对比** 

由上述分析可知，IGBT与SiC MOSFET的总损耗中静态损耗是我们难以控 制的，因此开通和关断损耗成为设计驱动保护电路时应重点考虑的对象。 

图2-11为FF300R12KT4与CAS300M12BM2的开关损耗随Ic、Id的变化波形，可以明显的看出CAS300M12BM2的开通损耗和关断损耗比FF300R12KT4 低的多。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl7p1xHE3RM2erXcsFfkxrhpYiaas82yL7MJ4qYVv5K6QWticLmUh32a1A/640?wx_fmt=png&from=appmsg)

**2.5短路耐量** 

无论对于IGBT还是SiC MOSFET，栅极电压的正负取值大小由击穿电压决定，即使是瞬态值也是如此。栅极电压的大小直接影响着器件发生短路时的承受时间，即短路耐量。当栅极电压增大时，器件的通态损耗会随之降低，但是降低了器件在短路状态下的承受时间。若栅压偏低又会造成器件不完全饱和工作在有源区，这样会因耗散功率过大，结温过高影响器件性能，甚至有损坏器件的风险。图2-12为IGBT短路特性曲线，从图中可以看出，IGBT发生短路时，集电极电流CI会急剧增大，同时IGBT承受短路状态的时间却急剧减小。对于SiC MOSFET 总体趋势与IGBT相同，但是SiC MOSFET对于短路的承受时间比IGBT要短的 多，所以SiC MOSFET在栅极电压的选择与短路保护方式的选择方面与IGBT有 很大的不同。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlQIvsAxZUKezBklDFeooWyxqkGDcL9GvKO1uItRty6TCda5p3onDykg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlpzHfCVXWtm7zVaFbtnAHabs00OvESYFiayn855SXRnldRPicNzaE2qSQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl1XpsJEFFqF2xicl9UGPnVLCXsyHCPMvYro3Ly5nFGD9BB6ZONSF2hZQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlbk8ASt7BZ8TI9EpRgadfjp5ImI8WN0hGgBswjt4VXEM5w6yTzzCQrQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlIP6pTYoMKm2e00E54zqZlGmhN1Lw11VoesdA0sjMROtwtOA6EDMicnQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlyaib3nicIqxiaSLzyTgZN03111mWMykc7RD61PgMYk7ahWJhq0Y5mwOVg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlZxXfL4VfwG5lBib9TCL2ibglnxGJLfxdBSCGNRFicV3CQJ91WHfjuiaxew/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlmIFKSFAMB7qFyMrGv6eqYlBaRZicfXodTzHHzmCKKN5VkvhwdbudicFg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlSN1ubRhOS9hujkTUzLoyhTurAJ0NLWLpcpicybsoAxJdhqcJ5PibqN5A/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlzvLrFbXwQ8dO2iaUbqDMuNFP6vCFPov83gUULibfReSfERag40y6eiazw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlHOHiaYqXib4xWTIj0OgLt19PmSWeNY4ItWenM9Jjubp3DF02bxjG5pYA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlTcD1DMa7EhROaCicVHzOicIvkfeeNgocfQgSXMzs0R1ArKNFm3o6vu8w/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlJeH8RV1YQPNPlDbDTJYUvicA6KXcJX4hqg2sHsibEcuTT2NV29flLypQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzllBEjGiaklZEoicichUglqPHZ6qMvKv6Q14YpugLHBKWgicy4ia7TNR5OsDw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlCpjfHP2EVpMEmvt9Fic2JKHP6epD4aQLuUicznFakQxJvYSbVvefZA7A/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl2NMjcbD9qpDPwMkB0sLnwo3yzns1XclKUqADq6kuhnW0jlCicmm4Ekw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlJ1JI7NG8aKpe1BU4dvibCkZibLHicb2GTW8jSOXs43yJJD6lJLvfzcGnw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl6EBY6zaziaE0iaayqUcVJqiby5vU2slPZBRQkXJD94l7e5F0aSL5r77Gw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlaiaWonOgmyILDmdO2ydicco6RRplRv8eAdZyfKxuicXNVSJTpeDnJKpkg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlIL6SyJBEm1p3ib2p4j7g05dTicBHaASg1mB8cYctplicQpz3l4wpaK3zw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl3HFO0dnsBxm7ON469jtQ9jx4ZxDBOJFRDpuQrz4E8dTaPlTic5yEmgA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlqCymLrXfiaMTDfdEHW2WDUPJF0YrZutNNZMZF2oAMXbtAmJs4fcdqwQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlxmMWyIHqbUkIyjteaUO490MRju3mbh1SgN5W1sFFkO4kCAanKfWB9g/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlibHTfU0ZHnhicNHpD0LhL4FW9RsfGicIJL53BpbazBGulPrqVbzpKQfGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlZRCzBSE6ecyzibaTuXljd1WFS9YnxV6oYrrKvFqZaoswlUFTrZT3DQw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlkf7iazZTh94OYmFI5tRqPria4PaCM6TIibiaQGvuicDXhISWA3M6ph5pFWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlyyfwsOjiaNc4lCWTjIQaB3a4ObD4R6d8sOEeUxicQLj66dVuJibnfLq9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlwhwwIibupC8mhicRufIaiaVkAhmIwE24v3vWMxpY17g14pn0sBaRaOO5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl15fAKLXicookQMibDWynoNWiaBj8pya3Nib8hmFRdAPSFqice4cc8uYibeRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlcibRPUrBu4YTlle0u0MxjYfcUzN9iaXKBHicDLljCfJjeh6ouz7NONW1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl2xQyvVf9ZU4ibqlvdsc4edpiaC1tT4icC0ib6LaQaMAxjVFlocqrEWH7zg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzloMmbAnTvhoeXFyRCFsxhgviaQ42rBV6EkoDwDehYfbqoqsdN2VsChTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl9EdSb0S2vbcNLSTsGtgrwLNE4Vxr5ibUb6KU9vDMhY7AHdAUVzxiblXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlnrCKZ0a5zwGJjAgicF3yhM1JrGuxsLJe7PriaKMEykoySYA1BxIJOF8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzlII8ib1wdsbticRib6ZxbRCibdxzszBH3uTSydh1onzLvflyn4JwPlcYRpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskZu7I0P5OZUrelb2ibR0dzl9GUQceVAVcKQqHwd5cHujOcCBgw9Iic3p3AJPL3AGwXic7C6eDgUcG5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)