# 高速 PCB 设计如何保证信号完整性？

原创 硬件笔记本 2024-05-17 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/bspNUCMCh59XDgYAyvdMlw](https://mp.weixin.qq.com/s/bspNUCMCh59XDgYAyvdMlw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

今天给大家分享的是：****高速 PCB 设计****

主要是关于 **4 个高速 PCB 设计常见术语**和**保证信号完整性的3 种常见技术**介绍。

# **一、高速 PCB 设计常见术语**

**1、转换率**

这里要明白一个点，****不存在从关到开的瞬时转变****，电压必须是从低电平转换到高电平，虽然速度很快，但也会通过这中间的所有电压。

在转换器期间的某个时间点，它是1.8V，而在另一个时间点是2.5V。电压从低状态转变到高状态的速度称为**转换速率。**

**2、速度**

**电信号也有速度限制-光速，光速非常快**。考虑到1GHz 信号的周期为 1ns（1 纳秒），光的传播速度约为 0.3 m/ns，即 30 cm/ns，意味着在 30 cm 长的导体上，当下一个时钟脉冲在其开始处生成时，1GHz 信号的第一个时钟脉冲刚刚到达导体的另一端。

假设为 3GHz，当第一个脉冲到达导体的另一端时，时钟信号源已经生成第三个脉冲，如果是 3GHz，30cm 导体，意味着****单个 30cm 导体在其长度内包含3 个脉冲、3 个高状态和低状态。****

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/iayzTbicUDics6GlRbKvCasNKN5zpTxNKttia640e30hSwcwgGpUJ1fL3hksVrpAUx2oMRSTUjms2ic3k739kibGQd3w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

信号传输不是瞬时

**3、可靠性**

每当电流通过导体时，就会在导体周围产生磁场，。相反，当磁场穿过导体时，会在该导体内产生电压。因此****电路中的所有导体（通常是 PCB上的走线）都能产生和接受电磁干扰，可能会导致走线传输的信号失真。****

PCB上的每个轨道也可以被视为一个小型无线电天线，能够生成和接受无线电信号，可能会使轨道承载的信号失真。

**4、阻抗**

在上面已经讲到过，电信号不是瞬时，实际上在导体中以波的形式传播。在 3GHz / 30cm 迹线示例中，任何给定时间导体内都有 3 个波（波峰和波谷）。

**波会受到各种现象的影响，其中对我们来说最重要的是“反射”。**

这里想象一下，我们的导体就像充满水的运河/通道。波在通道的一端产生，并沿着通道（以接近光速）传播到另一端。通道本来有100cm宽，但在某个时刻突然变窄到只有1cm宽，当我们的波到达突然变窄的部分（本质上是一堵有小缝隙的墙壁），大部分波会被反弹回来狭窄的部分（墙壁）并向后朝向发射器。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/iayzTbicUDics6GlRbKvCasNKN5zpTxNKttXYLx2lflXYROQmoiaaBbvYqxM5EHLtUX9MmQxMYjj0aFib2JVsR1OSuA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

由于宽度变化而产生的波反射

如果运河/通道内有多个狭窄部分，就会有多次反射反弹，干扰信号，信号的大部分能量也不会到达接收器（至少不会在正确的时间）因此，重要的是通道的宽度/高度沿其长度尽可能保持恒定，避免反射。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmsibPQ3XbwPcknOficsXunM7KEAsGkSyzXmYcIEN6KsNuSKx9oFRbib8hDQ/640?wx_fmt=png&from=appmsg)

宽度的多次变化会降低信号质量

也就是****阻抗，****是导体的电阻、电容和电感的函数。对于高速设计，我们希望****走线的阻抗沿其长度尽可能保持一致****，另外一件需要考虑的事情，特别是在总线拓扑中，我们希望****在接收器处停止波，而不是让它再次反弹。****

**这通常是通过终端电阻来实现的，终端电阻会吸收末端波的能量总线（例如RS485）**

# **二、信号完整性**

在设计电路时需要考虑回转、速度、磁干扰和阻抗。

在 PCB 设计过程中考虑阻信号完整性意味着要考虑所有的这些因素，并且在PCB上采取适当的对策。

下面是 PCB 设计中使用的几种常见技术。

**1、长度匹配轨道**

当我们的通信信号使用多条线路时，例如”时钟“和”数据，可能具有8条/更多数据线的并行总线，那就必须确保信号全部到达接收器同时。

现在已经知道电信号不会瞬时传播，那我们就可以理解，如果多个信号在不同长度的轨道上传播，那么将在不同时间到达接收器。（即使它们是在完全相同的时间传输的）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnms1w8ESh5mtZU9r4mlhXbfBkT6xL7xtBjyKupOBDwaGdxxlkib4aVgJfg/640?wx_fmt=png&from=appmsg)

不均匀的轨道长度可能会导致接收器发出不正确的信号

考虑具有条时钟线（C）和2条数据线（A和B）的通信方案。如果数据线B的长度比数据线A的长度长的多，则B线上时钟脉冲#1的信号可能与B线上时钟脉冲#2的信号同时到达接收器，一条线路到达接收器，一条线路到达那里，完全扭曲和破坏了通讯。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmse6wrkiadehxogu4dFRrmjrDWc6Y5Jqf7bTHzYUgs3fjUbK5Nvhm46RQ/640?wx_fmt=png&from=appmsg)

轨道 A 和 B 的长度不同

另一种可视化的方法是想象很多人在两条不同的跑道上跑步，每个人只能携带一半的信息，并且信息会在终点线重新组装。如果人以相同的速度行进，并且轨道的长度相同，那么将同时到达目的地，并且接收者可以正确地重新组装文件。

但是，如果轨道长度不同，那么人不会同时到达，文件没有办法很容易就重新组装。

**因此多线通信信号中的轨道长度相同非常重要，也就是轨道长度匹配或者网络调谐。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmsHHicm5PlHOKeGv24JbdicwG4EqRcWiaUtBiareCdMA2gXxc2N3aNoyspYQ/640?wx_fmt=png&from=appmsg)

这里特意增加了轨道A的长度，以便从源到接收器的距离与轨道B相同

**2、差分对**

****差分对是一种高度不受电磁干扰的通信技术****。最常见且最容易识别的是实现USB，另一种实现差分对的技术是RS485。

差分对在两个平行导体上使用推拉技术-一个推，另一个拉，如果一条线为高，那么另一条线一定为低，反之亦然。

差分对中的信号通过任一导体上的电压之间的差来测量。差分对的布线严格彼此平行且同相。

****除了轨道长度匹配之外，同相要求意味着如果差分对绕过一个弯曲（导致外轨道比内轨道采用更长的路径），那么内轨道必须人为低添加一点额外的长度****，尽快回到其轨道，以便尽快使平行对的起点/终点的总距离再次均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmsxTTQHj0C0BeVKpia2iapu5LmGtRF3dXEXZ7wHrqZKlc1kzkXhkYX1QDQ/640?wx_fmt=png&from=appmsg)

弯曲差分对的布线

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmsp9LfCY7nuC3IBXIhh4Lb00vLfh3STyju0ThlyIRn5uGO39mZXDstJQ/640?wx_fmt=png&from=appmsg)

添加轨道以保持配对同相

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmsC8BH1HjddTN9wYBUp2CN6UdmnbOsdOetjP87XEnHC4x90cnz3XCrxA/640?wx_fmt=png&from=appmsg)

添加轨道以保持配对同相

**差分对可能遇到的干扰都应该同等地影响两条轨道，这样，它们之前的差异才能保持恒定且可靠。**

保持轨道相同非常重要，如果轨道总的某一特定点受到电磁干扰，就会以相同的方式影响并行信号。如果信号异相，则信号一侧的峰值可能受到影响，而信号另一侧的波谷可能受到影响。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnmsIFJfAdd363g1bbOiadcUqPWNd1NeVu6ryjTFG5oh3siawZVo5vhyoPHQ/640?wx_fmt=png&from=appmsg)

只要两条信号线同相，干扰就会同等影响它们

**3、过孔缝合和屏蔽**

****通孔屏蔽是一种“屏蔽”轨道免受产生和接收电磁干扰的技术。****“电源层”（也称为“接地层”或“覆铜层”）被放置在多个 PCB 层上围绕一个或多个轨道，然后使用过孔将这些电源层层缝合在一起，从而产生以下效果。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaGNQsqe7ice68pYZYLcLnms0vpFp00icgYPZmjfLUXFQpiaiaHsByJO6oxXZfh8hzjAyF88v1mTktD4w/640?wx_fmt=png&from=appmsg)

通过屏蔽差分对轨道

较高的转换速率（信号从“高”到“低”或反之亦然）转换的速度比较低的转换速率产生更多的电磁噪声。压摆率本身通常在芯片数据表中指定（有时是可配置的，例如某些微控制器），因此不是由 PCB 设计阶段决定的，但在屏蔽方面可以对已知高压摆率的信号进行屏蔽。

**过孔缝合用于将两个电源层“缝合”在一起。这样做的原因之一是为信号提供短的“返回路径”，这对于阻抗匹配等很重要。**

原文链接：https://www.labcenter.com/blog/pcb-highspeed-intro/分享

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