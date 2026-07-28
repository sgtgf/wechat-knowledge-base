# 天津工业大学：抑制 SiC MOSFET 瞬态电压尖峰的改进驱动电路设计


> 原文地址: [https://mp.weixin.qq.com/s/yUgEYCNGjlB2XD-Qgk11Aw](https://mp.weixin.qq.com/s/yUgEYCNGjlB2XD-Qgk11Aw)

**文章来源：科技创新与应用**

**作者：**王文月 1，牛萍娟 2（1.天津工业大学 电气工程与自动化学院，天津 300000；2.天津工业大学 电子与信息工程学院，天津 300000）

**摘 要：**与硅器件相比，碳化硅金属氧化物半导体场效应管（SiC MOSFET）具有更高的开关频率与开关速度，使得传统驱动下 SiC MOSFET 受寄生参数影响电压尖峰问题更为严重。而现有抑制瞬态电压尖峰方法作用有限，往往会增加开关延时与开关损耗且控制程度复杂。因此文章结合有源箝位电路与注入栅极电流抑制电压尖峰的方法，提出了一种改进驱动电路。首先阐明 SiC MOSFET 瞬态电压尖峰产生原理。其次，在有源箝位电路与注入栅极电流抑制电压尖峰前提下，基于控制辅助三极管开通与关断，注入栅极电流思想，提出一种在栅源极增加三极管串联电容的改进驱动电路方法，并分析了其工作原理，给出了设计参数。最后，搭建了双脉冲测试平台，对抑制瞬态电压尖峰的改进驱动电路实用性及有效性进行了验证。

**关键词：**碳化硅金属氧化物半导体场效应管；电压尖峰；驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaGjDbONBnkY3YTFICBgcbY3OicWWVvHtoHKiaiab2bx4CYdFXGdrP1cWFQ/640?wx_fmt=png&from=appmsg)

近些年，随着电力电子技术的发展，航空、电动汽车、新能源发电及石油钻井等领域对电力电子变换器提出更高的要求，即实现高压、高频、高功率密度。因此以SiC MOSFET 为代表的宽禁带半导体器件因其高开关速度、高开关频率及高热导率等，受到人们广泛关注。然而随着 SiC MOSFET 开关频率及速度提高，电力电子变换器受电路中寄生参数影响加剧，关断瞬态电压尖峰更为严重。瞬态电压的尖峰不仅危及开关管的安全，也会降低电力电子变换器的功率密度，加剧电力电子变换器电磁干扰。目前现有抑制电压尖峰方法大多牺牲了开关速度，从而影响 SiC MOSFET 开关损耗及变换器效率等。

因此，本文在分析电压尖峰产生原理基础上，在注入栅极电流抑制电压尖峰前提下，提出了一种在栅源极增加有源箝位电路的改进驱动方法，改进后的驱动电路具有抑制尖峰效果好、开关损耗较小、控制方法简单特点。本文首先分析瞬态电压尖峰产生原理，其次分析了改进驱动电路工作原理，最后在双脉冲测试平台验证了该改进驱动电路的实用性。

**1\. SiC MOSFET 瞬态电压尖峰产生原理**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaOCdQ3eLkic5gLxzWHW5KeCmRlFhkYMdc7eg6sGOzYmyodUnFEX6kAIg/640?wx_fmt=png&from=appmsg)

为了分析 SiC MOSFET 瞬态电压尖峰产生原理，采用如图 1 所示测试电路，图中：Vdc直流母线电压，R 驱动电阻，C 支撑电容，L 负载电感，SiC MOSFET 及 SiC 二极管 D1，考虑 SiC MOSFET 关键寄生参数为：栅极驱动电阻 R1，栅极引脚封装电感 Lg，源极引脚封装电感 Ls，漏极引脚封装电感 Ld。为了方便分析，Lg、Ls与 Ld分别为SiC MOSFET 各引脚封装电感与相连接引线电感之和。与此同时，根据 SiC MOSFET 关断特性，将关断过程分为 4 个阶段，图 2 为关断过程示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaHmnCoMseawFePmd7SRIUbCfZG4l9yMZWaRYnNvAHg6hZZfZib8iaUbSw/640?wx_fmt=png&from=appmsg)

SiC MOSFET 关断过程，\[t0，t1\]阶段，驱动电压为低电平，输入电容通过驱动电阻 R 和源极电感 Ls放电，此过程漏极电流 id和漏源极电压 Vds基本不变，栅源极电压Vgs下降。

\[t1，t2\]阶段，漏极电流 id与栅源极电压 Vgs基本保持不变，漏源极电压 Vds一直上升至母线电压 Vdc。

\[t2，t3\]阶段，漏极电流 id下降，续流二极管 D1开始正向导通，负载电流从 SiC MOSFET 向续流二极管转移，栅源极电压 Vgs开始下降至开启电压 Vth，SiC MOSFET 开始关断，漏极电流 id降为 0，在此阶段由于电流变化率快，在回路寄生电感 Ls与 Ld上产生压降，这部分压降加在 SiC MOSFET 漏源极两端，产生电压尖峰。基于基尔霍夫电压定律可知，Vds（t）＋（Ls＋Ld）did（t）/dt=Vdc＋VD1（t）。忽略二极管正向导通电压，得出：Vds（t）\-Vdc\=-（Ls＋Ld）did（t）/dt，因此电压尖峰 Vp\=-（Ls＋Ld）did（t）/dt，其中 did（t）/dt 可以用式子 did（t）/dt≈iggfs/Cgs表示。

\[t3，t4\]阶段，栅源极电压 Vgs降至低电平，SiC MOSFET完全关断。

**2.  改进驱动电路工作原理**

由分析可知，抑制瞬态电压尖峰问题最传统的抑制方法是增加驱动电阻、增加缓冲电路和优化器件封装结构及功率回路寄生参数。增加驱动电阻，能够抑制 SiC MOSFET 尖峰问题，但同时会增加开关过程损耗。增加缓冲电路对关断电压尖峰有好的抑制效果，但由于缓冲电路存在无源器件会带来额外损耗。优化器件封装结构成本较高且一般耗时比较长，PCB 布局优化则需要考虑大量的因素。另一类主要是采用新型的驱动电路进行电压尖峰抑制，该方法往往成本较高、控制复杂、实现难度大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiag8Tcpx1oGzBy7HPEGK1PvTOxGjD980H2P8rDTXonBia0F3BTUfSlziaA/640?wx_fmt=png&from=appmsg)

综上所述，为了尽可能不影响 SiC MOSFET 开关速度、增大器件开关损耗。本文基于有源箝位电路与注入栅极电流抑制电压尖峰方法，提出一种在栅源极通过控制三极管开通与关断的辅助之路，注入栅极电流方法对瞬态电压进行了抑制。

该改进的驱动电路工作原理如图 3 所示：经过第 1节的分析可知，在 SiC MOSFET 关断过程（\[t2，t3\]阶段），可以通过减小 ig进而改变 did（t）/dt 来抑制开关过程电压的尖峰。因此可将注入栅极电流抑制电压尖峰与有源箝位电路结合，在 SiC MOSFET 器件关断电压尖峰产生的阶段对其进行抑制。首先有源箝位电路中分压检测电路根据栅源极获取的电压信号控制三极管 Q1开通与关断，Q1开通时，外接电源对电容充电，三极管 Q2开通之前控制时间由电容充电时间决定；Q2开通，外接电源对栅极电流进行注入，进而减小 ig，减小 did（t）/dt 进而抑制电压尖峰。Q1关断时，Q1控制 Q2也随之关断。此改进驱动方法无需产生单独控制脉冲，降低了电路控制复杂度。

**3.  实验分析**

为了对抑制瞬态电压尖峰的改进驱动电路有效性及实用性进行验证，搭建了双脉冲测试平台，其电路具体原理如图 1 所示，选用科瑞 C2M0080120D 型号 SiC MOSFET 和 C4D20120 型号 SiC 二极管。测试电路具体参数为：直流母线电压 Vdc\=400V、驱动电阻 R=10Ω、负载电感L=500uH、开关频率 100kHz。改进驱动电路如图 3 所示，具体设计参为：R2\=3kΩ，R3\=10kΩ，C =1nF，R4\=1Ω，R5=84.5kΩ，Vcc\=12V，R6\=6.3Ω。

图 4-图 6，分别给出了传统采用 RCD 抑制电压尖峰波形、典型设计驱动电路抑制电压尖峰波形及本文所提出的改进驱动电路抑制电压尖峰波形。从实验结果分析可知，本文提出的改进驱动电路与传统及典型的抑制电压尖峰方法相比，关断过程电压尖峰的抑制效果相当。但是采用RCD 吸收电路会使器件开关过程产生额外损耗，导致关断损耗增大。典型驱动电路通过控制 MOSFET 开通与关断的辅助之路完成栅极电流注入进而抑制了电压尖峰，该方法由于采用 MOSFET 控制元件，需单独控制信号。因此基于以上所述，本文通过对驱动电路改进，如表 1 所示，实现了对电压尖峰有效抑制，且采用改进控制三极管的辅助支路结构相对简单。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaTBcMp4Ybpjm6l5J5LkxN9ONOEkZwmLZHrwxX5yvBCGWvU97W9qia0jA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPia7O51y2YWC4jVsuG6WZ5JAhmengiaZw2icy2kBODOEicqibnAhhK7roP5dQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaLuWmUbxFD5QI8lHTg4ruH5mKgTh4jsHaJlLHjfC9p8PF0PqlS5Jvkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPia7ngh0uc2ylr8s0WMj4tbNt5PVWP115eTgJ7ml0yG2qjN73Adia2dzQA/640?wx_fmt=png&from=appmsg)

**4.  结束语**

本文所提出的改进驱动电路设计，将有源箝位电路与注入栅极电流抑制电压尖峰方法进行结合，通过箝位电路中分压检测电路检测栅源极电压信号控制三极管导通与关断，进而将电流注入到栅极，在牺牲较少损耗、无需产生单独控制信号的情况下，对电压尖峰进行有效抑制，最后，通过实验验证了该改进驱动电路的有效性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)