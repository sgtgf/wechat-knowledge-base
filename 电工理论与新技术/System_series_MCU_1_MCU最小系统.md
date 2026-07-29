# System series-MCU-1：MCU最小系统


> 原文地址: [https://mp.weixin.qq.com/s/HFAUlFTwaugwlmWpBp4NfA](https://mp.weixin.qq.com/s/HFAUlFTwaugwlmWpBp4NfA)

![](D:\电脑文件\公众号知识库\电工理论与新技术\System_series_MCU_1_MCU最小系统_images\img_000_b59f8735c6b8.png)

____**★★★**______MCU-1---MCU最小系统______**★★★**____

## 引言：简单的单板多由一个MCU组成，而复杂的单板往往由多个MCU和多个SOC组成，各个子系统执行自己的任务，互相之间经过通讯网络交流子系统的状态，任务执行结果等等，一起组成更大的系统，本节简述MCU的最小系统。

## ____€1.MCU最小系统组成____

![](D:\电脑文件\公众号知识库\电工理论与新技术\System_series_MCU_1_MCU最小系统_images\img_001_53cfbec2dc6d.png)

**_图1-1：典型的MCU最小系统_**

如**_图1-1_**是最常见的MCU最小系统，由MCU、时钟、电源三大部分组成，MCU本身内置flash和RAM或者SRAM。  

![](D:\电脑文件\公众号知识库\电工理论与新技术\System_series_MCU_1_MCU最小系统_images\img_002_400d83cfe0f8.png)

**_图1-2：外置flash的MCU最小系统_**

MCU外置flash比较少见，因为使用外置flash的MCU一般制程较高，例如芯驰的E3600，采用22nm工艺，然而目前22nm目前还没有成熟的车规嵌入式Flash工艺，因此芯驰采用的是Logic工艺，需要XIP外部Flash（注意有的MCU也支持Nand Flash而非一定是Nor Flash，主要看内部S/RAM是否支持链接运行）。但是22nm制程高，可以带来更强的计算能力，芯驰E3600的主频可以到600MHz。

目前嵌入式车规工艺最具性价比的是40nm，也是国内多家车规MCU芯片公司的共同选择，目前MCU芯片的主流工艺是110/65/55/40。XIP Flash和eFlash（内嵌）在带宽，功耗，功能安全，可靠性方面均有所不同，XIP Flash容量相对比较大，但整体性能和可靠性稍逊于eFlash。（传送门：[Digital series-Storage-1：什么是串行Nor Flash？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491526&idx=1&sn=c8fdee50014ddf126a8c95f473032692&chksm=c3355559f442dc4fdf22663fa5b4491616b245cab4a77dcf7571c58e4227562d9c93b9284405&scene=21#wechat_redirect)/[Digital series-Storage-2：什么是串行Nor Flash-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491627&idx=1&sn=4777a767a7c7ed30a55600136abe0e7f&chksm=c336aab4f44123a28fd597bc97d09df35e8a3b5cdb89cbd5817f1e20778352296f34e6a3f56f&scene=21#wechat_redirect)）

![](D:\电脑文件\公众号知识库\电工理论与新技术\System_series_MCU_1_MCU最小系统_images\img_003_470acacb9098.png)

**_图1-3：更高性能的MCU_**

如**_图1-3_**，部分高性能MCU需要执行的程序更大更复杂，不仅MCU内部有flash和RAM，还有额外的接口支持外部flash、DRAM和SRAM，以此释放MCU的全部性能。此时**_图1-3_**所示的最小系统已经非常接近SOC的系统构成。  

## ____€2.MCU时钟管理____

一般MCU时钟管理系统支持多个时钟源和时钟低功耗管理，外部时钟源诸如24/20MHz晶体等，也支持通过引脚从外部输入相同频率的有源时钟，外部时钟源是片上各个PLL的时钟源。此外，部分MCU还接入32.768KHz片上振荡器，即XTAL32K，支持32.768KHz晶体，用于电池备份域外设如实时时钟（RTC）等的时钟源。

MCU其内部具有RC振荡器，即内置的时钟源，例如RC24M，即频率为24MHz，内置时钟频率不可更改，且精度和稳定性没有外置的好。(传送门：[Analog series-OSC-1：无源晶振的基础](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491450&idx=1&sn=37f9f37ad7e1594179b285c63b5231bf&chksm=c33555e5f442dcf36ea23b4e4309917362e8c0b5cb58f586e267598894dd6493ff19c9f4c66a&scene=21#wechat_redirect)/[Analog series-OSC-6：详细解析如何设计无源晶振电路](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491699&idx=1&sn=f62f238788eec99497ef80d76aaf622f&chksm=c336aaecf44123fa7d34e908100d3369b00c3204b3bf28a97122ddbb393d67ea00f7e025c4d1&scene=21#wechat_redirect))

MCU内部时钟树上具有多个锁相环PLL，支持小数分频和展频（可理解为分频和倍频），还支持低功耗管理，支持自动时钟门控。

## ____€3.MCU内存管理____

高性能MCU还具有外部存储器接口，包括串行总线控制器XPI，可以连接片外的各种SPI串行存储设备，也可以连接支持串行总线的器件。多功能外部存储器控制器FEMC，包括DRAM控制器和SRAM控制器，其中DRAM支持SDRAM和支持LPSDR SDRAM，可以到8 位，16位和32位数据宽度，SDRAM频率最高166MHz。SRAM控制器支持连接外部SRAM存储器或者访问接口兼容SRAM的外部器件，支持异步访问和数据地址复用模式 (ADMUX) 或者非复用模式 (Non-ADMUX)，数据宽度可以支持8位或16位甚至更高数据端口。

## ____€4.MCU启动管理____

简单的MCU小系统，如**_图1-2_**所示，S/RAM和flash均在MCU内部，它的启动就比较简单，片上启动就可以，并且其Bootloader可以独立编写也可以和正式程序合并在一起，所以可以理解为其没有Bootloader。

高性能MCU内部会独立部署一小块只读存储器ROM（在片内的一小块norflash上），容量很小，例如128KB，称为BootROM，BootROM固化在SOC内部，存放本产品的启动代码，闪存加载（Flashloader）和部分外设驱动程序。

简单的单片机没有BootROM，因为单片机上电立即从0x0000000的地方开始读取代码执行，本身代码就在Norflash上，CPU直接跳转过去执行，STM32系列就没有BootROM。高性能MCU有外置SARM或者DRAM时，运行整个程序之前就需要有初始化代码初始化动态内存，初始化完成之后，SARM或者DRAM才能开始正式运行主程序。

BootROM为该芯片上电后执行的第一段程序, 它支持如下功能：

1#：从串行Nor Flash启动

2#：UART/USB启动

3#：在系统编程 (ISP)

4#：安全启动

5#：低功耗唤醒

6#：多种ROM API

芯片默认是通过BOOT\_MODE\[1:0\]=\[PZ07:PZ06\] 引脚选择三种不同的启动模式，启动配置如**_表1-1_**举例所示：

![](D:\电脑文件\公众号知识库\电工理论与新技术\System_series_MCU_1_MCU最小系统_images\img_004_44da687486a9.png)

**_表1-1：启动模式配置举例_**

## ____€5.MCU复位管理____

通常MCU有一个复位引脚RESETN，这个引脚叫全局复位引脚，可以复位整个芯片，还有部分MCU会单独引出另外几种复位功能引脚，包括调试复位（DEBUG RST）、看门狗复位（WDOGx RST）、软件复位（SW RST）等等。

如果MCU本身自带电源管理模块，则RESETN也称为电池备份域复位，可以复位整个芯片，包括电池备份域（有的话），电源管理域和系统电源域。

## ____€6.MCU不启动的初步排查____

针对MCU最小系统的三要素（电源、时钟、复位），无论是简单还是高性能MCU，它们初始无法启动的排查点如下：  

1#：检查各路电源是否都到位以及电源质量和上电时序是否都满足MCU的要求。

2#：检查MCU的时钟是否起振以及晶振输出波形的质量（振荡幅度，频偏等等）。

3#：检查与MCU关联的复位逻辑，主要是给MCU的复位信号是否异常让MCU一直处于复位状态导致无法启动。