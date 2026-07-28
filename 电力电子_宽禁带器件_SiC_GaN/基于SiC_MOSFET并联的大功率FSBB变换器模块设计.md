# 基于SiC-MOSFET并联的大功率FSBB变换器模块设计


> 原文地址: [https://mp.weixin.qq.com/s/v30k2uNPVbevtmNMgqqjNg](https://mp.weixin.qq.com/s/v30k2uNPVbevtmNMgqqjNg)

**作者：**郭轩（专业硕士学位论文）

**摘  要 ：**

随着国家“十四五”规划和《2035年远景目标纲要》的出台，大力发展电力电子技术是 加快现代能源体系构建，保障国家能源安全，如期实现碳达峰、碳中和目标的重要途径， 也是推动实现经济社会高质量发展的重要支撑。而DC-DC变换器是电力电子技术的重要 分支也在其中有着重要作用。四开关Buck-Boost（Four-switch Buck-Boost，FSBB）变换 器具有升压降压功能适用于新能源发电、分布式电源、电动汽车等领域。然而在越来越复 杂的工况下对变换器的功率级别、电流、电压等级提出了更高的要求，如何实现软开关减 少变换器的开关损耗，提升变换器的效率具有非常重要的意义。 

本文以SiC-MOSFET为基础，针对FSBB变换器开关损耗大和变换器并联时存在的 电流不均衡现象采用了一种新的解决方法，以提高变换器的效率与可靠性。论文的主要研 究内容如下： 

首先，对FSBB变换器的电路拓扑进行了介绍，并分析变换器原理，构建变换器电压 增益数学模型，研究了变换器的基本控制策略，通过仿真验证得出结论：传统控制方法无 法实现FSBB变换器开关管的软开关，变换器的损耗较大。 

其次，在传统调制方法的基础上，针对变换器开关损耗较大的问题，通过研究FSBB 变换器软开关原理以及实现软开关的条件，提出了变相移的PWM控制方法，通过死区时 间内在开关管内部加反向电流来实现软开关，并通过仿真验证了该方法的有效性。最后比 较了硬开关和软开关情况下变换器的效率变化情况。 

然后，采用并联开关管的方式，提升了变换器的电流容量，分析了具有开尔文管脚的 SiC-MOSFET在驱动回路中的优势和开关管的功率损耗，采用模块化设计，用开关支路和 去耦电容器组成模块来解决并联器件的不均流问题。最终使用PI加前馈的电压控制方法， 完成对并联模块电流不均衡现象的动态补偿，并通过仿真验证了该方法的可行性。 

最后，设计并搭建了FSBB变换器的实验平台，进行了相关实验，验证了均流和控制 方法的有效性。  

**关键词：**FSBB变换器；软开关；均流；交错并联 

  **1 绪  论** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUCugfJNtqsJgR5jkfN9ibkn0S54BCyZUDwzGJ3qbyajo5pWSL9Gng1WA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUqgcsqVBr5DiaY9Z8tfaH6yfeQ6hxAQibn0WhIwtRvRjic7UtsYAIQiaX7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU3CR1y234ibbp2G6eyfQTBiaq1c4qtadGViaQxbW1hCktWEOTpq27aLJ1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU0B2wd5L1KhB2LFC74YBTicMBSzS7e2QFgsF9JoibaXUDGBQKjmvD3lrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU1Sa08eDMY45fk9M3hw9XLiaArsMg8oribcZ7jwsSjPQpo6TbzhdkrA7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUDbplOEd41ApfjbGPHANIdhnTCPibibe0cOUXyVRp2krSqlD1AlF0D14w/640?wx_fmt=png&from=appmsg)

**2 FSBB变换器基本工作原理及控制策略** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU2a8AW8T55hF4Iy5JWVaLU8UNxMmf8RQCRjuCTp1XuL7MCFhmABlnWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUfM3MzvnPlELOUIdLcNXCQ288byj5mmfpicsy7dgAsaDSL3H7hPia2HoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU8Ruchm2qPtgX0GiaJleZSzib6HCicXGsqvpQLSLr02Au7RQicXmLa3HhDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUZEa5AdtEdqmxbZ1ib8qNJ49laehlZlyWndvECvRLNA1UAMvCtib8eDzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUtzttWiaSKmjSV7ibPGFhNyYMFfdMZkHF0LWPibK02ODjsu7uVLMbz6icag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUI0iaNFeF5cUiax2eZssH44yZlhbcu6bEvIO4LcxVGDdDI66jD1z5fvSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUDXfzTy0SFgVaOElicTqg3I8cdpkV6u42zIWJZ6HOjYS3GTE8ox3THWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU6In2V4EDkwJ1bNoV4Uw9mOJ0jUbBGXGtEMQUGiaZb3P2mZKEyfFiaknw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUHplU8aPRucXttwrnTLolxqMXyqX6s3V7fvXzfxzxUIBr0wCE03JgXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUNr4nb04tSexTWrBb5RmrZk0LViaS1db5LiaJTfr8M876HZ0lTn0HPaMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUNbRN5KShEJFROAZxoT8mhKV6OG6P9PmvZcR0aoKe56icZ1FFNceAjZg/640?wx_fmt=png&from=appmsg)**3 FSBB变换器的软开关研究及控制**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUcgH8K0C5056AYUEnGX2ChZ4HQ0UHeRq8Xp8FKggOSyC1JpcDBr5x2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU3ly4YUcEWib3IVibBQHm5GyEfFuAztdq1icmCCWLgLI7xGQVnYpxAtOibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAURgS2pOJsx8essgpoBMwM5hdHHIU7PYichMCBibvxbicA6dzA93VTauK6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUgUoKYG2FFdKtA8pVXtmqvuAZsPfZiaD6wuwNxsbQRJRDIH9tx8WMicVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU2fNCNhP2M2NpeRjYLYzErMV2MB71dnpXW5m8By1OYFcjib44mwG7lyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUsOPTticNTOYFKtjibOlpxmCMMs9sh236n3lySaibykBqYWlYMRW6vE20A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUX6kwSRfdlV79E1RibppaAgcIcWm85D83sTCv7tk8Speic6mZ3e63ZicyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU1aaJXfMXEUWDHDibNqAAFzZG5gSOibHmibNnFv7GWzQiaicA9GLxm8NGG3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU8ALe8tCzciaaJ5QFfiaRsuw9a0RZYmjybzmw1o12icx83UYQCRtGaT80w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUTpRZuWF6UakuZY2IEEElye6dEml4T43CiaHnDd4dOKhDt6t6l9eUnHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUu1MyaY8mANdRs83Yu29NQOZex7nsjpsts01QqLIDPFyicViaX3qAf3sw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUia3egVTRxRBwEuzxBnyiaNFuRrMckwgYL0WuTibsBKBH6usJjYicia5IMgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUheVm4cOE1fcASE5yKgOknPA2iaDh3mocGVRHN3bjRVepEwjYVoNFfWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU4F7qSDXJ6pSOCkvt2lP3k3iaP2M74afugkJcaibtWvQBEw9O7Yvkechw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUrcDwWRCGyegaYOpRcw08cAvDaY2CDd2fWNp1mQnmiaqYABpd2EjP1pA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUpPBpPp2lcM2uEx8Skxmy28y3AdGnFZsHF8l9VZNkddiaQiaRGzYUlWkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU8kzEcXFdgalMtLicH2QbEvLEL7TRQibmt5ERsx3QicYB8iaTePfF3bmdPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUwB6ZlDqLlClBeyHwLbQKaGFUP6VkcEpk63UhQJdAaHXKdqVlL47VSQ/640?wx_fmt=png&from=appmsg)

**4 SiC-MOSFET开关管及其模块间的均流** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUTSpsviaeAYPYvIzia90CEMPETu1M3dzdExFXiaUUyN1ticOUYza3RDZU8g/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUfrZ4MIO3UGp7RXdcWwNsfM435taTWbqS2yu5yG3XewDmUkebFf2Riaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUpBfXIibiaBA2noQMTHaG9KBR6OBkosKsfvELyKgWAoSZFp2E94ZS7fiaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUPHScGl64SLkCOVbr4h9ibLUmrgAN2zIibnatvLJMqiauFAVXhpMp9f8pg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU9bTibEFD8s2qVdgsRLXJTLXK33Trk9XvLZDf8ObLS3nz9TibCouj0UMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUiaDCDtBaqAhaupZhXvGE4x62vXG2zKg4GSCz4cleZtInhfibibvXwI0Nw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUMqGax7XcTBNLpXnia8B9n9nIB6Tb3BprMLoFjjum1F3d62PXG09icpSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUhcxJn2NMAO1uMKAZCvSNH4KXXQh5p20Wnqh8zkvWa2eFxSg7PfoCmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUuFKJWibznhllLRmIzwCQkZ9abkuHsAJFVlmAxwQxdical9SmMl6a6I6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUmF9KcFUXe6mv4tpMnwsLlic5VfavnMyZWwc1AA7QrXVg9vgzS9V2SDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUcddgVHjCmicYKBcm9RK0I2ibJuAFPicC1dbUfZsiaMq7RTMF6GT4Lkgflg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU5ltzavoTJpRW4EgOaP90fFDntKDpJkTcibnApQbnzmRUfpicFnxHvicSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUH8QY2icAVVrHZUUyKFyfD05Jehicjw28nM3fkm0qQ6OKPS0YuaXeLDww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUmSuTwTmGUXOPFmpWW15icK7HFHQLaUzSkxQGQACskhz00ruqKkzLTtQ/640?wx_fmt=png&from=appmsg)

**5  变换器模块设计及实验验证** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUttHHLj2YR3PtEYlE7UpctuBRd10geAJP3oibbXOZD4WWib7iat3KNGeWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUyVpZPvQic0ia6bKZ1C787wr8bODtATJAP2PhtzNlkAWsWuuvicmicpIaVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUicOmibqtvV8FKNJpAZItVytpiaJArYj3lUJ544wI2ibxicuicIXXNuD3gddA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUXNqQLAenANtYppQoARxaAn5gzD6QPDXDOSOnwHsxgX5DZuA8O13FEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUEHLz67YB2gecNkrwXNJ5KZNdOkEAYWcyUkjwa0w3Bf9ZicymdicyLYAg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUXHt7z9Qdv48pUPJWcf1grLPdvEolkY6f0MkPC04jHice1SjIPZA7FXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUxdcVXeSXJk1UZP2EujicQflqrVGNeVmyeib0SJMMVOY2TcnHS5KWvbgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUL2hg1V2bxpJM2vvjGakM40I8lszcSvRPpia20fSRjZcBvWH5eMiaGlBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUNfOSGrQqdibiaVHx6yjrYFy3b7UFibP9h6aDLvv4o5zhHecEduSQH9Thg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUTgzTJBlanZUp0h8PrYc30YPO7hKJ4Bqy2XtMTU9icCHic6w2xjCTBzjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU74tMr8n4yYNYp73KWzVy6lBINmDGtTto8n94sZunYEk7Qk23YBPrpA/640?wx_fmt=png&from=appmsg)

**6  结论与展望** 

**6.1研究工作总结** 

FSBB变换器有着升压降压的功能、开关器件电压应力低、损耗低、输入和输出同极 性、无源元件少等优势，比较适用于宽输入电压范围场景，已成为学术界和工业研究界的 热点，而开关器件的特性直接影响变换器的性能和效率。目前传统Si器件使用性能现已 趋近于理论上限，但仍难满足人们的需要SiC、GaN宽禁带半导体器件的出现，为器件性 能的提升带来新的机遇。本文用SiC-MOSFET作为FSBB变换器的开关管，针对变换器 开关器件开通方式一般是硬开关损耗较高和变换器并联时存在的电流不均衡现象，提出 了一种解决方法，以提高FSBB变换器的效率与可靠性。本论文的主要工作内容如下： 

（1）介绍了FSBB变换器拓扑结构的基本构成，对变换器的基本工作原理、单模式 控制、多模式工作原理进行了详细分析，研究了变换器的基本控制方法，在PSIM仿真平 台上对传统控制方法进行了仿真分析。得出结论传统控制方法无法实现FSBB变换器开 关管的软开关，变换器的损耗较大。 

（2）分析了FSBB变换器软开关的原理以及实现软开关的条件，研究了软开关的实 现过程，采用了变相移的PWM控制方法，通过死区时间内在开关管内部加反向电流来实 现开关管的软开关。并在PSIM仿真平台上做了相关的仿真验证，分别进行了变换器升压 和降压状态下软开关仿真验证，结果表明四个开关管都以实现软开关。最后分析了硬开关 和软开关情况下变换器的效率，结果表明软开关情况下变换器效率明显高于硬开关。 

（3）研究了具有开尔文管脚的SiC-MOSFET相对于传统SiC-MOSFET的优势和开 关管在开通和关断情况下的功率损耗，比较了FSBB变换器在硬开关和软开关两种模式 下的功率损耗。采用模块化设计使用开关支路和去耦电容器组组成的模块，来解决并联器 件的不均流问题，采用PI加前馈的控制方法，控制开关器件驱动信号的延迟时间，实现 对并联模块的均流。并在PSIM仿真平台上做了相关的仿真验证，进行了FSBB变换器两 模块和八模块的并联均流仿真验证，仿真结果表明变换器模块间基本上以实现均流。 

（4）设计并搭建了FSBB变换器的实验平台，对SiC-MOSFET开关管选型、主功率 电路、驱动电路、采样电路等硬件设计进行了详细介绍，并在搭建的平台上进行了相关实 验。对变相移的PWM电压控制方法进行实验验证，实验表明本文提出的方法实现了变换 器四个开关管的软开关；对并联器件的模块化设计进行实验验证，结果表明并联的SiC MOSFET以实现均流；对PI加前馈的控制方法进行实验验证，结果表明变换器模块间基 本上已经实现均流。 

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)