# 爱仕特半导体：650V SiC MOSFET 产品介绍及市场应用分析


> 原文地址: [https://mp.weixin.qq.com/s/h3wgDebX8-KKav\_t3GSfNQ](https://mp.weixin.qq.com/s/h3wgDebX8-KKav_t3GSfNQ)

随着第三代半导体-SiC MOSFET器件的工艺持续成熟、碳化硅芯片成本稳步下行，650V SiC MOSFET已经成为替代 600V/650V 超结硅MOS、低压 IGBT 的主力器件，广泛覆盖 400V 直流母线功率变换场景。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPfNsnX1ZCjLEWPjnG0ooiaDkMIPEUX5xcWc3lZZrsThYWI7sqf3ssbSSrD8j9TSdkkYWULmYkVsZQn5yaHzVHXSJ3JM2Vavv4k/640?wx_fmt=jpeg&from=appmsg)

爱仕特半导体（AST）为国内主流碳化硅MOSFET芯片设计企业，已实现 650V~3300V的SiC MOSFET量产化。 产品封装齐全、多规格导通电阻，覆盖工业级 + 车规级需求。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMTpWZlbagsshnY5fnpBPsKIOesqqML7wqHwPQxibYw4ZWAcwRGNHh2PElxfdumnossbibeQQ4c0zG6ia0odnp0yvhyscBAamccEY/640?wx_fmt=jpeg)

本文结合650V 碳化硅 MOSFET分立器件产品线，从器件封装选型、驱动设计、SiC 固有特性、细分应用场景、系统替代优势完整展开介绍。  

一、650V SiC MOSFET 核心器件特性（对比硅基器件）

先明确 650V 电压平台适用母线：310V 交流整流后 400V 直流母线，是服务器电源、OBC、户用光伏、储能、充电桩模块标准电压等级，也是硅基与碳化硅竞争最激烈的区间。

SiC MOSFET 相比硅超结 MOS / IGBT 核心优势

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPV9gOQCnRwSrlg4j3GdBAYUq6Z2RibP1KsDvRXy51Giacsk64a1cPerjBLnBTM0ibDf0gKrHAfPQzXtoUicw1lmianvSLj9dWTicFZk/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

极低开关损耗：无 IGBT 拖尾电流，Eon/Eoff 远低于同规格硅器件，支持100kHz~1MHz 高频工作；可以提高开关频率，缩小电感、电容体积，提升整机功率密度。

导通电阻正温度系数特性：易于并联均流；高温下 Rds (on) 增幅显著小于超结硅 MOS，高温工况损耗优势拉开差距。

优异体二极管性能：SiC MOSFET 内置体二极管，反向恢复电荷 Qrr 极低，省去外置 SiC 二极管，简化图腾柱 PFC 等拓扑。

高工作结温：最高结温 175℃，高温密闭环境散热压力更小。

输入电容更低：Qg 更小，驱动功耗更低，适合高频高密度电源。

痛点提醒：SiC MOSFET 栅极敏感、阈值电压低，驱动方案需要专门设计，不能直接沿用传统硅 MOS 驱动方案。

二、 650V SiC MOS 产品线 —— 封装体系与选型定位

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO8YEeygo4uLx3589aPiaqXWfeaIDPtgwYxaW0t2Y1LkIFO7VYatHsic3xQlA3dMaV4TJUkicHy2sXK4XFpjrxYX77EkWKGPRks1k/640?wx_fmt=png&from=appmsg)

爱仕特 650V SiC MOSFET 通孔插件中大功率 + 贴片中小功率完整封装矩阵，覆盖几十瓦至几十千瓦应用，主流封装分类：

1\. 通孔插件封装（大功率工业 / 车载主力）

1）TO-247-3L（3 引脚）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPzeIEQ0R3f2ZuEGP9eV2clLwk2EP8oeclnAW74dtyOCoCwWLw346X2WMibia4icX6JyhGO9NVWDlwN0qBj0UpT9FUOyHTGbGFFTo/640?wx_fmt=png&from=appmsg)

TO247-3封装的拓扑图

代表参数规格：650V36A（内阻60mΩ）、650V60A（内阻30mΩ）、650V150A（内阻12mΩ）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMsvx7XNyJBzvniasPvrjcUyavX2ibHDEglnVBXR4dKBb2eDx2jkD9eUzlJG8IeES5JVjxiaC9y9uAeIRPdnHOw7pQdQ1fCCLDT2w/640?wx_fmt=png&from=appmsg)

650V60A关键参数表

特点：行业通用标准封装，兼容原有硅器件 PCB，最小改动替换升级；无开尔文源极。

适用：成本优先、频率≤150kHz 传统方案，储能 PCS、户用逆变器、普通工业电源。

2）TO-247-4L（4 引脚 Kelvin 开尔文源极）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMe7kb4rTHicvIJkUTBVf8vySNtHDhborMSInymvv8HRDricUQ3z047wiaOxaFo0Af19esKr3xCdo1YPsvkljvotcUSepFvEnoK5g/640?wx_fmt=png&from=appmsg)

TO247-4封装的拓扑图

代表参数规格：650V36A（内阻60mΩ）、650V60A（内阻30mΩ）、650V150A（内阻12mΩ）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPgtad2vh5nFstnJ2ibZgXwm2ZJ5uKsg9cHicZCEssC2jE7UibU4ZPCBQt3IECKVqGz1rmkcazhgN8LMgqGuSfBEkSMZqkIrts7GM/640?wx_fmt=png&from=appmsg)

650V150A关键参数表

核心价值：驱动回路与功率回路分离，消除功率源极寄生电感带来的栅极振荡，大幅降低 EMI、减少开关尖峰，充分释放 SiC 高频性能。

适配：图腾柱 PFC、车载 OBC、高频 LLC、大功率充电桩模块（行业主流首选封装）。

3） TO-220F

TO-220F 是一种‌**全塑封、直插式、三引脚功率半导体封装**‌，核心特征为‌**无金属背板、自带电气绝缘**‌，可直接安装散热器而无需绝缘垫片

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO856fJNUgwIlHXaTBtUeGiazuBQ4JRFoD9pPvB4LOBFPTYAaGpTYSqCpKUXz1OUpg70s9wyYaryraVeX5XZUeLlENdSf9IsB1w/640?wx_fmt=png&from=appmsg)

TO220F封装的拓扑图

代表参数规格：650V36A（内阻60mΩ）、650V25A（内阻88mΩ）、650V20A（内阻180mΩ）、650V15A（内阻260mΩ）、650V8A（内阻360mΩ）,驱动电压：+12V/+15V/+18V,支持0V关断。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOLg67CicrvXJhWwuBDbp43FWsFnuibCRPCqYKUCE0ytibl2XtbAfDIiaqibVuQsx96ydA6Nic6xAPDUcEDicOMalJpjmcSVgAvmUNRSQ/640?wx_fmt=png&from=appmsg)

650V25A关键参数表

核心价值：在于‌全塑封绝缘设计实现散热器免绝缘垫安装‌，在保障电气安全（耐压通常≥2500VAC）的同时简化装配工艺，适用于‌中小功率、高绝缘要求且需外接散热器的直插式功率电路‌。‌‌

适配：**开关电源主开关/整流**‌、‌**电机驱动与逆变器**‌、**线性稳压与功率控制、**新能源与车载辅助电源‌：

2\. 贴片表面贴装封装（高密度电源、中小功率）

1）PDFN5×6 / PDFN8×8

PDFN5\*6封装代表参数规格：650V8A（内阻320mΩ）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNQBsXa6xkgQ7AbWarn7o3sYTUmEt5wHC4jgrfjSJZbiauJ4JpjBic6iatYSViaJsFXNVdzvYy1YU82zFVh17u0oQIk66X6nfnZ1Eo/640?wx_fmt=png&from=appmsg)

PDFN5\*6封装的拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOTVC2GX6nOGsG0WHXUl6hnQsDADGIE2al5KVVdD5BmMSrBBgnrxQe9doBd2PibkWZTJJITpScaMjibO4WbibVO5X5JBbIqes3Liaw/640?wx_fmt=png&from=appmsg)

650V8A关键参数表

PDFN8\*8封装代表参数规格：650V60A（内阻35mΩ）、650V36A（内阻60mΩ）、650V25A（内阻72mΩ）、650V8A（内阻320mΩ）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOZXict0Fico5fRC7FRymcfGibM5RNtpdicfFR8w7cScLzCXofbnNIyibGKrGkSbfTRZIn0gPFDicQ9n0ic2qO00K17Aia3OuuI97RXbBM/640?wx_fmt=png&from=appmsg)

PDFN8\*8封装的拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMrrib8BPNzQnHGBgBhdTYpljKzhsxjNVASKJXoobRAK75D6A0YW7HDAXWoPwVbWn9HT62GHBufFws9bYHxiascVVVDW8v6KXPO4/640?wx_fmt=png&from=appmsg)

650V25A关键参数表

小型贴片，面向服务器辅助电源、通信电源、大功率适配器、微型逆变器。

2）TOLL 封装

TOLL封装采用双边扁平无引脚封装结构，且背面金属焊面更大，降低了内阻，散热性能也得到大幅度提升，而它的低引线电感意味着可最大限度地降低导通损耗。薄型封装尺寸紧凑又节约元器件净空高度，因此能够灵活应用于尺寸或内部高度受限的系统。

代表参数规格：650V150A（内阻12mΩ）、650V60A（内阻35mΩ）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPRQsE2TqOJQKTrb2RcNnfMJUzxOt8NxRbbW3uLM9pshX9iblPiaTXKfdxicnibrSSRTqqReib3EZZOLrgDOxOialYmFtaibNPhKjlvqA/640?wx_fmt=png&from=appmsg)

TOLL封装的拓扑图

TOLL封装它具有很多优点，比如低封装电阻、低电压过冲等，能承受较高电流、寄生电感非常低。能让设计的电子产品更加小型化。这种封装的产品在电源、充电器、电池管理系统和逆变器、面向新一代 AI 服务器电源、高密度光储一体机等产品中应用。

3）DT3PAK 封装

T2PAK是顶部散热表面贴装封装‌，核心价值在于‌打破“散热效率”与“低寄生电感”的取舍困境‌，实现高功率密度、高开关速度与优异热管理的统一 。‌‌

代表参数规格：650V60A（内阻30mΩ）、650V36A（内阻60mΩ）

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM9VNHObjWDzX6CZ6w6TgJ5HhFxoHg0SHG20WgMGQdjfCc4Mafy8ak7DcjxEGPOMGn8pSlzCoQXVd3Du1nolNFPgo292lPD5wE/640?wx_fmt=png&from=appmsg)

DT3PAK封装的拓扑图  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMpFiaGlyz5JLc1xoBNWx6boECBpAanibJSAgVUd6fRZb5sJ3Cib4sOMgyj9H74aokXPx54OQgU6JBrsOdwv0NQJq6rc9KCKib51Us/640?wx_fmt=png&from=appmsg)

650V60A关键参数表

4）TO263-7 封装

TO263-7（D²PAK-7）是一种‌7 引脚表面贴装功率封装‌，核心价值在于通过‌多源极并联 + 开尔文源极结构‌将寄生电感压至‌<5nH‌，完美释放 SiC MOSFET 高频、低损耗特性，实现‌高功率密度与自动化产线兼容‌的平衡。

代表参数规格：650V60A（内阻30mΩ）、650V36A（内阻60mΩ）

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPH8vE6zYG858WnJ1BPveRicxEeZD7icYNBd3AticzSJvsWFvqU2l54JXF7ibRfNLblSfibKrOOVgQQSHL0Iprh2iaPBEXC9LXoLZNr8/640?wx_fmt=png&from=appmsg)

TO263-7封装的拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOy5Wle6mHbLTfB1IIuY68laMRz1qiaxwX517iaibxTia6F41nPnrjZO8hzej4XibRgBUfZhGToWFCd4XEhkTzUJpbvp1Nl8GnVAels/640?wx_fmt=png&from=appmsg)

650V60A关键参数表

5）TO252-3 封装  

小三脚贴片封装，俗称 DPAK，薄型结构优势：超薄省空间；焊接简单；适合低压中小电流场景适配：低压储能稳压、板载辅助开关、低压保护电路。

TO252-3封装代表参数规格：650V20A（内阻180mΩ）、650V15A（内阻260mΩ）、650V8A（内阻380mΩ）,驱动电压：+12V/+15V/+18V,支持0V关断。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNViadVV6ZRuNw1KqCDNISPGRa1H1MYrtQwSJt69omgRmXWI7AIPy5I366MZWiarqicR8T7ePJFxtgNfN5uK2tGZuQEnc6ib5yrIibk/640?wx_fmt=png&from=appmsg)

TO252-3封装的拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNibWoicI7Hn5WqfoDQjVTmhFQtmNNpMvja6WZOwFic5u18O5kHGIs0QYTbCIT6aJAHuG3ic1H0icZibaib2ztPZXP7oDS7rJBhokpXibw/640?wx_fmt=png&from=appmsg)

650V20A关键参数表

650V 导通电阻梯度（覆盖全功率段）

380mΩ → 260mΩ → 180mΩ → 60mΩ → 30mΩ→ 12mΩ，工程师可依据功率等级、散热条件灵活选型；同时同步推出 650V SiC 功率模块，面向更高功率等级电源设备。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPcgTiaB1tw4tkMgscT82CwcoOicDvUWrNg2Dq43vPMyibNCpzsrC70XutHQKeB5lZ2kwCcjkRQFxpx54dEJibHVwociaMDgVf5MJicY/640?wx_fmt=png&from=appmsg)

三、驱动电压规范与工程设计要点

SiC MOS 栅极驱动是发挥性能、保障可靠性的关键，不可直接照搬硅 MOS 驱动。

1\. 推荐驱动电平

✅ 最优方案：VGS = +18V 开通 /-5V 关断（行业主流）

+18V：获得最低 Rds (on)，降低导通损耗；

\-5V 负压关断：显著提升抗干扰能力，防止高频工况下米勒效应误导通，避免器件击穿。

⚠️ 兼容备选方案：+12V/+15V/+18V 开通 / 0V 关断

仅适合成本受限、开关频率不高（＜80kHz）场景；缺点：导通电阻上升、高温误通风险提高，不建议图腾柱 PFC、车载产品使用。

2\. 绝对最大栅极电压限制

VGS 最大范围：-10V ~ +22V

严禁驱动电压超过 22V，栅氧击穿是 SiC MOS 最常见失效模式；驱动电路建议增加栅极稳压、RC 缓冲。

3\. 关键设计配套建议

栅极电阻 Rg：5~20Ω 可调；追求低损耗选用小阻值，抑制 EMI、尖峰选用大阻值；

TO-247-4 封装务必独立引出开尔文源极作为驱动地；

高速开关回路必须优化 PCB 功率环路面积，降低寄生电感，抑制电压尖峰。

四、650V SiC MOS 细分应用场景、方案优势 + 器件选型推荐

400V 直流母线赛道是 650V SiC 主战场，下面分车载新能源、新能源光储、算力基础设施、工业电源、充电设备五大板块说明。

场景 1：新能源汽车 —— 车载 OBC 车载充电机（爱仕特成熟量产案例）

拓扑：图腾柱 PFC + 双向 LLC，母线电压 400V

痛点：传统硅 IGBT 开关损耗大、整机功率密度低；超结硅 MOS 难以做到高频双向工作。

SiC 方案优势：

图腾柱 PFC 硬换向场景，SiC 优秀体二极管省去外置 SiC 二极管，BOM 精简；

开关频率从 40kHz 提升至 120kHz，缩小变压器、电感体积，OBC 功率密度提升 30% 以上；

全温域效率提升，降低整车热管理压力。

推荐型号：ASC30N650MT4（TO247-4，60mΩ）

市场现状：该型号已大批量配套车企车载 OBC项目，是国内650V车规SiC标杆型号之一。

场景 2：光伏储能领域（户用逆变器、微型逆变器、储能 PCS、光储一体机）

1）户用单相光伏逆变器 3~10kW

母线 400V，Boost + 全桥逆变；使用 650V SiC 替代低压 IGBT。

优势：提升逆变效率，降低轻载损耗，降低散热器体积。

2）光伏微型逆变器 / 阳台光伏 MLPE

单机功率 200W~2kW，要求极高功率密度，安装在组件背面高温环境。

选型：PDFN 贴片、TOLL 封装低 Rds (on) 型号；支持高频缩小磁性器件。

3）户用储能双向 PCS（重点增量市场）

双向能量流动，频繁软硬切换；SiC 无拖尾电流，充放电双向均保持高效率。

场景 3：AI 服务器 / 通信电源（数据中心算力电源）

拓扑：图腾柱 PFC + LLC 谐振变换器，400V 中间母线

行业趋势：全球数据中心能效标准持续收紧（80PLUS 钛金），强制提升轻载、满载效率。

系统优势:传统超结硅 MOS 在高频下开关损耗急剧上升；采用 650V SiC MOS：

满载效率提升 0.5%~1.2%，长年运行电费节约巨大；

开关频率由 60kHz 提升至 150~250kHz，减小谐振电感尺寸；

改善高温环境下电源降额问题。

选型方向：TOLL 贴片、TO-247-4 大电流型号，面向千瓦级服务器电源。

场景 4：直流充电桩模块（20kW/30kW 充电电源模块）

充电桩内部前级 PFC 与后级 DC/DC 普遍采用 400V 母线架构。

650V SiC MOS 用于模块前级图腾柱 PFC；对比硅器件：

模块温升降低，提升长期运行可靠性；

同等功率下模块体积缩小，实现充电桩小型化；

模块峰值效率突破 96.5%。

场景 5：工业电源：UPS 不间断电源、高频焊机、工业激光电源

1）中小功率单相 UPS

双向逆变工况，SiC 适配频繁切换；降低待机损耗。

2）逆变电焊机、等离子切割电源

传统方案大量使用硅 IGBT；替换为 650V SiC 后，开关频率提升，焊接输出纹波更小、整机轻量化。

五、650V SiC MOS对硅基器件替代总结

对比维度

650V SiC MOS

650V超结硅 MOS

600V 低压 IGBT

高频特性

可达200kHz+

＞100kHz损耗暴增

存在拖尾电流，频率受限

双向拓扑 / 体二极管

可用于图腾柱 PFC

体二极管性能差，必须外加二极管

无法双向工作

高温损耗

温升增长平缓

高温导通电阻大幅上升

关断损耗随温度明显增加

功率密度

最高

中等

最低

初期器件成本

较高

低

低

综合系统成本

高频方案具备优势（无源器件、散热器缩小抵消芯片溢价）

低频方案成本优势

大功率低频场景尚可，高频无优势

### 市场替代节奏判断

###   

### 低频（＜50kHz）低成本民用市场：短期硅基依旧占优；

###   

### 高频、高密度、高效率刚需市场:（OBC、服务器钛金电源、图腾柱 PFC、储能 PCS）：650V SiC 渗透率持续快速提升；

###   

### 随着国产碳化硅良率提升、价格持续下行，2026-2028 年 650V SiC 会持续挤压 600V 硅 IGBT 与高端超结 MOS 市场份额。

  

六、总结

爱仕特半导体完整的650V SiC MOS产品线，覆盖TO-247-3/4 和TO220F通孔、PDFN、TOLL 、TO252、TO263等多类贴片封装，搭配成熟的+18V/-5V驱动应用方案，完美匹配 400V 直流母线绝大多数功率变换设备。

在车载OBC、服务器电源、户用光储、充电桩模块等高价值场景，650V碳化硅 MOS依靠极低开关损耗、高频能力、优异高温特性，实现整机高效率、小型化、轻量化；随着成本持续下行，650V SiC MOSFET将成为400V母线平台功率变换器件的主流优选方案。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOzd87WAU0E2mXAFL4NnBbKiaO1yWTJB3Y31iajevOohmZRzCAib27oIMGOSDL9WHCiasIAjHHeFWPqMjOjVEVXiadQ1dGYOl5PCdw8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMp1xEwjBCIqCer8ST7HlEss7F3qXEat39MxMVTbPQJxrll9HqX4JFzanGODdiciaDEMblETkicjibGrV7XTkaLggqa2qZWGM2WFqM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMiadyk8Xly5ePIZsZSVzmjFBzibp9C9uGYHricOtPvlJicGB2ZtP1xVRCMI3rUVa9dRyLDqwkF2JqicNicgD1lluOAX7A1yyOg1aicjw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPvxfPo6Bgf9sDwJTLAibHFBnymvk6wboKicZ3EdGQqMg4C3ib512bMJOJQSKOhvwdlJH7CjctZ95l1OpehDwkbQVLEnBLXl1Po1Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)