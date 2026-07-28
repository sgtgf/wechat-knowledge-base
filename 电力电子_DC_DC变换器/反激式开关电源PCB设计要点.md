# 反激式开关电源PCB设计要点

原创 硬件笔记本 2024-05-14 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/OX7WafRpKs5HD9pZ6LC0wQ](https://mp.weixin.qq.com/s/OX7WafRpKs5HD9pZ6LC0wQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

对于开关电源的PCB布局及走线是一个很重要的环节，不是说原理图是正确的后续的工作就没有了，其实原理图设计的完成只能证明电路原理上是正确的，并不能说明按照这个原理图所设计出的电路板能正常工作，因为PCB合理布局及走线会很大程度上影响电路的正常工作，例如PCB布局不合理，首先会表现出来的就是电路的抗干扰能力差，并且对外辐射能力强。对于走大电流的开关电源而言，PCB布局不合理会造成电路板发热很严重。

  

所以说PCB布局及走线在开关电源的设计中占据很大一部分。对于走高速信号的PCB板更是如此。对于开关电源的布局走线的规则有很多，大体上可归结为为大功率元件放在顶层，贴片放在底层；高电压线以及大电流走线的线宽要达到要求，最好是以敷铜的形式；功率环路和反馈环路要小且两者最好要有一定间距；元件之间要有一定的间隔，元件到PCB边缘要有一定的间隔；芯片供电引脚上并联的电容要尽量靠近芯片电源引脚等等。

  

以下就本次设计的PCB布局走线的一点建议。

  

对于反激变换器而言，有几个点在布局布线的时候需要注意，例如输入电路部分、变压器部分、电源芯片部分、反馈环路部分。对于输入电路部分而言，输入滤波器元件要布在一个区域且元件之间留有一些间隙，走线尽量走较宽的线或者直接走铜箔。变压器部分是电磁干扰的一个重要干扰源，尽量让变压器靠近整流桥后的储能电容，同时走线也尽量宽，从储能电容到变压器再到主开关管最后在回到储能电容这个回路要小，敏感线路的走线尽量离这个回路要远。电源芯片部分的关注点是芯片的电源引脚要并联一个贴片电容到芯片的地引脚，这个贴片电容的放置位置要靠近芯片的电源管脚，要是由于某些原因不能靠近放置在芯片管脚，也可以放置在芯片电源管脚的背面。

  

反馈环路部分的布局布线，主要关注的还是走线环路以及与大电流线的间距问题。反馈环路上面走的信号都是重要的信号，这些信号去控制电源管理芯片的输出PWM波的占空比来调节输出的稳定。如果反馈环路上的信号受到了干扰，那么势必会影响输出的稳定。反馈环路的走线要远离与变压器相连的走线，也要远离主开关管，要是电路板上还有大电流的走线或者高速信号的走线，反馈信号的走线也要远离这些走线。反馈环路的走线大致可以分为TL431部分的走线以及光耦部分的次级走线，TL431是取出反馈信号，光耦的次级将反馈信号反应到电源管理芯片。其中特别是光耦次级到电源芯片走线的这个环路要小。

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfPNpQzFib138hO9b7UOxY5JWneokT0t8C6jXO6Wzu798pXiadh4fTO2svA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

图1 反激电源整体原理图

  

图1开关电源从市电火线L和零线N进来后，有一个电流较大的保险管，如图1所示。这是因为板子上有其他市电交流负载，如交流电机等，当负载电流过大时，保护电路。该保险管电流参数需要根据实际负载功率计算选择。保险管后有一个压敏电阻（如图2所示），用于抑制浪涌和瞬时尖峰电压，当其两端电压高于其阈值时，压敏电阻值迅速下降，从而流过大电流，保护后级电路。在压敏电阻后又有一个电流较小的保险管（如图2所示），这才是真正针对板子开关电源的过流保护，防止电源电流过大，保护电路。

  

保险管后的NTC电阻（如图2所示），用于抑制开机时的浪涌电流，因为刚开机时，NTC温度较低，电阻值很大，抑制电流过大；当在电流作用下，NTC电阻温度升高，电阻值下降到很小，不影响正常工作电流。安规X电容(如图2所示）用于滤除市电的差模干扰，其后的3个电阻主要用于给X电容放电，以符合安规要求，防止在切断市电输入时，人手触摸到金属端子有触电感。使用多个电阻的原因是分散承受电压和功率。共模电感（如图2所示）用于滤除共模干扰电流。

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfPaSc93rPc3Odg1ZDk1DyzLz1JZNvFPicDg4NMSp2YMVuyTbV2h5zlicFQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图2输入部分电路

  

图2输入电容EC1在行业上有个3uF/W的通用原则，但需要注意的是该功率是输入功率而非输出功率，假设输出功率12W，效率为80%，则输入功率为15W，则输入电容至少为45uF，如图8所示。

  

由于反激电源演变自Buck-Boost，其输入回路和输出回路均是电流不连续路径，因此均要控制回路面积越小越好。输入电容EC1要靠近电源芯片，如图3所示。同理，输出整流二极管和输出电容也应该靠近变压器。

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfPMnORic80uvqXHMyKPboMiaMNRaT2rbTWDJGvpu2qBYYOzhLu2u3cF8jA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图3

  

图3RCD钳位电路用于吸收开关管关断时的Vds高压，防止损坏MOS管（电源芯片）。Layout时需将电容靠近变压器，电阻次之，如图4所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfP2kAVzbJnvlicLKbSN7lVlc8cgZQolQ1CfSRrNS5xjWicNjY3mnJNpywA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图4

  

图4光耦用于反馈输出电压，并进行隔离，II型补充设计原理图参考上述的文章，在此不再赘述。光耦反馈回路的初级GND最好不要和大电流路径的初级GND共用，以免受到干扰影响导致输出电压波动，因此采用单独拉一根GND地线到EC1的公共地，形成单点接地，如图5所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfP4So4QYeCGISL0V8dOZ9XSH6xDicm0ib3WGwKRSrcmIajNcLFnOpicWyrA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图5

  

图5并联于输出整流二极管两侧的RC阻容吸收回路，用于抑制二极管在高频通断情况下产生的EMI，因为二极管在导通瞬间会产生电压尖峰（电场），在关断瞬间会产生电压尖峰和电流尖峰（磁场）。输出电容EC2和EC3要注意均流设计，如图6所示，两个电容的电流路径是基本等长的，以避免某个电容因过流而提前失效。

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfPGQIkbCULiaMqETHup36E6iaaODTZwh6ynq2l0gIhu0hX2crEImtbibiarA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图6  

  

图6输出电压反馈节点需要从末端电容取出，以提高电压稳定精度，如图7所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfPyd4JFUIt933nbyfOo0KCiclsvaRNaFzC0QGAqknBG6jrrNd0iaV0AY5w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图7

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHMlfrEBkopcRjzH62TYTUfPvq3wUmgvvLoNtCJH8yukBZm1gGX7MdKrc0O4tr9UeSibwUymvl9AeKg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图8

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgYFJxcaLrsXjW9Imv6To5qQloduMlFQ6zsYjUfJFSlMW0QMfyH6ukj1Zoib33DzRJlXB0ibkE33ssg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

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