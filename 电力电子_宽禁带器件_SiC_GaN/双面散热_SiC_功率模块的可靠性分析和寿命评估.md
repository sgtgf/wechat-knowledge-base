# 双面散热 SiC 功率模块的可靠性分析和寿命评估

原创 欧开鸿 ，曾正 SiC碳化硅MOS管及功率模块的应用 2025-02-02 12:42 河南

> 原文地址: [https://mp.weixin.qq.com/s/ExovSS8GGP09gf6zxPCnpg](https://mp.weixin.qq.com/s/ExovSS8GGP09gf6zxPCnpg)

文章来源：中国电机工程学报

作者：欧开鸿 1，曾正 1，王亮 1，吴义伯 2，柯灏韬 2(1．输配电装备及系统安全与新技术国家重点实验室(重庆大学)，重庆市 沙坪坝区 400044；2．新型功率半导体器件国家重点实验室(中车时代半导体有限公司)，湖南省 株洲市 412001)

摘要：双面散热(double-sided cooling，DSC)封装能大幅降低封装寄生电感和结壳热阻，提升电气装备的功率密度，是SiC功率模块的发展趋势。然而，DSC SiC 功率模块的失效机理不明、寿命模型缺失，成为制约其商业化应用的关键瓶颈，亟待技术突破。传统加速老化实验方法的成本较高、耗时较长，不利于产品的快速迭代升级。针对DSC SiC 功率模块的可靠性研究，文中提出一种基于有限元的分析方法，基于材料的疲劳老化模型及功率模块的失效判据，建立DSC SiC模块的寿命模型。基于大量功率模块的寿命测试结果，验证了有限元模型的可行性和有效性，相对误差小于6%。此外，详细分析SiC 和Si 功率模块焊层的应力和蠕变规律，建立不同封装功率模块的寿命模型。结果表明：相对于单面散热封装，DSC 封装功率模块的寿命提升一倍。采用相同封装，SiC 功率模块的寿命是Si 功率模块寿命的30%左右。此外，还详细分析了不同封装材料对 DSC SiC 功率模块寿命的影响规律。为下一代DSC SiC 功率模块的研发与应用，提供有益的参考。

关键词：双面散热；SiC 功率模块；可靠性分析；寿命模型

0. 引言

随着晶圆材料和芯片工艺的快速发展，SiC 功率器件的成本持续降低，在国防军工、电动汽车、新能源等领域，得到广泛应用。低感、高温、低热阻、低成本的SiC 功率模块得到持续关注，对 功率模块的封装结构和封装工艺提出了更高的要求。相对于单面散热封装(single-sided cooling，SSC)，双面散热(double-sided cooling，DSC)封装的SiC功率模块，充分利用芯片正面的散热通道，降低模块35%的结壳热阻。此外，DSC 封装可以消除模块的键合线，减小80%的封装寄生电感，可以提高电气装备的开关频率，降低对热管理的需求，从而提高装备的功率密度。近年来，日本丰田、日本日立、美国德尔福、中国中车等公司，已经开始探索DSC SiC 功率模块的商业化应用。然而，DSC SiC功率模块的失效机理、寿命模型等基础问题，还有待进一步的深入研究。

在DSC SiC 功率模块的研究方面，部分文献研究了功率模块的优化设计、封装结构、封装工艺、寿命模型。在优化设计方面，针对DSC SiC 功率模块多物理场之间的相互耦合和相互制约，以封装结构的尺寸为优化变量，以结壳热阻、应力应变为优化目标，可以实现热–力协同的封装优化设计。在封装结构方面，为了进一步降低DSC SiC 功率模块的封装寄生电感，基于磁路相消理论，可以采用P-cell/N-cell概念，缩短功率回路，减小回路面积。此外，采用先进的封装结构，譬如：倒装、3D封装等，可以有效降低封装寄生电感。在封装工艺方面，为了提升DSC SiC 功率模块的焊层可靠性，可以采用“低温焊接、高温服役”的先进焊接技术，譬如：纳米银烧结、瞬态液相烧结等技术，提升DSC SiC 功率模块的可靠性。在寿命模型方面，现有SSC Si 功率模块的寿命模型，可以为研究DSC SiC功率模块的寿命模型提供借鉴。现有功率模块的寿命模型，普遍采用Coffin-Manson 模型，表征了热循环应力与寿命之间的映射规律。针对铅焊料在热循环试验中的寿命，普遍采用Norris-Landzberg 模型。随后，Salmela O 等利用实验数据对该模型进行了修正，并将其扩展到无铅焊料。在焊料寿命的基础上，英飞凌公司提出了Bayerer模型，计及开通时间、键合线电流、键合线直径等诸多影响因素，更详细地表征功率模块的寿命。针对新兴的无焊料SKiM 封装功率模块，计及键合线的影响，赛米控公司提出了改进的寿命模型。综上，现有DSC SiC 功率模块的研究，目前主要集中在电学、热学、力学性能的表征与优化，显示出其低感、低热阻的技术优势。然而，DSC SiC 功率模块的失效模式、失效机理、应力分布规律等基础研究内容，还鲜有报道。此外，DSC SiC 功率模块的寿命模型及其影响规律，还是一片空白。

针对DSC SiC 功率模块可靠性不明、寿命模型缺失的问题，本文详细研究DSC SiC 功率模块的失效模式、老化规律和寿命模型。基于有限元分析方法，建立功率模块的可靠性分析模型，并和实验结果进行校核。基于焊料的疲劳老化模型，建立DSCSiC 功率模块的寿命模型，并分析不同封装材料、封装结构对功率模块寿命的影响规律。本文为DSCSiC 模块的可靠性研究，提供了新的思路，为SiC功率模块的设计研发，提供了新的方法，为 SiC 功率变换器的寿命评估，提供了基础模型。

1\. SSC和DSC功率模块的结构特点和失效模式

1.1 DSC 功率模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVx41JrtoFlH3ibc2WeQ10m6omxePNIfhuDlvQJluA2MiaGQnGSjwOF0J4Q/640?wx_fmt=png&from=appmsg)

如图1(a)所示，传统SSC 封装的功率模块为典型的异质集成结构，芯片底面焊接到直接覆铜板(direct bonding copper，DBC)的上铜层，芯片顶面与上铜层的电气互连依靠键合线完成。芯片产生的热量通过多层结构传递到散热器，然后耗散到环 境中。

如图1(b)所示，DSC 封装的功率模块由2 层DBC、垫高、3 层焊料和芯片组成。相对于SSC 功率模块，DSC 功率模块增加了顶面散热通道，极大地降低功率模块的结–壳热阻。芯片功率损耗产生的热量，同时通过顶部和底部的多层结构，进入散热器，最终耗散到环境中，提高散热效率。图2 进一步给出了650V 电压等级DSC 和SSC 功率模块的热阻对比。功率模块的热阻随着额定电流的增加，指数下降。DSC 功率模块的热阻比SSC 功率模块减小18%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxdZI9PQhtq2GwXGnwSVDoxZtLzEHVODThQ59A5c1olvIDuJWXB5iaMGA/640?wx_fmt=png&from=appmsg)

此外，DSC 功率模块采用顶面的DBC 代替键合线互连，通过优化封装设计，可以有效降低功率模块的寄生参数。

经过上述对比，不难发现DSC 功率模块在结构上的特点：没有流过功率回路的键合线；增加了芯片上表面的多层结构(即垫片、焊料、DBC)；芯片有3 层焊料。DSC 功率模块在结构上的差异，会给可靠性分析带来较大的差异。

1.2 SSC 和 DSC 功率模块的失效模式

功率模块的疲劳失效直接决定于封装结构和封装工艺。在功率模块内，硅–铜–陶瓷异质层的热膨胀系数(thermal expansion coefficient，CTE)和杨氏模量不匹配，在功率循环和温度循环下，形成功率模块内的热–机械应力，在异质层的界面处形成疲劳失效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxeL3Jcic3fA7Z5IFZDJOEOySVGXwV6jMHId3jENv68kNWl7RAIz3wsow/640?wx_fmt=png&from=appmsg)

如图3 所示，SSC 功率模块的失效模式主要表现为键合线失效、焊料层失效等。由于DSC功率模块不存在键合线，其失效模式主要为焊料层失效。然而，DSC 功率模块的失效机理和失效模式还不明晰。尤其是，相对于SSC 功率模块的单层焊料，DSC 功率模块存在三层焊料，其焊层的薄弱环节、失效的先后顺序等，都有待进一步深入研究。

DSC功率模块仍然采用异质集成结构，可以视为两个SSC 功率模块的叠加。因此，可以借鉴SSC功率模块的失效机理和寿命模型，分析 DSC 功率模块的失效机理，建立其寿命模型。

功率模块的设计寿命通常为10 年，为了暴露功率模块的失效模式，可以采用功率循环等加速老化实验方法，测试表征功率模块的寿命。虽然功率循环测试是商业化功率模块的必需环节，但是功率循环测试周期长、代价高，不适用于功率模块概念设计阶段。如何快速评估模块的预期寿命，掌握封装结构和封装材料对模块寿命的影响规律，亟待技术突破。

为了适应概念设计阶段的技术需求，快速、准确地掌握功率模块的预期寿命，可以采用多物理场设计方法，结合有限元(finite element analysis，FEA)模型及其校正技术，建立功率模块的在线寿命评估模型。然后，采用该模型，预测和评估不同封装结构和封装材料对功率模块寿命的影响规律，快速评估封装设计的可靠性水平，优化封装设计的技术路线。

2\. SSC 功率模块寿命的有限元建模及验证

2.1 SSC 功率模块的有限元模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxW4oPetQx6VmaU1xUVxcSBXpH4MicXrvcoj5navEQsJaWZRRzZSv9NyQ/640?wx_fmt=png&from=appmsg)

建立功率模块的寿命模型需要大量的数值计算，在保证精度的前提下，降低模型维度，简化模型难度，有利于提升计算效率。以焊层疲劳的失效模式为研究对象，以功率模块的寿命评估为目标，在COMSOL 多物理场仿真软件中，建立SSC 功率模块的有限元模型。如图4 所示，多物理场分析理论表明，二维有限元模型在保证95%计算精度的前提下，可以提高10 倍以上的计算速度。因此，为了提高模型的可重复性，在保证足够计算精度的前提下，将SSC 功率模块的三维物理模型，降维为二维有限元模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxP6fGa36Ygf1MsFCHWykCTxtLicHzBMBywicH6AgDqMDXtF7Jibmvgm80g/640?wx_fmt=png&from=appmsg)

以典型的SSC Si 半桥功率模块SKM50GB123D 为例，采用50A/1200V 的Si IGBT芯片 SIGC41T120R3E，其内部结构如图5 所示。在功率模块内部，芯片之间距离较远，芯片之间的热耦合效应可以忽略不计。因此，可以抽取其中的单芯片基本封装单元，作为研究对象，各层的结构尺寸和材料属性如表1 所示。在此基础上，借助几何对称性，可以将SSC 功率模块的三维模型转换为二维模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxz8pgzhj4kcFgzsvEXopibrWGtgHhGwEaaiaOvNnHaO9v8VOSRoA1VoRQ/640?wx_fmt=png&from=appmsg)

在二维有限元模型的基础上，需要配置材料的本构模型。从材料力学的角度来看，根据材料的工作温度和熔点，功率模块的封装材料主要分为线弹性材料和粘塑性材料。

半导体、铜和陶瓷材料的工作温度远低于其熔点，可以视为线弹性材料。线弹性材料的应力应变规律满足胡克定律：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxu1KOFZHxRWt96IKsRlZAGrKfTnvWUjqsN5QUwzspPnIgq7qqibot2nQ/640?wx_fmt=png&from=appmsg)

式中：σ、ε分别为材料的应力和应变；E 为材料杨氏模量。

然而，焊料的工作温度约为其熔点的一半，应视为粘塑性材料。焊料内部的蠕变和应力松弛现象非常明显，应力和应变均为工作温度和持续时间的函数。粘塑性材料的塑性应变和蠕变规律，可以采用材料的本构方程来表征。对于常用的Anand 模型，等效应力σ 与形变阻抗s 成正比，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxjJ6icmYUNLicuzVhjk45oV8L8exiaFkIgtSBeV0zDKIU1fqfC4UaBF46w/640?wx_fmt=png&from=appmsg)

式中c 为与焊料有关的参数，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxhDC4SUAKlB96C9mArVY7rV8ibBysc6GArKSWicqG38tjX4IMHCNPB0dw/640?wx_fmt=png&from=appmsg)

式中：_ξ_为应力乘子；A 为潜质指数；T 为温度；Q为活化能；m 为应变率敏感指数；R 为气体常数；_ε_p为非弹性应变率，可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxibCvBhKFYCAYicI0v1sJHLp9dtd7E0wnCljbBdPROKeZhibJGuaFbI4XA/640?wx_fmt=png&from=appmsg)

形变阻抗演化后得到方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxYzQfb6Sa29vDria4zUIRBaF63epLKk1SXM3aDvxxL699mFYEQfTqM2g/640?wx_fmt=png&from=appmsg)

式中h 定义了应变回复、硬化等焊料内部动态过程，且可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxTd0mrm0Ls5iaFQoyKTkYEjlxWDJmhRTxCfwNUBVyicyDuaTkYlK5xAnA/640?wx_fmt=png&from=appmsg)

式中：h0 为软化/硬化常系数； 为敏感指数；s' 为s的饱和值，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxIESLB50gQZFiboP1mVwYDs12QkHEUn1JOLKDbkrB5Z4NSEqv14Bmnsw/640?wx_fmt=png&from=appmsg)

式中；sˆ为变形阻力饱和值的系数；n 为指数幂。

可见，材料的Anand 本构模型包含9 个变量，对于SAC305 焊料，其模型参数如表2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxIJBdv9hC6mBBic8F6TD7icXGEneUBp1DPs9kesTo2NGt2FnP1o3QiartQ/640?wx_fmt=png&from=appmsg)

基于图5 所示的对称二维模型，边界条件设置如图6 所示。此外，功率芯片设置为特定体积功率密度的热源，DBC 的底面设置为辊支撑，且散热条件设置为强迫水冷。模型的左边界设为对称边界，以减小内存；模型的其余边界均设置为绝热，且自由移动。

在有限元分析模型中，采用物理寿命模型，评估功率模块的寿命。在功率芯片上施加方波的功率密度，模拟功率模块的功率循环实验。改变方波的幅值和换热边界的环境温度，可以得到功率模块在不同结温循环下的温度、应力、应变规律。结合Anand模型，可以得到焊料的塑性应变和蠕变。为了获得焊料层应变和寿命之间的映射，可采用Morrow模型：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxpS3icviaJYEQF91NIYRkTicCSwpQKnQfxl0vrQ3bDn0IDCJeQoZUTAqhQ/640?wx_fmt=png&from=appmsg)

式中：Nsf 为焊料层失效前的功率循环周次；Wsc为一次功率循环所累计的蠕变能量；Wsf、ms 分别为材料的疲劳能量系数和疲劳能量指数。对于SAC305 焊料合金，模型的取值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxS7mqCVw3STSxoFDVqCXXCMcGkeYqSnSXkZHIrP56Amic73icj3QiahUAw/640?wx_fmt=png&from=appmsg)

、ms  0.69。在实际中，基于应变的Morrow 模型难于量测。

因此，通常所说的寿命模型是指和结温波动相关的寿命特性。焊层的疲劳老化，引起热阻的增加，进而导致功率模块失效。根据焊层失效模型，基于Coffin-Manson模型，可得功率模块的寿命模型：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxiaDiadjVYxSVUVGibPsaHJMj8RXN7D9kNXI7HngW9JFP3EBBejpORBGBQ/640?wx_fmt=png&from=appmsg)

式中：Nf为功率模块的寿命，为功率循环结温；c1、c2 分别为功率循环寿命系数。

此外，考虑功率循环过程中平均结温的影响，可以采用Coffin-Manson-Arrhenius 模型来描述功率模块的寿命，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxc7n2jCpia0uReiaiaMwRKmbuCiabweO5ibqnjyKWAzPQm9WcsVlD5UHpkug/640?wx_fmt=png&from=appmsg)

式中：a、n 为与初始寿命和结温波动相关的常数；Ea为激活能；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxUHUXoLO6RaItceogNVibWFricYARiclrISpibbgOUr3IkXhnUHZSX1ic5UQ/640?wx_fmt=png&from=appmsg)

  
 为玻尔兹曼常数；Tjm为平均结温。

2.2 功率循环实验及有限元模型的验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxY5CP50NgR9rgFicUDdqhyKqPvTGJhRxJBT0ppe1pgJZc3VMV6DYJLAg/640?wx_fmt=png&from=appmsg)

典型功率循环实验的电路原理如图7 所示，控制开关采用功率模块SKM75GB123D，为了提高测试速度和增强对比参照，将22 个被测功率模块串联测试。功率模块的失效判据定为20%的结壳热阻增加。在有限元模型中采用了芯片和封装一致性，因而可以利用该数据进行实验验证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxFa5Ec02GeQicHnLllQtibdhwpocibYPvwONkIicFG6QunpnKnozfI6FO5g/640?wx_fmt=png&from=appmsg)

当平均结温Tjm为90℃时，设置Tj分别为90、120℃，测试功率模块的功率循环寿命，实验结果如图8 所示。可以发现，实验结果与式(9)所示的理论模型吻合较好，辨识得到的功率模块寿命模型参数为c1  5.2  10¹²、c2  4.2。此外，不同温度下的有限元仿真结果也与理论的寿命模型相差不大，相对误差小于6%。

3\. DSC 功率模块的应力和寿命分布规律

3.1 DSC 功率模块的有限元模型        

基于SSC 功率模块的有限元模型，采用实验结果校验了该模型对SSC 功率模块寿命预测的可行性。这里进一步探索DSC 功率模块的有限元模型，以分析DSC 功率模块的寿命模型及其影响规律。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVx9JGL3ibibnib7TtvrAeJLtE4wbqF0GJNO0FMwFjKYP9n3LOibsaTECKkXg/640?wx_fmt=png&from=appmsg)

在DSC 功率模块的有限元模型中，采用相同尺寸的IGBT 芯片，进行对比分析，如图9 所示。芯片底面的封装材料和封装尺寸与SSC 功率模块完全相同。芯片顶面采用与底面相同的DBC，并在芯片和DBC 之间引入了钼片垫高层，其结构尺寸为6mm 5.7mm 2.5mm，其材料的热膨胀系数为4.8×

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxLj3AIPZPB4z5vhbY09ic6EOMDwbwGlZffslVhutwt4oqvdN1ZBVcwCg/640?wx_fmt=png&from=appmsg)

、杨氏模量为329GPa、热导率为139W/(mK)。钼片与芯片的连接，仍采用 0.12mm 厚的 SAC305焊料。

3.2 DSC 功率模块的失效判据

为了评估功率模块的寿命，需要确定模块的失效判据。对于SSC 功率模块的失效判据，相对比较成熟。然而，DSC 功率模块的失效判据还处于探索阶段。这里，基于SSC 功率模块的失效判据，探索DSC功率模块的失效判据。

在功率循环中，非弹性应变能容易在边角聚集，因而，焊料层边角处首先开裂失效，导致热阻增加，最终导致功率模块失效。对于SSC 功率模块，其失效判断标准通常选为热阻增加20%。但是，该失效判据并未指明所对应的焊层失效比例。对于DSC功率模块，其存在三层焊料，各层焊料失效的先后顺序，及对模块结壳热阻的影响，都还有待深入研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxv8FzNdGCr09u73KmxicicdKLZDoZlWEahdWiaOvmca0ypKY1brGBrk1Mw/640?wx_fmt=png&from=appmsg)

基于图9 所示有限元模型，在结温波动为Tj120℃的功率循环测试条件下，图10 给出了DSC Si功率模块的多物理场分析结果。可以发现，钼片上层焊料、芯片顶层焊料失效约 5%之后，便不再明显退化，DSC 功率模块的焊层失效仍然以芯片底层焊料的失效为主。由于场限环的限制，芯片顶面的有效散热通道减小，且焊料层数更多，并含有垫高层，都会增加顶面封装结构的厚度和热阻。因此，芯片的损耗主要通过底面耗散到环境中，芯片底面的热通量更大，且温度梯度更高，寿命更短，是DSC功率模块的薄弱环节。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxgLiaH5CsU6xI1yIGibjN5CLqCm8YqbCib5ib62ibd5bSBDlavFuMudeWYnQ/640?wx_fmt=png&from=appmsg)

基于图9 所示有限元模型，图11 进一步给出了各层焊料失效比例对DSC 功率模块结壳热阻的影响规律。可以发现，对于SSC 功率模块，当焊料层失效9%左右，模块的结壳热阻增加20%，即达到SSC 功率模块的失效判据。对于DSC 功率模块，各层焊料失效比例对结壳热阻的影响规律，与SSC功率模块基本一致。因此，可以沿用结壳热阻增加20%作为DSC 功率模块的失效判据。此外，结壳热阻对芯片底面焊料的失效最为敏感，当底层焊料失效8%时，可以判定DSC 功率模块失效。

3.3 DSC 功率模块的应力分布规律

功率模块的应力计算本质是对多层结构的应力分析，忽略了连接层厚度，进行一定的简化，求解微分方程组，得到异质层交界面的应力分布规律：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxVSnbFTSYHSv9IKnjicSickJGyLKDlRBwCaDicr03WaDzbelEs6j8b84qQ/640?wx_fmt=png&from=appmsg)

式中： 为连接面的剪应力；常数 k、 为与材料的杨氏模量、厚度等相关的系数； 为材料的热膨胀系数；x 为到对称中心的距离。由式(11)可知，越靠近芯片边缘，应力越大；材料的热膨胀系数相差越多，应力越大。相对于有限元方法，数学解析模型能得到一定的规律，并做出一定的物理解释，但是模型假设过于理想，准确性较差。此外，为了分析功率模块的蠕变耗散能，评估功率模块的寿命，有限元分析方法更为方便。因此，本文采用有限元模型来分析功率模块的热–力行为。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxd649zoj1oIJ93WicOoZnxnicWRZAydxhWxaQIAUEpiaSxAkLP9yY9XQicQ/640?wx_fmt=png&from=appmsg)

焊料层边角处是裂纹萌芽地带，此处的应力和非弹性应变也较为集中。因此，分析焊料层边角处的应力应变聚集情况，能够较好地揭示焊料层的失效机理。针对SSC Si 和DSC Si 功率模块，图12对比了焊料层的蠕变耗散能分布情况。可以发现：对于 DSC Si 功率模块，焊料层边角处的应变聚集区域更小，有利于减缓裂纹的萌发，提升其功率循环寿命。

在功率循环过程中，SSC 和DSC 功率模块受到的应力应变和蠕变行为有着明显的差异。以循环温度Tj  120℃时为例，焊料层的应力和蠕变特性，如图13。相对于SSC 功率模块，DSC 功率模块的芯片顶面结构兼具耗散功率和平衡应力的作用，减小芯片焊料层的5%应力、15%蠕变应变率和20%蠕变能密度。根据式(8)，单次功率循环所积累的蠕变能量决定是焊料层的疲劳寿命，进而影响功率模块的功率循环寿命。可见，相对于SSC 功率模块，DSC 功率模块能够明显降低焊料层的应力应变，显著提升其功率循环寿命。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxvp0iaW6A3ubvzENgIjDxEYa17NH3jSiaJCrJj64RibSw06pIxdjibGtlibg/640?wx_fmt=png&from=appmsg)

最终，通过有限元分析得到的循环寿命分布如图14，与图12、13 所示的应力分析结果基本一致。模块从焊料层边角处开始失效，其中DSC 模块的失效以芯片底部的焊料层失效为主。顶部两层焊料在边角失效后，因为钼垫片的原因，向内发展得很慢。因此，双面散热模块对器件寿命的提升具有显著的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxZHtUvrPJxyv6uwtal5hOFPqgRKQ7n1yICXd7o2OAoFyYUjJSbQ4n0w/640?wx_fmt=png&from=appmsg)

4\.  DSC SiC 功率模块的寿命模型及影响规律

4.1 DSC SiC 功率模块的应力行为分析

前述分析表明，采用DSC 封装，可降低Si 功率模块的热应力，提升Si 功率模块的寿命。这里进一步深入分析DSC 对SiC 功率模块的寿命影响规律。

如表1 所示，由于材料的性能差异，相对于Si芯片，SiC 芯片的杨氏模量更大、面积更小，在DSC功率模块的模型中，钼片的大小调整为 3mm\*2.9mm，其余参数不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxHw9uIcAaAOwbCQZL1KWgRxTWzOAfeiavTib6d4toSHribHicd4r2otzMuw/640?wx_fmt=png&from=appmsg)

SSC SiC 功率模块的应力应变更加集中，约是SSC Si功率模块的1.5 倍。但是，采用DSC 封装结构，能够减小SiC 功率模块的应力，大幅提升其寿命。SSC SiC 和DSC SiC 功率模块的应力和蠕变特性，如图15。类似于Si 功率模块，相对于SSC封装，DSC 封装能显著降低von Mises 力、蠕变应变率和蠕变能密度，提升SiC 功率模块的寿命。对比图13 和15 可以发现：对于相同的封装技术，SiC功率模块的应力应变仍然大于 Si 功率模块。因此，相同封装条件下，SiC 功率模块的焊料层寿命少于Si功率模块，如图16 所示。与Si 功率模块类似，相对于SSC 封装，DSC 封装能显著提升SiC 功率模块的寿命。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxWiaVkkgVYCACibN2NotdOMJhmYIwE7q72sNmNJLVKO6ntnpXUibIPQS3g/640?wx_fmt=png&from=appmsg)

4.2 DSC SiC 功率模块的寿命模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxWAg6zEZmyR2f3aDlFjB2jyiaIvA3gicicYfnjQxX47vNoOOgE4eJCG3Yg/640?wx_fmt=png&from=appmsg)

基于前述有限元模型和分析方法，针对Tjm 90℃时的有限元分析结果。不同Tj 时，DSC SiC功率模块的功率循环寿命，如图 17 所示。采用式(9)所示的 Coffin-Manson 模型，可以得到 DSC SiC 功率模块的寿命模型。模型参数的拟合结果为：c1 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxqhUXtV1wgTf0EC3gNrNmrvj3oOyz1RHPDn19PLLzZV7pOpOUhv93yg/640?wx_fmt=png&from=appmsg)

进一步考虑Tjm 的影响，基于式(10)所示的Coffin-Manson-Arrhenius模型，图18 给出了DSCSiC 功率模块的寿命分布规律。当Tj 相同时，Tjm越大，功率模块的寿命越短；当 Tjm 相同时，Tj越大，功率模块的寿命也越短。此外，有限元分析的结果与式(10)所示模型的预测结果基本一致。辨识得到的模型参数为：a  56.39，n  2.57，Ea  0.57eV。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxr93UWniadicyG14r1QKsiaUfaib6cVRfyUL3UiaaHKny3v01RFKoib3SxBoQ/640?wx_fmt=png&from=appmsg)

对于Si 和SiC 器件，采用SSC 和DSC 封装，当Tjm  90℃时，功率模块的寿命分布规律如图19所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxqxH7fsOv99E7Fq7YLvVfoea1U1SdO82icO48iciaBEjU1WJXFJQS7UTHA/640?wx_fmt=png&from=appmsg)

不难发现，SSC SiC 功率模块的寿命约为SSC Si 功率模块寿命的30%。随着Tj增加，二者寿命的差异减小。此外，DSC SiC 功率模块的寿命是约为SSC SiC 功率模块寿命的2 倍。值得指出的是，相对于SSC Si 功率模块，当Tj较低时，DSC SiC功率模块的寿命提升效果并不明显。但是，当Tj较高时，DSC SiC 功率模块的寿命远大于SSC Si功率模块的寿命。从寿命指标的角度来看，DSC Si功率模块具有最佳的性能。但是，考虑到高温、高频、低损的优异性能，DSC SiC 功率模块在高功率密度车用电机控制器的应用，具有广泛的应用前景。可以预见，在更大的Tj情况下，DSC SiC 功率模块的优势会更加明显。

4.3 封装材料对 DSC SiC 功率模块寿命的影响

建立功率模块的寿命模型，可以为功率模块的概念定型和优化设计，提供基础理论指导和关键技术支撑。

先进的封装材料有利于降低封装热阻，缓解焊层应力，提高功率模块的寿命。计及DBC 陶瓷材料和垫高材料的影响，本节深入分析封装材料对DSC SiC功率模块寿命的影响规律，材料的基本属性如表3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxkibiblv7iaoibv2a7BsuFH18Yibg6RjiboSOUOMCbCmJiaoicKE2bcKw1JA8Ug/640?wx_fmt=png&from=appmsg)

基于前述有限元模型和分析方法，不同DBC陶瓷层材料对 DSC SiC 功率模块寿命的影响，如 图20 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxMa3Azmc2RohhmicEzgHjJ9mtRuSGy4O8u3pibMvkkE465Bg7bezADBxw/640?wx_fmt=png&from=appmsg)

相同Tj 条件下，Si3N4 功率模块的可靠性最高，AlN 次之，Al2O3 最差。如表3 所示，AlN 的热膨胀系数大于Si3N4，它与SiC 芯片的热失配更严重。然而，AlN 具有较高的热导率，有助于降低结–壳热阻。此外，AlN 的成本比Si3N4 更低，应用更为广泛。由于AlN 的热导率远大于Si3N4 和Al2O3，在相同功率条件下，功率模块的波动更小，有利于提升功率模块的寿命，如图21。也就是说在相同工作条件下，AlN 的热阻更小，结温波动更小，工作寿命将会是更加可观。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVxdhEorvVcFqHBWc8IqkbN82Tf7p4JCKSqD1FNh0vibWURzHSPXsoa25w/640?wx_fmt=png&from=appmsg)

相对于SSC 封装，DSC 封装的垫片覆盖芯片上表面，直接影响功率模块的寿命。选用合适的垫片材料，可以缓冲应力，增加DSC 功率模块的寿命。若垫片材料选为铜，DSC SiC 功率模块内的焊料层寿命分布，如图22 所示。对比图16 所示钼垫片的结果，可以发现：采用铜垫片后，DSC SiC 功率模块的焊料急剧失效，且垫片两侧焊料失效最快。虽然，相对于钼垫片，虽然铜垫片能够减小 结–壳热阻，但是其热膨胀系数与SiC 材料相差更大，热应力的失配效应更明显，导致焊层寿命显著降低。此外，铜垫片的热阻更小，芯片顶面的热通量更大，温度梯度更高，焊料层的温差更大，进一步加剧焊层失效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVx5yle5bnibNh9qU8lBebXhRiajTs0Et6TNTezy0QxB5oCI05XTdEpn4ibg/640?wx_fmt=png&from=appmsg)

在不同Tj的功率循环条件下，不同封装的SiC功率模块的功率循环寿命，如图 23 所示。随着Tj的增加，DSC SiC 功率模块的减小，采用铜垫片后，功率模块寿命约为钼垫片的1/4，其寿命甚至低于SSC SiC功率模块。垫片材料的热膨胀系数，应该接近于SiC 材料，才能降低模块的应力，提升模块的寿命。虽然，铜垫片能够一定程度上减小DSC SiC的结壳热阻，但是其对功率模块的寿命损耗，远不如结温降低带来的寿命提升。因此，对于DSC SiC功率模块，相对于铜垫片，虽然金属钼的热导率稍低，但是钼垫片仍然是更优的选择。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8QsVSIyT4yoXzhxgIicCVx3S5Pwxu1epia4o7bjedSPMuCcyHyf7qUsYDg31icKCibYLRiaTKNHTg0dw/640?wx_fmt=png&from=appmsg)

5. 结论

DSC SiC 功率模块的是未来功率模块的重要发展方向，然而现在对它的可靠性分析和寿命模型欠缺。本文通过对功率模块的简化降维，得到了一个能快速计算DSC SiC 循环寿命的2D 有限元模型，并且利用现有的数据进行间接验证。针对现阶段DSC SiC功率模块可靠性测试数据缺乏的问题，本文提出了利用现有的Si 器件数据进行验证，为快速获取DSC SiC 功率模块的寿命模型提供了一种新的思路。

本文通过现有的单面散热功率模块测试数据，验证了有限元模型的准确性，并同双面散热模块对比，由此建立了针对双面散热模块的寿命模型。最后，探究了衬板陶瓷材料、垫片材料对模块寿命的影响，并给出了模块优化的建议。得到的结论如下：

1）对于DSC 封装功率模块，若采用钼作为垫高材料，芯片底部焊料层最先失效，且在失效过程中占主导地位。若采用铜作为垫高材料，以垫高层两侧焊料最先失效。

2）双面散热模块的垫片建议采用钼片，能有效地提升模块的循环寿命。而采用铜垫片的DSC模块仅为钼的 1/4。

3）DBC 陶瓷材料建议采用AlN 或Si3N4，以有效降低功率模块的热阻，提升功率模块的寿命。

4）采用相同封装材料，DSC 封装功率模块的寿命是SSC 封装功率模块的2 倍，这种优势在结温波动较大的情况更为明显。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)