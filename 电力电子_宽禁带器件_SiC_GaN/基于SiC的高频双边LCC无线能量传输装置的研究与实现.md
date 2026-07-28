# 基于SiC的高频双边LCC无线能量传输装置的研究与实现


> 原文地址: [https://mp.weixin.qq.com/s/lZkYrqlgloMdAijkqVei0w](https://mp.weixin.qq.com/s/lZkYrqlgloMdAijkqVei0w)

文章来源：高电压技术

作者：石坤宏，程志江，陈星志，杨涵棣，王 裕，黄 凯（新疆大学可再生能源发电与并网技术教育部工程研究中心，乌鲁木齐 830047）

摘 要：针对电磁耦合式无线能量传输(wireless power transfer, WPT)系统的工作频率低、功率密度小和传输距离近等问题，采用双LCC 拓扑结构，通过叠加原理得到了系统输出电流的表达式。通过T 型等效电路得到了双LCC型的 8 阶系统数学模型。应用幅频特性分析方法，实现了系统恒压、恒流工作频率的选择。采用LCC 型参数的配置方法，并基于碳化硅(SiC)器件搭建的高频逆变器。实现了一台工作频率≥300 kHz、传输功率≥500W、最大传输效率≥90%及传输距离≥100 mm 的强抗偏移的特性WPT 实验样机。重点研究了NP0 电容对保障系统稳定的工作在高频状态下的作用。通过仿真分析与实物验证，对比了SS 型与双LCC 型存在线路损耗时的传输特性，得到了动态负载及原副两线圈耦合系数不确定情况下对系统传输影响的规律。

关键词：无线能量传输；高频；双LCC 拓扑结构；传输特性；强抗偏移的特性

0. 引言1

电磁耦合式的无线电能传输(wireless power transfer, WPT)系统已经在电动汽车、自动导引运输车和卫星空间电源等有着广泛的应用前景。国内外关于WPT 系统的研究文献集中在对补偿网络、线圈形状、耦合系数与控制算法等方面。与感应式相比，电磁耦合式传输距离远，与微波式相比，电磁耦合式传输效率更高。电磁耦合式具有一定的选频能力，能够适应复杂电磁干扰下的环境中，且对生物体影响小。

早期WPT 系统多使用4 种基础的补偿结构，串串结构(SS)、串并结构(SP)、并并结构(PP)和并串结构(PS)。文献\[11\]采用互感模型对WPT 系统等效电路进行分析，提出了系统参数的配置方法。文献\[5\]使用DDQ 线圈搭建了一台强抗偏移的WPT 系统。文献\[12\]首次提出双LCC 补偿网络并进行相关研究。通过频域分析指出该拓扑结构的谐振频率与其间的耦合系数无关，原副两个线圈也与负载条件无关，这就意味着系统可以以恒定的开关频率工作，并将WPT 系统的传输效率提到到了96%。文献\[13\]指出，通过仿真分析，相比于四线圈结构和 CLC 结构，LCC 结构的单位输入功率之下的补偿电容无功损耗更低，其拓扑结构更优。文献\[14\]基于T 型等效电路提出一种任意高阶谐振电路的建模方法。

随着第3 代半导体碳化硅(SiC-MOSFET)器件的研发成功，促进了电力电子设备在高功率密度、高频率和高效率方面的发展。与普通的Si 半导体相比，SiC 半导体的物理特性更加优良。文献\[16-17\]指出相比 Si 器件，使用SiC 器件的逆变器其体积更小，功率密度可达10 W/cm。SiC 器件搭建的WPT系统在高频下的工作性能更优良，可以减小谐振电路中电容、电感的大小和体积。

现阶段研究的WPT 系统工作频率在85 kHz 左右，导致谐振电路的体积较大，不适合用在卫星空间电源、水下设备和机器人等实物体积小对功率密度要求高的场合。因此，本文提出基于SiC 搭建高频WPT 系统；对双LCC 拓扑进行数学建模，采用T型等效得到其电路的传递函数并进行时域分析；仿真中比较双LCC 型与SS 型的结构特性，同SS型相比双 LCC 型具有强抗偏移能力、宽负载输出和高传输效率等特性；为高频WPT 系统的设计和拓扑参数的分析提供一定的参考。

1 . 双 LCC 型 WPT 系统建模与参数配置

1.1 双 LCC 型 WPT 系统的建模

双LCC 型WPT 系统拓扑如图1 所示。发射端采用全桥结构，逆变产生高频交流电，经过LCC 补偿后在电感L1 产生交变磁场。接收端电感 L2 与电感 L1互相耦合，响应出交流电，再经过LCC 补偿和整流桥后直接为负载供电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139OhFWiaqYibJAebuH42o9nAC8T3TMPxcfTZArVBw5zmx59Ux9qyyahK5A/640?wx_fmt=png&from=appmsg)

图1 中，Ui为恒压输入电源；UAB、Uab分别为逆变器输出电压、整流器的输入电压；L1、L2、M分别为发射、接收线圈电感和互感；Ci，Co，Lo 为直流端的滤波电路；Lf1、C1、Cf1、Lf2、C2、Cf2 分别构成原副两端的 LCC 谐振电路；RL 为负载；If1为流过补偿电感 Lf1的电流；If2为流过补偿电感 Lf2的电流；I1为流过发射线圈 L1的电流；I2为流过接收线圈 L2的电流；S1—S4为逆变电路中的 SiC 开关管；D1—D4为整流电路中的肖特基二极管。

在双 LCC 补偿结构中，原边和副边线圈分别串入一个电容 C1和 C2，同 4 种基础的补偿结构相比，两端分别多了一个控制自由度。因此电路参数同谐振角频率 ω0的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1391MiaKb5SjVev1WOeibIuib2vsqdUoVOIurUgZpAc6LFVMGYiaQwVhXJHoQ/640?wx_fmt=png&from=appmsg)

其输入功率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139F9jQpsvtM3u8ziaktI59qwzCzkYJ22MSI7C8bHZKp4qicaFj1W4Mib6xw/640?wx_fmt=png&from=appmsg)

式中 k 为耦合系数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139Pib4uq7uBcRiaA4nepkaCgfJthZek4mywl91d8GC5PM7DWsQdIss6xEg/640?wx_fmt=png&from=appmsg)

使用叠加原理对双 LCC 补偿的磁耦合谐振无线能量传输系统的等效电路图进行分析。图 2 中If1,a、I1,a、I2,a、If2,a、If1,b、I1,b、I2,b 和 If2,b 为只有输入电压 Ui 或输出电压 Uo 作用下时谐振电路中的各部分电感的电流。图 2(a)中只有 Ui 作用，而 Uo 短路；图 2(b)中只有 Uo 作用，而 Ui 短路。当只有输入电压 Ui作用时，如图 2(a)所示 Lf2和 Cf2构成并联谐振，L1和 Cf1、C1构成并联谐振。因此流过 Lf1、L2 的电流 If1,a、I2,a 均为 0。流过 L1 和 Lf2 的电流可由下式计算得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ibPuk71neZia5yy8dzFTibbD9HVmXtOuN26IZmuKMQCE4Q7utAHIZajNQ/640?wx_fmt=png&from=appmsg)

当只有输出电压 Uo作用时，如图 2(b)所示 Lf1和 Cf1构成并联谐振，L2和 C2、Cf2构成并联谐振。因此，此时流过 Lf2、L1的电流 If2,b、I1,b均为 0。流过 Lf1和 L2 的电流可由下式计算得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139sLbcAbCZ0dkk0hXTS2I6vee4dxAKux3iakTlG9sPicmt0NAehTsFdUkA/640?wx_fmt=png&from=appmsg)

当同时考虑输入电压 Ui 和输出电压 Uo 的作用时，电路的响应为两种电压独立作用下响应之和，可得输入和输出电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139iacIjBicdvZyic1ZPQdjy0W7icwhS2DCDwiaD3oU5qIZc3wjdQdwmOKun4g/640?wx_fmt=png&from=appmsg)

从式(7)可以看出，输出负载电流 If2 的大小与M、Ui、Lf1和 Lf2有关，与负载电阻 RL无关，因此双 LCC 补偿的 WPT 系统工作在谐振频率之下可以获得与负载无关的恒流输出。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ba5PCqwSibmChicP3MYxSNmLDaGR4XVFInszO3HTxEnkfZL54HuHLrxA/640?wx_fmt=png&from=appmsg)

如图 3(a)所示，将双 LCC 补偿网络 T 型等效,再如图 3(b)进行串并联等效，可以计算得到等效阻抗 Z1—Z7 和系统的输入阻抗 Zin，实质上是一个 8阶谐振网络。其中 Lm 为发射与接收线圈的互感；L1′ 、 L2′ 分别为发射与接收的等效电感。

Z1′— Z3′ 是阻抗等效计算过程中的中间变量，分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139jhIQEP6yROtibUfSywpfofqarcHCRv39dBNCTmEplJWIVDw3sTKV8pA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ib3VdcnMHe0gdibrbVBbEEicskVsdaSgsyox3EgiaIZJ4IVibLA1KcSVp4Q/640?wx_fmt=png&from=appmsg)

最终，得到输入阻抗 Zin为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139vicO9LCTKcoKzJNjgEgDO5W9k85XyuaIh1tVmXgp5QHxUAic9VPEVFqA/640?wx_fmt=png&from=appmsg)

经拉氏变换得到输入阻抗的传递函数模型GZin(s)，其中 bm、an为谐振电路中电感电容计算得到的参数

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139aftAVniaQYeLbibmdQzXRvRjmvup8M06A29SEnzUyOd5CxibAVqgVmPxA/640?wx_fmt=png&from=appmsg)

1.2 参数配置

双 LCC 型主要是针对原副边电感、电容值进行设计，由于附录表 A1 中预设的输入输出最大电压比为 Uimax /Uomax =1，发射与接收线圈都设计成同样的尺寸，即 L1=L2，那么两端的 LCC 参数也相等。这样在参数的理论计算和电感实物绕制过程中都较为简单。根据附录表 A1 中设定的参数，通过式(2)计算得到两端补偿电感 Lf1、Lf2的值

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1397zafS8CYq9JjMOaAicd4OeYMGFgmXdoG7Z3aRnnXIyibMsIVH8D9BoNw/640?wx_fmt=png&from=appmsg)

通过式(1)计算得到两端并联补偿电容 Cf1、Cf2的值

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139FUBRu11HTwLZ21oUnU4lMpADacD7z6LicgUbmHoR0CwGsHibibaibglekg/640?wx_fmt=png&from=appmsg)

再计算两端串联补偿电容 C1、C2的值

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139nhm0RItKvzncuynFFj2mL2Y5WWKOzCOx1DzWCEPj55KFianLpJLwLLw/640?wx_fmt=png&from=appmsg)

2\.  双 LCC 型 WPT 系统性能分析

2.1 双 LCC 型输入阻抗幅频与相频特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139tZ2cOQia2ZWic8sjOM88kMX75C73Dn70fGeN38NIP5C7GwhLic5eMsTaA/640?wx_fmt=png&from=appmsg)

图 4(a)所示为不同负载电阻 RL条件下，对系统频率150~450 kHz 范围进行扫描，得到系统的输入阻抗的Bode 图。系统具有多个谐振点，工作在246kHz、300kHz 和354kHz 时，输入阻抗相角为 0°，处于谐振状态且呈阻性。此时全桥的逆变电压 UAB和输出电流 If1同相位处于软开关状态。系统的谐振点比较稳定，不随负载变化而变化。图 4(b)所示为不同耦合系数 k 条件下，对系统频率 150~450 kHz范围进行扫描，得到系统的输入阻抗的 Bode 图。从图中可知系统的固有谐振频率 300 kHz 不随耦合系数 k 的改变而改变。

2.2 双 LCC 型输出电流、电压与频率的特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139qcneIOBola8Cc65H6B1XpI2mPSjuoEkGHdNL4qAGzu2icwgd5pKTAfA/640?wx_fmt=png&from=appmsg)

双 LCC 补偿网络中存在的多个谐振点同时也是与负载无关的恒流输出点，图 5 为不同负载条件下，WPT 系统输出电流 If2与工作频率 f 的关系曲线图。当系统工作在 246 kHz、300 kHz 和 354 kHz 时，输出电流 If2与负载 RL无关，分别为：25.15 A、7.28 A 和 17.61 A。但当系统工作在 246 kHz 和 354 kHz时，输出电流 If2过大，整流二极管易损坏且成本较高。因此选择300kHz 为恒流输出点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139cxk2qnGKNJdSZfyUWVo3AF71d1CJOD60EicuK58WbPLraakVgY9gWXA/640?wx_fmt=png&from=appmsg)

电池作为一种常用的储能设备，在充电过程中分为 3 个阶段：涓流充电、恒流充电和恒压充电。因此 WPT 系统在对电池类储能元件进行能量补充时，还需要稳定在恒压充电阶段。图 6 为不同负载条件下，WPT 系统输入输出电压增益(Gv=Uab/UAB)与工作频率 f 的关系曲线。其中，在 239 kHz、260.9 kHz、329.6 kHz 和 362.6 kHz 时 Gv恒等于 1，即输出电压 Uab恒为 50V 与负载无关。当工作在 329.6 kHz 时，系统输入阻抗相角最小，呈感性。因此通过改变系统的工作频率 f，就可以实现恒流充电和恒压充电两种模式。

2.3 双 LCC 型与 SS 型 WPT 系统性能比较

由于 WPT 系统原副线圈之间存在较大的气隙为松耦合状态，因此松耦合变压器在能量传输的过程中往往伴随大量的无功，使得系统传输效率不高。而且能量的传输是依靠原副线圈中流动的高频谐振电流建立的电磁场的互相耦合实现的，当松耦合变压器的原副边位置出现偏移时，松耦合变压器参数发生变化，导致谐振状态发生改变，系统性能发生恶化。

本论文通过对双 LCC 型与 SS 型 WPT 系统在相同参数条件下进行性能比较。验证双 LCC 型具有强抗偏移能力、宽负载输出和高传输效率等特性。

2.3.1 负载电阻 RL对传输性能的影响

在 MATLAB 仿真中考虑到电源内阻 r=0.4 Ω，通过改变负载 RL（变化范围为 1~40 Ω），可以得到SS 型和双 LCC 型输出功率 POUT、传输效率η同负载电阻 RL的关系曲线图，如图 7(a)所示。均处于工作频率为 300 kHz、输入电压为 50 V、耦合系数为0.18 且原副线圈大小相等电感值为 77.4 μH 的相同参数条件之下。由于双 LCC 型比 SS 型多一个自由度，通过式(7)可知，只需要改变两端的补偿电感值并谐振匹配上串联与并联的谐振电容值，就可以改变恒流输出值的大小。同 SS 型相比，在相同负载条件下双 LCC 型输出的功率更大，且传输效率高，更适用于宽负载变化的情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139O0SAwsibPnbAjvk5iafhkjlNbAgvksq5rozXicj6GqIPGfu0MhhOykKrw/640?wx_fmt=png&from=appmsg)

2.3.2 耦合系数 k 对传输性能的影响

通过改变耦合系数 k(变化范围为 0~0.4)，可以得到 SS 型和双 LCC 型输出功率 POUT、传输效率η同耦合系数 k 的关系曲线图，如图 7(b)所示。在相同参数下，SS 型处于强耦合状态时(k>0.1)，虽然传输效率η趋近于 1，但传输功率 POUT趋近于 0，此时的系统无法进行能量的传输。双 LCC 型在谐振状态下不仅具有恒流输出的特性还具有强抗偏移的特性，其传输效率随着 k 的增大而减小，这是由于供电电源内阻的存在所导致的。在大功率、大电流的环境之下，内阻上的损耗必然增加。在大功率实物设计时应避免电流过大的情况出现，因此 WPT 系统整体需设计为大电压、小电流模型，可以采用全桥逆变而不是半桥逆变；根据式(7)可以提高补偿电感值将有效的降低输出电流，从而降低线路损耗。

2.4 直流谐振软开关的实现

在实际电路中，若开关管开通和关断过程中两端的电压和流过的电流的不为零，将产生相当大的开关损耗，而且开关损耗随着开关频率增加呈线性增长。由于本设计的 WPT 系统处于高频工作状态，使用硬开关的方式将会产生大量的开关损耗从而降低系统的传输效率。甚至损耗转化成热能，将提高开关管环境温度，使其不能正常工作或者损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139JoyYKia34s1wfzQNpjv6ia1xG2y57aeLma79CAY3xNAyNxWOyR8B38Ew/640?wx_fmt=png&from=appmsg)

采用软开关技术，可以解决上述存在的问题。通过仿真分析 LCC 补偿网络具有直流谐振软开关的特性，可以使原级的 SiC 开关管在开通之前电压先下降到 0 V，从而实现软开关零电压导通 ZVS。而在副级整流二极管关断之前电流先下降到 0 A，实现软开关零电流关断 ZCS，其 LTspice 仿真波形如图 8 所示。通过软开关技术可以大幅降低开关损耗，从而提高系统的传输效率。

2.5 SiC 器件热仿真

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1398ibp7Xjhia4HYIVAV7MTywsgQ6OTk8hwDfEvzL4dvCiaqfM3p1coablhg/640?wx_fmt=png&from=appmsg)

在实际工作状态下，由于存在开关损耗，会提高环境温度并使开关管无法正常工作。通过 PLECS仿真可以预先估计系统的热环境，将仿真环境温度设置为 25 ℃，更改负载 RL(变化范围为 20~160 Ω)，测量全桥主电路的温度，如图 9 所示。当负载较大时，开关损耗较大，此时需要外部设备对其进行散热，保护系统的正常工作状态。

3 . WPT 系统样机设计与试验验证

3.1 双 LCC 型 WPT 样机的实现

根据图 1 中的拓扑图和附录表 A1 中的参数要求，搭建了1台 WPT 实验样机，其示意图如图 10所示。具体包括 48 V 恒压电源、SiC 高频全桥逆变器、发射与接收端的谐振电路和肖特基二极管组成的高频不控整流桥。但实物电感、电容值存在容许和测量误差，因此在搭建实际的双 LCC 补偿电路时，电感与电容的实际参数只能尽量追求接近理论计算值，因此整个 WPT 系统处于准谐振的状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139XeBGefvLFwjYhwgsmSibrbcMKDuY6Ml1ABia1KNrV0bwFVYyGJTvD7Ow/640?wx_fmt=png&from=appmsg)

系统整体设计为：

1）本论文 SiC 开关管选择使用 UnitedSiC 公司型号为 UJ3C065080K3S。其主要参数如附录表 A2所示。由于系统要求工作频率为 300 kHz，因此 SiC驱动器选择IXYS公司生产的门极驱动IXDI614YI，多应用于高频率、高功率场合，最大工作频率高达2 MHz。

2）由于金属导体工作在高频环境下受趋肤效应的影响，使其内阻增加，线路损耗也会增加。在设计补偿电感和发射、接收线圈时选择直径为0.1 mm×500 股的利兹线，可以有效的降低趋肤效应从而减小损耗，最大可过 19.6 A 的电流。

3）为了保证系统工作在高频下的稳定性和可靠性，谐振电容的选择至关重要。文献\[5, 14, 20\]倾向采用薄膜电容，但薄膜电容交流耐压 UAC基本在100 kHz 处骤减。因此多数搭建的 WPT 系统工作频率在 85 kHz 左右。本论文为了减小谐振电路体积、提高品质因数、提高系统的传输距离及效率。提出使用 NP0 电容代替薄膜电容，其工作频率更高（最大工作频率为 1 MHz，完全满足本系统的设计要求）、等效串联电阻(ESR)更小。适用于高可靠、高稳定的高额、特高频场合。

4）高频不控整流桥，选择 G3S06510C 肖特基二极管，其高频下的整流特性更好。反向耐压 UR为 650 V、平均整流电流 IF为 33 A。

3.2 双 LCC 型 WPT 的实验数据分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139FOSIDqSX0R1t882sXibs1rPt0ibGtRghPEBqxnogCFRoQfornaBfTENQ/640?wx_fmt=png&from=appmsg)

图 11 为 48 V 供电时发射线圈 L1 的谐振电压UL1波形，其峰值电压约为 650 V，波形平滑接近于正弦波，具有良好的滤波效果且不受负载的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139J7psRibXibkiccUkZtQc4l3gFS5p3xahYI6SicZvtpd7YLgoiblSFJTsvibQ/640?wx_fmt=png&from=appmsg)

图 12 为原副两边逆变器与整流桥处软开关的波形，在电压开通关断的过程中，电流取趋近于 0，此时的开关损耗小效率高。同仿真波形图 8 相比近似相等。

改变负载电阻 RL（变化范围为 1~35 Ω），测量双LCC 型WPT系统分别工作在300 kHz 恒流状态、329.6 kHz 恒压状态时负载与输出电压、输出电流、传输功率及传输效率的关系曲线图，如图 13 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1391pTnFicVNIEpyvCiciasOMibu8Qc2xUAygXHw2jtbQoVWA6T9tFvtOhbZg/640?wx_fmt=png&from=appmsg)

在恒流状态下，系统实际输出电流 If2 随负载 RL 的增加而缓慢减小，这是由于线路上内阻 r 的存在产生的损耗导致的,正因如此传输的功率 POUT 及效率η也会随着减小，最大的传输效率η为 93.7%。同理，当恒压状态处于大电流输出时，其输出功率 POUT及效率η也会随之降低，最大的传输效率η为 91.1%。

而且系统处于低负载下为非恒压状态，这是由于电感、电容的误差使实际 WPT 系统的谐振电路偏离工作频率点所导致的，此时，系统在低负载下其输入阻抗变化较大。改变水平偏移量 l(变化范围为0~10 cm)，测量垂直距离 h 分别 17 cm 和 11 cm 时系统输出功率 POUT及效率η，如图 14 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139WVxvgzuQBIrpWCE3IEIj76COQ9JdVXrhV5GYy6HalmsDA3FSo8jsPg/640?wx_fmt=png&from=appmsg)

4 . 结论

1）本文通过 T 型等效得到的双 LCC 型的数学模型，其传递函数为一个 8 阶系统，具有与负载无关的 3 个恒流、4 个恒压输出频率点，并具有软开关的特性。由于双 LCC 型谐振电路原副两端各多一个自由度，改变补偿电路 Lf1、Lf2 的值可以实现更大功率及效率的无线传输。

2）SiC 器件和 NP0 电容的使用是实现 WPT 系统高频工作的关键条件，其导通电阻 RDS 和等效串联电阻 ESR 小。可有效降低电路内阻 r，保证系统工作在高频时的高稳定性，减小线路损耗和谐振电路体积。

3）双 LCC 工作在恒压或恒流状态最大传输效率分别为 93.1%和 91.1%，具有强抗偏移性能，当垂直距离为 11 cm、横向偏移为 10 cm 时，系统仍能实现 70 W 的功率输出。实验搭建的高频 WPT 样机为高功率密度的小型化供电设备的设计提供了一定的参考，可应用在巡检机器人、水下机器人、电动工具等领域，特别在卫星空间电源中实现各个舱室之间电能的软连接。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)