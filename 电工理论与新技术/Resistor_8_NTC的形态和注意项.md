# Resistor-8：NTC的形态和注意项


> 原文地址: [https://mp.weixin.qq.com/s/ittf\_QA\_XSYbpuXgn8sNMA](https://mp.weixin.qq.com/s/ittf_QA_XSYbpuXgn8sNMA)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSdWnrnnEHyFjk39wFYehiauJApxoqreictqHMTk0FwgNlqqGSSnib0ZIHHrFfcwUgVFjFX9yAxhAgIg/640?wx_fmt=png)

_**_★★★_**_Resistor-8---热敏电阻的形态_**_★★★_**_

引言：在常规认知里，NTC的形态以片式SMD居多，在实际的使用中，根据测温的场景不同，装配方式也不尽相同，结合测温系统的稳健需求，衍生出了许许多多的NTC形态。虽然形态各异，但本质都是负温度特性电阻，其特性参数和关键计算式都一致。

_€1.NTC的各种形态_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKEzcUM4BicnP6VMJPRZdEDRFyv6MS9PaYDDPib0kcicxlQFsHPyY7JvlHQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKy9ge0FQBVhwgYwKaZXrQP7CVFPJW6icICEK6aaYJHULJLdWufyVGr0g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKrl96nvsdwoovFzRJ3v6HDa7Hta3NVQjCzxOSwunHJO8icAOuISmfGkQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKeSFic9kN7pZLZ4ZZjJ8LicibIh2qxzbaFLYibAMxA7x2urXTicN3ce5FDjw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKevqq8ZmftxibstXibSbQiaRdCua7GMLDsEz6ClDLR3sYrkLwg9g43ke7g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQK4WPcOf8LSvVW3fZhHvFBPNvqrql76jEZFoCM1F8ysicJtZU2gzhw1aQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQK1XxSeHBEib9CNnlRIEKkB8RQ5YqgclTIPPLWoaWlJr3PlK3o6IDdUXQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKybxAtbkkrM98Y6LwZjpCKdCWcb8ic2TKTY1QfnUKuMhKPIKicye5rLjg/640?wx_fmt=png)

**_图8-1：NTC形态合集_**

_€2.NTC使用注意项_

#1：手册标注的的RT值是在温度t下测量的。在25°C时公布的B值是在25°C和85°C时测量的结果，因此在检查时应该使用这些值。在测量NTC热敏电阻时，必须采取以下一般预防措施。

#2：不要测量空气中的热敏电阻，这相当不准确，偏差会超过1k。对于室温或以下的测量，使用低粘度硅油，纯萘或其他非导电和无腐蚀性流体液体。对于较高的温度，请使用油，最好是硅油。

#3：使用精度和重复性优于0.1°C的恒温液浴。即使流体搅拌均匀，流体中仍然存在一个温度梯度。尽可能靠近NTC测量温度。

#4；将NTC置入恒温浴后，等待NTC与流体之间的温度平衡。对于某些类型，这可能需要超过1分钟。确保NTC传感器处于低于液位的足够深度，因为环境温度可以通过电线或夹子传导到传感元件上。

#5：保持测量功率尽可能低，否则NTC将被测量电流加热。微型NTC热敏电阻在这方面特别敏感。建议在所用介质中测量功率小于耗散因子的5%，从而使自热功率小于0.05°C。

#6：引线式NTC一般需要涂导热胶将NTC头和被测量物体表面粘结在一起，形成稳定的热连接。