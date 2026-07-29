# Bypass理解：旁路电容与“|心脏搭桥”

原创 电路一点通 2025-04-17 11:37 广东

> 原文地址: [https://mp.weixin.qq.com/s/B0mZBjCbVsugclRLIl\_XfA](https://mp.weixin.qq.com/s/B0mZBjCbVsugclRLIl_XfA)

电容最主要的特性是通交流阻直流，但是利用这个特性有很多很多的应用，除了前面讲的滤波电容，还有去偶电容，旁路电容，耦合电容，这些称呼是根据他们的应用场景和侧重点不同约定俗成的，有些场景也没有那么严格的区分。正式因为电容应用场景多，名字的定义又没那么严格，很多资深的工程师也未必能把他们的区别和联系理解透彻。今天先讲讲其中一个应用旁路电容。

  

-   [![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\Bypass理解_旁路电容与__心脏搭桥__images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

1、从名字理解

旁路电容英文是Bypass，有时候英文更容易理解。它强调两点，①pass，就是让信号通过，让什么信号通过呢？当然是有用信号，如果是噪声，那我们就应该称它为去耦或滤波电容了。（当然也有人较真说让噪声通过也叫pass呀，但是我觉得这就违背了这个名字的本意）②by，表示它旁边得有另一条路，然后电容在它旁边提供了另一条路，才叫Bypass。否则直接叫pass好了。重点一句话：旁路电容，通有用交流信号，旁边有其他电路。

2、从例子理解

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Bypass理解_旁路电容与__心脏搭桥__images\img_001_6781ab6cd0b3.jpg)

最典型的一个例子是三级放大电路中，与Re并联的电容C2就是旁路电容。它起到什么作用呢？我们都知道对于一个三级放大器，它的作用是放大输入的交流小信号，但三极管需要一个直流的偏置电压，Re的作用就是和其他电阻元件配合为偏置电路提供一个合适的静态工作点。但是对于交流小信号而言，然后不加C2，那么交流小信号就只能通过电阻Re，会影响放大器的增益（三极管放大器原理我们后面会讲到）。所以，这里在Re旁边并联一个C3，这样直流就走Re，交流就走C2，既不影响直流偏置，又不影响放大器增益。

这里的C2我们就称它为旁路电容（Bypass），不能称它为去耦或滤波电容，因为通过它的是我们需要放大的小信号，是有用的信号。也不能称它为耦合电容，因为旁边有其他的路径，如果没有这个C2，小信号也能通过，加了C2，多一条更好的路径而已。

图中，C1连接输入信号，C3连接输出信号，就不能称之为旁路电容，因为它们旁边没有其他的路径连接输入和输出。

2、从心脏搭桥理解

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Bypass理解_旁路电容与__心脏搭桥__images\img_002_2e469a59255c.jpg)

之前身边有人做了心脏搭桥手术，我也查了查资料，了解了一下，它的英文也就Bypass，心脏搭桥手术叫做Heart bypass operation。当一条或多条动脉由于发生阻塞导致供血不足时，需要在动脉的两端人为的再搭建一条通路，绕开阻塞的血管，把血液引导心肌缺血的部位，这个额外的通路血管就叫Bypass或搭桥。这个搭桥和我们电路里的C2作用是一样的。使原来的电流改变道路，通过一个新的路径，实现已有的功能。

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[三极管驱动NMOS实现3.3V转24V电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544233&idx=1&sn=06790b765b2d25b49e94122665b81686&scene=21#wechat_redirect)**
    
-   **[2种余电快速泄放电路方案优缺点比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543870&idx=1&sn=984caffd4abc506ea774728f6b3391e3&scene=21#wechat_redirect)**
    
-   **[旁路，去耦，滤波，耦合电容大总结](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543474&idx=2&sn=14f693324eddf502f90e7f455bd1176d&scene=21#wechat_redirect)**
    
-   **[新能源汽车“三电”系统关键技术：电池、电控与电机](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516784&idx=2&sn=8db26a0a651e2b79374fd5b3def86aa5&scene=21#wechat_redirect)**
    
-   **[汽车发动机基本构造图、分解图、原理图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488446&idx=1&sn=74ca81cf0ef79f64a9fadec16a5e2419&chksm=c33e6b02f449e214ae0bce877ef5d99454aa817f98954178ea102c13033f8645730d83ae4413&scene=21#wechat_redirect)**
    
-   **[汽车常用传感器识别与检测PPT（全）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488068&idx=3&sn=f26a4688a7bc85e627e7881ebc0de671&chksm=c33e6af8f449e3ee8232723e9b35f5a82cd0abddcb2bb35812c0b84e8f7d9b90ff0e46dd58bd&scene=21#wechat_redirect)**
    
-   **[新能源汽车内部零部件构造透视图（名称标注，好记易懂）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487896&idx=1&sn=715b07b8a8f1eddafaab72e41b02d135&chksm=c33e6924f449e03282bbee83c3c9f11d8bcfafe72d741a3db063463f3b4f1b7a06dc684387a3&scene=21#wechat_redirect)**
    
-   **[汽车内饰主要系统结构部件图解、（产品、材料、成型工艺）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487516&idx=1&sn=c0837b67bb6735cdd544260ae8892cf8&chksm=c33e68a0f449e1b60e89cb57e0362df89d2a534ddb66ca858ca5136e6f86a3a564c892dac1ff&scene=21#wechat_redirect)**
    

**[![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\Bypass理解_旁路电容与__心脏搭桥__images\img_003_b46e8bcc08e0.jpg)](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**