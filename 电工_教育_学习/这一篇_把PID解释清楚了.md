# 这一篇，把PID解释清楚了

原创 硬件笔记本 2024-03-18 07:52 四川

> 原文地址: [https://mp.weixin.qq.com/s/W4DOxarnbsfK58e8IyWzRw](https://mp.weixin.qq.com/s/W4DOxarnbsfK58e8IyWzRw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天通过图文的形式给大家讲解什么是PID？PID各个参数有什么作用？哪些场合会用到PID？快来一起学习一下吧！

**1、啥是PID？**

**PID**，就是“**比例**（proportional）、**积分**（integral）、微分（derivative）”，是一种很常见的控制算法。

PID已经有107年的历史了，它并不是什么很神圣的东西，大家一定都见过PID的实际应用。

比如四轴飞行器，再比如平衡小车......还有汽车的定速巡航、3D打印机上的温度控制器....

就是类似于这种：需要**将某一个物理量“保持稳定”的场合**（比如维持平衡，稳定温度、转速等），PID都会派上大用场。

**那么问题来了：**

比如，我想控制一个“热得快”，让一锅水的温度保持在50℃，这么简单的任务，为啥要用到微积分的理论呢。

**你一定在想：**

这不是so easy嘛~ 小于50度就让它加热，大于50度就断电，不就行了？几行代码用Arduino分分钟写出来。

没错~在要求不高的情况下，确实可以这么干~ But！如果换一种说法，你就知道问题出在哪里了：

如果我的控制对象是一辆汽车呢？

要是希望汽车的车速保持在50km/h不动，你还敢这样干么。

_设想一下，假如汽车的定速巡航电脑在某一时间测到车速是45km/h。它立刻命令发动机：加速！_

_结果，发动机那边突然来了个100%全油门，嗡的一下，汽车急加速到了60km/h。_

_这时电脑又发出命令：刹车！_

_结果，吱...............哇............(乘客吐)_

所以，在大多数场合中，用“**开关量**”来控制一个物理量，就显得比较简单粗暴了。有时候，是无法保持稳定的。因为单片机、传感器不是无限快的，采集、控制需要时间。

而且，控制对象具有惯性。比如你将一个加热器拔掉，它的“余热”（即热惯性）可能还会使水温继续升高一小会。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/Ly5UxKsut86IZ2pgkK9z5wQ21733IWB47XTDy7rMfibe63Xuuia9ruXVicJgQT9XPpSDZy2wVMs9hjPzsXDElbKCw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

**02** **三个控制环节的作用**

我们先只说PID控制器的三个最基本的参数：kP,kI,kD。

**1）kP的作用**

**P就是比例的意思**。它的作用最明显，原理也最简单。我们先说这个：

需要控制的量，比如水温，有它现在的『当前值』，也有我们期望的『目标值』。

当两者差距不大时，就让加热器“_轻轻地_”加热一下。

要是因为某些原因，温度降低了很多，就让加热器_“稍稍用力”_加热一下。

要是当前温度比目标温度低得多，就让加热器_“开足马力”_加热，尽快让水温到达目标附近。

这就是P的作用，跟开关控制方法相比，是不是_“温文尔雅”_了很多

实际写程序时，就让偏差（目标减去当前）与调节装置的“调节力度”，建立一个一次函数的关系，就可以实现最基本的“比例”控制了~

_**kP越大，调节作用越激进，kP调小会让调节作用更保守。**_

要是你正在制作一个平衡车，有了P的作用，你会发现，平衡车在平衡角度附近来回“狂抖”，比较难稳住。

如果已经到了这一步——恭喜你！离成功只差一小步了~

**2）kD的作用**

D的作用更好理解一些，所以先说说D，最后说I。

刚才我们有了P的作用。你不难发现，只有P好像不能让平衡车站起来，水温也控制得晃晃悠悠，好像整个系统不是特别稳定，总是在“_抖动_”。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/Ly5UxKsut86IZ2pgkK9z5wQ21733IWB4kR6EBAObJq6h8xoIkpLJNPSqggtvQxyvTzib5Rw5iaUicZFicZ0iaAYu3fQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

你心里设想一个弹簧：现在在平衡位置上。拉它一下，然后松手。这时它会震荡起来。_因为阻力很小，它可能会震荡很长时间，才会重新停在平衡位置__。_

请想象一下：要是把上图所示的系统浸没在水里，同样拉它一下 ：这种情况下，重新停在平衡位置的时间就短得多。

我们需要一个控制作用，让被控制的物理量的_“变化速度”趋于0_，即类似于_“阻尼”_的作用。

因为，当比较接近目标时，P的控制作用就比较小了。越接近目标，P的作用越温柔。有很多内在的或者外部的因素，使控制量发生小范围的摆动。

_D的作用就是让物理量的速度趋于0，只要什么时候，这个量具有了速度，D就向相反的方向用力，尽力刹住这个变化。_

_**kD参数越大，向速度相反方向刹车的力道就越强。**_

如果是平衡小车，加上P和D两种控制作用，如果参数调节合适，它应该可以站起来了~欢呼吧。

等等，PID三兄弟好像还有一位。看起来PD就可以让物理量保持稳定，那还要I干嘛？

因为我们忽视了一种重要的情况：

**3）kI的作用**

还是以热水为例。假如有个人把我们的加热装置带到了非常冷的地方，开始烧水了。需要烧到50℃。

在P的作用下，水温慢慢升高。直到升高到45℃时，他发现了一个不好的事情：天气太冷，水散热的速度，和P控制的加热的速度相等了。

这可怎么办？

P兄这样想：我和目标已经很近了，只需要轻轻加热就可以了。

D兄这样想：加热和散热相等，温度没有波动，我好像不用调整什么。

于是，水温永远地停留在45℃，永远到不了50℃。

作为一个人，根据常识，我们知道，应该进一步增加加热的功率。可是增加多少该如何计算呢？

前辈科学家们想到的方法是真的巧妙。

_设置一个积分量。只要偏差存在，就不断地对偏差进行积分（累加），并反应在调节力度上。_

这样一来，即使45℃和50℃相差不太大，但是随着时间的推移，只要没达到目标温度，这个积分量就不断增加。系统就会慢慢意识到：还没有到达目标温度，该增加功率啦！

到了目标温度后，假设温度没有波动，积分值就不会再变动。这时，加热功率仍然等于散热功率。但是，温度是稳稳的50℃。

_**kI的值越大，积分时乘的系数就越大，积分效果越明显。**_

所以，I的作用就是，减小静态情况下的误差，让受控物理量尽可能接近目标值。

I在使用时还有个问题：需要设定积分限制。防止在刚开始加热时，就把积分量积得太大，难以控制。

**03 PID整定口诀**  

参数整定找最佳，从小到大顺序查；

先是比例后积分，最后再把微分加；

曲线振荡很频繁，比例度盘要放大；

曲线漂浮绕大湾，比例度盘往小扳；

曲线偏离回复慢，积分时间往下降；

曲线波动周期长，积分时间再加长；

曲线振荡频率快，先把微分降下来；

动差大来波动慢，微分时间应加长；

理想曲线两个波，前高后低4比1；

一看二调多分析，调节质量不会低。

个人认为PID参数的设置的大小，一方面是要根据控制对象的具体情况而定；另一方面是经验。P是解决幅值震荡，P大了会出现幅值震荡的幅度大，但震荡频率小，系统达到稳定时间长；I是解决动作响应的速度快慢的，I大了响应速度慢，反之则快；D是消除静态误差的，一般D设置都比较小，而且对系统影响比较小。

  

**04 PID参数怎样调整最佳**

**1）整定比例控制**

将比例控制作用由小变到大，观察各次响应，直至得到反应快、超调小的响应曲线。

**2）整定积分环节**

若在比例控制下稳态误差不能满足要求，需加入积分控制。

先将步骤1）中选择的比例系数减小为原来的50～80％，再将积分时间置一个较大值，观测响应曲线。然后减小积分时间，加大积分作用，并相应调整比例系数，反复试凑至得到较满意的响应，确定比例和积分的参数。

**3）整定微分环节**

若经过步骤2），PI控制只能消除稳态误差，而动态过程不能令人满意，则应加入微分控制，构成PID控制。先置微分时间TD=0，逐渐加大TD，同时相应地改变比例系数和积分时间，反复试凑至获得满意的控制效果和PID控制参数。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。