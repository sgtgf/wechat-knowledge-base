# 3300V SiC MOSFET 栅氧可靠性研究


> 原文地址: [https://mp.weixin.qq.com/s/N3mOGHEYXjOyM8IJ5KV0dw](https://mp.weixin.qq.com/s/N3mOGHEYXjOyM8IJ5KV0dw)

**文章来源**：陈宏 1，白云 1，陈喜明 2，李诚瞻 2

（1\. 中国科学院微电子研究所；2\. 株洲中车时代半导体有限公司）

**摘要：**碳化硅 SiC功率器件因其卓越的材料性能，表现出巨大的应用前景，其中金属\-氧化物\-场效应晶体管 MOSFET是最重要的器件。3300 V SiC MOSFET 可应用于轨道交通和智能电网等大功率领域，能显著提高效率，降低装置体积。在这些应用领域中，对功率器件的可靠性要求很高，为此，针对自主研制的3300V SiC MOSFET 开展栅氧可靠性研究。首先，按照常规的评估技术对其进行了高温栅偏 HTGB试验；其次，针对高压SiC MOSFET 的特点进行了漏源反偏时栅氧电热应力的研究。试验结果表明，在高压 SiC MOSFET 中，漏源反偏时栅氧的电热应力较大，在设计及使用时应尤为注意。

**关键词：**3300 V SiC MOSFET；高温栅偏；栅氧；可靠性

碳化硅 SiC（silicon carbide）功率器件因其卓越的材料优势，近年来得到迅速发展。高压、高频、高温和高功率密度等器件特性，使其在高效电能转换领域有巨大的市场， 其中金属\-氧化物\-场效应晶体管MOSFET的发展最引人关注。目前中、低压 SiC MOSFET已经部分商业化，Cree、Rohm 和 Infineon 等公司先后推出了相关产品，被广泛应用于电源、光伏和新能源汽车等领域。以 3300 V 为代表的高压 SiC MOSFET 已经出现样品， 并逐步在轨道交通和机车牵引等领域展开试用，大幅提升了系统的效率，降低系统体积。

与 Si 功率器件相同，SiC MOSFET 按照沟道方向可以分为平面型 MOSFET 和沟槽型 MOSFET。平面型 MOSFET 工艺相对简单，但 JFET 区域会存在夹断效应， 造成导通电阻增大；沟槽型MOSFET通过垂直沟道，解决了 JFET 区域电流夹断的问题，降低了器件的导通电阻，同时缩小了芯片元胞结构的尺寸，以实现更大的电流能力，但 SiC 沟槽的刻蚀及氧化工艺难度较大，且沟槽底部的电场尖峰较高，容易造成提前击穿，需要进行专门保护。

功率器件的可靠性是指在其工作边界内长期使用的寿命， 通过加速老化试验来进行研究。SiC MOSFET 可靠性的研究主要集中在栅极氧化层方面，由于 SiC 材料由 Si 和 C 两种原子组成，栅极氧化层时通过热氧化， 将 Si 元素变成 SiO2，C 则转化为 CO 或者 CO2 排出，C 元素如不能顺利排出，则会使氧化层质量下降， 造成器件可靠性下降。因此，SiC MOSFET 器件的栅氧可靠性问题是长期以来的研究热点。

**1. 3300 V SiC MOSFET**

**1.1 器件结构**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAAN0v83UF1UAribF6g34ebz526o66gGQGHKZMhib7aR6JJ6ibic0suuRUnWNw/640?wx_fmt=png&from=appmsg)

采用平面栅技术，基于中车时代电气半导体有限公司的工艺平台完成 3300V SiC MOSFET 芯片的制造，其元胞截面结构见图 1。其中，在外延层上通过离子注入工艺，依次形成 P 型基区与 N+重掺杂区， 然后完成栅极和源极的图形化。P 型基区中间的区域被称为“JFET 区”，该区域的尺寸对芯片的电流能力有直接影响。设计中对 JFET 区的宽度进行了分组， 分别设置了 2.5、3.5 和 4.5 μm 3 种结构。

**1.2 参数性能**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANVy6WyKXhzeZOfRa079fuffPic39pASG7XXAicxPbib9NBETOpfq4RoGDQ/640?wx_fmt=png&from=appmsg)

对完成制备的 3300V SiC MOSFET 器件，使用 Agilent B1505A 进行击穿特性、阈值特性和输出特性的测试，测试结果如图 2 所示。

从测试结果来看， 器件在 3000V 电压下漏电流 IDSS<1 μA，JFET 宽度为 4.5 μm 结构漏电流略大；器件的阈值电压 Vth≈2.5 V，与设计无相关性；器件的漏极电流 IDS 与 JFET 关系很大，在 VGS\=20 V、VDS\=2V 时，3 种结构的漏极电流 IDS 依次为 8、7 和 5.0 A。

**2.高温栅偏试验**

**2.1 试验过程**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANjlnFjfWLWic30mSd2HVw0BDibGvcGiatQib3KrrhRBZjOIgCkqDHdYT1Ng/640?wx_fmt=png&from=appmsg)

高温栅偏 HTGB（high temperature gate bias）试验主要是对器件栅氧可靠性的考核，用于表征栅氧的质量及寿命等。挑选 6 只不同结构的 3300V SiC MOSFET 按照如下条件进行试验：Ta\=150 ℃，VDS\=0 V，VGS\=20 V，t\=168 h。器件在 HTGB 试验过程中， 栅极漏电 IGSS 的监控结果如图 3 所示。从监控结果来看，考核过程中器件栅极漏电 IGSS 稳定，且小于 0.3 nA，未出现失效。

**2.2 考核分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANgRSNzWeGZ4EnE4TL0sn2LvIGvSaQdbaFSEaUq3NxRPsosjNY5PhV6A/640?wx_fmt=png&from=appmsg)

对被考核的器件依次进行击穿特性、阈值特性和输出特性的测试， 并与考核前测试结果进行对比。考核前后的器件参数对比结果如图 4 所示。

图 4 中，在考核后的击穿电压测试中，被测 6只器件，有 3 只发生失效，击穿电压变为 0 V；失效器件的阈值特性与合格器件出现明显差异，阈值曲线变软，如图 4（b）所示；而输出特性与合格器件未发现明显区别。结合图 3 的监控数据，在考核过程中器件栅极漏电流小于 0.3 nA，监控数据正常。因此，失效应该是发生在 HTGB 试验后击穿电压测试阶段，在器件承受反向较高的偏压时，栅氧化层被击穿，造成栅源穿通，导致阈值电压异常。

**3.反偏栅应力试验**

针对击穿特性评估中，出现栅氧的失效问题，基于 3300V SiC MOSFET 开展进一步研究，以评估高压 SiC MOSFET 器件在反偏时栅氧的电应力问题。

**3.1 试验原理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANIzaKqhelqGTiaONv50WryauUIWgCOA2w2mrdm4ghMlibxoqMh6UxfAzA/640?wx_fmt=png&from=appmsg)

在 MOSFET 击穿电压测试时， 漏极加高压，源极与栅极短接接地， 实际存在漏源和漏栅 2 个漏电通道。漏源之间的漏电流 IDS 实际是 PN 结漏电流；漏栅之间的漏电流 IDG 实际是 MOSFET 器件在承受反偏电压时栅氧的漏电流。图 5 为该试验的原理，通过 R1 和 R2 分别记录漏栅电流 IDG 与漏源电流 IDS。

**3.2 试验条件**

挑选 JFET 宽度为 2.5 μm 器件 2 只、JFET 宽度为 3.5 μm 器件 6 只、JFET 宽度为 4.5 μm 器件 2 只，共 10 只器件进行试验，测试条件如下。

条件 1：Ta\=150 ℃，VCC\=30 V，t\=30 min；

条件 2：Ta\=150 ℃，VCC \=1 500 V，t\=60 min；

条件 3：Ta\=150 ℃，VCC\=2 000 V，t\=120 min；

条件 4：Ta\=175 ℃，VCC\=2 000 V，t\=60 min。

记录漏源之间漏电流 IDS 和漏栅之间漏电流 IDG。

**3.3 试验结果**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANSdibJibWQAicPmW2St2lxbwtX2S8SvjiaDXRDAC39icxZlZBLkz1dtOxWWw/640?wx_fmt=png&from=appmsg)

图 6 为漏源之间漏电流 IDS 和漏栅之间漏电流IDG 的试验结果。不同设计器件的 IDS 和 IDG 漏电与考核中电热应力的关系如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANaWotAx7sLORiaAnxjjEiaVqn8iatKup5jke878pI0hj20GbA4JFNSWauA/640?wx_fmt=png&from=appmsg)

从图 6 及表 1 可以看出， 对于 3 种不同 JFET宽度设计的 3300V SiC MOSFET。

（1）漏源之间的漏电流 IDS，主要是 PN 结漏电，随着 VCC 的增大及温度的升高而增大；不同器件的漏电有差别，受终端保护环设计、材料缺陷等影响较大，与 JFET 宽度设计无关。

（2）漏栅之间的漏电流 IDG，主要是栅氧的漏电流， 会随着温度的升高及栅氧电应力的增大而增大。在本次试验中， 未直接给栅极施加电应力，但IDG 随着漏源之间耐压 VDS 的增大而增大，并且表现出与 JFET 宽度的相关性，JFET 宽度越宽， 该漏电越大。在 VDS\=2000 V，Ta\=175 ℃时，该漏电已达到50 nA，说明此时栅氧承受着很大的栅应力。

**3.4 仿真验证**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANyRN5DIORegVMvIH4M17mtCW9MLZtp7IYK71ENKib6J4tKnOp27Q0zibA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 器件在承受漏源耐压时， 如图7所示， 正面的 P 型基区/N 型漂移层结扩展以承受电压。随着反向耐压的增大，耗尽层（图 7 中虚线）会继续往垂直方向扩展。与此同时在器件横向方面，同样会存在电场扩展，造成 A 点的电势升高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANQqR4hYyyicjA3puc4wCNl82CyG0eVDTACSWCibKWPQ0llUQrcwiaz7ISg/640?wx_fmt=png&from=appmsg)

借助 TCAD Sentaurus 仿真软件，对漏源耐压为2 000 V 时， 不同 JFET 宽度中栅氧下 0.01 μm 处的电势进行仿真，结果如图 8 所示，其中 X 表示沿着沟道方向的横向距离，Y 表示栅氧下 0.01 μm 处。3 种JFET 宽度下，A 点（JFET 区中心点，栅氧下 0.01 μm处）的电势分别达到 17.5、22.1 和 25 V。JFET 越宽，该点的电势越高，这也能够证明图 6 中的试验结果。

**4.结语**

通过对3300V SiC MOSFET 栅氧可靠性的试验研究，发现不同芯片设计中，栅氧在 MOSFET 器件承受反偏电压时所承受的应力不同。该电应力随着反偏电压的增大及温度的升高而增大。针对这种现象，在高压 SiC MOSFET 器件可靠性评估中应额外考虑；此外，需要在设计及应用中对该隐患加以重视。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANqe7XqqFAZGib30xZpptzvDibf18bM5CV8qTShZTraRvKa4Buedad20hA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANs31tmLc8PlUGFsCiaIyVTKupllHwHf953bo24QesJqnghsNzjJcWAiag/640?wx_fmt=png&from=appmsg)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslahiaia5y8mTYtb01n3WFAANqbUOqduNibdVrNGKsMcvqUjwTPZyt4zkJJRzOsEqkvwIaxA5ibZ1icoEg/640?wx_fmt=png&from=appmsg)