# 一种改进 SiC MOSFET 开关性能的有源驱动电路


> 原文地址: [https://mp.weixin.qq.com/s/PjrTMNYed9ldIF7GlRTFaA](https://mp.weixin.qq.com/s/PjrTMNYed9ldIF7GlRTFaA)

**文章来源：**中国电机工程学报

**作者：**李先允，卢乙，倪喜军，王书征，张宇，唐昕杰(南京工程学院，江苏省 南京市 211167)

**摘要：**与硅金属氧化物半导体场效应管(silicon metal oxide semiconductor field effect transistor，Si MOSFET)相比，碳化硅(silicon carbide，SiC) MOSFET 具有更高的击穿电压，更低的导通电阻，更快的开关速度和更高的工作温度，正被广泛应用于光伏逆变器、电动汽车和风力发电等领域，但是SiC MOSFET 的高开关速度会导致器件开关过程中发生电流、电压过冲和振荡，不仅会增加器件的开关损耗，甚至会导致器件损坏。文中首先对 SiC MOSFET 的开关过程进行详细分析，得出器件开关过程中电流、电压过冲和振荡的产生机理，然后根据影响电流、电压过冲和振荡的关键因数，设计一款有源驱动电路。该电路能够在器件开关的特定阶段内同时增加驱动电阻阻值和减小栅极电流，从而抑制器件开关过程中的电流、电压过冲和振荡。实验结果表明，与传统驱动电路相比，所设计的有源驱动电路能够在不同驱动电阻、负载电流和 SiC MOSFET 条件下，均有效抑制器件的电流、电压过冲和振荡。

**关键词：**碳化硅金属氧化物半导体场效应管；有源驱动电路；过冲；振荡

**0. 引言**

硅(silicon，Si)基半导体器件由于自身材料特性的限制，发展空间有限，难以满足电力电子器件日益增长的高开关频率、高功率密度和高工作温度等需求。与 Si 材料相比，SiC 材料具有很多优点，如：SiC 的临界击穿场强更高、禁带宽度更高且热导性更高。因此，相较于 Si MOSFET，以 SiC MOSFET为代表的SiC功率半导体器件更能够胜任高功率、高温的严苛环境，正被广泛应用于光伏逆变器、电动汽车和风力发电等领域。但是，SiC MOSFET 高开关速度所引起的大 dv/dt 和 di/dt，以及器件封装和应用回路中存在的寄生电感、电容等参数，会使器件在开关过程中发生电流、电压过冲和振荡，这不仅会增加器件的开关损耗和加剧电磁干扰，还可能会导致器件误导通，降低其可靠性，甚至损坏器件。

目前，主要采用以下 3 种方法来解决该问题：

1）优化 PCB 布局：通过优化 PCB 布局，可以有效减少 SiC MOSFET 应用电路中的寄生电感，从而抑制电流、电压过冲和振荡，但是，优化 PCB布局无法完全消除电路中的寄生参数，同时还需要考虑成本等问题。

2）增加驱动电阻阻值：通过增加驱动电阻阻值可以明显抑制器件开关过程中的电流、电压过冲和振荡，但该方法同时也会增加器件的开关时间和开关损耗。

3）增加 RC 缓冲电路：增加 RC 缓冲电路是实际应用中最常用的一种方法，其能够有效抑制器件开关过程中的电流、电压过冲和振荡，但是额外增加的电阻、电容等器件会产生额外的损耗并降低电路效率。

与上述 3 种方法相比，使用有源驱动电路(active gate driver，AGD)能够在增加较小 SiC MOSFET 开关损耗的前提下，有效抑制器件开关过程中的电流、电压过冲和振荡，因而受到越来越多的关注。文献\[22\]提出了一种电流注入型有源驱动电路，通过检测器件开关过程中漏极电流的变化率，能够在特定时间段内向器件栅极注入电流，实现在不减小器件开关速度的前提下，抑制电流、电压过冲，实验表明，在不同负载电流和寄生参数条件下，该有源驱动电路都能有效抑制电流、电压过冲，但无法抑制电流、电压振荡。文献\[23\]基于复杂可编程逻辑器件(complex programmable logic device，CPLD)设计了一款多级驱动电压有源驱动电路，通过优化驱动电路拓扑结构，实现在 SiC MOSFET 开关的不同阶段，采用不同的驱动电压进行器件驱动，从而抑制器件电流、电压过冲，实验结果表明，与传统驱动电路相比，该有源驱动电路能够平均降低 9.2%的器件开通电流过冲和 9.8%的关断电压过冲。但是该有源驱动电路成本昂贵且控制复杂，难以在工程中广泛使用。文献\[24\]提出了一种基于 CPLD 的多级驱动电阻有源驱动电路，通过同时检测器件的漏极电流和漏源极电压，将器件的开关过程分为八个阶段，能够在器件开关的各个阶段内投切不同的驱动电阻，从而抑制器件电流、电压过冲和振荡，实验结果表明，与传统驱动电路相比，该有源驱动电路能够平均降低 8%的器件开通电流过冲和 9.1%的关断电压过冲。但从文中分析可以看出，为了实现所提有源驱动电路的最佳效果，需首先测量电路中的寄生参数，并根据寄生参数调节有源驱动电路结构，增加了有源驱动电路的复杂性和实现难度。文献\[25\]提出了一种电压注入型有源驱动电路，通过在 SiC MOSFET 开关过程的特定阶段中向器件栅极注入电压来实现对器件电流、电压过冲和振荡的抑制，该电路结构简单且易于实现，但是文章中缺少对电路关键参数选取的理论分析。

针对上述问题，本文首先对 SiC MOSFET 开关过程进行详细分析，得出器件开关过程中电流、电压过冲和振荡的产生机理，然后根据影响电流、电压过冲和振荡的关键因数，设计一款有源驱动电路，该电路通过检测 SiC MOSFET 栅源极电压和漏极电流，能够在器件开关过程的特定阶段增加驱动电阻阻值并向器件栅极注入电流，从而有效抑制器件开关过程中的电流、电压过冲和振荡，最后对设计的电路进行实验验证。

**1\. SiC MOSFET 开关过程分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgS5e9qnmxiaB2GyEUHMk6h3W6kE6suuWqvutiaFlc25NyycgamibKPe6rQ/640?wx_fmt=png&from=appmsg)

采用图 1 所示的双脉冲测试电路，对 SiC MOSFET 的开关过程进行详细分析，得出器件开关过程中电流、电压过冲和振荡的产生机理。图 1 中：Vdc为直流母线电压；C 为滤波电容；L 为负载电感；Df为续流二极管；Rf、Lf和 Cf分别为续流二极管的寄生电阻、寄生电感和寄生电容；Cgd、Cgs 和 Cds分别为 SiC MOSFET 的栅漏极、栅源极和漏源极寄生电容；Lg、Ld 和 Ls 分别为 SiC MOSFET 的栅极、漏极和源极寄生电感；Lloop 和 Rstray分别为电路中的寄生电感和杂散电阻；Rg为 SiC MOSFET 的栅极驱动电阻。为简化分析，定义 SiC MOSFET 的输入电容 Ciss Cgd Cgs，输出电容 Coss Cgd Cds。

**1.1 SiC MOSFET 开通过程分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgLJXv3e9wR4XcugD2dgUarQQIE6MicBUAREFRamekcqaOiblhut3eOSiaw/640?wx_fmt=png&from=appmsg)

图 2 为 SiC MOSFET 开通过程中驱动电压 VG、栅源极电压 Vgs、漏极电流 id 和漏源极电压 Vds 的典型波形，由图 2 可知，SiC MOSFET 的开通过程可以分成 4 个阶段。

1）阶段 1\[t0—t1\]：t0时刻，驱动电压 VG从 Vee阶跃至 Vcc，栅源极电压 Vgs 逐渐上升并通过驱动电阻 Rg 为输入电容 Ciss 充电，该阶段内，Vgs 始终小于阈值电压 Vth，器件处于关断状态，Vgs 可由式(1)表示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslBBZHLvtHzVgZgrAFHFviaKcpIVwDBtVNoESwg7mH6NlaibxUvrA5OQUU3qrk5sLYLYFZxey4LC3Ng/640?wx_fmt=png&from=appmsg)

2）阶段 2\[t1—t2\]：t1 时刻，Vgs 上升至 Vth，器件开始导通，负载电流由续流二极管流向 SiC MOSFET，漏极电流 id 由 0 迅速上升，可由式(2)表示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgbeSyJ5AWHsgiabNFBPKRKcoumyzVA25DqtTNNuU0zAlV1emaXzCRf3Q/640?wx_fmt=png&from=appmsg)

式中 gfs为 SiC MOSFET 的跨导。

由于续流二极管中存储电荷的存在，当 id 上升至负载电流 iL时，其会进入反向恢复过程并产生反向恢复电流，反向恢复电流的最大值如式(3)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgySrsvEaPve3lJYrftYVJGvFchqJfxkDzGUiaic9axqUHLYX38qKj211w/640?wx_fmt=png&from=appmsg)

由于反向恢复电流的存在，id 会继续上升至d-peak，且 id 快速变化产生的大 di/dt 会在寄生电感上产生压降，导致器件漏源极电压 Vds 下降，如式(5)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg1eHacm7xACt3JUkeC2uSHhCAFoHv5VmgPOxyibWpCmYjkMZbINIRWaA/640?wx_fmt=png&from=appmsg)

3）阶段 3\[t2—t3\]：器件进入米勒平台，Vgs 保持为米勒电压 VMiller不变，id 由 id-peak下降至 iL并保持不变，续流二极管开始阻断电压，Vds 迅速下降至零并保持不变。

4）阶段 4\[t3—t4\]：Vgs 上升至 Vcc并保持不变，id 和 Vds 均保持恒定，SiC MOSFET 于 t4 时刻完全导通。

**1.2 SiC MOSFET 关断过程分析**

图 3 为 SiC MOSFET 关断过程中驱动电压 VG、栅源极电压 Vgs、漏极电流 id 和漏源极电压 Vds 的典型波形，由图 3 可以得出，SiC MOSFET 的关断过程可以分成 4 个阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg1M5ffAGWh5Rdbl6bnQvp1agzc2mtHfCPjNJyj3uqu2rKhhWADKBFOQ/640?wx_fmt=png&from=appmsg)

1）阶段 5\[t5—t6\]：t5 时刻，VG由 Vcc阶跃至 Vee，Vgs 缓慢下降并通过 Rg 为 Ciss 放电，该阶段内，SiC MOSFET 仍处于导通状态。

2）阶段 6\[t6—t7\]：器件进入米勒平台，Vgs 保持为 VMiller不变，Vds 开始上升并于 t7时刻上升至直流母线电压 Vdc。

3）阶段 7\[t7—t8\]：t7 时刻，续流二极管停止阻断电压，负载电流开始由 SiC MOSFET 转移至续流二极管，id 迅速下降，电流的快速变化会在寄生电感两端产生压降，并会在 SiC MOSFET 上产生额外应力，导致 Vds 发生过冲，由式(5)可知，过冲电压Vos 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgfIRNsX7g3BY6jnFcAQPicMRPmD5DzENZNJxl36CjMom0gVy1KEfxdJg/640?wx_fmt=png&from=appmsg)

当 Vgs 下降至 Vth 时，该阶段结束。

4）阶段 8\[t8—t9\]：Vgs 由 Vth 下降至 Vee，SiC MOSFET 于 t8 时刻完全关断，由于电路中杂散电阻 Rstray的存在，电压过冲 Vos 会发生衰减振荡，如式(7)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgt4icIsRiaDBM4icHU6uzoM3KnCKeVUgWUcK1qHrWXCmF60lHKibtaGZ3Yg/640?wx_fmt=png&from=appmsg)

**2. 有源驱动电路**

由 1 节的分析可知，在 SiC MOSFET 导通过程

的阶段 2—3 内，由于续流二极管中反向恢复电流的存在，漏极电流 id 会发生过冲，由式(3)可以得出，该电流过冲峰值与 Qrr、S 和 did/dt 有关，当续流二极管选定时，Qrr 和 S 固定不变，故只能通过减小did/dt 来减小电流过冲，又由式(4)可知，增加驱动电阻 Rg 或减小栅极电流 ig 均可以减小 did/dt，因此，可以通过增加驱动电阻 Rg 和减小栅极电流 ig 来抑制器件开通过程中的电流过冲。在 SiC MOSFET 关断过程的阶段 6—7 内，由于电流 id 的迅速变化，以及电路中杂散电阻 Rstray的存在，SiC MOSFET 上会产生额外应力，漏源极电压 Vds 会发生过冲和振荡，由式(6)、(7)可知，通过减小 did/dt 可以减小电压过冲和振荡，与开通过程类似，同样可以通过增加驱动电阻 Rg 和减小栅极电流 ig 来抑制器件关断过程中的电压过冲和振荡。

基于上述分析，本文设计一款有源驱动电路，能够在 SiC MOSFET 开关过程的特定阶段内增加驱动电阻 Rg和减小栅极电流 ig，其他开关阶段内表现为传统驱动电路，实现在增加一定开关损耗的基础上，有效抑制器件开关过程中的电流、电压过冲和振荡。图 4 为设计的有源驱动电路原理图，该有源驱动电路共包括 4 个部分：检测电路、脉冲产生电路、电流注入电路和驱动电阻电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgicaiaylOqkoLX9pvPGrAz95uPqlsjyT8AhWgnQY9ArzAiagcia8bl6AeibQ/640?wx_fmt=png&from=appmsg)

1）检测电路：为了保证有源驱动电路动作时间的准确性，所设计的检测电路包括栅源极电压 Vgs检测电路和漏极电流 id 检测电路。其中，Vgs 检测电路由 2 个分压电阻和一个电容组成，分别和器件的栅、源极相连。id 检测电路通过在器件源极串联一个电阻 R6 将电流信号转为电压信号，并通过 2个分压电阻和一个电容进行测量。为了尽可能减小对 SiC MOSFET 开关特性的影响，选用低值电阻R6 检测电流 id。当仅采用 Vgs 检测电路时，器件开关过程中的信号抖动可能会造成电路误动作，从而影响有源驱动电路动作时间的准确性，引入 id检测电路可有效避免该现象的发生。取 R4  15k，R5 5k，R6  0.5，R7  10k，R8 的取值随负载电流的改变而改变，C1 C2  10pF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgqzq5fnvBYMibF1eBRGVehVMKt2vWsZlCTXeYHrxXTv0t20b6svLiaknA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgyPibMsm3Z6qd3fKYaibAJwKmwjIaxbgvw6kv9kezM2y5dGG6TMuAWIrQ/640?wx_fmt=png&from=appmsg)

2）脉冲产生电路：脉冲产生电路由 3 个电压比较器、2 个逻辑门和 2 个比例放大电路组成。将检测电路检测到的 Vgs 和 id 信号分别与参考电压Vref1、Vref2 和 Vref3 进行比较，能够在器件各开关阶段内产生不同的脉冲信号以控制后级电路。图 5 为电压比较器、逻辑门的输出脉冲和 SiC MOSFET 的开关波形，由图 5 可知，电压比较器的参考电压Vref1—Vref3 决定了脉冲信号的作用时间和持续时间，如果参考电压值选取过大，则脉冲信号持续时间过短，电路无法达到预期效果，如果参考电压值选取过小，则脉冲信号持续时间过长，会增加器件的开关时间和开关损耗，甚至造成误触发。同时由于电路中电压比较器、逻辑门等器件引起的延时，Vref1—Vref3值的选取需要留有一定裕度。通过式(8)—(10)可以计算得出 Vref1—Vref3 的取值，表 1 给出了脉冲产生电路中各元器件的选型及引起的延时。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgPLFBaicJvFqQZCuImPSFqwxK1J2NoV2WJKmxTicnY8PKu9NCG265pDjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgotR8rewX9iawCqdD0l0IUnUXWibzVicDWpPlnjM1B3YtkZQlUFQT56y1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgMnX11zYuz8dK55QgtPQEiaZN3SuTiaO5wQfxbk05tGVY4VBHPJOEuICg/640?wx_fmt=png&from=appmsg)

式中：Vyd 为留取的电压裕度，取值为 1V；tdelay为脉冲产生电路中器件引起的总延时。

由于逻辑门的输出电压较小，无法直接驱动开关管，因此采用比例放大电路，将逻辑门的输出信号进行放大以控制开关管的通断。取 R11  R13 5k，R12  R14  20k，比例放大电路的输入输出关系由式(11)、(12)表示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgy31wxoQCjmjiaSfxluTzz06YUPcnfxOtKOqOl44GuCkNCjDibGqfrxuQ/640?wx_fmt=png&from=appmsg)

式中 VAND、VNAND 分别为“与”逻辑门和“与非”逻辑门的输出电压。

3）电流注入电路：使用二极管 D3、D4 使两条电流注入电路分别在器件开通和关断过程中发生作用，开关管 MOS3 和 MOS4 的通断由脉冲产生电路的输出脉冲 Vout1 控制。在图 5(a)所示的开通过程T1 阶段内，Vout1 为高电平，MOS3 导通，栅极电流ig 经 D3、R9和 MOS3 分流至地，此时栅极电流 ig 下降，其他开通阶段内，Vout1 均为低电平，MOS3 关断，电流注入电路不动作。在图 5(b)所示的关断过程 T2 阶段内，Vout1 为高电平，MOS4 导通，电流经MOS4、R10和 D4 注入器件栅极，其他关断阶段内，Vout1 均为低电平，MOS4 关断，电流注入电路不动作。取 R9  R10  6.3。

4）驱动电阻电路：二极管 D1、D2 将电阻 R2、R3 分为导通驱动电阻和关断驱动电阻。从图 5(a)可以得出，在开通过程的非 T1 阶段内，Vout2 为高电平，开关管 MOS1 和 MOS2 均导通，此时驱动电阻为 R1和 R2 并联。开通过程 T1阶段内，Vout2变为低电平，MOS1 关断，此时驱动电阻仅为 R1，驱动电阻阻值增加。关断过程与开通过程类似，在关断过程 T2阶段内，开关管 MOS2 关断，驱动电阻由 R1、R3并联驱动转为 R1 单独驱动，驱动电阻阻值增加，实现在器件开关的特定阶段内增加驱动电阻阻值，抑制电流、电压过冲和振荡。

**3. 实验验证**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgVENy2WpCy1tw01vCbohN2CzsR7SIPUn7XecVaSBg8HWmzQgYZpcJ5A/640?wx_fmt=png&from=appmsg)

根据图 4 所示的有源驱动电路原理图，搭建图 6 所示的硬件电路，对其进行实验验证，表 2 给出了所用的实验设备。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg9IyR6tTmC4bx8HSd6vWrsPmNiaD2yPZEnYgRQc3VtcvvJiaJ7f70juEA/640?wx_fmt=png&from=appmsg)

为了验证所提 AGD 与传统驱动电路(conventional gate driver，CGD)相比在改善器件电流、电压过冲和振荡方面的优势，分别在不同驱动电阻、负载电流和 SiC MOSFET 条件下进行多组对比实验，详细实验内容如下：

**3.1 不同驱动电阻实验**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgicRbyibhiboguhrrpLK2DpIMfOG1gnBiaDNaeCso9fouydrMj1vH4JXyTg/640?wx_fmt=png&from=appmsg)

通过改变驱动电阻阻值，对不同驱动电阻条件下 CGD 和 AGD 之间的 SiC MOSFET 开关特性进行对比，实验结果如图 7 所示，其中，直流母线电压为 400V，负载电流为 20A，驱动电阻阻值分别为 20、50 和 100，R8  20k，根据式(1)、(4)和式(8)—(10)可以计算得出不同驱动电阻阻值条件下，AGD 电路中电压比较器参考电压 Vref1—Vref3的取值，如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgvTRlVcHTJhmg11IDFgy9glxHN3icl1aymcRLGiaBv8QGic4u7mic0AZlgw/640?wx_fmt=png&from=appmsg)

图8为不同驱动电阻阻值条件下，CGD和AGD之间的 SiC MOSFET 开关损耗对比，表 4 对不同驱动条件下，器件的电流、电压过冲、振荡和总开关损耗进行了对比汇总。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGguVKSUTZsReVDKTM9LOONjw61ZQltOvNicicSpffUwcKQ8Bd6z1FC0icPg/640?wx_fmt=png&from=appmsg)

从表 4 可知，在相同驱动电阻阻值条件下，AGD 条件下电流、电压过冲和振荡要明显小于CGD，其中，电流过冲幅值平均下降 10.8%，振荡时间平均缩短 43.7%，电压过冲幅值平均下降6.8%，振荡时间平均缩短 38.6%，但同时，AGD 的总开关损耗比 CGD 平均增加 29.2%。当驱动电阻从 20增加至 100时，AGD 分别比 CGD 多37.4%、29.2%和 21.0%的开关损耗，可以得出，随着驱动电阻阻值的增加，AGD 比 CGD 增加的开关损耗比值逐渐减小。

从图 8 和表 4 可知，驱动电阻 50的 AGD 与驱动电阻 100的 CGD 对于器件开通过程电流过冲的抑制效果相近，但 CGD 比 AGD 多 13.8%的开通损耗，驱动电阻 20的 AGD 与驱动电阻 100的 CGD 对于器件关断过程电压过冲的抑制效果相近，但 CGD 比 AGD 多 17.8%的关断损耗。

因此，当CGD和AGD采用相同的驱动电阻时，AGD 能够在牺牲一定开关损耗的条件下，有效抑制器件的电流、电压过冲和振荡。当 CGD 和 AGD对器件开关过程中电流、电压过冲的抑制效果相当时，CGD 造成的开关损耗大于 AGD。

**3.2 不同负载电流实验**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgjppPVvpiacqFoRsCkDA2xC2UDkEM1h1XpzxGdRts8xJRo7ibJAAwABsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgdlaqBicXjx5wkdHUm1CUgh4CMkV3GTsJlK3tb8xUPIlWuGgynbWeQDQ/640?wx_fmt=png&from=appmsg)

通过改变负载电感大小，对不同负载电流条件下，CGD 和 AGD 的 SiC MOSFET 开关特性进行对比，实验结果如图 9、10 所示，其中直流母线电压为 400V，负载电流分别为 20、30 和 40A，驱动电阻阻值为 20，负载电流 20A 时，R8  20k，负载电流为 30 和 40A 时，R8  5k，根据式(1)、(4)和式(8)—(10)可计算得出不同负载电流条件下，电压比较器参考电压 Vref1—Vref3 的取值，如表 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgvtDTPNs19S65CAAm61suxC8H5ywib1WnAKPuU622Kfic8byZ1NIdr20g/640?wx_fmt=png&from=appmsg)

图 11 为不同负载电流条件下，CGD 和 AGD之间的 SiC MOSFET 开关损耗对比，表 6 对不同驱动条件下，器件的电流、电压过冲和总开关损耗进行了对比汇总。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGggxibntvnVmmSww7ybJicau2RfMCpn4Ehx2OZ1K8szPC5pZOgbamwwLUg/640?wx_fmt=png&from=appmsg)

从表 6 可知，在相同负载电流条件下，AGD条件下的电流、电压过冲和振荡要明显小于 CGD，随着负载电流的增加，CGD 条件下器件的开通电流平均过冲幅度为 31.35%，关断电压平均过冲幅度为33.75%，相应的，AGD 条件下器件的开通电流平均过冲幅度为 23.0%，关断电压平均过冲幅度为17.5%，但同时，AGD 的总开关损耗比 CGD 平均增加 28.8%。，当负载电流从 20A 上升至 40A 时，AGD 分别比 CGD 多 37.4%，27.4%和 21.6%的开关损耗，可以得出，随着负载电流的上升，AGD 比CGD 增加的开关损耗逐渐减小。

**3.3 不同 SiC MOSFET 实验**

为了进一步验证所提AGD 的通用性，采用ROHM公司的 SiC MOSFET(SCT2080KE)进行实验验证，实验结果如图 12 所示。图 12 中直流母线电压为 400V，负载电流 20A，驱动电阻 20，R8 20k，根据式(1)、(4)和式(8)—(10)可计算得出电压比较器参考电压 Vref1—Vref3 的取值，如表 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgx5QsMfobjM3HNdff4fWViayzQXuHwFC8YhkK3VJKOMV1ygydGibEdcsg/640?wx_fmt=png&from=appmsg)

从图 12 可知，当采用另一款 SiC MOSFET 时，相比于 CGD，所设计 AGD 仍然可以有效抑制器件开关过程中的电流、电压过冲和振荡，验证了所设计有源驱动电路的适用性。

综合上述实验结果可以得出，与传统驱动电路相比，本文提出的有源驱动电路，能够在增加一定开关损耗的基础上，有效抑制 SiC MOSFET 开关过程中的电流、电压过冲和振荡，在抑制效果相当的条件下，所提出的有源驱动电路所造成的开关损耗要低于传统驱动电路。同时，仅需要调节电路中的部分参数，所提出的有源驱动电路就可以有效应用于不同的驱动电阻、负载电流和 SiC MOSFET。

**4. 结论**

本文首先对 SiC MOSFET 开关过程进行理论分析，得出器件开关过程中电流、电压过冲和振荡的产生机理，并在此基础上设计了一款有源驱动电路，能够在器件开关过程的特定阶段增加驱动电阻阻值并向器件栅极注入电流，从而有效抑制器件开关过程中的电流、电压过冲和振荡，通过理论分析和实验验证，主要得出以下结论：

1）与现有的有源驱动电路相比，本文提出的有源驱动电路能够同时检测 SiC MOSFET 栅源极电压和漏极电流，能够避免因信号抖动而造成的电路误动作。

2）与现有的有源驱动电路控制单一变量不同，所提出的有源驱动电路可以同时控制驱动电阻和栅极电流 2 个变量，能够有效地抑制器件开关过程中电流、电压过冲和振荡。

3）所设计的有源驱动电路仅需调节电路中的部分参数，就可以有效抑制不同驱动电阻、负载电流和 SiC MOSFET 条件下器件开关过程中电流、电压过冲和振荡。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)