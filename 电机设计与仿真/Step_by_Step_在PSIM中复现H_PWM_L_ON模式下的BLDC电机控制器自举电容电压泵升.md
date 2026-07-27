# Step by Step：在PSIM中复现H\_PWM\_L\_ON模式下的BLDC电机控制器自举电容电压泵升

原创 傅存敬 电磁散人 2025-09-25 22:21 广东

> 原文地址: [https://mp.weixin.qq.com/s/tP3LDRNr0c9joDlTeNz5og](https://mp.weixin.qq.com/s/tP3LDRNr0c9joDlTeNz5og)

前文已介绍了BLDC电机控制器中，MOSFET驱动芯片上的自举电容会发生电压泵升的[原因及应对措施](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484026&idx=1&sn=e596b36d98e6b58a5b22e6ce4ecc32b5&scene=21#wechat_redirect)，特别分析了电压泵升的[暂态过程](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484033&idx=1&sn=daef79f20987913c3121245dc42038f9&scene=21#wechat_redirect)，并通过PSIM仿真软件给出了仿真结果与实测结果的对比，仿真结果与实测结果匹配良好，因此可以通过数字模型来提前预测物理实体的性能，对工程师的实战具备一定的指导意义。前文详述了[如何在PSIM中从0到1搭建MOSFET的驱动IC芯片的模型](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484091&idx=1&sn=e93cc98dc0faedb963ec175a712b2a0c&scene=21#wechat_redirect)，本文在此基础上，继续详述如何在PSIM中从0到1搭建具有H\_PWM\_L\_ON调制模式的BLDC电机控制器模型，并通过解读仿真结果，提升读者对自举电容电压泵升的根因的认知。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExUpVUwnZ62TgKxeqiaFfoVF4RVibReJQ40Dg20byOsTibdNGS1APUkj5og/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExEdax1bgK5jRHHNibUEkdCvQj6TuHGBJEDzGusicUKY63nkdkiaibAHuoMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExSfPQocFuaJ1ndg4ao4IwOBCibUZxhpBQ8iahuHtGEbRhvWJR9k0YGhkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExQYtSSczbpOibvKcRhs2Qe6nAnfj1CibgLiau3g39XFRBRetEAKZNCibjtg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExxXtyq739FkMV0ewfCELdQ6vb9kD7HjFtKjVbHYd1e1eY0fSV5ag9bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExgRtv3RawQMUic5JMnQU8bDyCkZkIVJ3XZjzaShLbEe8PDNQ7ibylhjNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExYeDsfKFovQVQiazSTJAicYr5fVLicrkibJkUbr31wxCdAYFTEAMcEIibaoA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExNMnjaO7h7IWe13QWBSzGbUiaj66FIMmsfjhUPdvbvzzIVsanC4RlDnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExNYJKezxnUy0Bqm7Su8xFGibzSHIdCqY0yXnMvPBoOSwYD6YXJn0wRiag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExyianWvFbibRVVicFHicp6EBXRH3TFKRnuKZEhicW26cSWZqxMMRMs0FVm1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExNqSjo8JSV4xJW5vgeIXk7AdwejMxd0Kicl13RMhTFBxgYhvxBgZUymg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExOsGkbR0s63fUic8jWxK9ibicYqeYmDlJbGHlxLu2LibgDNlkEH7OO4MT1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExbHXTFTvZ5Q7xkY0tt1fRxeHib4QhLiaRBc42G4uCcL5asmuFRLQcsicEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExAfZ0j4kCDyibuaXnmx8GkZZRdBy1btuDKvZxtwSAOzibTOoDW4C04JoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExZiasMJ5ZHsSr0335P1funty1ibZOia8rfewTeGedhZPZHOl91fJn2L2MA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzEx6Z0KPezpnANZyyc8Hk8QZSKsCGviaIdpynNPEpQfEeAkBUyagC895Ig/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExBQicTespGpC17RIxr1W4GVkj5onicLSkBmcEAJrgHJmCAxicqDxy9MoNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExePlwL8KmXP7s4fYDictHGYHPvwCHYdPYrZXHD4tyCSfXvAqRN19zNWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExqtHlMCZXSg5NpyuLjqpde7RvzEDNeg0mZibhmZw73FibiazKo7cuOfUlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExx1sHmxjWwAUfqcibfQ7XiamyNmzRibF9sO2sTkeNJu75ok2p0HL0eGgtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREiaKwNicpP15IFnd0TqcQzExWb4dzJJgMtqtfrapreIDibuuKpjoapicyI0D1QAmLE76GljickUw1wuVA/640?wx_fmt=png&from=appmsg)

  

模型获取链接：

https://pan.baidu.com/s/1\_T0vzKrcjfHzMbuC0QJpGw?pwd=um6d 提取码: um6d