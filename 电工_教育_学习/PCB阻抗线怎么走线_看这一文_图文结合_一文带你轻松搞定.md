# PCB阻抗线怎么走线？看这一文，图文结合，一文带你轻松搞定

原创 硬件笔记本 2024-03-25 07:42 四川

> 原文地址: [https://mp.weixin.qq.com/s/58hMpHA5ETusmnvj36w5Pg](https://mp.weixin.qq.com/s/58hMpHA5ETusmnvj36w5Pg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

文章来源头条百芯EMA

今天给大家分享的是：****多层PCB阻抗线走线技巧****

# **一、什么是 PCB 阻抗？**

**PCB 阻抗**是****高频工作时电路的电容和电感的组合****，虽然也是以Ω为单位测量，但是与作为直流特性的电阻有些不同，阻抗是一种交流特性，意味着与频率有关，而电阻则不是。

# **二、阻抗对 PCB的意义**

PCB 要实现高速数据传输，**阻抗匹配**是必须的事情。

以手机USB接口为例，可以实现2个方向同步传输数据、速度快，成本低。常见的2种类型是A型、B型和C型。

USB协议中定义（D+、D-）、（TX+、TX-）、（Rx+、RX-）差分信号线传输数字信号。为了保证传输信号的稳定性，PCB设计差分线必须严格按照差分信号的走线规则。

# **三、多层PCB阻抗走线的一些注意事项**

**1、元件PAD尽量靠近排列，缩短PADS之间的距离，使差分线尽可能短，过孔尽可能少。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdJZXicDklvNQbYlwVibwkJuunVyQxhbl3k203x971CLnf6ZNTRv2eRwjUJFibYTI2RCgQy93ib1hHEQ/640?wx_fmt=png&from=appmsg)

元件PAD尽量靠近排列

  

**2、路线应平行，对称，不允许走90°角线，应走45°或圆弧走线。线间距控制在4mil以内。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdJZXicDklvNQbYlwVibwkJuOXsq87MibhqJz5smwPgAu6LIGvQAsuzNPIZec5TcHwOVibPoiaNCRJCUA/640?wx_fmt=png&from=appmsg)

走45°或圆弧走线

**3、串联电阻、电容时，应上下或左右对齐。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdJZXicDklvNQbYlwVibwkJuULawHNKufQibHSia8fat1jcFicy1eWgh8RGf4c3mKmRicz4jo3IC5yFJrg/640?wx_fmt=png&from=appmsg)

上下或左右对齐

**4、差分阻抗线尽量等距、等距，避免时序偏差和共模干扰。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdJZXicDklvNQbYlwVibwkJuSBRT3jTws4MB6J2SFEtYJjbOqeUq3tibobkDPvqUJZ1sgRTsLtkURpA/640?wx_fmt=png&from=appmsg)

差分阻抗线尽量等距、等距

5、由于引脚分布、过孔、走线空间等因素，差分阻抗线长容易不匹配。一旦线路长度不匹配，时序就会发生偏移，从而降低信号质量。因此，****需要对差分对的不匹配进行相应的补偿，使线路长度匹配。长度差通常控制在5MIL以内，补偿原则是对出现长度差的部位进行补偿。****

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdJZXicDklvNQbYlwVibwkJuhurC2mjl47FeFt5FXG1TNc2z7XibJ5eN9iaxOUeFTtZWJwia49ttiambUA/640?wx_fmt=png&from=appmsg)

对差分对的不匹配进行相应的补偿，使线路长度匹配

这里举个例子，参数如下：

-   H1：介质厚度（阻抗线与参考层之间的厚度）
    
-   ER1：极板介电常数 4.2-4.6（PP 按 4.2 计算，磁芯按 4.5 计算）
    
-   W1：设计线宽
    
-   W2：上部线宽 = 设计线宽减去0.5mil
    
-   S1：两线之间的距离
    
-   T1：铜厚，一般按1oz（1.4mil）计算
    
-   C1：C1：基板表面绿油厚度
    
-   C2：铜箔表面绿油厚度
    
-   C3：绿油厚度基材表面
    
-   CER：绿油介电常数3.5
    

使用阻抗计算器计算，可以得到阻抗约为100。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源头条百芯EMA。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。