# 简单结构的SiC MOSFET低延迟dv/dt 和 di/dt 闭环有源栅极驱动器设计

原创 朱旭豪 、陈武 SiC碳化硅MOS管及功率模块的应用 2025-12-09 13:55 广东

> 原文地址: [https://mp.weixin.qq.com/s/ftdwBvojN9B0zGSY\_tABtg](https://mp.weixin.qq.com/s/ftdwBvojN9B0zGSY_tABtg)

 文章来源：IEEE-电力电子学

XUHAO ZHU 1, WU CHEN 1 (Senior Member, IEEE), AND YUBO YUAN21Center for Advanced Power Conversion Technology and Equipment, School of Electrical Engineering, Southeast University, Nanjing 210096, China 2State Grid Electric Power Research Institute Nanjing Branch, Nanjing 210000, ChinaCORRESPONDING AUTHOR: WU CHEN (email: chenwu@seu.edu.cn)This work was supported by the National Key Research and Development Program of China under Grant 2023YFB2407400.  

作者：朱旭豪 ¹、陈武 ¹（美国电气和电子工程师协会高级会员）、袁宇波 ²

1.东南大学电气工程学院先进电力变换技术与装备中心，中国南京 210096； 

2.国网电力科学研究院南京分院，中国南京 210000； 

通信作者：陈武（电子邮箱：chenwu@seu.edu.cn）

ABSTRACT 

This study addresses the issue of voltage and current overshoot in SiC MOSFET applications byproposing a novel Kelvin-source series active gate driver (AGD). The proposed AGD combines the benefits ofexisting structures while utilizing a closed-loop dv/dt and di/dt mixed control method, ensuring adaptabilityof varying load conditions. The implementation circuit consists mainly of simple BJT followers and resistorcapacitor passive networks. The circuit features real-time feedback control, straightforward design, and rapidresponse time. Through simulation and experiment, the proposed AGD demonstrated effective suppression ofovershoot and lower switching loss compared to conventional gate driver, while enhancing EMI performanceduring hard-switching. The proposed AGD shows simplicity and versatility, proving its potential in SiCMOSFET applications.

摘要：针对碳化硅（SiC）MOSFET 应用中的电压和电流过冲问题，本研究提出了一种新型开尔文源极串联有源栅极驱动器（AGD）。该有源栅极驱动器结合了现有结构的优点，采用闭环 dv/dt 和 di/dt 混合控制方法，确保了对变化负载条件的适应性。实现电路主要由简单的双极结型晶体管（BJT）跟随器和阻容无源网络组成，具有实时反馈控制、设计简洁和响应速度快等特点。通过仿真和实验验证，与传统栅极驱动器相比，所提出的有源栅极驱动器能有效抑制过冲，降低开关损耗，同时在硬开关过程中提升电磁干扰（EMI）性能。该有源栅极驱动器结构简单、通用性强，在碳化硅 MOSFET 应用中具有良好的应用前景。 

INDEX TERMS 

Silicon carbide (SiC), power MOSFET, active gate driver, voltage and current overshoot,switching loss, electromagnetic interference (EMI).

关键词：碳化硅（SiC）；功率 MOSFET；有源栅极驱动器；电压和电流过冲；开关损耗；电磁干扰（EMI） 

I. INTRODUCTIONWith 

the rapid development of power electronic technology,power electronic converters require higher efficiency, powerdensity, and reliability \[1\]. The emerging requirements challenge traditional silicon-based power devices as they haveapproached the intrinsic limit of Si material. The new generation of wide bandgap power electronic devices representedby SiC MOSFET has been widely adopted for various applications. Compared with Si MOSFET, SiC MOSFET has loweron-state resistance, faster switching speed, higher breakdown voltage and higher thermal conductivity. These superiorcharacteristics make SiC MOSFET fit the demands of highefficiency and high-power density applications \[2\], \[3\], \[4\].  

一、引言 

随着电力电子技术的快速发展，电力电子变换器对效率、功率密度和可靠性提出了更高要求 。这些新要求对传统硅基功率器件构成了挑战，因为硅材料已接近其本征极限。以碳化硅 MOSFET 为代表的新一代宽禁带电力电子器件已在各类应用中得到广泛采用。与硅MOSFET 相比，碳化硅MOSFET具有更低的导通电阻、更快的开关速度、更高的击穿电压和更高的热导率。这些优异特性使碳化硅MOSFET能够满足高效率、高功率密度应用的需求。 

Among all the characteristics of SiC MOSFETs, the mostprominent is fast switching speed. In fast-switching configuration, energy in the parasitic inductance and capacitancecauses voltage and current overshoot and oscillation. Switching speed, generally represented by dv/dt and di/dt, largelydetermines the magnitude of overshoot and oscillation \[5\].Due to the superior switching speed, safety operation of SiCMOSFET is challenged by high voltage and current stress,and EMI performance is also degraded. To ensure highperformance and safe operation of SiC MOSFET, gate driverfor SiC MOSFET has received widespread attention and research \[6\].

在碳化硅MOSFE 的所有特性中，最突出的是其快速的开关速度。在快速开关模式下，寄生电感和电容中存储的能量会导致电压和电流过冲及振荡。开关速度通常用 dv/dt（电压变化率）和 di/dt（电流变化率）表示，很大程度上决定了过冲和振荡的幅度。由于开关速度极快，碳化硅MOSFET的安全工作面临高电压和电流应力的挑战，电磁干扰性能也会下降。为确保碳化硅 MOSFET 的高性能和安全运行，其栅极驱动器受到了广泛关注和研究 。 

Traditionally, on/off drivers with fixed resistors are usedfor gate driver. This type of gate driver is often referredas conventional resistive gate driver (CGD). The simplest ismono-resistor CGD with a single gate drive resistor. Dualresistor CGD uses different resistor values for turn-on andturn-off. By changing the gate drive resistors, CGD has limited control of the switching speed \[7\]. Due to the fixed drivingstrength, although CGD can change the average dv/dt and di/dtvalues during the switching process, the waveform patternsof current and voltage during the switching action remainsconsistent. Overall, CGD is restricted by the tradeoff betweenloss, stress, and EMI \[8\].

传统上，栅极驱动器采用固定电阻的通断驱动器，这类栅极驱动器通常被称为传统电阻式栅极驱动器（CGD）。最简单的是单电阻传统电阻式栅极驱动器，仅采用一个栅极驱动电阻；双电阻传统电阻式栅极驱动器则在导通和关断过程中使用不同阻值的电阻。通过改变栅极驱动电阻，传统电阻式栅极驱动器对开关速度的控制能力有限 。由于驱动强度固定，尽管传统电阻式栅极驱动器可以改变开关过程中 dv/dt 和 di/dt 的平均值，但开关动作期间电流和电压的波形模式保持不变。总体而言，传统电阻式栅极驱动器受到损耗、应力和电磁干扰之间权衡关系的限制 。 

Active gate driver (AGD) targets this problem generally bydriving the gate with an altering voltage or current patternduring the switching process \[9\]. Precisely controlled drivingstrength during the switching transient optimizes the switching pattern, lowering the voltage and current overshoot.

有源栅极驱动器（AGD）主要通过在开关过程中以变化的电压或电流模式驱动栅极来解决这一问题 。在开关暂态过程中精确控制驱动强度，可优化开关模式，降低电压和电流过冲。  

Previous researches have shown a variety of AGD implementation methods. Resistor-switch array \[10\], controlledcurrent source \[11\], controlled voltage source \[12\] or anyother circuitry that modulates gate drive signal \[13\], \[14\]can be used for driving strength control. Za is controlledimpedance, which could be variable resistance, variable capacitance or controlled source. 

现有研究提出了多种有源栅极驱动器的实现方法，可通过电阻-开关阵列 、受控电流源 、受控电压源或其他任何能调制栅极驱动信号的电路来实现驱动强度控制。其中，Za 为受控阻抗，可以是可变电阻、可变电容或受控源。 

The simplified circuit structures of existing AGD are shownin Fig. 1. The existing AGDs can be divided into three categories based on circuit structure. The Kelvin-source (KS)node, as shown in Fig. 2, which is internally connected to theMOSFET’s source to minimize the influence of source currentfor gate driver, is used as reference point for gate drivers.Using the KS node as reference point, series impedance AGDplaces Za in series with the gate driver, parallel impedanceAGD places Za in parallel with the gate driver, and controlledsource AGD uses linear power amplifier as gate driver. Thiscategorization method clarifies the properties of placing modulation circuit in each part of the AGD circuit, and was helpfulfor understanding the designing procedure of the proposedAGD.

现有有源栅极驱动器的简化电路结构如图 1 所示。根据电路结构，现有有源栅极驱动器可分为三类。如图 2 所示的开尔文源极（KS）节点，其内部与 MOSFET 的源极相连，以最大限度地减少源极电流对栅极驱动器的影响，被用作栅极驱动器的参考点。以开尔文源极节点为参考点，串联阻抗型有源栅极驱动器将 Za 串联在栅极驱动器中，并联阻抗型有源栅极驱动器将 Za 并联在栅极驱动器两端，而受控源型有源栅极驱动器则采用线性功率放大器作为栅极驱动器。这种分类方法明确了调制电路在有源栅极驱动器电路各部分的配置特性，有助于理解所提出的有源栅极驱动器的设计过程。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_000_09c8c12392c5.png)

（a）串联阻抗型有源栅极驱动器 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_001_dd5ca36e218a.png)

（b）并联阻抗型有源栅极驱动器 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_002_a2faaa6ab03d.png)

（c）受控源型有源栅极驱动器 

（图 1 现有有源栅极驱动器电路结构）

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_003_f6cd16300a92.png)

（图 2 TO-247 四引脚封装及电路图） 漏极（D）、开尔文源极（KS）、源极（S）、栅极（G） 

Fig. 1(a) shows circuit diagram of series impedance AGD.The total gate drive impedance can be actively modulatedduring the switching process \[15\]. Because Za is tied to gatevoltage, the circuit has a floating reference voltage. Levelshifting circuit is needed to transmit signal to the floatingreference. For closed-loop feedback AGD, the fast-switchingspeed of SiC MOSFETs results in higher gain bandwidthproduct, making AGD more sensitive to feedback loop delay \[16\]. To avoid such drawback, this configuration usuallyadopts digital multi-switch scheme or vGS-based control \[15\],\[17\], which lacks flexibility.

图 1（a）为串联阻抗型有源栅极驱动器的电路图。在开关过程中，总栅极驱动阻抗可被主动调制 \[15\]。由于 Za 与栅极电压相连，该电路具有浮动参考电压，需要电平转换电路将信号传输至浮动参考点。对于闭环反馈有源栅极驱动器，碳化硅 MOSFET 的快速开关速度导致其增益带宽积较高，使得有源栅极驱动器对反馈环路延迟更为敏感 \[16\]。为避免这一缺点，该结构通常采用数字多开关方案或基于栅源电压（vGS）的控制 \[15,17\]，灵活性不足。 

Fig. 1(b) shows circuit diagram of parallel impedanceAGD. Za induces a bypass current between the gate andthe source, decreasing the strength of gate drive signal \[18\],\[19\]. The active part of the circuit is tied to Kelvin sourceso there is no need of level shifting. However, this structureworks by shunting the gate driver, which has limited range ofmodulation, and also increases the power consumption. Forconfiguration where the Za works in phase with the gate drive,the gate drive signal is enhanced by the circuit \[20\]. However,this method is only adopted by digital AGDs. As for analogAGDs, using a controlled source would be more reasonable.

图 1（b）为并联阻抗型有源栅极驱动器的电路图。Za 在栅极和源极之间产生旁路电流，降低栅极驱动信号的强度 \[18-19\]。电路的有源部分与开尔文源极相连，因此无需电平转换。然而，该结构通过分流栅极驱动器工作，调制范围有限，且会增加功耗。在 Za 与栅极驱动同相工作的配置中，电路会增强栅极驱动信号 \[20\]，但这种方法仅适用于数字有源栅极驱动器，对于模拟有源栅极驱动器，采用受控源更为合理。

Fig. 1(c) shows circuit diagram of controlled source AGD.Operational amplifiers are used as an adder or subtractor, turning the feedback signal into proper gate drive signal \[21\], \[22\].This circuit configuration provide convenience for complexfeedback and control. However, the gate drive signal alsoexperiences the latency of two-stage amplification, which isgreater than the other two AGD types. The complexity of thecircuit also increases

图 1（c）为受控源型有源栅极驱动器的电路图。运算放大器用作加法器或减法器，将反馈信号转换为合适的栅极驱动信号 \[21-22\]。这种电路配置便于实现复杂的反馈和控制，但栅极驱动信号也会经历两级放大的延迟，延迟时间大于其他两类有源栅极驱动器，且电路复杂度更高。 

Note that in series impedance and parallel impedanceAGDs, Za could be implemented by circuit forms that resembles controlled voltage source or current source. For betterdistinguishment, configurations where only buffer or amplifierstage is responsible for generating gate driving signal arerecognized as controlled source AGD.

需要注意的是，在串联阻抗型和并联阻抗型有源栅极驱动器中，Za 可通过类似受控电压源或电流源的电路形式实现。为便于区分，仅由缓冲器或放大级负责生成栅极驱动信号的配置被定义为受控源型有源栅极驱动器。 

Apart from real-time feedback control, model-based indirect control is excellent for multi-target optimizing \[23\],\[24\]. However, these methods lack adaptability of sudden loadchanges, and are more complex.

除实时反馈控制外，基于模型的间接控制在多目标优化中表现出色 \[23-24\]，但这些方法对负载突变的适应性较差，且结构更为复杂。 

In this paper, a novel AGD is proposed with an alternative arrangement of AGD circuit units. The proposed AGDeliminates the need for level-shifting circuit, achieving directand low-latency feedback for series impedance AGD withlow drive loss. In Section II, the circuit structure is introduced, with considerable simplicity, only BJTs, diodes andresistor-capacitor networks are used. The working principle isexplained. In Section III, the closed-loop control is analyzed.In Section IV, a simulation was performed to verify the feasibility of the proposed AGD. In Section V, a double pulse test platform was designed and experiment result showed theperformance of overshoot suppression, load condition adaptability, delay, switching loss and EMI enhancement for theproposed AGD. In Section VI, the proposed AGD was compared to existing works in detail.

本文提出了一种新型有源栅极驱动器，其有源栅极驱动器电路单元的布置方式与现有结构不同。该有源栅极驱动器无需电平转换电路，实现了串联阻抗型有源栅极驱动器的直接低延迟反馈，且驱动损耗低。第二节将介绍电路结构，该结构极为简洁，仅使用双极结型晶体管、二极管和阻容网络，并阐述其工作原理；第三节分析闭环控制；第四节通过仿真验证所提有源栅极驱动器的可行性；第五节设计双脉冲测试平台，实验验证所提有源栅极驱动器在过冲抑制、负载适应性、延迟、开关损耗和电磁干扰改善等方面的性能；第六节将所提有源栅极驱动器与现有研究成果进行详细对比。 

II. KELVIN-SOURCE SERIES AGD 

The operational amplifier in Fig. 1(c) works as a voltageadder or subtractor, which is equivalent to a controlled voltagesource in series with the gate driver circuit. If the controlledimpedance Za in Fig. 1(a) is modulated as a dissipative voltagesource in which the current flows opposite to the voltagepolarity, it could also implement the voltage adder function.

二、开尔文源极串联有源栅极驱动器 

图 1（c）中的运算放大器用作电压加法器或减法器，相当于在栅极驱动电路中串联一个受控电压源。若将图 1（a）中的受控阻抗 Za 调制为耗散型电压源（电流流向与电压极性相反），则也可实现电压加法器功能。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_004_d1e32256d333.png)

（图 3 所提有源栅极驱动器的电路结构） 

Since all elements related to gate driver in Fig. 1(a) areconnected in series, their sequence can be altered withoutaffecting their functions. In Fig. 3, the controlled impedancehas switched its position between the gate driver and theKelvin-source node of the MOSFET. Because the power andsignal transmission for gate driver are isolated \[25\], such position change is allowed. According to the position of Za in thecircuit, this configuration is called Kelvin-source series AGD(KSAGD).

由于图 1（a）中所有与栅极驱动相关的元件均串联连接，其顺序可在不影响功能的前提下进行调整。如图 3 所示，受控阻抗在栅极驱动器和 MOSFET 的开尔文源极节点之间改变了位置。由于栅极驱动器的功率传输和信号传输是隔离的 \[25\]，这种位置调整是可行的。根据 Za 在电路中的位置，该配置被称为开尔文源极串联有源栅极驱动器（KSAGD）。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_005_8655528d942c.png)

（图 4 开尔文源极串联有源栅极驱动器的电路结构） 

Because Za is directly tied to a fixed reference voltage, control and feedback signals can be directly fed to Za, enablinganalog feedback control and ensuring the smallest feedbacklatency. The gate drive output from the gate driver feeds directly into the MOSFET’s gate, providing negligible delayfrom gate drive to MOSFET. The proposed AGD has thesimple structure similar of series impedance AGD and thelow-latency property of parallel impedance AGD. Mergingthe advantages of existing AGD structures, the proposed AGDachieves fast response, real-time feedback, low drive loss andsimple structure.

由于 Za 直接连接到固定参考电压，控制信号和反馈信号可直接输入至 Za，实现模拟反馈控制，并确保最小的反馈延迟。栅极驱动器的输出直接输入至 MOSFET 的栅极，栅极驱动到 MOSFET 的延迟可忽略不计。所提有源栅极驱动器兼具串联阻抗型有源栅极驱动器的简洁结构和并联阻抗型有源栅极驱动器的低延迟特性，融合了现有有源栅极驱动器结构的优点，实现了快速响应、实时反馈、低驱动损耗和结构简单的特点。 

Using a low-impedance bypass switch, the AGD structurecan be conveniently disabled when only CGD is required,adding versatility to the design.

通过低阻抗旁路开关，当仅需要传统电阻式栅极驱动器功能时，可方便地禁用有源栅极驱动器结构，增加了设计的通用性。 

An implementation of the KSAGD is shown in Fig. 4. Thiscircuit includes two BJTs (Q1 and Q2) as voltage follower, twoSchottky barrier diode (D1 and D2) for reverse current blocking, a universal gate driver with gate driver resistor (Rg) anda signal conditioning circuit. The signal conditioning circuitcollects feedback signal from the source current (iS) and drainvoltage (vD).

图 4 展示了开尔文源极串联有源栅极驱动器的一种实现方案。该电路包括两个作为电压跟随器的双极结型晶体管（Q1 和 Q2）、两个用于反向电流阻断的肖特基势垒二极管（D1 和 D2）、一个带栅极驱动电阻（Rg）的通用栅极驱动器以及一个信号调理电路。信号调理电路从源极电流（iS）和漏极电压（vD）中采集反馈信号。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_006_25cfc48f72e6.png)

（a）导通过程 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_007_e59984dffd59.png)

（b）关断过程 

（图 5 开尔文源极串联有源栅极驱动器的工作模式）

The signal conditioning circuit extracts dv/dt and di/dt components from vD and iS, turning into two voltage signals, v1 and v2, for gate drive modulation. When the circuit works,the two BJTs are operating in the active region, modulatingthe reference point voltage of the gate driver va. Combinedwith the gate driver output voltage vDr, this circuit is ableto actively regulate the gate drive strength. Rg represents thesimplification of single or dual resistor configuration used byCGD.

信号调理电路从 vD 和 iS 中提取 dv/dt 和 di/dt 分量，转换为两个电压信号 v1 和 v2，用于栅极驱动调制。电路工作时，两个双极结型晶体管工作在有源区，调制栅极驱动器的参考点电压 va。结合栅极驱动器输出电压 vDr，该电路能够主动调节栅极驱动强度。Rg 是传统电阻式栅极驱动器采用的单电阻或双电阻配置的简化表示。 

A. DRIVING STRENGTH MODULATION CIRCUIT

Two main operating modes are shown in Fig. 5. The workingprinciple of the circuit is as follows:

（一）驱动强度调制电路 

图 5 展示了两种主要工作模式，电路的工作原理如下：   

During the turn-on process, the gate driver outputs apositive voltage vDr(on). The gate capacitance was formerlycharged by the gate driver with a negative voltage vDr(off). vahas a trend to be negative, allowing D1 to conduct and D2 tocut off. The gate charging current flows from the gate driver tothe MOSFET, then returns from the Kelvin source. The signalconditioning circuit outputs v1 as a negative voltage relativeto the reference point. Based on the voltage conditions, Q1is allowed to perform as a voltage follower, and the emittervoltage is modulated to approximately 0.6V lower than thebase voltage, which is v1. Adding the voltage drop of D1 andthe gate driver IC, there is a total voltage drop VDrop of approximately 1.5V. During the whole turn-on process, the gatecurrent direction is fixed, so the voltage difference betweenv1 and va is considered constant. This voltage follower configuration of the transistor obtains the maximum bandwidthfrom it, responding instantaneously to the control signal v1.The voltage at the AGD’s output vo then can be calculated asbelow:

在导通过程中，栅极驱动器输出正电压 vDr (on)。栅极电容此前由栅极驱动器的负电压 vDr (off) 充电，va 有变为负的趋势，使得 D1 导通、D2 截止。栅极充电电流从栅极驱动器流向 MOSFET，再从开尔文源极返回。信号调理电路输出相对于参考点为负的电压 v1。根据电压条件，Q1 用作电压跟随器，发射极电压被调制为比基极电压（即 v1）低约 0.6V。加上 D1 和栅极驱动芯片的电压降，总压降 VDrop 约为 1.5V。在整个导通过程中，栅极电流方向固定，因此 v1 和 va 之间的电压差可视为恒定。晶体管的这种电压跟随器配置能获得最大带宽，对控制信号 v1 做出瞬时响应。有源栅极驱动器的输出电压 vo 可通过以下公式计算： 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_008_8065d9463920.png)

During the turn-off process, the circuit works in the opposite way. In this situation, gate driver outputs vDr(off) whilethe gate capacitance was formerly charged by the gate driverwith vDr(on). The Q2 works as a follower, allowing the otheroutput from the signal conditioning circuit v2 to control theAGDs final output. The voltage at the gate driver’s output canbe calculated as below:

在关断过程中，电路工作方式相反。此时，栅极驱动器输出 vDr (off)，而栅极电容此前由栅极驱动器的 vDr (on) 充电。Q2 用作跟随器，信号调理电路的另一个输出 v2 控制有源栅极驱动器的最终输出。栅极驱动器输出电压可通过以下公式计算： 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_009_0763ec8246c3.png)

In follower configuration, the BJT works in unity gaincondition, which can get maximum bandwidth out of it. Thedelay of the driving strength modulation circuit can be as lowas 2-3ns estimated based on the gain-bandwidth product ofcommon BJTs.

在跟随器配置中，双极结型晶体管工作在单位增益条件下，能获得最大带宽。根据普通双极结型晶体管的增益带宽积估算，驱动强度调制电路的延迟可低至 2-3ns。

It can be noticed that during the turn-on or turn-off process,the total charge flows through the emitter of either the PNPor NPN BJT is the total gate charge of the MOSFET. Thisamount of charge also flows through the gate driver’s powersupply, which is the same power source for CGD. Thus, theenergy taken from the power source is identical to that of CGDoperation, and the added circuit dose not increase any gatedrive loss.

需要注意的是，在导通或关断过程中，流经 PNP 或 NPN 双极结型晶体管发射极的总电荷等于 MOSFET 的总栅极电荷。该电荷量也流经栅极驱动器的电源（与传统电阻式栅极驱动器共用同一电源）。因此，从电源获取的能量与传统电阻式栅极驱动器工作时相同，新增电路不会增加任何栅极驱动损耗。 

B. SIGNAL CONDITIONING CIRCUIT

A convenient and reliable method for the signal conditioningusing passive resistor-capacitor network is shown in Fig. 6.

（二）信号调理电路 

图 6 展示了一种采用无源阻容网络的便捷可靠的信号调理方法。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_010_0ed421725279.png)

（图 6 无源信号调理电路） 

The network has two inputs, one from the drain voltage ofthe main MOSFET vD via feedback capacitor Cfb, the otherfrom the source-pin voltage of the main MOSFET. Two setsof this circuit can be used to generate separated driving signalsv1 and v2 for the two BJTs. vCtrl is the output voltage of onespecific network, and correspond to either v1 or v2.

该网络有两个输入：一个通过反馈电容 Cfb 来自主 MOSFET 的漏极电压 vD，另一个来自主 MOSFET 的源极引脚电压。可使用两组该电路为两个双极结型晶体管生成独立的驱动信号 v1 和 v2。

The dv/dt signal is acquired from the drain voltage using aderivative capacitor Cfb as a current signal ivfb. Two resistorsRa and Rb are used to equalize the feedback signals. Rs is placed in series with Cfb to protect the circuit from excessivedv/dt spikes. The value of Rs is chosen that the RC timeconstant with Cfb is below 1ns, which is negligible.

vCtrl 是特定网络的输出电压，对应 v1 或 v2。 dv/dt 信号通过微分电容 Cfb 从漏极电压中提取，转化为电流信号 ivfb。两个电阻 Ra 和 Rb 用于均衡反馈信号。Rs 与 Cfb 串联，以保护电路免受过大 dv/dt 尖峰的影响。Rs 的取值需满足其与 Cfb 的 RC 时间常数小于 1ns，可忽略不计。

The voltage component contributed by dv/dt feedback canbe represented as below:

 dv/dt 反馈产生的电压分量可表示为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_011_a023247d5492.png)

The power source pin of the 4-pin Kelvin-source MOSFET package has a nonnegligible parasitic inductance Ls. Theself-induced voltage of the parasitic inductance vifb is usedto derive di/dt information. Since the voltage signal on vDis significantly larger than vifb, Cfb is usually designed thatits impedance is significantly higher than Ra and Rb withinthe working frequency range of AGD. When considering theeffect of di/dt feedback, Cfb can be ignored.

四引脚开尔文源极 MOSFET 封装的电源引脚存在不可忽略的寄生电感 Ls，利用该寄生电感的自感电压 Vilb 提取 di/dt 信息。由于 vD 上的电压信号远大于 Vilb，通常设计 Cfb 使其在有源栅极驱动器的工作频率范围内阻抗远高于 Ra 和 Rb。考虑 di/dt 反馈的影响时，可忽略 Cfb。 

The voltage component contributed by di/dt feedback canbe represented as below:

di/dt 反馈产生的电压分量可表示为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_012_82eb2482e6fc.png)

And the control voltage signal vCtrl is a combination of thefeedback voltage components:

 控制电压信号 vCtrl 是反馈电压分量的组合：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_013_8359257486a4.png)

To generate two distinct control signals for either turn-onand turn-off active control, two sets of resistor networks areused while sharing the same Cfb. Because the direction of ivfbneeded by two networks are opposite, two diodes in Fig. 6serve the purpose of signal sharing. By sharing the feedbackcapacitor, the effective capacitance added to MOSFET’s drainis reduced to half.

 为生成用于导通和关断主动控制的两个不同控制信号，采用两组电阻网络，共用同一个 Cfb。由于两个网络所需的 ivfb 方向相反，图 6 中的两个二极管用于信号共享。通过共享反馈电容，MOSFET 漏极上增加的等效电容减少一半。 

Because the BJT follower’s input has a relative highimpedance, only a minimum amount of current is needed fromthe passive signal conditioning circuit, making it convenient tochoose proper values for the components. The high impedanceof the passive network also ensures minimum influence onpower circuit.

由于双极结型晶体管跟随器的输入阻抗较高，无源信号调理电路只需提供极小的电流，便于选择合适的元件参数。无源网络的高阻抗特性也确保了对功率电路的影响最小。 

III. ANALYSIS OF CLOSED-LOOP OPERATION

A. ANALYSIS OF SWITCHING TRANSIENT

In a hard switching situation, the waveforms of the circuit during turn-on and turn-off process are shown in Fig. 7. During the switching process, a waveform that regulates the drivingstrength is generated on va.

三、闭环工作原理分析 

（一）开关暂态分析 

在硬开关情况下，导通和关断过程中的电路波形如图 7 所示。开关过程中，va 上会产生调节驱动强度的波形。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_014_ec084985657e.png)

（a）导通过程 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_015_06acccb990e7.png)

（b）关断过程 

（图 7 硬开关条件下开尔文源极串联有源栅极驱动器的波形）

The turn-on process is shown in Fig. 7(a). ton(0) is the starting point of the switching action, when gate driver receivessignal and vDr changes from vDr(off) to vDr(on). Between \[ton(0),ton(1)\] is the gate pre-charge time Tpre(on), during which thesignal conditioning circuit receives no dv/dt and di/dt signal,and v1 remains zero. In this stage, vo is held near vDr(on)according to (1). The gate driver mainly charges the gatesource capacitance. The driving strength is held at maximumto ensure lowest delay.

导通过程如图 7（a）所示。ton (0) 为开关动作的起始点，此时栅极驱动器接收信号，vDr 从 vDr (off) 变为 vDr (on)。\[ton (0)，ton (1)\] 为栅极预充电时间 Tpre (on)，在此期间，信号调理电路未接收到 dv/dt 和 di/dt 信号，v1 保持为零。根据公式（1），vo 保持在接近 vDr (on) 的水平，栅极驱动器主要为栅源电容充电，驱动强度保持最大，以确保最小延迟。 

At ton(1), the threshold voltage of MOSFET is reached.Between \[ton(1), ton(2)\] is the gate modulating time Tmod(on),during which the switching action of MOSFET generatesdv/dt and di/dt signal, causing a negative voltage waveformon v1. According to (1), the voltage waveform on va is adirect copy of v1 except for the voltage drop. At this stage, theAGD and MOSFET encounter miller plateau, and a complexaction of discharging the gate-drain capacitance occurs. TheAGD regulates the voltage and current slew rate until both of them returns to zero at ton(2). Between \[ton(2), ton(3)\] is the gatepost-charging time Tpost(on), during which v1 is held at zeroand the driving strength is held at maximum. The gate-sourcecapacitance is quickly charged to vdr(on). The turn-on processis finished at ton(3).

在 ton (1) 时刻，MOSFET 达到阈值电压。\[ton (1)，ton (2)\] 为栅极调制时间 Tmod (on)，在此期间，MOSFET 的开关动作产生 dv/dt 和 di/dt 信号，导致 v1 上出现负电压波形。根据公式（1），va 上的电压波形除压降外，与 v1 直接相关。此时，有源栅极驱动器和 MOSFET 进入密勒平台区，栅漏电容发生复杂的放电过程。有源栅极驱动器调节电压和电流变化率，直至两者在 ton (2) 时刻均降至零。\[ton (2)，ton (3)\] 为栅极后充电时间 Tpost (on)，在此期间，v1 保持为零，驱动强度保持最大，栅源电容快速充电至 vDr (on)，ton (3) 时刻导通过程结束。

The turn-off process is shown in Fig. 7(b). In the turn-offprocess, the polarity of dv/dt and di/dt feedback signals arereversed, and the polarity of va is opposite to that of turn-onprocess accordingly. Similarly, the process is divided into gatepre-discharge, modulating and post-discharge time, marked asTpre(off), Tmod(off) and Tpost(off), respectively.

 关断过程如图 7（b）所示。关断过程中，dv/dt 和 di/dt 反馈信号的极性反转，va 的极性也相应与导通过程相反。同理，关断过程分为栅极预放电时间 Tpre (off)、调制时间 Tmod (off) 和后放电时间 Tpost (off)。 

At toff(0), the gate driver receives signal and vDr changesfrom vDr(on) to vDr(off). During Tpre(off), the signal conditioningcircuit receives no dv/dt and di/dt signal, and v1 remains zero.The driving strength is held at maximum to ensure lowestdelay.

在 toff (0) 时刻，栅极驱动器接收信号，vDr 从 vDr (on) 变为 vDr (off)。Tpre (off) 期间，信号调理电路未接收到 dv/dt 和 di/dt 信号，v1 保持为零，驱动强度保持最大，以确保最小延迟。

At toff(1), the MOSFET enters saturation. During Tmod(off),a negative voltage waveform on v1 is generated. The AGDregulates the voltage and current slew rate until both of themreturns to zero at ton(2).

 在 toff (1) 时刻，MOSFET 进入饱和区。Tmod (off) 期间，v1 上产生负电压波形，有源栅极驱动器调节电压和电流变化率，直至两者在 toff (2) 时刻均降至零。

During Tpost(off), v1 is held at zero and the driving strengthis held at maximum. The gate-source capacitance is quicklycharged to vdr(off). The turn-off process is finished at toff(3).

 Tpost (off) 期间，v1 保持为零，驱动强度保持最大，栅源电容快速放电至 vDr (off)，toff (3) 时刻关断过程结束。 

The proposed AGD has a closed-loop control scheme asshown in Fig. 8. The signal conditioning circuit induces negative feedback. The BJT follower circuit connected in serieswith the gate driver makes up the adder/subtracter stage.

所提有源栅极驱动器的闭环控制方案如图 8 所示。信号调理电路实现负反馈，与栅极驱动器串联的双极结型晶体管跟随器电路构成加减法器级。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_016_557e01026387.png)

（图 8 闭环控制框图） 

The proposed AGD only responses to the dv/dt and di/dtsignal generated by the switching action itself. If the load condition changes, the time durations for AGD modulation willalso be different, which is shown in Fig. 9. The parameters for AGD circuit components were fixed, and the circuit wouldautomatically adapt to the changes. For those AGDs whoadopts fixed time sequence methods, at least one switchingcycle is needed to detect the load change, calculate and applythe new corresponding time sequence, leaving the presentswitching action not optimal. While the proposed AGD caninstantly adapts to any load changes due to the principle ofreal-time closed-loop feedback, and each switching action isconsidered individual. This feature is essential for applicationwith time-varying load condition, such as DC-AC converters.

所提有源栅极驱动器仅对开关动作本身产生的 dv/dt 和 di/dt 信号做出响应。若负载条件发生变化，有源栅极驱动器的调制时间也会相应改变，如图 9 所示。有源栅极驱动器电路元件参数固定，电路可自动适应这些变化。对于采用固定时序方法的有源栅极驱动器，至少需要一个开关周期才能检测负载变化、计算并应用新的对应时序，导致当前开关动作并非最优。而所提有源栅极驱动器基于实时闭环反馈原理，可即时适应任何负载变化，每个开关动作均被视为独立事件。这一特性对于负载时变的应用（如直流 - 交流变换器）至关重要。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_017_3875d96c4077.png)

（图 9 所提有源栅极驱动器对负载变化的实时响应）

  

The voltage transition procedure happens when the MOSFET goes through its miller plateau. The current flows throughreverse transfer capacitance Crss outwards the gate is calculated as below:

MOSFET 经历密勒平台区时发生电压转换过程，流经反向传输电容 Crss 的栅极流出电流可表示为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_018_897793d462db.png)

The current transition procedure happens after or before themiller plateau. The voltage slew rate of vGS is related to thecurrent slew rate. The current flows through input capacitanceCiss can be calculated using the transconductance gm of theMOSFET:

电流转换过程发生在密勒平台区之前或之后。栅源电压 vGS 的变化率与电流变化率相关，流经输入电容 Ciss 的电流可利用 MOSFET 的跨导 gm 计算：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_019_243dfa3bbc22.png)

The voltage difference across Rg determines the gate charging/discharging current iG. The average gate-source voltageduring miller plateau is represented as Vmil. Note that Vmil canbe different for turn-on or turn-off process. Also, Rg couldhave separate valve during turn-on and turn-off when dualresister CGD configuration was used, and the internal gateresistance of the MOSFET must be included.

栅极电阻 Rg 两端的电压差决定了栅极充放电电流 iG。密勒平台区期间的平均栅源电压表示为 Vmil，需注意 Vmil 在导通和关断过程中可能不同。此外，当采用双电阻传统电阻式栅极驱动器配置时，Rg 在导通和关断过程中可具有不同阻值，且必须考虑 MOSFET 的内部栅极电阻。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_020_9ba67906fc84.png)

The direction of iCrss is opposite with iG and iCiss, and therelation of the three current components can be represented asbelow:

iCrss 的方向与 iG 和 iCiss 相反，三个电流分量的关系可表示为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_021_0b142cdd003d.png)

According to (1), (2), (8), vo can be represented as:

根据 (1)、(2)、(8) 式，VO表示为：v

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_022_4ad0efdd98aa.png)

In which the component Rb/(Ra+Rb) is considered to be 1if Rb is left open.

其中，若 Rb 开路，Rb/(Ra+Rb) 项视为 1。 

A mixed dv/dt and di/dt control scheme of the proposedAGD is established as follows:

所提有源栅极驱动器的 dv/dt 和 di/dt 混合控制方案如下：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_023_9d018d320cd5.png)

In a hard switching situation, the voltage and current swingoften exhibit a time sequential relationship. Which meansduring the most of switching procedure, dv/dt and di/dt controlare considered independent. The nominal dv/dt and di/dt forclosed-loop control can be derived:

在硬开关情况下，电压和电流摆幅通常呈现时序关系，意味着在开关过程的大部分时间内，dv/dt 和 di/dt 控制可视为独立。闭环控制的标称 dv/dt 和 di/dt 可推导为： 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_024_ad0967f5bece.png)

Based on the desired maximum dv/dt and di/dt, the valvesof passive components can be derived according to (12). Dueto a separate pair of resistor network is used, the resistorvalues (Ra and Rb) for turn-on and turn-off can be different.Note that a minimum di/dt value can be derived when Rb isopen, which resembles a 3-pin TO-247 package.

根据期望的最大 dv/dt 和 di/dt，可通过公式（12）推导无源元件的参数。由于采用独立的电阻网络组，导通和关断过程中的电阻值（Ra 和 Rb）可不同。需注意，当 Rb 开路时（类似三引脚 TO-247 封装），可获得最小 di/dt 值。 

The nominal LS for a 4-pin TO-247 package is 10nH \[26\],and the miller plateau voltage for 1200V SiC MOSFET usually in the range of 6-9V. However, the miller plateau ofa given MOSFET voltage can vary due to the change ofswitching speed, driving strength and MOSFET’s junctiontemperature. Nevertheless, this only affects the accuracy ofparametric design, and does not threat the effectiveness offeedback control and driving strength modulation of the proposed AGD. The passive networks should be tuned whiletesting the circuit to fit the actual physical parameters of thecircuit.

四引脚 TO-247 封装的标称 Ls 为 10nH ，1200V 碳化硅 MOSFET 的密勒平台电压通常在 6-9V 范围内。然而，给定 MOSFET 的密勒平台电压可能随开关速度、驱动强度和结温的变化而变化。尽管如此，这仅影响参数设计的精度，不会影响所提有源栅极驱动器反馈控制和驱动强度调制的有效性。在测试电路时，应调整无源网络以匹配电路的实际物理参数。 

B. ANALYSIS OF CLOSED-LOOP STABILITY

To analyze the stability of the AGD-MOSFET combinedsystem, the small signal model of SiC MOSFET with loadimpedance ZLoad was used, which is shown in Fig. 10.

（二）闭环稳定性分析 

为分析有源栅极驱动器 - 碳化硅 MOSFET 组合系统的稳定性，采用了带负载阻抗 ZLoad 的碳化硅 MOSFET 小信号模型，如图 10 所示。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_025_fc7b68d537d0.png)

（图 10 碳化硅 MOSFET 的小信号模型） 

The relation between the gate driving voltage vo to vDSwould be derived from the differential equation below:

栅极驱动电压 vo 与漏源电压 vDS 之间的关系可通过以下微分方程推导： 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_026_9b664c88cddf.png)

The voltage output transfer function for the SiC MOSFETwould be represented as:

 碳化硅 MOSFET 的电压输出传递函数可表示为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_027_bee38b8dfb90.png)

The transfer function of the RC network for dv/dt feedbackwould be given as:

dv/dt 反馈 RC 网络的传递函数为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_028_8ceb25bb0447.png)

The BJT follower circuit copies the output of RC network,and the signal is presented back to the output of gate driver,forming a closed-loop system. The dv/dt control system is anegative feedback system, and its closed-loop transfer function would be given as:

双极结型晶体管跟随器电路复制 RC 网络的输出，并将信号反馈至栅极驱动器的输出端，形成闭环系统。dv/dt 控制系统为负反馈系统，其闭环传递函数为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_029_acd2b80b87af.png)

During the voltage transition stage of a switching transient,the other MOSFET would maintain off. ZLoad is the otherMOSFET connected in series with the loop inductance Lloop.The other MOSFET presents the characteristic of its outputcapacitor Coss. The root trajectories were plotted with parametric scan in Fig. 11. The key parameters concerning thestability of the AGD are gate resistor, feedback gain and loopinductance. Rg was chosen to have the value of 0, 1, 5,10 and 20. The feedback gain was altered by choosing thevalue for both Ra and Rb to be 47, 62, 91, 150 and250. The value for Lloop was 50nH, 100nH, 200nH, 500nHand 1000nH. Cfb was chosen to be 10pF. Other parameterswere referred to the MOSFET’s datasheet.

在开关暂态的电压转换阶段，另一个 MOSFET 保持关断状态，ZLoad 为与环路电感 Lloop 串联的另一个 MOSFET，该 MOSFET 呈现输出电容 Coss 的特性。通过参数扫描绘制根轨迹图，如图 11 所示。影响有源栅极驱动器稳定性的关键参数包括栅极电阻、反馈增益和环路电感。Rg 的取值为 0Ω、1Ω、5Ω、10Ω 和 20Ω；通过选择 Ra 和 Rb 的取值（47Ω、62Ω、91Ω、150Ω 和 250Ω）改变反馈增益；Lloop 的取值为 50nH、100nH、200nH、500nH 和 1000nH；Cfb 选择 10pF。其他参数参考 MOSFET 的数据手册。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_030_0ec4454f4631.png)

（图 11 电压转换阶段的根轨迹图） 

The output current transfer function for the SiC MOSFETwould be represented as:

碳化硅 MOSFET 的电流输出传递函数可表示为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_031_58e09bd01663.png)

The transfer function of the RC network for di/dt feedbackwould be given as:

di/dt 反馈 RC 网络的传递函数为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_032_d2c638c9e603.png)

The di/dt control system is also negative feedback system,and its closed-loop transfer function would be given as:

di/dt 控制系统同样为负反馈系统，其闭环传递函数为：

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_033_e950648dd37f.png)

During the current transition stage of a switching transient,the other MOSFET’s body diode would be freewheeling. Theother MOSFET presents the characteristic of its parasiticinductance LD and LS. The key parameters concerning the stability of the AGD are gate resistor, feedback gain and loopinductance. Rg was chosen to have the value of 0, 1, 5,10 and 20. The feedback gain was altered by choosing thevalue for Rb to be 10, 47, 100, 330 and open whileRa was fixed 100. The value for Lloop was 50nH, 100nH,200nH, 500nH and 1000nH. The root trajectories were plottedin Fig. 12.

在开关暂态的电流转换阶段，另一个 MOSFET 的体二极管续流，该 MOSFET 呈现寄生电感 LD 和 LS 的特性。影响有源栅极驱动器稳定性的关键参数包括栅极电阻、反馈增益和环路电感。Rg 的取值为 0Ω、1Ω、5Ω、10Ω 和 20Ω；Ra 固定为 100Ω，通过选择 Rb 的取值（10Ω、47Ω、100Ω、330Ω 和开路）改变反馈增益；Lloop 的取值为 50nH、100nH、200nH、500nH 和 1000nH。根轨迹图如图 12 所示。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_034_946fa6e96787.png)

（图 12 电流转换阶段的根轨迹图） 

As shown in the root plot, as long as Ra and Rb remainsmaller than 250, the closed loop system of AGD would bestable with major parameter variations.

根轨迹图显示，只要 Ra 和 Rb 保持小于 250Ω，在主要参数变化的情况下，有源栅极驱动器的闭环系统仍能保持稳定。 

Overall, the whole AGD circuit requires no external powersupply, and only the on/off gate driver is powered. This makesgreat convenience for circuit design and layout.

总体而言，整个有源栅极驱动器电路无需外部电源，仅为通断栅极驱动器供电，极大地方便了电路设计和布局。 

IV. SIMULATIONA 

simulation was performed in LTSpice. The SiC MOSFETchosen for the simulation was C3M0075120K from Wolfspeed, and the parameters are shown in Table 1.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_035_07edbc062ab9.png)

四、仿真 

在 LTSpice 中进行仿真，选用 Wolfspeed 公司的 C3M0075120K 型碳化硅 MOSFET，其参数如表 1 所示。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_036_2508d0ddad84.png)

A half bridge circuit was built in the simulation. Lloop was100nH in the simulation. Both CGD and the proposed AGDwere tested in the simulation. The main circuit parameters in the simulation are shown in Table 2. The simulation waveforms of the switching process are shown in Fig. 13.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_037_ed0c0bc9f92f.png)

搭建半桥电路进行仿真，环路电感 Lloop 为 100nH，分别测试传统电阻式栅极驱动器和所提有源栅极驱动器的性能。仿真中的主电路参数如表 2 所示，开关过程的仿真波形如图 13 所示。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_038_398a2eb70f95.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_039_9fbb4a06e267.png)

（a）导通过程 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_040_cdc75df3c369.png)

（b）关断过程 

（图 13 仿真结果波形）

As shown in the waveforms, the waveform of va displaysactive modulation of by the proposed AGD. A significantlylower overshoot and oscillation is achieved in the simulation.For comparison, the voltage overshoot is reduced by 23.6%and the current overshoot is reduced by 32.3%. The simulationverified the effectiveness of the proposed AGD.

波形显示，所提有源栅极驱动器对 va 实现了主动调制，仿真中显著降低了过冲和振荡。对比传统电阻式栅极驱动器，电压过冲降低了 23.6%，电流过冲降低了 32.3%，验证了所提有源栅极驱动器的有效性。

The dv/dt and di/dt results are shown in Table 3, alongwith the numbers calculated by (12). The source inductanceLs was taken 10nH in the simulation, and Ciss, Crss and gm areobtained referring to the MOSFET’s datasheet.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_041_898fc76dbde3.png)

 dv/dt 和 di/dt 的仿真结果与公式（12）的计算结果如表 3 所示。仿真中源极电感 Ls 取 10nH，Ciss、Crss 和 gm 参考 MOSFET 的数据手册。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_042_a0ac13c21050.png)

Overall, the simulation dv/dt and di/dt results confirm tothe calculation. Since the slew rates are close to MOSFET’sintrinsic performance, the results are lower than theoreticalestimation.

 总体而言，仿真得到的 dv/dt 和 di/dt 结果与计算值一致。由于变化率接近 MOSFET 的本征性能，仿真结果略低于理论估算值。 

The proposed AGD was tested within a voltage range of500V∼800V and a current range of 8A∼20 A. The resultsare shown in Fig. 14. Without changing any parameters of theAGD circuit, the voltage and current overshoot performanceof the proposed AGD showed consistency under various conditions while voltage and current rise time was different. This proves the effectiveness of closed-loop control, which makesthe proposed AGD adaptive to these changes.

所提有源栅极驱动器在 500V~800V 电压范围和 8A~20A 电流范围内进行了测试，结果如图 14 所示。在不改变有源栅极驱动器电路参数的情况下，所提有源栅极驱动器的电压和电流过冲性能在不同条件下保持稳定，而电压和电流上升时间有所不同，这证明了闭环控制的有效性，使所提有源栅极驱动器能够适应这些变化。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_043_afcae9fffd11.png)

（a）电压过冲 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_044_591e4555393f.png)

（b）电流过冲 

（图 14 不同条件下所提有源栅极驱动器的仿真性能） 

V. EXPERIMENT VERIFICATIONIn 

order to verify the proposed AGD, a double pulse test(DPT) platform was built. The SiC MOSFET chosen for theexperiment was C3M0075120K, which is identical to the simulation. A half bridge module shown in Fig. 15 was designedfor the DPT test.

五、实验验证 

为验证所提有源栅极驱动器，搭建了双脉冲测试（DPT）平台。实验选用的碳化硅 MOSFET 与仿真一致，为 C3M0075120K 型，并设计了如图 15 所示的半桥模块用于双脉冲测试。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_045_9972551629cc.png)

（图 15 半桥模块设计） 

After tuning, the main circuit parameters of the test circuitare shown in Table 4.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_046_698268d8a356.png)

经过调试，测试电路的主电路参数如表 4 所示。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_047_d0562920dd7a.png)

A. TEST WAVEFORMS

The waveforms of DPT using various gate drive configurationare shown in Fig. 16. The AGD structure was bypassed toshow the performance of CGD, and the result is shown inFig. 16(a). Fig. 16(b) shows the performance of the fullyfunctional AGD. The feedback control was partially disabledand tested. Cfb was disconnected to disable dv/dt control,and the result is shown in Fig. 16(c). Ra was removed andreconnected in parallel with Rb to disable di/dt control, andthe result is shown in Fig. 16(d). In CGD configuration, thegate drive resistor was tuned to match the voltage and currentpeak values of AGD, and the result is shown in Fig. 16(e).

（一）测试波形 

不同栅极驱动配置的双脉冲测试波形如图 16 所示。图 16（a）为有源栅极驱动器被旁路时传统电阻式栅极驱动器的性能；图 16（b）为全功能有源栅极驱动器的性能；部分禁用反馈控制进行测试：断开 Cfb 以禁用 dv/dt 控制，结果如图 16（c）所示；移除 Ra 并将其与 Rb 并联以禁用 di/dt 控制，结果如图 16（d）所示；在传统电阻式栅极驱动器配置中，调整栅极驱动电阻以匹配有源栅极驱动器的电压和电流峰值，结果如图 16（e）所示。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_048_c43c261d8d77.png)

（a）传统电阻式栅极驱动器（有源栅极驱动器旁路） 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_049_f512c168c800.png)

（b）带 dv/dt 和 di/dt 控制的有源栅极驱动器 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_050_d26a55e672be.png)

（c）仅带 di/dt 控制的有源栅极驱动器 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_051_32f0e7869c5d.png)

（d）仅带 dv/dt 控制的有源栅极驱动器 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_052_5b0f50a3d5c9.png)

（e）慢调传统电阻式栅极驱动器 

（图 16 测试结果波形） 

The performance of the fully functional AGD with bothdv/dt control and di/dt control enabled is shown in Fig. 16(b).Compared with normal CGD configuration, the proposedAGD was able to decrease the voltage overshoot from 1070Vto 990V, which is a 7.5% improvement. And the current overshoot was decreased from 33A to 27A, which is a 18.2%improvement. The overshoot enhancement was not as prominence as in simulation, which is largely due to the inaccuracyof stray parameters in the simulation. Experiments and simulations both verified the feasibility of the proposed AGD, yetalso indicated the necessity to adjust AGD parameters basedon actual circuit configuration.

图 16（b）显示了同时启用 dv/dt 和 di/dt 控制的全功能有源栅极驱动器的性能。与常规传统电阻式栅极驱动器配置相比，所提有源栅极驱动器将电压过冲从 1070V 降至 990V，改善了 7.5%；电流过冲从 33A 降至 27A，改善了 18.2%。实验中过冲改善效果不如仿真显著，主要原因是仿真中寄生参数的不准确。实验和仿真均验证了所提有源栅极驱动器的可行性，同时也表明需要根据实际电路配置调整有源栅极驱动器参数。 

When the feedback control was partially enabled, the performance of proposed AGD changed correspondingly. It canbe observed that either voltage or current overshoot was suppressed. When only di/dt control was enabled in Fig. 16(c),the voltage overshoot only decreased from 1070 V to 1060 V,which is similar to CGD performance. The current overshootdecreased from 33 A to 27.7 A, which is similar to the fully-onAGD performance. When only dv/dt control was enabled inFig. 16(d), the voltage overshoot decreased from 1070 V to1010 V, which is similar to the fully-on AGD performance.The current overshoot only decreased from 33A to 31.3 A,which is similar to the CGD performance. The results verifiedthe effectiveness of the proposed AGD of either dv/dt controlor di/dt control with single feedback path.

当部分启用反馈控制时，所提有源栅极驱动器的性能相应变化，电压或电流过冲均得到抑制。图 16（c）中仅启用 di/dt 控制时，电压过冲仅从 1070V 降至 1060V，与传统电阻式栅极驱动器性能相近；电流过冲从 33A 降至 27.7A，与全功能有源栅极驱动器性能相近。图 16（d）中仅启用 dv/dt 控制时，电压过冲从 1070V 降至 1010V，与全功能有源栅极驱动器性能相近；电流过冲仅从 33A 降至 31.3A，与传统电阻式栅极驱动器性能相近。结果验证了所提有源栅极驱动器通过单一反馈路径实现 dv/dt 或 di/dt 控制的有效性。 

In Fig. 16(e), it can be observed that current and voltageslew rate are lower compared to AGD. The vGS waveform hasa flatter slope, and the delay time between gate drive signaland MOSFET action are longer.

图 16（e）显示，与有源栅极驱动器相比，传统电阻式栅极驱动器的电流和电压变化率更低，vGS 波形斜率更平缓，栅极驱动信号与 MOSFET 动作之间的延迟时间更长。 

The results showed the effectiveness of dv/dt and di/dtadjustment and overshoot suppression of the proposed AGD.For certain circumstances where only partial suppression ofovershoot is required to lower switching loss, the proposedAGD can be functional. This also highlighted the importanceof combined dv/dt and di/dt control for proper overshoot suppression.

实验结果表明，所提有源栅极驱动器能够有效调节 dv/dt 和 di/dt，抑制过冲。在某些仅需要部分抑制过冲以降低开关损耗的场景下，所提有源栅极驱动器同样适用。这也凸显了组合 dv/dt 和 di/dt 控制对有效抑制过冲的重要性。 

B. LOAD CONDITION ADAPTABILITY

The on-line drive strength control of the proposed AGDwould be well demonstrated with a multi-pulse test shownin Fig. 17. The proposed AGD functioned normally in consecutive switching transients with different load current. The closed-loop control ensures the proposed AGD adapt well to load changes, addressing its importance for flexible and robust operation.

（二）负载条件适应性 

通过多脉冲测试（如图 17 所示）充分展示了所提有源栅极驱动器的在线驱动强度控制能力。所提有源栅极驱动器在不同负载电流的连续开关暂态中正常工作，闭环控制确保其能很好地适应负载变化，体现了其在灵活稳健运行中的重要性。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_053_73b3aeff2cbf.png)

（图 17 所提有源栅极驱动器的多脉冲测试） 

The detailed test waveforms of the proposed AGD undervarious conditions are shown in Fig. 18 and Fig. 19. The busvoltage ranged from 500 V to 800 V with the load currentfixed at 20A, and the turn-off vDS waveforms are shown inFig. 18(a). The load current ranged from 8 A to 20 A withthe bus voltage fixed at 800 V, and the turn-on iD waveformsare shown Fig. 19(a). The waveforms of CGD and CGD tunedslow are also given in the figures as a contrast.

所提有源栅极驱动器在不同条件下的详细测试波形如图 18 和图 19 所示。母线电压在 500V~800V 范围内变化，负载电流固定为 20A，关断 vDS 波形如图 18（a）所示；负载电流在 8A~20A 范围内变化，母线电压固定为 800V，导通 iD 波形如图 19（a）所示。图中还给出了传统电阻式栅极驱动器和慢调传统电阻式栅极驱动器的波形作为对比。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_054_2bd032d4a56a.png)

 （图 18 不同母线电压下的关断 vDS 波形） 

（a）有源栅极驱动器 （b）传统电阻式栅极驱动器 （c）慢调传统电阻式栅极驱动器 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_055_b09a2e78887c.png)

（图 19 不同负载电流下的导通 iD 波形） 

（a）有源栅极驱动器 （b）传统电阻式栅极驱动器 （c）慢调传统电阻式栅极驱动器 

According to the waveforms in Figs. 18 and 19, theproposed AGD effectively suppressed voltage and currentovershoot under various load conditions. The performanceshowed consistency with the rated load condition of 800 V/20A. Notice that the rise time of voltage or current was differentunder various conditions, inferring that the proposed AGD haddifferent gate modulation pattern according to the changes.

根据图 18 和图 19 的波形，所提有源栅极驱动器在不同负载条件下均能有效抑制电压和电流过冲，性能与 800V/20A 额定负载条件下保持一致。注意到不同条件下电压或电流的上升时间不同，表明所提有源栅极驱动器会根据变化调整栅极调制模式。 

C. DELAY AND SWITCHING LOSS ANALYSIS

Further analysis of the experiment results showed more advantage of the proposed AGD. The delay and switching losscomparison are shown in Table 5. Compared to normal CGD,the turn-on delay was increased by only 2 ns and the turn-offdelay was increased by only 7 ns, which is far less than the20 ns∼40 ns increase of CGD tuned slow. When comparedwith CGD tuned slow which had similar overshoot performance, the switching energy were decreased. And turn-on and turn-off energy was reduced by 16.1% and 27.9%, respectively.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_056_eb24fe5722c5.png)

（三）延迟和开关损耗分析 

对实验结果的进一步分析显示了所提有源栅极驱动器的更多优势，延迟和开关损耗对比如表 5 所示。与常规传统电阻式栅极驱动器相比，导通延迟仅增加 2ns，关断延迟仅增加 7ns，远低于慢调传统电阻式栅极驱动器 20ns~40ns 的延迟增加量。与过冲性能相近的慢调传统电阻式栅极驱动器相比，所提有源栅极驱动器的开关能量更低，导通能量和关断能量分别降低了 16.1% 和 27.9%。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_057_78eaeb325c06.png)

D. COMPARATIVE ANALYSIS OF EMI

Frequency domain performance of the gate driver under800V/20A load condition was analyzed using FFT. As shownin Fig. 20, the peaks around the resonant frequency were suppressed by approximately 10 dB both in voltage and current.A minor drop was observed when compared with CGD tunedslow. The results conform to the time domain waveforms in which the voltage and current oscillation was smaller anddecayed faster when using proposed AGD. This shows thesuperior performance of reducing voltage and current oscillation for the proposed AGD, which is beneficial for EMI suppression.

（四）电磁干扰对比分析 

采用快速傅里叶变换（FFT）分析了 800V/20A 负载条件下栅极驱动器的频域性能。如图 20 所示，在谐振频率附近，电压和电流的峰值均被抑制了约 10dB，与慢调传统电阻式栅极驱动器相比略有下降。这一结果与时域波形一致，使用所提有源栅极驱动器时，电压和电流振荡更小、衰减更快，表明所提有源栅极驱动器在降低电压和电流振荡方面具有优异性能，有利于抑制电磁干扰。 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_058_64c059919d4d.png)

（图 20 快速傅里叶变换分析与对比） 

（a）电压快速傅里叶变换 （b）电流快速傅里叶变换 

VI. COMPARISON WITH EXISTING AGDS

A comparison of existing AGDs is shown in Table 6. Theresearches verified the effectiveness of overshoot suppressionand EMI enhancement of AGD, and showed the diversity ofAGD implementation methods. However, they also revealedthe difficulty of satisfying real-time dv/dt and di/dt feedbackwith simple circuit structure.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_059_293340d08b08.png)

六、与现有有源栅极驱动器的对比 

现有有源栅极驱动器的对比如表 6 所示。现有研究验证了有源栅极驱动器在过冲抑制和电磁干扰改善方面的有效性，展示了有源栅极驱动器实现方法的多样性，但也暴露了难以用简单电路结构实现实时 dv/dt 和 di/dt 反馈的问题。 

表 6 现有有源栅极驱动器对比

参考文献

结构类型

实现方法

有源元件

声称功能

15

串联阻抗型

2 个压控可变阻抗

2 个 MOSFET、2 个电压基准源

基于 vGS 的调制

17

串联阻抗型

2 个开关旁路栅极电阻

2 个模拟开关、4 个比较器

基于 vGS 的两电平调制

18

并联阻抗型

1 个电流镜

4 个双极结型晶体管

dv/dt 闭环控制

19

并联阻抗型

2 个受控电流源

2 个运算放大器、10 个双极结型晶体管

dv/dt 和 di/dt 闭环控制

11

受控源型

1 个受控电压源、2 个受控电流源

4 个运算放大器、4 个比较器、10 个双极结型晶体管、现场可编程门阵列

dv/dt 和 di/dt 触发的多电平控制

12

受控源型

1 个受控电压源

1 个运算放大器、2 个双极结型晶体管、4 个比较器、1 个数模转换器、现场可编程门阵列

dv/dt 和 di/dt 触发的多电平控制

14

受控源型

2 个受控电流源

3 个运算放大器、1 个比较器、2 个激光驱动器、2 个光触发双极结型晶体管

dv/dt 闭环控制

21

受控源型

2 个受控电流源

2 个运算放大器、2 个数模转换器、定制集成电路、现场可编程门阵列

固定时序非实时控制

22

受控源型

1 个受控电压源

1 个运算放大器、2 个双极结型晶体管

dv/dt 和 di/dt 闭环控制

23

受控源型

固定两电平导通电压、可变两电平关断电压

6 个 MOSFET、6 个缓冲器或反相器、1 个双极结型晶体管、2 个运算放大器、微控制器

基于模型的非实时控制

24

受控源型

固定两电平关断电压

4 个 MOSFET、4 个缓冲器或反相器、微控制器

基于模型的非实时控制

所提有源栅极驱动器

串联阻抗型

2 个电压跟随器

2 个双极结型晶体管

dv/dt 和 di/dt 闭环控制

  

Due to different testing environments employed acrossdifferent studies, the effectiveness of AGDs (overshoot supression, switching loss, EMI) cannot be directly comparedbetween studies.

由于不同研究采用的测试环境不同，无法直接比较各研究中有源栅极驱动器的有效性（过冲抑制、开关损耗、电磁干扰等）。

From Table 6. it can be inferred that previous AGDs withsimple circuit structure had limited functionality. AGDs in\[15\] and \[17\] did not include any feedback and research\[18\] was limited to dv/dt feedback. AGD proposed in \[22\]adopted the very standard linear amplifier as controlled sourceAGD. High speed OPAMPs were used and special cautionwere needed for power filtering and bypass. Research \[14\]proposed an innovative optically isolated AGD, but requiredspecially designed and manufactured optoelectronic devices.Other works either had too many components, expensive digital controller or lacks real-time capability. Based on theclaimed capability of these AGDs, to achieve real-time dv/dtand di/dt closed-loop control, the proposed scheme featuresthe most concise circuit architecture and the minimal component count

 从表 6 可以看出，以往结构简单的有源栅极驱动器功能有限：文献 \[15\] 和 \[17\] 的有源栅极驱动器不包含任何反馈，文献 \[18\] 的有源栅极驱动器仅局限于 dv/dt 反馈；文献 \[22\] 提出的有源栅极驱动器采用标准线性放大器作为受控源型有源栅极驱动器，使用高速运算放大器，且需要特别注意电源滤波和旁路；文献 \[14\] 提出了一种创新的光隔离有源栅极驱动器，但需要专门设计和制造光电器件；其他研究要么元件数量过多、数字控制器成本高昂，要么缺乏实时控制能力。基于这些有源栅极驱动器的声称功能，所提方案在实现实时 dv/dt 和 di/dt 闭环控制方面，具有最简洁的电路架构和最少的元件数量。 

Generally, the simpler AGD circuit consumes less power,which is important because the power delivered by gate driverpower supply is very limited. The complicated AGD circuitusually come with greater power consumption, raising therequirements for gate driver power supply. The peripheralcircuit of AGD also adds to the complexity, where OP-AMPs,comparators, microcontrollers and FPGAs need dedicatedpower supplies. On the contrast, the proposed AGD onlyneeds power for the original on/off gate driver. The circuitstructure provides convenience for cost saving and manufacturing.

通常，有源栅极驱动器电路越简单，功耗越低，这一点至关重要，因为栅极驱动器电源提供的功率非常有限。复杂的有源栅极驱动器电路通常功耗较大，对栅极驱动器电源提出了更高要求。有源栅极驱动器的外围电路也会增加复杂度，运算放大器、比较器、微控制器和现场可编程门阵列等都需要专用电源。相比之下，所提有源栅极驱动器仅需为原始通断栅极驱动器供电，该电路结构为成本节约和制造提供了便利。 

The latency performance was not provided by most AGDstudies. Research \[19\] and \[21\] provide the latency performance of their works. The latency would be greater than 10nsbased on the performance of part of their circuits. On the otherhand, less than 10 ns latency was observed with the proposedAGD by comparing to CGD. No more works of analog AGDwere found presenting the timing and latency performance,and it would be feasible to evaluate the delay by the length ofthe signal chain, in which the proposed AGD outruns formerworks. Low latency performance of the proposed AGD allowssupporting transistors with higher switching speed.

大多数有源栅极驱动器研究未提供延迟性能数据，文献 \[19\] 和 \[21\] 给出了其研究的延迟性能，基于部分电路的性能，延迟大于 10ns。而所提有源栅极驱动器与传统电阻式栅极驱动器相比，延迟小于 10ns。未发现其他模拟有源栅极驱动器研究提供时序和延迟性能数据，通过信号链长度可评估延迟，所提有源栅极驱动器优于以往研究。所提有源栅极驱动器的低延迟性能使其能够支持开关速度更高的晶体管。 

VII. CONCLUSIONAiming 

at the problem of voltage and current overshoot inthe application of SiC MOSFET, a novel Kelvin-source seriesactive gate driver is proposed. The proposed AGD fulfillsthe function of existing AGD structures while merging theadvantages of each type. A combined dv/dt and di/dt controlmethod is adopted. The proposed AGD provides direct pathfor feedback signal, achieving real-time feedback control,simple structure and fast response. The working principle ofthe proposed AGD is analyzed, and a method of designingresistor network is given. Simulation proves the function ofthe proposed AGD.

七、结论 

针对碳化硅 MOSFET 应用中的电压和电流过冲问题，提出了一种新型开尔文源极串联有源栅极驱动器。该有源栅极驱动器兼具现有有源栅极驱动器结构的功能和优点，采用 dv/dt 和 di/dt 混合控制方法，为反馈信号提供了直接路径，实现了实时反馈控制、结构简单和响应快速的特点。分析了所提有源栅极驱动器的工作原理，给出了电阻网络的设计方法，并通过仿真验证了其功能。 

A double pulse test platform was built to put the circuitto the test. Results shows that the proposed AGD is able toeffectively suppress the voltage and current overshoot. Thereal-time feedback control ensures the adaptability of variousload conditions. By comparing to CGD, less than 10 ns delayis induced by the AGD circuit. The switching loss of theproposed AGD is lower than CGD while achieving the sameovershoot suppressing performance. The proposed AGD alsoproves to be effective in improving EMI performance.

搭建了双脉冲测试平台对电路进行测试，结果表明，所提有源栅极驱动器能有效抑制电压和电流过冲；实时反馈控制确保了其对各种负载条件的适应性；与传统电阻式栅极驱动器相比，有源栅极驱动器电路引入的延迟小于 10ns；在实现相同过冲抑制性能的同时，所提有源栅极驱动器的开关损耗更低，且在改善电磁干扰性能方面具有显著效果。 

Compared with the existing AGD, the proposed scheme issimple in structure and easy to realize. The AGD circuit requires no extra power supply, which makes great conveniencefor circuit design and layout. The real-time closed-loop control showed excellent effect and strong versatility. Apart fromdriving SiC MOSFETs, the proposed AGD can be applied toSi devices to improve their performances.

与现有有源栅极驱动器相比，所提方案结构简单、易于实现，无需额外电源，极大地方便了电路设计和布局。实时闭环控制效果优异、通用性强，除驱动碳化硅 MOSFET 外，还可应用于硅器件以提升其性能。 

REFERENCES（参考文献）

\[1\] Y. Yang, Y. Wen, and Y. Gao, “A novel active gate driver for improvingswitching performance of high-power SiC MOSFET modules,” IEEETrans. Power Electron., vol. 34, no. 8, pp. 7775–7787, Aug. 2019,doi: 10.1109/TPEL.2018.2878779.

\[2\] D. Wang, M. Zhang, S. Ma, D. Xia, K. Yu, and Y. Pan, “A high-voltagesolid-state switch based on submodule topology of SiC MOSFETsfor J-TEXT tokamak,” IEEE Trans. Plasma Sci., vol. 48, no. 6,pp. 1676–1680, Jun. 2020, doi: 10.1109/TPS.2019.2959623.

\[3\] J. Wang, H. S.-H. Chung, and R. T.-H. Li, “Characterization and experimental assessment of the effects of parasitic elements on the MOSFETswitching performance,” IEEE Trans. Power Electron., vol. 28, no. 1,pp. 573–590, Jan. 2013, doi: 10.1109/TPEL.2012.2195332.

\[4\] G. Li et al., “Comparison between 1.7 kV SiC SJT and MOSFET powermodules,” in Proc. IEEE 4th Workshop Wide Bandgap Power DevicesAppl., Nov. 2016, pp. 17–22, doi: 10.1109/WiPDA.2016.7799903.

\[5\] P. Yi, Y. Cui, A. Vang, and L. Wei, “Investigation and evaluation of high power SiC MOSFETs switching performanceand overshoot voltage,” in Proc. IEEE Appl. Power Electron.Conf. Expo., San Antonio, TX, USA, Apr. 2018, pp. 2589–2592,doi: 10.1109/APEC.2018.8341382.

\[6\] J. Rice and J. Mookken, “SiC MOSFET gate drive design considerations,” in Proc. IEEE Int. Workshop Integr. Power Packag., Chicago, IL,USA, May 2015, pp. 24–27, doi: 10.1109/IWIPP.2015.7295969.

\[7\] X. Zhang, G. Sheh, I. H. Ji, and S. Banerjee, “In depthanalysis of driving loss and driving power supply structurefor SiC MOSFETs,” in Proc. IEEE Appl. Power Electron.Conf. Expo., Anaheim, CA, USA, Mar. 2019, pp. 965–971,doi: 10.1109/APEC.2019.8722272.

\[8\] N. Oswald, P. Anthony, N. McNeill, and B. H. Stark, “An experimental investigation of the tradeoff between switching losses and EMIgeneration with hard-switched all-Si, Si-SiC, and all-SiC device combinations,” IEEE Trans. Power Electron., vol. 29, no. 5, pp. 2393–2407,May 2014, doi: 10.1109/TPEL.2013.2278919.

\[9\] S. Zhao, X. Zhao, Y. Wei, Y. Zhao, and H. A. Mantooth, “A reviewof switching slew rate control for silicon carbide devices using activegate drivers,” IEEE J. Emerg. Sel. Topics Power Electron., vol. 9, no. 4,pp. 4096–4114, Aug. 2021, doi: 10.1109/JESTPE.2020.3008344.

\[10\] K. Horii et al., “Large-current output digital gate driver for 6500 V,1000 A IGBT module to reduce switching loss and collector currentovershoot,” IEEE Trans. Power Electron., vol. 38, no. 7, pp. 8075–8088,Jul. 2023, doi: 10.1109/TPEL.2023.3259521.

\[11\] F. Zhang, X. Yang, Y. Ren, L. Feng, W. Chen, and Y. Pei,“Advanced active gate drive for switching performance improvement and overvoltage protection of high-power IGBTs,” IEEETrans. Power Electron., vol. 33, no. 5, pp. 3802–3815, May 2018,doi: 10.1109/TPEL.2017.2716370.

\[12\] Y. Ling, Z. Zhao, and Y. Zhu, “A self-regulating gate driver forhigh-power IGBTs,” IEEE Trans. Power Electron., vol. 36, no. 3,pp. 3450–3461, Mar. 2021, doi: 10.1109/TPEL.2020.3015924.

\[13\] V.-L. Pham, H. Obara, and K. Hata, “A partial active gate control forimprovement of a trade-off relation between surge voltage and efficiency in a three-phase inverter,” IEEE Trans. Ind. Appl., vol. 60, no. 3,pp. 4239–4250, May/Jun. 2024, doi: 10.1109/TIA.2024.3353153.

\[14\] H. Riazmontazer and S. K. Mazumder, “Optically switched-drivebased unified independent dv/dt and di/dt control for turn-off transitionof power MOSFETs,” IEEE Trans. Power Electron., vol. 30, no. 4,pp. 2338–2349, Apr. 2015, doi: 10.1109/TPEL.2014.2327014.\[15\] R. Ramabhadran, M. H. Todorovic, C. Li, E. Asa, and K.-K. Huh, “Ananalog active gate drive circuit architecture for wide band gap devices,”in Proc. IEEE Energy Convers. Congr. Expo., Baltimore, MD, USA,Sep. 2019, pp. 380–386, doi: 10.1109/ECCE.2019.8912218.

\[16\] L. N. Alves and R. L. Aguiar, “On the effect of time delays in negativefeedback amplifiers,” in Proc. IEEE Int. Symp. Circuits Syst., Kobe,Japan, May 2005, pp. 984–987, doi: 10.1109/ISCAS.2005.1464755.

\[17\] A. P. Camacho, V. Sala, H. Ghorbani, and J. L. R. Martinez, “A novelactive gate driver for improving SiC MOSFET switching trajectory,”IEEE Trans. Ind. Electron., vol. 64, no. 11, pp. 9032–9042, Nov. 2017,doi: 10.1109/TIE.2017.2719603.

\[18\] A. Marzoughi, R. Burgos, and D. Boroyevich, “Active gate-driver withdv/dt controller for dynamic voltage balancing in series-connected SiCMOSFETs,” IEEE Trans. Ind. Electron., vol. 66, no. 4, pp. 2488–2498,Apr. 2019, doi: 10.1109/TIE.2018.2842753.

\[19\] L. Shu, J. Zhang, F. Peng, and Z. Chen, “Active current sourceIGBT gate drive with closed-loop di/dt and dv/dt control,” IEEETrans. Power Electron., vol. 32, no. 5, pp. 3787–3796, May 2017,doi: 10.1109/TPEL.2016.2587340.

\[20\] S. Acharya, X. She, F. Tao, T. Frangieh, M. H. Todorovic, and R. Datta,“Active gate driver for SiC-MOSFET-based PV inverter with enhancedoperating range,” IEEE Trans. Ind. Appl., vol. 55, no. 2, pp. 1677–1689,Mar./Apr. 2019, doi: 10.1109/TIA.2018.2878764.

\[21\] A. Schindler, B. Koeppl, B. Wicht, and J. Groeger, “10ns variable current gate driver with control loop for optimized gate current timing andlevel control for in-transition slope shaping,” in Proc. IEEE Appl. PowerElectron. Conf. Expo., Tampa, FL, USA, Mar. 2017, pp. 3570–3575,doi: 10.1109/APEC.2017.7931210.

\[22\] Z. Gao, J. Zhang, Y. Huang, R. Guan, and Y. Zhou, “A closedloop active gate driver of SiC MOSFET for voltage spike suppression,” IEEE Open J. Power Electron., vol. 3, pp. 723–730, 2022,doi: 10.1109/OJPEL.2022.3209334.

\[23\] S. Zhao, X. Zhao, A. Dearien, Y. Wu, Y. Zhao, and H. A. Mantooth, “An intelligent versatile model-based trajectory-optimized active gate driver for silicon carbide devices,” IEEE J. Emerg. Sel.Topics Power Electron., vol. 8, no. 1, pp. 429–441, Mar. 2020,doi: 10.1109/JESTPE.2019.2922824.

\[24\] S. Zhao et al., “Adaptive multi-level active gate drivers for sic powerdevices,” IEEE Trans. Power Electron., vol. 35, no. 2, pp. 1882–1898,Feb. 2020, doi: 10.1109/TPEL.2019.2922112.

\[25\] A. Anurag and P. Barbosa, “High-voltage isolated power supplystructure for gate drivers of medium-voltage SiC devices,” IEEETrans. Power Electron., vol. 38, no. 6, pp. 6907–6911, Jun. 2023,doi: 10.1109/TPEL.2023.3249562.

\[26\] L. Zhang, S. Guo, X. Li, Y. Lei, W. Yu, and A. Q. Huang, “IntegratedSiC MOSFET module with ultra low parasitic inductance for noise freeultra high speed switching,” in Proc. IEEE 3rd Workshop Wide BandgapPower Devices Appl., Blacksburg, VA, USA, Nov. 2015, pp. 224–229,doi: 10.1109/WiPDA.2015.7369296.

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_060_8a6d6f7ddaa7.png)

注：英文版资料是原文档，中文版由翻译软件提供，请分别参考。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_061_cb1db5107b62.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_062_10503fd37b7f.jpg)

![图片](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_063_66edae492128.jpg)

![图片](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\简单结构的SiC_MOSFET低延迟dv_dt_和_di_dt_闭环有源栅极驱动器设计_images\img_064_17f5977e8c15.jpg)