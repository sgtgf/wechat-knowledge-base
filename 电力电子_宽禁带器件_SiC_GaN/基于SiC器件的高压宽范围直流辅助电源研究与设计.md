# 基于SiC器件的高压宽范围直流辅助电源研究与设计


> 原文地址: [https://mp.weixin.qq.com/s/wEnVIHZoZUedE3K1b5phig](https://mp.weixin.qq.com/s/wEnVIHZoZUedE3K1b5phig)

文章来源：电工技术学报

作者：王议锋1车超昌1陈 博1白 昱2张向前3（1.天津大学电气自动化与信息工程学院天津300072；2.天津恩特能源科技有限公司天津300100；3.天津电气科学研究院有限公司 天津300180）

摘要：辅助电源是电力变换装置中的重要组成部分，在太阳能发电站等系统中，需应对高压宽范围输入下的稳定运行挑战。针对单管反激电源在高压宽范围输入下导致的高电压应力、高成本以及低效率问题，该文基于级联反激变换器，首先进行了开关模态分析，深入研究计及寄生参数的开关工作过程；然后在此基础上，建立级联反激变换器的精确数学模型，研究了各核心元器件对电路性能的影响，并提出一种参数设计方法；最后基于SiC器件，搭建了一台300~1500V输入，24 V输出的100W辅助电源样机，变换器全工况运行中最高效率达到93.4%。结果验证了所设计的高压宽范围辅助电源方案的可行性和正确性。在低成本、宽输入范围和高电压应力条件下，保证了辅助电源的高效转换。

关键词：SiC 高压 辅助电源 反激变换器

0.引言

新能源光伏发电系统因其清洁无污染的特性得到广泛应用，而光伏电站的降本增效可使其得到更广泛的推广。在光伏发电系统中，提高电压等级可以降低线路损耗，减少汇流箱等设备，利于光伏平价上网，符合高压并网发展趋势。光伏系统电压等级正在由1000V向1500V过渡，从图1中可以看出，1500V光伏系统的应用占比逐年增加，其成本与性能对该系统的进一步推广至关重要，这对于光伏系统中的电力变换装置提出了更高的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI45Iclay3bHfgAlqcfZ1licAckzhvibeSJ9DK2IdTZf7icOiauq5HjYykNZA/640?wx_fmt=png&from=appmsg)

图1三相光伏逆变器出货量电压等级占比

Fig.1 Percentage of voltage classes shipped in threephase PV inverters

辅助电源是电力电子装置中的重要组成部分，主要用于给系统中的控制芯片，驱动电路等装置供电。在一些无法通过外部给予低压供电的场景，辅助电源同样面临光伏高压输入宽范围波动的问题，需要具备高/宽增益能力以保证安全稳定运行，因此辅助电源多采用结构简单、输入输出隔离的反激变换器。

高压宽输入范围的应用场合给反激变换器的应用带来巨大挑战。学者刘计龙基于传统反激变换器提出一种应用于高压输入变压器的绕制方法，实现高压宽范围输入的功率变换，但尚未解决功率器件应力大，变换器效率低等问题。

相比于单管反激变换器，双管反激变换器更适用于高压输入场景。胡亮灯等学者基于双管反激拓扑开展研究，设计了一台输入电压范围300~2500V，输出24V的辅助电源。但该辅助电源效率也较低，100W负载下效率不到80%，额定功率50W时不如单管反激。此外，多管独立的驱动电路也不利于成本与体积的优化。

为解决单个开关管应力过高带来的问题，还可通过开关管串联来分担电压应力，根据相关研究可知，在使用相同芯片面积的前提下，串联器件的漂移区电阻和单个高压器件相同，但是其半导体材料的成本比高压器件更低，利于降低成本。学者P.J. Grbovic提出一种一次侧采用分裂绕组，开关管串联的反激拓扑结构，这种结构的输入电容通过电阻、二极管支路来实现均压，驱动电路复杂，设计难度较大，附加的均压支路增加了变换器的损耗。在此基础之上，张帆等学者针对串联SiC MOSFET结构，提出一种缓冲电路，可以自动平衡关断时的开关电压，同时该结构回收部分漏感能量可提高变换器效率。王涛等学者针对串联MOSFET关断瞬态期间的电压不平衡问题，建立了漏源电压上升瞬态期间的简化模型，提出一种调节驱动信号延迟时间的有源控制方法，一定程度上改善了该问题。刘基业等学者提出一种二极管\-电容混合钳位的间接串联拓扑和准两电平开环调制方法，可实现拓扑中串联器件的电压自动均衡。

输入串联输出并联的模块化拓扑结构也可有效降低开关应力。许奕辰等学者提出一种采用磁集成技术的输入串联有源钳位反激变换器，搭建了200~1000V输入实验平台，证明了磁集成结构的均压优势，但成本较高，不适合于低成本应用。孟涛等学者分析了输入串联双管反激变换器中各模块循环电流的作用和影响，并提出抑制策略。

串联模块化的拓扑结构因其能有效降低一次侧开关管的电压应力，实现更高的输入电压等级，得到了一定推广与应用。然而各模块参数不完全一致，需要额外的控制策略实现模块均压，增加了控制难度，并且同样需要引入独立的驱动模块单元，增加成本负担。

因此，在光伏等需要高压宽范围辅助电源的场景，同时兼顾低电压应力，低成本以及宽电压范围的研究工作有待深入。为此，本文基于级联反激变换器结构进行了工作模态分析，深入研究计及寄生参数的开关过程，建立电路模型，分析关键元器件对电路性能的影响，并提出一种参数设计方法，保证辅助电源实现低成本高电压宽范围的稳定运行。最终，搭建100W样机进行实验验证理论的有效性与合理性。

1.变换器拓扑结构及工作原理

为了解决高压场景下开关管的电压应力问题，同时避免多驱动芯片带来驱动信号不同步以及成本问题，本文采用单驱动芯片级联反激变换器拓扑，如图2所示。其中R1~Rn为限流电阻；Zc1~Zc(n\-1)为瞬态电压抑制二极管(Transient Voltage Suppressor,TVS)，Z1~Zn\-1为稳压二极管，Cc1~Cc(n\-1)为Zc1~Zc(n\-1)的寄生电容（TVS管为提高瞬时功率，增加了结面积，其寄生电容也变大，在高频工作时必须给予考虑），C1~Cn\-1为Z1~Zn\-1并联的电容。Lm为变压器T的励磁电感，Lk为变压器一次侧漏感。RCD(resistorcapacitor diode)缓冲电路用于降低开关管电压尖峰。S1~Sn为MOSFET开关管。从图2可以看出，仅用一个驱动芯片就可驱动多个开关管。针对电压应力问题，采用Zc钳位分压处理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4waGmHQZrtib1wrjKmZBsfUM7vtopLquAqspf5yOOd58sNekAvrCbUHw/640?wx_fmt=png&from=appmsg)

在本方案中，采用如图3所示的二阶级联反激拓扑。在图3中，Cc、Rg、R1和Z1构成了S2的驱动电路，当S1开通时，Z1钳位，由电容Cc和输入电压提供驱动电流实现S2快速跟随开通，可减缓驱动不同步导致的局部过压问题，同时节省了S2的驱动电路有利于节省空间同时降低成本。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4Q9jrPe09uexTJnTibLwTDAGClG5UVibzRJLiazKArY2C9XHQgPq7cKNibA/640?wx_fmt=png&from=appmsg)

该级联型反激变换器工作在断续模式。下面将对工作模态进行分析，本方案采用RCD缓冲电路吸收电压尖峰，其工作原理在模态分析中不再赘述。该变换器工作模式根据Zc是否钳位分为钳位工作模式与非钳位工作模式。

当开关管S1漏源极电压Vds1小于Zc的钳位电压Vzc时，拓扑工作在非钳位模式；反之，当Vzc≤Vds1时，变换器工作在钳位模式。两种模式的开通过程相同，仅关断模式有区别，钳位模式下，开关管S1的电压在上升过程中被钳位在Vzc，剩余电压被开关管S2承担。本文仅对非钳位模式进行具体介绍。

非钳位工作模式关键波形如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4gTIF84lpqianCslOM5Wep7ib3BkUxWqbWwcHKgF6M7RhhEIysp5RVMew/640?wx_fmt=png&from=appmsg)

图4中Vds1、Vds2分别为开关管S1和S2的漏源极电压，Vgs1、Vgs2为对应的栅源极电压，Id1、Id2分别为S1和S2的漏极电流。

t0~t1：开关管S1准谐振开通，Vds1迅速下降为0，开关管S1的Coss1迅速放电，沟道电流上升，两端电压下降，C1两端电压上升（此时S2的栅极充电电流为iR1+iCc\-iC1），Z1此时本应处于钳位状态，但当C1两端电压超过Vz时，开关管S2的电容Cgd2充电，从栅极抽取电流，且此时R1电流较小，Cgd2将会从C1抽取电流（此时S2的栅极充电电流为iR1+iC1），使得C1两端电压下降，故此时Z1不工作在钳位状态，其电压也会小于Vz，故S2的Vgs两端电压在上升过程中会突然减小。可以看出，电容C1在开通过程的不同时刻作用不同，在iCc≠0时，C1旁路一部分栅极充电电流，减缓开通过程；在iCc降为0之后，由于R1提供的电流有限，C1此时作为源提供栅极充电电流，加快开关管开通。Cc给开关管S2提供驱动电流，加快S2的开通，模态如图5a所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4Tnibt3aJzicmtcluM1yibWQDUmGyp5Hia9mMsLxUskMlXicUqxBttHAUCtA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4GiacicGiaLibDB0mJXMiaaO0BQMMRjOWd5usia5FKPlmjEfsD8JW6WRGQnpQ/640?wx_fmt=png&from=appmsg)

t1~t2：S1完全开启后，电容Cc两端电压不再变化，此时S2的驱动电流由输入电压和电阻R1决定，该驱动电流较小，Vgs2继续增大。此外，输入电压Vin给Lm充电，一次电流线性增加。如图5b所示。

t2~t3：t2时刻，Vgs2两端电压达到Z1的钳位值，此时Vgs2两端电压不再变化。如图5c所示。

t3~t4：t3时刻，开关管S1先开始关断，Coss1开始充电，Vds1上升，Z1两端电压逐渐减小，电容Cc两端电压增加,从C1、Cgs1汲取电流，此时Id2\=Id1+ICc，Vgs2减小。如图5d所示。

t4~t5：t4时刻后，一次侧开关管处于关断状态，二次侧放电，变压器释放能量向输出电容及负载供电。开关管S1、S2共同承担电压，且有Vds1+Vds2\=Vin+VR，其中VR为反射电压。如图5e所示。

t5~t6：t5时刻，二次电流变为0，变压器两端电压不再被输出钳位，Lm与Coss1、Coss2、Cc和C1谐振，控制器驱动会在开关管电压的谷底处开通，实现准谐振开通。与此同时，由于Vds1电压在谐振过程中下降，Z1两端电压将会上升。如图5f所示。

2\. 开关管关断过程及电压应力研究

根据第1节分析可知，关断期间两个开关管共同承担电压Vin+VR,在TVS管Zc稳压工作时，开关管S1承担的电压为VZc，开关管S2承担的电压为Vin+VR\-VZc。在非钳位模式下时，开关管承担的电压由动态分压和静态分压共同决定，本节将对分压过程进行具体分析。

2.1动态分压

为方便分析，对电路做出简化，模态可见图5d中的t3~t4状态，在开关管漏源电压上升的过程中，变压器一次电流恒定，等效为恒流源ip。Z1、Zc均工作在截止状态，仅考虑其寄生电容的影响。在暂态分析中，R1电阻上的电流较小可忽略，等效电路如图6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4WKGD6qsAf4PI1CEhZw613nAr8Iibpp9icEjwGNaBW7hiaH7FrzgAYOOsA/640?wx_fmt=png&from=appmsg)

t0~t1：驱动电压由VG变为0，Vgs1下降，Vds和id基本保持不变。在该时间段内，MOSFET工作在可变电阻区，在图7中为A到B的过程，开关管沟道可等效为导通电阻Rds(on)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4TIra3VhriaicbmEcibNcIatflItdmSOMd7uN1HqK30JlrmXAscSfECic9A/640?wx_fmt=png&from=appmsg)

式中，Δt10为t0至t1的过渡时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI41UKDaTecf6RFibiaU1gAbMblRugEs5lGBib9YVV0b3ZvKibubsgFC50ibEQ/640?wx_fmt=png&from=appmsg)

t1~t2：S1的驱动电压下降到米勒平台电压Vmill，Coss1开始充电，Vds1电压增大，在图7中为B至C的过程，S1沟道等效为受控电流源，S2沟道等效为导通电阻Rds(on)。其等效电路如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4DH5X94LSnBdBCKBv9Bj08ibVoB70jI0rSEeojojZeVMcZfib0f4s5x9g/640?wx_fmt=png&from=appmsg)

在该时间段内，存在如下关系

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI46nZgIvvWKzKcGn8uiaNKCOUlnEIB9L8VvslrOHA0zgkFSksTrfTUJzQ/640?wx_fmt=png&from=appmsg)

式中，ich1为S1沟道电流；gm为MOSFET的跨导。

可得出

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI43rQpewuicC6fDGibVjO29pS3RgStIvr52iaQl0qpLmtVaz921BHOXVy3Q/640?wx_fmt=png&from=appmsg)

对于开关管S2

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4KvqrtrbnPiaz5MhMWYYlRrJ7EkmY03v50L2Xicm0bUiaucAaQ2RxbRLTQ/640?wx_fmt=png&from=appmsg)

t2~t3：在t2时刻，开关管S2驱动电压下降到米勒平台，Cgd2、Cds2开始充电，Vds2电压开始上升，等效电路如图10所示，S2沟道等效为受控电流源，S1等效为线性电压源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4eobic4SQbPS2M6vKslRqkVv3E5pKAkkYw7kZW8ibriaOmWtGJSwFGchOA/640?wx_fmt=png&from=appmsg)

存在如下关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4IrlnfyU0NXRsJ1yjKoibfYUCQ2VTC7zkpkA048aTsOf7LfE9aPQaa6w/640?wx_fmt=png&from=appmsg)

其中R1电流相比于其他元件较小，可忽略不计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4OP9bfkVCs7x4uB8ibj5HQX3kFoEkHnYhlo6XRpHYmom82rjQbGUg15g/640?wx_fmt=png&from=appmsg)

可得出

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4FiaibGCHWwseVVTztDNWTqwmLAhzrIOLY8vUFWK8EnPSw2Nlh30hBBPw/640?wx_fmt=png&from=appmsg)

t3~t4：t3时刻二者电压之和等于Vin+VR，关断过程结束，在图7中为C至D的过程。从式（9）可以看出，上管的电压上升速率要大于下管。

由电容Coss和漏源电压Vds之间的负相关特性可以得出串联MOSFET的关断过程是一个正反馈过程，驱动信号的延时会导致两个开关管产生电压差，Coss\-Vds的负相关特性进一步放大该差值，使两个开关管之间的电压差越来越大，当二者之和到达Vin+VR时，电压差不再变化，差值越大会使损耗和应力不均衡，不利于变换器效率提升。因此，我们期望延时时间尽量短，减小两个开关管电压差，对此我们结合式（6）在参数设计部分进行了优化。

2.2 静态分压

在非钳位模式下，t4~t5时间段之内，开关管S1、S2二者之间会存在静态分压的情况，具体分析如下。

模态如图5e所示。关断瞬态结束后，Vds1电压值大于输入电压，Z1正向导通，R1电流反向，电流通过变压器一次绕组流向开关管S2，因此Vds1电压下降，Vds2电压上升。

等效电路如图11所示，Z1是导通状态，可等效为导线，Zc处于截止状态，可看做断路。变压器一次绕组被输出电压钳位，等效为恒定电压源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4xAqaxjgv2uI2ksw21roc6dRR0e2JzZ7QsbXhFwAMhJk27zhfJVpEicw/640?wx_fmt=png&from=appmsg)

设定Vc10为Coss1的初始电压，可得出

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4g9e56rpYco9NM7n0kuiabWsNEGBU7dw4ecib5j4l7ibg9wSKpP1zbEGUQ/640?wx_fmt=png&from=appmsg)

式中，Ceq1\=Coss1+Cc。

根据式（10）、式（11），因为非钳位模式下Vc10大于Vin，在关断之后，Vds1电压以指数形式逐渐减小，终值为输入电压Vin，Vds2电压以指数形式逐渐增大，终值为反射电压VR，二者电压之和为Vin+VR。非钳位模式下的静态分压过程会增大电阻R1损耗，且会增大上管S2电压应力，在参数设计过程中应对R1进行合理设计以减小损耗。

3.开关管开通过程及电压应力研究

变换器工作在准谐振模式 ， 本节展开对MOSFET开通过程的研究。

根据准谐振工作模式的工作原理，变压器二次电流变为0之后，励磁电感Lm会与开关管等器件的寄生电容谐振，控制器此时会通过辅助绕组检测电压，该电压小于阈值时开通一次侧开关管。Lm与一次侧电容谐振的等效电路如图12所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4sEgrCyI3NlpSDXcm47iamxJJibpibITBPR7GicuFDQaSrpeHVOuIT37toA/640?wx_fmt=png&from=appmsg)

存在如下关系式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI42zWIeUH7zibF3rO4QHbjiaCEibC0v9ibHxNibU9LkLvfUfoIsgYgLliaYmkw/640?wx_fmt=png&from=appmsg)

可以得出

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4SB3ouINvSZ5BShKscKmAX4zVPNmuqicearcTWCVEEcVe8PHWyHSAasg/640?wx_fmt=png&from=appmsg)

式中，ω1 2\=N/(LmCoss2Ceq2)，N\=Ceq2+Coss2。

根据准谐振的工作原理，得出S1开通电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4ibcbnGtTSTkGdZM7nIxoyXqKSvpjRwrYt9C4wLZeZt8y6rVZgpn9b6A/640?wx_fmt=png&from=appmsg)

可以看出开通电压与Coss、C1和Cc有关，两个开关管的振荡周期相同，振荡幅值按照电容容值分配，容值越大振荡幅值会越小。另外，输出电容容值与开关管电压有关，且随着电压增大，容值会减小，可以得出开关管S1的振荡幅值将会随着输入电压的升高逐渐减小，准谐振开通对于降低S1开通损耗的作用将会越来越小。从式（16）、式（17）可以看出开关管开通电压与关断电压有关，而关断电压分配与TVS管的钳位电压有关，因此在选择TVS管钳位电压时需要考虑其对开通损耗的影响。

同时还可以得出谐振过程结束后uC1两端电压UC1-QR(on)为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4ib2XxHzia1odnz7UqmxvHxqCUrIsYGrxNfkzszkQvc0zqkNYust0Z1nQ/640?wx_fmt=png&from=appmsg)

式中，Δu1QR、Δu2QR分别为谐振过程中开关管S1、S2漏源电压的变化量，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4DUDI1Psm4g1zE7KsI02EVZughsZjERic51LjH0D7tIMib9Bkucss6ynA/640?wx_fmt=png&from=appmsg)

从而得出

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI40JlJM3OdIh6pwyI4RZoa9pQk2kSUgZibdHhHbUsuVzHFo0StatCRdUg/640?wx_fmt=png&from=appmsg)

准谐振过程不仅会影响两个开关管的开通电压而且会影响S2开通之前的电压，需要对C1电容进行合理设计避免在准谐振过程中开通S2。

4\. 变换器参数及环路设计方法

在宽输入电压范围内保持高效率和稳定性是一个严峻的挑战。变换器设计需要在不同输入电压下保持稳定的输出，同时实现高效率。级联反激变换器现有研究中对于R1、C1、TVS管Zc和稳压管Z1的选取没有明确的设计方法，而这些元件对于变换器的正常运行和高效率至关重要，因此本文针对上述元件提出一种参数设计优化方法。

4.1 变换器参数设计

该变换器中功率器件的参数设计与传统单管反激变换器相同，变压器，缓冲电路，输入输出电容的设计不再赘述，仅对R1、C1、TVS管Zc和稳压管Z1选取的设计过程进行具体介绍。

4.1.1 限流电阻R1

电阻R1为S2的驱动充放电提供回路，在宽范围输入时，该电阻的功率额度需要满足高压输入下的需求。另一方面，开关管关断状态下，该电阻阻值越小，静态分压过程越明显，损耗增加。因此限流电阻R1的选择需要综合考虑开关过程与静态分压过程。

在静态分压过程中，电容充放电的时间常数τ应远大于最大关断时间toffmax，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4IIM7PzUVqIAAcu4PEV8icgO6wx93Uzm3Gcos59GA20j4pyETjZHmslw/640?wx_fmt=png&from=appmsg)

另外，根据第1节分析可知，上管S2的开通主要由电容Cc决定，但在变换器开始启动过程中，电容Cc无初始电荷，此时上管的开通需要通过R1从输入电源取电以建立栅源电压。在控制器启动后第一个开关周期到S2正常开通这段时间，输入电压通过R1给C1充电，C1两端电压uC1-start为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI41yUoS0Hkeqcm2HZK2KrZfALM2SpptVtEecuBAVnic8Zl6Gu40VVeJbA/640?wx_fmt=png&from=appmsg)

当uC1-start大于上管S2的阈值时，S2开通，从而使得TVS管在关断过程中其电压可正常建立，变换器进入正常工作。设定变换器在控制器启动后Tstart时间内正常工作，则

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4fPMicjzFtqnQo5H1XIBMv2pcsIEcPktuBrbtX6Wicb5UbicC4njuMXMTA/640?wx_fmt=png&from=appmsg)

综上所述，结合式（24）、式（26），R1阻值位于该范围内时可保证变换器正常工作。在本变换器设计中，为提高效率，R1取其上限值。

4.1.2 驱动电容C1和驱动稳压管Z1

C1的设定需考虑其对开关过程的影响。根据式（6）可以看出，延迟时间与C1容值成正比，电容C1越小，延迟时间越小，越有利于减小S1、S2开关管之间的电压差。

另外，在开通过程中，开关管S2的驱动电压由两段过程组成。

1）在图12所示准谐振过程中，C1参与谐振该过程结束后，C1两端电压如式（20）所示。

在此阶段，为使开关管S1、S2在电压最低点开通，C1两端电压uC1-QR(on)不能超过S2的阈值电压VS2-th

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4Gljuz3JNCep2iclYOYOlIhpKic1cQW7MkbHPOzA44VuJUMDqhxibEHOibg/640?wx_fmt=png&from=appmsg)

2）准谐振过程之后，S1开启，电容Cc中的电荷释放至电容C1和S2的输入电容中，设Δuc1on为电容C1两端电压的变化值，依据电荷守恒，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4osgf7aQhw9fgQW027jia3DDvYicDXkxibTu0fVoWl9jOyqbg0ibZuDdFfQ/640?wx_fmt=png&from=appmsg)

式中，Δucon为S1开启之后Cc两端电压变化量，可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4LPYxFpJibm8YTnWhicXjhX2ibNXfOd9OITjtPy1on5ZOojLQccJH1Rjag/640?wx_fmt=png&from=appmsg)

结合式（16）、式（28）、式（29）可以求出电容C1两端电压的变化值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI413sx7iaCvbg29hbaibnicGvMzOBzR39ibrosKyG1MvBZYUTcsVVNkCldjw/640?wx_fmt=png&from=appmsg)

综上所述，从谐振过程开始到S2开通，电容C1两端电压变化值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4yFxFK6pArhZibDrT4PPaS2jMeh7doDZ82D74NrRxGR4lWsPraj1L5LQ/640?wx_fmt=png&from=appmsg)

开关管S2开通电压即为Δuc1，S2开通电压的选择首先需要结合器件Datasheet中的转移特性曲线，保证MOSFET通流能力的前提下选择合适的驱动电压。另外根据式（31）可以看出，驱动电容C1的电压与输入电压有关，输入电压越大，C1上的电压越高，为保证变换器在低压输入时也能正常运行，驱动电压还需要在输入电压最低时进行确定。

在本样机的具体设计中，一次电流最大值约为2.5A，结合开关管MSC750SMA170B\[15\]，选择驱动电压为16 V，由于稳压管工作时会抽取电流，因此考虑裕量后选择稳压管BZT52C18，C1容值为1nF。

4.1.3 分压控制TVS管Zc

根据前文分析可知，钳位模式下S1关断电压为Zc的钳位电压值，S2的关断电压为Vin+VR\-Vzc。TVS管的钳位电压值会影响MOSFET的开关损耗。因此该TVS管的选取需要考虑对开通损耗的影响。

S1、S2开关管开通损耗之和为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4OghvNpWic9yHY36PhVpwukTtlxXe6rktD0D4KuIGlbZlDTiaupr0UVyA/640?wx_fmt=png&from=appmsg)

式中，fs为开关频率。将式（12）、式（16）和式（17）代入式（32）中并对Vds1求导可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4apXnDSL1OnfTIwRiaBq5nuu6sibRwkBrzkfvib1gJtQOFYuQ1jaiaBNNag/640?wx_fmt=png&from=appmsg)

令式（33）等于0，可求得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4h7BiayKh4QEK3JNT1apuZIozt6BCqqkThrv9Ob8qB6yhLI8un9MGftA/640?wx_fmt=png&from=appmsg)

时可使开通损耗Pon最小。

因此，可将Vds1看做受控量，通过TVS管的选型，进而根据钳位电压影响开通损耗的大小。在额定输入电压下确定该钳位电压，并将钳位电压设置为Vds1off时，可将额定输入下的开通损耗降到最小。

该变换器的参数设计框图如图13所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4QYRuFiaZibJGMicjRAoYtiajwqGgianu2qibCvHGGfTpmzW03fl1fiaUfVjmA/640?wx_fmt=png&from=appmsg)

图13参数设计框图

Fig.13 Parameter design block diagram

4.2 环路设计

宽电压范围输入下，变换器需要具有宽增益和快速应对输入电压变化的能力。在本方案中，变换器工作在准谐振模式减小开通损耗，采用峰值电流模式控制快速稳定输出电压，即在控制环路中加入输入电压的前馈信息，将输出电压的误差放大之后与一次电流峰值进行比较，提高动态响应能力。

环路设计首先需要对变换器进行建模，在开关元件平均建模中，用平均变量为参数的受控源替代原来的开关器件，忽略其中的时变元素。因此可将变换器中的开关管S1和S2当做一个整体，变换器的小信号等效电路如图14所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4GPwicWaV0ia1K5Pe1StH6Z1akUWoKnk1X13mB4iaTSyE3Esv2LFQND80Q/640?wx_fmt=png&from=appmsg)

Req1,J1,Req2,J2变量如下所示，Rcs为采样电阻，Rc为Cout的等效串联电阻，D1为一次侧管的占空比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4nHGlrBibl2UDD16SlficafUGC0oTEX2HA0v9Fk4kkvpa1LOB6uV35fqA/640?wx_fmt=png&from=appmsg)

可得控制量到输出的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4OV8zMJFiayzVdG6vZxY6qjqHHOCJ8RIeFfOhKj110oOKswibCe9b88SQ/640?wx_fmt=png&from=appmsg)

不同输入电压下的Bode图如图15所示。电解电容的寄生电阻影响了极点和零点，高频零点使得相位提升，利于提升相位裕量。但较大的寄生电阻会导致大纹波和高损耗。同时，该变换器即使不使用反馈补偿，输出也不会自激振荡，但其低频增益不高，高频衰减不足，会使高频噪声较大，仍需补偿网络进行校正。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4pV4FyQ0FJ5pDoWJRdttr0KIX2cm6ibAMaEmRJibibC9Ny89skGwHDC0hw/640?wx_fmt=png&from=appmsg)

II型补偿反馈电路如图16所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4d4eFbhTL297GGZBqF00IicX4eyRXia4OTkH3ab5Fh1PvvZQfSGhmMASw/640?wx_fmt=png&from=appmsg)

传递函数（设定C2s\>>C1p，KCTR光耦传输比）为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4efyTEeP6WfNWhibV3k7j3sicFfaayibW4dibMfsGaF14JX7eBfJrmaqOoA/640?wx_fmt=png&from=appmsg)

反馈回路Bode图如图17所示。从该图可以看出，II型补偿网络会带来两个左半平面极点与一个左半平面零点，可以在提高稳态精度，调节动态响应速度的同时进一步调节高频衰减能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI46KK4ia8KQlMDZKZwiclfkTXFicUSL604SbyPYaS5Y0H4lkTiaUXsicCln3Q/640?wx_fmt=png&from=appmsg)

补偿后系统的开环传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4ojjj5Mx4xVEicyzh5Gs5RAqXctbHSnQl6Mic5JPuTniaicIPG77dgXVfgw/640?wx_fmt=png&from=appmsg)

II型补偿系统Bode图如图18所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4R1s4N6k0ia2Xjl3P1HtAbWGia2LlGiaS7WiaIDYnTOhQIqHgp5slzxJTlg/640?wx_fmt=png&from=appmsg)

通过II型补偿方法，补偿后变换器系统的截止频率3.6 kHz，满足动态调整率需求，相位裕度55.3°，系统稳定，高频衰减较好，符合需求。

5.变换器损耗建模与分布

根据文献中的损耗建模方法，在100W负载工况下进行分析，变换器中各损耗构成如图19所示。

300V工况下，一次侧开关损耗占比较大，二次侧整流管的导通损耗占比较大，TVS管处于截止状态。900V工况下，一次电流减小，开关损耗占比变小，TVS管的损耗也较小。1500 V工况下，开关损耗，TVS管损耗增加，外围电路中的杂散损耗增加。

杂散损耗主要包括熔断器损耗、输出滤波器损耗、控制器的外围电路损耗以及反馈回路的损耗，其中控制器外围电路损耗中启动电阻的损耗与电压正相关，会随着输入电压的升高而明显增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4LnI3PAvM4gfjDVXVMtWyLnNNst2LroycMOXQibZrB8mt7vzfqkILtiaw/640?wx_fmt=png&from=appmsg)

6\. 实验与验证

为了验证方案的合理性，搭建了一台100W级联型反激变换器样机，在低成本前提下，尽量保证性能，一次侧采用SiC MOSFET，二次侧采用Si整流管，基于应用需求，变换器参数见表1。TVS管按照额定输入电压900 V进行选择。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4Ono3qMhLftQYUgibfIrsAvORy2YydwoGu7CKAf0j27iaS7h2KcGAJOQA/640?wx_fmt=png&from=appmsg)

基于上述参数和型号（成本小于200元），搭建实验样机如图20所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4TP7DOEPykfEma1b60cbtrHib8JtrpcEbod15OztqhkUm5lLbAZFnpLA/640?wx_fmt=png&from=appmsg)

满载功率100 W，输入电压为300、900、1500V的典型工况下进行验证，波形如图21~图23所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4ExHOtNmOD4QJSHJaPnAtMQIe1tFFWG1OibfJUcX8cCfmhExbcTo5eHw/640?wx_fmt=png&from=appmsg)

图21为变换器工作在300 V输入电压工况，此时工作在非钳位模式，变换器的占空比为39.3%，工作频率为60.47 kHz，输出电压23.82V，纹波190mV，开关管S1为530 V，在第一个波谷处开通，开关管S2电压为0。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI47qyhIazT33wWrVAtQia0LkyBZvQ2H2ib3f5TV6DfuuUMoSfyAKiaKNyDw/640?wx_fmt=png&from=appmsg)

图22为变换器工作在900 V输入电压工况，此时工作在钳位模式，变换器的占空比为14.5%，工作频率为110.8 kHz。输出电压23.84 V,纹波130 mV。开关管S1钳位至600 V，Vds2此时为550 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4GLrqV9EFW6Aic16RA2rEO5g9C0NcichxHxiaiaKhVpqeGsxkicP8C6sic3bQ/640?wx_fmt=png&from=appmsg)

图23为变换器工作在1500 V输入电压工况，此时工作在钳位模式，变换器的占空比为10.9%，工作频率为129.1 kHz。输出电压24.10 V。开关管S1钳位至650 V，Vds2此时为1100 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4uhcFFAHSqiaxQ71P9jIHkibHw1aj2FYRjSYJ9zxLVBN9z92uwltWuzaA/640?wx_fmt=png&from=appmsg)

动态负载切换如图24所示。从图24可以看出，负载变化时(90%负载切换到10%负载)，输出电压变化峰峰值为1.2 V，为输出电压的5%，满足动态调整率需求。

分别在满载（100 W）、半载（50 W）和轻载（10W）工况下，对变换器进行了效率测试，并与开关管数量和变压器数量相同的双管反激辅助电源进行了比较，效率对比如图25所示。可以看出本变换器在满载与半载时相比于双管反激平均效率更高。但在轻载高压工况下，仍然有所不足，一是控制芯片的启动部分在高压输入时损耗较高，二是TVS的电流在高压工况下会变大，损耗升高，是级联型反激拓扑的不足之处。在未来将深入研究该损耗并加以改善。幸运的是，从图25中可以看出，基于所提出的参数设计方法所研发的级联反激变换器可以满足宽增益的应用需求，同时具有很好的应用前景。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4Gibv9QWtbBlcObA8aWaVf7hmxIwyStPXOEQqBba7TNH5Z8kJoBPVnbQ/640?wx_fmt=png&from=appmsg)

低成本是级联型反激拓扑相比于双管反激拓扑、输入端串联型反激拓扑和多电平反激拓扑的一大优势。以下是具体的成本对比（以1500 V输入为例）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4KBiamm9MyjQh112jtR2zWTzSObaIdoUriarVGAfReS6dm8g4j63vxNibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsncDHdjYqYM2k4xb6vibiaxI4JKibKnnYSXiamrlSknUHhXmnNSk7MrCo3CWLcgGHAzpRlqVqdFFZZWBw/640?wx_fmt=png&from=appmsg)

可以看出，通过TVS管钳位可将电压进行合理分配，减小开关管电压应力，同时还能降低变换器成本，实现低成本宽输入范围高应力的高效电能转换。

7 .结论

本文针对太阳能发电站、风能发电站等系统中高压宽范围输入的辅助电源，设计了一种级联型反激变换器，对该变换器细化了计及寄生参数影响的多模式工作模态，归纳了参数约束条件，针对R1、C1、TVS管Zc和稳压管Z1，分析了这些器件对电路性能的影响，并提出一种新型参数设计方法，同时对环路进行补偿设计。相比传统方案，该拓扑采用单芯片驱动多个级联开关管，利用TVS管分配开关管电压应力，拓宽了器件选择范围，并降低了成本。

最后进行相关实验，实验结果验证了所设计的高压宽范围辅助电源方案的可行性和正确性，并获得93.4%的运行效率。可以看出，所设计的方案可以有效地降低开关管电压应力，适用于高压宽范围输入的辅助电源设备。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

 加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)