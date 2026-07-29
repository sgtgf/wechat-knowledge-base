# 文章精选 I 中山大学卢芋廷等：高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿

原创 CES TEMS编辑部 CES电机与系统学报 2025-01-27 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/LNRFXgF6LtfBxorK1OYq8Q](https://mp.weixin.qq.com/s/LNRFXgF6LtfBxorK1OYq8Q)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_000_4fecbf19a39d.gif)

  

****Core Loss Effect Modeling and Compensation for Improved MTPA Control of PMSM Drive under High-Speed Conditions****

Yuting Lu1; Beichen Ding1; Kaide Huang2; Guodong Feng1

1. Sun Vat-sen University, Shenzhen, China

2. Foshan University, Foshan, China

**■**[在线‍阅读](https://ieeexplore.ieee.org/document/10818786)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10818786)

[](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10488429)

Y. Lu, B. Ding, K. Huang and G. Feng, "Core Loss Effect Modeling and Compensation for Improved MTPA Control of PMSM Drive under High-Speed Conditions," in CES Transactions on Electrical Machines and Systems, vol. 8, no. 4, pp. 436-446, December 2024, doi: 10.30941/CESTEMS.2024.00047.

**摘 要**

  

  

对于永磁同步电机（PMSM），准确的电机模型对高性能的最大转矩每安培（MTPA）控制至关重要。然而，随着电机速度的提高，非线性因素如铁损效应会影响电机模型的准确性，从而影响在线MTPA控制的性能。本文首先通过建模、仿真和实验研究了基于模型的MTPA控制在不同电机速度下的性能，结果表明，由于电机非线性的影响，特别是在高速条件下，MTPA控制的精度显著降低。因此，本文提出了一种基于多项式拟合的有效非线性补偿模型，用于建模和补偿电机速度增加时的MTPA误差。该补偿模型综合考虑了铁损和磁饱和效应，是一个关于速度和定子电流的非线性多项式。为了获得拟合数据，提出了一种导数建模方法来计算不同速度下的实际和检测到的MTPA角度，其中扭矩与电流比的导数模型被拟合，并通过将导数模型设置为零来获得MTPA角度。所提出的补偿模型计算效率高且容易使用于MTPA控制，因为它计算的补偿项可以直接与其他基于模型的方法组合。通过实验和测试电机的对比，验证了该模型的性能改进。   

  

**Abstract**

  

  

For permanent magnet synchronous machines (PMSMs), accurate machine model is critical for high performance maximum torque per ampere (MTPA) control. However, as motor speed increases, the nonlinearity such as core loss effect will affect the accuracy of machine model and thus the performance of online MTPA control. This paper firstly investigates the performance of the model based MTPA control under different motor speeds through modeling, simulation and experiments, which indicates that the accuracy of MTPA control is greatly reduced especially under high-speeds due to machine nonlinearity. Hence, this paper proposes an efficient nonlinearity compensation model based on polynomial fitting to model and compensate the MTPA error as motor speed increases. Considering both core loss and magnetic saturation effects, the compensation model is a nonlinear polynomial of speed and stator current. To obtain the fitting data, a derivative modeling method is proposed to compute the actual and detected MTPA angles under different speeds, in which the derivative model of torque to current ratio is fitted and the MTPA angle is obtained by setting the derivative model to zero. The proposed compensation model is both computation effective and easy to use for MTPA control, as it computes the compensation term that can be directly combined to other model-based methods. The proposed model is evaluated with experiments and comparisons on a test motor to show the performance improvement.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_001_da95bbff2851.gif)

  

**作者信息**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_002_00b494bfd65f.png)

**卢芋廷（IEEE学生会员）**，他于2023年获得中国深圳中山大学工程学学士学位。他目前正在中国中山大学智能系统工程学院攻读控制科学与工程硕士学位。他的研究兴趣包括电机的建模、优化和控制。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_003_1fa9687314c7.png)

**丁北辰（IEEE会员）**，他于2019年获得英国巴斯大学机械工程博士学位。他目前是中国中山大学先进制造学院的副教授。他是中国机械工程学会智能流体动力控制的成员。他目前的研究兴趣包括智能机器系统的驱动和运动控制、机器人辅助加工和电驱动器的动态建模。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_004_3129ffc82869.png)

**黄开德（IEEE会员）** ，他分别于2011年和2016年获得中国广州中山大学学士学位和博士学位。2017年至2018年，他在中国科学院广州计算机网络信息中心担任助理总工程师。目前，他是中国佛山大学数学与大数据学院的副教授。他的研究兴趣包括人工智能算法和电机优化控制。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_005_f75bbcc09041.png)

**冯国栋（IEEE高级会员）** ，他分别于2010年和2015年获得中国广州中山大学工程学学士和博士学位。2015年至2019年，他在加拿大温莎大学担任博士后研究员。目前，他是中国中山大学智能系统工程学院的副教授。他的研究兴趣包括先进的信号处理、优化以及电机和驱动器。冯博士是《IEEE Transactions on Industrial Electronics》的副主编。

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被ESCI、EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_006_654c2fde68d8.jpg)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_007_b8e655dc1030.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_008_7aacd76fe2de.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_009_b52600b73ce4.jpg)

学会官方微信

电工技术学报

CES电气

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_010_1b04838d13f1.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_011_b170ae512517.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_012_644d85f1cc17.png)

学会官方B站

CES TEMS

今日头条号

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_013_0209dc0f6451.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_014_1b8cfb18233b.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I_中山大学卢芋廷等_高速条件下改进MTPA控制的永磁同步电机磁芯损耗效应建模与补偿_images\img_015_c28b250481e7.jpg)

学会科普微信

新浪微博

抖音号