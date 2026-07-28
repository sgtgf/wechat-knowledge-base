# 【教研室成果】AWPL：具有俯仰面扫描能力的方位面宽角扫描阵列


> 原文地址: [https://mp.weixin.qq.com/s/Ic-Yy\_uiZBkMTubNl6jTGg](https://mp.weixin.qq.com/s/Ic-Yy_uiZBkMTubNl6jTGg)

论文信息

* * *

  

题目：

Wide-Angle Azimuthal Scanning Array With Elevational Scanning Ability

作者：

Junjie Shao, Shan Yu, Ren Wang, Chunlei Zhang, Bing-Zhong Wang

单位：

1 Institute of Applied Physics, University of Electronic Science and Technology of China, Chengdu 611731, China. 

2 The 36th Research Institute of CETC, Jiaxing 314033, China. 

出版信息：IEEE Antennas and Wireless Propagation Letters, 24(7): 2019 - 2023, 2025; DOI: 10.1109/LAWP.2025.3554726 

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUOxA0wpicic4GnjTxeFicHjgy8E4DnPBSIXVascNKyUJbvb3H3zib4gezQQ/640?wx_fmt=png)

论文摘要

* * *

  

宽角度方位扫描对于机载应用至关重要。然而，由于端射辐射方向图，许多阵列缺乏俯仰面扫描能力，后方单元的辐射会穿过前方单元，导致互耦和失配。为了克服这些限制，本文提出了一种二维宽带方位宽角度扫描阵列天线，其特点是对数周期单极子单元，每个单元加载了五个新月形顶帽，工作频带为 2.93 GHz 至 4.05 GHz，波束宽度超过150度。我们开发了一个2×3阵列，在单元间集成了基于内部多端口方法的去耦合微带结构。该阵列支持±90度的方位扫描和30度至75度的俯仰面扫描，在3.35 GHz至3.58 GHz频带内有源电压驻波比(VSWR)低于3。

图文导读

* * *

  

传统机载天线多为侧射阵列，需要大孔径才能在端射方向形成高增益波束，不适合高速、空间受限的平台。端射阵列虽能解决雷达盲区问题，但在二维平面（方位角+俯仰角）扫描方面存在困难：前单元会遮挡后单元的辐射，导致互耦增强、阻抗失配、方向图畸变；大多数现有设计只能实现一维方位扫描，缺乏俯仰扫描能力，限制了天线资源的有效利用。本文设计了一种具有宽角度方位扫描和俯仰扫描能力的二维端射阵列；在紧凑结构下实现高扫描角度、低有源驻波比、良好辐射效率。具体方法如下：

1\. 天线单元设计：采用对数周期顶帽单极子天线，每个单元包含5个新月形顶帽；通过弯曲边缘作为引向器，将旁瓣导向端射方向，扩展波束宽度至150°以上；工作频带：2.93–4.05 GHz，VSWR < 2，效率 > 90%。

2\. 馈电结构：采用共面波导+耦合馈电结构，结合扇形巴伦，实现良好阻抗匹配；通过金属柱连接顶帽与背面微带线，形成对称辐射结构。

3\. 阵列与去耦设计：构建 2×3 平面阵列，单元间距：x方向 0.91λ₀，y方向 0.36λ₀；使用内部多端口方法（IMPM） 设计去耦结构：在微带贴片之间引入596个内部端口，构建阻抗矩阵；使用遗传算法优化端口连接状态（短路/开路），最小化互耦与反射；最终将优化后的端口替换为金属线连接，形成实际去耦结构。

该论文的重要图片如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUa4PbE7DJNPZsUG9neL303Hh8iaXMKIlA1ibkk5n3nPvpypHEIxuiayDrA/640?wx_fmt=png)

天线单元。(a) 三维几何结构；(b) 顶帽单极子结构；(c) 侧视图；(d) 俯视图。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUnQQJEUUeT2QNX5ylk1WeaPcA2qhztBJibZvWtwJj6JNCRV5GaUmQG3g/640?wx_fmt=png)

(a) 内部端口示意图。(b) 去耦结构。(c) 无去耦结构的阵列结构。(d) 带有去耦结构的阵列结构。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUVvgkHia92iaA2wll33HicYv7vY9wVeSMPHyrxPKCibicr9aKlviacic2cBPsw/640?wx_fmt=png)

制作出的阵列实物和测量环境。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUZFPwZZuHh6Ie5s6KsiaAvmibrl57zAic3bKEGjK4nFLZlwGPxJ5RW9jSA/640?wx_fmt=png)

在3.5GHz 下，归一化阵列扫描方向图的仿真与实测结果对比。(a) 方位面同极化。(b) 方位面交叉极化。(c) 俯仰面扫描 (ϕ=0度)。(d) 俯仰面扫描 (ϕ=60度)。

论文总结

* * *

  

本文提出了一种具有宽角度方位与俯仰扫描能力的二维端射阵列，通过新月形顶帽单元设计和基于IMPM的去耦结构，成功实现了±90°方位扫描和30°–75°俯仰扫描，在紧凑结构中表现出良好的电性能。该设计为机载通信、雷达探测等系统提供了新的天线解决方案，尤其在空间受限、需大角度扫描的场景中具有重要应用价值。论文总结如下：

1\. 性能表现：方位扫描：±90°（在 3.35–3.58 GHz 范围内，有源 VSWR < 3）；俯仰扫描：30°–75°；波束宽度：>150°；增益：12.5 dBi（0°）至 12.4 dBi（90°），扫描过程中增益稳定；结构紧凑，适合共形安装，适用于机载平台。

2\. 技术启示：IMPM +遗传算法为高频段、高密度阵列的互耦抑制提供了有效路径；新月形顶帽结构扩展了单元波束宽度；二维端射阵列设计提升了天线在有限空间内的扫描灵活性。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/LAWP.2025.3554726\]