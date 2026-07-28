# 轻松搞懂MOS管datasheet

原创 硬件笔记本 2023-09-24 11:10 四川

> 原文地址: [https://mp.weixin.qq.com/s/lUhdGAQx1ERzoV8DCa3RPQ](https://mp.weixin.qq.com/s/lUhdGAQx1ERzoV8DCa3RPQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**极限参数**

公众号：硬件笔记本

极限参数也叫绝对最大额定参数，MOS管在使用过程当中，**任何情况下都不能超过下图的这些极限参数，否则MOS管有可能损坏。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaQKylSv7YlU2zMlos8FoCfQjOngdReUTDV7TibcRM4q0tMLkn5EGvkhg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**VDS** 表示漏极与源极之间所能施加的最大电压值。

**VGS** 表示栅极与源极之间所能施加的最大电压值。

**ID** 表示漏极可承受的持续电流值，如果流过的电流超过该值，会引起击穿的风险。

**IDM** 表示的是漏源之间可承受的单次脉冲电流强度，如果超过该值，会引起击穿的风险。

**EAS** 表示单脉冲雪崩击穿能量，如果电压过冲值(通常由于漏电流和杂散电感造成)未超过击穿电压，则器件不会发生雪崩击穿，因此也就不需要消散雪崩击穿的能力。EAS标定了器件可以安全吸收反向雪崩击穿能量的高低。

  

**PD** 表示最大耗散功率，是指MOS性能不变坏时所允许的最大漏源耗散功率，使用时要注意MOS的实际功耗应小于此参数并留有一定余量，此参数一般会随结温的上升而有所减额。（此参数靠不住）

  

**TJ, Tstg ，**这两个参数标定了器件工作和存储环境所允许的结温区间，应避免超过这个温度，并留有一定余量，如果确保器件工作在这个温度区间内，将极大地延长其工作寿命。

  

**dV/dt** 反映的是器件承受电压变化速率的能力，越大越好。对系统来说，过高的dv/dt必然会带来高的电压尖峰，较差的EMI特性，不过该变化速率通过系统电路可以进行修正。

  

  

  

**热阻**

公众号：硬件笔记本

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciamQqW2DzRFweyNrWBt88e34x1d8ke2cxjAnmfpibAVCQTDMrmtsM0OGQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

热阻表示热传导的难易程度，热阻分为沟道-环境之间的热阻、沟道-封装之间的热阻，热阻越小，表示散热性能越好。

  

备注：元器件降额分析，计算MOS温升时，需要用到此参数

  

  

  

  

**技术参数**

公众号：硬件笔记本

**☀静态参数**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaNHtQcJpdhoPEIhcN0BvH5RQU8RzibIBsib04R2MOcT43aO6jQtp2qgPg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**△VDS/TJ** 表示的是漏源击穿电压的温度系数，正温度系数，其值越小，表明稳定性越好。

**VGS(th)** 表示的是MOS的开启电压(阈值电压)，对于NMOS，当外加栅极控制电压 VGS超过 VGS(th) 时，NMOS就会导通。

**IGSS** 表示栅极驱动漏电流，越小越好，对系统效率有较小程度的影响。

**IDSS** 表示漏源漏电流，栅极电压 VGS=0 、 VDS 为一定值时的漏源漏流，一般在微安级。

**RDS(ON)** 表示MOS的导通电阻，一般来说导通电阻越小越好，其决定MOS的导通损耗，导通电阻越大损耗越大，MOS温升也越高，在大功率电源中，导通损耗会占MOS整个损耗中较大的比例。

**gfs** 表示正向跨导，反映的是栅极电压对漏源电流控制的能力，gfs过小会导致MOSFET关断速度降低，关断能力减弱，过大会导致关断过快，EMI特性差，同时伴随关断时漏源会产生更大的关断电压尖峰。

  

**☀动态参数**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaLbYrFEduq8lMl48FrwiaOmr5giak5lHgOhYOO5kEniblTKEiahvRq7BkRg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**Ciss** 表示输入电容，Ciss=Cgs+Cgd，该参数会影响MOS的开关时间，该值越大，同样驱动能力下，开通及关断时间就越慢，开关损耗也就越大。

**Coss** 表示输出电容，Coss=Cds+Cgd；Crss表示反向传输电容，Crss=Cgd(米勒电容)。这两项参数对MOSFET关断时间略有影响，其中Cgd会影响到漏极有异常高电压时，传输到MOSFET栅极电压能量的大小，会对雷击测试项目有一定影响。

**Qg、Qgs、Qgd、td(on)、tr、td(off）、tf** 这些参数都是与时间相互关联的参数。开关速度越快对应的优点是开关损耗越小，效率高，温升低，对应的缺点是EMI特性差，MOSFET关断尖峰过高。

  

**☀**漏源体二极管特性****

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaKznPpnuPkiaN7fvYYRktL1Kh8zMVSwg2Kdm8oA9qermLjXiaTnYthWPg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**IS 、ISM** 这些参数如果过小，会有电流击穿风险。

**VSD、trr** 如果过大，在桥式或LCC系统中会导致系统损耗过大，温升过高。

**Qrr** 该参数与充电时间成正比，一般越小越好。

  

  

**特性曲线**

公众号：硬件笔记本

**☀**输出特性曲线****

输出特性曲线是用来描述MOS管电流和电压之间关系的曲线，特性曲线会受结温的影响，一般数据手册上会列出两种温度下的特性曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaicVnSD5ns1UGAYQhH4ianB4crhD1aJIRxhibMHKDvF7QChLxzu6FTFVgw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**☀**转移特性曲线****

根据MOS管的输出特性曲线，取Uds其中的一点，然后用作图的方法，可取得到相应的转移特性曲线。从转移特性曲线上可以看出当Uds为某值时，Id与Ugs之间的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8Ticiafym1vS89Lx7PWVUqtgBgDkW0Iv1ugJbHnWw39OnGwR5GjF8FSCFGFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**☀****导通电阻随温度变化的曲线******

MOS的导通电阻跟结温是呈现正温度系数变化的，也就是结温越高，导通电阻越大。MOS数据手册上一般会画出当VGS=10V时的导通电阻随温度变化的曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciadowvBCk2tKkhibKvfvLBdCMJnibGBrNmtF39haXs45Z3pOFxM1G9pgRw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**☀******电容与源漏极电压曲线********

电容容量值越小，栅极总充电电量QG越小，开关速度越快，开关损耗就越小，开关电源DC/DC变换器等应用，要求较小的QG值。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaFwXyGSStad3jbMicvcCQphtQUIpmQ9ic1tCMdiaAkSnicD7E49ko6Zd9wA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8Ticia3icdv6mEbGK1bTRNibibH24e0ru5CvCnv9k017pAucaSMO6SytQBvrddQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**☀********正向导通电压曲线（指的是寄生二极管导通，而不是DS压降）**********

MOS管一般会有一个寄生二极管，寄生二极管对MOS管有保护的作用，它的特性跟普通的二极管是一样的，也具有正向导通的特性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8Ticiayz6kgSxBMx8dRNFRGQFnibxFGiaSrmqQ4PhkPeReEjztpXov7LY077Jw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**☀**********最大安全工作区************

最大安全工作区是由一系列(电压，电流)坐标点形成的一个二维区域，MOS管工作时的电压和电流都不能超过该区域，如果超过这个区域就存在危险。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhlNx9gHbV5MLN8g4IA8TiciaTSlFD0EMm1Bv1ZghSI0DtOjhof3F8jKt0qko53JM0p6Hefeh9icEmSg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

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