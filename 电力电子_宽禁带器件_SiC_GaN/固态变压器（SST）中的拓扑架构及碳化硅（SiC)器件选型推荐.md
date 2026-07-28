# 固态变压器（SST）中的拓扑架构及碳化硅（SiC)器件选型推荐


> 原文地址: [https://mp.weixin.qq.com/s/VeYueh6nC0sZBCAfblu7YQ](https://mp.weixin.qq.com/s/VeYueh6nC0sZBCAfblu7YQ)

固态变压器（SST）在国内火速发展，并非单一因素驱动，而是‌AI算力爆发带来的供电架构革命‌，遇上了SST本身的技术代际优势，在核心器件国产化带来成本大幅下降的催化下，叠加国家政策的强力扶持，共同开启的一个确定性极高的千亿级产业趋势。它正从“锦上添花”的创新技术，转变为支撑未来AI和新能源发展的“刚需”基础设施。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPC3GQog28ovnfk8RjLLOo2Tv6QC7RVsBnW2jRJnXG7y1ib8eOaibX9LWqLAfAO0LTdILhIRTCgSRSoQWsgCproNCwqEwVksicJ0w/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

一、固态变压器（SST）定义与主流应用

1\. 基本定义

固态变压器（Solid State Transformer，SST，又称电力电子变压器 PET），以第三代半导体功率器件 + 高频隔离变压器替代传统 50Hz 工频变压器，将电能变换拆分为多级电力电子变换链路，在实现电压变比与电气隔离的基础上，集成电能质量治理、双向功率调度、故障限流、交直流多端口互联功能，是新一代 “电能路由器”。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOiaSI4lwBJMJqLlEDTXMzU9GHCvPsJpxjoR1zalibNwBrxCsNEVkCGoAJxpNfWbcj7OugSohmFNu9KIsqs1CLzl8HS8WqLwVHy0/640?wx_fmt=png&from=appmsg)

图片来源：AST

核心机理：依靠提升开关频率（20kHz~200kHz）大幅缩减高频变压器铁芯体积；依托 SiC 器件极低的开关损耗，实现整机高功率密度与高效率。

2\. 核心应用场景

AI 数据中心高压直流供电

10kV 中压直降 400V/800V 高压直流，省去多级工频配电链路，适配机柜 48V 直流母线，解决传统配电占地大、损耗高、无法兼容储能双向交互的痛点。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpP3GM8HOdM0t77NrAEhsziaJW8bTu3rSibZib8UPXQMIticjbzibia5vawQQqpM9gwvI6iaN82GnCf2aCDCvOUeMdp7y2mPZOsThj2Y0A/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

大功率电动汽车超充站

中压直降 800V 直流，直接匹配动力电池电压，替代箱变 + 多级整流方案，单机功率提升至兆瓦级。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMtIZ9wmNjgGl3FEkZ4UHT9GQdO13Qpq8JCb0w2j8f1F3nkSCT5pWQmpu23cGBzLJJTMcBygzIEcEzmPNgpcXV6qoTwqODloHk/640?wx_fmt=jpeg)

图片来源：网络

中压智能配电网

分布式光伏、储能并网，实现双向潮流、谐波隔离、电压暂降治理。

轨道交通牵引、船舶电力系统、柔性直流配网。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPjYhoyx966xwJeMHnViceyQdwWibKaHw7rmee6vLM9GaAoOEVfJxicOXBxTFicMiaWPnSQxWbC47V8uW8T59G54g3BmCicey9GdnKno/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

二、三级式 SST 整体架构及核心优势

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMNDwXWDoAM9PXy2J8z0j8QOibxPB2yn24hIiaYEhISWIqO2SM8jru0YFK1WaQYqqawhj50ePZ79TtmmuY6OibDNdSJyRicGHYXLhE/640?wx_fmt=png&from=appmsg)

图片来源：AST

1\. 三级标准拓扑

整套链路分为三级，各级控制相互独立，便于模块化并联扩容：

第一级：AC-DC 有源整流级（电网接入单元）

中高压交流→稳定高压直流母线，完成单位功率因数整流、谐波治理与母线稳压，同时支撑低电压穿越、无功补偿等电网功能，是SST接入中压电网的入口。

第二级：隔离型 DC-DC 变换级（SST 核心单元）

高压直流→高频方波→高频变压器电气隔离→低压直流；实现电压等级大幅降压、电气绝缘，同时实现双向能量流动。决定了整机的功率密度与隔离耐压水平，也是碳化硅器件高频优势发挥最充分的环节。

第三级：输出 DC-DC/DC-AC 稳压级

将隔离级输出直流稳压为 400V/800V 高压直流或者工频交流，匹配服务器、充电桩等终端负载。

2\. 三级架构核心技术优势

功率密度跃升 70%~90%

频率由 50Hz 提升至 50kHz 以上，高频变压器体积缩小 90%，滤波电感、母线电容容量大幅降低，整机体积仅为传统方案 1/3~1/4。

电能柔性可控

具备毫秒级调压、无功补偿、谐波阻断、短路限流能力；功率双向流动，天然适配储能 V2G 双向交互。

全链路效率更高

采用 SiC MOSFET + 软开关技术，整机峰值效率可达 98.5%~99%，显著降低数据中心、充电站的常年运行损耗。

模块化设计，扩展性强

子模块可标准化批量生产，多模块并联冗余，支持 N+1 热备份，运维简单。

原生适配交直流混合电网

中间直流母线可直接并接光伏、电池储能，无需额外变换环节，简化微网架构。

三、第一级：AC-DC 整流级主流拓扑 + SiC 器件选型

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNsrmPp5zWBfRSQtP3MiauRI4yJ4VFu7Pm5a53zGrYnWqStlEdqYufpKIsxzxgh32fQvhNWC5RaTdppJNrRoLHnDJNA1aofsBgQ/640?wx_fmt=png&from=appmsg)

图片来源：AST

（一）主流拓扑选型（按电压等级划分）

场景 1：380V 低压输入（数据中心低压进线 SST）

图腾柱无桥 PFC（图腾柱整流）

首选拓扑，双向运行，功率因数接近 1，THD 极低，非常适合双向储能型 SST；采用全 SiC 方案可做到 60kHz 以上高频运行，减小 EMI 滤波器体积。

维也纳三电平整流器

单向大功率整流，成本更低，电能质量优异，多用于单向大功率数据中心供电模块。

场景 2：10kV 中压直入（中压 SST，主流商用机型）

级联 H 桥 CHB 整流器（行业绝对主流）

多单元串联分压，每个子模块承受 1200V 直流电压，无需 10kV 高压器件，大量使用 1200V SiC 模块，量产成本可控；模块化冗余，单单元故障可旁路退出运行。

三电平 ANPC 有源中点钳位整流

单台变换器耐压更高，器件电压应力减半，适用于高压大功率单机模块，开关损耗更低，共模电压更容易抑制。

两电平全桥 PWM 整流

仅用于小功率低压单元，中压场景极少使用。

（二）功率器件选型（全 SiC 方案为当前最优路线）

1）低压整流单元（380V 输入，母线 700~800V）

器件：1200V SiC MOSFET（半桥模块 Easy3B/62mm/ED3 封装）；

型号方向：国产 1200V/200~300A 半桥 SiC 模块，内置 SiC 肖特基二极管，零反向恢复；

器件核心优势：无 IGBT 拖尾电流，硬开关下开关损耗极低，图腾柱拓扑可以稳定工作在 50~100kHz；反向恢复电荷几乎为零，彻底消除续流二极管损耗。

2）中压 CHB 级联子模块（单元直流母线 1200V）

器件：1200V SiC MOSFET 半桥模块；大功率单元选用 ED3 大电流封装；

高压拓展方案：1700V SiC MOSFET，减少串联单元数量，简化整机结构。

3）为什么放弃硅基 IGBT？

硅 IGBT 存在关断拖尾电流，开关频率上限仅 3~5kHz，输入滤波器体积巨大，完全丧失 SST 高频小型化的核心优势；只有全 SiC 才能释放 SST 功率密度潜力。

整流级器件核心优势总结

SiC 零反向恢复，完美适配无桥 PFC 双向硬开关工况；

高温特性优异，结温 150℃下导通电阻上升幅度小，散热成本更低；

寄生电容小，dv/dt 可控，更容易控制共模 EMI。

（三）SiC器件对应器件选型

首选方案：1200V器件+三电平NPC拓扑（高可靠与高集成优先）

当前10kV级SST批量交付的主推配置。依托三电平中点钳位的分压特性，单只开关管仅承受半数母线电压，因此1200V SiC可稳定支撑1500V直流母线，单管实际工作电压约750V，降额比例达62.5%，充分满足宇宙射线FIT与开关过压余量要求，可靠性冗余充足。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPJ3yXnKkhuQZgO9FdvR0At9l5bZudWvVhgnSdm7h0fd6lyYkLLNqeKuibR65FFuia1gvz3hXfiaogRsS2btwSMcp5VswO2niaAia1Y/640?wx_fmt=png&from=appmsg)

Easy-3B封装的三电平模块拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM11PLHVLmKffLgkrFqHviaXia3vbebtWy6eYn2wo9rCrvcWYTia86IFdfA3ajpL3HXoE7bJRyZCsdMbDT0Ao0yE9WUAdnRTbce48/640?wx_fmt=png&from=appmsg)

1200V380A产品关键参数表

1700V电压 ME3/MED系列半桥模块

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOwCo31f95PUJYCQT56DjfACe0mjMfsrfT0icTqSgiasE1xATF6AjDM6cpp7KwOibdjTPF4rMF6kDyGia3f5V07bjG3LGC6yZOWibPg/640?wx_fmt=png&from=appmsg)

62mm封装模块产品拓扑图（外并二极管）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPGqHPZIpeJm67ialD0mGHjNtBuXokG3EicoGhd2yYYCYUyQ1wBN2EjA8DsvaqTE2IwSxunNEtoFoeFHtib2T1icBy9QK1pG1iafhPg/640?wx_fmt=png&from=appmsg)

1700V300A产品关键参数表

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP1Wxt08KsFOMozSGtcNgTw3vrlHaianwqWCkjjQDmvl8uibxnztY0efE7OkHe0JC6ibqPpnICjAXL8liaoRDTGUicGoxiaCNgVW1mJc/640?wx_fmt=png&from=appmsg)

62mm封装模块产品拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPoZXTspLmVJv3gficn3Hmoq7P28bhHDu7SoUYys0KH4Xbdm4BCZ7g7MYDFFO2wX6fbiaavn791zE8PDKicas6GcHB74ZOhcciaEk8/640?wx_fmt=png&from=appmsg)

1700V600A产品关键参数表

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPHQXTj18bbUQ4iacnADV0kAvvZNDV7heyMiaO1dLAdwdoDPKic02npy9O8rmPly0QFAjQVuZibW6kcW6fr1SGd6LgqTnKPdD0PLaY/640?wx_fmt=png&from=appmsg)

ED3封装模块产品拓扑图（外并二极管）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNMQNqdyrVAKMtrAcs79IneiccniasHVf9YN9HX6SXT8n1fpGF6xgOKxNTKYTzKezsH1RysYl6EsORFXLT5mwZ7Ldywua8fNiasXc/640?wx_fmt=png&from=appmsg)

1700V300A产品关键参数表

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN02sDAuAesia7E70icjCA0XJsNwgVpq7mSOHWeF4vgM86BSD1K8svJk1IhlkI7Sia0LObJxomib8F030eiaLfOFgdybkfsAQAib5P7Y/640?wx_fmt=png&from=appmsg)

ED3封装模块产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNDiayZ831iby8BIxaicD1vwWD8gj8Ymafkx8Ywo1EB0EOia6ibXl7eyz2Okdce5n5XuQickZ1ylmIpm7vf6GBLRLkibovfniaEDega5e0/640?wx_fmt=png&from=appmsg)

1700V1000A产品关键参数表

四、第二级：隔离 DC-DC 变换级（SST 核心）主流拓扑 + 器件选型

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlZMmxRPepTbOhrgORlGGFQkrmfcic9cT6zxoJK8KQiafzHdaoEfOddyf0iam8AxdnORnic6Tqb09hZIc2NQa3vVyvQaEicIGHXW6k/640?wx_fmt=png&from=appmsg)

图片来源：AST

（一）两大主流拓扑

拓扑 1：双有源桥 DAB（工程量产首选）

电路结构：原边 H 桥 + 高频变压器 + 副边 H 桥，依靠原副边方波移相角控制双向功率传输。

核心优点：

天然双向功率流动，完美匹配储能双向充放电；

利用变压器漏感作为能量传输电感，无需额外串联电感；

宽负载范围实现 ZVS 零电压开通，软开关稳定可靠；

控制逻辑成熟，环路简单，并联均流易于实现，抗短路能力强。

适用场景：兆瓦级数据中心 SST、超充 SST、级联 CHB 配套隔离单元。

拓扑 2：CLLC 对称谐振变换器（追求极致效率的优选）

电路结构：原副边对称谐振网络，PFM 调频控制。

核心优点：全负载范围实现原边 ZVS、副边 ZCS 零电流关断，二极管无反向恢复损耗；电流为正弦波，EMI 噪声远低于 DAB；满载效率可以突破 99%。

短板：调频范围宽，轻载增益容易跌落，双向控制复杂度更高；更适合单向大功率高效整流场景。

补充：LLC 单向谐振变换器

仅适合单向降压场景，无法双向运行，在储能型 SST 中很少使用。

（二）隔离级功率器件选型（全 SiC MOSFET 方案）

1\. 主流电压等级

低压隔离单元（母线≤800V）：1200V SiC MOSFET 半桥 / 全桥模块（QDPAK、E2B、ED3 工业模块封装）；

高压隔离单元（母线 1200~1600V）：1700V 国产 SiC MOSFET 模块，是当前中压 SST 国产化主力器件。

2\. 器件核心优势（针对 DAB/CLLC 高频工况）

极低的开通 / 关断损耗，在 50kHz~150kHz 高频软开关工况下，损耗远低于 IGBT；

体二极管 Qrr 极小，DAB 环流工况下，续流损耗可以大幅降低；

输出电容 Coss 小，ZVS 软开关区间更宽，轻载依然可以维持软开关，避免效率跳水；

短路耐受时间（SCWT）可控，配合高速驱动电路，满足 SiC 器件保护要求。

3\. 封装选型建议

大功率单元优先选用低寄生电感的工业半桥模块（半桥模块 34mm/62mm/ED3封装），降低母线杂散电感，抑制开关尖峰；中小功率子模块可用 SOT227、TO247分立 SiC 器件进一步压缩成本。

（三）SiC器件对应器件选型（按功率梯度）

**中小功率子单元：**TO247-4/SOT227封装分立器件，开尔文源极设计降低驱动干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPv4V4aB9J3SQrAtnn9VAIZmUDmABs0nnktpCEs1qCtWB6CIKaz1BDbzAc4VicVS0ict2QUGiaQdfxsYlaYic7P0nlIYYK4hRQgJSM/640?wx_fmt=png&from=appmsg)

TO247-4封装产品拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOb6ReQyeRA619WOUw60TtntgFfnHxSAamMeEf53Ml2acHX6pP2Kugeia39xQiabUJstQaPAjfBo0Wkej1j7x4Oaa7dn0lLJiaic0s/640?wx_fmt=png&from=appmsg)

 1200V115A产品关键参数表

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMvYlEt8Lvmj9Miaaozcb6TRq27ybMV9VAicxUO9DMI87TH6YFyyHlDkOGCt5Dolb7jUfcQFB17oGTBjI0HriaK3NTDuE97fiaWoGQ/640?wx_fmt=png&from=appmsg)

1200V150A产品关键参数表

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO50SibC3EfQXC2liafhasSghn8BHjskasFY45Xv7iazvcnVF6gOZd47b6ia6Eo4WAMickGzb7BKEnWbXlVVibPh2RybxIKx1icflVBE4/640?wx_fmt=png&from=appmsg)

SOT227封装产品拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN0IzKhQfrocC3iayFkjqYHVA3x93nIyt0oQ3hwUn27omibIDuictLkVSUSAT19X65828GFdeu8oXh65oXOt3aPLYib0icfsJsW9QtY/640?wx_fmt=png&from=appmsg)

1200V250A产品关键参数表

**中大功率子单元：34mm/**62mm封装模块，低热阻、高电流密度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMIZqkJD1uTCzYhC47HIIwjiaVCQkCuNIevTHXM2cicUMzRV2WibsrlfKHibwXEsaIanhric2cbnKbwlaAibGeJLfmcrdZRUha4UDOF4/640?wx_fmt=png&from=appmsg)

34mm封装模块产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP6fhqM5sibax89X4Dsu6lwh2fCYCmWUyzrmDqnX3N19hibytm3vNNwBaokbbrk6Jnz3ZnEDQxa5SKFYOwaUYRwkCZc0WrzyRibkA/640?wx_fmt=png&from=appmsg)

1200V300A产品关键参数表

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNYA5SGGgX2vRJQlZibiaDYTUtwQwUqTfWLrm7XV68R9sPgib9FKEEbMCibOQMueZqLVkDlsKpNlCagHWK9V9SibpppJhhpn97nmmVo/640?wx_fmt=png&from=appmsg)

62mm封装模块产品拓扑图（外并二极管）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUPthNPcGawje4q6VAlhX4DPXTpIrNmKZZgZGt7eLs3GK0JZk3uY6TjPYdwhebHREicleml0ZVHqhg62yUuzB09vx4OkgKbYzk/640?wx_fmt=png&from=appmsg)

1200V600A产品关键参数表

**工业标准封装场景：**ED3封装模块，兼容性强。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpObGoz0hUUpZXBqpYQBRDGO7dniavbWUBGaALmZqZQ4BOc04Ockm1SrRM1qM4K3epg8AGbEzB9zTKic5CTWYmE88yciaJxFKFyPow/640?wx_fmt=png&from=appmsg)

ED3封装模块产品拓扑图（外并二极管）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPacbsAhDlz5MWJVc7H4NzK8lgNvdxOlAPn8IESkeM5nTxelgE3rNW46mCHXccecsQXbhePic6FagKo1XFdQs4ArtMKfR3XRxpQ/640?wx_fmt=png&from=appmsg)

1200V400A产品关键参数表

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkHcHxDbRp8tpyMojCRNe83XtvHpibicQeBTfCA1Ap2c7shMQ06lv1WMxldTEkIibNEdeUdib4LmwtQ030NOs7ffgTvyo3G1Seqm4/640?wx_fmt=png&from=appmsg)

ED3封装模块产品拓扑图（外并二极管）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMxvxE4I1icETfvU3NzLibA10iajkE9iaTiaibJd2LoslHujGMr8pUMkAjoYFEMziceJaItlw9M5icJUVvicjvckHVFWtj56g582VVpnnlM/640?wx_fmt=png&from=appmsg)

1200V1000A产品关键参数表

五、SST 整机设计阶段核心重点与工程注意事项

（一）器件与驱动设计（SiC 应用第一难点）

门极驱动匹配

SiC 器件 dv/dt 极高，必须选用带负压关断、双路独立保护的隔离驱动；严格控制门极电阻，平衡尖峰电压与 EMI；驱动回路布线必须最短，减小寄生电感，防止振荡。

抑制电压尖峰

功率母线采用叠层母排最大限度降低杂散电感；合理配置 RC/RCD 吸收电路，不能单纯依靠器件耐压硬扛关断过电压。

器件降额使用

电压降额≥30%，电流降额≥40%；1700V SiC 器件直流母线不超过 1400V，避免长期电热老化失效。

并联均流设计

多管并联时严格匹配芯片批次、布局对称；选用正温度系数 SiC MOSFET，避免电流集中烧毁单管。

（二）高频变压器（中频 MFT）设计（决定功率密度与绝缘可靠性）

磁芯选型

优先选用纳米晶、非晶合金磁芯，高频损耗远低于铁氧体；工作磁通密度合理降额，避免高频方波激励下磁芯饱和。

绕组与寄生控制

严格控制原副边漏感：DAB 需要精准匹配漏感作为储能电感，误差控制在 ±5% 以内；

减小原副边绕组耦合电容，抑制 SiC 高 dv/dt 带来的共模漏电流；

增加静电屏蔽层，切断共模干扰通路，降低整机 EMI。

绝缘与局放（中压 SST 生死关）

高频陡沿电压极易产生局部放电，绕组绝缘必须采用耐局放材料；严格保证电气间隙与爬电距离，高频变压器不能套用工频变压器绝缘标准。

多物理场散热

绕组趋肤效应、邻近效应会带来额外铜损，导线选用利兹线；合理设计风道，避免热点聚集。

（三）主电路与布线设计

直流母线杂散电感控制

各级直流母线使用薄膜电容就近安放，功率回路尽量短、宽、叠层布线，把母线杂散电感控制在 10nH 以内，否则 SiC 关断尖峰极易击穿器件。

三级母线解耦

前后级增加二阶 LC 滤波，隔离开关频率谐波，防止前后级相互串扰引发系统振荡；尤其注意数据中心恒功率负载（CPL）带来的负阻抗失稳问题，必须增加有源阻尼控制。

EMI 分层治理

整流级 PFC 增加共模 + 差模滤波；隔离级高频方波做好屏蔽接地；变压器增加屏蔽绕组，抑制共模传导干扰。

（四）控制与系统稳定性设计

三级控制完全解耦

整流级只管母线稳压 + PFC；DAB 只管隔离级功率传输；输出级只管末端稳压，各级环路带宽分开设计，避免控制环路相互耦合振荡。

软开关边界优化

DAB 移相区间做限制，保证全工况维持 ZVS；针对轻载、突加突卸负载工况，优化移相 + 占空比混合调制，防止软开关丢失。

多模块并联环流抑制

CHB 级联单元做好均压；多台 DAB 并联时采用有源均流控制，匹配变压器寄生参数，抑制暂态冲击环流。

（五）保护逻辑（SiC 整机可靠性关键）

纳秒级短路保护：SiC 短路耐受时间极短（仅几百 ns），驱动必须具备硬件级短路闭锁，软件保护来不及响应。

分级故障保护：单元故障先封锁脉冲，再旁路模块，最后整机停机，防止故障扩散。

母线过压、过流、过温、浪涌保护分级配置，应对电网跌落、输出短路、励磁涌流等电磁暂态工况。

（六）电磁暂态仿真前置工作

样机投产前必须完成 μs 级电磁暂态仿真：

SiC 开关瞬态尖峰、变压器励磁涌流、输出短路暂态、负载阶跃扰动、多模块并联环流；优先使用 PLECS+Maxwell 场路耦合，把母线杂散、变压器寄生电容、漏感全部带入模型，提前规避振荡与过电压问题。

（七）系统效率优化要点

全链路采用 SiC 器件，杜绝前级硅 IGBT 拖后腿；

DAB/CLLC 保证全工况软开关，把开关损耗压到最低；

优化变压器铜损、铁损，避开磁芯损耗峰值频段；

合理分配各级损耗，均衡热负荷，简化散热系统。

六、简要技术路线总结

架构：三级式解耦拓扑是当前商业化唯一成熟方案，CHB 整流 + DAB 隔离成为兆瓦级 SST 标配；

器件：全 SiC 是必由之路，低压用 1200V SiC 模块，中压拓展至 1700V 国产 SiC MOSFET；

核心瓶颈：SiC 驱动抗振荡、高频变压器局放绝缘、母线杂散电感抑制、恒功率负载系统稳定；

落地顺序：先子模块电磁暂态仿真→器件 + 母排硬件优化→软开关调试→多模块并联均流→整机 EMC 与可靠性试验。

碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPmD79kKIlqS1BEicO6d3aKENSd6ZWpibHB8u60WCpUtyeBnkunNfSj50PCUTVoG6wAlTHviaPLloAUbuVDuzPks7dbPkoBBw2W7E/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=7)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMEu7zd4JAN0unp9SfgRvBpRTKn4cYibscF4cIRmVxVhPeDTzicVf7YkNBJPqqDu2krLznvt5RzMp9Qq3ZcSBszhI5UMAsQcialGg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=8)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

[TOLT封装的SiC MOSFE产品及应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539705&idx=1&sn=db2369c1e63b225addf08cc23cc0ebd2&scene=21#wechat_redirect)

  

[TOLL和TOLT封装的SiC MOSFTE应用对比](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539428&idx=1&sn=6bdc5cb8a49590ef8d291338747a79b6&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMAXJEDvoR0dHtZo8boh5mnUHk6qd4X4RsxdsObREKjbRF8zicl3C1icCulkMzbGCNd2c00WWVbuq0xKK52FicU61ibIhogIjJuNq4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=9)

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

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPedLuGicRkwLsJCG4uTIETAOibO8nh11jOZiaq01LvM6H08lb2vS6KWLPFwpy8j5bLBtfBQWLLWqSxxOUtcerTCxut96P2uyvPsU/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

    

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMlOX346xohTM9ic78ra09kIWMU1uibmBphanBibgibfMgfH6ib7BFOMzdXOFicNfx6MC0nVcQWDqHRH69pWfIoP77S2zy00wic7RWUj8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=31)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOD1MuUWt6Cs5GHWAia28ia4X4qJbS8syuZXfq77a5fMfsTo4eynElKqcKWJNzR0bwMvkkW0rESSISL4mp2yaQsbu6jkLyppz60Y/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)