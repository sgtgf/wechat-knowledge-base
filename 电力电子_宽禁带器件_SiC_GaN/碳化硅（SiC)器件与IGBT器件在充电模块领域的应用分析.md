# 碳化硅（SiC)器件与IGBT器件在充电模块领域的应用分析


> 原文地址: [https://mp.weixin.qq.com/s/vJujqP2jEKUQvGhTyzzBGQ](https://mp.weixin.qq.com/s/vJujqP2jEKUQvGhTyzzBGQ)

充电模块介绍  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDDYzpM8ysUlqxzkl31BmlKWZ55C37MONnjaicW3gibHAxw7mTNDtGGYlQ/640?wx_fmt=png&from=appmsg)

充电模块的定义‌：充电模块是新能源汽车的核心部件之一，主要负责将外部电源（如电网、太阳能板等）提供的电能转换为适合电池充电的形式。它通常由几个主要部件组成，包括输入端（整流器、滤波器）、控制部分（MCU、驱动电路、传感器）、输出端（DC/DC转换器、变压器、滤波器）、保护电路（OVP、OCP、SCP、OTP）、通信接口（CAN总线）和用户界面（显示屏、指示灯）等‌。  

充电模块的作用：是实现整流、逆变、滤波等功率变换的基本单元，主要作用是将外部电源的交流电转换为可供电池充电的直流电。

充电模块的分类‌：充电模块可以分为AC-DC交流充电模块、DC-DC直流充电模块、双向V2G充电模块。  

AC-DC用于单向充电桩，这是应用最广泛、最多的充电模块，采用交流电为电动汽车充电，充电速度相对较慢，但成本较低。  

DC-DC应用于光伏对电池的充电，电池对车端的充电，应用在光储充项目或者储充项目中，采用直流电为电动汽车充电，充电速度较快，但成本较高‌。  

V2G充电模块，是要解决车网互动功能或能源电站的双向充电需求。

充电模块应用场景‌：充电模块广泛应用于新能源汽车、储能系统等领域。在新能源汽车中，充电模块负责将交流电转换为直流电，为电动汽车提供充电服务；在储能系统中，充电模块可以将可再生能源（如太阳能板、风力发电机）产生的电能存储在电池中‌。

模块电源的知名厂商：从充电桩的供应关系，充电模块主要分为两类，一是自产自用型，代表企业为：特来电、盛弘股份、科士达等；另一种是供应型，代表企业为：英飞源、优优绿能、通合科技、英可瑞、永联科技、华为、凌康、麦格米特、安世博、易能、苏州新纽元电子...等。

充电模块的功率器件‌：是指用于控制和转换电能的电子元件，能够处理高电压和高电流。‌功率器件‌在充电模块中起着至关重要的作用，主要包括‌功率晶体管（如IGBT）、SiC 器件和功率集成电路‌等‌。

功率器件在充电模块中的作用

‌IGBT‌：主要用于将交流电转换为直流电，具有高电压、大电流的处理能力，适用于高压大电流的场合。

SiC MOSFET‌：具有快速开关特性，适用于高频开关电源和电机控制等场合。

SiC SBD(二极管)：用于整流和保护电路，防止电流倒流。

‌功率集成电路‌：集成多种功率器件和控制电路，提高系统的可靠性和效率。

本文重点浅析下SiC器件和IGBT器件在充电模块中的应用优势和应用领域。

1\. 技术性能对比分析

1.1 碳化硅(SiC)器件核心优势

碳化硅（SiC）功率器件作为第三代半导体材料的代表，在电动汽车充电模块领域展现出革命性的性能优势。其核心优势来源于宽禁带特性（3.3eV，是硅材料的3倍），使器件具有超高耐压能力（击穿场强达2.8MV/cm，比硅高8-10倍）和卓越的热稳定性。在大功率充电应用场景中，SiC MOSFET可实现98%以上的峰值效率，比传统硅基IGBT高出3-5个百分点，这意味着在300亿度累计充电量下，每年可减少约9亿度的电能损耗。

SiC器件的高频特性尤为突出，开关频率可达100kHz以上，比IGBT提升5-10倍，这直接减小了充电模块中无源器件的体积和重量。行业实测数据显示，采用全SiC方案的40kW充电模块，体积可从8755cc降至1350cc，重量从7kg减至0.9kg，功率密度提升6倍以上。对于布局的兆瓦级超充站，高功率密度是解决城市中心场地限制的关键优势。

热管理性能方面，SiC材料的热导率（4.9W/cm·K）达到硅材料的5倍，配合更低的导通损耗（SiC MOSFET的导通电阻仅为同规格IGBT的1/10），使充电模块的散热需求大幅降低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDF7eS7GyibwxbPTic1e4SVuUgPobatNU53YMn1Ofr1eyicKI1SFWyrXGUQ/640?wx_fmt=png&from=appmsg)

 1.2 IGBT技术演进与适用场景

绝缘栅双极晶体管（IGBT）作为成熟的功率半导体技术，在第七代产品中通过微沟槽工艺和薄片加工技术实现了性能突破。华润微电子最新推出的第七代Trench FS Ⅶ系列IGBT，在650V/120A规格下，将导通压降（Vcesat）降至1.55V，总开关损耗（Etotal）较上一代降低15%以上。这一改进使IGBT在中功率充电场景（如20kW以下交流慢充和40kW直流模块）中仍具成本优势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnD6PkSribr0SHPjPiaMPKdcylHOvxozbVGkZC2sDRuXPxibtRsa3yicicN5Cg/640?wx_fmt=png&from=appmsg)

IGBT的鲁棒性优势体现在抗短路能力和电流冲击耐受性上。其导通压降的正温度系数特性更易于实现多芯片并联，在15kW以下充电桩中应用广泛。然而，IGBT的固有开关损耗限制了其工作频率（通常<30kHz），导致充电模块中电感、变压器等磁性元件体积较大。更关键的是其关断拖尾电流问题，在关断过程中产生10-50ms的电流拖尾现象，增加高频开关下的能量损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDLzOEO1lCEBpP9icQSM2OLJicv8tXyBZA5advWKuceZExiageoYqwTx2Dg/640?wx_fmt=png&from=appmsg)

表：SiC MOSFET与第七代IGBT关键参数对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDkiaeaB0XI70KuktFS1SLpHibCDRoLr5WERoDSlxVicKXrVvZ7Ur6HYOlw/640?wx_fmt=png&from=appmsg)

1.3 技术特性对比与互补关系

从材料物理特性看，SiC器件的电子饱和漂移速度（2.7×10⁷ cm/s）达到硅基器件的2-3倍，这直接转化为更快的开关响应和更低的开关损耗。在“柔性充电”系统中，SiC MOSFET的微秒级响应能力可实现对电池充电曲线的精准跟随，将电池充电安全性提升100倍以上。

IGBT则凭借双极性导通机制（电子与空穴共同导电），在大电流密度场景下仍保持较低的导通压降，这一特性使其在成本敏感型充电桩中具有持续生命力。华润微电子通过优化寄生电容参数和背面FS层轮廓，在第七代产品中显著改善了高温特性和并联适配性，使其在光伏储能一体站等环境温度波动大的场景中保持稳定性。

两种器件的成本结构差异显著：相同额定功率下，SiC模块价格约为IGBT的1.8-2.2倍，但考虑系统级优势（散热成本降低30%，能效提升3%），在800V高压平台充电桩中，SiC方案的3年TCO（总拥有成本）已低于IGBT。针对不同功率段采用差异化方案：在40kW以下模块保留IGBT选项，60kW以上超充模块则全面转向SiC解决方案。

2\. 充电模块应用方案

2.1 SiC器件应用方案

超快充解决方案是SiC器件的核心应用场景。在“兆瓦级”超充网络中，基于SiC MOSFET的40kW模块并联方案已成为技术主流。该方案支持200-1000V宽电压范围输出，完美兼容400V平台乘用车和800V高压平台豪华车型（如小鹏G9、保时捷Taycan）。利用SiC器件的功率分时共享特性，可根据车辆电池剩余电量、充电时序和实时电价进行动态调配，提升设备利用率30%以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDuHEP2DAF2P0JJfiaXLpce8mrAMFBVlhk1at20A1rGa2N99cEkq3V8dA/640?wx_fmt=png&from=appmsg)

在双向充放电（V2G） 领域，SiC MOSFET的反向恢复电荷近乎为零的特性，使其成为实现高效能量双向流动的理想选择。光储充放一体化场站采用基于SiC的 “三网融合”架构（充电网+微电网+储能网），通过750V直流母线连接光伏发电、储能电池和充电终端。当电网负荷高峰时，系统可将电动汽车电池中的电能回馈电网，单台车每日可提供10-15kWh的调峰容量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnD4rWN9YFFfrlw3wqdCFzl3CGqltX6CXfXk99DibvUo826IKa52omFGqw/640?wx_fmt=png&from=appmsg)

高防护设计是户外充电模块的关键要求。SiC器件的高温稳定性（工作结温达200℃）与特来电的 全防护”封装技术结合，开发出IP67等级的液冷模块。该方案采用全封闭金属腔体设计，冷却液直接流经功率器件基板，较传统风冷散热效率提升50%，同时隔绝粉尘、盐雾侵蚀。英飞源2024年液冷模块出货超2万台，市占率达90%。

 2.2 IGBT应用方案

在成本敏感型充电站，第七代IGBT仍具应用价值。在二三线城市布局的20kW以下交流慢充桩，采用华润微电子650V/40A IGBT模块，结合三电平拓扑设计，在保持95%转换效率的同时，将模块成本控制在SiC方案的60%。该方案特别适用于夜间谷电充电场景，实现电网负荷的削峰填谷。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDcqwRGxuQAjBLCZjN8RI07kzRpyVH2dhpibuibdkibuEicEUgpvs30ny8Gg/640?wx_fmt=jpeg)

高可靠性要求场景是IGBT的另一优势领域。在公交场站、港口物流车等连续作业环境中，充电设备需满足>98%的可用性要求。智能充电弓系统采用IGBT+快恢复二极管组合，利用IGBT的抗电流冲击能力（短路耐受时间10μs），配合 两层防护主动安全体系（BMS报文解析+充电过程实时监控），在台风、雨雪等恶劣天气下仍保障可靠运行。青岛温馨巴士场站应用表明，该方案使充电事故频率降低100倍以上。

表：不同充电场景下的器件选型建议

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDIh5xkoLP3LawVdzm3AbjTvkZ8J5t4iatUiaz76yozcPBRYhCedJzh85w/640?wx_fmt=png&from=appmsg)

 2.3 混合应用方案（下图产品来源：苏州新纽元电子）

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDL3VlscKFIZDJyj6EpdrQJfKGfnAiaZXKp52zKyibwAWj6Gj9mmqbf8lA/640?wx_fmt=jpeg&from=appmsg)

在柔性充电系统中，采用 “SiC+IGBT”混合方案。该方案在PFC级采用SiC二极管，实现150℃高温下的高效整流；而在DC/DC级使用IGBT模块，利用其电流线性控制能力实现电池的多段恒流充电。通过动态阻抗匹配技术，系统可根据电池SOC状态自动切换充电模式，延长电池寿命30%以上。

针对老旧电网区域的电压波动问题，开发了 “宽电压自适应”充电柜。前级AC/DC采用1200V IGBT模块，利用其过载能力（200%持续10ms）应对电网闪变；后级DC/DC使用SiC MOSFET实现精准调压，在320V-950V输出电压范围内保持±0.5%的稳压精度。该方案在台州“椒江城发”场站实测显示，在±25%电网电压波动下仍能满功率运行。

3\. 设计要点与选型策略

3.1 驱动设计与开关控制

SiC MOSFET的驱动设计是发挥其性能优势的关键。

针对栅极负压耐受窄（-5至-10V）的特性，需采用：

1.有源米勒钳位技术：防止关断期间的栅极电压尖峰，避免误导通。

2.负压关断电路：推荐使用-3至-5V偏置电压，提高抗干扰能力。

3.低环路电感布局：PCB采用Kelvin连接，源极寄生电感<5nH，抑制开关振荡。

死区时间优化直接影响系统效率。

SiC MOSFET的开关速度极快（<50ns），需配合传输延时<50ns的专用驱动芯片。在800V/50kW模块设计中，死区时间可从IGBT系统的2μs缩短至200ns，减少桥臂直通风险的同时，提升有效输出时间15%。

针对串扰问题（Crosstalk），罗姆半导体提出 “三重防护”策略”：

1\. 栅极肖特基二极管：并联于GS间，箝制负向尖峰（>-6V）。

2\. RC缓冲网络：并联于桥臂中点，吸收dV/dt噪声。

3\. 门极负反馈电容：1-2pF陶瓷电容，抑制米勒电流。

该方案在247封装模块中，将串扰电压从18V降至5V以下，大幅提升系统可靠性。

3.2 热管理与封装技术

热界面材料选择是模块寿命的关键。

40kW SiC模块采用 “AlSiC基板+相变材料” 方案：

1.基板热膨胀系数：19ppm/K（匹配SiC芯片的21ppm/K）。

2.热阻：<0.15K/W（结到散热器）。

3.绝缘耐压：>4kV AC（满足加强绝缘要求）。

封装结构创新方面，TO-247-4引脚封装成为行业趋势。相比传统三引脚封装，新增的开尔文源极引脚将驱动环路电感降低60%（<10nH），使开关损耗进一步降低15%。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDFWcZpicDG6ap04uW1a9QQgibB50HQM5UF1d0oia1oNrDzhGAEDicltm2zQ/640?wx_fmt=jpeg&from=appmsg)

散热路径设计需遵循 “双面散热”原则。

特来电新一代液冷模块采用 “夹心结构”：\[顶部冷板\] - \[SiC芯片\] - \[DBC陶瓷基板\] - \[底部冷板\]。

热阻较单面散热降低40%，配合50%乙二醇水溶液（流速4L/min），可在环境温度45℃下维持芯片结温<125℃。

3.3 拓扑优化与系统集成

高频化设计释放SiC性能优势。

在LLC谐振变换器中，将开关频率提升至300-500kHz（IGBT上限为50kHz），使磁性元件体积减少70%：

1.变压器：采用平面变压器+纳米晶磁芯，损耗降低50%。

2.谐振电容：C0G陶瓷替代薄膜电容，体积缩小80%。

3.输出滤波：利用纹波抵消技术，电感量减少60%。

功率集成模块（PIM）成为技术趋势。安森美推出的EliteSiC PIM系列，将PFC和DC/DC级集成于单一模块，提供9种导通电阻（RDS(on)）选项：

1.输入级：三电平ANPC拓扑，支持800V直接整流。

2.输出级：四管全桥，实现50-1000V宽范围输出。

3.集成度：较分立方案减少50%连接点，提升MTBF 30%。

3.4 器件选型决策模型

1\. 功率等级维度

   ≤20kW：优选第七代IGBT（成本敏感）。

 30-60kW：混合方案（SiC二极管+IGBT）。

   ≥80kW：全SiC方案（支持兆瓦超充）。

2\. 应用场景维度

   公共快充站：40kW SiC模块（97.17%效率）

   驻地充电：20kW IGBT模块（成本降低40%）

   光储充放：双向SiC模块（V2G效率>96%）

3\. 寿命周期成本模型

SiC方案：初始成本×1.8 + 电费×0.97 + 维护费×0.7

IGBT方案：初始成本×1.0 + 电费×1.0 + 维护费×1.0

当充电量>1500小时/年时，SiC方案3年TCO更低。

4\. 市场应用与发展趋势

4.1 市场规模与竞争格局

充电模块行业正经历爆发式增长。2025年，中国新能源汽车渗透率突破50%，公共充电桩总量预计达461.7万台，其中直流快充桩占比提升至42%以上。充电模块需求将突破300万台，市场规模达193亿元，年复合增长率近40%。

竞争格局呈现梯队分化：

英飞源（29.24%）、优优绿能（21.65%）、特来电（15.13%）、通合科技（13.98%），合计占比80%。

盛弘股份、永联科技、英可瑞等，专注细分市场。

星源博锐、凌康等新秀，主攻区域市场。

4.2 技术发展趋势

功率密度持续跃升：

2024年：40kW模块主流（功率密度4kW/L）。

2025年：60kW模块普及（重卡超充）。

2026年：80/120kW模块量产（支持4C超充）。

  

需提前布局80-120kW全SiC模块，其技术难点在于：

散热瓶颈：结到散热器热阻需<0.1K/W。

电磁干扰：开关速率>50kV/μs带来的EMI挑战。

成本控制：SiC芯片占比降至总成本50%以下。

  

全防护技术百花齐放：

风冷技术：正反面灌胶工艺（IP54，成本低）。

液冷技术：全封闭设计（IP67，成本高30-50%）。

独立风道：物理隔离（IP54，噪音待解）。

  

V2G技术路线图：

近期（2025）：光储充放一体化场站。

中期（2030）：家庭V2G驻地设备普及。

远期（2035）：构网型V2G支持电网黑启动。

  

4.3 创新技术融合

AI混合模型赋能智能运维：

寿命预测：结合电化学模型与LSTM算法，预测模块剩余寿命（误差<5%）。

故障预警：分析50+传感器数据（温度/振动/漏电流），提前14天预警故障。

能效优化：基于电价曲线与电池健康状态，动态调整充电策略。

  

构网型（Grid-Forming）技术提升电网适应性：

电压构建：在电网薄弱区域自主建立稳定电压（THD<3%）。

惯量支撑：模拟同步机转动惯量，抑制频率波动（±0.5Hz）。

故障穿越：在电网电压骤降80%时维持并网运行。

表：充电模块功率密度迭代路径

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm92GxQKUF6qkgnZQtqytnDRdnkUKhodENnNQQ5ib82UibpgYt8jgdYGDJkh7upajWEI3cnNTYYkQgg/640?wx_fmt=png&from=appmsg)

5.总结

SiC 器件（SBD+MOSFET+功率模块）与IGBT器件的协同应用，是技术性能、成本效益与市场需求平衡的结果。SiC器件凭借高频高效特性主导超充市场，IGBT则在中低功率场景维持优势。未来，随着SiC成本进一步下降和液冷、智能化技术普及，充电模块将向高功率密度、宽电压兼容、全生命周期低碳化方向发展，为其在新能源充电领域的长期竞争力奠定基础。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskHjBDlpCGJ8vakgP5fQdqEkzM4nJZfIC5QgFfribRYKyjbkqtsIt2eIPXkibANybG66UoupfWrOwVw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskHjBDlpCGJ8vakgP5fQdqEsBrKtVqic7bg0L03u2LcaOD95aUegJVoYxOwib1bEuX4eESgvK7RMrMA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskHjBDlpCGJ8vakgP5fQdqECTcGj3ia0RmTNR8afGnIARTia9BmzdfiadGhabibhxVeBEaUFZX5aHdCew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)