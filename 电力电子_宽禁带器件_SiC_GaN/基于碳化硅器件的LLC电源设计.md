# 基于碳化硅器件的LLC电源设计


> 原文地址: [https://mp.weixin.qq.com/s/WkfYdF8mMUmrOzkevewaFQ](https://mp.weixin.qq.com/s/WkfYdF8mMUmrOzkevewaFQ)

文章来源：电子产品世界

作者：岳家旭（兰州交通大学新能源与动力工程学院，甘肃兰州730070）

摘要：针对传统电感-电感-电容（inductor\-inductor\-capacitor，LLC）电源功率密度低、效率低、体积大等缺点，提出了一种采用碳化硅金属氧化物半导体场效应晶体管（metal\-oxide\-semiconductor field\-effect transistor， MOSFET）替代传统硅基MOSFET的LLC电源设计方案。首先，阐述 LLC谐振变换器电路系统的组成；其次，分析半桥式 LLC谐振变换器的拓扑结构，并对其关键参数进行计算，包括谐振电容、谐振电感和变压器励磁电感等，为LLC电源设计提供依据；最后，搭建一台功率为300W、输入电压为交流 85～265V的 LLC电源样机，用于验证所提设计方案的有效性。测试结果表明，采用碳化硅器件的LLC电源效率更高，达到94%，输出纹波系数降低至 3.92%。  

关键词：碳化硅器件；半桥式 LLC；LLC 电源

0.引言  

直流-直流（direct current-direct current，DC-DC）转换器作为一种关键的电力电子设备，已广泛应用于工业、通信、新能源等多个领域。在分布式光伏发电系统中，DC-DC转换器承担着稳定光伏输出电压的重要任务。但光伏发电系统具有明显的时变性和非线性特征，其输出电压极易受到外部因素的干扰，如太阳辐照度、环境温度等，导致输出功率呈现明显的间歇性和波动性，这不仅会降低系统的发电效率，还可能引发电压闪变、谐波污染等电网电能质量问题。  

传统的DC-DC变换器拓扑结构主要包括Buck、Boost、Cuk等非隔离型变换器，以及反激式、正激式、推挽式、半桥式和全桥式等隔离型变换器。其中，Buck变换器只能实现降压功能，Boost 变换器只能实现升压功能，Cuk 变换器不具备隔离功能。反激式开关电源和正激式开关电源兼具降压功能与隔离功能，但其开关损耗较大，工作效率远不及谐振变换器。  

近年来，电感-电感-电容（inductor-inductorcapacitor，LLC）谐振变换器凭借其高效率和高功率密度的优势，在众多领域引起了广泛关注。半桥式LLC拓扑结构可通过一次侧开关器件的零电压开通和二次侧开关器件的零电流关断，显著降低开关损耗，提升LLC 谐振变换器的效率。另外，LLC 谐振变换器固有的软开关特性不仅能有效改善整机的电磁兼容性，还能大幅提高系统的抗电磁干扰水平。得益于半桥式LLC 拓扑结构高效的谐振能量传输特性，LLC 谐振变换器能够实现更高的功率密度，从而为电源系统的紧凑化设计奠定了坚实基础。研究显示，LLC 电源在各种应用场景下，均能够呈现高效率、低损耗和高可靠性等卓越性能表现。  

金属氧化物半导体场效应晶体管（metal-oxidesemiconductor ﬁeld-eﬀect transistor，MOSFET）作为LLC 谐振变换器的“心脏”，是其实现高效能量转换的核心执行部件。与传统硅基MOSFET 相比，基于碳化硅器件的MOSFET 展现出显著的技术优势，尤其在高频功率转换领域。碳化硅器件反向恢复时间极短的特性，不仅显著降低了开关损耗和电磁干扰，还大幅提升了系统的工作频率和功率密度。此外，碳化硅材料的高击穿电场强度、高热导率及高电子饱和漂移速率等特性，使其在高温、高频和高功率应用场景中具有更优异的性能。  

综上所述，针对传统硅基器件LLC 电源存在的开关损耗高、反向恢复性能差、高温性能不佳等缺陷，本文提出采用碳化硅器件替代传统硅基器件来设计LLC 电源的方案，以提高LLC 电源的效率与整体性能。  

1. LLC谐振变换器电路系统组成  

LLC谐振变换器的电路系统主要由电磁干扰（electromagnetic interference，EMI）滤波电路、功率因数校正（power factor correction，PFC）电路、LLC 谐振变换电路3个部分构成。其中，EMI 滤波电路用于抑制传导干扰与辐射干扰，确保系统满足电磁兼容性要求；PFC 电路用于实现输入电流的正弦化，进而提高功率因数。 LLC 谐振变换电路作为核心功率转换单元，主要用于实现高效的能量传输。LLC 谐振变换器电路系统组成如图1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMbSbChXyd2btRVX46fevsniaX2AIAwJ5oohKga7hrNVeB4p9uLV1Zf9icCeUGY3se234DNVriaqQrvribRUsNKkJZJ2qRSWq7BYQU/640?wx_fmt=png&from=appmsg)

NCP1654是一款专为连续导通模式（continuous  conduction mode，CCM）升压预转换器设计的高性能PFC控制器。该控制器具备跟随升压模式运行的能力，这一特性显著优化了预转换器的结构设计，在确保高性能的同时，有效减小了系统体积并降低了整体成本。NCP1654采用固定频率控制策略，通过合理设计电感元件参数，能够将正弦波顶部的峰间电流纹波严格控制在较低水平，从而提升系统的整体性能。NCP1654 还具备多项先进特性，如快速的瞬态响应能力能够确保系统在动态负载下保持稳定运行，低运行功耗能够显著提高系统的能源利用效率，精确的浪涌电流检测能力、可靠的过压保护能力和欠压检测能力进一步增强了系统的稳定性和安全性。这些特性使NCP1654 尤其适用于对PFC有严格要求的工业电源系统，如通信电源、服务器电源和工业变频器等。  

NCP1397B 是一款专为谐振拓扑结构设计的高性能控制器，可广泛应用于串联谐振、并联谐振及LLC 谐振等半桥式谐振转换器系统。该控制器集成了高压栅极驱动器，显著简化了电路布局并有效减少了外部元器件的数量，进而提高了系统整体的集成度和可靠性。NCP1397B控制器的核心是一个工作频率可达500kHz 的压控振荡器，这种设计提供了灵活的控制模式与构建高可靠性谐振模式电源的完整解决方案。另外，NCP1397B 提供了全面的可配置保护机制，具备自动恢复/ 故障锁定双模式保护、欠压保护、光耦开路检测保护、软启动和短路保护等多项功能。基于这些特性，NCP1397B 在开关电源设计中展现出独特的优势，尤其适用于高效率、高功率密度的应用场景，为现代电力电子系统提供了可靠的解决方案。  

MP6922 是一款高性能的双通道快速关断智能控制器，用于LLC 谐振变换器的同步整流。该器件可精确驱动两个N 沟道功率MOSFET。首先，该器件采用先进的电压调节机制，能够将开关管的正向导通压降稳定控制在合理的水平，并实现负压预关断功能；其次，该器件集成了智能轻载管理功能，在轻载工况下可自动锁存栅极驱动器，显著降低了轻载损耗；再次，MP6922 具备纳秒级快速关断能力，可同时支持开关电源在CCM和断续导通模式（discontinuous conduction mode，DCM）下稳定工作；最后，该器件内部集成了反向电流保护电路，能够确保MOSFET 在高频CCM工况下可靠运行，有效提高了系统的安全性和稳定性。  

2. LLC谐振变换器设计  

2.1拓扑结构分析  

本文设计的LLC 谐振变换器采用半桥式拓扑结构，其电路构成如图2 所示。该电路主要由直流输入模块、方波发生器模块、谐振网络模块、全桥式整流模块和滤波输出模块构成。其中，直流输入模块负责将交流电转换为稳定的直流电，并提供稳定的直流电源；方波发生器模块由半桥式开关器件构成，用于生成高频方波信号；谐振网络模块包含LLC 谐振腔，能够实现能量谐振传输；全桥式整流模块负责将高频交流电转换为脉动的直流电；滤波输出模块用于滤除输出电压纹波。这种模块化的结构设计大幅提高了系统的可靠性和可维护性，同时也提高了LLC 电源的效率。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOHibWRvOUicGt1Mh8eT2ZsH6nhKDARiaUqpWYU6mJIdDUjgCm8z6fUiaJo1KFBW46FqBrkIUzaNtduWpsR33ZLUctyB7foWpEUjfs/640?wx_fmt=png&from=appmsg)

其中，Q1、Q2 为碳化硅MOSFET，D1、D2 为MOSFET的体二极管，C1、C2 为MOSFET 的寄生电容，Cr 为谐振电容，Lr 为谐振电感，Lm 为变压器励磁电感，RL 为负载。  

LLC 谐振变换器的谐振网络由3 个谐振元件组成，根据电路运行状态的不同，形成了两个特殊的谐振频率。当原边、副边有能量传递时，副边二极管为导通状态，变压器励磁电感Lm 两端的电压始终被钳位到Vo。此时，电路中的谐振元件为Cr 和Lr，而励磁电感Lm 不参与谐振。此时，谐振频率fr1的计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM5kKp10Zia2xnuO30uj3TlWxL4xOia49PSHqDs0epZz7wLvtp0AXQHzHNj9FWLdHm5SYonQE8p8DcltQrIKgIplKx7JOxsoq1xQ/640?wx_fmt=png&from=appmsg)

当高频变压器无能量传递时，副边二极管为截止状态，变压器励磁电感Lm 两端的电压不再被钳位。在此运行状态下，电路中的谐振元件为Cr、Lr和Lm。此时，谐振频率fr2 的计算如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPqt9U0f3iaekSkPJpu0TBFqvdWvePibxoPbwLekicb0Zia3ic6BSJhq9Ask68JCFcmtznEMrR98Tuw9b8QeoEmNy4kHBLhwBaGy2Sg/640?wx_fmt=png&from=appmsg)

LLC 谐振变换器处于不同的开关频率下，其等效输入阻抗的性质也不同。当开关频率为fr1 时，其等效输入阻抗呈感性；当开关频率为fr2 时，其等效输入阻抗呈阻性。阻抗特性与频率的关系直接影响变换器的软开关实现和功率传输能力。  

2.2关键参数  

LLC 谐振变换器的谐振腔由谐振电感、谐振电容和变压器励磁电感3个关键元件构成。其中，谐振电感与谐振电容串联，两者共同决定主谐振频率。变压器励磁电感并联在变压器初级侧，参与谐振过程，并对LLC 谐振变换器的增益特性产生明显影响。  

谐振电容是LLC 谐振变换器中谐振腔的关键组成器件。当电源处于谐振频率时，谐振电容电压应力Vermax 的计算公式如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNKMjfGEeBPgc8aZLySt1zgqIGOMdLT3wr7p4nPpshPHLqfJ72DHl6ZeOVE5ggK8TqSyVq9s3qbkcvfSeFicicgOBrVOY83ptKhQ/640?wx_fmt=png&from=appmsg)

式中，Vmax 为最大输入电压（265 V），Imax 为最大谐振电流（12.5 A），fr 为谐振频率（90 kHz），Cr 为谐振电容（26.97 nF）。经计算，Vermax 为377.924 V。  

谐振电感与谐振电容发生串联谐振，从而产生主谐振频率，这一过程对LLC 谐振变换器实现软开关和调整电压增益起着关键作用。谐振电感的电压应力Virmax 计算如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMqp920yIMlORNSeY0Dt97MsUanAAMwMe28iaYyMaM8gbl5DuaIp05Eq7YOib3d1XFmQC2cgNepaEuqvEic1jjLBbXJDcNibRqRkmw/640?wx_fmt=png&from=appmsg)

式中，Lr 为谐振电感（115.9 μH）。经计算，Virmax为175.424 V。  

变压器磁芯横截面积、变压器原边匝数和变压器副边匝数是设计变压器励磁电感的关键参数。其中，变压器磁芯横截面积Ae\_lp为1.61×10\-⁴ m²。  

变压器原边匝数Np的计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOeqoAW888WtpAHXU0UrJ7eudzficdTVniczic6YTUeEy6XtIMTrStZvyWkGuQjUuZbOZtzUibS5vZMgEVjTfzwPYGe4o4aicNcm7xA/640?wx_fmt=png&from=appmsg)

式中，Im\_max 为最大变压器电流（2.676 A），Bmax 为最大磁通密度（0.24 T）。经计算，Np为16.675 匝，实际应用中取值为17。  

变压器副边匝数Ns的计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPiaJymPicpo2icSdibJibSQC21royJQ1TwAMHGP5a5bH5ibPNv84ChOVcia6pLRia4K24q6FwSiccbtHH1JTDo1luibqmR0HtPvI8GxBBmU/640?wx_fmt=png&from=appmsg)

式中，n为变压器原边和副边的比值。经计算，Ns为2 匝。  

3.实验验证  

3.1LLC电源样机设计  

通过上述计算得到谐振电容、谐振电感和变压器励磁电感等的关键参数。利用这些关键参数可以定制对应的谐振电感、高频变压器和谐振电容等关键元件。首先，使用PSIM 电力电子仿真软件，根据这些设计参数搭建对应的LLC 谐振变换器仿真模型，利用仿真结果对关键器件设计参数进行可行性分析，为后续的样机设计提供理论依据。其次，使用Cadence Allegro16.6 设计软件绘制硬件原理图，以确定各个功能模块在电路原理上的可行性；在对导入印制电路板（printed  circuit board，PCB）设计软件的原理图进行布局布线时，要重点考虑功率回路最小化、信号完整性，以及电磁兼容性、机械结构、板卡散热等关键因素。最后，搭建一台功率为300W、输入电压为交流85～265V 的LLC 电源样机。LLC 电源样机实物如图3 所示。由于电源纹波过大会对负载设备的正常工作造成影响，还需对电源满载纹波进行测试，分析电源在满载状态下输出电压上的高频噪声，以判定电源输出的稳定性和质量。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOLrzPGykBurictE9xSEnV5I62n3Tia1UdA5FUcljyibcUMOniaibZe3LWtYL1OrkhmZClYEazgiaegHicZAwesDhmzrib4GZSgJhCauZs/640?wx_fmt=png&from=appmsg)

3.2实验结果  

通过测试LLC 电源样机的输出电压、输出电流等数据，进而计算出电源的效率。由图4 可知，LLC 电源的输出电压为24.01 V，输出电流为5.20 A，通过计算可得该电源的效率为94%。由图4c 可知，LLC 电源的纹波电压峰值为940 mV，满足5% 的电源纹波标准。输出纹波系数，即纹波电压与输出电压的比值降至3.92%。由此可知，本文提出的设计方案在实际应用中具备可行性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPBSSul8nJl6Cw5Y9WT0tUATtCVv3OKibhg3rOtbibVJtHfMliafnUvcmziaWYUKPpy3Q5VaJCC80XpSZXaWibHENeZh5ALVictpeUT4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPnEZAhibm50VnJFD3KTIzia7gGaN4wc7ZCypWhnYmAZ5jCGRdxicwicdWNzYL4d4a1GNkcr4aqxhUoiaRI4NUyu20uoKCfpNqkGUGo/640?wx_fmt=png&from=appmsg)

4.结论  

本文提出了一种基于碳化硅器件的LLC 电源设计方案。该方案采用碳化硅MOSFET替代传统硅基MOSFET，显著提升了LLC 电源的整体性能。样机测试结果表明，与采用传统硅基MOSFET 的LLC 电源相比，本文所设计的LLC 电源在效率和输出纹波等关键指标上均有明显改善。其中，电源效率达到94%，输出纹波系数降低至3.92%。该研究为高功率密度、高效率电源系统的设计提供了一种有效的实现路径。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMHxflAf2TpIEqbDFMGoXQbnxp78feibh61JRypr2Is9p0AZicHxia9ygVkRyicP59TfCzGVr129RAutMO8H87Ggian3ywt2f3HWDGo/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNlRGBr5micPQcGrILaFicaHvSCHMEMZoIwZic374rARoIUAJXBOmRb24FQ2SIvBz2Jmz9XV52k3NtXG5ntJ1xMMAgkPxUjRCA9Ak/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKZlrXxC7cnb9YPkOS3bWQUNT8OCJ8ibTdalv8yUGOApphoyQIiaeOHiaJZpTbMhYRcuib8Y1T2R5MdveBdICQuEU8t639btMqARQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMd3UFuL2FkCTN2kZheiaiceCFBTbAia9MZMDaoEADvf3WmqUS9NWBkf4lR47FX7j3pibnLTonQJtxMzepPopkQbibrr2rsD3Z8Ndwc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)