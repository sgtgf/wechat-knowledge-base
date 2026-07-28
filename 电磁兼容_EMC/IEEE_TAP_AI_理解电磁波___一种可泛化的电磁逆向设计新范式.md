# IEEE TAP：AI“理解电磁波”——一种可泛化的电磁逆向设计新范式


> 原文地址: [https://mp.weixin.qq.com/s/eqlXXgMp2sJn9NBq3kfRIA](https://mp.weixin.qq.com/s/eqlXXgMp2sJn9NBq3kfRIA)

在传统电磁计算中，我们习惯这样一个流程：  给定结构 → 求解场分布 → 不断调整结构 → 达到目标性能。

但这个过程往往意味着：

·计算代价高（FDTD / FEM / MoM反复调用） 

·设计周期长（依赖经验 + trial-and-error） 

·泛化能力差（每个结构都要重新算一遍） 

那么，有没有可能——          👉训练一个模型，让它“一次学会”，之后直接解决任意结构问题？

本教研室的最新工作，给出了一个肯定答案。

* * *

  

⚙️ 核心突破：从“拟合一个问题”到“学习一类物理规律”

本文提出了一种全新的框架：

基于物理约束神经算子（Physics-Informed Neural Operator, PINO）的电磁逆向设计方法

不同于传统PINN（只能针对单一结构“拟合解”），我们的方法实现了一个关键改变：

✅ 学习“算子”（Operator），而不是“解”（Solution）

这意味着：

·不再针对某一个结构训练 

·而是学习一个从“结构 → 电磁响应”的通用映射

·实现跨结构泛化（geometry generalization）

可以理解为：

不是学会一道题，而是掌握了解题方法。

* * *

  

⚡ 技术亮点一：等效源 + AI = 电磁问题重构

我们从经典电磁理论出发，引入了等效原理（Equivalence Principle）：

👉 将复杂散射问题转化为：          求解边界上的等效源分布

这一步非常关键，因为它带来了两个优势：

·将问题从“场求解”转化为“源分布求解” 

·直接构建出可用于神经网络训练的物理约束

最终，我们构建了：

🔹ESINN（Equivalent Source-Inspired Neural Network）

一个真正“懂物理”的神经网络求解器。

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCibnaXTBE6WUdW3aW7QiaUndpk0oibr6KCcGRkOucArCBcOXcuHmb3eo1ap7uwvwkiaEW9bsGOjqe9MlNBrZsxBsyoziaq7jxrcx2U/640?wx_fmt=png)

电磁问题等效 

* * *

  

🔗 技术亮点二：Attention机制刻画“全局耦合”

电磁问题的本质是：

📡 每一个位置都与所有位置耦合（全局相互作用）

传统神经网络很难表达这种关系。

为此，我们引入了：

🧩 Transformer中的多头注意力机制（Multi-head Attention）

作用非常直观：

·自动学习“哪个位置影响哪个位置” 

·构建等效源之间的全局关联矩阵

·等价于“神经网络版的矩量法耦合矩阵” 

👉 这使得模型具备：

·可变输入尺寸（适应不同结构复杂度） 

·强泛化能力（跨几何结构）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAOibq6nU2rgNle7E3zk3xnRaMTOvSkiahNwzKCNlic96xHtuqNvBKoIbQlF38PxLg5ts6VMWjlJXMldEiaVzhepb4v2pEnb5k0TyM/640?wx_fmt=png)

多头注意力机制

* * *

  

🎯 技术亮点三：无需数据的“物理驱动训练”

传统AI设计方法依赖：

·大规模仿真数据（昂贵） 

而我们的方法：

❗ 完全不需要标签数据

训练仅依赖：

·麦克斯韦方程 

·边界条件（PEC条件） 

👉 本质是：

用物理定律替代数据集

这在工程上具有非常大的意义。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsD1yoxSlWFJgp4ZJ0veIPiacuU9I6icvqK3DXjkwWP2QorZpdPFrPDtnGJxnflibbZxFTZz5S1j7TaicJFbKU7xuXfhLRS8NJKJ2yc/640?wx_fmt=png)

网络整体架构 

* * *

  

🔥 应用展示：AI直接“设计电磁结构”

基于该框架，我们实现了多个典型任务：

  

🛡️ 1. 雷达散射截面（RCS）降低

·单角度（monostatic） 

·多角度（bistatic） 

👉 AI自动生成结构，实现显著散射抑制 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsD3GAzibklmB7vrWGia2WN0vRbKAiaVkicz0WkkYAA0P3MiaRuhBqqcFibgAOUhE6xibszx9kW13z2hDN96CJejDFMiarOKsJQWicITDux8/640?wx_fmt=png)

多角度散射抑制

  

📡 2. 宽带平顶波束（Flat-top beam）

实现：

·指定角度范围内均匀辐射 

·主瓣波动 < 1 dB 

👉 传统方法极难设计，AI直接给出结构解 

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCzCKmM3OVTbvRtA8ExNV3X0BwxiaXsf41tycqIlcxwMhNG8ve7xXTOw6B0251EnMcicBCezkuGr6eibWEjLOGwePcbZIPldXUTibA/640?wx_fmt=png)

宽带平顶波束

* * *

  

⏱️ 效率优势：从“小时级仿真”到“秒级推理”

传统流程：

·每次设计 → 多次数值仿真（分钟~小时） 

本方法：

·训练一次（约数小时） 

·推理阶段 → 毫秒~秒级 

👉 本质是把“求解过程”变成“前向传播”

* * *

🧭 学术意义：重新定义电磁计算范式

这项工作不仅是一个方法改进，更代表一种范式转变：

从：

·数值算法（FEM / FDTD / MoM） 

到：

·学习型物理求解器（Learning-based Solver）

其核心思想是：

让神经网络学习麦克斯韦方程的“算子结构” 

* * *

📄 论文信息            
Hongyuan Chang, Jinsong Fan, Ren Wang, and Bing-Zhong Wang. Electromagnetic Inverse Design Based on Physics Informed Neural Network with Generalization Across 1D PEC Geometries, IEEE Transactions on Antennas and Propagation, 2026, DOI 10.1109/TAP.2026.3675308.  

* * *

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/TAP.2026.3675308\]