# 为什么在高速PCB设计中，信号线不能多次换孔？

原创 硬件笔记本 2023-11-24 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/Bw42LzMaBxJi4qxGeZeE-A](https://mp.weixin.qq.com/s/Bw42LzMaBxJi4qxGeZeE-A)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

为什么在高速PCB设计中，信号线不能多次换孔？大家在进行**PCB设计**时肯定都接触过过孔，所以大家都知道过孔对PCB信号质量的影响很大，先给大家介绍一下我们在PCB设计时过孔应该如何选取。

**通常有三种类型的过孔可供选择：**（单位是mil）

8/16±2mil 10/20±2mil 12/24±2mil

通常，当板子比较密的情况下，我们会使用8/16±2mil(8/14,8/16,8/18)大小的过孔，当板材相对空旷时，可选择12/24±2mil(12/22,12/24,12/26都可以)大小的过孔，10/20之间可以使用10/20±2mil(10/18,10/20,10/22)大小的过孔。

就经济效益而言，我们过孔越大，成本越低，所以我们要控制板材的成本，在满足我们的设计的同时，尽量把过孔设置大一点。 

当然在HDI板子当中，我们通常需要盲埋孔。通常，我们的盲孔的大小范围为4/10±2这样，它通常可以击中焊盘，但需要注意的是，它不应该击中焊盘的中心。它通常可以击中焊盘的边缘，这样在工艺处理方面会更好。

所以我们的过孔越大越好还是越小越好，显然不是这样的。

从工艺的角度来看，我们的过孔内径不能小于板厚的1/7，为什么？

因为当我们的过孔小于1/7时，由于工艺技术的影响，我们不能在过孔孔壁上均匀镀铜，当我们不能均匀镀铜时，我们板的电气性能就会受到影响。因此，当板厚较大时，我们也应该增加过孔。

我们上面的结论是，最好是穿过更大的洞。此时，我们需要向您介绍两个公式。一个是过孔寄生电容的计算公式：C=1.41εTD2/（D1-D另一个是寄生电感的计算公式：L=5.08h\[ln（4h/d）+1\]。

**先来看看过孔寄生电容计算公式：**

ε：板材的介电常数，通常不同板材的介电常数也不同，T：指板的厚度。

假设过孔是在GND在这种情况下，D1值为过孔边缘与铜皮之间的避让距离(反焊盘)，D2：指过孔的外径。

我们可以从上面的公式得出结论：

1\. 在板和板厚度不变的情况下D寄生电容越大，寄生电容越小，C与D1成反比关系。

2\. 在板材和厚度不变的情况下D寄生电容越大，寄生电容越大，C与D2成正比关系。

3\. 在板厚和D2,D在不变的情况下，板材的介电常数越大，寄生电容越大，C与ε成正比关系。

4\. 介电常数及D2,D板厚T越大，寄生电容越大。

在普通PCB设计中，过孔寄生电容和寄生电感对PCB设计影响不大，可以进行常规选择。但是在高速下。PCB通过对上述过孔寄生特性的分析，我们可以看到中间过孔设计在高速下PCB在设计中，看似简单的过孔往往会给电路设计带来巨大的负面影响。 

**为了减少过孔寄生效应的不利影响，在设计中可以尽可能做到：**

1) 选择合理的过孔尺寸。对于多层一般密度PCB在设计上，选择10/20/36POWER隔离区)过孔较好；对于电源或地线的过孔，可考虑使用较大的尺寸，以降低阻抗；

2）POWER隔离区越大越好；

3）PCB信号走线尽量不要换层，即尽量减少过孔；

4)使用较薄的PCB两种寄生参数有利于减少过孔；

当然，设计中需要分析具体问题。综合考虑成本和信号质量，在高速下PCB在设计时，设计师总是希望孔越小越好，这样板上的布线空间就越大。此外，孔越小，其自身的寄生电容越小，更适合高速电路。

在高密度PCB在设计中，非过孔(盲埋孔)和过孔尺寸的减小带来了成本的增加，过孔尺寸不能无限减小，受到影响PCB制造商在高速下限制钻孔和电镀等工艺技术PCB在过孔设计中应考虑平衡。

然后，在了解了以上信息后，我们就会知道为什么在高速PCB设计中，我们不能不能打过多的过孔了。过孔本身会带来寄生电容和寄生电感。过孔越多，寄生电容和寄生电感的值就越大。所以这就是为什么很多数据手册上面会写我们布线时过孔的数量不能超过多少个，一般我们的高速信号线采取不能超过三个过孔的原则，能不打孔就不打孔。

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
    

后台回复“加群”，管理员拉你加入同行技术交流群。