# Power-5：外部电源开关同步升压控制器-2


> 原文地址: [https://mp.weixin.qq.com/s/sahjHrJlgQ8JkE\_6YCJCpA](https://mp.weixin.qq.com/s/sahjHrJlgQ8JkE_6YCJCpA)

____________![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvnBIPibmduNQLhoTfaETtIVruSVbmPFW1AOLoY7ibs8CUWo2icNYt9oUTIG80bcKVuyF4ibIubRO5yQ/640?wx_fmt=png)____________

____**★★★**______Power-5---同步升压控制器______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：和降压控制器类似，升压控制器也有多种工作模式，在中/重负载模式工作时，控制器以固定频率连续规律工作，在轻载模式下则有多种模式可选，本节简述控制器的多种工作模式和其多相使用方式。

____________€1._______工作模式_____

控制器轻载工作模式支持在低负载电流下进入高效的突发、恒定频率、脉冲跳跃和连续传导（BCM，PSM，CCM）模式，要选择模式，可以查看控制器说明配置外围引脚。

BCM：突发模式，在开关周期内，电感电流总会到0，意味着电感被适当地“复位”，即功率开关闭合时，电感电流为零。

突发模式比较器控制开关管工作，开关管工作的时间很短，停止工作的时间很长，极大的降低了开关损耗，在此期间，芯片内部的许多功能停止工作，减小内部静态电流的消耗，因此提高了系统的效率。另一方面由于开关管停止工作的时间很长，输出电容将维持输出的负载的能量，输出电容的电压降低幅度较大，因此输出电容的纹波电压大，即输出的纹波电压大。突发工作模式比较器的上下门限电压决定了输出电压纹波值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPLcXpMhtxoUapOFLm40n8sy56JtoYBSTZ4KiaCj6YCz8F1R0MbaAtpicQ/640?wx_fmt=png)

**_图5-1：12V->24V；**_Load=_**500mA->7A；突发模式BM_**

PSM：为了维持输出电压的调节，开关管的开通时间将减小，直到达到控制器的最小导通时间。开关管的开通时间达到控制器的最小导通时间后，若负载电流仍然的降低，控制器就必须屏蔽掉即跳掉一些开关脉冲，以维持输出电压的调节，这种控制方法即为脉冲跳跃模式。脉冲跳跃模式，控制器监控电感电流，一旦检测到电流等于0，功率开关立即闭合。当下管的电流接近于0时，系统就工作在非同步的方式，也就是下管不工作，依靠下管内部寄生的反并联二极管，提供续流回路。控制器总是等电感电流“复位”来激活开关，如果电感值电流高，而截止斜坡相当平，则开关周期延长。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cP1qIGlOV93Cd5jUnyeprwmv1Vy1tibsBFBwyiboppSzbcSRB7AgPqMLsQ/640?wx_fmt=jpeg)

**_图5-2：12V->24V；Load=500mA->7A；脉冲跳跃模式PSM_**

CCM：连续导通模式，在一个开关周期内，电感电流从不会到0，或者说电感从不“复位”，意味着在开关周期内电感磁通从不回到0，功率管闭合时，线圈中还有电流流过。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPS6G8We46UUBCDlZzeB9XhOQeHicUJkwRE8eOCqpw6I8wSGHbpAFaib2w/640?wx_fmt=png)

**_图5-3：12V->24V；**_Load=_**500mA->7A；强制连续模式CCM_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPqPUErVPHRI22RiasiciabGruYqaicdIfV3Y7DAL50QQY4NWeACNNUg29LA/640?wx_fmt=png)

**_**_图5-4：轻载下的电感电流（双相）；12V->24V；Load=200uA_**_**

连续工作模式下，轻载时的效率低于突发模式操作，但是连续工作具有输出电压波纹低、对音频电路干扰小的优点，因为它保持着独立于负载电流的恒频运行。

脉冲跳跃模式时，控制器在轻负载下以PWM脉冲跳跃模式工作。在这种模式下，恒频运行维持在设计最大输出电流的大约1%以下。在非常轻的负载下，电流比较器ICMP可能在几个周期内保持关闭，并迫使外部底部MOSFET在相同数量的周期内保持关闭（即跳过脉冲）。电感器的电流不允许反转，与强制连续操作一样，与突发模式操作相比，具有低输出纹波、低音频噪声和减少射频干扰。它提供了比强制连续模式更高的低电流效率，但远不如突发模式操作高。

____€2.__频率选择/同步和锁相环__

开关频率的选择是效率和组件大小之间的权衡，低频工作通过减少MOSFET开关损耗来提高效率，但需要更大的电感和/或电容来保持低输出纹波电压，部分控制器的开关频率可以使用FREQ引脚进行选择。

当Vin高于Vout电压时，升压控制器可以根据模式、电感电流和VIN电压的不同而表现不同，关于这一点，可以查看不同控制器的说明。控制器的内部锁相环PL，由相位频率检测器、低通滤波器和压控振荡器（VCO组成，PLL允许底部MOSFET的开启被锁定信号施加到180度失相位。若为双通道，允许通道1的底部MOSFET的打开将被锁定到施加于PLLIN/MODE引脚的外部时钟信号的上升边缘，因此通道2的底部MOSFET的开启与外部时钟失相180度。一般来说控制器只能同步到一个外部时钟，其频率在控制器的内部VCO范围内，即名义上是55kHz到1MHz，实际保证锁定在75kHz到850kHz之间。

快速锁相可以通过使用FREQ引脚设置一个接近期望的自用运行同步频率，VCO的输入电压在与FREQ引脚设置的频率对应的频率上被预偏置。一旦预偏置，PLL只需要稍微调整频率来实现锁相和同步。虽然不要求自由运行的频率接近外部时钟频率，但这样做避免工作频率通过PLL锁定偏差过大。

____€3.__两相单输出工作__  

如**_图5-5_**两相单输出转换器，其中两个通道的输出连接在一起，并且两个通道具有相同的占空比。在两相运行时，两个通道运行180度失相，这有效地交织了输出电容器电流脉冲，大大降低了输出电容器纹波电流，因此可以放宽对电容器的ESR的要求。由于输出电容器中的纹波电流是一个方波，因此对输出电容器的纹波电流的要求取决于占空比、相位数和最大输出电流。（传送门：[Power-2：外置开关同步降压控制器-多相多输出](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492432&idx=1&sn=bbf11210cef9c0da30fdea03c322897c&chksm=c336a9cff44120d912f0dfe6d351c8e7c90a194268b32b8c35052ab55c7b48765e4548b4c81d&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSB9287JJvoTD2tHh7KDYKNkOGWshVHN7YVX4S45IF9y75qckUqzHkDzyp8I81VKsBWKr8I3Y5gfA/640?wx_fmt=png)

**_**_图5-5：两相电流波形_**_**

在两相配置中，如**_图5-6_**所示，归一化输出电容器纹波电流作为占空比的函数。要为输出电容器选择一个纹波电流额定值，首先根据输出电压和输入电压的范围建立占空比范围，选择最坏情况下的高归一化纹波电流作为最大负载电流的百分比。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTEoeah0Fxg8iawDUtdgHw2GVsaqjoF5R00qaJMlb1gX9XibRHztYpykiaDndttaGmTEemVpXFp4JVYA/640?wx_fmt=png)

**_**_图5-6：升压转换器的标准化输出电容激波电流（RMS）_**_**

一般需要并行放置多个电容器，以满足ESR和RM当前的要求，固体钽，特殊聚合物，铝电解和陶瓷电容器都可以使用，其中陶瓷电容器具有优良的低ESR特性，具有较高的电压系数，但单个容值有限，OS-CON和POSCAP电容器可提供低ESR和高波纹电流额定值。

______€4.__多相操作和拓扑____

对于需要大电流的输出负载，可以级联多个控制器错相工作，以提供更多的输出电流，同时减少输入和输出电压纹波。PLLIN/MODE引脚允许控制器与另一个控制器的CLKOUT信号同步。CLKOUT信号可以连接到以下控制器的PLLIN/MODE引脚，以排列整个系统的频率和相位。用PHASMD引脚配置相位差（CH1和CH2之间）为120°、180°或240°。**_图5-7_**至**_图5-10_**显示了3、4、6或12相操作所需的连接，共可以级联12个控制器，同时错相运行。

当在多个控制器控制相同输出的多相应用中改变输出电压时，需要同步所有控制器之间的变化，可以通过两种方式来实现：

1#：使用命令为所有控制器设置一个公共地址，然后将新的输出电压值写入这个公共地址，以便所有控制器同时接收新值。

2#：使用组命令协议（GCP）。GCP确保所有接收到输出更改命令的从器件同时启动更改。

设定控制器1的两相差240°，然后控制器2的一个相位插入0°和240°之间，形成0°/120°/240°的三相。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPUJprpJZvhkKQRQJeHHSY7ZMPqiaZBiaL217pPGQ7HL4M9ytEWkCwSrcw/640?wx_fmt=png)

**_**_图5-7：三相组合配置_**_**

设定控制器1的两相为0°和180°，然后控制器2的两相是控制器1的两相整体加90°，形成四相。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cP9rAQdAEUcXwB627A3QccjicLlRh9Miaibloy5icHG95KlDicAibCIUmKWDDA/640?wx_fmt=png)

**_**_图5-8：四相组合配置_**_**

设定控制器1的两相为0°和180°，然后控制器2的两相是控制器1的两相整体加60°，最后控制器3的两相是控制器2的两相整体加60°，一起形成六相。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPLBhkFfkkibmghrREE2ppaOII950RZherqOLkicOcV7WgWJDKpc45NTyA/640?wx_fmt=png)

**_**_图5-9：六相组合配置_**_**

十二相的配置如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPkvXwYLzicMCd8iaPLLT76qg8MF3kELLyagR9ow6tubCCt1T4pGFapS7Q/640?wx_fmt=png)

**_**_图5-10：十二相组合配置_**_**

______€5.__四相使用示例____

如**_图5-11_**所示是四相使用示例，四相搭配四个功率级，输出24V-20A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPVhHyxWdSibeZcVH1dzD1niawQ0XPMbYEqgeqSaMKsl8wIRvibZFwbf9PQ/640?wx_fmt=png)

**_**_图5-11：多相使用_**_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQSNmzFL0vBrIP920BNF3cPeSM6P9ic7CZnia9vfo4pUHUCpIzia9UjRjVy3gib0TRzSicl1pQiahBMJfWg/640?wx_fmt=png)

**_**_图5-12：图5-11的电流图_**_**

**_图5-12_**是**_图5-11_**的关键节点电流波形，IL1至IL4叠加，增加了纹波频率，但降低了输入/输出纹波电流的均方根值RMS，从而节省输入/输出电容器数量。