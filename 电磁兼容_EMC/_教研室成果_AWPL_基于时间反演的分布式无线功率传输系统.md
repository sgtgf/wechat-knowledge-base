# 【教研室成果】AWPL：基于时间反演的分布式无线功率传输系统


> 原文地址: [https://mp.weixin.qq.com/s/8bJUPjLgGzb3Q1AfBuBsOg](https://mp.weixin.qq.com/s/8bJUPjLgGzb3Q1AfBuBsOg)

论文信息

* * *

  

题目：

Node-Dynamically Scalable Distributed Time Reversal Wireless Power Transfer System Based on Adaptive Phase Alignment

作者：

Xiaochen Ao, Mu-Sheng Liang, Shuyu Li, Yinchen Wang, Bing-Zhong Wang, Ren Wang

单位：

1 Institute of Applied Physics, University of Electronic Science and Technology of China, Chengdu 611731, China. 

2 Huzhou Institute of Zhejiang University, Huzhou 313000, China.

3 State Key Laboratory of Industrial Control Technology, Zhejiang University, Hangzhou 310027, China. 

出版信息：IEEE Antennas and Wireless Propagation Letters, 24(7): 1814 - 1818, 2025; DOI: 10.1109/LAWP.2025.3548051 

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUwia5BDNrhezZwsVABDjgiaqUZYUwW9BkZINGjDFKEbHxtX0VrV40MHPQ/640?wx_fmt=png)

论文摘要

* * *

  

为实现大规模动态无线传感器网络中高效、精准的无线能量传输，本文设计了一种分布式时间反演无线能量传输（DTR-WPT）系统。该系统利用功率均衡、频率同步和时间反演技术，实现了在目标处的鲁棒相位对齐和相干能量聚焦，并能适应节点变化和空间分布。通过采用时间反演镜单元进行相位检测和补偿，该系统在各种配置下保持精确的相位对齐，从而增强了在复杂环境中灵活、分布式应用的可扩展性和效率。

图文导读

* * *

  

传统无线能量传输系统（如近场耦合、微波传输）在传输距离、灵活性和可扩展性方面存在限制。传统TR-WPT系统多为集中式、平台中心化结构，节点增减需重新设计发射端，缺乏动态适应性。在分布式节点中实现无线相位对齐是保证信号在目标点相干叠加的关键。现有系统依赖有线参考信号或复杂测距机制，不适用于动态、分布式的TR-WPT系统。本论文采用以下方法实现分布式功率合成：

1.系统架构：采用分布式时间反演镜（TRM）单元，每个节点独立进行相位检测、时间反演计算、相位补偿与信号放大。使用无线参考信号（1.225 GHz） 和 LoRa协议实现节点间的频率同步与时间协调。

2\. 相位对齐机制：提出双节点交替相位测量法，通过交替发送0相位偏移信号，计算累积相位差，并补偿至TR信号中。使用自适应相位对齐算法，避免复杂的相位解缠过程，实现快速、鲁棒的相位同步。

3\. 无线同步与功率均衡：所有节点共享同一无线参考源，通过AGC电路保证功率均衡。采用自混频模块将参考信号倍频至工作频率（2.45 GHz），确保频率一致性。

该论文的重要图片如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUFFjQkiaIcT1V0d8aJsFdw8ACywGlwsaRXcMKx3U4ZXsXAMXB730zvWg/640?wx_fmt=png)

DTR-WPT系统框图（以一个节点为例）。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUMfR421U9s9za7OIj6aj2DIkV92XbBkGCx6fIqWP4aX5zvISzuqG3vA/640?wx_fmt=png)

时间反演聚焦实验。(a) 三个节点环绕接收天线的实验设置。(b) 时间反演聚焦实验示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnURrqBYOLzrAK7vAXLENf6Y6dFg2Bgf15m5L0j2GqCd8CUF7ngj3jLDQ/640?wx_fmt=png)

接收功率分布图。定位网格由10x10个1 cm²的方格组成。(a) 有线相位对齐下的聚焦功率分布。(b) 无线相位对齐下的聚焦功率分布。(c) 无相位对齐下的聚焦功率分布。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUfNzOHazbVQdIpnxMF4Tx4ict5ibgykUCBErflMn0L4RRmrgwM6SJscmA/640?wx_fmt=png)

不同情况下的接收功率和空口效率。

论文总结

* * *

  

该论文提出了一种节点动态可扩展分布式TR-WPT系统，通过无线参考信号+LoRa同步+自适应相位对齐算法，有效解决了分布式节点间的相位同步问题，实现了在动态WSN中的高效能量传输。系统具备良好的可扩展性、灵活性和能量聚焦能力。论文总结如下：

1\. 系统优势：动态可扩展性：支持节点的热插拔，无需重新设计系统。高精度能量聚焦：在目标点实现相干叠加，能量集中度显著提升。强适应性：适用于复杂多径环境，抗干扰能力强。

2\. 实验验证：在有线相位对齐和无线相位对齐条件下，能量聚焦效果接近。无相位对齐时，能量分散严重，验证了相位对齐的必要性。

3\. 技术启示：为大规模、动态WSN的可持续供电提供了可行方案。提出的分布式相位对齐方法可推广至其他需相干合成的分布式系统（如分布式MIMO、雷达等）。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/LAWP.2025.3548051\]