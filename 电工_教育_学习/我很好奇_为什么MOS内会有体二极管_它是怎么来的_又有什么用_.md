# 我很好奇，为什么MOS内会有体二极管，它是怎么来的？又有什么用？

原创 王工 硬件笔记本 2024-11-26 07:42 四川

> 原文地址: [https://mp.weixin.qq.com/s/jb6gQ\_FEsL7aTdHUWQOb-Q](https://mp.weixin.qq.com/s/jb6gQ_FEsL7aTdHUWQOb-Q)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

  

大家好，我是王工。  

  

前段时间有兄弟问，为什么MOS管内会有体二极管，它是怎么来的？又有什么作用？是不是所有的MOS管都有体二极管？

相信大多数人都会有这个疑问，网上也有很多资料。王工结合工作中常用的一些MOS管，跟大家一起来看一看。

日常工作中用的最多的有三种封装SOT-23，SOP-8，TO-220(TO-247)，但他们的内部毫无疑问都会有体二极管的存在。

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_002_6c4d936a076f.png)  ![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_003_753f519b2ac8.png) ![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_004_30be20771b35.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_005_0d212dc8fc16.png)

  

**那么体二极管是怎么来的呢？**

  

我们以NMOS为例，我们一起来看一下MO管的内部结构：

假设有一个P型衬底，P型衬底上面参杂了两个N型半导体，一个引出来作为源极s，一个作为漏极d，其中栅极到源极和栅极到漏极是对称的。然后通过一个sio2绝缘层与P型衬底之间隔离，在上面引出一个栅极G。

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_006_4e5189002980.png)

  

如果我们在栅极G上施加一个正向电压VCC，这时候就会让衬底的空穴往下移，如下图的+++，那么sd之间会形成一条沟道---，这条沟道主要是为N型半导体两边的电子提供一条可移动通道，也即我们说的N沟道。当这条通道打开以后，里面相当于一条导线，电流可以从左往右，也可以从右往左随意流动。

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_007_7dd9824b4b3c.png)

## 问题1、体二极管是怎么形成的呢？

体二极管的形成是因为N型半导体和P型半导体在结合的时候，形成了PN结，所以衬底和源极s之间会有一个二极管，衬底和漏极d之间也会形成一个二极管，方向都是由P指向N。

  

如图有两个PN结，体二极管就是其中一个PN结。

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_008_0af3d3ddaeac.png)

  

明明有两个体二极管，为什么我们只看到其中一个呢？那是因为另外一个被短路掉了，在MOS管内部，源极s和衬底是短接在一起的，如下图所示，也就是源极s和衬底短路在了一起，所以我们只看到一个体二极管，方向从S指向d。  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_009_e8a6ab9b1f53.png)

  

其实，对比MOS管的符号来看，就知道了，箭头中间也就是衬底，它跟源极s是短接在一起的，不管N沟道还是P沟道MOS管都是这样的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_010_70e14d5611d9.jpg)

  

以上可以得出两个结论：

1、MOS管的体二极管是由制作工艺决定的，是不可避免的。

2、其实MOS管应该有四个引脚（G，S，D，衬底P），只是我们把常见的其中两个引脚给短路了。

  

**其实还有一个细节的知识，可能大家都没有思考过，那就是不管是P管还是N管，我们控制的都是VGS电压，为什么是gs而不是其他引脚呢？其实真正想控制的不是gs之间，而是栅极g到衬底P之间，之所以控制vgs是因为衬底P跟s连在了一起，所以看起来是VGS。  
**

**在一些功率特别大的场合，你可以发现有些MOS其实有四个引脚，这时候控制的其实是栅极g和衬底p之间的电压，之所以单独分开来是为了避免ds之间导通对栅极造成干扰问题。这也是我们有时候会看到MOS管引脚上加磁珠的原因，见如下视频。**

  

## 问题2、体二极管有什么作用？

既然体二极管是工艺决定，无法避免，那就可以好好拿来利用一下。巧妙利用体二极管有以下电路，都是王工之前总结出来的。（大家点击图片可以直接查看）

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_011_a980877e2ad6.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&chksm=c30a1d5bf47d944d60fa72d37ad4203463320ea94df8b9a95d78ad40692ae1a8a450defa4da4&scene=21#wechat_redirect)

  

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_012_3c30695137d0.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554606&idx=1&sn=d0fbfd8d1263e43a13bf2e92b6b9a3c9&chksm=c30ac8fcf47d41ea134398b37fda8201f34c191893d18410f902458c3833f529d997f25d4475&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_013_e7fb16eb879a.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247512088&idx=2&sn=bd79be35963e5d9830053c1540ff1ba2&chksm=c30a6ecaf47de7dc25183b54de9f4c4027070b8dd4419e4979a7d94990f4cccb62e4e3e1e8b6&scene=21#wechat_redirect)  

  

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_014_6304f68dc64d.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247548044&idx=1&sn=02ff815fd21a11a2792015389b7dba49&chksm=c30ae25ef47d6b487b18cf9e0b085c4fd772d0b5420fc2dd742194de8380d1f10911847ea868&scene=21#wechat_redirect)

  

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_015_e75eda11391e.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247552261&idx=1&sn=fb5b1239b8da16af84c9c7ef7f6b3433&chksm=c30ad3d7f47d5ac15c7dac279a3154af0bcdf681d5da827bae1c4a21940625c547eb1d077f23&scene=21#wechat_redirect)

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_016_c270758cd48d.jpg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_017_a43ff79f2147.jpg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

\-END-

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_018_d96f0d185796.jpg)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_019_854de1eb795d.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\我很好奇_为什么MOS内会有体二极管_它是怎么来的_又有什么用__images\img_020_17c99fedbed1.jpg)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)