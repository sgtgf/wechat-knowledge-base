# 北京交通大学：碳化硅MOSFET栅极振荡的一种负反馈抑制方


> 原文地址: [https://mp.weixin.qq.com/s/aaOEGavqr19VJ1mkI7lXkw](https://mp.weixin.qq.com/s/aaOEGavqr19VJ1mkI7lXkw)

**摘要：**分享一篇来自北京交通大学邵天骢讲师有关“碳化硅MOSFET栅极振荡的一种负反馈抑制方法”报告。针对碳化硅MOS器件高速开关动作过程中栅极路径，分析脉冲电压、电流干扰，提出了一种基于跨导增益的栅极负反馈控制方法，有效抑制了开关过程中栅极振荡。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8s1lMUfVPv8zeIvAOb7IicjC77dveKnqjI7ywCkKYEuTmQQPA3lxOGzQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8Zib2BQp4hyNuHaBHcTclVlyR4qOF2iaVVQpDtCZ8PlibKxj80VDKrdFNA/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu81p9zepCFerZIMtdDkxDI8vEyic4fLnicIZPXjVibSXZ2OtRnERgsqgGcA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8oswG2MIgrhJB8db3BRvPw1zicJy0zfIKjhBbfXzQFrFpOKkQdoTQZvA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8gibMztBMhG9rI0w5qkqpA97Wibr6yPQ85AlbVu69rsHDY94aRTYEiaZOg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8gNWVPtaMfE80v8DWcHol3IBeIlfIksuOZTBn7mIsAQuEkU8Yqiazmiaw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8eePTZApkrHFruibfu3qFbIbhOuM4mSJFXjy5lFAB4ARvcZJS7dibkMvQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8xjIpF4yAOhN7j1jUXZtrf5rxZqiaIicDwwcjZfmukSElfXjERlUA0Psg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8dZYVUNY2k6ic5K3lnZlO1uia9Og5VvN1PRUYGz7huHBszkddaicicf08lg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8QY7Sb5ICJ2BMicxkBlv8a3dw6XVJq9YgWBdibiapDHlrWfQzvicurmic3Sg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8LeC51ftE9ZGJ1S3SmbskKPCdagbq4mcLsmQj13rI7ExlqSPThpiaJMg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8nK2GibcecSWBAhDP8AQDmTLZI7wZicSFsDhueeAEABkE4afeO27mElUg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8aQskPbZ409aHS9QboTyXbzVDkzoj8UfsiarYKAfkE5XGUrhM6iamgibUw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8EkVmcUQhlArTeB91MvhhAibvzJYMl8ykjWA3JOvhyS8JR2l9ia7dfUkg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu86PiaNQfRy6YsUrm0Jc3q5h1MHR7gWIv6KGjp9QKdukq1jR84X8ic4orw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8FGFaOy3qMVXCvEOHficQBicgoic2dIPWQPFux1hbr0EKYtnhvuBwYJEicg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8LjgibUgQhkhW2ibCI3S5xGdLLs0NuB0ZBzz1tUQ3B5N2jmV9HS2f9GNA/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8hjGUcY1XyTT0GjrCxE61Af8N36BUb6md4DzNR1Sia2D7M1ibX9ibhCMLw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu86eaoBvC9pmTfpqM1qxVjOdpTy3kfIEFR5fOnaQKb2Q7scoGBrnrF4w/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8C5Y1wIDLK1CXZV9tNMdn6A4nFRcWwWGErBic6zCKy1maW2deE59KoBA/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8WHBibKsUETzoF0grCTg849PxXSVdkuEglHGgaCPcXAhFzup1BUCI40Q/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu88dPYSqz99gqvn6sWLFMs8icw70VuicxWdMibf10lzCwjM2JSrlLgRaoGw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8qZyt4XBTZvO6I5wiaWDLZHjsKQBDbhFndTpCJ7RJHN2pzP9nwB0gEpw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu81R2mYyfq5MAOrmuUMB86c47VJEf5ibTxDCHO7vtbFm03tVXG95nYDfQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu88iagjvG574wu4Kg0vdOvichzGYicz2PJhTHvLl7s0icuic1Toib2ar0HHuWw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8NBejWwxzlty0M9fuibCtQln9La5J4nUX4iaPribXzbcJ5L4kQk6lEiciaQQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8ibndc2KRbvwLmwevwDtITLH7Bic6BIkb0xZH1icR0EWWFCZczlJ8VSNHQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8ZkrnkOZQRZN5Pk73ic1UM17pMrsJZo8BXTwCEoJ7xnMo9TFhSUvW07w/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8CW6FlGvmYAXsAfCgJts9kGH1XW4uHCQWTR7KsX2VemicCn9DPMOVicYA/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8zRia8lGCq1Rgt6wHjMTmiasS7tGib6wK4tBqrFtaeAJhvNjwRdIsL7RtQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8Fs8wTCPDVREiawBOlhzcqtrmGNgWAdva8ZicGpLlTWYjEhkianqecdQGw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8IgYa6lFQ9LOPQulsS5k7ZgzDkww3H5W9Nn0aCxOl4VkdnyEZFO7xsg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8E48Hkr3Nam6pkR0vfYDusE55GNfznEvaRNOYHE3CfJ7F1lUNQjAuuA/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8bHqGSulYK4K0ibzoBetrmAUB56dk99lmc4ic7Hs0DhITlXDDa8q9TCBg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8LOic0w2I0JM9YPeUzuK436bicaWbUcc1L0nHn91Og8pwPXw90F4UnYsQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8TQKJDH9k4uhhFgFOwAYSE6yHMVKTW0sHzAGklBmdZVDpbZXF2ZMs1g/640?wx_fmt=jpeg&from=appmsg)

 **专家简介**

-   邵天骢，北京交通大学电气工程学院讲师。在SCI期刊和国际会议发表论文20余篇，申请授权发明专利10余项。担任IEEE TPEL, IEEE TIE等多个国际期刊审稿人。获第十四届中国高校电力电子与电力传动学术年会优秀论文奖。主要研究方向：宽禁带器件有源驱动、新型拓扑及控制方法。
    
-   ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWXDmowXFAg3JN6w4Rlmu8uw1nbOoJ3j5BLrSfuXPdzugeBiceFr9tESKXdkhGrM3SdYlDrWjCkrw/640?wx_fmt=png&from=appmsg)
    
-   ![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)
    
-   **声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**
    
-   ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)
    
-     
    
-     
    
-