# 老工程师都是这样计算开关电源“Y电容”

原创 硬件笔记本 2023-12-28 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/zLU5r4WlWpRlZKFC0b4sDA](https://mp.weixin.qq.com/s/zLU5r4WlWpRlZKFC0b4sDA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**开关电源基本原理图**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmflPvkctVEeu7y26siczYBdyNpf6KYuL6TUy0fUTOgiaUNia5O7k4xzzLazcmEYjjk1pPrPRiaMiagaFYQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**1.一次电路(Primary Circuit) ：**

直接与外部电网电源连接的.

  

2.二次电路(Secondary Circuit)：

位于设备内与一次侧相隔离的那部分电路.

  

3.Y-电容(Y-Capacitor)：

跨接于一次电路与地或一,二次电路之间的高压电容.

  

  

**开关电源接地、漏电流、耐压测试（安规）**

  

1.接地连续性测试(Ground Continuity Test)：

  

A.定义：

从Inlet PG 端上通过电流至使用者可接触的接地端,确保其阻值小于规格值,达到接地保护的功用.

  

B.标淮：

1.输入电流不大于25A,(DC or AC)电压不超过12V,时间至少3秒(TUV要求).

  

2.测试结果：电阻值不得大于100 mΩ.

  

2.接地泄漏电流测试(Earth Leakage Current Test)：

  

A.定义：

通过一个被安规单位(UL,TUV,CSA…)认可的“人体阻抗模拟电路”,测量当待测物 (SPS)接通电源时在可触到的金属部件与地之间流经人体的电流量.

  

B.标淮：

1.输入电压为额定电压上限的106%.

  

2.测试结果：Class I≦3.5mA;Class II≦0.25mA.

  

3.耐压测试(Dielectric Withstand Voltage Test)：

  

A.定义：

又称高电压介电测试,即 Hi-pot(High Potential)Test,从一次侧对二次侧(或一次侧对地)之间实施高电压以确定内部绝缘层有隔离危险电压的功用.

  

B.标淮：

1.输入电压为下列所示:

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmflPvkctVEeu7y26siczYBdyQI7d3SUGRqMt1TIiap9IZh879ibufmDVAZjXl6Ak16cXFbA6QdbFW51Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

2.测试结果：不可有绝缘击穿现象(Breakdown).

  

  

**耐压测试交流与直流之区别**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmflPvkctVEeu7y26siczYBdy8qPicUmcXpX4NIPVQaMiaWAjqKUheZ2bjpZhy1wIrRjVsz18dvGVHvyQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

  

**耐压测试之漏电流计算方法**

  

1\. DC 测试之漏电流设定：

  

DC 测试电流非常小(μA),一般一次侧对二次侧之间实施DC高电压,漏电流设定:0μA~100μA.

  

2\. AC 测试之漏电流理论计算：

  

计算公式：I =2π\*f\*V\*Cy

  

其中：

f— 测试电压频率 ( 50Hz or 60Hz )

V— 测试电压 ( unit : volt )

Cy—跨接于一次侧与地或一,二次侧之间的Y电容总和.

  

所以:Imin \= 2π\*f\*V\*Cymin

Imax = 2π\*f\*V\*Cymax

  

Cy 电容计算 :：Cy =Cy1 Cy2 Cy3 …

  

若一次侧地与二次侧地之间跨接一颗Y电容(Cy0 ),则：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmflPvkctVEeu7y26siczYBdy0U73iccUUgjMq2KQnYOjAZkQibnb0qKGJXtK8bIUicNsJyQN1FUVNQX2A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

Y电容公差一般为 ：/-20% OR /-10%

  

3\. 实际设定AC 测试漏电流时需考虑下列因素:

  

1.考虑初始漏电流 ：

初始漏电流即在无待测物状态下,所测得的漏电流.  

  

2.考虑Y电容公差 ：

  

电源工程师在选择同一颗容量大小的Y电容时,往往有几个型号,但其公差不一样(有的是 /-10%;有的是 /-20%),给实际漏电流设置带来麻烦,因此我们应该按 /-20% 公差去设定.否则须依 /-10% 公差去设定.

  

3.考虑实际线路中存在的分散电容,因此漏电流范围设定：(下限取整 :上限入整)

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。