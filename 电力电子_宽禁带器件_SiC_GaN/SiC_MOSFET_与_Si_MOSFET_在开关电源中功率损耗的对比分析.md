# SiC MOSFET 与 Si MOSFET 在开关电源中功率损耗的对比分析


> 原文地址: [https://mp.weixin.qq.com/s/X7FoX7jP\_zQ6jBWLf4ZfUA](https://mp.weixin.qq.com/s/X7FoX7jP_zQ6jBWLf4ZfUA)

文章来源：辽宁工业大学学报(自然科学版)

作者：曹洪奎，陈之勃，孟丽囡（辽宁工业大学 电子与信息工程学院，辽宁 锦州 121001）

摘 要：碳化硅(SiC)MOSFET是一种新型高压功率开关器件，具有导通电阻低、开关速度极快的特点。本文分析了功率MOSFET在开关电源中的功率损耗，以1200V/24A的SiC MOSFET和硅(Si)MOSFET 在相同的测试条件下进行了功率损耗的对比测试。实验结果表明，在相同的驱动条件和负载条件下，SiC MOSFET的开关速度明显快于Si MOSFET，同时功率损耗明显降低，即使直接采用SiC MOSFET替代Si MOSFET也会使得开关电源的效率明显提升。

关键词：碳化硅MOSFET；功率损耗；导通电阻；开关速度

0\. 引言

目前，几乎所有的开关电源均采用硅(Si)功率半导体器件作为开关，由于Si 材料本身的一些特性，使其进一步的发展受到很大限制。为了进一步提高开关电源的效率，迫切寻求一种能够承受足够高的耐压和极快的开关速度，又具有很低的导通电压的理想功率半导体器件。由于SiC 材料的优良特性，在同等的耐压条件下，SiC MOSFET 相比于Si MOSFET 具有更高的开关速度，更小的导通电阻，更小的开关损耗和导通损耗。随着碳化硅(SiC)材料的快速发展，SiC 功率半导体器件在开关电源领域得到了广泛关注，有替代Si 半导体器件之势。

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_000_b10f55623101.jpg)

为了对比SiC MOSFET 与Si MOSFET 在开关电源中的功率损耗，分析了开关电源MOSFET 功率损耗的影响因素，包括导通损耗和开关损耗，并采用实验的方法，在相同驱动条件和负载条件下，分别测试了SiC MOSFET 和Si MOSFET 在反激式开关电源电路中的工作性能和功率损耗。

1. 开关电源的功率损耗分析

开关电源中MOSFET 的功率损耗主要是导通损耗和开关损耗。具体分析如下：

1.1 导通损耗

开关电源中MOSFET 的导通损耗PQ 的大小由MOSFET的导通电阻RQ(on)决定，导通损耗PQ的计算如公式(1)：

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_001_56da1d475a3e.png)

其中，IPrms 为流过开关管的有效值电流。在IPrms 保持不变的条件下，PQ与导通电阻RQ(on)呈正比关系。

RQ(on)的大小随MOSFET 的结温T 发生变化，具体关系为Q(on) ∞TR γ，其中_γ_为常数，Si 的_γ_值为2.42，而SiC 的γ值为1.3。在135 ℃高结温状态下，SiC MOSFET 的导通电阻也仅仅上升20%，而Si MOSFET 则上升240%。因此，SiC MOSFET器件适合工作在高温环境条件下，与 Si MOSFET器件相比，只需要较小的散热器。

1.2 开关损耗

开关损耗是由于MOSFET 存在开关时间而产生的，在MOSFET 的通、断过程中，由于有效的电压和电流同时作用于MOSFET，致使MOSFET 的开关交叠时间较长而造成损耗。开关损耗PSW的计算如公式(2)：

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_002_23e7c621df27.png)

MOSFET 的开关损耗 PSW 主要包括开通损耗PSW（on）和关断损耗PSW（off）。PSW 的大小不仅与开关管的漏\-源电压uds 和漏极电流id 有关，还与开关管的开通时间ton和关断时间toff 有关。MOSFET 栅极\-漏极之间的米勒电容(Miller Capacitance)越小，MOSFET的开关速度越快，开关损耗越小。

在相同电源母线电压US、相同输出功率条件下，反激式开关电源的开关损耗主要是关断损耗PSW（off）。由于开通过程中漏\-源电压uds 从电源母线电压US 减小到接近0 时，漏极电流id 上升缓慢，因此，相对关断损耗PSW（off），开通损耗PSW（on）很小，几乎可以忽略。

2\. SiC MOSFET 与 Si MOSFET 的开关特性对比测试

用于对比测试的反激式开关电源电路由EMC防护电路、高频变压器、功率MOSFET 开关管、PWM 驱动电路、RCD 钳位电路、反馈电路和输出整流滤波电路组成。电源输入端输入电压为交流380 V，MOSFET 开关管的开关频率设为50 kHz。

测试中选用的SiC MOSFET 和Si MOSFET均为1200V/24 A 器件，其主要参数如表1。

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_003_f8f786fe6358.png)

测试设备：TPS2024隔离通道示波器，×50 电压探头，TCP305A 电流探头。

2.1 SiC MOSFET 和 Si MOSFET 的开关速度对比测试

首先通过分别测试SiC MOSFET 和SiC MOSFET 在开通过程中的栅\-源电压变化来对比SiC MOSFET和Si MOSFET 的开关速度，SiC MOSFET 和Si MOSFET 开通过程的栅\-源电压的波形如图1 所示，图1(a)为SiC MOSFET 的栅\-源电压波形，图1(b)为Si MOSFET 的栅\-源电压波形。

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_004_bdcc2667ffc2.png)

图1中，SiC MOSFET的上升时间为340 ns，而Si MOFET 的上升时间为3880 ns，很显然SiC MOSFET 比Si MOSFET 快一个数量级。

同时可以看出，由于米勒电荷的作用造成的栅-源电压的平台时间也不相同，SiC MOSFET 的平台时间不到100 ns，而Si MOSFET 的平台时间至少要1μs。

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_005_f065e3267fb4.png)

如果仅仅靠栅\-源电压波形还不足以说明问题，还可以通过两种器件在关断过程中漏\-源电压波形的对比说明。在关断过程中，SiC MOSFET 和Si MOSFET 的漏\-源电压上升波形如图2 所示。图2(a)为SiC MOSFET 漏极\-源极电压uds 波形，图2(b)为Si MOSFET 漏极-源极电压uds 波形。

从图2 中可以看出，SiC MOSFET 的上升时间为92 ns，而Si MOFET 的上升时间为500 ns，SiCMOSFET 的关断速度明显快于Si MOSFET，因此，SiC MOSFET的关断损耗PSW（off）会明显小于Si MOSFET 的关断损耗。

2.2 MOSFET 功率损耗的对比测试

利用TPS2024 隔离通道示波器自带的测试计算软件分别计算出SiC MOSFET 和Si MOSFET 在1个开关周期内的开通损耗、关断损耗、导通损耗和总损耗，具体结果如图3 所示。图3(a)为SiC MOSFET 的器件损耗测试结果，图3(b)为Si MOSFET 的器件损耗测试结果。图3 中通道1 均为MOSFET的漏\-源电压uds 的波形，通道2 为漏极电流id 的波形。

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_006_9d36983ccff3.png)

由图3 可以看到，由于SiC MOFET 的开关速度明显快于Si MOSFET，因此在关断(关闭)损耗方面有明显的差别。SiC MOSFET 的关断损耗为6.26W，而Si MOSFET 的关断损耗则为61.0 W。由于测试中受PWM 芯片驱动电压的限制，MOSFET 的栅极驱动电压为12 V，SiC MOSFET 的导通电阻约为20 V 栅极电压下的3 倍以上，因此SiC MOSFET在导通(传导)损耗上并没有显现优势，均为 2.59W。由于反激式开关电源的开关损耗主要是关断损耗PSW（off），开通损耗PSW（on）很小，在测试中，两种器件的开通(开启)损耗均为0。

如果SiC MOSFET 的栅极驱动电压达到20 V，导通电阻会降低到12 V 栅极电压状态下的1/4，则结温在室温状态下的导通损耗会降低到图3 中数值的1/4。

3. 开关电源效率的对比测试

相对于Si MOSFET，SiC MOSFET 的高开关速度，在本测试的反激式开关电源中明显地降低了功率损耗，为了进一步验证SiC MOSFET 在开关电源中对功率损耗的影响，分别对采用SiC MOSFET和Si MOSFET的开关电源输入功率进行测试，结果如图4 所示。图4(a)为采用SiC MOSFET 时开关电源的输入功率，图4(b)为采用Si MOSFET 时开关电源的输入功率。

![](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_007_4a2afeae1cff.png)

从图4 可以看出，采用SiC MOSFET 的开关电源输入(有效)功率为1.28 kW，采用Si MOSFET 的开关电源输入(有效)功率为1.33 kW，两者相差0.05kW，为Si MOSFET 的损耗高于SiC MOSFET 的部分，占总输入功率3.8%，表明即使直接用SiC MOSFET 替代Si MOSFET 也会提高近4%的效率，如果将栅极驱动电压提升至20 V，则效率的提高会更明显。

4. 结 论

测试结果表明，栅极驱动电压为12 V 条件下，采用SiC MOSFET 替代Si MOSFET 会明显降低开关电源的损耗，提高开关电源近4%的效率，如果将栅极驱动电压提升至20 V，则效率的提高会更明显。SiC MOSFET是一个性能优异的高压开关器件，不仅具有良好的阻断能力、低导通电压，同时具备了极快的开关速度，是众多的高压可关断型电力半导体器件中的佼佼者。其极快的开关速度可以用于高压、高频的开关功率变换领域。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_008_24def2a8f5ae.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_009_a7ecee98ead9.png)![图片](SiC_MOSFET_与_Si_MOSFET_在开关电源中功率损耗的对比分析_images/img_010_9bbc7b9b15a2.png)