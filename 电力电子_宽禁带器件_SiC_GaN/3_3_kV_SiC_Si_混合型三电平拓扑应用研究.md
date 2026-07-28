# 3.3 kV SiC/Si 混合型三电平拓扑应用研究

原创 张逸淳， 刘海涛 SiC碳化硅MOS管及功率模块的应用 2025-05-08 16:19 广东

> 原文地址: [https://mp.weixin.qq.com/s/o1pbwPmvBlXZMUZ9ZWTfxw](https://mp.weixin.qq.com/s/o1pbwPmvBlXZMUZ9ZWTfxw)

文章来源：电力电子技术

作者：张逸淳， 刘海涛，王嘉义， 傅航杰（中车株洲电力机车研究所有限公司袁 湖南 株洲 412000）

摘要：本文主要探讨了大功率三电平应用中 3.3 kV SiC MOSFET 和 IGBT 的混合应用问题，针对外管高频、内管低频的调制策略中不同箝位管脉冲时序对三电平有源中点箝位（ANPC）拓扑换流路径、开关损耗以及开关特性等关键因素的影响开展分析，实验验证了不同箝位管脉冲时序对 SiC MOSFET 和 IGBT 的动态特性和开关损耗的影响。

关键词：箝位管； 有源中点箝位； 脉冲时序

1\. 引 言

SiC MOSFET模块由于其低开关损耗特性、较快的开关速度、高耐压、高温稳定性的特点 ， 在高压大功率变流器领域具有显著优势， 然而由于其成本和可靠性问题，目前主流产品仍以 IGBT应用为主。 随着三电平拓扑和SiC应用技术在轨道交通领域逐渐受到更多关注，在兼顾成本和高频、高功率密度设计要求的同时，使得 SiC 和 Si混合应用具有较好的发展前景。

在 ANPC 拓扑中由于箝位管的存在，使得调制策略存在更多自由度，而目前最为常见的两种调制策略分别为内管低频、外管和箝位管高频的PWM1 策略和内管高频、箝位管和外管低频的PWM2 策略。 PWM1 策略由于其所有开关切换都是最小换流路径的特性，在高压大功率应用中更为常见， 因此本文以 PWM1 策略的 ANPC 拓扑在混合 SiC 应用中的问题开展研究。

SiC MOSFET 和 IGBT 的开关特性存在较大差异，上述两种器件混合应用时其各自的开关过程将会相互影响。而通常在混合 SiC 应用中 SiC 的开关损耗占主导部分，因此会对 SiC MOSFET 的开关损耗造成较大影响，影响整体效率和性能。3.3 kV Si IGBT 模块中二极管芯片存在较为显著的反向恢复过程，在特殊的换流路径中，会导致SiC MOSFET 芯片开通过程中叠加 IGBT 反向恢复电流。因此，在混合 SiC 应用中需要针对 Si 与 SiC的切换过程进行分析。

2\. 原理与设计

ANPC三电平拓扑比二极管中点箝位型（NPC）三电平拓扑多两个箝位管开关器件，使得 ANPC拓扑的调制策略有更多种可能性。在 NPC 拓扑中，为了解决内管和外管的均压问题，通常会采取在两个箝位二极管两端并联电阻，如图 1a 中的 Ra所示。 均压的效果取决于电阻的阻值，阻值越小均压效果越好，但会增加变流器系统的整体损耗。 在ANPC拓扑中能够通过箝位管的主动开关解决该问题，而箝位管开关的时刻不同将会导致换流路径的变化，影响开关器件的关断过电压。 在进行驱动电阻配置时，通常会考虑过电压对器件可靠性的影响，从而进一步影响变流器整体损耗。 因此，需要对不同箝位管调制策略下的换流路径开展分析。

2.1 换流分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbx6gQz1B4SsSPUO8icpneYZGkppBPPpxhiaKKVlT5ia5TsB1e1aqTGC6dBg/640?wx_fmt=png&from=appmsg)

图 1a 为混合 SiC 三电平 ANPC 拓扑图，外管V1 和箝位管 V5 采用 SiC MOSFET，内管 V2 采用 Si IGBT。其中上半桥臂中 V1 和 V5 为 3300 V/750A的 SiC MOSFET 半桥模块，V2 为 3300 V/1000A的 IGBT 模块，下半桥臂与之类似。图 1b 为 PWM1策略下 ANPC 拓扑的基本工作原理。当调制波 um>0 时，V2 常开，V3，V4，V6 关断，V1 和 V5 互补开关，当 um<0 时，与之相反。 当采用这种调制策略时，箝位管不能实现主动箝位的作用，仍然需要均压电阻 Rs 实现内外管均压。

考虑到箝位管的时序逻辑对换流路径的影响，其开关逻辑为：①不进行主动箝位，即当 um>0时，V6 始终关断；②当 um>0 时，V6 常开；③当 um>0时，V6 与 V1 同时开通、关断；④当 um>0 时，V6 晚于V1 开通，提前于 V1 关断。图 2 为箝位管脉冲时序。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxWiaKKSDHtP5Wgo6S0dQ29mwkqUpshYIibKiaT09snrvWN2gSxXvKBfZXQ/640?wx_fmt=png&from=appmsg)

输出电流大于零且 um>0 时， 4种方案的分析结果如下。 图 3 为方案 2 的换流过程。

方案 1   当输出状态从 P 状态切换为 O+ 状态时，V1 关断,V2 保持开通，电流从流过 V1/V2 切换至 VD5/V2。当输出状态从 O+状态切换至 P 状态时，V1 开通，V2 保持开通，电流从 VD5/V2 切换至V1/V2，此时 VD5 发生反向恢复。该方案下只有 V1和 VD5 之间发生换流。

方案 2   当输出状态从 P 状态切换为 O+ 状态时，V1 关断，V2 和 V6 保持开通，电流从流过 V1/V2 切换至 VD5/V2 和 V6/VD3。当输出状态从 O+状态切换至 P 状态时，V1 开通，V2 和 V6 保持开通，电流从 VD5/V2 和 V6/VD3 切换至 V1/V2，此时 VD5和 VD3 发生反向恢复。 该方案下 V1，VD5 和 VD3 之间发生换流，如图 3 所示。 由于换流过程中 VD5 和VD3 同时存在反向恢复，因此 VD5 和 VD3 的反向恢复电流之和会叠加至 V1 的开通过程，从而导致V1 的开通损耗增大。

方案 3 和方案 4 的换流过程与方案 1 类似，因此不再赘述。方案 4 中 V6 与 V1 的开关时序相差的时间至少要大于 V1 的最小脉宽，以保证 V6开通时 V1 与 VD5 已经完成电流切换。在方案 4 的V6 关断后，V3，V4 之间 的电位未达到新的平衡状态，若此时关断 V1 会引起 V1 的关断电压产生振荡。输出电流小于零且 um<0 时，4 种方案的 P 状态和 O+状态的电流切换都是发生在 VD1 和 V5 之间，SiC MOSFET 的开关损耗不会受到影响。此外，调制波 um<0 与 um>0 的换流分析过程类似。

2.2 损耗计算

由第 2.1 节中分析可知，方案 2 会在输出电流大于零且 um>0 和输出电流小于零且 um<0 的工况下增加 SiC MOSFET 的开通损耗。考虑以上情况，混合 SiC 三电平拓扑的损耗计算如下。

假设输出电流和调制波为 ：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxMbbucRuftjibJLD2vsGhqMf2lJy174q7dp62Pec1XhZtZ5wgia1ghC2g/640?wx_fmt=png&from=appmsg)

式中：Um 和 Im 分别为交流输出的调制波峰值和电流峰值。

V1 和 VD1 的损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxVgUvjHKW8AhJdMcZiaUj5cpq6oJRr0DqwDliaBL36nOmN4RKERibjeuEg/640?wx_fmt=png&from=appmsg)

式中：Eon，Eoff，uce 为与 V1 电流和结温相关的多元函数；Erec和 uf 为与 VD1 电流和结温相关的多元函数；iV1 和 iVD1 为与ua 和 ia 相关的多元函数。

V2 和 VD2 的损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxTLyicoiaeBdD03W7hicbOicSOEvA93rm6lfficrhStqdHZ5MUpgT8aeoYzA/640?wx_fmt=png&from=appmsg)

V2 和 VD2 的损耗主要由导通损耗组成。V5 和VD5 的损耗计算与 V1 和 VD1 类似。结合式（2），（3）可知，不同方案对损耗的影响主要集中 在 V1的导通损耗 Eon 和 V2，V5 的导通损耗，且受到输出电流和调制波等因素的影响。

3\. 实 验

通过第 2 节中的分析可知，箝位管的逻辑不同主要对外管的开关过程有影响，因此本文对不同箝位管逻辑下的外管开关特性进行测试。由于V1 测试过程中 SiC 器件的高开关速度引起的共模干扰过大，因此在实验中选取 V4 为测试对象。为了避免上半电容充电从而影响测试结果，实验过程中将正母排与上半电容断开进行测试。

图 4 为方案 2 的双脉冲测试波形。可见，当 V4关断后，V5 和 V6 处于并联状态。当 V4 再次开通时，VD6 和 VD2 同时发生反向恢复（图中虚线圈所示）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxM625vB4PHzAseN7rArSsicPXlJDOEG1byINczQAatsTQfGsjZEPQJ1g/640?wx_fmt=png&from=appmsg)

图 5 为方案 4 的 V4 关断过程波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxwibGPrvicmLc7yxhYEolPytFIQ2wASPY8K7lEr9gCEAyDCWgyCtFaTwA/640?wx_fmt=png&from=appmsg)

当 V4 关断后，V4 的漏源极电压上升至直流电容电压时其电压产生振荡现象。

图 6 和图 7 分别为不同方案的过电压和损耗特性，方案 4 关断过电压最大，方案 1 和方案 3 接近。方案 2 由于 O+状态处于并联，等效换流的电流仅有其他方案的一半，关断过电压最小。方案 1，3，4 的开通损耗基本接近，方案 2 的开通损耗是其他方案的 2 倍左右。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxQ0JPychFJ87mpJUTa0z3J5ibU8OibeBXuHBOtU0AEC9riaMiaHVRiaYFufg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxGR0NSxSmwkOsRjGSFC0exyJBaVvqAicI5Vx0rPbW3cKPMictNqVszvOQ/640?wx_fmt=png&from=appmsg)

由于方案 2 在 O+ 状态时存在两条路径，其O+状态的通态损耗小于其他几种方案，还需要对不同方案的变流器损耗进行量化分析。 图 8 为开关频率 2 kHz， 输出电流有效值 500A， 直流电压3600V 条件下不同方案的损耗分布图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmHWLTrskQU7IWPRjLmxbxiclicPAUIdN1tJiaXicUequAL1svRMeJlEeJ6LZvlibRxxDqBEUX6oFED0w/640?wx_fmt=png&from=appmsg)

4\. 结 论

针对3.3 kV SiC MOSFET 和 IGBT 在 ANPC 三电平拓扑中混合应用目前存在的问题开展分析，通过实验结果验证了分析结论。综合实验结果和分析结论，从最高效率和可靠性的角度出发，方案3 是当前应用背景中的最优解决方案，但是还需通过额外的硬件或者软件设计，保证方案 3 中外管和箝位管脉冲的同步性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)