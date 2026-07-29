# PCB布局与设计：滤波电容摆放位置

原创 电路一点通 2025-09-23 11:45 广东

> 原文地址: [https://mp.weixin.qq.com/s/2cTx8s2Y1Fid9HX\_G-hxMw](https://mp.weixin.qq.com/s/2cTx8s2Y1Fid9HX_G-hxMw)

电源滤波摆放位置的两种情况

根据电源滤波摆放位置，可分为两种情况，一种是电源输出管脚的滤波，另一种是对电源进行滤波和去耦。

-   电源输出管脚的滤波电筒：由于芯片管脚输出电流较大，可能存在杂波频率范围较宽，因此电源滤波容量需要足够大，并且尽可能放置在电源输出管脚附近![](D:\电脑文件\公众号知识库\电磁兼容_EMC\PCB布局与设计_滤波电容摆放位置_images\img_000_40d55e05bff6.png)
    
-   对电源进行滤波和去耦：即放置在输入电源处，尽可能放置元件电源管脚附近![](D:\电脑文件\公众号知识库\电磁兼容_EMC\PCB布局与设计_滤波电容摆放位置_images\img_001_7de73cceb156.png)
    

[![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\PCB布局与设计_滤波电容摆放位置_images\img_002_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[拆个微波炉（机械）看内部结构部件，清晰修理流程](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552072&idx=1&sn=b4c30d3fb2905a812d97615887628c43&scene=21#wechat_redirect)**
    
-   **[有效防反接电路--MOS管的妙用!](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552030&idx=1&sn=7882eee80c98cb6372ffbea28ca87548&scene=21#wechat_redirect)**
    
-   **[电压转4-20mA电流模块电路设计原理解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552028&idx=1&sn=4efab3ff8c40346bd329c06e7c0d7ed4&scene=21#wechat_redirect)**
    
-   **[160万年薪？小鹏汽车在华工上演“BOSS直聘”，大师兄抛橄榄枝](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526945&idx=1&sn=43be9bf5d9e22c4a58094f236c35b34f&token=11890742&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[你以为的坐在宝马车 vs 现实生活中的“宝马”](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526905&idx=1&sn=5abd49a2f3a88ee8f4035b9679d835ff&token=11890742&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[酒饭局-电工电气人高情商回复](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456262031&idx=1&sn=bc54db171d3a7473956dc5bddc5c883c&scene=21#wechat_redirect)**
    
-   **[全彩图解电工技术与常用工具技能-416页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456262032&idx=1&sn=a4addaee035fce4fac145e0863bf5775&scene=21#wechat_redirect)**
    
-   **[自动化仪表识读图与安装-【PPT资料】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456261999&idx=1&sn=0bc4e0a9e0a6ae6fad8eabb46add1fa1&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\PCB布局与设计_滤波电容摆放位置_images\img_003_1362d44d20de.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️