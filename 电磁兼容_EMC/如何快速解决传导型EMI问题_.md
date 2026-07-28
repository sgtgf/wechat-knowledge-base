# 如何快速解决传导型EMI问题？

原创 硬件笔记本 2024-01-06 08:58 四川

> 原文地址: [https://mp.weixin.qq.com/s/GLJgCeLmXBCXxDVIQgQoHA](https://mp.weixin.qq.com/s/GLJgCeLmXBCXxDVIQgQoHA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

# 摘要

EMI抑制方案有许多组合，包括滤波器组合、变压器绕线安排，甚至PCB布局。本文提供一种结合共模电感与差模电感的磁混成，称之为混成式共模电感器。不仅保留共模电感的高阻抗特性，同时利用其很高漏电感当成差模电感用。不仅可以缩小体积节省滤波器成本，更提供了工程师快速解决传导型EMI 问题的方法。

  

# 混成式共模电感的原理与功能

在常规单级EMI 滤波器电路中，如图一，有共模噪声滤波器 (LCM、CY1与CY2) 与差模噪声滤波器 (LDM、CX1与CX2) 分别形成”LC滤波器”衰减共模与差模噪声。共模电感通常以高导磁锰锌 (Mn-Zn) 铁氧体 (Ferrite) 制成，电感值可达1~50mH。共模电感器，如图二，由于绕线极性安排，虽然两组线圈分别流过负载电流，但铁芯内部磁力线互相抵消，一般不存在铁芯饱和的问题。常用的铁芯有环型 (Toroidal)、UU型 (UU-9.8、UU-10.5等)、ET型与UT型，如图三。为了获得足够的共模电感值，要尽量让两组线圈的耦合达到最好，所以多采用施工成本较高的环型或一体成型的ET与UT 铁芯。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxcpZGbA6kemibnzpUNmDLdTeNIe8mNt1YoS7AK1PSlLJU25vxuiaNBCicg/640?wx_fmt=png)

图一、常规EMI滤波器结构

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxw0kwZdBT1JricWuzh5zYYgZdEhQ5pMVXrA7blEtyAKSK3gD2194Lfvw/640?wx_fmt=jpeg)

图二、共模电感器

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjx3ZS7bmk4Nfzoac8icZdeeK880lr18sQU98WdVEvWuwL4udN0prWiaB5w/640?wx_fmt=jpeg)图三、共模滤波器(a)环型(b)ET型(c)UU型(d)UT型

  

从共模电感的工作原理与等效电路来看，如图四所示，双绕组的共模电感虽然有很好的耦合，但是还是存在漏电感，漏电感就是由漏磁通造成。这个漏电感在等效上串联在电路上，功能上与差模电感无异。所以可以说，共模电感器的漏电感可以利用来做为差模滤波器。然而如图三所示的共模电感器，由于机械结构的关系，其漏电感都很小，约莫在数mH到100mH。如果要得到更大的漏电感，只有增加匝数一途，如此一来，线径变细，电流耐受降低。要改善只有增加铁芯尺寸，当然也增加了滤波器的体积与成本。许多要求极高共模电感的应用，其实不在滤除共模噪声，而是要得到较大的漏电感当差模滤波器用，只是许多工程师不甚清楚罢了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxWRy2icoiaKnDDXic1icDmVLPgTbUUjGxpAv1iantqfWdH7vug9veNCwhia0w/640?wx_fmt=png)图四、共模电感器的等效模型

  

为了增加共模电感的漏电感，特殊的铁芯结构与绕线方法称为混成式共模电感器 (Integrated Common-mode Choke) 或者称混成共模电感器 (Hybrid Common-mode Choke)，如图五所示。这样的结构，不仅可以保留共模电感量以充分滤除共模噪声，而且其漏电感形成的差模电感可以高达数百mH，配合适当的X电容，可以有效的滤除中低频段 (150kHz~3MHz) 的差模

信号。实验证明混成式共模电感器不仅具有很好的滤波特性，低成本与小体积更是最大的优点。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxibazxwUjybiaxiczyLAKFewuUrKTG3L8n152Nk1WEc7dJh1GlG5hibhk7Q/640?wx_fmt=jpeg)

图五、立式与卧式混成式共模电感器  

  
  

# 主要的电气参数

混成式共模电感器除保留了常规的共模电感器的规格外，还兼具差模电感的特性。一般除了用共模与差模电感量标示外，还要以以下参数来规范。

(1)共模阻抗 (Common-mode Impedance, ZCM) : 相较于电源阻抗稳定网络 (Line Impedance Stabilization Network, LISN)的高频等效电阻 (共模为25W)，滤波用的共模阻抗越大越好。除了铁芯材质外，绕线的方法(槽数)更影响高频阻抗的高低。图六为共模阻抗的量测法，图七为ASU-1200系列共模阻抗特性图。由于绕线的层间杂散电容 (Stray Capacitance, CS) 存在，高频时将变为电容性；CS越小越好。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxa9dbzNG8DkfiboRZ9dS87pKOibAck1pp4AKRB05XwLlX6GfSwMRxuXlA/640?wx_fmt=jpeg)

图六、共模阻抗量测

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxHJLcficxe0aolPriamJA0l4u1kMFttPt1cDU8LSrPJcNv8B56ydzETzA/640?wx_fmt=jpeg)

图七、ASU-1200系列共模阻抗特性图  

  

(2)共模电感 (Common-mode Inductance, LCM) : 传统上，习惯以外加测试电压 (VOSC)与频率来规范共模电感。依铁芯材料特色，共模电感以VOSC = 1Vac @100kHz 量测较为稳定。

(3)差模阻抗 (Differential-mode Impedance, ZDM) : 同样的，量测等效差模阻抗的方法如图八所示，用差模阻抗特性图 (如图九)来定义差模滤波的效能；相较于LISN 的等效电阻100W，差模阻抗也是越大越好。当然高频时一样会变成电容性，但只要阻抗够大，一样有滤波的效果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxjeYzbVMc28N7FkqFMDCmhkWmFHJJHWfl4nZsc1dfBEqAkTyDQfibtsg/640?wx_fmt=jpeg)

图八、差模阻抗量测  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxcaO8BbeG7QXPITKytib6Kf0R3LOxm8ObAZPFCaTsF8iaN3KrAZOa6prQ/640?wx_fmt=jpeg)

图九、ASU-1200系列差模阻抗特性图  

  

(4)差模电感 (Differential-mode Inductance, LDM) : 差模电感一样可以VOSC = 1Vac @100kHz 来规范。在实用上，混成式差模电感量必须在100mH 以上，配合X电容，才能有效的滤除差模噪声。

(5)差模饱和电流 (Isat) : 如前所述，因为等效差模电感必须流过负载电流，在负载电流的峰值下，差模电感不能饱和，否则其滤除噪声的能力将降低。图十为一般桥式整流滤波电路的输入电流波形。必须确保在最大电流峰值下，差模电感量没有因饱和而下降。传统上，以电感值衰减20% (相对于没有直流偏置) 为其差模饱和电流。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxlib5kScI4lGrPFENqkeC6UU5liacyTpklDHN7kzy9uLeDkAJb7NnqcuA/640?wx_fmt=png)

(a)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxToibnNYVpibEGKeD4racMib1ApOVsZ1lW9kibibOnk6hhHOnBRZA1CqRVoA/640?wx_fmt=jpeg)

(b)

图十、(a) 全桥滤波电路 (b) 输入电流波形

  

(6)有效承受电流(Irms) : 等效上就是规范线径粗细。虽然如图十的输入电流波形，但其有效值并不高，一般可以两倍的输出功率除以最低输入电压估计。例如全电压范围25W 的电源适配器，输入电流的有效值约为 2\*25W/90Vac = 0.55A。

表一为ASU-1200 系列的电气参数表

  

LCM(mH)

±20%

LDM(mH)

±10%

Isat(A)

Irms(A)

ASU-1201

4.0

143

3.2

1.00

ASU-1202

6.0

220

2.9

0.80

ASU-1203

9.0

310

2.4

0.75

ASU-1204

12.0

410

2.2

0.75

ASU-1205

16.0

530

1.9

0.60

ASU-1206

20.0

670

1.8

0.55

  
  

# 应用电路

混成式共模电感器，简单说就是一个传统共模电感与一个(或两个)差模电感的混成。在应用上，EMI工程师必须选定需要的共模电感、差模电感以及相关的差模饱和电流与承受电流。ASU-1200 系列混成式共模电感适合应用在25W到50W的Flyback 电路或120W以下PFC 电路。图十一为两种应用混成式共模电感器的Flyback 电路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxTaiaVHBk3McCogCjBgEv2MPQ4PpiakiczpyegNX4mptKTlPmz5N2BQlJA/640?wx_fmt=png)

(a)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxicSmc4VEmAlnvwszQecQa9zegh5maq4UOiaKlAjzImSXZ5F1KMnialfAQ/640?wx_fmt=png)

(b)

图十一、两种应用混成式共模电感器的Flyback 电路(a) 常规位置搭配X电容 (b) 置于桥整后与电解电容形成P型滤波器

  

图十二为应用在临界导通模式 (Boundary Conduction Mode) 主动功因改善 (PFC) 电路的滤波器。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxgVusL22y3eCBUOZXvELpYFd4D7iaGPd0TvSV5fcic84Ys7ib0WDys1TCw/640?wx_fmt=png)

图十二、应用于PFC电路的混成共模电感器

  

图十三到图十五为应用ASU-1203混成式共模电感器在一个24W (12V/2A) 的离线式Flyback 电源中EMI 的表现。明显地可以看出这种共模电感不只有效的衰减共模噪声，同时其差模电感也大量的衰减差模噪声。整体而言，装有ASU-1203 的EMI 表现，在中低频段约有30dB的衰减。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxV9pCrvJfXRgiaSomBZyqiaiaUhHCdphjRqnfJYn0c7LncsgD3qcJpFEeg/640?wx_fmt=png)

图十三、共模噪声衰减 (蓝色曲线为装有ASU-1203 的共模噪声量测图)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxyBZ2UfERsFJ8ajArm1vX3kl6WrQNHscy3aC2WkkX6Wdnu0ACTYA32w/640?wx_fmt=png)

图十四、总噪声衰减 (蓝色曲线为装有ASU-1203 的总噪声量测图)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaLHicPibhLtZxkA1lTt8RJjxbmOFwcF4scaicElMjZ9sOWSCJIm5D8Zt2CtjMicbtjWvNk9PlSbtR2WQ/640?wx_fmt=png)图十五、差模噪声衰减 (蓝色曲线为装有ASU-1203 的差模噪声量测图)

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条鹏城电路。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。