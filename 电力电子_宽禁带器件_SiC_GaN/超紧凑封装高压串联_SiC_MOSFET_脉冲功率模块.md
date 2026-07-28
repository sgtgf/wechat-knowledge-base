# 超紧凑封装高压串联 SiC MOSFET 脉冲功率模块

原创 姚陈果 ，张鹏浩 SiC碳化硅MOS管及功率模块的应用 2026-02-01 09:25 广东

> 原文地址: [https://mp.weixin.qq.com/s/zeWKvtI2il-8g7dl-naNfA](https://mp.weixin.qq.com/s/zeWKvtI2il-8g7dl-naNfA)

文章来源：高电压技术

作者：姚陈果 1，张鹏浩 1，余 亮 1，付作鸿 1，颜薪瞩 2，雷智程 2，董守龙 1（1. 输变电装备技术全国重点实验室(重庆大学电气工程学院)，重庆 400044；2. 中国工程物理研究院微系统与太赫兹研究中心，成都 610299）

摘 要：传统封装的高寄生电感限制了 SiC MOSFET 串联开关的开启速度。为此设计了一种面向芯片级高压串联SiC MOSFET 模块的 π 形超紧凑封装，可将 16 级/20 kV 的串联开关寄生电感削减至 55.8 nH。首先，研究了超紧凑封装结构参数对回路寄生电感和电场分布的影响。结果表明，板间距的减少能够显著降低寄生电感，然而其缩小受到绝缘可靠性的阻碍。为解决超紧凑封装绝缘问题以实现寄生电感极限削减，分别提出了相应的局放探测和绝缘增强方法。包含一种基于共模电荷测量的局放监测方法，用于脉冲电应力下局部放电起始电压(partial dischargeinception voltage，PDIV)的准确测量。随后，通过六方氮化硼填料改性与复合提高了硅胶灌封料的绝缘，PDIV 测量结果显示其满足了较小板间距封装的绝缘需求，从而实现了寄生电感的极限削减。此外，为了将超紧凑封装串联模块应用于脉冲发生，提出了一种分单元磁隔离-电容自触发混合驱动方案，在保障驱动隔离耐压能力的同时，提升了多级 MOSFET 的开启同步性和速度，实现了16 级 MOS 模块在 26 ns 内的同步开通。相比传统 TO-247 串联，基于超紧凑封装串联开关的脉冲功率模块的开启速度提升显著。同时，模块运行中也展现出了充足的热管理能力。

关键词：SiC MOSFET 串联；功率模块封装；局部放电；隔离驱动；脉冲功率

0\. 引言

相比真空、火花、磁控和爆炸开关，功率半导体开关具有开关速度快、损耗低、易控制、可高频重频运行、功率密度高等优势，非常适合紧凑、高精度、高频和连续工作的脉冲功率系统。提高半导体开关的开启速度一直是脉冲功率领域的重要着力点。例如，开启速度更快的半导体开关可以用于快速建立或熄灭低温等离子体，提高等离子体生成和消散的时间分辨率，有助于在等离子体加工过程中获得更高的均匀性和精确度。在高功率微波装备中，高压高开启速度的半导体开关可显著提升微波的瞬时输出功率。在电磁发射装备中，开启速度决定了发射速度和系统稳定性。在电场诱导肿瘤焦亡中，电压更高、前沿更快的脉冲场能够增强电穿孔的细胞选择性。在变压器脉冲诊断中，高基波频率有助于提升故障识别能力。在飞行质谱仪中，更快的电压爬升速率和电压等级有助于提升分辨率和精度。SiC MOSFET 具有高开关速度、高耐压和宽温度范围等优点，被视作许多脉冲功率装备的未来最优解。但是，受到工艺和成本的限制，SiC MOSFET 单管的电压很难进一步提升。因此，通过 SiC MOSFET 串联组建更高电压等级高速开关的路线逐渐成为热点。在中压逆变器、直流断路器等其他大功率电能处理领域，SiCMOSFET 串联模块已经逐步替代 Si IGBT 模块，以获得高开启速度的优势。

但是，随着 SiC MOSFET 串联模块的器件数量增加，寄生电感也将剧增，已有多种功率模块先进设计被提出，以实现寄生电感削减同时兼容散热路径优化。例如，采用 Clip 替代引线互联，并通过直流端子分离实现功率回路交错，可将寄生电感降低 50%以上，同时还可配合双面冷却设计降低功率模块热阻。SiC 芯片的嵌入式设计可通过通流回路面积的减少实现寄生电感削减，同时也增加了导热面积。采用三导体双陶瓷层基板设计，将高截面积铜夹层同时作为电流回路导线和横向导热介质，也可实现低寄生电感和出色的热管理性能。这些优化设计思路可总结为：

1）增加通流截面积或缩小功率回路面积以减少寄生电感；

2）构筑双面导热结构来优化热管理。

对于多级芯片串联回路，显然Π形紧凑化串联设计可实现的功率面积更小。若把Π形紧凑化回路中左右2组MOSFET上对应位置的寄生电感 Ls,n 视为异名端变压器，回路紧凑度越高，1 对异名端变压器感应电动势的互相抵消程度就越大，则回路等效总寄生电感越小。但是，脉冲功率模块的电压等级必须达到十几千伏，远高于现有先进封装研究的耐压上限，高压绝缘挑战阻碍了回路紧凑化。

因此，本文首先探索了 π 形紧凑封装的结构参数对寄生电感和电场强度的影响规律，分析阻碍寄生电感削减的绝缘瓶颈问题。在此基础上提出了面向紧凑封装的绝缘放电监测和灌封料绝缘优化方法，在不发生绝缘故障的前提下，实现了16级/20 kV高压串联模块寄生电感的极限削减。接着，改进了现有的高压磁隔离驱动拓扑，使超紧凑串联开关模块能够应用于快前沿脉冲发生。此外，还通过实验和散热仿真对模块的热管理能力进行了评估。

1\. π 形超紧凑封装的结构参数对寄生电感和电场强度的影响研究

1.1 π 形超紧凑封装具体结构

现有脉冲功率装备中的高压串联组件主要由TO 等分立封装 SiC MOSFET 组成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYicwkRwN2NXEIH0sibtDWicfeKGYYBIHzduhjTewaLUe5CHcY9vdZGlX2A/640?wx_fmt=png&from=appmsg)

如图 1 所示，分立器件的源漏极带有较高的寄生电感(Ln−1、Ln−2)，进行串联时器件之间的互连线也将不可避免地引入新寄生电感(Lp−n)。在器件串联数量较多时，寄生电感相关的问题变得非常严重。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYSZlY2RBhDtvicaiaOR7N5Xts1LAIlHFqgxicm7VSbpjZGILCCSbAxFgpA/640?wx_fmt=png&from=appmsg)

图 2 给出了不同寄生电感时串联开关的开启电压仿真波形，可以看到寄生电感增加后前沿速度出现明显降低。因此需要对回路进行紧凑优化以削减互联结构寄生电感(Ls,n)。但是，分立封装的紧凑化裕度小，也难以兼容大功率导热装置。目前大批量商售的高压SiC MOSFET芯片最高为1.7 kV，而脉冲功率需要的电压等级一般在20 kV及以上，因此至少需要串联 16 个同型号 1.7 kV 商售 SiC MOSFET(单MOSFET分压为 1.25 kV)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYNeibjm2DLFWG1rKv4cmm3ia9aCsYURJcbQsF8ZfqpPF42ApytGXa1Owg/640?wx_fmt=png&from=appmsg)

图 3为Π形超紧凑设计的 16 级串联模块的具体结构，每个基板上焊接 8 个串联的 MOSFET，两基板平行布置对称并通过大面积覆铜聚酰亚胺柔性板连接。上下 8 个 MOS 将流过方向相反大小相同的电流。回路寄生电感由芯片间距(s)和板间距(d)决定，实现超紧凑封装主要途径即最小化 s 或 d。此外，模块内置均压电阻、栅极电阻、下拉电阻、瞬态电压抑制二极管等元件，这些元件密集布置在 SiC MOSFET周围，以实现均压和驱动保护，确保模块在高电压动作中的稳定性。驱动回路中需要灵活控制的部分电路没有被集成在模块内，以拓展模块的工作场景。超紧凑模块顶部和底部均进行大面积覆铜，可直接焊接散热器。

1.2 结构参数对于 π 形超紧凑封装寄生电感的影响

首先研究结构参数对超紧凑串联回路寄生电感的影响规律。假片模块测试和 Q3D 仿真测试工况设置为 50 MHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYIHwrKpmVuyib3aZSENic1LQ6Hd8nY0TPibLZKV7Vhm7uK8dAVNKBn0lTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uY4zsBE6fNGhib4ySDO3rdicSQ9ywQhxzhmVULIyb4OVWePq4lXbEo8ChA/640?wx_fmt=png&from=appmsg)

如图 4 所示，实测与模拟得到的规律一致。整体来看，与常用的TO-247 封装 SiC MOSFET 串联回路对比(实测：408 nH；Q3D：376 nH)，π形紧凑封装可使寄生电感大幅缩减(不超过 100 nH)。其中芯片间距 s 对紧凑封装总寄生电感的影响较小，从 20 mm 缩减到 10 mm，不同板间距的紧凑封装寄生电感仅仅缩减了约 5.0%。而板间距 d 的影响较大，从 14 mm 到 6 mm，寄生电感的仿真结果变化达 43.41%。因此，为实现寄生电感的较好削减，需要着重减少板间距 d。

1.3 结构参数对于 π 形超紧凑封装电场强度的影响

高电压等级下，也需要分析紧凑化对电场强度的影响规律，为绝缘监测与优化提供支撑。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYpnlZXaQLHW63L85Uz5cgrPX4v7r3MAY8HPXBlNoDcaNjXiaGEXwvuLw/640?wx_fmt=png&from=appmsg)

如图 5，从 MOSFET 串联电路拓扑中可以得知电势差(ΔV)峰值出现在第 1 级和第 16 级 MOS 之间。更细致的电场分布分析需要考虑到 2 组芯片间的错位方式，因此以 1 组对应开关的键合线顶点为错位点，定义了 A、B、C 3 种错位方式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYK6lEETakwFpXYAE6q5xIwWVbOWSQAFfSQa7PWDEn4ibY1FNujQCM49w/640?wx_fmt=png&from=appmsg)

如图 6，3 种错位分别为未错位、错开 1/4 个 MOS 和错开 1/2 个 MOS。

灌封料、基板等绝缘介质皆具有极高的电阻率，这使得电压降落集中在带电导体周围很小的区域内，当 d 较大时，场强分布基本不被 d 缩小所影响。因此我们选用了较小的 8 mm 板间距紧凑结构作为代表，分析了 d 对该紧凑结构电场强度的影响。此外由于芯片间距 s 的增加对寄生电感影响较弱，为提高绝缘可靠性采用了 15 mm 的较大芯片间距。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYksvG5gJxD2YPotGRzZBhXiaJf7jm8pLPF1DeibEvia2qSvHkjwWdHrtew/640?wx_fmt=png&from=appmsg)

图 7 为板间距 8 mm、B 型错位、回路上施加 20 kV电压时的板间电场分布图。截取电压差最大的第 1级和第 16 级区域进行分析，可以发现硅胶灌封料承担了模块的主要绝缘任务。较严重的局部电场畸变出现在键合线顶点附近的灌封料处和三重结附近的灌封料处，电场强度峰值可达 56.58 kV/mm，这远超商售硅胶的绝缘强度上限。随后，对不同板间距d、不同芯片间距 s 和不用错位方式时的模块电场强度峰值进行了计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYdMGKfyCYnENlJ0UVXLM1H5yOO790H5ph335bOlW1fGQOedqa16o47w/640?wx_fmt=png&from=appmsg)

图 8 和图 9 给出了相应电场强度峰值的计算结果，可以看出超紧凑模块的场强峰值随着 d 的减小急剧增加，随着 s 的减小略微增加。此外，B、C 型间的电场强度峰值不存在较大差异，皆远小于 A 型。出于充分利用模块空间的原则，后文皆采用 B 型错位。

综合上述结构参数的影响规律可知，板间距 d的缩减可以大幅减少回路寄生电感，但也会导致灌封料所需耐受的电场强度剧增。因此，迫切需要对灌封料的绝缘强度进行增强，从而实现寄生电感的极限削减。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYDMibntN5eeSeFSHW0CcOU2j0FGr2buibUbauDVoI5ictJayQtXtOq89Xw/640?wx_fmt=png&from=appmsg)

2\. 超紧凑封装模块的局部放电监测与绝缘增强

2.1 基于共模电荷的局部放电监测方法

绝缘优化需要准确的局部放电起始电压(partialdischarge inception voltage，PDIV)测量技术作为支撑。超紧凑封装模块的局部放电监测存在几个问题。

首先，目前功率模块的局部放电测试标准(IEC61287)只基于工频正弦电压，这与脉冲功率系统实际施加的脉冲电应力不一致。而聚合物灌封料的脉冲耐受能力与工频耐受能力完全不同，脉冲下更容易出现局部放电。工程上一般需要为模块保留20%以上的绝缘裕度，因此实现 20 kV 超紧凑封装的寄生电感削减难点在于模块 PDIV 是否能够达到25 kV。于是，我们建构了在高阻抗负载下能够输出25 kV/16 ns 快速上升沿电压的测试电源，进行超紧凑封装假片模块(视为高阻负载)的快前沿局部放电测试。回路中串联 1 MΩ 电阻(Zload)以防止过流。

其次，局部放电通常出现在脉冲上升阶段，快速上升沿的主回路差模电流和伴生位移电流也正好出现在这个时间段，这将造成常用的局部放电检测方法(如高频电流互感、射频电压耦合)难以辨别局放信号。此外，脉冲功率模块常处于复杂电磁污染环境下，这增加了电学测量的难度。研究人员开发了各种基于光学的局部放电监测装置以绕过电磁耦合，包括高性能感光器件与光纤传感，但在空隙更小的超紧凑封装模块中，灌封料的局部放电被基板、元器件等物体遮挡，难以通过光学方法观测。此外，声学和产气测量在微弱放电的感知上存在灵敏度不足的问题。因此，本文提出了一种基于共模局放电荷的绝缘放电探测方法及其传感器设计，以实现不受差模电流及外界电磁干扰的局部放电灵敏探测，从而获得超紧凑模块 PDIV 信息。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYZXqANhNmfPUyuliaKQSnCSZluvy8pGt5MbDgtpc3vj5xOSyQ0h4WdSg/640?wx_fmt=png&from=appmsg)

如图 10(a)所示，从击穿放电的物理理论角度看，击穿会导致体系内的电荷被加速，脱离体系边界，从而进入周围介质或气体区域。具体来说，在局部放电时，带电粒子高速撞击体系内部的原子或分子，进一步释放更多电子或产生正离子，最终形成雪崩现象。如图 10(b)所示，在临近体系边界的电场区，这些电子在高能状态下可能会超越体系的势垒，最终被“打”出体系，形成系统电荷逃逸。此外，击穿将带来大量局部空间电荷区。此时的库仑力将会驱动部分电荷迁移出体系，以缓解体系内高密度的电荷积累。因此，从 20 kV 针板电晕放电的电子数密度仿真结果可以看出，除了纵向电场方向，也存在向垂直方向运动的电子。如图 10(c)所示，以电路的视角对该过程进行分析，当模块发生局部放电，电荷逃逸出体系之外的过程可视为局部放电使系统出现了共模电流(也可视为出现了新的“接地电流”)。而快前沿脉冲的环路电流和位移电流皆为差模，这使得我们只须进行共模-差模分解，即可从物理上将部分高信噪比局部放电电流信号分离出来。

2.2 局部放电共模故障电流互感器

基于上述原理，制作了局部放电共模故障电流互感器，如图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uY9kicxxpSMUWSXsB9jABpiaC9yQUq33O6cypo1Uv1KXGE2uMPblN9X6mQ/640?wx_fmt=png&from=appmsg)

互感器原边为同轴线，功率回路被压缩在同轴线内，这样能够大幅降低外界的交变电磁波带来的电流信号干扰。其中同轴线的纤芯连接高压端，外屏蔽层连接接地端。互感器副边为漆包线，信号采集使用高频无感电阻 RNIR，信号经匹配和放大后经同轴线输出到示波器。通过 3D打印制作互感器外壳，互感器外壳涂敷了电磁屏蔽材料，如图 12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uY0ibuaVQI8wBy0NDRvsp1pgwEdxiaKgY5fyvrBmyViakgB0a9CaFTiaUSDw/640?wx_fmt=png&from=appmsg)

功率模块正常运行时，同轴线内外导体流过差模电流，外空间差模磁场被自然抵消，同轴线外无磁场。但发生局部放电时，由于存在共模电流，同轴线将对外产生磁场。使用高频铁氧体磁芯束缚住同轴线外溢的共模电流磁力线，即可在磁芯副边感应出相应的局部放电共模电流。

基于上述方法，可以测得模块的准确 PDIV。为了增加测量信噪比，对共模局放电流信号进行了积分以获得共模电荷。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uY8FEsiaqptOx5ejiah6hmic4Dj3rLmfAIiaNqN7Pmfl8KbJD1iaV4MrKUOLg/640?wx_fmt=png&from=appmsg)

图 13 给出了使用未改性硅胶时模块在 25 kV/16 ns 快速上升沿电压应力下的测量结果，此时板间距为 8 mm，可以看出共模电荷的测量结果出现了明显的偏置，代表模块出现了局部放电。当板间距扩大到 10 mm，共模电荷测量结果未出现明显偏置，说明系统无明显电荷逃逸，代表模块未出现局部放电。

2.3 干扰与误差分析

脉冲功率模块常处于复杂电磁污染环境下，使用同轴线作为功率主回路能够显著减少电磁干扰(electromagnetic interference，EMI)的耦合面积，从而降低外界电磁波对测量结果的影响。为检验该设计对于外部干扰的屏蔽效果，使用带续流的6 kV/4 kA 晶闸管 RC 放电电路建立了电磁波干扰源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uY5SRaTEdNF1xVNbdnIk4Z9EdGq5ItVicu6ZAIJB7UKq50M1qUl0otRBA/640?wx_fmt=png&from=appmsg)

图 14 显示，使用普通导线作为主回路时，受到的电磁干扰影响较大。其耦合到的 EMI 不仅受主回路 RC 振荡影响，还包含峰值极高的续流二极管反向恢复高频针振荡。在使用同轴线作为主回路后，耦合到的低频 EMI 几乎完全消失，仅感应到较弱的反向恢复振荡干扰。可见该同轴线功率集成设计的屏蔽性能远高于普通回路。

此外，同轴线自身寄生电容的充放电也会引发共模电荷 QCM,inner，这是绝缘放电共模电荷测量的主要误差来源，可用以下计算式评估。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYLOLqhME4yGL5nhYd0uHJ8B5xVARvz2km4aj5J1cfbcPsQZ9LGXDT9Q/640?wx_fmt=png&from=appmsg)

式中：Cp 为同轴线电容；U 为主回路电压；ε 为同轴线绝缘层介电常数；a 和 b 分别为同轴线长度和绝缘层厚度。在 20 kV 下工作时，10 cm 同轴线寄生电容带来的共模电荷为 282.2 nC，远小于上述局部放电共模电荷的测量结果。

2.4 灌封料绝缘增强

功率绝缘提升的方式可分为封装结构优化和封装材料优化，具体方式见表 1 和表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYDpYrcHnf0cnDeCo8hjseiaNuH8mgFh4kBsG1g4XIVaTsvBWRA1vzTKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYFsWh08P2fq3jIY3QbBO2DzcnJcwlpox3enBgKwJv2SPHOvyM9pdlmA/640?wx_fmt=png&from=appmsg)

结构优化方法中，DBC 圆角设计已在前面设计中被采用；DBC 布局优化在串联拓扑中作用有限；焊点和引线拉弧优化受机械稳定性限制。材料优化方法中，梯度介电涂层虽能降低电场应力，但成本高、工艺复杂，且对体积绝缘作用有限；在灌封料中掺杂高介电常数/电导材料虽能改善局部电场，但会增加介质损耗和漏电；高绝缘陶瓷基板则只能实现表面绝缘增强。因此基于效果、工艺和可靠性的综合考虑，灌封料掺杂改性的低介电/低阻填料是较好的选择。但是现有改性方法会导致粘度增加，因此提出了六方氮化硼(hexagonal boron nitride，hBN)接枝苯乙酮电压稳定剂的技术，并将超低含量的改性 hBN 填料和硅胶制成了复合灌封材料，得到了粘度几乎不变的高局放绝缘强度灌封料。具体的填料改性方法和复合灌封料制备方法见图 15。所涉及填料等离子体改性技术在课题组之前的工作中有过报告。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYR8haTovIyGBNsgw78iadX3KNiaibKJibMgWu4wEM1s4jlfgxXOictb8N8Qw/640?wx_fmt=png&from=appmsg)

通过低温等离子体接枝的苯乙酮层可以有效捕获自由高能电子。这是因为苯乙酮结构中的苯环具有较高的电子亲和力，能够减少高能电子对硅胶基体的撞击和破坏。这一过程抑制了高能电子引发的局部放电发展，使材料表现出更高的 PDIV。接着，测试了不同浓度 hBN 改性硅胶灌封的超紧凑封装假片组件的 PDIV(见图 16)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYIw4kSTdptP5tFSHuzvuibCbQ6Ro6POrZxiauMclJfpkzY4nbYqt2QW2A/640?wx_fmt=png&from=appmsg)

结果表明，在填料质量分数约为 1.0%时，快前沿下的 PDIV 达到24.94 kV(d=8 mm)。因此，通过灌封材料的填料复合与改性，给 20 kV 超紧凑封装模块提供了约 20%的绝缘可靠性裕度。

3\. 基于超紧凑封装开关的脉冲功率模块

3.1 超紧凑封装脉冲功率模块的驱动设计

为了将超紧凑封装模块应用于脉冲发生，需要为其设计配套的高速隔离驱动。超紧凑封装 SiCMOSFET 串联模块的配套驱动存在 2 个挑战。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYJOibbSXuBcGEKTU6Aw2KZ421IMJibyaEp5fd1uPxjGaOZWn9qadAlJ2Q/640?wx_fmt=png&from=appmsg)

首先，根据表 3 所示的 SiC MOSFET 关键参数可知，高压SiC MOS 开启所需的栅极电荷较高，瞬时峰值驱动功率需求较大。其次，20 kV 超紧凑模块的隔离驱动绝缘需求极高，远超市售的电容、光耦隔离器件耐压极限。磁隔离的隔离电压虽能满足要求，但驱动电流需求过大时，无法实现纳秒级上升沿。若 16级全部采用自触发驱动，则开启稳定性将因自触发开关数量过多而大幅降低。

因此，本设计提出了一种分单元磁隔离-电容自触发混合驱动方案，用于 SiC MOSFET 多级串联模块的高速隔离驱动。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYibsAC9B0QQTUB9SoVYkcBQp52LpM8hfJuVpYcEYGByFLW3PuCzeEQicg/640?wx_fmt=png&from=appmsg)

如图 17 所示，该驱动系统结合了磁隔离驱动和自触发电容耦合驱动的优点，将 16级 MOSFET 分为 4 个小单元。每个小单元含有 4个串联的 MOSFET(S1—S4 )，单元中最低级MOSFET 通过外部 48 V 半桥磁隔离驱动进行触发，以确保高绝缘隔离和同步驱动稳定性。每单元最低一级 MOSFET 开启后，该组内的后续 MOSFET 将通过电容耦合实现自触发导通，从而最终实现 4 个小单元组成的大拓扑中 16 级 SiC MOSFET 的同时开通。其中，自触发原理已在课题组前期工作中报告。通过调整取能电容(Cs1—Cs4)和栅极电阻(RG1—RG4)以实现各小单元内的稳定触发。此外，每级的栅-源间并联瞬态电压抑制二极管(transient voltage suppressor，TVS)以防止栅极击穿，同时漏源间并联均压电阻(Rs1—Rs4)。

这种改进磁驱动设计具有显著的优越性：

1）仅需为每个小单元的第 1 级 SiC MOSFET提供驱动电流，整体驱动电流需求降低至原来的1/4，降低了对快前沿驱动系统功率的要求。

2）在满足十几千伏高隔离电压要求的同时，电容耦合的自触发机制保证了各级 MOSFET 的快速开启，避免了全磁驱动方案附带的速度瓶颈问题。

见图 18(a)和(b)，测试负载采用自制的高集成40 nH，隔离变压器采用铁氧体磁芯，绕线为绝缘强度高于 20 kV 的聚四氟乙烯镀银导线，原边和副边通过聚酰亚胺胶带加强绝缘，最终的直流隔离电压高于 30 kV。驱动电路的元器件参数选取参照课题组前期工作获得，半桥电容 C1 和 C2 皆为 10 uF，RG1—RG4皆为 20 Ω，取能电容 CS1—CS4分别为 150、100、50、50 pF，均压电阻 RS为 2 MΩ，TVS 击穿电压为 18 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYjfP2H0fzhIsUeI1CZC34XSIpLNdvT77ZKtl1KOS8zib00S0icngAOWwA/640?wx_fmt=png&from=appmsg)

如图 18(c)，驱动采用聚酰亚胺(polyimide，PI)超薄基板，通过多层覆膜进行了取能电容的埋入，PI 绝缘强度远高于陶瓷，能够大幅减少取能电容占用的体积。集成驱动膜被贴于模块背面，通过铜丝与模块内部实现电气连接。

3.2 超紧凑封装脉冲功率模块制备与测试

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYJxSaZcAWYmXicWzNDLt74pqQ39UOPFR3bw8GsTge9LOvAK0cG2ia23zA/640?wx_fmt=png&from=appmsg)

模块制作与组装流程如图 19 所示，对直接铜键合(direct bonding copper，DBC)基板进行清洁和镀金处理，确保表面洁净和良好可焊性。将 SiC die源极和其他外围元器件通过 SAC305 焊接到 DBC上，使用声学显微镜检查焊接质量。接着，使用键合线连接芯片漏极、栅极与 DBC。在两基板之间填充改性硅胶，并在真空环境下脱泡和加热固化，接着进行 24 h 的后固化处理。最后，加装表面覆膜的PI 驱动电路板，并在基板背面覆铜处安装散热器。

为验证驱动同步性，首先测量了自触发技术的小单元内部动态分压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYadJ930CasqCvVacVI3ZYOhbOzFHdHnQxLWhT8n4zHkGRJO5bO2QAkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYoI0ibjn0nI3hfOl1NKBNaE1AZiaJn253ibyynMias0OvzCyJ9NHeqJOfhg/640?wx_fmt=png&from=appmsg)

图 20(a)展示了 1 个小单元中4 级 MOSFET 的电压分布，静态电压分别为 5 200、3 900、2 600 V 和 1 300 V，负载电流峰值为 25.35 A。在首级给予幅值 20 V/上升时间 15 ns 的方波驱动时，每级开关开启时间均为 22.5 ns 左右(10%~90%漏源电压)，表明了各级开关的快速响应能力和良好的同步性。可见该外围器件参数选取的条件下，小单元内部的动静态均压良好，保证了 16 级开关母拓扑稳定运行。接着对 4 个小单元的电压分布进行测量，图 20(b)展示了 4 个小单元串联成大模块后的各级开启电压和负载电流波形。各级电压在 26 ns 内皆迅速下降至 0，同步性和均压表现良好，而电流迅速增至峰值 25 A 并保持稳定。开启波形出现一定振荡，主要原因是各单元的杂散电容不同导致半桥驱动振荡，大多数工作中会给小单元并联电容器以解决该问题，但这会导致整体开启速度变慢，因此在本文中并未进行该处理。

使用相同的驱动拓扑测量了 TO-247 封装 SiCMOSFET 串联组件的开启电压波形。见图 20(c)，相比超紧凑封装模块，TO-247 组件呈现了更慢的开启速度(约 30 ns)。此外，图 20(d)展示了超紧凑封装模块的爆发模式下重频电压波形，频率稳定为1 MHz，峰值电压稳定为 20 kV。

3.3 超紧凑封装脉冲功率模块热管理分析

充足的导热能力是超紧凑脉冲功率模块可靠运行必要保证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYzS4rVyP3pzeVicNI07wf4H4naA97JwK5p1KriavIWEQAXax9LXnNYhsg/640?wx_fmt=png&from=appmsg)

图 21 电流密度分布结果表明，超紧凑模块电流密度最高的位置位于键合线区域，该区域的电阻值极低，因而不会产生显著的额外发热点。因此，模块的发热主要来自于芯片损耗，可通过温度分布仿真进一步验证热管理效果。在此之前，需要获得散热器的温度及芯片的损耗功率信息。使用热成像拍摄了超紧凑模块温度分布，实验条件为重频 1 MHz，以爆发模式每秒运行 500 次，导通时间为 50 ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYRzia2vdPwBZSJwv1TFxou64Qw1AM4o7HlztlPHFo2UlwHIkc3DyAhzA/640?wx_fmt=png&from=appmsg)

由图 22 结果可知，即使只靠空气自然对流散热，基板上最高温度也仅为 58.2 ℃，远小于散热器焊接所用 SAC305 焊料的工作温度(217 ℃)。

芯片的损耗 Ploss计算式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYhWWiaoH5qoJP9zjIKXG96XIHAsRoSFtgAHaS6nxhEehgABUEWFbIjBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uY1n00b1Gs7gicjOrAk2zMQMHJQvqvoHG7H1YicmUadtmVtdWzZ8GiblwEg/640?wx_fmt=png&from=appmsg)

式中：Prise、Pfall和 Pon分别为开启损耗、关断损耗和导通损耗；UDS为阻断电压；ID为导通负载电流；ton 为导通时间；RDS(on)为导通电阻。基于前面的开启波形，单次脉冲开启、关断能量的计算结果分别为 34.62 mJ、103.89 mJ，导通损耗不到 2 μJ。则爆发模式单管平均损耗 Ploss结果为约 69.25 W。

根据热成像结果将散热器外表面温度设为58.2 ℃，图 23 显示的超紧凑结构芯片结温仿真结果为 126.99 ℃，也未超过 SAC305 熔点，且存在较大裕度。接着，按照以下计算式计算模块热阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYPjYkTwibFJQicbV9fjyVcCRkRZa6dT60WtLQjaXUlDPXglKdgNVm5tKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYATcvLE3ibbADWJ3iabIKzgJb19gWdmhQrsxBVQozuZggEB8mliacyaQ6g/640?wx_fmt=png&from=appmsg)

式中：RθJ-C、ΔT 分别为结壳热阻和温度差。热阻计算结果为 0.91 ℃/W。对于如此密集封装的模块，该热阻基本能够有效限制温度上升，确保系统的可靠运行。此外，若将传统铝线替换为铜片或铜带，能够实现更好的均热，提升模块的瞬时功率处理能力。然而，这种设计对工艺要求更高，涉及精密封装与热膨胀兼容性问题，需要在未来工作中进行继续摸索。

4\. 结论

本文提出了一种面向高压串联 Silicon CarbideMOSFET (SiC MOSFET)脉冲功率模块的超紧凑封装方案，旨在解决传统封装中高寄生电感对开启速度的限制。具体结论如下：

1）提出了面向高压串联开关的Π形超紧凑封装结构，仿真和实验表明板间距的减少能够显著降低寄生电感。在板间距为 8 mm 时可实现 55.8 nH的模块极低寄生电感。然而，板间距的减小也将带来电场强度的升高，寄生电感的削减受限于灌封料的绝缘。

2）提出了基于共模电荷的局放监测方法，用于准确测量超紧凑封装模块局部放电起始电压(partial discharge inception voltage，PDIV)。接着通过在灌封材料中掺杂改性后的填料，将板间距为8 mm 的超紧凑封装模块 PDIV 提升至 24.94 kV，使模块能够可靠运行在 20 kV。

3）设计了分单元磁隔离-电容自触发混合驱动方案，实现了超紧凑开关串联模块的快前沿脉冲发生应用。实验结果表明，超紧凑封装模块的脉冲前沿在 26 ns 以内，能够在 1 MHz 的爆发模式下稳定工作。相比传统高寄生电感 TO-247 分立器件串联组成的脉冲源，超紧凑封装脉冲功率模块的前沿速度显著提升。

总之，本文实现了多级串联 MOSFET 高压模块寄生电感的极限削减，为脉冲功率装备提供了高性能主开关解决方案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslgGPYQaL3yrcOmMe8Dr6uYjwbvu8cqc8H7XibicK7vm15mqUnpeEteXuUPX7aMLJG6sXxibMWbE34sQ/640?wx_fmt=png&from=appmsg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslJnzzVWGuAfSiaOQlInBibtNrehneG3bRMIeQUYbasLcYhFUnRV8qrcv6ibGpd0rTBLtP0hlL6F25ibQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJnzzVWGuAfSiaOQlInBibtN0F4VGGRgYjoQCp5zBGqyQxEGHmTX96McE0LVfI4v20UFpR7Vpgw9yQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJnzzVWGuAfSiaOQlInBibtNTia94ibml0fHjQN0DMUI3g6aFNxh02kLOZlkVaJ8Wicwm1aYW8wvQJWrA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslJnzzVWGuAfSiaOQlInBibtN8oSGHaQW40x9xv8l3W5uLUicAudTOcfg3Bg1HdoibZkcGtiaFTiaBTjtCQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)