# 胡闹！谁教你这样用TVS管的！？

原创 硬件笔记本 2024-02-18 11:02 四川

> 原文地址: [https://mp.weixin.qq.com/s/nTvZGBi9Qm1khb6Neoowjw](https://mp.weixin.qq.com/s/nTvZGBi9Qm1khb6Neoowjw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

对于工程师来说，**浪涌保护**不仅仅是选择合适的电源板或者拔下几根电缆，主要涉及在 **PCB 布局中放置瞬态保护组件并应用明确的接地策略**。

  

TVS 二极管是用于保护PCB布局中组件的常用组件，这些组件放置在数据线上，一旦电路中接收到ESD脉冲，就会通过将电流从受保护组件转移开来。**确保 PCB 布局**可以对**瞬态保护进行优化**，并且可以**防止炸电路板**并且保证**一个功能良好的设备**。

  

# 一、什么是瞬态抑制二极管及其工作原理？

**瞬态电压抑制 (TVS) 二极管**是一种常用于**保护设备免受与静电放电 (ESD) 相关**的瞬态事件影响的组件。（不要将TVS管与齐纳二极管或肖特基二极管混淆。）

它由一个 pn 半导体结组成，该结在瞬态电压尖峰期间变为导通状态。在正常情况下，**TVS 二极管具有高阻抗和极低的漏电流，实际上相当于开路。**

**当瞬态电压抑制器上的电压上升超过其阈值电压时，半导体中的雪崩效应会导致 pn 结开始导电，从而提供一条低阻抗路径，将过大的电流从受保护的设备中导出。**

TVS 二极管的响应时间非常快，通常以皮秒表示，因此这些组件可以非常快速地转移强 ESD 脉冲，即使该 ESD 脉冲具有相对较快的上升时间。

  

# 二、PCB设计选择合适的TVS二极管

所有的TVS二极管本质上都是二极管：如果你施加足够大的正向或反向偏置电压，TVS二极管就会开始导通，当然，并不是所有的TVS二极管都是一样的。

如果选择了错误的保护，可能会导致瞬态保护从一开始就失效。选择瞬态抑制二极管时，你需要了解一些参数：

**1、反向偏置击穿电压 (VB)**

这是 TVS 二极管开始导通时的反向偏置电压。**一旦 TVS 二极管开始导通，它会将 ESD 脉冲从受保护的组件转移开。**

**2、钳位电压 (VC)**

钳位电压是 TVS 二极管在超过反向偏置击穿后将显着导通的最小电压。该值定义在指定峰值电流的限制范围内。

**通常，较低的 VC 值将为组件提供更多保护，因此应选择 VC，使其小于受保护组件的输入电压限制。**  

**3、额定关断电压 (VWM)**

这表示反向偏置电压限制，低于该限制 TVS 二极管将保持绝缘。**在额定关断电压内，TVS 二极管具有高阻抗，只有少量泄漏电流。**

**4、峰值脉冲功率耗散 (PPP)**

**TVS 二极管需要能够安全地耗散由瞬态电压引起的过大电流**，这由峰值脉冲功率耗散表示。

  

# 三、TVS 二极管如何工作？

所有TVS二极管的工作原理都很简单：当电路接收到ESD脉冲时，该脉冲会很快超过二极管的反向偏置击穿电压值。

**将其任何导体暴露于外部环境（例如通过连接器）的设备可以在这些导体上接收 ESD 脉冲。**如果这些导体是通向组件的信号线的一部分，则接收到的 ESD 脉冲会将高电压/高电流脉冲传输到组件中，这可能会破坏组件。

**当 ESD 发生在信号线上并且信号线上存在 TVS 二极管时，二极管将开始导通，脉冲可以通过二极管。****这允许二极管将 ESD 脉冲从受保护电路转移开**。

典型的连接方式是将阳极接地，这样 ESD 脉冲就会传到地里。只要接地区域存在低阻抗路径，脉冲就会从受保护的组件转移开。

![](https://mmbiz.qpic.cn/mmbiz_png/fUtBqibJmk4QGKKnicbjXdVY0ic72UkzDrHDAPia8icxBHdTr54JxH8wJlk3OuNqvuu8RXnrhqg42SOvfoHYRc7ASCg/640?wx_fmt=png&from=appmsg&random=0.7656528009333512&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

TVS 二极管

#   

# 四、双向TVS二极管还是单向TVS二极管？

TVS 二极管有两种类型：双向和单向。这两种类型的 TVS 二极管具有不同的符号，如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/fUtBqibJmk4QGKKnicbjXdVY0ic72UkzDrH8rpCiaXbsAMAmCgia4wp1fbiaoxkkwUiakIMGCKgbt8iaNu6xBm2EjkTsxA/640?wx_fmt=png&from=appmsg&random=0.5872167801580079&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

双向和单向TVS二极管

**在购买TVS二极管时，要注意一般来说，统称TVS二极管指单向型TVS二极管**，如果你需要双向的TVS二极管吗，则需要说明。

那么应该选择哪种类型的TVS二极管？使用**双向TVS二极管**的主要原因是**在电路承载正极性和负极性信号时提供保护**。这就是为什么你有时候会在差分对或者在正负极性之间振荡的模拟线路上看到双先锋TVS二极管。

大部分人应该都会**更喜欢用双向TVS二极管**，**以提供全面的故障保护和ESD保护**，这是因为接地区域可以接受ESD脉冲，就像要保护的信号线一样。

如果接地故障导致接地路径具有高阻抗，那么阻抗最低的路径可能是通过单向TVS二极管和你要保护的组件。但是**如果TVS二极管是双向的，即使存在接地故障，也会有机会保护元器件。**

#   

# 五、TVS 二极管的 PCB 布局技巧

**除了选择合适的 TVS 二极管外，保护的有效性还取决于 PCB 布局本身。**下面这个示例中2个双向TVS二极管并联连接到下面的示意图中保护的电路。示意图显示了TVS二极管与MAX3485 收发器的典型连接：

![](https://mmbiz.qpic.cn/mmbiz_png/fUtBqibJmk4QGKKnicbjXdVY0ic72UkzDrHAeuzhwthevAzYDhN9ibufCa7OFujHbQrtVib6DMeicfTZ6FgF0Eib21tIg/640?wx_fmt=png&from=appmsg&random=0.23097937249141465&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

TVS 二极管连接的典型示意图

在此示例中，如果在 D+ 和 D- 线路暴露于外部环境的位置发生 ESD ，并且产生相对于 GND 的正电压，则只要 ESD 电压达到，TVS 二极管就会开始导通超过了 TVS 反向偏置击穿电压。

**如果发生导致电流开始在 GND 平面中流动的 ESD ，只要系统中存在低阻抗接地路径，电流就应该完全从组件转移开。**

在接地导体接收 ESD 的情况下，最好使用双向 TVS 二极管，因为它仍会提供一些保护，而如果 TVS 二极管是单向的，收发器可能仍会暴露在某些电压下。

双向 TVS 二极管的首选转移发生，因为施加的脉冲需要上升到某个阈值（TVS 二极管上半部分的 VB 值）以上，然后才能从 GND 到迹线进行导通。

  

**在 PCB 布局中，应遵循一些重要准则以使 TVS 二极管正常工作。这些包括放置、接地以及在屏蔽层上使用任何无源元件，如电阻或电容。**

**1、TVS 二极管的放置**

由于 ESD 可能发生在电子设备中暴露的导体附近，因此**最好将 TVS 二极管放置在这些导体暴露于外部环境的区域附近**。下面显示了一个带有 2 针连接器的简单布局示例。

![](https://mmbiz.qpic.cn/mmbiz_png/fUtBqibJmk4QGKKnicbjXdVY0ic72UkzDrHxPf3hOc5bc3BDc9UgjVplicc0BaRabWKhF32rreFicscWsZnFxs97H9Q/640?wx_fmt=png&from=appmsg&random=0.6351069285968316&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

将 TVS 二极管放置在有接收 ESD 脉冲危险的裸露导体附近

PCB 走线具有一些 寄生电感，可能导致 TVS 二极管的钳位电压增加到其指定限值以上。**TVS 二极管的走线也应相对于收发器的走线较短，以最大限度地降低阻抗并确保消散浪涌中的过多能量。**这将最大限度地减少通向 TVS 二极管的路径中的寄生电感。

**2、接地**

**如果可能，最好将 TVS 二极管连接到与受保护组件不同的接地网。**这并不意味着应该拆分地平面。相反，**最安全的连接类型是将 TVS 二极管连接到机箱接地中的金属元件**（如果可用），通常通过连接到机箱螺钉或安装孔的迹线进行连接。

如果此连接不可用，则可以连接到内部平面。但是，在存在强 ESD 风险的环境中，设备应封装在具有安全金属底盘接地和接地连接的底盘中。

**3、消除屏蔽无源**

某些组件（如屏蔽连接器）将具有一些额外的金属屏蔽层来保护裸露的导体。连接器上的屏蔽并不意味着机械或热保护，它实际上是为了防止噪声接收和防止 ESD。

**如果存在 ESD 危险，则可以将屏蔽连接器与 TVS 二极管一起使用。TVS 二极管连接到信号线，连接器上的屏蔽层直接接地。**

![](https://mmbiz.qpic.cn/mmbiz_png/fUtBqibJmk4QGKKnicbjXdVY0ic72UkzDrHjia68Va8N3X2AibjFWPiamWN6qoKvLktJtAnSWrdNhiaPf8hLptoVEsaibA/640?wx_fmt=png&from=appmsg&random=0.26627467461724663&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

数据线上两个 TVS 二极管的连接示例

上图中，在机箱和信号接地之间放置了一个直接连接。**典型的方法是将此连接放在系统中的一个位置，以确保所有导体上的接地电位均匀，但仍然可以控制常规返回电流，使其不会通过机箱。**

  

只要 GND 是低阻抗、低电感接地层，同样适用这个方法。如果这是系统的电隔离区域，最好将该连接置于更靠近连接器主体的位置，如上图所示。

在某些情况下，你可能会看到有人试图通过缓冲电路或并联 RC 电路将屏蔽层接地。这两者都破坏了使用屏蔽连接器的全部目的。

相反，**在屏蔽和底盘接地（如果可用）或接地层之间建立直接连接**，这将创建一个极低阻抗的接地路径，防止 ESD 事件中的能量到达受保护的组件。

在某些情况下，**控制返回电流会遇到麻烦（例如浮动接地**），适当的方法是**在屏蔽层和接地层之间放置一个大电容**，这确保可以分流快速 ESD 脉冲，并且不会由于两个接地之间的任何偏移而从系统辐射高频噪声。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源玩转嵌入式。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。