# Buck电路电感、电容值的选取

原创 硬件笔记本 2024-04-30 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/XZDgr9FNsHmKd6oMb6eApQ](https://mp.weixin.qq.com/s/XZDgr9FNsHmKd6oMb6eApQ)

点击上方名片关注了解更多

**Buck电路电感选型方法**

开关电源从储能器件类型可以分为电感型的和电容型的。针对电感型的无论是Buck还是Boost，无论是升压降压或其他类型，电感在整个电路里起着非常重要的的作用。主要作用为储能并传递能量，储能的同时会对波形进行整形。

»如下图示:降压转换器由DC输入电源Vin、导通开关S、续流D二极管（单向导通）、储能元件L、输出电容C及负载R组成。  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKkoUltUmZpZ1eWiaIibslQGnA25FyicVBkzlTtNsEdKhOI5EWvLUlR4Lbw/640?wx_fmt=other&tp=webp&wxfrom=13&wx_lazy=1&wx_co=1)

电感有储能并滤除交流成分的效果，储能和滤波的效果是否能满足要求，怎么去选取这个电感？电感有不同类型，构造，材料，参数（它的饱和电流，额定电流等），如何考虑和选取？下面主要来讨论电感的一个选取。

我们知道Buck电路有开关和闭合两种状态，这两种状态分别持续Ton，和断开Toff。

在Ton这段时间里就是闭合的，电流的变化量就是最大电流减去最小电流。

电流增量:

△I=Imax-Imin=(Vin-Vo)\*Ton/L

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKibGUp9mrUoiaEycXgiaXicvjTQxHblrcKiaw3gkLhwqJBqATGkqiaFtcvibiaw/640?wx_fmt=other&tp=webp&wxfrom=13&wx_lazy=1&wx_co=1)

断开之后，电感上面仍然有电流，只是电流在减小，减小的这个量就是最小电流减最大电流。  

电流减量:

△I=Imin-Imax=-Vo/L\*Toff

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKO2z0icib5CfMnvRRiby1z9ubDJAMmpUHh4WImPPt5h6ctHmnKSCBWibUEg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

无论是增量还是减量，统称为电感电流的变化量△IL:

△IL=｜Imin-Imax|=(Vin-Vo)\*Ton/L=-Vo/L\*Toff

而已知Buck电路的Vo=(Vo/T)\*Vin，得:

Ton=(Vo/Vin)\*T=Vo/(Vin\*fswitch)

任意代入△IL=Ton\*(Vin-Vo)/L，可得，流经电感的纹波电流（峰峰值交流成分）Iripple:

Iripple=(Vin-Vo)/L✖️Vo/(Vin\*fswitch)

☞Iripple为峰峰值电流:

Iripple=Vo\*（Vin-Vo）/L\*Vin\*fswitch

\=Ipeak(max)-Ipeak(min)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKIXntxfS3cARR1Qm8T5njVfBgZaHnh1tIxUjcWIupKcE5kFdHQ2m40Q/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

👉🏻出达到稳态后，在某一开关周期内（电流对时间积分，左边绿色区域就是开关闭合时流经电感的电荷，右边紫色区域就是开关断开时流经电感的电荷）:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKsuZGArs8bShexLPticVJruBJhHZ06SfiagJHFOCQEdH249yQXYfbPlRA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

得流经电感电流的有效值（均方根）:

IRMS=\[Ipeak(max)+Ipeak(min)\]/2

当达到稳定状态的时候，流经电感的电流就等于输出电容和负载的电流:

IL=IC+Io

当输出达到稳态时:IRMS=Io(达到稳态的时候，流经负载R的电流就是电感电流的直流成分)

因此:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKWIEKxmu39IOWIX0ISXyOwaLCnPlU320ao00oR5KHP0dHia43iaVHCQ6Q/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

Io负载电流通常指的是最大输出电流。

交流部分就是他的纹波电流，纹波电流最后通过输出电容给它滤波。

为了使Buck工作是CCM模式，则需满足，流经电感的电流始终大于0（正向流通）:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VK2hrncHxl7m1vQ28BQw82HSHhSIA57IWtQO56vtO8iac9RuP1PQpg97g/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

电感电流过小，带负载能力比较弱，属于轻载模式。如果电流为零，可能会出现不连续甚至震荡的情况，所以当有负载的时候，希望他维持在CCM这样的状态（持续电流模式）。要维持CCM电流，就是流经电感的电流要为正或要一直有电流，这个电流无论多大一直要有，不能停不能为零。

将纹波电流带入到小于两倍的输出电流之后，可得维持CCM电感的必要条件:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcyovibwUzbpf7cc4MACfG2VKoz2PHHX1h01jJicrMeOrBwRxYwtpic5ubuTvnxWfGnGwITDicIiaRrXzAw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

只要电感大于这个值，就以为着电感工作时始终有电流，就是维持了CCM的模式，这其实为我们选取电感提供了一个基本的指向。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcy3EmWzP8caF8Oiciano5J9PPLSnBRiaGMvtN4ayYzo4xtDKGowU0mHXvvicNYJPf6nIZklrw1Uiag214w/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

那是不是只要大于维持CCM这个值，输出结果、性能、纹波就好了，其实不是。

让电感值处于维持CCM电感的必要条件时，它的电路性能是什么样子的？

仅维持CCM的最小电流即:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcy3EmWzP8caF8Oiciano5J9PPcLu15NOPE0g1Ocicp7r3qRQRDo1SDZKicicZys0wWO1b4icSNdNG54Uhdw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

很显然，仅维持CCM电流，纹波太大，不符合我们的要求。

因此电感值要进一步加大，加大到多少？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcy3EmWzP8caF8Oiciano5J9PPInW2jlgE0bhgQUdowiciaibibWprR4T2Dud6Nn6bJ9Wrx7ABJNy9JiahocA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

设计一个Buck电路，这些参数都是我们预先需要考虑的。（后端负载对纹波的要求，设定一个什么样的开关频率，DCDC器件满足什么样的开关频率，是否可调）最后我们会得到电感感值L最小取值:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGSrxPClwXV3zWCdE5gj5ibkoquCQKWzQXibhCD1TOnCcX8TY5GicUpgsGg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

其中输入电压，输出电压，输出电流，开关频率，纹波率均为已知量。

通过前式:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGheoH9BHibNibjZhLWZ0WAlWnqLDB3zqA0NhtibPwMlAnbic2ib8iaDvhiavgg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

★可以看到，电感越大，纹波越小，同时大感值电感会带来较大的封装尺寸;

★开关频率越高，纹波越小，同时提高开关频率会导致EMI恶化。

★无论是电感还是电容，它都有温度曲线或者材质的差异，有效值会出现衰减，所以在选取时，在L的基础上适当大一点。

可以在simulink中仿真，通过改变电感值或开关频率观察纹波电流的变化。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGDdSmCAavSAZFAANC6SdtmALxvtQIJeGE1aw7VKWYiaLwBeZaF7q1CNw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

\[额定电流\]电感的额定电流要大于流经电感电流的有效值Irms（考虑器件温升），即最大输出电流。

\[DCR\]同时考虑能量损失及发热，也希望选取DCR(ESR)更小的电感，可能需要在尺寸和DCR之间平衡。（电感的理想模型是只有一个感值，那实际在生产过程中，封装过程中，它很多材料还有一些寄生参数，会有等效串联电阻。）

  

**Buck电路电容值选取**

电感在电路中起着储能的作用，电容它起着滤除交流成分的作用，电容是如何滤除交流成分的？

我们知道电容最基本的一个特性就是隔断直流通过交流。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jG3cL6rxNUoVNaEp1Rhuic6Ca6YfJJ9fnRcVfnKeEom31fLMaxISGdiaag/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

交流成分流向电容，直流成分流向负载，当然还会存在一部分交流也流向负载，这是我们不希望看到的，因为我们希望有一个稳定恒定的输出。

电容它最本质的一个结构构造就是两片导体中间充斥着某种电介质，这时它有了一定的电容值。当电容两个金属片上有电荷的时候，他就会有电压，电荷传递的时候就会形成电流，所以当外界向电容传递电荷的时候，有电荷的移动就意味着有电流流向电容，同样当电容向外界释放时，那就有电流流出电容。所以把电容作为一个整体来看，电流可以流进电容，也可流出电容，就说明他可以通过交流。

  

👉🏻输出电容的重要性

极端情况下，DCDC电路中没有输出电容，会发生什么？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jG9WJt60OohPlwaLlFRKXA0hueHNOicndAEAUYSjQJ0LEoBNArHxIPgag/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

DCDC，我们知道直流到直流，是电压之间的变换，功率之间的传递，我们希望一个稳定的恒压输出，那输出电容选什么样的输出电容，它的容值选取多少合适？

根据并联电路知:

Vo=Vc

因此输出电压的纹波，即输出电容上的纹波;

电容＂配合＂电感电流的变化;

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGtpJcTORl1FibBL09OyVaCGqB7L2yVpTJLtQVQM4MX8F0YGjrDh7uyicA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

从上图也可以看到，电容它的电流一直在正负的变化，就是一会电流充电，一会电流放电，只要电容上的电荷不变化，哪怕有基础电荷，电压直流加在电容两端，它上面有很多电荷，达到稳态的时候，电容两端并没有电流（有电荷无电流）。

根据电容的特性:C=Q/V，我们知道，一个电容只要两端有了电荷就会有电压，电荷变化会有电压，电压变化会带来电流:

i=C\*dV/dt

★并联电容后，交流部分可通过;

★通过前面的分析流经电感电流分为两部分:

IL=IRMS+IAC(交流成分)

其中:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGibAnmAmAAa6ZvQRltE8kWbvcLXMG7Tz76ATBBfqGA9Wgrg3ibETBnvlA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

👉🏻纹波电流和纹波电压

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGldXMnTu41r78hHhY4YYWYOSFaUVOyBI064oXrSJWtORMmiaAI7dibHicA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGkcfDxCFoGP129WU9wHNjBicibsq0Ocp7ABvCVPTPibla3UvVha6GFAE0A/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

化简得:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jG4WXBPcxgyVUmHPmpacnOYwliaT0swKhUIsX1iaPQoqXiaic6FiaTW82APYQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

★可以看到，电容值越大，输出纹波越小，同时大容值会带来较大的封装尺寸和成本;

★开关频率越高，输出电压纹波越小，同时提高开关频率会导致EMI恶化。

将上式继续转换，可得电容值C最值:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGDrUL08mYggC3icBTVyDR738jhshhVicp1zrn6bZ641O3zGSaMIESTCtQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGFG3J0PB0fXvsPf47PVL97icibjTQdfBMw9mfbeSqU9SCNYs2G6xTzQpQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

可以看到输出电压纹波与电感电流纹波率，输入电压，输出电压，开关频率，电感，输出电容等均有关系，尤其是后三因素。

  

👉🏻为什么与电感，频率相关？

★LC低通滤波器:其中串联的电感L能阻断高频噪声，并联连接电容C来使高频噪声旁通的方式发挥作用。

★电感线圈对交流有限流作用，由电感的感抗公式可知，电感L越大，频率F越高，感抗就越大。

★电感线圈有通低频，阻高频的作用，这就是电感的滤波原理下面是LC滤波电路示例电感在电路最常见的作用就是与电容一起，组成LC滤波电路。具有＂阻直流，通交流＂的本领，而电感则有＂通直流，阻交流，通低频，阻高频＂的功能。

★交流干扰信号大部分将被电感阻止吸收变成磁能和热能，剩下的大部分被电容旁路到地。

★这就可以抑制干扰信号的作用，在输出端就获得比较纯净的直流电流。

☞LC低通滤波器中元件电感和电容的频率特性曲线;

☞LC低通滤波器的衰减曲线图，可以计算带宽，截止频率等;

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwAzd5uKaZsjVunggictia5jGHPvPjS5dNUlHUAnHdibYVlabRtmcB9IS7FN03Nj2oYvj2PjnleNz35w/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

左图电容、电感的频率特性曲线，电容电感组成的滤波器它有一定的带宽、截止频率，右图是衰减曲线图，这个可以衡量Buck电路到后端低通滤波的效果怎么样。

  

👉🏻输出电容选取

\[电容值与误差\]通过前面分析，较高的输出电容值可降低输出电压纹波，并改善负载瞬态响应，电容值C取值:C=Iripple/8\*△Vp-p\*fswitch，同时需考虑器件值误差及温升影响，通常按降额30%选取;

\[电介质\]推荐使用X5R或X7R，由于Y5V和Z5U材质的电容温度和直流偏置特性差，避免Y5V和Z5U材质的电容应用在DCDC电路中。

\[耐压值\]额定电压应该大于两端实际工作最大电压（含纹波峰值），并留有一定余量。

\[ESR\]ESR影响输出电压纹波大小，由于电容上有持续的纹波交流成分通过，因此为避免效率损失，尽量选用低ESR的电容由于X5R或X7R材质电容的值有较宽的耐压和温度范围，推荐使用X5R或X7R，满足ESRc≤1/8\*C\*fswitch;

  

**Buck电路PCB设计与干扰原理**

干扰源分析

»开关电路中，开关信号上有着较高的dV/dt，有较快变化的电场;

»变化的电场产生磁场，即麦克斯韦电磁场理论:

a)变化的电场在周围空间产生磁场，变化的磁场在周围空间产生电场;

b)均匀变化的电场（磁场）在周围空间产生恒定的磁场（电场），非均匀变化的电场（磁场）在周围空间产生变化的磁场（电场）。振荡的电场（磁场）在周围空间产生同频率的振荡磁场（电场）;

☞干扰的原理分析

开关电路有着快速变化率的一个上升沿和下降沿，电压随着时间的变化是非常快的，一会为零伏，一会为五伏，这个变化的快慢称之为频率。一个电路上或者一个电器上，它有着比较高的dV/dt（电压变化率），意味着有较快变化的电场，变化的电场会产生磁场。

时钟和基准源很多都是周期信号，这种周期的跳动是一个比较大的干扰源，那如何利用好时钟，利用好开关信号，同时又不给后端模块造成比较大的影响？  

根据安培定律和法拉第电磁感应定律可以得到:

★电压的变化导致有电流，产生电流就产生了磁场，同时存在;

★电流变化，有产生了感应电压，即电场;

★干扰原理:

i=CM\*dV/dt;

V=LM\*di/dt;

CM为互容;LM为互感，整个系统里，不同电路不同信号之间又会有相互的依存，离得近互感互容会变大。经典力学里面，只要任何两个有质量的物体，它们之间必定有一定的距离，有万有引力。这中引力是没有办法避免的，有一定比重的影响。

所以我们想要减小干扰，想要抑制干扰，必须从互容和互感上下功夫。那互感和互容都与那些因素有关呢？

★互容相互间的容性效应（互容:两个电路之间的电场相互影响,其互相影响的系数随距离的增加快速地减小。）

»间距

»电容率

»耦合面积

★互感相互间的容性效应

»环路面积及方向

»距离

»磁导率

☞互感它要看磁力线🧵的多少，或者说磁通量，所以面积越大包围的磁通量匝数就越多，所以它与环路面积有关系。磁力线的方向与电流的方向是异面垂直的，当我两个电流信号i1和i2本身就是垂直时，磁场方向也垂直，这时它们的耦合就很小，这也是我们在PCB中走线不要并行要十字交叉的原因。

☞磁导率:不同金属有不同的磁导率，那我在两个导体之间加入了一个导体，那这个导体会改变磁场的方向，如果说这个是铁、钴、镍的金属（对磁场的抑制会更好，磁导率高），他可能还会改变整个被磁化，改变整个磁场，所以，这个也是我们屏蔽的一个原理。

如果两个干扰信号太大，又没有办法加大它们之间的距离，在中间加一个导体，导体可以隔绝电场，把电场改变，进而阻止电场和磁场之间的转换。

在输出和输入之间，在不同电源之间，都希望它不要耦合，要加一个电容，电容的作用是抑制耦合。

无论是断开还是导通的状态，我们都希望它的回路面积小，这个才能达到我们整个所有状态或者一个整体上的互容互感的减小。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwW9O2dOMO3V8ibkWFZDH62kOl1gdAVkJhia7jic2mxaXqdotVfstPibvS8GqutqYquORaJ97FdN6QFPg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

☞问题

★导通和断开的环路面积（开关回路）尽量小;

★信号的GND和电流的GND(功率GND)减少耦合;

★更宽的走线降低走线的电阻（DC），减小寄生电容电感（AC）。

★大电流走线宽度及大尺寸器件更利于散热;

☞解决

★电感靠近开关MOS的公共点放，若是集成式则靠近芯片，以减小SW信号的长度，减少辐射发射;

★输入电容和输出电容应尽可能靠近器件放置，以减少走线阻抗;

★输入输出电容的地应尽可能靠近PGND脚，信号GND和功率GND并在芯片GND处单点连接;功率GND上有开关噪声，尽量避免对敏感小信号造成干扰，尤其FEEDBACK管脚。（大电流GND:L,CIN,COUT,CBOOT连接到大电流GND;小电流GND:RFB1,RFB2单独连接到信号GND）;

★如果多层板，且使用过孔不可避免时，信号换层时保持足够数量的过孔，保持与敏感模块的距离。

实际布局1

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwW9O2dOMO3V8ibkWFZDH62kylCdu5AjK05kl774XAicOQYibcZIDibw6Ew7diclfBU6orVHxiaS3zonicCg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

实际布局2

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDCFPqmTAcwW9O2dOMO3V8ibkWFZDH62kEAYlA9cMCThPEm05Q75xtGoDBqZP99UcU9u2XsxfTwOnoSjnYwwqaA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

当我们把电感靠近电容远离，它的回流面积及路径并不会改变，但是这时输入电容远离了，输入电容离得远就会降低动态响应。这时如果没有办法都靠近，优先输入靠近芯片。

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