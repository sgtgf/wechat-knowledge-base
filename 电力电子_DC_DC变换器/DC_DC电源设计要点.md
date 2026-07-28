# DC-DC电源设计要点

原创 硬件笔记本 2023-10-28 10:57 四川

> 原文地址: [https://mp.weixin.qq.com/s/JSh2eV\_sqj8YW5NP3g024w](https://mp.weixin.qq.com/s/JSh2eV_sqj8YW5NP3g024w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

DC-DC转换器可以实现各种电压电平的高效电源转换和供电，但是随着需求的不断上升，需要更高功率密度更高效率以及更小的尺寸，DC-DC转换的PCB设计就更为重要了。下面说一说DC-DC转换器 PCB设计的一些要点：

  

**走线长度**

**在高频转换器中，承载高速开关信号的走线长度对于保持信号完整性和降低EMI至关重要。**  

  

较长的走线可以充当天线并辐射电磁能量，可能会对其他组件或电路造成干扰，此外，较长的走线可能会引起延迟、信号反射、寄生效应，从而导致转换器效率和稳定性降低。

  
因此走线长度应该尽可能短，尤其是对于高速时钟和数据时钟，适当的阻抗匹配技术和受控阻抗走线可进一步优化信号传输并最大限度地减少信号衰减。

  

**环路区域**

环路区域是指 PCB上的信号走线及其返回路径形成的封闭区域，**在DC-DC转换器等高功率和高频电路中，最小化环路面积对于降低辐射 EMI 至关重要。**  

  

越大的环路面积会导致更多的磁通量与环路耦合，从而导致更高的 EMI。

  
最小化环路面积的主要措施是：**通过将信号走线放置在靠近其返回路径的位置（例如利用接地层/紧密间隔的电源层）来最小化环路面积。**  

**器件选择和电容摆放**

在关键信号和电源线中添加铁氧体磁珠和共模扼流圈等滤波器组件可以减弱传导电磁干扰并防止进一步传播。连接滤波电容时，正确的位置对于滤除 EMI 至关重要。

  
滤波元器件应该尽可能靠近 DC-DC转换器放置，**在 IC 和有源元件的电源引脚附近正确放置去耦电容有助于抑制高频噪声并提高EMI性能。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/S9BIsMrEs28MbToBpoV1wkdichbInuSyLp1UUqCvXgsTYmAlPZwHbyXrjeDU053uxmYevn1icZTFJAy7h2yTUEsQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

去耦电容的放置

**寄生电感**

寄生电感是导电路径（例如迹线/电线）的固有电感，取决于其物理尺寸和材料特性。在DC-DC 转换器等高频电路中，路径电感会影响转换器的效率和性能。

  

高寄生电感会导致电压下降，开关损耗增加以及转换器效率降低，还有可能导致电路中的电压过冲和振铃，影响信号完整性。

  

为了最大限度地减少寄生电感，PCB工程师可以使用**更宽的走线，更短的路径，或者利用专用的接地层/电源层为高电流/开关信号创建低电感返回路径。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/S9BIsMrEs28MbToBpoV1wkdichbInuSyLMiaYf7EZIUTH0zrLNn6otJmS6AHSLuuDiaLEpGqA4kc0F8AfjMuXmv5w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**DC-DC 转换器接地环路的影响**

在设计DC-DC转换器时，PCB工程师必须要考虑电流环路并正确放置组件，这样可以让环路在物理上尽可能小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/S9BIsMrEs28MbToBpoV1wkdichbInuSyL7uV8HoVfHZCJPOOoAM7YdF0kT6PvsmwbQbqsexppECXIG2oW5YhLyA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

DC-DC 转换器中的电流环路

  

接地环路过长会导致以下问题：  
**①电磁干扰**：接地环路可以充当天线，导致 EMI 辐射到周围环境中。  

  

**②噪声和信号衰减**：流经接地环路的电流会在不同接地点之间产生电压差，可能会导致不需要的噪声被引入敏感信号路径，从而导致信号衰减和信噪比降低。

  

**③共模噪声**：接地环路可能导致共模噪声耦合到敏感的模拟或数字电路中。这种噪声会破坏信号精度，尤其是在低电平模拟测量或高速数字通信中。

  

**④寄生接地电流**：循环电流可以在不同接地点之间流动，从而导致寄生接地电流。寄生电流会产生电压降并影响转换器的性能，从而导致效率低下和潜在的热问题。

  

**⑤接地反弹**：接地环路可能会导致接地参考平面之间存在电压差，从而导致接地反弹。接地反弹是指开关期间接地电压的瞬态增加，这可能会破坏信号完整性并影响数字电路的正常运行。

  

**缓解措施**

地平面：在 PCB 上使用坚固的接地层可确保电流的低阻抗返回路径，从而降低接地环路的风险。

  

地面分割：对不同功能块或组件的接地层进行适当的分割可以防止接地电流相互干扰。

  

将模拟地和数字地隔离：在物理上分离模拟和数字接地层可以防止敏感模拟电路和噪声数字电路之间的干扰。

  

跟踪路由：确保承载高电流或高频信号的走线具有低电感返回路径（例如，使用短而宽的走线或接地过孔）有助于最大限度地减少接地环路的可能性。

  

总结来说，**走线长度和环路面积**是DC-DC 转换器（尤其是高频开关转换器）PCB 设计中的关键因素。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源信号完整性学习之路。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。