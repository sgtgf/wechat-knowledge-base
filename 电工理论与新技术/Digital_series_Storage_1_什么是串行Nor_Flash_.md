# Digital series-Storage-1：什么是串行Nor Flash？


> 原文地址: [https://mp.weixin.qq.com/s/GEEMIwtJ3aGewxRq3hLBug](https://mp.weixin.qq.com/s/GEEMIwtJ3aGewxRq3hLBug)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_000_5f79efcefecf.png)

____**____**★★★**____**____________Storage-1---串行Nor Flash____________**____**★★★**____**____

引言：串行Nor Flash是一类使用比较多的存储器件，在特殊应用场景中具有不可替代的地位，本节是数字存储器件系列第一节，介绍串行Nor Flash的结构和参数特性。

____€1.____________Nor Flash的结构________

Nor Flash的结构原理图见**_图1-1_**，可见每个Bit Line下的基本存储单元是并联的，当某个字节线被选中后，就可以实现对该字节的读取，也就是可以实现位读取（即Random Ａccess），且具有较高的读取速率，**_图1-1_**是一个3\*8bit的Nor Flash的原理结构图（图中Bit位标识错误，实际为Bit0-Bit7）

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_001_48d02ca2e24c.png)

**_图1-1：Nor Flash的单元结构_**

基本存储单元的并联结构决定了金属导线占用很大的面积，因此Nor Flash的存储密度较低，适合关键代码存储，而不适用于诸如数据存储这样需要大容量存储的应用场合，此外Nor Flash写入速率较低，不适用于频繁擦除/写入场合。

____€2.Nor Flash的类别____

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_002_4ddd4d163897.png)

**_图1-2：Nor Flash的分类_**

____€3.标准Serial Nor Flash的特征属性____

_1#.Wide Range VCC Flash_

Serial Nor Flash可节省60%以上的功耗，并具有宽VCC电压特性，支持3V、2.5V和1.8V（1.65V-3.6V）。

_2#.Permanent Lock_

具有永久锁定功能的Nor Flash提供了极端的写保护机制，此安全功能可以将闪存的块或扇区永久设置为只读，可用于保护系统操作免受故意篡改。

_3#.Default Lock Protection_

默认的锁定保护功能针对参数保护应用程序进行了优化，这些产品利用BP易失性保护位来保护选定的内存启动区域，防止程序被滥用，并擦除受保护区域中的指令。

_4#.Standard Serial Interface_

在单个3V或2.5V电源电压下提供标准串行接口SPI-X1、SPI-X2、QSPI，频率从33MHZ-166MHZ。

_5#.Multi-I/O_

Multi-I/O提供两种多输入/输出接口：提供多输入/多输出接口或者提供单输入/多输入接口，并且都可用于Quad I/O操作，使得应用程序的系统读取性能提高了四倍。

_6#.Multi-I/O Duplex (DTR)_

Multi-I/O Duplex （DTR）提供具有DTR（双传输速率）模式操作的四输入/输出接口，SPI DTR允许在较低时钟频率下运行的同时实现高数据吞吐量。SPI DTR Read模式使用时钟的上升沿和下降沿来驱动输出，从而将输入和输出周期减少一半。

数据传输速率最高可达800MHz，为了扩展Multi-I/O双工类型的I/O选择，还有具有DTR（双传输速率）模式操作的双四路I/O接口，高达1600MHz的数据传输速率，并且还在引导扇区提供独立的块锁定保护。

_7#.XIP（片上执行）_

Nor Flash存储单元的并联结构决定了其读取和我们常见的SDRAM的读取一样，可独立寻址且读取效率高，因此适用于代码储存，且程序可以直接在Nor Flash中运行，即具有RAM的特性。用户可以直接运行装载在Nor Flash里面的代码，这样可以减少SRAM的容量从而节约了成本，Nor Flash需要较长的时间进行擦写，但它提供完整的寻址与数据总线，并允许随机动态存取器件上的任何区域，使得它可以支持XIP，取代老式的ROM芯片（存储几乎不需更新的代码），例如BIOS。

____€4.标准Serial Nor Flash的结构____

_![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_003_c5036daa42f5.png)_

**_图1-3：标准Serial Nor Flash的系统结构_**

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_004_8d78dfdf6439.png)

**_图1-4：挂载多片Serial Nor Flash的连接拓扑_**

____€5.标准Serial Nor Flash的接口____

_1#.标准SPI_

4线标准SPI接口，由串行数据输入（SI）、串行数据输出（SO）、串行时钟（SCK）和芯片启用（CE#）引脚组成。指令通过SI引脚发送，以在SCK的上升沿对指令、地址或输入数据进行编码。SO引脚用于读取数据或检查设备的状态。该设备支持SPI总线操作模式（0，0）和（1，1）。SPI产品一般以串行的方式读取信息，也就是每次1比特，它要求的连接较少，所以要求的引脚数也较少。这一更低的成本简化了许多嵌入式设计的电路板设计并降低了外形尺寸。总的针脚数从典型的并行Nor Flash上的47个有效引脚降低到了SPI闪存上的8个有效引脚。 

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_005_9d672e6459bb.png)

**_图1-5：标准SPI波形示例_**

_2#.Multi I/O SPI_

除了标准的4线配置之外，多输入/输出操作利用增强的SPI协议，将SPI扩展为包括各种IO标准，包括用于减少引脚数的单路和在标准SPI基础上增加了额外的数据线，用于提高吞吐量的双或四路I/O（若配置为四路，则称为QSPI）。

1#：双输出

2#：双输入和双输出

3#：四输出  

4#：四输入和四输出

在3线模式下，MOSI和MISO线合并为一条双向数据线，如**_图1-6_**所示，半双工模式支持双向通信，但减少数据线的数量并以半双工模式运行会降低最大可能的吞吐量。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_006_1cc01193dd75.png)

**_图1-6：单路SPI配置_**

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_007_323102d8ff31.png)

**_图1-7：双路SPI配置_**

当与高速设备通信时，Quad I/O设备可以提供的性能是标准SPI的4倍，**_图1-8_**显示了支持Quad IO设备的配置示例。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_008_12413adaeffa.png)

**_图1-8：四路SPI配置_**

通过SPI模式执行这些指令将实现READ和PROGRAM操作的传输带宽的两倍或四倍。有了Multi-I/O，器件能够同时传输和接收1bit、2bit或4bit的数据，实现了更快的速度，并且只需要8个引脚或者只需要4个有效引脚就能维持单I/O SPI原来的好处。

提升的性能意味着能够支持更快的XIP代码执行，能够降低采用较慢的SPI解决方案的系统中所需的RAM数量，还能够实现更快的系统启动速度。利用多种I/O模式的组件可以与并行设备的读取速度相媲美，同时可以减少引脚数。

_3#.QPI_

只有当设备从标准/双路/四路SPI模式切换到QPI模式时，设备才支持四路外围接口（QPI）操作。

QPI（Quad Peripheral Interface，四外设接口）支持2周期指令，进一步减少指令时间。页面可以按4K字节扇区、32K字节块、64K字节块和/或整个芯片的组擦除。统一的扇区和块架构允许高度的灵活性，因此支持QPI器件可以用于需要可靠数据保留的各种应用。

典型的SPI协议要求字节长的指令代码仅通过八个串行时钟中的SI引脚转移到设备中。QPI模式利用所有四个I/O引脚来输入指令代码，因此只需要两个串行时钟，这可以显著减少SPI指令开销并提高系统性能。在任何给定时间，只有QPI模式或SPI/双路/四路模式可以激活。特定指令用于在这两种模式之间切换，而不考虑状态寄存器中的非易失性Quad Enable（QE）位状态，电源重置或软件重置将使设备返回到标准SPI模式。在QPI模式期间，SI和SO引脚变为双向I/O0和I/O1，WP#和HOLD#引脚分别变为I/O2和I/O3。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_009_cfc651f55cd3.png)**_图1-9：QPI配置波形示例_**

_传输速度和容量：_

Serial Nor Flash容量覆盖512Kb至2Gb，即64KB至256MB（1B=1Byte=8b=8bit），支持3V、2.5V和1.8V供电。

____€6.其它类型Serial Nor Flash____

_1#.Serial Nor Flash with ECC_

带ECC校验的串行Nor Flash，其容量均比较大，一般为128Mb和256Mb容量居多，每64位长度的边界会追加1位错误检测和校正（带ECC），速率为50MHZ-166MHZ。

## _2#.Twin Quad Serial Nor Flash (x8 SPI)_

如**_图1-10_**所示，即两片支持X4 SPI的Flash叠封在一起，扩展成为X8接口。例如512Mb=256Mb×2；256Mb=128Mb×2，速率80MHZ/166MHZ。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_1_什么是串行Nor_Flash__images\img_010_539a9bb96960.png)

**_图1-10：两片X4 SPI Nor Flash堆叠实现X8_**

## _3#.Security Flash_

安全闪存，Security Flash支持RPMC（Replay Protection Monotonic Counter，重放保护单调计数器）功能作为额外的安全措施，可以检测硬件攻击，另外还有易失HMAC密钥寄存器、非易失性根密钥寄存器、四个32位单调计数器，同样，带安全保护机制的串行Nor Flash，其容量均做的比较大，一般128Mb起步至2Gb，速率80M-166MHZ。