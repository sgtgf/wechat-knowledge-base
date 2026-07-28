# 超全超详细"USB Type-C"接口设计教程

原创 硬件笔记本 2024-03-11 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/eqb\_3ggJB\_kDhatJODs4YA](https://mp.weixin.qq.com/s/eqb_3ggJB_kDhatJODs4YA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

**一、Type-C简介**

USB Type-C是一种相对较新的标准，旨在提供高达10Gb / s的高速数据传输以及高达100W的功率流。这些功能可以使USB Type-C成为现代设备的真正通用连接标准。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjXLksgDoLwb3mh9zfSXZLMGpvKVrViapVXmB7sZMbmD8wjMIKNnD5F7CM1g5PibeYRWlBMzNXfaVicg/640?wx_fmt=png&from=appmsg)

图1 三种USB接口

对于传统的USB Type-A或Type-B的设备，在接口定义中就已经规范了供电接口(Source)和受电接口(Sink)的形态，因此不必担心反接或错接的行为。而对于Type-C接口的设备，由于不存在这些区别，用户无法获知其接口的类型，因此需要Type-C控制器自身完成。（感谢关注公众号：硬件笔记本）那么Type-C接口是如何实现相互识别的，又是如何提供正确的供电逻辑的?

  

**二、Type-C****接口的引脚定义**

Type-C接口分为母头(Receptacle)和公头(Plug)。完整的Type-C引脚为24个。

USB 2.0差分对

D+和D-引脚是用于USB 2.0连接的差分对。插座中有两个D +引脚和两个D-引脚。

但是，引脚相互连接，实际上只有一个USB 2.0数据差分对可供使用。仅包括冗余以提供可翻转的连接器。

电源和接地引脚

VBUS和GND引脚是电源和信号的返回路径。默认的VBUS电压为5 V，但标准允许器件协商并选择VBUS电压而不是默认值。电源传输允许VBUS具有高达20 V的电压。最大电流也可以升高到5A。因此，USB Type-C可以提供100 W的最大功率。

当为诸如笔记本电脑的大型设备充电时，高功率流可能是有用的。图3显示了RICHTEK的示例，其中降压 - 升压转换器用于生成笔记本电脑所请求的适当电压。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiamw2B1ibCnR2PYI4PCsmSoxgH9ib52PBicBv7Bjtltcq3jbXSkzr7hZLrkR3CgV0iaQW9gmYxIxOyIBg/640?wx_fmt=png&from=appmsg)

RICHTEK示例

请注意，电源传输技术使USB Type-C比旧标准更通用，因为它使功率水平适应负载的需要。您可以使用同一根电缆为智能手机和笔记本电脑充电。

当然，在实际产品设计中，工程师会根据产品定义适当缩减Pin脚数量以节约成本。例如，对于只提供充电的产品，如电源适配器，这类产品不需要USB3.0的高速数据通信，因此只保留CC、VBUS、GND和D+/D-引脚（感谢关注公众号：硬件笔记本）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjXLksgDoLwb3mh9zfSXZLMtEaicndg0ibxAZTdVS4VG5kJPVsVPNo1CmPav3RYfAeibbgPy2KllFDog/640?wx_fmt=png&from=appmsg)

（a）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjXLksgDoLwb3mh9zfSXZLMrxCYhGib8GwjvyXL3cWM4yJjIM7wkM0mWIRmaFKX5bY5ibNQ2Ox6vpKg/640?wx_fmt=png&from=appmsg)

（b）

图2 USBType-C母头(a)和公头(b)的引脚定义

RX和TX引脚

有两组RX差分对和两组TX差分对。

这两个RX对中的一个以及TX对可用于USB 3.0 / USB 3.1协议。由于连接器是可翻转的，因此需要多路复用器通过电缆正确地重新路由所采用的差分对上的数据。

请注意，USB Type-C端口可以支持USB 3.0 / 3.1标准，但USB Type-C的最小功能集不包括USB 3.0 / 3.1。在这种情况下，USB 3.0 / 3.1连接不使用RX / TX对，并且可以被其他USB Type-C功能使用，例如备用模式和USB供电协议。这些功能甚至可以利用所有可用的RX / TX差分对。

  

CC1和CC2针脚

这些引脚是通道配置引脚。它们执行许多功能，例如电缆连接和移除检测，插座/插头方向检测和当前广告。这些引脚也可用于Power Delivery和Alternate Mode所需的通信。

下面的图4显示了CC1和CC2引脚如何显示插座/插头方向。在此图中，DFP代表下游面向端口，该端口充当数据传输中的主机或电源。UFP表示上游面向端口，它是连接到主机或电力消费者的设备。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiamw2B1ibCnR2PYI4PCsmSoxzibUgIFcmDzmHeaVDhICL9ALYyFTiaDG4BzryjHibic9ypzd7qibxWJSnyw/640?wx_fmt=png&from=appmsg)

图4.CC1和CC2引脚

  

DFP通过Rp电阻上拉CC1和CC2引脚，但UFP通过Rd将它们拉低。如果没有连接电缆，则源在CC1和CC2引脚处看到逻辑高电平。连接USB Type-C电缆可创建从5V电源到地的电流路径。

由于USB Type-C电缆内只有一根CC线，因此只形成一条电流路径。例如，在图4的上图中，DFP的CC1引脚连接到UFP的CC1引脚。因此，DFP CC1引脚的电压低于5 V，但DFP CC2引脚仍处于逻辑高电平。因此，监控DFP CC1和CC2引脚上的电压，我们可以确定电缆连接及其方向。

除电缆方向外，Rp-Rd路径还用作传递源电流能力信息的方式。为此，功耗（UFP）监视CC线上的电压。当CC线上的电压具有其最低值（约0.41 V）时，源可以分别为USB 2.0和USB 3.0提供500 mA和900 mA的默认USB电源。当CC线电压约为0.92 V时，源可提供1.5 A的电流。最高CC线电压约为1.68 V，对应于3A的源电流能力。

  

VCONN引脚

如上所述，USB Type-C旨在提供超快的数据传输速度以及高水平的功率流。这些特征可能需要使用通过在内部使用芯片进行电子标记的特殊电缆。此外，一些有源电缆利用重新驱动芯片来加强信号并补偿电缆等引起的损耗。在这些情况下，我们可以通过施加5 V，1 W电源为电缆内部的电路供电提供给VCONN引脚。如图5所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiamw2B1ibCnR2PYI4PCsmSoxicGoYGcygZoy5eUX9oRG1Atlfic8TfnWXmVKbOoHwNvAL5okkNnib2x2A/640?wx_fmt=png&from=appmsg)

图5.VCONN引脚

如您所见，有源线缆使用Ra电阻来下拉CC2引脚。Ra的值与Rd不同，因此DFP仍然可以通过检查DFP CC1和CC2引脚上的电压来确定电缆方向。确定电缆方向后，与“有源电缆IC”对应的通道配置引脚将连接到5 V，1 W电源，为电缆内部的电路供电。例如，在图5中，有效的Rp-Rd路径对应于CC1引脚。因此，CC2引脚连接到VCONN表示的电源。  

  

SBU1和SBU2针脚

这两个引脚对应于仅在备用模式下使用的低速信号路径。

  

  

**三、Type-C设备之间如何识别**

就供电而言，Type-C设备可分为三类

1\. 只能作为供电端(Source)的Type-C设备，如Type-C充电器等

2\. 只能作为受电端(Sink)的Type-C设备，如Type-C手机等

3\. 既可以作为供电端(Source)，又可以作为受电端(Sink)的Type-C设备(DRP，Dual RolePort)，如Type-C笔记本，双向充电宝等。

显然，**当两个Type-C设备通过C2C线材连接在一起时，双方必须知道对方属于何种类型的设备，否则会带来不理想的充电(如反向充电)，或者不充电，甚至导致产生安全问题。**

例如，当用户利用充电器(Source)给Type-C双向充电宝(DRP)充电时，理想情况下，充电宝应当“担任”Sink的角色。然而，由于设备类型识别错误，可能导致充电宝“担任”Source角色而发生“电流倒灌”的现象，损坏两方设备（感谢关注公众号：硬件笔记本）。

**Type-C****接口规范通过CC引脚的一系列“上拉”和“下拉”的机制来区分Source、Sink以及DRP。****对于Source设备，要求CC引脚配置上拉****电阻****Rp;****对于Sink设备，要求CC引脚配置下拉电阻Rd; 而对于DRP设备，要求通过切换开关，交替性地切换上拉和下拉。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjXLksgDoLwb3mh9zfSXZLMEck5SppiapqJ2cxFBRafnoicicjolACUibNCQvJaSaokLiaWyaoz3fCsGiaw/640?wx_fmt=png&from=appmsg)

图3 CC引脚的“上拉”和“下拉”

**Source****通过检测Rp端的CC引脚判断是否有设备接入，Sink通过检测Rd端的CC引脚判断正反插的方向。**

下拉电阻Rd=5.1k，上拉电阻Rp根据其供电能力和上拉电压不同而设定。USB Type-C的供电能力有如下几种：

1\. 默认USB供电能力(Default USB Power)。USB2.0接口为500mA; USB3.2接口为900mA和1500mA

2\. BC1.2(BatteryCharge 1.2)协议。支持最大功率7.5W，即5V1.5A

3\. USB Type-C电流1.5A(USB Type-C Current 1.5A)，支持最大功率7.5W，即5V1.5A

4\. USB Type-C电流3A(USB Type-C Current 3A), 支持最大功率15W，即5V3A

5\. USB PD(USB PowerDelivery)协议, 支持最大功率100W，即20V5A

这五种供电能力优先级依次升高，且供电功率也逐渐提高。高优先级的供电能力会覆盖低优先级的供电能力。其中Default USB Power，USB Type-C Current 1.5A和USB Type-C Current 3A可通过配置Rp值来设置（感谢关注公众号：硬件笔记本）。

当两个设备连接完成后，Sink通过检测Rp和Rd的分压值vRd获取Source的供电能力。如下为Rp值，vRd电压范围与Source供电能力的对应关系。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjXLksgDoLwb3mh9zfSXZLMaiaxAGdibyZ978xENUsck3naOJl3vdicibJ76vyf6LmmPNhbXzWO8V1rEw/640?wx_fmt=png&from=appmsg)

图4 Rp值，vRd电压范围与Source供电能力的对应关系

**与此同时，设备的另一个CC已经被悬空或者通过Ra=1k下拉。若有Ra下拉，则说明USB-C线材内置eMarker****芯片****，需要Source端通过切换该引脚至VCONN为线材供电。**

至此，我们已经解释了设备之间通过“上拉”或“下拉”，或者在二者之前交替性切换，来判断Source、Sink以及DRP，并通过Rp电阻值，vRd电压值设置和判断Source的供电能力。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章整理于网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。