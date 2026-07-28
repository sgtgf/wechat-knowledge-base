# 基于SiC器件车载双向全桥CLLC谐振变换器设计及其控制方法研究

原创 王 涛，罗文广 SiC碳化硅MOS管及功率模块的应用 2024-11-22 18:22 广东

> 原文地址: [https://mp.weixin.qq.com/s/PE9sch8jto-ZdnVL24hvfQ](https://mp.weixin.qq.com/s/PE9sch8jto-ZdnVL24hvfQ)

**文章来源：**广西科技大学学报

**作者：**王 涛1，2，罗文广\*1，2(1.广西科技大学 电气与信息工程学院，广西 柳州 545006；2.广西汽车零部件与整车技术重点实验室（广西科技大学），广西 柳州 545006）

**摘 要：**针对传统的控制策略动态性能不足，电压达到稳态值较慢，受到负载切换扰动较大及SiC mosfet反向导通压降较大等缺点，提出了一种对CLLC谐振变换器的自抗扰控制策略，在无需对CLLC谐振变换器精确建模的情况下，建立扩张状态观测器和设计PD控制器，将副边设计为有源整流桥，以提升动态响应性能，降低超调量，减小超调时间，减少谐波含量，在不增加额外器件的情况下减小损耗，进一步提升变换器的功率密度，降低了二极管压降对于整流电压的不利影响，对输出电压进行参数优化.设计了一个输入为350 V，输出为300 V，功率3 kW的双向全桥CLLC谐振变换器，以罗姆公司sct3060al-e SiC mosfet的数据为例，运用该方法通过simu‐link对变换器进行正向、反向仿真验证.结果表明，与传统控制策略对比仿真，其超调量从3.3%降低至1.6%，且超调时间更短，系统谐波含量更少.验证了对于CLLC谐振变换器采用自抗扰控制相比于传统控制策略具有超调量小、调节时间短、输出电能质量好的优点.

**关键词：**CLLC谐振变换器；自抗扰控制；SiC器件；软开关

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjQQ3uVxgCXibauEVqhfVVEMCU1NKgQEFT6yCvShpiaylLVIHBWbric8bQA/640?wx_fmt=jpeg&from=appmsg)

**0. 引言**

随着科技的发展，在电力电子领域，对功率变换器的功率密度、转换效率、动态性能等要求不断提高。目前将新兴的宽禁带半导体材料应用于功率变换器成为热点话题.宽禁带半导体材料优越的特性为电力电子技术发展带来了新的提升.相较于硅材料，碳化硅材料具有更高的电子饱和速度、更低的功率器件功率损耗，且碳化硅材料的单位面积载流能力强，故器件的功率密度得以提高.文献\[6\]对半桥LLC拓扑选用碳化硅器件进行参数设计，实现了软开关，为SiC器件在LLC变换器应用中提供了理论分析。但其设计的开关谐振频率为40 kHz，对于SiC mosfet 来说设计较为保守 . 文献\[7\]将SiC器件应用于混合动力汽车和电动汽车上，大幅降低油耗，扩大驾驶舱空间.文献\[8\]提出一种SiC三相逆变器热设计方法，分析了散热器热阻值几何结构、特性参数的关系，并验证该热设计方法的合理性与正确性，但没有考虑到SiC mosfet的压降问题。

文献\[9-11\]介绍了软开关的原理，将软开关与传统的硬开关作对比设计，突出了软开关能够降低开关损耗，提升转换效率的特点.但文中的控制方式为开环控制，无自动纠偏能力.文献\[12-13\]引入高频软开关技术，可在宽泛的输入电压范围内可靠工作，电源开关以半桥的形式连接，但该拓扑结构电压应力较大，不适用于电压等级较高的场合.文献\[14\]中相较于半桥功率变换器，全桥功率变换器开关管应力仅为其一半，因此，能实现较大功率的变换.其中双向CLLC全桥谐振变换器相较于普通LLC谐振变换器，实现双向隔直，避免因电压方波不对称导致变压器偏磁饱和的问题，但其采用的传统 PI 控制策略，当负载切换扰动较大时，其响应速度比较慢、波动较大。

对于车载双向 DC/DC 变换器而言，当汽车行驶工况改变时，变换器负载存在突变的情况，母线电压出现较大波动.因此，车用双向DC/DC变换器除了安全、可靠等常规要求外，还要求具备更高的动态响应性能.基于上述问题，本文针对CLLC谐振变换器设计了自抗扰控制策略，通过仿真对比传统控制策略验证了该控制策略的有效性，并针对CLLC变换器特点和 SiC mosfet反向导通压降较大的特性，将副边设计为有源整流桥，在不增加额外器件的情况下减小损耗，进一步提升变换器的功率密度。

**1. 基于SiC器件的车载双向全桥CLLC谐振变换器设计**

**1.1 拓扑结构**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjZBia4FEwRxrcNDrFU6tx5lnspVicBjFEBJ7iabv1DXdlibibD9HrXGScB6Q/640?wx_fmt=png&from=appmsg)

双向全桥CLLC谐振变换器的拓扑结构如图1所示，包含充电模式和放电模式.双向CLLC谐振变换器由两个全桥电路和谐振网络组成，其中 S1—S4 和 S5—S8 构成两个全桥电路，Lr1 、Lr2、Lm、Cr1 与 Cr2 构成谐振网络，且 Cr1 和 Cr2 起隔直作用，变压器起电气隔离作用 . 充电模式时，S1、S4 与S2、S3 加占空比不超过 50% 的互补的驱动信号，S5—S8 充当二极管进行整流；放电模式时，S5、S8与 S6、S7加占空比不超过50%的互补的驱动信号，S1—S4进行整流.

**1.2 CLLC电压增益特性分析**

与传统LLC谐振变换器不同，CLLC谐振变换器增加了原副边谐振电容的比值h和原副边谐振电感的比值 g. 传统 LLC 变换器谐振点电压增益为 1.但对于CLLC谐振变换器来说，随着g、h参数的变化，谐振点的电压增益也发生改变，因此，在设计时需要明确它们的关系。

CLLC谐振变换器的正向电压增益表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj2Sq7uJv3Zthn9TLv25QMwEGwgEwsDFGY8UI0k4tZSUhM5PAp6mGQtg/640?wx_fmt=png&from=appmsg)

其中：谐振电路品质因数![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjs7iaWSKBsa8In7Bviao64BNDia98v1YxBWW3RAbCL9qge8zTDHgibS4OJw/640?wx_fmt=png&from=appmsg)，Req为一次侧交流等效负载；励磁电感与谐振电感的比值k \= Lm /Lr；副边谐振电感与原边谐振电感的比值g \= L′r2/Lr1；副边谐振电容与原边谐振电容的比值h \= C'r2 /Cr1；谐振频率![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjFJJricbwICsSV6ibkns6BzG3GKN8XC4ObW2U2g4sWkktZPHwV6vX6ZNQ/640?wx_fmt=png&from=appmsg)；归一化频率fn \= fs/fr，fs为实际频率。

CLLC谐振变换器在谐振频率点电压增益表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjibRn39iaiaqR1z9j8q4e7e9CnqotuIznJj3yrhVF6AEo85dxwQ0t6KVbw/640?wx_fmt=png&from=appmsg)

谐振点电压增益与g、h关系图如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjxd4UExhxAG7zW2SicwEZnqzGtg0Fiaicf0FGibu9qpwooh2qWSLMaRUdFA/640?wx_fmt=png&from=appmsg)

由图2与式（2）可知，若要保证CLLC变换器谐振点电压增益始终为1，则电感比值g和电容比值h需要满足 gh \= 1. 除了考虑正向电压增益，还需考虑反向电压增益.为了简化设计步骤，设置变换器正反向运行的增益一致，取 g \= h \= 1。

则正向电压增益表达可简化为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjia7xicboqeLPXanicLc0CEJCxeUYZCJ4CzeUmjnR0RnmCDvUgXjTcEByg/640?wx_fmt=png&from=appmsg)

**1.3 软开关设计**

**1.3.1 死区时间和Lm的关系**

CLLC谐振变换器工作在感性区域时，能够实现原边开关管的零电压开通（ZVS）.在ZVS过程中，寄生电容需在死区时间进行完全充放电，才能确保谐振变换器原边开关实现ZVS.因此，需要分析这些参数的影响.在死区时间内，谐振电流等于励磁电流的峰值，而励磁电流的峰值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjHRGUWyg2HBYibPNk6WyuKMQxcH9p7Qg1EeGgwEP5uiaF2ZaoV6SvxbeQ/640?wx_fmt=png&from=appmsg)

死区时间内，励磁电流峰值需满足对输出电容完全充放电，则可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjj8TeSS1lTLdooSYvPbuPJRfXvicUDJSAFwCZtguIqKEokZ7eT9qKtFw/640?wx_fmt=png&from=appmsg)

因此，将式（4）代入式（5）可得满足 ZVS 的励磁电感的最大值，故Lm的取值范围为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjFf0LmFC9jicCaD6nnOfa6qVUt7Y5reyuY7gaklCxicSOwbSt9oNbQCiaw/640?wx_fmt=png&from=appmsg)

其中：n为变压器原副边匝比；Vin为输入电压；VO为输出电压；tdead 为死区时间；COSS 为开关管的输出电容；fs\_max为开关频率最大值。

**1.3.2  k值限定条件**

k 值、Q 值范围的选取对于 CLLC 谐振变换器的设计至关重要，为了满足设计需求，取值应满足以下条件：

若使变换器在全负载范围内都满足最小电压增益，则处于空载时的最大频率点电压增益需满足工作时所需的最小电压增益.当Q \=0时变换器空载，将Q \=0代入正向电压增益表达式，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj8ruwpxUNQSb81Goelsa8ZJ14EkDB216hmJ93KWScGoicOm4oGboCefg/640?wx_fmt=png&from=appmsg)

其中：kmax 为 k 的最大值；Mmin 为电压增益的最小值；fn\_max为归一化频率最大值.可求出k值的范围，再根据变换器要求选取合适的k值。

**1.3.3 Q值限定条件**

在设计Q值时需要保证在满载的情况下变换器的最小电压增益满足工作时所需的最大电压增益，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjicYAhWa9NyrufB0QMicBBxhm5eumG4ORx3seiaMt5AQMAHAF921ZfMkXA/640?wx_fmt=png&from=appmsg)

谐振变换器在该谐振频率处的电压增益要大于变换器所需的最大增益值，将式（8）代入式（3）得增益表达式的最大品质因数Qmax为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjxWAcmogGcajUvibNzNF03kANNicsdJbiczHrEMKXccJLTqXtINvaIKdgQ/640?wx_fmt=png&from=appmsg)

其中：Mmax 为电压增益的最大值 . 得出 Q 值范围，再根据变换器要求选取合适的Q值。

**1.4 谐振变换器参数设计**

全桥CLLC谐振变换器参数设计方法较多，但都比较复杂.本文优化参数设计方案，减少了不必要的构图与参数计算，方法简便，流程清晰。

1）变换器设计规格

全桥CLLC谐振变换器的设计参数如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vja0VZfo9Vt4gMM6miaaObibCqqEnuXxLpf2ODgxQsTCXd1O9nIac4nCIA/640?wx_fmt=png&from=appmsg)

2）参数设计

变压器匝比：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjVTkWOe7vwocjur2IJuQPrPEZztdia0XsCYMPu4ZpopWKLWR5nG1BUkw/640?wx_fmt=png&from=appmsg)

其中：Vin为变换器额定输入电压；Vout为变换器额定输出电压。

变换器最大最小增益：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjwGtA3qKvvDp3Mxiap9BNrlYOwpE0UZuX6SVlqkeQg8UxmibvgWpLKVMQ/640?wx_fmt=png&from=appmsg)

其中：Vout\_min为变换器输出电压最小值；Vin\_min为变换器输入电压最小值；Vout\_max为变换器输出电压最大值；Vin\_max为变换器输入电压最大值。

励磁电感设计：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjwMe7kjO5ch2SpwVicxGuxJQ6AiadLA9OdUJql3hvbmeRWG46d0af2NNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjiadtOEacab7AJpibXspicg2QoXH09o8WIA9CrsD8RAGdC5cssT6ZticbZg/640?wx_fmt=png&from=appmsg)

其中：po为输出功率.根据以上的参数设计可画出电压增益曲线，如图3所示.通过该增益曲线验证了设计的谐振参数满足 Mmax\=1.249、 Mmin\=0.874 的增益范围，空载和满载情况都工作于感性区，满足软开关要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjXKZBk8kqWgU2OHDywGGEUqn7spzuAMn3bnyNxkoWyczrUDKFC4XOCQ/640?wx_fmt=png&from=appmsg)

**1.5 基于SiC mosfet有源同步整流桥设计**

Mosfet 在无驱动时，反向导通压降比较大，SiC mosfet 其无源导通损耗也较大 . 以罗姆公司sct3060al-e SiC mosfet 为例，其二极管导通压降达到 3.2 V. 当有驱动时反向导通与正向导通相似 . 为了实现 DC/DC 变换器的能量双向流动，其副边需进行整流设计 . 有源整流、无源整流电压波形如图4—图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjCBic4Cp3hjSSALOtII8ZYplREzR3KvibyLIdmKYYeNAuQcomfzQ3cCVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjLmy9ibPBicdXAdeNvJAibpuJ7W3Yq4XWqiaWSfPjnYQlFAG7kjmpqkdIBQ/640?wx_fmt=png&from=appmsg)

由图 4、图 5 可知：采用 SiC mosfet 的无源整流，由于它存在着二极管导通压降，整流桥部分电压降低至296 V，器件功率损耗较大；相反有源整流桥没有二极管导通压降这一环节，其整流部分电压为299 V，器件功率损耗较低.通过对SiC mosfet副边进行有源整流桥的设计，达成了对整流桥电压输出的优化。

根据CLLC谐振变换器的模态分析可知，当开关频率为 fm < fs < fr 时，副边电流流过 SiC mosfet的时间等于半个谐振周期，故原边开关的频率与开关管同步整流信号频率相等，且同时导通，导通时间为Tr2 /2.当开关频率为fr < fs时，在原边开关的导通时间内，对应的副边 SiC mosfet 也有电流流过，因此，同步整流信号与原边开关信号相同即可.但能量在传输过程中，原副边能量的传递具有一定延迟，故在设计时，同步整流信号开通时刻应略迟于初级侧，取一定的裕量，导通时长应稍短于理想值。

**2. 自抗扰控制算法**

新能源汽车行驶工况较为复杂，母线电压受负载变化而扰动，这就要求车用双向 DC/DC 变换器具有更高的动态响应性能.传统PID控制器有如下4点主要缺陷：

1）被控输出是动态环节输出，存在惯性，其变化不能跳变；

2）PID控制中需要用到误差微分信号，在过去没有提取微分型信号的合理策略和装置；

3）P、I、D的线性组合并非是最适合的组合形式，可以寻求更合适、更有效的组合形式；

4）它的误差反馈常使系统反应迟钝，容易产生震荡和控制饱和。

故谐振变换器动态性能不足，受到负载切换扰动较大.基于上述问题，本文针对CLLC谐振变换器设计了自抗扰控制策略。

**2.1 自抗扰控制基本原理**

自抗扰控制器由扰动补偿、比例微分控制器、线性扩张状态观测器3部分组成.其基本结构如图6所示 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjpwwPGa5wLrbmp4Et0MYEAhAb4icgj5sUfrk9KAHiaCm0FxMm8Dgm9ImQ/640?wx_fmt=png&from=appmsg)

由图 6 可知，线性扩张状态观测器（LESO）利用系统的输入输出来估计扩张后的系统状态，是控制器的核心部分.对于n阶系统LESO状态方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjZ7ZictwSlsFab5z59X4xmMF1gBteWWzia8F6ZG6YZ1l7edYRXK2SfWDQ/640?wx_fmt=png&from=appmsg)

式中：u0为PD控制器的输出。

**2.2 CLLC谐振变换器的自抗扰控制器**

对于n阶系统：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjmHvMpkclzianOIBCRut8glVRVkF6wWzahyY9jSUXUmGyuhltb4Xsz1g/640?wx_fmt=png&from=appmsg)

v 为给定信号；Kp、Kd 为控制器增益 . 这里CLLC 谐振变换器的 PD 控制器区别于一般采用v \- z1 的形式，因为 CLLC 谐振变换器区别于一般变占空比的控制方式.CLLC谐振变换器随着频率升高其输出反而降低.根据式（31）—式（33）得系统闭环传递函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj0r0weGmAV1lMSDjc3HeR20vWw7qCJthiaGO2jTCgvJiaSgbnoeeB1iaJw/640?wx_fmt=png&from=appmsg)

综上所述，在simulink中搭建的CLLC谐振变换器的自抗扰控制器如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjEEuNDXhELpBLAEABhe26iavNjhV7vqpNVDn7xuIS8OUZExp8JZ8WxWA/640?wx_fmt=png&from=appmsg)

**3. 仿真及分析**

根据前面的分析设计，对系统正向和反向运行进行仿真 . 开关管采用罗姆公司 sct3060al-e SiC mosfet 的具体参数进行仿真，通态电阻为 0.6 Ω，寄生二极管压降为3.2 V.分别对变换器在正向和反向运行时不同工作情况下进行仿真.正向仿真波形如图 8—图 11 所示 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjajGticGRwHeicib1SicSXZ3qlbMlsyp9mJDPYLD1zPZUC5lKPvT2TkWLlA/640?wx_fmt=png&from=appmsg)

图 8 中，原边开关管的漏源极电压下降为0时，开关管才开始导通，满足ZVS开通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjDVAJWAVQSmtyNHJG7dd5M4wWM4dbZlry4mE1jn7tl0uJrgbc3jTLrA/640?wx_fmt=png&from=appmsg)

图9中，变换器工作在谐振频率处，由于工作在谐振点，该谐振电流的波形近似为正弦波 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjzncauPeiaPibml15B2oHV05KPbWpoJTkQOoC8Kia9TcBPO7d82BuM1FVQ/640?wx_fmt=png&from=appmsg)

 由图 10 可知副边整流二极管恰好实现零电流关断（ZCS）.由图11可知，此时输出电压稳定在300 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjjRsKnONJGibyF2JVA70KW904GPG0ibVrPxhCCfMBkRjS62Y4FzPrV5LA/640?wx_fmt=png&from=appmsg)

反向仿真波形如图12—图13所示.同正向分析方法类似，可以看出全桥CLLC谐振变换器参数设计合理，能够实现 ZVS 和 ZCS，并且输出电压电流稳定，设计可行。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjQLJEjhCeiaMplC3b5aQtXINcZgqZjiaLtdibrH4beMKrtD2FECWfvxJibg/640?wx_fmt=png&from=appmsg)

CLLC 谐振变换器的自抗扰控制（ADRC）框图及参数设计如图14—图15所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjG64u5jvE7hWW4XFuYWHPnYSgxpdO82x0YBMJBf9xImwib8gDzjnsWpQ/640?wx_fmt=png&from=appmsg)

根据设计的模型和参数运用simulink进行仿真对比验证.图16为模拟汽车运行时由半载切换到满载时电压动态响应图，其中虚线为传统的PID控制策略动态响应曲线，实线为自抗扰控制动态响应曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjwMmqibZ4D0ibLSFkwth6IB1SkVVjtSCLhpRpTqvG8pJn3SX86M5d6d9w/640?wx_fmt=png&from=appmsg)

通过对比仿真可知，相较于PID控制策略，采用自抗扰控制策略的超调量从 3.3% 降低至 1.6%，且超调时间更短，系统谐波含量更少.验证了对于新能源车CLLC谐振变换器采用自抗扰控制相比于传统的PID控制策略具有超调量小、调节时间短、抗扰性能强、输出电能质量好的优点。

**4 .结束语**

本文介绍了全桥 CLLC 谐振变换器的工作原理，利用基波分析法得到变换器的电压增益表达式.分析实现ZVS的约束条件，通过各个参数对增益的影响给出了简便的参数设计方法，并结合增益表达式画出增益曲线进行验证.针对新能源汽车行驶工况较为复杂，要求车用双向 DC/DC 变换器具有更高的动态响应性能，本文针对CLLC谐振变换器设计了自抗扰控制策略，通过仿真对比传统控制策略验证了该控制策略的有效性，并基于CLLC变换器特点和 SiC mosfet 反向导通压降较大的特性，将副边设计为有源整流桥，在不增加额外器件的情况下减小损耗，进一步提升变换器的功率密度，降低了SiC mosfet的二极管压降对于整流电压的不利影响，实现了对输出电压参数的优化。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)