# MOS管加三个元件就组成BUCK电路，为何说难点在于电感？

原创 硬件笔记本 2023-09-23 11:15 四川

> 原文地址: [https://mp.weixin.qq.com/s/QMqRTIWHVRHmMcLNBz-ttg](https://mp.weixin.qq.com/s/QMqRTIWHVRHmMcLNBz-ttg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**BUCK电路中最重要的器件是电容，二极管还是电感？**

  

只要是电子产品就需要供电，就离不开电源，那什么是电源：小到手表中的电子，遥控器的电源，大到220V家庭用电，都可以看做是电源。然而在我们的电路设计中，会用到各种芯片，各种芯片所需要的电压值也不一样。

而有一颗芯片需要多个电压（比如：CPU就需要0.8V,1.0V,1.2V；DDR4颗粒需要2.5V,1.2V,0.6V；音频芯片需要3.3V等），而我们的电源输入电压，一般只有一种19V，12V，即使由多种输入也没办法满足这么多种类的电压值小的电压。

那有没有一个办法解决这个问题了？当然有，那就是BUCK能解决此类所有的问题，但今天和大家聊的重点不是BUCK电路， 而是想问问大家，你觉得BUCK电路中那个器件最重要，那个器件学习最难；

什么是BUCK电路？BUCK电路就是降压斩波电路,是基本的DC-DC电路，用于直流到直流的降压变换；与之相对的是BOOST电路（BOOST电路后面再给大家介绍）；

  

# **下面我们一起先来看看BUCK电路最基本的模型图一：**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmelXWiafo8f3HeGaSqiakXb2ib7bmibib5tXxEoRg8tW4ianHATR06ClOkfHOWPY73KYFoGIbCf0jTTmrnQ/640?wx_fmt=png&wxfrom=13)

在这个BUCK模型中，组成的最基本的几个器件是MOS管Q1，电感L1，电容C1和二极管D1；  

  

# **先来带大家了解这三个被动器件在平常电路设计的作用**

1，电容：电容又称“电容量”，是指在给定电位差的电荷储藏能量；它的作用是：旁路，去耦，滤波，储能；旁路电容是为本地器件提供能量的储能器件，它能使稳压器的输出均匀化,降低负载需求。去耦电容是满足驱动电路电流的变化,避免相互间的耦合干扰,减小电源与参考地之间的高频干扰阻抗。滤波就是充电、放电的过程。储能型电容器通过整流器收集电荷,并将存储的能量通过变换器引线传送至电源的输出端；在BUCK电路中电容的选型需要注意耐压值，以及容值，相对情况下选取容值大的滤波效果好。

  

2， 二极管的作用：二极管也是非常常见的器件，最大特性就是单向导通性，也就是电流只可以从二级管的一个方向流过；最常见的有整流，开关，限幅，续流，检波，变容，显示，稳压等作用；在BUCK电流中二极管的选型需要注意反向耐压值，以及过流值大小，

3，电感的作用:电感在电路中主要起滤波,振荡,延迟,陷波等作用,简单地说就是通直流,阻交流。电感符号:L,电感单位:享、毫享、微享、纳享。在BUCK电路中电感的选型需要计算电感的值，以及电感电流大小的选择，这又有两个参数，电感的饱和电流(Isat)与温升电流(Irms)；

  

# **下面我们来介绍下BUCK电流的工作过程：**

当开关管Q1开关管导通，储能电感L1被充磁，流经电感的电流线性增加，同时给电容C1充电，给负载R1提供能量。等效电路如图二

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmelXWiafo8f3HeGaSqiakXb2ibuzYDssv6vSvCXwZsLjYQiaicmlcwgf2y1bfcl6g4SV5BRu2tFL9wMvaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图二

当开关管Q1开关管关断，储能电感L1通过续流二极管放电，电感电流线性减少，输出电压靠输出滤波电容C1放电以及减小的电感电流维持（此电路中的二极管D1，起到的是续流作用）等效电路如图三

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmelXWiafo8f3HeGaSqiakXb2ibhaoytwPMbp6wTsffsAgDPegEIKRdEqT4rr8abpdOKOLxsicPEAOFguQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在BUCK电路中，电容和二级管的选取相对比较容易的，电感的两个参数，电感电流大小的选择也还好（实在不会，饱和电流和温升电流选二者小的电流能满足要求的即可），但电路中电感的感值选取和计算是我们经常所面临的一个难点；所以小编认为BUCK电路学习中，电感才是最重要的器件，大家怎么看？  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源卧龙会IT技术。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群