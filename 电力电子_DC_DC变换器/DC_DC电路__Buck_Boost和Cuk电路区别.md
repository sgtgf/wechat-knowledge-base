# DC/DC电路——Buck、Boost和Cuk电路区别

原创 电路一点通 2025-06-07 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/LQxApn0TpgqhR5vyd1wDfA](https://mp.weixin.qq.com/s/LQxApn0TpgqhR5vyd1wDfA)

* * *

## 前言

     **DC-DC电路**的功能是将直流电变为另一固定电压或可调电压的直流电，包括**直接直流变流电路**和**间接直流变流电路**。前者也称**斩波电路**，这种情况下输入与输出之间不隔离；后者（间接直流变流电路）是在直流变流电路中增加了交流环节，在交流环节中通常采用变压器实现输入输出间的隔离，因此也称为**带隔离的**直流-直流变流电路或**直-交-直电路**。  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_000_e62cfc4151c6.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  
     直流斩波电路的种类较多，包括六种基本斩波电路：降压斩波电路（**Buck** Chopper），升压斩波电路（**Boost** Chopper），升降压斩波电路，**Cuk**斩波电路，Sepic斩波电路和Zeta斩波电路，本篇文章主要对Buck、Boost和Cuk三种基本电路展开介绍。

* * *

## 一、降压斩波电路（Buck电路）

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_001_3b05148b7e49.png)  
     Buck电路的原理图如上图所示。该电路使用一个全控型器件V (即开关管，图中为IGBT，若采用晶闸管需要设置辅助电路使晶闸管关断) ，续流二极管VD的作用是在V关断时给负载中电感电流提供通道，图中Em为反电动势，只有在负载中含有直流电动机或蓄电池时其值不为0，其余情况可忽略。  
基本原理：  
     通过开关方式，把一种电压等级较高的直流电变换成一种电压等级较低的直流电，它的输出电压可由下式计算：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_002_5349f9efdd21.png)  
     如下图b所示，在 t = 0时刻驱动V导通，电源E向负载供电，负载电压 uo\= E，负载电流 io 按指数曲线上升；在 t = t1 时刻，控制V关断，负载电流经二极管VD续流，负载电压 uo近似为零，负载电流呈指数曲线下降。为了使负载电流连续且脉动小，通常使串联的电感 L值较大。  
     至一个周期T结束，再驱动V导通，重复上一周期的过程。当电路工作于稳态时，负载电流在一个周期的初值和终值相等。负载电流平均值为  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_003_515d9c9c5f1c.png)

     若负载中 L值较小，在V关断后至周期末（t2时刻）之前负载电流已经衰减至零，出现负载电流断流的情况，应尽量避免该情况的出现。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_004_5dbf423d470c.png)

     式中α为占空比，ton为开关管导通时间，T为开关周期，E为输入端电源电压，由上式可知，通过控制开关管的导通时间ton，可方便的改变输出电压大小。在DC/DC电源设计时开关管可由专用PWM集成电路（如TL494）控制，也可用单片机、DSP、CPLD等器件完成控制。  
     在大多数小功率直流电源应用场合，可用DC/DC专用集成电路完成降压功能。常用的降压芯片有：NCP1522、MC34063、LM2575、LM2576等。下面先介绍常用的美国国家半导体公司（NATIONAL）生产的LM2576 降压集成电路，该芯片的主要性能指标有：

  

  

最大输出电流

输入电压

最大输出电压

开关频率

3A

3.5V~40V

65V

内置52kHz

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_005_34ba913fb798.png)  
     原理图如上，图中芯片5脚为使能控制端，接低电平时有电压输出，接高电平无电压输出；续流电感L1的电感量为150μH左右，L2和C1构成的滤波网络以减少输出端电压纹波；4脚为电压反馈端，改变电位器R2的大小，可获得所需要的输出电压。输出电压和反馈电阻可由下式计算：

  

  

输出电压

反馈电阻

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_006_7cd3946ace3d.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_007_98a4f662f340.png)

     式中Uref为基准电压取1.23V，R1取1kΩ至5kΩ；当LM2576为高压版时，它的输出电压为1.23V至50V。

  

## 二、升压斩波电路（Boost电路）

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_008_d0df922f2a7b.png)  
     分析升压斩波电路的工作原理时，首先假设电路中电感L值很大，电容C值也很大。  
     当可控开关V处于通态时，电源E向电感L充电，充电电流基本恒定为I1，同时电容C上的电压向负载R供电。因C值很大，基本保持输出电压uo为恒值，记为Uo。设V处于通态的时间为ton，此阶段电感L上积蓄的能量为 EI1ton 。当V处于断态时E和L共同向电容C充电并向负载R提供能量。设V处于断态的时间为toff，则在此期间电感L释放的能量为（Uo - E)I1toff。当电路工作于稳态时，**一个周期T中电感L积蓄的能量与释放的能量相等**，即  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_009_0aa3468a4eec.png)

因此

  

  

输出电压

升压比的倒数β

α与β的关系

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_010_db8824ff69e5.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_011_5b2b8b25b37d.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_012_6fcfe9da36d0.png)

     由上式可知，变换器输出电压恒大于等于输入电压E，通过控制开关管的占空比α，可改变输出电压的大小。  
     如果忽略电路中的损耗，则由电源提供的能量仅由负载R消耗，即 EI1\=UoIo.

  

  

输出电流平均值

电源电流

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_013_e39e99c50d21.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_014_943845212f16.png)

     大多数应用场合，也可用专用DC/DC集成电路完成升压功能。常用的DC/DC升压芯片有： NCP1450、MC34166、MAX1676、LM2577等。下面主要介绍较常用的NATIONAL公司生产的LM2577 升压集成电路，该芯片的主要特点有：

  

  

最大输出电流

输入电压

最大输出电压

开关频率

3A

3.5V~40V

65V

内置52kHz

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_015_a04f7bf546f5.png)  
     以LM2577构成的升压电路如上图所示，它的5脚为电压输入端，4脚内接功率开关管，1脚为RC补偿端，构成比例积分电路；2脚为电压反馈端，改变电阻R1的大小，可获得所需要的输出电压；升压电感L1的电感量为100μH左右。输出电压可由下式计算：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_016_08f3e0aa07fd.png)  
     上式中，Uref为基准电压1.23V，故改变电阻R1大小，可实现1.23V至65V的任意输出。  
     目前很多便携式电子产品用单节电池供电，故经常需要把1.2V左右的电压升至3.3V或5V，供单片机等其它电路工作。可选用的低电压升压芯片有：NCP1450、NCP1421、MAX1763、MAX1708等。下面介绍Maxim公司的MAX1708，该芯片为单片高效、CMOS、升压开关型DC-DC稳压器，只需配用少量的外围器件就可完成低电压升压功能。该芯片的主要特点有：

  

  

最大输出电流

输入电压

输出电压

开关频率

自身静态功耗

2A

0.7V~5V

3.3V、5V或可调输出2.5V~5.5V

内置600kHz

1mW

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_017_ad9c1eba9405.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_018_49b859971372.png)  
     MAX1708引脚排列如上图所示，其固定输出时的应用电路如图4-11所示，当C1换成固定电阻R2，R1改成电位器时，升压变换器就可实现输出电压在2.5V至5.5V范围内的任意可调。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_019_6f99491e5132.png)

##   

## 三、Cuk斩波电路

     Cuk斩波电路的最大特点就是输出电压的极性与电源电压的极性相反。 电路的原理图及其等效电路如下：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_020_86b0fca34107.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_021_1b42d73d65bb.png)  
     当V处于通态时，E—L1—V回路和R—L2—C—V回路分别流过电流。当V处于断态时，E—L1—C—VD回路和R—L2—VD回路分别流过电流。相当于等效电路中开关S在A、B两点之间交替切换。在该电路中，稳态时电容C的电流在一周期内的平均值为0. 从而有  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_022_95efabf63c59.png)  
     当开关S合到B点时，B点电压uB\=0，A点电压uA\= -uC；相反，当S合到A点时，uB\=uC，uA\=0. 因此B点电压uB的平均值为![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_023_2419baed9c78.png)

同理A点电压的平均值为![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_024_6180904f395b.png)

又因电感L1的电压平均值为0，所以E=UB，L2电压的平均值为0，于是**输出电压Uo与电源电压E的关系**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_025_c46c90c941fc.png)

     与升降压斩波电路(或称升降压极性反转变换器电路，Buck-Boost Converter)相比，Cuk斩波电路一个明显的优点是其输入电源电流和输出负载电流都是连续的，没有阶跃变化，有利于对输入、输出进行滤波。

* * *

##   

## 声明:

本篇文章中的部分图片和内容来源于网络和书本教材，因此本篇仅供学习使用。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路__Buck_Boost和Cuk电路区别_images\img_026_ae6a2099762b.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️