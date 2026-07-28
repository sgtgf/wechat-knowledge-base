# 基于SiC 功率器件的大功率 DC--DC 变换器


> 原文地址: [https://mp.weixin.qq.com/s/KupEOYgMWqgkl7-9tdjotA](https://mp.weixin.qq.com/s/KupEOYgMWqgkl7-9tdjotA)

文章来源：工程科学学报

作者：马后成1) ，周晓敏1) ，高大威2)     1) 北京科技大学机械工程学院，北京 100083 2) 清华大学汽车安全与节能国家重点实验室，北京 100084

摘要：以燃料电池、光伏电池等为代表的新能源在实际应用中需要大功率 DC--DC 变换器对其输出电压进行调节，同时对其输出功率进行控制． 本文将高效 SiC MOSFET 应用于燃料电池汽车两相交错式 Boost 型 DC--DC 变换器中，基于计算、仿真和实验手段分析了应用 SiC 功率器件变换器的性能． 研究结果表明: 在大功率 DC--DC 变换器中，新型 SiC 功率器件的应用能够提高变换器功率密度、增强变换器可靠性，提升动力系统工作效率． 该研究结果将为新型电力电子器件的应用以及新能源相关领域的研究提供参考．

关键词： 燃料电池; DC--DC 变换器; SiC 功率器件; 效率

随着环境污染和能源危机的问题日益凸显，新能源产品的应用受到了越来越多的重视． 作为新能源应用的代表，燃料电池电动汽车( fuel cell electric vehicle，FCEV) 因具有清洁、高效等优势，得到了迅猛的发展．

但是燃料电池应用在电动汽车中具有一些不足．由文献［1］可看出，燃料电池输出特性偏软，导致无法满足整车需求． 此外，由于车辆需求功率变动频繁且不确定，导致燃料电池输出电流高频波动，会影响燃料电池的耐久性． 因此，现有的燃料电池汽车动力系统一般采用电--电混合动力构型，即燃料电池系统外接能量储备系统作为辅助动力源，比如高压蓄电池组或者超级电容等，来改善系统的动态特性．

为了解决燃料电池与辅助动力源之间的电压不匹配问题，同时也为改善燃料电池输出特性，DC--DC 变换器通常被用于燃料电池汽车动力系统中，DC--DC 变换器可以将燃料电池的输出电压转换到与直流母线电压相匹配的级别，并根据整车的功率需求和蓄电池组或超级电容的电荷状态( state of charge，SOC)来调节燃料电池的输出功率．

由此可见，DC--DC 变换器是燃料电池电动汽车动力系统中的关键部件． 目前燃料电池汽车动力系统中的 DC--DC 变换器多采用硅( Si) 开关器件，虽然相关应用技术比较成熟，但许多方面还有待进一步提高，如功率密度、工作频率和效率等． 随着燃料电池电动汽车的发展，对车用所需大功率 DC--DC 变换器的效率、功率密度、轻量化、电磁干扰( electromagnetic interference，EMI) 和耐高温等性能提出了越来越高的要求． 与之相矛盾的是，传统的 Si 半导体技术经过六 十 年 的发展，许多方面的性能已经接近理论极限，很难再进一步提升，尤其在高频和高功率领域更加突显出其局限性．

近年来，碳化硅( SiC) 半导体技术已成为研究的热点，也是电力电子发展的潮流． 相比于传统的 Si 技术，SiC 技术可以满足电力电子应用领域中对于高温、高频及高效率等工作条件的要求． 文献［10］介绍了一种利用 SiC 肖特基二极管实现有源功率因数校正的高频应用实例，开关工作频率为 150 kHz，输出功率为 3. 6kW． 文献［11］将两个 50 A 的 SiC MOSFET 组成的 100A 功率模块应用于电动汽车的大功率双向 DC--DC 变换器中，SiC 功率器件有效减小了器件损耗，降低了温升，提升了输出效率． 文献［12］研制了多相全 SiC 双向 Boost DC--DC 变换器，工作频率为 250 kHz，输出功率为 5kW，在 140 ℃ 的高温条件下系统仍能获得很高的效率． 文献［13］介绍 了 在 开 关 频 率 为 200 kHz 的Boost 变换器中，使用 SiC MOSFETs 代替 Si IGBTs 时，变换器的效率提升了 20% ． 文献［14］采用 Cool MOS和 SiC 二极管研制了一台 1. 5 kW 高效率双向 DC--DC变换 器 样 机，开关频率 高达 200 kHz，效率最高可达95. 2% ． 文献［15］主要分析了 SiC 器件在 1kW DC--DC 变换器中的各部分损耗特性． 然而，这些文献对SiC 的应用研究都是在小功率范围内的研究，没有涉及大功率的范畴．

对于在性能上要求苛刻的电动汽车领域，变换器的功率密度和效率直接影响到汽车的可用空间与效率． 本文将 SiC MOSFET 和 SiC 二极管应用于燃料电池汽车用的 DC--DC 变换器中，针对较宽的功率变化范围，设计了一款 15 kW 的 DC--DC 变换器，重点对其各部分损耗、工作效率和磁性元件的体积进行研究．结果表明，SiC 器件应用到燃料电池电动汽车用大功率 DC--DC 变换器中，不仅可以更好的利用电池燃料并提高燃料电池的寿命，而且可以扩大汽车的可用空间．

1\. 电路拓扑结构和驱动

1\. 1 电路拓扑结构

对于燃料电池动力系统来说，DC--DC 变换器的拓扑结构对燃料电池系统的正常、稳定工作具有重要意义． 例如，为了延长燃料电池的使用寿命和减少不必要的燃料损耗，文献［16］中建议燃料电池的输出电流波动应该限制在额定值的 10% 以下． 车用 DC--DC 变换器多采用结构简单的 Boost 电路，然而，随着燃料电池电动汽车的功率等级不断提升，单路 Boost 变换器在使用上受到了越来越多的限制． 由于功率的增大，Boost 变换器各器件所承受的瞬间电流和电压应力将增大，会导致电路元件尤其是电感的体积和质量大幅度增加并加大了器件的选型难度，增加了系统的成本． 同时也增大了开关瞬间的 du/dt 和 di/dt，造成严重的电磁干扰，其中，u、i 和 t 分别表示瞬时电压、瞬时电流和时间．

为了满足燃料电池汽车动力系统的发展趋势，利用交错式 Boost 电路拓扑结构，不仅提高了输入输出端的电流和电压的变化频率，减小了电流和电压纹波，降低了对电感和输出电容的要求，还可以加大输出功率等级，降低单体电感的体积，减小变换器的体积和成本．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2k0OACUGgwjprd1UO96PSLxdtwLiac9uXLVOMnFrcVyia5hWynUtiaWXsA/640?wx_fmt=png&from=appmsg)

本文选取两相交错式 Boost 变换器对应用 SiC 功率器件时变换器的效率进行研究，如图 1 所示，它由两个完全 相 同 的 Boost 单元并联组成，电路中的两个MOSFET 管 S1 和 S2 ( 采用的是 Cree 公司生产的，型号为 CAS120M12BM2 的 1200V 和 120 A 的 SiC MOSFET( 含二极管) ) 的驱动信号相位相差 180°，Cin、Cout 和 Ｒ分表表示为输入电容，输出电容和负载电阻． 当电路工作在占空比为 0. 5，并且输入电流为连续模式( con-tinuous conduction mode，CCM) 时，开关管 S1 和 S2 的驱动波形，其中 ton和 toff分别表示一个周期内的开通和关断时间，电感 L1 和 L2 ，二极管 D1 和 D2 ，输入电流和输出电容 Cout的电流波形 IL1、IL2、ID1、ID2、Iin和 ICout 如图 2 所示．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2ajGfksNXTFD0yOz6wicIn6NugQKGibSGztsgic6bwjPkZymDG6764Qm9g/640?wx_fmt=png&from=appmsg)

 可以看出，由于开关管 S1 和 S2 的交错导通，两路电感电流的变化趋势相反，使得输入电流纹波幅值大幅降低． 所以与单路 Boost 电路相比，在相同的滤波效果下，输入电磁干扰滤波器和输出电容的体积将大幅度减少． 两相交错式 Boost 变换器工作在连续模式下的总电流纹波计算如下．

对每一路 Boost 电路都遵循

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2Qxk6M1urhYsD6icNm72KXrTCg9Qs1HLQfR9Bxj3wiaVZIACEGWtbmAicw/640?wx_fmt=png&from=appmsg)

式中，Vin为输入电压，Vout为输出电压，d 为占空比．

在不同的占空比条件下输入电流的纹波分别为:

(1) 当 d≥0. 5 时，在每个开关周期 T 内，输入电流 Iin的频率为每路电感电流的 2 倍，等效占空比 di 可计算为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC23AlZBGNriczUEjCbc2MR5bibUXGXsS1nznb2N0qU50737ialR4ahpZj6g/640?wx_fmt=png&from=appmsg)

在等效占空比开通阶段，即对应输入电流纹波上升阶段，两路电感 L1 和 L2 的电流纹波分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2ibZibStE8l3nGSyaadYkibNnv5J7lDRgXj3rvzj2xabhybBiaxTVicjCf2g/640?wx_fmt=png&from=appmsg)

  
输入电流纹波大小由式(3) 和式(4) 相加，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2xgtibVuuCapGWcM3nSJle3diaYiaoYIPHgcFS91GLP9zRehfmR2g5qIYA/640?wx_fmt=png&from=appmsg)

当 L1 = L2 = L 时，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2rSc4fsLcmAttBjrtsVZ7ygIaTDvIN2K343nJpfbNoCrGhCfZfl1WPw/640?wx_fmt=png&from=appmsg)

2) 当 d ＜0. 5 时，电路的等效占空比为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2gK4hZ2MwXEYsVqmo6ibj6w5KzPZnpXzbNQJ2ffZcicJYsjPp4oGWVevA/640?wx_fmt=png&from=appmsg)

在等效占空比对应的导通阶段，两支路的电感电流 IL1和 IL2的变换趋势不一致，假设 IL1上升、IL2下降，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2oULq86HNZGm1glOne7RGPkWk57lvNNZuAP62TSOg1ia4dZdrFPicrHlg/640?wx_fmt=png&from=appmsg)

两路电感电流纹波相加后，输入电流纹波为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2jI9z2C9CQMialNv626kyBjTmMFNJayBviaBictsfodicaXQrzd8NmUNh8Q/640?wx_fmt=png&from=appmsg)

1\. 2 驱动电路

由于 SiC 功率器件的击穿电场强度与禁带宽度远大于 Si 器件，使得在相同的额定电压下，SiC 器件的寄生电容更小，对驱动电路的寄生参数更加敏感． 目前，SiC MOSFET 的建议驱动电压的为 －5 ～ + 20 V，与 Si IGBT 建议的驱动电压为 －15 ～ + 15 V 有较大区别．因此，SiC MOSFET 的安全阀值较小，驱动电压的突变可能会击穿栅极和源极间的氧化层． 所以，SiC MOSFET 驱动 需要在 Si IGBT 驱动基础上加以改进，SiC MOSFET 的门极驱动框图如图 3 所示． 一个 2W 型号为 MGJ2D152005SC 的 DC--DC 变换器为栅极驱动提供隔离的 －5 V 和 +20 V 输出电压，以及使用可直接提供9A 峰值电流的驱动芯片 IXDN609．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2BRCThQUaa0BXeUichwsIzQiaWfzep7U7icIzfEeoVHDFok6cicwOibpIjQw/640?wx_fmt=png&from=appmsg)

2\. 变换器损耗分析

为了分析 SiC MOSFET 的 DC--DC 变换器的效率，需对变换器的功率损耗的过程进行分析． 两相交错式Boost 电路的设计技术参数见表 1．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2xQficbDFeOsQf0pLfJibIjicWmXeJ5ZcdIkiadkVf6e1l70cer6h7iatPMw/640?wx_fmt=png&from=appmsg)

实际变换器的损耗主要由五个部分组成: MOSFET 损耗、功率二极管损耗、电感损耗、电容损耗和驱动损耗．MOSFET 损耗 主 要 包 括 导 通 损 耗 和 开 关 损耗; 功率二极管损耗主要包括导通损耗和反向恢复损耗; 电感损耗包括由电感内阻造成的铜损与由磁滞和涡流造成的铁损; 电容损耗主要体现在电容的等效串联电阻上．

MOSFET 的导通损耗由下式计算

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2t4wicBCBKOorqusJgcML0gp1kP7ykJezeExy0wMd63sHqDWWFNOVooQ/640?wx_fmt=png&from=appmsg)

其中，ＲDSon为 MOSFET 漏--源导通电阻，VDS，con 为导通压降，IL 表示电感稳态电流，ΔIL 表示电感电流纹波，d 为占空比． 此外导通压降随 MOSFET 漏极电流的增大而增大．

MOSFET 的开关损耗是由开关过程引起的，在开通和关断过程中，漏--源两端电压 VDS和漏极电流 ID 存在重叠部分，每个周期的开关损耗由两者乘积的积分获得． 若 MOSFET 的开关频率为 fsw，则开关损耗的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2k1avJwehva2icOt2QFlP7zDc3zdOpY4pX0R827ic9DvjeZSQFklBzHJg/640?wx_fmt=png&from=appmsg)

由于厂家通常仅提供在额定电流和额定电压下的几个 EMsw，on 和 EMsw，off 曲线图，此外 EMsw，on 和 EMsw，off 的值与电流关系又是非线性的，因此很难通过解析表达式获得． 在工程计算中开关损耗可通过线性转换而获得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC23JFuG5r7Eo6TfdtQufQ4vhflYc7tWic4rlLR0EHUFIO9GiaMnHLd5ECw/640?wx_fmt=png&from=appmsg)

式中，EMsw，on和 EMsw，off分别为数据手册中测试条件一次开关过程的开通和关断损耗能量，分别与开通延迟时间 td，on、上升时间 tr 和关断延迟时间 td，off、下降时间 tf有关． 以上四段时间受 MOSFET 结电容和驱动电阻 Ｒg的影响，可根据具体数值由数据手册查得．ID 和 VDS 分别等于对应的实际工作条件下的漏极电流和漏--源极电压，I\*D 和 V\*DS 分别表示测试条件下的漏极电流和漏--源极电压．

功率二极管的导通损耗的计算与 MOSFET 的导通损耗类似，如式( 15) 所示． 式中，ＲD 为功率二极管的导通电阻，VD 为导通压降，可以从二极管的电流 IF 和电压 VF，即 IF --VF 曲线图中获得．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC21R27AmQ4cicOiaURQGWlKSvfTHXT0QqxShjHEtk8ABzRnMqBmfz3zusA/640?wx_fmt=png&from=appmsg)

功率二极管的反向恢复损耗由下式计算

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2uSaiaUBibaB5cIgFQhricrTdykaGibRLwOJclWKlia70WoTlUOOTia38FJuA/640?wx_fmt=png&from=appmsg)

其中，EDrr，off和 trr分别为数据手册中测试条件下的反向恢复损耗和反向恢复时间，IF 和 VＲ 分别为对应的实际工作条件下的正向电流和反向电压，I\*F 和 V\*Ｒ 分别表示测试条件下的正向电流和反向电压．

电感的铜损与铁损的相对大小由电流变化的频率决定． 在频率小于约 100 kHz 时，铜损起主要作用，反之，铁损起主要作用，两者分别如式 ( 17 ) 和式 ( 18 )所示．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2B9u84RiaTQARTjV5kXTCtx2EPiaA5FPQPuz6AfyiaicrQefSg0O9f3D6DQ/640?wx_fmt=png&from=appmsg)

其中，ＲL 为电感的等效串联电阻; Kh、a 和 b 是由铁心材料决定的常数，m 是铁心质量，Bm 为电感的最大磁通密度．

电容的等效串联电阻造成的损耗如式( 19) 所示．其中 IC 为电容的稳态电流，ＲC 为电容的等效串联电阻．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2KFZ2eeia6siadd4vCEkHgNA1uhy6HeVlPaiaXdRjI73u7Q2HcgcjnBZlA/640?wx_fmt=png&from=appmsg)

MOSFET 的门极驱动损耗可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2vUaptcfTIDuO8jUzLz6OkjAiaETgp6ZwynzAXzKGLG9WSQ1zNe3wtbQ/640?wx_fmt=png&from=appmsg)

其中，Vdrv和 Qg 分别表示驱动电压和门极总电荷．变换器的损耗为以上各部分损耗之和，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2JnqZK2kNE4diarmaEx9sUCSbXPw00yZaI5D1zdnicHKPt3uGa2bF5nNQ/640?wx_fmt=png&from=appmsg)

结合表 1 中两相交错式 Boost 变换器的电路参数，在变换器运行在 50% 负载、75% 负载和满载( 15 kW)条件下，对变换器的各部分损耗进行比较和分析． 图 4展示了依据损耗模型估算出的变换器工作在 20、60 和100 kHz 时各部分功率损耗值．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2NlKhXPibpwhAyg7kiaibhFd1a4QqrsdWhvzNohV6OAvRQ53POOdZyibmHw/640?wx_fmt=png&from=appmsg)

从图 4 中可以看出，在大功率低频条件下，SiC 器件变换器主要的损耗是传导损耗，开关损耗和电感电容驱动损耗仅占总损耗的小部分． 随着频率的升高，开关损耗成比例的增加，电感电容损耗和传导损耗几乎不变． 而传导损耗随着功率的升高增加幅度较大，这是由于和电流成平方比的关系．

3\. PLECS 电路仿真研究

功率半导体器件的热损耗分析是一个重要的研究方向，尤其在大功率电路的应用中更为广泛． 在实际的工程应用与设计开发中，为了评估变换器的性能和效率，常常需要对变换器器件建立一个精确的模型，来分析半导体器件的静态特性、开关特性和功率损耗． 一些文献通过建模来评估 SiC 器件的应用效率． 本文采用 PLECS 软件对变换器的热损耗进行仿真研究． 借助 PLECS 的热模块，用户可以对电路进行损耗分析和热分析，避免了繁琐的建模和公式推导．

根据表 1 中的技术参数和厂家提供的CAS120M12BM2 的数据，使用 PLECS 搭建 15 kW 两相交错 Boost 电路损耗仿真模型，如图 5 所示．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2nyvmicmED416xPQApibLRqKrOlm7hRshtDjbGWRDhSIedVZFPfyxibZ9Q/640?wx_fmt=png&from=appmsg)

开关器件整体的功率损耗是每个开关脉冲损耗的总和． 图 6 表示了 SiC MOSFET 变换器工作在输出功率为 15 kW，开关频率为 20 kHz 时的每个脉冲下的开通、关断和传导损耗． 由图可知 SiC MOSFET 的主要损耗是导通损耗，其开关损耗非常小．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2WJHTA3SgVU9DtKB9pUtVt9XAkjIGHBParoGNQmvKWWPnOMk2JdaQcg/640?wx_fmt=png&from=appmsg)

通过计算与仿真得出变换器的效率如图 7 所示．可以看出，变换器的效率随着输出功率和工作频率的增加而减小，计算效率与仿真效率展现出了很好的一致性，相对的误差均低于 0. 5% ．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2tIIDGstph7o4WcaT03TYMdtiahwaVibcRSuM0m4M8ZWoDAMD2UxO6oAA/640?wx_fmt=png&from=appmsg)

4\. 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2M6SONmQiaCLFLFEibue8dJWUpxGkiclkm33kLbR9eGBVkqrXP0MMvhAeA/640?wx_fmt=png&from=appmsg)

为验证上述分析结果，根据表 1 中的实验参数设计了 15 kW 的两相交错式 Boost 电路原理样机，如图 8所示，其元器件参数如表 2 所示．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC21CIeSjmocuf4M1RwYSrOOyFN0dY7nXSXvfgIicJYPno7RIpK5u76WPw/640?wx_fmt=png&from=appmsg)

图 9 为 SiC 器件变换器运行在输入电压为 96 V、开关频率为 60 kHz、占空比为 0. 68 条件 下 的 输 入 电流、输出电压、输入电压和驱动电压波形图． 可以看到输出电压和电感电流的纹波非常小( 除了开关振荡部分) ，平均输出电压为 290 V，平均输入电流为 158 A，电流纹波约 3. 2 A．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2kEVtBG9oG4dZwlfNovEOTf8VJt68wRcwWWFOJJD5Gqib4xibjUwltFLA/640?wx_fmt=png&from=appmsg)

图 10 为变换器分别工作在开关频率为 20、60 和100 kHz时不同负载下的实 验效率 ． 对比 图 7 和图 10可知，由于在效率的理论计算和仿真时，未考虑开关电压电流尖峰以及温升导致导通电阻增加引起的损耗和未考虑电路导线电阻、SiC MOSFET 输出电容等损耗，以及测量误差等原因，使得变换器实验效率略低于计算和仿真效率，但实验、计算和仿真效率变化趋势一致． 从实验结果可以看出，SiC 器件变换器的运行效率高，当负载增加时，变换器效率减小，由于输出功率越大则通过开关管的电流也就越大，导致了更大的开关损耗，并且通过开关管的均方根电流也会变大导致更大的导通损耗． 此外，在输出功率为满载条件下，由于SiC MOSFET 的开关能量损耗低，且导通电阻较低仅为13 mΩ，以及 SiC 二极管几乎为零的反向恢复损耗，使变换器在100 kHz 高频工作条件下，具有 94. 5% 的效率，并且从图 11 中可知与 20 kHz 开关频率相比输入电流纹波由 8A 减小至 1. 9 A，降低约 76% ．

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2tRS6IB5W0C8ibiacsJeQuo1NI1R4Pds9DOe8huPq7AvJvkVx5H4WbRkw/640?wx_fmt=png&from=appmsg)

 应用于燃料电池汽车用大功率 DC--DC 变换器领域，不仅可高效利用燃料节约能源和成本，而且较小的电流纹波还可以提高燃料电池使用寿命． 此外，在保持电感电流纹波不变的情况下，由电感电流纹波公式可知，随着开关频率的增加，所需电感值减小，同时降低其电阻，可减小电感尺寸和损耗． 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslu2OQRX0WXWhFaeBgpKNC2ECYHxHyibcdkBqQYFC2FthcRNtwRwcAcRQSUf5TDehH872Mbibm09Yicw/640?wx_fmt=png&from=appmsg)

如图12 所示为开关频率在20 kHz和100 kHz 条件下的两个电感比较，当开关频率由 20kHz 增到 100 kHz 时，每路的电感体积由 1. 306 L 减小为 0. 78 L，降低了 40. 3% ; 电感电阻由 5. 02 mΩ 降为1. 72 mΩ，降低了 65. 7% ; 电感质量由 5. 55 kg 减小为3. 5 kg，减小了 36. 9% ，可降低整个变 换器的体积和质量．

5\. 结论

本文根据燃料电池电动汽车动力系统对 DC--DC变换器提出的工作效率高、输入输出纹波小和体积小质量轻的要求，设计了一款基于 SiC MOSFECT 开关器件的交错式 Boost 变换器实验样机，并对其性能进行理论分析和实验研究． 理论分析和实验结果表明，SiC MOSFET 的开关能量损耗低，输出功率为满载，变换器在 100 kHz 高频工作条件下，效率可达到 94. 5% ，与 20kHz 开关频率相比输入电流纹波降低约 76% ; 在保持电感电流纹波不变情况下，与 20 kHz 开关频率相比，每路电感体积降低 40. 3% ，电感电阻降低 65. 7% ，电感质量减 小 36. 9% ，可降低整个变换器的体积和质量． 所用 SiC 功率器件变换器具有导通电阻小、关断速度快、开关损耗小和转换效率高等优点，应用于燃料电池汽车用大功率 DC--DC 变换器领域，不仅可高效利用燃料节约能源和成本，而且较小的电流纹波还可以提高燃料电池使用寿命．

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsn0NofNQB8Q1VTNczQunHe5HfPwyQV7FiawDnQBubGjncgSqo2RfI7TlU46wxkvLVJibViadXOQhxQcw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsn0NofNQB8Q1VTNczQunHe57xRqPemxW5XwVs7FBlWicxNkMJhEhJJqsm8rCU8Kztl4NbFfHzHSFMw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn0NofNQB8Q1VTNczQunHe5WO9LS6XZB0V9sPH088xibJ4vJ6rMtrIlq1goXHWwazzntZjwvHpGXWg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)