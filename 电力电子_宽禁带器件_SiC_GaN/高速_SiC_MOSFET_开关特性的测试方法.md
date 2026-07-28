# 高速 SiC MOSFET 开关特性的测试方法


> 原文地址: [https://mp.weixin.qq.com/s/9idamFcuQ\_fjcQP-ymH6fQ](https://mp.weixin.qq.com/s/9idamFcuQ_fjcQP-ymH6fQ)

文章来源：电工技术学报

作者：梁 美 李 艳 郑琼林 赵红雁（北京交通大学电气工程学院 北京 100044）

摘要 ：为正确地评估高速 SiC MOSFET 的开关特性，基于双脉冲测试平台对精准的测试方法进行研究。首先，仿真证明电路中寄生电感对 SiC MOSFET 开关特性的影响，优化设计 PCB 布局以减小寄生电感，对比 PCB 布局优化前后的测试结果。其次，对比分析续流二极管的结电容以及负载电感的寄生电容对 SiC MOSFET 开通特性的影响。然后，对比分析使用不同带宽的非隔离电压探头、不同电压探头地线连接方式、不同电流测试设备对测试结果的影响，并说明电压与电流波形之间相位延迟对开关能量损耗的影响。最后，对比分析不同测试点对测试结果的影响。

关键词：测试方法、 开关特性、 高速 SiC MOSFET、 寄生参数

0 .引言

近些年，碳化硅（Silicon Carbide, SiC）MOSFET新型器件因其材料具有击穿电场高、载流子饱和漂移速度快、热稳定性好及热导率高等优势，可提高电力电子变换器的性能，引起了国内外学者的广泛关注。从理论角度上，SiC MOSFET 的特性与同等级的Si 器件（如Si IGBT、Si DMOS）相比，在高压、高温以及高频等应用场合均有优势。实际上，SiC MOSFET在各领域也得到了应用。随着SiC MOSFET 的技术不断发展和改进，SiC MOSFET 的导通电阻进一步降低，击穿电压和通态电流进一步升高，可选范围不断扩大。使用SiC MOSFET 之前，需具体了解其开关特性，为电力电子变换器的设计提供指导。

双脉冲测试平台可用于采集SiC MOSFET 开通过程和关断过程的驱动电压、开关电压和电流波形，用于评估SiC MOSFET 的开关延迟时间、电压电流上升、下降时间、电压电流变化率、电压电流应力以及开关损耗等开关特性。测试结果的精准性是正确评估SiC MOSFET 开关特性的前提，这就需要精准的测试方法。而目前针对高速SiC MOSFET的测试方法研究较少，且不十分详尽。

由于SiC MOSFET 开关速度高，电压电流变化率大，基于双脉冲测试平台的测试方法存在以下问题：①电路中存在寄生电感，这些寄生电感来自PCB连接线以及器件封装。而 SiC MOSFET 的电流变化率大，使寄生电感对测试结果的影响不能再被忽略；②续流二极管（本文均使用SiC 肖特基二极管）以及负载电感中均存在寄生电容，因SiC MOSFET 的电压变化率大，使寄生电容对测试结果的影响不可被忽略；③SiC MOSFET 开关速度高，为准确采集开关波形的上升沿、下降沿，对测试设备的带宽要求较高。电压探头的测试回路中寄生电感会影响测试结果。测试开关电流时，电流测试设备需串联在功率回路中，会造成功率回路连接线长，寄生电感大。另外电流测试设备自身携带寄生电感会影响测试结果。因测试设备存在延时，电压与电流波形之间存在相位延迟，当利用采集的电压、电流数据计算开关能量损耗时会产生误差；④SiC MOSFET 电压电流变化率大，封装上寄生参数不可忽略，在封装上选择不同测试点会得到不同的测试结果。

本文为了正确地评估高速SiC MOSFET 的开关特性，将基于双脉冲测试平台对精准的测试方法进行研究。首先，仿真证明电路中寄生电感对SiC MOSFET 开关特性的影响，并对PCB 布局进行优化设计，对比PCB 布局优化前后的测试结果。其次，对比分析续流二极管的结电容以及负载电感的寄生电容对SiC MOSFET 开通特性的影响。然后，对比分析使用不同带宽的非隔离电压探头、不同电压探头地线连接方式、不同电流测试设备对测试结果的影响，并说明电压与电流波形之间相位延迟对开关能量损耗的影响。最后，对比分析选择不同测试点对测试结果的影响。

1. 寄生电感对测试结果的影响

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJgTQTKpgRxibibjxFMianj21AqqyakqVxZClXVzP6jib2YYTR8oMKZDIUrQ/640?wx_fmt=png&from=appmsg)

图1a 为考虑寄生电感的双脉冲测试电路。图中虚线框内参数表示存在于封装内部，器件芯片与封装引脚的连接线上会分布寄生电感，图1b 给出了连接示意图。图1a 中虚线框和点划线框之间的参数表示存在于封装引脚上，图1c 给出了封装示意图。图1a中其他寄生电感存在于PCB 连接线上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ2k8DA8wVoN6ljLIzsjkpHUlsXPvYwR3P1tH8BO02n7pXUmQUzTnOUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ3aibTvXibv9klVbuQr35hIrSo2su7Rxyup6HWHVZP2LdMl4AeP2YImicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJTw5Qgb4j5d3uoCoyibibgibibljkMk8dHicu49jdQ6icFgMUTzr6ZbaZJRgg/640?wx_fmt=png&from=appmsg)

图2 仿真对比了没有寄生电感和存在寄生电感时SiC MOSFET的开关波形，仿真参数见表1。仿真中使用CREE Inc.提供的1200V SiC MOSFET 模型以及SiC 肖特基二极管模型。因电路中存在寄生电感，电压电流上升、下降时间延长，电压电流变化率变小，关断电压的过冲电压及振荡变严重，开关能量损耗增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJW3omEB7J2E8t7iat5Ge0WLkwSQBPBwKicrDvvYGSkNGhu6DcOWZxic7iaA/640?wx_fmt=png&from=appmsg)

SiC MOSFET的开关速度高，使寄生电感不可忽略。同一种SiC MOSFET 的测试结果会因不同双脉冲测试平台中寄生电感不同而存在差异。因此，应尽量减小电路中寄生电感。图3a 中PCB 1 号为双脉冲测试电路的一种布局，其走线长，寄生电感大。PCB 2 号为优化后的一种布局，消除了寄生电感LC3、LA3 和LD3，并缩小了寄生电感Lbus1 和Lbus2。图3b 和图3c 给出了基于两种PCB 布局的SiCMOSFET 测试波形。因PCB 2 号寄生电感减小，SiCMOSFET 的电压电流上升、下降时间缩短，电压电流变化率增大，关断电压的过冲电压及振荡缓解，开关能量损耗减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJibGDOOPAlstTbLfygJiaJ8cibNpOly6kzWibVaIBLJAtoWmjqOolRhDg0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJFnoB08mPib1wKPibM45xgvoZDpcuOV16CaGsd9XYNUjb1wze50lhiaFvA/640?wx_fmt=png&from=appmsg)

2\. 寄生电容对测试结果的影响

双脉冲测试电路中除SiC MOSFET 的结电容外，续流二极管和负载电感上均存在寄生电容，这两个寄生电容对SiC MOSFET 开通过程有明显影响。图4a 中对比了续流二极管结电容对测试波形的影响，其中续流二极管1号的结电容较大。对比结果表明，续流二极管的结电容较大时，SiC MOSFET的开通过冲电流较大，开通能量损耗较大。图 4b中对比了负载电感（400μH）寄生电容的影响。负载电感1 号为单磁心多层绕制，存在匝间电容和层间电容，其寄生电容大。负载电感2 号为多电感串联且每个电感为单层绕制，匝间距离大，寄生电容小。对比结果表明，负载电感的寄生电容较大时，SiC MOSFET开通过冲电流较大，开通能量损耗较大，负载电流Io 在开通过程出现振荡。上述现象是由于续流二极管电压上升时，续流二极管结电容和负载电感的寄生电容充电，充电电流流过SiC MOSFET。因电压变化率dv/dt 大，续流二极管结电容和负载电感的寄生电容对SiC MOSFET 的开通特性影响明显。因此，应尽量减小这两个元件上寄生电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJt2O1SfI8sWLrnT9qN0SvK5QXQICjHuIJTUhFAOy1ExmQCCn68Kaetg/640?wx_fmt=png&from=appmsg)

3. 测试设备对测试结果的影响

3.1 电压探头

为了精准地采集SiC MOSFET 电压波形的上升沿和下降沿，电压探头需要具备高带宽，判断依据为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJxcntHgqVPvDqUYYWmkDZkib7IawBHPaAOV1L6VmP7bYGkZ0ePqCUZKg/640?wx_fmt=png&from=appmsg)

式中，tr 为开关波形的上升时间；tf 为开关波形的下降时间。本文中测试SiC MOSFET 的电压开关波形上升、下降时间可能小于15ns，根据式（1）电压测试设备的带宽要在16.7MHz 以上，为了更精确测量，电压测试设备的实际带宽需高于16.7MHz 的10倍。在电压测试设备中，隔离电压探头的带宽相对低，延迟时间长，而非隔离电压探头的带宽高，延迟时间短，更适用于测试高速SiC MOSFET。表2为三种非隔离电压探头的参数，其带宽各不相同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ1HhtsAywkD0U2ZdtMGmFxBCgtr4P6iaCZqkIVRUKicAZ2f4dnwBruMxw/640?wx_fmt=png&from=appmsg)

图5 为使用三种非隔离电压探头测得的漏源极电压vDS 波形。当输入电压VDC\=250V 时，150MHz 带宽的非隔离电压探头测得漏源极电压vDS 的振荡幅值较大，而300MHz 和500MHz 带宽的非隔离电压探头的测试波形比较相似。当输入电压VDC\=600V 时，对比150MHz 和300MHz 带宽的非隔离电压探头的测试结果，依然是150MHz 带宽非隔离电压探头的测试波形中振荡幅值大。因此，150MHz 带宽已不能满足高速SiC MOSFET 测试要求。使用非隔离电压探头测试时，测试回路中存在寄生电感。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJM6rHjEOgEXpc6glpcUiadUiav1f3wD2SMquRt30U0d8muIKHctIvcmjQ/640?wx_fmt=png&from=appmsg)

图6a 给出了测试回路的等效电路，vi为测试点的待测信号，vo 为示波器测得信号，Lprobe为测试回路的寄生电感，C 和R 为电压探头的等效电容和电阻。图6b 给出了vo/vi 的幅度衰减情况。文献\[15\]指出vo/vi的幅度衰减超过−3dB 时测试结果误差大，幅度衰减等于−3dB 时对应频率为带宽。根据图6b 可知，测试回路的寄生电感越大，测试带宽越低。使用非隔离电压探头测试时常会使用自带地线夹，会引入较大寄生电感。而当使用BNC 接头或者接地弹簧时，测试回路的寄生电感较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJk60q1C7J5ChejLFxTJQ240em3tVu0oYUUyrNCboCYQlktjgmiaibnZ5A/640?wx_fmt=png&from=appmsg)

图7给出了使用三种接地方式的测试波形。使用地线夹时漏源极电压vDS 的振荡幅值较大，使用BNC 接头和接地弹簧时测试波形相似。因此，测试高速SiC MOSFET 时，非隔离电压探头应配合BNC 接头或者接地弹簧使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJTc2s1FvzibvH1zTKobtnnibCVgwxreSwia133kAMh8FzuMn0F9coQy2Kw/640?wx_fmt=png&from=appmsg)

3.2 电流测试设备

表3 列举了四种电流测试设备，分别为同轴分流器、电流采样电阻、磁心分列式电流探头和电流采样变压器。前两种测试方式均将SiC MOSFET的开关电流转化成电阻上的电压，后两种测试方式均利用了变压器测试原理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJnyO7RdedWDvmIV0WVic7Tl1AP5E5TnDpNLNpr6fJIh4ukLicNb9JK7Cg/640?wx_fmt=png&from=appmsg)

同轴分流器的测试带宽最高，其等效电路如图8a所示，可等效成带有寄生电感的电阻，其中A 端连入双脉冲测试电路的功率回路，B 端与示波器相连。根据文献，同轴分流器SSDN−10的A 端寄生电感为2nH，而B端寄生电感为5.2nH，其寄生电感值小，对测试结果的影响不明显。第二种测试设备是电流采样电阻，一般会采用无感电阻，但是实际上其也存在寄生电感，图8b 为其等效电路。C端既连入双脉冲测试电路的功率回路，也与示波器相连，这样测试结果中会包含寄生电感上的电压，无法还原真实的 SiC MOSFET 开关电流。第三种测试设备是磁心分裂式电流探头，该设备的测试带宽较低，而使用该设备的缺点是因放置电流探头使功率回路寄生电感增大，SiC MOSFET 的开关特性会因此受到明显影响。第四种测试设备是电流采样变压器+同轴分流器SSDN−10，其等效电路如图8c 所示。原理是将磁心穿过SiC MOSFET 封装的漏极引脚，漏极引脚成为一次绕组，电流采样变压器二次侧输出线连接同轴分流器SSDN−10 的A 端。图8c中 L1 和L2 为电流采样变压器一次、二次侧电感，R为同轴分流器等效电阻，k 为耦合系数。将变压器二次侧参数折算到一次侧后如图8d 所示。当耦合系数k 较高时，一次侧电感L1 和漏感（1−k²）L1 小。而电流采样变压器二次侧为多匝绕制，二次侧电感L2 大，折算到一次侧阻抗k²RL1/L2 较小。这种测试方法的缺点是电流采样变压器特性对测试结果有较大影响，而优点是电流采样变压器可以不占用PCB面积，可实现双脉冲测试电路 PCB 布局的最优设计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJ9UpCiba6xIEeiaylOW9tIrfKrLMjibcHNe97OpeaLHW8aLHPeWtyKmBSA/640?wx_fmt=png&from=appmsg)

图9 对比了使用四种电流测试设备对SiC MOSFET 漏极电流iD 的测试波形。图9 中四种测试设备的测试波形均有区别。同轴分流器的带宽高，寄生参数影响小，以使用此设备测得波形作为对比对象。使用电流采样变压器的测试波形与使用同轴分流器SSDN−10 的测试波形最相近。而使用电流采样电阻和磁心分列式电流探头的测试波形中开通过冲电流大，关断电流振荡幅值大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJS5F0vxjSrqSibibA0y0BicO3GC0kFQBBnwGI3lumFz3Vnwk5XfszpTefg/640?wx_fmt=png&from=appmsg)

3.3 电压与电流波形之间相位延迟

由于测试设备存在延迟时间，且各设备之间的延迟时间不同，电压与电流波形之间会存在相位延迟。当利用实验测得的电压电流数据计算开关能量损耗时，会造成计算结果不精确。图10 为输入电压VDC\=590V、负载电流Io\=20A 时SiC MOSFET 的开关能量损耗。电压与电流波形之间存在相位延迟造成开通能量损耗Eon和关断能量损耗Eoff 与无延迟时相比偏差大，分别以−11μJ/ns 和10μJ/ns 变化。图10 表明相位延迟越大，计算结果与实际结果之间的偏差越大。为了更精确地评估SiC MOSFET 的开关能量损耗，需取消电压与电流波形之间相位延迟，文献\[19, 20\]中对测试设备校准方法进行了介绍，本文不做详细说明。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJu7bgBO6tqklGvprf7y1lKMCsVmrNuJNpUOCGdgJXNW3jr4EapLiasjA/640?wx_fmt=png&from=appmsg)

4. 测试点对测试结果的影响

测试SiC MOSFET 的栅源极电压时，测试点可选在器件封装引脚顶端（如图1c中g2 和s2 处），或者选在器件封装引脚底部（如图1c 中g1 和s1 处）。vgs\_11 为测试点g1 与s1 之间电压，vgs\_22 为测试点g2与 s2 之间电压，两者之间存在关系

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJs6JEibzRIhbfg8DJ0b6xcPib2QPbEW1zviaibU2uHE2UtGE4vUrpJbeWWQ/640?wx_fmt=png&from=appmsg)

式中，diG/dt 为栅极电流变化率；diS/dt 为源极电流变化率；LG2 为封装栅极引脚上寄生电感；LS2 为封装源极引脚上寄生电感。

式（2）表明：电压vgs\_22 比vgs\_11 多包含了寄生电感LG2 和LS2 上电压，而源极电流iS 与漏极电流iD 存在关系

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJH6SAK6Ljz9FKvMyqM4vnyyhRMA5gR7RYXjH7AC3g5NgzmibLFJcZMSQ/640?wx_fmt=png&from=appmsg)

式中，iG 为栅极电流。

图11 为不同测试点SiC MOSFET 的栅源极电压波形。图11a 和图11b 中，负载电流Io\=0 时，漏极电流变化率为0，而栅极电流变化率较小，因此电压vgs\_11 与vgs\_22 不存在明显差别。图11c 和图11d中，负载电流 Io\=20A 时，开关过程电流急剧变化，寄生电感LS2 上产生电压降，而LS2 同时存在于功率回路和驱动回路中，造成vgs\_11 和vgs\_22 出现明显差别。由于测试点g1、s1 与封装内部栅极G 和源极S最近，vgs\_11 最能反应待测SiC MOSFET 栅源极电压vGS 的变化情况。综上，测试SiC MOSFET 的栅源极电压时，为避免寄生电感LS2 对测试结果的影响，测试点应该选择器件封装引脚底部g1、s1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJEQoLhedwdXZHK42sREe6FaHvFgMdxCN14ibBM0TTHbjouXBkhj4gVFA/640?wx_fmt=png&from=appmsg)

同样，测试SiC MOSFET 的漏源极电压时，测试点d1 与s1 之间电压为vds\_11，测试点d2 与s2 之间电压为vds\_22，两者之间存在关系

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJsicqyRdu6r0r9QniaTdAOpqibhCdwe3nlS2zQVzrIAvamOY2ial7mqDgLw/640?wx_fmt=png&from=appmsg)

式中，LD2 为封装漏极引脚上寄生电感。

电压vds\_22 与vds\_11 相比，多包含两段寄生电感LD2 和LS2 上电压。开关过程漏极电流变化，寄生电感LD2 和LS2 上产生电压降，造成vds\_11 和vds\_22 出现明显差别，如图12 所示。而测试点d1、s1 与封装内部漏极D 和源极S 最近，vds\_11 最能反应待测SiC MOSFET 漏源极电压vDS 的变化。综上，测试SiC MOSFET 的漏源极电压时，为避免寄生电感LD2 和LS2 对测试结果的影响，测试点应该选择器件封装引脚底部d1、s1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJEljIgWf6kWozkYECjrz6QrndVbOmBeXrVTCMJSibeFpN0DtR6j6p7nA/640?wx_fmt=png&from=appmsg)

测试SiC MOSFET 开关电流时，源极电流比漏极电流提前发生变化，如图13 所示。依据式（3）可知，栅极电流为SiC MOSFET 栅源极结电容CGS和栅漏极结电容 CGD 的充放电电流，在开关延迟阶段栅极电流急剧变化，源极电流也随之变化，而漏极电流不发生变化。所以测试漏极电流才可准确反映SiC MOSFET 的开关状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl871d66Zo7NUw3VFE6jcZJDm5O2284S6x1HTj0gu1DvsiaVVtk4JR25AiacpFhicoiac6Avo8kTwJAjw/640?wx_fmt=png&from=appmsg)

5. 结论

正确评估高速SiC MOSFET 开关特性的前提是测试结果的精确性。本文基于双脉冲测试平台，对SiC MOSFET 的精确测试方法展开研究，得到如下结论。

1）SiC MOSFET 电流变化率大，使电路中寄生电感对开关特性的影响突显。进行测试时需要合理设计双脉冲测试平台的PCB 布局，减小功率回路寄生电感。

2）SiC MOSFET 电压变化率大，使双脉冲测试电路中续流二极管和负载电感的寄生电容对开通过冲电流和开通损耗的影响突显。进行测试时选用结电容小的续流二极管，并且负载电感采用多电感串联，每个电感采用单层绕制的方式。

3）150MHz 带宽非隔离电压探头已不能满足高速SiC MOSFET 测试要求，需更高带宽设备。并且测试时应配合BNC 接头或接地弹簧。而开关电流的测试设备中最适宜使用同轴分流器，其次是电流采样变压器。测试结果中电压与电流波形之间相位延迟会对开通能量损耗和关断能量损耗的计算结果产生较大影响，所以应先校准设备再进行测试。

4）SiC MOSFET 封装上寄生参数不可忽略。测试栅源极电压和漏源极电压时测试点应选择器件封装引脚底部（靠近 SiC 芯片处）。测试SiC MOSFET开关电流时应选择在漏极。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)