# 600A SiC MOSFET模块行业标准封装优化评估

原创 Michael Rogers SiC碳化硅MOS管及功率模块的应用 2025-09-29 18:36 广东

> 原文地址: [https://mp.weixin.qq.com/s/fxHOk1k7nBmm-izojEy9eg](https://mp.weixin.qq.com/s/fxHOk1k7nBmm-izojEy9eg)

文章来源：APEC2024(Mitsubishi)

作者：Michael Rogers

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7ayml7zicNoe4tI9aGe95mxJb5pgE6eicDFbHFoo7h8xClUEoEktSv2rEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7a1YZQnXtvrxrWesA0TYAOkgvO7jIJbGNOSqickcotj64Ugw8O9VboEBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aJ5sxdtPnus2dFBjgdryEJ2UTSsibFY37Ghf4tdKrUlPp5J3YKsGyD9Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7ahjd0nN43evvskCRNm6BBpKzdwQIe8mibA4npibkLR8yty05ORfkaEz5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aic22A4UHR1bYETx2bFRV8ENdwwpNAtyTYEH46rm0zkCH0icbLicVP5Ftw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7ac0pfibf9S0ibeUmZ9VqNwwvBpiaeb0ia4Sv6KmhibWgkticC842j5NekwHGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7anicX5GngxD4xicwTTunHsQ949QKdQDR3JC4oExfT32fIpogKZnN75Qag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7ac6Matg7DZMwqia1ankEa2muUWFjfHibPCiaBTZgXKogIQvcoJMddG1djQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aicDm02dOUu8o2b4MzpXeibuypEzPklNfXXTU7vl5icYr7FRLHkxVqBT6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aOIBOIw6ZC4K0I3hbbO4Jwv9YMVp0XtDLVpO5mDib8ql8XVHhtPwXWdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7auT1XVzNc3IicJFFXiaBLW02Oty2dF4dpVuHHTiafByLoqmEHGmBGcf8yA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7a7xN8hkmnNfTQtbylD1cAgmfSDMyqvbcLoCOFTZmZQzL5hdvJeGrEFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aNKgBhicYibzDmbcQEGKGSye4dgUm3JRjmfZAumcLaYEdm0Imn4X6K1dQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aHxuG6LL8BTVGuhdbibCEck4K9aOFfVbYKXjyoB7F1PUn0k6AqMc2Zkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aIRZHp6RuF43XFduuw7Tdf3Weia3thEibAp9jAuxFmPia6WXrFPgcUWJgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7a5iaS5rYHBHDyvdYiaIExOralP4UoCoQHnqgAy2uJCPhTjQgB1vSwbGtQ/640?wx_fmt=png&from=appmsg)

注：图片报告与文字无关

碳化硅器件的应用

相较于传统硅基器件，碳化硅（SiC）功率器件具有耐高压、耐高温、抗辐射、散热能力佳、更低的导通损耗和开关损耗、更高的开关频率、可减小模块体积等特性，在高压系统中有望快速替代，具有更紧凑的空间设计以及更高的功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aaPjYXDWfibcf4bFt79hh2GBp9rbgSs9mNYgtTqLIydfKc5CpwPMxBDA/640?wx_fmt=png&from=appmsg)

  
  
  
目前主要应用于以下领域：

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7a8SFENxP15mv3D56ChicH2zMbnYRp3zbouyuhfDCBLGnvHSO9iaOjVyeQ/640?wx_fmt=jpeg&from=appmsg)

新能源汽车：主驱逆变器、车载充电机（OBC）、直流快充桩；  
光伏与储能系统：组串式逆变器、储能变流器（PCS）；  
数据中心与通信电源：服务器电源、UPS不间断电源；  
轨道交通：牵引变流器、辅助电源；  
智能电网与能源基础设施：固态变压器、高压直流输电（HVDC）；  
工业电机驱动：高频变频器、伺服驱动器；  
航空航天与国防：高功率特种电源、机载电源系统；  
  
随着技术的成熟和成本的降低，SiC MOSFET器件正在逐步替代传统的硅基IGBT和MOSFET，成为高效、高功率密度系统的首选。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmHa2qSfO0WzOt3Yic1Sp6lOXssAyBomMDcERaTqUDMnuAicuXIKfWNuaicERiaxFtUvJNEwFtNm4qrXA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmHa2qSfO0WzOt3Yic1Sp6lO8MFD9l0ckhib4ckKr6ic02fITOMicibiaIjwVCPWZQUxa9yQuZqXFMHIn2A/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmHa2qSfO0WzOt3Yic1Sp6lOlItRyZYg1yN0Zd5sOcVRoPTUGicOXiaENcUwpt2vvytkU7dxZjQ6g8Aw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)