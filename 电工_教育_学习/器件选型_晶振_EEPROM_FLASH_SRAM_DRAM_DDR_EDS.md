# 器件选型：晶振、EEPROM、FLASH、SRAM、DRAM、DDR、EDS

原创 电路一点通 2025-05-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/Cg2ysrG6iP4L9PMlFV3b2A](https://mp.weixin.qq.com/s/Cg2ysrG6iP4L9PMlFV3b2A)

### 时钟器件部分

#### 一、晶振简介

##### 1.1定义

晶振，即晶体振荡器。按照工作原理，可将其分为晶体（Crystal） 和振荡器（Oscillator）。

两者的区别很简单：Oscillator=Crystal+信号调理单路，振荡器只要供电就可以直接输出方波信号。

#### ![88f454df67824095aaa283d635e6c992.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_000_911b584dd5eb.png)

#####   

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_001_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

##### 1.2石英晶体谐振器的等效电路

![dec148cbc2a648a9b25cf0e77e12d8f9.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_002_5ad9dde60544.png)

##### 1.3谐振器电抗和频率

![0a2877038f7e4db09964fd98cd4d8d48.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_003_c02aa16d751c.png)

在 Fs 到 Fa 的区域即通常所谓的：“**并联谐振区**”，在这一区域晶振工作在并联谐振状态，该区域就是晶振的正常工作区域，Fa -Fs 就是晶振的带宽。带宽越窄， 晶振品质因素越高，振荡频率越稳定。在此区域晶振呈**电感**特性，从而带来了相当 于180 °的相移。实际工作频率![F_{p}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_004_4bf07252ee44.png)：

![F_{p}=F_{s}\left ( 1+\frac{C_{m}}{2\left (C _{0}+C_{L} \right )} \right )](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_005_8a4a7e86dc75.png)

在上式中只有参数![C_{L}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_007_082717096cbd.png)可以微调，通过微调 ![C_{L}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_006_082717096cbd.png) 来调节![F_{p}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_008_4bf07252ee44.png)，使其约等于![F_{s}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_009_0d3dbcb42669.png)，在并联谐振区域内。

##### 1.4石英晶体谐振器电路

![0b01ec3675fa4bdf906c81a8f124bda8.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_010_0e45f9c68c7d.png)

#### 二、时钟器件选型

##### 2.1晶振分类

晶体振荡器的分类方式有很多，从材料、特性等有很多的分类，简单的介绍如下：

1.  按制作材料，可分为：石英晶振和陶瓷晶振。
    
2.  按外形,可分为：长方形晶振、圆柱形晶振、椭圆形晶振。
    
3.  按封装形式,可分为：玻璃真空密封型晶振、金属壳封装型晶振、陶瓷封装型及塑 料壳封装型晶振。
    
4.  按谐振频率精度,可分为：为高精度型晶振、中精度型晶振及普通型晶振。
    
5.  按应用特性,可分为：串联谐振型晶振和并联谐振型晶振。
    
6.  按负载电容特性,可分为：低负载电容型晶振和高负载电容型晶振。
    
7.  按晶振的功能和实现技术的不同进行分类： 最简单的晶体振荡器（Crystal Oscillators），也叫钟振。加上电压调频功能，就叫压控晶振（VCXO）；加上温度补偿电路，就叫温补晶振（TCXO）；加上温度控制电路， 就叫恒温晶振（OCXO）。
    

##### 2.2晶振参数

1.  品体按照其技术指标分为五类:晶体振荡器、晶体谐振器、压控振荡器、温补振荡器、恒振荡器、陶瓷谐振器，
    
2.  按照其外观又可以分为以下两类:贴片式、直插式。
    
3.  规格频率:品振成品生产出规定的频率，通常标识在品振产品外壳上，就是上面的![F_{s}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_011_0d3dbcb42669.png)。
    
4.  品振工作频率:品振与工作电路共同产生的频率。
    
5.  调整频差偏差:在规定条件下，基准温度(25士2℃)时工作频率相对于标称频率所允许的偏差。
    
6.  温度频差:在规定条件下，在工作温度范围内相对于基准温度(25+2℃)时工作频率的允许偏差。
    
7.  老化率:在规定条件下，品体工作频率随时间而允许的相对变化
    
8.  静电容:等效电路中并接的电容，也叫并电容，
    
9.  负载电容:与品体一起决定负载谐振频率的有效外界电容。负载电容系列是:8PF、12PF、15PF、20PF、30PF、50PF、100PF。
    
10.  动态电阻：串联谐振频率下的等效电阻。
     
11.  负载谐振频率：在规定条件下，晶体与一负载电容相串联或相并联，其组合阻抗呈现 为电阻性时的两个频率中的一个频率。在串联负载电容时，负载谐振频率是两个频率中较低的一个，在并联负载电容时，则是两个频率中较高的一个。 
     
12.  负载谐振电阻：在负载谐振频率时呈现的等效电阻。
     
13.  基频：在振动模式最低阶次的振动频率。
     
14.  泛音：晶体振动的机械谐波。泛音频率与基频频率之比接近整数倍但不是整数倍，这 是它与电气谐波的主要区别。泛音振动有3次泛音，5次泛音，7次泛音，9次泛音等。
     
15.  **频率大小**
     
     ：频率越高，价格越高。频率越高，频差越大，从综合角度考虑，一般工程师会选用频率低但稳定的晶振，自己做倍频电路。总之频率的选择是根据需要选择， 并不是频率越大就越好。要看具体需求。比如基站中一般用10MHz的恒温晶振，因其有很好的频率稳定性，属于高端晶振。
     
16.  频率稳定度：关键参数，高端晶振可以达到10-9级别。指在规定的工作温度范围内，与标称频率允许的偏差，用PPm（百万分之一）表示。一般来说，稳定度越高或温度范围越宽，价格越高。对于频率稳定度要求±20ppm或以上的应用，可使用普通无补偿的晶 体振荡器。对于介于±1 至±20ppm 的稳定度，应该考虑温补晶振TCXO 。对于低于 ±1ppm 的稳定度，应该考虑恒温晶振OCXO。
     
17.  电源电压：常用的有1.8V、2.5V、3.3V、5V等。
     
18.  输出：根据需要采用不同输出。（HCMOS，SINE（削顶正弦波），TTL，PECL，LVPECL，LVDS，LVHCMOS 等）每种输出类型都有它的独特波形特性和用途。对称性、上升和下降时间以及逻辑 电平对某些应用来说也有具体要求。
     
19.  工作温度范围：工业级标准-40～+85℃这个范围往往只是出于设计者们的习惯，若20℃～+70℃已经够用，那么就不必去追求更宽的温度范围。
     
20.  相位噪声和抖动：相位噪声和抖动是对同一种现象的两种不同的定量方式，是对短期稳定度的真实度量。拥有好的相位噪声和抖动的振荡器的设计复杂，体积大，频率低， 造价高。所以一般越高端的晶振，即频稳越好的晶振，这些指标也相应越好。  
     ![ca5b70a96daf466cadcda71d6a1de6f3.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_012_e23951105961.png)  
     ![1942689e4f0e4aceab6218ed5e21a94e.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_013_9ad59e802ff7.png)
     
21.  牵引范围（VCXO）：是针对VCXO的参数。 带有压控功能的晶振为（VCXO），即通过 调节控制电压改变输出频率。牵引范围为变化频率(增大或减少)与中心频率的比值。 此值一般用ppm表示。通常牵引范围大约为100-200ppm，取决于VCXO的结构和所选择的 晶体。
     
22.  抖动：随着信号速率的不断提高，硬件时序设计中对时钟信号的要求也是越来越严格的。但实 际中时钟信号往往不可能总是那么完美，会出现抖动(Jitter)和偏移（Skew）问题。抖动有两种主要类型：确定性抖动和随机性抖动。  
      
     
23.  封装：与其它电子元件相似，石英振荡器亦采用越来越小型的封装。通常，较小型的 器件比较大型的表面贴装或穿孔封装器件更昂贵。所以，小型封装往往要在性能、输 出选择和频率选择之间作出折衷。贴片有7.0\*5.0、6.0\*3.5mm，5.0\*3.2mm， 3.2\*2.5mm，2.5\*2.0mm等封装。
     
24.  老化率：随着时间的推移，频率值随着变化的大小，有年老化和日老化两种指标。高 精度恒温晶振（OCXO）可以达到10-8 ppm/年。
     

以上是选型时应考虑的晶振参数，其中最重要的指标是频率稳定度。所谓高 端，就是频率稳定度非常好的晶振。随着技术的发展，对高端晶振的需求会日益增加。

（1）下图按照下面文字排列：

启动时间       抖动

占空比          温度变化

![5790ec567eb64844a2e6901bbd79c113.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_014_d42716f3852b.png)

（2）示波器实际检测

![17edea3edf3b42479bc5ba49be682dee.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_015_d76e3782a53d.png)

（3）手册解析

![11bf942016fa4c56a8db54054e93f370.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_016_3d4aca8c212c.png)

（4）PCB布线

![2eb329f0bcb14ff1aaa394fa3bf1585e.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_017_ce2d4a632d00.png)

* * *

### EEPROM部分

#### 一、存储器分类

![d8b0994429c34f14a412ed40f244e531.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_018_6f338013e054.png)

#### 二、EEPROM的原理

##### 2.1结构与原理

![44ebe2f114e545928f81959185e0da5e.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_021_078839662f1d.png)

FG（多晶硅等）放在CG与MOSFET通道之 间。由于这个FG在电气上是受绝缘层独立 的, 所以进入的电子会被困在里面。在一般 的条件下电荷经过多年都不会逸散。

一般EEPROM采用堆栈型单元构造。通过控制存储单元的**浮栅（FG）**中电荷量来实现数据的保持。

EEPROM仅通过电信号就可擦除被选择部分的内容，而且擦除的时候不需要从回路中取出。特定的存储单元的擦写次数的限制，一般可擦写1万到10万次。 EEPROM一般用于存储看，处理器设定信息。

例如：BIOS是指烧写在eeprom中引导系统启动和对硬件作初始化的一段代码。

![2f44e837053b45bfb9554a8c09d11908.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_020_e26ee038c2e7.png)

##### 2.2操作

![44ebe2f114e545928f81959185e0da5e.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_019_078839662f1d.png)

以浮栅中是否存有电子来区分逻辑状态0和1 （也会以电荷多少来区分多个逻辑状态比如00、 01、10、11等）。 

1.  擦：当控制栅接地漏极加一 正电压，则浮栅放电
    
2.  写：当漏极接地，控制栅加上足够高的电压时 （大于正常工作电压），交叠区将产生一个很 强的电场，在强电场的作用下，电子通过绝缘层到达浮栅，使浮栅带负电荷。
    
3.  读：在读取存储单元时，我们可以在控制栅上加一个中间电平，其值介于两个阀值Vth之间， 这样浮栅有电子的高开启管不能导通，而浮栅放电后的低开启管能正常导通，由此分辨出单 元存储的数据是“1”还是“0”。
    

![96f04b8b440b40fda80da711831d416a.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_022_4a82a52c4ada.png)

如果浮栅充满电子，控制线上的5伏电压将不足以使晶体管导通。因此，输出将是高的。  
如果浮栅不带电子，控制线上的5伏电压将使晶体管导通。因此，输出将是低的。

#### 三、EEPROM的种类

主流的串口EEPROM分为microwire、I2C、SPI三种接口方式

![ba108df985ab47de91b92647693b4b46.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_023_bcc46b41de6c.png)

#### 四、EEPROM的特点

1.   可以随机访问和修改任何一个字节；
    
2.  具有较高的可靠性；
    
3.  电路复杂/单位容量成本高；
    
4.  容量小；
    

* * *

### FLASH部分

#### 一、FLASH Memory简介

##### 1.1 FLASH Memory定义

1.  Flash 属于广义的 EEPROM，因为它也是电擦除的rom。与EEPROM不同，flash擦除时不再以字节为单位，而是以块或页为单位，速度更快 。
    
2.  任何 flash 器件的写入操作只能在空或已擦除的单元内进行，所以大多数情况下，在进行写入操作之前必须先执行擦除。
    
3.  Flash有Nor Flash和Nand Flash两种
    

##### 1.2FLASH Memory的构造

![c064bef0e23047b1ae053486170dc170.png](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_024_389b538ac03a.png)

Flash 存储单元由 EEPROM 过渡而来，核心依旧是浮栅，但省去了一个控制管。Nor 和 Nand 两种flash的存储单元 排列形式不同。

NOR 技术 Flash Memory 结构，每两个单元共用一个位线接触孔和一条源线，具有高编程速度和高读取速度的优 点。但功耗过大，在阵列布局上，接触孔占用了相当的空间，集成度不高。

NAND 结构通过多位的直接串联，将每个单元的接触孔减小到 1／2 n (n为每个模块中的位数)，因此，大大缩小 了单元尺寸。NAND 最大缺点是多管串联，读取速读较慢。

##### 1.3FLASH Memory的特点及用途

###### 1.3.1NOR型FLASH特点

1.  以块为单位进行擦除
    
2.  和DRAM一样可以随机存取
    
3.  读取速度快
    
4.  用途
    
5.  读取速度快、信赖性高，主要用于便携设备中程序的存储。
    

###### 1.3.2NAND型FLASH特点

1.  以页为单位进行读写，以块为单位进行擦除
    
2.  有一个单元可存储1bit和2bit 两种类型
    
3.  用途
    
4.  集成度高，可以对应大容量化，主要用于数据（多媒体数据等）的存储。
    

  

NOR

NAND

读取速度

高速

低速

擦除和读写速度

低速

高速

读取单位

1bit

page

写入单位

1bit

page

擦除单位

block

block

应用领域

系统程序

多媒体数据

高集成化

不适合

适合

* * *

### SRAM和DRAM部分

#### 一、信息的存储

信息在计算机中以二进制的形式存在，即信息被转化为由0和1组成的二进制代码的形式在计算机中进行加工、传输和存储。

#### 二、计算机存储单位

bit、Byte、KB、MB、GB等

bit：存放一位二进制，即是0或1，最小的存储单位

Byte：字节，8个二进制为一个字节，最常用的单位

word：对16bit的CPU来说1word=16bit，对32bit的CPU来说1word=32bit。

KB：千字节，=1024Byte

MB：兆字节，=1024KB

#### 三、SRAM六管结构的工作原理

##### 3.1组成

典型SRAM由六个晶体管组成。

SRAM 中的每一 bit 存储在由  4  个场效应管构成**两个交叉耦合的反相器**中。

两侧场效应管是用于读写的位线(Bit Line)的**控制**开关。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_025_298d6d444977.png)

下图简化更容易理解：

1.  图的上半部分：  
    A=0，上面 MOS 管导通，Q 被上拉到 Vdd ，Q=1；  
    A=1，下面 MOS 管导通，Q 被下拉到 Vss ，Q=0。  
    实现反向的功能
    
2.  图的下半部分：  
     ![_{}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_026_1677df366013.png)![M_{1}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_027_5a4183313a24.png) 和 ![M_{2}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_028_76de8420561d.png) 构成一个反相器， ![M_{3}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_029_238002c3b86b.png) 和 ![M_{4}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_030_8c2302b842c0.png) 构成一个反相器， ![M_{5}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_034_5fb9f3a45ee0.png) 和 ![M_{6}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_035_f9d7babd9d5a.png) 起到控制的作用。
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_033_cc2f58335298.png)

##### 3.2 Read

1.  字线 **WL** 有效，使得两个访问控制晶体管 ![M_{5}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_031_5fb9f3a45ee0.png) 和 ![M_{6}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_032_f9d7babd9d5a.png) 通路。
    
2.  第二步是保存在 Q 的值传递给位线 BL  和 ![\overline{BL}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_038_d204246da726.png)  。
    
3.  在位线 一侧，通过 M1 与 M5 的通路直接连到低电平使其值为逻辑  0  。
    
4.  在位线BL一侧，晶体管 M4 与 M6 通路，把位线连接到 VDD 所代表的逻辑 1 。
    
5.  ![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_037_a37c33415711.png)
    

##### 3.3 Writing

1.  写周期之初，把要写入的状态加载到位线 BL  和 ![\overline{BL}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_039_d204246da726.png)。
    
2.  如果要写入 0，则设置 BL 为 0；![\overline{BL}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_036_d204246da726.png)设置为 1 。
    
3.  随后字线 WL 加载为高电平，位线的状态被载入 SRAM 的基本单元。
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_040_46dab5b06b10.png)

#### 四、DRAM结构与工作原理

当 DRAM 的存储数据的状态由电容器存储了电荷量决定。

这就意味持续刷新电容器的电荷量。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_041_120705412ece.png)

  

#### 五、DRAM和SRAM的比较

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_042_873a40ab9c85.png)

* * *

### DDR-SDRAM 部分

#### 一、DDR 简介

##### 1.1 DDR概述

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_043_8986bd723a27.png)

Memory从最初的SDRAM到DDR、 DDR2、 DDR3再到DDR4， 都与SDRAM有着密切的联系。

（1）SDRAM: Synchronous Dynamic Random Access Memory, 同步动态随机存储器。

1.  同步(Synchronous )是指其总线工作在同步时序的方式下，总线时钟以 CPU 时钟频率为基准。
    
2.  动态(Dynamic )是指存储阵列需要不断的刷新来保证数据不丢失。
    
3.  随机(Access )是指数据不是线性依次存储的，而是自由指定地址进行数据的读写。
    

（2）DDR SDRAM: Double Date Rate SDRAM， 即双倍数据速率的 SDRAM， 俗称**内存**。

##### 1.2 DDR 的演变

（1）存储大小的演变

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_044_07b40ba5423e.png)

（2）输入输出电压的演变: 3.3V => 25V => 18V = >1.5V => 1.2V

电压越低则下降和上升的时间越少，速率越快。从 DDR1 开始，变成了上升沿和下降沿双采样。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_045_a4427ab11556.png)

##### 1.3存储容量

以 256Mb 为例，主要以下表中的第二列为例：

1.  存储空间被分成若干个块:Bank。
    
2.  地址数 = 行地址数\*列地址数  
    如在第二列中，行地址（Row Address）：A0 ~ A12 =![2^{13}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_046_28323eaf42d0.png)  
                             列地址（Column Address）：A0 ~ A9，A11=![2^{11}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_047_da7e14ac1e6c.png)  
    地址数=![2^{13}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_048_28323eaf42d0.png)\*![2^{11}](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_049_da7e14ac1e6c.png) = 16Mb 
    

存储容量：地址数  \*Bank \* 位宽 = 16Mb \* 4 \* 4 =16 Mb \* 4 \* 4 = 256 Mb = 32 MB

如果需要 64 Mb 容量 16位的内存，就可以安装两个 32M \* 8 的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_050_c3e7c7e6d0a6.png)

#### 二、框架对比

##### 2.1 SDRAM

掩码：DDR器件在进行突发操作（一次性连续发送若干字节）的时候，发送方不希望其中的某些字节被接收方接受的时候，就是用 DQM 信号进行屏蔽处理，让接受方接受忽略。

掩码是一个双向的数据，与数据总线的方向相同。

高电平有效，当有效是数据总线上的指定数据被接受端屏蔽。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_051_1154245a3d14.png)

##### 2.2 DDR3 SDRAM

多出了：ZQ输出阻抗校准单元、8位预处理单元

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_052_4e4720103f82.png)

#### 三、DDR信号分类

##### 3.1信号名称与分类

1.  时钟：在 PCB 布线时，要求中总长度小于 4000mil ，两差分线的长度之差小于 5~10mil。
    
2.  数据线 DQ 的长度等长标准为数据选通线 DQS，之差小于 50 mil
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_053_1744986780c8.png)

##### 3.2 DDR差分时钟

DDR 差分时钟：起触发时钟校准的作用

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_054_0cbd6dee1ac2.png)

##### 3.3 ZQ校正功能

DDR3 增加了**外部电阻**，校正 I/O 部分的 ODT 和 Ouput 驱动阻抗，更加精确。

ZQ 校正功能是 DDR3 的输入输出阻抗更加精确，更有利于信号的阻抗匹配。

DDR3 SDRAM 完全可以做到**输入输出自匹配**，不需要添加外部器件，节约板子空间，同时也提高了信号质量。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_055_1fa05ae528af.png)

##### 3.4 T or fly-by

使用 fly-by 拓扑可以提高信号质量，但是必须在末端匹配，需要增加电阻和 Vtt 电源。

在颗粒数量较少且速度不高时，使用 T 拓扑，可以不做匹配，节省匹配电阻和 Vtt 电源。

使用 fly-by 拓扑应该确认，Memory 控制器是否支持 write leveling 功能。

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_056_83f4f7251dcb.png)

DDR3 内存模组采用了 fly-by 的拓扑结构，同 时也引入了 DQS 和 clock 之间的时钟偏差， DDR3  SDRAM 允许控制器通过 Write leveling  的功能对这个 Skew 作出补偿。

* * *

### ESD部分

#### 一、ESD器件概述

##### 1.1引入

裸手接触单板，单板不能工作了怎么回事??

静电放电 (ESD-Electrostatic Discharge) :带有不同静电电势的物体或表面之间的静电电荷转移。

两种形式:接触放电，电场击穿放电。

##### 1.2简介

ESD 保护元件的作用是**转移**来自敏感元件的 ESD 应力，使电流流过保护元件而非敏感元件，同时维持敏感元件上的低电压。

ESD 保护元件还应具有**低泄漏**和**低电容**特性，不会降低电路功能，不会对高速信号造成损害，在多重应力作用下保护元件的功能不会下降。

瞬态电压抑制器( TVS )、压敏电阻和气体放电管是几种专用 ESD 保护元件。

##### 1.3 ESD特点

1.  高电位:可达数万至数十万伏，操作时常达数百至数千伏(人通常对3KV以下静电不易感觉到)
    
2.  低电量:静电流多为微安级(尖端瞬间放电例外)
    
3.  作用时间短:微秒级
    
4.  受环境影响大:特别是湿度，湿度上升则静电积累减少，静电压下降。
    

##### 1.4 ESD危害

1.  日本曾对不合格的电子产品进行过解剖分析，发现45%的不合格器件是由静电放电造成的
    
2.  美国也在上世纪八十年代初作过统计，它的电子工业每年由于静电造成的损失高达100亿美元
    
3.  英国经过数年调查了解到，该国上世纪七、八年年代的电子产品，每年因静电造成的损失约为20亿英磅，
    

#### 二、TVS器件选型

最常用

##### 2.1概述

瞬态抑制二极管简称 TVS (Transient Voltage Suppressor)，TVS的电气特性由P-N结面积，参杂浓度及晶片阻质决定的。

一般并联到线路中，使用时和稳压二极管非常相似。当输入电压突然增大超过阈值电压时， TVS 管反向导通，提供一个快速的电流泄放通道，从而将电压钳位在正常的工作范围之内，不影响后级被保护电路的正常工作。

##### 2.2特点

反映速度快(为pS级)，体积小，位电压低，可靠性高。

##### 2.3特性曲线(V/I)

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_057_e0d30444d21a.png)

  
(1) TVS 有双向（图上的符号）和单向之分，单向 TVS 管的特性与稳压二极管相似，双向 TVS 管的特性相当于两个稳压二极管反向串联。

（2）双向 TVS 可在正反两个方向吸收瞬时大脉冲功率，并把电压籍制到预定水平，双向 TVS 适用于交流电路，单向 TVS 一般用于直流电路。  
（3）主要特性参数:

1.  Vrwm(截止电压)
    
2.  VaR (击穿电压)
    
3.  Vc (最大籍位电压)
    
4.  lpp(脉冲峰值电流)
    

##### 2.4 TVS的选型

1.  最大钳位电压要小于电路允许的**最大安全电压**
    
2.  截止电压大于电路的最大工作电压，一般可以选择略大于电路的最大工作电压
    
3.  额定的最大脉冲功率要大于最大瞬态浪涌功率
    

#### 三、MOV压敏电阻

在电源输入端用的比较多。

压敏电阻的响应时间为 ns 级，比空气放电管快，比 TVS 管稍慢一些，一般情况下用于电子电路的过电压保护其响应速度可以满足要求。

压敏电阻在一定的电压、电流范围内，阻值随两端电压变化的器件。一般并联在电路中，机理基本同 TVS。

压敏电阻的结电容一般在几百到几千Pf的数量级范围，很多情况下**不宜直接应用在高频信号线路**的保护中，应用在交流电路的保护中时，因为其结电容较大会增加漏电流，在设计防护电路时需要充分考虑。

压敏电阻的通流容量较大，但比气体放电管小。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_058_14c820368cd0.png)

迅速变小，对地放电

  

#### 四、ESD设计要点

1.  高低电压的爬电距离，一般是 1.4 mm（如36V和3.3V）
    
2.  地的跨接与隔离
    
3.  面板开关防护（开关如按键需要人手去接触，加高压值电容，串接电阻（除了限流）把信号边缘变缓，防止过压过冲）
    
4.  隔离变压器的运用
    

案例1：USB接口的设计

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_059_b2378141359b.png)

案例2：网口的设计

1.  差分线RX+，RX-：选择 TVS 时要注意差分电平和反向截止电压之间的关系。  
                                   **反向截止电压要高于正常工作的差分电平。**
    
2.  反向漏电流不影响差分对的正常工作。
    
3.  TVS所能承受的最高电流，即峰值电流。
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_060_4a3733b331ad.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[一种好用的隔离型4-20mA发生电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546659&idx=2&sn=ff2999eec5c2ca80db9769e5a9a16762&scene=21#wechat_redirect)**
    
-   **[TL431可调正负直流双电源线性稳压电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247538767&idx=1&sn=e42ea0805142166169f5987bdfd886d5&scene=21#wechat_redirect)**
    
-   **[元器件选型：电阻、电容、电感、磁珠](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546178&idx=2&sn=8f0fc770f23174c5274911563b2a7762&scene=21#wechat_redirect)**
    
-   **[汽车涡轮增压器全面解析：结构、原理与故障诊断](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247520373&idx=2&sn=3e06002fa51ca344635a491e5dc2e59b&scene=21#wechat_redirect)**
    
-   **[图解电动自行车维修一本通-244页](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247519990&idx=2&sn=be2787724c0294678f0e03d1f8cf9c37&scene=21#wechat_redirect)**
    
-   **[维修电工（技师、高级技师）-常用传感器PPT课件](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456258060&idx=1&sn=3b857e1cd5f0bc2ee8b54e288e577ecf&scene=21#wechat_redirect)**
    
-   **[维修电工快速提高技术【培训教材-168页】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456258012&idx=1&sn=a2db4892c25829b1e2fb06269be7d42e&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\器件选型_晶振_EEPROM_FLASH_SRAM_DRAM_DDR_EDS_images\img_061_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️