# 为什么在芯片电源入口VCC串一个小电阻？

原创 蜗牛 硬件笔记本 2020-06-20 10:55 undefined

> 原文地址: [https://mp.weixin.qq.com/s/H2S7M4kegDlW3I6kZhdqUQ](https://mp.weixin.qq.com/s/H2S7M4kegDlW3I6kZhdqUQ)

我们经常会看到，在一些芯片的电源入口处不是直接接入直流电源，而是在VCC入口串联一个几十欧姆的小电阻，这个电阻有什么作用呢？

  

示意图如下

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIcMj9GwEkok4u7vG31rxGSBulwicynygg2Q7uejLbXj6MplMuIjOwMTeibCUE9iaW5iaia1Uw4hvO4q9w/640?wx_fmt=jpeg)

具体分析:

1.假设没有这个电阻R1，当芯片击穿后，芯片内部的VCC引脚跟GND短路，VCC引脚又直接跟电源15V连接，15V就会被直接拉到地，造成电源的损坏；

  

2.接上电阻R1，当芯片被击穿后，15V电压就不会直接被拉到地，所以这个电阻的作用是防止芯片击穿后电源短路，起到保护电源的作用；

  

3.当15V电压突然波动比较大，瞬间产生一个大的脉冲电压时，由于电阻R1的存在，它可以起到分压作用，减小输入到芯片的电压，起到保护芯片的作用。

  

注意:电阻R1串接在15V和芯片之间，本身会产生一定的压降，所以这个电阻不能太大，一般取值在几十欧姆。