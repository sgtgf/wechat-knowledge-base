# SiC MOSFET 与 SiC SBD 换流单元瞬态模型

原创 朱义诚 赵争鸣 SiC碳化硅MOS管及功率模块的应用 2025-03-28 14:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/l15999wZMZyNxdMHpB8eKg](https://mp.weixin.qq.com/s/l15999wZMZyNxdMHpB8eKg)

文章来源：电工技术学报

作者：朱义诚 赵争鸣 王旭东 施博辰（清华大学电机系 电力系统及发电设备安全控制和仿真国家重点实验室 北京  100084）

摘要： 相较于硅（Si）器件，碳化硅（SiC）器件所具有的高开关速度与低通态电阻特性增加了其瞬态波形的非理想特性与对杂散参数影响的敏感性，对其瞬态建模的精度提出更高的要求。通过功率开关器件瞬态过程的时间分段、机理解耦与参数解耦，突出器件开关特性，弱化物理机理，简化瞬态过程分析，建立基于 SiC MOSFET 与 SiC SBD 的换流单元瞬态模型。理论计算结果与实验结果对比表明，该模型能够较为精细地体现 SiC MOSFET 开关瞬态波形且能够较为准确地计算 SiC MOSFET 开关损耗。该模型参数可全部由数据手册提取，有较强的实用性。

关键词：SiC 功率器件 瞬态模型 开关特性 开关损耗

0 引言

相较于硅（Silicon, Si）材料，碳化硅（Silicon Carbide, SiC）材料具有更宽的禁带宽度（Si 的 3 倍），更高的临界击穿场强（Si 的 7 倍）、更高的载流子迁移率（Si 的 2 倍）及更高的热传导率（Si 的3.3 倍）。与同等容量的 Si 器件相比，SiC 器件具有更低的导通电阻、更小的结电容，且能承受更高的工作结温，从而具有更低的器件损耗与更高的开关速度，有利于提高电力电子变换器的系统效率与功率密度，使得 SiC 器件的应用日益广泛。

目前在复杂电力电子变换器仿真中，SiC 器件一般被视为理想开关，忽略瞬态过程中实际开关波形相较于理想开关波形的延迟与畸变，这一简化导致了一系列的问题，例如：①对于瞬态过程中具有破坏性的尖峰电压与尖峰电流难以准确分析与仿真，开关器件可靠性问题突出；②对于功率开关器件输出的电磁能量脉冲的瞬态过程难以精确控制，控制性能有待提高；③对于开关损耗难以准确计算。为了实现基于 SiC 器件的电力电子变换器瞬态过程仿真，应首先对 SiC 器件进行瞬态建模和分析。

由于 SiC 器件的特性与传统的 Si 器件相比有所不同，使得 Si 器件的开关瞬态分析与建模方法并不完全适用于 SiC 器件。与相同耐压等级的 Si 器件相比，SiC 器件具有更高的开关速度与更低的通态电阻，这使得其开关瞬态波形的电压电流变化率与尖峰更高、高频振荡时间更长，非理想特性更加显著，对于杂散参数的影响更加敏感，这对其瞬态建模精度提出了更高的要求。

功率开关器件的开关瞬态过程是多种机理复杂耦合的物理过程，为了简化分析，可根据瞬态开关特性及开关器件状态将瞬态过程分段，在各个阶段中仅考虑起主导作用的物理机制与显著变化的模型参数，忽略其他机制的影响与其他参数的变化，从而实现瞬态过程分析中的多物理机理解耦与非线性参数解耦。通过功率开关器件瞬态过程的时间分段、机理解耦与参数解耦，能够突出器件开关特性，弱化物理机理，便于参数提取与系统仿真。

在电力电子变换器中，开关器件以组合模式工作，其中最基本的开关组合模式是由一对“互锁”的开关器件构成一个基本换流单元，其电路如图 1所示。SiC MOSFET Q 与 SiC SBD VD 构成一个基本换流单元，Lload 为负载电感，Csource 为直流母线电容，Rg(ext)为驱动回路外接电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uresicA5ExliaKK4UpYAibKhAfSTpvRA4iblhicnVFfEqAdEbSfeZkzFgS566w/640?wx_fmt=png&from=appmsg)

由于开关器件瞬态过程是由一对“互锁”开关共同作用的换流过程，其中两个开关器件的瞬态过程相互影响，因此在建立反映功率开关器件瞬态波形的行为模型时，应当将一对“互锁”开关作为一个换流单元进行整体建模，而不能对单一器件建模。需要指出的是，在复杂拓扑变换器（如多电平变换器）中，换流单元中两个互锁开关的组合方式可能会随换流回路的变化而改变，并不是唯一不变的。

基于上述认识，本文以全 SiC 器件双脉冲测试电路为例，在分析其开关瞬态过程机理的基础上，

提出一种针对 SiC MOSFET 与 SiC SBD 换流单元的瞬态 模 型 ， 该 模 型 参 数 可 全 部 由 数 据 手 册（datasheet）提取，具有良好的实用性。与理想开关模型相比，该模型能够较为准确地反映器件的瞬态波形与开关损耗。与以 McNutt 模型为代表的物理机理模型相比，该模型适用于离散状态事件驱动（Discrete State Event Driven, DSED）仿真体系，以工程上可接受的误差代价，解决了物理机理模型参数难提取、仿真速度慢、计算不收敛等问题。文献\[9\]采用时间分段的方法分析了功率 Si MOSFET的开关瞬态过程，但该模型并未给出由 SBD（反向恢复过程可忽略）结电容所引起的 MOSFET 开通电流超调的准确分析方法，没有考虑漏源极电压 vds快速变化过程中栅漏极电容 Cgd 的非线性特性对瞬态过程的影响，且参数无法全部从 datasheet 中提取。文献 \[10\] 采用时间分段的方法 ， 提出了基于SiC MOSFET 与 SiC SBD 的变换器解析损耗模型，但该模型没有考虑 vds 快速变化过程中 Cgd 的非线性特性对于瞬态过程的影响，且并未对瞬态过程末尾的高频振荡进行建模。

1 SiC MOSFET 与 SiC SBD 换流单元瞬态过程分析与建模

为了建立 SiC MOSFET 与 SiC SBD 换流单元瞬态模型，本节采用常用于研究功率开关器件瞬态过程的双脉冲测试电路，对 SiC MOSFET 的瞬态过程分阶段进行分析与建模。

1.1 双脉冲测试电路等效电路模型

考虑杂散参数的双脉冲测试电路等效电路模型如图 2 所示，其中，直流母线等效为理想电压源 VDC，负载电感等效为理想电流源 IL 与等效并联电容 CL的并联，驱动电路输出电压 Vdrive 等效为在高电平VCC 与低电平 VEE 之间跳变的理想方波电压源，受到控制信号Vctr 的控制。对于 SiC MOSFET，其模型构成包括：理想 MOSFET Q，反映 SiC MOSFET 的静态特性；三个寄生电容，即栅源极电容 Cgs、栅漏极电容 Cgd 及漏源极电容 Cds，影响 SiC MOSFET 的暂态特性；Ld(int)与 Ls(int)为漏极与源极杂散电感，由于栅极杂散电感一般较小，且开关瞬态过程中栅极回路电流变化率一般远小于主回路电流变化率，栅极杂散电感对于瞬态波形的影响并不显著，可忽略不计；Rg(int)为栅极内电阻，漏极与源极杂散电阻一般较小，可忽略不计。对于 SiC SBD，其模型构成包括：理想 SBD VDf，反映 SiC SBD 的静态特性；寄生结电容 CjD，影响 SiC SBD 的暂态特性；串联杂散电感 LsD，串联杂散电阻可忽略不计。驱动回路中，Rg(ext)为外接驱动回路电阻；主回路中，Ld(ext)与 Rd 分别为直流母线正接线端与 SiC MOSFET 漏极间的等效集总杂散电感与杂散电阻，Ls(ext)为 SiC MOSFET 源极与地之间的杂散电感。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureibQSndYtAxvibA2OrhvjIEABRD8dNDa4OUrgLImUKySsqNEgFvjXick5w/640?wx_fmt=png&from=appmsg)

Cgd、Cds与CjD为非线性电容，为了简化分析，除vds快速变化过程中的Cgd 外，可将上述非线性电容的容值分段线性化，当其两端电压较小时容值取较大值，以下标“0”表示；当其两端电压大范围变化时容值取中间值，以下标“1”表示；当其两端电压较大时容值取较小值，以下标“2”表示，其中Cgd0＞ Cgd1＞ Cgd2， Cds0＞ Cds1＞ Cds2，CjD0＞ CjD1＞CjD2。非线性电容的参数提取方法将在第 2 节中作具体介绍。为了简化分析，可将负载电感等效电容CL 视为与SiC SBD结电容 Cj 并联，下文中如不作特别说明 ， 则均照此近似处理 。为表达方便 ， 记

Rg=Rg(int)+Rg(ext)，Ld=Ld(int)+Ld(ext)，Ls=Ls(int)+Ls(ext)，主回路总杂散电感 Lstray=Ls+Ld+LsD，SBD等效结电容Cf =CjD+CL，

MOSFET输入电容Ciss=Cgd+Cgs，

输出电容 Coss=Cgd+Cds。

对于图 2 所示的等效电路模型，可采用如式（1）～式（9）所示的 9 个方程进行定量描述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urebst1aGMaiar2HWTGkgD2lybmM7iaWUSortkjlkX8MvM4acxnqbFkwBVQ/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure0Vzg4t6EqibiappqpGkGbHnVLicxH42ibaRRMfUjWDuYjHqHibxDEf2pYYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureNJx1M3L5t2ZaVmdv6E1OhzUaUcLdzWRwFEkwaLDmy8jc3XglibmzXoA/640?wx_fmt=png&from=appmsg)

式中， gfs 为线性化跨导（A/V）； Vth 为线性化阈值电压； Rds(on) 为通态电阻。

显然，式（1）～式（9）组成的微分方程组难以直接求解。为了得到工程上实用的 SiC MOSFET管压降 vds(t)与管电流 id(t)的表达式，可根据瞬态开关特性与开关器件状态将瞬态过程分段，并在各阶段内引入一定的假设简化条件，从而得到瞬态波形的解析表达式。下面，分别对 SiC MOSFET 的开通与关断瞬态过程进行分析与建模。

1.2  SiC MOSFET 开通瞬态过程

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureT8BuIGM42hU3VBw8AVH7jSREqGfRBU43yN8X05rI3yvzNR5weG9elA/640?wx_fmt=png&from=appmsg)

典型的 SiC MOSFET 开通瞬态波形如图 3 所示。开通瞬态过程可分为六个阶段，各阶段内的开关器件状态、已知条件与近似假设见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureFoica07tEBnRHkYoceb6Lmd1krqDoD42f8Y5ptbeI9CwKFRqg3gypxg/640?wx_fmt=png&from=appmsg)

1）阶段一\[t0, t1\]，驱动电路高电平传输延迟

t0 时刻，控制信号 Vctr 由低电平上升至高电平，t1 时刻，驱动电路的输出电压由低电平 VEE 上升至高电平 VCC，vgs 开始上升。这段时间间隔为驱动电路高电平传输延迟 tddrive(on)，在驱动电路的供电电压一定的情况下可视为常数。

需要指出的是，由于 SiC 器件的开关速度快，瞬态过程时间短，从控制角度考虑，驱动电路的传输延迟时间已不能忽略，这与分析 Si 器件时可忽略该延迟的影响是不同的。

2）阶段二\[t1, t2\]，Ciss 充电，vgs 上升至 Vth

t1 时刻，驱动电路开始对 MOSFET 输入电容Ciss 充电，由于 Ls 较小且流过 Ls 的电流的变化率较小，Ls 对于该过程的影响并不显著，可忽略不计。该阶段内栅源电压 vgs 的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urejsicCSAZnvjogTal8hibzVwfETRSDgYtUtibupFwe98KYKqVTiaDrMPlVQ/640?wx_fmt=png&from=appmsg)

式中， Ciss=Cgd2+Cgs 。

该阶段内 MOSFET 处于夹断区，vds 与 id 均不发生变化。t2 时刻，vgs 上升至阈值电压 Vth，MOSFET由夹断区进入恒流区。

3）阶段三\[t2, t3\]，id 上升至 IL

t2 时刻，MOSFET 管电流 id 由 0 开始上升，由于|dvds/dt|较小，可近似认为 id=ich。该阶段内 id 满足的方程及 t2 时刻初始条件分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure7CJYshxEWBoHzaQahd1scic06fu0k1GXxoHJxibaWXURibiaQ903us7zmA/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureNlEBtH1I3WsfzrVYZ1VSuyJ0UCQVoDicXyvtibCo5E8c2PWYSY8hQhUA/640?wx_fmt=png&from=appmsg)

式中，Lstray 为主回路杂散电感。

（1）当α(on3)＜ω0(on3)时，id 呈欠阻尼规律变化，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureqNlm63ROrjOsDLJmLyU6RiakbgEOpvn6mVWUGtxDYWtmXxpJy8uNicYw/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure0uxbwlvWQwvAMg1ORQzVktGjI8fMDlOX14aw03ibia4AzSliav820dhhA/640?wx_fmt=png&from=appmsg)

（2）当α(on3)＞ω0(on3)时，id 呈过阻尼规律变化，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uresUwJhmtTR5cUNUoDMP3A0vz8zGaChubEQ3eqQ2xkJUI406JxMuAzJg/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureXicEPUteDtib4tTPvc0icjQQIxDCRgKOMJFffAWxH8ibCrLwfpJwagCzVA/640?wx_fmt=png&from=appmsg)

该阶段内，栅源电压 vgs 对 id 的控制关系可用跨导 gfs 表示，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureG8ice6u8micJTdjJv6PVKSMIG7rtZhD77DPeKico9RwPREMQ5EvWVNCIA/640?wx_fmt=png&from=appmsg)

由于杂散电感与杂散电阻上的压降，vds 出现小幅下降，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureGsfZLH0AIa1Qz2Yedjsezica4QBW3ARWeFIudwQbfceysfaOU0RJIHQ/640?wx_fmt=png&from=appmsg)

4）阶段四\[t3, t4\]，id 超调，vds 下降至 Vmiller−Vth

t3 时刻，MOSFET 管电流 id 上升至 IL，SBD 电流 iDiode 降为 0，SBD 截止，Vmiller 为米勒电压。虽然 SiC SBD 的反向恢复过程可忽略，但由于其结电容承受反压反向充电，id 出现超调。如果忽略杂散电感压降 Lstray|did/dt|与 SBD 结电容 Cf 的非线性，则 vds 应在 t3 时刻开始迅速下降，但实际电路中，由于在 id 由 IL 上升至峰值 Ipeak 的过程中，|did/dt|逐渐减小至 0，杂散电感压降 Lstray|did/dt|也随之逐渐减小至 0，同时在 SBD 结电容 Cf 非线性的共同作用下，vds 迅速下降的开始时刻滞后于 t3 时刻，一般位于 id峰值时间 tp 附近。

为简化分析，可近似认为 vds 在其达到峰值的 tp时刻开始迅速下降，由此可将阶段四分为\[t3, tp\]与\[tp, t4\]两个阶段。

（1）\[t3, tp\]，id 由 IL 上升至峰值 Ipeak，一般呈现欠阻尼规律变化。vgs 在 id 的作用下由 Vmiller 开始小幅上升，在 tp 时刻出现较小尖峰。vgs 的表达式同式（16），id 的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureGlruI68na8IZQU7fMsicrgNra3Il1c0vGXgibk2eRoTBRVuPqyE5LO6g/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureQibibjEibPUmGl2pHuKcK3eVqGoWFQOFrbzDeMeXToIibXwy8c249jOZsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureWubExG7Qz69CnJPIv7MCibDEN6G2QU2qvLI4a5EEPqBeUILfzLSMLKQ/640?wx_fmt=png&from=appmsg)

tp 时刻，did/dt =0，由此可解得 id 峰值时间 tp与峰值 Ipeak 分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureSROOdaXuaoe3KG01WOEKdYYq5svR4nwQGSYtddRJia3PmQJtnVjUdwA/640?wx_fmt=png&from=appmsg)

（2）\[tp, t4\]，vds 快速下降，id 由峰值 Ipeak 开始下降，vgs 近似为 Vmiller 保持不变，可认为|dvgs/dt|＜＜|dvds/dt|。 id 一般呈欠阻尼规律变化， 其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureYbh8Czw7WKBgeEpyLic8B8Aba74OqLEa5yhbJa7souPTgYB7BChXp4w/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uretmziaHLhXFmPOkc34ibZia7ib3vdSIaSWBmRR0LMnlLvKib86TkTXF1J5bA/640?wx_fmt=png&from=appmsg)

dvds/dt 表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure8LsLkSWDDspZsqQNibNIFgRD0fgoeOkAAqJI2bp842N8q2eg5ibQicukA/640?wx_fmt=png&from=appmsg)

该阶段内栅漏极电容 Cgd 近似等于其 PN 结耗尽层电容 Cgdj，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urezn9ESsicvajrgPLL5IhV3kvgibFUVm4wHr3uBAI7VKISCj1eCZQGDovQ/640?wx_fmt=png&from=appmsg)

式中，Vdgj0 与γgdj 为非线性电容模型的两个参数。

由于 vdg≈vds，可将式（23）代入式（22）得到该阶段内 vds 的解析表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureT1GzlcWxCDSanvCibUVfFOaboMGcT8y7w6dOFzJfEvUc5PGASNavhHg/640?wx_fmt=png&from=appmsg)

由于 vds 快速变化，输出电容 Coss 的充电电流 ic不可忽略，vgs 的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureMbZCiaE4ptwEenU4xkQibW45icJzJIW6jUfiaHuP1dR0QVmBtmlZh7KtCQ/640?wx_fmt=png&from=appmsg)

5）阶段五\[t4, t5\]，id 振荡，vds 下降至 Rds(on)IL

t4时刻，vds下降至 Vmiller−Vth，MOSFET 导通，进入可变电阻区，SBD 等效结电容 Cf 与主回路杂散电感 Lstray 串联振荡，由于 Rd 一般较小，id 呈现欠阻尼规律变化，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureGL2jpcboevfkMqltseTnCKxxIE3U9DrHqBSR3icIZtE3r3GLsQBiaVxQ/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureZMMHSCbpxicdv2OCIlheob6rQdVicymgUunsJ5nzFlGMZlWrIxUbsbeg/640?wx_fmt=png&from=appmsg)

该阶段内，可假设 vgs 近似保持米勒电平 Vmiller不变，则 vds 表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureC6zAU8rmsQ31Y4pGBJVicl5Umv1qVKuHkAicoNuwLkGazWc0Rfibj6A9Q/640?wx_fmt=png&from=appmsg)

6）阶段六\[t5, t6\]，id 拖尾振荡

t5 时刻后，id 拖尾振荡，变化规律与阶段五相同，其表达式如式（26）所示。近似认为 vds=Rds(on)IL保持不变。vgs 继续以指数方式上升至 VCC，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureiaqR6AZ9icTn9azodsGybvZJx1sSAEz7OLgAdS12u4ChWrsgDdSHicuAw/640?wx_fmt=png&from=appmsg)

式中， Ciss=Cgd0+Cgs 。

t6 时刻，id 的振幅小于 5% IL，可认为此时瞬态过程结束，进入开通稳态。

1.3 SiC MOSFET 关断瞬态过程

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureVdvS9VAxdfRKrMT4z9OwlQho75q6ficNia6bDgVaJgCgKCQTBibrbnZLg/640?wx_fmt=png&from=appmsg)

典型的 SiC MOSFET 关断瞬态波形如图 4 所示。关断瞬态过程可分为六个阶段，各阶段内的开关器件状态、已知条件与近似假设见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureP5e8m2ewtRuDelRhVW996gW42we7iaTOhuJRicW10rtbS0jJ4c1HHqicg/640?wx_fmt=png&from=appmsg)

1）阶段一\[t0, t1\]，驱动电路低电平传输延迟

该阶段与开通瞬态阶段一\[t0, t1\]对偶。t0 时刻，控制信号 Vctr 由高电平下降至低电平，t1 时刻，驱动电路的输出电压由高电平 VCC 下降至低电平 VEE，vgs 开始下降。这段时间间隔为驱动电路低电平传输延迟 tddrive(off)，在驱动电路的供电电压一定的情况下可视为常数。

2）阶段二\[t1, t2\]，Ciss 放电，vgs 下降至 Vmiller

该阶段与开通瞬态阶段六\[t5, t6\]对偶。t1 时刻，MOSFET 输入电容 Ciss 通过驱动回路放电，Ls 的影响可忽略。该阶段 vgs 的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uregYFDkCXIKk9x65IIZJ50ibUoGcKkAzBtqWfSIZSib9UH0By8e3VZAibMw/640?wx_fmt=png&from=appmsg)

式中， Ciss=Cgd0+Cgs。MOSFET 处于可变电阻区，vds 与 id 均不发生变化。t2 时刻，vgs 下降至 Vmiller。

3）阶段三\[t2, t3\]，vds 缓慢上升至 Vmiller−Vth

该阶段与开通瞬态阶段五\[t4, t5\]对偶。t2 时刻，vds 由 0 开始缓慢上升，vgs 近似为 Vmiller 保持不变，则 vds 的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureTMDkCZ62db6zBRtvmHOtWLp3icho3qP72rbgBdicBX7GicdEiaU27w9FvQ/640?wx_fmt=png&from=appmsg)

该阶段内 SBD 截止，由于 vds 变化缓慢，vjD 变化也较为缓慢，SBD 结电容电流 iDiode 可忽略不计，由此可认为该阶段内 id 近似为 IL 保持不变。

4）阶段四\[t3, t4\]，id 缓慢下降，vds 快速升至 VDC

该阶段与开通瞬态阶段四\[tp, t4\]对偶。t3 时刻，MOSFET 进入恒流区，vds 快速上升。该阶段内，vds变化规律与\[tp, t4\]相同，表达式的形式如式（24）所示，仅初始条件不同，t4 时刻 vds 初始条件为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureAfjCCxecWfvibfibSx2An1ib0JyiaibUINicHBWMNsBDcSRqC3SlsCEUIUhQ/640?wx_fmt=png&from=appmsg)

该阶段内，vjD 迅速下降，SBD 结电容放电电流iDiode 不可忽略，导致 id 缓慢下降，近似认为 dvjD/dt=−dvds/dt，则 id 的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uresfZ0Zxicpv3icwsqvMibibLNzpt4kVdV2rjW6cqkYr10rUmV4R7gNYljLw/640?wx_fmt=png&from=appmsg)

式中， Cf=CjD1+CL 。该阶段内，vgs 的表达式如式（25）所示。

5）阶段五\[t4, t5\]，id 快速下降，vds 超调

t4 时刻，vds上升至VDC，近似认为SBD从此刻开始导通，由于 id 快速下降，杂散电感 Lstray 两端出现较大电压，vds 超调，达到峰值 Vpeak。该阶段内开关器 件 状 态 与开通瞬态阶段三 \[t2, t3\] 相同 ， 但|dvds(t)/dt|较大，故ich不可忽略。为简化求解，可近似认为|dvgs/dt|＜＜|dvds/dt|。该阶段内 id 满足的方程及 t4 时刻 id 初始条件分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureXoHRGTyeLmsa081Bw1XqnyQUwewiaXYwwUN4Fv8hXtiaXpthicbHRoLYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure9OoqcgHdsMOV75ibdltiarsf3leCiadX4VRI52o3jSsbAJgRBDKwBDcUg/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure0A6EORnJOCd0xWBibPfvsGDUDrSsnglEibsY0hGcBTnibt9CBVGicRQXdA/640?wx_fmt=png&from=appmsg)

（1）当α(off5)＜ω0(off5)时，id 呈欠阻尼规律变化，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uree2TtYwMTEhvfPP11uia0v9fMRY8soYzQRYiaqh2ibZWhE5QLEawvz7Lyw/640?wx_fmt=png&from=appmsg)

（2）当α(off5)＞ω0(off5)时，id 呈过阻尼规律变化，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureNjsWZClP1vf84DlEtItgTyibibrW1ibNqoHupJzctqK4yib7MSa7zribYDg/640?wx_fmt=png&from=appmsg)

该阶段内，vgs 的表达式如式（16）所示，vds的表达式如式（17）所示。

6）阶段六\[t5, t6\]，id 与 vds 拖尾振荡

t5 时刻，vgs 下降至 Vth，MOSFET 进入夹断区，由于 Rd 较小，vds 与 id 呈欠阻尼规律变化拖尾振荡，其表达式分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure9LymmzgGxY3q8N9fI0UmI2GchwlZu0ic6LH9sJySxG77c9KrCKwdKag/640?wx_fmt=png&from=appmsg)

  
vgs 继续以指数方式下降至 VEE，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urev5ZjI5jicX88OChQ00SEfOLwSIzGdfJ3pLiazvhibKejhGxPyTnAuZ9hA/640?wx_fmt=png&from=appmsg)

t6 时刻，vds 的振幅小于 5%VDC，可认为此时瞬态过程结束，进入关断稳态。

2 基于器件手册的换流单元瞬态模型参数提取

器件手册提供了丰富的开关器件性能与参数信息，包括器件容量、电气特性、热特性、机械特性与不同工况下开关特性的变化情况，从中可以提取本文所提出模型中涉及的器件参数。

本节以Wolfspeed公司的SiC MOSFET（CMF20120D）与SiC SBD（C4D30120D）为例，给出基于器件手册的 SiC MOSFET 与 SiC SBD换流单元瞬态模型参数提取方法。

2.1 SiC MOSFET 模型参数提取

SiC MOSFET 模型中待提取的参数包括：阈值电压 Vth，跨导 gfs，米勒电平 Vmiller，寄生电容栅源极电容 Cgs、栅漏极电容 Cgd 及漏源极电容 Cds，门极内电阻 Rg(int)与杂散参数 Ls(int)及 Ld(int)。

2.1.1 转移特性

当 MOSFET 处于恒流区时，其沟道电流 ich 与栅源电压 vgs 满足转移特性，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urepO8xYvGu4odx1urmiajbsX6XcbrxuO2tj6A1rKMEauiaPbXykQic6PBZA/640?wx_fmt=png&from=appmsg)

式中，kfs 为恒流区跨导系数（A/V2）；Vth0 为阈值电压。图 5 为 CMF20120D datasheet 中给出的 MOSFET转移特性曲线，可根据实际工况选取特定工作温度下的曲线拟合式（41）中的参数 kfs 与 Vth0。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureum3A0uHpdEqq8ZE9PtPcofVlwDfpgsW5J6tr29LLXjZYqAv1DcSQqA/640?wx_fmt=png&from=appmsg)

为了便于分析，将 MOSFET 转移特性在 ich=IL/2处进行线性化（以 25℃曲线为例），以切线替代转移特性曲线简化分析，即用图 5 中点划线段近似转移特性曲线，线性化转移特性为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureuaiaSiaEEMIm6S1ev1ol57JN8S4x3mpePXT5Awc8gVU3QYwbBPNFxzTw/640?wx_fmt=png&from=appmsg)

2.1.2 米勒电平

在 MOSFET 开关瞬态过程中，由于米勒电容Cgd 的非线性效应，栅源电压 vgs 在变化过程某些阶段（如开通过程阶段五，关断过程阶段三）中近似保持不变，该电压为米勒电平，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureA4rgfnOYxQqG2GpHTGhaPHDVEmpx8qic8RdyguQicadsK7YM6icN5t3Jg/640?wx_fmt=png&from=appmsg)

2.1.3 寄生电容

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureo4UILibbQyKLlbjsoPbicmkD1ZlbbZuIZaAxKp3xJFaMRBHwJGib6bNjA/640?wx_fmt=png&from=appmsg)

Datasheet 中给出了 MOSFET 输入电容 Ciss、输出电容 Coss 和转移电容 Crss 在 vgs=0 时随 vds 的变化关系曲线，如图 6a 所示，其定义为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure2aPbPHtnCOJIJ4UHfJ8rY3dxxUiaaqKiaZLx9icVsYbYKZE5icT8AwVCicQ/640?wx_fmt=png&from=appmsg)

分析 SiC MOSFET 结构可知，栅源极电容 Cgs为栅极氧化层电容，由于氧化层厚度不变，其容值可近似视为常数；漏源极电容 Cds 为 PN 结耗尽层电容，由于耗尽层宽度 vds 有关，因此 Cds 的容值为 vds的函数，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureoZPO1TNUDrJMdtfWCqWZS3BpmgELrXvoXBVqvECAJ0lzWJqkG7j6CQ/640?wx_fmt=png&from=appmsg)

栅漏极电容 Cgd 为氧化层电容 Coxd 与 PN 结耗尽层电容 Cgdj 的串联电容，在双对数坐标中观察 Crss曲线（即 Cgd 曲线），发现其在 vds 较小时呈曲线变化，在 vds 较大时呈直线变化，如图 6b 所示。取两者分界点电压 Vlim，对 Cgd 进行分段近似，即用图6b 中点划线段近似 Crss 曲线，如式（48）、式（49）所示。可根据 datasheet 典型电容曲线拟合相关参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureuQhrWQ7YJMjQAxdBIuFS2asTtft1yzib7OgzH3qQbzVQf3nSahtbXLg/640?wx_fmt=png&from=appmsg)

为便于模型计算，以分段电容值反映寄生电容Cds 与 Cgd 的非线性，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure478kjVOnnpcQ0ibdr40CkvQtnH9vcaA3ecpTnWNf0bjUWzuqrnAZWTw/640?wx_fmt=png&from=appmsg)

另外，门极内电阻 Rg(int)可直接由 datasheet 电气特性表格获取；由 datasheet 可获取该器件的封装型号，由此即可在器件厂商官方模型中获取该封装杂散参数 Ls(int)及 Ld(int)的典型值。

2.2 SiC SBD 模型参数提取

SiC SBD 模型中待提取的参数包括结电容 CjD与杂散参数 LsD。

分析 SiC SBD 结构可知，结电容 CjD 为 PN 结耗尽层电容，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure3jrr2syscLcogcFquPgpURSy4NPNTv10u1Pia7qd7c1xbiaC3S0wkiaVw/640?wx_fmt=png&from=appmsg)

由式（5）可根据 datasheet 结电容曲线拟合相关参数。为便于模型计算，以分段电容反映 SBD 结电容 CjD 的非线性，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureXPnaSIRDwRaxW6icaOIydF4OtkDDrAf4r247VZ45BI8UbFiaaVQU0cHg/640?wx_fmt=png&from=appmsg)

式中，CjD0＞CjD1＞CjD2。杂散参数 LsD 的获取方法与 SiC MOSFET 杂散参数获取方法相同。

3 换流单元瞬态模型实验

本节基于双脉冲实验测试平台，对本文提出的SiC MOSFET 与 SiC SBD 换流单元瞬态模型进行实验验证。

3.1 双脉冲实验测试平台

双脉冲实验测试平台如图 7 所示，实验原理图如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urewBhjn6icfok1gWOO2AWlyia3fAUFY5DraDIBhm2epJwTRyue7SYpcaiaw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 与 SiC SBD 换流单元瞬态模型参数可根据第 2 节所述方法从 datasheet 提取，主回路杂散参数可通过实验测得。以工作温度 25℃为例，图 7 所示的双脉冲实验电路测试平台参数见表 3，若工作温度发生变化，需对参数进行相应的修正。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ure2VPuug6PQib21PY3iaBuzOqVlkELtibgWBwuvGo1QKnA0kl9omJWB47uA/640?wx_fmt=png&from=appmsg)

3.2 模型验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urejl9fbiauVx3R0HL3ERPOhbdbnBica1GlNssXKiac6cbldbZ76DS9sbOWA/640?wx_fmt=png&from=appmsg)

改变驱动回路外接电阻 Rg(ext)，分别将理论计算与实验测量所得的开关瞬态波形与开关损耗进行对比，如图 8 与图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7uresC2iccS1nkn5VwXSpyric9gZNtXFL2icgEl3RKJCdRXy7vBdQwaTa8Q1w/640?wx_fmt=png&from=appmsg)

改变SiC MOSFET栅漏两极外接电容 Cgd(ext)，分别将理论计算与实验测量所得的开关瞬态波形与开关损耗进行对比，如图 10 与图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7urerQBtJDgMP9k4Viad1OCOes1OMvqXFFhWgkjLoib0QrYpLVQRGHTFCFdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmia9eML5ujFpu7ZtyTY7ureHXnHAe6S15Xib53Gu90ficcQ9FrX1eNTGSgUSNNMq18FNm5VJTKPCvMA/640?wx_fmt=png&from=appmsg)

由图 8～图 11 可以看出，理论计算与实验测量波形基本吻合且理论计算的开关损耗与实验测量结果的相对误差均小于 10%，表明本文提出的换流单元瞬态模型能够较为精细地体现 SiC MOSFET 开关瞬态波形特征且能够较为准确地计算开关损耗。

理论计算结果与实验测量结果仍存在一定误差，该误差除了来源于理论模型无法考虑实验中外接电容的非线性特性等非理想因素外，主要来源于本文模型存在的局限性：

（1）假设简化条件的引入导致本文模型忽略了部分因素对于瞬态过程的影响。例如，由于理论模型关断瞬态过程阶段四与开通瞬态阶段四\[tp, t4\]内假设 vgs 近似为 Vmiller 保持不变，因此无法反映 Cgs(ext)对于开关瞬态过程|dv/dt|的影响。又如，本文模型无法考虑驱动回路杂散电感对于瞬态过程的影响。当然，模型假设中忽略的因素对于瞬态过程的影响并不显著。

（2）本文模型无法考虑工作温度变化对于模型参数的影响。工作温度变化对于 SiC 器件模型参数存在一定影响，为了提高模型在不同工作温度下的适用性，应给出模型参数的温度修正方法，该部分工作有待后续完善。

因此，本文模型适用于满足模型简化假设条件且器件工作温度与 datasheet 参数测试温度相近的应用场合。

4 结论

相较于 Si 器件，SiC 器件所具有的高开关速度与低通态电阻特性增加了其瞬态波形的非理想特性与对杂散参数影响的敏感性，对其瞬态建模的精度提出了更高的要求。功率开关器件的开关瞬态过程是多种机理复杂耦合的物理过程，为了简化分析，本文通过瞬态过程的时间分段、机理解耦与参数解耦，突出器件开关特性，弱化物理机理，建立了基于 SiC MOSFET 与 SiC SBD 的换流单元瞬态模型。

该模型能够较为精细地体现 SiC MOSFET 开关瞬态波形特征且能够较为准确地计算开关损耗。该模型参数可全部由数据手册提取，有较强的实用性。由于本文模型建立在一定的假设简化条件上，且无法考虑工作温度变化对于 SiC 器件模型参数的影响，因此该模型适用于满足模型简化假设条件且器件工作温度与 datasheet 参数测试温度相近的应用场合。该模型参数的温度修正方法有待后续完善。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)