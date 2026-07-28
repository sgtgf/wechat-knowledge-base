# SiC器件在高速永磁电机转速跟踪控制中的应用研究


> 原文地址: [https://mp.weixin.qq.com/s/oGurubZVehjBXJRNu9uIoQ](https://mp.weixin.qq.com/s/oGurubZVehjBXJRNu9uIoQ)

**文章来源：**控制工程

**作者：**蒋冬，赵金星，胥阳，李晨（上海理工大学机械工程学院，上海200093）

**摘要：**针对高速永磁同步电机(HSPMSM)的电感值小、基波频率高等特点，以及Si基IGBT开关速度和电压等级限制而引起的电机运行过程中定子电流谐波含量高、发热严重和响应延迟大的问题，研究SiC金属氧化物半导体场效应晶体管(MOSFET)在HSPMSM转速跟踪控制中的应用。通过双脉冲测试电路分析了SiC和Si器件的开关特性，结果表明SiC MOSFET具有更快的开关速度和更低的开关损耗。基于Simulink/PSpice联合仿真，搭建了HSPMSM失量控制仿真模型。仿真结果表明，采用SiC器件的逆变器能加快电机转速响应速度，减少电流高次谐波，提高输出稳定性，从而提高转速跟踪性能。

**关键词：**SiCMOSFET；联合仿真；高速永磁同步电机；转速跟踪；矢量控制

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW151yc39CUSoianRn1zehqbW9IhVaMyib6kxdFPAqn69iaibvLfyHibjjuUxQ/640?wx_fmt=jpeg)

**1.  引言**

高速永磁同步电机(high-speed permanent magnets ynchronous motor,HSPMSM)凭借功率密度大、体积小、重量轻、响应快的优点，在高速储能飞轮、高速数控机床、高速发电机等领域有着广阔的应用前景。但受体积的限制，HSPMSM的电感值一般很小，并且其转速可达每分钟数万转，定子基波电流频率很高，加上传统驱动逆变器开关频率的限制，导致定子电流谐波含量很高，进而产生大量铁芯损耗，造成电机发热严重，降低了电机的控制性能。因此，HSPMSM的驱动控制对逆变器中功率器件的开关性能和电压等级有较高的要求。

近年来，随着半导体材料和电力电子技术的快速发展，以碳化硅(silicon carbide,SiC)材料为代表的第三代宽禁带半导体器件凭借开关速度快、耐压等级高和导热率高的优点，逐渐成为高性能逆变器的主流功率器件。文献讨论了阻断电压为1200V漏极电流为100A的SiC金属氧化物半导体场效应晶体管(metal oxide semiconductor field effect transistor，MOSFET) 的开关瞬态和开关损耗，并与同等级的硅绝缘栅双极型晶体管(silicon insulatedgatebipolartransistor，Si IGBT)进行了比较，结果显示了SiC MOSFET在损耗方面的优势。文献通过开关测试和静态特性实验发现，在开关频率为8kHz和25kHz时，使用SiC MOSFET代替Si IGBT，逆变器效率分别提高了1.69%和0.48%，电流范围低至10A。文献研究了在基于SiC器件的电机驱动系统中，开关频率增加时的电机响应；实验结果表明，随着开关频率的升高，电机电流波形更接近基波，谐波成分明显改善。文献设计了功率为7.5kW的SiC逆变器试验样机，其开关频率为100kHz，理论效率可达到97.5%。文献通过分析死区时间影响，对基于SiC和Si逆变器的永磁同步电机(permanentmagnet synchronous motor, PMSM)驱动性能进行比较，实验结果验证了基于SiCMOSFET的PMSM驱动系统在效率、功率密度和动态特性方面的优越性。文献对用于中压大功率驱动的模块化多电平换流器(modular multilevel converter, MMC)进行了比较研究，实验结果表明，基于SiC MOSFET的MMC比Si IGBT具有更好的转矩脉动抑制效果。文献采用全SiC器件代替变流器中的Si器件，提高了开关频率并减小了滤波电感电容的体积和功率模块的温升。文献针对开关频率的提高，通过实验验证了采用SiC MOSFET的牵引逆变器可降低谐波损耗和电机噪声，并实现牵引系统的节能。

本文将基于SiC MOSFET的逆变器应用于HSPMSM调速系统中，对电机的转速跟踪性能以及响应进行研究。相比于传统Si IGBT，SiC MOSFET具有更快的开关速度和更小的开关损耗，可减小逆变器死区时间，提高工作效率。联合仿真结果表明，应用SiC逆变器可有效提升电机的转速跟踪性能，降低电流谐波含量，抑制转矩脉动，改善了电机驱动控制性能。

**2.  开关特性分析与比较**

本文选取ROHM公司生产的Si IGBT和SiC MOSFET器件作为研究对象，两种功率器件的主要参数值见表1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1rwV6JO8Z9SptN1XHj5cNrs7lJK8q2XyYxlI8r1qedmpY0lurudaOug/640?wx_fmt=png&from=appmsg)

为了分析SiC MOSFET相比于Si IGBT的优缺点，本文通过双脉冲测试电路研究两种功率器件开关过程中的电压和电流波形，从而获取器件的开通和关断延迟时间、升降时间以及功率损耗等开关特性。

在PSpice软件中搭建双脉冲测试电路，如图1所示。其中，M1、M,2为功率器件，电路采用ROHM公司的官方Spice模型，该模型可真实准确地反映器件开关过程中的非线性参数。在上管M1施加-5V的偏置电压，使其处于关断状态，体二极管D1、D2作为续流二极管；下管M2的驱动电压为0V/18V，两次脉冲信号周期均为1μs，脉宽为0.5μs。设置相关元件的参数值，对两种器件的开关过程进行仿真测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Y8ibL5icKgbqq2TuQoib7X49BhWyGp6Yvte26EP6CaiaP3wGUWuU4axPQg/640?wx_fmt=png&from=appmsg)

在漏源极电压VDS（集射极电压VCE）为400V、漏极电流ID（集电极电流IC）为10A、驱动电阻RG为10欧、温度T为25度的条件下，SiC MOSFET和Si IGBT开通过程和关断过程的电压和电流仿真波形如图2所示。图2中，VGS为栅源极电压，VGE为栅极电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1oPMqCFDs7kUmaFKsFdPVOYOsaKTnz8MmqxTIV24SEb1zgJAWTEkhFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1ibVqJhkAWgwhX5bYoVPb4gWvUSxksFApzd7ibDU9aM53DuxHkGpz2Vlw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Gf4LVCYfVrTL5kWR4Zj5rSNCyMeZYIA59AHflHRzNHQA2Jial9gvGow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW12pyhDrkPGyq0Q62dzcE4cRPgWq8Azos5gYBibSgicFiaCLQGCtHNHrDrg/640?wx_fmt=png&from=appmsg)

根据器件开通和关断的定义可从图2中获取开关过程的起点和终点时刻，从而计算得到开通时间、关断时间等参数值，见表2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1ZSzzibIIP3Ey95jmuu79dUV4q4OUOBhqRPGI7haSpF3BsncupEMiaichw/640?wx_fmt=png&from=appmsg)

由计算结果可知，SiC MOSFET的开关延时和开关时间都明显小于Si IGBT，因此SiC MOSFET具有更快的开关速度。开关速度不仅决定了逆变器的最高开关频率，也对逆变器死区时间的设置有影响，较小的死区时间能减少电流谐波的产生。

从图2开关过程中漏源极电压VDS和集射极电压VCE的波形可以看出，SiC MOSFET的电压转换速率明显高于Si IGBT，这是由于SiC材料比Si材料具有更高的电子迁移率和更小的寄生电容。这种较大的转换速率可以大大降低功率器件的开关损耗。在实际应用中，功率器件的开关损耗是决定逆变器工作效率的主要因素之一。开关损耗与器件的漏源（集射）电压、漏极（集极）电流和开关时间有关，每个开关周期内的开关损耗计算公式如下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Py1lxwzQ2Bu5soP1A2A8IUKMKa7QYOyFqM9oL8ibIxuzhDGWdLJhHGA/640?wx_fmt=png&from=appmsg)

通过式(1)和式(2)分别计算两种功率器件在10kHz开关频率下的开关损耗值，并将其转化为能量的形式，计算结果如图3所示。从图3可以看出，SiC MOSFET的开关损耗明显低于Si IGBT。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Vbjqk0X1wxO93PILCzXxksrxJot8oBkFuuT4YeM8wHsCXpSuLRWRLA/640?wx_fmt=png&from=appmsg)

**3.  SiC逆变器仿真模型**

在电机驱动控制系统中，HSPMSM通常由电压型三相桥式逆变电路供电，如图4(a)所示。其中，M1~M6为功率开关器件；L为等效电感；R为负载电阻；ia、ib、ic为相电流；Va、Vb、Vc为相电压；a、b、c和n分别为三相端点和中性点。该电路通过空间矢量脉宽调制(space vector pulse width modulation，SVPWM) 技术控制每相桥臂上功率器件的开通和关断状态，使逆变器输出交流信号驱动电机。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1XQoYcH0iciamvbYSqickrMOOKgTNfmb0XKAFk6LHYDewsNVh15Tia1fhWQ/640?wx_fmt=png&from=appmsg)

由第2节对两种功率器件开关特性的研究可知，相比于Si IGBT，SiC MOSFET可显著降低开关损耗、缩短死区时间和提高开关频率。这些优点不仅可以减小逆变器的体积和重量，且大大减少了电机电流谐波的产生，提高了工作效率。因此，SiC逆变器更适合应用在高速、高基频的HSPMSM控制系统中。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1oDbKNkn11dC9BZCSktYXsMXtT3wpKLhDQz1cnfoXjdLk0NSibwoaaZQ/640?wx_fmt=png&from=appmsg)

为了在仿真过程中更加真实准确地反映逆变器的实际工作状态，在PSpice软件中搭建考虑功率器件实际开关特性的逆变器模型，如图4(b)所示。功率器件分别采用第3节所研究的Si IGBT和SiC MOSFET，该逆变器模型将替换Simulink元件库中的理想逆变器模型，用于后续电机控制仿真系统中。

**4.  HSPMSM矢量控制方法**

**4.1HSPMSM数学模型**

HSPMSM是一个非线性、强耦合、多变量的复杂系统。为了降低电机控制的难度，本文对电机的数学模型进行了简化，忽略了铁芯饱和效应和绕组漏感，并认为转子上无阻尼绕组。

在两相同步旋转dq坐标系下，表贴式HSPMSM的电压方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1eASniboLe047zjicc0YAJDlyXKE0g9giba5jaFQaaicpChTicxicLkgd8chw/640?wx_fmt=png&from=appmsg)

式中，ud和uq分别为定子电压在d轴和q轴的分量；id和iq分别为定子电流在d轴和q轴的分量；Ld和Lq分别为等效电感在在d轴和q轴的分量；Rs为定子电阻；![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW12fKkvUnu7ibMEW1ICzxVDCiaUPQyGp1xib9uxxGuHaP14I6X4dlxo2r0A/640?wx_fmt=png&from=appmsg)为电机转速；![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Z9s7rncdRaksp3CxicTYewua89HTtbjk75G0xmJw7h6WWRfUEqjgqnQ/640?wx_fmt=png&from=appmsg)为永磁体磁链；Pn为电机极对数。

**4.2 弱磁控制算法**

HSPMSM运行速度的范围很宽。当电机运行在基速以下时，表贴式HSPMSM通常采用id=0控制，该控制算法使d轴电流恒等于0，通过调节q轴电流iq控制定子电流矢量is，从而控制电机输出转矩。

当电机转速超过基速且继续升高时，反电动势随之增大，电机端电压达到逆变器所能输出的最大电压后，电流环比例积分(proportional integral，PI)调节器饱和，再增大电压无法提高电机转速。HSPMSM的转子为永磁体，励磁磁链无法调节，若想继续提高转速，只能采用弱磁控制，通过增加d轴去磁电流id来削弱气隙磁场，维持电压平衡以扩大电机转速范围。本文采用基于电压反馈的弱磁控制算法实现电机的高速运行，其原理如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1k3sESCUBjPgW7KOqqRw2cm0YWxic2yxcNq8CbYUnhxJY0HQc5Hfcc0A/640?wx_fmt=png&from=appmsg)

该算法通过电流解耦后输出的参考电压![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1XdgOkz1uUc7NPqgo5ibiblyzkGPR5NcbqZQM1xUpVoHX9qVy7ibmNrgJQ/640?wx_fmt=png&from=appmsg)和![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1b2L1V7ek1klN9MII1eYmkTje1ZPqu3FVYqWWrdGOOGLofhbWMQHQjQ/640?wx_fmt=png&from=appmsg)计算得到电压矢量Us的值![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1KlOwvKctLYHaQ7Z7xAMvaswI1Tn5zuqEJyNjPn6uNcNXibgncqjc5ow/640?wx_fmt=png&from=appmsg)，将![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1KlOwvKctLYHaQ7Z7xAMvaswI1Tn5zuqEJyNjPn6uNcNXibgncqjc5ow/640?wx_fmt=png&from=appmsg)与电压极限Ulim相比较，判断电机是否进入弱磁区域。Ulim=![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1QR4FZjqibjTdO3CBRM4b8VKHWMib9vjcEick6NR2EdhrYlCmtI8YvTJGg/640?wx_fmt=png&from=appmsg)，其中Vdc为直流母线电压。当![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1KlOwvKctLYHaQ7Z7xAMvaswI1Tn5zuqEJyNjPn6uNcNXibgncqjc5ow/640?wx_fmt=png&from=appmsg)未超过Ulim时，电机处于基速以下运行，矢量控制系统处于id=0控制模式；当电机转速超过基速后，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1KlOwvKctLYHaQ7Z7xAMvaswI1Tn5zuqEJyNjPn6uNcNXibgncqjc5ow/640?wx_fmt=png&from=appmsg)超过Ulim，弱磁控制模块开始工作，两者的差值经PI调节器输出负的d轴去磁电流![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Ecb76cBuicv4DzOo30ziaibH7icBBbu1KGVzBDlekoic8hEzWUCskOUVpag/640?wx_fmt=png&from=appmsg)，使电机转速继续升高。

**4.3 PI调节器参数整定**

HSPMSM矢量控制系统采用转速、电流双闭环控制结构，PI调节器的设计直接影响电机的转速跟踪性能。针对HSPMSM运行过程中存在的系统参数和扰动的不确定性，本文在提高系统稳定性的基础上，对PI调节器的参数进行整定。

由于控制系统中d轴和q轴电流环结构对称且表贴式HSPMSM的交轴和直轴电感相等，因此两个电流PI调节器参数相同，下文以d轴电流环为例进行推导。

d轴电流环的闭环传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1dflI1fVW3zuevNYxJOIq5IhdOlOB6dPHuVnEpPRUTW3iaNr8vQpt54A/640?wx_fmt=png&from=appmsg)

式中，kdp和kdi分别为电流PI调节器的比例系数和积分系数。

根据传递函数的零极点对消原理，将电流环简化为惯性环节：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Q2rner1me03NSrpWlHbTYsvXvWxKwSeh0qYciaZnQDEVOTciamibMMH5w/640?wx_fmt=png&from=appmsg)

式中，kvp和kvi分别为转速PI调节器的比例系数和积分系数；kT为常数，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1GqTZZQwsNufzMKVsFk95LeTuW7BhN9GrorSZnB7PiaibfVhYFGoNQMtg/640?wx_fmt=png&from=appmsg)，其中CT为转矩常数；B为阻尼系数；J为转动惯量。

根据传递函数的零极点对消原理，将转速环简化为惯性环节：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1YGBStL6p6NFiblL7Os2L8ZNoaKY3JyvEbfXIRKIQrrLZnrIDx8SFGRQ/640?wx_fmt=png&from=appmsg)

**5.  仿真结果与分析**

为了更加接近系统的实际工作状况，利用PSpice电路仿真的精确性，在Simulink中通过SLPS接口搭建软件在环仿真平台，使用PSpice中建立的逆变器模型替换Simulink中的理想逆变器模型以实现联合仿真，最终搭建的HSPMSM矢量控制系统仿真模型如图6所示。其中，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1HMC9ve2kSRlZtKSaV7vl2WicqOlgloqPexwAtqURBNdEo5YcpWhQhSA/640?wx_fmt=png&from=appmsg)为参考电流矢量，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1Sia4RuVpIOVwba0EMfvOicYgE1t9TutOxmc0xg4WZmrPsRPSlZZRwQFg/640?wx_fmt=png&from=appmsg)和![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1k0uWMoBNGto5ibjzS5BozhLmicwjy7gKpCgDW0mNfhtiaN5ia3xvvUkHHA/640?wx_fmt=png&from=appmsg)分别为α轴和β轴参考电压值，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW17JibXicTLczicjlYFwULxgYrrIpmS30wHD95pR1VUGAg9JT2mfWRIy4Pw/640?wx_fmt=png&from=appmsg)分别为α轴和β轴参考电流值，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1knAp1qdxz8Jicic5JFRsWCvDNdTEia5Ar02q3xOHVicWmej4lcG7hylZUw/640?wx_fmt=png&from=appmsg)为转子角度。通过与Si逆变器相比较，对基于SiC逆变器的电机转速跟踪性能和驱动响应进行研究。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1iazbKWgKsKkfXBGQlKQYxBHdFTqZbRF5Hzrjz0uC8ZCrSPiaEdBhqEzw/640?wx_fmt=png&from=appmsg)

HSPMSM的主要参数：定子电阻RS=0.1欧，交直轴电感L=0.035H，极对数pn\=1，永磁体磁链![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1iau9pgxeQj5ibbibhQ8MV1DYKUrhoP3zIDicf4bOSWjmrr8MeZBgT7r31A/640?wx_fmt=png&from=appmsg)\=0.0328Wb，转动惯量J=0.00014kg·m²，直流母线电压Vdc\=1000V。电流PI调节器和转速PI调节器的参数分别通过式(8)和式(12)求得。参考转速设置为阶跃信号，初始给定转速设置为5000r/min，0.15s时阶跃至100000r/min并保持不变，0.6s时下降至30000r/min，目标转矩为30000N·m。分别对基于Si逆变器和SiC逆变器的电机控制系统进行仿真，仿真结果如图7至图10所示，两种逆变器驱动下的相关响应参数值见表3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1qnHSEgjt2FsbLia6Gkia2DDSa2CpIicghCXDE4xFNB0FMzrj2QyR82u4Q/640?wx_fmt=png&from=appmsg)

图7为基于两种逆变器的电机转速响应波形。从图7可以看出，在id=0控制模式下电机转速都能很好地跟踪给定值；0.15s后电机转速继续升高，超过基速后，控制系统切换为弱磁控制模式，使电机转速达到100000r/min。由表3可知，基于SiC逆变器的电机转速响应速度明显快于Si逆变器，电机转速上升时间短。从图7的局部放大图可以看出，基于SiC逆变器的电机转速过渡平滑，超调量小；而基于Si逆变器的电机转速波动较大，直至约0.53s时才稳定维持在100000r/min。在电机转速下降过程中，基于SiC逆变器的电机转速同样能够更快地跟踪上给定转速。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1ljyMIyQw7d6hWakQeMYPxljLIicSiaQehDeQFIKfjMCPhuxicBoPOBBcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1C7ZJ7ctp7FjdMRwfMQTZHJHWWJzp3ugwLlt93llp33bqu8tJr4rogA/640?wx_fmt=png&from=appmsg)

图8是电机转速为100000r/min时的a相电流波形。从图8可以看出，基于Si逆变器的电机a相电流波形有明显的尖峰，正弦度差，畸变严重；而基于SiC逆变器的电机a相电流波形相对平滑，正弦度好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1ZvOejwN3b0KXbiauSBDF6ibC8kL6S9ziaomA7xId7DuPvl1JZJp1TmDNQ/640?wx_fmt=png&from=appmsg)

图9为通过快速傅里叶变换(fast Fourier transform，FFT)对电流谐波含量进行分析得到的相电流频谱。由图9可知，基于Si逆变器和SiC逆变器的电机相电流总谐波失真(total harmonic distortion,THD)分别为33.74%和21.65%，其中5次、7次谐波的含量分别为23.3%、17.9%和13.4%、9.1%。分析结果表明，采用SiC MOSFET能大大减少电流谐波含量，改善控制系统的转速跟踪性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1WAI5qU0uibNJIwicaic9rs2ibgp0prctS77EmyddwVSb4VZdJkoYweKk2w/640?wx_fmt=png&from=appmsg)

图10为电机转矩波形。基于Si逆变器的电机相电流谐波含量高、畸变严重，导致转矩产生了剧烈的振荡；而基于SiC逆变器的电机转矩波形较平稳，能够很好地跟踪给定值，从而提高了电机输出的稳定性，使实际转速能够更好地跟踪给定转速。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsln5KGwwV0jeRfo0hlw7uW1PrgQB8Zq3KYp5r3JjTMUm3UiaMIaY9Qu3lOat8FoksJWQCkumGCmiaDg/640?wx_fmt=png&from=appmsg)

**6.  结论**

本文针对HSPMSM转速跟踪控制中存在的问题，给出了一种基于SiC逆变器的控制方案，利用双脉冲测试分析了Si和SiC器件的开关特性，验证了SiC MOSFET可降低开关损耗，提高开关速度。通过Simulink/PSpice联合仿真，搭建了HSPMSM矢量控制系统。仿真结果表明，采用SiC逆变器能够提高电机响应速度，减少电流谐波含量，改善电机输出稳定性，使电机具有较好的转速跟踪性能。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)