# 基于 SiC 器件的三电平半桥单电感均压电路


> 原文地址: [https://mp.weixin.qq.com/s/8GA0ni4Zrj63rqCP59U9Sg](https://mp.weixin.qq.com/s/8GA0ni4Zrj63rqCP59U9Sg)

文章来源：电源学报

作者：崔恒斌 1，任海军 2，周 涛 2（1.成都运达科技股份有限公司，成都 611731；2.西南交通大学电气工程学院，成都 611756）

摘要： 针对辅助变流器中充电机输入端支撑电容电压不均衡导致变压器出现磁饱和的问题， 研究一种基于SiC MOSFET 器件的单电感均压电路。 对单电感均压电路的 4 种工作模态进行分析，通过两个开关管的互补导通，利用电感实现能量在支撑电容之间的重新分配，可实现支撑电容电压的均衡。 对单电感均压电路的 3 种典型开关状态类型进行分析，并根据其开关状态类型计算单电感均压电路电感选取范围。 仿真和小功率实验结果表明单电感均压电路具有较强的均压能力。

关键词：SiC MOSFET 器件；单电感均压；辅助变流器；三电平半桥

0\. 引言

多电平变换器因其电压应力小、 输出容量大、谐波含量低等优点，在大功率场合得到了广泛的应用，如车载电力电子变压器、高压直流输电、列车辅助供电系统等。 而由于负载的暂态变化或不平衡电流，以及输入侧的支撑电容与直流母线电压之间的功率交换将会导致支撑电容电压的不均衡，给变换器的正常运行带来严重的威胁。

目前，针对均压策略的研究主要分为两大类：一类是调制算法均压，另一类是硬件电路均压。文献\[6\]针对三电平半桥 DC-DC 变换器中点电位偏移的问题进行了详细分析， 支撑电容充放电时间的不一致性将直接导致两支撑电容电压的不均衡；文献\[7\]中利用空间矢量脉宽调制 SVPWM（space vector pulse width modulation）策略实现变换器在冗余矢量选择时，在避免端口电压越级跳变的前提下，将当前的空间矢量切换过渡到均压能力最强的空间矢量，但该方法较为复杂，且计算量较大；文献\[8\]提出结合载波移相调制策略与基于零序电压注入的中点电压平衡的控制策略。 基于调制算法的均压策略是在基本的调制策略基础上对开关信号进行约束，而基于硬件电路的均压策略是通过增加独立的硬件电路对支撑电容电压进行均衡；文献\[9\]提出一种基于电容的辅助均压电路，实现多电平变换器直流母线支撑电容电压的均衡，由于高压大功率场合电压等级高，均压电容需要承受高压，导致均压电路体积较大，为了防止对电容的直接冲击，均压电路中需串联电阻而导致变换器整体效率降低；文献\[10\]提出一种基于电感的辅助均压电路，实现多电平整流器均压，由于采用工频电感和较低的开关频率导致均压电路体积较大，但未对支撑电容电压过度不平衡造成的电感能量累积现象进行分析，因此，开关管存在电感电流暂态尖峰超过开关管额定值而过流炸毁的潜在危险。 基于电感的均压电路，通过采用宽禁带半导体器件 SiC MOSFET 以提高均压电路的工作频率来减小电感的重量和体积，实现均压电路的小型化和轻量化。

本文研究一种应用于辅助变流器中充电机的基于 SiC MOSFET 器件的单电感均压电路。 首先分析了单电感均压电路的工作原理和工作模态。 然后给出了单电感均压电路的控制策略，并对 3 种典型开关状态类型进行了分析，得出存在电感电流峰值过大的开关状态类型。 根据其开关状态类型计算了单电感均压电路电感值选取范围，通过电感和单电感均压电路投入时支撑电容电压差等条件的限制，保证电感峰值电流维持在开关管允许范围以内。 最后设计了 SiC MOSFET 器件的驱动电路，通过仿真和实验验证了单电感均压电路的有效性和可行性。

1\. 单电感均压电路原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFkOBuor4iaNzDxicJLKxoYMm8UzUW6Iag97icIrhYBq0nbjYXnvrRofW0Q/640?wx_fmt=png&from=appmsg)

基于 SiC MOSFET 器件的单电感均压电路拓扑结构如图 1（a）所示，单电感均压电路由开关管SA1、SA2 及高频电感 LA 组成。 机车辅助变流器中充电机所采用的拓扑结构如图 1（b）所示，为了满足充电机输入端电压等级高，输入电流小，输出端电压等级低，输出电流大的要求。 充电机原边侧采用三电平半桥结构， 副边侧采用两电平全桥结构，中间采用中高频隔离变压器。

1.1 单电感均压电路工作模态分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFiaT9bowPOGZhw2PXFjuoPsTA0paiaJ9EqycSZicialjuzIrqgkvkT0HECA/640?wx_fmt=png&from=appmsg)

1.1.1 工作模态 1

当电容电压 VC1\>VC2， 电流流通路径如图 2（a）所示，开关管 SA1 导通，SA2 关断，此时电容 C1 释能。电容 C1 将能量通过开关管 SA1 传递给电感 LA，此时，由于电容 C1 对电感 LA 进行储能，电容 C1 电压减小。

1.1.2 工作模态 2

当电容电压 VC1\>VC2， 电流流通路径如图 2（b）所示，开关管 SA1 关断，SA2 反并联二极管导通，电感LA 释能。 电感 LA 将储存的能量传递给电容 C2，此时，由于电感 LA 对电容 C2 进行储能，电容 C2 电压升高。

1.1.3 工作模态 3

当电容电压 VC2\>VC1， 电流流通路径如图 2（c）所示，开关管 SA1 关断，SA2 开通，电容 C2 释能。 电容C2 将能量通过开关管 SA2 传递给电感 LA， 此时，由于电容 C2 对电感 LA 进行储能，电容 C2 电压减小。

1.1.4 工作模态 4

当电容电压 VC2\>VC1， 电流流通路径如图 2（d)所示，开关管 SA1 反并联二极管导通，SA2 关断，电感LA 释能。 电感 LA 将储存的能量传递给电容 C1，此时，电感 LA 对电容 C1 进行储能，电容 C1 电压升高。通过对单电感均压电路的 4 种工作模态进行分析，SA1、SA2 的导通和关断将直接导致支撑电容形成新的电流流通路径，因此，单电感均压电路通过影响两支撑电容的充放电而平衡支撑电容电压，电路中其他元件也不会对均压电路造成影响。 单电感均压电路的工作频率高于充电机的工作频率，因此，单电感均压电路可独立于充电机工作。

1.2 单电感均压控制策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFfYbfzaOLzgFSDGVpyHq7EDV3rOC2gqYicbT2Re8NSpmv18AwUAxgYEw/640?wx_fmt=png&from=appmsg)

单电感均压电路控制策略如图 3 所示，利用固定开关频率三角载波的峰值产生使能信号，在使能信号作用下对支撑电容电压的幅值进行比较，并将电容电压比较结果与相同的三角载波比较产生单电感均压电路的驱动信号。 利用固定开关频率三角载波产生的使能信号限制开关管工作在固定开关频率，防止单电感均压电路在电压均衡状态下支撑电容电压微小扰动导致开关管工作频率的升高而损坏开关管。 开关管在一个开关周期内最大导通时间为半个开关周期，且一个开关周期内仅一个开关管导通以防止输入侧电源短路。

1.3 单电感均压开关状态类型分析

单电感均压电路正常运行过程中，将遵循以下原则：①两开关管不能同时导通，只能互补导通；②均压电感不能出现短路状态；③单电感均压电路的开关频率足够高，电感电流的增加或减少可近似为线性变化。 单电感均压电路存在 3 种典型的开关状态类型，如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFZCgKp8fdnr2TuiaGLCos243EJK8ib3ryb5MFhuLE1tpdMBeXHIlMtoSQ/640?wx_fmt=png&from=appmsg)

1.3.1 开关状态类型 1

当 t\=t0 时，电容电压 VC1\>>VC2。 t0\-t1 阶段，开关管 SA1 导通，SA2 关断， 电容 C1 通过开关管 SA1 给电感 LA 储能。t1\-t2 阶段，开关管 SA1 关断，SA2 反并联二极管导通，电感 LA 通过 SA2 反并联二极管为电容 C2储能。 由于电容 C1 对电感 LA 的充电速率大于电感LA 对电容 C2 的充电速率，t0\-t2 阶段所对应的一个开关周期内，电感将存储一部分能量。 因此，在开关状态类型 1 中电感电流 iLA 将增大。

1.3.2 开关状态类型 2

当 t\=t5 时，电容电压达到暂态均衡，即 VC1\=VC2，电感电流 iLA 达到峰值。t5\-t6 阶段，由于电感电流不能突变，开关管 SA1 关断，SA2 导通，电感 LA 通过 SA2 反并联二极管为电容 C2 充电。 t6\-t7 阶段，开关管 SA1 关断，SA2 关断，SA2 反并联二极管导通，电感 LA 通过 SA2反并联二极管继续为电容 C2 充电，电感电流减小。

1.3.3 开关状态类型 3

当 t\=t10 时，电容电压达到稳态均衡，电容电压VC1≈VC2。t10\-t11 阶段，VC1\>VC2，开关管 SA1 导通，SA2 关断，电容 C1 通过开关管 SA1 对电感 LA 充电储能。t11\-t12 阶段，开关管 SA1 关断，SA2 反并联二极管导通，电感 LA 为电容 C2 充电储能。 t12\-t13 阶段，VC2\>VC1,开关管 SA1 关断，SA2 导通，电容 C2 对电感 LA 储能。 t13\-t14阶段，开关管 SA1 反并联二极管导通，SA2 关断，电感LA 为电容 C1 储能。

2\. 均压电感参数计算

当电容电压稳态均衡时，单电感均压电路工作电流较小，因此为了节约成本，均压电路开关管选型时要求为高电压、小电流。 单电感均压电路电感值过小将会导致电感峰值电流过大，容易烧毁开关管； 电感值过大将会导致电感 LA 在一个开关周期内所储存的能量不足，导致均压能力不强。 为了同时满足均压能力的要求和保证电感值尽量小，以保证单电感均压电路工作的安全可靠和减小其重量与体积，因此，对电感 LA 参数选取范围的计算具有重大意义。

当单电感均压电路在两支撑电容电压极度不均衡状态下投入运行时，均压电路将会在数个开关周期内一直处于开关状态类型 1 的状态。 单电感均压电路利用电感与电容之间能量交换的形式，将能量从电压偏高的电容转移到电感中，再利用电感将能量转移给电压偏低的电容。

当支撑电容电压极度不均衡时，单电感均压电路工作于开关状态类型 1， 经过 n 个开关周期，电感电流达到峰值，电感 LA 所储存的能量为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFGWSnbMbr9DkLvSlfo96Dnh7U6KxLQiarRrtl3ibEeGGf7TWs6v1D78KA/640?wx_fmt=png&from=appmsg)

考虑开关管及电感 LA 的耐压、耐流特性，设计电感 LA 正常工作最大瞬态电流为 imax，则电感 LA 所储存的能量为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFez06ZvLppm6q5biaE7utdNic6KWCKG9iaroageUjWVyAGadyjbTiaBsNPg/640?wx_fmt=png&from=appmsg)

在 t0\-t1 阶段，单电感均压电路工作模态如图 2（a）所示。 令 C1\=C2\=C，当 t\=t0 时，单电感均压电路投入运行，此时电感电流 iLA 将从“0”开始线性增加，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFo53icq7XcIW9TkSdYqO0ibXQXCNL6K4uNiajKEtAY3D8OeLFUn3Tpliaug/640?wx_fmt=png&from=appmsg)

单电感均压电路正常工作状态下，为了满足均压的动态性能以及电感和开关管的电流承受能力，防止因电感电流超过开关管的承受能力而过流炸毁，均压电感应满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrF4WVKVEgeFUm8bUclD9icBzouqtQbHbqREjPRntwnVPxUBlibCKjj3teg/640?wx_fmt=png&from=appmsg)

由式（1）~式（4）可知，电感 LA 应满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFDfiblvg5ay5zC2iapuBz9LnVDialbw7oe6Ljpqlf5ArviaDgUK8gmbDRNA/640?wx_fmt=png&from=appmsg)

当单电感均压电路工作于开关状态类型 3 时，在一个开关周期内，电容对电感的充电和电感对电容的充电能够达到平衡。 此时，单电感均压电路一个开关周期内将在工作模态 1 和工作模态 2（工作模态 3 和工作模态 4）之间切换。 考虑到电感 LA 稳态时最大峰值电流为 imax\_stab，可得电感 LA 的电压与电流之间的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFLZOoB3w7tibSlu9SlPaqMOibUwiaNmeBmBG3lk5cRL7ia6PgHtB2Yia3FDw/640?wx_fmt=png&from=appmsg)

因此，稳态时所需的最大电感为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFVsw2ichAMjpMbhOpibicOsMOllOhzd7T839PpKKeCxBj7KU5VqXIYrWKA/640?wx_fmt=png&from=appmsg)

由式（5）和式（7）可得，电感 LA 的取值范围为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrF9JZzicLIj4TvV0PRiabIakFz5ZPo6DQCZPzeRibKdJCj2AdntQgPlEpibQ/640?wx_fmt=png&from=appmsg)

3\. 仿真与实验

为了验证单电感均压电路的可行性与有效性，基于 Matlab/Simulink 仿真平台搭建模型进行仿真验证。 基于充电机的小功率实验平台加入单电感均压模块化电路，对其均压能力进行实验验证。 仿真和实验参数见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrF5giaVc1XWvRmUuTznl0eFFaxrMwKqTbuAIKZ8xib0FmDQBB6tkUpMGJg/640?wx_fmt=png&from=appmsg)

3.1 仿真验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFy04O2cRElx5mqtkNiar07GdtLQV1Rd2IB4KVBsyDPQRiblPqIbPQibH8A/640?wx_fmt=png&from=appmsg)

图 5 为充电机正常运行状态时，变压器原边电压 VP、副边电压 VS 以及变压器原边电流 iP 波形。原边输出三电平电压，副边输出两电平电压，原边电压相位超前于副边电压相位，功率实现正向传输。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFUCvk6AYMmPaKIxcZX8EH0bagZLQFs5icaOGUNv1ZarCMAibYS3tkAJFA/640?wx_fmt=png&from=appmsg)

图 6 为充电机启动到支撑电容电压出现不均衡状态再到单电感均压电路投入运行的动态波形。阶段Ⅰ为充电机启动过程， 系统响应速度较快，阶段Ⅱ为支撑电容电压出现不均衡状态，阶段Ⅲ为单电感均压电路投入，支撑电容电压恢复均衡状态过程。 当支撑电容电压出现不均衡状态时，变压器电流将会出现直流偏移，若长时间运行将导致变压器因铁芯饱和而过热损坏。 当单电感均压电路投入运行时，变压器电流将会恢复正常状态，无直流偏移。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrF9fGv3RyBEyWKiaq14Npu9xrwhtQVYkmhMcbwwyROd7kTWOA36avrsjw/640?wx_fmt=png&from=appmsg)

图 7（a）为单电感均压电路开关管驱动信号的波形，当单电感均压电路投入运行时，支撑电容电压极度不均衡。 因此，开始阶段，单电感均压电路工作于开关状态类型 1， 只在工作模态 1 和工作模态 2之间切换，上支撑电容对电感 LA 充电，电感 LA 再为下支撑电容充电。当支撑电容电压均衡时，均压电路在 4 种工作模态间不断切换。 图 7（b）为支撑电容电压仿真波形，0.2 s 之前支撑电容电压处于极度不均衡状态；在 0.2 s 时投入单电感均压电路，通过电感LA 将能量从电压高的支撑电容传递给电压低的支撑电容， 以保证支撑电容电压能够在短时间内恢复均衡。 图 7（c）为单电感均压电路的电感电流波形，均压开始阶段，支撑电容电压极度不均衡。一个开关周期内， 电感 LA 存储的能量大于其释放的能量，电感电流不断增加。电感电流的峰值与电感值、支撑电容值、单电感均压电路投入时电容电压差值相关，因此， 单电感均压电路在满足均压电感设计条件范围时， 通过增大电感值和减小单电感均压电路投入时电容电压差值以减小电感电流峰值避免开关管因过流炸毁。当支撑电容电压均衡时，电感在支撑电容之间进行能量交换的电流较小。

3.2 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFwCK3mMNwxKVqiabNflyNXxkxKxM3lgO1wsHqEObd1ibUOIaGT9uj4UrQ/640?wx_fmt=png&from=appmsg)

基于 SiC MOSFET 器件的单电感均压实验平台如图 8 所示，由电压传感器、FPGA 主控制器、SiC MOSFET 驱动电路，及支撑电容放电电路构成均压系统模块。 为保证充电机在停机检修状态下支撑电容无剩余电荷，利用放电电路为支撑电容放电。 采用 FPGA 为主控制器，型号为EP3C55F484I7，单电感均压电路开关管采用科锐公司的 SiC MOSFET器件，型号为 C2M0045170D。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFSJPicfloKuSeBcsjYbg6nlahmGDfNssybOjutcIUUliaaRGljUUghDZg/640?wx_fmt=png&from=appmsg)

图 9 为单边三电平控制下充电机工作电压、电流波形。 变压器原边输出三电平，副边输出两电平。原边电压相位超前于副边电压，功率实现正向传输。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFjcZ4iap3YThPXD5NltklX5MNTVicXRZFCibWHaUSNwWQSricCH3xqmh87g/640?wx_fmt=png&from=appmsg)

图 10 为单电感均压电路开关管电压应力和电感 LA 电流实验波形。 支撑电容电压均衡时，电感 LA电流较小，在一个开关周期内单电感均压电路在两种工作模态中依次切换。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldUQWuVs0UdibB92a6QMzrFoFUnHL6Y4fn8DfU4uPwcm3F0bTVem19lW8GhaAGaT5cGtAJbm971DQ/640?wx_fmt=png&from=appmsg)

图 11 为支撑电容电压动态实验波形， 阶段Ⅰ为支撑电容电压处于均衡状态，阶段Ⅱ为支撑电容电压不均衡状态， 阶段Ⅲ为单电感均压电路投入。可见, 支撑电容电压能够快速恢复到均衡状态，且电压均衡状态下两支撑电容电压的差值较小。

4\. 结语

研究了一种单电感均压电路对充电机中三电平半桥变换器支撑电容电的均衡作用。 对单电感均压电路的工作模态进行分析，理论上该拓扑结构只进行能量转移而不存在能量的损耗。 对均压电路开关状态类型进行分析，并根据其开关状态类型计算了单电感均压电路电感选取范围，为均压电感的选取提供了依据。 最后通过小功率实验验证了单电感均压电路的可行性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)