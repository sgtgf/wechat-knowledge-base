# Inductor-1：电感器的模型和参数


> 原文地址: [https://mp.weixin.qq.com/s/VxMq8TQsLrzahzlmeDJung](https://mp.weixin.qq.com/s/VxMq8TQsLrzahzlmeDJung)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTEIVMoucWHdVFmVuWfkUA0LqibtZw1aZyNaWCVFiag8rF7m9YgjakDHJib4Dia2EwYapfbhibIF4TjawA/640?wx_fmt=png)

_**_★★★_**_Inductor-1---电感的模型参数_**_★★★_**_

引言：电感器是与电阻R和电容器C并列的重要的被动元器件，有时也将其称作线圈。通常，线圈是指呈环形的导线绕组，电路中的线圈是指电感器。电感器的符号通常使用“L”来表示。此举，是为了纪念物理学家俄国物理学家海因里希·楞次(Heinrich Lenz)。电感器的基本结构为将导线缠绕成线圈状的，能够将电能转换成磁能并蓄积在电感器内部。被蓄积的磁能量多少由电感器的电感值来决定，电感值的单位为亨利(H)。

_€1.电感的等效模型_

理想的电感器，完全不含电感以外的成分，没有能量损耗。但实际的电感器上除了电感以外还包含有电阻成分（直流电阻：DCR）和静电电容（分布电容：Cp），如**_图1-1_**模型所示。电阻是绕组和磁芯具有的电阻成分，静电电容主要是绕组的线间电容。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1teGEZrtKPtQvkA5qdromOROszaezDSFQ3VcnWYLZeov7YjllrbYkYA/640?wx_fmt=png)

_**图1-1：理想电感和等效电感模型**_

_€2.电感的自共振特性_

自共振，电感具有自共振的现象非常常见，因为从上述模型（_**图1-1**_）可以看到电感模型近似于一个并联RLC，对于并联RLC，一个重要的特性是阻抗。简单地说，阻抗即为交流电路中的电压与电流之比，相当于直流电路中的电阻。符号使用Z，单位与电阻相同，使用Ω。电感器的阻抗Z由下面的计算过程导出：

电感部分会产生感抗：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSQrOJJ7qG9QtG7WecjdQPfjBibG7NPPJNy5IVDsOztmbQ4eOrejbdyCQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

寄生电容Cp会产生容抗：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSud48TYoNSI15zj9QlJwUK3aDUibQrc7r2XnXhHHosLf6Uibuu9Dhux1A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

感抗和容抗相加：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQu2HJNcBZDHM0p525eJkIsZeFsmptXDoMHd1k4z2vPjuKfkXmSB6tHA/640?wx_fmt=png)

整理上式变为下式：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQdBtEicNBVjx7t3DEdhNicicrzPqp3vDKdSAvjGH4rYM8INkBKVK6UBGOQ/640?wx_fmt=png)

感容抗加上寄生电阻DCR合并为阻抗Z：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQUictzm9I9TG4UsWs0nXQZlvGs6WWRhpIibBs7UUicdlmA8RYSDMt3scNg/640?wx_fmt=png)

代入频率参数为：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQsjnKr6FlgMl478WxSAgStTrbl1cxG4HwoGblrzLmvrZ8TDzCQtWM1w/640?wx_fmt=png)

推导出：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQJtR5J6yETXUKicibVZRiaOLAv41aicuO3MgCXnNEyibP4DuhZTCHMSW0ic9g/640?wx_fmt=png)

其中：

Z：阻抗（Ω）  

R：直流电阻成分DCR（Ω）

j：虚数  

ω：ω=2πf

f：频率（HZ）  

L：电感（H）  

C：杂散电容Cp（F）

根据上述公式拟绘出理想的电感器与实际的电感器相对于频率的阻抗特性示意**_图1-2_**。理想的电感器，阻抗会随着频率的升高而呈线性增加。但实际的电感器则会因分布电容而产生自共振现象，在更高的频率下阻抗下降，不再作为本来的电感器发挥作用。此外，还因电阻成分或阻抗的下降而产生损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D101bxSlNpAZiczy0d4aVRoGa25dnwIZ1XUCc9xBDgbFoetZxRtAGrgfA/640?wx_fmt=png)

_**图1-2：实际电感阻抗曲线**_

并且从式7可以看出，任何数除以0都是无穷大，对应此时f处的阻抗为无穷大，正好对应曲线**_图1-2_**处的尖峰阻抗点，此点即为共振点。回顾[Capacitor-1：电容的模型和参数](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486273&idx=1&sn=3a31c818b2bbae0437617c9a183b102d&chksm=c33541def442c8c8843e885f57717d52d585e494d2edf3213082703f9e858ed06c168f3e6c9d&scene=21#wechat_redirect)由此得出：电容的自谐振点阻抗最低，而电感的自共振点阻抗最高。

_€3.电感的工作原理_

电感器基本工作原理如下：

(1) 当线圈中有电流通过时，线圈的周围就会产生磁场。当线圈中电流发生变化时，其周围的磁场也产生相应的变化。

(2) 将电能转变为磁能并蓄积起来。

(3) 直流会流过，但交流不易流过，频率越高越不易流过。

(1)和(2)是基于电感器的电磁感应的特性。(3)是电感器“阻交流，通直流”的特性。这里就如何利用这些特性，列出各自的具体例子。

例一：当线圈中有电流通过时，线圈的周围就会产生磁场。当线圈中电流发生变化时，其周围的磁场也产生相应的变化。⇒变压器的原理，**_图1-3_**一次侧和二次侧具有两个绕组的构造中，可以认为与变压器一样。如果让交流电流向一次侧绕组，变压器铁芯产生交变磁场，在该磁场的作用下，次级线圈就产生感应电动势。这是因为电磁感应而引起的，若是变压器时则称之为互感。通过变压器的线圈的匝数比等于电压比，将一次侧绕组和二次侧绕组转换成任意的电压。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1kylELHWfbZ5QJfhVwQz9KW94cHULRPQBKjIIeSqdWRf2QzjJvnAlMA/640?wx_fmt=png)

_**图1-3：变压器模型**_

例二：根据楞次定律，将电能转换为磁能并蓄积起来⇒扼流圈的原理，这里列出的是DC/DC转换器的电感器示例（[DC-DC-2：降压型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485606&idx=1&sn=f725f35be77cc8999ac79e37bbe24b3f&chksm=c3354239f442cb2f0333a6b7caf7036d62f1b8091d16ed9b87161a61263f7a7fa0306f86cad0&scene=21#wechat_redirect)；[DC-DC-3：升压型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485610&idx=1&sn=1b5c384bbbc1191f9d32d5320e72a5a9&chksm=c3354235f442cb236b741c581cf7ad613115cfd919af3760d1d01a13520c07d8590dc57223f7&scene=21#wechat_redirect)）。如果将开关置于ON而让电流流向电感器，就会产生磁场，电感器上就会以磁能的形式将能量蓄积起来。如果将开关置于OFF而停止流向电感器的电流，之前被蓄积起来的磁能就会释放（磁场发生变化），电流就会流过。这也是因为电磁感应而引起的，若是以单独的绕组构成的电感器时则称之为自感，不带隔离的DC-DC器件基本都是使用自感型电感器。

例三：直流会流过，但交流不易流过，频率越高越不易流过⇒滤波器的作用，可通过借助阻抗因频率而发生变化，利用交流不易流过的特性，**_如图1-4_**与电容器组合来构成低通滤波器和高通滤波器等，关于阻抗的特性将在后面描述。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1ZNnImo4Pjia9LibfpxCW8olnTkyqiaviaJpMtyZB7H2wQsJNwicGWvUBic5g/640?wx_fmt=png)

_**图1-4：电感与电容组成的简易无源滤波器**_

_€4.电感与电容的比较_

根据上述说明，将电感器的特点与电容器进行对比而归纳成下表。如**_表1-1_**中所示，电感器具有与电容器正好相反特性。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQQ8FhIZanTG6qMNmjKhWhnyUwcFhH7SlpjouoAjHDuELqubnnFmic1Kg/640?wx_fmt=png)

_**表1-1：电感和电容比较**_