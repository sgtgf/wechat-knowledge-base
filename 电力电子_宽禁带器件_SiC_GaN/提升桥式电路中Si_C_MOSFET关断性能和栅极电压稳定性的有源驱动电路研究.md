# 提升桥式电路中Si C MOSFET关断性能和栅极电压稳定性的有源驱动电路研究


> 原文地址: [https://mp.weixin.qq.com/s/nvFdSLrgmlABmiEWsCy\_eA](https://mp.weixin.qq.com/s/nvFdSLrgmlABmiEWsCy_eA)

**文章来源：**中国电机工程学报

**作者：**李虹，邱志东，杜海涛，邵天骢，王作兴 

(北京交通大学电气工程学院，北京市 海淀区 100044) 

**摘要**：碳化硅金属氧化物半导体场效应管(silicon carbide  metal oxide semiconductor field effect transistor，Si C  MOSFET)以其低开关损耗、高工作频率、高开关速度等优 点越来越广泛地应用于各类电力电子变换器。然而，电路中 寄生电感的存在、过高的开关频率和速度，会使得Si C  MOSFET在关断瞬态产生漏极电压尖峰和振荡，严重情况 下可造成雪崩击穿；并且加剧栅极电压的串扰(crosstalk)现 象。上述问题不仅对半导体器件的安全运行构成威胁，而且 会恶化电力电子变换器的高频电磁干扰问题。为此，文中首 先分析Si C MOSFET关断过程瞬态电压尖峰和振荡以及串 扰的形成机理，并在此基础上提出一种基于dv/dt检测的提 升Si C MOSFET关断性能和栅极电压稳定性的有源驱动电 路。该驱动电路通过检测关断过程中漏极电压上升的斜率， 在漏极电流下降阶段抬升栅极电压，从而抑制漏极电压尖峰 和振荡；在串扰发生阶段构造低阻抗回路来有效抑制栅极的 串扰尖峰。实验结果表明，所提有源驱动电路不仅能够有效 抑制Si C MOSFET关断过程漏极电压的尖峰和高频振荡， 而且能够有效抑制栅极串扰的正负向电压尖峰。因此，所提 出的有源驱动电路可以有效抑制电力电子变换器的高频电 磁干扰，提升其电磁兼容性能。 

**关键词**：碳化硅金属氧化物半导体场效应管；电压尖峰和振 荡；串扰；有源驱动；电磁干扰 

**0 . 引言** 

随着电力电子技术的高速发展，电力电子设备要求工作在高频、高效、高功率密度的场合。碳化 硅(silicon carbide，SiC)材料在临界击穿场强、禁带 宽度、热导率等方面的性能是传统硅材料的数倍， 这使得SiC器件更适用于高压、高温、高频、高效 的工作场合。目前，Si C器件正被广泛应用于电 动汽车、光伏发电和风力发电等相关领域。在桥式电路应用中，SiC金属氧化物半导体场效应管 (metal oxide semiconductor field effect transistor，MOSFET)在高频开关过程中过高的dv/dt和di/dt不 仅会因寄生参数产生漏极电压电流尖峰和振荡，而 且会加剧栅极串扰现象，造成器件失效，加剧共模和差模EMI干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjrBKVDx6IPH2pevsxUOYwFRMdwYPGpE5GG6nOIyjzt9uVRW9nx6ODBg/640?wx_fmt=png&from=appmsg)  

如图1所示，SiC MOSFET在桥式电路应用中 关断过程产生的漏极电压尖峰和振荡导致的雪崩 击穿失效及栅极串扰导致的失效是主要失效模式， 并且会产生额外的损耗；开通过程由SiC MOSFET 反并联二极管反向恢复电流引起的漏极电流尖峰 振荡由于器件能够耐受的瞬态电流较大，通常不会 造成器件失效，主要会造成开关损耗增加。在 针对电力电子设备的高频电磁干扰(electromagnetic  interference，EMI)干扰中，由dv/dt造成的共模EMI 电压是噪声电压的主要成分，由di/dt造成的差模 EMI通常满足标准。因此抑制漏极电压尖峰振荡 和栅极串扰是降低电力电子变换器高频EMI，提升 其可靠性的重要手段。

国内外学者针对Si C MOSFET出现的漏极电压尖峰振荡和栅极串扰问题提出了多种抑制方法， 可以大致归纳为无源类抑制方法和有源类抑制方法。无源类抑制方法主要包括优化PCB 布局、增大栅极阻抗、栅极驱动采用负向关断电压和增加RCD吸收电路等。但是上述方法 的抑制效果有限或者会影响开关速度，增加体积和损耗，降低变换器效率。近年来，越来越多的学者将关注点集中在驱动回路，研究了多种有源抑制技术。 针对漏极电压尖峰振荡问题，有源驱动技术通过检测SiC器件在开关过程的动态参数，调节驱动 参数，优化开关过程，减小漏极电压尖峰和振荡时间。根据检测动态参数不同，主要可分为以下3类： 栅极电压检测、漏极电流和漏极电流变化率di/dt 检测、漏极电压dv/dt检测 。

文献\[17-18\]通过检测栅极电压，判断开关过程的各个阶段，灵 活地控制驱动阻值，实现电压尖峰和振荡的抑制。 然而，不同的SiC MOSFET，所检测的栅极电压不 同，因此不具有通用性。文献\[19\]通过在器件源极 串入0.5Ω 电阻检测漏极电流，判断产生电压尖峰的阶段，从而调节驱动电阻和减少驱动电流。但是电流较大的工况电阻产生的损耗很大，实用性不 强。di/dt检测是利用共源电感LS感应出电压进行检测，但是检测di/dt来改善关断电压尖峰在实际工程应用中存在诸多困难，LS在器件生产出厂就已经确定，无法进行设计，目前提取共源电感方法只能得到一个估计值，无法精确提取，并且检测电路存在延时很难实现快速反馈。目前，学术界采用 dv/dt检测抑制电压尖峰主要是针对IGBT进行应用，这是因为IGBT的开关时间通常在几百纳秒，有足够的时间对dv/dt检测反馈信号进行处理， 使驱动电路在产生电压尖峰前动作。针对串扰问题，有源米勒钳位技术(active miller clamp，AMC) 可以用于解决SiC MOSFET串扰问题，但是容易受到器件共源电感、检测回路杂散电感的干扰，使得AMC失效。文献\[24\]提出一种栅极阻抗调节技术 (gate impedance regulation，GIR)，由一个开关管和 一个电容组成的辅助电路，通过逻辑信号控制辅助开关管，在开关瞬态过程中降低栅极阻抗，抑制串扰。文献\[7\]引入两个开关管和两个二极管组成辅助电路，构成多电平有源驱动(multi-level active gate  driver，multi-level AGD)，通过改变栅极电压和栅极阻抗达到抑制串扰的功能。然而上述方法均需要引入额外的控制信号，增加控制的复杂性。 

综上所述，现有有源驱动方案只具有抑制漏极 电压尖峰振荡或者栅极串扰功能，并且检测电路延 时较长，难以实现快速反馈，且驱动电路控制复杂。 本文以桥式电路为基础，在详细分析SiC MOSFET 关断过程漏极电压尖峰和振荡以及栅极串扰形成 机理的基础上，提出一种应用于桥式电路中提升 SiC MOSFET关断性能和栅极电压稳定性的有源驱动电路，通过检测关断过程中漏极电压dv/dt的突 变，并合理设计电路的固有延时时间和电路参数， 使得有源驱动电路在产生电压尖峰前发生作用，从 而实现对关断电压尖峰的有效抑制；并在串扰发生 阶段提供一个低阻抗回路，以达到抑制栅极串扰电 压尖峰的效果。对有源驱动电路的参数进行详细的 设计，最后，搭建双脉冲实验平台，验证该方法的正确性和可行性。 

**1 . 桥式电路中Si C MOSFET关断特性与串扰机理分析** 

在桥式电路中，含有两个串联互补导通的开关器件，开关管在高速开关动作时存在串扰问题。本文中将产生干扰的开关管命名为主动管，将被干扰 的开关管命名为被动管。为了更好地分析SiC  MOSFET关断过程漏极电压尖峰、振荡以及栅极串 扰的形成机理，采用图2所示考虑主要寄生参数的双脉冲测试电路。图中：H为上管对应的标号，L 为下管对应的标号；VDC为直流母线电压；I L为负 载电流；Vg为驱动电压；R g为外部驱动电阻；R gin为栅极内部电阻；Cg s、C gd和C ds分别为栅源电容、 栅漏电容和漏源电容；Ld、L s分别为漏极和源极寄 生电感。为了方便分析，定义输入电容Ci ss =  Cgs +  Cg d，输出电容Coss =  Cds +  Cgd，等效栅极电阻Req =  Rg +  Rgin。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjHwq9ayribicTRyyzPsjIAMRjyuYCCKdpVmpDlAsEwniadibAzQDYLCcHag/640?wx_fmt=png&from=appmsg)

**1.1  SiC MOSFET关断特性分析** 

在本文中，将图2中的下管QL定义为主动管， 上管QH定义为被动管，由于桥臂电路两端电压始 终等于母线电压VD C，被动管Q H的漏极电压将跟 随主动管变化，不是一个完整的开关过程，因此本文将分析主动管QL的关断暂态过程，进而分析电压过冲和振荡的原理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj60tvgh6GDGKF49maXdiaicF8icoLO7cDsOYvJNeNIM0f3chusuyCpVzpw/640?wx_fmt=png&from=appmsg) 

图3为Si C MOSFET关断暂态过程示意图，其中：VMiller为米勒平台电压；Vth为阈值电压；VCC为驱动输出的正向电压；VEE为驱动输出的负向电 压；vos为关断电压v ds\_L超出直流母线电压V DC的电 压；vg s\_L、v ds\_L和i d\_L分别为主动管Q L的栅极电压、 漏极电压和漏极电流。关断过程可分为以下4个阶 段：关断延时阶段(t0—t 1)，电压上升阶段(t 1—t 3)， 电流下降阶段(t3—t 4)，关断结束阶段(t 4—t 5)。

在(t3—t 4)阶段，为方便分析，定义L d = Ld\_H + Ld \_L，L s = Ls\_H + Ls\_L，忽略SiC MOSFET反并联二 极管的正向导通压降。则图2中对应的功率回路和 驱动回路有下式成立：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjQTvRTOibngFnYIu191sDDiahzj2VfXsnC9S4aj3qiaGvnAzeexlPKcY5g/640?wx_fmt=png&from=appmsg)

式中gm为SiC MOSFET的跨导。联合式(1)—(4)可知，vos可表示成式(5)所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjtFLmF9nia3JZuOCRSVGxerKMqdVmAgdUnZr4f61FWZAkeGLzFb8NsaQ/640?wx_fmt=png&from=appmsg)

在关断结束阶段(t4-t5)，漏极电压尖峰因功率回路阻尼形成衰减振荡，如图3所示。

由图3和式(5)可知，Si C MOSFET关断过程中 形成电压尖峰和振荡的原因是在漏极电流id \_L下降 阶段过快的did \_L/dt在寄生电感上会形成较大的压 降，叠加到SiC MOSFET漏源极两端产生电压尖 峰，进而产生衰减振荡。对于一个电路印刷板本身， 线路的寄生电感是固定的，因此减小电压尖峰可以通过减小 | did \_L/dt | 变化率来实现。从式(2)和(5)可 知，vo s可以表示为栅极电压v gs\_L的函数。因此， 本论文提出一种通过dv/dt检测来间接实现改善关 断电压尖峰的有源驱动电路，利用SiC MOSFET栅 漏寄生电容Cg d的非线性引起的dv/dt突变，准确地 检测t2时刻，通过合理的设计电路相关参数使图3 中(t2—t 3)阶段与电路固有延时相匹配，并在t 3时刻 之前对vg s\_L进行调整，从而通过对dv gs/dt的改变    实现对did \_L/dt的调整，最终实现关断电压尖峰的 抑制。 

**1.2  SiC MOSFET串扰机理分析** 

由上文可知，图2中的下管QL为主动管，处 于正常开通和关断状态，上管QH定义为被动管， 始终处于关断状态，用于观察串扰现象并进行分 析。为了更好地分析串扰机理，忽略源极寄生电感 Ls \_H的影响，主动管Q L开关过程中，被动管Q H的 等效电路如图4所示。被动管QH的漏极电压v ds\_H变化经过米勒电容Cg d\_H耦合，产生的米勒电流流 过栅极回路，引发栅极产生正负向尖峰和寄生振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjHBPGGBckicX4k9ap7zPGLWbkolmGSLSwfc8UPMLcO4QZGrvOLgnGtbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjicS63PhL7b3h8hS62aRhIpxrgr99sssnUs3YrMoiciadUYwIuI1apr1Nw/640?wx_fmt=png&from=appmsg)

如图5所示，为图2双脉冲测试电路中被动管 QH栅极电压v gs\_H对应的正负向串扰形成示意图。 通常串扰电压用vg s\_H表示，因为v gs\_H 是导致开关 误触发的直接原因。根据文献\[7,24\]可知，串扰电 压vg s\_H(t)最大值表达式如式(6)所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjrOdGt0RiaFicdysDCXic36cwZgsorJ2gm31hjQJWcDndAyo5JkZEVCOlA/640?wx_fmt=png&from=appmsg)

由式(6)可知，如果正向串扰电压最大值达到图5中所示SiC MOSFET的阈值电压Vt h，就可能 造成器件误导通，引起桥臂直通，损坏器件。式中 Cg d\_H、C iss\_H和V DC通常是由所选器件以及工作条 件所决定的，因此影响串扰电压最大值的因素主要 为驱动回路中的等效栅极电阻Re q\_H和漏极电压变 化率dvd s\_H/dt，在实际中减小漏极电压变化率可以 减小串扰电压峰值，但是这样会减小开关速度，增 加开关损耗。为此，本文将通过在正负向串扰发生的阶段，减小等效栅极电阻Req\_H，达到抑制串扰的效果。

**2 . 基于dv/dt检测的有源驱动电路设计** 

基于上述分析，本文设计一种有源驱动电路， 其可以应用于桥式电路中，达到抑制漏极电压尖峰 振荡以及栅极串扰的作用。本小节针对有源驱动电 路结构和原理进行详细介绍，同时也考虑了负载电 流变化对驱动电路参数设计的影响。 

**2.1  有源驱动电路结构和原理** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjiaPLaMwrLWtwLG5t04WQFlhVObGFD8BhhesVVchKUZTroTbq24lAtdg/640?wx_fmt=png&from=appmsg)

本文设计的有源驱动电路主要包括4部分，分别是驱动推挽电路、dv/dt检测电路、栅压抬升电路 以及栅压钳位电路，如图6所示，栅压抬升电路和栅压钳位电路各自独立，可以单独使用，下面将对 各部分进行详细说明： 

1）驱动推挽电路：用于产生驱动电压(VCC和VEE)，本文采用型号为1EDI60H12AH的商用驱动器。 

2）dv/dt检测电路：电压信号Vf由高压陶瓷电 容Cf和电阻R f对漏极电压变化率进行检测得到。 电压信号Vf可以近似计算为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vju5E8NyrSaj6WrYutrBoYIQzS7vXc7Kh0lwdoRiaB2iclQ7fe39v8Okog/640?wx_fmt=png&from=appmsg)

dv/dt检测电路的延时为电容Cf的充电时间， 选取电容Cf =10pF，电阻Rf =  6.8Ω，对应的时间常 数 τ = RfCf =  0.068ns，其延时可以忽略不计。

  3）栅压抬升电路：用于抑制漏极电压尖峰和 振荡，包含电阻R1—R 6，电压比较器COM1、高速 运算放大器Amp和小功率N沟道MOSFET QN 1。

表1为电路主要器件选型及器件本身延时。栅压抬 升电路固定延时tt otal ≈  4.5ns +  4ns +  9.6ns =  19.1ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjNcrUKmJo83hRHN4cnNicwDQQw9gWVo9poTOibHBkaWDrjPZSKF27QbAw/640?wx_fmt=png&from=appmsg)

栅压抬升电路工作原理图如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj4ib34Pqc716puibau5YfG25iaqER3lZGhvyNo1Yp7lgFicV6QEz66bAiaAQ/640?wx_fmt=png&from=appmsg)

由第1 节中漏极电压尖峰和振荡的原理可知，考虑关断损 耗之间的平衡，关断延时阶段和电压上升阶段 (t0—t 3)应保持正常的栅极电压；通过dv/dt检测电路 检测t2时刻的对应的dv ds\_L/dt变化率，检测的电压 信号Vf通过与给定的控制阈值电压V REF1进行比 较，产生脉冲，高速运算放大器Amp通过对脉冲 幅值进一步放大，使得后级小功率N沟道MOSFET  QN 1导通，从而向栅极注入电流ifb，改变栅极变化 率dvg s\_L/dt，实现栅极电压抬升。其中I g\_off为驱动 推挽电路提供的稳定驱动电流，其大小由外部驱动电源决定。由基尔霍夫定律可知，在图7中的t3—t 4阶段，式(8)—(10)成立： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjtV7UE74SOHAxy09apkn3tssOpia91OaoSSpayTLicic0YM3IU34zmnWCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjLjtZUXF1XHNohaz108RHMMDWJ0x0kFCqnTh9BehM57icqqjgzXzEliaA/640?wx_fmt=png&from=appmsg)

式中RDS(on)为Q N1的通态电阻，一般为10~100mΩ。 结合式(8)—(10)可知：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj2A3N3qatibq3OY0zgyT6cTX9qyrHT8BzTmCicrZh6ibqQTVic8YRSFJJ2Q/640?wx_fmt=png&from=appmsg)

因此可通过改变R6调节栅极变化率dv gs\_L/dt。 

由上述分析可知，VR EF1的值决定了栅压抬升电 路动作的t2时刻，从t 2时刻开始加上固有延时t total =  19.1ns，通过设计驱动电路参数保证tt otal ≤  t3 -  t2，可 以使得有源驱动电路的产生效果时间接近t3时刻。 如图8所示，(t1—t 2)阶段和(t 2—t 3)阶段dv ds\_L/dt数 值不同是由于栅漏电容Cg d非线性造成的。根据文 献\[26\]可知，在(t1—t 2)阶段和(t 2—t 3)阶段可将Cgd 分别近似表示为两个离散值Cg d1和Cgd2，且Cgd1≫Cgd2，以本论文使用的型为IMZ120R030M1H 1200V/56A SiC MOSFET为例，其Cgd随vds的变化曲线如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjBiclgWod55QZwNxGYHdUzu0dke4ssH4gQvf8ubOkvAdS45W1C4DaCvA/640?wx_fmt=png&from=appmsg)

因此在(t1—t 2)阶段和(t 2—t 3)阶段可得两个差值  较大的dvd s\_L/dt数值k 1和k 2，且k 1 ≪ k2，由式(12)  所示\[ 26\]。由此，可以根据器件datasheet中的Cg d值 估计出dvd s\_L/dt进入(t 2—t 3)阶段的k 2，确定V REF1， 使电路在t2时刻动作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjDL02LWElKbOBJrxyS1FhyEjsvJibVvvKfUTdcyJ8TyfKWgu5k02aJdg/640?wx_fmt=png&from=appmsg)

由第1节可知，vds\_L到达电压尖峰后开始衰减， dvds\_L/dt变化率由正值变为负值，二极管D 1不再导 通，使得Vf电压快速下降，当低于阈值电压V REF1时，栅压抬升电路将退出工作。 

4）栅压钳位电路：用于抑制栅极串扰，包含 电阻R7—R 9，电压比较器COM2和小功率N沟道 MOSFET QN2。其主要器件选型及器件本身延时如 表1所示。COM2的供电方式存在一定的局限性， 其采用正供电端接地，负供电端接驱动电压VE E的 供电方式，仅适用于驱动负压能够工作在COM2 负向供电电压范围的Si C MOSFET。栅压钳位电路 的工作原理图如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjNFWZott2BU4zmiaGNMibLSRp1F26BDxibNTGcrLgh3s3bVZkGjrMPibh8w/640?wx_fmt=png&from=appmsg) 

根据抑制栅极串扰的方法，在发生正向串扰时，可以通过dv/dt检测电路检测漏源电压vd s\_H的上升阶段，检测的电压信号Vf通过与给定的控制电 压阈值VR EF2进行比较，产生脉冲，控制Q N2导通， 构造一个低阻抗回路，米勒电流更多地流向阻抗较 低的沟道，正向串扰峰值减小。VR EF2取决于SiC MOSFET的工作条件。例如，当受干扰后的Si C  MOSFET栅极电压远低于其阈值电压时，此时不会 误触发，那么VR EF2可以设置较大，电压钳位电路 在开关瞬态过程不工作。在发生负向串扰时，此时 图6中Si C MOSFET的栅极电位vd低于驱动负向偏置电压VE E，Q N2的反并联二极管导通，米勒电流更多地流向阻抗较低的反并联二极管，负向串扰峰值降低。 

近似认为QN2的跨导增益是非时变的常数gm， 且反并联二极管的反向跨导增益(定义为寄生体二极管的输出特性曲线斜率)也采用gm表示。则1节中串扰电压vg s\_H(t)最大值可表达成如式(13)所示， 上述情况下串扰分析等效电路图如图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjXp2PPicTZibEso9TuB4bGqeiaXj2pjxExdH7UnGyAweX2iar9a2pqajMJA/640?wx_fmt=png&from=appmsg)

本文在进行上述驱动电路设计时充分考虑阻 容精度、温漂和运放增益带宽等因素的影响，保证 其在精度和带宽方面满足要求。选取的采样电阻Rf 和检测电容Cf在考虑精度和温度系数情况下范围 分别为6.732~6.868Ω 和9.97~10.03pF，其影响可以忽略不计。选取的比较器TLV3501最大翻转频率为 80MHz。选取的运放单位增益带宽为300MHz，在 本文所使用的增益 +4.13V/V情况下，对应的带宽为72.64MHz。由上文分析可知，检测电路固有延 时为19.1ns，以此作为有源驱动电路能够起作用的 最短t2—t 3阶段时间，其对应的频率约为52.5MHz， 小于比较器翻转频率和运放带宽。综上，dv/dt检测 电路精度以及栅压抬升和栅压钳位中的运放和比 较器精度和带宽都是满足要求的。

  **2.2  负载电流变化对驱动电路参数设计的影响** 

由于负载电流IL对于Si C MOSFET的dv ds\_L/dt 有影响。因此，VR EF1的设置还需满足I L动态变化 时栅压抬升电路还能正常工作。VR EF2的设置为了实 现更好的串扰抑制效果，将其设置为一个较小值\-4.69V，因此栅压钳位电路受IL动态变化影响较小。 

由式(12)可知，在驱动电阻和器件参数一定的 情况下，k1和k 2与I L成正比。假设工程应用中I L变化范围为IL 1—I L2，且I L2 >  IL1 >  0。如图11所示， 当IL变化时，其对应的t 1、t 2和t 3的时刻会变化为 t'1、t' 2和t' 3时刻，且k' 2 >  k2和k'1 >  k1成立。那么在进 行电路设计时，将检测阈值电压VR EF1预设定为与 最小负载电流IL 1时t 2时刻的k 2对应，只要保证最 小负载电流IL 1时t 2时刻的k 2与最大负载电流I L2时对应的k'1满足k 2 >  k'1，即可实现在负载电流变化 下，通过预设的阈值电压VR EF1可以准确检测t 2或 t'2时刻。根据公式推导可知，其负载电流的变化范 围IL 1—I L2应满足如下条件： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjWbHz8dY7QOLDt6KRDfYzjQll9xD6j8ZwUtBbicwu3v3O5XGRibnFm1zw/640?wx_fmt=png&from=appmsg)

 通过化简，可得： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjJiaUN76eEHGdWAAqtZZNOibsmPXBslqUMsDEQfYsNwQ6JQBkEW0Nl0Yw/640?wx_fmt=png&from=appmsg)

因此，在实际工程应用中，如果IL变化范围 IL 1—I L2满足式(15)，则根据最小值I L1预设定的阈 值电压VR EF1能够满足在负载电流动态变化后仍在 t'2时刻检测。在上述成立的情况下，只要保证有源 驱动电路检测环节存在固有延时tt otal ≤  t'3 -  t'2也成 立，即可保证VR EF1的设置满足I L动态变化的要求。 由文献\[26\]可知，t'3—t' 2阶段时间如下式所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjZdLpgZrOYFvQ6hGiaUsyZWNMb2d3icWua0ZEFATKbyuOsicZCNp8Urdgg/640?wx_fmt=png&from=appmsg)

因此，在实际工程应用中，在选定VDC、I L变 化范围及SiC器件后，可通过调节Re q\_L满足式(16)  t'3 -  t'2 ≥  ttotal成立。 

为了减小共源电感影响，本文选用目前应用广 泛的开尔文封装的1200V/56A SiC MOSFET进行测 试，型号为Infineon IMZ120R030M1H。测试工况 VD C =  600V。表2为对应的SiC器件相关参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjxpA0rL0BiagbIl4EYU1LfdLKN3vYYzb45CuTCjCpaIT1icic0Pez7icM2A/640?wx_fmt=png&from=appmsg)

对于上述型号的SiC MOSFET，IL2\_Max = 56A， 因此式(17)右侧恒小于0，式(17)恒成立。由式(18) 可知，在VD C和R g一定的情况下，负载电流I L越 大，t'3 -  t'2越小。由此可得到当IL取最大值56A时， 要满足t'3 -  t'2 ≥  ttotal =  19.1ns，驱动电阻最小值Rg\_Min 满足的条件： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjPLVicNTOp3b0A9S9VOgdZTrlmHvK2bXKa3BjGcZrdptib9p5JShxq2Mw/640?wx_fmt=png&from=appmsg)

因此，针对本文选定的SiC MOSFET器件型号，当驱动电阻满足Rg \_Min ≥  4.8Ω 的情况，VREF1根据一个较小的负载电流IL 1对应的k 2进行设置，即可保证IL在0~56A变化时，栅压抬升电路均能正常工作。综上，本论文选取的VREF1和VREF2值如表3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjnJe6F8J2F3JFa5wwzTfCkMDXPxUKyrJEmaxAvWO2iacny0IpwicgkUJw/640?wx_fmt=png&from=appmsg)

  **3 . 实验验证与分析** 

为验证所提出有源驱动电路的有效性，根据图2所示SiC MOSFET双脉冲测试电路搭建了如图12所示的硬件实验平台。表4为双脉冲实验平 台与有源驱动电路实验参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjnOaDARpDmfDkJQibv28kXmwvMPOLrKoqSmtp5ib7IJKfVj3PBDTia2k8A/640?wx_fmt=png&from=appmsg)

由第1节可知，在图2所示的桥式电路中，主 动管QL为正常的开通关断，而被动管Q H的漏极电 压被动变化，不是一个完整的开关过程，因此提出 的有源驱动电路中栅压抬升电路部分将无法应用。 因此，本文将提出的有源驱动电路中栅压抬升电路 应用于主动管QL，将栅压钳位电路应用于被动管 QH，分别对比负载电流I L =  25A，3种不同驱动电 阻(根据上述分析和工程应用经验分别选取Rg =  5、 10和20Ω)下传统有源驱动、被动管QH加栅压钳位 电路的有源驱动以及主动管QL加栅压抬升电路、 被动管QH加栅压钳位电路3种工况下的实验波形。 最后针对关断电压尖峰和振荡时间，开通和关断 dv/dt，正负向串扰峰值以及开关损耗进行了详细分 析，3种条件下的双脉冲测试电路如图13所示，实验工况具体如表5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjG2j1cjNHWrsnupnL7ibECsx1GFXZrtRbfDyQktWHg7wRr1fyHgFkldg/640?wx_fmt=png&from=appmsg) 

表5中实验条件Ⅲ的具体工作状态是通过检测漏极dv/dt使栅压钳位电路和栅压抬升电路实时动 作并分别作用于被动管QH和主动管Q L。若将两个 附加电路加在同一开关管，在检测上升沿dv/dt信 号后，两者对同一开关管的栅极电流注入和抽取驱 动电流作用相互耦合，从而失去其良好的关断性能。因此，栅压钳位电路和栅压抬升电路是应用于不同开关管的桥式电路。 

3种实验工况下不同驱动电阻的实验波形如图14—16所示。为了更好地进行对比分析，实验 波形中分别给出了开通和关断过程中主动管vd s\_L、 vg s\_L、i d\_L以及被动管v gs\_H的波形。 

表6汇总了以上不同实验条件下关断过程和串 扰过程的实验结果，可用于提出的有源驱动对SiC  MOSFET关断性能和栅极电压稳定性的优化程度 进行分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjwtZMGiaSHkyY3S8RvDiby8koxK47OUegBFcCT3YpMibGvXBIJEhREOfaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjhUe1KlRwRsrM94agIBLpiavQ7FTM0AsqULGGOa9CFcXawbS39cicPFAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjCnR8DMIlkDibX4T00WhqNDb7OBiacMLicZlicS4eJEp2wEiaSRC2hFZ0tDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj7qrWdd1icsMj2c2UIcicicvTJ5dTTA7cEAw4LiamPibeHibHPAhFcboMiaXSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vj2sIA69XTyIyV0yKNwlvL3ibbDUKfQKu4fOzzRHsxAcezibqWGeyhcSEQ/640?wx_fmt=png&from=appmsg)

从实验结果可知，与实验条件I相比，实验条件II能够很好地抑制正负向串扰尖峰，而对关断电压尖峰和振荡时间影响不大，其中正向串扰尖峰值平均下降42.58%，负向串扰尖峰值平均下降 65.85%，有效地避免SiC MOSFET误导通，减缓栅极负向电压应力，提升栅极电压的稳定性。实验条 件III在实验条件II的基础上增加了栅压抬升电路， 从实验波形可以看出在漏极电流id下降阶段栅极电 压被抬升，关断电压尖峰和振荡时间明显减小，其中电压尖峰值平均下降30.05%，电压振荡时间平均减小36.5ns。从实验结果可知，小驱动电阻(Rg =  5Ω) 抑制尖峰的效果没有驱动电阻较大时(Rg =  10、20Ω) 明显，这是因为在小驱动电阻下，对应式(16)中t2—  t3时间略小于器件固有延时t total =  19.1ns，使得有源驱动电路产生效果的时间略滞后于t3时刻。表7为 3种驱动电阻下，根据式(16)计算出的理论值与实 验测试的t2—t 3时间对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjcGfQornzaasRibJmyCWMxC2qvTuKWxZYGEVLKVI40QFRQ4fszMTIINA/640?wx_fmt=png&from=appmsg)

  为了更好地说明提出有源驱动的实用性，表8 汇总了以上不同实验条件下主动管QL的开通和关 断的dv/dt、损耗(Eo n和E off)以及开通和关断总损耗 (Et otal)。图17为总开关损耗的对比图。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjxMEqaxRP4REadM7j9VgfRShaybuRg5nibNnen9bmOzd3ou8lFAt7Rzg/640?wx_fmt=png&from=appmsg)

从开关损耗的对比结果可知，实验条件II的开通和关断dv/dt均高于实验条件I，总的开关损耗均低于实验条件I，平均减少21.82μJ，因此，驱动电路结构增加栅压钳位电路之后既能提升开关速度， 降低开关损耗，还能在高开关速度的情况下保持栅 极电压稳定。实验条件III在实验条件II的基础上 增加栅压抬升电路后，开通dv/dt增大，关断dv/dt 降低，尽管总的开关损耗相比较实验条件I有所增加，平均增加38.52μJ，但能够有效地抑制SiC  MOSFET的关断电压尖峰和振荡。 

综合表6、8分析可知，关断电压尖峰振荡和 开关损耗之间存在平衡。本文所提出的有源驱动方法在可以满足尖峰和振荡抑制效果的情况下，根据电路的固有延时和工程应用经验选取最小的驱动电阻值，从而减少开关损耗，实现关断电压尖峰振 荡和开关损耗的平衡。 

抑制开关过程中的漏极电压尖峰和振荡能够 从源头上减少电力电子变换器的高频EMI发射，本 文针对上述3种实验条件下驱动电阻Rg =  20Ω 的漏 源电压vd s\_L进行频谱分析，分析结果如图18所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllHQvWOZiaI6PfESLoNO4vjKquTiaFZogvFxxNicvN9s7HSCmiam7l2r0EDp9Wr46fYicAQFTDh83dJjA/640?wx_fmt=png&from=appmsg)

 由图18可知，实验条件I电压振荡在66.5MHz 附近产生尖峰，与实验中测量得到的电压振荡频率 基本一致。3种实验条件下低频段的幅频曲线基本一致，实验条件II和实验条件III的尖峰也在 66.5MHz附近产生，但是实验条件II的幅值相对于 实验条件I没有减少，实验条件III的幅值由 126dBμV降低至116dBμV，降低10dBμV，说明实 验条件III能够从源头上减小高频EMI。 

综合以上实验及分析结果，本文所提出的基于 dv/dt检测的有源驱动电路(实验条件III)可以很好 地适用于桥式电路中，能够同时具有抑制漏极电压 尖峰、振荡和栅极串扰的功能，并且不需要额外的 控制信号，器件数量少，延迟低。与传统的有源驱 动电路(实验条件I)相比，实验条件II可以在很好 地抑制正负向串扰尖峰的基础上，提升开关速度， 降低开关损耗，但是其无法抑制漏极电压尖峰和振 荡，因此对高频EMI无抑制作用；而实验条件III 能够在保证正负向串扰尖峰抑制效果与实验条件II 几乎相同的情况下，有效抑制关断电压的尖峰值和振荡时间，在驱动电阻Rg =  20Ω 时电压频谱尖峰幅 值降低10dBμV，但是会牺牲少量的开关损耗。因 此，在实际的桥式电路应用中，实验条件III即本 文所提出的有源驱动电路方案，能够在较少牺牲 SiC MOSFET损耗的前提下，有效抑制关断电压的 尖峰值和振荡时间以及正负向串扰尖峰值，抑制高 频EMI，这有利于提升SiC MOSFET的关断性能和 栅极电压稳定性以及电力电子变换器的电磁兼容性能，是3种实验条件中最推荐的方案。 

相比较于现有其他有源驱动方案，本文所提的有源驱动方案能够同时具有抑制电压尖峰 振荡和串扰的功能，结构简单，延迟低，适用于SiC  MOSFET的高速驱动。

  **4.  结论** 

本文针对SiC MOSFET在关断瞬态过程中出 现的漏极电压尖峰与振荡以及桥式电路应用中的 串扰问题，在分析了SiC MOSFET关断特性以及串 扰机理的基础上，提出了一种适用于桥式电路结构 的基于dv/dt检测的有源驱动电路，通过检测关断 过程中漏极电压dv/dt的突变，并合理设计电路的 固有延时时间和电路参数，使得有源驱动电路在产 生电压尖峰前发生作用，有效抑制关断电压的尖 峰；在串扰发生阶段提供一个低阻抗回路，达到抑 制栅极串扰电压尖峰的效果。本文提出的方法能够 满足负载电流动态变化的需求。最后通过实验验证 了其有效性。实验结果表明，提出的有源驱动电路 能够将漏极电压尖峰值平均下降30.05%，将漏极电 压振荡时间平均减小36.5ns，并且能够将正向串扰 尖峰值平均下降42.58%，负向串扰尖峰值平均下降 65.85%，在驱动电阻Rg =  20Ω 时电压频谱尖峰幅值 下降了10dBμV，这有效地提升了SiC MOSFET的 关断性能和栅极电压稳定性，从源头上提升了电力电子变换器的电磁兼容性能。 

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)