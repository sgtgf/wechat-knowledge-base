# DSP 片上串行通信外设各模块的功能、 结构特点、 工作方式

原创 电路一点通 2025-03-05 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/e0QrYRPDQ5JRxVWxKFkh9A](https://mp.weixin.qq.com/s/e0QrYRPDQ5JRxVWxKFkh9A)

学习本章要从了解各模块的功能、 结构特点、 工作方式入手， 并结合给出的应用实例，掌握片内各外设的主要作用和特点， 理解片内外设的配置和使用方法， 掌握外设寄存器的配置和编程技巧。 在熟读例程的基础上， 练习自己编写通信程序， 深入理解各模块的用法。

       资料        

  **👇**👇**👇****** 

 **文末** 

**7\. 1 串行外设接口 （ SPI）**

7\. 1. 1 SPI 模块概述

串行外设接口 （ Serial Peripheral Interface， SPI） 是一个高速同步的串行输入 / 输出接口，通常用于 DSP 与外设或其他处理器之间的通信。 其通信长度 （1 ～ 16 bit） 和通信速率都是可编程的。 SPI 可采用主 / 从模式实现多处理器通信， 典型的应用包括扩展 I / O、 移位寄存器、显示驱动器、 模 - 数转换器 （ ADC） 等器件的外设拓展。 C28x 系列 DSP 的 SPI 支持 16 级深

度的发送和接收 FIFO （ 先入先出） 以减小 CPU 开销。

  

1\. 增强型 SPI 模块概述

SPI 与 CPU 接口如图 7-1 所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_000_f11f9c479187.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_001_618c54e40153.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_002_354ee77c0fe3.png)

**多通道缓冲串行口 （ McBSP）**

7\. 2. 1 McBSP 概述

2833x 系列器件提供了两个高速多通道缓冲串口 （McBSP）， 可以与 CODEC 或系统其他器件直接相连。 McBSP 包含了与器件相连接的数据端口和控制端口， 共 6 个引脚， 如图 7-14所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_003_9cb74100620b.png)

**McBSP 有如下特性：**

● 全双工通信方式。

● 双缓冲发送数据和三缓冲接收数据， 允许连续数据流操作。

● 发送和接收具有独立时钟和帧同步的信号。

● 具有向 CPU 传送中断请求和向 DMA 控制器传送 DMA 事件的功能。

● 128 个发送和接收通道。

● 多通道选择模式可以允许或禁止每一通道的传输。

● 与工业标准的 CODEC、 模拟接口器件 （ AIC） 及其他串行接口 ADC 模块和 DAC 模块直接连接。

● 支持外部的时钟信号和帧同步信号。

● 内有可编程的采样率发生器， 用以发生和控制内部时钟信号及帧同步信号。

● 帧同步信号和时钟信号的极性可编程。

● 与 T1 / E1 帧调节器、 IOM - 2 兼容设备、 AC97 兼容设备、 I2S 兼容设备、 SPI 设备的直接连接。

● 数据长度选择范围宽可以是 8、 12、 16、 20、 24、 32 位。

● μ - 律和 A - 律格式数据压缩扩展。

● 发送或接收 8 位数据时， 可以先传送最低有效位。

● 有异常 / 错误状态标志位。

● 不支持 ABIS 模式。

串行通信接口 （ SCI）

**7\. 3. 1 SCI 模块概述**

串行通信接口 （ SCI） 是一个两线制异步串行接口， 即通常所说的 UART 口。 SCI 模块支持 CPU 和其他使用标准不归零码 （ NRZ） 的异步外设之间的数字通信。 SCI 的接收器和发送器各自具有一个 16 级深度的 FIFO， 从而减小了 CPU 开销， 并且它们都有独立的使能位和中断位。 两者可以独立地进行半双工通信， 或者同时进行全双工通信。

为了保证数据的完整性， SCI 模块对接收到的数据进行间断检测、 奇偶校验、 溢出以及帧错误检测。 通过配置 16 位的波特率选择寄存器可以设置不同的 SCI 通信速率。

1\. 增强型 SCI 模块特征

SCI 模块与 CPU 的连接如图 7-29 所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_004_c2c160c874fd.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_005_5cdeb172ed6e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_006_a341ab98d486.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_007_c17d3b6ecdba.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_008_88990490cc92.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_009_3ade2141bf7c.png)

**DSP原理及应用——跟我动手学TMS320F2833x（411页）.pdf**

**如何领取资料**

  

下载链接：

https://pan.quark.cn/s/ca80210d7497

![](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_010_df31923a0fc8.png)

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_012_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_011_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_013_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_014_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_015_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_016_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## **一点通推荐**

-   [  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=1&sn=26e51cee715c5eff0716b0edf4a1b138&scene=21#wechat_redirect)[3种DCDC BUCK降压电路（48V转12-15V）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=1&sn=26e51cee715c5eff0716b0edf4a1b138&scene=21#wechat_redirect)
    
-   [继电器模块电路设计和分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539089&idx=1&sn=f5ed4224aeb672516538ec0e14c41dad&scene=21#wechat_redirect)
    
-   [汽车整车基本构造透视图（英汉标注版）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247513182&idx=1&sn=2724310aa9f3e7b4112d6c9290888df1&scene=21#wechat_redirect)
    
-   [汽车轮胎知识(参数、花纹、日期），教你看明白](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247512221&idx=1&sn=0f43e0ee0285d521365678b47f381a05&scene=21#wechat_redirect)
    

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\DSP_片上串行通信外设各模块的功能__结构特点__工作方式_images\img_017_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**