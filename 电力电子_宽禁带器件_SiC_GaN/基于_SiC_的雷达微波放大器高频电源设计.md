# 基于 SiC 的雷达微波放大器高频电源设计


> 原文地址: [https://mp.weixin.qq.com/s/Gv67irpEzRr6mzrZQcztkg](https://mp.weixin.qq.com/s/Gv67irpEzRr6mzrZQcztkg)

**文章来源：**舰船电子工程

**作者：**李 楠（中航工业雷华电子技术研究所 无锡 214100）

**摘 要 ：**论文介绍了一种利用3.3 kV碳化硅（SiC）MOSFET和肖特基二极管实现22 Vdc至2.5 kVdc宽电压的1 kW电源方案。电源为舰船雷达诱饵中的固态微波功率放大器提供能量。高压碳化硅半导体用于在高频下切换高电压，且不需要串联转换器。为了消除开关损耗和最小化噪声，采用半桥零电压开关ZVS拓扑。还给出隔离栅极驱动和2.5 kV启动的注入解决方案。经过器件特性分析、电路设计封装和台式实验，证明高压SiC-MOSFET和肖特基二极管的组合是该应用中实现高频、高功率密度转换的有效技术。

**关键词 ：**碳化硅场效应管；微波功率放大器；高频电源

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hKxg14e3s91Ow9htsoBYfKgwiacPLuQJG3iaJT2FEKGJFiczljMgMXfJZQ/640?wx_fmt=png&from=appmsg)

**1. 引言**

舰船雷达诱饵用于通过在诱饵上发射微波功率放大器（MPA）放大的雷达信号来击败导弹威胁。电力通过高压（2.5 kVdc）从牵引线传输到雷达诱饵，而待放大的信号则通过光纤电缆传输。目前的雷达诱饵使用行波管放大器。行波管放大器的优点包括高线性、分布式发热和技术成熟。宽带隙半导体（即碳化硅和氮化镓）射频（RF）晶体管的最新进展使固态 MPA 具有更高的带宽、可靠性和潜在的更低成本。固态 MPA 在低电压（小于100 V）和kW范围内的典型功率输出下工作。

为了提供改造解决方案，需要电源将牵引线的2.5 kV转换为MPA的几十伏。这种固态MPA代表了本文所述电源的主要负载。向MPA提供信号输入的光接收器和前置放大器也需要偏置功率。此外，由于RF晶体管的特性，必须对电源输出进行适当排序，以确保在主电源之前存在控制电源。对于这种特定的雷达诱饵，电源体积近似为圆柱形，热量只能从圆柱形表面消散；因此需要高功率密度和高效率的电源。最后，由于接地配置，诱饵外壳和输入线之间存在最大4.6 kVdc。

用于开关应用的 SiC MOSFET 和 SiC 肖特基二极管被证明是该应用中的使能技术。与高压硅（Si）器件相比，SiC 器件具有以下几个优点：高击穿电压、显著降低的 Rds（导通）、更快的开关和高温操作。材料特性的一个结果是，大多数载流子器件MOSFET 和肖特基二极管在 Si 中实际上是不可行的或具有非常差的性能，它们在SiC中是实用的，并且能够利用高压和高频开关实现紧凑的功率转换。

高电压多数载流子 SiC 器件能够使用为低电压硅 MOSFET 开发的成熟电源拓扑。器件的特殊特性决定了设计优化，在这种应用中，设计优化与常见的基于硅 MOSFET 的电源中的设计优化截然不同。尽管 SiC器件简化了功率拓扑结构本身，但必须解决电路上的挑战，以实现以非常高的开关速度直接切换高电压的完整电源。

本文介绍了 SiC 器件的特性、电源拓扑选择、电路设计和高压考虑因素，以及雷达诱饵电源的实验结果。

**2 .碳化硅器件特性**

**2.1 静态特性**

雷达诱饵电源的高压部分使用了原型 3.3 kV SiC MOSFET 和来自 ASTSIC 的联合封装反并联3.3 kV结\-载波肖特基二极管。这些器件被表征为获得静态I-V特性、与能量相关的输出电容以及用于导通和关断的开关能量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hdSMpmdc9qD3aia3p7dK8XwQIxIxA0libFC51WfqEviaZHJ06RcK15NuOw/640?wx_fmt=png&from=appmsg)

在室温和 125 ℃下测得的静态 I-V特性如图 1所示。如图所示，通过将栅极电压从 15 V 增加到20 V，导通状态电阻显著降低。因此，与可能需要最大 15 V 的栅极驱动的标准 Si-MOSFET 不同，对于最小Rds（导通），建议高达20 V的栅极驱动。还建议关闭状态电压的负电压不要超过\-5 V。

**2.2 动态特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hFyXCwBAiaIic83yrn1e2iaiaKyECXkAsbNNytnw2lDGYux3sJLndqhH8qg/640?wx_fmt=png&from=appmsg)

使用标准箝位电感双脉冲测试来提取动态开关损耗与漏极电流的关系。特征设置和典型波形如图 2 所示。两个不同宽度的栅极脉冲用于在不同的漏极电流下切换器件。当被测器件（DUT）关闭时，共封装器件的内部JBS二极管用于续流电感器电流。电源电压设置为2.5kVdc，脉冲宽度增加，以实现高达1.7A的开关电流。使用的开/关状态栅极电压为 Vgs=+18V/-4.7V，开和关栅极电阻分别为Rg.on=10Ω和Rg.off=5Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hAguVOlHMw58zX0zC1UEpoX56daoCn1GnyWbciagIAnpcZDMu9cqyQ8Q/640?wx_fmt=png&from=appmsg)

接通和关断能量曲线拟合，MOSFET和二极管的能量相关输出电容（Coss+Cd）如表1所示。应注意的是，电感器、上二极管和 MOSFET 的能量相关集总电容以及任何寄生板电容估计为 150 pF。显然，该电容非常高，因此在曲线拟合时必须考虑到这一点。对于100 kHz、2 A和2.5 kVdc的硬开关操作，每个设备的开关损耗将为 41 W。尽管这比硅器件的预期要低得多，但它仍然是 1 kW 电源损耗的重要组成部分。与这个数字相比，在桥式拓扑结构中，每个SiC器件在2 A和100 kHz时的导通损耗（50%时间导通）为1.2 W。导通损耗和开关损耗之间的差异有利于转换器拓扑结构，该拓扑结构在所有条件下都能保证零电压开关，即使在均方根电流增加方面会有损失。

**3. 基于SiC的高频电源设计**

**3.1 电源拓扑设计**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hPNQs3OIboPyibdDc9JbVk2oOuYFRoVkhk24fRTib43jgKCicVJkg2iaUbA/640?wx_fmt=png&from=appmsg)

级联方法的简化示意图如图 3 所示。

电源电线的阻抗约为 100 Ω。半桥由 3.3 kV SiC MOSFET和肖特基二极管组成。两个高压陶瓷电容器分开2.5 kVdc电源，开关在变压器初级上施加+/-1.25 kV、100 kHz的方波。高频变压器由机械加工的铁氧体磁芯制成，具有设计的低磁化电感。通过高磁化电流确保高电压 MOSFET 的零电压开关（ZVS）一直到无负载。这消除了开关损耗，并最大限度地减少了噪音，如果将噪音耦合到附近的控制电路中，可能会导致转换器故障。请注意，与 90 pF的半桥输出电容相比，变压器还具有非常高的绕组内电容\-200 pF。在没有 ZVS 的情况下，由于变压器绕组内电容引起的损失将是由于 MOSFET 电容引起的损耗的两倍。ZVS 是以适度增加的传导损耗为代 价 的 ，因 为 SiC MOSFET 表 现 出 低 的 Rds（导通）。变压器输出上的中心抽头整流器对方波进行整流，并创建到低压电流调节级的中间未调节直流链路输入。第二状态降压转换器工作在 125 kHz。平均电流模式控制用于提供47 A的电流限制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4h8l5k7aNj4sL1qytD9ljiaauDVHu2hcKjiafunBRmiaYMR9fXDvZWfn4TQ/640?wx_fmt=png&from=appmsg)

转换器的辅助输出包括：1）光接收机功率和MPA 前置放大器功率；2）用于固态 MPA 的栅极电源。这些输出通过多绕组自耦变压器与主高压降压变压器级联产生，然后是整流器和后调节。线性调节器用于 1），而双向栅极驱动器电源 2）使用功率运算放大器产生。

**3.2 栅极驱动设计**

SiC半桥的栅极驱动是该转换器中需要高绝缘性和 dV/dt抗扰度的关键部件。根据 Rds（开）和关断时间的噪声裕度要求，栅极驱动电压选择为（+17 V/-3.3 V）。采用集成芯片生成互补 PWM 信号。隔离栅极驱动是通过双线绕线脉冲变压器实现的，该变压器将功率和栅极信号一起传输。在栅极驱动侧，整流器产生双电源，PWM信号由高电流栅极驱动IC缓冲，如图3的简化电路所示。

**3.3 启动电路设计**

简化的栅极驱动电路由于稳态功耗和空间的限制，不能使用利用电阻分压器或高压FET的标准启动电路。相反，使用了图5所示的方法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hISBBJPRh0nFMuAiacQsRM1LvDEAoOrNkic7Mh5WibJ1yR0RvcqATawRgw/640?wx_fmt=png&from=appmsg)

高压电阻网络用于从2.5 kVdc汲取400 μA，以将大容量电容器充电至由齐纳二极管 D1 确定的阈值电压（间隔 I）。在间隔 II 开始时，D1 导通，使得以 PNPN 配置（类似于晶闸管）布置的Q1和Q2开始导通，并且即使在D1停止供应电流时也继续导通。这类似于晶闸管的锁存操作。Q3通过 Q1和 Q2的锁存导通而导通，并且功率被施加到控制电路，开始半桥转换器的软启动。大容量电容器中存储有足够的能量，以确保控制和栅极驱动电路中每个点的电压高于 UVLO 极限，直到间隔 III，主变压器上的辅助绕组开始为半桥提供控制和栅极功率。该电路的一个特点是必须循环关闭2.5kVdc以重置启动电路。

**4 .实验结果与分析**

表2总结了电源主要组成部分的详细情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4heh7s0bc52VveJK7HHA6QicBibJ67OKG6leKmqEM1ict07tTgDRdGR5FLg/640?wx_fmt=png&from=appmsg)

整个电源的台式测试，以验证电气设计。主变压器采用道康宁 3-6753 封装，以纳入因密封剂引起的绕组内电容变化。将整个高压部分浸入 25#变压器油中。供应仅操作短时间，以防止温度超过25#变压器油的闪点，从而降低流体的介电强度。电源的工作波形如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hyHX9sicvdXfKzwwBvDBcZLiccLXO4NDGEe1WVomIribq2gSUjVNGHGMUg/640?wx_fmt=png&from=appmsg)

图 6（a）显示了满载情况（Vin\=2.46 kV，Vo\=22 V，Po\=1.1 kW），而图 6（b）显示了低负载情况。如图所示，ZVS 是在高负载和低负载下实现的。系统效率与负载的关系如图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hqWHxAHPgl7mJl51gDeVDGKUHgzWjGgLxichB6cZ8Tmibxib5jnXKD1awQ/640?wx_fmt=png&from=appmsg)

该测量包括 SiC不调节转换器、低压调节降压转换器和用于测序的串联低压硅 MOSFET。降压转换器和半桥级独立测量的效率和损耗（不考虑控制功率）如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBw57fcc6ic1wLPUsSwOj4hQLPpLMicNw9jvTRV6AlsjQbxvd9QBibryyNpubtJAZ8q4yvbFtRe456A/640?wx_fmt=png&from=appmsg)

如图所示，半桥级的峰值效率大于97%，这主要是由于 SiC MOSFET 特性和 ZVS。整个转换器的整体效率受到第一转换级中的高电流整流器和低电压高电流Si降压转换器的限制。

**5. 结语**

实验验证了使用 3.3 kV SiC 器件的 22 V 至2.5 kV、1 kW DC-DC 电源。3.3 kV SiC MOSFET 和JBS 二极管是这一高压和高频转换开发的关键推动者，其主要优点是低 Rds（导通）和快速过渡时间。对于高电压（kV）的直接快速开关（100 ns 转换），利用零电压开关拓扑结构来避免 EMI并降低损耗。高频电源最高可达97%的转换效率。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)