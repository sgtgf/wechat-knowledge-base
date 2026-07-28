# 高压 SiC 装备高频电流互感器型隔离取能电源电场分布和绝缘特性


> 原文地址: [https://mp.weixin.qq.com/s/UtozreuFJ2oCPKxPsEbL0g](https://mp.weixin.qq.com/s/UtozreuFJ2oCPKxPsEbL0g)

文章来源：电工技术学报

作者：唐海博 1,2 潘建宇 1,2 姜 怡 1,2 闫 升 1,2 田鸿昌 3（1. 输变电装备技术全国重点实验室（重庆大学） 重庆 4000442. 重庆大学国家储能技术产教融合创新平台 重庆 400044 3. 中国电气装备集团科学技术研究院有限公司 上海 200040）

摘要： 高频电流互感器（HCT）型隔离取能电源具有优异的低寄生电容和强隔离能力，在高压碳化硅（SiC）器件及装备应用中具有良好的应用前景。然而，该装置的复杂结构带来了绝缘特性不明和高效耐压提升方法不清等问题。因此，该文首先构建 HCT 型隔离电源的三维等效仿真模型，系统探究了磁心尺寸、绕组匝数、隔离距离等 7 个关键结构参数对取能电源高压电场分布的影响特性，提出多因素耦合下的优化设计方法。然后搭建 HCT 型隔离取能电源高压实验平台，通过实验探究了关键结构因素对局部放电量形成和发展的关联规律，明晰了不同结构尺寸下的 HCT型电源耐压强度，最终为 HCT 型隔离取能电源的绝缘优化设计奠定了理论基础。

关键词：高压 SiC 器件、 隔离取能电源、 高频电流互感器

0\. 引言

高压碳化硅（SiC）器件的发展已助力电力电子系统在电压级别、功率密度和效率方面取得突破。近年来，已有科研机构和厂商开发了耐压超过10kV和15kV 的高压大容量 SiC 器件。通过高压 SiC 器件，仅采用二/三电平拓扑便可将大容量变流器的电压级别提高到10kV 及以上，功率达到MW 级。然而，随着电压等级的提升，为 SiC 器件驱动电路供能的隔离电源面临更高耐压能力的挑战。该装置从低压侧取电给高电位的驱动电路供电，虽然只需要几瓦功率，但由于与变换器主回路相连接，需要耐受几 kV 到几十 kV 的隔离电压。

目前，隔离电源结构可以分为四种类型：光纤传能（Power over Fiber-based, PoF）型、无线电能传输（Wireless Power Transformer, WPT）型、变压器（Voltage Transformer, VT）型和高频电流互感器（High-frequency Current Transformer, HCT）型。PoF型结构通过光纤实现能量传输，理论上消除了耦合电容，但由于输出功率低（小于0.5 W）以及光纤发射器价格高昂，不利于大规模应用。WPT 通过空气或其他绝缘介质实现电气隔离，其尺寸较大（空气间隙大于35 mm）、功率密度相对较小。VT型隔离电源通过一次和二次绕组耦合来实现能量传输，并通过增加一次和二次绕组的分离距离来实现隔离，其结构和控制方法简单，而隔离电压等级的提高将带来尺寸和质量显著增加的问题。HCT型隔离取能是一种新的高压 SiC 器件取能方法，区别在于高压输电线路上的传统电流互感器取能方法，它通过单根导线和高频电磁场耦合的方式实现传能。

针对高压隔离取能电源，需要重点考虑五个方面的性能，分别为功率密度、耦合电容 Ciso、绝缘性能、成本、功率。高压变流器集成了大量的功率器件及监测、驱动等辅助电路，通过提高隔离电源等辅助系统同主电路的集成度可提高逆变器系统的功率密度，同时也需选择成本相对较低的隔离取能解决方案。通过选择耦合电容 Ciso 较小的隔离取能结构，可减小隔离电源给辅助系统带来的电磁干扰（Electromagnetic Interference, EMI）。绝缘性能是隔离取能装置最重要的参数，需确保隔离取能电源具有足够的绝缘性能以保证驱动电路等辅助系统的安全运行。除此之外，需保证隔离电源能输出足够的功率（大于 2W）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR953Uo7vRXwb4aFvm0rSsWwSQIAppzT5E1wqVibOQrwzDre1cRdZnGHTg/640?wx_fmt=png&from=appmsg)

图 1 总结了四种隔离取能电源结构的性能特点，发现 HCT 型隔离取能结构是极具潜力的高压强抗 dv/dt 隔离取能方法，主要是因为超高频电磁耦合带来的高集成度和一次绕组单匝线圈带来的低耦合电容这两个优势。然而，针对 HCT 型隔离取能电源，现有研究主要集中在传输效率、功率以及耦合电容的优化，罕有对其特殊结构下绝缘特性进行系统性探究，导致其优化设计方法不清，绝缘耐压能力难以评估。

本文在分析 HCT 型隔离取能结构的基础上，首先采用有限元仿真构建了 HCT 型隔离取能结构的静电场三维结构物理模型，系统性探究并揭示了其关键结构参量对隔离电源内部电场强度的影响关联规律，提出了紧凑结构布局下的绝缘增强的设计方法。然后通过构建的 HCT 型隔离取能结构高压实验平台探明了各结构下的局部放电起始电压和放电量增长特性，阐明了不同结构参量影响下的耐压水平。最后为高压强隔离的 HCT 型取能装置的高效设计提供了充分的理论依据。

1\. HCT 型隔离取能结构

图 2 是 HCT 型隔离取能装置的工作原理，主要由高频半桥逆变电路、谐振网络、HCT 型隔离取能结构、整流电路、驱动电路代表的直流负载组成。与传统变压器型隔离取能装置不同，本文采用的隔离取能结构一次侧仅采用单匝穿心母线，简化了结构设计。此外，HCT 采用的高频传输策略显著降低了传统 CT 型取能装置磁心体积和高耦合系数的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9GzprYfhn0SFU6ydtQa9YfGSsyrTf45YWxtu5Rl6yicKykZqoYdM4MMw/640?wx_fmt=png&from=appmsg)

图 2 中，点画线框为 HCT 隔离取能结构，主要由一次绕组、高频磁心、二次绕组组成。一次绕组为蓝色标注部分，位于磁心中点，其核心结构参数包括长度、直径、穿心位置。高频磁心为灰色圆环部分，用于增强二次侧电磁场耦合度，其核心结构参数包括内径、高度、厚度。二次绕组为铜色部分，用于接收能量并给负载供能，其核心结构参数包括绕制方式、直径、匝数。图 2 中，dp 为一次绕组的直径，di 为磁心的内径，tc 为磁心的厚度，hc 为磁心的高度，n 为二次绕组的匝数，Lpk 为 HCT 结构一次绕组的漏感，Lm 为励磁电感，Ls 为二次绕组的电感，Lp-Cp-Cpr 为一次侧的谐振电感与谐振电容，Csr 为二次侧的谐振电容，用于补偿无功功率，Co为滤波电容，RL 为所接负载。

2\. HCT 结构参量对电场影响特性分析

对于中压电力电子装备来说，无局部放电设计十分重要。当变压器内部存在局部畸变电场，且畸变电场超过了临近材料的击穿场强时便会形成局部放电现象，影响装备绝缘寿命和可靠性。采用有限元仿真分析静电场内部分布以及用内部电场最大值Emax 来评估电力电子装备绝缘性能是较为常见的方法。在本文中最大电场被控制在标准空气击穿场强 30kV/cm。本节主要采用 Ansys Maxwell 有限元仿真软件搭建了 HCT 型隔离取能结构的基准仿真模型，通过合理的网格划分和计算，能准确获取HCT 型隔离取能结构内部电场分布，然后通过静电场有限元仿真探究了二次绕组、磁心以及一次绕组结构参数对内部电场分布的影响特性。

2.1 基于有限元的三维仿真物理模型建模

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9XhYhB2NKHIzjliahCgVf7ZpzlgYeBHiapSr9rRPbepVBGIzTU5Cfmsgw/640?wx_fmt=png&from=appmsg)

基于对 HCT 型隔离取能结构的分析，本节首先搭建了 HCT 型隔离取能结构的静电场基准模型，一次绕组同样穿过圆环磁心结构中心位置，二次绕组具有单侧集中式和均匀分散式结构，有限元模型仿真参数值见表 1，有限元模型如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9u4cm1I3ystPVuFNzCKs8RSMYudzibKg266zx3VefMb3xkZOeiamFBzSg/640?wx_fmt=png&from=appmsg)

由于 HCT 型隔离取能电源在实际运行过程中，二次绕组为高电位，一次绕组为低电位，因此，二次绕组被视为高压源端，施加直流电压为 20kV，一次侧设为地，强制为 0 电位。将仿真刻度的上限定为空气的击穿场强，即30kV/cm，图 3 中红色区域表示高电场强度，蓝色表示低电场强度，红色区域面积越大代表内部电场分布越恶劣。由于 HCT型隔离取能电源在运行过程传输功率较小，并不会造成明显温升，温度在 60℃以内。在此温度范围内，空气等介质的介电常数几乎不变，因此在有限元仿真中忽略了温度带来的影响。

表 2 为本文采用的网络剖分设置，网格粗细程度是影响仿真计算的重要因素，所剖分的网格越细，仿真计算的结果越精确，但计算量也越大。仿真发现，相较于一次绕组、磁心和求解区域，对二次绕组网格的处理更能影响仿真结果。基于此，本文采用自适应剖分，并针对二次绕组完成局部细化网格处理，以提高局部的仿真精度。对于另外三个剖分对象使用较粗糙的网格剖分，从而在不影响仿真结果的前提下实现更少的网络总数，减少整体计算时间和资源消耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR92DbRELCphn5c8lOqQBp2lmRjOZFicibu2k1g0ib7dftTSwoCH9I9UZlPQ/640?wx_fmt=png&from=appmsg)

2.2 二次绕组结构影响特性分析

本节探究了二次绕组结构参数对 HCT 型取能结构内部电场 Emax 的影响规律，通过讨论绕制方式（集中绕制和分散绕制）对 Emax 的影响规律，进而优先确定最佳二次绕组绕制方式。此外，还进一步探明了不同二次绕组匝数对 Emax 带来的影响。

现有 HCT 取能结构二次绕组有集中绕制和分散绕制两种结构，如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9LQDL9zxTvHELJvN3u4ZMdHCjyBqJ4tjGhWdFv2iaKbICumA0HHA8j0Q/640?wx_fmt=png&from=appmsg)

图 5 为两种绕制方式下的静电场分布，分散绕制下的 HCT 型隔离取能结构黄色和红色的高电场区域相较于集中绕制方式下面积更大。同时表 3 给出了两种绕制方式下 Emax的大小，集中绕制后 Emax=49.4 kV/cm，分散绕制为40.4 kV/cm。结果表明，在不改变 HCT 取能整体结构的前提下，采用单边集中式绕组具有更低 Emax，这能有效改善 HCT 型隔离取能结构内部电场分布，比分散式绕组结构降低了约 18.22 %。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9BgrJKz8tGtS3cfjdT5Rics9Ug9ZicLr76kfSdFWvnXqvQhu6j0UUogcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9iaNRZP5VA3YrQUSWVibgZDQXQ7g278Yc6fdFTVc6Liantic26icSNgJKXJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9oPFHwicmJpOpBjJV79WEFcByBUh4CUXfMfgSKwcXklgWecjOiaPytLFA/640?wx_fmt=png&from=appmsg)

图 6 和图 7 分别展示了不同二次绕组匝数下取能结构内部的电场分布以及二次绕组匝数对 Emax的影响规律。结果显示，绕组数量的增加会导致高压电场区域面积明显增大，同时绕组的增加会显著提高 Emax。当匝数较多（n＞5）时，Emax 会进入缓慢增长阶段，呈对数上升趋势。其中以单匝为二次绕组时 Emax 有最小值，Emax=30.8kV/cm，当匝数为7时，Emax 值最大，为 42.7 kV/cm。由于二次绕组匝数增多也能增强 HCT 型取能结构的耦合系数进而增强传能效率，故本文在兼顾高绝缘能力和高耦合系数两个参量基础上选择 3～5 匝为二次绕组优化匝数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR91Ack7q7wN2PKHNqH60QKZOah7CIwWZiaAo2bll5tD1jPNewDRlZzHrg/640?wx_fmt=png&from=appmsg)

2.3 高频磁心结构影响特性分析

高频磁心结构是 HCT 取能装置的主体部分。本节分别对内径、高度和厚度这三个关键磁心参量影响下的耦合电容 Emax 变化特性展开研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR92y4cG73Pvhs7EJjRODfI7o2mVFeCfBcnzzjEylpjUqAJzuiaRvwxPRQ/640?wx_fmt=png&from=appmsg)

图 8～图13 分别显示了在宽参量变化范围内高频铁心内径、高度、厚度与 Emax 的关联关系。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9x1qOEO3mhLpz7eA05qZsibF0rIrAFAVZ1YsgJQdylLhhc7C4sZBicKBQ/640?wx_fmt=png&from=appmsg)

图 9 展示了不同磁心内径下取能结构的电场分布，结果显示，通过增大磁心内径，磁心内部的电场得到了有效改善，磁心内部以蓝色为代表的低电场区域面积明显增大。当内径仅为 10mm 时，二次绕组在 20kV 激励条件下，磁心内径大部分面积的电场强度基本上都超过了空气击穿电压，Emax 最高值达到了 140.6 kV/cm，内径为 70mm 时，内部电场分布取得有效改善。图 9 展示了内径对 Emax 的影响规律，整体规律呈对数关系。10mm 内径下 Emax值最大，为 140.6 kV/cm，当内径增长至 70mm 时，Emax 降低到仅为 18.56 kV/cm，当内径增加到 50mm时，Emax 值可以降到空气击穿场强以下。磁心内径的增加会增大高电位和低电位之间的隔离距离，这是增强 HCT 型取能结构绝缘性能最有效的方式，但是过大的磁心会显著增大隔离取能结构的体积并降低隔离取能结构二次侧的耦合系数，一味选择内径过大的磁心并没有实现绝缘性能的科学指导且会增大电路设计难度。综上所述，结合体积尺寸和绝缘性能，内径为 30～50mm 成为了磁心内径设计范围。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9ibv8S5mUqO7zS9dMyj9xnzmw7tXrXdqIKoIljDwTKOgZcGcjHAEHPqg/640?wx_fmt=png&from=appmsg)

图 10 展示了不同磁心厚度 tc 下取能结构内部电场分布，结果显示，通过减小磁心厚度，磁心内部的电场并没有得到有效改善，高电场区域的面积几乎没变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9toicdbvCmfzMXjZlwFldazDmFYfYKttZiatBJxibicZ3NXoYGYMKibRnldQ/640?wx_fmt=png&from=appmsg)

图 11 展示了磁心厚度 tc 对 Emax 的影响规律，整体规律呈对数关系，随着磁心厚度的增加，Emax 值会增加，但当 tc＞10 mm 时，增加的速率减小；tc=30 mm 时，Emax 取得最大值，为 50.6 kV/cm；tc=5mm 时，Emax 取得最小值，为 40.9 kV/cm。相较于内径增大后，Emax 值取得数量级上的减小，改变磁心厚度，Emax 变化不大，这是因为随着厚度 tc 增加，高低电位的隔离距离并没有增加，相较于厚度参数上的大幅改变，电场分布并没有得到明显改善。综上所述，磁心厚度同磁心结构内部电场分布的关联度不高，虽然增加磁心厚度便于磁设计，但为了实现 HCT 型隔离取能结构小体积和低耦合电容，将厚度为 5～10 mm 视为磁心内径最优设计范围。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR92Ajib1EJiafqoiaozKDhB7P7icDf60CICdtNicwbYwcBfKRib996icskyez9A/640?wx_fmt=png&from=appmsg)

图 12 展示了不同磁心高度下 HCT 型隔离取能结构静电场分布，仿真表明，通过减小磁心高度，磁心内部的电场能得到明显改善，当磁心高度hc=5 mm 时，二次绕组在 20 kV 激励条件下，Emax=34.5 kV/cm；磁心高度 hc=30 mm 时，Emax=54.76 kV/cm，磁心高度增加之后，高电场区域面积显著增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9CbcTic8L12T5wcyt0dRwziaHJictXVvnMfpMy1GIAXib74wE12lj8RyMdw/640?wx_fmt=png&from=appmsg)

图 13 展示了磁心高度 hc 对 Emax 的影响规律，随着磁心高度的增加，Emax 值同样增加，当磁心高度增加到 15 mm 之后，上升斜率略有减小。磁心高度增加，Emax 值也增加的原因是作为高压端的二次绕组同低压端的一次绕组的相对有效面积有所增加，这使得 HCT 型隔离取能结构的内部电场增大，因此为了有效改善 HCT 型隔离取能内部电场分布，可以采用低高度的磁心，但磁心过小，会减小磁心的截面积，过小的磁心截面积会使磁设计严重受限。综上所述，结合电气设计和绝缘性能，5～10mm 被视为了磁心内径设计范围。

2.4 一次绕组结构影响特性分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9NcOWZoVzMvPCnicV2BnIs5At7vlmjh2PKmvB9jo9zSBjg9nl4ic3poMw/640?wx_fmt=png&from=appmsg)

本节针对一次绕组直径与 Emax之间的关系进行了分析。图 14 展示了不同一次绕组直径 dp 下，取能结构内部电场分布。结果显示，通过增大磁心内径，最大电场强度有所消减，一次绕组直径为0.5 mm 时，Emax=92.9 kV/cm。当一次绕组直径为3.5 mm 时，Emax=31.0 kV/cm。但是可以观察到随着一次绕组直径增大，内部电场强度超过 12 kV/cm 的区域面积是有所增大的。图 15 呈现的是一次绕组直径对 Emax 的影响规律。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9fx3qb3wD38RHcreDmictc9CdrNM3s6kdtpLA3d7icQsqlYgteyGiccnhQ/640?wx_fmt=png&from=appmsg)

2.5 HCT 型隔离取能电源绝缘性能优化设计方法

2.1～2.3 节已讨论了 HCT 型隔离取能电源中关键结构参数对内部电场分布以及最大电场强度 Emax的影响规律，在通过有限元仿真确定 HCT 型隔离取能关键设计参数时，需要权衡设计绝缘能力、装置体积等多个因素。

基于此，本节提出了一种基于有限元仿真的HCT 型隔离取能电源绝缘能力优化设计方法，如图16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR92pM9t865SA5hk8icmKJzThic4ddHPV9dgibBZmTIkk5icJjuQzYrXx1WZQ/640?wx_fmt=png&from=appmsg)

该方法通过优化隔离电源结构参数改善内部电场分布，并以体积为限制条件，确保在尽可能小的体积下实现最大的绝缘能力。首先明确设计目标，即在体积不超过 100cm³ 的前提下，将结构内部的最大电场强度 Emax 控制在 30 kV/cm 以下。为此，针对 HCT 型取能结构的二次绕组、磁心和一次绕组三个核心部件分别进行优化。接着通过有限元仿真确定各参数对电场分布的影响，并据此设定优化范围。然后在该范围内进行参数组合并计算每个组合对应的体积。若某一组合的体积小于 100cm³，则将其选为候选方案。对于所选候选方案，通过有限元仿真进一步验证其 Emax 是否小于30kV/cm。若未达到要求，则重新调整参数并优化。通过仿真反复迭代验证，最终在所有候选组合中选择最优解，以确保了在最小体积内实现最佳的绝缘能力。

3\. 实验结果与分析

3.1 高压实验平台搭建

为了验证 HCT 型隔离取能结构参数对绝缘特性的影响规律，本文搭建了高压测试实验平台，实验平台原理如图 17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR991AoBoib1EBIiaEoypsjKzWssIVh5xuMK5ZDO8ZrIYe5iazJZY1L3VuUQ/640?wx_fmt=png&from=appmsg)

本平台采用了脉冲电流法采集局部放电信号，其主要装置包括了输入电压为 220 V 的无局部放电调压控制台，10 kV·A 无局部放电滤波器，10 kV·A/100 kV 的无局部放电实验变压器，100 kV/5 kΩ 的高压保护电阻，100 kV/800 pF 耦合电容以及局部放电监测设备 GDJF−2008 系列。高压实验平台实物如图 18 所示，该实验平台能产生最高 50 kV（RMS值）的工频测试电压，输出容量为 10 kV·A，可实现 10 kHz～1 MHz 的宽带测量，额定电压下系统局部放电量小于 5 pC。该平台能实现局部放电起始电压（Partial Discharge Initial Voltage, PDIV）以及视在电荷量的测量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9H8zOVlDic4QomS0iby6LMjYT9Uonv74e3qCEXn9r4rBm0CL839CY8L3g/640?wx_fmt=png&from=appmsg)

测量研究关键结构参量对 PDIV 以及放电量幅值的影响特性，采用逐步升压法，以 0.5 kV 为步长逐渐提高电压并维持该电压等级 1 min，随后继续升压直至产生 PD 脉冲信号，继续施加电压，记录每增加 0.5 kV 之后每分钟所测的最大视在电荷量，直到所测视在电荷量超过 1000 pC。为确保数据可靠性，在完成单次实验之后重复以上实验完成两个周期的测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR98KVYWd2YQyyTSDJqw41b4f9icMY3Sd5SOHV2e2oEribrODDet3ly0hYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9T8HGam8leQ6KCpshIYGjPZbPgBJS9aI849VWH3dCGXA1gK7VFF5dbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9BamqklfqMHp9MZy8NszHRzzk4h6ibBnpia4pTTkGojjLztTegnp9GZGQ/640?wx_fmt=png&from=appmsg)

以图19 所示待测品在不同电压下的放电幅值为例，本节测试了内径为30 mm，厚度为 5 mm，高度为 10 mm，二次绕组匝数为 5 的 HCT 型隔离取能结构在不同电压下的放电幅值。当施加电压为14.5 kV 时，并没有检测到明显的局部放电现象，当电压施加到 15.5 kV 时，检测到待测品出现了 49 pC的局部放电量，将该电压定义为 PDIV。随着电压加到 16.5 kV 和 17.5 kV，设备分别检测到 269 pC和 463 pC 的局部放电量。通过测量待测品在不同电压等级的放电量，可以得到该待测品的局部放电起始电压和该待测品放电赋值同电压等级的增长关系，后续实验都将基于该操作。

3.2 关键结构参量影响特性实验验证

本节通过高压实验平台测试了关键结构参量对局部放电起始电压的影响规律和各结构参数下电压等级同放电幅值的增长特性，以此来评估各关键结构参量对绝缘性能的影响特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9vXjaZFNJDACBmIeSicoK0EzRK3xfgmpSBoWNqO3cv8EWgR5HZPH7cTg/640?wx_fmt=png&from=appmsg)

图 20 展示了不同磁心内径 dc 的高压测试结果。三个磁心厚度皆为 5mm，高度为 10 mm，磁心内径变化步长选择为 20mm，分别为 30mm、50mm、70 mm。图 20a 为磁心内径 dc 同 PDIV 的关系，实验结果显示，扩大磁心内径以提高二次侧隔离距离确实是最有效的增强隔离取能电源绝缘能力的方式，当 dc=30mm 时，PDIV=15kV，当内径扩大到70mm 之后，PDIV 增加至 22kV，该实验结果同仿真得出的规律始终保持一致。图 20b 为不同磁心内径的 HCT 型隔离取能结构，在不同施加电压下视在电荷放电量的增长关系。dc=50 mm 且施加电压达到16kV 时，隔离取能结构视在电荷局部放电量突破1000 pC，最高局部放电量 4430 pC，而厚度 dc=30mm 时，施加 3 kV 之后，HCT 型隔离取能结构的视在电荷局部放电量仍未超过 1000 pC。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR977yIrK4tBhwakibfiabRY3sDKJ6DZiaGuXGkBmNtSQ1LsiaZvOVNUorJ7A/640?wx_fmt=png&from=appmsg)

图 21 展示了不同磁心高度 hc 的高压测试结果。三个磁心内径皆为 30 mm，厚度为 5 mm，磁心高度变化步长选择为 5 mm，分别为 5 mm、10 mm、15 mm。图 21a 为磁心高度 hc 同 PDIV 的关系，结果显示随着磁心高度增加，局部放电起始电压降低，意味着随着磁心高度的增加，HCT 型取能结构绝缘性能降低。当磁心高度为 5 mm 时，HCT 型隔离取能电源 PDIV 最大为 16.5 kV，当磁心高度为 15 mm时，PDIV 值最小，为 14 kV，该结果同仿真结果一致。图 21b 为不同磁心高度尺寸的 HCT 型隔离取能结构，在不同施加电压下视在电荷放电量的增长关系。从该图能观察到各高度结构尺寸，HCT 型隔离取能结构的 PDIV 和施加电压同局部放电幅值的增长关系，当局部放电量超过 1 000 pC 便停止实验，三次实验结果通过误差棒的方式画出。hc=15 mm 在施加电压达到 17kV 时，隔离取能结构视在电荷局部放电量突破 1000 pC，最高局部放电量为 3825 pC，这意味着高度越高，隔离取能电源越容易击穿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9OUpNeSibQW6iaRuiboiagdlgem4KiaSNibUSJl4FwSNdoic7WibbRxMMG2PkYQ/640?wx_fmt=png&from=appmsg)

图 22 展示了不同磁心厚度 tc 的高压测试结果。三个磁心内径皆为 30 mm，高度为 10 mm，磁心高度变化步长选择为 5 mm，分别为 5 mm、10 mm、15 mm。图 22a 为磁心厚度 tc 同 PDIV 的关系，结果显示随着磁心高度增加，局部放电起始电压变化不明显，意味着随着磁心高度的增加，HCT 型隔离取能结构绝缘性能变化不大，该实验结果同仿真结果一致。磁心厚度 tc 为 5、10 和 15 mm 时，PDIV皆为 15 kV。图 22b 为不同磁心厚度的 HCT 型隔离取能结构，在不同施加电压下视在电荷放电量的增长关系。该图反映了各厚度结构尺寸下，HCT 型隔离取能结构的 PDIV 和施加电压同局部放电幅值的增长关系。hc=15 mm 在施加电压达到 16 kV 时，隔离取能结构视在电荷局部放电量突破 1000 pC，最高局部放电量 4430 pC，而厚度 tc=30 mm 时，施加 3 kV 之后，HCT 型隔离取能结构的视在电荷局部放电量仍未超过 1000 pC。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9wGFkf0efgzqQnB30NN496qiamhuYLYgT2CXmlz4ukcMbVQMR1c3FEUw/640?wx_fmt=png&from=appmsg)

图 23 展示了不同二次绕组匝数 n 的高压测试结果。磁心内径为 30 mm，厚度为 5 mm，高度为10 mm，二次绕组匝数步长为 2，分别为 3、5、7、9、11。图 23a 为二次绕组匝数 n 同 PDIV 的关系，结果显示随着绕组匝数增加，局部放电起始电压降低，实验结果同静电场仿真结论相同。当二次绕组匝数为 3 时，HCT 型隔离取能电源 PDIV 最大，为15.5 kV，当二次绕组匝数为 11 时，PDIV 值最小，仅为 11.5 kV，在匝数范围 3～9 内，PDIV 同匝数呈线性关系，然而当匝数继续增大，增大到 11时，PDIV锐减 2.5 kV。图 23b 为不同二次绕组匝数的 HCT 型隔离取能结构，在不同施加电压下视在电荷放电量的增长关系，从该图能观察到在不同二次绕组匝数下，HCT 型隔离取能结构的 PDIV 和施加电压同局部放电幅值的增长关系。

3.3 耐压实验稳定性验证

此外，本节还对不同结构参数的隔离取能结构开展了 180min 的耐压测试，但因篇幅原因不一一呈现，本节以不同磁心内径为例展示了其测试结果，如图 24 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9rMEpHllmibgyw8NibW3iaYz4Ria9ic77jj4BtxBib9r6ib9xc5ut3SPXGSxtw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgjpPgNd0X4vQPGQIHnbR9610YOCRAw7PEfQYgqU2hia53uZR6mia7yLDViaQnYnOxibtveWOfNyxfXw/640?wx_fmt=png&from=appmsg)

出现局部放电现象前，在每个测量等级下维持1min 的时间，待测品出现局部放电现象之后，在对应的局部放电初始电压下维持一段时间，不同结构尺寸的隔离取能装置均未出现放电量陡增或击穿现象，本实验验证了不同磁心结构长期运行的稳定性。

4\. 结论

本文主要对高压 SiC 器件 HCT 型隔离取能结构的绝缘特性进行了研究，对磁心结构的内径、高度、厚度，一次绕组的绕制方式、线径，二次绕组的绕制方式、匝数共 7 个关键结构因素对电场分布及最大电场强度进行了分析，提出了紧凑型尺寸约束下的电场优化设计方法。此外，通过搭建的高压测试平台阐明了关键结构参量对局部放电起始电压和放电量的关联规律和耐压特性。仿真和实验结果表明：集中绕组对比分散绕制具有更均匀电场，磁心结构的内径和高度，绕组的匝数和直径均会对电场和局部放电产生显著影响，但是磁心结构的厚度对电场强度和局部放电作用较弱。本研究不仅为 HCT 型隔离取能电源的设计与优化提供了理论依据，还通过实验验证了关键结构参数对绝缘性能的具体影响特性。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFict8RFIbSylX4QXBUQufy4EibmdOkdujv9iacPoOg00sic74wNPclNRx5aw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFiciciaYnveWfYicwqTxDn5crENLvbgCckcBDBrjR37AaRicIC8SK5BwPkKAw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=35)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFichAJIerPoEcl7pbIuJe1yQFxpMCdcC7AvVpyPkAHjFzjTiaw6JPdpJUQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=36)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFicr6rAyRqEeP6XiapXmic6BHlFvrxkInQ4fmo9KqURuPVG3FqpibK8xXA3w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=37)