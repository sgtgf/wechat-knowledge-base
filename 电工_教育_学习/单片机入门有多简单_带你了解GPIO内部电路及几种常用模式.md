# 单片机入门有多简单？带你了解GPIO内部电路及几种常用模式

原创 硬件笔记本 2022-10-28 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/bq8EI47XA-3pGjRzuBIq6g](https://mp.weixin.qq.com/s/bq8EI47XA-3pGjRzuBIq6g)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

# GPIO全称General Purpose Input Output ，即通用输入/输出。其实GPIO的本质就是芯片的一个引脚。由于每个开发板上都会设计不同的外围电路，这就造成了GPIO的功能可能有所不同。大部分GPIO都是有复用功能的，比如有些GPIO可能是串口的TX或RX，也可能是I2C的SCL或SDA线。

所以，我们不仅要知道GPIO能够输出高低电平，还要理解为什么有些GPIO可以复用某些功能，而其他的不可以。

一、GPIO内部结构

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPA2LIC4DFUWX51wvSf3PliaUlrCO1JNGdShb6lgYlRunD7JB3ibAnFbqg/640?wx_fmt=png)

我们在使用GPIO的时候，可能不会去想为什么通过写代码或者操作寄存器就可以控制一个引脚的高低电平。

今天就让我们一起来看看，为什么通过操作寄存器（其实写代码的过程就是在操作寄存器）就能控制引脚输入或者输出。

我们想要想控制一个GPIO口的需要操作7个寄存器，分别是CRL，CRH，IDR，ODR，BRR，BSRR，LCKR 我们对GPIO的操作本质上就是在对这些寄存器进行读写操作，以下是这些寄存器的名称：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPMknwx5rzrLfZHgaPw4XXLic9LN93uIPFgac5ucib3icYNPOMRBkYnDOIA/640?wx_fmt=png)

  

首先，我们分析一下上面的结构电路。

1、保护二极管

保护二极管从它的名字就不难想到他是用来对系统进行保护的，通过两个二极管的导通可以防止引脚外部输入电压过低或过高。当电压过高时，上方的保护二极管导通。当电压过低时，下方的二极管导通，防止不正常电压导入到芯片内部造成芯片烧毁。

  

2、P·MOS管和N·MOS管

GPIO经过两个二极管的保护后向上流入输入模式，向下流入输出模式，而输出模式的控制是由一个由P·MOS管和N·MOS管组成的单元电路，该电路主要是控制输出的模式，由该结构狗策划给你的单元电路具有推挽输出和开漏输出两种模式。

当系统配置为推挽输出模式时：

若向该结构中输入高电平，经过反向后，上方的P-MOS导通，下方的N-MOS关闭，对外输出高电平；

若向该结构中输入低电平时，经过反向后，下方的N-MOS管导通，上方的P-MOS关闭，对外输出低电平。

当引脚高低电平切换时，两个MOS管轮流导通，P管负责灌电流，N管负责拉电流，使其负载能力和开关速度都比普通的方式有很大的提高。\*\*推挽输出的低电平为0V，高电平为3.3V\*\*。

  

当系统配置为开漏输出模式时：

上方的P-MOS管完全不工作；

如果我们控制输出为0，低电平，则P-MOS管关闭，N-MOS管导通，使输出接地；

若控制输出为1（它无法直接输出高电平）时，则P-MOS管和N-MOS管都关闭，所以开漏输出模式下引脚既不输出高电平，也不输出低电平，为高阻态。

推挽输出模式一般应用在输出电平为0和3.3V而且需要高速切换开关状态的场合。开漏输出模式一般应用在I2C、SMBUS通信等需要 线与功能的总线电路中。

在单片机中除了必须用开漏模式的场合，一般习惯使用推挽输出模式。

  

3、输出数据寄存器

前面我们知道双了MOS管结构电路的输入信号，是由GPIO输出数据寄存器GPIOx\_ODR提供的，因此我们可以通过修改输出数据寄存器的值，就可以修改GPIO引脚的输出电平。而置位/复位寄存器GPIOx\_BSRR可以通过修改输出数据寄存器的值，从而影响电路的输出。

  

4、复用功能输出

复用功能输出中的复用是指STM32的其他片上外设对GPIO引脚进行控制，此时GPIO引脚用作该外设功能的一部分，算是第二用途。从其他外设引出来的复用功能输出信号与GPIO本身的数据寄存器都连接到双MOS管结构的输入中。

  

# 二、输入输出模式

GPIO共有8中输入输出模式，分别是：上拉输入、下拉输入、浮空输入、模拟输入、开漏输出、推挽输出、开漏复用输出、推挽复用输出 ，下面我们详细介绍以下上面的八种输入输出模式。

-   上拉输入：GPIO\_Mode\_IPU
    
-   下拉输入：GPIO\_Mode\_IPD
    
-   浮空输入：GPIO\_Mode\_IN\_FLOATING
    
-   模拟输入：GPIO\_Mode\_AIN
    
-   开漏输出：GPIO\_Mode\_Out\_OD
    
-   推挽输出：GPIO\_Mode\_Out\_PP
    
-   开漏复用：GPIO\_Mode\_AF\_OD
    
-   推完复用：GPIO\_Mode\_AF\_PP
    

  

下面，详细讲一下几个常用的模式。

1、浮空输入

浮空输入模式下，I/O端口的电平信号直接进入输入数据寄存器。也就是说，I/O的电平状态是不确定的，完全由外部输入决定；如果在该引脚悬空（在无信号输入）的情况下，读取该端口的电平是不确定的，通常用于IIC、USART等总线设备上。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPmNBrK5RgZo7Tqx0KCszUAIGv29KssuicrBibswbXibDrem6R0KUsCnkRQ/640?wx_fmt=png)

  

2、上拉输入模式

上拉输入模式下，I/O端口的电平信号直接进入输入数据寄存器。但是在I/O端口悬空（在无信号输入）的情况下，输入端的电平保持在高电平（并且在I/O端口输入为低电平的时候，输入端的电平也是低电平）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPicCoPOCYjASbLIQ5v2cViaBEibgp0Zn1VnWd7NtJEy2armnVdJ9MibZ2Bg/640?wx_fmt=png)

  

# 3、下拉输入模式

下拉输入模式下，I/O端口的电平信号直接进入输入数据寄存器。但是在I/O端口悬空（在无信号输入）的情况下，输入端的电平保持在低电平；并且在I/O端口输入为高电平的时候，输入端的电平也是高电平。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPgYfyjicIO4Dvicxb7NhIKcnT1L4VeQGAgxLJtiadytHh4ib1GYDcbkGxzw/640?wx_fmt=png)

  

# 4、模拟输入模式

模拟输入模式下，I/O端口的模拟信号（电压信号，而非电平信号）直接模拟输入到片上外设模块，比如ADC模块等。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPk6YTXsZQ1QamKjMVtm3Rklicl5wYXWragGuuV7RKK4ak9gCV7KyIqTQ/640?wx_fmt=png)

  

# 5、开漏输出模式

见上面二中的详细介绍。

  

# 6、开漏复用输出模式

开漏复用输出模式，与开漏输出模式很是类似。只是输出的高低电平的来源，不是让CPU直接写输出数据寄存器，取而代之利用片上外设模块的复用功能输出来决定的，一般用于片内外设功能：TX1，MOSI，MISO，SCK，SS。

  

# 7、推挽输出模式

见上面二中的详细介绍。

  

# 8、推挽复用输出模式

推挽复用输出模式，与推挽输出模式很是类似。只是输出的高低电平的来源，不是让CPU直接写输出数据寄存器，而是利用片上外设模块的复用功能输出来决定的，常见采用推挽输出模式的一般为片内外设功能IIC的SCL、SDL。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPz6CZkC9UFgGRzORonhpmpoALAUwLUh0GTKpQQPGHuCqD9GDREev5Jw/640?wx_fmt=png)

  

# 三、开漏输出和推挽输出的区别

开漏输出和推挽输出模式的区别主要是开漏输出只可以输出强低电平，高电平得靠外部电阻拉高。输出端相当于三极管的集电极，适合于做电流型的驱动，其吸收电流的能力相对强(一般20ma以内)；推挽输出可以输出强高、低电平，连接数字器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPW80PGj7QY654VicoWicnA3e75aOe6jHia9DUgUP0wUQrFUe3tdqBPtDMA/640?wx_fmt=jpeg)

  

# 四、STM32中GPIO的配置

在固件库开发中，操作寄存器 CRH 和 CRL 来配置 IO 口的模式和速度是通过 GPIO 初始化函数完成：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPc7y7K8yw3Fs84iax5QibuRCeln4uKO9zrUbicl1rzSmPOPcsCepo0Xx0g/640?wx_fmt=png)

  

初始化 GPIO 的常用格式是：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPwibibd0ZNmOosf3GdsxiccgOlQkjvN815tvo2Hfyj1bJPg86OiaU8iadcFw/640?wx_fmt=png)

  

IO 口速度设置有三个可选值：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOPaJEiaGicvZyXgW3JOJ88d5icQkX2l2FREqjiaibCahQcSS1Mg4ZibZU6bM3A/640?wx_fmt=png)

  

模式则有8个可选定义如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglylDM6sZx8ia2F9yQSdFOP3ffF1rxwu4Y1WCeBShBrlbiaUohMTlsWDxYUYDGtgonhUwAY95fnwsA/640?wx_fmt=png)

# 五、总结

今天主要介绍了GPIO的定义，以及GPIO不同模式之间的区别与实现方式。相信看完本文，你会对GPIO有一个更深的理解。

如果是做软件的小伙伴，可以不用太关注于GPIO是如何实现的，但是需要知道每个模式下GPIO的特点和应用场合。只有这样，我们在实际应用中才能更好的配置出最合适的那个。

文章链接：https://mp.weixin.qq.com/s/qHZPtQBXfwpp8GraAqnpEg

转载自：嵌入式微处理器

文章来源：嵌入式悦翔园 ，作者JamesBin

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。