# 遇到解决不了的EMC问题，是一件很痛苦的事情

原创 王工 硬件笔记本 2025-03-31 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/ELf-K\_QiZ1Z6nN4fs4QNZw](https://mp.weixin.qq.com/s/ELf-K_QiZ1Z6nN4fs4QNZw)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。

  

咱们做硬件，EMC相关知识也是必须要掌握的，遇到解决不了的EMC问题，是一件很痛苦的事情。记得几年前做一个比较复杂的项目，连续搞了几个月，实验室反反复复去了七八次，那段时间真的是心力交瘁。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiazlTibibn8MSHbrHDO0qUfib3AboKH01nY9ADxj5zeDuwdVYmJiaESnkk0EhfpMick1XZv0zjZetOgSEA/640?wx_fmt=png&from=appmsg)

 图源 | Tektronix官网

011

****前言****

辐射通常看不见摸不着，要有效应对这类问题，首先需要具备扎实的基础知识，同时结合实操经验。只有通过大量案例的积累，在面对复杂EMC问题时才能做到游刃有余。

经常有同行问我："我们公司遇到一些EMC难题，内部解决不了，能否推荐专业的整改机构或实验室？"说实话，根据我的自身经历来讲，身边的企业很少会专门寻求外部整改实验室的帮助。主要原因在于这些专业机构的收费往往不便宜，而大多数情况下，工程师们都是通过持续钻研、反复试验来逐步解决问题的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiazlTibibn8MSHbrHDO0qUfib3HibArmuLGsh89B8S7yzhibEkIPOCX3qr01gGeNrgDlfM5mzwCMq75GsQ/640?wx_fmt=png&from=appmsg)

 图源 | Tektronix官网

如果公司面临紧急项目，时间紧迫、任务繁重，选择专业的EMC整改机构或咨询专家确实是更高效的选择。但如果不是特别紧急的情况，我建议平时就要注重经验总结和知识积累。通过建立系统的知识储备，既能提升团队的技术能力，也能为未来可能遇到的问题做好充分准备。这种持续学习、积累的方式，从长远来看往往能带来更好的效果。

  

021

****正文****

王工整理了一些之前发过的文章，都是一些免费的，基础的EMC知识点，有些是王工亲身经历的，有些是身边工程师分享的，还有些是网友整理的，大家感兴趣可以直接点击文章标题，进入文章内容。

之前在公司做的一个小模块项目，电路不复杂，但做认证也确实挺折腾，本文也回答了一些群友很基础的提问。

-   [这种项目，我不想做第二次了](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247556260&idx=1&sn=3f702f7fdb055d92548966244d42b2f9&scene=21#wechat_redirect)
    

  

  

  

磁环，无疑是咱们EMC整改过程中，用的最频繁，且有效的利器，磁环的应用场景，工作原理，分类和一些整改细节和技巧，可以看看这篇文章。

-   [磁环选型攻略及EMC整改技巧](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247544813&idx=1&sn=b5c2e187ccae570ad77ca6b06468498b&scene=21#wechat_redirect)
    

  

  

  

一位硬件大佬，总结了39页介绍EMC基础的PPT，图文并茂，有理有据。

  

-   [39页EMC设计指南，硬件大佬分享，我连看了三遍！](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247558274&idx=1&sn=b5e7ca13ce29970d23e545fffb2b2e27&scene=21#wechat_redirect)
    

  

  

EMC基础识图，一些很小的知识点

  

-   [做了多年EMC，才知道为什么横坐标不等距？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247533401&idx=2&sn=b676546093d794fe8c52ec470677941e&scene=21#wechat_redirect)
    

-   [EMC中class A和class B哪个更严格？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486098&idx=1&sn=80dee46e75a3ed55c657569005907e82&scene=21#wechat_redirect)
    

  

认证中我们老是遇到一些奇怪的问题，怎么能尽可能的避免？

  

-   [产品在公司EMC摸底没问题，为什么送去实验室就](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247536329&idx=1&sn=3358b2e725b135df63b6bdbe0c96cb85&scene=21#wechat_redirect)
    
    [测不过呢？有没有应对方法？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247536329&idx=1&sn=3358b2e725b135df63b6bdbe0c96cb85&scene=21#wechat_redirect)
    

-   [急死了 !!! EMC摸底测试通过，但认证时就是过不了](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247556134&idx=1&sn=e10e97d21355473fd964733484f93107&scene=21#wechat_redirect)
    

  

总结写出来，看起来都挺简单的，但是一旦真正到自己做的时候，并不一定做的好

  

-   [收藏 | 结合个人经验，我总结了这7点EMC相关知识。](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487447&idx=1&sn=dd24851ae3a4107bb1c479b3e37e1960&scene=21#wechat_redirect)
    

  

  

华为的EMC设计指南，经典永不过时

  

-   [华为PCB的EMC设计指南](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247556378&idx=1&sn=c9525f944935e5c690729a57c6697b64&scene=21#wechat_redirect)
    

  

整改EMC，也是有方法的

-   [整改EMC，这些都是非常有用的方法](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247555326&idx=1&sn=4a38396ef2f3bb0d3b65b3ba9cf30eb6&scene=21#wechat_redirect)
    

-   [让EMC整改，有迹可循](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247552207&idx=1&sn=623f709fa38927491833f98186879210&scene=21#wechat_redirect)
    

  

  

  

老师傅的经验，非常值得借鉴

  

-   [电源板PCB EMC评审不过，老师傅说存在大量的](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247551205&idx=1&sn=7872da62f55fa54942ad010e639d19c2&scene=21#wechat_redirect)
    
    [EMC问题和隐患](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247551205&idx=1&sn=7872da62f55fa54942ad010e639d19c2&scene=21#wechat_redirect)
    

  

这是21年写的文章了，虽然定位在DC/DC电源，并且用铜箔屏蔽解决了问题，但是最后如果批量这样导入，显然不可行，依稀记得好像是通过更改某个参数，具体有点忘记了。

-   [干货|分享一个EMC实际案例及整改过程](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486099&idx=1&sn=2286f7203e784b48a5ea2efeaefedb38&scene=21#wechat_redirect)
    

  

  

这是最基本的EMC知识介绍

-   [EMC中class A和class B哪个更严格？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486098&idx=1&sn=80dee46e75a3ed55c657569005907e82&scene=21#wechat_redirect)
    

-   [EMI、EMS、EMC怎么区分？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247526566&idx=2&sn=15d8bb04b1e05b7a2a7a1a8e5bbf8dc6&scene=21#wechat_redirect)
    

  

  

  

这也是21年的文章了，现在看起来，内容写得过于简单了

-   [整改了七次，花了半个月时间，惨痛的EMC总结。](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486070&idx=1&sn=3605db57e6eba1dd74e0495d956a8ae9&scene=21#wechat_redirect)
    

  

  

  

关于模拟地和数字地如何接？争论一直比较大，且没有任何一本书或者一篇文章能把所有案例讲清楚，这篇文章或许能给出一点点提示。

  

-   [为什么模拟地和数字地不建议用磁珠？找到答案了](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247556200&idx=1&sn=14adf8f92284b9f5e7800ff0163c4956&scene=21#wechat_redirect)
    

  

抑制时钟信号，磁环按道理说应该是没有用的，偶然一次尝试居然有效果，可这该怎么理解？

-   [磁环到底对时钟信号的辐射干扰有没有抑制效果？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247537471&idx=1&sn=136053f21bf43c868e9f48b803a3d371&scene=21#wechat_redirect)
    

  

  

文章很长，各个方面都有讲到，很不错

-   [如何轻松拿捏EMC？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553064&idx=1&sn=ec478f9aba8d1adb2dc4fb737165b0c3&scene=21#wechat_redirect)
    

  

  

开关电源的噪声，需要开关电流的路径进行详细的分析

-   [EMC基础知识：开关电源产生的噪声](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247550383&idx=2&sn=590f5313e3986a51e52565c84ef2a8c6&scene=21#wechat_redirect)
    

  

  

大厂资料，值得学习和借鉴

  

-   [中兴ZTE某研发部原理图，电路设计，EMC等规范文档，收藏自检](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247545773&idx=2&sn=11f3d4e6372dfab8149b2e3c98aea3a8&scene=21#wechat_redirect)
    

  

一些标准的EMC参考电路，可以在我们的原理图设计过程中进行预留

-   [分享一些EMC标准电路，可以收藏参考](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247542470&idx=1&sn=5806587740b97a90f86b1d5cacb7764f&scene=21#wechat_redirect)
    

  

  

把干扰抑制在设计中，从画板一块PCB做起，有些人PCB一板过，有些人画的PCB需要打几次板，layout工程师也要懂一点EMC相关知识。

-   [不理解EMC，画不好PCB！](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247533150&idx=1&sn=90cd1f5434032f5865417b0cc5dbeb22&scene=21#wechat_redirect)
    

  

  

X电容和Y电容是开关电源辐射整改的有效元器件

  

-   [EMC整改之X电容和Y电容](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247519957&idx=1&sn=c4db86bf58605956a3850cc6a0fd193b&scene=21#wechat_redirect)
    

  

只有真正找到造成EMI 问题的关键﹐才是解决EMI 的最佳途径

-   [关于EMC辐射发射整改一些心得体会](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247520811&idx=2&sn=026eacdfc5232c18fa45b9b099a0fa9f&scene=21#wechat_redirect)
    

-   [有效降低传导辐射干扰的小技巧](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247541241&idx=2&sn=35d7837da2875f9777b322cfd167abef&scene=21#wechat_redirect)
    

-   [EMI之传导，不得不学](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247516838&idx=1&sn=910d97805478a2e600900de95956a25c&scene=21#wechat_redirect)
    

  

遇到过很多次HDMI引起的辐射发射超标问题，整改方式无非是改板，改参数或者改线。

-   [HDMI接口的EMC设计](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247514401&idx=1&sn=ccd064f312fe77a4f7414d4a29dc0a91&scene=21#wechat_redirect)
    

  

  

实际工作过程中，这类问题很少遇到，或许公司在这一块已经做的很到位了

-   [USB接口的EMC设计](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247513183&idx=1&sn=2937c685b346e69f4372b950601c1ffb&scene=21#wechat_redirect)
    

  

  

几个比较好的案例，可以学习学习

-   [EMC之静电整改](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247509402&idx=1&sn=8ca770f11cebd9a85a31162333ae9a52&scene=21#wechat_redirect)
    

-   [案例 | 一个传导、辐射超标整改过程分析](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247512627&idx=1&sn=fac95f3de68982dd0fcd89b140859b50&scene=21#wechat_redirect)
    

-   [为了防止BUCK电源对传导测试的影响，我加了π型滤波，但电感又开始了啸叫。。。](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486551&idx=1&sn=c9009cd78ea5e66fd09a67efb2e97e05&scene=21#wechat_redirect)
    

-   [案例｜电源入口加磁珠，出事了](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247552674&idx=1&sn=a910c43cf26b12d67eaa80bd79d35578&scene=21#wechat_redirect)
    

  

  

  

  

  

林工的第一次EMC整改，比当年的我更优秀

-   [EMC之 “不整改好别回来了”](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247492155&idx=1&sn=6850e348ef7ff11b3dd57b8c84eacd82&scene=21#wechat_redirect)
    

  

  

485通讯应用场景很多，设计中有很多需要注意的细节

-   [485接口EMC电路](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486097&idx=1&sn=5ac3d1234d0df5221152558b79dc87d2&scene=21#wechat_redirect)
    

  

  

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgzfuoN0611riacBaXWMz1bf4VhibuwTs50lL1Ciblge3EhmVfonwqsN2GezDxt6zkrUfQ910APuKiaxA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)