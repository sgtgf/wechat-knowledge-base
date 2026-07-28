# 终于搞清了：SPI、UART、I2C通信的区别与应用！

原创 硬件笔记本 2021-12-17 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/QAQmiJLj--YOkPooHV7orA](https://mp.weixin.qq.com/s/QAQmiJLj--YOkPooHV7orA)

 **![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")**

电子设备之间的通信就像人类之间的交流，双方都需要说相同的语言。在电子产品中，这些语言称为通信协议。

之前有单独地分享了SPI、UART、I2C通信的文章，这篇对它们做一些对比。  

  

## 串行 VS 并行

  

电子设备通过发送数据位从而实现相互交谈。位是二进制的，只能是1或0。通过电压的快速变化，位从一个设备传输到另一个设备。在以5V工作的系统中，“0”通过0V的短脉冲进行通信，而“1”通过5V的短脉冲进行通信。 

  

数据位可以通过并行或串行的形式进行传输。 在并行通信中，数据位在导线上同时传输。下图显示了二进制（01000011）中字母“C”的并行传输：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoFb3E8jaruhGXsOIqaNZs4MPwvctLTUpiahqgnAELAXeajJlLViarzPrQ/640?wx_fmt=png)

  

在串行通信中，位通过单根线一一发送。下图显示了二进制（01000011）中字母“C”的串行传输：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCocz4hFK3lTBUsJ5q4fC09lDEicb48MMuIYMkITzrevHrtXMkWgicPs8OA/640?wx_fmt=png)

  

  

## SPI通信

  

  

SPI是一种常见的设备通用通信协议。它有一个独特优势就是可以无中断传输数据，可以连续地发送或接收任意数量的位。而在I2C和UART中，数据以数据包的形式发送，有着限定位数。

  

在SPI设备中，设备分为**主机与从机系统**。主机是控制设备（通常是微控制器），而从机（通常是传感器，显示器或存储芯片）从主机那获取指令。

  

一套SPI通讯共包含四种信号线：**MOSI** (Master Output/Slave Input) – 信号线，主机输出，从机输入。**MISO** (Master Input/Slave Output) – 信号线，主机输入，从机输出。**SCLK** (Clock) – 时钟信号。**SS/CS** (Slave Select/Chip Select) – 片选信号。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoKgHoxHtdMJjVtQic8k9XSPG4uKic3JlOHms3wib4n4SILBx9BriatNOqJg/640?wx_fmt=png)

  

  

**SPI协议特点**

实际上，从机的数量受系统负载电容的限制，它会降低主机在电压电平之间准确切换的能力。

  

**工作原理**

  

**时钟信号**

每个时钟周期传输一位数据，因此数据传输的速度取决于时钟信号的频率。 时钟信号由于是主机配置生成的，因此SPI通信始终由主机启动。 

**设备共享时钟信号的任何通信协议都称为同步。**SPI是一种同步通信协议，还有一些异步通信不使用时钟信号。 例如在UART通信中，双方都设置为预先配置的波特率，该波特率决定了数据传输的速度和时序。

  

**片选信号**

主机通过拉低从机的CS/SS来使能通信。 **在空闲/非传输状态下，片选线保持高电平**。在主机上可以存在多个CS/SS引脚，允许主机与多个不同的从机进行通讯。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCo9TsDE0Ccv16aSROfnzlayia0VujqA7UdFyaic3cAO3hDVTXRUYhWicWOw/640?wx_fmt=png)

如果主机只有一个片选引脚可用，则可以通过以下方式连接这些从器件：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCobpUaTIdeZo64vQw7vgZSArNOYGWkicuKYia0uibHIlWKqtSbzex7jxibLA/640?wx_fmt=png)

**MOSI和MISO**

主机通过MOSI以串行方式将数据发送给从机，从机也可以通过MISO将数据发送给主机，两者可以同时进行。所以理论上，**S****PI是一种全双工的通讯协议。**

  

**传输步骤**

  

  

**1. 主机输出时钟信号**

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCo6gMHSB6oBU7E0DnDtLia5mJI4FDlShrnPmfNMTYOyteAkQwyvFnrKPQ/640?wx_fmt=png)

  

**2\. 主机拉低SS / CS引脚，激活从机**

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCo8STfcMKibwOPWQBWmPw8rUPPOuvjX1YaWw5QeyygCQZXbMYBcPUZejA/640?wx_fmt=png)

  

**3\. 主机通过MOSI将数据发送给从机**

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoDnoZicib9qGnAG3ctQT7EIKeLWAGsIWtMXZXOq8ktw94OlkiaJbOx2eNw/640?wx_fmt=png)

  

**4\. 如果需要响应，则从机通过MISO将数据返回给主机**

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCofiaU3ypibDglPunDg8MZUdiatELzMibCibuHbagTvF5DRvOLg2Hem5MqAXg/640?wx_fmt=png)

使用SPI有一些优点和缺点，如果在不同的通信协议之间进行选择，则应根据项目要求进行充分考量。

  

**优劣**

  

**优点**

SPI通讯无起始位和停止位，因此数据可以连续流传输而不会中断；没有像I2C这样的复杂的从站寻址系统，数据传输速率比I2C更高（几乎快两倍）。独立的MISO和MOSI线路，可以同时发送和接收数据。

  

**缺点**

SPI使用四根线（I2C和UART使用两根线），没有信号接收成功的确认（I2C拥有此功能），没有任何形式的错误检查（如UART中的奇偶校验位等）。  

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoK0tydQpwTJqEGITJdk9w7jyvic4zkzhibZVcC3zicy85BJ5QH15pGeIAw/640?wx_fmt=png)

  

UART代表通用异步接收器/发送器也称为串口通讯，它不像SPI和I2C这样的通信协议，而是微控制器中的物理电路或独立的IC。

  
UART的主要目的是发送和接收串行数据，其最好的优点是它仅使用两条线在设备之间传输数据。UART的原理很容易理解，但是如果您还没有阅读SPI 通讯协议，那可能是一个不错的起点。

## UART通信

  

在UART通信中，两个UART直接相互通信。 发送UART将控制设备（如CPU）的并行数据转换为串行形式，以串行方式将其发送到接收UART。只需要两条线即可在两个UART之间传输数据，数据从发送UART的Tx引脚流到接收UART的Rx引脚：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoaOOxtFJ4oWBqxSOLRV0dDFcIicGibCUmmPPFfTTnM2JRR0EdvRuCpY0g/640?wx_fmt=png)

  

**UART属于异步通讯**，这意味着没有时钟信号，取而代之的是在数据包中添加开始和停止位。这些位定义了数据包的开始和结束，因此接收UART知道何时读取这些数据。 

  

当接收UART检测到起始位时，它将以特定波特率的频率读取。波特率是数据传输速度的度量，以每秒比特数（bps）表示。两个UART必须以大约相同的波特率工作，发送和接收UART之间的波特率只能相差约10％。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCo6gDfichjz3et9bGibN8vE1o9vRSrpX5TyTAHOMNrBFsKsV0TV6t2AUyA/640?wx_fmt=png)

  

  

**工作原理**

发送UART从数据总线获取并行数据后，它会添加一个起始位，一个奇偶校验位和一个停止位来组成数据包并从Tx引脚上逐位串行输出，接收UART在其Rx引脚上逐位读取数据包。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoDb87zlT6Kb8hIqwibe3Jt7ay7XicDyHp4mVSf3PyHUFEpeDFmrnXU27Q/640?wx_fmt=png)

  

UART数据包含有1个起始位，5至9个数据位（取决于UART），一个可选的奇偶校验位以及1个或2个停止位：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCo9k3v7sdUxaibsSeia2Lhk5ricl98qLx06gjJ1GruqFAfYo008tYZKpJ2A/640?wx_fmt=png)

**起始位：**

  

UART数据传输线通常在不传输数据时保持在高电压电平。开始传输时发送UART在一个时钟周期内将传输线从高电平拉低到低电平，当接收UART检测到高电压到低电压转换时，它开始以波特率的频率读取数据帧中的位。

  

**数据帧：**

  

数据帧内包含正在传输的实际数据。如果使用奇偶校验位，则可以是5位，最多8位。如果不使用奇偶校验位，则数据帧的长度可以为9位。 

  

**校验位：**

  

奇偶校验位是接收UART判断传输期间是否有任何数据更改的方式。接收UART读取数据帧后，它将对值为1的位数进行计数，并检查总数是偶数还是奇数，是否与数据相匹配。

  

**停止位：**

  

为了向数据包的结尾发出信号，发送UART将数据传输线从低电压驱动到高电压至少持续两位时间。

  

  

  

  

**传输步骤**

  

  

1.  发送UART从数据总线并行接收数据： 
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoYk4oEUribDrM3BwibdX9UNnNafpDCXqaLqrZZAweOfaiaxp2v6L7suQibQ/640?wx_fmt=png)

  

2.发送UART将起始位，奇偶校验位和停止位添加到数据帧：

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCo2QBllWibMgOdgECYzFjHbBPd3PMcuiarqVibrNuGTMfkWh4OUfqExrvuA/640?wx_fmt=png)

  

3.整个数据包从发送UART串行发送到接收UART。接收UART以预先配置的波特率对数据线进行采样：

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoicvQo8ticmYwH8mzoTM1Opzm0IwymSKq9GLlmwypFm8cpOHD4jexUmkA/640?wx_fmt=png)

  

4.接收UART丢弃数据帧中的起始位，奇偶校验位和停止位：

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoYOb45WmOcIrD73oexCQCUicdexczHZqvKNezicQUUJYOwlMQSXeOBl9w/640?wx_fmt=png)

  

5.接收UART将串行数据转换回并行数据，并将其传输到接收端的数据总线：  

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVComMu7KABIfHVbGoOVf9wdmWnp7yOOxHb3zuRaQRQb8InhjShc5FQxpw/640?wx_fmt=png)

  

  

**优劣**

  

没有任何通信协议是完美的，但是UART非常擅长于其工作。以下是一些利弊，可帮助您确定它们是否适合您的项目需求：

  

**优点**

-   仅使用两根电线
    
-   无需时钟信号
    
-   具有奇偶校验位以允许进行错误检查
    
-   只要双方都设置好数据包的结构
    
-   有据可查并得到广泛使用的方法
    

  

**缺点**

-   数据帧的大小最大为9位
    
-   不支持多个从属系统或多个主系统
    
-   每个UART的波特率必须在彼此的10％之内
    

  

## I2C通信

  

I2C总线是由Philips公司开发的一种简单、双向二线制同步串行总线。它只需要两根线即可传送信息。它结合了 SPI 和 UART 的优点，您可以将多个从机连接到单个主机（如SPI那样），也可以使用多个主机控制一个或多个从机。当您想让多个微控制器将数据记录到单个存储卡或将文本显示到单个LCD时，这将非常有用。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCodpMLoduXjsWG7kudia5NpbV3u1I6N6xw61bw1b244mCAwDjFuMz7VJA/640?wx_fmt=png)

  

SDA (Serial Data) – 数据线。

SCL (Serial Clock) – 时钟线。

I2C是串行通信协议，因此数据沿着SDA一点一点地传输。与SPI一样，I2C也需要时钟同步信号且时钟始终由主机控制。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCof8OZmKCVskjmU7sJJaic6DlAunl7M3Wjnbm8S0UgFgPiaDG7gQ6icUUYg/640?wx_fmt=png)

  

**工作原理**

  

I2C的数据传输是以多个msg的形式进行，每个msg都包含从机的二进制地址帧，以及一个或多个数据帧，还包括开始条件和停止条件，读/写位和数据帧之间的ACK / NACK位：

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCorbM4fiaic8A8jVicY7AE37Bs0aPVZNXwmibVoqKxJUIIxWoJ91TjDySjeg/640?wx_fmt=png)

  

启动条件：当SCL是高电平时，SDA从高电平向低电平切换。

  

停止条件：当SCL是高电平时，SDA由低电平向高电平切换。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoEAQrn4m5vWgyE2upOSqNiciba1gLYzUcmpwPfnSorqFDndtRepiczANeQ/640?wx_fmt=png)

  

地址帧：每个从属设备唯一的7位或10位序列，用于主从设备之间的地址识别。

  

读/写位：一位，如果主机是向从机发送数据则为低电平，请求数据则为高电平。

  

ACK/NACK：消息中的每个帧后均带有一个ACK/NACK位。如果成功接收到地址帧或数据帧，接收设备会返回一个ACK位用于表示确认。

  

**寻址**

由于I2C没有像SPI那样的片选线，因此它需要使用另一种方式来确认某一个从设备，而这个方式就是 —— 寻址 。

  

主机将要通信的从机地址发送给每个从机，然后每个从机将其与自己的地址进行比较。如果地址匹配，它将向主机发送一个低电平ACK位。如果不匹配，则不执行任何操作，SDA线保持高电平。

  

**读/写位** 

地址帧的末尾包含一个读/写位。如果主机要向从机发送数据，则为低电平。如果是主机向从机请求数据，则为高电平。

  

**数据帧**

当主机检测到从机的ACK位后，就可以发送第一个数据帧了。数据帧始终为8位，每个数据帧后紧跟一个ACK / NACK位，来验证接收状态。当发送完所有数据帧后，主机可以向从机发送停止条件来终止通信。

  

**传输步骤**

  

1\. 在SCL线为高电平时，主机通过将SDA线从高电平切换到低电平来启动总线通信。

  

2\. 主机向总线发送要与之通信的从机的7位或10位地址，以及读/写位：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCof8Fy1icYHZcL96DT2GDwebMfib1OOHjgodEwm7J5OQgE0ib6tpeNC3N7g/640?wx_fmt=png)

  

3\. 每个从机将主机发送的地址与其自己的地址进行比较。如果地址匹配，则从机通过将SDA线拉低一位返回一个ACK位。如果主机的地址与从机的地址不匹配，则从机将SDA线拉高。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoRUSx5XSIic3t2uQ8MP3YDjZUK2GYAhK9icPmsov0y7Yqzjhz3ibJxG4Hw/640?wx_fmt=png)

  

4\. 主机发送或接收数据帧：

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCokFRYTyTqMzrcFJjibAgr0y5U8ZGkIMgsOuhibLFkD5YILXn1Ldia4ehBA/640?wx_fmt=png)

  

5\. 传输完每个数据帧后，接收设备将另一个ACK位返回给发送方，以确认已成功接收到该帧：

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoTkKTw9uUAJyfISiaibicDujJqJjMsgAPb3LSvNojfB6qmqnOiblFbau3Yw/640?wx_fmt=png)

6\. 随后主机将SCL切换为高电平，然后再将SDA切换为高电平，从而向从机发送停止条件。

  

**单个主机VS多个从机**

由于I2C使用寻址功能，可以通过一个主机控制多个从机。使用7位地址时，最多可以使用128(27)个唯一地址。使用10位地址并不常见，但可以提供1,024(210)个唯一地址。如果要将多个从机连接到单个主机时，请使用4.7K欧的上拉电阻将它们连接，例如将SDA和SCL线连接到Vcc：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoUYKnwW8OQvL03SO2ia2tm04YgOpwKHQDdYWZ3rEDAE2P7CvEuCJdneg/640?wx_fmt=png)

**多个主机VS多个从机**

I2C支持多个主机同时与多个从机相连，当两个主机试图通过SDA线路同时发送或接收数据时，就会出现问题。因此每个主机都需要在发送消息之前检测SDA线是低电平还是高电平。如果SDA线为低电平，则意味着另一个主机正在控制总线。如果SDA线高，则可以安全地发送数据。如果要将多个主机连接到多个从机，请使用4.7K欧的上拉电阻将SDA和SCL线连接到Vcc：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FO6Wu0mExhp0Ne2ibOrmQVCoibvZH6qMHDaN1YqDLEM47RrVzEK5wDOlXdqShgkmibGRibz9UYVSibIibmw/640?wx_fmt=png)

  

**优劣**

  

与其他协议相比，I2C可能听起来很复杂。以下是一些利弊，可帮助您确定它们是否适合您的项目需求：

  

**优点**

-   仅使用两根电线
    
-   支持多个主机和多个从机
    
-   每个UART的波特率必须在彼此的10％之内
    
-   硬件比UART更简单
    
-   众所周知且被广泛使用的协议  
    
      
    

**缺点**

-   数据传输速率比SPI慢
    
-   数据帧的大小限制为8位
    

  

* * *

  

声明：文章来源网络，侵删。

  

\--END--

  

  

  

推荐阅读

  

  

  

-   [I2C总线为什么要接上拉电阻](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486088&idx=1&sn=58d810cc779bc9e0b7caf26c4aa529c5&chksm=c309d45af47e5d4c78296b6201411bbd89fe6d6685591b9b6b23941c0ed6f427bb23f9913a42&scene=21#wechat_redirect)
    
-   [UART、I2C、SPI、TTL、RS232、RS422、RS485、CAN、USB、SD卡、1-WIRE、Ethernet](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486091&idx=1&sn=fa08cc7e12507da09e15843fdfdb81dd&chksm=c309d459f47e5d4f23bfc6a0603dc4bc400e25dfdb335ae110c73c61d94249e0b99956b5753c&scene=21#wechat_redirect)
    

  

后台回复“**加群**”，管理员拉你进入技术交流群。

  

****觉得内容不错的话，欢迎分享，点赞，在看******![](https://mmbiz.qpic.cn/mmbiz_gif/iaLLibsB5S6FN0h1dvAiaKt7ITP9EYBbIyOGvA1H5PkiaL9NQSoDNoq7Y5kBH8qNziaIYhBZyFibBqNXRHh3ZukzICvg/640?wx_fmt=gif)**