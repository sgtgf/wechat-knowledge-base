# 详解 STM32 之 SD 卡

原创 硬件笔记本 2024-03-10 11:19 四川

> 原文地址: [https://mp.weixin.qq.com/s/Skv7TGf72rqiBz5SZXES9A](https://mp.weixin.qq.com/s/Skv7TGf72rqiBz5SZXES9A)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

看到一篇写的比较好的笔记，分享给大家

  

一、SD卡概述

　　1、定义

　　2、容量等级

　　3、SD卡框图

　　4、SD卡与TF卡的区别

  

二、 SD卡内部结构

　　1、 SD卡内部结构简图

　　2、 存储阵列结构图

　　3、Buffer 

　　4、“存储阵列Block”--最小的存储单元

　　5、SD卡的特殊功能寄存器

  

三、SDIO接口 

四、SD卡协议的核心--数据读、写、擦除

　　1、SD卡写数据块

　　2、SD卡读数据块 

　　3、擦除SD卡

  

五、SD卡物理层协议

　　1、接口 

　　2、命令格式

　　3、响应格式

　　4、SD卡的工作状态

　　5、SD卡的两种状态信息

  

六、STM32与SD卡相配的外设--SDIO适配器

　　1、SDIO adapter 结构图 

　　2、命令状态机（CPSM)

　　3、数据通道状态机（DPSM)

　　4、SDIO的FIFO 

　　5、SDIO的特殊功能寄存器

  

七、SD卡编程 

　　1、SD卡编程的内容

　　2、SD卡初始化 

　　3、读SD卡的一个块

　　4、写SD卡的一个块 

  

八、SD卡疑惑

　　1、SD卡擦除后，其中的内容是0，还是1 ？ 

　　2、在SDIO\_DCTRL中设置传输Block的要求

 　  3、STM32固件库“stm32\_eval\_sdio\_sd.c version v4.5.0”偶遇BUG

 　  4、SD卡写Block是怎样进行的？

  

九、SD卡参数测试

  

**一、SD卡概述**

**1、定义**

　　SD卡（安全数码卡），是一种基于半导体快闪记忆器的新一代记忆设备，它被广泛地于便携式装置上使用，例如数码相机、个人数码助理（外语缩写PDA）和多媒体播放器等。

  

  

**2、容量等级**

容量等级

容量范围

磁盘格式

SD

上限至2GB

FAT 12, 16

SDHC

2GB至 32GB

FAT 32

SDXC

32GB至2TB

exFAT

**3、SD卡框图**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_002_c56ebe1333d3.png)

 引脚说明：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_003_57f80ab2fef8.png)

**4、SD卡与TF卡的区别**

　　TF卡又名micro SD卡，个头是比SD卡的1/4还小，可以通过“TF转SD卡套”转换成SD卡。

　　详细区别参考：SD卡与TF卡的区别　　

  

  

**二、 SD卡内部结构**

　　（摘自SanDisk Secure Digital Card Product Manual Version 1.9）

  

**1、 SD卡内部结构简图**

　　　由SD卡控制器和存储阵列组成，SD卡与外界的通讯接口是SD Bus或者SPI Bus。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_004_46a387fba20d.png)

**2、 存储阵列结构图**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_005_c4ca5f5615c1.png)

Block:　　　　  

　　读写时的单元（数据传输单元），它的单位是“字节”。

Sector: 　　　　

　　如果CSD寄存器ERASE\_BLK\_EN = 0时，Sector是最小的擦除单元，它的单位是“块”。Sector的值等于CSD寄存器中的SECTOR\_SIZE的值+1。

WP Group: 　　

　　最小的写保护单元，它的单位是“扇区”。

**3、Buffer**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_006_ef3f45fa69c3.png)

　　SD Card的Buffer最大容量定义在CSD寄存器的READ\_BL\_LEN和WRITE\_BL\_LEN。它们的值是一样的，而且有可能超过512字节，尽管这样Block还是要设置成512字节，因为512字节是数据边界（这句话不是太理解）。也就是SD卡上有数据传输缓冲器Buffer，不同的产品可能不一样，但是在使用时要将Buffer设置成512字节。

> 参考资料：　　
> 
> 　　The card buffer size is described as maximum block length in the Card Specif ic Data (CSD) register for memory cards (for cards compliant with the Physical Layer Specification, READ\_BL\_LEN and WRITE\_BL\_LEN shall be the same) and in the Card Information Structure (CIS) for SDIO cards. Physical Layer Specification re-defines that maximum block length is only used to calculate capacity of memory card. Even though it indi cates larger than 512 bytes, block length shall be set to 512 byte for data transfer. This is because 512 bytes block l ength is required to keep compatibility with 512 bytes data boundary.
> 
> (摘自《Simplified\_SD\_Host\_Controller\_Spec.pdf》)

**4、“存储阵列Block”--最小的存储单元**

　　资料上的Block通通指的是数据传输时的最小单元，定义这个数值是为了数据传输、CRC校验等。

　　存储阵列通常采用NandFlash的结构，显然不能按字节存取，而这里讨论的“存储阵列Block”就是指这个概念。可惜的是目前，我还没有找到资料讨论这个问题，所以这一章节是笔者自己的推测。

　　据我推测存储阵列Block应该是512Byes，因为众多的数据都围绕着512Bytes在转。比如说最小的擦除单元是512Byes，最小的读写单位应该被设置成512Bytes，那么有理由推测是这个数值。

**5、SD卡特殊功能寄存器**

-   CID：　　宽度128位，卡标识号
    
-   RCA:　　宽度16位，卡相对地址，在初始化的时候确定
    
-   CSD:　　宽度128位，卡描述数据：卡操作条件的信息
    
-   SCR:　　宽度64位，SD卡配置寄存器：SD卡特定信息数据
    
-   OCR:　　宽度32位，操作条件寄存
    

**三、SDIO接口**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_007_eedfa9a4cceb.png)

**四、SD卡协议之数据读、写、擦除**

**1、SD卡写数据块**　

　　执行写数据块命令(CMD24-27) 时，主机把一个或多个数据块从主机传送到卡中，同时在每个数据块的末尾传送一个CRC码。主机传送数据，SD卡接收数据并将数据保存在Buffer中，累计接收数据达到Block长度的时候，SD卡把接下来的数据当做CRC校验码，并且开始数据校验。如果CRC校验错误，卡通过SDIO\_D 线指示错误，传送的数据被丢弃而不被写入，所有后续(在多块写模式下)传送的数据块将被忽略。

     如果主机传送部分数据而累计的数据长度未与数据块对齐，当不允许块错位( 未设置CSD的参数WRITE\_BLK\_MISALIGN)，卡将在第一个错位的块之前检测到块错位错误( 设置状态寄存器中的ADDRESS\_ERROR 错误位) 。当主机试图写一个写保护区域时，写操作也会被中止，此时卡会设置WP\_VIOLATION位。　

　　数据块Block的最大长度定义在CSD中的WRITE\_BL\_LEN，但是在数据传输时应该用CMD16指令将其设置为512Byets，不去在意WRITE\_BL\_LEN是1024或者2048Bytes。

　　另外需要注意的是，Block的长度设置还要参考CSD寄存器的WRITE\_BL\_PARTIAL。当WRITE\_BL\_PARTIAL为0时，那么么办法Block只能设置为512Bytes；如果WRITE\_BL\_PARTIAL=1，那么允许将Block设置成更小的块，比如说一个字节。协议是这样规定的，但是据我分析如果这样的话SD卡的制作会非常复杂（写入的单位可以是字节），价格也会很高。笔者测试了自己的SD卡，WRITE\_BL\_PARTIAL 等于0，也就是不支持“块部分写”功能。 

**2、SD卡读数据块**

　　在读数据块模式下，数据传输的基本单元是数据块Block。为保证数据传输的正确，传输一个数据块Blcok后都有一个CRC校验码。笔者认为主机在累计接收到Block长度数据后，软件可以把接下来的数据当做CRC校验码，并且进行校验。

　　Block的最大值在CSD中(READ\_BL\_LEN) 给出了定义，但是在数据传输时应该用CMD16指令将其设置为512Byets，不去在意READ\_BL\_LEN是1024或者2048Bytes。

　　如果CSD寄存器中的READ\_BL\_PARTIAL等于1，可以传送的较小数据块，较小数据块是指开始和结束地址完全包含在一个物理块中。事实上，协议规定READ\_BL\_PARTIAL永远等于1，也就说在任何SD卡上都允许“读部分块”，读的块的最小字节是1Bytes。使用这种功能，可以通过CMD16命令设置更小的Block（比如说等于128）。读取的这128字节必须在512Bytes边界内，不能跨越边界(其实因为存储阵列是以512Bytes为单位的，读取“部分块”只能在一个块内，不允许跨块读)。

**3、擦除SD卡**

　　CSD寄存器ERASE\_BLK\_EN决定了SD卡的最小擦除单位。

　　当ERASE\_BLK\_EN等于0的时候，主机擦除的最小单位是扇区。比如一个Sector包含32个Block，擦除时的起始地址是5，而结束地址是40，那么实际擦除的块是从0到63。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_008_f1f148d33fe4.png)

　　当ERASE\_BLK\_EN等于1的时候，主机擦除的最小单位是512 Byetes。比如擦除时的起始地址是5，而结束地址是40，那么实际擦除的块就是从5到40。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_009_e95abbee44b3.png)

**五、SD卡物理层协议**

　　SD卡的协议相对于SPI、I2C等协议的存储器来说相对复杂，包含SD卡物理层（机械封装、管脚、芯片结构、命令集等）、SD卡接口（SDIO）、SD主机控制器，甚至是软件设计的流程，都进行了详细的规定。

**1、接口**

**① SDIO接口**

　　参考《Simplified\_SDIO\_Card\_Spec.pdf》

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_010_fa72f2103947.png)

<1> CLK 时钟同步线

<2> CMD 命令信号线，主机发出的命令以及从机对命令的响应都是通过这条线进行传输

<3> DAT\[3:0\] 表示4条数据线，主机和从机的数据都是从这四条数据线上传输

**② SPI接口**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_011_7cf3789432b1.png)

**2、命令格式**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_012_c70164a733ff.png)

**3、响应格式**

　　以R1为例

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_013_d6c93b71ca84.png)

**4、SD卡的工作状态**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_014_c1351d0c42e3.png)

**5、SD卡的两种状态信息**

**① Card Status**

　　执行命令过程中的状态信息，比如地址不对齐错误、块长度错误、卡锁、ECC校验错误等等

**② SD Status**

　　SD卡的专有特征，编程中不经常涉及。这个状态值有512位，不是通过命令线传送给主机，而是通过数据线。

**六、STM32与SD卡相配的外设--SDIO适配器**

 **1、SDIO adapter 结构图**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_015_2855b9e7a8ce.png)

**2、命令状态机（CPSM)**

　　当发送命令和接收响应时，启动CPSM状态机。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_016_af42e46769d4.png)

**3、数据通道状态机**

　　当传输数据时，启动数据通道状态机。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_017_07b2234c6def.png)

**4、FIFO**

　　有关FIFO的资料参考：异步FIFO的FPGA实现

　　数据FIFO(先进先出)子单元是一个具有发送和接收单元的数据缓冲区。

　　FIFO包含一个每字32位宽、共32个字的数据缓冲区，和发送与接收电路。因为数据FIFO工作在AHB 时钟区域(HCLK/2)，所有与SDIO时钟区域(SDIOCLK)连接的信号都进行了重新同步。依据TXACT和RXACT标志，可以关闭FIFO、使能发送或使能接收。TXACT和RXACT 由数据通道子单元设置而且是互斥的：

　　　　─ 当 TXACT 有效时，发送 FIFO 代表发送电路和数据缓冲区  
　　　　─ 当 RXACT 有效时，接收 FIFO 代表接收电路和数据缓冲区

**5、SDIO的特殊功能寄存器**

-   SDIO电源控制寄存器(SDIO\_POWER)
    
-   SDIO时钟控制寄存器(SDIO\_CLKCR) : 时钟选择、分频
    
-   SDIO参数寄存器(SDIO\_ARG)
    
-   SDIO命令寄存器(SDIO\_CMD)：控制发送命令
    
-   SDIO命令响应寄存器(SDIO\_RESPCMD)：包含响应命令中的命令索引
    
-   SDIO响应1..4寄存器(SDIO\_RESPx)：包含响应命令中的卡状态信息
    
-   SDIO数据定时器寄存器(SDIO\_DTIMER)
    
-   SDIO数据长度寄存器(SDIO\_DLEN)：读或者写的长度，通常是是512的倍数
    
-   SDIO数据控制寄存器(SDIO\_DCTRL)：控制数据的读写方向、使能传输等信息
    
-   SDIO数据计数器寄存器(SDIO\_DCOUNT)：当DPSM状态机从Idle state切换到Wait\_R或者Wait\_S状态时，SDIO\_LEN的数值加载到该寄存器中
    
-   SDIO状态寄存器(SDIO\_STA)
    
-   SDIO清除中断寄存器(SDIO\_ICR)
    
-   SDIO中断屏蔽寄存器(SDIO\_MASK)
    
-   SDIO FIFO计数器寄存器(SDIO\_FIFOCNT)：当SDIO\_DCTRL中的DTEN使能，并且DPSM处于Idle state时，SDIO\_LEN/4的数值加载到该寄存器中
    
-   SDIO数据FIFO寄存器(SDIO\_FIFO)：读写数据缓冲FIFO
    

**七、SD卡编程**

　　SD卡的编程在STM32官方固件库中就有例程，而且野火开发板对该例程进行了中文注释，不必再把源码贴入。这里着重讲一下SD卡编程流程，主要包含SD卡初始化、SD卡读、SD卡写、SD卡擦除。

**1、SD卡编程的内容**

　　SD卡主要就是用来存储数据的，所以核心就是读写。为了实现这个目标，必须实现响应的驱动。

　　配置过程中，不仅要设置好SD控制器，还需要将SD卡设置到合适的状态。在读取状态的时候，不仅涉及到SD控制器的状态，还涉及到SD卡的状态。

**2、SD卡初始化**

**① STM32外设SDIO初始化**

1.  端口配置、端口时钟、SDIO时钟、DMA2时钟使能
    
2.  SDIO寄存器复位
    
3.  设置时钟SDIO\_CK为400KHz以下，设置数据线宽度，开启时钟、开启SDIO电源
    

**② SD卡上电初始化**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_018_7f9f2f00ef7b.png)

　　上电初始化流程如上图所示，笔者认为官方库提供的例程没有完全按照这个流程图的指示去做。事实上，官方库的程序只做了如上图红色方框内的流程，之外的没涉及。

　　CMD0命令复位所有的卡。

　　SD协议规定：在初始化的时候，使用ACMD41之前，必须先使用CMD8命令。而且ACMD41命令属于应用命令，在使用之前需要先发送命令CMD55。

　　CMD8命令是为了核查电源是否匹配。ACMD41命令不断询问SD卡是否支持主机提供的电压，并且询问SD卡是否上电完成进入准备状态。ACMD41命令还能询问SD卡的类型（SDSC、SDHC）。

**③卡进一步核查、获取卡信息**

　　发送命令CMD2，以获取CID信息。

　　发送命令CMD3，以获取RCA相对地址，可以通过多次发送CMD3获取不同的RCA值，但是只有最后一次的才是有效的RCA地址。

　　发送命令CMD9，以获取CSD寄存器。

**④ 设置SDIO工作在数据传输模式**

　　设置SDIO的时钟为24MHz、数据线宽度为4位。

　　通过SD\_GetCardInfo函数将之前得到CID、CSD处理成卡的信息。

　　通过CMD7命令选择匹配地址的卡，而取消选择其他的卡。

　　至此，初始化完成。

**3、读SD卡的一个块**

-   　数据控制寄存器（SDIO\_DCTRL）清零
    
-   　发送命令CMD16，设置SD卡的Block大小
    
-   　调用函数SDIO\_DataConfig设置SDIO数据传输方式
    
-   　发送命令CMD17，读单个块
    
-   　SDIO数据传输结束中断使能
    
-   　SDIO的DMA传输功能使能
    
-   　DMA设置，并使能
    

**4、写SD卡的一个块** 

-   　数据控制寄存器（SDIO\_DCTRL）清零
    
-   　发送命令CMD16，设置SD卡的Block大小
    
-   　发送命令CMD24，写单个块
    
-   　调用函数SDIO\_DataConfig设置SDIO数据传输方式
    
-   　SDIO数据传输结束中断使能
    
-   　DMA设置，并使能
    
-   　使能SDIO的DMA传输功能 
    

**八、SD卡疑惑**

**1、SD卡擦除后，其中的内容是0，还是1 ？** 

　　The data at the card after an erase operation is either '0' or '1', depends on the card vendor.The SCR register bit DATA\_STAT\_AFTER\_ERASE (bit 55) defines whether it is '0' or '1'.(摘自《SD Specifications\_Part\_1\_Physical\_Layer\_Specification\_Ver3.00\_Final\_090416.pdf》)

　　也就是说这是芯片厂商生产工艺决定的，可以通过SCR寄存器的 DATA\_STAT\_AFTER\_ERASE位得知。

 **2、在SDIO\_DCTRL中设置传输Block的要求**

　　Block大小决定了主机在发送数据时，发送到什么程度时开始发送CRC校验码；而在接收数据时，在接收到什么程度时开始把SD卡的数据作为CRC校验码并进行校验。Block还可能影响着其他的时序。在STM32的SDIO寄存器组中，SDIO\_DCTRL中的位段DBLOCKSIZE决定主机Block大小。

　　在摘自《Simplified\_SD\_Host\_Controller\_Spec.pdf》的引文中，提到这样的配置要求：主机的Block一定要与SD卡设置的Block一样大小，这显然是必要的。我们经常设置SD卡的Block大小是512Bytes，所以设置DBLOCKSIZE为9（2^9 = 512）。

**3、STM32固件库“stm32\_eval\_sdio\_sd.c version v4.5.0”偶遇BUG**

　　参考网页：http://www.cprogramdevelop.com/3742318/

**4、SD卡写Block是怎样进行的？**

　　写SD卡的单位是Block（512Bytes），再写之前要先整块擦除，然后才能写。

　　在多块写操作中，可以在发送多块写命令CMD25之前，有选择性的先发送命令ACMD23设置预擦除。怎样理解呢？

　　既然是有选择性的，也可以不发送ACMD23命令。在多块写的过程中，由于SD卡事先不知道你要写入几个块（CMD25命令只告诉SD卡要写入的起始地址），所以写入的过程是：根据需要判断要写一个块时，先擦除然后再写，再判断是否要写入下一个块，如果是就再擦除再写。

　　倘若发送ACMD23命令就不一样了，ADM23命令会在写命令CMD25生效之前，告诉SD卡准备写入的块数N。这样当CMD25命令生效的时候，SD卡会一次性先将这N个块都擦除，然后再一个块一个块写。由于擦除操作比较集中，所以整个多块写操作更节省时间。

**九、SD卡参数测试**

　　使用野火开发板配套例程做测试，笔者测试用的SD卡是金士顿的2G内存块，打印SD卡的参数信息如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_019_b7e6139fc43c.png)

Card Type is ：1  
ManufacturerID is ：2  
  
Card device size is ：3795  
Card Block Size is ：1024  
Card device size multiplier is ：7  
Card Capacity is ：1990197248  
  
the maximum read date block length is ：1024  
partial blocks for write allowed is ：0  
the maximum write date block length is ：1024  
erase single block enable is ：1  
erase sector size is ：127  
write protect group size is ：0  
RCA is ：4660 

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解_STM32_之_SD_卡_images\img_020_b7e6139fc43c.png)

Card Type：1         SDSC卡版本2.0

Card device size：　 C\_SIZE（CSD），为3795

Card Block Size:　　max read data block length(READ\_BL\_LEN（CSD）) ，为1024 Bytes

Card device size multiplier is:  C\_SIZE\_MULT（CSD），为7

Card Capacity：　　1990197248 Bytes

计算方法（摘自《Simplified\_Physical\_Layer\_Spec.pdf》）：

> memory capacity = BLOCKNR \* BLOCK\_LEN  
>    
> 　　BLOCKNR = (C\_SIZE+1) \* MULT  （C\_SIZE <= 4096）  
> 　　MULT = 2^(C\_SIZE\_MULT+2)        (C\_SIZE\_MULT < 8)  
> 　　BLOCK\_LEN = 2^READ\_BL\_LEN,    (READ\_BL\_LEN < 12)
> 
> 注意：SDSC最大为2GB。

the maximum read date block length：READ\_BL\_LEN（CSD） ，为1024 Bytes

partial blocks for write allowed：WRITE\_BL\_PARTIAL（CSD），为不支持

the maximum write date block length：WRITE\_BL\_LEN（CSD） ，为1024 Bytes

erase single block enable：ERASE\_BLK\_EN（CSD），为1，支持单块擦除

erase sector size：SECTOR\_SIZE（CSD），实际扇区擦除的block数为（SECTOR\_SIZE+1），为128 Blocks

write protect group size:WP\_GRP\_SIZE（CSD），实际保护的扇区数为（WP\_GRP\_SIZE+1），为1 Sector

RCA: SD卡相对地址为4660  

参考资料：《Simplified\_SDIO\_Card\_Spec.pdf》

　　　　　《Simplified\_Physical\_Layer\_Spec.pdf》

　　　　   《Simplified\_SD\_Host\_Controller\_Spec.pdf》

　　　　　《STM32芯片手册》

  

文章来源：博客园

文章连接：https://www.cnblogs.com/amanlikethis/p/3757876.html

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。