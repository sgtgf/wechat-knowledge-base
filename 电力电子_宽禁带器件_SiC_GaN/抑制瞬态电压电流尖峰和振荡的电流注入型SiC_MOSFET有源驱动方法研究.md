# 抑制瞬态电压电流尖峰和振荡的电流注入型SiC MOSFET有源驱动方法研究


> 原文地址: [https://mp.weixin.qq.com/s/NApLhnvEPCAlR7ndaLQqfQ](https://mp.weixin.qq.com/s/NApLhnvEPCAlR7ndaLQqfQ)

文章来源：中国电机工程学报

作者：冯超，李虹\*，蒋艳锋，赵星冉，杨志昌(北京交通大学电气工程学院，北京市海淀区 100044)

摘要：为了满足电力电子系统高频、高效和高功率密度的需求，碳化硅金属氧化物半导体场效应管(silicon carbide metal  oxide semiconductor field effect transistor，SiC MOSFET)越来越广泛地应用于各类电力电子变换器。其开关过程中存在瞬态电压电流尖峰和高频振荡，不仅对半导体器件的安全运行构成威胁，而且会恶化电力电子变换器的电磁兼容性。该文针对SiC MOSFET 开关过程中存在的瞬态电压电流尖峰和振荡的问题，分析SiC MOSFET 开关过程及瞬态电压电流尖峰和振荡产生机理，并在此基础上提出一种电流注入型有源驱动电路。该有源驱动电路通过在SiC MOSFET 开通过程的电流上升阶段向栅极注入反向电流，在关断过程的电流下降阶段向栅极注入正向电流，以达到抑制开关过程瞬态电压电流尖峰和振荡的目的。实验结果表明，提出的有源驱动电路能够有效抑制SiC MOSFET 开关过程瞬态电压电流的尖峰和高频振荡，从而从源头上改善了电力电子变换器的电磁兼容。  

关键词：碳化硅金属氧化物半导体场效应管；有源驱动；尖峰；振荡；电磁干扰  

0. 引言  

随着电力电子技术的发展和成熟，越来越多的应用场合对电力电子变换器提出高效、高功率密度、高可靠性的要求。经过多年的发展，传统硅(Si)基电力电子器件的性能已逼近甚至达到了其材料的本征极限，研究人员逐渐将目光转向以碳化硅(silicon carbide，SiC)为代表的宽禁带半导体材料。 相比Si 材料，SiC 材料具有宽禁带、高饱和电子漂移速率、高击穿场强、高热导率，因此SiC 器件具有更低的导通电阻、更快的开关速度、更高的击穿电压和更高的热导率，这些优异的特性为电力电子电路的简化及系统的小型化、高效化带来可能。 目前，SiC 器件，尤其是碳化硅金属氧化物半导体场效应管(silicon carbide metal oxide semiconductor  field effect transistor，SiC MOSFET)，越来越多地应用在电动汽车、新能源发电、轨道交通、电力系统、 感应加热等领域。但是由于SiC MOSFET 开关速度快，器件在开关过程中会产生大的dv/dt和di/dt，加之电路中存在杂散参数，所以器件的瞬态电压电流会产生大的尖峰和振荡，电压电流的尖峰和振荡一方面会危及器件的安全，使得在器件选型时必须留有较大的裕量，增加硬件成本，另一方面， 也会加剧电力电子变换器的高频电磁干扰。  

针对这些问题，实际中常采用的方法是优化PCB 设计、增加驱动电阻和增加RCD吸收电路。 优化PCB 设计能够一定程度减小电路的杂散参数，但是由于PCB设计需要兼顾设备安全性、外观、体积等诸多因素，杂散参数无法完全消除，能够发挥的作用有限；增加驱动电阻能够明显减小SiC  MOSFET的尖峰和振荡，但是增大驱动电阻会增加器件开关时间，减缓开关速度，从而增加开关损耗 和驱动损耗；增加RCD 吸收电路需要在功率电路额外加入电容、二极管等器件，会引入较大额外的损耗，降低变换器的效率。  

如何能在解决SiC MOSFET电压电流尖峰和振荡问题的同时，尽量不牺牲器件的开关速度和不降低变换器的效率，充分发挥SiC MOSFET的高频优势是工程应用中亟待解决的难题。近年来，越来越多的研究人员将目光转移到驱动侧，开展SiC  MOSFET有源驱动的研究。文献\[14\]采用两级驱动电阻的思想，为驱动电阻并联开关管，通过控制并联开关管的通断，实现在开关过程的不同阶段采用不同的驱动电阻，从而达到抑制开关电压电流尖峰和振荡的目的，但是该文献对于抑制的机理缺乏详细的理论分析，而且实验结果没有直接给出SiC MOSFET的开关过程。文献\[15\]提出一种基于复杂可编程逻辑器件(complex programmable logic  device，CPLD)的数字控制多级电阻有源驱动，该有源驱动方案通过在器件开关的不同时刻投切驱动电阻，抑制开关过程电压电流的尖峰和振荡，但是这种方案成本高且控制复杂，实现难度大。文献\[16\]提出一种基于砷化镓(GaAs)的光触发功率晶体管(optically triggered power transistor，OTPT)有源驱动，虽然该方案能够抑制SiC MOSFET开关过程电压电流的尖峰和振荡，但同样实现难度大且成本高。文献\[17\]提出一种基于CPLD的数字控制多级驱动电压有源驱动，通过在SiC MOSFET开关过程的不同阶段施加不同的驱动电压，达到抑制电压电流尖峰和振荡的效果，但是从文中的实验结果来看，该方案虽能对电压电流的尖峰幅值产生一定抑制效果，但是无法抑制电压电流的振荡。  

为了解决上述问题，本文在详细分析SiC  MOSFET 开关过程电压电流的尖峰和振荡产生机理和影响因素的基础上，提出一种电流注入型有源驱动电路，在SiC MOSFET 开关过程中通过抽取或向栅极注入电流，达到抑制开关过程电压电流尖峰和振荡的目的。该有源驱动电路结构简单易于实现，而且能够在较少牺牲SiC MOSFET 开关速度和损耗优势的前提下，很好地抑制SiC MOSFET 开关过程电压电流的尖峰和振荡，进而从源头降低高频电磁干扰的发射。  

1\. SiC MOSFET 开关过程分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOPpgvDOjPuSCXzibCEXviawPRX8Y4jj8cvOYEey6oCrc3w3MdVnSYCmwyllxbqylCK9ibic3icW6EyMBwpoqD1wKz2jvhqJ4dmNfO4/640?wx_fmt=png&from=appmsg)

为了详细分析SiC MOSFET 开关过程和电压电流尖峰振荡产生机理，采用图1 所示的测试电路， 图中：Vdc 为直流母线电压；Rg 为驱动电阻，在电路中考虑关键寄生参数，包括SiC MOSFET 的栅源电容Cgs、栅漏电容Cgd、漏源电容Cds、源极电感Ls 和漏极电感Ld 以及线路电阻之和Rstray。为方便分析，定义输入电容Ciss=Cgs+Cgd，输出电容Coss=Cds+Cgd。根据开关过程电压电流的状态，SiC  MOSFET 开关过程分为8 个阶段，图2(a)为开通过程的示意图，图2(b)为关断过程的示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMQOx82a39gqK3HS4cvg6opy7t4cuj5AcKjYl97gQpiaFdVZ3WibZSz8pLKhlX7wmGqQRpupZcx7AGMQX1ibnvSwia5wPcImTRWg2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM4pmNic5J1wFszJY9CSgAu7Dfvnx4ftkxrD6tIX2Spl9j7LiceVXxvZVSKdvnickgHQAQdlvC6hGfq4KFT8HficM2la7BfE2ibs6bM/640?wx_fmt=png&from=appmsg)

1.1 开通过程分析  

1）阶段1，开通延时阶段(t0~t1)。  

此阶段驱动电压通过驱动电阻Rg 对输入电容Ciss 充电，漏极电流id 保持不变，直到栅源电压vgs达到开启电压Vth。  

 2）阶段2，电流上升阶段(t1~t2)。  

此阶段栅源电压vgs 超过开启电压Vth，漏极电流开始上升直到尖峰电流Id\_peak，如式(1)所示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOYaMQicPiczOibcvECiavXeoFiamm9rsrForU3RjGCkAxlIbtiatgh87rg1rQq4hq9ocYYsNnU2BzZ4MhwMfSdjGaPUvMCwkofUrVXA/640?wx_fmt=png&from=appmsg)

式中：IL 为负载电流；Ir 为续流二极管的反向恢复电流峰值，Ir可由式(2)得出，

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpORzZR7NPibHTF2HVseLWd8USlCnHwgHviaWrtURXM7DKWYBaAayLSuAa1MfwnDpBynBJauCvQt9WZ5f5L2J5ktX8nsG3ticH305w/640?wx_fmt=png&from=appmsg)

式中：Qr为续流二极管的反向恢复电荷；S为软度因子，漏极电流的变化率di/dt可以近似表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNoZog9veSkFkxsKhxT2uAr18icMM7vgtAvbZTI95P2GQLum4Zx5xab8ibWylGiclKd1vibSmmWSpuk6gRNlDhxfzTVU6vxGpMk6F8/640?wx_fmt=png&from=appmsg)

3）阶段3，电压下降阶段(t2~t3)。  

此阶段续流二极管的反向恢复电流开始从峰 值逐渐减小到 0，二极管开始反向阻断电压，漏极 电压逐渐下降直至导通电压。  

4）阶段4，开通阶段(t3~t4)。  

此阶段SiC MOSFET 已导通，漏源电压vds 保持在导通电压，漏极电流保持在负载电流IL，栅源电压vgs 继续增加直至驱动电压Vgg。  

1.2 关断过程分析  

1）阶段5，关断延时阶段(t5~t6)。  

此阶段驱动电压降为低电平，输入电容Ciss 通过驱动电阻Rg 和源极电感Ls 放电，这个过程中漏极电流id 不变，栅极电压vgs 开始下降直到密勒电 压VMiller。 

2）阶段6，电压上升阶段(t6~t7)。  

此阶段SiC MOSFET 栅极电压vgs 基本保持不变，栅极电流id 仍然不变，漏极电压开始上升，一 直上升到直流母线电压Vdc。 

3）阶段7，电流下降阶段(t7~t8)。  

此阶段漏极电流id 开始下降，续流二极管开始正向导通，负载电流从SiC MOSFET 向续流二极管转移。栅极电压vgs 继续下降，一直下降到开启电压Vth，SiC MOSFET 关断，漏极电流id 降为0。  

在该阶段，由于电流的快速变化，会在电路的寄生电感上产生压降，这部分压降叠加在SiC  MOSFET 的漏源电压上，就会出现电压尖峰。忽略SiC MOSFET 的反向恢复电压和续流二极管的正向导通电压，根据基尔霍夫电压定律可得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOegGXDibJegOFgQEMAWey9JCKCk1ibVk1spFqxRdTBIicdKcpgq04VpZtKgYgWPw6zia8Q6y1u3ibfWWyicAR9IdxutsfviaH5dw0Who/640?wx_fmt=png&from=appmsg)

所以产生的电压尖峰为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNCClT6SKGRfic524fgREBtYf61xGW5sqXIsfJ3gduoA3HJuNvzEBvAnicicHd2pQDSpKBlEwGFBmwZzhu6BRFUQl4ac0XCZSxHGw/640?wx_fmt=png&from=appmsg)

其中，漏极电流的变化率di/dt仍可以用式(3)近似表示。 

4）阶段8，关断阶段(t8~t9)。  

此阶段，栅极电压vgs 继续下降至低电平，SiC  MOSFET 完全关断。漏源电压尖峰因功率回路的阻尼形成衰减振荡，如式(6)所示。而变化的漏源电压vds 作用在输出电容Coss上，漏极电流在下降到零后也会形成衰减振荡，如式(7)所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOGg6RaeETbg4rCArgJk5OdrZsNusz4phPSUZk6nG3yFFuzyCMlMsDEO95J0vxlYjRf93hPysokoiciawfIkVhkJ86icZib5oIQtkU/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMCQ8FC06NymwoPXNPjdPEyiagJyR3hlHKjsZGadSmI0uSyhibCnLvoLckicZo83wDJBS2yvFBXXEcqKh24wyaHe5mHnwKLXYNcDE/640?wx_fmt=png&from=appmsg)

通过对开关过程的分析可知，对于开通过程， 在SiC MOSFET 开通过程的电流上升阶段(阶段2），因为二极管反向恢复电流的存在，漏极电流id会产生电流尖峰，对于确定的电路，其二极管反向恢复电荷Qr 和软度因子S即已确定，依据式(2)， 要减小漏极电流尖峰只能减小漏极电流变化率did/dt，再由式(3)可知，可通过减小栅极电流ig达到减小did/dt的目的；对于关断过程，在SiC MOSFET关断过程的电流下降阶段(阶段7)，电流快速下降产生大的did/dt，加之电路存在寄生电感，使得SiCMOSFET 漏源极产生电压尖峰，进而衰减振荡，电路一旦制作完成寄生参数就基本确定，所以要抑制关断电压的尖峰和振荡就要减小did/dt，同样依据式(3)，可以通过减小栅极电流ig 减小did/dt。  

2. 电流注入型有源驱动电路设计

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOK8Kz5via0PspqQXtajriaYpMc746lNcg3LxWuUQQ9BxGgicxfXZR2lpsw7EElust8GUumHIPibOZhzL8hSQQwwaSYl6zpHNXcPHw/640?wx_fmt=png&from=appmsg)

  
经过第1 节的分析可知，在SiC MOSFET 开通 过程的电流上升阶段(阶段2)和关断过程的电流下降阶段(阶段7)，可以通过减小did/dt抑制开关过程电流电压的尖峰和振荡。  

基于上述原理，本文设计了一种有源驱动电路， 在SiC MOSFET 开通过程的电流上升阶段抽取部分驱动电流，在关断过程的电流下降阶段向栅极注入电流，而在开关过程的其他阶段和常规驱动电路一样，从而在抑制电压电流尖峰和振荡的同时又能尽量减少对SiC MOSFET 开关时间、开关损耗等方面的不利影响。本文所设计的有源驱动电路主要包括4部分，分别是驱动推挽电路、检测电路、脉冲产生电路和输出控制电路，如图3 所示，开通电路和关断电路各自独立，两部分电路的驱动推挽电路、检测电路和脉冲输出电路采用相同的结构，输出控制电路结构不同，下面对各部分进行详细的说明： 

1）驱动推挽电路：用来产生驱动电压，可采用商用驱动芯片，本文采用型号为IXDN609SI 的驱动芯片。 

2）检测电路：开通和关断过程的检测电路采用相同的结构，用来检测驱动电压，包括两个串联的分压电阻和一个电容，图3中R1\=R4\=10kΩ，R2\=R5\=3.9kΩ，C1\=10pF，C2\=22pF。 

3）脉冲产生电路：开通和关断过程的脉冲产生电路结构相同，用来接受检测电路输出的电压信号并产生脉冲，控制后级电路。脉冲产生电路采用窗口比较器，VH、VL分别为窗口比较器的上限电压和下限电压。VH、VL的选取决定了脉冲能否在预期的阶段产生以及作用时间的长短，时间太短达不到预期的抑制效果，时间太长会影响器件的开通和关断时间。根据第2 节对于开关过程的分析可知，理想情况下，开通阶段的作用时间应为t1~t2，关断阶段的作用时间应为t7~t8，如图2 所示。但是考虑到电路存在时延，选取的VH、VL 应保证脉冲在理想作用阶段之前产生。本文中脉冲产生电路采用型号为MAX9203的比较器，选取VL1=VL2=1V，VH1=VH2\=3V。 

4）输出控制电路：开通电路和关断电路的输出控制电路采用不同的结构。开通电路的输出控制电路包括MOSFET、二极管和电阻，当脉冲产生电路输出脉冲时，MOSFET开通，抽取驱动电流；关断电路的输出控制电路包含两级，前级采用比例放大电路，用来放大脉冲产生电路输出的脉冲，后级电路采用推挽结构，用来向栅极注入电流。需要注意的是，为防止误导通，SiC MOSFET 通常为负压关断，驱动芯片在其关断时提供-5V 电压，而前级脉冲产生电路输出的脉冲为通常为0~5V，如果直接将其放大输出，会将负压抬高，威胁到器件的安全运行，所以在比例放大器的反相端接Vref，此时比例放大器的输入输出关系为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO2AhIwUD7SpHPEU6TB0Pu9aakN047SEKFmyNWy8gvuu9sBmxrUWUzsZTX9GjXhd2OQQlggJ303U7fARLyHmU8iak6qf87STrDk/640?wx_fmt=png&from=appmsg)

式中vpulse为产生脉冲的电压。本文中开通电路中的放大电路采用型号为THS3061的放大器实现，选取R6=4.99kΩ，R7=4.99kΩ，R8=18.2kΩ，Vref=1V，输出控制电路中选取R3=4.7Ω；关断电路中，选取R9=6.3Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNzIK9KFUPhib7WPazEHMz2uVJUmBiavdiaIicAYkeQE5vsxV7VVlyrPLZh9ibT3eLIGKpd1vxEqpt8L2HMgC4ttAiak7ckmTALGX0v4/640?wx_fmt=png&from=appmsg)

表1 汇总了所提出电流注入型有源驱动电路的参数。相较于现有的有源驱动方案，本文提出的电流注入型有源驱动方案结构简单，易于实现，且成本较低。对于不同型号，不同特性的SiC MOSFET只需要对采样电路和脉冲产生的电路的上下限电压进行调整，具有一定普适性。  

3. 实验验证及分析

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOyKWvUmPA8DP6EESicFLjCIV26plNLlnzovRNKfiaX3GcICH8AcibkaUqicp7ZQosmKLopInM7xUTDghbHIo0cXyJh6WGLaYlfFhM/640?wx_fmt=png&from=appmsg)

为了对所提出的有源驱动进行验证，搭建了如图4 所示的测试平台，其电路原理如图1 所示，选用Cree 公司型号为CMF20120D的SiC MOSFET和型号为C3D20060的SiC 二极管，在直流400V下进行实验，根据实验平台的实际情况和文献\[20\]推荐的驱动电阻值参考范围，选取驱动电阻为20Ω， 实验电路参数如表2 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNNMm1YSX1BnmAcdDlyKYlIs2akJcO4m4MGrwm4p3uz6AesslPM5W9XsUC7Qvk7aNicibpWFYia9vuv5dz3wTOlc7H28BnVcAwkiaw/640?wx_fmt=png&from=appmsg)

实验分别在常规驱动Rg=20Ω、有源驱动Rg=20Ω、常规驱动Rg=100Ω、 常规驱动Rg=20Ω采用RCD 吸收电路4种实验条件下进行，如表3 所示，RCD 吸收电路采用图5 中结构。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNobpCgxd1vUocbu7a0aKwSz3LBeDdWXTYkiaajOqFibSRaq58Sysy1vOjDYHnmWoDpnFphwiatacicicUvsXLPFZesYgWILUHOQ39U/640?wx_fmt=png&from=appmsg)

增加驱动电阻到100Ω和采用RCD吸收电路作为对照组用来进一步说明所提出有源驱动电路的优势，实验结果如图6、7 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPqeHLbKD83fpNPRZnaI0icxYEWQtPu6gSlM3UNeBrscGjETs7R0hK7FKrdXyCbiaE4WatMXwGjPYuy6fK49dHNhLFIh7C44uFYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNc1REeiaKGp36khkkXrVqMOt7dLPSLCy1yRXzbpG4rS2wyg49PhmTJUXeA1TMiaeMZuH7hCDxic3fVFqAEwtzsQUIZmWvnDjMIN8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPH6fibqbbfwibZDMoCfnu5q6M521IsUKTpa7MnPDq84fjIEWVf5G4ribkuxHlJtqmCS0NXjBSZYVUyZGl5Y26Omxa1a4ZkxGWXNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOpVAM5RqDg90IKxOrWl0qtaH7LY24AsrOArxleEh2l6UgRasnMF2eI2ABBPHAhJGWiczG3bcI9U40MicLIQaQJynmJP8rngibFZA/640?wx_fmt=png&from=appmsg)

从实验结果可知，采用所提出的电流注入型有源驱动与采用相同驱动电阻的常规驱动相比，开通过程漏极电流id 尖峰由12.3A 降低为9.9A，振荡得到明显的抑制；关断过程漏源电压vds 尖峰由490V 降低为440V，振荡完全消除，如图6(b)、图7(b)所示。实验中发现，采用增加驱动电阻的手段，在本实验平台条件下，驱动电阻增加到100Ω时，对于开关过程电压电流尖峰和振荡的抑制才能与有源驱动电路相当，如图6(c)、7(c)所示。但是在此驱动电阻条件下，开关过程变得非常缓慢，开关损 耗增加。  

采用RCD 吸收电路，在合理选择参数的情况下可以有效抑制关断电压的尖峰和振荡，抑制效果与采用有源驱动电路相当，如图6(d)、图7(d)所示，但是RCD 吸收电路对于开通时电流的尖峰和振荡没有抑制效果，而且RCD 吸收电路带来的损耗会使总的开关损耗增大。需要说明的是，限于实验条件，图6(d)、图7(d)中的电流id 为流过SiC MOSFET和RCD 吸收电路的总电流。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnh4DLGC9V4E89A9LDbCeTLdwD82xHmsGTLb5nia6KrlVyzVAvLqMqibvuaMWFKug4zYKDzoHYHDHc5z3FmeJn0IUxx0cb7euRc/640?wx_fmt=png&from=appmsg)

表4 为以上不同实验条件下开关过程对比汇总。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNdG34Q6nA7ANkPlKWu4dvnrSiaEMubIjqfvABzlNGuAdb9aYtYT2RPj9Ob4z5oAsLPeEslYsdViaOcYpAspClpoeyVHFiaHenvLg/640?wx_fmt=png&from=appmsg)

  
图8 为常规驱动、增加驱动电阻、采用有源驱动和采用RCD 吸收电路四种实验条件下的开关损耗的对比，其中有源驱动下的开关损耗计及有源驱动电路的附加损耗，采用RCD 吸收电路下的开关损耗计及RCD 吸收电路的损耗。从对比结果可 以看到，在抑制效果相当的条件下，有源驱动对损耗带来的负面作用更小，而且有源驱动在开通和关断过程均可以起作用，RCD 吸收电路只对关断过程有效。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMK5M0nV1fK9Omss1KLgPoeyNJUo5b9cib569iaSWjxaCUHh7GS3Jc1n5nEqTibM5lfrdibJ8BicuoowqzeBUf8fLj9SJFicQQmeg65M/640?wx_fmt=png&from=appmsg)

SiC MOSFET 开关过程电压电流的尖峰和振荡是电力电子变换器高频电磁干扰的一个重要源头，所以抑制电压电流的尖峰和振荡是从源头上主动抑制电力电子变换器电磁干扰的一种手段。 本文对常规驱动和有源驱动(驱动电阻均为20Ω)时SiC MOSFET 漏极电流id 和漏源电压vds 的频谱进行分析，频谱图分别如图9 和10 所示。从频谱图可知，常规驱动下电压电流的振荡在30MHz 附近产生尖峰，尖峰出现的位置与振荡频率一致，采用有源驱动之后尖峰幅值明显降低。  

综合以上实验及分析结果，本文提出的电流注入型有源驱动电路能够在较少牺牲SiC MOSFET开关速度和开关损耗优势的前提下，有效抑制开关过程电压电流的尖峰和振荡，同时能够从源头上抑制高频电磁干扰的发射，验证了该有源驱动方案的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpORDgMBQUtOHMHzGF9Qic3wnbwybld3Kib5WQOkPoS5Wa2K8Musb3GChOyWhezjgWNpVibCxrV4MXHe00G4lhGicsYBicE663a5VUZc/640?wx_fmt=png&from=appmsg)

4. 结论  

本文针对SiC MOSFET 开关过程中出现的电压电流尖峰和振荡以及由此带来的电磁干扰问题，在分析了SiC MOSFET 开关过程以及电压电流尖峰和振荡产生机理的基础上，提出一种电流注入型有源驱动电路，并在实验中验证了所提出有源驱动电路的有效性。实验结果表明，本文提出的电流注入型有源驱动电路能够有效抑制SiC MOSFET 开关过程电压电流的尖峰和振荡，并从源头上对高频电磁干扰的发射具有明显的抑制作用。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFDH0ILamxa7sOAb5zb4pBcd54hLd7tM7yBZp73C4TbDL0IcicD9WdsA/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuYHVuib7N3pmpe2Y7Dwc8c09RauGRbKXiatpiaI5icYpOFjoUez9vaM0wug/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuIhFgnZMewhpBvsAFHndNL66EHzKn89Oia98qfLMNXKxJDBTPqOY3N8w/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudkphytibGPXaInfBRia5wqfPib5SOcCcGSIGj6jNFt0vy8jxYCjUxl3vQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)