# 考虑寄生电容和电感影响的 SiC MOSFET三相全桥损耗计算方法


> 原文地址: [https://mp.weixin.qq.com/s/ozB0qYYuuHDeWscIlBF3vg](https://mp.weixin.qq.com/s/ozB0qYYuuHDeWscIlBF3vg)

文章来源：电源学报

作者：陈魁昊 1,2( 中国电源学会学生会员 )，刘旭 1,2( 1.省部共建电工装备可靠性与智能化国家重点实验室( 河北工业大学电气工程学院 )，天津 300130；2.河北省电磁场与电器可靠性重点实验室，天津 300130 )  

摘要：忽略开关过程中SiC MOSFET寄生电容和电感的损耗和导通过程中占空比变化所导致的导通损耗会降低三相全桥逆变器的损耗计算精度。为了解决上述问题，提出了1种考虑寄生电容、电感的SiC MOSFET物理模型，通过数据手册分段取值和振荡法获得寄生电容和寄生电感，计算了开关过程中寄生电容和寄生电感产生的损耗，推导出在空间矢量脉宽调制SVPWM( space vector pulse width modulation )下的平均导通损耗公式，得到三相全桥损耗。最后在基于SiC MOSFET的永磁同步电机控制系统上进行实验，分析了PWM频率对三相全桥损耗的影响，验证了SiC MOSFET物理模型参数的准确性，且基于SiC MOSFET物理模型的损耗计算方法能提高逆变器的损耗计算精度。1

关键词：SiC MOSFET；三相全桥逆变器损耗；寄生电感；寄生电容

永磁同步电机 PMSM ( permanent magnet synchronous  motor )功率密度高，可靠性高，因而被广泛应用于新能源汽车，作为其主要动力来源。同时以SiC和GaN材料为代表的宽禁带型半导体器件具有高频率、耐高压和低损耗的特性，为电动汽车 向轻量化、智能化、高效化的方向发展提供了可能。

随着 MOS 管开关频率的提高，米勒效应中产生的损耗占比越来越大，因而精确的损耗计算方法对于计算三相全桥逆变器损耗尤为重要。SiC  MOSFET损耗计算方法通常分为数学计算法和物理模型法。数学计算法中最常用的为积分法、三角形法和多项式法。积分法是对 MOS 管的开关过程分段做简单积分，但忽略了寄生参数的影响；MOS 管的开通损耗大于关断损耗，而三角形法将 开通损耗和关断损耗做相同处理；多项式法是将导通压降表示为电流和温度的函数，对整个开关过程中全部周期的 MOS 管开关损耗做平均值处理， 这样得到的结果更接近于实际测量值，但该方法不适用于高频计算。物理模型法主要有米勒电容模型法和双脉冲模型法。米勒电容模型法是用软件建立仅与母线电压有关的米勒电容模型，根据电压将寄生电容分段线性化处理，提高了开关损耗的计算精度，但也提高了计算难度；双脉冲模型法是对寄生电容做曲线拟合，并根据MOS管的开关过程分段列出损耗公式，但由于引入过多变量，增加 了计算工作量。

为了解决上述问题，提出了 1 种考虑寄生电容和寄生电感的 SiC MOSFET 物理模型，分析了 MOS 管开关过程中寄生电容与寄生电感的损耗， 推导出平均导通损耗的计算公式。研究了脉宽调制PWM( pulse width modulation )频率与电流谐波、三 相全桥损耗之间的关系，分别基于所提物理模型法、三角形法和积分法计算了三相全桥逆变器的损耗，并和实际测量值进行对比。最后，在基于SiC MOSFET 的永磁同步电机控制系统上进行实验，验证了所提物理模型法的准确性，且基于物理模型的计算方法提高了逆变器损耗计算精度。

1\. SiC MOSFET 物理模型

1.1 三角形法和积分法

不同计算方法对于 MOS 管的导通损耗计算方式大致相同，主要区别在于开关损耗的计算。三角形法将开通过程分为 2 个阶段，计算母线电压 VDC和漏源电流 ion,S1 曲线相交叉的阴影部分的面积， 即为开通损耗，如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA9jGKSStkl1Myfgc4GfXm1TtdTmTViaSQo7GIibkCvB8hyicV9k0yXHAog/640?wx_fmt=png&from=appmsg)

文献\[11\]将关断损耗和开通损耗做等效处理，虽考虑了二极管的开关损耗，但相比于二极管和 MOSFET 的导通损耗微乎其微，增加了计算量，却没有提高计算精度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAIyq9DdkXF7lAkCgPFOjAiaZ7y1XnzicXpXFzP2FOAicHh9icdWLBumz2Pg/640?wx_fmt=png&from=appmsg)

图 2为开关损耗的积分计算方法。将开通、关断过程均划分为 4 个阶段，分别对每个阶段做积分计算，再累加得到总开关损耗。与三角形法相比，该方法提 高了计算精度，但仍未考虑寄生电容和寄生电感的损耗。

综上，三角形法和积分法都未考虑在开关过程中寄生电容和寄生电感的损耗，同时考虑了二极管的开关损耗，提高了计算难度。为解决上述问题， 提出 1 种考虑寄生电容和寄生电感的 SiC MOSFET物理模型，简化计算过程，提高逆变器的损耗计算精度。

1.2 SiC MOSFET 物理模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAMxUpEzTGJVtrGHtW8m7g4ynQ3aruJvV9Bbk1Dbgc7UXRkKUEnqcMVA/640?wx_fmt=png&from=appmsg)

图 3 为单管 SiC MOSFET的寄生参数模型。图中：VDC为直流母线电压；Ls为外围回路总寄生电感；Ld为整个栅极、源极和漏极的等效寄生电感；Cd为二极管的等效反向恢复电容；I0为肖特基二极管SBD( Schottky barrier diode )续流时或MOSFET导通时的等效电流源；Rg为栅极电阻，可分为外部 栅极电阻Rgext和内部栅极电阻Rgin；vGG为栅极的驱动脉冲，分别为高电平VGG和低电平 VEE；Cgs、Cgd( Vds ) 、Cds( Vds )分别为MOS管栅源极、栅漏极、 漏源极寄生电容，为MOSFET内部的寄生电容。Cgs不随直流母线电压的改变而改变，可作为定值；Cgd( Vds )和 Cds( Vds )均是关于栅漏电压 Vds 的曲线函数，随着Vds的升高而不断降低直至稳定，本文利用曲线拟合和分段取值的方法，得到不同 Vds下寄生电容的近似取值。

1.3 寄生电容

Cgs可通过查取数据手册并结合公式求得，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAGnvHp41u49rSGfeBDbOQf1QQIPSYCHQWAyAQMrK1HYmt5maXVvXaJA/640?wx_fmt=png&from=appmsg)

式中：Ciss为输入寄生电容；Crss为反向传输电容；Coss为输出电容。

根据开通或关断过程中 Vds的变化，将开关过程划分为截止区、恒流区和欧姆区 3 个阶段。为了简化计算，依次在各个阶段对寄生电容作曲线拟合，然后取每个阶段的平均寄生电容，做恒定电容模型处理。依据Vds的取值判断所处的阶段，代入对应的寄生电容，从而降低了开关损耗的计算难度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAjibpmpP276UDjGQDaicFgdFBXialyL9Cj54giaiaKZgYNNPKKoNLcyAaSCw/640?wx_fmt=png&from=appmsg)

图4为Cds在不同阶段下的恒定电容模型。Cgd和Cds的曲线拟合公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyArSZwQTib2YEdl5WRyjNMrX9kDsqd2ZCJibbjZ3vLD9GeYZ7WEiaDjHh3Q/640?wx_fmt=png&from=appmsg)

式中：C0和C3分别为Cgd和Cds在0 V电压时的寄生电容；k1、k2 和 k3 均是调整参数，可以通过数据手册和曲线拟合求得，一般为固定值。二极管SBD的寄生电容CD也可做曲线拟合，Cgd和CD的求取方法与 Cds 类似，不再赘述。表 1 为不同阶段对应的寄生电容，其中 Vpt 为栅源极的米勒平台电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAO325Bb7bX7c2xJa3NZtqvWibuyo6TOG1iateSxv0U1icOflibEI7N53GSg/640?wx_fmt=png&from=appmsg)

1.4 寄生电感

开关器件在开通或者关断阶段存在振荡现象，可采用周期振荡法求取寄生电感。1.3 节已得到不同阶段的寄生电容，只需代入周期振荡公式即可求得寄生电感。为了简化计算，将 MOSFET 寄生电感分为 2 种，分别是器件外功率回路的寄生电感Ls 和开关器件的总寄生电感 Ld，参见图 3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAjrTPEToxS5JkQGOkyAjPzF4ibvmmeBjUPnSNqyugNbibwkEQETfH6eRQ/640?wx_fmt=png&from=appmsg)

图5为单桥臂逆变电路的等效电路，图中RL为负载电阻，用C1和 C2代替直流电压源，不参与回路的开关振荡，C1和 C2两侧电压为VDC/2。 开关管Q1 和 Q2的触发信号在 1 个周期内互补，各为半个周期。开通过程中，当Q2开通时，电流方向为正，此时C2 放电，主回路的寄生电感和Q2的寄生电容串联谐振，产生振荡，将寄生电容做△\-Y 变换，可以求得等效电容Cmg、Cmd和Cms分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAdbbrpXlJzzGZAmMyflSEDEpys1lfx8w29icDLYstG8tuvQmeQibhic3jw/640?wx_fmt=png&from=appmsg)

已知Cgd<<Cds<<Cgs，所以 Cmd<<Cmg，因此化简时忽略Cmd，得到开通时振荡周期公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAvwTTnKlWMR3bf68TBMBtzRU4IFOdau36rdVrykqhCNHMsPhIN3ehfA/640?wx_fmt=png&from=appmsg)

式中，Lloop 为 Q2 导通时 Ls 和 Ld 串联等效电感，Lloop\=Ls+Ld。

在 Q2 关断时，由于电感的存在，电流方向不可以突变，因此 D1 续流以维持电流方向不变， 此时仅有回路中的寄生电感 Ls 和二极管寄生电容 CD1 参与振荡，由此得到关断时的振荡周期公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAhvibunvnpaC0QlazsgLiabMaS6wtpE3c3upoXCiaKUvKZYfibS0BRhxNkg/640?wx_fmt=png&from=appmsg)

在已知振荡周期和寄生电容的前提下，联立式( 4 )和式( 5 )即可求得 Ls和 Ld。

2. 基于 SiC MOSFET 物理模型的损耗计算

SiC MOSFET 模型的损耗包括导通损耗、MOS管的开关损耗及寄生电容和寄生电感的损耗，其中导通损耗包含MOS 管和SBD 的导通损耗。由于SBD反向恢复时间仅几纳秒，反向恢复损耗远小于其导通损耗。为了简化，计算时将SBD 反向恢复损耗忽略不计。

2.1 SiC MOSFET 模型导通损耗

查数据手册得到MOS管和SBD的导通电阻RDS( on )、RD( Diode )，MOS管和SBD的导通损耗计算式分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAiaNkw8RCDoDa4rRREnsG42iaJpZ5cM06cujXFJ9n5jnsV2fW2bIECufQ/640?wx_fmt=png&from=appmsg)

式中：fsw 为MOS 管的开关频率；tc 和 tD分别为MOS管和二极管的导通时间；id和iD分别为 MOS管和 SBD 的漏极电流。

2.2 SiC MOSFET 模型开关损耗

由于 MOS 管的关断损耗分析与开通过程类似，因此只对开通过程作分段建模，并计算各个阶段的损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAXttESGuYOYWCSAHPf3KwhI2jNXIJ4VV35b32pxCOJdIV65XP48tvTw/640?wx_fmt=png&from=appmsg)

图6为SiC MOSFET开通过程的漏极电流id、栅源电压 Vgs和栅漏电压 Vds的变化曲线。Ipeak为流过MOS 管的电流id 在振荡时的最大峰值，Vds( on )为 MOS 管导通时的漏源电压。模式 1 对应( t0,  t1 )，为延迟开通阶段，此时 Vgs未达到阈值电压VTH，MOS管未导通，对应寄生电容为Cgs、Cgd1、Cds1； 模式2对应( t1, t2 )，为预开通阶段，对应寄生电容为Cgs、Cgd1、Cds1；模式3 对应( t2, t3 )，为米勒平台阶段，Vds急剧下降，id衰减振荡至稳定值I0，对应寄生电容为Cgs、Cgd2、Cds2；模式4对应( t3, t4 )， 已进入电阻区，MOS管完全导通，对应寄生电容为Cgs、Cgd3、Cds3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA4E2s9LAydO0AKYwLv1fQ6pX3h3zayFrQ0aRaJ4gibdrZXJaqBrVc0Zg/640?wx_fmt=png&from=appmsg)

图7为关断过程中id、Vgs和Vds的变化曲线。

模式1( t0, t1 )：图 5 中下桥臂的MOS管处于截止区，Vgs＜VTH，MOS 管未导通，此时对应的上半桥SBD续流导通，Vds\=VDC, id =0。随着vGG的上升，Cgs正向充电，Cgd1、Cds1反向放电，由于MOS没有电流，因此该阶段开通损耗Eon1\=0。

模式2( t1, t2 )：MOS开始导通，VTH<Vgs<pt， 产生了电流，Ld和 Ls开始分压，Vds略微下降，续流二极管关断，给Cgs正向充电，Lloop( Lloop\=Ls+Ld )的存在使电流不能突变，同时Cgd1、Cds1反向放电减慢电流的变化。MOS管进入恒流区，根据 MOS管的转移特性，id仅与Vgs有关，不随Vds改变，跨导系数为gfs\=id/ΔVgs。在t2时刻，电流达到峰值Ipeak， 这是由于该瞬间下桥臂二极管的反向恢复电流很大导致的电流尖峰，但SBD反向恢复时间极短， 所以尖峰电流又很快地衰减振荡至 I0，可以认为模式 2 结束的标志为电流id达到峰值，这一阶段开通损耗为 Eon2。

模式 3( t2, t3 )：MOS 进入米勒平台阶段，MOS管仍处于恒流区，Vgs\=Vpt，此时Cgd2 反向放电完毕，开始正向充电，而此过程中Cds2 仍旧在放电，Cgs 不流过电流。由于 Vgs 不变，根据 MOS 管的转移特性，id\=I0。类比分析过程得到模式 3 损耗 为 Eon3。

模式 4( t3, t4 )：Cgd2充电完毕，MOS进入电阻区，Vgs\>Vpt，Vgs逐渐上升至VGG，给Cgs充电至完全导通。漏极电流为 I0，Vds 保持在 Vds( on )基本不变， 此阶段对应寄生电容Cgd3、Cds3，得到模式 4 损耗为Eon4。

将开通过程各个阶段损耗相加即为 MOSFET在 1 个开关周期的开通损耗 Eon，同理可得关断损耗 Eoff。其计算式分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA5477Nl53IJiboW99IrHhibNcxRWSHqv5S2ocgM0DHuFvRYTdvsiauwQlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAZ69BkFFoLIvv89ibRybZM27q2FBkiceBLS1d3rGNqjR6DjticQwZlkOnQ/640?wx_fmt=png&from=appmsg)

结合以上分析，寄生电容和寄生电感对开关过程产生不同的影响。其中外围电感 Ls 直接影响开通过程( 关断过程 )的漏源极的电压尖峰( 电流尖峰 )，进而影响开关损耗；随着端部寄生电感 Ld的增大，漏源电流的变化减缓，延长关断时间，进而使关断损耗增大；栅源电容 Cgs 的提高会降低dIds/dt，但栅漏电容 Cgd的提高，会使dVds/dt 变小，Cgs和 Cgd的增加都会增大开关损耗。寄生电容和寄生电感都会间接影响开关时间，进而影响开关损耗的计算。

在不考虑结温、固定栅极电阻的情况下，通过Vds分段取值即可确定各个阶段的寄生电容和寄生电感。假定PWM的开关频率为fsw，结合式(8)和 式(9)得到开通损耗Pon、关断损耗Poff、fsw与时间的关系分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAEVsgy1sok9AbDcZSOJIYUlrXJVcMmTUIsAdP6N1thMHib5mQrSx5Uow/640?wx_fmt=png&from=appmsg)

式中： Pswitch 为开关损耗； ( t8−t5 )和( t4−t0 )分别为MOS管的关断时间和开通时间；tdead为设置的死区时间，tdead\=0.5 µs。

2.3 SiC 器件的寄生电容损耗

SiC器件开关速度快，随着开关频率的提高， 寄生效应愈加明显。PCB走线间的寄生电容及MOS管的寄生电容的变化，会使SiC器件出现高于Si器件的电磁兼容EMC( electromagnetic compatibility )振荡波形，振荡时间拉长，振荡幅值减小， 此时需要考虑寄生电容因高频集肤效应而形成的损耗电阻Rn产生的损耗。高频时寄生电容等效电阻为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAx6iccsIQgqO0AbPhMvUK5PVdqdic4IWERtYvnBmlJc8oHw8yXQGuI53A/640?wx_fmt=png&from=appmsg)

寄生电容在开关过程中产生的损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyASib6hv3mh7Z4jvvZwpBuZ2U3n5kQ9gsHdsGsxRXTfdR5VAvSM9x1bsg/640?wx_fmt=png&from=appmsg)

式中：δ 为电容器损耗角；C 为寄生电容总值；Irip为流过寄生电容的纹波电流，取MOS管导通后流过的稳态电流I0的 0.2 倍。

2.4 SiC 器件的寄生电感损耗

随着fsw的提高，寄生效应加剧，使得SiC器件的Ids振荡时间变长。由于集肤效应和邻近效应， 交流电流流过寄生电感Ls、Ld形成的等效交流电阻会随着fsw的提高而增大，其损耗PLd  、PLs 不可忽略不计，分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAof3CyeeM80HLpsdswn89lhpJ7iaW9cwlKAPAuNibyZfMLSzvyXyicPfHA/640?wx_fmt=png&from=appmsg)

式中：iL为流过MOS管的电流；Ts为PWM的开关周期；RL为外围电路寄生电感等效电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyADv0QA4vcwxZz2qHXDTnBvUHPia2fzPEnXsEdWgoqGaaIYTiaGvibn0fbA/640?wx_fmt=png&from=appmsg)

图8为电感磁化曲线。由于电感的磁滞现象， 流过电感的电流在经历1个开关周期Ts 后，不能回到初始值，且随着 fsw的提高磁滞损耗不断增大， 因此计算寄生电感损耗时要考虑磁滞损耗。tn时刻的磁感应强度B( tn )、磁场强度H( tn )、电感磁滞损耗Physis和寄生电感的损耗 PL( on )表达式分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAPC1WsAiaxN26ZpdYYn0aEnppvEoAVG9vslAKMbWXic1Qs6icWmYoEQksg/640?wx_fmt=png&from=appmsg)

式中：iL( tn )为在tn时刻的电感电流；N为寄生电感等效绕组匝数；Ns为1个开关周期内寄生电感充磁和退磁的总循环次数；A为寄生电感等效电感铁心截面积； BS、BP、BE分别为寄生电感在初始磁感应强度、饱和磁感应强度和剩余磁感应强度；uL、iL分别为寄生电感的端电压和流过电流；l 为磁路的平均长度。

2.5 SiC MOSFET 三相全桥逆变器损耗

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAM640nvaibwedMzjJSjqgKiaQiagD3JBdOLRKCh05qGbjvgD89XRSLibPQw/640?wx_fmt=png&from=appmsg)

图 9 为PWM的对称规则采样法，可知 MOS管的占空比随着三相电流不断改变。虽然SVPWM和 SPWM在原理上相同，SPWM 由三角波和正弦波调制而成，而 SVPWM 也可以看作由三角波和注入三次谐波分量的正弦基波( 马鞍波 )调制而成。因此可以类同SPWM的方法分析在单个 PWM 开关周期 Ts内的 MOS 管导通时间，然后累加求得整个三相电流周期 T 内的 MOS 管导通时间，求出时间T 内的导通损耗，进而得到单位时间内 MOS 管的平均导通损耗。设调制波 ur( t )为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAdsTMlXzl87icJxgYSVFv12nYnE3eB5y6hqXqibEFc8KCWVVX8CwDDBIQ/640?wx_fmt=png&from=appmsg)

式中：UM为调制波峰值电压；Sin（ωt）为调制波频率。

根据三角形相似，得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA96hmfeeHygwKgeRmWbATsPPlHppht9NmGrBc4DZgoJ84mhKQ2Ip7eA/640?wx_fmt=png&from=appmsg)

式中：US为载波锯齿波峰值；M=UM/US。

由于是对称规则采样，因此

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAvW87xpCqbZiaibWRicZ716SLFJDYVgZ47rRaru0rFZwDSWGKdYyILdm9g/640?wx_fmt=png&from=appmsg)

三角载波频率即 PWM 开关频率为 fsw，调制波频率即电流频率为f，载波比为 N，k 为采样序号，得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAN5GZUMnQJGmDLuepGTWWEVI4M4kz2oiaab3fvP4DmbPOUJVt3YGpwow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAg8Hs7jM8sAcZSNrUeBqgD9QOqD9TGfLDvJ04od5iaJ73zriaHR0dAkBQ/640?wx_fmt=png&from=appmsg)

因此根据Ts、M和N的值可求得每个PWM开关周期内的导通时间。将相电流周期 T内所有 ton累加求平均，结合式( 6 )得到平均导通损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAoJh5TGXd0pE7PFpEyYyd2pbApjGk5v7nna1xhLoyLJLBSrJEHX5FGQ/640?wx_fmt=png&from=appmsg)

综上，将导通损耗、开关损耗和寄生参数损耗相加，得到单个 MOS 管损耗。由于三相全桥逆变器在任意时刻的 3 个 MOS 管都同时导通，因此三相上桥臂的 MOS 管导通时间一致，所以在三相电流周期内，三相全桥逆变器的 6 个开关管损耗相等，进而得到三相全桥逆变器损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAE342QD5iaxHuaQnr9leFBXLFdIAt0GdJJy89Aq4qVxOFz5MXicmnEt5A/640?wx_fmt=png&from=appmsg)

3. 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAicnz9d5iaDs7hmTQxSZZVrc8K3OLWE8sL98EmkqDyb3fJwRsfkonkDdw/640?wx_fmt=png&from=appmsg)

为了验证计及寄生参数的 SiC MOSFET 的三 相全桥逆变器损耗计算方法，搭建了基于 SiC  MOSFET 的永磁同步电机控制系统实验平台，如图10 所示。PMSM 由 SiC MOSFET 三相全桥逆变器驱动，开关频率变化范围为10~55 kHz，实验在室 温 25 ℃下完成，使用的示波器为横河 DL850W， 功率等参数的测量采用横河 WT3000E 功率分析仪。单个 MOSFET 的实验参数见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA7avuz7oALibaVFnts6UewkDBTvMrMTCxMPHoGgBnTOx7WK5wiaAACLqw/640?wx_fmt=png&from=appmsg)

在转速为200 r/min，转矩为0.17 N·m 情况下， 调整 PWM 开关频率 fsw 使三相电流达到理想稳态波形。随着 fsw 提高，三相电流的高次谐波含量减小，电流波形变好。在fsw为 30 kHz 的条件下进行实验，测得电流波形如图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyASQjxIHfxf83uejIwY4XXh57CxZSC1uotKxpzexIpVWXE5tny5oceNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAFKNIEuHMhI1zPR5m2SXocfwbfNToMgtASkmb3k86kULJcG6ljiaANDA/640?wx_fmt=png&from=appmsg)

图 12 为 A 相下桥臂 MOS 管的开关波形，由于 MOS 管的开关时间除了与母线电压、触发电压有关，还与 MOS 管的寄生参数有关，观察到的开通、关断时间和理论分析值接近；表 3 为理论计算和实测开关过程数据对比分析，可以看到开通损耗大于关断损耗，是由于关断过程中 Vds处于较低的电压值，开通过程中Vds 大部分时间接近母线电压。实测和理论计算的开关损耗接近，验证了本文 SiC MOSFET 物理模型的准确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAQct9ZkqanhpEniajfetuHqTMtHNcaiarJhBtSfqA0kqzs2EibWARNZ3HQ/640?wx_fmt=png&from=appmsg)

图 13 为不同开关频率下理论计算和实际逆变器损耗对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAGEVVBH5TSRr2L3icibKbAbbVeicxUV5HebYZubREAyVb1GnLwtSAFibgLg/640?wx_fmt=png&from=appmsg)

可知，提高开关频率可以有效降低逆变器损耗。在 50 kHz 时，导通损耗占比小，所以三角形法、积分法和本文的物理模型方法计算得到的逆变器损耗误差较为接近，由于考虑了寄生电容和电感的损耗，物理模型方法误差最小为1.5%； 在10 kHz 时，导通损耗占比大，平均导通损耗公式能减少理论和实际导通损耗的误差，所以物理模型法计算的损耗更接近实际值，误差为14.5%。根据奈奎斯特采样定律，需要实时更改采样频率至少为开关频率的 2 倍以保证实验数据的准确性，由于dSPACE 采样存在系统误差且无法避免，同时又因为低频阶段，导通损耗占比大，增加的开关损耗大于减小的导通损耗，而高频阶段 fsw 的提高使相电流总谐波失真THD( total harmonic distortion )更小，导通损耗减小的更多，所以测得的逆变器损耗呈现先上升再下降的趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA7ywiama6ricMaG9iaFHm2DB7ZdibAnyxWTNYEH0S7QFFzDia7AqeQFUGiaOA/640?wx_fmt=png&from=appmsg)

表 4 为实验数据与理论计算的对比，可知，开通损耗大于关断损耗，二极管反向恢复损耗 Ptre远小于其导通损耗 PC( Diode )，因此可以将二极管的反向恢复损耗忽略不计以简化计算过程。可以看到，考虑寄生电容、电感的损耗和导通过程中占空比不断变化的情况后，SiC  MOSFET 物理模型法误差最小，提高了逆变器损耗计算精度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAhz174KPwXOX1nZNx7VY4YBicxwjv2xYUoezxZNxgTZD6uurdibOr466w/640?wx_fmt=png&from=appmsg)

图14为实验条件下改变开关频率测得的 A 相电流的谐波傅里叶分析。可知，提高开关频率可以有效降低相电流谐波分量，尤其是低次谐波分量， 产生的谐波分量主要集中在开关频率及其倍频附近，由此三相电流在电机中产生的铁耗会降低，进而电机整体损耗也降低。因此提高开关频率能降低电机损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyAWtyR2SoSZI1mxtkiaIQrW3E68VQc4LIxoq7MetISib3NiaEryHBo3At1A/640?wx_fmt=png&from=appmsg)

表5为查数据手册得到的在室温25 ℃下 2 种功率器件的参数，由于 SiC 相比于 Si 材料有较低的电子迁移率，其漂移层的阻抗低于 Si 基器件， 所以 SiC 器件具有通态电阻小和开关损耗低的优点；且在低频时，由于导通损耗远大于开关损耗， 所以导通电阻小成为 SiC 器件比 Si 器件的逆变器损耗小的主要原因，具体数据见表 6，其中 Pc为功率管和二极管的导通损耗之和，Psw为功率管和二极管的开关损耗之和。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA03yEclwF90DS98z1XmLziaazBeOc6UZ5JFHW0pKsKxzC3ib9UAjajIeQ/640?wx_fmt=png&from=appmsg)

  
SiC器件的SBD反向恢复时间短，且相比于Si器件的快速恢复二极管FRD( fast  recovery diode )，SBD的导通损耗会小很多，而FRD的导通损耗和Si IGBT的导通损耗相差较小，以20 kHz 为例，FRD导通损耗为5.94 W，Si IGBT的导通损耗为7.78 W，而SBD导通损耗仅为2.60 W， 此时 SiC 逆变器的损耗最大降低了9.24 W。

在实验条件下将开关频率设定为 20 kHz，分别采用 SVPWM 和 SPWM 调制策略测得的 SiC 逆变器损耗如图 15 所示。可知，相对于 SPWM 调制，SVPWM 调制的逆变器损耗略低。一方面是因为SiC 器件本身因材料特性损耗小，调制策略对于损耗的影响较小；且 SVPWM 和 SPWM 开关次数虽不同，但 SiC 器件的开关损耗小，所以开关次数对逆变器损耗的影响很小。另一方面在 SVPWM 调制中，高电压传输比下相电流的THD 更小，所以导通损耗更小，导致基于 SVPWM 调制的逆变器损耗 比 SPWM下的逆变器损耗略低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnsqOTgyS5Oh2Mup4ibHicDyA9FmEMC1CWRicdXwK28uBIicKG8WRuZuCctnib1yJ05OhuSK8KOibUj9mwQ/640?wx_fmt=png&from=appmsg)

4. 结语

本文采用了1种计及SiC MOSFET寄生电容和电感的三相全桥逆变器损耗计算方法。基于数据手册进行曲线拟合和分段取值得到寄生电容，采用振荡法得到寄生电感。在传统损耗计算方法的基础上，提出了适用于高频计算的SiC MOSFET物理模型，理论与实验的数据对比也验证了 MOSFET 物理模型参数的准确性。考虑了寄生电容和寄生电感带来的损耗，推导了在 SVPWM 调制策略下的平均导通损耗公式，相较于积分法和三角形法，模型法计算的逆变器损耗精度分别最大提高了 17.1%和 32.9%。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7y6takB9fSysibKQHosicr8oxe78kybBtoHNEIe9m37GrhWmgzRKTXB5g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7IdKzsVAfsonk8XrEsLYcotJErMx7GsGpRTzbWqgcNA1hyxohsEXI4Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G79QVc4mUv0mUB6iaCbnIkLunouMLTPpicMiaLYV3hbye0xa68FuUM0IJow/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7ffbgpzt2NMsDcGiarMO5cibQGbgFyjCmOfBoeIn7JRUdsgXFHY7Fyialw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)