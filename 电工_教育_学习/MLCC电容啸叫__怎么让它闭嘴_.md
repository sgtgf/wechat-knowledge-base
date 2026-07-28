# MLCC电容啸叫！？怎么让它闭嘴！

原创 工程师看海 硬件笔记本 2022-08-01 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/\_aiq3y1-aTK26VE3Tyj2MQ](https://mp.weixin.qq.com/s/_aiq3y1-aTK26VE3Tyj2MQ)

▼关注公众号：硬件笔记本▼

  

随着笔记本电脑、手机等设备的普及，由电容器振动所产生的“啸叫”问题越来越多的受到人们的关注，如何优化各电源架构的电容啸叫，让电容闭嘴，是一个有趣的问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7xJWcoQyUIV3wR7pdyHhMCAQF0icYZSmlEQIZB41rH98h1plwjzPsQMg/640?wx_fmt=jpeg)

  

MLCC电容器发生啸叫主要是由陶瓷的压电效应引起的，MLCC电容器由于其特殊的结构，当施加在两端的电场变换时，可以引起成比例的机械应力的变化，此为逆压电效应，当振动频率落入人耳听觉范围内时，就会产生噪音，即所谓的“啸叫”。正压电效应相反，是受到力的作用，产生电场的过程。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5ImFytXDXgAiaOSN5stianpSuwiaOAUR8uMNElmib87cWaD5tEn7ZlicEibZWygiaoZ3gaOry688Oy6e3qA/640?wx_fmt=png)

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY71noTyvhXegPKPeL60jXQfmtm8tPw8cbxwjlJ9lDIm03lFBv7nUTf0Q/640?wx_fmt=png)

无论是笔记本电脑还是手机，对电源的要求越来越高，通常在电源网络上并联大量的MLCC电容，如BUCK、BOOST架构的电源，当设计异常或者负载工作模式异常时，就很容易产生“啸叫”。

  

在笔记本电脑中，当电脑处于休眠状态，或者启动摄像头时，容易产生啸叫。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7KpdD23drfJRp4ibUvODcpk6micajbJu5EXEbCQt3KZiaF80ibPhr7aUyEQ/640?wx_fmt=jpeg)

  

在手机中，最典型的一个案例是GSM所用的PA电源，此电源线上的特点是功率波动大、波动频率为典型的217Hz，落入人耳听觉范围内(20Hz~20KHz)，当GSM通话时，用专用听诊器听此电源线上的电容，很容易听到“滋滋”啸叫音。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7bPFVbc7f4kscexlPxnRKSJWCg89sOZlIqebqlzvYYOlASO1uRTetYA/640?wx_fmt=png)

**如何抑制？  
**

**1\.** BUCK电源通常有PWM和PFM两种工作模式。PWM工作模式时纹波小，用在负载功耗比较高的条件下，为了避免BUCK在PWM工作模式时，给电容充电的开关频率进入人耳范围内引起啸叫，有的电源的开关频率会刻意避开20Hz~20KHz这个开关频率。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY732AfTn4QkibwMohicjicWJ4GKopuiaUCq8r6hVkWDprxUNo86MY5mLL9vA/640?wx_fmt=png)

  

**2\.** 当电源处于轻载模式时，会间歇性的工作，间歇性输出几个脉冲，这个间歇性脉冲的频率，也有可能被人耳听到。所以也要从电源或者负载的角度，来优化PFM工作时间歇性脉冲的工作频率，避免啸叫。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7YEoZJWEIut639TurvfXl17kPSqeSaZOL5JyChTSPX2fLVlJ9KnPVow/640?wx_fmt=jpeg)

**3\.** 另一个是隐含的一个状态，在项目初期，系统往往不稳定，负载在正常和低功耗模式之间反复切换，电源也容易在PWM和PFM两个模式之间反复切换，这个切换的时隙，这也可能引起啸叫，需要软件优化系统的稳定性，避免负载工作模式异常切换来避免啸叫。

  

**4\.** BUCK电感的饱和电流选取不合适时，有可能使得输出电流增加，会误触发电源进入过流保护，电源在正常工作模式和过流保护模式之间反复切换，有称打嗝模式，也有一定可能性引起啸叫，电感选取一定要合适。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY75FNZLjL3Q6wqicpjo8ErqaMA1ROfwPzu5K8btOSfo3X5ztIT7FT8q4Q/640?wx_fmt=jpeg)

**5\.** 开关电源本身纹波就大，多相开关电源具有纹波小、电流大的优点，通过交错相位，可以有效减小电源的纹波进而抑制啸叫。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7CUOOpYOJChtTZS8RSP0qFelW6zgWfuicyfVsUM1uoZncNE20GyMqClw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7D3IwO6piaEL4PpELBAepZgVRVb5ZaR0zRomeFURdhxtyZ6VzM9swq3g/640?wx_fmt=png)

**6.** 抑制啸叫，除了上述软件、参数、架构的修改之外，一个典型的方案是使用抗啸叫电容，比如村田KRM系列和ZRB系列。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY72MbWI2YsLTNgZAiaPNE5yDQahaETTicMWZ5dBWuLmSPT6B8JPCYAaH1w/640?wx_fmt=png)

其特殊的结构可降低电容器的啸叫现象，可吸收由热量和机械冲击引起的应力，实现高可靠性。相比于Ta电容，抗啸叫MLCC电压变动⊿V比初期小7～22%。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7d6QvhJNRJ913b3P7XExuoicLBoTdIrcjwaTqicYjbMneENnzlehnLGGg/640?wx_fmt=png)

**7\.** 在布局的时候，也可以优化布局，电容彼此之间交错排列，抑制振动。

**8.** 甚至有的人提出了在电容旁边挖槽，缓解啸叫的方案。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t5NdfC52ZgWh1jHBHMwkiaY7xetV8ZmZicxSBibqIpKyYqvIwiaLwAKw1jVfibL0CtbF8OhSPoOGSY3aeQ/640?wx_fmt=png)

以上就是电容啸叫的原理以及规避建议。

  

**后台回复“**加群**”，管理员拉你入技术交流群。**