# LVDS顺口溜：单八单六双八双六到底是啥？

原创 硬件笔记本 2024-02-19 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/jXRvsOzr8L4889xT1W2b3w](https://mp.weixin.qq.com/s/jXRvsOzr8L4889xT1W2b3w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

**1**

  

**接口定义**

  

LVDS是一种低压差分信号技术接口，低压差分信号传输：输出接口利用非常低的电压摆幅（约350mV）在两条PCB走线或一对平衡电缆上通过差分进行数据的传输，采用LVDS输出接口，可以使得信号在差分PCB线或平衡电缆上以几百Mbit/s的速率传输，由于采用低压和低电流驱动方式，因此，实现了低噪声和低功耗。

  

**2  
**

  

**接口类型**

  

**a.单6位LVDS输出接口。**

这种接口电路中，采用单路方式传输，每个基色信号采用6位数据，共18位RGB数据，因此，也称18位或18bit LVDS接口。

  

**b.双6位LVDS输出接口。**

这种接口电路中，采用双路方式传输，每个基色信号采用6位数据，其中奇路数据为18位，偶路数据为18位，共36位RGB数据，因此，也称36位或36bit LVDS接口。

  

**c.单8位LVDS输出接口。**

这种接口电路中，采用单路方式传输，每个基色信号采用8位数据，共24位RGB数据，因此，也称24位或24bit LVDS接口。

  

**d.双8位LVDS输出接口。**

这种接口电路中，采用双路方式传输，每个基色信号采用8位数据，其中奇路数据为24位，偶路数据为24位，共48位RGB数据，因此，也称48位或48bit LVDS接口。

  

单路和双路：单路就是只有一路 R、G、B 三色和HS、VS、DE控制信号；双路就是有两路 R、G、B 三色和HS、VS、DE控制信号。

  

**经常碰到什么单6,双6 单8双8.如何区分呢？**

  

主要看数带 “+ /-”的这种信号线一共有几对，有10对的减2对就是双8，有8对的减2对就是双6。有5对的减掉1对是单8，有4对的减掉1对是单6。

  

总结一点就是 数了是4对为单6、 5对为单8（标清屏） 、8对为双6、 10对为双8（高清屏）。

  

下图是单8输出接口：

  

![](https://mmbiz.qpic.cn/mmbiz_png/l2RpCeFOAouJricXQlxwGbQKUtqdMv07AT2ZELhqmVr3uH16UkUAHuibx5bt1ZeQzQaXFZz1ME6YzAleTicBRFDtA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/l2RpCeFOAouJricXQlxwGbQKUtqdMv07A7Og24icX4sH0lbI2mrZAT2cBqEgQwMbNpfFBR1FXaQngdib6STNlIwqg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**3  
**

  

**应用**

  

一般来说，在开发板上，LVDS的工作原理是有一颗专门的IC，把输入的TTL信号编码成LVDS信号，在屏的一边，也有一颗相同功能的解码IC，把LVDS信号变成TTL信号，屏最终用的还是TTL信号，因为LVDS信号电平为1V左右，而且-线和+线之间的干扰还能相互抵消。所以抗干扰能力非常强。很适合用在高分辨率所带来高码率的屏上。

  

**4  
**

  

**DE、HS、VS控制信号、CLK时钟信号、**

**RGB数据信号**

  

有效数据选通信号DE、行同步信号HS、场同步信号VS、像素时钟信号DCLK和数字RGB信号这五类信号中，DE、HS、VS属于同步信号，DCLK属于时钟信号，RGB属于数据信号，它们一般都是同时出现的，且DE、HS、VS、DCLK和数字RGB信号都与像素时钟信号DCLK保持同步。

  

DCLK（RGB像素时钟信号）的作用是指挥RGB信号按照顺序传输，各电路只有在像素时钟的下降沿（或上升沿）来到时才对RGB数据进行读取

  

![](https://mmbiz.qpic.cn/mmbiz_png/l2RpCeFOAouJricXQlxwGbQKUtqdMv07A0nCT3njFO3zFiaaicCicX53qB0DydiaTY0hElPodfS8Pnx5iboviaWM4Vhlw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

DE（有效显示数据选通信号），仅使用DE同步信号液晶面板，不需要输入行同步信号HS和场同步信号VS，只需要输入DE作为同步信号使用就能正常工作。液晶面板的行同步信号输入端和场同步信号输入端一般都需要接低电平，否则不能正常工作。

  

同时使用DE／HS／VS同步信号的液晶面板，需要同时输入有效显示数据选通信号DE、行同步信号HS、场同步信号VS才能正常工作。

硬件工程师及从业者都在关注我们

  

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。