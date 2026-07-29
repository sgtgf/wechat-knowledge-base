# 双向DC/DC（boost/buck）工作原理

原创 电路一点通 2025-01-21 19:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/GtjzuzbQHglCAix0I9a3sw](https://mp.weixin.qq.com/s/GtjzuzbQHglCAix0I9a3sw)

1、放电时：

如下图所示，先通VD1和断开VD2，电感存储能量，再断开VD1，开始导通VD2（VD2也是mosfet，都是双向导通的，图中显示的是二极管是错的），电感电流不能突变，此时电感释放能量，完成回路，给电容充电，从而电压升高。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_000_15ccf08ebecf.png)

2、充电时：

类似的过程，先导通VD2，断开VD1，电容侧给电感存储能量，然后开始断开VD2，导通VD1，形成回路，电感电流同样不能突变，向电池充电。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_001_4fa537d5f7e1.png)

  

在实际的仿真电路中，就是通过两个互补的PWM控制，进而控制储能电流的大小，实现电池充放电。

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_002_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_003_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_005_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_004_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_006_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC（boost_buck）工作原理_images\img_007_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******