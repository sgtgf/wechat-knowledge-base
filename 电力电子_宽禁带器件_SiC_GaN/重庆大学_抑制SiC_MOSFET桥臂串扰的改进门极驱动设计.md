# 重庆大学：抑制SiC MOSFET桥臂串扰的改进门极驱动设计

原创 李辉 黄樟坚 等 SiC碳化硅MOS管及功率模块的应用 2024-08-31 11:31 广东

> 原文地址: [https://mp.weixin.qq.com/s/iGq51TV6AMu0a2LEESkGfQ](https://mp.weixin.qq.com/s/iGq51TV6AMu0a2LEESkGfQ)

**文章来源：电工技术学报**

**作者：**李辉.黄樟坚.廖兴林.钟懿.王坤（输配电装备及系统安全与新技术国家重点实验室（重庆大学））

**摘要：**由于传统驱动下碳化硅（SiC）MOSFET 受高开关速度特性及寄生参数影响，桥臂串扰现象更加严重，而现有抑制串扰驱动电路又往往会增加开关损耗、开关延时和控制复杂程度，因此本文结合驱动阻抗控制与负压关断的串扰抑制方法，提出一种改进门极驱动电路。首先，阐述串扰现象产生原理及其典型抑制方法。其次，在负压关断前提下，基于控制辅助三极管开断，降低串扰产生过程中驱动回路阻抗的思想，提出一种在栅源极增加三极管串联电容新型辅助支路的改进驱动方法，并分析其工作原理，研究改进驱动电路关键参数设计原则。最后，搭建双脉冲测试实验平台，在不同驱动电阻、输入电压、负载电流条件下对改进驱动电路设计的有效性进行验证。结果表明，传统驱动下 SiC MOSFET 桥臂串扰现象明显。相比典型抑制串扰驱动电路，提出的驱动方法在有效抑制串扰同时，减小了开关损耗与开关延时。

**关键词：**SiC MOSFET .串扰抑制.门极驱动.辅助支路.开关损耗与延时

**0.引言**

近年来，以碳化硅（Silicon Carbide, SiC）MOSFET 为代表的宽禁带半导体器件因其具有高开关频率、高开关速度、高热导率等优点，已成为高频、高温、高功率密度电力电子变换器的理想选择。然而随着 SiC MOSFET 开关速度加快，桥式电路受寄生参数影响加剧，串扰现象更加严重。由于 SiC MOSFET 正向阈值电压与负向安全电压较小，串扰问题引起的正负向电压尖峰更容易造成开关管误导通或栅源极击穿，进而增加开关损耗，严重时损坏开关管。因此，分析桥臂串扰现象形成原因，研究发挥 SiC MOSFET 高速开关特性优势的串扰抑制方法，对提高变换器工作可靠性、提升其功率密度具有重要意义。

目前，已有一些文献对如何抑制串扰现象展开研究，归结起来主要分为两类：一类是控制栅极驱动阻抗的抑制方法，如文献通过设置关断栅极电阻小于开通栅极电阻，并在栅源极并联或串联辅助电容，降低串扰产生过程中的驱动回路阻抗，抑制串扰。但并联辅助电容增大了栅源极等效电容，延长了电容充放电时间，而串联辅助电容又使栅源极电容分压降低，减慢了开关速度，这都将带来开关损耗与开关延时增加的弊端。文献提出一种只在开关过程的米勒平台期增大驱动电阻的方法，降低米勒平台期的电压变化率 dv/dt，抑制串扰。该方法具有较低的开关延时，但却增大了开关损耗，同时很难准确监测开关状态。文献在栅源极增加 MOSFET 管或三极管串联电容的辅助支路，通过控制 MOSFET 管或三极管的开断，减小驱动回路阻抗，抑制串扰。该方法具有较低的开关损耗与延时，但 MOSFET 管开启电压较高，需外加驱动信号，加大了控制复杂程度，三极管虽无需外加控制信号，但文献所提方法只对栅源极单方向电压尖峰有抑制效果。另一类是负压关断的抑制方法，文献通过选择合适的驱动负压关断开关管，确保将栅源极正负向电压尖峰限制在安全范围内。但由于 SiC MOSFET 的正向阈值电压与负向安全电压较小，导致驱动负压的可选区间较小。文献提出一种在栅源极出现正向电压尖峰时采用负压关断，出现负向电压尖峰时采用 0V 关断的抑制方法。但是由于寄生电感的存在，栅源极会同时出现正负向电压振荡，因此该方法很难达到较好的抑制效果。文献采用稳压二极管将栅源极负向电压尖峰限制在关断负压，但由于缺少限流电阻的作用，使流过二极管的电流大大超过其正常工作值，稳压效果较差。文献在栅源极增加基于 MOSFET 管开断的有源钳位电路，该方法能有效将栅极电压钳位在关断负压，但同样需外加 MOSFET 管驱动信号。

综上所述，现有 SiC MOSFET 串扰抑制方法大都以牺牲开关损耗、开关延时或增加控制复杂程度为代价。基于此，本文在负压关断前提下，提出一种在栅源极增加三极管串联电容新型辅助支路的改进驱动设计方法，该方法具有开关损耗小、延时较短、控制简单的特点。论文首先阐述串扰现象的产生原理及其典型抑制方法，其次分析改进驱动电路工作原理与关键参数设计原则，最后，搭建双脉冲实验平台，对改进驱动电路有效性进行实验验证。

**1 .桥臂串扰产生原理及其典型抑制方法**

图 1 给出了桥臂串扰产生原理及其典型抑制方法，其中 QH、QL 为上、下桥臂的 SiC MOSFET开关管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofiauib0GrFOkicSdRP3vWNATOf5I27libegg7JM22toYVlVYLcrKCDA75OQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aof5Ap0nUaFHQHLlEictkDRRWiayCsLJOgOSOVMibWbHPO7ch9H0xtZa7YBg/640?wx_fmt=png&from=appmsg)

在 QH 开通之前如图 1a 所示，QL 体二极管 VDL续流。QH 开通瞬间，QH 沟道与 VDL 换流，QH 漏源极电压 vdsH 迅速下降，QL 漏源极电压 vdsL 迅速上升，QL 米勒电容 CgdL 开始充电，充电电流方向如图中实线箭头所示，此电流在栅极阻抗产生负压降，抬升了 QL 栅源极电压 vgsL，可能导致 vgsL 超过阈值电压Vth，引起 QL 误导通。

在 QH 关断之前如图 1b 所示，负载电流流过QH 沟道。QH 关断瞬间，VDL 与 QH 沟道换流，vdsH迅速上升，vdsL 迅速下降，CgdL 开始放电，放电电流方向如图中实线箭头所示，此电流在栅极阻抗产生正压降，降低了 QL 栅源极电压 vgsL，可能导致 vgsL超过安全负压，损坏 QL 开关管。

采用典型抑制串扰驱动方法时，在 QH 开通瞬间，QL 栅极阻抗产生负压降，二极管 VD1L 正向导通，CgdL 充电电流通过 CL 分流，电流方向如图 1a中虚线箭头所示，QL 栅极驱动回路阻抗减小，抑制了 QH 开通瞬间造成 QL 栅极出现的正向电压尖峰；在 QH 关断瞬间，QL 栅极阻抗产生正压降，VD1L 反向截止，CgdL 放电电流通过 CL 分流，电流方向如图1b 中虚线箭头所示，QL 栅极驱动回路阻抗减小，抑制了 QH 关断瞬间造成 QL 栅极出现的负向电压尖峰。

受 SiC MOSFET 高开关速度特性影响，导致上述桥臂串扰现象更加明显。虽然典型抑制方法能有效解决串扰问题，但该方法增大了栅源极等效电容，延长了栅源极电容充放电时间，造成开关延时增加、开关损耗增大。

**2.改进抑制串扰驱动方法及其工作原理**

**2.1 改进抑制串扰驱动方法**

本文基于负压关断法，提出一种带有辅助支路的改进抑制串扰驱动电路，如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofja4SkC6UcOeWLKGURhFaAwQoHvTbjJZh9IkibSWMJpT01iciclSpxVoYA/640?wx_fmt=png&from=appmsg)

其基本思想是在串扰产生过程中，通过控制三极管开断，使三极管串联电容的辅助支路为米勒电流提供旁路通道，降低栅极驱动回路阻抗，抑制串扰，同时减小辅助支路电容对 SiC MOSFET 开关特性的影响。由于辅助支路三极管只需提供 0.7V 的正向偏置电压即可导通，因此无需外加控制信号，降低了控制复杂度。此外，当上、下开关管的辅助电容 CaH、CaL 足够大时，共源寄生电感 LsH、LsL 上的电压对 CaH、CaL 电压影响较小，使 CaH、CaL 电压基本稳定在 V2H、V2L，实现 LsH、LsL 与驱动回路解耦，减小共源寄生电感对开关特性的影响。

**2.2 改进抑制串扰驱动电路工作原理**

改进抑制串扰驱动电路在开关过程中的相关波形如图 3 所示，其中 SH、SL 为上、下桥臂开关管QH、QL 的驱动信号；vdsL、vgsL 分别为下桥臂开关管QL 的漏源极电压与栅源极电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofg23Co7xolicpaNfBhRXuNp69oqFqs9XicdyP9MFyicHrqoPpicq4WzAlsw/640?wx_fmt=png&from=appmsg)

为了进一步深入分析改进驱动电路的开关过程，并考虑死区等因素，本节在单个开关周期内，对改进抑制串扰驱动电路的工作原理进行分析。图4 给出了共源寄生电感 LsH、LsL 被 CaH、CaL 解耦后，改进驱动电路工作原理。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofRl6ribQwLCvBxQRicfUbD9cg32icpXJKKbVwWj0wKChupWw4F8jZgxticw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofjOIDF8liabBeiapNm7icXf2oZhUF7XfVbzibq3BZNamzjcmic7f7AJ8nKkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofU3vOWV7VCelf7mCz2U7DDHbpJ6EAmqmrZZP4ic6ohHs4EIdpCSYUDdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofjzic66gPf2wiatYAtH7pWn9SAGhK2lgo7ZQ3uGkpZ592DqYFUvqhfCuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofeJl8AWUUCPS9fV1Lf1uBZozWlxgibnH79H3mLvJcnxEKC7d6FA4Ndxg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofA5gibV3pklfFPDpHPONbXT7W8OswRzuqP6DRiba3xwUx0RhLkRHe7arA/640?wx_fmt=png&from=appmsg)

开关模态 1\[t0, t1\]：QH 处于完全导通状态，QL处于完全关断状态，负载电流流过 QH 沟道，驱动回路无电流，辅助支路不工作。

开关模态 2\[t1, t2\]：QH 开始关断，此时 V2H 给CgsH 充电，由于 VD1H 具有单向导电性，且 VT2H 输出寄生电容远小于 CgsH，因此 V2H 给 CH 充电电流很小，CH 对 QH 关断性能影响可忽略不计。与此同时，QH 沟道与 VDL 换流，vdsH 迅速上升，vdsL 迅速下降，CgdL 开始放电，放电电流在 QL 栅极阻抗产生正压降，使 VT2L 发射结正偏，VT1L 发射结反偏，VT2L开通，VT1L 关断，放电电流通过 CL 分流，电流方向如图 4b 中的箭头所示，减小了 QL 栅极驱动回路阻抗，抑制了 QL 栅源极负向电压尖峰。

开关模态 3\[t2, t3\]：换流结束后，负载电流通过VDL 续流，QH 与 QL 都关断，单相桥臂处于死区状态，此时驱动回路无电流，辅助支路不工作。

开关模态 4\[t3, t4\]：QL 开始导通，VDL 和 QL 沟道换流，此时 V1L 给 CgsL 充电，由于 VD2L 具有单向导电性，且 VT1L 的输出寄生电容远小于 CgsL，因此V1L 给 CL 充电电流很小，CL 对 QL 开通性能影响可忽略不计。

开关模态 5\[t4, t5\]：换流结束后，负载电流流过QL 沟道，QH 处于完全关断状态，QL 处于完全导通状态，此时驱动回路无电流，辅助支路不工作。

开关模态 6\[t5, t6\]：QL 开始关断，QL 沟道和 VDL换流，此时 V2L 给 CgsL 充电，参考模态 2 分析可知，CL 对 QL 关断性能影响可忽略不计。

开关模态 7\[t6, t7\]：工作模式与模态 3 相同。

开关模态 8\[t7, t8\]：QH 开始开通，此时 V1H 给CgsH 充电，参考模态 4 分析可知，CH 对 QH 开通性能影响可忽略不计。与此同时，QH 沟道与 VDL 换流，vdsH 迅速下降，vdsL 迅速上升，CgdL 开始充电，充电电流在 QL 栅极阻抗产生负压降，使 VT1L 发射结正偏，VT2L 发射结反偏，VT1L 开通，VT2L 关断，充电电流通过 CL 分流，电流方向如图 4h 中的箭头所示，减小了 QL 栅极驱动回路阻抗，抑制了 QL 栅极正向电压尖峰。

换流结束后，工作模式转为开关模态 1，之后的开关模态与前诉类似，这里不再赘述。由上述分析可知，在开关模态 2 与开关模态 8中，上桥臂 QH 开关瞬间会引起下桥臂 QL 产生正负向电压尖峰，本文提出的改进方法在不影响器件开关性能的同时能有效抑制该串扰问题。

**3.改进抑制串扰驱动电路参数设计**

本文以 CREE 公司第 2 代 1.2kV SiC MOSFET半导体器件 C2M0080120D 为例，对改进驱动电路参数设计原则进行研究，其基本参数见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aof3SibKTbL5gXR7EbWEKpvWeDK3Zevtw0KvzJyx9hLlOAGTCl0YmE0ictQ/640?wx_fmt=png&from=appmsg)

为简化分析，忽略栅极寄生电感影响，在 QH开关瞬间，当辅助支路不工作且共源寄生电感 LsH、LsL 被 CaH、CaL 解耦时，QL 驱动回路的等效简化电路如图 5 所示。图中电压源 vin 等效上桥臂 QH 开关瞬间对下桥臂 QL 的影响，vin=at，a 为 QH 开关速度，假设 a 的绝对值恒定，V2L 为关断负压电源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofkRMZhibwylicRzDWjXltW30Sl7WgOE2K7I1ECyahaWt3QXVw7jPCnnkw/640?wx_fmt=png&from=appmsg)

由基尔霍夫定律可得节点 G 的节点电压方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aof9EvPOwkNZ010RjkS1RI9ibH8cOlpY9ibDgI7fRvBuoicemyiacBo4yyroQ/640?wx_fmt=png&from=appmsg)

要使辅助支路转换到工作状态，则 QH 开关瞬间，充放电的米勒电流在 QL 栅极驱动电阻 RgL 上产生的电压降ΔV1 应使三极管发射结正偏，且肖特基二极管正向导通，因此 RgL 的取值应满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofPsdfXp9a5Y3Nxkrm65wAdABMdZXpeaaQJYZltiacghjyMu8rVkv7oQw/640?wx_fmt=png&from=appmsg)

式中，0.7V 为三极管发射结正向偏置电压；0.4V 为肖特基二极管正向导通电压。当 V2L=5V 时，可得驱动电阻 RgL 的取值范围如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofFDk4FibmoEiaQfXwXlf88LmXUqoJt91WuKicMr2xf51Ff8gUsGRkCm5ibQ/640?wx_fmt=png&from=appmsg)

由图 6 可知，不考虑栅极寄生电感时，RgL 取值应大于 3.9Ω；当考虑其影响时，米勒电流将在寄生电感上产生压降，导致 RgL 取值小于 3.9Ω便可使栅极阻抗压降满足辅助支路的开通要求，使辅助支路工作。因此，本文中驱动电阻 RgL 取值大于等于 5Ω。

当辅助支路处于工作状态时，由于辅助支路三极管与二极管的饱和导通电阻只有几十mΩ，可忽略其影响，则 QH 开关瞬间 QL驱动回路的等效简化电路如图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aoft8PotMibwjhrgPfqRI4gP8yeVfroh35bhAw6j3s2y9j8Rdoic2hwJHqQ/640?wx_fmt=png&from=appmsg)

由基尔霍夫定律可得节点 G 的节点电压方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofYcxv9BZqtg1RZbUYNMic00se0w4BskhsGThE80JhapJJoRrRWsMKG0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofd5KFyj3XH5o9r4CFO7YcRvAjhcAheIwBCRV1WPUpc8ibgAK2qmTum7g/640?wx_fmt=png&from=appmsg)

从图 8 可以看出，当辅助电容 CL 取值大于 10nF时，ΔV2 变化平缓且裕度较宽，因此，本文辅助支路电容取值 100nF。此外，在辅助支路三极管基极串一个 0Ω电阻，来抑制高频噪声干扰。

**4.改进抑制串扰驱动电路实验验证**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofibZgSm9tpjeUq5VEIsBg2EoT4DibicdrnMA9awbT8n9xfibdqMxgKWicXZA/640?wx_fmt=png&from=appmsg)

为了验证改进抑制串扰驱动电路的有效性，本文基于 SiC MOSFET 器件 C2M0080120D，搭建了如图 9 所示的双脉冲测试实验平台，并对传统驱动电路、典型抑制串扰驱动电路、改进抑制串扰驱动电路进行了实验对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofCqh6y98pnUYSMmNdqQVlq0Df07dlneqlK9LU7ugFogbLVs8nrXqTmg/640?wx_fmt=png&from=appmsg)

图 10 给出了改进抑制串扰驱动电路原理。其具体参数设置如下：辅助支路中的NPN 和 PNP 三极管分别选择低饱和压降、高阻断压降且能承受较大集电极电流的中等功率三极管ZXTN25100BFHTA 和 ZXTP25100BFHTA，辅助支路中的肖特基二极管选择低导通压降、快反向恢复特性的 1N5819HW−7−F，光耦隔离芯片选择具有快转换速率的 ACPL−4800，驱动芯片选择具有较强驱动能力的 IXDN609，负载电感为 400μH，电路中其他无源器件的基本参数见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofky3ickmD891OMzRwdRcB0n6vHI0Ip3WZ7XzsXxWnDUXGaqvleocZYOw/640?wx_fmt=png&from=appmsg)

图 11～图 13 分别给出了驱动电阻为 10Ω，输入电压为 400V，负载电流为 5A 时，传统驱动电路、典型驱动电路与改进驱动电路的实验波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofUr6UWYNNRqD3ZM4oG9rN5RvoKiatpyv4RdEkra0icusRicgxzO2OI7R7Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aof5mkWHfRU5zC5WGL13J1bXO8jnOwePWbbhrxCkbLntnQmSxLPqeFFIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofMDXm1abFGoJkiaDQYwL5da4N2yHAU6icr5zia5n9xicyBl4O8ovOdgW2oA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofLyn777ApQsA0n0FYQnnDHVkCWVtWKIyDeJ6x3P1fXcadCVNMrJYGww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofLyn777ApQsA0n0FYQnnDHVkCWVtWKIyDeJ6x3P1fXcadCVNMrJYGww/640?wx_fmt=png&from=appmsg)

通过图 11～图 13 可得不同驱动电路实验对比结果见表 3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofbPBkWicicq4Y8894yf5QU8UY5jkaLGHAS9hDoh2lgEEicRcBzcAkhC0Jg/640?wx_fmt=png&from=appmsg)

由实验结果分析可知，传统驱动电路正向电压尖峰为 3.8V，大于 QL 阈值电压，负向电压尖峰为−15.6V，超过了 QL 负向安全电压，串扰现象明显。

典型抑制串扰驱动电路正向电压尖峰为−1.3V，负向电压尖峰为−8.2V，能有效抑制串扰现象，但开关延时与开关损耗增大。改进驱动电路正向电压尖峰为−1.6V，负向电压尖峰为−7.9V，有效抑制了串扰问题，且 QH 开关延时与开关损耗和传统驱动相差较小，由此可知，辅助支路电容对 QH 开关特性影响较小；相比典型抑制串扰驱动，改进抑制串扰驱动电路 QH 开通延时时间降低了 78.1%，关断延时时间降低了 65.8%，开关总损耗降低了 33.5%。

为了进一步比较分析典型抑制串扰驱动电路与改进抑制串扰驱动电路的驱动特性，本节分别在不同驱动电阻、不同输入电压、不同负载电流条件下，对两者在开关延时、开关损耗、正负向电压尖峰方面进行实验对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofgTvkZfglgOSibpX8Yq0icszWMbAQmiaNY6rGNibrib7PgjpxT3gvfH2hiaWA/640?wx_fmt=png&from=appmsg)

图 14 与附表 1 给出了当输入电压为 400V，负载电流为 5A，驱动电阻分别为 5Ω、10Ω、20Ω时的实验对比结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aofG5wXd0yHUdyKWFF2VyhAo8WicibztMYia0x0BibGjZwc8VaXMXVQkuSPeA/640?wx_fmt=png&from=appmsg)

图15 与附表 2 给出了当驱动电阻为 10Ω，负载电流为 5A，输入电压分别为 300V、400V、500V、600V 时的实验对比结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aof8iaKhOUBCwQA01aarY3g92jkgVAwy8EOicHhJjnibvje2icevtsmP1xbTQ/640?wx_fmt=png&from=appmsg)

图 16 与附表 3 给出了当驱动电阻为 10Ω，输入电压为 400V，负载电流分别为 3A、5A、7A、10A时的实验对比结果。

分析以上实验对比结果可知，在不同驱动电阻、不同输入电压、不同负载电流条件下，两种驱动电路都能有效限制 QL 栅极正负向电压尖峰在允许范围内，抑制串扰现象。QH 开关损耗随驱动电阻、输入电压、负载电流的增大而增加，而 QH 开关延时时间受输入电压、负载电流变化影响相对较小，但也会随驱动电阻增大而增加。

相比典型抑制串扰驱动电路，改进抑制串扰驱动电路开通延时时间下降了 75%左右，关断延时时间下降了 65%左右，开关总损耗下降了 35%左右，改进驱动电路能有效减小开关延时，降低开关损耗，且随着驱动电阻、输入电压、负载电流的增加，降低开关损耗的效果更为明显。

**5.结论**

为了有效解决典型驱动电路在抑制串扰同时增加开关延时与开关损耗问题，本文提出一种在栅源极增加三极管串联电容辅助支路的改进抑制串扰驱动电路及其设计方法，并通过原理分析与实验验证，表明了本文提出的改进串扰抑制驱动电路和参数设计方法的有效性。所得主要结论如下：

1）传统无辅助支路的 SiC MOSFET 驱动电路，桥臂串扰现象明显。典型抑制串扰驱动和本文提出的改进驱动电路都能有效抑制串扰问题。

2）无论是典型抑制串扰驱动电路，还是本文提出的改进驱动电路，SiC MOSFET 开关损耗都会随驱动电阻、输入电压、负载电流的增大而增加；而SiC MOSFET 开关延时受输入电压与负载电流的影响相对较小，但也会随驱动电阻的增大而增加。

3）相比典型抑制串扰驱动电路，本文提出的改进驱动电路有效降低了开关延时与损耗，且随着驱动电阻、输入电压、负载电流的增大，降低 SiC MOSFET 开关损耗的效果更明显，进一步说明本文方法在抑制串扰和提高开关特性方面更具有优势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7BYJe8ibxUfzWNTxxZ0aof8bpOg0oJhRK4KNeydwbvfLpT28Oal6M85bqqug96NHHgLCI2RiaI3aQ/640?wx_fmt=png&from=appmsg)

团队介绍  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1MfoADL2RBcZyqQqyHT4GpuObQHgDDT8RDrRrINoeSNibuI62rqJw93NHYicfgv78Wp0YBuAMYhxg/640?wx_fmt=png&from=appmsg)

重庆大学李辉教授研究团队主要围绕可再生能源电力装备安全可靠运行开展研究，拥有完备的材料-封装-器件-装备仿真及实验平台。近五年，团队在大功率电力电子器件可靠性研究方向承担了国家自然科学基金智能电网联合基金重点项目1项“压接型IGBT器件封装老化失效演化机理及测评方法”，参与国家重点研发计划项目3项“电力系统用国产高压大功率IGBT芯片及模块的应用研发”、“碳化硅大功率电力电子器件及应用基础理论研究”、“大容量电力电子装备多物理场综合分析及可靠性评估方法研究”；承担国家自然基金面上项目2项，参与工信部高新技术科研项目1项，国际合作项目2项以及省部级科技项目10余项；获重庆市科技进步二等奖、三等奖各1项。

![](https://mmbiz.qpic.cn/mmbiz_jpg/WRO0RgZZ75TPY8CQpiaLdn4vEneWSblNe0wibOiaL7l7GibCRviatOyiacBJvVWY5teXBUyU7ASk48vEzIt3GoHQiaByQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 李辉

1973出生，教授，博士生导师，教育部新世纪优秀人才支持计划入选者，爱思唯尔“中国高被引学者”，输配电装备及系统安全国家重点实验室副主任，中国电机工程学会电力电子器件专业委员会委员，中国工业节能与清洁生产协会绿色电机系统专业委员会专家，IET Renewable Power Generation副编辑。主持国家自然科学基金重点项目1项、面上项目2项，参与国家重点研发计划项目2项和国际合作项目2项，获重庆市科技进步二等奖1项（第一完成人），发表高质量学术论文72篇，出版专著1部，授权国家发明专利16件，申请发明专利11件。主要研究方向为电力电子器件封装与可靠性、风力发电技术、特种电机系统设计与控制。

![](https://mmbiz.qpic.cn/mmbiz_png/WRO0RgZZ75TPY8CQpiaLdn4vEneWSblNeYnOwIKtBHLyTYrrAO3kLv4jmoLglK4Ht7RwKPBZ2IwKKdbBickGJYSg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 黄樟坚

1992出生，硕士研究生，研究方向为SiC电力电子器件驱动设计及应用。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)