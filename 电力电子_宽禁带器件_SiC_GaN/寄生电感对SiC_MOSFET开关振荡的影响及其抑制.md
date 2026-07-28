# 寄生电感对SiC MOSFET开关振荡的影响及其抑制


> 原文地址: [https://mp.weixin.qq.com/s/H3Ew47qD4SAM1vfX2JoUFg](https://mp.weixin.qq.com/s/H3Ew47qD4SAM1vfX2JoUFg)

**文章来源：**新能源

**作者：**伍理勋1，韩 洋 2 ，陆海峰2，陈 磊 1（1.株洲中车时代电气股份有限公司，湖南  株洲　412001；2.清华大学电机工程与应用电子系，北京　100084） 

**摘要：**SiC器件具有高结温、高阻断电压、高热导、低损耗等特点，在电动汽车电机控制器方面具有巨大的应用前景。但由于SiC MOSFET的开关速度更快，在寄生参数的作用下，开关振荡比Si基器件严重很多。本文将研究 寄生电感对SiC MOSFET开关振荡的影响，对基于SiC器件的变换电路PCB设计给予一定的指导，并给出了抑制SiC  MOSFET开关振荡的建议。 

**关键词：**SiC MOSFET；寄生电感；开关振荡

SiC器件具有高结温、高阻断电压、高热导、低损耗等特点，在高频高功率密度应用方面具有Si基器件无可比拟的优势，有望取代Si IGBT在电动汽车电机驱动等领域的应用。但由于SiC器件开关速度更快，开关暂态的振荡会 比Si基器件严重很多，振荡会带来开关损耗增加、EMI、可 靠性等问题，因此研究寄生参数对于SiC MOSFET开关振荡的影响非常重要。

**1.  SiC MOSFET双脉冲模型搭建**

双脉冲平台一般用于功率器件开关特性和驱动电路的驱动效果研究和验证。典型的双脉冲测试电路的寄生参数分布如图1所示，Rext是外部驱动电阻，Rint 是内部驱动电阻，Rint 可通过SiC MOSFET的数据手册（datasheet）查得，本仿真平台使用的是CREE公司生产的1200 V、20A的SiC MOSFET模型，Rint=4.6 Ω，驱动电阻Rg=Rext + Rint；Lg1、Ld1和Ls1是封装带来的寄生电感；Lg2和Lg3分别是驱动电路连接栅极、源极的寄生电感；Ls2是MOSFET外部共源极寄生电 感；Ld2是MOSFET外部漏极寄生电感；Lpcb1和Lpcb2是功率回路PCB走线的寄生电感，同时Lp cb1还包含直流母线电容的等 效串联电感；L是负载电感；Cg s、C gd、C ds 是MOSFET栅源极、栅漏极、漏源极寄生电容；Cp是二极管结电容和负载 电感L并联电容的和。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmrEJze5Xu3zVELicvtZziaX9WvfRy0Qt8xBppI5CdXWebA6wBsPpzS6icLb08BJpNNwMylvRKzpnt0Q/640?wx_fmt=png&from=appmsg)

根据功率环和驱动环寄生电感作用的不同，可以把寄生电感分为3类：栅极寄生电感Lg、漏极寄生电感Ld、共源极寄生电感Ls。其中栅极寄生电感Lg=L g1+Lg2+Lg3；漏极寄生电感Ld=Ld1+Ld2+Lpcb1+Lpcb2；共源极寄生电感Ls=Ls1+Ls2。简化后的双脉冲测试电路寄生参数分布如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmrEJze5Xu3zVELicvtZziaX91l1KVXaPvwWaNtOct6VDZK8scOB13XViacrdZHmYOVqtibEZBGMvvmEQ/640?wx_fmt=png&from=appmsg)

利用CREE官网的C2M0080120D仿真模型搭建LTSpice的 双脉冲测试平台，模型拓扑结构如图2所示，其中直流母线电压UDC=200 V，电容 Cp=5pF，负载电感 L=150 μH，外部驱动电阻Rext=10 Ω，分别讨论Lg、L d、Ls对MOSFET开关振荡的影响。 

**2 .  寄生电感对SiC MOSFET开关振荡的影响** 

**2.1 Lg的影响**

控制Ld和Ls 不变且足够小，改变Lg的值，得到的仿真结果如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmrEJze5Xu3zVELicvtZziaX95F1rAxIrmnWXXeecj8FNslFo2VPibWcPXiaaLJguvKNZbkWtrAL8HIQA/640?wx_fmt=png&from=appmsg)

  

从仿真结果可以看出，Lg会对Ugs 的振荡有略微的影响，但对Uds 和Id的振荡几乎无影响，因此只要将Lg 保持在一定值范围内，对于开关速度和开关振荡都无影响。Lg的值不宜过大，防止驱动电压Ugs 振荡过于严重导致的误导通或者超过MOSFET允许的Ugs 值而造成的器件损坏。

**2.2　Ld的影响**

控制Lg和Ls 不变且足够小，改变Ld的值，得到的仿真结果如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmrEJze5Xu3zVELicvtZziaX9T3h0jcapB8HhVS3bQXDPU8diaIFmBjNbSwRekeNCwI6sKNTNoRl48WQ/640?wx_fmt=png&from=appmsg)

从仿真结果可以看出，Ld对Ugs、Uds、Id 的振荡影响非常严重，说明漏极寄生电感Ld与寄生电容Cp 和MOSFET输出电容Coss（Coss=Cgd+Cds）发生强烈的振荡，同时断开的振荡 比接通时候的振荡小很多，主要原因是因为断开的时间往 往比接通时间更长，断开速度更慢。因此设计变频器时， 一定要注意Ld的值，尽可能合理地走线和布局，减小漏极寄生电感Ld。

  **2.3　Ls的影响**

控制Lg和L d 不变且足够小，改变Ls的值，得到的仿真结果如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmrEJze5Xu3zVELicvtZziaX9nXPBoFuWFLn72qMXnptEjAaGJiaBwKicrMM1pDtibuSu82gibHeHILlqdA/640?wx_fmt=png&from=appmsg)

共源寄生电感Ls既属于功率回路的组成成分，也是驱 动电路的一部分，因此在SiC MOSFET漏极电流快速变化的时候，共源寄生电感Ls会感应出一个电压![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmrEJze5Xu3zVELicvtZziaX9tHsKSzsMslXnLdNcVOdsYwRcBkVbALYqs7ysXVibFY4vO2mA5jaO5sw/640?wx_fmt=png&from=appmsg)，对驱动电路起“负反馈”的作用，导致SiC MOSFET的开关速 度变慢，导致di/dt减小，电压Uds 下降时间延迟，增加了SiC  MOSFET的开关损耗，没有充分发挥SiC器件的性能，因此往往在设计的时候都会尽可能减小共源寄生电感Ls，如利用开尔文连接等方式，所以在仿真模型中，把共源电感Ls控制在一个较小值范围内。从图5也可以看出，Ls主要是影响SiC MOSFET的开关速度，而对SiC器件的开关振荡影响也不明 显，只有对Ugs 的振荡有一些影响，主要是由于Ls对主电路电流变化did/dt有反馈作用，同时L s 也属于驱动回路的组成成分，起着类似Lg的作用。

**3 .结论与抑制措施**

通过仿真结果的验证，影响SiC MOSFET的开关振荡的 寄生电感主要是漏极寄生电感Ld，而共源极寄生电感Ls主要 对驱动电路起负反馈的作用，影响开关速度，栅极寄生电 感Lg只对驱动电压Ugs 的振荡有一定的影响，但只要控制在 一定值内，Lg对功率环基本无影响。因此在用SiC MOSFET 作为变频器功率开关器件时，PCB的设计非常重要，要注意尽可能减小漏极寄生电感Ld和共源寄生电感L s，特别是在高频的应用场合。

抑制SiC MOSFET的开关振荡的方式主要有2种：激励源抑制，SiC MOSFET的开关振荡是由于SiC基器件开关速度更快，引起寄生参数振荡，类似文献提出的方法；主回路系统抑制，从SiC MOSFET开关振荡波形看，类似于一个 二阶RLC欠阻尼振荡，一方面是尽可能减小寄生电感，另一 方面，在寄生电感很难继续减小而振荡依旧比较严重的时候可以增加缓冲电路，类似文献的方法，如加入一个RC电路，增加整个系统的阻尼达到抑制开关振荡的效果。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)