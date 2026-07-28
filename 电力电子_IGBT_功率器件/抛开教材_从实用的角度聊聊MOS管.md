# 抛开教材，从实用的角度聊聊MOS管

原创 硬件笔记本 2023-11-23 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/EJFT5fPueMyB8tyaO124Pw](https://mp.weixin.qq.com/s/EJFT5fPueMyB8tyaO124Pw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

大家好，当我说到MOS管的时候呢，你的脑子里可能是一团糨糊的。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics4yJGictLfQ8JJLp8tsKDxz2uicSRMk883GqicDdxy6gRTicuN5wo7kYjkkibFHpmiaRMO3LOibjNOz3Ytgg/640?wx_fmt=jpeg&wxfrom=13)

  

大部分的教材都会告诉你长长的一段话：

MOS管全称金属氧化半导体场效应晶体管，英文名Metal-Oxide-Semiconductor Field-Effect Transistor，属于绝缘栅极场效晶体管，以硅片为秤体，利用扩散工艺制作.......有N沟道和P沟道两个型。不仅如此，它还有两个兄弟，分别是结型场效应管以及晶体场效应管.......

  

面对这么大一段话，我不知道你有没有搞明白，反正我大学里是完全没有搞明白，学了一个学期就学了个寂寞。

  

那为什么这些教材要这么的反人类，他们难道就不能好好写说人话吗？

  

我大概分析了一下，因为同一本教材他需要面对不同专业的学生，所以教材最重要的是严谨。和全面相比是不是通俗易懂就没有那么重要了。而且一般的教材也不会告诉你学了有什么用，这就导致了在学习中你很容易迷失在这些概念中，抓不到重点。

  

* * *

  

那本文呢，我想根据自己的工作学习经历，抛开书本上这些教条的框架，从应用侧出发来给大家介绍一下MOS管里面最常见也是最容易使用的一种：增强型NMOS管，简称NMOS。当你熟悉了这个NMOS的使用之后呢，再回过头去看这个教材上的内容，我相信就会有不同的体会了。

  

**NMOS的用法**

  

首先来看这么一张简单的图（图1），我们可以用手去控制这个开关的开合，以此来控制这个灯光的亮灭。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG5iblcc7gvOWcKBsJqwuaubqO9VoBfehN3ib0ENs9tsoC9usHV8EXkGrzA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1

  

那如果我们想要用Arduino或者单片机去控制这个灯泡的话呢，就需要使用MOS管来替换掉这个开关了。为了更加符合我们工程的实际使用习惯呢，我们需要把这张图稍微转换一下，就像如图2这样子。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG52hWm92dzgnZ4VPQjVZiaYvLMORHtk8SVp7hZOBUupwkrozhwbZ48ic4Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图2  

  

那这两张图是完全等价的，我们可以看到MOS管是有三个端口，也就是有三个引脚，分别是gate，drain和source。至于为啥这么叫并不重要，只要记住他们分别简称g、d、s就可以。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG5Y4MibiajXty9VonCNmdXKl5R9Dv3uaicJvicriaQvK9qYic7Jcf3wL1EK0HA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图3

  

我们把单片机的一个IO口接到这个MOS管的gate端口，就可以控制这个灯泡的亮灭了。当然别忘了供电。当这个单片机的IO口输出为高的时候，NMOS就等效为这个被闭合的开关，指示灯光就会被打开；那输出为低的时候呢，这个NMOS就等效为这个开关被松开了，那此时这个灯光就被关闭，是不很简单。

  

那如果我们不停的切换这个开关，那灯光就会闪烁。如果切换的这个速度再快一点，因为人眼的视觉暂留效应，灯光就不闪烁了。此时我们还能通过调节这个开关的时间来调光，这就是所谓的PWM波调光，以上就是MOS管最经典的用法，它实现了单片机的IO口控制一个功率器件。当然你完全可以把灯泡替换成其他的器件。器件比如说像水泵、电机、电磁铁这样的东西。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG59EMvwtjHmQypqHj93dvicDA7BcZn3AoqyAwRp3MH8qrv4pRw3I15diaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图4 PWM波调光

  

**如何选择NMOS**

  

明白了NMOS的用法之后呢，我们来看一下要如何选择一个合适的NMOS，也就是NMOS是如何选型的。

  

那对于一个初学者来说，有四个比较重要的参数需要来关注一下。第一个是封装，第二个是vgsth，第三个是Rdson上，第四个是Cgs。

  

封装比较简单，它指的就是一个MOS管这个外形和尺寸的种类也有很多。一般来说封装越大，它能承受的电流也就越大。为了搞明白另外三个参数呢，我们先要来介绍一下NMOS的等效模型。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG5QyEtickChFnnhv3HjMl2FuthXAKDMgBE27kKVG1KxGAWIM8VMZrTOXQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图5 NMOS等效模型

  

MOS其实可以看成是一个由电压控制的电阻。这个电压指的是g、s两端的电压差，电阻指的是d、s之间的电阻。这个电阻的大小呢，它会随着g、s电压的变化而产生变化。当然它们不是线性对应的关系，实际的关系差不多像这样的，横坐标是g、s电压差。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG5ceticZRujibMDgKtjHDDoecxXqeVmiaBgHotj5etC5RXWq3fcXlXxdLQw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图6 Rds与Vgs关系图

  

纵坐标是电阻的值，当g、s的电压小于一个特定值的时候呢，电阻基本上是无穷大的。然后这个电压值大于这个特定值的时候，电阻就接近于零，至于说等于这个值的时候会怎么样，我们先不用管这个临界的电压值，我们称之为vgsth，也就是打开MOS管需要的g、s电压，这是每一个MOS管的固有属性，我们可以在MOS管的数据手册里面找到它。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG5fJALe3nlBCZU5mvMkbcvlAliaW4UCgRuUKQ4ib4fupohCSW6e3ZXHia9Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图7 MOS管数据手册  

  

显然vgsth一定要小于这个高电平的电压值，否则的话就没有办法被正常的打开。所以在你选择这个MOS管的时候，如果你的高电平是对应的5V，那么选3V左右的vgsth是比较合适的。太小的话会因为干扰而误触发，太大的话又打不开这个MOS管。

  

接下来我们再来看看NMOS的第二个重要参数Rdson，刚才有提到NMOS被完全打开的时候，它的电阻接近于零。但是无论多小，它总归是有一个电阻值的，这就是所谓的Rdson。它指的是NMOS被完全打开之后，d、s之间的电阻值。同样的你也可以在数据手册上找到它。这个电阻值当然是越小越好。越小的话呢，它分压分的少，而且发热也相对比较低。但实际情况一般Rdson越小，这个NMOS的价格就越高，而且一般对应的体积也会比较大。所以还是要量力而行，选择恰好合适。

  

最后说一下Cgs，这个是比较容易被忽视的一个参数，它指的是g跟s之间的寄生电容。所有的NMOS都有，这是一个制造工艺的问题，没有办法被避免。

  

那它会影响到NMOS打开速度，因为加载到gate端的电压，首先要给这个电容先充电，这就导致了g、s的电压并不能一下子到达给定的一个数值。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEfm8Y7hfmPD0q9jL20UhoG5EL9vJzfYjLEAXFOnWHB3EkBAyW9INBvcuGKnQJlusS6EJJuVzKAZVA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图8  

  

它有一个爬升的过程。当然因为Cgs比较小，所以一般情况下我们感觉不到它的存在。但是当我们把这个时间刻度放大的时候，我们就可以发现这个上升的过程了。对于这个高速的PWM波控制场景是致命的。当PWM波的周期接近于这个爬升时间时，这个波形就会失真。一般来说Cgs大小和Rdson是成反比的关系。Rdson越小，Cgs就越大。所以大家要注意平衡他们之间的关系。

  

以上就是关于NMOS大家需要初步掌握的知识了。

  

作者：Tamia

原文地址：https://www.xiaopingtou.net/article-104327.html

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