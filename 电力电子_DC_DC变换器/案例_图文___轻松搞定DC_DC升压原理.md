# 案例+图文 | 轻松搞定DC-DC升压原理

原创 硬件笔记本 2024-02-04 07:53 四川

> 原文地址: [https://mp.weixin.qq.com/s/QoAT8ahP7Bxw3gBc\_jnKbQ](https://mp.weixin.qq.com/s/QoAT8ahP7Bxw3gBc_jnKbQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

今天给大家分享的是DC-DC 升压电路。

这里主要是关于：DC-DC 升压电路、DC-DC 升压模块原理、如何构建DC-DC 升压电路。

  

# 一、什么是 DC-DC 转换器？

DC-DC 转换器是一种电力电子电路，可有效地将直流电从一个电压转换为另一个电压。

DC-DC 转换器在现代电子产品中扮演着不可或缺的角色。这是因为与线性稳压器相比，它们具有多项优势。尤其是线性稳压器会散发大量热量，与 DC-DC 转换器中的开关稳压器相比，它们的效率非常低。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCIc8QZzYeYsibZMzp81okUVktLpxpKibTTK0144t1mCYkYB586LMpdn9w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

  

在介绍 DC-DC 转换器 的工作原理之前，看一个示例，为什么 DC-DC 转换器这么有用？假设构建一个具有以下要求的电路：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjSCiaaze80YYeeHw2NXdDiav32H2Us3jyfXUSQzfdVG9dlR509fzkuicZIb0epxMKH3FsxCibz8OC7yQ/640?wx_fmt=png&from=appmsg)

DC-DC 升压电路

-   2Ω 负载电阻
    
-   12V 直流电源
    
-   5V 负载电压
    

我们需要降低 12V 电池的电压，为负载提供 5V 电压。我们可以将一个2.8Ω的电阻与负载串联，以提供所需要的电压。

先计算电路的效率如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCub907E1fibqYqAjPHlWaTnZ3rEe6svXlj6BbthRGpibSn85Wticswphyg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

从这些计算中，我们可以看到负载仅仅消耗了 12.5W 的输入功率，剩余部分 (30 – 12.5 = 17.5 W) 转化为热量。

照这么来看，其实是有点浪费的，如果触摸串联电阻，会有点热，这里需要结合机制来冷却电路，为了获得更优的解决方案，可以看下面的电路：

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCIc8QZzYeYsibZMzp81okUVktLpxpKibTTK0144t1mCYkYB586LMpdn9w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

开关断开时，输入电压为 0V，控制在 ON 位置时，输入电压为 12V。下图分别显示了开关位置 ON 和 OFF 的等效电路。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCaqR2brw4KrEZmSGFjnKp3fEVPR0R4kszbkQKAODotRYsuER93bagSg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路等效电路

如果我们如下图（a）所示控制开关，我们得到如下图（b）所示的电压图。T为切换周期，单位为毫秒或微秒。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DC9iaeNU7gibks6ibFbUibzJiad4G3cpdNvk9esdyeHVoBpvAC575oUrIAtsw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

在这种情况下，这种开关行为的平均输出电压为 5V，因为：

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCasJ1L81A0VEJTGjIZTOoUGrM1f09IRWUsialtibxPJxNW6rH50E9VVgQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

该电路的平均输出电压为5V，但我们可以通过使用RC滤波电路去除谐波来改善输出波形。

如果我们假设开关是理想的（理想开关是不消耗或耗散电源的开关），我们可以计算出该电路的效率为 100%。当开关处于 ON 位置时，流过电路的电流为 6A。

由于我们有一个理想的开关，耗散功率为 P\_diss = RI 2 = 0 \* 9 2 = 0W。当开关处于关闭位置时，没有电流流过开关，因此在这种情况下，耗散功率也为 0。

然而在实际应用中，找到一个理想的开关是比较困难的，这就意味着实际上会有一些功耗，虽然有功耗，但转换的效率仍旧很高。

  

# 二、 DC-DC 升压电路

DC-DC 升压电路主要是增加电源的电压，例如：升压转换器可以采用 5V 电源并将其升压至 25V。通常，你会在电池充电器或太阳能电池板中找到 DC-DC 升压转换器。它们还可用于从同一电池为具有不同工作电压的组件供电。

这种配置将直流电压升高到由电路中组件选择决定的水平。这是升压转换器的一般示意图。

1、升压开关打开状态

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DC9BsaWxPBoNEJL2jib8aViaoP24G0nj0wsuicQrk7l7iba8QxpS8C0GicGmg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

升压开关 ON 状态

  

2、升压开关关闭状态

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCqyTOqNYFGebxV9IfBEZC3zz6xgEuOL7y2jqQA7lNic6QcPjIVAX8g4Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

升压开关关闭状态

  

基本配置包括直流电源（Vin）、电感（L）、二极管（D）、开关器件（SW）、平滑电容（C）和负载电阻（Load），Vout 是输出电压。

开关通常是功率电子器件，例如由 PWM 信号控制的 MOSFET或BJT 晶体管。该 PWM 信号通过非常快速地切换晶体管来工作，通常每秒数千次。

  

# 三、DC-DC 升压电路工作原理

假设当前的电压是 5V，需要将 5V 转换为更高的电压值，用 DC-DC 升压电路就可以实现，这里假设我们是管道工。

  

1、涡轮加速

首先我们需要加速涡轮。为此，节气门打开，水快速排放，将部分能量传递给涡轮机，结果涡轮机开始旋转。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjSCiaaze80YYeeHw2NXdDiaviao9kQnUibTCx0LqicO2Sp4X6gicYicOvkPmicfkkFaFDsiab3SLEX4dSAibzg/640?wx_fmt=png&from=appmsg)

DC-DC 升压电路工作原理

  

2、填充压力储罐

油门关闭，由旋转的涡轮飞轮半部推动的一部分水打开阀门并填充储水箱，另一部分水在储水箱提供的高压下流向消费者，同时阀门防止水倒流。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCNRJia1cwc83NaCxFjh1icrBITgwT2Eyoap40z34UeWk8WsJdKLpMKhxg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

  

3、从压力储罐发电并加速涡轮机

涡轮的速度开始下降。水不能再推动阀门，储水箱仍有足够的能量积累。然后油门再次打开，水开始快速旋转涡轮。由于消费者从储罐接收能量，因此流向消费者的能量不会停止，然后循环重复。

现在工作原理已经很清楚了，我们将从管道设备切换到电子设备。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjSCiaaze80YYeeHw2NXdDiavhRQAJicricqxmf2raUxtgakSQMsL6HwM3RPAL60SzOa3EmKyic5n9qz0Q/640?wx_fmt=png&from=appmsg)

DC-DC 升压电路工作原理

我们用感应节流阀代替了涡轮机。晶体管用于代替控制水流的节流阀。二极管起阀门作用，用电代替储压罐。

下面就可以很好的理解，DC-DC 升压电路的工作原理。

  

1、电感累积电荷

开关已关闭，电感通过从源接收电流来积累能量。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCg1Mo2FRYcOibxa79mZLlUw46A4tFCyo306D2kSEF8grsc7zTPq1uxpA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

  

2、将能量转移到电容

开关打开，线圈保持磁场中积累的能量。电流试图保持在同一水平，但来自电感的额外能量会提高电压，从而打开通过二极管的路径。一部分能量流向消费者，而剩余能量在电容器中积累。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCaFNsQTDOzvQwicWqpqS8aJneL060tXtfibWUdmkFJCScibnYJEgBXFv0A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

  

3、在电感中积累能量并将电荷转移给消耗的电路

然后开关被锁定，线圈再次开始积累能量，同时，消耗的从电容接收能量。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjSCiaaze80YYeeHw2NXdDiavceGib7Y2t212CNNoSSSAicc4lVaL2WNOiavLYJsd5GhVpwITKxbwnHOhA/640?wx_fmt=png&from=appmsg)

DC-DC 升压电路工作原理

  

# 四、如何构建 DC-DC 升压电路

在下面中，构建一个 1.5V 至 5V DC-DC 升压转换器，

1、构建 DC-DC 升压 电路所需要的组件：

-   1.5V 直流电源
    
-   180uH 电感一个
    
-   1个1N3491 二极管
    
-   1个33uF 电容
    
-   一个 150 Ω 电阻
    
-   一个 MOSFET或JFET 开关晶体管
    
-   PWM 源，如Arduino Uno或555 定时器，可生成 50KHz、5V、75% 占空比
    
-     
    

2、DC-DC 升压电路工作原理图

![](https://mmbiz.qpic.cn/mmbiz_jpg/w1mISk442kBiadQ6EwESxKX0hXRsMf8DCC0ku4iahKccFQEcf2EVp1pib7urLwoY8eX4QwU2BUtYQ9Q6E9oftwOIw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源头条李工谈元器件。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。