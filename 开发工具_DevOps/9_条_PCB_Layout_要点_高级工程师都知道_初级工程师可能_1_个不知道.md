# 9 条 PCB Layout 要点，高级工程师都知道，初级工程师可能 1 个不知道

原创 硬件笔记本 2023-10-16 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/AOgeMsm0VJeAJN4kqZvMyw](https://mp.weixin.qq.com/s/AOgeMsm0VJeAJN4kqZvMyw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

在集成电路应用设计中，项目原理图设计完成之后，就需要进行PCB布板的设计。PCB设计是一个至关重要的环节。设计结果的优劣直接影响整个设计功能。

  

因此，合理高效的PCB Layout是芯片电路设计调试成功中至关重要的一步。本次我们就来简单讲一讲PCB Layout的设计要点。

  

  

**PCB Layout设计要点**

**元器件封装选择**

**电阻选择:** 所选电阻耐压、最大功耗及温度不能超出使用范围。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8dM0IaPdicQ23H9edJO09uJjgzjKg3Kj18POSsqOhthd2BEsI1hLjTdg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG89WvkvcNtwEZ0DNmLYP8CxibXOMMDFk5NkzmGDDvLrGr5mmN2lnxaTkQ/640?wx_fmt=png&wxfrom=13&tp=wxpic)

  

**电容选择:** 选择时也需要考虑所选电容的耐压与最大有效电流。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8ibs7rr4iacu8037x8DfBicic8yPydomNgH5fqFSHZiabkwjYPwTxHvKM7Qg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

**电感选择:** 所选电感有效值电流、峰值电流必须大于实际电路中流过的电流。

  

  

**电路设计常见干扰**

  

**串扰:** 设计线路平行走线距离过长时, 导线间的互容、互感将能量耦合至相邻的传输线。可以通过以下方法减少串扰影响：

**1.加入安全走线**

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8nIVcR3DIMWgpaHwo8qU1ibAhK6aoEibg3ubT6bGRPZiazS3lTfWQhCQDA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**2.实际时尽量让相邻走线互相垂直**  

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8chyKLoe89xu9ux8jNHOArmoUN6ZeiaJLxmyiaKrW7t5BX0xuI5jM3dzw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**3.每走一段距离的平行线，增大两者间的间距**  

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG87q905hfEibDEqZzJib2AWYD9JVZHia5nGqic18r3lYB189ChqbYa0kHwPg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**反射:** 由于布线的弯角、分支太多造成传输线上阻抗不匹配，可以通过减少线路上的弯角及分支线或者避免直角走线及分支线补强来进行改善。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8SO9AlB1mhJBut8tODwwm09eoUwhjJPAcqTHoaPnBtiaveNc0JxJpngw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**确定接地方式**

**单点接地(适用于低频电路)：**所有的电路接地线接到公共地线同一点， 接线简单且减少地线回路相互干扰。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8qc12uS3alcp2rK4leB1rVlaycP8dvcdQxRp2zsH0dr23BG4aKIQuXQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

多点接地(适用于多层板电路/高频电路)：系统内部各部分就近接地，提供较低的接地阻抗。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8xGu2VvmicWH4RGmk4b1sl8Ez1YQSV65KYhpA396DStQy1oM6A3eOBzQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**增加滤波、旁路电容**

  

为保证输入/输出电压稳定，增加输入/输出电容。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8P4ibwFqdYtzh4atBZ2724fLiaVic1EmH0DbLbmQQicUSEzqe4EShavckIg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

在电源和IC间增加旁路电容，以保证输入电压稳定并滤除高频噪声。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8HicYOb0fQVfj1ib4JP8g7I3drTiaBX9V984NwkwYrI4VFvnw6uiaQHDDoQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**阻抗位置设计**

**相对来说阻抗越高的位置, 越容易被干扰。**如下为一同步降压芯片的PCB阻抗位置设计。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8LPwdX4szgRAJcBNKUvr74gKIEEhSZejsWV8A3zk4wr0tB570zibic5cA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8KZOibQsH1oAB4xicG9ha99QngZllxKFx8BHX7oQ08iblXhmP06YuZ2yzg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**PCB Layout设计技巧**

**电源/地线处理**

  

既使在整个PCB板中的布线完成得都很好，但由于电源、 地线的考虑不周到而引起的干扰，会使产品的性能下降. 布线时尽量加宽电源、地线宽度，最好是地线比电源线宽，它们的关系是：**地线＞电源线＞信号线。**

  

对数字电路的PCB可用宽的地导线组成一个回路， 即构成一个地网来使用（模拟电路不能使用该方法)。

用大面积敷铜层作地线用，在印制板上把没被用上的地方都与地相连接作为地线用。或是做成多层板，电源、地线各占用一层。

  

**数字与模拟电路的共地处理**

**数字电路与模拟电路的共地处理:** 数字电路与模拟电路共同存在时,布线需要考虑之间互相干扰问题，特别是地线上的噪音干扰。

  

    数字电路的频率高，模拟电路的敏感度强，对信号线来说，高频的信号线尽可能远离敏感的模拟电路器件。

  

    对地线来说，整个PCB对外连接界只有一个端口，所以必须在PCB内部进行处理数、模共地的问题，而在板内部数字地和模拟地实际上是分开的它们之间互不相连，只是在PCB与外界连接的端口处(如插头等), 数字地与模拟地有一点短接，请注意，只有一个连接点。

  

**信号线分布层**

    信号线布在电源(地)层上: 在多层印制板布线时，由于在信号线层没有布完的线剩下已经不多，再多加层数就会造成浪费也会给生产增加一定的工作量，成本也相应增加了，

    为解决这个矛盾，可以考虑在电(地)层上进行布线。**首先应考虑用电源层，其次才是地层。因为最好是保留地层的完整性。**

**信号流向设计**

PCB布局设计时，应充分遵守沿信号流向直线放置的设计原则，尽量避免来回环绕。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8YEwqwZruzicnZibKfZcCqVapZMDfYeBoRX4llAtDsjGUicLeTiaia7icry7w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8oEEY6JRcvs95qtZChegLNc9Mtf9pE3VSmLLW38Lr7F8ibFJTnsF9ejA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**PCB Layout设计实例**

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG83nSpq9ubRRe6zZrFibqhmKtVkib3lbuCJ1yibutcoQnVRxcDb0FYeodicQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**Layout设计建议**

1\. 驱动芯片与功率MOSFET摆放尽可能靠近;

2\. VCC-GND(CVCC) / VB-VS(CBS)电容尽可能靠近芯片;

3\. 芯片散热焊盘加一定数量过孔并且与GND相连接(增加散热、减小寄生电感);

4\. GND布线直接与MOSFET 源极(source)相连接, 且避免与源极(source)-漏极(drain)间大电流路径相重合, VS 同理GND布线原则(避免功率回路与驱动回路重合);

5\. HO/LO布线尽量宽(60mil-100mil,驱动电流比较高,降低寄生电感的影响);

6\. LIN/HIN 逻辑输入端口尽量远离HS布线(避免过高的电压摆动干扰到输入信号)。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FPLTH8yGOl0TH5WZrdlyiaG8ibAUnKZA6A8AHyLmghFA9cd0y3hmHBqonMvgMS4c4rulWmIszopiawJA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

硬件工程师都在关注我们

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