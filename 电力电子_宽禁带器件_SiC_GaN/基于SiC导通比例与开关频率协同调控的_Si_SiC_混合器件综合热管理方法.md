# 基于SiC导通比例与开关频率协同调控的 Si/SiC 混合器件综合热管理方法


> 原文地址: [https://mp.weixin.qq.com/s/6EYVRKSaRpDu-x6rcTCuzA](https://mp.weixin.qq.com/s/6EYVRKSaRpDu-x6rcTCuzA)

文章来源：中国电机工程学报

作者：韩硕，涂春鸣，龙柳\*，肖凡，肖标，郭祺(国家电能变换与控制工程技术研究中心(湖南大学)，湖南省长沙市 410082)

摘要：SiC MOSFET 和Si IGBT并联构成的Si/SiC混合器件(Si/SiC HyS)有效结合了Si IGBT 的大载流能力、低成本与SiC MOSFET的高频、低开关损耗优势，突破了单一器件的性能桎梏。然而，非平稳工况下Si/SiC HyS 内部结温波动分布不均衡，存在SiC MOSFET 老化过速的问题。目前，针对Si/SiC HyS 的热管理策略研究鲜有报道，而变开关频率作为单一器件中应用最为广泛的结温调节方法，难以调节Si/SiC HyS内部的结温差异，导致Si IGBT 热容量利用率较低。考虑到SiC 导通比例可利用Si IGBT的结温调节空间来降低SiC MOSFET 的热应力，从多层级热管理视角出发， 提出一种基于SiC 导通比例DSiC 与开关频率f 协同调控的Si/SiC HyS综合热管理方法。所提热管理方法根据设定的结温波动阈值，对开关频率和SiC 导通比例的目标参数域进行全面刻画，并实现f-DSiC 参数的最短调节路径规划，最终将SiC MOSFET和Si IGBT 结温波动平滑至同一阈值以内。实验结果表明，相较于变开关频率方法，采用所提综合热管理方法的Si/SiC HyS 最大结温波动降低了24.31%，且任一负载波动下SiC MOSFET 和Si IGBT 的结温波动均被平滑至同一阈值以内，显著提高了Si/SiC HyS 的整体使用寿命。

关键词：Si/SiC 混合器件；热管理方法；开关频率；SiC导通比例；结温波动

0. 引言

相较于传统Si IGBT，基于宽禁带半导体材料的SiC MOSFET 具有开关损耗低、开关速度快以及击穿电压高等优点，在高频、高功率密度变换器应用场合具有广阔的发展前景。然而受生产工艺的限制，目前SiC MOSFET的载流能力和成本与Si  IGBT依然存在较大差距。为解决该问题，有学者提出了由小容量SiC MOSFET 和大容量Si IGBT 并联构成的混合器件结构。混合器件通过SiC  MOSFET 先开通、后关断的门极控制时序，使得Si IGBT可以实现零电压开通和关断，将Si IGBT低成本和 SiC MOSFET高性能的优势相结合，从而实现了成本和性能的均衡。

面对复杂多变的工况，负载的随机波动会导致功率器件产生较大的结温摆幅。由于器件内部材料的膨胀系数存在差异，各层之间将反复承受热应力冲击，导致器件老化进程加速，最终影响变换器运行的可靠性。混合器件中SiC MOSFET 先开后关的开关时序，导致其承担了主要的开关损耗以及延时开关期间的额外导通损耗，这使得小芯片面积、大热阻的SiC MOSFET面临严重的热应力冲击，老化加速问题尤为显著。因此，从提升可靠性的角度出发，针对混合器件进行主动热管理控制至关重要。

主动热管理方法的实质是通过调节与功率器件损耗相关的参量，对结温波动进行抑制，如驱动参数、调制策略、控制策略、功率分配、 母线电压以及开关频率等。文献\[12-15\]分别基于控制栅极电阻、驱动电压和驱动电流的方式动态调节器件的开关轨迹，进而影响开关损耗，实现结温波动的抑制，但是驱动控制需要额外增加硬件成本，并且对响应速度和精度要求较高；文献\[16\]针对级联 H 桥单元寿命损耗不均匀的问题，提出的非连续脉宽调制策略，能够降低老化模块的热应力，实现模块寿命的独立管理；文献\[17\]针对H 桥变流器，设计了功率器件周期性交替使用的脉宽调制(pulse width modulation，PWM)策略，平衡了各IGBT的功耗和温升；文献\[18\]引入了一种基于模型预测的直接功率控制方法，以降低有源整流器老化程度最高支路的热应力，该类方法需要调制策略和拓扑结构的配合，普遍适用性较低；文献\[19-20\]分别利用功率路由和矢量控制技术，动态分配多个变流器之间损耗来改善结温摆幅，此类方法仅适用于并联变流器系统，应用场景有限；文献\[21\]提出一种通过调节直流母线电压使IGBT 损耗最小化的控制方法，有效降低了器件的结温，但是母线电压的 调节也增加了控制系统的复杂性；文献\[22-25\]基于变开关频率的方式在小负载区间升高开关频率，大负载区域降低开关频率来弥补损耗差异，平滑结温波动，变开关频率方法无需额外增加硬件成本，是单一器件常用的结温波动平滑手段，但该方法直接应用于混合器件时存在结温波动平滑能力不足的问题。混合器件运行期间，内部SiC MOSFET的结温摆幅通常高于Si IGBT，导致SiC MOSFET 的老化速度远超Si IGBT，成为制约混合器件寿命的短板。而受混合器件并联结构的限制，变开关频率无法独立调节各个器件的热载荷，导致平滑后SiC  MOSFET 的寿命短板问题依然存在，因此，变开关频率对混合器件的结温波动平滑能力受到较大制约。

在实际研究中发现混合器件内部的损耗分配与开关模式关联密切。文献\[26-27\]通过控制SiC  MOSFET和Si IGBT 共同导通期间SiC MOSFET的导通比例，实现导通损耗的再分配，以达到结温均衡的目的。结果表明，变SiC 导通比例可调节SiC  MOSFET 和Si IGBT 的结温摆幅差值，具有弥补变开关频率方法缺陷的潜力。然而，目前针对混合器件的热管理策略研究鲜有报道，开关频率与SiC 导通比例对混合器件结温的调控规律尚不明确，其结温波动平滑潜能有待进一步发掘。

基于上述分析，本文首先通过构建混合器件热电耦合模型实现结温在线监测，并基于该模型分析总结变SiC导通比例和变开关频率的结温调控规律，指出变SiC 导通比例方法对Si IGBT 的结温摆幅劣化严重，而变开关频率方法无法利用两个器件的结温摆幅差值，导致平滑能力受限；在此基础上，提出基于SiC 导通比例与开关频率协同调控的Si/SiC混合器件综合热管理方法；最后，通过实验验证所提综合热管理方法的有效性。

1\. Si/SiC 混合器件结温计算方法

混合器件热管理的首要关键点在于器件结温信息的实时获取。本节将介绍混合器件的工作原理，并基于其损耗模型和Foster 热网络模型，构建热电耦合模型，实现结温的在线计算。

1.1 Si/SiC 混合器件工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjJDHOGhcJBGGkf2iblmsicTx5ZLcvuVHGHl4pWE1uZYCjNHKlJtTLgeqg/640?wx_fmt=png&from=appmsg)

Si/SiC 混合器件由Si IGBT 和SiC MOSFET 并联构成，其结构如图1 所示。通过控制两个器件的驱动时序，可以实现Si IGBT 的零电压开通和关断， 大幅降低其开关损耗，使混合器件的性能接近SiC  MOSFET。同时由于Si IGBT 的电导调制效应，大部分电流流经Si IGBT，降低了混合器件对SiC  MOSFET 载流能力的需求，与同电流等级的SiC  MOSFET 相比其成本大幅下降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjljYCUrz8IkESagcibQDdH84InvCVU6J9XpTib9QdqF5T8uOfzx9zcpeQ/640?wx_fmt=png&from=appmsg)

混合器件内部SiC MOSFET 和Si IGBT 不同的驱动时序可以组成功能各异的开关模式，如图2所示。

图2(a)所示的开关模式1是混合器件常用的开关模式，VG\_MOS和VG\_IGBT分别为SiC MOSFET 和Si IGBT的驱动信号。通过调节Si IGBT 延迟开通时间Ton\_delay和延迟关断时间Toff\_delay，Si IGBT 可实现零电压开通和关断，达到降低混合器件整体损耗的目的。然而，开关模式1在降低混合器件损耗的同时，也会导致SiC MOSFET承担大部分的开关损耗以及延迟开关期间的额外导通损耗。同时由于小芯片面积的SiC MOSFET具有相对较高的热阻， 使得其结温远超Si IGBT，从而引发过热风险。为解决该问题，有研究提出了如图2(b)所示的开关模式2。该模式以开关模式1为基础，但是在共同导通期间关断SiC MOSFET一段时间。通过控制中断导通时间Tbreak，调节SiC MOSFET 转移给Si IGBT的导通损耗，能有效降低 SiC MOSFET 的过热风险。

1.2 Si/SiC 混合器件热电耦合模型

混合器件受外部封装的阻碍，在运行过程中其结温难以直接测量，需要借助混合器件的损耗模型和热网络模型建立对应的热电耦合模型，进而实现结温的估算。 

1.2.1 损耗模型

开关模式1 为开关模式2 中Tbreak 为0 时的特例，因此本文基于开关模式2 构建混合器件的损耗模型，主要分为开关损耗和导通损耗两部分。

混合器件共同导通期间SiC MOSFET 为零电压开通和关断，产生的开关损耗可以忽略不计。

开关模式2下混合器件的导通损耗分为4 部分：

第1 部分是SiC MOSFET 和Si IGBT 共同导通期间产生的损耗；

第2 部分是开通和关断延时期间SiC MOSFET单独导通产生的额外损耗 ΔPMOS；

第3部分是中断导通期间Si IGBT 单独导通损耗ΔPIGBT；

第4 部分是死区时间Tdead 内SiC MOSFET体二极管产生的损耗 Pdead。 

SiC MOSFET 和Si IGBT 开关损耗和导通损耗的具体计算式见附式(A1)—(A9)。 

1.2.2 热网络模型

混合器件的热流传输特性可用Foster 热网络模型进行描述，具体如图3 所示。混合器件产生的损耗将导致SiC MOSFET和Si IGBT的结温升高，同时热量会从芯片由内到外沿着各层材料传递到散热器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj83wvPA3hM5AsWZlPCzSa2HHezOhTuic2x01spc2AhSwPx4e4OUlNrKg/640?wx_fmt=png&from=appmsg)

图3 中：Ploss\_MOS 和Ploss\_IGBT 分别为SiC  MOSFET 和Si IGBT 的损耗功率；Zth\_(j-c)\_MOS 和Zth\_(j-c)\_IGBT分别为SiC MOSFET 和Si IGBT 的结壳 热阻抗；Zth\_(c-a)为散热器的热阻抗；Ta为环境温度。

根据变流器的工况条件，利用损耗模型计算出混合器件的损耗功率，再结合热网络模型即可估算出混合器件内部SiC MOSFET 和Si IGBT 的结温，计算式见附式(A10)、(A11)。

由上文分析可知，混合器件的结温与其热阻抗和损耗密切相关。DSiC 和f 分别影响混合器件的导通损耗和开关损耗，且两个参量的调节仅需改变控制算法即可实现，无需增加新的硬件成本，因此非常适合作为热管理方法的调控参量。

2\. SiC 导通比例和开关频率对Si/SiC 混合器件结温的调控规律分析

本节将基于热电耦合模型分析SiC 导通比例、开关频率以及两种调控参数相结合对混合器件结温的调控规律，并通过仿真对比各调控参数的结温波动平滑能力。

2.1 SiC导通比例对Si/SiC混合器件的结温调控规律

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj4eGXt8T1TN1dsMAeSpklnQzOZn9sibYK05yvnzJu4TtIWQHEJoWGDQg/640?wx_fmt=png&from=appmsg)

基于单相逆变器仿真模型，结合1.2 节的结温计算方法，仿真得到开关模式1 下混合器件内部结温Tj随负载电流Id 的变化情况，如图4 所示。高热阻的SiC MOSFET 由于承担了主要的开关损耗以及额外导通损耗，因此，在相同负载电流下其结温均高于Si IGBT，且在负载电流波动时，SiC  MOSFET 产生的结温摆幅也远超Si IGBT。针对此特点，混合器件可采用开关模式2，通过调节SiC导通比例 DSiC 来转移导通损耗，从而降低SiC  MOSFET 的结温摆幅。

基于开关模式2 对应的热电耦合模型，获取“MOSFET 与IGBT 结温”、“负载电流”与“SiC导通比例”的三维关系图，如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjvjbHQicPsRQibm5EbMYtUudTxLUGQhjSNW5lWaickKRws7ZF10hZibpxyg/640?wx_fmt=png&from=appmsg)

由图可知，随着DSiC的减小，SiC MOSFET 的结温呈下降趋势，而Si IGBT 呈上升趋势。基于此，在负载电流增加时，可以通过降低DSiC，将部分导通损耗转移给Si  IGBT，从而降低SiC MOSFET 的结温摆幅。但是此时Si IGBT由于承担了转移的导通损耗，其结温摆幅将有所增加。该方法以增加Si IGBT结温摆幅为代价，实现SiC MOSFET 的结温波动平滑。

 2.2 开关频率对Si/SiC混合器件的结温调控规律

混合器件内部SiC MOSFET和Si IGBT的开关频率f 为同一大小，均由脉宽调制频率决定。由式(1)和(2)可知，SiC MOSFET和Si IGBT 的开关损耗均与f 呈正相关，因此可以通过改变f，弥补负载切换引起的损耗变化，从而平滑器件结温波动。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjma3ytbNRjR1U4Bfoq7cFI9MyLTlgn3FTTNABIt1BEfhbQEne8W2eXg/640?wx_fmt=png&from=appmsg)

将DSiC设定为1，逐步调节f 进行仿真，绘制出如图6 所示的Id\-f-Tj 三者的关系曲面。由图可知，随着Id 以及f的增大，混合器件内部SiC  MOSFET 和Si IGBT 的结温均呈现上升趋势。根据此规律，可以在负载增加时减小f，以抵消负载上升引起的温升效应，从而降低SiC MOSFET 和Si  IGBT 的结温波动。但是结温波动平滑后SiC  MOSFET 的结温摆幅依然大于Si IGBT，两者之间的结温摆幅差值部分无法被有效利用，导致Si  IGBT的热容量被浪费。

功率器件的最大开关频率fmax 受到自身开关速度以及最大耗散功率的限制，而最小开关频率fmin受输出电压谐波畸变率限制，具体约束条件如式(1)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjeYfW9y2IwoEGOFiamvcMguoFkVQoWFmaOictdo0AVsNyzYBZd8syv6TQ/640?wx_fmt=png&from=appmsg)

式中：ton、toff为器件的开通和关断时间；Tj为器件的结温；THD 为输出电压谐波畸变率。

综上所述，上述两种方法在单独使用时均存在结温波动平滑能力不足的问题。变SiC 导通比例方法对Si IGBT 的结温摆幅劣化严重；而变开关频率方法无法利用两个器件的结温摆幅差值，导致平滑能力受限。

2.3 开关频率+SiC导通比例对Si/SiC混合器件的结温调控规律

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjcLHtnJ0GPhu4e3R0zCEiaN9Wzhia8BZ8nsRUfQZHRdPBQLGQKZrDxjEQ/640?wx_fmt=png&from=appmsg)

为突破单一调控参数结温波动平滑能力不足的问题，本节将开展变开关频率和变SiC 导通比例方法相结合的结温调控规律研究。保持相同负载电流，分别控制DSiC从0~1，f 从10~30kHz 进行仿真，对应的结温仿真结果如图7 所示。

由DSiC\-f-Tj 三者的关系曲面可知，当负载增大时，通过降低f 可以抑制SiC MOSFET 和Si IGBT的结温涨幅。此时，同步降低 DSiC即可进一步降低SiC MOSFET的结温，将两个器件的结温摆幅差值转化为结温波动平滑能力，有效弥补变开关频率的缺陷。3 种结温波动平滑方法的仿真数据对比如表1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjPC0JnmiaiaMWzAmCHicRCrYPkxmBFyp3Qh6jFdgaa8yoyLFO14DNojoibg/640?wx_fmt=png&from=appmsg)

由表1 可知，热管理前SiC MOSFET的结温波动超过56℃，而Si IGBT 仅为33.61℃。若采用变SiC导通比例方法将SiC MOSFET 的结温波动控制到40℃，此时f 保持不变，DSiC减小到0.18。而Si  IGBT 由于承担了过多导通损耗，其结温波动反超SiC MOSFET增大到54.6℃，不利于混合器件整体寿命的延长。

若采用变开关频率方法同样将SiC MOSFET的结温波动降到 40℃，此时DSiC保持不变，f 需降低到7.5kHz，Si IGBT 的结温波动降低到30℃。

一方面，平滑后两个器件间依然存在10℃的结温摆幅差值未被有效利用。另一方面，变流器以7.5kHz 较低的开关频率运行，面临电能质量指标越限的风险。

当变开关频率和变SiC 导通比例方法相结合时，SiC MOSFET 和Si IGBT 的结温波动均被控制在40℃左右，此时开关频率调节到11.46kHz，SiC导通比例减小到 0.63。该方法下开关频率的调节幅度相较于变开关频率有明显减小，即在相同开关频率调节范围内，两种调控参数相结合的结温波动平滑能力更强。

3. 基于SiC 导通比例与开关频率协同调控的Si/SiC 混合器件综合热管理方法

基于DSiC和f 对混合器件结温的调控规律，本文进一步提出了一种适用于混合器件的综合热管理方法。通过SiC 导通比例与开关频率的协同调控，能够将混合器件的结温波动控制在设定的阈值以内，实现整体寿命的有效延长。

3.1 混合器件结温波动阈值设定

文献\[28\]开展了不同强度热载荷下功率器件的寿命模型研究，结果表明，功率器件的寿命损伤主要是由超过40℃的大载荷波动造成的。因此，若能将结温波动平滑至40℃以内，即可有效延长功率器件寿命。其次，仅平滑超过40℃的结温波动可以减少开关频率的调节次数，从而降低热管理对变流器输出电能质量的影响。因此，本文设定40℃的结温波动阈值 ΔTj\_th 为结温波动平滑目标，旨在筛选出超过阈值的结温波动，并将其平滑至目标阈值以内。

3.2 (f,DSiC)目标参数域刻画

当负载电流由Id(k)切换到Id(k+1)时，为获取将结温波动平滑至阈值 ΔTj\_th 以内所需的(f,DSiC)参数，进行Id(k+1)下的(f,DSiC)目标参数域刻画。首先，在 进行热管理前预先根据式(A3)和式(1)确定DSiC和f的调节范围；然后，利用混合器件的热电耦合模型依据设定步长计算出不同 f、DSiC 和Id 对应的器件 结温Tj，以f、DSiC 和Id 为索引构建结温的三维查找表Tj(Id,DSiC,f)。将Id、DSiC 和Tj 分别作为x、y和z 轴，可绘制出不同开关频率下的结温曲面，如 图8 所示。在变流器运行时，即可根据当前负载电流有效值Id(k)、DSiC和f，利用查找表和三维插值函数获取对应的结温值Tj\_MOS(k)和Tj\_IGBT(k)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjOCW6xOoy79IYfHUA8kULkFhldJTwD6a9qrPFGD1pDL18YAvNlSUpKA/640?wx_fmt=png&from=appmsg)

当负载电流由Id(k)切换到Id(k+1)后，通过三维插值函数可以从三维数据库中提取出Id(k+1)下对应的混合器件结温二维查找表Tj(f,DSiC)，即图8 中x\= Id(k+1)平面与各开关频率下结温变化曲面的交线。将该交线投影到yOz 平面生成如图9 所示的Id(k+1)下Tj与f 和DSiC的关系图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjuGOHONzCvjNe6m73tqcbbEhuPXUfg6EJyJNcx6sZPbicr7oxYpb0RfA/640?wx_fmt=png&from=appmsg)

此时，根据负载电流的波动趋势以及波动前器件的结温Tj\_MOS(k)和Tj\_IGBT(k)和结温波动阈值 ΔTj\_th， 可推导出将混合器件结温波动平滑至阈值域内所需的约束条件，见附录B。

图9 所示的结温边界值Tj\_MOS\_th 和Tj\_IGBT\_th对应的虚线与不同开关频率下结温变化曲线的交点， 即为满足约束边界，使得结温波动刚好等于阈值的(f,DSiC)参数。分别将f 和DSiC作为横纵坐标，可以刻画出(f,DSiC)目标参数边界线。此外，边界线内的(f,DSiC)参数对应的混合器件结温波动小于阈值。根 据负载波动的方向，当Id(k)<Id(k+1)时，虚线下方的(f,DSiC)参数处于边界线以内；而当Id(k)\>Id(k+1)时，虚线上方的(f,DSiC)参数则处于边界线以内。上述所有(f,DSiC)参数的集合共同构成了能够实现结温波动平滑目标的(f,DSiC)目标参数域。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjKUMGEMmZYdUEpYiaWnM55jw980AlvM98ZicicSfSasgib2FibU7v1cjtfIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjCN0jnauhAC4nTKzzDOWibwe7htJRVSliaeJwVBVb2a4bpA9mrrVXfibCw/640?wx_fmt=png&from=appmsg)

图10—14 为负载电流增大，结温向上波动时刻画出的(f,DSiC)目标参数域，结温向下波动时对称分析即可。图中蓝色边界线上方为使SiC MOSFET结温波动小于阈值的 MOS 参数域；橙色边界线下方为使Si IGBT 结温波动小于阈值的IGBT 参数域。 两片参数域的交集即为使两个器件结温波动同时满足阈值要求的目标参数域。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjibD22K8ibEh49T63SfZ0F9AHV5cNlnE7SdgIG0ZkD6KA7XdcDqAltgJA/640?wx_fmt=png&from=appmsg)

3.3 (f,DSiC)参数调节路径规划

为实现将混合器件结温波动平滑至阈值以内的目标，下文将基于(f,DSiC)目标参数域，进行参数调节路径的规划，将负载电流Id(k+1)下的(f,DSiC)参数移动至目标参数域之内。路径规划需要遵循两个原则：1）目标开关频率与额定开关频率fn 差值最小原则；2）参数调节路径最短原则。其中，为保证变流器长期运行的可靠性，第1 条原则的优先级最高，第2 条原则的优先度次之。下文以负载增大工况为例，分目标参数域存在与不存在两类情况分析(f,DSiC)参数调节路径的规划思路，负载减小时分析思路一致。 

3.3.1 存在目标参数域 

1）无需进行参数调控。如图10 所示，负载波动前初始参数(f,DSiC)已经在目标参数域内，表明负载切换造成的SiC MOSFET 和Si IGBT 结温波动均低于阈值 ΔTj\_th，因此无需进行平滑控制。 

2）仅需调控开关频率。如图11 所示，负载波动前的初始参数(f,DSiC)在目标参数域之外，保持DSiC不变，仅调控f 即可在满足偏离fn 最小的原则下进入目标参数域，实现混合器件的结温波动平滑。调节后的参数坐标即为目标参数，具体调节路径如红色箭头所示。 

3）仅需调控SiC 导通比例。如图12 所示，负载波动前的(f,DSiC)在目标参数域之外，且波动前f等于 fn，保持f 不变，此时优先调控DSiC使得参数达到目标参数域边界，满足调节路径最短原则。 

4）同步调控开关频率与SiC 导通比例。若仅调节f 或者DSiC无法在满足原则的前提下实现结温波动平滑，则需要对f 和DSiC 进行协同调控。在f偏离 fn 最小的前提下，调节DSiC使得(f,DSiC)达到目标参数域的边界，具体路径如图13 所示。 

3.3.2 不存在目标参数域

不存在目标参数域，即SiC MOSFET 和Si  IGBT 的边界线没有交点。如图14 所示，此时MOS区域和IGBT 区域没有重合部分，即在设定的SiC导通比例和开关频率调节范围内无法同时达成两个器件的结温波动平滑目标。由于SiC MOSFET 芯片面积和材料特性的差异，其热可靠性要远弱于Si  IGBT，因此该情况下优先满足SiC MOSFET 的结温波动阈值要求，将f 降至最低，再调节DSiC 至MOS参数域边界，调节路径如图14 中箭头所示。

3.4 综合热管理方案

基于SiC 导通比例与开关频率协同调控的结温波动平滑方法，本文设计了综合热管理方案，具体控制框图如图15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjDjmOof8efYPlSZqHicP0BBso02zbgTicM3pfHnvdhK5HjiaVibCtGgZzHw/640?wx_fmt=png&from=appmsg)

变流器系统通过实时监测负载电流有效值Id、开关频率f 和SiC导通比例DSiC，并利用结温查找表完成结温的在线计算。当负载电流由Id(k)切换到Id(k+1)时，利用Id(k)对应的混合器件结温Tj\_MOS、Tj\_IGBT和设定的结温波动阈值 ΔTj\_th，计算出结温边界值Tj\_MOS\_th 和Tj\_IGBT\_th，构成热管理约束条件。 然后，结合Id(k+1)下两个器件二维结温查找表Tj\_MOS(f,DSiC)和Tj\_IGBT(f,DSiC)，刻画出平滑该次结温波动对应的负载电流Id(k+1)下的(f，DSiC)目标参数域。最后，按照参数调节原则及目标参数域的存在与否，规划出合理的参数调节路径。将计算出的目标参数DSiC(k+1)和f(k+1)输出至PWM 驱动模块，用于驱动负载电流Id(k+1)下的混合器件，即完成了该次结温波动平滑动作。当下一次负载波动到来时，按照上述流程启动热管理程序即可。

4. 实验对比和验证

为验证所提综合热管理方法的有效性，本文搭建了如附图C1 所示的混合器件单相逆变器实验平台。其中混合器件由1200V/25A的Si IGBT  (IGW25N120H3)与1200V/12.5A 的SiC MOSFET  (C2M0160120D)并联组成，具体的实验平台参数如附表C1 所示。

4.1 不同热管理方法的结温波动平滑效果对比

4.1.1 未采用热管理方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjx2WmQA8P5adHJRj9iczb65HzV6jPQHZDyO8Wa5HBjMgVB12WSkDyW0A/640?wx_fmt=png&from=appmsg)

为模拟负载波动的运行工况，逆变器按照图16(a)所示的输出功率剖面运行，功率切换顺序如下 ：1kW →6kW →0.4kW →4.8kW →1kW →3.7kW。不采用混合器件热管理方法，保持开关频率为20kHz，SiC 导通比例为1进行实验，对应的混合器件结温实验结果如图16(b)、(c)所示。

由图16(b)的SiC MOSFET和Si IGBT 结温变化曲线可知，SiC MOSFET的结温以及结温波动幅值均高于Si IGBT。图16(c)给出了具体的结温摆幅，在负载功率进行1kW→6kW→0.4kW→4.8kW→1kW 切换时，SiC MOSFET结温波动均超过40℃阈值，分别为73.58、81.18、57.39 和49.28℃。反观Si IGBT全程的结温波动均未超出40℃，且远低 于SiC MOSFET。 

4.1.2 变开关频率热管理方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjkA9Co6uMERH600BwdAPtDwcEQgrCWOeSwKdm1gStc95sbMuDEeCUSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjXDqUuIHVib9micKPO8HhCjV0fxpMM9FOqYZTlkQSCIcLbys6pAKVJSZA/640?wx_fmt=png&from=appmsg)

变开关频率热管理方法基于线性分配规则，开关频率随负载大小线性变化，在最低负载时选用最大开关频率，最高负载时选用最小开关频率。在同样的负载波动工况下，混合器件的结温变化情况如图17 所示。

图17(a)为采用变开关频率热管理方法后，混合器件开关频率的变化曲线，图17(b)为对应的SiC  MOSFET 和Si IGBT 结温变化曲线。通过在小负载时增加开关频率，抬升混合器件结温；在大负载时减小开关频率，降低混合器件结温，实现结温波动的平滑。图17(c)为变开关频率热管理后的结温摆幅，与热管理前对比SiC MOSFET和Si IGBT的结温波动均有所下降，其中SiC MOSFET 的最大结温波动由81.18℃降低至52.91℃。但在负载功率进行1kW→6kW→0.4kW→4.8kW 切换时，SiC MOSFET结温波动依然超过40℃阈值，分别为46.08、52.91 和42.82℃。 

4.1.3 基于SiC 导通比例与开关频率协同调控的混合器件综合热管理方法

采用本文所提的综合热管理方法，在相同负载波动工况下的实验结果如图18所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjXwhKGW8SNDiasR4vZicFNLtxN3SUzAv7UXSYwWwfzXiaYmdCb8Jl3cayw/640?wx_fmt=png&from=appmsg)

  

从图18(a)、(b)所示的结温曲线和结温摆幅数据可知，本文所提综合热管理方法能有效将负载波动下SiC MOSFET 和Si IGBT 的结温波动抑制到40℃阈值以内。此外，该方法仅在结温波动超出阈值时触发，削减了参数的调节频率，可最小化热管理对输出电能质量的影响。

附图C2 为综合热管理方法下f 和DSiC的调节曲线，以及各阶段对应的驱动波形。当负载从1kW升高到 6kW 时，f 主动降低到10kHz，同时DSiC降低到 0.53，此时SiC MOSFET 的结温波动降低到阈值内，Si IGBT 的结温波动有所上升，但同样没有超过阈值。当负载从6kW 降到0.4kW时，f 升高到30kHz，并将DSiC恢复至1。负载从0.4kW 升至4.8kW 再降至1kW 阶段，f 恢复至额定值20kHz，仅调节DSiC到0.67 再至1，即可满足阈值要求。最后负载从1kW 切换到3kW，由于结温波动小于阈值，因此保持参数不变。 

4.1.4 热管理效果对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjCTetliaUQ11IPUjNQ8BQsuf70pqEM5UTqSP1lzYgZhc3sByggJIWl0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj30gpAyKib0BvKGJO1xSeoNtAEaFc8yJhfXV9fu1lE3ROITtnUiaWmEVQ/640?wx_fmt=png&from=appmsg)

图19 为采用不同热管理方法后的混合器件结温摆幅对比。由图可知，单一变开关频率方法能降低混合器件的结温波动，但SiC MOSFET 结温波动平滑能力受限，依然有部分工况下结温波动超过40℃，其中SiC MOSFET 的最大结温波动为52.91℃。而本文所提综合热管理方法可以将两个器件间结温摆幅的差值转化为对混合器件结温波动的平滑能力，有效将SiC MOSFET的结温摆幅平滑 到40℃阈值以内。所提综合热管理方法下混合器件的最大结温波动相较于变开关频率方法降低了24.31%，此时虽然Si IGBT 的结温摆幅有所增大，但依然低于阈值。由于后两组工况下混合器件的结温摆幅小于阈值，因此所提热管理方法不主动进行平滑动作，导致传统变频策略的结温波动幅值更小。但低于阈值的结温波动对混合器件的寿命损伤较为微弱，因此所提方法的优势在于有效延长混合器件寿命的同时，可避免参数的频繁调节，进而提高变流器运行的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjzFLVnehlDlh4ubwv3DLvR2Yd8kFDDGxqNibVRH1dw8rK8icstXcSaMaA/640?wx_fmt=png&from=appmsg)

由图20 所示的开关频率对比图可知，变开关频率热管理方法下的f 随负载切换不断调节，几乎无法保持在额定开关频率运行。而所提综合热管理方法并不完全依赖f 的调节，通过DSiC的辅助作用，能尽量避免f 的频繁变动。同时低于阈值的结温波动不会触发平滑动作，因此综合热管理方法的开关频率调节次数少于变开关频率方法，对变流器滤波器以及输出电能质量的影响更小。

4.2 变 DSiC对THD 的影响

在SiC MOSFET 中断导通期间，Si IGBT 保持导通状态，因此调节DSiC对变流器输出电能质量的影响较小。本节将在相同负载功率下，对比不同SiC导通比例下输出电流 THD 值，以验证上述结论。

附图C3 为3kW 输出功率，20kHz 开关频率下，不同SiC 导通比例对应的驱动波形以及电流THD值。相比于DSiC 等于1，DSiC 等于0.5 和0.2时输出电流的 THD 值没有增大趋势，始终满足国标规定的THD≤5%要求。因此，通过调节DSiC 进行热管理不会影响变流器的正常运行。

5. 结论

本文基于构建的混合器件热电耦合模型，分析了SiC 导通比例和开关频率对结温的调控规律，并针对变开关频率存在的局限性和混合器件结温波动特点，提出了一种基于SiC 导通比例与开关频率协同调控的Si/SiC 混合器件热管理方法。最后，通过实验验证了所提方法的有效性和优越性，并得出以下结论： 

1）混合器件内部存在较为严重的结温不平衡现象，非平稳工况下SiC MOSFET 的结温摆幅远高于Si IGBT，加速了混合器件的老化进程。通过调 节SiC 导通比例可以实现混合器件导通损耗的再分配，改善SiC MOSFET 的热应力； 

2）开关频率通过调节混合器件的开关损耗来平滑结温波动，但存在热管理效果受限、开关频率变动频繁的问题。引入变SiC 导通比例方法可以将两个器件的结温摆幅差值转化为结温波动平滑能力，进一步扩大混合器件的热管理范围。 

3）本文所提基于SiC 导通比例与开关频率协同调控的Si/SiC 混合器件综合热管理方法，能够将SiC MOSFET与Si IGBT的结温波动均控制在40℃阈值之内。相比于变开关频率方法，所提综合热管理方法下混合器件的最大结温波动降低了24.31%， 具有更强的结温波动平滑能力。同时该方法仅平滑超过阈值的结温波动，降低了开关频率的调整次数，最大化变流器处于额定开关频率的运行时间。

附录 A 混合器件损耗计算公式

1）混合器件开关损耗计算式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj2WoKhNwrWZq8nHQzoe3W3YsVYAe4cjFzhkNtC7k1ThnqnAZNvvaZEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmj6kozmQcWGjXJGCGjIX27RLo3IbpTjgZYmpGJDRzW2bAfLvEiaoBJtzg/640?wx_fmt=png&from=appmsg)

式中：f 为脉宽调制频率，即SiC MOSFET 和Si IGBT 的开关频率，二者保持一致；Pswitch\_MOS 和Pswitch\_IGBT分别为SiC  MOSFET 和Si IGBT 的开关损耗；Eon\_MOS 和Eon\_IGBT分别为SiC MOSFET和Si IGBT 的单次开通能量；Eoff\_MOS 和Eoff\_IGBT分别为SiC MOSFET 和Si IGBT 的单次关断能量。 

2）混合器件导通损耗计算式。

开关模式2 下混合器件的导通损耗受Tbreak 影响，Tbreak的调节范围如式(A3)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjIwb3yOiaJPIibmOiacktGwxy3UeAZttQhE8T0CBtqDhO7pgcOYk33jZtA/640?wx_fmt=png&from=appmsg)

式中：Tcond为SiC MOSFET 和Si IGBT 的共同导通时间；

DSiC 为SiC 导通比例，代表SiC MOSFET 导通时间与Tcond的比值，其调节范围为 0~1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjnfJ1N88UDHibqbn09niagBcFxYPeHcviaTYMWbDSvvaCJPUVicibPMnsxLg/640?wx_fmt=png&from=appmsg)

式中：Pcond\_MOS和Pcond\_IGBT分别为SiC MOSFET 和Si IGBT的导通损耗；Von 为共同导通期间的导通压降；Id 为负载电流；IMOS 和IIGBT为两个器件的分流大小；D 为占空比；Vds为 SiC MOSFET 单独导通时的压降；Vce为Si IGBT单独导通时产生的压降；VBD为SiC MOSFET体二极管压降。 

3）器件结温的计算式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjasOxnWBoG4NdEYSDFFAZfhScNOicrbCEcOpDSibcqT2EnMMMbVprviawg/640?wx_fmt=png&from=appmsg)

附录 B 结温波动约束条件

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjpvbqk3fuecRdVCPtpHQ9kBCf82Rf2lwmd4c96qouAITwKZ1PjfWGOA/640?wx_fmt=png&from=appmsg)

其中约束条件分为两种情况，当Id(k)<Id(k+1)(负载电流增大)即结温向上波动时，要求混合器件的结温Tj\_MOS和Tj\_IGBT小于等于结温边界值 Tj\_MOS\_th和Tj\_IGBT\_th；当Id(k)\>Id(k+1)(负载电流减小)即结温向下波动时，则要求Tj\_MOS 和Tj\_IGBT 大于等于Tj\_MOS\_th和Tj\_IGBT\_th。

附录 C 实验平台及部分实验结果

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjmp27xePra3gOTDMDw2s2pZq0TTicPCJYpStMtRWnTs0qs2c2B07Uedw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7Dmjeh7AgBBEtTENPYZyr7A2ib89FaJfCMcm5U4lN7QqTF2PINjzP3Yp6rg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjNaYdnnylcsLPZjXOX7eMdkL57xpDqep4y86JCZ1WshCQ2WoUNlfoGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjHsHcojvMGaxYvIDm2flU983J047mLDsymXJYE1sef4t1JrtmxLchGg/640?wx_fmt=png&from=appmsg)

作者简介：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnatxxkJM6nmv1WDicKB7DmjoUUeGqmUh3zicHbFrq82LlENVyiaetVxYWCibjBLiaUxicI2dsyeclEzAAg/640?wx_fmt=png&from=appmsg)

韩硕(1998)，男，硕士研究生，研究方向为电力电子系统可靠性，shuo\_han\_1@ 163.com；

涂春鸣(1976)，男，教授，博士生导师， 研究方向为电网新型调控技术与装备、分布式能源与微能源网等，chunming\_tu@ 263.net；

通信作者：龙柳(1996)，女，博士研究生，研究方向为电力电子系统可靠性，liu\_l@hnu.edu.cn。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)