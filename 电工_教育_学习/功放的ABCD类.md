# 功放的ABCD类

原创 硬件笔记本 2023-08-05 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/knXvHuf3VCCLwG4hPsSxzw](https://mp.weixin.qq.com/s/knXvHuf3VCCLwG4hPsSxzw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**1、纯Class A（甲类）功率放大器**

  

纯甲类功率放大器又称为A类功率放大器（Class A），它是一种完全的线性放大形式的放大器。在纯甲类功率放大器工作时，晶体管的正负通道不论有或没有信号都处于常开状态，这就意味着更多的功率消耗为热量。纯甲类功率放大器在汽车音响的应用中比较少见，像意大利的Sinfoni高品质系列才有这类功率放大器。这是因为纯甲类功率放大器的效率非常低，通常只有20-30%，音响发烧友们对它的声音表现津津乐道。

小信号放大器主要包括：共射极放大器、共基极放大器、共集极放大器，如果这种小信号放大器能够对信号进行完整放大，那就就可以称为ClassA放大器。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/L9GbeyyUot0JYyQdYoWGxxxQ4A6Td3pXJ8jfZWMz7Zge6VMXibibvs489B2z5YrtNqUgMQ9UnnIKsbJmvLzr0aibA/640?wx_fmt=jpeg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

  

A类扩大是音色还原度最高的一种放大方式，同时效率也非常低。

在讯号输入周期都是导通的状态(包含正周波和负周波)，因此即使是没有讯号输入时，功放也是持续在耗电，也因此A类有最好的线性度，而不会产生B类、AB类的交互失真(Crossover Distortion)问题。A类扩大能在放大输入讯号(蓝色)的同时，达到最小失真的输出讯号(绿色) 

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqrSrqCIibVRkTicv27JMUcWznRo0Ty6Xibd8S2bY2KXO7OQspiarUVMejqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

虽然A类能提供最低失真的音色，但它的效率只在15%-30%之间，大部分的电能都化作温度散失了，所以机身温度都很烫，基于散热考虑机器也只能做的很大台又笨重，在高温高电流的环境下放大组件(晶体管or真空管)也时常需要更换。

由于A类放大的声音有非常低的失真度，即便缺点甚多，仍有许多音响发烧友愿意花大钱追求几乎没有失真的音色。

小信号放大器的输入信号幅度很小，而且输出的变化幅度也很有限，如图所示，Ic以及Vce在各自的静态工作点(ICQ、VCEQ)上、下有限的范围内变化，而ClassA放大器不同，如图所示，为了获得最大限度的功率输出，它的Ic以及Vce都都在各自的极限范围内进行变化，对于Ic来说，这个极限范围是0~Ic(sat);对于Vce来说，这个极限范围是0~Vce(cutoff)。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqA8Pias6KbYq2ia9Td2RvaGRQ4ybBibHIGgd8U2bIbo8CMCcY4OYtNSO1g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

小信号放大器与ClassA放大器的AC负载线

ClassA放大器怎样才能获得最大输出信号

从上图的右图可以推断，如果Q点在 AC负载线的中间，则ClassA放大器可以获得最大的输出信号，在理想情况下，Ic可以从静态工作点ICQ变大到其饱和值Ic(sat)处，或变小到截止值0。如果输入信号的变化幅度超过一定范围，使得放大器进入饱和或者截止状态，则会出现下图所示的失真。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqYMe0Tycg9O3jSx4S5N8RB3ZcvMk3YvuDnaEJTypP7zibdgx1dhWqUXg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

如果Q点偏离中央而趋向饱和区或者截止区，则会出现下图所示的饱和失真或截止失真——Q点偏饱和区时为饱和失真，Q点偏向截止区的为截止失真。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqEvzU7ibj4X8AnpHrYkQiaczTbYNfozfFj9axiaJuf85R4PU8uRP7GBeFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

功率放大器与小信号放大器一样，在对信号放大的同时需保证输出与输入的一致性。所以，把Q点放到AC负载线中央对于ClassA放大器来说可以获得最大的输出信号且避免失真。

如图所示是其中一种ClassA放大器：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqa0HxVVdACyLFiawSiaNcCIlHlUgVXfXgt445U6ibZTHhRUVyWP9HyIDDw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**2、Class B（乙类）功率放大器**

  

乙类功率放大器，也称为B类功率放大器（Class B），它也被称为线性放大器，但是它的工作原理与纯甲类功率放大器完全不同。B类功放在工作时，晶体管的正负通道通常是处于关闭的状态除非有信号输入，也就是说，在正相的信号过来时只有正相通道工作，而负相通道关闭，两个通道绝不会同时工作，因此在没有信号的部分，完全没有功率损失。但是在正负通道开启关闭的时候，常常会产生跨越失真，特别是在低电平的情况下，所以B类功率放大器不是真正意义上的高保真功率放大器。在实际的应用中，其实早期许多的汽车音响功放都是B类功放，因为它的效率比较高。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/L9GbeyyUot0JYyQdYoWGxxxQ4A6Td3pXw7UuwMOBkdvHFYFa81TEaqRVfS9rooVhv9PYaJWtTg8vDgO2hWWmhw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

因为A类扩大实在是很没效率，B类扩大就采用不同的设计方式，分别有两个输出放大器来处理音频讯号的正波和负波，再由晶体整合输出，处理正波的在工作时，负责负波的就停止，反之亦然。因此B类放大能够有接近80%的转换效率。 

  

但B类放大有一个主要的问题是在两个输出放大器一开一关之间，会导致正负波交点的线性不连续，也就是前面提到的交越失真(Crossover Distortion)，使声音较为粗糙。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeq24r1eFnPKU2PafL4dy3uP6rf41qlpDScf6xg73ond1Y9dRehickDVqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

纯B类功放较少，因为在讯号非常低时失真十分严重，所以交越失真令声音变得粗糙。B类功放的效率平均约为75%，产生的热量较A类机低，容许使用较小的散热器。乙类功放通常的工作方式分为OCL和BTL，BTL可以提供更大的功率，目前绝大部分的功率集成电路都可以用两块组成BTL电路。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqYtvLMJFJYnJsH0uv7kzAbfJq5LetO9LE0hARPlgn9IRTeAU5hslrPA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

　　![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqrnib45hAtA0efA16ZCL6teQfLicdG0juiaJkwxfQThI2OSNcjkNveWXGQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

B类放大器的晶体管只在半个周期或者说正弦波的180度内导通，看上图，这样的放大器看似没有什么用处，因为它导致了信号的失真。不过，如果你将两个晶体管结合起来使用，一个用来放大正半周，另一个用来放大负半周，然后再将两者组合起来，那个整个波形就都得到了放大。这样的放大器称作推挽式放大器。

像B类放大器这种设计的好处是电路的效率更高，不过此类放大器在正弦波过零点的附近会导致信号的交越失真，这是由于晶体管不可能精确地在零点位置上导通和关闭。为了去掉交越失真，人们设计了AB类放大器，它容许晶体管在输入正弦波信号高于180度导通，它容许小电流不间断地流动，其结果是失真基本消除但效率较低。

  

  

**3、Class AB（甲乙类)功率放大器**

  

甲乙类功率放大器也称为AB类功率放大器（Class AB），它是兼容A类与B类功放的优势的一种设计。当没有信号或信号非常小时，晶体管的正负通道都常开，这时功率有所损耗，但没有A类功放功率损耗严重。当信号是正相时，负相通道在信号变强前还是常开的，但信号转强则负通道关闭。当信号是负相时，正负通道的工作刚好相反。AB类功率放大器的缺陷在于会产生交越失真，但是相对于它的效率比以及保真度而言，都优于A类和B类功放，AB类功放也是目前汽车音响中应用最为广泛的设计。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/L9GbeyyUot0JYyQdYoWGxxxQ4A6Td3pXzWQAt5hnIk5pF7y2Qv7fxmvj9vBCLwlYk3BtqQHvrElDib2uYMD9KFQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

和B类放大一样，AB类放大也有两个输出放大器分别处理正波和负波，不同的是输出放大器导通的时间大于B类的半个周期，在音量小时用A类的放大方式，音量大时使用B类的放大方式，因此能够有更佳的线性度，让交越失真(Crossover Distortion)的程度小于B类。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeq7qYXUBp1yYLlsjv3uibiaByadHKhibXLDEyaqoibBNn7ibFDibMRC1wVpwyQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

设计具有高效率和低失真的放大器的最佳方法就是AB类放大器，它是B类配置和A类配置的结合，从而产生了AB类放大器电路。因此该放大电路的输出级结合了A类和B类放大器的优点，也减少了失真和低效率的问题。

AB类放大器电路设计考虑了两个晶体管T1和T2。晶体管T1为NPN型，晶体管T2为PNP型。两个正向偏置二极管D1和D2串联连接，以控制VBE(发射极-基极电压)由于温度变化引起的变化，如下面电路图所示。电阻R1与D1串联，电阻R2与D2串联。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqtA3xZZq9wJ1FymrjtZKfgLrhUAFEMicfaXv5fvR268QsI5WgypTvtvg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

普通机10瓦的AB类功放大约在5瓦以内用A类工作，由于聆听音乐时所需要的功率只有几瓦，因此AB类功放在大部分时间是用A类功放工作模式，只在出现音乐瞬态强音时才转为B类。这种设计可以获得优良的音质并提高效率减少热量，是一种颇为合乎逻辑的设计。有些AB类功放将偏流调得甚高，令其在更宽的功率范围内以A类工作，使声音接近纯A类机，但产生的热量亦相对增加。

  

  

**4、ClassC(丙类)功放**

  

其实ClassC是工作在失真状态的！丙类早期是用于射频功率放大的~因为调频类射频输出是可以使用的，通过调节频率来载波，所有信号即使是失真，但是并不影响其频率~但是近期有部分发烧友，因为它的高效率，也有在研究把它应用于音频的方向。但是最近比较流行的D类效率也很高，还有T类功放。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/L9GbeyyUot0JYyQdYoWGxxxQ4A6Td3pXCwTekp6eTMLgtS87SEicSoSE611OblLxB0kCMXUkticGsbUWu3SrSbKA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqicib0kH6WVNg2GWHnmLKJPgRVStbX8QFD8OfRqEVhYz2Akqw3akybxicg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

C类放大器用于射频信号，且通常是功率放大器。它们只容许晶体管在输入正弦波信号的不到180度内导通，通常在90度到150度的范围。它产生的失真极大，然而由于这种放大器的输出级是由电感器和电容器构成的LC调谐电路，它谐振在工作频率上，因而可以消除失真。这类放大器具有极高的效率。

在C类放大器中，MOS管起着开关的作用，由输入信号来开通和关断，如图所示，当MOS管导通时，电容会充电到直流电源的电压，与此同时，电流流过电感，在其周围建立一个磁场。当晶体管关断时，电感和电容开始交换能量，并在这个LC电路中建立起一个频率为谐振频率的振荡。这就是所谓的储能电路，于是储存在储能电路中的能量产生出一个放大的正弦波输出。

换一种方式来看，晶体管开关使输入失真，产生的脉冲波形富含谐波，但储能电路起到了带通滤波器的作用，它只让基波通过，而谐波被滤掉了。

  

  

**5、ClassD(D类)功率放大器**

  

D类放大器与上述A，B或AB类放大器不同，其工作原理基于开关晶体管，可在极短的时间内完全导通或完全截止。两个晶体管不会在同一时刻导通，因此产生的热量很少。这种类型的放大器效率极高（90%左右），在理想情况下可达100%，而相比之下AB类放大器仅能达到78.5%。不过另一方面，开关工作模式也增加了输出信号的失真。D类放大器的电路共分为三级：输入开关级、功率放大级以及输出滤波级。D类放大器工作在开关状态下可以采用脉宽调制（PWM）模式。利用PWM能将音频输入信号转换为高频开关信号，通过一个比较器将音频信号与高频三角波进行比较，当反相端电压高于同相端电压时，输出为低电平；当反相端电压低于同相端电压时，输出为高电平。

D类功放的运作原理比较特别一些，使用从模拟波形讯号和开关式电源快速导通和关闭的高频三角波形进行电压的比较，透过两个波形的交点，可以取得用宽窄表示的脉波讯号Pulse Width Modulation(PWM)，这属于一种数字采样。这个高振幅的输出通过低通滤波器(LowPass Filter)进行把三角波的高频滤掉，变回能推动喇叭单体的模拟讯号。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqMI8BBvJC7TXMJXbMK1HRSo0yTW3zRcsddTEcOFtY2xiaVWFAVrQSPVw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

采样三角波(红色)和讯源波形(蓝色)的交点，转换成宽窄不一的矩形脉冲波信号。

D类的优点在于有非常高的效率(约90%)，高效率也意味着不会有过多的散热需求，机身也能做的更轻巧。虽然早期的D类声音表现较差，但技术的进步也让他的音色越来越优异。D类功放常用于耳机扩大器、地板型音箱头等便携型的产品。

　　![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeqgEmPIgl2GfEaZW8IjcyU4SGCepAibo4R56vqTiaU96HHgZYlVdMsdG7g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

D类放大器是一种特殊的放大器，准确的来说它不是一种真正的线性放大器，它是由晶体管开关组成的。如上图所示，这种放大器对输入的模拟信号进行斩波，得到不同宽度的高频脉冲，这个过程叫做PWM脉宽调制。

要放大的正弦波音频信号同一个高频三角波一起，被送到比较器的输入端，当三角波和正弦波值相等时，比较器的输出就会发生切换，由此产生的PWM信号再被反馈到MOS管开关，以使信号更大。然后，这个高振幅的输出通过一个电容和电感构成的低通滤波器进行滤波，变回模拟信号。

大多数D类放大器是音频放大器，它们的负载是喇叭。在功率低于几瓦的时候，所有电路都是做成集成电路的，而对于大功率的时候，MOS管较大，需要做成插件的形式。

此类放大器的最大优点在于，同样的输出功率下，它们更为高效。AB类的效率可能只有百分之二十到三十，而D类放大器可以超过百分之九十。这意味着此类放大器体积较小，耗电更少，发热较少。并且非常适合于便携式设备，如手机和MP3等。

D 类放大器是A、B、AB、C 和 D 段中功率效率最高的放大器类别。它具有较小的散热量，因此需要较小的散热器。该电路需要各种开关元件，例如具有低导通电阻的 MOSFET。

它是数字音频播放器或控制电机中广泛使用的拓扑。但我们应该记住，它不是数字转换器。尽管对于更高的频率，D 类放大器并不是一个完美的选择，因为它在少数情况下具有带宽限制，具体取决于低通滤波器和转换器模块的功能。

  

**T类功放**  

通过微机和I2C总线的控制，它实现对音量、音色、灵敏度、高音、低音、平衡音的自动调节，实现了智能化的“数字功率放大器”。  

1、Tripath公司发明了一种称作数码功率放大器处理器“Digital Power Processing （DPP）”的数字功率技术，它是T类功率放大器的核心。它把通信技术中处理小信号的适应算法及预测算法用到这里。输入的音频信号和进入扬声器的电流经过DPP数字处理后，用于控制功率晶体管的导通关闭。从而使音质达到高保真线性放大。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ewiaKibzhXCHPCzgaL1IuiazuQNDfQukAeq6F4icDgdX5LOEQBWn4gLnibSSPiczh4Giacbb293dNiazbSgdVzJEPib9Wiaw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "D类功放跟T类功放的区别是什么 如何区分")  
T类功放电路板

2、T类功率放大器的动态范围更宽，频率响应平坦。DDP的出现，把数字时代的功率放大器推到一个新的高度。在高保真方面，线性度与传统AB类功放相比有过之而无不及。

3、它的功率晶体管的切换频率不是固定的，无用分量的功率谱并不是集中在载频两侧狭窄的频带内，而是散布在很宽的频带上。

**E类、F类、G类、H类**

除了传统功放，还有几类，分别是E类、F类、G类、H类。

E类放大器是一种采用开关拓扑结构、工作在射频的高效功率放大器。单极开关元件和调谐电抗网络是与 E 类放大器一起使用的主要组件。

F类是谐波方面的高阻抗放大器。它可以使用方波或正弦波驱动。对于正弦波输入，该放大器可以使用电感器进行调谐，并可用于增加增益。

G 类使用轨开关来降低功耗并提高效率性能。而H类是G类的进一步改进版。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。