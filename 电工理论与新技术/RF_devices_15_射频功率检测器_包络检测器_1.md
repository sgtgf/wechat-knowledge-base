# RF devices-15：射频功率检测器/包络检测器-1


> 原文地址: [https://mp.weixin.qq.com/s/wgJQJXCTprgpY4brK1TEIw](https://mp.weixin.qq.com/s/wgJQJXCTprgpY4brK1TEIw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT6Kv3TWYMkvkav33nWiaozOhaTrPDkZSXgrAUu7pdWu4Stfz5wUyNsicBmdnOyXlQhZR0PeBfArPjQ/640?wx_fmt=png&from=appmsg)

____**★★★**______Detector-1---功率检测器______**★★★**____

引言：在之前讲解定向耦合器时提到过检测环路，耦合器作为耦合端输出模拟信号，模拟信号无法直接被SOC或者Baseband所使用，需要功率检测器将其转为数字信号输出，本节介绍射频功率检测器。

__€1.Peak峰值类型__检测器____

_检测原理_

峰值检测器是最简单的检测器类型之一，用于存储在特定时间窗口中出现的最高值。与载波频率相比，峰值检测器的保持时间通常相对较长，而与包络频率相比，峰值检测器的保持时间相对较短，这样峰值检测器可用作AM解调器或包络跟踪器。

与提供峰值、平均值或RMS电压的其他检测器不同，包络检测器是一种快速响应检测器，能够跟踪调制射频载波的包络。包络检测器在需要快速控制PA输出功率的通信系统（如LTE）中特别有用，在传输开始之前准确设置传输功率水平，快速响应功率检测器能够在传输时隙开始时的50us功率转换时间内进行功率测量。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT6Kv3TWYMkvkav33nWiaozOkOiciazqHOuWOLGUVrjCEDoIPzlSwqVT2S6GYurhiaiazDfTdQG32N6ntA/640?wx_fmt=png&from=appmsg)

图15-1：峰值检测与包络跟踪

峰值检测器通常具有线性响应，如图15-2所示的二极管检测器，二极管整流RF输入电压，然后RC滤波器确定平均（保持）时间。保持时间的选择将配置二极管检测器以用于其特定应用，对于包络跟踪，选择相对较小的RC时间常数，以便输出电压很好地跟踪包络，相反，具有相对较大时间常数的配置可测量信号的峰值电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT6Kv3TWYMkvkav33nWiaozOqYhSG4cv6VpV8TcA3iasvPaYd3dntZj442RrYctog9qT5nxrbYjjtLA/640?wx_fmt=png&from=appmsg)

图15-2：二极管检测器

由于峰值检测器测量的是峰值电压，因此其响应本质上取决于信号形状或调制形式，需要了解信号形状才能确定RMS值，对于具有各种调制方案的复杂系统，预先内置的校准和查找表的数量就会比较繁杂。

_应用场景&检测框图_

Peak类型检测器可用于各种应用，例如LTE、W-CDMA、CDMA和GSM。发射功率控制环路电路使发射功率水平不受PA不准确性的影响，因为功率放大器是非线性设备并且受温度影响，很难确定准确的发射功率水平。如果使用控制环路，PA的误差将从发射功率水平的整体精度中消除，发射功率水平的精度现在取决于RF检测器的准确性。

Peak类型检测器特别适合发射功率控制应用，因为它可以准确测量发射功率，并且不受温度和电源电压变化的影响。图15-3显示了典型发射功率控制系统的简化原理图：PA的输出功率由峰值检测器通过定向耦合器测量，峰值检测器测量的输出电压由基带芯片内的ADC数字化，因此基带通过改变RF VGA的增益控制信号来控制PA的输出功率水平。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvqial2ENMcgPdvRSicicsY0zNibmUYPicggpzcj8jyQiaO08ic433XS9TyhZwg/640?wx_fmt=png&from=appmsg)

图15-3：Peak检测器典型应用框图

____€2.__RMS平均类型检测器__

_检测原理_

功率是信号平均能量含量的度量，根据定义，它不是信号形状随时间变化的函数。换句话说，0dBm正弦波的功率含量与0dBm方波或0dBm W-CDMA信号的功率含量相同，所有这些信号都具有相同的平均功率含量。平均功率可以用以下公式描述：

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvqLrmC1WKjlxPeDRbsQDOD3HtUmax6icT1kdcibwFo4RaDuE7doGTnibLw/640?wx_fmt=png&from=appmsg)_

其中T是取平均值的时间间隔，V(t)是时间t时的瞬时电压，R是功率耗散的电阻，VRMS是等效RMS电压。根据上述功率公式，可以通过测量信号的RMS电压 (VRMS) 来精确测量功率。RMS电压的描述如下：当电阻恒定时（假设系统为50Ω），平均功率与瞬时电压平方的平均值成正比。RMS检测器的响应对信号形状和调制形式不敏感，这是因为它的运行基于对平均功率的精确测定，即它实现了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvBib3G0oe9ppvweY2dlUKF7OHKB7hJWpLFlKwlMGzUTXbdeIa6TRKoeA/640?wx_fmt=png&from=appmsg)

例如，对于使用调制信号的射频应用，瞬时电压可以用以下公式描述：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvsBA4x2BFXNQsFECAshgdSe3uOYPUFOU8LJcykSxgciaibAgIy0yny2NA/640?wx_fmt=png&from=appmsg)

其中a(t)是幅度调制，ωc是载波频率，a(t)的频率通常为几MHz（最高20MHz），具体取决于调制标准。相对于载波频率，该频率相对较低，即几百MHz到几GHz。

为了确定RF调制信号的平均功率，检测器相对于调制变化速度对RF信号进行积分（平均）的时间非常重要。一方面，如图15-3所示，积分时间相对较高的检测器将产生恒定的输出，因为调制是平均的。这种检测器的一个例子是RMS检测器。另一方面，当积分时间相对较短时，如图15-4所示，检测器输出将跟踪RF信号的包络，这些RF检测器通常称为包络检测器。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT6Kv3TWYMkvkav33nWiaozOFCn64sfH6xciaza1Her6jyUFjCR0ZuIun2C933N36czvOYpRGtJCQtA/640?wx_fmt=png&from=appmsg)

图15-3：检测器有一个恒定输出

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT6Kv3TWYMkvkav33nWiaozOGkc64z3QKiaGMn4GZECBpCjN01ibatrOvjOFc1zno6YTkpKGcznxW7zQ/640?wx_fmt=png&from=appmsg)

图15-4：检测器跟踪包络输出

拟合出RMS的精确公式比较困难，当有波形信息时，可以简化确定平均功率的过程。如果知道信号形状，则RMS值与RF信号峰值之间的关系也是已知的。因此，它能够基于测量峰值电压而不是测量RMS电压来进行测量。为了计算RMS值（以及平均功率），需要根据波形特性将测量的峰值电压转换为RMS电压，下面是一些示例：

1#：正弦波：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvWjSGicpTKdgOGdib96UKibaZd0ibv3poib38hVxibSbOBiaYNJicvQPQLJ1W6Q/640?wx_fmt=png&from=appmsg)

2#：方波：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSvP6FcIicb2Nl3dmxUrHUfV6NKrJ2sp8zdL8Bxib5iaJ7icj611zwz3cTibsg/640?wx_fmt=png&from=appmsg)

3#：锯齿波：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTv3SibUOnF2elzoBEYywzSv8qp3ANtRXGuRoyBxYCM6TicC15fRNEspGY76IX3YIcMnK6m6Jv8Cvnw/640?wx_fmt=png&from=appmsg)

对于更复杂的波形，确定RMS值和峰值之间的确切关系并不总是那么容易，因此峰值测量可能变得不切实际，虽然可以使用近似值来计算VRMS与VPEAK的关系，但这可能会导致平均功率估计值不太准确。根据检测机制，功率检测器可能会根据前面提到的波形产生略有不同的输出信号，即使这些信号的平均功率水平相同。此误差是由于并非所有功率检测器都严格执行信号功率的定义，即信号的均方根RMS。为了弥补检测器输出响应中的系统误差，可以为不同的调制方案创建多个查找表进行校准，校准后，查找表将纠正误差。

_应用场景_

RMS检测器特别适合较新的通信标准，例如W-CDMA和LTE，这些标准具有较大的峰均比和不同的调制方案（信号形状）。与其他类型的检测器相比，这是在使用具有高峰均功率变化或不同调制方案的信号的应用中的一个关键优势。例如，RMS检测器对0dBm调制WCDMA信号和0dBm未调制载波的响应基本相等，这消除了由于应用的调制方案不同而导致应用中需要大量校准表和长时间校准程序。

RMS检测器特别适合于测量峰值与平均功率比变化较大的射频调制信号的功率，这是因为它的操作是基于对平均功率的直接测定，而不是像二极管检测器那样对峰值功率的测定，其优点和缺点可以总结如下：

1#：RMS检测器的温度稳定性几乎与二极管检测器的温度稳定性一样好，只有一小部分电路在RF频率下工作，而其余电路则在低频下工作。

2#：RMS检测器的动态范围有限，动态范围的下限受内部设备偏移的限制。

3#：RMS检测器的响应与波形高度无关，与其他类型的检测器相比，这是在使用具有高峰值与平均功率变化的信号的应用中的一个关键优势。例如RMS检测器对0-dBm WCDMA信号和0-dBm未调制载波的响应基本相等。

4#：RMS检测器的传输形状与二极管检测器有许多相似之处，因此在ADC分辨率要求方面具有类似的劣势。