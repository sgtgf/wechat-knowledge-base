# UART、I2C、SPI、TTL、RS232、RS422、RS485、CAN、USB、SD卡、1-WIRE、Ethernet

原创 蜗牛 硬件笔记本 2021-05-31 08:21 undefined

> 原文地址: [https://mp.weixin.qq.com/s/g4MRb1ZXN\_9BbVdvpCEyxQ](https://mp.weixin.qq.com/s/g4MRb1ZXN_9BbVdvpCEyxQ)

UART、I2C、RS485……这些通信虽然都普遍在用，但解释起来也是模棱两可，觉得有必要整理一下，目的是巩固和区分。文章有点长，建议先收藏，需要的时候再拿出来看。

  

  

UART通用异步收发器​

  

UART口指的是一种物理接口形式(硬件)。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_000_9850285f5504.jpg)

UART是异步，全双工串口总线。它比同步串口复杂很多。有两根线，一根TXD用于发送，一根RXD用于接收。

  

UART的串行数据传输不需要使用时钟信号来同步传输，而是依赖于发送设备和接收设备之间预定义的配置。

  

对于发送设备和接收设备来说，两者的串行通信配置应该设置为完全相同。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_001_bbf978f610e3.jpg)

起始位：表示数据传输的开始，电平逻辑为“0” 。

  

数据位：可能值有5、6、7、8、9，表示传输这几个bit 位数据。一般取值为8，因为一个ASCII 字符值为8 位。

  

奇偶校验位：用于接收方对接收到的数据进行校验，校验“1” 的位数为偶数(偶校验) 或奇数(奇校验)，以此来校验数据传送的正确性，使用时不需要此位也可以。

  

停止位：表示一帧数据的结束。电平逻辑为“1”。

  

如果用通用IO口模拟UART总线，则需一个输入口，一个输出口。

  

  

I2C总线  

  

I2C总线是一种同步、半双工双向的两线式串口总线。它由两条总线组成：串行时钟线SCL和串行数据线SDA。

SCL线——负责产生同步时钟脉冲。

SDA线——负责在设备间传输串行数据。

  

该总线可以将多个I2C设备连接到该系统上。连接到I2C总线上的设备既可以用作主设备，也可以用作从设备。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_002_649f26a81ee1.jpg)

主设备负责控制通信，通过对数据传输进行初始化，来发送数据并产生所需的同步时钟脉冲。从设备则是等待来自主设备的命令，并响应命令接收。

  

主设备和从设备都可以作为发送设备或接收设备。无论主设备是作为发送设备还是接收设备，同步时钟信号都只能由主设备产生。

  

如果用通用IO口模拟I2C总线，并实现双向传输，则需一个输入输出口(SDA)，另外还需一个输出口(SCL)。

  

  

SPI串行外设接口

  

SPI总线是同步、全双工双向的4线式串行接口总线。它是由“单个主设备+多个从设备”构成的系统。

  

在系统中，只要任意时刻只有一个主设备是处于激活状态的，就可以存在多个SPI主设备。常运用于AD转换器、EEPROM、FLASH、实时时钟、数字信号处理器和数字信号解码器之间实现通信。

  

为了实现通信，SPI共有4条信号线，分别是：

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_003_ca4892c96c6d.jpg)(1)主设备出、从设备入（Master Out Slave In，MOSI）：由主设备向从设备传输数据的信号线，也称为从设备输入（Slave Input/Slave Data In，SI/SDI）。

  

(2)主设备入、从设备出（Master In Slave Out，MISO）：由从设备向主设备传输数据的信号线，也称为从设备输出（Slave Output/Slave Data Out，SO/SDO）。

  

(3)串行时钟（Serial Clock，SCLK）：传输时钟信号的信号线。

  

(4)从设备选择（Slave Select，SS）：用于选择从设备的信号线，低电平有效。

  

SPI 的工作时序模式由CPOL（Clock Polarity，时钟极性）和CPHA（Clock Phase，时钟相位）之间的相位关系决定，CPOL 表示时钟信号的初始电平的状态，CPOL 为0 表示时钟信号初始状态为低电平，为1 表示时钟信号的初始电平是高电平。CPHA 表示在哪个时钟沿采样数据，CPHA 为0 表示在首个时钟变化沿采样数据，而CPHA 为1 则表示在第二个时钟变化沿采样数据。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_004_e7a2b3cbcbf8.jpg)

UART、SPI、I2C比较

  

①I2C线更少，比UART、SPI更为强大，但是技术上也更加麻烦些，因为I2C需要有双向IO的支持，而且使用上拉电阻，抗干扰能力较弱，一般用于同一板卡上芯片之间的通信，较少用于远距离通信。

  

②SPI实现要简单一些，UART需要固定的波特率，就是说两位数据的间隔要相等，而SPI则无所谓，因为它是有时钟的协议。  

  

③I2C的速度比SPI慢一点，协议比SPI复杂一点，但是连线也比标准的SPI要少。

  

④UART一帧可以传5/6/7/8位，I2C必须是8位。I2C和SPI都从最高位开始传。

  

⑤SPI用片选信号选择从机，I2C用地址选择从机。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_005_18d6f8cfd318.jpg)

  

RS232串口通信

  

传输线有两根，地线一根。电平是负逻辑：

  

\-3V~-15V逻辑“1”，+3V~+15V逻辑“0”。

  

RS-232串口通信传输距离15米左右。可做到双向传输，全双工通讯，传输速率低20kbps 。

  

下图是DB9公头和母头的定义，一般用的最多的是RXD、TXD、GND三个信号。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_006_ead4cde94ee7.jpg)

  

TTL和RS-232互转

  单片机接口一般是TTL电平，如果接232电平的外设，就需要加TTL转RS232的模块。如下图，可用芯片MAX232进行转换。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_007_5dc6ac5da3b2.jpg)

  

  

RS422串口通信

  

RS-422有4根信号线：两根发送、两根接收和一根地线。全双工通信。

  

它有一个主设备，其余为从设备，从设备之间不能通信，所以RS-422支持点对多的双向通信。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_008_fff76b9625d0.jpg)

  

RS485串口通信

  

RS-485采用平衡发送和差分接收，因此具有抑制共模干扰的能力。

  

采用两线半双工传输，最大速率10Mb/s，电平逻辑是两线的电平差来决定的，提高抗干扰能力，传输距离长(几十米到上千米)。

  

+2V~+6V逻辑“1”，-2~-6V逻辑“0”。

  

TTL转成RS-485很常见，比如MAX485，参考电路如下

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_009_ae79f4a9d8d0.jpg)

RE引脚： 接收器输出使能（低电平有效）。

DE引脚： 发送器输出使能（高电平有效）。可以直接通过MCU的IO端口控制。

  

  

TTL

  

嵌入式里面说的串口，一般是指UART口。4个pin（Vcc,GND,RX,TX），用TTL电平。

  

PC中的COM口即串行通讯端口，简称串口。9个Pin，用RS232电平。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_010_f383ca466929.jpg)

串口、COM口是指的物理接口形式(硬件)。而TTL、RS-232、RS-485是指的电平标准(电信号)。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_011_b8c32a52ce6e.jpg)

  

单片机与PC通讯示意图如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_012_0437f583a135.jpg)

  

  

CAN总线

  

CAN是控制器局域网络的简称，是一种能够实现分布式实时控制的串行通信网络。CAN总线的功能复杂且智能。主要用于汽车通信。

  

CAN总线网络主要挂在CAN\_H和CAN\_L，各个节点通过这两条线实现信号的串行差分传输，为了避免信号的反射和干扰，还需要在CAN\_H和CAN\_L之间接上120欧姆的终端电阻。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_013_0c54bb2f277f.jpg)每一个设备既可做主设备也可做从设备。CAN总线的通信距离可达10千米（速率低于5Kbps），速度可达1Mbps（通信距离小于40M）。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_014_7e0bb8f4158b.jpg)

  

CAN电平逻辑

  

CAN总线采用"线与"的规则进行总线冲裁，1&0为0，所以称0为显性，1为隐性。

  

从电位上看，因为规定高电位为0，低电位为1，同时发出信号时实际呈现为高电位，从现象上看就像0覆盖了1，所以称0为显性，1为隐性。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_015_a47667a9a18c.jpg)

  

  

USB通信串行总线

  

USB接口最少有四根线，其中有两根是数据线，而所有的USB数据传输都是通过这两根线完成。它的通信远比串口复杂的多。

  

两根数据线采用差分传输，即需要两根数据线配合才能传输一个bit，因此是半双工通信，同一时间只能发送或者接收。

  

USB 规定，如果电压电平不变，代表逻辑1；如果电压电平变化，则代表逻辑0。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_016_1cecfdd568a3.jpg)USB转TTL

一般USB转串口都是用CH340G芯片。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_017_f2fde0674fcf.jpg)

  

用串口通信比USB简单，因为串口通信没有协议。

  

  

SD卡

  

SD卡是一种存储卡，可用于手机作为内存卡使用。

  

嵌入式中，单片机与SD卡通信有两种模式：

1\. SPI总线通信模式；

2\. SD总线通信模式。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_018_2e35d53563c4.jpg)

值得注意的是，SD总线模式中有4条数据线；SPI总线模式中仅有一条数据线（MOSI和MISO不能同时读数据，也不能同时写数据）；这样在嵌入式中，单片机与SD卡通信时采用SD总线模式比SPI总线模式速度快几倍。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_019_5ea05c22bf3d.jpg)

  

  

1-WIRE总线  

  

1-Wire由美国Dallas(达拉斯)公司推出，是一种异步半双工串行传输。采用单根信号线，既传输时钟又传输数据，而且数据传输是双向的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_020_2b6e84fc94cd.jpg)

单总线的数据传输速率一般为16.3Kbit/s，最大可达142 Kbit/s，通常情况下采用100Kbit/s以下的速率传输数据。

  

1-Wire线端口为漏极开路构或三态门的端口，因此一般需要加上拉电阻Rp，通常选用5K~10KΩ

  

主要应用在：打印墨盒或医疗消耗品的识别；印刷电路板、配件及外设的识别和认证。

  

  

DMA直接存储器访问

  

DMA是STM32内的一个硬件模块，它独立于CPU，在外围设备和内存之间进行数据传输，解放了CPU，可使CPU的效率大大提高。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_021_79d4f2ec874f.jpg)

它可以高速访问外设、内存，传输不受CPU的控制，并且是双向通信。因此，使用DMA可以大大提高数据传输速度，这也是ARM架构的一个亮点——DMA总线控制。

  

DMA就相应于一条高速公路，专用、高速的特性。如果不使用DMA，也可以达到目的，只是达到目的的时间比较长。

  

  

Ethernet以太网

  

以太网是目前应用最普遍的局域网技术。

  

大家知道，以太网接口可分为协议层和物理层。

协议层是由一个叫MAC(Media Access Layer)控制器的单一模块实现。

  

物理层由两部分组成，即PHY(Physical Layer)和传输器。

  

目前很多主板的南桥芯片已包含了以太网MAC控制功能，只是未提供物理层接口。因此，需外接PHY芯片以提供以太网的接入通道。

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_022_3e6487015598.jpg)

  

网络变压器的作用是：

  

耦合差分信号，抗干扰能力更强；

变压器隔离网线端不同设备的不同电平，隔离直流信号。

  

以太网接口参考电路

![](D:\电脑文件\公众号知识库\电工_教育_学习\UART_I2C_SPI_TTL_RS232_RS422_RS485_CAN_USB_SD卡_1_WIRE_Ethernet_images\img_023_53e03e369493.jpg)