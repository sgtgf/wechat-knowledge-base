# 基于多段式电平调控的 SiC MOSFET驱动与保护策略


> 原文地址: [https://mp.weixin.qq.com/s/z1JG6k\_DoDAZpGA4jkVzeA](https://mp.weixin.qq.com/s/z1JG6k_DoDAZpGA4jkVzeA)

文章来源：电工技术学报

作者：白建成、客金坤、高冲、 许京涛、 冯静波（先进输电技术全国重点实验室（中国电力科学研究院有限公司） 北京 102209）

摘要： SiC MOSFET 具有低导通电阻、低开关损耗、高开关频率以及优异的反向恢复特性。器件过快的开关速度，会导致严重的开关过冲、振荡和串扰。此外其短路承受能力弱，需要保护电路具备更快的响应速度，但较高的开关变化率，又使得保护电路的快速响应与抗噪声能力难以兼顾。为确保其安全可靠工作，该文提出基于多段式电平调控的驱动与保护方法。驱动方法解决开关过程多个目标的协同优化问题，在获得较快的开关速度和低损耗的同时，有效地抑制过冲和振荡；保护方法提出了增加补偿回路的导通压降检测电路，降低了温度和负载变化对检测精度的影响，同时提出了两段式降低栅压的关断方法，增大故障检测盲区时间以降低干扰噪声影响，并采用软关断技术，抑制关断过电压。

关键词：SiC MOSFET 多电平驱动 开关轨迹 短路保护 软关断

0\. 引言

碳化硅金属-氧化物半导体场效应晶体管（SiCMOSFET）具有低导通电阻、低开关损耗、高开关频率、高耐压值以及优异的温度特性。SiC MOSFET开通时，其体二极管具有出色的反向恢复特性，反向恢复电流低；关断时，不会产生拖尾电流。这些优异的特性，使得 SiC MOSFET 在高温、高压、高频等应用环境中具有广阔的发展前景，使得整个电力电子装置的转换效率、功率密度及稳定性大幅提升。

SiC MOSFET 在高频开关过程中，过高电压电流变化率，会导致严重的开关应力过冲、振荡和串扰。在短路工况下，与 Si 器件相比，SiC MOSFET芯片面积小，电流密度更高，导致其短路承受能力较弱；SiC MOSFET 需要更高的栅极电压，栅极电压的增高会加剧栅极氧化层退化问题。这些副作用限制了 SiC 型装置电压等级和功率密度的进一步提升。为确保 SiC MOSFET 在较高的开关速度下安全运行，要求驱动电路能够调控 SiC 器件的开关轨迹，保护电路能够快速识别短路故障并安全关断。

国内外学者对 SiC MOSFET 驱动方式、过电流检测和短路关断等方面展开多项研究。针对高频开关调控方面，为了抑制应力过冲和振荡，最直接的方法是增加栅极电阻，但是单纯的增加栅极电阻，会增加开关延时和损耗。文献\[6-7\]提出通过变栅极电阻来调节器件开关过程，结构简单、控制容易。文献\[8-9\]提出通过变栅极电压调节开关轨迹，但是电平数量有限，隔离电源和驱动电路设计复杂，无法适应多种工况的控制需求。文献\[10-11\]提出通过调节栅极驱动电流或增加辅助电流来抑制过冲和振荡，电流控制电路的结构复杂、成本高，同时也增加了开关损耗。

针对大功率 SiC 器件短路检测和保护方面问题，目前成熟的短路检测技术主要基于饱和压降的退饱和检测和基于电流变化率的 di/dt 检测。退饱和检测技术直接检测器件短路时的漏源电压Vds，这种方法可能受到高 dvds/dt 的干扰，检测回路易受寄生参数和温度影响导致测量偏差；di/dt 检测方法利用源端的寄生电感测量漏极电流，检测速度快于退饱和保护，但是无法实现低电流变化率的保护，只适用于单管保护，应用范围受限。文献\[16\]提出了通过 di/dt 检测触发漏源电压 Vds 检测，利用两种检测方法同时保护器件，提升了保护检测的可靠性，同样针对低电流变化率的过电流工况，可能导致无法触发保护。文献\[17\]提出了利用电阻分压采集 Vds 电压，该电路需承受高电压，因此采集电阻值和分压比较大，不适合精确检测 Vds，适合短路故障判定。文献\[18\]提出了开通短路和正常工况下 dvds/dt 存在明显差异，通过检测开通的 dvds/dt可快速识别短路故障，但针对导通后的故障检测依旧采用传统二极管检测方法。文献\[19\]提出短路故障会导致栅极电流 ig 增大，但未给出短路电流与 ig的关系，并指出栅极电流的快速准确采集是个难题。

针对 SiC 器件开关过程控制、过电流检测和故障关断的需求，本文提出了一种多电平驱动和保护电路以及开关轨迹的调控方法。通过逻辑处理单元和数模转换电路实现多电平的可控输出，输出电压幅值和阶梯实时可调节，实现对速度、损耗、过冲、振荡和串扰等开关轨迹特征量的协同优化。同时，针对不同回路电感下的短路工况，提出了反时限两段式保护策略，并选取适合的故障关断方式降低短路电流变化率，限制关断过电压。此外，通过降低栅极电压限制短路电流增大，提升短路耐受时间，进而增大故障判定时间来滤除噪声干扰。

1\. 开关特性分析

1.1 开关轨迹描述

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4wplsYrI5EoBbfdq2FkOARee3P4nrxBk33ibz0DPiaENtqwLlqWk6qoIQ/640?wx_fmt=png&from=appmsg)

基于半桥拓扑的双脉冲测试是评估 SiC MOSFET开关特性的有效手段，双脉冲测试电路如图 1 所示。Q1、Q2 为 SiC MOSFET，VD1、VD2 为器件体二极管。Lbus 为功率回路寄生电感，L 为电感负载，IL为负载电流，CF 为体二极管寄生电容，vds 和 ids 分别为漏-源极电压和漏极电流，vgs 和 ig 分别为器件的栅-源极电压和栅极电流，Cgs、Cgd 和 Cds 分别为器件的栅-源电容、栅-漏电容和漏-源电容，Vp 为栅极驱动电压，Rg 为栅极驱动电阻，Rgin 为器件的栅极内电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4YQDicfm3L91k1mrsoHWksyO3BwHOl8BqUJIL0xYfa8w64nYFVZicZiaFQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET 开通关断过程如图 2 所示，Vth 和Vmp 分别为 SiC MOSFET 器件的阈值电压和米勒平台电压，Δids 和Δvds 分别为器件的开通电流过冲和关断电压过冲。开关轨迹分为稳态阶段和动态阶段，稳态阶段电压和电流可认为保持稳定不变，动态阶段可根据电压电流不同的变换过程从Ⅰ～Ⅷ细分为8 个阶段。

1.2 驱动电压对开关过程的影响

SiC MOSFET 的驱动电压直接影响开关过程的电压变化率 dvds/dt、电流变化率 dids/dt 以及电压电流过冲。在简化的开关轨迹模型中，开关过程的电压、电流变化率及过冲电压模型分析如下。

开通过程，在电流上升阶段Ⅱ，栅极电压 vgs 从vth 上升至 vmp，由于母线寄生杂感的影响，vds 电压略有降低，该阶段电流 idon 及变化率 didon/dt 表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4kTFdTcCLS6MXaqXL8R7zzm18scJ1gibkibDoibfbe9b2L73ZPU3Mr6fHw/640?wx_fmt=png&from=appmsg)

式中，RGon 为栅极开通回路 Rgon 和 Rgin 之和；gfs 为器件的跨导。当 vgs 从 vth 过渡到 vmp，电流从 0 增大至 IL 时，平均电流变化率分别选取 vth 和 vmp 点取平均值后，表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4G1FiahQKqdqUsVWqr9eiaiaV2w7UFQ2U7YRsGeycOHPKBiajhCBqevDF7w/640?wx_fmt=png&from=appmsg)

在电压下降和反向恢复电流阶段Ⅲ，栅极电流ig 主要为米勒电容 Cgd 充电，栅极电压 vgs 维持 vmp电压，施加到器件上的电压 vp＞vmp，该阶段，电流ids 为 IL 与反向恢复电流之和，电压变化率表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4HlAPjAfPwJc8FEb1ibsYQJoFXZwwkbX0LrZHgEbib8mqk6g7u6z3DLPw/640?wx_fmt=png&from=appmsg)

电流过冲发生在反向恢复电流阶段Ⅲ，主要由上桥臂二极管的反向恢复电流引起，与漏极电流上升率 didon/dt 有关。开通过冲电流Δids 可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4YGDXM9vwBCibcT65dyDpPtJumtRHrA9URXq1IXCtPw2ibicDPibzuCqthA/640?wx_fmt=png&from=appmsg)

式中，Qrr 为上桥臂二极管的反向恢复电荷。当二极管参数确定后，可以通过降低 didon/dt 来减小Δids。

开通电流过冲后的Ⅳ阶段，Q1 完全导通，体二极管寄生电容 CF 存储的过冲能量向母线寄生电感Lbus 释放，两者形成振荡回路。

关断过程，在电压上升阶段Ⅵ，当 vgs 电压维持vmp，施加到器件上的电压 vp＜vmp，该阶段器件电流近似为 IL，类似开通过程，电压变化率表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4odUZo5oO8OlPSaAoSvyw1kFEc9icMasqzXvEtLvXAiaJV37oQRiaJPQSg/640?wx_fmt=png&from=appmsg)

在电流下降阶段Ⅶ，当 vgs 电压从 vmp 降到 vth，电流从 IL 增大至 0 时，平均电流变化率分别选取 vmp和 vth 点取平均值后，类似开通过程，表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL45z60EW78N1G3BOfnOqo31yB0GAZRcSOjtj5ibERfRWVk0fZodo7EHaA/640?wx_fmt=png&from=appmsg)

电压过冲发生在电流下降阶段Ⅶ，主要由功率回路的寄生电感 Lbus 引起，与电流下降率 didoff/dt有关，当 Lbus 一定时，通过降低 didoff/dt 来减小Δvds。关断过电压Δvds 表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4datEMcYku02lTjJV9b7Th32BHyeDvobSUmbWEulLV0rU8F5G1cuA6A/640?wx_fmt=png&from=appmsg)

关断电压过冲后的Ⅷ阶段，Q1 完全关断，VD2完全导通，漏-源电容 Cds 存储的过冲能量向 Lbus 释放，两者形成振荡回路。

通过上述分析，SiC MOSFET 开关过程中的电压、电流变换率均与驱动电压有关，通过改变 vp 即可实现对开关过程电压、电流变化率的有效调控，抑制开关电流过冲Δids 和电压过冲Δvds，并减小振荡幅值，缩短振荡时间。

2\. 短路特性分析

SiC MOSFET 短路事件可能在变换器的任何时间和任何状态下发生，短路特性与直流母线电压、电流方向、幅值以及短路位置等参数有关。根据故障电流大小可分为过电流故障和短路故障，前者通常为负载侧短路故障，且短路回路电感很大，故障电流上升缓慢；后者通常为桥臂直通故障，短路回路电感小，电流上升迅速。不论哪种故障发生，SiCMOSFET 都承受着巨大的短路能量，巨大的能量可能会在短时间内烧毁器件，因此需要驱动单元快速识别故障并准确保护。

SiC MOSFET 在正常导通时，一直工作于饱和状态，漏-源极电压 Vds 维持低电压，当发生短路故障时，漏-源极电压 Vds 由低电压逐渐升高直至母线电压，其电压特性与电流、温度变化有关。以 Cree公司 1700 V/300 A 的 SiC MOSFET 为例，其输出特性描述了导通压降随电流和温度的变化关系曲线，如图 3 所示。在同等电流条件下，温度越高、导通压降越高，栅极驱动电压越高、导通压降越低。SiC MOSFET 的过载能力小于 IGBT，通常将额定电流至 1.5 倍额定电流作为过载区，超过 1.5 倍额定电流应采取过电流保护，此时导通压降仅为几伏；当电流超过 5 倍额定电流应采取短路保护，此时 SiCMOSFET 出现严重的退饱和现象，导通压降接近母线电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4ytIiaZxsK6osbFUU2XtpicKJF2p7oXHqUhSO09OaXmFNmc7lcxndBiaGQ/640?wx_fmt=png&from=appmsg)

3\. 多电平驱动保护电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL49mQ3hmCRibtSUSDlHvUIMRjxL1gYwaEPRwtwwJz9895qACTqQsHwKYA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 多电平驱动与保护电路如图 4 所示，包含多电平数控单元、数模转换电路、模拟信号选择器、运放调理电路、功率驱动电路和短路故障检测电路。该电路采用多电平方式控制 SiCMOSFET 的开关过程和故障软关断，可动态调整每种电压投切时间，实现对器件开关轨迹的精细化调控。针对不同类型的 SiC 器件，只需重新调整各阶段的开关电压和投切时间。

以下为各单元的功能说明：

1）多电平信号的生成方法

（1）数控单元采用 FPGA 芯片，通过高频 PWM信号，经过二阶低通滤波器，生成多路稳定的电平信号。

（2）FPGA 通过控制模拟信号选择器（74HC4067）地址管脚来选择想要输出的电平到 SiC 器件的栅极，该芯片最大支持 16 路信号输入，定义 S3 引脚作为故障模式位，采用故障关断算法时 S3 位置 1，采用正常开通关断算法时 S3 清 0。

2）多电平驱动方法

（1）模拟选择器输出的电平信号经过运放调理电路，将 0～3.3 V 的电压转变为−5 V（VEE）～20 V（VCC）。

（2）运放输出信号经过驱动芯片（ZXGD3006E6TA）和 NPN、PNP 构成功率放大电路，为器件提供驱动电压和电流，不同的电平信号共用一路驱动电路。

3）短路检测方法

（1）故障检测单元利用二极管检测器件退饱和状态来识别电流故障，增加镜像电流源补偿回路，抵消检测回路引起的测量偏差，相比传统二极管检测方式，提高了 Vds 故障电压的检测精度。

（2）采集到的 Vds 电压与故障阈值进行比较，超过阈值被判定为故障，保护单元采用两段式反时限保护策略，Vds 故障电压越高，FPGA 判定时间越短。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4WxmtMPHEGBVbrps5gGb8up6HCz4jzoI5eVm13eo7qENmUxicvr4roLA/640?wx_fmt=png&from=appmsg)

由于正常开关过程和短路故障对驱动电压的要求不同，将电平信号划分为四种，分别用于开通过程控制、正常关断过程控制、过电流关断控制、短路关断控制。电平调节单元可输出 9 路电平信号，详见表 1，每种电压都可独立设定。控制单元通过在选择器的控制引脚施加不同选择命令，能够输出对应的电平信号，并可实现栅极驱动电压的 ns 级切换。根据器件工作状态选择相关的电平信号输出到器件栅极，实现器件开关过程的动态调节，以及故障工况的安全关断。

4\. 短路检测策略

4.1 传统二极管检测短路的方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4UxzYpNmjEEl3ltC4sW54zJBrBsXDJFazeJQKQBdCBFEaFRiajrI4kOQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET 与驱动器并联连接，无法直接检测故障电流，需通过检测导通压降 Vds 来识别电流故障，可以采用二极管式退饱和检测电路，检测回路串联接入二极管，如图 5 所示。在 SiC MOSFET导通时，二极管正向导通，激励电流源产生检测电流，经过限流电阻和二极管流入 SiC MOSFET。当A 点电压 VA 上升超过阈值 Veth 时，比较器翻转输出故障闭锁信号；当 SiC MOSFET 关断时，二极管反向截止，故障检测使能 MOS 管 QA 导通，将 A 点电压下拉至低电平，故障检测电路被屏蔽。

在 SiC MOSFET 完全开通后，A 点电压 VA 的大小可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4ofeZxUDJdO2GjSpkmcTVWRyMTWaqsQwISEjxMvl6icwz1KsPemE9Z1A/640?wx_fmt=png&from=appmsg)

式中，VD 为二极管正向导通压降；VA 检测结果包含了 SiC MOSFET 的导通压降、二极管导通压降和限流电阻电压。该检测值会受到检测电流和温度变化影响，导致 Vds 检测误差大，其结果可用于短路故障判定，无法对过电流状态进行准确测量。另外针对高压 SiC 器件需要更多的二极管串联来承受反向击穿电压，A 点电位升高，容易触及阈值 Veth，引发误保护。

4.2 改进短路检测方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4CeFM0BricmnW7aFtDic6mibyJZhibUmQWYHKvaMdceUpiaxWyLiabpDGLnvg/640?wx_fmt=png&from=appmsg)

当 SiC MOSFET 的工作电流超过额定范围，如超出额定电流的 1.5 倍，此时导通压降仅有几伏，传统的 Vds 检测方式难以准确识别。为提高故障时电压 Vds 的检测精度，提出一种基于镜像电流源补偿检测回路的导通压降检测电路，如图 6 所示。该电路同时兼顾了 SiC MOSFET 过载和短路故障的识别。

利用多个性能近似的 PNP 晶体管产生双路镜像的恒流源，分别用于高压检测电路激励源 I1 和镜像补偿电路的激励源 I2，每个支路串联相同的限流电阻和检测二极管，保证在同样激励电流和温度下，两个支路的检测结果经过差分运放后可抵消高压检测电路的测量误差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4jX3duaRMuJhLeYNPTrTa7hy8iackZvL4qqwVlWibx2Zic4qTdMPHp87TA/640?wx_fmt=png&from=appmsg)

镜像双路恒流源电路由稳压管 VD、相同特性晶体管 Q1 和 Q2 以及限流电阻构成，如图 7 所示，两个晶体管的 VBE、基极电流 IB 和集电极电流 IC 相同，其中，IC=βIB，β 为晶体管的电流放大系数。

根据基尔霍夫电压定律（KVL），激励电流源大小满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4TtCSPYfWKmgsJgKENIVwy1xQa5vjAL9tibTvTmJ9AyxIG83Ck76ZcyQ/640?wx_fmt=png&from=appmsg)

差分运放输入端口的电压大小满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4MLs0PhRicx5Ef3hl54FwKaF95CzqKApictOK9DbOuP8hLZo4ibM8tNJ9A/640?wx_fmt=png&from=appmsg)

差分运放输出电压为输入“+”端信号与输入“−”端信号的差值，由式（10）可知，运放输出结果抵消二极管的非线性特征、限流电阻压降、温度、负载波动等带来的影响，最终精确地检测出导通压降 Vds，实现 SiC 器件的精准保护。此外，控制单元可利用模数转换器（A-D）采集导通压降，用于对器件工作电流、结温、损耗的评估。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4NOG2l49sETIhdYicyQmpUfolonJx89K6aa5ibPxIXbS1TJjP5b9hmPUA/640?wx_fmt=png&from=appmsg)

基于上述改进型检测电路，设计满足−5～5 V的导通压降检测多电平驱动单元，验证环境温度从20～80℃下的采集精度，并与传统无补偿回路的检测电路做对比，试验结果如图 8 所示，传统无补偿回路检测电路的误差随着温度的增大，偏差达到750 mV。改进型检测电路在全温度范围内检测误差小于±50 mV，远远优于传统检测电路。

4.3 两段反时限保护策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4XFnqoQjwic3bppQMUibXMHJiaUhbLrrduvEyPO0L4YavZgnrkjICxchRQ/640?wx_fmt=png&from=appmsg)

多电平驱动单元依据短路故障的严重程度采取两段式反时限保护策略，故障电流越大，设定的保护阈值越高，判定时间越短；反之，故障电流越小，设定的保护阈值越低，判定时间越长。两段式反时限保护策略如图 9 所示，第一段比较器的阈值电压为 Veth1，设定值依据 SiC 器件在高结温下 1.5 倍电流对应的导通压降，保护判定时间包含检测盲区时间 tb1 和滤波检测时间 tf1，在 SiC MOSFET 完全导通前，需要预留足够的盲区时间 tbl 防止检测电路误触发。第二段比较器阈值电压为 Veth2，设定值大于在高结温下 5 倍电流对应的导通压降，保护判定时间包含检测盲区时间 tb2 和滤波检测时间 tf2，设定值应该满足器件的短路耐受能力。不同的厂家器件耐受时间不同，如英飞凌对外宣称其 Cool SiC MOSFET具有 3 μs 的短路承受时间，CREE 和 Rohm 公司的短路承受时间约为 2 μs。

5\. 开关轨迹调控策略

SiC MOSFET 的开关过程可分为八阶段，第Ⅰ和第Ⅴ阶段为开关延时，该阶段有着较为清晰的界限，通常以 Vth 为界，但其他阶段没有清晰的界限。其他阶段时间的长短与器件的工作电压和电流有着密切的关系，工作电流越高，电流上升和下降时间越长；同理，工作电压越高，电压的下降和上升时间越长。为此，考虑多电平驱动功能的兼容性，将开通和关断过程分为六个调控阶段，分别为开通前加速、开通米勒平台调控、完全开通、关断前加速、关断米勒平台调控和完全关断，每个阶段可独立调整输出电平和调控时间。

本文提出的多电平驱动保护电路，不仅能够实现 SiC MOSFET 的动态特性调控，还能依据不同的故障类型智能选择合适的保护算法，按照类型分为正常关断策略、过电流故障关断策略和短路故障软关断策略。通过不同的关断算法，既保证了 SiCMOSFET 在正常开关时对损耗的要求，又满足在过电流、短路等故障时对电压尖峰抑制的需求。

5.1 正常开通调控策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL47ibHodHj9OMlRW6H5R1IfSFncC1za1y9uhV22DRpGtlObzdnr7TGM5Q/640?wx_fmt=png&from=appmsg)

多电平驱动采用三段式电平开通策略如图 10所示。t0～t1 为导通延时阶段，施加较大的栅极电压Von1，通常电平接近 VCC，用于缩短开通时间，且Ton1 时间应在电流上升前停止施加，计算公式为 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4Rkn6uz09oGZYQ4Mp14my23xu8CYcicUEbU5aEZEfn9KMicZhhDribyZwA/640?wx_fmt=png&from=appmsg)

t1～t2 为电流上升和二极管反向恢复阶段，基于1.2 节过冲电流与栅压的关系式（2）、式（4），按照式（12）选择合适栅极电压 Von2，介于 Vth 与 VCC 之间，控制电流上升率，减小反向恢复的过冲电流。Ton2 时间需大于电流上升和电压拖尾振荡时间之和，但 Ton2 时间越长，开通损耗越大。随后采用最大电平 Von3，通常电平接近 VCC，使 SiC MOSFET完全导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4CWSS5q5RLLCKyKKPORSaBkmDnaxCMmSicoGalGFv3qxYZuF6dlDjo0w/640?wx_fmt=png&from=appmsg)

5.2 正常关断调控策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4aUWT45R5nBH7KfuYYCzuYUrQ84mQibr9CJR5EI7UnZRUJSlG0rDAMmA/640?wx_fmt=png&from=appmsg)

多电平驱动采用三段式电平关断策略如图 11所示，t0～t1 为关断延时阶段，施加较小的栅极负电压 Voff1，通常电平接近 VEE，用于缩短关断时间，且 Toff1 时间应在电流下降前停止施加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4r5NtjsP2rGwvB0Hp9tVsYibbnCAw9Tgrndiaus9qIO0QEBNeAsqP4B5g/640?wx_fmt=png&from=appmsg)

t1～t2 为电流下降和电压过冲阶段，基于 1.2 节过冲电压与栅压的关系式（6）和式（7），按照式（14）选择合适栅极电压 Voff2，介于 Vmp 与 VEE 之间，控制电流下降率，减小关断电压过冲。Toff2 时间需大于电流下降和电压振荡时间之和，但 Toff2 时间越长，关断损耗越大。随后采用最小负电平 Voff3，通常电平接近 VEE，使 SiC MOSFET 完全关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4bLZgb1CzMzM5WpMg0EoCdhjj4zTo2hdiau6ScNLct0XBhWwxRTibpUOw/640?wx_fmt=png&from=appmsg)

5.3 过电流关断策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4ONwdib45xWRGOor56CglYWibsK4sxiaS7QLDAyXrsr2psO1ia1Jwrs1GXA/640?wx_fmt=png&from=appmsg)

当发生负载短路时，回路电感较大，SiC MOSFET故障电流缓慢爬升，导通压降逐渐增大。t1 时刻，故障电流对应的导通压降超过比较阈值 Veth1；t1～t2时间为驱动的滤波时间 tf1，如果该时间内一直超过比较阈值，则触发过电流软关断策略如图 12 所示；t2 时刻，采用软关断电平 Voffe1 缓慢关断故障电流，减少关断过电压，Voffe1 的选择方式参考式（14），此时的电流为过载电流。关断时间 Toff3 更长，Toffe1应大于 Toff1 与 Toff2 之和，且小于上下桥臂死区时间。t3 时刻，施加负压 VEE 保持器件完全关断。

5.4 短路软关断策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL42qFyKcw8eicHxBPePxGrkfpdKkC7icwEJIrcGxkqZkYLnPOQks79HJMw/640?wx_fmt=png&from=appmsg)

当 SiC MOSFET 发生短路故障时，故障电流迅速上升，导通压降会迅速增大至母线电压，如图 13所示。t1 时刻，故障电流对应的压降超过比较阈值Veth2；t1～t2 为驱动器的滤波时间 tf2，如果该时间内压降一直超过比较阈值，则触发短路软关断策略，该滤波时间远小于过电流滤波时间 tf1；t2 时间，降低栅极电压至 Voffe2，该电压接近正常电流时的米勒电压 Vmp，使器件继续保持导通状态，SiC 器件的电流会被限制在较低水平；t3 时刻，如果管压降不再高于比较阈值，则恢复正常工况；反之，作为短路故障采用短路软关断电平 Voffe3 关断故障电流，Voffe3的选择方式参考式（14），此时的电流为短路电流。当故障电流接近 0 时，t4 时刻采用负电压完全关断。t1～t4 时间为短路故障保护时间，一般不超过 3 μs。

6\. 试验与结果分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4ZZIfice7hksK7VKiaicXicMwxbRBV98UBNBC5WLK1X14qEAv2NZnyniaJgA/640?wx_fmt=png&from=appmsg)

设计满足 1200～1700 V 电压等级、半桥式 SiC MOSFET 控制保护的驱动器，驱动器集成了多电平驱动电路、短路检测和软关断算法，关键性能参数详见表 2，可用于桥式变流器、开关电源、变频器等，满足了器件大电流驱动、高频工作的需求。针对不同的应用工况，实际关断电平的选取，与工作电压电流、故障类型、回路杂感、器件耐受能力等有关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4Zyia4zvLoZNgGpECIqicNzColsQIW5yQTmiay3txrGZrKvzXlOao6ocEQ/640?wx_fmt=png&from=appmsg)

为验证驱动器开关特性调控、短路检测和保护功能的有效性，搭建了如图 14 所示的双脉冲试验平台。被测试器件选用 CREE 公司 CAS300M17BM2，是 1700V/300A 的 SiC MOSFET。直流电容为6.5 mF，负载电抗为 55 μH，母排杂感为 10 nH。

6.1 开关轨迹调控试验

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4NZCIMciaXDo2aJVBQqRE0ficsZ7vibu7IC0CJESjbNPibAbx0I5IQictpgA/640?wx_fmt=png&from=appmsg)

为了验证所设计的多电平驱动器（Multi-LevelDriver, MLD）的调控效果，设定三种不同试验参数作为对照，三种 MLD 开通、关断电流，电压和损耗特性对比如图 15～图 20 所示。MLD1 开通关断过程仅有一个电平，分别为正电源 VCC 和负电压VEE，MLD2 和 MLD3 开通关断过程各有三个电平，选取的电平电压和控制时间详见表 3，其中 MLD1以提升开关速度为目标；MLD2 以抑制开关过冲和振荡为目的；MLD3 在开关速度、过冲和损耗之间寻求平衡点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4ACqxrYL5hObic3ELvteLuS6haPzUg2t5SRcl1odKEd8SQorBxl6iaJ8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL42neQcIvelpveszXrJdVmfowYhKicALDibassSG1FFBEOmMtvdY4Ltf8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4N60AuQrhvN3tNctKQiaW6sXReNavj2FWdKQ1V8rIhuNlT6icRG2icyjEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4ljX1vxXUAoM9iaicZiaCoJtXUtLQroRm3zT7PbjaVgiav7dLUrR1prPlCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4OSlLWOSGo18xNKv6DkrcYia901eZD0RRbicFKpUeIhKwZzmcB8fKO08A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4yP56tuPicaI2zrGATgX2BoFH3WWMPQa3Cb83c6dqXUTrBRsicS3UibTFQ/640?wx_fmt=png&from=appmsg)

三种驱动器保持相同的驱动电阻，开通电阻为2.2 Ω，关断电阻为 1 Ω。SiC MOSFET 的双脉冲试验电压为 900 V，电流为 300 A。

三种驱动器测试结果见表 4，从开关延时、反向恢复电流、电压过冲、损耗等方面进行对比分析。在开关延时阶段，MLD2 和 MLD3 通过采用加速控制策略，使得开关延时与 MLD1 相近。在电压电流变化阶段，MLD1 采用最大的开通电压和关断电压，开通关断延时最短、损耗最小，但是开关过冲最大，且开关振荡最剧烈；MLD2 采用最小的开通电压和关断电压，开关过冲和振荡得到很好抑制，但是开关延迟最大、开关速度最慢、损耗最大；MLD3 选用折中的调节参数，同时兼顾了开关速度、过冲和损耗。因此，MLD3 试验参数更适合 SiC 器件的应用要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4lf1ibFJN0XqfXt99J1E1FQwHAYsNwMVve4sm3kvQKvxCTKjqe1rl3OQ/640?wx_fmt=png&from=appmsg)

6.2 故障保护试验

为验证驱动器导通压降检测和保护功能的有效性，分别开展过电流和短路保护试验，两者采用不同的检测参数和保护关断算法。驱动的两段反时限配置参数：过电流保护阈值 Veth1=5.4 V，保护时间为 2 μs；短路保护阈值 Veth2=9.5 V，保护时间为800 ns。两种保护的关断参数详见表 5。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL46kI3icmM59nMxHFGGGN4exIoA77A0TLO3frcTXrUByIDWZoruJwLUFg/640?wx_fmt=png&from=appmsg)

过电流保护试验基于图 1 的双脉冲试验电路，下管 Q2 作为被测对象，上管 Q1 处于关断状态。脉冲发生器向 Q2 发送开通命令，直流电容经电感和下管 Q2 放电，电感电流持续增大，当驱动器检测到Q2 的导通压降达到过电流判定阈值 Veth1，触发过电流保护策略，关断 Q2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL43c8PRQxibvNXPdTiaMiaIXUFhe6IPsPkMjhSHmjX5uvXPJGjic01fM6ibMw/640?wx_fmt=png&from=appmsg)

过电流故障关断试验波形如图 21 所示，SiCMOSFET 的峰值电流为 430 A，驱动器采用软关断策略，最大关断尖峰仅有 109 V，关断电压过冲和振荡得到抑制。

短路试验电路基于图 1 的双脉冲试验电路，上管 Q1 用导线短接，电容电压充电到 900 V，脉冲发生器向 Q2 发送开通命令，当下管 Q2 导通时，导致上、下管形成直通短路，短路电流迅速增大，当驱动 2 检测到 Q2 的导通压降超过短路判定阈值 Veth2，触发短路保护策略，关断 Q2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhKDjWAo3Bvn3QO1v9PaL4Tjnyu2C7R9rQg8mBY2Fx6DwX0513dT6OPT8QZc3EUOQHibGOQJzicSWA/640?wx_fmt=png&from=appmsg)

短路故障软关断试验波形如图 22 所示，SiCMOSFET 的峰值电流达到 4.98 kA，是额定电流的16 倍，采用软关断策略，最大关断尖峰仅有 102 V，比正常关断和过电流关断的尖峰还小，实现了短路电流下的安全关断。

7\. 结论

通过建立栅极电压与开关过程的电压、电流变化率的关系模型，解释了栅极电压对开关轨迹的影响规律，改变驱动电压可实现开关过程电流变化率的有效调控，抑制开关过冲Δids 和Δvds，并减小振荡幅值。为此，提出了基于多段式栅极电平调控的 SiCMOSFET 的驱动和保护方法，设计出多电平 SiC 驱动器，通过修改软硬件参数可以适配多种电压和封装样式的 SiC 器件。

在开关轨迹方面，多电平驱动器采用三段式变电压调控策略，在不同阶段独立调控栅极充放电电流，实现开关轨迹的多目标协同优化，在获得较快开关速度和低损耗的同时，有效抑制过冲和振荡。

在保护方面，提出了增加补偿回路的导通电压检测电路，降低了温度和负载变化的影响，检测精度大幅度提升。采取两段式反时限保护方法，实现过电流和短路故障的独立检测和保护。通过两段式降低栅极电压的关断方法，能够限制短路电流增大，提高短路故障检测盲区的时间以降低干扰噪声影响，并采用软关断技术，有效抑制关断过电压和振荡。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl4h7IPSLjmbLicPnJYetliaKBJmQVYicE72IKVqQbME7lFib89xHTQ8GmggGHtdTNTicGvwjDibFR61X9A/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl4h7IPSLjmbLicPnJYetliaKf3X84KLW8uTwjBZXQlfDRvwicXickYtqiamJzENdbovIFd2SAclvBHbYw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl4h7IPSLjmbLicPnJYetliaK6WSvXQGEtaACwXDEcxOqNAThFwYpNRRhmzcpFKdbQqqlDkFKICF1ibQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl4h7IPSLjmbLicPnJYetliaKe47NUEeHFULO7liciak6tFm4POCiaz0jDaTGw3syI1WZz5xfoZLiaeWJeg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)