# MOS管输入电阻很高，为什么一遇到静电就不行了？

原创 硬件笔记本 2024-01-16 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/yQPRha9SVFxPhYCHo-EZag](https://mp.weixin.qq.com/s/yQPRha9SVFxPhYCHo-EZag)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**一、MOS管输入电阻很高，为什么一遇到静电就不行了？**

  

MOS管一个ESD敏感器件，它本身的输入电阻很高，而栅-源极间电容又非常小，所以极易受外界电磁场或静电的感应而带电，又因在静电较强的场合难于泄放电荷，容易引起静电击穿。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/onNTjQVjQcnl8BWiaibF4BibxWpegRLRqlEH0RKpRG78JC5oWBDRjSR2gGzsPGo9Ps08VQgKEE5icad4q4LgsxfIuQ/640?wx_fmt=jpeg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

  

静电击穿一般分为两种类型：  

-   一是电压型，即栅极的薄氧化层发生击穿，形成针孔，使栅极和源极间短路，或者使栅极和漏极间短路；
    
      
    
-   二是功率型，即金属化薄膜铝条被熔断，造成栅极开路或者是源极开路。
    

  

  

**二、MOS管被击穿的原因及解决方案？**

  

第一、MOS管本身的输入电阻很高，而栅源极间电容又非常小，所以极易受外界电磁场或静电的感应而带电，而少量电荷就可在极间电容上形成相当高的电压 (U=Q/C)，将管子损坏。

  

虽然MOS输入端有抗静电的保护措施，但仍需小心对待，在存储和运输中最好用金属容器或者导电材料包装，不要放在易产生静电高压的化工材料或化纤织物中。

  

组装、调试时，工具、仪表、工作台等均应良好接地。要防止操作人员的静电干扰造成的损坏，如不宜穿尼龙、化纤衣服，手或工具在接触集成块前最好先接一下地。对器件引线矫直弯曲或人工焊接时，使用的设备必须良好接地。

  

第二、MOS电路输入端的保护二极管，其导通时电流容限一般为1mA，在可能出现过大瞬态输入电流(超过10mA)时，应串接输入保护电阻。因此应用时可选择一个内部有保护电阻的MOS管应。

  

还有，由于保护电路吸收的瞬间能量有限，太大的瞬间信号和过高的静电电压将使保护电路失去作用。所以焊接时电烙铁必须可靠接地，以防漏电击穿器件的输入端，一般使用时，可断电后利用电烙铁的余热进行焊接，并先焊其接地管脚。

  

  

# **三、MOS****栅源（G-S）极下拉电阻有什么作用****？**

  

MOS是电压驱动元件，对电压很敏感，悬空的G很容易接受外部干扰使MOS导通，外部干扰信号对G-S结电容充电，这个微小的电荷可以储存很长时间。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnl8BWiaibF4BibxWpegRLRqlEAUBia5Hluc4RYopL5Y750iaJs8vfuUicb64PBZm62z1GXbLXPJibNmFNkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

在试验中G悬空很危险，很多就因为这样爆管，G接个下拉电阻对地，旁路干扰信号就不会直通了，一般可以10~20K。这个电阻称为栅极电阻。

  

**作用1：**为场效应管提供偏置电压；

**作用2：**起到泻放电阻的作用(保护栅极G~源极S)。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/onNTjQVjQcnl8BWiaibF4BibxWpegRLRqlEhtoZGMHlWBNxpOT5ZBZvaOHCoFHq6loAE5pzpKxM8xCt7z0J1ScIicw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

  

第一个作用好理解，这里解释一下第二个作用的原理。保护栅极G~源极S，场效应管的G-S极间的电阻值是很大的，这样只要有少量的静电就能使他的G-S极间的等效电容两端产生很高的电压，

  

如果不及时把这些少量的静电泻放掉，他两端的高压就有可能使场效应管产生误动作，甚至有可能击穿其G-S极。这时栅极与源极之间加的电阻就能把上述的静电泻放掉，从而起到了保护场效应管的作用。

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