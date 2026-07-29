# 五种总线协议（UART、RS232、RS485、IIC、SPI）

原创 电路一点通 2025-04-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/68\_WbaXKkmVWn6p5oMiHlQ](https://mp.weixin.qq.com/s/68_WbaXKkmVWn6p5oMiHlQ)

串口通信（UART），顾名思义也就是利用串行接口进行通信。串行接口指串口按位（bit）发送和接收字节。尽管比按字节（byte）传输的并行通信慢，但是串口可以在使用一根线发送数据的同时用另一根线接收数据。  

串口通信中比较重要的参数包括波特率、数据位、停止位及校验位，通讯双方需要约定一致的数据格式才能正常收发数据。串行通讯可以进一步分为单工、半双工和全双工三种。在串口通信中，常用的协议包括RS-232、RS-422和RS-485。它们的主要区别在于其各自的电平范围不相同。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\五种总线协议（UART_RS232_RS485_IIC_SPI）_images\img_000_aa8e490e8435.png)

**1、同步通信和异步通信（同步信号有时钟信号，异步信号是使用固定的数据帧格式）**  
根据通讯的数据同步方式，又分为同步和异步两种。可以根据通讯过程中是否有使用到时钟信号进行简单的区分。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\五种总线协议（UART_RS232_RS485_IIC_SPI）_images\img_001_831e1754ba8a.png)  
异步通信：  
在异步通讯中，不使用时钟信号进行数据同步，它们直接在数据信号中穿插一些同步用的信号位，或者把主体数据进行打包，以数据帧的格式传输数据。例如规定由起始位、数据位、奇偶校验位、停止位等。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\五种总线协议（UART_RS232_RS485_IIC_SPI）_images\img_002_901ffb92b8b1.png)

 **2、串行通讯（单工通讯、半双工、全双工）**

单工通信：信息只能单方向传输的工作方式，一个固定为发送设备，另一个固定为接收设备，发送端只能发送信息不能接收信息，接收端只能接收信息不能发送信息，只需一根信号线

半双工通信：可以实现双向的通信，但不能在两个方向上同时进行，必须轮流交替进行，其实也可以理解成一种可以切换方向的单工通信，同一时刻必须只能一个方向传输，只需一根数据线

全双工通信：在同一时刻，两个设备之间可以同时收发数据，全双工方式无需进行方向的切换，这种方式要求通讯双方均有发送器和接收器，同时，需要2根数据线。  
![单工、半双工、双工](D:\电脑文件\公众号知识库\电工_教育_学习\五种总线协议（UART_RS232_RS485_IIC_SPI）_images\img_003_2c3d356c70e6.jpg)

#### **3、 波特率**

  字符帧是按位依次传输，波特率即传输字符帧时的位速率，单位为bit/s。通信双方要使用相同的波特率，常用的波特率如9600、115200。

  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\五种总线协议（UART_RS232_RS485_IIC_SPI）_images\img_004_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

**## **一点通推荐[👍👍👍](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3409785953525891079&scene=173&subscene=&sessionid=svr_03f04b159f2&enterid=1729216795&from_msgid=2247525041&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**


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
    
    ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\五种总线协议（UART_RS232_RS485_IIC_SPI）_images\img_005_b46e8bcc08e0.jpg)
    
    ******进大家庭⭕圈探讨回复:************交流******
    
      
    

分享💬点赞👍在看❤️**