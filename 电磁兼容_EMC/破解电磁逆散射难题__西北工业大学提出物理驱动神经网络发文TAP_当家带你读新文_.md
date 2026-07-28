# 破解电磁逆散射难题! 西北工业大学提出物理驱动神经网络发文TAP【当家带你读新文】


> 原文地址: [https://mp.weixin.qq.com/s/jfXcfYvs21qdAijIAIxovQ](https://mp.weixin.qq.com/s/jfXcfYvs21qdAijIAIxovQ)

# 

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfmiaiaIsqX2UTS5uJGW1uh9XuiaeYPmJDVpX1wP6ibIgw2vPe1mmPKJKrcQ/640?from=appmsg)

#  **物理驱动神经网络求解电磁逆散射问题**

****文章核心创新**：本文提出了一种物理驱动神经网络(PDNN)用于电磁逆散射成像，无需离线训练数据集，仅依靠实测散射场和物理定律指导网络参数优化。创新性地将物理约束直接嵌入损失函数，包括散射场数据一致性、介电常数下界约束和全变差正则化项。引入基于U-Net和形态学操作的散射体子区域自动识别机制，将计算域缩减50-80%，显著提升计算效率。该方法彻底解决了传统数据驱动神经网络泛化能力有限的核心问题，在数值模拟和实验验证中均表现出优异的重建精度和稳定性，相对误差控制在2-8%范围内，全面超越经典BP、DBIM、SOM等方法。**

# ![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfYyUUDt0LibY24P0opyqhIVhADlQvZCzeXSB5SCOSN5sUHNJu7SYibkBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfuBXyzJAwzCGs1kdWyPzAX0DiaPDdrCVkV07L7slcsYIBGXBmyacOQFQ/640?wx_fmt=png&from=appmsg)

## **📋 文章基本信息**

**英文标题**：Physics-Driven Neural Network for Solving Electromagnetic Inverse Scattering Problems

**发表期刊**：IEEE Transactions on Antennas and Propagation, 2025

**DOI**：10.1109/TAP.2025.3637513

**作者**：Yutong Du, Zicheng Liu, Bazargul Matkerim, Changyou Li, Yali Zong, Bo Qi, Jingwei Kou

**作者单位**：

• Yutong Du, Zicheng Liu, Changyou Li, Yali Zong, Bo Qi：西北工业大学电子信息学院（西安710072）

• Bazargul Matkerim：哈萨克斯坦Al-Farabi国立大学计算机科学系（阿拉木图050040）

• Jingwei Kou：中科院西安光机所先进光学仪器研究部（西安710119）

**研究方向**：电磁逆散射成像、神经网络、介电散射体、物理驱动计算

**文章引用**：Y. Du et al., "Physics-Driven Neural Network for Solving Electromagnetic Inverse Scattering Problems," IEEE Trans. Antennas Propag., 2025, doi: 10.1109/TAP.2025.3637513.

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfzTrIicBcgS4edGO46jtlfBHC2h8aAWJwWrw2O4BLK3zHzeprOBrGEyQ/640?from=appmsg)

_**当家有话说**_

电磁逆散射成像技术在现代科学技术中发挥着重要作用，通过重建目标的几何特征和电磁特性，广泛应用于复合材料无损检测、机场安检违禁品检测、地下目标探测等关键领域。然而，逆散射问题固有的唯一性、稳定性和非线性挑战使其求解极为困难。

传统的逆散射求解方法可分为迭代和非迭代两大类。非迭代方法如Born近似、反向传播和Rytov近似等，依赖线性化假设，无法充分考虑散射体内部的多次散射效应，仅适用于低对比度目标。迭代方法如Born迭代法、畸变Born迭代法、对比源反演法和子空间优化法等，虽能处理强散射问题，但计算成本高昂，收敛性依赖于初始解选择。

本文提出的物理驱动神经网络(PDNN)方法代表了一种全新的求解范式。与传统数据驱动方法的根本区别在于，PDNN不需要预先收集的训练数据集，其网络参数完全基于当前测量的散射场数据和物理定律进行优化。这种方法将经典迭代算法的物理一致性与神经网络的非线性映射能力相结合，每个成像案例都独立训练网络，从根本上消除了泛化问题。

数值仿真和实验验证表明，PDNN方法在处理方形、圆形、环形、复合形状等各类散射体时均表现出色，重建相对误差控制在2-8%范围内，噪声鲁棒性优异。在Fresnel研究所的实验数据验证中，该方法不仅准确重建了散射体形状，还精确恢复了介电常数数值，全面超越了传统方法的性能。这为电磁逆散射成像技术的实用化应用提供了新的技术路径。

## **🎯 现有研究问题与本文解决方案**

**对比维度**

**传统数据驱动神经网络**

**物理驱动神经网络(PDNN)**

**数据依赖性**

需要大规模离线训练数据集

无需训练数据，基于实测数据训练

**泛化能力**

泛化能力有限，难以处理未见场景

泛化能力强，每案例独立训练

**物理一致性**

缺乏物理约束，可能产生非物理解

显式嵌入物理约束，确保解的物理合理性

**计算效率**

推理快速但需要大量训练时间

训练推理一体化，单案例计算优化

**适用范围**

局限于训练数据覆盖的场景

适用于各类复杂散射体配置

**网络架构**

固定架构，难以适应不同问题

灵活架构，可根据物理问题调整

**损失函数**

主要基于数据拟合误差

多项物理约束复合损失函数

## **🔬 研究内容详解**

### **1\. 电磁逆散射问题建模**

图\[1\]展示了所关注的成像系统配置。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfYyUUDt0LibY24P0opyqhIVhADlQvZCzeXSB5SCOSN5sUHNJu7SYibkBw/640?wx_fmt=png&from=appmsg)

考虑二维逆散射问题，采用横磁(TM)波照射感兴趣域(DOI)，散射体在z方向均匀分布。个发射器轮流照射DOI，感应电流源辐射的散射场由个接收器采集。

**前向和逆向问题的控制方程**：

状态方程：

数据方程：

其中，表示观测位置r处电场的z分量，和分别为入射场和散射场，为背景介质波数，为二维标量格林函数，感应电流密度，为相对介电常数，S表示散射场采集区域。

采用积分算子和分别表示状态方程和数据方程，上述方程可重写为：

逆问题旨在基于测量散射场重建DOI内的分布。采用正则化技术稳定解，目标函数表述为：

### **2\. 物理驱动神经网络架构**

图\[2\]展示了PDNN的网络架构和迭代求解流程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfXNmZV230icdZ4ye9dicr1a0RBps7yo5MAC6B5VYcukT3Ces0uSzJyjhQ/640?wx_fmt=png&from=appmsg)

网络由三层卷积层、三个残差块和两层全连接层构成，卷积层用于特征学习，残差连接有效缓解梯度消失问题，全连接层基于学习特征输出预测的对比度分布。

**网络架构细节**：

• 卷积层：3×3卷积核，LeakyReLU激活函数(负斜率0.01)

• 残差块：采用跳跃连接结构

• 激活函数：ReLU和LeakyReLU

• 输入输出：双通道结构，分别处理对比度的实部和虚部

• 维度配置：M×M×2 → M×M×16 → M×M×32 → M×M×64 → M×M×2

**迭代求解流程**：

1.  初始解设定(可用U-Net预估、全1或全0初始化)
    
2.   PDNN预测当前介电常数分布
    
3.  矩量法(MoM)计算对应散射场
    
4.  损失函数计算
    
5.  Adam优化器更新网络参数
    
6.  判断收敛条件，满足则输出结果
    

### **3\. 复合物理约束损失函数**

PDNN的核心创新在于将物理约束直接嵌入损失函数：

各项定义如下：

**数据一致性项**：

**介电常数下界约束**：

**全变差正则化项**：

其中，量化测量散射场与预测解对应散射场的残差，强制相对介电常数实部不小于1的物理约束，施加平滑性正则化。超参数和平衡各项贡献，通过系统性分析确定最优值：，。

### **4\. 散射体子区域自动识别**

为降低计算复杂度，提出基于U-Net预估和形态学操作的区域识别策略。图\[3\]展示了完整的识别流程。

**区域识别步骤**：

**1\. 阈值分割**：基于重建对比度分布的统计特性，计算前50%数值的均值和标准差，设定阈值()，生成二值图：

2. **闭运算**：连接临近目标，避免目标分离：

3. **膨胀操作**：扩大检测区域，确保完全覆盖：

其中，和分别表示形态学膨胀和腐蚀算子，结构元素S选择为半径r的圆盘。

这种预处理策略将计算网格数量减少50-80%，运行时间从362s降至50-80s，且不影响重建精度。

### **5\. 训练设置与评估指标**

**训练配置**：

• 硬件环境：128 GB RAM，3.2 GHz i9 CPU，NVIDIA GeForce RTX 4090 GPU

• 优化算法：Adam，学习率

• 迭代次数：通常3000次收敛

**评估指标**：  
重建相对介电常数分布与真实值的相对误差：

### **6\. 物理建模的优势分析**

与数据驱动方法相比，PDNN的物理驱动特性带来以下优势：

1.  **无泛化问题**：每个成像案例独立训练，不依赖预设数据分布
    
2.  **物理一致性**：损失函数显式包含物理约束，确保解的合理性
    
3.  **灵活性强**：可适应各种散射体配置和测量条件
    
4.  **计算高效**：通过区域识别大幅减少计算量
    
5.  **稳定性好**：基于物理定律的约束提高解的稳定性
    

## **📊 实验结果分析**

### **1\. 数值仿真设置**

测试基于仿真数据进行，DOI尺寸为0.15m×0.15m，离散为64×64网格。采用36个发射器和36个接收器，均匀分布在半径为20λ的圆周上(λ为对应4 GHz频率的波长)。

**四类代表性散射体**：

• 方形轮廓：边长0.5λ，验证尖角重建能力

• 双圆轮廓：半径0.25λ，中心位于(±4λ, 0)，评估邻近散射体分辨能力

• 环形轮廓：内径0.5λ，外径0.25λ，挑战内边界重建

• Austria轮廓：圆形和环形组合，存在复杂多次散射效应

### **2\. 超参数优化分析**

图\[4\]和图\[5\]展示了损失函数中超参数和对重建精度的影响。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfOx83A1n11tIKPMbiafAvbtTibba4xtlMFibpefs5x6nKv8DALYkiaz05yw/640?wx_fmt=png&from=appmsg)

**超参数的影响**：  
固定，在0-2.5范围变化时，相对误差保持在7%以下，表明方法对不敏感。综合考虑四种轮廓的最小相对误差，选择为最优值。

**超参数的影响**：  
固定，随着增加，相对误差趋于减小直至。TV正则化有效抑制背景伪影，恢复散射体的分段均匀特性。当时性能相对稳定，选择为最优值。

### **3\. 收敛性分析**

图\[6\]展示了四种代表性轮廓在3000次迭代过程中的重建演化。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfHlaTyic14DPjJJpocJLQ75nHIzAHWDEY4j8W77kP2qVzMUaVNtgfTcQ/640?wx_fmt=png&from=appmsg)

当迭代数k=300时，轮廓形状可识别但存在强伪影。随着迭代增加，介电常数实部和虚部均收敛至真实值。

图\[7\]给出了相对误差随迭代次数的变化曲线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfpiawiaqsIt2SR6jDVSEEwfeACAUiaqC9uASREHJeibfpPZYzniaWWexygGg/640?wx_fmt=png&from=appmsg)

当k<1000时相对误差急剧下降，之后趋于收敛。这表明算法具有快速收敛特性。

### **4\. 计算加速效果**

表\[I\]总结了应用区域识别策略前后的网格数量和运行时间对比。测试涵盖四类轮廓组合(数字型、多边形、多圆形、字母型)，每类包含三个代表性样本。

**轮廓类型**

**案例**

**网格数量变化**

**运行时间变化**

数字型

案例1

4096→992

362s→54s

数字型

案例2

4096→1949

362s→85s

数字型

案例3

4096→1467

362s→65s

多边形

案例1

4096→1717

362s→74s

多边形

案例2

4096→777

362s→49s

多边形

案例3

4096→945

362s→51s

网格数量至少减少一半，多数情况下减少超过80%，运行时间相应大幅缩短，且重建精度基本不受影响。

### **5\. 方法对比分析**

图\[8\]和表\[II\]展示了PDNN与经典方法(BP、DBIM、SOM)和数据驱动方法(U-Net)的详细对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfwVUXqYgSZTZcydp432v6zX9I3JcgXJLndiaiajDIKOjeNfkKoQQWPCKQ/640?wx_fmt=png&from=appmsg)

**主要发现**：

**数字型轮廓**：U-Net在几何重建方面表现优异(因训练数据包含同类型样本)，但相对介电常数精度略差。PDNN在实值精度方面更胜一筹，对未知类型目标也表现出色。

**多边形轮廓**：U-Net对大尺寸目标出现中心空洞伪影，PDNN能准确恢复整体结构和细节。

**多圆形轮廓**：U-Net无法准确还原圆形，存在明显边缘失真，PDNN均能准确重建。这揭示了数据驱动模型泛化能力的局限性。

**字母轮廓**：U-Net对类似训练数据的目标表现良好，但泛化到其他类型时容易出错，PDNN展现出优异的泛化能力。

**定量对比**：表\[II\]显示PDNN在各类测试中的相对误差均为最低或接近最低，相对误差范围为1.82%-8.57%，显著优于其他方法。

### **6\. 噪声鲁棒性测试**

图\[11\]展示了不同噪声水平下(SNR = 20/10/5 dB)各方法的性能对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfRJn98DD9rkonruvIuEEKLgxuWqzZknOClVknHV61hrth24ib7QomiaGA/640?wx_fmt=png&from=appmsg)

**关键结果**：

• **SNR = 20 dB**：PDNN几乎无性能损失，重建质量与无噪声情况相当

• **SNR = 10 dB**：PDNN保持良好的形状和数值重建，轻微伪影不影响主体识别

• **SNR = 5 dB**：虽然伪影增加，但PDNN仍能准确识别散射体轮廓

相比之下，DBIM严重低估对比度值，SOM在低SNR下出现边界失真和背景模糊。

### **7\. 复杂散射体验证**

图\[12\]展示了三个具有挑战性的测试案例：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfbeJx8TOfflkNNtriaFBW2cthtoBYfzpf4fAz7FN2cFF3PgNhZOe1OUQ/640?wx_fmt=png&from=appmsg)

• 案例1：Austria轮廓，(有损耗)

• 案例2：龟型轮廓，包含两种不同介电材料

• 案例3：Austria轮廓，包含三种不同介电材料

**性能评估**：

• DBIM能重建均匀Austria轮廓形状，但对分段和龟型轮廓性能严重退化

• SOM在Austria轮廓上有改善，但对龟型轮廓将其重建为六边形，与真实形状差异很大

• PDNN对各类复杂轮廓均表现优异，除边界轻微失真外，实部和虚部重建都十分准确

表\[III\]给出了推理时间对比，PDNN(121-131s)介于DBIM(78-79s)和SOM(158-182s)之间，但重建质量显著优于两者。

### **8\. 稳定性统计分析**

图\[13\]展示了基于100个数字型和多边形样本的稳定性分析箱线图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhficJTR0vkD2D5aYmgcRsibcBjmicicQraBTldwINiaaq9LHbibpDAFVrvCeKA/640?wx_fmt=png&from=appmsg)

**统计结果**：

• DBIM：相对误差中位数和方差均较高，稳定性差

• U-Net：数字型轮廓优于SOM，但存在多个异常值(误差>20%)，泛化能力不足

• SOM：稳定性优于DBIM但仍不如PDNN

• PDNN：误差中位数最小，方差最小，展现最佳的准确性和稳定性

## **⭐ 当家评价**

这篇发表在IEEE天线与传播汇刊上的工作，针对电磁逆散射成像这一经典难题，提出了创新的物理驱动神经网络解决方案，在方法论和实用性方面都具有重要突破意义。

该工作最大的贡献在于彻底改变了神经网络在逆散射问题中的应用范式。传统数据驱动方法需要大量训练数据且泛化能力有限，而PDNN通过将物理定律直接嵌入优化过程，实现了"零样本学习"。这种思路不仅解决了泛化问题，更重要的是保证了解的物理合理性。损失函数的三项式设计精巧：数据一致性项确保与测量的匹配，下界约束项保证物理可实现性，全变差项提供平滑正则化。这种多重物理约束的复合设计体现了深厚的物理洞察力。

总体而言，这是一项在电磁成像领域具有重要理论创新和实用价值的工作，为神经网络在物理问题求解中的应用开辟了新的思路，具有较强的学术影响力和应用潜力。该工作不仅推进了逆散射成像技术的发展，更为物理驱动的人工智能方法学提供了成功范例。

* * *

**关注无线谷小当家，获取更多6G精品文章解读！篇篇精选**

**如果内容有帮助到你，请给小当家一个赞，谢谢！**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/cKMPJZcQE7icyJvicHpZJlvGrdN0SDfQhfmiaiaIsqX2UTS5uJGW1uh9XuiaeYPmJDVpX1wP6ibIgw2vPe1mmPKJKrcQ/640?from=appmsg)

  

* * *

本文为学术论文解读，仅供学习交流使用。如需了解更多技术细节，请参考原文献。

声明：本文使用智能体技术辅助排版