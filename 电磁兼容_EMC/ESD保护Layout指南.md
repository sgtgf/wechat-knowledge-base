# ESD保护Layout指南

原创 硬件笔记本 2024-06-29 09:58 四川

> 原文地址: [https://mp.weixin.qq.com/s/c6rDmwqHIJs2fOzsycs8FA](https://mp.weixin.qq.com/s/c6rDmwqHIJs2fOzsycs8FA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

摘要

能否成功地保护系统免受静电放电 (ESD) 的影响，**很大程度上取决于印刷电路板 (PCB) 设计**。尽管选择合适的瞬态电压抑制器 (TVS) 是 ESD 保护策略的基本之道，但不在本文讨论范围内。www.ti.com/esd 上的技术文档提供了许多 ESD 选择指南，可指导如何为特定系统选择适当的 TVS 二极管类型。选择适当的 TVS 后，利用本“ESD布局指南”列出的策略设计 PCB 布局，将为 PCB 设计人员提供一条成功保护系统免受 ESD 影响的途径。

  

1、引言

ESD 事件通常通过用户接口（如电缆连接）或人工输入设备（如键盘上的某个按键）迫使电流 IESD （参阅 图1-1）迅速进入系统。使用 TVS 保护系统免受 ESD 影响，取决于 TVS 能否将 IESD 分流到地。要优化 PCB 布局实现 ESD 抑制，很大程度上需要设计出阻抗尽可能小的 IESD 接地路径。在 ESD 事件中，提供给受保护集成电路（受保护 IC）的电压 VESD 是 IESD 和在其上的电路阻抗的函数。因为设计人员无法控制 IESD，所以降低对地阻抗是将 VESD 最小化的主要方法。

降低阻抗需要解决一些难题。主要问题在于，阻抗不能为零，否则受保护的信号线路就会对地短路。为了能够在实际中应用电路，受保护的线路需要能够保持一定的电压，通常具有高对地阻抗。这就是 TVS 适用的原因。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2Zd0y2acEyS8CuoAAodthZYTqrhrxiaSymShaaSia0ibuTtZAPov1ZJGicw/640?wx_fmt=png&from=appmsg&wxfrom=13)

TVS 是一个二极管阵列（参阅图 1-2 查看典型示例），其排列对电路中正常存在的电压有极高的阻抗，但如果电压超过设计范围，在 IESD 损坏受保护的系统之前，TVS 二极管将击穿并将 IESD 分流到地。因此，系统设计人员需要降低针对 IESD 从 ESD 源经 TVS 至地的阻抗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2agKiamOTpxicVIAdRqmrCtczMClutnsZaL8YcnDsOZVKArzHwK0tNESw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

提供给 IESD 的阻抗是 TVS 的固有阻抗（在 TVS 二极管阵列和封装中）以及 ESD 源与 TVS 接地之间的 PCB 布局的函数。TVS 通常设计成在其整体设计限制允许的范围内为 IESD 提供尽可能低的接地阻抗。选择适当的 TVS后，降低 PCB 布局上 ESD 源与 TVS 接地之间的阻抗是设计中的一个关键阶段。

  

快速变化的 IESD 产生的另一个问题是，其关联的**快速变化的电磁场 (EM) 会导致干扰 (EMI) 耦合到 PCB 的其他电路上**，在 ESD 源和 TVS 之间的区域尤其如此。一旦 TVS 将 IESD 分流到地，TVS 与受保护 IC 之间的布线应该相对而言不受 EMI 的影响。因此，在 ESD 源与 TVS 之间，**未受保护的电路不应与 ESD 保护电路的布线相邻**。为了将 EMI 辐射降至最低，理想情况下，**ESD 源与 TVS 之间的电路布线不应有超过 45° 的拐角，或是具有大半径的曲线。**

在如今的 PCB 布局中，布板空间非常宝贵。IC，包括 TVS，都必须设计得非常紧凑。另外，IC 在 PCB 上的放置密度也在不断地增加。多层 PCB 电路板和布线很大程度上依赖过孔来尽可能提高密度，从而减小系统尺寸，同时增加系统的特性设置。这种 PCB 架构（特别是与层交换和过孔相关）在通过 TVS 将 IESD 分流到地的过程中发挥着重要作用。**使用过孔将电路布线到 TVS 的方式可能会在受保护 IC 上产生巨大的 VESD 电压差**。通常，在 ESD源和 TVS 之间**放置过孔有不利影响**，但在某些情况下，设计人员不得不出此下策。即便在上述情况下，如果处理得当，仍然可以在受保护 IC 上尽可能降低 VESD。

  

**接地方案**对于防止 ESD 非常关键。对 TVS 使用机箱接地（不同于电感实现的数字和/或模拟接地），可以很好地避免 ESD 相关失效。然而，在多个接地平面上布线高速电路时，这会带来很大的挑战。因此，许多设计对受保护电路使用公共接地。接地平面对于 TVS 成功消耗 IESD 却不增加 VESD 必不可少。地面接地机箱的电气连接，如用于机箱螺丝的 PCB 接地通孔，直接临近 TVS 接地和 ESD 源的接地（例如，连接器屏蔽层），为受保护 IC 处的接地偏移保持在最低限度提供了合理的方法。如果系统无法利用机箱地面接地，紧密耦合的多层接地平面可帮助将受保护 IC 处的接地漂移保持在最低限度。

  

**总结这些参数，成功地保护系统免受 ESD 影响的因素包含：**

•控制 TVS 周围的阻抗，以消耗 ESD 电流 IESD

•限制 EMI 对未受保护的电路的影响

•正确使用过孔以将 TVS 消耗的 ESD 最大化

•为 TVS 设计阻抗极低的接地方案

**2、优化 ESD 耗散的 PCB 布局指南**

**2.1 优化阻抗以耗除 ESD**

在受控 RLC 值以外，PCB 具有固有的寄生效应，对整体电路板性能有益。通常，这种寄生效应对于设计的功能不利。在设计耗除 ESD 的电路时，电感是需要考虑的重要寄生因素。因为（参阅下文“注释 1”）VESD =Vbr\_TVS + RDYN(TVS) IESD + L(dIESD/dt)，且术语 dIESD/dt 非常大，**ESD 事件中的强制电流将导致任何电感上的大电压降**。例如，在 IEC 61000-4-2 指定的 8kV ESD 事件中，dIESD/dt = (30A)/(0.8×10^(-9) s) = 4 × 10^10A/s。所以**即便只有 0.25nH 的电感，也会给系统带来额外的 10V 电压**。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2JMiadZV7cDt5nWGicuUPiarksicw4EOeIvnOOWj4Wc1YwibIu87scqdmSnA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图 2-1 中显示了**四个寄生电感器**：L1 和 L2 是 ESD 源（通常是一个连接器）和 TVS 之间电路中的电感，L3 是TVS 和接地端之间的电感，L4 是 TVS 和受保护 IC 之间的电感。

在不考虑过孔的情况下，电感器 L1 和 L4 通常取决于设计约束，如阻抗控制的信号线。然而，通过**使 L4 远大于 L1， IESD 仍可以“转向”到 TVS**。通过在 PCB设计规则允许的情况下将 TVS 布放到接近到 ESD 源的位置，同时使受保护 IC 远离 TVS（例如接近 PCB 中间）来实现这一点。这可以有效产生 **L4 >> L1 的效果**，帮助将 IESD 分流到 TVS。**靠近连接器布放 TVS 也会减轻辐射进系统中的 EMI**。在设计良好的系统中， **L2 处的电感器是不应该存在的。这表示 TVS 和受保护线路之间存在残桩**。应避免这种设计做法。受保护线路应直接从 ESD 源连接到 TVS 的引脚，理想情况是路径上没有过孔。L3处的电感器表示 TVS 和接地端之间的电感。该电感值应尽可能地降低，并且可能是影响 VESD 的最主要寄生效应。

提供给“受保护线路”节点的电压将为 **VESD = Vbr\_TVS + IESD RDYN(TVS) + (L2 + L3)(dIESD/dt)**。因此 PCB 设计人员需要**尽可能减少 L3 并消除 L2**。

尽可能减少 L3 的方法在节2.4中进行了介绍。尽可能减少 L1 的方法在节 2.2 和节 2.3 中进行了介绍。

**小结**

**•尽可能减小 ESD 源与通过 TVS 的接地路径之间的电感**

**•在设计规则允许的情况下，将 TVS 放置在连接器附近**

**•使受保护 IC 与 TVS 之间的距离远远超过 TVS 到连接器的距离**

**•请勿在 TVS 和受保护线路之间使用残桩，直接从 ESD 源布线到 TVS**

**•尽可能减小 TVS 与接地之间的电感至关重要**

**2.2、限制 ESD 带来的 EMI**

如果没有适当的抑制步骤，**像具有高 di/dt 的 ESD 这样的快速瞬变可能会导致 EMI**。对于 ESD，主要辐射源将位于ESD源和TVS之间的电路中。因此，PCB 设计人员应当考虑将此区域设置为未受保护 PCB 布线的排除区域，因为它可能通过直接接触 IC 或将更多 EMI 带入系统进而辐射更多 EMI，从而导致系统损坏。即便 L1 处没有电感（如图 2-1 所示），**ESD 期间快速变化的电场也会耦合到附近的电路上**，从而在意外的电路上产生不需要的电压。**L1 的任何电感都会放大 EMI**。

图 2-2 显示了 ESD 源与 TVS 之间一条临近受保护线路的无保护线路。应避免这种做法。在 ESD 事件中，ESD源与 TVS 之间将有很大的 dIESD/dt。此路径上的布线将辐射 EMI，而所有附近布线都会产生由 EMI 感应的电流。如果这些布线没有 TVS 保护，无保护线路中的感应电流可能导致系统损坏。

如果 ESD 源与 TVS 之间的受保护线路有任何过孔，这些原则同样适用于过孔穿过的任何层，**无保护线路不应当临近过孔**。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2VYicE0f0FCee5e4u4szRFctzjBf0mUbia1oMkMMFn7k6k71jW3E3CjpQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

PCB 布局的另一方面是考虑 ESD 源与 TVS 之间拐角的样式。拐角往往会在 IESD 期间辐射 EMI。从 ESD 源到TVS 的最佳布线方法是使用尽可能短的直线路径。除了降低 IESD 接地路径中的阻抗，缩短此路径的长度也能减少在系统内部辐射的 EMI。如果需要拐角，则**应以最大半径弯曲走线**，如果 PCB 技术不允许弯曲布线，则 45° 拐角是最大角度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2txzcyaEDibus1lxqUDlmTTyia8pjFo7mmtic8ib1ITVOfa3BWxc5icL3z2g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在图 2-3 中，注意对于 90° 拐角，该拐角是一个重大的 EMI 来源。**该拐角处的电场至少有 7kV。这会使任何小于2.6mm 的半径（在空气中）产生电弧（离子化）**。45° 曲线的 EMI 则不那么明显。为进一步显示拐角样式的影响，图 2-4 绘制了采用这三种拐角类型的平行布线间产生的串扰。90° 拐角的耦合高于其他拐角，尤其是在 ESD频率成分区域。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2zTns4V8TSVaIYUZDYfsG5SwFGLJNI5WuMFklWa3YXf4rAxstAdhsvQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**小结**

**•请勿在 ESD 源和 TVS 之间的区域中布置未受保护的电路。**

**•在设计规则允许的情况下，将 TVS 放置在连接器附近。**

**•如果可能，在 ESD 源和 TVS 之间使用直线布线。**

**•如果必须使用拐角，应首选曲线，可接受的最大角度为 45°。**

**2.3、通过过孔进行布线**

**最好是在 PCB 上从 ESD 源布线到 TVS，而不用通过过孔切换层**。图 2-5 显示了两个示例。在第 1 种情况中，ESD 源与 TVS 之间没有过孔，所以 IESD 会被迫进入 TVS 保护引脚，然后经由过孔到达受保护的 IC。在这种情况下，过孔由 L4 表示（图 2-1 中）。在第 2 种情况中，IESD 在受保护 IC 和过孔之间分支并到达 TVS 保护引脚。在这种情况下，过孔由 L2 表示（图 2-1 中）。应避免这种做法。过孔的电感位于 TVS 和从 ESD 源到受保护 IC的路径之间。这样就有两种不利影响：因为电流会寻找阻抗最小的接地路径，受保护 IC 可能受到 IESD 中电流的冲击，任何通过过孔的电流都会增加提供给受保护 IC 的电压 L VIA(dIESD/dt)。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2z5TbnFdOabe4wPwDnpLg0kY1Z1l0Bl5BkSE7OgtzicIV7Es7nZ24edg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在有些情况下，设计人员别无选择，只能将 TVS 放在与 ESD 源不同的层上。图 2-6 展示了第 3 种情况，这是第2 种情况的一种变体。在第 3 种情况中，在 IESD 与受保护 IC 建立路径之前，IESD 会被迫进入 TVS 的保护引脚。**这对第 2 种情况来说是可以接受的折中方案**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD27F5M10RclAJ1s6eCewoibgqZDDIxv1eF97HsheTwXVYefxOtXFCyrOA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这三种情况代表了在 ESD 源与受保护 IC 之间使用过孔的示例。最好避免采用这种做法，但如有必要，则**第 1 种情况是优选方法，应避免第 2 种情况，如果没有替代方法时，则可接受第 3 种情况。**

**小结**

**•如果可能，避免 ESD 源和 TVS 之间的过孔**

**•如果在 ESD 源和受保护 IC 之间需要过孔，请在使用过孔之前直接从 ESD 源布线到 TVS**

**2.4、优化 ESD 的接地方案**

仅当 **TVS 具有极低电感的接地路径时，成功消除ESD源和TVS之间的所有寄生电感才会有效**。TVS 接地引脚应连接到同一层的接地平面，且该接地平面与直接相邻层上的另一个接地平面耦合。这些接地平面应通过过孔拼接在一起，其中一个过孔紧邻 TVS 的接地引脚（参阅图 2-8）。

图 2-7 显示了单通道 TVS 周围的 PCB 电感（如前文图 2-1 中所示）。本节仅考虑 L3 处的电感。请注意，在消除L2 的情况下，在 ESD 事件期间提供给受保护 IC 的电压将为 VESD = Vbr\_TVS + IESD RDYN(TVS) + L3(dIESD/dt)，而在 8kV 下，dIESD/dt = 4 × 10^10。显然，L3 必须尽可能地降低。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2Vv2IpyeBN7bBsia3xwkPC1RmLNk5U1K802icmib4yM8nX6AHCgQLdWc2g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

为了降低 L3，**TVS 接地引脚最好直接连接到耦合的接地平面**。图 2-8 展示了连接到顶层接地平面的 TVS 的接地焊盘。这里有四个拼接过孔，将顶层接地平面与内部接地平面连接。根据层数和电路板设计，这些过孔可能连接到多个接地平面层。接地机箱螺栓位置也非常接近 TVS 接地焊盘。类似这种的接地方案会为 L3 带来极低的接地阻抗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2Vu4XSxUiacZOoQwOCZgAVgPDwWma7Hia8ibic70VIUeJ7VfXxPibW0ad4tg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

因为封装类型，图 2-8 与某些类型的 TVS 无关。采用 BGA 封装且接地引脚被其他引脚围绕的 TVS 需要通过过孔连接一个内部接地平面，最好是多个耦合的接地平面。图 2-9 展示了一个具有这种接地引脚的 TVS。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/QfOX6PoObkAiafc89cTtvG6lQqBdeQpD2wt73YiclQB5sZ9ibHvpJmwAo93ibZXPulwhkjCSGmUZI8ldF4JQBtMRVQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

需要构建过孔以提供尽可能小的阻抗。由于趋肤效应，最大化 GND 过孔的表面区域可以将接地路径的阻抗最小化。因此，**使过孔焊盘直径和过孔钻取直径尽可能大**，从而使过孔表面外部和内部的表面积最大化。接地平面在GND 过孔的临近区域内不应断开。如果可能，将 GND 过孔与多个层上的接地平面连接，以尽可能减少阻抗。GND 过孔应使用非导电填充物（如树脂）而不是导电填充物填充，目的是保留由钻孔产生的过孔内部的表面积。GND 过孔应当电镀在 SMD 焊盘上。GND 过孔和非接地平面（例如电源平面）之间的间隙应保持最小。这会增加电容，而电容可以降低阻抗。

  

**3、结论**

只要采用适当的技术就能成功地在系统中设计 ESD 保护。按照这些 ESD 布局指南概要操作将确保 TVS 具有耗散ESD 的最佳条件。

**总结：**

**•控制 TVS 周围的阻抗以耗散 ESD 电流 IESD：**

– 尽可能减小 ESD 源与通过 TVS 的接地路径之间的电感

– 在设计规则允许的情况下，将 TVS 放置在连接器附近

– 使受保护的 IC 与 TVS 之间的距离远远超过 TVS 到连接器的距离。

– 请勿在 TVS 和受保护线路之间使用残桩，直接从 ESD 源布线到 TVS

– 尽可能减小 TVS 与接地之间的电感至关重要

**•限制 EMI 对未受保护的电路的影响：**

– 请勿在 ESD 源和 TVS 之间的区域中布放未受保护的电路

– 在设计规则允许的情况下，将 TVS 放置在连接器附近

– 如果可能，在 ESD 源和 TVS 之间使用直线布线

– 如果必须使用拐角，应首选曲线，可接受的最大角度为 45°

**•正确使用通孔以尽可能通过 TVS 实现 ESD 耗散最大化：**

– 如果可能，避免在 ESD 源和 TVS 之间使用过孔

– 如果在 ESD 源和受保护的 IC 之间需要过孔，请在使用过孔之前直接从 ESD 源布线到 TVS

**•使用阻抗极低的接地方案：**

– 将 TVS 接地引脚直接连接到同一层的接地平面，确保该接地平面在附近有缝合到相邻内部接地平面的过孔

– 尽可能使用多个接地平面

– 使用机箱螺丝，连接到 PCB 接地，放置在 TVS 和 ESD 源附近（例如，连接器接地屏蔽层）

– 使用大直径和大钻孔的过孔，以降低阻抗

文档来源链接：

https://www.ti.com.cn/cn/lit/an/zhcabl9a/zhcabl9a.pdf?ts=1717317799440&ref\_url=https%253A%252F%252Fwww.ti.com.cn%252Fsitesearch%252Fzh-cn%252Fdocs%252Funiversalsearch.tsp%253FlangPref%253Dzh-CN

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。