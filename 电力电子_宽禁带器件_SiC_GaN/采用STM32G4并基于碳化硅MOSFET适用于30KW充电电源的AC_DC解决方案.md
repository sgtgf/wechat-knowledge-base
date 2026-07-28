# 采用STM32G4并基于碳化硅MOSFET适用于30KW充电电源的AC-DC解决方案


> 原文地址: [https://mp.weixin.qq.com/s/v8Ma6yB9uFbIIoIaAzDN-g](https://mp.weixin.qq.com/s/v8Ma6yB9uFbIIoIaAzDN-g)

**摘要：**新能源充电电源是指将电网的交流电转换成直流电，为电动汽车电池组充电的装置。‌这些装置包括非车载充电机、车载充电机、交流充电桩、直流充电桩以及交直流一体化充电桩。它们的功能和特点如下：

‌非车载充电机‌：安装在电动汽车车体外，将电网的交流电转换成直流电，采用传导方式为电动汽车电池组充电。  

‌车载充电机‌：固定安装在电动汽车上，同样将电网的交流电转换成直流电，为电池组充电。

‌交流充电桩‌：固定安装在电动汽车外，与交流电网连接，为具有车载充电装置的电动汽车提供交流电源。

‌直流充电桩‌：与交流电网连接，将电网的交流电转换成直流电，为电动汽车提供直流电源。

‌交直流一体化充电桩‌：采用交直流一体的结构，既可以实现直流充电，也可以进行交流充电。

这些充电设备的发展趋势包括高安全性、充电快速化、充电通用化等，以确保电动汽车充电过程的安全性和效率，同时适应多种类型动力电池系统和电压等级的需求‌。

**正文:**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicQk7U0pX1icicYN1Tm9cG56pKxfFzRDaXyeoLo6gQj7iaNnBkGfLOoRrww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicrx963oE1pF4JsGlEjbbo0heLRVYRMtesl9SbxIsV3oRtrDpFVAr0Kw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicLSnUWaCadic36kE8jZSgczXzpzPiaXa4frvkPicKN7XNa63nCMQ9ca4bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicRoe49YZFbQEGywMyic879FVib6vg3ovseNIvnHJKp6ndMod67ntXmqpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicibTemAftpiboNzlNzOmvXU1qLxVBeQP5YnErfAUsXRw4zvzDLCR6JPzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicD9LJ5jn3j2lg9rQiaIeBP8Kq9WmsSrvAa5JWsHPvcDnCRTIdHqCtYjQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicqQK3FAEFwXa4Yl4tiahF1UdTHxSS9wJVRQ6PyXbNuDwCvI0rBFI1ibSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicS6gSdPE3HzqV6YaicpGPhj8g6x53ZlD2GxZS3liamZO4evpw8JKJzDow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicyeAPe4icS8gFKKeR5WZmRA09thfvRVQoGEpvVgSNIEkmyg0qiclpm0Tw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicibnc4xOUz1k55o7wXPegvEeVhrVPEibUfm5pwr8cwIXxWWpd7OicShjkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicw8FIfkh5rFVaFF9gBrr3WeBW6Ukibj8pLicVa32QXxSNiaL5icguysDibMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicl797lib90hCvXv3af2Zbpx5tmH7ypA01jtDfPs4TibPQ60OCIhYtES0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicf4HxBiaL9BjMAPObz99ZHUt7kSHHaYzicNWfoib5PAJtB3jHpzsF40afQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUic8lib6Z5CdTuHtbqWX9alXT6lGiatwH9Fo7KE3mNiaAkbSXZx2VGkGNsKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicjWoc0MeQcx9HF5P5ZpdZvib1Eh95V6rZZO646DNKKK30uPNKoZ1o2Tw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicSr9MlsOiaJbliaRGf96u2icCkx0qVd7QvI7AHLREngPV9846qUS1r2sqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicWCicSG3ibeRw7vB6szbdKibWU7SNJ1RnGxTtgics5cVMoW2yqm84kjlOibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUiceNbGh12AbtLSjQxE6O156FE0BuUbXu6icchsZcyoXOxgQAjknv5QZAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicIlgSrGQxtHvPUhpYmhib2L9X9478fzVNgt0QiaaFDokYJ7icLgg5lHflw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicH8TzicJ2ukLVtiaTMegicqZetZOniawINsb8qtkV2YFRYo73tkgeBGvy1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicVQFg1hCEzFmVRm6cZGttIfPfsibSRCKNwUUPwW402j9koyaoZBQhb0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicuPRGsf19NyhrG4lOFeTJdKYuSZKpUXiaEqxe6bmfI8cXmLG2jRj2Hzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicChlL7H5LG31CAhEOaKZQ9L6iaP0kWuibftlm8nPsicYicX6GyXjH2hyf0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicM4yt9sK8K63bvAC4hJcuGe4URhLyWSCdFwBMbdJ7tTdDtXPoOjNREg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicfU5n1zTSRiaXHAmDZbZmpicG7DwBCnibgtN28BkmE6OlgjgEneX3rJjRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVB4XPXoR0KnkYs9lAuSUicKkDQTDGf9AoBzMDibYYKxZZaPadsjibOqrjFAxXx29HnCUuEe3pUYpfA/640?wx_fmt=png&from=appmsg)

图片来源：意法半导体

**碳化硅MOSFET在充电电源中的应用**

‌碳化硅MOSFET在充电电源中的应用主要体现在直流充电桩电源模块中，通过提高开关频率、减少磁性器件尺寸和成本，以及提升系统效率和功率密度，从而优化充电效率和性能。‌

碳化硅MOSFET的应用在充电电源中主要体现在以下几个方面：

‌提高充电效率‌：碳化硅MOSFET的高频特性使得充电电源的开关频率得以提高，进而减少了磁性器件的尺寸和成本。这不仅能够提升充电效率，还能降低解决方案的尺寸和成本，从而优化充电站的硬件配置和运营成本‌。

‌简化电路设计‌：通过减少功率器件的数量和简化控制电路的复杂性，碳化硅MOSFET的应用简化了充电电源的拓扑电路设计，使得元器件数量减少，控制和驱动更加简单。这有助于提高系统的可靠性和稳定性‌。

‌提升系统效率和功率密度‌：碳化硅MOSFET的高耐压、低导通电阻和寄生参数小的特性，使得系统损耗小，工作频率高，可靠性高。这些特性共同作用，可以大大提升开关电源的效率、功率密度和可靠性等性能‌。

‌适应高温环境‌：碳化硅的热导率大幅高于其他材料，使得碳化硅器件可在较高的温度下运行，其工作温度高达600℃，而硅器件的极限温度仅为300℃。这有助于碳化硅MOSFET在高温环境中保持稳定工作，适用于需要长时间运行的充电站等场景‌。

‌降低解决方案的成本‌：通过减少有源组件的数量并降低总能量损耗，碳化硅MOSFET能够降低解决方案的整体成本。在充电系统中，基于碳化硅的功率MOSFET可以管理安装在电动汽车中的电池的宽电压范围，减少高达40%的功率损耗，将功率密度提高50%，并将有源组件的数量减半‌。

综上所述，碳化硅MOSFET在充电电源中的应用通过提高效率、简化设计、提升可靠性和降低成本等方面，显著优化了充电电源的性能和成本效益。

文字来源:Ai

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)