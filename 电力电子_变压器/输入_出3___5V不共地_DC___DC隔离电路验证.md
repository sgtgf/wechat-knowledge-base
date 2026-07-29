# 输入/出3 - 5V不共地，DC - DC隔离电路验证

原创 电路一点通 2025-06-29 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/aj\_LGMc-xGtPuKe\_FdJdkg](https://mp.weixin.qq.com/s/aj_LGMc-xGtPuKe_FdJdkg)

需要一个简单的DC - DC 隔离**电路**，输入输出不共地。

电路要求：  
输入 3 - 5V，输出 3 - 5V，输出电流大于 30mA 。不稳压也行，大致能 1:1 输出就行。  
由于负载电流不大，打算用分立元件做，电路越简单越好。

[![图片](D:\电脑文件\公众号知识库\电力电子_变压器\输入_出3___5V不共地_DC___DC隔离电路验证_images\img_000_6e8cd2bd4fd3.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

前几天画了个图：

![](D:\电脑文件\公众号知识库\电力电子_变压器\输入_出3___5V不共地_DC___DC隔离电路验证_images\img_001_fb7ac10de7f5.png)

电路实际验证：  
  

![DC - DC 隔离电源输出电路](https://mmbiz.qpic.cn/sz_mmbiz_gif/jwW4UHic87le4HJypneoIVLuA20STtIWSaFYnJ28iaFU0MYqdQthkO83ZKTV2TW7tQRDibrl7rnr76SdCIhfuq2jw/640?wx_fmt=png "DC - DC 隔离电源输出电路")

![](D:\电脑文件\公众号知识库\电力电子_变压器\输入_出3___5V不共地_DC___DC隔离电路验证_images\img_003_b4d8a74bbe62.png)

小磁环的初级7T + 7T ，次级绕了9T 。  
  
3V 输入电压时的电源电流：

![](D:\电脑文件\公众号知识库\电力电子_变压器\输入_出3___5V不共地_DC___DC隔离电路验证_images\img_004_9e9ba3f5cf45.png)

没有低电压的1N5819 ，使用1N4148 做桥式整流电压损耗较大，就重新绕了次级线圈。  
  
实测数据如下：  
  

![DC - DC 隔离电源输出电路](https://mmbiz.qpic.cn/sz_mmbiz_gif/jwW4UHic87le4HJypneoIVLuA20STtIWSI3cQ1iaw05HSHxrUJib8nLKD5ibt6BxW3A5ia75NQqmJibtmnXMw433OPbg/640?wx_fmt=png "DC - DC 隔离电源输出电路")

双管自激i振荡电路没有稳压措施，负载发生变化时，输出电压是不稳定的，负载较轻时输出电压会比较高。  
  
希望加上光耦反馈，让输出电压在负载变化时保持稳定。  
  
经过反复试验，设计了一个光耦反馈的稳压输出隔离电源：  
  
![DC - DC 隔离电源输出电路](https://mmbiz.qpic.cn/sz_mmbiz_gif/jwW4UHic87le4HJypneoIVLuA20STtIWS7AYibibw8FNia0uyyLZsbq0O5LPZGm043tcAa7sRBkUUkVnDsUefxicomg/640?wx_fmt=png "DC - DC 隔离电源输出电路")  
实际测试时，感觉低电压的稳压管性能不太好，负载变化时输出电压不能保持稳定。  
用两个1.8 ~ 2.0V 左右的发光二极管串联代替稳压管，效果还可以。  
空载输出和100欧负载时，输入3.0V ~ 5.0V 间，输出电压变化不大。

  

电路里的电阻、电容取值范围较大，不必拘泥于图中数值。R1 在 2K ~ 4K7 间，只要三极管的放大倍数足够大，都没问题。  
R2 可以在200 ~ 470 欧间选取，阻值大一点，效率会有提升。  
  
C2 取 4n7 或10nF 都可以。  
次级绕组一般在10 多圈吧，11 ~ 15T 间，不要绕太多。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [电路中产生负电压的多种方法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548546&idx=1&sn=e2f5c3248c000c3184f0ca2f9983917d&scene=21#wechat_redirect)
-   [3种短路保护电路（UC3842开关电源）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548071&idx=1&sn=d70f75a7685e5ce615f629daa5e22d32&scene=21#wechat_redirect)
-   [汽车机械原理动图大全:传动轴、万向器、差速器......](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522680&idx=1&sn=b1aad53046f2ba9bfdd6d236983d96d0&scene=21#wechat_redirect)
-   [吉利汽车生产基地分布、集团架构、车型图谱](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522594&idx=1&sn=cd5860b229e8ccf15fa989e3be98417c&scene=21#wechat_redirect)
-   [电气基础知识及识图方法培训-88页【ppt系列教材】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456258450&idx=2&sn=f175a337d42305a3e048271e70f57c47&scene=21#wechat_redirect)  
    

![图片](D:\电脑文件\公众号知识库\电力电子_变压器\输入_出3___5V不共地_DC___DC隔离电路验证_images\img_007_bb0f9a21658f.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️