# 浅论各种调试接口（JTAG、SWD、RDI、Jlink、Ulink、STlink）的区别

原创 硬件笔记本 2022-07-13 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/NVir0B2UZrXaI5jJfBDf7A](https://mp.weixin.qq.com/s/NVir0B2UZrXaI5jJfBDf7A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")  

  

## 一、JTAG协议

JTAG（Joint Test Action Group，联合测试行动小组）是一种国际标准测试协议（IEEE 1149.1兼容），主要用于芯片内部测试。现在多数的高级器件都支持JTAG协议，如ARM、DSP、FPGA器件等。标准的JTAG接口是4线：TMS、 TCK、TDI、TDO，分别为模式选择、时钟、数据输入和数据输出线。相关JTAG引脚的定义为：

-   TMS：测试模式选择，TMS用来设置JTAG接口处于某种特定的测试模式；
    
-   TCK：测试时钟输入；
    
-   TDI：测试数据输入，数据通过TDI引脚输入JTAG接口；
    
-   TDO：测试数据输出，数据通过TDO引脚从JTAG接口输出；
    

JTAG协议在定义时，由于当时的计算机（PC机）普遍带有并口，因而在连接计算机端是定义使用的并口。而计算机到了今天，不要说笔记本电脑，现在台式计算机上面有并口的都很少了，取而代之的是越来越多的USB接口。所以，目前市场上已经很少看到它的身影了。![](D:\电脑文件\公众号知识库\电工_教育_学习\浅论各种调试接口（JTAG_SWD_RDI_Jlink_Ulink_STlink）的区别_images\img_002_3450d85c1b1b.jpg)

## 二、SWD接口

串行调试（Serial Wire Debug），应该可以算是一种和JTAG不同的调试模式，使用的调试协议也应该不一样，所以最直接的体现在调试接口上，与JTAG的20个引脚相比，SWD只需要4个（或者5个）引脚，结构简单，但是使用范围没有JTAG广泛，主流调试器上也是后来才加的SWD调试模式。

SWD和传统的调试方式区别：

1.  SWD模式比JTAG在高速模式下面更加可靠。在大数据量的情况下面JTAG下载程序会失败，但是SWD发生的几率会小很多。基本使用JTAG仿真模式的情况下是可以直接使用SWD模式的，只要你的仿真器支持，所以推荐大家使用这个模式。
    
2.  在大家GPIO刚好缺一个的时候，可以使用SWD仿真，这种模式支持更少的引脚。
    
3.  在大家板子的体积有限的时候推荐使用SWD模式，它需要的引脚少，当然需要的PCB空间就小啦！比如你可以选择一个很小的2.54间距的5芯端子做仿真接口。
    
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\浅论各种调试接口（JTAG_SWD_RDI_Jlink_Ulink_STlink）的区别_images\img_003_febfdcb9df83.jpg)  
    

## 三、RDI接口

远程调试接口（Remote Debug Interface），是ARM公司提出的标准调试接口，主要用于ARM芯片的仿真，由于各个IDE厂商使用的调试接口各自独立，硬件无法进行跨平台的调试。

现在众多的IDE厂家都逐步采用标准RDI作为ARM仿真器的调试接口，因此使跨平台的硬件调试成为可能。EasyJTAG由于使用标准RDI调试接口，因此在任何使用标准RDI接口的IDE调试环境中都可以使用，例如ARM公司的ADS1.2/IAR公司的EWARM 3.30 。

## 四、JLink仿真器

J-Link是德国SEGGER公司推出基于JTAG的仿真器。简单地说，是给一个JTAG协议转换盒，即一个小型USB到JTAG的转换盒，其连接到计算机用的是USB接口，而到目标板内部用的还是jtag协议。它完成了一个从软件到硬件转换的工作。

JLINK是一个通用的开发工具，可以用于KEIL、IAR、ADS 等平台。速度，效率，功能都很好，据说是众多仿真器里最强悍的。![](D:\电脑文件\公众号知识库\电工_教育_学习\浅论各种调试接口（JTAG_SWD_RDI_Jlink_Ulink_STlink）的区别_images\img_004_5a90efd731cf.jpg)

## 五、ULink仿真器

ULINK是ARM/KEIL公司推出的仿真器，目前网上可找到的是其升级版本，ULINK2和ULINK Pro仿真器。ULINK/ULINK2可以配合Keil软件实现仿真功能，并且仅可以在Keil软件上使用，增加了串行调试（SWD）支持，返回时钟支持和实时代理等功能。

开发工程师通过结合使用RealView MDK的调试器和ULINK2，可以方便的在目标硬件上进行片上调试（使用on-chip JTAG，SWD和OCDS）、Flash编程。但是要注意的是，ULINK是KEIL公司开发的仿真器，专用于KEIL平台下使用，ADS、IAR下不能使用。![](D:\电脑文件\公众号知识库\电工_教育_学习\浅论各种调试接口（JTAG_SWD_RDI_Jlink_Ulink_STlink）的区别_images\img_005_e26d577aeddd.jpg)

## 六、ST-Link仿真器

ST-LINK是专门针对意法半导体STM8和STM32系列芯片的仿真器。ST-LINK /V2指定的SWIM标准接口和JTAG / SWD标准接口，其主要功能有：

-   编程功能：可烧写FLASH ROM、EEPROM、AFR等；
    
-   仿真功能：支持全速运行、单步调试、断点调试等各种调试方法，可查看IO状态，变量数据等；
    
-   仿真性能：采用USB2.0接口进行仿真调试，单步调试，断点调试，反应速度快；
    
-   编程性能：采用USB2.0接口，进行SWIM / JTAG / SWD下载，下载速度快；
    
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\浅论各种调试接口（JTAG_SWD_RDI_Jlink_Ulink_STlink）的区别_images\img_006_6383a0fdd4fa.jpg)
    

  

来源：技术让梦想更伟大

整理：李肖遥

  

后台回复“**加群**”，管理员拉你入技术交流群。