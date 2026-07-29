# 二极管在DC-DC开关电源电路中的作用

原创 电路一点通 2025-03-30 20:02 广东

> 原文地址: [https://mp.weixin.qq.com/s/sAHkW66CrkaPs60TkO8rtg](https://mp.weixin.qq.com/s/sAHkW66CrkaPs60TkO8rtg)

二极管基本作用就不再赘述了，使用时注意封装正反，导通压降，最大导通电流，反向耐压就行。本章主要了解二极管在DC-DC开关电源电路中的作用。  
首先，先了解下buck、boost经典电路。

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\二极管在DC_DC开关电源电路中的作用_images\img_000_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

Buck电路：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\二极管在DC_DC开关电源电路中的作用_images\img_001_dbca44183283.png)

在PMOS管Q1导通时，输入电压VIN给电容C1和电感L1充电，电容电压升高，电感电流升高。此时二极管反向截止。 输入电源直接给负载供电。  
在PMOS管Q1断开时, 电容直接放电给负载供电,电感通过二极管给负载供电。此时二极管导通，起到续流的作用。  
Buck电路中二极管提供了一个续流回路，起到续流的作用。  
  

Boost电路：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\二极管在DC_DC开关电源电路中的作用_images\img_002_de13cac71a1f.png)

在充电过程中，NMOS导通，相当于短路，这时，VIN对电感L2充电，电感电流逐渐增加（电感线圈未饱和）储能。  
  

NMOS断开时，原来的电路已断开，于是电感只能通过新电路放电，即电感开始给电容充电，电容两端电压升高，此时电压已经高于输入电压了。升压完毕。二极管D2单向导电性（反向未击穿）防止C2对VIN放电，也防止NMOS管导通时，通过MOS管对GND放电。  
  

说起来升压过程就是一个电感的能量传递过程。充电时，电感吸收能量，放电时电感放出能量。如果电容量足够大，那么在输出端就可以在放电过程中保持一个持续的电流。NMOS管通断的过程不断重复，就可以在电容两端得到高于输入电压的电压。  
  

Boost中二极管作用：单向导电，防止回流，减少不必要的损耗。

在DC-DC电源芯片(XL4005)应用：  
XL4005提供5V-32V电压输入，0.8V-30V输出。开关频率300KHZ，最大可提供5A电流输出。经典应用电路如下图所示：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\二极管在DC_DC开关电源电路中的作用_images\img_003_180568d0a50c.png)

1.一般选择快速恢复二极管或者肖特基二极管来作为“续流二极管”。  
2.D16选择需注意负载最大电流，留好余量。如负载3A，就不要选用SS34，可采用SS54/SS84等。  
  

PS：  
上图应用电路中，不接电容C94，C99，能否用万用表测量出5V电压呢？欢迎大家讨论O(∩\_∩)O

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)