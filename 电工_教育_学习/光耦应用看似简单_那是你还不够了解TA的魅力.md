# 光耦应用看似简单？那是你还不够了解TA的魅力

原创 硬件笔记本 2023-12-26 07:51 四川

> 原文地址: [https://mp.weixin.qq.com/s/y0gr4TWTCZaidMXeJFzMVQ](https://mp.weixin.qq.com/s/y0gr4TWTCZaidMXeJFzMVQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/tGxRKz6VNHU7iaJo5mymEoD1X5qJSpgC5p4iaJjJKZT238B5NVXOibMKic2INniaLJGkNHPwsCTFvmfayJO2PibZI26A/640?wx_fmt=jpeg&random=0.8913257374952464&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

电器应用中常用的隔离器件有光耦、继电器、变压器。

❤光耦属于流控型元件，以光为媒介传输信号：电→光→电，输入端是发光二极管，输出端是光敏半导体。光耦的核心应用是隔离作用，常用于输入与输出之间无共地的系统。所以输入与输出之间的耐压可达上千伏特。

很多通讯模块也是光耦隔离的，更容易实现各个系统之间的连接，完全不用考虑是否共地。

如图1为光耦控制继电器（小功率），为使光耦能有效驱动继电器，那么输出端的阻抗应较小，所以输入端的电流应较大，具体原因见下面分析。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HyBf8sVuU2jib6faU7u4YQJfHutCicB1MIWSZPtx9GGOIjqUVPft57h3w/640?wx_fmt=png&random=0.1979941938796037&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图1：光耦控制继电器  

如图2为开关信号经过光耦隔离输入至单片机，图中24V与3.3V不是共地的，且在控制系统中数字电压3.3V驱动能力有限，所以通常用开关电源的24V或12V作为开关信号的电源。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HNkOnf611zUBOszUMQmxbs4SiaU5yollzZQG4hWkp7ByuTxl8VeicXkVA/640?wx_fmt=png&random=0.35934383305685014&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2：输入输出隔离  

以上两种普通的应用看似简单，但要正确使用光耦，就必须掌握光耦的输入和输出到底是什么关系？

❤光耦分为线性光耦和非线性光耦，实际常规应用中线性光耦较多，因为线性光耦可以替代非线性光耦，现在以线性光耦（PS2561A）做以下实验，换种角度了解TA的魅力。

如图3所示，调节光耦输入电流IF，测量输出的CE阻抗。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HFQNd0PEJwv3ic1rOoAia7IV9UlOfv9AHGxrlApOCibmNb5Rb0YLByDL7g/640?wx_fmt=png&random=0.5312130370583441&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图3：输入电流IF与输出CE阻抗关系实验  

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5Hbic46MNjiaWYuwY4rniaQmIJeIDTgP5VXNEm2HquHYlbZYpx75ZgeL7vg/640?wx_fmt=png&random=0.4700719883379325&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

左边为输入电流IF，右边为输出CE阻抗  

如图4所示，光耦输入与输出的限流电阻都是1k，且输入电压都相同，于是调节稳压源的电压值，可以得到光耦输入电流IF与输出电流IC的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HMkGGBfbefwl8K8eYRP9aY6ZvKVGzT6m5vjxf1VcpKN8IZfvtFj8gww/640?wx_fmt=png&random=0.9164244035228353&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图4：输入电流IF与输出电流IC的关系实验  

  

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HCqibObn06NJJu7wuQguFHKGu7oMUpfnTlALeMeMNKqX64q60GxDvBwQ/640?wx_fmt=png&random=0.5513091236038576&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

左边为输入电流IF，右边为输出电流IC  

❤如图5得到的实验数据，输出电流IC与输入电流IF曲线趋势基本一致，CE阻抗小于1k左右呈线性变化。且最低阻抗大于100Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HlWyg7PegicTJtHCicDFk4C8IepSJI25aJicWzZMqicAibuIaRbfW8TzJUrg/640?wx_fmt=png&random=0.9497178292819282&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图5：实验数据

  

所以使用线性光耦传递开关信号时，需要合理匹配输入电阻的大小，图1中输入电阻360Ω，光耦输入正向压降1V左右，所输入电流IC为(5-1)/360≈11mA，光耦输出CE阻抗200Ω多点，而继电器HFD2线圈阻抗2880Ω，此时可正常驱动继电器，若IC电流变小，则CE阻抗变大后会导致不能正常驱动继电器。

❤线性光耦主要用于模拟信号的传递，输出相当于一个可变电阻。在开关电源中很常见，利用光藕做反馈，把高压和低压隔离。常用的有PC817、PS2561、PS2801。如前面例子也常用于开关信号。

图7为图6中开关电源内部的线性光耦，开关电源的输出电压经过线性光耦隔离并反馈到控制芯片达到实时调节输出电压的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HooBTemUsyADEQ53icEJVpAKRs2ibX4m1lE4a7tjN1q9MIYOicILnic9Q8w/640?wx_fmt=png&random=0.24052253531579493&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图6：光耦在开关电源中的应用  

  

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcmqyULrMjKooRS4kTI68K5HC5IDc5ScYIboFoU5B547ic4neiaZpRd0aRg2y7tVhjv2WltxObMduSfw/640?wx_fmt=png&random=0.6273531234619876&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图7：开关电源内部的光耦  

  

❤非线性光耦主要用于开关信号（或数字信号）的传递，常用的4N系列的有4N25、4N26以及TIL117；另外还有高速光耦，如6N136、6N137、PS9714、PS9715等。多用于通讯隔离以及PWM波控制（可有效降低电磁干扰），判断是不是高速光耦，看数据手册是否注明 High speed（1Mbps、10Mbps）。

❤要点

①光耦的核心应用是隔离作用；

②相同电压下线性光耦输入电阻与输出电阻相同时，输出电流IC基本与输入电流IF一致；即使输入与输出电压不同，也可以匹配输出与输入的电阻来实现；

③用于开关信号线性光耦和非线性光耦都可以，反过来线性光耦电路中不能用非线性光耦代替。

④非线性光耦要比线性光耦响应速度快，类似于比较器比运算放大器响应速度快一样。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条电卤药丸。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。