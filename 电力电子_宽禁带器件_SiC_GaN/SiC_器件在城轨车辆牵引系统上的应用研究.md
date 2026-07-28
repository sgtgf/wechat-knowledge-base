# SiC 器件在城轨车辆牵引系统上的应用研究


> 原文地址: [https://mp.weixin.qq.com/s/W0IkNzPtifp\_ljl6ri2NEA](https://mp.weixin.qq.com/s/W0IkNzPtifp_ljl6ri2NEA)

**文章来源：**机车电传动

**作者：**李华，万伟伟，唐雄辉，刘永江，林珍君（株洲中车时代电气股份有限公司）

**摘要 ：**SiC器件的高频、高温和高压特性为城轨车辆牵引系统的设计带来了系统应用优势，同时，也带来了一些应用挑战。文章根据SiC器件的特点，分析了城轨车辆牵引系统应用SiC器件后对牵引变流器、牵引电机及控制方式的影响，阐述了对SiC牵引变流器的设计和试验情况。地面试验结果表明，该城轨车辆SiC牵引系统的设计是合理的，能够满足实际应用需求。**关键词：**SiC；城市轨道车辆；牵引系统；变流器；仿真

**0 引言**

以IGBT器件为典型代表的硅基功率器件，经过30余年的发展，性能已接近理论极限\[1-2\]，而以SiC器件为代表的宽禁带器件，得益于宽禁带材料的优异性能，即更宽的禁带宽度、更高的击穿电场、更高的热导率、更高的电子饱和速率及更高的抗辐射能力，具有高耐压、高频、耐高温等特性，被视为下一代的“理想器件”\[1-2\]。在一些领域（如新能源汽车、光伏逆变器、白色家电等），SiC开始逐步取代硅基电力电子器件，并初步展现出其巨大的潜力\[3-4\]。

在轨道交通领域，以三菱、日立、阿尔斯通等为代表，在牵引变流器和辅助变流器上已小批量应用SiC器件并取得了良好的应用效果\[5-6\]。对于轨道车辆用牵引和辅助变流器来说，高效率、高功率密度及轻量化是其永恒的追求，而SiC器件的优良特性可帮助实现上述目标。

本文将重点介绍3 300 V/750 A全SiC器件在城市轨道车辆（简称城轨车辆）牵引系统上的应用研究及相关设计开发工作，着重分析应用SiC器件后，给牵引系统带来的应用优势、应用挑战和实际应用效果及结论等。

**1 SiC 器件应用优势**

分析相比硅基IGBT器件牵引系统，城轨车辆牵引系统在采用全SiC器件后，可根据SiC器件的特性优势进行有针对性的优化设计，从而取得SiC牵引系统在部件级和系统级的优势。

**1.1 对牵引变流器的影响分析**

应用全SiC器件后，变流器功率模块的集成度可得到大幅度的提升。图1为3 300 V/750 A全SiC器件，内部电路形式为双开关管半桥电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxAT0YtlVQVuRs0LmKqJicWZcI2zA7ks5LUORT29UkgO386ee96T6aK7w/640?wx_fmt=png&from=appmsg)

图2为城轨车辆SiC器件变流器功率模块的基本方案，采用6只3 300 V/750 A全SiC器件实现6相桥的功率组件设计，可兼顾考虑变流器的架控模式输出和车控模式输出，其外形尺寸为620 mm×300 mm×205 mm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxib2iaBrfpBM3Q72vGFL9tKGhHeibGqIt2k1iaG6hDQN8tRiaukUd3JjLe9w/640?wx_fmt=png&from=appmsg)

3300 V/1500 A 硅IGBT器件的外形尺寸为140 mm×190 mm×48 mm，内部电路形式为单开关管电路。图3为IGBT器件城轨变流器功率模块的基本方案，采用6只3 300 V/1 500 A的IGBT器件可实现3相桥的功率组件设计，但只能实现牵引变流器的车控模式输出，其外形尺寸为620 mm×340 mm×260 mm。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxYuSib7ibBhhSmia6cjQPI9IqIMD3PZZyxddXXmOapgQ3LcG8fSHaCxE9w/640?wx_fmt=png&from=appmsg)

表1为SiC变流器模块和硅基IGBT变流器模块的主要参数。从表1可知，SiC变流器模块与硅基IGBT变流器模块相比，集成度得到了大幅的提升，体积可减小30%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxE4EFV2c2Opy8Lq9AxgOLEw9ZBy47a53jvZBoLQrZfnERp17bOSnoYg/640?wx_fmt=png&from=appmsg)

应用全SiC器件后，在同等电流输出能力的前提下，SiC变流器功率模块的开关频率可得到大幅度的提升。表2为SiC变流器模块和硅基IGBT变流器模块的损耗对比。以某线路190 kW电机车控平台额定电流工况和最大电流工况为例进行对比研究表明，在变流器模块总体损耗基本相当的前提下，SiC变流器模块的开关频率可提升至2 kHz，而IGBT变流器模块的开关频率为500 Hz。同样，也可采用适当增加开关频率并提高变流器模块输出电流的策略，或者适当增加开关频率并简化散热设计，冷却方式由强迫风冷简化为自然冷却的策略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxuz2yEybcgvxEz4RHoaOzPxEYnY3sUDAltx4RX1sL7pjwLj84e3UZZw/640?wx_fmt=png&from=appmsg)

另外，针对SiC器件的高频应用，变流器的直流环节滤波电容也可进行有针对性的优化设计，重点降低电容的等效串联电感(ESL)和高频段等效串联电阻(ESR)，扩展电容工作频率带宽和允许温升，散热方式由油式变更为干式无壳，电容的重量也可得到较大幅度的降低。

**1.2 对牵引电机的影响**

分析随着开关频率提高，逆变器输出电压波形可实现接近正弦输出，使电机的谐波损耗有较大幅度的降低，也同步优化了电机的温升和噪声指标。

同时，开关频率的提高，变流器的输出频率也可适当提高，牵引电机的极数可由4极变更为6极，可通过减少定子线圈匝数及优化布局，并充分利用SiC模块的电流输出能力，适当降低牵引电机的气隙磁场强度以达到减薄电机定子铁心、减小电机的径向尺寸、减小电机的体积及重量的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx9QibuibgkmO6m9ibTFdiahqpZdtrFPFhVATojKQo0xEoYXb8aTMB2S4ibUw/640?wx_fmt=png&from=appmsg)

表3为某线路B型车190 kW电机应用SiC变流器后的参数对比（牵引电机由4极变更为6极）。对比结果表明，牵引电机的质量可减小85 kg，体积也得到了较大幅度的降低。

**1.3 控制优化**

因SiC器件的高频工作特性，逆变器的控制也可根据该特性进行优化设计，主要是优化逆变脉冲的调制方法，减少全速度范围内的切换，以达到牵引电机在全速度范围内工作更平稳、噪声指标也更优的目的。

对于传统的城轨车辆牵引逆变器来说，一般采用低速度段异步调制，中速度段分段同步调制，高速度段单脉冲或者三分频的调制方式，而对于SiC牵引变流器，鉴于SiC器件的高频特性，可采用全速度范围内异步调制或者多模式PWM调制控制算法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxa18QfFqEpoCNYofgibpPbTBQc4gzpTKUqoM6hDpMjfRW0khGZjobbQA/640?wx_fmt=png&from=appmsg)

图4为SiC器件工作在2 kHz开关频率时进行全速度范围扫描的仿真波形，从波形可看出，控制系统工作稳定可靠，验证了相关调制算法的可行性。

**2 SiC 器件的应用**

挑战为了充分发挥SiC器件的性能，同时保证其应用可靠性，对牵引系统的设计也带来了不少的挑战。

**2.1 门极驱动器设计**

与硅基IGBT器件相比，全SiC器件的主开关为MOSFET，其导通门槛电压一般为3~4 V，而IGBT的导通门槛电压通常在6~8 V，全SiC器件更容易被误导通；同时，因SiC器件的高频开关特性，其桥臂结构对回路寄生参数的影响更加敏感，也更易因串扰而引起误导通；另外，SiC器件的短路耐受能力大大降低，为了防止SiC器件在运用过程中发生短路失效，需要驱动电路具备更快的响应速度及更短的保护延时时间，SiC器件的驱动电路一般应保证在3 μs以内完成短路保护动作，而对于硅基IGBT器件来说，通常情况下保证在10 μs以内完成短路保护动作即可。

**2.2 电磁兼容性（EMC）**

设计SiC器件的高开关速度使得开关过程中的di/dt和dv/dt均大幅提高，在不增加dv/dt输出滤波器的情况下，3 300 V全SiC变流器模块逆变器侧的输出dv/dt在10 kV/μs以上\[7\]，如果不加以控制，会产生严重的电磁干扰（EMI）问题。以高频共模电流对牵引系统的影响为例，图5给出了SiC牵引系统对EMI影响的对比仿真。结果表明，SiC牵引系统与IGBT牵引系统相比，因高dv/dt的影响导致的共模电压和干扰电流显著增大，牵引电机的轴承电压和轴承电流明显增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx3rT63DQzx5icZoy9TFTRWaJg7w1jRwmTPs8ibAgbNr9aI3Jq3qbiaqicVg/640?wx_fmt=png&from=appmsg)

**2.3 高dv/dt应对**

高dv/dt对牵引电机绕组的绝缘带来了严重的不利影响，可能会加速漆包线、绝缘环等绝缘件的老化，因此对电机的绝缘设计带来了新的挑战。对dv/dt的控制除了适当增加SiC器件门极驱动电阻外，通常采用在逆变器的输出端增加L-C-R滤波器的方法，仿真表明，采用增加L-C-R滤波器可明显抑制电机侧的过电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxyyYHZ8aSEPCgibRhrFCINTAKqLP126OXq3zpWPWOB1fAwmL12g7ZUGQ/640?wx_fmt=png&from=appmsg)

**2.4 高温应用**

随着封装技术的发展，现在的SiC器件结温通常可工作在175 °C，通过特殊的封装设计，SiC器件结温可工作在200 °C以上\[8\]，但是对于SiC牵引变流器来说，和SiC器件配套使用的大部分部件其温度耐受相对SiC器件还有很大的差距。在通常情况下，和SiC器件配套使用的低感母排、门极驱动器、电容器等的工作温度通常在85 °C以下，这成为了温度兼容设计上的短板，且其工作结温难以提高，除非在现有的工艺或者技术上获得大的突破。

**3 城轨车辆 SiC 变流器的设计**

为兼容120 km/h A型车的应用需求，特设计了可满足4台230 kW牵引电机供电需求的SiC牵引变流器，下面重点阐述其主电路原理及主要技术参数。

**3.1 主电路设计**

城轨车辆SiC牵引变流器的主电路如图7所示，P端和N端为DC 1500 V电源输入端口，KM1，KM2和R1组成充电短接单元，L1为直流滤波电抗器，C为直流滤波电容，Rch为过压斩波电阻，BC1和BC2为电流传感器，BV1和BV2为电压传感器，INV为含过压斩波功能的SiC变流器模块。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxR3AFYscOOm7Uc8dDpFicJgMIFAj8ick5zmlst28IOGmtW3StYzkAdcQw/640?wx_fmt=png&from=appmsg)

在牵引工况时，DC 1 500 V直流电经充电短接单元和LC滤波回路给SiC变流器模块INV供电，经过DC/AC逆变 ，输出2路VVVF三相交流电，每路可驱动2台并联的230 kW牵引电机实现架控模式，同时SiC变流器模块也可根据需要将2路输出并联后，驱动4台并联的牵引电机并实现车控模式。在制动工况时，牵引电机制动产生的电能经SiC变流器模块整流后反馈回直流电网，直流电网不能充分吸收时，则通过制动斩波电阻Rch消耗多余的能量。控制单元通过检测BV1和BV2的电压实现系统的过欠压保护，同时通过检测BC1和BC2的电流实现系统的过流保护和接地保护。

**3.2 主要技术**

参数牵引系统主要技术参数如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxCVRD8qeYPSVc09HsBibPkxaeET2hB0XfntyHeicobFblM9ZXnash9aaA/640?wx_fmt=png&from=appmsg)

           ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxAegIxp5t64cLCJRX4PqQDrhH5dxdPCMsViaCkXk7Z207mMWESQl0y9Q/640?wx_fmt=png&from=appmsg)

**4 试验验证**

为验证变流器设计的合理性，对城轨车辆SiC牵引变流器进行了出厂试验、型式试验和研究性试验。

在额定工况下进行了温升试验，城轨车辆SiC变流器输出额定电流为632 A，在变流器模块散热台面上布置12个温度探头，变流器持续工作至温升稳定后，测得变流器散热器台面温升均在25 K以内，各个探头之间的均温性在5 K以内。

图8为城轨车辆SiC变流器温升测试示意图，图9为城轨车辆SiC变流器温升测试结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx0G7aObvhPph5pZRqoqKtD6SHSiahK62ftW1ar8UbQHdd9JGx7GQxVPg/640?wx_fmt=png&from=appmsg)

在换流工况下进行换流试验，城轨车辆SiC变流器在最大输出电流为840 A，变流器持续工作20 s，未发生故障保护及器件损坏。图10为城轨车辆SiC牵引变流器换流试验结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxDoRvVlmWhHsGfrVl1zBQRQ6CqGkoIdvVibLjQtSSjgdzjia2HJu8dQHQ/640?wx_fmt=png&from=appmsg)

在变流器带载输出的情况下，对城轨车辆SiC变流器进行负载短路试验，使用接触器进行负载短接。试验结果表明，变流器在短路工况下能够正常保护，未发生其他系统异常和器件损坏故障。图11为城轨车辆SiC牵引变流器短路试验的试验结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx1GnZKqk4FAqZk6EzjJeofM3mmXAWUXQTiaiciaDRywB0VAxibiaYib2NVYQQ/640?wx_fmt=png&from=appmsg)

**5 结语**

SiC器件的优良特性为城轨车辆牵引系统的设计带来了诸多好处，可显著提高牵引系统的效率，并大幅减小牵引变流器和牵引电机的体积和重量。当前，满足120 km/h A型车牵引系统要求的SiC牵引变流器已完成了地面试验，试验结果表明，该牵引变流器完全能够满足实际应用需求，并且在温升方面留有足够裕量，后续还将进行进一步的装车试验和现场运用考核试验。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)