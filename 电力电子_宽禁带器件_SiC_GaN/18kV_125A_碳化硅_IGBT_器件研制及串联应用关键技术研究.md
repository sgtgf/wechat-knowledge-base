# 18kV/125A 碳化硅 IGBT 器件研制及串联应用关键技术研究

原创 邱宇峰 ，唐新灵 SiC碳化硅MOS管及功率模块的应用 2025-04-07 19:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/sBbQGnHpPbCOfKDKGHbOnQ](https://mp.weixin.qq.com/s/sBbQGnHpPbCOfKDKGHbOnQ)

文章来源：中国电机工程学报

作者：邱宇峰 1，唐新灵 1\*，魏晓光 1，杨霏 1，潘艳 1，吴军民 1，李学宝 2，赵志斌 2，顾然 3，梁琳 4，杨晓磊 5，周平 5(1．先进输电技术国家重点实验室(智能电网研究院有限公司)，北京市 昌平区 102209；2．新能源电力系统国家重点实验室(华北电力大学)，北京市 昌平区 102206；3．中电普瑞电力工程有限公司，北京市 昌平区 102209；4．强电磁工程与新技术国家重点实验室(华中科技大学)，湖北省 武汉市 430074；5．宽禁带半导体电力电子国家重点实验室(南京电子器件研究所)，江苏省 南京市 210016)

摘要：高压碳化硅(silicon carbide，SiC)器件因具有耐高压、耐高温、低损耗等优异特性，已成为支撑未来新型电力系统建设的新型电力电子器件。文中基于自主研制的 18kV/12.5A 高压SiC绝缘栅双极型晶体管(insulated gate bipolar transistor，IGBT)芯片，提出 18kV SiC IGBT 单芯片子模组及 10 芯片并联封装设计方案，研制 18kV/125A SiC IGBT器件，功率等级达到国际最高水平。搭建高压碳化硅功率器件绝缘、静态特性和动态特性测试平台，测试单芯片子模组及 10 芯片并联器件的绝缘及动态特性，18kV/125A SiCIGBT 器件具备 18kV 静态耐压且可以在 13kV 直流母线电压条件下关断 130A 电流，验证了所研制器件的高压绝缘及高压开关能力。此外，采用 18kV/125A SiC IGBT 器件串联搭建 24kV 换流阀半桥功率模块，提出器件串联均压方法，完成半桥功率模块的 1min 静态耐压试验和开关试验验证，结果表明，所研制的 18kV/125A SiC IGBT 器件运行良好，满足串联应用要求，同时，所提的均压方案可以保证半桥功率模块静态电压不均衡和动态电压不均衡程度分别低于 0.4%和 15%。该研究可以为基于 SiC IGBT 器件在柔性直流输电工程中的应用奠定基础。

关键词：碳化硅；绝缘栅双极型晶体管器件；封装绝缘；动态特性；串联均压

0 引言

高压大功率电力电子器件是制造各类高压大容量电力换流和控制装备的核心元件，广泛应用于可再生能源电力汇集与并网、交直流输电与组网、电力灵活应用等场景，已成为支撑新型电力系统建设的基本元器件。目前，电力系统用高压大功率电力电子器件以硅基晶闸管和绝缘栅双极型晶体管(insulated gate bipolar transistor，IGBT)器件为主，集成门极换流晶闸管 (integratedgate-commutated thyristor，IGCT)器件近年来也在电力系统中得到初步应用。硅基高压大功率电力电子器件经 60 余年的发展，其参数性能得到了持续的提升和改善，为各时期电力电子技术的发展起到决定性推动作用。然而，受限于硅材料本身的物理特性，在满足电力电子设备对器件更高耐压、更大电流密度、更高结温、更高开关频率、更快开关速度、更低损耗的发展要求方面难以达到令人满意的程度。就器件耐压而言，现有商业化晶闸管器件最高耐压为 8.5kV，IGBT 器件最高耐压为 6.5kV，IGCT 器件最高耐压为 8.5kV。

碳化硅材料相比于硅材料，具有禁带宽度大、击穿场强高 、 饱和漂移速度快 、 热 导率高等特点，使得碳化硅电力电子器件具有耐电压等级高、通流能力大、开关频率高、开关损耗低等一系列技术优势。高压 SiC 器件耐压通常在 10kV 以上，且开关频率可达 10kHz。因此，采用高压大功率 SiC 器件可以极大减少电力换流装备中器件串联数量，简化变换器拓扑，减少无源器件用量，从而大幅降低装备体积、重量及损耗，提升装备及系统运行的可靠性。

国外20 世纪 90 年代开始高压 SiC 器件的研究，主要包括 SiC MOSFET、SiC GTO 和 SiC IGBT 3类器件。其中，高压 SiC MOSFET 研究较为成熟，2016 年美国 CREE 公司研制出世界上最大功率等级的万伏级 SiC MOSFET 器件，通过封装 36 颗芯片，参数达到 10kV/240A。但是，SiC MOSFET是单极型器件，随着电压等级的增加，饱和压降迅速升高。因此，在 15kV 以上电压等级，门极可关断晶闸管(gate turn-off thyristor，GTO)和 IGBT 器件的技术优势更为明显。目前，SiC GTO 研究主要集中在美国 CREE 公司和北卡罗莱纳州立大学，最高电压达到 22kV。国内主要有中国工程物理研究院和清华大学在 开展研究 ， 最高电压达到12.5kV。但是由于材料缺陷问题，GTO 芯片及器件电流等级较低，试验研究仅限于脉冲功率应用场景。

SiC IGBT 器件研究主要有美国CREE 公司、日本产业技术综合研究所(AIST)以及美国北卡罗莱州立大学等机构。2015 年，美国 CREE 公司研制出世界上最高电压等级的 27kV/20A SiC IGBT 芯片样品；2020 年，日本 AIST 研制出 26.8kV 的 SiCIGBT 芯片样品。在 SiC IGBT 封装方面，2015年，美国北卡罗莱纳州立大学 FREEDM 团队牵头，联合美国 Powerex 和 CREE 公司，基于 2 芯片并联研制了 15kV/40A SiC IGBT 器件。同在 2015 年，日本 AIST 联合富士电机、东芝、关西电力公司以及京都大学，基于 5 颗芯片并联封装，联合研制了16.5kV/20A SiC IGBT 器件，实现了最高 250℃条件下的开关特性测试。国内主要有中电科55所开展了高压 SiC IGBT 芯片研究，2022 年研制出 20kV SiC IGBT 芯片样品。

器件串联应用是实现高压大容量换流装备的重要技术方式，目前在中低压领域，串联均压技术已经较为成熟。但是，针对万伏级 SiC 器件串联应用领域，仍处于研究起步阶段。2014 年，美国北卡罗莱纳州立大学基于 10kV/15A SiC MOSFET器件，采用无源 RC 缓冲电路串联均压技术，研制了三电平有源中点钳位变换器样机，并实现异步微电网电力调节系统中的应用验证。2015 年，美国CREE 公司和美国陆军研究实验室基于 4 个 24kV/20A 的 SiC IGBT 器件串联，研制 32kV 的固态马克思发生器(Marx generator)，并完成电阻负载开关实验验证，但未给出详细的均压方法和均压效果。

本文采用国内自主研发的 18kV/12.5A 高压 SiCIGBT 芯片，针对高压大电流 SiC 器件研制要求，提出 18kV SiC IGBT 单芯片子模组及 10 芯片并联封装设计方案，研制国际首个 18kV/125A SiC IGBT器件，测试单芯片子模组及 10 芯片并联器件的绝缘及动态特性，验证所研制器件的高压绝缘及高压开关能力。最后，采用 18kV/125A SiC IGBT 器件串联搭建 24kV 换流阀半桥功率模块，提出器件串联均压方法，通过实验验证所提器件串联均压方法的有效性，并进一步验证 18kV/125A SiC IGBT 器件性能。

1  18kV/125A SiC IGBT 器件封装结构设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoXbgcTxibNLHUSQEGxQVWAtcguLhicIYut1ibfibNoIRBia1hfcicxm2hc6wQ/640?wx_fmt=png&from=appmsg)

由于所采用 SiC 芯片的额定电压和额定电流分别为 18kV 和 12.5A，本文提出先将单颗芯片封装成独立的子模组，然后采用 10 只子模组并联封装成 18kV/125A SiC IGBT 器件。图 1 中给出了器件实物图，采用压接封装结构，各子模组整体沿中心对称布置，考虑到预留足够的绝缘间距以及便于安装，子模组中心距为 45.7mm；器件尺寸为 287mm××216mm××51mm。

器件外壳所选用的材料为不饱和聚酯玻璃纤维材料片模压塑料，具有良好的机械性能、防爆性能及导热性能。由于万伏级碳化硅器件尚无标准封装形式，也没有相关绝缘设计标准及参考依据。参考低压系统内设备的绝缘配合标准，外绝缘尺寸按照电压等级 20kV、污染等级 2 与过电压等级 3设置，电气间距取脉冲瞬时过电压与稳态电压下电气间距的最大值，考虑适当绝缘裕度，管壳爬电距离设定为 125.8mm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoKaJC6RP7v0qzhIwZDibDc3xhAo30oc4szNuUVDSHZiaBKTSHBHT0z6Zg/640?wx_fmt=png&from=appmsg)

子模组整体及内部结构设计如图 2 所示，充分考虑了高压绝缘、低感封装以及高效散热的设计需求。

高压绝缘包括子模组外绝缘和子模组内部的芯片终端与封装材料的界面绝缘。图 2(a)、(b)分别给出了子模组及其剖面的示意图。为了保证子模组框架具有足够的外绝缘强度，提出了采用“尼龙+玻璃纤维”高强度绝缘材料和增加爬电距离的方法，通过增加 2 个伞裙，将外部爬电距离提高到125.8mm，以满足耐受 18kV 爬电距离要求。此外，通过对芯片终端与封装材料耦合电场的计算，获得了 SiC IGBT 芯片终端与封装材料界面的电场分布特性，提出了采用 Wacker 915HT 高温高强度硅凝胶作为灌封绝缘材料，实现对 SiC 芯片终端外部绝缘的保护。

在低感封装方面，采用了压接封装形式，最大程度缩短了电流路径。由于 SiC IGBT 芯片有源区尺寸较小，发射极引出电极无法直接压在芯片上，因而采用先通过键合线将芯片发射极连接至 DBC，再通过压接在 DBC 上的发射极电极引出的结构。按照开路导体的部分电感计算方法，得到子模组主支路的寄生电感为 72.5nH，整个器件寄生电感约为7.3nH。此外，为了降低功率回路寄生电感对驱动回路的影响，封装结构采用了开尔文接线方式，参照发射极的引出方式，设计了辅助发射极结构，在保证封装灵活性的基础上，消除了共发射极电感对驱动电路的影响。

在散热结构方面，采用了单面直接散热方式，通过将 SiC IGBT 芯片焊接到热膨胀系数与芯片材料相近的金属钼板上，实现芯片–钼板–散热器的最短散热路径，大幅提升了散热性能。此外，后续将通过采用钼铜合金等方式，进一步提升封装导热能力。

2  18kV/125A SiC IGBT 器件特性测试

为了验证所设计的 18kV/125A 器件的整体性能，在实验室内搭建了封装绝缘、静态及动态特性实验平台，对子模组及器件的绝缘及动静态特性开展了实验研究。

2.1 子模组及器件绝缘结构耐压特性

为保证所研制的器件能够耐受 18kV，搭建了图 3 所示的绝缘实验平台，分别对子模组框架、子模组及管壳开展了绝缘耐压实验研究。为了能够尽可能地接近器件的应用工况，分别测试了阻断(直流)及正极性重复方波作用下的局部放电起始电压及漏电流特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoAEZNpB89fmvYxCMDWB3Nyh13W7cao6aX7oesKVYV7sIFyom9VQOPbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACofic9XotmtuN3gj7lsibvjtPkiaNVTvSmFBiaUsb3DZkfowyYeRZ5fRs9pg/640?wx_fmt=png&from=appmsg)

实验中所用平台可以在最高为 40kV 的直流、方波等不同电压下进行局部放电测试和高精度漏电流动态监测(分辨率 nA 级)，实现了对器件封装绝缘结构以及单子模组耐压能力的快速验证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACodT24d9pe6rkjGwVHXSiaarQqJYo6liblNmL3HaSia5lBVtesPWPvEf3Gw/640?wx_fmt=png&from=appmsg)

此外，实验中验证器件管壳以及子模组的框架的绝缘性能的实验布置分别如图 4(a)、(b)所示。需要说明的是，针对子模组的框架的绝缘实验，所用的实验样品为包含 DBC、硅凝胶及框架，但不包含芯片的子模组，以尽可能接近器件内部实际的封装绝缘结构。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACom8swDvoR4tO8Qp5oRL1yVxcLylYeGCpJGGdoxNIzeQ9usrUVA50L2A/640?wx_fmt=png&from=appmsg)

当外施电压为 18kV 时，直流及正极性重复方波下的局部放电实验波形及电压和电流波形分别如图 5(a)、(b)所示。需要说明的是，图 5(b)中出现的脉冲电流信号是重复方波的上升沿和下降沿对应产生的位移电流信号，并非放电信号。从图 5 可知，管壳在 18kV 下均未出现放电信号，满足 18kVSiC IGBT 器件的绝缘要求。而表 1 中给出了随机选取的 4 个管壳样品在直流和方波电压下的局部放电起始电压测试。实验结果表明，18kV IGBT 器件的管壳的局部放电起始电压均大于 18kV，满足器件绝缘耐压要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoxGk2WMtS9XSnSV5eicbuslcZibIBZB5lbrXnYPConsjkv5n9fD9F4iaKw/640?wx_fmt=png&from=appmsg)

此外，针对不同不含芯片的子模组框架进行直流和方波电压下的局部放电和漏电流测试。结果如表 2 所示。从表 2 中可知，所有子模组封装绝缘结构样品在直流 18kV 下的平均局放量小于 10pC、泄漏电流小于 0.2μA，满足 18kV 器件封装绝缘要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoOdfgkUMwzwRhud2RxiauxuzwicWcXTZKfFOhe2d8TV3SNOtXINNJ2E3w/640?wx_fmt=png&from=appmsg)

2.2 子模组及器件静态特性

采用静态参数测试平台对含芯片的子模组及18kV/125A SiC IGBT 器件的静态特性进行了评估。实验结果表明，单芯片子模组 18kV 直流电压下的集射极漏电流范围在 6~10μA，验证了 SiC IGBT 子模组的封装结构和芯片在 18kV 电压下具有良好的静态耐压特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACowageqdicXRmzAKGN5RCnOVl75UqQbpyjgMic1yErS7q7IwnhMOib5gXVA/640?wx_fmt=png&from=appmsg)

单芯片子模组的典型输出特性如图 6 所示。由图可知，18kV SiC IGBT 子模组的阈值电压为5.26V，饱和压降 VCEsat 为 9.8V。为了保证 18kV/125AIGBT 器件 10 只并联子模组的电流均衡，筛选出 10只阈值电压及饱和压降尽可能一致的子模组，封装成 18kV/125A IGBT 器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoX0CQ7UXBYzWeZrkN53BUAEGCNAuNShh3IFfWM2wDGCsOtKqEULyrug/640?wx_fmt=png&from=appmsg)

采用器件静态耐压测试设备对 18kV/125ASiCIGBT 器件的静态特性进行测试，实验结果表明，器件在 18kV 直流电压条件下的漏电流大小为69.66μA，未发生过压击穿失效，验证了所设计的器件的整体耐压性能。此外，测试得到不同栅压条件下 18kV/125A SiC IGBT 器件的输出特性曲线如图 7 所示。由图可知，器件的饱和压降为 9.5V，阈值电压的结果约为 4.95V。

2.3 子模组及器件动态特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACo5WfnxWZAicic5NR59iazcALnoNfiaOXv5iafjJjdRoTVIycrxiaqXyYgBianw/640?wx_fmt=png&from=appmsg)

为了验证 18kV SiC IGBT 单芯片子模组及器件的动态开关特性，研制了图 8 所示的 IGBT 器件开关用驱动板和图 9 所示的器件动态特性实验平台，该平台的最高电压为 20kV，最大电流 1000A，测试所使用的示波器及探头如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACorEF2mycCASXzVtsvXib4icsiczXqh67lMVbaXf2AkiaT6nULvGRxmTSWicw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoaLXxzrJr5cymnAlscT36M9jNGH3NrQbMNeEHnVWBljMe8IwhNN02gA/640?wx_fmt=png&from=appmsg)

考虑器件的实际应用工况，在进行子模组及器件开关特性实验时，实验电压设置为 12.5kV，电流按照额定电流来考核。

子模组及器件动态测试所采用的驱动板如下图所示。该驱动板在 4500V/3000A硅基 IGBT 器件驱动板的基础上改制而成，具体改动如下：1）将输出电压由原来的±15V，调整为+20V/-5V，同时根据实际测试波形，调整驱动电阻和电容值；2）采用大功率电池给驱动功能，尤其是在器件串联的换流阀半桥功率模块中，每只器件独立配置驱动板及大功率电池；3）由于万伏级 SiC IGBT器件尚处于研制过程中，器件故障检测方法不成熟，因此取消了驱动板的故障检测功能，仅保留驱动板开关功能。

驱动板开关电阻采用多个电阻并联，且开通和关断电阻独立可调。在测试实验中，综合考虑开通和关断过程中的振荡特性、电压电流过冲特性以及开关速度要求，最后选取单芯片子模组的开关电阻约为 90、120Ω，无栅极电容；器件开关电阻约为20、33Ω，栅极电容 200nF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACokSfU068lrOcKWKHH17F5K6PpjrDbgUGznAV1d2cKomfUJqZWZOsFDg/640?wx_fmt=png&from=appmsg)

针对单芯片子模组的动态特性的实验条件如表 4 所示，对应的动态特性实验结果如图 10 所示。由图可知，SiC IGBT 单芯片子模组在 12.5kV 条件下具有良好的开关能力，在第二次关断时，器件的稳态电流达到了 15A，提取单芯片子模组开通时间为 1.38μs，关断时间为 3.46μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoancu8STIjU2FrWbkfDV9YzV9TQniaJnDhTCiakyNgtHLfHL2jsPD6ujQ/640?wx_fmt=png&from=appmsg)

为了保证 18kV/125A SiC IGBT 器件可靠关断，本文对子模组进行了筛选，按照阈值电压0.5V饱和压降0.5V 的参数筛选要求，保证并联的 10 个子模组在表 4 所示的实验条件下均能可靠开断，同时动态参数尽可能地接近。经过筛选后的子模组封装成 18kV/125A SiC IGBT 器件，器件的动态特性实验结果如图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACo6lQDvoCibxhjhHlp6F4JLknLicJrtj8T7MVpibPZNUcVT99YWTJfDvxQw/640?wx_fmt=png&from=appmsg)

由图可知，所研制的 18kV/125A SiC IGBT 器件第二次开通时间与第一次关断时间分别为 2.04 和 4.49μs。第一次和第二次的关断电流分别为 60 和 130A，器件第二次开通瞬间电流峰值为 88A，第二次关断电压峰值为 13.07kV，由测试数据可知，18kV/125A SiC IGBT 器件可以在13kV/130A 实现良好关断，且开关瞬态电流和电压过冲均较小。

3 18kV/125A SiC IGBT器件在 24kV/125A

换流阀半桥功率模块中的串联应用验证受限于单只器件的电压水平，电力电子器件在电网中通常采用串联应用的方法来提升装备的电压等级。为了验证所研制的 18kV/125A SiC IGBT器件在换流阀工况下的应用特性，采用 4 只 18kV/125A SiC IGBT 器件，两两串联构成 24kV/125A 换流阀半桥功率模块。通过建立 SiC IGBT 静态漏电及动态开关模型，仿真分析了静态与动态均压参数对器件稳态和瞬态电压分布的影响规律，提出了器件串联的静态与动态均压方案，完成了静态耐压和动态开关测试，验证了串联均压方案的有效性以及所研制器件串联应用的可行性。

3.1 串联均压技术

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRm98EiaklWosOFd93nicNw1EasZ1mBejLmr2MXZkWhXCXTfrgU1HiagkvEw/640?wx_fmt=png&from=appmsg)

功率器件的串联均压技术按照均压原理可以分为被动 RC 缓冲均压、主动模拟均压和主动数字均压。表 5 中给出了上述 3 类均压控制技术在均压效果、成本和可靠性方面的优缺点。

对于 SiC IGBT 器件在柔性直流换流阀应用场景，被动 RC 缓冲均压是适应柔性直流换流阀应用的理想均压方案。SiC IGBT 器件串联不均压分为静态不均压和器件动态不均压，并分别通过静态均压电阻 Rs、动态均压电容 Cd 和电阻 Rd 实现静态和动态电压均衡。相应均压电路参数取值范围如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmb46j5O2aCD1icAibqR8COiaqN15qpncuIh9RhfKVMyzR4oc8YpnMWt1PQ/640?wx_fmt=png&from=appmsg)

式中：δstatic、δdynamic 分别为静态和动态电压不均衡程度；VCES、ICES、IC 和 ICRM 为阻断电压、漏电流、集电极电流和重复峰值电流，相关参数可以结合器件的特性测试结果得到；Ls 为寄生电感；△Vs 为电压过冲；△t 为暂态 vCE 间的时间差；Ton 为通态时间。

3.2 换流阀半桥功率模块特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmfOfNGDULtrKiaiaFIyxictOGMuIMwIyoMtB2X1HMeJMCyY7Ywv7m2KC8g/640?wx_fmt=png&from=appmsg)

为了验证 RC 缓冲均压方案在柔性直流换流阀中的均压效果，按照直接串联器件阈值电压±1V、饱和压降±1.5V 的参数选型要求，选取了 4 只 18kV/125A SiC 器件，在实验室搭建了如图 12(a)所示的24kV/125A 换流阀半桥功率模块，并搭建了图 12(b)所示的动态特性实验平台。基于该测试平台，完成了半桥功率模块的 1min 耐压静态试验和开关能力验证试验。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmicK2IZticwe7Psx2OobxTt6sJ27rv9jriaU6E2jNYALyFpBEdeqN6WH0w/640?wx_fmt=png&from=appmsg)

图 13 中给出了半桥功率模块应用验证的实验拓扑，在进行 1min 耐压试验时，所有器件的栅极端与发射极端间施加恒定电压 VGE=-5V，使得器件保持阻断状态，直流电源对电容 C 进行充电，电压逐渐升至 24kV，耐压持续 1min，监测两串联 SiC器件 V1 和 V2 电压，之后放电回路进行放电，若IGBT 正常工作，则通过静态耐压试验。图 14 中给出了实验过程中施加 24kV 下的耐压试验测试结果，1min 时间内，V1 和 V2 工作正常，两只器件的静态电压较为均匀，不均衡程度仅为平均电压的0.4%，证明了所研制的 18kV/125A SiC IGBT 的耐压能力以及 3.1 节中给出的静态均压电阻的均压效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmcCNe23YzmJcZ8KhhMytMYarG6BZPiasDpjlicuUOwiaFP5stDbquNTtag/640?wx_fmt=png&from=appmsg)

而对于 24kV 换流阀半桥功率模块的整体开关能力以及换流阀半桥功率模块中串联 IGBT 的动态均压特性的验证，采用图 13 所示的双脉冲测试电路，首先通过直流电源对电容 C 进行充电，电压逐步上升至 24kV，然后断开充电回路，对被测 SiCIGBT 器件 V1 和 V2 下发双脉冲触发信号，关断前的栅极–发射极电压 VGE=+20V，而关断后的栅极–发射极电压 VGE=-5V，实验时同步采集开关过程中 V1 和 V2 的电压以及回路的总电流 Ic 的波形，相应的双脉冲实验结果如图 15 所示，由图可知，通过实验完成了半桥功率模块电压 24kV 以及电流130A 的开关过程，被测 SiC IGBT 器件完好无损，验证了研制的 18kV/125A SiC IGBT 在串联应用的开关能力，且实验测试得到的关断最大电压不均衡程度仅为平均电压的 15%，说明 SiC IGBT 器件动态均压方案的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmNib0WTSJXuFpu2sya9fGO4CsHd7Pmbx70gKKWibgH5XPLI0K4NqHia7uA/640?wx_fmt=png&from=appmsg)

4 结论

本文研制了国际首个 18kV/125A SiC IGBT 器件，详细介绍了器件的封装设计方案，验证了器件本体的耐压及动静态特性。同时，在 24kV 换流阀半桥模块中开展了串联应用验证，为基于 SiC IGBT的换流阀在柔性直流输电工程中的应用奠定基础。主要结论如下：

1）结合 SiC IGBT 芯片特点及绝缘耐压要求，提出了 10 只子模组并联的 18kV/125A SiC IGBT 器件封装方案，包括外壳及子模组绝缘设计、封装寄生参数设计以及散热结构设计，封装结构设计参数满足器件性能要求。

2）在实验室分别搭建了针对 18kV SiC IGBT器件的封装绝缘、静态及动态特性实验平台，对器件的管壳、框架及绝缘结构开展了绝缘耐压实验，并对单子模组及器件本体开展了静态及动态特性实验。结果表明，封装设计方案可以满足器件 18kV耐压及开断 125A 电流的要求，验证了所研制 SiCIGBT 器件的性能。

3）基于 18kV SiC IGBT 器件搭建了 24kV 换流阀半桥功率模块，提出了 RC 缓冲均压方案，并完成了半桥功率模块的 24kV 1min 耐压试验和 24kV/130A 开关试验。结果表明，所研制的 18kV/125A SiCIGBT 器件运行良好，满足串联应用要求，同时所提的均压方案可以保证半桥功率模块静态电压不均衡和动态电压不均衡程度分别低于 0.4%和 15%。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)