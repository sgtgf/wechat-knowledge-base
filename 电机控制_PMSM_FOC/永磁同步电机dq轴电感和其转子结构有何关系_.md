# 永磁同步电机dq轴电感和其转子结构有何关系？

原创 电机新视界 2023-10-01 22:41 安徽

> 原文地址: [https://mp.weixin.qq.com/s/iLsJHnzL7HRAmiuiGHTU8Q](https://mp.weixin.qq.com/s/iLsJHnzL7HRAmiuiGHTU8Q)

**点击下方**  

**关注我们**

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0ueic716ApEBoelb21DwrX7wnY7J2l0S3maoQPDZmSwMH46KerGsSYYUKSofwaSOicVjn77DkEfkRTA/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0ueic716ApEBoelb21DwrX7wibxoDS5FRfpDk1MGuOOqZ7mzXqiaMCPJDricQXj7LDDVJzX1IgEe4H3JA/640?wx_fmt=jpeg)

**

来源：网络

  

**1 前言**  

  

从控制角度来看，以内置式永磁同步电机为例，由于其dq轴电感大小不同（Lq>Ld）这个条件，其可以带来诸多便利，比如实现更宽的调速范围（对比表贴式永磁电机）。

  

本文从内部磁场的角度分析，为什么内嵌式永磁同步电机的dq轴电感会不同，而表贴式则dq轴电感近似相等。  

  

**2.从电机结构材料讲起**

  

铜：导电的材料，优点是通电可以产生人工可控的磁场，缺点是通电会发热。电机就本质而言，是靠磁场与磁场的相互作用产生力的，因此铜代表我们可以动态控制的因素。

  

目前而言，限制永磁同步电机功率密度很大一部分的原因在于铜导线的发热没法很好地散出去。铜因为发热而损失的能量，术语上叫“铜耗”。铜的相对磁导率和空气差不多，远小于铁的相对磁导率。

  

铁：铁是导磁的材料，目的在于缩短不必要的磁通路径长度，它的特点就是磁阻比空气小很多。这样有个好处，就是能用不大的电流，产生很大的磁感应强度。它也有一个缺点，就是磁通到了一定程度，会发生饱和现象，这时铁磁性材料的相对磁导率急剧下降，也就是说利用铁磁性材料导磁的时候，能达到的最大磁感应密度是有限制的，必须限制在饱和磁感应强度之下。铁磁材料还有一个缺点，就是所谓的“磁滞”现象，当向铁磁性材料通入交变的磁场的时候，会有能量损耗，同时有热量产生，术语中这部分能量损耗称之为“铁耗”。

  

磁钢：磁钢即是永磁体。永磁体发生了若干代的发展，最开始是用铁氧体，它产生的磁感应强度并不大，所以一开始永磁电机的应用并不普及。经过很多材料学家的刻苦努力，现在的磁钢普遍使用第三代稀土磁性材料——钕铁硼，它可以轻易产生约1T的磁场强度，算是比较高了。

  

相比于电厂发电用同步电机所用的电刷、绕组、直流电源构成的转子励磁装置而言，永磁材料构成的转子励磁源产生相同磁感应强度所用体积小、重量轻，而且不需要额外的能源、不用电刷，因而可靠性更强。永磁材料对转子的温度有一定要求，在高温下永磁体可能会退磁，这是制约永磁同步电机高温应用的一大限制因素。对于永磁性材料，比较难以理解的一点是它的磁导率与空气相同，而不是与铁磁性材料相同。

  

3.从电机转子结构讲起

  

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQrduGuyic4QDFW1hcWymLBWqChnnq4S3zQ8HuqBD0p3UILWMf3J4VKGMkXbbTLqMNvhFGWEYy9sUg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

图(a)是内嵌式永磁同步电机，即凸极永磁同步电机，图(b)是表贴式永磁同步电机，即隐极永磁同步电机。电机的d轴和q轴是一个很重要的概念，他们是相对于转子而言的。

  

对于电机来说，d轴即转子磁钢磁极所在轴线，方向是从S极指向N极。q轴与d轴垂直，方向逆时针沿d轴转过90度。说是凸极隐极，其实是根据d轴和q轴的同步电感来确定的。发现了吗？内嵌式永磁同步电机里头d轴方向的用铁量比较少，因为除了空气气隙，还有永磁体占用了一定空间。

  

永磁体磁导率相当于空气！而q轴除了空气气隙就是铁了，用铁量比d轴要多，所以d轴电感小，q轴电感大。而隐极的磁铁是在空气隙里头的，d轴方向和q轴方向用铁量一样多。所以d轴和q轴的电感相等。

  

另外说句题外话，内嵌式电机的弱磁性能比隐极强并非是因为Ld<Lq，主要是内嵌式电机和相同永磁体用量的隐极电机比起来，内嵌式电机的Ld>隐极式电机的Ld，因此相同的id，内嵌式电机能产生更大的去磁磁链，也就有更好的去磁效果。

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

[强制执行电机能效！2023年工信部发布最新工业节能通知！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552223&idx=1&sn=9a79a63e6376dc92a45d3945ccfccbc4&chksm=cede4d1bf9a9c40d9fa969d4856721610e61d357988dde293f59cbc0994f971b7dc168c64b0c&scene=21#wechat_redirect)  

[又一“千亿级”来了！高效电机再上央视！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247549961&idx=1&sn=3138aaff5c66723c28a9499b551d3399&chksm=cede45cdf9a9ccdbd20ddd6eb429e4a1cf67bb758cb509a84cf1b292a9887047cfa38edcc451&scene=21#wechat_redirect)  

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

[一路走来，风雨兼程，江西这家企业有太多故事！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552832&idx=1&sn=0691f10025dc8233e2c704ede28ff691&chksm=cede4e84f9a9c79222cf4bb485f1f3e0eb9f33f37ceff89c3ef6bf2136aa0cc5176d46b97555&scene=21#wechat_redirect)

  

[三十年磨一剑！卧龙电气背后不为人知的秘密！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247553465&idx=1&sn=ce7240d5584ea18953b6e135546f0b7e&chksm=cede507df9a9d96b56d7b338b3f7006b29e5756c9c90bc5606002a402f4c3ffe5d991ac8ba3b&scene=21#wechat_redirect)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0sCR1GjicN5H3JA9CTnM9VxoUy9Bd0yvn19ibwZGKBNia444otV7JxK15UuicSszIkCibouLHyjVQr0cGA/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0svhebfD6r7PqegibNW9FLiamErwvhicuUI9ldicWPzXL63R7M90Z8sqoMEPtuncae7nc1VaqLYLoKiboA/640?wx_fmt=jpeg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0sfqJ1JicA3UjnxeCgI2rnhVnib826LrxCBmrmSdvAZhshAibDgtDsDxnlJW0IMeoyFv0gfYCK3nPzDw/640?wx_fmt=png)

