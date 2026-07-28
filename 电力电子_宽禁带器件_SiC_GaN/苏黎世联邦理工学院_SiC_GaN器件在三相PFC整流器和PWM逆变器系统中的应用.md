# 苏黎世联邦理工学院:SiC@GaN器件在三相PFC整流器和PWM逆变器系统中的应用

原创 Johann W. Kolar SiC碳化硅MOS管及功率模块的应用 2025-01-15 15:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/FfW4K1ZoVztRm1Idqg919w](https://mp.weixin.qq.com/s/FfW4K1ZoVztRm1Idqg919w)

作者:Johann W. Kolar et al.

摘要：电源转换器所使用的功率开关组件一直以来都采用硅(Silicon: Si)半导体材料为主，但是随着越来越多苛刻的应用与需求，硅半导体材料发展也趋近于材料本身的极限，使得硅功率开关组件已经无法完全符合需求，为了符合电源转换器设计的需求，近年来宽带隙材料诸如碳化硅(Silicon Carbide: SiC)和氮化镓(Gallium Nitride: GaN)应运而生并且已被成功地商品化。

三相PFC整流器介绍

1\. 工作原理

三相PFC（功率因数校正）整流器的主要功能是将三相交流电转换为直流电，并通过控制输入电流和电压之间的相位差，实现高功率因数和低电流谐波失真。常见的三相PFC拓扑包括两级PFC、T型PFC和Vienna PFC。

• 两级PFC：

工作原理：通过两个功率开关器件实现输入电流的控制。输入电流被控制为与输入电压同相位的正弦波，从而实现高功率因数。

 优点：结构简单，控制相对容易。

 缺点：功率器件的开关应力较大，需要高耐压器件，增加了成本。

• T型PFC：

工作原理：在两级PFC的基础上增加了六个功率开关器件，可以产生三个输出电压电平。通过多电平控制，降低电流纹波和共模电压。

优点：电流纹波小，共模电压低，电能质量高。

缺点：控制复杂，成本较高。

• Vienna PFC：

工作原理：使用低成本肖特基二极管替代部分高压开关器件，减少了功率器件数量和电压应力。Vienna PFC以连续导通模式（CCM）运行，具有固有的多级开关（三电平）拓扑，无需死区时间，简化了控制策略。

优点：成本低，效率高，可靠性高。

缺点：控制策略相对复杂，但现代控制技术可以有效解决这一问题。

2\. 应用

三相PFC整流器广泛应用于大功率电源设备，如直流快充电源、工业电源、热泵和大功率空调等。这些设备对电网的谐波振幅和功率因数有严格要求，三相PFC整流器能够有效提高电能质量和设备效率。

• 直流快充电源：用于电动汽车的快速充电，要求高功率因数和低谐波失真，以减少对电网的冲击。

• 工业电源：用于工业设备的供电，提高电能利用效率，减少无功功率损耗。

• 热泵和大功率空调：用于高效能的热交换和制冷，提高系统的整体效率。

3\. 技术规格

• 输入电压：通常为三相交流电，电压范围一般在380V至480V。

• 输出电压：根据应用需求，输出直流电压可以是400V、650V等。

• 功率范围：从几千瓦到几十千瓦不等，如10kW、30kW等。

• 功率因数：典型设计目标是实现高于0.99的功率因数。

• 电流谐波失真（iTHD）：典型设计目标是实现低于5%的iTHD。

4\. 控制策略

• 电流控制策略：

• 瞬时功率因数控制：通过实时检测输入电流和电压的相位差，调整控制信号，使输入电流与输入电压同相位。

• 平均功率因数控制：通过计算输入电流和电压的平均值，调整控制信号，使输入电流的平均值与输入电压的平均值同相位。

• 电压控制策略：

• 恒压控制：通过控制输出直流电压，使其保持在设定值。

• 电压前馈控制：根据输入电压的变化，提前调整控制信号，以减小输出电压的波动。

• 功率控制策略：

• 恒功率控制：通过控制输出功率，使其保持在设定值。

• 功率前馈控制：根据输入功率的变化，提前调整控制信号，以减小输出功率的波动。

通过上述控制策略，三相PFC整流器可以实现高效、稳定和精确的电能转换，满足不同应用场景的需求。

三相PWM逆变器介绍

1\. 工作原理

三相PWM逆变器是一种将直流电能转换为三相交流电能的电力电子装置，其核心在于利用脉冲宽度调制（PWM）技术控制开关器件的通断，从而实现对输出电压的精确控制。三相PWM逆变器通常由六个功率开关管（如MOSFET或IGBT）组成，分为三组，每组包含上下两个开关管，分别对应电机的三相绕组（U、V、W）。

•PWM调制原理：

• 设定一个参考信号，通常为正弦波形，其频率和幅值与所需的输出交流电一致。

• 将参考信号与一个三角波形进行比较，当参考信号大于三角波形时，开关器件导通；当参考信号小于三角波形时，开关器件关断。

• 通过调整三角波形的频率和幅值，可以改变开关器件的开关频率和占空比，从而实现对输出电压的有效值的控制。

• 工作模式：

• 六步法：每个单相逆变器的四个开关器件按照一定的顺序轮流导通和关断，形成六个工作状态，从而产生三相交流电。

• 两电平法：每个单相逆变器的四个开关器件分为两组，每组两个器件并联，通过控制两组器件的开关状态，实现对输出电压的有效值的控制。

• 三电平法：在两电平法的基础上，增加一个中间电平，通过控制三个电平的开关状态，可以提高输出电压的分辨率，降低开关损耗。

2\. 应用

三相PWM逆变器广泛应用于多个领域，包括但不限于：

• 电机驱动：如电动汽车、工业机器人、风力发电等。通过精确控制电机的电流和电压，可以实现对电机的高效、稳定和节能运行。

• 电源转换：如不间断电源（UPS）、太阳能发电系统等。通过PWM调制技术，可以实现对输入直流电的高效转换，提高系统的稳定性和可靠性。

• 可再生能源：如太阳能发电系统，将直流电能转换为三相交流电能，实现并网发电。

3\. 技术规格

• 输入电压：通常为直流电压，电压范围根据应用不同而有所差异，常见的有400V、650V等。

• 输出电压：三相交流电，电压范围通常为220V至440V，具体取决于应用需求。

• 功率范围：从几千瓦到几百千瓦不等，如10kW、30kW、100kW等。

• 频率：输出交流电的频率通常为50Hz或60Hz，但可以通过控制实现变频输出。

• 调制方式：常见的调制方式包括SPWM（正弦脉宽调制）和SVPWM（空间矢量脉宽调制）。SPWM通过正弦波和三角波的比较生成PWM信号，而SVPWM则通过控制开关器件的开关状态，使输出电压矢量更接近理想正弦波。

4\. 控制策略

• 电流控制策略：

• 恒频恒压控制：通过控制PWM调制的频率和幅值，使输出交流电的频率和幅值保持恒定。

• 矢量控制：将三相交流电的电流和电压分解为直轴和交轴两个分量，通过控制这两个分量的大小和相位，实现对电机的精确控制。

• 直接转矩控制：直接根据电机的转矩需求，计算出所需的电流和电压，然后通过PWM调制实现对电机的控制。

• 电压控制策略：

• 恒压控制：通过控制PWM调制的幅值，使输出交流电的电压保持恒定。

• 电压跟随控制：根据负载的变化，实时调整PWM调制的幅值，使输出交流电的电压跟随负载的变化。

• 电压前馈控制：根据预测的负载变化，提前调整PWM调制的幅值，以减小输出电压的波动。

• 功率控制策略：

• 恒功率控制：通过控制PWM调制的频率和幅值，使输出交流电的功率保持恒定。

• 功率前馈控制：根据预测的负载变化，提前调整PWM调制的频率和幅值，以减小输出功率的波动。

• 功率反馈控制：根据实际的负载变化，实时调整PWM调制的频率和幅值，以实现对输出功率的精确控制。

通过上述控制策略，三相PWM逆变器可以实现高效、稳定和精确的电能转换，满足不同应用场景的需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXC8DMIU4CZYyTM1An7LEzRXpCX7Me8pLpFpC4ZSNfz87ujmNKXic3Dw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXykUMuOmlQKPUicCPDD0Ij6DVRXA3NdBvWAyonkvEu9GFoQRfddiccBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAeRgCL0mCqSxicWY82ViaY8h4iad7jfqLmuntMJW8icYl6vicmvuB8EUlvkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0VEwiakqeKS6oe25SqvhI1xeTnZGlbRhVolKsZGUGBgWCd3HllXdCbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtf7sVBNHKdQPyBnUF6fAQgyiaGlvVicxO1ELwdUtN6X1L5nIsMj3Uicsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9S5YlHY0HTmKufNibyHibicmeqyMMURPYR8m7MVeuQD2cLKzfW7A8aBgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9ODw0XcnNtCylyDuy9Sic1AjGpANyKh8k27qBiacqNC9PxafeY138knQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA4ZRiaPXAicJXAMCMticHAR3fRBiapLuvnHgxic9vjtP9a0CqXbpz3iaRlW4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9SqeFQzqbfoOuzhnQnoOS1jJOzOfokensIrEibhIRV6p4DDgIez6ib1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXWBaLRDsVB8T18NbibibgA5QqWv8ibBwumrIIryeLY8aDNYDg0zUicdpbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAdaSHpXTFPjNmpibHrk2OTDhBV3LLEpdwkg0KCz1XQ1qMpGZ7Zmn6BHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA3I3njn67nHMOAGDJb8iadeJ5L8CN2pqqS3fickicZ2yLI36IblrQIYhow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASKlou4PfqFB0QOGhNDTqwFt5QDKEzSGKCeibokVJG1pFh95gr28K1xQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAha3ftAehDwNE7sGAW0P6yDa4tCX4fj0ZyLV3KibhYu0HYLUh3TCVELw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtvDyD6CEFIh3wzag2USCs1M2EvwYwBjptzQg8BOWAuibDjMicVibniaQ1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAPsFVKmefUa3cLLaQclKPRvicX7reb71GkJtVeaBcGpoFsZZkwfb13iaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAFpQGdm61iaGTOQbTPnUbOoJd1ecw5aOFWW14NOdCJn1RfduW3Vww7vQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9GXhzIYM5RL5l4HFzbJb9QZpGDCjKnRNIww7hVLz8qqJYdHHjCH0iaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAsblPwL5UCEicH5ZYl1o9C6Ux8p8nBmWlIVs9Qazn0p1Q2l6fpHfNrHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicApB3850xfZCRmAYhBI0SWg1rXAYsEZXX2gLEticfCnk74ZC0QTmODqfA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWHsokibIUia2QdCobFnTt05Qk4XvJIQ91hKme5Uq3qu9Zo2iaNxdz15TQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9YFGQloSMwbjU90MwxiaWtoENA21NfC1RzIaOdELNKUPay9dqia8E3Ig/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQk3KQWOlySpLwqTy9JQj2WGFgUlDA7CCbBUB9IhugskFMicuSChSVwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAHFaFZxgK2y8QcaPaF4kfSmtLDnHJop9SFaVOcxVZwq3mgbzZ7kFQew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAE36mSUibgjPEYBWUlTWicvVZhonoT9S1yRfjpibGJibiaKSPYfx0s4yjmow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicADp7ggaRg3YCEkIhnTYQU0OMNBxUGn3209eqlic6MvLMcD6QYibOg5mqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA3CXQpJtS7lbJmYicSH5eOI7wmvtnQ1u4jfN58ziclJcXrVt20kSSnJ3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWSf5ajrUf3nUxAicnlRNpqpNZUlTmPERvmcxb3oXYsfzFDICF9dnichQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgoFllzb8gSN5UIaXTHDpicYZeknROrSZqbXxvkvSW3WLWxNZYYCsJjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAibdk4THbxiaBgycyl5mM0gWia4wko6EoVVXE9s242OMt0NGwZHlibvIvpA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgmxrO2XWyBqq7a0wibhkcB7VbMwLVEwcJuxcd8hQRscFzfkmibWlSlwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwtRSkl3enk71furV2iaa2yYOSltmicSgyXb3e28BsW0fJ1WibfwC2ibiaUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKTo6S7Qcel2WWIlhHNtvOrDekHIsLecPicSaoHmbZROkaoIvUxDLiaSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAAL04yTY6GDdbsA1fmcwGc2MXkqYiaiaZQYTjemBExcVw5vk1MgpJNJdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVf45XaicqhZRtgjhfJiarjrmtxK6lEcqwKlID82L2r6RppbX259wibIicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKrr2SsMYWG1qh1eK3ia0tu3hDP1gJ2chQ2K5rLOYRxMe79mUYMBeG2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA6rhWN4rswcIysUax7WzjSqtXO7PibbYPjoweveFjibzRvJztUqHDTZsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAZ4h8fVOCV71ORqtPftYgSJYotreUh3L3OGhXguYySpwhwyXvm6ZJXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAMvJ08w6GbcLGibXwicUvmcnTvDiajSN2qVoLVM9YLmYyxuueico7TtTuzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAknR54k2icECFYZ686TKZTYvHGd0gknjd162Lib5EbSIIRZOic3pzG02Dg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAhNP6UovU1JVES8aWCiaaZDaycwWGPMAeicLMsbAk6HYbhQgctJwQtj5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwEI9gvRbUpWpbKPPmsRzhZhNa7xKzO3pZRX1ZQRqnicEiajuicrm7FygQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaribHUym8D8C5ibfcDDrib8chcia6yypw8muf2OFfk2cQacbhFL6L4c2yw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicARCIByqL3qcic6RgY1VXogReq3dLcVyjHG3KQZ5D00m327Sw8AE63zVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAbASOQEtzgUqhMtxhOibAQ8p9p6o9UDHO7KKITZGR8S4t4mD5s7ZcuHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAcV0XAibsRfqnD9sIA3YpIicStMy0mY4aXW8FiacxicU6XaOota0yG5WZzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAc3Dp88u3b7ic7S1TTcvYmT2jwAr0Cg5gbgw9cVwvm5OBibI478RHS9PA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAEtUxMh4rboZbI5J7d9VJXGd5Cv2wMImGiaC9WrShXbicQAQfGWtHNsJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaSVry28BHdy46bZ2xpsoqIvr2DGyQj8y3R00fI1fdNcBn1YSn0X38w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAib1MsicUxw4awC567PWAkp3L2UjzlualibdgGZK9ia4bAibIiasm5HLF270w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAGJN8nSkaibV4abbLunHsRkkZpOR9CphgzLyb2evuBkwWGrJ2ZXBVc4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgB97vKxIT6YzV28rqgQiagsRYIAmvQa4TwM2T9eQ0WWcc1Oy4cbGbug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArQXkhtSbbaz38tiarznNN8WEdFvSdh8vSVZg3yiapF81C42OO9fM8A4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAB0Picdtg8RW52miajXgGsbk6OoHA6ia3At69nJRK0yX33avAZSuvHZlQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAr7zs02GNhZjNDdt2URSqd3WdBSJFtC1iawc7FSrnSYM3poqxqsTicB2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAP3XLxyoicy2RZPWKDTMBLHRQDBEnqsT24QJ3xibLQibH6ekqrOY3NfJzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvOVYsRRkic87NgB0HZQicsEAEy3pfIzplKUwRRBv0nvbC8rlKHvvOdLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAP0ng9tq7XrsOPPf99MUPhGVXvPUl1bWkiamxk5VFOzeBKtoo2IKvhwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtFGReH9ic8QZhhvTAqRjqtWKicN0VpCJto9Eo9ovgDPhguIiaGoTicVLCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0SMcUyocAUC8ZibwwIRUwiciacnRPtILfFCrwBDFibEIhhkRuXiaynpFicuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicATltr2I6nb6plO957qBEczXTicnibGMMHWo6p8akiaicd0xlm56l3O1RFPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQLQSFb7Ic57smmzOPPbDq5nQj63apKgPtvemfpxhRN8cXF5hVP7jFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAewL7fTgicuEF6QRia8ib8ic1POSOlSsxss7VxMwmUgzJqlj5jjhpib4dujQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQ2fApTIuMypll51VWExiaapFw4OnHxhmicBia1oXiblrwdnAfVLcYWlXKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA19YSLMFC9eryExjGiadMvexpFsFpbbOaaGXXwGGBGWGZHcmTQVWYdaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAt9ibdrQnKWhupNtGOGsJKTgRJsH7YzzHOenjxSBBicc9YVtlo2fFWGBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7YgwQrCFIgs1CLyjf2T8iciabZDn3uvnlvm1jhBVl7IHtGnfnqHxX6Ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAYyeYNg4ceKf6k2OabXZfB7SxXKr9ZM6M4RAe8EfPOGfjJoJA0qy7ew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjiaT0b83hC0I9RFBTtA5kiaUkJZmiaD1aPPLA6IN4GpCs0Dkuhb3PuUNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA08a4enOVDsWlB6Ee6a2XNp0sMfTo8tia0twbricqqPmdTNP8OQiadBMPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAmibVrtsYKhrfuSPKFCFnJdgeWT7by2r5Cu6D3QZ1QGicicM8fGhURuib3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA2ne9xy7gylB0z9Nhvt4ZmthNWmm9RcXqKNnfHSoCrBnFmWKK38CWjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgatgHZS3ng1CA1U3lPmOBOeU1mvsXfdKUdDmlmCibtcPtN3WGnhCa3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAdFNm2AEVdV7PppqNvia9kFSJzSfLHzxv2OIvezbtqwm3am3A8kMZDfw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAUS75OS9XfLruBGS7NMcONQpXS8luicICeOgBBO74ByI5XtIl4qwQLvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAR1JEf59E5tVqOk7Gvm8NpKrFHVticFmtXiakePK7RP7jAkWsoKNlD0cQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAkAwoswHIygqtgLXkJcZJbTaFfYInpnNwmniaI7DbaMR35X7uv3hsyWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicACpmm0Gl5P2zZDRrzB6GS4wnVEHr7rwVQxkGEC66tdjgOswuSHNzGNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArKL7BvHcmsBfx9QpbWCAAqFOw7z3KMMxjxDKibibuZQ4VI0ziab6Dqk6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAJibbOribQlANYdZJR2CdW9CxWNJ1b1POt9WTmdHBoaW8urib18uw10zJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicANhOmGMMODvyWkTBRVSmF4aTemCO12kbxcrUbk5XRWASqFiaCA9IbXIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAx6licXz8HJgLOdx9xEOyy7jn3Pt0NmvEgSibH6ZRomt623nVsSKcPMXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAibzibzlN4rdWMOOwUX9DdoH39dXt9y2eE3roXYjLre48XicUVgCtUkibYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAlzBlne6wobst433PYOrLd6Fs7bgm0bgaDDVh6o8rfdbgp1XY0icEJOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAn8KGibyWD3Z5kuQJUtrb1CJodlnMw76kA3Grxy135QUn5k80XDRGEdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXYohuqbZJQpIiaqShotbcp6yNvbNttG6235JujkG5f7CBIpcvKhAPoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAH8tFHqCuM3mqeictgyVmNEv8YYjltyJRiaPhP5uZHRXpL1QPmfaur7cA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAH3b5Zn9etK5ZmsZDblpa0vjIoG2Yysxzt1wcoIxyb6ibJN6afK4vnvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAkoSIODfRkLIcZqG0ic220NbVbuWyib1obWAic7VlUWR6hemsDzTPnvWow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgt0AeSaBHaaqFGHkCPblVu3V0U7wqzHYuUnGEmQ99d8ZWcaSia75ricQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAzBKLoV6fWtboEw8hNb5USTLVZxMAeq7HnB2dPWjyVC3hg9CQiaYVNLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7W49ibXCsuJa2CP2qibrmMNGZicAJp7RHE6hWpDWibfUFDuond8XQzpYJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAibcFXuc11joUOI3Iq7dpLPDm5twlOMBaDDjJFQnMBBJgBgSHaIdL2Bg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicANuquWe6xiayKSLYG0rH1QQAb8qOlhiaNNd5vGp9WJNicE0u7WialXibOZUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA2yBGgJll2JX63lFAgy5iaK0FzlicubWVcoJh8cfwP9mpXZjiajb2hA8pw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAqPzGegxpJMs2YMlVT10ica91RViciblMVw4dCJBrs6j64BicxPibSUojcGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAy12gm0Ar6qibjXNJHq5GXeKa89M4G1ntVYBJxOwzQJyeQOD6NRIjRoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAOgWJ85UuzsUY5B9qKG08G7uwibmbseqGBcrWmDdjVNlv2zSUlXE7TTw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAnz2giaVlajd0gNFVRib1icsgwdHIaWXM9vyadU8RuvFFLFhB66Owu0MWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAicY32kA7NicvhfLbpxZNCYH994VzTgvNtEibH7caMxP8QvK6SNaGBsSAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAIagalxWtUBeL8jh0OtOkicNMlJKkdReTpQHoL0KGhuI6L8QbMpicgxCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAxiclNzRCaUzWFyXo35Uv2hsEAzC7YQJC0UNhrPxicMpwDcx8PyzAFyww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicATodVibS1U0dHNjJNEKZpBCTVqGYv0nU08icJ4YIViaAicxbHzgVcIIC4oA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0mCxyibyfufHQZ7ApdH2DakabqbwBbQoBzicsrpFmFVzwJtB711EnmrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAK8XGN8wmfQl87jqHmdXsOIA1krUAOnGBxaicwS4O9u1DPp641ibp2YnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAcXODUugHujN6S7GTXhEAauNf3GfA3YxuJ41CoyPSLhfRIsNBZywFGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAstBmyJjNVXia7ibia24htXe9AtCpqjaLYVYtUibNIXVE7kIM8q815icgeUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAAyH21QCmm3mia6Wtg4SREuYfbfjJaJt5vYDf2qhrqWVW1AfnOwVcTKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvKR81w5u3ZpCXBu5MrnHMcNtOdf3PY9fneWj8asapCI0s7Fia15AXzg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAT6FYkv2Wl2vibHLeft7gMxYnBqicibJucqFe5zMf14qNYlPkSPudB0Eaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVroQfBqgGo4AMBR0Wo1HAXpJnUfoickEYn3MdrHqs53Xjdk8VG1A4RQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXvbFP6ngNKZCawxawNic8DPaibhbmt2j0tqnZ9eapjibfqyJEPYT5Ukfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaUeibBGrA1iaDFRibYJl5bJ80q4ianfWW8ocEiacNVyokVdkqJNx9DBtscQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAHbBOSVwTnibG2YRrJCOIBpXkWHgBibJnHu6aasskk8EvveB8Ovf9pV7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjjzwEj76KqibtfWgzoWhkXFmibreNGdy07DB65UpKaTs2puTDfrxTdcQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAdwS2aXAEOrynVXLPErVczdVenefJkutZ2OhFHzld8XmLDficg1IP6jg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAXFtOF0QbbFEDic7fIAnQRiaTyqTmAPIia4aiaibkFPTt4unXNbdKadUqEKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA71oKzvqXiaVQzGHziaTZc7x4M3bTo7iaUcCIHibAwF6kPRxkRUVCibYaYbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAM4HXP3UF55e2nC9QoiaAV2fpjeM9S8pK091GX0plYicrULCPJaiczo2rw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA57rRYssyH3pIXZM2VibINneRibGSUhBzD2Fvxr3pBYSI5gbb2ofz0VOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKZgSMyuz3Pv3EEjzERXtNZbW6icQ1wgL6zwAibNuBhm8DG7xzicy2zgCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAuOGGa59ygHciaiagiaonqAnbcaA8mTBf7gyr73mPhmWzdzDOkXxtJKHUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWAhJfFPGkRV7l9MF5EdT6X43bibIXvRszFlAMoqVrc2U8v9nAY26ZTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAic6dHOBqsjgHibVRcVzdOm27MA5I0WfEcaOee7VdvjLjjsxBd0jY3FGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAGlTqMQNgR1CibXWIutGOicNP2aJHpgAPzV0lEQJibFqut0dicHLgAnTiaHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvq3w4fn4ickxwDZPZ6g0ichrH7dl9oXEfN907k6XGiajl9NbibhVhEC7AA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAq8USicfKD1OeaibN7w5xF7LGAIwqyoRLwPwo8egA0CYrV6JyKtILOhlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAA9KwGbzYKLQiau6qtx6dVvmIEianib0Yp4FohUlHbBpJqoRByG7fv1M5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwgcU8owibEAawbjs1HokFp8sLPqnFkIOv5maHbjWSLw4HtqtFll1tkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicARhEPSPciawnrk6FZuZfEzYOoHwDBg4T1VDzEe39cBHqLgaqKb6YFCKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAghdglUOIUu2h3N5abwrTg2HicnQZDCdGVAJTrkVyQwceIFItdoDKfjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAvpufkIHSn7bH9tKE4lJQPlO4ocS6tyRb2YohBh7yLYibhdDuoDnGkFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA5ApqkNAoibuTmo5bImDVuV4DVOHJCD77DDpWOqD7RFADkQLaEqIRlcw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAszyeQusU5FibqsnrZnzHmcUFMEBGNn5QClZhB2zTQU46eUJh1LCx60Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9SU313PQsJlbXeJlw76nq3bLLOicVLRhxhtSDamlxOcGywhFibyia11qw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWd9AleNc3CictkCjHyPd0d9gWUHj4hmaQibJfvXia6q5wib5NickJpNqicRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAGmZL6v4HGUxbMxFlxk2CVj2G35tlE3wGJDqkH5dxm5f2ZJtMWnP2PQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAhDPmiaA8N1BZoiaMgaNKjd0SdFIHT8LdcID3wc4ccA7uup2oe7RW1c1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwUyAxrpJfJtpeicOLqQy7bjRn2UawUvOnccPxgl0PR9nUR1qlnZPsZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAmic9sg5UDicmsAWmKiaN92C5tdBcYU0yT9L76KP4m7FkT3VagEXNRDZ7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAku8OnIfmRaMUmxXbKbS0UyibcSI5ibYoxIZeGa9icZto7q4w6LzF97kmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7jAZB9laK8FGLUq3NyG4nwYTX8ibMymXFIpkO3g4bkhBHoIibxpCjQwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAr8jvm0HCKLxxEOhQZ6MFHwVXwJhdIIyj3OREIVoKWOSgH1H95SR3tg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA2gQ5CRs3E79K758eECrPJAo9icX9JaBibY6pzdFWuntVHibPVoIlRaRrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAlfyrWFnaob496bPpoDibtxXupg0qnRFITiaiamhKuM0dBXvrEO7dYj5lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAfOFQ0kNfFy3ibOLEq99aul6J1BuRfiaj8QqibByjoxia35wer0sibMJfcJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAsDyBlQ6hsuyawmvbnbiao3ibfUE422fglvRJhWf0LAAic6u8MDk5avmlw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA5dZsRiav9wIwB1nZKrzrk4L5O8X5CRowaoia0FaOOX7dp6ichjnr4Kx7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA0zTDEIAesS4hWhURPiaIg1VtgLdWtfsyO0DNrgeZkGbF53qQhX3NDag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVkKiaRGOhVKiawxME7bSTy1gnjgcOrwcV78OYibESEPEtichNWJE7q0XUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicALVwWT1xerNjZ4TrudTNWCx4c8kRXe3WK6YibQN89zTDJt12nZcE3ogg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAtpuuCm2hmib1uicjSic4YTh2EMzkTClMOQib3LV9qIv4icibIIsbguu0iaXiaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicALkvpc61iaAwQqmUicuUSJxCgsZ09sEcGUnqhiaVMvU6CNhGhOsLyRohbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA48RVG8n2hfXVeCPyATWooJOZELWPXMJMhXhHXoqOgPH3BxobR7OWSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASpQ9mH7uibq1j0DGboeNJWPCw9cBbMCGgqhs86XJMKbkfXKRDSyNouA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAyDunBT2yicNEicfqwoePzQSbQvUuq9FLVRGzosxsWAX9jIhsZunyeJGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAaichfiacIQudSmBHucqIkgSy7norYJHmEb6ic3ZuR6gUm4IUoLUnGqb3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVX66r3ibgeiaXqiaiaPgUUzpAmnHbSDlVtib1ptsTFnNoBxRRHbibfDvLgDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA1y0L776DOKgH1QJqoOwuwlJziaZC7ktCQicghVlp4Fh5LwHwbYmmNIhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicARnXia8OBpoFBymHXRjeUXgNGeObw5CibvYdFMJB58PlpINv0MLdU0yDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAS7qRbU7GsNl3dbPxjZKAhC1k8YqriavsyVXtWumwUA8KIVwNfxgiaZXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAJXaFuzodSD1rlk4ib7K8X1osKwGG0a7Rl1pNx1S3iaH7miaWyicnWwul0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjJjJxxqABPXnU2ToGZ7Hscd3nH84iaRjX85BGHtLQAD3Z1ohI5L9icbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASOK5Mq8FtR5p0ZRjDahc72vOU5M9LsR7kO7qCtbKYhA31ia7EVyPVJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAfibgor5XuvmBk7NhuA0tOVXic3PclJxfYgcnamekice5LR0C32WL0C1Rw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAia6DgnPqTsdpIicIC1NFASTQm0EfmDooiag4pxTvibnFybcMia3hUOiccF4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicABrF3LUXtbve33INJRR6JuJa7Twt3RuictxyymibcDrH0GIBoM1wjBQNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAh81WpzXBbcic0ISAtMEer4YY8eNp1D9eWibbt1hUa8AffE3b6gUE4uOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAgKzicGyvnj7m30nABz4TyFibNkVpNUd4BWtsewXBswXOdoh19N3je65A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA1yp0U7l6NAVYST2RhjweK6A83OfWl9bryqcAAILaTxbVU6hq75ayNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAsHrZnHsLXLKQuXXUwZpgicUv5K9yYichnC0qcUU6suD6OpIbHbfofr3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA9MqianrD9Yc6VVCr1DJhJWCz3gQ45PO88tFTON4lsm4F9jpuSwbV7Pw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicApxXcY2icTIgHahkBIgzWAU3h18oE5iaj4Acq2RT4mvibpAfMPr6V9BnJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjbIAyEdOce4TKtcHZ1XibYJA2zh1tS5CSibI0cWmmnQrMkeQDIyyW1Rw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAUEVghwfYMnOuv4pJAsHmCibPia1V3dx1KicOnga4fHmjLoebV1Hd5h51w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAwPaiacg5Oh8ccfQrbj2uqIvBkiaIZRY0Zs6POGXiaCnyVfQpU4HC60nBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA8Xsge24q9kUImWqTwLg2SBsdMa1UEibaZhMXjdCMfE5oorLK00th8AA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAWkP47D5Sc7YK6Ew1TIomnJzXqM3f3JoaVT8P9bDP6seEHeibuibrsOIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAnRqH1ficTF3zprXW30f0wibqRdiaTxJSYxQbUib7diae0cbqpFTAdxiaWE9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAjicnUhetTU0J5icYPmzC3TuzSbybNUxLlXrZPyFAMMv2IkrugaOicKeRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAV3YmiavRVRWDDibNwEDJbqlk68cvyrx4yaG1I5RC6yGNkepDFV5S8TZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAqQ3N5kqhOibzCR1Quibnh09ZMqOPDAnztXh3SibxjBpHmkPVJvPoPbpQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAiaFAFzxic6Cd2dNdPAbwtcBSBkECOCDauVOWiaIBqohGQmdbIDCXQdBrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAoEuCGR1TtzAJPpxeC8M5PIxfIIO2kVHElO4aCdaeX5icq0iaBfdqTdFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAFf9cVmd3zR1CSboWDicgINHXhpxX3r1XwhvNbYf0xy4rgmAMwNmtlpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAxw1F7S6ibgAbc4tK9lE5aicxcKTe2bz3l3JWFYMpbfZGIpmhxh9ibfWeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAicxY6SB1l2YI89VS16bnF0oicUUs7yekw9Tiapgj0KBVqZKttZteINMow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAHBhoj4M5k9phbzvpoXzwHWakbibBPhia1W8pGIQh9lsXKcE1yhV31efg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicADiauBow1lfxHs47cUXlZKMyvVgHl543Uib86T5UVIPocUhicJAwfP9PWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicADx92c307o2HBCd5CSlWCZZgEER6JKEY29e9RVCBrDkE1O6fDSkLNVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAQeaOvOfOiapcgNEarFvOiaa1hsoAdxREys5jL4nSF0U5LfR45w2uAyNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVZcg63BSgAgzmqgFSrpurH8L5Libd4N4xnySDy5rSlEByTceTgZGvwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArLiapwHwZ2kCpqyniaoZGlbn7gE3qBxOQUdH9BQJq5D2Gfpjlrfyuhbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAJ2cm22XOOPrmTrVDQHKXmZXWTyKZxX3GlPiaph6SffPay7wV5xH3emw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAYlDoR2kHzf66YXbp8NeGPZYDQQD4XsLnKMn6MErfkmLqD4IETY4jrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAVgibXgjIfdDA8uudMGywIyoxiaFwokAHAqAaSdxa9LaOz7PpceISfakQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7jxjAcdqDT81aMtPCIia5tshU2C5ZvnCsiaHzcwNiczGib8xtNOice3F26A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAS2yMJsCVvqNqOOnJEThU4nOF3qwmXbxIfNzuGLVadtv5a9Zgez7t5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA7AKicGEdDrWhB1rkicaUFbpXGFm4RNcQdtpBoC46g26HKYxUGdicqvgXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAAlrRBY3X9Tgwg7Hzpg2UsiboYBGErfW3ficicHRIHp63eiaKfdnpT1GwCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAbXKaKYFgXCnuhAKGzC31HPIN2xN8UV7ibWPhmMVth1enwYMbL7CKyqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicANDQBTskDm3PEfQLaZ625rPUGcamnw39WRfQYMvBp7PpBdej0yJLGDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicArtLwjSpRWOUG1zRe9h0oTibHV6WxWyrY6Q9xGlwXX5zVmVf5dQQ8l9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAh6kTSdb3C0ImciceO2ZU3OV50Da59GNxWIic9KgDpkia8N4SLiamXE4oyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA1pcK2taszUvdkaaicTic2FwPgmNxIlyt9dY8XUMCDvkMWfWIMq0vultw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicASZWDPpJxFzKZqE84eFIwI4iam6riaKs6hwVN2ufg0s288qriaupjoAibFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAKcRHb7EEEiaficWAaLdyXBustPkXicGZCjCW9fUMSKQSknaibiaJ9rETSWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicAyic1ucmClY3o1vt3BzTWGQsibjA40GSpX5iaCCicfzlsUvLib0W0iaTTQ7UQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicABQPT69jVoXx3YHoAIsia2T1Jpibrh0lU0oGXvUDLHicBtWiaToG5C3iaBfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuSBZnkeYP8ODQF67NSwicA4tACGsEBZMsfddybJmeFaLtkLZupeezS9C0sc3iaeNnodlSJkeWKiccw/640?wx_fmt=png&from=appmsg)

SiC和GaN器件在三相PFC整流器和PWM逆变器系统中的应用优势：

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

SiC和GaN器件在三相PFC整流器和PWM逆变器系统中具有显著的应用优势，包括高效率、高功率密度、高温高压耐受性、小型化设计和适应高频应用等。这些优势使得SiC和GaN器件在电力电子设备中具有广阔的应用前景，特别是在电动汽车、可再生能源、消费电子和数据中心等领域。

资料来源：网络，文字与报告无关。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)