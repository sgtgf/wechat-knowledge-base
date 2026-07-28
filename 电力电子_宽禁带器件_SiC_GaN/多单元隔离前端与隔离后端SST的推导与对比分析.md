# 多单元隔离前端与隔离后端SST的推导与对比分析

原创 Jonas E. Huber SiC碳化硅MOS管及功率模块的应用 2026-02-19 08:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/sB3AH\_FGEIVJwn\_k-F1TTA](https://mp.weixin.qq.com/s/sB3AH_FGEIVJwn_k-F1TTA)

文章来源: 苏黎世联邦理工院

作者：Jonas E. Huber & Johann W. Kolar

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPuUrPU7mv3oukbvicuyXc4Toq7ZZEibM2QqXb0LtQibnJ52KOFfcGEFs6oquBXahSOxTCHQwPr7Q1vhyGY8VQSI61luJngdbh9Qg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSV8lxibvaZD73qOJO32jbicIc7Gpf7eh46Zu8pKQCsNy73AicwfobuBLdsCqgiblgoSRoQP10L9F4k8OYVEJQG4KrF5VNYQiaZBBo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMZ6hgO9MtfznBWwBwkBStQzncbuiagk7dQn7M2wmrG8nhY3f5QAibUvibT3HvS0FQVjQLbyw6SUMATksCDJnmAEH37v9S20p2404/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP0dUe7xU6SjHylF9dWeGf79HNGneNZaGNmISAUdsE5GC74oNslhn85eqjIiaA0bQdsEhZXg3nAia3NichSyZxHV6zaVJxtpzwk9k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNtiaJvMBb1RAeetQk0MqZHN4hlUSwcDFqneU39Q6aZbh48I0OGJ1kia6RhQmTvwFBJ01x4V9MC1OECetqqpARp54nkuAj8VtzVc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMN3icWk76zqPyQaqCXbfLgWII4FmJiadblcNSgLHEicVyeEibibPgwGQxrjC5WwyIDmuiboUhuiaecPicZTm20ibjxENwiaR5ONsDjaOy7I/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMyCtEpPmrYI9DGzSDxDhpNibicQgEmnbvW6VsBJtEChHOUuibJUrjoJibtMVmj4pmegXDuSRkSkDBh9LEHqlgf4oDCgdnbX2Q8Kw4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMVtTmH6aVxMics0gwlVJog3onLwOJjWmR4sStib2lYWIia5z9qGyA092s61GJYTicVQzQqo64qBMxic1h38NLbIOUwqo84CnzfwMNM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3WFBicgaAKoKlibGV8aDmgjMea5QFWfNiaN1AS5o0gbzosrKLdU8U2qf1hLpHJQcFubUQawWqL3dEeDMm3trPy9yxTUGUiaLX8Zo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNxF4UkpicjImSHG3qBW44YvlFN5rvg97NA0kyOAnp1IwgXYOGgia676HVFPpwdZF5k5Vu766KdjJqiamr9rr4P2ATG1NRUuCT0zU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNu2dxpicicHK4n42anYnnAU0st2EcYibtdyic00nK3zBSYOfF8VtCW5w1Ob4LatSfwHvvRp92icFtibFLQltiaiawGibvFbOLeFBRUiaiaeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpONOVw6Wh7rQ6ia3EgoI9EXRoL5joQOicNictJKvOjj5bfdJfiaHdJ69kVZsbYvaChBSBqhM1t3XRpnFddgZktjCJWo3smxAtfjCEI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPjzWsffDaJ8lq4WhTygSZicN7csg0YDyGnM5yQeicDQibxqicWhS5ax5JCxDybLPMia70abF8KBtsC1Qv9279ibyNJ7GU3H0t7C06kQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPhmMd8DcZ0zjBSteVx0QEwypotx0Q9DiaicVeLuUoMxQibeiaMhibo8ZsUNVzDanqDR4usPDAmZPDpDTSd79AKx9xAQIJtLoQaA8uc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMLZ8FwIjicpibBvSKbBeYgJETgo8wNZdQmiaZvZscguQqm309CjguCadz0IDI826QdL5qJQnYgoCghqIfFs1NX5yRfTn0tPdQUxk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUaItKvUT8tGPWeHWeRZoDdMR63bHtTSDuC4XA9c4wqQG19libic5bL4ACwibu5xWvbfFQ1wia6uEJQEFiadubvAjyuwuVGNibqeOCE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOmGwtOFnTHnb8cFib4Ccv7x6Lz7uTAkUeibnkeKJvgibn3icibcbvlDqWM1qJToUzzsLp2Kn1gKqztGVHY53bF6uicBBOz9diaiaaoZcI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNN7icqrVzHHPDMQ7x7vPD8ia51h0DfxL1nr6ibGLweP7qmEhfNptQUD5q1HDmWVETqtxHYxRTQ6ibUgfMOUnFP7wsepx2HalZeytk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTq2X7EVf5gx9hibyjzSeesMQYUvYBBTRJEWuPVU6icToLI9A2ANFhpqY3FDlhmM29AOdxhmIGdcJichiaohQmpTiauoJSyadK8AOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPE5LKEGwjMicLHX86jic43DPIXNccLwSQehZFWbrbaEEvqtTTshbh2CJMZ6GEtXZChibicamhsE5GClJqmAvr70ZRjhsQmP5icR7GA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNpP0Qpl9Y9iaMia0gXaTlZEDRES9GsyT5UdKTYcGd050lydqu7iazAK0q2vNK8oHoeXKUGwwxp6tBUQFetCUjbalEL597qxchhic4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMbgKJcntwnYcPqJrCSMa5aIialqVJsTQjv1Z8wJFQaUdMicXB6JF2ibm8t5JmTuKAa7VDqBicNzNGRiaY3QlZIibocZvj0L0mpSpIks/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP1yyHEpwUOyO7fOvjGpfHvic11Ua4n85c81YZvkLbummeARdtMianHh1zoibNaHLyibl1ibUHLMxiaxBTFniajZrmAib7yYHMq75aanow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMRMiazOONcyyUbMibsXbvMQ0amvoEF4R0icz8g5YPVaBiaUQqcJib0rRZSVbdicJC1SupoLDl1zNicZcdESEwRY24DeADsqoicej9Js4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMiaPbQcoEsD21VBjPibWdjUCblRu8z7GUtfa4ibToiaTLba9cLDCWvvg9KVVE1dHoKfyaHMmo1HGBEWynAkC3eXSwr7FibSMYDALjM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKQjrHdHWOibXDYJSTEibBYLvzHpb9MUT06g8T6Q5eLfaJvFLYPYqHfMknVPl1m1okr58LB7MXCichT7glGgsN34nlMowQVG2sFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMIypk7XfBujjX2iam0WlrgKnZbvqTIMw2iaSV7w7MrWDfSNFd0vjtWOmVb1RIBuVWKMia4zsc2APzH5KxQOIqx1UfNV4Z2kdDdbc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNic2GFpQBr8XiahPzbic2JKP43x1nkqxmOaibia88GmM4n2YGv3gZ2aECM3dGdY7TYnOa0DA3waEnN88RCtsm5RTaia87TA9T5iahRIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPrmD082AhnSLfunJXZMYsAvyvicyrb00KtgqOg9ibkHRNFexDoKSuPgJC24qAMzmdbHWF7TYfGqfQ2V6gkYtAVWiaib10fTrIxXns/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMuicQp44oT5mfC5s150epsHnYK8ElYEH0mymKBMPB11qRzmkrFYrSNEejcNmxGCribbzLkDQGqJCZ8NykEq59FdviaIiaSg6u07qg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOqTOtqh7kS0rXODS4DEqSSkTEW5yyzC5UQuk3y4a6u1Tg91nJynSbicUDF3AMCTD5xsL8YM07hYctPQwmAqPl3mpxkg4iczobsI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOdTjicJa2l8w3b45O7rzC5y4fskeSAeFzUEqvX8oJDnibJHO928mYTdgIVib28F9sXZ4Y9P57iayumKry1Z12RVnV8IIGFHyWSUuo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNhKFBIxEHxUnEDZjSxlTwSPbOiamtrYWH74Gg0t9ArLicIaLiaoEfX588yNUDlvxtga4Vl6vzfERIHRAIjc4xdGibDlFrtdljas74/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

我们来系统地推导和对比分析“多单元隔离前端”与“隔离后端”固态变压器（Solid-State Transformer， SST）的拓扑结构。

### 核心概念定义

首先，明确几个关键概念：

**1.SST**： 一种利用高频电力电子变换和磁电隔离替代传统工频变压器的装置。其核心优势是体积小、重量轻、可实现多功能（如功率因数校正、电压变换、故障隔离等）。

**2.多单元级联**： 为了适应中高压电网（如10kV， 35kV），单个功率器件的电压等级不够，因此将多个低压功率单元（通常是H桥）的输入端或输出端串联，以承受高电压。这是实现中高压直接接入的关键技术。

**3.隔离位置**： “前端”和“后端”指的是**高频隔离变压器**在功率变换链路中所处的位置。这是两种最经典的多单元SST拓扑。

### 一、 拓扑推导与工作原理

我们以最常用的**AC/DC/AC型SST**为例，其通用结构为：**整流级 -> 隔离DC/DC级 -> 逆变级**。

#### **1\. 多单元隔离前端型SST**

**拓扑结构推导**：

①在输入侧，将N个**完整的、带隔离的AC/DC/AC单元**的输出端（低压侧）串联。

  

  

②每个单元的内部结构为：**H桥整流器（AC/DC） + 带高频隔离的DC/DC变换器（如DAB， 全桥/半桥LLC） + H桥逆变器（DC/AC）**。

  

  

③所有单元的输入端（高压侧）并联到低压交流母线（如400V），所有单元的输出端串联，共同支撑起中高压交流电网。

**工作原理图示意**：

低压AC母线 (如400V)

      | (并联连接)

\[单元1： H桥整流 -> 高频隔离DC/DC -> H桥逆变\]

\[单元2： H桥整流 -> 高频隔离DC/DC -> H桥逆变\]

\[单元3： H桥整流 -> 高频隔离DC/DC -> H桥逆变\]

      | (串联连接)

      ├─┬─┬─┐

      V  V  V  V

中高压AC电网 (如10kV)

能量流与关键特征：

**能量路径**： 低压交流 -> 各单元独立整流为低压直流 -> 各单元通过自己的高频变压器隔离并变换电压/电流 -> 各单元逆变为交流 -> 串联叠加成高压交流。

**隔离位置**： **在每个功率单元的内部**，即位于“前端”。高频变压器数量 = 单元数量N。

**变压器特性**： 每个变压器处理的是**单元的功率（总功率/N）**，工作电压为**低压直流母线电压**（如700-800V）。因此变压器电压低、功率小，设计、制造和绝缘相对容易。

#### **2\. 多单元隔离后端型SST**

**拓扑结构推导**：

①在输入侧，将N个**不隔离的H桥整流单元**的输入端串联，直接承受中高压。

  

  

②这些H桥单元将高压交流整流为**一个共同的高压直流母线**。

  

  

③然后，通过一个**集中式、多模块输入串联输出并联（ISOP）的DC/DC变换器**进行隔离和降压。

  

  

④最后，经过一个逆变器输出低压交流。

**工作原理图示意**：

中高压AC电网 (如10kV)

      | (串联连接)

\[H桥整流单元1\] --\\

\[H桥整流单元2\] ----> 高压公共直流母线 -> \[ISOP高频隔离DC/DC\] -> \[逆变器\] -> 低压AC

\[H桥整流单元N\] --/

      | (串联连接)

ISOP型DC/DC： 由M个**输入侧串联、输出侧并联**的带隔离DC/DC模块组成，以实现高压输入到低压输出的转换。每个模块的输入承受总高压直流的一部分（V\_dc\_hv / M）。

**能量流与关键特征**：

**能量路径**： 中高压交流 -> 级联H桥整流为高压直流 -> 集中的ISOP隔离DC/DC降压为低压直流 -> 逆变器变为低压交流。

**隔离位置**： **在所有整流单元之后，逆变器之前**，即位于“后端”。高频变压器数量 = ISOP的模块数量M（通常M可与前端N不同）。

**变压器特性**： 每个变压器处理的是**模块的功率（总功率/M）**，但工作电压为**高压直流母线电压的一部分（V\_dc\_hv / M）**。这个电压远高于前端型变压器的电压，对变压器的绝缘、绕制工艺和寄生参数控制要求极高。

### 二、 综合对比分析

对比维度

**多单元隔离前端型SST**

**多单元隔离后端型SST**

**拓扑本质**

**分布式隔离。每个单元是一个功能完整的“微型SST”。**

**集中式隔离。级联部分只负责电压承受和整流，隔离和降压由后级集中完成。**

**冗余性与可靠性**

**极高。一个单元故障，可以将其旁路，系统**降额运行**。故障影响局部。**

**较低。如果集中隔离级（尤其是ISOP的某个模块）故障，整个系统可能宕机。故障影响全局。**

**模块化与可扩展性**

**极好。通过增减相同单元的数量即可适应不同电压等级，模块高度统一。**

**较好。扩展电压等级需同时改变级联单元数和ISOP模块数，两类模块可能不同，协调稍复杂。**

**控制复杂度**

**分布式控制，局部均衡复杂。需要实现：1）各单元输入电流均流（保证串联分压）；2）各单元输出功率均衡（保证直流母线稳定）。通信和协同控制复杂。**

**相对集中，电压均衡复杂。需要实现：1）级联H桥的输入侧电容电压均衡（核心难点）；2）ISOP模块间的输入均压/输出均流。控制策略相对成熟但挑战仍在。**

**效率与损耗**

**理论上较低。能量经过**三次完整的变换**（整流->隔离DC/DC->逆变），总损耗是三级变换之和。**

**理论上较高。能量路径为：整流（级联H桥）->隔离DC/DC->逆变。**少了一级逆变/整流环节**（相对于前端型单元内部的链路）。**

**成本与体积**

**变压器数量多（N个），但单个变压器**电压低、功率小、易制造**。半导体器件总数较多。**

**变压器数量少（M个）**

，但单个变压器**电压高、绝缘要求高、制造难度大、成本高**。半导体器件总数可能略少。

**典型应用场景**

对**可靠性、冗余性、模块化**要求极高的场合，如：数据中心供电、军事供电、海上风电汇集。

对**效率、功率密度、成本**更敏感，且运行环境相对稳定的场合，如：电力电子牵引变压器（机车）、某些光伏/储能电站的并网接口。

### 三、 结论与选型建议

**1.技术路线选择的核心权衡**：

**隔离前端型**用**更多的、低规格的磁性元件和更复杂的控制系统**，换取了**无与伦比的模块化程度和系统可靠性**。它代表了“积木化”和“容错”的设计哲学。

**隔离后端型**用**更少的、高规格的磁性元件和相对集中的控制**，追求**更高的效率和潜在的更低成本/体积**，但在可靠性上做出了妥协。  

  

2.发展趋势：

  

随着宽禁带半导体（SiC， GaN）的应用，开关频率大幅提高，磁性元件体积可以做得更小，这在一定程度上削弱了后端型在体积上的潜在优势。

  

对能源系统**韧性**和**可用性**的要求日益提高，使得隔离前端型的冗余架构吸引力不断增强。

  

目前，在学术界和工业界，**多单元隔离前端型（如基于模块化多电平变换器MMC或级联H桥CHB衍生出的拓扑）是研究和应用的主流方向**，特别是在智能电网、新能源并网等新兴领域。

**总结**

**选择哪种拓扑，取决于具体应用的首要约束条件：**

  

若首要目标是**系统绝对可靠、可在线维护、易于扩展**，应选择 **“多单元隔离前端型”**。

  

若首要目标是**在特定功率和电压等级下追求极限效率与功率密度，且对成本控制严格**，可深入评估 **“多单元隔离后端型”**。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNJmpzOtqBKZWkVJpjbKNsyb6b59ibbxmCicyoDL417QTZ3IvIPYIsQydib0pU68vkmEfx9VFYIaEWDJwEV6V3yibLbffTUbXunnzc/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtKJwicymKib05F9WRvkxoNtXw4G884vwSZaVbCsTnpAI1mhzztScibLic7aE9waXVDgia1HFw7Fvd2HTgLZvWshlef0jzMCCm6zxQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMyPSx4klpJiby7DCZicXv5NHFsv3ThZysfrS9hoNbrhcSS6icjbBh7tIUG6kf0piaaicLsLXCjVPRHhgFAVicVGYAib56RxNmsmdLarc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM89ZvQuL7LBDnnLsNibquSdjdN4noVSib3XY6T7skOVMTVDqweMhLMfEO87UmfxvJibwNm7MPuQLZicYtzDPxsf6AkQQ0G0VseuAU/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)