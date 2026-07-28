# 基于 Si 和 SiC 器件的逆变器系统性能对比研究


> 原文地址: [https://mp.weixin.qq.com/s/c3XfJkzbmtgLHcW8vdXJ3g](https://mp.weixin.qq.com/s/c3XfJkzbmtgLHcW8vdXJ3g)

文章来源：电气传动

作者：马保慧 1，2（1. 天水电气传动研究所有限责任公司，甘肃 天水 741020；2. 大型电气传动系统与装备技术国家重点实验室，甘肃 天水 741020）

摘要：在电气传动和可再生能源等设备中，逆变器是核心部分，然而传统逆变器系统多采用 Si 器件，存在功率损耗高、效率低等不足。为解决此问题，将 SiC 拓展至逆变器中，构建了基于 Si 和 SiC 的两电平、三电平逆变器系统，并对此系统分别在功率损耗、效率、器件结温、运行费用和预估投资收益等方面进行了对比研究。结果表明，在功率损耗、效率、结温方面，SiC 逆变器系统明显优于 Si 逆变器系统；SiC 逆变器系统虽初始投资较高，但长远的运行费用和收益均优于 Si 逆变器系统。

关键词：逆变器系统；碳化硅；效率

在现代工业快速发展的今天，逆变器已成为电力电子变换器的核心拓扑，被广泛应用于交流传动、新能源等领域。效率是考核该系统是否节能的一个重要指标，然而传统逆变器系统多采用Si 功率开关器件，从而导致系统存在效率低、开关频率不高和滤波电感体积较大等问题。

SiC 功率器件以其开关频率高、开关损耗小和耐高温等优良特性而备受青睐。自 2011年，美国 Cree 公司推出第一代 SiC MOSFET，SiC功率器件便被广泛应用于各种变换器中。文献［5］研制了 SiC 逆变器样机，功率密度达 60 kW/L；文献［6］将 SiC 功率器件应用于单级式光伏逆变器中；文献［7］设计了基于 SiC 器件的电机驱动器。文献［6-7］利用 SiC 提高了开关频率，降低了装置体积，但并未对基于 Si 和 SiC 的逆变器系统进行定量比较。

本文以基于 Si 和 SiC 的两电平型、二极管钳位 NPC1 型和 T 型 NPC2 型三 电平逆变器为研究对象，对 2 种开关器件的逆变器系统功率损耗、效率、器件结温、运行费用和预估投资收益等方面进行了对比研究。结果表明，在上述方面，SiC 逆变器系统均明显优于 Si 逆变器系统，但 SiC 逆变器系统初始投资会稍大，随着加工成本的降低和成品率的提高，初始投资成本有望得到缓解。

1 逆变器系统性能对比分析

1.1 拓扑电路

针对两电平、三电平逆变器系统，分别给出了两电平型和二极管钳位型及 T 型三电平电路，如图 1～图 3 所示。为了便于分析，三相系统中选用一相作为分析对象。在使用 SiC 器件的例子中，内嵌的二极管将用其它器件代替。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0y2BprPicbszvWEJwYgYxDGhCSeSMzIbKPSlYUd6XS8nYHXhJkL13ibY4g/640?wx_fmt=png&from=appmsg)

两电平和三电平系统的主要不同是三电平增加了 1 个输出电平，在同样的开关频率时，可以降低输出电压和电流的纹波，降低功率器件的耐压值。在不增加开关器件损耗的条件下，三电平拓扑可以减小设备或硬件的体积，降低滤波器费用，而且开关频率可以适当提高。对于 AC 400 V逆变器系统，两电平的方案需要 1200 V 的开关器件，NPC1 方案需用 650 V 开关器件，NPC2 方案T1～T4需采用高速开关管，NPC1 方案降低了开关损耗却增加了导通损耗。

1.2 硬件设计工作量分析

基于 Si 和 SiC 器件的逆变器系统拓扑电路不同，所用功率器件、控制器和驱动电路也不同。对于 Si⁃IGBT 三电平拓扑，由于需要更多数量的开关器件，会明显增加主电路、驱动电路及系统结构设计等的设计工作量，而且过多的半导体器件会导致失效率（FIT）增加，可靠性也会降低。如果采用 SiC 的两电平解决方案，在不增加驱动电路工作量前提下，效率比三电平 Si 方案更高。

1.3 功率损耗和效率分析

对于图 1～图 3 所示的拓扑，利用英飞凌 IPOSIM 损耗计算工具，输入数据进行仿真计算。相关数据可以从其选型手册的数据表中获得，在开关频率等参数确定的情况下，计算功率器件总的功率损耗，同时计算并联二极管的损耗，获得的仿真数据如表 1 所列。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0yicfwjictaZ8iaf74OfzN6jDA3mlPuxlcztWcJJVMsq7ib0Fw8EcAoLhxhw/640?wx_fmt=png&from=appmsg)

在 3 种方案中，假设铝散热器的特性是一样的，在85%负载时测定效率，结温（Tvj.op）是按照最大负载时测定。由于最大允许结温的限制，两电平方案中 Si⁃IGBT 的开关频率设置为 12 kHz。由表 1 的数据可以看出，Si 三电平方案在效率和结温上性能较优，开关频率可达 36 kHz，降低了噪音，提高了效率。对于高效逆变器系统，现阶段的 Si 三电平方案是逆变技术最具发展潜力的方案，在后续的分析中以该方案作参考。全 SiC两电平方案中，效率高于 Si 三电平方案，器件结温两者相当，输出电感保持和 Si 三电平方案一样，为获得和 Si 三电平同样的纹波电流指标，器件开关频率需翻倍。

以 250 kW 逆变器为例，各种方案的效率和输出功率的曲线如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0ypgVO0lCPxeqWtBcnLeNMA7lXZg8GAT2SdBEOH2gVNb8JocRzCq1uzQ/640?wx_fmt=png&from=appmsg)

图 4 中，最下面的曲线是全 Si 两电平方案，方案中由于器件的功耗限制了工作频率，整机最大效率为 95.3%。用反向恢复特性非常好的 SiC 二极管代替 Si 二极管，在相同的频率时系统效率可以提高 0.5%，几乎达到 Si 器件三电平方案的水平。因此，只要简单替换和优化功率模块和二极管，不改变控制策略，就可以达到提高效率的效果，这是一种对 Si 两电平系统进行快速改进以提高效率的较优方案。

在 85%的负荷时，Si 三电平方案效率可达96%，也是 Si 逆变器系统最高的效率，且不受输出功率的影响，效率近乎常数。5 种方案中最优方案为 SiC 两电平方案，系统损耗降低显著，器件结温低，效率可达 97.6%，在低功率输出时，器件的单极性特性也提高了效率，特性明显优于 Si 方案。

图 5 所示为 5 种方案能耗图。图 5 中都是以Si 器件三电平方案的功耗作参考的相对功率损耗。在功率损耗方面，Si 三电平方案优于 Si 两电平方案，SiC 两电平方案更优于所有 Si 方案，逆变器总功耗降低超过 40%，间接减小了系统感性原件损耗，性能极其优越。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0yTEhUh3Z6LwDCD3vUwFhRz9KpWdBv3jwloxicibbvhUYIREJacITU2uyQ/640?wx_fmt=png&from=appmsg)

2 逆变器系统运行费用分析

2.1 基本思路

提升逆变器系统的效率有很多方法，最直接可观的就是降低功耗。SiC 器件提供了一种理想的解决方案，它不但具有极低的导通损耗，而且在超高频率时，可以维持很好的电气性能。例如从基于 Si 器件的三电平方案改为基于 SiC 的两电平方案，效率可以从 96%提高到 97.6%，功耗降低可达 40%。由此可见，使用快速 SiC 器件，可以大幅度提高开关频率，降低系统成本，提高系统效率，同时会大幅降低前级和后级滤波电路中磁性元件的成本。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0yGbK4bDLZ2NxzxxLEqZ1BF21zE6Sbs8JHic8fhULJ9IicERTN3rlXDfLQ/640?wx_fmt=png&from=appmsg)

以 NPC2 拓扑结构为例，对逆变单元进行器件和拓扑优化的过程如图 6所示（图 6中只给出了单相示意）。传统拓扑中，主开关器件选用高速3模块一体的80A/1200V Si⁃IGBT，每个IGBT 反并联1200V Si⁃FWD 二极管，采用600V Si快速二极管和 Si⁃IGBT 实现逆变器中性端。在图6 逆变单元优化 A 步骤中，为了提高开关频率fsw，将拓扑Ⅰ中的1200V Si⁃IGBT 用同耐压等级的SiC⁃IGBT 器件代替。

替代后，在fsw=36 kHz 状态下，SiC⁃IGBT 可以输出额定电流 In=45 A。3 倍频率后，在保持同等大小电流的状态下，交流并网电感从 LAC=2.7 mH减小到 LAC=0.9 mH，电感值减少到原来的 1/3，体积将会缩小 3/5，变得更小更轻。

在逆变器运行时 ，通常为获得单管 SiC⁃IGBT 的常闭特性 ，需要和低压 P 沟道 MOSFET 串联，此方案能够确保在门极断电或短路时系统的运行安全 。 通常逆变器系统需要开发一个门极驱动芯片来控制 IGBT/MOSFET 级联器件。

在 B 步骤中，为了进一步降低系统成本，省略了 IGBT 中性点支路，转化为两电平逆变器拓扑，为了保证同样的电流纹波（LAC=0.9 mH），频率需提高到fsw=72 kHz，IGBT 的电流将达到 60 A，门极驱动单元数量会减少，门极控制的复杂度会降低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0y57l1Uv9ZtBhN0tlyC3bXcu6CmNbKAk7Xu7S7cF1bO952s08sWuMia1Q/640?wx_fmt=png&from=appmsg)

各优化方案参数如表 2 所列，SiC 器件在提高开关频率、降低滤波电感方面优势明显，它既能降低逆变器系统总的损耗，又能提高系统的工作效率，这使得整个逆变器系统通过改变功率器件的优化成为可能。

2.2 逆变器系统的总费用

在考虑系统冗余和过载全覆盖情况下，逆变器系统通常工作在非全载状态下。每周工作 7 d，每天 24h 85%负荷运行是标准的工作状态。在执行不同的电价时，功耗年运行费用如图7 所示，可以看出，逆变器系统效率从 94%提高到98%，运行费用降低超过 50%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0yogOlT1XictjVCRjibA1TEmtgPG7NWGPJJcLySSutdwicxOfFia5EBhByTQ/640?wx_fmt=png&from=appmsg)

为了评估基于 SiC 器件两电平方案的经济效益，需要考虑逆变器系统全生命周期的费用。对于各种方案，假设维护费用是相同的，在运行期间与费用有关的就剩下初始投资和功耗费用，这些也是所有费用的主要部分。初始投资包括逆变本体（功率模块、磁性元件和散热器）和其它系统部件，不同的方案包含各自不同的功率模块和驱动。

随运行周期而变化的费用如图 8 所示。图 8中，Si 两电平和三电平方案开关频率为 12 kHz，而 SiC 两电平方案开关频率为 36 kHz。虽然 SiC开关器件的功率单元价格比三电平方案的高，但系统效益是最优的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0y6pH2zwicIoRl9VTCvLficMoKDmyhd5rkJIFqwOiaQXnLWI4KDLHUWJgbQ/640?wx_fmt=png&from=appmsg)

逆变器系统的初始投资费用取决于技术方案的选择 。 在重点考虑效率时 ，这些可以忽略。从图 8 中可以看出。和 Si 两电平进行比较，三电平拓扑的节能效果最佳，由于显著降低了功率损耗，运营公司会选择 SiC 两电平方案。图9 所示是 5 a 后的收益对比图。图 9 中以 Si 器件方案作为参考，依据所损耗电费和所采用的技术，系统初始投资的收益是非常显著的。所以采用 SiC 器件对系统费用的降低起到非常大的贡献。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslT4geP2TshiamhXaDLztV0yhLku7lg6iaUedDrLLKf71Mye5oJs5hvbK5VngPW7IB7oYeMHN2ic8QCw/640?wx_fmt=png&from=appmsg)

3 结论

针对逆变器系统采用传统 Si 器件导致的功率损耗高、效率低等不足，将 SiC 拓展至逆变器系统中，并以两电平型、二极管钳位型和 T 型三电平型拓扑为研究对象，对基于 Si 和 SiC 的逆变器系统在功率损耗、效率、器件结温、运行费用和预估投资收益等方面进行了对比研究。结果表明：三电平方案可以获得很好的节能效果和很高的系统效率，但在功率损耗、效率、结温方面，SiC 逆变器系统明显优于 Si 逆变器系统。

尽管 SiC 器件的价格高于 Si 器件，但是 SiC技术方案在降低功耗方面优势明显，且能显著提高系统效率。在未来 5 a 运行中还可以节省 9%的初始投资。可以看出，SiC 逆变器系统的运行费用和收益均优于 Si 逆变器系统。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmj0JY4s7ZdRibeIf15aYjBqW85J442XbG329YDGILPCt97Ls5QIHiatkjfl2om5VJ51DOqzIGjU7FQ/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmj0JY4s7ZdRibeIf15aYjBqBUHjVHlhMf6JPBiaibSviaezbrO4N6Jic0e6o8x632j1p3icQ5ylVePnNibw/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmj0JY4s7ZdRibeIf15aYjBqeh1JOLofsstIAn1LT7kia0m8aYzbQiaMEXxkPHVd6NDNl6FSok47k3DA/640?wx_fmt=png&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)