# 改善SiC MOSFET开关特性的有源驱动电路研究


> 原文地址: [https://mp.weixin.qq.com/s/shsUlQYoQUuqBO5JwAsK8A](https://mp.weixin.qq.com/s/shsUlQYoQUuqBO5JwAsK8A)

文章来源：电气传动

作者：卢乙，李先允，王书征，何鸿天，周子涵（南京工程学院 电力工程学院，江苏 南京 211167）

摘要：针对碳化硅金属氧化物半导体场效应管（SiC MOSFET）开关过程中存在的电流、电压过冲和振荡问题，首先对SiC MOSFET的开关过程进行详细分析，得出电流、电压过冲和震荡的产生机理，然后根据影响过冲和振荡的关键因素，分别提出了电流注入型、变电压型和变电阻型有源驱动电路，并通过 LTspice仿真软件验证了所提有源驱动电路的有效性，最后搭建实验平台对所提变电压型有源驱动电路进行实验验证。实验结果表明，所提变电压型有源驱动电路能够在牺牲较小开关损耗的条件下，有效抑制SiC MOSFET开关过程中的电流、电压过冲和振荡。

关键词：碳化硅金属氧化物半导体场效应管（SiC MOSFET）；有源驱动电路；LTspice仿真软件；过冲；振荡

0\. 引言 

经过几十年的发展，硅（silicon，Si）功率器件已经达到其理论极限，无法满足日益增长的电力电子应用需要，与 Si 功率器件相比，碳化硅（silicon carbide，SiC）功率器件具有更高的击穿电场强度、更高的工作温度和更高的工作频率。因此，以SiC MOSFET为代表的SiC功率器件正替代Si MOSFET，被广泛应用于电机驱动器，光伏逆变器和变压器等设备中。

但是 SiC MOSFET 的过快开关速度会引起高di/dt和dU/dt，同时由于电路中寄生电感和寄生电阻等参数的存在，使得 SiC MOSFET 在开关过程中容易发生电流、电压过冲和震荡，这会产生额外的开关损耗，甚至造成器件损坏。可以通过增加驱动电阻阻值和增加吸收电路来解决上述问题，但是驱动电阻阻值的增加会减缓器件的开关速度，增加开关时间和开关损耗，另外，吸收电路中额外增加的电阻、电容等器件会产生额外的损耗。因此，越来越多的研究人员将研究方向转为驱动侧，希望通过使用有源驱动技术，在牺牲较小开关损耗的条件下，抑制 SiC MOSFET 开关过程中的电流、电压过冲和振荡。

本文首先对 SiC MOSFET 的开关过程进行详细分析，得出电流、电压过冲和振荡的产生机理，并针对影响过冲和振荡的关键因素，分别提出了电流注入型、变电压型和变电阻型有源驱动电路（active gate driver，AGD），然后通过仿真验证了各有源驱动电路的有效性，最后搭建了实验平台，对所提出的变电压型有源驱动电路进行了实验验证。

1\. SiC MOSFET开关过程

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvibknn0qXbpyxkN8I5jnLibW0WgaL7gMHL1hTGaBCzrYILmkZcVjPicXYsQ/640?wx_fmt=png&from=appmsg)

采用图 1 所示的测试电路对 SiC MOSFET 的开关过程进行分析，图1中，Udc为直流母线电压，C 为滤波电容，D 为续流二极管，L 为负载电感，Ld，Ls分别为 SiC MOSFET 的漏、源极寄生电感，Cgd，Cgs和 Cds分别为 SiC MOSFET 的栅漏极、栅源极和漏源极寄生电容，Rg为驱动电阻，Rstray为线路中的杂散电阻，并定义 SiC MOSFET 的输入电容Ciss\=Cgs+Cgd，输出电容Coss\=Cgd+Cds 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvibmibn7PKq0zAbpqmq5WtqiaQmh5JxPVHk73pQISjHUmjXmP81bCHI7a1w/640?wx_fmt=png&from=appmsg)

图 2 为 SiC MOSFET 开通过程中驱动电压UG，栅源极电压 Ugs，漏极电流 id和漏源极电压 Uds的典型波形。

从图2可以看出，SiC MOSFET的开通过程可以分为4个阶段。

阶段一\[t0-t1\]：t0时刻，驱动电压 UG从 Uee阶跃至 Ucc，Ugs开始缓慢上升，该阶段内器件始终处于关断状态。

阶段二\[t1-t2\]：t1 时刻，Ugs 上升至阈值电压Uth，器件开始导通，负载电流流经 SiC MOSFET，漏极电流id开始上升，可由下式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibPIeeGrqoRaSRdBC9LJyUicoSt0nOGWbPI8icPWic752Jic0R7V2SFKWoXA/640?wx_fmt=png&from=appmsg)

式中：gfs为SiC MOSFET的跨导。

当 id上升至负载电流 iDD时，由于续流二极管中储存电荷的存在，其会进入反向恢复过程并产生反向恢复电流，该电流最大值irr \- max表达式如下式所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibkDOx4dH5yfCOyyDhE0ibRZMhCia2IlAiaE2LpXgj7CG4Fohx3IGzvb4VQ/640?wx_fmt=png&from=appmsg)

式中：Qrr为反向恢复电荷；S为软度因子。

did/dt可由下式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibO1KORdLn2ezGUT1Oricy5rwh7jUFtGqxPTciclib4lUnmg0sale0ibIzqw/640?wx_fmt=png&from=appmsg)

由于反向恢复电流的存在，id会继续增加至id \- peak，如下式所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibpkvQHvXBF80Aoz5jtOvXbHQzjiathhEYq2xiaBM7WLVhedgFPib0wOkHA/640?wx_fmt=png&from=appmsg)

该阶段内 id的变化会在回路寄生电感上产生压降，引起器件漏源极电压Uds的下降，如下式所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibOVKMR1w5Z9P4byJRHkk3AxufIzbCTjVDTnb7icEwuF6Q2YPII3WrtCQ/640?wx_fmt=png&from=appmsg)

阶段三\[t2-t3\]：器件进入米勒平台，Ugs保持为米勒电压 Umiller不变，Uds迅速下降至 0，id从 id \- peak下降至iDD并保持不变。

阶段四\[t3-t4\]：Ugs从 Umiller上升至 Ucc，id和 Uds均保持不变，器件完全导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib2XaXL2pYL21Jvjx2tQyTz0htn4UJTAWyTXgal4iaKa1LlLY1vQWJ58Q/640?wx_fmt=png&from=appmsg)

图 3 为 SiC MOSFET 关断过程中驱动电压UG，栅源极电压 Ugs，漏极电流 id和漏源极电压 Uds的典型波形。

从图3可以看出，SiC MOSFET的关断过程可以分为4个阶段。

阶段五\[t5-t6\]：t5时刻，UG从 Ucc阶跃至 Uee，Ugs逐渐下降，器件始终处于导通状态。

阶段六\[t6-t7\]：器件处于米勒平台，Ugs保持为Umiller不变，Uds开始上升并于t7时刻升至Udc。

阶段七\[t7-t8\]：续流二极管于t7时刻开始阻断电压，负载电流开始流经续流二极管，id逐渐下降至 0。电流的变化会在寄生电感上产生压降，并在 SiC MOSFET 上产生额外应力，使 Uds产生电压过冲，由式（5）可知，该电压过冲Uos可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibNiajBKQMaC5RdwkIWInEyMZ9YiboqYfCm3Ho5SiaXHGcxHcXJF3ekarCQ/640?wx_fmt=png&from=appmsg)

阶段八\[t8-t9\]：Ugs由 Uth下降至 0，由于电路中杂散电阻的存在，Uds会发生振荡，可由下式表示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib6GajiagNrDfpbARjmG7rOXsIlZBoicRib9CiaPZRaQt6FLs1icpTmPk6ULg/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CviblXjM4fRbHvxalwkCBaRhVDrP1HUekhOibjSC7ESjJS76nO3kx1olubw/640?wx_fmt=png&from=appmsg)

2. 有源驱动电路

由第1节的分析可知，在SiC MOSFET的开通过程阶段二中，由于续流二极管中恢复电流的存在，漏极电流id会发生过冲，由式（2）可知，该电流过冲与 did/dt 有关，通过减小 did/dt 可以抑制电流过冲，又由式（3）可知，通过减小栅极电流ig、驱动电压 UG或增加驱动电阻 Rg可以减小 did/dt，从而抑制电流过冲。在 SiC MOSFET的关断过程阶段七中，id的快速变化会在SiC MOSFET上产生额外应力，同时又由于杂散电阻的存在，Uds会发生过冲和振荡，由式（6）和式（7）可知，通过减小 did/dt可以抑制电压过冲和振荡，和开通过程相同，通过减小 ig，UG或增加 Rg可以减小 did/dt，从而抑制电压过冲和振荡。

基于上述分析，本文分别设计了电流注入型，变电压型和变电阻型有源驱动电路，如图 4~图7所示，能够分别在SiC MOSFET的开关过程中改变器件的栅极电流 ig、驱动电压 UG和驱动电阻Rg，从而抑制器件开关过程中的电流、电压过冲和振荡，下面分别进行描述。

2.1 电流注入型有源驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibDLpkicRKEYrTSJSxdbrwnxoF9hn0ayDNfvr19BI7O11O8cYey49jEvw/640?wx_fmt=png&from=appmsg)

图4所示为所提电流注入型有源驱动电路框图，通过电压采样电路检测器件的栅源极电压Ugs，使脉冲产生电路能够在器件开关的不同阶段内产生不同的控制信号，控制电流注入电路能够在器件开关的阶段二和阶段七内向器件栅极注入电路，从而减小器件栅极电流ig，抑制开关过程的电流、电压过冲和振荡。

2.2 变电压型有源驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibeMQvQ8tfKBhQJUxJXeHQwmiaDXLqG27StKPmLDahlbibWJicgIONuCwAA/640?wx_fmt=png&from=appmsg)

图 5 所示为所提变电压型有源驱动电路框图，其中，Ucc\=20 V，Ucc1\=5 V，Uee\=Uee1\=0 V，通过电压采样电路，使脉冲产生电路在不同的开关阶段中产生不同的触发信号，控制开关管 Q3和Q4的通断，以改变器件的开关过程的驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibOib3Hyk1QxQejKz4qh82CNtP9tgYsFicbDkGBbg799ZicBxPFiaasCKNEw/640?wx_fmt=png&from=appmsg)

图 6 所示为该有源驱动电路的不同工作状态，在器件开通过程非阶段二内，开关管 Q4导通，Q3关断，驱动电压为 20 V，阶段二内，开关管 Q4关断，Q3导通，此时，驱动电压由 20 V 降至 15 V，抑制器件开通过程的电流过冲。在器件关断过程非阶段七内，开关管 Q3导通，Q4关断，驱动电压为\-5 V，阶段七内，Q3关断，Q4导通，此时驱动电压上升至 0 V，抑制器件关断过程中的电压过冲和振荡。

2.3 变电阻型有源驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibJ8m6iblgvUyK7aiaLW3yhfHiarv1QASnenzJBu7bOlSP3WzIs4vVY9picg/640?wx_fmt=png&from=appmsg)

图 7 为所提变电阻型有源驱动电路框图，通过电压检测电路，使脉冲产生电路在开关过程的不同阶段产生不同的控制信号，调节器件的栅极驱动电阻。图8为该有源驱动电路的不同工作状态，在器件开关过程的阶段二和阶段七内，开关管Q3由导通状态转为关断状态，此时驱动电阻由Rg1单独驱动变为 Rg1和 Rg2串联驱动，驱动电阻阻值增加，从而抑制器件开关过程的电流、电压过冲和振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibhO9z0dljTkLANSMy8gk4RtEoXI48oSWqqnRtzJ9MQ351smfDic77Irw/640?wx_fmt=png&from=appmsg)

2.4 仿真验证

采用 LTspice 仿真软件分别对提出的三种有源驱动电路进行仿真验证，仿真结果如图 9 和图10 所示，从图 9 和图 10 可以看出，与传统驱动电路相比，所提的电流注入型、变电压型和变电阻型有源驱动电路均可以有效抑制器件开关过程中的电流、电压过冲和振荡。其中，与传统驱动电路相比，电流注入型有源驱动电路降低了16.2% 的电流过冲和 10.6% 的电压过冲，变电压有源驱动电路降低了 10.7% 的电流过冲和 9.6%的电压过冲，变电阻有源驱动电路降低了 25.9%的电流过冲和 15.9% 的电压过冲。可以看出，变电阻有源驱动电路对电流、电压过冲和振荡的抑制效果最明显，但是其对器件开关速度的影响也最大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvibue8kRhznxSQowBWLpCu8Xiamx1vFUuSLClSiaagJKaoXoHiaibu6FoHldQ/640?wx_fmt=png&from=appmsg)

3. 实验验证

根据图 5 所示的变电压型有源驱动电路，搭建实验平台进行实验验证，并与传统驱动电路进行对比，实验结果如图11和图12所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibEvhOuI0mKdrIiaMjXkcRAUY2L69pbianLEO4icAr86H6f9pIt8gUI6VUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibwG50UfsgIORq9w4IeQ7g11x7Sb3LhzBtsMlbQqZI08Te7seI0WuFlg/640?wx_fmt=png&from=appmsg)

从图 11和图 12可得，与传统驱动电路相比，所提出的变电压型有源驱动电路可以有效抑制器件开关过程中的电流、电压过冲和振荡，其中，开通电流过冲由 17.1 A 降低至 15.7 A，降低了约8.2%，振荡时间由 270 ns 降低至 60 ns，关断电压过冲由 530 V 下降至 490 V，降低了约 7.5%，振荡时间由 210 ns 降至 80 ns，与仿真结果相近，证明了所设计变电压有源驱动电路的实用性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibFtjvcMn2kOUdz285ibJicBR9jyvQWbiaaxrgOhbQdGpbO3LZT4n2e22ZQ/640?wx_fmt=png&from=appmsg)

图13为两种实验条件下器件的开关损耗，从图 13 可得，与传统驱动电路相比，所提出的变电压型有源驱动电路增加了16.6%的开关损耗。

4. 结论

本文首先对 SiC MOSFET 的开关过程进行详细分析，得出器件开关过程中电流、电压过冲和振荡的产生机理，并针对影响过冲和振荡的关键参数，分别提出了电流注入型、变电压型和变电阻型有源驱动电路，然后通过 LTspice 仿真软件验证了各有源驱动电路的有效性，最后对所提变电压型有源驱动电路进行实验验证。实验结果表明，与传统驱动电路相比，所提变电压型有源驱动电路能够在牺牲少量开关损耗的前提下，有效抑制器件开关过程中的电流、电压过冲和振荡。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)