# DC-DC-15：一文教你如何计算DC-DC的电感值


> 原文地址: [https://mp.weixin.qq.com/s/q1UM5mHE3PzWGpgFYtQcvg](https://mp.weixin.qq.com/s/q1UM5mHE3PzWGpgFYtQcvg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBVUj9TLUl4bd5M9MuZ02tJ3aubnroJia2DUvfg8iciaFE7tT5Pw94lTLbQ/640?wx_fmt=png)

____**★★★**_____DC-DC-15---计算DC-DC的电感值_____**★★★**____

引言：DC-DC的电感值通常我们很少计算，会直接选择手册里面推荐的值，这在通常场景下快速展开设计和选型没有问题，但是当有特别的电源需求时，就需要自己手动计算电感并选型，才能满足我们的设计指标，本节以降压DC-DC为例讲解如何计算并选择电感。

_________€1.降压DC-DC的运转环路_________

__________![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfB7V2xMBSicbWCxD6PyZEcHK5IhGMcE0AFXWia1a4P703rX7VYJt3fs26g/640?wx_fmt=png)__________

**_图15-1：Q1导通时的电流环路_**

如**_图15-1_**是在降压型DC-DC中，当开关器件Q1导通时，电流从Vin通过电感L给输出平滑电容Cout充电，并提供输出电流Iout。此时电感L上流过的电流会产生磁场，以此将电能变换成磁能并储存起来。![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBBtIwowJZVialnniakTvUjaicrbaG2EcseZCQNJsUZcllVNrcYUicfERo7g/640?wx_fmt=png)

**_图15-2：Q2关断时的电流环路_**

如**_图15-2_**，当开关器件Q1关断时，续流二极管Q2导通，电感L里储存的能量向输出侧释放。在Q1导通阶段Cout已经储满电量，Q刚进入关断时，电感L反向电动势维持输出电流Iout，而后电感能量减弱，Cout就会开始参与放电维持Iout，注意看电容蓝色电流虚线。

________€2.电感的电流波形________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBmsZcZr8ldHRoaV1fUxp1zGEG8WH9XmL3znEKqNsqIHr7h85ibLWlzuQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBnwmwlMrNLIL5FTia7xrrnj1DHkVsfo7u9ySQApfptEO395MF1QR0CkA/640?wx_fmt=png)

________![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBMJQWbcyH7Iy7dQPib8fOLATCYHKmU452e63qOSf55NZoMzHEdbc7CUA/640?wx_fmt=png)________

**_图15-3：流经电感L的电流波形_**

如**_图15-3_**是流经电感L的电流波形，Iout是电感电流的平均值。**_图15-1_**里开关器件Q1导通时电感L流过的电流，Q1导通ON的时间Ton，电感L上施加的电压VL(ON)用下式来表示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5QuJLbmoJGz0WRhZSaHOOHF5JaQN59XU1Kgv9mlO5QdG3hMgehWBpnw/640?wx_fmt=png)

其中VIN：输入电压；VSW：Q1导通时的压降；VOUT：输出电压

本身具有电感成分的电感L的电压VL和电流IL的关系用下式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5sialtzKN5gNFZTfQgkMGDxw6oZog7pyM5CoqLibicRvtKDLscOJspVialg/640?wx_fmt=png)

由公式(2)可以判断出给电感施加一定的电压，电压和反向电流会按照V/L的斜率增加，ILT是开关器件Q1在导通之前瞬间的电流，ILP是开关器件Q1在关断之前瞬间的电流。Ton时间段中电感流过的电流变化量可以根据公式(1)和公式(2)表示为下面公式。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5u7mkAuyqXXiat09KF6wNiaIzSWA6p8IbwfJMDNwdl7WhQqvfhstqqicEA/640?wx_fmt=png)

接着我们来求开关器件Q1在OFF时电感L流过的电流，Q1在OFF时，电感L上应加的电压VL(OFF)根据**_图15-2_**可以表示为下面公式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5icHSAjNONS0HSsqILCeevnxP0A0OCCib2jUib425RumXY6zLIG3EpCqXA/640?wx_fmt=png)

其中VD：Q2的正向压降；VOUT：输出电压

通过公式(2)和公式(4)，可以计算OFF时器件电感L的电流变化量

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic59PzC3ukKCgQT3ibLvhmBe8efLRDzugWyBiblG029znqEvDpDaJYUpicOQ/640?wx_fmt=png)

因为电感L流过电流的电荷量与输出电流的电荷量基本相等（伏秒定律），所以下面公式成立：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5xHwiaLKicUrvEQBFMzUY2GkPtN7z5uiaWaCPXfV133gNRDIRwHw42yEWw/640?wx_fmt=png)

用公式(3)和公式(6)可以求出ON时器件的ILP：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic59E6V5PMXhfe1GEa3KTRNwFrKibqyfzEU2PichsyXUkcBQcL57NyGd0Pw/640?wx_fmt=png)

用公式(5)和公式(6)可以求出OFF时器件的ILP，下面公式成立：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5MRrQFA3PyhU8eZLTzOY9gzLdKdY9ibk4iagHpxBD1LDBUOIuYWA3p2QQ/640?wx_fmt=png)

________€3.On duty的计算________

On Duty是相对于开关振荡周期Tsw，开关器件的导通时间的比率。用下面公式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5zvTZEXic90FluyI3Sp5zhrbHrx7ic3ZAL5icMoIClHibFsic2xF4bpZxc5Q/640?wx_fmt=png)

从公式(7)、(8)、(9)可以求出D，如下面公式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5aF6PT2yP7z7WBssIYamDXMHicjq3LkV7Adm11bqoGQ2Xep4eDmanMfg/640?wx_fmt=png)

对于公式(10)，如果忽略开关器件Q1的压降VSW和二极管Q2的压降，可以得到On Duty由输入电压和输出电压的比来决定：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5rBlMMuhQpQnPzLmicl0AA62zUgBZBd3fNlBOZTbpUxedtKicZ6k0CEJA/640?wx_fmt=png)

________€4________________.线圈电流的最大值________

由公式(9)和公式(10)可以算出Ton如下式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5llr00oibU9A7cWkiboFDyiaNa13ibrFk7QLhv4goWJ5foiaj02FEE3CnFCA/640?wx_fmt=png)

把公式(12)代入到公式(7)，可以得到电感L的电流最大值ILP如下式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5wfIh04HnAH2ENf3HIH0X2RIOI3KiaJS0Nsv3EGnS9WPZWia28OyKmwWw/640?wx_fmt=png)

把公式(13)代入到公式(6)，可以得到电感L的电流最小值ILT如下式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR6ocDwfiaGGfxI8VOsYd0yfyVVicOna2NvhsDuiahziaduYSWu0V5kIrGibeaJ8yCsVRPPYNeficr3k97w/640?wx_fmt=png)

电流的变化量 (ILP－ILT) 如下式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5gyEPqUDKcA58USdP8g3LN3trzgJia26Kn7EIdbQFzs462d35u7LibrzQ/640?wx_fmt=png)

由公式(13)和公式(15)可以推出最大电流和电流变化量随着电感L的增大、开关频率提高，电流值会减小。

________€5.电感值的计算________

流过电感L电流的变化量 (ILP－ILT) 和输出电流Iout的比是电流纹波比R

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5KEAoJHn4CyY5zEl7eTDUcbeP9EPK3BJ4uRAdiab6fwibAyod90ZSYBbw/640?wx_fmt=png)

把公式(15)代入到公式(16)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5pg49mia7Mic01lbfBH6dcPn4xLfyhibVt1ibxfNunlSHicBu3J95FiaBicIMA/640?wx_fmt=png)

由公式(17)求出的电感L值的公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5kGcOpwpz7fwWr7kzmaccKia20Hqh0oypkcWQKb9MdrfDof53PuOCawA/640?wx_fmt=png)

当输出电压VOUT很高的时候，公式可以简化如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5H7DicI6UicFayEbpicnZBJFmhR0GC1NlfOLDhKJH0pEehSyOyTFZYzkYw/640?wx_fmt=png)

要缩小R的话，增大电感，抑制ΔIL就可以了，但是电感器变大，变得不实用，所以降压型转换器通常设定在0.2～0.5的范围内。

________€6.线圈能流过的最大电流________

电感能流过的最大电流可以用下式求得：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5qmUNYlic3BuliaFEicDticOVotFeLkghgbZ1McAz8cbia1oT3NovRRb3LCA/640?wx_fmt=png)

电感流过的电流是输出电流+纹波电流。输出短路等故障发生时，负载过渡状态中，没有软启动功能的IC在电源上升时，有时电感电流会超过上述计算的最大电流。在过渡状态下，电感电流可能会增加到IC的开关电流限制值。因此，最安全的方法不是按照大于电感电流最大值选择电感，而是选择额定饱和电流大于开关电流限制值的电感。

________€7.线圈流过的有效电流________

三角波的有效值如下式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5JnwBeekVyqGuo6P4BNtG1cV7rm3opL1D9kCznzmC4GOwoicbplia16wg/640?wx_fmt=png)

把公式(13)和公式(14)代入公式(20)可以得到下列公式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5WY9uLMnnSCkD7zm9lv44UibwPcjhT7PBw3TWluPcjicIhNGJ9E9ibySJw/640?wx_fmt=png)

________€8.电感计算实例________

首先列出降压型转换器的动作条件

\- 输入电压：VIN=12V

\- 输出电压：VOUT=3.3V

\- 输出电流：Iout=2A

\- 输出电流纹波比：R=0.3

\- 开关器件 Q1 导通时的压降：VSW=0.30

\- 续流二极管Q2的正向压降：VD=0.26，同步整流的时候，按照下管开关器件Q2在导通时的压降进行计算。

\- 开关频率：fsw=380kHz

代入公式(18-1)和公式(18-2)，求电感的感量，由公式(18-1)得：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic512Mb6hDbdwOBfv8HbyicsMY260CuTyJDMBjqlLn0ibLAytH4FOoZ6R1Q/640?wx_fmt=png)

由公式(18-2)得：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic57aqIT3sQ76SmRTiahcXibKl9tCvQeQAG5KOsPLFc0aicDHyicDtrELyI2w/640?wx_fmt=png)

由公式(19)计算电感的最大电流：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5HwHIxodYwaIX24y1kaOM3kPr8PMsY6pMO8ttPzic0SRfz78E4M5Nueg/640?wx_fmt=png)

由公式(20)计算电感的额定有效电流：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic58C3NuUPaK4TLxg7reHHKFJCeUpo3sLp9Q6Al36XIgDjMGqhz1icY9dw/640?wx_fmt=png)

在设计的时候，选择满足计算值的电感，选择最接近的标准值10µH。选择的电感值和计算值有差异的时候，用公式(17)计算电流纹波值R，把这个值代入公式（19），再次计算线圈的最大电流：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic59uV6gZGUzCCdbIo7fIPPDBLx5r7MDfVheoKnyy8ibVMckiartgZG7Qog/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5b9aR6GF9BgqLSRU97yHyGWleicxlbMibicaVtS9N01iauKrpljEldKOfHA/640?wx_fmt=png)