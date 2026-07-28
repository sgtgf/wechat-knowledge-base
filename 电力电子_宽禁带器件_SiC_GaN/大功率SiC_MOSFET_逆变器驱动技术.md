# 大功率SiC MOSFET 逆变器驱动技术


> 原文地址: [https://mp.weixin.qq.com/s/ZXTOHOpNJgC6DBFtAAZqnA](https://mp.weixin.qq.com/s/ZXTOHOpNJgC6DBFtAAZqnA)

**摘要：分享一篇“大功率SiC MOSFET 逆变器驱动技术”的文章，来自株式会社田村制作所-青木弘利。主要介绍了碳化硅MOS的应用，驱动电路介绍和应用实例，帮助从业电子电器的开发者，对SiC MOSFET的应用更深的认知。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHUIQyvmgFDs8EIO9w430LMZ08rGlnOicexuD3FsZQ9OFp7n5QZAsdyQQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHQoRTykZypaJoW8hibLK9pYP3WOm91aP1CRtb5AaAo33LicomtZkuRWkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dH7wl8JZgibeEdziabibmRziaAFLB2Qstkjic2ka7TEbsH4ficR6sVNC3ibHx7Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHfY4f41x7saCHGF23t5D5VTVHh5a3waN2HicaLQa8p9rgBQLNreRPokA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHo33dLvY7d7gh1zdhAbvK8ibCHnhE0GUNM6xiaZSwd9ljfgNF9PiaGhmFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHwfTMunG6SWO9UkbtBfh6PaPmvXnsNjLRuVYz2ibUz4rnPPeSk0U9eBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHEOjl8Sy4wmZnHEECypdiaa0zJjdXJr7CjuBzbMt485GBAoeJXcdLOtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHujbvC9cxqaafnPMxvfY1zI7icKLKIWiaxP2xCtlNkCTZ1NL2tsb8dvFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHgaSptxT6btqJsaEmtkM7U7qcHoo8Eu5BsI8Hp1ia4f6LJjcAcTsg4gg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHFT9tr8xTrHFKYdoEoJyBoLuAAk5plTAheKUVhF9uMLlf0d2mkrNaJQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dH9PRvZO8tGbEf0N2t2dtsW4B5Wwm5aEJf8gejfBiaeIRIibibCz0zDGMrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHAQttEgbWmo5vdGicnUCwHlTojHRt7CAAYZudSa1FljKrZWtlawtdQqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHBHp1ibibpFcOUkf02pKcTic738EpUNZyU7RoM5Yw8dRqZ1T9vGOK8ia7gA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHkOwic5fRJ6ibic8am7C1S0bqQyv4vdspibibONmQSErckQcKapa6VgWoE9A/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dH5ECK7mMEzT3XjAsLMHMOERNI2fERte9ODhNIgFundf1YG6fx1sVXeA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHEIbjicSxMowvGY5mdGuAUibfJVFicy9XWzzQZuvbnNtP9iasLictnlTHrvw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHIgJo6rB0tyWc25dD1vTduHnhunicA0iaowJwBP3BSBvD4ekFQZ3jUicAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHibWy4n1OOvCkmOcmDvOrqTDBWLNlktWWcexxq74SYeNHpKMib7RSETnw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHDBvTA3QhIhZWVrw81zy2ng4Ntaw0Q6HpQQSHZGhbT1dicm4DQTm0q4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHYv3bt03GgYWTacicYoq4fgpicIycicqeOK2bkIlUFgS6OZ9SicTz6x62nA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHABkoY2ou4Zvgaia29xsxTEqqSLjE9cIUGScn0APKLZsm8Pj9oMmGmng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHF8f4nVAC6B1QLqoQDP1WyCjc871mLicwcCibgU48LLeN0V4ibRA5Q4yibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHYsVuzFj6tVc1CcGx0QV2ospEiavqS5OUfFaiayhM4rVPOUSk920Axib6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHOtByicCrWaibyEtoNPRiaPzQ9D4Tvib208XMuqJpRKpaEGYicQPfk7BPyGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHndvKQ3ZVForxArI4sRMnOmI4oEQfHQa2oYvI5c2plrUJ32mn71vnEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dH5bhLYHibBVyJD2C2cJjkY0hdVk2FUT8GRRbOp8D0iaqGE6VsXx2XWYpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn1ZXcN1QV4WY1ibcBVNd4dHNK6wjoJMhlHClGDhXJAxs9OI7UfoePYdu8rZqvxZ6vcQ1eDPe7ibnYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)