# 4.2V单节锂电池充电电路、USB与锂电池切换电路

原创 电路一点通 2025-04-16 11:45 广东

> 原文地址: [https://mp.weixin.qq.com/s/HTswBhprj-Cv6vagk6Qt7A](https://mp.weixin.qq.com/s/HTswBhprj-Cv6vagk6Qt7A)

### 目录

1.  一、充电原理图
    
2.  a、DW01
    

1.  b、8205S
    
2.  c、TP4056
    

1.  1、连接说明
    
2.  2、芯片介绍
    
3.  3、电路解析
    

5.  二、USB与锂电池切换电路原理图
    
6.  a、USB插入
    

1.  a、USB拔了
    
2.  c、VD4二极管的作用
    

1.  1、连接说明
    
2.  2、电路解析
    

9.  三、应用案例
    

## 一、充电原理图

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_000_41c9c191c6ce.png)

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_001_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

### 1、连接说明

BAT\_VCC和BAT\_GND连接电池  
VUSB和GND连接USB电源

### 2、芯片介绍

#### a、DW01

DW01芯片是一种电池管理保护芯片，主要用于锂离子电池的保护和管理。DW01芯片具有以下特点：

1.  电池电压保护：DW01芯片可以监测和保护电池的电压，当电池电压过高或过低时，芯片会切断电池的充放电，以保护电池避免过充或过放。
    
2.  充电保护：DW01芯片可以监测和控制电池的充电过程，当电池电压充到设定的阈值时，芯片会切断充电，以防止电池过充。公众号@电路一点通
    
3.  放电保护：DW01芯片可以监测和控制电池的放电过程，当电池电压放到设定的阈值时，芯片会切断放电，以防止电池过放。
    
4.  短路保护：DW01芯片具有短路保护功能，当电池短路时，芯片会切断电池的输出，以防止电池短路引发的危险。
    
5.  温度保护：DW01芯片可以监测电池的温度，并在温度过高时切断电池的充放电，以防止电池过热。  
    总之，DW01芯片是一种可靠的电池管理保护芯片，可以提供对电池的多重保护，确保电池的安全和稳定运行。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_002_950763541055.png)
    

#### b、8205S

8205为两个N沟道的mos管，它具有低导通电阻和高开关速度。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_003_4d312625d99e.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_004_6368a7d0764f.png)

#### c、TP4056

TP4056是一种集成了线性充电管理芯片的单体锂离子电池充电模块。该模块主要用于单体锂电池的充电管理，具有充电电流可调的特点。公众号@电路一点通  
TP4056模块的工作电压范围为4.5V至5.5V，充电电流范围为0.1A至1A。模块内部集成了充电管理芯片，能够自动识别电池电压并控制充电电流。当电池电压低于设定值时，模块会自动开始充电，直到电池电压达到设定值后停止充电。  
TP4056模块还具有过温保护、过电流保护和短路保护等保护功能。当温度过高或充电电流超过设定值时，模块会自动停止充电以避免损坏电池。同时，当短路发生时，模块会自动切断充电以保护电池和模块本身。  
TP4056模块小巧易用，可以直接插入电池进行充电。其主要应用于便携式设备、电子产品、充电电池等领域。

### 3、电路解析

TP4056和DW01提供充电双重保护，DW01提供过放保护，当电池电压低于DW01设定的保护电压时，DW01会关断8205MOS管，断开电池负极和电源负极的连接从而保护电池。如下图：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_005_b6da9577566d.png)

## 二、USB与锂电池切换电路原理图

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_006_794d7a83ef85.png)

### 1、连接说明

VBAT连接电池  
VUSB和GND连接USB电源  
PWR\_S1对负载供电

### 2、电路解析

#### a、USB插入

当usb插入时USB电压为5V 电池电压为4.2V，SS34压降为0.5V  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_007_b53146e00dbf.png)  
usb电压5V减去二极管VD3压降0.5V输出4.5V，所以二极管VD4截止，Q9 PMOS管关断，负载由USB供电。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_008_afa51f8f0602.png)

#### a、USB拔了

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_009_8333520932ec.png)  
当USB拔出时由于下拉电阻R66存在所以USB端为0V，PMOS管打开，电流通过MOS管给负载供电。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_010_a9532713c3c6.png)

#### c、VD4二极管的作用

在拔掉USB电源的瞬间，有没有可能MOS管Q9来不及打开，导致VBAT的电压没有及时切过来？  

  
是有可能的。  

  
MOS管Q9没有快速打开，VBAT供电不能及时续上来，会导致VOUT电压下降过多，VOUT的负载电路就可能工作异常。如果电路的负载较重，拉取的电流较大，尤其容易出现在供电电源切换时VOUT电压下降过多的问题。  

  
怎么办呢？  
1、可以加快MOS管打开导通的速度。方法是减小VUSB的滤波电容的容值，减小电阻R66的阻值，这都是让VBUS快速掉电，从而让Vgs快点到达令MOS管完全打开的电压。  
2、在VOUT增加滤波电容，但是效果不怎么明显。  
3、这是重点！可以给MOS管并联一个肖特基二极管。  
上图方案就是采用第三点，给PMOS并联一个肖特基二极管，当PMOS没有完全导通是先有二极管给负载供电，PMOS完全导通后将二极管短路了。

## 三、应用案例

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_011_b8ff03df775a.png)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[12V 典型开关电源方案（有哪些品牌选择）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544143&idx=1&sn=ee2946ca6d12a4acafaee7112b6b8100&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[嵌入式硬件杂谈：推挽、开漏、高阻态、上拉电阻](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543740&idx=3&sn=a761df603da5ae3f743c6f6ca5a6ce8a&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[德系大众车EA211、EA111和EA888 三款发动机闭着眼睛买？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517443&idx=1&sn=59eba24507fb558c8f2291d50a683458&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517490&idx=1&sn=02b3442b9e016dcbb338bd6fae516845&scene=21#wechat_redirect)[电动汽车结构原理基础知识（核心部件、电池、电驱）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517490&idx=1&sn=02b3442b9e016dcbb338bd6fae516845&scene=21#wechat_redirect)**
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\4_2V单节锂电池充电电路_USB与锂电池切换电路_images\img_012_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**