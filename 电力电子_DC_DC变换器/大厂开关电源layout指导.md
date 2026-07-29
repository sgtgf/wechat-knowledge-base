# 大厂开关电源layout指导

原创 王工 硬件笔记本 2025-05-08 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/sFPi5uIrGmxlDQ1ShPju5g](https://mp.weixin.qq.com/s/sFPi5uIrGmxlDQ1ShPju5g)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic "音符")

  

大家好，我是王工。

今天和大家分享一下Innoscience的GaN Layout设计指导手册中的关键要点。虽然手册主要针对GaN器件，但其中的设计思路和优化方法同样适用于我们常见的开关电源设计。  

在实际工程应用中，良好的PCB布局设计对系统性能至关重要。为了充分发挥功率器件的开关特性，同时避免各种干扰因素，我们需要特别关注layout设计，尤其是如何减小回路中的寄生效应。

![](大厂开关电源layout指导_images/img_002_5df9c3f0d2a3.png)

在layout设计中，有三个关键因素会直接影响电源的工作性能：

1.  共源电感设计
    
2.  驱动回路优化
    
3.  功率回路布局
    

如何有效减小这三部分的寄生电感，是我们layout设计的重中之重。此外，还有一些容易被忽视但同样重要的细节需要关注：

-   PCB层间铜皮形成的寄生电容
    
-   开关器件漏极和源极铜皮产生的等效Coss
    
-   漏极和栅极铜皮形成的等效Crss
    
-   栅极和源极铜皮形成的等效Ciss
    

这些寄生参数不仅会增加额外的开关损耗，降低系统效率，在高压硬开关应用中还可能带来安全隐患。因此，在layout设计时，我们都应该尽可能减小甚至消除这些不利影响。

以下是InnoGaN Layout设计指导

![](大厂开关电源layout指导_images/img_003_f6cd220b1a7c.png)

![](大厂开关电源layout指导_images/img_004_1033981b55ad.png)

![](大厂开关电源layout指导_images/img_005_b0d258256aaa.png)

![](大厂开关电源layout指导_images/img_006_c88a2fe159a3.png)

![](大厂开关电源layout指导_images/img_007_32c1510ebad5.png)

![](大厂开关电源layout指导_images/img_008_5e16f2738057.png)

![](大厂开关电源layout指导_images/img_009_7c092387f70f.png)

![](大厂开关电源layout指导_images/img_010_2bd3b1987044.png)

![](大厂开关电源layout指导_images/img_011_aec176522a34.png)

![](大厂开关电源layout指导_images/img_012_a3c0dd768347.png)

![](大厂开关电源layout指导_images/img_013_ef4e093dfd18.png)

![](大厂开关电源layout指导_images/img_014_5ebf4b7fb28b.png)

![](大厂开关电源layout指导_images/img_015_1daa3eff2c15.png)

![](大厂开关电源layout指导_images/img_016_874e05313c11.png)

![](大厂开关电源layout指导_images/img_017_05a4bdcd6feb.png)

![](大厂开关电源layout指导_images/img_018_8381d89da008.png)

![](大厂开关电源layout指导_images/img_019_fecdebdac714.png)

![](大厂开关电源layout指导_images/img_020_96de3f669aba.png)

![](大厂开关电源layout指导_images/img_021_debb50492aee.png)

![](大厂开关电源layout指导_images/img_022_a557180e652e.png)

![](大厂开关电源layout指导_images/img_023_5e625543d929.png)

![](大厂开关电源layout指导_images/img_024_016054f3c390.png)

![](大厂开关电源layout指导_images/img_025_aa3a6acfabf5.png)

![](大厂开关电源layout指导_images/img_026_173153b43c2e.png)

![](大厂开关电源layout指导_images/img_027_15424fae371c.png)

![](大厂开关电源layout指导_images/img_028_c025a9e74513.png)

![](大厂开关电源layout指导_images/img_029_87ca5a791b05.png)

![](大厂开关电源layout指导_images/img_030_8f9d3d1afe45.png)

![](大厂开关电源layout指导_images/img_031_03260055a6ce.png)

![](大厂开关电源layout指导_images/img_032_36bd539e6edd.png)

![](大厂开关电源layout指导_images/img_033_48e5f50df431.png)

PDF来源英诺赛科，感兴趣的朋友可以查看他们的官网。

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

![图片](大厂开关电源layout指导_images/img_034_8f872b8ba8ee.png)

[![图片](大厂开关电源layout指导_images/img_035_ae4afad92afd.png)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](大厂开关电源layout指导_images/img_036_8f8c22b4fa63.jpg)![图片](大厂开关电源layout指导_images/img_037_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文字原创，PDF来源英诺赛科。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)