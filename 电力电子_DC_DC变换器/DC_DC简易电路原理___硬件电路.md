# DC-DC简易电路原理 + 硬件电路

原创 电路一点通 2024-08-27 11:47 广东

> 原文地址: [https://mp.weixin.qq.com/s/BacB8i9Ze0fXJ01-BYgP5Q](https://mp.weixin.qq.com/s/BacB8i9Ze0fXJ01-BYgP5Q)

## 一、DCDC简易电路原理

DCDC电路是直流转直流电路，将某直流电源转变为不同电压值的电路，分为升压电路和降压电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_000_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******

### 1.1电容、电感基础知识

#### 1.1.1电容

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_001_b5f41cc639f9.png)

电容两端电压不能突变。

通交流、阻直流；通高频、阻低频。

#### 1.1.2电感

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_002_726b617021eb.png)

通过电感上的电流不能突变。

通直流，阻交流；通低频，阻高频。

### 1.2升压电路原理

#### 1.2.1电感的作用

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_003_3267af35ce17.png)

如上图，开关闭合，电感充电，电阻短路，当2.2us后电感上电流达到2.4A。

开关断开，电源流经电感（电源电压＋电感电压，达到升压，电感放电）为电阻供电，2.4A的电流流过电阻，电阻两端电压达到12v。

但是，若开关闭合，电阻又被短路，电阻两端电压随开关闭合与断开变化。

#### 1.2.2二极管的作用

开关闭合，电源向电感充电，电容、电阻短路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_038_69d56e58e330.png)

左图，开关断开，电源流经电感（电源电压＋电感电压，达到升压，电感放电）向电容充电，并为电阻供电。

右图，开关闭合，电源向电感充电，二极管隔离两边电路；电容（达到电源电压＋电感电压）向电阻放电。

现实，将开关换成MOS管，MOS管导通，电源给电感充电，电容给电阻放电；MOS管断开，电源电流流经电感向电容充电，给电阻供电。 

#### 1.2.3注意点

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_005_2b1a593b3720.png)

升压到12v时，输出电流只有0.25A，不足以驱动电机。

所以需要并联许多节干电池，增加输入电流才行。既然有这么多干电池了，为什么不直接串联达到12v？还可以省略升压电路。

### 1.3降压电路原理

通过不停的开关达到降压的目的，实际中，开关换成MOS管 。

#### 1.3.1调节占空比

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_006_74a6f5fa7559.png)

#### 1.3.2电路原理

（1）开关闭合

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_007_ea84c1ddedaf.png)

如左图，开关闭合，二极管截至，电源给电感、电容充电，给负载供电。

但是通过电感上的电流不能突变，电感上感应出反向电流，使得负载端的电压不足12v，使![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_008_b4d2120c844c.png)，如右图。

随时间增加，电感上电压减少，负载电压上升，若时间长，电感上电压将降为0v，负载上电压变为12v，因为电感上电流不变，则相当于一段导线。

所以要严格控制开关通断的时间。

（2）开关断开

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_009_880da633479f.png)如右图，开关断开，电感放电。随着电感上电压减小，负载两边的电压也减小，如右图。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_010_7b438052dfb5.png)可以达到如上图的效果。

（3）电容作用

储能、滤波

使负载两端电压更加的平滑。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_011_1fdea15dc691.png)

#### 1.3.3电路损耗

不足10%，电路效率90%。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_012_f4c4225c8497.png)

## 二、基于MP１４７０芯片降压电路的初步了解

### 2.1阅读芯片数据手册

#### ２.１.１基本信息（提炼最重要的信息）

-   输入电压：4.7~16v，最大不超过16v
    
-   最大输出电流：2A
    
-   开关频率：500KHz
    
-   同步、降压
    
-   封装：TSOT23-6
    
-   ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_013_1947a3e845b6.png)\=55℃/w,在PCB上每上升1w，则温度·上升55℃。
    
-   应用信息：APPLICATION INFORMATION　在实际应用中的计算、选型
    
-   PCB　Layout　Guidelines
    
-   应用实例
    
-   封装参数图
    

#### ２.１.２管脚信息

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_014_d487a3b8e41b.png)

引脚号

名称

描述

1

VIN

电源电压。

MP1470 的工作电压为 4.7V 至 16V。

需要一个电容器来去耦合输入。

使用宽 PCB 线连接 VIN。

2

SW

开关量输出。

使用宽 PCB 线连接 SW。

3

GND

系统接地。

GND是调节输出电压的参考地。

在PCB布局期间需要格外小心，用铜线和通孔连接GND。

4

BST

引导结构。

在SW和BST之间连接一个1uF BST电容和一个电阻，以在高边开关驱动器两端形成个浮动

电源。

5

EN

使能。

驱动EN高以启用MP1470。

对于自动启动，请连接到带有100K欧的上拉电阻。

6

FB

反馈意见。

将 FB 连接从输出端到 GND 的外部电阻分压器的抽头，以设置输出电压。

当FB电压下降到600mV以下时，频率折返比较器降低振荡器频率，以防止在短路故障期间

电流限制失控

### 2.2原理图分析

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_015_9ce1b22216df.png)

#### ２.2.1自举电容

（1）基本信息

连接在BST脚上的C1电容

作用：保证MOS管持续导通

取值：在DCDC降压电路中取值约为0.1~1uF，该芯片固定为1uF

（2）原理

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_016_c5c3cf8cbc48.png)

1.  Vin输入与SW输出之间存在一个MOS管
    
2.  导通条件:![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_017_0eccdac16ed1.png)
    
3.  存在问题：没有自举电容时，MOS不能完全饱和导通。  
    例如，当阈值![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_018_6c902dd72ed7.png)\=4V时，g端电压要大于s端4V，MOS管才能导通。  
      
    开始上电![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_019_c308bd903c30.png)，MOS管导通，d→s导通。  
    随着![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_032_49d56736bbf5.png)↑，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_030_dc7ce90a0ebf.png)↓。  
    当![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_022_dc7ce90a0ebf.png)＜4V时（例如![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_024_49d56736bbf5.png)\=8.001V），MOS管进入放大状态，相当于大电阻，有压降，功耗比较大。  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_020_49d56736bbf5.png)稳定在8.001V，不可能达到12V。
    
4.  解决办法：加上自举电容。  
      
    开始上电![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_025_c308bd903c30.png)，MOS管导通，d→s导通。同时自举电容充电到12V。  
      
    随着![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_027_49d56736bbf5.png)↑（如![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_023_49d56736bbf5.png)\=5V），由于二极管存在，电容不能放电，电容两端电压被![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_026_49d56736bbf5.png)抬高至12V+5V，同时![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_029_486b6c54b349.png)\=12V+5V=17V。  
      
    由于电容的存在，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_033_dc7ce90a0ebf.png)始终为12V，满足![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_031_0eccdac16ed1.png)，MOS管始终处于饱和导通状态，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_028_49d56736bbf5.png)可以达到12V。
    
5.  总结：利用二极管加电容将![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_021_dc7ce90a0ebf.png)钳位在12V，MOS管始终导通。
    

#### ２.2.2续流电感

（1）基本信息

连接在SW脚上的L1电容

作用：作为外围电路，实现降压

（2）原理

详情见1.3降压电路原理

#### 2.2.3反馈网络

（1）基本信息

由连接在FB引脚上的R2,R3,R4组成

作用：设置输出电压

（2）原理

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_034_994b39442e22.png)

1.  原理：R1，R2电阻对输出电压实现分压后，将R2两端电压值反馈给FB引脚，FB引脚得到电压值后与设定的电压值比较，可以通过调节芯片中MOS管开关频率（调节占空比）来调整输出电压。
    
2.  R2取值：首先，选择 R2 的值。  
    R2 值应合理选择，因为 R2 值过小会导致相当大的静态电流损耗，但 R2 值过大又会使 FB 对噪声敏感。  
    建议 R2 在 5 - 100kΩ 之间。通常情况下，R2上电流在 5 - 30µA 之间可在系统稳定性和空载损耗之间取得良好平衡。
    
3.  R1取值：可以根据下面的公式（手册提供）
    
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_035_d9ec488e66f8.png)
    
    手册还提供了这部分常见输出电压的推荐参数（![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_036_502ed39420b1.png)）  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_037_29a1fb4ef7b9.png)
    

#### 2.2.4其他器件

C2，C3，C4，C5，C6：均滤波。

其中为Vin滤波的电容C3和C4，选择一大一小（相差100倍），小电容滤高频率，大电容滤低频率。

R1：分压，可调节EN阈值。

以上器件参数均可采纳手册建议。

## 三、总结——升降压电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_004_69d56e58e330.png)

DCDC升压电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_039_880da633479f.png)

DCDC降压电路

升降压电路均使用电容电感，但是位置不一样则功能不一样，总结如下。

  

升压电路

降压电路

电感

在开关前，用于和电源串联升压

在开关后，和负载串联，用于分压降压

电容

有电感，电感上，我充电；没电感，我再上

滤波，使波形不要太尖锐

##   

## 四、基于MP１４８４DN芯片的PCB设计要点

### 3.1准备工作

下载对应的DCDC芯片数据手册对以下内容进行预先解读

-   预先了解DCDC的功率及转换电压范围
    
-   对芯片的最大电流进行解读
    
-   对DCDC的管脚定义进行了解
    
-   是否为高发热量转换芯片
    
-   PCB layout guide
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_040_5fd991ab9099.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_041_e798417804ef.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_042_9ca84a9d1fa8.png)

### 3.2原理图

### ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_043_a359f02e295f.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_044_73a41ea1da63.png)分析原理图，做到“心中有环”，“环”指的是有大电流（主干道）流过的闭合回路，环面积越小越好，布局紧凑。

在原理图上的“环”是一个完整的电路的环，在PCB中的体现一方面是该回路，另一方面更多的是同标签的一片铜。

### 3.3PCB预布局

心中有环，环要最小。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_045_f78f3860039a.png)

输入、输出回路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_046_92bc66dc780d.png)

同标签的铺铜

（1）按照原理图，先随便放置所有器件

（2）先摆放输入和输出主干道上的器件

原则：兼顾输入环（红色）和输出环（绿色）都要最小，各个管脚相互最近。例如C2 的正近IN，负靠近GND。

（3）反馈网络，使能网络，SS角，COMP角：靠近主芯片管脚。

（4）BS管脚:阻碍主干道，放在背面。

### 3.4PCB优化布局

（1）显示全部，打开飞线，考虑布线。

（2）在摆放器件时，器件布局尽量紧凑，使电源路径尽量短.

（3）布局时注意环路面积。

（4）器件归中对齐，调整间距。

（5）滤波器件需合理放置时，滤波电容在电源路径上保持先大后小原则。

（6）注意留出打孔和铺铜的空间，以满足电源模块输入/输出通道通流能力。

（7）对于输出多路的开关电源尽量使相邻电感之间垂直放置，大电感和大电容尽量布置在主器件面

### 3.5铺铜与打孔

（1）主干道铺铜；非主干道走线。

（2）打孔换层的位置须考虑滤波器件位置，输入应打孔在滤波器件之前输出在滤波器件之后，这样才是经过的滤波后的信号。

（3）在铺整块地的铜时的步骤：（铺地的铜和其他铜之间是没有连接的）

1.  切割板外形
    
2.  铺铜管理器中进行铺铜
    
3.  选择铺铜的边界是板外形
    
4.  选择铺铜的层为GND
    
5.  下面选择第二个为去死皮
    
6.  应用
    

（4）在输出处的打孔，覆盖上绿油，防止外界信号干扰；在主芯片处的打孔不用覆盖绿油，更加便于散热。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_047_26afc0554a07.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC简易电路原理___硬件电路_images\img_048_cfa3fe62720e.other)

  

## **一点通推荐**

  

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [看图学集成电路选用检测与查用100问(pdf 302页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)