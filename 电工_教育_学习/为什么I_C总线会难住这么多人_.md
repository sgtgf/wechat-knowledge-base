# 为什么I²C总线会难住这么多人？

原创 硬件笔记本 2024-01-30 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/0mIghEjP1XnWlswHCd1uvQ](https://mp.weixin.qq.com/s/0mIghEjP1XnWlswHCd1uvQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

编排 | strongerHuang

微信公众号 | 嵌入式专栏

I²C总线在嵌入式系统中很常见，但最近在一个群（可能是初学者群）交流的信息，让我比较吃惊，很多人连I²C总线基本的知识都不清楚。今天就来给大家讲讲I²C总线的时序。

  

很多电子工程师都应该从 EEPROM 通信了解到的I²C总线，其实，I²C总线远不止于 EEPROM 存储器，它也有类似485、SPI等应用场景。

  

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB02eCiafDOLKm7Flo5DCCsjzJTsicKCNTN92pgguyTia2DvzIuZxm3lULLg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

EEPROM存储器系统架构图

  

**位传输**

I2C总线是由飞利浦(Philips)公司开发的一种双向二线制同步串行总线，实现有效的IC间的控制，它只需要两根线(SDA和SCL)即可在连接于总线上的器件之间传送信息。

  

I2C总线在传输数据都是按照bit来传送。SCL为时钟线，SDA为数据线；在SCL时钟线为高电平时，SDA数据线上的电平不允许被修改，SCL时钟线为低电平时，SDA数据线上的电平可为高/低。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0iaN9ict9Hzic7qia8Y7BkLOuln5LapVKg3ibZRia2Du8E1xNjEJyMyynTbibA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

I2C总线的位传输

  

**起始条件：**SCL为高电平时，SDA由高电平向低电平切换；表示开始传送数据。

  

**停止条件：**SCL为高电平时，SDA由低电平向高电平跳变；表示结束传送数据。

  

**空闲条件：**I2C总线的SDA和SCL两条信号线同时处于高电平时；表示空闲状态。

  

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0HuiaZscCtOZJVUQBAQcXS9oDIPJMKf1R0PUPTPt3RV8eBCl1CPUe64A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

‍起始和停止条件

‍

**数据传输**

  

**字节传输**  

发送数据时，由主机先发送一个起始信号，再将SDA信号切换为输出模式，然后将8位数据依次由高到低发送出去；

  

发送完成后，主机将SDA信号切换为输入模式，等待丛机回应ACK或NAK；再发下一笔数据

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0QqEap6hb3g7NRKC6nAFKpjMA4y3l5Yic6MEwrcX343Rib1EIpic8tRPng/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

I2C总线数据传输

  

**丛机地址**

在I2C总线系统中，每个设备都有它的固定地址，一般由芯片的A0,A1和A2决定。丛机地址字节由七位地址位(D7-D1位)和一位方向位(为D0位)组成。

  

器件地址的D7-D4一般都是被厂家固定了为1111，余下的D3，D2和D1连接到芯片的A2，A1和A0决定；D0为0x00表示写，D0为0x01表示读。大家看例程都是些0xA0和0xA1就是这个原因。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0rtniamOBuiciaQPTFrfL9zow55OLr9PcI0TmbSoqOTkW2DXeRM3IwQ5rw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

EEPROM的器件地址

#   

  

**读写过程**

**1.写数据过程**

1.主机发送I2C总线停止信号，防止总线忙写数据失败

2.主机发送I2C总线复位信号，确保写数据之前总线处于空闲状态

3.主机发送I2C总线开始信号，启动一次数据的写入

4.主机发送I2C丛机地址和写模式(W/R=0)信号，并且等待一个丛机的应答信号

5.主机接收到ACK的应答信号后，开始多个字节的写入，每写完一个字节需要等待一个丛机的应答信号

6.主机接收到ACK的应答信号后，发送2IC总线停止信号，确保总线处于空闲状态

  

**2.读数据过程**

1.主机发送I2C总线停止信号，防止总线忙写数据失败

2.主机发送I2C总线复位信号，确保读数据之前总线处于空闲状态

3.主机发送I2C总线开始信号，启动一次数据读取

4.主机发送I2C丛机地址和读模式(W/R=1)信号，并且等待一个丛机的应答信号

5.主机接收到ACK的应答信号后，开始多个字节的读取，每读完一个字节需要给丛机发送一个ACK应答信号

6.主机接收到ACK的应答信号后，发送I2C总线停止信号，确保总线处于空闲状态

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0yqmTibiajXSpibx6GnH2UZqZiatDgnLtOwEIJXjicLeNltX5FrCGLn6kmDQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

主机读/写数据过程

  

**结语**

I2C总线在嵌入式应用中非常广泛，基本上所有的电力电子设备都会用到这个总线；

  

笔者根据自身多年的工作经验，记录下了我对它的理解，如果有写的不对，希望大家能多多指出，今天的I2C总线就先写到这里，希望对大家有帮助。

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