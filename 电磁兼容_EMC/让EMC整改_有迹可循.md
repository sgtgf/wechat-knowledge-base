# 让EMC整改，有迹可循

原创 硬件笔记本 2023-04-27 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/G5w-izbDj-8K-u-vjrPDmw](https://mp.weixin.qq.com/s/G5w-izbDj-8K-u-vjrPDmw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

EMC是一个棘手的问题，下面这个文章一定值得你看，从源头解决问题才是真正的解决问题。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHYVGPTZXic9o7MeicEe1TASH667wYwiasKC1gyAMpXFmy5Zou4l4I6MoybiadMsjhPCYiaYe8SVqNokA/640?wx_fmt=png)

首先看定义，定义主要按照问题性质，分为电源、时钟CLK问题、地不平衡问题。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHYVGPTZXic9o7MeicEe1TASicIiaTicc1hXCeQKiaEtfC55Mu6sAHAlI1SzFyVyvxUHL1D79MyeZ72VKg/640?wx_fmt=png)

再看原因分析：

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLWNicicbMlfB7ksFd3nS1y6icstJWsFddZ2lib7icXjdD2qgYiaJB6lKCh4uw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

针对三种问题，小编都有举例分析。

**先看电源问题：**

1、排查手段

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLZqST2gpRZAol0jn3cvOJFSicNkiayfsxJ7F7ibfW0aq4wr9NRDGz9Q6icQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

2、问题分析

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLT5U5u3O9ibsIt8K6lIVjluamZMPvR5r5rassL3HRS2uf5sHLwwNN5sg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

一般电源问题为DC-DC电路器件（DC-DC芯片、电感、二极管）选型问题：

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLBslcJz4giaibicb8g2yglVp2WpXjMe1AjqLia4ITRFU048v5YqNY8krKbg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

一般电源问题为DC-DC PCB部分设计不合理问题：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHYVGPTZXic9o7MeicEe1TASYRAapNuYTKFYcqdibjmxUNcCUYgBjVqb3FWJAib3dHaolONeKCcAZA4A/640?wx_fmt=png)

3、根源

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswL0MGzXd71rhZdictH8TeY8w9oelp63w66ELE7YElAf516FbCMQNzhdvQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**再看时钟问题：**

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLrQ3zdhnKgN1FKvwMGV2KOcC9caDDxNicjkXSfPd3RiaicgbicHicK6DP6JA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

解决思路中的传统方案传统手段：

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLiahTu3AuVIRqqrFgAVgz8qfZA46waOvUPj4YXOfeBC1KG2T9h7ib9wZw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

硬件扩频：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHYVGPTZXic9o7MeicEe1TAS0GVdSlgDYOQicicsfBiaTooG0dxTkpHVibg47w0m1VlOuicosQiaps4rpDgA/640?wx_fmt=png)

解决思路中的更换方案：

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswL2M1ACaHDUEkKVyFHEnPMoibvIrYYzmNfo7DxvwjmxJsZ6hAegWOFQNA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

地不平衡问题:

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswL4Gjb1fluOCPhykABvwvGuf2c6u6tItic7QjntUwRIarvA5MibsKpW0eg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

最后，分析思路：

![](https://mmbiz.qpic.cn/mmbiz_png/Ou3a1efJ5JJldbszTXTtJBGL2xaMeswLiaiazTdAkdeVIPy2GhPd0NUbibiangpROTvJP5GCTdbdzUe89jCwnCaTPA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**EMC三大规律**

**规律一：EMC费效比关系规律，EMC问题越早考虑、越早解决，费用越小、效果越好。**

在新产品研发阶段就进行EMC设计，比等到产品EMC测试不合格再进行改进，费用可以大大的节省，效率可以大大提高；反之，效率就会大大降低，费用就会大大增加。

经验告诉我们，在功能设计的同时进行EMC设计，到样板、样机完成则通过EMC测试，是最省时间和最有经济效益的。

相反，产品研发阶段不考虑EMC，投产以后发现EMC不合格才进行改进，非但技术上带来很大难度、而且返工必然带来费用和时间的大大浪费，甚至由于涉及到结构设计、PCB设计的缺陷，无法实施改进措施，导致产品不能上市。

  

**规律二：高频电流环路面积S越大，EMI辐射越严重。**

高频信号电流流经电感最小的路径。当频率较高时，一般走线电抗大于电阻，连线对高频信号就是电感，串联电感引起辐射。电磁辐射大多是EUT被测设备上的高频电流环路产生的，最恶劣的情况就是开路之天线形式。对应处理方法就是减少、减短连线，减小高频电流回路面积，尽量消除任何非正常工作需要的天线，如不连续的布线或有天线效应之元器件过长的插脚。

减少辐射骚扰或提高射频辐射抗干扰能力的最重要任务之一，就是想方设法减小高频电流环路面积S。

**规律三：环路电流频率越高，引起的EMI辐射越严重，电磁辐射场强随电流频率的平方成正比增大。**

减少辐射骚扰或提高射频辐射抗干扰能力的最重要途径之二，就是想方设法减小骚扰源高频电流频率，即减小骚扰电磁波的频率。

  

本文以下内容，就是利用以上三个规律，倡导趁早考虑EMC问题，介绍EMC设计和EMC问题改进。

改进EMC问题，如同诊治疾病。如果产品没有通过EMC测试，我们从测量结果中，只能知道哪些频率点“超标”了，而这些频率的电磁干扰是从哪里出来的，往往是工程师门最不容易发现、最难解决的问题。产品EMC问题，说难亦难，说易亦易。

改进EMC问题，首先，根据EMI产生的途径和机理，也就是EMC问题产生的要素，针对EUT（被测试样品）的电路原理，先作一些判断，比如IT类设备和AV音视频类设备引起EMC问题的原因或者内部骚扰源是什么，先进行推断，再结合测试项目测试图透过现象看本质，分析超差原因，把骚扰源搞清楚，把骚扰途径摸透彻，以便有的放矢。

分析超差原因，可使用高频示波器或频谱分析仪加上 场探头验证分析结果，从频域到时域，再从频域到时域，分析、寻找产生EMC问题的对应电路和器件。

  

**EMC 问题三要素**

开关电源及数字设备由于脉冲电流和电压具有很丰富的高频谐波，因此会产生很强的辐射。

电磁干扰包括辐射型（高频）EMI、传导型（低频）EMI，即产生EMC问题主要通过两个途径：一个是空间电磁波干扰的形式；另一个是通过传导的形式，换句话说，产生EMC问题的三个要素是：**电磁干扰源、耦合途径、敏感设备。**

辐射干扰主要通过壳体和连接线，以电磁波形式污染空间电磁环境；传导干扰是通过电源线骚扰公共电网或通过其他端子（如：射频端子，输入端子）影响相连接的设备。

传导、辐射、骚扰源------（途径）------ 敏感受体近场耦合IT、AV设备可能的骚扰源。

1、FM接收机、TV接收机本机振荡，基波及谐波由高频头、本机振荡电路产生。

2、开关电源的开关脉冲及高次谐波，同步信号方波及高频谐波，行扫描显像电路产生的行、场信号及高频谐波。

3、数字电路工作需要的各种时钟信号及高频谐波、以及它们的组合，各种时钟如CPU芯片工作时钟、MPEG解码器工作时钟、视频同步时钟（27MHz、16.9344MHz、40.5MHz）等。

4、数字信号方波及高频谐波，晶振产生的高次谐波，非线性电路现象（非线性失真、互调、饱和失真、截止失真）等引起的无用信号、杂散信号。

5、非正弦波波形，波形毛剌、过冲、振铃，电路设计存在的寄生频率点。

6、对于敏感受体通过耦合途径接受的外部骚扰包括浪涌、快速脉冲群、静电、电压跌落、电压变化和各种电磁场。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。