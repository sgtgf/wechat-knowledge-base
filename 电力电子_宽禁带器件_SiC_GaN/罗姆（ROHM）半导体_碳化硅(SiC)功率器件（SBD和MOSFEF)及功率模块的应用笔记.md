# 罗姆（ROHM）半导体：碳化硅(SiC)功率器件（SBD和MOSFEF)及功率模块的应用笔记


> 原文地址: [https://mp.weixin.qq.com/s/Lqqdw7J7L7ZGGxSuIo6L-g](https://mp.weixin.qq.com/s/Lqqdw7J7L7ZGGxSuIo6L-g)

**文章来源:**罗姆半导体（ROHM）

**摘要：SiC 功率器件（碳化硅二极管-碳化硅MOS管)和碳化硅功率的应用笔记，分10个部分介绍，包含碳化硅半导体的材料.器件和模块的特征，驱动电路，评估板及可靠性，方案的应用电路等，适合新设计人员参考。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe70YgMeEia5GdNVnfc65RSUicviatFakuhObo7rDMwW8NPsFNnDfjDhZAg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pen5t4KcqBU5X7fZicTP5WtzB9D4XawAibAqngy4iaMq7cVNjMZem7QTebw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peufK7iahSib47iboV98dLoZWmCdibTRsNPLh688dRBXTVAtSETbo3r3C1hA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pePUR6OBIhDr5ybUz5daLib9cBg7hQYb4dLiau4OUx3VaMKxtukCAj2Nrw/640?wx_fmt=png&from=appmsg)

**1\. SiC 半导体**

**1.1   SiC 材料的物性和特征**

SiC（碳化硅）是一种由硅（Si）和碳（C）构成的化合物半导体材料。表 1-1 列出了各种半导体材料的电气特征，SiC 的优点不仅在于其绝缘击穿场强（Breakdown Field）是 Si 的 10 倍，带隙（Energy Gap）是 Si 的 3 倍，而且在器件制造时可以在较宽的范围内实现必要的 P 型、N 型控制，所以被认为是一种超越 Si 极限的用于制造功率器件的材料。SiC 存在各种多型体（结晶多系），它们的物性值也各不相同。最适合于制造功率器件的是 4H-SiC，现在 4inch～6inch 的单晶晶圆已经实现了量产。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peGTwL8t5eVlFX4FClIibZKoV2BVZ8q48G1hlNfvk3Unlxvv9jtdOCgcQ/640?wx_fmt=png&from=appmsg)

**1.2  SiC 功率器件的特征**

SiC 的绝缘击穿场强是 Si 的 10 倍，因此与 Si 器件相比，能够以更高的掺杂浓度并且膜厚更薄的漂移层制作出 600V～数千 V 的高压功率器件。高压功率器件的电阻成分主要由该漂移层的电阻所组成，因此使用 SiC 材料可以实现单位面积导通电阻非常低的高压器件。理论上当耐压相等时，SiC 在单位面积下的漂移层电阻可以降低到 Si 的 1/300。对于 Si 材料来说，为了改善由于器件高压化所带来的导通电阻增大的问题，主要使用例如 IGBT（Insulated Gate Bipolar Transistor：绝缘栅极双极型晶体管）等少数载流子器件（双极型器件），但是却存在开关损耗较大的问题，其结果是所产生的发热问题限制了 IGBT 的高频驱动应用。SiC 材料能够以具有快速器件结构特征的多数载流子器件（肖特基势垒二极管和 MOSFET）实现高压化，因此可以同时实现“高耐压”、“低导通电阻”、“高频”这三个特性。

另外，SiC 的带隙较宽、大约是 Si 的 3 倍，因此能够实现在高温条件下也可以稳定工作的功率器件（目前由于受到封装的耐热可靠性的制约，只保证到 150℃～175℃，但是随着封装技术的发展，将来也可能达到 200℃以上的保证温度）。

2\. SiC SBD 的特征

**2.1  器件结构和特征**

SiC 能够以具有快速器件结构特征的肖特基势垒二极管（SBD）结构，制作出 1200V 以上的高耐压二极管（Si SBD 的最高耐压为 200V 左右）。

因此，如图 2-1 所示，通过将现在主流使用的快速 PN 结二极管（FRD：快速恢复二极管）替换为 SiC SBD，能够大幅减小反向恢复损耗。有助于实现电源的高效化，并且通过高频驱动实现电感等被动器件的小型化，同时降低噪声水平。以功率因数校正电路（PFC 电路）和二次侧整流电路为中心，目前广泛应用于电动汽车充电器、光伏发电系统中的功率调节器、服务器电源、空调等多个领域。

目前，ROHM SiC SBD 的主要产品线包括 650V、1200V、1700V 耐压的产品。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peZ624iamb5y5o8WFgurcpO97k12lCCaeyTUkpLJ0lmywFzricfGY70iaCQ/640?wx_fmt=png&from=appmsg)

**2.2  SiC SBD 的正向特性**

SiC SBD 的开启电压与 Si FRD 为同等水平，都小于 1V。开启电压是由肖特基势垒的势垒高度所决定的，一般来说当势垒高度设计得较低时，开启电压也可以低一些，但是另一方面，反向偏置时的漏电流会增大，二者存在上述折衷关系。ROHM 的第二代SBD，通过改善制造工艺，成功地使得漏电流和反向恢复性能既可以与旧产品保持在相同水平，同时开启电压也降低了大约0.15V。另外，第三代 SBD 通过将 JBS（Junction Barrier Schottky）结构与第二代 SBD 的低 VF工艺相结合，实现了更低的 VF、更小的漏电流。特别是高温时的 VF得到了大幅减小。

SiC SBD 的温度依存性与 Si FRD 不同，当温度升高时，随着工作电阻的增加，VF值会变大，不易发生热失控，因此可以放心地进行并联使用。图 2-2 是 VF－IF特性的典型数据。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pet0IhFNMG2EZYPDsGNKbbpPQG7z2IRZkwyQVWGrNueJvWic0tIbOO5Ew/640?wx_fmt=png&from=appmsg)

**2.3  SiC SBD 的反向恢复特性**

Si 的快速 PN 结二极管（FRD：快速恢复二极管）在从正向偏置切换到反向偏置的瞬间，会产生极大的瞬态电流，在此期间因为要过渡到反向偏置状态，会产生很大的损耗。其原因是正向偏置时积聚在漂移层内的少数载流子，在湮灭之前（积聚时间内）会形成电传导。正向电流越大，或者温度越高，则反向恢复时间越长、反向恢复电流越大，从而损耗也就越大。

另一方面，SiC SBD 是在进行电传导时不使用少数载流子的多数载流子器件（单极性器件），因此从原理上来说，不会发生少数载流子的积聚现象。反向恢复时只会流过结电容放电程度的较小电流，因此与 Si FRD 相比可以大幅减小损耗。该瞬态电流几乎不受温度和正向电流的影响，因此无论在何种环境条件下，都可以实现稳定快速的反向恢复过程。另外，还预期可以减小由反向恢复电流引起的噪声。

图 2-3 是 SiC SBD 和 Si FRD 反向恢复特性的测试结果。可以看出无论使用温度和正向电流如何改变，SiC 的反向恢复电流都得到了大幅减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pedTPcI7wjezLbcgXJsWxF2N02C7wD0lmoS1YgHGV1IFcgrI0C4hA9mA/640?wx_fmt=png&from=appmsg)

**2.4  SiC SBD 的正向浪涌特性**

第二代 SBD 是纯肖特基（Pure Schottky）结构，采用的是仅仅在漂移层上附加肖特基金属的简单结构。但是，在高温下漂移层的电阻会增加，因此与 Si FRD 相比，当流过正向浪涌电流时，出于自发热对电流进行限制的尖峰浪涌电流 IFSM 有变低的倾向。在 PFC 电路中，当不使用旁路二极管时，电路起动时所产生的浪涌电流可能导致 SBD 发生故障。

因此，第三代 SBD 通过采用结势垒肖特基（JBS：Junction Barrier Schottky）结构，将 IFSM 特性提高为了第二代产品的 2 倍左右。JBS 结构在肖特基界面上制作了细小的 PN 结二极管，当流过大电流时通过 PN 结注入空穴，可以抑制漂移层电阻的增大，对浪涌电流有较高的耐性，因此对于没有旁路二极管的 PFC 电路也可以使用。

图 2-4 是第二代和第三代 SiC SBD 的结构区别，表 2-1 是典型电气特性的对比数据。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peGOnDTFpNU9NTiap8QrObibCv73FGPwct8I15PfpIdiaZ49F3HzHuDyaYA/640?wx_fmt=png&from=appmsg)

**2.5  串联・并联使用时的注意事项**

在选择功率器件时，有时可能无法根据电压电流条件选出规格合适的器件，此时可能会使用多个器件。但是，每个器件之间肯定会存在特性偏差，使用时需要特别注意。

**2.5.1 串联使用**

当需要对大于器件耐压的电压进行隔离时，有时会把 SBD 串联后使用。为了使得每个 SBD 所承受的电压均等，一般会在阳极和阴极之间并联均衡电阻。但是，如图 2-5（a）所示，SBD 在反向偏置时的漏电流 IR 较大，同时器件之间的特性偏差也较大，因此使用均衡电阻的对策是不现实的。

另外，如图 2-5（b）所示，端子间电容 Ct 会由于施加电压不同而变化很大，因此在刚刚施加反向偏置的瞬态过程中，各器件所承受的电压之间会产生不均衡现象，有可能会高于器件耐压。

出于以上原因，基本不推荐 SBD 的串联使用。

**2.5.2 并联使用**

当希望流过 SBD 的电流大于器件的额定值时，有时会把 SBD 并联后使用。如图 2-5（c）所示，SiC SBD 在电流增大时器件温度上升，VF会变大，因此电流不会集中流过特定的某一个器件从而实现均衡。

因此，并联使用时不需要附加的均衡电路。但是需要注意使用相同批次的产品，并且尽量使布线电感相等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peSA99ibAFAYfHrRMjUvYIpQuzTKpfjc3h6zftUxGQk0iaeeBL7bqqnGTQ/640?wx_fmt=png&from=appmsg)

3\. SiC MOSFET 的特征

**3.1  器件结构和特征**

对于 Si 材料，器件耐压越高，单位面积的导通电阻也变得越大（大约以耐压值的 2~2.5 次方的比例增加），因此对于 600V 以上的电压，主要采用 IGBT（绝缘栅极双极型晶体管）结构。IGBT 通过电导率调制，向漂移层内注入作为少数载流子的空穴，使其导通电阻比 MOSFET 还要小，但是另一方面，由于少数载流子的积聚，在关断时会产生拖尾电流，产生较大的开关损耗。

SiC 器件的漂移层电阻比 Si 器件的要小，不必使用电导率调制，就能够以具有快速器件结构特征的 MOSFET 同时实现高耐压和低导通电阻。从原理上来说，MOSFET 不会产生拖尾电流，在替代 IGBT 时，可以实现开关损耗的大幅减小和散热器的小型化。另外，通过以往 IGBT 所无法实现的的高频驱动，有助于被动器件的小型化。与 600V～900V 的 Si MOSFET 相比，SiC MOSFET具有芯片面积小（可以实现小型封装）、体二极管的反向恢复损耗非常小等优点。

目前 ROHM 的主要产品线是 650V、1200V、1700V 的平面型、沟槽型 MOSFET，被广泛应用于电动汽车充电器、工业设备的电源、高效功率调节器的逆变・整流部分等各种各样的用途。

图 3-1 是 Si 和 SiC 的 MOSFET 以及 IGBT 的额定电压范围对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pexSxFe6yqQpKrU9dE0g5r9iaD3iamiaCR3hzicZtrmic5xMCxqdgKaAnm94g/640?wx_fmt=png&from=appmsg)

**3.2  标准化导通电阻（RonA）**

SiC 的绝缘击穿场强是 Si 的 10 倍，因此能够以电阻率较低、膜厚较薄的漂移层实现高耐压。因此，对于相同耐压的产品，SiC可以实现标准化导通电阻（RonA: 单位面积导通电阻）更小的器件。如图 3-2 所示，例如对击穿电压为 900V 时的 RonA 进行对比，SiC MOSFET 的芯片尺寸只需要 Si MOSFET 的大约 100 分之一、超级结（Super Junction：SJ）MOSFET 的大约 10 分之一，就可以实现相同的导通电阻。这样不仅能够以小封装实现低导通电阻，而且栅极电荷 Qg、寄生电容也会变小。

目前，超级结 MOSFET 产品的最高耐压只到 900V，SiC 却能够以较低的导通电阻实现 1700V 以上的耐压。无需采用像 IGBT那样的双极型器件结构（导通电阻降低，但开关速度变慢），就可以实现低导通电阻、高耐压、高频开关等各种优点兼备的器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peSo1dzK6G2BNibDa1gl8stFWOx9RoGx1k61e9oHuCfPibQEvda3cEsXibQ/640?wx_fmt=png&from=appmsg)

**3.3  VDS-ID特性**

SiC MOSFET 不存在像 IGBT 那样的开启电压，因此从小电流到大电流的宽电流范围内都能够实现较低的导通损耗。

另外，Si MOSFET 在 150℃时的导通电阻会上升为室温时的 2 倍以上，但是 SiC MOSFET 的上升率相对较低，因此热设计更加容易、高温下也能够实现较低的导通电阻。图 3-3 是在常温、高温时各种器件的 VDS-ID 特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peoOkPlpZJZBDapEq3a2iaWBWqACpjggrKUvdQUDTibZgNm0x0cptTiajQg/640?wx_fmt=png&from=appmsg)

**3.4  栅极驱动电压和导通电阻**

SiC MOSFET 的漂移层电阻比 Si MOSFET 的低，但是另一方面，按照现有的技术水平，MOS 沟道部分的迁移率比较低，因此沟道部分的电阻比 Si 器件的要高。因此，驱动电压越高，越能够实现较低的导通电阻。（VGS=20V 以上逐渐饱和）。

如图 3-4 的 VGS-RDS(on)特性所示，SiC MOSFET 在一般的 IGBT 和 Si MOSFET 所使用的驱动电压 VGS=10～15V 的条件下，无法发挥原有的低导通电阻特性。因此为了实现充分的低导通电阻，推荐驱动电压为 VGS=18V 左右。

另外，当 VGS=13V 以下时，随着温度升高，导通电阻有减小的倾向，并联使用时电流可能会集中流过某一个器件造成热失控，请注意不要在该条件下进行使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peENvqIicJIYAafxykvibmrsBsAtymLAx4Jcdp8nIbNJhGXUumYl4Xiavzw/640?wx_fmt=png&from=appmsg)

**3.5  导通电阻的温度系数**

一般来说，高压 Si MOSFET 在高温条件下，导通电阻会大幅上升。这是因为占器件导通电阻 9 成以上的漂移层电阻（REPI）在温升 100℃的条件下，大约会变为原来的 2 倍。

SiC 的漂移层电阻和 Si 一样，在温升 100℃时也有变为大约 2 倍的倾向，但是器件整体的导通电阻的上升率却低于 Si MOSFET（图 3-5）。这是因为在器件的导通电阻中，漂移层电阻的占比较小，其他电阻成分的占比较大。沟道电阻 RCH 在高温时会稍微下降，n+基板的电阻 RSUB 几乎没有温度依存性。

即便是 SiC MOSFET，因为耐压不同、器件设计不同，导通电阻的温度系数也会有所不同。650V 产品的漂移层电阻成分较小，因此温度系数非常小；1200V 产品的漂移层会变厚，电阻成分较大，因此温度系数也会变大。对于相同耐压的 SiC 产品，漂移层越厚的器件，耐压的实力值越高，可靠性也越高，但是另一方面，导通电阻的温度系数也会变大。（图 3-6）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peze5RYCvh7SO71z8VdoyKJmEibpUiaOYXgbfGaJdAtKdsEVDCptLmBwJQ/640?wx_fmt=png&from=appmsg)

**3.6  VGS-ID特性**

图 3-7 是 VGS-ID 特性。左右两个图表是同一个数据，左图的纵轴是对数坐标，右图的纵轴是线性坐标。SiC MOSFET 的阈值电压以数 mA 进行定义时与 Si MOSFET 相当，在室温时大约为 3V（常闭）。但是，为了流过几 A 电流所需要的栅极电压在室温时大约为 8V 以上，因此认为其误导通的耐量与 IGBT 相当。阈值电压有随温度升高而下降的倾向。由下图可知，即便当 Ta=150℃时，只有在 VGS=6V 以上，SiC MOSFET 才会流过 5A 以上的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pemUdSHXvtpPkalyn9J3Kcc8KjEHwZD7PnXeiagiaoe0QMqqcWB53icnVWw/640?wx_fmt=png&from=appmsg)

图 3-8 是 SiC MOSFET 和 IGBT 的 VGS(VGE )- ID(IC)特性对比。可以看出 ID(IC) =10mA 时的 VGS(th)的值是 SiC MOSFET 更低，但是对于 5A 以上时，SiC MOSFET 所需的 VGS 会变得高于 IGBT。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peMlY0bls0h2eiaweIHxTeRKcUC1Mniar6MW5QibPcr2aohbic0gFN3EYswg/640?wx_fmt=png&from=appmsg)

**3.7  开通特性**

使用 SiC MOSFET 和 SiC SBD 的一体化封装产品 SCH2080KE，和相同等级的 IGBT 和 Si FRD 的一体化封装产品，分别构成半桥电路，通过感性负载的双脉冲测试（DPT）对开关波形进行了对比。图 3-9 是测试电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe4H1Eac30FicRaconicNCUzzRhV0Wr1FiaHXicu3r9xlmqECK3ofszwG8Lg/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的开通速度与 IGBT 和 Si MOSFET 相当为几十 ns。但是，在感性负载条件下进行开关动作时，由流过上臂二极管的续流所产生的反向恢复电流也会以直通的形式流过下臂，根据二极管性能的不同，可能会叠加较大的损耗。（图 3-10）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peyjmVM2icwPLJvH6I0ysusViaxIvthP24ClBNuy8UBmF7Gr6QfmKQNw8w/640?wx_fmt=png&from=appmsg)

一般来说，Si FRD 和 Si MOSFET 的体二极管的反向恢复电流非常大，会产生很大的损耗。而且高温时该损耗有变大的倾向。

另一方面，SiC SBD 可以不受温度影响实现快速反向恢复，SiC MOSFET 的体二极管虽然 Vf 比较高，但是具有和 SiC SBD 同等的快速反向恢复性能。通过该快速反向恢复性能，可以将开通损耗（Eon）减小好几成。开关速度在很大程度上取决于外接栅极电阻 RG\_EXT。为了实现快速动作，推荐使用几 Ω 左右的低阻值栅极电阻。请在考虑浪涌电压的前提下，选择合适的栅极电阻。

**3.8  关断特性**

SiC MOSFET 的最大特点是原理上不会产生 IGBT 中所见到的拖尾电流。对于 SiC，即使耐压在 1200V 以上，也可以采用快速的 MOSFET 结构，因此与 IGBT 相比，关断损耗（Eoff）可以减小大约 90%（图 3-11），有助于电路的节能和散热设备的简化・小型化。IGBT 的拖尾电流会随着温度的升高而变大，而 MOSFET 几乎没有温度依存性。

另外，由于较大的开关损耗引起的发热会导致结温（Tj）超过额定值，因此 IGBT 通常不能在 20kHz 以上的高频区域内使用。

SiC MOSFET 的 Eoff 较小，因此可以实现 50kHz 以上的高频开关动作。通过高频化可以实现变压器或者滤波器等被动器件的小型化。(图 3-12)

开关速度在很大程度上取决于外接栅极电阻 RG\_EXT。为了实现快速动作，推荐使用几 Ω 左右的低阻值栅极电阻。请在考虑浪涌电压的前提下，选择合适的栅极电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pej2KwJe2NzHNLyOYIgTW2HKT7HBCChx6dmCSxQS00uQbeknEkoSUyyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peibHYLeJonJNpZEiaaia6bHAoe6KAwGQQK8UE1qE9ibtNlpM5fLYibyHORKQ/640?wx_fmt=png&from=appmsg)

**3.9  内部栅极电阻**

芯片的内部栅极电阻取决于栅极电极材料的方阻和芯片尺寸。如果是相同的设计，芯片内部栅极电阻与芯片尺寸呈反比，芯片尺寸越小，则栅极电阻越大。SiC MOSFET 的芯片尺寸小于 Si 器件，虽然寄生电容较小，另一方面内部栅极电阻变大了。第二代1200V 80mΩ 产品的内部栅极电阻大约为 6.3Ω，第三代 1200V 80mΩ 产品大约为 12Ω。

开关时间在很大程度上取决于外接栅极电阻。图 3-13 是外接栅极电阻和开关损耗的关系。栅极电阻越大则损耗越大，因此为了实现快速开关动作，请确认好浪涌情况，尽可能地使用几 Ω 左右小阻值的外接栅极电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe0ojVYSrKa7Zp943OxXHreCkicww1Z77ia9wr4m4wUqMrglUicOHGDNYHw/640?wx_fmt=png&from=appmsg)

**3.10   体二极管的反向恢复特性**

SiC MOSFET 的体二极管虽然是 PN 结二极管，但是少数载流子寿命较短，因此几乎不会出现少数载流子的积聚效果，具有与SBD 一样的超快速反向恢复性能(几十 ns)。因此，与 Si MOSFET 的体二极管以及 IGBT 外接的 FRD 相比，SiC MOSFET 的体二极管的反向恢复损耗可以减少到几分之一到几十分之一。

SiC MOSFET 体二极管的反向恢复时间和 SiC SBD 相同，不受正向输入电流 IF 的影响。另外，图 3-14 对比了 SiC MOSFET 的体二极管（SCT2080KE）和 SiC SBD（SCH2080KE）的反向恢复电流，当 dI/dt 一定时，两者没有差别。在逆变器等的桥式电路应用中，即使只由 MOSFET 构成桥式电路，不仅可以实现非常小的反向恢复损耗，同时预期可以回避由反向恢复电流引发故障的风险，以及降低噪声水平。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pec21bXODnCgw1ZwqCKJOscUFm1JY9zSrdmYnURVJDcS0k7wFEOXQX7Q/640?wx_fmt=png&from=appmsg)

**3.11   BV（击穿电压）的温度依存性**

SiC MOSFET 和 Si MOSFET 一样，高温时 BV（Breakdown Voltage：击穿电压）会上升。虽然与室温相比在低温条件下使用时BV 値会下降，但是 ROHM SiC MOSFET 进行了充分的余量设计，即使是低温时 BV 值也不会低于额定电压。

图 3-15 是典型的 BV 温度依存特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pezByK4EYB5Nndvb9q2o247sB8MLqmanVegs4rhwDTANIPNuycOd3icOA/640?wx_fmt=png&from=appmsg)

**3.12   用于反激电源的 1700V SiC MOSFET**

如图 3-16 所示，耐压 1700V 的 SiC MOSFET 的 RonA 仅是相同耐压等级 Si MOSFET 的 200 分之一，特性有很大改善，因此可以通过不到 10 分之一的芯片尺寸实现 10 分之一的低导通电阻。对于交流输入 200~400V 的工业设备的辅助电源（反激变换器），通过将经常使用的 1500V Si MOSFET（10Ω 左右）替换为低导通电阻的 SiC MOSFET（1Ω 左右），可以通过低发热去掉散热器，通过产品表贴化实现自动安装，在不提高整体成本的前提下，就可以实现小型化、低发热化和安装工序的简化。ROHM 也可以进行 SiC 专用反激控制 IC，以及 SiC MOSFET 和控制 IC 一体化封装产品的提案。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peKI0jBDaasRQaAk46Y3SkDoCicIclPY4OlVibKiaCVrUk0Wt4YIkmOA5Nw/640?wx_fmt=png&from=appmsg)

**3.13  第三代沟槽栅极 SiC MOSFET**

第三代 SiC MOSFET 采用了沟槽型栅极结构(图 3-17）。不仅可以通过缩小晶胞间距来降低沟道电阻，也可以去掉 P 阱之间电流路径的狭窄化所引起的被称作 JFET 电阻的电阻成分。因此与第二代产品相比，成功地将 RonA 减小了一半。表 3-1 给出了第二代和第三代 MOSFET 的主要特性对比一览表。因为获得相同导通电阻所需要的芯片面积有所减小，可以降低成本。

一般来说，对于 SiC 的沟槽栅极 MOSFET 结构，因为栅极沟槽底部的栅极氧化膜在关断时会承受较高的电场，难以保证长期可靠性，ROHM 通过采用独特的双沟槽结构解决了这一问题。通过将源极也制作成沟槽结构，在其底部形成 P 型层，成功地将关断时栅极氧化膜所承受的电场强度降低了 35％，能够实现长期可靠性。

另外，因为第三代 MOSFET 栅极电压的额定范围较窄，请确认第 5 章的栅极浪涌电压对策方法，在规格范围以内进行使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe4OS0iaKMic7PxECCH1eajhneYrJMRl3smtCdnITPlj0HpCJhUOBJGF8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pef5vic47ztC4eoFS4uhWPUAkLR9dAE13wficR9GmuW9zAqo1YzMGCiaecw/640?wx_fmt=png&from=appmsg)

**3.14  开关特性的温度依存性**

开关速度在很大程度上取决于器件的寄生电容，因为 SiC MOSFET 的寄生电容相对于温度几乎不变，所以开关损耗的温度特性非常稳定。如图 3-18 所示，开关损耗在 25℃～175℃的范围内特性几乎是平的。图 3-19 是 SCT3040KL 的（a）Ciss、（b）Crss、（c）Coss 的温度特性，可以看出各种寄生电容成分相对于温度变化都很稳定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pejuTSIToTkq4pj723cXgqncp2PqHjuAo2SsDmdp3PxWzfkBeegyqcyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peaCec03icibyzooomteuibOaMcjBjI3LnZiafOiayjkvz8dIIyZ9AE801ia4Q/640?wx_fmt=png&from=appmsg)

**3.15   开关特性的栅极电压依存性**

图 3-20 是在不同栅极驱动电压的条件下，开关损耗的差别。开通时的损耗 Eon 会随着驱动电压 VG(ON)的升高而减小，18V 驱动电压相比于 15V 驱动电压，Eon 减小了 1.5 倍左右。这是因为 VG(ON)和米勒平台电压之间的电位差越大，栅极电流就会越大，Crss的放电速度，也就是说漏极电压的下降速度会变快。

另一方面，关断时的损耗 Eoff 几乎不随 VG(ON)变化而变化。关断时，因为是由米勒平台电压和栅极关断电压（本例是 0V）之间的电位差来决定给 Crss 充电的栅极电流的大小，因此基本上和 VG(ON)无关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe1s5GAg6iaYmbfUWo2GrCeYRWCuUz1Cbm5Z8eXRWicTStIqHTGBZR70Qg/640?wx_fmt=png&from=appmsg)

**3.16  开关速度的漏极电流依存性**

图 3-21 是在不同漏极电流 ID的条件下，栅极\-源极电压 VGS的动作说明。无论是开通过程还是关断过程，当 ID 变大时，米勒平台电压都有变高的倾向。因此，当 ID 变大时，开通速度变慢，关断速度变快。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peibDtBnWUADYsLLNTXP49zbia0qXxqdN9ZdlIQvfbFIcbe4DlEeUQNnhw/640?wx_fmt=png&from=appmsg)

**3.17  寄生电感对开关特性的影响**

在 TO-247N 等 3 端子封装中，栅极驱动电路和流过漏极电流的主电路会共用源极端子。因此，源极端子所具有的寄生电感Ls 会随着开关动作时 ID 的变化产生感应电动势，从而对驱动电路产生不良影响。图 3-22 是动作原理的说明。开通时随着漏极电流 ID 的增加，该 dID/dt 所产生的电压 LS・dID/dt 会使得 G-S 之间所施加的有效电压 VGS(real)有所减小，造成开关速度下降。另外，关断时因为 ID 减小，LS在关断时会产生反极性的电压，对关断动作造成妨碍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peabIjnTGPam9XIE8wMgePtGJ9kEKIvqye7DLEax2yFkGFysxibcAJLUA/640?wx_fmt=png&from=appmsg)

源极的共用电感 Ls 不仅存在于 3 端子封装的源极端子和内部键合引线，也存在于 PCB 上的布线 Layout。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peoB7MRPiaSvsJtjG9icBHV6YtfUFTyc6lscHe8OicQQcWP2o7URfmpwd8g/640?wx_fmt=png&from=appmsg)

图 3-23 是在 PCB 上把主电路和驱动回路的返回布线进行共用化的利害说明。LayoutA 共用了主电路和返回布线的一部分布线，LayoutB 是从端子的焊接位置开始将布线进行了完全的分离。可以看出在 LayoutA 中 VGS 的抬升较小，ID 的上升速度也会变慢。把驱动回路的返回布线从 MOSFET 的引线端子位置开始，和主电路进行分离后再引出是很重要的。

**3.18  开尔文源极封装**

为了去除如 3.17 所说明的源极端子的感应电动势对开关速度产生的影响，开发出了具有开尔文源极（驱动源极）端子的封装。ROHM 已经量产了 TO-247-4L（4 端子）封装的产品。图 3-24 是其外观图，图 3-25 是内部的等效电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peUob7oUv8qpkHvuUHCx0nzWcR2PUdPiahGibgIpoP31ibyxV0NkBxGPTMg/640?wx_fmt=png&from=appmsg)

在该封装中，从 MOSFET 芯片的正面电极上具有不通过主电路的源极，而是通过其他引线所连接的驱动源极端子。这样，即使主电路的寄生电感因为电流变化产生了感应电动势，也不会对驱动电路产生影响，因此可以大幅改善开关损耗。图 3-26是通过 DPT 进行的 TO-247N（3 端子）和 TO-247-4L（4 端子）的开关损耗对比测试结果。两者只是封装不同，使用的芯片是一样的。可以看出因为有了驱动源极端子，当 ID 越大时，开通损耗和关断损耗的改善也越大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peJ0nfiaKlcBOJUX4ne2BLIjfFc9rdk0Adjibr3k47Cbmoth4Z2L1pTfqA/640?wx_fmt=png&from=appmsg)

4\. 分立器件评估基板

**4.1  用于 SiC MOSFET 分立器件的评估基板**

表 4-1 是 ROHM 发布的适用于 SiC MOSFET（分立器件）的评估基板的一览表。为了评估开关特性，基板采用了半桥结构，可以通过最少的外围器件，进行双脉冲测试、以及 buck 和 boost 拓扑电路的评估。评估基板可以调整开关速度、变更驱动电压，还具有栅极浪涌保护电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peBM1gFC5iakGQcgZeClqO6dsRzEf6ZLSlwTk01OKicZsuZdNsyJatEMaQ/640?wx_fmt=png&from=appmsg)

**4.2  评估事例**

对使用评估基板 P02SCT3040KR-EVK-001 所做的双脉冲测试的实施案例进行说明。DUT 是 SCT3040KR 以及 SCT3040KL（1200V、40mΩ）。图 4-1（a）是测试电路、（b）是测试场景、（c）是 MOSFET 的栅极驱动电路。如图（a）所示，测试所需要的试验设备仅包括控制电源（12V）、脉冲发生器（PG）、负载电感（250μH）以及负载高压电源（VHVdc）。从 VHVdc 到评估基板有一定的距离，因此在这次测试中连接了大容量电容器（Bulk capacitor）。评估基板上也安装有10μF 的薄膜电容，基本上是不需要大容量电容器的，但是建议根据工作条件进行连接。图（b）对测试时 VGS 的检测方法进行说明。一般来说，观测高边侧（HS）MOSFET 的波形时需要使用绝缘探头，但是高压绝缘探头的前端较大，无法直接连接到 MOSFET 的端子上。因此，在这次测试中，在 MOSFET 的栅极\-源极端子上焊接了 10cm 左右的检测用铜线，之后再将探头连接到了铜线的前端。同时，为了抑制追加该检测用铜线后，铜线电感所引起的波形振荡，插入了100Ω 的阻尼电阻。另外，图（c）中用红色表示的器件是用来去除 MOSFET 的栅极\-源极之间所产生浪涌的保护电路，其效果也一并进行了验证。

这次测试是将 HS 侧的 MOSFET 作为开关侧进行动作，而 LS 侧的 MOSFET 则作为续流侧使用其体二极管。调整脉宽使得 VHVdc为 800V、ID 为 55A~60A 左右，对开通过程和关断过程的波形进行了观察。这些波形如图 4-2、4-3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pezPjBpnumGmooXK5bbS1W7Igm5r4L7gictrYA9s85r9ibawtv05yV2VSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peDrFAHsD8TicSIbRjjAHmL9qn0T2a08HtPU6TMXhXyDSPtUr1CPA51ow/640?wx_fmt=png&from=appmsg)

图 4-2（a）、（b）是 VDS、ID 的波形，同一个图中的（c）､（d）是 VGS 的波形，将 SCT3040KL（TO-247N）和 SCT3040RK（TO-247-4L）进行比较。虽然图（c）、图（d）中开关侧的 VGS\_HS 波形几乎是同等的，但是图（a）中的 ID 波形无论是在开通时还是在关断时，都是 TO-247-4L 的动作速度非常快。这是由 3.18 节所述的驱动源极端子所产生的效果。

另一方面，非开关（LS）侧 MOSFET 的栅极\-源极电压 VGS\_LS，通过使用如图 4-1（c）所示的保护电路，去除了应用笔记《桥式电路相关的 Gate-Source 电压的动作》\*1 中所述的正负浪涌，满足 SiC MOSFET 特有的栅极额定电压范围比较窄的使用条件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0ped7ftvPNibzTTjq3P9ibsA2E3eKztgzg38cAc7onzwBicD8UGlLRMdb4Mw/640?wx_fmt=png&from=appmsg)

另外，图 4-3 是开关损耗 Eon、Eoff 的波形。

TO-247-4L 解决了源极端子产生的感应电动势所带来的开关速度延迟的问题，使得总开关损耗减少了大约 35％。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peDzRIibaQOxvu2Nprhko02OibMC20XRcZRZNMtuqeHBjpvQia948PuzM8g/640?wx_fmt=png&from=appmsg)

5\. 栅极驱动

SiC MOSFET 的驱动简单，是驱动功率较小的常闭型电压驱动的开关元器件。基本驱动方法和 IGBT、Si MOSFET 相同。推荐的驱动栅极电压是开通侧为+18V 左右、关断侧为 0V，当有较高的抗噪性能要求或者高速开关要求时，可以在栅极额定电压范围以内施加负电压。

本章对栅极驱动设计时的注意点、推荐驱动条件等进行说明。

**5.1 电路方式的注意点**

**5.1.1  通过脉冲变压器进行驱动**

通过脉冲变压器进行驱动时，正负极输出相同的电压。SiC MOSFET 的 VGS 额定范围是负压侧比正压侧的额定范围要窄，因此，不能使用输出正负相同电压的脉冲变压器进行驱动。

**5.1.2 通过自举方式进行高边驱动**

将 MOSFET 上下串联连接成桥式结构时，高边侧（HS）的栅极驱动需要采用浮空方式，其中一种实现方法是自举方式。关于自举方式的动作过程，很多文献都有记载在此省略。HS 侧 MOSFET 在关断时，通常会有如图 5-1 的实线箭头所示的负载电流流过。此时 LS 侧 MOSFET 在关断时，通过体二极管导通进行续流，因此 Vsw 的电压变为\-VF，这样自举电容 Boot Capacitor 被充电到（VG＋VF）。但是，SiC MOSFET 的体二极管的 VF比 Si MOSFET 大，因此需要注意不要超过栅极驱动 IC 和 MOSFET 的栅极额定电压范围。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peSeyFOXWWr7A650kibtlX7RyGYzgA97j6QQVZm3bJ38ygYVjWdLYGWTA/640?wx_fmt=png&from=appmsg)

**5.1.3  通过隔离型电源进行高边驱动**

当将隔离变压器作为驱动 HS 侧 MOSFET 的隔离电源进行使用时，必须注意变压器的一次侧\-二次侧之间所存在的耦合电容。如图 5-2 所示，因为变压器的二次侧（MOSFET 侧）存在快速的 dv/dt 变化，通过变压器的耦合电容，在一次侧的 GND1 上会叠加电压噪声，最坏的情况可能会引起驱动 IC 的误动作。因此，需要考虑 Vsw 电压的 dv/dt 条件，并使用耦合电容尽可能小的变压器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peCJhN2DZqibL7WWibMbMdZUU5x3F4z2DFosCibFDryJcWFn2zO8fiaA4nAQ/640?wx_fmt=png&from=appmsg)

**5.1.4  负偏压产生电路**

图 5-3 介绍产生负偏压的电路示例。以下的各种电路在成本、安装空间、电压精度等方面各有利弊，请在充分考虑MOSFET 的使用条件和系统要求之后进行选择。

另外，对于不能对应负偏压的驱动 IC，通过将负偏压电源 VG\_N 连接到驱动 IC 的 GND 电位上也可以实现负偏压，但是需要注意，当在驱动 IC 内部监视 MOSFET 的驱动电压进行欠压闭锁保护（UVLO2）时，驱动电压的监视电压会产生负偏压部分的降低。详细内容请参考第 5.3 节。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peiaWM276jQBa7uQyfrNzNUf8F2FwIVEDgnrtd68sOkGCZre4Pn7MzOwg/640?wx_fmt=png&from=appmsg)

**5.2 缓冲电路**

驱动 IC 是以驱动 MOSFET 为目的的 IC，也有不少驱动 IC 同时具有异常时的保护功能。对于具有系统设计的必要功能的驱动IC，一般会优先进行功能选择，因此可能缺少足够的驱动能力。另外，当使用功率模块等将 2 个以上的 MOSFET 进行并联连接、或者使用芯片尺寸较大的 MOSFET 时，驱动 IC 单独的驱动能力可能本来就不够。

在这种情况下，在驱动 IC 和 MOSFET 之间设置用于补充驱动能力的缓冲电路是有效的。关于使用双极晶体管的推挽型缓冲电路，在图 5-4 中以 ROHM 驱动 IC（BM61S41RFV-C）为例进行说明。

在图 5-4 中，红色虚线所包围的部分是缓冲电路。从 OUT 端子所输出的驱动信号与 Q1、Q2 的基极相连，高电平时 Q1 导通，低电平时 Q2 导通。虽然驱动 IC 的驱动能力为 4A，但是通过在 Q1、Q2 处使用 ROHM 的 2SRC542、2SRA542，可以将驱动能力提高到大约 10A（peak）。

另外，缓冲电路还具有分散发热的作用。当希望提高开关频率时，驱动 IC 可能会有发热问题，可以通过追加缓冲电路，分散驱动电路整体的发热来对应高频驱动。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pePzdYhibTwnewko5SGxHgP5gwqWu7oDOic7OUMkgWzRO3QYcAQFp4q74g/640?wx_fmt=png&from=appmsg)

**5.3 UVLO（欠压闭锁）**

在第 3.4 节（图 3-4）中说明过，当驱动电压降低时，SiC MOSFET 导通时的电阻（RDS(on))会变高。因此，驱动 IC 通常会附加监视驱动电压是否过低的功能（UVLO：Under Voltage Lock Out 欠压闭锁）。

表 5-1 列出了 ROHM 驱动 IC（BM61xxxxx 系列）的驱动电压的监视电压 VUVLO2。SiC MOSFET 的驱动电压比 Si MOSFET 和IGBT 的驱动电压要高，因此为驱动 SiC MOSFET 所开发的 BM61S 系列的 UVLO2 的监视电压也设置得较高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe33hAGxfGgPYg0vAuedQtxusObYfBu9zQlLbsNqbvv2G2Wdzic4ctvcw/640?wx_fmt=png&from=appmsg)

在这里需要特别注意的，是在 5.1.4 节中也说明过的，对于本来不支持负偏压（VEE2）的驱动 IC，将其按照负偏压进行使用时的情况。图 5-5 是一般性的驱动电路的电源供给方法。图（a）是使用支持负偏压驱动 IC，图（b）是使用不支持负偏压驱动 IC 的情况。栅极驱动电源在接通时使用 VG\_P 电源，在关断时使用 VG\_N 电源，将 GND 作为 VCOM。一般来说，驱动 IC 的 VUVLO2 是以 IC 的GND2 为基准的，因此，无论 VEE2 是否存在，图（a）的 GND2 都是固定的，以相同的电压对 VG\_P 进行监视。另一方面，图（b）中 MOSFET 的驱动电压的监视电压 VMOS\_UVLO2 会如公式（1）所示，降低了负偏压 VG\_N 的部分。当使用负偏压时，请尽可能地选择支持负偏压的驱动 IC。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peoIBjicMKPByDuQREvTSmDcrspoOS6gVmIicn0j50D0wgVB4BKa99FZpQ/640?wx_fmt=png&from=appmsg)

**5.4  SiC MOSFET 的栅极驱动 IC**

当对 SiC MOSFET 的栅极驱动 IC 进行选型时，需要特别考虑的地方有以下几点。

▪ 驱动电压（最大额定范围等)

▪ 驱动能力（输出峰值电流、开关频率等）

▪ 传输延迟时间（一次侧\-二次侧之间等)

▪ 保护功能（Miller Clamp、DESAT、OCP、UVLO 等）

▪ 共模瞬态抑制（CMTI: Common Mode Transient Immunity）

另外，根据所具备的功能不同，驱动 IC 可以分为单功能型（简单型）和多功能型（复合型）这两大类。其中，简单型仅具备驱动信号，采用 SOP-8 和 SSOP-10 等小型封装。另一方面，复合型支持负偏压，具备各种保护功能、温度监测功能、隔离电源等，多为 SOP-20 以上的大型封装。

**5.5 推荐栅极电压（VGS）**

在 SiC MOSFET 的驱动条件中，特别重要的是驱动电压。如 3.4 节所说明的，SiC MOSFET 为了获得足够低的导通电阻，必须施加比 Si MOSFET 更高的驱动电压。另一方面，SiC MOSFET 的栅极额定电压范围与 Si MOSFET 相比变窄了。

图 5-6 是 ROHM SiC MOSFET（SCT3040KL）与 Super Junction MOSFET（R6047KNZ4）的驱动电压范围的对比数据。由图可知，SCT3040KL 的推荐驱动电压为 0V~+18V，与 R6047KNZ4 的 0V~+10V 相比，使用时需要将驱动电压的振幅变大。

另一方面，关于栅极额定电压范围，R6047KNZ4 为\-30V~+30V、SCT3040KL 为\-4V~+26V 较窄，特别需要注意负偏压范围。此外，栅极\-源极电压在开关动作时有时会叠加正负浪涌，该正负浪涌也必须控制在栅极额定电压范围以内。

另外，关于 ROHM SiC MOSFET 的栅极额定电压范围，随着世代更新会发生变化，表 5-2 中列出了其对比一览表。

此外，关于 SiC MOSFET 的栅极额定电压，请参照 8.2 节「SiC MOSFET 的可靠性」。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peNWSicfje9icQUqmTictMzfVypP4Nha5ZMyCz9JRicK0S8uzJdV2ILbeVjg/640?wx_fmt=png&from=appmsg)

**5.6 推荐外接栅极电阻（RG\_EXT）**

决定 MOSFET 开关性能的重要参数是外接栅极电阻（RG\_EXT）。如公式（2）所示，栅极驱动时的峰值电流，是由驱动 IC 的输出电阻（RONH）以及 RG\_EXT、内部栅极电阻（RG\_INT）的总和所决定的。如 3.9 节所说明的，一般来说 SiC MOSFET 与 Si MOSFET相比，其内部栅极电阻更大，因此为了实现快速开关动作，需要减小外接栅极电阻 RG\_EXT 来增大栅极电流。另外，对于在 5.5 节中所说明的栅极\-源极之间的正负浪涌，也会随着 RG\_EXT 的增大而增大，因此选择尽可能小的阻值可以减小浪涌。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0petobT1Zvu1ibvw5ffoagBUlU0YdzP07jib521JWqMyx0libGGnbvdEGkFQ/640?wx_fmt=png&from=appmsg)

但是，如果加快开关速度，漏极\-源极之间所产生的电压浪涌会变大，可以通过选择合适的 RG\_EXT 将该电压浪涌控制在额定范围以内，也可以通过追加 Snubber 电路等的浪涌吸收电路对浪涌进行吸收。

**5.7  推荐死区时间（tDT）**

在桥式结构中，为了避免所使用的 MOSFET 发生上下同时导通，通常设置有死区时间。图 5-7（a）是 boost 电路的死区时间控制示例。低边（LS）MOSFET 用作开关切换，高边（HS）MOSFET 用作同步整流。如该图（b）所示，为了防止 HS 和 LS 同时导通，在 LS 的开通前和关断后设置了死区时间。在死区期间，电感 L 的电流从 MOSFET 的体二极管流过。SiC MOSFET 的体二极管的正向压降 VF比 Si 器件的要高，因此希望尽可能地缩短该时间。

但是，如果关断时电感 L 的电流 IL(OFF)较小的话，向上下 MOSFET 的 Coss 进行充放电的电流也会变小，结果造成在死区时间以内，Coss 的充放电、即 VDS 的变化过程无法完成。这样，在同步整流侧的 MOSFET 上会发生本不应该产生的的开关损耗，出现效率下降和发热量增加的问题。因此，需要根据 IL(OFF)的动作条件，估算死区时间的最小值。

在公式（3）中为了进行简化，将 Coss 作为固定值对最小死区时间进行计算，但是实际上，Coss 的值会随着漏极\-源极电压 VDS发生变化。数据手册中所记载的 Coss，通常是某个 VDS 条件下的代表值，并不一定是处于最坏条件下的值。使用如图 5-8 所示的VDS-C 特性曲线，取 VDS<1V 时 Coss 的最大值进行计算，可以在设计死区时间时留有一定的余量（虚线包围部分）。实际上充放电所需要的电荷量，是图中实线包围部分的面积，如果在公式（3）的分子中使用这个面积可以计算出更加准确的 tDT。如图 5-8 所示的电容特性曲线是数据手册中肯定都会记载的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pettXpvvicyskYOz8WoNBRRb6YHwZE306yPr8IM1Iuxw73Rx507DZia9icw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe1ViadOAgvk2sXjWpdMEuic4xYfCz7sRUFCgCfwfNIZI2mdtGAM5h2MeA/640?wx_fmt=png&from=appmsg)

**5.8  误导通对策**

在逆变电路和全桥电路等由 MOSFET 所构成的桥式电路中，上下桥臂的一方或者两方的 MOSFET 本应该同时关断，但是因为非开关侧（续流侧）MOSFET 的 VDS 和 ID 会随着开关侧 MOSFET 的动作变化而变化，即使续流侧 MOSFET 的栅极端子接收到的是关断信号，也有可能会发生意料之外的导通。这种现象被称作误导通或者自开启。当产生这种现象时，不仅会导致效率低下，在最坏的情况下，会导致 MOSFET 的损坏。

图 5-9 是对策电路的示例。（a）通过将关断电压设置为负偏压（VG\_N），这样即使存在导致误导通发生的栅极电压抬升，抬升值也不会超过 VGS(th)。但是，对于 VGS 负压侧额定范围比较窄的第三代 SiC MOSFET 来说，无法这样来使用。（b）通过在 MOSFET的栅极\-源极之间连接 1nF~5nF 的电容，来抑制瞬时的栅极电压抬升。（c）通过当栅极\-源极之间的电压低于一定的电压值时，将有源钳位 MOSFET 导通来抑制栅极\-源极之间电压的抬升。对于（b）、（c）这两种方法，当存在寄生电感时效果会变弱，因此将对策器件尽量靠近栅极端子、源极端子进行贴装是很重要的。在选择器件时，同时推荐选择寄生电感较小的小型封装产品。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0ped0zzc6Oy9Nc1KTTAMpicfIxg7FZRk4Iiaq9vFMMN9BZKH2j6QSoGP4ew/640?wx_fmt=png&from=appmsg)

无论采用以上哪种方式都各有利弊，根据所使用驱动 IC 的功能，有时也会存在无法适用的情况。请在正确理解误导通产生原理的基础上，选择合适的误导通对策。

另外，关于误导通的产生原理，在应用笔记《桥式电路相关的 Gate-Source 电压的动作》\*1 中有详细介绍；关于各种对策电路，在应用笔记《栅极\-源极电压的浪涌抑制方法》\*2 中有详细介绍，请一并参照。

**5.9  负浪涌对策**

如在第 5.5 节中所说明的，SiC MOSFET 的栅极额定电压范围非常窄，特别是负偏压的额定范围，相对于实际使用电压只有几 V的余量。因此，在初始设计阶段就加入栅极负浪涌对策就显得尤为重要。

图 5-10 是负浪涌对策电路的示例图。（a）是在栅极\-源极之间连接了对负偏压进行钳位的二极管。（b）通过在 MOSFET 的栅极\-源极之间连接 1nF～5nF 的电容，来抑制栅极电压的瞬时下降。（c）通过当栅极\-源极之间的电压低于一定的电压值时，将有源钳位 MOSFET 导通来抑制栅极\-源极之间电压的下降。对于（b）､（c）这两种方法，和第 5.8 节中所说明的误导通对策是相同的，可以共用。另外，无论采用哪种方法都和误导通对策一样，将对策器件尽可能地靠近栅极端子和源极端子进行贴装，尽可能地选择寄生电感小的器件都是尤为重要的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peMXMzszuObOh5icYocQeAPEr9mibGk8ssHg8bEuzSgG5EEJnDNYkYl0tA/640?wx_fmt=png&from=appmsg)

但是，负浪涌并不是由于单一原因所引起的，而是紧随 VDS和 ID 的变化过程时序，由多个原因所导致的。根据负浪涌产生的时间点不同，需要采取的有效措施也不尽相同，所以首先必须正确把握负浪涌的产生原因。在此基础上，根据驱动电路中有没有负偏压，以及基板 Layout 条件等情况，再采取最为合适的对策是很重要的。

另外，关于负浪涌的产生原理，在应用笔记《桥式电路相关的 Gate-Source 电压的动作》\*1 中有详细介绍；关于各种对策电路，在应用笔记《栅极\-源极电压的浪涌抑制方法》\*2 中有详细介绍，请一并参照。

**5.10  短路保护**

MOSFET 的短路保护有多种方式。在这里，说明几种具有代表性的方法。

**5.10.1 DESAT**

DESAT（Desaturation fault detection）作为最简单的短路保护被广泛应用，对于复合型驱动 IC，几乎所有的产品都具有该功能。

图 5-11 是使用罗姆驱动 IC （a）BM60052AFV-C、（b）BM6101FV-C 的 DESAT 电路示例。外围器件包括 DESAT电阻 RDESAT、R1、R2 以及 R3、DESAT 二极管 DDESAT、检测延时电容 CBLANK，通过调整外围器件可以调整检测电压和检测延时。施加到 DDESAT 的电压会以与 MOSFET 的开关速度成正比的 dv/dt 进行变化，因此需要选择快速恢复型二极管。另外，需要注意 RDESAT 和 R1 在 DDESAT 的反向恢复期间也会承受 MOSFET 漏极端子的电压，因此不适合选用额定电压较低的电阻。

关于短路电流的检测电压和检测延时，需要在掌握所使用的 MOSFET 的电流容许值和短路耐量等条件的基础之上进行设计。另外，根据 MOSFET 的电路结构，有可能出现漏极端子电压低于源极端子电压，使得驱动 IC 的 DESAT端子电压低于 GND2 的情况。注意需要连接二极管等钳位电路对 DESAT 端子进行保护。

另外，详细动作过程和短路电流检测的具体设定方法，请参考所使用驱动 IC 的数据手册或者应用笔记等资料。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pefzWXVqCbibKIulckO98km24SrmcDHRicTbmoiat59ic3U5qvDh79FrI3WQ/640?wx_fmt=png&from=appmsg)

**5.10.2  具有电流检测端子的 MOSFET 的短路保护**

图 5-12 所示为具有电流检测端子的 MOSFET 或者 IGBT 的电流检测电路。流过电流检测电阻 RSENSE 的电流，是流过漏极\-源极之间电流的例如 1000 分之一，是按照晶胞数量成比例地缩小的，因此即使对于大电流也可以抑制电流检测电路产生的功率损耗。但是，有可能同时检测到桥式结构中由于反向恢复电流等所产生的噪声成分，因此需要根据电路动作条件，使用 RC 滤波器等除去噪声。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peY82mNiamc2HrCeOiaha90NGOklnJV9Ye6I8WZ2ydjSjadibl6K3KQXlTA/640?wx_fmt=png&from=appmsg)

**5.11 推荐 Layout**

目前为止说明过的栅极驱动电路的功能有以下几个：

 栅极电阻（调整开关速度）

 缓冲电路（增强栅极驱动能力）

 栅极浪涌保护（保护 MOSFET 栅极）

 MOSFET 短路保护（防止过流时发生损坏）

 驱动用电源

以上所有必要的电路器件必须全部安装在印刷电路板上。虽然理想情况是把所有的功能器件都紧靠 MOSFET 进行安装，但是需要确定基板 Layout 布局时的优先顺序。

另外，根据所使用器件的特性和电路拓扑，产生的栅极浪涌的大小和对策的优先顺序也会发生变化，因此在探讨 MOSFET 外围电路的 Layout 设计时，需要仔细考虑应该尽量减小哪种功能的布线电感。电路拓扑的分类方法，可以根据 MOSFET 的结构和开关动作进行区分。也就是说，可以大致分为使用单个 MOSFET 的单端结构（Single）和将 MOSFET 进行上下串联后使用的半桥结构（Half Bridge），其中，按照 MOSFET 的开关动作方式，又可以分为硬开关方式（Hard Switching）和软开关方式（Soft Switching）。

在半桥结构中，非开关侧 MOSFET 会受到开关侧 MOSFET 动作的影响，而在单端结构中仅使用单个 MOSFET，因此只需要考虑自身的开关动作就可以了。

另一方面，使用每一代产品时的必要功能是不一样的。这是因为每一代产品的开关特性和栅极额定电压范围是不同的。

表 5-3 列出了使用不同世代的器件和电路结构时，必要功能和 Layout 的设计方针。根据下表的顺序来决定对策器件的优先级，应该既可以在产品的额定范围以及进行使用，也可以实现高效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peiaHgGJqvX5oaF8aWXWp8WIlIJTpT7pibPe1M9YphxkibSEumQ7ic1P7VoA/640?wx_fmt=png&from=appmsg)

图 5-13 是 SiC MOSFET 的半桥评估基板（P02SCT3040KR-EVK-001）的 Layout 示例。同一个图中的（a）是驱动电路图，（b）是基板安装照片，（c）和（d）是基板布局的 Layout 图。该基板是用来评估第三代 SiC MOSFET 硬开关动作的基板，因此栅极浪涌对策最为重要。所选用的驱动 IC（BM6101FV-C）具有对有源钳位 MOSFET 进行控制的信号，因此将有源钳位 MOSFET（Q2）布置在了距离 SiC MOSFET 最近的位置，并且配置了用于吸收负浪涌的二极管（D3）和旁路电容（C3）。其次，虽然在 Layout 设计中布置了用于吸收正浪涌的二极管（D2）和旁路电容（C2），但是从驱动 IC 到 MOSFET 的较长布线的寄生电感所引起的正浪涌依然会发生，请根据 Layout 情况判断是否需要进行安装。最后，在栅极\-源极之间配置了误导通对策电容（C1）。浪涌吸收器件距离 MOSFET 越远，其保护效果就变得越弱，因此如图（c）所示，推荐在距离 MOSFET 的 2cm 以内进行布局。

另外，如图（d）所示，对于从 Driver Source 端子到驱动 IC 的返回线，在 Layout 设计时将整个驱动电路器件下方都布局成返回线区域，尽可能地使得驱动信号和浪涌保护电路不受外来噪声的影响是非常重要的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peKSMCU4gd0ZFMqqibuianWsndnb71UElfOH7X4rxMLu8xxmAAloUPF2lg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peMLRjCzialYVmQ2eMJsQsJ3XGAm8FJcGY59zIw5DvtTQt5iaRE4iaMRjuQ/640?wx_fmt=png&from=appmsg)

**5.12 MOSFET 串联・并联使用时的注意事项**

当对 MOSFET 进行串联或者并联使其同时工作时，由于不同器件之间肯定会存在特性偏差，因此几乎不可能使得每个器件都按照完全相同的时间点进行工作。因此，此时和 MOSFET 单独使用时有不同的注意点。

本节说明串联・并联使用的一般性注意事项，但并非推荐进行多个使用。请在确认能够安全工作的前提下进行使用。

**5.12.1 串联使用**

当器件上所施加的电压 VIN 超过器件的额定值时，为了使得每个器件所承受的电压减半，可能会把器件串联后使用（如图 5-14），但是需要注意，出于器件的特性偏差和基板布线电感等原因，器件上所施加的电压会发生不均衡现象。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peFPtJXqwiclkpEwg8SroogImqVgqZXdxHwpbHAyDXGz3JyS65VBmNU9g/640?wx_fmt=png&from=appmsg)

在接通电源的初始状态下（一次开关动作也没有进行过的状态），各个器件上所施加的电压和 Coss 成比例，但是一旦开关动作开始以后，由于关断时开关速度的偏差，器件上所施加的电压的不均衡现象会变得显著起来。关于开关速度偏差的产生原因，考虑主要是由以下几种偏差造成。

 MOSFET 的 VGS(th)

 驱动电路的能力（外接栅极电阻、布线电感）

 驱动电路的延迟

 MOSFET 的 Ciss、Crss、Coss、内部栅极电阻

图 5-15 是关断时 VDS 波形的仿真结果。（a）是仿真电路和动作条件 。（b）是 VGS(th)的偏差、（c）是外接 RG 的偏差、（d）是驱动电路的布线寄生电感的不同、（e）是驱动电路的延迟偏差、（f）是 CGD 的偏差、（g）是 CGS 的偏差，分别给出了这些偏差会对 Q1、Q2 的 MOSFET 的 VDS 波形产生什么样的的影响。如（e）所示，仅仅 5ns 的栅极驱动电路的延迟偏差，或者如（f）所示，MOSFET 的 CGD 的偏差都会使得 VDS 的不均衡现象变得显著起来，除此以外，VGS(th)和驱动电路的布线电感的影响也是绝对不能被忽略的。

由此，无论是哪种偏差都会对 MOSFET 的开关速度产生很大的的影响，当各个器件发生不均衡动作时，不仅开关损耗会变得不均衡，可能瞬时施加超过 VDS 额定值的电压使得器件的可靠性下降，最坏的情况可能会造成器件损坏。请在进行充分的偏差验证的基础上进行操作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pefkSNHuJkzgs0iaBrxibRZ9UogKSB3rqjwNYVN1TUoUV5aQwbapEJK0Pw/640?wx_fmt=png&from=appmsg)

**5.12.2 并联使用**

当流过器件的电流 ILOAD 超过所使用器件的额定值时，为了使得流过每个器件的电流 ID 减半，会将器件并联后使用。

图 5-16（a）是并联连接的示意图。为了抑制器件之间开关动作的偏差，对每个 MOSFET 分别连接了外接栅极电阻。当没有外接栅极电阻、直接进行驱动时，由于 MOSFET 的特性偏差和驱动电路的偏差，在开通和关断过渡过程中，非常容易产生电流不均衡现象。（Figure 5-16（b））

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peGSL48DHsMXIeVzP8NtJOaysfNl1DTcLxz1S41OD7S1YtbnjxXHpasg/640?wx_fmt=png&from=appmsg)

但是，即使连接了外接栅极电阻，由于器件的偏差和驱动电路的不均衡，同样会产生电流的不均衡现象。关于电流不均衡的产生原因，考虑主要是由以下几种偏差造成。

 MOSFET 的 VGS(th)

 驱动电路的能力（外接栅极电阻、内部栅极电阻、布线电感）

 MOSFET 的主电路的布线电感

 MOSFET 的 Ciss、Crss、Coss

 MOSFET 的散热条件（安装到不同的散热器上）

图 5-17 是开通时 ID 波形的仿真结果。（a）是仿真电路和动作条件。（b）是 VGS(th)的偏差、（c）是外接 RG 的偏差、（d）是驱动电路的布线电感的不同、（e）是 MOSFET 的主电路电感的不同、（f）是 CGD 的偏差、（g）是 CGS 的偏差、（h）是驱动电路中所包含的源极电感的不同，分别给出了这些偏差会对 Q1、Q2 的 MOSFET 的 ID波形会产生什么样的的影响。

从（b）和（h）可以明显地看出，当 VGS(th)的偏差越大、或者源极电感的偏差越大，开通时的 ID 不均衡现象也会变得越显著。另外，当（e）主电路电感的偏差、或者（f）MOSFET 的 CGD 的偏差较大时，ID 不均衡现象也有变大的倾向。

由此，并联使用的各个器件的不均衡开关动作，会导致瞬间流过过大的瞬态电流 ID，使得开关损耗增大。其结果不仅会造成件自身的发热増大而导致可靠性下降，最坏的情况可能会造成器件损坏。特别是当载波频率较高时，开关损耗处于相对较大的条件之下，请在进行充分的偏差验证的基础上进行操作。

另外，在稳定状态下，由于 MOSFET 的导通电阻 RDS(on)会随着温度升高而变大（参考第 3.5 节）， 流过各个器件的电流 ID 会进行自然均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peohibkypbznvKWmSZBaOC85W431qaXodbtSr13ITdFiatcwLb8HT4KWOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peLh5XjgTNVVegMPbavDVzXVo8FAdqRTU0iawcFE0rf2yibJOA4Px6FUVA/640?wx_fmt=png&from=appmsg)

另外，在并联使用时，栅极\-源极电压 VGS 可能会发生罕见的振荡现象。该振荡现象在 MOSFET 开通时或者关断时都有可能发生。如图 5-18 所示，该振荡现象是由于 MOSFET（Q1、Q2）之间的栅极电阻（RG\_EXT + RG\_INT）、驱动电路的基板布线电感 LTRACE、以及 MOSFET 的栅极\-漏极之间的寄生电容 CGD 或者栅极\-源极之间的寄生电容 CGS，在 Q1 和 Q2 之间形成了 RLC 谐振电路所导致的。当 MOSFET 之间没有特性偏差、驱动电路也完全相同时，并联连接的器件以及驱动电路可以同步工作，因此器件之间没有能量交换，不会引起谐振。但是，实际上述两者肯定会存在少许偏差，导致漏极电流 ID 产生不均衡现象，使得 LSOURCE 上所产生的感应电动势产生偏差。这样，在并联使用的各个器件之间的闭合回路中会存在能量交换，从而引起谐振。

在如图 5-18 所示的并联电路中，由于 MOSFET 的特性偏差和驱动电路的差异，当 MOSFET Q1 的 ID 比 Q2 稍微早些开始进行开通・关断动作时，开通・关断刚开始时 MOSFET 之间的谐振电流会沿着箭头方向流动。如开通时的图（a）所示，除了给 CGS 进行充电的电流（绿色）、还流过有以 LDAIN1 以及 LSOURCE1 的感应电动势为电源所产生的谐振电流（红色、蓝色），RG\_EXT 越小（dID/dt 会变大）、因为不均衡等所产生的谐振电流就会越大，越容易引起振荡。

另一方面，关断时图（b）中的谐振电路在驱动电路侧与 GND 相连，因此包含 LSOURCE 部分的谐振电路相互之间不会产生影响，只有 LDRAIN 的感应电动势所引起的谐振电路才会对 VGS 的振荡产生影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peX982yKkNkL7SH0hXXUyjZdOI43D0OY9VE1OIrOHdOGDhmLI38Pntag/640?wx_fmt=png&from=appmsg)

  

对于上述 VGS 振荡可以通过增大 RG\_EXT，或者在栅极端子附近插入磁珠进行抑制。一般来说，抑制 RLC 电路发生振荡的阻尼电阻的条件如以下公式（4）所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peyVvCugGyRYLianNzxmsNBdicHqPfznsgxicgCsxlNM0bbbibHGAdRG15Ug/640?wx_fmt=png&from=appmsg)

**6.SiC 功率模块的特征**

**6.1 SiC 模块的特征**

现在，对于大电流的功率模块，已经得到广泛应用的是由 Si 的 IGBT 和 FRD 组合而成的 IGBT 模块。ROHM 在世界上率先量产了搭载 SiC MOSFET 和 SiC SBD 的功率模块。通过使用 SiC 模块，可以大幅减小 IGBT 的拖尾电流和 FRD 的反向恢复电流所产生的开关损耗，因此可以获得以下效果：

1\. 通过减小开关损耗，改善电源效率并且简化散热系统（例：散热器的小型化、将水冷/强制风冷改为自然冷却）

2\. 通过工作频率的高频化，实现外围器件的小型化（例：电感和电容器等的小型化）  

在工业设备电源和光伏发电的功率调节器等应用中正在得到广泛应用。

**6.2  电路结构**

目前量产的 SiC 功率模块，包括可以构成半桥电路的 2in1 类型，以及可以构成斩波电路的 Chopper 类型。关于 2in1 类型，包括SiC MOSFET + SiC SBD 的类型，以及仅由 SiC MOSFET 所构成的类型，可以根据用途进行选择。图 6-1 是 C-type 模块的外观，图 6-2 是其内部电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peZZ1bGsw1nibYP9y3jCWpywaTtOmBWJ7juPvUcqsibGAtEjLOEk7sPX4A/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peficUIjQ2F4xEPeHbke1K7OEfY7pJppogyyvwNfjgRSnKQYhQibs4fNDg/640?wx_fmt=png&from=appmsg)

**6.3  NTC 热敏电阻**

对于具有热敏电阻的模块产品，可以对模块封装内部的温度进行检测。在热敏电阻的产品规格书中，规定了 25℃时的电阻值和温度系数 B 值，因此当温度为 T1 时，热敏电阻的阻值 Rth（T1）可以根据公式（5）进行计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peQIA2X7gCx7Pibu1mhtva9d7M30ammaGqchD5RLJDUNsjyiau2rz0GCgw/640?wx_fmt=png&from=appmsg)

Rth（T1）：一定温度条件下的热敏电阻的阻值

T0：为了计算热敏电阻的阻值所设置的基准温度 罗姆产品一般规定为 25℃

T1：检测到的热敏电阻的温度

Rth（T0）：基准温度条件下的电阻值

BT0/T1：热敏电阻所规定的常数（B 值）

该公式中的 B 值具有温度特性，严格来说不是恒定值。ROHM 的 SiC 功率模块将 B 值按照 25℃/50℃条件进行规定，因此热敏电阻的温度越是远离 50℃，其误差也会越大。

当需要得到不同温度条件下的电阻值时，可以参考图 6-3 进行大概计算。

但是，当使用模块内置的热敏电阻时，请注意以下几点：

 热敏电阻安装在绝缘基板上，不在散热路径上。（与半导体的 PN 结之间存在一定的热阻）

 根据外部散热条件不同，Tj-热敏电阻温度之间的关系会发生变化。（同上）

 无法检测瞬时温度。

图 6-4 是实现温度检测的参考电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peMqh2ia2O2cBdbCnSFy35eXxIjhqPxOfqOzaeIg4zboibO1PicftVOMwmw/640?wx_fmt=png&from=appmsg)

**6.4  功率模块的安装方法**

**6.4.1 散热器的安装**

功率模块具有专门用来进行冷却的散热板，安装时将螺丝按照一定的力矩拧紧进行安装。图 6-5 是功率模块的截面结构。从 SiCMOSFET 芯片到散热板（Base Plate）之间存在焊料、布线、绝缘基板等，因此在散热板上正确安装散热器是非常重要的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peCn7IicW2hos8TYz7kXKywUaLibBRLiasH3Jo2KhTQOhDApsLicNLGj1HMQ/640?wx_fmt=png&from=appmsg)

安装散热器（Heatsink）时需要注意散热板和散热器之间的贴合性，即平整度。功率模块的散热板看似表面平整，但在安装时会产生应力，实际上是翘曲的。图 6-6 是散热板的翘曲形状的示例。功率模块的长边截面的翘曲最大约为 38μm，会形成复杂的凹凸形状。因此，在将功率模块拧紧固定到散热器上时，散热板和散热器之间一定会产生间隙。另外，即使散热板作成单纯的凸型形状，当在模块或者散热器的安装界面处产生擦伤时，同样也会产生间隙。该间隙会妨碍功率模块向散热器进行散热，产生高于热设计中所设想的温度的发热。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peiadhaqEicSyOp98kFKhYuQD14TqQBZ99ib9iaCpzePmcTqFpA2G6MTZKJA/640?wx_fmt=png&from=appmsg)

因此，为了填补这个间隙需要使用绝缘导热片和导热硅脂。有以下几点注意事项。

导热片是固体形态很容易使用，但是安装时所需要的力矩强度较大（例如 8N・m），超过了功率模块的额定值（3.5N・m），在使用时要特别小心。另一方面，导热硅脂具有流动性，因此可以在功率模块的额定力矩強度范围以内进行使用，但是导热硅脂的涂抹厚度较难控制，另外由于温度变化硅脂会流动（挤出现象），结果会产生空洞和间隙，因此需要注意材料的选择。

关于使用导热硅脂的安装方法和散热效果，详细内容请参考应用笔记《提供最佳散热效果的模块安装方法》\*5。

**6.4.2 信号线的安装**

为了使功率模块进行开关动作、或者为了检测模块的内部温度，需要在功率模块的信号端子（图 6-7）上连接控制信号线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0per0yyUnhIp2V5uSexrnlZLsIa7N6SlTvAYcIIgZv9L9ibBQl7icvqAicgQ/640?wx_fmt=png&from=appmsg)

这些信号端子的连接方法，可以使用 PCB 进行焊接，也可以使用触头进行嵌合连接等，当对信号端子进行焊接时，在 PCB 上所需要准备的通孔直径的示例如图 6-8.（a）所示。

另外，当对信号端子进行嵌合连接时，可以使用如图 6-8.（b）所示的触头进行评估。但是，这类产品仅用来对功率模块进行性能评估，并没有实施与插拔次数、振动等相关的可靠性验证。当客户在最终产品上进行使用时，请一定要根据各种不同的应用，实施可靠性验证，然后判断能否使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe2qesYW7xx2BzpCFhKH4K2BZxX2PDmjHFBOrG4VTWGiaa6Z3xVj6gY5Q/640?wx_fmt=png&from=appmsg)

另外，当使用电烙铁进行手焊时，其焊接条件如下：

・ 电烙铁前端温度：400℃以下

・ 焊接时间：5 秒以下

**6.5  开关特性**

关于 SiC 功率模块（BSM120D12P2C005、1200V 120A、C-type 封装）的开关特性，使用如图 6-9 所示的电感负载进行了双脉冲测试的评估。模块内部的寄生电感大约为 25nH、电路的寄生电感大约为 15nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0petVsLgdanlm7jySw5grmhUMbkJkp2RdG4Z0b90uNxukCUzkC1SQTAjQ/640?wx_fmt=png&from=appmsg)

**6.5.1 漏极电流依存性以及温度依存性**

在 SiC 功率模块中，得益于 SBD（或者 MOSFET 体二极管）的快速反向恢复性能，反向恢复损耗 Err 几乎为 0。另外，因为MOSFET 没有拖尾电流，与 IGBT 相比 Eoff 也非常小。Eon 和 Eoff 几乎是随电流成线性比例增加的（不同于当外接 RG 增大时，损耗的变化斜率）。相较于 Si FRD 的反向恢复电流和 IGBT 的拖尾电流会在高温下变大的现象，由多数载流子器件所构成的 SiC模块在温度变化时，其损耗的变化非常小。在高温时阈值有所减小，因此 Eon 有变小、Eoff 有稍微变大的倾向。（图 6-10）.

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peNzDibcpfh9zf9dYzkzllMJ9C7yErddDtZHnWF0HCVAFjcBwG2pmEyqQ/640?wx_fmt=png&from=appmsg)

**6.5.2 栅极电阻依存性**

当外接栅极电阻较大时，给栅极充放电的电流值会变小，开关速度会变慢。这样会造成 Eon、Eoff 变大，可能无法发挥原有的器件性能，因此请尽量选择小阻值的栅极电阻。（图 6-11）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peDI0vM1j2JMyw2DFD0MJzVES3x8qFJUHktAjKwlEw90DU1wichDhDb6Q/640?wx_fmt=png&from=appmsg)

dV/dt、 dI/dt 的外接栅极电阻依存性如图 6-12、图 6-13 所示。通过减小外接栅极电阻，dV/dt、 dI/dt 都会有所增大。在各种条件下对 ROHM 的 SiC 功率模块进行了测试，到目前为止还没有发现 dV/dt 损坏、dI/dt 损坏的损坏模式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pefFCmqWibiaPRpwATPEluysVjrz9eiaubJBWHd5XdnRP6qQcbWib4JGDVkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peT66iceuMpjlymjnWHXtnLpo40xSiaCHD5H5luBvdSDpotgyzWzudNwdQ/640?wx_fmt=png&from=appmsg)

**6.5.3 栅极偏置依存性**

对于使用第二代 SiC MOSFET 制作的模块，其 VGS 的额定范围是\-6～+22V。另外，同时规定了 VGS 的额定浪涌范围，按照脉冲宽度 tsurge 小于 300ns 的条件规定为\-10~+26V（图 6-14（a））。另外，推荐的驱动条件是 VGS(on)=18V、VGS(off)=0V，当使用负偏压时最低为\-5V。同时，VGS(on)、VGS(off)的绝对值越大，栅极的充放电越快，Eon、Eoff 有变小的倾向。

另一方面，对于使用第三代 SiC MOSFET 制作的模块，其 VGS 的额定范围是\-4～+22V，额定浪涌范围是\-4V~+26V（图 6-14（b））。推荐驱动条件为 VGS(on)=18V、VGS(off)=0。

第二代、第三代模块对于超出额定范围的浪涌均不做保证，因此请在额定范围以内进行使用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peFL4GwMWq2yFeFDiaIicoBroXELzSjoLCU6XA4wicurlNpZBS71RM4oTpw/640?wx_fmt=png&from=appmsg)

**6.6  与 IGBT 模块的开关损耗对比**

以下是三家不同公司的 1200V 100A 等级的 2in1 结构的 IGBT 模块和 SiC 功率模块的开关性能的对比结果。

**6.6.1 总开关损耗的对比**

当选择了合适的栅极电阻时，SiC 功率模块和损耗最小的 IGBT 模块相比，总开关损耗（Eon + Eoff + Err）可以减小 85％（图6-15）。由此，可以实现以往 IGBT 模块所无法实现的 50kHz 以上的高频驱动，可以实现电感等被动器件的小型化。另外，通常IGBT 模块存在开关损耗引起的发热问题，只能按照额定电流一半左右的电流进行使用，但是使用开关损耗较小的 SiC 模块即使在高频驱动时也无需进行大幅的电流降额。也就是说，可以替换额定电流更大的 IGBT 模块。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0petx9LSibvqJXicHD15jLNjiaGNldIdVB1ibA5fuafQrDJGCwdbDdhATVbaA/640?wx_fmt=png&from=appmsg)

**6.6.2 反向恢复损耗（Err）的对比**  

在 IGBT 模块中，FRD 的反向恢复峰值电流 Irr、反向恢复时间 trr 都较大、因此会产生较大的损耗，但是 SiC SBD 的 Irr、trr 都非常小，损耗小到可以忽略不计（图 6-16）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peiceQ38G6taNG1IQAqP81qr0J0QeLriadp87yAiawvRD6LTaQGibJ7sgB4g/640?wx_fmt=png&from=appmsg)

**6.6.3 开通损耗（Eon）的对比**  

在续流桥臂上所产生的反向恢复电流会在与之相对应的另外一个桥臂上产生直通电流，因此会造成开关动作器件的开通损耗有所增大。对于具有二极管快速反向恢复特性的 SiC 功率模块，其开通损耗和反向恢复损耗一样都有所减小。外接栅极电阻越小，则损耗越小（图 6-17）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe1uLpwsnzx2lGHoK7GPYtapxVQ27e6G5SwrTRWmR0IxZiaAq2VJTRXFg/640?wx_fmt=png&from=appmsg)

**6.6.4 关断损耗（Eoff）的对比**  

IGBT 的关断损耗是由拖尾电流所产生的，因此其栅极电阻依存性并不明显，损耗一直很大。与此相对应的，SiC MOSFET 在原理上不存在拖尾电流，因此可以实现非常快速、低损耗的开关动作。外接栅极电阻越小，则损耗越小（图 6-18）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe9wwicXMkFwwbKlHcQoUC8gyrTU8N5omFIoADC8QS2o4UicoGxcEblcMA/640?wx_fmt=png&from=appmsg)

**6.7  误导通对策**  

在半桥结构中，当上桥臂的 MOSFET（M1）开通时，下桥臂的 MOSFET（M2）的续流二极管（外接 SBD 或者体二极管）中所流过的正向电流发生反向恢复，同时 M2 的漏极・源极之间的电压上升。此时产生的 dVDS/dt 通过 M2 的米勒电容 Crss 产生栅极瞬态电流（IG=Crss×dVDS/dt）、该电流流过栅极电阻，使得 M2 的栅极电压被抬升（图 6-19）。当该电压大幅超过栅极阈值电压 VGS(th)时，MOSFET（M2）会发生误导通，上下桥臂形成短路状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe6LyBzOgZduzSiblE0oN5X6icNMNDqV02yVpmHxs3bicckw9Gp2Jl9Gqcw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的 VGS(th)是按照 ID=几 mA 时所定义的，值比较小大约为 3V 左右，为了流过大电流，所需要的栅极电压为 8V 以上值比较大，实际上对于误导通的耐性和 IGBT 相差不大。但是，当所使用的环境条件可能发生误导通时，和 Si 功率模块一样，推荐采取以下对策。这些对策可能会对开关过程产生影响，因此请在确认实际波形的基础上进行调整。关于使用有源钳位抑制误导通的对策，详细内容请一并参考应用笔记《使用有源钳位的误导通对策》\*6。

・ 加大关断时的负偏压（只有第二代 MOSFET 可以使用）  

・ 在栅极\-源极之间追加电容  

・ 在栅极\-源极之间追加晶体管（通过有源钳位 MOSFET 对 G-S 之间进行钳位）  

・ 增大栅极电阻，降低开关速度  

**6.8  RBSOA （反向偏置安全工作区）**

SiC 功率模块的 RBSOA（Reverse Bias Safe Operating Area：反向偏置安全工作区域）和 IGBT 模块一样，覆盖了 2 倍额定电流×额定电压的全范围（图 6-20）。

另外，这里所说的 Drain-Source voltage 指的是芯片附近的值（VDS\_INT）、不是封装端子电压（VDS）。请根据各个功率模块所规定的寄生电感 Ls 和实际波形的 dID/dt，按照公式（5）计算出 VDS\_INT。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pePZWgACQtzdkgHlzUD7sWGFVB7MPM4qNKibAwYicicw9TOaTGqicqG0iaOsQ/640?wx_fmt=png&from=appmsg)

**6.9  二极管在小电流、窄脉宽通电时产生的 VDS 浪涌**

Si FRD 在通电时间短、并且电流较小的时候，由于漂移层内所积聚的少数载流子变少，反向恢复过程中的 di/dt 会变大，产生如图 6-21（a）、（b）的黑线所示的较大的浪涌电压。MOSFET 的开通速度越快，由二极管所产生的浪涌电压也会越大，可能造成器件损坏和噪声干扰，因此需要将开通速度限制得比较缓慢。另一方面，SiC SBD 不使用少数载流子，其反向恢复电流非常小，因此即使在如图（a）、（b）中红框所示的小电流・窄脉宽的条件下，也不会产生大的浪涌电压。无需限制 MOSFET 的开通速度，因此可以减小开关损耗。图 6-22 是当二极管工作在窄脉宽条件下的 VDS 浪涌波形的对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pebbquEFUdUaB8CvjA6ouGK4xW5QWy9oYJIPBCdVPNibibHt777c33ia6lQ/640?wx_fmt=png&from=appmsg)

**6.10  G-type 功率模块**  

一般来说，出于尺寸较大和内部结构的原因，功率模块的寄生电感较大。布线等的寄生电感在开关电流有较大的 dID/dt 时会成为产生浪涌电压的主要原因，因此希望尽可能地减小寄生电感。

ROHM 开发了极力减小内部电感的 G-type 功率模块。而且该模块还改善了热阻 Rth，通过提高散热性能使得容许电流得到了倍増。图 6-23 是各种封装模块的外观和内部电感的概略值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pevL0tVX3kU1icAvdHibUhgxEbPeNX2icdGyX8DBiaOJibBHoTKZlyAroaDMA/640?wx_fmt=png&from=appmsg)

图 6-24 是关断时 G-type 和 E-type 的 VDS 浪涌的对比结果。G-type 减小了内部电感，因此在相同驱动条件下，可以抑制浪涌电压的产生。换个角度来看，当按照浪涌电压相同的开关条件（减小 G-type 的外接栅极电阻）进行动作时，与 E-type 相比，可以使损耗减小大约 25%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pefqlClBFJC3fVYo8icbQOF41lzVLMFqaJBFr3gl2LyjYYDtrjCpXKPbw/640?wx_fmt=png&from=appmsg)

**7\. 模块评估基板**

**7.1  用于 SiC 功率模块的驱动板**

表 7-1 是 ROHM 发布的适用于 SiC 功率模块的驱动板的一览表。驱动板按照标准配置具有模块的基本驱动功能、以及驱动电路的隔离电源、过流保护电路等，因此只需要准备单一控制电源即可驱动功率模块。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peytoamj8nqvugurDD1cDVVb7ZdbibGYzHOBqbFxMGqay8NkYDicg3cTCg/640?wx_fmt=png&from=appmsg)

另外，以上驱动板是按照短期评估为目的进行开发的，因此对于产品可靠性、适当的爬电距离等并不做保证。当直接套用电路图和基板 Layout 时，务必请客户自己进行可靠性验证。

**7.2  浪涌电压的对策**

SiC 模块的开关速度快、电流大，在模块内部或者外围配线电感 LLINE 的影响下，会产生浪涌电压 VSURGE = -LLINE×dID/dt，根据使用条件不同，有时可能会超过额定电压。

为了抑制该现象，和 Si 功率模块一样，推荐采取以下对策。但是，这些对策可能会对开关特性造成影响，因此请在确认波形的基础上，对实际电路进行调整。

 将主电路（以及缓冲电路）的配线设计得尽可能宽并且短，减小布线电感。

 将平滑电容器的安装位置靠近 MOSFET 进行布局，减小布线电感。

 追加缓冲电路（Snubber 电路）。

 增大栅极电阻，减小 dID/dt。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peyQqGNLncL2hSLZkBvb3CZ9iaoFbz7QZT2RZ4G4GJkcia8qVA4F6vqtibg/640?wx_fmt=png&from=appmsg)

图 7-2 是在有无 C Snubber 电路、以及在缓冲电路中使用不同类型的电容器时，VDS 波形的差别。通过安装合适的陶瓷电容，可以抑制浪涌电压和振铃。如图 7-3 所示，ROHM 准备了最适合于评估快速开关动作的 SiC 模块的缓冲电路板。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peyC4dR8lePWj6Hh4fbbghXFcib3SSR0OraZ8c1t478dicG2Tozj1vkC1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peDsA9LRQ7iaviaHzHSnC8ez9SmKgnQapIXSc8FvQ7bqNZfdbw4tkoibRHQ/640?wx_fmt=png&from=appmsg)

**8\. 可靠性**  

SiC 功率器件一般被应用于产品寿命较长的工业设备等，因此器件性能需要得到长期的维持。另外，经常需要在承受非常大的热应力和电应力的环境条件下进行使用，因此必须在各种条件下进行充分评估，确保达到所要求性能的维持时间（寿命设计）。理想的方法是在使用环境中，在器件需要承受的应力条件下进行可靠性评估，但是对于产品寿命十年以上的产品，在完全相同的条件下进行评估是无法实现的，一般会通过加速试验等进行代替测试。此时，正确把握使用环境、设置加速条件等是非常重要的。

在本章中，将针对每种器件分别说明特别需要注意的可靠性测试项目。另外，对于一般性的可靠性测试的试验项目，按照《JEITA 标准 ED-4701》以及《JEDEC 标准 JESD22-A102》的标准进行实施。

**8.1  SiC SBD 的可靠性**

**8.1.1 dV/dt 损坏、dI/dt 损坏**

当施加较大的 dV/dt 时，SiC SBD 的外围结构会被破坏，这种损坏模式在以往的产品中得到过确认，但是对于 ROHM的 SBD，目前为止的调查是即使在 50kV/μs 左右的条件下进行工作时，也没有确认到该损坏模式。

另外，当 Si FRD 的 di/dt 较大时，反向恢复电流 Irr 会变大，存在电流集中导致破坏的损坏模式，但是 SiC SBD 的反向恢复电流非常小，该损坏模式也难以发生。

**8.1.2 SiC SBD 的可靠性测试结果**

表 8-1 是通孔安装型产品、表 8-2 是表面贴装型产品的可靠性测试结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peWCj0YOMCT51mszLdP9b5DcO25jZh3LAjQdYPEFXooCMV643iayeBZmQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peE9SdbrPZbAYmSYzxfDTuh8VR99nuFn08yibKGUDUoiah1ZsBibsU2vsIA/640?wx_fmt=png&from=appmsg)

**8.2  SiC MOSFET 的可靠性**

SiC MOSFET 相比于 SBD 来说芯片结构复杂，因此必须在设想的各种各样的热应力、电应力、机械应力等外部应力条件下进行可靠性测试。另外，在实际使用情况中，应力因素又多是复合型的，尽可能地接近实际使用条件进行评估是很重要的。

在本节中，关于 SiC MOSFET 的可靠性，将与具有长年的市场经验业已成熟的 Si MOSFET 进行比较，同时说明其实力。

**8.2.1 栅极氧化膜**

SiC 上所形成的栅极绝缘膜多年以来一直被怀疑存在可靠性问题，但是 ROHM 通过不断地进行栅极氧化膜生长工艺的开发、以及器件结构的最优化，已经达到了目前得到广泛应用的 Si MOSFET 和 IGBT 同等的品质。

图8.1 是 CCS TDDB （Constant Current Stress Time Dependent Dielectric Breakdown）的测试结果。CCS TDDB 测试是强制性地在栅极氧化膜上通过隧穿电流，确认当单位面积通过多大的电荷量时会发生故障的判定试验。作为栅极氧化膜品质指标的 QBD 是 15～20C/cm2，可以得到与 Si MOSFET 同等的强度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pej4hJOzcU93xxPTRYbwyT7woib2Xv7Xc7mVfPiczVsquyum9aonLRyRpQ/640?wx_fmt=png&from=appmsg)

即使栅极绝缘膜的品质很高，在 SiC 晶体中仍然会存在很多晶体缺陷，这些晶体缺陷有可能导致器件发生初期故障。ROHM 通过采用独特的筛选技术，努力使这些初期故障不流向市场。

HTGB（High Temperature Gate Bias：高温栅极偏压）测试（+22V、150℃/175℃）的结果是，总计 3000 个以上的器件在测试 1000 个小时以后，没有发生故障也没有特性变化，顺利地通过了测试。另外，也确认过总计 600 个以上的器件毫无问题地通过了 3000 个小时的测试。

**8.2.2 阈值稳定性（栅极正偏压）**

以目前的技术水平，在 SiC 上所生长的绝缘膜的界面处会形成陷阱，当施加长时间的栅极直流正偏压时，因为在陷阱中捕获了电子，阈值电压会上升。但是该阈值漂移现象在 VGS=+22V、150℃的条件下，经过 1000 个小时以后偏移量非常得小，只有 0.2～0.3V，是业界最小水平。绝大多数陷阱在施加应力的初期阶段的几十个小时以内就被填充完毕了，因此之后不会再有变动，非常地稳定。图 8-2 是第二代 SiC MOSFET 在 VGS=22V 时的测试结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe3e9fia13ibt4nIgXwfyYOebemWrmzFF8URYzlgdYb6IoM87aTddEib82g/640?wx_fmt=png&from=appmsg)

**8.2.3 阈值稳定性（栅极负偏压）**

当施加长时间的栅极直流负偏压时，因为在陷阱中捕捉了空穴，阈值电压会下降。对于第二代 SiC MOSFET，此时阈值电压的变化程度大于正偏压时的变化程度，当 VGS 低于\-10V 时，阈值电压会下降 0.5V 以上，因此将栅极负偏压的保证电压规定在了\-6V。当所施加的负偏压低于保证电压时，会发生大幅的阈值电压下降，请不要将器件使用在该条件下。

图 8-3 是第二代 SiC MOSFET 的 VGS(th)的可靠性测试结果，可以看出，只要是在保证电压\-6V 以内，阈值电压的漂移量可以被抑制到最小范围以内。

另外，当施加正负交替的交流偏置时，因为向陷阱进行反复地充电和放电，阈值偏移的影响较小。

另一方面，对于采用沟槽栅极结构的第三代 SiC MOSFET，其相对于直流负偏压的耐受程度有所提高，即使施加\-10V的直流负偏压，阈值电压也几乎不会下降。但是，如下节所要说明的，相对于交流的栅极偏置，会产生新的制约条件，必须加以注意。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pejv7ibicQHvxecpC9yKQuWNSpY9oIYhS50JMtDsZm95cRrGCCBlElNXTg/640?wx_fmt=png&from=appmsg)

**8.2.4 阈值稳定性（第三代 MOSFET）**

如第 5.5 节所说明的，第三代 SiC MOSFET 的栅极电压额定范围与第二代相比变窄了，当以负偏压低于额定值（\-4V）的状态进行栅极交流驱动时，会发生阈值电压 VGS(th)逐渐上升的现象。在 VG\_P=22V、VG\_N=-4V~-10V 的条件下，施加300kHz（Duty:50%）的驱动脉冲，结果是当负偏压为\-4V 时没有问题，当负偏压为\-6V～\-10V 时 VGS(th)会急剧增大。是否会发生阈值漂移几乎不受 Duty 和正偏压大小的影响，仅由负偏压的大小（是否低于\-4V）所决定。在发生阈值漂移的条件（\-6V～\-10V）下，发生漂移的速度依赖于所施加的正负偏置的次数，因此开关频率越高，漂移现象出现得越快。

当阈值电压上升较严重时，Ron 也会上升。另外，对于开关损耗来说，有 Eon 增大、Eoff 减小的倾向。虽然总的开关损耗不会发生大的变化，但是开通损耗和关断损耗的比例会发生变化，需要引起注意。导通损耗和开关损耗发生变化的结果，可能造成发热量增大，在最坏的情况下可能发生器件损坏，因此强烈推荐包含浪涌在内，一定要在额定范围以内使用器件。为此可以采取的对策方法，请参考第 5.9 节内容或者应用笔记《栅极\-源极电压的浪涌抑制方法》\*2。

**8.2.5 短路耐量**

与 Si 器件相比 SiC MOSFET 的芯片面积小、电流密度高，因此对于热破坏模式的短路耐量来说，具有低于 Si 器件的倾向。对于 TO247 封装的 1200V 第二代 MOSFET，当 Vdd=700V、VGS=18V 时，其短路耐受时间为 10μs 以上，具有充分的耐量水平。在较低的栅极电压条件下饱和电流会变小，因此发热量会较小，耐受时间会变长。另外，在较低的电源电压条件下发热量也会减小，耐受时间变长。因此，对于 1200V 产品和 650V 产品来说，650V 产品的短路耐受时间更长。

第三代 MOSFET 的 RonA 更小，因此短路耐受时间变得更短，即使如此 1200V 产品、650V 产品也都确保短路耐量的典型值为 5μs 以上。但是，对于分立器件 SiC MOSFET 的短路耐量，没有通过测量等做全数品质保证。

ROHM 的栅极驱动 IC 是当检测到过流时，可以在大约 2μs 左右进行关断的内置隔离元件的 IC，具有软关断等功能（详细内容请参考各个产品的数据手册）。SiC MOSFET 关断时所需要的时间非常短，因此当 VGS 的关断速度非常快时，可能会因为急剧的 dI/dt 而产生较大的浪涌电压。请利用使栅极电压能够逐渐降低的软关断功能等手段，在不产生过电压的条件下使器件关断。

**8.2.6 dV/dt 损坏**

对于 Si MOSFET，存在较高的 dV/dt 通过电容 CDS 耦合产生瞬态电流，使得寄生双极晶体管导通而发生损坏的模式。

对于 SiC MOSFET，寄生双极晶体管的电流增益 hFE 较低，因此认为难以发生电流放大现象，截至目前的调查中，即使在50kV/μs 左右的条件下工作，也没有确认到该损坏模式。

即使在体二极管的反向恢复过程中，因为 SiC MOSFET 的反向恢复电流非常小，反向恢复时的 dI/dt 较小，结果使得dV/dt 无法变大，因此认为该损坏模式难以发生。

**8.2.7 由宇宙射线引起的中子耐量**

由宇宙射线所引起的偶尔射入地面的中子和重离子等发生撞击时所导致的损坏模式（单粒子烧毁现象 SEB: SingleEvent Burnout），被认为是高压功率元器件的偶发故障的主要原因。特别高原和海抜 0m 的地点相比，中子浓度会高达 10倍以上，容易发生问题。另外，对于功率模块等使用多个大尺寸芯片的应用场景，产品整体的偶发故障率容易变高，因此需要尽可能地选用故障率低的元件。

图 8-4 是 1200V 第三代 SiC MOSFET 和普通 Si IGBT 相比，当施加不同的 VDS 时，接受模拟大气光谱的中子辐射测试的结果（每个点的样品数 n=10 左右）。故障率和施加电压呈强相关性，因此对于 IGBT 来说，额定耐压 1200V 的产品如果不降额到 60%左右（720V），无法在较低的故障率下进行使用。另一方面，SiC MOSFET 的故障率比 Si IGBT 低 4 位数以上非常得低，即使当 VDS=1200V（100%额定耐压）时，故障率也在 1FIT 以下。原因包括 SiC 芯片比 Si 器件小从而被中子击中的概率较低，以及 SiC 的耐压实力值较高具有充分的余量等。这样，SiC 器件无需进行大幅的电压降额，就可以无限减小在高原使用、或者多芯片使用的产品中，由宇宙射线所引起的偶发故障的风险。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peviahywIkyxt0taPkfO83gCCSKAoMdj3Tn9NGQb147DiaQBeoXfBlibTZw/640?wx_fmt=png&from=appmsg)

**8.2.8 静电破坏耐量**

SiC MOSFET 相对于 Si 产品，它的特点是芯片尺寸可以做得较小。但是相反的，静电破坏耐量也会变低。请采取充分的静电防护对策，在使用时多加注意。

静电防护对策示例

 通过静电消除器去除人体、器件、操作环境的静电 （推荐）

 通过静电手腕、接地，去除人体、操作环境的静电

（对于器件带电没有效果，因此仅使用该对策是不充分的）

**8.2.9 功率循环的注意点**

当以几 ms～几秒为单位使 MOSFET 工作在动作・不动作的状态时，虽然壳温 Tc 看起来是一定的，内部芯片的结温 Tj可能按照一定的幅值进行温度变化（⊿Tj）。由于源极键合引线和 SiC 芯片之间的线膨胀系数不一样，像这样的短周期所导致的⊿Tj 会在键合面上会产生热应力。并且，当超过一定的⊿Tj 循环次数以后，如图 8-5 所示，在键合界面上会产生裂纹，造成键合强度下降。最终，由于源极引线剥离、键合面的接触电阻增加等原因，导致 RDS(ON)増加、发热量増加，造成功率器件发生损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peNo9OZ6Yd8WSh6WucxMDvZdXtHr3fu5icFicYrZvmGuBSFhqicP54bLiaCQ/640?wx_fmt=png&from=appmsg)

对于源极引线的功率循环耐量，随着⊿Tj 的增大，使用寿命存在指数性减小的倾向。为了确保 10 年以上的产品寿命，在设计阶段必须采取充分的措施减小⊿Tj（调整驱动条件、选择 Ron 较低的元件等）和充分的散热设计。

另外，作为一般性可靠性测试项目的温度循环（TCY）、断续通电（IOL），由于存在几分钟～几小时的壳温摇摆（⊿Tc），主要在 SiC 芯片背面的焊料处产生裂纹。以上故障模式和⊿Tj 导致键合引线剥离的功率循环（PCY）是不一样的故障模式，应该区分看待。

**8.2.10 SiC MOSFET 可靠性测试结果**

表 8-3 是可靠性测试结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peaktEBgdRkibAqO8JwXyF3W7Yz3TlvZb7s8EEJMtq29TSBTeXUcz7ibAg/640?wx_fmt=png&from=appmsg)

**8.3  SiC 功率模块的可靠性**

与分立器件产品相比，SiC 功率模块处理的功率更大、外形尺寸也更大，因此除了热应力和电应力，也更容易受到机械应力的影响。判断设备在达到预期寿命之前，能否维持所要求性能的可靠性测试就显得尤为重要。

功率模块的磨损故障包括以下几种模式，一般会通过功率循环等综合性评估来确认产品实力值。

 底板的焊料裂纹

 芯片的焊料裂纹

 键合引线剥离（焊点脱落、焊线根部断裂）

 芯片金属化层的劣化等

**8.3.1 功率循环**

对于一般性的功率模块的结构来说，在工作中当芯片温度发生变化时，由于键合铝线和 SiC 芯片的线膨胀系数有差，从而产生热应力，使得引线键合面产生裂纹。该裂纹不断发展，最终会以剥离模式产生故障。

在实际应用的动作条件下，如图 8-8 所示，模块的壳温 Tc 多发生相对缓慢的长周期的温度变化，而结温 Tj 有可能出现急剧且短周期的循环变化。短周期循环的主要原因，包括设备的加速减速动作、根据电路拓扑的工作原理一直发生等不同的情况，另一方面，长周期循环主要是由设备的起动・停止所造成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe4FEEN1KiaPgPtVZtFiaHD5mO9P7CmvX07Nu7KJ6BsPIPBg1DBD5TZmNg/640?wx_fmt=png&from=appmsg)

以上功率循环寿命是在设备设计阶段开始就需要进行充分考虑的。特别是出于电路拓扑原因产生的短周期循环会造成循环次数飞跃性地增加，必须加以注意。

图 8-6 是一般性地功率循环寿命曲线。该图给出了平均结温 Tj 为 100℃的条件下，当故障率为 1%时的循环次数曲线，随着⊿Tj 增大，功率循环寿命会呈指数系数减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pegxmFDbIE6nBmtnic8Sfk7DKs6nDRydhLBCBkePibICGUZh6RduJwBQKg/640?wx_fmt=png&from=appmsg)

**8.3.2 HV-H3TRB （高压高温高湿反偏测试）**

HV-H3TRB（High Voltage High Humidity High Temperature Reverse Bias：高压高温高湿反偏测试）是评估功率器件在高温高湿环境下使用时的耐久性试验，是判断在高温高湿地区的室外等严酷环境中进行使用时，器件能否长期耐久的指标之一。一般来说，在功率模块内部会使用硅胶作为芯片的绝缘材料，但是硅胶容易吸湿，当含有水分后将无法继续承受高压，导致漏电流增加、绝缘损坏等故障发生。

ROHM 的 1700V 耐压的 SiC 模块为了防止芯片受潮，导入了新的涂层材料和新的工艺方法，通过了 HV-H3TRB 测试。在 85℃／85%的高温高湿环境中，施加 VDS=1360V 的高压进行高压高温高湿反偏测试时，IGBT 模块在 200 小时以内就发生了绝缘损坏，另一方面，SiC 模块（BSM250D17P2E004）即使测试了 1000 小时以上也没有发生故障，证明其可靠性更高。（图 8-7）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pee3oU2axp1vjiaOds0197Wia7qJSOanzSyXmgWb3NKGZT4yziaibVvV9tgw/640?wx_fmt=png&from=appmsg)

**8.3.3 SiC 功率模块的可靠性测试结果**

表 8-4 是 SiC 功率模块的可靠性测试结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pedXRsiarWwganBqEBMbSa07O5j4fOMKhdHWcQNsLevGRic9VZrHmINXDg/640?wx_fmt=png&from=appmsg)

**9\. 产品名称的构成**

9.1  SiC SBD（分立器件产品）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peBe1DkYOic5FoEpAT1pPSyKq6sqL4BMLquYIJrYWRhnX0VkktwZkUgBA/640?wx_fmt=png&from=appmsg)

9.2  SiC MOSFET（分立器件产品）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peYiaMHCau9AKN4TYCZ7Xdty79anNEuqCEIZicrOJ6ib77aJ7wgsyRVPngA/640?wx_fmt=png&from=appmsg)

9.3  SiC 功率模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pedNaJS1xNNE8dwhU3mjC8yibtYQiconXjpfkktdzTx5SrIFwhQibckeBmw/640?wx_fmt=png&from=appmsg)

9.4  SiC SBD（裸片产品）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pepEYFWqMkkFVqhBqZx7vwM311nL68smZHmibHCEzoYvjQg4iaOP3EibBOw/640?wx_fmt=png&from=appmsg)

9.5  SiC MOSFET（裸片产品）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peeb7hPI2tlfdjqEStq0ibKyib0gNPUicU8Se6DrpiclxicPic8qvcqPSpkSUA/640?wx_fmt=png&from=appmsg)

**10. 应用电路示例**

**10.1 功率因数校正（PFC）电路、boost 斩波**

・通过减小反向恢复电流，改善效率、降低噪声水平

・通过减小二极管 Err、开关侧 Eon，实现高频驱动→被动器件的小型化

\*临界模式 PFC 不受反向恢复损耗的影响，没有太大效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe6zXW0qRRgKngvxcJ7evmjVvjKbtIYJ8IP3niaiayvl3ufDnJztiaoq26Q/640?wx_fmt=png&from=appmsg)

**10.2 降压斩波**

・通过减小 Eoff，改善效率、简化散热器

・通过高频驱动，实现被动器件的小型化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peYgRj95pzsTK8Skqesox4mzrfia5gxEoKnFiba9FGp7eYzcGxsLgCUwicg/640?wx_fmt=png&from=appmsg)

**10.3 升压斩波**

・通过减小 Eon、Err，改善效率、简化散热器

・通过高频驱动，实现被动器件的小型化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe9DrjQFiaiaq4HQQXSQ8QCA27ZJ2Zu07Y01xpR4GbOhJmLPqg7zaddia3Q/640?wx_fmt=png&from=appmsg)

**10.4 图腾柱 PFC**

・通过减小 Err、Eon，改善效率

・通过高频驱动，实现被动器件的小型化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe2A1KT9KFdvG6Jx5sHZficJbTTGZz4xZVBxys6ov3Fz7tEOxEpMOX7qg/640?wx_fmt=png&from=appmsg)

**10.5 反激式转换器**

・通过减小导通损耗，改善效率、简化散热器

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pest2hr3jicdRyicGdX94qoUmIQibIBNNfwyxpwxPH1Lia6wcJj1cgNUEsVw/640?wx_fmt=png&from=appmsg)

**10.6 DC/DC 转换器（软开关类型）**

・通过减小 Eoff，改善效率、简化散热器

・通过减小 Eoff，实现高频驱动→变压器的小型化

・防止谐振型电路在偏离谐振点工作时发生损坏

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe4WKXdMicpPC9Z0E7WDG4nxyjNSlvrej2FLg8UcnBQywpUef7oa3ciafw/640?wx_fmt=png&from=appmsg)

**10.7 用于功率调节器的逆变电路**

・通过减小 Eoff、Err、Eon、导通损耗、以及轻载时的导通损耗，改善效率（增加售电功率）

・散热器的简化・小型化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peROhqkAfIImq1pJiavOibibicPU9UVM2ibX87Ht9TeJLp96iboiaL1w3vDia1YQ/640?wx_fmt=png&from=appmsg)

**10.8 用于 IH 的逆变电路**

・通过高频化，扩大加工对象的范围

・通过减小 Eoff、Err，改善效率、简化散热器

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0peLRbFedmkBXvHc878t0lEboWiam2Ub5j2rA3F6lhjAoQM2NePDbzKowQ/640?wx_fmt=png&from=appmsg)

**10.9 电机驱动**

・通过减小 Eoff、Err、Eon、轻载时的导通损耗，改善效率、简化散热器

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pePesWD3Y54un025WxSUs804yYiaW8Rq1OAYUibtZ6aCtWPzpfMcslw1Ww/640?wx_fmt=png&from=appmsg)

**10.10 继电器**

・减小导通电阻、小型封装

・相对于机械式继电器，提高可靠性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pew465StDKTDg1VL4CYFbgqN2EbPlTpntln4rSr1dicEslhNO9N0sk63Q/640?wx_fmt=png&from=appmsg)

         ![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)