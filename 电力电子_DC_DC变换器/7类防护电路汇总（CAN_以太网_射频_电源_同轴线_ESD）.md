# 7类防护电路汇总（CAN、以太网、射频、电源、同轴线、ESD）

原创 电路一点通 2025-06-20 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/np4JbhtKOtz-0AfuQkC4cQ](https://mp.weixin.qq.com/s/np4JbhtKOtz-0AfuQkC4cQ)

1.CAN接口防护电路 （兼容485接口使用）

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_000_c8e75467c979.png)

备注：首先经过气体放电管（一般节电容约0.5~5pF之间），再经过温控自恢复保险丝，再到TVS管 （节电容一般100~300pF左右） ， 

据网上资料说，该电路能用在10M速率以下，能通过 接触放电8kV  ， 浪涌ITU K2.1  10-700us 6kV测试；

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_001_cfa31be5bead.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_002_cdccda9cb035.png)

上图为CAN的纯静电保护电路；

  

2.百兆，千兆以太网 防护电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_003_75e6b7afb64a.png)

3\. 1GHz 以下的射频天线馈口， 适用以下电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_004_37314e24af78.png)

备注：由于浪涌或感应雷的波形一般为10~700uS之间，所以信号是较难通过射频信号耦合电容的，浪涌或感应雷会优先经过气体放电管，压敏电阻，TVS管进行放电。

  

4.1GHz以上的射频电路天馈系统  的防护电路如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_005_ff57578ce96d.png)

如果L8 的电感足够阻塞了，就在气体放电管旁放置去耦电容 ；  如果L8阻塞的不够，需要气体放电管配合一起才足够阻塞RF的， 那去耦电容应在TVS后面再添加 ； 而且去耦电容添加的太早，可能会由于电压太高，而导致电容损坏问题， 建议都在TVS管后面再加去耦电容；

  

5\. 普通 12V的电源接口 防护电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_006_c1e6e7d6aee3.png)

  

6.长距离同轴线的 防护方案（1GHZ以下）

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_007_4de7d6973a6c.png)

备注：该方案在于两个同轴线护接时，插入上述图片的接口电路，可降低长距离同轴电路的浪涌问题；

  

7.各类ESD防护电路

VGA防护电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_008_f26a65f152fd.png)

SIM卡座ESD防护电路 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_009_06571c262cd0.png)

 HDMI  ESD防护电路

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_010_7cf14bd20d60.png)

USB  ESD防护电路

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_011_c7d558976729.png)

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\7类防护电路汇总（CAN_以太网_射频_电源_同轴线_ESD）_images\img_012_d94b6e5fdac0.jpg)

******进大家庭⭕圈探讨回复:************交流******

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[3种短路保护电路（UC3842开关电源）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548071&idx=1&sn=d70f75a7685e5ce615f629daa5e22d32&scene=21#wechat_redirect)**
    
-   **[24V过压保护、反接保护电路图实例](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542477&idx=2&sn=0de4cbd1071c8965710413e353f88d2d&scene=21#wechat_redirect)**
    
-   **[汽车空气悬架自主厂商强势发力（供应商装机量排行）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247520441&idx=1&sn=0b696c13e99713e62cbd8f40d3a4262b&scene=21#wechat_redirect)**
    
-   **[汽车五大总成（发动机、变速器、前后桥、车架和悬挂系统）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521080&idx=1&sn=68b52a2fa680910fca3b41495d168346&scene=21#wechat_redirect)**
    

分享💬点赞👍在看❤️