# SiC器件应用篇：用于快速充电站的高频高效模块化固态变压器


> 原文地址: [https://mp.weixin.qq.com/s/KAmsnliQmOTeefsct957aQ](https://mp.weixin.qq.com/s/KAmsnliQmOTeefsct957aQ)

文章来源：电源学报

作者：陆城，胡文斐，张伟强（台达电子企业管理（上海）有限公司，上海 201209）

摘要：随着碳化硅器件的发展，基于固态变压器SST（solid state transformer）的充电站供电架构相比传统基于工频变压器的方案在效率、功率密度及扩展性等方面已展现出优势。 为此，提出一种基于三电平功率单元输入串联输出并联的模块化SST。 其中，隔离DC-DC 级采用串联半桥LLC变换器，分析其软开关实现条件和参数设计表明，与中点箝位型三电平LLC相比更易实现 ZVS，更适合高频高效运行。为实现单元间均压均流，基于后级均压前级均功率的协调控制思想，提出一种基于直流链电压反下垂的分布式控制方法，可同时实现均压、均功率和输出电压二次调节等多个目标。 所提方法在一台电压10 kV、功率360kW的SST样机上得到了实验验证。

关键词：固态变压器；软开关；均压均流；分布式控制；快速充电站

近年来， 随着新能源汽车续航里程的增加及动力电池技术的发展， 大功率快充已成为重要趋势的同时，对充电设施提出了更高要求。 传统采用工频变压器LFT（line-frequency transformer）的供电架构已显现诸多弊端，例如转换环节复杂、效率和功率密度较低、不易扩展等。 而基于固态变压器 SST（solidstate transformer）的分布式模块化供电架构具有灵活的扩展性，可按需扩容，节省投资。 SST 除了取代传统的配电变压器外，还可以提供直流端口，供直流充电桩、 光伏发电和储能设备高效接入。 另外， 高频SST 占地面积小， 在土地资源紧张的大城市里也是一个优势。随着碳化硅 SiC（silicon carbide）器件的发展，高频高效模块化固态变压器已成为研究热点。

文献\[5\]以1MVA、10kV AC/800V DC 系统为例，分别从材料成本、重量、体积和损耗等方面比较评估了 SST 和“LFT+AC/DC”这两种方案，综合来看，基于 SST 的方案潜在优势明显。 然而，目前大部分 SST 采用 PWM 型隔离 DC-DC 拓扑，其软开关范围受限导致开关频率较低， 通常不超过20 kHz，功率密度仍然不够高。 另外， 由于目前主流商用 SiC MOSFET 的耐压水平不高于 1.2 kV，若采用两电平拓扑， 需采用 12 个左右的单元级联才能满足10kV 中压系统的接入。 而单元数目越多，所含的隔离变压器数量也越多， 另外配套的光纤通讯及控制器、结构连接件等都会相应增多，增加了 SST 系统的复杂度和成本， 也不利于系统功率密度的提升。为减少单元数目，本文提出一种基于三电平功率单元输入串联输出并联的模块化 SST。 针对其中关键的高频、高效、高输入电压隔离 DC-DC 级，采用串联半桥（SHB）型 LLC 谐振变换器，工作在 200 kHz谐振频率附近，开关频率约为目前业界的 10 倍。 为实现高频高效， 分析了其 ZVS 软开关条件并给出了解析模型。 基于该模型对比了二极管中点箝位型DNPC（diode neutral-point clamped）三电平LLC的ZVS条件，结果表明SHB LLC更易实现 ZVS。

单元间的均压均流是SST系统级控制的关键目标，关系到安全稳定运行。 由于SST包含前后两级变换电路，控制自由度比较多。 常见的控制策略主要分为两大类：一类是前级 AC-DC 负责均压，后级 DC-DC 负责均流或均功率控制；另一类是后级负责均压，前级负责均功率控制。 由于前级均压控制策略在极轻载时存在一定的局限性，本文基于后级均压前级均功率的协调控制思想，采用一种基于直流链电压反下垂的分布式控制方法，同时实现了均压、 均功率和输出电压二次调节等多个目标。针对三相间的二倍工频环流问题，提出了基于 LLC输出电流谐振控制器的频率补偿方法，可以有效抑制相间的二倍频环流。 最后，搭建了2台电压10kV、功率360kW 的SST系统，采用对拖的方式进行了全电压满功率测试，并在某快速充电站进行了示范应用。

1 基于三电平功率单元的模块化 SST

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3Al1IJb6fpDDPLN7Ta65huoICayqVTXpCCuAktkD7ZrItzVZWAZdF5Q/640?wx_fmt=png&from=appmsg)

本文提出的 SST 架构如图 1 所示，每相由 N 个相同的三电平功率单元（Cell1~N）在交流侧输入串联、直流侧输出并联构成，且三相直流输出也并联，形成一共同的直流母线。 图 1 给出的是三相星接SST 系统示例，其也可以采用三相角接方式。

每个单元由前级三电平 AC-DC 变换器和后级三电平隔离 DC-DC 变换器组成， 前后级通过共同的直流链（DC-link）相连接，并且共中点连接，直流链总电压为 Vdc。其中，前级采用 DNPC 三电平 H 桥电路，输入级联，并通过滤波电感 Lf 接入中压电网。相比常规的两电平 H 桥， 基于三电平 H 桥的单元数目可以减少一半， 有利于降低系统复杂度和成本。 后级采用 SHB LLC 谐振变换器，原边桥臂由 2个半桥串联构成。 虽然谐振电容 Cr 上需要额外承担 Vdc/2 的直流偏置电压，但是该拓扑结构简洁，仅需 4 个开关管，并且所有开关管的电压应力不超过Vdc/2，而基于DNPC桥臂的三电平LLC多了2颗箝位二极管，并且这两种三电平LLC的工作方式及其软开关条件也不相同，根据软开关条件分析和对比可知，SHB LLC比DNPC LLC更易实现软开关，为满足高频高效的SST应用需求，因此后级选取SHB LLC 拓扑。

1.1 两种三电平 LLC 软开关条件比较

2 种三电平 LLC 变换器的拓扑如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3q0CQcwF3CANnera0AML1dOXiaM7XkIF0S86DTht4GJzPTWpdDGJFlhA/640?wx_fmt=png&from=appmsg)

SHB LLC 基本工作波形如图 3 所示。 2 个外管Q1 和 Q4 同开同关，2 个内管 Q2 和 Q3 同开同关，忽略死区时间 Td，占空比均为 50%。 SHB 桥臂输出电压 VAB 呈现两电平波形。 图 3（b）是在正半周期时Q1 和 Q4 关断、Q2 和 Q3 开通的开关过程瞬态波形。以该开关过程为例，分析 SHB LLC 的 ZVS 条件。

在 t1 时刻，Q1 和 Q4 关断， 谐振电流开始对 Q1和 Q4 的寄生电容充电， 同时对 Q2 和 Q3 的寄生电容放电，在 t2 时刻 Q2 和 Q3 的端电压均下降到 0，即VAB\=0，此时换流完成，Q2 和 Q3 可以 ZVS 开通。 t1~t2时段为换流时间，记为 Δtc。 需要注意的是，谐振电流 iLr将在 t3 时刻过零，Q2 和 Q3 不能晚于 t3 时刻开通，否则反向电流将使 Q2 和 Q3 的端电压回升。 t1~t3时段为谐振电流过零时间，记为 Δtz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3hic1xVtjaDvbfuicc2Ka9jrBVw65gkYWubILicC5JEK72320NfTz6ZKcQ/640?wx_fmt=png&from=appmsg)

Q2 和 Q3 既要在换流完成时间 Δtc 之后开通，但又要早于 Δtz 开通，才能实现 ZVS，因此 ZVS 条件可以表示为不等式约束，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3lK1HGzEJcGuvibUFDuyf5eYhJCGEO67jru2DMfKuvzsK8FmVfw9XyaQ/640?wx_fmt=png&from=appmsg)

分别给出 Δtz 和 Δtc 的推导过程。 以 t1 时刻为新的时间起点，则谐振电流时域表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3ibTdK4HxYCgAiaLCXPNpyibzfibMBsic5EUj8rRribiakAHlSar7OEicicbV2kg/640?wx_fmt=png&from=appmsg)

式中：Vo 为输出电压；Ro 为负载电阻；Lm 为励磁电感；fr 和 ωr 分别为谐振频率和角频率；n 为变压器匝比。

经过 Δtz 时间，谐振电流过零，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3rHHNQuE0mUGmQkmBZNjQicib2F57fCOUJsYTLnegcw0tml7y2Dc7qBDw/640?wx_fmt=png&from=appmsg)

整理后可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3NVRWt6ibkDjIWDBxjDOBhb7YOmlqm8nicPPZdnjmfNYnCVqR4wERdnxA/640?wx_fmt=png&from=appmsg)

对谐振电流式（2）进行积分，可得电荷量表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3gldzJMK8LHtWicN245BOIFMSP0iaeYhwqm6srstUiaAqhPAgfu6RG1haQ/640?wx_fmt=png&from=appmsg)

在换流时间\[t1～t2\]内，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3ELKW5yHXhiaQ8m6eVUc26ClWs9R7V8uIZBgPdn3yEY2UW905A7yY0Kg/640?wx_fmt=png&from=appmsg)

利用电荷平衡原则，则电荷为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3b5sk5PPZW3ibsfZg0DSyqiaiaBISS9PiaVucgUiccG97sI2qmtJEodmSShQ/640?wx_fmt=png&from=appmsg)

式中，Ce1 为换流过程中对开关管寄生电容 CjQ 充放电时的等效电容，Ce1\=2CjQ。

将式（6）和式（7）代入式（8），整理得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3DaFlNsd9e3WcSFicmSscFY6rNYEx0RKoUyVWHlFnUA5tnXWcDcGH29g/640?wx_fmt=png&from=appmsg)

由式（3）得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3BxRq19u07CIVDLjgpr2go7vjZ7ROrXJyjk4JicgvvO2Ntj74TIwGQcw/640?wx_fmt=png&from=appmsg)

将式（10）代入式（9），整理得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3MZibz9M0LEjA8HA9EN4AqTwD3MjHK22FXdHyIuTdibjjX403ztJuuUlQ/640?wx_fmt=png&from=appmsg)

DNPC LLC的ZVS条件推导方法类似， 且Δtz与SHB LLC相同， 只不过 DNPC LLC 的换流过程更复杂，Δtc 由三段换流时间构成，详细分析过程见文献\[13\]，本文仅给出 2 种三电平 LLC ZVS 条件仿真对比结果。

考察软开关条件解析表达式可以看出，Δtz 和Δtc 均与励磁电感 Lm 相关， 也就是说 Lm 的大小影响到这两种三电平 LLC 软开关实现， 而 Lm 是 LLC电路最关键的优化设计参数之一，因此需要分析在不同 Lm 取值下的 ZVS 条件。 通过 PSIM 电路仿真验证上述 ZVS 软开关条件解析模型。 仿真电路参数如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3jPcfvFgmkWt3JkjKB7CF8eUPfYBMvD5tPNnY8MdQKicVxWTJCSgrX5g/640?wx_fmt=png&from=appmsg)

仿真结果如图 4 所示。 图中的阴影部分表示两种三电平 LLC 变换器的 ZVS 区域， 在该区域内设计励磁电感和死区时间，即可满足ZVS 条件。 对比可以看出，SHB LLC 的 ZVS 区域范围更宽，相同开关频率条件下，可以设计较大励磁电感或较小励磁电流的中压隔离变压器；或者，给定变压器及其励磁电感参数，SHB LLC 可以设置更小的死区时间即可实现 ZVS，可以减小占空比损失，尤其是对于运行在高达200 kHz 开关频率的SST。总之，SHB LLC比DNPC LLC 更容易实现 ZVS，因此更加适合高频高效运行。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3AgngLGG2APZYZAC5oZ3WHv3XtyviaEbexEvzced0Gn5p5FibBRcvSWkw/640?wx_fmt=png&from=appmsg)

1.2 三电平功率单元的中点电压平衡

考虑器件耐压，为了三电平功率单元的安全运行，有必要进行中点电压平衡控制，即通过控制手段使得正、 负直流母线电容Cp和Cn 的电压平衡，即各为 Vdc/2。 由于单元的前后级共中点连接，中点电压平衡控制既可以由前级负责，也可以由后级负责。 前级针对三电平 H 桥的中点平衡控制方法，本质上都是通过调整零电平的作用时间或占空比，利用网侧电流对电容中点进行充放电，达到平衡中点电压的目的。 因此，其控制效果受网侧电流的影响，当轻载时电流比较小时，调制波可能超出线性调制区，甚至出现过调制。 另外，当空载运行时，电流符号的判断有可能受限于电流检测精度导致误判。 总之，在SST应用中，前级做中点平衡控制具有诸多局限性， 本文采用后级SHB LLC 做中点平衡控制，其基本原理是将上下两个半桥的开关信号进行适当移相， 产生Q1和Q3 导通或者Q2和Q4导通状态，利用谐振腔电流对中点进行充放电，从而控制中点电压平衡。 特别是在轻载下，可以利用burst模式的空闲期短时短路变压器的副边，增大谐振腔电流，大大增强了中点平衡控制能力，实现了全负载范围的中点平衡。 需要说明的是，当进行移相后，Q1和Q4、Q2 和Q3不同开同关，桥臂电压从两电平变成了三电平，只不过由于实际中正常的硬件设计不会造成中点很不平衡， 因此该移相角极小，也就意味着中间电平的占空比非常小，对谐振变换器的电压增益特性影响几乎可以忽略。

2 单元间均压均流控制

现有文献中 SST 采用后级均压控制策略者更多。 例如，文献\[9\]针对谐振变换器拓扑提出了固定电压变比的想法，由于所有单元的输出并联，输出电压相等， 因此通过固定变比控制间接实现了Vdc相等，即实现了单元间均压。 具体的做法是，让开关频率固定在谐振频率fr附 近， 类似直流 变压器（DCX）工作。 前级负责控制输出电压，且前级各单元共用电压调制波，利用输入串联电流相等的电路特点，可以简单地实现均功率。 然而，该方法存在二倍频功率波动的问题， 增加了后级的导通损耗，降低了效率。

2.1 基于直流链电压反下垂的分布式控制方法

针对现有均压均流控制策略的不足，本文提出一种基于后级 SHB LLC 输入电压即直流链电压反下垂的分布式均压控制方法，其控制策略框图如图5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3THE3evJflMvCZia7ibwMKCQKkOzkHmbwMTiaQLTRrhVLgFC0yoxEp4NCQ/640?wx_fmt=png&from=appmsg)

图 5 中，前级采用一个系统集中控制器，负责控制 DC-link 平均电压 Vdc\_avg， 以及网侧电流 ig，且前级每相内各单元共用电压调制波或占空比 dj，利用输入串联电流相等的电路特点，可以简单实现均功率，记每个单元 AC-DC 级的输入功率为 PA2D。 后级各单元采用分布式控制器，负责就地控制直流输出电压 Vo， 各个单元的输出电压参考值 Vo\_ref 根据其输入电压，即 DC-link 电压 Vdc，基于反下垂或者“上翘”规律变化，如图 6 所示。 具体地，第 i 个单元的输出电压参考值 Vo\_refi 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn38HQqbjNFib00icK6dJ8dX7gOtUu6k6XSzSlQAoDNLXHmYfwLwdp2cPibw/640?wx_fmt=png&from=appmsg)

式中：Vset为额定输出电压参考值；Vdci为第i个单元的 DC-link 电压；Vdc\_avg 为所有单元的 DC-link 电压平均值；Kd 为“上翘”斜率系数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3W9NplW2L99ffoyfmeGN8ibmmvERXv4kAlnA17ibveA5b24zNEtDTj80w/640?wx_fmt=png&from=appmsg)

基于反下垂均压控制策略的基本原理是不失一般性，假设第i个单元的DC-link 电压Vdci偏高，则根据图 6 中所示的“上翘”曲线，其输出电压参考值Vo\_refi 将增大，经过电压环路调节后其开关频率将降低， 使得该单元的后级DC-DC变换器输出功率增大，而DC-link电压模型可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3As6k99QYHDKPUfJ2CsZBWw5Dycib49zLlFEGmwQTsorO0o9EicUqq5xQ/640?wx_fmt=png&from=appmsg)

式中：Cdc为DC-link电容；PA2Di为单元AC-DC级的输入功率，且各单元的PA2Di 相等，即PA2Di\=PA2D；PD2Di为单元DC-DC级的输出功率， 这里假设忽略AC-DC级和DC-DC 级的功率损耗。

由于各单元的 PA2Di 相等，根据式（13），易知 DC-link 电压的差模将由 PD2Di 决定，因此，当 PD2Di 增大时Vdci 将降低，实现了均压的效果。 同理，当第 i 个单元的 DC-link 电压 Vdci 偏低时，根据“上翘”曲线，其输出电压参考值 Vo\_refi 将减小，使得该单元的输出功率减小，根据式（13），当 PD2Di 减小时 Vdci 将升高，重新趋于平衡状态。 因此，输出并联的多 SHB LLC 变换器系统采用反下垂控制可以实现输入均压。

当所有单元的DC-link电压平衡时， 即Vdci\=Vdc\_avg（i\=1，2，…，N），代入到式（12）中，可得Vo\_refi\=Vset，表明此时输出电压也调整到其额定参考值，无需对输出电压进行二次调节，即同时实现了输入均压和输出电压二次调节两个控制目标。 且当所有单元的DC-link电压进入平衡稳态时，由式（13）可知，此时 ，PD2Di\=PA2Di\=PA2D，也实现了DC-DC级的均功率或均流。

需要指出的是，式（12）中的协调量Vdc\_avg也可以替换为Vdc\_ref，因为在前级的协调控制下，稳态时Vdc\_avg\=Vdc\_ref。

综上，基于直流链电压反下垂的分布式控制方法，同时实现了均压、均功率和输出电压二次调节等多个控制目标。

2.2 三相间的二倍工频环流抑制

基于级联架构的三相 SST 系统，本质上是由 3个单相系统组合出来的，单元的输入功率PA2D 中存在二倍工频波动成分， 因此 DC-link 电压， 也就是DC-DC 级的输入电压 Vdc 中也存在二倍频波动，而三 相 单 元 的 Vdc 中 的 二 倍 频 波 动 电 压 相 位 互 差120°，当所有的输出并联在一起时，三相 Vdc 间的压差将造成三相单元的输出功率 PD2D 中存在二倍频环流功率。

上述基于直流链电压反下垂的控制策略仅实现了DC-DC级的稳态平均功率均衡， 对二倍频或其他谐波次环流并没有抑制作用。 针对该问题，可以在图 5 所示的控制策略基础上再结合SHB LLC输出电流的谐振控制器，可以针对二倍频或其他特定次的谐波环流进行抑制。 具体的做法是，将SHBLLC 输出电流io反馈到一个谐振控制器，产生开关频率的补偿量 Δfs， 叠加到电压环输出的开关频率中。 控制框图的其他部分同图 5，不再赘述。

3 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3V0GmeZlvJG2BRxYVtzriaI1ia48LQS4A0o9hvicsMH0yhialuNc4Ydmib9g/640?wx_fmt=png&from=appmsg)

为了验证所提控制策略的有效性，搭建了 2 台电压 10 kV、功率 360 kW SST 系统测试平台，如图7 所示， 采用对拖的方式进行了全电压满功率测试。 每台 SST 为“3×8”系统配置，即三相星接系统，每相包含 8 个功率单元。 每台 SST 由 1 个输入柜、2个功率柜和 1 个输出柜组成，其中功率柜里总共包含 24 个功率单元，其内部结构如图 7（b）所示。

SST 功率单元样机及里面的中压高频隔离变压器如图 8 所示， 功率单元的额定功率为15 kW，输出电压为1050 V， 其中，SHB LLC 隔离 DC-DC变换器中的变压器工作在200kHz谐振频率附近。前级 AC/DC 整流器的输入滤波电感为15 mH，由于单元间采用了载波移相调制，开关管的开关频率为 2 kHz，可以节省开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3iaxNE0fpsDFmFibW1FECgcibG7xTIC3nTqxXXFyZvCeozfMnBtbnibUK0Q/640?wx_fmt=png&from=appmsg)

图9为 SST在10 kV 输入电压、满功率 360 kW条件下的实验波形。 可以看到，直流输出电压稳定控制在 1050 V，网侧电流为正弦波，且与电网电压同相位，即单位功率因数运行。 需要说明的是，电网电压 vAB 为线电压，经过电压互感器 150∶1 降压后接入测量示波器，网侧电流 iB 以流出 SST 为正方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3ynLSrRQibkmqvKDqpFwnNz82KicplqLpO4jib4aKy2LNEde2RaS0QicDvw/640?wx_fmt=png&from=appmsg)

图 10 为 24 个功率单元内部的 DC-link 电压录波数据波形。 可以看出，所有单元之间实现了均压，并且所有单元内部的正负半 DC-link 电压 VdcP 和VdcN 都重合在一起， 表明中点电压也都是平衡的，验证了本文所提均压控制方法的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3JL1vaYnOCyCzCGILdDx0cWyO5z30Xa0KtFTtWDUZLSgxJeOCz2WsjQ/640?wx_fmt=png&from=appmsg)

图 11 为 SST 系统效率测试结果。 可以看出，满载效率为 98.0%，半载时达到了峰值效率 98.4%，且在较宽的负载区间内效率超过了 98%，实现了高频高效的目标。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3iaM5tLmoqXk2DvtibzMlUib5IMwNgFm7yibiaKH2A5xrmkicnLuEIdjYPkxw/640?wx_fmt=png&from=appmsg)

最后，该 SST 被运用在美国某超快速电动汽车充电站示范项目中，该示范项目现场如图 12 所示，SST 为“3×9”系统配置，输入交流 13.2kV三相中压、输出直流电压 1050 V，提供给后面的 DC-DC充电机，充电机输出电压范围为 200~1000V，最大电流400A，总功率为400kW，预计充电10 min可以提供约290km 的续航。1050V直流母线将来也可以接入电池储能系统和分布式光伏发电系统，组成一个直流微电网。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3NMaw4IMmWIRQkkbxgiapO2efiaVyZxv5waKRNEThkUILDpneicE2c7pUA/640?wx_fmt=png&from=appmsg)

4 结语

本文提出一种采用 SiC 功率器件和三电平拓扑的高频高效功率单元，并将多个功率单元输入串联输出并联组成一台模块化的 SST，可灵活配置应对不同的输入电压等级。 首先分析并仿真对比了DNPC LLC和SHB LLC 两类三电平拓扑的ZVS条件， 结果表明，SHB LLC具有更宽ZVS范围，更易实现ZVS， 意味着SHB LLC 比 DNPC LLC更适合高频高效运行。 基于后级均压、前级均功率的协调控制思想，提出一种基于直流链电压反下垂的分布式控制方法，同时实现了均压、均流和输出电压二次调节等多个控制目标。 然后， 搭建了基于SiC MOSFET的15kW三电平功率单元，其中，变压器工作在200 kHz 谐振频率附近。 基于该功率单元，搭建了10kV、360kW SST系统样机， 验证了单元间均压均流等控制策略。 最后，以电动汽车快速充电站为例展示了SST高频高效优势，系统效率在较宽的负载区间内均高于98%。 该SST有望在未来的快速充电站中应用，并带来一个全新的高频、高效、全模块化、分布式供电架构。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsleNrHU2sTZvG20pfoR1Gn3OcAoxnqiaI8GltBYzoKUwxGYKDfUZ03ek7FlM3xadYuYyJCaK5WUbLw/640?wx_fmt=png&from=appmsg)

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslp5War1ia2eUhJuH6eiaCvvLajSjKoq5KKOOj5q6lpJr0YHx1NrpMwWMSHJQ9JOBz4v4PFy3GGGnRA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=1umdp7l6&tp=webp#imgIndex=6)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslp5War1ia2eUhJuH6eiaCvvLXg6jMIwNflPNFGSic9L7Cgo2a76d4VgibxRiafh9zicQR00mdugribaLH2w/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=56ak8fax&tp=webp#imgIndex=7)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslp5War1ia2eUhJuH6eiaCvvLPNtsiaz96jdBf5QqvfeTKupmL3fBu8d5j9Om0TWGAPGPDd6cE9QNGkw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&randomid=a0lpe1mu&tp=webp#imgIndex=8)