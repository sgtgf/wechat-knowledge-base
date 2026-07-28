# PCB样板焊接你是不是也这样？

原创 蜗牛 硬件笔记本 2021-09-06 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/tA8cMSWzZeJUdCjCrVO7Ng](https://mp.weixin.qq.com/s/tA8cMSWzZeJUdCjCrVO7Ng)

 ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

大家好，我是蜗牛。今天跟大家分享一下PCB样板焊接的一些经验技巧，如果你有更好的方法，欢迎留言探讨。  

  

最近新产品刚打样回来，由于时间紧，任务重，所以每个环节的时间安排就显得特别重要。样板通常只需要准备一两片，所以一般选择手工焊接。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg0ZoDrw0HmcmzbSnj3RlicHRBUoN2br4gIpxWgKHeocfnlYrB8mBahfeHGW0NJibhUPVJIokkADic0A/640?wx_fmt=jpeg)

  

1、先焊贴片，再焊插件。

  

这一点比较简单，不用说原因大家都知道。但是在焊接时也要注意一下，比如瞟一眼电阻的阻值，确认电阻电容位置没有错。

  

之前一个同事，把电阻焊成了电容，或者把1K焊成10K，调试的时候要么工作不正常，要么直接炸机。要是一次性搞好，可以节约很多时间。

  

  

2、先焊QFN封装的IC

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg0ZoDrw0HmcmzbSnj3RlicHyIITtBumLOMF8JOSA9vicfsMXfgtkhvhWVlfaYHSSGX4gibibzIeImrPQ/640?wx_fmt=jpeg)

  

由于这种封装的元件引脚在芯片背面，烙铁是无法直接接触到的，所以要用热风枪进行预热焊接。注意设置风枪的温度和风量，一般在300℃左右。

  

  

3、阻容元件焊接

  

先将所有元件的其中一个焊盘上锡，另一个焊盘不上锡。然后焊接元件的一个引脚，所有元件焊完之后再焊另一个引脚。这样做可以更节约时间，而且能保证元器件紧贴在PCB板上。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhnseIN5LOd4YsHx7kY5qpHub6AnMC2uh3gk1ib31u0KRrHMic4K3byUF9YcDU0ibHoFaOAf3rGL0I3Q/640?wx_fmt=png)

  

如果同时几个引脚上锡，元件就不能完全贴在PCB板上，在移动板子的过程中，板子本身会发生轻微的形变，会导致某些元件断裂。在查找问题的时候就不太方便。

  

  

4、先焊电源芯片，再焊其它IC

  

很多IC都是需要供电的，只有先保证供电的正常，才能确保不烧其它芯片。

  

  

5、最后焊接MCU

  

为什么要最后焊MCU？因为它的价格是最贵的，少则几十，多则几百。所以要保证其它元件焊上，且供电正常后再焊MCU。

  

备注：

如果需要准备至少两套样板，那么可以同时焊接两块，相比单独分开焊接的效率要高。

  

  

  

  

推荐阅读

  

  

  

-   [PCB为什么一定要弧形走线？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486111&idx=1&sn=6f54b1669564acf50501e4f9eb84efc5&chksm=c309d44df47e5d5bd140566931d2bd2dcf6f2f27e2fbe46fba9e666f27bb7bf3339ade9f1ff3&scene=21#wechat_redirect)
    
-   [PCB板layout的12个小细节(图文并茂)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486107&idx=1&sn=81f209e9224ca946404646312e39d2da&chksm=c309d449f47e5d5f5d090dae93173b859ece979b75482e6a8b2f14c9e6f8d3c94856629355e5&scene=21#wechat_redirect)
    
-   [PCB Layout爬电距离和走线的设计要求](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486030&idx=1&sn=ca4661f63265baede8fb5ed5eb90add6&chksm=c309d49cf47e5d8a101341e253f0e02ddc8671800e4bc50c09f1c861bc7a821b9f9ac5c82fe8&scene=21#wechat_redirect)
    
-   [PCB设计注意事项](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247485997&idx=1&sn=199198180bf8413988727e65223fa5eb&chksm=c309d4fff47e5de99ddd327042d006c5be5755d5a9728b7c11368f5256851fa1db2efe66ca06&scene=21#wechat_redirect)
    
-   [PADS中怎么把两个PCB合在一起，手把手教会你](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247485987&idx=1&sn=3679bc6e313790f59a4bebb1f0d7d8c7&chksm=c309d4f1f47e5de7422e5bd7449f121753213f88e908d210f9eba5d111d3493df72d7723e948&scene=21#wechat_redirect)
    
      
    

——END——

  

加管理员微信，备注“加群”，拉你入技术交流群。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJDSBpWRvEDwE1Bd6rXodg2vicEF05xzaGLgtocwmSRKbGGibQldHXL7ZIfzsQHv7SXJ2HbdaG20qEw/640?wx_fmt=jpeg)