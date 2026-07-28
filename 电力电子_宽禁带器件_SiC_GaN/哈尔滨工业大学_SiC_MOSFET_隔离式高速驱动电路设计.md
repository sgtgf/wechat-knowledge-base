# 哈尔滨工业大学：SiC MOSFET 隔离式高速驱动电路设计


> 原文地址: [https://mp.weixin.qq.com/s/23jT2j00mpAlhJpUe1A6Wg](https://mp.weixin.qq.com/s/23jT2j00mpAlhJpUe1A6Wg)

文章来源：中国科技论文在线

作者：李刚，高强，金淼鑫，李晓璐（哈尔滨工业大学电气学院，哈尔滨 150006）

摘要：近年来随着宽禁带器件的逐步商业化，其市场占有率迅速攀升。为了充分体现 SiC 器件的优势，本文以高温石油井下参数测量系统为背景，首先分析了 SiC MOSFET 开关过程，并总结了驱动要求。在此基础上设计了基于分立器件的 SiC MOSFET 高速隔离驱动电路，并搭建了双脉冲测试平台，对所设计的驱动电路性能进行了测试和验证，对 200℃环境下的高温驱动电路设计具有重要借鉴意义。 

关键词：SiC MOSFET；分立器件；高速隔离；驱动电路

0\. 引言

电力电子技术的发展极大地促进了工业发展，而电力电子器件制造技术又是电力电子技术的基础，从第一代的晶闸管到现在普遍使用的 Si 基全控半导体器件，每次新器件的问世都能催生出一批新的拓扑和相应的控制方式。但是随着电力电子技术要求的不断提高和应用 范围的不断扩大，硅器件已经不能满足一些高温、高压和高功率密度场合的需求，宽禁带器件的出现将逐步替代硅器件，而 SiC 器件以其良好的高温、高压、高频和通态电阻小等性能，成为最具潜力的新一代器件。

本文以 SiC MOSFET 为功率开关器件，结合高温石油井下潜油电泵供电要求，提出基于离散器件的驱动电路，工作频率可达上 200KHz 的隔离驱动电路，并设计了双脉冲实验， 对 SiC MOSFET 的开关时间、开关损耗等动态性能进行了测试，并对实验结果进行了详细分析。

1 . SiC MOSFET 开关过程

目前商品化的 SiC MOSFET 器件特性与同等级的 Si MOSFET 相比具有如下特点：1）驱动电压高，一般取为-5V/18V；2）栅极阈值电压低，且温度系数小；3）输入电容小，开通时间短，因此在高频场合优点突出。

SiC MOSFET 仍属于压控型器件，所需要的静态驱动电流很小。由于寄生电容的存在，开通过程就是寄生电容充电过程；相反，关断过程就是寄生电容的放电过程。在感性负载下的开关过程如图 1 所示，以开通过程为例，该过程可以分为：延时阶段、电流上升阶段、米勒阶段和过驱动四个阶段。关断过程与开通过程基本相同，只是时间顺序相反。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gQ0WibHqwGwApxVhMvkgeuHa6pq3597kKxX5gSJ6Vy0pwhGdUghyrHDw/640?wx_fmt=png&from=appmsg)

通过对 SiC MOSFET 器件特性和开关过程的分析可知，工作在高频的 SiC MOSFET 驱动电路必须具备以下特点： 

(1) 驱动电压波形的上升沿和下降沿要足够陡，从而增大开关速度，减小开关损耗；

(2) 驱动电路要提供足够大的瞬时电流，缩短输入电容充电时间；

(3) 驱动回路阻抗要适宜，回路阻抗太小容易造成驱动回路谐振，可能造成误导通或通态电阻较大，回路阻抗太大会减缓输入电容充电时间，延长开关速度，增加开关损耗；  

(4) 栅极驱动电压要合理，栅极驱动电压越高，感应导电沟道越大，则通态电阻越小，从而减小通态损耗；但栅极驱动电压太大时，较小的谐振引发的电压波动可能击穿栅极氧化层，造成器件永久失效；

(5) 驱动电路还要能够提供负压关断，防止器件误导通，同时也加速了关断过程；

(6) 驱动电路要紧靠被驱动器件，减小寄生参数对驱动电路性能的影响。 

目前商业化的 SiC MOSFET 多用于新能源发电、电动汽车、飞机、高温石油井和武器等系统。由于其具有良好的耐高温性能，因此可以通过减小或者省去冷却系统，从而提高设备的功率密度。这也要求驱动电路必须具备的同样的耐高温性能，传统的硅集成电路性能随着温度升高而迅速降低，因此考虑使用分立的半导体器件设计具有高温应用潜力的驱动电路。 

2\.  驱动电路设计

首先选择驱动电压，在安全驱动的前提下尽可能地减小通态电阻，折中考虑选择开通电压为 18V，关断电压为-5V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723g2vQibQk1B6c3HuWFTgicmEmsq0wwBwYP9nV5GpPuibZicKMN8WibYUmTlKg/640?wx_fmt=png&from=appmsg)

基于分立器件的 SiC MOSFET 高速驱动电路如图 2 所示。其中，脉冲变压器 T 只传递驱动信号，驱动功率由电源 VCC2 和 VSS2 提供，因此变压器功耗很小。脉冲变压器 T 除了隔离功能外还有变压功能，将±5V 的双极性脉冲信号转换为±10V 的脉冲信号。三极管 Q1和 Q2 构成推挽输出，对脉冲变压器输出的驱动电压进行电流放大。推挽输出供电电压为VCC1=10V，VSS1=-10V，电阻 R1 用于限流，防止三极管输出电流过大而永久失效。此时推挽输出驱动脉冲电流较大，但电压上升沿和下降沿电压变化率较小，这是脉冲变压器输出驱动信号上升沿和下降沿缓慢，而推挽输出电压被其钳位的结果。因此采用 Q3 和 Q4 构成的图腾柱对输出电压进行整形，Q3 和 Q4 输入电容很小，而推挽输出电流较大，因此能够将 Q3 和 Q4 快速开通或关断，使得图腾柱输出电压上升沿和下降沿电压变化率很大。图腾柱供电电压为 VCC2=19V，VSS2=-5V，R3 是栅极外加驱动电阻。

当驱动信号为高电平时，Q1 和 Q3 导通，VCC2 经过电阻 R3 和二极管 D1 给输入电容充电，稳态时栅源电压 Vgs=VCC2-VD1，大约为 18V。当驱动信号为低电平时，Q2、Q4 和Q5 导通，输入电容通过三极管 Q5 快速放电，稳态时栅源电压 Vgs=VSS2。稳压管 D2 和D3 对栅极电压进行限制，防止驱动回路谐振或电源电压波动产生的电压尖峰击穿栅极氧化层，造成永久失效。D2 稳压值为 20V，D3 稳压值为 5.1V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723ggOSRFRZ8b0rIhsHylDXsdHe1FQzUczwKDbU9eLu40CUXALL3XRY1ibg/640?wx_fmt=png&from=appmsg)

本文提出的基于分立器件的驱动电路需要 4 路电压源供电，但可以通过如图 3 所示的电路将 1 路电源转换为两路共地的正负电源，从而减少了供电电源数量，因此本文提出的驱动电路实际上只需要两路电源。

3\.  双脉冲测试电路设计

双脉冲测试是一种测试功率器件性能、驱动电路特性的测试方法，通过该方法可以较为精确的量化器件在应用中的实际特性，计算开关损耗，评价驱动电路性能，为保护电路设计提供参考。双脉冲测试已经发展为工业界公认的测试方法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gz7B0pGbITIibgKmwBibztzgM1DxGVpRVzDy0iciczV5OSOvWK4AauuGqaA/640?wx_fmt=png&from=appmsg)

为了验证所设计驱动电路的性能，本文设计了双脉冲测试电路，图 4 为其原理图，由直流电压源、电感、二极管、采样电阻、被测器件和驱动电路构成。驱动脉冲为两个连续的窄脉冲，第一个脉冲用于电感储能，建立电流，第一个脉冲的下降沿用于测试器件关断特性；第二个脉冲的上升沿用于测试器件的开通特性。二极管的作用是在 SiC MOSFET 关断器件为电感提供续流通路，采样电阻用于漏极电流采样。 

4 . 实验结果与分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gvrvWLka7esPsqqBibu4EpVgSKpTvE8H9SgibjIc2odHfxocDTRebYVQw/640?wx_fmt=png&from=appmsg)

双脉冲测试系统实物如图 5 所示，调压器、二极管整流器和滤波电容组构成图 4 中的直流电压源，通过调节调压器可以控制电源电压，整流二极管型号为 IR 公司的 HFA16TA60C 600V/8A。自制电感感量为 950uH，续流二极管采用 Cree 公司的 C3D10060A 600V/10A，采样电阻为 0.1 欧姆，功率为 3W，被测 SiC MOSFET 为 ST 公司的 SCT30N120 1200V/45A。DSP2812 产生驱动脉冲信号，第一个高电平维持 42us，间隔 2us 后，第二个高电平维持 2us，再间隔 1s 后重复上述信号，该信号经本文提出的驱动电路放大后驱动 SiC MOSFET（ST 公司的 SCT20N120 1200V/20A）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gayqDg0xus2T1cWpVrHnz1OBHOhsV0baSicxRDq0M5lQicnjB5Txk8eYQ/640?wx_fmt=png&from=appmsg)

由于 SCT20N120 栅极寄生电阻为 7Ω，为了获得较好的驱动特性，栅极外接电阻为 5Ω。DSP 输出驱动信号和驱动电路输出驱动电压如图 6 所示，从图中可以看出驱动电路的输出信号比输入信号有一些延迟，这是由推挽电路中的三极管和图腾柱中的 MOSFET 开通关断所致，但延迟很短（纳秒级别），基本可以忽略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gpEuxVyVLoC33XPia8ppoueQIkcg8pVJxcIZMcdibMlEiaoyyLoANeptsQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET 开通过程中驱动电压 Vgs，驱动电流 Ig，漏源电压 Vds 和漏极电流 Id 的波形如图 7 所示，Vgs 从 10%上升到 90%用时 92ns，驱动电流 Ig 有微小波动。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723g98WCzBRypcYZBSM9scvtK3iaibr9TYhUWmhvvcYEs6ZibW8hBzUuh1nMA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 关断过程中各物理量的波形如图 8 所示，Vgs 从 90%下降到 10%用时 79ns，这是由于开通回路和关断回路不同，关断时 Q5 将栅极和源极短路，驱动回路阻抗很小，输入电容快速放电，所以关断时间要比开通时间短。

5\.  结论

本文设计了以一种基于分立器件的 SiC MOSFET 隔离式高速驱动电路，采用双脉冲测试验证了开通速度为 92ns，关断速度为 79ns，而且具有应用潜力。若将驱动电路中的分立器件换成耐高温器件，则可以应用于高温油井、电动汽车、飞机和武器等高温系统。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)