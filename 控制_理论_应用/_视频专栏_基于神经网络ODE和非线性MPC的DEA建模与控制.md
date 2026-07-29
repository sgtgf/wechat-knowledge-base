# 【视频专栏】基于神经网络ODE和非线性MPC的DEA建模与控制

原创 自动化学报 自动化学报 2026-03-20 17:15 北京

> 原文地址: [https://mp.weixin.qq.com/s/-i6VR4RM-MK7ES3JwyOZKw](https://mp.weixin.qq.com/s/-i6VR4RM-MK7ES3JwyOZKw)

# ![图片](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_000_8948a0c91c44.png)

点击上方**蓝字**关注我们

[黄鹏, 王亚午, 吴俊东, 苏春翌, 福岛E.文彦. 基于神经网络ODE和非线性MPC的DEA建模与控制. 自动化学报, 2025,](https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c240223) **[51](https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c240223)**[(1): 186−196](https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c240223)

点击即可观看视频

  

  

  

  

![](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_001_e59fae06eb49.png)

**摘要**

针对介电弹性体驱动器(DEA)建模与控制的挑战性问题, 提出基于神经网络常微分方程(ODE)和非线性模型预测控制(MPC)的DEA动力学建模与跟踪控制方法. 首先, 基于神经网络ODE建立DEA的动力学模型以描述其复杂的动态行为. 然后, 基于所建立的DEA动力学模型, 设计非线性模型预测控制器实现其跟踪控制目标. 最后, 在所搭建的实验平台上进行一系列跟踪控制实验. 在所有实验结果中, DEA的运动均能很好地跟踪目标轨迹, 且相对均方根误差均不超过3.30%, 说明了所提动力学建模与跟踪控制方法的有效性.

  

  

  

  

![](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_002_f0e92c6fa8da.png)

**引言**

当前, 新一轮科技革命和产业变革正在加速推进, 随着软材料技术、信息技术、生物技术与机器人技术的深度融合, 出现了能够模仿自然生物行为和运动模式的软体机器人\[1\]. 与传统的刚性机器人相比, 软体机器人具有结构柔顺、运动灵活和安全性高等优势\[2\], 在深海探测\[3\]、地质勘探\[4\]和康复医疗\[5\]等领域具有广阔的应用前景. 软体机器人多由气动软驱动器\[6\]、液晶弹性体驱动器\[7\]和介电弹性体驱动器(DEA)\[8\]等软驱动器驱动. 在上述软驱动器中, DEA具有变形范围大、能量密度高和响应速度快等优点\[9\], 被广泛应用于制作软体机器人, 比如软体扑翼机器人\[10\]、软体爬行机器人\[11\]和深海机器鱼\[12\]等.

  

为实现软体机器人在人机交互、环境探测及特种作业等领域的广泛应用, 归根结底需要先实现DEA的跟踪控制\[13\]. 然而, DEA的动态行为极其复杂, 具有平方输入非线性特性、迟滞非线性特性和蠕变非线性特性, 导致其跟踪控制面临巨大挑战.一般情况下, 基于模型的控制方法是实现复杂非线性系统控制的常用且高效的方法\[14\]. 因此, 有必要建立有效的DEA动力学模型, 用以设计基于模型的控制器实现其跟踪控制目标. 根据连续介质力学理论和热力学原理, Suo\[15\]给出了一种DEA的动力学模型框架. Xiao等\[16\]利用广义开尔文模型描述介电弹性体材料的粘弹性, 以此建立了平面DEA的动力学模型. Huang等\[17\]利用广义Maxwell模型描述介电弹性体材料的粘弹性, 进而建立了锥形DEA的动力学模型. 上述模型均是利用机理建模法而建立的, 可以从物理的角度解释DEA的动态行为. 然而, 这些模型的数学表达式非常复杂, 为控制器设计带来了巨大困难.

  

与机理建模法相比, 基于数据驱动的建模方法仅依赖于实验数据而无需考虑复杂的物理原理, 建模过程相对简单. 唯象建模法是一类基于数据驱动的建模方法. 同时, 部分唯象模型存在解析逆, 为控制器的设计提供了便利. 基于Prandtl-Ishlinskii唯象迟滞模型, Zou等\[18\]建立了DEA的动力学模型描述其迟滞非线性特性, 但未考虑其平方输入非线性特性和蠕变非线性特性. Zhang等\[13\]基于Prandtl-Ishlinskii唯象迟滞模型和算子叠加型唯象蠕变模型建立了DEA的动力学模型, 并使用平方模块描述了DEA的平方输入非线性特性. 然而, 在上述唯象建模过程中, 需要根据DEA的动态行为对唯象模型进行改进, 所建立的动力学模型具有复杂的数学表达式.

  

基于神经网络常微分方程(ODE)的建模方法是传统ODE模型与人工智能相结合的产物, 也属于基于数据驱动的建模方法\[19\]. 在实际物理世界中, 很多系统的动力学模型可以表示为状态空间方程形式(状态空间方程是ODE的一种形式). 针对复杂的非线性系统,可以将状态空间方程等式右边的项用神经网络进行逼近, 得到一个具有神经网络ODE形式的系统动力学模型\[20\]. 受益于神经网络的灵活性及万能逼近能力\[21\], 基于神经网络ODE的建模方法为DEA的动力学建模提供了一种潜在的解决方案.

  

由于DEA的动力学建模仍处于起步阶段, 建立能够描述其动态行为的动力学模型并确保该模型有利于控制器的设计是一项极具挑战性的工作.Gupta等\[22\]通过对平面拮抗型DEA的动力学模型求逆, 并直接将逆模型作为前馈逆补偿控制器, 实现了DEA的跟踪控制目标. 然而, 该方法是一种开环控制方法, 控制精度受建模误差、外界扰动和模型参数摄动等不确定性的影响较大. 为解决这一问题, Wang等\[23\]分别对DEA动力学模型中的平方模块、迟滞模型和线性系统求逆, 设计前馈逆补偿控制器补偿其平方输入非线性特性、迟滞非线性特性和蠕变非线性特性. 然后, 设计模糊比例积分反馈控制器与前馈逆补偿控制器相配合, 构造前馈−反馈复合控制器实现了DEA的跟踪控制目标. 然而, 上述控制方法要求DEA的动力学模型可逆, 为其实际应用带来了一定的限制.

  

受上述分析的启发, 本文提出基于神经网络ODE和非线性模型预测控制(MPC)的DEA动力学建模与跟踪控制方法. 首先, 简要介绍DEA的制作与实验平台的搭建. 其次, 基于神经网络ODE建立DEA的动力学模型描述其动态行为. 然后, 基于所建立的神经网络ODE动力学模型, 设计非线性模型预测控制器实现DEA的跟踪控制. 最后, 进行实际的DEA跟踪控制实验验证所提动力学建模与控制方法的有效性.

  

本文的主要贡献总结如下:

1)基于神经网络ODE建立DEA的动力学模型以描述其复杂的平方输入非线性特性、迟滞非线性特性与蠕变非线性特性, 具有简单和灵活的优势.

 2)直接将具有神经网络ODE形式的DEA动力学模型作为预测模型,设计非线性模型预测控制器实现DEA的跟踪控制目标. 该方法在提高控制器灵活性的同时降低了控制系统的计算复杂度, 有利于实际工程应用. 

3)通过实际的跟踪控制实验验证了所提DEA跟踪控制方法的有效性.

  

  

  

  

![](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_003_a11b357fe345.png)

**正文框架**

1 准备工作

  1.1  DEA制作

  1.2  实验平台搭建

2  DEA动力学建模与模型验证

  2.1  DEA动力学建模

  2.2  模型训练

  2.3  模型验证

3  非线性模型预测控制器设计

4  跟踪控制实验

  4.1  控制器参数整定

  4.2  实验验证

5  结论

  

  

  

  

![](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_004_de355551dd53.png)

**参考文献（部分）**

  

\[1\]  Rus D, Tolley M T. Design, fabrication and control of soft robots. Nature, 2015, 521(7553): 467−475

\[2\]  Wen Li, Wang He-Sheng. Prospects for soft robotics research: Structure, actuation and control. Robot, 2018, 40(5): 577 

(文力, 王贺升. 软体机器人研究展望: 结构、驱动与控制. 机器人, 2018, 40(5): 577)

\[3\]  Xu Fan, Wang He-Sheng. Adaptive robust visual servoing control of a soft manipulator in underwater environment. Acta Automatica Sinica, 2023, 49(4): 744−753

(徐璠, 王贺升. 软体机械臂水下自适应鲁棒视觉伺服. 自动化学报, 2023, 49(4): 744−753)

\[4\]  Naclerio N D, Karsai A, Murray-Cooper M, Ozkan-Aydin Y, Aydin E, Goldman D I, et al. Controlling subterranean forces enables a fast, steerable, burrowing soft robot. Science Robotics, 2021, 6(55): Article No. eabe2922

\[5\]  Wang Cheng-Jun, Deng Hai-Long. Application of soft robots in rehabilitation training. Journal of Mechanical Transmission, 2024, 48(5): 169−176

(王成军, 邓海龙. 软体机器人在康复训练领域的应用. 机械传动, 2024, 48(5): 169−176)

\[6\]  Li Xing-Wang, Teng Yan, Xu Ying. A pneumatic soft quad\-ruped robot based on a bistable actuator. Robot, 2024, 46(3): 294−304

(李兴旺, 滕燕, 徐迎. 一种基于双稳态驱动器的气动软体四足机器人. 机器人, 2024, 46(3): 294−304)

\[7\]  Wu J D, Ye W J, Wang Y W, Su C Y. Modeling based on a two-step parameter identification strategy for liquid crystal elastomer actuator considering dynamic phase transition process. IEEE Transactions on Cybernetics, 2023, 53(7): 4423−4434

\[8\]  Pelrine R, Kornbluh R, Pei Q B, Joseph J. High-speed electrically actuated elastomers with strain greater than 100%. Science,2000, 287(5454): 836−839

\[9\]  Li Zhi, Chen Guo-Qiang, Xu Hong-Zhi, Chen Xin-Kai, Shan JinJun, Zhang Xiu-Yu. A review of modeling and control methods for dielectric elastomer actuator systems. Control and Decision, 2023, 38(8): 2283−2300

(李智, 陈国强, 徐泓智, 陈新开, 陕晋军, 张秀宇. 介电弹性体驱动系统建模及控制方法综述. 控制与决策, 2023, 38(8): 2283−2300)

\[10\]  Chen Y F, Zhao H C, Mao J, Chirarattananon P, Helbling E F, Hyun N P, et al. Controlled flight of a microrobot powered by soft artificial muscles. Nature, 2019, 575(7782): 324−329

\[11\]  Gu G Y, Zou J, Zhao R K, Zhao X H, Zhu X Y. Soft wallclimbing robots. Science  Robotics, 2018, 3(25): Article  No. eaat2874

\[12\]  Li G R, Chen X P, Zhou F H, Liang Y M, Xiao Y H, Cao X N, et al. Self-powered soft robot in the Mariana Trench. Nature, 2021, 591(7848): 66−71

\[13\]  Zhang Y, Wu J D, Meng Q X, Wang Y W, Su C Y. Robust control of dielectric elastomer smart actuator for tracking highfrequency trajectory. IEEE Transactions on Industrial Informatics, 2024, 20(1): 224−234

\[14\]  Huang P, Wu J D, Zhang P, Wang Y W, Su C Y. Dynamic modeling and tracking control for dielectric elastomer actuator with a model predictive controller. IEEE Transactions on Industrial Electronics, 2022, 69(2): 1819−1828

\[15\]  Suo Z G. Theory of dielectric elastomers. Acta Mechanica Solida Sinica, 2010, 23(6): 549−578

\[16\]  Xiao H, Wu J D, Ye W J, Wang Y W. Dynamic modeling of dielectric elastomer actuators based on thermodynamic theory. Mechanics of Advanced Materials and Structures, 2022, 29(11): 1543−1552

\[17\]  Huang P, Ye W J, Wang Y W. Dynamic modeling of dielectric elastomer actuator with conical shape. Plos  One, 2020, 15(8): Article No. e0235229

\[18\]  Zou J, Gu G Y. High-precision tracking control of a soft dielectric elastomer actuator with inverse viscoelastic hysteresis compensation. IEEE/ASME Transactions on Mechatronics, 2019, 24(1): 36−44

\[19\]  Wang H C, Fu T F, Du Y Q, Gao W H, Huang K X, Liu Z M, et al. Scientific discovery in the age of artificial intelligence. Nature, 2023, 620(7972): 47−60

\[20\]  Linot A J, Burby J W, Tang Q, Balaprakash P, Graham M D, Maulik R. Stabilized neural ordinary differential equations for long-time forecasting of dynamical systems. Journal of Computational Physics, 2023, 474: Article No. 111838

\[21\]  Hornik K, Stinchcombe M, White H. Universal approximation of an unknown mapping and its derivatives using multilayer feed\-forward networks. Neural Networks, 1990, 3(5): 551−560

\[22\]  Gupta U, Wang Y Z, Ren H L, Zhu J. Dynamic modeling and feedforward control of jaw movements driven by viscoelastic artificial muscles. IEEE/ASME Transactions on  Mechatronics, 2019, 24(1): 25−35

\[23\]  Wang Y W, Huang P, Wu J D, Su C Y. Modelling and compound control of intelligently dielectric elastomer actuator. Control Engineering Practice, 2022, 126: Article No. 105261

  

  

  

![](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_005_5405fdcc8249.png)

**作者简介**

黄　鹏

中国地质大学 (武汉) 自动化学院博士研究生. 主要研究方向为软体机器人和机器人控制.

王亚午

中国地质大学 (武汉) 自动化学院教授. 主要研究方向为机器人控制和非线性系统控制. 本文通信作者. 

吴俊东

中国地质大学 (武汉) 自动化学院教授. 主要研究方向为软体机器人和非线性系统控制.

苏春翌

加拿大康考迪亚大学 GinaCody 工程与计算机科学学院教授.主要研究方向为机器人控制, 非线性系统控制, 软体机器人.

福岛E.文彦

日本东京工科大学工学部教授. 主要研究方向为机器人控制.

  

  

**热**

**点**

**文**

**章**

[【视频专栏】基于自适应原型特征类矫正的小样本学习方法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650005012&idx=1&sn=4939cb092f48ea688e273e9993db5b59&scene=21#wechat_redirect)

[【视频专栏】面向源网荷的智能化数据协同推断技术研究综述](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004733&idx=1&sn=f92cbe358200c02e0fcbab490b5e76e9&scene=21#wechat_redirect)

[【视频专栏】提示学习在计算机视觉中的分类、应用及展望](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004704&idx=1&sn=9879e756a21d1700d28da3f94707b514&scene=21#wechat_redirect)

[【视频专栏】追逃博弈问题研究综述](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004638&idx=1&sn=7baf0f46669d8590e0c64fea151abea5&scene=21#wechat_redirect)

[【视频专栏】基于视觉属性的多模态可解释图像分类方法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004507&idx=1&sn=d583b2ffc2a80019358827e8853577ff&scene=21#wechat_redirect)

[【视频专栏】数据驱动自适应评判控制研究进展](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004208&idx=1&sn=3ed16fce5fc87a38960ccc5b5c0ca7b7&scene=21#wechat_redirect)

[【视频专栏】基于MARL-MHSA架构的水下仿生机器人协同围捕策略: 数据驱动建模与分布式策略优化](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004191&idx=1&sn=423cfa393c8f49c1350ee58860215f65&scene=21#wechat_redirect)

[【视频专栏】多智能体系统协同互估计与控制一体化框架](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004164&idx=1&sn=fde70f95730e129645b4b6303ad87de8&scene=21#wechat_redirect)

[【视频专栏】面向智能生化实验室的机器人感知、规划与控制技术](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004145&idx=1&sn=cf58bcba992f71140b1ce75fa27bbad3&scene=21#wechat_redirect)

[【视频专栏】基于最小化背景判别性知识的小样本目标检测算法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004140&idx=1&sn=daf20cec22bbc4a37b9801f33f186c6c&scene=21#wechat_redirect)

[【视频专栏】输入受限的挠性航天器全驱姿态饱和控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004116&idx=1&sn=a9656a34f333263f70a61b72bbd4e41f&scene=21#wechat_redirect)

[【视频专栏】嵌套运动饱和下分布式多移动机器人反振荡安全编队控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004106&idx=1&sn=3c2d6544c2a3b36858f85f204bc937a8&scene=21#wechat_redirect)

[【视频专栏】基于变分稀疏高斯过程的多机器人协同感知与围捕](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004101&idx=1&sn=207b1a7ead7c70e21eb3bed464eafdf0&scene=21#wechat_redirect)

[【视频专栏】基于双向多视角关系图卷积网络的论辩对抽取方法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004090&idx=1&sn=af0153db5ed11833e983bc02e3bfbf45&scene=21#wechat_redirect)

[【视频专栏】模型参数不确定下多无人艇系统固定时间二分编队跟踪控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004078&idx=1&sn=b6f17a39b563f6c11aa4c881a9d3037c&scene=21#wechat_redirect)

[【视频专栏】具身智能自主无人系统技术](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004061&idx=1&sn=fcbda0f1fefe62aba8dde5829d87f7a5&scene=21#wechat_redirect)

[【视频专栏】异构不确定二阶非线性多智能体系统事件触发状态趋同](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004056&idx=1&sn=eb2dc171b51c1d59524958252bac12c1&scene=21#wechat_redirect)

[【视频专栏】基于大语言模型的兵棋推演智能决策技术](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004046&idx=1&sn=cd5d381d88804a31fc44a105355a72ac&scene=21#wechat_redirect)

[【视频专栏】面向大模型时代的持续学习方法论演变](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004033&idx=1&sn=11b48c7a87bdf68e51e3fb89bde1d962&scene=21#wechat_redirect)

[【视频专栏】电力设施多模态精细化机器人巡检关键技术及应用](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004005&idx=1&sn=c67ac894129f6020a65ddb8d1a096b6f&scene=21#wechat_redirect)

[【视频专栏】基于大模型的具身智能系统综述](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003856&idx=1&sn=4f39c045003477a848d3a100353812ca&scene=21#wechat_redirect)

[【视频专栏】无人飞行器集群自主控制: 预设性能驱动的安全编队控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003850&idx=1&sn=3510c49397b356de4f4a829af18ee0ba&scene=21#wechat_redirect)

[【视频专栏】时间序列分类模型的集成对抗训练防御方法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003845&idx=1&sn=047cf795b25d206fc00e2ccec6106bab&scene=21#wechat_redirect)

**期**

**刊**

**动**

**态**

[《自动化学报》致谢2025年度审稿专家](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004684&idx=1&sn=96a0950f58020801aeac34d26daf6b06&scene=21#wechat_redirect)

[《自动化学报》蝉联CJCR学科第1，持续入选中国最具国际影响力学术期刊](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004271&idx=1&sn=ebc0b42a493d74d6ce5c6e12d8ab522b&scene=21#wechat_redirect)

[《自动化学报》13篇文章入选2025年度“领跑者5000”顶尖论文](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004163&idx=1&sn=c1a1003330bb1cc5b3b4cf44d5ae5525&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人（2024年度）](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650002940&idx=1&sn=143124df4e9f117cf65dba731316d450&scene=21#wechat_redirect)

[》CJCR发布：自动化学报各项主要指标蝉联第1](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650001473&idx=1&sn=eb2e44a48f804b67cb3a4c9709aae25c&chksm=f294d400c5e35d162db46a5d31d07f904cf89fbe646f5488b4e97b743effd29db6c0a5014c06&scene=21#wechat_redirect)

[》自动化学报排名第一，持续入选中国权威学术期刊（A+）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649995334&idx=1&sn=bf87bcddd566917490e06918b8895fe2&chksm=f294bc07c5e335115415c45903d01f3133749582e672a81464c428dcb5f845aec3f9b109ea5f&scene=21#wechat_redirect)

[》自动化学报蝉联百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649990067&idx=1&sn=4a6e171d54d1c781c8809f67f05967c1&chksm=f294a7f2c5e32ee4cac04ce10b0b413f2d356bb2b80e6d4426c65df3df25e7cd87eaaa0a3954&scene=21#wechat_redirect)

[》自动化学报连续11年入选国际影响力TOP期刊榜单](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981948&idx=1&sn=6b850c9c095f2e9cbbb899c8b4a8149d&chksm=f29487bdc5e30eab3df0fb761e7f00b3c4945f7e0e971483a4c5f37434032e69f76d2f9f4160&scene=21#wechat_redirect)

[》自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[》《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21&token=489162852&lang=zh_CN#wechat_redirect)

**期**

**刊**

**目**

**录**

[》2026年第2期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004974&idx=1&sn=6a9668ba37f5240dbbe625ddd1868477&scene=21#wechat_redirect)

[》2026年第1期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004836&idx=1&sn=00f0ae368a2f0b9bbe51e5550126be0b&scene=21#wechat_redirect)

[》2025年第12期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004594&idx=1&sn=6a0faef723d7ce2252705823126505f2&scene=21#wechat_redirect)

[》2025年第11期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004484&idx=1&sn=85c39ee396019509fdfa0f6e6a2f2d26&scene=21#wechat_redirect)

[》2025年第10期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004154&idx=1&sn=52c9de73803192a418508b0cd99af96e&scene=21#wechat_redirect)

[》2025年第9期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004122&idx=1&sn=55380a1aa7ef6a0efaaa6e92094132be&scene=21#wechat_redirect)

[》2025年第8期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004085&idx=1&sn=574db83094f500887dbca0acd3a04607&scene=21#wechat_redirect)

[》2025年第7期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004068&idx=1&sn=744c424fe14e7c389bbd6011bc23b2fe&scene=21#wechat_redirect)

[》2025年第6期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004010&idx=1&sn=d3ca761542c86da1a2474f37e3d1b9d6&scene=21#wechat_redirect)

[》2025年第5期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003999&idx=1&sn=f05167a6cfc0908fdb59f45c4cefd57a&scene=21#wechat_redirect)

[》2025年第4期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003831&idx=1&sn=9de9fa20d954d43779505cfacfdbf7fb&scene=21#wechat_redirect)

[》2025年第3期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003799&idx=1&sn=8ecbcce5498b68c6587634c701499599&scene=21#wechat_redirect)

[》2025年第2期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003746&idx=1&sn=5bcd26b86b5f5653733c49bf9fa9662e&scene=21#wechat_redirect)

[》2025年第1期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650003737&idx=1&sn=b44902136950ec8dd158fe7c5b97bc6c&scene=21#wechat_redirect)

[》2024年第12期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650002764&idx=1&sn=9847e270aa7723e028c292dec9382ff2&scene=21#wechat_redirect)

[》2024年第11期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650002423&idx=1&sn=9c2c44f29a39bba071e7d5cebd362787&scene=21#wechat_redirect)

[》2024年第10期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650001656&idx=1&sn=be757a7fc7721faaa6454757824515df&chksm=f294d4b9c5e35dafdced997b4fe2e95e25e1306f519177ccf279272a81eb1f04104cb9b26ca5&scene=21#wechat_redirect)

[》2024年第09期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650001568&idx=1&sn=601ba42f8f1948156fed9bfc695ab096&chksm=f294d4e1c5e35df7f86458a067f51531f114442de83b9747f3970572b1567585d73c21a79418&scene=21#wechat_redirect)

[》2024年第08期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650001113&idx=1&sn=c9c698f9c1089080b58e66f6815d9a6b&chksm=f294ca98c5e3438e33f6d89b271439f7d4aad102096e7117709a2323a27befab5653450275b7&scene=21#wechat_redirect)

[》2024年第07期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650000761&idx=1&sn=3a92db7947e5ee87cc5f09e7e5fb1b75&chksm=f294c938c5e3402ee0152feef2328cabe3de62652288f20cb7105ffb95b77e5dd5f29dcb9b10&scene=21#wechat_redirect)

[》2024年第06期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649998994&idx=1&sn=e85c7e5e341382aa802d6725484acc86&chksm=f294c2d3c5e34bc510298427cc30bba15d664707509f51346146e567fa0b1339fe08d6e237b7&scene=21#wechat_redirect)

[》2024年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649997440&idx=1&sn=206e5535b1e208f218f0c02769155aa0&chksm=f294c4c1c5e34dd775e7fd252910ce73cf23916065222185aed3c780ba8c253b715df66e72f7&scene=21#wechat_redirect)

[》2024年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649996742&idx=1&sn=b08c5e9f61c270c578d012da47f3b8ae&chksm=f294b987c5e33091fd024e3839b813bc27797c1ffc372525b5ac4e99c8fede5520abf672dd84&scene=21#wechat_redirect)

[》2024年第03期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649995269&idx=1&sn=6c10ec073a6d1218b48b62eabc65d5ef&chksm=f294bc44c5e3355256ed0dea32d9b262942c57a1f19aeb87eb12ffeb3e01aafb6a94076f05ad&scene=21#wechat_redirect)

[》2024年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649994160&idx=1&sn=71e5ccf4a90c44f08b5f8077cf29c32b&chksm=f294b7f1c5e33ee724ca66de9170aa632babab162096a97a35bbafa1f288ce657ed921a3609d&scene=21#wechat_redirect)

[》2024年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649993861&idx=1&sn=c7b42ca4677588ecb992557c9fa12139&chksm=f294b6c4c5e33fd2ee444f54c2df145bd007e09695d8748148b2cc1673bc7044884c9ca47832&scene=21#wechat_redirect)

  

  

  

![图片](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_006_39c59cfe04ef.gif)

![图片](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_007_7f5a0c3f7d79.gif)

![图片](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_008_90d2bbd78d0a.jpg)

![图片](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_009_961df520a0b4.gif)

![图片](_视频专栏_基于神经网络ODE和非线性MPC的DEA建模与控制_images/img_010_0d99530280fc.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

**联系我们**

**网站:** 

[https://www.aas.net.cn](https://www.aas.net.cn/)

**投稿:** 

[https://mc03.manuscriptcentral.com/aas-cn](https://mc03.manuscriptcentral.com/aas-cn) 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

[http://blog.sina.com.cn/aasedit](http://blog.sina.com.cn/aaseditor)

**点击****阅读**原文 了解更多