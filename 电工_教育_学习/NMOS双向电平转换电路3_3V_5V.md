# NMOS双向电平转换电路3.3V-5V

原创 电路一点通 2025-03-18 11:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/A35n63HKhXfygM0esiYpow](https://mp.weixin.qq.com/s/A35n63HKhXfygM0esiYpow)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS双向电平转换电路3_3V_5V_images\img_000_1348f836adea.png)

上图中，3.3\_IO，5\_IO为两个信号端，VCC和5V为这两个信号的高电平电压。另外限制条件为：

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS双向电平转换电路3_3V_5V_images\img_001_bc38ccc91e77.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

　　1，VCC <= 5V.

　　2，3.3\_IO的低电平门限大于0.7V左右（视NMOS内的二极管压降而定）。

　　3，Vgs <= VCC.

       4，Vds <= 5V 对于3.3V和5V/12V等电路的相互转换，NMOS管选择AP2306即可。原理比较简单，大家自行分析吧！此电路我已在多处应用，效果很好。

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS双向电平转换电路3_3V_5V_images\img_002_ed5e99a5261d.png)

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS双向电平转换电路3_3V_5V_images\img_003_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[汽车空调系统结构与工作原理图解](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247515073&idx=1&sn=96fcb0b841e14231cda2c904525d220c&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[汽车智能驾驶产业链黄金图谱（核心供应商装机量一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247515138&idx=1&sn=0f38bfb1239ab3c11a2f4ecedebe916d&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[新能源汽车电池供应商以及2025（2）全球装车量排名一览表](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247515173&idx=2&sn=7f5080c41e4c2fdc65fbec56d5878161&scene=21#wechat_redirect)**
    

-   [  
    ](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)[4 种电控界MOS管驱动电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541972&idx=2&sn=104858527137b78e803bb5414fd01cbf&scene=21#wechat_redirect)
    
-   [  
    ](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)[硬件设计几种常用经典电路，为软件开发打硬件基础](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=1&sn=9d1be8a790eaa9edc45a8d8cfeaa04ec&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️