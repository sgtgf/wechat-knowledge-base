# 双燃料发电机组的pid控制

原创 电机新视界 2024-05-10 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/S8J69gx5SG5GOCkL1PwKjA](https://mp.weixin.qq.com/s/S8J69gx5SG5GOCkL1PwKjA)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tR6ibHibXQwRvAgf6ia352mOJAgKa3qV8nHpFhYYibslVUltyib6naMTdyzG46f4SEoMicmAfx0VbynC0A/640?wx_fmt=jpeg&from=appmsg)

  


  

来源：机电之家网

某石油企业用天然气发电，使用的是多台500 kw的柴油发电机组改装的双燃料发电机组，用调速器通过转阀控制天然气的流量。柴油是外购的，天然气是自己产的副产品，要求要具有最佳油气比(耗油量最小)。此外还有发电机控制的通用要求，例如单机运行要保证频率稳定;并电网运行要控制输出的有功功率;作为独立电网多台机组并联运行除了保证频率稳定，还要判断哪几台正在运行，和按比例动态分配各台机组之间的功率。他们单位有人到美国参观过同类的机组，断言中国人不可能搞好双燃料发电机组的自动控制。

  

一开始我觉得在理论上被卡住了，双燃料发电机组有两个调速器，柴油发电机组有控制柴油燃烧的机械调速器，此外还有一个控制天然气流量的电子调速器。这两个调速器到底是什么关系，它们在控制中到底扮演了什么角色?为这个最根本的问题我纠结了一段时间。

  

单燃料未并网的发电机组的频率-有功功率特性曲线是一台从空载频率开始的下降的直线，两台并联的多台机组具有公共的频率。机组输出的频率线(下图中的水平虚线)与各台机组特性曲线的交点就是该机组输出的有功功率。

  

后来想到，与单燃料机组相比，双燃料机组有两个调节器，分别控制柴油和天然气。因为两个调速器的转速相同，将它们视为两台并联运行的单燃料机组不就行了吗?

  

理论上的问题想通了，其他的问题都是技术上的，很好处理了。

  

当时使用的是国产的机的i/o板卡，编程用的是的，编程和调试的工作量很大。如果像现在这样，用s7-300的fb 41来做，工作量小得多。

  

最后成功地实现了单机独立供电、并电网和多机并联独立电网供电的控制。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/qRk6eDhpI5wFW9PlJPeP834RCKMGJAbC4Q2bDZ8PZQGv7wRPWnIbSciaPSjajFDIU8MobacyXdrsXgjInibRFS9w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

  


![](https://mmbiz.qpic.cn/mmbiz_gif/vibkgHlPVq0uibkIvkAHOPtHA9gym3XODEWrQGWXmjNHrmp8Mp3Mv8wdYjoiaNyL1EPibFpmHlcYK1m1wplSBia5vXg/640?wx_fmt=gif)![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)