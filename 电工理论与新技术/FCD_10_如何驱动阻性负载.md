# FCD-10：如何驱动阻性负载


> 原文地址: [https://mp.weixin.qq.com/s/vfnQ2Zxk1JQMZrLdLeLhqA](https://mp.weixin.qq.com/s/vfnQ2Zxk1JQMZrLdLeLhqA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSIIV3NXGkTicnX13NHfVSTW5YLXVhcbdnEIzZqESPlE2fEZib5Jpn35xr04jDlF49HicBCIFQYWiaOag/640?wx_fmt=png&from=appmsg)

_____**★★★**_________Load-1---阻性负载_________**★★★**_____

_撰稿：Timothy  校稿：Timothy_ 

引言：阻性负载是最常见的一种负载类型，几乎所有的数字负载都可以近似为阻性负载，通过正确理解负载模型对输出功率级的影响，可以显著提高系统的性能和可靠性。

本节将探讨阻性负载的应用，以及和驱动相关的特性，评估智能高侧开关的功能集如何满足负载的要求。为了选择正确的高侧开关，学习如何计算开关的功耗，并将其与结温联系起来，适当地设置电流限值，使高侧开关能够正确地驱动阻性负载。

_____€1.阻性负载特性_____

阻性负载是最简单的负载，遵循欧姆定律：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuib8n2gP5HFs4ic1QGo2tQ2ddmw7aHT8vWQaJ7MrjmVCfUlra1BM51jFqA/640?wx_fmt=png&from=appmsg)

知道电压和负载电阻值，利用这两个参数，就可以计算出流过电路的最大电流。因为每个高侧开关都有一个ON电阻，可以限制在不达到热关机的情况下通过该设备的额定电流。在典型的应用中，需要改变通过负载的电流，以提供预期的输出，而改变通过负载的电流的最基本方法是脉宽调制（PWM），这为热计算带来了更多的复杂性。

_____€2.应用场景举例_____

汽车中常见的阻性负载是座椅加热器，一个长线圈被放置在座椅内部，通电流加热。控制电流的大小以产生适宜的热量，座椅的温度设置需要有离散的温控程序，温度与流过负载的电流直接相关，为了调整温度，电流必须按比例变化。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibkSRGVlcqviazRXgv5txMRXIFLuqKIP2M1VntxZxJLc2geDkqsBiceiaRA/640?wx_fmt=png&from=appmsg)

MCU输出调制PWM信号，控制高侧开关脉宽，以一定的速率开启和关闭设备，产生有效平均电流，根据占空比D在公式3中计算，当PWMing使能时，存在相关的功率损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibicMOB0WXs0RK6GAkuxdFkTtiaKTibzuibeiczRkVEfBEOWaCDZyUUDEatTQ/640?wx_fmt=png&from=appmsg)

MCU还需要测量通过高侧开关的电流，以匹配当前座椅上的温度，这意味着高侧开关的电流检测需要满足一定的精度。

对于不同的阻性负载，如白炽灯和工业加热器，都需要不同的电流，因此短路保护阈值也会随之改变。这个保护阈值需要足够高，以使标称电流通过，但又必须足够低，使它不会对系统本身造成损害。

_____€3.使用智能高边开关_____  

驱动阻性负载的基本原理很简单，一般选择使用智能高端开关作为PWM的执行器，因为其具有精确的电流检测和可调节的电流限制。

_精确的电流感测_  

大多数智能高端开关都有电流检测的功能，可以测量通过开关的电流，流经开关的电流与负载中的温度成正比，这意味着要有一个闭环电路，监测和主动调整电流，需要在电流测量中有非常低的误差。当涉及到电流测量时，不同器件偏差可能会导致测量误差。

如**_图10-1_**所示，分立式测量电流是使用检流电阻，并由四个电阻和一个运算放大器组成差分放大器。在这种配置中，系统中的每个部件公差必须小于1%，这是为了减少总体的误差度，同时增加电路布局空间和串联阻抗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSIIV3NXGkTicnX13NHfVSTWvYRzzjjdF6U8tUwAO0K9SbaLhZgVtsjx0ibG5eJZrNPlyKRnzMCiaKDQ/640?wx_fmt=png&from=appmsg)

**_图10-1：分立电流测量的实现_**

智能高端开关在大多数设备上都具有非常高的电流检测精度，例如在负载≥1A时具有±3%的精度，它不仅减少了系统中所需的部件数量，误差也更小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSIIV3NXGkTicnX13NHfVSTWRbzx9DhKdPn6EGFH9cwTetiafxoCFdRJq1IQibD9xr4ERZ1Cvq1WHI4g/640?wx_fmt=png&from=appmsg)

**_图10-2：TPSxHxxx电流检测电路_**

**_图10-2_**显示了高端开关中用于电流检测的内部电路，它集成了电流感测，可以减少系统中的组件数量，同时仍然保持测量的高精度。

_可调电流限制_  

智能高端开关的另一个功能是可调节的电流限制，这一功能在热应用中尤其重要，在热应用场景，短时间内允许大电流流入会损坏系统。在阻性负载应用中的大多数时间，使能引脚是PWMed，只允许总电流的一部分供给负载，这意味着即使高压侧开关允许流经的额定电流也可能是故障情况的一种（超出了需求）。普通的高端开关通常具有固定的电流限制，该电流限制通常相对于标称工作电流非常高，那么开关在达到设定的异常高的电流水平或热关机之前不会关闭。

_____€4.选择合适的智能高边开关_____

阻性负载的高压侧开关的选择取决于哪些功能是必要的，以及多大的Ron可以安全地驱动负载。

_功耗计算_

选择合适的智能高端开关在很大程度上取决于设备是否能够在不达到热关机的情况下提供应用所需的电流。对于阻性负载应用，首先是测量负载的电阻值，然后使用等式1计算电流。所提供的电压一定是特定使用情况所需的最大工作电压，对于汽车电池来说是18V，任何更高的电压都将被视为故障电压。由于输入的PWMing，大多数阻性负载不会在全电流下运行，要确保开关仍能在全电流下运行。使用该电流和开关的Ron（高温时的最大值），可以通过方程4计算开关中耗散的功率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuib3kUfiaAPibXdYffTJNjoxNSqATNdLFsTaOddic8W4SFZlibgQWI3BVer9Q/640?wx_fmt=png&from=appmsg)

数据表中的RθJA（结与环境热阻）是根据JEDEC标准定义的特定板布局所测得的，热性能会因不同的电路板布局而变化，但可以作为很好的第一近似值。计算结温度TJ，取环境温度TA加上功率耗散乘以RθJA，如公式5所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibrW9yKJWlHsOe4plA0oMxdSQibADDNErO3U4MyeeYjkXICERVYfZR43g/640?wx_fmt=png&from=appmsg)

几乎所有智能高端开关都具有热关机功能，当器件的结温达到一定温度时，器件将关闭以保护自身。当系统处于正常运行时，确保开关永远不会达到该温度。使用上述方程，并将数据表中计算的最大结温与热关闭阈值T（SD）或TABS联系起来，就可以判断器件是否会因为驱动该负载所需的电流而进入热关机状态。

上述是针对没有PWMing的计算，当负载为PWMed时，系统中的电流低于该部分中计算的直流电流，实际上可以根据PWM电流选择智能高侧开关，使用可调节电流限制功能，可以将电流限制设置为低于直通电流。

_PWM和开关损耗_

计算稳态运行时的功耗和结温是选择智能高端开关驱动阻性负载的第一步，PWMing控制开关的快速接通和断开，开关中引入了更多的损耗，这在大负载电流应用中也需要考虑。理想负载是阻性的，所以在打开和关闭负载时不会有任何功率损失，因为根据欧姆定律，电压与电流成正比，当电流变为零时，电压将跟随。

由于不存在纯阻性负载，所以要考虑负载中的寄生参数，寄生参数直接影响电压和电流的关系。另外当MCU对开关的启用引脚进行PWMing时，输出电压波形将不会直接镜像启用，相反它具有不同的转换速率（器件自动整形），开关这样做是非常重要和必要的，因为输出波形的快速变化将产生大量的EMI，特别是在汽车系统中可能具有破坏性。数据表中定义了开启和关闭脉冲的形状，**_图10-3_**显示了一个示例波形：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSw44ib4DrdlANUeHLH4wyPprX5ZHdCEAjcX52KjRRjNvfVFT0jgg2HPrMQpfJJdtGu20C4OKnJI4w/640?wx_fmt=png)

**_图10-3：智能高侧开关波形_**

智能高端开关的数据表定义了导通延迟td（on）或tDR，以及总导通时间td（rise）或tON，两者相减得出输出器件的10%至90%上升时间。类似地，关断延迟td（off）或tDF以及总关断时间td（fall）或tOFF可用于计算输出的90%至10%的下降时间。在0-10%和10-0%之间会出现额外的切换损失，从**_图10-4_**可以看出，开关能量损失是导通和关断时间的功率耗散曲线下的面积。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSw44ib4DrdlANUeHLH4wyPpMQvMPesaSIRGibF6ZqNpVV6FMJFXBUY0B0gxk5ELxqQYibNSQm1lZTUg/640?wx_fmt=png)

**_图10-4：PWM期间的开关能量损耗_**

上图显示了主开关FET两端电压VDS和通过系统的电流IOUT，在这些波形下面示出了功率耗散波形，该功率耗散波形是上面两个波形的乘积。显然VDS和IOUT成反比，它们的波形不是线性的，这可以从接通和断开期间的红色电源波形上的尖峰看出。在系统达到稳定状态之前，该曲线下的面积被称为接通或断开能量EON和EOFF，不过在大多数情况下，主要的能量损失还是通过FET的耗散。

开关的Ron越低，开关损耗占比就越高，因此低Ron器件提供了关断和导通期间的开关能量损失，取这个值，单位为mJ，并将其乘以开关频率，得到开关能量损失：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuib3IQsgricwVcOveJke4dnkXArdTK4u4ZzEHUGdKlmBLs7CibMvbguSb7w/640?wx_fmt=png&from=appmsg)

这是一个通道的切换损耗，如果器件有一个以上的通道，则总损耗=开关损耗+FET导通损耗乘以通道数量：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibqyO196JMjL7kiabd9HdcDVBRb1MQsolptUfl9jGNpYicib2jDiaTJ6qdAw/640?wx_fmt=png&from=appmsg)

将总功耗使用方程5来计算结温度，以确认器件是否能够成功地驱动该负载，如果结温度低于热关闭阈值，则该器件可以向负载输送功率。

_____€5.计算实例_____

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSw44ib4DrdlANUeHLH4wyPpzctesud4fPquGbnic71ecPANKsQoHWN4NIsYgyuUMbm16WooRyk87XQ/640?wx_fmt=png)

**_表10-1：加热器负载示例_**

如**_表10-1_**所示，有两个电阻加热器负载：第一个是1.42Ω，需要在200Hz下切换，占空比为50%；第二个是2.6Ω，在100Hz下PWMed，占空比为85%，电池电压为13.5V，使用驱动为TPS2HB16-Q1。

Step1：计算通道1的IH1和通道2的IH2的稳态负载电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibbIpSeqVuCckc4EvIT9D4WhDTK5ZDCbNaOFibnPeP4wb6Ljv4azk72Ug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibBej0iaZ9kInoicyh3ZteUHvX2mibW7UDRc4icBK3eicDbSvfaKdoOFKs56w/640?wx_fmt=png&from=appmsg)

Step2：使用等式4计算每个通道在正常操作期间的开关功耗，Ron值来自TPS2HB16-Q1数据表中的“导通电阻Ron-温度”图，另外只要占空比不动态变化，通过开关的平均功耗将与用占空比计算的稳态电流相关。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibtJM2RPsWEfz9ydsNzkhSReDRe9OmRVMuyhE1ZnvAIcJvVl2QZJWLBw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibtPVfN5LxOOOO7hacT4c4PQ461dHumpTuOkVsbV2z4ZdyAFzfQu7z4g/640?wx_fmt=png&from=appmsg)

Step3：计算开关损耗，在TPS2HB16-Q1数据表中，EON被定义为0.4mJ，EOFF也被定义为0.4mJ，使用方程6可以找到器件的开关损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibgplyJmTCGlCAUH5lBhh9c8vQHWn5qBy5GvTIm77WaUqqHP2RaNnTEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuib7weTHyuqUS7unkckJWBnIh8g2uIvibdjQTPtxa54VPxDouGv2EHk16w/640?wx_fmt=png&from=appmsg)

**_图10-5_**显示了RH1的切换，蓝色波形为使能信号，绿色为VBB，黄色为VOUT，紫色为IOUT，在**_图10-6_**中，白色为开关的VDS，红色波形是由此产生的功率耗散和开关损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSw44ib4DrdlANUeHLH4wyPpEg5VaIbFicySKLyBtdPPhJ0ichBzjVSSicPBHriaRXZF2qcOEXX3IW7vTQ/640?wx_fmt=png)

**_图10-5.测量的开关波形_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSw44ib4DrdlANUeHLH4wyPp1rBM11Pybyh7pxJ0ia6DV7o79HNFXAVvumlplUvSsOgia2ZrUOfp74jw/640?wx_fmt=png)

**_图10-6.测量的开关损耗波形_**

Step4：把设备中的所有损耗加起来就得到了总功耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibBLDUE9lvnhv4SkCVHfLyzFmUbt3zFiaScUiamJxRxhexdrBD2dGZawqg/640?wx_fmt=png&from=appmsg)

确定了总功率耗散，可以使用等式5来计算结温度：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibmszs1Gib9786ctPBydEHYgGevHLvxwvSTwOVx2wwlqTbcpWy4iaVaUCQ/640?wx_fmt=png&from=appmsg)

该温度远低于设备160°C的热关机温度，这意味着TPS2HB16-Q1可以安全地驱动这些负载。