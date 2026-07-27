# 一种造成无霍尔BLDC电机转速抖动的原因分析：反电动势过零点不均匀

原创 傅存敬 电磁散人 2025-09-11 19:05 广东

> 原文地址: [https://mp.weixin.qq.com/s/e33eimjpJ7\_iS-mq\_-EpGQ](https://mp.weixin.qq.com/s/e33eimjpJ7_iS-mq_-EpGQ)

前文已详细分析过[无霍尔BLDC控制器中判断反电势过零点的标准以及一种过零点处理方法](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483946&idx=1&sn=330ce7e62104918afad960a3295a9981&scene=21#wechat_redirect)，但是在实际应用中，即使是开环控制，仍会出现在母线电压和负载均稳定的条件下，出现电机转速抖动的情形。

  

**1**

结论

过零点不均匀造成的换相不均匀，进而引起了电机转速抖动。

  

**2**

原因分析

方波驱动的无刷直流电机，理想情况下其反电势应为上底宽度为120°的梯形，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFfJibtSTyICEicJajxqjbjJNTNmicGm8iaA53u71oMVeVibOtnsbTlW4LbTTNAngzE8Pbib7NTkaXyFe5Q/640?wx_fmt=png&from=appmsg)

然而，因电机制造工艺及（永磁）材料磁性能的差异，电机的真实相反电势往往不是理想的梯形波，而是更接近方形波，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFfJibtSTyICEicJajxqjbjJNehzNckzDA6jxgicX01USouDCvUPc6x7XiaKLZbQmh4jufPxRGGvzhscQ/640?wx_fmt=png&from=appmsg)

在对电机三相端电压进行AD采样，以此来判断过零点的过程中，常用的方法是使端电压采样值和母线电压的一半（Udc/2）进行比较。当电机反电势不是理想的梯形波，如上图所示的方形波时，用该方法判断得到的三相过零点间距是不对称的，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFfJibtSTyICEicJajxqjbjJNKmHg8RflZSiaJzvG16LDaiaia9oEacaw0k1hicFSmgPricHXGQ6ziaY8dLicA/640?wx_fmt=png&from=appmsg)

如上图，AB相过零点之间的角度差要小于BC相过零点之间的角度差。因为该差值的存在，造成了换相时刻不对称，引起了转速抖动。

  

**3**

一种可行的解决方案

针对方形波反电势的无刷直流电机，将判断过零点的比较值设置得比Udc/2低一点。如下图所示。

通过该种方法的处理，可以使换相时刻重新变得均匀，电机转速不再抖动。

需要注意的是，这种方法的核心是要使过零点间隔均匀，并不是一定要硬性的向下移动比较值，使其小于Udc/2！