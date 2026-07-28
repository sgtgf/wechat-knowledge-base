# 【视频专栏】基于MARL-MHSA架构的水下仿生机器人协同围捕策略: 数据驱动建模与分布式策略优化

原创 自动化学报 自动化学报 2025-11-21 17:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/4fv0jks1BqIPovPJzr-FTA](https://mp.weixin.qq.com/s/4fv0jks1BqIPovPJzr-FTA)

![图片](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH2D35J4LUGZKibQ6Kkg5JxDkI3zOp1DhWJClEvEGMLJXTETVSJYjXcxktqnztKtociaAvqqiaN5VLGvg/640?wx_fmt=png&wxfrom=10005&wx_lazy=1&wx_co=1&tp=webp)

点击上方**蓝字**关注我们

  

[冯育凯, 吴正兴, 谭民. 基于MARL-MHSA架构的水下仿生机器人协同围捕策略: 数据驱动建模与分布式策略优化. 自动化学报, 2025, 51(10): 2269−2282](https://aas.net.cn/cn/article/doi/10.16383/j.aas.c250086)

点击即可观看视频

1

摘要

针对水下仿生机器人集群的围捕−逃逸问题, 提出一种融合多头自注意力机制的多智能体强化学习策略训练框架. 该框架构建一种基于多头自注意力机制的中心化决策网络, 在提升策略训练效率的同时, 保留分布式决策架构, 有效增强个体的自主决策能力与群体间的协同性能. 此外, 针对策略由仿真环境向真实场景迁移过程中动力学建模不精确、感知−动作存在偏差等挑战, 构建一种由真实场景机器鱼运动数据驱动的仿真环境, 有效提升了策略的可迁移性与部署的可靠性. 通过仿真与真实场景实验验证了所提方法在水下仿生机器人协同围捕任务中的有效性. 相较于多智能体近端策略优化算法, 该方法可使平均围捕成功率提升24.3%、平均围捕步长减少30.9%, 显著提升了水下仿生机器人集群的协同围捕效率. 该研究为多智能体强化学习在水下仿生机器人集群任务中的应用提供了新的思路和技术支持.

  

2

引言

自然界是人类创新的无穷源泉. 鱼群通过高度协同行为形成的集群智能, 为多水下仿生机器人系统的协同决策研究提供了宝贵的启示. 在自然界中, 鱼群通过分布式感知与自适应协调的方式, 可在复杂动态环境中高效完成协同捕食、动态避障和集群迁徙等复杂任务\[1−2\]. 以虎鲸群体的波浪式围捕策略和旗鱼群的分工协作狩猎模式为例, 其在目标定位精度、围捕成功率及能量利用效率等方面展现出显著优势. 这类生物群体在环境适应性与协作效率方面表现出的卓越能力, 激起了控制科学、仿生工程与群体智能等交叉学科的研究热潮\[3−5\]. 作为多智能体系统的典型应用, 受生物捕食行为启发的围捕−逃逸问题逐渐成为研究的热点. 在多机器人围捕−逃逸任务中, 围捕者团队由多个独立个体组成, 通过合作在地面\[6\]、空中\[7\]和水下\[8\]等特定环境中高效捕捉逃逸者. 其关键在于如何在动态变化的环境中进行复杂的决策和协调, 确保围捕者团队能够实现紧密合作、处理实时信息, 并通过有效的动态规划实现任务目标\[9−11\]. 相关技术在飞机控制、搜索与救援等领域中具有重要的应用潜力\[12−15\]. 

  

在以往解决方案中, 研究人员通常会对对手的行为施加一定假设\[16\]. 然而, 在许多实际场景中, 围捕−逃逸任务中往往包含智能化的竞争对手, 这些对手的行动并不局限于预定义的规则或受限的行动集. 因此, 设计能够在对手采取最坏行动时优化某一准则的策略, 并确保策略在对同一对手所有可能行为下都具备稳健性, 成为当前研究中的一个重要挑战\[17−18\]. 1999年, Isaacs\[19\]首次提出双机器人一对一追逃问题, 并通过构建围捕者和逃逸者的偏微分方程来寻找该问题的可行解. 此后, 随着研究的深入, 多机器人围捕问题逐渐引起学术界的广泛关注. 常见的解决方法包括动态博弈法\[20\]、粒子群优化算法\[21\]和图论建模\[22\]等. 尽管这些方法在某些场景中表现优异, 但它们通常依赖于理想化的模型假设, 并且具有较高的计算复杂度. 此外, 在高度非线性和不确定性较强的场景中, 动力学和环境的精确建模往往变得十分困难. 除此之外, 随着智能体数量的增加, 这些方法的计算复杂度通常呈指数级增长, 严重限制了其可扩展性. 

  

近年来, 强化学习因其能够适应动态环境且无需精确建模的优势, 逐渐成为解决围捕–逃逸问题的主流方法之一. 2019年, Wang等\[23\]提出一种结合模糊推理与强化学习的模糊确定性策略梯度算法, 通过演员−评论家(AC)结构优化方法, 得到在连续动作空间的近似最优策略, 在精度和收敛效率上均优于传统方法. de Souza等\[24\]提出一种基于双延迟深度确定性策略梯度的分布式多智能体追逐算法, 通过共享经验与课程学习, 成功实现了策略从仿真到现实的转移. Zhang等\[25\]结合深度强化学习与人工势场法, 提出一种混合追逃策略, 在动态环境中的表现优于单纯的深度学习或人工势场方法, 且可部署于实际系统. Kouzeghar等\[26\]提出一种基于改进多智能体深度确定性策略梯度算法的分布式异构无人机群多目标追逐方法, 成功实现了在复杂环境中的快速、智能目标追踪. 尽管现有的强化学习算法在多智能体环境中表现良好, 但仍面临难以高效处理复杂交互以及信息利用率低等问题. 尤其是在水下围捕−逃逸任务中, 传统的集中式方法通常从全局视角进行决策优化, 从而忽视了智能体之间的动态交互. 因此, 如何动态调整智能体间的关注点和信息流动至关重要.

  

  

除此之外, 随着水下仿生机器人平台性能的不断提升, 如何实现强化学习策略在仿真训练与真实部署之间的有效迁移已成为该领域的研究焦点\[27\]. 然而, 受限于水下仿生机器人固有的欠驱动特性, 以及水下环境中普遍存在的高噪声与强扰动, 该迁移过程面临着更为严峻的挑战\[28−29\]. 为应对这些挑战, 研究人员已展开了相关研究. Qiu等\[30\]通过构建高保真水动力学模型, 成功实现多智能体强化学习的训练, 并完成了线驱动机器鱼的路径跟踪和稳定控制任务. Yan等\[31\]将深度强化学习与流体动力学、运动学耦合仿真相结合, 提出一种面向仿生机器鱼的仿真与控制框架, 实现了机器鱼在复杂环境中的智能避障控制. Zhang等\[32−33\]通过采集真实机器鱼的游动轨迹数据, 建立低差异化的仿真模型, 并成功完成了机器鱼在二维平面内的姿态控制和轨迹跟踪任务. Yan等\[34\]采用模仿学习方法, 通过采集专家数据来缩小仿真与实际场景之间的差距, 从而实现仿生机器鱼在未知水域环境中的最大区域探索. 在上述研究中, 高保真建模方法虽可较为准确地拟合水动力学过程, 但高度依赖精细建模, 导致泛化能力有限. 模仿学习通过专家演示缩小策略差距, 增强了初期策略的稳定性, 但对数据质量和专家依赖性要求较高. 而数据驱动方法则基于实际感知数据构建仿真环境, 在精度与可扩展性之间实现了较好平衡, 近年来受到广泛关注. 但是, 现有数据驱动研究大多聚焦于单一机器鱼, 且主要在静态、平稳的水域中开展, 应用场景相对简单, 尚未能有效应对多机器鱼在复杂动态环境下的协同控制挑战. 

  

综上所述, 针对现有研究方法在水下仿生机器人协同围捕任务中的局限性, 本文提出一种基于多智能体强化学习的策略训练方法, 以提升水下仿生机器人在复杂动态环境中的协同作业和任务执行能力. 首先, 采用数据驱动的建模方式, 构建一个面向水下仿生机器人的高保真强化学习训练环境, 有效解决策略从仿真环境向实际场景迁移困难的问题. 其次, 为增强智能体在动态环境中的协同交互能力, 设计一种结合多头自注意力机制的多智能体强化学习（MARL-MHSA）算法, 使智能体能够在每个时刻根据任务需求选择性地关注关键交互信号, 从而实现个体间的高效围捕. 此外, 为满足水下机器人分布式控制需求, 采用集中训练−分布执行(CTDE)架构, 使智能体在训练阶段利用全局信息进行策略优化, 而在执行阶段则能够独立决策, 实现灵活自主的协同围捕. 最后, 仿真和水池实验验证了所提方法的有效性. 

  

3

正文框架

1\. 任务描述及硬件系统

  1.1 水下协同围捕任务描述

  1.2 水下仿生机器人平台

  1.3 CPG 模型

2\. 水下协同围捕决策整体框架设计

  2.1 基于数据驱动的仿真环境建模

  2.2 多智能体注意力协同围捕算法

  2.3 观测空间嵌入

  2.4 奖励函数设计

  2.5 整体算法

3\. 水下协同围捕策略训练

  3.1 网络设置

  3.2 训练过程

  3.3 阶段化课程学习

4\. 仿真及实验结果

  4.1 仿真实验设置

  4.2 训练结果及性能分析

  4.3 消融实验

  4.4 实际场景水下协同围捕实验

5\. 结束语

  

**部分文献**

  

\[1\]刘金存, 任崟杰, 徐战, 安冬, 位耀光. 从自然灵感角度出发的群体智能集群机器人系统研究综述. 信息与控制, 2024, 53(2): 154−181

Liu Jin-Cun, Ren Yin-Jie, Xu Zhan, An Dong, Wei Yao-Guang. Review of swarm intelligence research in swarm robotic systems: Approaching from the perspective of nature inspiration. Information and Control, 2024, 53(2): 154−181

\[2\]刘小峰, 陈果, 刘宇, 王希. 动物集群行为的机制和应用. 科学通报, 2023, 68(23): 3063−3076 

Liu Xiao-Feng, Chen Guo, Liu Yu, Wang Xi. Animal collective behavior: Mechanisms and applications. Chinese Science Bulletin, 2023, 68(23): 3063−3076

\[3\]Maxeiner M, Hocke M, Moenck H J, Gebhardt G H W, Weimar N, Musiolek L, et al. Social competence improves the performance of biomimetic robots leading live fish. Bioinspiration & Biomimetics, 2003, 18(4): Article No. 045001

\[4\]段海滨, 邵山, 苏丙未, 张雷. 基于仿生智能的无人作战飞机控制技术发展新思路. 中国科学: 技术科学, 2010, 40(8): 853−860

Duan Hai-Bin, Shao Shan, Su Bing-Wei, Zhang Lei. New development thoughts on the bio-inspired intelligence based control for unmanned combat aerial vehicle. Science China Technological Sciences, 2010, 40(8): 853−860

\[5\]Nguyen L V. Swarm intelligence-based multi-robotics: A comprehensive review. AppliedMath, 2024, 4(4): 1192−1210 doi: 10.3390/appliedmath4040064

\[6\]Sani M, Robu B, Hably A. Pursuit-evasion game for nonholonomic mobile robots with obstacle avoidance using NMPC. In: Proceedings of the 28th Mediterranean Conference on Control and Automation (MED). Saint-Raphaël, France: IEEE, 2020. 978−983

\[7\]Vidal R, Shakernia O, Kim H J, Shim D H, Sastry S. Probabilistic pursuit-evasion games: Theory, implementation, and experimental evaluation. IEEE Transactions on Robotics and Automation, 2002, 18(5): 662−669 

\[8\]Feng Y K, Wu Z X, Wang J, Gu J W, Yu F Y, Yu J Z, et al. Decentralized multirobotic fish pursuit control with attraction-enhanced reinforcement learning. IEEE Transactions on Industrial Electronics, 2025, 72(7): 8290−8300

\[9\]Vieira M A M, Govindan R, Sukhatme G S. Scalable and practical pursuit-evasion with networked robots. Intelligent Service Robotics, 2009, 2(4): 247−263 

\[10\]张红强, 吴亮红, 周游, 章兢, 周少武, 刘朝华. 复杂环境下群机器人自组织协同多目标围捕. 控制理论与应用, 2020, 37(5): 1054−1062 

Zhang Hong-Qiang, Wu Liang-Hong, Zhou You, Zhang Jing, Zhou Shao-Wu, Liu Zhao-Hua. Self-organizing cooperative multi-target hunting by swarm robots in complex environments. Control Theory & Applications, 2020, 37(5): 1054−1062 doi: 10.7641/CTA.2019.90015

\[11\]Kothari M, Manathara J G, Postlethwaite I. Cooperative multiple pursuers against a single evader. Journal of Intelligent & Robotic Systems, 2017, 86(3): 551−567

\[12\]周萌, 李建宇, 王昶, 王晶, 王力. 多机器人协同围捕方法综述. 自动化学报, 2024, 50(12): 2325−2358

Zhou Meng, Li Jian-Yu, Wang Chang, Wang Jing, Wang Li. Multi-robot cooperative hunting: A survey. Acta Automatica Sinica, 2024, 50(12): 2325−2358

\[13\]苏牧青, 王寅, 濮锐敏, 余萌. 基于强化学习的多无人车协同围捕方法. 工程科学学报, 2024, 46(7): 1237−1250

Su Mu-Qing, Wang Yin, Pu Rui-Min, Yu Meng. Cooperative encirclement method for multiple unmanned ground vehicles based on reinforcement learning. Chinese Journal of Engineering, 2024, 46(7): 1237−1250

\[14\]Oyler D W, Kabamba P T, Girard A R. Pursuit-evasion games in the presence of obstacles. Automatica, 2016, 65: 1−11 doi: 10.1016/j.automatica.2015.11.018

\[15\]Liu W H, Hu J W, Zhang H, Wang M Y, Xiong Z H. A novel graph-based motion planner of multi-mobile robot systems with formation and obstacle constraints. IEEE Transactions on Robotics, 2024, 40: 714−728

\[16\]Umar B M, Rilwan J, Aphane M, Muangchoo K. Pursuit and evasion linear differential game problems with generalized integral constraints. Symmetry, 2024, 16(5): Article No. 513 doi: 10.3390/sym16050513

\[17\]Weintraub I E, Pachter M, Garcia E. An introduction to pursuit-evasion differential games. In: Proceedings of the American Control Conference (ACC). Denver, USA: IEEE, 2020. 1049−1066

\[18\]Engin S, Jiang Q Y, Isler V. Learning to play pursuit-evasion with visibility constraints. In: Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). Prague, Czech Republic: IEEE, 2021. 3858−3863

\[19\]Isaacs R. Differential Games: A Mathematical Theory With Applications to Warfare and Pursuit, Control and Optimization. New York: Dover Publications, 1999.

\[20\]Xu Y H, Yang H, Jiang B, Polycarpou M M. Multiplayer pursuit-evasion differential games with malicious pursuers. IEEE Transactions on Automatic Control, 2022, 67(9): 4939−4946 

\[21\]Geng N G, Chen Z T, Nguyen Q A, Gong D W. Particle swarm optimization algorithm for the optimization of rescue task allocation with uncertain time constraints. Complex & Intelligent Systems, 2021, 7(2): 873−890

\[22\]Zeng X, Yang L P, Zhu Y W, Yang F Y X. Comparison of two optimal guidance methods for the long-distance orbital pursuit-evasion game. IEEE Transactions on Aerospace and Electronic Systems, 2021, 57(1): 521−539 

\[23\]Wang L X, Wang M L, Yue T. A fuzzy deterministic policy gradient algorithm for pursuit-evasion differential games. Neurocomputing, 2019, 362: 106−117 

\[24\]de Souza C, Newbury R, Cosgun A, Castillo P, Vidolov B, Kulić D. Decentralized multi-agent pursuit using deep reinforcement learning. IEEE Robotics and Automation Letters,2021,6(3):4552−4559

\[25\]Zhang Z, Wang X H, Zhang Q R, Hu T J. Multi-robot cooperative pursuit via potential field-enhanced reinforcement learning. In: Proceedings of the International Conference on Robotics and Automation (ICRA). Philadelphia, USA: IEEE, 2022. 8808−8814

\[26\]Kouzeghar M, Song Y B, Meghjani M, Bouffanais R. Multi-target pursuit by a decentralized heterogeneous UAV swarm using deep multi-agent reinforcement learning. In: Proceedings of the IEEE International Conference on Robotics and Automation (ICRA). London, UK: IEEE, 2023. 3289−3295

\[27\]Arndt K, Hazara M, Ghadirzadeh A, Kyrki V. Meta reinforcement learning for sim-to-real domain adaptation. In: Proceedings of the IEEE International Conference on Robotics and Automation (ICRA). Paris, France: IEEE, 2020. 2725−2731

\[28\]Yu J Z, Wang C, Xie G M. Coordination of multiple robotic fish with applications to underwater robot competition. IEEE Transactions on Industrial Electronics, 2016, 63(2): 1280−1288 

\[29\]Yan S Z, Wu Z X, Wang J, Tan M, Yu J Z. Efficient cooperative structured control for a multijoint biomimetic robotic fish. IEEE/ASME Transactions on Mechatronics, 2021, 26(5): 2506−2516

\[30\]Qiu C L, Wu Z X, Wang J, Tan M, Yu J Z. Multiagent-reinforcement-learning-based stable path tracking control for a bionic robotic fish with reaction wheel. IEEE Transactions on Industrial Electronics, 2023, 70(12): 12670−12679 

\[31\]Yan L, Chang X H, Wang N H, Tian R Y, Zhang L P, Liu W. Learning how to avoid obstacles: A numerical investigation for maneuvering of self-propelled fish based on deep reinforcement learning. International Journal for Numerical Methods in Fluids, 2021, 93(10): 3073−3091 

\[32\]Zhang T H, Tian R Y, Yang H Q, Wang C, Sun J N, Zhang S K, et al. From simulation to reality: A learning framework for fish-like robots to perform control tasks. IEEE Transactions on Robotics, 2022, 38(6): 3861−3878

Zhang T H, Tian R Y, Yang H Q, Wang C, Sun J N, Zhang S K, et al. From simulation to reality: A learning framework for fish-like robots to perform control tasks. IEEE Transactions on Robotics, 2022, 38(6): 3861−3878

\[33\]Zhang T H, Yue L, Wang C, Sun J N, Zhang S K, Wei A R, et al. Leveraging imitation learning on pose regulation problem of a robotic fish. IEEE Transactions on Neural Networks and Learning Systems, 2024, 35(3): 4232−4245

\[34\]Yan S Z, Wu Z X, Wang J, Huang Y P, Tan M, Yu J Z. Real-world learning control for autonomous exploration of a biomimetic robotic shark. IEEE Transactions on Industrial Electronics, 2022, 70(4): 3966−3974

  

**作者简介**

  

  

冯育凯，中国科学院大学人工智能学院博士研究生. 2021年获得北京化工大学机械设计制造及自动化专业学士学位. 主要研究方向为仿生机器人智能控制和多智能体系统.

  

吴正兴，中国科学院自动化研究所复杂系统认知与决策重点实验室研究员. 主要研究方向为仿生机器人和智能控制系统.

  

谭民，中国科学院自动化研究所复杂系统认知与决策重点实验室研究员. 主要研究方向为机器人系统和智能控制系统.

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_svg/hNWCQ9bibbzHiaCJb9KfdpL2BoibejlGR8z5V62T1Td8xhibKGsLzbLmiaZHLdOAalnlmU5lpibU5w1tGaXBhwmPT4ib7PwYibx4xfx3/640?wx_fmt=svg&wxfrom=10005&wx_lazy=1&wx_co=1&tp=webp)

  

  

**热**

**点**

**文**

**章**

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

[自动化学报创刊60周年专刊| 孙长银教授等：基于因果建模的强化学习控制: 现状及展望](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649985156&idx=1&sn=4af3bc3bc9a540beb3f43227b15d1337&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 柴天佑教授等：端边云协同的PID整定智能系统](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984913&idx=1&sn=ef45062894b813512922b43b45ed2b20&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 桂卫华教授等：复杂生产流程协同优化与智能控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984132&idx=1&sn=723478ec0cdb2b7ff3ce3cb8387f29fb&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 王耀南教授等：机器人感知与控制关键技术及其智能制造应用](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983799&idx=1&sn=dc9438335246ff414b912e29e9eb764c&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 于海斌研究员等：无线化工业控制系统: 架构、关键技术及应用](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983595&idx=1&sn=d9545fc8cbb247e17e7eceac9f845155&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 王飞跃教授等：平行智能与CPSS: 三十年发展的回顾与展望](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983512&idx=2&sn=17e0d1102db102517c33e43c04240468&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 陈杰教授等：非线性系统的安全分析与控制: 障碍函数方法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983132&idx=1&sn=32c7e4b6c4c3f6d48726380c7445c8d2&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 乔俊飞教授等：城市固废焚烧过程数据驱动建模与自组织控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983104&idx=1&sn=c21c87bc60f9ba05b85ac2a4ddf04e73&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 姜斌教授等：航天器位姿运动一体化直接自适应容错控制研究](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982991&idx=1&sn=402f25724c6c016cd492e8f4ca9764c7&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 王龙教授等：多智能体博弈、学习与控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983104&idx=2&sn=4e9ed9cff5c9acf2c85da060749b7fbe&scene=21#wechat_redirect)

[自动化学报创刊60周年专刊| 刘成林研究员等：类别增量学习研究进展和性能评价](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982935&idx=1&sn=98725e6e1d7489129fe88c26d8f206f4&scene=21#wechat_redirect)

[《自动化学报》创刊60周年专刊｜杨孟飞研究员等：空间控制技术发展与展望](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982899&idx=1&sn=839c1c4632e2bc46fc39972f72d76209&scene=21#wechat_redirect)

**期**

**刊**

**动**

**态**

[》《自动化学报》13篇文章入选2025年度“领跑者5000”顶尖论文](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650004163&idx=1&sn=c1a1003330bb1cc5b3b4cf44d5ae5525&scene=21#wechat_redirect)

[》《自动化学报》致谢审稿人（2024年度）](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650002940&idx=1&sn=143124df4e9f117cf65dba731316d450&scene=21#wechat_redirect)

[》CJCR发布：自动化学报各项主要指标蝉联第1](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650001473&idx=1&sn=eb2e44a48f804b67cb3a4c9709aae25c&chksm=f294d400c5e35d162db46a5d31d07f904cf89fbe646f5488b4e97b743effd29db6c0a5014c06&scene=21#wechat_redirect)

[》自动化学报排名第一，持续入选中国权威学术期刊（A+）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649995334&idx=1&sn=bf87bcddd566917490e06918b8895fe2&chksm=f294bc07c5e335115415c45903d01f3133749582e672a81464c428dcb5f845aec3f9b109ea5f&scene=21#wechat_redirect)

[》《自动化学报》创刊六十周年学术研讨会第六期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649991050&idx=1&sn=d10a737dd85c77b4d2229be1e9dbbd6f&chksm=f294a3cbc5e32add703d75c7279b1119564a3d56eef1f26f448aaaa1e81447691ba8dab8daa0&scene=21#wechat_redirect)

[》《自动化学报》创刊六十周年学术研讨会第五期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649990342&idx=1&sn=cea126ca0e0f85f2ece3f73bfa9b126e&chksm=f294a087c5e32991a89b8d16ee745e2cc28b5d632ff08495d5b8f958853a717db99c68b078d8&scene=21#wechat_redirect)

[》自动化学报蝉联百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649990067&idx=1&sn=4a6e171d54d1c781c8809f67f05967c1&chksm=f294a7f2c5e32ee4cac04ce10b0b413f2d356bb2b80e6d4426c65df3df25e7cd87eaaa0a3954&scene=21#wechat_redirect)

[》《自动化学报》创刊六十周年学术研讨会第三期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649985287&idx=1&sn=e088055dfb077c99cac881b294bfb860&chksm=f2949546c5e31c50f600d10eecd1a83ec3e5a2695f0905c4c988190106d18c6e01e8630bcd17&scene=21#wechat_redirect)

[》《自动化学报》创刊六十周年学术研讨会第二期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984459&idx=1&sn=bade18d071fffdbd94a0062aa09e5821&chksm=f294898ac5e3009ca3e2a687b9e97fa8ef2274e6318b7b241ba9092d113839da69bf8337ebcc&scene=21#wechat_redirect)

[》《自动化学报》创刊六十周年学术研讨会第一期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983235&idx=1&sn=8632016cf5744a797ee7ae7cf07ab943&chksm=f2948d42c5e304545e4a472d6b88fdf4a9f922013348a8d4f2ae4db0f1c6a4081245695cf3e9&scene=21#wechat_redirect)

[》自动化学报连续11年入选国际影响力TOP期刊榜单](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981948&idx=1&sn=6b850c9c095f2e9cbbb899c8b4a8149d&chksm=f29487bdc5e30eab3df0fb761e7f00b3c4945f7e0e971483a4c5f37434032e69f76d2f9f4160&scene=21#wechat_redirect)

[》自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[》《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21&token=489162852&lang=zh_CN#wechat_redirect)

**期**

**刊**

**目**

**录**

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

  

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=0)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafXj5OHBUy7QPVp2aHenUdtEzbIP3uxk1ZQKCv6EkiaibIgpsosdF2WUWg/640?wx_fmt=other&wxfrom=10005&wx_lazy=1&wx_co=1&tp=webp#imgIndex=2)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=3)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=4)

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