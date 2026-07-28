# 实例分析ESD电磁兼容问题

原创 硬件笔记本 2023-11-13 07:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/oY9F-5BLCYU6Mvv-LNVSug](https://mp.weixin.qq.com/s/oY9F-5BLCYU6Mvv-LNVSug)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

ESD对于很多电子产品是一个致命硬伤，如何设计好产品的ESD，是需要花很多时间和精力来研究的。下面通过几个实例来和大家一起分享下。

  

**某智能手表在侧键附近打ESD后出现反复开关机现象**

根据反复重启的时间判断，类似于长按Power键。检查Power\_On信号，发现已经被持续拉低，Power\_On信号的原理图如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYrrJTmJkTeIAnibjvbQLickeLFTuFMxgYgJm9q3CKRk5jbHN1WFlicMGNQ/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

为了降成本，位置1并没有贴TVS管，而是用一个电容代替，电容的耐压值是25V。失效的机器，这个电容已经短路，可以判断ESD进入壳体，直接打坏了位置1的电容。

  

如果把位置1的电容耐压提高到50V，能抗的ESD枪数量会增多，但最终还是会坏。这个项目不是防水的，密封性做得很差，所以才有问题。

**【解决方法】**

把位置1的电容换成TVS管，或者位置1不要贴任何东西，在位置2放一个1nF的电容。靠1K电阻+1nF电容来吸收ESD能量。

  

另外，在侧键的FPC附近，增加了GND露铜区域，引导ESD先进入GND。这也是一种低成本的解决方法，如果ESD能量足够大，实测几乎可以把1K电阻打坏。

  

**某智能手表在USB接口外壳打ESD造成黑屏死机问题**

充电口是Micro-B型USB接口，接触放电±10KV，会出现黑屏，死机，闪屏等现象。

  

抓死机Log，没有发现什么端倪。

  

将USB信号逐个引出，VBUS，D+，D-都没有出现问题，打ID管脚，会出现类似现象。打GND，会很低概率出现类似现象。遂将问题定位到ID管脚，和GND上。

  

仔细检查USB接口附件的Layout，问题如下：

**1、USB\_ID管脚是悬空的。**

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYicAOiatGQjHCE0C5MWKIRYZ9XZau7xVCSX99nQVOK9vh57PuvqiaJ8sRA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**2、在L3和L6层，靠近USB接口，有与屏相关的敏感信号。**

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYvyZY0KJhzS6ZicjFfGCLsVPBdr5us4ibXKsFgicAaUfBMSYfaMxYw8wmA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYBANh6auicCEd76HpCvgk22jsb4OGEFiaDdDZFR3osHrGaCNdKUrFMdTQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

悬空的ID管脚是知名威胁，静电积累到一定程度，肯定会对周围放电，二次放电的威力更大。

  

USB周围的有敏感信号，在打ESD时，附近的GND电平瞬间局部抬高，尤其是看到USB接口的屏蔽壳跟表层相连，周围没有非常多的过孔打到内层GND，这更加重了GND局部电平的提高，这会干扰到这些敏感信号，导致死机，黑屏，闪屏问题。

  

**【解决方法】**

USB的固定PIN以及GND PIN，只接主GND，不要每一层都接GND。MIPI，LCD\_TE，LCD\_RST远离USB接口。

  

**某智能手表屏幕朝下，打后壳会黑屏**

这是一个SPI接口的显示屏，问题比较简单，一个偶然的机会发现是SPI信号中，CS线被软件强制拉低，且一直处于低的状态，这样是不行的。  

  

实测将CS线的行为改成符合SPI协议，只在传输数据时拉低，这个黑屏的问题解决了。

  

  

**某智能手表在USB的GND PIN上注入接触-8KV静电，会概率关机**

  

首先抓取了Log分析，没有发现什么线索。

  

直接拆开整机，在主板的不同地方的GND，注入ESD，统计关机的次数，得出一个简单的规律，只有在靠近电池BTB的地方，才会大概率出现，初步判断是ESD干扰了电池周围的信号。

  

电池BTB周围的信号有D+，D-，VBUS，MIPI，BAT\_ID，BAT\_THERM等，逐个在这些信号上，注入小两级的ESD，比如±2KV，有些信号会导致PMU损坏，有些会导致死机。只有BAT\_ID信号会出现关机的现象。

  

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYQKa6tUEUfJh1YKiccVFjRia8VydHXKXOj8Wxtgd5PTCqwqfDnYq9iaZug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

关机有两种可能，一是内部软件流程关机，二是电池突然掉电。尤其是第二种，往往很容易忽略。因为某些情况下，ESD注入两枪，立即就出现了关机现象，这很像是电池掉电了。

电池掉电有两种可能，一是电池保护板保护机制生效，切断了供电。二是Vbat到PMU的通路被打断。排查了主板上的器件，Vbat的通路经过的都是一些模拟器件，可能性比较小。

  

我们直接从主板VBAT飞线，连接到程控电源上，再打ESD的时候，发现就不会关机了。这进一步说明，在注入ESD时，是电池本身没有输出了。

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYm9h8bIvPdLIOfCHKqI383uInJcLaqLqCHLgYcSEG5hgdSm8DO68oWQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

电池保护板的原理图如下：

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYyGiaGnk5O7m1vUmsun4KonicsxwgkkmTQc5ibPfEaqLH6GNjnMVibFXxfQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

在图中GND上注入+8KV，没有问题，因为右边的TVS吸收了大部分能量，由于正向导通，钳位电压较低（小于4.4V），电池保护板没有触发保护机制。但是如果注入-8KV，TVS管开始反向钳位，瞬间的钳位电压较高（大于4.4V），超过电池起保护电压，电池触发保护机制，MOS管U2断开，导致关机。下图是TVS管的钳位特性，也能佐证这个结论。

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYlCu2QYPbF23OrC7Wia5afGdDxPY1X9lfiahqVdtBbBLdD8v9aQoRDMPw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

注意电池保护板的保护IC，是判断C1两端的电压，来决定是否起保护的。所以要解决这个问题，需要增大C1的容值。实测将C1增大到1uF，关机的概率明显降低了。

  

降低了，但没有彻底解决问题，肯定还有其他原因。这个原因是先猜出来，然后试验验证的。

  

上文提到只有BAT\_ID信号会出现关机的现象。所以猜测静电耦合到了ID管脚，进入PMU导致关机。

  

下面是这次电池保护板的走线，ID的走线与GND有较长的耦合长度，GND上的瞬间能量能很快耦合到这根线上，最终直接进入到PMU。

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqY038ZyNU3mUH6Qmc070cpzFGylpROFiaeQpicwIn6rxXO5ScUSpmGUxHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

虽然主板上ID走线也跟GND有很长的耦合距离，但是主板上的GND与Vbat之间有TVS钳位，GND的电压不至于跳变太厉害，也不会耦合很多能量到ID线上。反而是电池FPC上的GND电平跳动最大，ID线在FPC上耦合的能量更多。

  

FPC改版成如下样式，ID和GND基本没有重叠区域，能量也不会耦合到ID管脚上，再也没有出现过关机问题。

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYpWHLqGWjAGBICwuLbWkrWibSRJKUFTAWkjC2I0OCesZ4JTdcBhzIF8Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**屏幕朝下，ESD接触放电后壳，TP失效**

经检查，确定是TP IC被打坏。没有仔细分析IC损坏的原因，因为发现TP FPC背后的双面导电胶太弱，根本没有粘到GND上。TP没有很好接地，导致了这个问题。  

  

只要TP接地良好，就肯定不会出现TO IC失效问题。

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgPpdpQNicElfj78kOTFFoqYEkU9gjwjnKwDHj63UpiaCYz3mYfaEnqm4uaar1xLCud7n2ibpLxrkK7A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

硬件工程师及从业者都在关注我们

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