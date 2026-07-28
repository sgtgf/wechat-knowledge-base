# 大功率SiC MOSFET 模块驱动技术研究


> 原文地址: [https://mp.weixin.qq.com/s/LCNqFKMQSymlxSKPbLQcKQ](https://mp.weixin.qq.com/s/LCNqFKMQSymlxSKPbLQcKQ)

**文章来源：**机车电传动

**作者：**周帅1,2，张小勇1，饶沛南1，张庆1，施洪亮1（1.株洲中车时代电气股份有限公司；2. 变流技术国家工程研究中心） 

**摘 要 ：**为适应SiC MOSFET相比Si IGBT具有更快的开关速度、更低的工作损耗，同时开通阈值电压较低、短路耐量较弱等特点，研究了与其匹配的驱动技术。主要对漏极电压有源钳位、电路桥臂串扰抑制、过流检测等若干SiC MOSFET驱动技术进行研究，并基于三菱大功率SiC MOSFET模块开发配套驱动进行测试。结果表明，该驱动所采用的镜像电流检测法能快速有效地对SiC MOSFET模块进行过流检测与保护，同时漏极电压有源钳位能及时有效抑制大电流关断所产生的电压尖峰。 

**关键词：**SiC MOSFET；米勒效应；桥臂串扰；有源钳位；过流检测

**0 引言**

第三代半导体—SiC（碳化硅）具有宽禁带、高饱和漂移速度、高热导率等物理特性，因此基于SiC材料开发的功率开关器件相较Si（硅）器件阻断电压更高、开关速度更快、工作损耗更小、工作温度范围更广。目前，三菱电机、CREE等半导体厂家已面向市场推出1200V/800A等级、1700 V/300A等级大功率SiC-MOSFET，随着市场需求扩大和工艺水平提升，大功率SiC模块价格也将逐渐降低，可以预见未来Si-IGBT或被SiC-MOSFET逐步替代，因此及时开展SiC-MOSFET的应用研究工作十分必要。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8xVLiatGTAFVRlAicOWktSZ0VJsOz1zYMic4cTCpkQFJT2SVXDjZeyaGgw/640?wx_fmt=png&from=appmsg)

**1 SiCMOSFET 基本特性**

**1.1结构特点**

由于Si的绝缘击穿场强较弱（相同结构下仅为SiC的10%），因此Si-MOSFET为满足高压应用必须增加其外延层厚度来保证绝缘强度，从而带来器件通态电阻上升，损耗及温升增加等问题，最终制约了Si-MOSFET电压等级提升。

Si-IGBT虽然阻断电压高、通流能力强，但其为双极性器件，工作过程存在少数载流子积聚现象，造成开关速度相对较慢，关断存在拖尾电流，开关损耗过大等问题，制约了Si-IGBT工作频率提升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8LNrIdqt9oiajjwnkJA97icxSDSbVwTl0ERaEtIf8oAQm3bWVhScALG5w/640?wx_fmt=png&from=appmsg)

图1给出了SiC-MOSFET内部断面示意图，其结构上与Si-MOSFET类似，但外延层和衬底均采用SiC。得益于SiC材料的高绝缘击穿场强、高热导率等特性，高压条件下SiC-MOSFET外延层可以做得更薄，以使其兼具高阻断电压、高开关速度、低通态电阻、低热阻等优点，适合高压、高频工作场合应用。

**1.2 开关过程**

SiC-MOSFET与Si-MOSFET同样作为电压控制型器件，开关动态过程受内部寄生电容影响，虽然二者的内部结构一致，但是各参数存在差别。图2为内部简化等效模型，可根据厂家提供的输入电容Ciss、输出电容Coss、转移电容Crss等参数，表述各极间的关系。其中，输入电容Ciss与驱动电阻RG共同决定驱动电路RC常数并影响器件开关速度，输出电容Coss影响器件开关损耗，转移电容Crss带来米勒效应及电路桥臂串扰问题。根据图2得出式（1）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8lNRPofyP7xnjriccibqAyA2Ow0rbI6UzCibmDHdFT4tNXuDAsS4ykvbSw/640?wx_fmt=png&from=appmsg)

通过SiC-MOSFET内部简化等效模型可对其开关过程进行分析，如图3所示的理想开通过程分为4个阶段：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8Mj0XR0NYtn8OhAnVfxmRFsOCSl39ia4AHxSflOlZ0GXrnZsjXdsbdeA/640?wx_fmt=png&from=appmsg)

t0~t1：t0时刻，驱动电路通过栅极电阻RG对电容CGS充电，栅源极电压VGS开始上升，期间漏源极电压VDS、电流ID均无变化，此段时间近似等于开通延迟时间。

t1~t2：t1时刻，VGS达到开通阈值电压VGS(th)、漏极电流ID从0开始增大，漏源极电压VDS维持关断电压不变。

t2~t3：t3时刻，栅源极电压VGS达到米勒电压VGS(Miller)并维持不变，漏源极电压VDS 开始下降。

t3~t4：米勒平台结束，栅源极电压VGS继续上升，栅极电流IG对CGS、CGD充电，MOSFET的导电沟道继续扩宽，RDS持续减小直至器件完全导通。

关断过程与开通过程类似，时间顺序相反，不再赘述。

**2 驱动关键技术**

**2.1 基本驱动电路**

根据SiC-MOSFET产品手册中给出的漏源极电压VDS、漏极电流ID、栅源极开通/关断电压VGS(±)、开通上升时间tr、关断下降时间tf、开通延迟时间tdon、关断延迟时间tdoff、栅极电荷QG及电路开关工作频率fs等关键信息设计合适的基本驱动电路。

由于SiC-MOSFET具有开关速度快、输入阻抗高、开通阈值电压低等特点，工作过程易受干扰，驱动电路应采用隔离电源，不同驱动通道间、驱动输出与信号输入间也均需隔离处理。驱动信号的隔离方式有光电隔离和电磁隔离2种，其中电磁隔离采用脉冲变压器实现，相较光电隔离具有响应速度快、绝缘强度高、驱动功率大等优势。在桥式电路应用中，由于脉冲占空比小于0.5，还可较好地避免脉冲变压器磁饱和。

SiC-MOSFET开通和关断的过程中，驱动电路对其寄生电容进行快速充放电，因此驱动电路还需具备较强的容性负载驱动能力。每路驱动的输出功率可按式（2）近似计算，并在考虑栅极驱动电阻RG损耗、驱动电路自身损耗的基础上，留有一定设计裕量。

PG=QG×ΔVGS(±) ×fs（2）

此外，基本驱动电路还宜根据实际应用情况设计驱动电源欠压保护、脉冲信号互锁、驱动故障反馈等基本功能，保障系统运行安全可靠。图4给出了一种基于驱动信号电磁隔离的SiC-MOSFET驱动电路方案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8icT05N0f4DugqjcfgdZF6UAViaPV8BpV049NAcwiaZndiciaxviabiaibx886A/640?wx_fmt=png&from=appmsg)

**2.2 漏极电压有源钳位**

因SiC-MOSFET关断速度极快且无拖尾电流，若在电路过流、短路等异常情况下实行硬关断，较大的di/dt将在其漏源极产生很高的电压尖峰，而采用漏极电压有源钳位则可在异常工况下迅速钳住开关管漏源极电压，避免器件损坏。

图5给出了一种漏极电压有源钳位方案。当漏极过压时，瞬态电压抑制二极管（TVS）VT在极短时间内雪崩击穿动作，一方面通过快速恢复二极管VD将部分漏极电流引入栅极，抬高栅极电位，减小关断di/dt，进而减小漏极电压尖峰，形成给定输入为TVS的雪崩击穿点，被控对象为漏极电位负反馈；另一方面钳位信号IAAC通过限流电阻R送给驱动处理单元，进行故障判断和相应的逻辑处理。

其中，对瞬态电压抑制二极管（TVS）的合理选型是保证电路正常工作时无误触发，当出现漏极过压的异常工况，驱动电路能及时有效实施保护的关键。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8QOdcZn3pT9gcJjV7BRIt4PSrWNHFLgVclHQq5dTSib3v6ZbSpgFBc6w/640?wx_fmt=png&from=appmsg)

**2.3 桥臂串扰抑制**

大功率桥式开关电路中，快速的开关动作会使桥臂串联的上下管间形成较严重的串扰问题。当串扰电压超过SiC-MOSFET的栅极开通阈值电压时，将造成电路波形混乱甚至引起器件失效。图6给出了上管开通时对下管的串扰示意，上管SiC-MOSFET1开通时，下管SiC-MOSFET2的漏源极电压VDS将被抬升至母线电压，此过程中的dVDS/dt将在下管栅漏极电容CGD上形成大小如式（3）的米勒电流IGD：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8zGowbTSU2nV6HskLuibNFcwjUmzy9YvUicPGexoVrCwdiboN2wzibYHpSA/640?wx_fmt=png&from=appmsg)

米勒电流IGD分别流经栅极电阻RG、栅源极电容CGS2条支路，根据KCL（节点电流定律）计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8WIYGcwKqeLfJnsH0V67h2QeeKdFFk90TefNvnViaRvteuCTed36JhicA/640?wx_fmt=png&from=appmsg)

上管SiC-MOSFET1开通过程中，下管SiC-MOSFET2栅源极间的串扰电压VGS(crosstalk)计算如式（5）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8WsneGJp0Rhy7FyoKd5f6FvqTcPZKTHjTibMUGRfcT9BcmNxGNmibTJHw/640?wx_fmt=png&from=appmsg)

（5）式中：α—漏源极电压变化率，即dVDS/dt，高压工况下栅漏极电压大小近似与漏源极电压相等，因此可近似认为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8g5ec3HvfbPFy6UN9BtajcsEqg2moevulYVHib6QrKOvmXmobeA7kib1Q/640?wx_fmt=png&from=appmsg)；Ciss—输入电容，Ciss=CGS+CGD。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o80otm7lYKmq7hqhtRTKs5Degia6gNKibmzTSKVIQOXmO18sDH59VL3CGQ/640?wx_fmt=png&from=appmsg)

以上分析了上管开通时对下管的串扰现象，其产生的串扰电压极性与栅极驱动电压相同，容易导致SiC-MOSFET误动作；而在上管关断过程中则会对下管产生与栅极驱动电压极性相反的串扰电压，严重时会造成SiC-MOSFET栅极反向击穿。

抑制桥臂串扰主要有以下几种方案：

①在栅源极并联电容，以减小串扰电流对栅极电压的抬升，但此方法会造成开关速度变慢，驱动功率增加等问题，不能满足SiC-MOSFET高频应用需求；

②栅源极采用负压关断，以抬升开通阈值电压相对门槛，但由于SiC-MOSFET栅极负压承受能力较弱，在另管关断时叠加的串扰负电压可能造成SiC-MOSFET栅极反向击穿；

③设置独立的栅极开通、关断电阻，并通过减小栅极关断电阻阻值为串扰电流提供低阻抗释放回路，但栅极关断电阻阻值过小又将引发关断过程振荡等问题；

④增加栅极有源钳位电路（米勒钳位电路），如图7所示在开关管栅源极增加PNP三极管吸收电路，当桥臂中的另管开关动作时，产生的串扰信号将驱动PNP三极管导通，钳位本管栅极电压，从而起到串扰抑制作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8rhbyjavTywmj0Lpqs7icXeKIllqTAXRvyibroemrTsKl6mDUTLeB1kKw/640?wx_fmt=png&from=appmsg)

以上给出了抑制桥臂串扰的几种方案，在实际应用中还需结合产品具体情况，从系统最优化角度综合考虑。

**2.4 过流检测与保护**

功率开关器件较为常用的过流检测方案主要有退饱和检测、寄生电感检测、栅极（门极）电压检测、镜像电流检测等。

①退饱和检测是利用开关器件自身输出特性，当发生短路时，器件退出饱和工作区域，漏源极（集-射电极）电压发生变化，通过检测该电压来进行保护。与Si-IGBT相比，SiC-MOSFET的开通阈值电压较低，导通电阻较小，短路耐量较弱（通常只有数微秒），大功率场合应用时，一般的退饱和检测方法很难快速、准确地对SiC-MOSFET进行保护。

②寄生电感检测与退饱和检测类似，只是检测的对象为器件源极（发射极）寄生电感电压，但当电流变化率di/dt较小时，该方法很难准确检测。

③栅极（门极）电压检测是利用过流时，漏源极（集-射电极）电压的变化而引起的栅极（门极）电压变化来实现检测的，因此该方法存在与退饱和检测相同的问题。

④镜像电流检测是通过引出开关器件内部元胞电流作为镜像电流，并利用驱动检测电路进行相关处理而实现的。该方法能够准确、迅速地检测器件过流现象，但是开关器件本身的工艺较复杂，成本相对较高，目前三菱电机推出的1200V/800A SiC-MOSFET已具备镜像电流检测条件。

针对大功率SiC-MOSFET应用，可采用基于镜像电流的过流检测与保护方案，如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8Kmpvfj3IXwn7LWRLFzlicxCG9RV4oVmHiaBOGBswic3DxYd3UialrEAPLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8bkJ69Y0Ie4yErmbGHlqrmwNsvibC0HqIoPqLRtm7JWYQ86jVdCKLibHA/640?wx_fmt=png&from=appmsg)

t1~t2：t1时刻，SiC-MOSFET漏极电流ID达到过流值ISC时，镜像电流IRS（IRS=ID/N）经电阻RRS采样触发比较器IG1状态翻转，使其输出高电平脉冲信号驱动三极管VR导通，从而将SiC-MOSFET栅极电压VGS进行下拉，并在t2时刻将ID控制在ISC以内；

t2~t3：该区间内D触发器IG2将比较器IG1的输出状态锁存，使电路继续保持对栅极电压VGS的下拉动作，并最终将其钳位至0 V附近，期间ID随着VGS的降低而减小至0 A附近，该阶段完成了对SiC-MOSFET过流的软关断；

t3~t4：t3时刻，通过驱动处理单元进行彻底保护，给入SiC-MOSFET栅极负压，保证器件最终的可靠关断，完成整个过流保护。

**3 测试分析**

**3.1 开关特性测**

试搭建如图9所示双脉冲测试电路，测试不同驱动电阻情况下SiC-MOSFET开关特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8RxDhHb4jt2M8mVWYfL6B32mO792QbbrRhomn1FCyxV2DZJicdzkQ1Ow/640?wx_fmt=png&from=appmsg)

从图10测试波形看出，与Si-IGBT相同的是，随着驱动电阻增大，器件开关过程时间延长，漏源极关断电压尖峰降低；与Si-IGBT不同的是，SiC-MOSFET开关过程中栅极电压无明显米勒平台、无明显关断拖尾电流、二极管反向恢复电流Irec非常小，开关波形存在振荡。

由于SiC-MOSFET跨导值较小，米勒电容相比栅源极电容小得多，米勒电容充电时间非常短暂，因而开关过程中栅极电压的米勒平台并不明显；MOSFET 为单极性器件，工作过程无少数载流子积聚现象，因此关断时无类似IGBT的拖尾电流；反并联二极管采用SiC-SBD（SiC肖特基二极管），其一方面具有Si-SBD关断快速且无反向恢复现象的优势，另一方面采用SiC材料解决了Si-SBD反向漏电流大、阻断电压低的问题，适用于高压环境；SiC-MOSFET开关速度非常快，开关过程漏源极电压变化率很大，导致米勒电容快速充放电引起波形振荡，因此其应用电路设计需要对系统杂散参数更加关注。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8ibdpjdKKIedFFek9CibXcJqjbticRsE9HFLB6FlqFicwgzTkaWTsdqW0IA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8BXCKRVf8JjmE49DTnmM5UWKibsHQLSEodCrrrCicuf39SvXoNp23Pr2w/640?wx_fmt=png&from=appmsg)

功率器件连接母排的设计原则是，通过对主电路杂散电感的控制，保证功率管在最大工况下所引起的电压峰值不超过器件自身安全工作电压。通过图11（a）所示双脉冲试验可知，在母线电压600V、最大电流892A的情况下，SiC-MOSFET关断电压尖峰达908V，满足1200V/800A等级器件应用要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o81tRLsdSyHgDHzvOGoKTYDuFVd5owyVgc3X0F2CGewPSbn7WDvPab8g/640?wx_fmt=png&from=appmsg)

按图11（b），通过测试不同电压下器件开关过程电流变化率di/dt、漏源极电压变化值ΔU，按式（6）计算电路等效杂散电感LP。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8jCHG6KDU6OE4Ap5ibJp1Y61Eous3GcicInic6MNkR5wNkKp2XfgnBia6MQ/640?wx_fmt=png&from=appmsg)

在母线电压200 V、300 V、400 V下，测试计算出LP分别为118 nH、120 nH、102 nH。因此，对于该1 200 V等级SiC-MOSFET应用在最高母线电压600 V、最大电流800 A的情况下，其连接母排设计应控制等效杂散电感值小于100 nH。

**3.2 保护功能测试**

图12（a）为漏极有源钳位保护波形，SiC-MOSFET关断过程中发生过压，触发漏极有源钳位电路迅速驱动栅极短时开通，为过压能量提供释放回路，及时将漏源极电压VDS钳位至948 V（保护动作设计值900 V），快速有效地实现了保护功能。

按前面2.4节所述镜像电流检测方案实施过流保护，如图12（b）所示，发生过流时，保护电路在t1=1.6 μs内将栅极电压拉至0 V附近，实现SiC-MOSFET软关断，有效抑制过流，再经过约t2=6 μs后驱动处理单元器件将SiC-MOSFET彻底关断，完成过流保护。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8QkdeU6RicIsGKT8skgrG1haWeicNpGSTMJReUia3VMDDjG6TfW8oHQZeg/640?wx_fmt=png&from=appmsg)

**3.3 测试干扰问题**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8nUucGB71dEd9Zd8A5udRocqFkzuCd7Z5DMsQvhMgnw3EXGuRdEeJUA/640?wx_fmt=png&from=appmsg)

对栅极电压测试电路进行等效分析，原理如图13所示，示波器所读取电压VScope可按式（7）计算。采用高精度示波器及无源电压探头测试SiC-MOSFET驱动波形，发现测试过程中波形振荡剧烈，如图14（a）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o82f2M3btaPM1XPL1vblIcHe0oLmFJD9Wbbv4yibA4XhAzQFepwszjXVQ/640?wx_fmt=png&from=appmsg)

式中：Rprobe为探头等效电阻；Lprobe为探头等效电感；IScope为信号电流。可见，测试干扰主要由探头寄生阻抗Rprobe、Lprobe及信号电流变化率dIScope/dt引起，由于SiC-MOSFET开关速度很快，导致dIScope/dt较大，因此在相同测试工况下降低探头寄生阻抗可有效减小测试干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8Z2ZOH9gEbucqA7wXZarrqrQpykSfOZdoC2DGXBP1lVr74kX4QerhCw/640?wx_fmt=png&from=appmsg)

如图14（b），通过缩短探头“探针-地”间环路长度、减少环路面积，波形振荡问题大为改善。

**4 结语**

本文重点研究了包括漏极电压有源钳位、电路桥臂串扰抑制、过流检测等在内的大功率SiC-MOSFET模块驱动关键技术，通过双脉冲测试验证了驱动及保护功能的有效性，为后续大功率SiC-MOSFET器件的应用提供了技术依据。同时通过本文分析及试验可知，由于SiC-MOSFET开关过程漏源极电压变化率很大，容易带来波形振荡等问题，也将对其工程应用造成一定影响，后续在应用电路设计中还应注意对系统电路杂散参数的严格控制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)