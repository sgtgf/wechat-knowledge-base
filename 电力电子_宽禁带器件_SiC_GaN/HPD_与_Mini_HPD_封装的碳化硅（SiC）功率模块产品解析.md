# HPD 与 Mini HPD 封装的碳化硅（SiC）功率模块产品解析


> 原文地址: [https://mp.weixin.qq.com/s/91P1Ii8OnjEzPDUzroXNoQ](https://mp.weixin.qq.com/s/91P1Ii8OnjEzPDUzroXNoQ)

HPD封装碳化硅MOSFET模块是一款专为新能源汽车主驱逆变器设计的高性能、高功率、小型化的三相全桥拓扑架构的功率模块。结合英飞凌HybridPACK™ Drive（HPD） 标准封装、Mini HPD紧凑型衍生封装的架构、工艺与 SiC 器件特性，面向电力电子方案开发，分别拆解核心定义 / 特性、应用优势、主流领域、关键设计要点，并补充两者选型对比与工程落地建议。

一、HPD 标准封装 SiC 模块

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN9gxT1wQooRARgJLqquzdlECxscUBJW72beH3Vzp9hesVSzAMQdyWlePaNHvia7Ehkzzch5AcRsXpl1XiaqUS3ibNqFRtBsR8Ok0/640?wx_fmt=png&from=appmsg)

1\. 基础定义与核心特性

HPD（High Power Device）是车规级大功率三相全桥模块的标准封装，由英飞凌首发，最初用于硅基 IGBT 电驱，目前已全面适配 SiC MOSFET模块，是新能源高压大功率场景的主流封装。

拓扑形态：标准三相全桥（6 管） 集成封装，内部多芯片并联（SiC 版本多为 4~8 颗芯片并联）；

电气规格：耐压 650V/1200V/1700V，额定电流 400A~1000A，适配 800V/1000V 高压母线；

封装工艺：AlN / 氮化硅陶瓷基板 + AlSiC 复合散热结构，双面银烧结工艺，内置多路 NTC 温度传感器；控制端采用 PressFIT 压接引脚，功率端子分长端子 / 短端子两种形态；

寄生参数：第三代HPD封装SiC模块杂散电感＜10nH，远低于传统硅模块；最高持续结温175℃，产品支持200℃短时扩展结温；

散热形式：标配液冷（Pin-fin 针翅 ），也可选平底板风冷版本。

2\. 核心应用优势（SiC 版本专属）

大功率承载能力强，适配高压平台：单模块电流覆盖 400~1000A，单模块功率可达200kW~400kW，完美匹配 800V 及以上高压系统；SiC 器件零关断拖尾电流，大幅降低开关损耗，整机效率较硅 IGBT 提升1%~2%。

超低杂散电感，释放 SiC 高频潜力：内部对称布局 + 短功率回路，寄生电感控制在10nH 以内，从根源抑制 SiC 高速开关带来的Vds 电压尖峰、振铃，减少 RC 吸收电路用量，支持20kHz~40kHz高频运行。

车规级高可靠性，适配严苛工况：通过AQG324车规认证，银烧结 + 陶瓷基板抗热循环、抗功率冲击能力强；PressFIT 引脚抗震（耐受15G振动）、耐盐雾，适配车载、户外电站等复杂环境。

平台兼容性极强，迭代成本低:封装、引脚、安装尺寸与传统硅基 HPD 模块完全 Pin-to-Pin 兼容，老平台可直接替换 SiC 版本，无需重新开模、改PCB，快速完成高效化升级。

集成度高，简化整机结构:三相全桥一体化集成，省去外部桥臂拼接，减少外围连接件与线路，提升整机功率密度，降低装配复杂度。

固有短板：封装体积大、重量偏高；单模块成本高；小功率场景下功率冗余大，性价比偏低。

3.HPD模块产品介绍

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3cc9mMiaA8IdfkbxtZzJxP2xib5M8TSCfHY8fsuMyxxTc5iaxVSGqKrFqfuQibkvVTVZRWwuCorZK9FhmuE41XLJuo7AvpHdA1ibo/640?wx_fmt=png&from=appmsg)

HPD封装的产品拓扑图

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO57wLDAsyOHBIp5B8gPBIPCBkQ9hl7Sm7axexQ6qfHrRrOuFhib9A1B0e03picslwGqBemPhvUk6lDBMOwF7TGib7N1Ae8rQI4nQ/640?wx_fmt=png&from=appmsg)

长端子HPD封装的产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO0H7xttgpicgAibezqemSFblKf1XQRlEKGEtTfTdaibFSvzzrIeJWE7vKuoBQiacLXpDbaS23icmTlxkUY2CV9SMLmMDMJE2icCMBias/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO3lribjfgFKCHwZSbg9Rr8X0HLmtaRXc7J8ubzd14cPn23nxEAlmdopvJQKqINfR8K4TCAxFXhTKgSp8e3SAYFKPjLENJna2sk/640?wx_fmt=png&from=appmsg)

Pin-fin与平底板实物产品图

最高工作结温175℃；

第三代模块寄生电感低于10nH，降低开关损耗；

参数范围：

             VDS：650~1700V

                ID：400~1000A

    RDS(on) ：1.3~6.5mΩ

4\. 主流应用领域

主打高压、大功率、车规级、连续运行场景，是 SiC 大功率落地的核心封装：

新能源汽车主驱逆变器：800V 高压平台乘用车、中大型 SUV、商用车电驱系统（200kW 以上动力总成）；

航空 / 低空飞行器电驱：eVTOL 电动航空器主电力变换单元；

大功率储能变流器（PCS）：电网级储能、大型工商业储能电站（单台功率 300kW+）；

高压集中式光伏逆变器：1500V 直流母线大型地面光伏电站；

重型工业传动：大型破碎机、磨机、轨道交通主牵引变流器；

大功率直流充电集群：高压充电站总电源、换电站大功率电源单元。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpM74udFQNiboiaySicymAwu3ia7ZJQppT12XVZJ2A9I0oKNYeU6azkkBDUqxeReajKU9jLAGiapzyAkdH4vRcI6U6vhqiceCyXNqtCib8/640?wx_fmt=jpeg)

5\. 关键设计要点（SiC 模块专项）

（1）散热系统设计（核心重点）

优先采用定制化液冷散热器（Pin-fin 针翅水冷为主），冷却液选用 OAT 有机酸型防冻液，避免腐蚀铝基板；严禁冷却液冻结，防止模块底板变形、漏液；

界面材料选用高导热硅脂 / 导热垫片，热阻控制在 0.05℃・cm²/W 以内；针对多芯片并联的热不均问题，利用模块多路 NTC 做分区温度监控，重点监测芯片热点；

持续满载工况下，结温建议降额至 150℃以内；短时峰值工况可利用 200℃扩展结温，需严格控制持续时长。

（2）功率回路与杂散电感抑制

直流母线必须搭配低感叠层母排，母排与模块功率端子直接对接，缩短功率环路长度；严禁长铜线、普通铜排连接；

功率端子选型：需要加装电流传感器时选用长端子，可直接对接驱动板；空间紧凑场景选用短端子，减少整机尺寸；

高频工况下，保留极小容量 RC 吸收回路，抑制残余电压尖峰，避免 SiC 器件过压损坏。

（3）栅极驱动与 SiC 器件防护

驱动必须配置负压关断（-5V左右），杜绝 SiC MOSFET 高速开关时的误导通；区分开通 / 关断独立栅极电阻，平衡 dv/dt、开关损耗与 EMI 表现；

驱动隔离耐压≥2500Vrms，高低侧驱动电源独立供电，隔离地平面，抑制共模干扰；

SiC 短路耐受时间短（通常＜2μs），必须配置硬件极速过流保护+ 软件限流双重防护，保护动作延迟控制在 1μs 以内。

（4）器件并联与均流设计

模块内部已完成多芯片并联，外部多模块扩容时，保证布局完全对称、驱动信号等长同步、回路阻抗一致；

筛选同批次 SiC 芯片，保证阈值电压、结电容、导通电阻参数一致性，降低静态 / 动态均流误差。

（5）高压绝缘与安规设计

1200V/1700V 高压版本，严格按照高压规范设计爬电距离、电气间隙；PCB、壳体加强绝缘处理，防止高压爬电、闪络；

整机做绝缘耐压测试，测试电压按器件耐压的 1.5 倍执行。

（6）中点电位与拓扑适配

HPD 以两电平三相全桥为主，若搭配三电平拓扑使用，需额外增加中点电位平衡控制算法，配合中点泄放电路，避免器件分压不均。

二、Mini HPD紧凑型 SiC 模块

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMkje4qf4oCepclGxMmxs2GD7icWlLnfz2ynXjevoolu1bhdWdrQ85kwLJlLicLWrPZ2KIqVicnVFOJh8l2R5cV95BZ7bEv1LThPM/640?wx_fmt=jpeg)

1\. 基础定义与核心特性

Mini HPD是 HPD 标准封装的紧凑型衍生版本，针对中功率、空间受限场景优化，保留 HPD 核心工艺与电气架构，体积大幅缩减。

拓扑形态：三相全桥架构，内部芯片并联数量减少（主流为 2~6颗芯片并联），整体尺寸较标准 HPD缩小约 20%，重量同步降低；

电气规格：耐压 650V/1200V/1700V，额定电流 200A~600A，适配 400V~1000V 母线，单模块功率覆盖100kW~300kW；

封装工艺：延续氮化硅陶瓷基板、银烧结工艺、内置 NTC；功率端子采用超声焊接工艺，结合力更强、发热更低；控制端沿用 PressFIT 压接引脚；

寄生参数：优化内部走线，杂散电感≤10nH，兼顾高频性能；最高工作结温 175℃，高温输出能力与标准 HPD 持平；

散热形式：标配Pin-fin 水冷底板，散热效率较普通底板提升 20%；部分小电流版本支持自然风冷。

2\. 核心应用优势（SiC 版本专属）

体积更小，功率密度更高：尺寸比标准 HPD 缩小 20%，在同等功率下占用空间更少，完美适配空间极度受限的设备腔体，助力整机小型化、轻量化。

功率区间精准，性价比最优：聚焦100kW~300kW中功率区间，填补标准 HPD 与中小功率模块之间的空白；芯片并联数量减少，模块物料成本更低，量产性价比显著提升。

散热与可靠性延续 HPD 优势：传承成熟的陶瓷基板、银烧结、车规级工艺，抗振动、抗热循环能力保持车规级别；超声功率端子降低接触损耗，大电流工况下温升更低。

架构兼容，平台复用性强：安装孔位、引脚定义与标准 HPD向下兼容，同一平台可根据功率需求灵活切换 HPD/Mini HPD，结构、散热器、驱动板无需大幅改动，缩短产品迭代周期。

高频性能优异，EMI 压力可控：低寄生电感设计充分发挥 SiC 高频特性，支持 15kHz~35kHz 开关频率；电压跳变幅值适中，dv/dt 与 EMI 整改难度低于小功率 SiC 模块。

固有短板：电流上限低于标准 HPD，无法覆盖 600A 以上超大电流场景；内部芯片并联数量少，短时峰值过载能力偏弱。

3. Mini HPD模块产品介绍

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMKDqIaI6ImiaGicMibCVPlibsWMksXfznhJiaFWJZOZkYNUx5WrtbBRkPZrgAoKkCjA3icPDtCK7RylkeX3sYYrU0paToJbLtIEOxFc/640?wx_fmt=png&from=appmsg)

Mini HPD封装的产品拓扑图

最高工作结温175℃；

第三代模块寄生电感低于10nH，降低开关损耗；

参数范围：

            VDS：650~1700V

               ID：200~600A

    RDS(on) ：2~8mΩ

4.主流应用领域

主打中功率、高功率密度、空间受限场景，是 SiC 中功率场景的优选封装：

新能源汽车辅助电驱、混动车型电控：混动汽车动力单元、轻型电动车主逆变器（100~300kW）；

组串式光伏逆变器、中小型工商业储能 PCS：户用 / 工商业光伏、分布式储能变流器；

中小型直流充电桩模块、一体机充电桩：60kW~240kW 直流充电桩电源单元；

工业中大功率变频器：风机、水泵、空压机、中小型机床驱动；

船舶、工程机械辅助电源：船用电力变换、工程机械变频系统；

车载多合一电驱总成：高度集成的整车电控系统（空间紧凑需求）。

5\. 关键设计要点（SiC 模块专项）

（1）散热设计

优先选用Pin-fin 水冷散热器，利用其高散热效率抵消体积缩小带来的散热面积损失；风冷版本仅适用于200A 以下、低负载率场景；

热界面材料选用高导热型号，重点管控模块边缘与中心的温差；因体积紧凑，热流密度更高，结温降额建议20%~25%，避免长期过热。

（2）布局与杂散电感控制

模块腔体空间狭小，功率回路布局必须极致紧凑、对称；直流母排采用超薄叠层设计，严格控制环路面积；

功率端子走线避免交叉、平行长距离走线，减少寄生耦合；信号回路与功率回路分区布线，降低干扰。

（3）栅极驱动与抗干扰设计

延续 SiC 通用驱动要求：负压关断、独立栅阻、隔离供电；因整机空间小，驱动板与模块距离更近，需加强屏蔽设计（驱动板加金属屏蔽罩、功率线屏蔽）；

精简外围器件，减少线路串扰；EMI 器件（共模电感、Y 电容）选型小型化高规格型号。

（4）均流与扩容设计

单模块电流上限有限，大功率扩容以多模块并联为主；必须保证并联模块布局镜像对称、驱动信号同步误差＜100ns；

严格筛选模块内阻、芯片参数，配合软件均流算法，抑制并联环流。

（5）机械与振动设计

整机空间紧凑，模块固定螺丝按标准扭矩锁紧，搭配防松垫圈；针对车载、工程机械等振动场景，重点加固功率端子与接线部位，利用模块自身抗震工艺提升可靠性；

避免模块与壳体硬接触，预留热膨胀间隙，防止热胀冷缩导致结构应力。

（6）保护逻辑优化

结合中功率工况特性，在过流、过压、过热基础上，增加负载突变保护、三相不平衡保护；

利用多路 NTC 做多点测温，提前预警局部过热故障。

三、HPD vs Mini HPD 封装 SiC 模块选型总对比

对比维度

HPD 标准封装

HPDmini 紧凑型封装

**功率区间**

200kW ~ 400kW（大功率）

100kW ~ 300kW（中功率主力）

**额定电流**

400A ~ 1000A

200A ~ 600A

**体积 / 重量**

常规尺寸，重量偏大

体积缩小 20%，轻量化

**母线电压**

650V/1200V/1700V（高压为主）

650V/1200V/1700V（高压为主）

**散热方案**

标配针翅水冷，可选风冷

标配针翅水冷，小电流可风冷

**成本**

高（多芯片并联）

中等（性价比突出）

**过载能力**

强（多芯片冗余）

中等（芯片并联数量少）

**空间适配**

腔体空间充足的设备

空间受限、追求小型化设备

**典型场景**

重卡 / 大型 SUV 主驱、大型储能、集中式光伏、主牵引

混动车型、组串光伏、工商业储能、中小型充电桩、工业变频

**开发难度**

中等（重点管控散热、高压绝缘）

中等（重点管控布局、干扰、热密度）

  

四、方案开发选型与落地通用建议

按功率与空间选型

功率＞400kW、腔体空间充足、追求极致过载能力 → 优先选标准 HPD；

功率100~300kW、设备小型化 / 轻量化要求高、空间受限 → 首选HPDmini；

同平台功率迭代：两款封装 Pin 兼容，可根据订单功率灵活切换，无需重新开发结构与驱动。

SiC 器件通用设计原则

两款模块均为 SiC MOSFET，负压关断、栅阻分档、低感母排、极速短路保护四大要求必须严格执行；高压版本重点强化绝缘与爬电设计。

散热优先级

两款模块均推荐水冷散热，尤其是 SiC 高频工况下，水冷是保障长期可靠性的核心；风冷仅作为低功率、低负载率场景的补充方案。

成本平衡策略

中功率场景优先用 HPDmini 降低 BOM 成本；超大电流、高压电站、商用车等高端场景，选用标准 HPD 换取更高可靠性与功率冗余。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSjOZxiaBnfRVDibufEcJUjYj5adJ2Ct65DKvpWYu3IaBrc2ZPnjzTfPYlew8epGFIZYECXPVgnmlPzlWJgMibCPZc5ibaU23Qc20/640?wx_fmt=png&from=appmsg)

碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNEOfuz4jUAPasuDmrp4hib4tgmic44fCgBibIodWntbrxDfa43ErbP2NPNIgNgzvohbiaZLIPxUN1cKc0MDdricicU5ISY5P49VSbpc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=7)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOktxPKLBu21kW438XZ33rcRN0cOKBibQVq99JZjWJtEGBUia1cTNne6micgqbibggoBk54Qherr0wKBDYAWb42k7hamVDacgOIOUE/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=8)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

[TOLT封装的SiC MOSFE产品及应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539705&idx=1&sn=db2369c1e63b225addf08cc23cc0ebd2&scene=21#wechat_redirect)

  

[TOLL和TOLT封装的SiC MOSFTE应用对比](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539428&idx=1&sn=6bdc5cb8a49590ef8d291338747a79b6&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtgrYJvHRGQrHsMNThvJec43MetVPbtp0lZCbst3LNiaHibxfjtKrLvqsB7RARoIuQjxgMmdW1qHcT0AicXt152ozCQic4dnMBMCM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=9)

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

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOhtEbdjB0KicI72DCjbkfWAzWZ2FGsShSzO28wPxpMYxPThcVPJRriaib17nTDD0lzjk1UHnsCGxbuYxsjwa3VRIfvC9tb4K9kL4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPuY3ylRicPwy3VQ5G35ic3lMWbIjaSuelS6XticaMqKMFn1Dibiba3YbyBREvLYmBMyNlBx6yEAeVUCuKrgA4GkzPaAOFs7L3stDKs/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=31)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPujPib2AfC01ZSMXL4OoPdRjETW2OtkcSjcHbhX3FdLju3kt0FUafxLlQXVSSROickxFQffuNYwlT3z8DzSfwTb3rhl4Oac4beI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)