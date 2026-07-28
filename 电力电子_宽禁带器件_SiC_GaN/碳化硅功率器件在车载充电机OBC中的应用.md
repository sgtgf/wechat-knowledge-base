# 碳化硅功率器件在车载充电机OBC中的应用


> 原文地址: [https://mp.weixin.qq.com/s/Ie8KgtaWpaFS9xvNB\_IYAQ](https://mp.weixin.qq.com/s/Ie8KgtaWpaFS9xvNB_IYAQ)

**一、车载充电机(OBC)**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

车载充电机是任何一辆新能源汽车必须配置的功能。车载充电机（On-Board Charger，简称为OBC）的基本功能是：电网电压经由地面交流充电桩、交流充电口，连接至车载充电机，给车载动力电池进行慢速充电。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/AhqAoEacibkYfYezS2agibeECwfXwmNpHr95N5Rao3jHCBUDgKUnh9jn47toib5ibiaFTyGQav20O6V15Dy6J3nvyrA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

图1：电动汽车充电方式

  

电动汽车充电可分为交流充电与直流充电两种，交流充电“慢充”是交流充电桩将电网中的单相交流电220V或三相交流电380V供给安装在车辆内部的车载充电机，由其将交流电转换为直流电为动力电池充电。

而直流充电“快充”是利用外部的“直流充电桩”直接为动力电池充电，不需要使用车载充电机。

与直流充电桩建设成本高、占地面积大且需要配备大型变压器满足配电需求相比，交流充电桩有建设成本低、占地面积小且对配电要求较低的优势，所以使用场景更为广泛，更适合私家场合使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskLSPXxRcnJZNdRvdw2rcZpVRot9wyDLDmmVict08FoCSVpcb6aEKJ8BLv6kYqHQia5NkLjWficRoSEw/640?wx_fmt=png)

正因为如此，几乎每台电动汽车乘用车都需配备一台车载充电机，以满足大众广泛的交流充电需求。

在目前电动汽车400V、600V电压平台的架构下，车载充电机的输出功率多为3.3kW和6.6kW，而为了满足800V架构下的充电需求，11kW、22kW的车载充电机已被研发生产并将在未来成为主流功率。

为了实现电动汽车快速双向充电，充电桩、电池和OBC都进行了技术改进。充电桩向着大功率、高电压、双向、宽范围等特点快速发展；电池朝着高电压（400V→800V）、大功率等需求升级；同时车载充电机在大功率、新功能、多合一及新材料等方面也取得了很大的进步，正在朝着双向充放电、智能化、集成化等方向发展。目前车载充电机（OBC）主要有以下几种方式，如表1：  

  

![](https://mmbiz.qpic.cn/mmbiz_png/AhqAoEacibkYfYezS2agibeECwfXwmNpHr6tIoicJs2Cicpokc2Yh2b0D6KB0Itjib2EcU51catQPhzGQncguVxegFQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

从功率上来看，目前3.3kW和6.6 kW产品是主流。在输出电压上，弗迪动力、威迈斯等公司的OBC产品已经逐步配套800V整车了。另外随着企业的竞争越演越烈，国内已经在OBC上导入SiC功率器件，比如威迈斯、英搏尔、欣锐科技等公司均发布了基于碳化硅的OBC产品方案。

  

**二、车载充电机(OBC)电路结构**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

车载充电机（OBC）一般采用两级架构（如图2），前级PFC主要负责功率因数校正，一般输出400V直流电。后级DC/DC电路从PFC母线取电，实现隔离和调压功能。由于DC/DC所接负载为电池，一般输出200-500V的高压直流电，故后级必须采用高效率宽范围的隔离DC/DC拓扑结构。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHribHmiaMP0mb2ty4tpVLHPcWfiboLeXIZnchsiaicoH3hny0pDTlK15cClDg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2：两级OBC拓扑结构

  

  

**2.1**

  **一级PFC电路**   

  

PFC电路中较为常见的拓扑是Boost升压拓扑，分为传统有桥Boost PFC、交错并联Boost PFC、无桥Boost PFC、双无桥Boost PFC、图腾柱Boost PFC等。

**（1）传统有桥Boost PFC（如图3）：**当Q1导通时，正半周期导通路径为D1、L1、Q1、D4，负半周期导通路径为D2、L1、Q1、D3；当Q1关断时，正半周期导通路径为D1、L1、D5、Rd、D4，负半周期导通路径为D2、L1、D5、Rd、D3。在每个状态下，导通开关器件的数量均为3个，其优势在于电路拓扑好控制都很简单，但是仅存在一个Q1开关器件，其电压、电流应力非常大，很难用于大功率场合。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHrCicvQpia6ltNic4cngNoDsUuZEbibvcgcsic4QaPwPXTiav5GjmsCFtT8ADg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图3：传统有桥Boost PFC

  

**（2）交错并联Boost PFC（如图4）：**由两个相同的Boost PFC变换器并联而成，该拓扑电路可以使得PFC的电感减少。通过控制两个功率电感电流交错180°反相，可降低输入输出的电流纹波，减少EMI滤波器的体积。该拓扑在其他控制和功率走路方向和传统的有桥一样，只是增加了开关器件数量。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHrPG2bTuZELtfSV4VFK94olA5dRufQvvEuGVKhV9MezkhsPdfibQPD3UA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图4：交错并联Boost PFC

  

**（3）无桥Boost PFC（如图5）：**将有桥PFC的整流桥移除，减少了开关器件的数量。正半周工作，当Q1关断时，功率链路为L1、D1、Rd、Q2、L2；当Q1开通时，功率链路为L1、Q1、Q2、L2。负半周工作，当Q2关断时，功率链路为L2、D2、Rd、Q1、L1；Q2开通时，功率链路为L2、Q2、Q1、L1。与传统的有桥PFC相比，导通路径上的开关器件减少了，这有利于提升系统的效率。对自带反并联二极管的开关器件来说，Q1Q2可以共用一个驱动信号。该拓扑结构控制简单，但是电流采样困难。且输出的直流电压的端点是浮地的，产生的共模干扰会被隔离，所以电路中会有很严重的EMI问题。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHriajwe4icJjQ99QPpVNqa90K1kyHlmqKcA1ic7J4s6HclwJCNNCD7urlEg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图5：无桥Boost PFC

**（4）双无桥Boost PFC（如图6）：**相较无桥PFC电路，双无桥PFC在EMI方面进行了改善。正半周工作，当Q1关断时，功率链路为L1、D1、Rd、D4；Q1开通时，功率链路为L1、Q1、D4。负半周工作，当Q2关断时，功率链路为L2、D2、Rd、D3；Q2开通时，功率链路为L2、Q2、D3。其控制方式和基本的无桥PFC类似。增加的二极管大大降低了电路的干扰，但是系统成本增加了。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHriaERSElmaBdjnMmK0Tj1d3oJOicuib3icmzEqmIRsTQicQzUOW6mUdEJZvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图6：双无桥Boost PFC

  

**（5）图腾柱Boost PFC（如图7）：**可以解决无桥PFC的EMI问题。正半周工作，当Q1关断，Q2导通时，功率链路为L、Q2、D2；Q2关断，Q1导通时，功率链路为L、Q1、Rd、D2。负半周工作，当Q1关断，Q2导通时，功率链路为D1、Rd、Q2、L；当Q1导通，Q2关断时，功率链路为D1、Q1、L。该拓朴控制复杂，上管的驱动需要浮地，设计难度大，成本增加，而且Q1Q2存在反向恢复问题，容易增加电路损耗。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHrDFOf2ocanVHrRSJia8JibP9UKRw6YpNVibagu6IVIialTZcGotiaK8vBaRw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图7：图腾柱Boost PFC

  

**2.2**

  **二级回路DC/DC**   

  

DC/DC变换器的电路拓扑类型主要有Buck、Boost、Buck-Boost、移相全桥、谐振变换器等电路拓扑，而隔离型DC/DC变换器在功率等级、电气安全等方面更适合OBC的应用需求。常见的隔离性DC/DC变换器拓扑结构主要有移相全桥、双有源桥电路、LLC谐振电路等。

**(1)移相全桥电路（如图8）：**可以实现最低零电压的宽范围电压输出，其超前臂Q1Q3的驱动信号有着180°的相位差，滞后臂Q2Q4的驱动信号分别与Q1Q3滞后一定相位，控制驱动信号之间的相位角不同，可以使得变压器漏感和开关管结电容进行谐振，开关管的软开关得以实现。缺点是由于变压器漏感的存在，副边会出现占空比丢失现象，副边二极管容易出现电压尖峰；另外该拓扑的输出需要的LC滤波器会造成电路体积增大，同时会导致损耗增加。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHroswB5ncNd8fdpxDbTRha5XHGSu3hGbMwQ9RMe4b3ETDiaVBdYzhia4gg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图8：移相全桥电路

  

**(2)双有源桥电路（如图9）：**通过原副边移相来控制能量的流动方向和大小，可以实现零电压开通，经常应用于大功率场合的双向DC/DC变换器，该拓扑电路功率密度高、效率高、能双向传输功率，被广泛应用于电动汽车、航天航空等领域。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHr2eAic0lxkLa1ib8YCgVARcKDaGcgChCaW9egBR3KKxzzKf4J3Lo9QjZg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图9：双有桥电路

  

**(3)LLC谐振电路(如图10)：**可以实现软开关，且可以在较窄的频率范围内实现较大的调压范围。具有良好的切载特性，加上变压器的漏感可以复用为励磁电感，所以磁元件的空间小，可以提高变换器的功率密度，效率高及EMI小。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHrZvazhZiaNIQSsZ9MjibXouM9zl7TfDnMM2Enbp7oxS1oLMVIGrxKuoyw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图10：LLC谐振电路

  

  

**三、车载充电机的漏电保护要求**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

为实现复杂的充放电需求，OBC的电路拓扑愈发复杂。这一方面增加了漏电故障的可能性，一方面也使漏电流波形成分更加复杂。传统的AC/A型漏电流保护器只能检测交流和脉动直流漏电，无法对OBC产生的复杂电流进行全方位保护，比如直流分量。故必须采用B型漏电流保护器来检测车载充电机充电过程中产生的电流。B型保护器不仅能识别到正弦交流信号，还能对脉动直流信号和平滑信号起到保护，是电动汽车、车载充电机、充电桩的最佳安全保护装置。

从QC/T 895-2011《电动汽车用传导式车载电动机》标准引导电路图可知：供电设备内安装的漏电流保护器对整个系统充电起到关键作用，不可轻视。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/AhqAoEacibkYfYezS2agibeECwfXwmNpHria6Ks9F3NcDtA4icRlolewXuicRCJOeBRBJHAtMQpZ2nialRzhKsktZvVQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图11：车载充电机输入控制导引电路图

**四.碳化硅器件在车载充电机应用**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

在单相交流输入的OBC应用中，DC/DC的前段需要使用开关管将直流电压逆变成交流电压。  

由于PFC输出的直流电压在400V以下，且系统功率不超过6.6kW，选择650V、20A的开关管即可。

在650V 20A的档位的开关管中，CoolMOSTM导通电阻和输入电容QC在硅基产品中处于领先地位。

650V碳化硅MOSFET跟650V CoolMOSTM相比，虽然其导通电阻和输入电容都有一定的优势。

但价格要比同规格CoolMOSTM高3倍，实际应用中CoolMOSTM在此市场中占据着主导地位。

缩短充电时间和提升动力电池电压是新能源汽车发展的两个主要课题。

对于车载充电而言，单相OBC受交流电进线电流限制，功率最大只能做到6.6kW。

采用三相输入的模式可以将目前6.6kW的功率提升到11kW，大幅提升充电速度，电池电压提升对于OBC技术的发展具有重要意义。

输入电压由单相220V AC变成三相380V AC后，PFC电输出级的电压会相应提高到550V左右。  

如果采用两电平拓扑结构，650V的CoolMOSTM已经无法满足要求，需要选用900V/1200V的开关管器件。

电池电压的提升，意味着OBC后级输出电压升高，配合目前OBC从单向到双向的发展趋势。

DC/DC次级器件会从目前的650V二极管转变成900V/1200V的开关管。

900V及以上规格CoolMOSTM产品成本较高，性能上与碳化硅MOSFET的差距比650V的器件更大。

因此900V/1200V碳化硅MOSFET在三相11kW OBC中有着广阔的应用前景。

各车载电源厂家已经陆续开始开发三相11kW OBC，首选方案均考虑使用碳化硅MOSFET作为DC/DC输入级开关管。

可以预见，未来三相11kW OBC将会成为碳化硅MOSFET的主要应用场景之一。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskLSPXxRcnJZNdRvdw2rcZpGaZ3kGnTeuZvdXPYQZZLPwVlculHqgG931MrmibsDV2hEH09YicbDIww/640?wx_fmt=jpeg)

                                                                   双向OBC拓扑简图

结合新能源汽车行业的发展趋势和碳化硅功率器件的特点，碳化硅二极管和MOSFET已经在OBC应用中占据一定市场份额。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIxvqgWQKCZkRqGVz64ficVeSU08bjrGD8tfqRgeXySqvkQ9qYPX6JBZ6uog6gV2hpczM9iayo0icsA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIxvqgWQKCZkRqGVz64ficVScHI0p5O0vWJDL7yMydRZ125WRrZ1x1SibvtcCIALN0FPp9gyMQ3O8g/640?wx_fmt=png)

       爱仕特SiC MOS具有更快速开关响应、更低损耗的特性，完全满足车载充电机对高效率、高功率密度、高可靠性的要求，有利于加快光伏产业发展，助力双碳目标的实现。随着新能源替代加速，逆变器向高效率、高功率密度、高可靠性等方向发展，具备高功率、耐高压、 耐高温、高频和低能耗等优点的SiC功率器件将迎来发展新机遇 。爱仕特在自建晶圆厂，将推出更多优质产品和服务，携手上下游产业，加速能源结构转型和碳中和进程。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIxvqgWQKCZkRqGVz64ficVLL6QPUmBrg5H6rzH5O9KUriagkmbMT7sJibtJyu9O6A0WRdGlEvAWrcA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

                    ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmV54c2lq2hbhZtUN0dmE0LibFiaMgJETn8KwGPQOhHEnhH3XubpQC4DtguickGdD5DNYcR9t1yljb0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)