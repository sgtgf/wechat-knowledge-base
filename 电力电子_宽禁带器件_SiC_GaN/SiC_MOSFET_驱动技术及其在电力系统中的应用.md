# SiC MOSFET 驱动技术及其在电力系统中的应用


> 原文地址: [https://mp.weixin.qq.com/s/iHscgC-MxXqPcLCGOAQOGg](https://mp.weixin.qq.com/s/iHscgC-MxXqPcLCGOAQOGg)

**文章来源：**太原理工大学学报

**作者：**吴海富，张建忠，赵进，张雅倩(东南大学电气工程学院)

**摘要：**设计了并网逆变器以及电力电子变压器中 SiC MOSFET 功率器件的驱动电路，搭建了用于测试驱动电路的双脉冲测试乎台，并且介绍了谐振门板驱动电路的工作原理、特点以及优还对电网中 SiC MOSFET 的过电流保护原理进行了详细分析，进而给出了两种过电流保护方案，并且论证了两种方案的可行性。最后，介绍了几种常见的 SiC MOSFET 在电网中的应用实例，并对其应用进行总结与展望。

**关键词:** SiC MOSFET; 门板驱动; 过电流保护 ;电力电子变压器;高压直流输电

在未来的电力系统中，分布式发电以及高压直流输电等技术将会被广泛应用，而这些技术都离不开电力电子装置。传统的功率器件像硅 MOSFET 和硅 IGBT 等，开关频率一般低于 100 kHz ，大大增加了电力电子装置中元源元件的体积，降低了装置的功率密度。

随着宽禁带器件的诞生， SiC MOSFET 凭借着导通电阻低、开关频率高、耐压高的特点被广泛应用。目前像并网逆变器以及电力电子变压器（PET) 中也开始使用 SiC MOSFET, SiC MOSFET 能够有效减小装置的功率损耗，预计在未来电力系统中将会得到更为广泛地应用。

为了使 SiC MOSFET 在电力电子装置中能够可靠地运行，设计出稳定的 SiC MOSFET 驱动电路成了一大难题。本文将对 SiC MOSFET 的驱动以及保护技术进行研究，同时也会对电力系统中的电力电子装置进行详细的阐述。

**1 SiC MOSFET 驱动电路设计**

**1\. 1 SiC MOSFET 驱动电路基本结构**

SiC MOSFET 驱动电路主要包括以下几个方面:隔离供电电源、 PWM 隔离以及功率放大电路。主要电路框图如图 1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeABhhgFgkq0jxLYJoQHKVSudM8Hkib6X8lwXsPPA7zK0p1HO85JhXicLA/640?wx_fmt=png&from=appmsg)

由于 SiC MOSFET 开启电压 (Vth )低，所以一般采用负压关断。罗姆公司的 SiC MOSFET 驱动电压为 20/-4V ，其供电电源可以由 DC/DC 模块产生。金升阳公司有专门的 SiC MOSFET 电源芯片，输人电压 15V ，输出电压 20V和 -4V.PWM隔离主要有光藕隔离、电容隔离以及脉冲变压器隔离等。

图2是典型的 SiC MOSFET 驱动电路图，PWM 隔离采用的光揭隔离芯片为 6N137 模块，工作频率可达 10 MHz. 功率放大电路采用图腾柱输出，可增强电路的驱动能力，本文采用 IXDD609片，其输出电流可达9 A. 功率放大后的输出信号Vgs 输入到电平移位电路，其主要作用就是产生负压可靠关断 SiC MOSFET. 测试波形图如图 3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeDIiahP2ib6icfO8K5m8B45lSupttXPXicxToYHuvpqpUmllhnU8tS8gDnw/640?wx_fmt=png&from=appmsg)

完成 SiC MOSFET 驱动电路的设计后，需采用双脉冲测试 (DPT) 电路来测试驱动电路性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeiavlf00oj2THl5VtjTjppDibhGjjLL4U30LqhZEGaxiafI2o6zJozprXA/640?wx_fmt=png&from=appmsg)

DPT 电路主要用于测试驱动电路的振荡情况、电压电流的变化率以及尖峰等，同时还可以根据测试的波形计算出电路杂散电感的值。双脉冲测试电路实验波形图如图 4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeCZ1hVou4DnQLwkwNNluiadEsVGZ9JtwyqY6D3zCvlsYIRwrAenjNOyQ/640?wx_fmt=png&from=appmsg)

从图4中可以看出， SiC MOSFET 在导通和关断瞬间都存在着一定的振荡和尖峰，在设计驱动电路时要尽量减小杂散电感来消除这些危害。

**1\. 2 SiC MOSFET 谐振门极驱动电路**

**![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYelh0TQmViambv11EaicS8r5iaD8Khxxiapicev44lQr6icFUgencslbq0X0Hw/640?wx_fmt=png&from=appmsg)**

SiC MOSFET 谐振门极驱动电路主要是用1个谐振电感 Lr 取代门极电阻Rg，利用 Lr 与门极电容Ciss谐振，将门极电容中存储的能量回馈给电源，从而减小驱动损耗。谐振门极驱动电路如图5示，它由4个辅助MOS 管、1 个谐振电感 Lr和1个谐振电容Cr构成。 MOS 管工作时序如图 6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeQn4dUPP20DMAHr2sVbVKTybKBIkHvmRAH5XxE7ibfmmrmXhWjjrRouw/640?wx_fmt=png&from=appmsg)

图5所示的谐振门极驱动电路不仅可以减小驱动损耗，而且可以提高开关管的开通速度和关断速度，进而提高开关频率。图 7和图 8分别是传统门极驱动和谐振门极驱动波形图，从中可以看出谐振门极驱动电压的上升和下降速度明显快于传统门极驱动。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeg9R6uRWbzQ1JNJl3P3OW9vp4YxlTr3uLoFyg7MibqicaIIf7pHTcddDA/640?wx_fmt=png&from=appmsg)

**2 SiC MOSFET 过电流保护分析**

在三相并网逆变器中，当出现桥臂直通或者负载短路时，会出现很大的短路电流，如果关断不及时将会烧毁开关管。对于 SiC MOSFET. 由于其门极电容Ciss 很小，它能承受的短路时间很短，在 600 V 的直流母线电压情况下 .SiC MOSFET 能承受的短路时间大概为 3μs. 所以必须要设计出快速的过电流保护电路。

**2\. 1 去饱和检测过电流保护电路**

SiC MOSFET 实现快速保护的关键就是要检测漏极电流 Idt,目前最常用的两种方法是去饱和检测法和电感检测法。

去饱和检测法的电路图如图9 所示，它是根据SiC MOSFET 漏源极电压Vds与漏极电流Id 的关系来实现电流检测的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYe4yNP723icuVuamLBpbZ7icy7epqqpTiaSmCypHnVGHlaKia29FGwy035Pg/640?wx_fmt=png&from=appmsg)

从图 9可以看出 Vds 是通过电阻R 、检测二极管Dsense 、电容C和电流源 Is 检测出来的，可以通过改变Vco的值来改变保护电流值的大小。根据 SiC MOSFET 的输入特性曲线来确定保护电流值。

图9的的工作原理如下 ：设M为所需保护的 SiC MOSFET 功率器件，当驱动电压为负时 .M 关断，T2导通，门极电流通过 Roff 进行关断，与此同时T3导通，电流源 Is 电流流过T3, 电容C两端的电压被钳位在低电平，比较器不翻转，具体电路如图10 (a)所示。当驱动电压为正时 .T1导通 .Vcc给门极电容充电，门极电流通过 Ron 导通。当门极电压超过阑值电压时，M导通 .Is 通过R, Dsense和 M 形成回路，这时比较器同样不翻转，具体电路见图 10(b).当M发生短路时，Vds将迅速上升到母线电压，二极管Dsense反偏 .ls给电容C进行充电，电容电压线性增加，当它达到比较器门限电压 (Vco) 时，比较器翻转，同时会反馈一个错误信号。与此同时T1关断 ,T2和T4导通，门极电压被拉低 .M 关断，电路如图 10(c) 所示。上述Vco 电压通过式 (1)得到。

Vco=Vd+Vdsset+Is • R . (1) 

本文通过负载短路来测试保护电路功能，结果如图 11 所示。从图 11 的结果可以看出，去饱和检测过电流保护电路能够有效的检测过电流并且能够进行快速保护。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYe0gCz4z8P1iaRA5PBp2VwfoOjibyXDsJVwCBkK8OqMbTxntPiaa6gdWt7Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeqxeUbHbVm2ibF35ckntodAjVoTBXyOIIxNaf1n8yy0uHztFKUSI63Eg/640?wx_fmt=png&from=appmsg)

去饱和检测法的缺点就是容易受到温度的影响，随着温度的升高，相同的Vds对应的漏极电流Id会下降，将导致过电流保护不精确。图 12 是在不同温度下，门极电压 Vgs=20V 时的 SiC MOSFET的输出特性曲线。从图 12 中可以看出随着温度的升高，输出特性曲线下移，电流保护值也随之下降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYe5NzP4IwrJTKsplbTRf5M4tNlz9WgljZcJCsvhchKGSInic9uWseicWrw/640?wx_fmt=png&from=appmsg)

**2.2 电感检测过电流保护电路**

电感检测法是在 SiC MOSFET 的源极增加一个感值很小的电感来实现过电流保护。具体电路如13 所示。

检测电路输出电压V0与 SiC MOSFET 漏极电流 Id 的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeXRKu1mq8dlyqaKCbhXBDUMQAiaAHqHiccibr31gcD5KB8y4ShGXAQjRBw/640?wx_fmt=png&from=appmsg)

从式 (2) 可见漏极电流与检测电压近似成线性关系，通过设置Vref 值的大小就可以控制保护电流值。图 13 的具体工作原理如下:当漏极电流 Id超过保护电流值时，Vss 也会超过一定的数值，这时输出V0会超过比较值 Vref比较器翻转，信号送入RS锁存器，锁存器输出高电平。 M1门极受到高电平导通，门极钳位电路触发。同时 M3 导通，阻止功率放大电路的脉冲输入。由于 R2和C2 的存在,在延迟一段时间后开通，软关断电阻Rsoft 被串入电路中，减缓了电路关断速度，实现软关断。电感检测法结果如图 14 和图 15 所示。

从图 14 和图 15 可以看到电感检测法也能够快速的检测过电流并实现保护，但是电流在超过保护值后还会出现电流过冲，存在着一定的风险。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYePPib2CYEDhenErMafzYGHbOia7AgI0ABZdTooWnG3Rakrc7icfD0buNIA/640?wx_fmt=png&from=appmsg)

目前的过电流保护电路还不能实现精确的电流恒定值保护，与保护值之间有偏差，当发生电流过冲时，容易损坏 SiC MOSFET ，所以在实现保护时要留有一定的电流裕量。

**3 SiC MOSFET 在电力系统中的应用**

**3\. 1 SiC MOSFET 在并网逆变器中的应用**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeP4EzPZVkXpqxjrVH01RVgibibLiaEvdqIibzGnxVeYUIjWEOPUxS8BeK0A/640?wx_fmt=png&from=appmsg)

随着 SiC MOSFET 驱动技术以及保护技术的成熟， SiC MOSFET 已经开始应用于并网逆变器中。相比于传统的硅逆变器，碳化硅逆变器增大了装置功率密度，降低了逆变器的功率损耗，而且随着温度的升高，碳化硅逆变器的损耗降低的更多。如果在 SiC MOSFET 旁边反并联 SiC 二极管，将会减小能量回馈阶段的反向恢复损耗。基于 SiC MOSFET 的三相并网逆变器如图 16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeboiaTVwckZtPBXvZGUMIsvI4vNTTC1qYX0vgM1iaY9C2l12xsxnnVMiaA/640?wx_fmt=png&from=appmsg)

图17 是逆变器中使用硅元件与碳化硅元件的损耗对比图，从图中我们可以看出，逆变器在使用SiC MOSFET SiC 二极管后，损耗下降了 70%装置的效率也得到提高。

**3.2 SiC MOSFET 在电力电子变压器中的应用**

目前，我国正大力发展风力发电，传统的风电系统都是通过工频变压器进行并网，通过高压交流输电传送到各个变电站。虽然工频变压器结构简单、效率高，但是它体积大、重量大、功率密度小以及使用不灵活。在交流输电系统中还要放置元功补偿装置，占用了大量的空间。

高压直流输电 (HVDC)是目前比较新颖的一种输电技术，它将电网的交流电整流成直流，通过DC/DC 变换装置变换成高压直流传送到变电站，具体结构图如图 18 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYe6MqZqR1UMTDCglNmfqUzZwTjcjYC4TxrfcAa6uAKRqp5Yx9f2vWJDw/640?wx_fmt=png&from=appmsg)

在高压直流输电中，电力电子变压器凭借着功率密度高、效率高、损槌低等特点越来越受到关注，而其中的 DC/DC 变换装置是电力电子变压器的核心，要实现中压系统到高压系统的转换， DC/DC换器一般采用输入并联输出串联 OPO日的形式，电路结构如图 19 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYer82zBQT99lyTvsIACFWwUhziaP8VuYX9p4GFcC7Lho7ES7SKCHBJniaA/640?wx_fmt=png&from=appmsg)

图19 中每一个电路子模块都是一个 DAB路，它中间的隔离变压器采用高频变压器。为了提高电路的工作频率，这里面的功率器件采用 SiC MOSFET。随着电路工作频率的提高，高频变压器的体积也可以大幅度下降，装置的功率密度以及效率得到提升。

**3\. 3 SiC MOSFET 在分布式发电中的应用**

火力发电需要消耗大量的煤碳资源，而且形成大量的温室气体和有害物质的排放，导致大气和土壤污染，为此，世界各国正在大力发展分布式可再生能源发电技术，主要包括光伏发电、风力发电等。一般分布式发电需要通过电力电子装置进行电能变换，最后实现并网。图 20 是分布式发电系统图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTk8pBWhzSSawjD4FJzlYeu8NzUReBgNtPv0TkRwk27iaktQFR5PRJobm0gYtNmicib35hjibibRZ4Gcw/640?wx_fmt=png&from=appmsg)

在分布式发电系统的电力电子装置中，开关器件非常重要。以 SiC MOSFET 为主的宽禁带器件将会减小装置的损耗和体积，提高装置的容量和性能指标。目前 SiC MOSFET 在分布式发电系统中属于试验阶段，随着电力电子技术的飞速发展， SiC MOSFET 将会在分布式发电系统中发挥越来越重要作用。

**4 结束语**

针对 SiC MOSFET 的驱动电路进行了讨论，介绍了一种新颖的谐振门极 SiC MOSFET 驱动电路。SiC MOSFET 过电流保护电路进行了研究，重点分析了去饱和检测法和电感检测法两种过电流保护电路的工作原理和保护性能。最后介绍了 SiC MOSFET 在并网逆变器以及电力电子变压器等并网装置中的应用。总之， SiC MOSFET 在电力系统中有着广阔的应用前景。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)