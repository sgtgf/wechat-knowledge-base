# BUCK电路是怎么降压的

原创 蜗牛 硬件笔记本 2021-01-06 18:53 undefined

> 原文地址: [https://mp.weixin.qq.com/s/VRw93XbOTPqgwyDJOb6u9Q](https://mp.weixin.qq.com/s/VRw93XbOTPqgwyDJOb6u9Q)

如图为BUCK降压基本电路

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tI6Axph3agSjlN683FZ4uKQAYWLM6VfZOyYY91xHX5fLvf5F4MQXwzNcP28VvhXQbvzyDpDia4poyg/640?wx_fmt=jpeg)

  

Q1开通时，由于二极管反向截止，所以电流直接经过电感流到负载。电感电压的方向为左正右负。如下图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tI6Axph3agSjlN683FZ4uKQ9qMDZmoOHm1PWDbkWdhoG94JCPzG3ChS7CflwjsFpLvRfY2rNticGxA/640?wx_fmt=jpeg)

  

此时，电感两端电压为

VL=L\*（△i/△ton）=（Vin - Vout）

其中，△ton为Q1开通时间。

  

当Q1断开时，此时二极管为电感续流提供回路。由于电感电流不能突变，电感电流继续沿着原来的方向，电流路径为L+→C1（R1)→D1→L1-，电压方向为右正左负。如下图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tI6Axph3agSjlN683FZ4uKQibDMjPqds4yuBmaia6icm9tRdoaXf1ibCLbI1zjbAqPdJq384Zy0rqkZ5w/640?wx_fmt=jpeg)

此时电感两端的电压等于负载电压，

L\*（△i/△toff）= -Vout……②

其中，△toff为Q1断开时间，负号表示电压方向与原方向相反。

  

由于稳态时电感上的平均电压为零（如果不为零，那么电感上的电压会一直下降或一直上升）

  

所以Von\*Ton+Voff\*Toff=0

即（Vin - Vout）\*Ton+（-Vout）\*Toff=0

化简为Vout={Ton/（Ton+Toff）}\*Vin

            Vout=D\*Vin

其中D为占空比。

以上是在电感电流连续的情况下计算的。

  

当电感电流不连续时，在Toff期间会有电感电流为零的现象，相当于分母变大，即占空比变大，所以输出电压相比电感电流连续时变大。

  

总结:BUCK电路的输出电压主要由占空比来决定的，占空比越大，输出电压越大，占空比越小，输出电压越小。