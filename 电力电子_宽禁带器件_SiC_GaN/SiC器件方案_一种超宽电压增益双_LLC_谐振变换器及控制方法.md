# SiC器件方案：一种超宽电压增益双 LLC 谐振变换器及控制方法

原创 孙鑫宇 ，邓宇豪 SiC碳化硅MOS管及功率模块的应用 2024-11-29 17:18 广东

> 原文地址: [https://mp.weixin.qq.com/s/JN9m8AhV7AVs6Yac5UXlvQ](https://mp.weixin.qq.com/s/JN9m8AhV7AVs6Yac5UXlvQ)

**文章来源：**中国电机工程学报

**作者：**孙鑫宇 1，邓宇豪 1，聂江霖 1，马兰 1，舒泽亮 2\*(1．西南交通大学电气工程学院，四川省 成都市 611756；2．西南交通大学磁浮列车与技术研究所(西南交通大学)，四川省 成都市 610031)

**摘要：**为解决传统 LLC 谐振变换器在宽电压增益应用中所需开关频率范围过宽、总体效率较低等问题，文中提出一种多模式双 LLC 谐振变换器。该变换器基于半桥、全桥切换以及桥式、倍压整流切换的拓扑重构思路，以增益不同的 4种模式实现较窄频率范围内的超宽输出电压，提高变换器效率的同时通过复用开关器件来降低成本。为了实现模式间的平滑过渡，针对所提变换器设计一种脉冲宽度频率调制控制方法，并根据模式切换特性进一步优化，提高模式切换速度。

基于 SiC 开关器件，设计并搭建一台 60~450 V 输出电压、最大功率为 900 W 的实验样机，以验证所提拓扑及控制方法的可行性。

**关键词：**LLC 谐振变换器；双变压器；拓扑重构；宽电压增益；模式切换

**0. 引言**

为解决能源短缺及环境污染问题，实现可持续发展，以风力发电、光伏发电以及电动汽车为主的新能源生产及利用方式受到广泛关注。由于光伏及风力发电受环境影响，具有间歇性与波动性，而电动汽车车型多样化，充电标准不同，同时还需考虑深度耗尽电池充电问题。因此，需要开展高效率、宽增益范围 DC/DC 变换器拓扑及控制方法相关研究。

LLC 谐振变换器因其能够实现一次侧开关管的零电压开通(zero voltage switching，ZVS)和二次侧整流管的零电流关断(zero current switching，ZCS)，具有高效率、高功率密度和低电磁干扰等优点，逐渐成为宽电压范围拓扑研究的热点。然而，传统 LLC 变换器实现宽增益时励磁电感小，环流损耗大，整体效率低，同时开关频率范围过宽，不利于磁性器件的设计，因而限制了其应用范围。为了在保持高效率的同时实现 LLC 谐振变换器的宽电压调节范围，国内外专家学者已经研究了多种改进方案。

文献\[6-7\]中提出了 LLC 变换器参数的优化设计方法，一定程度上提高了效率，然而，一旦开关频率远离谐振频率，效率仍显著降低。在文献\[8-9\]中，脉宽调制(pulse width modulation，PWM)和移相调制(phase shift modulation，PSM)分别被用于替代传统脉冲频率调制(pulse frequency modulation，PFM)，将开关频率固定在谐振频率下，但不利于轻载下 ZVS 的实现。文献\[10-11\]给出两级式电路方案，其中 LLC 变换器作为直流变压器工作，通过非隔离 DC/DC 变换器实现较宽的电压范围，同时具有良好的能量双向流动性能，但随之而来的是效率的降低，增益范围难以进一步拓宽。

为了在保证效率的前提下实现更宽的电压增益，拓扑重构方法被广泛应用，该方法基于现有拓扑或适当增加器件，通过不同开关信号组合的方式，以不同增益的多种模式覆盖更宽增益范围。对于传统全桥 LLC 变换器，LLC 逆变环节可实现全桥和半桥两种工作模式，这使得其具有大于两倍的电压增益范围。同样的，二次侧整流环节通过适度增加开关管、二极管及电容，也可配置为桥式整流、倍压整流以及多倍压整流多种模式。对于三电平电路，往往通过改变谐振腔输入电平来拓宽增益。为了避免拓宽增益同时造成开关器件数目过多，文献\[19\]增加了一组 LLC 谐振腔及变压器，以单半桥、单全桥以及双全桥 LLC 等 3 种模式组合出了 6 倍的电压增益范围，同时通过桥臂复用方式，减少了开关器件数量，但由于开关管寄生电容的影响，单全桥 LLC 模式下非工作谐振腔存在幅值较大的异常电流，降低了变换器效率。文献\[20\]基于输入并联输出串联结构，避免了寄生电容对正常工作模式造成影响，同时考虑了通过双变压器参数非对称设计来缩小模式间的增益差距，提高变换器效率，但其开关器件及模式数量仍存在优化空间。

本文在上述文献的基础上，提出一种超宽增益双 LLC 谐振变换器，该变换器通过 4 种不同增益模式组合出超宽的电压增益范围，对开关管及二极管数量进行优化，同时相邻模式增益差距更小，开关频率范围较窄。基于 PWM-PFM 控制方法，针对模式切换进行优化，使正、反向均能实现快速平滑的切换。考虑到碳化硅(silicon carbide，SiC)器件开关速度快、导通损耗小、耐热和导热性能强以及阻断电压高，具有高效率及高可靠性，最终基于 SiC 开关器件搭建一台 60~450 V 输出电压，最大功率为900 W 的实验样机，实验结果表明，所提双 LLC 变换器在超宽输出电压范围内具有较高总体效率。

**1 .超宽增益双 LLC 谐振变换器**

**1.1 拓扑结构**

超宽增益双 LLC 谐振变换器拓扑如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gz3jPMV47mX3icnmTnSPWmmECBBLtR0RsCfTMc0ZXa7I1xSDzmUavDdQ/640?wx_fmt=png&from=appmsg)

在变换器一次侧，Cin 为输入电容，开关管 S1—S4构成全桥逆变电路，由谐振电感 Lr1、Lr2，谐振电容 Cr1、Cr2 和励磁电感 Lm1、Lm2 构成的谐振腔 1 和2 共用 S1、S2桥臂，分别连接全桥与半桥逆变电路；T1、T2 为高频变压器，其一、二次侧匝数比分别为n1、n2；在变换器二次侧，隔直电容 Cs1、Cs2，二极管 D1—D4 和开关管 S5，构成两组等效串联的混合整流电路；Co 为输出电容，Ro 为负载。

**1.2 工作原理**

所提双 LLC 变换器在逆变电路和整流电路中均具有主动开关，以便于组合出不同增益的多种模式，同时变压器匝数比不同，有利于合理分配不同模式下的增益范围以优化变换器性能。通过配置不同的开关调制方案，所提变换器具有 4 种工作模式，根据工作谐振腔个数又可分为单 LLC 与双 LLC 两类，本文将以增益由低到高顺序进行介绍。

**1.2.1 单 LLC 模式**

当一次侧开关管 S1 恒定导通，S2 恒定关断，S3 和 S4 以 0.5 占空比互补导通时，ab 端口电压为单极性方波，谐振腔 1 为半桥 LLC；bc 端口电压等于输入电压，谐振腔 2 输入电压交流分量近似为零，变压器 T2 不存在一次侧向二次侧的能量传递，若忽略整流二极管寄生电容，则谐振腔 1 对应整流电流将完全流过整流管 D4，谐振腔 2 处于理想的非工作状态。此时通过改变谐振腔 1 整流电路得到了半桥LLC 桥式整流(half-bridge LLC with full-bridge rectifier，HB-FBR)与半桥 LLC 倍压整流(half-bridge LLC with voltage-doubler rectifier，HB-VDR)模式，等效拓扑如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gc7Pl5KxNVhBnEKxjTgoOdeTfFiaEQDezlRTGneHVXlKsZcy5ibxE4dzg/640?wx_fmt=png&from=appmsg)

当变换器工作在谐振频率下时，图 3(a)为HB-FBR 模式工作波形，此时 S5 作为整流管工作，为降低损耗，其驱动信号与 S3 相同，工作原理与传统 LLC 变换器相近。图 3(b)为 HB-VDR 模式工作波形，此时 S5 恒定导通，二极管 D3 被旁路。忽略死区时间，HB-VDR 模式主要具有两个工作模态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gzGOT9rGicoxLX9q6XyYeIgGo0SlIxqR1xMibzQBYU3hOSOwWzuAq5DjQ/640?wx_fmt=png&from=appmsg)

在\[ta, tb\]时段，如图 4(a)所示，S3 导通，谐振腔 1 端口电压 vab 为零，变压器 T1二次侧绕组与隔直电容Cs1 共同为输出电容及负载提供能量。在\[tb, tc\]时段，如图 4(b)所示，S4 导通，谐振腔 1 输入端口电压 vab为Vin，变压器 T1 二次侧绕组为隔直电容 Cs1 充电，由输出电容为负载提供能量。由于 HB-VDR 模式中T1传递的能量在半周期内为Cs1充电，Cs1足够大时，其电压近似为输出电压一半，整流输出电流 irec 为半周期正弦波，二极管电流应力相对较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gDNyJzo8bl49IBNOic8H1qaMdNsUYfOzYXNicklznDmJwMmUzCm6surBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gD9HE1PiaFXdt9K5rHj1mQYA7HP6PDYYuOyQDTpupZWicHrjPCoicVzI3w/640?wx_fmt=png&from=appmsg)

**1.2.2 双 LLC 模式**

双 LLC 模式下 S5 恒定导通，变换器二次侧为共用二极管 D1 的倍压整流，对应的等效拓扑如图 5所示。当 S3恒定导通，S4 恒定关断，S1 和 S2 以 0.5占空比互补导通时，等效为两个半桥 LLC 输入并联，便得到双半桥 LLC 倍压整流(dual half-bridge LLC with voltage-doubler rectifier，DHB-VDR)模式；而当 S1、S4和 S2、S3 以 0.5 的占空比互补导通，为全桥 LLC 与半桥 LLC 输入并联，得到全桥、半桥LLC 倍压整流(full-bridge and half-bridge LLC with voltage-doubler rectifier，FHB-VDR)模式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gQp506nhHkq7uibfayMacPbhwHiaeFIvZUq4AscArvnT5wmr5wjef1LGw/640?wx_fmt=png&from=appmsg)

DHB-VDR 和 FHB-VDR 两种模式在谐振频率下主要工作波形如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gSibcO1v2icHGmC2icAYucPXlibibk9LyP1mmLKoC4EazjtPSHn6Uva9jpZw/640?wx_fmt=png&from=appmsg)

由于其差异仅在于谐振腔 1 逆变电路不同，故针对 FHB-VDR 模式进行模态分析。在\[ta, tb\]时段，如图 7(a)所示，S2、S3 导通，此时变压器 T1、T2 二次侧绕组与隔直电容 Cs1、Cs2 共同为输出电容及负载提供能量；在\[tb, tc\]时段，如图 7(b)所示，S1、S4 导通，此时变压器 T1、T2二次侧绕组分别为各自连接的隔直电容 Cs1、Cs2 充电。根据模态分析结果，谐振腔 1 和 2 整流电路串联工作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9guvr2eicHsHtx2I3KFhk7DVMX2xlMDicRAPEaKsaZ7YJZrJmsoSnwDIYg/640?wx_fmt=png&from=appmsg)

**2 .变换器特性分析与参数设计**

**2.1 电压增益特性**

所提变换器在所有模式下的谐振频率均为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gXPibH3y2dKuiaqwKLMnCKdibrkStSqlMM4ia4iaK5Mb0DnL52lLLk3wiciaDw/640?wx_fmt=png&from=appmsg)

假设二次侧隔直电容的容值足够大，其电压可视为恒定值 VCs，当一次侧为半桥逆变时，LLC 变换器的基波近似(first harmonic approximation，FHA)等效电路如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gJjLoSzdDeYAHyfbxa2DfhHJMvnLibqEKnz4ktM1AgMzNb7HKUN6Xn3w/640?wx_fmt=png&from=appmsg)

若谐振腔 1 对应桥式整流，而谐振腔 2 对应倍压整流，其归一化增益分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gbiay9Am0fJlqumLogMAO76Z9nLVKDWtM486kUUlRssiaOGBhZv0oe2wA/640?wx_fmt=png&from=appmsg)

在单 LLC 模式中，仅谐振腔 1 工作，其等效交流电阻 Re1 消耗能量近似等于负载消耗能量，故：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gY5ZkJRPiapNngodPTcJgGGwLZRxazGhECnkchp8SE2S0w7YgvibDfRCg/640?wx_fmt=png&from=appmsg)

所提变换器 HB-FBR 模式增益与文献\[19\]中半桥单 LLC 模式一致，对比 HB-VDR 模式与全桥单LLC 模式，仅品质因数表达式存在差异。如图 9所示，在相同参数及负载条件下，HB-VDR 模式在过谐振时增益更低，因此所提变换器开关频率范围更窄。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gtP9vo2pEaJLWAyRerrg7IHgRI96Ivjzs1iaQaVFdwziaBBXj1n3RwwJA/640?wx_fmt=png&from=appmsg)

双LLC 模式中谐振腔1 和2 二次侧均为倍压整流，其等效交流电阻表达式分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gvg0kCK7AXC4YYiamF2hCVGrrm4f9FIosJpHLuVJkicX8Nk8veUnRU9ag/640?wx_fmt=png&from=appmsg)

式中 Ro1、Ro2 为两个谐振腔分别承担的负载，可结合式(4)计算得到。根据式(2)—(7)可以初步绘制所提变换器在较为理想条件下的整体增益示意图，如图 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gDr8f3Q08zrpUCMpqARoEj0MuN4AyII2thJyNzRb7HRdiac5kkwNt2uA/640?wx_fmt=png&from=appmsg)

**2.2 ZVS 特性**

根据励磁电感两端电压得到单 LLC 模式下励磁电流 iLm1 峰值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gFTc92UBfG4jgUGy1ru5MqleZF0bV8WVtkp6PXgu43gDghGCs1x0QRg/640?wx_fmt=png&from=appmsg)

为实现一次侧开关管的 ZVS，谐振电流必须在死区时间 td内完成开关管等效输出电容 Coss 的充放电，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gA7mATkzWvCxg2bLaNDhicBkwcjQC3fo16B08Mib7fcq0PZXllwO0PTNQ/640?wx_fmt=png&from=appmsg)

定义单 LLC 模式最小增益 Mmin 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gtrbzvpMcvKXcGT9fv0PxQAMiaVgItONkibG9gbSs3bj43I4sJA98M4iaw/640?wx_fmt=png&from=appmsg)

在双 LLC 模式中，对于共用桥臂，其电流为谐振腔 1、2 电流之和，而对于非共用桥臂，全桥 LLC相对于半桥励磁电流峰值更大，两种情况均更易于实现ZVS，因此Lm2无特定大小限制，Lm1满足式(11)即可保证一次侧开关管 ZVS 实现。对于 HB-FBR模式中二次侧开关管 S5，死区时间内变压器 T1 二次侧端口电压的变化将促使 S5 等效输出电容 Coss进行充放电，因此其同样能够实现 ZVS。

**2.3 变换器参数设计**

本文拟设计一台参数如表 1 所示样机，为满足最小输出电压要求，令 HB-FBR 模式谐振频率对应最小输出电压 60 V，则变压器 T1 匝数比为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gjOLBSKRZMU7PDD3Q7icwulVw14BqqLtdBDx5kHNiaTYNzk1ic7K7RkicUg/640?wx_fmt=png&from=appmsg)

为使 HB-VDR、DHB-VDR 和 FHB-VDR 模式增益范围较为均匀地分布，T2 匝数比设计为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gkGvsDy9bZ44DA1DNIwEBXUB8tfD2aLYW8VoJrsk8C2P74KMsEcULeA/640?wx_fmt=png&from=appmsg)

**2.3.1 谐振腔参数设计**

由式(4)可知，HB-FBR 与 HB-VDR 模式之间增益跨度最大，因此，主要针对这两种模式进行设计。为避免HB-FBR模式过高的增益使得环流损耗增加及 HB-VDR 模式增益过低影响软开关性能，令 2 A输出电流时的增益交点为 0.84。

为实现 ZVS，需要保证最小开关频率时的谐振腔输入阻抗为感性，其中 HB-FBR 模式中谐振腔 1输入阻抗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gmOjgbibcmFIBgiaFOJM8WFhRgZDcbeC0xs8rQx52pKMDvHuKBl8SgL0Q/640?wx_fmt=png&from=appmsg)

令式(14)虚部为零，得到纯阻性开关频率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gqPTVFqgHU6YkhBPpTWBoAcSu01SuK68qUweRRgZnwlShusGL4lt4Mw/640?wx_fmt=png&from=appmsg)

如图 11 所示，根据式(16)可得到 HB-FBR 模式在增益交点处的 k1和 Q1并初步计算谐振腔 1 参数。由于谐振腔 2 承担功率更小且对变换器性能影响较小，为便于设计，两组谐振腔取相同参数。考虑到HB-VDR 模式品质因数增大，谐振腔更加容易进入容性区而丧失 ZVS 特性，同时基波分析法在偏离谐振频率时存在一定误差，最终借助 Matlab/Simulink软件验证变换器 ZVS 实现，并调整相邻模式增益裕度得到 Lr1  Lr2  84 H，Cr1 Cr2  12.4 nF，Lm1 Lm2  330 H。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gmeARsmuicGNmFWNbxRrItzJNyr0C3XRpmhAvMQOlguSGibJx4plsMg6Q/640?wx_fmt=png&from=appmsg)

**2.3.2 隔直电容设计**

在设计二次侧隔直电容时，主要依据两点限制条件，首先需要满足电压纹波要求，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9g0E84BWKpK24bibicicGdBvaP361zP7E14PkEhia4jjiallVKID6NLcRuLzg/640?wx_fmt=png&from=appmsg)

本文限制纹波电压V 不超过输出电压的 3%并取最小输出电压进行计算。其次，当考虑二次侧隔直电容时，基波等效模型如图 12 所示，若隔直电容较小，将对输出阻抗的幅值和相位产生显著影响。隔直电容取值一般为微法级别，由于其折算到一次侧阻抗远小于励磁电感阻抗和等效交流电阻，可将其视为与谐振电容串联，造成谐振频率和品质因数的增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9g20n3p7yNibfia0IZM9ZW6LLuajPzCXfBial5Td0UGulEJ6SZR2micibWb1g/640?wx_fmt=png&from=appmsg)

但隔直电容过大也会影响变换器动态性能，以HB-FBR 切换 HB-VDR 模式为例，HB-FBR 模式在图 3(a)中\[tb, tc\]时段，谐振腔 1 中有如下关系

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gOB8OKXScLyzhUHiaofS55VvEg2fWCJQAuJmdFpW4UPFdY2LcsNXIDPg/640?wx_fmt=png&from=appmsg)

切换时式(19)中励磁电感电压将由 n1Vo突变为Cs1 电压，若 Cs1 过大造成充电速度过慢，将导致明显的电流过冲以及励磁电流偏置。综合考虑以上因素，本文限制隔直电容对谐振频率的影响小于 3%。在满足以上要求并留有一定裕量的前提下，隔直电容取值为 6.6 F。

**3 .平滑切换控制方法**

为实现相邻模式间平滑且快速的切换，本文针对宽输出应用设计了一种 PWM-PFM 混合控制方法，如图 13 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9g4yMfq1mTXEEBoU92nfkR3f8EcS47vibvVKJhDvqdHlDPvbxl1oSxWAQ/640?wx_fmt=png&from=appmsg)

正向切换过程如图 14 所示，变压器励磁电感电压与电流取关联参考方向，电压上正下负。切换时开关频率瞬间增大，占空比切换存在过渡过程，为便于分析，过渡过程缩短为 4 个周期。HB-FBR模式向 HB-VDR 模式切换如图 14(a)所示，t0—t1时，由于 S5 占空比 d1 接近 0.5，Cs1 充电时间即 vLm1≈0的持续时间较短，因此 t1 时刻 iLr1 较小。t1—t2 时Cs1 充电电流迅速降为零后进入三元件谐振状态。t2—t3 时由于 d1 增大速度过快，而 Cs1电压较低，因此 t3 时刻 iLr1与 irec均出现过冲。t3—t4时，由于 Cs1电压仍小于稳态值，充电电流经 D3 续流。t4—t6状态与先前分析类似，但由于 Cs1 电压升高，虽然 d1增大但 iLr1 峰值减小，验证了占空比过渡过程的必要性。t6—t7 时，由于 Cs1 电压超过稳态值，Cs1 开始有放电状态，励磁电流偏置慢慢减小并在数周期后达到稳态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gTcbXTEvOs1L8Z7L1gbTIWZ8yIkUBooe8MFmnWOxbr32EzHMfxiaTAyQ/640?wx_fmt=png&from=appmsg)

HB-VDR 向 DHB-VDR 切换如图 14(b)所示，为正向切换中的特例，S3 和 S4 占空比直接切换，逐渐改变 S1 和 S2 占空比。t0—t1 时无开关管动作，保持三元件谐振状态，t1—t2 时 S2 导通，Cs1 的放电导致 Cs2 放电，使谐振腔 2 增益不匹配度加剧，t0 时刻直接改变 S3 和 S4 占空比的意义即在于减小该时段放电电流。DHB-VDR 向 FHB-VDR 切换如图 14(c)所示。t0 时 S4 导通，vab 突变为Vin 使 iLr1反向峰值增大是造成电流过冲的主要原因，可以看出 t1 时刻 S4关断时 iLr1 下降斜率明显降低。

对于反向切换，由于切换前电流幅值小，隔直电容电压已较高等原因，占空比直接切换也不会导致过大的瞬态电流。考虑到 PI 调节速度较慢，因此切换时线性增大分频系数 N，可以实现频率由快到慢地减小，其变化速度与增益曲线契合度较高因而可以保证较快的切换速度。

为兼顾平滑切换与电压调节，正反向切换策略的目标频率均设置为略高于切换后的稳态频率，通过 PI 调节至稳态频率。

**4 .实验验证**

**4.1 实验平台**

为了验证所提双 LLC 变换器工作原理、参数设计等相关理论分析的正确性，搭建了一台输入380 V，输出 60~450 V，最大功率为 900 W 的实验样机，如图 15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gtTTbkWWiaTveMibjciaUKQU0Sy2ibn7KJq14Hd3TUICJ5XqulZfSficd7Vg/640?wx_fmt=png&from=appmsg)

主电路中 MOSFET 开关管选用 P3M06060K3，其 Coss为 162 pF，整流二极管选用 STPSC1006；谐振电感 84 H，励磁电感 330 H，磁芯材料为 3C95；输出电容为 200 F 电解电容，谐振电容与隔直电容分别为 12.4 nF 及 6.6 F 薄膜电容。控制器采用 EP3C25E144I7N 型号 FPGA，基于 Verilog HDL 实现变换器控制。

**4.2 实验结果**

在 IT8906A-1200-240 直流电子负载恒定 2 A 电流条件下对所提变换器稳态性能进行测试，单 LLC模式下，端口电压 vab、vbc，谐振电流 iLr1、iLr2，S3、S5 漏源极电压 vds3、vds5，S5 栅源极电压 vgs5，整流输出电流 irec 以及 T1 二次侧电流 is1 波形如图 16、17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gicvfk8C8XN8NrMDw4ceAFB1RQuSaq59dckiacOhqHEm4ZoORcrhzzk8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9ghntj1afE7hutfXibMXqQ1uXd2RQ9yOiaflBUpFIW288L9ibiatFw8NqRjA/640?wx_fmt=png&from=appmsg)

图 16 给出了 HB-FBR 模式输出电压为 60、105 V 工况，图 17 给出了 HB-VDR 模式输出电压为 101、185 V 工况。理想状态下仅谐振腔 1 工作，但由于低压时整流管寄生电容较大，造成整流电流些微畸变的同时使 T2 二次侧电压波动，因此谐振腔2 中存在微弱电流，但其对增益及效率影响较小。由 vds3、vgs3和 vds5、vgs5波形可知单 LLC 模式在其电压范围内均能实现所有开关管的 ZVS，由 irec、is1波形可以看出，次谐振状态下二次侧整流管 ZCS实现。

双 LLC 工作状态下，端口电压 vab、vbc，谐振电流 iLr1、iLr2，S1、S3 漏源极电压 vds1、vds3，S1、S3 栅源极电压 vgs1、vgs3，整流输出电流 irec以及 T2二次侧电流 is2 波形如图 18、19 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gI5j78mp21UQgEbGNTUH6EXVKKhR8ibQx4HFny8Qgn7iaZqHqr8WXznxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9g5LnHHzB54B6FncgFOUibqo2xeJEzHV6klHu1wAiaCCowK2vKFGiaiaV0CQ/640?wx_fmt=png&from=appmsg)

图 18 给出了 DHB-VDR 模式输出电压为 174、305 V 工况，图 19 给出了 FHB-VDR 模式输出电压为 295、450 V 工况。在 DHB-VDR 模式中，由 vab、vbc波形可知，谐振腔 1、2 均工作在半桥状态。由vds1、vgs1 波形可知，一次侧开关管 ZVS 实现。在FHB-VDR 模式中，谐振腔 1 工作在全桥状态，iLr1相对 iLr2 占比增大，由非共用桥臂 S3 的 vds3、vgs3波形可知，一次侧开关管 ZVS 实现。由 irec、is2波形可以看出，双 LLC 模式在次谐振状态下二次侧整流管 ZCS 实现。稳态实验波形与理论分析一致。

在直流电子负载的电阻模式下对所提变换器动态性能进行测试。图 20 在最大输出电压、电流对应负载(225 )条件下，对所提变换器输出电压范围进行了验证，输出电压参考值由 60 V 逐级增大到450 V，升压过程中当开关频率达到下限时进行模式切换，切换后频率增大，电流幅值降低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9ghURwfYgJSicAJYAuJeuPQzCOthAKeLoiaATfkw3PhFkYOMU0HIq0ODYQ/640?wx_fmt=png&from=appmsg)

图21给出了输出电流2 A时模式切换的动态波形。观察整体波形可以看出，正向和反向切换时出电压波动较小，切换速度较快，不会产生超过电路正常工作电流的冲击。观察过渡细节波形可以看出，HB-FBR 向 HB-VDR 过渡细节与图 14(a)中t2—t4 相对应，HB-VDR 向 HB-FBR 切换后 Cs1 快速放电。HB-VDR 向 DHB-VDR 过渡细节与图 14(b)中 t1—t3 相对应，DHB-VDR 向 HB-VDR 切换时 Cs2放电一周期之后一直进行 Cs1 的充电。DHB-VDR向 FHB-VDR 过渡细节与图 14(c)中 t2—t4相对应，FHB-VDR 向 DHB-VDR 切换时先进行 Cs2 的充电，再进行 Cs1 的放电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gqZtOf7g4RMrsu2oSr1FAl4B7ibwEJaAZhxMnbgvIooeYmcT5gkXk42Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gxLMh1ibc9NMX7vfAhF5DaYMj6barloic1C1Zhhd1ULWY2iaypWHJLIMSA/640?wx_fmt=png&from=appmsg)

**4.3 效率分析**

最终测量得到变换器在60~450 V/2 A输出时的效率曲线，峰值效率为 96.7%，并根据损耗模型\[22\]得到损耗分布，如图 22 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gjATIGm3tqMQoHrfoddbt5hRmdvmnoUD3HOwVYRRLPrg5xISBabm1Zw/640?wx_fmt=png&from=appmsg)

HB-FBR 模式 60 V 输出时，输出电压低，二极管损耗占比大。HB-VDR 模式 175 V 输出时，一次侧电流增大，变压器端口电压升高，故开关管、电感和变压器损耗占比增加。单 LLC 模式下 D4的存在增大了二极管损耗。DHB-VDR 模式 175 V 输出时，由于未实现 ZCS，二极管和开关管关断损耗增大。FHB-VDR 模式 450 V 输出时，由于双变压器工作且端口电压高，变压器损耗显著增大。

将所提变换器与近两年宽范围 LLC 变换器进行对比，结果如表 2 所示，可以看出，所提变换器在增益范围、功率密度及效率等方面具有较为均衡的表现。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslhhaIYMUQM9px9ClW54y9gSYZKpg3Y3zdg1WHB5nia797an5ia4SVXUyMh5h7h53l8Bwe9T36mxKOQ/640?wx_fmt=png&from=appmsg)

**5 .结论**

本文提出了一种超宽电压增益双 LLC 谐振变换器及控制方法，并对其工作原理和特性进行了理论分析及实验验证，研究结果表明：

1）基于拓扑重构思想，所提变换器使用较少的开关器件，通过多模式组合方式，实现了较窄频率范围内 7.5 倍的超宽电压增益。

2）通过参数设计，能够灵活地配置变换器各模式增益范围，在 60~450 V 超宽输出电压范围内具有较高的总体效率，峰值效率为 96.7%。

3）结合优化的 PWM-PFM 控制方法，所提变换器能够实现模式间快速平滑的切换，以便于适应不同的应用场合。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)