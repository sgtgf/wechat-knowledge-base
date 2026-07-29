# 分析无输出电容的功率放大电路(OCL)工作原理

原创 电路一点通 2025-06-30 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/wExml6oi43cCfvNLbMYuFg](https://mp.weixin.qq.com/s/wExml6oi43cCfvNLbMYuFg)

> 深入探讨了无输出电容的功率放大电路(OCL)的工作原理，详细分析了其最大输出功率和效率的计算方法。通过数学公式，阐述了在正弦信号输入下，OCL电路如何达到最大输出功率及相应的转换效率。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\分析无输出电容的功率放大电路(OCL)工作原理_images\img_000_6e8cd2bd4fd3.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## OCL功率放大电路分析笔记

OCL全称:Output Capacitorless，中文名称:无输出电容的功率放大电路。

功率放大带电路最重要的技术指标是最大输出功率Pom和效率n。

若输入信号Ui为正弦信号sin(wt)，负载上能得到的最大输出电压且不能失真，此时对应负载上的功率为最大输出功率Pom。

效率n等于实际负载上的平均功率除以最大输出功率Pom。

![](D:\电脑文件\公众号知识库\电工_教育_学习\分析无输出电容的功率放大电路(OCL)工作原理_images\img_001_7fa36d618149.jpg)

输入信号Ui:![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\分析无输出电容的功率放大电路(OCL)工作原理_images\img_002_b0035ce5cf74.jpg)

输出信号Uo:![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\分析无输出电容的功率放大电路(OCL)工作原理_images\img_003_930fbce365ef.jpg)

当在0~t1时刻时，Ui会逐渐增大，而输出信号Uo反向的增大。在Ui很小时，VCC作用在Q1上 , Q1的管压降较大，随着Ui的增大，ce之间渐渐导通，Q1上的管压降有随之变小，但由于管压降不会一直减小，设饱和时管压降为Uces。则当ui增大到最大时，Uo也增大到最大，此时管压降为最小Uces,此时最大输出电压有效值:

![](D:\电脑文件\公众号知识库\电工_教育_学习\分析无输出电容的功率放大电路(OCL)工作原理_images\img_004_b65590ba5e5d.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[输入/出3 - 5V不共地，DC - DC隔离电路验证](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548867&idx=1&sn=328f69ee3a4ce1b9f0faf73d4c9d6d24&scene=21#wechat_redirect)**
    
-   **[RS485应用电路及问题经验总结](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548564&idx=1&sn=4940230aad654d8e4268668e364cf0fe&scene=21#wechat_redirect)**
    
-   **[按键开关机电路设计方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247517125&idx=4&sn=2f5b7efe028a6f974f5c14533a12614b&scene=21#wechat_redirect)**
    
-   **[汽车机械原理动图大全:传动轴、万向器、差速器......](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522680&idx=1&sn=b1aad53046f2ba9bfdd6d236983d96d0&scene=21#wechat_redirect)**
    
-   **[川崎机器人培训PPT（系统设置、接口面板设计、示教器）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259474&idx=1&sn=a191a5d436786a109cb2f1239f5d7d78&scene=21#wechat_redirect)**
    
-   **[10个技巧！教你快速看懂施工图纸](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484404&idx=1&sn=aabdbed0549627080abad9bce63698bd&scene=21#wechat_redirect)**
    

  

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

  

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️