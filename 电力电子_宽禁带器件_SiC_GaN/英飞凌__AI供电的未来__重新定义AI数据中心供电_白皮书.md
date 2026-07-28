# 英飞凌：《AI供电的未来--重新定义AI数据中心供电》白皮书


> 原文地址: [https://mp.weixin.qq.com/s/k3bn1gy5FKiHnkuELGPyVA](https://mp.weixin.qq.com/s/k3bn1gy5FKiHnkuELGPyVA)

文章来源：英飞凌（infineon)

摘要：英飞凌发布的2025年《AI供电的未来：重新定义AI数据中心供电》白皮书，聚焦AI技术爆发式增长下的数据中心供电挑战，系统提出七大核心预测与解决方案，为“从电网到核心”的全链路供电架构变革提供了技术指引。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIhyTjbCb7zcFJhKoJo0mUSPo0JTXEIJNXl1iblXYXAZyp5N6SlaYcC8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIbPmzWdPO3Jtx50ce6SZBRibBRaYT2PKZpPh29xw7ypE4GX7QpvmUibug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RInUxaphib40iaq9euSD2HjuqQuWxyHpbjpW06I6WFf8BOmCjQhSIrUc1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIRcibszVsXFBZZgcIUbwrFhtaxbhNsk8iabibKucEGQxAsBu7LfUqaopcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIiawFibytic6OTQHzjfpOegiaiblsgO04ibsmFEmPtmHib21GTpN2IKKb9TsDw/640?wx_fmt=png&from=appmsg)

一、现代处理器的供电

预测一：垂直供电将成为现代处理器的关键技术

图形处理单元（GPU）以及专用于 AI 负载的处理器（例如，张量处理单元（TPU））正在采用最先进的工艺制程（例如，台积电的 N4P），以在单一硅片上集成更多的晶体管。通过将两片或多片硅片集成到单一处理器中，可以突破特定制程下光刻掩膜尺寸的限制，从而打造更大、更强的处理器。

尽管这些 GPU/TPU 的单位面积功耗仅呈温和上升趋势，但随着芯片尺寸的不断增大、供电电压降至约 0.4 V，其总电流消耗预计将在十年内攀升至 10,000 A。这种极高的电流水平以及对瞬态负载响应的严苛要求，成为电压调节模块（VRM）在 12 V 典型中间总线电压下为处理器供电时，所面临的最大挑战。

传统的横向供电方式采用分立功率级和独立电感，但在如此高的电流下，不仅占用空间庞大，还会在供电网络（PDN）中造成显著损耗。因此，未来电能将通过主板，以垂直供电的方式，传递至处理器背面。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIKEmdibIQdj0ukgTSwaKYy1bSWXF9ssjxsBgM0SmvLrmtZHXLqvEK5rA/640?wx_fmt=png&from=appmsg)

背面垂直供电模块将多相降压电路所需的芯片组和电感集成于一体，是实现垂直供电的基本组成部分。

英飞凌提供从分立功率级到双相、四相垂直功率模块的完整产品组合。图 2 展示了这些产品在电流密度这一关键性能指标方面的演进过程，其中第三代产品的电流密度已达到优异的 2 A/mm²。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIqzEFb8Reujic61EI1tfP86jib2aYBhicSEDzPDkYMRrGKOCOfJNrYW4zA/640?wx_fmt=png&from=appmsg)

英飞凌将其领先的低压硅基 MOSFET 技术（例如，OptiMOS™ 7 系列）与芯片嵌入封装技术及专利 3D 集成工艺相结合，在垂直供电方案中实现了前所未有的功率密度和能效表现。

预测二：服务器主板将采用高压直流供电架构

随着现代 GPU 功耗的持续攀升，以及每个机架中 GPU 集群规模的不断扩大，单机架的功率需求将很快突破 1 兆瓦，甚至更高。当功率水平达到这一量级时，系统架构必须从既有的 48 V 生态体系，转向高压直流供电。

这种从 48 V 总线架构向 800 V 或 ±400 V 架构的转变，预计将在单机架功率达到 200 千瓦至 250 千瓦时出现。以 48 V总线架构为例，此时母排需承载 4100 A 至 5200 A 的电流。

展望未来十年后期，数据中心将逐步过渡到集中式发电与配电架构，通过减少转换级数，实现可扩展的新一代高压直流供电架构。

图 3 展示了基于 800 V DC 的集中发电和高压直流配电的示例。其中，图右为服务器主板。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIu3wakPBR1ksXT9pwIibsjypNVPfiaTyaTsDjJ7WvQ9U9jO1gwca0Ckww/640?wx_fmt=png&from=appmsg)

电子保险丝 / 热插拔功能

未来的服务器主板将直接运行于 800 V 或 ±400 V 电压下，因此，必须引入多项新的功能模块，例如：在服务器主板插入高压直流总线之前执行预充电，以及在服务器主板从 IT 机架移除时，确保开关及时放电，以避免产生危险电压。此外，还需要部署电子保险丝功能，以便在发生故障时快速切断电源。这作为一个重要的安全环节，需要部署在每个服务器主板上。

图 4 展示了基于英飞凌 XDP ™ XDP70x 热插拔控制器与创新型 CoolSiC™ JFET 技术的解决方案。该组合能够在服务器主板热插入高压直流总线时，实现受控预充电，并实时监测电流，在监测到异常情况时，快速断开连接。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RI1Nr5kv87utkvg0sY1ibvTibg5P4pzGyIxvIZjB40OAAcKkACHFxss33Q/640?wx_fmt=png&from=appmsg)

经实验验证，在输入电容为 300 µF 的条件下，可将服务器主板从 0 V 预充电至 800 V。凭借 CoolSiC ™ JFET 技术出色的热稳定性，可在安全工作区（SOA）内，实现较长时间范围（超过一秒）的线性工作。结果如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RI9GVgZmonX0z10iarUQLNtRokREXgu5IiaTRvicDOPdafiaQwicGXzBtjFXQ/640?wx_fmt=png&from=appmsg)

此外，还需在服务器主板有限的空间内，将高压直流输入电压转换为低于 1V 的 GPU 供电电压。英飞凌正在研究两种关键的转换路径：800 V → 54 V 和 800 V → 12 V，作为连接当前服务器主板常用低压域的重要桥梁。在采用三级架构时，先将 800 V 降至 54 V，再经过中间总线转换器（IBC）和 VRM 功率级或背面垂直供电模块进一步降压，可以有效降低供电网络（PDN）的损耗，并支持夹层卡解决方案（IBC 和 VRM 级均位于夹层卡上）；在采用二级架构（800 V → 12 V）时，可以省去一个完整的功率转换级，节省了主板的宝贵空间。

800 V → 12 V 功率转换

为了实现从 800 V 到 12 V 的功率转换，英飞凌开发了一款 6 千瓦演示板，功率密度超过 2300 W/in³。该设计采用对称布局，由两组堆叠式 LLC 变换器组成，并采用矩阵变压器结构。初级侧采用 650 V CoolGaN ™ 技术，次级侧使用40 V 硅基 OptiMOS ™ 6 系列。PSOC ™ MCU 和 EiceDriver ™栅极驱动器负责提供 PWM 和驱动信号。

图 6 展示了该 800 V → 12 V 转换器的拓扑结构与布局。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIh41SPhEQ50UiciaFiagw23gcwo3iacw4ib0Q9Ksmf4hnZClyAanOxiaVuzsg/640?wx_fmt=png&from=appmsg)

在该设计中，磁芯被分成两个对称部分。所有初级和次级 MOSFET 均布置在板顶，以降低液冷热阻。测试结果显示，峰值效率高达 97.4%，满载效率为 96.6%，性能优异。图 7 展示了实测结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIhzHT5X66SKI9pcJVjCcHIhJ2Pb12VIibtNI5cLBNXYd9qAib1GDvHwgw/640?wx_fmt=png&from=appmsg)

800 V → 50 V → 6 V 功率转换

除了上述 800 V → 12 V 方案（需要将高压 IBC 置于处理器附近），英飞凌还探索了另一种组合使用高压和中压 IBC的方案：先将电压从 800 V 降至 50 V，再降至 6 V。

由于 VRM 级的损耗与输入电压的平方成正比，因此，若以 6 V 而非 12 V 切换这些多相降压转换器，可提升效率，提高开关频率，从而改善瞬态负载响应，并减少靠近处理器的电容数量。在 800 V → 50 V 级和 VRM 级所获得的效率提升，可抵消中压 IBC 带来的额外损耗，使整体能效与前一种情景相当，同时提升供电灵活性与瞬态负载响应。图 8 显示了 800 V → 50 V 转换器的拓扑结构和布局。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIBib7SB4sRjMgRL7lKqdmLGJFROHYsX6BprsF6xB9icFz1n7aiaibJY6nvw/640?wx_fmt=png&from=appmsg)

堆叠式 LLC 变换级在谐振频率下工作，峰值效率高达 98.5%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RILibOD3CIkfaDLNpBLPicGHEmhBpibwA4ECibESpTdENqIZyricicuC18OI1g/640?wx_fmt=png&from=appmsg)

随后，中压 IBC 将电压进一步降至 6 V。我们采用混合开关电容转换（HSC）拓扑结构，结合磁能与电容能量传递，实现高能效和高功率处理能力。英飞凌正在开发一款额定功率为 1 千瓦、固定 8:1 转换比的电源模块，用于将现有的 48 V/50 V 电压域转换至 6 V 的中间总线。图 10 显示了该模块及其实测效率曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RI2Wg4lu5dlLia4iccOefqWImYhs9FicwW0X0KibvPcjdnGKicXofLhLItvNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIdyWJib7ribKPywZtibfsPEDvr1PNAmVjCL6O5gquxRic5PVeeUZoMNBCbg/640?wx_fmt=png&from=appmsg)

二、AI 服务器机架的供电

预测三：AI 服务器机架的功耗将超过 1 兆瓦

在针对拥有万亿级参数的超大规模AI模型进行训练时，需要将数千颗GPU集成在同一台机器中，并以同步模式运行。机架之间的数据通信通常通过光通信实现，而 IT 机架内部的高速互连则依赖专用处理器，通过铜缆将每个 GPU 与其他 GPU 相连。由于 IT 机架内部的数据传输速率远高于机架之间，因此，目前的行业趋势是在单个 IT 机架内尽可能多地集成 GPU。相应地，机架架构也从传统的 IT 托盘式设计，演进为功率密度明显更高的刀片服务器设计。

当单个机架集成多达 72 台刀片服务器时，IT 机架的总功率水平将在十年内突破 1 兆瓦。

在如此高的功率水平下，机架内部空间成为主要的物理限制因素。因此，AI 机架将更专注于 IT 负载与高速通信功能，而诸如电源模块、电池备用储能单元以及超级电容托盘等附加功能，将被迁移至安装在主机架两侧的侧柜或放置在附近的辅助机架中。

图 11 展示了这种分离式 IT 机架架构的示例，其中电源模块（PSU）、电池备用单元（BBU）和峰值电流补偿模块（PCS）均置于侧机架内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIPK2aEC3K3M5Uj9kickGfXH6SMSqslC6tsQmJwH7LLW74smvmsARteeA/640?wx_fmt=png&from=appmsg)

预测四：AI 的能耗需求将推动电源架的功率等级突破 100 千瓦

当IT机架的功率等级接近100 千瓦时，由Open Compute Project\[1\]所定义的单相电源供电长期以来一直是业界标准。在过去十多年里，输出功率为 3 千瓦和 5.5 千瓦、输出电压为 48 V 的电源模块一直是主流产品。

基于 240 V 或 277 V 单相交流输入的电源，如今可升级至 12 千瓦，并保持 1U 高度的紧凑尺寸。每个电源架可容纳6 个电源模块（72 千瓦），每个机架最多可配置 8 个电源架（如图 11 左所示）。这标志着数据中心向 1 兆瓦 IT 机架迈出了重要一步。对于功率较低的系统（约 160 千瓦），12 千瓦电源模块还能进一步释放 IT 机架空间，为更多功能模块预留位置。

在这类高功率应用中，功率密度与能效至关重要，12 千瓦 PSU 的设计必须不同于传统的低功率产品。在典型的 20ms 保持时间要求下，电解电容将占据相当大的空间。因此，必须采用一种去耦缓冲电路或功率脉动缓冲电路，以便使电容中的能量几乎可以完全释放利用，直至接近 0V。该电路通常位于功率因数校正（PFC）级和后续的隔离式DC-DC 级之间，其优势在于：即使交流输入出现短暂中断，也能维持 DC-DC 级输入电压的稳定，使 DC-DC 转换器能够针对更窄的输入电压范围进行优化。此外，功率脉动缓冲电路不仅能吸收瞬态负载阶跃，还能以受控的方式，在尽量不增加交流功率的情况下，从交流电网对电解电容进行充电。

为了最大限度地提高功率密度和能效，英飞凌在 12 千瓦 PSU 演示板中采用了多电平架构。所有高压部分均使用新型 400 V CoolSiC™ MOSFET，而次级侧则采用额定电压为 80 V 的 CoolGaN™ HEMT。图 12 展示了该拓扑结构和演示板。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIhibIQkpXqARXhEwylh6iao4mY7rjXP5P5snyrhFmkN5iaTnwmhUhMcmQg/640?wx_fmt=png&from=appmsg)

当单个 IT 机架功率水平提升至 1 兆瓦时，不论是 48 V 电源轨，还是单相电源模块（PSU），都难以在扩展性和可持续性方面继续满足需求。因此，数据中心将逐步从单相 PSU 转向三相 PSU，在侧柜中直接生成高压直流电（如图 11 右所示）。

这些交流电源模块直接接入 400 V AC 或 480 V AC 的三相交流电网。当每个电源架配 3 至 4 个 PSU 时，可提供超过100 千瓦的功率输出，当每个侧柜安装最多 10 个电源架时，IT 机架的供电能力即可达到 1 兆瓦。这一架构将成为迈向集中式发电与配电（详见下一章“预测六”）的重要过渡阶段。图 13 显示了对应的架构，其中三相 PSU 和电池备用单元（BBU）共同向高压直流总线（例，如 800V DC）供电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RI65YPaxqJDNEu5gCIiadul2tdjxbKxibRSibmzvnrDcVDicADjKp4CA3rFw/640?wx_fmt=png&from=appmsg)

英飞凌针对这一类应用提供了丰富的产品组合，涵盖额定电压分别为 1200 V 和 650 V 的 CoolSiC™ MOSFET 产品组合，以及适用于多种双电平和三电平拓扑结构的 CoolGaN™ HEMT，以实现更高的能效和功率密度（见图 14）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIfxV0OVt9lCCiagmicdnwFI7uDBgrNNucRg0DD1rxTibQCQYx4Z6UxBQjQ/640?wx_fmt=png&from=appmsg)

在这种架构下，备用电源通常由锂离子电池接入公共高压直流总线提供。如果数据中心对使用锂离子电池有限制，可采用集中式电池储能系统。同时，通过双转换不间断电源（UPS）（带或不带旁路功能），可以在三相交流配电架构中应对停电事件。

此外，超级电容托盘可用于应对 GPU 负载的动态变化。另一种方案是在 AC-DC 电源模块内部集成功率脉动缓冲电路，以在 GPU 负载脉动时，对交流电网进行有效缓冲。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIxfZhIt16xw8F05TCJaWmqlrv6oAqfTtO3HRVw2xcktbeM25XOUehpg/640?wx_fmt=png&from=appmsg)

三、数据中心的整体供电

预测五：新一代数据中心的功率需求将迈向吉瓦级规模

随着现代 GPU 功耗的不断攀升，以及 AI 计算节点的密集部署，如今新建数据中心的用电需求已达到数百兆瓦级别。在未来几年内，为满足规模日益庞大的 AI 模型对算力的无限需求，预计将出现专门的“AI 工厂”。在同一数据中心园区内，此类设施的用电量将达到吉瓦级，甚至可能超过数吉瓦。多家超大规模数据中心运营商已发布了相关建设计划 \[2,3\]。在训练过程中，大型 GPU 集群的负载剧烈波动，所引起的电力供应与电网稳定性问题，成为确保这些数据中心安全运行的重大挑战。要应对这些挑战，必须在多级功率转换环节上，实施瞬态负载的主动缓冲。此外，在设施层面部署大型电池储能系统（BESS）也将成为必需措施，以确保整个数据中心保持近乎恒定的负载曲线。

英飞凌致力于沿着整个功率转换链路，支持超大规模数据中心运营商及系统供应商，共同实现可持续、高效且具经济可行性的电力解决方案。功率半导体正是这些工作的核心所在，其目标包括：  

• 将任意能源形式转换为处理核心电压所需的负载电流

• 构建可扩展的功率架构，以支撑从兆瓦级到吉瓦级的系统部署

• 通过提升整个电能传输链路的能效，最大限度地降低运营成本

• 在各功率转换级，针对最苛刻的负载波动，确保系统可靠性

英飞凌通过丰富的产品组合来支持上述目标，覆盖从 400 V 至 3.3 kV 各类封装形式的 CoolSiC™ MOSFET、用于保护电路的 CoolSiC™ JFET，到电压等级为 80 V 至 650 V 的超高速开关 GaN HEMT，再到能够向处理器传输数千安培电流的先进硅基解决方案（例如，IBC 和背面垂直电压调节模块）。这些产品在苛刻要求下亦能保持高品质与高可靠性，是确保吉瓦级数据中心实现无障碍稳定运行的关键基础。

预测六：配电将从交流系统转向直流微电网

要在AI数据中心实现极致能效，必须对整个配电链——从发电到用电——进行全面优化。当功率需求逼近吉瓦级时，就必须建立一种全新的配电基础设施，以满足能效与运维成本需求。直流微电网被普遍认为是最有潜力塑造未来AI 数据中心格局的架构方案，它代表着对数据中心基础设施内部电能管理方式的根本性重构。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIGfllTrC3mOrIAAaW1SNpSaRh5AuVBpHsdFn1qGstpALFzmoaz0SJicw/640?wx_fmt=png&from=appmsg)

在这种情景中，电能将由中压交流电网（10-35 kV 交流电）直接集中生成，并以高压直流形式分配，从而在能量传输路径中消除传统架构中的 AC-DC 电源模块。因此，在服务器机架内部，只需执行 DC-DC 转换，即可实现更高效、更紧凑的功率转换，甚至可以如“预测二”中所述，将其直接集成到服务器主板级。直流微电网由此成为数据中心的核心基础设施，通过高压直流总线向服务器机架供电，形成一种可扩展、面向未来的供电架构。图 15 展示了该方案示例。

在这种情景中，新兴的固态变压器（SST）技术将发挥关键作用。固态变压器能够直接从 10 kV-35 kV 的中压交流电网接收电能，并提供稳定可调的高压直流配电，为服务器机架供电。与传统的中压变压器相比，固态变压器具备更高的紧凑性和更轻的重量，可布置在靠近服务器机架的位置，从而最大限度地降低传输损耗。每台固态变压器的输出功率预计可达 2-10 兆瓦。这种固态变压器在效率、功率密度以及——特别重要的——可扩展性方面，都将带来显著优势，使吉瓦级数据中心具备前所未有的灵活性。

通常，固态变压器采用输入串联 / 输出并联（ISOP）系统，中压电网的每一相都连接着一串由多个串联功率转换模块组成的模块链。中压交流电网的电压等级因国家与地区而异，一般在 10 kV AC-35 kV AC 范围内。固态变压器包括一个整流级和一个隔离式 DC-DC 转换级。所有输出均汇聚到一条直流总线（例如，800 V DC）。每个转换单元均可使用双电平或三电平拓扑结构。英飞凌为此类应用提供了广博的 CoolSiC™ MOSFET 和 IGBT 产品组合（电压范围覆盖 750V-3300 V），其中高压等级产品尤为关键，可通过减少所需子系统的数量，显著降低固态变压器系统的复杂性。图 16 展示了此类固态变压器系统。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIXic7cCa2yPyK6n5txmW81ew5Kk5wXROmIJ4LcMjds3gMWP4wEZN3Uww/640?wx_fmt=png&from=appmsg)

由于固态变压器本身具备电压调节能力，并可在发生故障时，与电网快速断开，我们预计其下游将采用固态断路器（SSCB），作为保障安全性和可靠性的关键组件。凭借快速关断能力，固态断路器能在相对较低的故障电流下，实现故障隔离。CoolSiC™ JFET 器件是执行此类任务的理想选择。将固态变压器、固态断路器以及后续 DC-DC 转换级相结合，即可构建出一条从电网到核心的全半导体功率转换链。

直流微电网架构的另一大优势是，它可在高压直流层面直接连接分布式能源（DERs），无需再经过 DC-AC 和 AC-DC功率转换。此外，其他辅助系统（例如，暖通空调（HVAC）和用于液冷的冷水机组）也可适配直流输入，进一步减少因多级功率转换而带来的损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIkQA59cf7r24znvz5YDf0XC6GlGq1CCsh3EhUJWkCRprLjdBic58PKQw/640?wx_fmt=png&from=appmsg)

直流微电网将成为 AI 平台的关键推动力，特别是在数据中心 AI 工作负载不断增加的背景下。该系统可显著提升能效与可靠性，同时优化数据中心的空间利用。此外，直流微电网将使数据中心能够应对更高的功率负载，并支持更高的电压等级，这两点对于满足先进 AI 计算在密度和能效方面的要求至关重要。

直流微电网为可持续 AI 数据中心提供了可全面满足其目标的架构方案：

• 无缝集成分布式能源资源

• 提升 IT 机架功率的可扩展性，以满足新一代 GPU 的能耗需求，同时突破空间限制

• 实现端到端的最高能效，最大限度地减少能量传输损耗和冷却需求

• 显著降低碳排放足迹

预测七：可再生能源将成为满足 AI 数据中心增长能耗需求的关键

没有电力，就没有 AI。根据国际能源署（IEA）的预测，AI 是未来十年全球电力需求增长的三大驱动因素之一：在全球范围内，超大规模数据中心的迅速扩张、全球生活水平提高所带来的空调使用量增加、全球变暖导致的气温上升，以及交通运输领域的电气化进程，都将推动全球电力需求的增长速度达到整体能源需求增幅的 6 倍 \[4\]。

在数据中心高度集中的地区，电力供应已趋于紧张。例如，在爱尔兰以及美国部分州（例如，弗吉尼亚州），数据中心的用电量已占当地总电力消耗的 25%\[5\]。在全球范围内，数据中心所使用的电力中，来自可再生能源的比例正逼近 50%\[6,7\]。要支撑下一轮 AI 的爆发式增长，电力必须以可持续的方式获取，不能再单纯依赖化石燃料。因此，AI 数据中心必须在发电体系中，深度整合可再生能源与其他清洁能源。

展望 2026 年及以后，英飞凌预计：

1\. 若要在未来五年内彻底摆脱对化石燃料的依赖，AI 数据中心必须采用可再生能源。超大规模数据中心运营商将通过投资本地自建发电设施，以及与公用电网签订购电协议（PPA），进一步整合其数据中心的可再生能源和电池储能系统。太阳能、风电与燃料电池将成为主导性可再生能源，并在未来十年及之后，在部分地区逐步引入地热能。例如，支持一个 1 吉瓦级数据中心的运行，约需 8 平方公里的太阳能电场。

2\. 核电和小型核反应堆（SNR）未来将稳定供应零碳能源 \[8\]。未来的竞争焦点将是谁能更快地获取清洁能源，在十年内，由于可再生能源的部署周期远短于核电，前者将保持领先地位。

3\. 非可再生能源仍将发挥作用：尽管非可再生能源（例如，天然气）在满足 AI 能耗需求方面仍将发挥一定作用，但全球趋势将聚焦于推动数据中心低碳化，特别是在政策监管严格的地区。

不论未来采用何种能源形式，英飞凌都将凭借其完善的产品组合，确保电能以尽可能低的损耗，传输至 AI 数据中心。在最优架构下，将高效、可靠的功率半导体器件与低损耗拓扑结构相结合，将成为以清洁能源为 AI 数据中心供电的关键。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIof6gTay5H1PiamVyaj9MpopTwlggxkwxCEeps9nkkgJ4MschfGAQ1AA/640?wx_fmt=png&from=appmsg)

结论

展望 AI 供电的未来，整个行业正处于一个关键的转折点——许多根本性问题亟待解决，例如，是否应将数据中心的供电方式从传统的交流配电转向高压直流架构等等。随着 AI 数据中心的功率需求持续攀升，服务器主板功率已超过 10 千瓦，服务器机架功率已突破 1 兆瓦，整个数据中心的用电量正逼近吉瓦级别，如何在这种情况下，实现高效稳定的供电，已成为业界面临的重大技术挑战。为了应对这些挑战，必须依托能够处理复杂功率转换过程的先进半导体解决方案，同时不断提升能效、功率密度、鲁棒性与总拥有成本表现。

英飞凌正以系统化视角应对这一系列挑战，提供“从电网到核心”的完整系统解决方案。正如本白皮书所述，AI数据中心的架构即将在未来几年迎来深刻变革。这场变革的驱动力在于：为了满足处理器不断增长的功耗需求——这些处理器正推动着物理 AI 应用（例如，ADAS 和类人形机器人等复杂场景）的发展。为此，开发新一代电源管理解决方案，包括固态变压器（SST）和固态断路器（SSCB）等新型器件，将成为构建未来高压数据中心架构的关键。

展望未来，整个行业必须持续推动功率半导体技术与系统设计的创新，以满足 AI 技术在处理器、服务器机架乃至整个数据中心层面日益增长的功耗需求。唯有如此，才能在技术、环境与经济三者之间取得平衡，以负责任且可持续的方式推动 AI 能力的扩展。这需要在推进 AI 技术发展与最大限度减轻环境影响之间取得最优平衡。

总而言之，AI 的未来与先进电源解决方案的发展息息相关。随着英飞凌在创新和可持续发展领域的持续投入，我们将看到更多能够满足 AI 数据中心全新需求的高效电源解决方案不断涌现，让 AI 在不牺牲效率与环境友好性的前提下蓬勃发展。归根结底，AI 的成功取决于一个基本事实：AI 的运作离不开高效可靠的电力；没有电力，就没有 AI。

本白皮书展示了英飞凌为 AI 数据中心开发的部分半导体解决方案。如需了解“从电网到核心”各功率转换级的更多先进系统解决方案，请联系您当地的英飞凌销售代表。“英”领 AI 供电未来。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIPWVWvlIDxZ2EdY4E14ujqqWCARibY1woATVTb868hfR0AePJKE53FYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIuDibjo1KGAXtqia3FJD4q1WP7jcsgNGkBjTpGuKwiaxCH4yIyMje74uQw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskPsulPltdlhEPSDdoRf5RIiaGmxoHlHEqFO8qUTUMbiaarPHLbA668c7YHSbyOqnaiaKMOxQvXgLKQA/640?wx_fmt=png&from=appmsg)

注：以下文字与图片报告无关

这份由英飞凌于2025年10月发布的白皮书，系统阐述了在AI算力爆发背景下，数据中心供电体系从“**电网到芯片核心**”将发生的**根本性变革**。报告的核心观点是：为满足指数级增长的能耗需求，未来AI数据中心的供电架构必须在**电压等级、拓扑结构和能源来源**上进行全面革新。

以下是报告核心内容的整理与分析：

### ⚡ 核心架构变革：三层预测

报告的核心逻辑是，AI算力需求正驱动供电挑战从芯片、机架到数据中心层层传导，因此提出了覆盖三个层面的**七大预测**：

层面

核心预测

关键驱动与解决方案

对硬件/器件的需求

**1\. 现代处理器**

**1) 垂直供电**

：电能将从主板**垂直传输**至处理器背面。

芯片尺寸增大、电压降至0.4V，电流将达**10,000A**。传统横向供电损耗和占地过大。

**高电流密度、低寄生电感的封装与集成方案**

。

  

**2) 高压直流主板**

：服务器主板将直接采用**800V或±400V高压直流**输入。

机架功率超250kW后，48V总线电流过大（超4000A）。高压直流可大幅降低传输损耗。

**高压热插拔/电子保险丝**

（如用CoolSiC™ JFET）、**高压DC-DC转换器**（如800V→12V/54V）。

**2\. AI服务器机架**

**3) 机架功耗 >1MW**

：单个IT机架功耗将在十年内突破**1兆瓦**。

集成更多GPU（如72个刀片）。内部空间成为瓶颈。

推动**三相PSU**、**100kW+电源架**和**分离式机架架构**（电源、储能外置）。

  

**4) 电源功率 >100kW**

：单相PSU将演进至**三相PSU**，功率突破100kW。

为MW级机架供电。12kW单相PSU已无法满足扩展性。

**400V CoolSiC™ MOSFET**

用于多电平PFC，**80V CoolGaN™**用于高频DC-DC，以提升密度与效率。

**3\. 数据中心整体**

**5) 功率迈向吉瓦级**

：将出现专门的“**AI工厂**”，用电达吉瓦(GW)级。

超大规模AI模型训练需求。负载剧烈波动对电网稳定性构成挑战。

需要**高性能、高可靠性功率半导体**，以构建可扩展的吉瓦级架构并缓冲负载波动。

  

**6) 交流转向直流微电网**

：**高压直流微电网**将成为核心配电架构。

消除多次AC-DC转换，提升端到端能效。易于集成可再生能源和储能。

**固态变压器**

（SST，用**750V-3.3kV CoolSiC™/IGBT**）、**固态断路器**（SSCB，用**CoolSiC™ JFET**）。

  

**7) 可再生能源成为关键**

：AI数据中心必须深度整合**太阳能、风电**等清洁能源。

电力需求暴涨与去碳化压力。未来五年需摆脱化石燃料依赖。

高效功率转换方案是实现高比例可再生能源接入与利用的技术基础。

### 🔬 关键技术方案与验证

报告不仅提出预测，还展示了英飞凌相应的**技术验证和产品组合**：

**1.处理器供电**：展示了基于**CoolSiC™ JFET**的800V热插拔/预充电解决方案，以及**800V→12V**（峰值效率97.4%）和**800V→50V→6V**两种高效DC-DC转换路径。

**2.机架供电**：详细介绍了**12kW单相PSU**（采用400V CoolSiC™ MOSFET和80V CoolGaN™）和面向未来的**三相PSU解决方案矩阵**。

**3.数据中心供电**：提出了以**固态变压器**和**固态断路器**为核心的直流微电网架构，并展示了覆盖400V至3.3kV的完整**CoolSiC™ MOSFET**、**CoolGaN™ HEMT**和硅基产品组合。

### ✨ 总结

总而言之，这份报告揭示了AI数据中心供电的一场**静默革命**：其最终形态将是一个以**高压直流微电网为骨干**、深度融合**可再生能源**、采用**固态变压器**等新型设备、并最终在**主板级别实现800V直入与垂直供电**的极高效率、极高功率密度的全新体系。**碳化硅（SiC）和氮化镓（GaN）等宽禁带半导体，是构建这一未来体系的基石性技术。**

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrOOk8ZdZuLxW6skegErzNgiay5HKDEK9WcE7W3NamgmuvzI5VvRfcd9w/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrPvm49T0q9ALP7ibEFqtD5YPWGrFqQG43Kyl8fX3tCibBcbh80PuSV9vQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrCFiamvHic3Wqs5VcA6YYZAoPYB8pFia2cc9kAxRzzhrdYWrSsN4rQzVyQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQWvuAXsgdQw8NDgCXrIlTM8xLP00QTINGlFZ8vFqKJukEE52gnvYTQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)