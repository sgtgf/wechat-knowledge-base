# 西安理工大学：大功率IGBT模块及驱动技术


> 原文地址: [https://mp.weixin.qq.com/s/EtBGt\_D133UTHd5TjdUenw](https://mp.weixin.qq.com/s/EtBGt_D133UTHd5TjdUenw)

**文章来源：****NE电气****\-NEdianqi**

**作者：杨媛-西安理工大学教授**

**摘要：****在电力电子技术的浪潮中，IGBT（绝缘栅双极型晶体管）模块凭借其卓越的性能和广泛的应用，成为了推动现代工业与能源革命的重要力量。本文介绍大功率IGBT模块的现状与发展趋势，驱动技术，串联和并联技术，应用领域以及未来发展。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl67VhMq6eZGpOb9wiaJXzWV3tnbLSic4dJMKDJ6wmo64uQibsk2y4ztcK969o3kNoibGc6nnjALewdYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8BygFm4gCdpeKwS0ZV0KSvNUwErlPnM0KqQIGooYvibUOYEv1J4picibN6uQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8BylBsic26GAbO8ibnGz5jEKBmysBY3qXNiaA6miaPD5W6CxIeiczZmPwIXCew/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByPosCPrILcozwAUS0Riapibkl6C9Uxe2W8tPXomHo49ibvT0MVgDH3iaOzw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByUP1UCbln4bkGlgwjBibsZ53aSic96kAeX91tESQa4HG7x6QiccUBicRia1g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8Bygia3jIMN5YP7EzwaISE2xeCbiaVN71aXZrpDibT7DvjjWHoPJPIFUB7wg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByiaehrQicVrWp8wWGDKf6MVv1ucR2QtARO9nycC8glicrL5Q690kibsiaZAw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByyibGUqIJ1ZetZf2jThF7tX746RkkJ1gyNgHMME5hYUxXibibbrIicnWz9w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8Byx4BMnufaWjicGUZTAZs0JlZbDkMh98bd3mEa96t1cO0gtp5uhao0fUQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8BykwEd8toficTDiaBhYLic0EdWysxjicvESuwf4VTdDoDFlqIKum6ziaCDG0w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByL8qZgic8xIeysOJqB1aqKjoQRgGBCQKy0ol5HduMswS3eNdltazHbgQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8Byn6muicXnqCEb62rnGtiaFiaucrFicibsunsCDGeJH5JKaoOtxfBghn6ZpLw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8BymIVq2H1lVfKOtFFDU8HuHW2g8ZWPk0U1rGkm3dSYhRU5M3kuMxEpTA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8By0C3LicbicoZaiceibOiaHeYT47KapSBoOukcvfL9ACXiccVMb3c5sI5JWJnQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8By5HVgHDFsWrQrzKdoangx6wgSZAImF8xc7OGKrsVh1rtLnKLial4fK8Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8By4x9lmv2ickx9aibG2U2F42lPUicM837QKXMEW6LOTicmCUFUKujKPQf8aQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByI4k2kKtkdwnnYvfrRFLibiaQlnOGjwdDXLYnAswG81fIA1qAdyb4aYAQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8By8FmNnFvITjqP48HK0oC9qHGjr9rxC4umib881wNicxNzndQuaJZ13EXw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByBrojYC0kAYPiazt8odkV71u6icsAKa3SO07GHSHpK7kjLCnFicR2crzng/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByceWnSL9fOKblTcJfAMicAVAQFMJiaUte5roy17usNiavseExFog3Prx0A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByjCiaxEFWDGXfBkXnKqyfZaZDVHXianDbNGqSpsKgrrya0Nb1OYEOamag/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByJxvAHSnKb4ic8rIPLcB5qynSF37D5kuDk1oauMMURbtn6ZnhEHUL5FA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByACFGsSWTdgnUSI9QVoH5rFicq0PfP7uAkfejNMDUcTMXlfmVWGhXsCA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDiaxSosb9teXdHNabHWQB8ByYhg8AJo4icyrrSOC5tiawKB8WTC29NPyc56HtbswTetkHhshDic7ic1gJA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)