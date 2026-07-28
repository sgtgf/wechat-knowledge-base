# 杭州电子科技大学：SiC MOSFET 新型负压关断串扰抑制驱动电路


> 原文地址: [https://mp.weixin.qq.com/s/HVDGEcDsb8UyWSPoacAqQA](https://mp.weixin.qq.com/s/HVDGEcDsb8UyWSPoacAqQA)

**文章来源：**中国电机工程学报

**作者：**郑翔，杭丽君，曾庆威，闫东，陈克俭，赖宇帆，曾平良(区域能源互联网技术浙江省工程实验室(杭州电子科技大学)

**摘要：**基于碳化硅(SiC)材料的第三代宽禁带功率器件的出现，推动着电力电子变换器朝着高频化、高功率密度、小型化方向发展。但随着开关速度的提高，电路中寄生参数的影响越来越大，导致桥式变换器存在严重的串扰问题。文中根据 SiC 金属氧化物半导体场效应晶体管的工作特性，在 RCD(电阻电容二极管)电平移位的驱动电路基础上提出一种新型的串扰抑制驱动电路。该电路通过电容和可控低压器件串联，并利用电路自身电压差驱动可控器件，为串扰电流提供一条低阻抗吸收回路，可有效地对串扰问题进行抑制。建立串扰抑制驱动电路的等效电路模型，推导得到该电路结构中电容容值与串扰电压峰值的量化关系，为该电路结构的设计提供理论依据。最后，通过双脉冲实验测试验证所提出电路的有效性及等效模型和理论计算的正确性。实验结果表明，与传统驱动电路相比，提出的串扰抑制驱动电路能够在不同电压与电流工况下，在保证开关速度的前提下，很大程度上抑制串扰尖峰电压。

**关键词：**碳化硅金属–氧化物半导体场效应晶体管；杂散寄生参数；双脉冲测试；驱动电路；串扰

**0 引言**

近年来，第三代宽禁带半导体材料得到了广泛研究和蓬勃发展。其中，基于碳化硅(SiC)材料的功率半导体器件以其导通电阻小、热导率高、开关速度快、耐压高等优点成为高压大电流应用领域替代Si 型器件的最有潜力的新型器件。相比于 Si 材料，基于 SiC 的功率器件导通电阻更低且寄生电容更小，产生的导通损耗和开关损耗更低。随着开关速度的进一步提高，功率变换器的无源器件参数和尺寸进一步减小，可提高功率密度和降低成本。然而，SiC 器件最大允许的栅极正负压峰值较小，当开关速度进一步提高将导致更大的dv/dt 和 di/dt，使得电路和器件中的寄生参数的影响更严重。通常，常用的桥式电路中的功率管处于高速的开关动作时，两管在各自的开关动作时会对对称管的栅极造成较大冲击，形成串扰问题。正向电压过冲若超过另一管的栅极开启电压时，则会导致该管的误开起，引发桥臂直通；负向电压尖峰若超过另一管的最大允许反向栅极电压，则会损坏开关管，影响开关过程和整个电路的稳定性。因此，在 SiC 金 属 – 氧化物半导体场效应晶体管器件的推广应用过程中，研究具有串扰抑制的快速高效驱动电路具有重要意义。

对于 SiC MOSFET 功率器件的串扰抑制问题，国内外学术界和工业界展开了广泛研究，下面对研究现状进行总结。文献提出了在开关过程中的米勒平台时期通过增大驱动电阻，减小栅源极的dv/dt 变化的方法，但该方法在降低开关速度的同时，增大了开关损耗；文献提出了在关断稳态时期通过栅源极并联电容，增大其等效电容，从而抑制栅源两端电压过冲，但同时降低了开关速度，增加了开关损耗；文献在栅源极间并联可控开关与电容串联构成低阻抗吸收回路，通过额外驱动信号控制开关，该种方法提高了控制难度和复杂度；文献提出了一种有源驱动电路，其通过在SiC MOSFET 开关过程的特定阶段内增加驱动电阻阻值和减小栅极电流的方式抑制栅极电压过冲。但监测开关过程具有一定难度，提高了控制的复杂度，且增大了开关损耗；文献提出了RCD(resistor–capacitor–diode)电平移位负压驱动电路，以此来抵消正向串扰，解决了器件由于误导通而导致桥式电路直通的问题，但该方法不但无法抑制负向电压串扰干扰，反而加剧了负向串扰，容易导致开关管损坏，且开关启动到稳态的瞬态过程太慢；文献提出一种 RCD 电平移位负压驱动电路，并且增加米勒钳位电路提供一条低阻抗驱动回路用来吸收串扰电流，但是其驱动回路额外增加了两个可控开关，因此等效串联了两个结电容 Cds，降低了开关速度，此外，该电路利用驱动回路吸收串扰电流，其抑制能力受限。

本文基于 RCD 电平移位负压驱动电路的基础上，提出一种新型串扰抑制驱动电路。该电路由利用电路自身压降导通的 MOSFET 与电容串联构成，并将该电路与器件栅源极两端并联，为高频串扰电流提供一条低阻抗放电支路，对串扰进行抑制。最后，对提出的串扰抑制驱动电路进行可行性和有效性的实验验证。

**1 SiC MOSFET 的开关特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHRULwTujwQib7pfnBBYicXqRe8KwDMqAyMOzJiahErjvww9HPtXIcNziblg/640?wx_fmt=png&from=appmsg)

图 1 为一个带有电感负载的半桥电路，Q1 和Q2 为 MOSFET 开关管。电路各处寄生参数标注如图 1 所示。上管(Q1)的寄生参数包括寄生电感、极间寄生电容，分别为：Lqd\_h、Lqg\_h、Lqs\_h、Cgd\_h、Cgs\_h、Cds\_h；下管(Q2)的寄生参数包括寄生电感、极间寄生电容，分别为：Lqd\_l、Lqg\_l、Lqs\_l、Cgd\_l、Cgs\_l、Cds\_l。虚线框外部电路的寄生参数包括栅极驱动的寄生电感和功率电路中的寄生电感，分别为：Llg\_h、Lld\_h、Lls\_h、Llg\_l、Lld\_l、Lls\_l。Rg\_h 和 Rg\_l分别是上管和下管的栅极驱动电阻；L 为加在下管两端的负载电感；Cdc为母线电容；Vdc为母线电源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHkEZqts3eiciaatzKAcelLr0JlvMdt6DsEL7tIkKCcErehrayFIS9fhWw/640?wx_fmt=png&from=appmsg)

图 2 为该电路的典型开关波形。假设下管 Q2一直保持关断，上管 Q1 进行开通关断，续流时电感电流保持不变。

图 2 开通过程和关断过程均可分为 4 个阶段，下面将对每个过程的工作原理进行简单分析。本文分析过程中的驱动信号均指给 Q1 的信号。

**1.1 开通过程**

1）第 1 阶段(0—t1)。

在 Vgs\_h 达到 Vth 导通阈值电压前，驱动电流给输入电容 Ciss(Cgs\_h Cgd\_h)充电。此时，绝大多数电流给电容 Cgs\_h 充电。该阶段因为 Vgs\_h 还未达到阈值电压 Vth，故 Q1 还处于关断状态，此时漏源极电压 Vds\_h 和漏极电流 Id\_h 保持不变。下管 Q2 体二极管和电感续流，所以 Id\_l为Id 保持不变。

2）第 2 阶段(t1—t2)。

Vgs\_h 上升至大于阈值电压 Vth 并低于米勒平台电压 Vmiller时，驱动电流仍然给输入电容 Ciss 充电。此时 Q1 开始导通，处于 Q1 的线性区。变化的漏极电流作用在功率回路的寄生电感上产生感应电势，导致 Vds\_h 陡降，而后基本维持不变\[27\]。此时 Id\_l正向增加。

3）第 3 阶段(t2—t3)。

Vgs\_h 此时处于米勒平台电压 Vmiller 阶段，栅极电流只给 Cgd\_h 充电，几乎不流经 Cgs\_h。Id\_h 处于饱和状态，Q1 工作在饱和区。此时 Vgs\_h 保持不变，而 Vds\_h 迅速持续下降至通态电压。由于 Q2 较大的dv/dt 变化，下管的栅漏极寄生电容 Cgd\_l 产生感应电流流经栅源极寄生电容 Cgs\_l 和驱动回路的并联回路，使得 Cgs\_l 得到充电，栅极电压提高。同时，漏极电流 Id\_l的下降引起的 di/dt 变化作用在功率回路的寄生电感上导致源极电压下降。

4）第 4 阶段(t3—t4)。

Q1 完全导通。此时栅极电流继续给输入电容Ciss 充电直至饱和，Vgs\_h 逐渐上升至栅极驱动给定高电平。Vds\_h 和 Id\_h 保持不变，开通过程结束。

**1.2 关断过程**

1）第 1 阶段(t5—t6)。

驱动回路对输入电容 Ciss开始放电，Vds\_h 和 Id\_h保持不变，Vgs\_h 逐渐下降至米勒平台电压 Vmiller。

2）第 2 阶段(t6—t7)。

Vgs\_h 此时处于米勒平台电压 Vmiller 阶段，Vds\_h由通态电压逐渐上升至外部直流电压。此时因 Q2较大的 dv/dt 变化，下管的栅漏极寄生电容 Cgd\_l感应出反向的 Igd\_l流经栅源极寄生电容 Cgs\_l和驱动回路的并联回路，下管栅极电压降低。

3）第 3 阶段(t7—t8)。

由于 Vgs\_h 持续降低至阈值电压 Vth，Q1进入线性区，使得漏极电流 Id\_h 线性下降。Vds\_h 因其寄生二极管作用，仍然维持在外部直流电压(因杂散电感作用产生过冲)。上升的下管漏极电流 Id\_l 作用在下管源极功率回路的寄生电感上，提高了下管源极电压。

4）第 4 阶段(t8—t9)。

Vgs\_h 继续下降至关断稳态值，Vds\_h和 Id\_h 保持不变。电感负载 L 通过下管寄生二极管进行续流。

**2 半桥串扰问题分析**

综上开关分析过程可知，当电感有储能的情况下，下管的栅源电压 Vgs\_l 在上管开通过程的 t2—t3阶段会有栅极正向串扰电压，而在上管关断过程的t6—t7 会有栅极负向串扰电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHpareMn661kT5aeL4Hq0goGAssP0ic7bE5xP3FEc516FvUjF1YibB6Sicg/640?wx_fmt=png&from=appmsg)

上管开通过程中当 Vds\_h快速下降时，Vds\_l 则快速上升。此时 Cgd\_l 就会感应出位移电流 Igd\_l 流经栅源极寄生电容 Cgs\_l 和驱动回路的并联回路，对 Cgs\_l进行充电，栅极电压增加，如图 3 所示。此时因为续流电流 Id\_l 的降低，在下管源极杂散电感中产生压降，降低了下管源极电压。从而提高了下管的 Vgs\_l电压。双重作用下，导致下管 Q2 的 Vgs\_l 容易超过Vth 导致误导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHtu1awYGPDUOC4w1p4l3Rz3nUWWuKdew43SaibK4ud7HExodxXYoJvfg/640?wx_fmt=png&from=appmsg)

上管关断过程中 Vds\_h 快速上升时，Vds\_l 会快速下降。下管的 Cgd\_l 流过放电电流，方向如图 4 所示，从而导致栅极电压下降。此外，关断过程中，上管与下管二极管进行换流，下管变化的漏极电流作用在下管源极寄生电感上生成一个负方向的感应电势拉高了器件源极电势，从而导致栅源极电压降低。栅源极的负向电压虽然不会使 MOSFET 误导通，但是容易超过额定反向电压而损坏器件。

**3 改进的串扰抑制驱动电路及等效模型分析**

**3.1 改进的串扰抑制驱动电路**

上文详细分析了半桥电路串扰的产生机理，本节在快速负压关断的电平移位驱动电路的基础上提出一种新型串扰抑制驱动电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHj2fp7IWrvrMmf3jyFLxMue9OtpW6A4gLZxIMqy4UBtLPxRS42E5XZQ/640?wx_fmt=png&from=appmsg)

新型串扰抑制驱动电路如图 5 所示。在原有驱动回路基础，即由两个分压电容 C2和 C1和肖特基二极管 D2、电阻 R1、稳压管 Dz构成的电平移位电路，提出了由低压 N 沟道 MOSFET 开关管 Q3与串扰吸收电容 C3 串联的串扰吸收支路，Rg1 为 Q3驱动下拉电阻，通过电路本身电势差实现开通关断。接下来通过桥式电路具体分析该串扰抑制驱动电路的工作原理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHcDqDzkEgB44U9EicsWib1BAS41z9497Zb0iaIurZUaO6LyyVPheBN3d1g/640?wx_fmt=png&from=appmsg)

如图 6 所示，当上管开通时，下管因为 dv/dt的变化流过位移电流，此时下管处于负压稳定关断的状态，所以 Q3\_l 因为电路的电势差而导通，即下管的串扰吸收回路此时工作。此处不妨设定串扰抑制驱动电路的串扰吸收电容 C3 取纳法级别，该值远大于 Cgs\_l。由于串扰是高频震荡，串扰吸收电容为串扰吸收回路提供了低阻抗回路，Igd\_l 大部分都被串扰吸收回路所吸收，大大减小了给 Cgs\_l 充电的电流，故在上管开通时下管的正向串扰电压可被大大减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHVREp9dhWMNQAnTEqqDeaoKecaK5kUddJK5CsHyMjicpyZvcv11aArNg/640?wx_fmt=png&from=appmsg)

如图 7 所示，当上管关断时，因为下管处于负压稳定关断的状态，此时串扰吸收回路工作，下管此时负向流动的 Igd\_l 在低阻抗的吸收回路抽取更多的电荷，从而使流过 Cgs\_l 的电流大大减小，故此时Cgs\_l反向充电的效应减小，负向串扰电压大大减小。

**3.2 串扰抑制驱动电路建模与特性分析**

因为下管处于负压稳定关断的状态，即电平移位电路优先达到稳态，可将电平移位部分等效成一个电压源，表示为 Ud。同时，将开关瞬间加在下管漏源极两端的电压等效成一个电压源，由于开关速度极快，该电压源可近似成一个阶跃信号，表示为Uds。忽略串扰吸收支路中 Q3 的导通压降，开关瞬态等效电路如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHQMEmGkzwibD1zC8KmCr5JoTfUDAgULnl1VH1bEiabHibdXlFKHS696xRg/640?wx_fmt=png&from=appmsg)

上管开通瞬间，此时 Uds阶跃到母线电压 Udc，产生的正向串扰位移电流 Igd。

仅考虑 Uds，可得到以下状态状态微分方程式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHWARDZYyP36mNyGpaaFic6icBXufbNOMbwzyvZkUxFH78nzphYXXSMWfA/640?wx_fmt=png&from=appmsg)

由式(5)与(7)可以拟合出正向串扰电压峰值 Ugsmax、反向串扰电压峰值 Ugsmax与串扰吸收电容 C3 的关系，如图 9 所示。图中：Vth 表示阈值导通电压；Vgsmin 表示栅源极最小允许电压；Vd表示本文中 Ud的幅值，本文中负压关断是采取 RCD 电平移位结构，Vd 的大小由稳压管 Dz 决定。如采取普通负压源关断 Vd 的大小即可由负压源决定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHqgticPBIeEzaqa0LqmOyykcXLjNib4EK9OoPKicG8IlVsx9BaO2l8RLibg/640?wx_fmt=png&from=appmsg)

基于此，可通过调剂负压关断时的电压幅值 Vd和串扰吸收电容 C3 的大小使得正负向串扰电压于安全范围之内，防止 MOSFET 误导通和超过额定最大负压而损坏。

考虑到系统中的电容均为非线性量以及引入的串扰吸收支路对开关速度的影响，可用该方法初步选取串扰吸收电容 C3 的容值，后续可通过具体电路实验测试，在开关速度可接受范围内选取串扰抑制效果较好的最优值。

**4 双脉冲测试验证和实验结果分析**

**4.1 双脉冲测试验证**

由于SiC MOSFET的结构和工艺特点，其内部带有并联的反向二极管。实际高速开关场合下，负载的电感量都较大，在器件关断后，电感电流会通过体二极管进行续流。在半桥电路中，上管开通时，二极管的换流在杂散电感上的压降就会对下管造成影响。所以在选择测试方法时，如果选择传统的单脉冲测试方法，则不能对负载电感进行储能，不能模拟实际的工况，为测试和验证半桥串扰问题，本文采用双脉冲测试(double pulse test)方法。

取半桥电路的下管为被测管子。在下管并联一个电感，并且使下管保持负压关断状态。首先在桥臂上建立母线电平，随后在上管栅极生成两个长短脉冲，第一个脉冲设置较长导通时间，用于给下管并联电感充电，负载电感电流 ( 即流经上管MOSFET 的电流)呈线性上升，并且跟导通时间成正比。电感电流用来模拟负载，当电流达到设定额定值时，将上管关断，电感通过下管体二极管续流。随后第二个脉冲到来，上管再次开通，通过观察此时的下管栅极电压串扰情况。在脉冲结束后，上管再次关断，观察此时下管栅极电压变化。

**4.2 实验结果分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHZ5gBDM06NUjFur9jqZkvXlUIktv5mA64soSVAYHhEa4ibFkNibkdHjiaA/640?wx_fmt=png&from=appmsg)

本文搭建了双脉冲测试平台进行驱动电路的实验验证，实验样机如图 10 所示。选择 CREE 公司生产的型号为 C3M0065090J 的 SiC MOSFET 为待测器件。由于该 MOSFET 上升时间为 8ns，为了得到较为精准的测量结果，本文实验中使用的示波器选择了 Tektronix 公司带宽为 500MHz 的MDO3054；用 Tektronix 公司带宽为 250MHz 的探头 TPP0250 测量栅源极电压，ROHDE&SCHWAR公司带宽为 400MHz 的探头 RT-ZH11 测量漏源极电压；电流的测量使用了 T&M Research 公司的带宽为 2GHz 的 SSDN-010 同轴分流器。串扰吸收支路使用场效应管 FDN337N 与陶瓷电容串联。最后，使用 DSP28379 作为控制器来产生触发信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHicRXR7po0ndCrC0hFnaY9N0QKoWUoVJliadJd23ticegvNeVZ9uBfhsJQ/640?wx_fmt=png&from=appmsg)

上管导通时下管关注的是正向串扰，上管关断时下管关注的是反向串扰。基于此，以下实验中给出的是上管开通时正向串扰电压峰值和上管关断时的反向串扰电压峰值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHoyMRFTFzBgrgdqCY1m7Uc7uK0Qz4AMf2dIKvzSnicN2sdynV71PKN8w/640?wx_fmt=png&from=appmsg)

图 11 给出了更换串扰吸收电容 C3对正向串扰电压峰值 Ugsmax和反向串扰电压峰值 Ugsmax的影响。Vd 为实验中稳态关断电压值，为4.4V。根据数据手册，图 11 中虚线给出了由式(5)与(7)拟合得到的串扰吸收电容 C3 与正向串扰电压峰值的计算值 U'gsmax和反向串扰电压峰值的计算值 U'gsmax关系曲线。V'd为理想稳态关断电压值，为4.7V。由图 11 可知，当串扰吸收电容增大时，串扰电压峰值并不是随之线性变化的，而总体的趋势还是串扰电压峰值随着串扰吸收电容的增大而减小，证明了文中理论模型的正确性。此处，元器件的非理想特性和电路的寄生参数造成了测试结果的非线性以及稳态关断电压值的差异。![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHpunjn8lANrZgXaNvGyGFJzeXzMasOVTy7RbiaTE49t5evTOcV3dNOoA/640?wx_fmt=png&from=appmsg)  

图12、13分别给出了正向串扰电压峰值Ugsmax和开通时间 ton，反向串扰电压峰值 Ugsmax和关断时间 toff 与不同串扰吸收电容的关系。由图可知，采用较大的串扰吸收电容虽然可以获得良好的栅源电压抑制效果，同时也会牺牲对管的开关速度。由图 12、13 可知，综合开关速度以及对串扰电压峰值的抑制情况，选取约 1nF 的串扰吸收电容，可在保证开关速度的前提下能对串扰电压峰值有较好的抑制效果。此处说明，下文实验测试条件均选取 1nF 串扰吸收电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHo5PyxxiadQM60pezia9Bg8fCUNOpKHvsehRhPiaRzkiaxnZQcEfu51BGPA/640?wx_fmt=png&from=appmsg)

图 14、15 分别为下管处于稳定负压关断时，加入串扰吸收支路前后上管开通或关断时的下管的串扰波形对比(Vdc  600V，Id  20A)。在上管开通时，未加入吸收电路的下管正向串扰电压峰值与稳态关断电压差值V为 4.6V，而加入串扰吸收支路后V减小到 2.6V。在上管关断时，未加入串扰吸收支路的下管反向串扰电压峰值与稳态关断电压差值V为 5.4V，而加入串扰吸收支路后V减小到 3V。对比可发现串扰吸收支路有效地改善了串扰电压的峰值同时也在很大程度上减小了电流震荡。进一步证实了本文所提出的驱动电路的有效性与可行性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHluYhr7MXHebCWicYVBEYw48qWZZn4ILJzJhBDUJ56IibbSMrKmicVBQhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPH3jMdzgUSMk7qTXVYpO2IHIpiaHf7wg3gTkVArSjPich2q4TOOeaEkwcQ/640?wx_fmt=png&from=appmsg)

图 16 为在 Vdc为 600V 时，不同电流工况下的开关速度对比。观察可发现几乎不影响关断速度，对开通速度的影响较小，在 20A 工况下最大延长2ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHyLpUzFicYG4zQf5ZNuJ1PHHOPS822RhNy3P0f6qYILXsQNXNq9ctwOQ/640?wx_fmt=png&from=appmsg)

图 17 为在 Id为 20A 时，不同电压工况下的开关速度对比。观察也可发现几乎不影响关断速度，对开通速度的影响较小，在 400V 工况下最大延长2ns。在目前碳化硅 MOSFET 器件的开关频率工作条件下，此延时的影响可以忽略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHePuGfIAdJ7cmKszuUib6Zo7gmYYdUXUicnPZwEpn2qX8wzHcCxLBHctg/640?wx_fmt=png&from=appmsg)

综上不同电流工况以及不同电压工况的实验可以得到本文提出的串扰吸收支路对开关速度影响较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHib7OXf8UWUYOndVgsxWo57SucbmkXibict9RzC5ib3A09NHGSm30cfgichg/640?wx_fmt=png&from=appmsg)

图 18 给出了在 Vdc为 600V 时，不同电流工况下有无串扰吸收支路的串扰电压峰值对比。观察可发现，加入该串扰吸收支路在负压抑制正向串扰的基础上进一步减小了正向串扰电压峰值，在 10A 工况下正向串扰电压峰值最大减小 1.6V。同时很大程度上减小了反向串扰电压峰值，在 20A 工况下反向串扰电压峰值最大减小 2.6V。

图 19 给出了在 Id 为 20A 时，不同电压工况下有无串扰吸收支路的串扰电压峰值对比。观察可发现，加入该串扰吸收支路在负压抑制正向串扰的基础上进一步减小了正向串扰电压峰值，在 300V 工况下正向串扰电压峰值最大减小 3.4V。同时很大程度上减小了反向串扰电压峰值，在 600V 工况下反向串扰电压峰值最大减小 2.6V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnTu4rRXfgLWA6XNxduQEPHYiaVE1Mp3X1FTrKXOgW2tjCyibuviaUJwvUQnJnTA6GymQIphvEmTpyyg/640?wx_fmt=png&from=appmsg)

综上不同电流工况以及不同电压工况的实验可以得到本文提出的串扰吸收支路在工况上具有普适性，进一步证明了该串扰吸收支路抑制串扰的有效性。

**5 结论**

本文根据 SiC MOSFET 的开关特性以及桥式电路的寄生参数进行分析，对半桥驱动电路的串扰问题的产生过程进行了详细分析。针对 SiC 功率MOSFET 受驱动寄生参数影响大的问题，提出了一种适合 SiC MOSFET 器件的驱动电路。该电路由低压可控器件和电容串联构成吸收支路，并联在器件栅源两端，为高频串扰电流提供串扰低阻抗吸收回路。论文建立了该电路的等效模型，并通过推导得到了电容容值与串扰电压峰值的量化关系。

论文通过实验验证，得到了以下结论：

1）本文提出的驱动电路对于串扰抑制是有效的，且所提出的电路模型是正确的。采用提出的驱动电路，仅需改变电容容值即可有效抑制在不同电压电流工况下的串扰尖峰电压。

2）本文提出的方案几乎不影响关断时间，并且对开通速度影响较小。在保证开关速度的前提下能够有效的抑制串扰电压以及电流震荡。

3）所设计的驱动电路在不同电压和不同电流工况下都能够在保证开关速度的前提下有效地抑制串扰电压，具有普适性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskXJicOSziau2VPdSibn5Povt1f8KuRrjdP1t0jP0OiaHibI2iakYxmMHiczyvlgnpRYewLlbF9KRQQFVL6Q/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)