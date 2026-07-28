# 新一代SiC器件/GaN器件的三相PFC整流器/PWM逆变器系统

原创 Johann W. SiC碳化硅MOS管及功率模块的应用 2025-10-31 15:51 广东

> 原文地址: [https://mp.weixin.qq.com/s/XbB\_EJ7LulrHb3D2u2zxqg](https://mp.weixin.qq.com/s/XbB_EJ7LulrHb3D2u2zxqg)

文章来源：苏黎世联邦理工院

作者:Johann W. Kolar et al.

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnbuKSWY7HicicJwWiclBzgf6I7FfI1OpU9chE8toYfkc64QBzOfZlt93FJHbQNDrcJkFY6uGicez0VMw/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXC8DMIU4CZYyTM1An7LEzRXpCX7Me8pLpFpC4ZSNfz87ujmNKXic3Dw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXykUMuOmlQKPUicCPDD0Ij6DVRXA3NdBvWAyonkvEu9GFoQRfddiccBg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAeRgCL0mCqSxicWY82ViaY8h4iad7jfqLmuntMJW8icYl6vicmvuB8EUlvkg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=2)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0VEwiakqeKS6oe25SqvhI1xeTnZGlbRhVolKsZGUGBgWCd3HllXdCbw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=3)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtf7sVBNHKdQPyBnUF6fAQgyiaGlvVicxO1ELwdUtN6X1L5nIsMj3Uicsw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=4)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9S5YlHY0HTmKufNibyHibicmeqyMMURPYR8m7MVeuQD2cLKzfW7A8aBgQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=5)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9ODw0XcnNtCylyDuy9Sic1AjGpANyKh8k27qBiacqNC9PxafeY138knQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=6)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA4ZRiaPXAicJXAMCMticHAR3fRBiapLuvnHgxic9vjtP9a0CqXbpz3iaRlW4g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=7)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9SqeFQzqbfoOuzhnQnoOS1jJOzOfokensIrEibhIRV6p4DDgIez6ib1Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=8)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXWBaLRDsVB8T18NbibibgA5QqWv8ibBwumrIIryeLY8aDNYDg0zUicdpbA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=9)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAdaSHpXTFPjNmpibHrk2OTDhBV3LLEpdwkg0KCz1XQ1qMpGZ7Zmn6BHQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=10)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA3I3njn67nHMOAGDJb8iadeJ5L8CN2pqqS3fickicZ2yLI36IblrQIYhow/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=11)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASKlou4PfqFB0QOGhNDTqwFt5QDKEzSGKCeibokVJG1pFh95gr28K1xQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=12)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAha3ftAehDwNE7sGAW0P6yDa4tCX4fj0ZyLV3KibhYu0HYLUh3TCVELw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=13)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtvDyD6CEFIh3wzag2USCs1M2EvwYwBjptzQg8BOWAuibDjMicVibniaQ1w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAPsFVKmefUa3cLLaQclKPRvicX7reb71GkJtVeaBcGpoFsZZkwfb13iaw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=15)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAFpQGdm61iaGTOQbTPnUbOoJd1ecw5aOFWW14NOdCJn1RfduW3Vww7vQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=16)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9GXhzIYM5RL5l4HFzbJb9QZpGDCjKnRNIww7hVLz8qqJYdHHjCH0iaQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=17)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAsblPwL5UCEicH5ZYl1o9C6Ux8p8nBmWlIVs9Qazn0p1Q2l6fpHfNrHg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=18)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicApB3850xfZCRmAYhBI0SWg1rXAYsEZXX2gLEticfCnk74ZC0QTmODqfA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=19)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWHsokibIUia2QdCobFnTt05Qk4XvJIQ91hKme5Uq3qu9Zo2iaNxdz15TQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=20)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9YFGQloSMwbjU90MwxiaWtoENA21NfC1RzIaOdELNKUPay9dqia8E3Ig/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=21)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQk3KQWOlySpLwqTy9JQj2WGFgUlDA7CCbBUB9IhugskFMicuSChSVwA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=22)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAHFaFZxgK2y8QcaPaF4kfSmtLDnHJop9SFaVOcxVZwq3mgbzZ7kFQew/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=23)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAE36mSUibgjPEYBWUlTWicvVZhonoT9S1yRfjpibGJibiaKSPYfx0s4yjmow/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=24)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicADp7ggaRg3YCEkIhnTYQU0OMNBxUGn3209eqlic6MvLMcD6QYibOg5mqA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=25)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA3CXQpJtS7lbJmYicSH5eOI7wmvtnQ1u4jfN58ziclJcXrVt20kSSnJ3w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=26)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWSf5ajrUf3nUxAicnlRNpqpNZUlTmPERvmcxb3oXYsfzFDICF9dnichQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=27)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgoFllzb8gSN5UIaXTHDpicYZeknROrSZqbXxvkvSW3WLWxNZYYCsJjg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=28)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAibdk4THbxiaBgycyl5mM0gWia4wko6EoVVXE9s242OMt0NGwZHlibvIvpA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=29)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgmxrO2XWyBqq7a0wibhkcB7VbMwLVEwcJuxcd8hQRscFzfkmibWlSlwA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=30)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwtRSkl3enk71furV2iaa2yYOSltmicSgyXb3e28BsW0fJ1WibfwC2ibiaUg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=31)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKTo6S7Qcel2WWIlhHNtvOrDekHIsLecPicSaoHmbZROkaoIvUxDLiaSQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAAL04yTY6GDdbsA1fmcwGc2MXkqYiaiaZQYTjemBExcVw5vk1MgpJNJdA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVf45XaicqhZRtgjhfJiarjrmtxK6lEcqwKlID82L2r6RppbX259wibIicg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=34)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKrr2SsMYWG1qh1eK3ia0tu3hDP1gJ2chQ2K5rLOYRxMe79mUYMBeG2g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=35)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA6rhWN4rswcIysUax7WzjSqtXO7PibbYPjoweveFjibzRvJztUqHDTZsA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=36)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAZ4h8fVOCV71ORqtPftYgSJYotreUh3L3OGhXguYySpwhwyXvm6ZJXA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=37)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAMvJ08w6GbcLGibXwicUvmcnTvDiajSN2qVoLVM9YLmYyxuueico7TtTuzw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=38)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAknR54k2icECFYZ686TKZTYvHGd0gknjd162Lib5EbSIIRZOic3pzG02Dg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=39)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAhNP6UovU1JVES8aWCiaaZDaycwWGPMAeicLMsbAk6HYbhQgctJwQtj5Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=40)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwEI9gvRbUpWpbKPPmsRzhZhNa7xKzO3pZRX1ZQRqnicEiajuicrm7FygQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=41)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaribHUym8D8C5ibfcDDrib8chcia6yypw8muf2OFfk2cQacbhFL6L4c2yw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=42)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicARCIByqL3qcic6RgY1VXogReq3dLcVyjHG3KQZ5D00m327Sw8AE63zVg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=43)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAbASOQEtzgUqhMtxhOibAQ8p9p6o9UDHO7KKITZGR8S4t4mD5s7ZcuHQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=44)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAcV0XAibsRfqnD9sIA3YpIicStMy0mY4aXW8FiacxicU6XaOota0yG5WZzw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=45)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAc3Dp88u3b7ic7S1TTcvYmT2jwAr0Cg5gbgw9cVwvm5OBibI478RHS9PA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=46)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAEtUxMh4rboZbI5J7d9VJXGd5Cv2wMImGiaC9WrShXbicQAQfGWtHNsJw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=47)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaSVry28BHdy46bZ2xpsoqIvr2DGyQj8y3R00fI1fdNcBn1YSn0X38w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=48)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAib1MsicUxw4awC567PWAkp3L2UjzlualibdgGZK9ia4bAibIiasm5HLF270w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=49)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAGJN8nSkaibV4abbLunHsRkkZpOR9CphgzLyb2evuBkwWGrJ2ZXBVc4Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=50)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgB97vKxIT6YzV28rqgQiagsRYIAmvQa4TwM2T9eQ0WWcc1Oy4cbGbug/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=51)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArQXkhtSbbaz38tiarznNN8WEdFvSdh8vSVZg3yiapF81C42OO9fM8A4g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=52)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAB0Picdtg8RW52miajXgGsbk6OoHA6ia3At69nJRK0yX33avAZSuvHZlQQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=53)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAr7zs02GNhZjNDdt2URSqd3WdBSJFtC1iawc7FSrnSYM3poqxqsTicB2Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=54)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAP3XLxyoicy2RZPWKDTMBLHRQDBEnqsT24QJ3xibLQibH6ekqrOY3NfJzA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=55)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvOVYsRRkic87NgB0HZQicsEAEy3pfIzplKUwRRBv0nvbC8rlKHvvOdLw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=56)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAP0ng9tq7XrsOPPf99MUPhGVXvPUl1bWkiamxk5VFOzeBKtoo2IKvhwA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=57)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtFGReH9ic8QZhhvTAqRjqtWKicN0VpCJto9Eo9ovgDPhguIiaGoTicVLCg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=58)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0SMcUyocAUC8ZibwwIRUwiciacnRPtILfFCrwBDFibEIhhkRuXiaynpFicuw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=59)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicATltr2I6nb6plO957qBEczXTicnibGMMHWo6p8akiaicd0xlm56l3O1RFPA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=60)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQLQSFb7Ic57smmzOPPbDq5nQj63apKgPtvemfpxhRN8cXF5hVP7jFQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=61)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAewL7fTgicuEF6QRia8ib8ic1POSOlSsxss7VxMwmUgzJqlj5jjhpib4dujQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=62)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQ2fApTIuMypll51VWExiaapFw4OnHxhmicBia1oXiblrwdnAfVLcYWlXKA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=63)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA19YSLMFC9eryExjGiadMvexpFsFpbbOaaGXXwGGBGWGZHcmTQVWYdaw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=64)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAt9ibdrQnKWhupNtGOGsJKTgRJsH7YzzHOenjxSBBicc9YVtlo2fFWGBQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=65)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7YgwQrCFIgs1CLyjf2T8iciabZDn3uvnlvm1jhBVl7IHtGnfnqHxX6Ag/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=66)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAYyeYNg4ceKf6k2OabXZfB7SxXKr9ZM6M4RAe8EfPOGfjJoJA0qy7ew/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=67)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjiaT0b83hC0I9RFBTtA5kiaUkJZmiaD1aPPLA6IN4GpCs0Dkuhb3PuUNw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=68)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA08a4enOVDsWlB6Ee6a2XNp0sMfTo8tia0twbricqqPmdTNP8OQiadBMPw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=69)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAmibVrtsYKhrfuSPKFCFnJdgeWT7by2r5Cu6D3QZ1QGicicM8fGhURuib3A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=70)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA2ne9xy7gylB0z9Nhvt4ZmthNWmm9RcXqKNnfHSoCrBnFmWKK38CWjw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=71)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgatgHZS3ng1CA1U3lPmOBOeU1mvsXfdKUdDmlmCibtcPtN3WGnhCa3g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=72)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAdFNm2AEVdV7PppqNvia9kFSJzSfLHzxv2OIvezbtqwm3am3A8kMZDfw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=73)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAUS75OS9XfLruBGS7NMcONQpXS8luicICeOgBBO74ByI5XtIl4qwQLvQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=74)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAR1JEf59E5tVqOk7Gvm8NpKrFHVticFmtXiakePK7RP7jAkWsoKNlD0cQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=75)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAkAwoswHIygqtgLXkJcZJbTaFfYInpnNwmniaI7DbaMR35X7uv3hsyWQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=76)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicACpmm0Gl5P2zZDRrzB6GS4wnVEHr7rwVQxkGEC66tdjgOswuSHNzGNg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=77)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArKL7BvHcmsBfx9QpbWCAAqFOw7z3KMMxjxDKibibuZQ4VI0ziab6Dqk6Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=78)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAJibbOribQlANYdZJR2CdW9CxWNJ1b1POt9WTmdHBoaW8urib18uw10zJA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=79)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicANhOmGMMODvyWkTBRVSmF4aTemCO12kbxcrUbk5XRWASqFiaCA9IbXIg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAx6licXz8HJgLOdx9xEOyy7jn3Pt0NmvEgSibH6ZRomt623nVsSKcPMXQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=81)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAibzibzlN4rdWMOOwUX9DdoH39dXt9y2eE3roXYjLre48XicUVgCtUkibYQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=82)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAlzBlne6wobst433PYOrLd6Fs7bgm0bgaDDVh6o8rfdbgp1XY0icEJOA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=83)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAn8KGibyWD3Z5kuQJUtrb1CJodlnMw76kA3Grxy135QUn5k80XDRGEdQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=84)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXYohuqbZJQpIiaqShotbcp6yNvbNttG6235JujkG5f7CBIpcvKhAPoQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=85)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAH8tFHqCuM3mqeictgyVmNEv8YYjltyJRiaPhP5uZHRXpL1QPmfaur7cA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=86)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAH3b5Zn9etK5ZmsZDblpa0vjIoG2Yysxzt1wcoIxyb6ibJN6afK4vnvQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=87)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAkoSIODfRkLIcZqG0ic220NbVbuWyib1obWAic7VlUWR6hemsDzTPnvWow/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=88)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgt0AeSaBHaaqFGHkCPblVu3V0U7wqzHYuUnGEmQ99d8ZWcaSia75ricQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=89)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAzBKLoV6fWtboEw8hNb5USTLVZxMAeq7HnB2dPWjyVC3hg9CQiaYVNLw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=90)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7W49ibXCsuJa2CP2qibrmMNGZicAJp7RHE6hWpDWibfUFDuond8XQzpYJA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=91)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAibcFXuc11joUOI3Iq7dpLPDm5twlOMBaDDjJFQnMBBJgBgSHaIdL2Bg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=92)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicANuquWe6xiayKSLYG0rH1QQAb8qOlhiaNNd5vGp9WJNicE0u7WialXibOZUA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=93)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA2yBGgJll2JX63lFAgy5iaK0FzlicubWVcoJh8cfwP9mpXZjiajb2hA8pw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=94)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAqPzGegxpJMs2YMlVT10ica91RViciblMVw4dCJBrs6j64BicxPibSUojcGA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=95)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAy12gm0Ar6qibjXNJHq5GXeKa89M4G1ntVYBJxOwzQJyeQOD6NRIjRoQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=96)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAOgWJ85UuzsUY5B9qKG08G7uwibmbseqGBcrWmDdjVNlv2zSUlXE7TTw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=97)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAnz2giaVlajd0gNFVRib1icsgwdHIaWXM9vyadU8RuvFFLFhB66Owu0MWA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=98)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAicY32kA7NicvhfLbpxZNCYH994VzTgvNtEibH7caMxP8QvK6SNaGBsSAA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=99)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAIagalxWtUBeL8jh0OtOkicNMlJKkdReTpQHoL0KGhuI6L8QbMpicgxCQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=100)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAxiclNzRCaUzWFyXo35Uv2hsEAzC7YQJC0UNhrPxicMpwDcx8PyzAFyww/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=101)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicATodVibS1U0dHNjJNEKZpBCTVqGYv0nU08icJ4YIViaAicxbHzgVcIIC4oA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=102)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0mCxyibyfufHQZ7ApdH2DakabqbwBbQoBzicsrpFmFVzwJtB711EnmrA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=103)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAK8XGN8wmfQl87jqHmdXsOIA1krUAOnGBxaicwS4O9u1DPp641ibp2YnA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=104)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAcXODUugHujN6S7GTXhEAauNf3GfA3YxuJ41CoyPSLhfRIsNBZywFGA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=105)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAstBmyJjNVXia7ibia24htXe9AtCpqjaLYVYtUibNIXVE7kIM8q815icgeUQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=106)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAAyH21QCmm3mia6Wtg4SREuYfbfjJaJt5vYDf2qhrqWVW1AfnOwVcTKA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=107)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvKR81w5u3ZpCXBu5MrnHMcNtOdf3PY9fneWj8asapCI0s7Fia15AXzg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=108)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAT6FYkv2Wl2vibHLeft7gMxYnBqicibJucqFe5zMf14qNYlPkSPudB0Eaw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=109)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVroQfBqgGo4AMBR0Wo1HAXpJnUfoickEYn3MdrHqs53Xjdk8VG1A4RQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=110)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXvbFP6ngNKZCawxawNic8DPaibhbmt2j0tqnZ9eapjibfqyJEPYT5Ukfg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=111)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaUeibBGrA1iaDFRibYJl5bJ80q4ianfWW8ocEiacNVyokVdkqJNx9DBtscQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=112)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAHbBOSVwTnibG2YRrJCOIBpXkWHgBibJnHu6aasskk8EvveB8Ovf9pV7A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=113)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjjzwEj76KqibtfWgzoWhkXFmibreNGdy07DB65UpKaTs2puTDfrxTdcQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=114)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAdwS2aXAEOrynVXLPErVczdVenefJkutZ2OhFHzld8XmLDficg1IP6jg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=115)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXFtOF0QbbFEDic7fIAnQRiaTyqTmAPIia4aiaibkFPTt4unXNbdKadUqEKA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=116)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA71oKzvqXiaVQzGHziaTZc7x4M3bTo7iaUcCIHibAwF6kPRxkRUVCibYaYbw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=117)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAM4HXP3UF55e2nC9QoiaAV2fpjeM9S8pK091GX0plYicrULCPJaiczo2rw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=118)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA57rRYssyH3pIXZM2VibINneRibGSUhBzD2Fvxr3pBYSI5gbb2ofz0VOg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=119)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKZgSMyuz3Pv3EEjzERXtNZbW6icQ1wgL6zwAibNuBhm8DG7xzicy2zgCg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=120)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAuOGGa59ygHciaiagiaonqAnbcaA8mTBf7gyr73mPhmWzdzDOkXxtJKHUw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=121)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWAhJfFPGkRV7l9MF5EdT6X43bibIXvRszFlAMoqVrc2U8v9nAY26ZTA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=122)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAic6dHOBqsjgHibVRcVzdOm27MA5I0WfEcaOee7VdvjLjjsxBd0jY3FGA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=123)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAGlTqMQNgR1CibXWIutGOicNP2aJHpgAPzV0lEQJibFqut0dicHLgAnTiaHg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=124)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvq3w4fn4ickxwDZPZ6g0ichrH7dl9oXEfN907k6XGiajl9NbibhVhEC7AA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=125)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAq8USicfKD1OeaibN7w5xF7LGAIwqyoRLwPwo8egA0CYrV6JyKtILOhlA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=126)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAA9KwGbzYKLQiau6qtx6dVvmIEianib0Yp4FohUlHbBpJqoRByG7fv1M5A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=127)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwgcU8owibEAawbjs1HokFp8sLPqnFkIOv5maHbjWSLw4HtqtFll1tkw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=128)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicARhEPSPciawnrk6FZuZfEzYOoHwDBg4T1VDzEe39cBHqLgaqKb6YFCKg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=129)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAghdglUOIUu2h3N5abwrTg2HicnQZDCdGVAJTrkVyQwceIFItdoDKfjg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=130)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvpufkIHSn7bH9tKE4lJQPlO4ocS6tyRb2YohBh7yLYibhdDuoDnGkFw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=131)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA5ApqkNAoibuTmo5bImDVuV4DVOHJCD77DDpWOqD7RFADkQLaEqIRlcw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=132)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAszyeQusU5FibqsnrZnzHmcUFMEBGNn5QClZhB2zTQU46eUJh1LCx60Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=133)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9SU313PQsJlbXeJlw76nq3bLLOicVLRhxhtSDamlxOcGywhFibyia11qw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=134)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWd9AleNc3CictkCjHyPd0d9gWUHj4hmaQibJfvXia6q5wib5NickJpNqicRA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=135)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAGmZL6v4HGUxbMxFlxk2CVj2G35tlE3wGJDqkH5dxm5f2ZJtMWnP2PQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=136)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAhDPmiaA8N1BZoiaMgaNKjd0SdFIHT8LdcID3wc4ccA7uup2oe7RW1c1g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=137)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwUyAxrpJfJtpeicOLqQy7bjRn2UawUvOnccPxgl0PR9nUR1qlnZPsZw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=138)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAmic9sg5UDicmsAWmKiaN92C5tdBcYU0yT9L76KP4m7FkT3VagEXNRDZ7w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=139)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAku8OnIfmRaMUmxXbKbS0UyibcSI5ibYoxIZeGa9icZto7q4w6LzF97kmA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=140)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7jAZB9laK8FGLUq3NyG4nwYTX8ibMymXFIpkO3g4bkhBHoIibxpCjQwg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=141)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAr8jvm0HCKLxxEOhQZ6MFHwVXwJhdIIyj3OREIVoKWOSgH1H95SR3tg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=142)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA2gQ5CRs3E79K758eECrPJAo9icX9JaBibY6pzdFWuntVHibPVoIlRaRrg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=143)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAlfyrWFnaob496bPpoDibtxXupg0qnRFITiaiamhKuM0dBXvrEO7dYj5lw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=144)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAfOFQ0kNfFy3ibOLEq99aul6J1BuRfiaj8QqibByjoxia35wer0sibMJfcJg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=145)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAsDyBlQ6hsuyawmvbnbiao3ibfUE422fglvRJhWf0LAAic6u8MDk5avmlw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=146)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA5dZsRiav9wIwB1nZKrzrk4L5O8X5CRowaoia0FaOOX7dp6ichjnr4Kx7g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=147)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0zTDEIAesS4hWhURPiaIg1VtgLdWtfsyO0DNrgeZkGbF53qQhX3NDag/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=148)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVkKiaRGOhVKiawxME7bSTy1gnjgcOrwcV78OYibESEPEtichNWJE7q0XUQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=149)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicALVwWT1xerNjZ4TrudTNWCx4c8kRXe3WK6YibQN89zTDJt12nZcE3ogg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=150)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtpuuCm2hmib1uicjSic4YTh2EMzkTClMOQib3LV9qIv4icibIIsbguu0iaXiaA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=151)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicALkvpc61iaAwQqmUicuUSJxCgsZ09sEcGUnqhiaVMvU6CNhGhOsLyRohbg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=152)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA48RVG8n2hfXVeCPyATWooJOZELWPXMJMhXhHXoqOgPH3BxobR7OWSw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=153)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASpQ9mH7uibq1j0DGboeNJWPCw9cBbMCGgqhs86XJMKbkfXKRDSyNouA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=154)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAyDunBT2yicNEicfqwoePzQSbQvUuq9FLVRGzosxsWAX9jIhsZunyeJGw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=155)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAaichfiacIQudSmBHucqIkgSy7norYJHmEb6ic3ZuR6gUm4IUoLUnGqb3Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=156)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVX66r3ibgeiaXqiaiaPgUUzpAmnHbSDlVtib1ptsTFnNoBxRRHbibfDvLgDA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=157)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA1y0L776DOKgH1QJqoOwuwlJziaZC7ktCQicghVlp4Fh5LwHwbYmmNIhw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=158)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicARnXia8OBpoFBymHXRjeUXgNGeObw5CibvYdFMJB58PlpINv0MLdU0yDA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=159)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAS7qRbU7GsNl3dbPxjZKAhC1k8YqriavsyVXtWumwUA8KIVwNfxgiaZXQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=160)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAJXaFuzodSD1rlk4ib7K8X1osKwGG0a7Rl1pNx1S3iaH7miaWyicnWwul0g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=161)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjJjJxxqABPXnU2ToGZ7Hscd3nH84iaRjX85BGHtLQAD3Z1ohI5L9icbA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=162)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASOK5Mq8FtR5p0ZRjDahc72vOU5M9LsR7kO7qCtbKYhA31ia7EVyPVJA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=163)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAfibgor5XuvmBk7NhuA0tOVXic3PclJxfYgcnamekice5LR0C32WL0C1Rw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=164)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAia6DgnPqTsdpIicIC1NFASTQm0EfmDooiag4pxTvibnFybcMia3hUOiccF4g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=165)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicABrF3LUXtbve33INJRR6JuJa7Twt3RuictxyymibcDrH0GIBoM1wjBQNQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=166)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAh81WpzXBbcic0ISAtMEer4YY8eNp1D9eWibbt1hUa8AffE3b6gUE4uOQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=167)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgKzicGyvnj7m30nABz4TyFibNkVpNUd4BWtsewXBswXOdoh19N3je65A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=168)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA1yp0U7l6NAVYST2RhjweK6A83OfWl9bryqcAAILaTxbVU6hq75ayNw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=169)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAsHrZnHsLXLKQuXXUwZpgicUv5K9yYichnC0qcUU6suD6OpIbHbfofr3Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=170)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9MqianrD9Yc6VVCr1DJhJWCz3gQ45PO88tFTON4lsm4F9jpuSwbV7Pw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=171)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicApxXcY2icTIgHahkBIgzWAU3h18oE5iaj4Acq2RT4mvibpAfMPr6V9BnJw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=172)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjbIAyEdOce4TKtcHZ1XibYJA2zh1tS5CSibI0cWmmnQrMkeQDIyyW1Rw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=173)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAUEVghwfYMnOuv4pJAsHmCibPia1V3dx1KicOnga4fHmjLoebV1Hd5h51w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=174)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwPaiacg5Oh8ccfQrbj2uqIvBkiaIZRY0Zs6POGXiaCnyVfQpU4HC60nBQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=175)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA8Xsge24q9kUImWqTwLg2SBsdMa1UEibaZhMXjdCMfE5oorLK00th8AA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=176)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWkP47D5Sc7YK6Ew1TIomnJzXqM3f3JoaVT8P9bDP6seEHeibuibrsOIw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=177)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAnRqH1ficTF3zprXW30f0wibqRdiaTxJSYxQbUib7diae0cbqpFTAdxiaWE9w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=178)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjicnUhetTU0J5icYPmzC3TuzSbybNUxLlXrZPyFAMMv2IkrugaOicKeRA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=179)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAV3YmiavRVRWDDibNwEDJbqlk68cvyrx4yaG1I5RC6yGNkepDFV5S8TZw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=180)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAqQ3N5kqhOibzCR1Quibnh09ZMqOPDAnztXh3SibxjBpHmkPVJvPoPbpQg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=181)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaFAFzxic6Cd2dNdPAbwtcBSBkECOCDauVOWiaIBqohGQmdbIDCXQdBrA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=182)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAoEuCGR1TtzAJPpxeC8M5PIxfIIO2kVHElO4aCdaeX5icq0iaBfdqTdFA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=183)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAFf9cVmd3zR1CSboWDicgINHXhpxX3r1XwhvNbYf0xy4rgmAMwNmtlpw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=184)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAxw1F7S6ibgAbc4tK9lE5aicxcKTe2bz3l3JWFYMpbfZGIpmhxh9ibfWeA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=185)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAicxY6SB1l2YI89VS16bnF0oicUUs7yekw9Tiapgj0KBVqZKttZteINMow/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=186)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAHBhoj4M5k9phbzvpoXzwHWakbibBPhia1W8pGIQh9lsXKcE1yhV31efg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=187)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicADiauBow1lfxHs47cUXlZKMyvVgHl543Uib86T5UVIPocUhicJAwfP9PWQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=188)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicADx92c307o2HBCd5CSlWCZZgEER6JKEY29e9RVCBrDkE1O6fDSkLNVQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=189)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQeaOvOfOiapcgNEarFvOiaa1hsoAdxREys5jL4nSF0U5LfR45w2uAyNw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=190)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVZcg63BSgAgzmqgFSrpurH8L5Libd4N4xnySDy5rSlEByTceTgZGvwg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=191)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArLiapwHwZ2kCpqyniaoZGlbn7gE3qBxOQUdH9BQJq5D2Gfpjlrfyuhbw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=192)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAJ2cm22XOOPrmTrVDQHKXmZXWTyKZxX3GlPiaph6SffPay7wV5xH3emw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=193)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAYlDoR2kHzf66YXbp8NeGPZYDQQD4XsLnKMn6MErfkmLqD4IETY4jrw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=194)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVgibXgjIfdDA8uudMGywIyoxiaFwokAHAqAaSdxa9LaOz7PpceISfakQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=195)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7jxjAcdqDT81aMtPCIia5tshU2C5ZvnCsiaHzcwNiczGib8xtNOice3F26A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=196)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAS2yMJsCVvqNqOOnJEThU4nOF3qwmXbxIfNzuGLVadtv5a9Zgez7t5w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=197)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7AKicGEdDrWhB1rkicaUFbpXGFm4RNcQdtpBoC46g26HKYxUGdicqvgXw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=198)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAAlrRBY3X9Tgwg7Hzpg2UsiboYBGErfW3ficicHRIHp63eiaKfdnpT1GwCA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=199)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAbXKaKYFgXCnuhAKGzC31HPIN2xN8UV7ibWPhmMVth1enwYMbL7CKyqA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=200)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicANDQBTskDm3PEfQLaZ625rPUGcamnw39WRfQYMvBp7PpBdej0yJLGDA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=201)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArtLwjSpRWOUG1zRe9h0oTibHV6WxWyrY6Q9xGlwXX5zVmVf5dQQ8l9w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=202)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAh6kTSdb3C0ImciceO2ZU3OV50Da59GNxWIic9KgDpkia8N4SLiamXE4oyw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=203)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA1pcK2taszUvdkaaicTic2FwPgmNxIlyt9dY8XUMCDvkMWfWIMq0vultw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=204)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASZWDPpJxFzKZqE84eFIwI4iam6riaKs6hwVN2ufg0s288qriaupjoAibFg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=205)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKcRHb7EEEiaficWAaLdyXBustPkXicGZCjCW9fUMSKQSknaibiaJ9rETSWA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=206)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAyic1ucmClY3o1vt3BzTWGQsibjA40GSpX5iaCCicfzlsUvLib0W0iaTTQ7UQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=207)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicABQPT69jVoXx3YHoAIsia2T1Jpibrh0lU0oGXvUDLHicBtWiaToG5C3iaBfQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=208)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA4tACGsEBZMsfddybJmeFaLtkLZupeezS9C0sc3iaeNnodlSJkeWKiccw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=209)

注：文字与图片报告无关

SiC器件和GaN器件在三相PFC整流器和PWM逆变器系统中的应用优势：

1\. 高效率

• SiC器件：SiC器件具有高耐压、低导通电阻和高开关频率等特性，能够显著减少功率转换过程中的能量损耗。例如，全SiC功率模块的开关损耗大大低于同等IGBT模块的开关损耗，而且开关频率越高，与IGBT模块之间的损耗差越大。这意味着在高速开关工作时，全SiC功率模块不仅可以大幅降低损耗，还可以实现高速开关。

• GaN器件：GaN器件具有高电子迁移率、低导通电阻和高开关频率等特性，能够实现更高的转换效率。例如，GaN HEMT的RON×QG值较低，与基于其他半导体技术的竞争对手相比至少提高了四倍，这有助于降低传导损耗和开关损耗。

2\. 高功率密度

• SiC器件：SiC材料具备更低的通态电阻，阻值相同的情况下可以缩小芯片的面积，SiC功率模块的尺寸可达到仅为Si的1/10左右。这使得SiC器件在高功率应用中能够实现更小的封装，从而提高功率密度。

• GaN器件：GaN器件的高开关频率和低导通电阻特性使其能够实现更高的功率密度。例如，基于GaN的11kW/800V车载充电器（OBC）参考设计功率密度提高了36%，材料成本低了15%。

3\. 高温高压耐受性

• SiC器件：SiC材料的禁带宽度为3.23eV，相应的本征温度可高达800摄氏度，承受的温度相对Si更高。SiC材料的热导率为3.7W/cm/K，而硅材料的热导率仅有1.5W/cm/K，更高的热导率可以带来功率密度的显著提升，同时散热系统的设计更简单，或者直接采用自然冷却。

• GaN器件：GaN器件虽然在高温高压耐受性方面不如SiC，但其高开关频率和低导通电阻特性使其在中低功率应用中表现出色，特别是在高频和高功率密度应用中。

4\. 小型化设计

• SiC器件：SiC器件的高功率密度特性使其非常适合小型化应用。例如，在电动汽车牵引逆变器中，采用SiC MOSFET可将其尺寸减小约5倍，重量减轻约3倍。

• GaN器件：GaN器件的高开关频率和低导通电阻特性使其能够实现更紧凑的设计。例如，在AI电源中，采用GaN器件的三相PFC整流器可以实现更高的功率密度，满足其对小型化和高性能的需求。

5\. 适应高频应用

• SiC器件：SiC器件的高开关频率特性使其能够适应高频应用，减少开关损耗，提高系统效率。例如，在400至1200V的电压范围内，SiC和GaN有望合作和共存，SiC器件在处理高功率方面具有优势。

• GaN器件：GaN器件的高电子迁移率使其能够在低电压应用中表现出色，其开关速度极快，可实现更高的开关频率，从而减少开关损耗，提高整流器的效率。例如，在400V以下的单相和三相系统中，GaN有望占据市场主导地位，涉及所有家用电器、消费电子产品和数据中心的电力电子设备等。

6\. 市场应用

• SiC器件：SiC基设备广泛应用于混合动力和电动汽车牵引逆变器（特斯拉自2017年以来使用SiC晶体管），同时在超级跑车和赛车的车载充电器(OBC)和牵引逆变器中也可以找到它们，但数量较少。因此，SiC晶体管目前主要针对汽车市场。

• GaN器件：GaN通常用于实现智能手机和PC的电源和充电器，因为与传统的Si基交流-直流转换器相比，更高的可实现开关频率使更高功率的充电器体积减小了三倍。在高端光伏逆变器中，GaN基晶体管的用量也较低，这表明目前GaN功率器件更面向消费电子产品。

7.未来应用趋势

• SiC器件：SiC器件将继续在高功率、高压应用中占据主导地位，如电动汽车、工业电机控制器、可再生能源逆变器等。未来，SiC器件有望进一步提高可靠性和性能，降低成本，从而在更多领域得到广泛应用。

• GaN器件：GaN器件将继续在高频、高功率密度应用中发挥重要作用，如消费电子产品、数据中心、家用电器等。未来，GaN器件有望达到更高的电压，甚至超过1200V，进一步扩展其应用领域。

总结

SiC器件和GaN器件在三相PFC整流器和PWM逆变器系统中具有显著的应用优势，包括高效率、高功率密度、高温高压耐受性、小型化设计和适应高频应用等。这些优势使得SiC和GaN器件在电力电子设备中具有广阔的应用前景，特别是在电动汽车、可再生能源、消费电子和数据中心等领域。

资料来源：网络，文字与报告无关。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=210)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=211)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=212)