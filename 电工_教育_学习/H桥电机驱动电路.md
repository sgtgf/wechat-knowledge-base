# H桥电机驱动电路

原创 硬件笔记本 2024-02-22 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/kbvTAgxfCpZkU7DCG8cljQ](https://mp.weixin.qq.com/s/kbvTAgxfCpZkU7DCG8cljQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**什么是H桥**

因为电路长得像字母H而得名，通常它会包含四个独立控制的开关元器件，例如下图有四个MOSFET开关元器件Q1、Q2、Q3、Q4。

它们通常用于驱动电流较大的负载，比如电机。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNic0j6W7XbmVV3othW1YC4aTaUHQR0ple56TWicyibCQ3x4B31W11B9PLZQ/640?wx_fmt=png)

  

H桥电路中间有一个直流电机M。  

D1、D2、D3、D4是MOS-FET的续流二极管；

  

  

**开关状态**

下面以控制一个直流电机为例，对H桥的几种开关状态进行简单的介绍，其中正转和反转是人为规定的方向，实际工程中按照实际情况进行划分即可。

  

**正转**

通常H桥用来驱动感性负载，这里我们来驱动一个直流电机：

-   打开Q1和Q4
    
-   关闭Q2和Q3
    

此时假设电机正转，电流依次经过Q1、M、Q4 ，如下图中箭头路径所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNic42FzSW6UVwtr5ShsQFdzWy7GLQxAt2rFQem4svAxMbYI2LLPibOnuQQ/640?wx_fmt=png)

  

**反转**  

另外一种状态则是电机反转，此时四个开关元器件的状态如下：

-   关闭Q1和Q4
    
-   打开Q2和Q3
    

此时电机反转，电流依次经过Q2、M、Q3 ，如下图中箭头路径所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNicibTc6rSwAicRZ4flO9m1IhBicRIBvjhDic22wyziaCyZG0rvicCzRekRaNDg/640?wx_fmt=png)

**调速**  

如果要对直流电机调速，其中的一种方案就是：

-   关闭Q2和Q3
    
-   打开Q1 ，Q4上给它输入50%占空比的PWM波形
    

这样就达到了降低转速的效果，如果需要增加转速，则将输入PWM的占空比设置为100%，电流方向如下图中箭头路径所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNicqia2STDMzZamqEerZqqfBwf9sT4Pyvpo2feKkyn8aiaXPE6vOiciaRnibhg/640?wx_fmt=png)

  

**停止状态**  

这里以电机从正转切换到停止状态为例。

正转时Q1和Q4是打开状态，这时候如果关闭Q1和Q4，直流电机内部可以等效成电感，也就是感性负载，电流不会突变，那么电流将继续保持原来的方向进行流动，这时候我们希望电机里的电流可以快速衰减。

  

这里有两种办法。

第一种：

关闭Q1和Q4，这时候电流仍然会通过反向续流二极管进行流动，此时短暂打开Q1和Q3从而达到快速衰减电流的目的，电流方向如下图中箭头路径所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNic0ucI4G8njcnhI41Smw6auVOmeBzPFanUn5M6wjdRr0fjNia3tl399WQ/640?wx_fmt=png)

  

第二种：

准备停止的时候，关闭Q1、打开Q2，这时候电流并不会衰减地很快，电流循环在Q2、M、Q4之间流动，通过MOS-FET的内阻将电能消耗掉。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNicVNcW4LXDqSlXWx3Pp1qu1M2X0ZKvYdnfjAt84xrX76awp2F9UBbVlQ/640?wx_fmt=png)

**补充-另外一种H桥电路**  

上文中是包含4个N型MOS管的H桥，另外还有包含2个N型、2个P型MOS管的H桥，下图就是这种H桥电路。它由2个P型场效应管Q1、Q2与2个N型场效应管Q3、Q4组成，桥臂上的4个场效应管相当于四个开关。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgX7RkJCxibmpCUSWYtQ6eNicR0TEmwiahvdepvLficz3W8LDOzkxnzCb8ZIOq1SjiaNjqF3ly51KIjdUg/640?wx_fmt=png)

  

相对于前文4个N型MOS管的H桥电路，此电路的一个优点就是无论控制臂状态如何（绝不允许悬空状态），H桥都不会出现“共态导通”（短路）。  

  

**MOS管开关电路原理**

P型MOS管在栅极为低电平时导通，高电平时关闭。

N型MOS管在栅极为高电平时导通，低电平时关闭。  

      

**正转**

场效应管是电压控制型元件，栅极通过的电流几乎为“零”。

正因为这个特点，在连接好上图电路后，控制臂1置高电平（U=VCC）、控制臂2置低电平（U=0）时，Q1、Q4关闭，Q2、Q3导通。

此时，电机左端低电平、右端高电平，所以电流沿箭头方向流动，设定此时为电机正转。 

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