# 基于 SiC MOSFET 的固态断路器栅极失效及老化特性研究

原创 桂 雷，庞士宝 SiC碳化硅MOS管及功率模块的应用 2026-02-04 12:12 广东

> 原文地址: [https://mp.weixin.qq.com/s/huoHmtNiyg4y5VcCb224yg](https://mp.weixin.qq.com/s/huoHmtNiyg4y5VcCb224yg)

文章来源：电源学报

作者：桂雷，庞士宝，王勇( 淮南矿业( 集团 )有限责任公司顾桥煤矿，淮南 232000 )    

摘要：基于SiC MOSFET 的直流固态断路器SSCBs(solid-state circuit breakers)因其具有快速分断故障电流的能力而广受瞩目，然而 SiC MOSFET 的失效机理较为复杂，有别于传统功率半导体器件的热失效模式，SiC  MOSFET具有特殊的栅极失效及老化特征，但是相关特性及机理尚不明确，为固态断路器的失效及老化判别带来了较大困难。针对上述问题，以基于SiC MOSFET的400 V 直流固态断路器为研究对象，探究器件在断路器这一特殊工况下的单次及多次硬开关特性，验证了 SiC MOSFET 在单次或多次动作过程中均有可能发生栅极失 效，且出现了栅极电压降低这一新的老化特性。采用有限元仿真进行器件级分析，得到其内部在动作过程中的温度分布及热应力分布情况，结果表明器件栅极结构附近的温升接近 1000 K，并会产生 1.4 GPa 的热应力。通过对失效器件的开封、切片及电镜扫描处理，确认了栅极氧化层的裂缝存在，验证了 SiC MOSFET 由于热应力导致栅极结构开裂，并导致栅极失效及老化的机理。  

关键词：固态断路器；SiC MOSFET；失效分析；老化特征

直流配电系统因其具有输送容量大、输送功率可调节、供电质量好、线路造价低等一系列优点，被广泛应用于微电网系统、电动汽车、数据中心、航天航空等领域。然而，相较于交流系统，直流系统在发生系统短路故障时，其故障电流上升速率较快，且不存在自然过零点，因此其故障保护成为了目前影响直流系统安全运行的重要难题。基于功率半导体器件的固态断路器SSCB( solid-state circuit breaker )能够实现微秒级的快速关断，具有无开断电弧、无动作声响等优点。 此外，随着近年来宽禁带半导体器件( 如SiC MOSFET )的蓬勃发展，固态断路器的性能得到了进一步提升，并朝着小功耗、大容量、高效率的方向不断突破，具有极为广阔的应用前景。然而，在目前针对固态断路器的设计与应用中，对功率半导体器件在该应用场景中的长期工作特性的研究较少，大部分研究仅停留在样机的设计及关断能力的测试上。器件的长期工作特性，尤其是其老化特性，将直接影响断路器的开断能力和工作性能，此外，SiC MOSFET的失效及老化机理相较于传统的Si基器件更复杂，与常见于其他器件的热失效机理不同，SiC MOSFET具有特殊的栅极失效特征，因此需要进行进一步研究分析。  

本文以 400V 低压直流固态断路器为研究对象， 旨在探究 SiC MOSFET 在动作过程中的栅极失效及老化特性。通过大电流关断测试，明确了器件的栅极失效行为，并发现了 1 种全新的栅极老化特性。通过有限元仿真分析，结合电镜扫描结果，揭示器件的失效及老化机理，为固态断路器的失效及老化判别提供了可靠依据。  

1\. SiC MOSFET栅极失效及老化特性  

1.1 测试平台及原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhjU1qBBPdiba6ywO7OG548ZCiarAah6pCzrT4TYTsqv10Qhic7mx7O6Iug/640?wx_fmt=png&from=appmsg)

固态断路器的经典电路拓扑如图 1( a )所示， 其主要部分包括功率半导体器件、驱动电路、短路侦测电路、电压钳位电路及冷却系统。图中：iSSCB为通过固态断路器所在回路的故障电流；vSSCB 为固态断路器的端口电压；iMOSFET为实际通过功率器件的电流；iClamp 为钳位支路中的电流。固态断路器的工作波形则根据系统故障类型的不同，分为硬开关故障波形和负载故障波形 2 类。其中硬开关故障是指在固态断路器闭合前，系统负载已经短路或发生接地故障，断路器在导通后迅速进入关断动作过程，并关断故障大电流，其波形如图 1( b )所示。 在断路器将要闭合时，驱动电路给 SiC MOSFET 施加 1个正向偏压以使其进入导通状态，由于系统回路已经短路，流经器件的电流迅速升高，故障侦测电路在检测到故障发生后，通过驱动回路控制器件关断以迅速切除故障电流，此时器件两端的电压迅速升高，直至触发电压钳位支路动作。此后断路器电压维持在钳位电压附近，电流迅速向电压钳位支路转移，从而实现对故障能量的吸收。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhMrmzTRHjNAKq8hBy828BIVxHicibXGHOdplGQbof6DDzOtEUffI56GFg/640?wx_fmt=png&from=appmsg)

为探究 SiC MOSFET 的失效及老化特性，基于图 2 所示的大电流关断测试平台进行了相关实验。该平台基于固态断路器的经典电路结构设计，主要包括外接母线电压VDC接口、母线电容组CDC和外接电感L接口，待测器件DUT( device under test )、驱动电路、 精密电阻( Shunt )、缓冲电容 C 和电阻 R，以及金属 氧化物压敏电阻 MOV( metal oxide varistor )。图中：iDUT为通过待测器件的故障电流；vDUT为待测器件两端的端口电压；vShunt为精密电阻压降。器件的通断由单片机控制，当器件导通后，电容CDC迅速向电感 L充电，以模拟直流系统的故障过程，在延时一段时间后，单片机发出关断信号并控制器件关断，RC 缓冲支路负责减小器件的关断损耗，MOV支路则进行电压钳位和能量吸收。此外，在直流电源与VDC接入端子之间串联1个大功率IGBT模块， 用于在器件失效后切断回路电流，以保护测试系统中的其他元器件，该模块同样由单片机进行控制。

为探究器件的单次动作失效特性，器件的导通时间 ton 将逐渐增大，直至器件失效；器件的老化特性，则通过多次重复开关动作实验来确定。器件的动态特性通过示波器来捕捉，流经器件的电流通过精密电阻压降vShunt测量。测试中母线电压 VDC\= 400 V，电感L=30μH，缓冲电阻R=10Ω，缓冲电容C=0.1μF，MOV型号为20D751K，精密电阻为25.58 mΩ，待测 SiC MOSFET 选用Cree的C2M0080120D，其额定电压为1200V，额定电流为36 A，保护 IGBT 的关断时间为 DUT 关断后延时 10 μs。

1.2 测试结果

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVha7yicibFnoQhQsWhtVkM5QMA48BSqrHEibIZcFAMQGGDY0eNicH53HYXJg/640?wx_fmt=png&from=appmsg)

  
DUT1 的单次动作失效波形如图 3( a )所示，器件在导通34μs后关断，而保护IGBT 则延时10μs后关断，vP为 IGBT 的驱动电压，由于关断后仍存在一定的损耗而发生失效，失效时刻为 41 μs。器 件在导通过程中进入饱和状态，导通压降 vDUT逐渐上升，器件的电流上升速率不断减小，器件的损耗不断增大。整个过程中，器件的最大电流iDUT,max\= 228 A，电压vDUT峰值为1.17 kV，该器件的失效模式为栅极失效，其特征为器件的栅、源极短路，漏、 源极正常，因此失效波形中显示 DUT 的驱动电压vG在失效后减小为 0，vDUT\=400 V，母线电压仍由器件来承受。

针对器件的老化特性，控制 DUT2 的导通时间为 32 μs，并进行重复开关动作实验，器件在2386次重复动作后发生栅极老化并失效，其波形如图 3( b )所示。可见，器件在多次动作过程中出现明显的栅极老化特性，vG 由原来的 20.0 V 下降为15.8 V，器件的动态特性也受驱动电压变化的影响， 提前进入饱和状态，且vDUT变化曲线极不平滑。整个过程中器件的最大电流为164 A，相比于未发生栅极老化的器件下降了64 A，电压最大值变化不大，发生老化后为1.21 kV。DUT2 在 42 μs 后同样发生栅极失效，其特征类似 DUT1，驱动电压降低为 0，漏、源极之间结构完好。

综合上述实验结果可得，固态断路器中的 SiC MOSFET 有可能在单次动作过程中出现栅极失效，且在长期工作过程中，由于重复开断故障大电流，有可能出现栅极老化的现象，进而最终发生栅极失效。因此，SiC MOSFET 的栅极可靠性将严重影响固态断路器的安全工作特性，需要对其失效机理进行进一步的探索。

2\. SiC MOSFET 栅极老化机理分析

2.1 仿真分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhJJpzdo6ON8IagP3NKmUE3BJetJ9uXaeicRzSs0icibGvuiaMBeHeWTE9qg/640?wx_fmt=png&from=appmsg)

为进一步探究器件的栅极失效及老化特性，本文基于 TCAD 仿真平台，参考真实器件结构参数，构建了 SiC MOSFET 的数值仿真模型，其结构如图 4( a )所示，相关参数见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhtWBQCQf6ZpcJtib1bg1sKibbHnBU2uVzhgP4VRSdiaeWiapwQ3mWcseBaw/640?wx_fmt=png&from=appmsg)

该模型体现了器件的 1/2 元胞结构，当栅极承受正向偏压时，其下方的 P 基区内会形成 1 个反型沟道以供电子流通，实现器件的导通。其中 N+源极区、P 基区、N\-漂移区和 N+衬底的掺杂浓度分别为 1×10¹⁹、2×10¹⁷、1×10¹⁶和1×10¹⁹ cm\-³。仿真模型采用饱和速度模型、浓度依赖迁移率模型、SRH 复合模型、Selb 碰撞电离模型及晶格自热模型等，以模拟器件在动态过程中的一系列物理过程。

参考实验的外部电路条件及相关参数，进行器件\-电路混合仿真，以模拟SiC MOSFET在单次动作过程中的器件内部温升情况，在开通34μs时器件内部温度分布如图 4( b )所示。由仿真结果可知，器件的内部温度最高点位于栅极下方1.5μm处，在该时刻其温升达到了1300K左右，尚未达到SiC MOSFET的热失效温度阈值，因此器件未发生热失效。器件栅极结构内部及氧化层处温升也较高，达到了1000K 左右，由于其栅极结构较薄，在该温度下，其栅极拐角及结构薄弱处会承受较大的热应力，从而导致栅极结构受损，进而出现诸如栅极失效或老化的情况。

为进一步探究 SiC MOSFET 在该时刻的热应力分布情况，基于相同的器件结构参数，构建了COMSOL 模型，通过将器件TCAD仿真的温度分布导入COMSOL中，模拟计算器件内部各处的热应力大小，其结果如图 4( c )所示。由仿真结果可知， 在 1000K左右的温度下，器件的栅极结构，尤其 是其拐角处及氧化层的尖角处会产生接近 1.4 GPa的热应力，已经超过材料可承受的最大机械强度， 因此器件的栅极氧化层将在热应力的作用下发生开裂，并逐渐产生裂缝。此外，由于器件的源极采用金属铝作为导电材料，其熔点为933K，此时器件 源极附近的温度已经超过铝的熔点，因此有可能导致金属铝熔化并流入栅极氧化层中，进而导致器件栅极电阻的减小，并最终导致栅极电压 vG的下降。

2.2 失效过程辨析

为验证SiC MOSFET的栅极失效及老化机理的推测，将发生栅极老化的器件进行开封处理，并采用聚焦离子束FIB( focused ion beam )对芯片进行纵向切片，结合扫描电子显微镜SEM( scanning electron  microscope )观察，其结果如图5所示。与完整的栅极结构不同，发生栅极老化的器件，其结构拐角处出现裂缝，验证了本文的相关仿真结论。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9AaVB4Fqv5ubF6lf6unVhu5ounwdicn2XibwAUwiaW24Hgic70pEDW7KMGFfSdlAVqXEfiafZs0jVmIg/640?wx_fmt=png&from=appmsg)

综合上述结果，SiC MOSFET 在固态断路器中工作于大电流关断状态，其动态过程中将产生大量损耗，导致器件内部剧烈温升，并集中在器件的栅极结构附近，受热应力影响，器件的栅极氧化层在单次或多次的动作过程中会发生开裂现象，裂缝将不断在栅极氧化层内蔓延，直至贯穿该结构。由于此时器件内部温升已经超过金属铝的熔点，器件源极的金属铝将会熔化，并流入裂缝中，最终导致器件的栅、源极短路，而漏、源极结构完好的特殊失效及老化现象。  

3. 结论  

本文针对低压直流固态断路器，对 SiC MOSFET的栅极失效及老化特征进行了实验测试，并通过多种仿真手段及FIB-SEM 分析验证了器件的失效及老化机理，相关结论如下。  

 ( 1 )SiC MOSFET 在单次动作过程中会出现栅、 源极短路的特殊失效模式，在长期多次动作的过程中会出现栅极电压降低、动态特性改变的栅极老化模型，并最终在某一次开断后同样出现栅极失效。

 ( 2 )通过有限元仿真结果可知，SiC MOSFET的栅极结构在动作过程中的温升高达 1000K 左右， 并会产生 1.4 GPa 的热应力，对栅极结构产生破坏。 器件的栅极氧化层将在动作过程中产生裂痕并不断延伸，直至熔化的金属铝贯穿整个氧化层结构，最终导致栅极失效，该特征通过 FIB-SME 手段得到了验证。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViciakK6zIjF5qlcSnF1iavjkjHMxt7kkQL56t2I0VkMMGPHAlYCdcic10UQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViciaeWPoukpPSoodzkAIEebeRqm1uPL6FbiaWJpjkn1uQXDBpck2ibQk5pA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViczk316DvZLAIY5ODl8oOr06x638bzC5wceE3licVx8yia9wdFO7GB1bnQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbVicbz7NgK7j4g1MCoaClV4h1ic8eof2OicIvGKvhVLkyjc7LGo5V6Q8sWaQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)