# MOSFET和IGBT栅极驱动器电路的基本原理


> 原文地址: [https://mp.weixin.qq.com/s/Ubrm0cY6a0AISeYhD5XL3g](https://mp.weixin.qq.com/s/Ubrm0cY6a0AISeYhD5XL3g)

文章来源：德州仪器TI

摘要

本应用报告旨在展示一种为高速开关应用设计的高性能栅极驱动电路应用非常重要。这是一个内容详实的主题集，可为您提供解决最常见设计难题的“一站式服务”。因此，它可为具有不同经验的电子产品工程师提供强大帮助。

本报告对目前较为流行的电路解决方案及其性能进行了分析，包括寄生器件的影响、瞬态和极端工作条件。本文从MOSFET 技术和开关运行概述入手，按照由易而难的顺序，对各类问题进行了阐述。详细介绍了接地参考和高侧栅极驱动电路的设计流程，以及交流耦合和变压器隔离解决方案。本报告还包含了一个特殊部分，专门介绍了在同步整流器应用中MOSFET 的栅极驱动应用非常重要。有关更多信息，请参阅MOSFET和IGBT栅极驱动器概述产品页。应用报告中还列举了几个逐步设计示例。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulMsmYNGGobiciaTGdKU3HZfGqJEvYIrkR43RZ1VSZsTSeWP0PyHGSsicxw/640?wx_fmt=jpeg)

商标All trademarks are the property of their respective owners.

1\. 简介

MOSFET–是金属氧化物半导体场效应晶体管的首字母缩写词，它是电子行业高频高效开关领域的关键组件。让人称奇的是，FET技术发明于1930年，比双极晶体管要早大约20 年。第一个信号级FET晶体管诞生于20世纪50年代末期，而功率MOSFET则诞生于70年代中期。如今，从微处理器到“分立式”功率晶体管在内的各种现代电子组件均集成了数以百万计的MOSFET晶体管。本报告重点介绍了各种开关模式功率转换应用中功率MOSFET的栅极驱动应用非常重要。

2\. MOSFET技术

双极晶体管和MOSFET晶体管的工作原理相同。从根本上说，这两种晶体管都是电荷控制器件，这就意味着它们的输出电流与控制电极在半导体中形成的电荷成比例。将这些器件用作开关时，都必须由能够提供足够灌入和拉出电流的低阻抗源来驱动，以实现控制电荷的快速嵌入和脱出。从这一点来看，在开关期间，MOSFET必须以类似于双极晶体管的形式进行“硬”驱动，以实现可媲美的开关速度。从理论上来说，双极晶体管和MOSFET 器件的开关速度几乎相同，这取决于电荷载流子在半导体区域中传输所需的时间。功率器件的典型值大约为20至200皮秒，具体取决于器件大小。

MOSFET技术在数字和功率应用领域的普及得益于它与双极结晶体管相比所具有的两个主要优势。其中一个优势是，MOSFET器件在高频开关应用中使用应用非常重要。MOSFET晶体管更加容易驱动，因为其控制电极与导电器件隔离，所以不需要连续的导通电流。一旦MOSFET晶体管开通，它的驱动电流几乎为零。而且，控制电荷大量减少，MOSFET晶体管的存储时间也相应大幅减少。这基本上消除了导通压降和关断时间之间的设计权衡问题，而开通状态压降与控制电荷成反比。因此，与双极器件相比，MOSFET技术预示着使用更简单且更高效的驱动电路带来显著的经济效益。

此外，需要特别强调突出的是，在电源应用中，MOSFET具有电阻的性质。MOSFET漏源端上的压降是流入半导体的电流的线性函数。此线性关系用 MOSFET 的 RDS(on) 来表征，也称为导通电阻。导通电阻对指定栅源极电压和器件温度来说是恒定的。与p-n 结-2.2mV/°C 的温度系数不同，MOSFET 的温度系数为正值，约为 0.7%/°C 至 1%/°C。正因为 MOSFET 具有此正温度系数，所以当使用单个器件不现实或不可能时，它便是高功率应用中并行运行的理想之选。由于通道电阻具有正TC，因此多个并联 MOSFET会均匀地分配电流。在多个MOSFET上会自动实现电流共享，因为正TC的作用相当于一种缓慢的负反馈系统。载流更大的器件会产生更多热量-请别忘了漏源电压是相等的–并且温度升高会增加其 RDS(on) 值。增加电阻会导致电流减小，从而降低温度。最终，当并联器件所承载的电流大小相近时，便达到平衡状态。RDS(on) 值和不同结至环境热阻的初始容差可导致电流分布出现高达 30% 的重大误差。

2.1 器件类型

几乎所有制造商对于制造出色的功率MOSFET都有自己独特的方法，不过市场上的所有器件可分为三种基本类型。如图1中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulsQ6sqk7d6LdCEicld7UCEY5gxZKF5uhIXDibc9FhFUj5gkawjmAnLeqw/640?wx_fmt=png&from=appmsg)

双扩散 MOS 晶体管于 20 世纪 70 年代开始应用于电源 应用领域， 并在过去这些年间不断演进。使用多晶硅栅极结构和自校准流程，可提高集成密度并迅速减小电容。

第二次重大改进来自于V型坡口或沟道技术，从而进一步提高了功率MOSFET 器件的单元密度。提高性能和集成密度并不容易；然而，沟道 MOS 器件的制造流程更困难。

横向功率 MOSFET 显著减小了电容，所以开关速度大幅提高，所需的栅极驱动功率要低得多。

2.2 MOSFET模型

文中提供了多种模型来说明MOSFET 的工作原理，不过，找到合适的说明可能并不容易。大多数MOSFET制造商为其器件提供 Spice和/或 Saber 模型，但这些模型对于设计人员在实践中遇到的应用陷阱却鲜有提及。甚至对于如何解决最常见的设计难题，它们所提供的线索也很少。

实用的MOSFET模型需要从应用角度描述器件的所有重要属性，因此非常复杂。另一方面，如果我们将模型的适用性局限于特定问题领域，可由MOSFET晶体管得出一些简单且有意义的模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul4YIItqd9iaDCBx3mhduKiaMyBhtQtGE17FP3IOBmAd2na4OKXn2EMvYg/640?wx_fmt=png&from=appmsg)

图2 中的第一款模型基于 MOSFET 器件的实际结构，主要可用于直流分析。图2a 中的 MOSFET 符号表示通道电阻，而 JFET对应于外延层的电阻。因此，EPI 层的电阻是器件额定电压的函数，同时高电压MOSFET 需要的外延层更厚。

图 2b 可非常有效地模拟MOSFET 由 dv/dt 导致的击穿特性。作为栅极端阻抗函数，它展示了两种主要击穿机制，也就是 dv/dt 引起所有功率 MOSFET 中的寄生双极晶体管的开通，以及 dv/dt 引起沟道的开通。由于制造工艺的改进，现代功率MOSFET 实际上几乎不受寄生NPN 晶体管的dv/dt 触发事件的影响，从而减小了基极和发射极区域的电阻。

还必须提到的是，寄生双极晶体管还具有另一个重要角色。它的基极 - 集电极结是有名的 MOSFET 体二极管。

图 2c 是 MOSFET 的开关模型。此模型显示了影响开关性能的最重要的寄生器件。它们各自的作用将在2.3 节中进行讨论，专门介绍器件的开关过程。

2.3 MOSFET关键参数

当考虑MOSFET 开关模式工作时，我们的目标是尽可能在最短的时间内在器件的最低和最高电阻状态间切换。由于MOSFET的实际开关时间（大约为10ns 至60ns）至少要比理论开关时间（大约为50ps至200ps）长两到三个数量级，因此了解这种差异非常重要。返回图 2 中的MOSFET 模型，可以看到所有模型都包含三个电容器，分别连接在三个器件端子间。最后，MOSFET晶体管的开关性能取决于如何使得电压在这些电容器上快速地改变。

因此，在高速开关应用中，最重要的参数是器件的寄生电容。其中，CGS 和 CGD这两个电容器对应于器件的实际几何结构，而 CDS 电容器就是寄生双极晶体管的基极集电极二极管（体二极管）的电容。

CGS电容器由栅极电极所产生的源和通道区域的重叠形成。它的值由这两个区域的实际几何结构确定，并在不同工作条件下保持恒定（线性）。

CGD电容器是两种效应产生的结果。除了耗尽区域的电容之外，一部分是 JFET 区域和栅极电极的重叠，是非线性的。等效CGD电容是器件的漏源电压的函数，通过公式1计算近似值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulpaQydNDlB9ongM62WricfQJr5aYkETOZftK411ldktLEfWslp8EVEpg/640?wx_fmt=png&from=appmsg)

CDS 电容器也是非线性的，因为它是体二极管的结电容。它与电压的关系如公式 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulGPxD0hItCy4mUN5lRwtAYfGUwuicvYWhia8BWpWX1gwp7PBpkFzPxtLQ/640?wx_fmt=png&from=appmsg)

遗憾的是，上述电容值均未在晶体管数据表中直接定义。它们的值由 CISS、CRSS 和 COSS 电容值间接提供，而且必须按照公式 3 中所示的公式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulMib5pwlj0vrprppMLseZ0DAakJPaBeWVLiaNJibuA89gQSeohI04scKHw/640?wx_fmt=png&from=appmsg)

更复杂的问题由电容器 CGD 在开关应用中 引起， 因为它位于器件输入和输出端之间的反馈路径中。因此，它在开关应用中的有效值可能大得多，具体取决于 MOSFET 的漏源电压。这种现象称为“米勒”效应，如公式 4 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulwS39KuQ1wl5n2kwenQyWaDicrgrMj1WlbacibSOrU9aM8O0TicjoRl1rQ/640?wx_fmt=png&from=appmsg)

因为 CGD 和 CDS 电容器与电压相关，所以数据表编号只有在给定的测试条件下有效。必须根据所需电荷计算特定应用的相关平均电容，以确定各电容器上的实际电压变化。对于大多数功率 MOSFET，近似值如公式5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulrXeELncEplK2MQnrATtOCs7ZxEc4llsQ4VEGqs7pmhALSx000s0NCg/640?wx_fmt=png&from=appmsg)

下一个要提到的重要参数是栅极网状电阻RG,I。此寄生电阻描述了与器件内栅极信号分配相关的电阻。它在高速开关应用中非常重要， 因为它位于器件的驱动器和输入电容器之间，直接影响 MOSFET 的开关时间和dv/dt 抗扰性。业内已经认识到了这种影响，然而，射频 MOSFET 晶体管等真正的高速器件使用金属栅极电极来实现栅极信号分配，而不是电阻更高的多晶栅极网。数据表中未指定 RG,I 电阻，但在某些应用中， 它是器件的一个非常重要的特性。附录 A4 显示了电阻桥的典型测量设置，用于确定内部栅极电阻值。

显然，栅极阀值电压也是一个重要的特性。务必应注意，数据表中的 VTH 值是在温度为 25°C 且电流很低（典型值为250μA）的条件下定义的。因此，这并不等于众所周知的栅极开关波形的米勒平坦区域电压。对于VTH，另一个很少提及的事实是，其温度系数近似为7 mV/°C。它在专为逻辑电平 MOSFET 设计的栅极驱动电路中尤为重要，在这种电路中，VTH 在通常测试条件下已经很低。由于 MOSFET 通常在较高的温度下工作，合理的栅极驱动设计必须将关断时VTH 处于较低电压的情况考虑在内，而dv/dt 抗扰性按照数据表中 Seminar 1400主题 2 附录 A/F 预测 MOSFET 参数中的公式计算。

MOSFET 的跨导是其工作线性区域中的小信号增益。需要着重指出的是，每次开关 MOSFET 时，它必须通过线性操作模式，而这时的电流取决于栅源极电压。跨导 gfs 相对于漏极电流和栅源电压是个小信号，如 公式 6 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulzEvQwSdOnMa9ibNic8NZFCF29Vt19kFGcvjecPZEbBR52h5QPkmQuX8A/640?wx_fmt=png&from=appmsg)

相应地，MOSFET在线性区域的最大电流由公式 7 给出。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulQNo8klSokCCnZ9Bep67Yic95ibErvqS3ibLiaiaBTokNlm6ChTR7S2SaTTg/640?wx_fmt=png&from=appmsg)

对这个VGS 公式进行变换，可以得出米勒平坦区域的近似值是漏极电流的函数，如公式 8 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulDl2UCTsuRXtc1VtibDX6zNU2nc1brLhEtD0Zxe1c4osZPLPHF5ufUSg/640?wx_fmt=png&from=appmsg)

源极电感 (LS) 和漏极电感 (LD) 等其他重要参数对开关性能的限制很大。数据表中列出了典型 LS 和 LD 值，这两个值主要取决于晶体管的封装类型。它们对性能产生的影响可结合通常与布局有关的外部寄生组件和露电感、电流感应电阻等随附外部电路元件进行分析研究。

但出于完整性考虑，还需要指出的是外部串联栅极电阻和 MOSFET 驱动器输出阻抗在高性能栅极驱动设计中起决定因素，因为它们会对开关速度产生深远影响，并最终影响开关损耗。

2.4 开关应用

现在，确定了所有因素后，让我们来研究一下MOSFET 晶体管的实际开关行为。为了更好地理解基本过程，电路的寄生电感将被忽略。稍后将单独分析它对基本操作的相应影响。此外，以下描述涉及到钳位电感式开关，因为开关模式电源中所用的大多数 MOSFET晶体管和高速栅极驱动电路都工作在该工作模式下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulVYfpfkX5gLMBQn1yDjkRS1Hfwxpysib4ZPAxytNbkvWENn787gI7GBQ/640?wx_fmt=png&from=appmsg)

图 3 中显示了最简单的钳位电感式开关模型，其中直流电流源代表电感器。在短暂的开关切换期间，它的电流可以认为是常数。二极管在MOSFET 关断时提供一条电流路径，并将器件的漏极钳位到由电池表示的输出电压。

2.5 开通过程

MOSFET 晶体管的开通动作可分为如图 4 中所示的 4 个阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulwYHCphIRtXzxUN2TLxF1aJANK5IyId4Gjkz03tCZq4SYyP8BHqkibSg/640?wx_fmt=png&from=appmsg)

第一步，器件的输入电容从 0V 充电至 VTH。在此期间，大部分栅极电流用于对 CGS 电容器充电。少量电流也会流经 CGD 电容器。随着栅极端子电压升高，CGD 电容器的电压将略有下降。这个期间称为开通延时，因为器件的漏极电流和漏极电压保持不变。

栅极充电至阀值电平后，MOSFET 就能载流了。在第二个阶段中，栅极电平从 VTH 升高到米勒平坦电平VGS,Miller。当电流与栅极电压成正比时，这是器件的线性工作区。在栅极侧，就像在第一阶段中那样，电流流入 CGS 和 CGD 电容器中，并且 VGS 电压升高。在器件的输出端，漏极电流升高，同时漏源电压保持之前的电平 (VDS,off)。可以通过查看图 3 中的原理图来了解。在所有电流传输到 MOSFET 中并且二极管完全关断能够阻止其 PN 结上的反向电压之前，漏极电压必须保持输出电压电平。

进入开通过程第三阶段后，栅极已充电至足够电压 (VGS,Miller)，可以承载完整的负载电流且整流器二极管关断。此时，允许漏极电压下降。当器件上的漏极电压下降时，栅源极电压保持稳定。这就是栅极电压波形中的米勒平坦区域。驱动器提供的所有栅极电流都被转移，从而对CGD 电容器充电，以便在漏源极端子上实现快速的电压变化。现在，器件的漏极电流受到外部电路（这是直流电流源）的限制，因此保持恒定。

开通过程的最后一步是通过施加更高的栅极驱动电压，充分增强 MOSFET的导通通道。VGS 的最终幅值决定了开通期间器件的最终导通电阻。所以，在第四阶段中，VGS 从VGS,Miller 上升至最终值VDRV。这通过对CGS 和 CGD 电容器充电来实现，因此现在栅极电流在两个组件之间分流。当这些电容器充电时，漏极电流仍然保持恒定，而由于器件的导通电阻下降，漏源电压略有下降。

2.6 关断过程

MOSFET 晶体管的关断过程说明基本上与上文所述的开通过程相反。开始时 VGS 等于 VDRV，器件中的电流是由图 3 中的 IDC 表示的满负载电流。漏源电压由 IDC 和 MOSFET 的 RDS(on) 定义。出于完整性考虑，图5中显示了四个关断步骤。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulXlmUHOvHjyradjcBUbmTZSeME8mJLsW6j1bDQvgyQvnUKGoibic21aicQ/640?wx_fmt=png&from=appmsg)

第一个阶段是关断延迟，需要将 CISS 电容从初始值放电至米勒平坦电平。在这段时间内，栅极电流由 CISS电容器自己提供，并流经 MOSFET 的 CGS 和 CGD 电容器。随着过驱电压降低，器件的漏极电压略有上升。漏极的电流保持不变。

在第二阶段，MOSFET 的漏源电压从 ID⋅RDS(on) 上升至最终的 VDS,off 电平，由整流器二极管根据图 3 简化原理图钳位至输出电压。在此时间段内，与栅极电压波形中的米勒平坦区域对应，栅极电流完全是 CGD 电容器的充电电流，因为栅源极电压是恒定的。此电流由功率级旁路电容器提供，并从漏极电流中减去。总漏极电流仍然等于负载电流，也就是图 3 中由直流电流源表示的电感器电流。

第三阶段的开始用二极管开通表示，因此为负载电流提供了一个替代路径。栅极电压继续从 VGS,Miller 下降至VTH。绝大部分栅极电流来自 CGS 电容器，因为 CGD 电容器实际上在前一个阶段中就已经充满电了。在此间隔结束时，MOSFET 处于线性工作状态，栅源极电压下降导致漏极电流减小并接近于零。同时，由于正向偏置整流器二极管的作用，漏极电压在 VDS,off 时保持稳定。

关断过程的最后一步是对器件的输入电容完全放电。VGS 进一步下降，直至达到 0V。与第三关断阶段类似，栅极电流的更大一部分由 CGS 电容器提供。器件的漏极电流和漏极电压保持不变。

概括而言，得出的结论是，在四个阶段中，MOSFET 晶体管可在最高和最低阻抗状态（开通或关断）间切换。四个阶段的长度是寄生电容值、电容上所需的电压变化和可用的栅极驱动电流的函数。这就突显出正确的组件选择以及出色的栅极驱动设计对于高速高频开关 应用非常重要。

遗憾的是，这些数字与特定测试条件和电阻负载相对应，因此难以比较不同制造商的产品。而且，在具有限定电感负载的实际 应用 中，开关性能与数据表中给出的数字有显著差异。

2.7 功率损耗

功率应用中 MOSFET 晶体管的开关操作会导致某些不可避免的损耗，具体分为两类。

在这两种损耗机制中，比较简单的一种是器件的栅极驱动损耗。如前面所述，开通或关断 MOSFET 需要对CISS 电容器充电或放电。当电容器上的电压发生变化时，就会转移一定数量的电荷。栅极电压在0V 和实际栅极驱动电压 VDRV 之间变化所需的电荷数量由典型栅极电荷与栅源极电压曲线的对比来表征，如图 6 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulGa5Zaia0wHe0L0nKVxeFbdaJJFzO98wMpRZ3kCFRFicS1FXGEVL8Cfqw/640?wx_fmt=png&from=appmsg)

此图表提供了最坏情况下相对准确的栅极电荷估算，它是栅极驱动电压的函数。用于产生各个曲线的参数是器件的漏源极关断状态电压。VDS,off 会影响米勒电荷（即曲线平坦部分下面的区域），从而影响开关周期内所需的总栅极电荷。从图 6 中获得总栅极电荷后，可根据公式 9 计算栅极电荷损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulrWrJIodtsgUednvGJkxZ4WoFQBLKSCKaEamdNSBiaRuic6HPPIsXSI0A/640?wx_fmt=png&from=appmsg)

应注意的是，前面公式中的 QG ⋅ fDRV 项给出了驱动栅极所需的平均偏置电流。

在栅极驱动电路中驱动 MOSFET 晶体管栅极会产生功率损耗。返回图 4 和 图 5，可以确定栅极驱动路径中串联欧姆阻抗的组合是耗能分量。在每个开关周期中，所需的栅极电荷应通过驱动器输出阻抗、外部栅极电阻器和内部栅极网状电阻。实际上，功率损耗与通过电阻器传输电荷的快慢无关。  

使用图 4 和 图 5 中的电阻器符号，驱动器功率损耗如公式 10 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulGX7icb1HbtmRtaEicdMt5o4AHC5fke074icicTLHmSsicBALOvbhfraArtw/640?wx_fmt=png&from=appmsg)

在上述公式中，栅极驱动电路由电阻输出阻抗表示，此假设对于基于 MOS 的栅极驱动器是有效的。当栅极驱动电路中使用双极晶体管时，输出阻抗变为非线性，此时运用这些公式不能得出正确答案。可以假定，使用低阻值栅极电阻器 (< 5Ω) 时，大多数栅极驱动损耗发生在驱动器中。如果 RGATE 足够大，可将 IG 限制在双极驱动器的输出电流能力以下，那么绝大部分栅极驱动功率损耗则发生在 RGATE 中。

除了栅极驱动功率损耗，由于器件会在短时间内同时出现高电流和高电压，因此在传统感应中晶体管会累积开关损耗。为了尽可能降低开关损耗，必须尽量减少此阶段的持续时间。看看 MOSFET 的开关流程，此条件限于开关操作中开关切换的间隔 2和间隔3。这些时间间隔对应于栅极电压介于VTH和 VGS,Miller 之间时器件的线性运行（这会导致器件的电流发生变化）以及漏极电压经历开关切换时的米勒平坦区域。

认识到这一点对于正确设计高速栅极驱动电路来说非常重要。它强调了这一事实：栅极驱动器的最重要特性是米勒平坦区域电压电平周围的拉-灌电流能力。峰值电流能力是通过在完整 VDRV 下对器件的输出阻抗进行测量的，与 MOSFET 的实际开关性能关系不大。真正决定器件开关时间的因素是当栅源极电压（即驱动器输出）约为 5V（对于逻辑电平 MOSFET约为 2.5V）时的栅极驱动电流能力。

可通过使用开关切换第 2 阶段和第 3 阶段中栅极驱动电流、漏极电流和漏极电压波形的简化线性近似，对MOSFET 开关损耗进行粗略估算。首先，必须分别确定第二和第三阶段的栅极驱动电流：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulrj975mZLB7OdjmYKYRJ1ibqibl1rIKcq8Sn7m1UmLQJBzGjGQPd3UkaA/640?wx_fmt=png&from=appmsg)

假定 IG2 将器件的输入电容器从 VTH 充电至 VGS,Miller 并且 IG3 是 CRSS 电容器的放电电流，同时漏极电压从VDS,off 变为 0V，则近似开关时间如下：漏极电压从 VDS,off 变为 0V，近似开关时间如公式 12 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulfvXlZN9n09lLeIufegic7Vic39PzqukZgwkq2GGR4nr6JfVDcDQPrO5Q/640?wx_fmt=png&from=appmsg)

在 t2 期间，漏极电压为 VDS,off，电流从 0A 上升为负载电流 IL，而在 t3 阶段内，漏极电压从 VDS,off 降至接近0V。同样，可以使用波形的线性近似，按照公式13 所示估算各个阶段中的功率损耗分量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulS0YCiaBexyica0ERJo7et2yGnNjT21oBHcv0bZgNTIYKZUxiaf0HB83LQ/640?wx_fmt=png&from=appmsg)

总开关损耗是两个损耗分量之和，下面的公式 14 列出了简单的表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulfTPtgFnjCvbeP1g8O9vuTiayMFbgZO0d0ePD38uRFyM5P85pbdicDttQ/640?wx_fmt=png&from=appmsg)

虽然开关切换很好理解，但几乎仍然无法计算准确的开关损耗。原因是在开关过程中，寄生电感分量的影响会极大地改变电流和电压波形以及开关时间。考虑到实际电路中不同源极电感和漏极电感的影响，我们用二阶微分方程来描述电路的实际波形。由于栅极阀值电压、MOSFET 电容值、驱动器输出阻抗等变量具有很大的容差，上述线性近似似乎是非常合理的折衷，可用于估算 MOSFET 中的开关损耗。

2.8 寄生器件的影响

源极电感对开关性能的影响最大。典型电路中寄生源极电感有两个来源：巧妙集成在MOSFET 封装中的源极接合线以及源极引线和共用接地之间的印刷电路板线路电感。这通常是指功率级高频滤波器电容器和栅极驱动器的旁路电容器的负电极。与源极串联的电流感应电阻器可以向之前的两个分量添加更多电感。

在需要源电感器的开关流程中有两种机制。在开关切换开始时，栅极电流快速增加，如图 4 和图 5 中所示。此电流必须流经源电感，并根据电感值减小。因此，对 MOSFET 的输入电容充电/放电所需的时间延长，从而主要对开关延时（第 1 步）产生影响。而且，源电感器和 CISS 电容器会形成一个谐振电路，如图7 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulzibTtzaGJkgLCPfvkCD7xy0ZkmNFngc0xiapwzg35Fe6PtXia62sW3HJA/640?wx_fmt=png&from=appmsg)

此谐振电路在栅极驱动电压波形的陡峭边缘退出，这是在大多数栅极驱动电路中观察到振荡峰值的根本原因。遗憾的是，CISS 和 LS 之间非常高的 Q 共振会通过（或可通过）环路的串联电阻分量衰减，这些分量包括驱动器输出阻抗、外部栅极电阻器和内部栅极网状电阻器。

可按公式 15 计算可实现最佳性能的唯一的用户可调节值 RGATE。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulIbq1aOiaDqvH5VXfz8he0jB18KwyewM6aJfz8289aAlR6BicmRUTickeQ/640?wx_fmt=png&from=appmsg)

减小电阻值可导致栅极驱动电压波形过冲，还可提高开通速度。电阻值升高会导致振荡欠阻尼并延长开关时间，对于栅极驱动设计没有任何好处。

源极电感的第二个影响是，只要器件的漏极电流快速改变，就会产生负反馈。这种影响出现在开通过程的第二阶段以及关断过程的第三阶段中。在这些阶段，栅极电压处于 VTH 和 VGS,Miller 之间，栅极电流由驱动阻抗上的电压 VDRV – VGS 定义。为了快速增加漏极电流，必须在源极电感上施加明显的电压。此电压会降低驱动阻抗上的可用电压，从而减小栅极驱动电压的变化率和漏极电流的 di/dt。di/dt 减小要求源电感上的电压降低。栅极电流和漏极 di/dt 之间的微妙平衡通过源极电感器的负反馈建立。

开关网络的另一个寄生电感是漏极电感，它同样由几个分量构成。它们是晶体管封装中的封装电感、与互连关联的所有电感，以及隔离电源中变压器的泄漏电感。它们串联在一起，因此影响相互叠加。它们充当MOSFET 的开通阻尼器。在开通期间，它们限制漏极电流的 di/dt，并将器件上的漏源电压降低 LD⋅di/dt倍。实际上，LD 可以显著降低开通开关损耗。虽然 LD 值升高似乎在开通时有利，但当漏极电流必须快速下降时，在关断时会导致较大问题。为了支持因 MOSFET 的关断而快速减小漏极电流，LD 上必须形成与开通所对应的相反方向的电压。此电压高于VDS,off 电平的理论值，在漏源电压上形成过冲，并增加关断开关损耗。

文献中提供了针对整个开关转换的准确数学分析（包括寄生电感的影响），但有几点超出了本文档的范围。

3\. 接地参考栅极驱动

3.1 PWM直接驱动

在电源应用中，驱动主开关晶体管栅极的最简单方法是利用 PWM 控制器的栅极驱动输出，如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulHSibGHxvgvIqKdsp5BjL11dDaGFb6Kicbs3T9L8tOJODqzCebD9nHOicg/640?wx_fmt=png&from=appmsg)

直接栅极驱动最艰巨的任务是优化电路布局。如图 8 中所示，PWM 控制器和 MOSFET 之间可能有较大距离。由于栅极驱动和接地环路迹线形成的环路，这个距离形成了寄生电感，从而降低了开关速度，并导致栅极驱动波形中形成振铃。甚至由于接地平面，无法完全消除电感，因为接地平面只为接地环路电流提供较低电感路径。为了降低与栅极驱动连接相关的电感，需要更宽的 PCB 迹线。直接栅极驱动的另一个问题是PWM 控制器的驱动电流能力有限。极少有集成电路能提供高于 1A 的峰值栅极驱动能力。这会限制控制器在合理速度下可驱动的最大裸片尺寸。

包含直接栅极驱动的 MOSFET 裸片尺寸的另一个限制因素是控制器内驱动器的功率损耗。如前面所述，外部栅极电阻器可以缓解此问题。当为了节约空间或成本而必须使用直接栅极驱动时，需要考虑特殊注意事项，以便为控制器提供合适的旁路。驱动 MOSFET 栅极的高电流峰值会破坏 PWM 控制器内敏感的模拟电路。随着 MOSFET 裸片尺寸增加，所需的栅极电荷也会增加。与选择普通 0.1µF 或 1μF 旁路电容器相比，选择合适的旁路电容器需要采用更加科学的方法。

3.1.1 确定旁路电容器的大小

本节将介绍 MOSFET 栅极驱动器的旁路电容器的计算。此电容器与直接栅极驱动应用中的 PWM 控制器的旁路电容器相同，因为此电容器在开通时提供栅极驱动电流。如果是独立的驱动器电路，无论采用栅极驱动IC 还是分立式解决方案，此电容器都必须置于附近，最好直接置于驱动器的偏置和接地连接上。

需要考虑两种电流分量。一种是静态电流，这种电流可根据某些集成驱动器的输入状态变化 10 倍。这可导致占空比，具体取决于旁路电容器上的纹波电压，计算方法如公式 16 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulf3Jo1nKBWNULf9oMhe1LhZBYIQhsy26icubicbCia9oXqD2KbJlEhwzJw/640?wx_fmt=png&from=appmsg)

另一个纹波分量是栅极电流。虽然大多数情况下并不知道实际电流振幅，但可根据栅极电荷值确定旁路电容器上的纹波电压。在开通时，此电荷离开旁路电容器，并传递到 MOSFET 输入电容器中。相应的纹波电压如公式 17 中所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulrCmRHwS4HDW0Jm6L6f64PSVmMhdRphMTa1BTicT5suHf9J5z83uq3XA/640?wx_fmt=png&from=appmsg)

使用叠加和解 CDRV 方程的原理，可采用公式 18 找到耐受的纹波电压 (ΔV) 的旁路电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulMENrKfoKMrU069QoNPvVAqRgX8Rt4sbUY8zBZo1396SjYYb2rhkulg/640?wx_fmt=png&from=appmsg)

3.1.2 驱动器保护

对于直接驱动和使用双极输出极的栅极驱动 IC，必须做的另一件事就是为输出双极晶体管提供合适的保护，防止反向电流的形成。如图 9 中所示，集成双极驱动器的输出极由 NPN 晶体管构成，因为其空间利用率更高效，性能更优异。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulVgjiciazfZPqWqD58H7ibXkaHLC3IBsq2oLStLKpM2FwxkUvZjzYvVzdA/640?wx_fmt=png&from=appmsg)

NPN 晶体管只能在一个方向上处理电流。高侧 NPN 可以拉电流，但不能灌电流，而低侧 NPN 则恰好相反。在开关期间，MOSFET 的源极电感器和输入电容器之间不可避免地会形成振荡，因此电流必须能够在驱动器输出端双向流动。为了提供反向电流的路径，通常需要使用低正向压降肖特基二极管来保护输出。该二极管必须放在非常靠近输出引脚和驱动器旁路电容器的位置。还要指出的是，该二极管只能保护驱动器，而不能钳位栅源极电压，防止过度的振铃，特别是对于控制 IC 可能离 MOSFET 的栅-源端子较远时的直接驱动更是如此。

3.2 双极Totem-Pole驱动器

双极同相Totem-Pole驱动器是用于驱动MOSFET 的其中一个最常用且具有成本效益的驱动电路，如图 10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulLKsbf9L8mbMKXEeia4PuVibB3Nd5XpzNkYDDQQGQU7Gj0GRHEtEKEdKg/640?wx_fmt=png&from=appmsg)

和所有外部驱动器一样，此电路可处理应对电流尖峰和功率损耗，从而使得运行条件更有利于 PWM 控制器。当然，它们可以并且应当置于所驱动的功率 MOSFET 的旁边。这样，驱动栅极的高电流瞬态被限制在非常小的环路区域，从而减小了寄生电感的值。虽然驱动器由分立式组件构成，但它需要将自己的旁路电容器置于上 NPN 和下 PNP 晶体管的集电极上。理想情况下，在驱动器的旁路电容器和 PWM 控制器的旁路电容器之间应设置一个平滑电阻器或电感器，以提高抗噪性。图 10 中的 RGATE 电阻器是可选的，可调整 RB的大小以根据驱动器晶体管的大信号 Beta 提供所需的栅极阻抗。

双极Totem-Pole 驱动器有一个有趣的特性，即两个基极-发射极结可防止互相反向击穿。而且，假定环路区域非常小且 RGATE 可以忽略，则可使用晶体管的基极-发射极二极管将栅极电压钳制在 VBIAS+VBE 和 GNDVBE 之间。基于相同的钳位机制，此解决方案还有另一个好处，那就是 NPN-PNP Totem-Pole 驱动器不需要使用任何肖特基二极管来实现反向电流保护。

3.3 MOSFET Totem-Pole 驱动器

图 11 展示了等效于双极 Totem-Pole 驱动器的 MOSFET Totem-Pole 驱动器。上文所述的有关双极TotemPole驱动器的所有优点同样适用于此实现。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulL9icJ7n997AbykGIuUqFwY4MWNOXP6DwIAWMX5hKT7lTQGwYmeqGVaQ/640?wx_fmt=png&from=appmsg)

遗憾的是，与双极驱动器相比，此电路有几个缺点，因此很少以分立器件的形式实现。图 11 中的电路是反相驱动器，因此 PWM 输出信号必须为反相。此外，适用的 MOSFET 晶体管比双极晶体管昂贵，并且当共栅极电压转换时，会产生较大的击穿电流。这个问题可通过增加逻辑或时序组件来规避，此方法广泛应用于IC 实施中。

3.4 速度增强电路

提到速度增强电路时，设计人员需要对加快 MOSFET 关断过程的电路给予专门考虑。原因在于开通速度通常受到电源中整流器组件的关断过程或反向恢复速度的限制。正如前面所讨论的图 3 中所示的电感钳位模型，MOSFET 的开通与整流器二极管的关断同时发生。因此，最快的开关操作由二极管的反向恢复特性决定，而不是栅极驱动电路的强度。在优化的设计中，开通时的栅极驱动速度与二极管开关特性一致。同时考虑到与最终栅极驱动电压 VDRV 相比米勒区域更接近于 GND，因此可在驱动器输出阻抗和栅极电阻器上施加更高的电压。通常获得的开通速度足以驱动 MOSFET。

而在关断时情况截然不同。从理论上说，MOSFET 的关断速度只取决于栅极驱动电路。电流更高的关断电路可以更快对输入电容器放电，从而缩短开关时间，进而降低开关损耗。如果使用普通的 N 沟道器件，通过更低输出阻抗的 MOSFET 驱动器和/或负关断电压，可以增大放电电流。而提高开关速度有可能会降低开关损耗，由于 MOSFET 的关断 di/dt 和 dv/dt 更高，因此关断加速电路会在波形中增加振铃。在为电源器件选择合适的电压额定值和 EMI 屏蔽装置时，应考虑这一因素。

3.4.1 关断二极管

以下关断电路示例通过简单的接地基准栅极驱动电路进行展示，不过这些示例同样适用于本文档之后讨论的其他实现。最简单的技术是反向并联二极管，如 图 12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulGE428C9B7HR7EslsqUiaTDjW7rfgIbOicD6vQpIic6WET7iatNMBMiahk4Q/640?wx_fmt=png&from=appmsg)

在此电路中，RGATE 允许调整 MOSFET 开通速度。在关断过程中，反向并联二极管会对电阻器进行分流。DOFF 只有在栅极电流高于公式 19 所示的结果时起作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulDSnoLrcaW38Su69dxrNUNZqBzkObJ5M7qpyib13VqSEib9jhGIITs4xg/640?wx_fmt=png&from=appmsg)

使用 1N4148 通常大约为 150mA，使用 BAS40 肖特基反向并联二极管大约为 300mA。因此，随着栅源极电压接近 0V，二极管的作用越来越小。所以，此电路能显著减少关断延迟时间，但只会增量化改进开关时间和 dv/dt 抗扰性。另一个缺点是，栅极关断电流仍然必须流经驱动器的输出阻抗。

3.4.2 PNP 关断电路

毫无疑问，快速关断电路最常用的布局是图 13 中所示的局部 PNP 关断电路。在 QOFF 的帮助下，在关断期间栅极和源极在 MOSFET 端子处形成局部短路。RGATE 限制开通速度，DON 为开通电流提供路径。而且，DON 可以保护 QOFF 的基极-发射极结，防止在开通过程开始时出现反向击穿。

此解决方案最大优势是，MOSFET 输入电容的高峰值放电电流限制在两个晶体管的栅极、源极和集电极以及发射极连接之间最小的环路内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul10yEIgeGLPTkqXgxMqRz9aqMsLUSC7sSoNCPyEsqAtPCwLKnRW8tPA/640?wx_fmt=png&from=appmsg)

关断电流不会返回驱动器，不会导致误开通问题，并且驱动器的功率损耗也减少了两倍。关断晶体管对栅极驱动环路电感、电势电流感应电阻器和驱动器的输出阻抗进行分流。而且，QOFF 永远不会达到饱和，这一点对于保障快速开关能力非常重要。通过详细了解电路我们可以发现，此解决方案是一个简化的双极TotemPole 驱动器，其中二极管替代了 NPN 上拉晶体管。与Totem-Pole 驱动器相似，MOSFET 栅极被关断电路钳制在大约GND-0.7V 到 VDRV+0.7V 之间，从而消除了栅极电压应力过高的风险。该电路唯一一个已知的缺点是，由于 QOFF 的基极-发射极结上的压降，它始终不能将栅极拉至 0V。

3.4.3 NPN关断电路

要评估的下一个电路是局部 NPN 关断电路，如图 14 所示。与 PNP 解决方案相似，栅极放电电流有效地控制在局部。与 PNP 晶体管相比，NPN 晶体管能够使栅极更接近于 GND。而且，此实现可提供自偏置机制，使 MOSFET 在上电期间保持关断状态。

遗憾的是，此电路有几个明显缺点。NPN 关断晶体管 QOFF 为反相级，需要 QINV 提供的反相 PWM 信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul8UPBbCujzKVWY68GjKIXeVpz29PoHaBAgRfmRMgIVyZ5HG2cM6tqxg/640?wx_fmt=png&from=appmsg)

反相器在 MOSFET 导通时会消耗驱动器中的电流，因此降低了电路效率。而且，QINV在导通时达到饱和状态，这会延长栅极驱动中的关断延时。

3.4.4 NMOS关断电路

图 15 依据此原理改进了实施，减少了器件数，使用双驱动器为小型 N 沟道放电晶体管提供反相 PWM 信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulEISLia6ryhiaKibPsNjRfSM7SauCdKAyFbuxDiaJFaSXaalJWXLTUUw8HA/640?wx_fmt=png&from=appmsg)

此电路可提供非常快的开关速度，可将 MOSFET 栅极完全放电至 0V。RGATE 不但能像以前一样设置开通速度，还可用于在驱动信号时序有缺陷时防止在驱动器两个输出之间形成击穿电流。要考虑的另一个重要因素是，QOFF 的 COSS 电容与主功率 MOSFET 的 CISS 电容并联。这会增加驱动器需要提供的有效“总栅极电荷”。还要考虑，在驱动器 IC 的输出在上电过程中实现智能化之前，主 MOSFET 的栅极处于悬空状态。

3.5 dv/dt保护

在两种情况下，MOSFET 需要防止 dv/dt 触发开通。一种情况是在上电过程中，通常通过在器件的栅极和源极端子间加入一个电阻器来提供保护。根据公式20 可知，下拉电阻器的值取决于最差的情况下上电过程中电源轨的 dv/dt。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul1NOjyGOyDDD6BI2aOH99V1ajAw9Z26dUZterrgiaZ1rPIWiaHxXqT0PA/640?wx_fmt=png&from=appmsg)

在此计算中，最大的难题是找到上电过程中可能产生的最大 dv/dt 并针对该特定 dv/dt 提供充足保护。

第二种情况是正常运行中，当电源关断时在电源开关的漏源极端子上施加关断 dv/dt 时。这种情况比原先预想的更常见。所有同步整流器开关均运行在此模式下，此内容将在后文进行讨论。多数谐振和软开关转换器可以在关断实例后立即在主开关上施加 dv/dt，由功率级谐振元件驱动。由于工作结温升高，与上电过程中相比这些 dv/dt 明显升高并且 VTH 通常下降，因此必须由栅极驱动电路的低输出阻抗提供保护。

首要任务是确定在最坏情况下可产生的最大 dv/dt。在评估特定器件对于应用的适用性时，下一步是计算自然 dv/dt 极限，该极限由 MOSFET 的内部栅极电阻和 CGD 电容决定。假定在理想的 (0 Ω) 外部驱动阻抗下，自然 dv/dt 极限如公式 21 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulH7KicdibdERrtGZNRvtwVSZQ745k1wNuQ5ZA5OoOJ0bUicQ39Q2mB4TFA/640?wx_fmt=png&from=appmsg)

如果 MOSFET 的自然 dv/dt 极限低于谐振电路的最大 dv/dt，则必须考虑使用一个不同 MOSFET 或负栅极偏置电压。如果结果对器件有利，可根据公式 22 重新排列和求解以前的方程来计算最大栅极驱动阻抗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul4HyoYs6kyXIE35kRNzGPVONr73IlCR0WFWytkSplqTibT6TPgexiaBqQ/640?wx_fmt=png&from=appmsg)

当给定最大下拉电阻值时，可以实施栅极驱动设计。应该考虑到，驱动器的下拉阻抗也与温度有关。结温升高时，基于 MOSFET 的栅极驱动 IC 的输出电阻会高于 25°C 时通常所呈现的典型值。

关断速度增强电路还可用于满足 MOSFET 的 dv/dt 抗扰性，因为它们可以在关断时和器件的关断状态下分流 RGATE。例如，图13 所示的简单 PNP 关断电路可以提高 MOSFET 的最大 dv/dt。根据 PNP 晶体管的Beta 影响修改的公式会产生更大的 dv/dt 额定值，如公式 23 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulz6uc10lWuqXuntTmRAInpIFWoVKVRA70GTDMabSDn1PxKOjAaD8ribQ/640?wx_fmt=png&from=appmsg)

在 dv/dt 计算中，回程系数是 MOSFET 的内部栅极电阻，所有数据表中均未定义该值。之前提到过，此电阻取决于半导体内分配栅极信号所用的材料属性、单元密度和单元设计。

4\. 同步整流器驱动

MOSFET 同步整流器是接地基准开关的一个特例。这些器件与传统应用所使用的 N 沟道 MOSFET 相同，只是它们被应用到了电源的低电压输出而非整流器二极管中。它们通常可在非常有限的漏源极电压摆幅下工作，因此，CDS 和 CGD 电容器具有相对较大的电容值。而且，其应用非常独特，因为这些器件工作在 V-I 平面的第四象限。电流从源极流至漏极端子。因此与栅极驱动信号无关。在同步开关周围需要其他元件的情况下，电流将通过电阻通道或 MOSFET 的寄生体二极管在器件内流动。评估 MOSFET 同步整流器的开关行为的最简单模式是简化的降压功率级，其中整流器二极管由 QSR 晶体管代替，如图 16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul8qBwib0fKATfqicgwRBRKwaReJ1PJQQ8pARtKm7teAh0ibejBGs7lXRdw/640?wx_fmt=png&from=appmsg)

在此电路中，首先要认识到的是同步整流器 MOSFET 的运行取决于电路中另一个受控开关（即正向开关）QFW 的运行。两个栅极驱动波形不是独立的，必须符合特定的时序要求。栅极驱动信号叠加是致命的，因为环路中没有显著的限流组件，两个 MOSFET 会造成电压源短路。理想情况下，两个开关应同时开关，以防止 QSR MOSFET 的体二极管开通。遗憾的是，避免体二极管导电的时机很短。非常准确的自适应时序和快速开关速度是必不可少是，而传统设计技术通常难以实现这些目标。

因此，在大多数情况下，在同步 MOSFET 开关开通之前和关断之后，体二极管会发生瞬间（从 20ns 到80ns）导电。

4.1 栅极电荷

在体二极管导电期间，器件内会形成满负载电流，并且漏源极电压等于体二极管正向压降。在这些情况下，开通或关断器件所需的栅极电荷与传统第一象限运行中所需的栅极电荷不同。当栅极开通时，漏源极电压实际上为零，并对 CGD 和 CDS 电容器放电。而且，米勒效应不存在，漏极和栅极端子间没有反馈。因此，所需的栅极电荷等于将栅源极和栅漏极电容器上的电压从 0V 提高到最终 VDRV 电平所需的电荷。为了进行准确估算，应根据公式 24 确定 CGD 电容器在 0V 到 VDRV 之间的低电压平均值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFullu43DEOdjbrmkCYYaa1gyoOSd4KqcudKjUc40LBiczljoiceMmjh5IdA/640?wx_fmt=png&from=appmsg)

然后可使用 公式 25 估算同步 MOSFET 整流器的总栅极电荷。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulXOzCYhBzf6zica9ZzxvtH10MIKFvm8BhxxcS9mTL47PDMI3QhibdJpew/640?wx_fmt=png&from=appmsg)

此值明显低于 MOSFET 数据表中所列的总栅极电荷。与在第一象限运行中驱动相比，同步整流所用的具有相同驱动器电路的相同 MOSFET 可以更快地开通或关断。遗憾的是，这个优点无法实现，因为适用于同步整流的低 RDS(on) 器件由于裸片尺寸大，通常具有相当大的输入和输出电容。从驱动器功率损耗的角度来看，另一个必须要注意的问题是应考虑数据表中的总栅极电荷值。虽然驱动器在开通过程中提供的栅极电荷少于数据表中所列的典型值，但这包括一部分流经驱动器输出阻抗的总电荷。在开通前，器件上的漏源极电压发生变化时，功率级提供的米勒电荷必须流经导致更多功率损耗的同步 MOSFET 的驱动器。可以在图 17 中看到这种现象，接下来讨论 dv/dt 注意事项时将涉及此内容。

同步 MOSFET 的关断过程遵循与开通过程相同的规则，因此，以前所有关于栅极电荷的注意事项均适用。

4.2 dv/dt 注意事项

图 17 显示了 QSR 的开通和关断过程中最重要的电路和电流元件。实际上，更准确地说，QFW 中发生的开关操作强制 QSR 开通或关断，而与自己的栅极驱动信号无关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulxUOibMN9ZMlkCXHiapbT3onU57eRr0Jm5uCRbicTjiaYiaicKbYaD9PHQGTg/640?wx_fmt=png&from=appmsg)

QSR 开通时，QFW 关断。当 QFW 的栅极驱动信号从高电平转换为低电平时，开关节点从输入电压电平转为GND。电流仍然在正向开关中，直至 CRSS 电容器放电并且 QSR 的体二极管正向偏置。在此瞬间，同步MOSFET 接收电流，并且 QFW 完全关断。在由控制器能力决定的短暂延时后，施加 QSR 的栅极驱动信号并开通 MOSFET。此时，电流从体二极管传输至器件通道。

在 QSR 导电过程结束时，必须关断 MOSFET。通过移除同步开关栅极上的驱动信号来引发此过程。此事件本身不会导致器件关断。相反，它强制电流流入体二极管而不是通道。电路运行与此电荷无关。当正向开关的栅极从低电平转换为高电平时，电流开始从 QSR 进入 QFW。QFW 接收满载电流并且体二极管完全恢复后，开关节点将从 GND 转换为输入电压电平。在此转换过程中，对 QSR 的 CRSS 电容器充电，同步 MOSFET 易受 dv/dt 感应开通的影响。

总结同步 MOSFET 及其栅极驱动的这种独特运行方式，我们可以得出以下最重要结论：正向开关的栅极驱动特性（开关速度）会在器件上施加同步 MOSFET 的开通和关断 dv/dt。因此，应同时设计两个栅极驱动电路，以确保各自的速度和 dv/dt 极限在所有运行条件下都匹配。可以按照公式 26 中所示的步骤来确保这一目标。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulQBxzqm6v2BSxKiaJDWYUTFoQfGvMBJZjuGeXN91A05eY1shtiaHEM14Q/640?wx_fmt=png&from=appmsg)

假定 QSR 和 QFW 所用的器件相同，没有外部栅极电阻器，并且与驱动器输出阻抗相比内部栅极电阻可以忽略，则驱动器输出阻抗的近似比值如公式 27 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulYqjx0USnOxhjlJnxDumkVt4VbzXBhzFgJZhpk1BiaTRBvMGiaQlfYMyw/640?wx_fmt=png&from=appmsg)

采用由 10V 驱动信号驱动的逻辑电平 MOSFET 的一个典型示例可产生 0.417 的比值，这就意味着 QSR 的下拉驱动阻抗必须小于 QFW 的上拉驱动阻抗的 42%。在进行这些计算时，请记住除 VDRV 之外的每个参数都与温度有关，其值可能需要调整以适应设计的最差运行条件。

5\. 高侧非隔离栅极驱动

高侧非隔离栅极驱动可按照所驱动的器件类型或涉及的驱动电路类型来分类。相应地，无论是使用 P 沟道还是 N 沟道器件，是实施直接驱动、电平位移驱动还是自举技术，它们都有差异。无论采用哪种方式，高侧驱动器设计需要更多关注，以下核对表涵盖了设计的各个方面，可能有所帮助：

• 效率

• 偏置和电源要求

• 速度限制

• 最大占空比限值

• dv/dt 影响

• 启动条件

• 瞬态运行

• 旁路电容器大小

• 布局和接地注意事项

5.1 适用于 P 沟道器件的高侧驱动器

在此组电路中，P 沟道 MOSFET 开关的源极端子连接到正输入电压轨。驱动器在栅极上施加一个与器件源极对应的负振幅开通信号。这就意味着 PWM 控制器的输出应反转并以正输入电压轨为基准。因为输入电压可视为直流电压源，所以高侧 P 沟道驱动器无需以开关频率为基础在大电势差之间摆动，但它们必须工作在整个输入电压范围内。而且，由于输入电压源具有较低的交流阻抗，因此驱动器以交流接地电势作为基准。

5.1.1 P 沟道直接驱动

P 沟道高侧驱动器最简单的例子就是直接驱动，如果最高输入电压低于器件的栅源极击穿电压，可以实施这种驱动。典型应用领域为使用 P 沟道 MOSFET 的 12V 输入直流/直流转换器，与图 18 所示的原理图相似。请注意，P 沟道器件的某些专用控制器中提供反相 PWM 输出信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulhNWH607PDvrNYfA0f8Iba4FDicphWMlzHkiaQoibxq0hR31GL8IGbMp8A/640?wx_fmt=png&from=appmsg)

电路运行类似于 N 沟道器件的接地参考直接驱动器。显著差异是栅极驱动电流的路径，此电流永远不会流入接地连接。相反，正轨互连会传导栅极的高充电和放电电流。因此，为了最大程度地减小栅极驱动中的环路电感，需要宽迹线或平面来提供正输入。

5.1.2 P 沟道电平位移驱动

对于超过 MOSFET 的栅源极电压极限的输入电压，必须使用电平位移栅极驱动电路。最简单的电平位移技术是使用开路集电极驱动器，如图 19 所示。遗憾的是，开路集电极电平位移器不适合在高速应用中直接驱动 MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulxUfTaUa04MTgweiceupwib79KYevPOhXYEK7xiaePIcdr8WMDsHuOSD2w/640?wx_fmt=png&from=appmsg)

由于开路集电极晶体管的额定电压，从有限输入电压范围开始实施存在诸多问题。但最大的障碍是高驱动阻抗。ROFF 和 RGATE 电阻器都必须是高阻值电阻器，才能在开关导电期间限制驱动器中的持续电流。而且，栅极驱动振幅取决于电阻器分频器比值和输入电压电平。由于开关速度和 dv/dt 抗扰性严重受限，因而此电路被排除在开关 应用非常重要。然而，这个非常简单的电平位移接口可用于在浪涌电流限流器或速度不是重要考量因素的类似应用中驱动开关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulLSc84kAP0sMcjfNC0icr8YtqyRzHuJbYLckkPibZ0CiauTfiauMX1WvxHg/640?wx_fmt=png&from=appmsg)

图 20 显示了电平位移的栅极驱动电路，该电路适合高速 应用 并可与常规 PWM 控制器无缝配合使用。在双极Totem-Pole 驱动器级输入端，很容易识别开路集电极电平位移原理。在此实施中，电平位移器具有两个作用；它可以反转 PWM 输出并将输入电压轨作为 PWM 信号的基准。

开通速度快，由 RGATE 和 R2 决定。在开关导通时，一个较小的直流电流流入电平位移器内，使驱动器保持正确的偏置状态。栅极驱动功率和电平位移电流都由功率级正输入提供，该输入端通常会被有效地旁路绕过。

驱动器的功耗一部分取决于频率（基于主开关的栅极电荷），一部分取决于占空比和输入电压（由于电平位移器中流动的电流）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulMkxGMvmbovePmiaz5XRzRib78buzoST0G41k3sORx9dhQtVZzic6TuS2Q/640?wx_fmt=png&from=appmsg)

此电路的一个缺陷是由于存在 R1 和 R2 分频器，VDRV 仍然是输入电压的函数。在大多数情况下，保护电路可能需要防止栅源极端子上产生过高的电压。另一个潜在的难题是 NPN 电平位移晶体管的饱和，这会延长由 R1 和 RGATE 决定的关断时间。幸运的是，这些缺点均可通过移动 QINV 的发射极和 GND 之间的 R2 来消除。最终电路可在开通和关断过程中提供恒定的栅极驱动振幅和快速对称的开关速度。驱动器方案的 dv/dt抗扰性主要由 R1 电阻器决定。低阻值电阻器可提高抗 dv/dt 电感开通的能力，不过会增加电平位移器的功率损耗。还应注意，此解决方案有一个内置上电过程自偏置机制。当 PWM 控制器仍然处于非活动状态时，QINV 关断，并且 R1 和Totem-Pole驱动器的上 NPN 晶体管使主 MOSFET 的栅极保持在阈值以下。不过，应特别注意快速输入电压瞬变，因为它会在 P 沟道 MOSFET 晶体管的关断状态下导致 dv/dt 电感开通。

一般来说，直流电平位移驱动器的效率相对较低，其功率损耗限制在特定输入电压电平以上。这些基本的折衷是为了平衡开关速度和电平位移器的功率损耗，从而在整个输入电压范围内满足所有要求。

5.2 适用于 N 沟道器件的高侧直接驱动器

绝大多数电源应用将 N 沟道 MOSFET 用作主电源，因为其价格低廉，速度更快，且导通电阻更低。将 N沟道器件用作高侧开关需要使用以 MOSFET 的源极为基准的栅极驱动电路。驱动器必须能够承受开关转换过程中出现的剧烈电压摆幅，并将 MOSFET 的栅极驱动在电源的正电源轨以上。在大多数情况下，栅极驱动电压必须高于电路中提供的最高直流电势。所有这些困难使得高侧驱动器设计成为一项富有挑战的任务。

5.2.1 适用于 N 沟道MOSFET的高侧直接驱动

在最简单的高侧应用中，可通过 PWM 控制器或接地参考驱动器直接驱动 MOSFET。此应用必须满足两个条件：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulCzalIKWdamMYgmHB7nFTSMIWdFuQ4vxQClJL8xliccjED5pMldD6leg/640?wx_fmt=png&from=appmsg)

典型应用原理图如图 21 所示，其中包含可选的 PNP 关断电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulE5aBuamKuvzDLRb2Qic1iaykha0ibcxAWzWiaAldibc7AhCQhdzuC8GUiaHA/640?wx_fmt=png&from=appmsg)

看看电路的基本运行（现在忽略 PNP 关断晶体管），此配置与接地参考驱动方案相比有两个主要差异。由于漏极连接到正直流输入电压轨，因此开关操作发生在器件的源极端子上。它仍然是相同的钳位电感应开关，开通和关断间隔相同。但是从栅极驱动设计的角度来看，这是一个完全不同的电路。请注意，栅极驱动电流在源极端子上无法返回接地点。相反，该电流必须流经连接到器件源极的负载。在非连续电感器电流模式下，栅极充电电流必须流经输出电感器和负载。然而在连续电感器电流模式下，可以通过整流器二极管的导电 pn 结使环路闭合。在关断时，栅极放电电流流经连接在接地点和 MOSFET 源极之间的整流器二极管。在所有运行模式下，CGD 电容器的充电和放电电流都会流经功率级高频旁路电容器。

这些差异导致的最终结果是，由于栅极驱动电路中所需的元件增加、环路面积增大，寄生源极电感相应增大。之前提到，源极电感对栅极驱动具有负反馈影响，并会减慢电路中的开关操作。

高侧直接驱动的另一个显著差异是源极（即电路的开关节点）的行为。通过密切注意关断过程中 MOSFET的源极波形，可以观察到一个较大的负电压。图 22 阐明了这项非常复杂的开关操作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulGlBegxzFFYV62GNG0CRoT7FAicE8eA8RnqmbX8yOibZBeUtN1XcgM4ZQ/640?wx_fmt=png&from=appmsg)

当通过将栅极端子拉至接地来启动关断过程时，MOSFET 的输入电容会快速放电至米勒平坦区域电压。器件仍然完全导通，完整的负载电流会经过漏极流至源极，并且压降较小。接下来，在米勒区域，MOSFET充当源极跟随器。

源极与栅极电压一起下降，同时漏源极上的电压上升，栅源极电压在 VGS,Miller 电平上保持恒定。dv/dt 受到器件的栅极驱动阻抗和 CGD 电容器限制。一旦源极电压降至 0.7V 或低于地电平，整流器二极管应将开关节点钳制为地电平。

实际上，源极可以在短时间内降至地电平以下，直至整流器二极管完成正向恢复过程，并且电流克服了寄生电感的影响。当负载电流从 MOSFET 完全传输到二极管后，开关节点可以返回到最终电压，即低于地电平的二极管压降。

此源极电压的负偏移说明栅极驱动电路存在一个重大问题。慢速二极管和高寄生电感值可导致 MOSFET 源极上的负电压过高，并可将驱动器的输出引脚拉至地电平以下。为了保护驱动器，可在输出引脚和接地之间连接低正向压降肖特基二极管，如图 21 所示。要考虑的另一方面是，当栅极端子达到 0V 时，栅极放电电流将变为零。对栅极端子和 MOSFET 的进一步负拉取会开始重新开通。最后，系统实现了精妙的平衡，栅极放电电流和寄生电感上的压降使得器件电流拥有相同的 di/dt。

甚至图 21 中所示的可选关断加速电路在开关结处于负电压尖峰时没有帮助。当栅极电压降至地电平上的VBE 时，PNP 晶体管将关断，并且在负电压瞬变过程中 MOSFET 会被孤立。还应注意主开关处于关断状态时，抗噪性能有所下降。源极电压比地电平低几百毫伏，栅极保持为高于地电平约 0.7V。栅极相对源极的此正电压接近阈值电压，尤其对于逻辑电平器件和高温条件下，这一点非常危险。

5.2.2 自举栅极驱动技巧

当输入电压电平禁止为高侧 N 沟道 MOSFET 使用直接栅极驱动电路时，可以考虑使用自举栅极驱动技术的原理。此方法利用栅极驱动和附带的偏置电路，两者都将主 MOSFET 晶体管的源极作为基准。驱动器和偏置电路都在两个输入电压轨和器件源极之间摆动。然而，可通过低电压电路元件实施驱动器和浮动偏置，因为这些元件上永远不会施加输入电压。驱动器和接地参考控制信号由电平位移电路连接，该电路必须承受浮动高侧和接地参考低侧电路之间的高电压差和较大的电容开关电流。

5.2.2.1 分立式高性能浮动驱动器

代表自举原理的典型实施如 图 23 所示。接地参考 PWM 控制器或 MOSFET 驱动器由其局部旁路电容器和输出引脚代表。自举栅极驱动电路的构件块易于识别。电平位移电路由自举二极管 QBST、R1、R2 和电平位移晶体管 QLS 构成。自举电容器 CBST、图腾柱双极驱动器和常规栅极电阻器都是自举解决方案的浮动型源极基准部件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulbZ3R5ibzj3W6eKTO07vkzERxlZRWhXwmOnpQYkhOGZD4ygMeGfSficAQ/640?wx_fmt=png&from=appmsg)

此特殊实施采用无板载浮动驱动器的低成本简单 PWM 控制器，可非常高效地应用于 12V 至大约 24V 的系统。IC 额定电压不限制输入电压电平，这一点非常有用。而且，电平位移电路是源极开关小型 NMOS 晶体管，在主 MOSFET 导通时不会从自举电容器上消耗任何电流。这在保持电平位移器高效以及延长主开关最大导通时间方面是一个重要特性。运行方式可总结如下：当 PWM 输出升高以开通主 MOSFET 时，电平位移晶体管关断。R1 支持基极电流流至Totem-Pole驱动器的上 NPN 晶体管，然后主 MOSFET 开通。从自举电容器 CBST 中获取栅极电荷。当开关开通时，其源极摆动至正输入电压轨。自举二极管和晶体管阻止输入电压，驱动器的电源由自举电容器提供。在关断时，PWM 输出降低，并开通电平位移晶体管。  

电流开始流入 R1 和 R2，流向接地点，然后图腾柱驱动器的低 PNP 晶体管开通。当主 MOSFET 的栅极放电时，漏源极电压升高，源极转换为低电平，从而开通整流器。在主开关关断时，自举电容器通过自举二极管重新充电至 VDRV 电平。此电流由接地参考电路的 CDRV 旁路电容器提供，并流经 DBST、CBST 和导电整流器元件。这就是自举技术的基本运行原理。

5.2.2.2 集成的自举驱动器

在中等输入电压 应用（主要是 24 V 或 48 V 电信系统）中，大多数自举元件都可集成到 PWM 控制器中，如图 24 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulq3Dk0d5ZIXtPbSQ7hRtAahJZEPibDOj0OrbjejaIudATdGEZpwic0sRg/640?wx_fmt=png&from=appmsg)

对于更高的电压，可使用专用驱动器 IC 来简化在高达 600V 额定电压下自举栅极驱动的设计。这些高电压IC 采用独特的电平位移设计，在这一点上有所不同。为了维持高效可管理的功率损耗，电平位移器在主电源导通时不应消耗任何电流。即使电平位移晶体管中出现 1mA 的微小电流，在最坏情况下都可能导致驱动器IC 中形成接近 0.5W 的功率损耗。

广泛应用于这些领域的 技术 称为脉波拴锁电平转换器，如图 25 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFuldWtd3GfPzXb3kias02afTqdricmppmvo9IQYLETiae531OUsWhZEyfhjw/640?wx_fmt=png&from=appmsg)

如图所示，PWM 输入信号被转换为 ON/OFF 命令。上升沿和下降沿产生的短脉冲会驱动与高侧电路交互的电平位移晶体管对。相应地，对驱动器的浮动部分也进行了修改，电平位移命令信号必须与噪声区分开并被栓锁，以保证正常操作。由于电平位移器中会出现短时电流，此操作可降低功率损耗，但同时也会降低抗噪性，因为在驱动器输入端不能持续出现命令信号。600V 额定脉波拴锁电平转换器上的典型脉宽大约为120纳秒。驱动器的自然延时中增加了此时间间隔，并出现在运行中的开通和关断延时中，驱动器的数据表中列出了此间隔。由于超出最佳延时，因此高电压栅极驱动器 IC 的运行频率范围限制在几百 kHz 以下。有些低电压高侧驱动器 IC（不超过100V）使用连续电流直流电平位移电路来消除脉冲鉴别器的延时，因此它们支持更高的工作频率。

5.2.2.3 自举开关操作

自举栅极驱动电路可与高侧 N 沟道 MOSFET 晶体管一起使用，如图 26 所示。高侧开关的开关转换之前在讲到高侧 N 沟道直接驱动方案的时候已经介绍过，这些转换同样适用于自举驱动器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulTBhpGMkINs4wq4EAqfliaibqNktL4B88CIGzGF5icHrnfIzXqMtib2w21w/640?wx_fmt=png&from=appmsg)

此电路最大的问题就是在关断过程中器件的源极上会出现负电压。如前文所述，负电压的振幅与将主MOSFET 的源极接地的寄生电感（包括与整流器关联的寄生电感）和器件的关断速度 (di/dt) 成比例，这主要由栅极驱动电阻器 RGATE 和输入电容器 CISS 确定。对于驱动器的输出级来说，此负电压会带来很大的麻烦，因为它会直接影响驱动器或 PWM IC 的源极引脚（通常称为 SRC 或 VS 引脚），并可能将某些内部电路的电压拉至远远低于地电平。

负电压瞬变带来的其他问题还有可能在自举电容器上形成过压。DBST 会将电容器 CBST 从 CDRV 充至峰值。因为 CDRV 以接地为基准，自举电容器上可形成的最大电压是 VDRV 与源极端子上负电压振幅之和。用一个小电阻器与自举二极管串联便可缓解这个问题。遗憾的是，串联电阻器不能针对过压问题提供安全的解决方案，它还会延长自举电容器重新充电的过程。

图 27 中显示的电路可为 SRC 引脚提供非常有效的保护。它需要将栅极电阻器从栅极移到驱动器和主MOSFET 之间的源极引线上，并在接地点和驱动器的 SRC 引脚之间增加一个低正压降小型肖特基二极管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul1cy0GmBVp6HpfqTDvWmPmT63Qocto4fhCkfZyFiaOkVOGeIKGjHibicLg/640?wx_fmt=png&from=appmsg)

在此电路中，RGATE 具有两个作用：它可以设置 MOSFET 中的开通和关断速度，它可以在主开关的源极端子出现负电压瞬变的过程中为肖特基二极管提供限流。现在，开关节点的电压可以低于地电平几伏摆动，而不会干扰驱动器的运行。而且，可通过连接到 CBST 两端的两个二极管为自举电容器提供过压保护。此电路唯一的潜在危险是，自举电容器的充电电流必须流经 RGATE。CBST 和 RGATE 的时间常数会减慢重新充电过程，当 PWM 占空比接近单位带宽增益积时，这可能成为一个限制因素。

5.2.2.4 自举偏置、瞬变问题和启动

图 28 显示了自举栅极驱动技术的典型应用图。原理图上标出了四个重要的旁路电容器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul4jluKQ9icict4kYy4m6fSRKPNYyAzmEPoRDSd7T2aqkWwxqicCcB6swicw/640?wx_fmt=png&from=appmsg)

从设计角度来看，自举电容器 CBST 是最重要的元件，因为它可以过滤对主 MOSFET 的栅极充电的高峰值电流，同时为源极基准浮动电路提供偏置。在正常运行的每个开关周期内，自举电容器可提供用于开启MOSFET 的总栅极电荷 (QG)、反向恢复电荷 (QRR) 和自举二极管 (ILK,D) 的泄漏电流、电平位移器 (IQ,LS) 和栅极驱动器 (IQ,DRV) 的静态电流以及栅源极端子 (IGS) 间的泄漏电流，包括由潜在栅源极下拉电阻器消耗的电流。这些电流中有一部分只在主开关开通期间流动，一部分可能为零，具体取决于驱动器和电平位移器的实际实施。

假定处于稳态运行中，可使用 公式 30 来计算实现目标纹波电压 ΔVBST 的自举电容值：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulKqNpJQV4M4bmonO0ZhzOlTeLKHF9PMicicicNicia0xmmbO3GYiaibUniamn6g/640?wx_fmt=png&from=appmsg)

要最终确定自举电容值，还必须检查两种极端运行条件。在负载瞬变过程中，可能必须在几个开关周期内将主开关保持在开启或关断状态。为了确保在这些情况下不间断运行，CBST 电容器必须储存足够的能源以使浮动偏置电压长时间保持在高侧驱动器 IC 的欠压锁定阈值之上。

从轻负载到重负载，某些控制器可以使主开关持续保持开启状态，直至输出电感器电流达到负载电流值。最大开通时间 (tON,MAX) 通常由该值和输出电感器上的压差来决定。在这些情况下，可按 公式 31 所示的方法确定最小自举电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulozLot7xCSlV6A9XChmgJV6ota8EVxZdibzWBCxltozkJKsEhMpWKASA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulCDHeF9wiaKCr6JvX5TwvPo4KbOey0C52MO9oduofHoOj8UPbDaeLwEA/640?wx_fmt=png&from=appmsg)

采用分立式浮动驱动器实施，VUVLO 可用最小安全栅极驱动电压取代。

当 MOSFET 在几个开关周期内保持关断时，其他方向的任何负载瞬变均需要脉冲跳跃。当输出电感器电流达到零时，主开关的源极稳定在输出电压电平上。自举电容器必须提供所有常规放电电流分量并存储足够的能源以便在空闲周期结束时开启开关。与以前的瞬态模式相似，可按 公式 32 所示的方法计算最小电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulMlt3ez7fcfcYhpxJSyUTgPLeSbjAvBtJD21Gya3auD5d92K2OVb1vQ/640?wx_fmt=png&from=appmsg)

在某些 应用领域（如电池充电器），在向转换器施加输入功率之前可能存在输出电压。在这些情况下，主MOSFET的源极和 CBST的负节点处于输出电压，自举二极管可能在启动时反向偏置。有可能无法向自举电容器提供初始电荷，具体取决于偏置和输出电压电平之间的电势差。假定输入和输出电压之间有足够的压差，包含 RSTART 电阻器、DSTART二极管和 DZ齐纳二极管的简单电路可以解决启动问题，如图 29 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulGoWaQexemnacicU90RtChM4cLgQG6z5VxgNKoSyy92nUzSgbwIt8Yzg/640?wx_fmt=png&from=appmsg)

在此启动电路中，DSTART 充当第二个自举二极管，用于在上电时对自举电容器充电。CBST将充电至 DZ 的齐纳电压，正常运行过程中它应高于驱动器的偏置电压。自举电容器的充电电流和齐纳电流受到启动电阻器的限制。为了实现最佳效率，可选择 RSTART 的值将电流限制到一个较低值，因为通过启动二极管的第二个自举路径在电路中永久存在。

5.2.2.5 接地注意事项

要通过高侧 N 沟道 MOSFET 实现自举栅极驱动器的最佳布局设计，需要解决三个重要的接地问题。图 28可用于识别典型应用中最重要的高电流环路。

首先要关注的是尽可能将栅极的高峰值电流限制在较小的物理区域内。考虑到栅极电流必须流经的路径，这可能是一项富有挑战性的任务。在开启时，路径中需要自举电容器、驱动器的开启晶体管、栅极电阻、栅极端子，最后，环路在主 MOSFET 的源极闭合，这也是 CBST 的基准。关断过程更复杂，因为栅极电流有两个独立分量。CGS 电容器的放电电流有效地控制在局部，它流经栅极电阻器、驱动器的关断晶体管，并从功率MOSFET 的源极流至栅极。另一方面，CGD 电容器的电流必须流经 RGATE、驱动器的关断晶体管、输出滤波器，最终流至功率级输入电容器 (CIN)。必须在印刷电路板上尽量缩小承载栅极驱动电流的所有三个环路。

第二个高电流路径包含驱动器的自举电容器、自举二极管、局部接地参考旁路电容器和整流器二极管或功率级晶体管。通过自举二极管从接地参考驱动器电容器 CDRV（从 DBST 的阳极接地）周期性对 CBST 重新充电。重新充电发生在短时间隔内，需要高峰值电流。所以，高侧驱动器必须同时在输入侧局部旁路绕过。根据经验法则，CDRV 应比 CBST 大一个数量级。尽可能减小印刷电路板上的环路面积对于确保可靠运行同样重要。

此电路的第三个问题是将电源接地和浮动电路之间流动的寄生容性电流限制在一个低阻抗环路内。目标是使这些电流偏离敏感模拟控制部件的接地点。图 30 展示了在两种包含高侧驱动器 IC 的代表性应用中的寄生容性 电流路径。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul5nuZlWWibh3rl8b9y6fsGQyRwhnfFjCnCqClgOarv7sElzl2bQGrsqw/640?wx_fmt=png&from=appmsg)

单个高侧驱动器 IC 通常只有一个 GND 连接。由于容性电流必须返回功率级接地电势，因此 IC 的低侧部分应以电源接地为基准。这与直觉不符，因为驱动器的控制信号以信号接地为基准。然而，消除模拟和电源接地间的高容性电流分量还可确保尽可能减小两个接地点之间的电势差。

通过通用半桥驱动器 IC 可显著改善这种情况，该 IC 在同一封装中包含一个低侧和一个高侧驱动器。这些电路有两个接地连接，通常标示为 GND 和 COM，使布局更加灵活。为了使容性电流尽可能在最短的路径内返回电源接地，COM 引脚与电源接地连接。可利用 GND 引脚提供与控制器的信号接地的连接，从而最大程度地提高抗噪性。

但出于完整性考虑，还需要提到 PWM 控制器的旁路电容器，该电容器置于靠近 IC 的 VCC 和 GND 引脚处。再来看看图 28，CBIAS 相对于 CBST 和 CDRV 而言是一个较小的电容器，因为它只提供高频旁路，而不参与栅极驱动过程。

6\. 交流耦合栅极驱动电路

栅极驱动路径中的交流耦合可为栅极驱动信号提供简单的电平位移。交流耦合的主要作用是修改主MOSFET 的开通和关断栅极电压，而高侧栅极驱动则不同，它最需要关注的是缩小较大的电势差。在如图31 所示的接地参考示例中，栅极驱动在 -VCL 和 VDRV-VCL 电平之间，而不是驱动器的初始输出电压电平 0V和 VDRV 之间。电压 VCL 由二极管钳断网络决定，在耦合电容器上形成。此技术的优点是能够以简单的方法在开关关断时和关断状态下为栅极提供负偏置，从而提高 MOSFET 的关断速度并改善 dv/dt 抗扰性。这种折衷方法略微降低了开启速度，同时由于正驱动电压降低可能增加 RDS(on) 电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulD8cZLY0t0CYQJ10amOhFcATkFHibAAnN7yRMNIOC6mmZBbHuNvmApPQ/640?wx_fmt=png&from=appmsg)

交流耦合的基本元件是耦合电容器 CC 和栅源极负载电阻器 RGS。

该电阻器在上电过程中发挥着关键作用，可拉低栅极电压。这是唯一一种在启动时使 MOSFET 保持关断的机制，它的原理是在驱动器的输出端和器件栅极之间阻断耦合电容器的影响。此外，RGS 为耦合电容器上的电流提供了一个路径。如果没有这个电流分量，则不允许在 CC 上形成电压。从理论上来说，会在每个开关周期中提供数量相同的总栅极电荷，然后通过电容器移除，并且经过 CC 的净电荷为零。

相同的原理可应用于稳态运行，以通过电路中的 RGS 确定耦合电容器上的直流电压。假定没有钳位电路，电容器上的恒定 VC 电压、恒定占空比 D 和 RGS 的电流可表示为经过 CC 的附上电荷分量。

相应地，在 MOSFET 的开启和连续开通过程中通过耦合电容器提供的总电荷如 公式 33 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulR6KGBsFqA7Z00W9LzPMw3dm9JMn1g6KNiaH89m30g2F6XfibgAYt38CQ/640?wx_fmt=png&from=appmsg)

对于开关的关断和连续关断时间也应遵循相同的注意事项，总电荷可按 公式 34 所示进行计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulAtXwt83jkx6e272Is7zALx7hC71pgDMzSMCnODicRHqUPbXicq4VMIBg/640?wx_fmt=png&from=appmsg)

对于稳态运行，两种电荷必须相等。

通过求解 VC 的方程式，可确定耦合电容器上的电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulRx4ibGa6vfUEKgVlngCF0rA1hI9Xh8GEbickT8SkREvmwZdicHd0UqQIg/640?wx_fmt=png&from=appmsg)

这个为人所熟知的关系强调了占空比对耦合电容器电压的依赖性。随着占空比变化，VC 随之改变，且MOSFET 的开通和关断电压相应调节。按照 图 32 的示例，在低占空比周期中，关断过程中的负偏置减小，而在高占空比时，开启电压不足。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulMt9remaKKMcKE2Bu7UpRTZEDQ6bnoaBnKrNvXLS622DZrUUvwkgwnA/640?wx_fmt=png&from=appmsg)

可使用与 RGS 并联的钳位电路来解决大占空比下开启电压不足的问题，如 图 31 所示。图 32 中还显示了对耦合电容器电压的影响。由于耦合电容器电压受到钳位限制，因此可确定栅极的最大负偏置电压。由于栅极驱动振幅不受交流耦合电路的影响，因此可确保整个占空比范围内的最低开启电压。

6.1 计算耦合电容

每个开关周期中经过 CC 的电荷量会以开关频率为基础在耦合电容器上形成交流纹波电压。显然，这种电压变化与驱动电压的振幅相比应保持较小的值。

可根据之前确定的电荷计算纹波电压，如公式 36 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulslr2b2c7IRp1op3q9yzzZNrNN8ISu8qzow2qZwlGmX7pE0UJf2QJRw/640?wx_fmt=png&from=appmsg)

考虑到 VC = D⋅VDRV，还可重新排列 公式 37 以获得所需的电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulkmsxguLEeNxJ59YLYwphCa3rMDdcV6qvjhjaT35umEojApbDW7EYlQ/640?wx_fmt=png&from=appmsg)

此表达式表明在 D = 0.5 时为最大值。一条良好的经验法则是，将最差情况下的交流纹波电压振幅 (ΔVC) 限制为大约 VDRV 的 10%。

6.2 耦合电容器的启动瞬变

必须再定义一个参数，才能计算所需的最小耦合电容值。必须选择 RGS 的值。为了做出明智的决策，必须检查交流耦合电路的启动瞬变。

上电时，CC 上的初始电压为零。当驱动器的输出开始切换时，耦合电容器上的直流电压会逐渐上升，直至达到稳态值 VC。在 CC 上形成 VC 的持续时间取决于由 CC 和 RGS 决定的时间常数。因此，要同时实现耦合电容器的目标启动瞬变时间和特定纹波电压，必须同时计算两个参数。幸运的是，以下两个公式可计算这两个未知数：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulxKOwN1Ozb57OiadUDBN2kVPnqI7TTJR5HnK4hesdhU3HhmFrm7qA9ww/640?wx_fmt=png&from=appmsg)

从而得到一个解决方案。代入第二个公式中 RGS 的表达式，最差情况下 D = 0.5，确定 ΔVC = 0.1 × VDRV，可求解并简化第一个公式，计算最小电容值，如 公式 39 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulTvbicwlPiboFef3awibrVpThypcNVZgwJjKRKnxP2ItT44CP6LeDyNyNA/640?wx_fmt=png&from=appmsg)

计算出 CC,MIN 后，其值和所需启动时间常数 (τ) 决定了所需的下拉电阻。交流耦合驱动的常见设计折衷方法是平衡效率和瞬变时间常数。为了在不同占空比下更快地调节耦合电容器电压，必须允许栅源极电阻器上存在更大的电流。

7\. 变压器耦合栅极驱动

在高电压栅极驱动 IC 出现以前，使用栅极驱动变压器是唯一一种在离线或类似高电压电路中驱动高侧开关的可行解决方案。现在，两种解决方案同时存在并且各有利弊，可用于不同的 应用非常重要。集成高侧驱动器非常方便，使用的电路板更小，但开通和关断延时比较长。设计合理的变压器耦合解决方案具有可忽略的延时，可跨更高的电势差运行。通常，它使用更多元件，需要设计变压器，或者至少了解其运行和规格。在集中精力设计栅极驱动电路前，应检查一些与所有变压器设计有关的常见问题及其与栅极驱动变压器的关联。

• 变压器至少有两个绕组。使用独立的一次和二次绕组便于实现隔离。一次绕组和二次绕组之间的匝数比可实现电压调节。在栅极驱动变压器中，通常不需要电压调节，但隔离是一个重要功能。  

• 理想情况下，无一例外，变压器不存储能源。所谓的反激式“变压器”实际上是耦合电感器。然而，实际变压器中绕组之间的非磁性区域以及两个半芯结合处的小气隙中会存储少量能源。这种能源存储由泄漏和磁化电感表示。在电源变压器中，减小泄漏电感对于最大程度地减少能源存储进而确保高效率来说非常重要。栅极驱动变压器所需的平均功耗非常小，但它在开通和关断时会产生高峰值电流。为了避免栅极驱动路径中的延时，低泄漏电感仍然必不可少。

• 法拉第定律要求变压器绕组上的平均电压在一段时间内必须为零。即使较小的直流分量也可导致通量“漂移”，最终导致磁芯饱和。此法则会对由单端 PWM 电路控制的变压器耦合栅极驱动的设计产生重大影响。

• 磁芯饱和限制了绕组上施加的伏秒数。变压器设计必须预测所有运行条件下的最大伏秒数，这必须同时包含最差情况下的瞬变和最大占空比以及最大输入电压。栅极驱动变压器设计中唯一一个放宽情况是稳压电源。

• 必须保留开关周期中很大一部分，以便重置单端应用（只工作在 B-H 平面的第一象限，例如正向转换器）中主电源 变压器的磁芯。复位时间间隔可限制变压器的工作占空比。即使在单端栅极驱动变压器设计中，这基本上也不是问题，因为必须采用交流耦合，所以会使用双向磁化。

7.1 单端变压器耦合栅极驱动电路

这些栅极驱动电路与单输出 PWM 控制器结合使用，以驱动高侧开关。图 33 显示了基本电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulBqU7tT3pFbibKHLvrkcpX14N2OEGrd2kDExj4yegLfjiagHktI6IJfyA/640?wx_fmt=png&from=appmsg)

耦合电容器必须与栅极驱动变压器的一次绕组串联，以便为磁化电感提供复位电压。如果没有电容器，绕组上就会形成一个取决于占空比的直流电压，并且变压器会饱和。

CC 的直流电压 (VC) 的形成与交流耦合直接驱动中所示的方法相同。公式40 中还显示了耦合电容器电压的稳态值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulaQWJt9oZq2kibtwtAuhNWBPQejzYt3CA5u8rcPUYYY0RficM2dSvpM2Q/640?wx_fmt=png&from=appmsg)

与交流耦合直接驱动相似，实际的栅极驱动电压 VC 会随占空比变化。此外，占空比的突然变化会激发由栅极驱动变压器和耦合电容器的磁化电感形成的 L-C 谐振环路。在大多数情况下，可通过插入一个与 CC 串联的低阻值电阻器 (RC) 来减小此 L-C 谐振。RC 的值由谐振电路的特性阻抗决定，并按公式 41 中指定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulQWjfpelwJjBCeibWp0pcTMWibg4GLJk2LAC9EEQALtVrVxYy56lVMeoQ/640?wx_fmt=png&from=appmsg)

请记住，公式 41 中定义的 RC 值是包含 PWM 驱动器的输出阻抗的等效串联电阻。而且，还应考虑耦合电容器电压的临界阻尼响应可能需要不合理的高电阻值。这会限制栅极电流，最终限制主开关的开关速度。另一方面，欠阻尼响应可能导致谐振过程中在栅源极端子上出现不可接受的电压应力。

形成 VC 的电流有两个分量：变压器的磁化电流以及主 MOSFET 栅极和源极之间连接的下拉电阻器中流动的电流。相应地，控制耦合电容器电压的调节速度的启动和瞬变时间常数体现了栅极驱动变压器的磁化电感的影响，可通过以下公式估算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulffEcwSUGKqUtRrqwkqdoAPNjlDpyicUxHNwevLYvY8vvIekrE7UOqeg/640?wx_fmt=png&from=appmsg)

磁化电感对驱动器的净电流及其方向还有另一种明显的影响。图 34 强调了电路中流动的不同电流分量以及驱动器应提供的电流分量之和 IOUT。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulFfXwFSicxZJiam93hbfN41UeDa1RoD2nz8FbSp0GLLMRNmRGluuSNz3g/640?wx_fmt=png&from=appmsg)

请注意输出电流波形中的灰色阴影区域。输出驱动器处于低状态，这意味着它需要灌入电流。但由于磁化电流分量，驱动器实际上在拉电流。因此，输出必须通过变压器耦合栅极驱动来处理双向电流。如果驱动器不能承载双向电流，可能需要增加二极管。双极 MOSFET 驱动器是一个典型示例，在该示例中，需要在接地点和输出引脚之间连接肖特基二极管。类似情况还发生在不同占空比或电流分量值时驱动器处于高状态的过程中。解决此问题并避免在驱动器输出端增加二极管的一个简单方法是增加阻性电流分量以抵消磁化电流的影响。

当占空比较大时（如降压转换器），图 33 的电路不能提供足够的栅极驱动电压。耦合电容器电压与占空比成比例上升。相应地，关断期间的负偏置也会增加，而开启电压降低。在栅极驱动变压器的次极增加两个小分量可以防止这种情况。

图 35 显示了恢复栅极驱动脉冲的初始电压电平的常用技术。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulicQX53h86t1xPqhrygkEzib6xLXVogV6zQfNm2XIlpkddovziamV2HZzA/640?wx_fmt=png&from=appmsg)

在此，使用二级耦合电容器 (CC2) 和简单的钳位二极管 (DC2) 来恢复变压器次级侧上的初始栅极驱动振幅。如果在主开关关断期间需要更大的负偏置，可以增加一个齐纳二极管，以类似于 图 31 中所示的方式与该二极管串联，相对于交流耦合直接驱动解决方案。

7.1.1 计算耦合电容

计算耦合电容值的方法基于允许的最大纹波电压，稳态运行时经过该电容器的电荷量在之前的交流耦合电路中已经介绍过。CC2 的公式与直接耦合栅极驱动电路的公式相似。纹波电压有两个分量：一个与主 MOSFET的总栅极电荷有关，另一个分量是由栅极下拉电阻器中的电流产生的：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulZOGHG49BGGQoEktH9LEoIaX1QRLk4PRhhibPT5iclWOPUCKhEMkBeLYw/640?wx_fmt=png&from=appmsg)

此表达式在开关最大开通时间（也就是最大占空比）时具有最大值。在初级侧耦合电容器中，栅极驱动变压器的磁化电流会产生更多纹波电压分量。其影响体现在 公式 44 中，可使用该公式计算初级侧耦合电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulBywR469lIort5RmEHjzccjHSQEkz3o0UuicFHoreAkolO8UXicGFw3RQ/640?wx_fmt=png&from=appmsg)

可通过确定上述表达式的最大值找到可确保在所有运行条件下保持在目标纹波电压以下的最小电容。遗憾的是，在不同占空比下都可能出现最大值，具体取决于实际设计参数和分量值。在大多数实际解决方案中，它介于 D = 0.6 至 D = 0.8 的范围内。

还应注意，纹波电压之和 ΔVC1 + ΔVC2 出现在主 MOSFET 晶体管的栅极端子上。当在栅极端子上追求特定纹波电压或压降时，必须在两个耦合电容器之间进行分摊。

7.1.2 栅极驱动变压器设计

栅极驱动变压器的功能是跨大电势差传输接地参考栅极驱动脉冲，以适应浮动驱动实施。和所有变压器一样，它可用于整合电压调节，但是它很少用到。它用于驱动功率 MOSFET 的栅极所需的功耗较小，但会产生高峰值电流。栅极驱动变压器由作为 PWM 占空比的函数的可变脉宽驱动，是恒定振幅还是可变振幅取决于电路配置。在单端电路中，栅极驱动变压器采用交流耦合，磁化电感会遇到可变振幅脉冲。半桥应用等双端 排列可通过恒定振幅信号驱动栅极驱动变压器。在所有情况下，栅极驱动变压器运行在 B-H 平面的第一和第三象限。

栅极驱动变压器的设计与电源变压器的设计非常相似。匝数比通常为 1，由于功率损耗所导致的温升通常可忽略。相应地，设计可从磁芯选择开始。栅极驱动变压器的典型磁芯形状包括环形、RM、P 或类似磁芯。磁芯材料采用具有高磁导率的铁氧体，可最大程度地提高磁化电感值，从而降低磁化电流。经验丰富的设计人员可以根据经验选择磁芯大小，也可以按照确定电源变压器设计中所需磁芯的方法通过面积乘积估算来确定。选定磁芯之后，一次绕组的匝数可通过公式 45 计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulzlJib1E2AEBTCcdmzvQHpZDRd0ZS31EnpLzJYmaWyiblDCMlr0qLK8sA/640?wx_fmt=png&from=appmsg)

第一个任务是找到分子中的最大伏秒数。图 36 显示了作为转换器占空比的函数的单端和双端栅极驱动变压器的标准化伏秒数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulrKQOrLleeUOUZSTObib49Ck0CJTXFE2agfWstEhZsnVfUD2uYYh1fDA/640?wx_fmt=png&from=appmsg)

对于交流耦合电路，最差情况下 D = 0.5，在最大工作占空比下直接耦合达到峰值伏秒数。有趣的是，交流耦合可将最大稳态伏秒数减小四倍，因为在大占空比下，由于耦合电容器上形成电压，变压器电压成比例下降。

在 Np 公式中，计算 ΔB 则要难得多。原因是在瞬态运行过程中存在磁通走漏。当输入电压或负载快速变化时，PWM 控制器相应地调节占空比。推导磁通走漏的准确定量结果非常困难。它取决于控制环路谐振和耦合网络（在它出现时）的时间常数。一般来说，较慢的环路响应和较快的时间常数倾向于减小磁通走漏。对于大多数设计来说，在最差稳态运行中需要在饱和通量密度和通量峰值之间达到三比一的裕度，以适应瞬态运行。

下一步是在磁芯的可用窗口区排列绕组。如前面所述，应最大程度减小泄漏电感，以避免变压器上的延时，并且必须控制交流导线电阻。在环形磁芯上，绕组应双线或三线绕制，具体取决于栅极驱动变压器中绕组的数量。对于罐形磁芯，每个绕组都应保持在单层内。一次绕组应位于距离中心柱最近的位置，然后是低侧绕组（如果使用的话），高侧绕组应位于距离中心柱最远的位置。罐形磁芯的这种排列可提供可接受的泄漏电感和最低的交流绕组电阻。而且，通常直接连接到电源接地的低侧绕阻可针对浮动分量和电源接地间的容性电流提供控制（一次）绕组的自然屏蔽。

7.1.3 双用变压器耦合电路

在有些高侧开关 应用 中，高速栅极驱动 IC 的低输出阻抗和短传播延迟至关重要。图 37 和 图 38 显示了两种完全不同的解决方案，用于在浮动应用中只使用一个变压器向常规低电压栅极驱动 IC 提供电力和控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulufxStNYaBvg2n4ySkI1bM09kVqibH00TNuwSfLBGVGZLWpdKgz1uxew/640?wx_fmt=png&from=appmsg)

图 37 中的电路使用开关频率来传输驱动器的控制信号和电力。工作非常简单。在主开关开通时，对变压器次级侧上的正电压进行峰值整流，从而为栅极驱动 IC 产生电源电压。由于通过栅极驱动脉冲产生电力，因此前几个驱动脉冲必须对偏置电容器充电。所以，为此应用选择的驱动器 IC 最好有一个欠压锁定功能，以避免在栅极电压不足的情况下运行。如电路图中所示，必须使用直流恢复电路（CC2 和 DC2）产生驱动器的偏置电压，该电压与工作占空比无关。DC2 还可保护驱动器输入免受变压器二次绕组的负复位电压的影响。此电路的变压器设计与其他栅极驱动的变压器设计基本相同。驱动器 IC 的功耗略微提高了功率级别，与MOSFET 的总栅极电荷相关的功率损耗相比相对较小。该变压器可传输高峰值电流，但此电流对旁路电容器充电，而不是 MOSFET 的输入电容。所有栅极电流都限制在主晶体管、驱动器 IC 和旁路电容器之间的局部区域内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulHmlwF2Wliad4fw6w1YIBoic1mRnlvFfT16puKr8vAEPqWiat6dicHCbBuQ/640?wx_fmt=png&from=appmsg)

另一个类似解决方案是用同一个变压器传输电力和控制信号，如 图 38 所示。图 37 和 图 38 中两个电路之间的差异是变压器的工作频率。此实施利用专用芯片对。高频载波信号 (fCARRIER>>fDRV) 用于电力传输，同时调幅可传输控制命令。可将 图 38 中的栅极驱动原理图的基本框图集成到两个集成电路中，从而高效利用电路板空间。由于采用高频率运行，相对于传统栅极驱动变压器而言可减小变压器的大小。此解决方案的另一个优点是可独立确定浮动驱动器的偏置电压，而与栅极驱动命令无关，因此驱动器作出反应时不会出现之前解决方案中提到的启动延时。

7.2 双端变压器耦合栅极驱动

在高功率半桥和全桥转换器中，需要驱动两个或更多通常由推挽（也称为双端 PWM 控制器）控制的MOSFET。此类栅极驱动电路的简单原理图如图 39 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFul00wIHX7XU6VuMl6CJC8iaEjzbeGsV2iaUIMOk4swJ7dichIOBVaOQIPeQ/640?wx_fmt=png&from=appmsg)

在这些应用可直接获得双极性对称栅极驱动电压。在第一时钟周期内，OUTA 开启，在栅极驱动变压器的一次绕组上施加一个正电压。在接下来的时钟周期内，OUTB 开启相同时间（稳态运行），在磁化电感上提供极性相反的电压。在任何两个连续开关周期内对一次绕组上的电压求平均值会得到零伏。  

因此，推挽式栅极驱动电路中不需要交流耦合。

哪怕是由控制器中元件容差和偏移造成的少量不对称，都会让设计人员担心。可通过驱动器的输出阻抗或与变压器一次绕组串联的小电阻器来轻松补偿这些小偏差。占空比不均衡可导致变压器上形成较小的直流电流，从而在驱动电路的等效电阻上产生一个均衡电压。假定 PWM 输出有两个不同占空比 DA 和 DB，磁化电感的直流电流电平由 公式 46 决定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulp52sPCDZicLhW02NqeJ9aUib49icqYVI1VkdeGYCSiamlSJ99G5Hia7FfFA/640?wx_fmt=png&from=appmsg)

为了说明此问题的琐碎，假定 DA = 0.33、DB = 0.31（6% 的相对占空比差）、VDRV = 12 V 且 REQV = 5Ω（它是一个低侧和一个高侧驱动器输出阻抗之和）。得到的 DC 电流为 24mA，过度功率损耗仅为 3mW。栅极驱动变压器的设计遵循本节中介绍的相同规则和流程。最大伏秒数由 VDRV 和开关周期决定，因为推挽电路通常不受占空比限制。

必须提供最差情况下峰值通量密度和饱和通量密度之间的合适裕度（大约为 3:1）。

推挽式栅极驱动电路的独特应用如图 40 所示，可用于在相移调制全桥转换器中控制四个功率晶体管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulV7kiafzR4EXicPcDSf1I5MUiblDArMiaSZAEicrxTRUomxwfST8PTVBq19w/640?wx_fmt=png&from=appmsg)

由于采用相移调制技术，此功率级使用四个约为 50% 占空比的栅极驱动信号。每个桥臂中的两个MOSFET需要一个互补驱动波形，该波形可由相同栅极驱动变压器的两个输出绕组产生。虽然稳态占空比始终为0.5，但改变两个互补脉冲序列之间的相位关系必须在占空比中存在一种不对称。因此，在瞬态运行过程中，PWM 输出不会为栅极驱动变压器产生常规的 50% 占空比信号。相应地，必须在变压器中构建安全裕度以应对瞬变过程中占空比不均衡的情况。

另一个要指出的有趣事实是，可以轻松整合局部关断电路，并且变压器次级侧经常需要使用该电路。栅极驱动变压器，更确切地说是变压器的泄漏电感对于快速变化的信号会表现出相对较高的阻抗。如果没有针对高速开关应用优化驱动器的下拉能力，电源电路的关断速度和 dv/dt 抗扰性会受到严重 应用非常重要。

8\. 总结

前面所述的关于开关速度、dv/dt 抗扰性、旁路规则等方面的每条注意事项均适用于所有电路，包括变压器耦合栅极驱动。由于这些主题互为基础，因此只重点介绍了特定电路的独特新属性。

本应用报告展示了一种为高速开关应用设计高性能栅极驱动电路的系统性 应用非常重要。可通过以下分步核对表总结此过程：

• 在完成功率级设计并选择电源组件后，开始栅极驱动设计过程。

• 采集所有相关的工作参数。具体来说，包括基于应用要求的功率 MOSFET 的电压和电流应力、工作结温度以及与功率 MOSFET 周围外部电路相关的 dv/dt 和 di/dt 极限，这些参数通常由功率级的不同阻尼器或谐振电路决定。

• 估算用于描述实际应用电路中功率半导体的寄生分量值的所有器件参数。数据表中列出的值通常是在不现实的室温测试条件下产生中，必须相应地进行修正。这些参数包括器件电容、总栅极电荷、RDS(on)、阈值电压、米勒平坦区域电压、内部栅极网状电阻等。

• 应优先考虑以下要求：性能、印刷电路板大小、目标成本等。然后选择符合功率级拓扑的合适栅极驱动电流。

• 确定将用于为栅极驱动电路供电的偏置电压电平，并检查电压是否足以将 MOSFET 的 RDS(on) 降至最低。

• 根据目标上电 dv/dt 和所需的开通和关断开关速度，选择驱动器 IC、栅源极电阻值和串联栅极电阻RGATE。

• 根据需要设计（或选择）栅极驱动变压器。

• 如果是交流耦合，计算耦合电容值。  

• 检查启动和瞬态运行条件，尤其是在交流耦合栅极驱动电路中。

• 估算驱动器的 dv/dt 和 di/dt 能力，并将其与功率级确定的值进行比较。

• 根据需要增加一种关断电路，并计算可满足 dv/dt 和 di/dt 要求的分量值。

• 检查驱动器电路中所有元件的功率损耗。

• 计算旁路电容值。

• 优化印刷电路板布局，最大程度地减小寄生电感。

• 随时检查最终印刷电路板的栅极驱动波形，查看在栅源极端子和驱动器 IC 输出端有无过度振铃。

• 增加保护或根据需要更换栅极驱动电阻器以调整谐振电路。

在可靠的设计中，应针对最差情况对这些步骤进行评估，因为温升、瞬态电压和电流应力可以给驱动器的运行带来重大变化，最终影响功率 MOSFET 的开关性能。

当然，本文档中未介绍的栅极驱动实现还有很多。希望本文中介绍的原理和方法可以帮助读者了解和分析其他解决方案。如果读者希望在复杂的高速栅极驱动设计领域快速获取答案，请参阅附录 A 到 E，其中提供了不同计算的典型数字示例（研讨会1400 主题 2 附录 A/F 估算数据表中的 MOSFET 参数）。研讨会1400主题 2 附录 A/F 估算数据表中的 MOSFET 参数中的附录 F 提供了针对有源钳位正向转换器的完整分步栅极驱动设计示例，该示例中采用电源接地和浮动栅极驱动电路。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulzjFfrq9kPAGl5wGJwicVAOwibMbsIc3ibEzKQINXpjunrDaZtPvpo4m1A/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=79)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulib3PmoI4iaVCfibXVh1RfEwiayqeaKic4ZZv5FibEM8mzBGWc4jrMBUSx82A/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk4AwTP5DSvmZFZic3xkAFulbCIUJUry0xVS9oBq9wWrkupHNF9PGqCINQJq4JTlRuCMia0ibF2LVx3w/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=81)