# Digital series-Storage-5：什么是并行Nand Flash


> 原文地址: [https://mp.weixin.qq.com/s/j3yOsm9-4kx4pH92DqGSCQ](https://mp.weixin.qq.com/s/j3yOsm9-4kx4pH92DqGSCQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjM7yrCShRZJYdZ1Xv8AFECibjrnoARtibUvvU1Az5IlXBdBniaAic6XsgZ6w/640?wx_fmt=png)

____**★★★**______Storage-5---并行Nand Flash______**★★★**____

引言：并行Nand Flash是中等容量存储方案的理想选择，相比于SPI Nand Flash，性能更优，但体积较大，使用并没有后者广泛，多使用在嵌入式，物联网，工业等领域。

## ____€1.结构____

并行Nand Flash的结构如**_图5-1_**所示，虽然eMMC也是并行Nand Flash的一种，但二者不能混为一谈，接口和遵循的标准都不相同。

____![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBicN5EfJ9eDgJicfDBfeQ8g93pIU0hFKY1K3AiauptY2JXpAZYRBNxlfaI29QuHGhz1lJtibhgugtibQ/640?wx_fmt=png)____

**_图5-1：并行Nand Flash基本结构_**

## 并行Nand Flash由存储阵列、页缓冲器、编码器，地址计量、数据缓冲器、逻辑控制器、接口几大部分构成，同时容量的扩展也支持多片叠封如**_图5-2_**。增强的体系结构和接口，支持高速缓存程序功能，允许在将数据寄存器复制到闪存阵列时将数据插入高速缓存寄存器。当长文件被写入存储器时，这种流水线程序操作提高了程序吞吐量，还实现了缓存读取功能。当连续页面必须流式传输时，此功能可以显著提高读取吞吐量。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLNZASr7unaPtYYibljovr44mjN0A0TsAGqMUCaibfRvO3FjgVGy8HhibCg/640?wx_fmt=png)

**_图5-2：双片叠封的并行Nand Flash_**

## ____€2.接口____

## 并行Nand Flash的I/O引脚（IO\[0:7\]或者IO\[0:15\]）用于输入命令、地址和数据，并在读取操作期间输出数据，所以并行Nand Flash不是全双工传输，某一时刻只能是输入或者输出。当芯片被取消选择或输出被禁用时，I/O引脚浮动到高Z。并行Nand Flash数据线宽度可选x8或者x16，信号线模式有非同步Asynchronous和Synchronous同步两种，数据采集模式：SDR/DDR，引脚及其定义功能如下：

CE#：片选，如果没有检测到CE信号有效，那么Nand Flash设备将保持待机模式，不对任何控制信号做出响应。

WE#：写使能，WE#负责将数据、地址或命令写入Nand Flash设备中。

RE#：读使能，RE#允许数据输出数据缓冲器。

CLE：命令锁存使能，当CLE为高时，在WE#信号的上升沿，命令被锁存到Nand Flash命令寄存器中。

ALE：地址锁存使能，当ALE为高时，在WE#信号的上升沿，地址被锁存到Nand Flash地址寄存器中。

I/O\[7:0\]：数据总线（针对x16部件的输入/输出\[15:0\]）

WP#：写保护

R/B#：就绪/忙

如果并行Nand Flash器件忙于擦除、编程或读取操作，R/B#信号将变低（R/B#信号为漏极开路，需要采用上拉电阻）。

## ____€3.传输速度和容量____

## 并行Nand Flash非标/ONFI标容量可以做到8Gb，顺序读取速度可以做到25ns。它还结合了从一个页面到另一个页面的回拷贝程序功能，而无需将数据传输到外部缓冲存储器或从外部缓冲存储器传输数据，从而允许优化缺陷块管理，例如当页面编程操作失败时，数据可以直接编程到同一阵列部分内的另一个页面中，而无需耗时的串行数据插入阶段。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQW3YIeagibUhHZzofAnF65tgtNKdfHF7MLEPibsVA1ypvv2cWRoNMpKTYD1bOSXHAprFyakLd0ZMyw/640?wx_fmt=png)

**_图5-3：SLC Nand物理结构_**

**_图5-3_**是并行Nand Flash的物理结构，存储阵列由2048（2Gb）个可单独擦除的2112×64字节块组成。其中预留区域64x8列位于列地址2048~2111之间，2112字节的数据寄存器连接到存储器单元阵列，用于在页读取和页编程操作期间在I/O缓冲器和存储器之间进行数据传输，编程和读取操作以页为基础执行，而擦除操作以块为基础执行。

## ____€4.基本工作过程____

## 并行Nand Flash的地址使用8个I/O多路复用传输，这样可以保持主板设计的一致性，大大减少了引脚数量，还可以支持系统升级到更高的容量。

## 并行Nand Flash通电时自动读取，当WE#变低，命令、地址和数据都通过I/O写入，而CE#变低，这些都会被锁定在WE#的上升边缘。命令锁存器使能（CLE）和地址锁存器启用（ALE）分别用于通过I/O引脚多路传输命令和地址。有些命令需要一个总线周期，例如重置命令、状态读取命令等只需要一个循环总线。其他一些命令，如页面读取、块擦除和页面编程，则需要两个周期：一个周期用于设置，另一个周期执行。