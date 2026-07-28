# EOS-5：Ethernet及其变体接口的ESD防护


> 原文地址: [https://mp.weixin.qq.com/s/wMCXyERhTVx0ykhziv331w](https://mp.weixin.qq.com/s/wMCXyERhTVx0ykhziv331w)

____**____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJ6ibL2cEvRgib6BO3nZ2n8gAJ58OTibQqMQrI8bY9TzZ1Kx8fiakzNNFSmg/640?wx_fmt=png)**____★★★**______EOS-5---以太网______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：以太网被视为CAN或FlexRay网络的通用且灵活的替代选项，用于需要处理更多数据且需要更高数据速率的模块，如摄像头、驾驶辅助系统和骨干网络。

________€1.E____thernet____  

以太网的ESD保护通常可以通过两种方式实现，对GND保护可以放置在接口的MAC/PHY侧，或者线对线保护可以添加到连接器侧。为了实现最佳保护，设计可以同时实现这两种方案，**_图5-1_**显示了一个使用两对的100Mbit接口，可以为Gbit以太网创建类似的解决方案，使用四对。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiazhs8sbhH2BDyeYlKOvEvdHIA7rfeQQicaPibsRAXic7PLUlHVFe2hZrfQ/640?wx_fmt=png)

**_图5-1：10/100 ESD保护，MAC侧接地保护，连接器侧共模保护_**

以太网应用需要4个通道的ESD保护，用于连接器中的TX/RX信号线，这些信号的电压范围从1V到2.5V，带宽选项包括10Mbps、100Mbps（用于快速以太网）和1Gbps（用于千兆以太网），在这些速度下，应考虑ESD二极管的电容。

单向ESD保护装置推荐用于以太网应用，因为它们在负方向上提供卓越的保护，电容也需要考虑，尤其是千兆以太网（建议小于5pF），Ethernet推荐**_表5-1_**参数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiarKSycialBtx0y84jbHnDdoFzjqJXiaiaklVXyFrWjKRxwVhwicblOFef7g/640?wx_fmt=png&from=appmsg)

**_表5-1：Ethernet的ESD/TVS diode选型参数参考_**

____€2.100BASE-T1 and 1000BASE-T2____  

汽车以太网IEEE 100/1000BASE-T1 (IEEE 802.3bw)可通过单一非屏蔽双绞线电缆分别提供100或1000Mbit/s的传输和接收能力。标准基础由Broadcom(BroadR-Reach™)开发，并由IEEE 802.3工作组完善，所以BroadR-Reach是一个相对较新的以太网标准，主要针对汽车应用，与标准以太网规范相比，该标准的主要优点之一是不需要变压器。汽车以太网的部署由开放（单对以太网）技术联盟SIG（特别兴趣小组）负责推动。目前有几种发展方向，一是拥有汽车千兆级以太网，以覆盖2.5/5.0/10Gbps范围内的高数据速率以太网，另一个是在10Mbps范围内使用低成本以太网拓扑，即10BASE-T1S。典型的应用是汽车内信息娱乐或ADAS系统的高速接口，**_图5-2_**显示了一种典型单通道的ESD保护结构，可用于100Mbit BroadR接口。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiaAM2S8YsoI0GAYUQakScnyPuibH9udfMYR7iaG5NzrAiavPq6FJQUC7heQ/640?wx_fmt=png)

**_图5-2：100/1000BASE-T1的ESD防护拓扑1_**

由于10Base-T1S和100/1000Base-T1系统的拓扑结构具有UTP电缆和必不可少的共模扼流圈(CMC)，因此ESD器件的触发电压指定为高于100V，所以强烈建议将ESD保护器件靠近连接器放置（在连接器端提供保护的产品组合，符合开放技术联盟标准，而PHY端是较为传统的方法）。如**_图5-3_**所示，这样一来，ESD事件的能量将立即导向地面，不仅PHY、CMC、电阻和电容器等无源组件也能得到保护。在这个暴露的位置，ESD二极管必须能够承受汽车布线的恶劣环境，如高能量共模噪声或电池短路引起的过电压。ESD保护器件设计用于大于或等于100V的触发电压，除了满足IEC61000-4-2level 4标准之外，它们还必须耐受最少1000次放电，为保证信号完整性，低寄生电容必须小于3.5pF。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiaWmUp7DTAdlUeR28AcssAz00sfgDiaiaJJgKDaRELyaRnYFaeb2E38m8A/640?wx_fmt=png)

**_图5-3：100/1000BASE-T1的ESD防护拓扑2_**

对于100/1000BASE-T1，靠近连接器端推荐参考**_表5-2_**参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiaXVnBDzQpB3tE78F7z1iaurpxxkgU68uPZONGD811In1sibXKjwCOKHUQ/640?wx_fmt=png&from=appmsg)

**_表5-2：100/1000BASE靠近连接器端的ESD/TVS diode选型参数参考_**

对于100/1000BASE-T1，靠近PHY端推荐参考**_表5-3_**参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiaMdDEZEm6v9flstdrJkiaj2ybXbtqBEZQzvYaAjBNwPia5EP5FPNZRYtA/640?wx_fmt=png&from=appmsg)

**_**_表5-3：**_100/1000BASE靠近_PHY端的**ESD/TVS diode选型参数参考_**_**

____€3.FlexRay____

FlexRay使用差分信号BP和BM，运行速度高达每通道10Mbit/s，除了单通道运行（如LIN和CAN），还可以作为双通道系统运行，以便在冗余网络中使用数据。与基于CAN和LIN协议的网络相比，FlexRay系统的更高容错和更高传输速率导致系统成本更高。对于ESD保护二极管，通常需要小于20pF的低二极管电容。**_图5-4_**显示了通过共模扼流圈，使用双RT/2的差分端接以及总线的双向ESD保护进行耦合的FlexRay收发器，保护两条汽车FlexRay数据线免受ESD和其他瞬态造成的损坏，支持10Mbit/s的FlexRay数据速率，并为8/20us的脉冲提供每条线路高达200W的浪涌能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiaf0SyCLXdOTrQ9FKW5W9e9rNYZWg2lgcxLdASJaO7UnLoZeGoRUydkg/640?wx_fmt=png)

**_图5-4：flexRay的ESD防护拓扑_**

对于flexRay，靠近PHY端推荐参考**_表5-4_**参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRmbpH9gt91zicUOGb0Be0fiaUIOFcSo0pA9vprrMpkp32wCdTUTFLSfo4t0nUDW8ZBswhfNWSMia2Og/640?wx_fmt=png&from=appmsg)

**_表5-4：flexRay**_的ESD/TVS diode选型参数参考_**_**