# Digital devices-storage-4：什么是串行Nand Flash


> 原文地址: [https://mp.weixin.qq.com/s/ZB54L3f4h4Ua9iAbTKwRIg](https://mp.weixin.qq.com/s/ZB54L3f4h4Ua9iAbTKwRIg)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_devices_storage_4_什么是串行Nand_Flash_images\img_000_06395e445870.png)

____**★★★**______Storage-4---串行Nand Flash______**★★★**____

## 引言：随着嵌入式系统的发展，有许多具有串行外围接口（SPI）的应用需要更高密度的内存解决方案来存储大型程序系统和文件。对于这些应用需求，基于Nand结构的存储解决方案提供了Serial Nand系列。

## Nand单元为固态大容量存储市场提供了最具成本效益的解决方案，是高数据存储密度的理想选择，以每兆比特的低成本提供1Gb和2Gb密度的存储容量，因此串行Nand非常适合数字电视、机顶盒和AP路由器等嵌入式应用程序，因为这些应用程序现在包含更复杂的操作系统，用于管理多媒体、照片和其他数据密集型内容。

## ____€1.Nand Flash的结构____

Nand即Non-Volatile Memory，非易失性存储器，是一种最基本的闪存单元（闪：表征数据写入写出速度快）。

Nand Flash的结构原理图见**_图4-1_**是一个8\*8bit的Nand Flash的原理结构图，可见每个Bit Line下的基本存储单元是串联的，Nand读取数据的单位是Page，当需要读取某个Page时，Flash控制器就不在这个Page的Word Line施加电压，而对其他所有Page的Word Line施加电压（电压值不能改变Floating Gate中电荷数量），让这些Page的所有基本存储单元的D和S导通，而我们要读取的Page的基本存储单元的D和S的导通/关断状态则取决于Floating Gate是否有电荷，有电荷时，Bit Line读出‘0’，无电荷Bit Line读出‘1’，实现了Page数据的读出，可见Nand无法实现位读取（即Random Ａccess）。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_devices_storage_4_什么是串行Nand_Flash_images\img_001_949d9cf29683.png)

**_图4-1：Nand Flash的单元结构_**

Nand Flash的串联结构决定了其很多特点：基本存储单元的串联结构减少了金属导线占用的面积，Die的利用率很高，因此Nand Flash存储密度高，适用于需要大容量存储的应用场合，即适用于data-storage。串联结构还决定了Nand Flash无法进行位读取，也就无法实现存储单元的独立寻址，因此程序不可以直接在Nand中运行。

Nand Flash写入采用F-N隧道效应方式，效率较高，因此Nand擦除/写入速率很高，适用于频繁擦除/写入场合。同时Nand是以Page为单位进行读取的，因此读取速率也不算低（稍低于NOR）。

Nand Flash具有较快的擦写时间，相比Nor Flash具有较高的存储密度和较低的每bit成本，但是Nand Flash的I/O接口没有随机存取外部地址的总线，所以Nand以Page为读取单位和写入单位，以Block为擦除单位，存储器被划分为可以独立擦除的块，因此可以在擦除旧数据的同时保留有效数据。

## ____€2.Nand Flash的分类____

Nand闪存基于扇区（页），适用于存储连续的数据，如图片、视频、音频或个人电脑数据。它可以作为裸片使用，也可以带管理接口一起封装起来统称为托管型设备，包括eMMC、UFS、NVM（SSD）。闪存设备由2048个区块组成，每个区块有64页，Nand闪存块的编程和擦除次数是有限的，比如每个SLC Nand块的编程/擦除次数是10万次。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_devices_storage_4_什么是串行Nand_Flash_images\img_002_cf80987ae0a3.png)

**_图4-2：Nand Flash的区块结构_**

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_devices_storage_4_什么是串行Nand_Flash_images\img_003_56fc747da41b.png)

**_图4-3：Nand Flash的分类_**

对于托管型Nand设备，由主机接口，控制器和Nand Flash组成，且全部集成在同一块芯片上，设备本身提供高密度全托管存储解决方案，管理Nand的内部优化算法，包括纠错、坏块管理、损耗均衡、垃圾收集、物理逻辑映射。在没有主机软件参与的情况下，还可以执行多个后台内存管理任务。

## ____€3.颗粒类型____

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_devices_storage_4_什么是串行Nand_Flash_images\img_004_1ebbd8c7e90b.png)

**_图4-4：多层单元（QLC），相当于每个Nand单元的存储密度更高_**

如**_图4-4_**所示，Nand的存储单元颗粒类型分为四种：SLC、MLC、TLC、QLC。SLC为Nand闪存架构，全称Single-LevelCell，单层单元闪存，其每一个单元储存一位数据，但是SLC生产成本较高，晶片可重复写入十万次。SLC Nand包括3V并联SLC Nand，密度从512Mb到8Gb不等；1.8V SLC Nand，提供1Gb至4Gb的密度。单元层数 (bit/cell)：SLC（1bit/cell） / MLC（2bit/cell） / TLC（3bit/cell） / QLC（4bit/cell），最新的Nand层数堆叠已经做到了232层。

____€4.Serial Nand Flash____

_特征属性_

Serial Nand Flash设备提供高级PBL（永久块锁）安全功能，该安全功能可以将闪存的块或扇区永久设置为只读，从而保护机密代码免受故意篡改和攻击。

_结构_  

**_图4-5_**是SPI Serial Nand Flash的结构，通电后自动初始化设备，数据逐页传输到单元阵列或从单元阵列传输到高速缓存寄存器和数据寄存器，高速缓存寄存器最接近I/O控制电路，用作I/O数据的数据缓冲器；数据寄存器最接近存储器阵列，用作闪存阵列操作的数据缓冲器。Serial Nand Flash存储器阵列在基于页面的操作中被编程和读取，它在基于块的操作中被擦除。高速缓存寄存器用作缓冲存储器以启用随机数据读/写操作，Serial Nand Flash还使用一个新的SPI状态寄存器，用于报告设备运行状态。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_devices_storage_4_什么是串行Nand_Flash_images\img_005_0d1d29281159.png)

**_图4-5：Serial Nand Flash基本结构_**

_接口_

Serial Nand Flash使用行业标准的SPI接口（UFS使用多通道差分传输，后续单独介绍UFS），按页面/块组织访问Nand闪存核心。该命令集类似于常见的SPI-NOR命令集，经过修改以处理Nand特定的功能和新功能，这些修改是专门用于处理与Nand闪存架构相关的功能，与行业标准串行外围接口SPI命令集兼容，该接口支持页面和随机读/写以及内部数据移动功能、片上ECC。SPI Nand Flash，可以配置为1线，双线，四线模式，相关模式和Serial Nor Flash一致，传送门：[Digital series-Storage-1：什么是串行Nor Flash？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491526&idx=1&sn=c8fdee50014ddf126a8c95f473032692&chksm=c3355559f442dc4fdf22663fa5b4491616b245cab4a77dcf7571c58e4227562d9c93b9284405&scene=21#wechat_redirect)

_传输速度和容量_

Serial Nand Flash容量做的比较大，从1G-8Gb，时钟频率可以到133MHz，适用于存储纯程序包文件（例如视觉算法包，识别推理模型），并且对系统运行起来的时间要求不是很高（ADAS领域的J2芯片搭配的ROM就是512MB的SPI Serial Nand Flash）。