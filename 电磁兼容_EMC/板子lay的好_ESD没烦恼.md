# 板子lay的好，ESD没烦恼

原创 硬件笔记本 2023-09-14 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6iGhS5WtY\_rRXNEZsT10HA](https://mp.weixin.qq.com/s/6iGhS5WtY_rRXNEZsT10HA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

板子lay的好，ESD没烦恼。提高ESD静电防护，PCB设计需要做好以下几点：

对于电源布局的整改，如图1所示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7UxujsYKMmsgANF8bTely16276ZFAFnqpUVV6PWWA17lBTvn3k35N3tSITbg/640?wx_fmt=png)

图1

1、DCDC电源布局，在电压输出端经过电感，旁路电容和储能电容的布局如上图，旁路电容C14、C13尽量靠近电感输出，取电压最好是经过电容C12后取电。目的是电路可更好滤波，减少干扰。

  

2、所有通过电源线、信号线上的高频旁路电容都尽量就近接地，以减小进入电路系统的ESD大电流，起到更好的吸收干扰的作用。

  

3、复位线、恢复出厂信号线要尽可能短。因为越长的走线就越难承受ESD能量，故元器件的布局尽可能凑近以减短走线长度。若实在无法避免，线的两边尽量有地包裹，如图2所示。（感谢关注微信公众号：硬件笔记本）目的是减少其他信号干扰，避免受到干扰使芯片无故重启。同时也可在电路上加电容或电阻，可增大内阻，防止过大的干扰信号。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7Uxujs2YH3ls0nxkdLCrB6v8ad5JRkQKkibjWZNdTqdTwMClEB6P7Aglwnwow/640?wx_fmt=png)

图2

  

4、开关复位线布局也是同样的原理，在电路上可加上一个π型滤波电路，如下图图3所示，可更好的消除外界干扰，防止芯片重置。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7UxujsKbJPApJzzQibOjlyPaBkRuicfCu8lIJVMQq6ibGf5zgxvOU5vJamnMZqw/640?wx_fmt=png)

图3

  

5、给芯片供电，电源走线尽量是先通过电容再流向芯片，对芯片起到保护作用。如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7UxujsuJohfBJwHGv1hdMISfdfFSrOZMv5S0CJ6ra63d4qKeYcrI6u5rMCGQ/640?wx_fmt=jpeg)

图4

  

6、地线铺铜尽量避免直角。尽量使用拐角大于90°，直角尖会产生干扰，会导致放电路径不一致。如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7Uxujs3YJ9TETeA6Xpzjx07fSqkLS3HYEKR7TV2oQwMTd0E0Dv1pOewaeUGg/640?wx_fmt=png)

图5

  

7、通讯线先经过保护器件，再经过防雷管放电，防雷管就近接地，再经过TVS放电。线尽量短，回路尽可能小，可快速消除干扰信号。（感谢关注微信公众号：硬件笔记本）在地线上加上Y电容，可快速放电，消除静电。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7UxujsuibhF74YkezcOWj87CicnImoH7h2FO36GxScWT7HcsXsAxib4oOAzRyIg/640?wx_fmt=png)

图6

  

8、MCU和其他芯片可以分开取电，避免相互干扰，可在电路上加LC滤波电路。电路如图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjRtTye5S9iaQtA6ibl7Uxujs1KBsTP11oTo4WWQXoIFkHcWQczSg5uzzjiaZdSyvymsrtMAj6fxcUfQ/640?wx_fmt=png)

图7

  

9、也可使用多层板。多层板可大大改善系统抵抗ESD放电的能力。将第一层接地平面尽可能靠近信号走线层，可使用ESD瞬态放电在到达走线时能很快抵消。

  

10、加隔离。电气隔离也是抑制静电放电冲击的一种方法。在PCB上加隔离芯片或者光耦、变压器等，以及结合截止隔离和屏蔽可以很好抑制静电放电冲击。

  

总的来说，关于防止ESD静电干扰的设计，电源平面、接地平面和信号线的布局是PCB ESD防护设计的重要措施之一。

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