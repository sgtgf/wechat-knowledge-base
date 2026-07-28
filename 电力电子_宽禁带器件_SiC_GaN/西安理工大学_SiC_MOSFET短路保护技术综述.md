# 西安理工大学：SiC MOSFET短路保护技术综述


> 原文地址: [https://mp.weixin.qq.com/s/CtGg-8bkVKls8UDa3XMV8g](https://mp.weixin.qq.com/s/CtGg-8bkVKls8UDa3XMV8g)

作者：文阳

**摘要：**为了全面介绍SiC MOSFET短路保护技术，加深对短路故障的理解，为科研与技术人员在高频、高效率电力电子场合更好地使用SiC MOSFET器件提供借鉴，西安理工大学自动化与信息工程学院、西安思源学院工学院的研究人员文阳介绍了SiC MOSFET不同短路类型以及短路测试方法，分析SiC MOSFET短路失效模式及失效机理，详细梳理现有SiC MOSFET短路检测与短路关断技术的原理与优缺点，对现有SiC MOSFET短路保护技术在应用中存在的问题与挑战进行讨论，并展望SiC MOSFET短路保护技术的发展趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk6ZrOYX4apO8Wu5xNibuHPmaoVoEfs9CYvOHeNVlaex5bOh2RodF6LZ5IVGdrSTn8SD5qsztUOSVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJFZcuEWHTM4EiczFwBvw9vRcy9Fq2HtL2nY8eQBgytEwhez9FatI8YSg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJWbcJLALwM3s0rLnukRmYib8SetOK0RMzicsBRicVN9AevhlbMTmh2UiajA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJ58e69RYz7MiaIRxx6DmaoXOpdGDO1KTTXWfWf3dwRIdm5ibX3OuhoFqQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJF0R96K57MJ8ehSVGyjKevAPLdgQiaszRiaich2yPNTq4CaRpjctPEIzIA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJUgSQJUhFrb87SeqovHIAoYc1X8NkLhyicDuiapDgnwibdPhOicS0FsHJ0Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJebtK6aYnkqV2KnmozOBGFD6DvNeGKNgemFrc62cc93YbibxYYr3UtJA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJNpv4Dq8suAmvknjZ6CkwFlSOSIqiaI5YsYtOXIkzJpP7Tvs4RdPofEw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJCr7YGuejhm9d0RLQPvEJoIeY9EfBdgWpnt8mpzfv7MxibMJ20lYNGcA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJHwyeSCY4zF9LTaibFpjM2EkFCHzibjA6IyIN5trjJcdtmGMstSG9XuibA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJmr9ia4eH1pPqPBpMAuX2g9zP1JWJIfDibsqGXw9v32tjXkvTuoQHls5g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJytz8rGtMAEPO2NI4DS1XXQibFOwlqxuaPnianyEEVdostEX1B0b2CKgA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vBymUCWKdSicyB8Kf8Xiakag58UrZPPHwJ1RuwTNFKHDT8Hx84zV3ISFvH8icZxjfub06kFg5xjd8aJVkugLbk1Fw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)