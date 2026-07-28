# 【教研室成果】MTT：基于物理信息神经网络的超表面逆设计


> 原文地址: [https://mp.weixin.qq.com/s/W8DdWILHKupKuxZgJ21Peg](https://mp.weixin.qq.com/s/W8DdWILHKupKuxZgJ21Peg)

  

论文信息

* * *

  

题目：

Inverse Design Method for Electromagnetic Periodic Structures Based on Physics-Informed Neural Network With Embedded Analytical Models

作者：

Yu-Hang Liu, Jing-Cheng Liang, Bing-Zhong Wang, and Ren Wang

单位：

Institute of Applied Physics, University of Electronic Science and Technology of China, Chengdu 611731, China.

出版信息：IEEE Transactions on Microwave Theory and Techniques, 73(2): 844 - 853, 2025; DOI: 10.1109/TMTT.2024.3435970 

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUXXRmJvkUZYsSzb4LvHuF7ObJZlD0SejqIIHRqDDO0bZibEJEdltDySA/640?wx_fmt=png)

论文摘要

* * *

  

为实现电磁器件的高效逆向设计，本文介绍了基于嵌入式解析模型的物理信息神经网络（EAM-PINN）。该方法结合了嵌入式物理知识与外部物理约束，并应用于电磁周期结构的逆向设计。在EAM-PINN中，我们将周期结构的物理知识嵌入到神经网络中，具体而言，用包含Floquet模解的周期性神经元替代普通神经元来构建神经网络并输出电磁场。然后，我们使用模式匹配方法将电磁场与结构联系起来，并将其作为外部物理约束整合到损失函数中。通过EAM-PINN，我们成功实现了人工磁导体（AMCs）和频率选择表面（FSSs）的逆向设计，证明了其在设计电磁周期结构方面的有效性。与传统神经网络相比，EAM-PINN继承了传统PINN的优点，需要更少的训练数据甚至完全不需要数据，并实现了更快的逆向设计。此外，与传统的PINN相比，EAM-PINN展现出更强的学习能力和更易收敛的特性。

图文导读

* * *

  

传统电磁器件设计依赖先验知识与经验，初始结构的选择限制了设计空间的探索。传统逆向设计方法（如等效电路、遗传算法、神经网络）需要大量仿真数据，计算成本高。现有数据驱动型神经网络需要大量训练样本，依赖仿真或实验数据，缺乏对电磁物理规律的直接嵌入，导致训练效率低、泛化能力差。传统 PINN 仅通过损失函数引入物理约束，学习过程抽象，容易偏离物理规律。该论文提出 EAM-PINN，将物理知识分为两类并融合使用：

1\. 嵌入式物理知识：将周期性边界条件下的Floquet模解析解作为“周期性神经元”，替代传统神经网络中的普通神经元。这些神经元直接输出电磁场分布，满足周期性结构的物理特性。

2\. 外部物理约束：使用模式匹配方法建立电磁场与结构之间的物理关系，并将其作为损失函数的一部分。控制方程、边界条件和设计目标全部整合进损失函数中。

3\. 网络结构：主网络：输入为空间坐标与频率，输出为电磁场，参数为模系数。子网络：两个全连接网络，分别输出两层金属膜的形状函数，使用类二值化激活函数。损失函数：由控制方程的残差构成，训练目标是使其最小化。

该论文的重要图片如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUXO8gIeKST2SI2YbAgGbu9VrzuBfpXfrbxlnph13aXhJxUbOia5ZLNVg/640?wx_fmt=png)

超表面单元细胞的PINN模型。此图展示了EAM-PINN的整体架构，包括主网络、子网络和损失函数。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnU4SfzXJfJdlPjpKLXXxL1oGYulBCm3Mia05mK4tLZFqkCfMAGia4d9xWQ/640?wx_fmt=png)

基于本文方法逆设计的20×20单元AMC有限阵列。(a) 前视图。(b) 后视图（PEC接地板）。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUOlibPTjH2ngFGb5NYYZOUibL4ly8l8lfnYNcWm8nUI9WVdbSuKAfjsrA/640?wx_fmt=png)

所设计AMC的实测反射相位。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnU42uFjr92Lk2TNcPpYbZJLicUcrsSAqZFESJaiagH7ps544eDSNjXfOeg/640?wx_fmt=png)

基于本文方法逆设计的20×20单元FSS有限阵列。(a) 前视图。(b) 后视图。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUkL8wGtSNKWykriabkviaDHkaaf0DuibmlbOaQTh3uqCiaotiaftmpN4yFwg/640?wx_fmt=png)

所设计FSS的实测反射相位。

论文总结

* * *

  

EAM-PINN 是一种将物理知识深度嵌入神经网络的新型逆向设计方法，特别适用于电磁周期结构。它通过结合嵌入式解析模型与外部物理约束，实现了无数据训练、高效率设计、强物理一致性的优势。尽管目前仍有适用范围和模型依赖等局限，但为电磁器件的智能化设计提供了新思路，具有重要的理论价值与工程应用前景。该论文重要结论如下：

(1) 无需大量训练数据：EAM-PINN 是一种无监督学习方法，无需预先采集大量仿真数据。

(2) 设计效率高：在 AMC、宽带 FSS、角度稳定双频 FSS 等设计中，训练时间短（20分钟至2小时），且设计误差小（<2%）。

(3) 物理一致性更强：嵌入式模型确保网络输出满足周期性结构的电磁特性，收敛更稳定。

(4) 设计自由度大：不依赖初始结构假设，能探索更广的设计空间。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/TMTT.2024.3435970\]