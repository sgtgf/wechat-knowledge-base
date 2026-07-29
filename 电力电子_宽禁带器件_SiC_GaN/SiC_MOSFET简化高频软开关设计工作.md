# SiC MOSFET简化高频软开关设计工作

原创 Ke Zhu SiC碳化硅MOS管及功率模块的应用 2025-09-14 10:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/jGFglfIF707WM0b6BC2xvA](https://mp.weixin.qq.com/s/jGFglfIF707WM0b6BC2xvA)

文章来源：APEC2024(Qorvo)

作者：Ke Zhu, Ramanan Natarajan

![](SiC_MOSFET简化高频软开关设计工作_images/img_000_c82ae0e173eb.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_001_1bbabe5b64ab.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_002_a4ce4a220113.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_003_98154f850bbc.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_004_63f2f9de8807.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_005_ec280f17d7f7.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_006_666416a5fd0b.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_007_fa8b9fb399ec.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_008_205a33aa5d5b.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_009_6018df442d64.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_010_51934dc45428.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_011_30fa96d8e558.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_012_4725b5ea4ce7.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_013_596bbb561f92.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_014_77458ce2cd73.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_015_fca7c5e8b5d0.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_016_f71946b89520.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_017_0ca49a0efde7.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_018_fbab8f65e4a5.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_019_c0a308aa55ac.png)

![](SiC_MOSFET简化高频软开关设计工作_images/img_020_9b5bf5e3f85d.png)

注：文字与报告无关

SiC MOSFET 通过低 Qrr、低 Coss 与低 Qg，显著放宽 ZVS/LLC 的实现窗口，简化参数迭代与缓冲设计，在高频与宽工况下提升效率与功率密度。

* * *

###   

### 它如何简化高频软开关

###   

低 Qrr：显著降低硬开关与轻载 / 瞬态损耗，拓宽软开关范围，减轻设计对 “全工况零应力” 的苛求。

低 Coss：更快放电至零电压，缩短死区、提升占空比与功率密度，更易在宽输入 / 负载维持 ZVS。

低 Qg：降低驱动损耗与死区中电流拖尾，轻载效率更好、动态更稳。

高导热 / 高温稳定：放宽热设计余量，降低参数对结温漂移的敏感性。

* * *

###   

### 典型设计减负点

###   

参数收敛更快：硬开关不可避免的工况，SiC 仍能保持低损耗，减少 “软开关失效点” 的补偿与反复仿真。

轻载效率更易达标：低 Qrr 与 Qg 抑制轻载硬开关与驱动损耗，降低对复杂轻载策略的依赖。

缓冲与 EMI 更可控：用低 Rg 配合 snubber/Cds 快速抑制 VDS 尖峰与振铃，兼顾低损耗与 EMI。

磁件与散热更精简：高频化允许更小电感 / 电容，银烧结等封装降低热阻、提高密度与可靠性。

* * *

###   

### 快速落地要点

###   

选器件与拓扑

优先低 Qrr、低 Coss、低 Qg；半桥 / LLC/PSFB 在高频更易实现 ZVS。

评估封装热阻与导热（如银烧结），按目标结温反推 Rth 与散热。

设定死区与占空

以 Coss 与谐振参数估算死区，SiC 通常可较 Si 缩短；实测验证零电压窗口与占空比提升。

缓冲与 EMI

低 Rg+snubber/Cds 抑制 VDS 过冲与振铃，比单纯加 Rg 更高效。

优化功率回路与驱动回路寄生，减小 di/dt/dv/dt 带来的 EMI。

轻载与瞬态

利用 SiC 低 Qrr/Qg，简化轻载降频 / 变频策略，降低轻载硬开关与驱动损耗。

负载 / 输入突变时，SiC 仍能保持低损耗，减少对复杂缓冲与钳位的依赖。

* * *

###   

### 常见误区与优化

###   

误区：用高 Rg 降 EMI。优化：低 Rg+snubber/Cds，在抑制尖峰的同时维持低 Eoff。

误区：追求 “全工况完美 ZVS”。优化：SiC 允许硬开关工况存在且损耗可控，减少辅助电路与迭代成本。

误区：忽略 Coss 非线性。优化：在关键工作点（如母线电压 / 0V）测量并据此调整死区与缓冲。

* * *

###   

### 小结

###   

高频软开关设计中，SiC MOSFET 将 “零电压实现难、参数窗口窄、轻载 / 瞬态硬开关损耗大” 的痛点，转化为 “更宽的 ZVS 窗口 + 更低的硬开关损耗”，使拓扑选型、死区 / 缓冲设计、轻载策略与热设计同步简化，显著降低设计迭代成本与时间。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](SiC_MOSFET简化高频软开关设计工作_images/img_021_a44cadd0339f.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](SiC_MOSFET简化高频软开关设计工作_images/img_022_541472f5e867.jpg)

![图片](SiC_MOSFET简化高频软开关设计工作_images/img_023_a35cb357d184.png)