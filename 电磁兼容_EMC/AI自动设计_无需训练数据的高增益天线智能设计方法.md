# AI自动设计：无需训练数据的高增益天线智能设计方法


> 原文地址: [https://mp.weixin.qq.com/s/NKVdUmaDjum0i\_ruSi4k9w](https://mp.weixin.qq.com/s/NKVdUmaDjum0i_ruSi4k9w)

在卫星通信、雷达探测、6G通信等领域，天线就像无线系统的“眼睛”和“耳朵”。一个重要目标是让天线把能量尽可能集中地发射到目标方向，这就是所谓的高增益天线。然而，如何在有限尺寸下实现更高的天线增益，一直是电磁工程领域的重要研究问题。

近日，本教研室在高增益天线智能设计方面取得新进展，提出了一种基于物理信息神经网络（Physics-Informed Neural Networks, PINNs）的介质超表面逆向设计方法，能够自动设计出提升天线增益的介质结构。相关成果以“Inverse Design of Dielectric Superstrates Based on PINNs for High-Gain Antenna”为题，发表在IEEE Antennas and Wireless Propagation Letters。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAwmBIjoyzY1biccicsibyDUhnfVOOonPJxmiarQrHoGLyUteQUJ8VKb7vfvrz0OtKqPA36g8Wu0vcBLupPzhogFzkYia99V6HHFd3E/640?wx_fmt=png)

高增益方向图示意

（https://www.everythingrf.com/community/what-is-dbi） 

* * *

  

一、为什么需要新的天线设计方法？

传统提高天线增益的方法主要有三类：

·天线阵列：通过多个天线协同辐射提高方向性，但结构复杂、设计成本高

·介质透镜：可以有效控制波前，但体积和重量较大

·天线超表面结构：结构紧凑，但通常需要大量参数扫描和电磁仿真

这些方法在设计过程中往往需要大量试错和计算，效率较低。随着结构复杂度增加，设计难度也迅速上升。

因此，如何利用人工智能实现自动化、高效率的电磁结构设计，成为当前的重要研究方向。

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsA5TPTKPxQwyaoZuficzzpMPJ2YRiadsMRnb2EZq7QQZp6D5ezqyO1sx1cYcwPSiapxZKCtnLIgHZt70JwGhXDV1V3ZtTH7agAsico/640?wx_fmt=png)

本文提出的高增益天线逆设计过程 

* * *

  

二、用AI“反向设计”电磁结构

针对这一问题，团队提出了一种新的设计思路：利用物理信息神经网络进行逆向设计。

与传统神经网络不同，PINNs在训练过程中直接嵌入麦克斯韦方程等物理规律，使得网络不仅依赖数据学习，还能自动满足电磁传播的基本物理约束。

在本工作中，研究人员结合电磁互易原理，提出如下设计策略：

1. 设定一个目标——让入射电磁波在某一点聚焦

2. 使用PINNs自动优化设计区域中的介质分布

3. 得到一种能够实现波束聚焦的结构

4. 将天线放在聚焦位置，根据互易原理即可实现高方向性辐射

简单来说，就是先让结构把外来的波聚焦，再利用物理互易性，让天线的辐射变得更集中、更远。

这种方法实现了电磁结构的自动生成式设计，避免了传统设计中大量的参数扫描和仿真计算。

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsBibklMf2oiaf2gqYHibicFW8Bb8KRpTfYHnacsOticTPOEOJicXdMlLiah65kZMMrk55qlzUttHLW6GjuLDnS9pD4sCGjLF5tDsLdwEo/640?wx_fmt=png)

物理信息神经网络结构 

* * *

  

三、实验验证：天线增益显著提升

研究团队设计并加工了相应的介质超结构，并与微带天线组合进行了实验验证。

结果表明：

·在不改变天线工作带宽的情况下

·天线主瓣增益最高提升约 5.97 dB

·实测最大增益达到 12.75 dBi

实验结果与仿真结果高度一致，证明了该方法在实际天线系统中的可行性。 

值得注意的是，与许多深度学习电磁设计方法不同，该方法不需要预先构建训练数据集，避免了数据生成带来的巨大计算开销。

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDW7MQWkGYwse77kQ5cs7xakhO2X46mqPBZjPlS7jytYETa9ibn7lJC9wzibeGPp6gLTM2TFpkkZPUmX7wyaRZ2avzQexUIdNSnU/640?wx_fmt=png)

逆设计天线罩的场聚焦效果

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCrJcvnmTXVc85Micf6IFk3yOLGzePm3HbZw8OqTcGicNdQh9OxPlKk7m2aGyAahKxHDKIiboMI1QRSK3LVHDIMF8Mgkse4lPIEv8/640?wx_fmt=png)

天线增益提升效果 

* * *

  

四、AI+电磁：未来天线设计的重要方向

该研究展示了人工智能与电磁物理深度融合在复杂电磁结构设计中的巨大潜力。所提出的方法不仅适用于高增益天线设计，还可推广到：

·波束整形结构设计

·电磁场调控器件

·新型超表面器件

·智能电磁结构设计

随着人工智能技术的发展，未来电磁器件设计有望从“人工经验驱动”逐步走向物理驱动的智能自动设计。 

* * *

📄 论文信息            
Junjie Shao, Mengyao Jia, Ren Wang\*, Bing-Zhong Wang. Inverse Design of Dielectric Superstrates Based on PINNs for High-Gain Antenna, IEEE Antennas and Wireless Propagation Letters, 2026, DOI 10.1109/LAWP.2026.3664023.  

* * *

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/LAWP.2026.3664023\]