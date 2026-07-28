# 【教研室成果】AP：基于电路信息神经网络拓展天线带宽


> 原文地址: [https://mp.weixin.qq.com/s/Iek084N\_bFK23LggIyJ7IQ](https://mp.weixin.qq.com/s/Iek084N_bFK23LggIyJ7IQ)

论文信息

* * *

  

题目：

Circuit-Informed Neural Network for Broadening the Bandwidth of SIW-Fed Slot Antennas

作者：

Ren Wang, Hong-Yuan Chang, Yan-He Lv, Hao Huang, Jun-Song Wang, and Bing-Zhong Wang

单位：

1 Institute of Applied Physics, University of Electronic Science and Technology of China (UESTC), Chengdu 611731, China.

2 Department of Electrical and Computer Engineering, National University of Singapore, Singapore 117583..

出版信息：IEEE Transactions on Antennas and Propagation, 73(2): 1263 - 1268, 2025; DOI: 10.1109/TAP.2024.3516388 

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUYCOC5Sn8xlpDibfhCo9KNIwmmoEAwdBiadY2ribjW63J7xcLBjh3pdw8Q/640?wx_fmt=png)

论文摘要

* * *

  

本文提出了一种电路信息神经网络（CINN），用于拓宽基片集成波导（SIW）馈电的缝隙天线的带宽。所提出的方法通过结合电路知识和一个针对单级短截线对（SP） 训练好的人工神经网络（ANN），来高效地优化匹配多级短截线对的结构参数。该CINN方法显著降低了优化、数据集构建和训练的计算成本。实验结果表明，所提出的CINN可以实现43%的阻抗分数带宽。该方法具有很强的泛化能力，使其可广泛应用于具有不同结构和不同SP数量的各种SIW天线。

图文导读

* * *

  

SIW 缝隙天线因其高集成度、轻量和高效率而被广泛使用，但其固有窄带宽限制了在宽带无线系统中的应用。传统方法（如多模、混合模、多级匹配短截线对）在增加带宽时引入大量变量，手动调参困难，全波仿真耗时严重。纯数据驱动的神经网络方法需要大量训练样本，计算成本高，尤其在三维结构中更为显著。本文的解决方法如下：

1\. 结合电路知识与神经网络

使用等效电路模型分析多级短截线对（SPs）的阻抗匹配关系；训练一个仅针对单级SP的神经网络（SP-ANN），输入为结构参数和频率，输出为S参数；在整体优化中，复用该SP-ANN，结合电路分析，避免重复全波仿真。

2\. 优化流程

使用梯度下降 + 模拟退火算法进行反向传播优化；目标是最小化反射系数（< -10 dB），最大化阻抗带宽；仅需少量样本（100个）训练SP-ANN，显著减少数据需求。

3\. 验证平台

使用空芯SIW（ESIW） 结构，降低损耗；设计多层FR4基板天线，包含0–6级SPs；通过CST仿真与实验测量验证性能。

该论文的重要图片如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUbfMaia6uFEWV1OBcia5j7lkuWthcPSicHYPSUBib1yM3AmApr6iajh8edRg/640?wx_fmt=png)

带多级匹配短截线对的ESIW馈电缝隙天线的等效电路分析：(a) 结构划分，(b) 等效电路。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUTTAb7mqsFGrmV18wqHtlty6TyiaXnJCbe2YHiafXyWIU1dNiczibTJ9GtQ/640?wx_fmt=png)

电路信息神经网络（CINN）方法示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUghGD4k8uT41wtBgYpic1Oqo3TkwRaP031aENNoMZEj2Qnribia1hRiadzQ/640?wx_fmt=png)

带有六个短截线对的ESIW缝隙天线：(a) 顶视图，(b) 底视图，(c) 带有匹配短截线对的中间层基板。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUgvibN2zibJ5uZFr5aXJmyOsFhwCjq8H3mK2kW37yE8cQ8sxCxJvWwCzg/640?wx_fmt=png)

当波导宽度分别为 (a) 26 mm 和 (b) 30 mm 时，带有六个短截线对的ESIW馈电缝隙天线的反射系数。(c) 相对带宽与短截线对数量的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUrLFKMDAhz1LAnkwjDnAibIBPYYjsP4x40FoF0RBOCC2x0zib8aSHWibLQ/640?wx_fmt=png)

CINN方法与直接优化方法的优化时间成本对比。

论文总结

* * *

  

该论文提出的 CINN 方法可以扩展天线带宽、提高设计效率，通过将电路理论与神经网络结合，为SIW天线设计提供了一条高效、通用、可扩展的路径。尽管存在一些理想化假设和结构限制，但其方法论和成果对智能电磁设计、天线优化、以及物理信息融合的机器学习具有参考价值。论文结论总结如下：

（1）带宽显著提升：使用6级SPs时，实现43%的阻抗分数带宽，远高于现有文献（如26.7%）。

（2）计算效率高：优化时间：< 0.13 小时（对比遗传算法的12–94小时）；数据集构建与训练时间：< 3 小时；适用于不同波导宽度和SP数量，泛化能力强。

（3）方法通用性强：CINN 可推广至不同结构、不同SP数量的SIW天线设计；结合物理知识与数据驱动，减少对大量样本的依赖。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/TAP.2024.3516388\]