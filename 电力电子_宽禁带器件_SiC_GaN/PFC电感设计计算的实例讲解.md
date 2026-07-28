# PFC电感设计计算的实例讲解


> 原文地址: [https://mp.weixin.qq.com/s/rYdCEMuZuJcUMTV37n8FCw](https://mp.weixin.qq.com/s/rYdCEMuZuJcUMTV37n8FCw)

文章来源：原力创文档  

摘要：分享一篇来自邵革良（博士）有关“PFC电感设计计算的实例讲解”报告。这份报告对于电源工程师来说非常实用：适合新手快速入门，适合业者强化深入，适合老手交流切磋。电源工程师必须掌握的东西：PFC电源的工作模式、PFC电路技术特点、大功率AC/DC电源的热点应用、DCM交错并联Boost的工作形态，建议大家分享并认真阅读。同时，非常感谢邵博士的无私分享，向奉献者致敬！！！

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsohnoNxXuhblxyyia01vuBJKtfLicuVRkWUic3QFPSOHBzCNuIN3Vf55Vw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsqk2RanFWXZV81DCiaLRnzhYjmSd8TicbxM8P2DHvN0WPib88qfGAcenaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsuKdTt8cibJg8WWDdGIUYrEtCkLWa3bdbMRoWZ0t9jhF1eicBiaBscTmqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsMIa1FWpukyow23MdJibYbQ9Znu82XmNFSAcf7HicthPJGPkFHmljx6Dw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsclZ28LnCiaWfb4wuKWOu7NHIhXiaOJKQxwicLjLB4j1GOOUuiacQ6pmT3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGs8BHm5I9apWMKRKg2AZdl4x9ejVwOJY7PmZ2icP5toQQHcHAZQbepvMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsN65pUVqOWyUogbHJMo2viag68Ka79hTzWj23FrommRFPYenS6jgQp7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsP5XWSxoTMwccC7c648fvJFicDgnLrH5YLV2YRtoSH5uicTFZITLmxbwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGs8DT2GlJdQmCaMgf78NMHYcwn7rwmTc2dk4N1g6on1BLxsB32YZadzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsrpQcu1rU5M1V5q4iboo5JbkgKIxr9CRW0xJzqstbEQrdHNMI8DSEERQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsKL3APmBicsxn19KoDAcDKiaU6tM5NoiavOS6icXxAE9YuOQNhbUwvqj1Pg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsaqjIJL5cM5NSre8CrEBSbv57GqUQW3kan6rafuMc6fAUXMtfu9Sibtw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsvHHDXp7h6MSNnKichX959Sn8Uuib42It9aMfM67Wa9aKTvye6BmyyG9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGs5f1fFqc6RGiaSZ2cybmkNmOe8yuQJheezbjsVqsyxiacVqYltjH9Vcbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsBe77O810V7UPxicglDjvniawqyBeJkaaX9wOvjMNKiaIaS09wMzd1BFug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsLGu2Ar8n3XzvkvNIeRFkgCXTYTbpcNCVA51ibxTLZz80c7lFz5A1YFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl90h8MyNTNiaUtibwf8zusGsfLzGia6KbZvNSy6jFR0HO99xo7nFXbTqBkQC4hec85AM0TCRr9KUjww/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDQbicicHj4H373Bia61v4dauoDuHtiao0bUOBTaFLffqRtWP8jG16jCKdhT6icXUsONicqUR42icayI4dg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)