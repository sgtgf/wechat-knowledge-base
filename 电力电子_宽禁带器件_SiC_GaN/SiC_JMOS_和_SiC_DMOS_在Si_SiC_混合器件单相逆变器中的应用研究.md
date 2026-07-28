# SiC JMOS 和 SiC DMOS 在Si/SiC 混合器件单相逆变器中的应用研究


> 原文地址: [https://mp.weixin.qq.com/s/sxD08rgUk4eS4vD23piBHg](https://mp.weixin.qq.com/s/sxD08rgUk4eS4vD23piBHg)

文章来源：中国电机工程学报

作者：李宗鉴，王俊\*，余佳俊，江希，沈征(湖南大学电气与信息工程学院，湖南省 长沙市 410082)

摘要：Si IGBT 与SiC MOSFET并联组成的Si/SiC 混合器件(HyS)因在功率变换器中提供了一种成本与性能的优化折衷而受到广泛关注。其中，SiC MOSFET特性直接影响Si/SiC混合器件的性能，对基于不同类型SiC MOSFET 的Si/SiC混合器件的特性差异分析极为必要。该文对比分析基于新型集成结势垒肖特基二极管(JBS)的SiC MOSFET(SiC JMOS)的 Si/SiC 混合器件(HyS\_J)和基于传统平面栅SiC MOSFET的传统 Si/SiC 混合器件(HyS\_D)的特性差异。对比分析2 种混合器件的导通特性与开关特性，结果表明，与HyS\_D 相比，HyS\_J 具有更低的反向导通压降，更好的反向恢复性能和更小的开通损耗。建立适用于2 种混合器件单相逆变器损耗模型，对比分析2 种器件在逆变器应用中的损耗差异。设计基于2 种混合器件的5kW单相逆变器样机，对比应用2种混合器件的变换器损耗、效率及器件结温。实验结果表明，在轻载条件下，与 HyS\_D方案相比，HyS\_J可以实现最大0.5%的峰值转换效率的提升。

关键词：碳化硅；混合器件；IGBT；MOSFET；损耗模型；结势垒肖特基二极管

0. 引言

相比于传统的硅(Si)半导体材料，碳化硅(silicon carbide，SiC)宽禁带半导体材料具有3.3 倍于前者的热导率、2.5倍于前者的饱和电子迁移率及10倍于前者的击穿电场强度，是制备高温、高频、大功率器件的理想材料之一。基于SiC 材料的SiC MOSFET器件，由于具有极低的导通损耗和极高的开关速度，其在高频、高效率、高功率密度变换器应用场合具有巨大的市场应用潜力，被认为是Si IGBT 最有潜力的竞争器件。然而，当前SiC MOSFET 五倍于Si IGBT 的市场价格及单片电流等级小等问题限制了其在电力电子变换器中的大规模应用。

近年来，由大芯片面积、大电流等级的Si IGBT作为主器件，小芯片面积、小电流等级的 SiC MOSFET 作为辅助器件，两者并联构成的Si/SiC 混合器件实现了器件性能与价格成本的优化折衷，被认为是解决SiC 器件高昂成本问题的颇具潜力的解决方案。国内外研究机构对Si/SiC 混合器件及其控制策略进行了广泛的研究和报道。美国北卡罗来纳州立大学Alex Q. Huang 教授团队首次报道了6.5kV高压Si/SiC 混合器件。实验结果表明，6.5kVSi/SiC 混合器件的开关损耗相比于6.5kV Si IGBT器件降低了70%，而相应的成本只有不到50%的增加。混合器件的开关损耗与其门极控制策略密切相关，通过控制其内部2 个器件在合理延时范围内的异步开通与关断，可以实现IGBT 的零电压开关(zero voltage switching，ZVS)，从而优化混合器件的开关损耗，提升混合器件变换器的效率。文献\[14\]深入分析了混合器件门极控制模式与其开关损耗和热特性之间的耦合关系，提出了一种结温平衡门极控制模式，在优化系统损耗、提升系统效率的同时，兼顾了器件在高负载下的结温平衡，提升了器件的可靠性和长期运行寿命。在文献\[15\]应用优化门极控制策略，在同等测试条件下，基于混合器件的单相逆变器和T 字型三电平变换器的效率比Si IGBT 解决方案分别高了0.9%和2%，体现了混合器件对减小系统损耗和提升系统效率等方面的优势，对降低变换器散热需求和提升功率密度潜力巨大。

然而，在AC变换器和双向有源全桥(dual active bridge，DAB)变换器等应用场合，由于IGBT 单向导通特性，混合器件内部的SiC MOSFET 需要承担全部反向导通电流。由于SiC 材料禁带宽度较大，传统平面功率SiC MOSFET(SiC DMOS)中PIN 结构体二极管的本征载流子浓度较低，导致其通态压降较大，通态损耗大大提升。除此之外，当SiC MOSFET 中体二极管导通时，存在由于注入的少数载流子的复合而导致的位错缺陷转化为堆叠层错的风险，降低了Si/SiC 混合器件的长期可靠性。

文献\[17\]提出 SiC MOSFET 在反向导通过程中开通导电沟道，以实现反向同步整流(synchronous rectification，SR)运行模式，从而抑制其体二极管的导通，降低导通损耗。但在死区、大电流高导通压降等情况下，体二极管的导通是不可避免的。而在混合器件应用中额外反并联碳化硅肖特基势垒二极管(silicon carbide Schottky barrier diode，SiCSBD)则增加了器件成本及散热需求，削弱了Si/SiC混合器件的成本竞争力，不利于混合器件的大规模应用。

最近，文献\[18-19\]提出了一种集成结势垒肖特基整流二极管(JBS)的SiC MOSFET(SiC JMOS)，其在不增加任何额外芯片面积的情况下，在SiC DMOS 的体二极管区域集成结势垒肖特基结构，形成内置的反并联JBS 二极管，降低反向导通压降，从而降低SiC MOSFET 的反向导通损耗。

针对SiC JMOS 优异的反向特性，本文提出一种基于Si IGBT/SiC JMOS 的混合器件(HyS\_J)。SiC JMOS 内部JBS 结构体二极管有利于改善混合器件反向导通特性及反向恢复特性，提升基于混合器件的变换器效率。并与基于传统SiC DMOS 的混合器件(HyS\_D)在静态特性和开关特性进行对比，分析两者差异。然后建立基于2 种混合器件的单相逆变器损耗模型，理论分析2 种器件在变换器应用中的损耗与结温差异。最后，搭建基于2 种混合器件的逆变器平台，对比分析2 种混合器件在单相逆变器应用中的效率与结温。

1\. Si/SiC 混合器件特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENibESZYgYIJfAA9mDhpWFIINtxMJh5JeHGbu4yxib1zHPnartAIGSBPcg/640?wx_fmt=png)

Si/SiC混合器件结构如图1所示。其中：IGBT作为导通大电流的主器件：SiC MOSFET为导通小电流的辅助器件。当电流较小时，由于IGBT开启电压的存在，电流绝大部分由SiC MOSFET导通，SiC MOSFET极低的导通电阻将降低混合器件在小电流下的导通损耗。当电流较大时，由于IGBT的电导调制效应，大部分电流将由IGBT导通，从而减小混合器件在大电流下的导通损耗。混合器件整合SiC MOSFET小电流下损耗低和IGBT大电流下导通压降小的优势，改善了混合器件导通特性。本文选取Infineon公司1200V/40A Si IGBT(IGW40T120)作为主器件，分别与瀚薪科技1200V/25A SiC DMOS(H1M120F060)和1200V/25ASiC JMOS(H1J120F060)组合构成Si/SiC混合器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENdFd54ayeCmQlYfYczkTMG6g4BNc0NMET9XkpysiapHyosaxcxjduhnQ/640?wx_fmt=png)

如图2 所示，混合器件具有灵活的控制策略，图中Ton\_delay 和 Toff\_delay 分别为混合器件内部IGBT和 SiC MOSFET 之间的开通信号控制延迟和关断信号控制延迟。调节Ton\_delay，可以调IGBT和SiC MOSFET的开通时序，当Ton\_delay≥0 时，SiC MOSFET先于IGBT 开通，SiC MOSFET为硬开通状态，而IGBT 为零电压开通(ZVS)。当Ton\_delay<0时，IGBT先于SiC MOSFET开通，IGBT 硬开通状态，而SiC MOSFET 为零电压开通(ZVS)。由于 SiC MOSFET 开通速度较IGBT快，混合器件在Ton\_delay≥0 时的开通损耗小于Ton\_delay<0 时的开通损耗。且在文献\[20\]中分析表明，当Ton\_delay约等于零时，也即两个器件同时开通时，由于此时具有比另外两种状态更高的di/dt，此时混合器件具有最低的开通损耗。调节Toff\_delay，可以调节IGBT 和SiC MOSFET 的关断时序，当Toff\_delay>0，即IGBT先于SiC MOSFET 关断控制时序将使IGBT 零电压关断，选择合适的Toff\_delay将极大的降低由IGBT 拖尾电流引起的关断损耗，从而降低了混合器件的总体关断损耗。

1.1 静态特性对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENCQmHicu8eZic1lPpfCd1rhLu73WY9mRQzXxqSg62raV7y6TibWVsl4drQ/640?wx_fmt=png)

2 种混合器件在门极驱动电压VGS=15V，结温Tj=25℃条件下的正向导通特性如图3 所示。其正向导通特性曲线基本重合，这是由于2 种SiC MOSFET 器件正向导电沟道结构相同，因此正向导通特性相同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENSOGhozqca7Qe0nHyD8ENhfiaJz7hc60TIEWJ7N6flcNXOFEibBNMOicQA/640?wx_fmt=png)

图4 给出了2 种混合器件组合在门极驱动电压VGS=-5V，结温Tj=25℃条件下的反向导通特性曲线。当混合器件VGS=-5V 时，反向电流全部由SiC MOSFET 体二极管导通。由于肖特基势垒高度低于PN 结势垒高度，JMOS 反并联二极管开启电压约为1.3V，而DMOS 反并联二极管的开启电压约为3V。当电流低于26A 时，JMOS 混合器件的反向导通压降低于DMOS 混合器件。然而由于传统SiC MOSFET 的 PN 结体二极管结构存在电导调制效应，当电流高于26A 时，DMOS 混合器件的反向导通压降低于JMOS 混合器件。

1.2 开关特性对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENtzJBQfueXUhzIhibrFM7mXPkezWxdT8lJjb7KbFVwqCF1Aaq4OutdxQ/640?wx_fmt=png)

在400V 母线电压下，2 种器件在不同电流下的反向恢复电流波形如图5 所示。由于JMOS 集成的单极性肖特基反并联二极管优异的反向恢复特性，JMOS 的反向恢复电流小于DMOS 的双极性普通PN 结体二极管恢复电流。在不同电流等级下，两种器件的反向恢复损耗如图6 所示。由图可知，JMOS的反向恢复损耗仅为DMOS混合器件的50%左右。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENtGeGO0e1NoWuEMXGTnaBUugceW4uH7Ga2ayrCibcdu3ORmLY04BIGZA/640?wx_fmt=png)

在开通延时Ton\_delay=0μs，混合器件的开通波形图如图7 所示。当Si/SiC 混合器件开通延时为 零时，混合器件内部两器件同步开通，此时器件具有较高的 di/dt，从而降低了换流时间，减小了开通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENlrD7WNxg5WkOhIl1rYk25ibEF2huYeFdRyJF4Rm23o3mDuOzhdMhiaPA/640?wx_fmt=png)

在关断延时Toff\_delay=1.6μs，混合器件的关断如图8 所示。IGBT提前SiC MOSFET 关断，由于SiC MOSFET 仍然处于导通状态，IGBT 为ZVS关断，从而减小 IGBT 的拖尾电流损耗。SiC MOSFET 在短暂的延时时间内导通了所有负载电流，最后再关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENew6IsDDF4T3iaWJ53ghV5JFJEWfuOckXvAbFlvicx5Pnjd61cfsSh8iaQ/640?wx_fmt=png)

图9为当Ton\_delay=0和Toff\_delay=1μs时，2种混合器件在400V 母线电压，不同负载电流下的开通和关断损耗。由图可知，2种器件的关断损耗差别较小，而HyS\_J的开通损耗小于HyS\_D。这是由于JMOS 的体二极管具有比DMOS 更优异的恢复特性从而减小了HyS\_J 的开通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENthViacNL8zMkmsMc2oLGTjlCibBpicmgK0YSdyBb8Us2Zdeb9myQL8njA/640?wx_fmt=png)

2\. Si/SiC 混合器件损耗模型

功率器件的损耗主要由导通损耗和开关损耗组成，精确的损耗模型对变换器损耗估测和系统散热设计等方面具有重要的意义。混合器件内部两器件的损耗分布受其门极信号控制时序影响，传统的损耗模型常用于拟合单一功率器件损耗，未曾考虑混合器件这一特殊特性。因此，本文建立与混合器件门极控制延时相关的逆变器损耗模型，分析并讨论了HyS\_J 和HyS\_D 两种混合器件在单相逆变器应用中的理论损耗差异。

2.1 导通损耗

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENibzn6qo1uokyKSrbNmrJ5lIzZgpsOURR0Ivj6fibBosx07Q39gT5KwzQ/640?wx_fmt=png)

Si/SiC 混合器件在单相逆变器一个基波周期各阶段的导通损耗分布如图10 所示。

逆变器输出电流可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENuyTQWzNvSyD7BWURj8kQDynyzG09T1uSibHWwnWZkAogXdwWe85GH9g/640?wx_fmt=png)

式中：IF为瞬时电流值；Ipeak为输出电流峰值;θ为电流相角。当调制方式为双极性调制时，正弦波脉宽调制(sinusoidal pulse width modulation，SPWM)占空比可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jEN2lqEicu2vMfHnaTI2Qc6XNAO6udvBDg5L9WMGbZVnoIrl6jV70fO4Ng/640?wx_fmt=png)

式中：D 为正半周导通电流占空比；D' 为负半周导通电流占空比；m 为调制比；Φ为电压电流相角。

当电流正向导通，θ处于\[0, σ\]，\[π-σ，π\]区间时，由于此时电流较小，混合器件的导通压降小于IGBT 的拐点电压Vknee ，电流全部流经SiC MOSFET，因此区间\[0, σ\]，\[π-σ，π\]中的导通损耗功率计算公式可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENOibG9cJ15Z9vohTgjBPpicQC8YIiaZX0HEVrz498ib5APOO8eU132EjUJg/640?wx_fmt=png)

正向导通时，IGBT 开通临界电流为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jEN1xl2FSRpZSub2qJp8KiaBO2mn7bkicib2f548C2rWic1xfo61yv1qgYucA/640?wx_fmt=png)

式中RDS为SiC MOSFET 的沟道导通电阻。当正向导通电流大于IGBT 开通临界电流Iknee，即θ处于\[σ, π-σ\]区间时，IGBT和SiC MOSFET 共同导通正向电流，其分流情况可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENSUeclVaIwAdqcoaLyic2gE4ULp1zQZRnXYsPJMc7VkupqLEiatS66PCg/640?wx_fmt=png)

式中：RCE为 IGBT的正向导通电阻；IF为流经混合器件的总电流；IMOS为流经SiC MOSFET的分电流；IIGBT为流经Si IGBT的分电流。在关断延时时间内，SiC MOSFET单独承担总电流IF。因此在区间\[σ, π-σ\]中器件导通损耗可分为SiC MOSFET 分流导通损耗、关断延时过程中SiC MOSFET单独导通损耗和Si IGBT的分流导通损耗3个部分，损耗功率计算公式可分别表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENnMJzmCrDqdEy3QInPNabDb5PQ4yRzKZXugrEyEDs7T55FXvYRgBCkA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jEN6TuQuQfboSPr3ZY4FSojJ8icCO0U42qx1jrUWOttRibNYgkNJnOjslbA/640?wx_fmt=png)

式中：Toff\_delay为门极关断延时时间；Tdead 为死区时间；Ts 为开关周期。

当电流反向导通时，混合器件反向电流全部由SiC MOSFET承担。反向导通过程采用同步整流方式，当θ处于\[π, π+σD\]，\[2π-σD, 2π\]区间时，由于此时反向电流较小，SiC MOSFET导电沟道的导通压降小于其体二极管的开启电压Vknee\_D，电流全部由SiC MOSFET 导电沟道承担，因此区间\[π, π+σD\]、\[2π-σD, 2π\]中的导通损耗功率计算公式可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENFIdpeRZtLib0YWkoDSPOLjhY2T9nqT8BSfL8umQ5SWpJBJfZCWibSgEA/640?wx_fmt=png)

反向导通时，SiC MOSFET 体二极管开通临界电流为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENMMrkOnezeFngT9WMNlSTbpyNQ5Oiclf6Cib52hEI1cBS4cAJcPGSYrFA/640?wx_fmt=png)

当反向导通电流大于体二极管开通临界电流Iknee\_D ，即θ处于\[π+σD，2π-σD\] 区间时，SiC MOSFET 导电沟道及体二极管共同导通，电流分流。分流情况可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENicHnicgq5rFYOj8wwBlv9TbSgeOXzX2QHxmqHWYK28ZIB5Fmv595CNJg/640?wx_fmt=png)

式中：RD 为 SiC MOSFET 体二极管的正向导通电阻；IMOS\_channel为流经SiC MOSFET导电沟道电流；IMOS\_D为流经 SiC MOSFET 体二极管电流。因此在区间\[π+σD, 2π-σD\]中 SiC MOSFET 导电沟道及其体二极管的导通损耗功率计算公式可以分别表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENaM10S32U0HZEmbibe5layhvjJa3k7wiaXfa4DuiaeDaMnTsGlzbpPjL9A/640?wx_fmt=png)

在变换器死区时间内，SiC MOSFET 导电沟道关闭，电流全部从SiC MOSFET 体二极管流过，以Tdead 表示死区时间，其死区内导通损耗功率计算公式可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENA1Teib6uAUGjVkLmzYtEz51WNRYKicCYc3hiamRkLRmQBKUcwddRD5Vpw/640?wx_fmt=png)

因此，混合器件工作于单相逆变器中的总导通损耗功率可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jEN61skiaEsFVWw2LMjbhv1abqicskHEzoYt9gzicYXWfR3qr6cDEOkMqnCA/640?wx_fmt=png)

2.2 开关损耗

根据上述对混合器件开关过程的分析，在Ton\_delay=0 和 Toff\_delay=1μs的条件下测量混合器件开关损耗。

通过双脉冲测试实验数据经曲线拟合的方式可以得到SiC MOSFET开通损耗功率Pon\_MOS、IGBT开通损耗Pon\_IGBT和反向恢复损耗功率Prr\_MOS分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENty5wMGaRFJCOgMLe9hNGtrMu3RUWnE8Ynn5DPP7WX8MuIwgcNLIibMQ/640?wx_fmt=png)

式中系数可从2.1 节的双脉冲数据拟合得到。Si/SiC混合器件关断损耗可分为IGBT零电压关断损耗和SiC MOSFET硬关断损耗。根据双脉冲测试实验数据经曲线拟合的方式可得混合器件关断损耗函数。其中SiC MOSFET硬关断过程损耗计算公式可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENrauc1icXTiaGdq27QbSyiaQia4dN6YYRNM8lyvT3dSicBHPxSH4b2gmaT9A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENIVicDQEZPM56yr4fGJGnHXpysBIza1LicCibZBHefZNicEQmq7FoMFlIYQ/640?wx_fmt=png)

IGBT零电压关断损耗与关断延时Toff\_delay密切相关，根据双脉冲测试实验数据分析，其典型函数依赖关系如图11所示。IGBT零电压关断过程损耗功率计算公式可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENsZvoS39nrFpuUX42C1rM4EibVAYv83eNu6ZlbQFrGR2b8uBcVphHZSA/640?wx_fmt=png)

式中：τ为函数的指数项系数；Eres为IGBT残余关断损耗，其值可从双脉冲数据拟合得到；Eoff\_hard\_IGBT为IGBT硬关断损耗，其损耗功率计算公式可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENu7F16Dl2sjYicKkXzHeKD3Dodd8OZMcaaFXicHTH1QcVwUKNVcEPTRFw/640?wx_fmt=png)

因此，混合器件工作于单相逆变器中的开关损耗功率可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENQsfnuL226Xc300NKcgWYwcSomHeCmbHPicBjUFMKiczhKu0UqVhEpCFg/640?wx_fmt=png)

综上，Si/SiC混合器件工作于单相逆变器中的总损耗功率可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENrSrQnM9KVicjtlicVQjH6n5W2lJoqXRaSXUbHicmaaJNT7vTJKVVqrFyg/640?wx_fmt=png)

2.3 损耗对比分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENJhib36nlzPz8MNhia5X65plBFWHP2QBYBxhFcwUDT1NkerAForvianicdQ/640?wx_fmt=png)

从器件数据手册及双脉冲测试数据中提取相关模型参数，将设置仿真条件为：输入电压400V，输出电压峰值为311V，频率为50Hz。Si/SiC混合器件的开关频率为20kHz，开通延时Ton\_delay=0μs，关断延Toff\_delay=1μs，死区时间设置为0.5μs。两种器件在单相逆变器应用中的损耗的理论计算结果如图12 所示。

在小电流情况下，HyS\_J 的损耗小于HyS\_D损耗，而在大电流情况下，JMOS 混合器件损耗功率略大于DMOS 混合器件。这与两种混合器件的导通和开关损耗分析结论一致。

3. 实验结果及分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENueyBtJ8UVcbkl5o6WSnUldPzItA9sPicrcymHKoukASBibPapsMaGT6Q/640?wx_fmt=png)

图13、14分别展示了由1200V/57A Si IGBT(IRG7PH46UD-EP)作为工频桥臂，Si/SiC混合器件作为高频桥臂构成的单相全桥逆变器拓扑结构及实验平台。全桥逆变器工频桥臂为IGBT 和FRD组成，其良好的导通性能在工频桥臂中极具优势，高频桥臂采用Si/SiC混合器件，其优良的开关特性能够有效降低变换器损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jEN34Fq5NVEqI1I0OHhfCltuqGAV7XB4Igvw4gamXt93ZXaT1U2Eib9rDg/640?wx_fmt=png)

实验条件为直流输入电压为400V，交流输出电压有效值为220V，输出频率为50Hz。主控制芯片为TMS320F28335。滤波器中的滤波电感以及电容的值分别为2mH和10μF。Si/SiC混合器件的开关频率为20kHz，死区时间设置为0.5μs。效率由LMG670功率分析仪测量得到，精度为0.02%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENGQv38xFxq1L9O1tSKAuNt9vA9sFEZxUBhh5f308elwU8sQ0HFVQcUw/640?wx_fmt=png)

图15为4.5kW输出功率下，单相逆变器输出电压波形、电流波形及混合器件驱动信号。输出电压峰值310V，输出电流峰值29A。门极驱动信号延时分别为：开通延时Ton\_delay=0μs关断延时Toff\_delay=1μs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENLCaztKnlia7HTPL8E8mu09yq2avtR5gMarUsKzf06deIpxNjD9iaKIXQ/640?wx_fmt=png)

图16 给出了2 种混合器件构成的逆变器的效率对比。与HyS\_D 相比，HyS\_J 的效率在轻载时更高，在重载时略低一点。在2kW 负载条件下，HyS\_J和HyS\_D 的峰值效率分别为98.2%和97.7%。HyS\_J 的峰值效率比HyS\_D 高了0.5%。这对大部分寿命时间工作于轻载条件下的逆变器如UPS电源等将极大节省能耗。当输出功率高于3.5kW左右时，实测的HyS\_J 损耗与HyS\_D 相等，而基于模型计算得到的两种混合器件损耗约在4kW左右相等。这是因为损耗模型只考虑了基波带来的损耗，忽略了谐波对逆变器损耗的影响。

在稳态下，器件的平均结温可以由器件的壳温，损耗与稳态热阻计算，计算公式如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENoOTeGUz52seGl88iaolw4qKx4WYOnfQjjqPoxBj5kgRwrycTolZG8NQ/640?wx_fmt=png)

式中：Tc 为器件壳温，其通过红外热成像仪FLIRA655sc 测量得到；Rθjc为器件结到壳稳态热阻，其值可从器件datasheet 中获取；Ploss 为器件损耗，本实验中采用器件两端电压与流过电流的乘积在一个正弦周期内的积分得到。在不同负载条件下，混合器件内部IGBT 与SiC MOSFET 的估测结温如 图 17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskz4qeVkTZIOq8DOIBl5jENXibYo08eVww5Rbp6QvmJdpBPGQJP5cle4JChS29jMib49u5pLB7evkyg/640?wx_fmt=png)

由于混合器件的大部分开关损耗由其内部SiC MOSFET承担，所以混合器件中的SiC MOSFET器件结温高于IGBT结温。在轻载下，由于JMOS的反向导通损耗低于DMOS，JMOS的结温较DMOS结温低。而在重载时，由于JMOS内部肖特基二极管压降会高于具有电导调制效应的DMOS体二极管压降，从而在重载时JMOS的结温会略高于DMOS。

4. 结论

本文提出了一种基于SiC JMOS器件的Si/SiC混合器件，利用SiC JMOS内部JBS结构体二极管改善混合器件的开通特性，并减小混合器件在死区和反向导通时的导通损耗。与基于普通SiC MOSFET 的混合器件对比分析结果表明，HyS\_J 具有更低的反向导通压降，更好的反向恢复性能和更小的开通损耗。建立了混合器件门极控制延时相关的逆变器损耗模型，分析并讨论了HyS\_J 和HyS\_D两种混合器件在单相逆变器应用中的理论损耗差异。搭建 5kW 单相逆变器样机实验平台，分析比较了基于两种混合器件的单相逆变器效率与结温。

实验结果表明，在轻载时，基于HyS\_J逆变器峰值效率比HyS\_D的峰值高0.5%，对减小经常工作于轻载工况下的逆变电源能耗具有重要意义。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)