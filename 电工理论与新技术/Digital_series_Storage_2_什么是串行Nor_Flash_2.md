# Digital series-Storage-2：什么是串行Nor Flash-2


> 原文地址: [https://mp.weixin.qq.com/s/yBf6b9L5f9IKO0Wln-ajqw](https://mp.weixin.qq.com/s/yBf6b9L5f9IKO0Wln-ajqw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjMTkAlm74IqAb8Pvw839zJ9dblhmeXj6QeibibzaygCbDcJsJYnkz7l7AA/640?wx_fmt=png)

____**★★★**__________________Storage-2---串行Nor Flash__________________**★★★**____

____€1.___OctaBus Memory_

_特征属性：_

OctaBus Memory也叫XSPI，Octal Flash，Octal RAM。OctaBus Memory是一个高速，低引脚数的内存类型，利用JEDEC xSPI接口，Octal（xSPI）接口提高了系统性能，简化了设计，并降低了系统成本。Serial Nor Flash的最新八进制系列产品包括：八进制（xSPI）Flash、八进制RAM和八进制MCP。OctaBus Memory将闪存和RAM存储器集成到同一数据I/O总线中，将引脚数量减少到12个。

_结构：_

XSPI接口如**_图2-1_**，**_图2-2_**所示，XSPI向下还可以兼容SPI。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRHg2HtjwOB3vgjWiajPBF0T41PicyymTHlyL0RBGEZ2sjSYg1N5grWbU4rUibHCmXHqiab01XGwtnk8Q/640?wx_fmt=png)

**_图2-1：XSPI接口_**

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBicN5EfJ9eDgJicfDBfeQ8ge7mm23RT5KCod11LOXkhG83OrK6oOF6hAG7pPLYBJD9PYRKVg10ibEA/640?wx_fmt=png)_

**_图2-2：OctaBus Memory内部结构_**

_接口：_

OctaBus Memory内存基于JEDEC xSPI接口和命令协议，提供可扩展的I/O功能，从当前的四路I/O扩展到八路I/O（请注意这里不能和之前的Twin Quad Serial Nor Flash (x8 SPI)弄混，Twin Quad Serial Nor Flash是两片x4堆叠），有效地扩大Serial Nor Flash吞吐量。OctaBus Memory还保留了与普通单I/O Serial Nor Flash兼容的特性，可以以最小的代价维持用户使用Serial Nor Flash的灵活性，该接口提供同时读写功能，允许在写入时从一个内存组进行读访问。

_传输速度和容量：_

SDR模式下，速率为133MHZ，在使用DQS（数据频闪器）的X8双数据速率（DDR）模式下，速率高达200MHz，同时拥有高达400MB/s的读取吞吐量。

Octal（xSPI）闪存提供了需要快速即时启动时间的嵌入式系统所需的性能，8-I/O闪存提供了400MB/s的读取带宽，比四路SPI闪存快4倍多。八进制RAM内存还在节省空间的同时提供400MB/s的读取吞吐量。OctaBus Memory是RAM有限的SOC理想的板载RAM，并为系统提供快速的读写操作。

OctaBus Memory内存为统一的128KB扇区、4KB和32KB子扇区以及256字节的页面。还支持可选的64KB扇区，该类型器件还包括可永久锁定的64字节OTP区域，容量64Mb-2Gb。

## _____€2.____HyperFlash™_

HyperFlash存储器使用了HyperBus低引脚数、高速的接口，并结合了芯片内执行（XIP）功能和数据存储闪存存储器的最佳特性，在拥有大容量、快速编程的数据存储闪存的同时，HyperFlash还能对XIP闪存进行快速的随机访问。

HyperFlash在并行Nor闪存引脚数量的三分之一上提供333MB/s的读取带宽，可提供汽车高级驾驶辅助系统（ADAS）、仪表盘和信息娱乐系统、工厂自动化以及网络路由器和开关中嵌入式系统所需的高速性能。

例如上电后，将存储在Nor Flash中的引导代码快速传送到MCU，MCU快速运行将存储在Nor Flash中的预渲染图像传送到图形MCU，支持高分辨率显示，通过快速传递多个图像来显示复杂的运动和图形，例如数字仪表盘中的转速表指针。

_特征属性：_

与并行Nor相比，12引脚接口降低了BOM成本，低功耗模式下支持深度断电（8uA）。1.8V或3.0V的内核和I/O供电，通过HyperBus™DDR（双数据速率）接口可实现高速的读取吞吐量

_结构：_

**_图2-3_**是HyperFlash结构图，与同样8位的OctaBus Memory相比，HyperFlash不与SPI兼容。

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBicN5EfJ9eDgJicfDBfeQ8gG1f3KibHtRdUxbC8Yw4Osewz27Ist2yUaVzZXwTyBV7zaw6AEWiaMq7w/640?wx_fmt=png)_

**_图2-3：HyperFlash内部结构_**

_接口：_

x8接口，HyperFlash具有一个8位（一个字节）带宽的DDR数据总线，并且只使用了一个字宽（16位数据）的地址边界。执行读取操作时，每一个时钟周期内将传输16位数据（在时钟上下沿各传输8位），写入操作期间，在每一个时钟周期也传输16位数据 。

_传输速度和容量：_

HyperFlash系列产品包括多种容量，覆盖容量：128Mb\-512Mb。x8接口以166MHz DDR运行，提供333MB/s的读取带宽。

_读取过程：_

在每一个时钟周期内，DDR接口协议支持在DQ输入/输出信号传输两个数据字节。HyperFlash的每一个读取或写入访问操作包含一系列的16位宽、一个时钟周期长的数据传输 （位于内部 HyperFlash核心中）以及两个相应的8位宽、半个时钟周期长的数据转换（位于DQ信号上）。所有的数据和指令/地址都是按照DDR方式通过8位数据总线传输的，接收DQ信号上的指令/地址/数据信息时，HyperFlash器件将使用时钟输入信号来捕获信息。读取写入数据选通（RWDS）是HyperFlash器件的输出信号，用于指示存储器中的数据被传输到主机。在读取操作的数据传输阶段，RWDS将参照时钟的上升沿和下降沿。指令/地址/写入数据值的中心同各个时钟沿对齐的，而各个读取数据值同RWDS的转换边沿对齐。

每个随机读取操作都会访问一个32字节长的数据，每一组对齐的数据被称为一页。每页中都包含一对16字节的阵列数据对齐组，该组被称为半页，所有半页都同16字节的地址边界对齐。每个读取操作需要两个时钟周期来定义目标行地址和突发类型，以及等于tACC的初始访问延迟时间。在初始延迟期间，第三个时钟周期指定了目标半页内的开始地址，初始数据值被读取后，在下一个时钟周期内可使用回卷或线性序列读取页中的其它数据。配置为线性突发模式时，当一个页面正向外输出数据时，器件将自动提取MirrorBit闪存存储器阵列中下一页中的数据。通过这种同时进行的突发输出和提取阵列中的数据，可以实现线性突发操作保持数据传输速率可达333MB/s（1个字节（8位数据总线）×2（两个时钟沿上的数据）\*166MHz=333MB/s）。

（传送门：[Digital series-Storage-1：什么是串行Nor Flash？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491526&idx=1&sn=c8fdee50014ddf126a8c95f473032692&chksm=c3355559f442dc4fdf22663fa5b4491616b245cab4a77dcf7571c58e4227562d9c93b9284405&scene=21#wechat_redirect)）