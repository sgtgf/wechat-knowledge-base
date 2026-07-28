# HPD封装的SiC功率模块的应用与设计


> 原文地址: [https://mp.weixin.qq.com/s/-aQ-VnlFLpwCKXNsV2OnDg](https://mp.weixin.qq.com/s/-aQ-VnlFLpwCKXNsV2OnDg)

🔍 HPD封装的技术背景与起源

HPD封装起源于英飞凌对新能源汽车电驱系统的深度技术积累。2015年前后，英飞凌推出第一代HybridPACK™ Drive封装，主要针对硅基IGBT模块设计，旨在满足电动汽车对高功率密度和可靠性的需求。随着SiC功率器件的兴起，英飞凌在2019年推出兼容SiC的HPD封装版本，通过材料优化（如采用高温聚苯硫醚PPS材料）和工艺改进（如双面银烧结技术），使SiC模块的结温耐受能力从175℃扩展至200℃。这种封装形式本质上沿用了IGBT模块的三相全桥拓扑结构，采用灌胶工艺和标准化引脚布局，便于车企在现有电驱动平台上快速导入SiC技术。目前，HPD封装已成为全球功率半导体行业的标准封装之一，被广泛应用于800V高压平台车型和eVTOL航空器等领域。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslwRVicggpfMXPrHGssPx4aKjFCGCic6PTW8Kt9EK29z1EQ71icmWeX2NfrQAMm4VibsCI8GQunf3LulQ/640?wx_fmt=png&from=appmsg)

HPD封装模块外框图

比亚迪半导体在2020年推出的首款车规级SiC模块就是典型代表：1200V/840A三相全桥结构，采用HPD封装并规模化搭载于“汉EV”车型。随后在2022年，该公司又推出第二代HPD封装的1200V/1040A SiC模块，功率密度提升近30%，展示了HPD封装在功率扩展上的潜力。这种封装之所以被广泛采用，一方面因为它能复用已成熟的IGBT模块生产线（如焊接、键合、灌胶工艺链）；另一方面其机械结构和散热设计与传统水冷系统兼容，大幅降低了整车企业的系统重新验证成本。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslwRVicggpfMXPrHGssPx4aKEID2loYqVbuXwQsFVp3yfKGINGbDhOdHVErbF86h76srlJvHc5mNAg/640?wx_fmt=png&from=appmsg)

SiC器件在新能源汽车中的应用优势

然而，随着800V高压平台成为新能源汽车的主流趋势，HPD封装作为“过渡方案”的局限性开始显现。传统HPD模块的杂散电感高达12nH，无法充分发挥SiC器件的高频开关特性；同时其单面散热结构和铜层易剥离等问题，也限制了高温运行可靠性。这促使行业在2023年后加速向半桥模块转型。

⚡ HPD封装模块的核心优势

HPD封装模块的特点

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLnu57BEnoXiaAWMZlykmQJqtGd5BEem48qIPKziaPrC5VRha8Nv4LAcaA/640?wx_fmt=png&from=appmsg)

HPD模块实物内部图

①. AlN+AlSiC散热，最高工作结温175℃；

②. 第三代模块寄生电感低于10nH，比现有模块小50%以上，降低开关损耗；

③. 参数范围：

                  VDS：650~1700V

                     ID：400~1000A

          RDS(on) ：1.3~6.5mΩ

HPD封装模块的产品介绍

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLCMwBekIiaWcVcBU4FgN8JnQtKSQ4iaicicLzqpQJ2o9icEb8OH5VFAic1HvQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLuv4m96gtKhfCEKdaB6J2rFIib6X6P9NT17t8KMiayTJFH1EEpMYXNXhg/640?wx_fmt=jpeg&from=appmsg)

产品实物图（标准款和长端子款）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLTJL1hmkvKt4sV98CdpTA4zEHfIu1WS5o73TZRy9m26WrbQRhflYYng/640?wx_fmt=png&from=appmsg)

产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLWuaicc88fap0egmQvSV1bMmWtZMuzERXLRS0I1UM5D9FyP2wQtHAU7Q/640?wx_fmt=png&from=appmsg)

产品尺寸图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLBTRbHicu7jvRLtHPs3CIRg3GhoKLpV3sbz2QSRyG5cGxI38ROeb2H6g/640?wx_fmt=png&from=appmsg)

平底板产品尺寸图

尽管面临新型封装技术的竞争，HPD模块仍在特定领域保持独特价值，其优势主要体现在五个方面：

1\. 高功率密度与低寄生电感

HPD封装采用紧凑的平面设计，模块体积较传统封装缩小20%，同时通过优化内部布线和键合工艺，将寄生电感降低至8nH以下（第三代HPD模块寄生电感低于10nH，比同类产品小50%以上）。低寄生电感可显著降低开关损耗和电压尖峰，允许更快的开关速度，提升系统效率。例如，钧联电子的HPD全桥SiC模块通过双面银烧结工艺，寄生电感低于10nH，功率循环寿命大幅提升

2\. 耐高温与高效散热

HPD封装支持SiC模块的高结温运行。英飞凌第二代HPD封装（HPD Gen2）的SiC模块持续工作结温为175℃，短时扩展结温可达200℃，累计持续时间100小时，满足汽车频繁加速等极端工况需求。其散热设计采用直接水冷结构（Pin-Fin或Wave散热基板），配合AIN+AlSiC陶瓷基板，热阻较传统封装降低30%以上，可快速导出芯片热量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLdIPXwEKHLTeyvjbbFOknCriauJJLSIfEc7HY8lQmVvgWlYSwbXQNRBw/640?wx_fmt=png&from=appmsg)

针对SiC芯片的高温工作特性，新一代HPD模块通过双面烧结工艺和AMB活性金属钎焊基板实现热性能突破。以比亚迪1200V/1040A模块为例：

① 芯片下表面采用银烧结层，导热率比传统焊接提升10倍，可靠性提高5倍以上

②芯片上表面同样使用烧结工艺，使工作结温提升至175℃

③采用Si₃N₄-AMB陶瓷基板，铜层剥离强度比普通DBC基板提升3倍

3\. 高可靠性与长寿命

封装工艺采用银烧结技术替代传统焊接，提升芯片与基板的连接强度，可承受超过1000次温度循环（-40℃至175℃）而无明显退化。例如，爱仕特的HPD封装SiC模块通过AQG-324车规级可靠性认证，在新能源汽车电驱系统中稳定运行。

4\. 兼容性与灵活配置

HPD封装支持IGBT与SiC器件的混合设计（如英飞凌的Si-SiC混合模块），允许客户在同一平台上灵活选择器件类型，平衡成本与性能。此外，封装接口标准化（如PressFIT信号端子），便于与现有驱动电路和散热系统兼容，降低设计复杂度和成本。

5\. 高功率密度平台扩展性

HPD封装的标准化引脚布局使其具备灵活的功率扩展能力。通过增加芯片并联数量或采用更大尺寸芯片，可在同尺寸封装内实现功率升级。例如比亚迪第二代SiC模块（1040A）较第一代（840A）功率提升30%，适配不同级别电驱平台。

🚗 HPD封装的核心应用领域

1\. 新能源汽车主驱逆变器

HPD封装目前仍是中高端电动车电驱系统的优选方案，特别适用于400-800V电压平台。其三相全桥结构可直接替换原IGBT模块，简化系统重构。例如比亚迪汉EV、唐DM-p等车型采用自研HPD-SiC模块后，实现续航增加5-8%和零百加速提升0.5秒。但需注意的是，2023年后新上市车型（如蔚来ET9）已开始转向半桥模块。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLbpic53joiaicmplzf3E6Tl3MT3jMdO2yb74I3e1dzwgicEyl2Dzb17Rkog/640?wx_fmt=png&from=appmsg)

2\. 800V超充基础设施  

在直流快充桩领域，HPD模块凭借高耐压（1700V）和多芯片并联能力占据主导地位。爱仕特推出的1700V SiC HPD模块支持350kW充电桩应用，其铜底板直接螺栓安装的封装特性，更易适配充电桩的强制风冷散热环境。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLEtvvtYOExaSokkMcYlicVCVHLD9GZD5iaAHIw0eNDJicltv3ZU0X6ZMEw/640?wx_fmt=jpeg&from=appmsg)

3\. 工业电源与轨道交通

针对光伏逆变器、储能PCS及机车牵引变流器等场景，Microchip推出的SP6LI系列1700V HPD模块整合了“Augmented Switching”技术，通过可编程栅极驱动器优化开关轨迹。该设计将电压过冲抑制40%，同时减少电磁干扰，满足了牵引系统对高可靠性>100万小时的要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLR5QicnE273ibzXvqpiarcTtt8kzqrAgTFibMxHicmibH0e0dqVsRpO9WcjcQ/640?wx_fmt=jpeg&from=appmsg)

 下表概括了HPD模块在不同应用场景中的性能要求对比：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslwRVicggpfMXPrHGssPx4aKhjaic5Ity5VWSQibmLWFcnq5TibyErBfDukSAAjmLxff77DZQqmh2KPUA/640?wx_fmt=png&from=appmsg)

HPD模块方案设计的关键要点

1\. 热管理设计

   针对HPD单面散热的固有局限，现代方案主要从三方面突破：

① 基板创新：采用Si₃N₄-AMB活性金属钎焊基板，其热导率（>90W/mK）和抗热裂性显著优于AlN-DBC基板，特别适合SiC芯片的高热流密度工况。

② 散热架构：集成Pin-Fin微水道冷板（如昆芯“太极柱™”），通过湍流强化换热使热阻Rth(j-f)<0.09K/W，支持芯片持续175℃运行。

③ 功率循环测试：需采用多合一水冷测试装置（如PWTCS-X系统），同时监控水温（±0.5℃）、流量（±2%）等参数，确保模块满足AQG324标准中>5万次功率循环的要求。

2\. 封装工艺创新  

 ① 互联技术：双面银烧结取代铝线键合。芯片下表面烧结层热导率可达400W/(m·K)，是传统焊料的10倍；上表面采用铜Clip绑定，较铝线载流能力提升50%。

  ② 密封防护：环氧树脂+有机硅凝胶双重灌封。轩田科技的智能产线通过真空灌胶与固化工艺控制，使模块气密性达<5ppm湿度侵入，满足IP67防护要求。

3\. 电磁特性优化 

   传统HPD模块因换流回路长导致杂散电感大（>12nH），引发开关过压。先进方案通过：

 ①低感布局：采用叠层母排设计，正负极铜板平行叠放，使功率回路电感压缩至<8nH。

②驱动协同：如Microchip的AgileSwitch驱动器，通过可编程开关轨迹（3档di/dt控制）抑制电压尖峰，兼容15-20V驱动电压。

4\. 车规级可靠性保障  

   需通过三重验证体系：

  ① 芯片级：AEC-Q101认证，重点考核Vth一致性（<5%偏差）及高温Rds(on)稳定性。

  ② 模块级：AQG324测试规范，包含-55~175℃温度循环、1500小时高温高湿(85℃/85%RH)测试。

 ③ 系统级：整车振动谱验证（>50g随机振动），确保键合点抗机械疲劳能力。

5\. 产线智能化升级 

   以轩田科技为代表的智能工厂方案融合“4T+1E”技术：

   ① 自动化(AT)：银烧结设备温控±1℃，压力控制±0.5kgf。

   ② 数字化(DT)：MES系统追溯每颗芯片的烧结曲线与测试数据。

  ③ 工业工程(IE)：模块直通率提升至>99.5%，产能达30万只/年。

⚙️ 技术挑战与行业演进趋势

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLiaEUYIy661ABXUvEqSaZefWoibAbcjucLNkuq9MlMrabt5gZPu6ABxKA/640?wx_fmt=png&from=appmsg)

尽管HPD封装仍保持一定市场份额，但杂散电感偏高和双面散热瓶颈正加速其被半桥塑封模块替代。2023年成为技术拐点：比亚迪、蔚来等头部车企纷纷转向半桥方案，其核心优势在于：

① 杂散电感降至3-4nH（较HPD下降75%）

②芯片用量减少25%（北汽案例）

③ 功率循环寿命达30万次（蔚来ET9）

在技术演进层面，HPD模块正沿两条路径进化：

1\. 与新型封装融合：如爱仕特科技的LPD封装的三相全桥模块保留HPD散热底板，采用叠层架构设计，杂散电感仅2.5nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLwWDiano3EbsfdUk5h1fzVRVN5qmtIDpTsmYbGTw5mposPu4yKuZfdkQ/640?wx_fmt=png&from=appmsg)

2\. 专用场景深耕：在充电桩、机车牵引等对封装兼容性要求低的领域，HPD因结构坚固、维护便捷仍具生命力。爱仕特1700V HPD模块已获充电设施企业订单。

未来五年，HPD封装将逐步退出电动汽车主驱市场，但在工业高压领域（>1700V）和存量车型维保市场仍将保有30%以上份额。其技术遗产，特别是AMB基板工艺、Pin-Fin散热设计及银烧结技术，将持续赋能新一代SiC模块的发展。

💎 设计实践启示：

在当前转型期开发HPD模块，建议聚焦三点：

 1. 兼容性预留：如轩田科技的柔性产线同时支持HPD与EasyPACK封装，降低产线切换成本；

2\. 散热极限突破：双面水冷+HPD框架的混合设计（如北汽方案），热阻再降15%；

3\. 驱动协同优化：采用可编程栅极驱动器（如AgileSwitch）补偿封装电感缺陷，延长技术生命周期。

总结

HPD封装的SiC功率模块凭借其高功率密度、低寄生电感和耐高温特性，已成为新能源汽车、eVTOL、工业驱动等领域的核心技术。其设计要点涵盖热管理、低电感布局、可靠性验证和兼容性优化，需结合具体应用场景进行定制化开发。随着SiC技术的普及，HPD封装将持续推动电力电子系统向高效化、小型化方向发展。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&tp=webp)