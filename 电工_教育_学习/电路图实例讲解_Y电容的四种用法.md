# 电路图实例讲解，Y电容的四种用法

原创 硬件笔记本 2024-05-23 07:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/8MV86zbKUol\_IHFGiOCdwg](https://mp.weixin.qq.com/s/8MV86zbKUol_IHFGiOCdwg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

## 一、Y电容简介

Y电容是安规电容的一种，安规电容是指用于这样的场合：即电容器失效后，不会导致电击也不会不危及人身安全。也就是因为这样安规电容与其他普通的电容有着不一样的地方，普通的电容在电源断开之后很长一段时间还会保留一定残留电压，一旦手触碰到就会发生电击，而安规电容却不会。Y电容大多数为蓝色，但是也有黄色的，由于是安全电容，因此Y电容上面一般都会标有相关的认证，例如CQC、VDE、UL等认证。如下图Y电容通常接于零线与地或者火线与地之间，如下图是I级EMI滤波电路，Y1和Y2是Y电容，通常两个串联一起。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEcjTFbfLkmpeIN0JNEibHz103ph5MwHMkO8icwkshHodo5ia2HQ1Gp7yzo9S7yy8cm4AsPG1abe7Iu0A/640?wx_fmt=other&tp=webp&wxfrom=13&wx_lazy=1&wx_co=1)

I级EMI滤波电路

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FN5OCLbS4WMYC8icwdNhxKic8O6Tic2dvTs4cUES6FqCnVX7HRk7iaLaPXtj8pSC8bQUHZeWuVnQV9kWA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic)

安规陶瓷电容器具有优良的电性能和低损耗，耐压高，寿命长，体积小，抑制电子线路内发生的浪涌的特点。

  

## 二、Y电容连接方式

那么Y电容在电路当中一般有哪几种连接方式呢？

### 第1种：跨接于变压器初级地与次级地之间

初级地大家也经常成为“热地”，次级地经常被称为“冷地”，y电容跨接在变压器初级地与次级地之间这是最为常见的连接方式，而且一般都是成双成对出现，因为脚距太短，不能做到完全隔离。开关电源当中，开关管的不断导通与闭合会产生噪声，如下图的Q⒈，主要表如今瞬间电压尖峰脉冲信号，信号噪声流向变压器的初级线圈，而线圈相当于1个电感，此时会产生反向较高的电动势，同时产生的高次谐波耦合到变压器初级，造成噪声骚扰。初级地和次级地之间加1个 Ｙ 电容，可以在变压器的次级地与大地间建立1个泄放通道，开关噪声的高次谐波通 过这个通道泄放到大地，从而避免通过供电线路辐射出去，降低开关电源的辐射骚扰。

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FN5OCLbS4WMYC8icwdNhxKic8ktjjvC1pOf5PecVX6sWl2qO0XkbSsE5qbAdYYYPTzbmF4fFZy4wlFA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

### 第2种：跨接于变压器初级高压和次级地之间

变压器的每个线圈绕组之间有寄生电容存在，在工作时过程当中形成电压，成为噪声源头，在初始高压与次级地之间跨接y电容，能滤除初级和次级耦合产生的共模扰乱，这与第1种差不多，只是在EMI测试时候结果会有所不同。

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FN5OCLbS4WMYC8icwdNhxKic83fCPCyydOGdoicPruBLPCYKneKFtR7Q5G8qgTb7b4iaIJp3C2TkZzZgw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

### 第3种：跨接于变压器初级高压与次级输出正端

这种连接方式较少见，在小功率电源时候有时候会用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FN5OCLbS4WMYC8icwdNhxKic8kzDxxDNvReAJ8oA48r5mYLYF2wZY439uP80IHQJjVkWqMSrtVQa1rw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

### 第4种：跨接于变压器初级地与次级输出正端

这种连接方式也较少见，在小功率电源时候有时候会用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FN5OCLbS4WMYC8icwdNhxKic8SzXPdjH6hTBXRE9yH4tJxC8PnAFrtlTB036icYyuCVUBaPNT1GhXEmg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

三、Y电容漏电流

对于开关电源，Y电容通常接于一次侧（初级）与二次侧（次级）之间，如下图，Y电容器可为一次侧耦合到二次侧的干扰电流提供回流路径。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FN5OCLbS4WMYC8icwdNhxKic8Rn2OmmrSzEU8y2GtCz7WLIiaaOsfvedzicRtENtGvMgAPia77K6sxc3Uw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

那么Y电容容量为什么不能太大呢？我们知道Y电容对于EMC有很大的帮助，由于是共模电容，因此需要接地，那么就会有一个漏电流，还是以上面的EMI滤波电路为例，Y电容漏电流

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcm9R6Gh1sAiasKBzJBvBJq3LmT8mRYgkYZSAhmZzDGfQn0881TRNichsS22hSVHNOrm5BfCjoxPca6Q/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

其中：f 是市电频率，即50Hz，C为Y电容总容量（4700pF+4700pF=9400pF），U对地端电压，这里取110V即可。则可以计算得出漏电流有0.32A之多，并且会发现漏电流与容量成正比关系，也就是说容量越大漏电流也就越大，对于220V/50Hz交流电网供电的用电器，很多国家都规定漏电流不得大于1mA，对于手持式以及移动设备等其他用电产品对漏电流也有不同的要求，因此如果电源产品需要接Y电容，容量一般都不是很大，有时候甚至去掉Y电容，因此我们经常看到的Y电容容量基本上都是不大于0.1uF。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEcjTFbfLkmpeIN0JNEibHz10oqtdDXM0ZCLZDSicgefx1erA5GfFngyibWOvIhrsIibKxaZe7jVXyiaVnA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。