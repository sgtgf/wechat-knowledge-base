# Anapole（无辐射偶极子）和BIC（连续域束缚态）


> 原文地址: [https://mp.weixin.qq.com/s/SrgVeldyGa4gHQV2fF9xBQ](https://mp.weixin.qq.com/s/SrgVeldyGa4gHQV2fF9xBQ)

  

  

Anapole（无辐射偶极子）和BIC（连续域束缚态）是近年来备受关注的非辐射电磁模式。Anapole通过环形偶极子（Toroidal Dipole, T）与电偶极子（Electric Dipole, P）的相位相消干涉实现远场辐射抑制，同时增强近场，适用于隐身、激光和谐波生成等领域。BIC则是一种理论上无限品质因数（Q因子）的模式，但需通过对称性破缺转化为可观测的准BIC（q-BIC）。然而传统超材料通常仅支持单一非辐射态（如单个anapole），且调谐能力有限，限制了多功能器件的设计。

**目录  
**

  

  

-   Anapole和BIC
    
-   从 anapole 到双 anapole 的切换
    
-   参考资料
    

  

  

  

**\*  
**  

As shown below👇

**\*Anapole和BIC**

#Anapole是一种特殊的非辐射电磁模式，由电偶极子（Electric Dipole, P）和环形偶极子（Toroidal Dipole, T）的干涉产生。当两者振幅相等、相位相反时（满足P=−ikT，k为波数），远场辐射完全相消，但近场显著增强。

  

物理机制：

电偶极子（P）：电荷分离产生的振荡偶极矩（如金属纳米颗粒的等离子体共振）。

环形偶极子（T）：闭合环路上的电流形成环形磁矩，其磁场分布类似“磁涡旋”（如金属环中的反向电流）。

干涉效应：P和T在远场的辐射场相位差为π，导致辐射抵消，但近场因相干叠加而增强。

  

特性：

远场抑制：无辐射损耗，能量局域在结构附近。

近场增强：适用于增强光与物质相互作用（如非线性光学、传感）。

典型结构：对称性高的介质或金属纳米结构（如硅盘、哑铃形超表面）。

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Anapole（无辐射偶极子）和BIC（连续域束缚态）_images\img_000_7e8981f3055a.png)

  

###   

#BIC是一种存在于连续谱中的理想束缚态，其能量无法通过辐射耗散（理论上Q因子无限大）。实际中需通过对称性破缺转化为可观测的准BIC（q-BIC）。

  

分类：

对称保护型BIC：依赖结构对称性（如C₄对称性），对称性破缺时退化为q-BIC。

偶然型BIC：由参数（如入射角）偶然匹配产生，与对称性无关。

  

物理机制：

模式解耦：BIC模式与自由空间波正交，无法耦合到远场。

对称性破缺：引入不对称参数（如位移、尺寸变化）使BIC“泄露”为q-BIC，表现为窄带Fano共振或电磁诱导透明（EIT）。

  

特性：

超高Q值：q-BIC的Q因子可达 10^3 ∼10^5 。

强场局域：光场高度集中在结构内，增强光-物质相互作用。

可调谐性：通过几何参数或外部激励（如电场、光泵浦）动态调控。

  

  

  

**\*从 anapole 到双 anapole 的切换**

金属穿孔超材料结构（正交方形哑铃状镂空金板），可以通过结构对称性破缺方法实现非辐射态的灵活调控：

  

结构设计：

初始结构具有C₄对称性（对TE/TM偏振无差异），通过调整哑铃槽的偏移距离（d）或镂空方形尺寸，引入不对称参数（α=d/m），打破对称性。

  

模式转换：

当α=0（对称结构）：仅存在一个anapole模式（0.233 THz）。

当α≠0：对称性破缺将BIC退化为q-BIC，并在特定条件下（如α≥0.1）表现为第二个anapole模式（anapole₂），形成双anapole共存。

偏振调控：TE偏振下保持anapole₁，TM偏振下可切换为双anapole（anapole₁ + anapole₂）。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Anapole（无辐射偶极子）和BIC（连续域束缚态）_images\img_001_5b6894afbc3d.png)

  

  

  

**参考文献**

  

  

\[1\] Y. Sun et al., “Tunable metamaterial with quantitatively switchable anapole modes via quasi-BIC using two methods,” Applied Physics Letters, vol. 126, no. 20, p. 201701, May 2025, doi: 10.1063/5.0252489.

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Anapole（无辐射偶极子）和BIC（连续域束缚态）_images\img_002_263f0379c386.gif)