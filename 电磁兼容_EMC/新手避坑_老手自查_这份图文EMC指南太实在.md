# 新手避坑、老手自查：这份图文EMC指南太实在

原创 王工 硬件笔记本 2025-12-16 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/rJli1IlONn9QYmb9i0V5bg](https://mp.weixin.qq.com/s/rJli1IlONn9QYmb9i0V5bg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  
大家好，我是王工。

今天跟大家再聊聊EMC这个话题，这应该也是不少咱们工程师朋友在实际项目中经常遇到的挑战。正好最近翻到一份不错的资料，整理得挺清晰实用，想着借这个机会分享出来，也结合自己遇到的一些情况聊聊体会。

  

01

前言

咱们搞硬件项目，最让人头疼的就是EMC整改测试。每次新项目第一次送实验室，十有八九都会被打回来，总得来回折腾好几轮才能过。所以在正式认证送测前，我们自己都会先做摸底测试，也算是心里有个底。

前几天，咱们技术群里一位群友分享了一份赛元官方的EMC资料，我翻看了一下，觉得真心不错，图文并茂，是一份很好的实用的资料。

比如说电源滤波这个老生常谈的问题，文档里就画了两张对比图：一张是正确的接法，电源线必须先经过电解电容和那个小小的104瓷片电容滤波，再进到MCU的VDD和VSS脚；

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgGPx2NMjUC986HaHjr783Bz7xR1q7DoXEGNvbFpHiaUveVTvmS3EAsHYkZEwbbH3icKqT5mpcwxpwA/640?wx_fmt=png&from=appmsg)

另一张是错误示范，电容被晾在走线旁边，成了摆设，电根本没被滤干净就进了芯片。建议也可以把电解电容换成钽电容，容值别小于10uF。这种表述，新手看了能照着做，老手看了也能会心一笑，检查一下自己有没有无意中犯过这个错。

这让我想起之前一个挺折腾的案例。有个项目做了挺久的，光EMC摸底就花了两周，问题卡在HDMI的辐射超标上。我们试了各种办法，在电路上加滤波、加屏蔽、换磁环，能想到的都试了，结果折腾了半天，最后发现是HDMI线本身的问题。换了几种不同品牌和屏蔽层处理的线材，才终于把辐射压下去。所以你看，EMC这事儿，有时候问题不一定出在你的板子上，外围的连接线、结构，甚至是一个不起眼的接插件，都可能成为突破口。

  

02

内容简介

这份《赛元EMC性能优化指南》好就好在，它把这类复杂的EMC问题，系统地拆解成了四个主要方面，分别是：

**第一部分是EMI（电磁干扰）**，简单说就是你的设备别去干扰别人。文档介绍了传导骚扰、辐射骚扰、骚扰功率这些常见测试是怎么回事，然后重点告诉你硬件上该怎么布线、电源怎么滤波、器件怎么布局。如果测试超标了，它还教你怎么一步步定位问题：是不是MCU的系统时钟或触摸扫描频率的倍频引起的？并给出了降低时钟频率、调整触摸扫描频率等解决办法。

### ****第二部分是CS（传导骚扰抗扰度）**，考察的是你的设备抵抗外界射频干扰的能力。文档列出了测试等级和标准，然后给出通用的改善方法，比如给电缆加滤波器或磁环、优化电源滤波电路、注意PCB敷铜的方式等。特别实际的是，它还针对“触摸按键”应用给出了专项优化建议，因为触控在干扰下容易误触发。它建议可以在触控通道上串联一个电阻，阻值在510Ω到5.6K之间调整，同时软件上也可以增大触发阈值和确认次数，让按键更抗干扰能力更强。**

### **![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgwdX20YBCtFIIQssmJ3FELRKpMCuJFJ3XzTFjr307D8RE5WwwBkWu7BBfmMkj0qMhcLTPZ98vAibQ/640?wx_fmt=png&from=appmsg)**

**第三部分是EFT（电快速瞬变脉冲群抗扰度）**，模拟的是电网里开关频繁动作时产生的一连串尖峰脉冲干扰。这部分再次强调了电源滤波电路的正确布局是关键，一定要避免电源和地形成大的环路，把MCU包在环里。同时，软件上也要配合：没用的IO口设成固定输出状态、通信协议里加入容错机制、把看门狗定时器用起来，这样系统受到干扰后能自己恢复正常。

### ****最后是ESD（静电放电抗扰度）**，防静电是产品可靠性的基本要求。文档从芯片级的测试模型讲起，然后重点落在PCB设计和结构设计上。PCB上怎么通过敷铜、分区、增加ESD防护器件来引导和泄放静电；结构上怎么通过绝缘处理、金属接地、保持安全距离来避免静电引入电路。软件上也提供了一些加固思路，比如IO口初始化状态设置好、通信加入校验和重发机制、ADC采样做软件滤波等。**

###   

### 

03

资料领取

如何下载《赛元EMC性能优化指南》，更好的学习EMC基础相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|赛元EMC性能优化指南

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgwdX20YBCtFIIQssmJ3FEL4ib0ClXg9KmoTw5bx1vWy7so2LM6fick9WrRqsPtN6uRD5HFOgQ2y0zw/640?wx_fmt=png&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgwdX20YBCtFIIQssmJ3FELYtjA7MOaY9o7NdbRPIrbRfVxsMVsSbaA1K4eZyo04Wk66YuWSspZgg/640?wx_fmt=jpeg&from=appmsg)

注：文档源于赛元，版权归原作者所有，此处提及的PDF仅用于学习交流，请勿用于商业用途。