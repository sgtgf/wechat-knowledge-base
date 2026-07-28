# 关于EMC辐射发射整改一些心得体会

原创 硬件笔记本 2023-09-15 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/RPFJbogL-wX2lNkBCX3X0w](https://mp.weixin.qq.com/s/RPFJbogL-wX2lNkBCX3X0w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

当一个产品无法通过EMI 测试﹐首先就要有一个观念﹐找出无法通过的问题点﹐此时千万不能有主观的念头﹐要在那些地方下对策。常常有许多有经验的 EMI 工程师﹐由于修改过许多相关产品﹐对于产品可能造成 EMI 问题的地方也非常了解﹐而习惯直接就下药方﹐当然一般皆可能 非常有效﹐但是偶而也会遇到很难修改下来﹐最后发现问题的关键都是起行认为不可能的地方﹐之所以会种疏失﹐就是由于太主观了。因此﹐不论产品特性熟不熟﹐我们都要逐一再确认一次﹐甚而多次确认。这是因为造成EMI 的问题往往是错综复杂﹐并非单一点所造成。故反复的做确认及诊断是非常重要的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIicvRNpZiaRRP0jHIcyPA5Lx4aD2ib8fWxBuDibTyrKv580bgY5NviboCG55GGW0fWibjFpaCrOtgWb5w/640?wx_fmt=png)

  

将初步的诊断步骤详列于下﹐并加以说明其关键点﹐这些步骤看来似乎非常平凡简单﹐不像介绍对策方法各种理论秘籍绝招层出不穷﹐变化奥妙。其实﹐许多资深 EMI 工程师在其对策处理时﹐大部份的时间都在重复这些步骤与判断。笔者要再次强调﹐只有真正找到造成EMI 问题的关键﹐才是解决EMI 的最佳途径﹐若仅凭理论推测或经验判断﹐有时反而会花费更多的时间和精力。

**步骤一：**

将桌子转到待测（EUT）最大发射的位置﹐初步诊断可能的原因﹐并关掉EUT 电源加以确认。

由于EMI 测试上﹐EUT 必须转 360 度而天线由1m到4m 变化﹐其目的是要记录辐射最大的 情况。同样地﹐当我们发现无法通过测试时﹐首先我们先将天线位置移到噪声接收最大高度﹐然后将桌子转到最差角度﹐此时我们知道在EUT 面对天线的这一面辐射最强﹐故可以初步推测可能的原因﹐如此处屏蔽不佳或靠近辐射源或有电线电缆经过等。

另外须注意的是要关掉EUT 的电源﹐看噪声是否存在﹐以确定噪声确实是由 EUT 所产生。曾见测试Monitor 一直无法解决某一点的干扰﹐结果其噪声是由 PC 所造成而非Monitor 的问题﹐亦有在OPEN SITE测试Monitor发现某几点无法通过﹐由测试接收仪器的声音判断应是Monitor 产生﹐结果关掉电源发现噪声依然存在﹐所以关掉 EUT 电源的步骤是必须的﹐而且通常容易被忽略。

**步骤二：**

将连接EUT的周边电缆逐一取下﹐看干扰的噪声是否降低或消失。

若取下某一电缆而干扰的频率减小或甚而消失﹐则可知此电缆已成为天线将机板内的噪声辐射出来。事实上﹐仔细分析造成EMI 的关键﹐我们可以用一个很简单的模式来表示。

任何EMI的Source 必须要有天线的存在﹐才能产生辐射的情形﹐若仅单独存在噪声源而没有天线的条件﹐此辐射量是很小的﹐若将其连接到天线则由于天线效应便把能量辐射到空间。所以 EMI 的对策除了针对噪声源（Source)做处理外﹐最重要的查破坏产生辐射的条件\----天线。以往我们最常看到谈 EMI 对策离不开屏蔽（Shielding),滤波（Filter),接地（Grounding)﹐对于接地往往一块电路板多已固定﹐而无法再做处理﹐因为这一部份在电路板布线（Layout)时就须仔细考虑﹐若板子已完成则此时可变动的空间就非常小﹐一般方式仅能找出噪声小的接地处用较粗的地线连接﹐减低共模（Common  mode)噪声。屏蔽所牵涉的材质与花费亦甚高﹐滤波的方式则是常可见 Bead  电感等﹐往往用了一大堆亦不甚见效﹐何以如此﹐许多时候是我们没有解决其辐射的天线效应。一般而言﹐噪声的能量并不会因加一些对策组件便消失﹐也就是能量不减﹐我们所要做的工作是如何避免噪声辐射到空间（辐射测试）或由电源传出（传导测试）。在此我们整理了产生辐射常见的几种情形供读者参考。

（1）机器外部连接之电缆成为辐射天线

由于机器本身外部所连接的电缆成为天线效应﹐将噪声辐射到空间﹐此时噪声的大小和电缆的长度有关﹐因电缆的天线效应相对于噪声半波长时共振情形会最大﹐也往往是造成EMI 无法通过测试。在解决这个问题前必须要做一些判断﹐否则很容易疏忽而浪费时间。

（a）噪声是由机器内部电路板或接地所产生

此情形为将电缆取下﹐或加一Core 则噪声减低或消失。此时必须做的一个步骤是将线靠近机器（不须直接连接）看噪声是否会存在﹐若噪声并没有升高﹐则可确实判定由机器内部产生﹐若将电缆靠近而干扰噪声马上升高﹐由此时请参考（b）的说明。

（b）噪声是由机器内部耦合到电缆线上﹐而使电缆成为辐射天线。

这一点是许多测试工程师容易忽略的。此情形如（a）中所提到的﹐只要将一条电缆靠近﹐则可从频谱上看到噪声立刻升高﹐此表示噪声已不单纯是由线上所辐射出﹐而是机器本身的噪声能量相当大﹐一旦有天线靠近则立刻会耦合至天线而辐射出来。在实际测试中﹐我们发现许多通讯 产品有这类情形发生﹐此时若单纯用 Core 或 Bead 去处理﹐并不能真正的解决问题。

（2）机器内部的引线﹐连接线成为辐射天线

由于许多产品内部常有一些电线彼此连接工作厅﹐当这些线靠近噪声源很容易成为天线﹐将噪声辐射出去。针对此点的判断﹐在200MHz 以下之噪声﹐我们可以在线上加一Core 来判断噪声是否减低﹐而对于200MHz 以上之高频噪声﹐我们可以将线的位置做前后左右的移动﹐看噪声是否会增大或减小。

（3） 电路板上的布线成为辐射天线

由于走线太长或靠近噪声源而本身被耦合成为发射天线﹐此种情形当外部电缆都取下﹐而仅剩电路板时﹐在频谱仪上可看见噪声依然存在﹐此时可用探棒测量电路板噪声最强的地方﹐找到辐射的问题加以解决。关于探测的工具及方法﹐将于后详细说明。

（4）电路 板上的组件成为辐射来源

由于所使用的IC 或CPU 本身在运作时产生很大的辐射﹐使得 EMI 测试无法通过﹐卵石种情往往在经过（1）﹑（2）﹑（3）的分析后噪声依然存在﹐通常解决的方法不外换一个类似的组件﹐看EMI 特性是否会好一些。另外就是电路板重新布线时﹐将其摆放于影响最小的位置﹐也就是附近没有I/O Port及连接线等经过﹐当然若情况允许﹐将整个组件用金属外壳包覆（Shielding)也是一种快速有效的方法。

由以上的分析介绍我们可以了解﹐造成电磁干扰辐射最关键的地方就是电线的问题﹐当有了适当的天线条件存在很容易就产生干扰﹐另外电源线往往亦是造成天线效应的主因﹐这是在许EMI 对策中最容易疏忽的。

**步骤三：**

电源线无法移去﹐可在其上夹Core 或水平垂直摆动﹐看噪声是否有减小或变化。若产品有电池设备则可取下电源线判断﹐如Notebook PC 等。

如前所述电源线往往是会成为辐射天线﹐尤其是Desktop PC 类产品﹐往往300MHz 以上的噪声会由空间耦合到电源线上﹐所以判断产品的电源线是否受到感染是必须的步骤。由于噪声频带的影响﹐对200MHz 以下可用加Core 的方式（可一次多加数个）判断﹐对于200MHz 以上的噪声﹐由于此时Core的作用不大﹐可将电源线水平摆放和垂直摆放﹐看干扰噪声是否有差别﹐若水平和垂直有很明显的差别﹐则可一边摆动电源线一边看频谱仪（Spectrum)上噪声之大小有否变化﹐如此便可知道电源线有否干扰。

至于若发现电源线会产生辐射时如何解决﹐一般皆不好处理﹐通常先想办法使机器内的噪声减 小﹐以避免电源线的二次辐射﹐而使用Shielded 线一般对辐射的影响并不大﹐故换一条不同长度的电源线﹐有时也会有很好的效果。

由这一点我们可知道﹐除了要使可册产生辐射噪声的组件远离I/O Port 外﹐其也须尽量远离电源线及Switching power supply 的板子﹐以免耦合到电源线上使得辐射及传导皆无法通过测试。

**步骤四：**

检查电缆接头端的接地螺丝是否旋紧及外端接地是否良好。

依前三项方式大略找了一下问题后﹐我们必须再做一些检查﹐因为透过这些检查﹐也许不须做 任何修改﹐便可通过EMI 测试。例如检查电缆端的螺丝是否锁紧﹐有时将松掉的螺丝上紧﹐可加强电缆线的屏蔽效果。另外可检查看看机器外接的 Connector 的接地是否良好﹐若外壳为金属而有喷漆﹐则可考虑将 Connector 处的喷漆刮掉﹐使其接地效果较佳。另外若使用Shielded 的电缆线﹐必须检查接头端处外覆的金属纲是否和其铁盖密合﹐许多不佳的屏蔽线（RS232）多因线接头的外覆屏蔽金属纲未册和连接端的地密合﹐以致无法充份达到屏蔽的效果。

各种接头如Keyboard 及Power supply 常常由于接头的插头与机器上的插座间的密合度不好﹐影响了干扰噪声的辐射。检查的方式可将接头拔掉看噪声是否减小﹐减小表示两种册可﹐一为线上本身辐射干扰﹐另一为接头间接触不好﹐此时插上接头﹐用手销微将接头端左右摇动﹐看噪声是否会减小或消失﹐若会减小可将 Keyboard 或 Power supply 的连接头﹐用铜箔胶带贴一圈﹐以增加其和机器接头的密合度﹐这一点也是实测上很容易被疏忽﹐而会误判机器的EMI 为何每次测时好时坏﹐或花许多时间在其它的对策上面.

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
    

后台回复“加群”，管理员拉你加入同行技术交流群