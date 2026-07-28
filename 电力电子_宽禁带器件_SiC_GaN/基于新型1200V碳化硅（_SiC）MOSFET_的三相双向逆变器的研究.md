# 基于新型1200V碳化硅（ SiC）MOSFET 的三相双向逆变器的研究

原创 刘学超 ，黄建立 SiC碳化硅MOS管及功率模块的应用 2025-04-08 18:57 广东

> 原文地址: [https://mp.weixin.qq.com/s/pSDU-R-i\_Tja4SbcPu7qaQ](https://mp.weixin.qq.com/s/pSDU-R-i_Tja4SbcPu7qaQ)

文章来源：电源学报

作者：刘学超 1 ，黄建立 1 ，叶春显 2 （1. 科锐香港有限公司功率与射频器件事业部，香港； 2. 深圳市鹏源电子有限公司半导体事业部，深圳 518031） 

摘要：研究了基于新一代宽禁带 1200 V 碳化 硅（SiC）MOSFET 三相双向逆变器，由于 SiC MOSFET 的高耐压、低损耗、高开关频率特性，逆变电路的拓扑结构得到简化，并提高了功率密度和可靠性。 同时，利用碳化硅MOSFET的双向第三象限导通特性，与硅基 IGBT 相比省略了开关器件的反并联二极管。 20 kVA实验样机验证了在该中大功率三相双向逆变器中 SiC MOSFET 相比硅基 IGBT 方案的优势。 

关键词：碳化硅； 宽禁带； 双向逆变器； 反并联二极管； 第 3 象限

引言

随着新能源的发展，电池储能的应用变得越来 越广泛。 对储能系统来说，一方面外部交流电网需 要通过变换器对储能电池适时地进行充电；另一方 面，在需要的时候储能系统也可以对外部交流电网 或者其他负载通过变换器释放交流电能。 此变换器 称为双向逆变式变换器。 双向逆变式变换器可以从 直流变换成交流（DC to AC）放电电源，同时也可以 通过交流电 源对直流储 能系统（AC to DC)充电 电 源。 该变换器的一种典型应用是电动汽车充电系 统，它能实现车辆 V（vehicle）对车辆、车辆对电网 G（power grid）之间的电力能量的互连传递。 这种双 向逆变式变换器可以极大地利用电能效率，实现电 动汽车与电网 （V2G 和 G2V）在能源方面的互联互 通。 双向逆变式变换器的另一种应用是储能式光伏 逆变系统，在晚间用电低谷电价低时，电网可以通 过双向逆变式变换器对储能系统充电；在白天用电 高峰时光伏对电网供电，在供电不足条件下，储能 系统可以通过双向逆变式变换器平衡电网，削峰填谷，有效地最大化利用再生能源。

碳化硅（SiC）是新型第 3 代半导体材料的典型 代表，具有宽带隙、高饱和漂移速度、高热导率、高 临界击穿电场等突出优势，特别适合制作大功率功 率器件。 利用 SiC 等新材料实现的功率半导体器件 目前正带领电力电子应用领域实现一场“绿色新能 源革命”。 目前，基于 SiC MOSFET 的发展迅速，正逐步应用于新能源大功率变换应用领域。 尤其是1200 V 或 1200 V 以上的 SiC MOSFET，与传统的硅基 IGBT 相比，其具有很低的开关和导通损耗、高可靠性、高耐压、高雪崩击穿能力等特点为电力电 子逆变器系统的小型化、简洁化、轻型化、高效化带来可能。 当前 SiC MOSFET 器件成本相对于硅器件仍然较高，因此在实际应用中必须体现它的高频化 和简化拓扑的优势，才能更好地用于实际系统中。

为此， 本文提出一种基于宽禁带 SiC MOSFET的两电平三相双向逆变式变换器，可以将逆变拓扑从三电平简化为两电平，采用高频工作实现较高功率密度和较低总体成本， 并研制 1 台 20 kVA 实验样机进行验证。

1. 碳化硅 MOSFET 三相双向变换器拓扑

在传统逆变器电路中， 采用硅基 IGBT 的三电平逆变器拓扑最为常见的电路，主要包括中点嵌位型 NPC（neutral point clamp）三电平电路和改进型 T字型三电平电路。 这些三电平逆变器主要存在以下3 点局限：①电路拓扑结构复杂，由于采用三电平 技术，电路设计（包括控制和驱动部分）较为复杂，特别是对于双向逆变式变换器来说，三电平控制策略将更加复杂；②采用硅基 IGBT，开关频率受到损耗的限制，一般频率在20 kHz 以内，交流滤波电感 由于低频化的限制，尺寸较大，限制了功率密度的进一步提升；③由于硅基 IGBT 损耗较大，特别是开关损耗较大，效率受到限制。目前典型的 20 kVA 逆变器最高效率局限在 98.6%以内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22sgTJTF3avAIpJ3Kqk0gLeC1nGfKzMX9dqg99FQjnhh3gh9kVNPJicKA/640?wx_fmt=png&from=appmsg)

本文所提碳化硅 MOSFET 两电平三相双向逆变器拓扑如图 1 所示。 其中，每一个开关单元只含SiC MOSFET 开关器件， 二极管为 SiC MOSFET 内部寄生体二极管， 与硅基 IGBT 相比该逆变器不需要反并联二极管，并且从复杂三电平电路简化为两电平电路。由于采用 SiC MOSFET，可实现更高开关频率工作，从而可减小系统的体积，提高功率密度，降低研发、生产和运输成本。 为了验证该逆变器的性能研制了一台 20 kVA 实验样机, 图 2 为样机整体系统结构框图，主要包括主功率部分、数字控制部分和辅助电源部分，其数字控制采用传统状态空间脉宽调制 SVPWM 控制策略，缓解了由于三电平电路带来的软件资源不足的问题。 本文所提碳化硅MOSFET 两电平三相双向逆变器拓扑如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22IGd60JNxicN7Zkriby7t2EocicZ51lB0MOkG6bmqU8Y3OUynOE103oBQw/640?wx_fmt=png&from=appmsg)

2. 碳化硅 MOSFET 性能

2.1 碳化硅 MOSFET 特点总结

SiC MOSFET 作为功率开关器件， 具有以下主 要特点： 

（1）高耐压和低导通电阻。 碳化硅材料具有 10倍于硅材料的电场强度，用碳化硅材料制成的平面 型（Planar）MOSFET 可以极大地减小耗散层的单位电阻率，理论上硅基1200V MOSFET 的电阻率大约为RD=390 mΩcm², 而 SiC 基1200V 的电阻率仅有RD=1.1 mΩcm²。 因此 SiC MOSFET 导通电阻可以极大减小， 特别适合高压电力电子变换器应用。 目前商业化的 SiC MOSFET 主要以1200V 为主，其最低导通电阻仅为25mΩ。 未来可以利用SiC MOSFET 实现更高耐压的MOSFET， 甚至SiC IGBT，比如10 kV SiC MOSFET 等。 

（2） 驱动 Vgs 建议开通电压不同于硅器件。SiC MOSFET 输出伏安 IV 特性曲线如图 3 所示，图（a）为SiC MOSFET 的典型输出特性曲线，图（b）为Si MOSFET 的输出特性曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22fdkNY89M02vLcgA0cPtwO5llIC0sX51iaNfOoIiaoSGLqn0tWKYKCA2w/640?wx_fmt=png&from=appmsg)

由图 3 可以看出，SiC MOSFET 跨导（transcon ductance, gm）相比于 Si MOSFET 比较小。 因此为了能得到较低导通压降，SiC MOSFET 开通驱动 Vgs 电 压建议为 18～20V 左右，Si MOSFET 开通电压一般只 需 要 10 ～15 V。 另 外 ， SiC MOSFET 本身的MOSFET 特性， 可以实现0 V 关断， 但为了 SiC MOSFET 的快速开关特性，在关断 SiC MOSFET 的 时候一般建议\-3～\-5 V 关断电压，避免关断过程由于快速开关干扰误触发 MOSFET 开通阈值 电压VTH。 典型 SiC MOSFET 驱动电路包括信号隔离、供电隔离和功率驱动等，如图 4 所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22dUlBSfGFIqHAknib7oZytNvFhNZrsv0k5zsZpdpQKibGBwibyTh2OcMHA/640?wx_fmt=png&from=appmsg)

（3）基于高耐压特性 SiC MOSFET 单位晶元比Si 基 IGBT 和 MOSFET 要小很多， 使得 SiC MOSFET寄生参数，如 Ciss、Crss、Coss 等比普通 Si 器件 要小，开关时间短，开关损耗低。 图 5 是实测额定电流 20 A 的 SiC MOSFET 与 Si IGBT、Si MOSFET 开关损耗的比较。 SiC MOSFET 开关损耗仅为 Si 器件开关损耗的 1/5，甚至小于 1/10。 随着 SiC 器件设计的快速发展，可以预见开关损耗（Eon 和 Eoff ）还能够进一步降低。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22icreH5npoe32O4851WzWIXOxbsl9OJ71k3PiaXG7z892ULWsqfHvdG0w/640?wx_fmt=png&from=appmsg)

（4） SiC MOSFET 寄生体二极管具有极小的反向恢复时间 trr 和反向恢复电荷 Qrr。 如图 6 所示为同一额定电压 900 V 的器件反向恢电荷由图可见，SiC MOSFET 寄生二极管反向电荷只有同等电压规格硅基 MOSFET 的5%。 对于硬开关桥式电路来说，这个指标非常关键，它可以减小死区时间以及体二极管的反向恢复带来的损耗，便于提高开关的工作频率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22EHCaibHkHP9jjWQTVquMoq1YUXZnyOP00Ej49f9Z0y8mPJ1EFNiaLcIw/640?wx_fmt=png&from=appmsg)

2.2 碳化硅 MOSFET 第 3 象限工作特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22DQNFKdazZrHfhwwNIwiczlu0sXib4l2O6QJRy0V0nMIohw7SX33aYzrg/640?wx_fmt=png&from=appmsg)

与 传 统 IGBT 不同，SiC MOSFET 具有双向导通特性，器件可以工作在第 1、3 象限。 图 7 是常温和高温下电流 50 A 时 SiC MOSFET 在不同驱动电压下的输出 IV 特性曲线。 当驱动电压 Vgs\=0 V 时，反向第 3 象限电流流过 MOSFET 体二极管。 当 Vgs\= 20 V 时，常温 25 °C 条件下，第 1 象限和第 3 象限 对称，MOSFET 具有双向导通特性。 当 Vgs\=20 V 时，高温 150 °C 下， 在额定电流电流 50 A 以下， 第 1象限和第 3 象限对称，MOSFET 同样具有双向导通 特性，在超过额定电流时，由于 MOSFET 沟道电阻 急剧增加，导通压降超过体二极管管压降 Vf，大部分电流在第 3 象限将不再流过 MOSFET 沟道，转而流过 MOSFET 寄生体二极管， 表现为体二极管特性。基于以上特点，SiC MOSFET 在设计逆变电路时不需要像 IGBT 一 样反并联二极管 。 利用 SiC MOSFET 的双向导通特性使得电流即可以从漏极D 流到源极 S，也可以从源极 S 流到漏极 D。

3\. SiC MOSFET 的三相双向逆变器样机研制与实验

根据 SiC MOSFET 的特点，本文试制了图 2 的20 kVA 两电平三相双向逆变器。 其直流侧电压为600～800 V，交流侧直接与380 V 电网并网。 与传统三电平方案相比， 开关频率从传统 20 kHz 左右提高到 40～60 kHz。 每个开 关器件有 2 颗 80 mΩ、1200 V SiC MOSFET 并联，电路得到极大简化，从而提高了功率密度和可靠性。

3.1 逆变器样机工作模式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22sYQrsZsgBAEEW3Q9RzQMVW02kolMO6ZGqO2jibsRnR3C10N9mUo2pPg/640?wx_fmt=png&from=appmsg)

20 kVA 基于 SiC MOSFET 的三相双向逆变式 变换器实验样机及实验平台。 可以用于储能式光伏或者电动汽车充电装置中， 直流侧可以连接任何600～800 V 的高压系统，交流侧可以与三相电网进行并网，如图 8 所示。 该三相双向逆变式变换器可以工作在直流转交流状态，也可工作在交流转直流状态， 从而根据系统能源需要实现双向能源互联。当工作在交流电转为直流电的条件下，通过控制策略可以进行高功率因数校正；当工作在直流电转为交流电的条件下，通过控制策略可以实现低总谐波失真输出。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA2295Su5XYWcUxiaqhEXibmJX2V0KnJ3xibNtBibrXTCCuDh7emnfIdIPZ1vA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22Nu480YtUoaKoLJsjAkJaQ8Zsepmyg4Aoheujia6k9UTJRC6mOicSO8jQ/640?wx_fmt=png&from=appmsg)

此三相双向逆变器单一桥臂一共有 6 种工作 模式，如图 9 和表 1 所示，其中模式 2 和模式 5 为SiC MOSFET 的体二极管工作， 由于该寄生体二极管具有较小的 Qrr 和 trr， 所以可设定较小的死区时 间，在该项目中死区时间设定为 300 ns，便于损耗的减小和频率的提升。另外，SiC MOSFET 工作在第1 和第 3 象限中，省略了传统桥式逆变电路中的反并联二极管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22OOxTmicKUT2MJKaTIFFic78G2zN8lZpAVndKnPnllIZ1uzPic0OflmQfQ/640?wx_fmt=png&from=appmsg)

3.2 逆变器样机效率测试

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22UdClaZX52zAIoBLQcwzOSTKcEggVRAIzIka6r6061Ej1DXqgKt2bPg/640?wx_fmt=png&from=appmsg)

对该 20 kVA 实验样机进行了整机效率测试，测试结果如图 10 所示，其中效率测试包含有12 W风扇和供电辅助电源的损耗。 在 600V 直流输入、60 kHz 频率时最高效率接近 99%，欧洲标准效率测试结果达到 98.4%。 与传统三电平 IGBT 方案相比（IGBT 方案典型最高效率在 98.6%），效率得到明显 提升。

3.3 逆变器实验样机温度测试和实验波形

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA229Mmc15xW6QfO0r9xQjficPBHWuSHU6ib0keicSLLUwt6gtnzaEQgLxsRg/640?wx_fmt=png&from=appmsg)

图 11 在直流 800V 电压满载逆变条件下实拍 实验样机红外线温度成像。 测试过程采用 12 W 风冷散热器，环境温度为25 °C。 由图可见，在三相双向逆变式变换器满载工作的条件下， 上下桥臂 Q1至 Q6 SiC MOSFET 的结温度均小于 60 °C； 而交流侧滤波电感 L1、L2 和 L3 的温度均小于 65 °C； 最高温度出现在交流侧共模电感下，温度大约为 84 °C。

交流侧并网后的电压、电流波形如图 12 所示。由图可见，虽然采用两电平电路，但由于提高了开关频率，电流的总谐波失真可以控制在 5%以内，满足谐波测试标准要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22V4aUZyBG1ibMY0c2iaM0w8D9DIib0DgdM4veQJ0icic2X8dQiahl9zpqW0fA/640?wx_fmt=png&from=appmsg)

图 13 是开关驱动电压 Vgs 和上下桥臂电压 Vds 在正半和负半周峰值满载800 V直流下开关频率的测试波形。 Vgs 驱动开通电压为+18 V， 关断为\-5 V。 上下桥臂死区时间为300 ns, Vds最高尖峰电压控制在1000 V 以内。另外，由图可以看到温度最高的是输出共模电感，这主要是两电平电路较高 dv/dt 产生的漏电流在共模电感上产生的损耗，是两电平逆变拓扑的缺陷，需要进一 步采取措施减小漏电流问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicgmA4FEJ4TEL9vbcfMA22Rntb5RHR1Da5sqQiaahNunMQVxFle8S2ZMpCyD0jiaDB4xVkHXOPia62g/640?wx_fmt=png&from=appmsg)

4. 结语

本文研制了一种三相双向逆变式变换器，功率开关器件全部采用碳化硅 MOSFET，它可以将功率 开关器件的开关工作频率提高到 60 kHz， 优化了 交流侧滤波电路的设计，实现了更高效率和更高功 率密度的工作。由于是两电平技术，电路设计简单、可靠， 还可以减小系统的体积和大小， 降低成本。20 kVA 双向逆变式变换器实验样机在更高开关频率下实现整机最高效率接近于 99%，器件温度控制 在合理的工作温度下， 从而提高可靠性和寿命，为 三相双向逆变器简化带来可能。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)