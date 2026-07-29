# AP：基于电流分布与Otsu图像分割的可重构智能表面拓扑设计


> 原文地址: [https://mp.weixin.qq.com/s/1cIWBWxilLK-Oi58fqsmbA](https://mp.weixin.qq.com/s/1cIWBWxilLK-Oi58fqsmbA)

论文信息

* * *

  

题目：

Topology Design of Reconfigurable Intelligent Surfaces Based on Current Distribution and Otsu Image Segmentation

作者：

Zhen Zhang, Jun Wei Zhang, Hui Dong Li, Junhui Qiu, Lijie Wu, Wan Wan Cao, Ren Wang, Jia Nan Zhang, and Qiang Cheng

单位：

1 School of Electronic and Communication Engineering, Guangzhou University, China.

2 State Key Laboratory of Millimeter Waves, Southeast University, Nanjing 210096, China.

3 Institute of Applied Physics, University of Electronic Science and Technology of China, Chengdu 611731, China.

出版信息：IEEE Transactions on Antennas and Propagation, 2025; DOI: 10.1109/TAP.2025.3620902. 

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\AP_基于电流分布与Otsu图像分割的可重构智能表面拓扑设计_images\img_000_9a967f2ec642.png)

论文摘要

* * *

  

可重构智能表面（RIS）单元的小型化是RIS发展的重要趋势。它不仅有助于实现多功能集成，还能促进与其他元件的无缝融合。RIS单元上的电流在决定感应电磁场分量的特性方面起着关键作用。具有高电流强度的部分决定了RIS单元的性能。将电流分布密度强的部分雕刻在RIS单元结构的金属贴片上可以实现小型化。基于这一观点，本文提出了一种利用电流分布和图像处理技术实现RIS单元高效小型化的拓扑设计方法。在该方法中，我们首先获取不同工作状态和工作频率周期下的电流分布。接着，我们采用Otsu图像分割方法从RIS单元的电流分布图像中提取相关的图像信息。随后，我们利用线性映射技术将这些图像信息转换为RIS单元的结构。然后，基于RIS单元的结构，利用拟牛顿优化算法获得对应于各种工作状态的可调器件参数。最终，我们成功基于电流分布构建了RIS单元的结构拓扑，将电流分布强的区域设计为金属贴片。为验证所提方法的性能，我们设计、制作并测量了一个16×16的3位RIS。与现有的RIS设计相比，该设计的顶层金属贴片比例更小，这为集成其他功能和器件提供了可能。

图文导读

* * *

  

随着无线通信系统对集成度要求的提高，如何在保证性能的前提下缩小RIS单元尺寸成为关键挑战。传统参数优化方法难以在结构复杂度与性能之间取得平衡。如何将电流分布信息转化为结构设计依据，实现高效拓扑生成是一个重要问题。本文旨在同时解决这三个挑战。

本论文提出一种结合电流分布分析与图像处理技术的拓扑设计流程：

（1）电流分布提取：通过电磁仿真获取RIS单元在不同工作状态和频率周期下的电流分布图像。将彩色电流图转为灰度图，将电流强度分布作为处理对象。

（2）图像处理与分割：使用Otsu阈值分割法将灰度图二值化，区分出高电流区域（保留为金属贴片）与低电流区域（去除）。对二值图像进行稀疏化处理，降低建模复杂度。

（3）结构映射与优化：将二值图像像素映射为金属贴片的物理结构。使用拟牛顿优化算法对可调器件（如变容二极管）参数进行优化，以满足不同工作状态下的相位与幅度要求。

该论文的重要图片如下：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\AP_基于电流分布与Otsu图像分割的可重构智能表面拓扑设计_images\img_001_3e5d2fb68e9d.png)

RIS示意图：(a) 阵列，(b) 单元。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\AP_基于电流分布与Otsu图像分割的可重构智能表面拓扑设计_images\img_002_01ba881537a8.png)

基于RIS电流分布的拓扑设计流程图：(a) 初始结构, (b) 电流分布, (c) 灰度图像, (d) 分割后的图像, (e) 稀疏化图像, (f) 去噪并细化馈电结构后的图像, (g) RIS单元, (h) RIS系统。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\AP_基于电流分布与Otsu图像分割的可重构智能表面拓扑设计_images\img_003_f803775ef705.png)

RIS的实测反射系数：(a) 幅度, (b) 相位。

论文总结

* * *

  

该论文提出了一种基于电流分布与图像分割的RIS拓扑设计方法，在实现显著小型化的同时保持了良好的电磁性能。该方法具有自动化程度高、可扩展性好等优点，为RIS及其它电磁表面的结构设计提供了新范式。未来可在多极化、宽角度、鲁棒性设计等方面进一步拓展其应用范围。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/TAP.2025.3620902\]