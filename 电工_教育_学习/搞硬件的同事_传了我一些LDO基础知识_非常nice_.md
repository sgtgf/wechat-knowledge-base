# 搞硬件的同事，传了我一些LDO基础知识，非常nice！

原创 硬件笔记本 2023-08-18 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/U2iKiEdpsxSD7-nCu1EBow](https://mp.weixin.qq.com/s/U2iKiEdpsxSD7-nCu1EBow)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

本节分享下LDO的基础知识，主要来源于Ti的文档《LDO基础知识》，原文档下载链接如下：https://www.ti.com.cn/cn/lit/eb/zhcy089a/zhcy089a.pdf

  

内容会回答这些问题：

1、当输入电压与目标输出电压压差不满足Vdropout，会发生什么？

2、决定Vdropout电压大小的因素是什么？

3、芯片选定后，Vdropout电压就是固定的吗？与电压，电流是否有关？

4、温度，直流电压对滤波电容有哪些影响？

5、LDO封装如何选择？

6、LDO输出过流了会发生什么？

7、给定芯片的PSRR是固定的吗？跟哪些因素有关？

8、LDO输入输出之间并联的肖特基二极管是干什么用的？

  

压降

低压降稳压器 (LDO) 是一种用于调节较高电压输入产生的输出电压的简单方法。在大多数情况下，低压降稳压器都易于设计和使用。然而，如今的现代应用都包括各种各样的模拟和数字系统，而有些系统和工作条件将决定哪种LDO最适合相关电路，因此，现在我们需要关注这些决定性因素。

  

什么是压降

压降电压VDO，是指为实现正常稳压，输入电压VIN必须高出所需输出电压VOUT(nom) 的最小压差。

请参见公式 1：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZEXqfD6HOSSUQfBjOZ7rOaaDSBASrriaB2eCTkp5CwRhOoGiaCwT1T3XA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

如果 VIN 低于此值，线性稳压器将以压降状态工作，不再调节所需的输出电压。在这种情况下，输出电压 VOUT(dropout)将等于 VIN 减去压降电压的值（公式 2）：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZQW2worxRztHxcHR7n9lwF029eAKyDAGiacMZB9gcex7f8YoCrvAbLFA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

以调节后电压为 3.3V 的 TPS799 等 LDO 为例：当输出200mA 电流时，TPS799 的最大压降电压指定为 175mV。只要输入电压为 3.475V 或更高，就不会影响调节过程。但是，输入电压降至 3.375V 将导致 LDO 以压降状态工作并停止调节，如图 1 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbSGoG2yD8ZrQibqOx7r02naB4epOUia3nIOSDy5GGOsgUs7AKlN3NJ6bg/640?wx_fmt=png)

  

虽然应将输出电压调节为 3.3V，但TPS799没有保持稳压所需的余量电压。因此，输出电压将开始跟随输入电压变化。

决定压降的因素是什么？

压降主要由 LDO 架构决定。为说明原因，让我们来了解一下 P 沟道金属氧化物半导体(PMOS) 和 N 沟道 MOS (NMOS) LDO，并对比其工作情况。

PMOS LDO

图 2 所示为 PMOS LDO 架构。为调节所需的输出电压，反馈回路将控制漏-源极电阻 RDS。随着 VIN 逐渐接近 VOUT(nom)，误差放大器将驱动栅-源极电压 VGS 负向增大，以减小 RDS，从而保持稳压。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbnUInGuia4xKHkSiaueuGmicfXBRiaUria2Q1iawCQ2hgIP4Jp2yXvaz5ASjQ/640?wx_fmt=png)

  

但是，在特定的点，误差放大器输出将在接地端达到饱和状态，无法驱动 VGS 进一步负向增大。RDS 已达到其最小值。将此 RDS 值与输出电流 IOUT 相乘，将得到压降电压。

请记住，随着 VGS 负向增大，能达到的 RDS 值越低。通过提升输入电压，可以使VGS 值负向增大。因此，PMOS 架构在较高的输出电压下具有较低的压降。图 3 展示了此特性。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbACfZ2VyesAeWllMSGazDG8wojMhwp1peiahB803ibIGkLMcvEIuYBoxA/640?wx_fmt=png)

  

如图 3 所示，TPS799 的压降电压随输入电压（也适用于输出电压）增大而降低。这是因为随着输入电压升高 VGS会负向增大。

NMOS LDO

NMOS 架构如图 4 所示，反馈回路仍然控制 RDS。但是，随着VIN 接近 VOUT(nom)，误差放大器将增大 VGS 以降低 RDS，从而保持稳压。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbKic6SJPicfqic0MicSgwMpmiauY8sEK4z5pjGNRacN8BZibibhepvk1WeIKaA/640?wx_fmt=png)

  

在特定的点，VGS 无法再升高，因为误差放大器输出在电源电压 VIN 下将达到饱和状态。达到此状态时，RDS处于最小值。将此值与输出电流 IOUT 相乘，会获得压降电压。

不过这也会产生问题，因为误差放大器输出在 VIN 处达到饱和状态，随着 VIN 接近 VOUT(nom)，VGS 也会降低。这有助于防止出现超低压降。

偏置 LDO

很多 NMOS LDO 都采用辅助电压轨，即偏置电压 VBIAS，如图5 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbRHqyefCiaz58jrHkvClCtw0XEcIKlic92c8QQEOJ0Wfaf6aqJ6rkeGyw/640?wx_fmt=png)

  

此电压轨用作误差放大器的正电源轨，并支持其输出一直摆动到高于 VIN 的 VBIAS。这种配置能够使 LDO 保持较高 VGS，从而在低输出电压下达到超低压降。有时并未提供辅助电压轨，但仍然需要在较低的输出电压下达到低压降。在这种情况下，可以用内部电荷泵代替 VBIAS，如图 6 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbchTTsnKgL2falXBx1FPBw4G7USDsoyp5qNx3CeCfyDwia0ePtCZnkvw/640?wx_fmt=png)

  

电荷泵将提升 VIN，以便误差放大器在缺少外部 VBIAS 电压轨的情况下仍可以生成更大的 VGS 值。

其它因素

除了架构之外，压降还会受到其他一些因素的影响，如表 1所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbsybU2soPc4bn2efo7beufeoqqGmz8ibPZgDdznEqq4b3Jic8FA8tqsBA/640?wx_fmt=png)

  

很显然，压降并不是一个静态值。虽然这些因素会提高选择LDO 的复杂程度，但同时，还能帮助您根据特定的条件选择最适合的 LDO。

LDO电容的选择

为了让 LDO 正常工作，需要配备输出电容器。将 LDO 用于实际应用时，如何选择适当的输出电容器是一个常见的问题。因此，让我们来探讨一下选择输出电容器时需要考虑的各种事项及其对 LDO 的影响。

什么是电容器

电容器是用于储存电荷的器件，其中包含一对或多对由绝缘体分隔的导体。电容器通常由铝、钽或陶瓷等材料制成。各种材料的电容器在系统中使用时具有各自的优缺点，如表 1 所示。

陶瓷电容器通常是理想的选择，因为其电容变化最小，而且成本较低。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbHlp7jQvCMV0bntcENicqgvWW0tNTHBav4qJfw7CvRbJRKIE7yXjhe7g/640?wx_fmt=png)

  

什么是电容？

电容器是用于储存电荷的器件，而电容是指储存电荷的能力。在理想情况下，电容器上标注的值应与其提供的电容量完全相同。但我们并未处于理想情况下，不能只看电容器上标注的值。稍后您将发现电容器的电容可能只有其额定值的10%。这可能是由于直流电压偏置降额、温度变化降额或制造商容差造成的。

直流电压降额

考虑到电容器的动态特性（以非线性方式存储和耗散电荷），有些极化现象在不施加外部电场的情况下也可能会出现；这就是所谓的“自发极化”。自发极化是由材料的不活跃电场引起的，不活跃电场为电容器提供初始电容。对电容器施加外部直流电压会生成电场，生成的电场会反转初始极化，然后将剩余的有源偶极子“锁定”或极化到位。极化与电介质内电场的方向有关。

如图1所示，锁定的偶极子不会对交流电压瞬变作出反应；因此，有效电容低于施加直流电压前的值。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbmgq1vmkibSmpZhvPQgq4QPdtE7lIByAMd7iapnYOn1tKJGe1ic6ic43lJg/640?wx_fmt=png)

  

图2显示了对电容器施加电压所产生的影响以及产生的电容。请注意，外壳尺寸较大时损失的电容较小；这是因为外壳尺寸越大，导体之间存在的电介质越多，而这会降低电场强度并减少锁定的偶极子数。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbWssCI7fCGe0POxeFH2RicVpTiaALbQYRc3LBjvibo8bfD4BT5TFEQgFrQ/640?wx_fmt=png)

  

温度降额

与所有电子器件类似，电容器的额定温度高于其额定性能对应的温度。这种温度降额通常会使电容器的电容低于电容器上标注的数值。表2为电容器温度系数额定值解码表。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbyv1a7oYclN9ucdkhdicTdZMGubzN2BJHhuHW1XC64c9b1lJYDpl1FlQ/640?wx_fmt=png)

  

大多数 LDO 结温范围通常为 -40°C 到 125°C。根据此温度范围，X5R 或 X7R 电容器是理想选择。

如图 3 所示，温度对电容的影响远小于直流偏置降额所产生的影响，直流偏置降额可使电容值降低 90%。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbMNbYibibeomMicZzFI0LtHy3nSXJlAIoVNyGBsh2zP0UkZ5gLy2vcWvFA/640?wx_fmt=png)

  

实际应用

常见的 LDO 应用可能是从 3.6V 电池获得输入电压，然后将其降低，为微控制器 (1.8V) 供电。在本例中，我们使用 10µF X7R 陶瓷电容器，0603 封装。0603 封装是指电容器的尺寸：0.06in x 0.03in。

我们来确定一下此应用中上述电容器的实际电容值：

a、直流偏置降额：从制造商提供的电容器直流偏置特性图表（图2）可以看出，直流偏置电压为 1.8V 时，电容值为 7µF。

b、温度降额：基于 X7R 编码，如果在 125°C 的环境温度下应用此电容器，电容值会另外下降 15%，此时的新电容值为 5.5µF。

c、 制造商容差：考虑到 ±20% 的制造商容差，最终的电容值为3.5µF。

可以看出，在上述条件下应用电容器时，10µF 电容器的实际电容值为 3.5µF。电容值已降低至标称值的 65% 左右。显然，上述所有条件并非对任何应用都适用，但务必要了解将电容器用于实际应用时电容值的范围。

尽管 LDO 和电容器乍看起来似乎很简单，但还有其他因素决定着 LDO 正常工作所需的有效电容。

热性能

低压降稳压器 (LDO) 的特性是通过将多余的功率转化为热量来实现稳压，因此，该集成电路非常适合低功耗或 VIN 与 VOUT 之差较小的应用。考虑到这一点，选择采用适当封装的适当 LDO 对于最大程度地提高应用性能至关重要。这一点正是令设计人员感到棘手之处，因为最小的可用封装并不总能符合所需应用的要求。

选择 LDO 时要考虑的最重要特性之一是其热阻 (RθJA)。RθJA 呈现了 LDO 采用特定封装时的散热效率。RθJA 值越大，表示此封装的散热效率越低，而值越小，表示器件散热效率越高。

封装尺寸越小，RθJA 值通常越大。

例如，TPS732 根据封装不同而具有不同的热阻值：小外形晶体管 (SOT)-23 (2.9mm x 1.6mm) 封装的热阻为205.9°C/W，而 SOT-223 (6.5mm x 3.5mm) 封装的热阻为 53.1°C/W。这意味着 TPS732 每消耗1W 功率，温度就会升高 205.9°C 或 53.1°C。这些值可参见器件数据表的“热性能信息”部分，如表 1 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbFWKsIujLr5aJvAhsnJ6icrJw9bBzXn7PUekVz4VXQce4OXWKsKPk9wQ/640?wx_fmt=png)

  

是否选择了适合的封装？

建议的 LDO 工作结温介于-40°C 至 125°C 之间；同样，可以在器件数据表中查看这些值，如表 2 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbHM22jsaXrt4Ndr567UznMYVEzGtxdLZrGOuQuG9pmwjv87tbal3PRw/640?wx_fmt=png)

  

这些建议的温度表示器件将按数据表中“电气特性”表所述工作。可以使用公式 1 确定哪种封装将在适当的温度下工作。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZfibNIKYxibCc4njxm6a7ksj7nDxeic06JiaxzKZKX7B9BWicN1ibzyq2W1WA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

其中 TJ 为结温，TA 为环境温度，RθJA 为热阻（取自数据表），PD 为功耗，Iground 为接地电流（取自数据表）。

下面给出了一个简单示例，使用 TPS732 将 5.5V 电压下调至3V，输出电流为 250mA，采用 SOT-23 和 SOT-223 两种封装。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZ1nZfDWgo6nkRrIMQUAUulYX1Mib6iaeIE7gFzADpkoejEzD05xaw3Hmw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

热关断

结温为 154.72°C 的器件不仅超过了建议的温度规范，还非常接近热关断温度。关断温度通常为 160°C；这意味着器件结温高于 160°C 时会激活器件内部的热保护电路。此热保护电路会禁用输出电路，使器件温度下降，防止器件因过热而受到损坏。

当器件的结温降至 140°C 左右时，会禁用热保护电路并重新启用输出电路。如果不降低环境温度和/或功耗，器件可能会在热保护电路的作用下反复接通和断开。如果不降低环境温度和/或功耗，则必须更改设计才能获得适当的性能。

一种比较明确的设计解决方案是采用更大尺寸的封装，因为器件需要在建议的温度下工作。下文介绍了有助于最大程度地减少热量的一些提示和技巧。

增大接地层、VIN 和 VOUT 接触层的尺寸

当功率耗散时，热量通过散热焊盘从 LDO 散出；因此，增大印刷电路板 (PCB) 中输入层、输出层和接地层的尺寸将会降低热阻。

如图 1 所示，接地层通常尽可能大，覆盖 PCB 上未被其他电路迹线占用的大部分区域。该尺寸设计原则是由于许多元件都会生成返回电流，并且需要确保这些元件具有相同的基准电压。最后，接触层有助于避免可能会损害系统的压降。大的接触层还有助于提高散热能力并最大限度地降低迹线电阻。增大铜迹线尺寸和扩大散热界面可显著提高传导冷却效率。

在设计多层 PCB 时，采用单独的电路板层（包含覆盖整个电路板的接地层）通常是个不错的做法。这有助于将任何元件接地而不需要额外连线。元件引脚通过电路板上的孔直接连接到包含接地平面的电路板层。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbjlUzrA0FS5q1t3UjE9xYFl5C5xrbgggdGsvLnibdVoiaZPqS9DjfgHZA/640?wx_fmt=png)

  

串联电阻分担功耗

可以在输入电压侧串联电阻，以便分担一些功耗；图 3 所示为相关示例。该技术的目标是使用电阻将输入电压降至可能的最低水平。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbftg3TPha3ibfJAIGUYIric6WG32939A3nWufj6ib1OgxF5XEibnbWdUHCQ/640?wx_fmt=png)

  

  

由于 LDO 需要处于饱和状态以进行适当调节，可以通过将所需的输出电压和压降相加来获得最低输入电压。公式 2 表示了LDO 的这两种属性的计算方式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZQ619z4nJ84AkyibNeB0Ul0F81ibTgDC49XMrZ4WaLn3y57XFrxr77uqw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

使用 TPS732 示例中的条件（输出 250mA 电流，将 5.5V 调节至 3V），可以使用公式 3 计算电阻的最大值以及该电阻消耗的最大功率：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZNpcuQ6SzcibMZHOUUe0NYhZk3NHfdE0oGicUVSP7pUicnvmpFg2EtvLyQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

选择适合的电阻，确保不会超过其“额定功耗”。此额定值表示在不损坏自身的情况下电阻可以将多少瓦功率转化为热量。因此，如果 VIN = 5.5V、VOUT = 3V、VDROPOUT = 0.15V（取自数据表）、IOUT = 250mA 且 IGROUND = 0.95mA（取自数据表），则：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZqibdaBLjz7RsbR1F4p8B4cCdYUSTKRMe419iaRAQnNhQrCunmQGDpcWw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

电流限制

在一些外部条件和情况下，LDO 可能会出现意外的高流耗。如果此高电流传输到其他正被供电的电子系统，会对大多数电子系统以及主机电源管理电路造成损害。选择具有电流限制和内部短路保护的 LDO，将有助于防止产生这种不良影响，并在设计整体电源管理模块时提供额外保护。

什么是电流限制功能，该功能如何运作？

LDO 中的电流限制定义为，建立所施加电流的上限。与恒流源不同，LDO 按需输出电流，同时还会控制调节的总功率。

电流限制通过用于控制 LDO 内输出级晶体管的内部电路实现，见图 1。这是一种典型的 LDO 限流电路，由于达到限值后该电路会突然停止输出电流，通常被称为“砖墙”电流限制。此内部电路中，LDO 测量反馈的输出电压，同时测量输出电流相对于内部基准 (IREF) 的缩放镜像。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbEJF6yibjib7K1luxAIUgHcDicYwkOycEzgicGw1TDmLec1JLViax2UIKkzw/640?wx_fmt=png)

  

砖墙电流限制

在砖墙电流限制中，已定义电流上限，LDO会逐渐增大供应电流，直至达到电流限制。一旦超过电流限制，输出电压不再进行调节，并由负载电路的电阻 (RLOAD) 和输出电流限制 (ILIMIT)确定（公式 1）：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZnJ9WWsv4tBFiboll1qibia1oxauB8f86j7mkUtOYW4XyPovJfibWKkblLA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

只要结温处于可接受的范围 (TJ < 125°C) 内时，热阻 (θJA)允许正常的功耗，传输晶体管就继续此操作并耗散功率。当VOUT 过低且达到温度上限时，热关断功能将断开器件，保护器件免受永久性损害。器件温度降低后，它将重新接通，并且可以继续进行稳压调节。这在可能出现短路的情况下尤为重要，因为 LDO 会继续将 VOUT 调节至 0V。

例如，TI 的 TPS7A16 可以在宽电压范围内限制高电流输出。图2 所示为 30V 输入条件下限流功能的行为示例。可以看出，一旦超过电流限制，LDO 继续以限值输出电流，但不再将VOUT调节至 3.3V。一旦超过 105mA 的热限制，将启动热关断功能。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbdiaicaftoyguMCeuuSn0667uLlBxWr0yzibGo3J7sbFWJicyVmFr5KkjYQ/640?wx_fmt=png)

  

该限流功能有助于对镍镉和镍氢单单元电池充电，因为这两种电池都需要恒定的电流供应。电池电压在电池充电时会发生变化，TPS7A16 等 LDO 有助于将恒定电流保持在限值 (I)。

防止出现反向电流

在大多数低压降稳压器 (LDO) 中，电流沿特定方向流动，电流方向错误会产生重大问题！反向电流是指从 VOUT 流向 VIN 而不是从 VIN 流向 VOUT 的电流。这种电流通常会穿过LDO 的体二极管，而不会流过正常的导电通道，有可能引发长期可靠性问题甚至会损坏器件。

LDO 主要包括三个组成部分（见图 1）：带隙基准、误差放大器和导通场效应晶体管 (FET)。在典型应用中，导通 FET 与任何标准 FET 一样，在源极和漏极之间传导电流。用于产生 FET体的掺杂区（称为块体）与源极相连；这会减小阈值电压变化量。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcba2JJmY4lHMNRoXrTJmkrfoy4eicqcmC7NKDtX5s1RtwY9W2b2puAorA/640?wx_fmt=png)

  

将块体与源极相连有一个缺点，即会在FET 中形成寄生体二极管，如图 2 所示。此寄生二极管被称为体二极管。在这种配置中，当输出超过输入电压与寄生二极管的 VFB 之和时，体二极管将导通。流经该二极管的反向电流可能会使器件温度升高、出现电迁移或闩锁效应，从而导致器件损坏。

在设计 LDO 时，务必要将反向电流以及如何防止出现反向电流纳入考量。有四种方法可以防止反向电流：其中两种在应用层实施，另外两种在集成电路 (IC) 设计过程中实施。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbVNWaHhelMNKE8WT2ib2gliaQ8xy6M1QibPnyonDcPeZqGdYluBCKy3kWQ/640?wx_fmt=png)

  

使用肖特基二极管

  

如图 3 所示，在输出和输入之间使用肖特基二极管可以在输出电压超过输入电压时防止 LDO 中的体二极管导通。您必须使用肖特基二极管，肖特基二极管的正向电压较低，而传统二极管的正向电压与肖特基二极管相比要高得多。在正常工作中，肖特基二极管会进行反向偏置，不会传到任何电流。此方法的另一项优势是，在输出和输入之间放置肖特基二极管后，LDO的压降电压不会增大。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbHiapggZoo1JJJiaDhnOXTQYIbewicxtibicAXo7BYoTDhzyeyOFjnQz1rGQ/640?wx_fmt=png)

  

在 LDO 之前使用二极管

如图 4 所示，此方法在 LDO 之前使用二极管以防电流流回到电源。这是一种防止出现反向电流的有效方法，但它也会增大防止 LDO 出现压降所需的必要输入电压。置于 LDO 输入端的二极管在反向电流条件下会变为反向偏置状态，不允许任何电流流过。此方法与下一种方法类似。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbS7kQh4LzvUn2kdffkwdplsqhdicCP20Zicwc9XHrzibfHAwMBr54asictA/640?wx_fmt=png)

  

额外增加一个 FET

  

设计有阻止反向电流功能的 LDO 通常会额外增加一个 FET，以此帮助防止反向电流。如图 5 所示，两个 FET 的源级背靠背放置，以便体二极管面对面放置。现在，当检测到反向电流条件时，其中一个晶体管将断开，电流将无法流过背靠背放置的二极管。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbPYWbWl62NrZ3yCQ9eUpV4YavDkFXNzGsRXlbTdI00Go0lmJd1qWpMA/640?wx_fmt=png)

  

此方法最大的缺点之一是使用此架构时压降电压基本上会翻倍。为降低压降电压，需要增大金属氧化物半导体场效应晶体管 (MOSFET) 的尺寸，因此将增大解决方案的整体尺寸。应用于汽车中的 LDO（如 TI 的 TPS7B7702-Q1）使用此方法防止出现反向电流。

电源抑制比

低压降稳压器 (LDO) 最受欢迎的优势之一是，能够衰减开关模式电源生成的电压纹波。这对于数据转换器、锁相环 (PLL) 和时钟等信号调节器件而言尤为重要，因为含有噪声的电源电压会影响这类器件的性能。电源抑制比 (PSRR)仍然常被误认为是单个静态值，下面让我们讨论一下什么是 PSRR，以及影响它的因素有哪些。

什么是 PSRR？

PSRR 是一个常见技术参数，在许多 LDO 数据表中都会列出。它规定了特定频率的交流元件从 LDO 输入衰减到输出的程度。公式 1 将 PSRR 表示为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIBpTAO8OTqRqFLt4f0UDGZc2HnttF3wxSyehEFbUqZh4wJPbAw71rMsOPVy2Yqfrmcog1sUhCWPg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

公式 1 表明衰减程度越高，以分贝表示的 PSRR 值将越大。（某些供应商采用负号来表示衰减，而大多数供应商，包括 TI在内，却并非如此。）

在数据表的电气特性表中，常常可以找到在 120Hz 或 1kHz 频率下规定的 PSRR。但是，单独使用此参数可能无法确定给定的 LDO 是否满足具体的滤波要求。下面，对原因进行具体说明。

确实适合应用的 PSRR

图 1 所示为将 12V 电压轨调节至 4.3V 的直流/直流转换器。后面连接了 TPS717，这是一款 PSRR 值较高的 LDO，用于调节3.3V 电压轨。4.3V 电压轨上因开关生成的纹波为 ±50mV。LDO 的 PSRR 将确定在 TPS717 的输出端剩余的纹波量。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbpibYZdCWhsDIhJs7IvrCEv7l3Bq7Sh4l26hJoF4UOawsVLKcRLbRRAw/640?wx_fmt=png)

  

为确定衰减程度，首先必须了解出现纹波的频率。假设此示例中对应的频率为 1MHz，因为此值正好处于常见开关频率范围的中间。可以看到，在 120Hz 或 1kHz 下指定的 PSRR 值对此分析没有任何帮助。相反，您必须参考图 2 中的 PSRR 图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbBEnRg5D69eRoo8ATUYTV56icMjEsLaEjfY6GuAq11U4nAz1rCJibOiaxw/640?wx_fmt=png)

  

在以下条件下，1MHz 时的 PSRR 指定为 45dB。

IOUT = 150mA

VIN - VOUT = 1V

COUT = 1μF

假设这些条件与具体的应用条件相符。在此情况下，45dB 相当于 178 的衰减系数。可以预计，输入端的 ±50mV 纹波在输出端将被降至 ±281μV。

更改条件

但是，假设您更改了条件并决定将VIN - VOUT 减小到 250mV，以便更有效地进行调节。那么，您需要参考图 3 中的曲线。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbYcjVPSYU33fMqYg0iaBU8qkibyialBZbP3cIqSOV3rTnGqEQibYY7Z181w/640?wx_fmt=png)

  

可以看到，如果保持所有其他条件不变，1MHz时的 PSRR 减小到 23dB，即衰减系数为 14。这是因为互补金属氧化物半导体 (CMOS) 导通元件进入三极管（或线性）区，即，随着 VIN -VOUT 的值接近压降电压，PSRR 开始降低。（请记住，压降电压是输出电流及其他因素的函数。因此，较低的输出电流会降低压降电压，有助于提高 PSRR。）

更改输出电容器的电容值也会产生影响，如图 4 所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbiaVnQdWrpXAdqWc3ibBrjdDP5Dm4OrGcGiaTK4WgCbB76w1v1J2ZRLZdw/640?wx_fmt=png)

  

  

将输出电容器的电容值从 1μF 提高到 10μF 时，尽管 VIN - VOUT的值仍然为 250mV，1MHz 时的 PSRR 将增大到 42dB。曲线中的高频峰已向左移动。这是由于输出电容器的阻抗特性导致的。通过适当调整输出电容值，可以调整或增大衰减程度，以便与特定开关噪声频率保持一致。

调整所有参数

仅靠调整 VIN - VOUT 和输出电容，就可以提高特定应用的PSRR。但影响 PSRR 的因素并不仅限于这两项。表 1 概述了对其产生影响的多个因素。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhJ2TInYF4EucnXSgH0OWcbuorFJVWOog6JCXD97HquKKNKOUUtEErNBveTXD7zJMVZMhicGiaeD9ww/640?wx_fmt=png)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。