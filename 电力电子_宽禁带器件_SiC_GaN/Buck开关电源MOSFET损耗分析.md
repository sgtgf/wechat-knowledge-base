# Buck开关电源MOSFET损耗分析

原创 廖波　李伟亮 SiC碳化硅MOS管及功率模块的应用 2026-03-15 09:18 广东

> 原文地址: [https://mp.weixin.qq.com/s/z-T8mWTDTOxY4DIqV4WVjA](https://mp.weixin.qq.com/s/z-T8mWTDTOxY4DIqV4WVjA)

文章来源：汽车工程师

作者：廖波　李伟亮　赵目龙　吕佳文　杨莉（中国第一汽车股份有限公司研发总院，长春 130013）

摘要：为实现汽车集中式域控制器高性能芯片的开关电源的功率损耗计算，分析了金属\-氧化物半导体场效应晶体管（MOSFET）的导通和关断过程，对Buck型开关电源的MOSFET损耗进行理论分析及公式推导，针对开关损耗部分 进行了实例计算和仿真验证。结果表明，计算结果与仿真结果趋于一致，所提出的方法可为开关电源MOSFET的选型提供参考。

关键词：开关电源； MOSFET损耗 ；Buck； 导通损耗；开关损耗

1. 前言

伴随着汽车智能化、轻量化发展，汽车电子电气架构逐步由分布式向集中式域控制器的方向发展。传统分布式控制器的主控芯片为微控制器（Microcontroller Unit，MCU），内部电源系统通常选用集成控制器局域网（Controller Area Network，CAN）总线/局部连接网络（Local Interconnect  Network，LIN）通信功能及电源功能的系统基础芯片 （System Basis Chip，SBC），或直接选用集成电源管理芯片（Power Management Integrated Circuit，PMIC）。集中式域控制器，尤其是应用于智能驾驶和智能座舱的域控制器，引入了大算力的单片系统（System on Chip，SoC），单路电源电流需求可达几十 安，传统SBC和PMIC无法满足需求，需额外增加分立电源。常用的降压型分立电源有Buck型开关电源和低压差线性稳压器（Low-Dropout Regulator，LDO）。其中Buck型开关电源以高效率的特点广泛应用于大电流需求的降压型电路中。

Buck型开关电源效率通常高于80%，电源内部能量产生热损耗，并转换成热量，开关电源中主要发热元器件为开关管、整流管、变压器和电感。其中金属 \-氧化物 \-半导体场效应晶体管（MetalOxide-Semiconductor  Field Effect Transistor，MOSFET）损耗的计算最为复杂，其选型直接影响电路的效率及工作状态。

2. 电路原理

根据Buck型开关电源芯片是否集成MOSFET，将其分为转换型和控制型，2 种类型的电路原理分别如图1、图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIiaJ58hPH0tIZvrdZnk1vynVSxN5Gicpu4CwOqzTpngu3wmGA6B0scic5A/640?wx_fmt=png&from=appmsg)

转换型电路内置MOSFET，芯片（ 包含MOSFET）的效率可直接查芯片手册获得，进而推算出芯片（包含MOSFET）的功耗。控制型电路外置MOSFET，需要通过损耗计算分析确定 MOSFET 的选型。 控制型电路的 2 个 MOSFET 功能不同，其中输 入电压和电感之间的 MOSFET 为上管，主要起开关作用，上管导通时，电源通过上管为电感储能，上管关断时，切断输入电源与电感之间的连接。地线和电感之间的MOSFET为下管，主要起续流作用，导通时为电感提供续流路径，关断时切断地线与电感的连接。上管和下管不同时导通，存在一定的死区时间。本文主要进行控制型的Buck型开关电源电路MOSFET损耗的计算分析研究。

3. 上管损耗分析

开关管的工作过程分为4 个阶段：开通阶段、 关断阶段、导通阶段、截止阶段。其中截止阶段电流几乎为0，在计算损耗时可忽略。上管损耗PQ\_U包含上管导通损耗PCOND\_U、上管开关损耗PSW\_U、上管驱动损耗Pdrive\_U：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIaJtEWQhgAuuXdWvY8kBMKN9wsG4G2dfmTpic0ibS2lVLJ0v0ibBCfd0Uw/640?wx_fmt=png&from=appmsg)

设电路的输出电流均值为 IO，根据 Buck类型开关电源原理，流过上管的均方根电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIrCwUPaNvCF7O6NK2ZDHM9fOKLta11136DZRha7v8fib5taPIeFKM3icw/640?wx_fmt=png&from=appmsg)

式中：D 为开关电源占空比，r 为开关电源电流纹波率。

由于 r 通常较小（目标值一般为 0.2~0.4），在后续近似计算中，均方根电流可近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIrzxicjt8iby0dmwaib79g1NbOrnicI86c2mIuyXv9wXOMYMwLVb10GkHzQ/640?wx_fmt=png&from=appmsg)

3.1 上管导通损耗

上管导通损耗PCOND\_U是上管完全导通时损失的功率。上管导通损耗受通过MOSFET的电流和MOSFET的导通电阻Rdson\_U影响，计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIia37dzWU85kmIKMSBACRVbiakmfGt8hnqeWDibh4qKShqFPuUWCia8fAGw/640?wx_fmt=png&from=appmsg)

由式（3）可得，上管的导通损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI8rfDY2ZnM40uMfGCicDzmib0icIYsBQqGhBic0vrObBOd1EJDyQ8e0Wsaw/640?wx_fmt=png&from=appmsg)

上管选择导通电阻小的MOSFET，有利于降低MOSFET的导通损耗。电路的均方根电流与输出电流、占空比呈正相关，当输出电流一定时，占空比越大（输入电压越小），均方根电流越大，所以在分析极限情况时，需要考虑输入电压偏下限的情况。

3.2 上管开关损耗

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI5Loa9NUCIllDBdoWUzKInqJHua4A0EulMsFKicicKITDCvBibWMKbTXvA/640?wx_fmt=png&from=appmsg)

上管在饱和状态与截止状态之间转换需要一定时间，所以在开启和关断过程中存在电压和电流不同时为0的情况，此时，MOSFET会产生一定的功率损耗，即开关损耗PSW\_U，图3所示为MOSFET开关过程中电压、电流交叠示意，单个周期内损耗的功率即为阴影部分的面积。

图 3 中，Vds为MOSFET漏源电压，Id为MOSFET漏极电流，Vgs为MOSFET栅源电压，tr为MOSFET 开启过程中电压和电流交叠时间，tf为MOSFET关断过程中电压和电流交叠时间，则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI4khPJeuxmz5aKYg8sFI2ibIJJJ2Ol4AcBPEBDMA4JlKJCIepJVXyuKQ/640?wx_fmt=png&from=appmsg)

式中：Vin为输入电压，在实际应用时，一级电源计算需要考虑抛负载（Load Dump）及辅助启动等工况下的最大输入电压；Io\_max\=IO(1+r/2)为输出电流最大值；f为电路的开关频率。 由式（5）、式（6）可知，开关损耗除了与开关管的漏源电压Vds、漏极电流Id、开关管的开通时间ton和 关断时间toff有关，还与开关频率f正相关。

3.2.1 开关损耗分析等效模型 

开关损耗又称交叠损耗，是在 MOSFET 开通和关断阶段，有效的电压和电流同时作用于 MOSFET造成的损耗。上管开关损耗分析等效模型可简化为图4中虚线框部分。图4中Vg为MOSFET栅极电压，Vs为MOSFET的源级电压，Vout为开关电源的输出电压，Vdrive为电源芯片驱动模块产生的驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIsZUTQ6cXhYOmPAqicrP6ox0UibpHKLaMOn2bBD8lImRKr6U9hhictOYzw/640?wx_fmt=png&from=appmsg)

上管栅极输入电容Cg为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIatWwFWKibhZEiaFrl9Xn9gaic2ibTGLLA2ia8Rib09sgW2Y42gX5AC9s96sg/640?wx_fmt=png&from=appmsg)

式中：Cgs为栅源电容，Cgd为栅漏电容。

MOSFET寄生电容的参数通常可按照以下公式换算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIxBvJx9JIYEcUyB2727ZFlqJfTCQhFyPhXqSaa4Ps90LHTuJ3wRRk1Q/640?wx_fmt=png&from=appmsg)

式中：Crss为反向转移电容，Ciss为输入电容，Cds为漏源电容，Coss为输出电容。

MOSFET开关损耗是开通阶段和关断阶段产生的， 将开通阶段、关断阶段分成8个时段分别计算损耗。

3.2.2 上管开启过程 

上管开启过程可以分为 4 个阶段，对应的时间间隔分别为t1、t2、t3、t4 ，如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIvJI8ytoZpWTawI6NHqicTNcH56pm1hicjuWcp3yuicGNAtuWD96jstUkA/640?wx_fmt=png&from=appmsg)

当开关电源电路达到稳态时，上管导通的瞬间，上管的S极（开关电源交换节点）电压VS为0。 

第 1阶段 t1为电源芯片驱动模块产生的驱动电压 Vdrive通过上管驱动电阻 RUGATE为上管栅极充电的过程，充电时间与驱动电阻和栅极电容有关。此阶段 MOSFET 的栅极电压 Vgs从 0 提高至开启电压 Vth， 该阶段 MOSFET的 D极和 S极之间几乎没有电流流过。充电时间常数Tg为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIuyQSptytRHIoHlCRfSgrDePtlUNWgRibudgEygDXrARHRP8bB0Mdtnw/640?wx_fmt=png&from=appmsg)

其中，RUGATE包含电源芯片驱动电阻（内部推挽电路推挽管导通阻抗）、芯片与MOSFET栅极间的栅极电阻和MOSFET管内部的栅极电阻。 

上管的栅源电压可以通过如下公式进行计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIwlnhRhuvDJl3icVK2O41aK4G1nNYEx4Q2BnKtjuzTr8VSnzk75eI13w/640?wx_fmt=png&from=appmsg)

式中：Vdrive\_H为电源芯片栅极驱动电压，t 为时间变量。 

式（12）变换可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDImNY0r2UzTItkAYK2u4nbBujFYSyjzGqcX4GdibFWdRLPYbVdAkt4rsQ/640?wx_fmt=png&from=appmsg)

当 t\=t1时，Vgs与 MOSFET的开启电压 Vth相等， 则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIfibEvnQAL9cPpMCfg3O3mzpbXKVQQUeAYX7E6ISQTHmNdCQqFXWP3CA/640?wx_fmt=png&from=appmsg)

第 2 阶段 t2为上管在芯片驱动电压的作用下， 栅源电压 Vgs继续提高至米勒电压 Vmiller的过程。在第 1阶段已经达到了开启电压，因此，从第 2阶段开 始，流过上管的漏极电流逐渐增大，速率取决于MOSFET 的跨导。MOSFET的跨导信息参照第2 阶段最终达到MOSFET栅极电压的电压值（米勒电压） 作为参数带入计算，当t\=t1+t2时，Vgs\=Vmiller。

t2可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIpqGSSnxQU8oGR9qCRrtIic3457OjicnVua4ruxJJJvt61IXNia3ylj3Hg/640?wx_fmt=png&from=appmsg)

第 3 阶段 t3为 MOSFET 的米勒平台阶段，Vds开始下降至 0。Cgd两端电压由Vmiller变化为(Vmiller\-Vin)， 电源芯片通过驱动电阻向Cgd注入电流，上管的Cgs两端电压Vgs维持不变，为米勒电压，即当 t\=t1+t2+t3时，Vgs\=Vmiller，Vd\=0。 

在 t3时段，Cgd向 Cgs注入电流，与驱动电压向栅 极注入的电流相等，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIM7dWawnsHkLQTFoqh9ibOCMw9lmPW9xnfClqpZ0icwxRr6fDREsaXK1A/640?wx_fmt=png&from=appmsg)

即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIp7kvxhpHUcyAbOIOicE7aMwPURQxMB8vxeOvibPs8UYwsQYZep6jKgTQ/640?wx_fmt=png&from=appmsg)

在第 4 阶段 t4，驱动芯片继续通过驱动电阻RUGATE向 Cg充电，根据充电指数公式，在充电时间为ln(1/(1-x))×Tg时，电压达到终值的 x 倍，充电到 90%终值时充电时间为2.3Tg，则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIjicTfzBRnH3x6LqnM2NibZD9IfDMPUDFtJKQBE1WCt0ibOXmGTj9zcsNw/640?wx_fmt=png&from=appmsg)

如图5所示，开启过程中只有t2和t3时段内电压和电流有交叠不为0的情况，因此：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIJtfe7swnticBEx36FQ7xicrauMAZXnOnB7ibqyBaCPj3nCEtPzgdRR95A/640?wx_fmt=png&from=appmsg)

3.2.3 上管关断过程 

上管关断阶段波形如图 6 所示，可以分为 4 个 阶段，对应的时间间隔分别为t5、t6、t7、t8 。其中，t6和t7时段内电压和电流不同时为0。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIhHCsId5k6mrKQnGIkkYKPrVhDTUp0sJ9xwSJKktce9pKY2R2zCCKeQ/640?wx_fmt=png&from=appmsg)

第 5 阶段 t5开始时上管 Vgs与驱动电压 Vdrive\_H相等，第 5 阶段结束时，上管 Vgs为 Vmiller，驱动与控制电路输出的驱动电压变为低电平Vdrive\_L，电容Cg通过驱动电阻放电，此时Vgs为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIKRdzicALj4IMdxRXjdEqyxsExtKNEUVgezTEbuXFlncu46ykicfvP2Yw/640?wx_fmt=png&from=appmsg)

当t\=t5时，Vgs\=Vmiller，则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI1zPicqziay4epGicgAaf8h26iasjXRlNNrmplB8puqc8Qvmw3jJcaHGjWQ/640?wx_fmt=png&from=appmsg)

第6阶段t6为米勒平台阶段，Vgs\=Vmiller，但上管漏极电压逐渐增大至 Vin，Cgd两端电压由 Vmiller变化为(Vmiller\-Vin)，Cgd放电电阻 RUGATE向驱动芯片放电，Cgs两 端电压保持不变：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIEKoHoVtP3FEswKWWmNAkPmunxmpb8dh9zcjqJRZ9qT6RLghDZaN5Wg/640?wx_fmt=png&from=appmsg)

即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIE1AY0ZMYMMiaqvXPmK17g8mpEnOHibAOPAtPuApcJNKcnBbnRj4icbpBg/640?wx_fmt=png&from=appmsg)

第7阶段t7是Cg通过驱动电阻放电的过程，第7阶段开始时，Vgs\=Vmiller，第 7阶段结束时，Vgs\=Vth，则 Vgs为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIOD4k1dJTp0qK66ta75137z0icZsibxdfYKCpwiaf63rkhYuE6evX8Riamg/640?wx_fmt=png&from=appmsg)

第 8阶段t8是 Cg通过驱动电阻继续放电直至放电完成的过程，设栅极电压降低至初始值的 10% 时认为放电完成，则放电时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIHoeQCeujqY46AAzWicpQLPobDvI0LQAGib4cX8AqFHchshq0hhBqrKIw/640?wx_fmt=png&from=appmsg)

经计算，t8≈2.3Tg。 

综上，关断过程存在开关损耗的时间tf为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIEMYEHTYk4ibaOjg03PLlRmAbc4mcr7nFQSz9ldUxYXlzW2rFo4qx7dA/640?wx_fmt=png&from=appmsg)

由式（19）、式（27）和式（6）可得上管的开关损耗。

3.3 上管驱动损耗

基于单个电源开关周期内电荷守恒原理可知下管的驱动损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIZN6bIibrt4NicWeiac5Uiawym4BM2bMR4F6z0PiaSnSomn0vIgIeAPJ5qMw/640?wx_fmt=png&from=appmsg)

式中：Qg为MOSFET栅极电荷。

3.4 上管结温计算

上管温升ΔTU为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDICc4bicibGibqVFf68KuhNOOiaeibPV4QZrWguwOeiaze6gpQTljo1fzYL5zA/640?wx_fmt=png&from=appmsg)

式中：PQ\_U为上管的功率损耗，可以由式（5）、式（6）、 式（28）求得的损耗带入式（1）求得；RthJA为上管的热阻。 

上管结温Tj\_U为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIml2jOuwS3bTp2KicCSoDSKlHV7fQMU3lYbNBbX7Kfb8tOUDyfGiaUR2g/640?wx_fmt=png&from=appmsg)

式中：Tamb\_U为上管所在控制器内部的环境温度。 

在实际计算中，Tj\_U以小于MOSFET的最高结温限值为限。

4. 下管损耗分析

Buck 开关电源分为同步整流和异步整流，其中，异步整流下管使用肖特基整流二极管进行续流，由于二极管存在正向导通压降，当电流较大时， 二极管的损耗大。所以在大电流应用场景中，通常选用同步整流，使用 MOSFET 代替肖特基整流二极管，续流时导通电阻只有几mΩ，能有效降低续流阶段的功率消耗。本文基于同步整流方式进行下管功耗分析。 

由于下管在导通前、后两端电压接近0，故忽略其开关损耗。下管的损耗PQ\_L为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIpgggtSzNRHcXKtyVuGNtluNNyHnuzI4zA4moaW1Mj4F2GOSEbc5pbw/640?wx_fmt=png&from=appmsg)

式中：PCOND\_U为下管导通损耗，Pdrive\_L为下管驱动损耗。

4.1 下管导通损耗

下管导通损耗PCOND\_L为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIYmCpMQsjbibzjBCDk4NzeeTcEv3tJC8TD42zJicUnIzTgFJMQEQ4icf7g/640?wx_fmt=png&from=appmsg)

式中：IRMS\_QL为均方根电流，Rdson为MOSFET的导通电阻。 

其中，IRMS\_QL为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDITGycdnglep3k2wtdDdgJ5Ah82LsFmRXLHxNxlNkk3CsZib12QQGXA1w/640?wx_fmt=png&from=appmsg)

由于r较小，计算可忽略，下管均方根电流值可近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIoBmPnsx2NMEpicib3ia7UEtbSonY1R89OVFJ0BhVL2iaoTzEozuNC1yI0w/640?wx_fmt=png&from=appmsg)

4.2 下管驱动损耗

根据电荷守恒，驱动损耗Pdrive\_L为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIKPvBXTszGWEZQUU8HMJcwk78F9LfZWMvAsoegXZX6PolAFUtibxoyDw/640?wx_fmt=png&from=appmsg)

4.3 下管结温计算

ΔTL下管温升为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIsL2iaT48KIqCboAOv59nptBSYU5mAjltpFia8ibl3FzZnV9ia1HsvEa8ZQ/640?wx_fmt=png&from=appmsg)

式中：RthJA为下管的热阻。 

下管结温Tj\_L为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIIDoh67pKjWta1J4Ym0WFGq87PXMkV7h55hsskcNAaAsmbRq8vWxpJA/640?wx_fmt=png&from=appmsg)

式中：Tamb\_L为下管所在控制器内部的环境温度。 

在实际计算中，Tj\_L以小于MOSFET的最高结温限值为限。

5. 实例计算及仿真验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIicf718kbGZLzeJorKdzzNoZGu9YoclrdIpyxlGUQS6NI3vEfqLSUGng/640?wx_fmt=png&from=appmsg)

在实际功耗计算中，开关损耗的时间计算最为复杂，本文以 LTC3891为例对上管的开关损耗时间进行仿真及相应的计算验证。LT3891 是同步降压型控制型 电源芯片 ，本例中上 、下管均使用Si7850DP，组合实现12V转5V降压电路，为负载提供5A电流。 仿真电路使用 LTspice 自带的电路仿真模型和器件模型，如图 7 所示，设定电路参数如表 1所示，与上管开关时间计算相关的芯片参数如表2所示，与功耗计算相关的MOSFET参数如表3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI7mAvv7SOONh4FSO57G09wicPzcH1ibSw5N6rpicjicHXcXiaIicln7jphCPQ/640?wx_fmt=png&from=appmsg)

计算中实际使用的MOSFET极间电容参数为表4中的计算参数数值。 

其中，MOSFET 的有效极间电容的计算参数根据文献 \[7\] 的折算方法进行缩 放 ，计算所用的MOSFET极间电容基准值来自MOSFET电容曲线中与仿真工况对应的参数值，如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIN1Ff6F1yyy65ick2oFIv2KenBibnDyupZ7xLiabTKHTHiaAwrF2niapfib4A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIo0Pzva8d9TD1UN8DUMEll4LbVDvL6AfyGe06biaSdodLwyb0MvK2ibMw/640?wx_fmt=png&from=appmsg)

上管开启、关断阶段仿真波形分别如图9、图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIgRytNGiadnQVV9cLH1s0mjhCG5E6TBYf2RhzaqsiadzQZg138hCb8M8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIDTR3iaXe7pXgiablFTib6ibghYbDr2ggmF1VJKG0HPcVb0JyNRuLHKzIyw/640?wx_fmt=png&from=appmsg)

为了更好地进行对比验证，计算分析使用的参数为表2~表4中的仿真参数和计算参数。上管开关过程各阶段的损耗时间仿真与计算对比结果如表5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIK3zSueKw3FAUNZ5G5UQVutkOl3w7x6TKQV1JaubsLtb7356SYCfGVA/640?wx_fmt=png&from=appmsg)

表5中仿真结果与计算结果在 t3与 t6时段差异较大，这2个时间段是米勒平台时段，分析其原因为仿真模型参数（Crss为100~500 pF）与实际器件参数 （Crss为50~500 pF）存在差异，而 Crss反映了 MOSFET栅极与漏极之间的极间电容 Cgd大小，Cgd越大，米勒平台持续的时间t3和t6越长。

6. 结束语

本文分析了汽车控制器中常用的降压型开关电源外置MOSFET 的功耗计算方法，重点针对其开关损耗的时间进行理论推导、实例仿真和计算验证。计算结果与仿真结果趋于一致，表明该功耗计算方法可为降压型开关电源MOSFET选型提供参考依据，并可在控制器测试验证阶段为MOSFET 温升问题提供理论分析依据及优化思路。对于具有频繁开关特点的应用场景，如开关较为频繁的负载的驱动电路中，其 MOSFET 的功耗也可按照本文思路进行推导和计算。

注明：

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ILnqiaiabsaGgdiaUxSazXzMI3qcrW6Wy7U4cZ7ibKDkiccZ1fvUicDz2N9RQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIvDuHqMqw4NzkBLww55AokZ79ddHOF2VV3K8L19g4mVAcYVyBqNrYJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIeJibUoHo0j34QnibONuR7PBvtN4bQKpbxC3Qz8GwYpdtMF3AU6zibghcA/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIPb5XNpOqLdKiaHtibOic2VBC3WV34acRiaVe8Je0EnHroDlNh0cEC9EM7g/640?wx_fmt=png&from=appmsg)