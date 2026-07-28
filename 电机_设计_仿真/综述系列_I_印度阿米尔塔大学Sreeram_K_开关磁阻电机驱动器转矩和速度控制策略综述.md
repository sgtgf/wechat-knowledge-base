# 综述系列 I 印度阿米尔塔大学Sreeram K：开关磁阻电机驱动器转矩和速度控制策略综述

原创 CES TEMS编辑部 CES电机与系统学报 2025-04-28 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/ckbURXUMarySib26U01nmA](https://mp.weixin.qq.com/s/ckbURXUMarySib26U01nmA)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

**开关磁阻电机驱动器转矩和速度控制策略综述**

Sreeram K1; Preetha P K1; Javier Rodríguez-García2; Carlos Álvarez-Bel2

1. Amrita Vishwa Vidyapeetham, Amritapuri, India

2. Universitat Politécnica de Valéncia, Valencia, Spain

**■**[在线阅读](https://ieeexplore.ieee.org/document/10932740)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10932740)

S. K, P. P K, J. Rodríguez-García and C. Álvarez-Bel, "A Comprehensive Review of Torque and Speed Control Strategies for Switched Reluctance Motor Drives," in CES Transactions on Electrical Machines and Systems, vol. 9, no. 1, pp. 46-75, March 2025, doi: 10.30941/CESTEMS.2025.00006.

**1**

**内容**

开关磁阻电机（SRM）具有坚固耐用、速度范围广、扭矩密度高以及不含稀土等优点，这些优势使其在电动汽车（EV）领域拥有广泛的应用前景。SRM 采用标准铜磁线和低碳钢叠片制造，效率高达 85% 至 95%。尽管 SRM 相较于传统的电机调速驱动器具有诸多优势，但高扭矩脉动和径向变形限制了其在电动汽车中的应用。精确的转子位置对于有效控制 SRM 的速度和扭矩至关重要。本文提供了一份关于 SRM 驱动器在电动汽车应用中的转矩 - 速度控制和脉动抑制技术的综述，涵盖了设计改进和控制方法。对各种方案进行了性能评估，包括运行速度范围、控制复杂性、实际实现、是否需要预存储参数（电流、电感和转矩曲线的查找表）以及电机控制器的内存需求。

**2**

**亮点**

  

鉴于电动汽车驱动系统的进步，对于不同开关磁阻电机控制器在电动汽车中的适用性，人们对其优缺点的对比研究需求日益增加。本文重点回顾了两种转矩脉动抑制方法：控制策略和电机拓扑结构改进。本文对这些技术进行了综述，从其优缺点方面对其进行了分类和分析。本文提出的方法目标和贡献概述如下：

（1）根据技术的优缺点，为实现合适的转矩脉动控制技术所固有的权衡提供有价值的见解。

（2）文章不仅总结了已确立的开关磁阻电机（SRM）控制方法，还对控制策略的最新进展进行了详细的比较评估。重点在于新兴技术，如基于机器学习（ML）和人工智能（AI）的控制、自适应控制等，这些在以往的综述中并未得到充分探讨。

（3）文章通过提供有关硬件限制、成本分析和实际性能的见解，突出了在工业应用（特别是电动汽车）中采用基于 SRM 的控制系统所面临的实际障碍，而这些方面在其他评估中常常被忽视。

（4）最后，该研究回顾了各种控制方法，同时探讨了 SRM 的热管理、声学噪声和容错性，这些都是实际应用中至关重要的方面。这种全面的方法为 SRM 控制难题提供了更广阔的视角，使其有别于那些主要关注控制方法的综述文章。

**3**

**结论**

本文概述了用于降低开关磁阻电机（SRM）转矩脉动的有前景的方法，包括电机设计改进和控制技术。对 SRM 电机进行详细建模，并结合实时非理想因素，有利于制造商实现精确实施和降低成本。此外，诸如模型预测控制（MPC）、滑模控制（SMC）和智能控制等新兴技术通过精确预测和补偿 SRM 复杂的非线性磁特性来提高性能。这些解决方案可大幅降低转矩脉动，并提供更平稳的运行。人工智能（AI）和机器学习（ML）技术可用于通过实时修改控制参数来动态增强转矩控制。这种方法即使在负载和电机状态波动的情况下也具有适应性和鲁棒性，从而提高效率。

**4**

**团队介绍**

本研究论文是西班牙瓦伦西亚理工大学（UPV）能源工程研究所在伊拉斯谟+计划 KA107 资助下合作开展研究工作的成果。研究合作者是能源工程研究所的 Carlos Alvarez Bel 博士和 Javier Rodriguez Garcia 博士，以及印度喀拉拉邦阿姆里塔普里工程学院电气与电子工程系的 Preetha P K 博士。项目名称为 “开发用于电动汽车的改进型 SRM 牵引驱动拓扑结构，并进行车载电池充电”。该项目还获得了 Amrita Vishwa Vidyapeetham 提供的 15,40,000 印度卢比的 AMRITA 种子基金资助（文件编号：ASG2022188）（进行中）。

**5**

**作者介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibe5ZeGEdND9E1ShoPRsm3c4LNzUZreSxVtiaib9sCrP32UlUGSS5JD50IpMybKSH3VvsdiaJDpUdzfw/640?wx_fmt=png&from=appmsg)

**Sreeram K**，他在特里凡得琅 APJ Abdul Kalam 科技大学 Rajagiri 工程技术学院完成了电气与电子工程学士学位和工业驱动与控制硕士学位。他正在阿姆里塔普里校区阿姆里塔工程学院电气与电子工程系副教授 Preetha P K 博士的指导下攻读博士学位。他在国际期刊上发表了五篇论文。他还在国内和国际会议上发表过论文。他还获得过三次 IEEE 最佳奖。他的兴趣领域是电力电子、电动汽车 (EV)、电机和电能质量。联系方式：sreeram@am.amrita.edu。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibe5ZeGEdND9E1ShoPRsm3c5qyLT1Yn3AJdoAQk9Q3ztCFlYf5t7burPN4cVUwgmTXd3KKLSqzMhg/640?wx_fmt=png&from=appmsg)

**Preetha P K**，她在特里凡得琅工程学院完成了电气与电子工程学士学位和电力系统硕士学位。她在阿姆利塔普里的阿姆利塔大学获得博士学位。Preetha PK 博士现任阿姆里塔普里阿姆里塔工程学院电气与电子工程系副教授兼副系主任。Preetha 博士是 IEEE 会员和 ISTE 终身会员。她在期刊和会议上发表过多篇论文。她的研究兴趣领域包括电能质量、电力系统控制和电动汽车 (EV)。联系方式：preethapk@am.amrita.edu。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibe5ZeGEdND9E1ShoPRsm3cGibsudNBm7vz8PK7K0I15FaQDhnv1TcubjDVnfbhe16te9d4tela6ag/640?wx_fmt=png&from=appmsg)

**Javier Rodríguez-García**，拥有电气工程硕士学位和工业工程博士学位（西班牙巴伦西亚理工大学）。在佛罗里达大学（美国）电力中心公用事业探索国际研究实习后，他在能源工程研究所担任研究员长达 15 年之久。在此期间，他参与了多个国际（美国、欧洲和南美）和国内研究项目和咨询工作，并获得了公共和私人资助，如欧盟-DEEP（欧盟）、DRIP（欧盟）、DROP（美国）和厄瓜多尔智能电网项目（南美）等。他感兴趣的领域包括电动汽车充电管理、能源效率和管理、需求响应、智能电网和能源市场。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibe5ZeGEdND9E1ShoPRsm3c9SNKo8Bck8HMzV0JJDVICVQUlo9oTYRGMIlicibq83WribI56KsjgicvdA/640?wx_fmt=png&from=appmsg)

**Carlos Álvarez-Bel (M’80)**，1954 年出生于西班牙昆卡。他分别于 1976 年和 1979 年获得西班牙巴伦西亚理工大学电气工程硕士和博士学位。1989 年以来，他一直担任巴伦西亚理工大学教授。他的专业活动一直在电力能源系统领域的公用事业、研究中心和大学框架内进行。他参与了西班牙和国外（美国和欧盟）电力公司的许多项目和咨询工作，涉及负荷建模、标准市场、微电网等领域。2015 年，他参与了由美洲开发银行资助的厄瓜多尔智能电网项目，根据智能电网定义设计了该国最相关地区的五个配电网络。

  

  

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被ESCI、EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KalkDdQtbbTvQNT5Z89ibvTeUaI5nU6me4w5ualicmNwEGzsebDicBujmicw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1k432BagqYBSpEricSKUWFXSlSfsmibVn6lrHGgF3bk2HNDKgMsmv0jzjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kFquwswRdMpgltNf0ofDboWBsO2VEWngicxMLCwAjKicUpA36bE18nqyQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kqvWm5WpOHLYBxwbAicSjcBbZ10gGc0OGXJry876QYUDbR6L4mnIeQTQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学会官方微信

电工技术学报

CES电气

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kxqBhgTkxhRWEW0XjEyERqib5lURct6qfw0hu5MicCFTEE3fUuRuMGwYQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kJUJKGasHWENobphbJ482N9gYfNsVC4r2IJslRgg6hDeDOaq7UjODicA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kI0fa9LY4e2piaNeSjLI4ybUTWNhecEM1ZeRicz1zy8qPmiab5ia11BtCcw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

学会官方B站

CES TEMS

今日头条号

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kiaDDmDY7734hLauYWibPJQW5ThU9SLI35icS2kke05zNibsXXKjfIpFyRQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kQBmbDzflDusd312Op55BibBmUtibVk1AjOfyWzWPwtLO0s5oz2EsSWVg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1ks1BJP50Lux134cYxqiao7iaI6HBoQgw1oRNAaN2lHDCcY0RzFBibR76qA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学会科普微信

新浪微博

抖音号