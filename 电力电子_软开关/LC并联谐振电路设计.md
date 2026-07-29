# LC并联谐振电路设计

原创 电路一点通 2025-06-26 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/fKQ6Cu4j2nr71wYLlOWyjg](https://mp.weixin.qq.com/s/fKQ6Cu4j2nr71wYLlOWyjg)

> 介绍了如何设计一个中心频率为1000MHz，3dB带宽为100MHz的LC并联谐振电路，选用120电感，并考虑1k欧姆的源阻抗和负载阻抗。通过一元二次方程求解得到电容值。接着，利用ADS仿真验证设计。在实际50欧姆系统中，需要进行阻抗变换，通过SMITH图计算出50欧姆到1k欧姆的变换元件值。然而，这种变换会导致带宽变窄，主要是因为匹配元件的低通和高通特性影响。

  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_000_aad8223d53da.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

理论知识如下：

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_001_3b2e64e8b8bf.png)

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_002_9cfd9def7bc4.png)

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_003_b6ee3806052a.png)

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_004_b45c3a7b2d0d.png)

  

2)  根据设计得值使用ADS仿真如下：

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_005_26562c960304.png)

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_006_69d62e4a9ad3.png)

3）但在实际使用中 ， 一般信号源和负载都是 50欧姆 ， 所以如果要接入特性阻抗为50欧姆得电路时，需要做阻抗变换；

使用SMITH图 ， 计算50Ω变换为 1k 阻抗变换的元件为 (35nH, 0.68pF)   和   （37nH, 0.72pF） 

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_007_a899e691e3d2.png)

![](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_008_1a72e181951b.png)

4）基本上保证了LC并联电路的选择性， 但是带宽会变窄 。 带宽变窄的原因，是由于匹配元件的低通及高通特性带来。 

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[嵌入式电路基础--读懂原理图就是这么简单](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548445&idx=1&sn=6bbb64ae72024d97b6a2424ada5587eb&scene=21#wechat_redirect)**
    
-   **[汽车钣金喷漆与美容维修资料--【车身结构】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522391&idx=2&sn=93bcd79986240af8bec97a539a06f661&scene=21#wechat_redirect)**
    
-   **[高压电工证培训课件PPT(电力系统基础知识)-45页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259274&idx=1&sn=9541a869b530183df040ae59231e1612&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_软开关\LC并联谐振电路设计_images\img_009_ae6a2099762b.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️