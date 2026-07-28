# 覆铜是一把“双刃剑”，PCB实例讲解

原创 硬件笔记本 2023-10-22 10:53 四川

> 原文地址: [https://mp.weixin.qq.com/s/eFgDxOJqBiGWW0H1cZ\_BVA](https://mp.weixin.qq.com/s/eFgDxOJqBiGWW0H1cZ_BVA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

覆铜是PCB设计的一个重要环节。所谓覆铜，就是将PCB上闲置的空间作为基准面，然后用固体铜填充，这些铜区又称为灌铜。**覆铜的意义在于：减小地线阻抗，提高抗干扰能力；降低压降，提高电源效率；与地线相连，减小环路面积。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscXmaLP4TYE9E0uYYzH54hicqepZjjXiabR5Il2E18a2jRGeyF9Adfwouw/640?wx_fmt=jpeg)

**覆铜是一把“双刃剑”**

出于让PCB 焊接时尽可能不变形的目的，大部分PCB 生产厂家会要求PCB 设计者在PCB 的空旷区域填充铜皮或者网格状的地线。但需要注意的是，覆铜如果处理的不当，那将得不赏失。

我们知道，在高频情况下，印刷电路板上的布线的分布电容会起作用，当长度大于噪声频率相应波长的1/20 时，就会产生天线效应，噪声就会通过布线向外发射，如果在PCB 中存在不良接地的覆铜话，覆铜就成了传播噪音的工具，因此，在高频电路中，千万不要认为，把地线的某个地方接了地，这就是“地线”，一定要以小于λ/20 的间距，在布线上打过孔，与多层板的地平面“良好接地”。**如果把覆铜处理恰当了，覆铜不仅具有加大电流，还起了屏蔽干扰的双重作用。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscCCSOFc0EuwHMLRWC0cDclkeyK0optKibxorYZRc0EREDcQrxFyrAcmw/640?wx_fmt=jpeg)

覆铜一般有两种基本方式，即大面积的覆铜和网格铜。那究竟是大面积覆铜好还是网格覆铜好呢？不好一概而论。

大面积覆铜，具备了加大电流和屏蔽双重作用，但是大面积覆铜，如果过波峰焊时，板子就可能会翘起来，甚至会起泡。因此大面积覆铜，一般也会开几个槽，缓解铜箔起泡。

单纯的网格覆铜主要是屏蔽作用，加大电流的作用被降低了，从散热的角度说，网格降低了铜的受热面，又起到了一定的电磁屏蔽的作用。但需要指出的是，网格是由交错方向的走线组成的，对于电路来说，走线的宽度对于电路板的工作频率是有其相应的“电长度“的（实际尺寸除以工作频率对应的数字频率可得），当工作频率不是很高的时候，或许网格线的作用不是很明显，一旦电长度和工作频率匹配时，就非常糟糕了，你会发现电路根本就不能正常工作，到处都在发射干扰系统工作的信号。

因此，**高频电路对抗干扰要求高的多用网格覆铜，低频电路有大电流的电路等常用完整的铺铜。**

了解了覆铜的“利弊”后，接下来，我们来了解下PCB覆铜的要点和规范。

  

**PCB覆铜要点和规范**

1、覆铜覆盖焊盘时，要完全覆盖，shape 和焊盘不能形成锐角的夹角。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscoJNyDKILsVkicyNvUo7dHUxRO1RH0DezmW03GQdVVXWafjKiab9vjtLg/640?wx_fmt=jpeg)

2、尽量用覆铜替代粗线。当使用粗线时，过孔通常最好为非通常走线过孔，增大过孔的孔径和焊盘。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscnePzzzsDMibhicwyialQpuqiaT7N3Xo3qZGDjx7hRYZ214Pdke8orPqciaA/640?wx_fmt=jpeg)

  

修改后：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscSXfx53NqIfDEmAgpkEsJ2OPVbJibsTeibBUWyehSA0eTyhiaYI0clacqw/640?wx_fmt=jpeg)

  

3、尽量用覆铜替换覆铜+走线的模式，后者常常产生一些小尖角和直角使用覆铜替换走线

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvsclBicabWhyZMAS8GtvrcMjEz4WaXydWMD4APKibeY0H9Wia2ZB4AxLc1vA/640?wx_fmt=jpeg)

  

修改后：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscoEnC1OFjIa3IJouEsv40LrzzjC9GbTNlQj5VjiaB0h0klVYx0OdXSsA/640?wx_fmt=jpeg)

  

4、shape 不能跨越焊盘，进入器件内部，特别地，表层大范围覆铜。（sony规范)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscVjCSMdmbZ7ibrFYEG1rxMHgOaMLsUddqGdZGvkcSuXG5wXNeaI1Tltg/640?wx_fmt=jpeg)

  

5、插头的外壳地，以及和外壳地相连的电感、电阻另一端的GND，最好覆铜。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvsc3o34Bmr4BLztSYibLOawN5ytEnEUYm9Io6JEPZVFHUkQZChCOiaLcM9A/640?wx_fmt=jpeg)

  

6、插头的外壳地覆铜连接方式最好用8角的方式，而非Full Connect的方式。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscJ6Z5BpuFluRrjEr34GdGlrRu2edDDQlW8AvcUdjQNHdNkxnmbL3uKQ/640?wx_fmt=jpeg)

  

7、电容的GND端最好直接通过过孔进入内层地，不要通过铜皮连接，后者不利于焊接，且小区域的铜皮没有意义。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjISeOOLpqickDGR7rocqvscyhfvCzqboFGaVO9icF1DbJFey1Nm7MgiaePQpmicrZTjdEPf62OHpvstw/640?wx_fmt=jpeg)

  

8、PCB，即使有大量空白区域，如果信号线的间距足够大，无需表层覆铜铺地。表层局部覆铜会造成电路板的铜箔不均匀平衡。且如果覆铜距离走线过近，走线的阻抗又会受铜皮的影响。

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