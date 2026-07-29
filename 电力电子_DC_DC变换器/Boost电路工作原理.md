# Boost电路工作原理

原创 电路一点通 2025-01-17 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_omrCRHGV8LoT2pbsu61XQ](https://mp.weixin.qq.com/s/_omrCRHGV8LoT2pbsu61XQ)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_000_75a5b9459ce0.png)

OS管在这里等于一个开关，只要速度够快，配合输出滤波电容，就可以得到稳定的输出电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_001_878055869356.jpg)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_002_a8b37a87b291.other)

这个过程是怎么实现的？

在开关导通时，电感L接地，二极管截止，输入电压Vi对电感L进行充电，电感两端电压是Vi。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_003_9ed656ef5ab8.png)

在开关不导通的情况下，由于电感L在这之前被充电，有电流流过，电流向右，所以电感两端不能突变，也就是说会感应出电压，右侧的二极管会导通。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_004_9bba64eb9314.png)

电感右端的电压等于输出电压Vo+二极管导通压降Vd，电感左端电压是电源输入Vi。

因为这是升压boost电路，所以Vo+Vd会大于Vi，电感此时放电，给负载供电，并且给输出滤波电容充电。

这里要注意，电感选型的时候，电感的峰值电流不能超过电感的饱和电流。

有人会问，不应该是有效值电流吗？

一般我们认为电感的感量是不变的，所以在电流大到一定程度时，电感量会随着电流的增大而减少。

随着电感电流的继续增大，电感量下降速度就会加快。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_005_2f7f8b23e626.png)

以上就是Boost电路简单的工作原理，更深的后面继续探讨！

******进大家庭⭕圈探讨回复:****** ******交流******

******![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_006_dc9b39eaee8a.other)******

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_010_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_009_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_007_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_008_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Boost电路工作原理_images\img_011_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)