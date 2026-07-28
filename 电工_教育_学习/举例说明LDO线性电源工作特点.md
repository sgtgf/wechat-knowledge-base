# 举例说明LDO线性电源工作特点

原创 蜗牛 硬件笔记本 2020-03-23 08:00 undefined

> 原文地址: [https://mp.weixin.qq.com/s/1DNliK4Tm9GTW2UHHsdotw](https://mp.weixin.qq.com/s/1DNliK4Tm9GTW2UHHsdotw)

如下图，三极管搭建的20V转15V线性电源

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKUsvTUtQd1PAoOSotTrI4633ppb4SygqznbJZjicCJia7cKibvO1t93bCxmBTClslnwsW1X2xMHNcMg/640?wx_fmt=jpeg)

R1的作用是为稳压管提供＞2mA的导通电流，将基极电压稳定在15.7V。

C1的作用是保证基极电压更加稳定。

  

此电路输入20V，输出15V，三极管本身承受5V压降。通过降压的方式将部分能量消耗在自己身上，并以热能的方式散发出来，降低了使用效率。

线性电源不管负载是否需要能量，只要通电就一直向负载传送能量。若断开负载，能量还在继续输送造成浪费，这部分就叫损耗。

LDO线性电源优缺点

优点：线性电源技术成熟，制作成本低，可以达到很高的稳定度，纹波小，自身的干扰和噪声都比较小。

缺点：效率低，发热严重。

适用场合：只在小功率场合适用，大功率一般选择开关电源。

小伙伴们可能都用过稳压三端，假如输入-20V，但输出+15V，这个电路该怎么搭建呢？

如下图，以2脚-20V为参考电平，1脚接地，相当于输入+20V，输出便可得到+15V电压。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKUsvTUtQd1PAoOSotTrI466Tx9UnxLLoDOGb3zKZo1Ye0D1iadLStX47MV6LOpXOTskToqALM9z9g/640?wx_fmt=jpeg)