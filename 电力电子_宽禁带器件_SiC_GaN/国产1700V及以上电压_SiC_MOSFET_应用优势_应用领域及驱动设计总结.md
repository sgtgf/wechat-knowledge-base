# 国产1700V及以上电压 SiC MOSFET：应用优势、应用领域及驱动设计总结


> 原文地址: [https://mp.weixin.qq.com/s/h1sJmG27JlKqDfBaMYtfaQ](https://mp.weixin.qq.com/s/h1sJmG27JlKqDfBaMYtfaQ)

随着第三代半导体产业的发展，国产 1700V 及以上电压 SiC MOSFET 已从小批量验证逐步走向工业级规模化应用，其核心价值在于突破传统硅基器件的高压高频性能瓶颈，同时为电力电子系统提供国产化供应链保障。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMjm6KFKcJrmFTqnmN2Kv8x20ibjRr4No5R4UT0H37aVvaNbERflwu6wjIDy2ibpUmtk6rfyl7scvkLAC5l4crjzx1nPKvt7LLoA/640?wx_fmt=png&from=appmsg)

以下结合器件特性与栅氧可靠性现状，从应用优势、典型场景、驱动设计三个维度展开说明。

一、核心应用优势

1\. 高压适配性强，简化系统拓扑

1700V 耐压等级可直接覆盖 1000~1500V 直流母线的电压应力与浪涌裕量，适配光伏、储能、工业直流母线等主流高压场景。

相比传统硅基方案，无需采用多只低压器件串联的架构，减少元件数量、驱动复杂度与均压设计难度，提升系统可靠性；

相比同耐压硅 IGBT，SiC MOSFET 无拖尾电流、无电导调制效应，开关速度提升一个数量级，适配高频化设计需求。

2\. 低损耗特性显著，提升系统效率

国产 1700V SiC MOSFET 的损耗优势贯穿导通与开关全过程，是提升整机效率、降低散热成本的核心：

开关损耗低：典型器件开通损耗 Eon 约 38~53μJ、关断损耗 Eoff 约 12~14μJ，仅为同耐压 IGBT 的 1/3~1/5，支持 100kHz 以上高频工作，可大幅缩小变压器、电感等磁性元件体积，功率密度提升 30% 以上；

导通特性温漂小：导通电阻 Rds (on) 随温度上升的增幅远小于硅器件，高温满载下导通损耗优势更明显，全负载范围效率可提升 1% 以上；

体二极管性能优异：反向恢复电荷 Qrr 仅几十纳库量级，比同规格硅 MOSFET 低一个数量级，硬开关场景下几乎无反向恢复尖峰，无需额外复杂吸收电路，同时降低 EMI 设计难度。

3\. 热性能与环境适应性优异

依托 SiC 材料的本征特性，国产器件已实现宽温域高可靠运行：

工作结温覆盖 - 55℃~175℃，远高于传统硅器件，可适配户外光伏、车载、高温工业等恶劣工况；

封装热阻低，TO-247封装结壳热阻普遍为 1.8~2.5℃/W，兼容传统散热器与水冷方案，散热设计成熟度高；

通过 H3TRB（高温高湿反偏）、HTRB（高温反偏）等可靠性测试，85℃/85% 湿度、额定电压下 2500 小时无失效，满足户外长期运行要求。

4\. 国产化落地优势与栅氧可靠性现状

工程化适配性强：采用 TO-247、TO-263 等标准封装，引脚定义与主流器件兼容，替代改造成本低；器件一致性持续提升，支持多管并联扩流，覆盖几十瓦到千瓦级不同功率场景。

栅氧可靠性追平国际主流水平：栅氧质量曾是国产高压 SiC MOSFET 的核心短板，目前头部厂商已通过工艺优化突破瓶颈：

高温栅偏（HTGB）测试：+22V 正向偏置、-10V 负向偏置、175℃下 1000 小时无失效，阈值电压漂移在合格范围内；

经时击穿（TDDB）寿命外推：额定驱动电压下本征寿命满足 10 年以上工业应用要求；

客观现状：部分中小厂商工艺一致性不足，栅氧缺陷密度偏高、批次差异大，选型需优先选择通过 JEDEC、AEC-Q101 认证的正规厂商。

二、国产SiC MOSFET产品线  

1.电压1700V产品线

搭载自研SiC MOSFET芯片的分立器件，电压1700V,电流1A~200A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMbkpkr9YAXz16AxkJTFKXhrTS52RRbibe28HQ1wPmUAnazpCBtt8FDl4GVv1rwju6xHAwCM0pYPJlWoC0GuHkf8cwfNUbua1DU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOt0LzVichwm6Y5cAxE5OBkwcvfvia5YYbeDCZ4dF9fPicc5BMqwT0TtkkPLibuVDQ3zgUtLGE43RPECyqRAkAg02gW2432WWsQ5wo/640?wx_fmt=png&from=appmsg)

TO247-3封装1700V100A产品基本参数表

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOxVsHbDB7MctS8aEpo8CuREvnHxGTA5xFJhyYdQstCY226zjHSQyp3QriajUXDppFjiabkWJQ8d9TbeoxLiaA4p0pK1G2icuicELMY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP34Wmq1icbVcvyjIZJ1hSOvQo0Psh8B2s0yvREAHSCJxTmoiciaDmukJibxDpsxGwnNeXcDwjYWibHc4ic5S5OvAR7tXiaNBdmcuRZS8/640?wx_fmt=png&from=appmsg)

TO247-4封装1700V120A产品基本参数表

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO5UyQaYmLKeVym8qTY6yWp5oFykFFUtxo4XyWRtUIpzqicgBztCfiaeXu5ibXJveLicc4VoHctzdW6d6nI7aez3Mq94mLU1M8Qmz0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMODcbYycbpjtUm5IyBqTtpwMABbLRuIpdYe8qWiaUauibXiacn9XWL1tO6loqlj5qPPRA6YGibPIIOOicglgz3icnUWcpNOicB590a8s/640?wx_fmt=png&from=appmsg)

SOT227封装1700V200A产品基本参数表

  

2.电压3300V产品线  

搭载自研SiC MOSFET芯片的分立器件，电压3300V,电流20A~80A。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPAARRcK1AISa8QwF8IVicBADC8mia2zHbibzjEqZHTLMmNDkctzLq5dw9uooXaIqz5Bh5WOCKKeGumvibPmcJcExsOJmhG6Cw5Lms/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPhhvH4cA7UQEicg8LFuu0cTicAeLQTpNdibHACBNKQjmj85pPxZ2K5vfsu1icq9vBVeTWMSqK5yZBMHzXvcibDAzuRM4Cgr2DdwJz8/640?wx_fmt=png&from=appmsg)

TO247-4L封装3300V80A产品基本参数表

SiC MOSFT产品总结

已量产650~3300V全系列SiC MOSFET，规格和封装齐全。

650V系列，电流8A~150A，单芯最低内阻12mΩ。

1200V系列，电流20A~250A，单芯10mΩ，车规主驱SiC MOSFET。

1700V系列，电流1A~200A，单芯14mΩ SiC MOSFET国内率先量产，引领高压高功率市场。

1500V和2000V系列，电流30A~90A。

3300V系列，电流20A~80A，40mΩ高压大电流SiC MOSFET国内首发量产。

产品驱动电压有+12V/+15V/+18V。

三、典型应用场景

国产 1700V 及以上耐压 SiC MOSFET 的核心定位是覆盖 800V~1500V 直流母线的中高压功率变换场景，解决传统硅基器件需串联均压、开关频率低、损耗高的痛点，同时为国内工业、能源领域提供自主可控的供应链保障。目前其应用已从辅助电源、工业电源等中小功率成熟场景，逐步向光伏储能主功率、充电桩、电力电子变压器等大功率场景渗透，核心落地场景可分为五大类：

1.新能源发电与储能领域（核心增长场景）

这是当前国产 1700V SiC MOSFET 需求增速最快的赛道，适配新能源系统高压化、高频化的升级趋势。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPdOSIRhwcE1wRtA3LVwwFrpNfGzBLK6T0PdfSby7afKbvWCPZ0icPbXnvg1Olibc3iaeJOJ2TkJibVA6jo5pBb0WbBibDkkUHghdEk/640?wx_fmt=png&from=appmsg)

图片来源：网络

1500V 光伏逆变器系统

应用背景：1500V 直流母线已成为工商业、地面电站光伏系统的主流架构，可大幅降低直流侧线损，提升系统整体效率。

具体应用：

① 高压辅助电源（直接从 1500V 主母线取电，单管即可实现反激 / 正激拓扑，替代传统硅 MOS 串联方案，省去均压电路）；

② DC/DC 升压级主功率管；

③ 组串级功率优化器。

国产价值：1700V 耐压预留充足的浪涌与过压裕量，单管方案简化电路设计、降低系统故障率；头部国产厂商器件已通过光伏行业可靠性认证，批量应用于户用、工商业组串式逆变器。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPAOw4ic9np0ax8Avelp8junlJxLsPVVGZSgr3hZp2lH1gsOzqfDQpfgIoEUb07HdhKQyY0FkdicXOCIJsO467rrO7RhPicK5icBFQ/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

高压储能变流器（PCS）

应用背景：1500V 高压储能系统成为大型储能电站的主流方案，要求 PCS 具备高效率、高功率密度、长期并网可靠性。

具体应用：双向 DC/DC 变换、高压辅助电源等环节，适配储能电池簇高压架构，通过提升开关频率减小滤波电感、变压器体积。

国产价值：替代进口同规格器件，降低储能系统硬件成本，同时适配国内储能厂商的定制化拓扑与工况需求。

2.新能源汽车与充配电领域（高景气落地场景）

依托国内新能源汽车与充电桩产业的全球领先优势，1700V SiC MOSFET 已实现规模化验证与批量落地。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpNnbxicdRNuTVEhEJ2dlGtHk2hAia6hF4lX1ibUnm4yl1mbibentWd1zGOd5ovKNHYcK9yBWhC86oRbjshRicibWJg7hsBX2cGNQAiafA/640?wx_fmt=jpeg)  

图片来源：网络

800V 高压车载电源系统

应用背景：800V 高压快充平台成为乘用车、商用车的升级方向，母线最高工作电压可达 950V 以上，对器件电压裕量、高温可靠性要求严苛。

具体应用：车载充电机（OBC）、高压 DC/DC 变换器的主开关管，尤其适配重卡、工程机械等对可靠性要求更高的高压车载场景。

国产价值：相比 1200V 器件，1700V 提供近一倍的电压裕量，应对车载浪涌、过压故障的能力更强；SiC 本征耐高温特性适配机舱高温环境；部分头部国产器件已通过 AEC-Q101 车规认证，进入车企供应链验证阶段。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPSCzWOWic71AKdNB18nWGrlB6DSaYWCHt9KWOeE3ZCetSV6QBpGUMK8aneniaibvqZrDiajuqMJ8AfyFt2GQ1rcpXc0FSiaa6f6ruw/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

大功率直流充电桩模块

应用背景：360kW 以上超充桩成为行业主流，功率模块向高频化、高功率密度升级，模块输入侧覆盖 1000V 以上直流母线。

具体应用：充电桩 AC/DC PFC 级、DC/DC 隔离级的主功率管，可将开关频率提升至 100kHz 以上，大幅缩小磁性元件体积，提升单柜功率密度。

国产价值：国内充电桩产业规模全球第一，国产 SiC 器件技术响应快、成本优势显著，已批量应用于 20kW/30kW 快充模块，实现对进口 1700V SiC 器件的替代。

3.工业高压电源与特种电源（最早成熟落地场景）

这是国产 1700V SiC MOSFET 最先实现批量商业化的领域，替代传统硅 MOS 串联、高压 IGBT 方案，技术成熟度最高。

工业直流母线供电电源

适配 1140V 工业直流母线、矿山 / 冶金直流供电系统的开关电源，单管方案无需复杂的均压设计，大幅提升系统长期运行可靠性，降低维护成本。

特种工业电源

覆盖激光电源、电镀电源、高压测试电源、医疗高压电源等场景：利用 SiC 低损耗、高频特性提升电源输出精度与转换效率，减小散热系统体积；体二极管反向恢复电荷极低的特性，可大幅降低硬开关场景的电压尖峰与 EMI 干扰。

通信基站高压远供电源

适配 5G 基站高压直流远供系统（输入电压 800~1000V），1700V SiC 器件可提升电源转换效率与户外长期运行可靠性，降低基站运维成本。

4.电力系统与中压配网领域（前沿增量场景）

贴合国内新型电力系统建设需求，是 1700V 以上高压 SiC MOSFET 的长期核心增量赛道，目前已进入示范项目验证阶段。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMq6eAVBCZ79bJUKvhLWRSFfUeM4XcM0hxfMlIp0XhphouK7c3VuicFksNUyEPr84hxibwtJRl2cQAoTiblTR8Azyettx3AMIc0u0/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

电力电子变压器（PET / 固态变压器）

应用背景：PET 是中压配网、直流微网的核心设备，高频隔离链路需同时满足高压绝缘与高频开关要求，传统 IGBT 无法适配高频化需求。

具体应用：隔离级 DAB、LLC 谐振拓扑的主开关管，通过多模块级联可覆盖 10kV/35kV 中压配网，高频化特性可大幅缩小隔离变压器的体积与重量。

国产价值：适配国内配网升级的自主可控需求，已在多个省级配网示范项目中落地应用，与国产高频变压器、控制方案形成完整国产化链路。

中压直流配电 DC/DC 变换器

应用于柔性直流配网、工业园区直流微网的电压匹配、潮流控制环节，1700V SiC 可提升系统动态响应速度与转换效率，降低配电损耗。

中压固态直流断路器

利用 SiC 微秒级的超快开关速度，实现直流故障的快速分断，解决传统机械断路器分断速度慢、易拉弧的痛点，是中压直流系统的核心保护器件。

5.工业传动与电机控制领域（潜力替代场景）

针对中压工业电机场景，逐步替代传统高压 IGBT 方案，实现节能降噪与性能升级。

高压工业变频器

适配 1140V 中压工业电机（风机、水泵、压缩机等），替代传统 IGBT 方案后，开关频率可提升至 20kHz 以上，大幅降低电机谐波损耗与可闻噪声，提升传动系统整体效率。

大功率伺服驱动系统

应用于工业重型伺服、机床主轴驱动等场景，高压 SiC 的高速开关特性可提升系统动态响应速度与控制精度，适配高端工业装备的升级需求。

轨道交通辅助变流器

适配地铁、城际列车的辅助供电系统，1700V 耐压适配车载中压母线，SiC 的耐高温、抗振动特性可适配车载恶劣运行环境，提升辅助供电系统可靠性。

整体落地节奏总结

国产 1700V 以上 SiC MOSFET 遵循 “从辅助到主功率、从小功率到大功率、从工业到车规” 的落地路径：目前工业高压电源、光伏 / 充电桩辅助电源等场景已实现成熟批量应用；充电桩主功率模块、光伏储能 PCS 等场景处于快速放量阶段；车规、中压配网等高端场景正处于验证与示范落地期。随着栅氧工艺、封装可靠性的持续升级，其替代进口、覆盖中高压功率变换全场景的进程将持续加速。

四、驱动设计核心要点总结

国产 1700V 及以上耐压 SiC MOSFET 的驱动设计，核心目标是在发挥器件高频低损耗优势的同时，重点应对高压场景高 dV/dt/di/dt 带来的干扰与应力风险，并适配国产器件栅氧可靠性、参数一致性的特性，保障系统长期稳定运行。不同于低压 SiC 或进口高压器件，国产 1700V 等级驱动设计需遵循「可靠性优先、性能兼顾、裕量充足」的原则，核心要点可分为七大维度：

1.驱动电压精准配置（栅氧可靠性核心）

驱动电压直接决定国产高压 SiC 器件的栅氧寿命与长期可靠性，是设计第一优先级，需严格降额、禁止超规格使用：

正向驱动电压

推荐工作范围：15V~18V，兼顾导通电阻损耗与栅氧应力；优先按器件规格书的典型推荐值设计，不建议盲目推高至 20V 以上。

国产器件专项考量：部分厂商栅氧工艺一致性略弱于进口，需预留更充足的电压裕量，避免长期接近额定栅压运行，降低经时击穿（TDDB）与阈值电压漂移风险。

关断负压

推荐范围：-3V~-5V，核心作用是抑制米勒电容耦合导致的误导通，同时避免负向过应力。

禁止负压低于 - 10V，过大负偏会加剧栅氧负偏温度不稳定性（NBTI），导致阈值电压正向漂移，升高导通损耗。

欠压锁定（UVLO）

必须硬件级配置 UVLO 功能，正向开启阈值建议不低于 12V，关断阈值不高于 10V；防止驱动电压不足时器件工作在高阻区，引发过热失效。

电源纹波要求

驱动电源纹波需控制在 ±5% 以内（峰峰值＜1V），避免纹波叠加导致栅极电压超出台阶，长期冲击栅氧。

2.栅极开关速度与回路优化

通过栅极回路参数设计，平衡开关损耗、电压尖峰与 EMI，适配高压场景的应力约束：

开通 / 关断独立电阻设计

采用开通电阻Rg(on)、关断电阻Rg(off)：独立配置，配合关断加速二极管，分别调控开通 di/dt 与关断 dV/dt。

阻值参考：1700V 等级器件典型选型范围10Ω~47Ω，功率等级越高、母线电压越高，阻值选型越偏保守；需通过样机迭代平衡损耗与尖峰。

电阻需选用高频无感电阻，紧贴器件栅极引脚放置，最小化回路寄生电感。

开尔文源极（Kelvin Source）连接

必须采用开尔文源极设计：驱动信号的返回地独立走线，直接连接器件的开尔文源极引脚，不与功率源极共用走线。

作用：避免功率回路大电流在源极寄生电感上产生的压降耦合到驱动回路，防止驱动电压偏移、误导通或振荡。

高频振荡抑制

若栅极出现高频振荡，可在栅极串联小阻值阻尼电阻（几欧姆级），或在栅源极间并联几十皮法级缓冲电容；但电容会减慢开关速度、增加驱动损耗，需谨慎权衡。

3.栅极保护与误导通抑制

1700V 高压场景下，高 dV/dt 极易通过米勒电容耦合引发误导通，甚至桥臂直通，必须配置多重保护：

有源米勒钳位

半桥、全桥等桥臂拓扑强制配置，优先选用集成米勒钳位功能的驱动芯片；也可采用外置三极管分立方案。

作用：器件关断状态下，主动将栅极钳位至低电位（接近 0V 或负压），为米勒电容的耦合电流提供低阻抗泄放路径，彻底抑制桥臂高压侧开关时的低压侧误导通。

栅极双向 TVS 箝位

在栅源极间就近并联双向 TVS 二极管，将栅极电压瞬态过冲 / 下冲箝位在安全区间（正向≤20V、负向≥-10V）。

选型要求：TVS 响应速度＜1ns，寄生电容尽可能小；摆放位置必须紧贴器件引脚，避免走线寄生电感削弱箝位效果。

负压驱动冗余设计

针对高干扰、高母线电压场景，负压驱动是抑制误导通的最终保障；需保证负压电源稳定，避免负载突变时负压跌落失效。

4.隔离驱动芯片核心参数选型

1700V 高压场景必须采用电气隔离驱动，芯片参数直接决定系统抗干扰能力与绝缘安全：

共模瞬态抗扰度（CMTI）

是高压 SiC 驱动的核心指标，最低要求 ≥100kV/μs，车载、工业严苛场景优选 150~200kV/μs。

必要性：1700V 母线开关时 dV/dt 可达 50kV/μs 以上，CMTI 不足会导致隔离屏障受冲击、驱动输出逻辑错乱，引发桥臂直通炸管。

隔离耐压与安规合规

驱动芯片的隔离耐压需满足系统绝缘等级，1700V直流母线场景，基础绝缘需≥2500VAC，加强绝缘需≥5000VAC。

优先选用通过 UL、VDE 安规认证的驱动芯片，同时保证 PCB 上高低压侧的爬电距离、电气间隙符合安规要求。

传播延迟与通道匹配

半桥 / 全桥拓扑需选用通道间传播延迟差小的芯片，典型延迟差需＜50ns；降低死区时间裕量，提升系统效率，同时避免时序偏差导致的直通风险。

集成保护功能

优选集成退饱和（DESAT）过流保护、软关断、过温、VCC 欠压的驱动芯片，减少外围器件，提升可靠性。

5.过流与短路保护设计

SiC 器件短路耐受时间远短于 IGBT（1700V 等级典型仅2~3μs），国产器件普遍偏短，保护设计需更快、更保守：

退饱和（DESAT）保护

是高压 SiC 过流保护的主流方案，要求检测响应时间＜1μs，远快于 IGBT 的保护响应速度。

需配置软关断机制：保护触发后缓慢关断器件（逐步增大栅极电阻），避免高压大电流下硬关断产生的极高电压尖峰击穿器件。

国产器件适配：可适当调低 DESAT 检测阈值，缩短空白时间，提前触发保护，预留更充足的关断裕量。

硬件级快速过流检测

大功率场景可配合分流器、高频电流互感器实现硬件过流检测，直接触发驱动关断，比软件保护速度更快，适配 SiC 的短耐受时间特性。

短路保护降额原则

禁止让器件工作在短路耐受极限附近，保护电路需保证在器件额定短路时间的 1/2 以内触发关断。

6.PCB 布局与寄生参数管控

高压高频场景下，寄生参数是引发振荡、尖峰、干扰的核心根源，布局优先级高于器件参数选型：

驱动回路最小化

驱动芯片、栅极电阻、TVS、米勒钳位等器件，必须紧贴 SiC MOSFET 的栅极与开尔文源极摆放，驱动走线尽可能短、宽，最小化驱动环路面积，降低寄生电感。

地平面分割与独立走线

严格分离功率地与驱动地，功率大电流回路不走驱动地平面；开尔文源极走线独立，单点连接至驱动芯片的信号地，避免共阻抗干扰。

功率回路寄生电感抑制

主功率回路（母线电容→器件→功率地）环路面积尽可能小，母线高频去耦电容紧贴器件漏源极摆放，降低母线杂散电感，减小开关电压尖峰，间接降低栅极应力与干扰。

安规间距管控

高低压侧（原边驱动与副边功率）之间的爬电距离、电气间隙，需严格对应电压等级与污染等级，满足 GB7251、IEC61800 等标准要求，避免高压击穿绝缘。

7.面向国产器件的专项设计考量

针对国产1700V SiC MOSFET 的工艺特性，需额外增加适配设计，避免直接照搬进口器件方案：

栅氧可靠性降额设计

驱动电压、温度应力均留足裕量：正向驱动 18V左右，负压- 5V左右，避免极限参数运行；优先保证栅氧长期寿命，其次追求导通损耗最优。

参数一致性兼容设计

国产器件不同批次的阈值电压、寄生电容、导通电阻存在一定波动，驱动设计需预留调试余量：比如栅极电阻预留可更换的焊盘位置，死区时间可通过软件配置，适配批次差异。

多管并联均流设计

大功率并联场景，需保证各器件驱动路径长度一致、栅极电阻参数一致，保障驱动同步性；避免因驱动不同步导致的电流分配不均、单管过流失效。

可靠性验证匹配

批量应用前，需针对国产器件做专项验证：栅极电压过冲 / 下冲测试、高低温下驱动阈值测试、长期老化栅压漂移测试、短路保护验证等，确认驱动方案与器件的匹配性。

核心设计原则总结

国产 1700V 以上 SiC MOSFET 的驱动设计，切忌盲目追求极致开关速度与最低损耗，需以栅氧可靠性、高压绝缘安全、抗干扰能力为核心底线，通过参数降额、多重保护、精细化布局保障系统长期稳定，在此基础上再优化开关性能与系统效率。

碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOd4ZYepG38axcj7qnsicic76kvC28P0Odviaj3ibHVh4dP18DAib2u18TWDJVpicI5ygzC9R1FPbibjnkAYGicLiaepWlhibViaRj8vuiaphs/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=7)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMATdZkMbZM5E4ErGZHooa7Uibtb5sW7uIgPbblhmOmCG3qycPaW6vE0E1A75Vtq4Dbo94vCph1iasjibtbdSFzLDooQTtOqhA5Bk/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=8)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

[TOLT封装的SiC MOSFE产品及应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539705&idx=1&sn=db2369c1e63b225addf08cc23cc0ebd2&scene=21#wechat_redirect)

  

[TOLL和TOLT封装的SiC MOSFTE应用对比](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539428&idx=1&sn=6bdc5cb8a49590ef8d291338747a79b6&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPlDTy1Zib8iamO0iaI9mmMupkwMXB4QtjNnMhTMPSvhBIHh8Hz3xiajdrcdB6XHm2vJSIUFBOKwgicketMS4TmSuicZgXENiaI1RU0wE/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=9)

[10种封装的碳化硅MOSFET和11种封装的SiC功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247533514&idx=1&sn=5a094030fb5da795f6e432cf3bcc332c&scene=21#wechat_redirect)

  

[HPD封装的SiC功率模块的产品介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517124&idx=1&sn=35085cc392a067787930bf863a134590&scene=21#wechat_redirect)

  

[MD3系列的三相全桥碳化硅（SiC）功率模块的产品及应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247519655&idx=1&sn=079d26a795b2ff807b28e5736e8b06d9&scene=21#wechat_redirect)

  

[MEK6封装三相全桥碳化硅模块在载人小型飞机电调系统的突破性应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517193&idx=1&sn=684c24f1755b073b770c1c7ab9cc50ad&scene=21#wechat_redirect)

  

[62mm封装的SiC功率模块的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247515543&idx=1&sn=9b90b76843b8453c434ffd9ada6cbd7f&scene=21#wechat_redirect)

  

[DCM封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517694&idx=1&sn=1679554149297473be8c46272265d3a0&scene=21#wechat_redirect)

  

[Econodual封装1200V1000A的SiC功率模块产品介绍及仿真测试](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513868&idx=1&sn=0dc0d8b427d47c622018c5d97ffc080a&scene=21#wechat_redirect)

  

[34mm封装碳化硅MOSFET半桥模块，助力工业电源（焊机逆变、感应加热设备、高频逆变器、不间断电源）的高效化和小型化](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247507568&idx=1&sn=19b012f5ecd5e3f9bbcc07551f73f03e&scene=21#wechat_redirect)

  

[Easy封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517622&idx=1&sn=d7ae98ac554700ccdf005e03e189705e&scene=21#wechat_redirect)

  

[SM8贴片塑封SiC半桥模块，具有顶部散热层，集成了NTC温度传感器，适合紧凑、轻便、高效率的应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517087&idx=1&sn=2aa39b989036cb20954d564dd5ad19a8&scene=21#wechat_redirect)

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMibIUG8AMZ11zNkcwlGqQytiaD1yuic5iaOXx93zibQpogC8PKjI5DU8K3w6OPMnuxKRHiaSEnUzXFbZAiaqQT82caibib7rKxgDatjicu4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPSN85aqM9RXppWvHCibX9txQvvxUsMsU4t3fHTgshrl3bfGs2pWEbWdjWL5D375nz42ibtd9w9VP99iaYj2Bib99z6yFOibt7LbbW8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=31)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPnibe5L4TemUsquibEM7gVMDNmrAsCjpRyB95zLL2L2WAMicQaREeoWqUibkxFySyI4LE2QGsrjPEJHj4fmzmusfFNMXTo7F2BPicg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)