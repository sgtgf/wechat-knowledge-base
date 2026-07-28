# EMC整改之X电容和Y电容

原创 硬件笔记本 2023-09-02 11:20 四川

> 原文地址: [https://mp.weixin.qq.com/s/PFfzXzlb5h0HgVK61nl1MQ](https://mp.weixin.qq.com/s/PFfzXzlb5h0HgVK61nl1MQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

电容是电子电路中最常见的一种元器件，今天为大家分享2种特殊电容：X电容和Y电容。

  

  

1

**安规电容**

安规电容之所以称之为安规，它是指用于这样的场合：即电容器失效后，不会导致电击，也不危及人身安全。安规电容包含X电容和Y电容两种，它普通电容不一样的是，普通电容即使在外部电源断开之后，它内部储存电荷依然会保留很长一段时间，但是安规电容不会出现这个问题。安规电容大多数为蓝色、黄色、灰色以及红色等。

  

  

**1、安规X电容**

X电容是跨接在电力线两线之间，即“L-N”之间，X电容器能够抑制差模干扰，通常采取金属化薄膜电容器，电容容量是uF级。X电容多数是方型，也就是类似于盒子的形状，在它的表面一般都标有安全认证标志、耐压字样（一般有AC300V或AC275V）、依靠标准等信息。X电容虽然是CBB电容的一种，但是并不是每一种CBB电容就能做X电容必须要达到安规标准。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWrsFiczA5sK07UXxNic9Omm0dfzGMFa0FvOcPLPJWz09KWwdhXZ75nGDQ/640?wx_fmt=jpeg)

  

  

**2、安规Y电容**

Y电容通常都是陶瓷类电容器，一般成队出现，多数是扁圆形外观，颜色呈现蓝色，能够抑制共模干扰，Y电容容量是nF级。基于漏电流的制约，Y电容量不可很大。Y电容多数适用于隔离场合，按照IEC标准，Y1产品电气间隙最小为8.0㎜，Y2产品电气间隙不低于6.3㎜，作为隔离产品，安全距离要做够，避免高压通电发生拉弧现象。

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWOuY4n8yic4Rpic98u3sOyTvQke5ZuccmJM4erSSjVkzibkWtJFnTTwyYg/640?wx_fmt=jpeg)

  

  

  

2

**安规电容选择**

**1、耐压选择**

X型安规电容根据耐压分为 X1、X2、X3三种，安规电容安全等级中允许的峰值脉冲电压过电压等级：2.5kV＜X1≤4.0kV、X2≤2.5kV、X3≤1.2kV

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWErZVziaibibxL9XibhfdxXZmLZ6EoDb6JjZOmWh6zK4yGeK4kunX0EHFLA/640?wx_fmt=jpeg)

  

  

Y型安规电容安全等级：Y1≥250V，允许峰值脉冲电压＞8KV；150V≤Y2≤300V，允许峰值脉冲电压＞5KV，Y4＜150V，允许峰值脉冲电压＞2.5KV。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWn7ScgD3cSvuiakoXXR11gW9H6NkM2I3tW839iarGr5dO0XiayIZBrPdGA/640?wx_fmt=png)

不同电路选择不同的耐压值的安规电容，不能过大也不能过小，对于X电容来说，很多时候都选用X2电容。

  

  

**2、认证类型**

不管是什么元器件，只要是正规的都要有认证，安规认证还包括产品安全认证、环境认证、能源认证，不同国家有不同的安规规定，有些规定了强制认证，认证有很多，比如中国CQC认证、德国的VDE认证、美国的UL认证、欧盟的ENEC认证、韩国的KC认证等。选择安规电容时候要根据不同场合不同国家选择不同的认证的元器件。

  

  

3

**安规电容应用**

安规电容的应用是十分广泛，广泛应用于小家电产品、电源产品、机电马达，LED灯饰、充电器、不间断电源等

  

**1、X安规电容应用**

  

**抑制电磁干扰**

抗电磁干扰是X电容最常见的作用，一般两根引脚跨接在零线和火线之间，适用于高频、直流、交流、耦合，跨接脉冲电路中，能够能承受过压冲击，一般与电阻并联使用，目的是起到泄放电荷作用；

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRW1ibBibdiauSSBaefwFCG27l3aNDSHR5mk6tDErrTwbcZlNiaLO3TONrlQg/640?wx_fmt=jpeg)

  

**阻容降压**

阻容降压也是X电容经常用到的，特别对于成本低廉成品，电容降压的工作原理是利用电容在一定的交流信号频率下产生的容抗来限制最大工作电流。同时在电容器上串联一个阻性元件，则阻性元件两端所得到的电压和它所产生的功耗完全取决于这个阻性元件的特性。因此，电容降压实际上是利用容抗限流，而电容器实际上起到一个限制电流和动态分配电容器和负载两端电压的角色。如下图：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWApiaSfUXBvdPN2JlEZjFRTLd4kVgX8IJ3mlELstsRVfc9AHsAwE8BTQ/640?wx_fmt=jpeg)

**滤波**

X2安规电容器可以用作直流滤波使用，可以并联使用。

  

  

**2、Y安规电容**

应用很多隔离式开关电源在初级和次级上加Y电容是为了给次级的共模电流提供一个回路到初级，减少共模电流对输出的影响。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWvZC0LZ8bbU4GLnJBxQFfqnPHiccBO7KJs8Om0icWOn2LibVJub0AUVhOw/640?wx_fmt=jpeg)

Y电容串接在高压地和低压地之间，有时会采用两个Y电容串联是为了提高高压地和低压地之间之间的耐压，有时候会出现耐压不足的情况，导致安规电容打耐压过不了，可以选用高压陶瓷电容作为Y电容，Y电容通常接法有四种情况：

-   输入端,和共模电、感形成滤波器,L和N分别对PE加；
    
-   储能大电容正负端对PE加；
    
-   输出端对PE加；
    
-   变压器原副边跨接。
    

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。