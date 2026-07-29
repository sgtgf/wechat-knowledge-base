# LDO设计要点

原创 电路一点通 2025-04-01 19:33 广东

> 原文地址: [https://mp.weixin.qq.com/s/IKEy7bVFC4jWj9GJ93mAQQ](https://mp.weixin.qq.com/s/IKEy7bVFC4jWj9GJ93mAQQ)

#### 1输入电容

（1）输入电容的主要作用是对调整器的输入进行滤波，另外输入电容也可以抵消输入线较长时引发的寄生电感效应，防止电路产生自激振荡；所以调整器输入端一般采用一大一下两个电容并联的设计，较大的电容采用滤波作用，一般取22uF左右，较小的电容提供消除震荡的作用，一般选用0.1uF，位置靠近调整器输入Pin。（当然放多大具体问题具体分析）

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\LDO设计要点_images\img_000_7ff1eee99ac2.png)

**👆查看更多目录👆**

  

（2）注意温度对电容特性的影响。

（3）电容都需80%的降额，钽电容需要50%的降额。

#### 2输出电容

（1）电压调整器的许多性能都受输出电容的影响。其中电容值以及ESR对电路频率响应的影响时最主要的，输出电容以及ESR选择不当，非常容易引起电路自激振荡。

（2）也采用一大一小并联电容，较大的一般取22uF左右 ；较小的电容提供消除高频噪声作用，一般选0.1uF，位置靠近调整器输出Pin。

（3）注意温度对容值和ESR的影响，确保电路稳定运行。

（4）输出电容ESR的过高或过低对环路稳定造成的影响。（但是现在的LDO内部都有相位补偿所以只要放一些低的ESR的电容，多放几个也可以）

（5）输出的假负载。

#### 3功耗与温升

损失的功耗，所产生的热量使LDO温度上升，LDO此时温度要保持在LDO正常的工作温度。

#### 4内部电压基准产生的噪声

用电容过滤如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO设计要点_images\img_001_251fb8ca02a6.png)

 各电容量对噪声的过滤情况：

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO设计要点_images\img_002_7aa568a65384.png)

其他的噪声来自误差放大器，FET。 

  

还可以加前馈电容来降低噪声如图CFF：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO设计要点_images\img_003_6bf4792f74fb.png)

CFF作用：增加相位裕度改善负载瞬态响应。输出将减少振铃并更快稳定。 

####  5实际设计例子

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO设计要点_images\img_004_6a444d870722.png)

注：LDO设计的主要问题，由损失功耗产生的温升使LDO超出正常工作温度和VIN与VOUT之间压差不够而产生降压输出两种情况产生

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   **[过流与过压保护电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542661&idx=1&sn=ce99bc1e3ddd1d28c809e3e4c51d8513&scene=21#wechat_redirect)**
    
-   **[TL431恒流源电路对于电流有什么要求吗？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542624&idx=2&sn=6fcc146173952eb1286e5b6f222d8c01&scene=21#wechat_redirect)**
    
-   [汽车发动机外部结构原理图解：燃料、EFI、汽缸、三元催化等](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488626&idx=1&sn=15ce27b376060192c13a37b6cd0e5250&chksm=c33e6ccef449e5d8df6bcc0101bf42f6e8a610af75a684fa8dc9f8cf5b69bdda8a63d3b505e7&scene=21#wechat_redirect)
    
-   [汽车发动机放置方式和驱动形式示意图、构造图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488714&idx=1&sn=fa579c56a8cf5d11d535e3ebc33a261a&chksm=c33e6c76f449e56081172e4a370bfafd2c31a1c23ba7074707a90fa4c049a7ea68b01fcb5eec&scene=21#wechat_redirect)
    
-   [汽车构造：汽油柴油车底盘布置图、离合器分解图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488533&idx=2&sn=2dc0b5e551187a0c5a37ac5ab8e20732&chksm=c33e6ca9f449e5bff8160c69438eb3a5439313e87c2ed484877345539ce4a7bd52e075034939&scene=21#wechat_redirect)
    
-   [汽车常用缩略语-汽车构造与原理第4版（上册\_发动机）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488696&idx=2&sn=2401c3d6eb234b965fd07cf5c1a8dd27&chksm=c33e6c04f449e5128b6d5b35f1b67e3d802e4d3836eea1f47eb2bc6cb6c31f77e64c1c292f94&scene=21#wechat_redirect)  
    
-   [汽车发动机放置方式和驱动形式示意图、构造图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488714&idx=1&sn=fa579c56a8cf5d11d535e3ebc33a261a&chksm=c33e6c76f449e56081172e4a370bfafd2c31a1c23ba7074707a90fa4c049a7ea68b01fcb5eec&token=1056994762&lang=zh_CN&scene=21#wechat_redirect)
    
-   [电动汽车原理与构造（311页）.pdf](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247485997&idx=2&sn=04fb81d707532d545980ee81ea6a0c2c&chksm=c33e7291f449fb87342a737eb9563dca67c7968ba7c26e3a35cca93893668567a8c0883ed0e6&scene=21#wechat_redirect)
    
-   [汽车内外构造、示意图详解-一目了然看得明白！](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486748&idx=1&sn=dcb82a1a3f6419ba36818d8b03fe2b83&chksm=c33e75a0f449fcb675aa63f72253fb45c31cb743ae63f06919fee7977890f9b528cbad297136&scene=21#wechat_redirect)
    
-   [汽车不神秘 汽车构造透视图典（161页）.pdf-精选新款世界名车](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486473&idx=2&sn=f37d10c5b8327e146da745500c45d419&chksm=c33e74b5f449fda3c319b9fc0cbee63bfea75987b209dbf8e7659878679856d08e363845b3f1&scene=21#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\LDO设计要点_images\img_005_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**