# 换流回路的寄生参数对碳化硅MOSFET开关特性的影响


> 原文地址: [https://mp.weixin.qq.com/s/clAHVO78qAvf3GA-iDY2pQ](https://mp.weixin.qq.com/s/clAHVO78qAvf3GA-iDY2pQ)

文章来源：高电压技术

作者：蔡雨萌1，赵志斌1，梁帅1，孙鹏1，杨霏2（1.新能源电力系统国家重点实验室(华北电力大学)，北京102206；2.国家电网全球能源互联网研究院有限公司，北京102211）

摘 要：为有效评估换流回路的寄生参数对碳化硅MOSFET开关特性的影响，首先建立了考虑换流回路寄生参数的完整的碳化硅MOSFET开关暂态电路模型，该模型考虑了换流回路负载电感的寄生电容，并将换流回路的寄生电感分为二极管支路电感和其他串联电感两部分，基于所建立的模型分析了器件的开关特性。然后搭建了碳化硅MOSFET动态特性测试平台并提取了对应的等效电路计算模型，通过解析与计算模型的结合分析了换流回路各部分寄生参数对碳化硅MOSFET开关特性的影响。最后通过实验验证了分析结果的正确性。结果表明，在考虑负载电感寄生电容的情况下，换流回路中二极管支路电感与其他串联部分电感对碳化硅MOSFET开关特性的影响不同，且二极管支路电感对关断电压过冲的影响更大。在此基础上，针对电压过冲与绝缘击穿问题，对高压碳化硅MOSFET动态特性测试平台的布局优化与寄生参数设计提出建议。

关键词：碳化硅MOSFET；换流回路；寄生参数；开关特性；解析模型；等效电路计算模型

0.引言

由于在电压、功率等方面的限制，传统的硅基功率器件已难以满足人们更高的需求。近年来，碳化硅基功率器件凭借其高压、高温、高频、低损耗等优势，广泛应用于逆变器、电动汽车等领域。目前碳化硅MOSFET已经在600~1 700 V领域实现了应用，但随着碳化硅功率器件的发展，已经研发出了10 kV的碳化硅MOSFET等器件。高压碳化硅MOSFET的研发及应用将对电力系统的变革产生深远的影响。

然而，与硅基功率器件相比，碳化硅MOSFET的开关过程非常迅速，导通和关断时间通常仅有几十ns，这导致其对寄生参数十分敏感。随碳化硅MOSFET电压等级的提高与芯片厚度的减小，在器件开关过程中出现的电压过冲会使器件承受更大场强，带来绝缘层击穿等问题。同时，寄生参数引起的电压、电流振荡会使电磁干扰EMI恶化，并导致额外的开关损耗。

近些年，国内外诸多学者针对不同寄生参数对碳化硅MOSFET开关特性影响的研究主要集中在3个方面。

1）封装寄生参数对碳化硅MOSFET开关特性的影响。2015年清华大学的Kainan Chen等人研究了漏源极寄生电容非线性特性对开关特性的影响。2015年美国威斯康星大学的Jukkrit Noppakunkajorn等人以及2016年阿拉巴马大学的Andrew Lemmon等人分别研究了封装寄生电感对阻性和感性负载下碳化硅MOSFET开关特性的影响。2016年瑞典皇家理工学院的Diane-Perle Sadik等人研究了封装寄生电感对不同开关频率下碳化硅MOSFET关断电压过冲的影响，并进行了实验验证。

2）回路寄生参数对碳化硅MOSFET开关特性的影响。根据电流流通路径可将寄生参数集总为栅极回路、共源极和换流回路寄生参数3部分。美国伦斯勒理工学院的Ying Xiao等人和浙江大学王朝辉等人分别于2004年和2014年研究了共源极寄生电感对开关瞬态的影响。2010年弗吉尼亚理工学院的Zheng Chen等人、2017年北京交通大学的梁美等人分别通过理论和实验研究了栅极回路、共源极和换流回路的寄生电感对碳化硅MOSFET开关特性的影响。2017年美国阿肯色大学HussainSayed等人实验研究了阻性负载的寄生电感对碳化硅MOSFET半桥模块开关特性的影响。2018年美国田纳西大学的Xingxuan Huang等人基于10 kV碳化硅MOSFET变换器，研究了负载电感的寄生电容对其开关特性的影响。

3）器件寄生参数和回路寄生参数对碳化硅MOSFET开关特性的综合影响。2013年香港城市大学的王健婧等人建立了包含碳化硅MOSFET器件寄生参数和回路寄生参数的解析模型，并分析了各部分寄生参数对碳化硅MOSFET开关特性的影响。2018年华北电力大学的柯俊吉等人建立了用阶跃函数表示芯片寄生电容的包含器件和回路寄生参数的开关电路等效模型，通过实验分析了其中寄生参数对开关特性的影响。2019年意大利佛罗伦萨大学的Edoardo Locorotondo等人提出了一种考虑非线性器件寄生电容和寄生电感的状态空间线性时变MOSFET模型来研究寄生参数的影响，并通过Simulink和LTSPICE仿真的对比验证了该模型的有效性。

以上研究涵盖了器件封装电感和寄生电容，栅极、共源极、换流回路寄生参数对碳化硅MOSFET器件开关特性的影响，并对优化动态特性测试平台的设计提出很多建议。但上述研究中均将二极管支路寄生电感直接等效为串联在换流回路中，认为其与母线电感的影响相同。而在实际应用中负载电感寄生电容一般很大不能忽略，这使得与其并联的二极管支路寄生电感与换流回路中其他电感的影响不同，不能直接等效为串联在换流回路中。因此这部分寄生参数对碳化硅MOSFET开关特性的影响需单独进行分析。

本文首先建立了考虑换流回路寄生参数的完整的碳化硅MOSFET开关等效电路模型，模型中考虑了换流回路中负载电感的寄生电容Cp，并将换流回路的寄生电感分为二极管支路电感LSBD和其他串联电感LSER两部分，基于所建模型分析了器件的开关特性。然后搭建了碳化硅MOSFET动态特性测试平台并提取了对应的等效电路计算模型，通过所提取的模型分析了换流回路的寄生参数对碳化硅MOSFET开关特性的影响。最后通过实验验证了分析结果的正确性。研究结果表明：相比于LSER，LSBD对器件关断电压过冲的影响更大，同时Cp对器件开关过冲均有影响。本研究工作对高压碳化硅MOSFET动态特性测试平台的布局优化与寄生参数的设计提供了有效建议。

1. 碳化硅MOSFET开关特性建模与分析

为测试和评估器件的开关特性，通常采用电感钳位的双脉冲测试电路。传统的双脉冲测试电路均基于实验室优化的电路设计，通常引线很短或者负载电感的寄生电容很小，故不能反映碳化硅MOSFET的实际应用。本文基于高压碳化硅MOSFET动态特性测试平台中，需考虑多方面的结构设计与布局等，各个元件间的连接会使得二极管支路电感很大，同时考虑到在实际换流器应用中，常使用电动机作为电路的负载电感，其寄生电容一般很大，这使得二极管支路电感因与其并联而与换流回路中其他部分电感的影响不同。故本文在传统等效电路的基础上，提出了考虑换流回路寄生参数的完整的开关等效电路，能够更实际的反映器件的工作情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyrgPQupIWPtDEzof19bNFoJj4XAibAzXm87xzqUwnBkKuicxpZAJ4uEew/640?wx_fmt=png&from=appmsg)

考虑换流回路寄生参数的完整的碳化硅MOSFET开关暂态分析等效电路模型如图1所示。模型中包括直流母线电压UDD，驱动电压UG，碳化硅MOSFET，碳化硅SBD，直流母线电容CBUS，负载电感L，以及各部分寄生参数。其中碳化硅MOSFET模型中包括栅极驱动电阻RG1(内部驱动电阻)、RG2(外部驱动电阻)，栅极、漏极和源极寄生电感LG1、LD1、LS1，栅漏、栅源和漏源寄生电容CGD、CGS、CDS。负载电感模型中计及高频寄生电容CP，二极管模型中计及寄生电容CD，直流母线电容模型中计及寄生电感LBUS。各部分引线电感包括栅极回路寄生电感LG2，栅极回路与换流回路间寄生电感LS2，换流回路各部分连接寄生电感LD2、Lσ1、Lσ2、二极管支路电感LSBD以及总寄生电阻RLOOP。由于负载电感支路看做是恒流，因此其支路寄生电感可不计。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyuCaFnJ1ibxMJKIetYo9oa3U049GXK0l4VarSWkmCPIibib6mOo63coN7g/640?wx_fmt=png&from=appmsg)

为减小共源极寄生电感对碳化硅MOSFET开关瞬态的影响，在实际器件封装设计中LS1及动态测试平台设计中的LS2均很小，因此在本文中忽略共源极寄生电感。同时考虑到换流器中电动机作为电路中的电感负载时，电动机的寄生电容可等效成与其并联的形式，且值远大于二极管的寄生电容。本文对换流回路寄生参数影响的分析基于实际工况进行，因此为简化模型，忽略二极管寄生电容CD。基于以上对图1的电路模型进行化简得到图2。图2中：iSBD为二极管电流；iCP为负载电感寄生电容的电流；iD为碳化硅MOSFET的漏极电流；iG为栅极电流；IL为负载电流；RG的表达式为RG=RG1+RG2；LG和LSER的表达式分别为LG=LG1+LG2，LSER=LD1+LD2+LBUS+Lσ1+Lσ2。如前所述，由于LSBD与换流回路中的其他部分总的串联电感并不能直接等效串联，因此本文中单独考虑了这部分电感的影响。

由图2简化电路模型可见，本文提出的换流回路寄生参数包括寄生电阻RLOOP、寄生电容和寄生电感3部分。其中寄生电容即负载电感的等效并联电容CP。寄生电感分为两部分，一部分是二极管支路电感LSBD，另一部分是回路中其他直接串联的电感的和LSER。

1.1 开通过程

碳化硅MOSFET的典型开关波形如图3所示。图中：uGS为器件栅源极电压；–UEE为栅极驱动负压；UGH为栅极驱动正压；UGP为米勒平台电压；UTH为阈值电压；UON为导通压降；uDS为器件漏源极电压；ΔID为开通电流过冲；ΔUDS为关断电压过冲；fON为开通电流谐振频率；fOFF为关断电压谐振频率。对于合理设计的实际驱动电路，必须保证很小的栅极回路寄生参数，在这种情况下，栅极回路寄生电感对开关瞬态的影响很小。因此为便于分析，此处暂且忽略栅极回路寄生电感LG。考虑换流回路寄生参数后器件开关的过冲与振荡分析如下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRygNoMmiaMaUzdp0cxRmSKvUwCYm49q1wRySt4ZYBNiaziboFEibswLPBicpw/640?wx_fmt=png&from=appmsg)

1）电流过冲

碳化硅MOSFET开通过程中的电流过冲是由于电流上升阶段中，换流回路寄生电感引起的电压降落ΔuDS在换流回路负载电感的寄生电容CP产生了充电电流，该充电电流流过碳化硅MOSFET，导致其开通过程中出现一个较大的电流过冲，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyUMMVSkUibRCu92TJymwBHK0BO2TonG6yasMUfibkLvL6aWWIjVRmMz6g/640?wx_fmt=png&from=appmsg)

式中uL为负载电感两端的电压。此阶段近似有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRylPtOYydosXGo720V3iaB69FBJVMtuyFSoQrcQ209345ZyseyVDHennA/640?wx_fmt=png&from=appmsg)

故式(1)的电流过冲可进一步表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyJib9jBqicXvwTibficwmS7TAHeEytmZVB6FlTOwSmagvx3m50h1BxiaSf9Q/640?wx_fmt=png&from=appmsg)

考虑到碳化硅MOSFET寄生电容的非线性特性，式(3)中的CGD应取t2时刻对应uDS下的电容值。同时式中的UGP可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyf8UtdtFNKM9NoANZric03UEpzORfiaYiak4kRzWBK4gnvLGhkwFVQSoMA/640?wx_fmt=png&from=appmsg)

式中的gfs为碳化硅MOSFET的跨导。

2）电流振荡

碳化硅MOSFET完全导通后，可认为器件漏源极两端电压为零，器件的寄生电容被短路，二极管支路承受反压处于断态。由于换流回路中RLOOP、LSER及CP的相互作用，使得漏极电流以阻尼振荡的形式恢复至稳定值，开通振荡的等效电路见图4。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyqMM4C99xAMMvd0nK5kibAicL4VQCtW6mCJVvYWBPuzRHzmIJLHaQBkYw/640?wx_fmt=png&from=appmsg)

由图4计算开通电流谐振频率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyx3cAEYwLbbA5viaOaGltRVCax6MaKXgLqUDJLKEKiaF9xS7GBvJxyPQg/640?wx_fmt=png&from=appmsg)

由式(4)、(5)可得，换流回路中负载电感的寄生电容CP会影响碳化硅MOSFET开通电流过冲及电流振荡频率，且CP越大，电流过冲越大，电流振荡频率越小。换流回路串联寄生电感LSER对开通电流过冲无影响，但会影响开通电流振荡，LSER越大开通电流的振荡频率越小。换流回路二极管支路电感LSBD对开通电流过冲及振荡均无影响。

1.2关断过程

1）电压过冲

碳化硅MOSFET关断过程中的电压过冲是由于电流的迅速下降在换流回路的寄生电感LSER和LSBD上引起的压降，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyFm70S9mSqxByXSKrYIJnD6cP0Ia9hO8v8VWhALhJOv3bPvSg9Cujfw/640?wx_fmt=png&from=appmsg)

式中的iCP可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyNSE1Gqt78AlibUIs91GL2LeTw8VvQMhq8ic9VcIgDibJ0pcaicUYrWQJiaw/640?wx_fmt=png&from=appmsg)

式(12)中iGS和iGD分别为流过器件CGS和CGD的电流，LS为LS1与LS2的和，uGD为器件栅漏极电压。

同理，考虑到器件寄生电容的非线性特性，式(12)中的CGS和CGD应分别取t8时刻对应uGS和uDS下的电容值。

2）电压振荡

MOSFET完全关断后，续流二极管完全导通，由于换流回路中RLOOP与LSBD、CP、LSER及MOSFET关断电容COFF的相互作用，使得漏源极电压发生衰减振荡，关断的振荡等效电路如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyM6MGWHS3MMeoZJVUQgMUgFLzpWgKKaiangZicCibm6UUekYBY18t1kKfA/640?wx_fmt=png&from=appmsg)

图5中COFF由下式可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyFic4Z1Vmkf0vDlxTOXT9y5jzjl3dS3eJQBOQE8XtMEgnhjf6mTS61Kw/640?wx_fmt=png&from=appmsg)

图5所示的等效电路由4个独立储能元件组成，谐振频率有3个。其回路总电抗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRygFuTeGVJpapiaHQUnwCzUNkVCtxHrd7p4ia9MdJuW9v3DdcClEsgNOUA/640?wx_fmt=png&from=appmsg)

式(15)对应于二极管支路寄生电感LSBD与负载电感的寄生电容CP发生并联谐振。式(16)中的较大值对应于LSBD与CP并联呈感性时回路发生串联谐振，较小值对应LSBD与CP并联呈容性时回路发生串联谐振。实际关断电压发生的谐振频率取决于关断等效电路的参数。

由式(15)可得，当发生并联谐振时，LSBD和CP的增大均会使关断电压振荡频率减小。同理发生串联谐振时，通过对式(16)两种串联谐振化简分析可得，LSER和CP越大，关断电压的振荡频率越小。

由式(9)得，相比于传统不计寄生电容、将二极管支路电感LSBD等效为串联在换流回路中的模型，本文提出的考虑换流回路串联电感LSER、二极管支路电感LSBD和负载电感寄生电容CP的完整的分析模型对关断电压过冲的影响更大，其增量体现了式(9)的第2项。但由于式(9)电压过冲的解析表达式中存在漏极电流变化率、负载电压二阶变化率等不定量，难以直接分析影响规律，故对表达式(9)进行化简。联立式(9)—(12)可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyXA9ddJewnkjeDMasVuQ3dA5UExDpbqnQ2TpricGiaWY0AibV6Vjc1usPg/640?wx_fmt=png&from=appmsg)

式(17)中，由于换流回路负载电感两端的电压uL与漏源极电压uDS相互耦合无法解耦，因此上式无法直接表示为关于uGS的方程，进而无法按传统的解析分析模型得到关断电压过冲的解析表达式。故本文第2部分以双脉冲测试电路为实验平台，同时借助LTSPICE软件，搭建等效电路计算模型来定性分析换流回路的寄生参数对碳化硅MOSFET开关特性的影响，并通过实验验证了该模型的有效性。

2. 换流回路寄生参数对开关行为的影响

2.1等效电路计算模型搭建

为定性分析换流回路的寄生参数对碳化硅MOSFET开关行为的影响，搭建了双脉冲测试平台，并从中提取了等效电路计算模型。测试平台的原理图如图2所示，实物图如图6所示。平台包括某国际知名器件制造商的1200 V/36 A碳化硅MOSFET器件、碳化硅肖特基二极管，用于产生驱动控制所需双脉冲信号的DSP，负载电感，直流母线电容，辅助电源，放电电阻。考虑到碳化硅MOSFET较高的开关频率，本文的测试系统选用带宽为500 MHz的示波器及其配套的最大输入电压为600 V，带宽为500 MHz的无源电压探头，电流测量选用的是带宽为100 MHz的电流探头，以保证测量的准确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyvcMqsr4tYbyhp0gMvlq10a7ibVBbLyq9c9HJNIf6TPEDH8ImgzrufXQ/640?wx_fmt=png&from=appmsg)

由于直接通过实验分析换流回路的寄生参数对碳化硅MOSFET器件开关特性的影响较为复杂，需要进行多组重复性工作且存在很大随机性，难以从实验现象定量地分析影响规律，也无法解释背后更深层次的物理意义。因此本文根据以上双脉冲测试平台，提取了对应的等效电路计算模型来研究换流回路的寄生参数对碳化硅MOSFET器件开关特性的影响，重点探讨了其对器件开通电流过冲、关断电压过冲及开关振荡的影响。

等效电路计算模型是通过对实际双脉冲测试实验平台的每个部分进行准确的建模，包括器件建模、PCB电路参数建模、负载电感与寄生电容高频建模等，得到与实验平台等效的电路模型。根据双脉冲测试平台提取的等效电路计算模型如图2所示。器件模型均由实验所用器件的公司提供。由于实验平台的换流回路及驱动回路均是基于PCB板进行，因此回路的引线电感均可通过有限元仿真软件提取。负载电感和直流母线电容的高频模型参数可通过阻抗分析仪进行测量求取。通过实验平台提取的等效电路计算模型的参数见表1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyS7SoxnbysaZs5HmYiaVGKK9ib1I9q2XCTCORsXpveeT54p1vonUSBBog/640?wx_fmt=png&from=appmsg)

由于本文基于实验室条件搭建的双脉冲实验平台，平台中所使用的负载电感的寄生电容并不能反映碳化硅MOSFET实际应用工况。因此在本文的计算与实验中均人为增大了负载电感的寄生电容，以模拟实际的换流器工况。

2.2 换流回路寄生参数对开关电气应力的影响

2.2.1寄生电感的影响

为研究换流回路中串联电感LSER和二极管支路电感LSBD对碳化硅MOSFET开关电气应力的影响，在保证换流回路负载电感的寄生电容CP不变的情况下，进行如下两组情况的计算。第1组LSBD不变，增大LSER；第2组LSER不变，与第1组等步长增大LSBD。通过在漏极增加串联电感来改变LSER。图7、图8分别给出了500 V/20 A工况下对以上两组条件的计算结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRy9bHmKI6NhuoVc6uYiaHyiaUqA2iaYKdX6mKib7YYXKnlFRVPDFBfs0iab6A/640?wx_fmt=png&from=appmsg)

由图7(a)、图8(a)可得，LSBD和LSER对碳化硅MOSFET开通电流过冲几乎无影响，与式(3)相符。事实上，换流回路串联寄生电感LSER增大会使得电流的上升速率减小，但由于电流过冲阶段的持续时间为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyf2r748C5jyVEUAapXbkNFcia5ahxZobCNGUsUIW0Mrxe2hwhGyiaBiahQ/640?wx_fmt=png&from=appmsg)

由式(18)可得，LSER增大的同时会增大电流上升的时间，因此总的来看，LSER对电流过冲几乎无影响。需注意的是，本文的分析是基于开通过程中栅源极电压是过阻尼变化的前提，当LSER增大到一定程度使栅源极电压不满足上述条件时，按照本文分析的误差会较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyzHiccNQdOVdHFhp5rlvVVg1d8XkKsO5WeuSiaMfuY7ckMf74jfNTqgng/640?wx_fmt=png&from=appmsg)

由图7(b)、图8(b)可得，换流回路两部分寄生电感对碳化硅MOSFET关断电压过冲影响不同，由于无法直接得到关断电压过冲表达式进行解析求解，因此为定量分析寄生电感对关断电压过冲的影响，本文从以上计算条件下提取了关断过程中的漏极电流变化率及负载电压的二阶变化率，代入到式(9)中获得关断电压过冲值，并与等效计算模型的结果进行对比，如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyI2GNswHx5mFDLVfib6ndA9jk78Uj6oFG3f5RzXHWeben8QHF9gZWZNA/640?wx_fmt=png&from=appmsg)

图9中，横轴ΔL代表电感的变化量。由图9可得，LSER和LSBD均会影响碳化硅MOSFET关断电压过冲，且其值越大，关断电压过冲越大，但LSBD对关断电压过冲的影响更大，解析模型与等效计算模型的结果一致。在LSBD和LSER分别增大40、80、120、160 nH时，电压过冲分别差22.87、43.96、66.79、85.52 V(取等效计算模型与解析模型的均值)，近似与电感的变化呈正比。这与式(9)相对应，在LSBD和LSER增大相同值时，式(9)第1项对应的关断电压过冲相同，但由于式(9)的第2项仅与LSBD有关，使得LSBD增大时对应的关断电压过冲更大，且这部分引入的电压过冲与LSBD成正比。为进一步验证LSBD对关断电压过冲的影响更大，进行第3组计算，保证LSER与LSBD和不变，增大LSBD的同时等幅减小LSER。结果如图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyMBGsIZWEXRtibjv9algUP78GLUAY6Qglx67agiccib4MDfw7RzJ25fkFg/640?wx_fmt=png&from=appmsg)

由图10可得，在保证换流回路两部分寄生电感和不变时，电压过冲随着LSBD的增大(LSER的减小)而增大，证明了LSBD对关断电压过冲的影响更大。这表明二极管支路的寄生电感LSBD不能直接等效于串联在换流回路中，其与串联电感LSER的影响不同。两者对关断电压过冲影响的差异反映在了式(9)的第2项。对式(9)进一步化简时，虽然由于参数无法解耦不能得到关断电压过冲的解析表达式，但由式(9)的第2项明显可见，换流回路中LSBD引起的电压过冲更显著的原因在于考虑了负载电感的等效并联电容CP，若忽略CP，则换流回路两部分寄生电感影响相同，为验证此结论，令负载电感的等效并联电容CP=0重新进行第3组计算，结果如图11。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyyIrCVqTve4EBnnWVwib0IT1mX4QhpJCONqoD2W2378VX92tTV9uUm6w/640?wx_fmt=png&from=appmsg)

由图11可得，不计CP时，增大LSBD的同时等幅减小LSER，得到的关断电压波形完全重合，即换流回路两部分电感对碳化硅MOSFET开关特性的影响相同。此时可以将二极管支路的电感LSBD直接等效于串联在换流回路中，与传统的分析模型一致。

2.2.2寄生电容的影响

由上述分析及式(9)可得，换流回路中负载电感的寄生电容CP对碳化硅MOSFET关断电压过冲有影响的前提是考虑二极管支路寄生电感LSBD，而LSBD对开通电流过冲并无影响。因此为有效的研究CP对碳化硅MOSFET开关电气应力的影响，本文在原等效电路计算模型的基础上，设定LSBD=60nH，在此基础上改变CP。图12给出了在500 V/20 A工况下，CP对开关应力影响的计算结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRywQaKaeHVLlT7iaI6u3IWAK4XnKu5cickYicE6Dyy7UccSXdHZy3YhAGBQ/640?wx_fmt=png&from=appmsg)

由图12(a)可得，CP对碳化硅MOSFET开通电流过冲有影响，CP越大，开通电流过冲越大。在本文实验条件下，CP每增加200 pF，开通电流过冲近似增加3 A，即电流过冲与CP成正比变化，该结论与式(3)结果一致。由图12(b)可得，CP对碳化硅MOSFET关断电压过冲也有影响，且随CP的增大，电压过冲呈现先增大后减小的变化规律。分析式(9)关断电压过冲的表达式可得，由于寄生电感LSER和LSBD均为定值，CP的变化只可能引起漏极电流变化率和负载电感电压变化率的变化，由于式中负载电感电压取二阶导数，变化很小，可等效其为常数，故式(9)中的第2项随CP的增大呈正比增大。继而分析第1项中漏极电流变化率的变化，从计算结果中分析关断阶段电流变化率随CP的变化见图13。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyj6gbyfbjjquKcCicgjObicliaZWv1qicXepM0d7MWqicxeLC7UCDfVxayYw/640?wx_fmt=png&from=appmsg)

由图13可得，随CP的增大，关断电流变化率的绝对值呈减小的趋势，且随CP的等幅增大，减小的速率越来越快。因此综合电流变化率和负载电感寄生电容CP的影响，关断电压过冲随CP的增大先增大，且增大的幅度越来越小，而后开始呈现减小的趋势。为定量分析CP对关断电压过冲的影响，本文将从等效计算结果中提取的关断电流变化率及负载电压的二阶变化率带入到式(9)中得到解析结果，并与等效计算结果进行对比，如图14所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyAPSXvUCeMhlNR8xqqlK1V3Mr2U0M6HYEu3B6D1rPngdQJegeNawvkQ/640?wx_fmt=png&from=appmsg)

由图14可得，解析模型与等效计算模型的结果基本一致。在CP分别取0、197、397、597 pF时，式(9)计算关断电压过冲的第1项和第2项分别为119.09、113.63、65.04、6.9 V和0、53.19、95.28、143.28 V，即第2项引起的电压过冲基本随CP正比增加，而第1项引起的电压过冲衰减速度逐渐加快，验证了上述结论。

2.3 换流回路寄生参数对开关振荡频率的影响

为直观展示换流回路的寄生参数对开关振荡频率的影响，对上述不同寄生参数下的开关波形分别提取振荡频率，结果如图15、16所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRy65Sbmdrxxovh7eOQlpibtVJpEvokOY5kbLAhmYuGjFeibh0afvsic1JaA/640?wx_fmt=png&from=appmsg)

由图15可得，开通电流的振荡频率随LSER的增大而减小，但几乎不受LSBD的影响。与式(5)的分析结果一致。关断电压的振荡频率随LSER或LSBD的增大均减小，对应式(16)中串联谐振的情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRywMhiczOdq1R1AobgwWrdAb5KpojltUSUMO0N526ZuwAeqPlT7NCR2Rg/640?wx_fmt=png&from=appmsg)

由图16可得，碳化硅MOSFET开通和关断的振荡频率均随CP的增大而减小。与式(5)、(16)的分析结果一致。

3. 实验验证

本文通过解析与计算分析了换流回路的寄生参数对碳化硅MOSFET开关特性的影响。为验证上述模型及分析结果的正确性，进行了实验分析。

为验证换流回路的寄生电感LSER、LSBD对碳化硅MOSFET开关特性的影响，本文在实验电路板上二极管支路和漏极支路上人为地预置了断点。通过在断点处串入不同大小的电感来改变寄生电感。同理，通过在负载电感两端并联电容来模拟不同的寄生电容CP，来验证CP对开关特性的影响。本文重点揭示了LSER、LSBD对碳化硅MOSFET开关特性的影响不同，因此图17给出了在CP不变时，保证换流回路LSER与LSBD的和一定，增大LSBD对应的器件开关波形。图18给出了在LSBD为60 nH，LSER为76.8 nH时，不同CP下的开关波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRy7TuvmmjVYSkVx7g9ibC8BjuNQ9YHC70Eyxejb7qzStzXcxzXMjs7znw/640?wx_fmt=png&from=appmsg)

由图17的实验结果可得，LSER与LSBD对开通电流过冲几乎无影响，但相比于LSER，LSBD对关断电压过冲的影响更大，验证了上述分析模型的有效性。由图17(b)可见，在相同参数条件下，相比于等效计算模型的计算结果图10，实验所得的关断电压过冲更大，且振荡周期更长，电压的衰减速率更慢。这是由于在实验平台中存在的各部分连接线以及焊锡等，不可避免的会引入一些寄生电感及寄生电阻，使得实际换流回路的寄生参数值略大于等效电路计算模型所提取值，因此实验得到的电压过冲略大，衰减周期略长。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmtRTtE3x2oicPmTJYczHyRyJAF7CY8rNlEV4XWsvs3l6tXUUxEQH0heQglibJUUcwpM20bhAn1kzicw/640?wx_fmt=png&from=appmsg)

由图18实验结果可得，开通电流过冲随CP的增大而增大，与前述分析一致，而关断电压过冲随CP的增大一直减小，与等效电路计算模型揭示的先增大后减小的规律相矛盾。这是因为在计算模型中CP是从无到有并逐渐增大的过程，而实际实验平台中负载电感自身已经存在部分寄生电容。在本文双脉冲测试平台条件下，换流回路寄生电容对关断电压过冲影响的转折点小于实验平台中已有的寄生电容，故实验中没有观察到随电容的增大关断电压过冲先增大后减小的过程。

根据以上分析，本文提出在高压碳化硅MOSFET器件动态测试平台的设计中，为控制开关应力以及绝缘击穿问题，首先应尽可能减小二极管支路布线的长度，将布线集中在换流回路的串联部分，其次，应通过对二极管的选型及母排的结构优化以尽可能减小寄生电感，最后，应优化设计负载电感，减小其寄生电容以控制其对器件开关特性的影响。

4结论

1）本文建立了一个考虑换流回路寄生参数的完整的碳化硅MOSFET开关暂态等效电路模型。该模型考虑了负载电感的寄生电容CP，并将换流回路的寄生电感分为串联电感LSER和二极管支路寄生电感LSBD两部分。通过该模型得到了考虑换流回路寄生参数后器件开关过冲与振荡的解析表达式。

2）研究了换流回路的寄生参数对碳化硅MOSFET开关特性的影响。结果表明由于LSBD与CP并联，LSBD比LSER对关断电压过冲的影响更大。相比于直接将LSBD等效串联在LSER的传统分析模型，单独考虑LSBD的影响更能真实的反映器件的关断电压过冲。同时，负载电感的寄生电容CP不仅影响开通电流过冲，其对关断电压过冲也有影响。

3）本文针对高压碳化硅MOSFET动态特性测试平台的设计与优化提出建议。通过减小二极管支路布线及优化寄生电容可以控制碳化硅MOSFET开关过程中的过冲与振荡，避免过电压引发的绝缘击穿问题。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)