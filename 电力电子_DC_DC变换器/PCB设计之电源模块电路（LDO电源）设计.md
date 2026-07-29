# PCB设计之电源模块电路（LDO电源）设计

原创 电路一点通 2025-04-04 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/z1yx\_xt0r5HuDIcJvdTK0A](https://mp.weixin.qq.com/s/z1yx_xt0r5HuDIcJvdTK0A)

  

**目录**

-   1、USB电源输入电路
    
-   2、电源隔离电路
    
-   3、电压转换电路
    

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect) 
    
    **👆查看更多目录👆**
    

  

通常在进行系统电路设计时，需要设计电源模块电路，电源模块的作用是：

-   1、设计开关按钮，控制外接电源对板子供电
    
-    2、将外接的电压转换为自己系统主控芯片、各种模块芯片所需的电压（5V、3.3V或2.5V等）
    
-   3、热过载保护、减少纹波、降低高频噪声的等作用。
    

  

本篇文章在Altium Designer软件中，利用电源隔离芯片、电源转换芯片设计了一种线性电源模块，整个模块由USB电源输入、电源隔离、电压转换三部分组成。

### 1、USB电源输入电路

板子通过USB线与外接电源连接，板上使用了MiniUSB接口，USB输出的5V电压经过六角自锁开关与后面的整个电路相连接为系统供电。加入T1测试点，方便测试输入电压。输出端采用了常见的电容去耦方法，一大一小两电容（相差两个数量级）。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_001_a1d1cc88f22b.png)

### 2、电源隔离电路

在电源隔离电路部分，选用ADI公司的ADuM5000电源隔离芯片，它内部集成了隔离式DC-DC转换器，输出电压3.3V和5V可调，并在电路中加入旁路电容去噪声的作用。这里设计的是5V输入5V输出并加入测试点T2。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_002_28880e424b27.png)

这里将隔离前后的两个地利用零欧电阻连接

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_003_931845670dea.png)

### 3、电压转换电路

电压转换部分，利用AMS1117专门转3.3V的芯片，将隔离后的电压稳定在3.3V，加入测试点T3。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_004_9ae0ce84e7c4.png)

最终，画的的PCB板如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_005_b32d5c82382e.png)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PCB设计之电源模块电路（LDO电源）设计_images\img_006_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**