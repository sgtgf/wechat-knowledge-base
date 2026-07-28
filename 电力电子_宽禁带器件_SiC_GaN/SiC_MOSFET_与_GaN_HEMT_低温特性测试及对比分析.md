# SiC MOSFET 与 GaN HEMT 低温特性测试及对比分析


> 原文地址: [https://mp.weixin.qq.com/s/cNI5H4zz0Zj0xmAPXPLNNQ](https://mp.weixin.qq.com/s/cNI5H4zz0Zj0xmAPXPLNNQ)

文章来源：低温与超导

作者：田晨雨1，2，郭文勇3，赵闯4，桑文举1，2，于苏杭1，2( 1． 中国科学院电工研究所，北京 100190; 2． 中国科学院大学，北京 100049;3． 北京交通大学电气工程学院，北京 100044; 4． 山东中设工程设计咨询有限公司，临沂 276000)

摘要: 以 SiC MOSFET和GaN HEMT 为代表的宽禁带电力电子器件代表电力电子期间未来的发展方向，有望在航天和超导储能等低温领域得到应用。为了对两种器件的低温特性有个全面的认识，对SiC MOSFET 和GaN HEMT 器件的低温特性进行了对比测试和分析。实验结果显示，温度从300K降至77K，MOSFET 阈值电压增大至2.77倍，而HEMT降低了42.45% ; MOSFET 的漏源击穿电压降低了32.99% ，HEMT升高了20.12% ; MOSFET的导通电阻增大至11.42倍，而 HEMT 降低了47.34% 。基于器件的物理模型，对两种器件低温特性进行分析，分析结果表明，导致两种器件性能不同的原因主要是 SiC MOSFET 较差的界面品质和 HEMT 独特的二维电子气结构。

关键词: SiC MOSFET; GaN HEMT; 低温特性; 对比分析; 物理机理

1. 引言

电力电子器件一般应用于常温领域，正常工作的温度区间为 55 ℃ ～ 150 ℃，电力电子器件的常温应用则远远满足不了电力电子器件在航空航天、超导磁体等低温环境下的应用需求，因此，器件低温特性的研究有一定的应用前景。

第一代半导体硅等材料在低温下的特性研究已经相对成熟，而以SiC MOSFET( Metal－Oxide－Semiconductor Field－Effect Transistor，金属－氧化物－半导体场效应晶体管) 和 GaN HEMT（High Electron Mobility Transistor，高电子迁移率晶体管) 为代表的新一代宽禁带半导体器件由于其导通电阻低、开关速度高、栅绝缘性好、高稳定性及高温工作能力等优点，已逐步得到推广和应用。研究其低温特性，发现其变化规律，一方面能够为电力电子器件低温应用的选型提供思路，另一方面能够为器件优化设计提供依据。

就目前的研究来看，尚未有文献对 SiC MOSFET 和 GaN HEMT 这两种主流器件的低温特性进行对比。本文研究了650V SiC MOSFET 和650V GaN HEMT 在77.7K 到 300K 温度范围内的低温特性，主要包括阈值电压、击穿电压、导通电阻三个参数，并对实验结果进行对比分析，揭示了其低温特性差异的机理。

2. 器件低温特性测试

2.1 器件测试方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLKSSm5KuXgKINfo3Y49yt9FRM08iaGJ0odP9a9WG8VWewYKuXbFibMqRQ/640?wx_fmt=png&from=appmsg)

本研究采用液氮作为制冷剂，用高导热率的紫铜块( 尺寸 20 × 7 × 12 mm) 作为导冷介质，紫铜板中开一个 5 × 5 mm 的圆弧状凹槽，放置温度传感器，温度传感器使用的是硅二极管温度计，激励电流 10μA，测试精度 ± 0.1K，配合温度传感器 Lakeshore311 进行实时监测，利用液氮蒸发回温的过程，在不同的温度点测试器件特性，并记录下此刻的温度。器件特性测试方法如图 1 所示，结合 Keysight 厂家的功率半导体分析仪 B1505A测量。

2.2 器件型号及测试结果

为分析 SiC MOSFET 和 GaN HEMT 器件的物理特性，对 击 穿 电 压 为 1 200 V、650 V 的 SiC MOSFET 和 GaN HEMT 进行低温( 77K ～ 300K)的低温特性测试，型号分别为 Littelfuse 公司生产的 LSIC1M0120E0160 和 GaN Power 公司生产的GP165015TS，均为 N 沟道增强型器件，基本参数如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLjhOt00yib0ooYdTWzWWaOM3laSvAgNyO9p2J1rGDxU0vkFuSnJXULew/640?wx_fmt=png&from=appmsg)

为了方便对比分析，对测试数据进行归一化处理，测试结果如图 2 所示，可以看出: 两种器件三个参数的变化趋势都是相反的。SiC MOSFET的阈值电压随温度降低而升高，阈值电压在 300K时为 2.707V，77.7K 时为7.505V，是室温的2.77倍; GaN HEMT 的阈值电压随温度降低而降低，阈值电压在300K时为1.776V，77.7K 时为1.022V，下降了42.45% 。SiC MOSFET 的击穿电压随温度降低而降低，击穿电压在300K 时为1.6104kV，77.7K 时 为 1.0792 kV，降 低 了32.99% ; GaN HEMT 的击穿电压随温度降低而升高，击穿电压在 300 K 时为 840V，77.7K 时为1009V，上升了20.12% 。值得注意的是，MOSFET 的击穿电压随着温度的降低，至 180K 时，斜率明显增大，击穿电压剧烈下降。SiC MOSFET的导通电阻随温度降低而升高，导通电阻在300K 时为0.233Ω，77.7K 时为2.775Ω，升高了1142.28% ; GaN HEMT 的导通电阻随温度降低而降低，导通电阻在300K 时 为341.978mΩ，77.7K时为180.44mΩ，下降了47.34% 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kL90uakJX69rzlDVnMa6jnicnxUYE9Ft2ZpEdTlb2ia7x2DYRzMgz4xJNA/640?wx_fmt=png&from=appmsg)

3\. SiC MOSFET 和 GaN HEMT 低温特性的分析及对比

3.1 阈值电压

3.1.1 SiC MOSFET 的阈值电压变化趋势分析

MOSFET 的阈值电压主要由三部分决定，半导体表面势 φst、氧化层压降 Vox以及平带电压 Vfb，如式( 1) 所示:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLEAmJcfGf6PdTNjypBIZa3DxhxMMicINEofrEODzkSSs46rUpKhdnmYw/640?wx_fmt=png&from=appmsg)

φst为 MOSFET 处于强反型时的表面势，也是此时的耗尽层压降，其值为 P 衬底费米势 φB 的两倍，可以通过式( 2) 计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kL0sDbuANUuB25toekCBmWwwc2ZqvPcjic5eKvGic7SXnpUjL8qPAt0xNA/640?wx_fmt=png&from=appmsg)

当 MOSFET 处于阈值条件时，氧化层压降 Vox可以通过式( 3) 计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLWaryicY4oQBl20fVodozLOTVmYAzF6XZ4hVYTZ3WXo2rSnuVkHy9ibiag/640?wx_fmt=png&from=appmsg)

其中，εs 为半导体介电常数，NA 为受主掺杂浓度。MOSFET 的单位面积栅氧化层电容 Cox可以用式( 4) 计算，tox为栅氧化层厚度:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLYvjwazTuCicCRPw8HtNPdRQbDzWIHIiaWgTDltyic8UTbkz0IxSc6XQpA/640?wx_fmt=png&from=appmsg)

根据式( 3) ，温度降低，φB 随而增大，氧化层压降 Vox增大。代入具体数值，温度从300K 降至77K，φst和 Vox增幅分别为0.2V、0.17V左右，并不明显，远远低于实际测量结果，因此认为影响MOSFET 阈值电压的主要原因在于平带电压 Vfb。

平带电压 Vfb可以通过式( 5) 计算，其中 φMS为金属与半导体的功函数差，Qox是栅氧化层电荷面密度:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLewicHFtV4wfy8Xahans9dlJicZU9zIDauAtic8RIrvW9LlF3vzIFUFg2A/640?wx_fmt=png&from=appmsg)

平带电压 Vfb受到 φMS和氧化层电荷的影响，将具体数值代入式( 2) 和( 6) 可知，φMS随温度的降低仅有微小的变化。对 Vfb起决定性作用的是氧化层电荷 Qox，但是 Qox构成复杂，包括了可移动离子电荷、氧化物陷阱电荷、氧化物固定电荷、界面陷阱电荷。其中只有界面陷阱电荷受温度影响较大，对平带电压的影响起决定性作用。对 N 沟道 MOSFET 来说，载流子为电子，界面陷阱俘获电子后形成带负电的界面电荷，阈值电压与界面电荷数呈正相关。当温度降低时，材料表面费米能级向导带底偏移，界面态密度增加，大量电子被界面俘获，界面陷阱电荷大幅增大，阈值电压升高。

3.1.2 GaN HEMT 的阈值电压变化趋势分析

GaN HEMT 的阈值电压主要包括四个部分，如式( 7) 所示:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLasM73Q4pe5LKQ73wZibgMaLaleor5otQmrma4gqDf5Diaib2HzeauibUibA/640?wx_fmt=png&from=appmsg)

其中，σpol表示 AlGaN /GaN 界面处材料压电极化强度和自发极化强度之差引起的总极化电荷密度，对阈值电压的影响不大; c1 为栅极和沟道之间的单位面积电容，且 c1 \= ε1 /d，ε1 为 AlGaN的介电常数，d 为势垒层高度。

Vn 是平带条件下导带底与费米能级的能量间距对应的电压，可通过式( 8) 计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLwQA4FDB0T4xNJE9ly27ztt9OBNsR7bSictSDYVnXDbZzFghg4aVadXg/640?wx_fmt=png&from=appmsg)

φb 为肖特基势垒高度，可以通过式( 9) 计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLtxbfcunNtE1k9WhYtdY1lERwQR1aZggLkNhDQEODIZoNEqYAjmGZEA/640?wx_fmt=png&from=appmsg)

ΔEc 为 AlGaN 和 GaN 导带底在交界面处的带阶差，随温度的降低而增大。由于式( 7) 的第一项和第二项对阈值电压的影响都可以忽略，第三项和第四项都随温度的降低而降低，GaN HEMT 的阈值电压随温度降低而减少。

3.2 漏源击穿电压

3.2.1 SiC MOSFET 的漏源击穿电压变化趋势分析

MOSFET 的漏源击穿机理主要是雪崩击穿。对 MOSFET 而言，雪崩击穿发生的位置主要在耗尽层，当耗尽层某一位置达到电场峰值时，可以认为器件被击穿，利用无限大平面结击穿原理建立泊松方程，推导得到，MOSFET 的击穿电压可以由式（10）表示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kL3jx0Pv6bibAicXLsX9zdzL7G7Y81KIGBe3VkdKvkKteTLBHq3Ndlraxw/640?wx_fmt=png&from=appmsg)

其中，εSiC为 SiC 介电常数，wD 为击穿发生时的耗尽层宽度，可以通过式( 11) 计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLq858QVrCjlrWj8LFBiaCx3up32Qh3QfiayWNQGaiaTibo02fruZrEAs2rw/640?wx_fmt=png&from=appmsg)

其中 A 和 n 为碰撞电离 Fulop 参数，温度依赖公式( 12) 分别为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLTPoywxsN751qG8frSAn9iaI2wM4I2nnWQQX3g0VaZAsHeiakic6CTaENw/640?wx_fmt=png&from=appmsg)

将具体数值代入式( 11) 、( 12) 可知，当温度降低时，wD 减小，因此 UB 也减小。而当温度过低时，影响 SiC / SiO2界面捕获电子，界面陷阱电荷增多，击穿电压边缘电场分布发生变化，导致临界击穿场强大幅减小，击穿电压也随之大幅降低。因此，可以看到 MOSFET 的击穿电压 － 温度曲线，在低于某一温度点后，斜率明显增大。

3.2.2 GaN HEMT 的漏源击穿电压变化趋势分析

GaN HEMT 的击穿机理与 MOSFET 一样是雪崩击穿。HEMT 的雪崩击穿同样发生在耗尽层，耗尽区的电场强度逐渐提高，沟道内载流子速度被加速到无穷大，速度达到一定程度后与原子碰撞，产生大量电子 － 空穴而发生雪崩击穿。同时HEMT 反向关断时，沟道内二维电子气被部分耗尽而留下正电性的固定极化电荷，从这些固定极化电荷发出的电力线便指向栅极边沿，栅极边沿电场过高也可能使得器件发生击穿。因此，可以从两个层面分析HEMT的击穿电压与温度的关系。

一方面，HEMT 的二维电子气作为漏极和源极之间的导电通道，当温度降低时，势垒中的载流子被固定在界面陷阱形成界面电荷，流入三角势阱的载流子减少，2DEG 中的载流子密度降低，且载流子热运动减弱，平均动能降低，需要更高的电压才能达到碰撞电离，因此，漏源击穿电压增大。

另一方面，击穿电压受到器件边沿电场峰值影响。当温度降低时，沟道内二维电子气密度减小，漂移区浓度减小，有利于耗尽层进一步扩展，使得器件内部电场拉高，栅极边缘及漏极区域附近的峰值电场也有所提高，击穿电压随之增大。

3.3 导通电阻

3.3.1 SiC MOSFET 的导通电阻变化趋势分析

SiC MOSFET 的 导 通 电 阻Ｒon，可 以 通过 式( 13) 计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLqqfL8lEs0ESOkJcJMGghbiaIoQKOm1nRibST4PhYgRe7CHKkVArZNe8Q/640?wx_fmt=png&from=appmsg)

其中，L 为沟道长度，Vg 为栅极电压，Z 为元胞在横截面积垂直方向的长度，μch 为电子迁移率。影响载流子迁移率的散射机制主要有电离杂质散射、表面声子散射、表面粗糙散射以及界面陷阱引起的库伦散射，其关系如式( 14) 所示:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kL9IqadOoexEH4s5eUBLNzejqB2pyBQhK6ctVg36OUFIMhGaY6mMN8Kw/640?wx_fmt=png&from=appmsg)

其中，μb、μsp、μsr、μc 分别为电离杂质散射迁移率、表面声子散射迁移率、表面粗糙散射迁移率，以及界面陷阱引起的库伦散射迁移率。研究表明，SiC MOSFET 的界面态品质较差，界面态密度可达

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLYov9z94r1Rtiaibxv6dGLUnNOfaI2eHxmbbjcLDIymkZvGe8tpKSL5Ew/640?wx_fmt=png&from=appmsg)

，比 Si MOSFET 的界面态密度高出两个量级，且温度对库伦散射影响最大。因此，低温下 SiC MOSFET 的迁移率的影响机制主要在于库伦散射。库伦散射主要是界面陷阱紧挨着反型层而对导电沟道直接产生影响，温度降低，陷阱密度越大，造成的库伦散射越强，界面陷阱电荷量随温度的降低而增大，库伦散射增强，μc 降低，沟道迁移率 μch减小，导通电阻随之增大。

3.3.2 GaN HEMT 的导通电阻变化趋势分析

GaN HEMT 的导通电阻可以通过式 ( 15 )计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLKJFtbjAfabWrQ2Qojs7diaRWPf2mRlsjpxn5u9XVr9HSP0NaymjfF3g/640?wx_fmt=png&from=appmsg)

其中，ns2D为二维电子气( 2DEG) 浓度，与沟道迁移率 μ 都受到温度影响。

理论上，HEMT的沟道迁移率与 MOSFET 相同，都受到多种散射机制的影响，包括合金无序散射、离化杂质散射、界面粗糙度散射、声学声子散射等。一般来说，GaN HEMT 中影响电子迁移率的主要散射机制是晶格振动散射机制，当温度降低时，晶格振动散射减弱，二维电子气迁移率增大，可以近似表达为 μ∝T3 /2。

而 2DEG 浓度随温度降低也有所上升。当温

度降低时，异质结界面导带突变量增大，2DEG 量子阱的深度变深，二维电子的二维性质得到加强，2DEG 浓度略有增大。因此，HEMT 的导通电阻与温度呈正相关关系。

4\. SiC MOSFET 和 GaN HEMT 低温差异机理分析

造成 SiC MOSFET 和 GaN HEMT 电学特性不同的原因主要是二者结构上的差异，MOSFET 的基本结构如图 3 所示，界面陷阱主要出现在 SiO2和 SiC 两种材料的交界处，如图 3 中 T 标志所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLk3zONqHYe6esTLVB227hEreJ7nPNsVEQ9s2rKRm8H1nKI95eibEGibEg/640?wx_fmt=png&from=appmsg)

GaN HEMT 的结构与MOSFET 相比有所不同，如图 4 所示。因为掺杂半导体层和半导体层之间禁带差异大，能带在交界面发生弯曲，在掺杂半导体界面形成势垒，在半导体层界面形成三角形势垒。异质结界面处存在的导带差驱使掺杂半导体中的电子向半导体层转移，转移到三角形势阱中形成电子气，而这个过程只发生在掺杂半导 体/半 导 体 界 面，因此成为二维电子气( 2DEG) 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnmpMq14G84ZCXL5FlzU3kLdjzicSmv9icl4H8P5BYEQiccJgLWkkg0T9WJawLU1hdOaCDco7wCyB00w/640?wx_fmt=png&from=appmsg)

MOSFET 和 HEMT 的阈值电压随温度变化的趋势相反的原因主要在于其结构的差异。MOSFET 的阈值电压随温度的变化主要与界面陷阱有关，温度降低使得界面态密度增大，界面陷阱电荷增多，阈值电压升高。而 GaN HEMT 的阈值电压主要取决于 AlGaN 层和 GaN 层的结构和特性，温度降低，AlGaN /GaN 导带底带阶差增大，同时肖特基势垒减小，HEMT 的阈值电压减小。

MOSFET 和 HEMT 的击穿电压和导通电阻随温度变化的趋势相反的原因均与 SiC MOSFET 的界面品质和 GaN HEMT 的二维电子气结构相关。SiC MOSFET 的击穿电压主要受到半导体/氧化物界面品质的影响。温度降低，界面陷阱电荷增多，边缘电场分布发生变化，漏源击穿电压降低;而 GaN HEMT 的漏源击穿电压主要受到二维电子气的影响，温度降低，载流子被固定在 2DEG 量子阱，注入沟道的载流子浓度降低，击穿电压增大。SiC MOSFET 和 GaN HEMT 的导通电阻主要取决于器件的电子迁移率。由于 MOSFET 较差的界面品质，使得器件电子迁移率在低温下主要受到库伦散射影响，温度降低，库伦散射加剧，沟道迁移率降低，导通电阻增大; 而 GaN HEMT 中的二维电子气迁移率受晶格散射影响最大，温度降低，晶格振动散射减弱，沟道迁移率增大，导通电阻减小。

5. 结论

本文利用液氮回温测试了 SiC MOSFET 和GaN HEMT 在77.7K～300K 的阈值电压、击穿电压、导通电阻三个参数，并绘制了它们关于温度的曲线，进行了理论分析。造成两种器件低温物理特性不同的根本原因是 SiC MOSFET 和 GaN HEMT 的物理结构不同，导电机理也不同。

SiC MOSFET 由于其较差的界面品质，使得器件特性受到界面陷阱的影响。而 GaN HEMT独特的二维电子气结构使其受杂质离子和界面态的影响较小，在低温下能够保持较好的特性。因此，低温应用中可以优先考虑 GaN HEMT，而 SiC MOSFET 需要进一步优化工艺，增强其界面品质，改善其低温性能。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)