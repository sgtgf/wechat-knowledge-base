# SPI通信笔记：基础+动图+时序图+总结，一文吃透！

原创 王工 硬件笔记本 2025-07-29 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/O2DQJT4TGZDgOucQAosi0Q](https://mp.weixin.qq.com/s/O2DQJT4TGZDgOucQAosi0Q)

### **![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")**

### 

大家好，今天咱们来详细聊聊SPI接口，文章内容有点多，建议先收藏起来再慢慢看。

SPI现在已经成为MCU和外围设备之间最常用的通信方式了。它是一种同步、全双工、主从式的通信接口。工作原理其实很直接：主机产生时钟信号，从机跟着这个时钟同步收发数据。允许双向传输，可以在同一时钟周期内进行主从设备的数据交换。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjjFXicX5Twlc7uwoexbzX82FrFe8LNCYxaIUJWqcvMbIdM0zXfIfCnWS201BxoaLKpbicjVWkL3T5g/640?wx_fmt=png&from=appmsg)

这种设计让SPI既简单又高效，特别适合需要快速传输数据的场合。不过要注意的是，SPI没有标准的通信协议，不同厂家的设备可能会有差异，所以用的时候一定要仔细看芯片手册。

  

011

典型应用场景

SPI接口的核心优势在于它的**简单性**和**灵活性**，典型应用场景包括：

1、传感器数据采集（如温度传感器、IMU），例如：TMP124芯片，它是由TI推出的**工业级数字温度传感器**，主打**高精度+SPI接口**组合，适合对测温有严苛要求的场景。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0uNLEPKnpF5XBAghGBt7rr3GCMphribFqHraSlic4q9HE6yRnUl14XuPw/640?wx_fmt=png&from=appmsg)

  

2、存储器读写（Flash、EEPROM），比如小容量的AT25040，常用来存储配置参数和校准数据。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0JANpS5sqwX60ibXNN0k89ku4pYcGp8KmENPFDVtMyydPhvd4B2rkwdg/640?wx_fmt=png&from=appmsg)

  

3、数字信号转换（ADC/DAC）。比如通用ADC芯片**MCP4921，它是Microchip推出的**低成本12位数字模拟转换器(DAC)**，主打**简单易用+SPI接口**组合，适合需要数字控制模拟输出的场景。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0UVlY85F6sD8oiaFhiaL5NgDdjow2RI7ibsicZWrLGL1duf5RyyHX7McicQg/640?wx_fmt=png&from=appmsg)

  

4、显示驱动（OLED、TFT屏幕），例如咱们常用的0.96寸OLED屏，一般有I2C和SPI两种接口，虽然SPI多占用两个IO口，但速度比I2C快很多。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0ibwcwFeA58PoLrdV3ib4nzS2SsicVicmle75cia6Clw9qMXczLIakwJuqzQ/640?wx_fmt=png&from=appmsg)

### 

021

SPI的连接方式和工作速度

**连接方式**

**SPI接口可以是3线式或4线式，这里主要介绍常用的4线SPI接口，**4线SPI器件有四个信号：

-   片选(CS)：片选信号，低电平有效
    
-   时钟(SPI CLK, SCLK)：时钟信号由主机产生
    
-   MOSI：主机输出，从机输入
    
-   MISO主机输入，从机输出
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0K1AIWHWiacaSKQtXibYZ83xIhibDvIZXlqnmyjdegpSKlicmh3n0RsiaEHg/640?wx_fmt=png&from=appmsg)

主机和从机之间的SPI连接

这里要注意一下，主机和从机的MOSI和MISO的接线，这个跟串口TX，RX不一样，很多人容易搞错，主机的MISO接从机的MISO，主机的MOSI接从机的MOSI，**直连不交叉。**

那怎么判断哪个是主机呢？咱们产生时钟信号的器件称为主机。主机和从机之间传输的数据与主机产生的时钟同步。另外SPI接口只能有一个主机，但可以有一个或多个从机。关注公众号：硬件笔记本

来自主机的片选信号用于选择从机。这通常是一个低电平有效信号，拉高时从机与SPI总线断开连接。当使用多个从机时，主机需要为每个从机提供单独的片选信号。

**工作速度**

### **SPI速度的典型范围：1 MHz至100 MHz（4 Mbps至400 Mbps），具体速率取决于器件等级：**

消费级IC：1-10 MHz（4-40 Mbps）

工业级器件：10-25 MHz（40-100 Mbps）

但咱们在实际应用中，会受限于外设支持（如Flash芯片可达80 MHz，传感器通常8 MHz）

### **这里再插一句，对比I2C来说，**I2C速度就低太多了：**标准模式100Kbps，高速模式5Mbps（理论值），但是I2C会少占用两个IO口，所以I2C速度胜在省引脚，SPI赢在速度快。**

031

数据传输

SPI的数据传输，整个过程是这样的：

首先，作为主控的设备要产生时钟信号（SCLK），这个信号就像通信的节拍器。同时，主机要通过拉低片选信号（CS）来选中要通信的从设备，这个CS信号通常是低电平有效，所以主机要给它一个逻辑0。

SPI最厉害的地方在于它是全双工的，这意味着主机可以通过MOSI线往外发送数据的同时，从设备也能通过MISO线往主机发送数据，两边是同时进行的。具体来说，主机把数据一位一位地放到MOSI线上移出去，同时又在MISO线上一位一位地收数据。

所有这些数据的发送和接收都是严格跟着时钟信号的边沿走的，你可以选择在时钟的上升沿或者下降沿来采样数据。至于每次通信要传多少位数据，这个得看具体器件的规格书，不同芯片的要求可能不一样。

咱们来看两张动图

![图片](https://mmbiz.qpic.cn/mmbiz_gif/qVwr8GXuicLafthk5bx8TAX2giaj3eEcHiaK8dcBkXl9HmRl72BrH5kJRHalzxkEmOv4nM1SjImJRRyiaRusSfvkUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/qVwr8GXuicLafthk5bx8TAX2giaj3eEcHiaperTLzrdibbXIhibBIk1hgOIxdcXRebyG0j4lGEiactdsrdNfBLflvZMQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

这个过程中要注意三点：

1、是时钟必须由主机产生；

2、CS信号要提前拉低选中从机；

3、数据的收发是同步进行的，不是先发后收或者先收后发。这种设计让SPI既简单又高效，特别适合需要快速传输数据的场合。

### 

041

工作模式

### **SPI有4种工作模式，主要通过CPOL和CPHA两个参数来配置：**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0oT1BfibvNsE0QZMbTNtN0qkkD1SSsgDXXriaTLXTAibMhGB0TsUJhzSCg/640?wx_fmt=png&from=appmsg)

### **

### **

### 

### **如下是SPI模式0的时序图。**

**

**

### **

### **传输的开始和结束用绿色虚线表示；采样边沿用橙色虚线表示；移位边沿用蓝色虚线表示。当然，这些图形仅供参考。要成功进行SPI通信，必须参阅器件的数据手册并确保满足器件的时序规格。**

**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0wnVXRNMIvic1TkVb891jicyXYQmb7udDazlKVhFetRAZssyqL8ibRlWKA/640?wx_fmt=png&from=appmsg)

  

### **

### **

### **如下是SPI模式1的时序图。此时：  
**

### **时钟极性为0，表示时钟信号的空闲状态为低电平；  
**

### **时钟相位为1，表示数据在下降沿采样（由橙色虚线显示），并且数据在时钟信号的上升沿移出（由蓝色虚线显示）。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0FLQIvFtrLEe3n1pBT6ZbQr7yCrI6Y34qn9DBYxe01MQ1zQBl1NCV0w/640?wx_fmt=png&from=appmsg)

### 

**

**

**

### **

### **如下是SPI模式2的时序图。此时：**

### **时钟极性为1，表示时钟信号的空闲状态为高电平。**

### **时钟相位为1，表示数据在下降沿采样（由橙色虚线显示），并且数据在时钟信号的上升沿移出（由蓝色虚线显示）。**

**

**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0wCju3rW1OrK2WvsPWFYAkADIrpiboUBmE2x6NqyOOWicX5V30PfwhCTw/640?wx_fmt=png&from=appmsg)

### **

### 

### 

**

### **

### **如下是SPI模式3的时序图。此时：**

**

**

### **时钟极性为1，表示时钟信号的空闲状态为高电平。**

### **时钟相位为0，表示数据在上升沿采样（由橙色虚线显示），并且数据在时钟信号的下降沿移出（由蓝色虚线显示）。**



**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0yEPgPmficppF4nez20c9ick10bm74DbfE0n8LHLyEN7771JKh3icawkbA/640?wx_fmt=png&from=appmsg)

### 

051

多从机配置

### **咱们的多个从机可与单个SPI主机一起使用。从机可以采用常规模式连接，或采用菊花链模式连接。**

### **常规SPI模式：**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0NwB1tkWJdb7I6y1EvjDiafdsbLFffvx1YIMHAGraM7a4V85I4lbpqUg/640?wx_fmt=png&from=appmsg)

在咱们SPI常规连接模式下，咱们主机必须为每个从设备单独配备一个片选信号线（CS）。当主机将某个从机的CS信号拉低时，这个从机就被选中，此时MOSI和MISO线上的时钟和数据信号就可以和这个特定的从机进行通信。关注公众号：硬件笔记本

这里有个重要限制：同一时间只能有一个从机的CS信号被拉低，如果同时拉低多个CS信号，会导致多个从机同时在MISO线上返回数据，造成数据冲突，主机就无法分辨这些数据到底来自哪个从机。

随着系统连接的从机数量增多，主机需要提供的片选线数量也会相应增加。比如连接8个从机就需要8根独立的CS线，这会快速占用主机的IO口资源，从而限制了系统能够支持的从机数量。为了解决这个问题，可以采用一些扩展技术，比如使用多路复用器（MUX）来产生片选信号。不过这种方案会增加一些硬件复杂度，需要额外添加多路复用器芯片。

  

#### 菊花链模式：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0bw6LNH391hl0uBHZD3kmC2ULEWCGyPmP7y29tTSBbhX7iahaecoHPMA/640?wx_fmt=png&from=appmsg)

在SPI菊花链连接方式下，所有从设备共享同一个片选信号（CS），**从一个从机传播到下一个从机。**具体工作过程是：主机发出时钟信号（SCLK）后，数据首先传输到第一个从机，第一个从机**将数据提供给第二个从机**，这样依次传递下去。所有从机都使用同一个时钟信号进行同步。

这种连接方式的特点是数据传输需要更多的时钟周期。如下图，比如在一个8位数据宽度的系统中，如果要让第三个从机收到数据，就需要24个时钟脉冲（3个从机×8位），而在常规SPI模式下只需要8个时钟脉冲。这是因为数据需要依次通过每个从机，每个从机都会对数据进行处理和转发。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0oTcrMXgpPsoibk9rL2HHgxgvsHr8ZNfiaSLedtVMl6MlUFAiaibQsxJSXw/640?wx_fmt=png&from=appmsg)

### **菊花链配置：数据传播**

需要注意的是，不是所有SPI设备都支持菊花链模式。在使用这种连接方式前，必须仔细查看所用芯片的技术手册，确认其是否支持菊花链功能。有些芯片可能只支持常规的独立片选模式。此外，菊花链模式虽然节省了片选信号线，但会降低通信效率，因此要根据实际应用需求权衡选择。

  

061

总结

SPI接口虽然简单，但在实际应用中需要注意很多细节：

1、接线要正确（直连不交叉）；

2、模式要匹配（看器件手册）；

3、多从机时要合理选择连接方式。

记住这些要点，就能用好SPI接口啦！如果遇到问题，最靠谱的办法就是查阅器件的数据手册。

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjAibVIhHVt3yXrTqSa9wZm2o7mRIXS1x2kJxib2Bo4pdzrliaNsgV2FIFkaLGt3czYuPRUGePz9AqTQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjAibVIhHVt3yXrTqSa9wZm23QZw7KqPdZ2z45x3C67iaphsb4aicwtqxubaHth4KtQXuS1DZgtUibRVg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)

## 

**声明：**

  

声明：参考内容：ADI官网。原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。