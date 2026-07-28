# 【图文】工程师必须要知道的 12 个 PCB 设计原则

原创 硬件笔记本 2023-11-18 11:54 四川

> 原文地址: [https://mp.weixin.qq.com/s/3SRK-1K8\_cnUWlIQP1W3JQ](https://mp.weixin.qq.com/s/3SRK-1K8_cnUWlIQP1W3JQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

今天给大家分享：****工程师必须知道的 12 个PCB设计原则****

# **1、控制走线长度**

控制走线的长度，顾名思义，就是短走线的规则，PCB 设计时****应控制走线长度尽可能短，以免因走线过长而引入不必要的干扰。****

特别是对于一些重要的信号线，例如时钟信号走线，一定要将其振荡器放置得离器件非常近。在驱动多个设备的情况下，应根据具体情况确定网络拓扑。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ib5oBibkTVT8o8h4z7gdrePMHGwMnnxSwvasYr6jQgKMdLKvicHGJNf2KA/640?wx_fmt=jpeg&wxfrom=13)

控制走线长度

# **2、尽量避免形成自环走线**

PCB 设计时，要注意信号线在不同层间形成自环路，特别是在多层板布线时，信号线在层间走线，形成自环路的机会较大，****自环路会造成辐射干扰。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibtPiaB4KnJfcWMFd6UIEmBgNdQwPcnl4DzY6qpEAgIFHuyaPESdJTd8w/640?wx_fmt=jpeg&wxfrom=13)

尽量避免形成自环走线

# **3、最小接地环路原则**

接地环路最小规则，即****信号线及其环路形成尽可能小的环路面积，环路面积越小，对外辐射越少，受到外界的干扰也越少。****

对于这个规则，在地平面划分时，要考虑到地平面和重要信号线的分布，防止地平面开槽等带来的问题。

在双层板设计中，在为电源留出足够空间的情况下，留下的部分应填充参考地，并添加一些必要的过孔以有效连接两侧信号，尽量使用地隔离对于一些关键信号，对于一些频率较高的设计，需要特别考虑其地平面信号环路问题，建议采用多层板为宜。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibFpURW829kByAd6jDjWwG6picWfPzsibqNUoCicjeEXibOYlYQ1tagJD9uw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

最小接地环路原则

# **4、高速信号屏蔽设计**

相应的接地环路规则，其实也是为了尽量减少信号环路面积，多用于一些比较重要的信号，比如时钟信号、同步信号。

对于一些特别重要、特别高频的信号，应考虑****采用铜轴电缆的屏蔽结构设计****，即布上的线上下左右与地线隔离，同时还要考虑****如何有效地让屏蔽层接地并与地线隔离。实际地平面有效结合。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ib4gibtSouNud8DpBSRaDbDQjazVqXRPXoOEzFbDZKYVA489bdJ0HBPQw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

高速信号屏蔽设计

# **5、避免“天线效应”**

一般**不允许一端悬空布线**，主要是为了****避免“天线效应”，减少不必要的干扰辐射和接收****，否则，可能会带来不可预测的结果。

# **6、倒角规则**

****PCB 设计应避免产生尖角和直角，产生不必要的辐射****，同时工艺性能也不好。所有线与线的角度应≥135°。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibCoou6CoRjdRsMicKJ8BCDjHNKOn4qFJke1T0tjSy06UicCdRflkPrBfw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

倒角规则

# **7、避免不同电源层重叠**

****不同电源层在空间上要避免重叠****，主要是为了减少不同电源之间的干扰，特别是一些电压差异很大的电源之间，电源平面重叠的问题必须尽量避免，难以避免时可以考虑间隔地面层。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibAvDTibvcGUrVhr78k9mJSeswQeJZicRIvoysLm15dZepZD8CEM5pHdKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

避免不同电源层重叠

# **8、避免过孔距离 SMT焊盘太近**

如果过孔没有油塞孔，在布局时很容易将过孔打的太靠近SMT焊盘，这会****导致 SMT 焊盘回流时焊料通过过孔流到 PCB 的另一面，造成SMT焊料不足导致虚焊等问题。****

一般建议过孔边缘与 SMT 焊盘的距离大于 25mil，并在过孔上涂油。

# **9、不要将比 SMT 焊盘宽的走线直接拉入焊盘中**

如果走线比焊盘大的话，SMT焊盘的窗口面积一般会扩大超过焊盘的尺寸，这就会导致原来 SMT 焊盘窗口的露铜部分在走线上扩大，这意味着，****如果回流焊时焊盘上的焊锡膏稍微不足，就会存在虚焊风险****，如下所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibqPdtgrkXvwOFmxZG67Rwx3TSVSsoDkicpDIBDy8tu8ujIQ3WextG8Rg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

不要将比 SMT 焊盘宽的走线直接拉入焊盘中

另外，使用比焊盘大或者比焊盘稍小的走线也可以避免焊接时散热过度的问题。

# **10、不要将元件放置得太靠近板边缘**

在 PCB 的组装和焊接阶段，PCB 会在各个工艺区域来回传送，比如锡膏，传送到贴片机，然后传送到回流焊机进行焊接，所以我们****在设计 PCB 时，板上必须至少有一对面在另一面为传送带留出足够的空间，即工艺边。****

工艺边的宽度不小于3mm，长度不小于50mm。工艺边的范围内元件和引线之间不能有干扰，否则会影响 PCB 板的正常传输。

如果 PCB 板的布局不能满足，可以采用单独增加 3mm工艺边或面板的方法。（注：SMT元件不可能在工艺板 两侧距离板边 5mm 以内放置，这样方便回流焊。）当然，如果你的 PCB 上的元件是手工焊接的，你就不需要通过传送带时，可以忽略。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibibT5ic7CRWqRxuOt7IOJM7vjZgiapHydXz56zLib6pQYgYXmIIApR5TsMg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

不要将元件放置得太靠近板边缘

**如果采用拼版，元件应与 V 形切口或邮票孔的边缘保持安全距离，以避免在板分离过程中损坏元件或对焊盘造成应力损坏。**

对于需要机器自动分板的 PCB，要求 V-CUT 线两侧（Top和Bottom面）各保留不少于1mm的器件禁区，以避免自动分板时损坏器件。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibQjibh7adA6L1rUvStZFKvPLaQWgyKRqK57mibNCM9lSPFIfUxGYJb9sQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

V-CUT 线两侧（Top和Bottom面）各保留不少于1mm的器件禁区

同时，还需要考虑自动分板机刀片的结构。****距单板登机区 5mm 范围内，不允许布放高度高于 25mm 的器件。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibIgjBXRsVuv24UP9P5f2NzQKwRUTGaIdSibtw6iaibI1dBHnNX1APFE0Vg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

自动分板机刀片：不允许布放高度高于 25mm 的器件

采用 V-CUT 设计时，需要综合考虑以上两项，以较严格者为准。确保V-CUT过程中不会损坏元件，并且方便 PCB 分离。

如果****拼版通过邮票孔连接，则组件距离邮票孔板边缘应大于 100mil。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5ibN7C1vJaLmQw06MSNgBV4lJ6WvFEM2bAH4KiaudyXNbSbGpiaDy2uwxaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

组件距离邮票孔板边缘应大于 100mil

# **11、阻焊开窗尺寸尽量保持统一**

我们知道 PCB 封装焊盘需要在阻焊层中开孔。****阻焊开口意味着焊盘区域不能被绿色阻焊覆盖****。为了保护PCB电路在焊接时不被氧化和短路，我们的 PCB 外层通常会覆盖一层阻焊层。常用的阻焊剂是绿油（当然也有黑、红、黄、蓝等油）。

但焊盘上不能涂绿油，以免焊上锡。为了避免阻焊层因工艺公差而作用在焊盘上，从而影响焊盘的可焊性，我们一般会设计比焊盘更大的阻焊层开口面积，一般扩大0.1毫米（4mil），当然也可以不扩大，使阻焊开口面积与焊盘尺寸相同，工厂统一为你处理。

但这要求****在制作 PCB 封装时，阻焊开口的尺寸必须相同，****例如与焊盘尺寸一样大，或者比焊盘尺寸大0.1mm。如果有一些外部膨胀0.05mm的和一些0.1mm的外扩，工厂处理起来会比较困难。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmdibDbtaEce1Iy5K3356yK5iboq8I9tIdMQEDmfeat9icZC6CdegNKod8SD4OAnsBUiasgVtdcAn6V1mA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

阻焊开窗尺寸尽量保持统一

# **12、减少 EMI 干扰**

每个 PCB 都可能受到 EMI 的影响或成为干扰源。作为工程设计，在在进行PCB 布局时需要非常注意：

-   增加高频走线与低频或模拟走线之间的间隙。
    
-   最大限度地减少高速信号的返回路径并确保它们不会跨越分割平面。较小的电流环路可降低 EMI 辐射的强度。
    
-   高速差分信号应并排走线且长度相等，否则会抵消差分对的噪声抑制特性。
    
-   避免在高速走线上使用过孔，因为它们可能会导致 EMI 发射。
    

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条百芯EMA。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。