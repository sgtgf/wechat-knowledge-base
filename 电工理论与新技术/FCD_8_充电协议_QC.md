# FCD-8：充电协议-QC


> 原文地址: [https://mp.weixin.qq.com/s/TqqQBpcDaqCXqNAiGvgEIw](https://mp.weixin.qq.com/s/TqqQBpcDaqCXqNAiGvgEIw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQcFTDmXySWjgRxAzPLWUNticwzZmUftdKmrwPzCcvqXI3y1LjwxR3X7ZzH9MU91zrnZkpPRftGLcA/640?wx_fmt=png)

________**★★★**______________Charge-3---充电协议______________**★★★**________

引言：虽然QC充电协议基本只在高通系产品中使用，但是消费电子高通占据了很大一部分份额，所以了解QC快充协议的基本原理尤其必要性。本节主要简述QC2.0到QC4.0快充协议的演进。

______________________€1.QC2.0______________________

QC2.0就是Quick Charge 2.0技术，是高通公司发布的快充技术2.0版本，QC2.0技术在2013年高通推出骁龙800的时候就已经集成快充方案。有快充的充电器支持QC2.0协议的手机等移动设备进行快速充电。

基于QC2.0协议的充电器可以输出5V、9V、12V、20V四组电压，功率最高可达60W，而且有两个标准：ClassA和ClassB。ClassA标准的QC2.0协议支持5V、9V、12V三组电压，用于智能手机、平板电脑、移动路由器、数码相机等。ClassB标准的QC2.0协议支持5V、9V、12V、20V四组电压输出，用于超薄笔记本等。由于20V不常用，现在市面的充电器、移动电源都是以ClassA标准为主的。

QC2.0工作原理就是由设备（比如支持快充的手机）通过USB数据通讯口D+/D-输出电压信号给充电器，所以QC2.0向后兼容BC1.2检测，充电器内置USB输入解码芯片，然后充电器会输出目标电压。QC2.0是在充电电流限额的情况下来增加输出电压，提高充电功率。

分别使用\[1\] QC 2.0 USB适配器（9 V，2 A）、\[2\] USB适配器（5 V，2 A）和\[3\] USB适配器（5 V，1 A）对3300mAh电池进行充电测试结果如**_图6-1_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQQ1q5SYUDt0IcDcd4aiaVazrQKqK0yNzYKYJy0ibUuqNXwuZfSYf0vBSW1tQSRB6QtxtplV2s6CRzw/640?wx_fmt=png)

**_图6-1：充电速率比对_**

比如说一个普通手机是5V1A充电，而如果支持快充，就可以提高到9V1A或12V1A，这样充电功率变大了，充电就快了。不过需要注意的是，充电器本身的厂家设计时输出功率是要大于或等于12W，不然是不可能达到12V1A的。而当支持快充协议的设备用快充充电器进行充电，假设充电器处于最大输出功率的情况下，那么输出可能是5V~2.4A、9V~1.33A、12V~1A的情况。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSt4aevYRSicgOC8THr4QiclRoa2KiaJMyw7GfyCN24micZl9tdKnPXYpBc3siaKMLlL4wB6ehtElUyGZg/640?wx_fmt=png)

**_图6-2：受电端的结构_**

______________________€2.QC3.0______________________

QC3.0是QC2.0的升级版，最大改进是QC3.0支持输出电压为0.2V变量为一档进行变化。QC2.0只支持四组固定的电压输出，而QC3.0支持输出电压在3.6V到20V。同样QC3.0协议也有ClassA和ClassB，ClassA标准的QC3.0支持输出电压在3.6V至12V变化，ClassB标准的QC3.0支持输出电压在3.6V至20V变化，同样市场上的充电器、移动电源都是以ClassA标准为主的。Quick Charge 3.0提供了更大的灵活性，从5V到20V的步长为200mV，允许手机请求足够的输入电压来达到预期的充电电流，从而最大限度地减少开关损耗。如**_图6-3_**是电压电流的步进图例：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBTMoDvcO1cVRZkE2BVZjgLjbH8AE8EUicicX5qQrqYEKBOg9tgicjp64yg/640?wx_fmt=png)

**_图6-3：充电过程中的电压步进示例_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSt4aevYRSicgOC8THr4QiclRrbB6MfaS5ibPWQouBzQTgWRU4jV1mWs5RjAp9AL1ldDdWbWrfKUv4JQ/640?wx_fmt=png)

**_图6-4：受电端的结构_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSt4aevYRSicgOC8THr4QiclRGwvvgiaLicK1YPCtX57Gc4MWSojga7fD65FGc9ya16KLqFibjL7sG53qA/640?wx_fmt=png)

**_图6-5：支持快充的移动电源简易架构_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSt4aevYRSicgOC8THr4QiclRf9OSuBZp52DjnHW8Y1cxQR7qKbNSe386D4Z3NKG1hT1AgTRDpTRdfQ/640?wx_fmt=png)

**_图6-6：QC3.0控制逻辑_**  

QC3.0的原理和QC2.0的原理是差不多的，只是QC3.0电压输出选择更灵活。采用QC3.0时，便携式设备通过USB接口的D+和D-信号提交电压选择请求，在同一时间可能有不规律的USB数据通信。

QC3.0在分立模式下等同于QC2.0，以0V、0.6V、3.3V三级逻辑通过静态D+/D- 值选择VBUS；在连续模式下，新的QC3.0以200mV小步幅增加或降低VBUS，让便携式设备选择最适合的电压达到理想充电效率，更具灵活性，其最大负载电流限制为3A，最高功率可达60W。

对于支持使用D±来握手的BC1.2、QC2.0、QC3.0协议来说，因为D±还需要兼容传输数据，所以受电端的识别结构都内置在SOC中，而适配端均需要一枚支持QC协议的协议芯片来同受电端进行握手以及响应受电端的相关请求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT5ByjQrmUX1BXRdQPB0KluUmnPU2zdkXSiaibBHHREkZJpqZ0njdla36fD1vUW7Athuv2fiaSaUzTQA/640?wx_fmt=png)

**_图6-7：英集芯IP2161支持BC2.1和QC2/3.0_**

______________________€3.QC4.0______________________

如**_图6-8_**是QC2.0---QC4.0的发展迭代，根据QC4.0的握手要求，QC4.0不再使用D±握手而是使用CC，所以在适配器端和受电端，均需要加入PD/QC4.0协议芯片方可支持QC4.0充电协议。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBMFO7AUEulpmibOKf5MdjXZDKGjaaeGbmGzE2ys5YpRoYwibS7ibl3zLPA/640?wx_fmt=png)

**_图6-8：发展迭代表_**  

QC4.0支持3.6-20V波动电压，最高达100W (20V/5A)，技术升级：QC4.0支持输出电压为0.2V变量为一档进行变化，对于QC 3.0充电速度提升20%，效率提升30%。加入支持USB Type-C、USB PD，具备更强的兼容性，也可以理解为QC4.0不再使用D±握手而是使用CC握手。15分钟充满50%。INOV智能调节输入电压。电量到达90%，自动转化成涓流充电，有效保护手机电池。如下是识别分支图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTzLxzO9icx4WMRS8vkiaKNQ6kcIHeMOu1HWB15dia2DKmKL9vrjdOeBlvR0QgUWyIXUQCMlxpwyBuJQ/640?wx_fmt=png)

**_图6-9：QC快充识别过程_**

简易逻辑框图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSt4aevYRSicgOC8THr4QiclRx8L4qbVFkicJeOKoFdIBwbzVFVZ2cwfAob9iaHRkKyzrNzoQPicAtHOiag/640?wx_fmt=png)

**_图6-10：支持QC4.0的受电端结构_**

使用 USB-PD (PPS：Programmable power supply) 时，所有充电决策均由策略引擎做出：

1#.USB-C型电缆已连接

2#.智能手机检测到一个快速充电4适配器

3#.智能手机向适配器发出连续的电压请求

4#.INOV算法根据各种信号确定最佳电压

5#.适配器根据INOV算法动态调整电压

INOV：INOV是一套算法，使用快速充电3.0和4来控制输入电压和电流，以获得基于目标电荷电流的最佳效率。

INOV（一代1）SMB1351 =基于目标充电电流+系统负载增加输入电压

INOV（一代2）PMICs =基于目标充电电流+系统负载的增量/减少输入电压

INOV（Gen 3）SMB1380/SMB1381、PMI8998和其他= INOV（Gen 2）+外壳温度响应

如果适配器同时支持快速充电和PD，则将首选PD充电。OEM可以选择通过设备树参数禁用D+/D握手，在这种情况下，快速充电适配器总是使用5V充电。