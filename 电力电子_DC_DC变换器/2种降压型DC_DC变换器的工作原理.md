# 2种降压型DC-DC变换器的工作原理

原创 电路一点通 2025-08-16 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/xWj8ghVA2QEJMi8wubRFmg](https://mp.weixin.qq.com/s/xWj8ghVA2QEJMi8wubRFmg)

> 介绍了非同步和同步降压型DC-DC变换器的工作原理。在非同步变换器中，IGBT和二极管交替导通，电感电流在导通和关断期间以恒定斜率变化，电感电流上升量等于下降量，从而确定输入输出电压关系。同步降压型变换器使用NMOS功率管减少二极管压降，提高效率。

  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_000_9f08ed891344.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

###   

###   

### 1、非同步降压型DC-DC变换器

###   

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_001_b50458220db5.png)图1 非同步降压型DC-DC变换器

Mp:功率管（绝缘栅双极型晶体管 IGBT） D:二极管 L:片外电感 CL:输出电容 RL:负载电阻

VIN:输入电压 VOUT:输出电压

功率管Mp导通时，VSW=VIN，故二极管D反偏截止，无电流，拓扑结构等效如图2所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_002_d2727a6b4697.png)

图2 非同步降压型DC-DC变换器等效图（Mp导通）

###   

由图2可知：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_003_2221ccaa509a.png)

电感电流在导通时间内以恒定的斜率上升，上升量为：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_004_83c4e5535b76.png)

  

功率管Mp关断时，由于电感电流的连续性，此时二极管D会导通，拓扑结构等效如图3所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_005_d2a5b49cc576.png)

图3 非同步降压型DC-DC变换器等效图（Mp关断）

忽略二极管上的非理想压降，认为电感两端的电压为：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_006_993f886eb35f.png)

功率管关断的时间内，电感电流以恒定的斜率下降，得到电感电流的下降量：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_007_651edaffc7cd.png)

CCM模式下变换器最终工作在稳定状态，电感电流下降量和上升量相等，得：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_008_f77d015e13ea.png)

得到输出电压与输入电压的关系：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_009_c4577c0a2681.png)

### 2.同步降压型DC-DC变换器

实际的输入电压和输出电压之间的关系还要考虑二极管的压降，会引入功率损耗，降低了整体的效率。用NMOS功率管代替D，变成同步降压型DC-DC变换器。如图4所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_010_7aae338106d0.png)

图4 同步降压型DC-DC变换器

功率管的漏源电压比二极管压降小得多，基本上可以忽略不计，使输入输出电压关系更接近于理想情况。

\[1\]陈成. 一种自适应导通时间降压型DC-DC变换器\[D\].西安电子科技大学,2020.DOI:10.27389/d.cnki.gxadu.2020.002086.

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [降压电路24V转12V，2个NPN三极管实现](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546287&idx=4&sn=aed1f8c4094552bcbdd5209801633b9e&scene=21#wechat_redirect)
    
-   [TL494 反相降压-升压转换器电路工作原理、电路设计、计算、测试](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544805&idx=1&sn=3c4b3a57e91c7d10a82e2ffee83fc504&scene=21#wechat_redirect)
    
-   [5V过电压保护回路电路分析，看简单却是很多复杂原理基础](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547869&idx=1&sn=93e3b433c9faa3c15bcb2b6e03e14b6f&scene=21#wechat_redirect)
    
-   [3种DCDC BUCK降压电路（48V转12-15V）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=1&sn=26e51cee715c5eff0716b0edf4a1b138&scene=21#wechat_redirect)
    
-   [新能源纯电轿车能耗天梯图（车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524584&idx=1&sn=8853468ba35271b72d0ffa6729e1fb8f&token=507455025&lang=zh_CN&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\2种降压型DC_DC变换器的工作原理_images\img_011_a0b60db42148.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️