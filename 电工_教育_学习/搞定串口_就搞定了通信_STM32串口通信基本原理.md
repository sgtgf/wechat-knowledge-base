# 搞定串口，就搞定了通信，STM32串口通信基本原理

原创 硬件笔记本 2024-04-29 07:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/yikZsU1alMuLYM8rpaO3PA](https://mp.weixin.qq.com/s/yikZsU1alMuLYM8rpaO3PA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

通信接口背景知识

  

**设备之间通信的方式**

一般情况下，设备之间的通信方式可以分成并行通信和串行通信两种。并行与串行通信的区别如下表所示。

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8gLzxiacT4L3UicnNP31lSefsVsar1h7vWVj00Hy6zlsj8wjibakrXGs3A/640?wx_fmt=png&random=0.8928622091449137&random=0.7510056079795531&random=0.9740748364737917&wxfrom=13&tp=wxpic)  

**串行通信的分类**

1、按照数据传送方向，分为：

-   单工：数据传输只支持数据在一个方向上传输；
    
-   半双工：允许数据在两个方向上传输。但是，在某一时刻，只允许数据在一个方向上传输，它实际上是一种切换方向的单工通信；它不需要独立的接收端和发送端，两者可以合并一起使用一个端口。
    
-   全双工：允许数据同时在两个方向上传输。因此，全双工通信是两个单工通信方式的结合，需要独立的接收端和发送端。
    

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8w5xsshEjS9qTLfwltFNlCH7h0YibUoqTBeaeLgZaNqAMNjbT95CMYvA/640?wx_fmt=png&random=0.3615833830522639&random=0.5670646722318733&random=0.6284205751699046&wxfrom=13&tp=wxpic)  

2、按照通信方式，分为：

-   同步通信：带时钟同步信号传输。比如：SPI，IIC通信接口。
    
-   异步通信：不带时钟同步信号。比如：UART(通用异步收发器)，单总线。
    

在同步通讯中，收发设备上方会使用一根信号线传输信号，在时钟信号的驱动下双方进行协调，同步数据。例如，通讯中通常双方会统一规定在时钟信号的上升沿或者下降沿对数据线进行采样。

在异步通讯中不使用时钟信号进行数据同步，它们直接在数据信号中穿插一些用于同步的信号位，或者将主题数据进行打包，以数据帧的格式传输数据。通讯中还需要双方规约好数据的传输速率（也就是波特率）等，以便更好地同步。常用的波特率有4800bps、9600bps、115200bps等。

在同步通讯中，数据信号所传输的内容绝大部分是有效数据，而异步通讯中会则会包含数据帧的各种标识符，所以同步通讯效率高，但是同步通讯双方的时钟允许误差小，稍稍时钟出错就可能导致数据错乱，异步通讯双方的时钟允许误差较大。

**常见的串行通信接口**

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx86mSxzwqoWBIdoStoriaYIjUPLs0zRy8FIaX9XiadRvug88zP03bRY5TQ/640?wx_fmt=png&random=0.7754712693989652&random=0.4681521834322375&random=0.738603340770932&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

**STM32串口通信基础**

STM32的串口通信接口有两种，分别是：UART（通用异步收发器）、USART（通用同步异步收发器）。而对于大容量STM32F10x系列芯片，分别有3个USART和2个UART。

  

**UART引脚连接方法**

-   RXD：数据输入引脚，数据接受；
    
-   TXD：数据发送引脚，数据发送。
    

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8jw9lShwHUd5DkRCcZcVVg7icZz0gA9ia3EViaBmACfWon3v8fREQf2wdg/640?wx_fmt=png&random=0.7997045920579915&random=0.6229098409030742&random=0.9041043494478296&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

对于两个芯片之间的连接，两个芯片GND共地，同时TXD和RXD交叉连接。这里的交叉连接的意思就是，芯片1的RxD连接芯片2的TXD，芯片2的RXD连接芯片1的TXD。这样，两个芯片之间就可以进行TTL电平通信了。STM32与51单片机串口通信相关实例，请移步此处:[STM32与51单片机串口通信实例](http://mp.weixin.qq.com/s?__biz=MzI1MDg4OTMwMw==&mid=2247496701&idx=1&sn=760e29269b76c85739ea0bd45172de2a&chksm=e9f9e6c5de8e6fd3bdc01af92afa0860b7af0b11376ea025e4105b65ef5f3da0a28319b260e4&scene=21#wechat_redirect)。

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8hyFyL5xk98MPoesFNyxSDYttpv17icl9g6wojFHbol6Ivq6OuxQNJNg/640?wx_fmt=png&random=0.7525703658253555&random=0.16072139215733672&random=0.0915185571858903&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

若是芯片与PC机（或上位机）相连，除了共地之外，就不能这样直接交叉连接了。尽管PC机和芯片都有TXD和RXD引脚，但是通常PC机（或上位机）通常使用的都是RS232接口（通常为DB9封装），因此不能直接交叉连接。RS232接口是9针（或引脚），通常是TxD和RxD经过电平转换得到的。故，要想使得芯片与PC机的RS232接口直接通信，需要也将芯片的输入输出端口也电平转换成RS232类型，再交叉连接。

  

经过电平转换后，芯片串口和RS232的电平标准是不一样的：

-   单片机的电平标准（TTL电平）：+5V表示1，0V表示0；
    
-   RS232的电平标准：+15/+13 V表示0，-15/-13表示1。
    

    RS-232通讯协议标准串口的设备间通讯结构图如下： 

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8R6AUAZVWmqreMYBmAibIuSic6kaGo8l998unozFjcHfG6mwq0R0L8EkQ/640?wx_fmt=png&random=0.1789785780721278&random=0.11505957467100103&random=0.630381622116003&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

所以单片机串口与PC串口通信就应该遵循下面的连接方式：在单片机串口与上位机给出的RS232口之间，通过电平转换电路(如下面图中的Max232芯片) 实现TTL电平与RS232电平之间的转换。STM32与PC之间通信实例，请移步此处:[STM32实例-用按键控制串口发送数据，文末附代码](http://mp.weixin.qq.com/s?__biz=MzI1MDg4OTMwMw==&mid=2247495643&idx=1&sn=d48c4d6dba9aaa909d47ae8e74521851&chksm=e9f9fae3de8e73f565824ff3a5d3377094e8e8fee51281a20a2910caf78121f3b93645af874f&scene=21#wechat_redirect)。

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8xljdFRj8ibmey0JqrRbq3KUPf9E1WBlLI8wr0qxI162jk8SgYibvPrWQ/640?wx_fmt=jpeg&random=0.05879448468596582&random=0.5049477466779533&random=0.7741282508367102&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

  

**RS232串口简介**

台式机电脑后面的9针接口就是com口(串口) 在工业控制 数据采集上应用广泛上图中，最右边的是串口接口统称为RS232接口，是常见的DB9封装。

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zHwHPfh1Vic2eALKLXGAnhrqm7hQ9pzCu5gBsfEP3FvHIibo7IFh7szFZQuLlD6mhfGSnOibV1kCaiaA/640?wx_fmt=jpeg&random=0.5237277321570675&random=0.30033931919670653&random=0.38156676613218&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

通信过程中只有两个脚参与通信。

-   2脚：电脑的输入RXD
    
-   3脚：电脑的输出TXD 通过2 ，3 脚就可以实现全双工(可同时收发)的串行异步 通信
    
-   5脚：接地
    

单片机的P3口是有两个复用接口RXD 和TXD。这是单片机进行串行通信的收发口，连接应该错位的对应到电脑的TDX RDX上。注意：单片机和RS232的电平标准是不一样的。

单片机的电平标准 TTL电平 ：+5V表示1 0V表示0。

RS232的电平标准 +15/+13 V表示1 -15/-13 表示0。

所以 单片机与电脑串口通信就应该遵循下面的连接方式：

在单片机与上位机给出的RS232口之间通过电平转换电路(最上面图中的Max232芯片) 实现TTL电平与RS232电平之间的转换，PC串口与单片机串口连接方式图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zHwHPfh1Vic2eALKLXGAnhrrD4lBe8gd7p4ulBBLJuoB9M5zgo3InWTokib8xQHSDRar4x0btQiauaA/640?wx_fmt=jpeg&random=0.21517369060161218&random=0.17518769274141577&random=0.38864109152689763&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)注意这两个DB9：DB91是在电脑上的 DB92是在单片机实验板上焊接着的。

这里的交叉连接的意思是 DB91的RXD连着DB92的TXD。

DB92的RXD连着DB91的TXD这样交叉着连接，如果电脑没有RS232口 只有USB口，可以用串口转接线转出串口，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zHwHPfh1Vic2eALKLXGAnhrTfvX0bngmiao81VKVWd6FXsgg3yEmnSicFFQ0fJc5mldQH65FGOH351Q/640?wx_fmt=jpeg&random=0.002328836181489491&random=0.3712904747640382&random=0.831276874110993&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

这个时候在电脑上位机上需要安装串口驱动程序。

注意，这个驱动程序驱动的是PL2303芯片(在上图的大头里面) 使得RS232信息转换成USB信息。

下图为上图的内部结构：

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zHwHPfh1Vic2eALKLXGAnhrxYG0x2kyw80UgyakdX2W7T6iaUROsjQveoUEKMFfXSK1gqXMMYjiagUA/640?wx_fmt=jpeg&random=0.36935203196618027&random=0.763969145843924&random=0.4685643614520407&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

用串口通信比USB简单，因为串口通信没有协议，使用方便简单。  

**STM32的UART特点**

-   全双工异步通信；
    
-   分数波特率发生器系统，提供精确的波特率。发送和接受共用的可编程波特率，最高可达4.5Mbits/s；
    
-   可编程的数据字长度（8位或者9位）；
    
-   可配置的停止位（支持1或者2位停止位）；
    
-   可配置的使用DMA多缓冲器通信；
    
-   单独的发送器和接收器使能位；
    
-   检测标志：
    
    ① 接受缓冲器
    
    ②发送缓冲器空
    
    ③传输结束标志；
    
-   多个带标志的中断源，触发中断；
    
-   其他：校验控制，四个错误检测标志。
    

  

**串口通信过程**

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8YuxBqMnh7DAKODliawlUBSQk4dZA74MBgG7N7rH0a7GDyD4dK0o4jzQ/640?wx_fmt=png&random=0.28728331235115334&random=0.1988046981769871&random=0.36309111109314296&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

**STM32中UART参数**

串口通讯的数据包由发送设备通过自身的TXD接口传输到接收设备的RXD接口，通讯双方的数据包格式要规约一致才能正常收发数据。    

STM32中串口异步通信需要定义的参数：起始位、数据位（8位或者9位）、奇偶校验位（第9位）、停止位（1,15,2位）、波特率设置。相关文章推荐:[学习STM32单片机，绕不开的串口](http://mp.weixin.qq.com/s?__biz=MzI0OTExODc1Nw==&mid=2648023286&idx=2&sn=9b6f1e4d046c8e2be5e553e7ad176346&chksm=f1b769bcc6c0e0aae7f963cada392c2eb206abd0a32440e7c1a471c71aad560d01ff142a9881&scene=21#wechat_redirect)。

UART串口通信的数据包以帧为单位，常用的帧结构为：1位起始位+8位数据位+1位奇偶校验位（可选）+1位停止位。如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx85uK7xTDre2Yy3HP0jeZOIH5vqicsb6TtBQgxoOOhAGmicthlXGtltnLA/640?wx_fmt=png&random=0.5278709605995167&random=0.5414898972536155&random=0.29970901074184386&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

奇偶校验位分为奇校验和偶校验两种，是一种简单的数据误码校验方法。奇校验是指每帧数据中，包括数据位和奇偶校验位的全部9个位中1的个数必须为奇数；偶校验是指每帧数据中，包括数据位和奇偶校验位的全部9个位中1的个数必须为偶数。

校验方法除了奇校验(odd)、偶校验(even)之外，还可以有：0 校验(space)、1 校验(mark)以及无校验(noparity)。 0/1校验：不管有效数据中的内容是什么，校验位总为0或者1。

  

**UART（USART）框图**

![](https://mmbiz.qpic.cn/mmbiz_jpg/U8odMdLACJl7YDROfvbMsqiaZ8O8uqFx8P2AHNc5WyJrU59HibibTqiajyEKSPlI9MpooQ0jAOElC0JlzHt5lPzFsg/640?wx_fmt=jpeg&random=0.03668150668541115&random=0.5176179692953851&random=0.37460688486322335&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

这个框图分成上、中、下三个部分。本文大概地讲述一下各个部分的内容，具体的可以看《STM32中文参考手册》中的描述。

框图的上部分，数据从RX进入到接收移位寄存器，后进入到接收数据寄存器，最终供CPU或者DMA来进行读取；数据从CPU或者DMA传递过来，进入发送数据寄存器，后进入发送移位寄存器，最终通过TX发送出去。

然而，UART的发送和接收都需要波特率来进行控制的，波特率是怎样控制的呢？

这就到了框图的下部分，在接收移位寄存器、发送移位寄存器都还有一个进入的箭头，分别连接到接收器控制、发送器控制。而这两者连接的又是接收器时钟、发送器时钟。也就是说，异步通信尽管没有时钟同步信号，但是在串口内部，是提供了时钟信号来进行控制的。而接收器时钟和发送器时钟有是由什么控制的呢？

可以看到，接收器时钟和发送器时钟又被连接到同一个控制单元，也就是说它们共用一个波特率发生器。同时也可以看到接收器时钟（发生器时钟）的计算方法、USRRTDIV的计算方法。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。