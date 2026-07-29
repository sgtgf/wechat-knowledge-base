# DMA基础介绍

原创 硬件笔记本 2022-11-13 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/Cb8ewIpywb6\_y7Ew1nhPTw](https://mp.weixin.qq.com/s/Cb8ewIpywb6_y7Ew1nhPTw)

**![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")**

  

**DMA的基本介绍**

### 什么是DMA (DMA的基本定义)

**DMA，全称Direct Memory Access，即直接存储器访问。**

**DMA传输将数据从一个地址空间复制到另一个地址空间，提供在外设和存储器之间或者存储器和存储器之间的高速数据传输**。

我们知道CPU有转移数据、计算、控制程序转移等很多功能，**系统运作的核心就是CPU**。

CPU无时不刻的在处理着大量的事务，但有些事情却没有那么重要，比方说数据的复制和存储数据，如果我们把这部分的CPU资源拿出来，让CPU去处理其他的复杂计算事务，是不是能够更好的利用CPU的资源呢？

因此：转移数据（尤其是转移大量数据）是可以不需要CPU参与。比如希望外设A的数据拷贝到外设B，**只要给两种外设提供一条数据通路，直接让数据由A拷贝到B，不经过CPU的处理**。![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_002_59ee6f2096ab.png)

DMA就是基于以上设想设计的，它的作用就是解决大量数据转移过度消耗CPU资源的问题。有了DMA使CPU更专注于更加实用的操作–计算、控制等。

### DMA定义

**DMA用来提供在外设和存储器之间或者存储器和存储器之间的高速数据传输。无须CPU的干预，通过DMA数据可以快速地移动。这就节省了CPU的资源来做其他操作。**

### DMA传输方式

**DMA的作用就是实现数据的直接传输，而去掉了传统数据传输需要CPU寄存器参与的环节**，主要涉及四种情况的数据传输，但本质上是一样的，都是从内存的某一区域传输到内存的另一区域（外设的数据寄存器本质上就是内存的一个存储单元）。

四种情况的数据传输如下：

-   外设到内存
    
-   内存到外设
    
-   内存到内存
    
-   外设到外设
    

### DMA传输参数

我们知道，数据传输，**首先需要的是：1 数据的源地址，2 数据传输位置的目标地址，3 传递数据多少的数据传输量，4 进行多少次传输的传输模式**。DMA所需要的核心参数，便是这四个。

当用户将参数设置好，主要涉及**源地址、目标地址、传输数据量**这三个，DMA控制器就会启动数据传输，当剩余传输数据量为0时，达到传输终点，结束DMA传输。当然，**DMA 还有循环传输模式**。当到达传输终点时，会重新启动DMA传输。也就是说，只要剩余传输数据量不是0，而且DMA是启动状态，那么就会发生数据传输。![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_003_0de4f0d975da.png)

### DMA的主要特征

每个通道都直接连接专用的硬件DMA请求，每个通道都同样支持软件触发。这些功能通过软件来配置：

-   在同一个DMA模块上，多个请求间的优先权可以通过软件编程设置（共有四级：很高、高、中等和低），优先权设置相等时由硬件决定（请求0优先于请求1，依此类推）；
    
-   独立数据源和目标数据区的传输宽度（字节、半字、全字），模拟打包和拆包的过程。源和目标地址必须按数据传输宽度对齐；
    
-   支持循环的缓冲器管理；
    
-   每个通道都有3个事件标志（DMA半传输、DMA传输完成和DMA传输出错），这3个事件标志逻辑或成为一个单独的中断请求；
    
-   存储器和存储器间的传输、外设和存储器、存储器和外设之间的传输；
    
-   闪存、SRAM、外设的SRAM、APB1、APB2和AHB外设均可作为访问的源和目标；
    
-   可编程的数据传输数目：最大为65535。
    

### STM32少个DMA资源？

对于大容量的STM32芯片有两个DMA控制器，DMA1有7个通道，DMA2有5个通道。每个通道都可以配置一些外设的地址。

**①DMA1 controller**

从外设（TIMx\[x=1、2、3、4\]、ADC1、SPI1、SPI/I2S2、I2Cx\[x=1、2\]和USARTx\[x=1、2、3\]）产生的7个DMA请求，通过逻辑或输入到DMA1控制器，其中每个通道都对应着具体的外设：![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_004_c67ccbad49f6.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_005_d615677a696f.png)

**② DMA2 controller**

从外设（TIMx\[5、6、7、8\]、ADC3、SPI/I2S3、UART4、DAC通道1、2和SDIO）产生的5个请求，经逻辑或输入到DMA2控制器，其中每个通道都对应着具体的外设：![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_006_40c7f5fb0baa.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_007_c8543b287600.png)

这些在下方系统框图中，也可以清晰地看到。

### DMA工作系统框图

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_008_b926b4e531bc.png)

上方的框图，我们可以看到STM32内核，存储器，外设及DMA的连接，这些硬件最终通过各种各样的线连接到总线矩阵中，硬件结构之间的数据转移都经过总线矩阵的协调，使各个外设和谐的使用总线来传输数据。我们对他来进行一点一点的分析：

下面看有与没有DMA的情况下，ADC采集的数据是怎样存放到SRAM中的？

**没有DMA**

1.如果没有DMA,CPU传输数据还要以内核作为中转站，比如要将ADC采集的数据转移到到SRAM中，这个过程是这样的：

内核通过DCode经过总线矩阵协调，从获取AHB存储的外设ADC采集的数据，

**然后内核再通过DCode经过总线矩阵协调把数据存放到内存SRAM中。**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_009_86f6ab4103c0.png)

在这里插入图片描述

  

**有DMA传输**

有DMA的话：

1.  **DMA传输时外设对DMA控制器发出请求。**
    
2.  **DMA控制器收到请求，触发DMA工作。**
    
3.  **DMA控制器从AHB外设获取ADC采集的数据，存储到DMA通道中。**
    
4.  **DMA控制器的DMA总线与总线矩阵协调，使用AHB把外设ADC采集的数据经由DMA通道存放到SRAM中，这个数据的传输过程中，完全不需要内核的参与，也就是不需要CPU的参与。**
    

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_010_e11df7326d2f.png)

在这里插入图片描述

  

我们把上面的步骤专业一点介绍：

在发生一个事件后，外设向DMA控制器发送一个**请求信号**。DMA控制器根据通道的优先权处理请求。当DMA控制器开始访问发出请求的外设时，DMA控制器立即发送给它一个**应答信号**。当从DMA控制器得到应答信号时，外设立即释放它的请求。一旦外设释放了这个请求，DMA控制器同时撤销应答信号。**DMA传输结束**，如果有更多的请求时，外设可以启动下一个周期。

总之，每次DMA传送由3个操作组成：

-   **从外设数据寄存器或者从当前外设/存储器地址寄存器指示的存储器地址取数据，第一次传输时的开始地址是DMA\_CPARx或DMA\_CMARx寄存器指定的外设基地址或存储器单元；**
    
-   **存数据到外设数据寄存器或者当前外设/存储器地址寄存器指示的存储器地址，第一次传输时的开始地址是DMA\_CPARx或DMA\_CMARx寄存器指定的外设基地址或存储器单元；**
    
-   **执行一次DMA\_CNDTRx寄存器的递减操作，该寄存器包含未完成的操作数目**。
    

### DMA传输方式

方法1：**DMA\_Mode\_Normal**，**正常模式。**

当一次DMA数据传输完后，停止DMA传送，也就是只传输一次。

方法2：**DMA\_Mode\_Circular**，**循环传输模式。**

当传输结束时，硬件自动会将传输数据量寄存器进行重装，进行下一轮的数据传输。也就是多次传输模式。

### 仲裁器

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_011_1c44a8a0fe53.png)

**仲裁器的作用是确定各个DMA传输的优先级。**

**仲裁器根据通道请求的优先级来启动外设/存储器的访问。**

优先权管理分2个阶段：

软件：每个通道的优先权可以在DMA\_CCRx寄存器中设置，有**4个等级**：

-   最高优先级
    
-   高优先级
    
-   中等优先级
    
-   低优先级；
    

硬件：如果2个请求有相同的软件优先级，则较低编号的通道比较高编号的通道有较高的优先权。比如：如果软件优先级相同，通道2优先于通道4。

注意：在大容量产品和互联型产品中，DMA1控制器拥有高于DMA2控制器的优先级。

### DMA数据流(仅存在于STM32F4/M4内核上)

**在设置了DMA的通道之后，还要选择通道对应外设的数据流。**

8 个 DMA 控制器数据流都能够提供源和目标之间的单向传输链路。每个数据流配置后都可以执行：

-   常规类型事务：存储器到外设、外设到存储器或存储器到存储器的传输。
    
-   双缓冲区类型事务：使用存储器的两个存储器指针的双缓冲区传输（当 DMA 正在进行自/至缓冲区的读/写操作时，应用程序可以进行至/自其它缓冲区的写/读操作）。要传输的数据量（多达 65535）可以编程，并与连接到外设 AHB 端口的外设（请求 DMA 传输）的源宽度相关。每个事务完成后，包含要传输的数据项总量的寄存器都会递减。
    

DMA\_SxCR 寄存器控制数据流到底使用哪一个通道，每个数据流有 8 个通道可供选择，每次只能选择其中一个通道进行 DMA 传输。接下来，我们看看 DMA2 的各数据流通道映射表，如表 28.1.1 所示：![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_012_07cc86942d65.png)

### DMA传输通道

每个通道都可以在有固定地址的外设寄存器和存储器地址之间执行DMA传输。DMA传输的数据 量是可编程的，大达到65535。包含要传输的数据项数量的寄存器，在每次传输后递减。

可编程的数据量：外设和存储器的传输数据量可以通过DMA\_CCRx寄存器中的PSIZE和MSIZE位编程。

### 指针递增模式

**根据 DMA\_SxCR 寄存器中 PINC 和 MINC 位的状态，外设和存储器指针在每次传输后可以自动向后递增或保持常量。当设置为增量模式时，下一个要传输的地址将是前一个地址加上增量值。**

通过单个寄存器访问外设源或目标数据时，禁止递增模式十分有用。

如果使能了递增模式，则根据在 DMA\_SxCR 寄存器 PSIZE 或 MSIZE 位中编程的数据宽度，下一次传输的地址将是前一次传输的地址递增 1个数据宽度、2个数据宽度或 4个数据宽度。

### 存储器到存储器模式

**DMA通道的操作可以在没有外设请求的情况下进行，这种操作就是存储器到存储器模式。**

当设置了DMA\_CCRx寄存器中的MEM2MEM位之后，在软件设置了DMA\_CCRx寄存器中的EN位启动DMA通道时，DMA传输将马上开始。当DMA\_CNDTRx寄存器变为0时，DMA传输结束。存储器到存储器模式不能与循环模式同时使用。

这里要注意仅 DMA2 的外设接口可以访问存储器，所以仅 DMA2 控制器支持存储器到存储器的传输，DMA1 不支持。

**存储器到存储器模式不能与循环模式同时使用。**

### DMA中断

**每个DMA通道都可以在DMA传输过半、传输完成和传输错误时产生中断**。为应用的灵活性考虑，通过设置寄存器的不同位来打开这些中断。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_013_c68895421a94.png)

使没开启，我们也可以通过查询这些位来获得当前 DMA 传输的状态。这里我们常用的是 TCIFx位，即数据流 x 的 DMA 传输完成与否标志。

可编程的数据传输宽度、对齐方式和数据大小端，当PSIZE和MSIZE不相同时，DMA模块按照下图进行数据对齐。

注意：在大容量产品中， DMA2 通道 4 和 DMA2 通道 5 的中断被映射在同一个中断向量上。在互联型产品中， DMA2 通道 4 和 DMA2 通道 5 的中断分别有独立的中断向量。所有其他的 DMA 通道都有自己的 中断向量。

### DMA的内存占用

在STM32控制器中，芯片采用Cortex-MX架构，总线结构有了很大的优化，DMA占用另外的**地址总线**，并不会与CPU的系统总线发生冲突。也就是说，DMA的使用不会影响CPU的运行速度。

但是要注意：DMA 控制器和Cortex-M3核共享系统**数据总线**执行直接存储器数据传输。当CPU和DMA同时访问相同的目标(RAM或外设)时，DMA请求可能会停止 CPU访问系统总线达若干个周期，总线仲裁器执行循环调度，以保证CPU至少可以得到一半的系统总线(存储器或外设)带宽。

# DMA配置部分

此部分我们分为DMA寄存器和DMA库函数分别介绍：

### DMA寄存器

DMA配置参数包括：**通道地址、优先级、数据传输方向、存储器/外设数据宽度、存储器/外设地址是否增量、循环模式、数据传输量。**

### DMA中断状态寄存器(DMA\_ISR)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_014_9dc7f4b4efa9.png)

我们如果开启了 DMA\_ISR 中这些中断，在达到条件后就会跳到中断服务函数里面去，即使没开启，我们也可以通过查询这些位来获得当前 DMA 传输的状态。这里我们常用的是 TCIFx，即通道 DMA 传输完成与否的标志。

**注意此寄存器为只读寄存器，所以在这些位被置位之后，只能通过其他的操作来清除。**

### DMA中断标志清除寄存器(DMA\_IFCR)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_015_f5d3ed8a5849.png)

DMA\_IFCR 的各位就是用来清除 DMA\_ISR 的对应位的，通过写 0 清除。在 DMA\_ISR 被置位后，我们必须通过向该位寄存器对应的位写入 0 来清除。

### DMA通道x配置寄存器(DMA\_CCRx)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_016_3cd22824fdcb.png)

该寄存器控制着 DMA 的很多相关信息，包括数据宽度、外设及存储器的宽度、通道优先级、增量模式、传输方向、中断允许、使能等都是通过该寄存器来设置的。所以，**DMA\_CCRx 是 DMA 传输的核心控制寄存器。**

### DMA通道x传输数量寄存器(DMA\_CNDTRx)(x = 1…7)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_017_c24bf9276009.png)

这个寄存器控制 DMA 通道 x 的每次传输所要传输的数据量。其设置范围为 0~65535。并且该寄存器的值会随着传输的进行而减少，当该寄存器的值为 0 时，就代表此次数据传输已经全部发送完成了。所以，可以通过这个寄存器的值来知道当前 DMA 传输的进度。

### DMA通道x外设地址寄存器(DMA\_CPARx)(x = 1…7)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_018_0b41b695b948.png)

该寄存器用来存储 STM32 外设的地址，比如我们使用串口 1，那么该寄存器必须写入 0x40013804（其实就是&USART1\_DR）。如果使用其他外设，就修改成相应外设的地址就行了。

### DMA通道x配置寄存器（DMA\_CMARx）

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_019_41ff504fc466.png)  

该寄存器和 DMA\_CPARx 差不多，不过是用来放存储器的地址的。比如我们使用 SendBuf\[5200\]数组来做存储器，那么我们在 DMA\_CMARx 中写入&SendBuff 就可以了。

### DMA寄存器配置流程

通道配置过程，下面是配置DMA通道x的过程(x代表通道号)：

1.  **在DMA\_CPARx寄存器中设置外设寄存器的地址。发生外设数据传输请求时，这个地址将是数据传输的源或目标。**
    
2.  **在DMA\_CMARx寄存器中设置数据存储器的地址。发生外设数据传输请求时，传输的数据将从这个地址读出或写入这个地址。**
    
3.  **在DMA\_CNDTRx寄存器中设置要传输的数据量。在每个数据传输后，这个数值递减。**
    
4.  **在DMA\_CCRx寄存器的PL\[1:0\]位中设置通道的优先级。**
    
5.  **在DMA\_CCRx寄存器中设置数据传输的方向、循环模式、外设和存储器的增量模式、外设和存储器的数据宽度、传输一半产生中断或传输完成产生中断。**
    
6.  **设置DMA\_CCRx寄存器的ENABLE位，启动该通道。**
    

一旦启动了DMA通道，它既可响应连到该通道上的外设的DMA请求。当传输一半的数据后，半传输标志(HTIF)被置1，当设置了允许半传输中断位(HTIE)时，将产生一个中断请求。在数据传输结束后，传输完成标志(TCIF)被置1，当设置了允许传输完成中断位 (TCIE)时，将产生一个中断请求。

### DMA库函数

1.DMA初始化函数

 `DMA_DeInit(DMAX_ChannelX);`

**功能**：将DMAyChannelx寄存器的初始化为其默认值。

注释：RCC\_ResetCmd中对DMA无定义，因此采用的直接操纵DMA寄存器的方式。

`void DMA_Init(DMA_Channel_TypeDef* DMAy_Channelx,  DMA_InitTypeDef* DMA_InitStruct)` 

**功能**：设置要开启的通道，还有一些参数，包括外设基地址，存储器基地址，传输的数据量，增量模式，数据宽度等。

具体看下方结构体代码介绍：

`typedef struct {      uint32_t DMA_PeripheralBaseAddr;       /*设置DMA源地址*/    uint32_t DMA_MemoryBaseAddr;           /*设置DMA目的地址*/    uint32_t DMA_DIR;     /* 设置数据传输方向，决定是从外设读取数据到内存还送从内存读取数 据发送到外设，也就是外设是源地还是目的地    */                           uint32_t DMA_BufferSize;          /*设置传输大小*/        uint32_t DMA_PeripheralInc;           /*设置ReceiveBuff地址是否自增*/          uint32_t DMA_MemoryInc;     /*设置传输数据时候内存地址是否递，需要开启*/           uint32_t DMA_PeripheralDataSize;       /*外设的数据长度是为字节传输（8bits），半 字传输(16bits) 还是字传输(32bits) */        uint32_t DMA_MemoryDataSize;          /*设置内存的数据长度*/    uint32_t DMA_Mode;          /*设置DMA的模式，正常模式/循环模式  是否循环发送*/            uint32_t DMA_Priority;      /*设置 DMA 通道的优先级，有低，中，高，超高四种模式*/            uint32_t DMA_M2M;         /*设置是否是存储器到存储器模式传输，*/       }    DMA_InitTypeDef;` 

2.DMA使能函数

`void DMA_Cmd(DMA_Channel_TypeDef* DMAy_Channelx, FunctionalState  NewState);   `

**功能**：使能或者失能DMA外设。

例如：DMA\_Cmd(DMA1\_Channel1 , ENABLE);

3.DMA中断使能函数

`void DMA_ITConfig(DMA_Channel_TypeDef* DMAy_Channelx, uint32_t DMA_IT,  FunctionalState NewState);   1   `

**功能**：配置指定的DMAy通道x的中断。

注释：DMA\_IT\_TC：传输完成 DMA\_IT\_HT：传输一半 DMA\_IT\_TE：传输错误。

例如：DMA\_ITConfig(DMA1\_Channel1 , DMA\_IT\_TC , ENABLE);

4.设置CNDTRx和读CNDTRx函数 (**通道传输数据量**)

`void DMA_SetCurrDataCounter(DMA_Channel_TypeDef* DMAy_Channelx, uint16_t  DataNumber);    uint16_t DMA_GetCurrDataCounter(DMA_Channel_TypeDef* DMAy_Channelx);   12   `

作用：**前者设置DMA通道的传输数据量（DMA处于关闭状态）；后者获取当前DMA通道传输剩余数据量（DMA处于开启状态）。**

### DMA库函数配置过程

-   **使能DMA时钟：RCC\_AHBPeriphClockCmd();**
    
-   初始化DMA通道：DMA\_Init();
    

-   //设置通道；传输地址；传输方向；传输数据的数目；传输数据宽度；传输模式；优先级；是否开启存储器到存储器。
    

-   使能外设DMA
    
    ；
    

-   以串口为例：使能串口DMA发送，串口DMA使能函数。调用函数：USART\_DMACmd()；
    

-   **使能DMA通道传输；函数：DMA\_Cmd()；**
    
-   **查询DMA传输状态。函数：DMA\_GetFlagStatus()；**
    
-   **获取当前剩余数据量大小函数：DMA\_GetCurrDataCounter(DMA1\_Channel4);**
    

### UART DMA传输

DMA就是一个搬运工，可以将数据从一个位置搬运到另一个位置。以UART为例，如果要接收数据，会触发UART中断，然后CPU介入，在中断中通过CPU将UART输入寄存器的值读出来，存放到内存中；而DMA方式，产生UART中断后，DMA直接参与，把UART输入寄存器的值搬运到内存中，CPU只需要在去检查内存的值就好了，这样提高了CPU的效率。

### DMA代码配置

**① DMA初始化配置**

`void dma_init()   {         DMA_InitTypeDef DMA_InitStructure;     RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1,ENABLE);        /*DMA配置*/        DMA_InitStructure.DMA_PeripheralBaseAddr = USART1_DR_Base;//串口数据寄存器地址     DMA_InitStructure.DMA_MemoryBaseAddr = (uint32_t)SendBuff; //内存地址(要传输的变量的指针)     DMA_InitStructure.DMA_DIR = DMA_DIR_PeripheralDST; //方向(从内存到外设)     DMA_InitStructure.DMA_BufferSize = 500; //传输内容的大小     DMA_InitStructure.DMA_PeripheralInc = DMA_PeripheralInc_Disable; //外设地址不增     DMA_InitStructure.DMA_MemoryInc = DMA_MemoryInc_Enable; //内存地址自增     DMA_InitStructure.DMA_PeripheralDataSize =     DMA_PeripheralDataSize_Byte ; //外设数据单位     DMA_InitStructure.DMA_MemoryDataSize =     DMA_MemoryDataSize_Byte ; //内存数据单位     DMA_InitStructure.DMA_Mode = DMA_Mode_Normal ; //DMA模式：一次传输，循环     DMA_InitStructure.DMA_Priority = DMA_Priority_Medium ; //优先级：高     DMA_InitStructure.DMA_M2M = DMA_M2M_Disable; //禁止内存到内存的传输        DMA_Init(DMA1_Channel4, &DMA_InitStructure); //配置DMA1的4通道     DMA_Cmd(DMA1_Channel4,ENABLE);     DMA_SetCurrDataCounter(DMA_CH4,DMA1_MEM_LEN);//DMA通道的DMA缓存的大小     DMA_ITConfig(DMA1_Channel4,DMA_IT_TC,ENABLE);//配置DMA发送完成后产生中断       }   `

**DMA中断**

`void DMA1_Channel4_IRQHandler(void)   {    if(DMA_GetFlagStatus(DMA1_FLAG_TC4)==SET)    {         DMA_ClearFlag(DMA1_FLAG_TC4);    }   }   `

**main函数**

`#define SEND_BUF_SIZE 500 //发送数据长度,最好等于sizeof(TEXT_TO_SEND)+2的整数倍.       u8 SendBuff[SEND_BUF_SIZE]; //发送数据缓冲区   const u8 TEXT_TO_SEND[]={"STM32F1 DMA 串口实验"};    uint16_t i;   int main(void)   {        uart_init(115200);   //串口初始化为115200         for(i=0;i<500;i++)    {    SendBuff[i] =0xaf;    }     USART_DMACmd(USART1,USART_DMAReq_Tx,ENABLE);  //使能串口dma传输         while(1);   }`

![](D:\电脑文件\公众号知识库\电工_教育_学习\DMA基础介绍_images\img_020_1d6f8dadf84c.png)

**END**

****作者：初光****

****来源：车端****

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。