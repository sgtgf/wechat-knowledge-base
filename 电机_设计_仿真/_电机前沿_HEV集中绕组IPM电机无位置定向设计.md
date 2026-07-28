# 【电机前沿】HEV集中绕组IPM电机无位置定向设计


> 原文地址: [https://mp.weixin.qq.com/s/517bLlDP9RE60B0rXXRrRA](https://mp.weixin.qq.com/s/517bLlDP9RE60B0rXXRrRA)

![](http://mmbiz.qpic.cn/mmbiz/TPRVzx6PFWOdLyXNbvYZugOs9mlSZAiahTib6aYwdC2GNlfSdpgyRbFnAxvPZIibBl45ZgwaLqXicP1S2shz8Y6UkA/0?wx_fmt=gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

原文：：《Sensorless-Oriented Design of Concentrated-Winding IPM Motors for HEV Drive Application》——Y.Kano, T.Kosaka

* * *

本文介绍一种为追求无位置控制下能可靠运行的电机的设计方法，定义了一个无位置安全运行区（SSOR）：

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYqRufrGAw0Liadn0LQvr0Wj3RicM62Rb1N8xBQw951eaw1d5cLsRkviaOg/0?wx_fmt=png)

其中：

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCY1rH4on8FGmTPhnCrQZOpQa5fDiabXENKwmgb7vdcGyQMhia8kJFkaXHw/0?wx_fmt=png)

其中![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYbzlSdJK8u7ePaJhicLGicteETBs6Hib5LNIzNUKQKpFX33xtpHEo1k6vw/0?wx_fmt=png)是位置误差信号，![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYglGUy4hv2QiaBiambIicp5gXK5WMkib1qiahoAaK5cicaGVGMSEMPa2THgXA/0?wx_fmt=png)为位置估算误差。

Fig.7 显示了Fig.6(a)下的![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYhqnqOEzAWwMFg6grSL6qibqpmu1XlWdOhodxGAgtQTibv0ln2NTdz0kw/0?wx_fmt=png)，![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYRNCkp27aWaBPwpUSADnazr9qqAEgLqe8VkSBr3kFNVN7VXU5CDu2Kw/0?wx_fmt=png)和![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYUN5ecdRGS8iaojx4Qic2Azicic7t4b7icILrBoJkrS763Z4oxax60zfk3Yg/0?wx_fmt=png)。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCY8k7gwoVkpWdgkDlHgricXcwoSeSCBjchFDyrz3BEuQNHw1dD7ywugbg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYZibMvxs8AnW8ta8Fw6b2MMz2OyYYReJsZ6GtNMPpS8erIcdickNfXzog/0?wx_fmt=png)

* * *

**1.无位置传感器为导向的IPMSM设计**

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYoc0YGial2atb8CweMfubIag9LkVaHMEs2M6ia6uN3qbA2ialibu8EeYctw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYXWlphBkfOyWFlVGwkIAXr15UNBaK4l7ibCzTpj9FoEtuIbC2nNvwmKQ/0?wx_fmt=png)

  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYmXocejFRK9kdKwevwBIOcKId9TfDmRGxCibLQGWOQEmEQiabXUbpqcLg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYibAmziaDZK8U9ibsRiaMjpLicEXHAqMRRZ7khpOShgibwOhHzMKHCww0TxRQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYWxOyCTQ89NWiag533piaFSiaNRVGvdDLpYbajpWaibaoSZwd1rr0MGiabZg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYayqnKibvrxFIZ6WMtqWHmc0Y6mA6ycXEibAcdC1Sk9OPicib3Zbl4I5TLA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYVJiaP5Jvic2Sh8ObanFyQkUqtyLXVUrHwT9PdYWfHhWCc297trG08TqQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCY5v36HzbiaGv1gnKM3vCP8cvPoctJCicIQQ028lOGDqpYv40F1Qf6MDOw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYAJrBMcGLy9QVAvuZgaWCpQC1u8jDuTP1bjE8NF23kvmlmToaJqNH5A/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYia69aKw8Hm5WRz7UXZepC7iba0k9UXVeLzTNps6qyQB5wB6vEiaf9ZRWw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYyJibkRNxW8yMDbPiao83gbHkIddRH0o87RLUYht72Hnxxkwe3ZHKp7oA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCY6EudK924h4QETiaUo3WTdf4xicjfZ5sHlW011OxRXticsNEIaMQQ4gnyg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYPmTLN5SObcMaHmk2ibHZ44UXPvjszJuYnrbm2wBhTYvj4xF8NZCqOdQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYcpyLDEjg0lpyWLuib8LhIb1MQw1Miaw4W9oq9BhCrMAHnedVJuiaRkYOg/0?wx_fmt=png)

  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYEh2Hp2g5UvgzKQHXwHnUHibZ3iaL2XaAQTspPElmyG6OUjyb4CFqwGicg/0?wx_fmt=png)

* * *

**2.****设计方案性能总结**

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYvykTwAeSpsE1pkeGbUXDx6Za6Accox9sBTXvqQCdC6v2h8ibg4JmkQw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYMF6p5zotVibjO5PaHNWH5XM8sGIRVspqg0Y1mrd62UiaibqKI46ncZgsQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYslXIwldR0THUcIExpTgicEVvYHsliccDDoXvuUzx6OCCALUlqibHEqY2w/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCY6ZNicGJMzysrTpiahhBrsickwu5DACe9Lfe6gNtDtskkAMqZXgzdxVkWQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzJwGTuvXOevgLxIkhTKSCYCzJPsibIoick3jhlR0ydvicwDlP0iartt8p9LTymsiaYARibVqyvmQiaPfO0g/0?wx_fmt=png)

* * *

**5.结论**

本提出了用于混动汽车领域的基于凸极性的无位置传感器驱动的内置永磁电机的设计方法。论文用有限元仿真研究电机结构如何影响无位置传感器的安全运行区（SSOR），随后提出了无传感器集中绕组内置永磁电机的设计优化方法。论文最后优化了一个100Nm，10kW，18槽12极的IPM电机以满足目标混动汽车的性能需求，并用MATLAB/SIMULINK 动态仿真验证了电机的性能。

* * *

感谢黄海林的翻译分享！

索取原文，请在留言区留下邮箱。

欢迎推荐优秀文献、国外电机最新咨询！

  

推荐链接：

[【电机内参】宝马工程师--分段斜极结构对同步电机振动噪音的影响研究](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484239&idx=1&sn=c4ffa79bffbc57fca9509b756f2ea1af&chksm=ea646055dd13e943f6e54b5b21da51bb3ee7cb9aabdf48c8ace0c3623ea665fc0d37c0a5cc55&scene=21#wechat_redirect)  

[【控制内参】低频信号注入的永磁同步电机无位置传感器的控制算法](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484206&idx=1&sn=d1a43a51c2a0ab0155d33e307ede43cb&chksm=ea646034dd13e9223d0b697c60982cac686c784e0dc72f7ea9d3b9f9fb66d042134a2342aabe&scene=21#wechat_redirect)  

[【电机内参】一种高绕组系数&高槽满率的电机方案](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484134&idx=1&sn=51cd2bd08b953f7334eacd9fc5088095&chksm=ea6461fcdd13e8eaa5b4c809fcf727f979ef1cd647b29619e0becd0c829a1ce63e1bc1382706&scene=21#wechat_redirect)

[【电机前沿】一种新颖的应用于混合动力汽车的磁场调制型双机械端口电机](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484111&idx=1&sn=cd7bf61262c4f1c1c4c337d0b333ad07&chksm=ea6461d5dd13e8c362236f82426829a18610659c08623e0c1bd11bbf4d501a26dc127c2dd061&scene=21#wechat_redirect)  

[【电机内参】永磁体新工艺对电机设计的挑战——晶界扩散技术(Grain-Boundary-Diffused Magnets)](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484088&idx=1&sn=2d1e138f1c826d5db98bf9024fc622db&chksm=ea6461a2dd13e8b4b3c2f03853845c81aea251848b2fe6187e8aad3e80c00b20329c1cd88d2b&scene=21#wechat_redirect)  

[【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484076&idx=1&sn=8d1d033fd276b5e819fe99291e802745&chksm=ea6461b6dd13e8a09a3b7a93bfb2f1b42ef92b48c011fd4ab01fd357da4a849bd3a383a81df5&scene=21#wechat_redirect)  

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

  [玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=png)