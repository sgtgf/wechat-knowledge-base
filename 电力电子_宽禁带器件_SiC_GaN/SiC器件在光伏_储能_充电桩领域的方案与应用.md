# SiC器件在光伏、储能、充电桩领域的方案与应用


> 原文地址: [https://mp.weixin.qq.com/s/VVT6DJwZnMf6h-A977YONQ](https://mp.weixin.qq.com/s/VVT6DJwZnMf6h-A977YONQ)

随着光伏、储能、充电行业迭代快速发展，整机厂商都在疯狂卷高压、大功率、高效率、小型化的方案产品。传统硅基（MOSFET/IGBT)器件的方案面临高损耗、发热大、体积笨重、高频工况性能差，跟不上新一代光储设备的升级节奏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpNPfMwVMXtgspa6X31sIQU6jLM9yFFufNKdEg3aLhS0iae3gg7lGNSh2eQEHW3TesjTrmd3GJLzjWqPCJNYwruQveOdszAd8ZcM/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

SiC器件具有宽的禁带宽度、高击穿电场、高热传导率和高电子饱和速率的物理性能，使其有耐高温、耐高压、高频、大功率、抗辐射等优点，可降低产品能耗、减小体积。碳化硅器件在高温、高压、高频领域逐步替代硅基器件，在光储充、 5G 通信、航空航天、新能源汽车、智能电网领域发挥重要作用。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOLxFewNJFFpcDNuDtmYT9Rnt0OWxaZvL5IzdYWezicngdzJ9QspcOEibicK0sHJkWRibhyIfxFeMNx1kagtIhmdIVQTPYbqReDlIA/640?wx_fmt=jpeg)

图片来源：网络

一、光伏逆变器（组串 + 集中式）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOKXV2MIfn20h2UmjDeaLfhOe4LcibibhrVZJTleLqJTtehtPibHaNZcddC2IGxMWPYBTxtrG4iaHjjldK6xFog1uvfQiaPG8X2DziaI/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

1\. 产品特性与行业发展方向

产品特性

架构：多路 Boost 前级 + 后级 DC/AC 逆变并网；户用 3～20kW、工商业 30～250kW、集中式 250kW+（1500V 直流）；全天宽负载运行、低压弱光起发、并网谐波约束严苛。

发展方向

电压平台升级：1500V 直流逐步替代 1000V，系统线缆损耗下降；

高频小型化：开关频率由 10kHz→20～40kHz，磁件小型化；

全 SiC 渗透：Boost 全 SiC SBD 普及，逆变侧从硅 IGBT 全面向 SiC 模块迭代；

大功率机型优先 ANPC 三电平 + SiC器件，降低滤波与 EMC 成本。

2\. SiC 器件应用优势

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMYBplyIoAFjD2JseIybf3OEauIOQorSd5vriczL9LoymXYrXNKZ05ERdibXJq26DzFYVL2Zve0C00IqKvrEwxhtTMqynqFp2jZw/640?wx_fmt=png&from=appmsg)

图片来源：AST

SiC SBD（Boost）：根除 FRD 反向恢复，Boost 效率 + 0.6%～1.2%，电感体积缩减 35%～50%；

SiC MOSFET（小功率户用）：整机功率密度提升 30%，散热器缩小；

SiC 功率模块（中大功率逆变）：

全负载段开关损耗大幅降低，峰值效率突破 99.3%；

高频使 AC 滤波 LC 体积下降 40%+；

1500V 母线用 1200V SiC，耐压裕量充足，低压弱光工况效率远优于硅 IGBT。

3\. 分功率选型

功率等级

前级 Boost

逆变侧器件选型

3～20kW 户用组串

1200V 小功率 SiC SBD 

SiC MOSFET / Easy系列SiC功率模块

30～250kW 工商业组串

1200V 大功率 SiC SBD

Easy系列SiC功率模块（两电平 / ANPC三电平）

＞250kW 1500V 集中式

多管并联 SiC SBD

Easy系列SiC三电平模块

  

4\. 光伏整机设计要点

Boost：SBD 无反向恢复但高频引线电感易造尖峰，缩短功率环路，按需微型 RC 吸收；

SiC 模块驱动：开通 / 关断独立栅阻 + 负压关断 (-5~-7V)，抑制 dv/dt 与振铃；

三电平机型：SiC 高频加剧中点电位漂移，软件 SVPWM 闭环控中点 + 硬件中点均压电容；

功率回路：大功率必须叠层低感母排，减小母线杂散电感、抑制 Vds 尖峰；

EMC：高 dv/dt 提升共模干扰，加大共模电感、Y 电容，功率地与信号地分区隔离。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPSuhCAIIS5iaV7vzsK2tfrbCJ8Roia0TEWh7IzOm2gWYQ76f3AyibjW8mB2cbQRdlEdzDDVZNnCh8mPIEBpLL2VoBAfZ6fM2qfZk/640?wx_fmt=jpeg)

图片来源：AST

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRkrjCJR6UZ0dpE67BmrNVSjPoLfOegXzyxOAPDTFSf0lnRV7LfpI0TQ8837zsmrCqySFf8lD4WNiaKic5kZrubJ9ptUibkWN1iao/640?wx_fmt=png&from=appmsg)

图片来源：AST

二、储能变流器 PCS（双向 AC/DC，工商业 + 户储）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNzwFJawvh5YZtXKBZydA4YMicNsHexDZwtp0oGcqRiclk5F9HtLibHmZoGQrlF7MibMvqtYfA9ic6ffUWBUBJkgzicypY4zasOBDlBI/640?wx_fmt=jpeg)

图片来源：网络

1\. 产品特性与发展方向

产品特性

双向拓扑：电池侧 DC↔电网 AC 双向变换，充电整流、放电逆变，电池电压宽范围波动（0.4~1.0Un）、短时大倍率冲击充放电、并网 THD≤3%。

发展方向

户储：全 SiC 分立器件方案标准化，整机小型壁挂化；

工商业：50kW～500kW 由硅 IGBT→Easy2B SiC+ANPC 三电平；

电网级集装箱 PCS：1500V 高压直流 + Easy3B全 SiC 三电平成为标配；

高频化：20kHz+，减小交直流滤波电容与电感。

2\. SiC 器件应用优势

双向全工况低损耗：充放电双向均体现低开关损耗，满载效率＞99%，减少散热功耗；

宽压优势：电池低压跌落工况，SiC 导通损耗远低于硅，低压轻载效率提升明显；

高频缩磁件：LC、DC 母线电容体积下降 30%~50%；

同等散热条件短时过载能力优于硅器件，适配储能短时大功率冲放。

3\. PCS 选型

功率

拓扑 & 器件

电压平台

3～15kW 户储

分立器件 

SiC MOSFET+SiC SBD

400V 电池（650V SiC器件）

50～500kW 工商业

Easy2B SiC 半桥模块 / ANPC 模块

800V 电池簇（1200V SiC器件）

≥500kW 电网储能

Easy3B SiC 三电平模块

1500V 高压储能（1200V SiC器件）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM57DV3icnB9yKMtI9MPpupuyTTZubyWBaibSV5COwtHvcwsZTLmw10ae8hKrQSLL5UMwVAly4ex0HDONld0UpjOjDmia7JARxnbo/640?wx_fmt=png&from=appmsg)

图片来源：AST

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOibNS4EDECDibm4nAYo8Psiak6iaURh8sFCVbBicAk7mTLLSdWHmwmFgHUTv2WbxibFWfLL31ITonuUrfQfArSZJiae634DsEYVXMYAQ/640?wx_fmt=png&from=appmsg)

图片来源：AST

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNnxgicyaSFJ2Q0ic8vXOxunChQzicSsWryNE0GwYRGWjult7d6N3pH3Nqz3NpibefYdGPtG9EGWYunE8WHC7uyaibZt91xAeCkA9KA/640?wx_fmt=png&from=appmsg)

图片来源：AST

  

4\. PCS 设计要点

驱动标配负压关断，双向升降压分栅阻，平衡损耗与 EMI；

ANPC 三电平 SiC 机型：中点电位闭环控制是核心难点，高频下漂移速率高于硅方案；

冲击负载：SiC 短路耐受＜2μs，必须硬件极速短路保护（硬件关断＜1μs）；

并网 EMC：高频 dv/dt 恶化共模噪声，交流侧加强滤波、增加共模抑制电路；

多机并联并网：驱动同步、布局镜像对称，抑制模块间高频环流。

三、集装箱式储能系统（整舱系统级）

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOXiaXWBVPGTbhmDbt9UkNaL2d6PzdFesCn9wKaicg07nic31lWiarr3Bm1JaJxkovxQ0JzsicvM1ZucTfzWfIMyb81W65X2ldgYJOw/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

1\. 产品特性与发展方向

产品构成

电池簇 + 高压汇流柜 + 簇级 DC‑DC + 大功率集中 PCS + 隔离变压器，整舱液冷已成主流。

发展方向

系统走向1500V 高压直流架构，减少串联支路、降低线缆损耗；

整舱全链路 SiC 化：簇控 DC‑DC+PCS 全部采用 SiC器件；

液冷集成化，降低舱内空调自耗电、提升舱体能量密度。

2\. SiC 器件应用优势

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNDicEcOCnzDm7lNYtP6dTOwRWVf1GmCEEXx6HqdH6w2mO7YGO8N5maMc5cAkD3icR6qzqRrBlelhXWnVU4z6RQE5P2iaQfVWLMR8/640?wx_fmt=png&from=appmsg)

图片来源：AST

簇级 DC‑DC：SiC 器件提升升压效率，减少整站长期自耗电，提升电站收益；

集中式大功率 PCS：SiC器件 + 三电平输出谐波低，减小工频变压器容量与损耗；

整机发热下降→舱内制冷功耗下降 5%~10%，提升系统可用容量。

3\. 系统器件选型

簇控 DC‑DC（簇间升压）：SiC MOSFET / Easy1B/Easy2B SiC模块；

集中 PCS：1200V Easy3B / ANPC 三电平 SiC 模块。

4\. 储能整站设计要点

1500V 高压严格遵循安规爬电 / 电气间隙，高压 PCB 开槽、加强绝缘；

全水冷协同设计，SiC 模块水冷流道分区，多路 NTC 多点测温预警热点；

BMS 与 PCS 保护联动，分级预充、过压、簇短路、三相不平衡分层保护；

多台 PCS 并联：同步驱动 + 对称母排 + 软件环流抑制，规避 SiC 高频环流。

四、直流充电桩 / 充电模块

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNhFrTdDricicV3CdibnTopH7jhNyEDQwGo2aQxTGoT2veBamIgPIIloZcZJwn96yZXcYia2hF2GraFkVW4ey8B5hViambh2vibicSx5M/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

1\. 产品特性与发展方向

产品架构

前级 PFC 整流 + 后级隔离 DC‑DC，输出宽电压 200~1000V 适配乘用车 / 重卡，车载 800V 高压平台普及。

发展方向

充电模块高频化：20kHz→50kHz+，小型化、功率密度提升；

800V 车驱普及，模块母线抬升至 800~1000V，1200V SiC器件成为主流；

全 SiC 模块替代硅方案：PFC 侧 SiC SBD+DC/DC 侧 SiC MOSFET / 功率模块；

大功率堆垛充电桩：整机由多模块并联→大功率 SiC器件整机方案。

2\. SiC 应用优势

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNH2luKD6w8JUTqZ7TX9hcMx8r3Nzx2ryEyKz6n7Xq5SeQMB2qqaCT5yhGPlb7HYoBnHEQa3xYRDIE29gblDYSlmJk2IOtPspo/640?wx_fmt=png&from=appmsg)

图片来源：AST

PFC 整流：SiC SBD 替代硅快恢复，PFC 效率 + 0.7%~1.3%，减小 PFC 电感；

DC‑DC 侧 SiC MOSFET / SiC 模块：高频减小高频变压器、谐振电容体积，整机功率密度提升 35% 以上；

高温稳定性好，充电桩柜内高温环境下满载温升更低，降额损耗更小；

800V 高压平台用 1200V SiC器件，耐压裕量大，尖峰容错优于 650V 硅器件。

3\. 充电模块选型

单机功率

前级 PFC

后级 DC‑DC

20/30kW 小模块

SiC SBD

SiC MOSFET（LLC 拓扑）

60/120kW 标准模块

SiC SBD

Easy2B SiC 半桥模块

≥240kW 大功率整机桩

大功率 SiC SBD 并联

Easy3B  SiC 三电平模块

  

4\. 充电模块设计要点

LLC 高频 SiC器件回路：严控变压器原边功率环路杂散电感，优化 RC 吸收抑制开关尖峰；

栅极驱动：分开通关断栅阻 + 负压，800V 母线强化驱动隔离耐压；

模块并联均流：并联模块 PCB 走线等长对称、驱动同步；

散热：桩体内密闭环境，优先风冷 + 高导热垫片，大功率机型选配水冷；

宽输出电压（200~1000V）：低压满载校核 SiC 器件导通损耗温升，高压满载校核器件过压裕量。

五、全品类 SiC 器件通用设计汇总

驱动三要素必做：负压关断 (-5左右)、独立开通 / 关断栅极电阻、驱动电源隔离；

功率回路：中大功率一律叠层母排，最小环路面积，抑制 SiC 器件高速开关尖峰；

EMC：SiC器件高 dv/dt→功率 / 信号分区布线、增加共模滤波、屏蔽设计；

保护：SiC 器件短路耐受极短，硬件微秒级短路保护 + 软件双重保护；

三电平拓扑共性：ANPC/ NPC 必须闭环中点电位控制，SiC 器件高频加剧漂移，是第一设计难点。

附碳化硅产品资料

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOz4vCP1VFghhdiblRIibEqjm2lVBzRjMbfeVMqsRmLWavzbic4U6lqc0pmCkibKUNVGCwfe58MXiacqH19fEicNUqOn0eLSRjN4jgicM/640?wx_fmt=png&from=appmsg)

SiC SBD产品拓扑图（电压650V~1700V,电流20A~100A)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP68oDsjdS3fRsfeKIs7sQKDewrBCrcroMegV9UKfQ40FEpT9VkP3vuhn5ib2faJ2cbyicbhIFDv4AMR0ku6G4mgsFSibBjgMFgtE/640?wx_fmt=png&from=appmsg)

SiC MOSFET 247封装产品拓扑图（电压650V~1700V,电流30A~250A)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPk7he7Ftr0pbZB1OJqnCsia4uWky8o14reNYxpOicy8QVk5ol7IrXp9zuIDla8zGbtVuSm6lDpUHp2JW25btIaILIia4bZ6eI5jQ/640?wx_fmt=png&from=appmsg)

Easy3B封装三电平产品拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO1AZT9VNYQ2aEzqiaedYyUtxibQV0gH37bia0wodgY9HKKNxibiajJYyMuoNzKqbvQQeticHW3NnQIiavn9l9SVP7yZPkrsTTnzI8PQM/640?wx_fmt=png&from=appmsg)

Easy2B封装三电平产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM9HSpNDR8libeJibjVWDSD0ntXttjvAdyFMkApTPjFuMFmnS9miao2snr0hJAicon7TibVBasmBsBMjcXczC1VSOezmFl9dRUf8bU4/640?wx_fmt=png&from=appmsg)

Easy2B封装半桥产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN5fcco4vWLH3WhS4Qo0kQFRaic3fVIFLuxKCAqJXGQ97aibBAG8S9nUBRCmM8JlkO7VCw9FrB0WtIJSyN9dHcnokAvODOcjpEIY/640?wx_fmt=png&from=appmsg)

Easy2B封装H桥产品拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNcYb6wpHcLoLYcQggTAiaELrk3Rbf7AIkuQKk7b3QWibLd1uE61LjcQWMEQHMa2pgQx9QaEA2ZPNMKQe7MsJGVm2sumwdoVfkaA/640?wx_fmt=png&from=appmsg)

Easy2B封装三相全桥产品拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPCe84Z1Ffk9u4s13jPqPiaz5mC93qykEkicqG3TCdVVXUqxOfo8TpPXHCPLddU0lSa1u4Skia4aOQZg7MwNZbILpUO2jt8ic5lbo8/640?wx_fmt=png&from=appmsg)

  

MEK6封装三相全桥产品拓扑图

  

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