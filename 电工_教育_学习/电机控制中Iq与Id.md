# 电机控制中Iq与Id

原创 电机新视界 2024-05-04 17:00 辽宁

> 原文地址: [https://mp.weixin.qq.com/s/C-UW40I7jjl5C\_CP\_bRq3g](https://mp.weixin.qq.com/s/C-UW40I7jjl5C_CP_bRq3g)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tR6ibHibXQwRvAgf6ia352mOJAgKa3qV8nHpFhYYibslVUltyib6naMTdyzG46f4SEoMicmAfx0VbynC0A/640?wx_fmt=jpeg&from=appmsg)


来源：电机通

所有的电机原理都如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/fOM55InTTqxJRBLGXQf9Qia86bZ3BBWU96W7KDALcvKFv7BLAiaEmM1mcfVia453RAYwO0oruicMXM5RmlsSpRA7vg/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic&wx_lazy=1&wx_co=1)

两个灰色的轮子一个是定子，另一个是转子，具体哪个做定子，哪个做转子随意。所有电机的原理都是这么简单，转动其中一个轮子，另一个轮子就会跟着转，就是初中物理讲的”异性相吸“。

参考上图，磁铁都紧紧的吸在了一起如果错开任何一个角度，比如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/fOM55InTTqxJRBLGXQf9Qia86bZ3BBWU9wn7Tj4QTVQVLpctSUIM9y1sLmvCqbgDj5oBCbXNFv6UDo9jtgdBxGQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

看上去是不是不稳定？有一种如果松手肯定会发生什么的感觉。不错，这就是力，力就这么产生了！力乘以距离就是力矩，在这里我们就称之为转矩。

如果用手转动外面的壳，里面的轮子如果能动肯定也会跟着转，这样电机就动起来了。所有交流电机都是有一个旋转的磁场带动另一个磁场使之旋转，那个旋转的磁场是三相对称电流产生的。接下来的所有例子中，都是外面那个磁铁在转，里面那个轮子跟着动。那么问题来了，从上面的两张图我们能得到一些什么结论呢？  

1.  磁铁完全对着的时候（如第一张图）电机转不起来，对的太正了好稳定的感觉；
    
2.  磁铁错开一点的时候（如第二张图）电机可以转起来；
    
3.  磁铁错开太多的时候，貌似力度不够，带不起来；
    
4.  磁铁一开始就转的特别快，而另一个转速为零，貌似也转不起来（因为刚被前面的磁铁吸了一下，后面的磁铁就又上来了，又往后吸了一下，前功尽弃的感觉），所以电机就在那一直震啊震。
    

于是，如果想控制里面的转子转得漂亮，就需要有一套有效的控制外面的磁场的转动的方法，不能太快，也不能太慢，要根据里面的情况，循序渐进的转动外面的环，这就是电机控制方法。

现在，我们来看上面提到过的第3个问题，两个磁铁离得太远不行，离得太近不行，那要成什么位置才会有最大的转矩啊？这就是这个问题问的本质，就有了park变换和DQ轴，park变换就是为了进一步探讨空间位置对于力的控制。

控制电机，说到底，就是控制力，磁铁相对于转动轴的距离是固定的，所以转矩直接正比于磁铁之间的电磁力（转矩等于所有力乘以距离，距离都一样）。那么我们谈控制其实就是在控制两个磁铁之间的力。有人会说电机另一个输出量是转速，也需要控制。

对，可是转速是表面现象，控制转速是通过控制力来间接实现的。转矩大了自然会转的更快，转矩小了转速不就降下来，所以归根到底电机控制其实控 制的就是电磁力，就是图上显示的几对磁铁之间的力。

那么，这个力跟什么有关呢？前面说了和两个内外磁铁的空间位置有关：两个磁铁错开太少没有力，错开太多了力又不够，貌似角度错开成某个值的时候有一个最大值的感觉。不错，这个结论的得出是在磁铁磁力不变的前提下得到的，如果磁铁的强弱是可以调节的会发生什么？请看下图：

![](https://mmbiz.qpic.cn/mmbiz_png/fOM55InTTqxJRBLGXQf9Qia86bZ3BBWU9huKDo98wS1uoSEGYaaJ2a17sIHwQZ1l6WFLE24qtwdMTgxEaokUZvQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

磁铁怎么这么小？再看原来的图片是不是有一种器大活好的怀旧感？凭直觉，上图所示的电机感觉上力量就比原来的电机弱，因为他磁铁小啊，力不从心。现实中磁场的强弱就是可调节的，因为外部的旋转磁场是由三相电流产生的，所以通过控制正弦电流的幅值你就可以调节磁场的强弱。有的同学可能会有一个问题，那么对于永磁电机来说，里面的磁铁是不是应该保持不变呀？没错，这个问题我们放一放，

一会再说。

综上，我们得到了一个强有力的结论：要想控制电机转的漂亮，有两个因素要把握好：

1.  磁铁磁力的强弱
    
2.  内外磁铁的空间相对位置
    

可是这两个问题耦合在一起好难分析，因为如果磁铁变大但空间错的很开，那电磁力矩是变大了还是变小了啊？如果磁铁变小但是错开的又近了一些，那力矩到底是小了还是大了啊？有两个因素都在变，很难单独分析。于是我们就想，能不能把这两个因素通过一种简单的方法解耦呢？这就是Park变换和DQ轴出现的大背景，来看下图：

![](https://mmbiz.qpic.cn/mmbiz_png/fOM55InTTqxJRBLGXQf9Qia86bZ3BBWU9OYDZChLPooMiakQxhRtErH5ibZBlRbfT6yhaKOBXenaroL0nyCjibf1IQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

内部磁铁在空间有一个磁场，外部磁铁会产生一个磁场，说到底，其实力的产生就是和这两个磁场的大小和方向有关系。

所以（敲黑板状），所有电机，注意是所有电机（包括直流电机和任何类型电机），他们的转矩都是正比于内外两个磁场的叉乘（如上图），就是两个磁场矢量围成的平行四边形的面积。如果两个磁铁方向重合（如最开始的第一张图），那么平行四边形的面积就是零，没有力。如果方向错开一点（比如最开始的第二张图），那么就会有力（因为平行四边形面积不为零）。

上面这个公式（电机转矩正比于转子磁场叉乘定子磁场）是电机学最最最最最本质的公式！平行四边形什么的最有意思，因为他可以被拆成矩形，七巧板的感觉：

![](https://mmbiz.qpic.cn/mmbiz_png/fOM55InTTqxJRBLGXQf9Qia86bZ3BBWU9EOo5dUEIPEeAhbY7o90t8ficIbMvl9Yo3RqnjrCxNfURI4UECq0BlYg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

一个平行四边形就这么被拆成矩形，为什么这么拆？因为好看啊，上面两个图形的面积是一样的，所以分析起来不必担心。我们把原来的Bin称之为d轴磁场（d是direct的缩写，意思是直接的；d轴中文翻译为直轴），把新拆出来的垂直于Bin的磁场称之为q轴磁场（q是quadrature的缩写，意思是垂直的、正交的、90度的；q轴中文翻译为交轴）。

两个磁场 Bd 和 Bq，他们的面积决定了力的大小，决定了电机的输出转矩。控制这两个值，上面我们分析的所有情况都可以被控制。那么磁场是什么产生的？电流产生的。磁场和电流的关系是什么？

磁场\=电流∗电感

又是高中物理，工程再复杂，本质上的物理属性就是这么简单。

所以帕克就说，把电机现实中的三相电感如果能转换成DQ轴的两相电感，世界就美好了。因为电流我可以测出来，只要知道DQ轴电感，那我就知道了两个磁场，然后就又知道力，然后就知道转矩，然后就可以通过改变电流控制转矩，然后就可以通过转矩控制转速啦！

思路就像刚才说的这样，有这么一条链条 :

电流−\>磁场−\>力−\>转矩−\>速度

所以通过控制电流的D轴分量 Id 和Q轴分量 Iq 就能控制矩形的两条边：Bd 和 Bq 的大小，他们相乘就是转矩。通过速度和（或）位置反馈，我们就能够有效的控制外面的环使之带动里面的轮子转起来。DQ两个分量合成的其实是一个矢量，于是乎这种方法就叫做矢量控制（Vector Control），也有人称之为FOC（Field Oriented Control），一回事。

  

  

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


![](https://mmbiz.qpic.cn/mmbiz_gif/vibkgHlPVq0uibkIvkAHOPtHA9gym3XODEWrQGWXmjNHrmp8Mp3Mv8wdYjoiaNyL1EPibFpmHlcYK1m1wplSBia5vXg/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)