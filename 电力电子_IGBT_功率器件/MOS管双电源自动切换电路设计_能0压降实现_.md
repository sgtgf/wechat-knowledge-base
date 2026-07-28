# MOS管双电源自动切换电路设计，能0压降实现？

原创 硬件笔记本 2024-01-10 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/uuq-WPQiYkXgdSf15\_S0Eg](https://mp.weixin.qq.com/s/uuq-WPQiYkXgdSf15_S0Eg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

实现双电源自动切换电路，其中利用了三个MOS管进行的电路设计。

然而，最近看到了另外两种主副电源自动切换的电路设计，觉得很有实用价值，分享给大家。

  

**一、**

我们主要围绕下面这个电路图展开：

VUSB：为外部USB供电

VBAT：为锂电池供电

Q1：PMOS

D1：二极管

  

电路工作设计：

1、外部电源供电时，锂电池的供电关断

2、外部供电断开时，由锂电池供电

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf6ewshmVZSfQLelqeKTnXfR0iahWR45ex8QA4so8lQkNAvdWRKJfkcPrnjbszov2w5dgWGxpBiaib5Q/640?wx_fmt=jpeg&from=appmsg&wxfrom=13)

当VUSB进行供电时（5V），PMOS的G端：为5V，此时PMOS不导通，电压经过二极管D1直接到达VCC。如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf6ewshmVZSfQLelqeKTnXf7axtv70gE8cLuiaT8p0dpzLIK7ClCibQdcYUKfRViaJUaqQ2Iw4GO83Hw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

  

当VUSB断开后，PMOS的G端的电压（5V）由电阻R1下拉到GND，此时PMOS导通，VCC由VBAT（为锂电池）供电。如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf6ewshmVZSfQLelqeKTnXfgaZ8ruicjZIZ8mHYdTw9eZ0mczPD3M55ZTnlKV87R1tXZONJibQibibUow/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

在这里加以说明：

在MOS管还未导通之前，S端的电压比G端的要高，因此MOS管会导通，导通以后MOS管的寄生二极管会短路，并不再起作用。

  

**二、0压降实现主副电源自动切换**

前面的电路加了D1二极管，是很难实现0压降，因为D1的压降最小也需要0.3V。

我们来看下面这个电路，相较于前面的电路，它利用了MOS管的低导通RDS（on）特性，提高了电路的效率。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf6ewshmVZSfQLelqeKTnXfC4spoD9PpqmJgicwLmAGAMo5p6gsRB2WsKoh6Mibd9X4K9wsxrQa2wZw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

这里利用了3个MOS管作为电路设计：

1.当VIN1（主电源）为3.3V时，Q1的NMOS导通，接着拉低了Q3 PMOS的栅极， Q3 开始导通。

此时Q2 MOS的G-S之间的电压等于Q3 PMOS的导通压降，大概为几十mV。因此Q2 MOS管关闭，VIN2（外部电源）断开，VOUT由VIN1进行供电，此时VOUT=3.3V。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf6ewshmVZSfQLelqeKTnXfHuy2KfZ6cSD1kENDSUxib5daYB1vveyjsNc2LWq15x8v66ggdTEPbQw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

此时电路的静态功耗I1+I2 = 20uA

  

2.当VIN1（主电源）断开，Q1 NMOS截止，Q2 PMOS的栅极通过R1下拉，Q2导通；Q3 PMOS的栅极通过R2上拉，Q3截止。

此时Q1和Q3截止，VOUT由VIN2供电，为3.3V，“电路的静态功耗I1+I2 = 20uA

”不存在了。

讲到这里我们可以看到，当电路由VIN2（外部电源）供电时，静态功耗“消失了”直接为0。整个电路几乎不存在压降，除非电流很大。

**可以得出在这个电路中，外部电源供电是更好的选择。**

**有个条件**：电路中的三个MOS管都应该具备低导通电阻与低压的特性。

不过，也有网友反应，这个电路在主电源下降过程中，可能会存在一些问题：Q3未完全关断而Q2就开始导通，外电源通过Q2、Q3形成通路，阻止了主电源的降低。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源电路一点通。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。