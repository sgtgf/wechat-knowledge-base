# 一个芯片干两样活：CPU跑系统，MCU管实时，再也不用既当爹又当妈了。

原创 王工 硬件笔记本 2026-04-10 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/ZYL1gAisMk2DSiNtzolO7Q](https://mp.weixin.qq.com/s/ZYL1gAisMk2DSiNtzolO7Q)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

2025年9月，全志科技在上海发布了新一代工业芯片T153。

这颗芯片的思路不太一样。采用AMP多核异构架构，相当于在一个芯片中集成了两个大脑：四核Cortex-A7（1.6GHz）跑Linux、做人机界面；独立RISC-V E907（600MHz）管实时响应，比如PLC扫描、IO采集，延迟做到微秒级。  

这种设计的实在好处在于，将数据采集、协议解析等实时性要求高的工作交给E907，让A7核心专心跑应用和界面，从而提升系统响应速度和稳定性，避免出现界面卡顿的同时丢失数据。

以前一颗主控又要跑系统又要管中断，复杂场景容易卡顿丢数据。说白了，就是让一个人干几个人的活，难免顾此失彼。T153这么一分，各干各的，既流畅又靠谱。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadMzibpkUnfEtD1RMsxuQjKZQiczNBJkqBhrXU7pBicdwicNl757xjiabILofE1byj7c861ou6xysfU5ocqj3R8rVHicbnKk0Lz21XS0/640?wx_fmt=png&from=appmsg)

今天给大家介绍的，就是**硬件十万个为什么(简称硬十)**基于T153工业芯片打造核心板****SOM5301******，以及配套的**开发板****EVB5301******。下面咱们就从这块开发板入手，看看这套方案到底怎么帮你省事。**

01

硬件介绍

### 1、硬件整体介绍

### 这套EVB5301-V1开发板采用了一种**核心板+底板的设计**。

### 核心板把T153芯片、内存、存储这些核心部件都集成在一块板子上，稳定可靠，直接拿来开发或者做产品都行。底板上该有的接口也配得挺全：星闪、网口、WiFi&BT都有，还带一个扩展口，接4G模块什么的很方便。  

### 整体来说，该有的都有，上手就能用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacdR7IYbw8KR4UCTvEcOAj4TcnciaucOmdicC5nQ1K46vicciaNbuNkwaAsS0uc7IterTiaposWTMjvmAics0u2Y0zYq4mzDXlUkBffs/640?wx_fmt=png&from=appmsg)

EVB5301-V1整体图片

### 2、核心板介绍

### 核心板型号：SOM5301-S1，你可以把核心板想象成整个系统的大脑和心脏，所有最核心、最关键的部件都高度集成在这张小小的板子上。

**SOM5301-S1的尺寸非常小巧，只有****38mm x 38mm，采用邮票孔（144PIN）+ LGA（16PIN）的封装形式。别看它小，肚子里的料很足。**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/9T5QJ2GvIEEu73k0bB3l9OFBHI2WEY2WkkdwcaBdRWpMq8YntIvaiahamJTUf9I7ofYHtHeOSMO1HJY64Y3ag7IcyaGCicCvafia7B1bKVqjss/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

**SOM5301-S1正面**图片（图源硬十官网）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadTUumyzzzVicRN22NbR1pe9gOxl1QKenPEOHF2lKicoiciajzh5sKvP7lnOHF0YtLWf7qHKrDdAd9FcBJRRyAAMLejiar4M5SzNXiag/640?wx_fmt=png&from=appmsg)

**SOM5301-S1背面**图片（图源硬十官网）

主控芯片是全志T153，它是T113的**升级替代方案**。性能上，相比T113，T153的提升大概在**140%**左右，跑应用明显更流畅。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafyDZmjw9EhDXoq3PCnQrKABhnJz6ic76Dd8XI9PkkRibbGxI3vD8dawCf7b8e7qeLlrahuS122UHYnlV703GkicQdiaWF6IowZ4dk/640?wx_fmt=png&from=appmsg)

接口方面，这块核心板可以说是量大管饱，特别适合做各种工业互联的设备：

**1、网络能力突出**：最让人惊喜的是，它引出了**3路千兆以太网GMAC**。配合外部PHY，你可以直接做出三网口的工业网关、路由器或者交换机类产品。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafibqLGOdbC2MiaO80NfcGb2BUsGad1acIydf0tddngoZVeR8rzNrv2UOqG7IFg7XyRqk43nSZ70It6tfuazlUVC8bgicMibOnXE84/640?wx_fmt=png&from=appmsg)

**2、工业总线齐全**：带了**2路CAN FD**和**10路UART**，无论是接各种传感器、PLC还是仪表，接口都绰绰有余。

**3、高速并行接口**：保留了**Local Bus**总线，可以灵活地扩展FPGA、MCU或者并口设备，对于需要高速实时数据交互的场景非常实用。

**4、显示与摄像头**：支持MIPI DSI、双路LVDS和RGB接口，可以同时接屏幕和触摸。摄像头方面有MIPI CSI和并口CSI，内置的ISP（图像信号处理器）能直接处理最高2M@30fps的图像，做机器视觉或者扫码识别很方便。

**5、无线扩展**：虽然核心板本身没有集成无线，但通过USB或SDIO接口，可以非常方便地扩展4G Cat1、Wi-Fi6甚至星闪模块。底板已经预留了相关接口，想上什么无线方案自己说了算。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeHBWTpCrJxTdryvjyKJEqOMBf48rchLOibPJ4BKiaDpCibRE9Y7NAfSYL5hjxw8KrhEIfJWSpPVjuQkvwQxV0ybVsBDcE3AU9jhQ/640?wx_fmt=png&from=appmsg)

**值得一提的是，这块核心板的PCB设计是下了功夫的：**

**1、8层板、沉金工艺**，信号完整性和电源完整性都做过仿真优化。

**2、背面平整无走线**，有一个完整的地平面。这个设计对EMC很友好，贴到底板上也不会因为背面走线导致短路或信号串扰。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeqOqvTPFuRHJ4ljXbhmXYtxh6bXQ240QMc85EDL7nCibJIdCW05UVTpwLyAMyuF6SpcCySicEiaEczZ1Rhdj5dLsrnicKllfzBgs4/640?wx_fmt=png&from=appmsg)

**核心板背面无走线**

**3、默认配屏蔽框**，你可以根据需要选配屏蔽罩，防护等级能到**8KV接触静电**。工业现场静电、浪涌比较多，有这个选项心里更有底。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacSOc6f8vXf3YuhubQzdYGgwlnYwQaTz7XSemL8B0yrEribS0g1Hqj9xQozia6ropTicYFHtjpFFmrbMcroPMLZJmdzMIuBdWuUCA/640?wx_fmt=png&from=appmsg)

**4、邮票孔封装**，相比金手指，抗震效果更好，就算工作在有振动环境的设备里也不怕。

**供货和认证方面：**

**1、100%全国产工规物料**，全流程追溯。

2、支持**CE/FCC/RoHS**等认证，出口产品可以直接用。

**3、****1****0****年以上供应周期**承诺，不用担心做几年就换方案。

4、工作温度范围是**\-40℃到+85℃**，通过了工业级测试，用在户外、冷库或者高温车间都比较放心。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafYng43zjz3FAickzZ7pf0trxgrpxdib0st3vhibcTplpOIv1dBHI6mEckvDKvlp8VlmaT0gMORBIVqdb8wHa3VkqNfvICo84ibOGI/640?wx_fmt=png&from=appmsg)

**总结一下**：如果你正在找一颗接口全、供货稳、能抗工业环境的处理器，SOM5301-S1值得看看。它把核心硬件都集成好了，你只需要配合他们的底板或者单独设计底板，能省掉不少高速布线和EMC整改的麻烦。

**3、**底板介绍****

底板型号：EVB5301-V1开发板：不只是评估，更是参考设计。整体布局紧凑，看着就**很有艺术气息**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafT5WR8mECodEKNEO7eu7egKPbz3cicZ7bicYedOE8fZP0Quiac0dZChOdb9eMtWKUz6N7GCYaRyCnCTYVgperzVGSCHZpDSrShko/640?wx_fmt=png&from=appmsg)

EVB5301-V1正面图片  

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacfxZR8qCj9sTMiazQP1fsxaAwnvNSz5RMS5iaicnzxibjNhPr7yyiaZj9cVhol1ibAIk7n0jzCpT51B7bVT01rJ3SKwZ3icSDtGHdU3I/640?wx_fmt=png&from=appmsg)

EVB5301-V1背面图片

触觉智能同步推出了EVB5301-V1开发底板，这块板子把核心板的大部分功能都通过标准接口引了出来，方便你逐个验证。

如果你有特殊的需求，或者打算自己做二次开发，这块底板完全可以作为参考设计来用。根据开发板的测试结果，验证完功能之后，再参照它的设计重新画自己的底板，比从零开始要省事得多。

下面咱们来欣赏一下开发板的细节

咱们从左往右捋一遍这块底板的接口布局：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaepxpnJTftfsSsvHZKM4rZZ7CCiamRz5BksYXibsLKvz6Vw1v1GbFc1u8RoKiaAfvV4eP0NY3Cre7Ok39pZnzRWP16XLPqnxlHrTA/640?wx_fmt=png&from=appmsg)

最左边是两个USB Type-C接口。一个是Debug调试口，板载CH340E芯片把调试UART转成了Type-C，插上电脑就能看打印信息，不用自己折腾USB转串口线，UART波特率115200。  

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadicFicCOe47eoFCUeCKYGdNUodSES9ibnB2VEpo4FibibygZR8Njn8b9TibWCHzlndtf7GNPMchFlXzO0v16HpHrPFCOsWYZAS3nKVc/640?wx_fmt=png&from=appmsg)

Debug接口参考原理图

挨着的是OTG接口，支持固件下载、ADB调试、接U盘这些标准操作。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafoyfWyFenzcaHRUHAWydw1DPxaRJq7vBgJiaUpJJseQlE8em73Luib0y2ibC4FKOZ6Up9eTB9TsgVZicmTouqicW6bWKX6pOgVwDpo/640?wx_fmt=png&from=appmsg)

OTG接口参考原理图

再往右是一个3.5mm耳机插孔（3节CTIA标准，注意不支持MIC输入）。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacI9FIyPJmoEMNNCSySAwXdiaMWC3UgENN5FkXemhejPLicN7bAOof1ic82gOZncALg8dbFpbUGpj0rnSZftT8nCAITetPrHkTs58/640?wx_fmt=png&from=appmsg)

3.5mm耳机参考原理图

然后是TF卡座，支持SD3.0协议，可以上高速卡。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacQqoxAYYo6KYdict4YrJsLpEJJ4UYOuM7UkROVKlfUqF2yCoRD78r5iabm6KvsXllfXVqJzP19cl49T9AfjgjcX9LyAGR96874A/640?wx_fmt=png&from=appmsg)

TF卡座接口参考原理图

接下来是个双层USB Type-A接⼝，提供2路USB3.2接口，方便接鼠标键盘或者U盘。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadCn5w1tWheQr3TakXcoGfb1lWlpGvO8kuYdlUgA2RMDQWhicGd1ibOe0Wgbx6zruVwg9JwicUltjAFhcHKFOZsSHGVPuh7p6pKQE/640?wx_fmt=png&from=appmsg)

双层USB Type-A接⼝参考原理图

再往右是两个以太网口——这里要注意一下，左边1路独⽴百兆⽹⼝，右边⾃适应双千兆⽹⼝，⽀持WAN⼝+LAN⼝双IP。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacP3936KUa4uvFemFMTwRzUWpiatz3rgI7KW35jlXsX7EX6oVCcrtJPIAIF3qH81MUuBwpg0lrFY8zkqSwhPsKQ4gIHVKrFtIicE/640?wx_fmt=png&from=appmsg)

RJ45网口参考原理图

最右边是一个电源指示灯和DC12V电源输入插座。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaf7LqBqfJRGjBLalJ26abfYVfYSzGhyq3vwUewkG2SbV3GkG11u0BhG9WW7lOmias49ib3wN8OBtsKHaQWmxa14aicbsKBILicMMkc/640?wx_fmt=png&from=appmsg)

电源输入参考原理图

说到这个电源插座，有个小细节值得提一下。如果你仔细翻过他们的开发手册，会发现手册里明确标注了电源插头的尺寸：外径5.5mm，内径2.1mm。其实还有另一种常见规格是内径2.5mm，如果用错了插头，可能会接触不良或者松动。这种细节如果你没做过开发，很少会注意到，这也是他们开发手册做得比较细致的一个地方。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaekOUrHDetZ22DlGDN1flK0SGNuRkxsEka3khic1icAZRaHTbRNqIRTarMASqcJZT5837LyENPCFwEl3UUKiaA6Pps25jBITb3cPQ/640?wx_fmt=png&from=appmsg)

再看板子另一边的接口：

有一个2x20x2.54mm 双排针，包括12V/5V/3.3V电源接口，以及UART、LVDS、SPI、RS232，RS485，CAN和其它GPIO等接口。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaddiaojoBslHx7m3SGodJeTlqXUQLrpeXGhbkXArrjftZ5z3HPh6icdmmojvmQVTMibnsl88lrA6rO2vicomJbBdcLrTiaoXnsicUhrs/640?wx_fmt=png&from=appmsg)

主板留有一个RTC电池座，使用CR1220电池，保证主板在断电情况下时间能正常保持。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadQABeEhcoKBFMdiaia0ic3FlvMzxISWZuxSvYmWZHlWIYj0kE4dkYlAdV7ZufXwEUzY7zNHwxLkpyM3JoO41ZuHyArd4GicQib0tic4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafGLlVWhPnPHHDE9F3vzObXiaWHqyLNqV4iaTZGFRU0gY6RZ2ZlcFseY3WKjneYQNCx3OeMrbSET1ENNSxBNibtZ4xyzEpXfPckn0/640?wx_fmt=png&from=appmsg)

RTC实时时钟参考原理图

接着是24Pin FPC 0.5mm上接MIPI CSI接口。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadKbE7GicrOvicRLcor6DmjhFST0hVQDWVBWeia1MvmHSK6nSUJsVm4BvhvYgqseLZqPjx7LeAHjWE1Td47b006fzm2iacbvApTkjw/640?wx_fmt=png&from=appmsg)

然后是PH2.0-2P米白色弯针，单声道扬声器接口，支持4Ω@3W输出。

板上搭载了⼀个RISC-V Debug 1x3x1.25mm接⼝，UART波特率为115200。

还有个复位按键，开机状态下按下Reset，系统复位。

板载星闪模组，⽀持2.4GHz WLAN+BLE+SLE，外置1个IPEX⼀代天线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaePeKdA2NOwzy97shHw3EGtrvMYlvafVjficCPsUic4TMdebfkGXCfphekbHicjUBp1zROaQJj2xFGd0mlvYS5mhLx0dicSMHuR1FE/640?wx_fmt=png&from=appmsg)

星闪模组来个特写，把它单独做成一个小板焊接在咱们的底板上。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niae7EYYyhSRMDqgIoRlrj1FXiclfhlwFxGXP3Z0FBsoj2KIHic4WGbZWIU3XYYDcYLsbys7GvyqTeNibvY26v58vS5WC3vKIsSsV3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacg0CvdzcVJdYzg57O8CicuO6iaicCk3UO8Wy0zLpOyejfY2MsABpnZ4DRA1cJ4twGYLku92yYlVEpwmQxjzzum0Ir2WEEMNg5LxU/640?wx_fmt=png&from=appmsg)

天线IPEX参考原理图

主板搭载了4G中国移动ML307R模组（CAT1）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadnrtZVwc16Tk4NUE8RibLu5MuIy9hTK8f3t1Shib44cuxID4SKIbnBtgGmcLSLX0gtaQiaPn6ViawCeTzyaZL8ibU4xzribF9Eqibyas/640?wx_fmt=png&from=appmsg)

同时提供了MINI-PCIE连接器可⾃主选择4G模块，如：EC20等。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacfLKDARLAyRU1C9icIA9PtjsbUlqdS0bOpfP6aQ4ic42TxiaW3AVg9IcXVX7rDTXYB41r7WsM1RHWWAtpfaG5hRXQtopouaCgDTI/640?wx_fmt=png&from=appmsg)

板子背面的工艺同样精湛。核心板引出的蛇形走线清晰可见，这一设计不仅满足了信号等长处理的技术要求，其规整的布局也令人赏心悦目。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadS9OqJ6VHOBRHQndeuAoV4qGhvZpjWaCVBWCo0HQ1Xev4zFvdu7EpDxqu74Yb1fTeVKDicGxoqGR1VoR5boeCmq466IalBpJrE/640?wx_fmt=png&from=appmsg)

主板背面还有个FEL按键，是烧录按键，用于通过USB升级烧录系统固件。断电情况下按住烧录键，电脑连接主板USB OTG接口（侧立的Type-C口）再给主板通电，主板进入USB烧录模式后，用烧录工具进行系统烧录。

旁边还有一个SIM卡槽，可插入SIM卡实现无线联网，使设备在没有Wi-Fi的现场环境下也能保持联网。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafFicCXPQ5iaWJCJEDEgs2IS9s0BmQDozNVsxEdH07Bat93woEow8Y6eKibpLThvCG4UNQBd1VHf8O2iaKKia3u12sjibrmXiaZrd35KA/640?wx_fmt=png&from=appmsg)

更有意思的是，他们还做了一块IO拓展板，把CAN、RS232、RS485这些工业现场常用的总线接口都做了出来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadgwSQpAXV8nhxNqUniczVt93u51upsw7blrBtyib34L7dVaVs393QSbC0RcZhm9nckFxqCMG3VwmXyAg5DK5oCIiauXy8oGMuYL4/640?wx_fmt=png&from=appmsg)

IO拓展板正面

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacia12LVzjaicwJ4XKzOHeGoTVjZeYa8ZciaNp3brxs1uicibL1f2VicN4CicJHpQxGGvRD9L0U7NulM6bFCAMZKhhw7l1OSsicq2LO4PM/640?wx_fmt=png&from=appmsg)

IO拓展板背面

你可以直接插在底板上进行测试，非常方便。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac5M3B1x9eK6FOkia7jFfqNgQh8fia9kMFEHI1JIhYvibejQrqrsEWK6hOATGt0E8qkybp8OiaUa1GOIbraUVsAGMomz5P7hBa83bM/640?wx_fmt=png&from=appmsg)

底板+IO拓展板海岸线接口

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacf2KzcsmkaNg97NPCd15XD7emiclCIHciaGEuwNggialqkqUMSHlH8zBSkP48I9T2AHIibIeicw4ibI1W5VEwRfNgc8TXOiaJNqEH0rc/640?wx_fmt=png&from=appmsg)

底板+IO拓展板内部接口

配上这块7寸MIPI屏（分辨率1024x600），调试更轻松。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadqKKnLUzPm76oIaVQYibREU4ictc7fRAD79Czric3SDDhtS6YACD26KLLoyMpsSu2X3hwtzDFzk3QWdfN5rSB7ickHc24a0hcX4hI/640?wx_fmt=png&from=appmsg)

7寸MIPI屏

搭配OV5648摄像头，支持**自动对焦**功能，能够通过**MIPI CSI-2串行接口**输出图像数据。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeXILQrdUJ9a6swviaWy4bX5zLtOaVftRT6GiarzJuuJkjBVpPcJlXkPCH3uuWYaLoLM6icwxjfbDYxJ5szVU60CY8VEROf3cGD7g/640?wx_fmt=png&from=appmsg)

OV5648摄像头

最后来一张全家福。配齐了12V电源、USB TYPEC 调试线、7寸MIPI屏、摄像头和IO扩展板这些常用件，测试这个芯片平台就更方便了！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadsGQt83sMbEM86phoJFykmfM3qmrh2PNxQQrAEE65iau5JgUxViacgog5uOLvcEMJh7glR8Ypjs0vZsicaNovrhCZY79efHzD7dk/640?wx_fmt=png&from=appmsg)

全家福

对于我们硬件工程师来说，这块底板**最大的价值在于它是一个活的参考设计**。如果你计画自己设计底板，完全可以照着它的原理图来画或者在他们提供的原文件原理图和PCB基础上进行更改。

更贴心的是，他们提供的文档里包含了一份**《底板原理图CheckList》**，把你设计底板时容易踩的坑，比如哪里该加浪涌保护，哪里接口必须引出，电平是否匹配等关键点都列了出来。按照这个清单检查一遍，能大大降低板子异常工作的风险。毕竟，核心板的设计和制造难度大，交给专业的厂家做，我们专注于自己擅长的底板和应用开发，这个合作模式效率最高。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadxNZcx654ggK0d5wPU7WUL9Eic23DYKmw0k17heQ8ST33pOAl7PNBOaua7828oDpVmcDYfEkqtb12Gic9BCFzFMAuSc93raY0s8/640?wx_fmt=png&from=appmsg)

截取部分底板原理图CheckList

02

资料与服务：新手友好，老手省心

除了我上面介绍的开发参考底板实物及原理图和PCB图，大家也可以通过这些资料熟悉常见的接口电路。  

当然，一个开发板好不好用，除了硬件本身，资料是否齐全、有条理也很重要。打开触觉智能提供的资料包，能感觉到他们是按工程师的使用习惯来整理的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadVAEhbySY2KMQIIrBGsEanMTOzNZMj4EVgbQxe5UMGT9Hvq9QFkGly1PtHRg1vy4GZribmibqrmPnjkMiau5sZhgZ9ymBLLxr0Uc/640?wx_fmt=png&from=appmsg)

对于刚接触这颗芯片的朋友，建议直接看**开箱必读**，它会一步步告诉你如何连接电源、调试串口、烧录固件，让你在半小时内就能让系统跑起来。

如果你打算基于它做产品，那**设计资料**文件夹里的内容就很有价值了。里面不仅包含了上面提到的底板原理图、PCB、CheckList，还有芯片的原厂数据手册、参考设计。软件方面，Linux BSP源码、编译工具链、外设驱动例程也都打包好了。

**软件方面，资料同样很全，一张图就能看明白他们支持的系统：**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niackvcgdOpH4WnJAZOWO9nLq877EawvL3VbIKDpToPH3MvlMX38UyMzibmrAImZZhQfSZQ9lW0vP7KU689kq6RSuIyxc61C4YrnQ/640?wx_fmt=jpeg&from=appmsg)**

**1、****Linux系**：Ubuntu，Buildroot和OneOS都有，想做复杂应用或者轻量系统都能满足。

**2、裸机/实时系**：Baremetal和RTOS也安排上了，适合对实时性要求高的场景。

**换句话说**，不管你打算跑完整的Linux做HMI，还是想用RTOS做裸机实时控制，这套软件资料都给你准备好了，不用自己从头折腾。

03

小结

总的来说，这套方案给人的感觉是：**从芯片选型，到核心板设计（接口丰富、尺寸小、抗干扰），再到开发板配套（功能验证、参考设计），最后到文档支持（条理清晰、有CheckList），形成了一个比较完整的闭环。**

如果你正在为**工业HMI，工业PLC，**机器人伺服电机控制，网关或者数据采集类产品选型，不妨关注一下触觉智能的基于SOM5301-S1核心板和基于EVB5301-V1开发板。****

如需选购T153核心板及配套开发板进行评估验证，可登录硬十官方淘宝店购买。

**▼**欢迎关注硬十官方公众号，获取更多精彩产品资讯**▼**