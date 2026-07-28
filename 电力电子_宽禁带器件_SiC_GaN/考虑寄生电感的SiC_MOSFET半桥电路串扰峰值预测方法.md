# 考虑寄生电感的SiC MOSFET半桥电路串扰峰值预测方法


> 原文地址: [https://mp.weixin.qq.com/s/EFxDcxt2saZ\_QaApzV5wzQ](https://mp.weixin.qq.com/s/EFxDcxt2saZ_QaApzV5wzQ)

文章来源：太阳能学报

作者：杜明星1，边维国1，欧阳紫威1，2（1. 天津市复杂系统控制理论及应用重点实验室（天津理工大学），天津 300384；2. 丹麦技术大学电气工程系，灵比 2800 Kgs）

摘 要：针对光伏并网逆变器中的串扰问题，提出一种考虑寄生电感影响的非开尔文封装 SiC MOSFET 串扰峰值预测算法。以TO\-247\-3封装SiC MOSFET构成的半桥电路为研究对象，首先分析各个阶段的串扰电压数学模型，并推导串扰电压的微分表达式；其次提出串扰峰值的预测算法，建立预测峰值所需参数的数学模型；最后搭建实验平台，验证理论的正确性和算法的有效性，为设计光伏并网逆变器的驱动和保护电路提供参考依据。

关键词：碳化硅；MOSFET；串扰；并网逆变器；寄生电感；半桥电路

0. 引 言

随着新能源发电技术的快速发展，尤其是光伏发电技术的发展，并网逆变器在配电网中得到广泛应用。并网逆变器的性能优劣对于系统的安全运行十分重要，而功率半导体器件（IGBT 和 SiC MOSFET）是其核心组成。与 IGBT 相比，SiC MOSFET 具有低开关损耗、高开关速度和工作温度等特性，从而被广泛应用于并网逆变器。然而，SiC MOSFET的高开关频率和开关速度使其对寄生参数十分敏感，带来了电磁干扰（EMI）和可靠性问题。EMI 产生的后果之一就是造成互补器件误触发的问题，即串扰问题。由于 SiC MOSFET 具有较低的阈值电压和最大允许负栅极电压，串扰较易被触发。因此，串扰成为评估并网逆变器性能优劣的一个关键因素。

SiC MOSFET 的串扰峰值算法一直是科研人员关注的热点。文献［7\-8］中的串扰峰值计算只考虑了驱动电阻和恒 定 栅 漏 电 容（Cgd ）的 影 响 ，且 将 漏 源 电 压 变 化 率（dvds/dt）视为常数；文献［9］使用vds及dvds/dt 的测量数据，但仍无考虑非线性的Cgd 。SiC MOSFET分为开尔文封装和非开尔文封装。文献［10］提出的算法考虑了非线性的Cgd 和分段的 dvds/dt ，但该算法仅适用于开尔文封装SiC MOSFET；此外，该文中也提到考虑寄生电感有助于进一步提高算法精度。对于非开尔文封装SiC MOSFET，Cgd的位移电流和共源极电感上的压降都会引起互补器件栅源极串扰电压的变化。

综上，本文提出一种考虑寄生电感影响的非开尔文封装SiC MOSFET 串扰峰值预测算法。首先通过分析各阶段的串扰电压建立数学模型，其次提出串扰峰值的预测算法，最后通过实验验证算法的有效性。

1\.  串扰电压的数学描述

本文以TO\-247\-3 封装SiC MOSFET构成的半桥电路为研究对象，分析串扰电压并建立数学模型。半桥电路的等效电路如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcusNksZKCTunxwRLe62Yqqe6sGtdiadbCQhXcJkwUSU5de1r1aeBBmdww/640?wx_fmt=png&from=appmsg)

图1中，SiC MOSFET1（Q1）为上管，SiC MOSFET2（Q2）为下管。Q1施加负栅极电压使其保持关断状态作为续流二极管。栅极电阻Rg由内部栅极电阻Rgint和外部驱动电阻 Rgext共同构成。 Lg、Ls和Ld分别为栅极电感、共源极电感和漏极电感，包括器件寄生电感和连接线寄生电感。 Cgs、Cds和Cgd分别为栅源电容、漏源电容和栅漏电容，并定义输入电容为Ciss\=Cgs+Cgd 。用下标“H”和“L”区分上管和下管。

根据图 1 可知，在Q2开关过程中，Q1栅源电压vgsH发生变化，产生串扰问题。串扰电压主要来源于2 个方面：1）当漏源电压快速变化时，Q1栅漏电容CgdH引入的电容耦合；2）当漏极电流快速变化时，共源极电感LsH引入的电感耦合。由于串扰问题发生在开关瞬态，因此 IL 可被等效成恒定电流源。在Q2开关过程中，Q1和Q2典型的开关波形如图2所示。

如图2所示，Q1漏源电压vdsH与Q2漏源电压vdsL的和为Vdc 。Q1漏极电流idH与Q2漏极电流idL由IL提供，但流向相反，因此\- idH与idL的和为IL 。结合串扰电压的来源与图 2可知，串扰问题发生在 t1—t2、t2—t3、t3—t4、t7—t8、t8—t9、t9—t10 阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcupaapicGjYficvicwpwG3iaVRBhH217ucAqR6EDyx2o86w8vXrcJswJoaiaw/640?wx_fmt=png&from=appmsg)

1.1  导通过程

电流上升阶段（t1—t2）：

当 Q2 栅源电压 vgsL 超过 Vth 时，Q2 沟道开启与 Q1 体二极管换流，idL 快速增加。此阶段 idL 变化率，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuy01sLvibf7XOY6v04B6rBzicyy2GfGTpKeszDeg8NZsto1tD2WAOVTVA/640?wx_fmt=png&from=appmsg)

式中：gfs ——跨导；Vg \- on ——导通驱动电压。

idH 的快速变化会在寄生电感 LsH 和 LdH 上产生感应电压，使 vdsH 上升，此阶段 vdsH 的表达式，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuic67XGzMzmgDYiaDSVBzVpodbB18g3ctQMPc85BOygDGOEym6w2Oiazsg/640?wx_fmt=png&from=appmsg)

此阶段 LsH 上感应电压的方向为上正下负，为 Q1栅源电容 CgsH 反向充电，使 vgsH 负向增加。 vdsH 的上升为Q1 漏源电容 CdsH 和栅漏电容 CgdH 充电，使vgsH 正向增加。此阶段的简化等效电路如图 3 所示。其中Vg \- off 和CgsH 电压参考方向为上正下负，虚线为电流的实际流向，didH(t)/dt \> 0 ，dvgdH(t)/dt \> 0 ，Vg \- off 为负关断驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuu4Fe2gktxyw4NRaznLy7BC6feTnO7Ur5lL77du2M9Uwy2icxAMconWA/640?wx_fmt=png&from=appmsg)

根据基尔霍夫电压定律，此阶段的回路方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu9MhXWTQSrr7qo7m0XYjB4y9QmCFXPvj1SykyGVQbLd9mFab2UtfgeA/640?wx_fmt=png&from=appmsg)

且有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcurNrBePfRicK8XXcnHdxib7A52kJ9k4A2slqCO7P4dtnhHBEgdnvk6DWg/640?wx_fmt=png&from=appmsg)

可得到此阶段的串扰微分方程如式（5）所示。 vgs 是导致器件误导通的直接原因，因此串扰由 vgs 表示，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuRtNlFDM8FMgRiagEBqv150tUjc30ZmQiczTnSPIj15uY1TlEkjXYuYJw/640?wx_fmt=png&from=appmsg)

电压下降 I 阶段（t2—t3）：

当 vgsL 达到米勒电压 Vmiller 时，Q1体二极管的反向恢复电流最大，然后从峰值减小至0。 vdsL 的变化速率与CgdL 有关。CgdL 可近似为 vdsL 的两段函数，在欧姆区CgdL\=CgdL1，在饱和CgdL\=CgdL2，且CgdL2≪CgdL1，CgdH1 和CgdH2 可通过面积等效原理计算，其中Vds1为欧姆区与饱和区的边界。在此阶段，由于CgdL较小，vdsL 快速下降到Vds1 。此阶段 vdsL 变化率的绝对值，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuPK7eLMiaEovvKGFoG40ILf72J8JGn7RfnaJEHv2Qqzs5tzzomI1Rkicg/640?wx_fmt=png&from=appmsg)

vds1 的表达式，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuYHPrFPLWHCLxsEtfFGXn1d8lpJiajYIzbDBbhKHNQXPiav6YjU0xu33Q/640?wx_fmt=png&from=appmsg)

式中：ID ——SiC MOSFET 连续运行的最大值。

此阶段由于 idH 变化的方向改变，LsH 上感应电压的方向变为下正上负，为 CgsH 正向充电，使 vgsH 正向增加。 vdsH 的上升为 CdsH 和 CgdH 继续充电，使 vgsH 正向增加。此阶段的简化等效电路如图 4 所示，其中 didH(t)/dt < 0 ，dvgdH(t)/dt \> 0 。串扰的微分表达式与式（5）一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuicbR5AW8htmaICI4eL4OZ8SNicaAp4FibicAjz8ya8ibJYtNJQ4rCYkaZZw/640?wx_fmt=png&from=appmsg)

电压下降 II 阶段（t3—t4）：

在此阶段，idL 保持在 IL 。由于 CgdL 较大，vdsL 缓慢下降到导通状态值 Vds\- on ，此阶段 vdsL 变化率的绝对值与式（6）一致。

Vds- on 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu3EN8mbibicktamxT3CsRkqznic8ib1pnlxCWkIsNavibIHU4YzTlBMYadZw/640?wx_fmt=png&from=appmsg)

式中：Rds\- on ——SiC MOSFET 导通状态漏源极电阻。

此阶段无 LsH 的影响，vdsH的上升为CdsH和CgdH 继续充电，使 vgsH 正向增加。此阶段的简化等效电路如图 5 所示，其中 dvgdH(t)/dt \> 0 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuN27bibquqsueY85Lk41PxChp7oghKibWmjIxJgVjtrQOs11vIvr22qfw/640?wx_fmt=png&from=appmsg)

根据基尔霍夫电压定律，此阶段的回路方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu4EenStefqcaTxMfFaLyIKRChol5fJwpFgplWUsXvwU1micOB8Sib0vwA/640?wx_fmt=png&from=appmsg)

可得到此阶段的串扰微分方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuFgBsguf0sz9j6SQuCyfZibpTg7HEMicMYnLM72Ju0E5mpUDsckKHK5MA/640?wx_fmt=png&from=appmsg)

1.2 关断过程

电压上升Ⅰ阶段（t7—t8）：

在 t7 时刻，vgsL 下降至 Vmiller 后保持不变。在此阶段，idL保持在 IL 。由于 CgdL 较大，vdsL缓慢上升到 Vds1 。此阶段 vdsL变化率，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuD0Q33NrcKTZsD0GIFCON4bPTjy5YHxMTEcoK7xx2ZchhMmPJiag4o2Q/640?wx_fmt=png&from=appmsg)

此阶段无 LsH 的影响，CgdH的部分放电电流流过CgsH ，使vgsH负向增加。此阶段的简化等效电路如 6 所示。其中dvgdH(t)/dt < 0 。串扰的微分方程与式（10）一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuI0k37Aly19QONjNdvFcpmIZNEOWCeewgicqMoPdZI2ucXbT7RYicr7uA/640?wx_fmt=png&from=appmsg)

电压上升Ⅱ阶段（t8—t9）：

在此阶段，VgsL保持在Vmiller ，idL 保持在 IL 。由于CgdL 较小，vdsL 快速上升。

此阶段 vdsL 变化率与式（11）一致，等效电路与电压上升 I阶 段 相 同 。 其 中 dvgdH(t)/dt < 0 。 串 扰 微 分 方 程 与 式（10）一致。

电流下降阶段（t9—t10）：

vgsL 从 Vmiller 下降至 Vth ，Q1体二极管导通，IL 从 Q2逐渐转移到 Q1体二极管中，idL 开始快速下降。此阶段 idL 变化率的绝对值，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuIhUjPZCYicib0GQIXxqukW0hwAqyZSVpc6qIMxP99KjSyEKPOsdCf5Hg/640?wx_fmt=png&from=appmsg)

此阶段无 CgdH 的影响，LsH 上感应电压的方向为下正上负，为 CgsH 正向充电，使 vgsH 正向增加。此阶段的简化等效电路如图 7 所示。其中 didH(t)/dt < 0 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuDXKb7kJal6vsHLOFLhQ06IXMKg3bTlDvibNXWy6zpJnWznRAIibeJOcw/640?wx_fmt=png&from=appmsg)

根据基尔霍夫电压定律，此阶段的回路方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuiaFdTIxcl7ic26UzYNJZAfTNxEJJg5BeHjHs56nv9MaVw8Libib4pmvexg/640?wx_fmt=png&from=appmsg)

可得到此阶段的串扰微分方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu15aZxAI7H5X20pmibDfjLApbxQfxUvCKJQiaFgeXGeLoWNFfibrjdj0VQ/640?wx_fmt=png&from=appmsg)

2. 考虑寄生电感的串扰峰值预测算法

通过第1节的分析可知，确定vgsH 需建立RgH、CissH、LsH 、LdH、CgdH、dvgdH /dt、didH /dt 和t 的数学模型，其中RgH 、CissH 、LsH 和 LdH 为常数，可直接代入微分方程，CgdH 的非线性在文献［10］中进行了详细的描述，因此本节主要介绍didH /dt 、dvgdH /dt 和 t的解析表达式。

2.1 RgH、CissH、LsH和LdH的获取

RgH 和 CissH 从 SiC MOSFET 和驱动板的数据表查询得到，LsH 和 LdH 通过精密阻抗分析仪测量得到。

2.2  CgdH的建模

根据 CgdH 的特点，用指数函数描述 CgdH 的非线性，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuibW3iaXm9Uwsd9RzqIkwEgDKN563ngiajobRibCib6T86jtswicNuWN6sk4g/640?wx_fmt=png&from=appmsg)

式中：p1~p7 ——常数系数，可通过数据拟合得到。

考虑寄生电感和导通电压 Vds\-on 的影响，对 vdsH 的时域表达式建模。在电流上升阶段，由于假设 idL 的变化率为定值，因此 vdsH 在较短的时间上升到 Vds2 。假设 vdsH 在电压下降Ⅰ阶段、电压下降Ⅱ阶段、电压上升Ⅰ阶段、电压上升Ⅱ阶段的斜率绝对值分别为 k1、k2、k3、k4 ，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuJtK3UlPhrbMyyWJicFG95D1mtNXXuKcqNCbsJrnUVDX0Kjfv0VvxCiaw/640?wx_fmt=png&from=appmsg)

此外，Vmiller 的表达式如式，为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuN2t3kcfh7iade0qmJYwQrZYkgEhsOfQL7f4LNFkX7TUhGicFvNoibepNg/640?wx_fmt=png&from=appmsg)

因此，vdsH的时域表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcurKqA6TicLicsqmP8yj05ZvWh4fb4w4ViayCxibZ75T4h9Y4s7FwcWFHia2A/640?wx_fmt=png&from=appmsg)

将式（18）代入式（15）即可得非线性 CgdH 的时域表达式。

2.3 dvdsH/dt的建模

根据式（16）可获得各阶段 dvdsH /dt 的表达式，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcubE1M3n1mJJoX3LsTjMdLjNYVZulJfmj9Xpg0whB4FtLI3Zk1ZPiaAPA/640?wx_fmt=png&from=appmsg)

2.4 didH/dt的建模

电流变化发生在电流上升阶段、电压下降Ⅰ阶段和电流下降阶段。假设idL 在 t1—t1.1 阶段斜率的绝对值为a1 ，如式（1）所示。根据文献［17］可知，Q1体二极管电流上升速率等于 idH在 IL 处的电流上升速率即为 a1 。根据SiC MOSFET的数据表，由 Q1体二极管电流上升速率可得到反向恢复电流的最大值 Irr 。

假设idL 在电压下降 I 阶段电流斜率的绝对值为 a2，表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcubqp4Q6tVucs6Q2ib89MA2ibawaeMUWgKYaICSDLy3NoF3EYWDibDNGicnQ/640?wx_fmt=png&from=appmsg)

假设 idL 在电流下降阶段斜率的绝对值为 a3 ，如式（12）所示。

综上，可获得各阶段 didH /dt 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuTMYw86yRrSx4gCw5BoLhxkC9sjRK2Fh46MujDicVUaSfTlCzGKLVwBg/640?wx_fmt=png&from=appmsg)

2.5 t的建模

由 于 串 扰 问 题 发 生 在 t1—t2、t2—t3、t3—t4、t7—t8、t8—t9 、t9—t10阶段，因此要确定每个阶段的时间间隔，可由式（22）确定，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu9ia8iasN6wKdb4mP4ln97z3sLXw48ulGulsVC4D8y7oDSfJMBwibjvG8Q/640?wx_fmt=png&from=appmsg)

至此，串扰微分方程完全可用时域表示，可精确计算串扰的峰值。

3. 考虑寄生电感串扰算法的实验验证

3.1 串扰峰值的计算值

使用由Infineon公司生产的IMW120R045M1，封装类型为TO\-247\-3的SiC MOSFET进行实验验证。由精密阻抗分析仪测得寄生电感，如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuLaQcfmTw0YrWLnj3yKZyypKONYG9KfM2QKEAULp7YJIAvW2SibqaibnA/640?wx_fmt=png&from=appmsg)

通过数据拟合得到式（15）中的系数p1~p7 ，如表2所示。其中，相关系数R2 \= 0.994 ，表明拟合精度较高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuYEXADuLAPKfsdicFLYNtQLibZVibFGKl4CJZhT5wxyzdoiaoYIPpCqnTxw/640?wx_fmt=png&from=appmsg)

根据SiC MOSFET和驱动板的数据表以及实验设置可获得的参数如表3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuPtpeYDPTZ2nrk6U1vdUXYY81wibLNdg01Gzxsp3wTB33m6JjR5uYDIA/640?wx_fmt=png&from=appmsg)

通过数据拟合得到 Irr 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuAicXAfKaicQEwNDLs1ichenoBLZBk31IGnkia3yoVYkyW8mejnYVYq6DAA/640?wx_fmt=png&from=appmsg)

式中：dif /dt ——SiC MOSFET 体二极管电流变化率。

通过式（7）和式（17）可计算得到Vds1和Vmiller 。在CgdL1和CgdL2 的计算中，可发现CgdL1是固定值，而CgdL2随Vdc变化。

根据式（1）、式（12）、式（16）和式（20），可得到 k1、k2、k3、k4 、a1、a2、a3 。根据式（23）和 a1 可得到 Irr 。根据式（2）和 a1 可得到 Vds2 。以上通过计算得到的参数如表 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuACdlib1GdMFyGZDiblET8uCVpbr5B9TibmrHHsfxHbbNrdeuNZ6ibIFYKw/640?wx_fmt=png&from=appmsg)

由于Vds2的值为11.63V大于Vds1，因此在电流上升过程中CgdH由CgdL1变为CgdL2 。

至此，计算串扰所需的参数均已获得，代入式（5）、式（10）、式（14）进行积分即可获得串扰峰值。根据本文所提算法计算得到各阶段的 vgsH 值，如表 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcujGneIQDDcV4lpoXYKoKZuWv8VtHdDgicBaXpYNMP4f3oZdRZ33icxFQQ/640?wx_fmt=png&from=appmsg)

根据文献［10］中所述算法可知，当不考虑寄生电感LsH时，各阶段的vgsH如表 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu50syX1nCZ7WiaphglBxhQhauiaWfmiaPhvM7E5b14B9HHFjw0hhOz1c4w/640?wx_fmt=png&from=appmsg)

3.2 算法的实验验证

为了验证算法的正确性，根据图 1 搭建实验平台，如图 8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuUIkd4Ug3lxgO2VicDGVibFZPo5v4gib6TNuKfRQialELehGNVKPiaUfjUFw/640?wx_fmt=png&from=appmsg)

实验参数与计算参数相同。大功率直流电源两侧并联490μF 的薄膜电容来保持电压稳定给变换器提供直流电压Vdc 。使用型号为GWINSTEK GPD\-3303S 的可编程直流电源和型号为 Agilent 33500B 的信号发生器为驱动板提供驱动电压 和 信 号 ，驱 动 电 阻 设 置 为 20Ω。 使 用 型 号 为RIGOLDS6062宽频示波器采集Q2漏极电流 idL和Q1栅源极电压vgsH 。在 Q2开关过程中，idL和vgsH的波形如图 9 所示。

由图 9 可知，Q2的导通和关断过程使 vgsH 发生变化，产生串扰问题。在 Q2导通过程中，由于电感耦合的影响占主要因素，使 vgsH 先负向增加。漏极电流达到峰值后，vgsH 在电感耦合和电容耦合的共同作用下正向增加。在 Q2 关断过程中，vgsH 先在电容耦合的作用下负向增加。在电流下降阶段，由于电感耦合效应使 vgsH 正向增加。当漏极电流达到最低点时，vgsH 停止正向增加。基于以上实验结果，vgsH 的变化趋势与理论分析一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuHyBbziavnMDAhy0XwtBduIA98hYOxgdUSehNBYHcDfEt0haic6iapqOeA/640?wx_fmt=png&from=appmsg)

通过双脉冲测试获得串扰峰值波形，如图 10 所示。从图 10 可看出，双脉冲测试产生 4 个正峰值和 4 个负峰值，分别 命 名 为 Ppeak1、Ppeak2、Ppeak3、Ppeak4、Npeak1、Npeak2 、Npeak3 和Npeak4 。由于双脉冲测试通常采取第 1 个脉冲测量关断特性和第 2 个脉冲测量导通特性。因此将 Ppeak2、Npeak2、Ppeak3 和Npeak3 的测量值与计算值进行比较，如表 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu6fs6gly0iaQvSwQF23aNFxyVxPclS4zu5W4D4aZ2Zu5wgAmeK5p7A5w/640?wx_fmt=png&from=appmsg)

由表7 可知，本文算法中 Npeak2 和Ppeak3 的误差分别为7.21%和 7.41%，而根据文献［10］中算法计算得到的误差分别为 7.21%和 240.74%。在计算关断过程中的Npeak2 时，仅电容耦合产生影响，本文算法和文献［10］中算法均考虑了该影响，因此本文算法的精度与文献［10］中算法一致；在计算导通过程的 Ppeak3 时，电感耦合与电容耦合共同产生影响，本文算法同时考虑了这2种影响，因此计算精度高于文献［10］中算法。对于Ppeak2 和Npeak3，本文算法的误差分别为 12.71%和19.96%，由于文献［10］中算法未考虑 LsH ，因此无 Ppeak2 和Npeak3 的计算值。文献［10］中的误差范围是 19.40%~29.70%，因此本文算法的计算误差小于文献［10］中算法。造成误差的原因可能是电流变化率的线性化以及功率环路中寄生振荡的忽略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcun5atPBR3UMRAO2uvWoTC6Ff1vUOZxMMXj47ia71aaWzJeCQw0qc8iaicQ/640?wx_fmt=png&from=appmsg)

综上，串扰实验的测量值与本文算法的计算值具有较好的一致性。相比之前的算法，本文算法更符合非开尔文封装SiC MOSFET 串扰电压实际的变化过程，计算结果与实验结果更加接近，可大大降低计算误差。

4. 结 论

本文针对光伏并网逆变器中的串扰问题，提出一种考虑寄生电感影响的非开尔文封装 SiC MOSFET 串扰峰值预测算法。通过分析半桥电路的开关过程，建立各阶段串扰电压的数学模型和微分表达式。其次说明了算法的计算过程，建立预测峰值所需参数的数学模型。最后搭建了实验平台，进行了实验验证。与之前的算法相比，本文提出的算法更加适用于非开尔文封装 SiC MOSFET 的串扰峰值预测，符合串扰电压实际的变化过程，进而为设计光伏并网逆变器的驱动和保护电路提供参考依据。

**说明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)