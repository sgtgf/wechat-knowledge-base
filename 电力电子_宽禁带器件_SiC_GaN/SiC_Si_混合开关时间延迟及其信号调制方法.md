# SiC/Si 混合开关时间延迟及其信号调制方法

原创 丁四宝、 王盼宝 SiC碳化硅MOS管及功率模块的应用 2026-07-11 07:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/IVwFqkOJtHRxF7wyKFGk0A](https://mp.weixin.qq.com/s/IVwFqkOJtHRxF7wyKFGk0A)

文章来源：电工技术学报

作者：丁四宝、王盼宝、王卫、徐殿国（哈尔滨工业大学电气工程及自动化学院哈尔滨 150001）

摘要:SiC MOSFET和Si IGBT并联构成的混合开关（SiC/Si HyS）结构是一种优化效率和成本的综合解决方案。依靠 SiC MOSFET 的低导通时间构建 Si IGBT 的零电压开通和关断，并继承 Si IGBT 在高负载电流下的低导通损耗特性，从而提升系统整体效率。为了更简单高效地生成SiC/Si HyS的SiC MOSFET 和 Si IGBT 驱动信号，该文提出一种针对最小SiC 导通模式的信号调 制电路，通过配置对应的 RC缓冲电路中的电阻、电容值即可调节控制模式中的四个时间尺度， 该方法具有灵活简单等优点。首先，理论分析最小 SiC 导通模式下的 SiC/Si HyS 结构损耗分布特性；其次，给出信号调制电路原理并介绍信号调制电路的工作原理，建立RC缓冲电路参数和时 间尺度之间的函数方程；最后，基于搭建的 SiC/Si HyS 硬件平台，在双脉冲测试电路中验证最小SiC 导通模式下的 SiC/Si HyS 损耗特性和所提信号调制电路的有效性，并在 1.5 kW 两电平逆变器中检验所提信号调制电路的动态运行特性。  

关键词：SiC MOSFET 、Si IGBT 、混合开关、开关损耗、信号调制

0.引言  

随着功率半导体器件材料及半导体功率器件封装技术的发展，以碳化硅金属氧化物半导体场效应晶体管（Silicon Carbide Metal-Oxide Semiconductor  Field Effect Transistor, SiC MOSFET）为代表的宽禁带半导体功率器件凭借其高耐受温度、高开关频率、高耐受电压和低导通损耗等特性，有望替代传统 硅基功率半导体器件，为电力电子设备的高效率和高功率密度提供更多解决方案。但是受制于SiC  MOSFET 自身生产成本和器件封装结构等问题，硅基绝缘栅双极型晶体管（Silicon Insulated Gate  Bipolar Transistor, Si IGBT）在大电流应力应用场景下仍具备更小的导通电阻，因此目前在工业领域内Si IGBT 仍是电力电子设备采用的主流功率半导体器件。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQWGibO2rAKDXqXf87oeagjz5TNJHjWjYG7V11HZf0s4Iauqx3Oa70bict6mFf1kF19C5qzZwMibKzwTZKcZib8UGstgVLIGL3aibM/640?wx_fmt=png&from=appmsg)

受到Si IGBT 自身材料特性的限制，很难进一步提升工作频率。因此，有学者提出将SiC MOSFET和Si IGBT 并联的混合开关（Hybrid Switch, HyS）结构，其典型结构如图1a 所示，在HyS 中利用SiC  MOSFET 作为辅助开关，构建Si IGBT 的零电压开通和关断条件，从而减小Si IGBT 的开关损耗，解决IGBT 的电流拖尾问题。SiC MOSFET 的引入提升了系统的开关频率，且相比同功率等级的SiC  MOSFET 系统具备更低的成本。

由于SiC MOSFET 和Si IGBT 两种器件的动态特性差异较大，已有学者针对两种功率半导体器件并联的电流分配方式和与之相对应的工作模式开展研究。文献\[12\]建立了SiC/Si HyS 不同工作模式下的器件损耗特性模型。文献\[13\]提出了针对SiC/Si HyS 结温均衡的控制策略，避免传统工作模式下单个SiC MOSFET 过热导致的热失效问题。文献\[14\]在构建工作模式时将寄生电感对开关特性的影响纳入其中，综合考虑成本和系统电流裕度，考虑器件选型，保证SiC/Si HyS 结构的可靠稳定。此外SiC/Si HyS 的时间尺度也与实际应用场景下负载电流大小相关，对此有学者提出基于有源控制的SiC/Si HyS 控制策略，基于实际运行电流灵活调节延迟时间，保证系统的运行损耗最小。文献\[18-19\]对SiC/Si HyS 结构中个体器件失效的影响和对应器件失效后的控制策略展开研究。上述文献成果证明了SiC/Si HyS 在并网逆变器、电机驱动和直流断路器等电能传输系统应用场景中，已成为一种介于全Si IGBT 器件系统和全SiC MOSFET功率器件之间的折中方案。  

上述研究主要针对如图1b 所示的并联导通模式，在其整个导通周期SiC MOSFET 和Si IGBT 都会完全导通，并分别承担一部分电流，因此在设计SiC MOSFET 和Si IGBT 的电流容量时需要综合考虑系统的成本和功率等级，进而选择合适的功率器件。SiC MOSFET 的电流容量和Si IGBT 的电流容量按照更低的配比从而降低HyS 的成本。为了进一步降低SiC MOSFET 的电流容量，有学者提出如图1c 所示的混合开关最小SiC 导通模式，令SiC MOSFET 只在Si IGBT 的开关动作瞬间导通，构建Si IGBT 的零电压导通，此外最小SiC 导通模 式可以有效地降低SiC MOSFET 的导通损耗，弥补器件之间电流分布不均衡导致的损耗和结温偏差，并对SiC MOSFET 的器件成本做进一步缩减。  

为了便于研究最小SiC 导通模式下的时间延迟对SiC/Si HyS 的损耗特性的影响，本文提出一种针对最小SiC 导通模式的信号调制电路，该电路依靠配置RC 缓冲的电阻电容值即可实现对四个时间尺度的调节。首先，对最小SiC 导通模式下的SiC/Si  HyS 的整体损耗特性进行分析，获取四个时间尺度对整体损耗的影响；其次，为了简化控制系统的运算负荷，提出一种针对最小SiC 导通模式的信号调制电路，并对其工作原理与参数设计进行分析；再次，设计实验验证平台；最后，对实验结果进行对比分析。  

1.SiC/SiHyS损耗特性分析

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMiaic6HOrpFhuiclicR0SxvblWQ0Wdoia3WN6aw5Bvqzf82fEfc5qnOwI0faMyPxG1kBh6lRkrDJELFMSxElxccibiapZ8Cn2PH1gI3g/640?wx_fmt=png&from=appmsg)

SiC/Si HyS 最小SiC导通模式的一个开关周期内的典型波形如图2 所示。相比于SiC MOSFET 和Si IGBT 并联导通模式中的两个时间尺度，最小SiC导通模式下存在td1～td4 四个时间尺度控制调节SiC  MOSFET和Si IGBT 的导通关断，因此，其损耗特性更为复杂。

1.1开关损耗特性分析  

由于SiC MOSFET 的开关动作时间远小于Si  IGBT 的动作时间（典型的SiC MOSFET 的上升/下 降 时 间 约18 ns，Si IGBT 的上升/下降时间约120 ns），在td1≥0 和td4≥0 的情况下，对于最小SiC导通模式下的SiC/Si HyS 的开关损耗皆为SiC MOSFET的开关损耗。SiC/Si HyS 损耗Esw\_on\_HyS可以利用SiC MOSFET 开通时间ton 对开关损耗Esw\_on\_SiC 进行表示，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRMj8h4bcNxTfVzZOu76sFMuAu63cf3o91kiaSrOeoposQoRR6dIap6ibc4MX19WzCibaAu6987KBbErA8BmAN3zVIGFV3ibe7JibY/640?wx_fmt=png&from=appmsg)

式中，ids(t)为SiC MOSFET 的漏源极电流。 

SiC MOSFET的栅源极电压vgs可以根据栅源极回路电流ig 方程进行求解，得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPjMHjE9z1PE7IB1PAmZiaYuxS1HU9l8cx43D5YbZKib2sd4wb8QFUGLnDXtgwC8qncoG0gfjFDozzxrXClBLviaxCyJpk5HTeGow/640?wx_fmt=png&from=appmsg)

式中，t0 为驱动电压变化初始时刻；VCC 为驱动正电压；RG 为栅极回路电阻；Ciss 为SiC MOSFET 的输入电容；vgd 为栅漏极电压；Cgs、Cgd 分别为SiC  MOSFET 的栅源极电容和米勒电容。漏源极电流ids由vgs 控制为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP5TJYw4ibjiaVJbq6ucOKo6kjib2h13pSxiaSe6PbasibuTBZ8fVvZ4XDKKE4j3Z2xyibhJB5IvbmXXdJhpX6DnTmjDFyLuoLpZrs2s/640?wx_fmt=png&from=appmsg)

式中，gf为SiC MOSFET导纳；Vth,SiC为SiC MOSFET的阈值电压。  

在ids达到SiC MOSFET 漏源极输出电流IDS后，vgs 维持在米勒电压，根据式（3）和式（4），进一 步求解得到漏源极电压vds 变化率为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPynaHLib32KsaQwa6CXwvZBhY9G6YjL6lR88DdzYv8o3zibRiaZIsqTE735ESQLygkp0I2pjApVcAz6Bl6DzokpBvIbje1Ae5wII/640?wx_fmt=png&from=appmsg)

在IDS 确定的条件下，由式（4）和式（5），可以估算整个开通过程持续时间，电流上升时间tr\_on和电压下降时间tf\_off 分别为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOoF2iaZzpPCtbpxJUqwQANhGh9A5qhKTQ1owojAibZZ9UgTXLXJUyibcfwl6V0BPccv85Mt2rq4KicibdglzGiabHWEbNQnfibdYmYIc/640?wx_fmt=png&from=appmsg)

式中，VDC 为直流母线电压。由于ids 和vds 变化近似呈线性，则开通损耗可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMia8YqRv7W2U5YCqNKuEkfyPybXWNQgMutCWCOoKR8sqtDicu2sZcROSaB2flQnUicWa56XgXyXmnjqvNw5TI80Co0PJ8ZBO5Kjc/640?wx_fmt=png&from=appmsg)

关断损耗和开通损耗近似，关断过程中SiC  MOSFET 的栅源极电压vgs 和漏源极电压vds 变化率可分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMiaIiciadNyUtMMNPGKpU5VEFtdGe63SAg6xFRLZgoVRC3BTN3gqW55ZL2iaB9hy0wcN0oO4rt27JtXYxwjTg1N29FBnZ68GfOgqg/640?wx_fmt=png&from=appmsg)

式中，t4 为vgs 开始下降的时刻；VEE 为驱动负电压。 基于式（9）可以估算出关断过程中，SiC MSOFET的电流下降时间tf\_off 和电压上升时间tr\_on 分别为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMANHew5gKmAwQgYfuiavpH7YXLkc8cDZBBZtWYeX8lUM8icFdDzZWicbcr8uP3E9qfTk2ypFjTAkpdYzmJJc14zumuJEcRoxM1Lc/640?wx_fmt=png&from=appmsg)

结合式（12），可以估算SiC/Si HyS 的关断损ESW\_off\_HyS，即SiC MOSFET 的关断损耗ESW\_off\_SiC可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMK0eicPZp0cCgAwHxpicMBn5ax4AbHicxq4CNt7qVqObiaTNNoeQ4BjdAsSEiaYZajX0jChialpYicWukSmkNzZ6AYICH4nPVJw9zBxg/640?wx_fmt=png&from=appmsg)

1.2导通损耗特性分析  

如图2 所示，在最小SiC 导通模式下的SiC/Si  HyS 的导通损耗Econ\_HyS，由每个时间尺度内的器件损耗构成，可以视为四个部分。第一部分为第1 个时间尺度（td1）和第4 个时间尺度（td4）内的SiC MOSFET 的导通损耗Econ\_SiC\_td1 和Econ\_SiC\_td4，可分别表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPllPZDfREsD9wSG51heLk7dNqD0c7Guib5sLUd8zZFcMnDiarSSN2A4zLvxpfia5SVXoYGSgoNZUFXE2gtXsicnlmGiaCF3mczEKH4/640?wx_fmt=png&from=appmsg)

式中，ton 和toff 分别为SiC MOSFET 的开通、关断 过程的持续时间；IO 为流过SiC/Si HyS 的负载电流；Rds,on 为SiC MOSFET 的导通电阻。  

第二部分为t2 和t4 时刻开始阶段所对应的Si IGBT 的开关损耗Esw\_on\_Si\_td2 和Esw\_off\_Si\_td4。在td2 和td4 的开始时刻，SiC/Si HyS 的端电压为SiC MOSFET的饱和压降（2～4 V），因此Si IGBT 可以近似视为零电压导通和关断，故而有

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPocR7HqpD8mINxwR8ZzUJ3AdYchPvLoSeESfiaNia9zgT3GongkxujroUsLG6GsWX9K5RW4btm0iakM2yUK0jQqus8galcRO2icsA/640?wx_fmt=png&from=appmsg)

第三部分为td2 和td4 时间尺度内，SiC MOSFET和Si IGBT 的并联导通损耗。Si IGBT 的器件结构可以等效为一个MOSFET 串联一个NPN 型双极性结型晶体管（Bipolar Junction Transistor, BJT），因此IGBT 的导通电压为MOSFET 的漏源极电压VMOS、BJT 的PN 结的正向导通电压VPN以及器件内部键合线等效电阻上的压降VB 三者的总和，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM7L5j32O0GtYKbPt5mjklmKPbyuYwLSicWns5JgDjV9JnU5hvmKFRInZlAQEjI8wUB1ngH1BI4libWx1fLL3ucvTpqas9Ckr93U/640?wx_fmt=png&from=appmsg)

式中，ICE 为Si IGBT 的集电极\-发射极电流；LCH 为沟道长度；μni 为内部电子迁移率；COX 为栅极氧化层等效电容；Vth,Si 为IGBT 的开通电压；n为电流注入系数；VT 为热电压；IS 为反向饱和电流；RB 为键合线等效电阻。  

根据式（17），Si IGBT 的导通电阻在低ICE 阶 段呈非线性，在IGBT 刚刚导通的阶段，其等效导通电阻Rce,on远大于SiC MOSFET 的导通电阻Rds,on。 当td2 的持续时间较短或负载电流较小时，该阶段的整体损耗仍然以SiC MOSFET 的导通损耗为主。结合式（17），td2时间内的Si IGBT 的导通损耗Econ\_Si\_td2和SiC MOSFET 的总导通损耗Econ\_SiC\_td2 之和可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO8icFG4KFB4BA0Kb90khoQou3EayJibAHO0LAicMw4t5AljlZ4cQ6ia0hAI6nGBHNjicUg0dkxib6Ersa4juZ2icBRokcia3AhvF1fAe8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPW9m7qfPZpZDmyjmJmTW2U8AWpiaIvxAt1kXG3tJiaGMdpkHl0DPN2wcQ86Z29LZsFr9AL6tTPGIpufhpS1icPgg8EKkfMzn7ibR4/640?wx_fmt=png&from=appmsg)

Si IGBT 输出特性曲线如图3 所示，设Si IGBT的膝点电压Vknee 所对应的发射极\-集电极电流为ICE0，当ICE＞ICE0 时，可以视为IGBT 进入线性电阻区，其饱和压降VCE 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPotM6ly5Ny3ic3XqvwmrHqLgBILgDUnyjVPjYic2Keoj1tc8aXu7xhrRpVHbwe5tDqPHCntwyB5n4WlkH3iczglbnubo8pyyvibcQ/640?wx_fmt=png&from=appmsg)

式中，VCE0 为Si IGBT 的输出特性曲线的线性区域延长线和VCE 轴的交点。

从td3 时刻开始，如果ICE＞ICE0，Si IGBT 处于线性电阻区，此时流过SiC/Si HyS 的电流可以分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMuM5LnMVGFBLqJ4PoGweap0PCM1LOVt41SlAXTp1z7r4r7YKNGiawl9o1CVOQic2deleMCJdC0Ouxo4fib89MO6kVo59Yx2QoYM4/640?wx_fmt=png&from=appmsg)

对于td3 内的Si IGBT 和SiC MOSFET 的导通损耗Econ\_Si\_td3 和Econ\_SiC\_td3 之和可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMLmQCH5SAlI65NZcibmQTqN1nh0t807GhG0GgC73sUbNFUXIiaU0NLBicX9Va2ediaGE5SNV88mXBzia4zjCPWGwSQibWEWXic4LXoqY/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRBCFnIDA65OCTJDvlicficxcczkCicR0ZzObiamCxz7R5UcY3hlSnkkjrWV4iaj5eYN9Giav2DlricWe8WibCOWB30ad7zuqHXY075dY/640?wx_fmt=png&from=appmsg)

当实际输出电流IO ＜ ICE0 时 ，Econ\_Si\_td3 和Econ\_SiC\_td3 的计算方法和式（18）相同。最后一部分损耗为Si IGBT 单独导通导致的导通损耗，该阶段的导通损耗Econ\_Si 可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPNpjqOkM87FHfwCOsPc2ynEgDftJa3j3TE9dvEKvOjPapB2T7y0NVv67F8OWY9eZf411GPfjCknVUwkPuEcNSLtF3ib4JgxXbk/640?wx_fmt=png&from=appmsg)

式中，tdi为第i个时间尺度；TS 开关周期。  

综上所述，在最小SiC导通模式下的SiC/Si HyS的导通损耗可以依靠式（10）、式（11）、式（14）、 式（18）和式（24）计算得到。以两电平全桥逆变器为基础，进一步探讨SiC/Si HyS 在最小SiC 导通模式下四个时间尺度对导通损耗的影响。忽略死区时间内，SiC MOSFET体二极管的导通损耗以及Si  IGBT 并联续流二极管的导通损耗和反向恢复损耗。 在一个工频周期内，流过上/下半桥SiC/Si HyS 的等效电流示意图如图4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO7iaenV77ECbAzSo6xxUIEdkmWYlP7wfacg7Y0MXA5gjvyo4UwicKODZKLlr1uWRu6qEBxxwuib2m1qrO097oUB5oeTS67lsKUIo/640?wx_fmt=png&from=appmsg)

逆变器的输出的电流IO 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMk3icGhZJWVcnEvocNFkY5XB8hiazA7Mg9ABxG4Asmy4MRK3leDXoHV3cldJsJtYeKuciazia1XIcyNuYpBrmiaa7KtwNUmuAcJ3aM/640?wx_fmt=png&from=appmsg)

式中，IOM 为输出电流的幅值。由于Si IGBT 的导通压降呈非线性，为了简化分析，在\[0, α\]和\[π−α, π\]区间内输出电流小于ICE0 的部分，假设Si IGBT 的 导通电阻远大于SiC MOSFET 的导通电阻，输出电流全部流过SiC/Si HyS 内的SiC MOSFET。在区间\[α, π\]内，Si IGBT 进入线性电阻区，和SiC MOSFET共同承担负载电流。区间节点α由Si IGBT 的近似线性输出特性曲线与横坐标交点VCE0 进行估算为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMH6bsJkuIdMhosIxeyXdhqicDCohiaYxqON8qc0FK1borgMnSe9F8HWtjgS2P8V7C7g34Dptm6IY1asMoepDd9EBMict9gYwT6Zk/640?wx_fmt=png&from=appmsg)

对于正弦脉宽调制（Sine Pulse Width Modulation,  SPWM）下，一个开关周期内的器件占空比可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMLZDCmp9d5d9Dp0HocXEAZnevGdJicLEnoIyOdT3b2icmdx4zyVacAsxYm8wXEtLTWyve19Zviauv36M2scrlxcsCDIzCGXlLh2M/640?wx_fmt=png&from=appmsg)

式中，m为调制比。Si IGBT 的导通损耗分为两部分：①区间\[0, π\]内，Si IGBT 单独导通引起的导通损耗Pcon\_Si\_s1；②区间\[α, π−α\]区间内，SiC MOSFET和Si IGBT共同导通引起的导通损耗Pcon\_Si\_s2。因此，Si IGBT 的导通损耗可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOBLDoz6kyyR4N8eW7ZibJ0iaMzroSAC2xLTGytxwN2azSn1xAcPoHOeHpslBlCYruBN3AtaaMWAibm9BgWwvV7sPkEbGu9pt9434/640?wx_fmt=png&from=appmsg)

式中，ttotal 为四个时间尺度之和。Si IGBT 分担的电流ICE 可以用表达式（21）进行计算，代入式（28）中有

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOVLNqZcagFUsMrqTzIyHMuQfDo4SPczbhEKLib07fibkjn9icKzKVt14Iru5icpnjW5PHkQj8ftvIQONHaCn8gzZVkqMhaPqgiarvg/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNibSh6yokupXKmwHqH9p6EJVjPdax1vR30Bzd4zuQLibFnKLWTcfibbOxvX7NNEhbiadTibdTUJ47mB3fuBSVZ8HibfPeHzLqTB0Bz8/640?wx_fmt=png&from=appmsg)

同理，SiC MOSFET 的导通损耗包含两部分： ①阶段1 中四个时间尺度内的导通损耗Pcon\_SiC\_s1； ②阶段2 中SiC MOSFET 与Si IGBT 共同导通阶段导致的导通损耗Pcon\_SiC\_s2。SiC/Si HyS 在最小SiC  MOSFET 导通模式下，SiC MOSFET 的总导通损耗Pcon\_SiC 可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNDbZibMcMH6jO1zvvicwTzFRVFdXEfmLHHE7VlcSBEDMcumMjS48q8x7dgWT7yiaXpOdFLu4H729n4ZbIic8jXzyp6TU0s22POsZI/640?wx_fmt=png&from=appmsg)

将式（20）代入式（32），SiC MOSFET 的导通损耗可进一步表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNbxaiawicd04jqbEMQRmcm6JHQXRn6F2s5vNQBvzialgxWuEx9af2JsMPVkVvjAyibjncONK3JG83lqoFJ275UjVfCTzaWgssEURI/640?wx_fmt=png&from=appmsg)

Si IGBT 导通损耗与时间尺度的影响如图5 所 示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOO2JpibRwJicWmnLwrRzqQzQ8icEtVicShfSDTFjzlesiaKMHCyrPMJ3H6wUYV6kyXKlk8A2ibiazQ7v0NbFkBuBwQYvoxtVnV5In0BI/640?wx_fmt=png&from=appmsg)

图5a 和图5b 分别为10 A 和40 A 输出电流幅值下，不同时间尺度对SiC/Si HyS 的Si IGBT 导通损耗的影响趋势，其中SiC MOSFET导通电阻参考C3M0075120D手册给出的典型值75mΩ，IGBT 的导通电阻利用对CRG40T120AK3S 手册中输出特性曲线进行线性拟合得到，导通电阻线性为19 mΩ，VCE0\=1.3 V。由于忽略了Si IGBT 在小电流负载区域内的导通电阻，因此图5 得到的结果相比于实际导通损耗偏小。在输出电流较小的时候，由于Si IGBT 的等效导通电阻相对较大，因此提升SiC MOSFET 的导通时间有助于降低Si IGBT 的整体损耗；随着负载电流的提升，Si IGBT 的导通电阻降低，降低SiC  MOSFET 的导通时间有利于降低所需SiC MOSFET的电流，也有利于减小SiC MOSFET 的导通损耗占比。

1.3温度对损耗特性的影响  

 SiC MOSFET 的开关特性和导通电阻易受温度影响，因此进一步分析结温变化对SiC/Si HyS 损耗特性的影响。

1.3.1开关损耗  

根据式（8）和式（13），当SiC MOSFET 的结温更高时，阈值电压随之降低，其温度特性方程可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM9icIFZS4icC6ibe6yZVP0lLykoMQkjUiaM78SgRicfrVD5RkGNLGIZeT4vfbQq8pSUY9ApQBmzFqlLibtskxmN1M8yCSTTNszHoJvE/640?wx_fmt=png&from=appmsg)

式中，A、B、C、D为拟合系数。  

结合SiC MOSFET（C3M0075120D）数据手册中给出的Vth 的温度曲线，可以得到拟合系数分别为A\=2.6×10−⁹，B\=7.92×10−⁶，C\=4.7×10−³，D\=2.8206。 结合式（8）和式（13），不同结温和不同负载电流下的SiC MOSFET 开关损耗特性如图6 所示，母线电压设定为500V。随着结温的上升，阈值电压下降，开通过程提前，降低了开通时间，所以随着器件结温的增加，开通损耗随着结温的上升有所增加。阈值电压的降低造成了关断过程的延后，因此随着结温上升，关断损耗随之降低。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPgAQdPfkbn0mRcaGd7lwKXNfe2yapib51uiaibK3OuhAhwmKIxrFJibI4lL78QBPBV2jGMGIRia4w9pJr1teVBj3tLADBO1Wh76I64/640?wx_fmt=png&from=appmsg)

1.3.2导通损耗  

无论是SiC MOSFET 亦或是Si IGBT，器件的导通电阻都会随着结温的升高而升高，在考虑结温变化时，两种器件的导通电阻和Si IGBT 饱和导通电压方程中的VCE0 结温方程皆近似为一阶线性方程，分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOgib8UiadTqnhO7GerElib6pyHgNic5CMj9ltsD0f5cTuiaojVZzQicSlqIa4zntQ9SbVk191yGpuKciaqicNPeWSYQ8SMRQcAoyNOGg/640?wx_fmt=png&from=appmsg)

式中，Tj\_SiC 和Tj\_Si 分别为SiC MOSFET 和Si IGBT的结温；KTSiC、KTSi 和KVSi 为温度系数，依靠数据手册中25℃和150℃的值计算

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUymib05rHD5o0PhuycKSfIqoqRreU1sRtEBibWoxYkz3mMFWvj8rVGE2IxsoXnO4RMA4Umemr0ic2S8BxiaSzkX7YmfTpgvWt0kA/640?wx_fmt=png&from=appmsg)

KTSi 和KVSi 的表达式和式（39）的形式相同。随着结温的升高，SiC MOSFET 和Si IGBT 的导通电阻增加，势必造成整体的导通损耗增加。 

SiC/Si HyS 的热阻等效模型如图7 所示，Rth(j-c)为器件结到外壳的等效热阻；Rth(c-a)为器件外壳到空气的等效热阻；Rth(c-h)和Rth(h-a)分别为器件管壳到散热器和散热器到空气的热阻。前两者可以从器件手册查询，Rth(c-h)为器件和散热片之间导热硅脂和绝缘垫片的等效热阻。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO7z5s3Hahu6uBT36tGooZ7Nk35BpbXmxlH4Z0ZsE7qSfdlweJJ2B2xQdzicma9rNj1j4FaQA9xibq48VvfWOkKN1aJfFnKEVwCw/640?wx_fmt=png&from=appmsg)

根据图7 所示的等效电路，由于Rth(c-a) ≫Rth(c-h)+Rth(h-a)，可以列写各个节点温度表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPibqIFbZmzo6f8ZdthqkOvU2jhoI4dmW8WKygfCPy8FkDcGLK6VM3MdJpCE9d8MUYxr54qPnBevOjxoT0sYsYaLhfQCTicAlZeE/640?wx_fmt=png&from=appmsg)

式中，PSiC 为SiC MOSFET 的开关损耗和导通损耗之和；PSi 为Si IGBT 的导通损耗与并联二极管的反向恢复损耗、导通损耗之和。根据手册给出的器件最大工作温度可以估算Rth(h-a)，从而对散热片的尺寸进行设计，选择合适的散热风扇。  

2.SiC/SiHyS信号调制电路  

对于SiC/Si HyS，需要分别对SiC MOSFET 和Si IGBT 的控制信号进行处理，在电路结构复杂、开关管数量较多或者控制策略较为繁琐的电路中，需额外进行延迟运算来分别生成SiC MOSFET 和Si  IGBT 的控制信号，不仅增加了系统的运算负荷，对信号内部的调制方式和控制器的计算能力也有了更高的要求。相比于并联导通模式，最小SiC 导通模式下的SiC MOSFET 需要在Si IGBT 的开通和关断瞬间进行导通，为IGBT 提供零电压开关条件，因此最小SiC 导通模式下的SiC/Si HyS 的控制系统更为繁杂。为简化系统的控制策略，本文提出如图8 所示的驱动信号调制电路。只需对单驱动信号进行调制，就可分别生成对应的SiC MOSFET 的脉冲信号和Si IGBT 的内缩信号。信号调制电路由三个D 触发器（Q1～Q3）和一个或门（Q4）组成，对于最小SiC 导通模式下的四个时间尺度（td1～td4）可以依靠三组RC 延迟缓冲电路（RC1～RC3）进行独立调节。整体调制电路结构简单、控制灵活。此外，为了防止驱动信号脉冲过小导致的延迟时间远大于的导通时间，电路中加入保护复位功能。图8 中，s\_drive 为输入的驱动信号；so\_on 和so\_off 分别对应SiC  MOSFET 的开通脉冲和关断脉冲；sM 和sI 对应调制电路输出的SiC MOSFET 和Si IGBT 的驱动信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMPUTxYUkUk5uRST1U3cvZmVgic4EETEkbibTGibI8YPlDgPAl7Fj68P3Snk6MegyIMyf7xiaEp0D16DAU7n25NXKvicStHmW4zSerw/640?wx_fmt=png&from=appmsg)

2.1信号调制电路工作原理  

图9 为提出的SiC/Si HyS 驱动信号调制电路的输出波形。具体的电路工作原理如下：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNNg3NcYPB1hGSRxqZbp9xQsjpUUhEFMlXLD4cW8SibVfT8WBVibKIEzXT6ia2yQtrSR8KY6HPLBSEx5BBD8BW9ww7yLObzXxmUa0/640?wx_fmt=png&from=appmsg)

（1）开通过程：所提出的信号调制电路在开通阶段的等效电路如图10 所示，当s\_drive 由低电平转变为高电平时，触发Q1，so\_on 同步由低电平转变为 高电平。同时so\_on 开始为RC1 缓冲电路进行充电，达到非门电路的触发阈值电平，将Q1 的重置引脚RST 拉低，so\_on 同步转变为低电平。当so\_on 的上升沿经过RC3 缓冲后（见图10 所示的上升斜率较低的脉冲），触发Q3，sI 信号取反，由低电平转为高电平，驱动Si IGBT 开始导通。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNGtl8tgK87uaIBzD2GXn5GclQGh4zHwQ5uQVX0ricbN806lEmgAGY9oQubjag8WeAbzHK1icxkDHa52DAjyH2Do8MPS1kAVtPeg/640?wx_fmt=png&from=appmsg)

（2）关断过程：关断瞬态的等效电路如图11所示，关断信号的生成与开通过程类似，在s\_drive转变为低电平的同时，经过非门产生的信号驱动Q2输出高电平so\_off，so\_off 经过RC2 的延迟后重置Q2， 再次将so\_off 置低。后级so\_off 触发Q3，对sI 取反，经过RC3 的延迟后，由高电平转变为低电平，生成Si IGBT 关断信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMgriaQuc7zjNV0T9P59H7RmXfU2TLYHzPZnqXH4K5claiciaf0sW3eBVh7NTk8Sgz6pzRfb8dmL2a6Lia4Co4giaQSqdKg8iaxRHbRA/640?wx_fmt=png&from=appmsg)

驱动信号s\_drive 依靠D 触发器和RC 缓冲电路生成开通脉冲so\_on 和关断脉冲so\_off，两个脉冲经过或门进行逻辑运算，得到SiC MOSFET 驱动信号sM。 当s\_drive 的占空比较小时，可能会出现so\_off 的上升沿出现在so\_on 的下降沿之前，窄脉冲下波形如图12所示。在这种情况下后级Q3 无法进行二次触发，sI无法取反将会一直维持高电平，直到下个s\_drive 的上升沿，这种结果将会导致上下桥臂功率器件直通烧毁器件。为了避免此种故障信号，除了设置合适的SiC/Si HyS 的时间尺度，在信号调制电路中加入复位电路（见图9 中的与非门），对Q3 进行复位， 强制拉低sI，避免Si IGBT 的持续导通。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNPbQ9LjParkFeHW5ZXibKLBOg37jnGk8xDkOjKYJKlMhAqprcbSFHcVyPmicic8HRdoyHAqw1yFY73SDaa6ruHO4XzjN8jvdtjTs/640?wx_fmt=png&from=appmsg)

2.2调节时间参数设计  

最小SiC 导通模式下的SiC/Si HyS 涉及td1～td4四个时间尺度，全部由RC 缓冲电路进行设置，只需要配置相对应的电容和电阻，即可设置所需的时间尺度。根据上述的电路理论分析，可以得到对应调节关系：RC1 调节td1+td2；RC2 调节td3+td4；RC3调节td1 和td3。对于RC 缓冲电路可以简单等效为一 个一阶RC 充电电路，电容电压可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNf65WBCQEuicQonPiaGET0uXkFyhHOjGUjFJ9Y2alSuW8jPnYn4VoQvSj3SpUoCfQ3R5Kcbn6UgZJH9rLVU8q7rdgqYUcWAsVsY/640?wx_fmt=png&from=appmsg)

式中，VS 为供电电压。当电容电压上升至非门高电平阈值电平Vt+触发后级电路，因此延迟时间可以计算对应的延迟时间tdelay 可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3ZLcmBKP1ESnWiaaLCsg32h3icpSJc7KbvcUQm1FTm5kBx3zIuLiba8nY8tlyXgpiaYZUoBjxEK3eYRrgeEUGhYpEIyA19cDl7icA/640?wx_fmt=png&from=appmsg)

根据式（42）可以调节RC 缓冲电路电阻电容值，进一步实现对SiC/Si HyS 驱动信号的四个时间尺度进行设定或调节。  

3.实验平台搭建及参数设计

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpObhojnDxdjdiaic0DJYiamR1gJGUAXdiaTfpu10VkStVVibGIWAtiaGefGy1ecX8XwicaZ6Fib0sEMQY6DfUb2l9SqReVJ3rcEnKYZrjg/640?wx_fmt=png&from=appmsg)

为了验证所提出的SiC/Si HyS 的信号调制电路和最小SiC 导通模式下整体损耗分布情况，搭建了如图13 所示的信号调制电路样机和如图14 所示的SiC/Si HyS 全桥功率测试平台，具体的器件型号和硬件电路参数见表1 和表2，其中表1 列出的器件对应图8 所示的电路。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNhb7HicFmHouPDXMmXrLSPTWHaJdCQGbl7uoTxV9nJwRhfV9T8ziakGxf6wdUicJVAZU7M7GfC2atXgbYf4ERvhXgxvTmLOYDplQ/640?wx_fmt=png&from=appmsg)

由于SiC MOSFET 基本处于开关瞬态的脉冲电流负载下，出于成本考虑，搭建的SiC/Si HyS 实验平台采用的SiC MOSFET 为1200V/32 A，Si IGBT的功率等级为1200V/80 A，电流配比为1∶2。此外两种功率器件都采用TO−247−3 封装。为了降低功率侧电流对栅极驱动电流回路的干扰，分别在SiC  MOSFET 和Si IGBT 的栅极驱动侧并联470 pF 电容和10 kΩ的电阻，构建RC 吸收回路降低栅极电压振铃。两种功率器件的栅极驱动开通电阻均为15 Ω，关断电阻为7.5 Ω。SiC MOSFET 和Si IGBT的驱动电源正负电压为15.5 V 和−4.7 V。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPbNmHUZibIZ5zLyxcRNQPGTqGibRuYBNejzia9hpJRbkt8Wyn2Pt8cOXIIp0dsxYkQ9Y8VABaFxQWa8Sic9V9IVm9LxMdZLrvpTwE/640?wx_fmt=png&from=appmsg)

4.实验结果及分析  

首先，针对所提出的信号调制电路进行测试，拟合得到不同环节下的RC 调节时间常数，进一步验证输出信号保护模块的作用。其次，验证最小SiC导通模式下的四个时间尺度对SiC/Si HyS 损耗特性的影响，依靠所提出的信号调制电路，结合双脉冲测试电路，分析不同时间尺度对损耗和SiC/Si HyS开关特性的影响。最后，在全桥电路下验证所提出信号调制电路的动态特性和SiC/Si HyS 功率器件的温度分布。  

4.1SiC/SiHyS信号调制电路实验结果  

图15 所示为所提出的SiC/Si HyS 驱动信号调制电路的输入和输出波形，输入信号的频率为50 kHz， 占空比为60%。图15a 为输入信号s\_drive 和调制后 输出的SiC MOSFET 和Si IGBT 的驱动信号sM 和sI，其信号和图9 所示的电路原理所对应。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPrEZ0S5NyktjSMb981YnJfibY45PEV7VjoiaVucdaNYvCj2dDazaGbvSH8H9iaNxLWCc4rCGJtwOib9PZZciaRDbH0lS0y1iagXsDTg/640?wx_fmt=png&from=appmsg)

依靠s\_drive的上升沿和下降沿产生对应的脉冲电压，来构建Si  IGBT 驱动信号，利用RC 缓冲结构和触发器的阈值电压，实现对最小SiC 导通模式的时间尺度进行调节。如图15b 所示，sI\_in 为sM 输入缓冲电路RC3 后的输出电压波形。根据sI的信号电平变化和对应sI\_in的电平电压，可以确定Q3 的时钟输入高电平触发阈值电压为2.05 V。  

尽管sM 和sI 都是依靠相同的D 触发器电路生 成，但sI 的生成又经过一个或门运算，因此sM 和sI 可以视为存在两个不同的阈值电压。根据式（42），假设K为阈值电压系数，阈值电压可以表示为Vt+\= KVS。sM 和sI 环节对应的阈值电压系数分别为KM和KI，实际测试的RC 缓冲电路延迟时间和KM、KI 的拟合曲线如图16 所示。图16a 为KM\=0.63 下拟合得到的延迟时间td3+td4 和实际测量值（图中的 红色数据点），实际测量值和拟合数据基本一致；如图16b 所示，在KI\=0.48 下的拟合延迟时间和实际时间常数td3 基本相同。后续的实验参数选择依据上述拟合得到的KM 和KI。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMiaVbIFrCuLgZkR8ibFEws2wEwnTicuec0nfr05cPImSEFXoib02UibFKfJpfp9iacI6lMH5DJt4ssznicpw2RvJSyLwuAmyUPcGz2Zg/640?wx_fmt=png&from=appmsg)

窄输入脉冲下输出波形如图17 所示，当输入信 号脉冲宽度较小时，s\_drive 导致生成对应的上升沿脉冲so\_on 和下降沿生成的脉冲so\_off，在经过与门运算 后导致两个脉冲重合，sM 变为单个脉冲，为了防止缺失下第2 个触发脉冲拉低sI，加入信号保护电路后，当so\_on 和so\_off 同时为高，保护信号被拉低，直 接重置生成sI 的D 触发器Q3，sI 被拉低。信号重置电路的加入避免了由于缺少第二个触发上升沿而导致sI 保持高电平的信号乱序情况。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMJNIjsCbf4LgQOYuPd9UEtePrlBy5EKicrS1RZIIjdxk30S0vXzXHohCk2gUoBTs1KXwppetOkgp4GHnugJUZUzzMbtojhdLX0/640?wx_fmt=png&from=appmsg)

4.2SiC/SiHyS损耗对比  

为了进一步验证最小SiC 导通模式下SiC/Si  HyS 的损耗特性，将搭建的SiC/Si HyS 硬件测试平台配置为双脉冲测试电路，负载电感为676 μH，母线电压为600 V，测试信号频率为50 kHz，脉冲宽度为10 μs。由于所提出的信号调制电路会比原本信号多出td3+td4 的脉冲宽度，为了保证脉冲结束时刻负载电流的一致性，输入信号脉冲宽度根据时间尺度进行调节。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNwFVkNiawgzmIZzpz2PhgVBhJVzLhF7y4CauB86YAmNkfXFX1wWtplbTibMzSJHC9roicPXf92m1F8N9ibrpRz0O2gzUWHtfsjZSk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMKcicmve5elaHk3oZKIDXVeux0PWX65YMKfbQ742EiclhCfCicxAt4V1SGNUPjG5LJfaTxa0eWRdicMYwo8stnWlAy2icvppyVs4D4/640?wx_fmt=png&from=appmsg)

图18 所示为td1\=td3\=1.5 μs，td2\=td4\= 1μs调制下的相关电压电流波形，其中VGS 和VGE 分别为SiC MOSFET 和Si IGBT 驱动电压；VDS 为SiC/Si  HyS 的端电压；IL 为负载电感电流。  

图19 所示为SiC MOSFET 和Si IGBT 的电流分布情况，IDS 和ICE 分别SiC MOSFET 漏源极输出电流和Si IGBT 集电极\-发射极电流。在td1 阶段，仅有SiC MOSFET 导通，SiC MOSFET 承担全部负载电流。从td2 开始，Si IGBT 随之导通，在Si IGBT导通初期，导通电阻相对较小，因此Si IGBT 承担电流仍小于SiC MOSFET 直到td2 阶段结束，SiC  MOSFET 关断，Si IGBT 承担全部电流。在td3 阶段 内，Si IGBT 从低导通电阻过渡到和SiC MOSFET并联，因此ICE＞IDS。在整个导通阶段的器件损耗可以和图2 所对应。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMmyl6GRuB39H0otODEkXh9FcpnewoNibibfdSs2IWQWKKIOk81t0DrRr6Jj8M5U1bshVb6wYpcgtOzFx8q3GBXOqjQicmVNjFzfc/640?wx_fmt=png&from=appmsg)

关断过程Si IGBT 拖尾电流如图20 所示，尽管SiC MOSFET 已经完全关断，但Si IGBT 的拖尾电流仍会存在，因此拖尾电流的存在导致SiC/Si HyS的实际开关损耗比单个SiC MOSFET 的开关损耗更大。  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOtIovLy18I7Ggxn6BvQbsTPllDZz6U5uXTzGicjbNT46DlyqS5mu3PUMVmZWicvyFFMyHxBIibX7dCDjGVrbdUhMxibOXBicQ538zQ/640?wx_fmt=png&from=appmsg)

Si IGBT 和SiC/Si HyS 开关损耗对比如图21 所示，在相同负载电流下，Si IGBT 和SiC/Si HyS 的开关损耗对比。尽管在关断过程中，Si IGBT 的拖尾电流会增加开关损耗，但是得益于SiC MOSFET的低导通、关断时间，SiC/Si HyS 的开关损耗相比于Si IGBT 的开关损耗有所降低，尤其在高负载电流下，开关损耗减小超过50%。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMfGzoTvP2CgYPica7gWF9f3bOkq88bjUYs1MHboYe6fFPt9h31K0EbIjDB7YmdQQa45wic7gTEIqhU2rqx5iaw9nOkzDC1ic7YewY/640?wx_fmt=png&from=appmsg)

  

不同负载电流和时间尺度对导通损耗的影响如图22 所示，为不同时间尺度和负载电流下的导通损耗分布情况。Eon 为SiC MOSFET 完全导通后（SiC/Si  HyS 的VDS 降低至母线电压的10%）到整个导通周期一半时间内的导通损耗。Eoff 为导通周期一半到SiC MOSFET 开始进入关断过程（VDS 上升至10%的母线电压）时间内的总导通损耗。Eon 和Eoff 所对应的导通时间皆为5 μs。Ion和Ioff 分别为开通和关断时刻的负载电流。Eon\_Si\_2nd 和Eon\_SiC\_2nd 为对应Ion\=24 A 的负载条件下，单个Si IGBT 和单个SiC  MOSFET 所对应的导通损耗，Eon\_Si\_4th 和Eon\_SiC\_4th为对应Ion\=54 A 的负载条件下的导通损耗。Eoff\_Si\_2nd和Eoff\_SiC\_2nd 为对应Ioff\=32 A 的导通周期内的损耗；Eoff\_Si\_4thEoff\_SiC\_4th 则为对应Ioff\=61 A 的导通周期内的损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMHDBKibibJFoiavicb6oIicwXvNE2NRkHwnoc7vj70SicibSTBhEPRGtgeoqeiav8AVaq0bTicicYicgJfyRCHPPE9RpAxHJbmAS5vDWjhOo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPelicYSyYgbsjKoNkbSlicnePjhlUk7M72cARRXE5bwDmbNfc8HBxJicoNkaORMC88KhMiabG2ROUOavaObBKlHficib8QteHzEpMPU/640?wx_fmt=png&from=appmsg)

在低负载电流下，Si IGBT 的导通电阻在非线性区内，其导通电阻将会大于SiC MOSFET 的导通电阻，因此随着时间尺度的增加，SiC MOSFET 的导通时间增加，整体的导通损耗降低。随着负载电流提升，Si IGBT导通电阻降低，随着td1 和td4 的增加，SiC MOSFET 的单独导通时间增加，导致SiC/Si  HyS 的导通损耗变大，但比起相同负载电流下SiC  MOFET 单独导通的导通损耗，SiC/Si HyS 的导通损耗更小。  

  

4.3信号调制电路动态性能  

  

为了进一步验证所提出的信号调制电路的动态性能，将其应用于单极性倍频SPWM 下的两电平逆变器，开关频率为10 kHz，以降低SiC MOSFET 的开关损耗。输出侧经过LC 滤波，滤波电感为4 mH，电容为1 μF。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP6tvOx7QibLSOCmGklweoP5Ol9fsSN7JyMlkvAkAwkRCYHoxbl0G7ELicJRWD0A0Bp2ib6XINQicrFJkx2Je47RM5picypiacnmnroU/640?wx_fmt=png&from=appmsg)

  

图23 为单个桥臂的上、下半桥SiC/Si HyS的驱动电压和两电平逆变器的输出电压、电流波形，SiC/Si HyS 的四个时间尺度配置为td1\=td2\=td3\=td4\=800 ns，考虑时间尺度td3+td4\=1.6 μs，单极性倍频SPWM 的上、下半桥驱动信号的死区时间设定为2.5 μs。输出侧接阻性负载，输出功率为1.5 kW。 图24 为下桥臂中SiC MOSFET 和Si IGBT 的电流IDS\_L和ICE\_L。在单极性倍频SPWM 下，所提出SiC/Si  HyS 驱动信号调制电路可以在占空比实时调节下保 持稳定运行，输出对应SiC/Si HyS 所需的驱动信号。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNosBU3xr5icVpscDaIicYKgwFjICRQwG3o3ZnmL6ICEibtce557JMvNtkLh7aI87RbW23SiaM7eu1whmx91Hjwgnia5yu6jdX8bca8/640?wx_fmt=png&from=appmsg)

  

4.4效率对比与器件温度分布  

  

最小SiC MOSFET 导通模式下的SiC/Si HyS 和全Si IGBT 系统的效率η及器件温度T对比曲线如图25 所示，运行时间和散热系统完全相同。SiC/Si HyS 系统比全Si IGBT 系统具有更高效率，SiC  MOSFET 具备更低的开关损耗，同时也为Si IGBT构建了零电压软开关条件。对于并联Si IGBT 系统，Si IGBT 在低电流负载下的导通电阻更高，因此在低功率等级下并联Si IGBT 系统效率对比单Si IGBT系统效率更低，直至负载电流提升后，并联Si IGBT系统效率有所增加。对于SiC/Si HyS 系统，Si IGBT只承担导通损耗，SiC MOSFET 承担开关损耗，因此器件的发热相比于并联Si IGBT 更低，器件表现温度更低。SiC/Si HyS 在效率提升和器件温度控制方面更具优势。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPH0O0hjHh0fGOsJoLlF5qMyianLMm1HyGzNydGzfBGOAY1g6oNicGIgurR9TxgEMcUomKxcg4weCHZG5HZZnCspqyxGjGAicsL2o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOuWpTUUHwlXyz0nGXIxBJPwSjqumylzDsYIiaBvpoIQFaicOI6NTE0lAnbdpr3ZTHW6oxy7jjS09ib6tUaQZibjJKOTHn3QdBictTs/640?wx_fmt=png&from=appmsg)

5.结论  

  

本文分析了最小SiC MOSFET 导通模式下的损耗分布特性，在此基础上提出一种结构简单的信号调制电路，该电路可以依靠调节RC 参数，灵活配置最小SiC MOSFET 导通模式下的四个时间尺度。分析了所提电路的工作原理，建立时间尺度与RC参数之间函数关系，并通过所搭建的实验样机和硬件测试平台对所提出的方法进行验证，进一步阐述了最小SiC 导通模式的时间尺度对SiC/Si HyS 结构损耗分布的影响；在单极性倍频调制控制模式下的1.5 kW 两电平逆变器中，验证了所提信号调制电路具有良好的动态性能和稳定性。在效率和器件温度分布方面，SiC/Si HyS 结构更具优势。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPIFibOIiaiaiajBNHPAl8iaEib7FFHRGvtLRVtQI3Wz9ay29QwmIc0ibBIdlSib7eXMiaFqT4Ea8IeA8ztyAxUgGrrFJRX6hopic8Xh42q4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNp0wJ33jpDmwibNGTrGTia2Mricm7Nd6DAku8fI6TDkjvNATxNyJe9ibauYZmTnIhVE9Dqr1Hkja5nib9hg7u6Eku8bX5qUvFam9icg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMXme6l4jfavz7auficicicgjU4WMNu2SIuOu423IgJskafiaHhiajDYdjNAicM5JyiaPvFWVtNSDgAFVVtKmHzUDk78XNEGWflW93TxQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMj3ZhvMx6bUGpZ8Yfsvpvg4uQl9IGBdeSQR2KeQFa845TMe5YCxdFDLUgibmicF41TlKxUDZsgcV48wKtiaKia9NiaEoU4d2e5uowM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)