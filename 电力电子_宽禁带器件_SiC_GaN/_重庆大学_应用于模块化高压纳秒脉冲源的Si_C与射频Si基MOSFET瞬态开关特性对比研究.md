# ​重庆大学：应用于模块化高压纳秒脉冲源的Si C与射频Si基MOSFET瞬态开关特性对比研究


> 原文地址: [https://mp.weixin.qq.com/s/u3GkXa6EfSwiFWCz3so56A](https://mp.weixin.qq.com/s/u3GkXa6EfSwiFWCz3so56A)

**文章来源：**重庆大学（马剑豪，何映江，余亮，董守龙，姚陈果 ）

**摘要：**碳化硅(SiC)金属氧化物半导体场效应晶体管比Si MOSFET具有更低的导通电阻、更高的通流能力和热稳定性。但射频硅(RF-Si) 基MOSFET凭借其优异的开关动态特性，在高压纳秒脉冲发生器中的使用比SiC MOSFET更为普及。为了拓展SiC  MOSFET的应用范围，通过RF-Si和SiC MOSFET在多脉冲参数条件下瞬态开关特性(动态特性、瞬态开关损耗、时间抖动)的对比研究，该文揭示2种半导体器件在瞬态高压和强流下的开关特性差异。实验结果表明：相对于RF-Si 基MOSFET，SiC MOSFET的优势体现在开通、关断时间。但由于寄生参数的影响，SiC MOSFET呈现出更大的振荡和过冲，而在瞬态开关损耗、时间抖动方面没有明显的优势。因此，通过改进SiC MOSFET的封装从而减小寄生参数， 将推动SiC MOSFET在高压纳秒脉冲发生器中的应用。  

**关键词：**Si C；MOSFET；射频；纳秒短脉冲；脉冲功率源；高电压 

**0  引言** 

热核聚变研究和国防科研需求是推动脉冲功率技术发展的主要动力。近年来，随着脉冲功率技术应用领域的不断拓展，对脉冲功率源的要求有了一些新的变化。特别是在一些民用领域，例如：粒子加速器、材料表面处理 、静电除尘 、脉冲电场消融肿瘤、食品低温灭菌消毒、气体放电与大气压低温等离子科学研究装置等其他领域，装置不再单纯追求单次高功率输出和高脉冲能量，而是在适当的功率等级下更加突出输出参数的灵活性、关键部件的长寿命和高可靠性、系统的轻量化和小型化要求。然而，由于电极烧蚀、稳定性差以及难以控制的问题，以气体火花开关为代表的传统脉冲功率源难以满足以上要求。碳化硅(SiC)金属氧化物半导体场效应晶体管(MOSFET)是一种典型的宽禁带半导体器件， 其材料具有击穿场强高、载流子饱和漂移速度快、 热稳定性好及热导率高等优势。经过几十年的快速发展，碳化硅器件在电力系统、开关电源、电动汽车等领域都发挥了重要的作用。

近年来，研究人员对SiC MOSET开关过程进行了深入分析，并建立了大量的电路模型及开关行 为模型，为SiC MOSET器件的应用提供了有益的设计指导。对比了Si IGBT和Si C  MOSET的动态特性，并从逆变器与电动汽车驱动器效率提升的角度验证了SiC MOSET的优异特性。对比了SiC MOSET、Si MOSFET和IGBT 在双主动桥中的开关波形、开关时间、开关损耗、 du/dt、di/dt等特性，并基于以上开关分别开展了样机实验，实验结果表明SiC MOSET在高压、高频 功率变化领域的应用具有独特的优势。 

在模块化高功率纳秒源领域，例如固态Marx 发生器、直线型变压器驱动源，由于美国IXYS  Colorado公司生产的DE系列RF-Si基MOSFET优 异的开通、关断时间以及通流能力，一直是模块化高功率纳秒源的主开关的首选。仅有部分微秒、亚微秒高功率脉冲源使用SiC MOSFET。就常见的应用环境而言，在基本参数接近时，由于 SiC材料的优异性能，SiC MOSFET的大部分性能总是优于Si MOSFET。但不同于MOSFET在高频变流器以及开关电源等常见应用环境，模块化高功率纳秒脉冲源中的MOSFET常工作在瞬态极限电压和大电流状态，以满足脉冲源小型化、轻量化的发展趋势及要求。而此时MOSFET的动作特性、瞬态开关损耗、时间抖动以及由于脉冲参数改变而引起的开关特性变化，直接关系到脉冲源的输出性能。

因此，研究和对比RF-Si基MOSFET和 SiC MOSFET在以上条件下的瞬态特性，能够促进 SiC MOSFET应用于高功率纳秒脉冲源以及拓展 SiC MOSFET的应用领域。同时，单级脉冲功率源 模块在最大极限耐受容量和极限条件下的开关动 作规律是极其重要的，也有助于拓展高重复频率脉冲功率技术的应用领域。然而，这部分研究在国内 外鲜见报导。 

为了研究RF-Si基MOSFET与SiC MOSFET在纳秒脉冲发生器中的瞬态开关特性。本文选择较常用且参数性能相近的2种MOSFET(RF-Si基 MOSFET与SiC MOSFET)，对其开通、关断过程及瞬态损耗开展理论建模。设计驱动电路，研究二者在瞬态高压、强流条件下的行为规律，对其瞬态开关特性进行对比分析。之后，研究充电电压、脉冲宽度、流经脉冲电流等不同脉冲参数对2种MOSFET瞬态开关特性的影响规律。最后，总结 SiC MOSFET和RF-Si基MOSFET在高压纳秒脉冲 源应用中的动态特性、瞬态开关损耗、时间抖动等 参数的差异及其形成原因，为Si C MOSFET应用于 高功率纳秒脉冲源提供参考。 

**1  高压瞬态强流条件下开关行为模型** 

高压纳秒脉冲发生器的输出参数受开关耐受能力限制，通过功率叠加、开关串并联方式可实现较高的电压输出，但级数叠加会增加系统复杂程度和不稳定性。为了尽可能利用单级开关能力，往往 将器件应用于极限参数或接近极限参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TpFic0pCG2lUL5kbQ8xyOvHjLr7qrfTS4271ZCMDLiaL9E0YqLVOianPuw/640?wx_fmt=png&from=appmsg)

以典型单级电容储能结构的脉冲形成电路作为测试电路，并以其为例进行分析(参见图1)。图1 中：Udc为直流供电电压；Rcharge为大阻值充电电阻；LLine为导线寄生电感；Ld、Ls为漏极和源极线路寄生电感；初级储能部分为脉冲形成单元提供能量， Csave为储能电容，脉冲负载为低电感厚膜电阻Rload， 但由于纳秒脉冲丰富的高频分量，在纳秒脉冲作用下仍将表现出较大的寄生电感Lload。驱动部分用于给被测器件(device under test，DUT)提供驱动能量， Ug.on、Ug.off分别为驱动正压和驱动负压；Rg.ext为栅 极驱动电阻；Doff为关断二极管；Cgd、Cgs、Cds分 别为DUT的栅–漏、栅–源、漏–源电容；Lg.int、Ld.int、 Ls.int分别表示DUT内部由封装引起的栅极、源极、漏极电感；Rg .int为内部栅极电阻。由文献可知，RF-Si基MOSFET  DE475-102N21A常作为纳秒脉冲源的主开关。本文选取的漏源极峰值电压DE475-102N21A相同， 选择1000V且动态参数相近的CREE C3系列SiC MOSFET C3M0065100J为对比对象。具体参数 如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TB5qw5CF4fkoACibKib2lk7yK9ibCnKRwIqqvnH6Olv04fLfHMOmOcALvw/640?wx_fmt=png&from=appmsg)

**1.1  开通过程** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0T5knDbbzwLp7csMgGmMA5AQRuB7GRM9pmd7Muia55EsfwojWazMhEAsg/640?wx_fmt=png&from=appmsg)

1）阶段1(t0—t 1)。栅极电源Ugs给DUT栅级充电，如图2所示， Ugs未超过门限电压Uth时，MOSFET始终处于截止状态，可得Ugs的表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TfTvoibTkEVxaaxWRsr3TSB7kMSvHy7z2h1SzbEh48dsicFlzVKmD8WrA/640?wx_fmt=png&from=appmsg)

考虑寄生参数作用，此过程会发生振荡，其振 荡角频率由Lg .int、Ls.int、Ls、C gs、Cgd和Rg.ext、Rg.int决定，如式(4)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TUvU8o9Q46KCiccnKNtfGSTG5yFB5z86rycIicjJZQKxSbVOY5f7TaVjQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0Tp2OE7tAdicVxTNiapbtUzwzRQ4BCJ1G0hI9VR3forob8sUFp3xMUHticw/640?wx_fmt=png&from=appmsg)

由于本文所提2种MOSFET在器件封装上不 同于传统封装，寄生电感值比传统封装减小很多， 因此主要由电流变化率起主导作用。 

最后，在t2时刻，Ugs达到米勒平台电压。由于存在电压与电流共存状态，此时将产生能量损耗，结合式(5)、(6)，能量损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0Tl90gGRZCIAOrkQWzN5v719SicHxTrMQEicfDroDQyV4wTkW55yIhXg4Q/640?wx_fmt=png&from=appmsg)

可见，SiC MOSFET由于其极低的导通电阻而具有 更低的阻尼，因此在振荡幅值上SiC MOSFET显著高于RF-Si基MOSFET。 

4）阶段4(t3—t 4)。

在t3时刻，Uds下降到MOSFET不再饱和的水平，即现在必须加大Ugs以维持电流i Load。在t4时刻，栅源电压Ugs达到开通电压，MOSFET完成开通过程。

**1.2  关断过程** 

1）阶段1(t5—t 6)。

与开通过程类似，但电容充电变换为电容放电。此时，栅源电容放电，UDoff为关断二极管正向导通压降，外部驱动电阻Rg.ext不影响该过程，电压 Ugs随时间变化为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TNTaFLVEkjiaQM6uex87lnIe8JBnBRVL35GoaJyuRTZrcFxJB7hmIJPg/640?wx_fmt=png&from=appmsg)

依赖性，关断时刻不同于开通时刻，其两端电压为很小的导通压降Uds.on，导致C gd的值很大。此过程表现为Ugs的缓慢下降。而且，阶段1为关断延时过程。 

2）阶段2(t6—t 7)。 

t6时刻，MOSFET进入线性状态，即ids(sat）=iLoad。如图3所示，Uds未达到UDC前，漏极电流将一直维持在iLoad，在此过程中，Ugs将保持恒定值Ugs.i Load。此时，漏–源两端电压Uds的增长速度为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TMaXhywnHdR9Srt74y3sQ86CWUMK4tLg8qxGJvHTnlA5lmnamTjdKcg/640?wx_fmt=png&from=appmsg)

 式中Cgd随着电压的增长而下降。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TibH0NP2waibk9K0PTjrrib83AzHpqOpM95PnmwbB2Qiah7E9VmMe4dibHiaA/640?wx_fmt=png&from=appmsg)

阶段3的关断损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TCFOQpJucMkGeqPYhiak9QEwBhxpzCO9QElGJrJ0CLHPOmvggBVJxE0A/640?wx_fmt=png&from=appmsg)

在关断时刻存在过电压，过电压峰值出现在diD/dt 最高时刻，具体为 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TRbfpCHNhVXM5A129M4zUzSGCicBCEZf32ibSJu72UwWIppvZMZGyVn5A/640?wx_fmt=png&from=appmsg)

同时，由于脉冲形成电路的特殊性，系统寄生电感直接存在于放电回路，导通过程电感充电，开关断开后LC振荡以及开关寄生电容间耦合作用， 会引起Ug s、Uds、iD在关断时刻剧烈振荡，振荡频率如式(22)所示，并且将表现出较大的负向关断损 耗。此时关断损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TVgW71tibvtcr0rHrqlicrRIcnub3o4cFcv7l0Q47w9fHicL56aYe3mjGQ/640?wx_fmt=png&from=appmsg)

4）阶段4(t8—t 9)。

  t8时刻，Ugs电压下降到门限电压Uth以下，漏极电流下降为0。

  **2  高压瞬态强流下开关特性对比** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TCBptHzghYyBSGzfEebxeXzJibleIic7IicVzG1J6wwwRRu590fsoPo1Og/640?wx_fmt=png&from=appmsg)

实验电路如图4所示，被测器件为IXYS公司的RF-Si基MOSFET DE475-102N21A和CREE公司的SiC MOSFET C3M0065100J，电流探头为Pearson公司的6600，带宽120MHz。低压部分测 量探头为Lecroy PP026 400V，带宽500MHz。高压部分测量探头为Lecroy PPE6kV，带宽400MHz。控制信号发生装置为美国Stanford Research  Systems超低抖动数字延时触发器DG645。波形记录示波器为Lecroy WavePro 760Zi-A，带宽6GHz。 

实验参数及驱动参数如表2所示。由于高压脉冲幅值达到1kV，实验过程专门设计信号光纤隔离 电路和隔离电源转换电路以隔离高压脉冲，从而避免对实验设备的干扰和损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TfKhzOspelOIb7yLTUHkNoktqTKl9MlcvibibLtJz4hNUoJmdl7WRw9kg/640?wx_fmt=png&from=appmsg)

由表1可知，2种MOSFET的直流通流能力分别为24A和35A，由于器件手册给出脉冲电流极限值受到漏–源电压以及脉冲宽度限制，为控制扰动变量，本文以200ns脉冲宽度为实验脉宽。同时，使用漏–源电压1000V、负载电流100A、脉冲宽度200ns，重复频率1Hz的瞬态高压强场强流条件以对比2种MOSFET的开关特性。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TljCzHusBh1iamClAYD1lrnRcdMQB9vDJlZcSKGRyDJwoWekVoObFePQ/640?wx_fmt=png&from=appmsg)

图5给出2种开关在未施加漏源电压时的Ugs电压波形。由表1可知，RF-Si基MOSFET的Ciss值远大于SiC MOSFET，因此RF-Si基MOSFET的米勒平台持续时间比SiC MOSFET更久。同时， 由于SiC MOSFET具有更小的输入电容和米勒电容，因此SiC MOSFET具有更快的Ugs上升和下降 时间。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0Tf2rtCMjyJ5a2JpYJjOkAMuRoGSDLWG6LvIiaX34Ab2YQw7KBtCL0Vhg/640?wx_fmt=png&from=appmsg)

随着直流充电电压的上升，图6给出2种 MOSFET在瞬态高压强流条件下的动作波形，可见 流经漏–源两极的电流iD上升率基本保持一致，但 SiC MOSFET略快于RF-Si基MOSFET。而由于SiC器件导通电阻远小于RF-Si器件，且负载电阻阻值仅为10欧，导致两者导通状态下电流存在差异。 

由表1可知，控制负载、外部电路条件相同时， SiC MOSFET的寄生电感值较RF-Si基MOSFET大 4、5倍。图6表明在瞬态极限条件下，SiC MOSFET 栅极电压在开通和关断时刻振荡更加剧烈；此外，由振荡衰减过程可以发现，SiC MOSFET阻尼系数 也小于RF-Si基MOSFET的相应值。但是不同于手册提及参数，SiC MOSFET在瞬态极限条件下的开通时间tr为4.555ns，而RF-Si基MOSFET的tr为 12.186ns，同样前者tf为3.793ns，而后者tf为 6.308ns。可见，在瞬态极限条件下SiC MOSFET 具有优于表1的开通和关断时间，且SiC MOSFET 也具有更快的电流变化率，这对于脉冲应用具有极大优势。但在开通和关断瞬间，SiC MOSFET的瞬态开关损耗峰值均高于RF-Si基MOSFET，这与SiC  MOSFET由于寄生电感而引起的振荡是密不可分的。同时，这表明纳秒脉冲发生器应用中瞬态开关特性有别于常规应用，参数性能也与器件手册存在很大区别，因此对其瞬态条件下特性研究尤为重要。

**3  脉冲参数对开关动态特性影响的实验研究** 

MOSFET是当前纳秒脉冲发生器的主流开关， 本节使用表2中的器件参数，控制除DUT外的电路连接以及驱动参数相同。通过改变脉冲宽度、Uds两端电压、流经电流iD，探究RF-Si与SiC MOSFET 的瞬态开关特性差异以及其对脉冲参数变化的响 应规律，并从器件寄生参数等固有特性，分析差异形成原因，进而为SiC MOSFET在纳秒脉冲发生器 的应用提供参考。  

3.1  充电电压 

控制触发信号维持200ns脉宽，通过改变负载阻值实现100~1000V漏–源电压下恒定脉冲电流 10A，并控制其余参数相同。图7、8展示不同充电 电压对2种瞬态开关特性的影响。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TbfRX8rvQ56hjxWJ09qz0bCspWqSmArtLOhbBjyo2cESlNKFT51GHTQ/640?wx_fmt=png&from=appmsg)

如图7所示，开关开通过程的Uds变化与2节分析结果一致，SiC开通时间优于RF-Si基 MOSFET，并且SiC MOSFET导通时间随电压升高呈下降趋势，而RF-Si基MOSFET则呈现上升趋势。但由于SiC MOSFET存在较大的寄生电感，使其在导通后引起的振荡幅值也增大。从电流iD的变化情况可知，在100V充电电压时，RF-Si基MOSFET 的电流上升时间明显比Si C MOSFET短。而随着充电电压上升，达到1000V充电电压时，SiC MOSFET的电流上升时间显著短于RF-Si基MOSFET。Ugs在较高充电电压下相较于RF-Si基MOSFET存在更大的振荡幅值，由于Ugs尖峰大，使得可靠驱动存 在隐患。此外，Uds在较高充电电压下相较于RF-Si 基MOSFET存在更大的过冲。通过将漏–源极电压、电流时域相乘得到的瞬时功率变化发现，由于开关开通过程Uds存在负向振荡电压过冲，此时会引起不同于开通损耗的负向瞬时功率。也正是Uds的振 荡过冲导致SiC器件的瞬态开通损耗在瞬态高压下大于RF-Si基MOSFET。这也要求Si C器件在纳秒脉冲发生器中应用时，需要进一步设计驱动电路抑制过冲。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0T3opFMicOeFgvE60icwN8e6eSf7bX6gkTLAzGVB0PfINVvKLHvSr9x5QQ/640?wx_fmt=png&from=appmsg)

从图8所示，Si C MOSFET随着充电电压上升， Ugs在开关关断后的振荡和过冲异常严重，部分振荡过冲已经超过了开关的门限电压，这对于纳秒脉冲发生器的动作会产生极为严重的后果，而RF-Si基MOSFET由于其较小的寄生电感以及较大的 Ciss，虽然在关断速度方面逊色于SiC MOSFET，但由于振荡和过冲引起的系统弹地较小，关断失败的几率也极大降低。此外，关断过程最高振荡电压如 式(20)，此时振荡频率由回路寄生电感以及续流回路寄生电容决定，振荡幅值由电流变化率决定，由 于SiC MOSFET关断比RF-Si基MOSFET快，且寄生电感大，导致了更高的电流变化率，也增加了振荡和过冲。 

对于关断损耗，虽然SiC MOSFET震荡和过冲引起额外的损耗，但由于其关断时间快，尤其在较高充电电压条件下，关断损耗明显小于RF-Si基 MOSFET。但充电电压较低时，以振荡引起的关断损耗为主，此时其关断损耗比RF-Si基MOSFET大。

  3.2  流经漏–源电流 

纳秒脉冲发生器由于应用场所不同，其脉冲电流也跟随负载条件改变而变化。因此本文控制充电电压恒定1000V，脉冲宽度200ns，探究10~90A 电流条件下的开关动态特性变化规律。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TnfDJZ3bshLJeQ6Hicbcqw5lOsufpbV1FycwVtFG6ric3YU6pZT8ibahRA/640?wx_fmt=png&from=appmsg)

由图9可知，2种开关在较低电流时，均保持良好的开通性能。随着漏–源电流的增加，RF-Si基 MOSFET表现出开通时间变缓、导通压降明显上升的特点。然而SiC MOSFET随着电流增大依然在开通时间和导通压降上显示出优势。但由于其寄生电感始终大于RF-Si基MOSFET，SiC MOSFET引 起的关断振荡依旧较为明显。 

开通损耗方面，漏–源电流较小(额定通流能力内)时，由于RF-Si基MOSFET封装上的特殊设计使得其开通损耗略低于SiC MOSFET。漏–源电流增大后，由于RF-Si基MOSFET在导通压降以及开通特性等方面变差，其开通损耗剧烈上升，而SiC  MOSFET在其90A极限值附近依旧保持良好的开通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TLjuIh7Hxz04rbliapqN7QaJoVzWhgDiaGDQtShpdplM0x9qggRBW0eqg/640?wx_fmt=png&from=appmsg)

图10所示的关断过程表明，漏–源电流增加改善了开关关断时间，此时SiC MOSFET的低导通电阻优势也得到体现。但较大的电流变化率引起了更加剧烈的关断振荡，这也导致脉冲输出波形存在一定的拖尾，影响脉冲输出。此外，由于较大的电压、 电流变化率，Ugs也呈现剧烈的振荡；且由于脉冲形成电路与负载电阻同一回路，导致其振荡阻尼减小，这也加剧了SiC MOSFET关断失败的风险。而且SiC MOSFET在瞬态强流条件下，其关断损耗峰值明显大于RF-Si基MOSFET，因此RF-Si基 MOSFET虽然在关断时间上有所上升，但它的关断失败风险以及关断损耗一直小于SiC MOSFET。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0Tc7hYicWyZR0UmMHBRkicoNB8fGWKqlziaWyAQwrSbKzTR2ZF2KqlJIMpA/640?wx_fmt=png&from=appmsg)

综上所述，图11对2种MOSFET的完整动作行为进行了对比。由于RF-Si基MOSFET在大电流时刻，导通压降增大，进而引起开通损耗升高。因此，在较低负载电阻条件下，会引起脉冲形成电路内阻增大，不利于脉冲输出，同时也导致脉冲发生器效率降低。此外，在漏–源电流大于额定值数倍时，2种MOSFET均发生不同程度的导通压降变化， 进而使电压、电流波形在大电流时刻发生突变。另外，大电流也加剧开关关断过程振荡，使得开关关断过程的第3阶段延迟。由式(21)可知，尾部抬起引起的关断时间延长，将直接引起关断损耗增加。

3.3  脉冲宽度 

相较于传统纳秒脉冲发生器，基于MOSFET的纳秒脉冲源在多模式脉宽调制以及宽范围脉宽输出方面极具优势。因此，研究脉冲宽度变化引起的开关特性变化是研究2种开关在纳秒脉冲发生器应用中不可或缺的成分。 

同时，由2节可知，漏–源电流变化对脉冲电路中开关器件的影响尤为剧烈。为了避免电流过大而导致误差增大。结合上文实验数据结论，恒定控制漏–源电流为20A，并且控制充电电压为1000V， 重复频率1Hz，通过调整信号发生器实现70~1000ns 的脉冲宽度变化。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TfAu2h69PD2UksUQRGic4zgMblOCf8hrZhX3WIZNcl9MHnsAdUEy43ibw/640?wx_fmt=png&from=appmsg)

图12为不同脉冲宽度条件下漏–源电压Uds、 栅–源电压Ugs，以及开通与关断损耗的波形。随着脉冲宽度的增加，RF-Si基MOSFET与SiC  MOSFET均呈现良好的一致性。可见，脉冲宽度变化对开关开通过程与关断过程并没有明显影响。同时，由栅–压Ugs变化波形可以发现，在较低电流时SiC MOSFET关断时间以及寄生参数振荡引起的关断过冲均小于RF-Si基MOSFET。上述现象表明， 开关关断时刻的振荡幅值主要是电压电流变化率 起主要作用。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyRaeD6IzU8icHA9w1Ogd0TkydxNdrgcF2npwdGFOU6Yn5Jm2l5O3ytxtNmUAjYuqUcVONcMkEq5w/640?wx_fmt=png&from=appmsg)

通过以上分析可知，漏–源电流较低时，2种开关在动态性能上均表现出较好的一致性，基本不受脉冲宽度影响。图13对比了在脉冲上升阶段，50% 脉冲幅值(500V)时刻，不同脉宽条件下的Uds波形。

通过对比几种波形在500V对应时刻的最大时间差 异，来对比2种MOSFET在导通阶段的时间抖动。结果表明：Uds达到500V时刻，RF-Si基MOSFET的最大时间抖动仅为140ps，但SiC MOSFET的最大时间抖动达到380ps。因此，虽然SiC MOSFET 具有较优异的开通特性，但其开通时间抖动相较于 RF-Si基MOSFET略显不足。通过式(6)可知，在开关导通阶段，由于电流变化以及寄生电感引起的SiC  MOSFET振荡会直接影响输出波形的时间抖动。

  **4  结论** 

脉冲功率技术在民用领域的应用极大促进了全固态纳秒脉冲源的发展。未来，纳秒脉冲源将向更短脉冲、更高重频、更高电压、更大电流及更加 紧凑等方向发展。而SiC器件以其良好的热稳定性和更高的功率密度等特性优势在未来的纳秒脉冲发生器中有着巨大的应用潜力。本文基于当前 RF-Si基MOSFET大量应用于纳秒脉冲源的研制背 景，选择与其基本参数相近的SiC MOSFET进行瞬 态特性对比研究。通过搭建典型单级纳秒脉冲形成电路，从瞬态极限电压、极限电流等条件出发，对比不同脉冲参数条件下2种开关的瞬态开关特性 (动态特性、瞬态开关损耗、时间抖动)。揭示2种开关的动作差异以及振荡和过冲形成规律，并结合 实验结果就其差异形成原因进行分析讨论。最终得 到以下结论： 

1）纳秒脉冲形成电路中MOSFET直接作用于放电回路，过高的di/dt和du/dt使得寄生参数Ls.int、 Ld.int、Lg.int对Ugs、Uds的影响更加明显，并且它们引起的振荡和过冲将直接影响纳秒脉冲源的输出特性。结果表明：SiC MOSFET的Ls.int、L d.int、Lg.int相较于RF-Si基MOSFET大4~5倍。SiC MOSFET 表现出更大的振荡和过冲，因此在纳秒脉冲源应用中，如何抑制SiC MOSFET的振荡和过冲是首先要面临的问题； 

2）2种MOSFET在极限电压1000V时，其耐受脉冲电流远大于手册推荐值。瞬态高压条件下， SiC MOSFET表现出更快的电压开通时间和关断时间，但由于其寄生电感的劣势，其电流建立和释放时间仅在较低电流条件下才较RF-Si基MOSFET 更具优势； 

3）由于SiC MOSFET的Ciss、Crss远小于RF-Si 基MOSFET。随着充电电压增加，Si C MOSFET在电压开通和关断时间上优于RF-Si基MOSFET，而SiC MOSFET更为剧烈的振荡和过冲，其在较高电压下的开通损耗反而略大于RF-Si基MOSFET。但由于SiC MOSFET在电流截至时间上的优势，瞬态高压下其关断损耗明显低于RF-Si基MOSFET； 

4）相较于充电电压，脉冲电流变化引起的差异更加剧烈。不同于SiC MOSFET，RF-Si基 MOSFET在大电流条件下暴露出导通压降剧烈上升的不足。实验结果表明，在表1提及脉冲电流峰值90A时，SiC MOSFET依旧表现出远优于RF-Si 基MOSFET的开关特性。与较低电流条件下充电电压变化规律不同，SiC MOSFET由于自身较大的寄生电感，栅–源电压在开关关断后依旧剧烈振荡。因此，SiC MOSFET的关断损耗峰值逐渐超过RF-Si 基MOSFET。同时，这在很大程度上增加了开关关断失败的风险，也间接导致了SiC MOSFET的时间抖动大于RF-Si基MOSFET。 

综上所述，在纳秒高压大电流的应用中，一方面，SiC MOSFET的动态特性特别是开通、关断速度上优于RF-Si基MOSFET；另一方面，SiCMOSFET的输出波形在开通和关断时呈现较大振荡和过冲，并且在瞬态开关损耗和时间抖动上没有展现出较RF-Si基MOSFET的明显优势，而较大的封装寄生参数是造成这种现象的主要原因。因此， 未来研究低寄生参数的SiC MOSFET器件封装技术不仅具有重要的学术意义，而且对拓展SiC MOSFET在纳秒级脉冲功率电源中的应用有实际工程价值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskONNmTjDuqakLl4GstQWEwdGz1dfVsw8IXOzes4FD17ldDqvISL8mC0Dt58HGj4YSDeqmtga98Ag/640?wx_fmt=png&from=appmsg)

 声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskONNmTjDuqakLl4GstQWEwQz9ib7d24LhC4WMvtbsFKOMoDicBZiaib6Wkewxcm9xw7p0q0WLgZTgRYg/640?wx_fmt=png&from=appmsg)