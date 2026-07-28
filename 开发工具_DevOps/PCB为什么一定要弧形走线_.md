# PCB为什么一定要弧形走线？

原创 蜗牛 硬件笔记本 2021-07-22 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/HRX2On\_fXI1oGYwa7NHJew](https://mp.weixin.qq.com/s/HRX2On_fXI1oGYwa7NHJew)

 ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

一、前言  

  

最近一直在忙项目，已经连续加班，挑灯夜战好多天，除了吃饭睡觉上厕所，偶尔喝点水，就一直在画板子，感觉眼睛要废在电脑前，不得不感叹那些专职的layout工程师是很辛苦的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg28ciakSOaumNvamvwrDSSEHZDRkdeH1vW1Ytlx1UNat1wgvbdZ5RuTbQ/640?wx_fmt=jpeg)

  

中途领导过来查看：大问题没有，就是4G通信这个地方需要弧形走线，而我走的是45°，通信线还要用地包起来。

  

弧形走线之前没有画过，我只记得走线一般都45°，不能走直角，于是趁这次实战扩展了相关知识，然后结合自己的理解，分享给大家。

  

  

二、关于画PCB

  

画PCB不是简单的把线连起来就好了。还需要知道电路原理、信号走向，怎么布局才能既美观好看又能连线最短，还要注意EMC，哪些线应该粗，哪些线应该用地包起来。需要一定的工作经验和知识积累才能画出更好的板子。

  

PCB走线为什么要避免出现直角呢？

  

其实直角走线并不是不行，这是有条件的。当信号的频率很高的时候，信号流向直角会出现电子发射，也即产生辐射现象。好比一个人开车，前面若是一个直角或更小的路口，车速慢的时候，是可以慢慢转过去的，当你速度很快的时候，突然来个直角转弯会发生什么呢？可以想象，车不但没转过弯，还会冲出去，就产生了“发射”现象，所以马路也很少看到有直角路线。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg2qhPKP6vHJvwRhian9TJMyydO2kTOsklRCCKDriaxxlGgOGIqbx9zwhwQ/640?wx_fmt=jpeg)

  

若是将马路改为有一定的缓冲，这样车就可以平滑转弯，车子也就不会冲出去了。所以什么样的路主要取决于车的速度。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg25M8YBhfSLtbIicLBwyeSlhnyEeCwMXbUPw0NQ4HDq0spn7H91ZHiby4A/640?wx_fmt=jpeg)

  

PCB上的走线就是提供电子能量的路线，当高速的电子经过时，就不能出现直角，否则就会发生电子发射现象，产生电磁辐射。所以高速电子转弯的角度越缓越好，常规就是45度转角。

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg2GQwMsYz9vCvNUjOMrO5ZTvFPTXZDhgzvmYZmPYibVfAQQyyBiaAcdwLg/640?wx_fmt=png)

  

  

当然做成弧线效果是最好的，可以去看一些射频电子产品的Layout就会发现，上面全部是弧形走线，道理就在这里。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg2GC45G3116oLISYGfBd7R1qGQmp1JosYpLTPgP3iakovjB6hMDlict3FQ/640?wx_fmt=jpeg)

  

所以信号的速度越高，弧形走线效果越好。  

——END——

  

加管理员微信，备注“加群”，拉你入技术交流群。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg2vicEF05xzaGLgtocwmSRKbGGibQldHXL7ZIfzsQHv7SXJ2HbdaG20qEw/640?wx_fmt=jpeg)

  

**觉得内容不错的话，欢迎分享，点赞，在看**![](https://mmbiz.qpic.cn/mmbiz_gif/iaLLibsB5S6FN0h1dvAiaKt7ITP9EYBbIyOGvA1H5PkiaL9NQSoDNoq7Y5kBH8qNziaIYhBZyFibBqNXRHh3ZukzICvg/640?wx_fmt=gif)