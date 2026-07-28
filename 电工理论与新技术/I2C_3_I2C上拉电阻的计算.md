# I2C-3：I2C上拉电阻的计算


> 原文地址: [https://mp.weixin.qq.com/s/UWcAq29sds\_k7BaoJjLqoQ](https://mp.weixin.qq.com/s/UWcAq29sds_k7BaoJjLqoQ)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTYlRn8A4yfA6zO8bPNS040IP2rQncxwzw2E9fuRvvLnCbfHlXxFgfNS4d7rhBmSDJkbFoCALticaw/640?wx_fmt=png)

**_★★★_****_I2C_****_\-3-----I2C上拉电阻的计算_****_★★★_**

引言：I2C通信标准是当今电子系统中最广泛使用的芯片间通信标准。这是一种开放漏极/开放集电极通信标准，意味着可以连接具有不同电压供电轨的集成电路进行通信。需要将上拉电阻器从I2C线路连接到电源。当开路漏极接口未将线路驱动为低电平时，上拉电阻器将线路拉高。上拉电阻器的值是I2C系统的重要设计考虑因素，因为不正确的值会导致信号丢失。在本文中，展示了用于上拉电阻计算的简单方程，系统设计者可以使用这些方程为其设计进行快速计算。

_€1.上拉电阻的计算_

强大的上拉（小电阻）可防止IC上的I2C引脚驱动电压过低。可由IC的输入缓冲器读取为有效逻辑低的VOL电平确定最小上拉电阻RP（min）。RP（min）是VCC、VOL（max）和IOL的函数：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpwRTfmQJzNKsKoo6cNYEbjsLZYk75UqE8nGic8YbPuvIhJ9xVfPJDg8Q/640?wx_fmt=png)

由于I2C标准上升时间规格，最大上拉电阻受到总线电容Cbus的限制。如果上拉电阻值过高，I2C线在被拉低之前可能不会上升到逻辑高。从时间t=0开始，RC电路对振幅VCC的电压阶跃的响应由时间常数RC表征。电压波形可以写成：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpV2E9h2DmeUN7W3fiaJzusicdy9b0dglMRHnRs82UsWOCicC76I3GjIDrg/640?wx_fmt=png)

那么对于VIH=0.7×VDD：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpDxNAuFhNkY7diaokk9jjYcBCgZ5JDhibb1ib1e3xva9hQyQM7x3a6ILaA/640?wx_fmt=png)

那么对于VIL=0.3×VDD：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpJQy5Gz5pHkuJtrFJlGwSZ2umUvib1PSsG44wJj8571zW0eFQeIQNZAA/640?wx_fmt=png)

I2C总线的上升时间可以写成：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpMET87d6YLL0S5Z6ib6Y1PEf51HukPaTORE1cvJH6lGlavya01zIPnnA/640?wx_fmt=png)

最大上拉阻力是最大上升时间（tr）的函数：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpYpYSxZQiae6NnTUhicb6OaFB50gIgkC1wnUqk3p6aqFtDUQFxkiaXkqUA/640?wx_fmt=png)

下_**表3-1**_是I2C的规范参数：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSyqQ2pIzic7ibCcrQiaLony3LBe51iaicYsQoqYaKsvToZGG27QzoLpleiabu5IKEdLf1bqoL5t0MTYq4A/640?wx_fmt=png)

**_表3-1：规范参数（MAX）_**  

RP（min）作为VCC的函数绘制在**_图3-1_**中。对于标准模式和快速模式I2C，RP（max）被绘制为Cbus的函数（**_图3-2_**）。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpD4BlYkzbd4ro3riafNcibbtByRsa5GXVxNiclTveppTrguSQsxibTYhqDw/640?wx_fmt=png)

**_图3-1：最小上拉电阻RP（min）与上拉参考电压VCC关系线_**

其中当VCC≤2V，VOL=0.2×VCC，IOL=2mA ，当VCC＞2V，VOL=0.4V，IOL=3mA 。

对于标准模式和快速模式I2C，RP（max）被绘制为Cbus的函数（**_图3-2_**）:

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpEFkU167DenyNlMtGdWJFSqhibCTFOZ3LXb9tYXH9Yl5xUpk2hibB2NyA/640?wx_fmt=png)

**_图3-2：最大上拉电阻RP（max）与母线电容Cb_**

_€2.速度与功率的平衡_

一旦选择了上拉电阻器的最小值和最大值，就可以基于速度和功率预算之间的权衡来决定电阻器的值。较小的电阻器将由于较小的RC延迟而提供较高的速度，而较大的电阻器将提供较低的功耗。而Cbus的值主要包括从器件的收发缓冲器寄生电容，走线长度的寄生电容，前者可以查阅Datasheet，后者的计算方式我们在另外的系列中会提到。

_€3.计算实例_

对于具有以下参数的快速模式I2C通信，计算上拉电阻值，其中Cb=200 pF，VCC=3.3 V

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpCyic23hYgXQjRDqFjAXCz8ZLEicOTUibVQFHZYib0ZJbtV23rcdW1Iwaww/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSHLL207o4R3Ttqv1ItmtFpWfCkYxOtyNhzH8YnSibvhNUunJQicC7IdRxFwQXUdFlfQiciaqBTWPrToA/640?wx_fmt=png)

因此，我们可以选择966.667Ω和1.77KΩ之间的任何可用电阻值，可以基于功耗和速度的权衡来选择上拉电阻器的值。