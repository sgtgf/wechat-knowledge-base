# 1700V碳化硅MOSFET在辅助电源中的应用深度解析


> 原文地址: [https://mp.weixin.qq.com/s/ueyWcIVguOl2nrCGHotdKw](https://mp.weixin.qq.com/s/ueyWcIVguOl2nrCGHotdKw)

✨ 摘要

碳化硅（SiC）MOSFET以其高耐压、低导通电阻、超快开关速度和优异的高温特性，正在为辅助电源（Auxiliary Power Supply, APS）设计带来革命性变化。它能够显著提升辅助电源的效率、功率密度和工作温度范围，同时降低系统体积、重量和热管理复杂度，尤其适用于对可靠性、效率和小型化要求极高的应用场景。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMXRLdQ65RLictQaoXTXqOchbADno1BY3LTF2PAHpnxuGqjs22X641LpQ/640?wx_fmt=jpeg)

图片来源：罗姆半导体（ROHM）

一.辅助电源概述

1\. 辅助电源的定义

辅助电源，又称辅助电源模块（APM）或辅助功率单元（APU），是主功率变换系统中的“能源心脏”。它并非直接为负载提供主功率，而是为一个系统内的控制、监测、保护和通信电路提供稳定、隔离的低功率电能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMvX3T4ia7N0Gapy0AmX3UUZZejSib46YaWnibPRKjRIUD83t3hh8zpWaqQ/640?wx_fmt=png&from=appmsg)

图片来源：wolfspeed的1700v sic mos高效辅助电源方案设计

您可以将其理解为主功率柜中的“后勤保障系统”：当主电路还未工作时，辅助电源首先启动，为控制器（如DSP、MCU）、驱动电路、传感器、风扇、接触器和通信模块（如CAN收发器）供电，确保整个系统能够正常启动、运行和安全关闭。

2\. 辅助电源的特性

一个高性能的辅助电源通常具备以下核心特性：

高可靠性：这是首要要求。辅助电源的故障可能导致整个系统宕机或失控，因此其设计必须稳健，常需满足高隔离要求（如加强绝缘）和宽输入电压范围。

宽输入电压范围：必须适应来自主系统的波动输入。例如，在工业应用中，输入可能来自三相整流后的直流母线（~500-800VDC），在新能源领域，可能直接来自高压电池包（如200-1000VDC）。

多路隔离输出：需要提供多路相互隔离的稳定电压（如+15V、-8V、+5V、+3.3V等），分别给栅极驱动、运算放大器、控制器和通信芯片供电。

高效率与低待机功耗：辅助电源通常持续工作，其效率直接影响系统整体能耗和温升。低待机功耗对于满足节能法规（如ErP）至关重要。

高功率密度：在主系统的有限空间内，辅助电源必须尽可能小巧，为其他关键部件腾出空间。

恶劣环境适应性：需能在高环境温度、高湿度、高振动等恶劣条件下稳定工作。

3\. 市场应用领域

辅助电源作为“系统中的系统”，其应用无处不在：

新能源汽车：车载充电机（OBC）、直流变换器（DC-DC）、主驱逆变器、电池管理系统（BMS）内部的控制器和驱动供电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMu35gs5VuuYsdyPDpDO4RS6Jib2q1wOicrjvd2x126HSib00fRicF3icgt4w/640?wx_fmt=png&from=appmsg)

图片来源：网络

工业传动与自动化：变频器、伺服驱动器、UPS系统内部的控制器和IGBT/SiC驱动供电。

可再生能源：光伏逆变器、储能变流器（PCS）中的控制板供电。

轨道交通：机车牵引变流器、辅助变流器中的控制系统供电。

智能家电与通信电源：高端空调、服务器电源中的辅助电源。

二. 碳化硅MOSFET的应用优势与应用案例

传统辅助电源，尤其是中高功率输入（>400V）的应用，通常采用硅基MOSFET或IGBT的拓扑结构（如反激、正激、LLC）。但硅器件在高压、高频和高效率需求面前已渐显乏力。碳化硅MOSFET的引入，完美地解决了这些痛点。

1\. 碳化硅MOSFET的应用优势

将SiC MOSFET应用于辅助电源，能带来多重显著优势：

突破效率瓶颈，实现超高效率：

极低的开关损耗：SiC MOSFET的开关速度极快，几乎无反向恢复电荷（Qrr），这在LLC等谐振拓扑中能显著降低开通损耗，轻松实现>96%甚至98%的峰值效率。

降低导通损耗：高压条件下，SiC MOSFET的Rds(on) \* Area（品质因数）远优于同电压等级的硅MOSFET，导通损耗更小。

降低待机功耗：高频特性允许在轻载时采用脉冲频率调制（PFM）等模式，进一步优化轻载和待机效率。

显著提升功率密度：

工作频率大幅提升：SiC MOSFET可轻松工作在数百kHz至MHz级别（传统硅MOSFET通常在100kHz以下）。频率的提升意味着变压器、电感、滤波电容等无源元件体积可大幅减小，有时体积可缩减至原来的1/3到1/2。

简化热管理：高效率带来低发热，结合SiC本身更高的热导率和耐温能力，可以减少或简化散热器，进一步压缩空间。

增强系统可靠性与鲁棒性：

更高的击穿电场强度：使器件更坚固耐用，抗浪涌能力强。

更高的工作结温（Tjmax）：可达175°C甚至200°C以上，允许在更高环境温度下工作，降低了冷却要求，提高了系统在恶劣环境下的可靠性。

简化拓扑：在某些场合，利用其高压能力，可以省去前级降压电路，直接由高压母线供电，减少了元件数量，提升了可靠性。

支持更高的母线电压平台：

随着800V电动汽车架构和1500V光伏系统的普及，输入电压越来越高。1200V甚至1700V的SiC MOSFET是构建直接来自这些高压母线辅助电源的理想选择，而硅器件在此电压下性能和效率会急剧下降。

下表概括了碳化硅MOSFET相较于传统硅基MOSFET在辅助电源中的核心优势：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMicHhF74ruibSLW3j2NI3NxrVb5shyE630yDskcTjia6oruhdonL6g5d5A/640?wx_fmt=png&from=appmsg)

2\. 应用案例与拓扑选择

常见拓扑：SiC MOSFET非常适合用于辅助电源的多种拓扑中，尤其是：

反激变换器（Flyback）：适用于<200W的中小功率，结构简单，成本较低。采用SiC MOSFET可轻松实现高频化，减小变压器体积。

双管正激（Two-Switch Forward）：适用于中等功率，可靠性高。SiC MOSFET可降低开关损耗，提升效率。

 LLC谐振变换器：适用于>100W的中高功率，是实现超高效率和高功率密度的首选拓扑。SiC MOSFET的低Qrr特性对于LLC实现高效率的ZVS（零电压开关）至关重要，能彻底消除二极管反向恢复带来的损耗和风险。

具体案例：

新能源汽车OBC/DC-DC中的辅助电源：某知名Tier1供应商为其6.6kW OBC设计辅助电源。输入直接来自800V电池包，采用基于1200V SiC MOSFET的LLC拓扑，将频率提升至250kHz。最终实现了97.5%的峰值效率，电源模块体积比原有硅方案减少了40%，并成功控制了在高环境温度下的温升。

光伏逆变器辅助电源：针对1500V光伏系统，输入电压范围宽（1000-1500VDC）。采用1700V SiC MOSFET的双管正激或LLC拓扑，省去了额外的Buck预降压电路，直接由母线供电。这不仅简化了设计，提高了可靠性，还将整机效率提升了约1.5%，同时模块体积缩小了30%。

工业变频器辅助电源：在一台55kW变频器中，辅助电源需要从约600VDC的直流母线取电。将原有的基于硅MOSFET的反激电路替换为基于750V SiC MOSFET的高频反激方案，开关频率从65kHz提高到220kHz。变压器体积大幅减小，整个辅助电源板布局更加紧凑，为其他功能腾出了空间。

三. 1700V碳化硅MOSFET的产品介绍

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMctOnU7pcxhMTSwuASQibwDsHeShCicbqIMlyGrwDFyAeBTFJKojsqd4Q/640?wx_fmt=png&from=appmsg)

1700V的SiC MOSFET的优异性能，不仅能够设计三相系统用或高DC输入电压用的简单辅助电源，而且还可以发挥出卓越的性能。利用基于SiC MOSFET的技术，设计人员可提高产品的效率、简洁性、可靠性并实现小型化。1700V SiC MOSFET在性能方面的优势可以与使用了Si MOSFET的解决方案系统的成本相匹敌，比如减小磁元器件（散热器、线圈）等昂贵部件的成本。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMrqgOVowW5toLZ4GWFwxqZOx6nTKJlRqA5slGcrhS3wC4mQEI9kWGQw/640?wx_fmt=png&from=appmsg)

1700V产品规格参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMdPzgicHiaKl7nnrfKIIcsPzKyhlwXdOtqVpF4sguvJRAjBxiabzWO14OA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMemEIPVNxX4BKtIwNnP6ABOLmbxxtCIOBBK1OshzC5axOsNiaNWLrjYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMibl94JwIibxcBUVLX8NNchvwZnOkNqd0dQHZqJcQuUuThAs9oXX1IbMA/640?wx_fmt=png&from=appmsg)

1700V5A,内阻750毫欧，封装TO263-7和SOT247-3产品资料

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMKoGghKAOxpZUgwGdkjpxo9LL0y1EzsaV1ljVbj0aNIEArEJt1fic63A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMYG7LfsYVltnkwuiazIpURwXaKseJSuibxEgvynsC3cBWnvNfH4ACZytQ/640?wx_fmt=png&from=appmsg)

1700V1A,内阻1000毫欧，封装TO220F产品资料

四. 给开发应用工程师的建议

如果您考虑在辅助电源设计中采用碳化硅MOSFET，以下几点至关重要：

精准的栅极驱动设计：SiC MOSFET通常需要+15V/-3 ~ -5V的驱动电压以确保充分开通和可靠关断，防止误导通。选择传输延迟短、共模抑制比（CMRR）高的专用SiC驱动芯片或驱动模块是关键。务必注意降低驱动回路的寄生电感。

精心布局以控制寄生参数：极高的dv/dt和di/dt意味着布局必须优化以最小化寄生电感和电容。采用紧凑、对称的布局，特别是功率环路和驱动环路。必要时使用开尔源连接（Kelvin Source connection）来避免源极寄生电感的影响。

充分利用其高频优势进行磁元件设计：与高频特性匹配的磁芯材料选择（如铁氧体、金属粉芯） 和绕制工艺至关重要。优化设计以降低磁芯损耗和绕组损耗（如采用利兹线、薄层绕组）。

EMI/EMC的早期考量：更快的开关速度可能带来EMI挑战。在设计初期就应考虑屏蔽、滤波和接地策略。适当调整门极电阻（Rg）是平衡开关速度与EMI的重要手段。

成本与性能的权衡：虽然SiC单管成本高于硅，但需进行系统级成本评估。因效率提升和频率提高而节省的散热器、磁件、电容成本以及潜在的可靠性提升，可能使整体方案更具价值。

五.总结

碳化硅MOSFET不再是遥远的概念性技术，而是提升辅助电源性能、助力主系统升级的切实、高效的工程解决方案。

它通过赋能高频、高效、高压操作，直接解决了现代电力电子系统对辅助电源提出的更高功率密度、更宽电压范围、更高可靠性及更小体积的核心需求。尽管在驱动设计和布局方面提出了新的要求，但其带来的系统级优势是传统硅器件难以企及的。

随着SiC器件成本的持续下降和生态链的日益成熟，其在辅助电源中的应用将从高端领域迅速向主流市场渗透。掌握SiC在辅助电源中的应用技术，无疑是您保持技术领先性和产品竞争力的关键一环。

SiC MOSFET的封装大全

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMwLibRjbibKpicwiav36Z9xpuXFpJnn7nhCNzibUxT4l51QpUkQ80CKSMNfA/640?wx_fmt=jpeg&from=appmsg)

SiC功率模块的封装大全

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMnBC0gRKkztu2libWmk1MpeiboEXlffqoa1xhQLjsuEoaibnxDrwFwhGXg/640?wx_fmt=png&from=appmsg)

SiC器件的应用领域

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslENibS3AewXf3HuCmLicoCsHTYDnz0Riak9soclXeDJicHOibcWiaH9ZZtPQoicLETmw162o3GsFVerpyDg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=19)

  

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnOJQfvoUcpBibqW0OqnkNaXeTtY8ttSX7uutKLCqyek3RgU1haicZf4aZNz4u9iapFfI5mq8njf37fA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp#imgIndex=19)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kYgicOJB3rB16QN8FJqk5EaXrBSTJnmMHkAV1MKzicwAiaictDwjleY8UhA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&watermark=1&tp=webp#imgIndex=20)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kpzZHGkWoZ4x4fvE0VWsKmo2IZYEibZNpmKmUSe5YYa6K39lOm0OOIwg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&watermark=1&tp=webp#imgIndex=21)