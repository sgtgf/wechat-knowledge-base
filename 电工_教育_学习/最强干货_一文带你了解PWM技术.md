# 最强干货！一文带你了解PWM技术

原创 硬件笔记本 2023-10-18 07:37 四川

> 原文地址: [https://mp.weixin.qq.com/s/z9JxMOjQ9QK3DBlV4MqWCA](https://mp.weixin.qq.com/s/z9JxMOjQ9QK3DBlV4MqWCA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

PWM有着非常广泛的应用，比如直流电机的无极调速，开关电源、逆变器等等，个人认为，要充分理解或掌握模拟电路、且有所突破，很有必要吃透这三个知识点：

-   PWM
    

-   电感
    

-   纹波
    

PWM是一种技术手段，PWM波是在这种技术手段控制下的脉冲波，如果你不理解是把握不住PWM波的！  

  

如下图所示，这种比喻很形象也很恰当，希望对学习的朋友有所帮助与启发。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWxibetzQ2LBtYHktMZUfQtBHmGbfZ8Vtb7pWo5Mx4Vaic5bgPW77CCmNw/640?wx_fmt=jpeg)

PWM全称Pulse Width Modulation：脉冲宽度调制（简称脉宽调制，通俗的讲就是调节脉冲的宽度），是电子电力应用中非常重要的一种控制技术，在理解TA之前我们先来了解几个概念 。

  

**脉冲波的基本信息如下图所示：**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWBOPs61r5VdQfjN8MiaBQHO3AicoPbC1xDlXXrUPfgQPkmr0SiaSG7M7UQ/640?wx_fmt=png)

  

-   **脉冲周期T：**单位是时间，比如纳秒ns、微妙μs、毫秒ms等；  
    

-   **脉冲频率f：**单位是赫兹Hz、千赫兹kHz等，与脉冲周期成倒数关系，即f=1/T；
    

-   **脉冲宽度W：**简称脉宽，是脉冲高电平持续的时间，单位是时间，比如纳秒ns、微妙μs、毫秒ms等；
    

-   **占空比D：**脉宽除以脉冲周期得到的值，百分数表示，比如50%，也常有小数或分数表示的，比如0.5或1/2。
    

  

**以上之间的关系如下图所列的公式：**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWXmtsqxCLvVZ1MicZ79lZGlGfxeGWDy0fVrHX2Q3gkoZ8ql8f25DKhhQ/640?wx_fmt=png)

工程应用中的PWM波是幅值、周期（或频率）不变，脉宽（或占空比）可调的脉冲波，接下来我们来认清该PWM波到底是什么，TA隐藏着什么思想？  

当我们想要控制一个直流电机的转速，我们可以通过改变其两端电压即可，但是该种方法有很大的局限性，可调直流电源构造复杂、成本高昂，应用起来很不现实。

所以我们采用另外的控制方式：电压源→驱动器→直流电机，电压源提供直流电压，不同的驱动器控制不同的直流电机，应用非常灵活，其中驱动器对电机的调速控制就是利用PWM。

  

**可调直流电源控制与PWM控制都是能调速的，那么它们有什么相同之处呢？**

如下图，电机为某相同转速时，红色代表驱动器输出幅值不变的PWM波，蓝色代表可调直流电源输出的电压，两者都是直接作用到负载。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWHS6DIvzczPP86YiaA2iaPagNicykia4DwaibibU2gGkzLXbicZNdQibNlyPsZg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWDThiaajIj3ibS4XAjlGATV2wqYbSN8GAqSAzOP6LlspQFqBBqCStGujg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWDThiaajIj3ibS4XAjlGATV2wqYbSN8GAqSAzOP6LlspQFqBBqCStGujg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWibgH7BJ3K1cyKz5trZszRDvDfQDWsrjrg373t6zlRpHUJSghDPsne9g/640?wx_fmt=png)

**由以上得知：**

当PWM波的占空比越大时，所对应的直流电压与PWM波的幅值越接近；反之与0V越接近。

周期的红色PWM波脉宽下的矩形面积之和与蓝色直流电压的面积相等，即伏秒积相等：

**U红(幅值) × ton = U蓝 × T**

两端同时除以T，得到如下关系式：  

**U红(幅值) × 占空比 = U蓝**

例如当PWM波的幅值为24V，占空比为50%时，与直流电压12V作用到电机上所产生的效果是一模一样的，即速度相同，即24V×50%=12V。  

另外，既然满足这个关系，那PWM波的频率是不是可以随意了，答案当然不是，频率太低会导致电机运转不畅，振动大，噪音大；频率太高会导致驱动器开关损耗较大，甚至有电机会啸叫而不转的情况。

一般1k~30k的PWM频率较为普遍，几百Hz的也有，实际上还是根据电机功率在测试时确定合适的PWM频率范围为宜。  

  

如下图为实物测试，脉宽在变化，周期不变的PWM波。

![](https://mmbiz.qpic.cn/mmbiz_gif/2ibmcljDoyWSUicQGJXr7dCe20XGfQxEYVaVzSyAQR3kh0RIV23lPtlDZjRUhn0LM6Vol86EXVDic2JILhLiargt7A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

  

所加负载如下图，为PWM控制电机调速实物测试，有刷直流电机的PWM无极调速，其中LED是并联在电机输入端的，其亮弱反映电机速度的变化。

![](https://mmbiz.qpic.cn/mmbiz_gif/xML2GYBfTfkxO99CP3HrLSoEEBoXvaupIpA9erk6gDx49j8vXGBCdVfPD4EdgzzUykECtyLHjIF9d2KEQ1d48g/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

**要点：**

-   PWM波其实就是一种脉宽可连续调节的矩形脉冲波；
    

-   占空比其实就是描述脉宽与脉冲周期的比值，是量化值，便于分析研究，当我们用占空比来表达时，对脉宽就不那么关心了；
    

-   占空比调节就是脉宽调节，表达不一样，但本质是一样的；
    

-   PWM波满足伏秒积计算：U红(幅值) × 占空比 = U蓝，作用效果与直流电压一样。
    

  

硬件工程师都在关注我们

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