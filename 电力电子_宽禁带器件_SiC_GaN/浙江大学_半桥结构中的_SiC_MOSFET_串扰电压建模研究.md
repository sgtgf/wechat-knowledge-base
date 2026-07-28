# 浙江大学：半桥结构中的 SiC MOSFET 串扰电压建模研究


> 原文地址: [https://mp.weixin.qq.com/s/Eyx-PkWBEI41qUPQVsNZhQ](https://mp.weixin.qq.com/s/Eyx-PkWBEI41qUPQVsNZhQ)

文章来源：中国电机工程学报

作者：陈滢，李成敏，鲁哲别，罗皓泽，李楚杉，李武华，何湘宁(浙江大学电气工程学院，浙江省 杭州市 310027)

摘要：SiC MOSFET 凭借着低开关损耗、高工作频率与高工作温度点等优点，逐渐在高效率、高功率密度与高温的应用场合取代传统的硅功率器件。然而，在高速开关中带来的栅极串扰现象严重制约SiC 器件的开关速度。传统的串扰抑制方法重点关注由栅极–漏极寄生电容引入的干扰电压，往往通过减小驱动回路阻抗的方式来降低串扰电压。该文基于SiC MOSFET器件的开关模态，提出考虑共源电感的分段线性化串扰电压模型。该模型基于器件数据手册及双脉冲实验提取的参数，考虑栅极–漏极电容、共源电感、体二极管反向恢复等非理想因素的影响。对比不同电压点、电流点与电阻值下实验与模型的输出结果。该模型表明，串扰电压是由器件栅极–漏极电容、共源电感与驱动回路阻抗共同作用的结果。单一降低驱动回路阻抗的方式对串扰电压的抑制效果有限。基于提出的模型，该文给出串扰电压抑制的指导方法，可直接用于SiC MOSFET 驱动电路的设计。

关键词：SiC MOSFET；串扰；共源电感；SiC 驱动

0. 引言

SiC MOSFET 因为优越的高速开关特性，可用于设计更高性能的电能变换装备。然而器件封装与设计限制引入了杂散参数，对高速开关带来负面影响。其中，串扰电压抑制是研究热点之一。串扰现象指的是桥臂电路中，由于动作器件高速切换，在关断器件栅极上引入干扰电压的现象。本文以桥臂下管作为动作器件，上管作为关断器件进行分析与建模。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI6MFqvEKibBHmn3oPuL5zLFwJybXgYaicRBDPcucCzKCK05tQelCr6TZA/640?wx_fmt=png&from=appmsg)

图1 为分析串扰现象的典型半桥拓扑，其中：Rg、Lg为驱动回路在器件栅极的等效电阻与电感；Ls 为共源电感；后缀“H”和“L”分别表示上管和下管。当下管动作时，上管栅漏电容两端的电压阶跃引入位移电流igd，流过共源电感Ls 的电流变化引入感应电压vLs，两者同时作用于上管驱动回路。若器件栅极引入正向电压尖峰，则可能超过开通阈值电压，导致器件的误开通，增加开关损耗甚至导致直流侧母线短路。若器件栅极引入的负向电压尖峰超过器件允许的最低负电压，则可能损坏栅极导致器件失效。

串扰现象会降低器件的可靠性或带来额外的开关损耗，在Si 器件中已经得到了重点关注。相比Si IGBT器件，SiC 器件的开关速度可达Si IGBT速度的 10 倍，并且SiC MOSFET 门极开通阈值电压与门极允许承受的最低关断负电平之间的电压差小于Si 器件，因此串扰危害在SiC 器件应用中更为显著。抑制串扰是目前 SiC 器件门极驱动设计需要面临的重要挑战。

为了高效利用SiC 器件，串扰电压需控制在合理范围之内。串扰电压是由器件高速开关动作引起的，因此抑制串扰最直接的方法就是增大下管驱动电阻降低开关速度，或直接控制下管驱动电压以控制电压电流的变化率。在一些应用中，通过在上管栅源之间并联附加的电容来降低串扰电压。或者通过增大上管的栅极负电压，以防止器件的误开通，但增大栅极负电压的程度受限于器件负压的耐受能力。文献\[15-16\]中采用一种简单的电平移位器为上管栅极提供负电压。文献\[17\]中采用了多电平负电压栅极驱动来适应负电压尖峰。文献\[18\]中采用密勒钳位来减小串扰电压，利用辅助晶体管来旁路相对较大的外部栅极电阻，将门极与负电源直接相连。这样可以较好的抑制正向串扰电压，但对负向串扰电压没有改善。密勒钳位被广泛应用于串扰抑制，基于密勒钳位方案，陆续提出了一系列降低驱动回路阻抗的方法。

然而，目前的研究中，关于栅极–漏极电容、共源电感、驱动回路阻抗对于串扰电压的耦合影响还缺乏深刻的认识。串扰抑制方法多基于降低驱动回路关断状态阻抗的思路，同时缺乏相应的定量分析模型。单一的通过降低驱动回路阻抗的方法可能会带来相反的效果。

为了更准确的分析驱动回路中各个参数对串扰电压的影响，为SiC MOSFET 驱动设计提供指导。本文提出同时考虑器件结电容的非线性特性与回路共源电感的串扰电压分析模型，并通过实验验证分析该模型的可靠性。

本文引言归纳总结目前提出的串扰抑制手段。第1 节通过仿真，对比考虑共源电感前后对驱动回路阻抗设计的要求，总结常规串扰抑制方案中存在的问题。第2 节对半桥拓扑进行分段线性化分析，建立串扰电压解析数学模型。第3 节对串扰电压解析数学模型进行实验验证，并总结设计驱动回路阻抗的方法。第4 节总结该文的主要内容与结论。

1\.  共源电感对串扰电压的影响

本节通过SPICE 仿真，对比考虑共源电感前后，上管串扰电压随其驱动回路阻抗的变化趋势。其中器件仿真型号为CREE C2M0025120，仿真工作点设置为600V60A，结温25℃，下管驱动电阻Rg\_L\=5Ω。接着通过分析密勒钳位驱动电路的工作原理，指出目前驱动设计由于没有考虑共源电感存在的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI6E71eEJcUDJUZ8nWQicQWLXf18PiaEpSaJSRbbvpdMibiaNPibU4D8ZXdUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIIgUcibDNlE6J9kf90pQcMkTrbK8MqyDxhnzshxZthkf1X9GEdJU2lVw/640?wx_fmt=png&from=appmsg)

图2 为共源电感Ls\=0nH 与Ls\=4nH 下，下管开通或关断时，上管串扰电压在不同驱动回路阻抗下的仿真结果。不考虑共源电感时，上管串扰电压峰值与其驱动回路关断电阻单调相关。存在共源电感时，串扰电压峰值与驱动回路阻抗的关系变得更加复杂，甚至出现关断状态电阻越小，串扰电压越大的情况。为合理抑制串扰电压，防止器件误开通或者失效，驱动设计必须考虑共源电感。

分析上管驱动回路等效电路，串扰电压主要来源为两方面。一是器件栅漏电容的充放电位移电流，二是驱动回路中共源电感引入的感应电压，两者均会通过驱动回路耦合到栅极电压。针对栅漏电容引起的串扰电压，驱动回路等效阻抗与栅源电容并联，因此门极驱动回路阻抗越小，则串扰电压幅值越小。针对共源电感引起的串扰电压，外接驱动回路阻抗与栅源电容串联，因此驱动回路阻抗越大，串扰电压幅值越小。因此分析串扰现象，须考虑二者的综合作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIwNs3U4Gp7fn7ZStcRJib9icTS7MSZ2ltC9Xibr6bekd7QcpUOJ1uA9BaA/640?wx_fmt=png&from=appmsg)

为抑制串扰电压，目前广泛使用密勒钳位电路，图3 为电路原理图。利用辅助开关管与辅助电容创造低阻抗驱动回路。辅助开关管Sclamp 仅在下管开关切换时导通，不影响上管正常开通关断。在下管开关切换时，辅助开关管保持导通，辅助电容接入驱动回路。由于辅助电容远大于器件栅源电容，为位移电流提供了低阻抗充放电回路。但是钳位回路依旧包含器件内部电阻以及共源电感，从等效电路来看，由共源电感产生的串扰电压反而增大了。因此单一减小钳位回路的阻抗并不能有效抑制串扰电压，甚至极有可能造成与期望相反的效果。

2\.  串扰电压数学模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIHbjeK3NHRtBLG4VA3Oyw650uqKiaw32HpbnW9QOHCtcJJVnmgkGXdSg/640?wx_fmt=png&from=appmsg)

基于上文分析，本节提出的串扰电压解析数学模型考虑了共源电感、器件的非线性结电容特性和体二极管的反向恢复特性。图4 为半桥拓扑工作的分段线性化等效波形。根据电压电流的变化可以将动作管关断过程分为电压上升阶段S1、电流下降阶段S2，开通过程分为电流上升阶段S3、电压下降阶段S4。每个阶段中当电流变化时，将电压视为该阶段内的平均值，反之亦然。由于关断状态的器件的电气参数受到动作器件的直接控制，因此本文基于文献\[22\]提出的动作管模型，分析各个阶段中上管的串扰电压。为了简化分析，忽略了功率回路中寄生参数引起的振荡。

转移特性指的是 MOSFET 处于饱和区时，门极电压对于器件的沟道电流的控制作用。转移特性的准确度对于模型有着重要的影响。

本文中，拟合SiC MOSFET 的转移特性方程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIdFA0KIVZHGACCbLAWvUafkdvQgQuGTcqAjjtvTEGWBlwyv3ZleuFpg/640?wx_fmt=png&from=appmsg)

式中：ich 为沟道电流，Vth 为导通阈值电压，Vgs 为栅源电压，常系数k1、k2、x 与Vth 均可通过拟合数据手册中常温下的转移特性曲线获得。图5 为数据手册中的器件转移特性曲线，以及拟合结果的对比图，可以看到，采用多项式拟合能够很好的拟合数据手册中给出的转移特性曲线。同时，由式(1)可知，由于转移特性的非线性特征，该段跨导系数不是常数，而与电流大小有关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIsr5iavlfrOeQtJPwttnsEDMLGc0JbTPBAGIUukURKyj3hricNJFzL1BA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUILMzp32nyl4HLiaoAGFke69CRSEWvqteLsRV7afXfSbaKv3UMmKnOBLg/640?wx_fmt=png&from=appmsg)

另外一个重要的点是结电容的充放电电流对于MOSFET 器件沟道电流的影响。半桥拓扑的等效分析电路如图6 所示，下管开关时，负载电流和沟道电流对下管结电容和上管结电容同时充电或者放电。在器件高速切换过程中，该部分的电流不可忽略。鉴于器件结电容的非线性特性，本文采用各个阶段的平均结电容输出电流Ioss来代替瞬时电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIMWVB2xkicX9RuPU3B2bdu8ktWM3BA1YY1DYdYRfgOND3k7ob477onpg/640?wx_fmt=png&from=appmsg)

本节用下标“L”、“H”区分下桥臂、上桥臂。桥臂输出电容Coss 可表示为式(2)，其中Cgd为栅漏电容，Cds 为漏源电容。输出电流Ioss 可表示为式(3)，其中igd 为栅漏电流，ids 为栅源电流。在电压变化阶段S1、S4，由于上下桥臂输出电容两端的电压被钳位至母线电压，并且电压变化率具有相同的绝对值。如图6(c)所示，可以将上下桥臂的输出电容视为式(4)并联电容Cpar。并联电容Cpar储能表达式为式(5)，其中电荷量Qoss 取决于栅源电压Vds\=V0 时存储在输出电容Coss 中的电荷量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIlfiayvh3aiaROibugPiaYQUFM2mbTxgia6NYU4bq8pLl2L8tqeIGLVUaWpA/640?wx_fmt=png&from=appmsg)

阶段 S1：下管关断，下管漏源电压上升至母线电压V0，下管输出电容充电同时上管输出电容放电，近似处理Ioss\_L≈Ioss\_H≈Ioss，因此该阶段的持续时间ts1 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUImFmwUCtINIfic3pAfhQDt7d39DnZoOGWsXwL9SegJ04lS0icLZ28jN6A/640?wx_fmt=png&from=appmsg)

根据图6 所示的等效电路图，该阶段的电流为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIFdNvWg0AxlxlPrzfoe5Sl7lt8Z8s10LoLcN7jDe2HvOd95qmnYwhGw/640?wx_fmt=png&from=appmsg)

式中：Io 为负载电流；id 为漏极电流；ich 为沟道电流。在电压变化过程中，栅漏电容Cgd 与漏源电容Cds 近似并联，下管位移电流igd 满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIibOPxqmSf9uG66bib9OxK4LkWgmibP8WoMhicAxUib2YycY3rA6UsialHkcg/640?wx_fmt=png&from=appmsg)

式中：ig 为栅极电流；Rg为驱动回路阻抗；Vmil为该阶段密勒平台电压；Vg\_off 为驱动关断电压；VLs为该阶段内共源电感两端电压。该阶段内，下管栅源电压Vgs\_L\=Vmil，上管栅源电压Vgs\_H\=Vg\_off，因此下管沟道电流可表示为式(10)，共源电感感应电 压表达式如式(11)所示，因此式(9)可进一步表示为式(12)，该方程适用于求解该阶段内任意工作点的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIAuDbAw5cT9ibt5v52Ru6VibUib1xZWVlicsS9E4wJIziaAocXVHxm1s4AHw/640?wx_fmt=png&from=appmsg)

该阶段流过上管共源电感和下管共源电感的电流变化率一致，在共源电感大小一样的前提下，共源电感上的压降相同。因此，可以由式(11)表示上管共源电感压降。该阶段内经过上管栅源电容的位移电流可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIjicGPNQhmGp4LJE7PS3eBren8CmkicbVlyAU8pCMXVLdGPNibCZX0T0Dg/640?wx_fmt=png&from=appmsg)

该阶段内，ig\_H和VLs\_H共同作用于门极驱动回路。由于上管门极驱动回路为线性网络，可利用叠加原理。首先分别求出二者对应的门极串扰电压的大小，接着求和，可得该阶段上管栅源串扰电压的时域公式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIOiajpU7GEesmqE7FNQRibekj5M5yjzydxIUlV8iafaaUjuKDWtKSJH1sA/640?wx_fmt=png&from=appmsg)

式中：门极驱动响应时间常数τ\=Rg\_HCgs；S1 阶段结束时刻的串扰电压为vgs\_L(ts1)。

阶段 S2：该阶段中下管的电压达到母线电压V0，续流二极管开始导通，下管的漏源电流迅速下降到0，上管漏源电流上升为负载电流Io。该阶段持续时间ts2即为上下管换流时间。由于上管漏源电压被续流二极管两端电压钳位，因此驱动回路没有栅漏电容反馈位移电流，仅有共源电感反馈压降。下管栅源电压从Vmil 下降为Vth，通过分析下管驱动回路求解ts2，回路电流方程式(9)依然成立，共源电感两端的感应电压满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIFjSoyzMhrVxbuKtVwCgWS8OvXQ1NlcgA8Zibiam4q8oRY6a0hiaG5RVYg/640?wx_fmt=png&from=appmsg)

该阶段下管等效电路为门极电容通过驱动电阻放电，该阶段的持续时间ts2 可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIJVLqVm550UjhnEYWAl6ERKlN65h7yvpI8U8Ne9LTTVBcF1vhy0sadQ/640?wx_fmt=png&from=appmsg)

式中 gm为跨导系数，可以计算为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIA39NrMI2xerW5k12w7uUBHTayiaJwy0zFbG1gsCwN2Kc5p7WutCxbKw/640?wx_fmt=png&from=appmsg)

因此上管串扰电压可求解为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUICxOKG3E3uWsaPicMNSvjM7R8iblFU4xm3qEKdUB3iceEffhOgH7c1NvnQ/640?wx_fmt=png&from=appmsg)

阶段 S2 结束时刻，上管串扰电压可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI1UHpE7ibd1ibiaaYVTicPP9LYSf1QbyVl1JnPb8fowbn4Rk4oN2Y3kMYrg/640?wx_fmt=png&from=appmsg)

阶段 S3：该阶段中下管开通，上管电流从负载电流下降为0，并进入反向恢复阶段，由于续流二极管一直导通，漏源电压不变。该阶段跨导系数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIRU25n20gHcuoL9RW5aQ5tdCRQVFjibILHpFKsvG327CRzfdnuCDZkfA/640?wx_fmt=png&from=appmsg)

开通阶段密勒平台电压值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIr7ZAoK4NITvVDpvHPh8hrQdMtrHrnlFoGNE4TWwmAHGSSBFVLLbbibA/640?wx_fmt=png&from=appmsg)

同阶段 S2 分析方法一致，可得阶段S3 电流上升时间tri 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIeTVZdkFf9dDfwoUtFxiaoQyXY5KMkVicMpoacibgICZiawkztFNicJe5NPA/640?wx_fmt=png&from=appmsg)

因此电流上升斜率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIVw9YlPHaTt8tBPDotBVUwRCsme3xOaN0Y9EacDuibecE020IKZndkCA/640?wx_fmt=png&from=appmsg)

当上管漏源电流为0 后，上管体二极管开始反向恢复。当上管体二极管反向恢复电流达到峰值时，下管漏源电流达到峰值。为了计算二极管的反向恢复时间，采用文献\[23\]中的二极管模型，体二极管反向恢复电流波形如图7 所示。该二极管模型将反向恢复电流与结电容的充放电电流分离，基于二极管的物理模型进行推导，这样更适合描述高速开关过程中的反向恢复。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI3wWbcBWMU2vyQfR5zhqiaqg50ibJLbiavXgEDgWRBPYya8sS0tgevib9lQ/640?wx_fmt=png&from=appmsg)

在上述模型中，二极管的关键参数有漂移区扩散时间Tm，有效载流子寿命_τ_c，反向恢复trf阶段的时间常数_τ_rr。上述参数与二极管的结构和材料相关，对于给定的器件，上述参数不再变化，可以从数据手册提供的标准测试数据中提取。数据手册给出的标准测试数据列于表1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIQXqzOew35bn5uSIicP56Gniazq7fdmBp5kUibOusHbjiboicNIsvQx9w9rg/640?wx_fmt=png&from=appmsg)

根据图7，在trs 阶段间，体二极管电流从0 到反向恢复峰值电流Irr，该阶段内的电荷量Qrs 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUISWtvL8yI5WHTeYrYQmzyHrkMX1Q5jiaCa1cDX9dQ4NbqRPQygk8xXNw/640?wx_fmt=png&from=appmsg)

反向恢复 trf阶段的时间常数_τ_rr满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIOXOWy0piaqBWFM8ibh06YSH2enY79oTibhfaHYk2FCvRQQ59fiaXWqNb6A/640?wx_fmt=png&from=appmsg)

式中Qoss\_800V是指器件栅源电压Vds\=800V测试条件下，桥臂等效并联电容存储的电荷量。反向恢复trf阶段电流的变化曲线满足下式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIgR3n8q7q7g3pic3ZBYFicgmpaOshuE5aXGTQhHvEpEic5yVZWfogr8wfw/640?wx_fmt=png&from=appmsg)

求解该式可得有效载流子寿命_τ_c。因此器件漂移区扩散时间Tm可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIznCZBX60SQYkcWtZWpIF0CibICbyXOic0eYKNFtTz4dtCQBhhkjc7OUg/640?wx_fmt=png&from=appmsg)

该阶段持续时间ts3 满足下式\[21\]：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIuNs1gCYazMoDZcK4axUSl97z9iasRN3uFvF9IeqMicdVUQyianI5knFgw/640?wx_fmt=png&from=appmsg)

因此该阶段内，上管的串扰电压可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIkMx6Lu6ICmEgwmLNHM6weFZneiaY3icZcECjAuAo6Ga40yYBJXTtia48g/640?wx_fmt=png&from=appmsg)

阶段 S4：该阶段中，体二极管电流从反向峰值电流下降，开始承受反向电压，器件两端电压开始剧烈变化，下管进入密勒平台。该阶段分析方式与阶段S1 相同，通过下管驱动回路方程(30)，可求解该阶段内任意时刻的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIcx0vW10varDY1tciapmfzHGibJIusGQQpj0G9XN2d0aNXTnibaMiamJTRQ/640?wx_fmt=png&from=appmsg)

该阶段电压下降时间ts4为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIlfSe9WWxLNfVv7XSGP17SuICZZbvqac8ECJ6c0icT8COll1XHcW5ibqQ/640?wx_fmt=png&from=appmsg)

上管共源电感感应电压以及位移电流表达式与S1 阶段相同。当反向恢复电流从峰值下降时，产生正向串扰电压：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIqrmqPF0a2cZmHhanuOEDGSwosia3TUeduwkWgmBbJE1UxA6qhwnKWhw/640?wx_fmt=png&from=appmsg)

因此该阶段的串扰电压表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIRRYrAr0mzibzQU5YlsZ0xVPUHJeichlZgEpXwE9Q4mGJ4ZKTGqSsiamOQ/640?wx_fmt=png&from=appmsg)

阶段S4 结束时刻的串扰电压值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUILeDHXTsO718416kJK47PRd2MFPhoHOXstK4TSc4FS0XN1I7SeEnSTA/640?wx_fmt=png&from=appmsg)

3\.  串扰电压模型验证

为了验证本文提出的模型的准确度，首先对比了SPICE 仿真与模型计算结果。采用理想化参数的SPICE 仿真可以避免实际器件中的参数扰动等因素影响，使仿真参数与计算模型参数匹配。图8 对比了不同共源电感值下的仿真结果与模型计算结果。其中工作点设置为600V60A，结温为25℃，上下管驱动电阻Rg\_H\=Rg\_L\=5Ω，驱动电压Vgs\=+20/\-5V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIicLqNHE5gDKXWQnVZibEfmeNibff5PhBQia0acWIBmZorWLHp9HdzJlCkA/640?wx_fmt=png&from=appmsg)

对比结果表明，随着共源电感值的增加，下管关断时上管串扰电压的正向最大值逐渐增大，下管开通时上管串扰电压的正向最大值与负向最大值均逐渐增大，模型计算的串扰电压的峰值和持续时间和计算结果基本相同。波形的误差主要来源于器件在关断或者开通之后，产生的功率回路的漏感与器件结电容之间的寄生振荡，这部分振荡在建模中为简化分析予以了忽略。

为了进一步验证提出的模型的有效性，本文将解析模型与实验结果做了对比。实验采用感性负载下的双脉冲测试方法，获得器件在不同工作点下的串扰电压波形与电流波形。器件型号为CREE C2M0025120D，封装为TO-247-3。根据第2 节说明的参数提取方法，从器件数据手册中获得解析模型的关键参数，如表2 所示。实验过程中，使用的相关测量探头的具体型号如表3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI6B0FByBD6kQdicF2TLK4yYItG7F9tHmm4KehcrAHOlgiaaibIWea8TbLA/640?wx_fmt=png&from=appmsg)

双脉冲测试平台如图9 所示，母线电容为520uF，负载电感为100uH，适合TO-247-3 封装的SiC MOSFET器件测试。

由于实验中没有任何串扰抑制手段，为防止串扰过程中发生误开通，人为加大了上管的负压，取为\-8V，略低于数据手册推荐的\-5V。调整关断状态器件的负压不会对串扰电压的大小产生明显影响，实验参数列于表4。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI74h0S3AVqkQbbl0KfAqThk8XKp8tibY14h7L4ZXwibERR08bkGiaZ2hhA/640?wx_fmt=png&from=appmsg)

在实际测量中，串扰电压实验测试接线如图10所示，从测量接线可知实测电压并不是真实的栅源端串扰电压，它包括了器件封装内部元件的压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIibtvMic7sF1wHjFCNuPAeZyHtrRrciasPia4CYQPWV898W2J8Bmc96KLBA/640?wx_fmt=png&from=appmsg)

真实串扰电压需在测量结果上扣除器件内阻以及共源电感上的压降。在实际电路中，驱动回路杂散电感会被重点优化，其数值很小，不会产生大的压降，因此，本文忽略了驱动回路中其他杂散电感，真实的串扰电压可计算为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIwAvicjXb6CkPmqgJqib1OwPGNTia8FrBqCMVBCEh9yT6iajhaf8sXOHyLg/640?wx_fmt=png&from=appmsg)

式(35)中Vgs\_real 指的是加到门极两端的真实电压，Vprobe指的是探头测量电压，ids为漏极电流。其中，Ls\_H 为上管共源电感，为未知量，对于给定的电路，共源电感不再变化，可以通过预先测试获得。方法为：在下管动作时上管设置为高阻态驱动回路，即上管外部驱动电阻远大于器件内部电阻，满足Rg,ext\>>Rg,int。设置下管外部驱动电阻Rg,ext\=25Ω，保证上管电流变化阶段与电压变化阶段不产生交叠。当下管开通，上管电流近似以固定斜率下降并且漏源电压不变时，共源电感感应出定值电压，如图11 所示。此时由于栅漏电容对串扰电压不会产生影响，上管探头实测电压平台即为共源电感的感应电压。此时式(35)可以简化为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIiaYRBK3Uj0sqHz1aRJBh2KZzlNkiaDEdf0QculpicePtufqs3QicgiccLCQ/640?wx_fmt=png&from=appmsg)

根据图11 提取共源电感得Ls\=5.5nH，代入 式(35)可计算任意工作点下真实的串扰电压，下文中的串扰电压均为减掉了内阻和共源电感压降之后的栅极电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIkSch50XS4NPgmpXGvCyA7dQDuPRUfg7Elk2g5HrdaxNLyHenpGjCDA/640?wx_fmt=png&from=appmsg)

设置驱动电阻Rg,ext\=25Ω，遍历表3 中工作点，以400V60A 为例，对比实验提取的串扰电压与模型计算的串扰电压，如图12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUISJZb5L31h5bohfsMmXic4HWic7RNKNJxJ8eR0EVUpd00ibmmnkL0eWlSw/640?wx_fmt=png&from=appmsg)

实验提取的串扰电压与模型的计算结果在变化趋势上良好匹配，误差来源有测量偏差、功率回路中的寄生振荡、数据手册中提取的器件参数与实际器件参数之间的差异以及串扰电压数学模型分段线性化处理的近似偏差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIMHS5tzA6DtWHBfoUaFKqpG1mDXmMWFCAwhSiaoxDyt4DhrsibmMZv1Dw/640?wx_fmt=png&from=appmsg)

通过双脉冲实验测试所得的串扰电压波形模拟器件在连续开通关断下的串扰电压波形，获得图13 实验提取波形与模型输出波形在时域与频域上的对比图。频域上，实验与模型的基本频率分量一致，幅值存在一定的偏差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIibogTyFhia0OaWFVwAsStV7HV4UQS4fgFzicA3pj1dYLIYP9OQ3u7dHxA/640?wx_fmt=png&from=appmsg)

控制上下桥臂外部驱动电阻Rg,ext\=25Ω，图14在 Vds\=400V 下对比了不同电流点下的串扰电压实验提取结果与模型计算结果的变化趋势，图15 在Ids\=60A 下对比了不同电压点下的串扰电压实验提取结果与模型计算结果的变化趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIDnz3ENz3gIokWPEP8wicr8twRWI6W7I22QYbyNT525bHTN5xNrPe8EA/640?wx_fmt=png&from=appmsg)

图16 中保持驱动电阻点 Rg\_L\=Rg\_H\=Rg,ext，使上下桥臂阻抗对称，对比了不同电阻点下串扰电压的实验提取结果与模型计算结果的变化趋势。实验结果表明，在不同电压、电流及驱动电阻条件下，解析模型较好的反映了实际的串扰电压，对于研究串扰电压的性质和设计抑制串扰电压的方法具有指导意义。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIPDYBqd7dru8QfMuH0YsIlJyQB3kzY1BKxmLRk8HWicdRlPnOg0rWDoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIUMXvoYbUVBerleA7IZ6OIO3ib74rDOpILwhuTNIRkFDDQD1moGic3Euw/640?wx_fmt=png&from=appmsg)

进一步地，将串扰电压下降谷底的电压值称为负向峰值串扰电压，即模型中阶段S1、S3 结束时刻的串扰电压。将串扰电压上升峰顶的电压值称为正向峰值电压，即模型中阶段S2、S4结束时刻的串扰电压。

在下管关断时，负向峰值串扰电压几乎不受电流点的影响，但随电压点的增大而减小；正向峰值串扰电压随着电流点的增大而增大，随着电压点的增大略微减小。在下管开通时，负向峰值串扰电压随着电流点的增大而减小，但几乎不受电压点的影响；正向峰值串扰电压随着电流点、电压点的增大略微减小。因此往往以最大电压电流工况点，作为判断串扰电压的依据。

对于同一型号的产品来说，器件间的参数差异是在一定范围内的随机分布。数据手册上的数据是在标准测试下获得的数据，因此本文用来获取模型的相关参数。为了评估器件间的参数差异的影响，本文对此做了进一步的参数遍历仿真。

对于SiC MOSFET，其典型的器件间的参数差异为开通阈值电压，产生差异的因素为门极氧化层的工艺稳定性及器件的结温不同。从数据手册中阈值电压–温度关系曲线可知，Vth(25℃)≈2.5V、Vth(75℃)≈2.3V、Vth(125℃)≈2.1V。选择器件工况点600V60A、上下管外部驱动电阻Rg,ext\=5Ω、器件驱动电压Vgs\=+20/-5V、共源电感Ls\=4nH。不同结温仿真结果如图17，器件之间的参数差异，对串扰电压的测量结果影响微弱。同理，对于器件的其他参数，由于SiC MOSFET 器件工艺已经成熟，其参数差异也较小，同一型号器件之间的参数差异对解析模型的精度以及测量结果的影响不大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI8nrthZRtiaxr1xvAfAybEwicuJTibq2UK764j7jkQqamoxOJIlzauSHGg/640?wx_fmt=png&from=appmsg)

为了提高模型的预测精度，从器件固有参数的角度可以通过提取器件实际的结电容–电压曲线、阈值电压以及体二极管的反向恢复特性参数，消除数据手册与实际的偏差。从双脉冲实验的角度，需要校正实际工作点与设定值之间的偏差，并准确提取功率回路寄生电感与共源电感。从测量上，需要提高串扰电压与器件电流的测量精度，修正探头可能出现的测量问题。为了提高实验与模型的匹配度，本文建立的模型依赖于实际测试提取的寄生参数。实际应用中，这部分寄生参数可以通过有限元仿真获取，从而提高该模型的实用性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI5fwQr4DbGP86vCrOjkDcSto6UlCaqTfJsWOurOYxibtKu8HdU5zhAicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI4nHibI7zr0gVOrv99RR7aMib0iabMbwTRFx0zJU5vNwJw9CAibq1nygjAg/640?wx_fmt=png&from=appmsg)

为了利用该模型更好的分析上管驱动回路阻抗以及共源电感对串扰电压的影响，指导驱动阻抗的选择与共源电感值的设计。图18 提取了该模型在器件典型工作点600V60A，结温25℃、下管驱动电阻Rg\_L\=5Ω、驱动电压Vgs\=+20/\-5V 下，不同上管驱动电阻Rg\_H、共源电感Ls 下，上管的负向串扰电压峰值与正向串扰电压峰值。参数角度的误差主要是数据手册提取结果与实际的偏差。

串扰抑制的本质是将上管负向、正向峰值串扰电压控制在器件导通阈值电压与最大反向负电压之间，防止桥臂的直通故障与器件的失效，即满足式(37)，其中最大反向负电压Voff\_max\=-10V，导通阈值电压Vth\=4.13V。从图18 可知理想情况下，共源电感越接近 0nH，器件工作越安全。然而实际情况中，对于存在共源电感的封装，应尽可能减小共源电感，同时配合驱动的阻抗设计，保证栅极电压处于合理的范围之内。从第 3 节的建模分析可知，串扰电压的时域表达式涉及较多的耦合参数，且由于超越函数的存在，解耦存在较大的困难。因此关于上管驱动电阻和共源电感的设计值很难获得显示计算式。可基于本文提出的模型，利用数值计算软件编程，遍历各个工况下的串扰电压计算结果，从而获得合理的驱动参数。以图18工况为例，若共源电感Ls\=2nH，则上管驱动电阻选值需满足14.9<Rg\_H<20.2Ω。若上管驱动电阻Rg\_H=5Ω，则共源电感设计值需满足0nH< Ls<0.77nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIvq49seic75GdGO9372vibJ1JJKFWGNzOtNrp6YfNrz4ysqmQu6bgOUSg/640?wx_fmt=png&from=appmsg)

4\.  结论

本文的研究对象为半桥拓扑中上管串扰电压，通过仿真对比考虑共源电感前后串扰电压的变化趋势，以及对驱动回路阻抗的设计要求，指出常规串扰抑制手段中存在的问题。

1）串扰电压变化趋势在考虑共源电感前后差异显著，因此分析串扰现象不能忽略共源电感。

2）常规串扰抑制手段由于未考虑共源电感，其重点在于创造低阻抗驱动回路来降低串扰电压。

3）考虑共源电感后，由于串扰电压峰值与驱动回路阻抗并不是单调关系。因此单一减小驱动回路阻抗的方法，极可能带来反效果。

为了更准确的分析串扰电压，综合考虑栅极–漏极电容非线性特性，共源电感与驱动回路阻抗，以及体二极管的反向恢复，建立分段线性化串扰电压数学模型，并通过实验验证。该模型：

1）可通过器件数据手册提取关键参数，用于分析串扰电压，且能够良好预测串扰电压的变化趋势。

2）准确度依赖于器件实际参数与数据手册之间的差异。

3）可用于指导驱动设计，为驱动回路选择合适的阻抗值，为共源电感值的设计提供指导。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)