# 优先发表 | 两篇关于发电机及PMV电机优化的文章

原创 CES TEMS编辑部 CES电机与系统学报 2024-03-01 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/qmyhSGBl1HpfmMgYY7L6WA](https://mp.weixin.qq.com/s/qmyhSGBl1HpfmMgYY7L6WA)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_000_dc12c2b0b13d.gif)

  

1

**Optimization of generator based on Gaussian process regression model with conditional likelihood lower bound search**  

**基于条件似然下界搜索的高斯过程回归模型发电机优化**

Xiao Liu; Pingting Lin; Fan Bu; Shaoling Zhuang; Shoudao Huang

X. Liu, P. Lin, F. Bu, S. Zhuang and S. Huang, "Optimization of generator based on Gaussian process regression model with conditional likelihood lower bound search," in CES Transactions on Electrical Machines and Systems, doi: 10.30941/CESTEMS.2024.00001.

**Abstract—**The noise that comes from finite element simulation often causes the model to fall into the local optimal solution and over fitting during optimization of generator. Thus, this paper proposes a Gaussian Process Regression (GPR) model based on Conditional Likelihood Lower Bound Search (CLLBS) to optimize the design of the generator, which can filter the noise in the data and search for global optimization by combining the Conditional Likelihood Lower Bound Search method. Taking the efficiency optimization of 15 kW Permanent Magnet Synchronous Motor as an example. Firstly, this method uses the elementary effect analysis to choose the sensitive variables, combining the evolutionary algorithm to design the super Latin cube sampling plan; Then the generator-converter system is simulated by establishing a co-simulation platform to obtain data. A Gaussian process regression model combing the method of the conditional likelihood lower bound search is established, which combined the chi-square test to optimize the accuracy of the model globally. Secondly, after the model reaches the accuracy, the Pareto frontier is obtained through the NSGA-II algorithm by considering the maximum output torque as a constraint. Last, the constrained optimization is transformed into an unconstrained optimizing problem by introducing maximum constrained improvement expectation (CEI) optimization method based on the re-interpolation model, which cross-validated the optimization results of the Gaussian process regression model. The above method increase the efficiency of generator by 0.76% and 0.5% respectively; And this method can be used for rapid modeling and multi-objective optimization of generator systems.

  

**摘要—**在发电机优化过程中，有限元仿真过程中产生的噪声常常导致模型陷入局部最优解和过拟合。为此，本文提出了一种基于条件似然下界搜索(CLLBS)的高斯过程回归(GPR)模型来优化发电机的设计，该模型能够滤除数据中的噪声，并结合条件似然下界搜索方法进行全局优化。以15千瓦永磁同步电机的效率优化为例。该方法首先利用初等效应分析选取敏感变量，结合进化算法设计超拉丁立方抽样方案；然后通过建立联合仿真平台对发-换流系统进行仿真，获取数据。建立了基于条件似然下界搜索方法的高斯过程回归模型，并结合卡方检验对模型精度进行全局优化。其次，在模型达到精度后，以最大输出转矩为约束条件，通过NSGA-II算法求出Pareto前沿。最后，通过引入基于再插值模型的最大约束改进期望(CEI)优化方法，将约束优化问题转化为无约束优化问题，并与高斯过程回归模型的优化结果进行了交叉验证。上述方法使发电机效率分别提高0.76%和0.5%；该方法可用于发电机系统的快速建模和多目标优化。 

  

■[在线发表](https://ieeexplore.ieee.org/document/10452307/)  

  

  

2

**Airgap-harmonic-oriented partitioned design method of PMV motor with improved torque performances**  

**PMV电机气隙谐波分区设计方法用于提升转矩性能**

Zhaopeng Wu; Li Quan; Zixuan Xiang; Deyang Fan; Tengguang Wang; Xiaoyong Zhu

Z. Wu, L. Quan, Z. Xiang, D. Fan, T. Wang and X. Zhu, "Airgap-harmonic-oriented partitioned design method of PMV motor with improved torque performances," in CES Transactions on Electrical Machines and Systems, doi: 10.30941/CESTEMS.2024.00002.

**Abstract—**Here, we introduce a partitioned design method that is oriented toward airgap harmonic for permanent magnet vernier (PMV) motors. The method proposes the utilization of airgap flux harmonics as an effective bridge between the torque design region and the torque performances. To illustrate the efficacy of this method, a partitioned design PMV motor is presented and compared with the initial design. Firstly, the torque design region of the rotor is artfully divided into the torque enhancement region and ripple reduction region. Meanwhile, the main harmonics that generate output torque are chosen and enhanced, optimization. Moreover, the harmonics that generate torque ripple are selected and reduced based on torque harmonics optimization. Finally, the functions of the partitioned PMV motor torque are assessed based on the finite element method. By the purposeful design of these two regions, the output torque is strengthened while torque ripple is inhibited effectively, verifying the effectiveness and reasonability of the proposed design method.

  

**摘要—**本文介绍了一种针对永磁游标电机气隙谐波的分区设计方法。该方法提出利用气隙磁通谐波作为转矩设计区域和转矩性能之间的有效桥梁。为了说明这种方法的有效性，提出了一种分区设计的PMV电机，并与初始设计进行了比较。首先，将转子的转矩设计区域巧妙地划分为转矩增强区域和纹波减小区域。同时，对产生输出转矩的主要谐波进行了选择和增强、优化。此外，基于转矩谐波优化来选择和减少产生转矩纹波的谐波。最后，基于有限元法对PMV电机分区转矩的函数进行了评估。通过对这两个区域进行有针对性的设计，在有效抑制转矩脉动的同时，增强了输出转矩，验证了所提设计方法的有效性和合理性。

  

■[在线发表](https://ieeexplore.ieee.org/document/10452308/)

  

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_001_654c2fde68d8.jpg)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_002_b8e655dc1030.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_003_7aacd76fe2de.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_004_b52600b73ce4.jpg)

学会官方微信

电工技术学报

CES电气

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_005_1b04838d13f1.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_006_b170ae512517.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_007_644d85f1cc17.png)

学会官方B站

CES TEMS

今日头条号

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_008_0209dc0f6451.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_009_1b8cfb18233b.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\优先发表___两篇关于发电机及PMV电机优化的文章_images\img_010_c28b250481e7.jpg)

学会科普微信

新浪微博

抖音号