# 稀缺的硬核好文！IEEE TAP发表无相位成像新方法，不用测相位，采样省94%！【当家带你读新文】


> 原文地址: [https://mp.weixin.qq.com/s/-Ctq\_d3dlX5QqCSweuhfKg](https://mp.weixin.qq.com/s/-Ctq_d3dlX5QqCSweuhfKg)

# 

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/cKMPJZcQE7icnWf3f3trPnpme7kic4MCaibNa5yodw6MvNQITk9TIOW2gemibgaZI4eOdibDfMKSiclGy7bVGiaWiaibI4A/640?from=appmsg)

# **基于无相位非冗余近场平面-极坐标数据的反射率重建研究**

* * *

## **📋 文章基本信息**

**英文标题：** **Reflectivity Reconstruction from Phaseless, Non-Redundant Near-Field, Plane-Polar Data**

**发表期刊：** IEEE Transactions on Antennas and Propagation

**作者：** Florindo Bevilacqua, Amedeo Capozzoli (Member, IEEE), Claudio Curcio, Francesco D'Agostino (Senior Member, IEEE), Flaminio Ferrara (Member, IEEE), Rocco Guerriero (Member, IEEE), Angelo Liseno, Massimo Migliozzi, J(Yiannis) Vardaxoglou (Life Fellow, IEEE)

**作者单位：**

• 那不勒斯腓特烈二世大学电气与信息技术工程系（DIETI），意大利那不勒斯

• 萨莱诺大学工业工程系（D.I.In），意大利萨莱诺

• 华南理工大学微电子学院，中国广州（兴华学者）

**通讯作者：** Florindo Bevilacqua

**研究方向：** 无相位成像、近场测量、反射率重建、非冗余采样、逆散射问题、雷达成像

**文章引用：**  
Bevilacqua F, Capozzoli A, Curcio C, et al. Reflectivity Reconstruction from Phaseless, Non-Redundant Near-Field, Plane-Polar Data\[J\]. IEEE Transactions on Antennas and Propagation, 2025

**DOI：** 10.1109/TAP.2025.3628967

**基金支持：** 欧盟NextGenerationEU框架下意大利国家恢复与韧性计划（NRRP），"未来电信"伙伴关系项目（PE00000001 - program "RESTART"）

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE7icnWf3f3trPnpme7kic4MCaibY4ict83DgcZYfWB3r1RN34oNdZDYj9qr88X10bV2PLqdFEYYllicCAMQ/640?from=appmsg)

**当家有话说**

近场无相位成像广泛应用于目标识别、医学诊断、雷达成像、电磁兼容和安全检测，但相位缺失导致逆问题高度非线性，传统方法需密集采样（λ/8）和双平面测量，实验负担沉重。本研究提出平面-极坐标非冗余采样策略，结合扁球面模型的最优采样插值（OSI），将采样点数压缩至传统方法6%（节省94%），总样本量甚至低于单平面复数据λ/4采样。采用椭球波函数（PSWFs）表征反射率，通过四次目标函数和共轭梯度优化求解二次逆问题。数值仿真和实验验证显示，方法在三种PEC目标和介质十字目标上重建精度与全相位数据一致，插值误差小于-62 dB，30 dB噪声下结构恢复完好，实验时间从24小时压缩至13小时。技术为雷达散射截面估计和定量成像提供基础。

* * *

## **📖 摘要**

基于图像的方法能够从近场测量估计目标的反射率。本文提出一种从纯幅度数据重建平面目标反射率的新方法，采用单站非冗余近场数据和平面-极坐标扫描策略。无相位成像问题被视为二次逆问题，需要在两个不同扫描面上采集两组独立的散射场幅度测量。推导了近场数据幅度平方的非冗余采样表示，相比传统保守的λ/8无相位测量，实现了约94%的近场采样点大幅减少。与使用复数数据（即幅度和相位）进行重建的情况相比，精度未见损失。值得注意的是，总样本数甚至低于在单个表面上执行复数标准近场程序所需的样本数。关于散射体的唯一可用先验信息是包围盒的尺寸，这通过反射率轮廓的有效表示来考虑，从而提高了无相位技术的准确性和可靠性。给出了评估该方法有效性的数值和实验结果。

**研究背景：**

无相位逆技术已广泛应用于目标识别、医学成像、微波成像、电磁兼容、合成孔径雷达（SAR）、毫米波/亚毫米波/太赫兹成像、防御安全扫描仪、光学衍射断层扫描、光学纳米成像和X射线探测等众多领域。无相位成像要求解决逆问题以恢复缺失的相位信息，由于其非线性特性，需要适当处理以确保可靠性和准确性。此外，通常需要额外数据（例如附加扫描平面）来补偿缺失的相位信息，这延长了扫描时间并增加了处理负担。本文提出一种从无相位近场数据获得目标反射率轮廓定性重建的新方法，结合两项创新：第一项关于数据采集，使用散射场幅度平方的有效表示；第二项关于准确性和可靠性，采用问题未知量的适当表示。

* * *

## **⚡ 现有研究问题与本文解决方案**

**技术维度**

**传统无相位方法**

**本文方法**

**采样策略**

直角坐标λ/8密集均匀采样

平面-极坐标非冗余采样

**采样点数（双平面）**

约321,602点（示例）

18,485-22,676点（**节省94%**）

**与单平面复数据对比**

双平面幅度>单平面复相位

双平面幅度<单平面复相位（40,401点）

**插值方法**

传统Nyquist采样

OSI（最优采样插值）幅度平方重建

**插值精度**

\-

RMSE < -62 dB

**反射率表示**

像素/网格直接求解

PSWFs（椭球波函数）谱展开

**逆问题类型**

非线性相位恢复+线性反演

直接二次逆问题优化

**优化算法**

迭代Fourier变换/Wirtinger Flow

共轭梯度+四次多项式线搜索

**先验信息利用**

有限或需精确目标模型

仅需包围盒尺寸

**噪声鲁棒性**

一般

30-40 dB SNR下结构完整恢复

**计算加速**

FFT正演

FFT正演+并行梯度计算

**实验时间**

约24小时（示例）

约13小时（**节省46%**）

**重建精度**

依赖相位恢复质量

与全相位数据一致

* * *

## **🔍 研究内容详解**

### **1\. 正问题数学建模**

**散射场模型（单站配置）：**

![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2P3OUaBGicGWupKaPTPlIM2cZfr4GpsZW1GGdqFv95ocOxOl0oiaPBiblSQ/640?from=appmsg)

考虑平面目标位于平面，采用方向电偶极子激励。观测点与目标表面点之间的距离为：

散射场的开路电压近似为：

其中为目标反射率，为波数。

**Weyl积分展开：**

利用Weyl表示将格林函数展开为平面波谱：

其中：

**Fourier变换正演算子：**

最终正问题可表示为Fourier域映射：

### **2\. 平面-极坐标非冗余采样理论**

**扁球面模型（Oblate Spheroidal Model）：**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PjRGfYumu7MzXah0RMAnhNibia92auVX7nce7n0X2uDxlr1INz31k0Onw/640?from=appmsg)**

将目标和源等效为扁球体，主半轴，副半轴，焦距，偏心率：

**极坐标参数化：**

径向坐标定义为：

其中为第二类椭圆积分，。

**空间带宽参数：**

径向带宽：

环向带宽：

**OSI插值公式：**

幅度平方数据的二维OSI表示：

其中为OSI核函数，、为径向和环向采样参数。

**采样点数对比（以目标A为例）：**

**采样方案**

**平面1点数**

**平面2点数**

**总点数**

**节省比例**

**传统λ/8直角**

160,801

160,801

321,602

\-

**本文极坐标**

9,471

9,014

18,485

**94.3%**

**单平面复数λ/4**

40,401

\-

40,401

参考基准

### **3\. 反射率的PSWFs谱表示**

**椭球波函数展开：**

反射率表示为二维PSWFs（Prolate Spheroidal Wave Functions）的线性组合：

其中：

• 为复数展开系数（优化变量）

• 为一维PSWF基函数

• 、为带宽参数，由目标包围盒确定

• 、为展开项数

**PSWFs特性：**

• 在有限区间上最优集中

• 形成正交完备基

• 自然引入目标支撑域先验信息

• 减少病态性，提高反演稳定性

### **4\. 无相位二次逆问题**

**数据方程：**

两个扫描面上的幅度平方数据：

其中包含天线匹配等实验因素。

**四次目标函数：**

归一化最小二乘目标：

其中为测量数据，为第个扫描面。

**梯度计算：**

对每个系数的梯度：

利用Fourier变换和内积高效计算（详见正文式27-41）。

### **5\. 优化算法**

**迭代流程：**

1.  **初始化**：，设置初始PSWFs项数
    
2.  **共轭梯度方向**：采用Polak-Ribière公式计算搜索方向
    
3.  **四次多项式线搜索**：  
    在方向上最小化：求解三次导数方程：
    
4.  **参数更新**：
    
5.  **谱扩展**：逐步增加、
    
6.  **噪声加权精化**：最终阶段采用加权目标：
    
7.  **收敛判据**：目标函数变化小于阈值或达到最大迭代数
    

* * *

## **📊 实验结果分析**

### **1\. 数值仿真验证**

**仿真配置：**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PuDqibMmfedw7rx6qXLwqUIUgq4neEVhxPicEEsicxAE1ym62SrYbW2mTw/640?from=appmsg)**

**参数**

**数值**

**仿真软件**

Altair FEKO（矩量法MoM）

**工作频率**

示例频段（λ定义）

**目标类型**

PEC平面：A（剪切圆孔）、B（剪刀形）、C（多孔隙）

**包围盒尺寸**

A: 6λ×6λ; B: 8λ×5λ; C: 类似

**扫描面高度**

, 

**扫描半径**

**插值网格**

50λ×50λ，步长λ/8

**采样对比：**

**目标**

**传统λ/8双平面**

**本文极坐标**

**节省比例**

**A**

321,602

18,485

94.3%

**B**

321,602

22,676

92.9%

**C**

321,602

~20,000

~93.8%

**OSI插值精度（图5-7）：**

**目标**

**平面1 RMSE**

**平面2 RMSE**

**噪声水平**

**A**

< -62 dB

< -62 dB

无噪声

**A**

< -55 dB

< -55 dB

SNR = 40 dB

**A**

< -50 dB

< -50 dB

SNR = 30 dB

**B/C**

同类精度

同类精度

同上

**反射率重建质量（图8-14）：**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PRUpRYN7iciaZniaW6Wtt9PseSHczgRZBSYQ5iaSAYibhLKV0vzrFOSYaib4A/640?from=appmsg)**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PO66bUg1NHp58uGbX472bO1DoN9e0yAsRDCE0ibFPQDCPQpvvdkHwSOg/640?from=appmsg)**

       • **目标A（剪切圆孔）**：

-   -   无相位重建曲线与全相位数据几乎完全重合
        
    -   圆孔边界清晰，尺寸准确（6λ×6λ）
        
    -   30 dB噪声下结构保持完整
        
    
    • **目标B（剪刀形）**：
    
    -   复杂几何形状准确恢复
        
    -   细长部分和尖角清晰可辨
        
    -   40 dB噪声下质量优异
        
    
    • **目标C（多孔隙）**：
    
    -   • 多个孔洞位置和尺寸正确
        
    -   • 20 dB强噪声下仍可识别主要结构
        
    -   • 边缘锐度略有下降但可接受
        
    

**第三平面场验证（图16-17）：**

使用重建的预测平面的场分布：

• 幅度分布与FEKO仿真RMSE < -40 dB

• 相位分布一致性良好

• 证明反演模型的物理正确性

![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PhAuNBTuGiaSZfVJq71UbzjRLUpZk61tagTzspeMIMx09ofribibDepb9w/640?from=appmsg)

### **2\. 实验测量验证**

**实验配置：**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PGclQoXP072WMZic1oKaCOFFeJlvHiaFQ4e5ce5lqEoCzG9UBZSrhQicJQ/640?from=appmsg)**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2PlTiccPaMYcXTE0eZ2c0tM4jgHo6Nr8EcdhLkNibAwvMuncmPfwA2bNLA/640?from=appmsg)**

**参数**

**数值**

**测试场地**

那不勒斯大学微波暗室（8m×5m×3.5m）

**目标**

十字形PLA介质（3D打印）

**目标参数**

，厚度0.15λ

**外形尺寸**

4.7λ × 4.7λ

**工作频率**

9.4 GHz

**扫描平台**

MI Technologies平面扫描系统

**天线类型**

反射式近场探头

**扫描面距离**

, 

**采样数据（图18-20）：**

**![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/cKMPJZcQE79ODdbVBsLXibAWJMTtibvO2Phia0tx9rlX0T2uqYxDQJeTTfA5ro0Q2xQ5v5VBVTW3VbNgxgYaGJEcA/640?from=appmsg)**

**方案**

**平面1**

**平面2**

**总计**

**测量时间**

**传统λ/8**

58,081

58,081

116,162

~24小时

**本文方法**

6,566

5,327

11,893

~13小时

**节省**

\-

\-

**89.8%**

**46%**

**OSI插值验证（图21）：**

• 极坐标稀疏采样插值到直角网格

• 与高密度直接测量对比，差异<3%

• 插值平滑无振荡，边缘保真

**反射率重建结果（图22-24）：**

• **重建轮廓**：十字形状清晰，臂宽和长度与实际一致

• **介质参数**：相对介电常数反演值约2.3-2.7，与PLA材料吻合

• **与复数据对比**：本文无相位结果与λ/4直角复数采样结果质量一致

• **系统误差吸收**：天线耦合、环境反射等误差被自动纳入优化模型

**实验结论：**

1.  非冗余采样策略在真实环境有效
    
2.  时间节省显著（13h vs 24h）
    
3.   重建精度与传统方法无明显差异
    
4.   方法对实验不完美性鲁棒
    

* * *

## **🚀 未来研究方向**

**研究方向**

**关键内容**

**预期突破**

**定量特征提取**

开发算法提取目标尺寸、材料参数等定量信息

从定性到定量成像

**三维目标扩展**

推广至非平面、体积散射体

完整3D重建

**不同扫描几何**

圆柱、球面等其他扫描系统

更灵活测量配置

**先验信息融合**

引入稀疏性、光滑性等约束

进一步压缩采样90%+

**RCS估计**

基于反射率计算雷达散射截面

目标特征定量评估

**多频融合**

联合多频数据提升分辨率

宽带成像

**实时处理**

GPU加速、在线优化算法

准实时反演

**机器学习辅助**

深度学习初值、正则化参数自适应

智能化反演

**极化信息利用**

全极化测量增强信息量

材料识别

  

* * *

## **💬 当家评价**

这项研究为近场无相位成像提供了系统化的采样与反演解决方案，核心突破在于将"稀疏采样"与"无相位反演"两大挑战同时攻克。传统无相位方法因缺失相位需双平面密集测量（λ/8），导致样本量超三十万点，实验周期长达数十小时。本文通过扁球面建模推导平面-极坐标非冗余采样理论，将样本压缩至传统方法百分之六，甚至低于单平面全相位数据所需量，从根本上颠覆了"无相位必然采样密集"的认知。

技术创新体现在"采样-插值-反演"三位一体架构。非冗余采样基于目标包络扁球模型确定空间带宽，极坐标布点适应天线旋转机械特性；仅幅度OSI插值首次将带限信号理论扩展至幅度平方数据，插值误差达负六十二分贝；椭球波函数谱表示自然引入目标支撑域先验，大幅降低逆问题病态性。三者协同构成完整技术链，任一环节缺失都无法达成性能。

数学建模的严谨性保证了方法可靠性。正问题通过Weyl积分将散射场表示为Fourier域紧凑形式，FFT加速实现O(N log N)复杂度；逆问题采用四次目标函数直接优化反射率参数，共轭梯度法配合四次多项式线搜索确保收敛；噪声加权策略在终迭代阶段引入，增强鲁棒性。梯度推导利用Fourier变换可交换性和内积线性，避免显式Jacobian计算，实现高效优化。

实验验证的完整性增强了工作的说服力。数值仿真覆盖三类PEC复杂几何（圆孔、剪刀、多孔），不同噪声水平（20-40 dB）下结构恢复完整；实验测量采用十字介质目标，材料参数反演值（约2.3-2.7）与PLA介电常数（2.5）吻合；第三平面场预测与仿真RMSE小于负四十分贝，证明模型物理正确性；时间节省从二十四小时压缩至十三小时，直接降低实验成本。

* * *

**关注无线谷小当家，获取更多6G精品文章解读！篇篇精选**

**如果内容有帮助到你，请给小当家一个赞，谢谢！**

**如果您有理论-仿真-实验 验证的优质好文，可以私信分享给小当家~**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/cKMPJZcQE7icnWf3f3trPnpme7kic4MCaibNa5yodw6MvNQITk9TIOW2gemibgaZI4eOdibDfMKSiclGy7bVGiaWiaibI4A/640?from=appmsg)

  

* * *

本文为学术论文解读，仅供学习交流使用。如需了解更多技术细节，请参考原文献。