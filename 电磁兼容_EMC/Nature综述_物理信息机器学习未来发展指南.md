# Nature综述：物理信息机器学习未来发展指南


> 原文地址: [https://mp.weixin.qq.com/s/gCd3S-IQ2s5SISfFA-V5ZQ](https://mp.weixin.qq.com/s/gCd3S-IQ2s5SISfFA-V5ZQ)

**Physics-informed machine learning**

![](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESJGuJK1tWwWVD2XnibX9LP11ia2ANicg4qfHRCEODrHkH1SIE4ic2TibiatvJFfrsxBpmr8b3Jyt2rButAuGgSicgAE9hAU5cdAEX6Vqg/640?wx_fmt=png&from=appmsg)

> 大家好，我是科研X博士。本文是笔者为本学期 **AI for PDEs** 课程备课所整理的论文精读系列的第 2 篇。上一篇我们精读了 2019 年 JCP 上的 PINNs 开山之作，这一篇接着读同一团队两年后在 Nature 子刊上发表的综述——可以把它理解为 Karniadakis 团队给整个 PIML 领域画的一张路线图。系列内容将持续更新，欢迎关注。

* * *

* * *

**文章导读**

纯数据驱动的深度学习可以拟合几乎任何函数，却无法保证预测结果满足质量守恒、能量守恒等基本物理定律；传统数值方法（有限元、谱方法）严格遵守物理，但面对高维、多尺度、数据稀疏的真实场景往往力不从心。**物理信息机器学习（PIML）** 试图在这两极之间找到最优交汇点——让神经网络在学习数据的同时，也"懂"物理。

2021 年，PINNs 的提出者 Karniadakis 联合五位核心合作者在 Nature Reviews Physics 上发表了这篇综述，首次为整个 PIML 领域画出了一张系统的路线图。文章提出了三条物理嵌入路径——**观测偏置**（用数据本身反映物理）、**归纳偏置**（把对称性硬编码进网络架构）、**学习偏置**（在损失函数中加入 PDE 残差）——并展示了它们如何单独或组合应用于流体力学、生物医学成像、等离子体物理、高维统计力学等前沿场景。综述还系统梳理了从 PINNs 到 Neural Operators（DeepONet、FNO）的演进脉络、不确定性量化方案、训练病态的诊断与修复，以及 DeepXDE 等开源工具链的生态全貌。

**本文亮点速览**：三种偏置的分类框架如何成为领域标准语言？从一杯咖啡的三维流场到 144 维亚稳态跃迁，PIML 解决了哪些传统方法"不可能"的问题？PINNs 训练不收敛的根源是什么，NTK 理论给出了怎样的解释？Neural Operator 为什么能"一次训练、万次推理"？数字孪生、内禀变量发现、重新定义"理解"——这些前瞻方向在 2026 年走到了哪一步？

如果你刚进入 AI for Science 领域，这篇综述是最好的起点之一；如果你已经在用 PINNs，这篇解读会帮你看清自己在这张地图上的位置。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RkqvU1giaESIITRicMx3tdcoxBeddwW5icnxcwg4Cgd0Ah3XWq3qoTUubZFsUUOP4icyE4iccoaTzE76E7AkSIw3wnskvAGezwo4HTgG2nqNiam78/640?wx_fmt=png&from=appmsg)

* * *

## 一、写在前面

读完 PINNs 那篇 JCP 论文之后，我脑子里冒出来的第一个问题是：这套"把 PDE 写进 loss"的思路，到底能走多远？

是只能解几个经典方程做做 demo，还是真能扩展成一个通用的方法论？如果要扩展，哪些方向是靠谱的？哪些是坑？PINNs 本身那些众所周知的毛病——loss 不收敛、高频学不好、大规模算不动——有没有系统的解决思路？

这些问题在我读到 Karniadakis 团队 2021 年发在 Nature Reviews Physics 上的这篇综述后，基本得到了回答。不是因为这篇文章给出了所有问题的答案——事实上它自己也承认很多问题还远没有解决——而是因为它做了一件更重要的事：**给整个 PIML 领域画了一张清晰的地图**。

你可以把它想象成一本旅游指南：它不会替你走路，但会告诉你这片大陆上有哪些区域值得探索、每个区域的地形是什么样的、哪些路线已经有人走通了、哪些还是无人区。对于 2021 年之后进入这个领域的研究者来说，这篇综述几乎是绕不过去的起点。

值得注意的是，这篇文章发在 Nature Reviews Physics 上。Nature Reviews 系列期刊不接收原创研究，只邀请领域顶尖学者撰写权威综述——某种程度上，这相当于 Nature 编辑部认可 Karniadakis 团队就是 PIML 这个方向的"定义者"。当然，从另一个角度看，由方法提出者本人来写综述，不可避免地会有一些自引偏向——后面我们也会讨论这一点。

* * *

## 二、作者团队

六位作者中有两位（Karniadakis、Perdikaris）是 PINNs 原始论文（Raissi 2019 JCP）的共同作者，其余四位均深度参与了 PINNs 的后续扩展工作（DeepONet、DeepXDE、B-PINNs、NTK 训练分析等）。可以说这篇综述是 PINNs 核心团队对自己两年来工作的一次全面盘点和前瞻。

**George Em Karniadakis**（通讯作者），Brown 大学教授 / MIT 研究科学家，NAE 院士（2022 年当选），h-index 148。他是 PINNs 原始论文的末位作者，也是这篇综述的灵魂人物。CRUNCH Group 在谱方法、随机微分方程、分数阶 PDE 等方向的三十年积淀，是整个 PIML 框架的理论根基。

**Ioannis G. Kevrekidis**，Johns Hopkins 大学教授，此前长期在 Princeton 任教。研究方向是多尺度建模和方程无关（equation-free）计算，NAE 和 AAAS 双院士。他带来的是多尺度动力系统的视角——如何在不同尺度之间架桥，恰好和 PIML 的"数据-物理融合"主题高度契合。

**Lu Lu**，论文发表时在 MIT 做博后，随后先后到宾大（2021-2023）和 Yale（2023-）任助理教授。他是 DeepXDE 库和 DeepONet 方法的核心开发者，在整个 PIML 生态中的工具链贡献极大。

**Paris Perdikaris**，UPenn 副教授，PINNs 原始论文的共同作者。他和 Sifan Wang 合作提出了基于梯度统计量的自适应权重方案（2021 SIAM JSC），直接解决了 PINNs 训练中最常见的梯度病态问题。后来还在 Microsoft Research 主导了大气科学基础模型 Aurora 的开发（2025 年发表于 _Nature_）。

**Sifan Wang**，论文发表时在 UPenn 读博。他和 Perdikaris 合作提出了基于 Neural Tangent Kernel 的 PINNs 训练诊断和修复方案，是 "When and why PINNs fail to train" 这篇重要工作的一作。

**Liu Yang**，Brown 大学博士后。他提出了 Bayesian PINNs (B-PINNs)，把不确定性量化引入了 PINNs 框架。

作者

发表时单位

核心贡献

G.E. Karniadakis

Brown / MIT

领域奠基人，NAE 院士，h-index 148

I.G. Kevrekidis

Johns Hopkins

多尺度建模，NAE/AAAS 双院士

Lu Lu

MIT → Yale

DeepXDE / DeepONet 核心开发者

P. Perdikaris

UPenn

梯度自适应权重方案，PINNs 训练修复

S. Wang

UPenn (博士生)

PINNs 训练失败的理论分析

L. Yang

Brown (博后)

Bayesian PINNs (B-PINNs)

一句话总结：这个团队把 PIML 的提出者、工具开发者、理论分析者和应用推广者凑齐了。不过也正因为如此，综述中对自家工作（PINNs, DeepONet, DeepXDE, B-PINNs 等）的着墨明显多于对竞争方法（如 FNO, SINDy, Deep Ritz 等）的讨论——读者需要有这个意识。

* * *

## 三、为什么需要这篇综述

论文开篇抛出了一个非常实际的问题：**多物理场、多尺度系统的建模与预测，至今仍是一个开放的科学难题**。

以地球系统为例，它的动力学涉及物理、化学、生物过程的耦合，时空尺度跨越 17 个量级。传统数值方法（有限元、有限差分、谱方法）在过去 50 年取得了巨大进展，但面对非线性多尺度级联问题，计算成本和不确定性来源都在急剧增长。更棘手的是：

-   **反问题**（推断材料属性、发现缺失物理）计算代价极高，需要复杂的算法和大规模程序
    
-   **实际物理问题**经常面对缺失的、有间隔的、带噪声的边界条件——传统方法根本无法处理
    

另一方面，未来十年将有万亿级传感器（包括空基、海基和卫星遥感），多保真观测数据的体量正以前所未有的速度增长。然而纯数据驱动的 ML 方法也有致命缺陷：**预测可能违反基本物理定律**——一个流场预测模型如果连质量守恒都不满足，在工程上是不可接受的。

论文用 Box 1 的一张图把这个困境说清楚了：

> 📌 **Box 1 的核心洞察**：物理问题按"数据量-物理知识量"可以分成三个区间。左端是小数据 + 完全已知物理（传统数值方法的地盘），右端是大数据 + 未知物理（纯数据驱动 ML 的地盘），中间是最普遍也最有意思的情况——**一些数据 + 一些物理**。绝大多数真实应用落在这个中间地带：物理部分已知（比如守恒律知道，但本构关系不清楚），同时有一些散乱的、多源的、多精度的测量数据。PIML 的核心价值正在于处理这个中间地带。

用论文原文的话说，物理先验可以充当 "informative priors"，提供 "strong theoretical constraints and inductive biases on top of the observational ones"——也就是在观测数据能提供的信息之上，再叠加物理定律带来的结构性约束。

* * *

## 四、核心方法：如何把物理嵌入机器学习

### 4.1 物理信息嵌入的三种范式

这篇综述最重要的概念贡献之一，是将 ML 中已有的偏置分类框架（observational / inductive / learning bias 是 ML 社区的标准术语）**系统地应用到 PIML 语境**，给出了清晰的物理嵌入路径图：**物理信息可以通过三条路径嵌入机器学习模型**——观测偏置（Observational Bias）、归纳偏置（Inductive Bias）和学习偏置（Learning Bias）。

![Box 2: 三种偏置](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESKNWmt6WOw7fdwPx34uMKzDVMWqU3Z9icOj0HCTeYKFR4pfBmtRribbItNIRhcFzoXwx8ibNvClmnItWB0QLMeicntay8VfxTxAf5A/640?wx_fmt=png&from=appmsg)

Box 2: 三种偏置

_Box 2：物理信息嵌入 ML 的三种范式。上排是三种偏置的概念图标（观察、结构化设计、损失函数调节），中排汇聚到"Physics-informed machine learning"，下排是各自对应的物理表现形式（对称性、守恒律、动力学）。三者可以单独使用，也可以组合。_

* * *

#### （1）观测偏置：让数据本身就反映物理

最直接的思路——训练数据本身就蕴含物理规律。论文指出，对于物理系统而言，得益于传感器网络的快速发展，现在已经可以利用多保真度的观测数据来监测复杂现象在多个时空尺度上的演化。这些数据天然反映了底层物理原理。

**具体做法**：

-   **对称数据增强**：如果你知道系统具有旋转不变性，可以通过数据增强来强化这个约束
    
-   **多保真数据融合**：用大量低精度数据（如粗网格仿真）和少量高精度数据（如精细实验）一起训练，让模型在两个精度层次之间学到非线性映射关系
    
-   **守恒律采样**：确保训练数据的采样策略本身就尊重守恒律（比如能量守恒、质量守恒）
    

**优点**：实现最简单，不需要修改网络架构或损失函数。

**缺点**：对于过参数化的深度网络，你需要**大量**数据才能把物理偏置有效地"灌"进去。而物理和工程科学中的观测数据往往通过昂贵的实验或大规模仿真获得，采集成本极高。

* * *

#### （2）归纳偏置：把物理"硬编码"进网络架构

最优雅的方式——直接在网络结构中嵌入物理约束，使得网络的输出在结构上就满足某些物理规律。论文花了相当大的篇幅讨论这个方向，因为它代表了 "最严格" 的物理嵌入方式。

**经典案例**：

方法

物理约束

核心思路

**卷积神经网络 (CNN)**

平移不变性

通过权值共享和局部感受野，天然尊重图像中的平移对称性

**图神经网络 (GNN)**

多体系统对称性

分子性质预测中，用图结构编码原子间的拓扑关系（见 Fig. 1a）

**等变网络 (Equivariant NN)**

旋转/反射不变性

把更一般的对称群编码到网络架构中

**哈密顿神经网络 (HNN)**

辛结构保持

网络输出的哈密顿量 H 自动满足辛结构，从而保证能量守恒

**Lax-Oleinik 架构**

HJ-PDE 粘性解

一种两层网络直接给出 Hamilton-Jacobi 方程的粘性解（见 Fig. 1b）

**硬边界嵌入**

Dirichlet/Neumann/周期边界

修改网络结构使输出精确满足边界条件

![Fig. 1: Physics-inspired NN architectures](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESJnH9tNfswxhicC6oI1xHtbvpMYnNz5HQzEiaTqTVHq51FNJ3Lz2aWQmGjiclNTicQ4MLIB2yPWj8a7fiawb5DGvCJeB3mSyrEuqUicg/640?wx_fmt=png&from=appmsg)

Fig. 1: Physics-inspired NN architectures

_Fig. 1：物理启发的神经网络架构。(a) 用协变组合网络预测分子性质，基于图神经网络，将分子分解为子图层级结构。(b) 一种直接编码 Lax-Oleinik 公式的两层网络架构，其参数和 Hamilton-Jacobi PDE 的粘性解精确对应。_

论文特别提到了一个有趣的例子：硬边界条件嵌入。对于求解微分方程，网络架构可以被修改为精确满足各类边界条件——Dirichlet 条件、Neumann 条件、Robin 条件、周期条件，甚至界面条件。具体来说，可以设计如下形式的试函数：

其中  精确满足边界条件， 是一个距离函数（在边界上为零）， 是无约束的网络输出。这样无论网络权重怎么变，输出都精确满足边界条件。

**优点**：物理约束被严格满足，不存在近似误差。

**缺点**：只适用于已知且相对简单的对称群或约束形式。对于复杂物理系统（比如湍流中的守恒律），归纳偏置的设计非常困难，而且实现往往需要大量手工设计（craftsmanship）。

* * *

#### （3）学习偏置：用损失函数做"软约束"

最灵活的方式——通过在损失函数中加入物理约束项，让训练过程把物理定律"逼近地"满足。PINNs 是这个方向最典型的代表。

论文在 Box 3 中给出了 PINNs 的完整算法描述：

![Box 3: PINN Algorithm](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESLAryice7lqYOTbgYicOYibwXXfmEicJx5BhCTeTcE0sokkT0MiaaiawENfo5B2tQTgECDUANPsRHdttVdPgdFstFFbxTzo8vS3Dk0Pc/640?wx_fmt=png&from=appmsg)

Box 3: PINN Algorithm

_Box 3：PINN 算法示意图。左侧是标准的全连接网络 ，输出 。右侧通过自动微分计算对 、 的各阶偏导数，构造 PDE 残差。损失函数同时包含数据拟合项和 PDE 残差项。_

损失函数的一般形式：

其中：

这里  和  是两项的权重，它们的平衡对训练效果有决定性影响。

论文指出，软约束优化的解可以等价地看作贝叶斯框架下基于物理似然假设的最大后验估计（MAP estimate）。这个观察为后面的不确定性量化提供了理论基础。

**优点**：最灵活——可以处理非常一般的物理约束，包括微分方程、积分方程、分数阶方程，甚至是实验观测到的定性规律。

**缺点**：物理约束只能被近似满足，精度依赖于权重调节。 和  的不当设置会导致训练失败。

* * *

#### 三条路径的混合使用

论文特别强调，这三种路径**并不互斥**，实际效果最好的方案往往是混合使用：

-   用**归纳偏置硬编码边界条件**（保证精确满足）
    
-   同时用**学习偏置软约束 PDE**（保持灵活性）
    
-   再用**多保真数据提供观测偏置**（补充训练信号）
    

例如，DeepONet 可以和 PINNs 结合——用 PINNs 的物理约束增强 DeepONet 的训练，实现无标注数据的算子学习。论文提到在电对流和高超音速流动中，这种组合方案实现了实时精确预测，并且具有外推能力。

还有一种多保真策略：当低精度模型可用时（如粗网格仿真），可以用一个复合神经网络学习低精度和高精度之间的非线性映射，从而以很低的成本获得高精度预测。论文引用的一个案例中，这种方法把 3D 打印材料屈服应力的推断误差从超过 100% 降低到了 5% 以下。

* * *

### 4.2 传统数值方法与深度学习的类比

这是论文中一个容易被忽略但非常有启发性的部分。作者指出，深度学习和传统数值方法之间存在深层的类比关系：

数值方法

深度学习对应

有限元基函数

网络的激活函数

多重网格方法

ResNet 的跳跃连接

分层迭代求解

多级网络/V-cycle 结构

隐式 Runge-Kutta

离散时间 PINNs（最多 500 级）

Krylov 子空间方法

GMRES 等迭代法对应网络的层级结构

ReLU 分片线性

等价于连续分片线性有限元

需要注意，上表是简化的概念对应。其中严格证明的等价关系主要限于 **ReLU 网络 ↔ 连续分片线性有限元函数**（He et al. 2020），以及 **MgNet 统一框架**（He & Xu 2019）建立的多重网格与 CNN 之间的系统对应。其余更多是启发性类比而非严格等价，但这些类比仍然有价值——它意味着有限元理论中的逼近性分析有可能被迁移来理解网络的逼近能力。

论文还提到了一个很有意思的方向：用 PINNs 启发 "数学知情" 的元学习架构设计（mathematics-informed meta-learning architectures）——也就是说，数值方法的经验反过来可以指导神经网络架构的设计。

* * *

### 4.3 PIML 的优势场景

论文系统讨论了 PIML 相比传统方法有独特优势的几个场景：

**场景一：不完整模型和不完美数据**。这是 PIML 最核心的应用场景。传统数值方法处理 well-posed 问题很在行，但面对缺失边界条件、未知参数、带噪声的稀疏观测，基本无能为力。PINNs 可以同时处理这些情况——物理约束充当正则化，让 ill-posed 问题变成 well-posed 的优化问题。

**场景二：小数据强泛化**。论文明确指出：通过嵌入物理，深度学习模型被有效约束在低维流形上，因此可以用很少的数据训练，并且在外推（extrapolation）而不仅仅是内插（interpolation）任务中表现良好——这是纯数据驱动模型做不到的。

**场景三：维度灾难的缓解**。论文引用了 DeepONet 在算子回归中可以应对输入空间维度灾难的理论结果（refs 127-128）。传统网格方法的计算量随维度指数增长（），而 PINNs 不需要网格，配置点数量的增长可以远慢于网格方法。不过需要注意，PINNs 虽然不需要网格，但高维场景中的优化难度和高阶自动微分的计算代价仍会显著增长——"免于维度灾难"这个说法在实践中有较大折扣。

**场景四：无网格特性**。不需要计算代价高昂的网格生成，因此可以轻松处理不规则域和移动域问题。代码实现也更简单——用现有的 TensorFlow 或 PyTorch 框架就能跑。

当然，论文也很坦诚地承认：对于正问题中的 well-posed 问题（不需要数据同化），现有的基于网格的数值求解器**目前仍然优于 PINNs**。

* * *

### 4.4 从 PINNs 到 Neural Operators

PINNs 有一个根本局限：**它学的是一个特定参数设置下的解函数，而不是从参数到解的映射关系**。换句话说，你用 PINNs 解了一个  的 Burgers 方程，想换成 ？对不起，重新训练。

这个问题催生了 **Neural Operator** 这条新路线。论文重点讨论了 DeepONet：

**DeepONet**（Lu Lu 等, 2021）：基于 1995 年 Chen & Chen 的万能算子逼近定理，用一个 Branch Net 编码输入函数、一个 Trunk Net 编码输出坐标，两者的内积给出输出函数值。一次训练，就能对不同输入函数进行推理。

下面是 DeepONet 的 PyTorch 实现，帮助理解 Branch-Trunk 的分离结构：

`import torch   import torch.nn as nn      class DeepONet(nn.Module):       def __init__(self, m=100, branch_layers=[100, 128, 128, 64],                    trunk_layers=[2, 128, 128, 64]):           super().__init__()           b_modules = []           for i in range(len(branch_layers) - 1):               b_modules.append(nn.Linear(branch_layers[i], branch_layers[i+1]))               if i < len(branch_layers) - 2:                   b_modules.append(nn.Tanh())           self.branch = nn.Sequential(*b_modules)              t_modules = []           for i in range(len(trunk_layers) - 1):               t_modules.append(nn.Linear(trunk_layers[i], trunk_layers[i+1]))               if i < len(trunk_layers) - 2:                   t_modules.append(nn.Tanh())           self.trunk = nn.Sequential(*t_modules)          def forward(self, u_sensors, y_coords):           """           u_sensors: (batch, m)  — 输入函数在 m 个传感器上的值           y_coords:  (batch, 2)  — 查询坐标 (t, x)           """           branch_out = self.branch(u_sensors)   # (batch, p)           trunk_out  = self.trunk(y_coords)     # (batch, p)           # Lu et al. (2021) 原文公式含偏置项 b_0，此处省略以突出核心结构           return torch.sum(branch_out * trunk_out, dim=-1, keepdim=True)   `

论文还提到了另一种算子学习方法——\*\*Fourier Neural Operator (FNO)\*\*（Li et al., 2021），在频域做全局卷积，对规则网格上的问题效率极高。不过论文中对 FNO 的讨论篇幅远少于 DeepONet——部分原因是 FNO 在本综述写作时尚未正式发表（仅有 arXiv 预印本），时间上来不及深入讨论；当然也不排除"自家综述"对自家方法着墨更多的因素。

  

PINNs

DeepONet

FNO

**学什么**

单个解函数 

算子 

算子 

**换参数**

必须重新训练

直接推理（毫秒级）

直接推理

**不规则几何**

天然支持

天然支持

需要额外处理

**需要训练数据**

几十~几百

几千组输入-输出对

几千组

**适合场景**

单次求解/反问题

多参数快速推理

规则域上的大批量推理

> **一个直觉类比**：PINNs 像一个会解方程的学生——给一道题，他认真解一道。DeepONet 和 FNO 像一个学过"解题方法"的老师——你给他任何一道同类型的题，他不用重新推导，直接套方法就能给出答案。代价是"培训老师"比"教学生做一道题"贵得多。

* * *

### 4.5 不确定性量化

标准 PINNs 只给点估计——它告诉你 ，但不告诉你这个值有多可靠。论文系统地讨论了三种不确定性来源和对应方案：

**（1）物理不确定性**：物理系统本身是随机的（随机 PDE）或参数存在随机性。论文引用了物理信息 GANs (PI-GANs) 在求解高维随机 PDE 中的应用——利用 GANs 学习高维概率分布的能力，结合物理约束，可以同时处理正问题和反问题。实验表明 GANs 如果设计得当，可以应对高随机维度问题的维度灾难。

**（2）数据不确定性**：噪声、缺失、离群点。B-PINNs（Liu Yang 等, 2021）把网络权重看作随机变量，通过贝叶斯推断得到后验分布：

其中似然函数  同时包含数据拟合项和 PDE 残差项。推断可以用 Hamiltonian Monte Carlo (HMC) 或变分推断。输出不再是一个值，而是一个分布——自然就有了置信区间。

**（3）模型不确定性**：网络容量、训练不充分等。可以用集成方法（ensemble）或 MC Dropout 来量化。

* * *

### 4.6 可扩展性与训练挑战

第一篇精读中我们提到了 PINNs 训练的种种困难。这篇综述把这些问题系统化了：

**梯度病态**： 和  的梯度量级可以差好几个数量级。这个问题有两篇关键工作需要区分：\*\*(1)\*\* Wang, Teng & Perdikaris (2021, SIAM JSC) 首先从梯度统计的角度提出了学习率退火（learning rate annealing）方案，核心思想是用  动态平衡各 loss 分量的梯度量级；\*\*(2)\*\* Wang, Yu & Perdikaris (2022, JCP) 进一步用 Neural Tangent Kernel (NTK) 理论揭示了问题的深层根源——不同 loss 分量对应的 NTK 特征值谱差异巨大，导致一个分量收敛了另一个还在原地踏步。这两篇工作一个给出了实用方案，一个给出了理论解释。

**频谱偏差**：神经网络天然偏好低频（文献中称为 "F-principle" 或 "spectral bias"）。论文引用了严格证明频率偏差存在性的理论工作，并指出目标函数中的高频特征还会导致陡峭梯度，使 PINNs 难以精确惩罚 PDE 残差。解决方案包括：Fourier Feature Embedding（输入坐标随机 Fourier 映射）、多尺度 DNN 架构和域分解。

**域分解**：对大规模问题，单个 PINN 搞不定。XPINN (Jagtap et al.) 和保守 PINNs 把计算域分成子域，每个子域一个独立网络，子域之间通过界面条件耦合。这种思路天然适合并行计算——每个子域分配到不同 GPU，通信开销很小。

**时间因果性困难**：PINNs 在长时间积分问题上精度会急剧下降——网络倾向于"同时"学习所有时刻的解，而非像传统时间推进格式那样从前向后逐步求解。后续的 causal PINNs (Wang et al., 2024 CMAME) 通过强制时间因果性约束部分缓解了这个问题。

**高阶导数的计算效率**：不同于传统 ML 任务只需一阶导数做梯度下降，PINNs 通常涉及高阶导数。论文指出当前的 TensorFlow 和 PyTorch 对高阶自动微分的支持并不高效，呼吁开发基于 Taylor-mode AD 的更高效软件库。

* * *

## 五、核心应用案例

综述中展示了几个非常精彩的应用案例，涵盖了流体力学、生物物理、等离子体物理、高维统计物理、材料科学、分子模拟和地球物理等领域。每一个都说明了 PIML 在传统方法难以触及的场景中的独特价值。

### 5.1 咖啡杯上的三维流场重建

![Fig. 2: 咖啡杯流场推断](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESIpAmh6R9vcwI6icCeRXkrCYictKw9b3lWcrNX7sWZSEBlia2rqzMwUO60DXQdLQiaBEbe1bC8iaTXGAL5McIpDrrYhDmCweUu6bHKc/640?wx_fmt=png&from=appmsg)

Fig. 2: 咖啡杯流场推断

_Fig. 2：用层析背景纹影成像 (Tomo-BOS) 测量咖啡杯上方的三维温度场，然后用 PINNs 结合不可压缩 Navier-Stokes 方程推断出完整的三维速度场和压力场。(a) Tomo-BOS 实验装置——六台相机围绕咖啡杯排列，记录背景点阵的畸变。(b) 从折射率场重建的三维温度场。(c) PINNs 推断出的三维速度场和压力场。这是一个典型的 ill-posed 反问题——没有显式给定传统意义上的边界条件，温度场数据本身隐式提供了空间约束信息。_

这个例子把 PINNs 反问题的能力展示得淋漓尽致：只测了温度，没测速度和压力，但物理约束（质量/动量/能量守恒）自动"补全"了缺失的信息。传统方法要做这件事？你得先画网格、指定边界条件、处理湍流模型……而 PINNs 只需要定义好 loss 就行。

### 5.2 心血管 4D-Flow MRI 数据增强

![Fig. 3: MRI 血流重建](https://mmbiz.qpic.cn/sz_mmbiz_png/RkqvU1giaESKaQmaSI40Ezk4L34EVwksXg8ny76yqu61ZY9OibC7LfWVmKtwhIS0Z0Zryu5OvIxAN3HezJrUKYdicuFgEqjibfzQTicFGg5a6MnI/640?wx_fmt=png&from=appmsg)

Fig. 3: MRI 血流重建

_Fig. 3：用 PINNs 约束 Navier-Stokes 方程对猪主动脉的 4D-Flow MRI 数据进行去噪和超分辨重建。(a) 原始 MRI 数据快照。(b-d) PINNs 重建的速度场、压力分布、动脉壁面几何和壁面剪应力——这些量在临床诊断中至关重要，但无法直接从 MRI 测量。_

论文特别提到了 PINNs 在这个场景中的潜在风险：当 MRI 测量信噪比很低、或者存在复杂流动模式（边界层、高涡度区、紊流突发等）时，PINNs 的鲁棒性会下降。不过在生理条件下，血流通常是层流，PINNs 在这个范围内通常有效。

### 5.3 等离子体边缘湍流诊断

![Fig. 4: 等离子体动力学](https://mmbiz.qpic.cn/sz_mmbiz_png/RkqvU1giaESLoib7zicniavfC49q72ZXNZcz0HwBzA2aYhPzNqPO7v7shwxiaTulAx7UQrMcxk6b3R2SsQWqdxFOICK5F8c5W7gRnrdmKKrXZqX4/640?wx_fmt=png&from=appmsg)

Fig. 4: 等离子体动力学

_Fig. 4：磁约束聚变装置中的边缘等离子体动力学。上行是参考解（目标），下行是 PINNs 的预测。从电子密度  和温度  的部分观测出发，用漂移约化双流体理论约束 PINNs，重建了未知的湍流电场 、电势  等物理量。_

这个案例的亮点在于：研究者只使用了三维**合成（数值模拟生成的）**等离子体的电子密度和温度的部分观测数据，PINNs 就能从碰撞等离子体中准确重建出 blob-like 丝状结构的物理动力学。需要指出的是，这里使用的是合成数据而非真实实验测量——真实实验条件下的效果仍有待验证。

### 5.4 高维亚稳态跃迁

![Fig. 5: 亚稳态跃迁](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESKcic25uutZ5Kj5PxlpYw4f1uj7LSZntSTmia0ibmTIcKaSkONNSTV3PC3GUOrGBn90BEqw3sVMmXg6ibwJdtgoGeMtTGz9P9MvSN8/640?wx_fmt=png&from=appmsg)

Fig. 5: 亚稳态跃迁

_Fig. 5：144 维 Allen-Cahn 型系统中两个亚稳态之间的跃迁路径。上部显示两个亚稳态的状态，下部从左到右展示了学习到的 committor 函数的特征核化路径。这是一个物理信息学习处理高维问题的典范。_

这个例子用神经网络表示 committor 函数，训练时使用物理信息损失函数（committor 函数的变分公式加上边界条件的软惩罚），并结合自适应重要性采样来采样主导损失函数的稀有事件。能在 144 维空间中学习到两个亚稳态之间的跃迁路径——这是传统方法根本无法触及的维度。

### 5.5 更多应用领域

论文还讨论了几个重要的应用方向（限于篇幅，简要列举）：

应用领域

方法要点

**材料科学**

超声表面声波 + PINNs 识别金属板中的裂纹；多保真框架推断 3D 打印钛合金弹塑性参数，误差从 >100% 降到 <5%

**量子化学**

FermiNet：费米子神经网络求解多电子 Schrödinger 方程，网络架构天然反对称化，且损失函数设为能量泛函的变分形式

**分子动力学**

DeePMD：用 NN 替代经典势函数，保持平移/旋转/排列对称性，实现每天超过 1 纳秒的从头算精度轨迹，原子数达到 1 亿以上

**地球物理**

全波形反演中耦合 NN 与物理模型，估计地下岩石渗透率和孔隙度；地震反演中估计速度、断层破裂成像、震源定位

**热力学一致性**

控制体积 PINN (cvPINN)：推广有限体积格式到深度学习，保证熵解，适合含激波的双曲问题

这些案例的共同特点：**数据不完整、问题 ill-posed、传统方法难以直接求解或计算代价极高**。这恰好是 PIML 最有竞争力的战场。

* * *

## 六、软件生态

论文专门用一节讨论了 PIML 的软件生态，这在综述文章中并不常见，反映了作者团队对"工具易用性"的重视。

软件

类型

语言/后端

特点

**DeepXDE**

Solver

Python / TF, PyTorch, JAX

最全面，支持整数阶/分数阶/积分微分方程，构造实体几何 (CSG) 支持复杂几何

**SimNet**

 (现 NVIDIA Modulus)

Solver

Python / TF, PyTorch

NVIDIA 开发，GPU 优化，面向大规模工程问题

**NeuralPDE**

Solver

Julia

Julia 生态，适合科学计算

**SciANN**

Wrapper

Python / TF

封装高层 API，但用户仍需手动实现求解流程

**ADCME**

Wrapper

Julia

将 DNN 嵌入标准数值格式（RK, 有限差分, 有限元, 有限体积）

**GPyTorch / Neural Tangents**

分析工具

Python

通过核方法（NTK）分析 PINNs 训练动力学

论文特别详细地介绍了 DeepXDE 的设计哲学：用户代码紧贴数学表述，组件松耦合，支持惰性求值和梯度记忆化以加速高阶导数计算。当然，DeepXDE 正是 Lu Lu（本文作者之一）的作品，着墨较多不意外。

* * *

## 七、选择指南：该用什么方法？

论文在 "Which model, framework, algorithm to use?" 这一节给出了一个高层次的决策框架，这可能是全文对实践者最有价值的部分之一：

-   **PINNs（MLP 架构）**：通用但不编码特殊先验，适合观测数据有限时用物理约束推断确定性函数
    
-   **PINNs + CNN 架构**：适合网格化的二维域
    
-   **PINNs + Fourier Features**：适合解具有高频或周期边界的 PDE
    
-   **PINNs + RNN 架构**：适合非马尔可夫和时间离散问题
    
-   **B-PINNs / 概率 PINNs**：需要量化认知不确定性（贝叶斯推断或频率派集成）或随机不确定性（VAE 或 GAN）时使用
    
-   **DeepONet**：学习算子而非函数，架构可变——散射传感器用 MLP，图像用 CNN，时间序列用 RNN
    

论文坦承，所需的样本复杂度目前无法先验确定，通常取决于：\*\*(1)\*\* 架构中归纳偏置的强度；\*\*(2)\*\* 观测数据与物理约束之间的兼容性；\*\*(3)\*\* 目标函数或算子的复杂度。

* * *

## 八、未来研究方向（论文 Outlook）

论文最后一节 Outlook 是我个人觉得最值得反复读的部分——它不是泛泛而谈"未来很美好"，而是提出了几个非常具体、也非常有野心的研究方向。站在 2026 年回头看，有些方向已经开始兑现，有些还停留在设想阶段。

### 8.1 数字孪生（Digital Twins）

论文花了大量篇幅讨论数字孪生——通过同化真实测量数据来校准计算模型，在计算机中（in silico）复制一个物理实体的行为。作者指出，要把这个概念落地，需要解决几个根本挑战：

-   **数据稀疏且异构**：观测数据可能来自图像、时间序列、实验报告、历史记录等完全不同的模态，而且某些关键物理量可能根本无法直接测量
    
-   **预处理代价高昂**：传统物理模型严重依赖网格生成和边界条件校准等繁琐的预处理流程，难以满足实时决策的需求
    
-   **物理模型不完整**：许多复杂自然系统的物理模型充其量是"部分已知"的——我们知道守恒律，但本构关系需要假设
    

论文的判断是：PIML 天然具备融合物理模型与异构数据的能力，加上自动微分免去网格生成的需要，有望成为数字孪生时代的核心使能技术（enabling catalyst）。

> **2026 年回看**：这个预判基本兑现了。数字孪生已经成为工业界（航空、能源、医疗）最热门的概念之一，而 NVIDIA Modulus（前 SimNet）、Siemens Xcelerator 等平台都在底层集成了 PIML 技术。

### 8.2 模型间变换、融合与可解释性

这个方向是六位作者中 Kevrekidis 的强项——多尺度建模和方程无关计算的视角在这里体现得很充分。

论文提出了一个有趣的问题：**不同研究者使用相同（或等价）的数据，可能会训练出完全不同的神经网络模型（不同的隐空间、不同的学习算子），但预测结果几乎无法区分。** 这意味着：

1.  我们需要构建**模型之间的 ML 变换**——能不能把一个模型系统地映射到另一个模型？
    
2.  已经有一些成功的例子：从非线性动力学到 Koopman 线性模型、从 Poisson 系统到 Hamiltonian 系统、从 Nesterov 迭代到对应的 ODE
    
3.  这种变换能力直接关系到**可解释性**——如果能把 ML 隐空间的特征映射到物理可解释的观测量，或者把 ML 学到的算子映射到闭合形式的方程，模型的可解释性就会大幅提升
    

最关键的开放问题是：**这种变换的泛化极限在哪里？** 在什么样的观测范围内，一个 ML 模型可以被映射到另一个 ML 模型或物理模型？超出这个范围会发生什么？

### 8.3 内禀变量发现与涌现表示

这可能是论文中最具前瞻性的方向。传统的 PIML 范式是：先选定变量 → 收集数据 → 用已知算子字典表述物理 → 学习。但论文提出了一个颠覆性的新范式：

**让 ML 自动发现好的/内禀的变量，以及有用的物理模型表述。**

具体来说：

-   超越 PCA，使用流形学习技术（ISOMAP、t-SNE、扩散映射）及其深度学习对应物（生成模型、变分自编码器），将原始观测嵌入到降维的、数学上有用的隐空间中
    
-   更激进的是，对于时空无序的数据，可以创建 **ML 驱动的涌现空间**——用 ML 学到的"独立变量"来定义新的"时空"，然后在这个涌现时空中学习演化算子（PDE 或随机 ODE）
    

论文用了一个很有意思的类比：2011 年 DARPA 碎纸机挑战赛（从碎片中重建文件）本质上是在"重建空间"。类似地，对于无序的时空观测数据，ML 可以在信息丰富的"涌现时空"中重建物理规律——这和现代物理学中"涌现时空"的讨论有直接类比。

### 8.4 重新定义"理解"

论文在最后抛出了一个哲学层面的问题：**我们所说的"理解"是什么意思？**

传统意义上，"理解"意味着 PDE 中的每一项都有物理或机制上的解释，作用于物理上有意义的可观测量（因变量），并且以物理上有意义的时空（自变量）为基础。

但现在，我们有可能**在没有这种机制性理解的情况下做出精确预测**。那么"理解"这个概念本身，是否也需要被重新定义？

这个问题到今天（2026 年）依然完全开放，而且随着大语言模型和基础模型在科学领域的渗透，变得比 2021 年时更加紧迫。

* * *

## 九、影响与地位

从定位来看，如果说 2019 年 JCP 上的 PINNs 论文是"点燃了一根火柴"，那这篇 Nature Reviews Physics 综述就是"画了一张地图"。

**对领域定义的贡献**：三种偏置（观测/归纳/学习）的分类框架，现在已经成为 PIML 文献中的标准语言。几乎所有后续论文在 Introduction 里讨论 related work 时，都会引用这个框架来定位自己的工作。

**对生态建设的推动**：综述系统梳理了开源工具链，客观上推动了整个 PIML 生态从"各自为战"走向"有章可循"。

**引用量轨迹**（数据来源：Google Scholar，截至 2026 年 2 月）：2021 年 96 次 → 2022 年 767 次 → 2023 年 1,840 次 → 2024 年 2,586 次 → 2025 年 2,800+。增长仍在加速，说明 PIML 这个方向远没有进入饱和期。

**需要注意的局限**：作为核心团队自己写的综述，文章不可避免地对自家方法有较多着墨。PINNs 和 DeepONet 的讨论篇幅远大于 FNO、SINDy、Deep Ritz 等竞争方法。对于 Brunton & Kutz 团队的数据驱动发现路线（SINDy 等），以及 Weinan E 团队的深度学习数值方法理论，综述的覆盖相对薄弱。读者需要结合其他综述（如 Brunton et al. 2020, Beck et al. 2021）来获得更平衡的全景视角。

* * *

## 十、局限性与后续发展

这篇综述发表于 2021 年年中，到现在过了将近五年。站在 2026 年的时间点回头看，论文提出的几个"开放问题"各自走到了什么程度？

### 10.1 多尺度与多物理场

论文明确指出全连接网络学高频函数困难（spectral bias），并引用了严格证明频率偏差存在性的理论工作以及作为频率函数的训练收敛速率。后续发展：Fourier Feature Networks (Tancik et al., 2020)、Random Weight Factorization (Wang et al., 2022) 和多尺度 DNN 部分缓解了这个问题，但对于强耦合多物理场问题仍然没有满意的方案。

### 10.2 训练鲁棒性

NTK 自适应权重方案和 causal PINNs (Wang et al., 2024) 让 PINNs 的训练成功率大幅提升。论文中关于 NTK 理论的讨论——将 PINNs 训练动力学看作核回归（当网络宽度趋于无穷时）——为后续一系列理论分析奠定了基础。但对于强非线性问题（如湍流），训练仍然不够稳定。

### 10.3 标准化基准测试

论文呼吁建立 PIML 的标准 benchmark——类似 ImageNet 对计算机视觉的推动作用，甚至详细讨论了如何设计有意义的基准（应包含完整的物理模型和参数，而不仅仅是数据集）。后来 PINNBench 和 PDEBench 等基准陆续出现，但离真正的"行业标准"还有不小的距离。

### 10.4 理论基础

论文坦言 "little is known about the theoretical foundation"。几年过去，虽然有一些关于逼近误差和收敛性的理论分析（如二阶线性 PDE 的过参数化两层网络梯度下降收敛性证明），但对于"PINNs 什么时候能保证收敛到正确解"这个根本问题，目前仍没有令人满意的答案。

### 10.5 论文没有覆盖但后来快速发展的方向

![](https://mmbiz.qpic.cn/mmbiz_png/RkqvU1giaESIwCfa2VM44aeGHMKNJ4VicvaLEA3sY1bicCZ7scwIgjSLRgh7wdSGUguadhCr2okdibXibjG455ZsiciccC5hL6vUKh4rALv0rR7Xgs/640?wx_fmt=png&from=appmsg)

* * *

## 参考文献

1.  Karniadakis G E, Kevrekidis I G, Lu L, Perdikaris P, Wang S, Yang L. Physics-informed machine learning. _Nature Reviews Physics_, 2021, 3: 422-440.
    
2.  Raissi M, Perdikaris P, Karniadakis G E. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. _Journal of Computational Physics_, 2019, 378: 686-707.
    
3.  Lu L, Jin P, Pang G, Zhang Z, Karniadakis G E. Learning nonlinear operators via DeepONet based on the universal approximation theorem of operators. _Nature Machine Intelligence_, 2021, 3: 218-229.
    
4.  Li Z, Kovachki N, Azizzadenesheli K, et al. Fourier neural operator for parametric partial differential equations. _ICLR_, 2021.
    
5.  Wang S, Teng Y, Perdikaris P. Understanding and mitigating gradient flow pathologies in physics-informed neural networks. _SIAM Journal on Scientific Computing_, 2021, 43(5): A3055-A3081.
    
6.  Wang S, Yu X, Perdikaris P. When and why PINNs fail to train: A neural tangent kernel perspective. _Journal of Computational Physics_, 2022, 449: 110768.
    
7.  Yang L, Meng X, Karniadakis G E. B-PINNs: Bayesian physics-informed neural networks for forward and inverse PDE problems with noisy data. _Journal of Computational Physics_, 2021, 425: 109913.
    
8.  Lu L, Meng X, Mao Z, Karniadakis G E. DeepXDE: A deep learning library for solving differential equations. _SIAM Review_, 2021, 63(1): 208-228.
    
9.  Jagtap A D, Karniadakis G E. Extended physics-informed neural networks (XPINNs): A generalized space-time domain decomposition based deep learning framework for nonlinear partial differential equations. _Communications in Computational Physics_, 2020, 28(5): 2002-2041.
    
10.  Tancik M, Srinivasan P P, Mildenhall B, et al. Fourier features let networks learn high frequency functions in low dimensional domains. _NeurIPS_, 2020.
     
11.  Pfau D, Spencer J S, Matthews A G, Foulkes W M C. Ab initio solution of the many-electron Schrödinger equation with deep neural networks. _Physical Review Research_, 2020, 2: 033429.
     
12.  Brunton S L, Proctor J L, Kutz J N. Discovering governing equations from data by sparse identification of nonlinear dynamical systems. _Proceedings of the National Academy of Sciences_, 2016, 113: 3932-3937.
     
13.  Lagaris I E, Likas A, Fotiadis D I. Artificial neural networks for solving ordinary and partial differential equations. _IEEE Transactions on Neural Networks_, 1998, 9(5): 987-1000.
     
14.  Zhang L, Han J, Wang H, Car R, E W. Deep potential molecular dynamics: A scalable model with the accuracy of quantum mechanics. _Physical Review Letters_, 2018, 120(14): 143001.
     
15.  Darbon J, Meng T. On some neural network architectures that can represent viscosity solutions of certain high dimensional Hamilton-Jacobi partial differential equations. _Journal of Computational Physics_, 2021, 425: 109907.
     
16.  Wang S, Sankaran S, Wang H, Perdikaris P. An expert's guide to training physics-informed neural networks. _Computer Methods in Applied Mechanics and Engineering_, 2024, 419: 116462.