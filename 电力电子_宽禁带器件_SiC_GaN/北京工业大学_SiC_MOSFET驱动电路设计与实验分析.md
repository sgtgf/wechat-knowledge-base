# 北京工业大学：SiC MOSFET驱动电路设计与实验分析


> 原文地址: [https://mp.weixin.qq.com/s/bdwptsqO7Pt9g8ppaoIQvg](https://mp.weixin.qq.com/s/bdwptsqO7Pt9g8ppaoIQvg)

**文章来源：**电气传动

**作者：**邹世凯，胡冬青，黄仁发，崔志行，梁永生（北京工业大学 电子信息与控制工程学院，北京 100124）

**摘要：**为使SiC MOSFET在应用中安全可靠的工作，通过对SiC MOSFET开关特性的分析，设计了一种SiC MOSFET驱动电路。该电路具有结构简单、实用性强、速度快、输出功率大等特点。另外，在高功率、高频等特殊环境下工作，为了提高SiC MOSFET的可靠性，还对器件过载保护电路进行研究。通过Pspice软件仿真实验，发现过载保护电路可以有效地保护器件不受损坏。最后，搭建双脉冲实验平台，验证驱动电路的基本功能并测试采用不同栅极电阻时对SiC MOSFET开关特性的影响。实验结果表明：该电路具有良好的驱动能力。

**关键词：**碳化硅MOSFET；驱动电路；过载保护电路；Pspice仿真软件；双脉冲实验

![](https://mmbiz.qpic.cn/mmbiz_gif/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDbF49dDzVZKVIOPspJ8R1icDS538gwGeA5qbN3IFztbY5ayibZcialL2kQ/640?wx_fmt=gif&from=appmsg)

作为第三代半导体，SiC材料相比Si材料具有禁带宽度大，高临界击穿电场强度，以及高饱和漂移速度，因此SiC MOSFET相比Si MOSFET更适合在高温、高功率和高频等特殊条件下工作，成为目前研究的热点。

在相同耐压条件下 SiC MOSFET 栅极寄生电容要远小于Si MOSFET，所以SiC MOSFET与Si MOSFET的驱动电路并不完全相同。Si MOSFET 是 在 0～\+ 15 V 驱 动 电压下工作 ，而 SiC MOSFET更适合在\-6～+22 V驱动电压下工作，并且电压响应速度要更快。在高功率和高频环境下工作时，SiC MOSFET极易出现过压或过流等短时过载情况，对器件造成损坏，所以驱动电路还应具有过压、过流保护电路。

本文设计的 SiC MOSFET 驱动电路采用专用驱动电源模块，驱动电压DC +20/\-4 V，使电路结构简单，更有利于驱动电路的集成化。对驱动电路过压和过流保护电路进行分析，并利用Pspice软件对电路进行仿真验证其功能。最后搭建双脉冲实验平台来测量 SiC MOSFET 的开关特性，同时验证驱动电路基本功能。

**1 .SiC MOSFET驱动电路要求**

SiC MOSFET 的器件结构和电路模型与 Si MOSFET 类似，两种器件的开关过程基本相同。但由于使用的材料不同，寄生参数也不同。SiC MOSFET 栅极寄生电容更小，开关速度更快，所以用 Si MOSFET 驱动电路来驱动 SiC MOSFET是不合理的。

根据器件的自身特点，SiC MOSFET对驱动电路主要有以下几个方面要求：

1）驱动电路需具有合适的驱动电压，尽可能小的驱动回路寄生参数；

2）栅极驱动脉冲必须具有足够的上升和下降速度，脉冲的前沿和后沿要陡峭；

3）为减小米勒平台的持续时间，驱动电路峰值电流 Imax 要更大，提高开关速度。

而在实际电路应用中还应考虑驱动回路的电气隔离、传输延迟、芯片过压过流保护等问题。

**2 .SiC MOSFET驱动电路设计**

本文以罗姆公司型号为 SCH2080KE 的 SiC MOSFET 为例，根据 datasheet 可知，其栅极电压最大范围是\-10～+26 V。为了安全考虑，选择SiC MOSFET的开启电压为+20 V，关断电压为\-4V。因此，驱动电路的电源选用金升阳 QA01C，该电源是SiC MOSFET驱动电路专用电源模块，输入电压15 V，输出电压分别为+20 V和\-4 V。

由于驱动电路主回路连接功率级电路，承受高电压大电流，控制电路为了避免受到主回路的干扰，驱动电路应具有良好的电气隔离性能。本文采用光电隔离方式，利用光耦隔离芯片6N137将控制电路和主回路隔离开，隔离效果更好，输出阻抗更低。

若要使SiC MOSFET正常开通，驱动电路必须提供足够的驱动电流，因此需要在门极之前加入 Buffer 电路，提高驱动能力。相对于 Si MOSFET来说，SiC MOSFET栅极寄生电容更小，所以驱动电流也更小。本文采用IXDI609 SIA作为驱动芯片，输出电流为\-9～+9 A，满足SiC MOSFET驱动电路要求。

驱动电路中栅极电阻小，器件开关快，损耗小；反之则开关慢，损耗大。但驱动速度过快，器件的电压和电流变化率大大提高，从而产生较大的干扰，尤其是在器件关断的时候，由于线路中杂散电感的存在，会在器件两端产生较大的电压尖峰，对器件造成损坏。因此，在器件开通和关断的时刻，驱动电路应采用不同的栅极电阻。

根据以上分析，设计的驱动电路原理图如图1所示，Ron 和 Roff 即为开通和关断时不同的栅极电阻，一般 Roff 要大于 Ron 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDcD6bNyT24iccqU3RQAYGCLheQBFQLYxoqfdPfD96m62cK0kDrQQITtA/640?wx_fmt=png&from=appmsg)

图2为所设计驱动电路的输出波形，高电平为+20 V，低电平为\-4 V，并且驱动电平上升下降速度必须非常快。图3为驱动电路接负载时的驱动电流波形，完全满足SiC MOSFET的驱动要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDTOdS4P6ic9BL7UVq13iaoibVbTicPKEhMrbYysTiaYA6WshptTDuhTWQMHg/640?wx_fmt=png&from=appmsg)

**3 .过载保护电路研究与仿真**

SiC MOSFET具有较脆弱的短时过载承受能力，所以在器件应用时需要保护电路来提高器件的可靠性。过载保护电路主要有以下两方面。

**3.1 漏\-源过压保护电路**

漏\-源过压主要是因为器件关断速度快，产生较大的 di/dt，又因为线路中杂散电感的存在，所以会在器件两端引起很大的电压尖峰。为了避免电压尖峰对器件造成损坏，需要在漏\-源之间进行过压保护。

漏\-源过压保护电路如图4所示，该电路的作用就是将高而窄的电压尖峰转化为矮而宽的电压尖峰，延长关断时间。其原理非常简单，主要是利用稳压二极管DZ设置保护电压阈值，当漏\-源电压UDS超过保护阈值，则二极管DZ击穿。击穿电流IZ分为2条支路：一条支路直接流向栅极充电抬高门极电压，使器件短暂地工作在饱和区，降低关断过程中的 di/dt，du/dt 及钳位 UDS电压；另一条支路流向Buffer电路的输入端，电流经过Buffer电路放大后流入充电门极，进一步抑制了UDS的上升，钳位效果更好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDW2XpLcMOqFTZibGehe1fIFYWRulUhdR2z1LEluQqpjb1giargHdcqspg/640?wx_fmt=png&from=appmsg)

利用Pspice软件模拟双脉冲实验来验证过压保护电路的功能。如图 5 所示，当 SiC MOSFET开通时，电流ID随着时间以UCC/L的斜率增加，电压 UDS为很小的低电压。当 SiC MOSFET 关断时，电感电流通过二极管D0续流，电流ID为零，电压UDS升高为电源电压UCC，并由于线路中寄生电感LP的存在产生电压尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDcdpicibTiar80j2TcXcrXWThtnrylibciaTUs5AH9aQOs2muaAw4ibicWwghw/640?wx_fmt=png&from=appmsg)

图 6a 为不带有过压保护的仿真曲线；图 6b为带有过压保护的仿真曲线。通过比较可以看出，过压保护电路会使器件关断时的电压尖峰变得平缓，并且震荡减少，有效地保护器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDUec8dy0EnEh14iaekxaTf0iczxFD1o5hYpYJ9go1qdUzrbzIBhtpIqDQ/640?wx_fmt=png&from=appmsg)

**3.2 过流保护电路**

过流保护电路如图7所示。首先需要去饱和检测电路，即器件过流时，需要及时检测出过流信号；其次是逻辑控制电路，由于管子的过流信号往往是瞬时信号，所以该部分应该具有锁存功能；最后就是执行电路，当发生过流故障时，执行电路应迅速将栅极脉冲信号切断，保证器件不受损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlD84OdzXFTB9uR5NXuQUibW52uB0hKoLd1myCdibJJSY7m63B3pSJY6Omg/640?wx_fmt=png&from=appmsg)

1）去饱和检测电路。如图8所示，当被测器件处于正常开通状态时，Buffer电路输出为正电压，二极管D1正向偏置，二极管Dz反向偏置，电流不会通过Dz给后续RC充电，所以反向器的输入是低电平。当器件出现过流故障时，UDS会迅速升高，当超过稳压管Dz的稳压值时，二极管D1反偏，Buffer 电流开始通过稳压管 Dz给后续 RC 充电，使反向器输入变为高电平，从而检测出过流故障，稳压管Dz的稳压值决定了保护电路的动作阈值。当器件关断时，电压UDS非常高，二极管D1反偏，此时Buffer电路输出为负电压，所以不会为RC充电，反向器输入仍为低电平。

2）逻辑控制电路。逻辑控制电路最主要的是锁存电路，如图 8 所示。锁存电路一共有 3 个输入2个输出。第一个输入是来自检测电路的检测信号，当器件处于正常开通时，反向器输出为高电平，锁存器输出为低电平。当发生过流故障时，反向器输出变为低电平，锁存器输出为高电平，将触发后面的执行电路，同时锁存器的另一端可以输出故障信息。第二个输入是手动关断装置，可以手动控制器件的关断。第三个输入是复位端。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDhd08ausGw9DicL4hZSB36EEjibQ2MO62N5HU5E6SeKtfDjNvYic1vHq4g/640?wx_fmt=png&from=appmsg)

3）执行电路。如图9所示，当器件发生过流故障时，检测到过流信号后执行电路必须及时做出响应。首先是栅极电压钳位，过流故障发生时，器件的栅极电压产生尖峰，可能会导致器件的栅氧化层击穿，使器件失效。为了解决这个问题，增加放电电容C1和齐纳二极管D1，当故障产生时，M1被打开，电容被充电至齐纳二极管的稳压值，释放栅极电容电荷。其次是软关断，发生过流故障时电流会很大，器件如果关断太快则会引起很大的di/dt，产生较大的电压过冲，所以M3先打开，Buffer 电路关断，经过 RC 延迟后 M2打开，较大的电阻R2连接栅极，降低了栅极的电压变化率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlD38tS40k8stHv7aNmqnHnB4M5YRW7Q8KCx49Bbykb883gI2axDJWn0w/640?wx_fmt=png&from=appmsg)

同样利用Pspice软件模拟双脉冲实验对过流保护电路进行仿真。图10为去饱和检测电路仿真曲线，稳压管DZ的稳压值设为10 V，电源电压UCC\=100 V，负载电感 L\=20 μH。器件在 10 μs 时开始导通，电流ID以UCC/L的斜率直线增加，同时电压UDS随着电流的增大也在增大，在23.67 μs时电压UDS达到10 V，检测信号由低电平变为高电平。图11为执行电路仿真曲线。接收到检测信号时，执行电路及时将栅极脉冲信号关断，避免器件因过流而损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDzkmtRF5zTpz1IN4k06AQET9WpHkkv51nrQJeCevSoWjicWtBeDQ0FXQ/640?wx_fmt=png&from=appmsg)

**4 .驱动电路实验分析**

双脉冲实验可以便捷地测试 SiC MOSFET的开关特性和驱动电路的性能。器件的开关特性除了取决于本身的参数外，还与驱动电路中栅极电阻有关，而栅极电阻的最佳阻值只能通过实际测量来选取。

为了避免测量出现误差，在测量之前需对示波器电压探头和电流探头延迟进行校准。另外，空心电感流过电流时会对脉冲信号进行磁干扰，所以一定要注意空心电感的摆放位置。驱动回路的寄生电感对器件的开关特性也有很大的影响，所以驱动电路与器件栅极之间采用双绞线或者端子之间直插方式连接。

为了比较不同栅极电阻对器件开关特性的影响，分别选取2 Ω，5 Ω，10 Ω，25 Ω的电阻作为栅极电阻。

图 12～图 15 给出了使用不同栅极电阻时SiC MOSFET的开通关断波形。测试条件为：直流电压 UCC\=200 V，电感 L\=520 μH，测试电流 ID\=25 A，开关器件 SCH2080KE，驱动电压 +20/\-4 V，栅极电阻RG为2 Ω，5 Ω，10 Ω，25 Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDrexx45AVZnJFz98zQkTK2Y4wD0exlrqPGwFz2UpWhbSlYS1INROGzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnIxsCgtibiciaeuYBichlzZPlDDpicibL8eRAJVqydiaX21I2icJIp9ia0AI7wy51LS4K9vdiahdXOkicvUp1HQ/640?wx_fmt=png&from=appmsg)

由实验结果可知，本文所设计的驱动电路工作状态良好，满足驱动电路设计要求。

另外，通过对比不同栅极电阻下 SiC MOSFET 的开关波形可以看到，较小的栅极电阻可以增大开关速度，但是带来的电压、电流振荡有可能会损坏器件，所以在选择栅极电阻时要折中考虑。

在保证器件安全工作的条件下，尽可能选择比较小的驱动电阻，可以看到5 Ω的栅极电阻比较合适。

**5 .结论**

本文设计了一种 SiC MOSFET 专用驱动电路，并研究器件的过压、过流保护电路，通过软件仿真可知该电路对器件的保护非常有效。最后搭建双脉冲实验平台，测试器件的开关特性，结果证明驱动电路非常有效，并通过实际测试选择合理的栅极电阻。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)