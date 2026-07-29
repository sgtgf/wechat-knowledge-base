# H桥电路驱动有刷直流电机

原创 电机新视界 2024-04-20 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/a7mxjIyqHfmVPlIJT3pZQw](https://mp.weixin.qq.com/s/a7mxjIyqHfmVPlIJT3pZQw)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0vE2ZIG5VErUiaic5Uovdb28y7P5QYtqjXS963OUGN1gZticMCCPchusnOMBhEuCvwJ9JdO7pugDP1XA/640?wx_fmt=jpeg&from=appmsg)

  


来源：硬瞭

  

## 什么是H桥电路？

基本上有刷直流电机具有两个电源端子，并且通过在这两个端子上施加电压来驱动电机。两个端子具有以下四种连接组合（仅此四种）：

①两个端子都不与任何地方连接。（当一个连接而另一个未连接时，同样适用）  
②将直流电源的（+）连接至一个端子，（-）连接至另一端子。  
③将直流电源按照与②相反的极性连接至电机。  
④两个端子之间相连接。

这四种状态可以通过以下使用了四个开关的电路来实现。由于该电路的形状类似于字母“H”，因此称为“H桥电路”（也称为“全桥电路”）。

①中电源端子未连接到任何地方的状态，可以通过将SW1～SW4全部OFF来实现。

②中将直流电源的（+）连接至一个端子，（-）连接至另一端子，需要将SW1和SW4接通（ON），将SW2和SW3断开（OFF）。这样电机将按某个方向旋转。

③的接法与②相反。将SW1和SW4关断（OFF），将SW2和SW3接通（ON）。这样电机将按与②相反的方向旋转。

④是电源端子之间的连接。当将SW1和SW3关断（OFF）并且将SW2和SW4接通（ON）时，就处于端子之间相互连接的状态。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/QfOX6PoObkBicibdImUcdBfHumrJuwVictshDxAGMqcWHrBQNqic2p6P9d7lWibp3MUTZ109bZdXFvU1k2CSlfw14gw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

## 有刷直流电机 更改连接用的电路实际的H桥电路示例

在上图中，为了便于理解连接的组合方式而使用了开关，但是在实际的电子电路中，四个开关使用半导体功率晶体管。右图所示的配置就是实际的H桥电路。在该电路中，电源的（+）侧晶体管（Q1，Q3）使用的是P通道MOSFET，（-）侧晶体管（Q2，Q4）使用的是N通道MOSFET。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/QfOX6PoObkBicibdImUcdBfHumrJuwVictsuaDDVict89wvsBHlCXqwzLfhjodfljOYVF0SicbUpTUUO3OCauXUm2eA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

## 实际的驱动电路配置示例

要改变有刷直流电机的转速，就需要改变施加到有刷直流电机的电压。为此，在电源和有刷直流电机之间插入电压控制电路，以直接或间接控制施加到有刷直流电机的电压。有两种控制方法，一种是在（-）侧直接连接有刷直流电机，另一种是插入控制电路来同时控制（-）侧。实际的驱动电路由可以改变连接状态的H桥电路和电压控制电路组成。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/QfOX6PoObkBicibdImUcdBfHumrJuwVictsvtEqtYCrjIzUmdVdmILAQPNuicRLzJlADkNAz2RNuhN9AEdjo7micF0w/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

上面我们介绍了有刷直流电机驱动的H桥电路的原理。本文将介绍有刷直流电机驱动的H桥的实际控制（切换）。

## H桥电路：输出状态的切换

在上一篇文章中我提到过在向电机的两个端子施加电压时有四种连接方式：

 ①两个端子都不与任何地方连接。  
 ②将直流电源的（+）连接至一个端子，（-）连接至另一端子。  
 ③将直流电源按照与②相反的极性连接至电机。  
 ④两个端子之间相连接。

如果可以输入2位二进制值，则可以通过它们的组合来创建这四种状态。举一个简单的例子，如果有2个逻辑输入端子，则可以获得2\*2=4种组合。下面是内置H桥电路的有刷直流电机驱动器的示例，这里给出了大致的内部功能框图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkBicibdImUcdBfHumrJuwVictsuCMo1Dia4gV2OHoY8dG9trrkNVMnM3L9CUdibYsiatsKT0pEJCjBXTL7Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

用于切换H桥状态的逻辑电路是以IN1和IN2作为输入、由虚线围起来的部分。该逻辑电路的真值表如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkBicibdImUcdBfHumrJuwVictsIhIIibYAZeL5NkA9KU3ruWZAyiaBRdDFB8k3blZrDfQNHZIfkyzjOBhA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

可以看出相对于IN输入逻辑的VG状态。VG是Q1～Q4的各MOSFET的栅极电压状态。例如，Q1的VG为H，这表示施加了H电平的电压，而不是直接表示Q1的ON/OFF。

该H桥是Pch MOSFET（Q1，Q3）和Nch MOSFET的组合。高边侧是Pch，低边侧是Nch对（Q1和Q2，Q3和Q4），各漏极和源极都已连接并成为OUT1（Q1和Q2对）和OUT2（Q3和Q4对）的输出。

从框图中可以看出，Pch的Q1和Q3在栅极上带有活动状态的L符号，因此VG为L，处于导通（ON）状态。Q2和Q4为活动状态的H，因此Q2和Q4为H，并处于导通（ON）状态。仅从这点看，它与CMOS逆变器逻辑电路相同，但是栅极由IN1和IN2分别控制。

OUT对应创建四种所需状态。OPEN表示所有MOSFET均关断且处于高阻抗状态。L表示通过MOSFET连接到GND，H表示连接到电机电源VM。

尽管与H桥的控制逻辑没有直接关系，但功能模块中显示的电平转换（Level Shift）和同时导通防止功能是硬件控制所需功能的示例。

电平转换是一种可转换低电压逻辑电路的输出电压以适应高电压MOSFET驱动的电路。逻辑电路部分设计为在3.3V或2.5V的常规逻辑电平下运行，但H桥部分则在5V、12V、24V等高电压（电机的驱动电压）下运行。因此，由于不能直接用低电压逻辑输出电平来驱动而需要电平转换电路。

同时导通防止功能是用来防止在高边晶体管和低边晶体管ON/OFF切换时可能会发生的两边晶体管同时导通的功能。这是由逻辑切换时的微妙时间点引起的现象。经常被提到的是在同步整流开关电源案例中，在交叠（Overlap）导通的瞬间，会有被称为“直通（Shoot-through）电流”的电流从电源流向GND，存在损坏开关晶体管或IC的风险。

虽然谈了一点看似关系不大的内容，不过请抓住本文的重点：可以利用2位逻辑输入来通过H桥获得四种状态。

接下来，我们介绍几种使用H桥电路来驱动有刷直流电机的方法。

## H桥电路的有刷直流电机驱动：  
高边电压线性控制

在该有刷直流电机驱动的驱动器电路示例中，可以通过线性控制高边Pch MOSFET来更改OUT引脚的H电压，从而控制施加到电机的电压。OUT引脚的H电压由施加到Vref引脚的直流电压控制，理论上的电压与施加到Vref的电压相同。这就可以控制电机的转速/转矩。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkBicibdImUcdBfHumrJuwVictsAnibt0GYrkhnqEuUQuVJ5g3x94pVOg3aboCiaafgQjhwZsaEEUsZjCUg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

在该示例中，当高边MOSFET（Q1，Q3）通过H桥切换控制逻辑导通时，运算放大器会给高边MOSFET的栅极偏压，使MOSFET导通，并且MOSFET的漏极电压被反馈至运算放大器的同相输入。根据运算放大器反馈电路的原理，该电路执行反馈控制，以使反相输入和同相输入具有相同的电压。在该示例中，施加到Vref引脚的电压=运算放大器的反相引脚电压等于运算放大器同相引脚=MOSFET的漏极电压=OUT引脚的H电压。由于该反馈电路的增益为+1，因此Vref和OUT的电压比也为1:1。

可能对于反馈到该同相引脚的电路感觉有点不协调，但是由于Pch MOSFET为活动状态的L，因此会反馈运算放大器输出的反向电压。这与使用PNP晶体管作为升压器的反馈电路的思路相同。

有刷直流电机驱动的H桥控制电路的工作与“输出状态的切换”中所述的工作相同。

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

[强制执行电机能效！2023年工信部发布最新工业节能通知！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552223&idx=1&sn=9a79a63e6376dc92a45d3945ccfccbc4&chksm=cede4d1bf9a9c40d9fa969d4856721610e61d357988dde293f59cbc0994f971b7dc168c64b0c&scene=21#wechat_redirect)  

[又一“千亿级”来了！高效电机再上央视！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247549961&idx=1&sn=3138aaff5c66723c28a9499b551d3399&chksm=cede45cdf9a9ccdbd20ddd6eb429e4a1cf67bb758cb509a84cf1b292a9887047cfa38edcc451&scene=21#wechat_redirect)  

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

[一路走来，风雨兼程，江西这家企业有太多故事！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552832&idx=1&sn=0691f10025dc8233e2c704ede28ff691&chksm=cede4e84f9a9c79222cf4bb485f1f3e0eb9f33f37ceff89c3ef6bf2136aa0cc5176d46b97555&scene=21#wechat_redirect)

  

[三十年磨一剑！卧龙电气背后不为人知的秘密！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247553465&idx=1&sn=ce7240d5584ea18953b6e135546f0b7e&chksm=cede507df9a9d96b56d7b338b3f7006b29e5756c9c90bc5606002a402f4c3ffe5d991ac8ba3b&scene=21#wechat_redirect)


![](https://mmbiz.qpic.cn/mmbiz_gif/vibkgHlPVq0uibkIvkAHOPtHA9gym3XODEWrQGWXmjNHrmp8Mp3Mv8wdYjoiaNyL1EPibFpmHlcYK1m1wplSBia5vXg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)