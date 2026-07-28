# 碳化硅MOSFET栅极电压瞬态及其与部分导通关系的实验分析

原创 Urvi Ahluwalia SiC碳化硅MOS管及功率模块的应用 2025-08-17 18:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/I2CZEKUD2QFFqspC4A\_oAA](https://mp.weixin.qq.com/s/I2CZEKUD2QFFqspC4A_oAA)

文章来源：APEC2025(Wolfspeed)

作者：Urvi Ahluwalia, Adam Anders

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKkIxVau7Hwic0ibTIZjfLpKINCLAicRQEGdxXusVHZ2RemJ59UsvMTUgRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKphnVADg3OD64aeTxyMxOE51ljnzcVy0uNQo9ibuWfwbwd0lDJ8iaU56Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKEOHArBl7g0eqYogWzXnxITtjWy74myibmjAHPr6YjKYhCWxib6omT2FQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKFy18xumtz6krsoBxY1WtsVVgs4lAgcAicVjU381loenFchfAdttloqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHK1Vichy6rRlGkvhmCVHzXGdUsfk6ibQxoiayu5XaadDjUk9Mx0ly9bCiapg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHK8yBt5fgSgwrt3bsOmCRecwJ27wSZT1CfgujIPvWyAK5HKQC6GlhorA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKWxroXIvGPzMHGIQzZLiaoJwjxibib3icUowicoX36g2QFLmVDib0RPQMIfYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKh3uh5SnzgOacqlqduBqS3S1AiagNNJ86AaJtaC3Y0wKpFribRlMw0WKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKfp8nEyWW5sImENMoz3FxF0pKF5QvsEJlrXPtbibz3xPv26zDr82koDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKf15pf27Mw2n3sib2YRgN7tsMoyULPs4NqrmQUzmqq7DPZ3Ka1AriaHWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKVdIVxGaZmR0kU8GUhAJAJFGuzpcBiaicOgjpDzT8CLohOMM5WDBibSRdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKXo6JcFSr4VpffFlEe3bP6AoicvUDAVwrTwDFUsEZT2Def3IqIpnSNTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKb2iart4qYLEdsPUiaEo9oOHcBsJsTpVAxS2IticvpXxrXSyNicicZAKIBiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKCTrEsHBbANB3dU60H4DNpIq41UhgVUxzichmaMH9SsY7FBLLv70s6Og/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKFI2pqbahuFYJmfguibr1QBFVKYbQAwHV7VV5DNRAiafib95okFwWxOtZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKV0ib29sJvdjtKdgibhVhuThzexcf9ZvNg7QqnFnicEn4wdzKic6rf43NLA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbHULQdn1GYJQ6YwFfJiaHKYoA7SW5Pia6dkGGWhJzyjnLOduzd6yrRFVhc7w0v5464zzAMoaAFCgw/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

碳化硅（SiC）MOSFET 凭借**高频、高温、高耐压、低导通损耗**的特性，已成为新能源汽车、光伏逆变器、储能系统等电力电子领域的核心器件。然而，其快速开关过程中产生的**栅极电压瞬态现象**（如过冲、振荡、跌落），易导致器件进入**部分导通状态**，引发导通损耗激增、结温升高甚至器件失效等问题。

深入分析栅极电压瞬态的产生机制、影响因素，及其与部分导通的定量关联，对优化 SiC MOSFET 驱动设计、提升系统可靠性具有关键指导意义。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)