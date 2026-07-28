# 以太网PHY、MAC及其通信接口入门

原创 硬件笔记本 2024-01-15 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/xXdRUK6BsejeNqOn0ZWUCg](https://mp.weixin.qq.com/s/xXdRUK6BsejeNqOn0ZWUCg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

本文主要介绍以太网的 MAC 和 PHY，以及之间的 MII（Media Independent Interface ，媒体独立接口）和 MII 的各种衍生版本——GMII、SGMII、RMII、RGMII等。

## 简介

从硬件的角度看，以太网接口电路主要由MAC（Media Access Control）控制器和物理层接口PHY（Physical Layer，PHY）两大部分构成。如下图所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlfLonTPc8DveUTUNiav5kVGBIPKxmPCSAO0iaOT2dYLSRsFB7QCD4nAXg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

DMA控制器通常属于CPU的一部分，用虚线放在这里是为了表示DMA控制器可能会参与到网口数据传输中。但是，在实际的设计中，以上三部分并不一定独立分开的。由于，PHY整合了大量模拟硬件，而MAC是典型的全数字器件。

考虑到芯片面积及模拟/数字混合架构的原因，通常，将MAC集成进微控制器而将PHY留在片外。更灵活、密度更高的芯片技术已经可以实现MAC和PHY的单芯片整合。

可分为下列几种类型:

-   CPU集成MAC与PHY。目前来说并不多见
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlO1033yXLHibdtiaRkXexDDRwndbpkicia3JDTWGzgIPbj74HcVbnheCD2g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   CPU集成MAC，PHY采用独立芯片。比较常见
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlVY2ZJNLCopPRzQjianRfiagiaZe3DaowXleJicNl9qoqsxA2JhpJPnKrGg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   CPU不集成MAC与PHY，MAC与PHY采用集成芯片。比较常见
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUl4ia2se9p2QGpohK9BpwB0WJPApKfJCn5Dd5EuKLLfnzPibQ64nYg1hUA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

MAC及PHY工作在OSI七层模型的数据链路层和物理层。具体如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUljdhFibIfRTdOjclZhtiau6P19O3aMZ51Ddr1h4Z5ZpJLEHepBI9ibvLAg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

## 什么是MAC

MAC（Media Access Control）即媒体访问控制子层协议。

该部分有两个概念：MAC可以是一个硬件控制器 及 MAC通信以协议。该协议位于OSI七层协议中数据链路层的下半部分，主要负责控制与连接物理层的物理介质。MAC硬件大约就是下面的样子了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUluN3M2EiaPL4JDSrZO7c8QUic8FryWicZD5X3Is7UP31sGRbPw79hWYJew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

在发送数据的时候，MAC协议可以事先判断是否可以发送数据，如果可以发送将给数据加上一些控制信息，最终将数据以及控制信息以规定的格式发送到物理层。

在接收数据的时候，MAC协议首先判断输入的信息并是否发生传输错误，如果没有错误，则去掉控制信息发送至LLC(逻辑链路控制)层。该层协议是以太网MAC由IEEE-802. 3以太网标准定义。

以太网数据链路层其实包含MAC(介质访问控制)子层和LLC(逻辑链路控制)子层。一块以太网卡MAC芯片的作用不但要实现MAC子层和LLC子层的功能，还要提供符合规范的PCI界面以实现和主机的数据交换。

MAC从PCI总线收到IP数据包(或者其他网络层协议的数据包)后，将之拆分并重新打包成最大1518Byte、最小64Byte的帧。

这个帧里面包括了目标MAC地址、自己的源MAC地址和数据包里面的协议类型(比如IP数据包的类型用80表示，最后还有一个DWORD(4Byte)的CRC码。

可是目标的MAC地址是哪里来的呢？

这牵扯到一个ARP协议(介乎于网络层和数据链路层的一个协议)。第一次传送某个目的IP地址的数据的时候，先会发出一个ARP包，其MAC的目标地址是广播地址，里面说到：“谁是xxx.xxx.xxx.xxx这个IP地址的主人？”因为是广播包，所有这个局域网的主机都收到了这个ARP请求。

收到请求的主机将这个IP地址和自己的相比较，如果不相同就不予理会，如果相同就发出ARP响应包。

这个IP地址的主机收到这个ARP请求包后回复的ARP响应里说到：“我是这个IP地址的主人”。这个包里面就包括了他的MAC地址。以后的给这个IP地址的帧的目标MAC地址就被确定了。(其它的协议如IPX/SPX也有相应的协议完成这些操作)。

IP地址和MAC地址之间的关联关系保存在主机系统里面，叫做ARP表。由驱动程序和操作系统完成。

以太网MAC芯片的一端接计算机PCI总线，另外一端就接到PHY芯片上，它们之间是通过MII接口链接的。一个MAC的结构图如下图所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlJLW3CbP5wa2QHggIJRh1cPRick5NcLTiawZCwGYrpXtuRicb8k00yvstg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

## 什么是PHY

PHY（（Physical Layer，PHY））是IEEE802.3中定义的一个标准模块，STA（station management entity，管理实体，一般为MAC或CPU）通过SMI（Serial Manage Interface）对PHY的行为、状态进行管理和控制，而具体管理和控制动作是通过读写PHY内部的寄存器实现的。一个PHY的基本结构如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlZOicbQrH0RK2LzU9S8L8FcvARR9iaZxKUxbrJvdOia8FBOACWgMOUskHQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

PHY是物理接口收发器，它实现OSI模型的物理层。

IEEE-802.3标准定义了以太网PHY。包括MII/GMII(介质独立接口)子层、PCS(物理编码子层)、PMA(物理介质附加)子层、PMD(物理介质相关)子层、MDI子层。它符合IEEE-802.3k中用于10BaseT(第14条)和100BaseTX(第24条和第25条)的规范。

> 注：PHY寄存器在IEEE802.3标准的 22.2.4 Management functions 节有介绍，但不涉及所有的寄存器，个别寄存器需要到其它章节中看，当然，文档里面也提到该在哪里找到哪个寄存器。

## 什么是MII

MII（Media Independent Interface）即媒体独立接口，MII 接口是 MAC 与 PHY 连接的标准接口。它是 IEEE-802.3 定义的以太网行业标准。MII 接口提供了 MAC 与 PHY 之间、PHY 与 STA（Station Management）之间的互联技术，该接口支持 10Mb/s 与 100Mb/s 的数据传输速率，数据传输的位宽为 4 位。MII 接口如下图所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlKRXREQe0FaYw70P3PD1GKFM5vKHbCI08aRdUzdn4ozK30eJicGXr8Yw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

MII接口主要包括四个部分。一是从MAC层到PHY层的发送数据接口，二是从PHY层到MAC层的接收数据接口，三是从PHY层到MAC层的状态指示信号，四是MAC层和PHY层之间传送控制和状态信息的MDIO接口。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlvfwM6brEvd458Ktk7iasIRRAdySfljvo0ry41tgqD9icchAk4f3EwYMg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

MII 包括一个数据接口，以及一个 MAC 和 PHY 之间的管理接口：

-   **TX\_CLK（transmit clock）**：TX\_CLK (Transmit Clock) 是一个连续的时钟信号（即系统启动，该信号就一直存在），它是 TX\_EN、TXD、TX\_ER（信号方向为从 RS 到 PHY）的参考时钟，TX\_CLK 由 PHY 驱动 TX\_CLK 的时钟频率是数据传输速率的 25%，偏差 ±100ppm。例如，100Mb/s 模式下，TX\_CLK 时钟频率为 25MHz，占空比在 35% 至 65% 之间。
    
-   **TXD<3:0>（transmit data）**：TXD 由 RS 驱动，同步于 TX\_CLK，在 TX\_CLK 的时钟周期内，并且TX\_EN 有效，TXD 上的数据被 PHY 接收，否则 TXD 的数据对 PHY 没有任何影响。
    
-   **TX\_ER（transmit coding error）**：TX\_ER 同步于 TX\_CLK，在数据传输过程中，如果 TX\_ER 有效超过一个时钟周期，并且此时TX\_EN 是有效的，则数据通道中传输的数据是无效的，没用的。注：当 TX\_ER 有效并不影响工作在 10Mb/s 的 PHY 或者 TX\_EN 无效时的数据传输。在 MII 接口的连线中，如果 TX\_ER 信号线没有用到，必须将它下拉接地。
    
-   **TX\_EN**：发送使能。TX\_EN 由 Reconciliation 子层根据 TX\_CLK 上升沿同步进行转换。
    
-   **RX\_CLK**：它与 TX\_CLK 具有相同的要求，所不同的是它是 RX\_DV、RXD、RX\_ER（信号方向是从 PHY 到 RS）的参考时钟。RX\_CLK 同样是由 PHY 驱动，PHY 可能从接收到的数据中提取时钟 RX\_CLK，也有可能从一个名义上的参考时钟(e.g., the TX\_CLK reference)来驱动RX\_CLK。
    
-   **RXD<3:0>（receive data）**：RXD由RS驱动，同步于 RX\_CLK，在 RX\_CLK 的时钟周期内，并且 RX\_DV 有效，RXD 上的数据被RS 接收，否则 RXD 的数据对 RS 没有任何影响。
    
-   **RX\_ER（receive error）**：RX\_ER 同步于 RX\_CLK，其在 RX 通道中的作用类似于 TX\_ER 对于 TX 通道数据传输的影响。
    
-   **RX\_DV（Receive Data Valid）**：RXD\_DV 同步于 RX\_CLK，被 PHY 驱动，它的作用如同于发送通道中的 TX\_EN，不同的是在时序上稍有一点差别：为了让数据能够成功被RS接收，要求RXD\_DV有效的时间必须覆盖整个 FRAME 的过程，即starting no later than the Start Frame Delimiter (SFD) and excluding any End-of-Frame delimiter。MII以4位半字节方式传送数据双向传输，时钟速率25MHz。其工作速率可达100Mb/s。
    
-   **COL（collision detected）**：COL 不需要同步于参考时钟。
    
-   **CRS（carrier sense）**：CRS 不需要同步于参考时钟，只要通道存在发送或者接收过程，CRS 就需要有效。
    
-   **MDC**：由站管理实体向 PHY 提供，作为在 MDIO 信号上传送信息的定时参考。MDC 是一种非周期性的信号，没有最高或最低时间。无论 TX\_CLK 和 RX\_CLK 的标称周期如何，MDC 的最小高低时间应为 160 ns，MDC 的最小周期为 400 ns。
    
-   **MDIO**：是 PHY 和 STA 之间的双向信号。它用于在 PHY 和 STA 之间传输控制信息和状态。控制信息由 STA 同步地针对 MDC 驱动并且由 PHY 同步地采样。状态信息由 PHY 针对 MDC 同步驱动并由 STA 同步采样。
    

PHY 里面的部分寄存器是 IEEE 定义的，这样PHY把自己的目前的状态反映到寄存器里面。

MAC 通过 SMI 总线不断的读取PHY 的状态寄存器以得知目前 PHY 的状态。例如连接速度、双工的能力等。

当然也可以通过 SMI 设置 PHY的寄存器达到控制的目的。例如流控的打开关闭、自协商模式还是强制模式等。

不论是物理连接的MII总线和 SMI 总线，还是 PHY 的状态寄存器和控制寄存器都是由IEEE的规范的。因此不同公司的 MAC 和 PHY 一样可以协调工作。当然为了配合不同公司的 PHY 的自己特有的一些功能，驱动需要做相应的修改。

MII 支持 10Mbps 和 100Mbps 的操作，一个接口由 14 根线组成，它的支持还是比较灵活的。但是有一个缺点是因为它一个端口用的信号线太多，如果一个 8 端口的交换机要用到 112 根线，16 端口就要用到 224 根线，到 32 端口的话就要用到 448 根线。

一般按照这个接口做交换机是不太现实的。所以现代的交换机的制作都会用到其它的一些从 MII 简化出来的标准，比如 RMII、SMII、GMII等。

## 什么是RMII

简化媒体独立接口是标准的以太网接口之一，比 MII 有更少的 I/O 传输。RMII 口是用两根线来传输数据的，MII 口是用 4 根线来传输数据的，GMII 是用 8 根线来传输数据的。

MII/RMII 只是一种接口，对于10Mbps 线速，MII 的时钟速率是 2.5MHz 就可以了，RMII 则需要 5MHz；对于 100Mbps 线速，MII 需要的时钟速率是 25MHz，RMII 则是 50MHz。

MII/RMII 用于传输以太网包，在 MII/RMII 接口是 4/2bit 的，在以太网的PHY里需要做串并转换，编解码等才能在双绞线和光纤上进行传输，其帧格式遵循IEEE 802.3(10M)/IEEE 802.3u(100M)/IEEE 802.1q(VLAN)。

以太网帧的格式为：前导符 + 开始位 + 目的 mac 地址 + 源 mac 地址 + 类型/长度 + 数据 + padding(optional) + 32bitCRC。如果有 vlan,则要在类型/长度后面加上 2 个字节的 vlan tag，其中 12bit 来表示vlan id，另外，4bit 表示数据的优先级！

## 什么是GMII

GMII是千兆网的MII接口，这个也有相应的RGMII接口，表示简化了的GMII接口。GMII 采用 8 位接口数据，工作时钟125MHz，因此传输速率可达 1000Mbps。

同时兼容 MII 所规定的10/100 Mbps工作方式。GMII 接口数据结构符合IEEE以太网标准，该接口定义见 IEEE 802.3-2000。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUl0DD5P3Cx9vj7Ey79YNZObp25riatVYOR2pxZ3SrF53wgdFeTP1ez1FQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

## 什么是RGMII

RGMII(Reduced Gigabit Media Independant Interface),精简GMII接口。相对于GMII相比，RGMII具有如下特征：

-   发送/接收数据线由8条改为4条
    
-   TX\_ER和TX\_EN复用，通过TX\_CTL传送
    
-   RX\_ER与RX\_DV复用，通过RX\_CTL传送
    
-   1 Gbit/s速率下，时钟频率为125MHz
    
-   100 Mbit/s速率下，时钟频率为25MHz
    
-   10 Mbit/s速率下，时钟频率为2.5MHz
    

信号定义如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUldqqh34AIlPensuib6SLha50bdMekS42vDJx8dYMJHSXM3cgUhOibia5MQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

虽然RGMII信号线减半，但TXC/RXC时钟仍为125Mhz，为了达到1000Mbit的传输速率，TXD/RXD信号线在时钟上升沿发送接收GMII接口中的TXD\[3:0\]/RXD\[3:0\]，在时钟下降沿发送接收TXD\[7:4\]/RXD\[7:4\],并且信号TX\_CTL反应了TX\_EN和TX\_ER状态，即在TXC上升沿发送TX\_EN,下降沿发送TX\_ER，同样的道理试用于RX\_CTL，下图为发送接收的时序：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlD7oeFI4tZX7xWj6PRnAvibKe7mnB9bfmNt8ZZ9miaPKyPe2uPB9kbATA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

## 什么是SMI

SMI：串行管理接口（Serial Management Interface），通常直接被称为MDIO接口（Management Data Input/Output Interface）。

MDIO最早在IEEE 802.3的第22卷定义，后来在第45卷又定义了增强版本的MDIO，其主要被应用于以太网的MAC和PHY层之间，用于MAC层器件通过读写寄存器来实现对PHY层器件的操作与管理。

MDIO主机（即产生MDC时钟的设备）通常被称为STA（Station Management Entity），而MDIO从机通常被称为MMD（MDIO Management Device）。通常STA都是MAC层器件的一部分，而MMD则是PHY层器件的一部分。

MDIO接口包括两条线，MDIO和MDC，其中MDIO是双向数据线，而MDC是由STA驱动的时钟线。MDC时钟的最高速率一般为2.5MHz，MDC也可以是非固定频率，甚至可以是非周期的。

MDIO接口只是会在MDC时钟的上升沿进行采样，而并不在意MDC时钟的频率（类似于I2C接口）。如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9sNwsXcN68pyb2yChmKGC8NwWjrjKHUlKhZHj2PqTA9vsDIQnT0CGKsU4FJJT1U6SXvKMaw58pnafMCm51OLQg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

## QA

### 网卡的MAC和PHY间的关系?

网卡工作在osi的最后两层,物理层和数据链路层,物理层定义了数据传送与接收所需要的电与光信号、线路状态、时钟基准、数据编码和电路等,并向数据链路层设备提供标准接口.物理层的芯片称之为PHY.

数据链路层则提供寻址机构、数据帧的构建、数据差错检查、传送控制、向网络层提供标准的数据接口等功能.以太网卡中数据链路层的芯片称之为MAC控制器.

很多网卡的这两个部分是做到一起的.他们之间的关系是pci总线接mac总线,mac接phy,phy接网线(当然也不是直接接上的,还有一个变压装置).

### PHY和MAC之间如何进行沟通

通过IEEE定义的标准的MII/GigaMII（Media Independed Interfade，介质独立界面）界面连接MAC和PHY。这个界面是IEEE定义的。MII界面传递了网络的所有数据和数据的控制。

而MAC对PHY的工作状态的确定和对PHY的控制则是使用SMI（Serial Management Interface）界面通过读写PHY的寄存器来完成的。

PHY里面的部分寄存器也是IEEE定义的，这样PHY把自己的目前的状态反映到寄存器里面，MAC通过SMI总线不断的读取PHY的状态寄存器以得知目前PHY的状态，例如连接速度，双工的能力等。

当然也可以通过SMI设置PHY的寄存器达到控制的目的，例如流控的打开关闭，自协商模式还是强制模式等。

我们看到了，不论是物理连接的MII界面和SMI总线还是PHY的状态寄存器和控制寄存器都是有IEEE的规范的，因此不同公司的MAC和PHY一样可以协调工作。当然为了配合不同公司的PHY的自己特有的一些功能，驱动需要做相应的修改。

* * *

### 文章来源

https://blog.csdn.net/ZCShouCSDN/article/details/80090802

https://blog.csdn.net/ZCShouCSDN/article/details/80090802

http://blog.chinaaet.com/justlxy/p/5100064094

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源土豆居士。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。