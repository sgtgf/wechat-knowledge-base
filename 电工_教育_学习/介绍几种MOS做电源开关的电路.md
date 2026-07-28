# 介绍几种MOS做电源开关的电路

原创 硬件笔记本 2024-04-25 07:54 四川

> 原文地址: [https://mp.weixin.qq.com/s/9d6XVJWt1usLP8xKx9tjQw](https://mp.weixin.qq.com/s/9d6XVJWt1usLP8xKx9tjQw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

随着对器件的控制需求提升，越来越多的电源开关电路出现在设计中。这些设计的目的各有不同：有的需要快速开通与关断，有的需要低导通电阻+大电流，有的需要闲时0功耗。虽然应用场合不同，但做开关可是MOS的强项。

**下面来介绍几种产品设计中常用的MOS做电源开关的电路。**

**1、NMOS低侧电源开关**

【低侧驱动，最简单最实用，但不一定适用所有的电路，会对部分电路的工作有影响】

由于NMOS和PMOS在原理和生产工艺上存在差异，导致同价格的NMOS在开通速度、额定电流、导通内阻这些参数上均优于PMOS，所以设计中尽量优先选择NMOS。

下图为使用NMOS，最简单的开关电路。（低侧驱动）

CONTROL为控制信号，电平一般为3~12V。负载一端接电源正极，另一端接NMOS的D（漏极）。

CONTROL电平为高时，Vgs>NMOS的Vgs导通阀值，MOS导通，负载工作。

CONTROL电平为低时，Vgs=0，MOS关断，负载停机。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdD21aNrmnVocpzlvHiadbEo59YBUsjic6ueaqQ1AXSyzkXvNto1D93al5g/640?wx_fmt=png&from=appmsg)

**1.1、设计时注意事项**

**1.1.1、泄放电阻 R1**

上面这个电路中，通常都会在NMOS的G极、S极间，并联一个10K左右的电阻。这个电阻通常被叫做泄放电阻，用来泄放GS极间的电荷。加它的原因是因为MOS的GS极间的阻值非常高，通常为M欧以上，并且GS间还有结电容，这就导致GS一旦充电，就很难释放掉。如果没有这个泄放电阻，在G极通入高电平，负载会工作，而将G极上的控制信号拿开，由于结电容的存在，GS间的电压会维持在导通阀值以上很长一段时间，负载仍会继续工作。而加了泄放电阻，会加快泄放速度，使电路功能更加合理易用。

**1.1.2、Vgs电压范围 对导通速度、导通内阻的影响**

通常来讲，TO-220、TO-251AA、SOP-8、SO-8（DFN3x3 5x5）、TO-252、TO-263 这些封装较大的器件，其额定耐压、额定电流都比较大，Vgs的最大允许范围一般为± 20V。

因Vgs的驱动电压越高，MOS的导通电阻就越小，导通速度也越快，所以像电机控制一般多使用12V作为驱动电压。（见下图手册，Vgs=4.5V 和 10V 时，MOS导通内阻的对比）

SOT-23封装的MOS，其Vgs最大范围一般为± 12V。

**切莫使Vgs超出手册规定的范围，会使MOS损坏。**

下图为 IRLR7843 - NMOS 数据手册的部分内容。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdD9rAVsLydjgopOgbeFc8XwoV9kT1uvVQcDJia1Rzdl3p3Niap98FuB2OA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDy07ebBEQhoDjJfB4wR65k5K20sapLic1UrmYGeQB87WpuBXGQ6BfCicA/640?wx_fmt=png&from=appmsg)

**1.1.3、寄生结电容 | 驱动电流 | 栅极驱动器**

**1.1.3.1、寄生结电容 对开断速率的影响**

MOS的GS极间的寄生结电容大小，影响了开断速度。越小开断越快，响应越迅速。选型时，应尽量选择小的，可以有更快的开断速度，以降低开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDLfPMEnibkeuM7PWsTGsvclrxcnL11lDMgUQe2icxBhm7qicyxU02hIvYA/640?wx_fmt=png&from=appmsg)

**1.1.3.2、寄生结电容 和 驱动频率 对驱动电流的需求**

MOS的GS极内阻非常大，对外主要体现为容性，低频时对电流的需求不明显，而随着频率升高，电容充放电频率的加快，电容的容抗与频率成反比，容抗变小。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDZ3nZjk07gHXcJ2k5QQI4KtWjn5LW4Ng0XGF6zhUnNB0gS8LjHUZKHQ/640?wx_fmt=png&from=appmsg)

这时在输入信号的频率相对较高的条件下，驱动MOS就需要比以前大得多的驱动电流。大到一定程度，MCU端口能提供的几mA电流就显然不够用了，继续使用MCU端口直驱，一方面会使MCU过载，另一方面会对输出信号的波形造成衰减，严重时会影响NMOS的正常开通。

这种情况，常见于电机控制或者电源转换。控制信号通常为几十KHz~几M的PWM波形。需要使用专用的MOS栅极驱动IC。NMOS的低侧驱动IC很简单，内部大多为一个半桥。市面上使用更多的驱动IC为高侧+低侧栅极驱动IC，即为NMOS半桥栅极驱动，而单单低侧的栅极驱动由于较为简单，搞个NP对管就能实现相近的效果，即使芯片有很多选择，也并不常用。

**2、NMOS高侧电源开关（高侧驱动，稳定、性能好）**

【也叫高端驱动、高边驱动，因高端中文容易混淆，所以一般书面形式叫高边、高侧的会多一些】

NMOS做低侧开关，是用NMOS将元件的GND浮空，并通过开通GND开开关电路负载。

一般的电路这样用可能没什么问题，但有的则不行，例如需要低侧电流采样的电机驱动电路，可能导致工作异常。或者有电源完全断开的需求，NMOS低侧开关显然不适合。

NMOS的高侧栅极驱动，一般需要搭配额外的栅极驱动芯片，这类芯片大体有两种：

1、集成电荷泵的NMOS高侧驱动：一种是内部集成电荷泵的。可允许高侧NMOS的持续开通，即允许100%占空比输入。性能稳定，但栅极驱动器芯片的成本略高。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDSFTZb6HJg5GsPNFsQ4NMrnPxia6D9hKn3icl6ZVaYtAx3uIXx0SLIAgw/640?wx_fmt=png&from=appmsg)

2、电容浮栅自举：另一种是通过电容浮栅自举。需要输入信号为PWM，通常只允许99%占空比输入，以在空闲时间给自举电容充电。这种应用需要限制PWM信号的占空比，不能100%占空比输入，不能高侧持续导通。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdD1nc3LRrpaMExUO0K0k9esutn1ugK3PsicXMygwiazI4STsO8LzSpAcGw/640?wx_fmt=png&from=appmsg)

**电容浮栅自举电路原理**

电机控制和功率变换应用中，较多使用的是电容浮栅自举，其内部电路形式大多为 高侧+低侧栅极驱动IC，或者叫NMOS半桥栅极驱动IC。其内部集成死区控制器，以防止半桥上下管同时开通，造成短路MOS过流损坏，俗称炸管。常用型号如 IR2101、IR2104、IR2110、IR2130，市面上的大多数栅极驱动IC多以这几款IC为仿照蓝本。

下面简述下电容自举电路的原理，其是如何实现高压隔离和 电容自举充放电的。个人理解可能有偏颇，还望指正。这里以 IR2101 的手册为例。

请留意第二张的右上角：

0、图1右侧的TO与LOAD是直接连接的，且 HIN、LIN 的信号近似为差分（一般会额外插入些死区），所以右侧半桥输出的电平，可以近似的看为 0 ~ 600V 的数字信号，输出不是600V就是0V。这是大前提，这里先不考虑外部负载对上升、下降沿过程的影响，近似看做纯数字电路来方便理解。

1、当输入信号 HIN 为0时，图2右上角的 高侧MOS关断，低侧MOS导通。外部高侧NMOS的GS通过内部的低侧MOS来迅速放电，使外部高侧MOS关断。于此同时，外部低侧MOS导通，半桥输出电平为0V，可近似看作自举电容的低边直接接到了GND上，构成了自举电容的充电回路。这时自举电容会在二极管的辅助下，择机充电。

2、当输入信号 HIN 为1时，图2右上角的 高侧MOS导通，低侧MOS关断。自举电容通过 Vb -> HO 路径向 外部的高侧NMOS放电，于是外部的高侧NMOS导通，自举电容逐渐放电电压缓慢变低。因MOS的GS极间内阻非常大，外部的高侧NMOS可以保持导通很长时间。【这步相当于将冲好电的自举电容，突然架空GND，再瞬间转移到到 Vs 和 HO 上，使外部NMOS的GS间电位与自举电容保持一致。整个过程与电荷泵倍压的原理几乎是一样的，只不过这里的充放电频率与HIN、LIN的频率保持一致，而电荷泵倍压一般使用内置震荡源】

因 HIN、LIN 输入信号为PWM，且限制最大占空比为99%，上面过程随PWM周期重复。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDGqa2UAd8SQOyVqnM4AobOuONBf5RZ4hxUnkNELEtymibrFSkRZEYpLA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDdcbEulzQjXPYMcahtZn2v3qOPqg1kDyiaicOGny8UaFt2MgY86uLWRxg/640?wx_fmt=png&from=appmsg)

NMOS电荷泵高侧驱动IC的一些型号

在IC厂商官网的产品选型页，不是很容易直接搜到 MOS高侧驱动。一般被叫做 热插拔控制器，额外集成了高边差分放大器，对浪涌电流进行保护。

TI的 高侧开关产品列表，其MOS都是内部集成的，不能外接NMOS。好不容易能在 电子保险丝和热插拔控制器 中找到个 LM5060。单纯的NMOS高侧驱动型号很少，大多都是集成电流保护的 热插拔控制器。

ADI 有专门的 热插拔控制器 和 高侧栅极驱动器 分类，能外接NMOS的型号还是非常多的。如LTC4380、ADM4210、LTC4440、LTC7000。

随着电机控制对FOC需求的激增，同时也促使了MOS栅极驱动器的集成度提高，诸如DRV8301、DRV8305 这些集成了三相半桥栅极驱动、DCDC降压、高侧电荷泵涓流充电、多路增益可编程的差分放大器、可调死区控制器 的驱动器，被越来越多的应用到产品设计 上。

**3、PMOS高侧电源开关（高侧驱动，稳定、简单）**

NMOS做高侧开关的性能比较好，但因为要增加额外的栅极驱动IC，会使电路变得复杂，成本也会随之提升。除开电机控制和电源转换的场合，一般对开通速度、导通内阻、过电流能力 无细致需求的话，PMOS无疑是做开关的较好选择。

近年来随着MOS工艺的升级，PMOS的参数还是较NMOS差，但导通内阻<10m欧的PMOS型号越来越多了。PMOS做高侧开关的最大优势，是不用电荷泵驱动，简单方便，还降低成本。

下图是PMOS做高侧开关的电路，CONTROL为控制信号，电平范围为0~VCC。

CONTROL为0V时，Vgs<导通阀值，PMOS开通，负载工作。

CONTROL为VCC时，Vgs>导通阀值，PMOS关断，负载停机。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdD734ZDGjQV61uzq16JdgmX53l9m2rYO17FMMVaNQW4DysTqZ0lxKaxA/640?wx_fmt=png&from=appmsg)

注意上图这里的输入信号 CONTROL，其低电平要保证Vgs能使PMOS开通；又要限制Vgs不能小于手册上的最小允许电压，以避免PMOS损坏。

但MCU或其他控制器的电平一般为固定的3.3V / 5V，而电路的VCC却要在一个很大的范围内变动。这就导致如果使用I/O口直接驱动的话，PMOS不能关断，并且当VCC较大时，还会损坏MCU的I/O口。

所以PMOS做高侧开关时，一般搭配一个小电流的NMOS或者NPN管，来做驱动电平转换。

如下图，NMOS - Q3负责做电平转换，来驱动Q2 - PMOS的开关。

当 CONTROL 为0时，Q3关断，Q2的G极电平被拉高为VCC，Q2 - PMOS关断，负载停机。

当CONTROL 为1，Q3开通，Q2的G极电平被拉低为0，Q2 Vgs<导通阀值，PMOS开通，负载工作。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDMVZNlA2KmAGGciau4akVAQ5jS4ST359MbZhUDW3fNfUCyClMHYr1HUw/640?wx_fmt=png&from=appmsg)

随之而来新的问题：如果VCC电压很高，在PMOS开通时，导致Vgs超出了手册中的Vgs允许范围，也会造成PMOS的损坏。

为了避免损坏PMOS的栅极，在上面的电路中，添加一个稳压管和电阻，来达到钳位的作用，使Vgs最小不低于-12V，以保护Q2的栅极。（见下图）

特别注意：VCC电压较高时，需要重新计算各电阻的热功耗，来确定合适的封装，或者更改阻值。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia57pC281pEBotqichwgVsdDzCKmtP4MzQTusnRpFlIvticIBJI81pac6bceKLt3ezp0Rgl2W5KEjWw/640?wx_fmt=png&from=appmsg)

PMOS做低侧开关的实例实在是少之又少，并且PMOS做低侧开关确实没什么好处，电路复杂且参数较差，不如直接用NMOS，在此不做介绍。

版权声明：本文为CSDN博主「Mark\_md」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/Mark\_md/article/details/118391425

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。