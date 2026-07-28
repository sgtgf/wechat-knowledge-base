# RF devices-16：射频功率检测器/包络检测器-2（预祝大家五一快乐）


> 原文地址: [https://mp.weixin.qq.com/s/tdbas1o\_T6X2fCYNGRxZ0Q](https://mp.weixin.qq.com/s/tdbas1o_T6X2fCYNGRxZ0Q)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT6Kv3TWYMkvkav33nWiaozOhaTrPDkZSXgrAUu7pdWu4Stfz5wUyNsicBmdnOyXlQhZR0PeBfArPjQ/640?wx_fmt=png&from=appmsg)

____**★★★**______Detector-2---功率检测器______**★★★**____

引言：本节继续介绍射频功率检测器。（[RF devices-15：射频功率检测器/包络检测器-1](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247495332&idx=1&sn=e8b6052a10806aac8029a74fef595c57&scene=21#wechat_redirect)）LOG放大器检测器是GSM和早期W-CDMA系统中广泛使用的RF功率检测器，适用于功率测量系统，特别适合CDMA和UMTS应用，用于测量所施加的RF功率，产生直流电压输出。

_____€1.__Logarithmic对数类型检测器___

_检测原理_

Log放大器检测器的传递函数具有线性的dB响应，这意味着输出（单位V）随RF功率（单位dBm）线性变化，大多数通信标准也以dBm为单位指定发射功率水平。Log放大器检测器通过分段线性近似实现对数函数，因此Log放大器检测器无法实现精确的功率测量，在使用依赖于信号形状的各种调制方案的系统中，Log放大器检测器可能需要校准和查找表。  

如图16-1所示，Log检测器的核心是一个渐进压缩Log检测器，由（多个）四个增益级组成，每个增益级的饱和增益约为10dB，因此可实现约10dB的动态范围。五个二极管单元执行实际检测并将RF信号转换为直流电流，该直流电流随后提供给输出端的跨阻放大器，后者将其转换为输出电压，此外，放大器还提供缓冲并对检测器输出信号进行滤波。为了防止关机时OUT和GND之间的滤波电容器放电，在放大器输入端插入一个开关，该开关在关机时打开，以实现器件的高阻抗输出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvh2QxvOCcg11WTzpwic6x3Cy5HcTWrJsDhwypJHVDOOAPDqX5mJSo6Kg/640?wx_fmt=png&from=appmsg)

图16-1：对数检测器内部结构

一般Log检测器动态范围可达40dB，此动态范围加上其对数特性使Log检测器成为各种应用的理想选择，例如CDMA和UMTS应用的无线发射功率控制。Log检测器的频率范围为50MHz至4GHz，因此适用于各种应用。  

Log检测器的传递函数经过精确的温度补偿，在很宽的温度范围内，测量都很准确。此外，由于Log检测器具有50Ω输入端接，因此可以轻松将其连接到定向耦合器（传送门：[RF devices-13：定向耦合器](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247495160&idx=1&sn=d56b417b4853264170125eefde233131&scene=21#wechat_redirect)），输出范围可调以适应ADC输入范围，检测器可以切换到省电关机模式，以便在脉冲条件下使用。

_校准检测_

功率检测器实现的功率测量精度不仅取决于检测器本身的精度，还取决于其集成到应用中的方式。在许多应用中，采用某种形式的校准来提高整个系统的精度，使其超出功率检测器提供的固有精度。对于Log检测器，可以使用校准来消除整个功率测量系统中Log斜率和Log截距的部分偏移，从而提高其功率测量精度。

对于使用Log检测器或者其他功率检测器的功率测量系统，影响功率测量精度的其他因素（例如读取检测器输出信号的ADC分辨率）将不在此处考虑，因为它们不是由功率检测器所引起。当Log检测器传递函数被建模为输入功率和输出电压之间的完美线性dB关系时，获得可以实现的最简单的功率测量系统：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSv2rT3ic1EggcBgZ85GveK0W87icW555AgVWv3YCCHVzL9evdBPJJwP9kg/640?wx_fmt=png&from=appmsg)

其中Kslope表示对数斜率，Pintercept表示对数截距，基于此模型的估计量得到模型方程的逆，即：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSv0xRTsNatMSxW4icIHGECUsgFAZytoF4r8NiaFEeH4L1UNTLv5H32S0Rw/640?wx_fmt=png&from=appmsg)

因此，产生的功率测量误差，即Log一致性误差等于：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvqBhoCtzhXJ0qb5bBnutocia6zjhETFtBEV7yia3b117icf7SrANSDXHrQ/640?wx_fmt=png&from=appmsg)

Log一致性误差最重要的贡献因素通常是：

1#：实际检测器传递函数与理想对数的偏差（传递函数以dB为单位为非线性）。

2#：检测器传递函数在不同环境条件下的漂移，最重要的是温度；Kslope和Pintercept通常仅针对室温确定。

3#：传递函数（室温）的部件间漂移。

后一个分量可通过校准方便地去除，通过测量检测器输出电压（在室温下）来实现为每个单独的检测器设备（在室温下）确定Log斜率和Log截距。该电压在检测器传递函数的Log线性范围内具有一系列不同的功率水平，然后可以通过线性回归确定斜率和截距，图16-2中描述了此类误差及其与检测器传递函数的关系的示例：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQ0c9t6BlPdaxibiacI3Mtvtnvk95Io4pR1XRnrSG6Jsluf78tViaVO5oxlkRHVJksyjR0RYsOicUicm6g/640?wx_fmt=jpeg)

图16-2：误差---传递函数

在检测器动态范围的中心点，Log一致性误差很小，尤其是在室温条件下，在此区域，传递函数严格遵循线性dB关系，而Kslope和Pintercept则根据室温测量确定。在极端温度下，由于检测器传递函数的温度漂移，范围中心的误差略大。误差迅速增加到检测器动态范围的顶端和底端，此时检测器饱和，其传递函数开始明显偏离理想的Log线性模型。检测器动态范围通常定义为Log一致性误差小于指定量的功率范围，一般以±1dB的误差作为标准。

_优缺点_

优点和缺点可以总结如下：

1#：Log检测器传递函数的温度稳定性通常不如二极管和RMS检测器，这是因为Log检测器电路的很大一部分在RF频率下工作。

2#：Log检测器的动态范围通常比其他类型的检测器大得多。

3#：由于Log检测器执行的是一种峰值检测，因此它们的响应取决于波形，类似于二极管检测器。

4#：Log检测器的传递形状对ADC分辨率的要求最低。

__€2.关键参数__

RF功率检测器的主要特性用于精确测量应用内部信号的功率，因此，可实现的测量精度取决于检测器从RF输入功率到DC输出电压的传递函数的精度和可预测性。某些关键特性决定了RF检测器的精度，以下是根据这些特性进行分类：

1#：温度稳定性、动态范围

2#：波形依赖性、传递形状

3#：工作频段、功率容量（灵敏度）  

4#：转换增益  

__€3.检测器类型的选择__

RF功率检测器与通信标准一起不断发展，LTE和W-CDMA等较新的通信标准提出了对更先进、更精确的功率检测器的需求。为了能够区分各种检测器类型，重要的是要了解理想的功率测量应该是什么样的，以及如何实施功率测量，最适合特定应用的检测器主要由调制标准及其特性决定。

2G采用时分复用，因此，检测器必须能够在PA环路控制的情况下跟踪RF信号的上升和下降，检测器应具有较短的响应时间才能响应此需求。

3G标准（如W-CDMA）具有5MHz的恒定调制带宽和码分复用方法，即连续传输。RMS检测器针对这些信号特性进行了定制，因为它们积分时间足够长，可以获得实际RMS电压，即T>>1/(5MHz)。

4G标准（如LTE）的调制带宽可能会有所不同，具有低调制带宽的信号，比如具有1个资源块 (RB) 的LTE，它的调制带宽为200kHz。RMS检测器需要对T>>1/(200kHz) 进行平均，大约是几十us，相比之下，100RB信号具有20MHz带宽，需要平均时间T>>1/(20MHz)。根据调制带宽，适用不同的检测器，对于低调制带宽（低RB），RMS检测器的积分时间会很长（通常太长），因此改用包络检测器。对于高RB，RMS检测器更合适。