# 基于事件触发的离散MIMO系统自适应评判容错控制

原创 自动化学报 自动化学报 2022-04-28 16:36 北京

> 原文地址: [https://mp.weixin.qq.com/s/FYdl\_31ryI5atGI8RoCS5Q](https://mp.weixin.qq.com/s/FYdl_31ryI5atGI8RoCS5Q)

点击蓝字

关注我们

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lglw3P2h1QZBzibM7xcfYuNb3iboQ2RU64wZY4gMYCA1040eXEPMibcHfVg/640?wx_fmt=jpeg)

  

**引用本文**

王敏, 黄龙旺, 杨辰光. 基于事件触发的离散 MIMO 系统自适应评判容错控制. 自动化学报, 2022, 48(5): 1234−1245 doi: 10.16383/j.aas.c200721

Wang Min, Huang Long-Wang, Yang Chen-Guang. Event-triggered adaptive critic fault-tolerant control for a class of discrete-time MIMO systems. Acta Automatica Sinica, 2022, 48(5): 1234−1245 doi: 10.16383/j.aas.c200721

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200721?viewType=HTML

  

**文章简介**

  

**关键词**

  

事件触发控制, 自适应评判设计, 神经网络, 离散非线性系统

  

**摘   要**

  

本文针对具有执行器故障的一类离散非线性多输入多输出(Multi-input multi-output, MIMO)系统, 提出了一种基于事件触发的自适应评判容错控制方案. 该控制方案包括评价和执行网络. 在评价网络里, 为了缓解现有的非光滑二值效用函数可能引起的执行网络跳变问题, 利用高斯函数构建了一个光滑的效用函数, 并采用评价网络近似最优性能指标函数. 在执行网络里, 通过变量替换将系统状态的将来信息转化成关于系统当前状态的函数, 并结合事件触发机制设计了最优跟踪控制器. 该控制器引入了动态补偿项, 不仅能够抑制执行器故障对系统性能的影响, 而且能够改善系统的控制性能. 稳定性分析表明所有信号最终一致有界且跟踪误差收敛于原点的有界小邻域内. 数值系统和实际系统的仿真结果验证了该方案的有效性.

  

**引   言**

  

随着现代工业的快速发展, 无线通信技术被广泛用于各类控制系统中, 以解决工业过程的远程控制问题, 同时提高设备安装和配置的灵活性. 例如, 地面站对高空无人机的控制, 以及控制台对作业车间中工业机器人的远程控制等都是借助无线通信技术来实现的. 然而, 在网络资源受限的情况下, 传统的周期性数据传输和执行的控制方式很容易引发网络拥塞. 针对该问题, 文献\[3\]提出了事件触发的控制策略. 该策略通过仅在满足触发机制要求时进行数据传输, 从而有效地减少了控制系统中网络资源的占用. 结合事件触发策略, 自适应控制和万能逼近器等技术, 大量针对不确定非线性系统的事件触发控制方案相继被提出. 需要指出的是, 上述方案极少考虑系统存在非匹配的不确定非线性动态情况, 即不确定非线性动态出现在非控制输入通道. 事实上, 非匹配的非线性动态普遍存在于各种实际系统, 如无人车, 机械臂和飞行器等. 针对嵌入了“控制器−执行器网络”的非匹配非线性系统, 国内外学者们提出了大量具有相对或绝对事件触发条件的控制方案. 由于事件触发条件设计与系统稳定性的强耦合特性, 导致上述方案很难拓展到嵌入“传感器−控制器网络”的不确定非匹配非线性系统. 为了解决该难题, 文献\[16\]结合脉冲动力系统和死区算子等技术, 提出了具有自适应事件触发条件的控制方案. 需要说明的是, 上述方案仅适合于连续系统.

  

相比于连续系统, 离散系统更适用于描述数字化系统的控制过程. 然而, 离散系统事件触发控制方面的研究成果寥寥无几. 造成这一现象的主要原因是直接利用反步法对离散非匹配系统进行控制器设计时, 通常会产生非因果问题\[17\], 故而难以将连续系统的研究成果直接推广到对应的离散系统上. 为了克服该问题, 文献\[18\]先将原系统转化成一个n步向前预测模型, 并在该模型上进行反步控制设计. 在假设网络资源充足的前提下, 大量基于n步预测器的离散非匹配非线性系统的控制方案相继被提出. 考虑到远程控制中网络资源受限问题, 文献\[23\]尝试提出了基于n步预测模型的事件触发自适应神经网络控制方案. 然而, 文献\[23\]设计的控制器存在n步滞后现象, 且触发条件复杂不便于实施. 在此基础上,文献\[24-25\]探讨了随机噪声情况下离散非匹配非线性系统的事件触发控制问题. 值得注意的是, 上述的方案都没有考虑事件触发下系统的最优控制问题和可能出现的执行器故障现象.

  

众所周知, 在资源受限的情况下考虑如何利用有限的资源来优化系统性能以及减少资源浪费是非常有必要的. 动态规划是常用的解决最优化问题的有效方法之一, 但是控制动态规划后向寻优的求解过程的矛盾以及系统维数较高时所导致的“维数灾”问题, 使得动态规划难以在系统的最优化控制中得到大规模的应用. 为了解决此问题, 文献\[27\]通过采用“执行−评价”结构, 提出了自适应评判设计方法. 该方法使得执行网络能够根据评价结果适时调整控制策略, 从而达到实时寻优的目的. 目前, 自适应评判设计被广泛应用于解决离散和连续系统的最优控制问题. 如何将该方法推广到具有网络资源受限的离散非匹配非线性系统控制中是亟待解决的问题. 此外, 执行器故障广泛存在于工业生产过程中. 执行器故障会导致系统性能下降, 甚至导致系统不稳定. 因此, 在执行器故障下, 研究离散非匹配非线性系统的事件触发自适应评判容错控制具有重要意义.

  

基于上述分析, 本文着重研究具有非匹配结构的离散多输入多输出(Multi-input multi-output, MIMO)非线性系统的事件触发自适应评判容错控制问题. 与现有的结果相比, 本文的贡献可归纳如下: 1)构造光滑的效用函数来构建系统的长期性能指标函数, 从而避免了现有的非光滑二值效用函数切换过程中可能引起的评价网络和执行网络跳变现象; 2)采用变量替换法将系统的将来信息表示成关于系统当前状态的函数, 从而避免了控制设计过程中的非因果问题和控制信号的n步时延问题; 3)通过在控制器中引入动态补偿项, 并结合自适应评判设计方法, 从而改善了系统控制性能和进一步降低了事件触发次数.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lg3AiaxQ3HiaQbguJibnnkx2LRozLTbZPeZeRBVjaExAmsxSv6PbuUP0eaA/640?wx_fmt=jpeg)

图 1  网络控制系统框图

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgxGo54ibGfcMyicrhEOWbCTOv1PEEEl2PTf8pwObUYSBicbVyAibnFBl3xQ/640?wx_fmt=jpeg)

**王   敏**

华南理工大学自动化科学与工程学院教授. 主要研究方向为智能控制与学习, 机器人控制和网络控制系统. 本文通信作者.

E-mail: auwangmin@scut.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgnvoRKUrMswWfuGgbOSwwiaSpXCq8cp1R3m7CS4I8dibkRvaCjAianAV9g/640?wx_fmt=jpeg)

**黄龙旺**

华南理工大学自动化科学与工程学院博士研究生. 主要研究方向为智能控制和网络控制系统.

E-mail: longwang\_huang@126.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgLicq1YJ4nSRWkC9K9G1bmJ6RY9AWm9LibGMic4JibrR5a9w6GHPgzGQnAg/640?wx_fmt=jpeg)

**杨辰光**

华南理工大学自动化科学与工程学院教授. 主要研究方向为人机交互和智能系统设计.

E-mail: cyang@ieee.org

  

**相关文章**

  

**（请向上滑动阅读）**

  

\[1\]  陈世明, 邵赛, 姜根兰. 基于事件触发二阶多智能体系统的固定时间比例一致性. 自动化学报, 2022, 48(1): 261-270. doi: 10.16383/j.aas.c190128

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190128?viewType=HTML

  

\[2\]  杨彬, 周琪, 曹亮, 鲁仁全. 具有指定性能和全状态约束的多智能体系统事件触发控制. 自动化学报, 2019, 45(8): 1527-1535. doi: 10.16383/j.aas.c190252

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190252?viewType=HTML

  

\[3\]  闵惠芳, 段纳. 基于神经网络的高阶随机非线性系统的状态反馈控制. 自动化学报, 2014, 40(12): 2968-2972. doi: 10.3724/SP.J.1004.2014.02968

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02968?viewType=HTML

  

\[4\]  李靖, 李俊民, 陈为胜. 随机非线性严格反馈系统的自适应神经网络输出反馈镇定. 自动化学报, 2010, 36(3): 450-453. doi: 10.3724/SP.J.1004.2010.00450

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00450?viewType=HTML

  

\[5\]  陈杰, 李志平, 张国柱. 变结构神经网络自适应鲁棒控制. 自动化学报, 2010, 36(1): 174-178. doi: 10.3724/SP.J.1004.2010.00174

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00174?viewType=HTML

  

\[6\]  王良勇, 柴天佑, 方正. 考虑驱动系统动态的机械手神经网络控制及应用. 自动化学报, 2009, 35(5): 622-626. doi: 10.3724/SP.J.1004.2009.00622

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00622?viewType=HTML

  

\[7\]  魏庆来, 张化光, 崔黎黎. 基于数据自适应评判的离散2-D系统零和博弈最优控制. 自动化学报, 2009, 35(6): 682-692. doi: 10.3724/SP.J.1004.2009.00682

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00682?viewType=HTML

  

\[8\]  石宇静, 柴天佑. 基于神经网络与多模型的非线性自适应广义预测控制. 自动化学报, 2007, 33(5): 540-545. doi: 10.1360/aas-007-0540

http://www.aas.net.cn/cn/article/doi/10.1360/aas-007-0540?viewType=HTML

  

\[9\]  戴先中, 刘国海. 两变频调速电机系统的神经网络逆同步控制. 自动化学报, 2005, 31(6): 890-900.

http://www.aas.net.cn/cn/article/id/15925?viewType=HTML

  

\[10\]  张天平. 基本积分型李亚普诺夫函数的直接自适应神经网络控制. 自动化学报, 2003, 29(6): 996-1001.

http://www.aas.net.cn/cn/article/id/16336?viewType=HTML

  

\[11\]  胡寿松, 周川, 胡维礼. 基于神经网络的模型跟随鲁棒自适应控制. 自动化学报, 2000, 26(5): 623-629.

http://www.aas.net.cn/cn/article/id/16568?viewType=HTML

  

\[12\]  佟绍成, 李庆国, 柴天佑. 基于神经网络的一类非线性系统自适应输出跟踪. 自动化学报, 2000, 26(3): 296-302.

http://www.aas.net.cn/cn/article/id/14737?viewType=HTML

  

\[13\]  王福利, 李明忠. 基于线性化神经网络的一类非线性系统优化迭代控制. 自动化学报, 1999, 25(3): 421-424.

http://www.aas.net.cn/cn/article/id/16701?viewType=HTML

  

\[14\]  孙富春, 孙增圻, 张钹. 基于观测器的机械手神经网络自适应控制. 自动化学报, 1999, 25(3): 295-302.

http://www.aas.net.cn/cn/article/id/16725?viewType=HTML

  

\[15\]  戴先中, 刘军, 冯纯伯. 连续非线性系统的神经网络α阶逆系统控制方法. 自动化学报, 1998, 24(4): 463-468.

http://www.aas.net.cn/cn/article/id/16841?viewType=HTML

  

\[16\]  汪镭, 周国兴, 吴启迪. 基于人工神经网络在线参数跟踪的自适应交流传动系统. 自动化学报, 1997, 23(4): 543-546.

http://www.aas.net.cn/cn/article/id/16982?viewType=HTML

  

\[17\]  李银国, 张邦礼, 曹长修. 非线性控制系统线性化与极点配置的神经网络方法. 自动化学报, 1996, 22(6): 708-712.

http://www.aas.net.cn/cn/article/id/17107?viewType=HTML

  

\[18\]  孙富春, 孙增圻, 张戎军. 采样非线性系统的神经网络稳定自适应控制. 自动化学报, 1996, 22(6): 648-656.

http://www.aas.net.cn/cn/article/id/17099?viewType=HTML

  

\[19\]  苗振江, 袁保宗. 非线性连续联想记忆神经网络的分析和优化设计. 自动化学报, 1995, 21(3): 333-340.

http://www.aas.net.cn/cn/article/id/13963?viewType=HTML

  

\[20\]  倪先锋, 陈宗基, 周绥平. 基于神经网络的非线性学习控制研究. 自动化学报, 1993, 19(3): 307-315.

http://www.aas.net.cn/cn/article/id/14238?viewType=HTML

  

  

**近期文章**

[水下多机器人系统综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076668&idx=1&sn=b50e43710be8208fd711cd45943e95c0&chksm=8131f271b6467b675083610c925ce0d329e201ddab5c8e935eb266fbf41418395459fdd0618d&scene=21#wechat_redirect)

[眼动跟踪研究进展与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076581&idx=1&sn=dab1369362bf1790033e5cf2f5736281&chksm=8131fda8b64674be08cbf0bf3bf5a928115b76ec24e8000cad36820b039d33dedba8a048210e&scene=21#wechat_redirect)

[大规模超环神经网络分岔动力学](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076448&idx=1&sn=3926a4acc1bad049d734ce5ba29d82b1&chksm=8131fd2db646743b29f95e42dc774289a78d92c921f40d1ddf30e217cd33d5a55f8c59194e1b&scene=21#wechat_redirect)

[高速列车精确停车的鲁棒自触发预测控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076380&idx=1&sn=926888acd7b6e6cf70bec42d15253916&chksm=8131fd51b64674471ceaaa5a40db2a223f8879672d00eca42f9485dab23d3c63adbeea3d5f55&scene=21#wechat_redirect)

[混合动力电动汽车的跟车控制与能量管理](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076309&idx=1&sn=104d58cdff1ecc7a4c6918bd6c4bbb0c&chksm=8131fc98b646758ec497a9cc4991aa8c0d80b54aded8dd8c4275655524d3e4c9cb12cd542e83&scene=21#wechat_redirect)

[《自动化学报》2022年第04期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076245&idx=1&sn=8380ebbcbf0ae69c0ad2f7fb428e8303&chksm=8131fcd8b64675cec8932335d68b6f0aa193141095c345d64d2de1dbc28abe1b36a63d742966&scene=21#wechat_redirect)

[【热点专题】目标检测](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962259&idx=1&sn=97b0c31ec704211713ef8cba4bb51b01&chksm=f2943352c5e3ba44f2c7217cff60405765c6d67312beb6d07006155404bfc4b34268956697f5&scene=21#wechat_redirect)

[基于事件触发的分布式优化算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076142&idx=2&sn=b074793ec4be44ea08efb78617dcdcc0&chksm=8131fc63b6467575b7f6d698909e56be16089f8f56ca415294483ff6f40902c7546417f82531&scene=21#wechat_redirect)

[一种针对德州扑克AI的对手建模与策略集成框架](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075800&idx=1&sn=9ab9006d50bb2513c49006b1c1431a3c&chksm=8131fe95b6467783eb58de5d7b1726ddcb881561603c76bdcefa44f4a9a9027afc37b1be979c&scene=21#wechat_redirect)

[工业铸件缺陷无损检测技术的应用进展与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075561&idx=1&sn=afda9a46702ab802788e1c9fc67b5849&chksm=8131f9a4b64670b2c122efca37574a0dceda3582b0477845b80670246b4eb8befce2ae748dc1&scene=21#wechat_redirect)

[《自动化学报》2022年第03期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022斯坦福AI指数报告出炉！点击获取完整报告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075236&idx=3&sn=1caed46e80f613c172a227ead8ddc1a3&chksm=8131f8e9b64671ffa8d6f7c8a36210fe1e262a66a42ab9a544e064d3c725b4a31274a4551750&scene=21#wechat_redirect)

[黄艳龙, 徐德, 谭民. 机器人运动轨迹的模仿学习综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075236&idx=1&sn=ec575c249f6e60709a32a7dfa6b55f37&chksm=8131f8e9b64671ffaf5de201407410a38735b35d7f4e6ab43eb05dac537068fb912ceef808c1&scene=21#wechat_redirect)

  

**热点文章**

[CVPR 2022 | 自动化所新作速览！（上）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=2&sn=48b5232daaa7a51da96c3a7c87013e2d&chksm=8131fb97b6467281dc8e02749df8d0388f89d30e3b08f44d13c700169d1d7a22c4feef9f2dba&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（下）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=3&sn=21833bb312bb0d9826c64c9fce068aa5&chksm=8131fb97b646728147f2bff58a04230d708d5a4537eb824656c2d54580b11f6a47b0eb30ade6&scene=21#wechat_redirect)

[直播回放分享 | 陈关荣教授：探索最优同步网络的拓扑结构](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061608&idx=1&sn=1500a81260d8f5127b7cb7767c759fba&chksm=8f5a9ae4b82d13f201b714d8e96af9bbddf442bb7e10c97416fb925ab2170c05fa12010fb1d1&scene=21#wechat_redirect)

[《自动化学报》2019年高关注论文](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073450&idx=1&sn=6f57bd0df73f259aa416575f1f69bdfb&chksm=8131e1e7b64668f1344de4acdef6148e8dcfa60c80e4f48e6cb1270558c2beade5601e92d05c&scene=21#wechat_redirect)

[《自动化学报》2021年热点文章回顾](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072577&idx=1&sn=4e6be077d7371c7d29d9a371d8defe19&chksm=8131e20cb6466b1aec2f3b8b1063d3be11725ca9a0c15785c3b42a638170e732acd0d8d345e0&scene=21#wechat_redirect)

[国家自然科学基金论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960308&idx=1&sn=1634c999f22588333537f13393403f9c&chksm=f2942b35c5e3a2232e86b51c2b7c8f37a4d3d7f858d370d76d5afd00567d7da6e9543476d120&scene=21#wechat_redirect)  

[国家重点研发计划论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960255&idx=1&sn=f48435928fd924134cb72014860b9d00&chksm=f2942b7ec5e3a26869da68a1419b3b40ca1e6cb98abf2e380d78a49ffb99c85991d76cc346b0&scene=21#wechat_redirect)

  

**期刊动态**

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

  

**期刊目录**

[2022年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962369&idx=1&sn=ae2c4584f8904be917b600e67005ae03&chksm=f29433c0c5e3bad6d78382b3c09015aadb09e040b8fc8c319c4f554fd592fe677797000340cd&scene=21#wechat_redirect)

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgAXxpXqwKOqrodM7U2Q59UxHR2hczKy8hmfW3UtNwRQTe1g0EUjicgcA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH457UfY7WG6dLpSe0071ia2lg7QiaTXOEl8SqJq64lKTEmu7ibwrYTYBZQVmzfCiciawk5BJZAlnD6Macng/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lg4XsTthicRmriaU56XI3DSaVWVfwricxKdlSLKZZg0455DSsux2D2QTNGg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgwOvlgX0rA4WZS5zufH2Gg0ibOmXd6ibGUkxG5lpwBJqo6vYUAwOBYWKg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgqLXfvliaZtAmBLiaypIZSzgpnQLmqKGQiaXDZlCbBmxNjVs0HpXO4FCHA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgpJxJxZoJCcn98YuYbEXskQMkF1gf7HCdaYqarGNaBHgpTBbeib52LlQ/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** 

http://www.aas.net.cn

http://www.ieee-jas.net

**投稿:** 

https://mc03.manuscriptcentral.com/aas-cn   

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**

010-82544653（日常咨询和稿件处理）

010-82544677（录用后稿件处理）  

**邮箱:** 

aas@ia.ac.cn（日常咨询和稿件处理）  

aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**↓ 点击下方 阅读原文 了解更多**