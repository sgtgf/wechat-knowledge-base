# 基于SiC MOSFET的交错并联Boost变换器电压尖峰抑制方法


> 原文地址: [https://mp.weixin.qq.com/s/nd5CIz-6Lm617E\_gUzaK8A](https://mp.weixin.qq.com/s/nd5CIz-6Lm617E_gUzaK8A)

**文章来源：**汉斯-电力与能源进展

**作者：**王朋辉1,2，付有良1,2，邹爱龙1,2，刘志鹏1,2，王永军1,2（1内燃机与动力系统全国重点实验室，山东-潍坊 ;2潍柴动力股份有限公司，山东-潍坊）

**摘 要:**大功率变换器的发展趋势是高频率、高效率和高功率密度。与传统的Si MOSFET相比，SiC MOSFET因具有开关速度快、开关损耗低、工作温度高等优点，得到了广泛的应用。然而，SiC MOSFET在高速关断过程中容易产生电压尖峰和振荡，严重威胁到功率变换器的可靠运行。针对这一问题，本文对SiC MOSFET关断过程进行详细分析后，分别针对影响关断电压尖峰的两种因素，提出了相应的抑制方法。为验证所提方法的有效性，搭建了试验平台。通过试验结果可知，所提出的方法可以有效抑制关断过程中产生的电压尖峰，而不会显著增加开关损耗。

**关键词:**交错并联，Boost变换器，电压尖峰抑制

**1\. 引言**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUSCvOQl5eyRicbRWGFF6GNoD0RmTRaRsadgz4pCibibXvyq9PuibCmJ7jHA/640?wx_fmt=png&from=appmsg)

如图 1 所示，交错并联 Boost 变换器作为一种非隔离大功率的 DC/DC 变换器，因具有输入电流纹波低、电压增益高等优点，被广泛应用于氢燃料电池车的功率转换。Boost 变换器作为氢燃料电池车驱动系统的主要部件，受汽车车身空间限制，对其功率密度要求较高。相比于传统的 Si MOSFET，SiC MOSFET因具有耐压水平高、温度稳定性好、工作频率高等特性，可以极大减小变换器主回路中电感、电容元件的体积，使变换器的功率密度得到成倍数的提高\[1\]。

将 SiC MOSFET 引入到交错并联 Boost 变换器中，在提高开关频率和运行效率的同时，还减小了变换器的体积和损耗，但 SiC MOSFET 极间寄生电容较小，开关速度快，导致其对电路中杂散电感十分敏感，在关断过程中会产生很大的 di/dt。同时，SiC MOSFET 作为单极型器件，在关断过程中不具有拖尾电流效应，极易产生较大的瞬时电压尖峰\[2\]。

为抑制 SiC MOSFET 关断时的电压尖峰，文献\[3\]提出一种电流注入型有源驱动电路，通过控制输入到栅极电流的大小来抑制电压尖峰，该方法在牺牲较少损耗的情况下能够有效抑制电压尖峰，但控制较为复杂、实现难度大；增加栅极电阻能够明显减小 SiC MOSFET 的尖峰和振荡，但是增大驱动电阻会增加开关损耗和驱动损耗\[4\]。

本文针对 SiC MOSFET 在关断时，电压尖峰产生的机理进行理论分析后，分别从减小 SiC MOSFET关断时的电流；降低 SiC MOSFET 的关断速度，提出了两种电压尖峰的抑制方法，并通过试验验证了所提方法的有效性。

**2\. 关断电压尖峰的机理分析**

在交错并联 Boost 变换器中，各相拓扑结构相同，只是开关管 Q 的导通时序不同，因此本文只对其中一相进行分析。为详细分析 SiC MOSFET 关断时，电压尖峰和振荡的形成机理，本文搭建了图 2 所示的 Boost 电路。其中，Vin 为直流母线输入电压，Vout 为直流母线输出电压，L 为储能电感，Rg 为驱动电阻，Q 为 SiC MOSFET，D 为 SiC Diode；电路中的主要寄生参数包括：SiC MOSFET 的栅源极间电容 Cgs、漏源极间电容 Cds、栅漏极间电容 Cgd、源极线路上的杂散电感 Ls 和漏极线路上的杂散电感 Ld，驱动回路杂散电感 Lg。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUkZOfia292smUltiahdY42Y6711hFkYm6nX6TQhEKVLDcaia9NuseV4EHA/640?wx_fmt=png&from=appmsg)

根据电压和电流的状态，SiC MOSFET 的关断过程分为 4 个阶段\[5\]，如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUyicv1nUvLPZQXesWyB8dqicH9NGpNLbxkrGsPbXD94gqgOjxyJMliaAMQ/640?wx_fmt=png&from=appmsg)

**2.1. 关断延时阶段(t0~t1)**

在 t0 时刻，驱动信号 Vpwm 由高电平变为低电平，输入电容 Ciss (Ciss = Cgs + Cgd)通过栅极驱动电阻 Rg、栅极杂散电感 Lg 和漏极杂散电感 Ls 进行放电。在该阶段，漏极电流 id 为恒定值，栅源极电压 Vgs逐渐下降至米勒电压 Vmiller，对回路列写 KVL 方程，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUcrR2yiaR0qSRdKLXVe1kXt0oE6QoyMHNhMMpIFtcgYro1OiaqUlYQWnA/640?wx_fmt=png&from=appmsg)

其中，Vgl 是驱动电压的低电平，栅极电流 ig 由式(2)计算得到。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUqn01JrniaMzAmXCGj1BPN1icFLzSibbQuDJKlUz8k22mRVHicdTWSqvusA/640?wx_fmt=png&from=appmsg)

**2.2. 关断延时阶段(t1~t2)**

在此阶段内，SiC MOSFET 的栅源极电压 Vgs 和漏极电流 id 保持不变，Vds 快速上升，直至达到 Vout。在此阶段，SiC MOSFET 完成线性区到饱和区的过渡。电压的变化率 dvds/dt 可由公式(3)计算得到。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUG3Ko1N0NDy1libEO5sdicOV4aWWzSibkJppjH5nPguldCPK3jxHGxPRlA/640?wx_fmt=png&from=appmsg)

**2.3. 电流下降阶段(t2~t3)**

在该阶段，漏极电流 id 开始下降，二极管 D 正向导通，负载电流从开关管 Q 向二极管 D 转移。栅源极电压 Vgs 继续下降，直至达到阈值电压 Vth，SiC MOSFET 关断，漏极电流 id 降为 0。

根据开关管 Q 的传输特性，该阶段漏极电流 id 的变化率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUmIa82wIDjjvAxam8XBddqmMf14bkMY6pPco0oEKwTNR6SfBXz36tuA/640?wx_fmt=png&from=appmsg)

其中，gm 是 SiC MOSFET 的跨导。

由式(1)、(2)和(4)可得，漏极电流 id 的变化率和驱动电压 Vgl 的关系式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUWia9fPH33TvyCJalBIHypKGr8sbbMCCmaPhDBhUKcz3MfUltZfZyYibQ/640?wx_fmt=png&from=appmsg)

此阶段，由于漏极电流 id 的快速变化，会在电路的杂散电感上产生压降，这部分电压叠加到 SiCMOSFET 的 D、S 之间，就会产生较大的电压尖峰。由于 di/dt 较高，寄生电感将产生较大的压降，从而导致设备 Vos 的电压过高。忽略二极管 D 的导压降，根据 KVL 可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUftXocuibdkfAwQEBREJ5icNbibbKpyxHzK62ibgUv9S6aegoicAJBNuvRhA/640?wx_fmt=png&from=appmsg)

其中，Lp 是回路中杂散电感的总和。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicURKSyYw916HVb9qYlCRTic4Za15zlzTicjTDWuMsuYb8hJuMtFqLAzO6w/640?wx_fmt=png&from=appmsg)

**2.4. 电流下降阶段(t3~t4)**

在此阶段，栅源极电压 Vgs 继续下降至 Vgl，SiC MOSFET 完全关断。Vds 因主回路中的阻尼形成衰减振荡，如式(8)所示。变化的漏源电压 Vds 作用在输出电容 Coss 上，漏极电流 id 在下降到零后同样会形成衰减振荡，如式(9)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicU2XuAHWpUvtuBBoEUErPj0bKlGQgKkJYboAgIiarwbNSHMwrXN9uR96g/640?wx_fmt=png&from=appmsg)

通过对关断过程的分析可知，电压尖峰发生在电流下降阶段，主要由该阶段的高 di/dt 引起。此外，电压尖峰过高也与关断速度 dV/dt 有关。因此，在抑制电压尖峰时可从这几个方面考虑：减小线路中的杂散电感；减小 SiC MOSFET 关断前的电流；降低 SiC MOSFET 的关断速度。

**3\. 电压尖峰抑制方法**

**3.1. 减小 SiC MOSFET 关断时的电流**

在工程应用中，减小 SiC MOSFET 关断时电流的方法有很多，如增加 RC 吸收电路、RCD 吸收电路、箝位式 RCD 吸收电路\[6\]。在这几种吸收电路中，RC 吸收电路器件数量较少、体积较小，基本不会影响PCB 板布局的紧凑性，同时与其它吸收电路相比产生的额外损耗也不会很大，因此 RC 吸收电路常用于减小 SiC MOSFET 关断时的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUcu8Tq351uzb6DFW7gNEOhf4WLfs4RWqMvicyv5SkheibspMVrZiaib9jFA/640?wx_fmt=png&from=appmsg)

如图 4 所示为增加 RC 吸收电路后的 Boost 变换器图，在开关管 Q 关断时，缓冲电容 C 吸收额外电荷，减缓电压上升速度；在开关管 Q 关断后，缓冲电容 C 可阻断寄生参数形成的谐振回路，抑制电压和电流的振荡。开关管 Q 导通时，缓冲电容 C 吸收的能量通过缓冲电阻 R 与开关管 Q 形成放电回路。缓冲电阻的使用，虽然减缓了开关管 Q 关断时电容 C 吸收电荷的速度，但在开关管 Q 导通时，能够增大开关器件的电流应力。因此在工程应用过程中，要根据实际工况对 R 和 C 的取值进行权衡\[7\]。

**3.2. 降低 SiC MOSFET 的关断速度**

在应用中，将开关管 Q 开关过程中的 dV/dt 控制在一定的限值是非常重要的，特别是对于开关速度快的 SiC 器件，可将电压尖峰控制在合理范围内。由公式(13)中各参数间的关系可知，增大 Rg 和 Cgd 都能够降低 dV/dt \[8\]。其中，对于 Si MOSFET 和 IGBT，增大驱动电阻 Rg 的阻值是降低 dV/dt 最常用的方法，但对于 SiC MOSFET，其对线路中的杂散电感较为敏感。当线路中杂散电感较大时，通过适当的增加栅极电阻的值，无法将 dV/dt 控制在合适的范围，若通过进一步增大 Rg 的值降低 dV/dt，Rg 较大的阻值会带来额外的损耗，降低系统效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicU0V69Gwicyn3kERFK0ibsvdc1S5FtyiaMJ7DVqvxPJDMRIVzgqvaMlr7Vw/640?wx_fmt=png&from=appmsg)

通过实际应用发现，如图 5 在 SiC MOSFET 的栅极和漏极之间并接外部电容 Cgdext 的方式，增大 Cgd的值可有效降低 SiC MOSFET 的开关速度，同时不会产生过多的损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUhzGPibPlNpaKMdMdqxnUtD3THJnBCkYO9GR8MMxAsrU5EVra1ctpWUg/640?wx_fmt=png&from=appmsg)

**4\. 试验验证及分析**

**4.1. RC 吸收电路的效果验证**

按照表 1 所示的试验参数，在输入电压 200 V，输出电压 400 V，输入电流 300 A 的工况下，分别对SiC MOSFET 的 DS 两端无 RC 吸收和并联 RC 吸收对电压尖峰的抑制效果进行验证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUib2icGkD3DNLWItT2zoicYrTTQRbxBhIlqkUZPr7vjK0s0JEsNsHzlPfA/640?wx_fmt=png&from=appmsg)

图 6 为 SiC MOSFET 的 DS 两端未并接 RC 吸收电路的试验结果，由试验结果可知此时 VDS 的尖峰电压为 588 V；图 7 为 SiC MOSFET 的 DS 两端并接 RC (R = 5 Ω、C = 1 nF)吸收电路的试验结果，从由试验结果可知此时 VDS 的尖峰电压为 498 V。由试验结果对比可知，RC 吸收电路能够很好的降低电压尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUNBDjkp3c39fpF029k7Q7FibPwHRicqPexibuMicRFr7KleGkocRia0uLicFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUvmvKlbglX3KHa8WLpQu5c3PC7nNXjTjnfeue0oibDicwtDRGKkLnbZDQ/640?wx_fmt=png&from=appmsg)

**4.2. 增大 Cgd的效果验证**

在 SiC MOSFET 的 DS 两端并接 RC 吸收电路的基础上，将输出电压增大到 600 V，发生 SiC MOSFET击穿。针对该工况存在的问题，通过截取图 8 所示的 SiC MOSFET 关断时的细节波形，发现 dV/dt 的值为 35.75 V/ns，经分析后确认为 dV/dt 过大导致。因此，在 dV/dt 过大时，单纯在 DS 两端并接 RC 吸收电路无法将 SiC MOSFET 的关断尖峰控制在安全范围内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUGDo89THFaDXjtB1tJCR1x1ChdxLs6YvCuFH1KKeibuCL62HwmV0NHeg/640?wx_fmt=png&from=appmsg)

为降低 SiC MOSFET 关断时的 dV/dt，在 DG 间并接 68 pF 容值的电容，由图 9 中的试验结果可知，此时 dV/dt 的值为 18.75 V/ns，与图 8 中的测试结果相比，dV/dt 的值有了明显降低，且尖峰电压 VDS 也由746 V 降为 704 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUpEx8NpBaqLb3LxBzLHwr1eRMTX3wxXTtwWAMZcQ4uGnmiaKJicibEVeSA/640?wx_fmt=png&from=appmsg)

通过上述试验验证发现，在 dV/dt 较小时在 SiC MOSFET 的 DS 间并接 RC 吸收电路，能够有效降低DS 间的电压尖峰，若 dV/dt 过大时，单纯通过调节 RC 吸收电路的参数无法有效降低 DS 间的电压尖峰。此时，就要先采用在 DG 间并接电容的方法，将 dV/dt 控制在合适的范围，然后再调节 RC 参数。

**5\. 结论**

本文针对 SiC MOSFET 关断过程中出现的电压尖峰和振荡问题，对 SiC MOSFET 关断时电压尖峰和振荡的产生机理进行了分析，给出了影响电压尖峰和振荡的三种主要因素。针对这些主要因素，分别提出了相应的抑制方法，最后通过搭建仿真模型和试验平台，验证了所提方法对抑制电压尖峰和振荡的有效性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUZ63lKldU3Wr9BzDv0yM5ibm63ibwGtGC8UiaTDp7dmAPeiaWuCdf7x5UCA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmOfSXsqpvNKGPAfO0ajHicUZsy3aV75juXrOAptzzqOLTMMGxIvReRJH5TjMpb0icSgRWu4nQVlVuA/640?wx_fmt=png&from=appmsg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)