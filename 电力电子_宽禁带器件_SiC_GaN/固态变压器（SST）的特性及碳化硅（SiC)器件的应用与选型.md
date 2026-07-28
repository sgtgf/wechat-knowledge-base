# 固态变压器（SST）的特性及碳化硅（SiC)器件的应用与选型


> 原文地址: [https://mp.weixin.qq.com/s/IzHM22hd4uSVygLmxToPDw](https://mp.weixin.qq.com/s/IzHM22hd4uSVygLmxToPDw)

固态变压器（SST）从一项备受期待的前沿技术，迅速崛起为AI数据中心和下一代电动出行基础设施革新的核心“明星”。在AI算力暴增、能源转型加速和关键材料国产化三大引擎的强力推动下，实现了从实验室到商业化落地的关键跨越。

### 一、 固态变压器（SST）成名史

SST的关注度在2025年急剧攀升，主要源于两大里程碑式应用的突破，以及产业链成本瓶颈的突破：

**AI数据中心的“算电协同”革命**：随着AI模型参数量迈向万亿级，数据中心单机柜功率密度激增，传统交流配电架构在空间、效率上均遭遇瓶颈。2025年11月，台达、美团、秦淮数据、东阳光联合发布了全球首个基于SST的智能直流供电系统方案。该方案效率高达98.5%，将1MW功率压缩至仅1平方米的功率柜内，较传统方案节省50%以上的占地面积，为释放高价值IT空间提供了颠覆性解决方案。此事件被业内视为SST在关键应用场景的商业化起点，并获得了英伟达等巨头的公开背书。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMjq3qDRiajA4vdn94BYib0tPAKxw3WnUzQbtypk0xt9DUHNx2TzMv6rwpd6W7NUqs6x8mq6arRmmu6kPhu1QdXxdAMmox2ChuRs/640?wx_fmt=jpeg&from=appmsg)数据中心4种供电效率及占地面积对比 （资料来源：中金公司研究部）

下一代超快充基础设施的基石：为满足电动汽车（EV）“15分钟补能”的需求，兆瓦级超快充电站（UFCS）成为发展重点。传统工频变压器（LFT）体积庞大、响应慢的缺点被放大。研究表明，SST相比LFT可实现65%的体积缩减和约3%的效率提升，并能直接连接中压电网，实现兆瓦级扩展，完美契合了超快充电站的需求。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPRpUl9iaaiaLG8ic9aEeIUdOb2OC8Zwic2Cdr77q7aUMJesk3M9Avhe3lzbFho1EaBRtpsicJa0yTicbJqmDyxnrSTiaicdayZJHiaPh1s/640?wx_fmt=jpeg)

2025上海车展：华为商用车兆瓦超充技术-2400A全液冷兆瓦超充解决方案  

**成本瓶颈的突破**：过去SST因碳化硅（SiC）、绝缘栅双极型晶体管（IGBT）等核心器件依赖进口而成本高昂。2025年，国内在SiC衬底、芯片等关键环节实现重大突破。据行业分析，SiC芯片自给率从10%提升至28%，带动SST整体成本较2023年下降约40%，为其规模化应用扫除了最大障碍。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMp4NU4eJpjwrcZQ1SfNAicPwh9DUa4SdNSG1851L5mwIzzTm4UDwtNunrAyMZficg64icn55cFhEhvNTXHVXYobvmBgDgQujicpuY/640?wx_fmt=jpeg&from=appmsg)

  

二、 固态变压器基本原理与核心拓扑

**基本原理**：SST是一种基于高频电力电子变换技术的新型电能转换装置。它通过“交-直-交”或“交-直-直-交”的电能变换过程，替代了传统变压器依赖电磁感应的工频（50/60Hz）电压变换。其核心是利用高频开关器件（如SiC MOSFET），将工频交流电先转换为直流，再逆变为高频交流电，经高频变压器隔离和变压后，最终还原为所需的电压/频率。这一过程赋予了SST体积小、可控性强、功能丰富的特性。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNSa4NfkYIxPxfILazDfOSZYot2WqIIQrdQG3wiaiahUDHmbzbnAibLHb6mBfRIq2nich1LyPFSVCRNico0LibkE08Jc1xQkveFia7ccw/640?wx_fmt=jpeg&from=appmsg)图片来源：网络

典型拓扑结构（以三相三级拓扑为例）：SST通常采用模块化、多级架构以应对中高压应用。经典的三级拓扑是主流研究方向。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpObPU49pwFLfqia6GC1lRpF9D8sG3skU6QE7bmp0sOibVYcLSudqGRay2HeJhbDCqU9UQGEcdywZRCoxjqrDThk25weOF0ficWAoA/640?wx_fmt=png&from=appmsg)图片来源：网络

AC/DC整流级：负责将电网工频交流电整流为稳定直流电，并实现功率因数校正（PFC）和并网谐波控制。常用拓扑包括级联H（CHB）、模块化多电平变换器（MMC）等，以实现中压接入。

DC/DC隔离级：这是SST的核心和灵魂，包含高频变压器（工作频率通常在kHz至数十kHz范围），实现电气隔离和电压等级的自由变换。双有源桥（DAB） 和 LLC谐振变换器 是这一级的主流选择，因其支持高频软开关，能极大提升效率。

输出级：根据负载需求，将稳定的直流电逆变为工频交流或直接输出直流。

三、 设计挑战与方案应用案例

**主要设计挑战**：

高效率与高功率密度平衡：高频开关带来损耗，散热设计极具挑战。需在拓扑选择（如采用软开关技术）、磁芯材料（非晶/纳米晶合金）和散热方案上协同优化。

控制复杂性：多级变换、模块均压、双向能量流动（如V2G）对实时分层控制策略要求极高。在弱电网或负载剧烈波动（如数据中心GPU负载）时，保持稳定运行是巨大考验。

可靠性与成本：系统中包含大量功率半导体器件和无源元件（如电容），其寿命和可靠性直接影响整机可靠性。尽管成本已大幅下降，但相比传统变压器，初始投资仍是市场推广的考虑因素。

**典型应用案例**：

**应用领域**

**核心优势**

**2025年代表案例/进展**

**AI数据中心**

超高功率密度（>1MW/m²）、高效率（>98.5%）、支持直流母线架构和储能无缝接入。\-  

台达、美团等四方联合方案在秦淮数据产业园部署，为美团业务提供支持。

**电动汽车超快充**

直接中压并网、体积小、动态响应快、支持V2G，缓解电网冲击。

成为满足IEC 61851-23:2023等新标准下兆瓦级充电（1-4.5MW）的关键技术路径。

**智能电网/绿电接入**

高度可控、多端口（可接入光伏、储能等直流源）、提升电网对可再生能源的接纳能力。

分析指出，采用SST的新型电网架构对可再生能源的接纳能力可达50%-70%，是传统架构的1.3-2倍。。

**轨道交通**

减轻车载变压器重量和体积，提升牵引系统性能。

技术早期重要应用领域，如ABB公司1.2MW机车牵引SST已在瑞士铁路应用。。

### 四、 与传统变压器的对比评估

**对比维度**

**传统工频变压器 (LFT)**

**固态变压器 (SST)**

**SST相对优势/影响**

**工作原理**

电磁感应（工频）

高频电力电子变换（kHz以上）

技术范式革命

**体积与重量**

大且重

**显著减小：**

（同等功率下体积可减少65%）

节省安装空间，适用于移动或空间受限场景

**功率密度**

低

**极高：**

（案例达1MW/m²）

满足高功率密度场景需求

**效率**

较高（约95-99%）

**更高：**

（典型>98%，领先方案>98.5%）

降低运营损耗，对数据中心等长期运行场景意义重大

**功能**

变压、隔离

**多功能集成：**

变压、隔离、无功补偿、谐波治理、故障隔离、直流端口接入、能量双向流动  

从“被动设备”变为“主动电网节点”

**可控性**

几乎不可控

**高度可控，可编程**

支持智能电网互动、动态响应负载变化

**成本**

低

**初始成本高，但维护和系统集成成本可能更低**

目前推广的主要障碍，但成本下降趋势明显

**典型应用**

几乎所有的输配电环节

AI数据中心、超快充、智能微网、高端工业

聚焦于对性能、功能有特殊要求的新兴场景

### 五、 未来展望

技术趋势：向更高频率、更高电压（如10kV及以上）、更高功率等级（吉瓦级） 发展。拓扑将更集成化（如单级或两级），控制策略将深度融入人工智能，实现预测性维护和能效最优调度。

市场前景：随着AI与电动汽车产业爆发，SST市场将高速增长。2030年，仅全球AI数据中心领域的SST装机规模预测可达100GW。绿电直连、交直流混联电网将是下一个广阔市场。

产业链发展：SiC等核心器件国产化将继续深化，带动整机成本进一步下探。产业模式可能出现垂直整合，即核心部件商（如东阳光）向下游应用场景（如数据中心）延伸，形成技术闭环和生态优势。

### 六、 SiC器件在SST中的应用分析

SiC（碳化硅）宽禁带半导体凭借其卓越的物理特性，是推动SST性能达到新高度的关键使能技术。

**应用优势**：

高频低损，提升效率：SiC MOSFET的开关频率可比硅基IGBT高一个数量级，显著减小无源元件（变压器、电感、电容）体积。更低的开关损耗和导通损耗，直接提升了SST整机效率。

耐高温，简化散热：SiC器件结温工作能力可达200°C以上，优于硅器件，降低了散热系统设计压力，有助于提高功率密度。

降低系统复杂度与成本：高频化使得磁元件体积和用量大幅减少。更低的损耗也减少了散热器尺寸。这些都有助于降低系统总成本和体积。

**SiC器件代际性能提升**：

**性能指标**

**第3代**

**第4代**

**对SST设计的益处**

**导通电阻 (RDS(on))**

基准

**高温下降低高达21%**

降低导通损耗，提升全负载范围效率

**开关损耗 (ESW)**

基准

**降低约27%**  

允许更高开关频率，或减少散热需求

**体二极管反向恢复**

存在挑战

**大幅优化，软度因子提升3.5倍**

**减少电压过冲和振荡，显著简化EMI滤波设计，提升系统鲁棒性**

**结壳热阻 (Rth,j-c)**

基准

**降低约12%**

改善热传导，提升输出电流能力或降低结温

**短路耐受能力**

基准

**保持2-3μs，与驱动技术良好兼容**

保障系统在故障下的安全关断

**栅极可靠性**

良好

**持续优化栅氧层质量与工艺**

提高器件长期运行可靠性，是SST高可靠性的基础

**方案选型与设计要点**：

电压与电流等级选型：根据SST的输入电压（如10kV AC需多模块级联）和功率等级，选择合适额定电压（如1200V、1700V、3300V）的SiC MOSFET模块或分立器件。需留有足够电压裕量（如20%-30%）以应对开关过冲。

根据拓扑阶段选型：

AC/DC整流级（硬开关）：重点关注器件的开关损耗和体二极管反向恢复特性。第4代SiC MOSFET的软恢复特性在此至关重要。

DC/DC隔离级（常为软开关，如DAB）：开关损耗被最小化，导通损耗成为主要矛盾。应选择低RDS(on)的型号，并优化热设计。

关键设计要点：

栅极驱动：需为SiC器件配置专用驱动芯片。要求提供足够的驱动电压（通常+15至+18V/-3至-5V）、极短的传播延迟和强大的拉/灌电流能力，以充分发挥其高速开关优势并防止误导通。

PCB布局与寄生参数：最小化功率回路的寄生电感是重中之重。不良布局引起的寄生电感会导致严重的电压过冲和振荡，威胁器件安全。需采用紧凑对称的布局，并使用低感叠层母排。

热管理：尽管SiC耐高温，但维持较低的结温对提升效率、保证长期可靠性至关重要。需采用高性能散热器，并考虑风冷、液冷等方案。

电磁兼容（EMI）：高频开关必然带来EMI挑战。优化的布局、利用新一代SiC器件更好的开关波形、以及合理设计EMI滤波器，是满足相关标准的关键。

**SiC器件选型手册**：

SiC MOSFET/SBD芯片（Wafer）

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOAiceStcich0bu13ibvA8boFuia77wkrdOjQhSGjQS1tjictwphaZCCchA1WwSrcoeyukBElVAeYx9MXQI9Nmeyia8Ul0IxHuibbITPQ/640?wx_fmt=jpeg&from=appmsg)

设计研发SiC MOSFET/SBD芯片，电压：650V~1200V~1700V~2000V~3300V,电流：1A~150A，自建6吋兼8吋SiC晶圆厂。  

SiC MOSFET/SBD单管

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPCiaV2BfuquCHIknUribcy2fYPzwtUSabudys854VKIsKDRBlmFyVC2L8a9wCPcvNXHjUBkPTQrqNr9rP5eVAvtMrbrAILmUF7I/640?wx_fmt=png&from=appmsg)

研发及生产SiC MOSFET/SBD单管，电压650V~1200V~1700V~3300V,电流：1A~300A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMJ3aHeqYyTBbgRt7u6vmic0J4FR7wlhicN4PUH7tcluAibInRRibMPkYc8mc52oZSrD6NicgDxYPYkDfy8ibthyY5gDYTtPSiajkuP1I/640?wx_fmt=png&from=appmsg)

650V典型产品：内阻12毫欧、电流150A、驱动电压+18V/-5V

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNGBUFm2bsKpp9GwQ5Y2MrgUeXTkJaTcsqYzG7WwC82RWFlnpD26lpraE4JsU2bww3yJacNmGCvUzfkDgrgH8bXaV0GVYZJmcY/640?wx_fmt=png&from=appmsg)

1200V典型产品：内阻12毫欧、电流150A、驱动电压+15~+18V/-5V

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPa3Zw5icwtBuQia0xicEL0Mnk9AxfnJXN8TbjOXmjK7nae9C7FnRSOEelibBnZsx1Jj0nu0ZFBFXJmNJLCBWo2UuOV1hdjetA7GjQ/640?wx_fmt=png&from=appmsg)

1700V典型产品：内阻14毫欧、电流120A、驱动电压+15~+18V/-5V

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMroExnZvunosFgPX7JuXicmichvqhnH2r4Jqgzdjn7Th2eLtR84WLtib6dyKF11wleKha08MT80ziaVWfibQHFxsnBjU24tVtmBgNU/640?wx_fmt=png&from=appmsg)

3300V典型产品：内阻40毫欧、电流80A、驱动电压+18V/-5V

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNzibRxknN9KX58JSKJa3v2moHxvCAVWzfLUF4GIRshUStXHyoic91xVBfk5tQoHDBygdjNVe793mbBFOCfmtn7T9zJZFeUauS2k/640?wx_fmt=jpeg&from=appmsg)

碳化硅功率模块

自建功率模块封测工厂。SiC模块电压等级从650V~1200V~1700V全系量产，封装齐全，满足车规级和工业级要求，电流30A~1000A，产品性能与国外主流品牌性能相当。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPfliatzbibfZefiaR0PJFsibdzafNicOcZX9cVoBVW8CFrT3eRtOupy8VYw1YRVVQqUY3U70xhhoIEUuLNZwNTuIRyWgHicPej1AJjU/640?wx_fmt=jpeg)

总结

2025年SST的崛起是市场需求、技术成熟和成本下降共振的结果。作为研发人员，深入理解其多级拓扑与控制复杂性，并掌握以SiC为代表的新一代功率器件的选型与应用要点，是成功设计高性能SST系统的关键。未来，SST与AI、智能电网的深度融合，将开启更加广阔的创新空间。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOiaCtez9QMkUJeIduj2YZwTEl0TD5MmRILVKRwkNkWK0DeR5kcPjX6cdhxIcia24Yiapu3sCDc5o8e0RbG8YXDkHp03LylVy6UsE/640?wx_fmt=jpeg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicV75jJicWhZquMhRd2ozp0WDxiatO73IiaAeEVuQwLN3XQmlUFJAtqpbibg/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicZejgkicIQudBicVuA3wrDnPfynvFOFYMgYm6U3p79IzDqrkLlUKp27Vw/640?wx_fmt=jpeg&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=31)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicEZbgXCW0bom11QxrtibSsOmLcRtAMSsyUvtGjqW0l3FBic4rr0DPeYhQ/640?wx_fmt=jpeg&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)