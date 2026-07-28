# 一种提高 SiC MOSFET 在高开关速率下栅极电压稳定性的驱动电路


> 原文地址: [https://mp.weixin.qq.com/s/5MOJpI0bUuJOQF0UYSTMdA](https://mp.weixin.qq.com/s/5MOJpI0bUuJOQF0UYSTMdA)

**文章来源：**电源学报

**作者：**邵天骢 1，郑琼林 1，李志君 2，黄波 2，刘建强 1（1．北京交通大学电气工程学院；2．泰科天润半导体科技（北京）有限公司）

**摘要：**高开关速率且栅极电压稳定的驱动是 SiC MOSFET 高频工作、进而实现功率变换系统小型化和轻量化的关键技术之一。针对如何在高开关速率下稳定驱动 SiC MOSFET，并实现可靠的短路保护，根据栅源电压干扰的传导特点，基于辅助器件的跨导增益构建负反馈控制回路，提出一种 SiC MOSFET 栅极驱动，进而研究揭示该驱动的短路保护策略。首先，基于跨导增益负反馈构造栅极驱动电路并分析其工作原理；其次，研究该驱动的串扰抑制能力与短路保护特性；最后，通过实验证明基于跨导增益负反馈的栅极驱动电路的可行性，及其在串扰抑制和短路保护中的有效性。

**关键词：**碳化硅；MOSFET；高开关速率；栅极驱动；短路保护

近年来，以碳化硅 SiC（silicon carbide）为代表的宽禁带半导体技术快速发展和商业化，为电力电子领域带来了技术革新的契机。一般而言，宽禁带材料的能隙、击穿电场、导热系数、电子迁移率和熔点都显著高于传统硅（Si）材料。采用碳化硅器件将提升开关速率，缩短开关过程中电压和电流的交叠时间，减小开关损耗，提升装置效率；在此基础上，通过进一步提高开关频率，可减小无源器件尺寸，降低变换器系统成本，提升装置的功率密度和性价比。碳化硅器件在体积和重量要求较高的电气化轨道交通，特别是高速铁路和城市轨道交通的电力牵引驱动系统的应用中有着显著优势。然而，碳化硅器件的开通、关断过程中，米勒电容被迫充、放电产生位移电流干扰栅极电压，高速率开关的碳化硅器件引起的栅极寄生振荡现象更为显著。

若无法提供足够稳定的栅极电压， 将导致系统降频工作，限制变换器系统的进一步高频化和小型化。因此，开关速率高且栅极电压稳定性强的栅极驱动，是高频高功率密度碳化硅应用中的关键技术。国内外学者对高开关速率条件下， 碳化硅器件的可靠稳定栅极驱动技术展开了深入研究。文献针对采用固定电阻的传统驱动， 研究了 SiC MOSFET 开关速率的关键限制因素， 研究结果为消除串扰并改进栅极驱动提供了重要依据；文献进一步分析传统驱动下，SiC MOSFET 的开关动态过程，通过实验对比提出了参数优化思路；文献研究了商业化程度较高的有源米勒钳位技术 AMC（active Miller clamp）， 其工作原理是在检测到栅极电应力高于钳位阈值后，主动使能在栅源极之间的辅助晶体管，将栅极直接钳位于负向偏置电压，然而，研究表明，有源米勒钳位技术在 dv/dt 低于 20 V/ns时，可以显著改善栅极寄生振荡，但是在 dv/dt 较高的情况下，对于栅极寄生振荡，尤其是对栅极电压负向尖峰的缓解作用有限；为进一步增强高开关速率条件下，SiC MOSFET 的栅极电压稳定性，文献提出了两种米勒电容耦合振荡抑制方法：栅极阻抗调节技术 GIR（gate impedance regulation）和栅极电压控制技术 GVC（gate voltage control），根据驱动信号规律预测栅极变化趋势，通过逻辑信号发生器控制栅极驱动中的辅助开关管，在开关瞬态过程中降低栅极阻抗从而钳位栅极电压，或在开关瞬态之前对栅源电容进行预充电从而反向抵消栅极的变化，dv/dt 可达 24.9 V/ns；在后续研究中，文献提出了智能栅极驱动器 IGD（intelligent gate drive），在不同的开关瞬态下，根据驱动信号规律预测栅极振荡趋势， 通过改变栅极电压和阻抗抑制串扰，降低栅极电应力，研究表明，在 dv/dt\=40 V/ns 时，IGD技术对串扰有明显抑制作用，然而，SiC MOSFET 的运行工况变化时，特别是在短路故障工况下，其开关动态也相应改变，根据固定规律预测栅极变化趋势易出现过补偿或欠补偿，影响前馈控制精度。因此，如何在高开关速率下稳定驱动 SiC MOSFET，并实现可靠的短路保护，仍是值得探索的问题。为此， 本文根据栅源电压干扰的传导特点，基于辅助器件的跨导增益构建负反馈控制回路，提出一种 SiC MOSFET 栅极驱动，进而研究揭示该驱动的短路保护策略，最后通过实验研究所提栅极驱动电路的可行性，及其在串扰抑制和短路保护中的有效性。

**1 基于跨导增益负反馈的栅极驱动电路**

SiC MOSFET 开关动作造成的脉冲电压干扰和脉冲电流干扰，通过米勒电容耦合到栅极，干扰栅源电压，形成串扰。根据这一特点，构造基于跨导增益的负反馈调节机制， 如图 1 所示。采用普通 SiCMOSFET 的驱动芯片，在被控 SiC 功率 MOSFET QN栅极附近增加 1 个辅助 MOSFET QP。为了实现负反馈， 辅助 MOSFET QP 的沟道特性应当与被控 SiC MOSFET QN 互补。一般情况下， 功率 MOSFET QN为 N 沟道，因此，辅助 MOSFET QP 应当为 P 沟道。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fLqtd4FrSJf0M83CibrPMRqMxs7MwF0oFP2jvRweA7WkjKohZ6EEniasQ/640?wx_fmt=png&from=appmsg)

除辅助 MOSFET 之外，普通 SiC MOSFET 驱动芯片输出信号， 经过驱动电阻 R 和辅助电容 C 构成的无源网络后，得到 v\* GS作为栅源极的参考信号。驱 动 电 阻 R 和 辅 助 电 容 C 用 于 调 节 被 控 SiC MOSFET 的开关速度。在功能上，辅助电容 C 可缩小驱动芯片、辅助 MOSFET 和被控 SiC MOSFET 栅源极三者构成的回路面积，实现驱动回路的高频解耦；驱动电阻 R 可限制驱动芯片对辅助电容 C 的充、放电电流大小，起限流和保护的作用。需要指出的是，基于跨导增益负反馈的栅极驱动电路不依赖额外的电路，仅采用普通 SiC MOSFET 的驱动芯片和驱动电阻 R，外加辅助 MOSFET 和辅助电容 C 即可实现。

以图 1 所示电路为例，闭环负反馈控制器栅极电压的跨导增益负反馈机理如图 2 所示。记被控SiC MOSFET 的栅极电压为 vGS，驱动电压为v\* GS。驱动电压 v\* GS作为栅源极的参考信号， 输入栅极负反馈控制回路。参考信号与被控 SiC MOSFET 的栅源电压 vGS 之差，通过辅助 MOSFET 的跨导增益gm，控制被控 SiC MOSFET 输入电容 Ciss 和栅极内电阻 Rg共同构成的被控对象。外界脉冲电压和脉冲电流的干扰 n（s），通过米勒电容产生位移电流，对被控SiC MOSFET 的 Ciss 充、 放电， 对栅源电压形成干扰。因此，图 2 中栅源电压干扰的传导特点可以归纳为：SiC MOSFET 开关动作造成的脉冲电压干扰和脉冲电流干扰，通过米勒电容耦合到栅极，干扰栅源电压，形成串扰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fGlLupbrMr5QxRKwyiaEmA0vMCOfwyWusFb6jMfVFa6LWV7TtO4x7Taw/640?wx_fmt=png&from=appmsg)

根据栅源电压干扰的传导特点，构造基于跨导增益的负反馈调节机制。图 2 中，在引入负反馈控制后，若 vGS 增大（或减小），则其与参考值 v\* GS之差增大，经过驱动管跨导增益的调节，对输入电容 Ciss放电（或充电），vGS 恢复稳定。栅极负反馈控制的目标是让被控 SiC MOSFET 的栅源电压 vGS 跟踪驱动信号 v\* GS的变化， 并屏蔽脉冲电压和脉冲电流的干扰 n（s）。

图 3 展示了用于桥臂结构的基于跨导增益负反馈的驱动电路。图中，R1 和 R2 分别为上管和下管的驱动电阻，C1 和 C2 分别为上管和下管的辅助电容，QP1 和 QP2 分别为上管和下管的辅助 MOSFET。桥臂上管 QH 作为主动管，在脉冲控制信号 S1 的控制下开通、关断；桥臂下管 QL 作为被动管，其控制信号 S2 一直处于低电平，QL 沟道关断，仅用其寄生体二极管续流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fOVXsibs7ibLgK8SIg2tE74uKAsVglblcDYrs0LM61ScpGDaWj06Sntvw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的米勒电容 CgdH 和 CgdL 随着漏源电压的增大而降低。为了方便揭示基于跨导增益负反馈的栅极驱动电路的工作原理，本文引入分段线性化的近似曲线，拟合实际曲线。当漏源电压大于栅源电压时，CgdH 和 CgdL 的值为 Cgd1；当漏源电压小于栅源电压时，CgdH 和 CgdL 的值为 Cgd2。桥臂中点输出电流，在 1 个开关周期中，近似恒定，因此以恒流源表示为 IL，记桥臂上的直流电压为 VDC。图 4（a）和（b）分别展示了图 3 所示电路中 QH 开通和关断的动态过程的理论波形。分别以 S1 从低电平变为高电平的时刻和 S1 从高电平变为低电平的时刻为初始时刻，2 个动态过程分别有以下 4 个主要模态。

开通模态 1：开通延迟阶段 td（on）。0 时刻，S1 从低电平变为高电平， 驱动芯片通过 R1 为 C1 充电，驱动电压 v\* GS1增大，逐渐开始从 VEE1 上升。由于图 2所示负反馈机制，QH 的栅源电压 vGS1 跟随 v\* GS1变化，也逐渐增大。该模态中，由于 vGS1 尚小于阈值电压VGS,th，QH 的沟道处于关断状态，iD1=0。vDS1 处于 VDC 不变，当 vGS1 上升到达 VGS,th 时，该模态结束。

开通模态 2：电流上升阶段 tri。vGS1 从阈值电压VGS,th 开始，升高到 VGS,IL，表示可以维持沟道电流为IL 的 vGS1。vDS1 处于 VDC 不变。QH 的电流 iD1从 0 开始上升至 IL。该过程中，由于被动管电流 iD2的降低，QL的栅源电压 vGS2 产生微小上升， 但不足以触发 QP2导通。在忽略 QL 寄生体二极管反向恢复的条件下，该模态在电流上升至 IL 的时刻结束。

开通模态 3：电压下降阶段 tfv1。普通驱动电路情况下，将进入米勒平台，栅源电压维持在VGS，IL 不变。但采用栅极负反馈驱动的 SiC MOSFET，由于图2 所示负反馈机制的存在，QH 的栅源电压 vGS1 仍然跟随 v\* GS1一起升高，不会维持在 VGS，IL 不变。在该模态中，vDS1 从 VDC 开始下降，由于漏源电压仍然大于栅源电压，CgdH 依旧相对较小（Cgd1），该阶段 vDS1 下降速度相对较快。QL 的漏源电压 vDS2 迅速上升，因而 QL 的栅源电压 vGS2 受到干扰继续上升；由于图 2所示负反馈机制的存在，当 QP2 的源极 SP2 的电位高于 QP2 的漏极 DP2 的电位， 且电位差超过阈值电压Vth 时，QP2 沟道导通， 驱动芯片通过 QP2 沟道为 QL输入电容 CissL 放电，QL 的栅源电压 vGS2 减小， 干扰得到抑制，vGS2 又回到 VEE2。当 vDS1 下降到与 vGS1 相等时，该模态结束。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fgvt46S0HoWzBD7jZO1WBjDjeH1iaGVGEqmJQzxIKGfsCtZic133BywNg/640?wx_fmt=png&from=appmsg)

开通模态 4：电压下降阶段 tfv2。由于图 2 所示负反馈机制的存在，QH 的栅源电压 vGS1 仍然跟随 v\* GS1一起升高，不会维持在 VGS,IL 不变。vDS1 继续下降，由于漏源电压小于栅源电压，CgdH 相对较大（Cgd2），该阶段 vDS1 下降速度相对较慢。当 vDS1 下降到 VDS（on）时，该模态结束。

开通模态 4 之后，由于图 2 所示负反馈机制的存在，QH 的栅源电压 vGS1 仍然跟随 v\* GS1一起升高到高电平 VCC1，最终完成开通过程。关断模态与开通模态类似，本文不再赘述。

**2  串扰抑制分析**

为方便说明栅极负反馈驱动的数学本质，本文做两处简化处理：一是，近似认为辅助 MOSFET QP的跨导到增益是非时变的常数 gm，且寄生体二极管的反向跨导增益（定义为寄生体二极管的输出特性曲线斜率）也采用 gm 表示；二是，记辅助 MOSFET QP 寄生体二极管的导通阈值电压和 QP 沟道的导通阈值电压相等，均用 Vth 表示。

由图 2 可知，图 1 所示基于跨导增益负反馈的栅极驱动电路的闭环传递函数 Gd（s）和干扰信号 n（s）对栅源电压 vGS 干扰的传递函数 Gn（s）分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fBXdvmFb6V58Qtuuial240ZhHiansLvHicBlP7bYTrzSoysp2GfPticVBsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fSaiac4QBAURu9pJeIScrPVWE6hOQfyk6Uib3Mf2TrEDBHqUWibzSM0mZg/640?wx_fmt=png&from=appmsg)

**3  短路保护设计**

本文基于退饱和检测原理，研究所提驱动的短路保护。在所提驱动的短路保护电路中，退饱和检测电路由检测二极管和限流电阻等元器件构成，如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fj45Be1IERY9dUmMrTPOPTyWjIiaPXUicibHc4QI2hiaDbqiaz8icReiaBQjQw/640?wx_fmt=png&from=appmsg)

图 5（a）是短路保护电路的电路。为防止保护电路在 SiC MOSFET 开通过程中， 出现漏源电压没有降低到保护阈值电压之下，便引发误动作的情况，驱动芯片内置恒流源 IDESAT 与电容 CDESAT 构成消隐电路。图 5（b）是短路保护电路的原理波形。以硬开关短路为例，介绍短路保护电路的工作原理。

保护模态 1（t0 时刻之前）：当驱动信号 S 为低电平时，芯片内置开关 SDESAT 导通，CDESAT 上的电压 vDESAT被钳位在低电平， 短路保护信号输出保持在低电平不报错。

保护模态 2\[t0，t1\]：t0 时刻，当驱动信号 S 为高电平时， 芯片内置开关 SDESAT 断开， 芯片内置恒流源IDESAT 为电容 CDESAT 充电，充电时间即为消隐时间。电容 CDESAT 充电完成后，SiC MOSFET 已经开通。若SiC MOSFET 正常工作， 其导通压降很低， 二极管DDESAT 导通， 内置恒流源 IDESAT 流过电阻 RDESAT 和二极管 DDESAT，流入 SiC MOSFET，此时，CDESAT 上的电压 vDESAT 是二极管 DDESAT 压降与 SiC MOSFET 导通压降之和。若 SiC MOSFET 出现退饱和，则随着漏极电流 id 保持在远大于正常工作电流的值，漏源电压急剧升高， 二极管 DDESAT 截止，IDESAT 只能向电容CDESAT 充电， 直到 CDESAT 上的电压 vDESAT 达到保护阈值电压 VREF，该模态结束。

保护模态 3\[t1，t2\]：当 CDESAT 上的电压 vDESAT 超过保护阈值电压 VREF 时，芯片内部比较器翻转为高电平，短路保护输出报错信号，经过一定时间后，在 t2时刻关断 SiC MOSFET。 此后，漏极电流 id 降为 0，完成全部保护工作模态。

同理，负载短路情况下，图 5（a）所示短路保护电路也起到有效保护作用。 当驱动信号 S 为低电平时， 芯片内置开关 SDESAT 导通，CDESAT 上的电压 vDESAT被钳位在低电平，短路保护信号输出保持在低电平不报错；当驱动信号 S 为高电平时，芯片内置开关SDESAT 断开， 芯片内置恒流源IDESAT 为电容 CDESAT 充电，在消隐时间后，SiC MOSFET 正常工作时导通压降很低，若 SiC MOSFET 退饱和，漏源电压急剧升高，以此来判断短路故障是否出现。 短路保护电路的原理与硬开关短路情况下类似，在此不再赘述其模态过程。

**4  实验结果**

本文搭建图 6 所示桥臂电路实验平台，验证所提驱动在栅极电压稳定性改善中的作用和短路保护功能。 桥臂电路实验台主要参数如表 1 所示。 电压波形测量采用 100 MHz 的差分电压探头 Yoko\-gawa 700924，电流波形测量采用 30 MHz 罗氏线圈PEM CWT1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fXAlhOegYtV8I5YgPWibwKpExAPicic13ciaKIF1LmoicbV46kYUgFEzODMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fkF4SgLe84bjLBEaOZPIsfDqO1tfzuATyYdvtUSUrogurvzvEiazNQRw/640?wx_fmt=png&from=appmsg)

**4.1 工作原理验证**

图 1 所示基于跨导增益负反馈的栅极驱动电路中， 驱动电阻 R 与辅助电容 C 的乘积是该阻容电路的充放电时间常数 τ，τ\=RC。 τ 与栅源电压上升、下降斜率成反比，即较大的 τ 将导致较缓慢的栅源电压上升、下降时间，因此，被控 SiC MOSFET的开关速度也将变缓。 针对图 3 的桥臂电路进行实验验证，设计充放电时间常数 τ\=50 ns，其中，取助电容 C1=C2=20 nF，驱动电阻 R1=R2=2.5 Ω，在保证被控 SiC MOSFET 开关速度的同时，起到较好的解耦作用，实验结果如图 7 所示。

图 7 展示了主动管（桥臂上管）QH 的栅源电压vGS1 跟随其驱动电压 v\* GS1动作的情况。 可见，在上升和下降过程中，vGS1 能够自动跟随 v\* GS1动作， 上升或者下降。 然而，由于基于跨导增益负反馈的栅极驱动电路是 I 型系统，对于斜坡信号只能实现有差跟踪，所以，vGS1 和 v\* GS1的波形不是完全重合，而是有一定差别的。 但是，由于被控 SiC MOSFET QH 的输入电容 Ciss 约为 2.12 nF， 而辅助 MOSFET QP1 的跨导增益 gm 为 10 S，因此，gm>>Ciss，开环放大倍数 Kv 足够大。 所以，当 vGS 跟踪斜坡上升（下降）的 v\* GS时，二者之间的偏差很小，不影响被控 SiC MOSFET 的开通和关断效果。

由上升、下降过程的局部放大图可以看出，vGS1和 v\* GS1具有几乎相同的上升、下降速度。 根据自动控制原理可知，驱动电阻对辅助电容充电的动态过程曲线数值达到稳态的 63.2%时，动态过程的时间在数值上恰好等于充电时间常数； 观察栅源电压上升、下降过程的曲线可知，其时间常数为 50 ns，符合对驱动电阻以及辅助电容的预期设计。 在忽略测量引入的高频毛刺影响的条件下，工作原理验证结果与前文的分析一致，一定程度上验证了基于跨导增益负反馈的工作原理。

**4.2 串扰抑制性能验证**  

在同一个桥臂电路中，保证输入电压和输出电流等外部条件不变，对比研究采用固定电阻的传统驱动与本文所提驱动，在相近漏极电压变化率下的双脉冲实验波形，如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fxibjXHv042t2evs8umeTMYT37Xyx0DqbHxoYnFeNPgj5LsGtEdBZgqA/640?wx_fmt=png&from=appmsg)

图 8（a）展示了主动管 QH 以及被动管 QL 在传统驱动电路控制下的波形，主动管和被动管的驱动电阻均为 10 Ω。 被动管 QL 的漏源电压 vDS2 的上升斜率约为 43.7 V/ns， 下降斜率约为 51.25 V/ns；被动管 QL 栅源极电压 vGS2 受到干扰出现振荡， 正向尖峰达 7.9 V，负向尖峰约 7 V。 图 8（b）展示了主动管 QH 以及被动管 QL 在本文所提驱动电路控制下的波形，根据前文设计，主动管和被动管的辅助电容取 C1=C2=20 nF，驱动电阻 R1=R2=2.5 Ω。 上升斜率约为 50 V/ns，下降斜率约为 50 V/ns；被动管 QL栅源极电压 vGS2 受到干扰出现振荡， 偏离关断电压，正向尖峰约 3 V，负向尖峰约 3 V。

在两种驱动电路控制下，SiC MOSFET 漏极电压变化率相近，说明开关速率相似。然而，两种驱动下， 被动管 QL 栅源极电压 vGS2 表现出不同的稳定性。在传统驱动电路控制下，vGS2 产生了较大幅度的正、负向尖峰，峰峰值约为 14.9 V。 而采用本文所提驱动电路控制 SiC MOSFET 的开关动作，在相似的开关速率下，vGS2 的正、负向尖峰均大幅缩减，峰峰值约为6 V。 相比传统驱动，采用本文所提驱动，正向尖峰降低了 62%，负向尖峰降低了 57%，正、负向尖峰的峰峰值降低了约 60%。

**4.3 短路保护性能验证**  

将实验平台的桥臂中点短路，保证其他外部条件不变，仅改变驱动策略，对比研究采用固定电阻的传统驱动与本文所提驱动的短路保护性能。考虑电能损耗， 芯片内置恒流源 IDESAT 的输出电流一般在 250~500 μA，1ED020I12鄄F2 等驱动芯片推荐的CDESAT 不小于 100 pF， 这样可以保证保护电路具有足够的抗干扰能力，取 CDESAT=100 pF，IDESAT=500 μA，保护阈值电压 VREF=9 V，消隐时间约为 1.8 μs。 为确保对比分析时的单一变量原则，保证两种不同的驱动策略在参数选取时具有相似的开关速率。两种驱动电路的参数取值如第 4.2 节所述，在此不再赘述。 同理，两种不同驱动策略的短路保护电路均基于退饱和检测原理， 并具有相同的电路参数配置，如第 3 节所述。 不同直流电压 VDC 下的短路保护波形如图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9fiaOzCGNnVOVD67s1BhlcH8EE6q6PKnmrUA8TtklR8Fib7OH7vsFwCUnQ/640?wx_fmt=png&from=appmsg)

图 9 所示实验结果， 经示波器采集存储后，导入 Matlab 进行波形复现整合， 将不同直流电压下的 SiC MOSFET 漏极电流合并到一起。 短路故障出现之前，被测 SiC MOSFET 工作于断开状态，零时刻出现短路故障，被测 SiC MOSFET 漏极电流快速上升，到达短路电流峰值。 两种驱动策略下，短路电流表现出类似的趋势，并均在 3 μs 内关断，完成短路保护。 随着直流电压 VDC 的升高，到达短路电流峰值的时间缩短，并且短路电流峰值增大。 在短路电流下降阶段，较高 VDC 下的短路电流下降速度明显较快，其在关断时刻的短路电流值比较低 VDC 的更低。

图 9（a）和（b）所示短路电流的峰值对比，如表2 所示。 在直流电压 VDC 从 100 V 上升到 400 V 时，采用传统驱动，实验中的短路电流峰值从 196 A 上升到 236 A；而采用本文所提驱动，实验中的短路电流峰值从 188 A 上升到 228 A。 二者具有相同的变化趋势，随着 VDC 的升高，短路电流峰值增大。 用本文所提驱动下的短路电流峰值除以传统驱动下的短路电流峰值，得到短路电流峰值比。 由表 2 可知，直流电压 VDC 从 100 V 上升到 400 V 时，在相同 VDC 下对比两种不同驱动下的短路电流峰值，本文所提驱动下短路电流峰值约为传统驱动下短路电流峰值的 96%。 因而，在相同直流电压下，采用本文所提驱动，短路电流峰值较传统驱动的更低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQCjFjJOg97Op8a6Wyicx9flTibMGQyESZO55fM9fIjbicsedUiaLicbdX8SVViaM5LgKiahHFAWz9B3FzQ/640?wx_fmt=png&from=appmsg)

**5 结论**  

SiC MOSFET 开关动作造成的脉冲电压干扰和脉冲电流干扰，通过米勒电容耦合到栅极，干扰栅源电压，形成串扰。 根据这一特点，本文采用普通驱动芯片、驱动电阻，外加辅助 MOSFET、辅助电容，提出了一种基于跨导增益负反馈的 SiC MOSFET栅极驱动电路。 驱动电压作为栅源极的参考信号，输入栅极负反馈控制回路。 参考信号与被控 SiC MOSFET 的栅源电压之差，通过辅助 MOSFET 的跨导增益，控制由被控 SiC MOSFET 输入电容和栅极内电阻共同构成的被控对象。 引入负反馈控制后，若栅源电压增大（或减小），则与参考值之差增大，经过驱动管跨导增益的调节，对输入电容放电（或充电），栅源电压恢复稳定。 栅极负反馈控制的目标是让被控 SiC MOSFET 的栅源电压跟踪驱动信号的变化，并屏蔽脉冲电压和脉冲电流的干扰。

控制环路 的 传 递 函数 分 析表 明 ， 因 为 辅助MOSFET 的跨导增益较大，控制环路的开环放大倍数足够大，对干扰信号具有足够大的抑制比，可有效抑制高速率开关条件下， 干扰信号对 SiC MOSFET 栅源电压的干扰。 实验结果表明，工作在相同的开关速率下，采用本文所提驱动将获得更稳定的栅极电压，短路时电流峰值也相对较低。

本 文 的 研 究 结 果 将 有 利 于 进 一 步 提 高 SiC MOSFET 在高开关速率下的运行可靠性，更充分地发挥碳化硅器件的性能优势。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)