# 画Type-C原理图？5.1K下拉电阻搞定了，那Type-C的真正实力该亮出来了。

原创 王工 硬件笔记本 2026-05-21 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/IvuznlV-gwZqcCXAeNGbjw](https://mp.weixin.qq.com/s/IvuznlV-gwZqcCXAeNGbjw)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

前段时间我写了两篇关于Type-C的文章，发现这类基础的科普，看的人还挺多。（点击如下标题可进行查看）

[画Type-C原理图？先把这个5.1K电阻圈起来](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247567305&idx=1&sn=1c2945746cf70b8033992dc536a45bf2&scene=21#wechat_redirect)

[画Type-C原理图？为什么要接5.1K，而不是10K，20K？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247568491&idx=1&sn=4e0b5458b6ba03a53464a879e3a6d436&scene=21#wechat_redirect)

今天再给大家分享一个相关话题。乍一听有点高大上、但其实已经在咱们身边悄悄普及了——**PDUSB**。

你可能会想：PD我懂，快充嘛。USB我也懂，传数据嘛。PDUSB？把俩加一块儿了？

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacAMujoe494v5a9GnO3mtGvJ35zphg9JyYOzoE5JTNicor1BvXia35tibunVYNicjHvBIIBibwe0QsSBb6OHuysz33BSkdia221RfRp8/640?wx_fmt=png&from=appmsg)

**没错，**PDUSB = USB通信 + PD功率传输，两者二合一。但这个结合不是简单的边充电边传数据，而是******用同一根线、同一个接口，动态协商：现在谁供电、供多少、数据怎么跑**。

01

先捋一下基本概念

PDUSB并不是一种新的接口形状。它就是在Type-C接口上，同时实现了USB数据传输和PD功率传输。

以前USB 2.0时代，5V 500mA，啥也别谈，插上就是固定值。后来BC1.2，最高能到5V 1.5A，但也就是简单识别一下，稍微提高了功率。  

再后来PD来了：5V、9V、15V、20V、28V、36V、48V……电流能到5A，功率最高240W。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafs0xgiajVa2aFOWEQH4NibD3zccql0AheiajB1LZkvgYiaNnPvuMQnN04m9VXTiaN564ic578BrpIQgjyEvRicqWLl5B8OFBib45W05BM/640?wx_fmt=png&from=appmsg)

而PDUSB，就是结合了PD功能的USB接口。

02

PDUSB是怎么来的？

你可能会问：PDUSB是怎么来的？前面说了，PDUSB=USB+PD。  

USB数据传输，这个一直有，Type-C本来就能传数据。PD功率传输，这个后来加的，让Type-C能动态供电。

那他们是怎么走到一起的？两个原因。

**第一个：USB-C一统江湖了。**

上到笔记本大功率充电，下到电动牙刷这种小设备，大家都在Type-C上塞功能。你想省体积、省接口数量，就必须让一个口既能供电又能传数据。

以前一个设备要两个口，一个充电，一个传数据。现在一个Type-C就能全搞定，确实方便了很多。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadCic4zvPO04KvFLKLDMBC0q8Wic5IMxn6Vcq9vWYgTb6UvWNdM8AiabzQdh52mibQyxlWzEufbAvujEPTYRbW1yjzhPoKcMFkshFE/640?wx_fmt=png&from=appmsg)

第二个：PD协议本身成熟了。

从PD 2.0到PD 3.2，电压从5V一路干到48V，功率到了240W。协议稳了，厂商才敢用。  

这两个条件凑齐，USB-C口既能传高速数据又能动态供电，就成了自然而然的事。

03

PDUSB的工作过程

PDUSB的工作，按时间顺序分为以下几个阶段。下面咱们逐一拆解。

#### 阶段一：连接检测，物理层握手

当两个USB-C设备物理插接时，CC线首先承担连接检测功能。**这正好承接了我之前两篇文章讲的内容。**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niaef5Wfibm0xsykom3QSI63MKeaCKWPxHq6vSZxicC0dpCGics3lOrarV4F6WmOeSt71qIZJKeXDMMwnFyickciaa1EmqcJZztic4zX1U/640?wx_fmt=jpeg&from=appmsg)  
**

具体是这样的：

Source端（供电方，如充电器）在CC引脚上连接上拉电阻Rp。Sink端（受电方，如你的设备）在CC引脚上连接下拉电阻Rd（标准值5.1kΩ）。插接瞬间，Source检测到CC引脚电压被拉低，由此判断连接建立。同时，Source通过检测是CC1还是CC2被拉低，来识别线缆方向是正插还是反插。

#### 阶段二：能力广播，Source宣告自己能给什么

连接检测完成后，Source知道自己要供电了。它会通过CC线发送第一条数据消息——**Source Capabilities，用于声明其供电能力**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadhicMc5bXNPbw7xDJWmc3yb1vibrhkFSLWBmlXpME5S80FrSgiapUbibwJ0DhoH3IPskd9zhgP2iahibHm3UFLWLiaPZHzjStuGicVtJ0/640?wx_fmt=png&from=appmsg)

**具体是这样的：**

消息里包含一组 **PDO（Power Data Object，功率数据对象）**。每个PDO描述一档电压和电流组合，例如：5V/3A、9V/3A、15V/3A、20V/5A。这些消息通过BMC编码在CC线上串行发送。

#### 阶段三：请求与协商，Sink挑选档位

Sink收到Source Capabilities后，会从里面挑选一个自己需要的档位，并发送**Request**消息回去。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf1dbiciaFTd3d0K2vyvc9HZs1eaqb4BszZIibLLZ5VvyHFLI7Cpia89GgSjXmicV2PhW5UGyANYlomzbq7KibY6NcMDLmxVGoMfibQeA/640?wx_fmt=png&from=appmsg)

**具体是这样的：**

Sink根据自身需求（如电池电量）选择一个PDO。它可以请求该PDO下的更低电流（比如PDO是20V/5A，但Sink只需要20V/2A）。Sink发送RDO，明确告诉Source自己的需求。Source收到后检查自己能否满足。如果可以，就回复Accept

。双方确认后，Source开始调整输出电压到请求值。

#### 阶段四：供电就绪，开始干活

Source的输出电压稳定后，会发**PS\_RDY（Power Supply Ready）**消息通知Sink。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaehRfyBHDMjFddQ3zB3lj2cjwDHAibPaicibictvEOBfpNevBbrfAcYXWzFy9ceWZJB3XO8sGuHwVfI7ls1Rdic6Ns0IE3BmVNvJMus/640?wx_fmt=png&from=appmsg)

**具体是这样的：**

Source内部DC-DC或电源管理单元完成电压调整，稳定在请求值。通过CC线发送PS\_RDY控制消息。Sink收到后，才开始从VBUS总线上拉取电流。至此，大功率供电正式开始，同时USB数据通道也可正常工作。

**那USB数据是怎么跑的？**

讲完供电，咱们再来说说USB数据通信。

在Type-C接口中，PD协商和USB数据传输走的是两套完全独立的通道。CC线专门跑PD协议，负责电压电流协商和角色识别；而D+/D-或TX/RX差分对专门跑USB数据，负责文件传输、音视频等。这两套通道物理隔离，互不干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf1FogZnMc0iaOSvBNX8BiazmAfRkfyZJQJvBVBJMcO7ejCm7Tk3ERZS4HRbIPGOh3ggBQG2o0nnhl4kE0VXF244TtulkictpbnOo/640?wx_fmt=png&from=appmsg)

所以即使在PD协商过程中，比如从5V切换到20V的时候，USB数据通信依然可以正常进行，不会中断。连接初期VBUS默认5V供电，USB数据按线缆能力正常传输；PD协商进行中，CC线上在跑PD报文，同时TX/RX线上可能正在传文件或输出视频，两边各忙各的；协商完成后VBUS切换到更高功率，数据通道仍走原来的高速信号线，没有任何干扰。

#### **阶段五：动态重协商与角色交换**  

#### 以上四个阶段，PDUSB握手基本完成了，其实还有一个阶段，也就是在供电过程中，Sink可以随时发起重新协商，比如从快充切换到普通充电以降低功耗。更高级的应用还可以交换供电角色。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacZgHsQn54ib6rR2XDxeeA8EjUG2N4Fm9JovYULIKxye3kjNvLDqlDBa0KxHhfe0sJ0oEaAsfS7icaVayWZ8CxR28AtxHF5Nbsg4/640?wx_fmt=png&from=appmsg)

角色互换的转换图

#### 动态重协商：Sink在供电过程中发送一个新的Request消息，Source回复Accept，然后Source调整输出电压，再次发送PS\_RDY。

#### 角色互换：任意一方发起供电角色交换（PR\_Swap）或数据角色交换（DR\_Swap）。双方通过一系列消息确认后交换角色，原来的Source变成Sink，原来的Sink变成Source。整个过程不用拔线，物理连接不变。

下面是成功握手过程的一个示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafy1hIYFWkuINvI9HH92k2YsczCibRehuObl1NQ1YK3tCZY5zicVOalYj2Zebqba9nk42ff3qMFwRR9d8JcLvMicoVY33PTsftrkc/640?wx_fmt=png&from=appmsg)

04

PDUSB的硬件方案  

了解了工作过程，咱们再来看看实际应用中怎么实现PDUSB。  

在早期想玩PDUSB挺折腾的。你得有一颗带USB的MCU，再另外挂一颗独立的PD控制器。两颗芯片，板子面积大一截，BOM成本上去一截，调试的时候还得两边对协议。

这几年情况变了。有厂商开始把USB和PD做到一颗MCU里。

**比如大家都比较熟悉的一家专业做USB芯片的公司**——南京沁恒**。**

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadyYqGkq0oSd42CoibtTgfhn0x8cWr0bLo9kNerTFAPdLvtxAiaNM8msOqicYCgrydvfGceaWGIoHMY57b0YGicSKIBlqSkqxM0eg0/640?wx_fmt=png&from=appmsg)

他们在USB上积累很久了。早在2021年，就在通用MCU里集成了480Mbps高速USB 2.0 PHY。PD这边呢？他们从2018年就开始做PD产品线，PHY也是自研的。把这两块放到一颗MCU里，就是顺理成章的事。

所以现在沁恒有一批MCU，直接带PDUSB接口。你选一颗，USB通信和PD功率协商都搞定，不用外挂。

打开他们公司官网，就可以找到一些带了PDUSB接口芯片，仔细一数有10多款，下面截取了部分截图。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacs3dgDicG8qjic3T60CXgSg2sPaU6jGAJ4l1E0EKU4iaIcnSXYsonn0MnlUkImX0uWd4rBRGtlc3GUkDWw7DWicW0WicH77DmDXNn0/640?wx_fmt=png&from=appmsg)

咱们随意挑几个看看：

-   **CH32H417**：双核，带USB3.0，适合复杂系统；
    

-   **CH32X315**：4个高速ADC，带USB3.0，适合数据采集；
    

-   **CH32X035**：基础款，性价比高。
    

从基础的PDUSB应用，到带预驱的电机驱动，到双核、USB3.0，**覆盖得很广**。

而且它们的共同特点是：**集成度高**。你不需要在外面再挂一颗USB PHY或独立PD控制器，一颗芯片就可以搞定大部分工作。此外沁恒还有一些支持PDUSB的接口芯片，比如支持Type-C和反向100W快充的USB3.0七口HUB芯片CH637、四口HUB芯片CH634。

05

总结

## PDUSB用途广泛，在智能焊接工具，便携显示器，Type-C扩展坞，智能家居等生活场景下用的非常多。小型化、单接口多功能、灵活换角色，这就是PDUSB的使用价值。

对咱们硬件工程师来说，它的价值很明显：**少一个器件、少一条线、少一份折腾。**

而沁恒这类公司做的，无非是把本来需要两颗甚至三颗芯片才能搞定的事，**用自研PHY和多年USB积累，揉进一颗MCU里**。你不用关心他们具体是怎么做的，你只需要知道：选一颗带PDUSB的MCU，你的板子可以更小、**系统整合度****更高**、调试更省心。