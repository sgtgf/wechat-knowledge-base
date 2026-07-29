# GPIO结构原理图与模式配置（以STM32为例）

原创 电路一点通 2025-08-04 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/Edgev50WZ7zrpGveqx9\_ww](https://mp.weixin.qq.com/s/Edgev50WZ7zrpGveqx9_ww)

> STM32的GPIO可以配置为多种模式，包括输入浮空、输入上拉/下拉、模拟、推挽和开漏输出等。输入模式中，上拉和下拉电阻用于确保逻辑电平的确定性。输出模式分为推挽和开漏，推挽使用两个晶体管驱动，而开漏需要外部上拉电阻。复用功能允许GPIO与多个外设共享，模拟配置则用于ADC、DAC等模拟信号操作。配置涉及GPIOx\_PUPDR、GPIOx\_OTYPER等寄存器

  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO结构原理图与模式配置（以STM32为例）_images\img_000_9f08ed891344.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

**目录**

GPIO等效原理图

输入模式配置

输出模式配置

复用功能

模拟配置

GPIO配置指南

* * *

STM32 GPIO可用于各种配置。每个GPIO引脚都可以通过软件在以下任何模式下单独配置：

  

• 输入浮空

• 输入上拉

• 输入下拉

• 模拟

• 具有上拉或下拉功能的开漏输出

• 具有上拉或下拉功能的推挽输出

• 具有上拉或下拉功能的复用功能推挽

• 具有上拉或下拉功能的复用功能开漏

#### GPIO等效原理图

STM32产品集成了三个主要的GPIO基本结构：

• 三伏兼容（缩写为TC）。

图 1给出了等效的GPIO图结构。

• 三伏容限（缩写为TT）。

• 五伏容限（缩写为FT）

图 2给出了TT或FT等效的GPIO图结构。

![8e20586f07de47088c970da609ecd3e3.jpeg](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO结构原理图与模式配置（以STM32为例）_images\img_001_7455a0c1f5a2.jpg)

![24272af8d5c945898d5d1136ea97c1b3.jpeg](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO结构原理图与模式配置（以STM32为例）_images\img_002_e1274a989755.jpg)

#### 输入模式配置

当STM32器件I/O引脚配置为输入时，必须选择以下三个选项之一：

• 带内部上拉的输出。STM32器件中使用上拉电阻，以确保在浮动输入信号的情况下具有良好定义的逻辑电平。根据应用要求，可以使用外部上拉电阻。

• 带内部下拉的输入。在STM32器件中使用下拉电阻，确保在浮动输入信号的情况下具有良好定义的逻辑电平。根据应用要求，可以使用外部下拉。

• 浮空输入。信号电平跟随外部信号。当没有外部信号时，施密特触发器在由外部噪声引起的逻辑电平之间随机切换。这增加了总体消耗。

编程为输入时，I/O端口具有以下特征：

• 输出缓冲器被关闭；

• 施密特触发器输入被打开；

• 根据GPIOx\_PUPDR寄存器中的值决定是否激活上拉或下拉电阻；

• 输入数据寄存器每隔 1 个 AHB 时钟周期对 I/O 引脚上的数据进行一次采样；

• 通过读取GPIOx\_IDR输入数据寄存器可获取I/O状态；

#### 输出模式配置

当STM32器件I/O引脚配置为输出时，必须选择以下两个选项之一：

• 推挽输出模式：

推挽输出实际上使用两个晶体管：一个PMOS和一个NMOS。每个晶体管接通才能将输出驱动到适当的电平：

– 当输出必须驱动为高电平状态时，顶部晶体管（PMOS）导通

– 当输出必须驱动为低电平状态时，底部晶体管（NMOS）导通

两个晶体管的控制通过GPIO端口输出类型寄存器（GPIOx\_OTYPER）完成。

将输出寄存器（GPIOx\_ODR）的相关位写0可激活NMOS晶体管，强制I/O引脚接地。

将输出寄存器（GPIOx\_ODR）的相关位写1可激活PMOS晶体管，强制I/O引脚接通VDD。

• 开漏输出模式：

开漏输出模式不使用PMOS晶体管，而是需要一个上拉电阻。

当输出必须变为高电平时，必须关闭NMOS晶体管，仅通过上拉电阻将电平拉高。该上拉电阻可以是内部的，典型值为40kOhm，并通过GPIO端口上拉/下拉寄存器（GPIOx\_PUPDR）激活。

编程为输出时，I/O端口具有以下特征：

• 可将输出缓冲器配置为开漏或推挽模式；

• 施密特触发器输入被打开；

• 根据GPIOx\_PUPDR寄存器中的值决定是否激活上拉或下拉电阻；

• 写入输出数据寄存器GPIOx\_ODR的值将I/O引脚状态置位；

• GPIOx\_ODR中的写入数据可从GPIOx\_IDR中读取，该寄存器每个AHB时钟周期更新一次；

#### 复用功能

在一些STM32 GPIO引脚上，用户可以选择复用功能输入/输出。每个引脚可与多达16个外设功能复用，例如通信接口（SPI，UART，I2C，USB，CAN，LCD等）、定时器、调试接口等。

所选引脚的复用功能通过两个寄存器配置：

• GPIOx\_AFRL（引脚0到7）

• GPIOx\_AFRH（引脚8到15）

对 I/O 端口进行编程作为复用功能时：

• 可将输出缓冲器配置为开漏或推挽模式

• 输出缓冲器由来自外设的信号驱动（发送器使能和数据）

• 施密特触发器输入被打开

• 根据GPIOx\_PUPDR寄存器中的值决定是否激活上拉或下拉电阻

输入数据寄存器每隔 1 个 AHB 时钟周期对 I/O 引脚上的数据进行一次采样。

对输入数据寄存器的读访问可获取 I/O 状态。

#### 模拟配置

有一些STM32 GPIO引脚可以配置为模拟模式，允许使用ADC、DAC、OPAMP和COMP内部外设。要在模拟模式下使用GPIO引脚，请考虑以下寄存器：

• - GPIOx\_MODER，选择模式（输入，输出，复用，模拟）

• - GPIOx\_ASCR，选择所需的功能，ADC，DAC，OPAMP或COMP

对 I/O 端口进行编程作为模拟配置时：

• 输出缓冲器被关闭

• 施密特触发器输入被禁用，因此I/O引脚的每个模拟值零消耗。施密特触发器的输出被强制为恒定值（0）。

• 上拉和下拉电阻被硬件关闭

对输入数据寄存器的读访问值为“0”。

#### GPIO配置指南

![ddf62f38d9204b028314af97177323a6.jpeg](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO结构原理图与模式配置（以STM32为例）_images\img_003_992f07f527d8.jpg)

![1dcc5b9f940d42839625bd79cba91919.jpeg](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO结构原理图与模式配置（以STM32为例）_images\img_004_e2b57aa098b4.jpg)

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [降压电路24V转12V，2个NPN三极管实现](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546287&idx=4&sn=aed1f8c4094552bcbdd5209801633b9e&scene=21#wechat_redirect)
    
-   [TL494 反相降压-升压转换器电路工作原理、电路设计、计算、测试](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544805&idx=1&sn=3c4b3a57e91c7d10a82e2ffee83fc504&scene=21#wechat_redirect)
    
-   [新能源纯电轿车能耗天梯图（车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524584&idx=1&sn=8853468ba35271b72d0ffa6729e1fb8f&token=507455025&lang=zh_CN&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO结构原理图与模式配置（以STM32为例）_images\img_005_a0b60db42148.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️