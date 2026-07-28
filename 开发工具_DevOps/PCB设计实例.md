# PCB设计实例

原创 硬件笔记本 2023-05-03 11:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/4-Dz\_ivvDaXaGRGU39Pwag](https://mp.weixin.qq.com/s/4-Dz_ivvDaXaGRGU39Pwag)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

今天给大家分享的是电源PCB设计。

  

# 一、典型的同步降压控制器

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgZXdGicibaRicUjZicyAWc73le6CibW2w0gH73vCMpcwIZoGplP0eaCVfK0g/640?wx_fmt=png)

典型的同步降压控制器

上图为典型的示意图。与大很多原理图一样，显示的引脚注释并不代表实际的 IC，它是一个 TSSOP-20。所以在看Datasheet的时候，还是要多注意一点， 不能只看这一个示意图。

  

# 二、实际同步降压控制器示意图

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgBFibRquTGY2agIhCA8Vo1g1bIQlHiaFnGoqWJP0dKHhEeicKmFUATJolg/640?wx_fmt=png)

实际同步降压控制器示意图

这里可以明显看到和上面的不一样了。元件在PCB上的电气连接方式有许多名称，不存在标准的一个命名。我一般会先放置开关节点，通常是电感或者变压器绕组以及1-2个电源开关，大电阻 RCS 用于检测电流，它与同步 MOSFET Q2 串联。

下面就会分步教大家来设计PCB。

  

# 第1步：切换节点

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsg0K2hpuWwM5o1ue55AZTDUvVVlatB3icLM92ibzjyJ5QZNg3bjHu5vvoQ/640?wx_fmt=png)

切换节点

开关节点是一个很好的静电辐射器，因为它以一定的开关频率进行震荡。位移电流流动，对自由空间中开关节点和接地平面之间的电容进行充电和放电。一般来说，如果这个节点的面积最小化会更好。

我一般从构成开关节点的功率开关二极管和电感开始，放置在使它们的路径尽可能靠近的位置。然后，放置了一个刚好覆盖所有三个路径的实体形状。

对于除降压稳压器以外的其他稳压器，通过查看高电位摆动的任何节点，寻找方法来最大限度地减少对其它地方的电容。在许多类型中，如反激式或 SEPICS，将有两个开关节点，每个开关节点都需要得到处理。

  

# 第 2 步：输入电容组

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgc0bj8agYfk5HQJTF53YPPhia5rtmjShRXxTcEPaVB6H9rNz8SoulJrg/640?wx_fmt=png)

输入电容组

输入电容、高侧 FET 和低侧 FET 之间的环路需要最小化，这是 Buck 设计中最关键的路径。这里一定要最大限度地减少输出尖峰。并且一定要使用大铜多边形作为与 MOSFET 的主电源连接，这在电气上和热学上都会有帮助（同样这个方法也适用于过孔。）通常越多越好。

通孔还充当电路板背面和内层的热通道。如果可以的话，用焊料填充。虽然在电学或热学方面不如铜好，但焊料比空气好得多。

那个靠近FET的小电容Cin2，是低值 MLCC，通常为 100 nF，主要是为了在降低最高频率的噪声和谐波。低值 MLCC的电容值和物理尺寸都很小，可以最大限度地降低 ESR 和 ESL。在 Cin2 之后，有了更大的 MLCC ，降低了开关频率的输入电压和电流纹波以及更低的谐波。这个电容可以抑制潜在的振荡并在瞬变期间维持输入电压，不过都是低的开关频率，因此这个电容可以放的更远一点。

  

# 第 3 步：在紧密环路中获得缓冲器

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgIE6Ic4vuOliawq0RBgbScrg3ibmXGRpNbNDlnDJ9rYGtpYFRJz3HyIyw/640?wx_fmt=png)

在紧密环路中获得缓冲器

缓冲器滤波器可以降低高频噪声并改善辐射。因为缓冲器处理很高的频率噪声，通常高于 10 兆赫兹。所以它们得以最小的电感进入紧密环路，不然将无法过滤。

  

# 第4步：输出电容组

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgG1yHwIIBmOs87XCHKp2ECJmk6YJRvbKStvBD2GbPJa6bibN7uygFJaw/640?wx_fmt=png)

输出电容组

这里必须要注意，在完整的布局之前，我们必须要注意有关低侧 FET、阳极或二极管。这是一个噪声节点，不应直接连接到地平面。这样做会将噪声注入地平面。这个就好比一群吵闹的孩子在宽阔的操场上。

如果你看到降压稳压器输出出现尖峰，那么这里连接可能不正确。在理想的设计中，降压稳压器的输出几乎没有尖峰。通常，出现在输出端的任何尖峰都是通过地轨传导的。

仔细注意低侧开关接地之间的路径，回到输入电容，输出尖峰几乎可以消除，或者至少大大减少。电感将高频电流和这些元件保持在最低限度。

最小的输出电容 Co5 恰好靠近输出连接器或负载（如果负载位于同一 PCB 上），以在高频噪声干扰负载之前将其清除。如果高频噪声进入输出线束，它会将它们作为天线进行辐射。

  

# 第 5 步：定位 IC

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsg2DdQH3CWxpia1s37r87u5yW7lTye9Cp7NNfAxozAJGa0hicsFtOEfIng/640?wx_fmt=png)

定位 IC

布局良好的 IC 会将噪声引脚（如栅极驱动器）与 IC 一侧的根带引脚组合在一起。然后，敏感的模拟引脚，如对反馈节点的控制或软启动，则位于另一侧。

  

# 第6步：栅极驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgeMgaXPf2Bgnw4jqdr9IecrjZft3Fs2Eib4UEPT7MLJ2J6gjdDe4Pmjg/640?wx_fmt=png)

与外部 MOSFET 的栅极连接是非常高的 DIDD 路径，因此需要仔细考虑。具有大量栅极电荷的大 FET 会产生数安培的峰值电流，此处的长连接会显着减慢 FET 开关的上升和下降时间。这对于降压应用中的高端 FET 尤为重要，因为过慢的边沿会增加开关损耗。

尝试将栅极到驱动器的连接直接放在源极到驱动器的接地连接之上，以尽量减少由此产生的环路所包围的面积，并使用至少 0.3 毫米宽的走线。

我通常是通过两层布线栅极驱动器，所以我将至少两个并联的过孔防止在该路径中的寄生电感中。

  

# 第7步：完成高端栅极驱动路径

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgbIJrtU2PCZbg2hu0PzbmAmIQ9HfFjvia4jOwJAEPFFyTzP5HnrXNUUg/640?wx_fmt=png)

完成高端栅极驱动路径

有很多设计在从栅极驱动引脚到 MOSFET 栅极的短、宽、低电感连接方面做得很好，但它是高侧 MOSFET 或低侧，返回路径经常被忽略。

对于高端 FET，返回路径是开关节点。出于散热原因，开关节点通常有大量的散热过孔，可用于将驱动电流带回原处。有时，你可以直接在发送路径下运行返回路径。由于我是在同一顶层布线，所以我选择将它们并联放置在一起，就像差分对一样。

通常，还有一个引导程序，是为 N-MOSFET 产生完全驱动的电荷泵，它的二极管和电容也需要短的、低电导环路。

  

# 第8步：完整的低侧栅极驱动路径

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsg4Przgev8byTVHY0Zlg1Fticm0XTBd0dgK5ScwQiaC7tIAxRnicX1YTorQ/640?wx_fmt=png)

完整的低侧栅极驱动路径

低侧或同步 MOSFET 栅极驱动的返回路径通过系统地。这里需要运行一个单独的跟踪。为此，许多控制和稳压器 IC 都有专用的接地引脚，通常称为 P 接地，有时甚至更直接地称为门回路或类似名称。所有这些路径和接地部分之间的物理连接都在 IC 下方。在层间切换时至少使用两个过孔，并尽可能靠近发送路径运行这些返回路径。

  

# 第 9步：差分电流检测

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgCyVZXQdOicibYicSeAHrec9kVHBbr1D3GPzzibaGqEZM4WsXZRxqibVf0Ig/640?wx_fmt=png)

差分电流检测

不是每个控制 IC 都有差分感应线，你至少得感应出一个主电流。还有一个问题，就是弟电流检测IC的负极接地。几乎不可能将差分感应线与感应电阻布线在同一层，因此它们必须通过过孔。这次不需要并联过孔，因为电流在RAM 范围内，但是任何实心接地层都会连接到该负侧过孔，同时会导致你PCB走线短路。

通常需要将控制器 IC 的 A 地和 P 地连接起来，即模拟地和电源地，有时称为信号地和电源地，或简称为信号地和地。

  

# 第 10步：放置低功率部件

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgc2XicGENWUkxKzia7pxmuuZuH4JCBIhcBp64Ym6szSobkxB5xognicASg/640?wx_fmt=png)

如果你有专门的顶部接地形状的空间，你可以将其用作所有接地参考控制电路、反馈分压器、软启动和控制环路的返回。如果这样的形状不适合，可以使用菊花链从 AGND 引脚连接到各种小信号接地的走线。如果你想通过多层布线此走线，则布局软件会出现问题，因为它想要将过孔连接到内部接地层。而且会引出想要隔离这条痕迹的全部要点。所以，我建议把它放在顶层。

一种方法是提出一个单独的 AGND 符号。你通过多层将所有信号接地点连接在一起，而无需连接到内部平面。但是当连接 AGND 和 PGND，或 AGND 和 PGND 网络时，很可能会产生 DRC 错误。

  

# 第 11 步：反馈跟踪

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgDpQNicSUX5UcXPSHCuCLeOmGKWX0YiaIsxzkoblRTLiarC1nyGlwG2Qrw/640?wx_fmt=png)

反馈跟踪

保持最高阻抗走线较短，因为它们最有可能拾取杂散场。因此，例如，反馈分压器中的两个电阻应位于非常靠近稳压器反馈引脚的位置，而不是电源输出附近。从分压器顶部到电源输出的连接是 Vout，这是一个非常低的阻抗连接，因此不会受到噪声拾取的影响。相反，放大器输入是一个非常高的阻抗输入，并且非常容易受到杂散场感应噪声的影响。

有一种趋势是想让敏感节点变大，还错误地认为这种方法可以提供一些屏蔽的效果，但实际情况正好是相反的。不仅增加了自由空间的电容，并增加了噪声拾取的可能性。使敏感走线变窄并尽可能短。

  

# 第12步：顶部敷铜

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgiayE4f0z29VWYNO1mdzDJ6OsDiady1oFWCOL4KRI9ib3Tib9hqWt4QR76g/640?wx_fmt=png)

顶部敷铜

淹没未使用的 PCB 区域的技巧是确保连接到安静的节点。

  

# 第13步：重新审视切换节点

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgnJ5q9ftZjdu60kWHcib5AiaNAYAsrjl3tuxYHL3s9qsV8CYNCtuGS62w/640?wx_fmt=png)

重新审视切换节点

开关节点非常重要，我们在底层的首要任务是审查热管理和电气噪声之间的这一关键.特别是，低侧 MOSFET 依靠一些单体铜掩膜来保持冷却，因为它的漏极连接到开关节点，而 MOSFET 的大部分热量都从漏极散发出来。这个封装的占位面积是一个热增强型 SO8，内置 12 个热过孔。这里可以在底层放置一个多边形，其形状和大小与顶层多边形相同，刚刚覆盖电感焊盘和两个 MOSFET 的那个。良好的热通孔矩阵将有助于将热量吸收到底层。即使在没有主动冷却的设计中，对流也很可能使一些空气穿过 PCB 底部。

  

# 第14步：关于散热孔

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsg6w6yHiagryEYHUn8pjiaw9FBv1mViaic4ErCRn2rNh7xCzzqLicN9mDVrlg/640?wx_fmt=png)

散热孔

这是一个PCB 封装，带有一个大散热片。当直接放置在热源下方时，热通孔效果最佳。但同样，这需要与 PCB 制造商进行良好的沟通。我的个人经验是 0.25 毫米的孔与 0.5 毫米的外径相结合，是一个很好的方案。这些尺寸孔偏小，无法吸走太多焊料，但又不算微孔，钻孔成本更高。我通常将它们隔开 1 毫米或 1.5 毫米。

  

# 第 15步：用 GND 背面敷铜

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgt69xjh1lSGjjWHwp8UU19AkvNkSpFXiaSIr5WyxhYwVia4U7NRmTdTIA/640?wx_fmt=png)

用 GND 淹没底部

在设计完成前关闭除接地层之外的所有层是一个非常好的技巧，并确保在完成所有信号和电源线走线的铺设后仍然具有良好的接地平面完整性。在许多情况下，过孔是不可避免的，但如果可能的话，应避免将其作为电源路径中的载流元件。只有当它们可以用于在设计中引入冗余铜区域时，才是比较可靠的。例如与外部走线区域平行连接的内层。过孔被用作热管，因为它们能够将顶部产生的热量传导到 PCB 的背面。可以连接到热平面区域的过孔越多，可以实现的散热就越多。

使用大量热过孔时需要注意的一点是，内部接地层可能会被严重切断，最终几乎没有有用的电流路径。这特别有可能发生在非常小的电路板上，例如稳压器模块。

  

# 第16步：回顾检查

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgolOog1u7fQY0PicgQDdiceLtdmm73CsPIqyrZkAq9LzAqynYvoecGXFA/640?wx_fmt=png)

回顾检查

许多电路都有接地连接，当某个区域被淹没时不应将其短路。通常可以防止这种情况发生，建议手动布局。接地区域（这个三角形）与低侧 FET 栅极驱动的返回路径以及差分电流检测线的负连接保持分离。

  

# 四层 PCB – 如何处理？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgsxY0M6oEAKiaGq277TNSdHMgnv9D5WK5KDcL4NIgibtgDBoAx3nzIiang/640?wx_fmt=png)

上图显示了4层PCB。虽然有4层，但我还是连接顶层的所有电源焊盘，并用接地、VIN 和 Vout 的铜浇注淹没任何未使用的区域。然后，我在第二层上放置了一个实心地平面，就在顶层下方。第三层我在 VIN 和 Vout 之间分开，但有时我会在这一层放置信号层走线。第四层保留为地面，很多信号电平连接都在这一层。这样做是因为如果这些连接位于内部层上，则调试电路会变得很难。

  

# 内部平面/第 1 层应为 GND

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgb5XEHiacxMnhbkduLaaPzOLZbcZXiaHQ25R5uFS9ZBQrkeiaEJ2Zlibhbg/640?wx_fmt=png)

稍微靠近顶层会增加注入顶层的 VIN 和 Vout 多边形中第二层地之间的电容。这些小电容非常适合过滤高频噪声，因为它们通常在 100 pF 到 1nF 的范围内。但如果是开关节点，我就会考虑打乱我的第二层地平面。

  

# VIN 和 Vout 的内部平面/第 2 层

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgQicVfEJsR0Pk7wLuGMaY5jLDzt1uy9xrAHdpFzygASxdGWDCprgdZtw/640?wx_fmt=png)

与底层一样，我放置了一个与顶层和底层相同大小的形状，并用大量的散热孔连接它。其他所有东西都是接地的，只被信号迹线或热管理的过孔分开。添加这些大的连续形状会增加更多的自由容量，无论是在左侧的 VIN还是在右侧的之间。它们还有助于传播和散热。开关节点的切口有助于从高侧 FET 和漏极排出热量，而不会让噪声以电容方式耦合到其他平面。

  

# 单面布局

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgXYIw7hQrIUrxZ7FDibCGsgibibooXB6Ngdz9s8ZozWYLSQvWtVibTfeMgzRHayUNuXvjjeywOpyEM9w/640?wx_fmt=png)

  

单面 PCB 在成本有限的 AC 到 DC 稳压器中非常常见。比如你的手机充电器。但金属芯 PCB 或 MCPCB 成本的快速下降意味着越来越多的 LED 驱动电路与 LED 一起直接放置在 MCPCB 上。单层 MCPCB 成本的暴跌也导致放置在铝芯多点板上的功率元件数量增加。这通常意味着在一层中布线所有内容，并且通常意味着很少或没有过孔。0 欧姆分流器通常用于将一个连接跨接在另一个连接上，但这些会同时增加电阻和电感。所以，回到大开关电流的分析。避免在这些路径中放置分流器。基本上，没有与电源开关串联的分流器，也没有与阳极或二极管之间的接地连接串联。

# 元件放置策略——经验法则

-   你可以将电感与电感器串联，但要在安静（输出）端进行，而不是噪声（开关节点）端
    
-   迹线宽度：对于 35 µm 厚度的铜，每安培 0.75 毫米；对于 17.5 µm，每安培 1.5 毫米
    
-   每个过孔 1 A 的 DC MAX 是一个很好的设计目标
    
-   旁路帽的过孔应与焊盘相切，最好每个焊盘两个
    

与电感串联的走线电感通常不是什么大问题。它只会增加路径中的总电感。相反，您不想增加与电感器并联的大量电容，可能会引起问题。如果你必须添加一些与现有电感器串联的电感器，通常最好使输出路径更长一些，这样就可以最大限度地减小噪声开关节点的尺寸。

使用过孔将旁路帽连接到平面，每个焊盘至少需要一个连接切线的过孔，每个焊盘两个更好，三个稍微好一点。

整个电路板布局经常被提到的最小化杂散电感，将每个高 DIDT 路径视为高频 RF 连接，快速边缘将具有数十兆赫兹的频率分量，可能达到兆赫兹，布局时永远不要忘记这一点。

原文链接：  
https://www.powerelectronicsnews.com/step-by-step-example-for-practical-pcb-design-power-supply-design-tutorial-section-3-3/

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。