# 基于单向脉冲电路和 SiC 器件的超高频感应加热电源

原创 石新春 马莽原 SiC碳化硅MOS管及功率模块的应用 2025-04-04 06:11 广东

> 原文地址: [https://mp.weixin.qq.com/s/5y3q4OFvFHJyW3uzf3JRsA](https://mp.weixin.qq.com/s/5y3q4OFvFHJyW3uzf3JRsA)

文章来源：电工技术学报

作者：石新春 1 马莽原 1 柴艳鹏 2 李亚斌 1 付 超 1（1. 华北电力大学电气与电子工程学院 保定  071003；2. 保定四方三伊电气有限公司 保定  071051）

摘要： 针对超高频感应加热电源中存在的输出功率小、寄生参数引起的电压电流冲击严重、开关损耗大等问题，提出基于单向脉冲电路和 SiC 器件的超高频感应加热电源。该电路采用 RLC负载并联谐振和单向脉冲供电的工作方式，增大输出功率。开关器件采用新型 SiC MOSFET，开关时间短，可以提升工作频率。此外，直流母线串接大电感，可以吸收母线的杂散电感，通过的直流电流不会对开关器件产生电压冲击，同时，连接线路采用简单的平行母排结构，减小了线路的杂散电感，减弱了对开关器件的电压冲击。开关器件工作在软开关状态，可以降低开关损耗。研究分析电路的工作原理和特性，并通过仿真和 1MHz/1kW 的样机进行验证。

关键词：单向脉冲电路；  SiC 器件 ；感应加热； 超高频

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmEtkTx1ZPkoIiaLPm7YwEpmnyGsF3iawlicspLVGLJbjCTYr3qIluzxIhQ/640?wx_fmt=jpeg&from=appmsg)

0 引言

超高频感应加热电源在金属零件表面热处理、半导体材料加工、光纤生产、焊接技术、等离子体发生等方面有着广泛的应用。目前，电子管振荡器是此类电源的主要产品，但是该产品存在启动慢、效率低、寿命短的问题，因此采用功率半导体器件研制固态超高频感应加热电源已经成为发展趋势。到目前为止，国内外在该领域已经取得一系列研究成果 。 国外文献 \[2-3\]采用 E 类放大电 路和硅基MOSFET 实现 3.3MHz/500W 和 7MHz/150W 的小功率超高频感应加热电源；文献\[4-7\]采用电压源串联型拓 扑 、 不同形式的负载和不同封装的硅基MOSFET 实现 2MHz/2kW、2MHz/6kW 的超高频感应加热电源，半桥逆变拓扑和硅基 MOSFET 实现1.5MHz/7kW 的超高频感应加热电源，电源功率得以提升，但是工作频率降低、工艺复杂程度有所增加。国内文献\[8-11\]提出新型拓扑电路，并以硅基MOSFET 作为开关器件，通过吸收寄生参数和采用软开关工作模式的方法实现 1MHz/1kW 超高频感应加热电源，但是换流过程较复杂。超高频感应加热电源研究工作中存在的关键问题是：在 MHz 开关频率下，由于硅基开关器件寄生电容、二极管反向恢复电流、线路杂散电感等参数的影响，电路中会出现电压电流过冲和高频振荡以及较大的器件损耗，导致采用传统的电压源串联型和电流源并联型拓扑时，电源的工作频率和输出功率受到限制。

为了解决存在的问题，需要在电路拓扑、开关器件、线路布局和工作模式方面加以考虑。本文采用一种单向脉冲供电的电路拓扑和 SiC 器件来研究固态超高频感应加热电源。此电路拓扑具有形成单向高频电流脉冲向并联谐振负载输出大功率和减弱线路杂散电感影响的特点，再结合 SiC 开关器件的优良特性和软开关工作模式，可以在很大程度上减小电压冲击和开关器件损耗，使电源的工作频率和输出功率得以提升。

1 电路结构和基本工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmxmoQpx3PyoudlhhkTia8SPAXYeOUB8KvzibvIbGbK2I5IcGfgxrXe7Pg/640?wx_fmt=png&from=appmsg)

本文采用的电路拓扑如图 1 所示。E 为直流电压源；Ld 为直流母线串联的储能大电感，具有平波作用；Q1、Q2 为开关器件 SiC MOSFET；VD1、VD2为串联的 SiC 二极管，当负载功率因数不等于 1 时，避免 SiC MOSFET 承受反压，防止回路形成环流；R 和 L 为感应线圈和加热工件的等效电阻和等效电感，C 为并联谐振补偿电容，区别于 Boost 电路中的稳压电容；Q1、VD1 构成桥臂 1，Q2、VD2 构成桥臂 2，两个桥臂采用平行母排结构，并联谐振负载与平行母排直接相连，可以减小线路的杂散电感。

图 1 表明，该电路拓扑可以通过直流电源向电感充电，存储大量的能量，并通过功率开关的快速动作在很短的时间内以脉冲的形式将电感中储存的能量释放到负载上，从而在负载上获得较大的输出功率。该电路拓扑的基本工作过程如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmOYZ5cia1NUMg2UIrqbViaq9UQmXuiaGN5mW57f5uAZNZicuD1gUGsribb5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmjHzc5cz3Upde3xpV4ffrxxdkfRDO1yFfw1lM8WUtDY1L9NcGeUupug/640?wx_fmt=png&from=appmsg)

图 2a 中，开关 Q1 处于导通状态，并且直流电压源 E 正在向储能电感 Ld 充电。开关 Q2 处于关断状态，电源与谐振负载断开，并联谐振电路处于振荡状态。谐振电容 C 处于反向充电过程。

图 2b 中，开关 Q1 处于导通状态，并且直流电压源 E 正在向储能电感 Ld 充电。开关 Q2 仍处于关断状态，电源与谐振负载断开，并联谐振电路仍处于振荡状态，但是谐振电容 C 处于反向放电过程。

图 2c 中，开关 Q1 处于关闭状态，Q2 处于导通状态。并联谐振电路处于振荡状态，直流电压源 E和储能电感 Ld 向谐振负载 R-L//C 充电。谐振电容 C正处于正向充电过程中。

图 2d 中，开关 Q1 处于关闭状态，Q2 仍处于导通状态。并联谐振电路处于振荡状态，直流电压源E 和储能电感 Ld 向谐振负载 R-L//C 充电，但是谐振电容 C 处于正向放电过程中。

2 电路工作特性分析

图 1 电路中，直流电压源串接大电抗构成直流电流源对并联谐振负载回路进行充电。由于开关器件 SiC MOSFET 工作在 1MHz 的开关状态，其开通和关断时间相对于开关周期而言不可忽略，实际的充电电流波形存在上升时段和下降时段，所以充电电流的波形为单向周期梯形脉冲，脉冲波形如图 3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmEEOQ35l102U0dzC9UxxaXTxrBFbppY1sEwgJT5JX3jy2MDDK1pPLpA/640?wx_fmt=png&from=appmsg)

此单向周期梯形脉冲的函数 g(t)在一个周期内的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmt8kg9ZicOB7XLiaSaEpA12Nicb3eYecKHu7biaYKPAr36OngSyzc9hVgRw/640?wx_fmt=png&from=appmsg)

式中，A 为单向周期梯形脉冲的幅值；t 为时间变量；d 为 1/2 重叠区时间；a=2πd/T 为 1/2 重叠区时间对应的电角度，T 为梯形脉冲函数的周期；ω1 为基波角频率；k 为奇数。

直流分量

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmX6EEpDlFPl3k0RUxxVWLnNuKCUBGQ6ASc8NSibSFWksEDTrt3Uc8Ywg/640?wx_fmt=png&from=appmsg)

交流分量

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmdTgxU5ZhlVtOVdoOPiaGPtqvEdLtXdjQbm1llmqDSco1pFoJccICKJg/640?wx_fmt=png&from=appmsg)

可知，电路的基本工作原理等效于一个单向周期梯形电流脉冲对并联谐振负载回路的充电。单向周期梯形电流脉冲可以分解为直流电流分量、正负电流脉冲分量，而正负电流脉冲分量可以进一步分解为基波电流分量与高频电流分量，其中直流电流分量从电感支路通过，高频电流分量从电容支路通过，基波电流分量分为两部分从电容支路和电感支路通过。直流电流分量在线路和感应线圈中极小的直流电阻上产生很小的直流电压和直流功耗，可以忽略不计。

根据并联谐振负载特性可知，并联谐振负载发生谐振时的频率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmB3Nia9QzcVxhMzC7WM1rom3JibkclwsamSF2rJvuH0woNuAtwRusooEA/640?wx_fmt=png&from=appmsg)

假设电源电压为 E，电流为 I，根据开关频率 f与负载谐振频率 f0 的关系，电路的工作状态可以分为两类情况：

（1）开关频率 f=f0，根据负载回路阻抗特性可知，负载回路对基波电流呈现高阻抗特性，等效负载阻抗为 L/(RC)。负载电压 u(t)主要由基波电压分量 u1(t)构成，高次谐波电压分量很小，可以忽略，根据式（4）可得负载电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmCLJyEz0fD2koH3GfcbvTF2VrbibniaaQy9ReuIuMfBT5aEicT3WMhwS0w/640?wx_fmt=png&from=appmsg)

根据能量守恒定律可知，在一个周期 T 时段内，电源输出的能量为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRm5ShBMINC3nze295uZRm65SYfFNvY9HDOkAGlRE4MRKicnxKibqqqQ2IQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmEGZiaR1bMja89zdh3xbqNdrOgLT0xweiasdWo8et6cyE92dstdWmCAtQ/640?wx_fmt=png&from=appmsg)

式中，I 为直流电压源输出电流；2a 为重叠区；i1(t)为负载基波电流；I1m 为负载充电电流基波幅值；ILR1m 为谐振电感电流基波幅值；U1m 为负载基波电压幅值； P1 为负载基波功率；P 为电源输出的有功功率；ϕ 为基波功率因数角。

当重叠区 2a 较小，可以忽略时，a=2πd/T→0，sina/a=1，cosa=1，式（8）～式（10）、式（13）、式（14）可以简化为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmlQfG66zLPGfocFqrhKyJekUdiaJbEftIbJsUKoibpJeicj0U5MqiaribaKg/640?wx_fmt=png&from=appmsg)

全桥并联谐振逆变器输出的有功功率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmP9ibW7NmnSrcNVhLSiazoMOrf4IJ2mozNBb9IC7QtQ6xo1ZYZCQjiamoQ/640?wx_fmt=png&from=appmsg)

式中，Ud 为整流电压。

谐振时，则 cosϕ =1，输出的有功功率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmprgyZzdlTiaiboJmqRaU585tA62KZKNibK0ibRTIogbzeVVBqibOktZuGTw/640?wx_fmt=png&from=appmsg)

当负载充电电流频率 f=f0 时，由式（13）和式（18）可知，负载电压基波幅值是直流电源电压的π 倍，不受负载参数变化的影响；由式（19）和式（21）可知，在直流电压、开关频率和负载相同的条件下，电路发生谐振时，该电路拓扑输出的有功功率为全桥并联谐振逆变器的 4 倍，实现了低直流电压的大功率输出。

（2）开关频率 f≠f0 时，假设负载基波阻抗为 Z1，根据式（4）可得电流基波分量为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmZczyibibWyGaSr4peAzRzIvpWu9c1cCwvwNDiaAFersPaiayMush09f9pw/640?wx_fmt=png&from=appmsg)

由能量守恒可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmz6Ae6VEabOwLb3RYAhfPyDy0T6JSibYYAUxia02icHZjetld786mxqpfw/640?wx_fmt=png&from=appmsg)

可知，当开关频率 f≠f0，重叠区 2a 较小，可以忽略时，a=2πd/T→0，sina/a=1，cosa=1，式（23）、式（26）可以简化为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRm9FO25PuODJWicJeS0YxFkoEpbDic8o0KSDpZ34JSKuCpR2ficiaq0hPeSg/640?wx_fmt=png&from=appmsg)

非谐振时，全桥并联谐振逆变器输出的有功功率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmyBnDCPQqTibsqZdaCzF7rwQIOtVmJTNy7Md2u39wHicbz7GhjdRdMqgg/640?wx_fmt=png&from=appmsg)

由式（29）和式（30）可知，在直流电压、开关频率和负载相同的条件下，电路处于非谐振状态时，该电路拓扑输出的有功功率为全桥并联谐振逆变器的 4 倍，实现了低直流电压的大功率输出。

3 仿真分析

为了验证电路工作原理的正确性，进行了仿真研究 。 仿 真 电 路 参 数 为 ： E=115V ， Ld=2mH ， L=2.08μH，C=10nF，Q1 和 Q2 交替互补 180°导通，负载谐振频率 f0=1.1MHz。图 4 所示为开关频率 f和重叠区 2a 发生改变，电路工作在不同状态时，开关器件 Q2 的电流 iq2，负载电感支路电流 iLR，负载端电压 uc，开关器件 Q1 端电压 uq1，开关器件 Q2 端电压uq2 的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRm1gxTeNh7FgIMpuMMiaAzrm59NGX3mls05adTxHFGrJrepZ2tl2U2dvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmdicUAFuVM30yAYOXAaW8JFK6JsASP1neBkfKundwL0TJUf3MXYpniagA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmLASenmibnsBV78L375bziaKImiaUhib3MIGzy73O31nhgLoUQOibHlUQibPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmn0sX6RZ7msDF66QGRK0313S9MaYcbs5psssmaclMxrNpqV5ZuuXERQ/640?wx_fmt=png&from=appmsg)

由图 4 可知，根据开关器件工作频率 f 与负载谐振频率 f0 的大小关系，电路可分为三种工作状态。f＜f0 时，负载为感性，开关器件在开通和关断瞬间不会出现电流毛刺或者电流冲击，开关器件端电压波形为正弦半波，在开通前会出现反压部分，在关断瞬间会出现非正弦规律的快速上升现象。f=f0 时，负载为阻性，开关器件在开通和关断瞬间会出现电流毛刺，开关器件端电压波形为正弦半波，开通和关断瞬间端电压均接近于零，理想状态端电压应该等于零，因此开关损耗很小，开关器件工作在近似软开关状态 ， 有利于开关器件工作在 高频状态 。f＞f0 时，负载为容性，开关器件在开通和关断瞬间会出现电流冲击，开关器件端电压波形为正弦半波，在关断后会出现反压部分，在开通瞬间会出现非正弦规律的快速下降现象。当负载为感性或者容性时，负载等效阻抗变小，充电电流变大，负载电压升高，开关器件在开通或者关断时会出现较高的端电压，且此时电流不为零，开关器件工作在硬开关状态。当重叠区 2a 为 4%周期时，重叠区内，关断的开关器件端电压会出现由反压向正压过渡的阶段，电流出现振荡现象，但是重叠区大小对负载输出电压幅值和电流幅值影响较小。

4 实验样机设计和实验验证

为验证理论分析和仿真过程的正确性，需要搭建一台 1MHz/1kW 的样机进行实验验证。由于开关器件工作在 1MHz 的超高频率场合，对于开关器件的开通和关断速度有很高的要求，需要选择开关时间短的开关器件 ， 因此选择新型 功率半导体器件SiC MOSFET 和 SiC 二极管构成开关单元。

CREE 公司生产的 SiC MOSFET C2M0080120D的具体参数见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmSwJkA5npicOlO0seyDic3mPzCQsGXtAclKr6Wl7moIr0rjcyFnLDX5Zg/640?wx_fmt=png&from=appmsg)

SiC 开关器件的极限工作频率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmwrRZo3NpgUiceJ0G6qcHicibfrfpmZeOGzxORN0cQ5NDAhWnfjNNFemBw/640?wx_fmt=png&from=appmsg)

式中，Pdissipation-limit 为极限功耗（W/cm²）；JF 为正向导通电流密度（A/cm²）；Rsp,on 为比导通电阻（Ω·cm²）；tON 为开通时间（ns）；tOFF 为关断时间（ns）；VR 为正向电压（V）。

根据表 1 和使用手册，由式（31）可以计算出SiC MOSFET C2M0080120D 开关器件的极限工作频率。

假设芯片面积为1cm²，Tj=25℃，VDS=1200V，ID=31.6A，RDS(on)=80mΩ时，将Pdissipation-limit=208W/cm²，VR=2.5V，JF=31.6A/cm²代入式（31）可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmq6F7mByV7yPV3VPcpKFzLt8RFp94lKAOicmrRt7vvzINwKeE4hyX52A/640?wx_fmt=png&from=appmsg)

因此，采用易驱动、易并联的 SiC MOSFET 和没有显著反向恢复电流的快恢复二极管 SiC SchottkyDiode 构成开关单元，更适合于超高频场合的应用。

由于 SiC MOSFET 输入电容是温度和电压的非线性函数，而且受米勒电容的影响，总的动态输入电容比总的静态输入电容大得多；同时，受到栅极驱动回路中杂散电感的影响，精确选择驱动器是一项困难的任务。

由静态导电条件得到的栅极电荷曲线可以导出栅极等效输入电容 CGSeq，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmERI21CdBOpgSCRTCAxNXqhr7je2Vh6RlmvH8G7YDnJXq3yiaccPWaSw/640?wx_fmt=png&from=appmsg)

考虑栅极驱动回路为一阶 RC 电路，根据建立栅极波形的时间可以估计出最大 RGS 值，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRm05cicwaCYUHiciaYlaMQRKQGQfhKTHpzWmWQwnJGZ7UBvP0F4rI0waYnA/640?wx_fmt=png&from=appmsg)

驱动器最小峰值电流 iGpeak 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmnq5fBibuO46MEiaHxficGcvEn35Hkout33kHDcLETuQD85tzFxN3JUDhA/640?wx_fmt=png&from=appmsg)

式中，QGSon 为栅极电荷总量（nC）；ΔVGS 为栅极电源电压变化范围（V）；τ 为栅极驱动回路的时间常数（ns）；RGS 为栅极驱动回路的电阻（Ω）。

然而，实际的栅极行为是由一个非线性高阶电路来描述的，它不仅取决于栅极等效输入电容，还依赖印制电路板上驱动回路围成的面积所决定的杂散电感，同样驱动回路电阻也必须经过经验性的精细调整，在门极最大额定脉冲电压和不降低开关速度的情况下抑制门极驱动振荡。为了保证最大的工作频率，根据需要选择了 IXDD630 高性能 MOSFET驱动器。

实验样机采用 3 个定制的云母电容构成并联谐振电容，使用铜管制作感应线圈。采用的主要元器件参数见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRm8zsnMsoib8Qeo8r0cEltqPVzs22N2V3BRqrjWRBInicStRrfZ6IWuKGQ/640?wx_fmt=png&from=appmsg)

由表 2，负载谐振时，有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmLAbxmmn6IShbzV1tt44vPzg6s0XQEVKnmGrp0mKbrh89X3Ya00zJFA/640?wx_fmt=png&from=appmsg)

图 5 为 f =f0=1.085MHz，E=115V 时，触发脉冲ugs、负载电压 u、电感支路电流 iLR 波形。可知，负载充电电流中的直流电流分量对负载 R-L 支路电压和电流相位、波形对称性有影响。谐振状态时，直流电流分量在直流内电阻上产生很小的直流电压和直流功率损耗，但对交流电阻无影响，对系统效率影响有限，可以使电源保持很高的转换效率。电感支路电流幅值 ILRm 达到 25A，负载电压幅值 Um 达到 380V，由于直流电流分量很小，并联电容中的高频电压分量忽略不计，则实验测量的数值与理论计算基本符合，重叠区大小对负载电压幅值和电感支路电流幅值影响较小，实验结果与理论和仿真分析基本一致，表明理论分析的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmqBFQBeo9GYHI6gE8YicUffBJytSRIATp7OV8tJfPe1VbZ5diank6YjcA/640?wx_fmt=png&from=appmsg)

图 6 为开关器件 Q1 在不同的负载状态下，触发脉冲和端电压波形，开关器件 Q2 的波形与开关器件Q1 的波形仅相差 180°。结果表明，实验波形与仿真分析一致。开关器件端电压波形均为正弦半波，波形光滑清晰，没有高频寄生振荡引起的毛刺现象，在开关器件关断过程中，没有出现杂散电感引起的电压过冲。由图中波形可以推知，谐振或者准谐振状态时，开关器件端电压在开通和关断瞬间近似为零，电路工作于近似软开关状态，可以减小开关损耗和电压冲击，降低开关器件损坏的概率，使系统高效稳定运行。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmlVfoAopL5ozQTkPMntTxtUMuuHHkTZyYm6BZTuiabPWUicWl2PTglwHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmcoWyUiaZISEic1Pgmgg1GRmv9eGKrWg94sAcPibicb2NeZyK7AozmjUkeyicE7R6rs88KbwB22Uia6bzA/640?wx_fmt=png&from=appmsg)

5 结论

本文提出一种基于单向脉冲电路和 SiC 器件的超高频感应加热电源，通过理论分析和仿真过程，研究了它的工作原理和特点。该电路拓扑不同于 E类电路和 Boost 电路，RLC 负载工作于并联谐振状态，开关器件上电流波形为梯形脉冲，开关器件端电压波形为正弦半波，开通和关断瞬间电压近似为零，开关器件工作于近似软开关模式，可以减小开关损耗，理想状态开关损耗为零；在直流电压、开关频率和负载相同的条件下，该电路拓扑输出的有功功率约为全桥并联谐振逆变器的 4 倍，实现了低直流电压的大功率输出；在直流母线上串接大电感，吸收了线路的杂散电感，母线上通过连续稳定的直流电流，不会对开关器件产生电压冲击，同时，连接线路采用工艺简单、成本低的平行母排结构，减小了线路的杂散电感，进一步抑制了电压冲击；在开关器件上采用新型的 SiC 器件，与硅基功率开关器件相比，开关时间减小，提升了电源工作频率。最后搭建一台 1MHz/1kW 实验样机验证了理论分析的正确性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)