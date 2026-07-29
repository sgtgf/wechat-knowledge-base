# 开关电源EMC问题，都是这样解决的

原创 王工 硬件笔记本 2024-12-13 09:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/oiGb8cbAYU2YJaG1xS-Xdw](https://mp.weixin.qq.com/s/oiGb8cbAYU2YJaG1xS-Xdw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

大家好，我是王工。

我相信一句话：一个人可以走得很快，一群人才可以走得很远。感谢技术群里的小伙伴经常有技术交流，我也学到很多。

前段时间技术群里一个兄弟的开关电源EMC整改遇到点问题，大家献计献策，也分享了很多资料，其中一个小伙伴分享的开关电源EMC资料，令大家都不由得竖起大拇指。我简单看了一下，图文并茂，不得不感叹，资料还是大厂做的好。

通过该资料，再结合自己的经历得出：开关电源的EMC问题，最后都是这样解决的：

1、更改输入滤波X电容；  

2、更改输入滤波Y电容；  

3、更改输入共模电感；  

4、更改变压器，增加屏蔽绕组；  

5、更改电感材料。

6、更改MOS驱动参数。

7、改板（尽量不改，定位问题也挺麻烦的）

如有遗漏，欢迎补充！

  

再回到这份资料，它来自英诺赛科innoscience，这里简单介绍，顺便帮他们宣传一下：

英诺赛科（Innoscience），成立于2015年，旨在打造全球最大的采用全产业链模式，集设计、研发、生产和销售为一体氮化镓（GaN ）的生产基地。

![](开关电源EMC问题_都是这样解决的_images/img_002_9973454d4c07.png)

我下载了他们的源文件，共26页PDF，大家可以加我微信woniu26a（或扫文末二维码）获取。也可以直接在他们官网去下载。

以下是PDF文档的全部内容：![](开关电源EMC问题_都是这样解决的_images/img_003_1fa6d347c510.png)

![](开关电源EMC问题_都是这样解决的_images/img_004_bc48ab72063f.png)

![](开关电源EMC问题_都是这样解决的_images/img_005_dbf5f8f48e22.png)

![](开关电源EMC问题_都是这样解决的_images/img_006_466fe40fb488.png)

![](开关电源EMC问题_都是这样解决的_images/img_007_1d00b8c89309.png)

![](开关电源EMC问题_都是这样解决的_images/img_008_b50ae0f7ba02.png)

![](开关电源EMC问题_都是这样解决的_images/img_009_ec66b0ea5137.png)

![](开关电源EMC问题_都是这样解决的_images/img_010_e9740cbf38d1.png)

![](开关电源EMC问题_都是这样解决的_images/img_011_8979cc9edcf7.png)

![](开关电源EMC问题_都是这样解决的_images/img_012_4fd98be8dfe2.png)

![](开关电源EMC问题_都是这样解决的_images/img_013_9f6bf7755506.png)

![](开关电源EMC问题_都是这样解决的_images/img_014_c21ae683ac68.png)

![](开关电源EMC问题_都是这样解决的_images/img_015_f1482b55b83f.png)

![](开关电源EMC问题_都是这样解决的_images/img_016_e2dbcfe5b356.png)

![](开关电源EMC问题_都是这样解决的_images/img_017_e21ac57a4529.png)

![](开关电源EMC问题_都是这样解决的_images/img_018_3add7e8248e5.png)

![](开关电源EMC问题_都是这样解决的_images/img_019_a6e0b3062bb9.png)

![](开关电源EMC问题_都是这样解决的_images/img_020_077410c91c74.png)

![](开关电源EMC问题_都是这样解决的_images/img_021_c4eeea6cb6c6.png)

![](开关电源EMC问题_都是这样解决的_images/img_022_8c7b38848e40.png)

![](开关电源EMC问题_都是这样解决的_images/img_023_4d18a69d4570.png)

![](开关电源EMC问题_都是这样解决的_images/img_024_dc1bc82e8024.png)

![](开关电源EMC问题_都是这样解决的_images/img_025_4c00654e0445.png)

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

[![](开关电源EMC问题_都是这样解决的_images/img_026_b0d1466d16df.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](开关电源EMC问题_都是这样解决的_images/img_027_efb08e7745e6.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

[![](开关电源EMC问题_都是这样解决的_images/img_028_8593fb5538bc.jpg)](https://mp.weixin.qq.com/s?__biz=MzkwMzI4MTA4NA==&mid=2247498828&idx=1&sn=e91fc5514f5fb14ed26a6ba65a0dd795&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](开关电源EMC问题_都是这样解决的_images/img_029_8f8c22b4fa63.jpg)![](开关电源EMC问题_都是这样解决的_images/img_030_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文字原创，PDF来自英诺赛科。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)