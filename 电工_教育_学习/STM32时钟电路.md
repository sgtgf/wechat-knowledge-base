# STM32时钟电路

原创 电路一点通 2024-11-15 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/Px6C3LKcIhhXLgfuhSMBYQ](https://mp.weixin.qq.com/s/Px6C3LKcIhhXLgfuhSMBYQ)

## **一、为什么需要时钟电路。**

（1）单片机是一个集成芯片，其中包括**时序逻辑电路**，可以说，没有时序，就没有数字电路，也就没有单片机。所以，单片机离不开时钟。

（2）单片机中的众多寄存器，存储器等是由D触发器构成，而操作D触发器就需要时钟沿，自然也就离不开时钟。

（3）以MCS–51单片机为例：MCS–51单片机为12个机器周期执行一条指令，也就是说单片机运行一条指令必须要用12个时钟周期。没有这个时钟，单片机就跑不起来，也就没办法定时和进行和时间有关的操作。  
时钟电路是给电路创造一个时间概念。**单片机可以看成是在时钟驱动下的时序逻辑电路，时钟电路是必不可少的。**

******  
  
👇👇👇**更多技术资料👇👇👇****

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_000_42331bb209ab.other)

## **二、如何提供时钟电路。**

时钟信号是通过震荡提供的，而提供震荡的方式通常有RC震荡电路和晶振两种方式。

**RC震荡电路**（振荡器）只由电阻和电容构成，成本低，但是不精确，不稳定。

**晶振**：只要在晶体板极上施加交变电压，就会使晶片产生机械变形振动，此现象即所谓逆压电效应。成本高，但是精确稳定，还有用晶体振荡器一般还需要接两个15-33pF起振电容。

  

## **三、STM32F10xx时钟系统框图**

STM32F10xx时钟系统框图如下

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_001_7c204a9f97bf.png)

## 1、其中有五个蓝色方框的是系统的时钟源。

分别是：HSI高速内部时钟、HSE高速外部时钟、LSE低速外部时钟、LSI低速内部时钟和PLL锁相环倍频输出。

STM32内部有两个晶振和两个RC震荡电路。（高频和低频）

震荡电路（内部电路）

晶振电路（外部电路）

（1）HSI 高速内部时钟 （高频RC振荡器, 8MHz）

（2）HSE 高速外部时钟 （高频晶振, 8MHz）

（3）LSE 低速外部时钟 （低频晶振, 32.768kHz）

（4） LSI 低速内部时钟 （低频RC振荡器,42kHz）

（5）PLL 时钟来源，如图的三种。都是高频时钟。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_002_237a92509ef1.png)

PLL锁相环，倍频输出是一个倍频器的作用(倍频x2….x16共16种选择)，作为PLL时钟。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_003_5a0bf802cecd.png)

##  2、MCO输出内部时钟的四种来源：

SYSCLK系统时钟、HEI、HSE、PLLCLK的2分频。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_004_aa7956662fd3.png)

## 3、SYSCLK系统时钟：

### （1）三种时钟源，4种方式

① HSI 高速内部时钟

② PLL 锁相环

③ HSE 高速外部时钟 （可加CSS）

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_005_04fecceacb5b.png)

###  （2）CSS时钟监视系统：

稳定的 HSE 高速外部时钟无法正常工作的情况下，如果加了CSS，会使用不稳定的 HSI 高速内部时钟。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_006_259583151047.png)

### （3）AHB预分频器

SYSCLK系统时钟又可以通过AHB预分频器产生许多不同频率的时钟。共有9种分频选择，分别为1、2、4、8、16、64、128、256、512。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32时钟电路_images\img_007_44f085dc3ddf.png)

## **一点通推荐**

    
-   [运算放大器设计结构简单：整流滤波、电压比较、增益选择和](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533115&idx=1&sn=14f99585b49f44477f1b62512083575a&chksm=fcefa159cb98284f0737fc32802759eb24a4714526b751cce988e02d0906e7e791a6ac8ba248&scene=21#wechat_redirect)
    
-   [运放设计直流放大器（增益600，输入电阻120k，输出反相）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533098&idx=2&sn=4890b9fb6f8c3b79b7cb1cca24a6b073&chksm=fcefa148cb98285e89aeafcbf3ac00d891c61972630d68841e9591d5e049922e40663aef1104&scene=21#wechat_redirect)
    
-   [利用MOS管实现缓启动电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533086&idx=3&sn=9dbb5b7903cfe08bae2a55a4c9acc88a&chksm=fcefa17ccb98286ad0ede9cda32bbd304d5bdd894ef1a7e4b681ef684e1433cb4dbe9cff014b&scene=21#wechat_redirect)
    
-   [七种MOS管栅极驱动电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532923&idx=3&sn=be526df1e83b9e450ba9816475588c94&chksm=fcefa219cb982b0f48a9fae9a559bb60e29e5e7315fc148b3e53acb6ad0fcded5e1cb17fc580&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分