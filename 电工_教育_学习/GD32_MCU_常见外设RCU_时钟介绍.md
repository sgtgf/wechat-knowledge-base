# GD32 MCU 常见外设RCU 时钟介绍

原创 电路一点通 2024-05-06 20:40 广东

> 原文地址: [https://mp.weixin.qq.com/s/YF1nTvuTriG9zhEEMzcWag](https://mp.weixin.qq.com/s/YF1nTvuTriG9zhEEMzcWag)

5.1. RCU 时钟介绍  
众所周知，时钟是MCU能正常运行的基本条件，就好比心跳或脉搏，为所有的工作单元提供时间基数。时钟控制单元提供了一系列频率的时钟功能，包括一个内部RC振荡器时钟(IRC)、一个外部高速晶体振荡器时钟(HXTAL)、一个外部低速晶体振荡器时钟(LXTAL)、一个HXTAL时钟监视器、时钟预分频器、时钟多路复用器和时钟门控电路等。

![](D:\电脑文件\公众号知识库\电工_教育_学习\GD32_MCU_常见外设RCU_时钟介绍_images\img_000_f7d08786ae36.png)

  
本章，我们将通过一个“输出HXTAL时钟信号”的实验来熟悉RCU的工作流程

5.1.1. RCU 配置  
GD32系列MCU在启动后首先会执行Reset Handler，紧接着就会执行SystemInit()函数，而时钟的初始化，就是在这个函数中进行，其主要的功能是配置系统时钟CK\_SYS(即主频)，AHB、APB1以及APB2时钟。SystemInit()函数由GD32官方库提供，不同系列的MCU有一些差别，但实现方式基本相同：首先将RCU关于CK\_SYS，AHB、APB1以及APB2时钟配置的一些寄存器恢复到默认值，然后再执行system\_clock\_config()函数，用于具体的时钟配置。

  
实际上用户可以不用过于关心上述的实现方式，因为GD32库已经为您提供了多种时钟源及时钟选择，您只需按照以下步骤即可将时钟设置为您期望的值(以GD32F30x为例，其他系列类似)：  
(1) 在system\_gd32f30x.c中，用户可通过选择宏来进行预设的时钟配置，如  
代码清单 5-1.时钟配置选择宏定义，选择了HXTAL作为PLL时钟源，且配置CK\_SYS为120MHz。  
代码清单 5-1. 时钟配置选择宏定义  
/\* system frequency define \*/  
#define \_\_IRC8M (IRC8M\_VALUE) /\* internal 8 MHz RC oscillator frequency \*/  
#define \_\_HXTAL (HXTAL\_VALUE) /\* high speed crystal oscillator frequency \*/  
#define \_\_SYS\_OSC\_CLK (\_\_IRC8M) /\* main oscillator frequency \*/  
/\* select a system clock by uncommenting the following line \*/

  
/\* use IRC8M \*/  
//#define \_\_SYSTEM\_CLOCK\_IRC8M (uint32\_t)(\_\_IRC8M)  
//#define \_\_SYSTEM\_CLOCK\_48M\_PLL\_IRC8M (uint32\_t)(48000000)  
//#define \_\_SYSTEM\_CLOCK\_72M\_PLL\_IRC8M (uint32\_t)(72000000)  
//#define \_\_SYSTEM\_CLOCK\_108M\_PLL\_IRC8M (uint32\_t)(108000000)  
//#define \_\_SYSTEM\_CLOCK\_120M\_PLL\_IRC8M (uint32\_t)(120000000)

  
/\* use HXTAL(XD series CK\_HXTAL = 8M, CL series CK\_HXTAL = 25M) \*/  
//#define \_\_SYSTEM\_CLOCK\_HXTAL (uint32\_t)(\_\_HXTAL)  
//#define  
\_\_SYSTEM\_CLOCK\_48M\_PLL\_HXTAL (uint32\_t)(48000000)  
//#define  
\_\_SYSTEM\_CLOCK\_72M\_PLL\_HXTAL (uint32\_t)(72000000)  
//#define  
\_\_SYSTEM\_CLOCK\_108M\_PLL\_HXTAL (uint32\_t)(108000000)  
#define  
\_\_SYSTEM\_CLOCK\_120M\_PLL\_HXTAL (uint32\_t)(120000000)  
但这种情况下您使用的外部晶振需要是默认值，此值由HXTAL\_VALUE定义，如为8000000，那么您应该选择8MHz的外部晶振。  
当然，您可以使用其他规格的外部晶振，这种情况下就需要去修改RCU配置函数里面的一些参数，主要是分频和倍频系数，以达到期望的配置，具体如何修改，可以结合GD32的User manual中定义的RCU寄存器来对配置函数进行分析。

  
(2) 设置HXTAL\_VALUE的值。

此数值和RCU的初始化其实并没有太大关系，但如果您使用的外部晶振不是默认值，那么除了按照步骤(1)修改配置参数外，您还必须将此HXTAL\_VALUE的值修改为实际的外部晶振频率，这是因为在一些通信外设配置时，库函数会调用HXTAL\_VALUE值来设置波特率，如此值设置错误，会导致通信异常。

  
5.1.2. 非默认外部晶振配置时钟实例

  
GD32各系列固件库都已提供配置系统时钟的函数。需要注意的是，在使用外部晶振时，固件库中HXTAL\_VALUE 值 规 定 了 外 部 晶 振 的 默 认 值 ， 以 GD32F30x 系 列 为 例 ， 如 代 码 清 单 5-2.HXTAL\_VALUE选择宏定义所示，当芯片为非互联型(GD32F303)时，默认使用的外部晶振频率为8MHz，当芯片为互联型(GD32F305/307)时，默认使用的外部晶振频率为25MHz。  
代码清单 5-2. HXTAL\_VALUE选择宏定义

  
#ifdef GD32F30X\_CL  
#define HXTAL\_VALUE ((uint32\_t)25000000)  
#else  
#define HXTAL\_VALUE ((uint32\_t)8000000)  
那么，当我们使用非默认值的外部晶振时，该如何修改时钟配置函数呢？以GD32F303为例，首先我们先看下GD32F303的时钟树，如  
图 5-1. GD32F303系统时钟树。

![](D:\电脑文件\公众号知识库\电工_教育_学习\GD32_MCU_常见外设RCU_时钟介绍_images\img_001_97efef6b065f.jpg)

图 5-1. GD32F303系统时钟树

  
预分频器可以配置AHB、APB2和APB1域的时钟频率。AHB、APB2、APB1域的最高时钟频率分别为120MHz、120MHz、60MHz。RCU通过AHB时钟(HCLK)8分频后作为Cortex系统定时器(SysTick)的外部时钟。通过对SysTick控制和状态寄存器的设置，可选择上述时钟或AHB(HCLK)时钟作为SysTick时钟

  
ADC时钟由APB2时钟经2、4、6、8、12、16分频或由AHB时钟经5、6、10、20分频获得，它们是通过设置RCU\_CFG0和RCU\_CFG1寄存器的ADCPSC位来选择。

  
SDIO, EXMC的时钟由CK\_AHB提供。

  
TIMER时钟由CK\_APB1和CK\_APB2时钟分频获得，如果APBx(x=0,1)的分频系数不为1，则  
TIMER时钟为CK\_APBx(x=0,1)的两倍。

  
USBD的时钟由CK48M时钟提供。通过配置 RCU\_ADDCTL寄存器的CK48MSEL及PLL48MSEL位可以选择CK\_PLL时钟或IRC48M时钟做为CK48M的时钟源。

  
CTC时钟由IRC48M时钟提供，通过CTC单元，可以实现IRC48M时钟精度的自动调整。

  
I2S的时钟由CK\_SYS提供。

  
通过配置RCU\_BDCTL寄存器的RTCSRC位， RTC时钟可以选择由LXTAL时钟、IRC40K时钟或HXTAL时钟的128分频提供。RTC时钟选择HXTAL时钟的128分频做为时钟源后，当1.2V内核电压域掉电时，时钟将停止。RTC时钟选择IRC40K时钟做为时钟源后，当VDD掉电时，时钟将停止。RTC时钟选择LXTAL时钟做为时钟源后，当VDD和VBAT都掉电时，时钟将停止。

  
当FWDGT启动时， FWDGT时钟被强制选择由IRC40K时钟做为时钟源。

  
现在，我们结合图 5-1. GD32F303系统时钟树对时钟树进行分析：  
(1) 标注A为CK\_SYS，即系统主时钟，它一条线连接至CK\_I2S，给I2S外设提供时钟，另一条线经过AHB分频器，输出到CK\_AHB，即标注B。  
(2) CK\_AHB为AHB总线时钟，AHB总线时钟或直连，或经过APB1/APB2分频，给标注C位置的外设提供时钟。  
(3) 那么，CK\_SYS从何而来呢，我们看标注A的左边，CK\_SYS通过SCS位域选择CK\_IRC8M、CK\_PLL、CK\_HXTAL作为时钟来源，其中CK\_IRC8M来源于标注D，即IRC8M(MCU内部8M RC时钟)；CK\_HXTAL来源于标注F，即HXTAL(外部时钟)；CK\_PLL的来源较复杂，我们单独拿出来说。  
(4) CK\_PLL来源于锁相环倍频器输出，倍频系数通过PLLMF位域选择，而PLLMF来源于两个地方，一 个 为 IRC8M 的 2 分 频 ， 另 外 一 个 为 预 分 频 器 PREDV0 ， 而 PREDV0 来 源 于 标 注 E ， 即CK\_IRC48M(内部48M RC时钟)和标注F，即HXTAL(外部高速时钟)。  
(5) 通过以上分析可以得出结论，CK\_PLL的时钟源为D：IRC8M、E：IRC48M、F：HXTAL，用户通过相关寄存器设置选择时钟线。  
(6) 和前面分析相同，RTC的时钟来自于F：HXTAL的128分频、G：LXTAL(外部32.768K低速时钟)、F：IRC40K(内部40K RC时钟)；FWDGT的时钟来源于F：IRC40K。  
(7) 标注I位置为时钟输出线，它的作用是将MCU内部的一些时钟信号线输出到特定IO口上(大部分系列MCU的PA8口都可被设置为时钟输出口0，有些系列MCU含有两组输出IO，具体IO配置请参考各系列MCU Datasheet)用来给其他器件提供基准时钟。由图中可看出通过设置位域CK\_OUT0,输出的时钟包括CK\_PLL、CK\_IRC8M、CK\_HXTAL、CK\_PLL的2分频。  
结合以上分析，我们来看下GD32F30x固件库时钟配置函数(因篇幅有限，只贴出各分频和倍频配置部分)，还是以GD32F303芯片为例，如代码清单 5-3.时钟配置部分代码所示：  
  

代码清单 5-3. 时钟配置部分代码  
/\* select HXTAL/2 as clock source \*/  
RCU\_CFG0 &= ~(RCU\_CFG0\_PLLSEL | RCU\_CFG0\_PREDV0);  
RCU\_CFG0 |= (RCU\_PLLSRC\_HXTAL\_IRC48M | RCU\_CFG0\_PREDV0);  
/\* CK\_PLL = (CK\_HXTAL/2) \* 30 = 120 MHz \*/  
RCU\_CFG0 &= ~(RCU\_CFG0\_PLLMF | RCU\_CFG0\_PLLMF\_4 | RCU\_CFG0\_PLLMF\_5);  
RCU\_CFG0 |= RCU\_PLL\_MUL30;

  
可以看出，8MHz的HXTAL经过预分频器PREDV0分频成4MHz，再通过锁相环PLL倍频30倍到了120MHz。  
那么，当您选择其他规格的外部晶振，比如12MHz，则可以先通过预分频器PREDV0分频成6MHz，再通过锁相环PLL倍频20倍即可，如代码清单 5-4.使用12MHz外部晶振配置120M  
系统时钟。  
代码清单 5-4. 使用12MHz外部晶振配置120M系统时钟

  
/\* select HXTAL/2 as clock source \*/  
RCU\_CFG0 &= ~(RCU\_CFG0\_PLLSEL | RCU\_CFG0\_PREDV0);  
RCU\_CFG0 |= (RCU\_PLLSRC\_HXTAL\_IRC48M | RCU\_CFG0\_PREDV0);  
/\* CK\_PLL = (CK\_HXTAL/2) \* 20 = 120 MHz \*/  
RCU\_CFG0 &= ~(RCU\_CFG0\_PLLMF | RCU\_CFG0\_PLLMF\_4 | RCU\_CFG0\_PLLMF\_5);  
RCU\_CFG0 |= RCU\_PLL\_MUL20;

  
当然，在修改完配置函数后，别忘了将HXTAL\_VALUE值改为12000000。

  
需要注意的是，在进行时钟配置时，要严格按照 Datasheet中规定的时钟范围进行配置，如  
GD32F303 的 HXTAL 的 选 择 范 围 是 4~32MHz ， PLL 的 输 入 范 围 是 1~25MHz ， 输 出 范 围 是16~120Mhz，所以当使用32MHz的外部晶振时，不进行预分频，而直接倍频是不被允许的。

  
5.1.3. 硬件连接说明  
本章通过“输出HXTAL时钟信号”实验来熟悉RCU的工作流程。  
通过前面内容讲解可知，本章实验为“输出HXTAL时钟信号”，即通过PA8口将HXTAL输出，我们使用示波器，将探头连接到PA8口，从示波器上读取PA8口波形即可。

  
5.1.4. 软件配置说明  
本小节讲解RCU\_Example例程中RCU的配置说明，主要包括外设时钟配置、GPIO引脚配置、主函数介绍以及运行结果。  
软件设计的流程如下：  
（1）使能GPIOA时钟  
（2）初始化PA8，将此端口设置为备用功能模式(AFIO)  
（3）通过调用库函数选择HXTAL作为PA8时钟信号源  
外设时钟配置  
外设时钟配置如代码清单 5-5. RCU例程时钟配置所示，在GD32全系列MCU中需打开GPIOA时钟。  
代码清单 5-5. RCU例程时钟配置  
void rcu\_config(void)  
{  
/\* enable the GPIOA clock \*/  
rcu\_periph\_clock\_enable(RCU\_GPIOA);  
}

GPIO 引脚配置

  
代码清单 5-6. RCU 例程引脚配置

  
void gpio\_config(void)  
{  
/\* configure PA8 port \*/  
#if defined GD32F10X\_HD || GD32F30X\_HD || GD32F20X\_CL || GD32E10X  
gpio\_init(GPIOA, GPIO\_MODE\_AF\_PP, GPIO\_OSPEED\_50MHZ, GPIO\_PIN\_8);  
#elif GD32F1X0 || GD32F4XX || GD32F3X0 || GD32E23X  
gpio\_mode\_set(GPIOA,GPIO\_MODE\_AF,GPIO\_PUPD\_NONE,GPIO\_PIN\_8);  
gpio\_af\_set(GPIOA,GPIO\_AF\_0,GPIO\_PIN\_8);  
#endif  
}

  
GPIO的配置说明，请参考GPIO章节。

  
主函数说明

  
代码清单 5-7 . RCU 例程主函数  
int main(void)  
{  
rcu\_config();  
gpio\_config();  
#if defined GD32F10X\_HD || GD32F30X\_HD || GD32E10X  
rcu\_ckout0\_config(RCU\_CKOUT0SRC\_HXTAL);  
#elif defined GD32F20X\_CL || GD32F4XX  
rcu\_ckout0\_config(RCU\_CKOUT0SRC\_HXTAL,RCU\_CKOUT0\_DIV1);  
#elif GD32F1X0 || GD32F3X0 || GD32E23X  
rcu\_ckout\_config(RCU\_CKOUTSRC\_HXTAL,RCU\_CKOUT\_DIV1);  
#endif  
while(1){  
}  
}  
如代码清单 5-7 . RCU例程主函数，该主函数主要分成四部分，RCU时钟配置、GPIO配置、RCU输出 相 关库 函数 调 用和 while(1) 主 循环 ， 其中 RCU 输出 相 关库 函数 请 读者 结 合各 系 列 MCUDatasheet、User Manual进行RCU例程的分析。  
注意：因为是输出HXTAL，所以必须要使能HXTAL，否则PA8将无波形输出。一个简单的办法是将HXTAL作为CK\_SYS时钟源，请参考本章第一节内容

  
5.1.5. 运行结果  
如图 5-2. RCU例程运行结果为 RCU 例程运行结果，可看出，PA8 口正确输出了 HXTAL 波形。

![](D:\电脑文件\公众号知识库\电工_教育_学习\GD32_MCU_常见外设RCU_时钟介绍_images\img_002_7e02ef173581.jpg)

图 5-2. RCU 例程运行结果

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\GD32_MCU_常见外设RCU_时钟介绍_images\img_003_8cc272398f64.jpg)