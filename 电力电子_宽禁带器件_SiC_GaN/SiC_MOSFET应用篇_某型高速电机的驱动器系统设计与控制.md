# SiC MOSFET应用篇：某型高速电机的驱动器系统设计与控制


> 原文地址: [https://mp.weixin.qq.com/s/avF33Ah5d9etDffi8lK8yA](https://mp.weixin.qq.com/s/avF33Ah5d9etDffi8lK8yA)

文章来源： 机械与电子

作者：张建诚，沈启豪，孟繁志，徐钟波（宁波送变电建设有限公司,浙江宁波 315033）

摘要：对交流电机矢量控制的基本原理及采用的控制策略进行了研究.使用SiC材料的MOSFET功率管构成电流变换环节,开关速度快,开关损耗低.控制部分选用ARM+DSP+FPGA的架构,控制可靠性、控制精度得到提高.最后在仿真软件PLECS上进行了仿真实验,调整实验参数,最终仿真结果表明采用矢量控制的系统性能良好,可以满足对65 kW、36000 r/min的高速电机驱动要求.

关键词：高速PMSM，矢量控制，PWM，SiC MOSFET

# 0 引言

随着人们对于生产工艺要求提高和更快转速的电机需求,高速电机的研究得到了各国的重视,开始迅速发展。在高速电机中,发展迅速的主要有感应电机(inductionmachine,IM)和永磁同步电机(permanent magnet synchronousmachine,PMSM) 2大类。

高速电机控制系统的发展和可控半导体器件的发展息息相关,伴随着开关频率更高、响应速度更快的晶体管的产生,随意变换电压、电流的波形与改变频率得以实现,进而推动了高速电机控制系统的发展。场效应晶体管(MOSFET)早已投入应用,新型的以 MOSFET为基础的复合型器件,性能得到大幅度提升。新型功率管的应用,使电机驱动领域更加完备,实现高速电机的精准控制。选用近几年发展 迅速的宽禁带半导体SiC型 MOSFET 开关器件,用此作为变频器的电压变换环节,对高速电机驱动系统改进具有实际意义。高速电机通常是指转速超过了10000r/min的电机。相较感应电机,永磁同步电机更受青睐。内转子永磁电机具有转子半径小及可靠性强的优点,更是高速电机首选,多使用面贴式永磁转子结构。目前,高速永磁电机的最高转速已达到500000r/min。国内对高速永磁电机的研究主要集中在浙江大学、沈阳工业大学、哈尔滨理工大学、哈尔滨工业大学等大学,他们对高速电机的设计特点、损耗特性、转子强度与刚度计算以及冷却系统设计与温升计算等方面开展了相关的研究工作,并制作了不同功率等级和转速的高速样机。

本文基于变频调速的原理,控制方法采用矢量 控制,使用空间矢量 PWM 调制方 法对65kW、 36000r/min的高速永磁同步电机的驱动器系统进行设计,完成主电路结构及硬件部分的选择。使用仿真软件 PLECS 完成仿真模型搭建工作及 波形分析。

1. 电机矢量控制原理

1.1PMSM 的数学模型

首先依据永磁同步的机械特性和电磁特性,研究算法,搭建数学模型。利用坐标变换原理,将三相静止坐标系下的永磁同步电机数学模型变换为两相旋转d、q 坐标系下永磁同步电机数学模型。

基本方程电压方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdIQA9LL3NEVfWSMsbLxGJYrjJJqt7jhdia7icJwW5zB3RgeiaXv34zAHRQ/640?wx_fmt=png&from=appmsg)

式中:ud、uq 为在d 轴、q 轴上的定子电压分量;id、iq 为在d 轴、q 轴上的定子电流分量;R 为定子电阻ψf 为转子永磁体产生的磁链;Lq、Ld 为d 轴、q轴定 子电感ωe 为电角速度。

由于本文采用表贴式永磁同步电机为研究对象,所以旋转坐标下d 轴电感和q轴电感相等,Lq \= Ld \=L。

磁链方程、转矩方程、运动方程分别为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd9HhOLkcQfTFEk6DnaAoRhBFZQgasxNxbsxia3MZv9vd8FkTF9XicicEKA/640?wx_fmt=png&from=appmsg)

式中:Te 为电磁转矩;J 为转动惯量;TL 为负载转矩;B 为阻尼系数；ωr 为机械角 速度;p 为电机极对数。

1.2PMSM 矢量控制

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdtblEsdckt4bhp6Ftfq77MedBoMliavTCINwdaenCWZQr53EgOhtiaUEw/640?wx_fmt=png&from=appmsg)

PMSM 的控制策略采用矢量控制,并使用空间矢量调制的调制方法。采用id \=0控制时,定子电流只有交流分量,定子电流矢量与磁链矢量均在q轴上,与转子永磁体产生的磁链正交垂直。控制策略如图1所示。定子电流d、q 轴可写为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd9dyqyqdiaR8tWNYdeov5xtuBAdy1LlIWPXic69jTynwnDaIu7u4bRQqA/640?wx_fmt=png&from=appmsg)

式中:is 为电子电流矢量;β为is 与转子永磁磁链矢量ψf 间夹角。

定子磁链d、q 轴分量可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdFkwXmtGhaoUOagpGUSdeFC8saykpjomjGvf7sJWnY1hicKbxIau6EeA/640?wx_fmt=png&from=appmsg)

式中:Lq、Ld 为定子d、q 轴漏感;Lmd 为定、转子d轴互感。

永磁同步电机电磁转矩可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdYrqict69pBXZiaGz0LwVibcn83XE3ibF96lNOVZP27XAUFJZdicJ3jpsG7A/640?wx_fmt=png&from=appmsg)

式中:ψf\=Lmd·if 为转子永磁体磁链。

采用id\=0控制时单位定子电流可以获得最大转矩,效率高。

矢量控制中通过电流传感器采样三相电流,利用采样获得的电角度通过坐标变换转换为同步旋转d、q坐标系下的d 轴、q轴电流分量,与外环给定值做比较后经过 PI控制器。由式(1)可知,电机数学模型中d 轴、q 轴电压并没有完全解耦,会导致电流调节器的带宽较窄。当电机处于高速运转时,控制系统的稳态性能和动态性能较差。因此,还必须加入前馈补偿环节,减小电流的稳态误差。将空间矢量d 轴电压分量和q 轴电压分量加入 PI控制器中,作为前馈补偿,以提高系统性能。 叠加后输出电压值通过坐标变换输入给 SVPWM 模块进行调制。根据式(1),d,q 轴电压解耦补偿项为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdzI5y4KhUrJNr4o3snia9TFErbFsEC61STia5Diaicb9ChibeibkO0ibNx0afQ/640?wx_fmt=png&from=appmsg)

对于高速永磁同步电机的矢量控制,还需加入弱磁控制。永磁同步电机运行时,由于电机结构设置,永磁体产生的磁场固定且不可调节。当永磁同步电机端电压达到变换器输出最大电压后,由于直流母线电压的限制,电机的运行转速范围也受到了限定。因此需进行弱磁控制,使永磁同步电机在高速运行时仍能够可控。

在电机高速运行时,定子电阻的压降很小,可 以忽略不计,由此可以得到电压极限圆方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdL9WSKEH6VV7y2G5CQmQt93b0pU1AMSZqeEDlPkpicWwgcwggLasMShg/640?wx_fmt=png&from=appmsg)

式中:us 为电压矢量幅值;umax 为定子电压极限。

因此,当电压升高至最大值时,通过调节交直轴电流id 和iq,实现转速的可控。

2\. PI调节器设计

2.1电流调节器设计

图2为电流环等效框图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdTYntdiaEhJeEmvibzFeOGOdBoLXicE6zG7hWf3oRIYlBCscfDolCWNxrw/640?wx_fmt=png&from=appmsg)

电流调节器 ASR的传递函数可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdpkW4WSWwfUjUdYTGD4bH21yfXpd1KwKdLVMSBcwkQXEeFeALvE61ww/640?wx_fmt=png&from=appmsg)

电动机负载等效传递函数可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx6XDSc6Nt3Hn8dGyUH5C4aDLGHiaNvZtauHN2xZ3ngjKgDtPazmVcWUQ/640?wx_fmt=png&from=appmsg)

式中:KRL \=1/Rs,TRL \=L/Rs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdNl7OAGwJ4MamRnVKKQFdMOAMuKw6aWVRVRSmicxichQUFD4ibeTzAToCA/640?wx_fmt=png&from=appmsg)

按照“工程最优方法”整定,将式(12)转化为典 型Ⅰ型系统或典型 Ⅱ 型系统。从控制系统稳态要 求上来看,希望电流控制无静差,并且动态过程中 电流不希望出现太大的超调,所以选用Ⅰ型系统较 好。典型Ⅰ型系统的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd9vsGqYWLrtNesm4MA8ADjM2YmLBnaBYIrIicgqJCY0HoicU1084Tic5ibQ/640?wx_fmt=png&from=appmsg)

式(12)中取积分时间常数TI \=TRL,使得传递 函数中零点与系统中大惯性环节的极点对消,对消 化后的电流环开环传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdrTztx9aibl4vBmIBBQJEdaVgfjwMXpSiccf2ppmpSDJia9qvq8J5XSRtg/640?wx_fmt=png&from=appmsg)

按照工程最优原则来整定系数 KP 和 KI,则

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdO0znwsHjN5HODkf6nkZmYP4ELvnviaibqUVn7JGWK84536Uoj5k12yicg/640?wx_fmt=png&from=appmsg)

按照典型I型系统整定的电流环,可以得到系统的开环截止频率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd2MqNGrCLTuglyKuxXhDdzTiaL5jMM9NPXR7vlYc3uBOcn453ARg5Pog/640?wx_fmt=png&from=appmsg)

因此得到电流 PI调节器的参数

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdv4NWWia9APiaf4Xh7vTyfhQJPPbu6WBeJwxeP8njUmWMqjJibLkEegBkg/640?wx_fmt=png&from=appmsg)

2.2转速调节器设计

图3为转速环等效框图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdb6wjwls8BWz6Ws41ibNXHr84Uts4KqxKJjsDWW6uqaq6DLTQzquuwyQ/640?wx_fmt=png&from=appmsg)

转速调节器的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd6eicDD0vtbicrS3RAtamPlwZLQPmhJ3lw89cSafDo5ef3E2hXGbzmmlA/640?wx_fmt=png&from=appmsg)

电流环闭环的传递函数表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdbhcWicblB5wapD9AkMZvKEUsf7JtiaiatqkhxDwZ6rLzdHZ2SicXfYTDdg/640?wx_fmt=png&from=appmsg)

将式(19)进行高阶系统的降阶近似处理,可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd1kwfC4A9adhq8v6qVXpOmvvsD5JcWibEqS7WJePAbL3xqlalic7H1lnw/640?wx_fmt=png&from=appmsg)

则转速环的传递函数可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdW6WNZ4qa4fchNuWNKUR4vDmR5kjXgeibWTjeAXiaY6oia7w0K8U8R0EpA/640?wx_fmt=png&from=appmsg)

按照典型II型系统进行参数整定,中频宽h大小一般视动态性能的要求选择,本次 选取 h\=5。

则有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd170xL8ialO8gqXS6HQceGRyOh24onkmq809xQw8nMBLibRPw66d1zbrA/640?wx_fmt=png&from=appmsg)

利用以上设计方法得到 PI调节器控制器的参数只是一个参考值,实际应用时,需要结合实验和仿真进行进一步的整定。控制器的参数整定一般原则为先电流环后转速环,电流环是作为转速环的一个模块。整定参数直到控制性能达到控制要求,表现良好。

3.高速电机驱动器设计

3.1主回路电路设计

对于主回路电路设计,主要分析以下2个拓扑 结构,通过对比确定本次设计的主回路结构。 

3.1.1 两电平拓扑电路

不可控整流桥是典型的两电平三相电压型桥式 PWM 变流器电路拓扑,采用6个二极管,结构简单,不需要额外的驱动电路。逆变环节,6个绝缘栅极双极型晶体管(IGBT)开关管构成逆变桥,将恒压的直流逆变为电压和频率均可调节的交流电。电解电容构成滤波环节,可以有效减小直流侧电压脉动。这种结构只有1套可控 功率级开关管,采用PWM,输出谐波分量小。 

3.1.2 三电平拓扑电路

典型中点箝位型三电平逆变电路,也称为中性点箝位型(neutral point clamped,NPC)三电平逆变器。其电容环节,直流分压电容C1\=C2;逆变环节,每一个桥臂使用2个箱位二极管和4个IGBT。用驱动信号控制开关管IGBT的开关,采用一定的方法控制开关,交流侧会得到3种电平的相电压。

两电平逆变器和三电平逆变器结构各有优劣,适应不同的要求,其不同点如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd1icC1LJS34GB0DtfX0licMhBeiaJa5W0wxPpqibBj5iacmAkianibHjAuZCCA/640?wx_fmt=png&from=appmsg)

通过上面的对比,发现三电平电路通过增加1倍数的开关管,使每个开关管承受的电压等级缩小了1/2,三电平开关管的器件耐压可以为两电平的一半,提高了电路电压等级,也获得了多阶的输出线电压。三电平每个开关器件导通和关断次数仅为两电平的1/2,等效开关损耗降低,系统效率更高。这些将使得输出波形更接近 于正弦波,且输出谐波含量少,电压变化率小,使其适用于高压大容量电路。但两 电平相较三电平,串联的功率器件更少,因而体积也变小,成本变低。两电平拓扑较三电平拓扑显著优点是结构简单,控制逻辑简单可靠。

已知要设计的电机额定功率为65kW,直流母线电压为650V,电流为100A。通过比较高速电机的参数,在电压等级较低、中等功率的情况下,最终选择采用两电平拓扑结构作为主电路结构。两电平结构中,每一相上下2个开关管驱动信号互补,功率管交替开关,导电角度为180°。换流是在同一相上下2个开关管之间进行,称为纵向换流。不同的相之间开通角度依次相差120°。实际工作中的6个MOSFET 管有3个开关管开通。

3.2开关功率器件选择

已知交流电机转速,便可以计算出信号波频率。当同步电机稳定运行时,同步电机的转子转速与电压频率有以下关系,即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdWss6xwNBUyyYxib45Uq7t8ibda8Dg0HUf2iasc37xC7dib9X3zbnRAHebQ/640?wx_fmt=png&from=appmsg)

本文所研究永磁同步电机的极对数p=2。代入公式计算频率f。

载波频率fc 与调制信号频率fr 之比为载波比N。开关频率越高,电流波形平滑性越好,对电机震动越小,运行噪音越小,但开关频率选择过高时,变频器输出电流变小,此时谐波电流的频率也很高,电机损耗将变大,输出功率减小。 因此,应根据控 制要求选择合适的载波比。

采用同步调制方法,载波比N 保持不变。根据工程经验,最终选取载波比N 为50,fr \=1200Hz。调制波频率的计算式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd4aC8HIGtM6ml48kicL5VleqHGwWfX3W39syJ7hjB9yBhOibejhlQBIYQ/640?wx_fmt=png&from=appmsg)

由于开关频率fc 很高,普通 MOSFET 功率管在此频率下开关损耗较大,显然无法满足驱动要求,最终选择选择宽禁带材料的 SiC MOSFET。 SiC模块具有重量轻、可靠性高和功率密度高等特点。变频器的功率器件多工作在高 温条件下,而SiC MOSFET 的导通电阻阻值较小,且在高温环境下变化较小,导通损耗小,低损耗优势明显。

已知主电路直流侧电压为 650V,则功率器件SiC耐压最低保证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdupdAf2B44Z9O6X4odaURR5AShcJY5qibw80icpu29bb9micH5nCkCwtfA/640?wx_fmt=png&from=appmsg)

式中:Vspike 为尖峰电压,通常电压尖峰与驱动电路设计相关,尖峰电压一般在200V左右。

因此,SiC耐压Vsic 最低为1020V,为保证器件足够安全,应至少选择1200V 电压的SiC器件。

3.3控制结构设计

通过对比高速电机与普通电机驱动要求,确定本次高速电机的控制结构选择。图4是普通交流电机与高速 PMSM 的电路模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdmHaoloqewPXlEUWVD1z4BjR8n6nhoXue55LwjDsAHF6PJiaaoA3xKFA/640?wx_fmt=png&from=appmsg)

表2是上面模型一些参数对比。电机极对数和载波比设定为相同,但是功率开关管频率相差很大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdBIPicgLfj9R1zeN4utY5SXjJqXwGDqlvXibFxaYjLAicYRb0ZUVEKZNzQ/640?wx_fmt=png&from=appmsg)

在1个载波周期内,控制芯片一般需要完成A/D转换、转速计算和调制波计算等工作。普通交流电机驱动器控制芯片大多选择的是TI公司的DSP芯片TMS320F2812。TMS320F2812是32bit MCU,主频可达到150MHz;具备多种总线接口,适用于交流电机驱动控制。在载波周期 T\=400μs的时间内, 2812芯片可以完成所有工作,实现电机控制功能。但是当载波周期T减小16.6μs 时,单独 的DSP2812便不能满足计算速度的要求。为解决计算的要求,便需要采用新的以 ARM+DSP+FPGA的架构。ARM 作为总控芯片实现与上位机和其他系统之间的通信,并下发当前的工作状态与工作指令。ARM 外设丰富且工作主频很高,可以实现各种通信功能以及I/O口。DSP型号选择美国TI公司芯片TMS320F28335,主频可到达150MHz,与2812相等,但是改进后增加了32bit浮点运算,性 能也更高,且功耗小、A/D 转换更精确快速,适合本次主要处理器工 作。 在数字信号处理领域, DSP28335非常适合大容量数据的信号处理,在电机驱动领域可以负责控制算法的实现,完成控制系统的矢量控制计算。FPGA 是可编程逻辑器件,优点是可靠性高、速度快,可用作高速数字信号处理,实现发出触发脉冲功能。

根据以上内容,最终确定了驱动器的硬件结构,如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILd8VbiazkR7kBKH6wKsttZFqQxedVrYqAariagGwkOSRp1g9wnZxPkqqBQ/640?wx_fmt=png&from=appmsg)

4. 系统仿真及分析

采用 PLECS仿真软件,搭 建 PMSM 矢量控制电路, 方案采用速度、 电流双闭 环PI控制。 PLECS是用于电路和控制结合的多功能仿真软件,尤其适用于电力电子和传动系统。首先进行PMSM 的电机参数设置。永磁同步电机参数如表3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdBDsjUicTeucQT2icYfD8CcKb7HZRnkm4HVhH3icUlBPuItAgRsQhTSiboA/640?wx_fmt=png&from=appmsg)

仿真结果如图6所示。仿真参数设定为:仿真 时间1s,仿真步长10-⁶s,直流母线电压650V,电 机的初始转矩为30N· m。设定给定转速值在0.3s时转速由36000r/min降至18000r/min,表现为转速的突降,给定转速值在 0.5s时转速由18000r/min又返回至36000r/min,表现为转速的突升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdxOJSXZsqCq1G9jS5oVcHNAEFa4zDFnAehWPpnnlC8RrunnC7uxHmicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdnQJmicXEPMBLiaGOugjAY9UXkK5qWunticw6riaYL7QM1FPAfNL9o0O4KQ/640?wx_fmt=png&from=appmsg)

从图6a可以看出,当转速突降或者突增时,双闭环矢量控制系统可以实现转速的快速跟踪,波形略有超调,但转速可以快速到达新的稳态,动态响应快,性能良好。

按照最大转矩电流比进行控制,即控制直轴电流i\*d 的为恒定值0,此时定子电流不会对直轴磁场产生影响。当磁场恒定为永磁体产生的磁场时,电磁转矩的大小只与交轴电流iq 的大小有关,对比图6a、图6b,交轴电流iq 的仿真波形与电磁转矩的波形相似。直轴电流id 大小与转速有关,交轴电流iq大小跟随给定i\*q 。

当转速突变时,直流侧电流和三相定子电流变化在200~-200A之间。三相定子电流在转速突变时也可以在极短时间内到达新的稳定值,过渡良好,控制系统表现稳定。在该矢量控制下,PMSM有良好及满意的控制性能。

最后,对矢量控制加入解耦补偿前和补偿后的控制系统进行了对比,其他参数都保持一致,分别测量了电机的转速和q 轴的电流波形,仿真结果如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmicRXFRTC063jQr65FKJILdtDl7DXItmCznkmols1RepmQolNw63wsYR8eL3gl5Nx2h9Pn2oo69pg/640?wx_fmt=png&from=appmsg)

从仿真结果可明显观察到,解耦补偿后的转速可以更快到达给定值,测量结果显示补偿后再0.087s首次到达峰值,补偿前在0.089s才到达峰值。稳态时转速与给定值无静差。补偿后的实际q轴电流比补偿前更快变化。结果验证了采用解耦补偿的矢量控制系统调节时间更短,精度更高,动、静态性能更好。

5. 结束语

本文对高速电机进行了深入研究,指出了国内外在这一领域的研究现状和发展趋势。基于此,本文提出了一种高速永磁同步电机的驱动器设计方案,其控制系统基于矢量控制,采用空间矢量调制的方法,使用SiC型 MOSFET 构成变换环节,实现 高速永磁同步电机的驱动要求。对比普通交流电机的驱动系统,确定本文的控制系统结构。也确定了使用 ARM+DSP+FPGA 的架构,控制芯片同时工作,完成计算任务。最后的仿真结果表明,使用此方法加入解耦补偿环节的控制系统,系统的稳态性能和动态性能良好,对于转速突降和突增工况,加入限幅环节的情况下,转速过渡良好。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSkYzuicY0VXBSlOpFQgAEgVbbBRwEQvuFftFpq9dc5c407t1vgGYSqLQ/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSQZ8rItVF549RExeyaASEBHibMAhABuxeLC4Z3zx4qR3u9KoVDzNcnAg/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSrUMibDLoibdQRFTmIlZgtnh7nVfvz2WPF2pHmsgJvb7fm870t8gGqSAg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)