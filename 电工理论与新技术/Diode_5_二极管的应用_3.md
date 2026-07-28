# Diode-5：二极管的应用-3


> 原文地址: [https://mp.weixin.qq.com/s/-XYIkTdvTxHSb\_mjSDhfww](https://mp.weixin.qq.com/s/-XYIkTdvTxHSb_mjSDhfww)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTiah5rXLdlYGdViavjB4pXQic2l7V80YJDsQEic2pUXiaYOVXG9GHJTAH4thPkiaCQcU868RvbEz8VRUMw/640?wx_fmt=png)  

____**★★★**______Diode-5---二极管的应用______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：开关二极管可以在几乎所有的电子应用中找到，本节将讨论在许多应用程序中可以找到的一些开关二极管使用示例。  

___€1.基本逻辑门___

开关二极管可用于极低成本的解决方案中，以实现简单、低速的逻辑功能。如**_图5-1_**所示，控制信号A和B通过两个二极管连接到电阻器R1，一旦至少一个信号具有显著高于VF的正电压电平，电流将流过R1。如果我们将简单电路视为逻辑函数，则会创建一个或门，如果一个输入信号A或B或两者都获得正输入电压，则R1处存在正电压。通过增加更多的二极管，电路可以很容易地扩展，以这种方式连接更多的控制信号。（传送门：[SCD-12：如何用二极管设计分立式逻辑门](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491030&idx=1&sn=4b44ee0ee356e7a1c40db748b03e38f7&chksm=c3355749f442de5fd793158035efd229e3c710ab2aa066caf7c2a1fa8cea39362d690595e960&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bp8PZibxM7YrAxKwSrvoVw0lvgUkkcOkPl33u8njicnekNruYfrXxNjzw/640?wx_fmt=png)‍

**_图5-1：用于逻辑或功能的二极管_**

二极管使输入信号彼此解耦，如果一个信号显示逻辑高状态，则没有电流会流回具有逻辑低状态的其他信号。如果该电路连接到开关级，例如BJT或FET，则可以控制许多类型的驱动器和负载，它们可以用不同于输入信号A和B的电压工作。**_图5-2_**描述了这种情况，Q1切换负载电阻器Rload，如果选择了合适的FET，则可以无限制地选择负载电源电压。漏极引脚处的电压可以被视为R1处的电压的反相信号，二极管产生的或门之后是反相器，因此建立了或门。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bs75TF6pEsib1RSY2icJ9XDM2XQMGEDCEj0FXFcevtRymYWJ6PmR4aWLA/640?wx_fmt=png)

**_图5-2：增加了FET开关，扩展了二极管的OR功能_**

如果与**_图5-1_**相比，开关二极管反向连接，即在节点C处具有公共阳极，如**_图5-3_**所示，则一旦至少一个输入具有地电平，R1处的电压为VF。如果所有输入都提供逻辑高状态，则信号C的电压也将提供逻辑高态，所讨论的电路提供了AND功能。同样，它可以通过添加更多的二极管来扩展到更高数量的输入。添加阈值电压高于VF的FET提供了切换各种负载的选项，并且如果该方法用作NAND功能，则漏极信号具有干净的低电平。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bBK8Ez0kK6gZXSeuTmNUjAATBs1OtnJ4Uo0uvyMiadtzTjm5ppfX9Mog/640?wx_fmt=png)

**_图5-3：二极管AND功能_**

添加阈值电压高于VF的FET提供了切换各种负载的选项，并且如果该方法用作NAND功能，则漏极信号具有干净的低电平。然后**_图5-4_**中的信号C可以用作进一步电路的适当控制信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQZbBgkPZzKHB2hAvQ2JhVqzwR8u7nAGvGjNfj2iamN1nMbWZevFzAlL1asIOjibO7ORPDpABW7o95g/640?wx_fmt=png)

**_图5-4：添加FET开关的二极管AND功能_**

如果必须同时存在具有正电压的多个控制信号，则通常使用AND功能。可能有几个开关保护系统的正常状态--->例如所有门都关闭，但是一些电源电压可能是强制性的，以实现后续的操作。

___€2.电压钳位___

开关二极管通常用于轨对轨方法中的电压钳位，**_图5-5_**描述了该解决方案。如果对地电平的负电压浪涌脉冲进入系统，则低压侧二极管导通，并将信号S1的电压箝位至−VF。对于正浪涌事件，一旦电压超过VCC+VF，上部二极管开始导通。通常大电容器连接到电源线，在本例中称为VCC，并且该线的阻抗通常很低，连接了许多负载。因此电压VCC不会因不具有高能量的ESD冲击而增加太多。如果可以预期更高的能量脉冲和长持续时间的过电压脉冲，则可以反向向电源添加齐纳二极管或TVS二极管。在**_图5-5_**中，TVS二极管用虚线连接，过电压限制为VBR+VF，VBR是齐纳二极管的击穿电压，VF是**_图5-5_**中上部开关二极管的正向压降。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQZbBgkPZzKHB2hAvQ2JhVqS4iaoicNiaz0dleeF4Ejh9SbEeucK16vicVAmibXL6XhuBgy5dV7YeRZyfg/640?wx_fmt=png)

**_图5-5：开关二极管用作输入保护_**

______€3.___电荷泵开关___

_电压反相_

电荷泵由用于储能的电容器和作为开关元件的二极管组成，是开关二极管的另一个应用实例。在使用运算放大器的应用中，通常需要负电源电压，以便使用接地作为放大器的参考，**_图5-6_**显示了一个电压反相器，振荡器在GND电平和电压V1之间切换。如果振荡器输出正电压V1，则C1通过D1充电到V1-VF，一旦电压源切换到GND，则充电的电容器的正极就会接地。通过这种切换操作，现在在电容器的负极处存在对地的负电压，二极管D1被反向偏置并且不导通，但是D2在正方向上被偏置，因此C2被充电，产生对GND的负电压。在下一个振荡器周期，D2阻断C2的放电，C1通过D1重新充电。Vout是来自振荡器的反向正电压，损耗来自两个二极管的正向电压降，因此Vout=V1–2×VF。

电容必须具有足够高的电容，以实现Vout上的最低纹波电压，这些值取决于开关频率和最大负载电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT4NER3vCaK0F0sbJqxhJRnMzuDria7fMwurGRelReRVESvvXpy9qqb6EXBkXn3dD6WtaBgNWcGIDA/640?wx_fmt=png)

**_图5-6：采用电荷泵方法的电压反相器_**

_电压倍增_

**_图5-7_**描述了一个可以使电源电压加倍的电荷泵电路，电路有一个DC电源V1和一个假定在GND电平和正电压V1之间切换的振荡器。如果振荡器输出GND电平，则C1充电至V1-VF，C2也被充电至V1−2×VF。一旦振荡器切换到输出电压V1，充电的C1的负极向上移动V1，因此电荷可以从C1流入C2，从而增加输出电压。对于Vout，方程式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT4NER3vCaK0F0sbJqxhJRnVYRTg5mBYHtZCiczxteXlDDu4emFXZ16sjgVCoA9xl7bLHicrPkzB0mg/640?wx_fmt=png)

倍压电路可以通过增加级进行扩展，如果忽略二极管的正向电压损耗，输入电压就可以增加N倍。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQZbBgkPZzKHB2hAvQ2JhVqtIuXOH0CEzfUGmvAMGgfvk2Q0nXNNJ7WPjicqMpwOZoGJM1bRd72JbA/640?wx_fmt=png)

**_图5-7：采用电荷泵方法的倍压电路_**

_________€4.___峰值电压检测______

**_图5-8_**显示了一个简单的峰值电压检测器，其中有一个由二极管D1整流的交流电源，C1充电到输入信号的正峰值电压减去VF。该电路用作峰值电压检测器，通过放电电阻R1，C2再次放电，并且不会永远保持在之前施加的最高电压。利用RC时间常数τ=R1×C1时，可以实现C1的放电。选择一个明显高于输入信号中单个振荡持续时间Tin的时间常数，构建AM解调器。输入信号的幅度必须明显大于开关二极管的VF，对于AM解调，载波信号不应低于或接近VF。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQZbBgkPZzKHB2hAvQ2JhVqQVvc62hPibcCKwLqZlsvo4dhHxwzZ5TWPJB6vmWVBibU8lsNU7oIFHIQ/640?wx_fmt=png)

**_图5-8：峰值电压检测器，AM解调器_**

**_图5-8_**所示的简单电路的缺点通过**_图5-9_**所示的更复杂的方法得到了解决，运算放大器的正输入端连接到交流电源。输出端连接到二极管，并从阴极侧直接耦合回负输入端。然后C1被充电到输入信号的正峰值电压。负极性输入电压允许运算放大器限幅在最大负输出电压水平，二极管阻断该电压，因此C1上的电压不会受到限制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQZbBgkPZzKHB2hAvQ2JhVqjhGAoglBeGKh6ao7yGf6IDA3djNAqzpuRFsWj9dZiaoyECnOiaiaKmphg/640?wx_fmt=png)

**_图5-9：精密峰值电压检测器_**