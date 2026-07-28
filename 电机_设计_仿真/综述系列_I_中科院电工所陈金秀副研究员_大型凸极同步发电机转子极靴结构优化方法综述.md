# 综述系列 I 中科院电工所陈金秀副研究员：大型凸极同步发电机转子极靴结构优化方法综述

原创 CES TEMS编辑部 CES电机与系统学报 2026-06-01 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/nCpSCtM3R1Qssf9zUc3q8g](https://mp.weixin.qq.com/s/nCpSCtM3R1Qssf9zUc3q8g)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

**大型凸极同步发电机转子极靴结构优化方法综述**

  

Pengcheng Ma1,2; Jinxiu Chen\*1; Yiwei Ding1,2  

1.Chinese Academy of Sciences, Beijing, China

2.University of Chinese Academy of Sciences, Beijing, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/11470994)   ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11470994)

P. Ma, J. Chen and Y. Ding, "A Review of Optimization Methods for Pole-Shoe Structures in Large-Scale Salient Pole Synchronous Motors," in CES Transactions on Electrical Machines and Systems, vol. 10, no. 1, pp. 28-43, March 2026, doi: 10.30941/CESTEMS.2026.00009.

**1**

**亮点**

本文系统综述了大型凸极同步电机转子极靴结构的优化方法，重点分析了三段弧、五段弧、偏心极弧+弦面及不对称磁极等拓扑结构对气隙磁场分布、电压波形畸变率等电磁参数的影响。文章从电磁场逆问题数值求解与优化算法应用两个维度，对比了改进模拟退火、禁忌搜索、粒子群及量子进化算法在五段弧极靴单/多目标优化中的性能差异，为凸极同步电机的设计提供了重要的方案总结和实用的原则指导。此外，本文提出了引入拓扑优化方法以突破传统几何假设限制，并建议采用多目标粒子群算法来实现复杂工况下的性能均衡。

**2**

**内容**

**大多数水力发电机组都是凸极同步电动机。凸极结构本身会产生非正弦的气隙磁场。随着间歇性可再生能源和电力电子设备在大规模层面上越来越多地被整合到电网中，传统的水力发电机组在削峰、频率调节和无功功率支持方面承担着重要的责任。  
**

**（一）极靴结构与电磁参数计算理论**

**•阐述了极靴结构的作用，引导磁通、均匀气隙磁密、承受机械应力。**

**•通过极弧系数、电压波形系数和电枢反应系数，探讨关键电磁参数。**

![](https://mmbiz.qpic.cn/mmbiz_png/LO7v6QoDja3SJ4ibHdhJMiaf8EtZksYiclsiakmrDOicJ8L2hQicKS96CCLPAyMslzibtibkP5kcxibr7Lz59gmMCDfjhaLiakiaXHyR84tvysH84AGwWg/640?wx_fmt=png&from=appmsg)

**（二）分析了四种典型极靴拓扑结构：三段弧结构、五段弧结构、单偏心极弧+两段弦面结构、不对称磁极结构。**

![](https://mmbiz.qpic.cn/mmbiz_png/LO7v6QoDja2CBHnA0PWl5qibxmCbKbcAIefe0r85kSeEbkR7ZhJOgiaWibQzPH4dtRWFpLEedSp5GRe0HMTystuXZWsXAqmkw1VcDOYG1LwKjo/640?wx_fmt=png&from=appmsg)

**（三）总结了极靴结构优化计算方法  
**

****•**两种优化模式：参数优化和拓扑优化。  
**

**参数优化：预研准备、电磁设计、结构设计  
**

**拓扑优化：构建材料分布函数实现多物理场协同优化**

******•****电磁场逆问题：将逆问题分解为多个正问题，通过优化算法迭代求解  
**

**数值分析方法（正问题求解）：有限差分法、边界元法、矩量法、有限体积法、无网格法、有限元法。  
**

**优化算法（逆问题求解）：传统确定类算法（梯度法、牛顿法）、随机搜索算法如遗传算法、模拟退火、禁忌搜索、粒子群算法、量子进化算法。**

******•****五段弧极靴的优化应用  
**

**单目标优化：目的是使空载气隙磁通密度的基本分量达到最大值。对比了改进禁忌搜索算法、模拟退火算法、区域消去法、粒子群算法等。  
**

**多目标优化：目的为最大化空载气隙磁通密度的基本分量、最小化空载电压波形畸变率以及最小化电话谐波因数 THF，最终确定一组帕累托最优解，对比了矢量禁忌搜索算法、改进量子进化算法、多目标粒子群优化算法。实践中，研究人员通常会引入多准则决策（MCDM）方法筛选最优方案，如加权平均法、模糊综合评价、TOPSIS、RSR、VIKOR来进行方案评估。  
**

**3**

**思考**

当前的极靴设计，通常以多段弧形结构为例，本质上受到初始几何假设的限制，这可能阻碍发现具有更优性能的非传统结构形式。

未来的研究应侧重于为大型凸极同步电机建立一个多阶段优化路径。在当前的设计实践中，拓扑优化应首先在二维或简化三维模型中应用，以探索非传统结构原型。

创新的结构配置应转换为可参数化的描述，并在传统的参数化设计框架内进行细化以进行工程修正。

应采用高精度的多物理场模拟来精确校准所合成结构的电磁、机械和热特性以充分发挥拓扑优化的创新潜力，同时确保电机设计的工程可行性和可靠性。

**4**

**团队介绍**

中国科学院电工研究所电力设备新技术实验室是我国电气科学与工程技术领域从事相变换热高效冷却技术研究的核心力量，长期围绕大型电气装备散热需求开展理论创新与工程应用研究。

该方向由顾国彪院士等人开创，先后承担了大寨、安康、李家峡、三峡等一系列蒸发冷却水轮发电机科研攻关项目，以及“十一五”国家科技支撑计划“800兆瓦量级蒸发冷却水轮发电机优化设计研究和样机研制”、中国科学院重点部署项目“百万千瓦级蒸发冷却水轮发电机关键技术研究”等重大任务，荣获国家科技进步奖特等奖（2019年）、国家科技进步奖二等奖（1988年、2002年）及中国科学院科技进步奖一等奖（1987年、2000年）等多项奖励。

实验室开展了大型电机系统特性及集成优化设计、微细管道两相流动、复杂结构流动与传热耦合、气液固复合绝缘击穿特性、高效散热材料制备与检测等基础与工程应用研究，为大型水电机组高可靠性设计与安全运行提供了有力技术支撑，相关研究基础可直接服务于我国西南高海拔巨型水电工程。

此外，实验室将蒸发冷却技术拓展应用于电力电子设备和高性能计算等领域，研制的换流阀阀段散热性能显著优于传统冷却系统；应用于高密度服务器，可实现超低PUE，并在高海拔地区成功部署，为绿色高效计算提供了可行方案。

  

![](https://mmbiz.qpic.cn/mmbiz_png/LO7v6QoDja0HRcqDDA57V2ciaZ3bcgdeD96t5ZZEZ9u7slGKku3Ozz60MkjBOHxLCnvjK6RXyyaEwlefEM2QIvJNf3bLSUpicU62gfVhMPGU8/640?wx_fmt=png&from=appmsg)

**5**

**作者介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/LO7v6QoDja1nlAiaiaNHL83ZYtgFIg3nJ9ib5P0yeMnYdL760tWy4Bwu8bdhRqtqf8VUH65s6Ce1Ob3OEQLo9949BSKY9ktgiabsF9kojnwR0RU/640?wx_fmt=gif&from=appmsg)

**马鹏程**，出生于山西省。他于2024 年获四川大学电气工程及其自动化专业学士学位。目前他正在中国科学院电工研究所攻读电气工程硕士学位。研究方向为气液复合绝缘以及定子线棒防晕设计。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/LO7v6QoDja2IZxthMXXTic5cxuLydd8eeCAhmto5lA8cBtrp2BJPt3AT5fzP0ygkvyEB4BjPIDUWOnKF9GaAK7Wvw6EFZuibl86ptMMiaOXf9U/640?wx_fmt=gif&from=appmsg)

**陈金秀**，她于2010 年获中国矿业大学（北京）电气工程及其自动化专业学士学位，2016 年获中国科学院大学电工研究所电机与电器专业博士学位。2016—2021 年任中国科学院电工研究所助理研究员，2022 年至今任该所副研究员。目前的主要研究领域包括电力设备蒸发冷却技术理论与工程应用、多相复合绝缘、电机绝缘及防电晕设计。

![](https://mmbiz.qpic.cn/mmbiz_gif/LO7v6QoDja3I0iciccYR6N3BkOsN0YCeqYx3ggxxrxevAWtAKKOQOMQhrIXTIBqNiaJBMexicHnicbRc4kn87QrO8by83nUtoK7vO2z1OiaEu6iaIA/640?wx_fmt=gif&from=appmsg)

**丁艺伟**，出生于河南省。他于2022 年获郑州轻工业大学电机与电器专业硕士学位，目前于中国科学院大学电工研究所攻读电机与电器专业博士学位。研究方向为水轮发电机多学科优化设计、电磁-热-流体多物理场耦合分析、先进优化算法在发电机综合性能优化中的应用。

  

  

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