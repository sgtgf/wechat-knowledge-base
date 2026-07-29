# 单片机I2C总线系统设计与开发

原创 电路一点通 2025-04-25 11:43 广东

> 原文地址: [https://mp.weixin.qq.com/s/DBhnFi1RqdTmc-HvQYeSgQ](https://mp.weixin.qq.com/s/DBhnFi1RqdTmc-HvQYeSgQ)

**目录**  

1.I2C总线介绍

2.I2C总线硬件接口设计

2.1单片机I2C总线接口引脚设计

2.2单片机I2C总线相关寄存器

2.3设计要点

3.I2C总线接口软件设计

3.1向无子地址器件发送字节数据

3.2从无子地址器件读字节数据

3.3向有子地址器件发送和接收字节数据

　I2C总线在如今比较流行的串行扩展总线中，以其严格的规范和众多支持I2C接VI的外围器件而获得了广泛的应用。它适合于较复杂单片机应用系统中元件与芯片之间的短距离通信，主要应用于板级的IC通信。本文介绍了基于单片机的I2C总线系统设计过程，其中包括了硬件和软件的设计。

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I2C总线系统设计与开发_images\img_000_916d53f8063e.png)

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I2C总线系统设计与开发_images\img_001_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**　**1.I2C总线介绍**

　　I2C(inter—integrated circuit)总线是一种由PHILIPS公司开发的两线式串行总线，用于连接微控制器及其外围设备。I2C总线产生于80年代，最初为音频和视频设备开发，如今主要应用于板级的IC通信需要，即主要被用作硬件系统中的电路板上各个IC芯片的相互通信的线路，I2C总线在系统设计中十分常见。

　　I2C总线最主要的优点是其简单性和有效性。由于接口直接在组件之上，因此I2C总线占用的空间非常小，减少了电路板的空间和芯片管脚的数量，降低了互联成本。总线的长度可高达25英尺，并且能够以l0kbps的最大传输速率支持40个组件。I2C总线的另一个优点是，它支持多主控(multimastering)，其中任何能够进行发送和接收的设备都可以成为主总线。一个主控能够控制信号的传输和时钟频率。当然，在任何时间点上只能有一个主控。

  
　**2.I2C总线硬件接口设计**

　　在进行I2C总线硬件接口设计时使用的是Philips公司生产的P89C66X系列单片机，其片内的I2C总线逻辑提供了符合I2C总线规范的串口，它们具有性能稳定、速度快、使用方便等优点。

  
　**2.1单片机I2C总线接口引脚设计**

　　P89C66X系列单片机有44引脚的LQFP封装和PLCC封装，其中P1.6/SCL和P1.7/SDA分别为I2C总线的时钟信号线和数据信号线，由于芯片内部都采用了漏极开路工艺，所以当把这两个引脚作为I2C总线的接口使用时，需要外接上拉电阻，如图1所示。

![P89C66X的I2C总线接口引脚](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5AnHNfEF0TicIjcfELicGFz0y0iaZYxg7zPd9zDibf9oZ1eaJeicvqU5U1Sw/640?wx_fmt=jpeg&from=appmsg "P89C66X的I2C总线接口引脚")

　　图1 P89C66X的I2C总线接口引脚

  
**2.2单片机I2C总线相关寄存器**

　　P89C66X系列单片机内部与I2C总线相关的寄存器共有4个，其功能列于表1，通过对这4个寄存器的编程实现I2C总线的功能。

　　表1 I2C总线寄存器

![表1I2C总线寄存器](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5zDWuCpIqFWGLzdsmploLtZWB8VZP6mnNQyC3FAiaaGlmaJZ8wVd8Oxg/640?wx_fmt=jpeg&from=appmsg "表1I2C总线寄存器")

  
　**2.3设计要点**

　　在硬件系统中应用I2C总线进行连接控制，可以有效的减少单片机I/O端口资源的占用，这在单片机应用中是十分重要的，这也是I2C总线得以广泛应用的主要原因。此外，I2C总线在设计思想上也是十分突出的，其模块化的设计思想符合硬件系统设计的潮流。应用I2C总线进行设计，可以将整个硬件系统分为不同的功能模块，每个功能模块分别设计，不会受到其它模块的影响，设计完成后，使用统一的I2C总线接口连入系统，这样的系统各个部分不会相互干扰，每一个模块只与自身电路相关，大大简化了设计和调试的过程，也提高了通用设备的复用率。

  
**3.I2C总线接口软件设计**

　　针对P89C66X系列单片机的I2C总线进行软件程序设计，首先要了解I2C总线的26个状态，其次要根据应用中要求的模式来设定各个寄存器，最后编写出完整的应用程序。下面是P89C66X系列单片机的I2C总线以主模式工作的软件设计方法。

  
**3.1向无子地址器件发送字节数据**

　　当单片机在主模式下向从器件发送字节数据时，首先，单片机要申请总线，在得到总线的控制权后，发送器件的7bit地址编码，这时判断状态寄存器SlSTA的值是否为0x18(0xl8代表的状态为主器件已经发送SLA+W，并且收到应答)，如果不是0x18，则表示发送发生错误;如果是0x18，则继续发送数据字节。然后判断S1STA的值是否为0x28(0x28代表的状态是主器件已经发送数据寄存器SIDAT中的数据，并受到应答)，如果是0x28，则表示发送数据成功，此时要将控制寄存器SICON的SI复位，结束此次传送。

  
**3.2从无子地址器件读字节数据**

　　当单片机在主模式下向从器件读字节数据时，单片机在申请到总线后发送从器件地址，随后检测总线状态，如果S1STA寄存器的值为0x40(0x40代表的状态为主器件已经发送SLA+R，并且收到应答)，表明地址发送成功，程序准备接收数据字节，否则表示发送发生错误。程序在接收字节后判断SISTA的值是否为Ox58(0x58代表的状态是主器件已经收到数据字节，并返回应答)，如果是0x58，则表示发送数据成功，此时要将控制寄存器SICON的SI复位，结束此次传送。

  
**3.3向有子地址器件发送和接收字节数据**

　　在I2C总线器件中，每个器件除了拥有其自身的从地址外，部分器件还可以具有子地址。在对子地址指向的空间通信时，主器件需要依次发送从地址和子地址才可以正常寻址。其实现过程与前面发送和接收字节的过程基本相同，只是要注意发送器件从地址后，还要发送一个子地址信息才可以继续发送或者接收数据。其编程流程如图2所示。

![有子地址器件发送和接收数据流程图](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5djJYs39ZJeXgxK7HBM3L3UTo61eseoVE7iacqhqFia82GNXxKy29ibC1A/640?wx_fmt=jpeg&from=appmsg "有子地址器件发送和接收数据流程图")

　　图2 有子地址器件发送和接收数据流程图

  
**总结**

　　以上就是基于**单片机**的I2C总线系统设计与开发介绍了。在进行I2C总线的设计与开发时，需要首先将整体系统的功能进行划分，对各个不同的功能部分进行独立的设计，最后使用12C总线接口将整个系统连接到一起。值得注意的是，在设计的过程中，每完成一个功能模块的设计，就应该进行调试，直到完全达到设计的要求，再开始下一个模块的设计，这样所有模块设计完成后，可以直接连入系统进行最后的整合工作，如此整个调试过程中出现的任何问题都可以直接找到对应的部分，降低系统调试的难度。

  

  注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。。

## **一点通推荐[👍👍👍](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3409785953525891079&scene=173&subscene=&sessionid=svr_03f04b159f2&enterid=1729216795&from_msgid=2247525041&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**

  

-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)【资料可领取】  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)【资料可领取】
    
-   [西门子PLC高级应用实例精解\_第2版-368页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257003&idx=2&sn=c2313e1bec3e59a63fa08faea4ca528d&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    
-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   [ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&scene=21#wechat_redirect)【资料可领取】
    
-   [高效微逆变器设计（原理图+程序+上位机等）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=2&sn=8fcb9c897e4cc82906451def4a597f1b&scene=21#wechat_redirect)【资料可领取】
    

-   [【华为技术】信号口防雷电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544474&idx=2&sn=f6c0065e381c9fa3275154ad9abedfb0&scene=21#wechat_redirect)【资料可领取】
    
-   [（TL431)开关电源环路设计要点PDF](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544590&idx=2&sn=d00339e654e3fc4a8ef92107e9789d1e&scene=21#wechat_redirect)
    
-   [三菱FX2N PLC应用入门-步进指令梯形图编程PPT](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257151&idx=1&sn=ec4cbb9859570f15968a2e1e18882f6f&scene=21#wechat_redirect)
    
-   [电工实用手册 -532页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257006&idx=2&sn=9f8c8197346caec98132a6f9b66fb918&scene=21#wechat_redirect)
    
-   [TL494 反相降压-升压转换器电路工作原理、电路设计、计算、测试](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544805&idx=1&sn=3c4b3a57e91c7d10a82e2ffee83fc504&scene=21#wechat_redirect)
    
-   [一文看全MOS管（NMOS、PMOS、三极管跟mos管的区别）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544346&idx=1&sn=5ed25b7974fabec0723cbc9ba87e0c52&scene=21#wechat_redirect)
    
-   [FOC少走弯路:硬件电路直接抄，要么就要原封不动复刻？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544235&idx=1&sn=11b2609f81f5c64c733288147a084b4b&scene=21#wechat_redirect)
    

-   **[汽车发动机(Engine)构造-气缸排列形式(V、W、水平对置)零部件示意图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247518194&idx=1&sn=1fcdb6be0c45ade80d246c71a0c83495&scene=21#wechat_redirect)**
    
-   **[汽车车型分类，一图看懂 ABCD级别车区别](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247518044&idx=1&sn=ee81b878aaaa3efbc71f227e25880755&scene=21#wechat_redirect)**
    
-   **[仰望U7 水平对置电动化发动机PK斯巴鲁、保时捷（全面分析对比）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517635&idx=1&sn=5a710ddcd76c009197074f074831d823&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I2C总线系统设计与开发_images\img_005_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️