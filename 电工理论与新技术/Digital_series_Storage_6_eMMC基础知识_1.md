# Digital series-Storage-6：eMMC基础知识-1


> 原文地址: [https://mp.weixin.qq.com/s/tyK09jyuIkECjXcPuERcuQ](https://mp.weixin.qq.com/s/tyK09jyuIkECjXcPuERcuQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjMu97XrhUmJKfytfhQe2FW2SYBRhiablFjQUVMQiav7J9Buia9JsB4plqvA/640?wx_fmt=png)

____**★★★**______Storage-6---eMMC基础______**★★★**____

引言：eMMC是一种使用非常广泛的存储器件，从消费电子，工业领域，到车规等级，以其性能优良，高可靠性，调试便捷等等特点，成为芯片最小系统构建不可或缺的一员，本节介绍eMMC的相关基础知识。

_____€1.____eMMC的结构和接口_  

最新的eMMC产品遵循JEDEC eMMC 5.1标准，该标准定义了eMMC的通信信号、命令、内部寄存器、特性，并为系统设计人员提供指导。它是工业应用和汽车应用的嵌入式存储解决方案的理想选择，这些应用需要在广泛的工作温度范围内具有高性能。eMMC也是Nand Flash的一种，属于并行类别，由于控制系统的不同以及速率差异，将eMMC独立出来，其容量可以覆盖到很大的区间，从1GB到256GB甚至更高，采用8位并行数据接口。

eMMC是一个以BGA软件包形式设计的嵌入式MMC解决方案，eMMC操作与MMC设备相同，因此是使用MMC协议v5.1一个简单的读写内存，eMMC将TLC模式Nand和eMMC控制器封装在内部，作为一个JEDEC标准封装，为主机提供标准接口。eMMC控制器（三星称为FTL：过渡层）直接管理Nand Flash，包括ECC、损耗均衡、IOPS优化和读取感应、CMD/区块管理。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TT0QvaOL637iarZsZXXc5snNh2g4pHvUyOjSMltdRAaCWx42nyZ60K3dT3RDBOk67gUWJSxgzX6dZw/640?wx_fmt=png)

**_图6-1：eMMC结构_**  

从**_图6-1_**可以看到，整个eMMC包括控制器，Nand管理程序，Nand接口和Nand闪存单元。VDD（VCCQ）用于控制器电源（接口电源），VDDF（VCC）用于闪存电源。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQW3YIeagibUhHZzofAnF65tZuUEOCxt05M2ibXeQv2AcmrIHFO4cpicevkmHfFibHKrNJSOoTuDgdkXQ/640?wx_fmt=png)

**_图6-2：eMMC的接口和寄存器定义_**

_接口定义_

CLK：0-200MHz

CMD：用于设备初始化和命令传输的双向通道， CMD信号有2种工作模式： 

1#：漏极开路--->用于初始化模式 

2#：推拉--->用于快速命令传输

其中命令从eMMC主机控制器发送到eMMC设备，响应从设备发送到主机。

DAT \[7:0\]：双向数据信号，模式包括1（DAT0）、4（DAT0-DAT3）或8（DAT0-DAT7）。默认情况下，通电或重置后，只有DAT0用于数据传输。

DAT信号在推拉模式下工作，eMMC设备包括数据线DAT1-DAT7的内部上拉。-进入4位模式后，设备立即断开线路DAT1、DAT2和DAT3的内部上拉。 进入8位模式后，设备立即断开线路DAT1-DAT7的内部上拉。

数据选通：该输出信号由设备生成，信号的频率遵循CLK的频率，用于在HS400模式下读取期间与主机同步数据。对于数据输出，该信号的每个周期指示数据上的两位传输（2x）-一位用于上升沿，另一位用于下降沿，对于CRC状态响应输出和CMD响应输出（仅在HS400增强选通模式启用）。

_寄存器定义_

OCR（操作条件寄存器）：初始化期间 VDD电压分布和访问模式指示 - 双电压（3.3V、1.8V） - 扇区模式（LBA=512B）

CSD（卡专用数据寄存器）：卡操作条件（数据传输速度、数据格式、纠错类型）

CID（卡识别寄存器）：设备识别号（名称、制造商、序列号）

RCA（卡相对地址寄存器）：初始化期间主机分配的设备系统地址

DSR（驱动级寄存器）：可选用于提高总线性能并配置设备的输出驱动程序

ECSD（扩展芯片特定数据寄存器）：卡功能和所选模式

______€2._____eMMC的电源_  

**_图6-3_**是eMMC的电源配置，Nand区域（VDDF或VCC）需要3V电压，而MMC控制器支持1.8V或3V双电压（VDD或VCCQ）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSxJfFedLhApgv8APULzaM9Xuz1QzmC7wtyvWEcRZXCz7OibcSbDfhzxZ1uCjAPhyvj2ckxLbGgPow/640?wx_fmt=png)

**_图6-3：eMMC的电源配置_**

通电时电源电压必须单调上升，无下降，断电时电源电压必须单调下降，无颠簸内部电压检测器在VCC和VCCQ下降时保证EMMC各项功能正常，其中VCC=2.7V-3.6V；VCCQ=1.70V-1.95V或者2.7V-3.6V，VCC和VCCQ在每个工作电压范围内达到稳定状态之前，主机不得发出任何命令。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQW3YIeagibUhHZzofAnF65tLb6icluibwNcOorXTwu7l2da9qfGO94VEKgf4jo4V0pDl6XEu7F4owvQ/640?wx_fmt=png)

**_图6-4：eMMC理想上下电_**

如果VCC低于重置阈值，比如2.43V，VCCQ低于重置阈值，比如1.43V，内部WP线就会拉低以禁用闪存阵列编程/擦除操作。

______€3._____Nand布局_  

内部控制器将主机访问重定向至NAND物理块。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSxJfFedLhApgv8APULzaM9h05mOHzUeYt5S5nSAgrIGlYEyND0ho1to6OFzdAog4kb21aqygZyeQ/640?wx_fmt=png)

**_图6-5：eMMC的内部Nand布局_**  

系统区：FW代码和配置、坏块表、坏块空闲区、系统块（设置和指针）

用户区/常规分区：常规用户区，可用于所有常规用户GPP- 增强型分区：可用于增强型用户区、2个引导分区、RPMB分区，所有增强型GPP。

预留空间：预留空间（OP）是指闪存实际容量与用户可用容量之间的差值。预留空间=（实际容量－ 用户可用容量）/用户可用容量，设备用户可用容量= SEC\_COUNT x 512B，SEC\_COUNT 指主机可寻址的最大扇区数。设备的可寻址扇区范围为扇区0到扇区(SEC\_COUNT-1)。

注意：由主机执行分区配置时，设备将重新计算SEC\_COUNT值，可用于表示分区后用户数据区的大小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSxJfFedLhApgv8APULzaM9k4iaicicI0rvNQFicVRRseJvhkicwjeXeVJX5EZV4vHHbXBtExichEt2oOtA/640?wx_fmt=png)

**_图6-6：eMMC的容量预留比例_**

在垃圾回收、损耗均衡和坏块映射操作中，额外预留空间由FW分配。

______€4._____eMMC分区_  

eMMC最初由两个引导分区、RPMB分区和用户数据区组成，用户数据区可分为四个通用区域分区和用户数据区分区，每个通用区域分区和用户数据区域分区的一部分都可以配置为增强分区。

增强分区（区域）：eMMC采用增强型用户数据区作为SLC模式，因此，当主服务器在用户数据区域中采用某些部分作为增强的用户数据区域时，该区域占用的大小是原始设置大小的两倍。(例如，如果主设置1MB为增强模式，则总共需要2MB用户数据区域才能生成1MB增强区域)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSxJfFedLhApgv8APULzaM9hdpS8eibBl5ZvIOCU2y3OcSM04GjkIUFc0KpEmsCxHoNEXlQiaO0LPtA/640?wx_fmt=png)

**_图6-7：eMMC的分区示意图_**

青色--->增强型存储介质：SLC Nand；粉色--->默认存储介质：MLC/TLC Nand，JEDEC规范允许供应商实施具有增强技术特性的分区，区别于默认存储介质，增强技术特性拥有更高的可靠性和更高的读写次数。