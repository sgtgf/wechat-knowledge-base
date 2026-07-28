# MOSFET栅极应用电路分析汇总（驱动、加速、保护、自举等等）

原创 硬件笔记本 2024-02-17 18:36 四川

> 原文地址: [https://mp.weixin.qq.com/s/enseWvwqG3w-pTssh6rbEQ](https://mp.weixin.qq.com/s/enseWvwqG3w-pTssh6rbEQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

概述

MOSFET是一种常见的电压型控制器件，具有开关速度快、高频性能、输入阻抗高、噪声小、驱动功率小、动态范围大、安全工作区域(SOA)宽等一系列的优点，因此被广泛的应用于开关电源、电机控制、电动工具等各行各业。栅极做为MOSFET本身较薄弱的环节，如果电路设计不当，容易造成器件甚至系统的失效，因此发这篇文章将栅极常见的电路整理出来供大家参考讨论，也欢迎大家提出自己的观点。

MOSFET栅极电路常见的作用有以下几点。

1、去除电路耦合进去的噪音，提高系统的可靠性。

2、加速MOSFET的导通，降低导通损耗。

3、加速MOSFET的关断，降低关断损耗。

4、降低MOSFET DI/DT，保护MOSFET同时抑制EMI干扰。

5、保护栅极，防止异常高压条件下栅极击穿。

6、增加驱动能力，在较小的信号下，可以驱动MOSFET。

  

上面是我能想到的栅极电路的作用。欢迎大家将自己想到的也补充进来，下来我会将相应的电路也贴上来，供大家讨论。

首先说一下电源IC直接驱动，下图是我们最常用的直接驱动方式，在这类方式中，我们由于驱动电路未做过多处理，因此我们进行PCB LAYOUT时要尽量进行优化。如缩短IC至MOSFET的栅极走线长度，增加走线宽度，尽量将Rg放置在离MOSFET栅极较进的位置，从而达到减少寄生电感，消除噪音的目的。

  

1、直接驱动

首先说一下电源IC直接驱动，下图是我们最常用的直接驱动方式，在这类方式中，我们由于驱动电路未做过多处理，因此我们进行PCB LAYOUT时要尽量进行优化。如缩短IC至MOSFET的栅极走线长度，增加走线宽度，尽量将Rg放置在离MOSFET栅极较进的位置，从而达到减少寄生电感，消除噪音的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXYr6EoVjvvO6AanNL8oqRslR15MjfS0z75a7SJ3oqE70WcKQRmZSPaQ/640?wx_fmt=png&from=appmsg)

当然另一个问题我们得考虑，那就是PWM CONTROLLER的驱动能力，当MOSFET较大时，IC驱动能力较小时，会出现驱动过慢，开关损耗过大甚至不能驱动的问题，这点我们在设计时需要注意。

  

2、IC内部驱动能力不足时

当然，对于IC内部驱动能力不足的问题我们也可以采用下面的方法来解决。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXX5aDbEPhDnOo47WVpkKfribuEMB6Qf060RNEdydAj1O8QsTicgEdibvsQ/640?wx_fmt=png&from=appmsg)

这种增加驱动能力的方式不仅增加了导通时间，还可以加速关断时间，同时对控制毛刺及功率损耗由一定的效果。当然这个我们在LAYOUT时要尽量将这两个管子放的离MOSFET栅极较近的位置。这样做的好处还有减少了寄生电感，提高了电路的抗干扰性。

  

3、增加MOSFET的关断速度

如果我们单单要增加MOSFET的关断速度，那么我们可以采用下面的方式来进行。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXNKAE7M55qbGtenBrAUk4NgLW5asrF6ntSzQVriaibJD12MkkxU9yW9Mg/640?wx_fmt=png&from=appmsg)

关断电流比较大时，能使MOSFET输入电容放电速度更快，从而降低关断损耗。大的放电电流可以通过选择低输出阻抗的MOSFET或N沟道的负的截止的电压器件来实现，最常用的就是加加速二极管。

栅极关断时，电流在电阻上产生的压降大于二极管导通压降时，这时二极管会导通，从而将电阻进行旁路，导通后，随着电流的减小，二极管在电路中的作用越来越小，该电路作用会显著的减小MOSFET关断的延迟时间。

当然这个电路有一定的缺点，那就是栅极的电流仍然需要留过IC内部的输出驱动阻抗，这有什么办法解决呢？

下面来讲讲PNP加速关断驱动电路。

4、PNP加速关断驱动电路

再来谈以下PNP加速关断电路

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXUbicVCz73QTibU9kK74uClwW7QjKXCL9ufWArBDlqBw2lBSz8a8uficFw/640?wx_fmt=png&from=appmsg)

PNP加速关断电路是目前应用最多的电路，在加速三级管的作用下可以实现瞬间的栅源短路，从而达到最短的放电时间，之所以加二极管一方面是保护三级管基极，另一方面是为导通电流提供回路及偏置，该电路的优点为可以近似达到推拉的效果加速效果明显，缺点为栅极由于经过两个PN节，不能是栅极真正的达到0伏。

  

5、当源极输出为高电压时的驱动

当源极输出为高电压的情况时，我们需要采用偏置电路达到电路工作的目的，即我们以源极为参考点，搭建偏置电路，驱动电压在两个电压之间波动，驱动电压偏差由低电压提供，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXqmvlicCdj2iaK2d48oibWVScM0aTcdhibGI585PzS356qlooaibPRz3KGmQ/640?wx_fmt=png&from=appmsg)

当然，这个图有点问题，不知道有没有哪位大侠看出来？

其实问题就是“驱动电源”需要悬浮，要以MOS的源极共“地（给大家加深印象）

这个是正确的图纸。供各位参考

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXXiaf16sEibc5PaTIa1XdwurEkvdsVErQc0EbcAriaPYlHJhGJtFvtzCJQ/640?wx_fmt=png&from=appmsg)

  

6、满足隔离要求的驱动

为了满足安全隔离的要求或者提供高端浮动栅极驱动经常会采用变压器驱动。这种驱动将驱动控制和MOSFET进行了隔离，可以应用到低压及高压电路中去，如下图所示

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXic3gIYlPricBK7P5ISC5QvkibdRF555Uia9vQmuIIewSxvM8duWcRrKfXg/640?wx_fmt=png&from=appmsg)

变压器驱动说白了就是隔离驱动，当然现在也有专门的驱动IC可以解决，但变压器驱动有自己的特点使得很多人一直在坚持用。

图中耦合电容的作用是为磁化的磁芯提供复位电压，如果没有这个电容，会出现磁饱和。

与电容串联的电阻的作用是为了防止占空比突然变化形成LC的震荡，因此加这个电阻进行缓解。

  

7、自举逆变图

下面上一个实际的自举逆变图，供参考。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXHxs9RSibeGYH9kbN2A0Av77dbSOlfkONI1U6OUMA6bSN0cQ6ZEMF4ww/640?wx_fmt=png&from=appmsg)

  

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