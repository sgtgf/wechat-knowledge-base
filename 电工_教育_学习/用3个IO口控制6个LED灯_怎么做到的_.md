# 用3个IO口控制6个LED灯，怎么做到的？

原创 LR梁锐 硬件笔记本 2023-08-12 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/VcBbgp66sSMHZEkp\_FGRag](https://mp.weixin.qq.com/s/VcBbgp66sSMHZEkp_FGRag)

# ▼关注下方公众号了解更多▼

  

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NgCWm0AJqf72jrSfEf9parjfOfcyVjkkVJfdlicYHdW5aP0L5ficxXKLw/640?wx_fmt=png)

▲ 本文要分析的电路  

  

事情是这样开始的。

买了个电动牙刷，几十块钱那种：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87NJrmVeJNUJ4lucIUawic6TOkJIGYqSMpWMM17AI4UkibhzUMRhxMwguzw/640?wx_fmt=jpeg)

  

收到的实物长这样：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87NlXdqia9doGMUIZ7pmpqFUhfT4iaWO2frOBafcCIWvwQ5uJTpNZoYQbTw/640?wx_fmt=jpeg)

  

牙刷手柄上有1个按键和6个LED灯：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87Nm4MOETn5icyMtVYPPdEW9kpIjwkqxHqQ5uMLXSSY5UtbI23ib6vQIThg/640?wx_fmt=jpeg)

  

拆开看看电路板：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87NxwdRDXxCdNEjPZ18H7Zu2zqoX5O0yR9cp6Vb4lMBOU4YQL0U32uurg/640?wx_fmt=jpeg)

  

可以看出，电路板上用的单片机，只有8个脚，却要控制1个按键、6个LED灯、1个震动的马达电机：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87NYJicLPwuu5KIygKKWCNk8WyXicuXvalsxbVTVtdeYk8zdcOkL49gpVTQ/640?wx_fmt=jpeg)

  

初看之下，GPIO应该是不够用的。

单片机除去电源脚（正极）和GND脚（负极），只剩最多6个GPIO脚。

那么是怎么做到够用的？

原来，经过巧妙的电路设计，这款电动牙刷实现了用3个GPIO控制6个LED灯，节省了GPIO。

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87NJrGHO82icbZfpxoaia5TsRxlPthWqO42pWfRouT7ibDzsab6GGnm3B94Q/640?wx_fmt=jpeg)

  

这个巧妙的电路如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NgCWm0AJqf72jrSfEf9parjfOfcyVjkkVJfdlicYHdW5aP0L5ficxXKLw/640?wx_fmt=png)

6个LED灯为相同的型号，为方便查看，用红绿两种颜色区分两种不同的方向。

  

一、原理分析

这个电路用到了单片机GPIO的三种状态：

-   高电平
    
-   低电平
    
-   高阻态
    

所谓“高阻态”，是指GPIO对外部电路表现出极大的阻抗。因阻抗很大，几乎不会吸入电流，也不会对外输出电流。

各个LED灯单独亮起，分为六种情况。

1、当只有LED1亮起时，单片机各GPIO的状态如下：（带箭头的红线为电流回路）

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NyyIbnL1UOGSca2zA2ZGdSveNDHPlkrEgcN2icibWyr7XO1nXSRmzyUKQ/640?wx_fmt=png)

2、当只有LED2亮起时，单片机各GPIO的状态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NBErdU56iaJHRc2fV7niauj80JMUAXlBunbSaS0BsD7zwx5pbd1iaUSJMw/640?wx_fmt=png)

3、当只有LED3亮起时，单片机各GPIO的状态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NaVnjaLiaLX19EhDomcbUNib27e8ESzoeGibxEjGh8icftLZIbOVeazmalg/640?wx_fmt=png)

4、当只有LED4亮起时，单片机各GPIO的状态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NO3KU1JUyibdAjXdRNeNWD7xlwDIfx0161OTTNibFfrXGCc8QqPyQ7OZg/640?wx_fmt=png)

5、当只有LED5亮起时，单片机各GPIO的状态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NybUMAlghton34oZe03Ok7n869KANWAdvAdSaWLJy73zw4I44hfNWmg/640?wx_fmt=png)

6、当只有LED6亮起时，单片机各GPIO的状态如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NYPJKZeB0Fd7q4UcZ9FFNicGrybUsXZDU34Mn8wGbwUBSYu6egSbfn8g/640?wx_fmt=png)

整理如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87N8icgPTclyWlc0ZsaCGTfLGWkZpdeF8UETkXgSTGFuwSO3MtAke9WVzw/640?wx_fmt=png)

就是这么简单！

  

二、总结提升

以上其实是用了一种叫“查理复用”（Charlieplex）的方法。

为什么叫查理复用？

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GBEGe3qt09fBEd9YMicWK87NwjWDA7kvic0EwfIztYsoLZxxCSBs2IwDuRQ5KYcW6S9lItOLTr1Zr4w/640?wx_fmt=jpeg)

很简单，因为这个方法来源于美信半导体公司的工程师Charlie Allen。

![](https://mmbiz.qpic.cn/mmbiz_gif/cGtViclN98GBEGe3qt09fBEd9YMicWK87NJaYibVyeticHkCSEkDloicY8Jqj5zWZqXUdoWvTlsGrIticAjy8rN4O4pw/640?wx_fmt=gif)

查理复用是一种能够在驱动LED，特别是驱动大量LED时有效地节约GPIO的方法。

使用该方法，n个GPIO可以驱动 n\*(n-1) 个LED，所以：

-   使用2个GPIO可以驱动2个LED。
    
-   使用3个GPIO可以驱动6个LED。
    
-   使用4个GPIO可以驱动12个LED。
    
-   以此类推。
    

这种方式能够实现的基础是：

-   单片机GPIO的三个状态：高电平、低电平、高阻态。
    
-   LED具有单向导电性。
    

查理复用设计的方法：

-   任意两个GPIO引脚之间串入两个LED，这两个LED为并联，且LED方向相反。
    
-   当你想要点亮某个特定的LED时，就将其两端所连接到的GPIO引脚分别设定为高电平和低电平，其它剩余的GPIO引脚设定为高阻态。
    
-   前面电动牙刷中6个LED灯的电路，就是这么设计的。
    

下面从最简单的开始，一步一步体会查理复用的电路设计。

1、使用2个GPIO时最简单：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87Nq7ALKzAvZMex3icC9nQrCSYUdGdD57uG0ibhpHKkoMTulsArYI8w1Tng/640?wx_fmt=png)

LED1亮起时：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NEGObpfSdTq6VLHNRVyOgHCXfgF3QCoByPicGm6LxyUhibDBNnwd5jicsQ/640?wx_fmt=png)

LED2亮起时：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NtM8Lz1P9bHlRLIZmfxe5ELJVbRbzLr3BSs3WBWetIIWqhiczfxpQiaGw/640?wx_fmt=png)

这里只用到高电平、低电平的状态，不需要用高阻态的状态。

2、使用3个GPIO时，前面已经分析过：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NgCWm0AJqf72jrSfEf9parjfOfcyVjkkVJfdlicYHdW5aP0L5ficxXKLw/640?wx_fmt=png)

可以等效为下图：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87Nibzz4wmnNPJmNu57LkpQn8ceeoo7Etqq23HcqSo77UYW5iczJeVibHggQ/640?wx_fmt=png)

可以看出，确实是任意两个GPIO之间均串入了两个并联的LED，且LED方向相反。

3、同样的原理，使用4个GPIO时：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NATicN4mib3ALdeCDTAr1cqIN2XFbdZj6kdUde5JHRDZpGCBL3HAus6rg/640?wx_fmt=png)

点亮LED1时：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NEcc5UpWariadkv6gO9juN37bKhELgtKDnvsknC9BwMOczo31aQwABicw/640?wx_fmt=png)

其他LED亮起的情况不再列举。

查理复用这样的电路接法也会引发一些问题。

首先，LED亮起时完全由单片机的GPIO输出电流，所以对于GPIO的电流驱动能力有一定的要求。设计电路时要注意查询自己使用的MCU的电流驱动能力，下图是STM32单片机中对GPIO电流驱动能力的说明：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NuId1HPdmtApLR0dn7JKc54vbZAibJMTjYY44RdDz7Vnw0UFcwaS2ZQg/640?wx_fmt=png)

其次，如果出现了某个LED开路或短路的情况，电流的流向会被打乱，LED亮起来的逻辑会变得错乱。最坏的情况下，电路会对GPIO索取大电流，导致单片机损坏。下图是假设LED1短路，那么在点亮LED5时，LED3也会亮起：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GBEGe3qt09fBEd9YMicWK87NSjGUVoqQHP8AFwYeQuVSkOw4AbVTCMdIBtBu3JLvKkKWOBPaI1sC4w/640?wx_fmt=png)

  

三、继续进阶

如果要同时亮起两个以上的LED，怎么办？

交替点亮他们就行，只要交替切换的速度够快，由于人眼的视觉暂留效应，看起来就是同时亮起的。

值得一提的是，如果要同时亮起的LED较多，比如大规模的LED点阵，那么还要注意一些新的问题，颇有门道。

本文不再展开，感兴趣的读者可以自行查询修炼，继续进阶。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。