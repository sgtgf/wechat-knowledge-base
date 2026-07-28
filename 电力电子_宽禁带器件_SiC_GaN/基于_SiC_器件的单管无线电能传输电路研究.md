# 基于 SiC 器件的单管无线电能传输电路研究

原创 李厚基 ，王春芳 SiC碳化硅MOS管及功率模块的应用 2024-12-04 12:20 广东

> 原文地址: [https://mp.weixin.qq.com/s/RtSbPu97y3Cx7TQ90VmeCA](https://mp.weixin.qq.com/s/RtSbPu97y3Cx7TQ90VmeCA)

**文章来源：**中国电机工程学报

**作者：**李厚基 1，王春芳 1\*，岳睿 1，李聃 2(1．青岛大学电气工程学院，山东省 青岛市 266071；2．青岛鲁渝能源科技有限公司，山东省 青岛市 266071)

**摘要：**传统无线电能传输电路多采用全桥或半桥逆变拓扑，该拓扑电路及控制方式相对复杂、可靠性较低；单管 LC 谐振逆变电路具有结构简单、无直通问题、可靠性高、可实现零电压开通(zero voltage switching，ZVS)等优点。但是由于LC 谐振的影响，该拓扑开关管耐压较高，普通 Si 器件无法满足需求。为此，该文研究一种基于碳化硅(silicon carbide，SiC)器件的单管 LC 谐振逆变无线电能传输系统。采用互感等效的方式，给出参数详细设计方法；搭建基于 SiC 器件的单管无线电能传输平台，通过实验比较电路采用 SiC 器件和采用 Si 器件在驱动特性、输出特性、负载特性和效率特性上的不同，验证将 SiC 器件应用于单管逆变无线电能传输电路的可行性。

**关键词：**碳化硅器件；无线电能传输；单管 LC 逆变；零电压开通

**0. 引言**

近年来，随着无线电能传输(wireless power transfer，WPT)技术的不断发展，越来越多的领域采用了无线供电或无线充电的方式。WPT 可以分为 3 种基本形式：感应耦合无线电能传输(inductively coupled power transfer，ICPT)、磁耦合谐振功率传输和微波无线电能传输。目前，ICPT 在实际中得到了较多应用，如电动汽车无线充电、植入式医疗设备、无尾家电、海洋勘探、地下矿山供电等。

ICPT 系统的主电路拓扑多采用全桥电压型逆变电路、半桥 LLC 电压型谐振逆变电路及单管 LC谐振逆变电路。对于全桥逆变电路，该电路方案成熟，但存在电路复杂、成本较高、驱动复杂、可靠性较低、电路存在上下桥臂直通等问题。对于半桥 LLC 谐振电路，它具有许多优点，如高增益、高效率、所有开关均可实现软开关，但上下桥臂也存在直通问题，参数设计相对复杂，成本较高。单管 LC 谐振逆变电路是一种新型的逆变电路，由单个开关管实现逆变，具有可靠性高、成本低、结构简单、可实现开关管的零电压开通等优点，但也存在着一些缺点，当系统装置输入电压为 220VAC/50Hz 交流电时，由于谐振电压较高，运行过程中开关管两端承受的电压高达 1000V以上，普通 MOSFET 无法达到此容量，致使开关管只能选用耐压较高的绝缘栅双极晶体管(insulated gate bipolar transistor，IGBT)，而 IGBT的开关频率大于 25kHz 以后，其损耗会随着开关频率的增加而急剧增大，使系统的效率降低，体积和成本增大，此外按照国家标准，无线电能传输的开关频率需达到 85kHz 以上，IGBT 无法满足要求。

针对以上问题，碳化硅(silicon carbide，SiC)器件的使用为单管电路的高频化提供了可行性。SiC 由于其击穿电场强度高、热稳定性好，同时具有载流子饱和迁移度高、导电性能好、介电常数小等优良特性，使其表现出耐高温、耐高压、高频性能好、开关损耗低等优势。但是目前对 SiC 器件在各种实际应用电路中的驱动特性、负载特性、输出特性、效率等方面取得的应用经验较少。

将 SiC 器件应用于无线电能传输领域，国内外文献相对较少，文献\[11\]对基于SiC 器件的WPT系统进行了结构和参数设计，从输入电压特性、输出负载特性、传输频率特性和系统整体效率等方面进行了仿真研究，但逆变电路采用的全桥逆变，驱动复杂，可靠性低。文献\[12-14\]详细分析了 SiC 器件的温度对驱动电阻的影响，以及提取器件结温的方法，但是并没有研究实际工作时 SiC 和普通Si器件结温对比特性。目前针对SiC器件的研究多采用Pspice仿真手段，通过建立不同模型，来研究不同条件下器件的自身特性。而通过对比实验比较 SiC 器件和 Si 器件的研究并不多。

本文将 SiC 器件应用于单管 LC 谐振电路，采用 SiC 器件代替传统的 Si 器件，有效解决了频率无法提高的问题，此外，单管 LC 谐振电路具有零电压开通的特点，降低了开关损耗，提高系统效率。SiC 器件随频率增高，寄生参数影响增大，驱动桥式电路存在串扰问题，容易造成桥路直通，而驱动单管电路不存在桥路的直通问题，可靠性高。本文首先对电路的补偿网络参数进行详细设计并优化，给出参数的设计方法，分析各阶段工作过程，推导出开关管的电压公式。然后，分别搭建基于 SiC 器件和 Si 器件的单管 LC 谐振 ICPT电路，比较电路的输出特性、负载特性和效率特性，验证将 SiC 器件应用于 WPT 领域的优势。

**1. 单管 LC 谐振逆变电路**

**1.1 单管 LC 谐振逆变电路原理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgdSmian6vlbJAUQBISia66FVicbCXFlibT1nmu3Jx0E4VSbS9bicefiaIzVwg/640?wx_fmt=png&from=appmsg)

所设计的单管 LC 谐振 ICPT 电路原理如图 1所示，该电路由连接到市电的发射电路和连接到负载的接收电路组成，电源为 220VAC/50Hz 的工频交流电，经过工频整流后变为峰值 310V/100Hz 的馒头波，再经过 L1C1 滤波后，经过 Q1、Cp、Lp 组成的逆变谐振但愿进行逆变，通过 Lp 向接收电路发射能量，接收电路由 Ls、Cs、高频整流桥、C2 和负载 Z 组成。

**1.2 主电路的工作过程**

单管 LC 谐振逆变电路采用单个开关管的逆变方式，当开关管开通时，电源给发射线圈 Lp 充电，向接收线圈传递能量；当开关管关断时，线圈 Lp和补偿电容 Cp 谐振，继续向接收线圈传递能量。具体工作波形如图 2 所示，将输入等效成直流源，各阶段工作状态如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGggpgOicOqM6Hcicj0EM2BicGBTFic7ydYia7PrST7b7MnM1a5E0ydyYYtKqw/640?wx_fmt=png&from=appmsg)

图 2 为本电路对应的工作过程波形图，图 3(a)—(g)为本电路的工作过程，共有 7 个阶段，现详细分析如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgQsPjfkfsJUricwYTr576OpiaTzINkMiboCh1aIYZqXJFdzibQcsRPv6QIg/640?wx_fmt=png&from=appmsg)

1）t0—t1 时段：t0 时刻，开关管 Q1 的驱动信号变为高电平，此时发射线圈 Lp 上的电流经过开关管Q1 的反并联二极管 DQ1 进行续流，此时开关管 Q1两端的电压近似为零，原边补偿电容 Cp 两端电压为输入电源电压。当流经发射线圈 Lp 的电流降为零时，即 t1 时刻，开关管 Q1 导通，实现了零电压开通，此时接收端电感 Ls 上的电流方向为负。

2）t1—t2 时段：t1 时刻，开关管 Q1 导通，发射线圈 Lp 上的电流由负变正，此阶段发射线圈 Lp 上的电流线性增加，原边补偿电容 Cp 上的电压被钳位在输入电压。t2 时刻，开关管 Q1 的驱动信号变为低电平，Q1 关断，这一阶段接收线圈电感 Ls 上的电流先负后正。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgZaY6xjkWXymEjmmrE8TlTqXXpmyfmy9uIkFNNsAibwHAjf1z0Sakv9g/640?wx_fmt=png&from=appmsg)

3）t2—t3 时段，t2 时刻，开关管 Q1 关断，漏源极两端电压逐渐增大。此阶段发射线圈 Lp 与原边补偿电容 Cp 开始谐振。一方面，发射线圈 Lp 的电流正向增大，原边补偿电容 Cp 的电压正向减小，到t3 时刻发射线圈 Lp 上电流达到最大。另一方面发射线圈 Lp 向接收线圈 Ls 释放能量，供给负载的需求

4）t3—t4 时段，t3 时刻，原边补偿电容 Cp 的电压降为零，发射线圈 Lp 开始反向给 Cp 充电，电容两端电压反向增加。流过发射线圈 Lp 的电流开始逐渐减小，到 t4 时刻，原边补偿电容 Cp 的电压反向升到最大值，发射线圈 Lp 的电流正向降为零，开关管 Q1 漏源极两端电压达到最大。接收线圈 Ls 电流正向增大到最大值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg7sxliap5QUHROI0mGqN6RVeJUePaibBfxpJbiaqvYt5JllNU1TNna078w/640?wx_fmt=png&from=appmsg)

5）t4—t5 时段，原边补偿电容 Cp 向发射线圈Lp 放电，原边补偿电容 Cp 上的反向电压逐渐减小，发射线圈 Lp 的电流反向增大，t5 时刻发射线圈 Lp上的电流反向增大到最大值，原边补偿电容 Cp 的电压减小到零，此阶段接收线圈 Ls 上的电流逐渐下降到零。

6）t5—t6 时段，发射线圈 Lp 给原边补偿电容Cp 充电，电容两端电压逐渐上升，流过发射线圈Lp 的电流逐渐减小，到 t6 时刻，原边补偿电容 Cp两端电压上升到电源电压，开关管 Q1 漏源极两端电压下降到零。接收线圈 Ls 上的电流反向增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgWuhBPQhFhoicCqfhJlAIB6EichwAPzp5vvVQBDMnZOjSXTXIJIVdnE1Q/640?wx_fmt=png&from=appmsg)

7）t6—t7 时段，发射线圈 Lp 的电流反向减小，原边补偿电容 Cp 的电压保持在电源电压。发射线圈 Lp 上的电流经过开关管 Q1 的反并联二极管进行续流，开关管 Q1 两端电压近似为零，等待 Q1 的驱动信号变为高电平，实现零电压开通。

**2. 主电路参数设计**

**2.1 主电路参数计算**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgFoiajs8eWTq0JKSCNMTYolavgVK5cJSLk1OEibPFWmLOWRVqCTJSWFRQ/640?wx_fmt=png&from=appmsg)

图 4 为单管 LC 谐振电路线圈两端等效模型，该图采用了互感等效的方式，将接收端阻抗等效到发射端，其中：Uin 为发射端线圈与谐振电容上的输入电压；Uocs 为线圈等效到接收端的等效电压源；Zr为反映阻抗，它是接收电路回路阻抗通过互感反映到接收回路的等效阻抗；Lp 与 Ls 分别为发射端线圈电感与接收端线圈电感；rp 和 rs分别为发射端线圈内阻与接收端线圈内阻；Cs 为接收端补偿电容；Cp 为发射端谐振电容；Req 为等效负载电阻。

由图 4 可知接收端等效阻抗 Zs为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg08BC3fyyKT49AHFHALbJibjmfLibbcfGibzCrbozu1j1JzTGqTj0d2oSg/640?wx_fmt=png&from=appmsg)

将接收端电路等效到发射端的映射阻抗 Zr为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgexn70ia7ubc0Sq2q2QCnx15oyia4vuPwhPrzJS9LzYNLGM0tfYsKl9wA/640?wx_fmt=png&from=appmsg)

为了使接收电路完全谐振，Zs 虚部为零时，由式(1)可得 Ls 与 Cs 之间的关系。将接收电路等效到发射电路后，发射电路的模型如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgricpialzx75WgibH87MOiakADNxEVIvDNqqk76YgbaBSd2zMAKy3FKXP7g/640?wx_fmt=png&from=appmsg)

发射电路的总阻抗 Zp 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgCdUb49szf3XKhibGwt7EKFJ5tU7Mvv6unXjvuteFM5BkjN4brFHpLQQ/640?wx_fmt=png&from=appmsg)

由式(3)得到发射电路总阻抗的实部、虚部分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgntLT3enF2xXxxdBBicfZzaXxVicekldQdaZgctJ18ujHqKZPbzX6vHlQ/640?wx_fmt=png&from=appmsg)

为了使主电路中无功环流尽可能低，提高系统效率，应让发射电路处于全补偿状态，总阻抗呈现纯阻性，即虚部为零，可得原边补偿电容 Cp应满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgAuPgFuPq9dbxHHb6zF4mIN1s1JNiaozDCY76xQM7x6EicXo3mSOKIN4w/640?wx_fmt=png&from=appmsg)

根据图 4 列写发射和接收电路的 KVL 方程，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgiab4awIomib4SicYGBlYFquVXxxFDnXgJjSqOyhAJeeK3zHiadDCoPw3eg/640?wx_fmt=png&from=appmsg)

计算参数后画出输出功率和效率与互感的关系曲线，如图 6 所示，随着互感的增大，输出功率先增大后减小，在互感为 7.2μH 时，输出功率最大，此时电路的效率理论值约为 94%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgpyVNIpwVvA6VJz07aBK6OLdvDfJAwlo5dCgInmpocXey5l03HjyvOQ/640?wx_fmt=png&from=appmsg)

**2.2 状态方程分析**

根据图 3 所示的各阶段工作过程及图 4 等效的电路图，可以将工作过程简化为 2 个阶段，按照补偿电容 Cp 两端电压是否为输入电压来进行分类。当开关管驱动信号由低变到高时，发射线圈 Lp 首先经过与开关管并联的二极管续流，当电流降为零时，开关管导通。此时，补偿电容 Cp 上电压为输入电压 Udc，发射线圈电流近似线性上升，此阶段可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgNQrkLSGGTu2Xh4QGm6ibEQTIfK8N73eBibZiaB0Tia1vgCLHrUuET8So6w/640?wx_fmt=png&from=appmsg)

式中：T 为开关管的开关周期；D 为占空比。由于电感电流不会突变，所以，在发射线圈电流为负时，电流通过开关管反并联二极管续流，仍然满足这一阶段状态方程，只是 t 为负值，发射线圈电流为负值。

当开关管关断后，由于补偿电容 Cp 和发射线圈 Lp 存在能量的交换，因此补偿电容两端电压不再为输入电压，电容 Cp 将能量传递给 Lp 与 Zr之后，继续反向充电，直到电流降为零，电容上电压达到反向最大值，此时开关管承受的电压也为最大值，之后电容 Cp向电感 Lp 反向释放能量，电感电流反向增加，电容电压过零后继续上升到输入电压，为简化公式，认为 t0 时为开关管关断时刻，此阶段状态方程可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgQkLCbCWrQykCUpT6Tict6t80LvEHfyt73NyKcQpEE4ic3xW5mdSx5HmQ/640?wx_fmt=png&from=appmsg)

由于此阶段的初值近似为上一阶段的结束值，将 iLp(0)IL1，ucp(0)Udc代入可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgIJQv7salLNfwGNMU3DBDCM6kpIyvnt0OU4KnSNQPlWKPhKgWrhQFzQ/640?wx_fmt=png&from=appmsg)

由式(17)可以看出，开关管的耐压为电源电压加谐振峰值，当电源电压在 220V 工频交流电时，整流后电压 Udc为 310V，再加上补偿电容 Cp 和发射线圈 Lp 谐振产生的高电压，导致开关管耐压达到1000V 甚至更高，而普通的 MOSFET 无法达到高的容量，所以传统的方案采用高容量的 IGBT 实现，但是 IGBT 频率在 25kHz 以上时，开关损耗急剧增大，导致效率降低，按照国家标准，无线电能传输开关频率需达到 85kHz 以上，因此采用可以耐高温、耐高压的 SiC MOSFET 有较大优势。

**3 .SiC 和 Si 器件应用实验及分析**

**3.1 单管 LC 谐振电路实验**

本文采用 SiC MOSFET 应用于单管 LC 谐振电路中，并且接收电路高频整流采用 SiC 二极管进行整流。为了便于与普通 Si 器件进行比较，设计了一个功率为 500W 的实验平台进行验证，其中：输入采用直流母线，电压为 100VDC；输出为 60VDC左右；开关工作频率为 100kHz。单管 LC 谐振电路的具体参数如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg4YcfJY1ZFTFvynlsvjEbN9goHSM3ndico1YEXzVxGhgfzaDSPJwtSeg/640?wx_fmt=png&from=appmsg)

开关管选择型号为 CGE1M120080 的 SiC MOSFET，最大额定电压为 1200V，最大额定电流为 36A；整流二极管选择型号为 SC2065。实验平台如图 7 所示，其中编号 1~9 分别为输入、发射电路、发射线圈、接收线圈、接收电路、负载、功率分析仪、辅助电源、示波器。其中发射线圈加装了1mm 厚的铁氧体屏蔽层。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgLSROSPlSD9xf00xovnyDprY50mk4368oib6OboJUtOiaq43XNpebmic1Q/640?wx_fmt=png&from=appmsg)

单管 LC 谐振电路实现了开关管的零电压开通，如图 8 所示。由图可知，工作频率为 100kHz，开关管耐压为 486V，SiC MOSFET 漏源极电压降为零后，驱动信号变为高电平，实现了零电压开通，并且驱动信号上升时间较短。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgOZhrup2lVj0uRKbVZ4xtHXAqjKoyJBayohmSzeVEtVLZgFH8OlhRHQ/640?wx_fmt=png&from=appmsg)

图 9(a)为发射线圈电流 iLp 和并联补偿电容 Cp上的电压 UCp 波形，图 9(b)为接收线圈电流 iLs 和串联补偿电容 Cs 上的电压 UCs 波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgtynVehiaRib7s0OCDYbkCwgRqiaW40jg9Y1vt1WRE4T1cy3lGLQQwPaPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgx6UyeiaRV1RL9ItIH8Z75a4CbsTnDs59dYS4zj3qbfDLxkFJXxLuaDA/640?wx_fmt=png&from=appmsg)

由图 9 可知，发射线圈和接收线圈电流峰值分别为 23.1A 和 17A。实验波形和图 2 中理论和仿真波形基本一致。

**3.2 SiC 和 Si 器件的选型**

根据第 2 节式(17)计算开关管耐压，选择 2 种开关管器件进行比较，开关管的参数如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgHvJlwI4Id3E18UcwNnGcLEeAb2wCDkb17ibNqdSfrnHjXuYdQYdfnbg/640?wx_fmt=png&from=appmsg)

根据输出电压和电流以及仿真值，分别选择 Si和 SiC 二极管作为接收电路高频整流二极管，参数如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGg23kfWlQy7hDviasdjrwygWPicMeGgat3whMedOGwicyEv86bBdGQIRaJQ/640?wx_fmt=png&from=appmsg)

按照表 2 和 3 给出的型号，分别将 Si 和 SiC 对应的MOSFET和整流二极管应用于单管LC谐振电路进行实验对比。

**3.3 SiC 器件和 Si 器件驱动性能对比**

由于普通 Si MOSFET 容量较低，在 220V 市电的输入情况下无法满足需要，为了方便比较，所以选取电源电压为 100V 直流进行比较分析，两种实验电路均采用表 1 所示参数。驱动芯片选用 IR2110，按照参数手册，驱动电流最大为 2A，MOSFET 的驱动电压采用 0~15V，实验的驱动波形如图 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgjia2KlWP6JnkIC5jStm1NwwpzpcgKm5pRiaGCBCwxRPjoxoQwq9tteFQ/640?wx_fmt=png&from=appmsg)

由图 10(a)可知，普通 Si MOSFET 由于结电容较大，驱动电阻均选取 10Ω 时，在开关管开通的时候，波形上升缓慢，而图 10(b)中 SiC MOSFET 在开通时上升速度快，能够更适合高频的特性。

此外由于电路采用单个开关管实现逆变，不存在桥臂的直通问题，所以不需要考虑 SiC MOSFET的串扰问题，大大简化了驱动电路的设计，并且使电路更加可靠工作。

**3.4 SiC 器件和 Si 器件输出特性和效率对比**

在负载一定(Z\=7.3Ω)的情况下，改变输入电压(Uin)，测得负载两端的电压，得到采用 SiC 器件和Si 器件下单管 LC 谐振电路的输出和输入电压特性曲线如图 11 所示。由图可知，输入电压从 10V 到100V 变化时，单管 LC 谐振电路的输出电压和输入电压近似成正比关系，并且采用 SiC MOSFET 和整流二极管时的输出电压均略高于采用普通 Si 器件，即采用 SiC 器件电压增益要高于 Si 器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgVButVic0HwEa8kYicibZxiaacwFUOTicWlbmClEOakVGs0mLFHZm73YibAug/640?wx_fmt=png&from=appmsg)

保持输入电压为 100V 不变，改变负载的大小，对比两种器件用在单管上的输出电压与负载的特性，如图 12 所示。从图 12 可知，随着电路负载从4Ω 到 10Ω 的范围变化时，采用 SiC 器件电路的输出电压一直高于采用 Si 器件的电路。在靠近额定负载范围变化时，输出电压变化率低，在远离额定负载范围变化时，输出电压变化率高。在额定负载下，输出电压相差 3V 左右，即采用 SiC 器件电路的电压增益相对较高。由于 SiC MOSFET 比 Si MOSFET导通内阻小，导通压降低，损耗小，所以在相同输入电压和负载的情况下，输出的电压要高于采用 Si器件的电路，因此电压增益高。从图 12 中也知，SiC 器件在电路中导通压降低，所以，在相同负载下并且满足相同输出电压的情况下，采用 SiC 器件可以设置更小的耦合系数，即电路可以传输的距离越远。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgy6D2F8p3tqibyqc8nhL7ohJSDtwo3lSWj4Rwz8dBSGEZJiacCr1VNe6g/640?wx_fmt=png&from=appmsg)

普通 Si MOSFET 上 gs 和 ds 两端电压波形如图 13 所示。由图可知，采用普通 Si 器件单管电路仍然可以实现 ZVS，并且开关管 ds 两端最高电压为 474V，然而图 8 中 SiC 器件 ds 两端电压为 486V，比采用 Si 器件高 12V。因此，采用 SiC 器件反映到补偿电容上的电压也高，同时传输到副边的电压大，使得输出电压大，电压增益比采用普通 Si 器件时大，从式(6)也可以得出此结论。在实际中，希望无线电能传输系统的增益尽可能高，所以采用 SiC MOSFET 能够取得更大的输出增益，适合用于 WPT领域。

保持输出负载为 7.3Ω 不变，调节输入电压的幅值，可以得到采用 SiC 器件和 Si 器件下单管 LC谐振电路的效率，如图 14 所示。由图可知，随着输入电压的升高，效率也逐渐增大，但增长率越来越小。输入在 60V 以下时，效率提升速率快，输入60V 以上时，效率提升速率慢。在额定输入电压下，采用 SiC 器件的电路效率达到 90.5%，而采用 Si器件的电路效率为 87.3%，效率大约高 3%。所以在相同负载下，采用 SiC 开关管和整流二极管要比采用普通 Si 器件时电路的整体输出效率高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslE82W8ug8vbUSpWaDdsZGgqAuiaKdmdyAhQMk7MomjOYBp0UqkUrlm5XqvrtZxZVj95yr6WOHFG4w/640?wx_fmt=png&from=appmsg)

由式(9)可知，电路的效率与负载、线圈内阻、互感、角频率有关，还和开关器件的开关损耗有关。在负载、线圈内阻等其他参数都相同的情况下，采用 SiC 和 Si 器件 2 个电路的效率主要由开关管和整流二极管的损耗所决定；由于 SiC MOSFET 的导通内阻小于 Si MOSFET 的导通内阻，并且 SiC 二极管反向恢复时间小于普通 Si 二极管，所以 SiC 器件的开关损耗小。因此在相同的电路参数下，采用 SiC器件时电路效率要高于采用 Si 器件。

**4. 结论**

本文首先研究了单管 LC 谐振无线电能传输电路的参数和工作过程，通过实验比较了 SiC 器件和Si 器件分别应用于单管电路的特性，得出了以下结论：

1）SiC MOSFET 比普通 Si MOSFET 所需驱动电流小，开通时上升时间短，驱动波形质量好。并且单管 LC 谐振电路无开关管的直通问题，所以对SiC MOSFET 的驱动电路的设计比桥式电路简单。

2）在相同的负载和输入电压下，电路采用 SiC器件比 Si 器件输出电压高，增益高，整体效率高。输出特性有较大优势。

3）单管 LC 谐振电路可以实现开关管的零电压开通和接收端整流二极管的零电流关断，提高了效率和可靠性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)