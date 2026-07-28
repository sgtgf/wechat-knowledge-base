# SiC MOSFET 在悬浮控制器中的应用研究


> 原文地址: [https://mp.weixin.qq.com/s/V8t\_atcrrBBwJStOCfBnzw](https://mp.weixin.qq.com/s/V8t_atcrrBBwJStOCfBnzw)

**文章来源：**电力与电子技术

**作者：**焦建林1 黎科2\*（1. 长沙市轨道交通磁浮线建设发展有限公司 湖南省长沙市 410014）（2. 湖南凌翔磁浮科技有限责任公司 湖南省长沙市 410007）

**摘　要：**本文将以中低速磁浮列车的悬浮控制器为应用场景，通过选用 FF200R12KT4（IGBT）和 FF6MR12W2M1\_B11(SiC MOSFET) 两款功率器件搭建实验平台，计算分析比较了两种器件在相同工况下运行的功率损耗，并对其进行了仿真验证。随着磁浮车辆对小型化、轻量化、载重能力等需求的提高，研究高效率、高功率密度的功率器件在悬浮控制器中的应用迫在眉睫。与传统的 IGBT 功率器件相比，碳化硅功率器件具有寄生参数低，器件尺寸小，导通损耗低和工作频率高等优势。在相同工况条件下，碳化硅功率器件功耗低的特点，降低了系统对散热能力的需求，同时降低了系统的整体体积及重量。

**关键词：**悬浮控制器；高功率密度；碳化硅功率器件；IGBT

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1BCVNqpKqgcciasur0icw4VkVGSmhJz4xibXSA7BY9zl1o7jyiaPNhke0lw/640?wx_fmt=jpeg&from=appmsg)

悬浮控制器是磁浮车辆悬浮稳定运行的关键部件，随着轨道交通行业对车辆小型化、轻量化、载重能力等需求的提高，研究开发高效率、高功率密度的悬浮控制器需求迫在眉睫。如今降低功率器件的能耗已成为全球性的重要课题，在提高电能变换装置效率中起关键作用的是电力电子功率器件，借助于微电子技术的发展，以硅器件为基础的中小功率电力电子功率器件 MOSFET及 IGBT 等的开关性能已随其结构设计和制造工艺的完善而接近其由材料特性决定的理论极限，依靠硅器件继续完善和提高电能变换装置与系统性能的潜力已十分有限，同时在全球节能降耗的大环境下，新一代的功率半导体器件碳化硅 MOSFET(SiC MOSFET) 应运而生。

本文将以中低速磁浮列车的悬浮控制器为应用场景，通过选用 FF200R12KT4（IGBT）和 FF6MR12W2M1\_B11(SiC MOSFET) 两款功率器件搭建实验平台，计算分析比较了两种器件在相同工况下运行的功率损耗，并对其进行了仿真验证。

**1\. 中低速悬浮控制器应用条件**

**1.1 输入输出条件**

额定供电电压： DC330V

电压变化范围： DC250V~360V

额定输入功率： 2kW

额定输出电流： 35A

峰值输出电流： 120A（10S）

额定工作频率： 5kHz

负载特性：阻抗 1Ω

**1.2 主电路工作原理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1DPlvwTCUF3TClrnK1Opsplzsht7casz9kct85CNsXA4l31ferib1BAw/640?wx_fmt=png&from=appmsg)

中低速悬浮控制器主要由控制电路、斩波电路两部分组成，其主要功率损耗集中在斩波电路，斩波电路其拓扑结构如图 1 所示，直流 330V 电源输入后并接母线支撑电容 C1 以及由 VT1、VT2、VT3、VT4 组成的 H 桥斩波电路。TR1 为斩波输出控制的悬浮电磁铁。控制器采用 PWM 控制方式，VT1、VT4 构成上桥臂，VT2、VT3 构成下桥臂，单周期内上下桥臂交替导通。

**2 .功耗分析**

**2.1 IGBT和SiC MOSFET基本参数**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1PD7b0ibwIJo6mViaibS6ibK1REIwibPR7mvxo6ZvDRibW3gOW7AVEMrd99Kw/640?wx_fmt=png&from=appmsg)

**2.2 IGBT方案损耗分析**

斩波器采用英飞凌的 FF200R12KT4 IGBT 模块工作时，IGBT 的总损耗主要由 IGBT 的开通、关断和导通损耗以及体内二极管的导通损耗和反向恢复损耗组成。实际工况下，由于温度和运行环境的不同，以及电路干扰等不确定因素，理论损耗可能与实际损耗不同，存在一定误差，但不影响其作为优化设计的参考。在此设定损耗分析的工作条件：直流电压 Ud\=330V，负载等效阻抗 RO 为 1 欧姆，额定输出电流 IO 为 35A。开关频率 f为 5kHz，死区时间 1uS，IGBT 节温 125℃，则由公式（1）可计算得出导通占空比 D 为 55.3%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1fGNfDSXaoiafb9gNLwHaLTRNqXBZBsKcyKu0WYeIgmwl9e5lSBPYGLg/640?wx_fmt=png&from=appmsg)

**2.2.1 上桥臂开关管损耗分析**

由于上桥臂 VT1、VT4 在斩波过程中体内二极管始终不导通，因此只需要考虑 IGBT 管上的损耗。根据器件的数据手册可得每次开通、关断损耗分别为Eon\=1.2mJ，Eoff\=1.6mJ。因此 VT1 单管开关损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1jEWsucHKtZibAZrIOur30IBEwZOxImb3zRia03ke9SGX40cJ2OAUOUicg/640?wx_fmt=png&from=appmsg)

再考虑 VT1 单管导通损耗，根据器件的数据手册查得额定电流 35A 时，IGBT 管压降 UCE 为 0.7V。所以VT1 的导通损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1V6LZ2koOhfxib7MEnxmict5a4ib3yLhCUXlQWVH9rgzpJJoBWPynAYqxQ/640?wx_fmt=png&from=appmsg)

**2.2.2 下桥臂开关管损耗分析**

由于下桥臂 VT2、VT3 在斩波过程中体内二极管导通时间很短，这里计算时忽略体内二极管导通损耗，因此只需要考虑 IGBT 上的损耗和体内二极管的开关损耗。根据器件的数据手册可得 VT2 体内二极管的开关损耗为 EREC\=1.5mJ， IGBT 每次开通、关断损耗分别为Eon\=1.2mJ，Eoff\=1.6mJ。因此开关总损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1hL6ObQquLuZ3DBtpibleRQh33YXmZfZEic1EbNGicyBxAIJSNcKDUicg8g/640?wx_fmt=png&from=appmsg)

再考虑 VT2 开关管导通损耗，根据器件的数据手册查得额定电流 35A 时，IGBT 管压降 UCE 为 0.7V。所以 VT2 的导通损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1CNeZE9wykXdibu94ibK9aViaWNmxS902ocrDUiaOZUC9LTibWwljic6qOfNg/640?wx_fmt=png&from=appmsg)

**2.2.3 斩波器上下桥臂总损耗**

由于 VT1、VT4 两管损耗相等，VT2、VT3 两管损耗相等，因此斩波器桥臂上的总损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1yMTvPasaaJ7965ExamMibIiauKCqZjUBrsDBuoMX3StXmnic6o23lhE8w/640?wx_fmt=png&from=appmsg)

**2.2.4 单管的温升**

根据 FF200R12KT4 Data sheet 中查到 IGBT 结 \- 外壳热阻 0.135K/W，外壳 \- 散热器热阻 0.034K/W，设散热器的热阻为 0.36K/W。

则总热阻为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1gp7EYCucylHHViaF0jsqc2sRhWCW8NnpovkXsQCM6uxopNHHurZ0ZeQ/640?wx_fmt=png&from=appmsg)

为了计算简单方便，忽略二极管与 IGBT 管之间的自身发热导致的热相互影响，由下式直接计算可得IGBT 单管温升值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1KLL7RA4NOx9d9F61Giast9oMqHPGutSCiaMDI4PLorcBWT3sXYLPDWeg/640?wx_fmt=png&from=appmsg)

**2.3 SiC MOSFET方案损耗分析**

斩波器采用英飞凌的 FF6MR12W2M1\_B11 碳化硅模块。碳化硅 MOSFET 的总损耗主要由碳化硅的开通，关断和导通损耗以及体内二极管的导通损耗和反向恢复损耗组成。在实际工况下，由于温度和运行环境的不同，以及电路干扰等不确定因素，理论损耗可能与实际损耗不同，存在一定误差，但不影响其作为优化设计的参考。

在此设定损耗分析的工作条件：直流电压 Ud\=330V，负载等效阻抗 RO 为 1 欧姆，额定输出电流 IO 为 35A。开关频率 f 为 5kHz，死区时间 1uS，SiC MOSFET 节温 150℃，则由下述公式可计算得出导通占空比 D 为55.3%。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1qrJRAdzfsgp9AkcHrzW1kpRBCsK1xnnwt18Inyv5lzW1HkAJkYd1UA/640?wx_fmt=png&from=appmsg)

**2.3.1 上桥臂开关管损耗分析**

由于上桥臂开关管 VT 1、VT 4 在斩波过程中体内二极管始终不导通，因此只需要考虑 SiC MOSFET 管上的损耗。根据器件的数据手册查得每次开通、关断损耗分别为 Eon\=0.26mJ，Eoff\=0.125mJ。因此开关损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1ZxT694cSvkEvV29SlB8hzcUbRdXEjDxkB2bGw1VI72xDcQnLeibZTgg/640?wx_fmt=png&from=appmsg)

再考虑 VT 1 管导通损耗，根据器件的数据手册查得额定电流 35A 时，SiC MOSFET 管压降约为 0.21V。

所以 VT 1 的导通损耗为：  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1ANeQhLZslG1dF6qEOA2oWOicB63eYaKV4bMh8Tl8XPXZqylHCWHzeHg/640?wx_fmt=png&from=appmsg)

**2.3.2 下桥臂开关管损耗分析**

根据器件的数据手册查得每次开通、关管损耗分别为 Eon\=0.26mJ，Eoff\=0.125mJ。因此开关损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1OQB5HOVOX4Tfn1MFJUyzg25qgoyksK1Bn5U3SpXM5ib3HHkEZdkC5WA/640?wx_fmt=png&from=appmsg)

再考虑 VT 2 管导通损耗，根据器件的数据手册查得额定电流 35A 时，SiC MOSFET 管压降约为 0.21V。

所以 VT 2 的导通损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1CuVOXaEsW9ib5b9gQY6SfGlnyvpnZgGyZln9DftWPTXQtG6rsVusgNg/640?wx_fmt=png&from=appmsg)

**2.3.3 斩波器上下桥臂总损耗**

由于 VT1、VT4 两管损耗相等，VT2、VT3 两管损耗相等，因此斩波器桥臂上的总损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1Wiag6bP2ExCJfVLvpnz5NIowI2uAaibpvgbkg2jLtxAC7f8uxvVaQmrw/640?wx_fmt=png&from=appmsg)

**2.3.4 单管的温升**

根据 FF6MR12W2M1\_B11 Datasheet 中查到 SiC MOSFET 管结 \- 散热器热阻 0.328K/W。假设外部散热器的热阻为 0.36K/W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1kCT5UfIprEumYokJ7pConBmGLdgUXUVfyLmNBZsJ9P2zdUEEmzaVbA/640?wx_fmt=png&from=appmsg)

**3\. 悬浮斩波器仿真分析**

**通过英飞凌的 IPOSIM 软件仿真，环境温度设定为40℃，仿真系统外部散热器热阻设置为 0.36K/W。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1jLGybmNxHS9EBKRSHia0UJCWL3FMv9K4NnsruMTQCN4jR8MxVlBe33A/640?wx_fmt=png&from=appmsg)

在 35A 时单管的仿真结果如图 2 所示：采用 IGBT(FF200R12KT4) 时的功耗为 28W，采用 SiC MOSFET(FF6MR12W2M1\_B11) 时的功耗为 4.8W，如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1kiak2AcibyQLVYyDzxT6oKKqU5rCTckNHVb3NBjicGJHlsnPDQBcIRBNA/640?wx_fmt=png&from=appmsg)

当悬浮控制器斩波器采用 FF200R12KT4 时可计算得出总功耗为 112W，斩波器采用 FF6MR12W2M1\_B11 时计算得出总功耗为 19.2W。如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1VicnDjCmUSjZjuLGY5S2SVpb20u57UmtlKDEUpicXqkvLHdm2lnSicduw/640?wx_fmt=png&from=appmsg)

**4 .计算及仿真数据对比**

本文分别设计计算和仿真了悬浮控制器在额定 35A工况下的运行数据，具体见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1xXINXzicnWeYGaVtnkgK9gHupWD6afatNO3ibrBTwWcBO0aWgMaR5NCg/640?wx_fmt=png&from=appmsg)

由上表数据分析能说明与传统的硅器件相比，采用SiC 器件可降低开关和导通损耗，由此将减少悬浮控制器的总体损耗，降低系统对散热器的热阻要求，从而可达到有效降低悬浮控制器的体积和重量的目的。  

**5\. 结论**

本文以测试磁浮列车悬浮性能为研究目标，搭建了性能测试系统，获取实时悬浮状态信息，为中低速磁悬浮系统的调试提供数据支持。

对悬浮控制系统性能的实时检测，能准确了解悬浮系统在各种条件下的性能指标，包括不同速度、不同线路以及不同负载下的性能指标。通过对性能指标的检测和分析，既能为悬浮控制系统的优化提供依据，有利于提高列车的悬浮性能，提升磁浮列车乘坐的舒适性，加强磁浮列车在轨道交通领域的竞争力，促进磁浮列车技术的发展，对加快推进磁浮列车技术的产业化具有重大意义。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)