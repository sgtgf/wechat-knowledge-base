# STM32、GD32、ESP32 的区别

原创 硬件笔记本 2023-04-12 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/iN8DPOrggMNqspWaOCg0RQ](https://mp.weixin.qq.com/s/iN8DPOrggMNqspWaOCg0RQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

_**01**_ 

  

  

**前言** 

  

STM32：意法半导体在 2007 年 6 月 11 日发布的产品，32位单片机。  

GD32：兆易创新 2013 年发布的产品，在芯片开发、配置、命名上基本模仿 STM32，甚至 GPIO 和 STM32 都是 pin to pin 的，封装不改焊上去直接用。有时候 STM32 的源码不修改，重新编译烧写到 GD32 上就可以跑。当然也有很多不同，比如串口驱动、USB 、库文件等。

ESP32：乐鑫公司 2017 年开发的产品，和 STM32、GD32 不同，ESP32 主要面向物联网领域，支持功能很多，但引出 GPIO pin 脚很少，因此大多数 GPIO 都有很多复用功能。出厂就集成蓝牙、WiFi 等物联网必备功能，板子也很小，适合物联网。

_**01**_ 

  

  

**GD32 和 STM32 的区别**

  

GD32 是国产单片机，据说开发人员来自ST公司，GD32 也是以 STM32 作为模板做出来的。所以 GD32 和 STM32 有很多地方都是一样的，不过 GD32 毕竟是不同的产品，不可能所有东西都沿用 STM32，有些自主开发的东西还是有区别的。不同的地方如下：

#### 1、内核

GD32 采用二代的 M3 内核，STM32 主要采用一代 M3 内核，下图是 ARM 公司的 M3 内核勘误表，GD 使用的内核只有 752419 这一个 BUG。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_002_542ff3935029.png)

#### 2、主频

使用HSE(高速外部时钟)：GD32的主频最大108M，STM32的主频最大72M

使用HSI(高速内部时钟)：GD32的主频最大108M，STM32的主频最大64M

主频大意味着单片机代码运行的速度会更快，项目中如果需要进行刷屏，开方运算，电机控制等操作，GD 是一个不错的选择。

#### 3、供电

外部供电：GD32 外部供电范围是 2.6~3.6V，STM32 外部供电范围是2.0~ 3.6V或1.65~ 3.6V。GD 的供电范围比 STM32 相对要窄一点。

内核电压：GD32 内核电压是 1.2V，STM32 内核电压是 1.8V。GD 的内核电压比 STM32 的内核电压要低，所以 GD 的芯片在运行的时候运行功耗更低。

#### 4、Flash差异

GD32 的 Flash 是自主研发的，和 STM32 的不一样。

GD Flash 执行速度：GD32 Flash 中程序执行为 0 等待周期。

STM32 Flash 执行速度：ST 系统频率不访问 flash 等待时间关系：0 等待周期，当 0<SYSCLK<24MHz，1 等待周期，当 24MHz<SYSCLK≤48MHz，2 等待周期，当 48MHz<SYSCLK≤72MHz。

Flash 擦除时间：GD 擦除的时间要久一点，官方给出的数据是这样的：GD32F103/101 系列 Flash 128KB 及以下的型号， Page Erase 典型值 100ms， 实际测量 60ms 左右。对应的 ST 产品 Page Erase 典型值 20~40ms。

#### 5、功耗

从下面的表可以看出 GD 的产品在相同主频情况下，GD 的运行功耗比 STM32小，但是在相同的设置下 GD 的停机模式、待机模式、睡眠模式比 STM32 还是要高的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_003_da25d2e61769.png)

#### 6、串口

GD 在连续发送数据的时候每两个字节之间会有一个 Bit 的 Idle，而 STM32 没有，如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_004_ca5256349e10.png)

GD 的串口在发送的时候停止位只有 1/2 两种停止位模式。STM32 有 0.5/1/1.5/2 四种停止位模式。

GD 和 STM32 USART 的这两个差异对通信基本没有影响，只是 GD 的通信时间会加长一点。

#### 7、ADC 差异

GD 的输入阻抗和采样时间的设置和 ST 有一定差异，相同配置 GD 采样的输入阻抗相对来说要小。具体情况见下表这是跑在 72M 的主频下，ADC 的采样时钟为 14M 的输入阻抗和采样周期的关系：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_005_23ec1ec07c2d.png)

#### 8、FSMC

STM32 只有 100Pin 以上的大容量（256K及以上）才有 FSMC，GD32 所有的 100Pin 或 100Pin 以上的都有 FSMC。

#### 9、103 系列 RAM&FLASH 大小差别

GD103 系列和 ST103 系列的 ram 和 flash 对比如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_006_4df7ee34bec9.png)

#### 10、105&107系列STM32和GD的差别

GD的105/107的选择比ST的多很多，具体见下表：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_007_cd4e41571764.png)

#### 11、抗干扰能力

GD 的抗干扰能力不如 STM32，还需要一定打磨。

  

_**03**_ 

  

  

**ESP32 和 STM32**

  

ESP32 是乐鑫公司推出的一款采用两个哈佛结构 Xtensa LX6 CPU 构成的拥有双核系统的芯片。所有的片上存储器、片外存储器以及外设都分布在两个 CPU 的数据总线和／或指令总线上。

相比于 STM32 的一个大家族，ESP32 虽然也代表一个系列，但目前来说，这个系列的成员还是比较少的，我们看下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_008_03f0088b5573.png)

资源如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_009_51d8894b558d.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_010_3f15a13800ac.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_011_ae32c1b5c7e4.png)

功能框图如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_012_a2f2d962c3b5.png)

模块（非芯片）的引脚分布如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_GD32_ESP32_的区别_images\img_013_aab263cdb571.png)

ESP32 这个模块的 IO 并不多，估计也就 30 个左右（芯片有34个，但是模块中外接 FLASH 用掉了一些）。但是你会发现它有几个特点：

1、集成了非常多的外设接口，SPI、IIC、IIS、AD、DA、PWM、IR、UART、CAN等等。IO 数量有限，所以基本上每个 IO 都有多个功能。

2、片内flash和ram很大，flash有448KB，ram有520KB。而模块上直接挂了一个4MB的flash。

3、速度快！虽然外接晶体的频率只有40MHZ，但通过内部主频可以支持80MHZ、160MHZ、240MHZ，运算能力高达600MIPS。

4、有wifi和蓝牙！当前两者不能同时使用。

STM32 和 ESP32 基本是有各自不同的定位。ESP32 偏向体积小巧、速度超快、功能强大，通过 wifi 接入网络，专门为物联网而生；而 STM32 偏向管脚丰富、功能全面，虽然没有 wifi 和蓝牙，速度也没有 ESP32 快，但是可以通过网口接入网络，可以控制更多的外设，为消费电子和工业控制而生。

  

_**04**_ 

  

  

**总结**

STM32 和 GD32 是同质化产品，区别一个是国外，一个是国产，最近流行国产化替代，所以 GD32 还是很有发展前景的。

**物联网也是一个好方向，因此 ESP32 也是很有前景的。**

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。