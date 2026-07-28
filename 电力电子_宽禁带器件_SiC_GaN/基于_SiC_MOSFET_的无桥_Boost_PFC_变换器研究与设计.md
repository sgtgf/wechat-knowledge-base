# 基于 SiC MOSFET 的无桥 Boost PFC 变换器研究与设计

原创 黎 晓 ,  马红波 SiC碳化硅MOS管及功率模块的应用 2025-11-24 08:23 广东

> 原文地址: [https://mp.weixin.qq.com/s/guj6XoP6DykgoWgcsAGWCA](https://mp.weixin.qq.com/s/guj6XoP6DykgoWgcsAGWCA)

文章来源：电工电能新技术

作者：黎晓, 马红波, 庞亮(西南交通大学电气工程学院, 四川 成都 611756)

摘要: 与传统 Boost PFC 变换器相比,无桥 Boost PFC 变换器减少了低频回路上二极管的数量,具有高效率和高功率密度的特点。 SiC MOSFET 作为一种新型的功率器件,具有开关频率高、温度特性好和导通损耗小的优点。 为使SiC MOSFET 安全可靠地工作,通过对SiC MOSFET 特性的分析,设计了SiC MOSFET 驱动电路。以此为基础,设计了一款90 ~ 265V 输入、1\. 5kW Dual-Boost 无桥 PFC原理样机。 实验结果证明了方案的合理性和先进性。

关键词: 无桥 PFC; SiC MOSFET; 驱动设计; 高效率

1.　引言

电力电子装置的广泛使用给电网注入了大量的谐波,造成了严重的谐波污染。 为此,不少国家和国际学术组织对电力电子装置制定了相应的谐波限制标准;国际能源短缺,节约能源,提高能源利用率显得日益紧迫。功率因数校正(Power Factor Correction, PFC)变换器可有效降低对电网的谐波污染,同时降低电网波动对后级变换器的影响。 因此, PFC正逐渐成为当今市场上各种 AC-DC 电源的必备功能。 其中 Boost PFC 变换器因拓扑简单、输入电流连续和驱动简单等优点被广泛使用。

在正、负半线周期内,传统有桥 Boost PFC 变换 器的整流桥中均有两个二极管处于工作状态。 二极管产生的反向恢复电流不仅造成二极管本身的损耗,同时也增大了开关管的损耗,特别是在低电压、大电流输入的场合,很难满足相关规定对于转换 效率和功率密度的要求。无桥 Boost PFC 变换器省去了桥式结构,通过减少工作电流路径上的半导体数量,来降低通态损耗,提升变换器的效率和功率 密度。文献\[6-11\] 提出了一系列的无桥拓扑结构,其中 Dual-Boost 无桥 PFC 变换器共模噪声小、效率高和驱动控制简单,在高功率等级应用上具有一定优势。 SiC MOSFET 相较于 Si MOSFET 具有更小的导通电阻,更高的开关速度,更小的开关损耗。 采 用 SiC MOSFET 代 替 Si MOSFET 作 为 变 换 器 的Boost 开关管,可进一步提高无桥 Boost PFC 变换器 的效率。

本文分析了 SiC MOSFET 的特性,设计了满足驱动要求的驱动电路,并对 Dual-Boost 无桥 PFC 电路的主功率部分及控制部分进行了设计。 制作了一 台 1\. 5kW 的实验样机,最后,对比了IEEE IFEC2016效率要求和 Si CoolMOS、 SiC MOSFET无桥PFC 原理样机实测效率。实验结果验证了SiC MOSFET在无桥 Boost PFC 电路中应用的可行性和优势。

2\. SiC MOSFET 介绍

2\. 1 SiC MOSFET 的性能优势

(1)更小的导通电阻 Rds\_on

相比传统的 Si 器件,SiC 器件具有更高掺杂浓度的薄漂移层。高压器件的电阻主要取决于漂移区的宽度。 这意味着,SiC 器件具有更低的导通电阻。导通损耗Pds\_on与流过开关管的电流有效值和导通电阻有关。 其值可表示为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzVVtqk0SZ6aYCUcUHbtlXJIOqicdkibkA2wial9UH5U4tG9eFtKHFms8ww/640?wx_fmt=png&from=appmsg)

式中,Irms为电流有效值;Rds\_on为导通电阻。

在 Irms保持不变的情况下,Pds\_on与 Rds\_on成正比。由此可知,SiC MOSFET 的导通损耗比 Si MOSFET的导通损耗小很多。 导通损耗小,在同等功率条件下可以减少散热器的体积。 

(2)更低的栅极电荷 Qg

在导通电阻相同的情况下,Si MOSFET 芯片尺寸约为SiC MOSFET 芯片尺寸的 35 倍。 芯片尺寸越小,栅极电荷 Qg 越小。这意味着,SiC MOSFET拥有更小的 Qg。 SiC MOSFET 导通栅极所需的电荷量越小,其可达到的开关频率越高。   

驱动损耗 Pdrv可表示为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzF8Lh4untsnibN5ricHXfV0Ds7s9KSIEQegic9HrHnHicsfA94nWm2icunkg/640?wx_fmt=png&from=appmsg)

式中,Vdrv为驱动电压;Qg 为栅极电荷;fsw为开关频率。

在驱动电压 Vdrv和开关频率 fsw相同的条件下,栅极电荷 Qg 越小,其驱动损耗越小。

(3)栅极电容、漏源极电容小 

开关损耗是由于 MOSFET 存在开关时间而产生的。 开关损耗 Psw的计算公式为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHza41zxAbXTbwxVdtEAZfUZEq7zAxtWhFkPt2nA8lvM8NIYEJahAC5sw/640?wx_fmt=png&from=appmsg)

式中,Psw(on)为开通损耗;Psw(off) 为关断损耗;uds为漏 源极电压;id 为漏极电流;ton为开通时间;toff为关断 时间。

与 Si MOSFET 相比,SiC MOSFET 栅极电容、漏源极电容较小,开关时电容充电、放电迅速,因此其开关损耗较小。

2\. 2 驱动特性

(1)驱动电压 

相比传统的 Si MOSFET,SiC MOSFET 具有更低的漂移层电阻,但较低的载流子迁移率意味着其沟道电阻更高。 当Si MOSFET 呈导通状态时, SiC MOSFET 还没有表现出低电阻状态,不能导通。 因此,需要选择合适的驱动芯片,为 SiC MOSFET 提供足够高的正向驱动电压,保证开关管可靠导通。 

(2)可靠性 

由于 SiC MOSFET 栅极电荷Qg 小,能有效提高开关频率。 但驱动速度过快,会导致开关管的电压和电流的变化率增大,从而产生较大的干扰。 特别是在关断过程中,由于 SiC MOSFET 的开启电压较低,开关管两端产生的栅极电压尖峰能使其误导通。 所以应对 SiC MOSFET 采取负压关断,增强其抗干扰能力。

3.　SiC MOSFET 驱动电路的设计

在设计驱动电路时应首先考虑驱动电压,对驱动损耗和驱动安全折中考虑,实际选择 SiC MOSFET的开通电压为 +15V,关断电压为 \- 5V。 驱动电源通过辅助电源模块获得。本文选用金升阳公司生产的F2405S-2WR2和F2415S-2WR2隔离电源模块,该电源模块输入电压均为 +24V,输出电压分别为+ 5V、 + 15V。

由于:①驱动电路主回路连接功率级电路,承受高电压大电流,控制电路易受到主回路的干扰;②驱动电路的参考地 PGND 与控制电路参考地\-VEE 存 在 5V 的电位差。 故 SiC MOSFET 驱动电路应具有良好的电气隔离性能,避免功率级电路对控制电路 的干扰。CREE 公司提供的一个经典SiC MOSFET光耦隔离驱动方案,采用光耦隔离芯片 ACPL-4800将控制电路和主回路隔离开,但该方案存在芯片数量较多,外围电路设计复杂,调试繁琐等缺点,限制了其进一步的发展和应用。

本文设计的驱动方案如图 1所示。 UCC21520是TI公司推出的具有隔离功能的双通道栅极驱动芯片。 其只能提供 4A 的峰值驱动电流,为增强其驱动能力,两个输出信号共同驱动一个SiC MOSFET,满足了SiC MOSFET 驱动电路的要求。 此方案设计成本低,结构简单,可靠性高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz7U4FTVZ90wfkGyPgNLSp7NtsBDWjj6uSqdZfv9fUgAia8aC8qKOPu6w/640?wx_fmt=png&from=appmsg)

4.　Dual-Boost 无桥 PFC 电路设计

基于SiC MOSFET,在实验室研制一款 1\. 5kW的 Dual-Boost 无桥 PFC 原理样机。 原理样机具体设计指标见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzvOuRJm5NaxgR9r2qU7dYsOkPyrNZ5QlQb1IZPAwuQSESvCbAialIJ1g/640?wx_fmt=png&from=appmsg)

4\. 1　主电路参数设计

4\. 1. 1　PFC 电感的设计

在最低线电压输入、满载输出的条件下,变换器获得最大的输入电流 Iin\_rms(max)为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzQMiaE2VV3cf3OHibLsZ9rV731fb1LhfFgj52va9MgDDKv7rstUpGFSYg/640?wx_fmt=png&from=appmsg)

式中,η 为效率;Po\_max为最大输出功率;vin\_min为最小输入线电压。 最大的输入电流峰值 Iin\_peak(max) 为有效值的 √2倍。

考虑到 30% 的纹波电流,则 Lb 应满足:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzZicmw4G52zElVAoNCY2mI0UoFKia83QKnBk0ibLrmlkITAk3RyqpeOesw/640?wx_fmt=png&from=appmsg)

式中,fs 为开关频率;Vo为输出电压;1% 为纹波电流。 实际选取 Lb 为 200μH。

4\. 1. 2　开关器件的设计

(1) SiC MOSFET

当 MOSFET 处于关断状态,漏源极承受的最大电压 Vds\_max等于输出电压 Vo \= 400V。 

SiC MOSFET 的最大有效电流值 IM(rms) 可由式(6)求得:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzF8wWm6cfBFLpAPibxC0icXj1DZEsUTStn7f2gc4lkzSwMbwFhN4eaTaw/640?wx_fmt=png&from=appmsg)

虑到每个SiC MOSFET 管都只工作半个线性周期,并且返回电流会流过 SiC MOSFET 的体二极管,故取实际电流为计算值的 0\. 75 倍。 实际选用CREE 公 司 生 产 的 型 号 为 C3M0065090D 的 SiC MOSFET。 

(2) 输出二极管 

每个二极管都只工作半个线性周期,故流过二极管的平均电流为输出电流的一半。 最大均值电流ID\_avg为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzRFnKjpExHuvCnFK92U2sH9GDGzfvaRMibicQ2Q1ibw0LAicXibUicINXbKqQ/640?wx_fmt=png&from=appmsg)

式中,Io 为输出电流。

实际选用Infineon公司生产的型号为IDH16G65C5 的SiC肖特基二极管。

4\. 1. 3 输出电容 Co 的设计

Co 的设计必须满足维持时间和输出电压工频纹波的要求。

在输入突然掉电的情况下,输出电压应在保持时间内维持在最小工作电压以上。 故输出电容最小电容值 Co\_min应满足:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzwmWNVNpPSib2kkDSOG6BQ4RoBg1rrQZFQ0mibibWHM2XEUnNLa4XE5icPQ/640?wx_fmt=png&from=appmsg)

式中,Vmin为最小工作电压;thold为保持时间。

考虑到输出电压工频纹波,则有:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHziaHyHMSiafpof5klR7bggFmEaO4n5ZULibgTlib79LJw1FwrwtH9bqD0Kw/640?wx_fmt=png&from=appmsg)

式中,ΔVo 为输出电压工频纹波。 取式(8)和式(9)的最大值作为输出电容的设计值。

流过输出滤波电容的有效电流值 Icap\_rms为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzuNmAW252iaZlKSu58eB8ODm6sX0RicTBwJQHdhZPeraDPvdyZ2kWFc5Q/640?wx_fmt=png&from=appmsg)

实际选用 3 个 450V/ 680μF 的电解电容并联组成输出滤波电容。

4\. 2　控制电路的设计

控制电路的控制芯片采用 TI 公司推出的UCC28180。 芯片主要应用于工作于 CCM 模式的Boost PFC 变换器。 可提供 18 ~ 250kHz 范围内可调的开关频率及最大达 96% 的占空比,同时提供过电流、过电压保护功能。

开关频率可通过改变芯片FREQ 引脚到GND引脚间的电阻RFREQ设定。 RFREQ的值由芯片内部参数 fTYP \= 65kHz,RINT \= 1MΩ,RTYP \= 32. 7kΩ 及开关频率决定。 设置开关频率 fs 为 65kHz,则 RFREQ为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz9aE0IHhJbR4oibS8w4wdgekjicWga3xemWdWPJMzCmN1OzDBUhk6PCPg/640?wx_fmt=png&from=appmsg)

实际取 RFREQ \= 33kΩ。

4\. 3　 电流采样的设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzkQq4WmkI1vTF3ZFGOibzZWfuTJpzmBoicB7Ic75KibzSicY4PdibFAQD4Ng/640?wx_fmt=png&from=appmsg)

相较于传统的无桥 Boost PFC 变换器, DualBoost无桥PFC 变换器没有一条固定的电流回路返回交流输入源,故不能简单地通过设置采样电阻实现输入电流 的检测。 基于电流互感器 ( Current Transformer, CT)的电流采样示意图如图 2 所示,本文采用 3个匝数比为 1∶ 200 的 CT,分别采集开关管S1 、S2 及输出二极管的电流,然后求和,实现输入电流的采样。

5.　实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzDSGn5W8PMQFHYyHfafNpUsGf8qXdcDicHibptwz6N6UEQFP6fud8kL7A/640?wx_fmt=png&from=appmsg)

基于 Dual-Boost 无桥 PFC 变换器拓扑研制了一 款 1\. 5kW 实验样机, 如图 3 所 示。 样 机 尺 寸 为164mm × 110mm × 85mm。 功率密度为 0\. 98W/ cm³。实验测得的最高效率为 98\. 8% ,功率因素值均大于0. 99。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzILYxabQYK4qMLozRMQkXMicstlsPgxDp1GN98eHJaMBPbeWCbTI4KTg/640?wx_fmt=png&from=appmsg)

图 4、图 5 为样机满载输出时,输入电压、输入电流、开关管驱动信号及输出电压的波形。 从测试 的波形中可以看出:

①输入电流能很好地跟随输入电压,保证了原理样机实现高功率因数。 

②线周期内,驱动电压值保持稳定,证明了驱动设计的合理 性。 

③输出电压 Vo 能准确地稳定在 400V,这与实验预期是一致的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzgNIgtiaibbicFPsj8oZZNXkuHUxDyaxdYDI37c3WSK04YqK0L5rkCEjmg/640?wx_fmt=png&from=appmsg)

图 6 为满载时输出电压工频纹波测试波形。从 通道 4 中的波形可以看出,最大的输出电压工频纹波 ΔVpp约为 8V,略高于设计值 5V,在实际操作中,可采取增大样机的输出滤波电容的方法进一步降低输出电压纹波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzQvBo0HCURdItKWqFSDib5J7mP5wdHk6hnibhXI8qceB0Fcq1jPGHVJQA/640?wx_fmt=png&from=appmsg)

当负载从10% 突然跳变到100% 时输出电压波形如图 7 所示。 从波形中可看出,当出现负载突加时,输出电压Vo最大跌落值约为 40V,同时只需约350ms 的调节时间就能恢复到稳态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz8r0MV2dCkl8m97IjOPMEsicT2ia33TiaYtWtz6S6sqz0MMkIC0kfWeexQ/640?wx_fmt=png&from=appmsg)

原理样机在不同电压输入和负载输出条件下的效率测试曲线如图 8 所示,并将 IEEE IFEC-2016 效 率要求和 Si CoolMOS、SiC MOSFET 无桥 PFC 原理 样机测试效率进行了对比分析。 进行实验对比的 Si CoolMOS 是现阶段性能较优的 Si MOSFET 的代表(IPW65R019C7)。 从图8中可以看出, 基于 SiCMOSFET 的原理样机在各个测试点的效率均高于传 统 Si MOSFET 的原理样机。

样机在不同输入电压和负载条件下的功率因数(Power Factor,PF)和电流谐波总畸变率(Total Harmonic Current Distorition, THDi)数据见表 2。  

从表 2中可以看出,样机在不同负载条件下均保持很高的 功率因数值,最低 PF 值大于 0\. 99,达到了设计要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzsbnBfCQQGhAADbK6UZBk3UlAss5DGE9JlO7sic4ZetNcCY2uBGibmr4Q/640?wx_fmt=png&from=appmsg)

6.　结论

针对SiC MOSFET 的特性,设计了具有隔离功能且经济性较高的 UCC21520 芯片驱动方案。 以此为基 础, 实 验 室 构 建 了 一 台 1\. 5kW、 效 率 高 达98. 8% 的 Dual-Boost 无桥 PFC 变换器原理样机。 实 验波形证明了所选方案的合理性和先进性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ILnqiaiabsaGgdiaUxSazXzMI3qcrW6Wy7U4cZ7ibKDkiccZ1fvUicDz2N9RQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ItLId8zqpJos4IMia2PBDvUSvia2o4X0HYlvKdoyUoLCvK4VO8bsbB3cw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=17)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8IbEgqKw0cRU4I17JSrkmjCMNDbeW4K5evEUknm4u1exbK2HqMs4KGnQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=18)