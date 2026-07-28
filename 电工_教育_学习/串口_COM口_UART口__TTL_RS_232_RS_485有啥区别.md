# 串口、COM口、UART口, TTL、RS-232、RS-485有啥区别

原创 硬件笔记本 2023-09-08 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/v20QPbQs\_7R\_QwzH8aZnRQ](https://mp.weixin.qq.com/s/v20QPbQs_7R_QwzH8aZnRQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

调试时总是会遇到各种各样的接口，各种各样的转换板，似懂非懂的感觉很不爽!

  

**首先，串口、UART口、COM口、USB口是指的物理接口形式(硬件)。而TTL、RS-232、RS-485是指的电平标准(电信号)。**

**串口：**串口是一个泛称，UART，TTL，RS232，RS485都遵循类似的通信时序协议，因此都被通称为串口。

  

**UART接口：**通用异步收发器(Universal Asynchronous Receiver/Transmitter)，UART是串口收发的逻辑电路，这部分可以独立成芯片，也可以作为模块嵌入到其他芯片里，单片机、SOC、PC里都会有UART模块。

  

**COM口：**特指台式计算机或一些电子设备上的D-SUB外形(一种连接器结构，VGA接口的连接器也是D-SUB)的串行通信口，应用了串口通信时序和RS232的逻辑电平。

  

**USB口：**通用串行总线，和串口完全是两个概念。虽然也是串行方式通信，但由于USB的通信时序和信号电平都和串口完全不同，因此和串口没有任何关系。USB是高速的通信接口，用于PC连接各种外设，U盘、键鼠、移动硬盘、当然也包括“USB转串口”的模块。(USB转串口模块，就是USB接口的UART模块)

  

 **TTL，RS232，RS485都是一种逻辑电平的表示方式**

  

**TTL：**TTL指双极型三极管逻辑电路，市面上很多“USB转TTL”模块，实际上是“USB转TTL电平的串口”模块。这种信号0对应0V，1对应3.3V或者5V。与单片机、SOC的IO电平兼容。不过实际也不一定是TTL电平，因为现在大部分数字逻辑都是CMOS工艺做的，只是沿用了TTL的说法。我们进行串口通信的时候从单片机直接出来的基本是都是 TTL 电平。 

  

**TTL电平：**全双工(逻辑1: 2.4V--5V 逻辑0: 0V--0.5V)

  

1、硬件框图如下，TTL用于两个MCU间通信

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaBjicBzw3MMiac93QDdVNDwYApCG4FPAQuhYAHBk53MXGCwgOVmiaPFj6A/640?wx_fmt=jpeg)

  

2、‘0’和‘1’表示

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaIJlNksuyNQQyZKrageXL0zg9aX7z5eICHLRM4rthqWMOU9ibAmu9KuA/640?wx_fmt=png)

**RS232：**是电子工业协会(Electronic Industries Association，EIA) 制定的异步传输标准接口，同时对应着电平标准和通信协议(时序)，其电平标准：+3V～+15V对应0，-3V～-15V对应1。rs232 的逻辑电平和TTL 不一样但是协议一样。

  

**RS-232电平：**全双工(逻辑1：-15V--5V 逻辑0：+3V--+15V)

  

1、硬件框图如下，TTL用于MCU与PC机之间通信

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaofBXzyTB8HNSZNTORdvB52T09JHMFsudR5Fjib7X28zOMFg1VsjmCzA/640?wx_fmt=png)

  

2、‘0’和‘1’表示

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaoqUzQruSrQiaLp8gypq6sxWb91ZZkW2eZF9WzP3p6NRrC67YBz5Ellw/640?wx_fmt=png)

**RS485：**RS485是一种串口接口标准，为了长距离传输采用差分方式传输，传输的是差分信号，抗干扰能力比RS232强很多。两线压差为-(2~6)V表示0，两线压差为+(2~6)V表示1

  

**RS-485：**半双工、(逻辑1：+2V--+6V 逻辑0：-6V---2V)这里的电平指AB 两线间的电压差。

  

1、硬件框图如下

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaKurKOThMtQE0rDqQuaWicG1QjUxAGiad60g1iaNtG9I60cJtjyJa5Ylcg/640?wx_fmt=jpeg)

2、‘0’和‘1’表示

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaDmnibOf7PAic4dhHU3gGoJic9JwI3AdekDZI9GgxBzAryIOp0sH1qzeLQ/640?wx_fmt=png)

COM口即串行通讯端口，简称串口。这里区别于USB的“通用串行总线”和硬盘的“SATA”。

  

一般我们见到的是两种物理标准。D型9针插头，和 4针杜邦头两种。

  

这是常见的4针串口，在电路板上常见，经常上边还带有杜邦插针。还有时候有第五根针，3.3V电源端。

  

由于是预留在电路板上的，协议可以有很多种，要看具体设备。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOianPdibo6GXMZt1AVicl3v76ZJQy02dOz0SW6ibApib7XG244JVickVibctC8w/640?wx_fmt=png)

嵌入式里面说的串口，一般是指UART口，但是我们经常搞不清楚它和COM口的区别, 以及RS232, TTL等关系, 实际上UART,COM指的物理接口形式(硬件), 而TTL、RS-232是指的电平标准(电信号). 

  

UART有4个pin(VCC, GND, RX, TX), 用的TTL电平, 低电平为0(0V)，高电平为1(3.3V或以上)。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOia8Du0NcvQT04HS55CiaxOPWKDSFTZyBPtYGMVWHDdDbAXPL4xrocDKjg/640?wx_fmt=png)

下面这个就是D型9针串口(通俗说法)。在台式电脑后边都可以看到。记住，这种接口的协议只有两种：RS-232和RS-485。不会是TTL电平的(除非特殊应用)。9针串口的定义可以参考这里：

http://wenku.baidu.com/view/5c170c6925c52cc58bd6be6e.html

  

我们一般只接出RXD TXD两针，外加GND。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiao28mf0Tlnq2lV8XHHSTlVHMlu5xksNIsEOSSsuQiaiauLkj5PZ3K3wIg/640?wx_fmt=jpeg)

  

下图是个USB转TTL串口的小板，可以用USB扩展出一个串口。芯片为PL2303HX。网上经常混淆各种串口，但是这个确实是可以给STC单片机下载程序的。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaZ0ZyqNIG4XVYoVFyxezJFASZeUiaDTzSsTMt3thokjr9XRpvgA2qDhg/640?wx_fmt=jpeg)

  

这是另一种，CP2102芯片的，也是USB转TTL串口。据说比PL2303的好，实际使用中没感觉出来。这个小板就多了+3.3V电源端，以适应不同的目标电路。下图为USB转RS-232串口：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiavL6CFSmdUrbTicQoI1Wmo1Gm7hCkiboPwpjqAV5gQ6KNSkTjPmRBFtXg/640?wx_fmt=jpeg)

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群