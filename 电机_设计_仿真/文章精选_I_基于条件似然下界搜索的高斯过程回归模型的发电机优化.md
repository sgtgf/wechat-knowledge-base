# 文章精选 I 基于条件似然下界搜索的高斯过程回归模型的发电机优化

原创 CES TEMS编辑部 CES电机与系统学报 2024-04-25 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/yuiAaiZVBU9OYChBihKwsA](https://mp.weixin.qq.com/s/yuiAaiZVBU9OYChBihKwsA)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

****Optimization of Generator Based on Gaussian Process Regression Model with Conditional Likelihood Lower Bound Search****

Xiao Liu; Pingting Lin; Fan Bu; Shaoling Zhuang; Shoudao Huang

Hunan University, Changsha, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/10452307)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10452307)

X. Liu, P. Lin, F. Bu, S. Zhuang and S. Huang, "Optimization of Generator Based on Gaussian Process Regression Model with Conditional Likelihood Lower Bound Search," in CES Transactions on Electrical Machines and Systems, vol. 8, no. 1, pp. 32-42, March 2024, doi: 10.30941/CESTEMS.2024.00001.

**摘 要**

  

  

在发电机优化过程中，有限元仿真过程中产生的噪声常常导致模型陷入局部最优解和过拟合。为此，本文提出了一种基于条件似然下界搜索(CLLBS)的高斯过程回归(GPR)模型来优化生成器的设计，该模型能够滤除数据中的噪声，并结合条件似然下界搜索方法进行全局优化。以15千瓦永磁同步电机的效率优化为例。该方法首先利用初等效应分析选取敏感变量，结合进化算法设计超拉丁立方抽样方案；然后通过建立联合仿真平台对发-换流系统进行仿真，获取数据。建立了结合条件似然下界搜索方法的高斯过程回归模型，并结合卡方检验对模型精度进行全局优化。其次，在模型达到精度后，以最大输出转矩为约束条件，通过NSGA-II算法求出Pareto前沿。最后，通过引入基于再插值模型的最大约束改进期望(CEI)优化方法，将约束优化问题转化为无约束优化问题，并与高斯过程回归模型的优化结果进行了交叉验证。上述方法使发电机效率分别提高0.76%和0.5%；该方法可用于发电机系统的快速建模和多目标优化。    

  

**Abstract**

  

  

The noise that comes from finite element simulation often causes the model to fall into the local optimal solution and over fitting during optimization of generator. Thus, this paper proposes a Gaussian Process Regression (GPR) model based on Conditional Likelihood Lower Bound Search (CLLBS) to optimize the design of the generator, which can filter the noise in the data and search for global optimization by combining the Conditional Likelihood Lower Bound Search method. Taking the efficiency optimization of 15 kW Permanent Magnet Synchronous Motor as an example. Firstly, this method uses the elementary effect analysis to choose the sensitive variables, combining the evolutionary algorithm to design the super Latin cube sampling plan; Then the generator-converter system is simulated by establishing a co-simulation platform to obtain data. A Gaussian process regression model combing the method of the conditional likelihood lower bound search is established, which combined the chi-square test to optimize the accuracy of the model globally. Secondly, after the model reaches the accuracy, the Pareto frontier is obtained through the NSGA-II algorithm by considering the maximum output torque as a constraint. Last, the constrained optimization is transformed into an unconstrained optimizing problem by introducing maximum constrained improvement expectation (CEI) optimization method based on the re-interpolation model, which cross-validated the optimization results of the Gaussian process regression model. The above method increase the efficiency of generator by 0.76% and 0.5% respectively; And this method can be used for rapid modeling and multi-objective optimization of generator systems.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibIlOYSsLmFdwNf6SL7kA4lKBjPCZeJTxCy59m5MBczmpM20fdtzA5wAyrX7DLlXIWqib7owuGAFGg/640?wx_fmt=gif&from=appmsg)

  

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178fhcbMS3MOHNGrIlcjHR0syH2cswK844lZonq5ic5xEmpDqlk6b7LicgKYwmDS5OMXOib8lgDhibw9Qw/640?wx_fmt=png&from=appmsg)

**刘晓**，湖南大学电气与信息工程学院教授、博士生导师、湖南省杰青。主要从事风力发电、高效节能直驱电机系统、磁性传动等方向的研究工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibIlOYSsLmFdwNf6SL7kA4lSxIocPHuDrZGAcRx2eFicINQlACDbictGMt7s5Nzk8rzqrSGEicgH0Giag/640?wx_fmt=gif&from=appmsg)

**林娉婷**，女，湖南大学电气与信息工程学院电气工程专业博士研究生，主要从事新能源发电、新型电机设计与控制等方向的研究工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibIlOYSsLmFdwNf6SL7kA4lNnJ65CGibJlMQ6bvJuBviaYGC8545S1Gh0ian23EhxVR4dmtJZVRxmagg/640?wx_fmt=gif&from=appmsg)

**卜凡**，男，湖南大学电气与信息工程学院电气工程专业硕士研究生，主要从事电机联合仿真、电机多物理场仿真方向的研究工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibIlOYSsLmFdwNf6SL7kA4lUaLGQZqlFPDy6DcHXT8qaNViae136YE4ia1q2uZsIMbvBgsDI9oHAibcg/640?wx_fmt=gif&from=appmsg)

**庄少令**，男，湖南大学电气与信息工程学院电气工程专业硕士研究生，主要从事直驱风力发电机优化方向的研究工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibIlOYSsLmFdwNf6SL7kA4libjvT4p27Yua44mPjpWhayFFic3Q61WfW3f29UgwW58iaZ0LahprClKag/640?wx_fmt=png&from=appmsg)

**黄守道**，男，海上风力发电装备与风能高效利用全国重点实验室主任、湖南大学电气与信息工程学院教授、博士生导师。主要从事大型风力发电技术、特种永磁电机设计与控制等方向的研究工作。

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

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