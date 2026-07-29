# SiC MOSFET 短路特性及过流保护研究


> 原文地址: [https://mp.weixin.qq.com/s/XqRk6ucWCFM7DD9WwM0Ibw](https://mp.weixin.qq.com/s/XqRk6ucWCFM7DD9WwM0Ibw)

**文章来源：**中国电机工程学报

**作者：**王占扩 1，童朝南 1，黄伟超 2(1．北京科技大学自动化学院；2．北京市电力节能关键技术协同创新中心(北方工业大学)

**摘要：**为了提高电力电子装置中 SiC MOSFET 可靠性，对SiC MOSFET 短路特性和过流保护进行研究。首先在不同的母线电压和环境温度下，对处于短路状态的 SiC MOSFET的电流 IDS 和导通压降 VDS(ON)进行测量和分析，在此基础上设计基于 VDS(ON)检测的过流保护电路，比较两种消隐电路对保护的影响，实验证明，在消隐电路工作时，较大的充电电流可有效缩短保护时间，但电路功率消耗较大。针对半桥直通短路，根据 SiC MOSFET 的工作特性，提出一种基于门极电压 VGS 检测的直通短路保护方法，将半桥两只 SiC MOSFET 的 VGS 电压于门极阈值电压比较，如果同时超过阈值电压，可判断发生直通短路，实验表明，提出的保护方法具有保护时间快，短路电流小的特点，与 VDS(ON)检测的过流保护电路配合，可以有效地保护 SiC MOSFET。

**关键词：**SiC MOSFET；特性短路；过流保护；VDS(ON)检测；VGS 检测

**0 引言**

碳化硅(silicon carbide，SiC)功率器件具有宽禁带、耐高温、低开关损耗等特点，比传统的硅器件更适用于高温、高功率密度的场所。碳化硅金属氧化物半导体场效应晶体管 (silicon carbide metal-oxide-semiconductor field-effect transistor，SiC MOSFET)较传统的硅 MOSFET 具有更高的阻断电压，更高的工作温度，更低的导通电阻，在电力系统\[1\]、高密度电力电子变换器、新能源汽车\[2-3\]等场所具有良好的应用前景。在应用过程中，由电磁干扰或者控制错误等引起的短路、过流故障使功率器件承受几倍甚至十几倍的额定电流，是功率器件损坏的一个重要原因。因此 SiC MOSFET 短路特性和驱动保护电路是 SiC MOSFET 应用的研究热点。

有学者对 SiC MOSFET 的短路特性进行了研究\[4-9\]，文献\[4-5\]在不同壳温下对 Cree 公司和 Rohm公司不同型号商业 SiC MOSFET 的短路特性进行了测试，指出随着母线电压和温度升高，短路耐受逐渐下降，但不同公司的功率器件的短路耐受也有明显不同。文献\[4\]指出在短路过程中，由于热量积累，漏电流快速增大，最后导致功率器件无法关闭而失效。文献\[6\]通过对比 Si 器件与 SiC 器件的短路特性，指出在相同的短路条件下，SiC 器件的电流可以达到 Si 器件的 5~8 倍，更适合高功率密度的场所。文献\[7\]在不同母线电压、驱动电阻、驱动电压下对 SiC MOSFET 的短路特性进行分析，指出母线电压的增加会使短路电流峰值增加，驱动电阻会影响过关断电压，驱动电压增加，短路电流迅速增加。文献\[8-11\]对 SiC MOSFET 进行了重复短路试验，分析了器件参数的变化，指出随着短路时间和短路次数的增加，器件的导通电阻增大，短路电流峰值会减小，短路故障会加速器件的老化。

在电力电子变换器的故障中，短路、过流保护被视为最重要的保护。很多文献对各种功率器件的短路、过流保护就行了研究，常用保护方法主要有以下几种：第 1 种是基于 VDS(ON)检测保护法，如文献\[12-18\]，通过检测在开通状态下的功率器件的导通压降来判断功率器件是否发生短路状态，在IGBT 的商业驱动芯片中应用广泛。文献\[12\]采用商业的驱动芯片的退饱和检测功能来实现光伏逆变器中的 SiC 器件的短路保护。其中文献\[13\]设计了一种改进的基于 VCE监测功能的驱动保护电路，可以根据不同的功率器件自动调整消隐时间，提高保护效果。第2 种方法是电流或电流变化率检测法\[14,19-25\]，通过检测功率器件的电流判断是否发生过流，常见的有基于开尔文源电流检测法\[14,19-20\]，罗氏线圈电流检测法\[21-22\]，同轴分流器电流检测法\[23\]和电流镜检测法\[24\]。文献\[25\]设计了一种变温度过流保护方法，通过测量 SiC MOSFET 的壳温，并根据壳温与最大电流关系来判断是否发生过流。第3 种保护方法是检测门极充电行为和 VCE/VDS(ON)检测相结合，文献\[26\]根据 SiC MOSFET 发生硬开关故障和正常开通时门极充电特性的不同，设计了一种驱动保护电路，通过监测门极驱动电压和门极充电电流来判断是否发生短路，可以在 1s 内实现保护动作。文献\[27\]采用高速隔离变压器检测高压 SiC MOSFET的过流，可以在 22ns 完成过流保护。在以上方法中，基于 VCE/VDS(ON)检测的短路保护法为了保证功率器件完全开通，需要设置消隐电路，对于开关速度快的 SiC MOSFET，需要结合导通特性设置合适的消隐电路，否则会造成保护的死区，增大功率器件的损坏风险。电流检测方法中的开尔文源方法，同轴分流器方法和罗氏线圈方法具有动作迅速的特点，尤其是同轴分流器方法保护时间可以做到 10ns 以内\[23\]，但电路对模拟器件性能要求高，模拟器件价格昂贵，电路板布线要求高，设计难度大。开尔文源方法仅适用于具有开尔文连接的功率器件，罗氏线圈检测法只对交流信号敏感，无法检测直流信号。

本文首先对1200V/40A SiC MOSFET在不同电压和温度下的短路特性进行测试，设计 VDS(ON)的检测电路，采集分析实验波形。然后对基于 VDS(ON)检测过流保护电路进行研究，对不同充电方式的消隐电路进行分析和对比实验。针对桥式变流器提出一种基于门极电压 VGS 的直通短路保护电路，通过检测半桥互补 SiC MOSFET 的门极电压，判断是否发生直通短路，与 VDS(ON)的检测电路相配合，实现直通短路和过流双重保护。

**1 碳化硅 MOSFET 过流特性分析**

**1.1 测试平台![](SiC_MOSFET_短路特性及过流保护研究_images/img_000_cf466f2760cd.png)**

短路可以分为硬件短路和负载短路(过流)\[28-29\]，图 1 为短路实验装置原理图及实物图，图中：Udc为直流电源，由调压器、隔离变压器、整流桥组成；Cdc1、Cdc2 为两只 450V、2200F 电容，串联之后，母线电容为 900V、1100F；K1、K2、K3 为继电器；T1、T2 为 WOLF SPEED 公司的 1200V/40A SiC MOSFET C2M0080120D；R 为限流电阻；Ib 为250A 恒流源；Ddes 和 V 为 VDS(ON)测量的二极管和电压设备；C3 为吸收电容；Rm为同轴分流器。

实验步骤如下：首先闭合 K4，通过调压器缓慢升高输入电压，直流电源给母线电容 Cdc1 和 Cdc2 充电，充电结束之后闭合 K1、K2，为了防止吸收电容C3 充电电流太大，设置限流电阻 R 充电，C3 充电结束之后，闭合 K3，然后通过驱动电路控制 SiC MOSFET T1和 T2 进行实验。在短路特性实验时使用铜排将 T1的源极和漏极短接，T2作为测试器件。恒流源 Ib 为导通电压 VDS(ON)测量提供电流通路，二极管 Ddes 是用于保护 VDS(ON)检测电路与恒流源 Ib在 T2 未导通时免受直流母线高压损坏\[30-31\]。在 K1、K2、K3 继电器闭合情况下，从 a 点到 b 点电路的电感值为 154nH，电阻值为 0.11；从 c 点到 d 点电路的电感为 168nH，电阻为 0.12。

**1.2 不同直流母线电压下的短路特性**

![](SiC_MOSFET_短路特性及过流保护研究_images/img_001_7dabd2ec533f.png)

![](SiC_MOSFET_短路特性及过流保护研究_images/img_002_aa4ed0e392db.png)

为了保护 SiC MOSFET 在短路测试过程中经受过长的短路而损坏，根据短路耐受测试实验和文献\[5\]，在测试过程中，通过驱动电路给 T2 施加时长为 3.7S 的驱动脉冲，在室温 25℃，直流母线电压 550、625、725、800V，通过示波器采集 SiC MOSFET 漏源电压 VDS、电流 IDS、导通压降 VDS(ON)和驱动脉冲 VGS的波形，其中 VDS(ON)波形是导通压降与二极管压降之和，二极管型号为 BYV26，经过实验测量，在 250A 电流流过时，导通压降为 0.4V，实际的导通压降为测量值减去二极管导通压降。电流源 Ib 的供电电压为 18V。短路波形如图 2，表 1为实验设备。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_003_a6ae57c72348.png)

从实验波形可以看出，在室温 25℃，电压 550V时，短路电流 IDS 达到最大电流的上升时间约为0.66s，短路电流最大值约为 220A，此时的导通压降 VDS(ON)约为 7.6V。在电压 625、725、800V 时，短路电流 IDS 的上升时间逐渐减小，在 725V 时为0.6s，之后随着电压增加，上升时间基本不再在发生变化。随着电压升高，最大短路电流逐渐增大，从 550V 时的 220A 升高到 800V 时的 230A。随着电压升高，最大短路电流对应的导通压降 VDS(ON)在 550V 时的 7.6V 逐渐降低，800V 时降低为 6.4V。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_004_8d9de81b0317.png)

从短路特性曲线可以看出，在短路过程中，导通压降 VDS(ON)随着漏源电压发生波动，随着短路进行，产生的能量在芯片内部聚集，导致结温快速升高，导通电阻增大\[25\]，导通压降 VDS(ON)也快速升高，超过电流源的供电电压，测量二极管截止。

**1.3 不同壳温下的短路特性**

通过加热器对 SiC MOSFET 进行加热，等温度恒定一段时间之后，可以视为壳温恒定，然后施加短路试验。在直流母线电压 550V，环境温度为 50、100、125、150℃，对 T2 施加时长为 3.7s 的驱动脉冲，通过示波器记录漏源电压 VDS，电流 IDS和导通压降 VDS(ON)和驱动脉冲 VGS的波形，实验波形如图 3 所示。由图可知，在 550V，随着壳温升高，最大短路电流降低从 220A 降低到 205A，这是由于SiC MOSFET 的导通电阻具有正温度特性。不同的壳温下，短路电流达到最大值的上升时间逐渐变小，从 50℃的 0.66s 降低到 150℃的 0.6s，短路电流最大值对应的导通压降逐渐降低，50℃时约为7.1V，150℃时约为 6.6V。

**2 基于 VDS(ON)检测的过流保护电路设计**

**2.1 使用电流源给 Cblank 充电的 VDS(ON)检测过流保护设计**

从本文第 2 部分的短路试验可以看出，发生短路时，短路电流在 0.6s 就可以达到最大值，最大为额定值的 5.5 倍，由于短路造成的能量在芯片内部集聚，导致结温迅速升高，文献\[5\]指出，在直流母线电压为 750V 时，短路耐受时间仅为 5s，失效时的结温可以达到 800℃。因此，设计可靠的短路保护是 SiC MOSFET 应用的重要保护措施。本文对基于 VDS(ON)检测的过流保护方法进行了研究，原理借鉴具有退饱和保护功能的商业 IGBT 驱动芯片\[31\]原理如图 4(a)所示。其中商业驱动芯片IXDN609SI 及驱动电阻构成驱动电路，比较器 Ac构成 VDS(ON)比较电路，用于将 VDS(ON)检测值与比较阈值 VREF 进行比较，判断是否发生过流。非门 AN和 N 沟道 MOSFET M 构成钳位电路，用于防止 SiC MOSFET 未完全开通时比较电路误动作。电流源 Ib和检测二极管 Ddesat 构成 VDS(ON)检测电路，在 SiC MOSFET开通时检测VDS(ON)值。电流源Ib电容Cblank构成消隐电路，其作用是为防止保护电路在 SiC MOSFET 开通过程中 VDS没有降低到保护阈值之下而引发误动作。驱动芯片输入高电平，输出也为高电平。当驱动信号没有到来时，PWM 为低电平，此时非门 AN输出为高电平，MOSFET M 开通，电流源电流经过电阻流入 M，电流如 i1，此时比较器Ac 的反相输入端 Vdesat 被钳位在低电平，Ac 输出保持为低电平。当驱动脉冲到来时，PWM 跳变为高电平，非门 AN输出为低电平，MOSFET M 关闭，电流源的电流经过 Rdesat给电容 Cblank充电，电流如i2，充电时间即为消隐时间 tblank：

![](SiC_MOSFET_短路特性及过流保护研究_images/img_005_7ed624ee959d.png)

式中 ICHG为电流源 Ib 的输出电流，消隐时间要保证SiC MOSFET 完全开通。Cblank 充电完成后 SiC MOSFET 已经开通，电流流过电阻 Rdesat 和二极管Ddesat 流入 SiC MOSFET，电流入 i3。由于电阻 Rdesat取值为 100，电压降相对于 SiC MOSFET 导通压降与二极管导通压降可以忽略，这样比较器的反相输入端 Vdesat的值为 SiC MOSFET 导通压降与二极管导通压降之和。当 SiC MOSFET 发生短路或者过流时，导通压降超过比较阈值 VREF，比较器 Ac 输出电平由高电平跳变为低电平，通过保护逻辑触发保护机制。考虑电能损耗，电流源 Ib 的输出电流一般在 250~500A，HCPL316J 等驱动芯片推荐的Cblank 值不小于 100pF\[31\]，这样可以保证保护电路具有足够的抗干扰能力，Cblank 取 100pF，电流源 Ib取250A，Vdesat取7V，通过式(1)计算，tblank为2.7s。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_006_5e19cadb8bb7.png)

过流保护实验如图 4(b)所示，在直流电压800V，在将图 1 中的 SiC MOSFET T1 和 T2 通过0.3电阻连接，同时给 T1 和 T2 门极施加 3.7s 的驱动脉冲，采集直流母线电压，驱动脉冲和电流。从实验波形来看，保护电路在 2.5s 内完成过流保护，短路电流最大值为 220A。相比于开关快速的SiC MOSFET，保护时间略长。可以通过加大充电电流可以减少消隐时间来缩短保护时间，但是由于电流源一直处于工作状态，会导致保护电路的功耗增大。

**2.2 消隐电路使用门极电压充电的 VDS(ON)检测过流保护**

为了缩短消隐电路电容 Cblank 的充电时间，文献\[12-14\]使用外部电源来完成消隐电路充电，其中使用门极电压充电较为理想，即可以避免在 SiC MOSFET 长时间关断产生较大的功率损耗，又具有较短的 tblank，具体电路如图 5(a)，其中消隐时间可由式(2)计算得到

![](SiC_MOSFET_短路特性及过流保护研究_images/img_007_bce7ac0ed8e1.png)

式中：RCHG 为充电电阻；Vcc 为充电电压。保护电路工作原理与图 4 相似，区别在于消隐电路的充电部分。当驱动脉冲到来时，门极电压通过电阻 RCHG给电容 Cblank充电，在电路中，RCHG为 2k，电容为 200pF，驱动电压为 18V，tblank 约为 200ns，保护波形如图 5(b)所示。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_008_68f2578ed037.png)

由图 5 可知，采用门极电压充电的保护电路在500ns 内完成保护，最大短路电流为 85A，该保护电路更适合 SiC MOSFET。

**3 基于 VGS检测的直通短路保护电路设计**

**3.1 直通短路检测原理**

![](SiC_MOSFET_短路特性及过流保护研究_images/img_009_c6680ae4a75d.png)

短路类型一般分为 3 类\[28-29\]，第 1 类和第 2 类最终全部转换为半桥内上下桥臂的直通短路。在桥式两电平变流器中，半桥互补桥臂发生直通短路时直流母线通过导通的功率器件短接，产生很大的短路电流，如果不及时保护，就会造成功率器件损坏。根据的 SiC MOSFET 特性，当门极电压超过门极阈值之后，SiC MOSFET 开始导通，因此通过检测门极电压就可以判断是否是处于导通状态。本文提出了一种基于门极电压检测的直通保护方法，通过检测半桥互补 SiC MOSFET 的门极信号判断是否发生直通短路。直通短路保护电路功能框图如图 6 所示，包括驱动电路、VGS 信号检测电路、直通故障综合电路和 VGS信号传输电路组成。图中红色虚线框为驱动电路，用于驱动 SiC MOSFET。绿色虚线框内为 VGS 信号检测电路，用于检测门极信号。蓝色虚线框内为 VGS信号传输电路，用于互相传输半桥互补桥臂的门极状态信号。直通故障综合电路将半桥互补桥臂功率器件的门极检测信号进行逻辑综合，判断是否发生直通短路，并可以锁存故障信号，关断 SiC MOSFET。下面将详细介绍各个电路的设计原理。

**3.2 直通短路保护电路设计**

通过高速比较器检测门极电压 VGS，SiC MOSFET 的开通阈值作为比较器的比较参考值，连接到比较器的正相输入端。门极电压信号作为被检测值，连接到比较器的反相输入端。当 SiC MOSFET处于关闭状态时，门极电压信号为负电压，比较器输出高电平，当门极电压超过开通阈值时，比较器输出跳变为低电平。

VGS信号传输电路将半桥中一只 SiC MOSFET的门极信号检测电路的输出传送到另外一只 SiC MOSFET 的保护电路中，在电路中使用高速数字隔离器 ADUM1200 传输门极电压检测电路输出信号，传输电路的输入和输出设置为同相电路。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_010_dc240ac8ef77.png)

直通故障综合电路将 2 只 SiC MOSFET 的门极电压检测信号进行综合处理，判断是否发生直通短路。半桥 2 只互补 SiC MOSFET 的工作状态可以分成 4 种逻辑组合：2 只 SiC MOSFET 门极电压全部超过开通阈值，处于直通短路状态，此时门极电压检测电路输出均为低电平；2 只 SiC MOSFET 同时关闭，门极检测电路输出均为高电平；2 只 SiC MOSFET 有一只开通，一只关闭，门极时检测信号输出为高电平、低电平与低电平、高电平。根据以上的逻辑关系，列出如表 2 所示的真值表，其中，CMPg1 和 CMPg2 是图 6 中互补 SiC MOSFETT T1 和T2 门极电压检测结果，1 表示高电平，SiC MOSFET关闭，0 表示低电平，SiC MOSFET 开通，Out 为逻辑门电路输出，经过分析，逻辑电路采用或门作为综合逻辑芯片，只有当互补 SiC MOSFET 全部开通时，输出才为低电平。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_011_158e1582a84c.png)

![](SiC_MOSFET_短路特性及过流保护研究_images/img_012_56bc8b3c3643.png)

当检测到发生直通短路故障之后，需要关闭SiC MOSFET 并锁存故障信号，锁存电路采用 D 锁存器 74LS75，故障综合原理图如图 7 所示，其中VDS(ON)故障检测是基于导通电压VDS(ON)检测的过流保护电路的输出，低电平有效，与直通电路保护经过与门合并为总信号 OB，经过非门 NOT 后进入 D锁存器的输入端，Q 输出端经过非门后为故障锁存信号 Fault。Q 端输出经过非门 NOT 与 CLK 信号一起经过与门 AND 作为 D 锁存器的 G 输入。CLK 一直是高电平，在未出现故障时，OB 是高电平，D是低电平，Q 是低电平，G 也为高电平，根据表 3，Fault 输出为高电平。当直通短路或者过流故障发生时，OB 变为低电平，D 锁存器输入变为高电平，输出端 Q 跃变为高电平，经过非门之后输出变为低电平，D 锁存器的 G 变为低电平，根据表 3，D 锁存器将 Q 输出的高电平信号锁存，故障输出 Fault被锁存为低电平。将半桥另外一只 SiC MOSFET 的门极检测信号CMPg与本桥臂的故障锁存信号Fault一起经过与门生成 Lock 信号，与本桥臂的 PWM 信号一同经过与门做为驱动芯片的输入信号。这样，当互补桥臂开通时，CMPg 一直为低电平，本桥臂的驱动芯片输入一直保持为低电平，避免了互补桥臂发生直通短路。表 3 中的 Q0 是锁存器上一刻的输出状态。直通保护整体电路图如图 8 所示。直通保护电路的主要芯片如表 4 所示。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_013_d446297fc1c6.png)

![](SiC_MOSFET_短路特性及过流保护研究_images/img_014_85c21c54b79b.png)

**3.3 直通保护实验**

![](SiC_MOSFET_短路特性及过流保护研究_images/img_015_f557219a420e.png)

在图 1 的实验装置上对直通保护电路进行了测试，分别测试了 C2M0080120D 和罗姆公司 1200V/31A 沟槽栅型 SiC MOSFET SCT3080KL，直流母线电压分别设置为 500 和 800V，实验参数及设备如表 5 所示。在试验过程中，SiC MOSFET T1 和 T2的门极同时加载时长为 3.7s 的驱动脉冲，发生直通短路，通过示波器记录电流和直流母线电压及驱动脉冲信号，如图 9 所示。

![](SiC_MOSFET_短路特性及过流保护研究_images/img_016_a43c8cb77212.png)

从实验波形可以看出，提出的直通短路保护方法在 500 和 800V 直流母线电压时，对平面栅型 SiC MOSFET C2M0080120D 和沟槽栅型 SiC MOSFET SCT3080KL 的直通短路具有较好的保护，可以在200ns 内关闭 SiC MOSFET，最大电路电流为 50A。相比于基于 VDS(ON)检测的过流保护，响应时间短，过流电流小，直流母线引起的波动也小很多。

**4 结论**

本文首先研究了 SiC MOSFET 在不同电压和温度下的短路特性，然后对具有不同消隐电路的VDS(ON)检测的过流保护方法进行了分析，并通过实验进行了对比，最后介绍一种基于门极电压 VGS检测的直通短路保护方法，可通过检测半桥互补功率器件的门极电压判断是否发生直通短路，实验表明：

1）电压升高会引起短路电流增大，电流上升时间减小，最大电流对应的导通压降降低。温度升高会引起最大短路电流和对应的导通压降降低，电流上升时间减小。SiC MOSFET 的短路电流最快在0.6s 达到最大值，约为额定值的 5.5 倍，短路或者过流保护需迅速完成，否则容易造成功率器件损坏。

2）在基于 VDS(ON)检测的过流保护电路中，消隐电路采用门极电压充电相比于电流源充电具有更短的保护时间，更小的过流电流，适用于 SiC MOSFET 构成的桥逆变器负载短路或正常工作中导通时间过长导致负载电流过大等过流保护。

3）基于 VGS检测的直通短路保护可用于半桥互补功率器件驱动信号受干扰造成误触发或者驱动信号极性设置错误引起直通短路等硬件短路，具有保护迅速的特点，与基于 VDS(ON)检测的过流保护电路配合使用，可以实现电力电子装置的多种短路、过流保护。

参考文献

\[1\] 盛况，郭清，张军明，等．碳化硅电力电子器件在电力系统的应用展望\[J\]．中国电机工程学报，2012，32(30)：1-7．

\[2\] 王学梅．宽禁带碳化硅功率器件在电动汽车中的研究与应用\[J\]．中国电机工程学报，2014，34(3)：371-379．

\[3\] 张栋，范涛，温旭辉，等．电动汽车用高功率密度碳化硅电机控制器研究\[J\]．中国电机工程学报，2019，39(19)：5624-5634．

\[4\] Wang Zhiqiang，Shi Xiaojie，Tolbert L M，et al．Temperature-dependent short-circuit capability of silicon carbide power MOSFETs\[J\]．IEEE Transactions on Power Electronics，2016，31(2)：1555-1566．

\[5\] 邵伟华，冉立，曾正，等．SiC MOSFET 短路特性评估及其温度依赖性模型\[J\]．中国电机工程学报，2018，38(7)：2121-2131．

\[6\] Xing Diang，Hu Boxue，Yu S，et al．Current saturation characteristics and single-pulse short-circuit tests of commercial SiC MOSFETs\[C\]//2019 IEEE Energy Conversion Congress and Exposition (ECCE)．Baltimore，USA：IEEE，2019：6179-6183．

\[7\] Qin Haihong，Dong Yaowen，Xu Kefeng，et al．A comprehensive study of the short-circuit characteristics of SiC MOSFETs\[C\]//2017 12th IEEE Conference on Industrial Electronics and Applications (ICIEA)．Siem Reap，Cambodia：IEEE，2017：332-336．

\[8\] Eni E P，Bęczkowski S，Munk-Nielsen T，et al．Short-circuit degradation of 10kV 10A SiC MOSFET\[J\]．IEEE Transactions on Power Electronics，2017，32(12)：9342-9354．

\[9\] Wei Jiaxing ， Liu Siyang ， Yang Lanlan ， et al ．Comprehensive analysis of electrical parameters degradations for SiC power MOSFETs under repetitive short-circuit stress\[J\]．IEEE Transactions on Electron Devices，2018，65(12)：5440-5447．

\[10\] Sun Jiahui，Wei Jin，Zheng Zheyang，et al．Short circuit capability and short circuit induced VTH instability of a 1.2kV SiC power MOSFET\[J\]．IEEE Journal of Emerging and Selected Topics in Power Electronics，2019，7(3)：1539-1546．

\[11\] Berkani M，Lefebvre S，Khatir Z．Saturation current and on-resistance correlation during during repetitive short-circuit conditions on SiC JFET transistors\[J\]．IEEE Transactions on Power Electronics，2013，28(2)：621-624．

\[12\] Shi Yuxiang，Xie Ren，Wang Lu，et al．Switching characterization and short-circuit protection of 1200V SiC MOSFET T-Type module in PV inverter application\[J\]．IEEE Transactions on Industrial Electronics，2017，64(11)：9135-9143．

\[13\] Chen Ming，Xu Dehong，Zhang Xingyao．et al．An improved IGBT short-circuit protection method with selfadaptive blanking circuit based on VCE measurement\[J\]．IEEE Transactions on Power Electronics，2018，33(7)：6126-6136．

\[14\] Wang Zhiqiang，Shi Xiaojie，Xue Yang，et al．Design and performance evaluation of overcurrent protection schemes for silicon carbide (SiC) power MOSFETs\[J\]．IEEE Transactions on Industrial Electronics，2014，61(10)：5570-5581．

\[15\] Ji Shiqi，Laitinen M，Huang Xingxuan，et al．Short-circuit characterization and protection of 10kV SiC MOSFET\[J\]．IEEE Transactions on Power Electronics，2019，34(2)：1755-1764．

\[16\] Sadik D P，Colmenares J，Tolstoy G，et al．Short-circuit protection circuits for silicon-carbide power transistors\[J\]．IEEE Transactions on Industrial Electronics，2016，63(4)：1995-2004．

\[17\] Kumar A，Ravichandran A，Singh S，et al．An intelligent medium voltage gate driver with enhanced short circuit protection scheme for 10kV 4H-SiC MOSFETs\[C\]//2017IEEE Energy Conversion Congress and Exposition(ECCE)．Cincinnati，USA：IEEE，2017：2560-2566．

\[18\] Rice J，Mookken J．SiC MOSFET gate drive design considerations\[C\]//2015 IEEE International Workshop on Integrated Power Packaging (IWIPP)．Chicago，IL，USA：IEEE，2015：24-27．

\[19\] Sukhatme Y，Krishna M Y，Ganesan P，et al．A drain current based short circuit protection technique for SiC MOSFET\[C\]//2018 International Symposium on Devices，Circuits and Systems (ISDCS)．Howrah，India：IEEE，2018．

\[20\] Sun Keyao，Wang Jun，Burgos R，et al．Analysis and design of an overcurrent protection scheme based on parasitic inductance of SiC MOSFET power module\[C\]//2018 IEEE Applied Power Electronics Conference and Exposition (APEC)．San Antonio，TX，USA：IEEE，2018：2086-2812．

\[21\] Yoon H，Cho Y．Application of the Rogowski coil current sensor for overcurrent detection and blocking in power conversion systems\[C\]//2019 10th International Conference on Power Electronics and ECCE Asia (ICPE2019-ECCE Asia)．Busan，Korea (South)：IEEE，2019．

\[22\] Wang Jun，Shen Zhiyu，Dimarino C，et al．Gate driver design for 1.7kV SiC MOSFET module with Rogowski current sensor for short circuit protection\[C\]//2016 IEEE Applied Power Electronics Conference and Exposition(APEC)．Long Beach，CA，USA：IEEE，2016：516-523．

\[23\] Zhang Wen，Wang F，Zhang Zheyu，et al．Fast widebandgap device overcurrent protection with direct current measurement\[C\]//2019 10th International Conference on Power Electronics and ECCE Asia (ICPE 2019-ECCEAsia)．Busan，Korea (South)：IEEE，2019．

\[24\] Cui Yujia，Zhang Zhe，Yi Peizhong，et al．Investigation of current mirror based overcurrent protection for 1200V 800A high power SiC MOSFET modules\[C\]//2019 IEEE Energy Conversion Congress and Exposition (ECCE)．Baltimore，MD，USA：IEEE，2019：6161-6165．

\[25\] Wang Zhankuo，Tong Chaonan，Zhang Yongchang，et al．Research on temperature-dependent overcurrent protection schemes for SiC MOSFETs\[C\]//2018 21st International Conference on Electrical Machines and Systems(ICEMS)．Jeju，South Korea：IEEE，2018：822-826．

\[26\] Horiguchi T，Kinouch S I，Nakayama Y，et al．A fast short-circuit protection method using gate charge characteristics of SiC MOSFETs\[C\]//2015 IEEE Energy Conversion Congress and Exposition (ECCE)．Montreal，QC，Canada：IEEE，2015：4756-4764．

\[27\] Rothmund D，Bortis D，Kolar J W，et al．Highly compact isolated gate driver with ultrafast overcurrent protection for 10kV SiC MOSFETs\[J\]．CPSS Transactions on Power Electronics and Applications，2018，3(4)：278-291．

\[28\] Lutz J，Basler T，et al．Short-circuit ruggedness of highvoltage IGBTs\[C\]//2012 28th International Conference on Microelectronics Proceedings．Nis，Serbia：IEEE，2012：243-250．

\[29\] Chokhawala R S，Catt J，Kiraly L，et al．A discussion on IGBT short-circuit behavior and fault protection schemes \[J\]．IEEE Transactions on Industry Applications，1995，31(2)：256-263．

\[30\] 胡亮灯，孙驰，陈玉林，等．大功率 IGBT 的短路故障检测\[J\]．电工技术学报，2018，33(11)：2592-2603．

\[31\] HCPL-316J 2.5 Amp gate drive optocoupler with integrated (VCE) desaturation detection and fault stat\[EB/OL\]．https://docs.broadcom.com/doc/AV02-0717EN．

![](SiC_MOSFET_短路特性及过流保护研究_images/img_017_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](SiC_MOSFET_短路特性及过流保护研究_images/img_018_3ade3c3d8599.jpg)![](SiC_MOSFET_短路特性及过流保护研究_images/img_019_84aa944feb13.jpg)