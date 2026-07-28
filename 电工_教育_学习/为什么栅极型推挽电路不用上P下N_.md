# 为什么栅极型推挽电路不用上P下N？

原创 硬件笔记本 2024-02-23 10:11 四川

> 原文地址: [https://mp.weixin.qq.com/s/FAM0au7o6\_vYqUDUHKYLSg](https://mp.weixin.qq.com/s/FAM0au7o6_vYqUDUHKYLSg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

在做信号控制以及驱动时，为了加快控制速度，经常要使用推挽电路。推挽电路可以由两种结构组成：分别是上P下N，以及上N下P。其原理图如下所示，

![](https://mmbiz.qpic.cn/mmbiz_png/R8niaxugQIFmYtrMZiclia6uyFRZQ4ZJ788Y66ulO67neL8Hf8A5XDQ02V873Xp5cf7lpzibTERFvJsicKQwg6nSdTA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

在平时中，我个人经常遇到的推挽电路是第一种。当我每次问身边的工程师：“为什么不选择使用第二种？第二种是上P下N型，这样的管子在实际中用起来，理论中比上N下P型更有优势呀。”但是实际中，从来也没有人正面地回答我，为什么不适用上P下N。或许很多人都会不屑去回答这个问题，但是这个问题确实是电子设计初学者几乎都会考虑的问题。今天我就捋一捋这个小问题。 

先来看看上N下P型，从该原理图可以知道，其输出信号与输入信号的相位是相同的，即输入时高。输出就是高。但是根据N管的工作特点——N管的输出电压幅值=Vb=0.7V，所以改模型的输出幅值会受到输出信号的限制。所以这对输入信号的幅值要求比较苛刻，否则可能会导致后级的高电平信号不够高。

![](https://mmbiz.qpic.cn/mmbiz_png/R8niaxugQIFmYtrMZiclia6uyFRZQ4ZJ788G42N0wQAHzdCr9DcJibnL35ZfK9qkUNX3toq4VF92APSez2biatzKNdQ/640?wx_fmt=png&wxfrom=13&tp=wxpic)

其输出的效果图如上图所示，可能细心的人会发现，当输入信号的高电平低于电源电压时，这意味着上N管的CE节将会承受较高的电压。这也就意味着上管将有着发热坏的风险。   

这个结论是存在一定的道理的，但实际中，当推挽电路在做信号控制时，其中流过的电流并不会很大，所以这种情况下，上管也不容易坏。但是如果推挽电路用于驱动负载时，则此时的管子会流过大电流，此时若输入信号幅度较低，则上管的发热量真的会很严重。当然，当输入信号的低电平高于参考电压时，下P管也会存在同样的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/R8niaxugQIFmYtrMZiclia6uyFRZQ4ZJ788TNYPFEnibgbFcoF51kxsbZAQYMs9j0K9wqUQv7BtYqTeFyfzcWmzibCA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 对于上P下N的模型，从原理图可以知道，该模型的输出与输出是反相的。即当输入为高时，输出则为低。

而实际的应用电路中，我们可以将其与上N下P模型进行对比。对比之后可以发现，上P下N模型的三极管基极会串了一个电阻，但是上N下P在实际应用中可以将其省略。上P下N模型中要加这两个电阻的原因是为了将上P管与下N管进行信号隔离。假如不进行信号隔离，从原理图中可以知道，上P管的信号其实是会影响下N管的。

![](https://mmbiz.qpic.cn/mmbiz_png/R8niaxugQIFmYtrMZiclia6uyFRZQ4ZJ788uDc5kcOwCmG407kVMTZlM9nVoSoI7B50cOOnOWmN0AlAhy5ZlJTlZg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 从以上电路中可以知道，当P管导通时，其信号会流经N管，这时就会导致P、N管的串通问题。所以该电阻不能省。可能很多人觉得，加两个电阻没什么，但是如果放在实际生产中，假如一个电阻的价格为0.1分，则生产一千万个产品则意味着“因为这两个电阻，成本将直接地上升一万元。”

另外，我们往往以为加了一个电阻之后就万事大吉了，其实并不是。尽管加了电阻，我们还要严格保证输入端要一直有信号且其信号的幅值足够高，否则一样会导致串通问题。

![](https://mmbiz.qpic.cn/mmbiz_png/R8niaxugQIFmYtrMZiclia6uyFRZQ4ZJ788hVcJkBOu4vESYTEBT0e1ybQDxoCQYIE86kGZYQBgmg3rB8CAYVibJLQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

但是，即使能够保证控制信号的幅值足够高，但是当信号在进行“高——低”转换的时候，其中必会经过一个信号的转换区间，这说明，在信号进行跳变时，依旧会存在串通的问题。要解决这个问题，就要求控制信号的压摆率远远大于三极管的导通时间（即在保证三极管还没做出开关反应时，控制信号就已经完成了信号转换，以避免串通现象）。

![](https://mmbiz.qpic.cn/mmbiz_png/R8niaxugQIFmYtrMZiclia6uyFRZQ4ZJ788QqMibicQPcykdLWq6giapV6Ngia2n8QmaicsnJbddouKGFKiaImL1XVzialqw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

大家可以去查查通用三极管的开关时间，查完之后你或许就会发现，上P下N型推挽电路的要求未免也太苛刻了吧。

综上所述，我们在实际的应用中往往会选择上N下P型。下表总结了两种模型的特点供大家参考：

上N下P模型

上P下N模型

输出与输入关系

相位关系：同相；

信号幅值关系：输出的幅值受到输出幅值的限制，输出幅值=输入幅值-0.7V（忽略P管的导通压降）

注意事项：

当输入信号的高电平低于电源电压时，上N管可能会发热严重；当输入信号的低电平高于参考电压时，下P管可能会发热严重

输出与输入关系

相位关系：反相；

信号幅值关系：当满足三极管的饱和导通条件时，输入与输出的关系不大；

注意事项：

1、两个三极管的基极需要串联一个电阻；

2、输入端需要一直存在控制信号，且控制信号的幅度要保证两三极管不会串通；

3、控制信号的压摆率要远大于三极管的开关速度，以防止在电平转换时出现串通现象。

当然，上P下N模型只是在栅极型（即三极管模型）中才会存在如此多的缺点，在场效应管（mos管）中还是很受欢迎的。具体原因大家可以根据自己的兴趣去了解。  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。