# 一文搞懂PFC电源原理

原创 硬件笔记本 2023-10-17 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/vsjN158NuaWDUM18dUmGVA](https://mp.weixin.qq.com/s/vsjN158NuaWDUM18dUmGVA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

追求高品质的电力供需，一直是全球各国所想要达到的目标。然而，大量的兴建电厂，并非解决问题的唯一途径。一方面提高电力供给的能量，一方面提高电气产品的功率因数（Power factor）或效率，才能有效解决问题。

  

有很多电气产品，因其内部阻抗的特性，使得其功率因数非常低，为提高电气产品的功率因数， 必须在**电源输入端加装功率因数修正电路**（Power factor correction circuit）。但是加装电路势必增加制造成本，这些费用到最后一定会转嫁给消费者，因此厂商在节省成本的考量之下，通常会以低价为重而不愿意让客户多花这些环保金。

  

大多数的消费者，也因为不了解功率因数修正电路的重要性，只以为兴建电厂才是解决电力不足问题的唯一方案，这是大多数发展中国家电力供应的一大问题所在。

  

  

  

  

  

功率因数的意义

  

电力公司经由输配电系统送至用户端的电力（市电）是电压 100-110V/60Hz 或 200-240V/50Hz 的交流电， 而电气产品的负载阻抗有三种状况：包括电阻性、电容性、和电感性等。其中只有电阻性负载会消耗功率而产生光或热等能源转换，而容性或感性负载只会储存能量，并不会造成能量的消耗。在纯阻性负载状况下，其电压和电流是同相位的，而在电容性负载下，电流的相位是超前电压的，在电感性负载下电压又是超前电流相位的。

  

这超前或滞后的相位角度直接影响了负载对能量的消耗和储存状况，因此定义了实功功率的**计算公式：**

Ｐ＝ＶＩＣｏｓθ

  

θ为 V 和 I 和夹角，Cosθ的值介于 0-1 之间，此值直接影响了电流对负载作实功的状况，称之为功率因数（Power Factor，简称 PF）。

  

为了满足消费者的需要，电力公司必须提供 S=VI 的功率，而消费者实际上只使用了 P 的功率值，有一部分能量做了虚功，消耗在无功功率上。PF 值越大，则消耗的无功功率越小，电力公司需要提供的 S 值也越小，将可以少建很多电厂。

  

  

  

  

  

功率因数修正器的结构

  

功率因数修正器的主要作用是让电压与电流的相位相同且使负载近似于电阻性，因此在电路设计上有很多种方法。其中依使用元件来分类，可分为被动式和主动式功因修正器两种。被动式功因修正器在最好状况下 PF 值也只能达到 70%，在严格的功因要求规范下并不适用。若要在全电压范围内（90V~265Vac）且轻重载情况下都能达到 80%以上 PF 值，则主动式功因修正器是必要的选择。主动式功因修正器多为升压式电路结构（Boost Topology）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdM7KRYq6NAXrClQDKEApTX1tyZ5Q8RyibIgT0oXC3h2Niaib2D08JeB5P9g/640?wx_fmt=png)

  

如图一所示，图二为电感作用波形，输入电压要求为 90V~265Vac，在 Vd 点则为 127V~375V 直流电压， 由升压电路把输出电压 Vo 升到 400V 的直流，其工作过程如下：

  

1、 当 Q 导通时，电感上的电压 VL=Vd,此时 Vd、L、Q 形成回路，Vd 对电感 L 充电，回路如图一中虚线所示，此时电感电流ζL 循着同一斜率上升，到 Q 截止为止，工作周期（DT）结束。

  

2、 当 Q 截止时，电感电压反相且加上 Vd 经由二极管 D 对输出端开始放电，此时电容 C 是成充电状态，且RL 维持 Vo 输出，其中 Vo 之大小为输入电压 Vd 加上电感电压（-VL）的值（由于电感电压反相，-VL 反而是正值），其回路如图一中灰线所示，直到 Q 再度导通为止（即（1-D）T 时间段结束）。

  

如想要图一中的升压型电路具有功率因数修正功能的话，则 Q 的控制信号必须来自具有功因修正功能的 IC（PFC IC），并要取电压回路和电流回路来做反馈控制，把这些信号回传到 PFC IC 来控制 Q 的导通与截止，进而达到电流波形整形的目的。

  

PFC IC 分为两种，一种是非连续电流模式功因修正器（DCM PFC），适用于较低功率需求的功因修正。欧洲的能源规范定为 70W 以上的电源供应器必须加装 PFC 电路，DCM PFC 一般使用在 200W 以下。另外一种是连续电流模式功因修正器（CCM PFC），一般使用在 200W 以上到数千 W。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMmlVd8LcIX7rQxfIFy8PvB2we5Ue89nVCDItPkaGndqxLPl1oc0q2ibQ/640?wx_fmt=png)

图三  峰值电流控制模式的 DCM PFC

  

  

  

  

  

DCM PFC 的控制方式

  

无论 CCM 或 DCM 的 PFC，其电路结构都是升压电路，其中**最大的区别在于控制模式**，DCM PFC 一般使用峰对峰值电流控制模式（如图三所示）。此种模式主要是当 AC 输入后，经桥式整流而成的类似 m 形的电压波形，经 R5、R6 分压后，再和一个经由误差放大器（Error Amplifer）放大后的输出信号 Vc 相乘。此举是为了给流经 Rs 的峰值电流一个参考比较的电压 Vm，并且这个电压会随着输入和输出的电压大小而作调整，其中输出电压经由电阻 R3 和 R4 分压后， 经由误差放大器负反馈至乘法器输入端，可使当负载改变时，输出电压仍能保持稳定。

  

其中较需注意的是，误差放大器在作闭环回路补偿时，其增益频宽要比六分之一倍的市电频率还要低，以避免干扰PFC 电路的主要功能，所以 C1 和 C2 的值通常都不小，约为 uF 级的电容。当乘法器输出 Vm 时，同一时刻的电压波形仍是一个类似 m 形的波形，只是它是已被整理过的参考电压波形，进而输入比较器的正输入端，而与比较器的负输入端 Q 的 S 极电流的波形（即压降在 Rs 上的电压波形 Vs）作比较， 来控制 Q 的开与关，其波形如图四。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMhCEeqRW3o9RuKwouAZfmnGKsYSuvT8yjJiakJGicEuuPhugPlaWPIueQ/640?wx_fmt=png)

图四   DCM PFC 各点的动作波形

  

起初，当 Q 导通时，输入的直流高压 Vd 对电感 L 充电，使电感的电流ζL 上升（如图四中电感电流波形的 a 到b 点），此时 Rs 上的电压 Vs 也上升，直到 Vs=Vm 时（即 b 点），由于此时比较器（Current Comp）的反相输入端电压高于正相输入端，故 RS 触发器（RS Flip-Flop）的 R 输入端为低电位， 而此时 S 端为高电位，使触发器输出为高电位，使 Qd 导通，而 Vg 为低电位，Q 为截止的状态，电感上电压 VL 反相，加上输入电压 Vd 使二极管 D 导通，开始对输出 RL 和 C5 放电（图中的 b 到c 点），此时负载 RL 仍保持在高电位，而电容 C5 则承受电感放电而呈充电状态，直到电感放电到ζL 值为 0（c 点）为止。

  

当电感电流ζL 为 0 时，RS 触发器的S 端输入低电平，而 R 端为高电位（因为 Vm>Vs），此时触发器的Q 输出为低电位，使 Qd 截止，Q 的 VGS 为高电位，于是 Q 导通，电感的电压 VL 为正向，输入电压 Vd 供应电流流过电感 L 和Q，对电感 L 充电，故流经电感 L 的电流又继续上升，直到三角波电压 Vs 又碰到 m 形波Vm 为止（c 到 d 段），如此反复，电路以此种峰值电流控制模式的方法来得到ζL 电流波形。

  

ζL 的波形是由许多大小三角波所组成，它毕竟不是正弦波，故电路中必须加装一个 C3 电容来滤除电感电流中的高频成分，而使输入弦波电流ζ为完整的基本弦波成分，其大小为电感电流ζL 的平均值。基本上的ζL 峰值大概为电流ζ峰值的 2 倍，这可作为选择 Q 的耐电流量参考。

  

  

  

  

  

CCM PFC 的控制方式

对于 CCM 的PFC 而言，**常用的控制模式是所谓的平均电流控制模式**，其控制模式电路如图五所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMDPj4nqRv7bonicth7s5xiaSwctiaibxXUK9VJa329YdXSziba8VZgOH9ugQ/640?wx_fmt=png)

  

图五  平均电流控制模式的升压型电路

  

  

图中的 Vin 为直流电压而 Ip 为直流电流。其各点的电压及电流波形如图六所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLYwiaHR6ZjC0YrbRoaFmdMe7yVEJPDds810mE5MNyZ8CdfTmYVTicBjKR6h208libibMia2EGRxfhZrg/640?wx_fmt=png)

图六 平均电流控制模式升压型电路之各点波形

  

其中 Q 的栅极受控于 PWM 比较器的 Vs 电压和Vc 电压的比较结果：当 Vs 大于 Vc 时，比较器输出为低电位，而 Vs 小于 Vc 时，比较器输出为高电位。因此电路刚开始运作时，Vs 小于 Vc，此时比较器输出高电位，Q 导通。如图五中 Vin 循着虚线路径向电感 L 充电， 故电感电流ζL 上升（a 到 b 段），到 b 点时，由于 Vs 大于 Vc 时，比较器输出由高电位变成低电位，Q 截止，Vin 电压加于电感 L 的反向电压经二极管 D 向电容 C 充电，并供应电压给负载（如图中灰色路线），此时电感 L 为放电状态，故电感电流ζL 下降（b 到 c 段），到 c 点时，Vs小于 Vc，此时比较器又输出高电位，使 Q 再度导通。如此周而复始，以电流放大器的电流波形和锯齿波相互比较而产生 Q 的驱动波形，达到**以平均电流来控制负载电压的目的**。

  

注意图六中的波形，在 ab 段或cd 段等单数时间段时，Vc 电压的波形在要和 Vs 交错前必定是负斜率， 此时 Vs 为正斜率，并且必定要交错，否则无法控制，而在 bc 段或 de 段等偶数段时，Vc 和 Vs 都是正斜率，可是 Vc 的斜率必定要比 Vs 小，否则无法交错，也无法控制，因此在设计控制电路时，必需要注意到这些控制的重点来安排周边元件参数，否则不是电路无法动作，就是电路失控而损坏。

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