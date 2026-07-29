# AC 220v交流电，开关电源EMC设计方案

原创 电路一点通 2025-03-20 11:35 广东

> 原文地址: [https://mp.weixin.qq.com/s/gMa\_IYpFN0b-LlHtbdJW8A](https://mp.weixin.qq.com/s/gMa_IYpFN0b-LlHtbdJW8A)

AC220V电路2KV防雷滤波设计  

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_001_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_002_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_003_659969ac15d4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_000_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_004_659969ac15d4.png)****  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_005_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  
图1 AC220V电路2KV防雷滤波设计

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_006_458aa857bf67.png)

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_007_0e0654beacb7.png)

 图2

接口电路设计概述：

交流电源接口通过电源线与电网连接为电气设备提供电能，产品在工作中产生各种干扰，如电源变换电路、高频变压器、数字电路等产生的干扰，这些干扰通过电源接口形成对电网的传导干扰以及对空间的辐射干扰；

当电网上有大功率感性负载通断或电网遭受雷击时，会在电源接口产生瞬态的脉冲干扰和浪涌干扰，若电源接口不进行防护滤波设计，这些干扰容易影响产品的正常工作，雷电干扰甚至能损坏设备，因此交流电源接口需要进行电磁兼容设计，确保设备工作稳定；

本方案从EMC原理上，进行了相关的抑制干扰和抗敏感度的设计；同时兼容接口防雷设计；本方案防雷电路设计可通过IEC61000-4-5标准，共模2000V，差摸1000V的接口防雷测试。

电路EMC设计说明：  
1.电路滤波设计要点：

L1、C1、C3、C4组成第一级滤波电路。C1为差模滤波电容，主要滤除差模干扰；C3、C4为共模滤波电容，为共模干扰提供低阻抗回路；L1为共模滤波电感，对共模干扰进行抑制。

L2、C2、C5、C6组成第二级滤波电路，C2为差模滤波电容，主要滤除差模干扰，C5、C6为共模滤波电容，为共模干扰提供低阻抗回路，L2为共模滤波电感，对共模干扰进行抑制；

若产品功率大，干扰强，单级滤波插入损耗有限，则设计前期需要考虑多级滤波；  
C19为整流桥的高频滤波电容，一般采用小电容，主要为整理桥的高频谐波电流提供回流路径；

C20为变压器的高频滤波电容，一般采用小电容，主要为变压器的高频谐波电流提供回流路径；

C15和R13组成续流管上的削尖峰电路，C15电容典型取值为1000pF，R13电阻典型取值为10Ω；

C12和R12组成PWM控制线上的滤波电路，C12电容典型取值为47pF，R12电阻典型取值为10Ω，其值可根据后续测试情况进行调整；

L4和C8组成输出端滤波电路，主要为输出端口进行共模和差模滤波；

各种功能地通过电容连接，电容典型取值为1000pF，其值可根据后续测试情况进行调整；

2\. 电路防护设计要点

RV1、RV2、RV3、GDT1组成第一级防护电路，其中RV1进行差模防护、RV2、RV3、GDT1进行共模防护。

RV2、RV3、GDT1防护器件会导致绝缘耐压试验不能通过，当接口需要考虑绝缘耐压试验时建议去掉RV2、RV3、GDT1三个元器件。

3.特殊要求

电路中所有的电容应符合安规的要求，差模电容选取额定电压250V以上X电容，共模电容选取额定电压250V的Y电容；

因为压敏电阻失效模式为短路，可能会造成大电流，所以需要增加保险丝F1，并且保险丝F1位置要靠近接口放置。

4.器件选型要点

交流电源接口电路中的Y电容（C3、C4和C5、C6）容值选取范围为100pF~4700pF，典型值选取2200pF；

交流电源接口电路中的X电容（C1和C2）容值选举范围为0.1μF~2.0μF第一级中的X电容C1典型值选取0.33μF，第二级滤波中的X电容C2典型值选取1.0μF；

L1、L2、L4为共模电感，共模电感感值范围为100μH~30mH，典型值选取15mH；

输出端的滤波电容C8取值范围为100PF~0.1uF，典型取值为10nF；

RV1、RV2、RV3压敏电阻选择压敏电压范围466V~616V，典型值选取550V，压敏电阻RV1的通流量(10次冲击)选择大于等于167A，压敏电阻RV2、RV3的通流量(10次冲击)选择大于等于167A；

GDT1气体放电管选择直流击穿电压为466V~616V，典型值选取550V，通流量选择大于等于167A。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
      
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_220v交流电_开关电源EMC设计方案_images\img_008_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**