# 基于碳化硅MOSFET的全桥LLC谐振变换器设计


> 原文地址: [https://mp.weixin.qq.com/s/9v7mmYxmDcMnofAYZg1FlQ](https://mp.weixin.qq.com/s/9v7mmYxmDcMnofAYZg1FlQ)

**文章来源:**通信电源技术  

**作者：**吴文辉，孔铭，范自勇，李家宇，吴春欢（易事特集团股份有限公司）

**摘要：**第三代半导体碳化硅MOSFET具有高耐压、低导通以及开关频率高等优点，结合全桥LLC谐振变换器效率高、全范围软开关、损耗低等特点，两者在功率变换器中的应用越来越多。分析全桥LLC的工作原理和增益特性，结合 MathCAD 辅助计算，给出了一套全桥LLC谐振变换器的设计方法，并设计出一套20kW 基于碳化硅 MOSFET的全桥 LLC 谐振电源，通过 PSIM 验证了设计的正确性。

**关键词：**碳化硅 MOSFET；全桥 LLC 变换器；电压增益曲线；MathCAD

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gQo1b5dWiclhStic1ibnibCMc7p1YsTneFicpOGE85LV7VfIiafr6hialBLl6A/640?wx_fmt=png&from=appmsg)

**0  引  言**

随着以氮化镓（GaN）和碳化硅（SiC）为代表的第三代半导体材料的迅猛发展，越来越多的碳化硅器件在电力电子设备中得到应用。碳化硅MOSFET 具有高耐压、低导通损耗、高开关频率以及耐高温等优点，在高压设备中得到了广泛应用。本文使用碳化硅 MOSFET 作为全桥LLC 谐振变换器的开关管，研究了全桥LLC 谐振电路的拓扑结构和工作原理，并通过MathCAD 辅助绘制其增益特性。结合碳化硅MOSFET优点，提出了一种全桥LLC电路设计方法，并通过 PSIM 仿真验证其有效性 。

**1  全桥 LLC 谐振变换器电路拓扑结构**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gRS5gHT3098xUDQTFsVmv0YX332UE6jUO45kM7vxxHY4xGkWOiaOF1nw/640?wx_fmt=png&from=appmsg)

全桥 LLC 谐振变换器电路拓扑结构如图 1 所示。Q1、Q2、Q3 以及 Q4 为初级碳化硅MOSFET，Lr 为谐振电感，Lm 为变压器励磁电感，Cr 为谐振电容，Q5、Q6、Q7 以及 Q8 为次级输出的碳化硅 MOSFET。LLC全桥谐振网络的设计主要就是设计变压器变比n、谐振电容 Cr、谐振电感 Lr 及变压器励磁电感 Lm。

根据图1，碳化硅MOSFET 的Q1、Q2、Q3 以及Q4 为方波发生器，作为谐振网络的输入。谐振电容Cr、谐振电感 Lr 以及变压器励磁电感 Lm 组成了谐振网络，碳化硅 MOSFET 的 Q5、Q6、Q7 以及 Q8 为整流网络工作时需要同步整流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08ga5viaB0pQDMvFiaXsiaELhrPibEu5Pgk4HtAjWvxppo4UrIqN1ibszWZgNg/640?wx_fmt=png&from=appmsg)

**2 全桥 LLC 谐振变换器工作原理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gSFys1EqTvILHtc6LE9OIVBQwHlBwLIzTiadBDrnzMj9Mul8jFu7rYow/640?wx_fmt=png&from=appmsg)

设计全桥 LLC 谐振变换器的工作频率区间为fm ＜ fs ≤ fr，变换器在此区间时工作在感性区域，谐振电压相位超前谐振电流的相位。在管子开通前，体二极管已有电流流过，开关管两端的电压钳位为零，实现零电压开通管子。当fm ＜ fs ≤ fr 时，谐振腔工作波形如图 2 所示。将其分成8个工作阶段，前半工作周期和后半周期原理类似，这里只分别讨论其中4个阶段，其余4 个阶段类似。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gWMxW8gn1fno11JKBVJdXJ2dX02NfGH8rlqYAQiaP1tH3zrvCHPgdcnA/640?wx_fmt=png&from=appmsg)

根据图 2 的工作波形，将其分成 8 个工作阶段。在 t0~t1 时间段内工作原理如图 3 所示。在t0 时刻，碳化硅MOSFET 的 Q1、Q4 的 UDS 为零电压，此时给Q1、Q4 使能开通信号，实现零开通。t0~t1 时间段内谐振电流ir 大于励磁电流 im，即有电流流过变压器初级线圈，并将能量传递给了变压器次级线圈。变压器次级线圈的感应电流流过Q5、Q8的体二极管，给电容充电，为负载供电。

t1 时刻，谐振电流 ir 和励磁电流 im 相等，变压器没有向次级传输能量。变压器次级侧的碳化硅MOSFET 的Q5、Q8 流过的电流自动到零，并自然关断，实现零电流开关。如图4 所示，此时负载将由输出电容提供能量支撑。变压器的励磁电感 Lm、谐振电感 Lr 关断，谐振电容 Cr 一起谐振，谐振频率为 fm，其周期比谐振频率 fr 长，在 t1~t2 时间段内，谐振电流近似为水平。在 t2 时刻，Q1、Q4 的使能信号为零。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gPFagD2gUb8yGoRJESCMibVZRcic7dYIsk1FztnTVl0TZkPpQI6dyutDg/640?wx_fmt=png&from=appmsg)

如图5 所示，碳化硅MOSFET 的Q1、Q4 关断，进入死区时间，Q1、Q4 的 UDS 的电压逐渐升高至输入电压，Q2、Q3 的 UDS 电压逐渐降低，t3 时刻降低到零。此期间由于谐振电流ir 小于励磁电流im，变压器初级侧的电流改变方向，变压器次级也感应出电流，使Q6、Q7导通，给负载供电。变压器初级侧的励磁电感Lm被钳位，不参与谐振，此时谐振频率恢复为 fr。t3时刻，碳化硅MOSFET的Q2、Q3的UDS电压为零，为Q2、Q3使能信号实现零电压开通创造条件。在t4时刻，Q2、Q3使能信号为零。此期间，Q2、Q3的体二极管导通，使 Q2、Q3 的 UDS 电压保持为零。谐振电流 ir 小于励磁电流 im，ir 以正弦形式继续减小，im 线性减少。变压器次级 Q6、Q7 导通，持续给负载供电。

**3 全桥LLC谐振变换器增益特性**

将全桥LLC谐振变换器的输入等效成正弦基波形式，对其工作过程进行分析。由基波分析法，全桥 LLC谐振变换器等效负载阻抗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gA163xX3to8z89xGaA5Igpr1gwfUfgNcu2NjSD0U4HGS9XYgu2jHuow/640?wx_fmt=png&from=appmsg)

应用工程计算软件MathCAD，分别定量 k\=4 和Q\=0.35 时，绘制增益曲线如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gDC66Yc689nFib4VRACnxNr8licURAkqZ8CNmTGiaPrKl46GmPQz3HBibBQ/640?wx_fmt=png&from=appmsg)

借助MathCAD 绘制的增益曲线，可以定性分析谐振器增益特性趋势。根据图 6，当 k 一定时，Q越小，谐振腔的增益值 M 越大，且曲线更陡峭。当Q 一定时，k 越小，增益值越高，且增益曲线越陡峭。增益曲线越陡峭，则得到相同的增益区间时开关频率的变化范围较小。谐振变换器的设计需要考虑增益范围、开关频率以及开关管电流，综合考虑k和Q的取值，从而确定谐振器件参数。

**4  碳化硅 MOSFET 优点**

相较于目前市面常用的硅器件，碳化硅MOSFET具有高耐压、低阻抗以及高开关频率等优势。其比硅器件有更优异的耐压性，易于制作高耐压器件。高开关频率使得磁性器件、被动器件可以更小型，设备具有更高的功率密度和更低的系统成本。将高性能的碳化硅器件应用到全桥LLC 谐振变换器中，使变换器的开关频率更高、开关损耗降低。

**5  全桥LLC 谐振变换器设计**

通过对碳化硅MOSFET 优势的分析和对全桥 LLC变换器的研究，设计一款20 kW 的碳化硅MOSFET全桥LLC 谐振变换器，其额定输入直流电压 Uin=390 V，输入范围 320 ～ 420 V，输出电压480 V，功率20 kW。选定开关频率，碳化硅 MOSFET 开关频率可以在400 kHz 内，初选取谐振器的开关频率为fs=180 kHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gwpsicvTBUF1VGibpSZ08Riah5R8e4gU0c6C7hPNE4zibRibtEwN0QAvBibcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gYUmPHypVNQvTHjfBfBDgNuRlmNUg0aASYMMGM5Y9SvFribbu9p51BzQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gVcT2125xWmSRyqzplmpNl50Qibiabmlv2VbPS84mD4ldCBJBBcShuxww/640?wx_fmt=png&from=appmsg)  

**6 仿真验证**

在PSIM中，使用谐振变换器参数进行建模仿真，模型如图7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnqOePM0lMRicbe4VMgJe08gSLIKFNKW3y4Q6cryZv5ZR9kOTJI4rA5bgvhGj8h3sGej5h2qdh1pibw/640?wx_fmt=png&from=appmsg)

在这个模型里，通过改变开关频率及负载状况，直观地仿真出各个工况。通过仿真验证，设计的谐振变换器满足要求。

**7  结  论**

通过对全桥LLC 谐振变换器工作原理、电压增益函数进行分析，提出一种设计谐振变换器谐振元件参数的方法。在实际应用中，通过多次调节不同参数，对照仿真结果，能快速确定LLC 谐振变换器元件参数的最佳设计方案。将LLC 和具有高耐压、耐高温、低阻值的碳化硅器件结合应用，能使设备具有更高的功率密度和更小的体积，未来碳化硅器件在电力设备中将得到越来越多的应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqb8Po3qdBDOEjHEmo3DibcFdSeQxPepq4CgmLpeSttlMicicb3ru8mu738A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)