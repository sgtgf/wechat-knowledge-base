# 【大厂技术文档】电流检测电路，采样电阻Rshunt量程切换电路设计

原创 24c01 电路一点通 2025-05-15 11:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/dmd1N\_mbRGaNQSGSer\_Wuw](https://mp.weixin.qq.com/s/dmd1N_mbRGaNQSGSer_Wuw)

****这个电路图来自德州仪器的技术文档ZHCABK5：电流检测放大器的满量程和动态范围注意事项。****

****![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_000_ce948dcd439d.png)****

电路采用INA190进行高端电流采样，采用两颗采样电阻Rshut1和Rshunt2。小电流时，PMOS截止，INA190采样Rshunt1和Rshunt2两个电阻上的压降。大电流时，PMOS导通短路Rshunt1，INA190采样Rshunt2两端的压降（MOS的导通电阻忽略不计）。

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_001_7d2522e28aa0.png)

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_002_367fc62b70ca.png)

电路值得学习讨论的地方有两点：

1.三极管驱动PMOS为什么不使用电阻分压的方式驱动？而是使用稳压管作为分压？例如下图我们常见的三极管控PMOS电阻分压原理图：

[![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_003_0c90981b3b5d.png)](https://mp.weixin.qq.com/s?__biz=MzkwMjUyOTA2Nw==&mid=2247486666&idx=1&sn=439f9fb40d606f8143736dd3e537ae03&scene=21#wechat_redirect)  

这一点我认为使用稳压管分压可能是为了增快PMOS的导通速度，因为如果使用电阻分压的方式去驱动PMOS，电阻限制Cgs充电速度，从而会导致PMOS开启相对慢一些。例如下图是简化的电路，可以看到使用稳压管作为驱动，可以让电容Cgs两端电压爬升的更快。

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_004_e971c317eea4.png)

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_005_b447521a0ee5.png)

2.为什么PMOS的画法和常规画法不一样？为什么是漏极接VCC，源极接负载？这样可以控制吗？

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_006_675ccc7c1b5c.png)

关于这一点可以很负责的说，这样画也是是可以控制的，因为只要确保被并联的电阻两端电压不超过寄生二极管的压降（就像TI这份文档中的Rshunt1的两端电压最大为0.1V），此时Rshunt1的两端压降也不足以让PMOS的寄生二极管导通，所以这种用法和常规用法一样控制逻辑。并且这种用法我也在其他的一些这种量程切换电路上也见到了两三次。

那么ZHCABK5中的这种用法相对常规的用法能带来什么好处呢？我问了下网友，网友说大概是可以利用PMOS的寄生二极管钳位达到保护Rshunt1采样电阻，为了防止电流过流而PMOS还未导通，防止烧电流采样电阻。我认为这种说法应该是正确的。这种二极管的钳位保护在胡博的丐中丐电流源中也有所使用（D6和D7），不过是使用的外置二极管。

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_007_06a54ae56df6.png)****那么关于这个电路你有没有什么不一样的看法？欢迎评论区留言讨论。****

****电流检测放大器的满量程和动态范围注意事项.pdf****

**如何领取资料**

  

下载链接：（复制浏览器打开）

链接：https://pan.quark.cn/s/284f09a8e590

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_008_34eebb845557.png)

  

-   ![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_009_fb0adb39cdaa.png)
    
    [![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_010_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[硬件电路设计方案策略-大电容+小电容](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546549&idx=1&sn=59e47ad9cd79ed9cd7a9cd5dcb87741f&scene=21#wechat_redirect)**
    
-   **[PFC电路，图腾柱PFC电路,电感电流的三种模式](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544805&idx=2&sn=6e8a4f1574410ed4332e97823928f8ee&scene=21#wechat_redirect)**
    

-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)【资料可领取】  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)【资料可领取】
    
-   [西门子PLC高级应用实例精解\_第2版-368页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257003&idx=2&sn=c2313e1bec3e59a63fa08faea4ca528d&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    
-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    

**![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\_大厂技术文档_电流检测电路_采样电阻Rshunt量程切换电路设计_images\img_011_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**