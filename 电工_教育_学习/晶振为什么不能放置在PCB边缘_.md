# 晶振为什么不能放置在PCB边缘？

原创 硬件笔记本 2023-08-17 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/MwHFUIV8YxZeZqK5vb-Zgg](https://mp.weixin.qq.com/s/MwHFUIV8YxZeZqK5vb-Zgg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

晶振在布局时，一般是不能放置在PCB边缘的，今天以一个实际案例讲解。  

某行车记录仪，测试的时候要加一个外接适配器，在机器上电运行测试时发现超标，具体频点是84MHz、144MHz、168MHz，需要分析其辐射超标产生的原因，并给出相应的对策，辐射测试数据如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgI5IjhelOy5TgDvJibH6ooTdY7Vp2AQMrIKCYqtQlSUMrUvCRiaEdNFY1odWwKjZLIabU5ywjmH3lA/640?wx_fmt=jpeg)

图1：辐射测试数据

  

**1、辐射源头分析**

该产品只有一块PCB，板子上有一个12MHz的晶体。其中超标频点恰好都是12MHz的倍频，而分析该机器容易EMI辐射超标的屏和摄像头，发现LCD-CLK是33MHz，而摄像头MCLK是24MHz。

通过排除法，发现去掉摄像头后，超标点依然存在，而通过屏蔽12MHz晶体，超标点有降低，由此判断144MHz超标点与晶体有关，PCB布局如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgI5IjhelOy5TgDvJibH6ooTkOKUic5JJicG9AcTBBggerMMDhIsLLZiaGDZxEdnXnms7HbEIqNsMZ8xw/640?wx_fmt=jpeg)

图2：PCB布局图

  

**2、辐射产生原理**

从PCB布局可以看出，12MHz的晶体正好布置在了PCB边缘，当产品放置于辐射发射的测试环境中时，被测产品的高速器件与实验室中参考地会形成一定的容性耦合，产生寄生电容，导致出现共模辐射，寄生电容越大，共模辐射越强；而寄生电容实质就是晶体与参考地之间的电场分布，当两者之间电压恒定时，两者之间电场分布越多，两者之间电场强度就越大，寄生电容也会越大，晶体在PCB边缘与在PCB中间时电场分布如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgI5IjhelOy5TgDvJibH6ooTvNOYtBYMcWvSvCvmrUUsuwx7R8L0QXqm1HrovcqoQ26TcyN8ZVENWw/640?wx_fmt=jpeg)

图3：PCB边缘的晶振与参考接地板之间的电场分布示意图

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgI5IjhelOy5TgDvJibH6ooTN81noquHCoxlwaHe6k5v8fnGwcAfSKNoXx0uEPpyE93CEtTft36cww/640?wx_fmt=jpeg)

图4：PCB中间的晶振与参考接地板之间的电场分布示意图

  

从图中可以看出，当晶振布置在PCB中间，或离PCB边缘较远时，由于PCB中工作地（GND）平面的存在，使大部分的电场控制在晶振与工作地之间，即在PCB内部，分布到参考接地板的电场大大减小，导致辐射发射就降低了。

  

**3、处理措施**

将晶振内移，使其离PCB边缘至少1cm以上的距离，并在PCB表层离晶振1cm的范围内敷铜，同时把表层的铜通过过孔与PCB地平面相连。经过修改后的测试结果频谱图如下，从图可以看出，辐射发射有了明显改善。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgI5IjhelOy5TgDvJibH6ooTh6mSbdktV2jsZpHr9x0us6V89ibtsAaK3ECiaSpKCbdAH1lvWkeialeLg/640?wx_fmt=jpeg)

**4、思考与启示**

高速的印制线或器件与参考接地板之间的容性耦合，会产生EMI问题，敏感印制线或器件布置在PCB边缘会产生抗扰度问题。

如果设计中由于其他一些原因一定要布置在PCB边缘，那么可以在印制线边上再布一根工作地线，并多增加过孔将此工作地线与工作地平面相连。

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
    

后台回复“加群”，管理员拉你加入同行技术交流群