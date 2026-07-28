# LED恒流驱动设计不简单，贵是有道理的，如何简单辨别真伪

原创 硬件笔记本 2023-10-16 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/Xo-IQVwlrYaLx3qO0BfLnA](https://mp.weixin.qq.com/s/Xo-IQVwlrYaLx3qO0BfLnA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**高品质的LED照明采用的是恒流驱动**，其中效率最高的是用开关电源芯片做的恒流驱动。效率通常可达90%以上；电路比阻容降压复杂很多，决定了其成本比较高。

LED恒流驱动电路的输入电源必须为**直流电**，**图1和图2**提供了两种交流转直流的方法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7HicvSL5mwKOzuHN8plbsWy6EKuaPge7P8J9yYUAUbf7d22n98yIhgOA/640?wx_fmt=png&wxfrom=13)

图1：利用变压器+整流得到低压直流

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7lJMxbNKhqQQjHUtfnFCMiashBr0mc29ZecOPou0tlZ5jDEZmicx1Gd5w/640?wx_fmt=png&wxfrom=13)

图2：利用开关电源得到低压直流

本期以LM3409芯片为例讲解LED恒流驱动的设计，在LM3409的数据手册里没有单灯珠的例子；因为产品需要，于是设计出如**图3**所示的**单灯珠（3A/10W）的恒流驱动电路**。MOS管采用的是P沟道的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7fcKZhCp0zibCzjSpeEALeQ5SiaZT0LoXDYS6771Iqs9IN7O696XXpGibQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图3：基于LM3409的LED恒流驱动电路

**图4、图5、图6**为完整的计算过程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W78JqhXlS6604wf96QmMZ9rfVnuJBm0KExFLskiaHoyBujmbpAKcvVqug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图4

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7zBDKKySFAKxicYBMUdnZvtiaOf1YNT4A9CRRW7mic8t3v7pqJNd9HFzibQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图5

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W72grfd75bDd1fZk9icCjibHic8xX2vOhNCBzDDU95kc8Wo5ciaRa544qhiaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图6

图7为实物调试，万用表显示的电流为1.9A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7W5EKKicXpexjnEo8dPnFq0o3dejCw5ZgTF1snKA35ytgZHp6jEh9Hbg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图7：实物调试

**芯片外围电路的设计离不开图芯片的框图**，如**图8**为LM3409芯片的框图，框图几乎包含了芯片的功能应用，对框图的理解有助于电路的设计。

①芯片的电源接口是VIN，经过线性降压到VCC，该压差给MOS管驱动电路供电，所以VIN、VCC间需要加个电容；

②EN输入内部是一个触发器，高电平有效，所以需要加一个下拉电阻；

③UVLO输入内部是一个比较器，UVLO外围电阻分压与参考电压1.24V比较，低于1.24V就关闭PGATE输出；

④CSP和CSN的输入内部是一个运放，检测流过MOS管的电流，所以两端接检流电阻；

⑤IADJ的输入内部提供一个5μA的恒流源，且最高允许1.24V，所以外围电阻的阻值最高1.24V/5μA=248kΩ，取250kΩ。该电阻越大，流过MOS管的电流就越大；

⑥COFF的输入内部是一个振荡器，振荡频率由COFF端的电阻电容充放电时间决定。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7mssxOQkGISnXNnILqfDsgorKZRIqocpeiaib5U39rfQXFHPKAicYQ4YBw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图8：LM3409芯片框图

**图9**是带铜基板的LED灯珠，铜基板必须安装在散热器上（涂上导热硅脂）。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmcuClQ3iaLVW4LesYWCUz5W7eU61ajOjKicketxf8Guiazicp7PDupYJveCL6ZxQIjRPPJZR0O9iaNaMCQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图9：3A/10W的LED灯珠

如果是串联多灯珠的应用，请参考LM3409芯片的数据手册，可以实现高流明的LED照明灯。

当然，开关电源方式的LED恒流驱动芯片有很多，但原理都一样，掌握其中一种即可。该类应用的LED照明在性能、质量和安全性上都很突出，但价格比较昂贵。**重要的是买LED照明灯的时候不要被忽悠。**

**简单的辨别方法是打开手机照相功能，并对着灯，如果手机出现屏闪，那么该LED照明灯不是恒流驱动的。**

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