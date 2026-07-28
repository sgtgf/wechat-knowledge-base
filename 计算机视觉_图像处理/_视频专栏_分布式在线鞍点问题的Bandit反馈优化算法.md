# 【视频专栏】分布式在线鞍点问题的Bandit反馈优化算法

原创 自动化学报 自动化学报 2026-04-17 17:25 北京

> 原文地址: [https://mp.weixin.qq.com/s/01ZZiDLEtSnHNLPLsPwHdQ](https://mp.weixin.qq.com/s/01ZZiDLEtSnHNLPLsPwHdQ)

[张文韬, 张保勇, 袁德明, 徐胜元. 分布式在线鞍点问题的Bandit反馈优化算法. 自动化学报, 2025,](https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c240289) **[51](https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c240289)**[(4): 857−874](https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c240289)

点击即可观看视频

  

  

  

![](https://mmecoa.qpic.cn/mmecoa_png/vBfohmoVxVSibJ00nF5JwgxlxEgAu8CRwksM8GsElX6xrC96ZSEdSpkicfuUOL1Bo111CzzS0BLgKK5j895qtwyDFXDdKPvv0VHJqk7pm4LIA/640?wx_fmt=png&from=appmsg)

**摘要**

本文研究了多智能体时变网络上基于Bandit反馈的分布式在线鞍点问题, 其中每个智能体通过本地计算和局部信息交流去协作最小化全局损失函数. 在Bandit反馈下, 包括梯度在内的损失函数信息是不可用的, 每个智能体仅能获得和使用在某决策或其附近产生的函数值. 为此, 结合单点梯度估计方法和预测映射技术, 提出一种非欧几里得意义上的分布式在线Bandit鞍点优化算法. 以动态鞍点遗憾作为性能指标, 对于一般的凸−凹损失函数, 建立了遗憾上界并在某些预设条件下确保所提算法的次线性收敛. 此外, 考虑到在迭代优化中计算优化子程序的精确解通常较为困难, 进一步扩展一种基于近似计算方法的算法变种, 并严格分析精确度设置对扩展算法遗憾上界的影响. 最后, 通过一个目标跟踪案例对算法的有效性和先进性进行仿真验证.

  

  

  

  

  

![](https://mmecoa.qpic.cn/mmecoa_png/vBfohmoVxVSw89kSa6VC1rE6qhSPHJIkTlH0fNkALV8KsfeZ6cMibb2ibjwug1CTN3s4khHqLZKEOtnU3TicXAmkrznB8nzxqUfddaoLRSAh5w/640?wx_fmt=png&from=appmsg)

**引言**

近年来, 在线凸优化已成为一种解决实时决策任务的强有力工具和框架, 并且由于其在传感器网络、机器学习、强化学习、智能电网等领域的重要应用, 而引起了国内外学者的广泛关注\[1−4\]. 在该优化框架下, 损失函数信息仅在决策者做出决策后才会被对手或环境揭示, 即决策者仅能获取损失函数的后验信息. 通过使用所揭示的函数信息, 决策者更新下一时刻的决策, 继而生成一系列决策以实现最小化累积损失函数的目标. 在线凸优化的开创性工作可追溯到文献\[5\], 其中该文分析在线梯度下降优化算法并建立了静态遗憾(Regret)界.到目前为止, 人们针对在线凸优化问题提出了许多有效可行的算法, 如文献\[6-11\].

  

然而, 在一些重要应用场景中, 如双线性矩阵博弈\[12\]、约束优化对偶性\[9\]、高维数据分类\[13\]、鲁棒优化问题\[14\]等, 所涉及的损失函数并不适用于在线凸优化框架, 换句话说, 它们的损失函数不总是凸(凹)的, 而是呈现出一种凸凹结构. 因此, 这些实际场景自然地激发了学者们对在线鞍点问题(也称在线最小最大优化)的研究兴趣. 早期, Ho-Nguyen和Kılınç-Karzan\[15\]使用加权在线鞍点间隙的性能指标, 对集中式在线鞍点问题进行研究并给出了次线性收敛的结果. 在文献\[16\]中, Rivera等提出一种跟随领导者在线鞍点优化算法, 并对于凸凹和强凸强凹目标函数分别获得了静态遗憾上界. 随后, Xu等\[17\]在文献\[16\]的基础上额外引入了正则化项, 实现了稳定的决策. Wood和Dall＇Anese\[18\]使用平衡点理论分析了一类具有决策相关数据的在线鞍点问题.

  

在很多实际场景中, 例如网络中的在线路由、发电、网络搜索中的在线广告投放\[2, 9\], 损失函数的具体信息是不可用的, 且智能体仅能获得和使用某决策处或其邻域内的函数值. 这种信息反馈模型称为Bandit反馈. 为此, 利用函数值信息构造单点和多点梯度估计器的解决方案随之引起关注\[9, 11, 19−23\].对于一类在线矩阵博弈问题, Cardoso等\[23\]分析了全信息和Bandit反馈下的纳什均衡遗憾. 在文献\[22\]中, Roy等在两种信息反馈下研究了非平稳鞍点问题的两种集中式优化算法, 并详细展示了所设计的算法在动态和静态鞍点遗憾标准下是次线性收敛的. 然而, 这一结果依赖于目标函数为强凸−强凹和光滑的强假设条件. 受限于单个机器的计算瓶颈,集中式算法往往难以胜任大规模复杂的优化问题\[3, 24\].相比之下, 分布式框架下的算法避免了这个限制,且因其低计算负担、结构鲁棒性和隐私性等显著优势, 近年来已引起国内外学者的广泛关注\[3, 9−10, 24−36\].在此框架下, Zhang等\[37\]提出一种Bandit反馈下的基于两点梯度估计方法的分布式在线鞍点优化算法, 并建立相应的次线性动态鞍点遗憾.

  

就在线Bandit鞍点问题的分布式解决方案而言, 现有的研究尚不完善, 新的分布式算法亟待开发和分析. 此外, 包括文献\[37\]在内的传统欧氏距离下的算法缺乏灵活性, 难以进一步利用优化问题的某些性质. 例如, 对于带有单纯形约束的优化问题, Kullback-Leibler (KL)散度作为一种非欧距离可获得算法显式表达, 而对于传统的欧氏距离则无法获得\[8\]. 因此, 开发一种非欧几里得意义上的分布式在线Bandit鞍点算法是必要且有意义的. 另一方面, 由于无偏估计性质和仅需一个采样点的要求,单点估计框架能够有效处理Bandit反馈下梯度信息受限情形, 且可以与许多应用相兼容, 例如网络搜索中的在线广告投放\[2, 9\]. 受上述两方面分析的启发, 本文应用单点梯度估计框架和分布式镜面下降方法, 研究了在线Bandit鞍点问题, 主要贡献总结为如下三个方面:

  

1) 为解决时变多智能体网络上的分布式在线Bandit鞍点问题, 本文通过结合梯度估计和时变预测映射技术, 提出一种非欧几里得意义上的分布式在线算法. 在距离度量上采用更为一般的Bregman散度而不是传统的欧氏距离, 使得算法由于对不同优化问题的自由选择性而变得更加灵活. 此外, 受益于预测映射的灵活设置, 所提算法可实现比单位映射更好的收敛性能.

  

 2) 开发并分析基于单点梯度估计器的分布式在线Bandit镜面下降鞍点优化算法. 区别于文献\[37\]的两点估计方法, 每个单点估计器仅要求一个函数值, 且其估计参数不依赖于总迭代时间  的先验知识, 进而有效增强了算法的可操作性和实用性. 对于一般化的凸凹损失函数, 建立了其动态遗憾上界并保证了次线性收敛. 

  

3) 考虑到在迭代优化中计算优化子程序的精确解通常较为困难且计算成本昂贵, 本文设计一种基于近似计算方法的算法变种, 并严格分析精确度设置对算法遗憾上界的影响. 

  

最后, 通过一个目标跟踪案例对算法的有效性和先进性进行了仿真验证.

本文内容安排如下: 第1节描述所研究问题和一些预备知识; 第2节给出一种分布式在线Bandit鞍点优化算法和对应收敛结果; 第3节给出一种基于近似计算方法的算法变种; 第4节给出仿真实验结果; 第5节对本文进行总结与展望.

  

![](https://mmecoa.qpic.cn/mmecoa_jpg/vBfohmoVxVSkcH8Bgnst11kt4ROvhVB2dgGJibKOfGYgZAfBoicRpeuUbLXr3LKj47lO8Rwt58q8w4dgISrdoFkk9UswAgic7B5btjjGHThSr0/640?wx_fmt=jpeg&from=appmsg)

![](https://mmecoa.qpic.cn/sz_mmecoa_png/vBfohmoVxVRyhpq6WHmYN78hzzrQITp98K96XTT6g5fY4iblBRzAYhhgjg7dPF8GPSicPrAhhcS1tXw2L7FPp65J27y37YTPEfomQWibhx1jzU/640?wx_fmt=png&from=appmsg)

  

  

  

  

  

![](https://mmecoa.qpic.cn/sz_mmecoa_png/vBfohmoVxVTfrsrfx3V1ZnbVV1LiabaGaKCnKlVj4ZfJuoQEH4c2akllXdBeewXL2WlwYyzl1Aq63mCDBek40T32O5ibgGuX8YjCpiczUKRx0M/640?wx_fmt=png&from=appmsg)

**正文框架**

1  问题描述与预备知识

  1.1  Bregman散度

2  算法设计与收敛性分析

  2.1  基于单点梯度估计的分布式在线Bandit鞍点优化算法

  2.2  算法收敛性分析

3  基于近似计算方法的变种算法

4  仿真实验

5  结束语

  附录A  引理3的证明

  附录B  引理4的证明

  附录C  引理5的证明

  附录D  引理6的证明

  附录E  引理7的证明

  

  

  

  

  

![](https://mmecoa.qpic.cn/mmecoa_png/vBfohmoVxVS1iaDyGYsIbypkl7lGltNt4No9GuichAWvrzbJDLwMGdicIgXn6Tyw6VsAibiaNsGofF8C4D8NEy7SjlmmkIBQntzCuVoibq1fKutbo/640?wx_fmt=png&from=appmsg)

**参考文献(部分）**

  

  

\[1\]  Shalev-Shwartz S. Online learning and online convex optimization. Foundations and Trends® in Machine Learning, 2012, **4**(2):107−194

\[2\]  Hazan E. Introduction to online convex optimization. Foundations and Trends® in Optimization, 2016, 2(3−4): 157−325

\[3\]  Li X X, Xie L H, Li N. A survey on distributed online optimization and online games. Annual Reviews in Control, 2023, 56:Article No. 100904 doi: 10.1016/j.arcontrol.2023.100904

\[4\]  Yuan De-Ming, Zhang Bao-Yong, Xia Jian-Wei.Recent advance in online distributed optimization. Journal of Liaocheng University (Natural Science Edition), 2023, 36(5): 1−12

(袁德明, 张保勇, 夏建伟. 在线分布式优化研究进展. 聊城大学学报 (自然科学版), 2023, 36(5): 1−12)

\[5\]  Zinkevich M. Online convex programming and generalized infinitesimal gradient ascent. In: Proceedings of the 20th International Conference on Machine Learning (ICML). Washington, USA: AAAI Press, 2003. 928−935

\[6\]  Cao X Y, Liu K J R. Online convex optimization with timevarying constraints and bandit feedback. IEEE Transactions on Automatic Control, 2019, 64(7): 2665−2680 doi:[10.1109/TAC.2018.2884653](http://dx.doi.org/10.1109/TAC.2018.2884653)

\[7\]  Wu Qing-Tao, Zhu Jun-Long, Ge Quan-Bo, Zhang Ming-Chuan. An accelerated distributed online learning algorithm based on conditional gradient. Acta Automatica Sinica, 2024, 50(2):386−402

(吴庆涛, 朱军龙, 葛泉波, 张明川. 一种基于条件梯度的加速分布式在线学习算法. 自动化学报, 2024, 50(2): 386−402)

\[8\]  Yuan D M, Hong Y G, Ho D W C, Xu S Y. Distributed mirror descent for online composite optimization. IEEE Transactions on Automatic Control, 2021, 66(2): 714−729 doi:[10.1109/TAC.2020.2987379](http://dx.doi.org/10.1109/TAC.2020.2987379)

\[9\]  Yi X L, Li X X, Yang T, Xie L H, Chai T Y, Johansson K H. Distributed bandit online convex optimization with time\-varying coupled inequality constraints. IEEE Transactions on Automatic Control, 2021, 66(10): 4620−4635 doi:10.1109/TAC.2020.3030883

  

  

  

  

![](https://mmecoa.qpic.cn/sz_mmecoa_png/vBfohmoVxVQDEcAOgLAlUhk2Kanvpbne0gCjlmMsuILwicxQ4rJ6Vt3V1V0QFJibibtT8mTBnm9AgUymm94Wcyicpb81xBYIiakMV1O4mhjCyMVk/640?wx_fmt=png&from=appmsg)

**作者简介**

张文韬

南京理工大学自动化学院博士研究生. 主要研究方向为多智能体分布式优化, 鞍点问题.

张保勇

南京理工大学自动化学院教授. 主要研究方向为多智能体分布式优化与控制, 时滞系统和非线性系统的分析与控制. 本文通信作者.

袁德明

南京理工大学自动化学院教授. 主要研究方向为多智能体分布式优化与控制, 分布式机器学习.

徐胜元

南京理工大学自动化学院教授. 主要研究方向为广义系统、时滞系统和非线性系统的分析与控制.

  

  

  

**热**

**点**

**文**

**章**

[【视频专栏】基于分层仿生神经网络的多机器人协同区域搜索算法](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650005164&idx=1&sn=e65702f1abd81cecb8bcf3f7a74eafc4&scene=21#wechat_redirect)

[【视频专栏】基于模糊神经网络在线自学习的多智能体一致性控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650005057&idx=1&sn=5919278d0126e1c7051914699a44f47d&scene=21#wechat_redirect)

[【视频专栏】基于神经网络ODE和非线性MPC的DEA建模与控制](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650005037&idx=1&sn=9f6ac9af5e47b1ab340187de90cbf70c&scene=21#wechat_redirect)

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

[》2026年第3期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2650005133&idx=1&sn=8fb158023205787e7beb85ee09aa08a8&scene=21#wechat_redirect)

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

  

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=11)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=12)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafXj5OHBUy7QPVp2aHenUdtEzbIP3uxk1ZQKCv6EkiaibIgpsosdF2WUWg/640?wx_fmt=other&wxfrom=10005&wx_lazy=1&wx_co=1&tp=webp#imgIndex=13)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/RXx7THRlLH02k9YyqiaoksLfoW7oJ3IafvpXmRsias6qryr6ibTZibfXSD6LbEgpIH5HLjjZeL1QXj0e1f1kfOf5jQ/640?wx_fmt=gif&wxfrom=10005&wx_lazy=1&tp=webp#imgIndex=15)

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