# SiC MOSFET器件在‌eVTOL飞行器的应用及发展趋势


> 原文地址: [https://mp.weixin.qq.com/s/FrVVO\_mCFQc\_mwtJuYOEPQ](https://mp.weixin.qq.com/s/FrVVO_mCFQc_mwtJuYOEPQ)

低空经济是新经济蓝海。

以eVTOL（电动垂直起降飞行器）为代表的新型航空器成为全球低空经济角逐的焦点，有望成为万亿级产业新赛道。未来，随着eVTOL的制造和运营成本规模化后，花5分钟、60元“打飞的”的跨城交通新模式，将逐步走进人们的日常生活。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEicn3njDs6kZyHxkjXCLOiclRUbrlVyL8TCibM5jibBTlkvL8kPKzExcNjicw/640?wx_fmt=png&from=appmsg)

一‌. eVTOL飞行器发展趋势

‌eVTOL飞行器（电动垂直起降飞行器）的发展趋势主要体现在技术创新、市场需求、政策支持和商业化应用等方面。

技术创新

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEic9JoJoZb7vV7erssC9pYEMicdhlmmLmLrWzFm9yXiaBxaUrUOCXZqod3A/640?wx_fmt=png&from=appmsg)

eVTOL飞行器的核心技术在于其动力系统，主要包括电机和电控系统。由于eVTOL飞行器需要在紧凑的空间内提供强大的动力输出，因此对电机的功率密度要求极高。为了满足这些要求，研发高性能磁性与导电材料、优化电机设计和制造工艺、借助先进仿真技术进行精细化设计以及创新散热技术成为关键。此外，高功率密度电机技术的应用有助于提升飞行器的飞行速度、爬升能力和续航里程等性能指标‌。

市场需求和政策支持

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEicL7kLdLO0GtdPtEQicNyEoeXH4cr8c0f5ibwokIM5j01FQicezlaZRd9Cw/640?wx_fmt=jpeg&from=appmsg)

eVTOL飞行器的市场需求巨大，特别是在城市空中交通（UAM）领域。随着城市交通拥堵问题的加剧，eVTOL飞行器作为一种新型交通工具，能够提供高效、便捷的出行方式。政策方面，2023年12月中央经济工作会议首次将“低空经济”列为战略性新兴产业，随后国家发改委成立了低空经济司，进一步推动了低空经济的发展。各地政府也纷纷出台相关政策，支持eVTOL飞行器的研发和应用，预计到2026年，中国低空经济规模有望突破万亿元‌。

商业化应用和产业链发展

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEicfdkck0K6LyfarnlAfvbmgPPZxCgFWmmMsgQfOhca7RvULiapzeFib8ag/640?wx_fmt=jpeg&from=appmsg)

eVTOL飞行器的商业化应用正在加速推进。全球首款具备无人驾驶载人eVTOL完整商业运营资质的公司已经出现，标志着eVTOL飞行器正式迈向商业化运营阶段‌。此外，多家企业如沃飞长空等在技术突破、生态共建和场景落地等方面取得了显著进展，推动了城市空中交通网络的建设‌。产业链方面，低空经济供应链已形成“上游自主突破、中游协同攻关、下游标准引领”的全链条发展格局，以eVTOL和无人机整机制造为核心，产业链呈现技术快速迭代与订单落地的产能扩张态势‌。

二. SiC MOSFET器件在eVTOL中的应用优势及场景  

SiC MOSFET器件凭借其高耐压、低损耗、高频特性等优势，成为eVTOL电驱系统的核心器件，对动力系统的效率、功率密度、轻量化及可靠性提出严苛要求，具体需求如下：

1\. 高效率与长续航：需降低开关损耗和导通损耗，提升能量转换效率（目标>98%）。

2\. 轻量化设计：减小散热系统体积和功率器件重量，提升载重比（目标功率密度>20kW/kg）。

3\. 高压平台适配：支持800V及以上电气架构，降低线缆重量30%。

4\. 极端环境可靠性：需耐受高海拔低温、强振动、高湿度等复杂工况，寿命>15年。

  
eVTOL（电动垂直起降飞行器）作为低空经济的核心载体，其电力电子系统的性能直接决定了飞行器的航程、载重和安全性。SiC MOSFET器件凭借其：耐高温（200°C 以上）、高开关频率（>100kHz）、低导通损耗（RDS (ON) < 10mΩ@1200V） 等特性，成为 eVTOL 电力系统的关键使能技术。

1\. 电机驱动系统

1.1 多电机冗余架构

技术需求：eVTOL 通常采用 6-12 个分布式电机（单机功率 60-150kW），需实现N+1 冗余控制以确保飞行安全。

SiC优势：高频控制：支持 20kHz 以上 PWM 频率，提升电机动态响应速度（电流调节精度 < 1%）。

高可靠性：耐 150°C 结温，配合银烧结封装技术（热循环寿命 > 10^6 次），满足航空级可靠性要求。

典型案例：Joby Aviation S4 采用 12 个电机，每个电机配备基于英飞凌 CoolSiC™ MOSFET 的半桥模块，系统效率提升至 98.5%。

1.2 高功率密度逆变器

拓扑创新：三电平飞跨电容拓扑可将功率密度提升至 60kW/kg（传统硅基方案仅 30kW/kg）。

设计要点：寄生电感抑制：采用 DBC 基板 + 铜柱互连技术，将回路电感降至 5nH 以下。

EMI 优化：通过主动门极控制将 dv/dt 限制在 50V/ns 以内。

2\. 电源管理系统

2.1 高压快充模块

技术指标：支持 800V/350kW 超快充，充电时间 < 15 分钟。

SiC方案：图腾柱 PFC：采用 1200V SiC MOSFET器件实现99%效率，功率密度提升40%。

LLC谐振拓扑：开关频率提升至 500kHz，磁芯体积减少 60%。

2.2 多电压域转换

DC-DC架构：48V/12V 隔离型转换器，效率 > 96%。

集成化设计：采用IPM模块，集成6个SiC MOSFET器件与驱动芯片，体积缩小50%。

3\. 热管理系统

3.1 高效散热设计

双面冷却技术：SiC MOSFET器件结到壳热阻 < 0.1°C/W，配合微通道水冷板，热流密度可达 500W/cm²。

温度协同控制：通过芯片级温度传感器（如英飞凌CoolSiC™的 Tj 监控功能）实现动态降额。

3.2 冗余热控回路

分布式散热网络：每个功率模块独立配置散热通道，单通道失效不影响整体性能。

三、SiC MOSFET器件的选型要求与关键技术

1\. 电压与电流裕量

标称电压≥1.2倍系统电压（如800V系统选1200V模块），电流能力需覆盖峰值负载+30%裕量。

2\. 动态性能优化 

关注Eon/Eoff（<1mJ）和RDS(on)（如1200V模块≤2mΩ），高频场景需低Qg（<500nC）。

3\. 封装与散热设计 

优先采用AMB基板或双面散热封装（如DTS烧结技术），热阻Rth,j-c≤0.2°C/W。

4\. 可靠性认证

需通过AEC-Q101（器件级）和DO-160（航空级）认证，支持HTRB（高温反偏）测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEicYzRbp4CMfsvklvlxlPYtkIUvH5cC2BX6EcHL7Gg5OlvPGmxMWBaYqw/640?wx_fmt=png&from=appmsg)

四、SiC MOSFET器件产品介绍

1.SiC MOSFET单管

SiC MOSFET的电压：650V-1200V-1700V,电流：5A-150A，封装多样化，插件和贴片封装。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEicia8czKA8icdQj25H3icOfKMjKXZJnsq5QqvxYtCqm6XcQPmHVofpbskFQ/640?wx_fmt=png&from=appmsg)

2.SiC MOSFET模块

SiC MOSFET的电压：650V-1200V-1700V,电流：5A-150A，封装多样化，半桥和三相全桥。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmA5GKic43x14kQ2bJvpujEicJyLiczexagKmueI5OxfkBqfeHFWC7GpyyiaffHrPTEeKekRCRuJBhEyg/640?wx_fmt=png&from=appmsg)

五、总结与建议

SiC MOSFET器件通过效率跃升与轻量化革新，正推动eVTOL从实验阶段迈向商业化运营。SiC MOSFET器件已成为 eVTOL 电力系统的核心组件，其性能提升与成本下降将推动行业进入规模化应用阶段。未来 3-5 年，随着 8 吋晶圆量产、车规级认证普及及国产供应链成熟，SiC 器件在 eVTOL 中的渗透率将突破 50%。建议开发团队重点关注高可靠性封装技术、智能化驱动方案及国产化供应链管理，以应对行业快速发展带来的技术与商业挑战，为全球eVTOL产业树立“中国标准”。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

  

###