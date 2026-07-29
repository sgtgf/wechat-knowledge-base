# 文章精选 I 基于虚拟位置偏移注入的永磁同步电机永磁体温度估计

原创 CES TEMS编辑部 CES电机与系统学报 2024-05-06 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/xMNXqdsNXtcDgErOD5f2Og](https://mp.weixin.qq.com/s/xMNXqdsNXtcDgErOD5f2Og)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_000_4fecbf19a39d.gif)

  

****Permanent Magnet Temperature Estimation for PMSMs Using Virtual Position-Offset Injection****

Beichen Ding1; Yuting Lu1; Kaide Huang2; Guodong Feng1; Chunyan Lai3

1. Sun Yat-sen University, Shenzhen, China

2. The Fosan University, Foshan, China

3. Concordia University, QC, Canada

**■**[在线阅读](https://ieeexplore.ieee.org/document/10488434)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10488434)

B. Ding, Y. Lu, K. Huang, G. Feng and C. Lai, "Permanent Magnet Temperature Estimation for PMSMs Using Virtual Position-Offset Injection," in CES Transactions on Electrical Machines and Systems, vol. 8, no. 1, pp. 51-60, March 2024, doi: 10.30941/CESTEMS.2024.00008.

**摘 要**

  

  

提出了一种基于虚拟位置偏移注入的永磁同步电机温度估计方法。虚拟位置偏移注射的概念是在数学上把机器模型转换成一个具有位置偏移的虚拟框架。建立了虚拟框架温度估计模型，可以直接从测量数据中计算永磁体温度，具有计算效率高的特点。该估计模型涉及一个组合电感项，可以用较少的测量量简化饱和补偿模型的建立。此外，在估计模型中取消了电阻项和逆变器畸变项，提高了对绕组温升和逆变器畸变的鲁棒性。该方法可以简化温度估计的计算量，减少饱和补偿的内存占用。而现有的基于模型的方法可能会受到电阻和逆变器信息的需要或复杂的饱和补偿的影响。在试验机上进行了各种工况下的实验，验证了所提出的方法。    

  

**Abstract**

  

  

This paper proposes a virtual position-offset injection based permanent magnet temperature estimation approach for permanent magnet synchronous machines (PMSMs). The concept of virtual position-offset injection is mathematically transforming the machine model to a virtual frame with a position-offset. The virtual frame temperature estimation model is derived to calculate the permanent magnet temperature (PMT) directly from the measurements with computation efficiency. The estimation model involves a combined inductance term, which can simplify the establishment of saturation compensation model with less measurements. Moreover, resistance and inverter distorted terms are cancelled in the estimation model, which can improve the robustness to the winding temperature rise and inverter distortion. The proposed approach can achieve simplified computation in temperature estimation and reduced memory usage in saturation compensation. While existing model-based approaches could be affected by either the need of resistance and inverter information or complex saturation compensation. Experiments are conducted on the test machine to verify the proposed approach under various operating conditions.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_001_0158ef159850.gif)

  

**作者信息**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_002_049ae016a483.gif)

**丁北辰**，男，工学博士，中山大学先进制造学院副教授，研究方向为智能机器系统的驱动和运动控制、机器人辅助加工和电气驱动的动态建模，期刊《The International Journal of Extreme Manufacturing》编委。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_003_a483b1a789ca.gif)

**卢芋廷**，男，中山大学智能工程学院硕士研究生，研究方向为电机的建模、优化和控制。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_004_2df5235fec99.gif)

**黄开德**，男，工学博士，佛山大学副教授，研究方向为人工智能算法和电机优化控制。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_005_4f8d4cfb80d8.gif)

**冯国栋**，男，工学博士，中山大学智能工程学院副教授，研究方向为先进的信号处理、优化以及电机和驱动器，《IEEE Transactions on Industrial Electronics》编委。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_006_9322e3b4262f.gif)

**赖春燕**，女，工学博士，康考迪亚大学副教授，研究方向为电机驱动和控制，电力电子，可再生能源，《IEEE Systems Journal》编委。

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_007_654c2fde68d8.jpg)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_008_b8e655dc1030.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_009_7aacd76fe2de.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_010_b52600b73ce4.jpg)

学会官方微信

电工技术学报

CES电气

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_011_1b04838d13f1.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_012_b170ae512517.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_013_644d85f1cc17.png)

学会官方B站

CES TEMS

今日头条号

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_014_0209dc0f6451.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_015_1b8cfb18233b.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_基于虚拟位置偏移注入的永磁同步电机永磁体温度估计_images\img_016_c28b250481e7.jpg)

学会科普微信

新浪微博

抖音号