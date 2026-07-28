# 剑桥综述：物理信息网络(PINN)能否击败有限元（FEM）？（内含源代码）


> 原文地址: [https://mp.weixin.qq.com/s/rVGNmiIjeIr7kUuCNiK5gQ](https://mp.weixin.qq.com/s/rVGNmiIjeIr7kUuCNiK5gQ)

**物理信息网络(PINN)能否击败传统有限元方法？**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hplDlcHRvicibUd5sHCh6vQ1mjQrSBwY1oog1sicF68dLjEcxgWhsBMTUA/640?wx_fmt=png)

  

  

开源地址：https://github.com/TamaraGrossmann/FEM-vs-PINNs

  

  

**摘要**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MVPvEL7Qg0HJalXIBXGXSBFLMk2TZAqh23iaHwLpprUov8bNQ95dWDVMTq4qGicM3G6cmsZcCF6RsKyn9p8eQA3Q/640?wx_fmt=png)

偏微分方程（PDEs）在物理、生物和其他科学领域的数学建模中具有基础性作用。传统上，有限元方法（FEM）是数值求解PDE的标准方法。近年来，深度神经网络在各类近似任务中的成功激发了其在PDE数值解中的应用，例如基于物理信息的神经网络（PINNs）及其变体已展现出对多种PDE的近似能力。然而，此前研究多孤立地探讨PINNs与FEM，缺乏系统性比较。本文通过系统性计算研究，对比了两种方法在求解多类线性和非线性PDE中的表现，包括：**1D、2D、3D泊松方程**，**1D Allen-Cahn方程**，以及**1D、2D半线性薛定谔方程**。研究从**计算成本**和**近似精度**两方面进行对比。结果表明，**在求解时间和精度上，PINNs未能超越FEM**；但在某些实验中，PINNs在求解后的评估速度更快。

  

  

  

**1\. 引言**

    偏微分方程（PDEs）是数学建模与应用数学的基石，广泛用于描述物理、生物、社会经济及金融系统中的动态过程。其核心思想是通过函数表示某一过程在时空中的行为，并利用PDE约束该函数满足特定规律。关键问题在于，这些规律与初始/边界条件是否足以唯一确定该函数（即解的适定性）。一旦确认解的唯一性，如何高效求解成为实际应用的核心挑战。

    在多数实际场景中，PDE的解析解难以获得，需依赖数值方法。过去几十年间，多种数值方法被提出并发展，其中**有限元方法（FEM）**因其普适性成为主流技术。其他方法如有限差分法、有限体积法及谱元法也各有优势。这些传统方法在理论上较为成熟，具备误差估计、收敛性和稳定性保障，且常通过稀疏线性系统或牛顿迭代高效求解。尽管FEM的实现复杂度较高，但已有通用计算库（如FEniCS、DUNE）大幅降低了其应用门槛。

  

    然而，传统方法存在显著局限：

1.  维度灾难：依赖空间离散化（如网格或多项式基），导致三维以上问题计算成本剧增，高维（如百维以上）PDE几乎无法求解。
    
2.  **非光滑性与复杂区域：**非线性、非光滑PDE或奇异区域需精细网格或特殊处理（如虚拟元法），增加了算法设计与实现的难度。
    
      
    

    近年来，深度学习方法为PDE求解提供了新思路。其核心优势包括：

1.  **无网格特性：类似经典无网格方法，避免离散化需求；**
2.  **高维适应性：通过自动微分技术，神经网络可高效表示复杂函数，潜在克服维度灾难；**
3.  **高效推理：训练完成后，网络对新数据点的评估速度极快**

  

    在此背景下，**基于物理信息的神经网络（PINNs）**成为研究热点。其基本思想是将PDE的解建模为神经网络，通过最小化PDE残差及初始/边界条件约束的损失函数进行训练。基础版PINNs（vanilla PINNs）已在多种PDE类型中验证了有效性，并被扩展至保守PINNs（cPINNs）、变分PINNs（VPINNs）等变体，以应对复杂几何和非线性问题。

  

    尽管如此，深度学习方法仍面临挑战：

1. **训练复杂度：**非凸优化导致计算开销大；

2. **理论支撑不足：**相较于FEM，PINNs的收敛性、稳定性分析尚不完善；

3. **非光滑解适应性差：**如Allen-Cahn方程在极小扩散系数下的间断解难以捕捉。

    本文旨在通过系统性计算实验，对比FEM与PINNs在典型线性和非线性PDE中的性能，为方法选择提供实证依据，并探讨深度学习在PDE求解中的潜力与局限。

  

**1.1 PINN的研究现状**

    与有限元方法（FEM）相比，基于物理信息的神经网络（PINNs）的理论基础尚不完善。最早关于训练点数量对收敛性影响的研究表明，对于线性二阶椭圆和抛物型PDE，在独立同分布采样数据下，PINNs能够在C0C0空间中实现强收敛。随后，研究进一步扩展，提出了在PDE稳定性假设下PINNs泛化误差的上界。针对特定PDE（如不可压缩Navier-Stokes方程），也有研究给出了总误差的上界，但这些分析通常局限于两层隐藏层且使用tanh激活函数的网络。

    尽管理论工作仍需深入，PINNs已在多个方向上得到扩展。例如，**保守PINNs（cPINNs）通过将空间域分解为多个独立部分，并分别为每个部分训练PINNs，从而能够处理复杂非规则几何问题。这一方法进一步推广为扩展PINNs（XPINNs）**，支持时空域分解，适用于任意类型的PDE，并实现了训练过程的并行化。另一种基于变分思想的改进是**变分PINNs（VPINNs）**，其损失函数基于PDE的变分形式，并使用Legendre多项式作为测试函数，从而能够处理某些非光滑PDE，并提升训练效率。此外，**贝叶斯PINNs**通过引入贝叶斯神经网络，能够有效处理噪声数据；而**有限基PINNs**则结合了PINNs与FEM的思想，旨在减少PINNs的频谱偏差。还有研究通过随机权重构建基函数，高效求解PDE。

    PINNs在多个领域展现了广泛的应用潜力，例如流体动力学、电磁学、弹性材料变形及地震学等。然而，研究也揭示了其局限性：在复杂PDE场景中，PINNs可能难以捕捉相关物理规律。尽管如此，已有研究提出了改进思路，例如通过自适应训练策略或结合变分形式的方法来提升其性能。

    PINNs的设计初衷是解决物理问题，其灵活性使其能够通过微调架构适应多种物理场景。随着专用软件包（如DeepXDE、NVIDIA Modulus、NeuroDiffEq）的发布，PINNs的实现变得更加便捷，进一步推动了其在实际应用中的普及。

**1.2 贡献与大纲**

    如上所述，这项工作的主要目标是对PINNs（物理信息神经网络）和FEM（有限元方法）在求解偏微分方程（PDEs）方面进行系统比较。具体来说，我们考虑以下模型问题：

一维、二维和三维空间中的椭圆型泊松方程；

一维空间中的抛物线型Allen–Cahn方程；

一维和二维空间中的双曲型半线性薛定谔方程。

    我们选择这些模型问题以涵盖广泛的PDE类别。我们从**求解时间**、**评估时间**和**准确性**等方面比较PINNs和FEM。我们采用了不同的有限元基函数以及多种网络架构。文献中已经讨论了几种对原始PINNs的改进。由于这些改进要么仍然基于相同的基本思想，要么代表了一种经典方法与PINNs的混合，我们在下文中主要关注原始PINNs。在整个工作中，我们选择的实验设置旨在模拟实践者（如计算科学家和工程师、机器学习者、数学建模者等）使用PINNs和FEM的方式。

    本工作的结构如下：我们在第2节讨论PDEs、FEM和PINNs。我们在第3节介绍我们的比较方法，然后分别在第4、5和6节中展示关于泊松方程、Allen–Cahn方程和半线性薛定谔方程的计算结果。我们在第7节讨论结果并总结工作。

  

  

**2\. 数学背景**

**2.1 有限元法**

    如前所述，有限元方法（FEM）已成为一大类偏微分方程（PDEs）空间离散化的黄金标准。我们以椭圆型PDE（如式(2.3)为例，讨论FEM的基本原理。假设齐次Dirichlet边界条件  且源项 平方可积。非稳态PDE和其他边界条件将在后续讨论。 当用FEM求解椭圆型PDE时，目标是找到弱解。即，在适当的函数空间  中寻找 ，使得对于所有属于函数空间  的测试函数满足：

通过分部积分，得到泊松方程的弱形式：此时，函数空间和的适当选择为，即满足以下条件的Sobolev空间：函数在边界上为零，且具有平方可积弱导数。在有限元方法中，将替换为有限维子空间，其基函数为。在此有限维空间上，弱形式(2.4)可写为：进一步可改写为线性系统,其中：

对于非齐次Dirichlet边界条件,需先构造满足边界条件的函数，再求解齐次辅助问题。对于非稳态PDE，考虑以下半线性PDE形式：

采用隐式欧拉法进行时间离散，半离散格式为：对应的弱形式为：由于非线性项的存在，需使用牛顿迭代求解。为降低计算成本，可采用半隐式策略：线性项隐式处理，非线性项显式处理，即：对应的弱形式为线性方程：

  

**2.2 物理信息神经网络（PINN）**

    PINN的目标是通过深度神经网络近似求解偏微分方程（PDE）。其核心是利用自动微分工具，无需对时空域进行离散化，而是通过随机采样实现。经典的PINN方法使用一个全连接神经网络，包含  个隐藏层，每层有个神经元。网络的输入是独立变量 ，在域  内采样。神经网络作为PDE解的近似器  是训练中优化的网络权重。与有限元方法（FEM）基于有限维基函数空间不同，PINN在所谓的Barron空间中近似PDE。PDE作为软约束被嵌入优化过程，即通过最小化PDE残差、边界条件残差和初始条件残差构建损失函数: 

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hQPje3Eo53jaUEb45oYYZL5QaYQfFkRWiaJREo898KXfHXO5NGIaARGg/640?wx_fmt=png)

此处，表示配置点的数量，用于计算PDE残差；边界条件和初始条件可以是实测数据，无需解析表达式。因此，PINN能融合数据驱动信息。本文统一使用2-范数计算损失，但可根据问题调整。, ,  的选择依赖问题域和复杂度，通常需启发式确定。我们采用拉丁超立方采样生成配置点，并在每个训练周期重新采样以提升覆盖性。微分算子  和边界条件中的导数通过自动微分计算，无需依赖网格离散化。这使得PINN在高维问题中更具扩展性。

  

  

**3\. 方法比较**

**3.1 实验设置**  

    为了系统比较FEM和PINNs，需要PDE的基准解以评估近似解的准确性。对于泊松方程，我们使用解析解作为基准；而Allen-Cahn方程和半线性薛定谔方程无解析解，因此采用高精度FEM解作为基准。具体来说，我们使用极细网格的FEM结合隐式欧拉法进行时间离散，生成参考解。

    FEM的配置基于Python工具库FEniCS（版本2019.1.0）。为平衡计算时间与精度，我们对不同网格尺寸进行测试。对于时变PDE（Allen-Cahn和薛定谔方程），采用第2.1节所述的半隐式离散策略。所有FEM解均通过CPU计算。

    PINN的实现严格遵循Raissi等人的经典方法。损失函数设计如式（2.6），其中Allen-Cahn方程的损失权重通过启发式调整，其余权重设为1。优化过程分两步：Adam优化器：每个训练周期使用拉丁超立方采样重新生成配置点，提升采样覆盖性。L-BFGS优化器：优化前仅采样一次配置点，用于精细调参。

    网络架构根据PDE复杂度灵活调整（如层数、节点数）。代码基于JAX，开源地址：https://github.com/Tamaradrossmann/FEM-vs-PINNs。

    FEM通常基于CPU运行，而PINN依赖GPU加速的反向传播。尽管FEM可通过GPU加速，但标准操作仍以CPU为主。因此，当前实验设计反映了两种方法的典型应用场景，具有实际可比性。

  

  

**4\. 计算泊松方程**

**4.1 1D**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8h4FfkafKLhfOfPpRu30iaqkfrriau2jLtzEheDEAJvo45USdzg4GOC8Bw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hibcAHbnq5Ricx88kCuTImYzmCW3u6aTRiaoxAgK29lJU9OB2FicIsJUUjw/640?wx_fmt=png)

  

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hPhqwEDa1hI7ia63MISIqYmyJ8AmJq6LDOpibL4kgPnuIiaaUAwaNrtfbg/640?wx_fmt=png)

    使用有限元法（FEM）和物理信息神经网络（PINNs）对一维泊松方程的解的近似结果与解析解在\[0, 1\] 区间内512个网格点上进行了比较。图1(a)展示了一维泊松方程的真实解及其近似解。同样，图1(b)展示了所有网格大小的FEM和PINNs架构的近似解与真实解之间的差异。在PINNs的近似解中，有一种架构的结果具有较大的相对误差：具有单个隐藏层和一个节点的PINN甚至无法以满足边界条件的方式学习解。然而，所有其他近似解与真实解之间的差异非常小。

    让我们比较使用FEM和PINNs求解或近似偏微分方程所需的时间与在新网格点上产生的相对误差。对于FEM，求解时间是解线性方程组的时间，而对于PINNs，我们考虑训练神经网络的时间。结果如图2(a)所示。我们可以清楚地看到，总体上FEM更快且在其解的近似中更准确。虽然有一些PINN架构能够实现与较粗糙的FEM近似相似甚至更低的相对误差，但它们的训练时间比FEM高出两到三个数量级。考虑到评估时间，即在不同网格上插值FEM解并评估训练好的PINN在测试集上的时间，我们可以看到类似的关系；见图2(b)。FEM解的近似总体上更快且更准确。最后，我们考虑了层数与求解时间和相对误差之间的关系。我们观察到，训练PINN的时间相对于层数相似。然而，每个网络的准确性与层中的节点数相关。也就是说，我们无法证明在1D泊松问题中，具有更多层的网络通常能获得更好的结果。

  

**4.2 2D**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hVLMdUT3nVTqMjmScuSOe0p55ibACmMgfaYseocnKxgrL8CA0tgt2ickg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hAicnUWuXX5kbERFUSDuPLibXibo5OKphYXPD3YVZXiasibicn1iaEdzJXOJtw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hBfVPztW0jbxTqAChBoN91IibZAgH6LOC55a1VlGnxbT3pRLzHnTe5XQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hWycKzm1icl79OqllbL1MSEeVb7flFTKxLibsnV5ibR2u9vQMYaFicHZxicg/640?wx_fmt=png)

  

    图3展示了在2000×2000网格上的解近似结果与真实解的一个示例。二维泊松方程的时间与精度关系图如图4(a)和图4(b)所示。从求解时间来看，FEM在精度和计算时间上明显优于所有PINN近似。使用FEM获得偏微分方程的解的速度快了一到三个数量级。然而，评估PINN的时间比在新网格上插值FEM解的时间快了两到三个数量级。我们还在同一图中绘制了FEM的求解时间，PINN的评估仍然更快，但差距较小。FEM的求解时间比FEM的评估时间更快；这可能是由于插值代码效率低下。尽管训练好的神经网络的评估在时间上有所改进，但PINN近似的精度仍然较低。 

  

**4.3 3D**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hIPcbHzKHPubWwxOhvYcyUNelQNjXZ5jAM9IPbP0DpC3jic2f1rVUq6A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hia9ibsMCoF3C2QXRLELy33GUM4hRgVox7pJ7h1IyOecCeiaygZ9Cibp9yA/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8h5XMTOPDT1dibTYBPdpBb8FbIt48gO8aVDAefKdha3X5w8gibcc7QBxTw/640?wx_fmt=png)

  

    该偏微分方程在150×150×150网格点上进行评估，示例结果如图5所示。时间与精度关系图如图6所示。计算时间较长的FEM结果具有较低的相对误差，因为它们是在更精细的网格上求解的，如图6(a)所示。虽然PINN近似的训练时间比我们比较的FEM网格解慢一到三个数量级，但在大多数情况下，它们能够达到相同甚至更高的精度。从图6(b)中可以看出，在评估时间方面，PINNs优于FEM。在新网格上插值FEM的时间比PINNs的评估时间慢两到三个数量级。此外，PINNs能够达到与FEM相同或在粗糙FEM近似情况下更高的精度。如果我们还将FEM的求解时间考虑在内，我们会发现它比评估时间快，但仍然比PINNs的评估时间慢。因此，与FEM的求解和评估时间相比，训练好的PINN在评估时具有更低的计算时间。

  

  

**5\. 计算Allen–Cahn方程**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hKBPx02owDSI1osubSaBplHFkZXYD0lmnUsicicichdlUXkodVoO4Tb4hA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hIh6CqpGz2YvvwF09cUCicbNIBoOU4m754QP8BOMnQtmEJ5H3vaLH4mQ/640?wx_fmt=png)

    在真实解的网格上，使用FEM和PINNs对偏微分方程（PDE）进行了近似比较。网格跨越\[0, 1\]，包含7993个网格点，时间离散化为dt=1/3×10−4，直到时间 T=0.05。真实解的精细网格FEM近似是使用隐式欧拉法得出的。FEM和PINNs的近似结果与真实解的比较如图7所示，展示了不同网格大小和网络架构的结果。FEM能够在所有网格大小下恢复PDE的解，但在大小为32的网格上，扩散界面附近存在轻微误差。PINNs的近似能力取决于网络架构和需要确定的自由参数或权重的数量。具有20个节点的架构无法恢复解，而每层100个节点的网络能够训练出解。随着层数的增加，解的质量逐渐提高，每层500个节点的神经网络能够很好地近似解。

    图8展示了FEM和PINNs的求解和评估时间与精度的比较。在求解时间方面，FEM比PINNs快五到六个数量级，这主要是由于神经网络的规模较大。然而，一些PINN架构能够达到与FEM相似的相对误差，尤其是每层100或500个节点的网络。PINN的评估时间与FEM的评估时间和求解时间的比较如图8(b)所示。FEM的评估时间优势下降到大约一个数量级。尽管神经网络的评估速度比训练快得多，但FEM在求解和评估时间上仍然更快。

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hwkPgU51CFD4uv4R8eNd9efNiaXSlrA7rsjMpQt09r0Az6DGaFQARViaQ/640?wx_fmt=png)

    与其他PDE相比，Allen-Cahn方程需要一些修改，例如对损失函数进行加权和仅对部分损失函数进行预训练。这种修改的必要性在于网络在学习PDE解时遇到的困难。我们还尝试训练了一个PINN来处理 ϵ=0.001的Allen-Cahn方程，结果如图9所示。经过一段时间后，解变得接近二值化，导致解中存在非常大的梯度。我们尝试了不同的激活函数（如softplus或ReLU），但结果都不足以被视为近似解。这表明标准的PINNs可能不适合处理不连续解，这可能是因为PINNs求解的是强形式的PDE，而不是弱形式。虽然FEM能够近似 ϵ=0.001的Allen-Cahn方程，但需要使用更精细的网格来准确表示扩散界面。

  

  

**6\. 计算半线性薛定谔方程**

**6.1 1D**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hUYYv4Hk5micPFZiaJRE5s0lRSK59yHn8xfDdrEfCup6MpibX7zbiaWGlKg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8h6tanRV0mrNQicVXtibHuqt0tPiazVcbdPs0K8QfYCK2ichIVW90cuZaTYw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hNH5HbGp8kydiaaS1bVEzCQTSjX4jtYvSGRNFC1ibrrXLeGicTYNDYqlzg/640?wx_fmt=png)

    FEM和PINNs的近似结果在真实解的网格上进行了比较，网格大小为7993个单元，时间离散化为dt=1/3×10−4。对于的近似结果如图10所示。可以看出，PINNs的近似在较大时间点上比FEM的近似稍微不准确。从定量角度来看，时间与精度关系图提供了每种方法性能的更广泛概览，如图11所示。专注于模量 ，FEM的求解时间比任何神经网络近似低两个数量级，并且相对误差也更低，如图11(c)所示。仅考虑两种方法的评估时间，FEM在时间和精度上仍然优于PINNs。然而，PINN的评估时间比FEM的求解时间更快。尽管如此，FEM在  的精度上仍然更高。

  

  

**6.2 2D**

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hnnucNEUTvRTeQvgaVZBJOxbibSHSnOjmicWARqTBotMDXfb99hdc3njA/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8h7FrypFRoTVtR062lrkeP4lJz5pqic3x1pPu0JPY5Jh8qs0lic05zyO0w/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hXY8ricibjMHfXRQEIlWTapj2HecTIqiaHqQWazeRK0yXLsIVSDH04Fuzw/640?wx_fmt=png)

  

    真实解是通过FEM在257个单元的网格上使用 P2 基函数得出的。时间步长选择为 dt=5×10−4，直到 T=π/2。首先，从图12中在时间点 t=π/4 和 π/2 的结果可视化可以看出，PINNs在恢复波型形状和 t=π/2 时峰值的正确直径方面存在困难。较小的网络架构甚至无法在较早的时间点上准确分离图像中的两个峰值。

    虽然当网络架构足够大时，PINNs能够再现PDE解的主要特征，但所展示的示例缺乏包含边缘和不连续性的细节特征。对于FEM，我们观察到粗糙的网格同样无法恢复这些细节。我们还观察到，使用较粗糙的网格时，峰值的对称性无法保持。然而，使用更精细的网格时，FEM的近似效果较好。

    考虑到图13中时间与精度的定量结果，PINNs和FEM在实部精度上的差异变得不那么显著。然而，无论是在求解时间（图11(a)–13(c)）还是评估时间（图11(d)–13(f)）上，FEM都明显优于PINNs，分别快两到三个数量级和一个数量级。将FEM的求解时间考虑在内，我们可以看到PINNs在评估时间上略微优于FEM，且相对误差相似。此外，我们注意到，与FEM相比，PINNs对复值PDE解的虚部的近似精度显著较低。

  

  

**7\. 讨论与结论**

    在分别研究了每个偏微分方程（PDE）之后，我们现在从整体上讨论并得出结论。从求解时间和精度的角度来看，PINNs在我们的研究中无法超越FEM。在我们研究的所有例子中，FEM的求解速度更快，且精度相同或更高。

    我们现在尝试通过简要讨论FEM和PINNs训练的计算复杂度来解释这一结果。当使用多重网格方法时，椭圆方程通常可以在  次浮点运算中求解，其中是离散化中的自由度数量。在本工作中，我们既没有使用几何多重网格方法，也没有使用代数多重网格方法；我们使用的算法实际上比多重网格方法慢，但我们仍然以多重网格方法的理论成本为参考。如果我们忽略GPU架构，我们可以估计PINN中单个梯度评估的复杂度，并给出一个数据点的复杂度为：

其中描述隐藏层的数量。我们根据Higham & Higham（2019）中对反向传播算法的简洁总结推导了这一复杂度，其中我们注意到PINN中的梯度评估实际上需要每个步骤多次反向传播，但这个有限的数量不会增加渐近复杂度。当使用Adam优化器时，单个步骤的复杂度成本正好是（7.1）中给出的成本；一个Adam周期的成本为： 乘以（7.1）中的成本。在L-BFGS中，我们同样在每个步骤中承担一个Adam周期的成本，并且还增加了参数空间大小的线性成本，但这不会改变渐近复杂度。因此，将Adam周期和L-BFGS步骤的数量分别表示为 和，则总成本可以表示为：

  

    反向传播的GPU加速显著降低了这些操作的计算成本。此外，特别是在高维度中，我们通常期望能够选择层数和大小，使得权重矩阵和偏置向量的组合大小显著小于通常FEM近似中的自由度。计算成本的最大贡献可能是在非凸学习问题中所需的大量Adam和L-BFGS步骤。

    在求解PDE之后，PINNs有时在逐点评估相应解时更快：我们仅在3D泊松测试中展示了这一点，其中FEM在求解后的评估速度较慢。因此，当需要在非常精细的网格上评估PDE时，可以考虑求解PINN。尽管在我们的例子中，FEM的求解速度要快得多，以至于继续使用FEM在不同自适应网格上求解PDE可能仍然比求解和评估PINN快得多。此外，我们认为通过使用更合适的插值方法（如Lin & Lee（2005）；Zhang et al.（2021）可以显著加快FEM的评估时间。

    我们特别惊讶的是，PINNs在求解使用小ε的Allen-Cahn方程时遇到了困难。这可能是由于在扩散界面处的接近不连续行为，这在PINNs试图求解的PDE的强形式中可能更为明显。我们预期PINNs会优于FEM：Allen-Cahn方程的解具有非常类似于分类的特征，而神经网络在分类方面表现出色；FEM需要非常精细的网格来解析扩散界面。另一个让我们惊讶的是，PINNs在2D Schrödinger例子中并未优于FEM，其中PDE的解再次包含非常精细的结构区域。在这两种情况下，自适应PINNs方法或变分PINNs可能会有所帮助。后者还将允许具有弱导数的激活函数。

    在本工作中，我们未考虑的一个评估时间方面是使用神经网络求解参数化PDE的可能性，即所谓的算子近似器。例如，参见傅里叶神经算子和DeepONets。虽然FEM在改变参数时需要继续求解PDE，但神经网络可以将参数作为额外输入并在所有参数上进行训练——我们已经看到PINN的评估有时比FEM的求解更快。如果PDE需要足够频繁地求解，它们已被证明可以作为替代品很好地工作。在未来的工作中，这些方法应与参数化PDE的经典方法（如简化基或低秩张量方法进行比较。同样，必须仔细考虑构建或训练参数化模型的离线阶段的时间。

    PINNs在向高维度过渡时表现良好：从2D和3D泊松方程来看，计算成本没有增加。我们考虑的3D泊松方程是完全各向同性的，这种结构PINN似乎能够轻松利用。基本的FEM方法无法利用这一点。在更复杂的各向异性或甚至规则的空间变化设置中，我们预计FEM的计算成本和速度会相似，但无法对PINNs做出任何预测。这暗示了PINNs在某些高维设置中的效率，在这些设置中，经典技术（如FEM）成本过高。总的来说，PINNs开辟了许多有趣的新研究方向，特别是在用于求解此类高维PDE或将PDE与数据结合时。PINNs的分析既非常具有挑战性，又非常有趣。我们的研究表明，对于某些经典方法适用的PDE类别，PINNs无法超越这些方法。

  

* * *

  

拿走不谢：

**1\. 计算效率与精度**：在低维（1D、2D）线性及非线性PDE（如泊松方程、Allen-Cahn方程、半线性薛定谔方程）求解中，FEM在计算时间和精度上均显著优于PINNs。

**2\. 高维问题潜力**：对于三维泊松方程，PINNs的评估时间优于FEM，但训练时间仍较长，表明其在特定高维场景下可能具备应用潜力。

**3\. 不连续解的限制**：PINNs在处理接近不连续的解（如小ε的Allen-Cahn方程）时表现较差，可能因其基于强形式PDE求解，而FEM通过网格细化更适应此类问题。

**4\. 评估速度优势**：PINNs在训练完成后对新数据的评估速度显著快于FEM的插值计算，但综合求解时间仍不占优。

    总体而言，FEM仍是传统PDE求解的“黄金标准”，而PINNs在特定场景（如高维、参数化问题）和结合数据驱动建模时具备潜力，但需在算法改进与理论支撑上持续突破。

  

  

扫码查看原文链接：

https://doi.org/10.1093/imamat/hxae011

![](https://mmbiz.qpic.cn/mmbiz_png/kN3GHHXTAGwfSnvx7ibeicQUugIjmrOa8hJN2padib51Bth3YZnsrqVeTibWMNRHDqlfu4KHnSkMOicWJ4RoKxDKo5A/640?wx_fmt=png&from=appmsg)

  

  

关注公众号了解更多资讯：

  

  

查看PINN的往期精彩推送：

1. [布朗大学 Em Karniadakis院士团队：比较DeepSeek与ChatGPT数值计算和机器学习任务](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484833&idx=1&sn=d9a29d840e5f4185731d7e74d49effa1&scene=21#wechat_redirect)

2. [完美结合！【人工智能+物理模型】——PINN物理信息神经网络！！!](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484798&idx=1&sn=56aea6ca44228179978ca55b3eb3d69b&scene=21#wechat_redirect)

3. [物理编码有限元网络快速解PINN非均质应力集中问题](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484794&idx=1&sn=ab42677704039501574f271963a63019&scene=21#wechat_redirect)

4. [DeepSeek和GPT无需编程用PINN解瞬态问题](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484758&idx=1&sn=12282e0708a58a301ba0bfec9a59d661&scene=21#wechat_redirect)

5. [求解正向/逆向偏微分方程的强大武器--PINN(含基础算例和代码复现)](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484726&idx=1&sn=eeb99d268124829cefc9a301d28c723b&scene=21#wechat_redirect)

6. [Nature综述 | 物理信息神经网络 (PINN)【5千引用】](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484683&idx=1&sn=da9179cb6009e525da3d99695d9d20b9&scene=21#wechat_redirect)