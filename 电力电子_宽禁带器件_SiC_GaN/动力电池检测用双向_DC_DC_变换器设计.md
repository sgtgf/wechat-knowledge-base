# 动力电池检测用双向 DC/DC 变换器设计

原创 贾超 蒋晓明 SiC碳化硅MOS管及功率模块的应用 2025-04-05 21:47 广东

> 原文地址: [https://mp.weixin.qq.com/s/OIu0hiqM3\_sz9itaO4pypQ](https://mp.weixin.qq.com/s/OIu0hiqM3_sz9itaO4pypQ)

文章来源：信息工程

作者：贾超1,2，蒋晓明2（1.五邑大学智能制造学部，广东江门，529020； 2.广东省科学院智能制造研究所，广东广州，510070）

摘要：针对传统动力电池化成分容设备中电源模块体积大、输出功率小、稳态精度低、可靠性差等问题，设计了一款高精度、大功率双向DC/DC变换器。该变换器以同步整流双向Buck/Boost电路为核心电路，采用多模块并联拓扑结构，减小系统体积的同时提高了整机效 针对传统动力电池化成分容设备中电源模块体积大、输出功率小、稳态精度低、可靠性差等问题，设计了一款高精度、大功率双率。基于DSP数字控制技术，实现各通道电流独立闭环控制输出，并机状态下可实现稳压输出以及电流自主比例分配，无需额外均流电 路调节控制。实验结果表明：采用多模块并联型设计的双向DC/DC变换器效率高，充放电电流调整范围大，可在0~±180A内变化稳定输出，且精度可达0.005%F.S以内，满足大功率动力电池化成分容设备的技术要求，在动力电池检测行业具有较高的实用价值。

关键词：电池化成；双向DC/DC变换器；多模块并联；DSP

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksnXJSrKjJPMzD7NjlXdnJvzjMzxCNaTBHyOuOfusNWJZxTJbrfYRLwQ/640?wx_fmt=png&from=appmsg)

0 引言

随着我国“2030 年实现碳达峰、2060 年实现碳中和”的战略目标提出，新能源汽车市场迎来爆发式增长，锂离子动力电池以其高功率和高能量密度等优势成为电动汽车最为广泛的动力源。与此同时，对电池检测设备的技术要求也越来越高。电池检测设备指通过控制下的充放电，对电池或电池材料的电化学性能进行记录、测试分析的设备，也称为化成设备。在动力电池的化成生产过程中，对电源模块输出的电流和电压精度有着非常高的要求 ，且功率需求也日益增大。当单个电源模块无法满足系统功率需求时，可采用多模块并联运行方式，以提高系统的功率、效率以及可靠性。

在实际系统中，由于各模块的阻抗特性存在差异，将引起变换器各通道电流不均衡，造成各模块负荷工作不一致，从而影响系统的可靠性 。因此，为了保证多模块并联变换器的高效稳定运行，各通道电流均衡控制显得极为重要。目前并联型电路的电流均衡控制策略主要分为两大类：输出阻抗法和有源均流法 。

输出阻抗法旨在调节并联电路的输出阻抗，达到近似均流的目的，该实现方式较为容易。但由于该均流方式主要依赖于调节输出阻抗来实现均流，导致其负载调节能力有所降低 ；且随着输出电流的逐渐增加，其输出电压也会下降，因此该均流控制方法不适用于高性能、高功率的应用场合。

有源均流法在并联型电路中，通过对各模块电流检测并对其不平衡进行补偿以实现电流的均衡，可分为平均电流均流法、主从均流法和最大自动均流法。其中，主从均流法是将主相的电感电流被测量作为参考值，而从相的电感电流通过调节输出后跟随主相电感电流进行调节，使得各相的电流保持均衡。然而，这种方式均流性能过度依赖主相，一旦主模块出现故障，整体电源系统将无法正常工作。

随着数字控制技术的不断发展，数字均流技术在并联型变换器中的应用越来越受到研究人员的关注和重视，且已经取得了较为丰富的研究成果。综上分析，本文设计了基于 TMS320F28075 控制的多模块并联双向 DC/DC 变换器，选取软件数字控制方式，对各通道输出电流独立采样检测，反馈至 DSP 控制系统调节，采用 PI 双闭环控制算法，实现了恒流、恒压、恒流恒压三种工作模式，其输出电压电流能够稳定输出。

1 系统设计方案

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0kskFU22AghibSp9RDQ0sdLz7icOBEebzLqMmm2mPiaRWibRPCiaQMG1rgOPkQ/640?wx_fmt=png&from=appmsg)

如图 1 所示，动力电池检测系统主要由双向 AC/DC 变换器、双向 DC/DC 电路、驱动电路、DSP 控制电路、人机交互界面以及动力电池等部分组成。

系统工作时，由人机交互界面下发充放电指令：充电模式下，380V 交流电经 AC/DC 变换器整流转化为 15V 直流电，DC/DC 变换器处于 Buck 降压状态，15V 直流电经转换对动力电池充电；放电模式下，该变换器处于 Boost 升压状态，电池内部电能经 DC/DC 变换器升压后，再经双向 AC/DC 变换器逆变为 380V 交流电，实现能量向电网的反馈。

2 系统硬件设计

2.1 功率单元设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksD4hbYr1UudJN7sgicF8LQq9xIAewIib99yibgeEoVeNGSxcUGygjGztnQ/640?wx_fmt=png&from=appmsg)

本文设计的双向 DC/DC 变换器以非隔离型的 Buck/Boost 拓扑为核心电路，采用四通道并联方式满足大功率需求，拓扑结构如图 2 所示。其中，Vdc 为变换器输入端电压，Vbat 为电池侧端电压；L 1~L 4 分别为变换器各支路储能电感；电阻R1、R2、R3、R4 分别为各通道电流采样电阻；Ci、Co1、Co2、Co3 和Co4 滤波电容。

为降低动态损耗，提高能量转换效率，单模块 Buck/Boost 电路采用同步整流方式，使用低导通损耗的 MOSFET管取代传统电路中二极管作为整流管。其次采用交错驱动方式，以减小电流纹波，各模块开关频率和占空比相同，模块间驱动信号依次交错 90° 。

2.2 采样电路设计

动力电池检测过程中最重要的两项指标为电压和电流，在检测系统中对电流、电压的精度有着很高的要求，所以设计好的电压、电流采样电路是非常重要的。

2.2.1 电压采样电路设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksnVTrgeDo2KUpuO7YaTnXlkr5jVSVEellphGbmXQ2BamynwlnjjB0lA/640?wx_fmt=png&from=appmsg)

如图 3 所示，电压采样电路选用四阶巴特沃斯低通滤波电路设计结构，利用精密运放和精密电阻的优势，实现了高精度信号采集和滤波处理，为系统提供了可靠的信号质量和稳定性。

2.2.2 电流采样电路设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0kseVVss60G5yX0iaVuvWxsMXicIjrbf6cuYq0NzY6bybSibGgY7uQKpH2mA/640?wx_fmt=png&from=appmsg)

检测系统对动力电池进行充放电时，其电流较大，若采用串联电阻进行电流采样，损耗过高。为了能够精确无损检测恒流工作时电流，如图 4 所示，本设计电流采样选择矩阵光电 CF300PC-VCT 霍尔电流传感器，满足样机在实际使用中检测电流范围为 -180A~180A 的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksnMn7vDY3uURecH4eIM58ibiaZwW4eGnNHPXbadTaMicSeeHvic1dXWCHHA/640?wx_fmt=png&from=appmsg)

如图 5 所示，电流采样电路类似于电压采样电路，将霍尔采样到的电流信号经过高精密电阻转化为电压信号，通过滤波电路输入到 ADC 模块中。

3 系统软件设计

 3.1 控制系统框架

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksnAoUHp8j7tic9SPfAvzZAibTGlKVlYeB3ibwxwI1d1OtADUbyGCEGm1fg/640?wx_fmt=png&from=appmsg)

本设计采用 TI 的 TMS320F28075 作为控制芯片，其运算能力强，处理速度快，具有 24 路 PWM 通道，其中 16路通道为高分辨率 PWM（HRPWM）。如图 6 所示，本设计采用电压外环、电流内环双闭环控制，且每条支路电流内环相互独立工作，以实现各模块电流均衡，均为 PI 调节。其中，Uref、Iref 分别为电压电流给定值，Uo、Io1~ Io4 分为采样值。在系统恒流运行模式下，电流环起到调节作用，通过监测输出电流并进行反馈控制，以确保电流稳定输出，此时，电压环起到了过压关断保护作用；在恒压工作模式下，电压环起到调节作用，通过监测输出电压进行反馈控制，此时电流环则承担过流关断作用。

3.2 充放电控制策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0kshuPLmFISDGNYt3no4RYrjlJL1QXkHGMc3jOvamTef6q5hiaMfiaET3nA/640?wx_fmt=png&from=appmsg)

动力电池检测过程主要包含充电和放电两个环节，常规充放电策略有恒流充电法、恒压充电法以及恒流放电法 ：

（1）恒流充电法指在电池充电全过程中充电电流恒定不变，电压逐渐升高，当电池电压升高到设定值，充电停止；

（2）恒压充电法指在电池充电全过程中充电电压恒定不变，充电瞬间电压迅速达到设定值，此时电流值处于峰值状态，随后电流逐渐降低，达到设定值后，充电停止；

（3）恒流放电法指在电池放电全过程中放电电流恒定不变，电压逐渐减小，当电池电压达到保护值时，放电停止。根据上述过程，具体的程序设计流程如图 7 所示。

4 实验测试

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0kseial6zOAaqwLnHpSX7oqdn7lZkCibUenECSQejoCAdR7BepZ35RlQgGw/640?wx_fmt=png&from=appmsg)

为验证所设计电源模块工作效率以及在不同工作模式下输出精度和稳定性，搭建了如图 8 所示平台。

4.1 恒流充电模式系统效率测试

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksQbohSRXu0NdWJgFGDllnkOwhSqM8aM1IicAu1QD9U5tWyark5PcPluA/640?wx_fmt=png&from=appmsg)

将变换器输出通道输出连接至电子负载，负载设置为CV 模式，根据常规单体动力电池 2.5V~4.2V 工作电压需求，负载测试电压值分别设定为 3V、4V 和 4.5V，负载电流测试范围为 18~180A。变换器转换效率如图 9 所示，对比发现，负载电流为 72A 时峰值效率最高可达 88.5%。

4.2 充放电电流电压精度测试

首先测试电源模块恒流模式状态下不同设定值的输出电流精度，在输出端和电池负载之间串入 1mΩ 高精密分流器，采用的德科技 34465A 六位半万用表检测分流器两端电压值获取对应恒流输出设定值的实际电流值。测试结果如表 1 所示，在恒流模式工作状态下，电源模块能保证在 0~±180A 之间高精度电流输出，其充放电精度可控制在0.005% F.S 以内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0ksGy5KG6szJ1w1q6a3qXRTJewCexQfzEbicwka8CJibl6sOcvQfGZ9rYzw/640?wx_fmt=png&from=appmsg)

此外，将模块输出端连接电子负载，下发恒压工作指令，用万用表直接检测负载端电压值，数据如表 2 所示，其精度满足行业 ±0.05% F.S 以内要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmP6DUD0icLI0XKzUPEcE0kstea2PdNbjoEhmOmVreR92Cd3ulHJ3wRspmicRrwU8A2x3fFD2a0sZHA/640?wx_fmt=png&from=appmsg)

5 结语

本文基于 Buck/Boost 拓扑结构，采用多模块并联方式，设计了可对动力电池的充电以及能量回馈功能的双向DC/DC 变换器。实验结果表明该变换器电流调节范围大，可满足 0~±180A 充放电控制；采用电压外环、电流内环的双闭环控制方式，能够实现变换器稳定输出；电流采样选用 CF300PC-VCT 霍尔电流传感器，其输出精度最高可达0.001% F.S，符合当前大功率电池化成设备的技术要求，具有一定的市场应用价值。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)