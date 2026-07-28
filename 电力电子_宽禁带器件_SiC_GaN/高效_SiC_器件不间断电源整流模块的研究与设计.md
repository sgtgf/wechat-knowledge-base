# 高效 SiC 器件不间断电源整流模块的研究与设计


> 原文地址: [https://mp.weixin.qq.com/s/iRiVTBmGkJK1r60XC-TCrA](https://mp.weixin.qq.com/s/iRiVTBmGkJK1r60XC-TCrA)

文章来源：华南理工大学

作者：冯自成（硕士学位论文）

摘要：随着电力电子技术的发展，电力电子器件的各项指标也得到了很大的提升。受限于半导体材料的属性限制，基于 Si 材料的半导体器件在很多方面劣于新型半导体材料器件。作为新型半导体器件的代表，SiC 功率元器件的重要参数都非常优越。基于 SiC 材料的 MOSFET 具有耐压高、导通电阻低、热稳定性好、开关频率高、开关损耗低的特点，具有很好的应用前景。受企业委托，本文的主要任务是研制一台 IGBT 器件不间断电源用整流模块，并在此基础上对 SiC MOSFET 不间断电源整流模块进行初步研究。

本文首先对于整流模块进行了开关模型建模，分别在三相静止坐标系、两相静止直角坐标系和两相旋转直角坐标系下建立了整流模块的数学模型。对于整流模块控制系统的各个模块，本文也进行了详细的阐述。

其次，针对采用电压外环电流内环双 PI 控制策略的整流模块启动过程中存在的直流侧电压和交流侧电流超调过大的问题，本文提出了一种改进型 PI 控制策略。通过将改进型 PI 控制策略应用于电压外环，可以有效地减少整流模块启动过程中存在的直流电压超调和交流电流超调问题，从而使启动过程中直流电压和交流电流过渡平缓，减少了对器件的意外伤害，降低了对器件参数的要求。

同时，针对采用空间矢量脉冲宽度调制 SVPWM 的整流模块，通过对交流侧电流谐波构成进行分析，确定了交流侧电感取值的上下限，进而通过仿真工具确定电感取值。通过本文提出的交流电感确定方法，可以确定满足指定谐波要求的电感大小。实验验证了本文提出的电感确定方法的正确性和有效性。

最后，本文基于 Si IGBT 与 SiC MOSFET 分别搭建了整流模块平台，并且设计了相应的外围电路。实验过程中，首先验证了本文提出的改进型 PI 控制策略的正确性与有效性，然后验证了本文提出的电感确定方法的正确性，最后对 SiC MOSFET 整流模块进行了初步的实验研究。

本文采用理论分析与实践检验相结合的方式，以及仿真辅助实验的方式，验证了改进型 PI 控制策略、电感确定方法的正确性以及有效性，并且对 SiC MOSFET 整流模块进行了初步研究。

本文获得国家自然科学基金项目（基于数据融合的大型风电机组故障诊断方法，61273172）资助。  

关键词：整流模块；SiC；SVPWM；电感确定方法；改进型 PI；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEicesNRK9icMW1RUzfpKl5SkxA4knIckRlPq4ZN5ibsSzm0ia2Uglf82XeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEY4CFlVWxIjUIVibfCsRoVZHlFnfCQ2DibKa8DnfP7b82fr6q3N5hH3zA/640?wx_fmt=png&from=appmsg)

第一章 绪论

1.1 研究背景和意义

随着半导体技术的发展、数字信号处理技术以及控制技术的发展，电力电子技术正在向着高频化、数字化、模块化、绿色能源化发展。电力电子设备的体积、智能程度、效率、谐波、功率因数等指标也在不断得到改善。不间断电源作为电力电子技术的一个重要分支，在电力电子的发展中扮演着重要角色。随着我国大力推广互联网加政策，互联网产业快速发展，对于不间断电源的需求也越来越大。目前，国内的不间断电源提供商主要为国外三大品牌：伊顿、施耐德、艾默生，本土 UPS 厂商只占有少数市场份额。

在各种功率等级的不间断电源产品中，小功率不间断电源占有绝大多数市场份额。根据赛迪顾问对 2014 年 7 月中国不间断电源的市场分析报告，功率大于等于 3kVA 小于10kVA 的不间断电源占总销量的 33.6%，销售额占比 19.2%，销量和销售额在所有功率等级中均为第一，功率小于 3kVA 的不间断电源占总销量的 66.7%，销售额占比 15.5%，销量在所有功率等级中排名第一。从以上数据可以看出，中小功率不间断电源竞争异常激烈，要想突破国外厂商的垄断，必须在中小功率不间断电源上下功夫。基于此种背景，本人所在的实验室受企业委托为企业研制一台 5kVA 以 IGBT 为功率器件的不间断电源。本人负责不间断电源整流模块的研究，并在 IGBT 不间断电源整流模块研究的基础上对SiC MOSFET 不间断电源整流模块进行初步研究。

本文将基于 IGBT 模块研制一台不间断电源整流模块样机，验证本文提出的改进型PI 控制策略的正确性和有效性以及本文提出的交流电感选型方法的正确性。在完成此实验的基础上，对 SiC MOSFET 整流模块进行初步的研究，以便下一步对 SiC MOSFET 整流模块进行全面研究。SiC 半导体相对于传统的 Si 半导体具有耐压高、导通电阻低、热稳定性好、开关频率高、开关损耗低等诸多优点。可以预见，随着价格的降低以及技术的成熟，基于 SiC MOSFET 的不间断电源整流模块的市场份额将会逐渐扩大。

1.2 整流模块的研究现状

整流模块，也可以称之为整流器，其性能受到开关器件、拓扑以及控制策略等多种因素的综合影响。下文将从器件、拓扑、控制策略三个方面阐述整流模块的研究现状。

1.2.1 开关器件研究现状

自从 20 世纪 50 年代初期电力二极管应用于电力领域以来，电力电子器件经历了从不可控到可控的变迁，先后出现了晶闸管、MOSFET、IGBT 等典型电力电子器件。

电力二极管既不能控制其开通也不能控制其关断，属于不可控器件，只能利用器件外部条件使其开通或者关断。由于电力二极管结构简单、工作稳定，因此得到了广泛的应用。在全控型器件组成的拓扑中，多伴有电力二极管。可以说，电力二极管在电力电子的发展史中具有不可替代的作用。但是由于电力二极管的不可控特性，在对性能指标要求较高的场所，电力二极管往往不能满足要求，通常作为辅助性器件存在。电力二极管种类繁多，如普通二极管、快恢复二极管、肖特基二极管等等。

1956 年，半控型器件——晶闸管在美国贝尔实验室诞生，标志着电力电子技术的产生。晶闸管属于半控型器件，通过对门极触发可以使晶闸管开通，但是不能通过对门极的控制使其关断。晶闸管的半导体结构特性决定晶闸管在低频率高电压大电流应用场合中有着不可替代的作用，在中小功率应用场合已不常见。根据应用场合的不同，晶闸管的种类也有不同，如快速晶闸管、逆导晶闸管、双向晶闸管、光控晶闸管等等。

20 世纪 80 年代以来，随着电力电子技术与信息电子技术的交叉融合，诞生了一系列全控型电力电子器件，如门极可关断晶闸管、电力晶体管、电力场效应晶体管和绝缘栅双极晶体管。与信息电子技术中的场效应晶体管对应，电力电子技术中的场效应晶体管也分为结型和绝缘栅型，但应用较多的是电力 MOSFET（Metallic Oxide Semiconductor Field Effect Transistor）。电力 MOSFET 属于电压控制型全控型电力电子器件，可以通过驱动电路控制其开通和关断，且驱动电路简单，驱动功率小。由于其半导体结构特性，电力 MOSFET 可以工作在高达 MHz 的频率下，但是基于 Si 材料的电力 MOSFET 在高压下导通电阻大，具有耐压低、电流容量小的缺点，多应用于高频小功率的场合。为了解决电力 MOSFET 导通电阻大的问题，RCA 公司和 GE 公司于 1892 年开发了一种复合型全控型电力电子器件—绝缘栅双极晶体管（Insulated Gate Bipolar Transistor, IGBT）。IGBT 综合了电力晶体管导通电阻小、电流容量大和电力 MOSFET 工作频率高、输入阻抗高、驱动电路简单、驱动电路功率小、热稳定性好的特点。由于 IGBT 的诸多优点，自其问世以来，已经成为中大功率应用场合的主导器件。但是由于在 IGBT 的关断过程中存在少子存储现象，导致 IGBT 的开关速度低于电力 MOSFET，一般频率低于 20kHz。

到目前为止，无论是不可控器件、半控型器件，还是全控型器件，其采用的半导体材料主要是硅。近年来，基于新型半导体材料的电力电子器件吸引了人们的关注。SiC材料是一种碳和硅构成的化合物材料。相对于 Si 材料，SiC 材料具有 10 倍的绝缘击穿强度，因此可以制作出更高耐压更低导通电阻的电力电子器件，这远远超出了硅材料的极限。相对于 IGBT 牺牲开关频率解决电力 MOSFET 高压时导通电阻大的问题，SiC 材料可以在不改变 MOSFET 高频结构的条件下，同时具有高耐压、低导通电阻的特性。另外，SiC 材料的带隙是 Si 材料的 3 倍，这使得 SiC 材料的热稳定性好，可以在更高温度下工作。目前，罗姆公司生产的碳化硅器件已经可以工作在 150℃-175℃温度条件下。随着封装技术的发展，工作温度有望进一步提高。Si 材料制成的电力 MOSFET，单位面积导通电阻随着耐压值的升高而升高，因此多用于 900V 以下的场合。IGBT 利用电导调制效应降低了导通电阻，但由于少子存储现象的存在导致关断时产生拖尾电流，从而限制了 IGBT 的开关频率。SiC 材料的高绝缘强度允许 SiC MOSFET 拥有更高的杂质浓度和更薄的漂移层，从而可以在不改变 MOSFET 高频结构的前提下，从半导体材料层面做到高耐压、高频率、低导通电阻。高耐压特性使得器件的体积进一步减少；高频特性使得设备上的感性元件体积进一步减小，开关噪声降低；导通电阻的降低使得 SiC MOSFET 发热量减少，对于散热器的要求进一步降低，同时在选择器件时可以留有更少的裕量。SiC MOSFET 开关损耗低、导通损耗低，因此 SiC MOSFET 设备具有较高的效率，可以把 SiC MOSFET 称为高效 SiC 器件。为了说明SiC MOSFET 的高效特性，表1-1 对西门康公司的 IGBT 半桥模块 SKM100GB128D 与CREE 公司的 SiC MOSFET 半桥模块CAS100H12AM1 的各项参数进行了对比，包括零栅极电压漏极电流 IDSS 、导通电阻/饱和压降 RDS （on) / VCE(sat) 、接通切换能量 Eon 、关断切换能量 Eoff 、体二极管的正向压降V F 以及反向恢复能量 ERR 。为了对饱和压降进行对比，将 SiC MOSFET 的导通电阻转换为 75A（和 IGBT 相同测试条件）时的导通压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEpWDWibjaNAzljoVfiaibx1J1dalTkbwLh2oJYAq9cPhaMiaWQyPnkVZ5gA/640?wx_fmt=png&from=appmsg)

从表 1-1 可以看出，SiC MOSFET 半桥模块的各项参数均优于 IGBT 半桥模块，导通损耗和关断损耗均有大幅下降，可以大幅提升效率。因此，和 IGBT 相比，SiC MOSFET模块具有“高效”特性。

尽管SiC MOSFET有诸多优点，SiC MOSFET也存在一些缺点。目前罗姆公司的SiC MOSFET 门极和源极之间可以承受的最大电压为-6V-22V，推荐的驱动电压为+18V/-4V；CREE公司的SiC MOSFET门极和源极之间可以承受的最大电压为-10V-25V，推荐的工作电压为-5V/+20V。为了通过较大的漏极电流，SiC MOSFET需要较高的驱动正压；为了防止SiC MOSFET误开通，SiC MOSFET需要负压关断。同时，由于 SiC MOSFET开关速度快容易导致误开通，常常需要在负压关断的同时在门极和源极之间并联电容来防止误开通。这样可以降低误开通的概率，但是将导致开关损耗增加。基于以上原因，SiC MOSFET对驱动电路的设计要求较高。同时，目前SiC MOSFET的价格偏高，相同电压等级和电流等级的SiC MOSFET半桥模块大约是IGBT 半桥模块价格的 10 倍，对于其推广起到了一定的阻碍作用。

但是依然可以预见，随着技术的进步，价格的降低，基于 SiC 材料的电子电子器件将逐步取代 Si 材料的电力电子器件。

1.2.2 整流模块拓扑研究现状

整流模块拓扑按照输入电源相数分类可以分为单相整流模块和三相整流模块；按照输入电源性质分类可以分为电压源型整流模块和电流源型整流模块；按照输出电压波形中从正的最大值到负的最大值之间的电平数目分类可以分为两电平整流模块和多电平整流模块，常见的三相电压源型整流模块拓扑有三相半桥拓扑、VIENNA 拓扑、中点钳位型三电平拓扑。

三相半桥电压源型整流模块拓扑如图 1-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEIwrVU7a8FDbFMROku8EbysdeYZ3t1qeeWDFN0HKdgNOoBpIfToDhOg/640?wx_fmt=png&from=appmsg)

三相半桥电压源型整流模块由六个开关管构成，电路结构简单，属于两电平整流模块，具有网侧电流正弦化、功率因数可控、可以实现四象限运行、不存在中点电压不平衡问题等诸多优点，缺点是相对于多电平整流模块，电流谐波含量高，且对于电网电压不平衡状况比较敏感，通常用于中低压中小功率场合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEKliaomqwVeuW0vicGrMO81CnRIspCDZnCah78eyokckR6zaYibiaAdKMnQ/640?wx_fmt=png&from=appmsg)

中点钳位三电平整流模块如图 1-2 所示。中点钳位式三电平整流模块由 12 个开关管和 6 个钳位二极管构成。相对于两电平整流模块，谐波含量大大减少，且每个开关管承受的电压仅为直流侧电压的一半，能量可以双向流动，功率因数可控。但是中点钳位型拓扑存在固有的电容中点电压波动问题；开关管数量多，相对应的驱动电路以及辅助电源数增多；由于输出电平数的增加，空间矢量图的复杂性大大增加，计算量相对于两电平整流模块大大增加。这种拓扑多用在中高压大功率场合，目前国内外已有实用化的设备生产。  

VIENNA 整流模块的拓扑如图 1-3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEQ1vMH11ZVMpF1Ox6AKkE9d7lUGRF4Xnkzq4ggPdn6VsUYCicH0jUN4g/640?wx_fmt=png&from=appmsg)

VIENNA 整流模块由三个开关管、18 个二极管构成，相对于中点钳位三电平整流模块，开关管数目大大减少，二极管数目大大增加。VIENNA 整流模块开关管电压应力为直流母线电压的一半，不存在桥臂直通的问题，可以实现单位功率因数运行，电流谐含量少，缺点是不可以实现能量双向流动，存在电容中点电压不平衡问题，空间矢量脉冲宽度调制算法复杂，比较适宜用于中高压中大功率场合。

综上所述，本文设计的小功率整流模块，比较适宜采用三相半桥电压源型拓扑。

1.2.3 整流模块控制策略研究现状

针对本文采用的两电平电压源型整流模块，目前存在多种控制策略。这些控制策略有些针对于直流侧电容电压控制，有些针对于交流侧电流控制。下文将对整流模块的控制策略进行阐述。

（1）滞环电流控制

在三相半桥整流模块的滞环电流控制策略中，首先将直流侧电压给定值Vdcref 与直流侧电压测量值Vdc 做差后送入电压外环 PI 控制器，电压外环控制器的输出作为交流电流幅值的给定值 Imref ，交流电流幅值的给定值 Imref 分别乘以和三相电网电压同相位的余弦信号 cos(ωt） 、 cos(ωt-2π / 3) 、 cos( ωt+2π / 3) 作为三相交流电流的指令值，通过这种方法实现交流侧电压电流同相位， ω为电网电压角频率， t 为时间。当交流电流给定值与交流电流测量值的差大于滞环环宽 ΔI时，控制开关管通断，增加对应相的交流电流；当交流电流给定值与交流电流测量值的差小于滞环环宽-ΔI时，控制开关管通断，减少对应相的电流。

滞环电流控制算法简单，具有快速的动态响应，电流偏差确定，但是滞环电流控制的开关频率不固定，不利于数字控制且难以设计网侧滤波电感。

（2）基于电网电压定向的双闭环 PI 矢量控制

基于电网电压定向的双闭环 PI 矢量控制算法是一种经典算法。在这种算法中，电压外环采用 PI 控制器，以直流侧电压给定值与直流侧电压测量值之差作为电压外环 PI控制器的输入，电压外环控制器的输出作为电流内环 d 轴 PI 控制器的给定值，即 d 轴电流指令值，为了实现单位功率因数 q 轴电流指令值为 0。由于采用了坐标变换将交流量转换为直流量，因此可以实现无静差跟踪。电流内环 PI 控制器的引入实现了电流方程的 dq 轴解耦，方便控制器的设计。解耦后得到整流模块交流侧的 dq 轴电压指令值，经过 Park 逆变换后可以得到直角坐标系下的整流模块交流侧电压指令值，送入 PWM 环节。PWM 环节可以采用 SPWM 环节，也可以采用 SVPWM 环节，通常采用直流电压利用率高谐波含量少的 SVPWM 环节。这种控制方法，动态响应速度快，开关频率固定，易于数字化实现，但启动过程中存在直流侧电压超调和交流侧电流超调过大的问题。

（3）其他新型控制方法

随着控制理论的发展，越来越多的控制方法被用到整流模块中，如预测控制、直接功率控制、模糊控制等等。这些控制方法各有其优缺点，对于硬件的要求也不同，应根据实际需要选用。

1.3 本文主要研究内容

本文在前人工作的基础上，主要研究了以下内容：

第一章主要讲述了本文的研究背景和意义，并从器件、拓扑和控制策略三个方面介绍了整流模块的研究现状,并且确立了本文的研究目标：（1）解决整流模块启动超调问题；（2）提出一种交流侧电感确定方法；（3）对 SIC MOSFET 整流模块进行初步研究。

第二章主要阐述整流模块的数学模型。首先分析了整流模块的基本工作原理，紧接着分别在三相静止坐标系、静止直角坐标系、旋转直角坐标系下建立了整流模块的数学模型，为下文对于整流模块的分析设计打下了基础。

第三章主要讲述电网电压定向的双闭环 PI 矢量控制系统的各个模块，分别阐述了锁相环的工作原理以及实现方法、空间矢量脉冲宽度调制 SVPWM、电流内环控制器的设计、电压外环控制器的设计。其中电压外环控制器的设计采用了改进型 PI 控制器，有效地解决了整流模块启动过程中的直流电压超调和交流电流超调过大问题。

第四章主要阐述了整流模块的系统设计和实现,包括硬件系统和软件系统的设计与实现。硬件系统包含开关器件的选取、交流侧电感的设计、直流侧电容的设计以及驱动电路的设计。其中，详细分析了采用空间矢量脉冲宽度调制 SVPWM 的整流模块交流侧电感与电流谐波的关系，给出了一种交流侧电感的确定方法。

第五章为本文的实验结果及分析。实验结果验证了本文提出的改进型 PI 控制器对于解决整流模块启动超调问题的正确性及有效性，同时验证了本文提出的电感确定方法的正确性，最后对 SiC MOSFET 整流模块进行了初步研究。

第六章为本文的总结与展望，阐述了本文的成果以及未来需要研究的内容。

第二章 不间断电源整流模块的数学模型

数学模型作为对研究对象的一种理想化抽象，抓住了研究对象的主要因素，忽略了研究对象的次要因素，方便对研究对象进行研究与设计。本文选取的整流模块具有网侧电流正弦化、单位功率因数、直流侧输出电压可调的优点。为了实现以上功能，必须首先掌握整流模块的数学模型。因此，本文首先推导不间断电源整流模块在三相静止坐标系、两相静止直角坐标系、两相旋转直角坐标系下的数学模型，以便对整流模块进一步研究分析。

2.1 两电平电压源型整流模块的拓扑

两电平电压源型整流模块的电路拓扑如图 2-1 所示，为表达方便，如无特别说明，下文所述整流模块一般指两电平电压源型整流模块。其中 ea 、 eb 、 ec 为三相对称电网电压；L为电感，其功能为滤波并为整流模块和电网的能量交换提供通道； S1 至 S6 为开关管，可以为 IGBT 或者 MOSFET 等全控型电力电子器件； C1 、 C2 为电解电容，起着储存能量的作用，并且可以为逆变单元提供电压中性点； RL 为负载电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEXaXb85KLIaicyTcQOdf16icLHPeeTu4uFdFanv2ysoqGrKRvTQHF0FMA/640?wx_fmt=png&from=appmsg)

整流模块同一桥臂的两个开关管（ S1 和 S2 、 S3 和 S4 、 S5 和 S6 ）不能同时导通，一旦同一桥臂的上下两个开关管同时导通，相当于在直流侧电解电容 C1 和 C2 两端并联一根电阻很小的导线，造成短路，烧坏装置。因此，同一时刻每相桥臂只能有一个开关管导通。工程中为了防止桥臂直通，通常在软件中或者硬件中加入死区。以整流模块的 A相为例进行分析：当 A 相开关管 S1 导通，开关管 S2 关断时，无论电流ia是正还是负，整流模块 A 相电路均可等效为图 2-2 所示的电路；当 A 相开关管 S1 关断，开关管 S2 导通时，无论电流ia是正还是负，整流模块 A 相电路均可等效为图 2-3 所示电路。整流模块的 B 相和 C 相均可以进行同样的等效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaECajRSYqYVvBaQanGHv5zfjRTgBVuqhAly6gtNnvgK6JiaicwglnQJ4Hw/640?wx_fmt=png&from=appmsg)

为方便表示，定义开关逻辑函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaElRpMkCB5hRICFtpoOsUxwoUXc5uaUMF3P9KLQNIBfpOBS8dz61J0Tg/640?wx_fmt=png&from=appmsg)

定义开关逻辑函数后，可以建立整流模块的开关函数模型，下文将详细讨论。

2.2 整流模块在三相静止坐标系下的数学模型

整流模块在三相静止坐标系系下的数学模型是推导整流模块在两相静止直角坐标系下的数学模型和两相旋转直角坐标系下的数学模型的基础，因此本文将先建立整流模块在三相静止坐标系系下的数学模型。

根据开关逻辑函数可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEj3gY8WhxB1p2wsaHzYTiaIKTpZRe44RudhtUic5RePeCHxKoDjFS0yXw/640?wx_fmt=png&from=appmsg)

忽略高频分量后，整流模块交流侧输入电压满足，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEcwSFudFBicRKuy1YUwhLyniclKFt5XNwp2cj7XxS00vvH8iadgUfOL8cA/640?wx_fmt=png&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE8ZC8GbdKEfEM8c9rBziarfFgrc77ENeTYflMPDpnRZHJqKfykmklBNw/640?wx_fmt=png&from=appmsg)

将公式（2-2）代入公式（2-3），解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEuTic7sf7jXWr9e36J0T9Xnt8pgialflfHTfL8ZnAOkHm0TTvcRm8BLVw/640?wx_fmt=png&from=appmsg)

又因为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEPlbzuPIb5aaIEIiciaueYLS89YBNTRWaDNic2prGTuPhetzF8oLicucXyw/640?wx_fmt=png&from=appmsg)

将公式（2-5）代入公式（2-6），可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEyuibAW7DZEK4RPvL8pkhZQ5wt824q548qJDicy2k3a2GBQkCmrMWM9dQ/640?wx_fmt=png&from=appmsg)

对图 2-1 中的U 点采用基尔霍夫电流定律，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEUd4ff41g3uICiafvMib0kcTyS6L184yj91vv2lNUI6AxrlBB4RcURWtg/640?wx_fmt=png&from=appmsg)

对整流模块的每一相应用基尔霍夫电压定律，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaECORXgvbD5rQ7t2TygyLAIvPCZhQcutn4kru6qpMMHq8TWwfunClQGw/640?wx_fmt=png&from=appmsg)

  
对于三相对称系统，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE3zjjqBGfOicjqDr8ibnXpqgqibJTEQ2XV7icDpu6RGODzBLvicm63e4fwcQ/640?wx_fmt=png&from=appmsg)

综合公式（2-8）-（2-11）可以得到整流模块在三相静止坐标系下的数学模型，用一组表达式描述为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaETggXGy8ibnTnSCEiaXlWRwPFTKpXbVFUtL1B13ydNAwemXKlhz1XzLHw/640?wx_fmt=png&from=appmsg)

2.3 整流模块在两相静止直角坐标系下的数学模型

整流模块在两相静止直角坐标系下的数学模型可以由整流模块在三相静止坐标系下的数学模型变换而来。完成从三相静止坐标系到两相静止直角坐标系的变换称作Clark 变换。因此，本文首先介绍 Clark 变换，再介绍整流模块在两相静止直角坐标系下的数学模型。

2.3.1 Clark 变换

设空间按照逆时针顺序互相间隔 120°每相匝数为 N3 的三相对称绕组中通过以下单位电流，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEmu5wd6uDN1d5PS8RpLN98DGfKxz3cnJQAhS7QrxpePtGwyd1K3JGibQ/640?wx_fmt=png&from=appmsg)

另设在空间间隔 90°匝数为 N 2 的线圈中通过单位电流 iα 、 iβ，两者的位置关系如图 2-4 所示。如果两者产生的磁场等效需要满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEK113FwduWodjv8oYsYanBMfmQdicxASPIX4GLVAEicDYCWjfvw5tIuOQ/640?wx_fmt=png&from=appmsg)

综合公式（2-13）和公式（2-14），可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEmBHqtsYftTLz68IKBa29PnBAl1RO4OfudFGxG4F0ibrs4XdEmibzagbQ/640?wx_fmt=png&from=appmsg)

由于 iα、 iβ均为单位电流，所以有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEETVerNRNt0e78dCvQFg1BbvS9A7AI5AAqEZHQjrQ9wp31PibcwoTW5g/640?wx_fmt=png&from=appmsg)

综合公式（2-14）和（2-16），可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE3D8tEiaofhUk1CpxC9gHWKLCvZ2ANdB9s2rJQRYm4QTMrCZwibghCLSA/640?wx_fmt=png&from=appmsg)

将公式（2-17）写成矩阵形式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEI9XiaYLAfNmmuPCyO2kItKy6lMsVfDjicIG6RbAxr8nM5kwNWGeHWXVA/640?wx_fmt=png&from=appmsg)

以上就是 Clark 等幅值变换的推导过程，Clark 变换表述了三相对称单位电流与两相单位电流在磁场等效的情况下，三相对称单位电流与两相电流之间的数量关系。从几何角度来看，三相静止直角坐标系下的三个正弦量分别是同一矢量在三个坐标轴上的投影，两相静止直角坐标系下的坐标大小分别是同一矢量在两相静止直角坐标系两个坐标轴上的投影。对于不产生磁场的量，Clark 变换可以仅仅看做是一种方便控制系统设计的数学变换。与 Clark 变换相对应的是 Clark 逆变换，其把两相静止直角坐标系下的量变换到三相静止坐标系下，Clark 逆变换的矩阵形式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE4iao5gkQ0tycRshR8vTQyuWZER5PaDQib8DvLkYLiceI3icSPQ1bg58x1Q/640?wx_fmt=png&from=appmsg)

对于三相对称系统，Clark 变换可以进一步简化，考虑到电流的对称性，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEvC61hBCO8EQdjl8sxe2rELyia7iaRIXGbn4icL4hnZGRbCqNhXXe9oJeA/640?wx_fmt=png&from=appmsg)

根据公式（2-18）（2-20）可以解出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE8wq7CHibgWeEuZUCzV5SgD3BAAFnb3ibr2HjhfZUp20h4uW8579xRRZg/640?wx_fmt=png&from=appmsg)

同样，可以根据公式（2-19）和公式（2-20）得到简化后的 Clark 逆变换，简化后的Clark 逆变换为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEoQHNVqaEbEu9iaRWduXvvhQN1VbFgZWicjXuesibNwXTiawjOricbwQBCzA/640?wx_fmt=png&from=appmsg)

2.3.2 Clark 变换与空间矢量的关系

Clark 变换与空间矢量的定义有着内在的联系，空间矢量的本质是将三相静止坐标系下的量变换到两相静止直角坐标系上，且变换前后两种坐标系下的矢量幅值和相位均相同。

对于电流，可以定义空间电流矢量为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEs5nSrVuQZMNav79GqJHia3agMyOHoZTZiaBIGSdALZv3uiaMzstxTiagxA/640?wx_fmt=png&from=appmsg)

对于电压，同样可以定义空间电压矢量：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEQR5uk1VU6rtu9QR4vpqHBUyTkWRB5DRLbSicwp4E9rvleias6SLORbwA/640?wx_fmt=png&from=appmsg)

2.3.3 整流模块的两相静止直角坐标系数学模型

通过 Clark 变换，可以将三相静止坐标系下的数学模型变换到两相静止直角坐标系下。变换后，变量的个数从三个减少为两个，有利于系统的分析、控制。下面是整流模块在两相静止直角坐标系下数学模型的推导过程。

对开关函数进行 Clark 逆变换有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEGRuUkljdAVSZ7lVoRDYu7oVREYutYajias7Ku7jDeoKdm7bcn0YPWFg/640?wx_fmt=png&from=appmsg)

电网电压进行 Clark 逆变换，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEcAmP35YEJ1BUTYASX0QpttDXglnrW9yEvgpuujXwiaSw8lr7GtNnwXQ/640?wx_fmt=png&from=appmsg)

对交流侧电流进行 Clark 逆变换，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEWPc41RHncicMsS4TEXOELicGkMYq0wXx3InVOrhNvoRjaqNibI6wqFYOQ/640?wx_fmt=png&from=appmsg)

将公式（2-25）-（2-27）代入公式（2-12），可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEvIKKM2oR2akdsdwYMoMbXicia4iarxhfADwKLpMtBCpibyC3zNhGu1LthQ/640?wx_fmt=png&from=appmsg)

公式（2-28）即是整流模块在两相静止直角坐标系下的数学模型。

同时，Clark 变换前后存在功率关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEnGS6X26zqkUEp9uWkMia0q1JrNeZbtUODO5ggukYB68meLxFA8uzqeg/640?wx_fmt=png&from=appmsg)

2.4 整流模块在两相旋转直角坐标系下的数学模型

Park 变换将两相静止直角坐标系上的量变换到两相旋转直角坐标系。通过 Park 变换，交流量变换成了直流量，便于对控制器进行分析设计，提高控制系统的性能。因此，Clark 变换和 Park 变换一起被广泛应用在三相对称系统的控制系统中。

2.4.1 Park 变换

Park 变换的示意图如图 2-5 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEfOkOfw66GJWSwI40AL4IDxm1yuWLgibRN8dVcahLg7Nhkx0pwYxmenQ/640?wx_fmt=png&from=appmsg)

两相静止直角坐标系下的单匝单位电流 iα、 iβ在空间产生的磁势为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEDubIjTvZasmzrX3d3sMH7foS6D8bgMpQCiceSkqWQR7vdeKV1diaQQRw/640?wx_fmt=png&from=appmsg)

设某一时刻，两相旋转直角坐标系与两相静止直角坐标系的夹角为θ，且两相旋转直角坐标系下的直流电流产生的磁场与两相静止直角坐标系下的正弦电流产生的磁场等效，则根据矢量相等其分量也相等的原则，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE0mUsZMTcObx9GsciamMSF5LfTuxBMrjiaafuvbICeBa0QmFn1w0TNn6Q/640?wx_fmt=png&from=appmsg)

公式（2-31）中， id 、iq分别为两相旋转直角坐标系下的 d 轴电流和 q 轴电流。根据公式（2-31）可以得到 Park 变换的矩阵形式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaECOUkHzwwMNW1SPg8CCDB8qkmmet1JYrKGG2PI18JjM2SonUXE8c0Mg/640?wx_fmt=png&from=appmsg)

与 Park 变换对应的 Park 逆变换矩阵形式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEsepnLZur8ibhMLQiabXyfzFtaS6kysTXFvCwV8LEFX1PBqESqWkwQtNQ/640?wx_fmt=png&from=appmsg)

2.4.2 整流模块的两相旋转直角坐标系数学模型

整流模块的两相旋转直角坐标系数学模型可以由整流模块在两相静止直角坐标系下的数学模型通过 Park 逆变换得到，以下为变换过程。

对开关函数进行 Park 逆变换，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEcSgy5X1Fzn40VHzPOxkibiaGQicwIhib6G9kk1ibekk1vMHqQojeoNg06lA/640?wx_fmt=png&from=appmsg)

对电压进行 Park 逆变换，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEH5OCwfJNAicjLk2EhkI4HFzVQZOvmR4tORMXVEb40NVqd1YHg9j5W6A/640?wx_fmt=png&from=appmsg)

对电流进行 Park 逆变换，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEb2Hhu2fgTZshicw7V55HG9z78Zia3pBcSVq7Fzg0eVFFq27IUAPaGogA/640?wx_fmt=png&from=appmsg)

将公式（2-34）-(2-36)代入公式（2-28），并且考虑到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEbia0aenqQqtWv5YDibgw0dM2NxOFbLSTI5WfNhYLqWelK8F5hxjiaQUEA/640?wx_fmt=png&from=appmsg)

公式（2-37）中ω为电网电压角频率， t 为时间，φ为 a 相电网电压初始相位角。

则可以得到整流模块在两相旋转直角坐标系下的数学模型为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEXvIu7rbN3EoYVTwx9gXwZFbviav7r91En0vvzeiax6gBYYlwU4wybu2g/640?wx_fmt=png&from=appmsg)

Park 变换前后，功率守恒，但是功率在两种坐标系下的表达形式发生了变化。Park变换前后的功率关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEhntdoXOa5hjeppskyl3FesA9C3PLBwy5TBtVpKxXeydmPh8pcBy16A/640?wx_fmt=png&from=appmsg)

结合公式（2-29）和（2-39）可知，三种坐标系下的功率关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEoMQrrBE8WsdjOm7SRYtUV2LqUGEqicNR4Oog0odkGHxeougd9ak35lQ/640?wx_fmt=png&from=appmsg)

2.5 本章小结

本章首先介绍了两电平电压源型整流模块的拓扑并引入了开关函数，然后分别在三种坐标系下建立了两电平电压源型整流模块的开关函数数学模型，介绍了变换过程中涉及的坐标变换，指出了变换前后存在的功率关系，为下文的研究与设计打下了基础。

第三章 不间断电源整流模块的控制系统

本文采用的不间断电源整流模块控制系统结构图如图 3-1 所示。整个控制系统包括电压外环和电流内环，电压外环用于控制整流模块直流侧输出电压恒定，电流内环分别跟踪相应的 dq 轴电流指令值，从而使整流模块运行在单位功率因数下。控制系统首先采集电网电压信号用于确定电网相位，然后将交流电压和电流变换到两相旋转直角坐标系下。电压外环的输出信号作为电流内环 d 轴电流指令值，q 轴电流指令值为 0。电流内环 PI 调节器的输出以及电网电压在两相旋转坐标系下的数值被送入非线性解耦模块，进而得到两相旋转坐标系下的整流模块交流侧电压指令值。两相旋转坐标系下的整流模块交流侧电压指令值经过 Park 逆变换后送入 SVPWM 模块，控制开关管通断。下文将对控制系统中的各个模块进行阐述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE3cBIv1QuFDj7besI3w4YAGVwx9BYQf3dOdicSxK2ODN2zyHn2yicxRHw/640?wx_fmt=png&from=appmsg)

3.1 锁相环

锁相环对于整流模块来说至关重要，无论是控制系统的 Park 变换还是 Park 逆变换，均需要锁相环提供相位信息。利用锁相环提供的相位信息，可以方便地实现电网电压电流同相位。

3.1.1 锁相环基本原理

设三相对称电网电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaENqkzTeiaJPlWeqANklpE2T7FfVK60CKTcIaJaMyrRQTu5QHj6qlBDLQ/640?wx_fmt=png&from=appmsg)

其中， Em 为电网电压幅值， ω为电网电压角频率。

三相对称电网电压经过 Clark 变换和 Park 变换后得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaELjop2enpsfJ4MlPBKWRdKpuD4Oflb2OxBMP8tgLE9cQ1KNHSQWQsCw/640?wx_fmt=png&from=appmsg)

从公式（3-2）中可以看出，当θ=ωt+φ 时， ed=Em ， e q=0 。借助于这一特性，可以锁定 a 相电网电压相位角θ=ωt+φ ，并同时确定 b 相和 c 相电网电压相位角。

3.1.2 锁相环的实现方法

实际应用过程中，锁相环可以通过图 3-2 所示的方法实现。在图 3-2 中，PI 调节器的输出作为角频率，角频率积分后得到相位角。当控制器得到的相位角与 a 相电网电压相位角不相等时，e q ≠ 0 ，PI 调节器持续作用直到 e q = 0 。根据公式（3-2）知，此时控制器得到的相位角即为 a 相电网电压相位角θ=ωt+φ 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEw6ZkTGw1bNmQLXXJuaL8dG2c9miaSZIic6vUibgzbNzu6JC1hVMCneVjA/640?wx_fmt=png&from=appmsg)

需要注意的是，当采用数字信号处理器进行软件锁相时，为了确保相位角在数字信号处理器的表示范围内，应该将相位角的范围限制在 0 到 2π范围内。实际应用时，由于电网电压非理想信号，且采样过程中存在误差，因此随着电压等级的提高，在低压调试下得到的 PI 控制器的参数应该相应减少，以免造成相位振荡。振荡的相位将导致后续的计算结果出现严重错误，严重时可能造成事故的发生。

3.2 空间矢量脉冲宽度调制 SVPWM

空间矢量脉冲宽度调制 SVPWM 起源于电机学，当电机三相定子中流过对称的三相电流，将产生和电流同频的旋转圆形磁通矢量。空间矢量脉冲宽度调制 SVPWM 的基本思想是利用三相整流模块或者逆变器的八个开关状态去逼近电机三相对称电流产生的旋转圆形磁通。电机的定子可以视作理想的电感，根据电感的特性有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEQ52NpsCBUnDXBSzAhLsG56pjMBlRBJK2kSMia5aRLF21GZSn62qDBfw/640?wx_fmt=png&from=appmsg)

当时间间隔足够小时，上式可以等效为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEk0ykIyRrQE9JKYiavAsMtU84DFHTDAHia6xlxbiaGEs1Vv4kOx2pMoUvg/640?wx_fmt=png&from=appmsg)

即只要保证电压与时间的乘积相等，则电感电流的变化量相同。因此只要时间间隔足够小，离散的电压矢量与时间的乘积与连续电压矢量与时间的乘积近似相等，则电感电流的变化量近似相同，离散电压矢量作用时产生的旋转圆形磁场与连续电压矢量作用时产生的旋转圆形磁场等效。这就是伏秒平衡原理，空间矢量脉冲宽度调制 SVPWM 正是基于这一原理。

3.2.1 空间矢量的八个状态

根据第二章的分析可知，整流模块每相桥臂均有两种开关状态，三相的开关状态共有 2³=8 种。每种开关状态均对应一个空间电压矢量，且所有的空间电压矢量均有统一的表达形式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaENl6DibCliaKdJbqLHf9cxKJOlHvez12y3jgLEy9RfJZCP780ocib1KjoQ/640?wx_fmt=png&from=appmsg)

整流模块交流侧输入的三相交流电压如公式（3-6）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE0baq0fKKic3gau6AIw89V7p6nibyuqzOwUPQLZlP8m19Arq7fh9hbsUQ/640?wx_fmt=png&from=appmsg)

对于每一种开关状态，均可由公式（3-6）得到对应的整流模块三相输入电压，得到整流模块的三相输入电压后均可以通过公式（3-5）得到对应的空间电压矢量。即每一种开关状态对应于一个空间电压矢量。为了方便后续研究，本文先推导出 8 个开关状态与空间矢量的对应关系。限于篇幅，本文以开关状态（100）为例阐述推导过程。开关状态（100）对应的整流模块三相输入电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEEibxSR145u5XIBdLeGYRFU0N61mPHD3mmS8yFrB2eA6YZiaoTJw5YKfQ/640?wx_fmt=png&from=appmsg)

综合公式（3-5）和公式（3-7），可以得出开关状态（100）对应的空间电压矢量为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaExicxcJLvDGt1icickSn1N6QGyTlw4FOGcp2JzhDyBUtU4LLujBH8x6e7A/640?wx_fmt=png&from=appmsg)

按照相同的方法，可以得出其余开关状态及其对应的整流模块输入电压和空间电压矢量如表 3-1 所示。从表中可以看出，8 个开关状态对应 7 个空间电压矢量，开关状态（000）和（111）对应的空间电压矢量相同，其余的 6 个开关状态对应于不同的空间电压矢量。在整流模块的控制系统中，当控制系统得到整流模块输入的电压矢量指令值之后，就利用表 3-1 所示的矢量去等效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEUgVcIpC6AEsibg7jo02kZg9ibBgeleAzAMck26iaibjqWUS6dwevR96mCQ/640?wx_fmt=png&from=appmsg)

3.2.2 空间矢量的等效合成

在高频开关状况下，采样周期足够小，满足伏秒平衡原理应用的要求。如果控制系统得到的整流模块输入空间电压矢量为Vref ，则可以根据伏秒平衡原理求出每个开关状态作用的时间，进而调节数字信号处理器PWM模块脉冲信号的占空比控制开关管的通断，从而使整流模块的输入电压跟踪空间电压矢量Vref 。

对于两电平电压源型整流器或者逆变器来说，8 个空间电压矢量在平面上构成一张空间矢量图，如图 3-3 所示。每个空间电压矢量均与相邻的空间电压矢量间隔 60°。为了减少开关切换过程中的开关损耗，每次应选择距离空间电压矢量指令值最近的空间电压矢量去等效。8 个空间电压矢量图将平面划分为 6 个区域，每个区域内，用于合成空间电压矢量指令值的空间电压矢量不同，每个扇区的空间电压矢量切换顺序也不相同，下文将针对六个扇区一一阐述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE3qCiaAdQzznJ8hH5zUjibmotNChnWzuPnG11sO8k0z5W4GMUAhAF3V5A/640?wx_fmt=png&from=appmsg)

  
根据公式（3-10），可以解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEGwQxJzQIdlFVE2cXgXQrm9dKsQ0UK33wBNKOJghqjaNE227wuic2UyQ/640?wx_fmt=png&from=appmsg)

采用七段法调制法时，第一扇区内的开关状态作用顺序以及作用时间 t 如表 3-2 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEogJ6C2GXNDLIOxTWKRLMUhicFTMickVupz3MY4JfWZo2ULGv6bS1PlIg/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEEzKJdwA10mkENV8aMsIuLj3uJI0MwFAFZG6G4hibkibzW9HMlGfiaeicKg/640?wx_fmt=png&from=appmsg)

根据公式（3-13），解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEyiaCkVzcwF4AHLhLpxtwNdrC5eztpb5myYS85YoVw1tEpLpU7fxON1w/640?wx_fmt=png&from=appmsg)

采用七段调制法时，第二扇区内的开关状态作用顺序以及作用时间 t 为表 3-3 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE1uLygFXZyCFNry264rx0D39z4lNP5icFSZxriayiaRYYIVdkjauRZ1bdw/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEthbboR3xNKeFzCUzOQiabuTap8kBser8ETMqhmvNlf52JcfcCtZr42g/640?wx_fmt=png&from=appmsg)

根据公式（3-16），解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEFARb7nauPEK1MygFvw5DpfQOTBQKCl6HUUHicoqK3NMZWRnYRLVvibCg/640?wx_fmt=png&from=appmsg)

采用七段调制法时，第三扇区内的开关状态作用顺序以及作用时间 t 为表 3-4 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEf9voaFiaUKN6bAfVN7HH7almRoCSISBoBRcibnOjesGh6ibayBTaQiapLA/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEHBZ8MDetyvWx4Fh36Stor2kDytB2CYophVXxiajK9elwRRNT0YF0YXg/640?wx_fmt=png&from=appmsg)

根据公式（3-19）可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEKZLDYavB32bhagljrBUr67cwPjmy3Vu9YwSq8lLGsJRh3CGxuy3Ceg/640?wx_fmt=png&from=appmsg)

采用七段调制法时，第四扇区内的开关状态作用顺序以及作用时间 t 为表 3-5 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE7L7GRj1mRRwvicXibibKzkP24GMIC3d3RcB1Pv1JYdG5jl7Jfgib95uHCg/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEB3jqqnwAKfg88YhNv9XjGBgWnSTCWwkibH6jRjfuj1Spx4VicQDpGDrg/640?wx_fmt=png&from=appmsg)

根据公式（3-22）可以得到公式（3-23）：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEaZ7UGEB5Lqhucf98z9N9C5QRyYhBhpJqyVJ5iaAibhxyeAGKLvEngibicg/640?wx_fmt=png&from=appmsg)

采用七段调制法时，第五扇区内的开关状态作用顺序以及作用时间 t 为表 3-6 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEsy9oC30ZSj7FegosSMTK26Rydp8NkSCUicDrlRZgQtuJrtcpSibszLrQ/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEBZ6sPHr4n0ar0bPW7uakIPgic5YkFEQzziaWx3ufqkq32BhjeXumBq6Q/640?wx_fmt=png&from=appmsg)

采用七段调制法时，第六扇区内的开关状态作用顺序以及作用时间 t 为表 3-7 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEuZskibSnYE3raibsL4arbNoWaRUXkYPiaiaPRV2PIztAibHedLARQDh9I2w/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE4jHKwvntibDoERrvbBNCyeqrgQWDoCnk34z6ekX4cc3VDSmVwGzxjnw/640?wx_fmt=png&from=appmsg)

以上分别推导了空间电压矢量指令值落入六个扇区内，每个空间矢量或开关状态作用的时间以及开关状态的作用顺序。经过观察发现：开关状态作用时间由三项组合而成。

因此，为简化表示，定义三个中间变量：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEtBtKcasmSOU9wT1FN8ZWbYZCuYaXEdPbIg2eRymbLj33UTia8AbxuVw/640?wx_fmt=png&from=appmsg)

则开关状态作用时间的计算结果可以统一表示在表 3-8 内：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEzBSfte3w4dfnz4GQAkxt0qZMMAmI06zzvaRqqecPnpfHK5QHRT93Wg/640?wx_fmt=png&from=appmsg)

同样，定义三个中间变量：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE5CdC34tknaOK5dHg88iadibT4Npy5Zn0Mot1xjnMCicTk91JDaPfmhQ3Q/640?wx_fmt=png&from=appmsg)

当采用增减计数模式产生双边对称 PWM 波形时，a、b、c 三相比较寄存器的值占开关周期的比值可以统一表示为表 3-9 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEo8MWKCnOw6jhUjKK9zyl0UxScat1icgq7vkDqKNdxV93IVHvJluc5fg/640?wx_fmt=png&from=appmsg)

3.3 电流内环控制器设计

本文设计的控制系统包含电压外环控制器和电流内环控制器，电压外环控制器的输出作为电流内环控制器的 d 轴电流指令值。为了实现整流模块的电压电流同相位，使整流模块工作在单位功率因数状态下，q 轴电流指令值为 0。电流内环的参数对于电流响应能否快速跟踪指令电流、超调量大小、静态误差都有着重要影响。参数设计不良，系统将无法工作甚至出现事故。良好的参数设计可以在保证电流内环响应速度的同时降低电流响应的超调量，从而降低对电感、开关器件的要求。下面，本文将详细讨论电流内环参数设计方法。

根据两相旋转直角坐标系下数学模型，存在如下关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE28qDQBtu3tooD3liaianMMIOFtdESgIMYwOrmWt0ELf9FOrp9ljB2fkw/640?wx_fmt=png&from=appmsg)

其中， SdVdc= Vd ， SqVdc= Vq ，分别为整流模块输入端的 d、q 轴电压，可以通过三相静止坐标系下的表达式经过 Clark 和 Park 变换得到，具体的变换过程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEEia8yr9gBoGfzDDuQCufJkzA75GT4WG8h1XseiaqzJf21LM0FDVbLurQ/640?wx_fmt=png&from=appmsg)

综合公式（3-31）-（3-33），得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEv1j7uINvKbtEUs9YRfpdDtaXB4B3KxsQXh0QicYIIZVia6A3bKesc62Q/640?wx_fmt=png&from=appmsg)

公式（3-34）中，第一个方程为 d 轴电流状态方程，第二个方程为 q 轴电流状态方程。从公式可以看出，d 轴电流状态方程中含有关于 q 轴电流的项 Liq ，q 轴电流状态方程中含有关于 d 轴电流的项Lid ，即 d 轴变量和 q 轴变量相互耦合。相互耦合的变量使得设计 d 轴控制器的时候不得不考虑 q 轴电流对 d 轴电流的影响，设计 q 轴电流控制器的时候不得不考虑 d 轴电流对 q 轴电流的影响。为了解决这个问题，可以令：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEiblucvQwx26V88a5DAbuLDmvFpyc9Ca3vQMBXoBLJAzwsmAaChyo48Q/640?wx_fmt=png&from=appmsg)

将公式（3-35）代入公式（3-34）得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE9rEbUGPibYzObCpSDx1FxHBMpN8VqtKrQbmG2OCNibrvHXXNBSYBI9jQ/640?wx_fmt=png&from=appmsg)

将公式（3-36）写成传递函数形式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEiac4lM8TlMj0jrmyIugU6hcqsRqGM4XXVG8WYmwBYvnvYL0lIrvsItA/640?wx_fmt=png&from=appmsg)

dq 轴对应的控制结构图分别如图 3-4 和图 3-5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE1qAdwfhbOXE7L4leoFP5ok9d4uJvv07wU8rKCV9M54ttsIicusjURrg/640?wx_fmt=png&from=appmsg)

考虑数字控制系统有一个采样周期的延迟，同时数字控制系统在下一个周期输出的波形中心相对于周期无穷小的连续系统有半个周期的延迟。因此，设计控制器参数时，应该将延迟考虑进去。由于 d 轴控制器和 q 轴控制器结构相同，下面仅以 d 轴控制器为例进行分析。将上述两个延迟考虑进去后，d 轴控制器结构图变为图 3-6 所示:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaENiaBGI76XOCkYvialaUfswj0V4nvwPm9J2tYibvbN8KHDgD2ySUUPJ4Ug/640?wx_fmt=png&from=appmsg)

由于采样周期很小，因此存在以下近似关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEohX8G1guJxEIbbnrwiaGqPicxdogTM5XJmrmeicd1LSAyTAuCVa92O6dA/640?wx_fmt=png&from=appmsg)

利用公式（3-38）可以简化控制器，简化后的 d 轴控制器结构图如图 3-7 所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEQ4UFQ8I2RW0h8XPNkTVCxe8ze2Qiat1Xyk34xWxYssBT5MUTgTXQ18g/640?wx_fmt=png&from=appmsg)

为了获得较快的动态响应速度，可以令 PI 控制器的零点与控制对象的极点互相抵消，为此需要满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEsNHHOgbwNj5tTicbEljvDfBUM0Zpo5aWrhrwyHGvCNibz99vWl2NtXJQ/640?wx_fmt=png&from=appmsg)

零极点相互抵消后的闭环系统闭环传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEBw3hAms0PmNacUQtBp5Y30tJp4D6huK4CDeibItgIefpGoR6e01PhsQ/640?wx_fmt=png&from=appmsg)

为了使系统获得较好的动态性能，一般使系统的阻尼比为 0.4-0.8,，本文中令系统阻尼比为 0.5，则可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEYbg9I9opNMn0rnVZT1Y3icMcFNypAPU77R6cViawq8FkzqQZoWZAWNicA/640?wx_fmt=png&from=appmsg)

值得指出的是：实际的控制系统参数受多种因素的影响，以上计算结果作为一种参考，不能直接应用于控制系统中。在参数调试的过程中，应该从低压到高压调试。调试过程中，应该按照一定的步长依次增大 KiP ，直到 KiP 值满足既定的响应指标，然后逐渐增大 KiI 最终使其动态响应指标得到满足。试验过程中应反复尝试，寻找最佳参数。

3.4 电压外环控制器设计

电压外环控制器具有稳定整流模块直流侧电压的功能。当直流侧电容电压发生变化时，通过调节电压外环 PI 控制器的输出，进而调整电流内环 d 轴电流指令值，从而维持直流侧电容电压稳定。当电压外环控制器刚刚切入时，由于直流侧电容电压与指令值之间的电压差过大，将导致电压外环 PI 控制器的输出过大，即电流内环 d 轴电流指令值过大。过大的电压外环输出将导致电流内环的输入误差过大，从而导致电流内环输出过大，通过 SVPWM 环节后，交流侧电流将快速上升。当直流侧电容电压升到直流侧电容电压附近时，电压外环控制器的输入减少。但是由于积分环节的延迟效应以及器件动作存在延迟，不能及时降低交流侧输入电流，从而导致电压外环和电流内环产生过大的超调。直流侧电容电压的过大超调，严重情况下可以损坏直流侧电容，甚至发生爆炸。交流侧电流的过大超调严重情况下可能损坏采样电路的传感器，使得交流侧电感饱和，进而烧坏设备，同时还可能使保护装置误动作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEemvJrys4R4mFTIjCSUsAS1Gq93EzxEerJh2S7qo1ZKe4bGGXibEeP8Q/640?wx_fmt=png&from=appmsg)

如图 3-8 和图 3-9 所示，分别没有软启动时，电网线电压为 150V，电流内环 d 轴电流指令值为 6A，电流内环 KiP=4 ， K iI=0.5 ，直流侧负载电阻为 78 欧时，直流侧电容电压的响应波形和交流电流响应波形。由于程序具有过压过流保护功能，交流侧电流在达到 20A 阈值之后开关管全部关断，交流电流迅速下降，直流侧电容电压也迅速下降，整流模块恢复为不可控状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEPLv2Pq0vkAWMYSBV41LRN3dRwRJ3fAl2Ukezy5NlId3icKwlFxgKrOA/640?wx_fmt=png&from=appmsg)

从实验结果可以看出，整流模块启动过程中的直流电压超调过大和交流电流超调过大是不容忽视的问题。在保证控制系统响应速度的前提下，合理的超调既保证了控制系统的响应速度又不会对硬件造成伤害，延长硬件的使用寿命。为了减少直流侧电容电压和交流侧电流的过大超调量，使交流侧电流和直流侧电容电压平稳快速跟踪指令电压值，本文采用了改进型 PI 控制器，如公式（3-42）所示。在整流模块启动阶段，采用积分环节逐渐增加整流模块的指令电流值，当直流侧电容电压在指令值附近时切入常规 PI 控制器，使直流侧电容电压平稳达到指令值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaESqttS43yI7zPmneu64KLiaia8QlAiaXe8mXj2jHNTLa0frxaMXXpa8aPQ/640?wx_fmt=png&from=appmsg)

其中， t0 为 PI 控制器切换的时刻，切换时刻由设定的误差限 Emax 决定。当直流电压指令值V dcref 与实际直流侧电压Vdc 之间的电压差 e(t) 大于误差限 Emax 时，控制器采用带初始值 y 0 的积分控制，控制器的初始输出值 y 0 可以加速跟踪；当额定电压V dcref 与实际直流侧电压V dc 之间的电压差 e(t) 小于等于误差限 Emax 时，控制器采用 PI 控制。为了确保整流模块的输出电流不出现过大的情况，还应该限制电压外环控制器的输出。电压外环的输出限幅值为Ymax ，Ymax 可以限定为额定 d 轴电流的(1.1-1.2)倍。

由于采用了积分环节逐渐增加电流内环指令电流值，电流内环控制器能较好地跟踪控制器的输入。当电压外环的输出达到输出限Ymax 时候，直流侧输出电压降迅速逼近额定值，可以认为此时为控制器切换的时刻。因此如果希望直流侧电压上升的时间为 t r ，那么有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaESYoEwwJMLltRCujuWjhlS2XkTicWdDDkhwiaKO8QeNiaTiafQF2Wjljjicg/640?wx_fmt=png&from=appmsg)

从而可以求出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEIVOHu1v2ctneP0w09jKjI3NBZic9p3LWljfXEu6RRSyY3GgJvU3bXzg/640?wx_fmt=png&from=appmsg)

控制器切换后进入常规 PI 控制器状态，为保证系统正常稳定工作，比例系数 K P 不宜过大。比例系数过大，将导致电流内环 d 轴电流指令值过快下降，进而导致输出直流电压下降到V dcref - E max 以下。此后控制器切换到积分环节，由于积分环节的响应速度慢，需要很长的时间，直流输出电压才能再次上升到额定值附近，且由于比例系数 K P 依然过大，直流侧输出电压上升到额定值附近后将再次进入积分控制环节。如此，将导致直流侧输出电压不停下降上升，直流侧输出电压波动较大。

控制器切换时刻，可以认为 PI 控制器输出达到饱和。此时整流模块以恒定功率对直流侧电容和电阻供电。由于直流侧电容电压与额定电压的误差很小，因此可以用一个恒流源模型对直流侧电容电压变化进行近似等效分析，直流侧恒流源等效模型如图 3-10所示，直流侧恒流源等效模型可以进一步转换为图 3-11 所示的恒压源等效模型。

根据一阶电路知识，可以知道此一阶电路的响应为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEzoibJlNre1Gj2HfTKrO7Ty3oicbOSNzhX336terenO3foSw0Hg1CjPwg/640?wx_fmt=png&from=appmsg)

式中，Vdc 为直流侧瞬态电压值，Vdc0 为 PI 控制器切换时刻的直流侧电压值，可以近似认为是V dcref -Emax ，Is 为等效恒流源的数值，RL 为直流负载电阻，C 为直流侧电容值。

直流侧电容的最终电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEvAlFX3jxxN0enUeVt14icU1ia8uyBeTA13P3O29dDgibdBVhJMqUWmsfg/640?wx_fmt=png&from=appmsg)

因此公式（3-45）可以等效为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEOBdvOqAyRlQpRHnTjMHsVjGiaAsRVCaLkGV1FDIFJXB5yJHyydKpkcQ/640?wx_fmt=png&from=appmsg)

根据公式（3-47）可以得到直流侧指令电压与实际电压之差 e(t) ：  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaETjhsIiciark5uszyNtJqPGmKupAUX6WkeVSPuQ6bQ9DqhDstd8RhVMTA/640?wx_fmt=png&from=appmsg)

公式（3-53）中， y(k) 为 PI 控制器本次的输出， y(k-1)为 PI 控制器上一次的输出， e(k )为本次的输入误差， e(k-1) 为上一次的输入误差。

为了简化分析，仅考虑比例环节，根据增量式算法，由公式（3-53）可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaELEgCG72btItDibROZP0dw6kgGCqVrsrCMddj6iavwyicHCiaic8xXkeNOZQ/640?wx_fmt=png&from=appmsg)

根据数字 PI 控制器的增量式算法，结合公式（3-48）、公式（3-54），可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEMhrNfickyK70e8K0EY6oDN4pNxS4GcGY400KW8YSgJMnwHE6L3UxOjQ/640?wx_fmt=png&from=appmsg)

根据公式（3-56）和公式（3-57）解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEeGjOo2UOoNAP5QhggOkI4TkS0QGEEPjVg0iaM9URxIUSdRMud4EDN1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEibyKqCcqj7zH9GBDEaKceVUHgqsTKrNzlcf4DuicORibrEJW9SCB26ArQ/640?wx_fmt=png&from=appmsg)

同样值得指出的是：以上计算结果仅作为参考。实际应用中，应逐步调试。

3.5 本章小结

本章主要阐述了两电平电压源型整流模块的电网电压定向双 PI 矢量控制系统，分别介绍了锁相环、空间矢量脉冲宽度调制 SVPWM、电流内环控制器设计、电压外环控制器设计，针对整流模块在启动过程中存在的直流电压超调和交流电流超调问题，提出了一种改进型 PI 控制器，并且讲述了如何设计改进型 PI 控制器的参数。

第四章 系统设计与实现

本章将阐述不间断电源整流模块的系统设计与实现，包含主电路的设计、采样电路的设计、驱动电路的设计以及软件系统的设计。基于本文搭建的硬件系统以及软件系统，实验部分将验证本文提出的改进型 PI 控制器以及交流电感选型方法的正确性及有效性，并对 SiC MOSFET 整流模块进行初步的实验研究。

本文设计的整流模块技术规格如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEwdhibibvwU18Ld7HtWdRctN2xqC2DDA5Wm3ibohm722pqBnCA6fPxibYdg/640?wx_fmt=png&from=appmsg)

4.1 硬件系统设计

硬件设计部分包括主电路设计、采样电路设计以及驱动电路设计部分。三者相辅相成，共同构成整流模块的硬件系统。任何一个环节在设计中出现问题，都将导致系统不能正常工作。同时，硬件系统的修改费时费力，应该尽量在设计的时候避免出现错误。下面将阐述硬件系统的各个部分如何设计。

4.1.1 主电路设计

不间断电源整流模块主电路部分包括交流电感、开关管（IGBT 或者 MOSFET）、直流电容。主电路器件的选取不仅仅关系到电路能否工作，还关系到电路的工作性能以及经济效益。因此，下文将详细讨论如何选取开关管、交流电感和直流电容。

（1）开关管的选取

开关管的选择应该考虑电压等级和电流等级，其次还应该考虑开关速度、开关损耗等因素。本文设计的整流模块功率为 5kW，交流输入电压为 380V 三相工频交流电压，直流侧输出电压为 600V。考虑到电压冲击等因素，留有一定裕量，因此选择 1200V 耐压的开关管。另外，取功率因数η=95% ，根据功率守恒原理可以知道：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEMOB0sHg7QX1gwOdCZCNeKx7cKeHeLeErFdECJCqNokicicKpXcbH0C7Q/640?wx_fmt=png&from=appmsg)

公式（4-1）中， Irms 为交流侧电流有效值，Urms 为电网电压有效值。对于电流同样应该留有一定的裕量，以保证电路在恶劣情况下能安全正常工作。本文根据实验室现有器件，选择的IGBT为西门康公司的 SKM100GB128D，选择的SiC MOSFET 为罗姆公司的 SCH2080KE。

（2）电感的选择

整流模块的电感主要起到能量交换、抑制电流谐波使电流波形平滑的功能。电感选取得当，系统的响应速度快、稳定性能好。电感的选取和选取的控制算法有关，不同的控制方法对于电感的要求不同。从稳态角度考虑，电感的取值应该满足设定的谐波要求；从瞬态角度考虑，电感的选取应该使控制系统可以快速跟踪指定的有功电流和无功电流。本文将从整流模块稳态矢量关系角度以及电流谐波含量的角度推导采用 SVPWM 的整流模块电感的取值范围。

忽略电感电阻以及线路电阻，开关管视为理想开关，在稳态时，整流模块的稳态矢量关系如图 4-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE9soWWHtfz9biahNYMVst09ArPgJTfrJbyibKMC6la6RLDG8JNonIrneg/640?wx_fmt=png&from=appmsg)

由于整流模块的相电压峰值与直流侧输出电压之间的关系，稳态时存在以下关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEHDrXxuY3ibf8KaxwibOwjPseFbGyxVjjrOBZ5MeUc7760ibO6bWbT9J0g/640?wx_fmt=png&from=appmsg)

上述稳态矢量关系限制了交流侧电感的上限值。除此之外，整流模块在稳态时还应满足电流谐波要求。对于三相三线制整流模块，由于三相对称，因此只需选择其中一项对其进行分析即可。三相三线制整流模块的单相等效模型如图 4-2 所示。其中， ea 为 a相电网电压，uAN 为整流模块 A 相输入电势对电网电压中性点的电压值。可以看出，如果知道了电压 uAN 中的谐波含量即可计算出电流中的谐波含量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEd38dyvhHm2qAicJlTvu20y8XfUsGj0nTg2sF8xCQk7HQ8mj7BJLZ1mQ/640?wx_fmt=png&from=appmsg)

将电网电压视为理想电压源，即电网电压中不含有谐波。对于谐波来说，电网电压源被短路，由此可以得到整流模块的单相谐波模型如图 4-3 所示。对于 n 次电压谐波，其产生的 n 次电流谐波有效值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEQjsuRGaNKia0rZ1UurbU6Nia1DWwIpSJ3HCicZMLOlnNOkbSoCLbetOMg/640?wx_fmt=png&from=appmsg)

值得指出的是：理论上可以根据公式（4-6）计算出电感的范围，但是实际上无法确定整流模块的交流侧电压谐波成分，因此无法根据公式（4-6）确定交流侧电感取值范围。但是可以确定在某个特定开关周期内电流波形，如果能够找到总谐波电流畸变率和某个特定开关周期内电流波形的关系，便能确定交流侧电感的取值范围。为此，作以下近似处理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEiaNKyFq4sIB4iayibwuD35Dx9hbF6DXX9AyjCrARnRLghDiaMqoYiabhq1A/640?wx_fmt=png&from=appmsg)

由于空间矢量图中成中心对称的两个开关状态对应于同一相电压的两个大小相等符号相反的数值，如开关状态 001 对应于整流模块 a 相电压 -1/ (3Vdc) ，而开关状态 110对应于整流模块 a 相电压1/ (3Vdc) 。因此可以近似认为，整流模块的交流电压为奇函数。

根据傅里叶级数收敛定理可知，奇函数可以分解为傅里叶级数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEHUCq6Vn2q7xzIeN0sAMBvtx4YX4TBsUoRobLgec8EUN3XjDeAAW6kw/640?wx_fmt=png&from=appmsg)

从公式（4-10）可以看出整流模块各次电压分量的初始相位相同，且与电网电压的初始相位相同，而电网电压的相位与电网电流的相位相同，因此可以推出整流模块 a 相电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE0ictYxT6bNS4tWkbCFg1yayuicpz9avEyx0TVdkPiaDPGn3eq1GhN84zA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEicAk5xrhvibpn7h4Ba7FqicsR25TUzRsQjcibdRE78IEM2UVJXstBXz7cQ/640?wx_fmt=png&from=appmsg)

为此，我们对基波电流过零点时的电流波形进行分析。由于整流模块运行在单位功率因数状态下，因此当电压过零点时，电流也过零点。当相位角为零时，此时直角坐标系下整流模块交流侧电压指令值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEUfUzvxfmk5saPyn5p4NQUjsx9q76FxwVUfSqLnEDlxn3K9y6icBMgyg/640?wx_fmt=png&from=appmsg)

进而可以推出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEw9E8rpuZHntzaZdd6qFofLicYobYje9SzMpwibYoD7JoCftw7kcwrhZQ/640?wx_fmt=png&from=appmsg)

根据第三章所述，电流过零点时，空间矢量指令值落在第五扇区内。在第五扇区内，电流过零点的一个开关周期\[-Ts/ 2, Ts/ 2\]内，各个开关状态作用时间 t ，以及对应的 a 相电感上的电压 uLa 和电流变化趋势如表 4-1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEhiaH4bgGQCw0pCIWiayO3ajEUdibVzzE1SS4sRcCfJbPuDfhvDA5mw3cw/640?wx_fmt=png&from=appmsg)

表 4-1 中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEzqOvs26yu3ydTPBWl4gM3OEM6l3UjYgBX3eTbicYlgvonVQalLZ15GA/640?wx_fmt=png&from=appmsg)

观察表 4-1 可知，一个开关周期内，a 相电感电压与时间乘积之和为 0。根据伏秒平衡原理，在一个开关周期内，电流变化量为 0。且由于基波电流为 0，电流每个时间段内上升的数值和下降的数值相等，因此可以得出\[-Ts /2, Ts/ 2\]区间内电流波形如图 4-4所示。

因此我们可以近似认为电流在基波电流过零点的一个开关周期内，电流的最大值即为谐波电流的最大值，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE6sNiaU3zWF7l4p8rYGibAVFtKWNvsRMibWP5EthSGgZvFQnFPMdU6xdpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEXmLTVicjMcHwIDVmBIGRW2L1UnBeYE7EbWh9W0esGSkEM0nI0O4UPyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEib4Oms6um5yWwLX78Gn4hsJuF0ktRVoKI2gtGLyy3YWvTgjJq3gYGQA/640?wx_fmt=png&from=appmsg)

表4-2中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE0vqZswic4GjyKiaibCZKSrjxXHn9jtgYOXMUicquEwuw0RibOeIImXXjzNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEIcVUWar3GfApdYDVdvE7rTdrmda8qjK6iaAOyOw5cgBEjZ7gCuzv73w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaERRuDKZJAeSnh0nCWCK6SDG3mNS2jITYLHSeYdEApNbuoUNibjGH3VuQ/640?wx_fmt=png&from=appmsg)

公式（4-35）确定了电感的取值范围，实际应用时，应在确定的参数范围内，按照一定步长选取一组数据进行仿真验证。在满足要求的情况下，应该尽量选择较小的电感，以减小设备的体积。本文分别对电感为 2mH、3mH、4mH 以及 5mH 进行了仿真，得到的电流谐波含量依次为 10.82%、8.13%、5.52%以及 4.44%，因此本文最终选择的电感值为 5mH。

(3) 直流侧电容的设计

整流模块直流侧电容是电网与直流侧负载交换能量的中介。稳态条件下，直流侧电压保持不变。若直流侧电压超过额定值，控制环将减少交流侧输入电流以保持输出电压恒定。若直流侧电压低于额定值，控制环将增加交流侧输入电流以维持输出电压恒定。直流侧电容小，控制系统响应速度快，直流侧电压抗干扰性弱；直流侧电容大，控制系统响应速度慢，直流侧电压抗干扰性强。设计电容的时候，可以从抗干扰性和瞬态响应速度两方面考虑，也可以仅仅从瞬态响应速度方面考虑。降低瞬态响应速度，则直流侧电容电压的抗干扰性相应地增强了。

从瞬态响应速度考虑，可以得到电容需要满足的条件为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEkezhnqOr9NyUB7DwmhgAMlHPiazIBhC5eNPP2trghyd1mu5EG6GXmFg/640?wx_fmt=png&from=appmsg)

公式（4-36）中，tr 为直流侧电压从初始电压Vd0 上升到额定直流电压Vdcref 的最大时间，RL 为直流侧负载电阻，V0 为带负载时的稳态电压，Idm 为最大的直流侧输入电流。值得指出的是，以上公式计算的结果仅仅是理论计算结果。在实验前，应该利用仿真软件加以验证，以确定满足设计要求的最佳参数。

4.1.2 采样电路设计

本文采用的数字信号处理器 TMS320F28335 采样引脚允许的输入电压为0-3V，而无论是三相交流电压还是直流电压都高达几百伏，因此需要将待采样的电压信号进行比例缩放、电平抬升之后才能送入 DSP 处理。对于电流信号，需要将其转换为 0-3V之间的电压信号才能送入DSP处理，因此同样需要设计采样电路。采样电路作为数字信号处理器执行计算的数据来源，其采样精度对于整个控制系统的影响至关重要。采样电路采样精度差或者抗干扰能力差都可能导致严重的计算偏差，从而对设备造成不可逆的损伤。

以下详细介绍本文设计的采样电路。

为保证采样精度，三相电压采样电路采用了北京森社电子的精度为 1%、额定输入为 10V-500V 的电压传感器 CHV-25P，直流电压采样电路采用了北京森社电子精度为 1%、额定输入为 50V-1200V 的电压传感器 CHV-50P，三相电流采样电路采用了北京森社电子的精度为 0.5%、额定电流为 50A 的电流传感器 LA-50P，运算放大器采用了德州仪器的高带宽低失真运算放大器 OPA2604AP。除此之外，包含功率电阻在内，所有的电阻均采用 0.1%的高精度电阻。

本文设计的三相电压采样电路如图 4-6 所示。由于是三相对称系统，因此仅需采样两相电压，故本文仅采用两个电压传感器。为了构造中性点，c 相用了一个 250 欧的电阻等效了电流传感器原边的电阻。为了确保精度，此电阻数值应根据实际测量为准。R6、C4 和 R16、C8 分别组成低通滤波器抑制高频噪声进入 DSP 的采样输入端，对于 50Hz的基波来说，其相位延迟为 3.95°，幅值衰减为原来的 99.76%。R4、C1 和 R14、C7 分别组成信号保持电路，起保持信号稳定的作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaENGsfSa6l7282qich1b6YsibcUqjib6UFVPS04XLaeExeMhsBVwyc8485g/640?wx_fmt=png&from=appmsg)

对于三相交流电压采样电路，不难得出以下关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaExg0Xqol75hFf1dZDCiaTLBS3810TIrgjWf1rEgqyMPjUkndwXbFdoqg/640?wx_fmt=png&from=appmsg)

其中 u ain\_ 、 ubin\_ 分别为 DSP 采样引脚的输入电压。一旦采样引脚电压超过了击穿电压 3.3V，瞬态抑制二极管 D1 和 D3 被击穿，内阻大大降低，从而保护 DSP 的采样引脚不被高压损坏；当 DSP 的采样引脚输入电压低于 0V 一个二极管导通电压时，瞬态抑制二极管导通将 DSP 采样引脚的输入电压限制在一定水平，从而保证 DSP 的采样引脚不被负压损坏。值得注意的是，在保证 DSP 采样引脚输入电压不超过 0-3V 的前提下，应尽量增大 DSP 采样引脚电压范围，以便进一步提高转换精度。

直流电压采样电路如图 4-7 所示。本文设计的直流电压为 600V，因此采用测量范围为 50V-1200V 的电压传感器 CHV-50P。考虑到 CHV-50P 的原边电阻为 500 欧，原副边匝数比为 5000:1000，不难推出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEqt8nwFeXPTYJsNahFVyGOaHHRjbWea54uStWmEFEQc8jSd40MiaZYdw/640?wx_fmt=png&from=appmsg)

三相电流采样电路如图 4-8 所示：考虑到原副边匝数比为 1:1000，不得得出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEkbAFWDuMzn6vdU7Sf0RA7p8DzJh4MWAVKcRqO0H0QlicsVOI4FEFiaCg/640?wx_fmt=png&from=appmsg)

需要指出的是，以上均为理论计算结果，实际使用时应根据测试结果对相关公式进行校正。

4.1.3 驱动电路设计

DSP 的 PWM 引脚输出电压低、电流小、驱动能力较弱，且不具备隔离功能。为防止短路造成事故，整流电路的三相上桥臂的三个开关管驱动需要与下桥臂的三个开关管驱动隔离，三个下桥臂可以供地。本文选用光耦隔离方案。此外，DSP 的 PWM 引脚不能直接用于驱动开关管通断，需要增加缓冲电路增强驱动能力。SiC MOSFET 开关速度快，在高频应用场合是应该选用低延迟器件，以发挥 SiC MOSFET 的性能。同时为了防止误导通，SiC MOSFET 应采用负压关断。针对 IGBT 与 SiC MOSFET 的不同特性，本文设计了两套驱动方案。

（1）IGBT 驱动电路设计

TMS320F28335 的 PWM 引脚可以承受的最大电流为 4mA，过大的电流将导致高低电平变化甚至可能烧坏 DSP，然而作为隔离光耦通常需要 10mA 左右的电流保证光耦副边快速导通，因此必须增加驱动增强电路才能驱动光耦正常工作。本文采用 TI 的SN74AC241N 作为驱动增强芯片，驱动增强电路如图 4-9 所示。SN74AC241N 的连续输出电路达到±50mA，完全满足需求。需要注意的是，为了确保上电或者断电时的高阻态，引脚 1 应该通过一个上拉电阻连接到 VCC，引脚 19 应该通过一个下拉电阻连接到 GND。同时，未经使用的引脚应该连接到高电平或者低电平，否则可能导致器件过多的输出错误或者振荡。关于具体使用方法以及器件的更多特性请参考器件手册。另外，为了提升 PWM 端口信号的抗干扰能力，应在每个 PWM 输出端接一个下拉电阻，且下拉电阻消耗的功率不应太大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEic3gia69baAxfI1LEicsiaXwYozhSBXFVxvia3mjGqSSWiaEQtp0w6DCVp1g/640?wx_fmt=png&from=appmsg)

驱动芯片采用北京落木源公司生产的 TX-K841L 驱动芯片，搭建的驱动电路如图4-10 所示。TX-K841L 是具有隔离功能的单管 IGBT 驱动芯片，可以驱动工作频率高达60kHz 的 1200V/300A IGBT。芯片内部集成了过流保护功能，能有效保护 IGBT。

SN74AC241 器件手册指出，在供电电压为 3V，输出电流为 12mA 时，SN74AC241最低输出电压为 2.46V，由此得出供电电压为 3.3V 时，最低输出电压约为 2.71V，TX-K841L 的 14 引脚与 15 引脚之间为光耦的原边，其压降为 1.6V，为了得到 10mA 左右的电流，电阻 R22 配置为 110 欧。TX-K841L 的电源可以采用输出为 24V 的开关电源或者电源模块，47μF 的电解电容起到稳定电压的作用，0.1μF 的瓷片电容起到滤波作用。Detect 引脚通过快恢复二极管与 IGBT 的集电极相连，起到过流保护的作用。一旦出现过流情况，Fault 引脚电压降低，光耦 TLP521 导通，VFB1 从高电平变为低电平，可以将此低电平信号通过或门处理后作为 PWM 引脚的错误触发信号，通过对 PWM 模块故障捕获子模块的配置可以保护 IGBT 不被过流损坏。9 脚和 10 脚之间连接电容用来配置盲区时间，默认不连接电容时盲区时间为 2.5μs，当短路信号大于盲区时间的时候，不管控制器是否有 PWM 输出，驱动器都对 IGBT 进行软关断。R23 为驱动门极电阻，阻值大小可以根据选用的 IGBT 手册上测试条件中的电阻选取，功率计算公式为 P o =QfsΔV ，其中 Q 为 IGBT 需要的驱动电荷，可以从相应的器件手册获取，fs 为开关频率，ΔV 为电压的门极驱动电压的变化量，计算得出的结果应该乘以一定的系数保证足够的裕量。R26 是泄放电阻，防止在未加驱动引线的情况下，米勒效应烧坏 IGBT。18V 双向稳压管用来抑制门极 G 和发射极 E 之间的过电压。电阻 R29 用来抑制干扰。更多更详细的内容，请参考 TX-K841L 产品手册。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEVBRsLD9UIRm4VklKKkSTcK66njZQ4svQwpfnSHhSk6zhghdEYqc3Vg/640?wx_fmt=png&from=appmsg)

为了验证本文搭建的驱动电路的可靠性，本文对驱动电路进行了测试。驱动电路的测试数据如图 4-11 和图 4-12 所示，CH1 和 CH2 的频率均设定为 10kHz，CH1 设定的占空比为 0.8367，即正频宽为 83.67 微秒，CH2 设定的占空比为 0.1033，即正频宽为 10.33微秒，死区时间设置为 3 微秒。从示波器测量得到的数据可以看出，无论是开关频率、正频宽还是死区，都达到了预设的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEvOXpSvGD455HjOosWfjvvRVLDt32IVrhJMibrWkDU5pGucDibY2GrL2A/640?wx_fmt=png&from=appmsg)

为了确保电路安全工作，驱动信号之间应该加死区，但是死区会使电压电流波形产生畸变，因此应该尽量在确保电路安全工作的前提下减少死区时间。通常根据以下公式计算死区时间 tdead ；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEXGjiaul9ozdbMB5CCLeW0uoSHmyzY69dnYebOyPzLaBoUcD0QuLmE1w/640?wx_fmt=png&from=appmsg)

公式（4-40）中， t D \_OFF\_MAX 为最大关断延迟时间， t D \_ON\_MIN 为最小开通延迟时间，t PDD\_MAX 为驱动器最大传输延迟时间 ， tPDD\_MIN 为驱动器最小传输延迟时间 。 查询SKM100GB128D 的技术手册可知，在测试条件下，SKM100GB128D 的典型开通延迟时间 t d(on) =175ns ，典型关断延迟时间为 t d(off) =370ns 。查询 TX-K841L 的技术手册可知，典型的上升延迟时间为 0.3μs，典型的下降延迟时间为 0.4μs，因此可以估算

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEic5lGNYTKyPMviaH4tsMWKkS1UaBwRbzd8aCtNOemFXfMNKUS8phiao4A/640?wx_fmt=png&from=appmsg)

以上仅为粗略计算出来的时间，考虑到一些复杂因素的影响，实际设置的死区应该大于此值以确保设备在极端恶劣的情况下电路也能正常工作。为此，本文在交流母线线电压为 110V、直流侧电阻负载为 78Ω、直流电压为 270V 的情况下，测试了死区时间分别为 1μs、1.5μs、2μs、2.5μs 情况下的开关情况，分别如图 4-13-4-16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE1cUTkowDnaDu9hKcB9rN6MrvxT6MLicNDrmKiayy6gFAOsvOx1nf2kOQ/640?wx_fmt=png&from=appmsg)

从测试数据可以看出，当死区时间分别为 1μs、1.5μs、2μs、2.5μs 时，IGBT 开关状态正常切换，没有出现直通的情况。为了保证设备在恶劣状态下的安全工作，同时又不会对电流波形造成大的影响，本文选择死区时间为 2μs。

（2）SiC MOSFET 驱动电路设计

由于 SiC MOSFET 相对 Si MOSFET 需要较高的驱动正压，同时为了防止误导通需要加负压，因此不能采用 Si MOSFET 驱动电路或者 IGBT 驱动电路驱动 SiC MOSFET，需要针对 SiC MOSFET 设计专门的驱动电路。本文设计的 SiC MOSFET 驱动电路如图4-17 所示。为了达到 SiC MOSFET 的最佳性能，本文采用的开通正压为 20V，关断负压为-4V。为了减少延迟时间，隔离光耦和驱动芯片应选择延迟较小的驱动芯片。本文选择的光耦为 6N137，驱动芯片为 IXDN609，IB1505LS 作为光耦的供电电源，QA01C 作为驱动的供电电源。关于电路的外围电路配置，请参考相关的器件手册。SiC MOSFET驱动电路中，TMS320F28335 输出的 PWM 信号经过 SN74AC241 增强后，送入隔离光耦 6N137。光耦的输出信号送入 IXDN609 进行放大之后作为 SiC MOSFET 的驱动信号。驱动信号并联泄放电阻，防止在未加驱动引线的情况下，米勒效应烧坏 SiC MOSFET。同时还要并联稳压管，本文稳压管放置在主电路中。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaETbzicibIl2U7U36g8bz3emFjHdydr7lAyGTd2gmMBlA829lwUMHx2WuQ/640?wx_fmt=png&from=appmsg)

为了验证本文设计的 SiC MOSFET 驱动是否可以正常工作，本文对其进行了测试。SiC MOSFET 驱动电路的测试波形如图 4-18 和图 4-19 所示，设置的正频宽分别为32.33μs 以及 65.67μs，设置的死区时间为 1μs。从测试数据可以看出，设计的驱动电路满足要求，达到了预期目标。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEk7WIC9U3X3rHvnaEew0OJrq3rZ6j7jibrFCr2lfibSqI6zmLyObyKYoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEmsP6a7x2XWMVMUY3Jqb7RE5lz21ugvTmSu5anwtuNbo32XzlEGJDXw/640?wx_fmt=png&from=appmsg)

4.2 软件系统设计

硬件是设备运行的基础，软件是控制系统的核心。最佳的硬件只有配合出色的软件，才能发挥设备的最佳性能。本文设计的整流模块的控制算法大部分在软件中执行。因此，软件设计的好坏直接关系到设备能不能工作、工作表现的好坏。同时，相对于硬件实现的功能来说，软件实现的功能更容易矫正优化，控制系统的参数整定也需要在反复的软件测试中确定。软件设计应该注意对硬件的保护，最大限度地减少在调试过程中对硬件的损害。

4.2.1 软件工作流程

本文设计的软件系统包含主程序和中断子程序两大部分，如图 4-20 和图 4-21 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaE88ZT1RibtCticpXRpF9h5NYFcc7hoP2bOCF2amq2jOLEreGqFJwgqk1Q/640?wx_fmt=png&from=appmsg)

主程序的流程图如图 4-20 所示。主程序主要完成系统的初始化、中断向量表的初始化、ePWM 模块的初始化、AD 采样模块的初始化、用于测试以及保护的 GPIO 的初始化、全局变量的初始化等。特别需要指出的是，在初始化的过程中，应该使 PWM 输出为低电平以避免开关管直通对设备造成损坏。在初始化完全之前，不应打开驱动电路的电源。

子程序的流程图如图 4-21 所示。子程序开始后，首先进行采样并对采样数据进行滤波，以免采样过程中出现干扰信号对控制系统造成不利影响。具体地讲，在每次采样过程中，对每个通道采样三次，去掉最大值和最小值取中间值。为了确保设备不被过高的电压或者过大的电流损坏，得到采样数据后应进行过压和过流判断，如果出现过压过流情况应该及时关闭 PWM 驱动信号，然后关机，通过对现象和数据的分析找出程序出错的原因并进行改正。如果设备没有过压过流的情况，下一步需要进行锁相。需要注意的是，在软件锁相完成之前，不应使得电压外环和电流内环工作，以免产生电压和电流冲击。锁相完成后，可以进行电流坐标变换、切入电压外环和电流内环的 PI 控制器、非线性解耦、对电压指令信号进行 Park 逆变换，通过 SVPWM 程序计算出各个开关状态作用的时间，更新 PWM 寄存器的数值等工作。

值得指出的是，在程序完成调试以前，程序不易运行过长时间，以免设备长时间工作在故障状态下，从而对设备造成不可逆的损坏。调试过程中，可以在程序中添加断点，使得程序运行的时间足以观察设备的运行状况，确认程序运行无误后再增加设备的运行时间。为了避免开关管直通，在程序执行到断点之前应该将 PWM 驱动信号置低。

4.2.2 代码运行时间优化

从前文可以知道，控制程序在中断子程序中完成。因此，如果在下次中断来临之前，本次中断子程序不能执行完毕，控制系统将出现逻辑错乱。因此，应使得程序运行的时间小于一个开关周期，同时应该留有一定的裕量，增加抗干扰能力。本文采用的 TMS320F28335 含有两种类型的存储芯片，一种为运行速度快的易失性存储器 RAM，另外一种为运行速度慢的非易失性存储器 Flash。为了在断电以后程序能够保存在存储器中，而无需重新下载程序到存储器中，程序调试完毕后一般烧写到 Flash中。Flash 有最多 15 个等待周期(TI 官方提供的 InitFlash()函数中，页间等待周期为 5 个时钟周期，随机等待周期为 5 个时钟周期，OTP 等待周期为 8 个时钟周期)，而 RAM 的等待周期为 0，等待周期的存在使得 Flash 的运行速度大大低于 RAM 的运行速度。对于计算时间要求苛刻的程序来说，原来在 RAM 中正确无误的程序烧写到 Flash 之后就可能无法正确运行了。

为了解决这一矛盾，TI提供了两种方法：一种是将部分函数在DSP上电后从 Flash复制到RAM运行，关于此种方法如何操作，请参考文献\[40\]。另外一种方法是在DSP上电后将初始化编译段（.cinit、.const、.econst、.pinit、.switch、.text）复制到 RAM 运行，关于此种方法如何操作，请参考文献\[41\]。相对于前一种方法，后一种方法可以获得更高的运行速度。

程序的运行速度除了和媒介即存储器有关还和算法相关。对于三角函数、平方根函数及其倒数以及除法运算来说，其运算时间要大幅高于乘法以及加法运算的时间。因此通过优化三角函数、平方根函数及其倒数以及除法运算将可以大大减少程序总的运行时间。TI 官方提供了快速实时支持库就是为了优化这些函数的执行时间。在对于运算时间要求比较苛刻的情况下，通过添加快速实时支持库可以起到明显的效果。关于如何添加快速实时支持库，请参考 TI 官方文档 C28x Floating Point Unit fastRTS Library。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEqwcJTmj8z6vCwV7Q6Y7y8wBdaXVKR9wNfmszKgusWQPu8ZXEQAcpTA/640?wx_fmt=png&from=appmsg)

为了更直观地比较代码优化前后的效果，本文做了四次实验：第一次实验程序在RAM 中运行，并添加快速实时支持库，实验结果如图 4-22 所示；第二次实验程序在 Flash中运行，无快速实时支持库，实验结果如图 4-23 所示；第三次实验程序在 Flash 中运行，并将初始化编译段复制到 RAM 运行，实验结果如图 4-24 所示；第四次实验程序在 Flash中运行，并将初始化编译段复制到 RAM 运行，且添加了快速实时支持库，实验结果如图 4-25 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaERoS3PM7u11YmBREHC18rDro9O5j9MJgZJcwoDEGkBaTk9qg8LIIhibA/640?wx_fmt=png&from=appmsg)

从实验结果可以看出，在程序比较大的情况下或者运行时间有限的情况下，可以通过将程序搬运到 RAM 运行并且添加快速实时支持库来减少程序的运行时间。

4.3 本章小结

本章主要讲述了整流模块的系统设计，主要包括硬件系统设计和软件系统设计。硬件系统设计包括主电路设计、采样电路设计、驱动电路设计；软件系统设计包括主程序设计和中断子程序设计。

第五章 实验结果及分析

基于本文搭建的硬件平台以及 TI 公司提供的代码编写平台 Code Composer Studio，本文进行了大量的实验，验证了本文提出的改进型 PI 控制策略以及电感选型方法的正确性及有效性，并对 SiC MOSFET 整流模块进行了初步的实验研究。

为了方便观察整流模块的暂态响应，便于对软硬件系统进行分析改进，本文在程序中建立了相关变量的数组，并通过 TMS320F28335 与个人电脑的通信，将相关数据传输到个人电脑上，通过 Code Composer Studio 提供的 Graph 功能将实验过程中的相关变量的相应波形显示出来。出于论文需要，最后利用 MATLB 对数据进行了处理。为表达简便，下文中如无特别说明，实验结果均指 IGBT 整流模块实验结果。

图 5-1 为整流模块启动过程中 a 相电流响应波形，图 5-2 为整流模块启动过程中直流电压响应波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaETSU6l2vcOLm3Fp3TZibIORHlibTZoKZ0T3LyGmz745XViaiajMUbibQuaCg/640?wx_fmt=png&from=appmsg)

从图 5-1 和图 5-2 的实验结果中可以看出，整流模块启动过程中 a 相电流过渡平缓，没有大的超超调出现，直流侧输出电压同样过渡平缓，没有出现大的超调，且在大约 0.1s 的时间内系统已经达到了稳态，由此证明了本文提出的改进型 PI 控制策略可以有效解决整流模块的启动超调过大的问题且具有较快的响应速度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaELdEPeaIuO1hSFjJgfv5Hl6pB43FpOl3uzc9OibIAOv86Lnn0JiaKYCuw/640?wx_fmt=png&from=appmsg)

图 5-3 为启动过程中 d 轴电流指令值 Idref 的波形，图 5-4 为启动过程中 d 轴电流 I d波形。为了更直观地显示 d 轴电流 I d 跟踪 d 轴电流指令值 Idref 的情况，通过 MATLAB软件将图 5-3 和图 5-4 合并后如图 5-5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaElufQ1HWq3xicnjpOA2ibowdlvTMniaibUGInOzFHNb49gV1q9TKwibJR8IA/640?wx_fmt=png&from=appmsg)

从图 5-3 至图 5-5 的实验结果可以看出，本文设计的控制系统参数选取合理，在0.1s 左右的时间里，d 轴电流完成了对指令值的跟踪，且到达稳态后不存在静态误差，与理论分析相符。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEnBsWayuQP7ZlGWB3UytAx0D5BP7biaEVwoBnicdHcp6QB52DRvYJV4ZQ/640?wx_fmt=png&from=appmsg)

图 5-6 为稳态电流 ia波形，图 5-7 为稳态直流电压V dc 波形，图 5-8 为稳态时 a 相电压电流的示波器波形，图 5-9 为稳态时直流侧输出电压的示波器波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEaCSeNFS3Aou5IQwibF0zIloEvyia4ticrmtQNxngT6sEksnAnrYaf2ejw/640?wx_fmt=png&from=appmsg)

图 5-10 为 SiC MOSFET 整流模块启动时 a 相电流实验结果，实验时交流侧输入线电压为 110V，d 轴电流指令值为 6A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEkau3ERmialnnbCzlFwnvJnLLTxfAhnhiaib4icYyZibuiaksgmvDZYUE8hPg/640?wx_fmt=png&from=appmsg)

为了获取总谐波电流畸变率，本文将稳态时的电流数据导入到 MATLAB/Simulink进行了谐波分析，谐波分析结果如图 5-11 至图 5-13 所示。其中，图 5-11 为 IGBT 整流模块稳态时电流ia的谐波分析结果，图 5-12 为 Simulink 仿真得到的整流模块稳态时电流ia的谐波分析结果。图 5-13 为 SIC MOSFET 整流模块稳态时电流ia的谐波分析结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEuwMfBKhyib3H5f4ZYvjjIDzNTqhgjXqURcBh1W5W1xyR145k3yJAAfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEjjmy2ic8XibXSzCju6OQVwJUPHDzmCaCO4UlgCA0RVRTRlbhz361QZuA/640?wx_fmt=png&from=appmsg)

从实验结果可以看出，仿真时总谐波电流畸变率为 4.44%，实验时得到的总谐波电流畸变率为 3.93%，考虑误差的存在，本文提出的电感选型方法可以较为准确地确定满足特定谐波要求的电感大小。由此证明了本文提出的电感选型方法是正确的和有效的，有一定的应用价值。

同时，图 5-10 以及图 5-13 的实验结果说明：本文设计的 SiC MOSFET 整流模块在交流输入电压为 110V，d 轴电流指令值为 6A 时能够正常工作，且总谐波电流畸变率为3.19%，证明了本文对 SiC MOSFET 整流模块的初步实验探索取得了成功。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEoLx7pLiayevqmVAQ9licwvibgzCguAuZiaFdwfibmnYUAib6rPuvBNeoIlog/640?wx_fmt=png&from=appmsg)

表 5-1 为由 DSP 内的程序测量得到的功率因数和效率的相关数据。

从表 5-1 可以得到：本文设计的整流模块平均效率达到了 95.54%，满足设计要求；平均功率因数为 0.9968，满足设计要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEDR1r5wGzARS0Pen6ibBItUpNze3XIEVuaMIiaJ3YtcrL5fC7hibcBJVdQ/640?wx_fmt=png&from=appmsg)

第六章 总结与展望

三相半桥电压源型 PWM 整流模块结构简单、能量可以双向流动、交流侧电压电流同相位、控制简单、易于数字化实现，因此特别适合用于小功率整流模块。本文在前人研究的基础上，侧重于整流模块实验平台的搭建和功能的实现，并且验证本文提出的低超调启动算法以及交流侧电感选择方法的正确性和有效性。在此基础上，对 SiC MOSFET整流模块进行了初步的实验研究。本文完成的工作有以下几点：

查阅了相关文献，研究了整流模块的研究现状，包括开关器件研究现状、整流模块拓扑的研究现状以及整流模块控制策略的研究现状。在开关器件研究章节中，对比了电力二极管、晶闸管、电力 MOSFET、IGBT 以及 SiC MOSFET 的优缺点。在整流模块拓扑研究中，对比了常见的电压源型整流模块拓扑三相半桥拓扑、中点钳位三电平拓扑以及 VIENNA 整流拓扑的优缺点，并选择了三相半桥拓扑作为本文采用的拓扑。在整流模块控制策略中，简述了滞环电流控制策略以及电压外环电流内环双 PI 矢量控制策略的工作原理，并指出了目前存在的一些新型控制策略。

建立了整流模块的开关函数模型。首先在三相静止坐标系下建立了整流模块的开关函数模型，然后介绍了 Clark 变换和 Park 变换，并且利用 Clark 变换和 Park 变换将三相静止坐标系下的开关函数模型转换到两相静止直角坐标系和两相旋转直角坐标系下，为下文控制器的设计打下了理论基础。

设计了整流模块的硬件系统。整流模块的硬件系统主要包括开关管的选取、交流侧电感的选取以 及直流 侧电容的选取 。本文 详细推导了采 用空间 矢量脉冲宽度 调制SVPWM 的三相半桥型电压源型整流模块的总谐波电流畸变率与基波电流达到峰值处的电流波形以及基波电流为零时的电流波形的关系，推导出了电感选取的上下限，并结合仿真工具，确定了电感的取值，对于工程实践具有一定的参考意义。同时，本文详细阐述了交流电压、交流电流、直流电压的采样电路设计以及 IGBT 驱动电路设计和 SiCMOSFET 驱动电路设计。

构建了整流模块的控制系统。整流模块的控制系统主要包括锁相环、Clark 变换和Park 变换、电流内环 PI 控制器设计、电压外环控制器设计、空间矢量脉冲宽度调制SVPWM。在理解相关模块的基础上，将各个模块转换为 TMS320F28335 代码程序，并且为了提升波形质量，设计了滤波程序、相位补偿程序，并且对代码运行时间进行了优化，使代码可以快速执行。

基于搭建的实验平台做了大量的实验。通过上百次的实验，成功满足了整流模块的各种设计指标要求，并且对 SiC MOSFET 整流模块进行了初步的实验探索。限于时间和实验室条件，本文仅仅在低压下对 SIC MOSFET 整流模块进行了原理性验证，对于 SIC MOSFET 还需要深入的研究。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)