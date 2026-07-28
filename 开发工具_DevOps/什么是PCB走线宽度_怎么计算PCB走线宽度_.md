# 什么是PCB走线宽度？怎么计算PCB走线宽度？

原创 硬件笔记本 2024-05-10 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/pYdLvRirymW-BfIhLQdYCA](https://mp.weixin.qq.com/s/pYdLvRirymW-BfIhLQdYCA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天给大家分享的是：PCB走线宽度、PCB走线宽度计算、PCB走线宽度和电流。

  

# **一、什么是PCB走线宽度？**

  

走线宽度是PCB设计中最关键的因素之一。

只有经常做电路设计的人都会知道，经常会遇到走线宽度的问题。一些刚开始没有什么经验的设计人员比较倾向于使用PCB Layou软件中给出的默认走线宽度。

对于有经验的人来说，默认走线宽度有一定的参考价值，但可能会根据一些经验来判断对于某些轨道来说太窄了，尤其是对于电源和接地连接。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpgQnibxSAGmDX79MDqqSyhqKTiasLWetytfeYQruULJNxmjsbrRvWB4LA/640?wx_fmt=jpeg&wxfrom=13)

  

# **二、什么是走线？**

  

PCB 走线是放置在非导电或隔离基材上的细导电铜线，用于将信号和电源传输到整个电路。铜走线具有特定的宽度，我们称之为走线宽度，并且具有特定的高度或厚度。

通常，铜层的PCB厚度是固定的，由 PCB 制造公司的规格决定。对于典型的 PCB，最常见的铜厚度为 35µm，相当于 1oz/sqr ft。

所以在设计中，我们只能控制走线的宽度。对于大多数制造商，最小走线宽度为6mil 或 0.152mm，主要是因为蚀刻工艺和目标产量有限制，

但是为了有一定的公差，通常使用 0.254-0.3 毫米的走线。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpEVmR1ibdYLe1hSE54icb1qoyQv6rWEXIGAgafXgfGdbLGz2MpmQlz3Tg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

走线宽度

  

# **三、哪些因素对走线宽度至关重要？**

  

1、信号走线

信号走线是那些传送一些数据的走线。在数字或模拟信号中，具有不同的走线宽度通常不会对简单的PCB 设计产生太大影响，但在射频/模拟和高速数字设计中至关重要。在此类设计中，走线阻抗是一个重要的考虑因素，因为走线宽度和阻抗呈反比关系。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpE2On3cxf2ukuFvp4KibVhibeaiarpxuWcdrrn8UQtFKzsyw8MOjD8UvIA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

2、电源走线

另一方面，电源走线需要更多关注，因为这些走线负责为电路中的每个组件供电。在 PCB 设计中使用不同走线宽度有两个原因。

1）电流承载能力

电流承载能力是第一个也是最明显的原因。为什么？导体宽度与载流能力之间的关系很简单。走线的横截面积和允许的温升决定了走线可以承载多少电流。走线的横截面也与铜厚度和走线宽度成正比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpWr9xhgWgyXPCfzHleoeOAMT4kcykbzvD4YYGMpdC8aPUa6IBbic1iabA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

电流承载能力

当我们增加通过任何给定走线的电流时，温度也会升高。走线需要应对温度升高。确保这一点的一种简单方法是增加该走线的宽度。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpc6UXyAwic7DwdYvg7qAaSPZpBaZraYaLRlpFuUkicLPwib0S1riaIvibg2Q/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

IPC-2152 标准是确定迹线宽度的起点，这些标准使用经验数据来生成用于计算给定温升的电流限制的表格。使用 PCB 走线宽度与当前表格非常适合评估PCB 走线宽度/横截面积。

通过下表，可以有效地确定迹线中允许电流的上限。对于 PCB 叠层中的无限变量，你需要使用仿真来分析 PCB，以准确测量电流密度和温升。但是对于大多数典型的电路板来说，IPC 表就足够了。

下图显示了几种走线宽度和相应的电流值，这些值将在 1 盎司/平方英尺的铜重量下将温度上升限制在 10 °C。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpiaRHFicT5Pg2XshcibZdhqR52dics53OnppaPM9h0aMQZIlf1WibLDtnL8A/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

一些在线工具可以计算承载额定电流所需的走线宽度，同时将走线温度保持在指定限值以下。实际结果可能因应用和条件而异。

2）走线阻抗

高速电路可能需要特定的间距和阻抗，以最大限度地减少串扰、耦合和反射。必须计算敏感数据线，例如 RF/模拟迹线和高速迹线。对于 GHz 频段等高频信号，PCB 走线不像简单的连接那样起作用。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSp5IjvYHsbQVic3ia5lP4Q1BTUJRXR6LwJnYF4X0YfKGIbScA4dicVawT7g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

走线阻抗

  

每条铜走线都有一定的串联电感和内阻，对于简单的低速设计来说很容易被忽略。但在高速设计中，走线电感和铜表面粗糙度以及集肤效应会增加，并可能影响电路板的性能。此外，每条信号走线在其返回路径和附近的其他走线之间都有一些电容值。

3、直线宽度和信号反射

信号反射是高性能电子电路设计中的一个基本问题。传输信号的某些部分向源反射的现象称为信号反射，信号反射会导致信号失真和振荡。

PCB 中的信号反射在很大程度上取决于走线的形状和路线。每当走线改变方向、形状或与组件的接口时，走线不连续性就会发挥作用。例如，当走线弯曲 90 °时，走线宽度会发生显著变化。

在弯曲点，走线宽度是实际走线宽度的1.414倍。迹线宽度的这种变化会导致阻抗发生变化，从而导致信号反射。专业的 PCB 设计师都知道这些问题，因此会避免急剧弯曲和不均匀的走线宽度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpoCP3vNjkxpnl9TjSC4NZydpm3HED8JTkhLGFDuRKNIWjA1iaicwmDIRQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

如果置之不理，这些因素会显着降低系统的整体性能，因为信号路径中不同点的阻抗会有所不同。走线耦合，尤其是当信号跨平面分裂和空隙时，会导致串扰。

使用走线宽度计算器，可以知道如何推导出走线宽度。但需要考虑许多因素，例如：

-   走线载流能力
    
-   迹线将连接的组件焊盘的间距和尺寸。
    
-   痕迹之间的差距
    

除了走线宽度外，还必须考虑走线之间的间距，将防止短路并在原子之间留出最大空间以实现正常功能。

PCB 通常很小，因为它与生产成本有关。但是，如果电路板太小，可能会发现难以布置走线并在它们之间保持适当的间距。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpGX9Wic9mMD49g0K3cb3dbQcU2SV2ccjR1MVVWZrWh90KHhRAf36LCOQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

走线宽度

  

# **四、怎么计算PCB走线宽度？**

  

1、使用PCB走线宽度计算器  

你可以使用走线宽度计算器根据安培容量确定走线宽度。但需要在走线宽度计算器中提供设计规范，包括流过走线的最大电流（以安培为单位）、路径的总长度、由于走线电阻引起的温度升高等。

提供规格后，将自动生成走线的计算宽度，通常都是所需的最小宽度。可以允许电流安全通过而不会导致PCB损坏。

你可能会发现内层的走线宽度比外层更宽，因为它们容易产生更多热量。由于对流，外层不会得到那么多的热量。

出于安全原因，建议使用整个 PCB 的内部走线宽度。

2、使用方程式

1）PCB走线宽度表

PCB 走线宽度表可以帮助你确定 PCB 的走线宽度，还可以让你了解载流能力和温升的影响，可以参考下表。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5A61JjKnlYQusmtrqdVrSptm8c1urqibOtalcu7dcCtFz8tHSttML2P1qZOLErLEbrLDsC05VK9Dw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

PCB走线宽度表

  

2）PCB走线宽度公式

根据 IPC 2221 的定义，你可以使用计算通过走线的允许电流的公式找到 PCB 的走线宽度。过程如下

I=k\*ΔT^0.44\*A^0.725

-    I 代表电流，取为常数
    
-   ΔT是指温度的变化
    
-   A是走线的截面积。
    

现在可以重新排列公式，通过找出所选货币安全通过的横截面积来导出迹线宽度。

面积\[密耳^2\] = (电流\[安培\]/(k\*(温度上升\[摄氏度\])^ 0.44))^(1/0.725)

k = 0.048

然后，考虑走线的厚度才能找出所需的宽度。

宽度\[mils\] = 面积\[mils^2\]/(厚度\[oz\]\*1.378\[mils/oz\])

该公式可用于 0 到 35 A的电流，允许温度从 10 ℃上升到 100 ℃。它可容纳 400 密耳的迹线宽度，你可以使用 0.5 至 3 盎司的铜值。

通过将 2 A插入上述计算中，我们得到至少约 30 密耳的走线。但是不能计算出电压降，因为需要计算走线的电路。下面就讲讲走线电路怎么计算。

# **五、怎么计算PCB 走线电路？**

包含敏感元件（例如无线芯片或天线）的电路可能需要一些额外的保护以免受外部噪声的影响。你可以通过在走线之间嵌入接地过孔来最大限度地减少对额外保护的需求，这可以显着减少耦合、被附近的走线或平面拾取以及潜入板边缘的板外信号。

PCB 上铜走线的尺寸和形状直接影响电路板的尺寸、成本和性能。在这种情况下，PCB 走线宽度非常重要。由于更高的电流要求，用于传输功率信号的走线需要更宽。PCB走线宽度与走线阻抗成反比。以下等式计算迹线阻抗：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5A61JjKnlYQusmtrqdVrSp5NeLJNnRMkSvbfwNnsxcerYzuWA8GNc2FTnS4vTG80BO1heBoBl25w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   ρ = 铜的电阻率 | α = 铜的温度系数 | T = 迹线厚度
    
-   W = 走线宽度 | L = 迹线长度 | t = 温度
    

除了走线宽度外，走线的形状也会影响信号反射。不对称的走线尺寸和急转弯会引起信号反射，从而导致信号失真。在多层 PCB 中，电源信号走线通常放置在表层以改善散热。另一方面，数据信号走线放置在内部层上以防止 EMI 和环境噪声。

3、实际案例-直流电机电源路径的优化走线宽度示例

下面这个例子为将电流从一个电源组件传输到外围设备的电源信号计算特定走线宽度的过程。主要是计算用于直流电机的电源路径的最小走线宽度。

电源路径从保险丝开始，穿过 H 桥（用于管理直流电机绕组中的电力输送的组件），并在电机的连接器处结束。直流电机所需的平均连续最大电流约为 2 安培。

现在，PCB 走线充当电阻，走线越长越窄，增加的电阻就越大。如果走线没有正确定义，大电流可能会损坏走线和/或给电机带来明显的电压降（导致速度变慢）。图 3 所示的 NetC21\_2 长约 0.8 英寸，最大需要承载 2 A。如果我们假设一些一般情况，例如在正常操作期间的 1 盎司覆铜和环境室温，我们就需要计算最小走线宽度和该宽度下的预期电压降。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpmJjQ6ZCozoeKNl0Bs1gia6xgO8TxoC53HyHeccwFpgAyuYwrnicJp4EQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

直流电机电源路径的优化走线宽度示例

  

# **六、PCB走线宽度在布局中的作用**

  

PCB 走线宽度会影响印刷电路板的电气性能，包括：

-   信号完整性
    
-   电源完整性
    

1、信号完整性

使用不同的走线宽度可以大大提高信号完整性并控制信号干扰、串扰、电磁干扰等。

2、受控阻抗布线

当涉及到某些高速信号时，它们需要以特定的宽度进行布线，以便进行阻抗控制。必须根据以下因素正确计算走线宽度：

-   电路板的介电材料。
    
-   与其他信号的间距。
    
-   铜重。
    

3、微带线和带状线

如果是敏感的高速传输线，需要与参考地平面耦合，以便屏蔽走线。带状线配置是指夹在两个地平面之间的内部布线层。另一方面，微带配置是指电路板外部的走线及其下方的相邻平面。

4、模拟路由

对于模拟信号，它们需要短而直接，同时具有额外的宽度以保持低走线阻抗。对于模拟电路，最好尽量减少过孔的使用。

5、电源完整性

1）短而直接的路由

保持走线短以避免额外的噪声很重要。与直角相反的圆角也是优选的。

2）使用宽痕迹

为减少电感和串扰，明智的做法是使用带电源布线的宽走线。

3）电流和热考虑

电源走线根据正在布线的网络传导不同的电流水平。此外，重要的是要考虑线路随电流产生的热量。外层的电源跟踪也可以从空气冷却中获益。

案例1-布线高速 USB 线

对于具有高速通信的数字设计，可能需要特定的间距和调谐长度，以最大限度地减少串扰、耦合和反射。一些常见的应用是基于 USB 的串行差分信号和基于 RAM 的并行差分信号。通常，USB 2.0 需要 480Mbit/s（USB 高速级）或更高速度的差分对路由。这部分是因为高速 USB 通常在低得多的电压和差分下运行，从而使整体信号电平更接近本底噪声。

布线高速 USB 线时需要考虑三个重要事项：走线宽度、走线间距和走线 长度。

所有这些都很重要，但三者中最关键的是确保两条迹线的长度尽可能匹配。作为一般经验法则，如果迹线之间的长度相差超过 50 密耳（对于高速 USB），则会显着增加可能导致通信不良的反射风险。90 Ω 匹配阻抗是差分对布线的常见规格，为了实现这一点，应优化走线的宽度和间距。

下图显示了一个为高速 USB 接口布线的差分对示例，其中包含 15 mil 间距的 12 mil 宽走线。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpEfUJTKEO59rI6icU9ClqROW8gianiagB0CBM75ichSKiautYqiaiacRBicA7DA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

USB2.0 高速差分路由

  

包含并行接口的基于内存的组件的接口，例如 DDR3-SDRAM，在走线长度方面将受到更严格的限制。大多数高端PCB 设计软件都具有长度调整功能，可优化走线长度以匹配并行总线中的所有相关信号。下图显示了带有长度调整走线的 DDR3 布局示例。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSp42BHlLDZZrIokqrG9R6hJ6E6TfvgbLQfdmZTdToxlONq69RC2sqjBg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

长度调整的 DDR3 内存走线示例

  

案例2-在接地线和平面中

某些具有对噪声敏感的组件（例如无线芯片或天线）的应用可能需要一些额外的保护。设计带有嵌入式接地过孔的走线和平面可以极大地帮助最大限度地减少附近走线或平面拾取的耦合以及潜入电路板边缘的板外信号。

下图显示了一个靠近电路板边缘放置的蓝牙模块示例，其天线（通过丝印“ANT”标记）位于包含连接到接地层的嵌入式通孔的粗迹线外部。这有助于将天线与其他板载电路和平面隔离。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpUEbesRX2gfTmTZiaydPlCMLt8q8oTJae9RYBoPUpZAYFcickib5iaibc1eg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

带有接地通孔嵌入式走线以帮助抑制噪声的蓝牙模块

  

这种接地通孔嵌入式走线（或本例中的多边形平面）的另一种方法可用于保护电路板电路免受外部、板外无线信号的影响。

下图显示了一个对噪声敏感的 PCB，在电路板的周边有一个接地通孔嵌入式平面。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpvL0JibSR9Be55PheEnCUichBLTUKaHsTsOC6WDdic7eBficATbWFeDEEGA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

敏感 PCB 上带有过孔的接地层，以防止板外干扰

  

# **七、各种走线宽度与厚度**

  

PCB 包含各种走线宽度是很常见的，因为它们取决于信号的需求（如图下所示）。所示的较细迹线用于通用 TTL（晶体管-晶体管逻辑）电平信号，对高电流或噪声保护没有特殊要求。

这些将是电路板上最常见的走线类型。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSprP1jSyzx6eZgZxEKlRMSBGOb6ml4NmRXWjOMqx6fZpwK5JxX2DS3Jw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

包含不同走线宽度和类型的 4 层板示例

  

较粗的走线已针对载流能力进行了优化，并用于需要更高功率的外围设备或与电源相关的功能，例如风扇、电机和向较低级别组件的一般功率传输。图中左上角甚至还显示了一个差分信号（USB 高速），其中定义了特定的间距和宽度，以满足 90 Ω的阻抗要求。下图显示了一个稍微密集的 6 层电路板和一个需要更细走线的 BGA（球栅阵列）组件。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5A61JjKnlYQusmtrqdVrSpIzddWhfgc4Md8OClbph5eZWHI5Pr9NsCPoibYmQJed5D8wb8wb3ADYw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

包含 256 引脚 BGA 组件的 6 层板示例，走线宽度为 5 mil

  

# **八、PCB制造中直线宽度规范**

  

作为一般规则，以下与走线相关的规范开始推高裸 PCB 制造成本。由于更严格的PCB 公差和制造、检查或测试 PCB所需的高端设备，成本变得相当高：

-   走线宽度小于 5 mils (0.005”)
    
-   走线间距小于 5 密耳
    
-   直径小于 8 密耳的通孔
    
-   迹线厚度薄于或厚于 1 盎司（相当于 1.4 密耳）
    
-   差分对和受控长度或走线阻抗
    

包含 PCB 占位面积的高密度设计（例如极细间距 BGA 或高信号数并行总线）可能需要薄至 2.5 密耳的走线宽度和特殊类型的通孔，例如直径为 6 密耳或更小的激光钻孔微通孔。相比之下，一些高功率设计可能需要非常大的走线或平面，消耗整层，并且比标准更厚的盎司倾倒量。空间受限的应用可能需要包含几层的非常薄的电路板和半盎司（0.7 密耳厚度）的有限铜浇注厚度。

在其他一些情况下，从一个外围设备到另一个外围设备的高速通信设计可能需要具有受控阻抗以及特定宽度和彼此间距的迹线，以最大限度地减少反射和感应耦合。或者设计可能需要一定的长度以匹配总线中的其他相关信号。高压应用需要某些安全特性，例如两个暴露的差分信号之间的距离最小化，以防止产生电弧。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本文转自头条百芯EMA。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。