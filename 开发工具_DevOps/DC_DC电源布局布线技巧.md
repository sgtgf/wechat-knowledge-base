# DC-DC电源布局布线技巧

原创 硬件笔记本 2023-09-21 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/W5gGB6hIzKhzumH15efyDA](https://mp.weixin.qq.com/s/W5gGB6hIzKhzumH15efyDA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

在开关电源的设计中，PCB布局设计与电路设计同样重要。合理的布局可以避免电源电路引起的各种问题。不合理的布局可能导致输出和开关信号叠加引起噪声增加、调节性能恶化、稳定性欠佳等。采用恰当的布局可以避免这些问题的发生。

  

**1.DC-DC的环流**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMX9XjYLjNUfYiaxmIZo3YIlEdgYW1jIdTEkGT0cWkWFA0ic64HUx33xTQ/640?wx_fmt=png)

图24-1：开关元件Q1导通时的电流路径

如图24-1的红色线表示开关元件Q1导通时流过的主要电流和路径以及方向。Cbypass是高频用去耦电容器，CIN是大容量电容器。开关元件Q1导通的瞬间，流过急剧的电流，其大部分由Cbypass提供，其次由CIN提供，缓慢变化的电流则由输入电源提供。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMsug3oqVsSluicElIu8bfmIUXFR80mvqr2rSI4jThiauTiaJ6MOOuKyNOQ/640?wx_fmt=png)

图24-2：开关元件Q1关断时的电流路径

图24-2的红色线表示开关元件Q1关断时的电流路径。续流二极管D1导通，电感器L中蓄积的能量会释放到输出侧。因为降压转换器的输出拓扑结构中串联了电感，所以输出电容器的电流虽然上下波动，但比较平滑。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMhCkXf8uUGCicIrRYBTRS8pibAxrDfia5kg7dWHI01nNmiaq97h6gWZkajQ/640?wx_fmt=png)

图24-3：电流差分、布局方面的重要路径

图24-3的红色线表示图24-1和图24-2的差分。开关元件Q1从关断到开通，从开通到关断切换时，红色线部分的电流都会急剧变化。由于这个变化很快，所以会出现含有较多高次谐波的波形。该差分系统在PCB布局时是重要之处，需要给予最大限度的重视。

  

**2.PCB布局要点**

PCB布局要点大致如下：

1：将输入电容器，续流二极管和IC芯片放置在PCB的同一个面上，并尽可能靠近IC芯片放置。

2：为改善散热条件可以考虑加入散热过孔阵列。

3：电感可使来自开关节点的辐射噪声最小化，重要程度仅次于输入电容，需要放置在IC的附近处，电感布线的铜箔面积不要过大。

4：输出电容器尽量靠近电感器放置。

5：反馈路径的布线尽量远离电感器、续流二极管等噪音源。

  

  

**3.输入电容器的布局**

设计布局时，首先应放置最重要的部件：输入电容器和续流二极管。在设计电流较小的电源（Iout≤1A）时，需要的输入电容也比较小，有时一个陶瓷电容器可以同时作为CIN和Cbypass来使用。这是因为陶瓷电容器的电容值越小，频率特性越好。但是，由于不同陶瓷电容器的频率特性不同，使用前确认好实际使用产品的频率特性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdM412nOhtQnuYX9LGg9lnc3YObpsBhmdNezlcRrHh9XOdZSey5KH36Ng/640?wx_fmt=png)

图24-4：陶瓷电容的频率特性

CIN:1µF 50V X5R 10µF 50V X5R

CBY:0.1µF 50V X7R 0.47µF 50V X7R

如图24-4所示，当使用大容量电容器作为CIN时，一般而言其频率特性并不好，所以通常需要与CIN并联配置一颗频率特性优异的高频去耦电容器Cbypass，Cbypass通常使用表面贴装型的叠层陶瓷电容器（MLCC），一般选择X5R或X7R型，容值为0.1μF～0.47μF的电容。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdM5NzhGa92So1ARZTx9aD9h89tqdkrasnaGB3cR2PrtCF1RO6yuhQISw/640?wx_fmt=png)

图24-5：理想的输入电容器的布局

如果Cbypass、IC的VIN引脚与GND引脚的距离较远，受布线寄生感抗的影响会产生电压噪声/振铃，所以尽量缩短二者之间的布线距离。降压转换器的应用中，即使将Cbypass放置在离IC最近的位置，CIN的地上也存在着数百MHz的高频。因此建议CIN的接地和输出电容器Cout的接地要距离1cm～2cm进行布局。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdM4dI7MMteg11QfyDwRQo0WS6c1qfa2MhgOricrAvA2rOsYDWVBibwQrhA/640?wx_fmt=png)

图24-6：CBYPASS放在与IC相同面的最近处时

CIN放置在距离2cm处也不会有太大的问题。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMbHcMU67ms4WWPbZ2CZA3IkkFRWpib0ib14kUUrqlun54MlrxibsJNdg1w/640?wx_fmt=png)

图24-7：将CIN放在IC的背面纹波电压可能会增大

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMkXnbgd5ZJTjnGI63U23bvk8RnCUiaowBQ8eveSXibQMXvtKib3PGuiczLA/640?wx_fmt=png)

图24-8：不理想的输入电容布局受过孔和电感的影响噪声会增加

  

**4.续流二极管的布局**

二极管D1要放置在与IC同一层且最靠近IC引脚的位置，图24-9是Cbypass、CIN及二极管D1的理想布局。如果IC引脚到二极管的距离过长，由布线的寄生电感引起的噪音毛刺会叠加到输出上。续流二极管要使用最短且较宽的布线，直接连接到IC的开关引脚和GND引脚。如果借助过孔和底层连接，受过孔寄生电感的影响，毛刺噪声将增加，因此续流二极管的布线绝对不能借助过孔。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMKw0Ld5A6ZuE2RuxgfeNojUIODvSJmlHwuzPTngOS5V6YZNiaCOG0eXA/640?wx_fmt=png)

图24-9：理想的续流二极管布局

  

图24-10还展示了其他不合理的布局，续流二极管与IC的开关引脚及GND引脚距离较远，这会导致布线上的寄生电感增加从而导致噪音毛刺变大。为了改善布局不当产生的毛刺噪声，有时可能会追加RC缓冲电路作为应急处理。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMMJuoSUP5SdEWibicP1RQcd33seudDWPrX9gLlMc8ribIVEgbKhhphu61A/640?wx_fmt=png)

图24-10：不理想的续流二极管布局

  

如图24-11所示缓冲电路需要放置在IC的开关引脚和GND引脚的近处。即使放置在二极管的两端，也不能吸收由于布线的寄生电感产生的毛刺噪声（图24-12）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMZ4PqSlZ3NVTUeQCBR5gcZZZmsvx53gHvF8BMJyiaMjAo5ftsggUjcdw/640?wx_fmt=png)

图24-11：理想的缓冲电路布局

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMvWGtCELM42ND9CpICyU6d5NPzLF7Iqa6hCGlcq4LhTKSMiaHXfgQMlQ/640?wx_fmt=png)

图24-12：不理想的缓冲电路布局

  

**5.热焊盘**

PCB的铜箔虽然有助于散热，但因为厚度不够，超过一定面积就无法得到与面积相当的散热效果。利用基板散热是通过基板的板材实现的，使用散热过孔，能够有效地将热传递到基板的另一面并大幅降低热阻。

  

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