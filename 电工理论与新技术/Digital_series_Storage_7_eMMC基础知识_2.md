# Digital series-Storage-7：eMMC基础知识-2


> 原文地址: [https://mp.weixin.qq.com/s/E9vyPy27g7OPSa9IFcIsQw](https://mp.weixin.qq.com/s/E9vyPy27g7OPSa9IFcIsQw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjMQXRe0o1vcDuicKLibFib7ehc74FCh4CSpmtSHjVROdR4YDNJyU3loSEIA/640?wx_fmt=png)

____**★★★**______Storage-7---eMMC基础______**★★★**____

______€1._____eMMC操作模式_  

如**_图7-1_**所示，eMMC系统包含五种操作模式：

1#：开机模式

2#：设备识别模式

3#：中断模式

4#：数据传输模式

5#：非活动模式

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSxJfFedLhApgv8APULzaM9t0w6NyYaNoEuCojUb0KY6jMpHicsXMh2RX0PjAjTPr1nWYPycibfKC8w/640?wx_fmt=png)

**_图7-1：CMD线模式视图_**  

_开机模式_

eMMC提供两个容量大小相同的逻辑区域，用于启动操作，称为引导分区，引导分区大小=128K字节xBOOT\_SIZE\_MULT (EXT\_CSD\[226\])，大小由厂商在发货前确定。

从引导分区启动设备的优点：可以采用SLC-OTF模式，具备专用锁定、低延迟、高可靠性等特点。主机也可选择从用户区启动设备，将启动数据保存在用户区将减少用户专用空间。

引导分区采用pSLC模式，而用户区采用MLC模式（即使可以配置为pSLC），相比用户区，从引导分区启动设备的延迟更低，可使用EXT\_CSD byte \[179\]，提前选择主机启动的分区。

\- 0x0：未启用开机操作模式

\- 0x1：从引导区1启动

\- 0x2：从引导区2启动

\- 0x3-0x6：保留

\- 0x7：从用户区启动

在下列情况下，发送开机操作请求：

1#：CMD线保持低电平超过74个时钟周期

2#：主机发送CMD0 (0xFFFFFFFA)命令

达到上电周期后，接收到带0xF0F0F0F0参数的CMD0命令或硬件复位信号有效，设备将进入开机模式：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSxJfFedLhApgv8APULzaM9ARMibbyBOARGRd31dn1c8slGEJd9bafE11VibKkzuEg9iaC1XqT2nFWWQ/640?wx_fmt=jpeg)

**_图7-2：开机状态机_**

_设备识别模式_

开机操作模式完成后，如果主机或设备不支持该设备识别模式时，设备将一直处于设备识别模式状态，直至接收到SET\_RCA命令（CMD3）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQJ9EVQHzic4NCiat52kOoyT7LITAu4qjIhvSKVaKvUjYelHkzS1nia2zjfTafYbiaJ7F4GVUr7kruKRQ/640?wx_fmt=png)

**_图7-3：eMMC的识别状态图_**

_数据传输模式_

分配RCA后，设备将进入数据传输模式，识别总线上的设备后，主机将进入数据传输模式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQJ9EVQHzic4NCiat52kOoyT7XBn02tbEpTFsNjD0TMZTDNU9ou6SggPNnVibRkjmiaj00mFDqcSZWRSA/640?wx_fmt=png)

**_图7-4：eMMC的数据传输状态图_**

_中断模式_

主机和设备同时进入或退出中断模式，在中断模式下，无法进行数据传输，只允许设备或主机发送中断服务请求。

______€2._____eMMC设备初始化和主机系统延迟_  

**_图7-5_**是eMMC初始化流程的时间轴，从轴线可以看到，从上电开始，eMMC要先进入预空闲状态，收到启动请求之后再将关键程序指令发送给主机，主机完成加载启动后直至主机使用，这一长段时间可以理解为开机时间，开机时间的长短很大一部分取决于eMMC的性能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQW3YIeagibUhHZzofAnF65tibNR5KBszSnCxGBP2naqeVribpsuPDFwicOyzMVaI0RVyOuEuhR6tyYFA/640?wx_fmt=png)

**_图7-5：eMMC初始化流程_**

TBD：启动延迟时间，从CMD线转为低电平到首次开机数据输出之间的时间，一般在40ms左右。  

INIT：从CMD1到就绪之间的时间，根据JEDC规范，延迟时间最长为1s。

许多主机系统在系统上电和CMD线转为低电平（开机）/CMD（init）之间存在延迟，而Automotive eMMC 5.1默认开启快速INIT功能，快速INIT功能可充分利用该延迟，缩短系统初始化时间。电源稳定后（Vcc/Vccq高电平），即使客户未将CMD线转为低电平，eMMC也会自动执行初始化流程，从而缩短系统初始化时间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSxJfFedLhApgv8APULzaM9TNdicsyBhEr43ofuG5cxAb2Lu5cocWia9VFIbIJNGCq7K6HkI0KyQ2fQ/640?wx_fmt=png)

**_图7-6：快速INIT的优点---时间示例_**

开启快速初始化后，电源稳定后立即启动INIT程序，而不启用快速初始化，INIT程序则在主机发出CMD1时启动。

______€3._____HW复位_  

使用HW复位功能，主机必须将ECSD寄存器162字节，\[1:0\]位设置为0x1，以便在主机可以使用其之前启用该功能。执行复位操作之前，主机必须在尚未执行任何操作的情况下，根据JEDEC规范在RST\_N引脚处至少保持1us的低电平。如果复位引脚回到高电平，则eMMC阻止任何操作，并进入预空闲状态，如**_图7-7_**所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQW3YIeagibUhHZzofAnF65tia1IIbD14YiaLwbUjSa4Eibb1JOgqGj5vicwVz8VvN8KH5QibsCeCLRFJSw/640?wx_fmt=png)

**_图7-7：eMMC的复位触发_**