# 聊聊USB

原创 硬件笔记本 2023-07-26 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/7BLaXWcMqafoQ11Pco4vFA](https://mp.weixin.qq.com/s/7BLaXWcMqafoQ11Pco4vFA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiap0WWGTXX3iaKiaROPqb9smuS2nSwBfkuuHekLnia6xkXcmzEUvGK6yT9luzmdqP8MezoDxKODJ1ic9w/640?wx_fmt=png)

    在人类的历史长河中，很少有一种技术或者传输标准能像USB那样跟我们的生活息息相关，甚至到了没有不行的地步。

    USB对于今天的人们来说，就好像是空气，是水，是我们每天必需但是又熟视无睹的东西，没有多少人知道它从哪来，也没多少人关心它要往哪去，对于大多数人来说，它平凡得不能再平凡了。

    但是，在我们“电子攻城狮”的眼里，它太有趣了，它是目前使用率最高的接口，它是我们身边林林总总电子设备之间的高速公路。

    因此我们必须关注它，如果有必要，我们还不得不去了解如何才能实现它。作为一个USB开发者（电子爱好者），接下来我会为大家揭开USB神秘的面纱，带大家去了解USB是怎么出现并且逐渐演化的，以及在它出现后给我们带来了什么。

　　USB这三个字母只是缩写，其全称是Universal Serial Bus，翻译成中文就是串行总线接口。

    USB诞生于“乱世”之中，在它出现之前，各种接口层出不穷。如图1所示，我们可以看到在老式主机（九十年代）的背部这些数量繁多的接口种类，它们都有各自的用途，如打印机需要用并口、MODEM要使用串口、鼠标键盘要接PS/2口等等。

    这些接口种类多、个头大，占用了主机相当大的空间，并且必须得安装驱动才能正常使用，这样不仅给用户造成了很大的困扰，还阻碍了电脑往小型化发展。在这种情况下，人们极其渴望有某种接口能“一统天下”，取代那些用起来非常不爽的接口。于是乎，随着PC硬件的发展，一种适用性广、传输速度快、软件配置简单的外部接口——USB就诞生了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiap0WWGTXX3iaKiaROPqb9smuENfYFR9vWlwt8WV26hNqnPCTSZGylkpic4Wzq5AJBibZZYm809az3zdg/640?wx_fmt=png)

✦1 老式主机背部接口

　　USB最早是在1994年由Compaq、DEC、IBM、Intel、Microsoft、NEC、Nortel这7个当时的行业巨头推出，他们为此还专门成立了USB Implementer Forum（简称为USB-IF）的组织，旨在推动USB技术的发展和普及，这个组织的官方网址是http://www.usb.org，在开发USB期间我都是在这个网站下载到官方的资料。

其后，1994年到1995年USB协议尚处在试验期，并且在此期间历经了多个先行版本。1995年Intel公司内部一支负责USB标准研发的小组率先生产出了第一块支持USB的集成电路板，这个小组的重要成员——Ajay Bhatt也因此被称为“USB之父”。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic77ofvpMHCDcORBHQoZPdpNPwrWXmIOkfwgYZNozAicPv2FiaiavAiaJkRUQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦2 Ajay Bhatt

　　1996年1月，USB历史上第一个正式的版本USB 1.0终于发布，它支持两种数据传输速率，一种为1.5Mb/s的低速速率（Low Speed），另一种则是12Mb/s的全速速率（Full Speed）。

但作为一种新兴接口，当时支持USB接口设备较少，要知道Win95是不支持USB的。而且因为延时和供电问题，USB 1.0接口也不支持使用延长线，对比传统的传输接口，USB尚未具备明显的优势。

　　直到1998年USB 1.1标准的发布，USB才迎来了真正的春天。USB1.1着力改进了此前USB HUB方面的问题，理论上最多可支持127个外部设备。

同年，Win98发布，宣布正式对USB接口提供支持。

随后，PC历史上具有里程碑意义的苹果iMac G3发布，它非常激进地使用了USB接口取代传统的串行和并行接口。

Intel也在其主板芯片组上不断加强对USB的支持，这些都为日后USB的普及铺平了道路，也是从此时USB开始逐渐被人们所接受。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic74HA4n1Dd5sVASgjB15muCOmc0xibZrEoRWw6Kw87Uib6yQQU58sjEicYQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦3 USB HUB

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7LC09Ramoe8ECIgG9O8YlUsebWJXX9twwPmw2ribtox2VXTiaVUdoHczQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦4 iMac G3的USB接口

　　随着各种外部设备对数据传输速率需求的提高，USB 1.1那12Mb/s的带宽也是越发捉襟见肘，在接入较多外部设备时，多个数据流同时传输容易引发瓶颈效应，为了解决传输速率问题，USB 2.0应运而生。

    USB 2.0标准在2000年正式发布，加入了40倍于原先全速速率（Full Speed）的高速速率（Hi-Speed），理论带宽达到480Mb/s，同时也向下兼容USB1.1标准。当USB 2.0在新世纪初普及之后，有更多的东西开始被替换。USB闪存淘汰了软盘，也让光盘媒介开始退居次席。

    USB 2.0让连接外设变得可行——比如Wi-Fi适配器、光驱和以太网接口等等——这些之前都是需要安装到机身内部的。

最高480Mbps的传输速度让这一切都成为可能，在这一时期，USB接口开始彻底淘汰掉了台式机和笔记本身上的那些老接口。

　　然而就当USB要大展拳脚的时候，移动设备的快速发展让USB协议的一个致命缺点暴露无遗。在USB标准制定之初，所有的设备都是围绕主机来连接的，因此并未考虑设备之间的连接，可是移动设备恰好就非常需要这项功能。

    为此，在USB2.0标准制定后不久，一个名为USB On-The-Go的补充标准就诞生了，它对于原来的USB2.0标准只是做了一点点改变，主要增加了主机协商机制，这也是为什么我们看到的USB2.0接口有5条线，除了2条电源线和2条数据传输线，另外一条就是用来协商究竟谁来充当主机的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7GY4picQiaK3syNjdViaUs7JfVZqBcibB3CRfVgdjqCDxsQkU10IILKNSvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦5 OTG应用

　　高清时代的来临，就如当初USB1.1一样，USB2.0 Hi-Speed 480Mb/s的传输速度逐渐也不能满足我们的需求。于是在2008年，USB-IF又带来了USB3.0标准，新标准将理论传输带宽一下子提高到了5Gb/s。

    不同于USB2.0的半双工传输方式，USB3.0新增了4条线路，一对负责发送，一对负责接收，实现了全双工传输，从而大大提高了传输带宽。

    带宽的提高解决了更多的问题，系统备份和传输大型视频文件所用的时间大大减少，802.11ac或千兆以太网适配器的瓶颈得到了解除，从USB 3.0外置硬盘和U盘上运行操作系统也变得很平常。

    从USB2.0到USB3.0的跃进不仅体现在速率的提高上，由于兼容设备越来越多，人们对USB的供电能力有了更大的期望，因此USB3.0的供电电流从USB2.0的500mA提升到了900mA，并且伴随着单独发布USB供电标准。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7I3aiccJgx5fbfdcnViaoaiaaWDhBtia5XZgj9tepvqgTibOFRlhibTBfBBfw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦6 USB3.0连接线横截面模型

　　USB3.1，于2013年7月发布。USB3.1主要是针对USB3.0的一些不足做了改进。首先是理论传输带宽翻倍，可以和第一代雷电接口相媲美，达到了10Gb/s。其次，USB 3.1编码方式从此前的8b/10b换成了128b/132b，带宽损耗率从20%大幅下降到3%左右，换算之后带宽同样超过了1.2GB/s，这也意味着在真实使用中USB 3.1的极限传输速率有望突破每秒1GB。

    另外，针对USB 3.0时出现的电磁干扰问题， USB 3.1的Type-A接口处加入了金属屏蔽罩和更多的接地弹片，从而有效降低了对附近其他设备的干扰。

　　需要注意的是，USB3.1分高低两个版本，低版本USB 3.1 Gen 1实质上就是曾经的USB3.0，而高版本USB 3.1 Gen 2才是新推出的能达到10Gb/s的真正意义上的USB3.1。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiap0WWGTXX3iaKiaROPqb9smu5M2VD9pALMgc935q4OtOUricUTrjkkOpCcN2607KANFibzW56Xqfc18w/640?wx_fmt=png)

✦7 USB历代标准

     2020年9月初，USB Promoter Group正式发布了USB4，正式书写名字不包含空格也没有小数点，不是USB 4，也不是USB4.0。USB4规范使用双链路通道，传输带宽达到40Gbps，接口类型为双向USB-C。

USB4的新特性如下：

**1. 40 Gbps的最大传输速度**

    USB4分为两个版本，分别是USB4 20、USB4 40，分别对应20Gbps、40Gbps两种传输速率。一般电脑上的USB4 均为40Gbps 版本。

**2. 能够和雷电3接口兼容**

    USB4相当于USB3.2+雷电3的组合，也就是说你的设备上有USB4接口，理论上就能外接雷电3的设备。

**3. 有动态的带宽资源分配能力**

    USB4整合了多个协议，可以同时支持更多设备，也可以同时用来外接显示输出和传输数据。例如，如果仅需要20%的带宽来驱动1080p显示器，那么其余80%的带宽可以用来干别的事。这在USB 3.2以及之前的时代是办不到的。

**4. USB4设备将均支持100W USB PD**

    USB PD就是USB Power Delivery（USB电力传输），是目前主流的快充协议之一，这也是由USB-IF组织制定的，该规范可实现更高的电压和电流，输送的功率最高可达100W，并可以自由的改变电力的输送方向。

**5. 仅可使用USB Type-C接口**

    USB4仅可通过USB Type-C接口运行。

**6. 可以向后兼容过去的协议**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7RoPYSBPW6Q9BRYdXZk2VEicHFicdxa1RFZWlPFZpHsKRF4GDvhq0MSeg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)**

    USB4可兼容USB 3和USB 2的设备。也就是说，它可以向后兼容到以前的协议标准，不过USB 1.0和1.1就不支持了，目前市面上还使用这种协议的设备已经几乎绝迹了。

    对于USB的演化，我们能感受到的除了速度的提升，还有就是接口的改变。USB接口演化到现在已经是种类繁多，如果你不是“专业人士”，把它们摆在你面前，可能真叫不出它们的名字。

    那么现在我就教你怎么识别它们。USB接口都是插头和插座成对匹配的，插头在USB连接线上，而插座在主机或者设备上。

    我们接触USB连接线多一些，所以后面我就只以插头来介绍。从图8中可以看出，在USB历史上一共出现了10种接口。

    在USB2.0时代，这些接口分为标准型、Mini型和Micro型，其中Micro型最小。

我们平时最常用的组合是USB连接线一端以标准Type-A接口连接电脑，而另一端以Micro-B接口连接设备。

    到了USB3.0时代，由于需要额外的传输线同时又要保持对USB2.0接口的兼容，Type-A、Type-B和Micro-B分别被改造成了图8中的形状，我们能很明显地看到USB2.0插头也能插入到这些插座上。

    但是接下来的Type-C是个特例，它果断抛弃了以往USB接口的形式，不仅将接口做得非常小巧，美感十足（我相信苹果MacBook选择它这就是原因之一），而且可以正反插，从而使我们彻底摆脱了USB一次性插不准这个世纪难题。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7pOBJNVuWSch8zJSILReH7xTKUiaM8f84FS71rCNPpwF4RV4ntr5JIJA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦8 USB 10类接口

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7E8hkVGfvmicj5oGWFCGN7hl8ibjf2FKSGwgjjS3ufp5lTLSfogWOH1mg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦9 MacBook Type-C接口

　　迄今为此，USB统治PC接口已经将近20年了，每当有新的需求产生时，它总是以最合适的方式重新蜕变。那么，想必大家都很好奇，USB究竟进化出了哪些“超能力”，使之能够从众多的接口中脱颖而出呢？

　　首先，第一点是可扩展性，在替代了其他的接口后，接入USB接口的设备就会增多，这样必然会出现一个问题——接口数量不够，怎么办？

得益于USB的星型拓扑结构，使用USB HUB能很好地解决了这个问题。

如图10所示，一个USB主机最多可以连接127个设备（没谁会同时用到这么多设备吧）。

    USB HUB还有一个好处就是可以增加连接线的长度，USB2.0连接线的最大长度只有5米，如果中间连接上5个USB HUB，那么最多可以延长到30米。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic78jQKRgozMa11BfArBK7AFG0NLxOicYvPUmfpBYHlQM1Sq63x3g8tKow/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦10 USB拓扑结构

　　第二点是可热插拔，即插即用，不管什么时候，只要往电脑上一插设备就能直接正常工作。在USB出现的早期，这点是非常重要的。

　　第三点是使用灵活方便，USB设备既可以通过USB线连接主机，也可以直接插在主机上，另外，USB2.0之后的版本都支持OTG功能，这意味着USB设备之间也可以互连，例如数码相机可以直接与打印机连接来打印照片，手机可以从U盘读取各种文件，从而大大拓展了USB技术的应用范围。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7hE8xic0IcJzv8rI6t4e7BQBgicOqCnBQ6uibXtd15BX3CpykSSWwYnDBw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦11 OTG打印

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7kK0q5XibErg3WQpFHoRZFR9kwySnJw5aEkiaDnC1MoibQoyuH6ibGAdmUQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦12 手机读取U盘文件

　　第四点是速度快，USB协议最新版的USB 3.1理论最高速率达到10Gbps，这个速度对于目前的高速设备与主机交换数据已经足够了。USB 3.1新增USB A/V影音传输，最高支持4096 x 2304 @30FPS的4K显示画面，4K显示的规格已和HDMI 1.4一样，显示器可望也能借由USB AV 3.1来显示4K分辨率。

　　第五点是成本低，在数据爆炸的今天，不乏各种高速接口，但是相较于其他接口高昂的专利费，USB真的是我们这些普通百姓的福利。其实当初和USB协议同时代出现的还有FireWire（火线），FireWire的速度一直甩USB好几条街，可最后FireWire还是被淘汰了。其中最大的原因就是FireWire本身成本太高，因为它需要在计算机和外设上安装自己的控制芯片，在早期，使用FireWire这一名称还需要向苹果缴纳授权费。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7xQHiaTsY1ZJgbtTJxzDwQEN7xESj1FwQiaHGhQGYnFyibpOrSibuN4gibiaA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦13 FireWire（火线）

　　第六点是提供电源，USB设备既可以由自身提供电源，也可以通过USB线缆由主机提供电源。为应对人们对电子设备功耗和续航力的需求，USB的供电能力在逐渐增强，USB3.0的电力供应从USB2.0的5V/0.5A提升到了5V/0.9A。不过这还不够，USB-IF还专门发布了电力供应规范——USB Power Delivery，其最新版已经将供电的允许标准提高到了20V/5A，这可真是手机和充电宝的福音了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7AVfbAzCJh2ib9tjQmwcJ1ibjnRHVfl2zTiariaPSamcRPSkAkBlmc5gyzQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

✦14 手机充电宝

　　第七点，向下兼容，USB3.0（3.1）兼容USB2.0，USB2.0兼容USB1.1（1.0）。这样带来的好处就是旧设备仍然能够继续使用，减小了USB升级换代的阻力。

       USB的优点实在太多了，我们每天都能感受到USB带给我们的便利。在新的时代，它还在不停地朝前发展。

    目前，USB面临两个新的机遇。一个是大容量设备的传输，随着存储设备比如U盘、存储卡、移动硬盘等等容量日益增长，USB可以让这些设备以更短的时间完成传输，更重要的是，电脑系统可以直接从这些设备启动运行，并且手机也可以通过USB接口来扩展存储容量。

    另一个是高带宽需求，图像时代的来临对传输带宽有了更高的要求，这也让我们不得不重新思考怎么才能让主机和设备更好地连接，USB是一个理想的选择，它不仅拥有高达10Gb/s的带宽，而且USB标准扩展的各种设备类可以让众多的图像传感器直连USB主机，实时的图像传输变得非常方便。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfc9cib56RROibfrT4RCjA5dicic7ceISdYW5ozIpaIL6CYc7CCCV3vibxyc0kYKNnOibAia27tc36ibmk3HHTg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

　　USB从一开始就承载了人类赋予它的使命，每当时代召唤，它总能挑起重任，一步一步朝着更快、更方便、更简单统一的方向勇往直前。它的出现是人类的福音，我们需要它，正如我们需要太阳一样。作为一名USB开发者，我由衷地赞美它，祝愿它越走越远。

    USB连接了一切，USB正在塑造未来。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。