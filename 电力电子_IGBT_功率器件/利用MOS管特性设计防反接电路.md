# 利用MOS管特性设计防反接电路

原创 电路一点通 2025-03-29 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/sSy79SNzjJIDCX0TyyfTBA](https://mp.weixin.qq.com/s/sSy79SNzjJIDCX0TyyfTBA)

在电源防反接电路设计中，二极管虽可利用单向导通特性防止电源反接损坏电路，但管压降问题导致较大损耗。而 MOS 管具有导通压降低的优良特性，那么如何运用MOS管这一优良特性设计防反接电路？

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\利用MOS管特性设计防反接电路_images\img_000_7ff1eee99ac2.png)

**👆查看更多目录👆**

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\利用MOS管特性设计防反接电路_images\img_001_f2a4b751f6ef.jpg)

以NMOS为例，当电源输入上正下负时，如下图黄色线条所示电流路径，经过R1、R2以及 MOS 寄生二极管后到地。此时，R1 与 R2 分压使得 GS 极电压大于 MOS 导通电压 Vgs，从而使 MOS 管导通，红色线条所示的整个电路回路接通，电路正常工作。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\利用MOS管特性设计防反接电路_images\img_002_6e1cbe70b2ba.jpg)

当输入上负下正时，黄色线条所示电流路径因 MOS 寄生二极管反向截止，且 MOS 管的 GS 极无电压而截止，整个电路回路断开，系统电路得到有效保护。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\利用MOS管特性设计防反接电路_images\img_003_5e1af4ab7954.png)

对于 PMOS 防反接电路，其防反接原理与 NMOS 相似

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\利用MOS管特性设计防反接电路_images\img_004_dd1115f2c95a.jpg)

但要注意的是，通常电路系统是共地的就用PMOS防反接，共源就用NMOS防反接。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[MOS管导通、电路、应用工作原理图文（完整详解）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536956&idx=1&sn=60fa672ada6011024c0a79b47e99babf&scene=21#wechat_redirect)**
    
-   **[三合一“防反接、防过压、缓启动电路”](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542596&idx=1&sn=55b487630d07cc926faaffabc242b55d&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537331&idx=1&sn=2364cdf3cba643dc378204ad888fa305&token=1996240619&lang=zh_CN&scene=21#wechat_redirect)[电源设计全面知识：架构介绍、LDO与DCDC、设计实例分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537331&idx=1&sn=2364cdf3cba643dc378204ad888fa305&scene=21#wechat_redirect)**
    

[](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537331&idx=1&sn=2364cdf3cba643dc378204ad888fa305&token=1996240619&lang=zh_CN&scene=21#wechat_redirect)**

[**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\利用MOS管特性设计防反接电路_images\img_005_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**