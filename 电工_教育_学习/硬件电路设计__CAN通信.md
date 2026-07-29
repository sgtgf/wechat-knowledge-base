# 硬件电路设计--CAN通信

原创 电路一点通 2025-04-18 12:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/U-X0UGj2jIU8QUD6vv6Dgg](https://mp.weixin.qq.com/s/U-X0UGj2jIU8QUD6vv6Dgg)

**1 简介**  

  
CAN通信时一种工业控制通信系统，最早时应用于汽车电子产品。CAN总线主要的特点：

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

**传输距离远，最远可达10km。  
**

**  
CAN总线抗干扰能力强，有有效保证整个系统的稳定性。  
CAM总线传输的速度快，理论上峰值可以达到1Mbps，能有效保证数据通信的即时性。  
**

**  
单条总线上，支持128个节点。**  

  
         CAN总线有两条控制线：CAN\_H和CAN\_L，是控制器局域网络的总称。在工业控制领域中，CAN通信的应用是非常广泛的，其通信的原理也比较简单，具体的过程：总线上的节点向其它节点发送数据时，传递的信息将会以报文的形式在总线上进行广播，总线上的每个节点在接收到数据之后，会根据过滤器来接收自己需要的报文。CAN通信是一种异步通信的方式，并不依赖于时钟进行通信，这种通信的方式对外部的电磁干扰是高度免疫的，主要是因为两条总线使用的是差分通信的方式，可以抑制共模干扰，且外部使用的是屏蔽双绞线，对于同一干扰源，对两条总线的干扰时相同的，故可抵消。CAN总线物理层的形式主要两种方式：闭环网络总线和开环网络总线线。

CAN通信这两种物理连接方式主要的差别在于两条总线是否构成一个完整的环路。

  

**闭环通信方式通过两个120欧姆的电阻将两条总线闭合形成一个完整的环路。  
开环通信方式在两边总线上分别串联一个2200欧姆的电阻。**

  

  
CAN总线的电平标准如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_001_423d8d9d0005.png)

**2 硬件电路设计  
**

**  
2.1 隔离CAN电路设计**  
         此处我们以ISO1042BQDWVRQ1为例：

![](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_002_b68c02b1d68e.png)

具体的PIN脚定义如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_003_cbdb91a2889d.png)

 ISO1042BQDWVRQ1是带隔离的芯片，在电源的设计上需注意将5V\_CAN和12VBatt-与板载其它的电源隔离。

  

**共模电感**是为了滤除共模干扰。常见的终端**匹配电阻**为120Ω，目的是为了较少信号的反射。特别地，将120Ω电阻分为两个60Ω电阻，在搭配一个4.7nF电容（详情见上图），这样能有效滤除总线上的共模干扰。**二极管**D1是为了防止静电对电路造成损害。  

  
**2.2 CAN电路设计**  
在设计CAN电路时需要特别注意CAN\_Tx、CAN\_Rx的电平标准（常用的有1.8V、3.3V、5V）。

![](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_004_542562b48725.png)

**2.3隔离电源设计**  
       带隔离的CAN芯片，需要提供一个5V的隔离电源。此处，使用的方案是UCC12051DVE-Q1，是具体电路设计如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_005_caa3ffd4ad23.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[FOC少走弯路:硬件电路直接抄，要么就要原封不动复刻？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544235&idx=1&sn=11b2609f81f5c64c733288147a084b4b&scene=21#wechat_redirect)**
    
-   **[硬件设计常用接口引脚定义](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544235&idx=2&sn=649cc886fcd77fb4a26f048e18c6b405&scene=21#wechat_redirect)**
    
-   **[三极管驱动NMOS实现3.3V转24V电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544233&idx=1&sn=06790b765b2d25b49e94122665b81686&scene=21#wechat_redirect)**
    
-   **[电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)**
    
-   **[仰望U7 水平对置电动化发动机PK斯巴鲁、保时捷（全面分析对比](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517635&idx=1&sn=5a710ddcd76c009197074f074831d823&scene=21#wechat_redirect)**
    
-   **[汽车（轿车、跑车）动力传动系统构造透视图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517602&idx=1&sn=092e1bfd84da7aab9be94a05ea61205c&scene=21#wechat_redirect)**
    

**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\硬件电路设计__CAN通信_images\img_006_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**