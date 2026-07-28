# 栅氧老化下SiC MOSFET开通瞬态栅极振荡特性研究

原创 李豪 ，成芮俊杰 SiC碳化硅MOS管及功率模块的应用 2024-11-28 18:08 广东

> 原文地址: [https://mp.weixin.qq.com/s/tXF7roh3I8cX\_HhKndRhJA](https://mp.weixin.qq.com/s/tXF7roh3I8cX_HhKndRhJA)

**文章来源：**中国电机工程学报

**作者：**李豪 1，成芮俊杰 1，向大为 2\*，田鑫 1(1．上海电力大学电气工程学院，上海市 杨浦区 200090；2．同济大学电子与信息工程学院，上海市 嘉定区 201804)

**摘要：**栅氧老化问题已成为制约碳化硅(SiC)金属半导体氧化物场效应管(metal oxide semiconductor field effect transistor，MOSFET)可靠性的关键因素，该文尝试利用SiC MOSFET高速开关在变换器中引起的高频开关振荡获取栅氧状态信息，重点研究栅氧老化对开通瞬态栅极高频振荡特性的影响。首先，分析SiC MOSFET栅氧老化机理及其对器件开通时间的影响。然后，建立开通瞬态栅极回路分阶段高频等效电路模型，揭示SiC MOSFET栅极开通振荡电流的形成机理和影响因素。最后，通过33V高压栅偏加速老化实验进行验证。研究结果表明，随着栅氧老化程度的加深，SiC MOSFET阈值电压会逐渐增加而开通速度变慢，导致栅极开通振荡电流显著减小(约28%)。该文的工作有望为SiC MOSFET栅氧老化在线监测提供一种新的思路。

**关键词：**

碳化硅金属半导体氧化物场效应管(SiC MOSFET)；栅氧老化；栅极振荡；在线状态监测

**0\. 引言**

在“碳达峰、碳中和”目标下，新能源行业迎来迅猛发展，对电能变换装置的效率、功率密度和可靠性提出更高的要求。相较于传统的硅(Si)材料，碳化硅(SiC)材料具有更宽的禁带宽度、更高的临界击穿电场强度、更大的热导率以及更快的电子饱和速度。SiC金属半导体氧化物场效应管(metal oxide semiconductor field effect transistor，MOSFET)具有更快的开关速度、更低的开关损耗和更高的耐温能力，这使其成为新一代高功率密度电能变换装置。

SiC MOSFET器件给变换器带来性能大幅提升的同时，其栅氧老化问题也成为制约SiC变换器可靠性的关键因素。SiC器件在形成栅极氧化层时，由于有碳元素的参与会使得其在SiC-二氧化硅(SiO2)界面处产生大量近界面缺陷。而且，SiC特殊的能带结构更容易受到近界面陷阱的影响，相较于Si器件，其近界面缺陷更容易获得电子，导致SiC MOSFET长期运行时容易发生栅极老化甚至失效。

SiC MOSFET栅氧老化机理复杂，栅氧失效本质是经时介电层击穿(time dependent dielectric breakdown，TDDB)，在老化末期栅极漏电流会从正常状态的几十纳安陡升至几个毫安。然而，栅极漏电流发生突增时器件已达到临界失效状态。因此，栅极漏电流可以作为栅氧失效的判据，但是难以表征栅氧早期老化状态。近年来的研究表明，SiC MOSFET器件的静态参数和动态参数会随栅极氧化层老化发生变化。

与栅氧老化相关的器件静态参数(steady parameters)包括导通电阻、体二极管压降和输入电容等。低栅极电压下的导通电阻Ron能够直接反映栅氧层老化程度，具有灵敏度高的优点，但实际应用需要外加小恒流源并选择合适的线性区的栅极电压。体二极管压降USD被证明在非负栅极电压增强关断时会随着栅氧层的老化逐渐升高，然而，其准确提取容易受外接的并联二极管的影响。文献\[8\]表明，栅极输入电容Ciss的容值会随着栅极氧化层老化减小。Ciss作为器件本征参数具有与工况和电路拓扑结构无关的优点。Ciss具有压变特性，其对栅氧老化敏感的区间为漏源电压UDS < 1 V且栅源电压UGS < 3 V\[8\]，不在器件正常运行范围内。文献\[9\]研究发现，输入电容Ciss在−10 V < UGS < −5 V区间也对栅氧老化敏感，通过对栅极驱动电路特殊设计能够在器件关断期间监测栅氧状态。

与栅氧老化相关的器件动态参数包括阈值电压、米勒平台电压、米勒平台时间和漏源电压下降时间等。阈值电压UTH变化与隧穿进入近界面缺陷的电荷量QNIOT直接相关，能够有效表征栅氧健康状态。文献\[11\]表明，SiC MOSFET工作在第三象限时(源极电位高于漏极UDS < 0，电流由源极流向漏极ID < 0)的阈值电压UTH(body)会随着栅氧老化程度加深而增大。文献\[12\]表明，米勒平台电压UGP与UTH具有相关性，会随着栅极的老化程度逐渐增加，而且UGP在相同老化条件下的变化率大于UTH。文献\[13\]表明，栅氧老化会影响SiC MOSFET开通时的电压下降时间，利用开通时间变化可以在线监测栅氧老化状态。由于SiC MOSFET开通速度极快(约几十纳秒)，要求监测系统具有纳秒级的时间分辨率。

实际系统中，SiC MOSFET器件静态参数需要在特定工况下获取，且与栅氧老化状态相关的参数敏感区间通常不在系统正常运行条件下；动态参数受超高速开关下极小时间尺度制约且易受寄生振荡的干扰。针对这些技术挑战，论文尝试利用SiC MOSFET高速开关在变换器中引起的高频开关振荡获取栅氧状态信息。开关振荡是功率变换器中电力电子器件开关瞬态陡沿激励与变换器内部寄生参数耦合产生的一种高频电磁谐振现象，可灵敏反映开关激励特性或高频寄生参数微弱变化。变换器实际运行中，SiC MOSFET器件的动态特性会耦合到功率回路和栅极回路，其中栅极回路对电磁环境更为敏感，容易受到栅氧老化的影响。诸多文献已经证明栅氧老化会改变器件特性及参数，但是栅氧老化在变换器层面对栅极开关振荡特性的影响还未见研究。因此，研究栅氧老化下的SiC MOSFET开通瞬态栅极振荡特性对于栅极振荡抑制以及新的栅氧老化在线监测方法提出均具有重要意义。

考虑到SiC MOSFET开通时间通常小于关断时间，开通振荡相比关断振荡往往更加显著。本文重点研究栅氧老化对SiC MOSFET开通瞬态栅极高频振荡特性的影响。首先分析栅氧老化对器件开通特性的影响，然后对SiC MOSFET开通瞬态过程进行分段分析，建立高频等效模型并理论推导栅氧老化与高频振荡变化的关系，最后通过加速老化实验验证模型和理论分析的正确性。

**1\. 栅氧老化下的SiC MOSFET开通特性**

**1.1 SiC MOSFET栅氧老化机理**

在MOSFET中，栅极金属端子、氧化层和半导体材料形成夹层结构，其中氧化层和半导体之间存在过渡界面。SiC MOSFET器件的夹层结构如 图 1所示，相较于传统的Si材料，SiC材料与SiO2形成的界面含有更多的近界面缺陷陷阱(near-interfacial oxide traps，NIOT)。当SiC MOSFET开启时，大量电子积聚在SiC的导带边缘附近，这些处于激发态的电子可以隧穿进入缺陷能带并占据NIOT。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgB5CnXiabU7uPW7tUlaPUMnXcoDUqxGQuS8wOqPQ9KrDSTZCSiaUo4BCw/640?wx_fmt=png&from=appmsg)

电子隧穿到NIOT中的数目取决于施加电应力的大小和持续时间的长短，更长的应力持续时间或更高的栅偏电压会导致更多的电子进入氧化物。由于SiC在形成氧化层时需要保证能释放碳原子，其氧化层比Si器件的更薄，所以在同等应力的情况下电子隧穿过程更短。假设N为NIOT的数目，则在时间t内转移进入这些陷阱的总电荷QNIOT为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Ag1S93bevBFeyAGZGfQmfaaq8EMtogOnfmyqkibFxHluc06uS6Wbxiaib1w/640?wx_fmt=png&from=appmsg)

式中：e为电子电荷；t0为初始隧穿过渡时间；β反映栅极氧化物势垒高度的隧穿参数；γ ≅ 0.577为欧拉常数。由式(1)可知，NIOT的密度会显著影响氧化层在相同偏置电场下单位时间内隧穿电荷的大小，因此SiC器件氧化层在同样的老化条件下会积累更多的QNIOT。  

**1.2 栅氧老化对SiC MOSFET开通时间的影响**

图 2 为 SiC MOSFET 双脉冲测试电路，其中：UDC 为直流电压；L 为负载电感；Lloop 为功率回路导线总寄生电感；CJ 为续流二极管结电容；CGD、CGS和 CDS分别为 SiC MOSFET 栅漏、栅源和漏源电容；LD为漏极电感；LGS为栅极回路总寄生电感；RG为栅极电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Ag4QXibAxnBkRib5RzOeACE9OBI0tjaY1lmB0wQ4YEaJundFm0kcXwTOzg/640?wx_fmt=png&from=appmsg)

SiC MOSFET 开通过程中 UGS、UDS、ID以及栅极电流 IG在不同阶段的变化如图 3 所示，定义开通过程中 UDS下降时间为开通下降时间 tvf。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgnWcLgT0ytxnvVgMTfOfAIibMl48IZuYJHDgF5NAUwasniaTjv4NYbia5A/640?wx_fmt=png&from=appmsg)

随着栅氧老化增加，QNIOT 会在氧化层内形成与开启时栅极电场方向相反的内电势。因此，随着栅氧老化程度的加深，需要在栅极施加更大的电场生成漏极 D 和源极 S 之间的导电沟道，使得 SiC MOSFET 的 UTH增加，可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Agic35wIaPDIcLxTPt88croAxn7IGOLLttLMPV1XSAtDw5h3QPMvxibk8g/640?wx_fmt=png&from=appmsg)

式中：UTH0 为器件阈值电压的初始值；COX为栅极氧化物电容。

UTH 的增加导致 D-S 之间的沟道形成过程变长，从而延迟米勒平台的出现，导致米勒平台电压UGP增大。UTH与 UGP之间的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgXzlKANyZIMymvuCwQSTz3jjx00WZjicxJYPw6wPH8ibGrkmdAIqNyKhA/640?wx_fmt=png&from=appmsg)

式中：ID 为漏极电流；LCH 为沟道长度；Z 为沟道宽度；μ 为沟道载流子迁移率。

进入米勒平台之后，驱动回路开始给栅漏电容CGD 充电，漏源电压 UDS 下降。假定驱动电路的栅极电压 UEE 不变，更高的 UGP 意味着栅极电阻 RG电压降低，从而使得经 RG 对 CGD 充电电流减小。因此，tGP 会随栅氧老化而发生增加。与此同时，MOSFET 管压降在米勒平台阶段迅速下降，其下降时间由栅漏电容 CGD 充电过程决定。通常认为 tvf与米勒平台时间 tGP 近似相等，当 CGD 充电完成后米勒平台结束，管压降同时下降到通态电压。需指出的是米勒平台期间，栅漏电容 CGD将随耗尽层衰退而非线性增加，其效应由式(4)中栅漏电容平均值 CGD.av表征：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Agb0uKAxq1xwJvlhdzPKmMGr2rVeWbmo3zdpK8Oug7fHFAYHVyfvS6yw/640?wx_fmt=png&from=appmsg)

式(4)表明，栅漏电容 CGD和米勒平台电压 UGP会影响 tvf。由于栅氧老化对 CGD的敏感区间为 UDS <1 V 且 UGS < 3 V，而在这一阶段 MOSFET 并未完全导通且 UGP 远大于 3 V。因此，栅氧老化对 CGD的影响可被忽略，tvf 主要受 UGP 的影响(负相关)。SiC MOSFET 栅氧老化会导致 UGP增加，从而使得tvf变长。

**2 .SiC MOSFET 栅极开通振荡建模分析**

由 1 节分析，SiC MOSFET 栅氧老化会增加阈值电压和米勒平台电压，从而导致器件开通速度变慢。本节进一步考虑器件开关过程与栅极回路的高频耦合，分析栅氧老化、器件参数和栅极开通振荡特性之间的关联关系。

**2.1 栅极开通高频瞬态振荡建模**

如图 3 所示，SiC MOSFET 的 UDS在米勒平台期快速下降(器件导通过程)，因此将 SiC MOSFET开通过程根据米勒平台前后分为如下阶段建模分析，各阶段等效回路如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Agt8wMjkxHMmax9ibBd9qFvI4vNubQjsml0q6rGGiaE0WK69JzsLRAuSYQ/640?wx_fmt=png&from=appmsg)

1）t0—t2 阶段(米勒平台前)。

UEE 开始给 CGS 充电。当栅极电压超过阈值电压后，器件开始通流但 UDS尚未下降。在此阶段，栅极回路可以视为与功率回路解耦，栅极等效电路如图 4(a)所示，栅极电流 IG给栅源电容 CGS充电，UGS持续上升。

2）t2—t3 阶段(米勒平台期)。

SiC MOSFET 进入米勒平台期。在这一阶段UDS 快速下降，漏极 D 电位的高 du/dt 变化会在CGD上感应出位移电流 IGD。此阶段栅极等效电路如图 4(b)所示，栅极回路与功率回路经位移电流 IGD发生耦合，IGD 可以被视为对栅极回路的暂态电流源激励。

3）t3—t4 阶段(米勒平台后)。

SiC MOSFET 完全开通，UDS保持漏源电压通态值 UDS,on 恒定，位移电流 IGD 消失。栅极回路可视为与功率回路解耦，此阶段的栅极等效电流如图 4(c)所示。在此阶段栅极电流 IG将产生高频振荡分量 IG\_sw，其形成原因是米勒平台期耦合的位移电流 IGD对栅极回路激励下的谐振响应。

**2.2 栅极开通振荡电流解析表达式推导**

根据 SiC MOSFET 栅极回路等效模型，推导开通瞬态栅极高频振荡电流的解析表达式。t2—t3 阶段，漏极 D 电压变化率可近似为 UDC/tvf。栅极 G的电压的变化可以忽略，IGD可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgZgzJrrDeM6ialzKtzK1MSZ0IfHVjDeVS5j3pa47KfVvgicGPBhGlEhGQ/640?wx_fmt=png&from=appmsg)

式中 CGD.av为 CGD在 t2—t3 阶段的均值。

由于 SiC MOSFET 的 tvf极短，图 4(b)可看作栅极电路对于 IGD的冲击响应，则对回路列写 KVL 方程可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Ag06RauTyfHtvBNQLKaSrteUwcnU1VZ1joiaIAcOvPMYVzJHbibepvayhg/640?wx_fmt=png&from=appmsg)

式中 IG(t2−)为激励发生前的栅极电感电流。对式(6)进行求解，可得栅极振荡电流 IG\_sw：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgeXGmwdROKDiadOhp4e5Ng5wKJENFTZDHozvDeOEBqslrQcgsNibq5zCg/640?wx_fmt=png&from=appmsg)

考虑到 LGS 和 CGS数值较小(nF 和 nH 级)，UEE和 UGP的差值较小，且 IG(t2−)通常只有 mA 级，而 tvf 则为 ns 级，故式(7)中含 IG(t2−)、UGP 和 UEE项可以忽略，此时 IG\_sw表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgpsQ9WIJwvprqGLpo6lTIXm2JoKKbNsIfSHTavRB2ky47hibOeFVp6nw/640?wx_fmt=png&from=appmsg)

栅极振荡电流的角频率ω G\_sw为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgMGR5JulxwOnzSLNzOXrJ0u5DbMHibibjA2zWd46zbpCjolv1mKYFvKxw/640?wx_fmt=png&from=appmsg)

**2.3 栅极开通振荡电流影响因素分析**

如式(8)、(9)所示，SiC MOSFET 栅极开通振荡电流幅频特性与多个参数均有关。为分析栅氧老化对栅极开通振荡电流的影响，根据参数与栅氧老化的相关性，分析如下：

1）栅氧老化相关参数：CGS、CGD.av 和 tvf。

CGS 与 IG\_sw 幅值和频率均呈负相关。根据文献\[8\]，CGS的参数敏感性与 UGS有关。CGS仅在 UGS \=0~1 V 区间对栅氧老化敏感(容值增加)，由于栅极开通振荡发生时 UGS≈UGP，远高于 1 V。因此，栅氧老化对 CGS的影响可以忽略。

CGD.av 与 IG\_sw 幅值成正比，根据文献\[8\]，CGD在 UDS \= 0~3 V 区间随着栅氧老化减小，然而当 UDS处于这个区间时器件已经完成开通(米勒平台期结束)。因此，栅氧老化对于 CGD.av 的影响幅度极小，可以忽略。

tvf 与 IG\_sw 的幅值成反比，根据 2 节分析 SiC MOSFET 栅氧老化会导致 tvf 增加，所以理论上会导致 IG\_sw幅值减小。

2）栅氧老化无关参数：LGS、RG和 UDC。

LGS、RG会影响 IG\_sw的幅值和频率，但是它们并不随栅氧老化而变化；UDC与IG\_sw的幅值成正比，需要考虑实际运行时不同 UDC的影响。

综上分析，随着栅氧老化程度的加深，tvf变长使得栅极开通振荡幅值减小；CGS 虽然会随着栅氧老化变大但是其敏感区域不在栅极振荡产生的工作范围内，而 LGS与栅氧老化无关，故栅极振荡的频率不发生变化。

**3 .实验验证与结果分析**

**3.1 实验系统与栅氧加速老化方案**

为分析栅氧老化对于 SiC MOSFET 栅极开通振荡特性的影响，搭建如图 5 所示的实验系统，其中双脉冲电路用于测量不同直流电压和负载电流下的开关特性和栅极电流，通过高压栅偏实验加速栅氧老化。待测 SiC MOSFET 为 Cree C3M0075120K，其中 UEE设置为 −3/15 V，RG为 8.2 Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgDAANnkLMjRUbWgicW7WsXm61qLDKZh6ibDiajtkfCnLmso11qia0icRmiaxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgRD2ibz2EpMOPDicmGwF05AHhGDqaZQia3RicDPQtkbp52729ibEJpDicykZA/640?wx_fmt=png&from=appmsg)

在 PCB板栅极回路上穿孔，采用上限带宽为 30 MHz 的CYBERTEK CP9003S 柔性罗氏线圈探头非接触地测量栅极高频振荡电流，电流探头的灵敏度为200 mV/A，精度为 2%。实验系统参数详见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgRtnUQRvzZejtBAFSZRpAC4uKOWWaXHhfTDHibMDAhibIHthYibQY5a7qw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 栅氧老化程度取决于施加在栅极上的电应力及其持续时间。文献\[28\]采用 33 V 的偏置电压 Ustress加速 SiC MOSFET 栅氧老化，加速老化实验温度为室温 25℃。通过施加高栅偏应力加速栅极氧化层老化，每隔 30 h 进行双脉冲测试测量栅极振荡电流。为缩短老化实验与双脉冲测试之间的时间间隔，每次老化实验后被测试器件直接通过调整电路进行双脉冲测试，实验总体老化时间为210 h。

**3.2 栅氧老化对栅极开通振荡幅频特性的影响**

图 6(b)为直流电压 600 V，开通电流为 8 A 时的双脉冲测试实验波形。从图 6(b)中可以看出，在米勒平台期(图中 t2—t3 阶段)SiC MOSFET 的 UDS快速下降，随后 IG发生明显地高频振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Ag1AdAichVuVI6WgRw3A6bk8DmcNmwGqKWaN22tiayOzb5L6hIUicxA555A/640?wx_fmt=png&from=appmsg)

表 2 给出栅极回路的参数与谐振频率。其中，CGS 的测量参考文献\[29\]，采用高频阻抗分析仪HIOKO IM3536 测量待测器件的栅源极阻抗，在1 MHz 下测得的 CGS 容值为 1.4 nF，与器件技术手册接近；LGS 利用开通过程中栅极电压与电流波形的线性区间估算。根据式(9)计算出的理论谐振频率为 21.8 MHz，实验测得的栅极谐振频率为22 MHz。理论计算与实测谐振频率吻合，验证前文理论分析和谐振模型的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgkgmPiaW5FPjcUvfEoeubF4C78uerAEMIHxnUazLovboebiaT9HOPdMsg/640?wx_fmt=png&from=appmsg)

通过施加 33 V 的偏置电压加速 SiC MOSFET器件栅极氧化层老化，并在相同工况下测量栅极开通振荡电流。不同老化时间下的栅极开通振荡电流的时域和频域波形如图 7 所示。从图 7 中可以看出，看到栅极开通振荡幅值随老化时间的增加发生减小，而栅极振荡频率基本不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Ag9qnOqmXw8zzicxnuO41NsE0hzNvz6o3t2h4jPtAPAWMf6LEmibLuqGvA/640?wx_fmt=png&from=appmsg)

为进一步分析栅氧老化对 SiC MOSFET 栅极开通振荡电流 IG\_sw幅频特性的影响，提取不同老化时间下的 IG\_sw 频谱峰值 IG\_peak 和谐振频率 FG\_sw，如图 8 所示。图 8(a) 中，随着老化时间的增长 IG\_peak幅值持续下降，加速老化 210 h 后 IG\_peak 幅值下降27.8%。FG\_sw 频率偏移始终小于 1%，如图 8(b)所示。图 7、8 实验结果表明，栅氧老化会降低栅极开通振荡的幅值，而对栅极振荡频率的影响较小，与第 2.3 节理论分析相一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgeW39uBpwvGCIGItgcoicn09wicx7BPx1M93sPOEibKplck3xr7PnjZ4sw/640?wx_fmt=png&from=appmsg)

由 2 节的理论分析可知，栅氧老化导致 UTH增加是 SiC MOSFET 栅极开通振荡幅值减小的主要原因。不同栅氧老化程度下的 UTH 测量结果如图 9所示，测量方法为将栅极和漏级短接保证UGS \= UDS，读取使得 ID等于 5 mA 时的 UGS，经过 210 h 老化后，UTH从 3.02 V 增加到 3.77 V，相对变化率为 24.7%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgYibCmkaMVVb6ycT2Yicib6LiaSZZgvViaXsDhPd0YLNSem3ibicCh0tFbvTtQ/640?wx_fmt=png&from=appmsg)

**3.3 运行工况对栅极开通振荡的影响**

考虑 SiC 变换器实际运行工况(如电压、电流)的影响，对比不同开通电流和直流电压下的栅极开通振荡波形。分别考虑待测器件空载(0 A)、半载(8 A)和满载(16 A)共 3 种典型工况，如图 10 所示，不同负载电流下栅极开通振荡电流变化较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8AgOuVFExVI3bKthxIvZmBECvcZibMLYicQk76299Hhyk3MAzgIzHeA72Cw/640?wx_fmt=png&from=appmsg)

从0~16 A，栅极开通振荡电流 IG\_sw 幅值变化约为3.4%。与栅氧老化导致的开通振荡电流 27.8%变化量相比，负载电流影响可以忽略。根据式(8)，栅极开通振荡电流幅值与直流电压 UDC 正相关，图 11为在不同直流电压 UDC下的 IG\_sw频谱图，可以看到IG\_sw幅值与 UDC呈线性关系，实验结果与前文理论分析结果相吻合。因此，采用栅极开通振荡电流的幅值表征栅氧老化状态时需要综合考虑直流电压的影响，如在相同直流电压下测量或者对直流电压进行标定和补偿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0QGu0MynTetNL5B92Y8Ag8dTnhO2jCpiaADP9KicRE3GWCFj7ngFjyNm6ejCEBnD9mOb68ea6sKBQ/640?wx_fmt=png&from=appmsg)

**3.4 栅极开通振荡用于栅氧老化状态监测的展望**

理论分析和实验结果表明，SiC MOSFET 栅极开通振荡电流的幅值会随栅氧老化显著减少，有望为在线监测 SiC MOSFET 栅氧状态提供一种新的技术手段。针对利用栅极开通振荡在线监测 SiC MOSFET 栅氧状态的分析和展望如下：

1）连续在线监测潜力：SiC MOSFET 器件已成为制约碳化硅变换器可靠性的关键因素。如果能够在线连续监测栅氧老化状态对于系统运行可靠性具有重要的价值，特别是对可靠性要求极为严苛的应用场景。现有技术利用器件静态参数或者动态参数大多只能离线或者准在线监测栅氧状态，而能够连续在线监测的参数均存在较大的使用限制。栅极开通振荡是 SiC MOSFET 变流系统中的固有电磁振荡现象，无需外加激励源或改变系统运行工况，有望在系统正常工作时连续监测栅氧老化状态。而且，栅极开通振荡作为栅极回路的固有谐振响应具有对 SiC MOSFET 栅氧早期状态老化敏感的特点。

2）技术实施性：栅极开通振荡电流信号可以通过非接触方式测量，由于高频振荡信号的频率为MHz 级以上，测量线圈可以采用非磁性材料和较低的匝数，如采用 PCB 罗氏线圈集成到驱动电路，实现 SiC MOSFET 栅氧老化状态的在线监测。在数据处理方面，直接对栅极开通振荡电流进行数字采样需要较高的采样频率，可考虑采用模拟电路如包络检波、峰值检测等电路降低对于硬件采用率的要求。

3）需进一步研究的问题：未来还需进一步研究 SiC MOSFET 结温、封装老化等因素对开通瞬态栅极振荡特性的影响，进一步明确栅极开通振荡用于 SiC MOSFET 栅氧老化状态监测的耦合因素和排他性。此外，论文主要针对的是单管 SiC MOSFET，而且只研究正偏压下的栅极老化影响，对于多芯片并联 SiC MOSFET 模块以及负栅偏电压的情况还需进一步研究。

**4. 结论**

针对 SiC MOSFET 的栅氧可靠性问题，论文研究栅氧老化对开通瞬态栅极高频振荡特性的影响，通过建立考虑功率回路耦合的开通瞬态栅极回路高频等效模型，揭示 SiC MOSFET 栅极开通振荡的形成机理。理论分析和实验研究可以得到以下结论：

1）SiC MOSFET 栅氧老化会增加阈值电压和米勒平台电压，导致器件开通速度变慢。漏源电压UDS快速变化耦合的暂态位移电流是 SiC MOSFET栅极高频振荡的激励源。

2）栅极开通振荡电流的幅值与 SiC MOSFET开通速度呈正相关。随着栅极氧化层老化，SiC MOSFET 栅极开通振荡电流的幅值发生约 28%的减小，而振荡频率基本保持不变。

3）SiC MOSFET 的阈值电压 UTH随栅氧老化充电加深而增加，由此导致的开关速度变慢是栅极开通振荡电流 IG\_sw幅值降低的主导因素。IG\_sw幅值对负载电流变化不敏感，但与直流电压呈线性关系。

论文通过理论和实验验证 IG\_sw 和栅氧老化的相关性，研究发现为 SiC MOSFET 栅氧老化在线监测提供了一种新的思路。未来将进一步研究负偏栅压、结温和封装老化的影响，挖掘栅极开通振荡在SiC MOSFET 状态监测方面的潜力。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)