# 基于PCB罗氏线圈的SiC MOSFET简化短路保护电路研究

原创 项鹏飞 ，郝瑞祥 SiC碳化硅MOS管及功率模块的应用 2024-12-26 08:16 广东

> 原文地址: [https://mp.weixin.qq.com/s/ZTaS59ou2yNxL9w7Y7v3yg](https://mp.weixin.qq.com/s/ZTaS59ou2yNxL9w7Y7v3yg)

文章来源：中国电机工程学报

作者：项鹏飞1，郝瑞祥1\*，郝一2，游小杰1，卜宪德2(1．北京交通大学电气工程学院，北京市 海淀区100044；2．先进输电技术国家重点实验室(全球能源互联网研究院有限公司)，北京市 昌平区102209)

摘要：随着宽禁带器件的发展，碳化硅金属–氧化物半导体场效应晶体管(silicon carbide metal-oxide-semiconductor field-effect transistor，SiC MOSFET)被广泛应用，对其短路保护的研究成为了保障电力电子设备可靠性的重要课题。文中提出一种基于PCB罗氏线圈的SiC MOSFET简化短路保护电路。相比于已有的积分式罗氏线圈短路检测方案，所提出的方案改进了其复杂且高成本的信号处理电路，可以根据设定的电流变化率阈值和故障时间阈值直接诊断器件的电流工作状态，并实现快速、准确、可靠的短路保护。文中分析SiC MOSFET的短路行为以及寄生参数对短路检测的影响；着重研究PCB罗氏线圈结构和电路参数的设计过程；为避免保护电路误动作，对干扰过程进行分析和验证，并提出相应的干扰抑制方案。最后通过多组实验验证所设计电路参数、干扰抑制方案的有效性及短路保护功能的可靠性。

关键词：SiC MOSFET；短路；短路保护；PCB罗氏线圈；电流变化率

0. 引言

随着电力电子技术的不断发展，半导体器件性能也在不断提升。SiC器件具有禁带宽度大、临界击穿场强高、导通电阻小、导热率高、电子饱和漂移速度高等优异特性，有助于提高电力电子系统的功率密度和效率，非常适合应用于电力系统、轨道交通等高压大功率场合。

短路保护是保障电力电子器件可靠性的重要环节，针对器件短路特性的研究是短路保护研究的重要基础。研究表明：1）SiC MOSFET短路电流变化率和饱和电流都很大，短路耐受时间很短；2）温度对SiC MOSFET输出特性及转移特性有较为明显的影响，进而影响器件短路行为；3）在电流变化率较高的情况下，器件栅源极电压和漏源极电压的检测存在明显的误差，基于器件端电压检测设计的短路检测电路，易对短路诊断造成干扰；4）功率环路杂散电感会在器件关断过程中导致严重的过冲和振荡，增大器件电压应力，危害器件和系统的可靠性。因此要求适用于SiC MOSFET的短路保护方案具有以下特点：1）快速响应；2）降低检测电路对环境温度的敏感度；3）检测环节准确可靠；4）尽量避免利用或增大环路杂散电感，降低检测电路和主电路之间的相互影响。

目前短路检测方案主要有4种：去饱和检测方案、栅极电荷检测方案、附加元件电流检测方案以及积分式罗氏线圈检测方案。去饱和检测方案电路结构简单，设计方便，通过检测器件漏源极电压间接识别短路故障。但该方案必须设置盲区时间以避免器件开通过程中保护电路误动作，而盲区时间会增大保护电路响应延时。SiC MOSFET相比于Si器件更难以退出饱和区，饱和电流也远大于额定电流，短路时器件会长时间处于电流上升阶段，因此响应延时更容易给SiC器件带来永久性损伤。另外，在不同的温度下，受输出特性变化影响，相同电流的SiC MOSFET漏源极电压存在明显差异，因此在不同温度条件下固定的漏源极阈值电压对应的器件电流存在较大的差异，使得检测电路的参数难以确定。文献\[14-15\]中提出利用器件栅极电荷检测短路故障，该方案设计复杂，需要针对不同的器件确定不同的电荷量检测阈值，且仅适用于开通短路故障检测。

文献\[12,16-21\]利用附加元件直接检测器件电流状态，其中并联电流检测元件方案的成本较高，且仅适用于少数具有特殊结构的器件。寄生电感短路检测方案则需要将预留的冗余寄生电感接入检测电路，增加了主电路寄生参数，而且只适用于单管保护，应用范围受限。其中文献\[12,20-21\]利用寄生电感电压得到的电流变化率直接诊断短路故障，但存在不同短路故障类型响应时间不一致的问题，此外由于寄生电感电压对电路开关过程的振荡非常敏感，电流变化率检测结果容易受到干扰从而引起保护电路误动作。文献\[13,22-23\]提出了积分式PCB罗氏线圈短路检测方案，该方案利用PCB罗氏线圈、信号处理电路和控制芯片实时监测器件电流。该方案虽然可以准确检测器件电流值，但其信号处理电路不仅需要高带宽、高精度的有源积分电路和高速A/D转换芯片，还需要在积分电路输入端增加可微调的输入补偿电路以消除非理想运放电路的输出失调电压，并且在积分电路两端增加高速复位开关，在每一次器件关断时将积分器输出清零，才能在变换器连续工作时得到准确的器件电流值。此外，确定的积分电路参数会限制器件最大开通脉冲宽度。该方案电路结构复杂，成本高，在实际工程中难以推广应用。

本文提出一种基于PCB罗氏线圈的SiC MOSFET简化短路检测电路。该方案保留了PCB罗氏线圈作为检测环节所具有的与主电路完全隔离、引入杂散参数小、响应速度快、受温度影响小等优点，摒弃了积分式检测方案中复杂的信号处理电路，大大降低电路复杂度和成本，同时规避了最大器件开通脉冲宽度限制。此外，针对SiC MOSFET开关过程振荡易对短路检测造成干扰的问题，提出利用不同工况下电流频率分量的差异进行干扰抑制的方法，有效地避免了保护电路误动作。

本文对SiC MOSFET短路过程进行分析；介绍所提出短路保护方案的电路拓扑和工作原理；对PCB罗氏线圈结构参数、输出阻尼参数进行深入研究和计算，对干扰过程进行理论推导和验证，并给出抑制方案；通过多种工况实验对罗氏线圈参数、抗干扰电路和短路保护功能进行验证。

1. 短路过程分析

考虑寄生参数的SiC MOSFET短路电路图如图1所示。虚线方框内部为包含了体二极管及封装内部寄生参数的SiC MOSFET，包括内部栅极电阻RGI，内部引线电感LGI、LD1和LS1，寄生电容CGS、CDS和CDG。外部参数主要是栅极电阻RGO，驱动、器件以及主电路之间的线路杂散电感，包括器件管脚连接电感LGO，LD2和LS2，母线电感Lloop1、Lloop2，短路时的拓扑等效电感Lsc。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUjnnyGoLOYvUNibqcBjFkU8A03o0X3pria6fHKRvibrzic9W3RqtUIWV2oA/640?wx_fmt=png&from=appmsg)

短路过程大致可以分为3个阶段。关键波形如图2所示。在t0时刻之前，器件Q处于关断状态，电压源VDC作用于器件Q，功率环路中没有电流。t0时刻器件开始导通，发生短路故障。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU5E1yrCJWeW4POS96RqeX2I77dbicicwaiaKubTicqMYUF5h4hcJzAD3DqA/640?wx_fmt=png&from=appmsg)

1）阶段1(t0—t1)：开通延时阶段。t0时刻，驱动电压开始由负压升至驱动正压VGS，器件栅源极电压vGS开始上升，栅极电流iG主要给CGS充电。

此阶段电路的微分方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUwXGhGxrThrdiaMNYDbbgnwLroGdpCr9yiaIMicOhH3Xm5O3NiaGSy0ObVQ/640?wx_fmt=png&from=appmsg)

式中：RG=RGO+RGI；共源极电感LS=LS1+LS2。在这一阶段中，器件栅源极电压vGS低于器件阈值电压VTH，器件沟道还处于关断状态，主功率环路中几乎没有电流，t1时刻，当vGS达到阈值电压VTH，此阶段结束。

2）阶段2(t1—t2)：vDS电压下降阶段。此阶段是短路电流上升的第1阶段，电流变化率逐渐增大。t1时刻器件沟道开始导通，主功率环路电流迅速增大。电流变化率主要与器件栅源极电压vGS、跨导特性g、电压源VDC及功率环路杂散电感有关。非常高的正向电流变化率会在功率环路杂散电感上形成明显的正向压降，此时器件漏源极vDS是电压源VDC与环路杂散电感电压的差值，随着电流变化率逐渐增大，vDS逐渐降低，电容CDG和CDS放电，由于寄生电容放电环路阻尼很小，这一过程会引起振荡。正向的电流变化率在共源极电感LS上形成的压降还会对栅源极环路产生负反馈作用，导致栅源极电压vGS的变化率降低。此阶段电路的微分方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUp4hzrEnFOKGVqauIlbTbVPbgtyeFJKCYLL8dZBUvkmB5bQJ0gvZCog/640?wx_fmt=png&from=appmsg)

式中：

Lloop=LS+LD1+LD2+Lsc+Lloop1+Lloop2，即功率环路杂散电感总和；iD为器件漏极电流；iCH为器件沟道电流，其大小与器件栅源极电压、漏源极电压和结温有关。

3）阶段3(t2—)：vDS电压上升阶段。此阶段是器件电流上升的第2阶段，电流变化率逐渐减小。由于电流变化率减小，vDS电压也相应的上升，电容CDG和CDS充电，该过程同样会引起振荡。随着电流变化率逐渐减小，vDS逐渐升高至接近VDC，此阶段电路微分方程与上一阶段相同。如果短路继续进行，由于结温持续升高，器件输出特性也会随之改变，短路电流就会由于漂移层的负温度系数而减小。

在实际检测器件电压时，器件电压检测点为图1中的点G1\-S2和点D2\-S2，考虑短路时的电流变化率及杂散电感，测得的电压v'GS和v'DS可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUiatg1dD8ctTmUToY8PMp7U6kC7LOPiaVyGYX5UyxiaJVLhlxdKGSI6dkQ/640?wx_fmt=png&from=appmsg)

可以看出，器件短路过程中，由于剧烈的电流变化和寄生电感的存在，测量到的器件栅源极电压v'GS和漏源极电压v'DS会明显高于器件芯片电压vGS和vDS。如果漏源极电压变化过程产生振荡，也会通过电流振荡的形式反映在电压测量点之间的寄生电感电压上，并叠加在器件端电压测量结果中，类似的现象同样会出现在器件正常开关过程中。这一类现象会影响器件栅源极电压和漏源极电压的检测结果，进而影响基于电压检测的短路检测方案的可靠性。

2. 短路保护电路拓扑及工作原理

本文提出的短路保护电路拓扑及驱动电路板安装图如图3所示，图中包括SiC MOSFET模块、栅极驱动板及PCB罗氏线圈。短路检测电路主要包括PCB罗氏线圈、无源干扰抑制电路、比较器及控制芯片。本文基于CREE公司1700V 300A SiC MOSFET模块CAS300M17BM2进行短路保护电路设计和实验。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUJcrP0iadS3Ql3AX3WFBpTrdASHLA0QpjHibSQriaE46aFLCgvItkxFwWQ/640?wx_fmt=png&from=appmsg)

罗氏线圈是一种电磁感应线圈，当穿过罗氏线圈的被测载流导体中的电流发生变化时，罗氏线圈两端会产生感应电压，感应电压大小与罗氏线圈和被测载流导体之间的互感以及被测电流变化率成正比。PCB罗氏线圈是由多层PCB板的铜线和过孔构成的。所提出的短路保护电路工作过程如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUXbneibomfTSa3uZIgru3uyfs1AImrS3tib5XNF4CZxwaNhFb8u2nMkJg/640?wx_fmt=png&from=appmsg)

  
t1时刻之前，器件处于关断状态。t1时刻器件开通，经开通延迟后器件电流迅速上升，这一过程电流变化率较大，超过了设定的电流变化率阈值，控制芯片接收到故障信号。但由于持续时间短，尚未达到故障参考阈值时间Tref，不触发短路保护。t2时刻开始，器件处于负载电流上升过程，电流变化率很小，低于设定的电流变化率阈值，无故障信号。t3时刻，由于发生短路故障，器件电流迅速上升，电流变化率较大，超过了设定的电流变化率阈值，控制芯片接收到故障信号。t4时刻，故障信号持续时间达到参考阈值时间Tref，控制芯片诊断发生短路故障，发出关断信号。经纳秒级电路传输延时后，器件在t5时刻开始关断。t6时刻器件完全关断，短路故障被切除。

3. 短路保护电路参数设计

3.1 PCB罗氏线圈结构及互感参数

本文根据CAS300M17BM2封装设计PCB罗氏线圈，如图3所示。两个PCB罗氏线圈分别安装在半桥模块上管漏极(3号端子)和下管源极(2号端子)。PCB罗氏线圈结构如图5所示，为了尽量提高罗氏线圈互感值和保证绝缘间距，将PCB罗氏线圈设计为马蹄形状。每一匝线圈由PCB板的顶层铜线、过孔和底层铜线组成，并在多层板的中间层增加了两层回绕层。中间回绕层可以消除垂直于PCB板的外部磁场影响。将罗氏线圈设计为闭合的对称形状可以消除平行于PCB板的外部磁场影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUgtMJNEibUWqtiblh4lRQJ4gXMnVRDWPjsxichYibdc4oiasbnPBoBoaAOgQ/640?wx_fmt=png&from=appmsg)

为求解所设计的马蹄形PCB罗氏线圈的互感参数，需先求解每一匝小线圈产生的感应电压，再求和得到总感应电压并求解线圈等效互感。图6将小线圈分为两类，第I类是在半圆形边上的小线圈，第II类是在矩形边上的小线圈。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUuyGTbsgwfuvXz6n3hkJcuLgNF8QsRoKu3lLsZAb0vH9jQmSBjAjSFw/640?wx_fmt=png&from=appmsg)

如图6(a)所示，对于1/4圆形边上任意一匝I类小线圈，设其与圆弧形圆心水平线的角度为2a，a∈\[0,π/4\]，被测载流导体中心到小线圈内径的长度为2rcosa。对于小线圈截面上的任意点m，设其与内径的垂直距离为a，a∈\[0,w\]，m点与载流导体的距离可以通过余弦定理得到，可以近似表示为2rcosa+acosa。则待测载流导体在m点产生的与小线圈截面垂直方向的磁场强度大小为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUFoDibuT0I85WIxWY0mUnF5JxjPZQaNOeicxLCntTcdDuWvCPVKc7rXOA/640?wx_fmt=png&from=appmsg)

式中：i为垂直穿过罗氏线圈的载流导体中的电流；u0为真空磁导率。通过对小线圈截面内磁场强度进行积分，得到待测通流导体产生的磁场穿过小线圈截面的磁通，如果待测电流为交流信号，则这一匝小线圈上产生的感应电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUK3FRlqsZBxkIfcR83lzyr3ULvmicL8U1jqUgACVdhpyxSMqRyOfpXpg/640?wx_fmt=png&from=appmsg)

式中：h为PCB板板厚；di/dt为载流导体的电流变化率。对所有I类小线圈产生的感应电压值进行求和，可以得到I类线圈产生的总感应电压：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUOhqeAcoqkKZLcWTXQM0yrGajfyHlFRHphsa2icpzV6EnRhrAX3ug82Q/640?wx_fmt=png&from=appmsg)

式中N1为1/4圆形边上小线圈的匝数。对余弦序列进行求和，可以先利用欧拉公式将余弦部分转化为自然指数，再对转化后的自然指数等比数列进行求和，并取结果的实数部分，得到结果：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUZdClw6btR2u7YCh1sukYmnic0k0at1MWLBo9X4VTFIfjb6j4ibXj22kQ/640?wx_fmt=png&from=appmsg)

如图6(b)，对于矩形边上任意一匝II类小线圈，设其与矩形边垂线的角度为β，β\[0,π/4\]。载流导体到矩形边的垂直距离为l/2，载流导体到小线圈内径的长度为(l/2)cosβ，对小线圈截面上的点n，设其与内径的垂直距离为b，b∈\[0,w\]，n点与载流导体的距离可以通过余弦定理得到，可以近似表示为(l/2) cosβ+bcosβ。载流导体在n点产生的与小线圈截面垂直方向的磁场强度大小为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUbzwgTMciafykUM1TzX6s74Byy7sMWlTTwJECnsKQEgpvdF30W1Lyv4A/640?wx_fmt=png&from=appmsg)

通过对小线圈截面内磁场强度进行积分，得到待测通流导体产生的磁场穿过小线圈截面的磁通，如果待测电流为交流信号，则载流导体在这匝小线圈上产生的感应电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUWq8wR8BF5iaxrd0Y3uxlcWuoibcIZStWGnu0qAlU0ZqgRbZY424QsKrg/640?wx_fmt=png&from=appmsg)

对所有II类小线圈产生的感应电压值进行求和，得到II类线圈产生的总感应电压值：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUhSbD2bFlEAw6RoXu4Q3sawKmxGNGsLNLILYKUT8qVBMxkIiaBbBzsTw/640?wx_fmt=png&from=appmsg)

式中N2为矩形边上II类小线圈总匝数的1/4。同样利用欧拉公式和等比数列求和公式对余弦序列进行求和后得到最终结果：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUfg6MibG87xfW4Yt9D6vyAUBu32RqN06grD0OlN2uKGZMXzFdnicZqVTg/640?wx_fmt=png&from=appmsg)

将式(8)、(12)求和得到所设计的PCB罗氏线圈的理论总感应电压值，并求得其理论互感值M：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUqc4Y8Vz7h6g3GNRBAn8Wu6xFGvKLxHPP4vbfiblibufETkQbJTZGDGBA/640?wx_fmt=png&from=appmsg)

将图6中的几何参数，以及匝数N1=30匝，匝数N2=17.5匝，设计板厚h为3mm代入上式，可以求得所设计的PCB罗氏线圈的等效互感值约为6.37nH。将所设计的PCB罗氏线圈在Ansoft Q3D中进行仿真，得到仿真结果互感M为6.26nH，与理论计算结果接近。

3.2 罗氏线圈输出阻尼设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUpJD7RjRuViaDDtZxZAmsB0TtkdelCgr7ia4N2jRpshibnJutgdfXruxIg/640?wx_fmt=png&from=appmsg)

图7为包含杂散参数的罗氏线圈等效电路，其中：M为罗氏线圈互感；Rs为罗氏线圈内阻；Ls为罗氏线圈自感；C为寄生电容；Rl为外接负载阻尼；i1为等效变压器副边电流；i为被测电流。由等效电路可以得到其状态方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUTMBelPbR4ahEUzFXKCiciaic6iaA9rySLT6NiacckWvibzoIe4YOkeicts4LA/640?wx_fmt=png&from=appmsg)

联立可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU8vcHUhNg1sLHnSMiblzyCbFcyQIQX8EibfcFvBrqIOq0B76icF8TVUN3A/640?wx_fmt=png&from=appmsg)

如果将被测电流i(t)作为系统输入，罗氏线圈输出电压vo作为系统的输出，则罗氏线圈的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUicAptccuDpYoOPicvUSDw26FaTvj4cPrwbSOfaa9eh7nQyxq20sF68nA/640?wx_fmt=png&from=appmsg)

将Q3D仿真得到的PCB罗氏线圈自感1618nH，内阻1.71Ω，寄生电容1.49pF代入上式，并代入不同的负载阻尼值，得到如图8所示的不同负载阻尼情况下罗氏线圈的波德图，可以看出当负载阻尼较大时，罗氏线圈的相角才能在较宽的频域内保持在90度处于微分的工作状态，并对系统有一定的阻尼作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU1ClZIg2dMeUAYqYg6LJKQ2rk2PsUb6NjsT3kM6hEnLjLa2LgjT40eA/640?wx_fmt=png&from=appmsg)

为了减小寄生参数的不利影响，改善线圈动态性能，需要进一步优化负载阻尼取值。如果将等效变压器输出电压e(t)作为后级等效电路的输入，输出不变，得到由寄生参数和负载阻尼组成的二阶电路传递函数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yURpRwNyNeLeFMzjpjGzSTBiaHLeic6qcXmDMNdZvso18kgw8LgKbMslTg/640?wx_fmt=png&from=appmsg)

由于器件电流i通常接近于斜坡信号，则二阶电路的输入信号可以视为阶跃信号。为了使二阶电路阶跃响应快速、稳定，要求系统处于欠阻尼的工作状态，阻尼系数取值范围ξ∈(0, 1)，上式的ξ可由下式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU56lFnwyx2K6vqSEicc3dRciaItxMltr7emfdSCSZH0wLWIgzzziasysfw/640?wx_fmt=png&from=appmsg)

取ξ为最佳阻尼系数0.707，可以求得最佳外部负载阻尼的通解：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU0faMB4JynAISPnK2iaK57tX2iabH1LxwAY2ewgy8100LR7wszcm280sg/640?wx_fmt=png&from=appmsg)

若要使上式成立，寄生参数需满足条件：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUiaNdEFefLZSq8M3Uavv6ic4Jh2MpribGlgSmXCWk3CVnLO1grsWKxGvfA/640?wx_fmt=png&from=appmsg)

代入寄生参数值得到最佳理论负载阻尼为740Ω。图9为不同负载阻尼Rl情况下罗氏线圈等效电路的单位阶跃响应，可以看出，选择最佳理论负载阻尼时，可以得到稳定且快速的阶跃响应结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU5EXEvpiaUtibDoO4SZZ5a2NRmNlsmB6Q47tBeiah50DuJ606SQ3HZk1bA/640?wx_fmt=png&from=appmsg)

3.3 干扰过程分析及验证

由于器件硬开关开通过程电流上升阶段的电流变化率较大，且伴随持续时间较长的电流振荡，这可能会导致短路保护误动作，需要抑制这一干扰过程的影响，以避免保护电路误动作。本小节对不同工况下器件开关过程中罗氏线圈输出信号的频率特性进行分析，提出利用不同工况下输出信号频谱特性的差异来抑制干扰过程的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUNibAqfcHkNYp2aFVXx5E7v5lzPjxOwnYwTtiaP7d1iaTC3ryxgNiavt4pA/640?wx_fmt=png&from=appmsg)

图10(a)为感性负载半桥电路的电路图，图中：Ql为半桥桥臂的下管；Qh为半桥桥臂的上管。下管作为主动管和分析对象，寄生参数包括端子杂散电感LD、LG和LS，内部栅极电阻RGin，寄生电容CDG、CGS以及CDS。将上管简化为3条基本的电流通路，包括体二极管D、漏源极寄生电容CJ、导通电阻RDS(on)。此外Lloop为环路集总杂散电感，Lload为感性负载，RG为外部栅极驱动电阻。

开通过程电流振荡发生时换流过程和漏源极电压变化过程都已结束，上管处于关断状态，寄生电容CJ参与振荡；下管完全导通，漏源极电压为0V，寄生电容CDS被旁路，CDG和CGS并联简化为Ciss，栅极内部电阻RGin和栅极外部电阻RG串联合并为R'G，并和栅极杂散电感LG串联；环路杂散电感Lloop与漏极电感LD串联为L'loop。将电路化简后得到如图10(b)的等效电路。其中栅极支路等效阻抗可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUSbt8QtWJuVj1KcUjS5ibpK3f4wJlAhNXFKqrFq0zQnx42dH6KVibvf8A/640?wx_fmt=png&from=appmsg)

其中谐振频率ωON为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUGpwJ9eQMfFAiclY6iahxeqv6lVI83zLkzkTDDrLhibh15SHDKq6kibG6xg/640?wx_fmt=png&from=appmsg)

图10(b)虚线框内的支路可以等效为一个阻尼：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUfzexsWjTktYDgombBKU6upaXgu5z2BOO32hlz9AVhuJASu5xt6Jp5w/640?wx_fmt=png&from=appmsg)

图10(b)可以进一步等效为如图10(c)所示的电路，电路阻尼Req1由等效阻尼Req和器件导通电阻RDS(on)串联组成。可以看出，硬开关开通过程电流振荡相当于一个阶跃信号v(t)作用于上管寄生电容CJ和环路杂散电感而产生的振荡，下管导通电阻RDS(on)和栅极支路是该环路中的阻尼。

表1为相关寄生参数取值。通过上文中的公式及参数进行计算，可得等效阻尼Req1=0.073Ω，由于该阻尼很小，阻尼谐振频率ωd近似等于谐振频率ωON，求得理论振荡频率ωd约为20MHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUDA6f0qsHYSWbPzvm0XeQJ5yblfLyUYiciaT2733yy9lfdYBI6HMhUltw/640?wx_fmt=png&from=appmsg)

半桥直通短路过程中，上下管都处于开通状态，漏源极电压都处于变化状态，上下管的漏源极寄生电容都处于充放电过程，同理该过程相当于一个阶跃信号v'(t)作用于上下管漏源极寄生电容串联等效电容以及环路杂散电感，引起振荡。驱动支路和其他等效电阻都作为振荡电路的阻尼Req2，阻尼同样很小，对谐振频率的影响较小。可得如图10(d)所示的等效电路，其中等效电容为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUsVZVWT4hp0K1J6wgangHEvL4NQVYcl3eehTh9BhmEwQiaFicpV6Y7oSw/640?wx_fmt=png&from=appmsg)

阻尼振荡频率ωSC为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUvBe41yzSWos0xVAyWYcOU7zHvSypAqlKSSaHXQgrdVoUDpGrJFMOwA/640?wx_fmt=png&from=appmsg)

寄生电容参考表1中漏源极电压为母线电压1/2时进行取值。根据式(26)可求得短路过程理论振荡频率ωSC约为28.5MHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUHuTuVycX9Ay4Am5aAaNianSVQBjs5P8udILbPtyeibtoz79q8Ruvzmhg/640?wx_fmt=png&from=appmsg)

图11为不同实验工况PCB罗氏线圈输出信号。上图为器件硬开关开通过程，分为电流上升阶段和电流振荡阶段两个阶段。下图为1s短路过程，罗氏线圈输出电压较大，伴随振荡过程。将不同工况的PCB罗氏线圈输出信号进行频谱分析，结果如图12所示，硬开关开通电流上升阶段及电流振荡的主要频率分量集中于19.5MHz附近；1s及更长时间短路的主要频率分量集中于2MHz以下，短路振荡过程的频率分量集中于28.7MHz附近。实验波形频谱分析结果与理论分析结果接近。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUibcoStSBiazB0RsVvtR9c7k8X9a5NicPY8jBhphtzYqQs5T0h3ZAAmaSg/640?wx_fmt=png&from=appmsg)

对比理论计算和实验波形频谱分析结果可知，振荡过程的频率分量远大于需要保护的短路过程的基波频率，因此利用频率分量差异来区分不同的工作状态是可行的。

4. 短路保护电路实验验证

短路故障包括两种典型工况。其中开关管在导通前已处于低阻抗回路中，即开关管一开通就会发生短路被称为硬开关故障(hard switching fault，HSF)，例如半桥桥臂对管已经处于导通状态时开关管被导通，或环路中的其他器件已经发生损坏时开关管被导通等。在开关管正常工作时，负载发生短路引起的故障被称为负载短路故障(fault under load，FUL)，例如在开关管导通状态下半桥桥臂对管发生误触发，或负载忽然发生损坏导致短路等。

4.1 PCB罗氏线圈参数验证

首先对PCB罗氏线圈互感参数进行测试，表2为不同母线电压1s单管硬开关短路实验结果，根据电流变化率和输出电压可以计算得到平均互感值为6nH左右，和仿真、理论计算结果接近。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUNyWhJ8mnmUYxTrA4ZACjFEro290z1lEU2f4ib02nvN8jI2KDn1oYvWw/640?wx_fmt=png&from=appmsg)

4.2干扰抑制电路验证

为验证干扰抑制方案的有效性，在硬开关开通工况中对比增加干扰抑制电路前后罗氏线圈输出信号和故障信号的情况。采用无源低通滤波电路来屏蔽开通过程中罗氏线圈输出电压的高频振荡干扰，设计低通滤波器的截止频率为滤除目标频率分量频率的1/10。实验中采用的比较器型号为LT1011，其典型传播延时为150ns。

图13、14分别为600、800V硬开关开通过程中罗氏线圈输出信号及控制芯片接收到故障信号的情况，未经过干扰抑制处理的罗氏线圈输出信号幅值较高且伴随振荡过程，控制芯片会接收到持续的故障信号，这可能会引起保护电路误动作。而经过干扰抑制电路处理的罗氏线圈输出信号不仅电压值被抑制到了较低的幅值，也不再伴随振荡过程，比较器没有发出故障信号，避免了保护电路误动作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU3bDNLrK951bHNtlvKr7CMShXuD07QAQr1iccHmZKDmgXEg3px5nP4yQ/640?wx_fmt=png&from=appmsg)

4.3 短路保护功能验证

接下来利用不同的短路工况对所提出的短路保护方案的功能进行验证。首先验证电流变化率检测电路的可靠性，为保证设置的电流变化率阈值的有效性，尤其是低电流变化率下的检测精度，将电流变化率阈值设置为0.2A/ns进行测试。通过调节母线电压控制短路电流变化率，实验结果如图15所示，实际触发故障信号的最低电流变化率约为0.19A/ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUeicUJTZlGz7rZRt346ark2oM7sg9mibtef8hRnHaIkgB6Z1eagdDLYHQ/640?wx_fmt=png&from=appmsg)

其次验证不同短路工况下短路保护方案的可靠性以及所设置的参考阈值时间的有效性。图16为不同母线电压及不同保护参考阈值时间Tref情况下硬开关短路故障(HSF)保护结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUFuLUtLmoicRT0qdcpbfRK7OwPIAjegJQQHr4RVacGWSiastbKYPge4AA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUtYjvQaSO4dEZDFZDicTa28g5GicRVDRicgYlibESSkpicnjxBugF47XgMEA/640?wx_fmt=png&from=appmsg)

图17为不同母线电压及不同保护参考阈值时间Tref情况下负载短路故障(FUL)保护结果。由图可知，在不同的短路故障类型和母线电压情况下，当设定保护参考阈值时间为150ns时，器件均于检测到故障信号后240ns开始关断动作；当设定保护参考阈值时间为300ns时，器件均于检测到故障信号后390ns开始关断动作。其中增加的响应时间主要是控制芯片和驱动推挽电路的传播时延。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUNFVS5KiaiaRkZtCuj9BVWwFgCmKBUictTlkzmJD8gBTulmBia7Y4yLSqGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUfdpRzvp1rx14UgLO2XI7ib7ib2kgxXNRbaOsSB99LXuchWBAprxicMurw/640?wx_fmt=png&from=appmsg)

通过上述短路实验测试，可以看出本文提出的短路保护方案可以准确响应所设定的电流变化率阈值和故障参考阈值时间，提供快速、准确的短路保护，且保护动作的响应时间几乎不受短路故障类型和母线电压的影响。

5. 结论

本文针对SiC MOSFET的短路行为及短路保护电路展开了研究，得到如下主要结论：

1）受寄生参数影响，SiC MOSFET器件漏源极电压、栅源极电压的测量值和器件芯片电压存在明显差异，因此基于器件端电压检测的短路检测方案存在容易受到干扰的局限性。

2）本文提出的基于PCB罗氏线圈的SiC MOSFET简化短路检测方案，通过直接检测器件电流状态进行短路诊断，可以实现快速、准确、可靠的短路保护，且响应时间几乎不受短路故障类型和母线电压的影响。

3）在器件开关振荡过程和短路过程中，罗氏线圈输出信号频率分量的差异较大，可以利用这一特性进行信号处理，实现对开关振荡干扰过程的抑制，避免短路保护电路误动作。

4）本文提出的短路检测方案与主回路完全隔离、响应速度快、受温度影响小。且信号处理电路结构简单，易于实现，成本低，非常适合工程化应用。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)