# APEC2025:SiC MOSFET应用于AI服务器的5.5kW三相LLC变换器的设计

原创 Yifei Zheng SiC碳化硅MOS管及功率模块的应用 2025-06-29 16:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/AbnV7vJ\_OSFF\_qcPDi9i\_A](https://mp.weixin.qq.com/s/AbnV7vJ_OSFF_qcPDi9i_A)

文章来源：APEC2025(infineon)

作者：Yifei Zheng,Yalcin Haksoz,Deepak Veereddy Infineon Technologies

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_000_b05172d7853e.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_001_6112f8b1d049.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_002_fec4e1b81628.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_003_126f7f76e12a.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_004_9a2bed282764.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_005_4b7cfe92477a.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_006_9953b78acec6.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_007_c5043ea15a98.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_008_1ae5d4380478.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_009_dcbac932d170.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_010_02689f5f5fc8.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_011_13fff59e52f0.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_012_194f3982453d.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_013_f991fc5c9537.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_014_6562aa3c3aa9.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_015_c51e224e0a97.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_016_abd42614233f.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_017_4dd19eb1db1f.png)

![](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_018_1904c39b32f1.png)

注：文字与报告无关

SiC MOSFET 器件在 AI 服务器电源中的应用优势主要体现在以下五个核心方面，结合行业实践与技术突破，其性能提升具有显著的工程价值：

一、效率突破：从量变到质变的能效革命

SiC 材料的临界击穿电场强度是硅的 10 倍，使得 650V SiC MOSFET 的比导通电阻（Rsp）可低于3mΩ・cm²，仅为超结 MOSFET 的 1/3。在 AI 服务器典型的 LLC 谐振拓扑中，SiC MOSFET 通过零电压开关（ZVS）技术将整机效率提升至 96%-98%（钛金能效标准），相比传统硅基方案提升 2%-3%。例如，Wolfspeed 的 6.6kW LLC 转换器在 500kHz 开关频率下实现了 98.5% 的峰值效率，而相同功率等级的硅基方案通常在 95% 左右。这种效率提升直接转化为显著的节能效果 —— 以 10MW 数据中心为例，年省电费可达数百万元。

在部分负载条件下，SiC 的优势更为突出。英飞凌 CoolSiC™ MOSFET 的开关损耗与温度无关，在半载（3kW）时仍能保持 98.5% 的效率，而硅基器件因温度升高导致的导通电阻增加会使效率明显下降。此外，SiC MOSFET 的反向恢复电荷（Qrr）仅为硅基器件的 1/5-1/10，彻底消除了传统超结 MOSFET 在硬开关拓扑中的反向恢复损耗痛点。

二、功率密度跃迁：重构电源物理边界

SiC 的高频开关能力（可达 MHz 级）直接推动无源元件小型化。Wolfspeed 的研究表明，在 500kHz 下运行的 LLC 转换器，其磁性元件体积和重量减少 50%，功率密度达到 128W/in³。国产 BASiC 的 650V SiC MOSFET 在 48V 转 12V DC/DC 模块中，将功率密度提升至 500W/in³，较硅基方案提高 3 倍以上。这种密度跃升使 AI 服务器电源在有限空间内支持更高算力需求，例如单台电源可同时为多个 GPU 集群供电。

封装技术的创新进一步释放潜力。爱仕特的内绝缘型 TO-247-4 封装通过内置陶瓷片优化散热路径，热阻降低 30%，同时省略外部绝缘垫片，使电源体积再缩减 15%。英飞凌的 IM828-XCC 智能功率模块（IPM）将 6 个 1200V CoolSiC™ MOSFET 集成于紧凑封装中，实现 4.8kW 功率输出，功率密度较传统方案提升 40%。

三、热管理革新：突破散热设计瓶颈

SiC 材料的热导率（4.9W/cm・K）是硅的 3 倍，结合双面散热封装技术，SiC MOSFET 可在 175℃结温下稳定运行。这一特性使 AI 服务器电源无需复杂液冷系统，仅需小型铝基板散热器即可满足散热需求。

高温稳定性还带来可靠性提升。英飞凌 CoolSiC™ MOSFET 的栅极氧化层采用深 p 区设计，可承受 3.5-4.0MV/cm 的正向电场强度，在 175℃高温下长期运行的阈值电压漂移控制在 ±200mV 以内。相比之下，硅基器件在 150℃以上时热失控风险显著增加。

四、系统级成本优化：长期经济性凸显

尽管 SiC 器件单颗成本略高于硅基产品，但系统级成本优势显著。高频化使磁性元件数量减少 30%-50%，散热系统成本降低 50%，整体 BOM 成本与硅基方案持平。以英飞凌的 3300W 图腾柱 PFC 参考设计为例，采用 SiC MOSFET 后系统体积缩小 25%，物料清单成本降低 18%。

在长期运营中，能效提升带来的电费节省更具吸引力。假设 AI 服务器年运行 8760 小时，10MW 数据中心采用 SiC 电源后，每年可减少约 200MWh 能耗，相当于 160 吨二氧化碳减排，同时节省电费约 18 万元（按 0.9 元 /kWh 计算）。

五、可靠性跃升：适应极端工作条件

SiC MOSFET 的抗雪崩能力（EAS）比硅基器件高 2-3 倍，可承受 100A 以上的瞬时浪涌电流。英飞凌的 CoolSiC™系列通过优化短路耐受时间（2-4μs）和雪崩能量（>500mJ），在服务器电源的过流保护设计中表现优异。

驱动电路的简化也增强了可靠性。SiC MOSFET 无需负偏置驱动电压即可实现稳定关断，例如 Wolfspeed 的 C3M0060065D 在 500kHz 下无需负压驱动仍能保持 ZVS 特性，降低了驱动电路复杂度和故障点。英飞凌的 EiceDRIVER™栅极驱动芯片通过无铁芯变压器技术实现纳秒级信号传输，进一步提升系统鲁棒性。

六、技术演进：从实验室到规模化应用

当前，SiC MOSFET 已进入规模化商用阶段。英飞凌的 400V CoolSiC™系列在 AI 服务器 AC/DC 转换中占据主导地位，而国产 650V 器件在 LLC 拓扑中的市场渗透率快速提升。国产半导体推出的 1700V SiC 模块将推动高压架构普及，支持 800V 以上服务器电源设计，充电时间较 1200V 平台再降 20%。

随着第三代 SiC 芯片技术的成熟，器件性能持续突破。例如，Wolfspeed 的第三代 650V SiC MOSFET 在 TOLL 封装中实现 15mΩ 导通电阻，同时保持 < 10nH 寄生电感，为下一代高密度电源提供基础。这些技术进展正推动 AI 服务器电源向更高效率、更小体积、更低成本的方向持续演进。

总结：SiC MOSFET 通过材料与工艺创新，在 AI 服务器电源领域实现了效率、密度、散热、成本的多维突破。其技术优势不仅体现在实验室数据，更通过英飞凌、Wolfspeed等厂商的量产方案得到工程验证。随着行业标准（如 80PLUS Titanium）对能效要求的提升，SiC MOSFET 已成为 AI 服务器电源升级的核心引擎，助力数据中心向绿色高效的下一代架构转型。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_019_a52e117dd7c7.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_020_ed32ef927de2.jpg)

![图片](APEC2025_SiC_MOSFET应用于AI服务器的5_5kW三相LLC变换器的设计_images/img_021_fbb43a70fc19.png)