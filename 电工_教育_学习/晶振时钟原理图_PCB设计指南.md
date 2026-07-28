# 晶振时钟原理图、PCB设计指南

原创 硬件笔记本 2023-09-03 11:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/\_lvZ13lIacUzNECvp9PSBw](https://mp.weixin.qq.com/s/_lvZ13lIacUzNECvp9PSBw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

在一个电路系统中，时钟是必不可少的一部分。时钟电路相当关键，在电路中的作用犹如人的心脏的作用，如果电路系统的时钟出错了，系统就会发生紊乱，因此在PCB 中设计一个好的时钟电路是非常必要的。 

我们常用的时钟电路有：晶体、晶振、时钟分配器。有些IC 用的时钟可能是由主芯片产生的，但追根溯源，还是由上述三者之一产生的。接下来结合具体实例，说明时钟电路布局、布线的原则和注意事项。 

  

 晶体 

PCB 中常用的晶体封装有：2 管脚的插件封装和SMD 封装、4 管脚的 SMD 封装，常见封装如下图： 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCiafPRDpgPAcRINO0ia6biaLp5bV6nvFtNw1iaM2xGr4qe9ibANY4satm7jg/640?wx_fmt=png)

  

尽管晶体有不同的规格，但它们的基本电路设计是一致的，因此PCB 的布局、布线规则也是通用的。基本的电路设计如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCEnkBLEelbMLibqnbfcawRqicrFDDu6MED3zwvE7Shs1Punw3qWuiaKeUA/640?wx_fmt=png)

  

从电路原理图中可以看出，电路由晶体+2 个电容组成，这两个电容分别为增益电容和相位电容。   

  

晶体电路布局时，两个电容靠近晶体放置，布局效果图如下： 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCEGOadKQWHcFZzHJuDwLFdetZtOGicdyRyCEbKiclWCrV4gPZ1RyHDbDQ/640?wx_fmt=png)

  

布线时，晶体的一对线要走成类差分的形式，线尽量短、且要加粗并进行包地处理，效果如下图： 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCpyzca5M5fkwibTPqMwI9BFLvebrnYwxWJMoZ2slXW8DHbpmmJveyC4Q/640?wx_fmt=png)

  

上述的是最基本和最常见的晶体电路设计，也有一些变形设计，如加串阻、测试点等，如下图,设计思路还是一致的： 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCx3bT8yoQDXACPqO5h35KR4QdUQBXnIPZhWibGd3lX8ibTkfX2bS1dN1Q/640?wx_fmt=png)

  

 结合上述，

**布局应注意：** 

1\. 和 IC 布在同一层面，这样可以少打孔； 

2\. 布局要紧凑，电容位于晶体和IC 之间，且靠近晶体放置，使时钟线到IC 尽量短； 

3\. 对于有测试点的情况，尽量避免stub 或者是使stub 尽量短； 

4\. 附近不要摆放大功率器件、如电源芯片、MOS 管、电感等发热量大的器件；

**布线应注意：** 

1\. 和 IC 同层布局，同层走线，尽量少打孔，如果打孔，需要在附近加回流地孔；

2\. 类差分走线； 

3\. 走线要加粗，通常 8~12mil;由于晶体时钟波形为正弦波，所以此处按模拟设计思路处理； 

4\. 信号线包地处理，且包地线或者铜皮要打屏蔽地孔；

5\. 晶体电路模块区域相当于模拟区域，尽量不要有其他信号穿过；

  

  

 晶振 

 相比于晶体电路，晶振是有源电路，主要由三部分组成：晶振+电源滤波电路+源端匹配电阻：常见电路设计如下图： 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeC9kfdT1oqy3hsOMMGNMMdzKge4Qj7DEq20GeDZgupQ6vTjYJBib5cT1Q/640?wx_fmt=png)

  

布局布线效果图如下： 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCiacXl0Y5mhkP2tFDLibKYn6sicw8TKF1wt0qdh4NzPHye9Yic1Jx4Rt3XQ/640?wx_fmt=png)

  

**布局、布线总结：** 

1\. 滤波电容靠近电源管脚，遵循先大后小原则摆放，小电容靠得最近；

2\. 匹配电阻靠近晶振摆放；如果原理图中没有这个电阻，可建议加上；

3\. 附近不要摆放大功率器件、如电源芯片、MOS 管、电感等发热量大的器件； 

4\. 时钟线按 50 欧姆阻抗线来走；如果时钟线过长，可以走在内层，打孔换层处加回流地孔； 

5\. 其他信号与时钟信号保持4W 间距； 

6\. 包地处理，并加屏蔽地孔； 

  

  

时钟分配器

时钟分配器种类比较多，在设计时保证时钟分配器到各个 IC 的距离尽量短，通常放在对称的位置，例如：

时钟分配器电路：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCPKp9AAQnTicpuAFPRVsZQgqG94EDQnc40f3UKFKuLxSlaypss7gI2UA/640?wx_fmt=png)

  

设计如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgibgS2juPrZWhsflxvl7BeCQhBxds6uG5kfzrnJGaUK9ZCQibsLvxxo3xYd3wf1iaeV2GbbdPObiaKPQ/640?wx_fmt=png)

  

**布局、布线总结：**

1.时钟发生电路要靠近时钟分配器，常见的时钟发生电路是晶体、晶振电路；

2\. 时钟分配电路放置在对称位置，保证到各个 IC 的时钟信号线路尽量短；

3\. 附近不要摆放大功率器件、如电源芯片、 MOS 管、电感等发热量大的器件；

4. 时钟信号线过长时，可以走在内层，换层孔的 200mil 范围内要有回流地过孔。

文章作者：ltqshs

原文链接：https://blog.csdn.net/qq\_21794157/article/details/122921529

硬件工程师及从业者都在关注我们

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