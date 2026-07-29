# MOS管和三极管中的电阻和电容作用

原创 电路一点通 2025-07-09 08:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/BdtMjXjqVTrBuFrLy2cMNQ](https://mp.weixin.qq.com/s/BdtMjXjqVTrBuFrLy2cMNQ)

> 详细解释了三极管中电容C25的滤波作用和基极电阻R35、R37的功能，以及MOS管栅极电阻R42、R43的限流与开启特性。作者强调了MOS管二极管U15在关断过程中的保护作用，以及三极管和MOS管作为电流元件和电压元件的区别。

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_000_2d8694898871.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

### 三极管：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_001_8856a65bf98c.png)

三极管中的电容C25是起滤波的作用，使控制信号更加的稳定；

基极电阻R35是为了防止基极电流过大；

基极和发射极之间并联的电阻R37是为了当BJT1引脚悬空时，确保BJT1的引脚电平被下拉至GND，确保三极管不会导通，因为控制引脚悬空时是高阻态的情况；并且当BJT1引脚输出高电平导通三极管时，R37几乎不会产生分压效果，相当于被Rbe电阻短路，因为Rbe电阻远小于R37的10k；

具体模拟情况如下所示；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_002_63108e489b08.png)

  

### MOS管：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_003_550f8489183c.png)

mos管电路中的栅极电阻R42和R43同样是为了限流，除此之外R42栅极电阻还是MOS管的开启电阻，如果该电阻过大会导致MOS开启速度慢，如果电阻过小会导致控制信号震荡；

至于U15二极管是为了让mos管关断时更加的迅速如下图所示，在mos管关断时，高dVds/dt在寄生米勒电容Cgd中产生位移电流I。位移电流通过栅极电阻Rg产生一个加在MOSFET栅极的电压，如果这个电压过高，超过MOSFET的阈值电压，会导致MOSFET发生寄生导通。这样，我们加了一个二极管U14当mos的栅极电压达到二极管导通电压时，电荷就会通过二极管，这样就不会误触发G极；

这也是R44并联在G极和S极电阻的作用，关断时卸掉旁路电容的电荷；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_004_d2bb461aabea.png)

作者补充：虽然无法在模拟软件中做出这个过程，但是在模拟过程中发现了三极管和mos管的区别，三极管是电流元件，而mos管是电压元件；通过电压表1和电压表2的电压数值就可以看出，三极管基极有电流流过，所以基极电压是BE(基极和发射极)导通电压接近0.7v，而mos管的GS极是没有电流流过的，是电压器件；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_005_327d2e0e7283.png)

后来又补充了几个证实了这一想法；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_006_9e82c971c367.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_007_38ee3d5efe54.png)

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和三极管中的电阻和电容作用_images\img_008_968a39fced9a.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

******进大家庭⭕圈探讨回复:****** ******交流******  

分享💬点赞👍在看❤️