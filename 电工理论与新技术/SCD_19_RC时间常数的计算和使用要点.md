# SCD-19：RC时间常数的计算和使用要点


> 原文地址: [https://mp.weixin.qq.com/s/4PxQjZ8WSsLwigO2l1UwKQ](https://mp.weixin.qq.com/s/4PxQjZ8WSsLwigO2l1UwKQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTrXm2ZARR57P73sf3H94yANYbPTXfjaL2iakUWJLNqP8gJLibdXQE8fvuqUuTbnzHXia9GSNUamSicBQ/640?wx_fmt=png)

_____**★★★**______SCD-19---RC时间常数的使用______**★★★**_____

_撰稿：Timothy  校稿：Timothy_

引言：一个简单的RC电路有一些非常有用的性质，它能提供相当精确可重复的定时功能，并能很好的执行基本的滤波功能。

________________€1.RC时间常数________________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaM3hMlal5368GtHJmJaI4Licias3ciaaDaWLu9Y5f725yZNLLxRhicibMwwQ/640?wx_fmt=png)

**_图19-1：RC充电电路_**

如**_图19-1_**所示的RC串联电路，开关S闭合前处于零初始状态，即Vc=0。在t=0时刻，开关S闭合，电路接入直流电压源V，则：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBatJbVTOEdoic7n1X9xtOsfYEtj5VGY0PWIGAAhmdomnhudfEcCZ3tIYg/640?wx_fmt=png)  

将

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaXtbUv0Z6N1kVQjvMlQ1epjEiaHYgqicUTTy3Xu3ib8kUaN4EzaUThyRAA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaGWu4moNxZNRsyNWv3TUiaUBnNcgwgDoKbTgqW5Dj73PiaMc7DjFOAIkw/640?wx_fmt=png)

代入，得到电路的微分方程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaajaib8sF3tFsl1sE6j7nGYdEAJnJsEU1haaveU5afyKBsEIbBldMqAw/640?wx_fmt=png)  

此方程为一阶线性非齐次方程，方程的解由非齐次方程的特解vc'和对应的齐次方程的通解VC''两个分量组成，即：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBay6GiaL1wLsZNQdicx3sOdx8AsGQnx5EBaLVrPiaiaLIb1kRVDVKHPwruIQ/640?wx_fmt=png)  

特解为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1Iiaw6a2AjsbCBx5IfV6alnpAGzslWVFy0Wy4icsxwesHkfKyicy2jdEicsw/640?wx_fmt=png)

而齐次方程

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBagkLPoouF4P8hsLOGWic1Nc4vvQRtJWu7btTFUu2Iq0d0dia6UyA53Vzw/640?wx_fmt=png)

的通解为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBa5dfNvsovYXRibeaf6pbE1tGpicTHJKLichEmhNkibOpvvPicibtkYg0H6DjQ/640?wx_fmt=png)

其中RC为时间常数ε，所以，代入初始值A=V，得到：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaG149W338NhruIoDIlibJXOCibDYlBzibj7jk5dwL4Ns4EX5hkvC0icYibdw/640?wx_fmt=png)

当t=ε时，电容器充满63%的电荷，电流到达初始值的37%，当t=2ε时，充电曲线到达其值的86%，电流到达初始值的14%，当t=3ε时，电压和电流值分别为95%和5%，当t=4ε时，电压和电流值分别为99%和1%，以上对任何RC电路都是是正确的，且任何RC电路的时间常数值可简化为电阻电容之积。  

设定V=1V，假设一个电路跨接在**_图19-1_**的电容上，在Vc达到0.95V（驱动电压的95%）时接通，要求在施加驱动电压5s后接通这个电路，那么应该如何设计，首先它将在三个时间常数后接通，即5s=3ε，ε=1.67s=RC，因此我们需要选一个RC组合，其乘积等于1.67，例如：（1.7MΩ--1uF）（ 300kΩ--5.6uF）（167kΩ--10uF）。

简单的了解我们需要什么时间常数，然后挑选一个满足该时间常数的RC组合，就可使用RC时间常数制作可靠的定时电路，

________________€2.隐藏RC电路的延时危害________________

**_图19-2_**表明隐藏的RC电路带来的影响也可能有害，假设通过一个50Ω的传输线驱动具有三个IC负载的一个节点，再假设每个IC的输入电容是3pF，传输线和并联输入电容构成了一个RC电路，时间常数等于450ps，那即使信号从一个逻辑状态跳变成另一个，做这样一次可靠转变仅需两个时间常数的时间，它依然接近1ns，这可能会比电路要求所能允许的长。因此时间常数能提供非常有效的定时能力，但它们也能导致信号延迟和波形劣化。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibC3ekice4o5HwlXw1p1IjjBia9trk0XvgJqGtX5PzAYG6icEXHHRRU4ofBw/640?wx_fmt=png)

**_图19-2：寄生RC电路对数字信号的影响_**

这就是为什么USB信号，HDMI信号，MIPI信号等等需要走线短，ESD防护器件寄生电容小，并且信号速率越高，走线要求越短，寄生电容要求越小的原因之一。

________________€3.RC时间常数的使用________________

当然RC电路的时间常数也不仅仅是有危害，也有可以利用的地方，诸如定时，电源树定序等等场景，简单的电路也可以带来可靠的功能实现。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibC9PhEK6m4TgSTFiac4hTpuOk7u9hmwtkBbNhhuL1IKKfpn0sibSbIFybQ/640?wx_fmt=png)

**_图19-3：RC延时使能_**

如**_图19-3_**所示是对一个电源芯片进行可控延时上电，在EN使能引脚增加一个RC电路，产生的额外功耗小到可以不计。例如EN启动电平是3.3V，使能电压是5.5V，想使Vout延迟10ms上电，那么

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTrXm2ZARR57P73sf3H94yAEuOvycvuzGf3ibdcSQ5CGeUJfOz6iayMM18RAN7Vp1U8K8wv4J3q1licA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTrXm2ZARR57P73sf3H94yAzHASfngicqtS8sybOiaQ65poEH0yjbLL6A568GocRcvJuHZDzFEqsd6w/640?wx_fmt=png)

可以取R=1kΩ，C=10uF较为合理。

如**_图19-4_**是使用RC延时对多个电源进行可控定序的使用范例。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSdHCLNNTcTU0noWzy9tiat2RMB9zpveW8Z77OEIAmrGNHJ8wJkXqcj9yO9pIU9iczl35IGC36bpsjg/640?wx_fmt=png)

**_图19-4：RC用于电源树定序_**  

在用于定序启动时，还需要额外关注一个软启动时间（如果有的话），这个时间会叠加在定时之上，因此实际启动延时T为：

**_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFq4yRDcJhspQwBXUMJia22Np2wKQyYgAklclwxHvXnwVJktZS2ZchU0kdzCaEeiaiayycg4OQuFBoA/640?wx_fmt=png)_**

其中Tdelay是外置RC延时，Tss是软启动时间。

________________€4.软启动________________

软启动是以可控的转换速率提高输出电压，防止启动时输出过冲，虽然软启动是DC-DC的一项常规功能，但我们也可以从中看到时间常数所起的作用。软启动时间通常可以通过连接到SS的外部电容器进行编程，如下式所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQwqNaulQQ3MJNJH11KvCKPfld6axEPpvqNutb4JGIzCzwicbLdWuMkJjRGxk8hA20MeXRrkNhL1Zw/640?wx_fmt=png)

其中Css是外部SS电容器，Vref是内部参考电压，Iss是SS充电电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibCqxJaTPu7OMcXIOsjumBWBoVy6HTtwIHtiaYdicB9zERdm3H9XGoRGkPg/640?wx_fmt=png)

**_图19-5：软启动结构_**

如**_图19-5_**所示，SS引脚是软启动定时器设置，可用于通过将外部电容器从SS引脚接地来编程输出电压软启动，内部12.5uA的上拉电流为电容器充电，在SS引脚上产生电压斜坡。当SS引脚电压从0.25V线性上升到F调节电压（1V及以上）时，输出电压平稳上升到其最终电压调节，此外任何UVLO或热关机都会立即将SS引脚拉至接地并停止切换。那么其软启动时间可计算为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQwqNaulQQ3MJNJH11KvCKPXvAiadyFmlf3585eZbzkyOjTTrRvI9m9kNQtEgDicgtcY2icfKvrGp12w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibC3QhiaCUk2FL2JEsCZF8y0jq90NGHAAX5USXTb6hbObjPfl8huheCzTA/640?wx_fmt=png)

**_图19-6：软启动结构_**

从电流的视角来看，软启动电路在软启动时段（tSS）期间将平均电感器电流从0A线性斜坡上升到负载所需大小电流。如**_图19-6_**有的芯片还支持通过将SS连接到VIN，可以选择大约X ms的内部软启动间隔。对于需要较长软启动周期的应用，SS上的外部电容器CSS根据以下公式设置软启动周期：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQwqNaulQQ3MJNJH11KvCKP3D4AFHGOsaLTqOG9ic0vtju22n4s0uArnDHLNRgiaMFkMoJpKfuAXDvA/640?wx_fmt=png)

此式对应VREF=0.6V，Iss=0.75uA。**_图19-7_**是软启动波形示例，其中Tss是从EN使能开始算起，所以和RC延时配合使用时一定要注意。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQwqNaulQQ3MJNJH11KvCKPbb2HEgZOFxHicq7Q4z7bwzWxXz7AvEDZYBudOtkTcohamFWAZ54kWkw/640?wx_fmt=png)

**_图19-7：软启动波形图_**