# 高效高密度三相 PFC 变换器发展综述


> 原文地址: [https://mp.weixin.qq.com/s/dd7-0jXIbWLKihRjN7yUYg](https://mp.weixin.qq.com/s/dd7-0jXIbWLKihRjN7yUYg)

文章来源：微电子学与计算机

作者:赵问鼎1,2;吴新科1,2（1 浙江大学电气工程学院, 浙江杭州 310063；2 浙江大学杭州国际科创中心先进半导体研究院, 浙江杭州 311200）  

摘要：随着电动汽车技术的快速发展，电池容量不断增加,大功率车载充电机（On-Board Chargers, OBC）的需求逐渐增大。为了在有限的车载空间中加快充电速度，OBC需要在原有损耗与尺寸的基础上增大传输功率，这要求OBC具有更高的效率以及功率密度。以OBC装置对大功率三相PFC变换器的高效率、高功率密度需求为牵引， 针对传统方案在高效率高功率密度应用中器件损耗与电感体积的矛盾问题，对现有三相PFC拓扑结构进行了综述 研究，重点分析了多电平拓扑在高效高密度三相PFC中的优势及其技术挑战。  

关键词：三相 PFC；高效率；高功率密度；多电平

1.引言  

在碳中和目标推动下，可再生能源发电占比突破30%，电动汽车（Electric Vehicle, EV）作为清洁能源与交通低碳化的关键纽带，2023年全球市场渗透率达15.8%，中国贡献超 60% 的份额。然而，充电体验仍是 EV 普及的主要瓶颈。根据社会调研，中国市场 38% 的用户将“充电速度慢”列为首要痛点，而美国市场 31% 的潜在消费者因续航焦虑最终放弃购买电动车。尽管直流快充技术可缩短充电时间，但其受到高昂建设成本与低基础设施覆盖率的限制。相比之下，车载充电机（On-Board Chargers, OBC）所支撑的交流慢充方案更加便捷， 用户可在家庭或工作场所灵活充电，满足了全球约70% 的电动汽车充电需求。随着电动汽车电池容量从2018 年平均40 kWh 增至2023年的90kWh，传统6.6kW OBC 对 100 kWh电池组的充电时间将达15.2 h（效率 90%），远超用户可接受的 4 h。因此， 突破车载空间的刚性约束，提升 OBC功率密度与 充电效率，已成为支撑电动汽车大规模普及所面临的核心技术挑战。  

OBC 的拓扑结构直接影响充电装置的效率、功率密度和可靠性。根据功能划分，OBC的结构可分为两级式和单级式两种类型。其中，两级式结构因其技术成熟度高、综合性能优越，已成为当前行业的主流设计方案。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOzAl4vJmgY0JRPa7wfiaSEtyGzG8NVNXFITOLFvZibQxNqwLAibiaOUX3HQ9cASBEEfiaB6BTicRlUP66d3CskBRlcTfCK4oVn8Cnd0/640?wx_fmt=png&from=appmsg)

图 1 为两级式 OBC 结构图，其前级为 PFC（Power Factor Correction）变换器，将电网输入的交流电压转换为稳定的直流母线电压；后级采用隔离式 DC-DC 变换器，通过高频调制技术将直流母线电压调整至适配电池充电需求的电压范围，同时提供电气隔离以确保系统安全性。在直流母线处通常配置低内阻的电解电容，用于实现前级与后级的解耦。这种设计不仅允许两级电路独立优化，还能简化控制系统的设计与工程实现。

在大功率OBC应用场景中，前级 PFC 变换器通常采用三相 Boost 型拓扑结构。该拓扑通过正弦脉宽调制（Sinusoidal Pulse Width Modulation, SPWM）或 空 间 矢 量 脉 宽 调 制（Space Vector Pulse Width Modulation, SVPWM）产生三相桥臂的驱动信号， 在完成电网交流电整流的同时实现电感电流的功率因数校正。为提高充电兼容性，在单相输入条件下，三相桥臂可通过错相并联运行，并配合工频整流桥形成图腾柱无桥 PFC 结构，从而优化单相充电性能。为了实现高效率与高功率密度设计目标， 后级DC-DC 多采用高频谐振变换器。例如典型的LLC 谐振变换器，通过精确匹配谐振腔参数，能够在全负载范围内实现零电压开关（Zero Voltage Switching, ZVS）与零电流开关（Zero Current Switching, ZCS），从而降低开关损耗。

为推动 OBC 技术的进一步发展，美国能源部在 2017 年发布的 USDRIVE 规划中提出了明确的性能目标：2020 年OBC 效率达到 97%，功率密度达到 3.5 kW/L；2025 年效率提升至98%，功率密度达到4.6 kW/L。在此趋势下，高效率、高功率密度的三相 PFC 及隔离 DC-DC 变换器具有重要的工程应用价值。作为电网与电池能量转换的首要环节，三相 PFC 的性能直接影响 OBC 的整体效率和功率密度。然而，当前缺乏对此类变换技术及其发展过程系统性的综述研究，所以本文将归纳总结当前高效率、高功率密度的三相 PFC 技术，侧重变换器的拓扑结构的描述和定性分析，并对未来技术形态及其挑战进行展望。  

2.高效高密度三相 PFC 拓扑结构  

PFC 变换器主要由输入滤波器、交流侧电感、 整流桥等构成，提高 PFC 的效率和功率密度，本质上即减小上述各部分的损耗和体积。为全面分析高效率、高功率密度三相 PFC 变换器的研究现状，并深入探讨其技术难点，本节对国内外工业界和学术界具有代表性的产品及研究成果进行系统综述，如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMv5uibdBOMvusozH7MV7PjoO6Pk4fPWCZbpKrnYgTF7s47kYT1tibjcaviaINibibVxeYlmG1JwZ1DNhiaYia8bQQk6icWapdHr9ppgS8/640?wx_fmt=png&from=appmsg)

考虑到各工作的研究重点不同，样机结构可能存在不完整的情况，所以在比较效率指标时， 不考虑辅助电路和控制电路的损耗，在评估功率密度时，不考虑散热器（效率即可表征散热难度）以及直流母线电容（与 PFC 拓扑方案关系较小）的体积。图 2 中各研究成果可根据拓扑结构的电平数分为3 类，具体方案总结如图 3 所示，包括两电平拓扑、 三电平拓扑以及多电平拓扑，根据工作模式各拓扑还可以进一步分为连续导通模式（Continuous Conduction Mode, CCM）， 临界导通模式（Critical Conduction Mode, CRM）， 以及三角波电流模式（Triangular Current Mode, TCM）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOFFFY8MlJNW3u3hrolaggXj28vbC5nvaHh83ONEon4xCNy5J1qicibgg95BYoichLM3jWkedDBMSWgh92My1YLiaeiaupibe7EBPryI/640?wx_fmt=png&from=appmsg)

为了深入研究不同方案在效率与功率密度提升方面的瓶颈，将通过剖析现有技术的优劣势，揭示关键限制因素以及多电平拓扑在高效率、高功率密度应用中的价值。  

2.1两电平拓扑方案  

考虑到车载 OBC 双向功率传输需求，典型的两电平三相 PFC采用 Boost 型六开关拓扑，如图 4所示。与单相 Boost PFC 变换器类似，该拓扑在连续导通模式（CCM）下运行，通过平均电流控制方法实现网侧电流的功率因数校正。由于三相六开关拓扑为倍压输出结构，所以在三相 220Vac 输入电压 下，直流母线电压需要设计在 600V 以上，为优化成本，通常选用 1.2 kV 硅基绝缘门双极晶体管（Insulate-Gate Bipolar Transistor, IGBT）器件。但由于 IGBT 在关断过程中存在拖尾电流现象，随着开关频率升高，关断损耗增加，该方案的开关频率一般受限于30 kHz 以内。这导致变换器所需电感量通常在 mH 级别，电感体积很大。此外，IGBT 作为为双极性器件，其通态压降约 2 V 左右，导通损耗较大。该方案效率以及功率密度指标差。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZVLZA8xswY6ynIKj46TdPfuLm3eYJLGYK4LB7wqmajbYZqmIwQ1bx02BE8tCC7DYCxh6ygiaPiblsASDI1TXAw6HQSdFLhol5Q/640?wx_fmt=png&from=appmsg)

随着以SiC MOSFET 为代表的宽禁带器件在OBC 中的应用，上述问题得到一定程度的缓解。相较于Si 基器件，SiC MOSFET 具备更高的电子迁移率、更低的寄生电容以及更小的体二极管反向恢复电荷，适用于高频工作场景。但由于CCM 模式下器件硬开关，SiC MOSFET 开关过程中的电压变化率（dv/dt）较高，会产生严重的电磁干扰（Electromegneatic Interference, EMI），需通过减缓开关速度的方式加以抑制，导致开关损耗增加，并限制了开关频率。

为实现更高的功率密度，提升 PFC 变换器的开关频率成为关键。然而，开关频率的增加会导致器件开关损耗上升、效率下降，并增大散热器体积。 为解决这一问题，软开关技术被广泛研究并应用。 软开关的核心原理是在器件开通前将其电压减小至0，即零电压开通（Zero Voltage Switching, ZVS）或在关断前将其电流降至 0（Zero Current Switching, ZCS），从而实现零开关损耗。在 CCM 模式下，PFC 变换器的开关损耗主要集中于开通过程，包括主管开通损耗、容性损耗及续流管反向恢复损耗， 而关断过程的损耗相对较小。因此，当前软开关技术的研究重点在于实现零电压开通（ZVS），主要分为两类方法：一类通过外加有源箝位网络在开通前回收开关管结电容能量，使其电压为 0；另一类通过增大电感电流纹波并使其反向，利用死区时间内电感电流对主管结电容放电，实现 ZVS。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNRBiaC4icGKr71JVaHB3z8icrQljrToO6OHcCeEdrIBuvfwtTz26ceice7BYfXibdaSscMFtM6fGc2ZrD8ztSEYC1ibW1Kd8zh64n78/640?wx_fmt=png&from=appmsg)

图 5 为一种典型的基于有源箝位的软开关拓扑， 在原有三相六开关 PFC 的直流母线上串联了一组有源箝位网络。该电路的主功率器件按照 CCM 模式运行，仅在主管开通前进行能量回收。该方法利用反并联二极管的反向恢复能量实现 ZVS，所以需要在主管上并联慢恢复二极管，箝位网络电感具有足够的能量使三相桥臂主管充分放电，但这限制了开关频率。为克服这一局限，文献 \[20\] 提出一种基于空间矢量调制的控制方法，无需依赖二极管反向恢复能量即可实现主管和辅助管的 ZVS，同时有效抑制反向恢复电流，适用于高频工作场景。该方法在三相逆变器中也得到了验证，并通过与硬开关模式的对比，验证了其优越性。然而，在三相四线制 PFC 结构下，该控制方法会导致中性线出现较大的低频零序电流。为此，文献 \[22\] 提出了一种结合对齐驱动信号和额外短路模态的 ZVS-SPWM 控制方法，实现了所有开关管在 ZVS 条件下的定频工作。 此外，文献 \[23\] 将箝位网络串联在桥臂中，以减小换向过程中的环路电感和器件电压应力，适用于三 相、单相兼容的PFC 变换器。尽管基于有源箝位 的 ZVS 方案能够实现软开关，但其局限性不容忽视。 首先，额外的辅助电路元件增加了电路设计和控制系统的复杂性，同时提高了制造与维护成本。其次， 箝位网络对无源元件参数的精确度要求较高，参数偏差可能导致软开关失效，进而影响系统的可靠性。

除有源箝位技术外，临界导通模式（Critical Conduction Mode, CRM）也是一种实现 ZVS 的有效手段，利用开关管结电容与电感谐振，释放器件结电容电荷，从而实现 ZVS。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOqdfFNddTpmp57Ydw1udib9PMwrSbJickr38T275r3JEkrib2l8sxD0edPuHgIGRxqjlGVibVzZHiaffX7eLtcXNGtV7WkIyaEU5Xw/640?wx_fmt=png&from=appmsg)

图 6 展示了单相图腾柱PFC 变换器及其关键工作波形，其左桥臂高频工作控制电感伏秒，右桥臂工频运行切换工频正负半周。 当输入电压低于 1/2 直流母线电压时，主管可以实现 ZVS，但是当输入电压高于 1/2 直流母线电压 时，主管结电容电压在谐振过程无法到 0，仅能实现谷底开关（Valley Switching, VS），最低电压为 ，并且相位越接近 90°，谷底开关时的电压越高，开通损耗越大。为了在整个工频周期内 实现 ZVS，可以使电路工作在 TCM 模式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNhXL6B7HUzpKZjyz5P8BdInEvUCuQphGYHUOkpIoDphN1FvdJIt4cxz2rPtNoiaNblwxjWdyOA6c791iczQfl2XJmhvZercicU9M/640?wx_fmt=png&from=appmsg)

如图 7所示，通过谷底电流控制策略延长续流管导通时间，增大电感储存的能量，以保证完全释放主管结电容电压，具体延长时间则根据输入电压瞬时值以及谐振回路阻抗计算得到。为了减小电感损耗，通常会以铁氧体等高频硬磁材料作为电感磁芯，在使用时需要注意饱和电流问题。然而在 TCM 模式下， 电感电流峰值为平均电流的一倍，不适合大电流应用场景，在3 kW 以内变换器的效率与功率密度具有优势。为扩展至更高功率，可采用多相交错并联技术，不仅维持效率与功率密度，还能减小网侧电流的高频分量，有助于缩小滤波器体积。

在三相 PFC 应用中，文献 \[28\] 将该方法引入三相四线制六开关变换器中。由于直流母线中点与交流侧三相滤波电容中性点连接，各相电感电流可独立控制，所以可直接沿用单相时的控制策略，并且依靠 CRM 模式即可实现 ZVS。然而，若将最低开关频率提升至 300 kHz 以上，最高频率将高达13 MHz（输入线电压有效值 380V，直流母线电压800V），导致关断损耗和驱动损耗激增，驱动以及控制系统难以实现。此外，对于三相三线制 AC-DC变换器，其电感电流控制相互影响，并且仅存在两个自由度，故不能沿用单相 CRM 控制策略。 为解决该问题，文献\[29\] 基于非连续脉宽调制（Discontinuous Pulse Width Modulation, DPWM）技术， 将工频周期分成 12 个扇区，在每个扇区内使电感电流最大的一相桥臂持续导通，以降低关断损耗并实现其余两相的解耦。同时，为了限制最大开关频率，提出了“DPWM+CRM+开关频率同步”的控制方法—使相电流处于零点附近扇区的桥臂工作在DCM 模式，其频率与工作在 CRM 模式的另一相同步—将最大开关频率降低到 1 MHz 内。同样的思路也可以用在三相四线制中，利用 DCM 工作模 式限制电路最大开关频率，并实现两种结构的兼容。 

相较于 CCM 模式的三相 PFC 变换器，基于CRM 的 ZVS 控制策略可将三相 PFC 开关频率提高10 倍左右。然而，受限于磁芯材料的高频损耗特性及交流系数的影响，在损耗与尺寸的折衷设计中， 开关频率无法继续提高，电感和滤波器的体积仍占整体 1/3 左右。此外，该工作模式也使得三相 PFC的控制系统变得更加复杂。  

2.2三电平拓扑方案  

除了通过提高开关频率的方法来提升功率密度， 采用多电平拓扑也是一种有效的技术手段。早期多电平拓扑主要应用于中高压（10 kV 及以上）电机驱动领域，其核心优势在于器件电压应力降低，从而解决半导体功率器件耐压不足的问题。此外基于低压器件实现高压直流\-交流（DC-AC）变换，交流测电压谐波畸变率更低，所需滤波器减小。若将这一 技术应用于低压应用中，也可以取得相似的效果，有望实现更高的功率密度。 

综上所述，市电三相 AC-DC 变换器直流母线电压等级在 800 V 左右，使得传统的两电平拓扑需采用 1.2 kV 电压等级的器件。而多电平拓扑，特别是三电平拓扑，能够使用电压等级更低的器件（如600 V），在成本控制和系统可靠性方面展现出优势。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP2GxA56GbRKrLebq0VRQoCBJtdGiaJQDCY4b4m2lYA2KsVTBU8fdXLIslS4WXLGTPo5mgrwueKmBFrNuz4dJ0c2ZpIuGb22JvU/640?wx_fmt=png&from=appmsg)

图 8 展示了 NPC 三电平拓扑，该电路利用二极管进行箝位，将器件电压应力降低至直流母线电压的1/2，对应 600 V 器件应用范围。为进一步提升系统效率，可将箝位二极管替换为可控开关，形成有源中点箝位型（Active Neutral Point Clamping, ANPC）三电平拓扑，如图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOib0vKpFS7WVibZtOOGcLqgexK6Bvy00IVMg43damroSmaVf5PG9K6geRS02VBcLq5RcTk7AEbW4NXmGZHQibQRcbfHyfnAdpVOo/640?wx_fmt=png&from=appmsg)

相比 NPC 拓扑，ANPC拓扑的控制自由度更高，支持针对性的控制策略优 化。例如，通过平衡器件间的损耗分布，可降低散热设计的难度。或者使部分器件工频工作，将高频工作的器件减少为两个，降低开关损耗。基于该方法，文献 \[36\] 使用 650 V GaN 器件作为高频管，Si MOSFET作为工频管，在 140 kHz 开关频率下实 现了 99% 的满载效率。

将 NPC 拓扑的箝位二极管替换为可控开关， 同时把其他可控器件替换为二极管，可得到六开关Vienna PFC 方案。在该拓扑中，当箝位开关导通时，输出电平为 0；当箝位开关关断时，二极管导通续流，输出电平为 1 或−1。进一步优化拓扑结构， 将低压二极管整合为高压整流桥臂，并通过双向全控器件进行箝位可形成另一种Vienna 拓扑结构， 如图 10 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN4FsaFqY4NyGyEMhHCxXLffkLRjRrYILM5hc46Smhtu3VGnsd3riaFnXY87O0Hfhoa5CU7S9RQ6z4H05MJfMPmJicA6ic22aVu6w/640?wx_fmt=png&from=appmsg)

该拓扑结构器件数量最少，在功率 密度要求不高时，其效率与成本具有明显优势。 为实现双向功率传输，需要将 Vienna 拓扑的二极管 替换为全控器件，从而演变为 T 型三电平拓扑，如图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMTFsc29ZeCdpIRibfmicnn1Bic6GPFvvm9lhibiaxezegpcNUjuoToPprOc07byQgFwibpSZbTic42l0QCZBJkh2IuuGYwxdW0K2lGy0/640?wx_fmt=png&from=appmsg)

在逆变模式下，电感电流反向，外侧 高压器件成为主开关管，低压双向开关变为续流管， 其控制策略与整流模式存在一定区别。在相同器件且效率为 99.5% 下，文献 \[33\] 比较了不同三电平拓扑的开关频率，结果表明 T 型三电平拓扑的开关频率较 ANPC 提高约 1/3，因而能够实现更小的电感与滤波器体积。此外，三电平拓扑也可以工作在TCM 模式，在死区内通过电感电流对主功率管结电容放电实现 ZVS 工作，进一步提高开关频率上限。 文献 \[42\] 系统地评估了 T 型三电平拓扑在不同开关频率下的效率与功率密度，提高开关频率虽然可有效缩小电感与滤波器尺寸，但同时增加的开关损耗需要增大散热器体积，使功率密度呈现拐点。以每相 2 kW、效率预期 99% 为例，其最优开关频率约200 kHz，功率密度可达 15 kW/L。

除上述拓扑外，飞跨电容（Flying Capacitor, FC）三电平拓扑也具有应用潜力，如图 12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNsIRVxicpOKuPAZRHwvhDYJ2SwImE8psnnCLWt5phpHYJHrsh7R3Y9KoEX3fP6iavOMwxlnlCKWIcCAZJh2p7ibvpuC7gnFOTYFs/640?wx_fmt=png&from=appmsg)

该拓扑的器件数量与 T 型三电平相当，均为600 V 电压等级，且器件损耗更低。但由于电路不具备自均压能力，为使飞跨电容电压维持在直流母线电压的 1/2，需要增加均压控制策略以及相应的硬件采样电路。

2.3多电平拓扑方案  

随着功率半导体技术的快速发展，功率器件的驱动电路、控制电路等芯片化集成度不断增加，从而显著降低了系统复杂度，也为多电平拓扑在低压高效率、高功率密度电源中的应用提供了重要技术支撑。 

三电平 PFC 方案已初步经验证了多电平拓扑在效率方面的优势，并且由于其伏秒相较于两电平方案减小了一半以上，在功率密度上具有天然的优势。 因此，当电路拓扑的电平数继续增加，三相 PFC 有机会实现效率与功率密度的进一步突破。为从理论 上论证多电平技术的可行性，文献 \[45\] 针对基础多电平拓扑推导了多电平变换器的统一损耗模型。基础多电平拓扑如图 13 所示，包括级联 H 桥（Cascaded H-bridge, CHB）变换器，FC变换器，ANPC变换器 ， 以及模块化多电平变换器（Modular Multilevel Converter, MMC）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPVyyiaDM0lBHWyFDXCOw2HPDEawlNc2TiclfZkn9gexOibS6OtMEbaQd5h5btSYOxCBHk7OXvfUiaictKqpSKXiculOAAAOgoA0rqt0/640?wx_fmt=png&from=appmsg)

通过分析发现，这 4 类基础多电平拓扑存在相同的半桥基本单元，根据该基本单元的损耗特性即可建立任意单元的损耗模型。为便于在给定直流母线电压下，评估不同耐压器件的理论最小损耗，进一步引入器件 FoMN（New Figure of Merit） 的概念，即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOBq3tmpM61QjYN2910PmgNMJRYyfVMkaNJvrnhrfpPXXmCgibzgZluUXJeE96CGK9iafia4JN61AdzSZQibia7vzv8PY3bAVY6JUlg/640?wx_fmt=png&from=appmsg)

式中： C为器件结电容； Rds.on为器件导通电阻。统计数据表明，器件 FoMN 参数与器件耐压正相关。 基于器件 FoMN 改进统一损耗模型后发现，多电平拓扑的最小损耗近似与器件√FOMN成正比。因此，在相同直流母线电压条件下，拓扑中的单元数越多，所需器件的耐压超低，电路损耗随之减小。  

多电平拓扑不仅降低电感电压幅值，还可以提高其频率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMI0D1qhB5ibUib8ibv1fzicdrOVtXg8icAbEY8UiceE0lyTexY3dgzFXeALgb6gnZ3kh5icvIS4WdNE1hRo3GYVianLwn7Ft2L7a6eLUM/640?wx_fmt=png&from=appmsg)

表 1 比较了不同多电平拓扑在相同电平数下的性能，包括基本单元数、等效倍频效果、电感伏秒缩小倍数、器件数量及箝位电容数量。例如N电平CHB拓扑，其包含 N−1个基本单元，由2（N−1）个开关器件以及（N−1）/2 箝位电容构成，电感电压频率为开关频率的 N−1 倍，电感伏秒下降(N-1)²倍，所以电平数越多，电感以及滤波器体积越小，PFC 变换器功率密度越大。

由于 CHB 拓扑在高压固态变压器（Solid State Transformer, SST）中的成熟应用，控制技术较为完善，故最先被引入400 V 电压等级的单相 3kW AC-DC变换器中。文献 \[48\] 综合考虑 CHB 变换器损耗以及元件尺寸，采用帕累托优化方法对电路参数（包括单元数、开关频率及器件参数）进行优化设计，并使用 100V Si MOSFET 器件搭建样机进行验证。实验结果表明，主功率部分的功率密度可达 60 kW/L， 并且在 20% 负载以上的效率均大于 99%，若使用同 规格 GaN 器件，效率有望进一步提升0.4% 左右。 单元数越多，每个单元的电容耐压越低，直流母线 电容存储的总能量不变，但由于电解电容的能量密度与耐压成正比，从而导致母线电容体积占比增加，变换器功率密度不足 15 kW/L，削弱了 CHB 拓扑的优势。当其应用在三相 PFC 系统中，由于各相直流母线独立，该问题仍然无法避免。  

FC 多电平拓扑在低压高功率密度应用中取得显著成果。对于单相 400 V 直流母线的 PFC 变换器， 其主功率部分（FC+电感）的功率密度也可以达到 60 kW/L 左右，满载效率 99%。文献 \[49\]量化对比了 单相两电平 PFC（直流母线电压 400 V）以及三相三电平 FC-PFC（直流母线电压 800 V）的性能，由于三电平拓扑器件数量增多，在使用同款 600 V 器件条件下三电平方案的效率以及功率密度低于两电平PFC。为解决此问题，该研究提出采用多电平 FC拓扑，利用 NFoM 参数更小的低压器件降低电路损 耗和元件尺寸。FC 拓扑各单元相互嵌套连接，从而 构成单直流母线，三相 FC 变换器相间瞬时功率平衡，所需母线电容较小。然而，该结构也导致单元模块化程度较低，故障时不仅无法通过短路开关切除故障单元，而且单元之间会相互影响，扩大故障范围。例如当某单元的开关器件发生短路故障时，相邻单元的电压应力将增加 50% ~ 100%，必须考虑 一倍的器件耐压裕量才能保证其余器件的安全。NPC 及其变种 ANPC 多电平结构也属于类似的嵌套式结构，但在电平数增加以后，其拓扑连接方式变得非常复杂，模块化困难，而且相同伏秒下，所需器件数量较多，该方案在低压高密度电源中暂无实际应用。  

MMC 拓扑凭借其高度模块化的结构被广泛应用在中高压电网中，通过切换不同数量的子模块，MMC 可在交流侧生成近似正弦的电压波形，同时保持桥臂投入与切除子模块数量恒定以维持直流侧母线电压。然而，在 800 V 直流母线应用中，MMC 存在局限：首先，在相同的电感伏秒条件下，MMC 所需要的器件以及箝位电容数量是 FC 的两倍，或开关频率是 CHB 的两倍；其次，当兼容单相 AC-DC运行模式时，各模块的箝位电容需要缓冲工频的纹波功率，导致电容体积过大，与 CHB 面临类似问题；最后，为抑制桥臂切换引起的环流，需引入桥臂扼流电感，进一步增加变换器体积。因此，MMC 不适用于低压高效率、高功率密度场景。 

此外，通过组合基础多电平结构，提高器件的复用率，可以用更少的器件数量实现相同的电平数。 例如，将三电平 ANPC与三电平 FC结合形成混合七电平拓扑，相较于七电平的 FC 拓扑，桥臂减少了两颗开关器件。因 ANPC 部分仅包含两颗高频管，桥臂开关损耗得以降低，且电感伏秒与七电平FC 相同。由于器件的复用并没有降低整体损耗以及电感伏秒，所以器件部分的损耗以及无源元件体积与传统七电平 FC 拓扑相当。相似地思路可以沿用到不同基础拓扑之间的组合，包括 CHB+FC，Ttype+ANPC等。然而，在混合多电平方案实现更少开关器件的同时，也无法避免拓扑结构嵌套连接导致的低模块化性缺点。  

3.模块化单母线多电平变换器构想  

在前述章节中综述了不同方案在高效率及高功率密度应用中的研究进展，突出了典型多电平拓扑在该场景中的优秀表现，其中以 CHB、FC 多电平拓扑在效率和功率密度指标上表现最佳，而 MMC、ANPC 则由于器件数量较多，或结构复杂等缺点， 不适合此类应用的需求。从工程应用的角度，系统可靠性是拓扑方案选择中的重要因素之一，多电平变换器因器件数量增加，其可靠性问题尤为突出。 由于 FC 拓扑的单元嵌套连接，器件的电压应力由相邻两单元箝位电容决定，若某一单元中的器件发生短路故障，会引发相邻单元器件过压击穿，扩大故障范围，严重影响系统稳定性。相比之下，CHB拓扑的单元采用独立箝位设计，高度模块化，在故障发生时可通过单元自动短接或外加旁路开关实现故障单元切除，将故障影响控制在单元内，提升系统可靠性。然而，CHB 拓扑的多直流母线结构也存在明显局限性：首先，低压电解电容的能量密度较低，制约了系统的整体功率密度。其次，多直流母线架构增加了后级变换器的设计复杂度，并降低了系统的灵活性。因此，多电平拓扑在高效、高密度应用中，还需要探索拓扑上的改进，构建模块化的单直流母线多电平拓扑，兼具高可靠性的模块化与简洁的单直流母线系统架构。 

从模块化的角度，CHB 变换器具有最理想的拓扑结构,其单元由完全相同的 H 桥和电容构成。但是这种拓扑结构也带来了一些问题，首先，由于各 单元的直流母线之间需要电气隔离，所以后级需要相同数量的隔离DC-DC变换器与之配合才能构造出单输出端口。这导致整个系统的结构较为复杂，而且后级变换器往往需要单独设计，与传统 DC-DC方案不兼容。其次，由于低压电解电容的能量密度要低于高压电容，在相同直流母线电压和等效电容容值（各单元电容串联后的容值）的条件下，CHB 变换器单元数越多，电容体积越大，反而导致功率密度下降。  

从功能的角度，直流电压母线用于向后级传输功率，那么通过模块化的低压单元输出功率的方式必然会导致多个电位悬浮的直流母线。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNk7JAibJlia8hkxhfJfAqDQGl11xxAOLh8BCA6iaVk7QP0UU6Imeg2I7evnF30F0ZIf2DCKIsybibeHUFyvESLqYOUWj0qXyicgia2Y/640?wx_fmt=png&from=appmsg)

如图 14 给出了 CHB 变换器的拓扑及其功率传输路径分析，其中Usw,1和Usw,N表示CHB单元的端口电压，iL为电感电流。在共同占空比控制下，CHB 的输入功率会平均分配到每一个单元，然后再通过多个直流母线传递到后级 DC-DC 变换器。因此若要实现单直流母线，则需要使功率仅通过其中一个单元输出，该单元的电压等级相应增加为总母线电压。

为了实现单母线，将功率集中到单元 N，并通过Usw,N传递，其电压将提升到总母线电压Vbus ，而剩余单元仅用于控制电感电流，如图 15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMY767kkPKxM1ibX2dZSoR2kz1b4g6ebZFM59Ygc4hQgT9sib2iblrIoJJxEiaBstRJQVRib4dTwXMVSUsCcWlA5yLfOOeFLO3CSn1c/640?wx_fmt=png&from=appmsg)

因为电感伏秒被多电平低压单元控制，所以传输功率的高压单元仅需完成整流并产生直流母线电压的任务，所以可将高压单元设置在工频整流状态以降低损耗。 在该工作方式下，输入电压与工频整流桥端口电压之间存在较大电压差，伏秒过大，因此利用多电平网络分担大部分的伏秒，从而减小电感伏秒，缩小 其尺寸。由于多电平网络模拟了电感的作用，并且能够自发完成伏秒的控制，所以将其命名为模块化感性开关网络（Modular Inductive Switching Network, MISN）。该电路其主要包含两部分开关网络，分别 是基于低压器件的高频多电平网络，以及基于高压 器件的工频整流桥。进一步，基于三相四线制的结构即可构造出三相 MISN-PFC 变换器，如图 16 所 示，各相的电感串联一组 MISN 模块，高压单元使用六开关三相工频整流桥。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOSnARfRIjncVkkztuRhsIZmbJU9ASibHiaznCPYf08UDxAnn4x7aQQWapE4UACO5CavTB9jMnfhQQoJCtUR9hKOWfHxOKiaTeYiaw/640?wx_fmt=png&from=appmsg)

图 17 展示了三项MISN-PFC实验样机图片，包括输入滤波器、电感、MISN 模块、工频整流桥、直流母线电容以及控制板。样机满载传输功率 10 kW，输入电压的范围 ，输出电压220Vac±10% ，输出电压550Vdc， 整体尺寸为 18 cm×8.5 cm×2.5 cm，功率密度高达26 kW/L。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPj2kxazQ4zVgQUw4F3ZbwJmBicdzy9UJE5MZC3gvkpibKAEVjMpOdz258Ps2rCXlLu2PANMjlBQSuOribLlwSGQr4Vy0rL6tAuOM/640?wx_fmt=png&from=appmsg)

在稳态运行条件下，电路 A 相的关键波形如图 18 所示。由于 MISN 模块高频工作（20KHZ）， 其可以精确控制电感的伏秒，从而实现高效的功率因数校正。从展开图可以看到，当开关频率设定为20 kHz 时 ， MISN端口电压的等 效频率达到了280 kHz，实现了14 倍的频率提升。为了抵消工频整流桥开关动作对电感伏秒的影响，加入非线性暂态补偿控制，驱动 MISN 模块的端口电压同步进行等幅反向切换，以避免电感伏秒的突变，确保电感电流的平滑过渡。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPGykMun3zCQG6x7TZ7fVpibWAY1eTFYpxnm3cLr6MCT2HoIxDYy7CCDsqL4RUUEjlw32icD9FbIKQJesGSC8vmrcp3oTLib1Bf0A/640?wx_fmt=png&from=appmsg)

  
图 19 对比了传统两电平方案与多电平 MISN 拓扑无源元件的体积，由于 MISN模块减小了电感的伏秒，并增加了电流纹波的频率， 所以所需电感和滤波器体积下降明显，计算外加MISN 电容后，整体体积减小约一半左右。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOcsIEu9IQ0lMpyUQia9icTEYxwoDCvtg1gSpZuVxQzrFibzf9W6gibQ8RwCZ30TqBwRptzicSgOYT93ewKhuvC9z7yJibBqWSyCed4g/640?wx_fmt=png&from=appmsg)

4.结束语  

在全球能源转型与电动汽车产业蓬勃发展的双重机遇下，提升车载充电机的效率与功率密度已成为突破充电体验瓶颈的核心技术挑战。本文聚焦大功率三相 PFC 变换器的高效高密度需求，系统综述了现有技术方案：传统两电平拓扑受限于器件损耗与电感体积的矛盾，难以兼顾高频化与高效率；三 电平拓扑通过降低器件应力与引入软开关技术，在效率（\>99%）和功率密度（15 kW/L）上取得突破；多电平拓扑（如 CHB/FC）则展现出更大的潜力，为OBC 性能跃升提供新路径。然而在拓扑可靠性方面， 嵌套结构（如 FC）的故障风险与模块化方案（如 CHB）的多母线架构存在矛盾，本文提出模块化感性开关网络（MISN-PFC）构想，通过多电平网络分担伏秒与工频整流桥集中输电的结合，为单母线高密度系统提供新思路。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPeMSn3gXlDt08RSl53sia42KL2vc1VwD2fialnhibFQmxgLJqAFib4PniaIkicyJ49j365MYEnbYicQ0kSgkO01z55uAChMFLIdoiaj2g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM4ZawxmntsGGILYSTosxrj3WMQYHvJypYUuiaWwAEYBXOVaNbNstJ1RZVb3nZn0hTlNnXicGib9MibVhK9qEkYzP92L81nBGiaMQhM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtgCibSEiaB0WEAHuBm2MCKCBibK5fT4ZsCEegyzTxpcDpk0ic2mbH4z3yVdEdES64VvkWWlNZoib8H4wibECHd2IKbl8IVskpa0eG0/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlVIsHHkHFicBicQeWEgLurD2ECwrzN2RILWbibqE0UzlNl5hYBUEfgqJYU1wrJZAODeyib0Gdkm1Efz8gqda4tHDIG1jRicExEtVo/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)