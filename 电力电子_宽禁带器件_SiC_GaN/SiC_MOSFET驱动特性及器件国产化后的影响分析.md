# SiC MOSFET驱动特性及器件国产化后的影响分析


> 原文地址: [https://mp.weixin.qq.com/s/jOQXBH\_RP7Llp0uYGrC\_Ng](https://mp.weixin.qq.com/s/jOQXBH_RP7Llp0uYGrC_Ng)

**文章来源：**电源学报

**作者：**姚常智（中国电源学会学生会员），张昊东，申宏伟，王建军（北京航天发射技术研究所）

**摘要：**碳化硅金属氧化物半导体场效应晶体管 SiC MOSFET作为一种新型，广泛应用的开关器件，在实际应用中具有更快的开关速度和更低的器件损耗，可以提高变换器的效率，体现更好的性能。 针对 SiC MOSFET 驱动特性，分析寄生参数对其的影响：搭建双脉冲实验平台，分析栅源电压与 SiC MOSFET 导通时间的关系;针对现有国产 SiC MOSFET 存在的不足之处,基于搭建的实验平台及其他电源产品,对 SiC MOSFET 进行国产化器件替代后导通时间,驱动损耗及负压幅值变化的相关分析。

**关键词**：碳化硅金属氧化物半导体场效应晶体管；寄生参数；栅源电压；国产化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5JdSly0caTjiayVtVpqun6JWDt5116MeUkIStprAwRn9escoRsnt8cRw/640?wx_fmt=png&from=appmsg)

随着人们对变换器效率.功率密度.禁带宽度和开关频率等方面的要求越来越高， 传统硅基材料功率器件的电力电子变换器可能无法满足这些要求\[1-2\]。 基于宽禁带材料的新型电力电子器件的出现，为变换器提供了在高压.高温.高频环境下工作的条件。 SiC MOSFET 的开关频率可以达到100 kHz\[3-4\]。 采用软开关技术，SiC MOSFET 的开关损耗更小，开关频率更高\[3\]。 SiC MOSFET 在合理的材料厚度和导通状态电阻下， 额定电压可以达到10 kV 以上\[5\]。SiC MOSFET 还可以在300 度结温条件下工作\[6-7\]。业界对于SiC MOSFET驱动特性的研究主要集中于对驱动电路的设计，而本文将从器件角度讨论SiC MOSFET的驱动特性。

在 SiC MOSFET 器件国产化方面， 目前国内半导体产业对比国际先进水平存在客观差距\[8-9\]，缺少应用验证，在国产器件替代过程中面临着伪.空.包的难题，因此本文通过总结国产化器件替代过程中出现的性能差异问题，并对其影响及补偿措施进行分析，旨在为电源厂家进行国产化器件替代提供依据。

针对 SiC MOSFET 驱动电压特性，本文首先建立 SiC MOSFET 双脉冲驱动仿真模型，从开关管的寄生参数角度对驱动特性和驱动回路中驱动电压出现振荡的现象进行分析；再搭建双脉冲测试平台， 从 SiC MOSFET 栅源电压取值角度对 SiC MOSFET 驱动电压特性进行分析。 为比较国产器件和进口器件在驱动特性方面的性能差距，选取 4 种具有代表性的国产器件与进口器件进行对比实验：首先，从栅源电压取值角度对比分析 2 种器件在导通时间方面的差异；然后，从 2 种器件对驱动电路的负压变化角度进行对比实验；最后，从 2 种器件在驱动电路中导致驱动芯片的温升对器件寿命和可靠性的影响进行分析。

**1 SiC MOSFET 驱动回路特性仿真****分析**

在高速开关电路中，振铃现象是导致设备运行压力增加及电磁干扰 EMI恶化的一个重要因素，而寄生电感的存在往往会加深振铃现象\[10-13\]。 Lgs.Lds.Lss 分别为栅极.漏极.源极的寄生电感。 本文从 SiC MOSFET 驱动回路的寄生电感角度出发，着重分析栅极和漏极的寄生电感对栅源电压振荡的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5DTSezn83w7UJqQ4ZwefTicT25YTtzQZEwIbU575rA9NzZRET4PZKA0Q/640?wx_fmt=png&from=appmsg)

图 1 为栅极和源极的寄生电感变化时 SiCMOSFET 开通过程的仿真波形。根据仿真结果分析可得：Lgs 对栅源电压的影响较大，当栅极寄生电感增大时， 栅源电压的振荡幅度也会相应的增大；而对于源极寄生电感 Lss，随着取值的增大，Vgs 在开通过程中会出现一定的电压幅值跌落，但是从漏源电压 Vds 及漏源电流 Ids 的角度看，Lss 的增大并未使其波形出现恶化。 反而在一定程度上抑制了 Ids 波形的幅值振荡，但 Lss 也不能过大，过大的 Lss 会使 SiC MOSFET 的开关导通时间增加， 从而增加 SiC MOSFET 的开通损耗。 导致栅源电压出现过电压及振荡是由于驱动回路中栅极寄生电感 Lgs 和源极寄生电感 Lss 与驱动回路中栅极电阻 RG.栅源极结电容 Cgs 形成了 LCR 谐振电路。 栅源极电压可根据驱动回路方程求得，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5tmMj7kFgAllo9iawxwxFdibMiceBFjcaygnKCI4qbqdfJuJNg8rmjjqVg/640?wx_fmt=png&from=appmsg)

而一般情况下， 源极寄生电感 Lss 则由被测功率器件的封装引脚决定，其大小近似 1 个固定值。

开通电流变化率可根据双脉冲测试电路中功率器件漏极电流上升阶段的等效电路进行简化求解。 开通过程中，在栅源电压 V GS 达到导通阈值电压 Vth 时，其沟道打开，漏极电流 iD 上升。忽略栅漏极结电容 Cgd 和漏源极结电容Cds通过沟道释放电流，可近似地认为漏极电流iD等于沟道电流，器件的跨导特性满足。列写该阶段的数学方程分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5Sicvs8N3uxbs1NjW3ffuFlet5Zkqmu3KCUzHK0xIFQOUbbOFz0uhJAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5YIuubAXTHOVXlNj0kwoCIAwF4yu3KOHcgRfeDxJKQGhE8RXIjux5Ww/640?wx_fmt=png&from=appmsg)

综上所述， 在 SiC MOSFET 的寄生电感中，Lgs对主开关回路的影响有限，通过合理的设计可以减小Lgs对栅源电压Vgs 的影响，通过 Lss 可以在一定程度上抑制由Lds导致的振铃现象，其值的增加虽然可以使抑制效果更加显著，但会导致功率管开关损耗增加；对于漏极寄生电感 Lds，其与 SiC MOSFET的输出电容 Coss.二极管结电容等谐振会引起漏源电流 Ids 及漏源电压 Vds 的波动，而且功率回路振荡也可以通过 SiC MOSFET 的米勒电容耦合到栅极中，从而引起栅极电压 Vgs 的波动。

**2 驱动电压对驱动特性的影响**

在 SiC 电源系统中， 栅源电压是 SiC MOSFET驱动的关键。为了确保 SiC MOSFET 和高速栅极驱动器之间的高兼容性，系统设计人员必须对栅源电压进行合理设计。 本文选用 CREE 公司的 C2M0080120D 型号 SiC MOSFET 对其在不同驱动电压条件下的导通特性进行对比分析。SiC MOSFET 栅极电压的推荐范围为\-5~22 V。 SiC MOSFET 具有驱动电压越高.导通电阻越低的特性，因此在一定范围内增大栅极采用的驱动电压有助于减小开关损耗和导通损耗。 但另一方面，增大栅极驱动电压会加重栅氧化层的压力，不利于栅极的稳定性。因此， 对于 SiC MOSFET 器件，栅极正压的取值范围一般为 18~20 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5u78ErxDHyzbKdEkgRFtIU57Ob1hTsQMpTng5hYwseR2QhvEDe6Blxg/640?wx_fmt=png&from=appmsg)

本文搭建了如图 2 所示的双脉冲测试平台，以验证驱动电压对驱动特性的影响。 实验中， 采用STM32 f105RC 芯 片 对 测 试 电 路 进 行 控 制，SiC MOSFET 的驱动芯片为 UCC27624， 供电电压为600 V，续流电感为 120 uH,储能电容为 2.47 uF,驱动电阻取值为 10 欧，驱动电压范围为 16~22 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV57m70SMtHgVup1TeayYr0jOLLbv8RlA1OFbMb1OTZtwESe8bxibKgLaQ/640?wx_fmt=png&from=appmsg)

实验得到的双脉冲波形如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5JtoCRcN74KxOfpZaezUuicFibia9ejoGibY3462BF8dRZJ8vKgtQs8VmGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV52iaMeN2RmwN0OiazEU3QsydHcsY58qmX0AYR6CMwDcGVib01u1dCmdenQ/640?wx_fmt=png&from=appmsg)

图 4 和图 5 分别为驱动电压对 C2M0080120D型号 SiC MOSFET 驱动性能影响的波形及 C2M0080120D 型号 SiC MOSFET 导通时间随栅源电压变化的曲线。 由图 4 和图 5 可见：随着栅源电压取值的增大，SiC MOSFET 开通所用时间逐渐减少；当栅源电压超过 20 V 时，SiC MOSFET 开通所用时间减少的幅度逐渐变小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5gczSX5dqF3iaDibBodiczRk7dHT7U9mhzrGlBKuicWibRerNoeRGMe6rwrA/640?wx_fmt=png&from=appmsg)

因此可以得出结论， 当栅极正压取值范围为18~20 V 时，C2M0080120D 型号 SiC MOSFET 的驱动特性较好。 由图 4 和图 5 还可见，栅源电压仍出现了部分振荡现象，这是由功率回路及驱动回路的寄生电感等杂散参数引起的。

**3 器件****国产化后的驱动电压特性影响分析**

目前， 我国功率半导体产业仍处于起步阶段，总体呈现产业链完整.厂家多.发展迅速等特点。国产功率半导体已应用于诸多领域，但主要为低端产品，而在中.高端领域，如超结 MOSFET.IGBT 和碳化硅器件等，特别是车规级器件，由于起步晚，工艺复杂及缺乏应用验证机会等，国产厂家的相关产品仍处于追赶阶段，客观上存在明显的发展差距。 目前，国产功率器件和国外的功率器件相比，其主要差距分别体现在设计.工艺.设备.可靠性及设计支持等方面。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5cIf0e0hYp2qJMjcpTuU7FbBZexh7Z4gj1TWgb9MS7ic5ydzCEBwAMUA/640?wx_fmt=png&from=appmsg)

本文选用 4 种具有代表性的相同电压.电流等级的国产 SiC MOSFET 器件进行对比，比较进口器件和国产器件在驱动特性方面的差异。在进行对照实验时，除替代器件外，其他器件均保持一致，即采用国产 SiC MOSFET 器件代替进口器件进行实验，同样选取驱动电压范围为 16~22 V。 在驱动电压为18 V 时，4 种国产 SiC MOSFET 器件的驱动特性变化曲线如图 6 所示，4 种国产 SiC MOSFET 器件的导通时间与驱动电压的关系曲线如图 7 所示。 可知， 在相同驱动电压情况下，4 种国产 SiC MOSFET器件导通所需时间均比进口 SiC MOSFET 所需时间略长。 例如，在 V GS=18 V 时，进口 SiC MOSFET 的导通时间为 44 ns， 而4 种国产 SiC MOSFET 的导通时间均大于 44 ns。 此外，开关管的导通时间与其输入电容 Ciss 有关，Ciss 越大，导通所需时间往往越长\[14\]。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5rXl66sFsicqyvsZEcfDRTUicTuNFSv4Pib9FCiczlfkvS5uHQNQeJh6P3g/640?wx_fmt=png&from=appmsg)

由表 1 进口功率管和 4 种典型国产功率管的输入电容参数对比可以看出，4 种典型国产 SiC MOSFET 器件的输入电容 Ciss 均大于进口 SiC MOSFET 器件，由此可见国产 SiC MOSFET 器件导通所需时间较长。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5gPFBdzNGXtHuE3Wy3WricvCCmc1LtjeOCwict3LpO1KWaPtqtNBDIgzw/640?wx_fmt=png&from=appmsg)

此外，输入电容 Ciss 的增大还会导致开关管的负压降低。 图 8 为驱动电路的负压原理，可见负压降低来源可分为 2 个阶段。

阶段 1：根据驱动电路设计方案，驱动芯片的负压来源于串接在驱动回路中储能电容 C1 上的储能，以及与之并联的稳压管 VZ1 的钳位作用。如图8（a）所示，当主功率管 VM2 开始驱动后，储能电容 C1 上的电压逐步抬高， 并被 VZ1 钳位限幅为U1，达到周期稳定状态。

阶段 2：如图 8（b）所示，当主功率管驱动脉冲的下降沿到来，即开关管从开通向关断切换的暂态过程中，VM1 被驱动导通，主功率管 VM2 的 Cgs（约等于Ciss）上储存的电荷通过 VM1 放电，放电电流流经储能电容 C1，使主功率管 VM2 电压下跌，由于 Ciss 显著增大，负压储能电容在此阶段的放电也会显著增大，使得储能电容 C1 上的电压 U1 下降，从而导致随后 VM2 上负压不足。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5CaLsXQosHVGgcN7zW9t3MDcUYfPj1IyWhuvhxZ763jqZCc8GCcNicpQ/640?wx_fmt=png&from=appmsg)

由表 1 还可以看出，4 种典型国产 SiC MOSFET器件的输入电容均大于进口 SiC MOSFET 器件。为验证表 1 这个结论，在相同条件下对 C2M0080120D 型进口器件和 4 款国产器件进行负压测试， 得到的替代前.后驱动电压波形对比如图 9 所示。 可见，在将进口器件 C2M0080120D 替换为国产器件后，开关管的负压均在减小。 为避免出现开关管负压下降情况，可采用增大负压电容 C1 容值的方法， 如图 10 中将负压电容容值从 47 nF 增大至 100 nF 后，国产器件开关管负压值均得到了提升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5VYA0MQrqib5sZ7LAFwU6j5ibdNF7EVfAM94Ep6y6OiadzHXHKC5q8oXMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5lqiaYICAAfPibluuBe2XZrkYibibyyRru7BhCVl3hRaBgKFN7Ib6KdykMg/640?wx_fmt=png&from=appmsg)

除此之外，在相同耐压等级.电流等级.近似导通电阻的条件下，国产器件与进口器件相比仍存在由其他参数引起的差异， 如国产器件的栅极电荷Qg 往往比进口器件要大。

栅极电荷的增大会导致驱动损耗的增大，驱动损耗的设计需考虑开关频率 fsmax 和驱动电压（取电压上限值）。查询数据手册中栅极电荷，计算最大驱动功率，可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5ibkx1hBYQnREjEEFT3yScdviaaLEcSa4o9qlx5EKZLvTUOCR7mAArfYA/640?wx_fmt=png&from=appmsg)

由式（11）可知，当 Qg 增大后，在相同驱动电压Vdri 和开关频率 fsmax 下，驱动损耗增大 1 倍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5HQMhqQqoA55Yz8TxWVfGfWu0x2OZxgribPQZGVBAfQ8LNicrNctl3jCw/640?wx_fmt=png&from=appmsg)

表 2 为进口功率管和 4 种典型国产功率管栅极总电荷参数的对比。 可以看出，国产功率管替代后栅极总电荷 Qg 增大，相应的驱动损耗会增大，从而使得驱动芯片的温度升高。为验证驱动芯片的温度变化，对相同工况下对应驱动芯片中的器件温升情况进行对比测试，结果如图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskqO4YrDtedyfvtgDk7NBV5XQOsibyjJmpEicQd6WJEkOsXcp2NNWBfFrKblSPGw6sFXib3kJeFspWjg/640?wx_fmt=png&from=appmsg)

高温会对元器件的可靠性产生影响，温度的升高不仅可以使器件的电参数发生漂移变化，如双极性器件的反向漏电流和电流增益上升.MOS 器件的跨导下降等，甚至可以使器件内部的物理化学变化加速，缩短元器件寿命或者使器件烧毁，如加速铝的电迁移.引起开路或短路失效等。由图 11 的温升测试对比能够看到，在将进口器件替换国产器件后，驱动芯片的温升均在增大。 对于存在高温工况的产品，驱动芯片对内部器件的温升要求也变得苛刻，即当在高温环境下工作时，这可能会影响到器件的可靠性和工作寿命。

**4 结论**

为研究 SiC MOSFET 的驱动特性，本文首先设计了双脉冲测试仿真电路并做了相关的仿真分析，结果表明， 对于驱动电路中开关管的寄生电感参数，可通过合理的设计来抑制振铃现象。其次，搭建了双脉冲测试平台并开展了相关实验，验证了在一定范围内增大驱动电压取值可以缩短开关管的开通时间。最后，通过进口器件和国产器件替换的对比实验发现，在相同实验条件下，国产器件的导通时间比进口器件略长， 其原因可能是由输入电容Ciss 过大导致的；在相同驱动电路下，国产器件存在因输入电容 Ciss 过大导致负压偏低，从而出现抗干扰能力差的问题；同时，国产器件的栅极电荷 Qg 普遍比进口器件大，这会导致驱动电路的驱动功率变大及部分器件温升增大，从而影响器件在高温工况下的可靠性和工作寿命，因此在进行国产化器件替换时不能简单地原位替换，需同步更改驱动电路参数，同时整机的效率会略有下降。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)