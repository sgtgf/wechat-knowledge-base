# 解密三菱PLC控制步进电机图

原创 电机新视界 2024-05-08 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/R0iKLmNbCiI58jPNR-6oYQ](https://mp.weixin.qq.com/s/R0iKLmNbCiI58jPNR-6oYQ)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tR6ibHibXQwRvAgf6ia352mOJAgKa3qV8nHpFhYYibslVUltyib6naMTdyzG46f4SEoMicmAfx0VbynC0A/640?wx_fmt=jpeg&from=appmsg)


来源：电子开发网

  

  

1、你要知道步进马达的工作原理。

控制方式是脉冲控制，而不是电平控制；

控制信号一般为低电平信号，而不是高电平；

度量单位，也就是如何衡量步进马达行走的距离---步进角，就是一个脉冲马达转动的角度。步进马达的步进角一般为1.8°。0.9°，0.72°，0.36°，0.0288°，等等。步进角越小，则步进马达的控制精度越高。我们根据步进角可以控制马达行走的精确距离。比如说，步进角0.72°，马达旋转一周需要的脉冲数为360/0.72=500脉冲，也就是对步进马达驱动器发出500个脉冲信号，马达才旋转一周。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/h1KwVFrY69D6FV4361cgZ3p3kkx6aPSCZctxD44SO8Hlq2WYtIo0NgujzSCV5fGq6wNxJTXFDHibibBUR5XBJg7A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

_步进驱动器TB6600说明_

所以，根据以上步进马达的工作原理，你需要选择合适的PLC。你用FX2N的PLC，需要制定为MT晶体管型，MR为继电器型，不可以发高速脉冲，所以必须用MT型。

2、至于接线图，你要知道FX2N的PLC最多发两路脉冲，脉冲口为Y0和Y1，频率为20KHZ。

附图如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/h1KwVFrY69D6FV4361cgZ3p3kkx6aPSCC7kLWecWUp6cqvd6sNictmPfbCtXzudRlndRYxzhhQK5KN479xQwaTg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13)

_三菱plc控制步进电机，三菱plc通过步进驱动器控制步进电机_

3、至于程序的话，看你的要求，是自动正反转还是手动控制正反转。应用PLSY指令控制步进速度和行走距离。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/h1KwVFrY69D6FV4361cgZ3p3kkx6aPSCZKhLczq0jicZ0ZTlnl04dR3AXctU8bwlhibIicZrUfoGmz9xua0vbPRfQ/640?wx_fmt=png&from=appmsg&wxfrom=13)

  

  

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