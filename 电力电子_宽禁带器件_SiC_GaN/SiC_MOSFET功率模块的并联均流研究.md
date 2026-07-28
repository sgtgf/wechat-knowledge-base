# SiC MOSFET功率模块的并联均流研究


> 原文地址: [https://mp.weixin.qq.com/s/mbHaatefoSYyepV\_NB9zNQ](https://mp.weixin.qq.com/s/mbHaatefoSYyepV_NB9zNQ)

**文章来源：**集成电路设计与应用

**作者:**黄轶愚1，谭会生 1，2，\* ，吴义伯3，戴小平 4(1．湖南工业大学轨道交通学院; 2．长沙理工大学近地空间电磁环境监测与建模湖南省普通高校重点实验室; 3．武汉大学微电子学院;4．湖南国芯半导体科技有限公司1) 

**摘要**:采用多芯片并联的方法可提高SiC MOSFET功率模块的应用电流等级，但由于并联支路的杂散参数差异导致流过各并联芯片的电流不一致，这将影响功率模块的可靠性。建立了典型的三芯片并联半桥模块电路模型，分别改变功率回路和驱动回路的杂散参数并计算其不均衡度， 使用双脉冲测试方法测试相应的开、关电流，计算其电流不均衡度。研究了模块内部各杂散参数 对多芯片并联均流能力的影响，结果表明，功率模块的瞬态均流能力受源极电感影响较大，稳态 均流能力受杂散电阻影响较大。提出了一种基于芯片源极互连降低并联均流不均衡度的方法，仿真结果表明该方法可有效降低源极参数对多芯片并联均流能力的影响。

**关键词:**功率模块;封装技术;杂散电感;并联均流;源极互连

**0 引言**

近年来，随着半导体技术的进步和SiC材料的高速发展，商用SiC器件得以迅速发展，SiC MOSFET凭借SiC材料的优异特性，如高阻断电压、高速开关及低损耗等特点，逐渐取代传统中低压应用场景中作为核心开关器件的Si IGBT与Si MOSFET。

在元胞大小及工艺一定时，芯片的通流能力由芯片面积决定。由于受半导体工艺及热、力学因素的限制，芯片面积会受到限制，故单个芯片通流能力有限。为了提高芯片应用电流的等级，通常将多个芯片进行并联构建功率模块来增加容量。在多芯片模块设计时，由于模块空间布局设计的限制，通常无法保证流过各芯片的电流路径相同，而电流路径的差异会导致工作过程中各芯片之间流过的电流 大小产生差异，最终影响模块可靠性。

目前，对于并联均流影响因素的优化方法通常有降额通流［1 ］ 、开关过程控制［2－3 ］ 、串联电阻［4－5 ］ 、耦合电感［6 ］ 和DBC布局设计［7－8 ］ ，对于多芯片并联功率模块工作时电流均衡性受模块内部杂散参数影响的研究较少。

本文根据典型的三芯片并联半桥模块，使用Cree公司提供的SiC MOSFET芯片，采用Spice仿真模型研究模块内部杂散参数对并联均流能力的影响，提出了通过源极互连降低多芯片并联电流不均衡的优化方法。

**1 功率模块并联均流能力**

**1.1多芯片并联功率模块的电流模型**

由于半桥模块在工作时通常只由上桥臂或下桥臂进行单独导通，同时另一桥臂为关断状态，故可对单个桥臂行为进行仿真分析。以三芯片并联的半桥模块上桥臂为例，如图1的电路模型所示，该电路包括工作时流过较高电流的功率回路和控制SiC MOSFET开关的驱动回路。图中:Ld和Rd分别为与芯片漏极相连的漏极杂散电感和漏极杂散电阻;Ls和Rs分别为与芯片源极相连的源极杂散电感和源极杂散电阻;Lg和Rg 分别为驱动回路上与芯片栅极相连的栅极杂散电感和栅极杂散电阻;RG为驱动电路的串联电阻;LG为驱动端到功率模块驱动端子的杂散电感;S为SiC MOSFET;VDC为母线电压;L为负载电感。这些杂散参数的存在影响了功率模块的性能，并且各芯片所在支路的杂散参数差异会影响模块的并联均流能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVbsgbibESx42TCLpJibMC9jKvBZHdQZ9ISugicHRnPc0dpvtuLHUKhwSqw/640?wx_fmt=png&from=appmsg)

**1.2并联均流能力的测量方法**

模块内部各并联支路杂散参数的不均衡是导致并联时电流不均衡的主要因素，为了表示支路之间相同位置上参数的不均衡，可通过式(1)计算功率模块杂散参数的不均衡程度(ζ)，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVEqL1NXdVQekf0XZpDsIAsOov3lGkOHvTBNaCxiaQAldVFQiaxtnCOtVA/640?wx_fmt=png&from=appmsg)

**2 模块内部杂散参数对均流能力的影响**

通过仿真研究多芯片模块中的杂散参数对均流能力的影响，采用Cree公司的CPM3－1200－32A 芯片，根据图1所示电路模型搭建双脉冲电路仿真模型。搭建好的电路模型如图2所示，其中Soff 为下桥臂的MOSFET芯片，设定为负压;Tj为芯片的结温，在这里接地表示其结温为室温的情况。为了对比均流能力，将各支路的初始参数(表1)设置为相同数值，以达到完全的参数平衡。表中Rds 为功率回路杂散电阻，Rd s =Rd+Rs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVceLicgSAmjOENEKZ1Yz70dOBcdgqLtj1M8K2vqs9fq4yhn5UGj6Uo2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVtHtQLX4En0micuCx7EwR620tmSfCR9MILd0DnZKLtMiavQ2CAO2uD4JQ/640?wx_fmt=png&from=appmsg)

**2.1 Ld差异的影响**

通过改变Ld对并联均流能力的影响进行仿真， 首先改变各支路的Ld并计算其参数不均衡度，而后进行双脉冲测试仿真，得到第二个脉冲时各支路的电流波形如图3所示，将仿真得到的数据代入式 (1)和式(2)，在3组不同的Ld下得到的结果如表2所示。经分析可知:Ld的差异会导致并联时瞬 态导通电流不均衡，同时也会影响稳态导通时的稳态电流不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV6zpewD1huskukWlbDG1JicEVLiah3xib7Fe4N3qOX2VibSXcb15qlhMO8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV9RgictCp58Nqk862f5pWg7CgIaz8qBgUpXhJVa9WDf9Vv73qtm8Cc4A/640?wx_fmt=png&from=appmsg)

为了研究Ld的增减对并联均流能力的具体影响，分别对其中一条支路的Ld进行了增减，经双脉冲测试仿真后得到的各支路波形如图4所示，经分析可知:在某一支路的Ld增大时，其对应的稳态电流会相对降低，同时其关断电流的峰值则会增加，在Ld减小时则呈现相反的现象。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVptRAzoXklzPax0Pcx1C3icM4hGotoOS31ge9KSm1kmpmfibYBbfHyhtQ/640?wx_fmt=png&from=appmsg)

**2.2 Ls差异的影响**

与研究Ld的方法相同，首先改变各支路中的 Ls，计算其不均衡度，而后进行双脉冲测试仿真， 得到第二个脉冲时各支路的电流波形如图5所示， 将3组仿真数据代入式(1)和式(2)后，得到的结果如表3所示，经分析可知Ls的差异会导致严 重的瞬态导通电流不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVYnSwlCmnzzy6tibvnE63hcT06Jmfyvl6Up3ricBGReCt7icepOP25yHBA/640?wx_fmt=png&from=appmsg)同样地，通过对其中一条支路中Ls参数的增减从而对其具体影响进行分析，经双脉冲测试仿真后得到各支路波形如图6所示，经分析可知:在某 一支路的Ls增大时，其对应开启过冲电流相对降低，Ls减小时则呈现相反的状态，即开启时过冲电流相对增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV3vIicIibGH5seQUZ2VAOL4YMo2CLZluCnEqKLO7O9xJA7GDx3utkh28A/640?wx_fmt=png&from=appmsg)**2.3 功率回路Rd s 差异的影响**

研究功率回路Rds 时，通常指的是开关换流 回路中的杂散电阻，即Rds =Rd+R s 。首先改变功率回路各支路的杂散电阻，并计算其不均衡度， 而后进行双脉冲测试仿真，得到第二个脉冲时各支路的电流波形如图7所示，将数据代入式 (1)和式(2)后，得到的结果如表4所示。经分析可知:功率回路各支路Rd s 的差异会导致各芯片稳态工作时通过的电流出现较严重的电 流不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVyHe4edbW02L8ZOjuQq27kqEwu7eoxHmb7ZCTdDdHFWsXEhzficF6g1w/640?wx_fmt=png&from=appmsg)同样地，对其中一条支路上的功率回路Rds 进行增减分析其具体影响，经双脉冲测试仿真后得到的各支路波形如图8所示，分析可知:在功率回路Rds增大时，其对应的支路稳态电流相对减小;当其减小时，则呈现相反的现象，即对应支路稳态电流增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV4p2AYrjIf8NBQhx46qtPWOIVxySahQB3IZYmgM6AhBCicg3mzvoUvicA/640?wx_fmt=png&from=appmsg)

**2.4 栅极回路Lg差异的影响**

通常情况下，功率模块中的栅极回路由于空间布局限制，电流由栅极端子到达芯片栅极焊盘的路径通常较长，所呈现的杂散电感也较大，在对多种标准型模块封装进行杂散参数提取后，发现Lg通常为20～40 nH，故仿真时Lg的基准数值设定为中位值30 nH。与研究功率回路的各杂散参数时相同，先改变各个支路上Lg的大小，计算其不均衡度，而后进行双脉冲测试仿真，得到第二个脉冲时各支路的电流波形如图9所示，将数据代入式(1)和式(2)后得到的结果如表5所示。经分析可知Lg的差异会导致各芯片间瞬态开关电流的不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV5qOxSZX23Yrav0ulbeibQdNy4owLzcrUJgrYI8Xib9A07FNfCYFbwfLg/640?wx_fmt=png&from=appmsg)同样地，对其中一条支路Lg的增减进行深入研究，经双脉冲测试仿真后得到的各支路电流波形如图10所示，结合图9可知，对于Lg增大的支路，存在器件开启时间提前数纳秒的现象，同时开启时过冲电流回落幅度相对增大;相反，在Lg减小的支路，呈现器件开启时间滞后数纳秒，过冲电流回落幅度相对减小的现象。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVJboPia5JQlDx00YE9YBXrCOkokZMAOOxoMhpibUjPYybCeDVPTkwxQ7w/640?wx_fmt=png&from=appmsg)

**3 芯片源极互连的方法改进并联均流能力**

针对由并联回路杂散参数不均衡导致的电流不均衡，本文提出了一种芯片源极互连方法，即在并联芯片的源极焊盘之间进行键合线互连，该方法可以降低多芯片并联模块中各个支路的不均流。以杂散参数不均衡的三芯片并联半桥电路为基础进行建模并仿真，对芯片模型的源极互连用一个串联的电阻Rw与电感Lw来等效键合线，所得电路模型如图 11所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVWJ4DPUb1PJG7alaJHG2D8XldLGkiaJz8duLdRVLKEPRQhiblficCWHEMg/640?wx_fmt=png&from=appmsg)

**3.1对各个参数导致的不均衡的改善**

**3.1.1漏极杂散电感**

改变各支路Ld，对比无互连模型与源极互连模型，双脉冲测试的第二个脉冲仿真波形如图12 所示。分析可知该方法对于Ld不均衡导致的电流不均衡影响较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVh6Q8bnOP6AVWEYXxq9OqbuEmib5ZMG2dvibiazIqcjDPTicgQvPytUrQLQ/640?wx_fmt=png&from=appmsg)

**3.1.2源极杂散电感**

改变各支路Ls，对比无互连模型与源极互连模型，双脉冲测试的第二个脉冲仿真波形如图13 所示。分析可知该方法可以对Ls不均衡导致的电流不均衡进行改善。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVibyDkqtJ7Fd0wo1lydzsyamOW1cuNOVcHbQg70lL3DIZvfnKFe8UPAg/640?wx_fmt=png&from=appmsg)

**3.1.3功率回路Rds**

改变各支路功率回路Rds ，对比无互连模型与源极互连模型，双脉冲测试的第二个脉冲仿真波形如图14所示。分析可知，该方法可以有效改善由Rs不平衡造成的电流不均衡，而无法改善由Rd 不均衡导致的电流不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVbVP0bO6pu3LmjNzicFpU6ypgyr8W2IqvCJsyZOsfpPo9icRdADXyuRLw/640?wx_fmt=png&from=appmsg)

**3.1.4栅极杂散电感**

改变各支路Lg，对比无互连模型与源极互连模型，双脉冲测试的第二个脉冲仿真波形如图15 所示。分析可知该方法无法有效改善由Lg不均衡导致的电流不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVTCsrQv5g5l61KUuJKBlTF5GxpCPJ7iaMFVwAYlCneMmibdwz6Aic4I3aA/640?wx_fmt=png&from=appmsg)

**3.2其他影响因素**

为了研究多芯片(＞3)并联情况下源极互连方法的适用性，建立了4芯片并联参数不均衡模型并进行源极互连优化，两者双脉冲测试的第二个脉冲仿真波形如图16所示。可见，对于4芯片并联时的杂散参数不均衡所导致的电流不均衡，源极互连方法也可进行良好地改善。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVjPKczCfRCv6xtwlFiaBYF83kdalgFHibhYImQpzH2YibUFDuyVqls9ZmA/640?wx_fmt=png&from=appmsg)

分析互连键合线杂散电感(Ls w )对源极互连方法的影响。芯片源极焊盘间通常使用键合线进行连接，在仿真时可等效为键合线电阻Rsw与电感Lsw的串联，其中Lsw 受键合线形态影响，数值变化较大。为了研究Lsw对源极互连方法的影响，对图17 所示的不均流情况，使用不同大小的Lsw 分别进行仿真，结果如图18和图19所示，分析可知，当 Lsw 由3nH增加至10nH时，源极互连方法对不均流情况的改善能力会降低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV39OM0QiaQeFL6Jb0AAhaarP9ibbAvWp2cR9NSTDbdCE8APd7AXCMjAXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWVqq7DSXSNiaicxuTl6TIkwpYApSBsBnNSoFJqqaudicwkrG2YwS9SaDtGw/640?wx_fmt=png&from=appmsg)

**4 结论**

本文分析了多芯片并联SiC MOSFET功率半桥模块中存在的杂散参数与分布，通过电路建模与仿真分析了模块中杂散电感与杂散电阻对多芯片并联均流的影响，得到如下结论。漏极杂散电感不均衡对稳态与瞬态电流的不均衡度影响较小。当某一支路漏极杂散电感增大时，其对应稳态电流降低同时关断电流峰值增加，减小时则呈现相反的现象。源极杂散电感不均衡对瞬态导通电流不均衡度的影响较大。当某一支路源极杂散电感增大时，其对应开启过冲电流降低，减小时呈现相反的现象。功率回路杂散电阻不均衡对稳态电流不均衡度的影响较大。当某支路杂散电阻增大时，对应支路稳态电流相对减小，减小时呈现相反现象。栅极杂散电感的差异会改变各个芯片开启的时间顺序，进而影响到瞬态均流能力。当某支路的栅极杂散电感增大时， 器件开启时间提前，同时开启时过冲电流的回落幅度增大，减小时呈现相反现象。

本文还提出了一种在并联芯片间进行源极互连来降低电流不均衡度的方法。由仿真结果可知，该方法对源极杂散电感及源极杂散电阻差异造成的电流不均衡有较好的优化能力，并且适用于多芯片并联的情况。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)