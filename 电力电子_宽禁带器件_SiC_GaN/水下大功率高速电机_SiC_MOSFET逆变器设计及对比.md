# 水下大功率高速电机 SiC MOSFET逆变器设计及对比


> 原文地址: [https://mp.weixin.qq.com/s/Nv7ZSQ28Wcqa0lJEb711CQ](https://mp.weixin.qq.com/s/Nv7ZSQ28Wcqa0lJEb711CQ)

**文章来源：**水下无人系统学报

**作者：**翟理, 汪洋, 胡利民, 刘国海, 刘亚兵, 马恩林(中国船舶集团有限公司 第705研究所昆明分部)

**摘要:**随着“深远海”及高机动性、隐蔽性应用目标的提出, 未来水下航行器动力系统需具备更高的转速、功率密度和效率。文中针对传统 Si 基功率器件在水下高速大功率电机应用中, 由于开关性能限制, 存在电机换相周期内斩波次数不够, 给电机带来较大的转矩脉动和损耗的问题, 首先对功率器件损耗进行分析, 在PSpice 中建立仿真模型, 对比了不同开关频率及温度下 SiC 金氧半场效晶体管(MOSFET)和绝缘栅双极晶体管(IGBT)损耗, 并在 Simulink 中对比了不同开关频率下电机转矩脉动。利用 SiC 功率器件开关频率高、开关损耗低等优点, 将 SiC MOSFET 应用于水下航行器大功率高速电机逆变器模块, 对软硬件进行设计, 并与IGBT 逆变器进行效率对比, 同时分析了 SiC MOSFET 在高频下对电机转矩脉动的影响, 为 SiC MOSFET 在水下航行器中应用提供有益借鉴。

**关键词:**水下航行器; SiC 金氧半场效晶体管; 逆变器

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iadm7BdIDkag6UgQVqzXTEKQWE93gicticlkibGVzSuC6rliapL1jGKjyfww/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iamtScYLxiaQWklQdRpsAXJian05oGB9N4sQz3MFUZODhgrDspFX4XPOlw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iazI2wNxLK10L25GPYBL6gjjJJIpePQ6BFPN4AnwM4ROyicbSUibLwB4Wg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iao7JdjjicmZ8BFVG44ZxgBd9IKn6yvjWaBnewJMHNSx3X1DzOCkk7qQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iaibHJfOGpZcseKwTt4xqIy5h5G3skP0fDfMJkdW4ObeUiaFV5FsVRHgicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iazE387NiayD02viapcyPlb2rkgqptSfTuUic9S8pGLChsBmG7FYYuYicefQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iaicsgDQ0DruWMAbyp1sGONmcgsgwbETpzLSGoLTWyR3sJfwkbk4bOaicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iaYf6s5vpPBB3D8vwVluBgXcINQJ8Dswr3WOySXb50IDA13w7quBCalg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1iaW0FDOI0J18qZqYxV9eNib2UKIEibpMp1xMgXW11QYw1nFfsVhl8767iag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgwJKMFl8uY39aCrASiaW1ia3cJuLDUgSGLiagKt96CPehMw0iatenG9bPHhaoMic862v4AF48Dt5lrIQ/640?wx_fmt=png&from=appmsg)

         ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqb8Po3qdBDOEjHEmo3DibcFdSeQxPepq4CgmLpeSttlMicicb3ru8mu738A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)