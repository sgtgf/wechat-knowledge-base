# （12V降至5V）稳压管+NPN降压电路

原创 电路一点通 2025-05-30 12:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/SrDSnZ-MbNxtpl7Xz6VbVQ](https://mp.weixin.qq.com/s/SrDSnZ-MbNxtpl7Xz6VbVQ)

> 将 12V 电压降至 5V 是常见的电源降压需求，可根据具体应用场景（如电流需求、效率要求、成本等）选择不同的方案。

  

设计思路：12V电压经过R1偏置电阻，稳压二极管反向击穿，UD3=5.6V，NPN导通，BE压降约为0.6V，得到输出电压5V。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_000_8cf4701da8e8.png)

  

multisim电路仿真：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_001_66793c41ede6.png)

稳压管选用onsemi的SZMMSZ4690T1G，要保证稳压管能正常工作：

①工作电压>反向击穿电压，即工作电压>5.88V；

  

②Iz\_min<稳压管的工作电流<Iz\_max，规格书中IZT\=50uA，通过计算确定R1阻值，让其工作电流为50uA，

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_002_93829e0e461a.png)

③功耗不能大于稳压管的额定功耗，实际应用中要计算功耗选择合适封装，P=UI=5.56V\*46uA=0.255mW<500mW。![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_003_7ebeda4d3654.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_004_46e121073ede.png)

  

优化电路：

  

增加肖特基二极管D1和电容C2，D1防止电源反接，C2滤除稳压管电压的干扰。![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_005_fb4cb555446f.png)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_006_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[硬件电路:24V电源输入端保护设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546891&idx=1&sn=d47249f4514626c73869b5bc1cbb5b6d&scene=21#wechat_redirect)**
    
-   **[DIY充电器故障报警电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546919&idx=2&sn=294814b80bdb29787b9ae55e709fef02&scene=21#wechat_redirect)**
    
-   **[DIY简易逆变器 12V 转 230V交流电](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546845&idx=2&sn=009c4c52531503bbfc948ef093677883&scene=21#wechat_redirect)**
    
-   **[4-20mA 电流转0-3.3/5V/10V/15V电压电路原理图逐步解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546831&idx=1&sn=46ee74a2e9883f23c17c3a24143756ff&scene=21#wechat_redirect)**
    
-   **[常见电平转换电路设计参考（工作原理、优缺点、注意要点）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546655&idx=1&sn=3399ca199363ba4ccfc54f0abbf38b71&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（12V降至5V）稳压管_NPN降压电路_images\img_007_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️