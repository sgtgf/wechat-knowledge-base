# SiC MOSFET 的短路耐受时间分析及其基于 di/dt-PMOS 的短路保护


> 原文地址: [https://mp.weixin.qq.com/s/DxXjg3eMD0RTvSG7bAEf8w](https://mp.weixin.qq.com/s/DxXjg3eMD0RTvSG7bAEf8w)

文章来源：电工技术学报

作者：谢佳明 1魏金萧 2吴彬兵 1丰昊 1冉立 1（1. 输变电装备技术全国重点实验室（重庆大学）重庆 400044  2. 合肥工业大学电气与自动化学院合肥 230000）

摘要：为了提高SiC MOSFET的短路可靠性，在不同的母线电压、驱动电压、驱动电阻、主回路寄生电感以及栅极阈值电压参数下，对SiC MOSFET短路电流特性曲线进行测量，定量分析各个参数对短路电流的影响，为如何提高SiC MOSEFT的短路耐受时间提供解决思路。同时，由于SiC MOSFET的短路耐受时间决定着对其进行短路保护动作的最大时间，所以这些不同参数的设置直接影响着SiC MOSFET短路保护电路的设计。在传统SiC MOSFET短路保护策略中，利用开尔文源极与功率源极之间寄生电感产生的感应电压，配合RC滤波器进行短路保护，存在SiC  MOSFET在硬开关短路和负载短路中，触发短路保护动作阈值不一致的问题，即导致短路保护失败。针对此问题，提出基于di/dt\-PMOS的短路保护策略，保证了阈值的一致性。通过公式推导以 及实验验证了基于di/dt\-PMOS的SiC MOSFET短路保护策略的有效性。

关键词：SiC MOSFET 短路耐受时间短路保护开尔文源极驱动电路

0 引言

SiC MOSFET凭借其宽禁带、耐高温以及低开关损耗等诸多优点，在电力电子领域运用越来越广泛。但由于SiC MOSFET高电流密度以及较小的芯片面积，造成SiC MOSFET短路耐受能力极差，严重阻碍了SiC MOSFET的应用。SiC MOSFET短路类型主要分为两种：①硬开关短路（ Hard  Switching Fault, HSF）；②负载短路（Fault Under  Load, FUL）。以负载并联于上管的半桥电路为例，HSF为半桥电路中上管正常开通状态下，下管因故障突然开通，此时下管电流ids 从0 急剧上升至短路电流峰值，随着温度的升高，声子散射以及表面粗糙散射的增强，导致载流子迁移率降低，流过SiC  MOSFET的电流减小，ids 开始下降。下管的漏源电压vds 始终为供电电压Vdc，但由于主回路寄生电感的存在，vds 会在HSF 开关时刻产生波动。FUL与 HSF则正好相反，其为下管正常导通状态下，上管突然开通，此时ids从正常工作电流ids(on)急剧上升，后因温度上升导致载流子迁移率下降，ids下降。vds 从正常导通状态下的电压vds(on)上升至Vdc。

相比IGBT，由于SiC MOSFET 在短路期间更大的短路电流以及自身更小的芯片面积，造成其热应力较大，因而相应的短路耐受时间（Short Circuit  Withstand Time, SCWT）更短，短路故障对SiC  MOSFET威胁更大。有研究表明，相同情况下IGBT的SCWT 为10 μs，而SiC MOSFET仅为3 μs。 由于SiC MOSFET的SCWT主要与短路过程中产热大小有关，产热越大，SCWT越短，而产热的大小 取决于短路过程中短路电流的大小，影响短路电流大小的因素主要有母线电压vdc、驱动电压vg、驱动电阻Rg、主回路寄生电感Ls、壳温Tc 以及SiC  MOSFET的栅极阈值电压vth。

在上述影响短路电流大小的各因素中，已有学者研究了部分因素。其中文献\[16\]利用Si 基增强型MOSFET串接于SiC MOSFET源极，在导通电阻及开关损耗仅分别增加4.2%和13%情况下，短路耐受时间却增加了86%。然而Si MOSFETs 的选择方法使得电路设计者在实际应用中，尤其是在大容量和高电流应用中难以实施。文献\[17\]从电感限制短路 电流角度出发，改变封装结构，在SiC MOSFET 短路期间切换至电感更大的路径，短路电流峰值降低了20.07%，短路过程中总发热量降低了30.04%， 但该方法仅针对半桥模块，对于单管或并联模块并不适用。文献\[18\]从驱动电压角度出发，在SiC  MOSFET短路过程中降低驱动电压，将SiC MOSFET的短路耐受时间提升至10 μs，但该方案在漏极和源极之间引入了额外的电阻和电容，影响了器件的开关性能。上述学者虽然提出了一些拓宽SiC MOSFET短路耐受时间的方法，但分析较局限，所以有必要对所有因素进行全面分析。分析各个因素影响程度大小，为如何拓宽SiC MOSFET的SCWT 提供解决办法，并针对SiC MOSFET提出更快速、准确的短路保护策略。 

SiC MOSFET的短路保护策略有很多，主要分为以下几大类。

（1）工业界运用最为广泛的为退饱和短路保护方案，其原理是在SiC MOSFET开通阶段，检测其vds 大小作为是否发生短路的判据。然而，退饱和短路保护方案为了避免受到dvds/dt 造成的误触发，必须设置检测盲区。如Wolfspeed公司的PT62SCMD17的检测盲区时间为1μs，检测盲区的存在致使该种方案无法做到短路保护的快速性，现市面成熟的退饱和短路保护方案芯片保护时间均在μs级。鉴于该缺点，Ouyang Wenyuan 等利用SiC MOSFET开尔文源极与功率源极之间的寄生电感Lss 在dids/dt 产生的感应电压作为检测vds的前级条件，虽较好地避免了退饱和短路保护方案的缺陷，但此种策略应用范围较为受限，仅针对拥有开尔文引脚封装的SiC MOSFET。

（2）米勒平台的检测，由于在HSF 时，SiC  MOSFET开通过程中不存在米勒平台，即开通过程中驱动输入的电荷量更小，所以通过检测SiC  MOSFET开通过程中的电荷量来判断米勒平台是否存在，进而判断是否发生HSF。但此种方法无法判断FUL，同时由于电荷量差异较小，具体实现电路相当复杂，该种方法运用范围最窄。

（3）利用电流传感器直接监测SiC MOSFET的工作电流，当电流超过设置的保护阈值时，即可判断为发生短路。其中电流传感器最为常见的是PCB罗氏线圈。然而，为了防止其他干扰，PCB罗氏线圈需要精心设计，并且PCB罗氏线圈的线圈匝数与测量带宽呈正相关，更多的匝数会严重影响其抗扰动性能，可能导致短路保护电路的误触发。 此外，PCB罗氏线圈的信号还原电路实现较为复杂， 严重阻碍了该方法的应用。另外，独特的电流传感器为隧道磁阻（Tunnel Magnetoresistance, TMR），TMR的电阻随磁通密度变化而变化，所以可以通过使用环形TMR 电流传感器来监测电流，但是这种方法仅局限于半桥或者全桥模块中，无法应用于单个的SiC MOSFET。

（4）di/dt 检测方法，利用SiC MOSFET 在正常开通过程和短路过程中，开尔文源极与功率源极之间Lss 产生的感应电压vss的不同来判断短路事件的发生。该方案对寄生电感引起的噪声特别敏感， 所以通常会配合一组RC低通滤波电路使用（即di/dt\-RC 检测），vss 给低通滤波器中电容C充电， 通过C的电压与所设的短路阈值电压相比较判断短路事件。但由于SiC MOSFET在正常工作时，C会 放电，造成HSF和FUL在C的短路阈值电压不一致，即FUL 触发短路保护动作时，短路电流会远大于HSF的短路电流，同时还需要为C设计繁琐的复位电路，这些缺陷严重限制了该种方案的推广使用。

受上述内容的启发，针对传统di/dt\-RC存在的缺陷，本文提出一种基于di/dt\-PMOS的SiC  MOSFET短路保护策略，利用PMOS中寄生二极管的单向导电性，阻碍C在SiC MOSFET正常工作时放电，同时利用PMOS在栅极为负压时的导通特性，为电容进行复位操作，省去了繁琐的复位电路设计， 降低了保护电路的复杂性。

本文首先对SiC MOSFET 在不同的vdc、vg、Rg、Ls、Tc 以及vth下短路电流特性进行测量和分析，为如何拓宽SCWT 提供参考思路；其次对本文提出的di/dt\-PMOS短路保护策略原理进行阐述，并对两种短路类型进行实测，对比di/dt\-PMOS 较传统di/dtRC的优点；最后对全文进行总结。

1 SiC MOSFET 短路电流特性分析

影响SiC MOSFET 短路电流特性因素主要包括vdc、vg、Rg、Tc、vth 以及Ls。这些因素对短路电流特性影响程度存在差异，所以有必要对这些因素进行定量分析，以HSF为例，探究每个参数的变化率对ids 影响程度大小。

如果忽略了功率回路的寄生电感，vds近似等于总线电压，则电流变化过程可以近似为

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_000_7d62c66cabf4.png)

式中，gm 为SiC MOSFET的跨导，它与阈值电压vth和跨导系数β有关；vgs为SiC MOSFET 栅源极电压。vth 可表示为

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_001_d724a05976ad.png)

式中，εs为介电常数；k 为玻耳兹曼常数；T为开尔文温度；q 为电子电荷；NA 为掺杂浓度；ni 为本征载流子浓度；Cox 为氧化层电容；Qox 为氧化层总 有效电荷。vth主要由Qox、NA 和Cox决定。其中Qox主要包括可移动离子电荷、氧化层陷阱电荷、固定氧化层电荷和界面态电荷。这些差异由阻挡氧化层 厚度的Cox决定。 SiC MOSFET的vgs 可表示为

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_002_63fbc7f6a5aa.png)

式中，Ciss 为输入电容。 

SiC MOSFET的vgs 还可表示为

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_003_0cb6c96b8516.png)

尽管SiC MOSFET 在不同短路故障下的短路特性存在差异，但短路特性分析方法较为相似，所以本文只对其中一种短路故障进行分析。以HSF为例，本文选用Wolfspeed 公司生产的型号为C3M0280090D（900 V/10.2 A ）作为待测SiC  MOSFET，其短路电流特性随不同参数的变化分析如下。 

1）不同Ls 下的SiC MOSFET 短路电流特性

根据式（4）可知，Ls会影响SiC MOSFET的栅极电压大小，二者呈负相关。不同Ls 对应的ids差异如图 1 所示。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_004_1407d2b8ffbd.png)

随着Ls 的增加，ids 峰值逐渐下降， 其原因为电感对电流变化存在阻碍作用，较大的寄生电感会导致电流上升、时间延长，从而减小短路电流的峰值。另外寄生电感的增加，也会使其产生更大的感应电动势，该电动势的增加会降低器件漏源两端电压，进一步限制了电流峰值的增加。 

2）不同Rg 下的SiC MOSFET 短路电流特性

根据式（3）可知，Rg主要影响SiC MOSFET栅极电压 vgs 充放电速度，但由于该变量处于指数函数中，对vgs 影响很小，所以根据式（1）可知ids几乎不受影响。不同Rg 对应的ids 差异如图2 所示。 随着Rg 的增大，ids 峰值会略微下降，其主要原因为Rg 的增大会减小驱动电流，进而导致MOSFET 的导通程度降低，阻碍ids 的上升，但阻碍程度相当有限。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_005_37c6e9e07410.png)

3）不同Tc 下的SiC MOSFET 短路电流特性

不同Tc 对应的ids 差异如图3 所示。由图3 可知，随着Tc 的增加，ids 峰值逐渐下降，这正是由于SiC MOSFET的导通电阻具有正温度特性，温度越高导通电阻越大，ids 越小。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_006_ba1048f4ab8b.png)

4）不同vdc 下的SiC MOSFET 短路电流特性

不同vdc 对应的ids 差异如图4 所示。由图4 可知，随着vdc 的增加，ids 峰值逐渐增加，这点很好理解，根据欧姆定律，电压越大，电流越大。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_007_8ab20cdddf47.png)

5）不同vg 下的SiC MOSFET 短路电流特性

同时根据式（1）和式（4）可知，ids 与vg 呈正相关性。不同vg对应的ids差异如图5 所示，随着vg 的增加，ids 峰值逐渐增加。沟道宽度随着vg的增大而变宽，更宽的沟道意味着更小的导通电阻，从而允许更大的电流流过器件。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_008_ac540030b70c.png)

6）不同vth 下的SiC MOSFET 短路电流特性

选用同一型号但不同的vth 的SiC MOSFET做对比，不同vth对应的ids差异如图6 所示，定量层面解释见式（1），随着vth的增加，ids峰值逐渐减小。 物理层面解释则为越高的vth 意味着需要更高的vg才能使SiC MOSFET沟道打开，因此在相同的vg情况下，高的vth对应的SiC MOSFET沟道导通程度小于低的vth，即vth 越大，ids 峰值越小。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_009_13f3257cc154.png)

7）不同参数对ids 影响程度大小

综上定量分析，各个参数变化量对ids 峰值的影响程度如图7 所示。从图7 中可看出，在众多变量中，vg对SiC MOSFET短路电流影响程度最大，vg变化 66.70%时，ids 峰值变化138%，Rg 影响最小；Rg 变化1000%时，ids 峰值几乎无变化，这对如何增强SiC MOSFET的SCWT 提供了解决思路，即在短路时减小vg，抑制ids的增大，进而增强SiC MOSFET的短路耐受时间。

  

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_010_f68e7b6296cf.png)

2 di/dt\-PMOS 方法原理

2.1 TO\-247\-4封装的SiC MOSFET正常开通和短路波形 

TO-247-4封装的SiC MOSFET由于引入了开尔文引脚，可以减小驱动回路的寄生电感，提高开关速度，减小栅极电压的波动，降低开关损耗。在开尔文源极与功率源极之间存在寄生电感Lss，该Lss在SiC MOSFET 开通瞬态会产生相应的感应电压vss，传统基于di/dt\-RC 的短路保护策略正是利用了该感应电压来判断短路事件是否发生。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_011_3ee99a3c6608.png)

TO-247-4封装的SiC MOSFET正常开通状态波形、HSF波形以及FUL波形如图8～图10 所示。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_012_832d34dedd4d.png)

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_013_45e5b6389004.png)

  

2.2 传统di/dt\-RC短路保护原理及其存在的问题

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_014_3ad9258c2e64.png)

传统di/dt\-RC短路保护策略电路如图11 所示， 主要包括待测器件（Device Under Test, DUT）、RC积分电路、比较器电路、SR锁存器电路以及DUT关断电路。 RC 积分电路主要包括一个RC低通滤波器用于执行积分，目的是为了在短路故障期间，利用电容电压表征ids，由于SRfCf≫1，所以此时高频传递函数可表示为

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_015_5f95f08fb152.png)

式中，Rf、Cf、vCf(s)分别为阻值、容值、RC滤波器输出的电压。因而vCf(s)存储了ids(s)在短路状态中的值。当DUT 发生短路时，vCf 作为比较器电路的输入，与所设的短路阈值电压vthsc 相比较，若vCf＜vthsc，比较器输出相应的短路信号，该信号经SR锁存器电路锁存，控制Soff 导通，PWM 信号经Soff及 Roff 拉至−VEE，DUT 关断，完成短路保护。

传统di/dt\-RC 理论波形如图12 所示。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_016_dd7836f7aafc.png)

传统di/dt\-RC 短路保护策略虽然可以将vss 存储起来，并且根据vCf 的大小推断出ids 的值，但是该方法存在缺陷，即HSF和FUL两种状态下触发短路信号的阈值不一致。具体原因分析如下：

（1）HSF情况。t1：DUT 发生HSF，ids 急剧上升，巨大的dids/dt 致使vCf 急剧上升；t2：vCf\=vthsc,  ids\=ids(HSF)，比较器输出短路保护信号。

（2）FUL情况。t1：DUT 正常开通，ids 从0 上升至正常工作电流ids(on)，由于此时的dids/dt 远小于短路状态，vCf 虽急剧上升但峰值远未达到vthsc；t2：ids趋于平稳，Cf 逐渐放电，vCf 逐渐下降；t3：vCf 下降至0；t4：发生FUL，ids 从ids(on)急剧上升，vCf从0急剧上升；t5：vCf\=vthsc, ids\=ids(FUL)，比较器输出短路保护信号。

从上述分析可知，由于DUT 正常导通状态，Cf 放电，致使FUL发生时，vCf 从0 上升至vthsc，造成ids(FUL)＞ids(HSF)。

综上分析可知，传统di/dt\-RC 短路保护策略无法在HSF和FUL状态下，使得触发短路保护信号时ids(FUL)\=ids(HSF)，存在短路保护失效风险。针对该问题有两种解决办法：①针对HSF和FUL分别设置两个不同的短路保护阈值电压，即FUL的短路保护阈值电压要小于HSF状态时；②设计合理电路， 阻碍Cf 在正常工作状态下放电。设计两个不同的短路保护阈值意味着需要多个比较器及其配套的阈值 电压电路，电路繁杂。所以本文所提出的di/dt\-PMOS原理基于第②种方法。

2.3 本文所提出的di/dt\-PMOS 原理分析

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_017_3f384e7a6f15.png)

图13 所示为本文所提出的di/dt\-PMOS 短路保护策略原理，其中主要包括DUT、RC 积分电路、 比较器电路、数字隔离、SR 锁存电路以及DUT 关 断电路。其与传统di/dt\-RC 保护策略不同之处在于本策略在RC 积分电路与Lss之间串联了一个PMOS器件Sp，利用PMOS 中寄生二极管的单向导电性阻碍Cf 的放电，并且在DUT 处于关断状态时，DUT驱动为负压，PMOS导通对Cf 进行放电复位。

本文所提出的di/dt\-PMOS理论波形如图14 所示。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_018_d0384a626737.png)

具体原理分析如下：

（1）HSF 情况。t1：DUT 发生HSF，ids 急剧上升，巨大的dids/dt致使vCf 急剧上升；t2：vCf\=vthsc，ids\=ids(HSF)，比较器输出短路保护信号。

（2）FUL 情况。t1：DUT 正常开通，ids 从0 上升至正常工作电流 ids(on)，由于此时的dids/dt 远小于短路状态，vCf 虽急剧上升但峰值远未达到vthsc；t2：ids 趋于平稳，由于PMOS 管中寄生二极管的单向导电性Cf 不放电，vCf\=vCf1 保持不变；t3：vCf 保持不变；t4：发生FUL，ids 从ids(on)急剧上升，vCf 从vCf1急剧上升；t5：vCf\=vthsc, ids\=ids(FUL)，比较器输出短路 保护信号。

从上述分析可知，由于DUT 正常导通状态，PMOS中寄生二极管阻碍了Cf 放电，因而FUL 发生时，vCf 从vCf1 上升至vthsc，使得ids(FUL)≈ids(HSF)。

3 实验参数设置及实测结果对比分析

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_019_6d0226da05ef.png)

实验测试板结构框图如图15 所示，为常见的半桥电路，Cdc为储能电容，下管为DUT，di/dt\-PMOS保护策略作用于DUT上，为了保证安全且不影响DUT短路性能，上管选用额定电压及电流远大于DUT的IGBT。控制IGBT 及DUT 的开关时序即可模拟出HSF 和FUL 两种状态。测试平台如图16所示。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_020_a25d7c17226b.png)

本实验中各参数选择为Cf\=470pF，Rf\=330Ω，vthsc\=−2V。DUT选用Wolfspeed生产的型号为C3M0075120K（1200V/30A），IGBT选用CRMICRO生产的型号为CRG40T120AK3S（1200V/80A）。直流母线电压设置为600 V，SiC MOSFET 初始结温设置为25℃。

3.1 HSF 实测波形分析

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_021_134289ac01ee.png)

图17所示为传统di/dt\-RC的HSF实测波形。t1 时刻，发生HSF，ids 急剧上升。t2 时刻，vCf\=−2 V，ids\=55A，此时比较器电路触发短路信号，该信号经数字隔离 SR锁存电路以及DUT关断电路，造成一定的延时至t3时刻，DUT关断，短路保护完成。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_022_21b27d75cddb.png)

图18 所示为di/dt\-PMOS 的HSF实测波形。 当vCf\=−2V 时，ids\=60A，保护过程与传统di/dt\-RC一致。

3.2 FUL 实测波形分析

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_023_5c650ebe2989.png)

图19 所示为传统di/dt\-RC的FUL实测波形。t1时刻，DUT正常导通，ids 从0 上升至ids(on)，vss 给Cf 充电，vCf 从0 下降为一定负值。经过很短时间后ids 稳定于ids(on)，vss\=0，Cf 放电，vCf 逐渐趋于0。t2时刻发生FUL，ids 从ids(on)急剧上升，vCf 从0急剧下降。t3 时刻，当vCf\=−2 V时，ids\=78 A，信号经数字隔离SR 锁存电路以及DUT关断电路，造成一定的延时至t4 时刻，DUT关断，短路保护完成。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_024_224e4cc1a18e.png)

图20 所示为di/dt\-PMOS的FUL实测波形。t1时刻，DUT正常开通，ids 从0 上升至ids(on)，vss 给Cf 充电，vCf 从0 下降为一定负值，但由于PMOS中寄生二极管的单向导电性，阻碍Cf 放电，vCf 保持不变。t2 时刻，发生FUL，ids 从ids(on)急剧上升，vCf 急剧下降。t3 时刻，vCf\=−2V 时，ids\=62 A。信号经数字隔离SR 锁存电路以及DUT关断电路，造成一定的延时至t4 时刻，DUT关断，短路保护完成。

由上述实测结果分析可知，在直流母线电压为600V，初始结温为25℃情况下，传统di/dt\-RC 短路保护策略中，HSF和FUL二者值相差23A，相差率达42%，而本文提出的di/dt\-PMOS 短路保护策略在相同情况下，HSF和FUL二者差值仅为2 A， 相差率也仅为3.3%。由于器件的导通及静态特性均受结温影响，考虑本文所提策略的普适性，将SiC  MOSFET初始结温加热至125℃并再次进行实验， 结果显示di/dt\-RC 保护策略相差率为42%，di/dtPMOS保护策略为5%。对比可知，初始结温对di/dtPMOS保护策略影响可忽略不计。不同初始结温下两种保护策略数据对比见表1。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_025_4af47101c084.png)

初始结温设置为25℃，直流母线电压设置为500V 并再次进行实验，结果显示di/dt\-RC 保护策略相差率为40%，di/dt\-PMOS保护策略为7%。对比可知，di/dt\-PMOS 短路保护策略性能远胜于传统di/dt\-RC短路保护策略，且普适性强。不同直流母线电压下两种保护策略数据对比见表2。

![](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_026_01f2e2b68ab8.png)

在极端HSF 状况下，vss 最大不超过10V，Cf充放电峰值电流不超过30mA，绝大多数PMOS 都能承受这个量级的电压和电流。且在正常开关状态下vss 更远小于10V，对PMOS的危害可忽略不计。

4 结论

本文首先研究了SiC MOSFET在不同vth、Rg、Tc、vg、Ls 以及vdc 参数下的短路电流特性，并通过实测定量分析了各个变量对ids的影响，这对如何提高SiC MOSFET 的SCWT有着至关重要的参考作用；然后对SiC MOSFET传统di/dt\-RC短路保护策略存在的问题进行了分析，针对该问题提出两种相应的解决思路；最后就其中一种解决思路创造性地提出了基于di/dt\-PMOS的SiC MOSFET短路保护策略，利用PMOS管内寄生的二极管完美地解决传统di/dt\-RC 短路保护策略存在的问题，但di/dtPMOS适用范围仅限于开尔文封装的SiC MOSFET。 本文中所有实验表明： 

1）诸多参数会影响SiC MOSFET的短路电流特性，其中vdc、vg 与SiC MOSFET 短路的ids 峰值呈正相关，尤其vg 对ids 峰值的影响最大。因而在一 些扩宽SiC MOSFET的SCWT策略中，常常使用在检测到短路发生后，降低vg 的方案来抑制短路ids的上升，尽可能地增强 SiC MOSFET 短路耐受能力。  

2）其余Ls、vth、Tc、Rg 参数与SiC MOSFET短路ids 峰值呈负相关，其中Rg的影响最小，几乎可以忽略不计。 

3）基于di/dt\-PMOS的SiC MOSFET短路保护策略可有效解决传统di/dt\-RC存在的在HSF和FUL状态下不同短路保护阈值的问题。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_027_d5a6e1c24035.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images/img_028_c1cacdd2ef91.png)![图片](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\SiC_MOSFET_的短路耐受时间分析及其基于_di_dt_PMOS_的短路保护_images\img_000_60dad70c0cf9.png)