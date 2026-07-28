# SiC 功率器件在家用空调上的研究与应用


> 原文地址: [https://mp.weixin.qq.com/s/D\_xHElk-BDNdPtnFN8Rmcw](https://mp.weixin.qq.com/s/D_xHElk-BDNdPtnFN8Rmcw)

**文章来源：2021年中国家用电器技术大会**

**作者：刘军，陈志强，周鹏宇**（珠海拓芯科技有限公司）

**摘要：**近年来,SiC半导体器件的出现显著提升了半导体器件的性能,这对电力电子半导体行业的发展意义非凡。SiC器件能实现高效化,小型化和轻量化,是半导体行业的发展趋势,也是家用空调未来发展的趋势。本文通过对比分析SiC材料和Si材料的特性差异,进一步对比SiC器件与Si器件的特性差异,在了解SiC器件显著的性能优势后,在空调外机控制器的PFC电路和IPM路上展开研究,因为SiC器件与Si器件的特性差异,在驱动电路设计时,不仅需要结合空调应用的实际场景,而且还要针对SiC器件固有的特性,设计专用驱动电路和电路的可靠性设计等。

本文完整的论述了SiC器件在家用空调外机控制器上的应用过程,包含器件性能分析,器件选型,驱动电路设计,电路可靠性设计,新SiC控制器与旧Si控制器的性能对比,输出一套小型且高效化的家用空调控制器产品,并展示研究成果。

**关键词：**家用空调，SiC 器件，小型化，可靠性设计

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXdD8j57H21epg6Fpk2N1pmQCZwVTbiaVPH9yCoJsgEjeMnK298ODXBDw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

**1.引言**

SiC功率器件具有的耐高压、耐高温、高频性、低阻抗、低损耗等特性，明显优于Si器件，随着SiC技术不断进步、工艺日益成熟以及规模快速扩大和经验积累，SiC 器件成本不断下降，良品率大幅上升，家电空调行业上的应用成为必然趋势。据资料显示：SiC器件的能量损耗是 Si 器件的 50% 左右，发热量是 Si 器件的50%左右，发热小则可以减小散热器的体积；SiC 器件体积可同比缩小，以智能功率模块 IPM 为例，在相同功率等级下，SiC 功率模块的体积显著小于 Si 功率模块，SiC 功率模块体积可缩小至 Si功率模块的 1/3～2/3。

空调控制器未来的发展趋势是小型化，轻量化，高效化，SiC 器件在家电空调行业同样具备广阔的应用前景。虽然SiC器件比Si器件在大多数特性上优势显著，但同时也存在一些缺点，比如SiC SBD抗浪涌电流较差、SiC MOSFET存在误导通等现象。本文根据SiC器件的特性，在空调外机控制器上设计新的 PFC驱动电路和IPM 电路，进行应用研究，研究方案：  

① 采用 SiC MOSFET 代替 Si IGBT，采用 SiC SBD 代替 Si FRD，采用 SiC IPM 代替Si IPM；  

②结合器件特性和实际空调的应用场景，设计出相关的驱动电路和保护电路并输出控制器。再针对 SiC 器件的新控制器和 Si 器件的旧控制器，在同样的实验环境下，测试效率、温升、EMC 等，对比分析数据，总结设计驱动电路、保护电路过程中的各个细节，以及呈现本次研究方案的成果，是本文所要重点阐述 的，其涉及内容面面俱到，具有可借鉴的价值。

**2.空调外机控制器设计**

**2.1 介绍SiC器件与Si器件的性能差异**

SiC 器件与 Si 器件对比分析，主要从材料性能、器件性能、系统性能等三个方面相比较（如下图 1 所示），SiC 材料具有禁带宽度大、饱和电子漂移速度高、存在高速二维电子气、击穿场强高等材料性能优势（如下表 1所示）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXbmCU4fRfPZ6JBgiaD54MBExmVGwcpIueLpiaMLY8ib4vgwWicFfYgpG4TQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXA0hARraxRj3ciaicQXxNuzfKqdhoVwgUf2sX7cqiakib5ibQWDLS4doZN0Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

SiC 材料比 Si 材料具有这些材料性能的优势，因此 SiC 器件与 Si 器件相比，SiC 器件具有耐高温特性、开关速度快、通态电阻低、耐高压等特性，进而使得 SiC器件对冷却系统要求低、辅配的电容电感体积可减小、能量损耗小、输出功率高，因为这些器件优越的性能，让整个控制器具有了小型、轻量、高能效、驱动能力强的系统优势。

**2.2 本次研究方案的思路及目标**

思路：本研究方案，以 1.5 匹变频外机控制器设计为例，主要是在外机控制器 PFC 电路和IPM 电路上开展，设计新电路，输出新控制器，即将原 PFC 升压电路中4个核心器件 Si IGBT、Si快恢复二极管、IGBT驱动芯片、PFC电感，替换成 SiC MOSFET、SiC肖特基二极管、MOSFET 驱动芯片、新PFC电感，验证功率器件损耗降低、控制器效率提升、控制器体积缩小（包括散热器、PCB、电感）的情况。IPM 电路上直接将 Si IPM更换成 SiC IPM，整体测试数据即可。

预期目标：器件损耗预计下降45%～60%，预计控制器转换效率预计提升 1.1%～2.5%；温升、EMC、驱动可靠性波形等各实验数据符合要求。

**2.3 SiC MOSFET与Si IGBT性能对比以及本方案SiC MOSFET选型**

Si 材料 IGBT 兼有MOSFET 的高输入阻抗和GTR的低导通压降两方面的优点。但是 IGBT 是通过控制MOS 管来控制 BJT 关断，需要进行电导率调制，因此开关频率不能达到很高，目前50KHZ 的开关频率已经是一个比较极限的值。IGBT 通过电导率调制，向漂移层内注入作为少数载流子的空穴，改变导通电阻阻值，但是正是由于少数载流子的积聚，在关断时，少子的复合需要时间，导致会产生尾电流，从而造成极大的开关损耗。

SiC MOSFET 由于材料特性，漂移层的阻抗比Si器件低，SiC 的绝缘击穿场强是Si 的10倍，所以能够以低阻抗、薄厚度的漂移层实现高耐压特性，且不需要进行电导率调制就能够以高频器件结构的MOSFET实现高耐压和低阻抗。表 2 是SiC MOSFET与Si IGBT基本参数对比，通过对比，我们选择罗姆 SCT3060AL做为本方案的研究器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE051D2JicAtdY64QxmFJ1IjDFq8BR02icyB0TUPMhBUa79dNsnrmsp7T5Iw/640?wx_fmt=png&from=appmsg)

**2.4 SiC MOSFET专用驱动芯片选型及其要求驱动芯片选型注意：**

（1）考虑驱动电流和散热情况，一般选选驱动电流大于 1.5A 的驱动芯片。

（2）SiC MOSFET的阈值电压相对于Si IGBT要低，且呈负温度特性。在实际应用中，阈值电压越低，越容易受到驱动回路噪声干扰导致误开关动作，因此为了避免 SiC MOSFET 误导通，使用带米勒钳位的驱动 IC。

（3）如果所选的驱动IC 欠压自锁电压 UVLO值太低则影响效率，需重点评估 UVLO 值这一参数。

表 3 中是驱动芯片对比，经过评估我们选择罗姆驱动芯片BM61S41RFV-C做为本方案的研究器件。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE05KhQ32tx3PoWuoBo1mQ4HmicUqslPXW50xlAUu7xWhxsbicAvVphDjGkw/640?wx_fmt=png&from=appmsg)

综合评估：

①因为开通和关断过程中，VGS会振荡，而驱动电压18V，英飞菱 1EDI20I12MF芯片VCC2 耐压最大20V，余量太小；罗姆 BM61S41RFV-C 耐压最大30V，符合要求。

② 1EDI20I12MF 驱动端 UVLO 保护电压11V，SiC MOSFET 在该电压点效率损失太多，保护功能基本无效。  

③电源芯片 4427 无钳位功能，综合评估选择 SiC MOSFET 的专用驱动芯片 BM61S41RFV-C 且此芯片具有米勒钳位功能。  

④驱动芯片 BM61S41RFV-C 输入结构，VCC1推荐使用范围 4.5V～5.5V，欠压自锁电压UVLO是4V（典型值），而提供的高电平是 5V，即能保证驱动芯片输入侧正常工作。VCC2 推荐使用范围16V～24V，欠压自锁电压 UVLO是 14.5V（典型值），而提供的高电平是18V，也能保证驱动芯片输出侧正常工作，如下图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE05bEY9PfAOkC5GgzAXPxvnXxcJdiajD2stVOjl3Sr3uibX2icBT242AJeag/640?wx_fmt=png&from=appmsg)

2.5 SiC SBD、SiC IPM的选型及其要求

目前广泛应用的半导体 Si 材料的肖特基势垒二极管（SBD），其超快的反向恢复时间和较小的正向导通压降的特点，非常适合在高频场合做开关器件。但是由于其耐压值通常在 300V 以下，限制了其在高压场合的应用。由第三代半导体材料SiC 材料制作的肖特基二极管，其耐压值可以达到1200V 以上。其反向恢复能力与 di/dt、导通电流和结温完全不相关，器件开关损耗会大大减小；SiC SBD 的反向漏电流整体比 Si FRD小，尤其是在高温条件下更为明显。

SiC 材料抗高温特性和频率特性，均优于目前的 Si材料肖特基二极管。因此在未来电力电子技术对高温、高压、高频的需求而言，SiC SBD 无疑是更加合适的，本研究方案选择罗姆 SiC SBD，即二极管SCS320AHG，SiC SBD 与 Si FRD参数对比如下表 4；SiC IPM 选择PSF15S92F6-A（三菱）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE05LFia0cmciaTYV9dXn8icApYEyPc6SfN86lu3f1ZiazExEUoZ3UibkMOljLg/640?wx_fmt=png&from=appmsg)

总结：从上表中可以明显看出，Si 材料的二极管正向浪涌电流值是190A，而 SiC 材料的二极管正向浪涌电流值是87A 和104A，SiC二极管抗浪涌能力要比 Si二极管要差。

**2.6 SiC MOSFET驱动电压、驱动频率、驱动电阻的设计**

**2.6.1 驱动电压设计**

SiC MOSFET 的漏源之间的导通电阻伴随栅源电压 VGS 增大而减小，且减小趋势明显，因此在实际使用中，获得更低的导通电阻以降低损耗，所以在不超过临界栅源电压前提下，尽可能使用更高的栅源驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE05vBZLr4xK9axz3viaYD3KkQlV76wicCJWskzZvHUC8TTotaCXD0HgyIPQ/640?wx_fmt=png&from=appmsg)

图3是所选器件SiC MOSFET（SCT3060AL）datasheet 中给出的器件输出 特性曲线，由于模块（SCT3060AL），栅源极电压最大值 VGS（max）为 22V，为既保证 SiC MOSFET 能充分导通，又防止因栅极氧化层过压击穿而损坏，VGS 的选择应该 4V～5V 的裕量，再因为 SiC 功率 MOSFET 的导通电阻随栅极电压的增加而下降，到18V 以后，导通电阻随温度的变化基本稳定，因此本文选择驱动开通电压为 +18V。

**2.6.2 驱动频率设计**

目前行业内外机控制器 PFC 电路的最高驱动频率是40KHZ，根据SiC MOSFET 的特性可选择60KHZ～80KHZ的开关频率，本方案选择80KHZ，原因如下：

（1）工作频率高，器件体积和重量可减小（如 PFC电感和电容、PCB 尺寸等）。

（2）随频率升高，EMI 可能会变差。

（3）随频率升高，效率降低，损耗升高，故频率也不能太高，如下图 4所示。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXV6a3qfmfEIVia6V6OecQy7jWVe3FGAc5XsrxhibADnq836icVo5c3fSLw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

**2.6.3 驱动电阻设计**

根据理论计算 ，选择电阻 RGon=10Ω，推导过程如下：

（1）由于驱动回路中不可避免的会存在杂散电感LG（SiC MOSFET 的栅极回路引线电感），高速开关过程中LG 会与 SiC MOSFET的栅源极间电容 CGS 和驱动电阻RG 发生RLC串联谐振（如下图 5 所 示），会引起 SiC MOSFET 的栅极与源极之间的电压 VGS 的振荡。因此驱动器设计过程中，栅极驱动输出端和开关管距离应尽可能小，以便减小 LG，且合理选择 RG 以降低 VGS的振荡，可以通过公式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE05zrPWO8Xkbz7KoOCLQHUibwTydOTf6Tly3RnAehGSgFGrpV2boJtbicHw/640?wx_fmt=png&from=appmsg)

选择合适的栅极驱动电阻值。

已知所选SiC MOSFET SCT3060AL中CGS=852pF，估算LG，参考精益外机的整个线路长度90mm，查询PCB 走线电感表格，得到LG=97.74nH（50mil宽），LG=106.59nH（30mil 宽）；代入计算得出：  

当按50mil宽，则LG=97.74nH，则 RG≥21.42Ω；  

当按30mil 宽，则LG=106.59nH，则 RG≥22.37Ω；

取平均值 RG≥21.89Ω，即线路总电阻 RG 需≥21.89Ω才能避免串联谐振；

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXztxTGbrk4zOJUF2VegSF9kp0j1fwlOl5gplB91S6TB3TM8qINspBag/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

（2）SiC MOSFET 栅源极驱动控制回路之间的电阻 Rtotal 主要由三部分组成，Rtotal=RGon+RDriverH+RGint。最小栅极电阻值受栅极驱动器最大输出电流 IOUT\_max 的限制，线路总电阻需满足公式：

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXnNuJyak6zngicLzph86fbPwxOIp4oicdicICtxqC7dtgZEibuIr2YibENAg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

对于所选的驱动芯片BM61S41RFV-C，IOUT\_max=4A，代入计算得出，线路上总电阻Rtotal\_min=18/4=4.5Ω（IOUT\_max=4A），即整个线路上电阻需≥4.5Ω；即需同时满足；

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNX2q7yjLrAyZErXSkKuCbHJRcHFWVukylaniaygGIrPZbXo0hwkxPkdicA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

其中：

RDriverH 为驱动高电平时的驱动器输出电阻（典型值0.67Ω，最小值0.3Ω，最大 1.5Ω）；

RGint 为 SiC MOSFET 集成的栅极电阻值12Ω；

RGon 为外加的驱动电阻；

将 RDriverH=0.3Ω 和 RGint=12Ω，代入 ① 和 ②，得出RGon≥9.59Ω，

故设计RGon≥9.59Ω；

实际工程应用中 RGon的选取原则为既要保证 SiC MOSFET开关速度，又要兼顾其开关时的电流电压尖峰和振荡等问题，通过实验寻求该阻值附近最优值，本研究方案中选择电阻RGon=10Ω。

**2.7 PFC电感设计**

目前空调行业 Si IGBT 开关频率最高40KHZ，因开关频率越高，损耗越大，本方案使用 SiC MOSFET 作为开关器件，因 SiC MOSFET 具有通态阻抗低、高频特性等，开关频率设定80KHZ，因此 PFC电感的电感量可以减少，电感尺寸和控制器尺寸均可以减小。

电感取值与纹波电流相关，保证电感取值让纹波电流在规定范围内，90°最大功率时纹波电流最大，因而只要评估在低电压 90°的电感取值即可，又因为一般 外机控制器一搬有限流功能，电流值有最大限值，按实际限值代入计算，以 1.5 匹变频外机为例，在电压160V～265V 内，最大电流限制不超过 8.8A，按如下电感公式实际取值 8.8A 代入计算：

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXPCz3gyVdNeYAcLDPu9ACG3ibkTMkjAKZWx64HTnOibEj4JnZGyMn0yPQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

开关频率 f：一般取60～80KHZ，本方案取 80KHZ  

输入电压 VLINE：如电压160V～265V

输出电压 VPFC：如 380V 或者其他电压值

纹波系数KP：如取0.3，0.4

本研究方案通过计算，设定 PFC电感感量值是200uH，过程见下表 5，下表 6。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXX45KNeUnGQKXwJJUbqR9tPjcB0TibEqzBWLiaZ5bNDgjc0FZIDCWibHYQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNX18yJoTBS43KsNoKAsmgtQVsBZT9QxVc3hkobPQvo5BoicyZibpjlwQyg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

**2.8　用SiC器件设计PFC驱动电路时，需注意的设计要求**

（1）主电路与驱动电路之间要考虑电气隔离；

（2）驱动电阻与 SiC MOS 的开通和关断速度、开关损耗、与栅极电压 VGS 在开关时的电压震荡、空调EMI 效果均有关系，需选择合适的驱动电阻，既要理论计算也要结合实际；

（3）驱动电压尽可能的大，在不超过电压限值，留有4～5V 余量，以便减小 导通损耗，SiC MOS 一般选18V左右；

（4）选择有较大峰值输出电流的驱动芯片，要求上升与下降时间参数都比较小，保证足够快的上升和下降速度，则驱动效果更加理想；

（5）设计负压关断或有源钳位电路，防止器件的误导通；

（6）为了减小驱动回路的寄生电感，布板时要使其尽量靠近被控器件。

**3\. SiC器件PFC电路可靠性设计**

**3.1 抗浪涌电流设计**

因为 SiC SBD 的抗浪涌冲击能力比硅的 Si FRD 要差很多，如本方案所选的 SiC SCS320AHG（Rohm），正向浪涌电流是104A，而成熟方案中 Si VS-E4TU2006FPN3（威 士）是190A，而在空调非正常工作中状态下，如负载短路或电压跌落时，PFC 输出电压低于输入电压，会产生较大的冲击电流，一般需要加旁路二极管，给电容提供充电路径，避免大电流直接流过升压二极管 SiC SBD，从而保护升压二极管和PFC电感，起到保护作用，如下图 6中 D3 所示。在开机瞬间，因加 PTC 电阻保护电路，开机瞬间的大电流，经过 PTC 电阻限流，不会有太大冲击电流，但开机之后，就会断开 PTC 电阻，因此在空调开启之后遇到负载短路或电压跌落时一般都加一个旁路二极管，若不加则需要实测，冲击电流有多大，再根据实际情况评估。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmU46nysGTOXfm2qgn8tE05NmlVO5Kd2gHktbSYibdffsmt9AK0FZRQB0AwQ2AmF6oLlficuh1SA7Gg/640?wx_fmt=png&from=appmsg)

**3.2 驱动电阻电路设计**

SiC MOSFET 的开启和关断会在栅极处产生电流电压尖峰和振荡，比如在关 断时，位移电流流经SiC MOSFET 的栅极和漏极的寄生电容，再流过SiC MOSFET栅源极电阻RG，可在其上产生一定的压降ΔVGS可能导致SiC MOSFET 意外开启，开启和关断速度越快，开启和关断所引起的 dv/dt 和 di/dt 就越高，就越容易误动作。SiC MOSFET 的开启和关断的快慢与驱动电阻相关，因此驱动电阻电路的设计也需要特别重视。

SiC MOSFET 的栅极阈值电压比 Si IGBT低，阈值电压越低，越容易受到驱动回路噪声干扰导致误开关动作，因此针对 SiC MOSFET，我们设计如下驱动电阻电路，如上图 6 所示，开启电阻通过 R23 和 R24 并联，关断时通过 R26 和R27并联再与D4二极管串联，这样设计可灵活调节电阻的阻值，且可以根据实际测试情况来调节。

**3.3 防栅极电压、电流震荡设计**

针对 SiC MOSFET 的开启和关断会在栅极处产生电流电压尖峰和振荡，可能引起 SiC MOSFET 栅极电压过高导致击穿或者引起栅极误导通的现象，本研究方案中，设计了两种保护方式，结合进行。

（1）增加的合适的栅源电容，增加了对位移电流的吸收能力，减少了电流的震荡，提高了器件工作的可靠性，如下图6 中 C102 电容。

（2）我们所选的驱动芯片有米勒钳位功能，能给位移电流提供从栅极到关断电位驱动口的低阻抗通路，可将栅极电压钳位在关断电压，从而较好地抑制尖峰电压，如下图 6 所示，将驱动芯片的 MC 网络端口与SiC MOSFET 的栅极相连接，当主芯片通过 PFC-IN 端口给驱动芯片关断的低电平信号时，驱动芯片 OUT 口输出低电平，延长小段时间后，MC端口呈现低电平，钳位住SiC MOSFET 栅极电压，避免栅极电压震荡引起误导通。如下图 7 是驱动芯片内部示意图，在关断时，通过内部比较器将栅极电压钳位住。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNX6hiat5VZrIHpLXM1o4EpMJOWKd69O5EtKvUNCxWW8BEE8mkj7qCb8WA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

**4.PCB 布板注意**

（1）驱动电路 PCB Layout 时，注意驱动芯片连接主芯片的信号线不要太长，不要跟功率线平行，与其他信号线可以间距大一点。

（2）驱动电路 PCB Layout 的时，要将驱动芯片尽可能靠近 SiC MOSFET，以减小回路中的杂散电感，且线宽可以稍微宽一点。

**5.研究成果展示**

下表 7～表 9，是成熟外机（Si 方案）与本研究新外机（SiC 方案）从效率、功率因素、温度、控制器尺寸、成本等各维度的实测数据对比表。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNX7hVPoojHqUeaxp87IDlNRJBjTtBg7KXvcqY5VT61pibVxvfgjrS3FRA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskhuYaLoWrITSib5rfGpveNXLpaIEdt6VGLwg2te5W8v3pHichn0BZvB75GOl1fTQ3SKJn9GGQRqibRA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

**6.结论**

本研究方案以 1.5 匹变频外机为例，通过 SiC器件的应用，阐述了Si 器件与 SiC 器件的差异，以及PFC驱动电路设计过程中需要注意的要点及可靠性设计的方法，本研究可借鉴设计出小型化、轻量化和高效化的控制器产品，通过对比测试 SiC器件控制器与 Si 器件控制器，得出研究成果如下：

（1）SiC器件损耗降低 46%，效率提升 1.14%，功率因素提升至 99.3%；

（2）温升数据对比：整体温升 SiC 器件比Si 器件较好，温升降低 5℃以上；

（3）电感尺寸下降 30%，成本下降 25%、PCB 尺寸和成本下降 5%、散热器尺寸和成本下降 4%，控制器小型化；

（4）SiC 器件空调的EMC 测试合格，驱动可靠性波形测试合格，运行稳定。

全SiC方案：【SiC MOS】+【SiC 二极管】+【SiC　IPM】，SiC 控制器效 率高、电感 / 散热器 /PCB 尺寸可减小、整个控制器小型化、轻量化、高效化，但现阶段成本相对较高。SiC 器件带来新的技术革命，在家电行业的应用技术将不断发展、不断成熟。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslt4Im3zet9ZmN2ba9gfquJHBTCdADHv18QiahAiaFlHTRlibob4tEaAibUuMT523iaOA0gUE9Ie19LHww/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslt4Im3zet9ZmN2ba9gfquJ58q3XFGUX82hld8uW530iacQXKNpBeEjcDyqyAJ68ibgibv0xjnicdqSqg/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslt4Im3zet9ZmN2ba9gfquJpYcXLicHZJX7Cqx7QH3IXZUrWCTAUdmbCKxDJIFcNufSXy7WutebaIA/640?wx_fmt=png&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)