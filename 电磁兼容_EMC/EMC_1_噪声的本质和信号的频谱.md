# EMC-1：噪声的本质和信号的频谱


> 原文地址: [https://mp.weixin.qq.com/s/kAiXkR2LK25A7juemQr2qQ](https://mp.weixin.qq.com/s/kAiXkR2LK25A7juemQr2qQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSgfWB8HTEZWSlLytVhHkTv0XP9WQ8Qh7jttyeSFHCWlibuo0B79y6ia1IiciaoKUJGSJnOWwgB53ylSg/640?wx_fmt=png)

____**★★★**______EMC-1---信号的频谱______**★★★**____

引言：EMC的本质是噪声，而噪声和信号的本质是电磁波，只是因为噪声不可用故称之为噪声，本节是EMC系列的第一节，先来从物理角度了解噪声的本质和干扰的机理。

___€1.频谱的含义___

频谱是将电磁波分解为正弦波分量，并按波长顺序排列的波谱，就是将具有复杂组成的东西分解（频谱分析仪）为单纯成分，并把这些成分按其特征量的大小依序排列（部分不计），横轴作为频率，纵轴作为功率或电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uE59Eia55dY0Nwia9LXFAUs5dEwiaYZjlgia2QrCxkBibXVt9CY8988o4N4A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5ufwGmICFet0GHo92uLRhT7OOiacicVa96cueJNTuPRS6JsjUBLcoIORJw/640?wx_fmt=png)

**_图1-1：频谱的定义_**

从**_图1-1_**可以看到，数字波形是由多种频率叠加而形成的，示波器和频谱仪分别从两个视角获得一个数字波形的不同信息，示波器获得bit信息，频谱仪获得频谱信息或者能量信息。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQRc3UY54sicKesc68qZDYxjPqRia5EibwBVP6hrAn5DFowysMcOXm6qsYmzY9UyX7C3RlIQywT5TF7w/640?wx_fmt=png)

**_图1-2：示波器角度的数字波形_**

在**_图1-2_**表示开关信号的脉冲波形中，包括tw（脉冲宽度）和ts（上升/下降时间）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQRc3UY54sicKesc68qZDYxjkXeJpwNZWGQ4vWqLibX7hh5g0WzG44Fiafuick169jjwmyClpfIdbUtHA/640?wx_fmt=png)

**_图1-3：连续化的频谱图_**

**_图1-3_**是基于傅里叶变换的理论上的脉冲波形频谱，这是一个连续化频谱，振幅随着频率的升高而衰减，衰减斜率随着tw和ts而变化。蓝色线表示脉冲的ts变慢后的频谱变化，斜率变为-40dB/dec 时的1/𝜋ts频率降低（向左偏移），最终结果是其后的振幅减少，即当ts延迟时频谱的振幅衰减，频谱下降。

___€2.影响频谱的因素___

对于信号波形的变化，频谱将以怎样的趋势变化，使用实际的频谱分析仪数据来分析频率等其他参数变化时的频谱变化。这里将通过实际的DC-DC的开关相关的频谱来分析并解决EMC问题时所需要的理论知识。**_图1-4_**中的图形是初始条件下的数据：

振幅=10V，频率=400kHz，Duty=50%，tr/tf=10ns。

中间的图表示n次谐波和振幅（V）的关系，1倍的频率＝基波，400kHz的分量最大，以奇数倍的频率形成频谱。仅产生奇次谐波是Duty为50%（＝1：1）的频谱特征，各分量的大小为基波分量的1/次数，例如3次谐波分量为1/3，n次谐波分量为1/n。

最下面的图是振幅为dBµV的对数曲线图，dBμV是基于以1µV电压为基准的电压比的dB 值（1µV＝0dBµV）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTNp8zxlmrzWGb7b0tMLLzZf1OXJ7eEX0C7kjWRsdYHHp7Y6SRpRz5ITCLLjgqm0ibchNDgsBZBKEw/640?wx_fmt=png)

**_图1-4：初始波形_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTNp8zxlmrzWGb7b0tMLLzZ8WOiawSelKlibiba2lwoEt1fh1TbNQvdCEVuo8YkYJUd07qof6yTFEknA/640?wx_fmt=png)

**_图1-5：将频率提高到2MHz_**

**_图1-5_**是将频率提高到2MHz时的频谱，从频率--振幅（dBµV）关系图可以明确看出，当基波频率增高时，整个频谱会向右（频率高的一侧）偏移。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTNp8zxlmrzWGb7b0tMLLzZLH4L3PsfxIcAwd5wl0wSLRs3EsJvd56RJTZZvnvbykOZrwKCmewZQQ/640?wx_fmt=png)

**_图1-6：tr和tf的速度都减慢为100ns_**

**_图1-6_**是tr和tf的速度都减慢为100ns时的频谱，由于进入-40dB/dec衰减时的频率降低，因此高次谐波的频谱振幅衰减。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTNp8zxlmrzWGb7b0tMLLzZEpEnj4gnIJIdy8dPMYjoBp52XJFg0cvyuxicoibdxVRqQcKnRf5hTzDg/640?wx_fmt=png)

**_图1-7：将Duty从50%变为20%_**

**_图1-7_**是将Duty从50%变为20%时的频谱，由于Duty不是1：1，因此会产生偶次谐波，但峰值基本上没变化，随着脉冲宽度tw变窄，基波频谱的振幅衰减。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTNp8zxlmrzWGb7b0tMLLzZrGf5BtXbqrEGgKwkiaN6qt6q3UfCvDDC0XZhGcgNfgy9v9D3FRfianHw/640?wx_fmt=png)

**_图1-8：仅将tr（上升时间）减慢_**

**_图1-8_**是仅将tr（上升时间）减慢时的频谱，tr相关的高次谐波分量因tr变慢而衰减。即仅上升速度减慢 ⇒ 上升分量相关的高次谐波衰减。总而言之，当基波频率较低且上升/下降较慢时，谐波频谱会衰减，从EMC的角度来看，也就是频谱的振幅较低时更有利。

小结：

高频化--->频谱整体增加  

上升/下降速度减缓--->低频段衰减-40dB/dec  

Duty变更--->发生偶数次高次谐波，但对频谱的峰值无影响，基波下降  

仅上升速度减缓--->上升成分在低频段衰减  

频率越低--->上升/下降越慢，频谱越低。  

___€3.EMC概念定义___

EMC（Electromagnetic Compatibility），电磁兼容性，即不对其它设备产生电磁干扰，并且受到来自其它设备的电磁干扰时，系统运行不受影响，仍保持原有的性能。

EMI（Electromagnetic Interference），电磁干扰，由于IC工作产生噪声EMI，给周边IC和系统带来干扰或者干扰性的电磁波，所以需要设计不产生EMI的电路。

EMS（Electromagnetic Susceptibility），电磁干扰敏感度或电磁敏感性，即使受到EMI影响也不会造成干扰的能力与耐受性，需要设计能承受EMI的可靠性电路。

测试领域里面EMI分为两种，传导噪声（Conducted Emission）和辐射噪声（Radiated Emission）。传导噪声是指经由线体或PCB板布线传导的噪声，辐射噪声是指排放（辐射）到环境中的噪声。对于这些噪声，EMS中分别都有耐受性要求，称为传导抵抗力（Conducted immunity）和辐射抵抗力（Radiated immunity）它们的关系如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSYG45QxbSkr4YV1VqCvbKEQBJj5lOypLwvtYolRYz3Qww7HMVWx1DOZc5zQ7ZiadRiapUyIQF2r6icg/640?wx_fmt=png)

**_图1-9：EMC分支_**

___€4.辐射机理___

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uOiaXyTTW9OpdXorenuiasqjSTdm4UryUI84fqLBngzJLlFLJs4dUtWJw/640?wx_fmt=png)

**_图1-10：交直流对比_**  

处在直流状态的电信号，f=1/T，T足够长，可以理解其基频信号频率为0，那么它的各种奇次偶次谐波也是0，即没有高频信号，只会产生磁通。而处在交流状态的电信号，会产生不断变化的磁场，不断变化的磁场又会产生不断变化的电场，循环这一过程，引入位移电流的概念，就是辐射的核心机理。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uzPwSbRGyDtsdkOomH0kiaP64wpmH7MU0ticWGGs1ajjb2Biba6zfv9ficg/640?wx_fmt=png)

**_图1-11：数字波形高频含量辐射_**

从板级的角度考虑，频率越高的噪声，波长越短，所需的辐射天线越小，就越容易辐射到空气中，这也是高速信号需要屏蔽的根据之一。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5ucBkw5XXNIa5Sl0XQHb1HGDaaMAibOZKAAegrl6jzibkIDYVThZUa5tYQ/640?wx_fmt=png)

**_图1-12：位移电流概念_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uYkXQvPBe38qDAsBhJcsZEgnqyDNrKs5ibGL7koFOiaKjh0zD5aAq4BmQ/640?wx_fmt=png)

**_图1-13：探测辐射的过程_**

对于辐射值的标准，各个领域，各个国家依据的标准都不一样，世界通用标准是CISPR，而日本：VCCI Class、美国：FCC、欧洲：EN，还有就是把CISPR作为基准来自定义设定规定值，各个标准依据电子产品的不同细分为各种子标准。