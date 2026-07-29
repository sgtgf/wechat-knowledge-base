# 基于自适应LASSO先验的稀疏贝叶斯学习算法

原创 自动化学报 自动化学报 2022-04-26 15:54 北京

> 原文地址: [https://mp.weixin.qq.com/s/1qwW60g0qS3fgKcsHNK0Vg](https://mp.weixin.qq.com/s/1qwW60g0qS3fgKcsHNK0Vg)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_000_53de5aa1fadb.gif)

**点击蓝字 关注我们**

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_001_53de5aa1fadb.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_002_d0df4cf7e187.jpg)

  

**引****用本文**

  

白宗龙, 师黎明, 孙金玮. 基于自适应LASSO先验的稀疏贝叶斯学习算法. 自动化学报, 2022, 48(5): 1193−1208 doi: 10.16383/j.aas.c210022      

Bai Zong-Long, Shi Li-Ming, Sun Jin-Wei. Sparse Bayesian learning using adaptive LASSO priors. Acta Automatica Sinica, 2022, 48(5): 1193−1208 doi: 10.16383/j.aas.c210022  

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210022?viewType=HTML

  

**文章简介**

  

**关键词**

  

稀疏信号恢复, 稀疏贝叶斯学习, 自适应LASSO先验, 贝叶斯推断

  

**摘   要**

  

为了提高稀疏信号恢复的准确性, 开展了基于自适应套索算子(Least absolute shrinkage and selection operator, LASSO)先验的稀疏贝叶斯学习(Sparse Bayesian learning, SBL)算法研究. 第一, 在稀疏贝叶斯模型构建阶段, 构造了一种新的多层贝叶斯框架, 赋予信号中元素独立的LASSO先验. 该先验比现有稀疏先验更有效的鼓励稀疏并且该模型中所有参数更新存在闭合解. 然后在该多层贝叶斯框架的基础上提出了一种基于自适应LASSO先验的SBL算法. 第二, 为降低提出的算法的计算复杂度, 在贝叶斯推断阶段利用空间轮换变元方法对提出的算法进行改进, 避免了矩阵求逆运算, 使参数更新快速高效, 从而提出了一种基于自适应LASSO先验的快速SBL算法. 本文提出的算法的稀疏恢复性能通过实验进行了验证, 分别针对不同大小测量矩阵的稀疏信号恢复以及单快拍波达方向(Direction of arrival, DOA)估计开展了实验. 实验结果表明: 提出基于自适应LASSO先验的SBL算法比现有算法具有更高的稀疏恢复准确度; 提出的快速算法的准确度略低于提出的基于自适应LASSO先验的SBL算法, 但计算复杂度明显降低.

  

**引   言**

  

稀疏信号恢复具有广泛的应用性和充分的理论支持, 因此成为信号处理领域中的一个重要且受到持续关注的研究课题. 稀疏信号恢复可应用于麦克风阵列信号处理, 图像处理, 脑电信号处理, 雷达信号处理等领域. 目前, 有多种稀疏信号恢复算法被提出, 主要包括基于ℓ\_p范数(0<p≤1)惩罚项的凸优化算法, 贪婪算法, 贝叶斯方法. 其中, 基于ℓ\_p范数惩罚项的凸优化算法有基追踪去噪(Basis pursuit denoise, BPDN), 欠定系统聚焦求解(Focal underdetermined system solver, FOCUSS)等, 贪婪算法有正交匹配追踪(Orthgornal matching pursuit, OMP), 压缩采样匹配追踪(Compressive sampling matching pursuit, CoSaMP)等, 贝叶斯方法有稀疏贝叶斯学习(Sparse Bayesian learning, SBL)等. 基于ℓ\_p范数惩罚项的凸优化算法在给定合适的正则因子时可以取得比较好的稀疏恢复效果, 但是在实际应用中, 正则化因子的选取通常比较困难, 一般通过经验选取导致对算法环境变化不鲁棒. 贪婪算法在已知源信号的稀疏度的条件下表现良好, 信号恢复效果在源信号稀疏度未知的体条件下变差, 而实际应用中源信号稀疏度很难获得, 限制了该类算法的应用. 贝叶斯算法具有自回归与不确定性估计的特性, 可以自适应学习正则化因子, 并且可以提供具有不确定度的估计结果. 因此, 基于SBL的稀疏信号恢复算法受到越来越多的关注.

  

SBL与其它贝叶斯算法类似, 通过赋予信号稀疏先验分布, 最大化后验分布得到信号的估计. 与其它贝叶斯方法不同的是SBL采取构建多层贝叶斯框架的方式赋予信号中每个元素独立的稀疏分布, 根据稀疏分布的不同, SBL可以分为基于Student-t先验的SBL, 基于Laplace先验的SBL, 基于合成LASSO先验的分布等. SBL最早在文献\[16\]中提出, 该文献中构建了一种多层贝叶斯框架, 通过赋予信号中每个元素多层共轭先验, 等价赋予信号Student-t稀疏先验. 多层共轭先验的贝叶斯框架的构造使得模型中每层参数可以依次更新. 类似的, 文献\[17\]提出一种基于Laplace先验的多层贝叶斯框架. 文献\[18\]中提出一种针对复值信号的自聚焦的基于Laplace先验的多层贝叶斯框架. 文献\[19\]中提出一种基于合成LASSO先验的多层贝叶斯框架, 赋予信号LASSO先验. 由于LASSO分布缺少共轭先验, 文中采用了高斯接近的方法进行求解. 该文献对应于在文献\[20\]中提出的一种基于凸优化的自适应LASSO算法.

  

由于SBL算法在参数更新时需要矩阵求逆运算, 导致计算量很高. 为降低计算复杂度, 文献\[21\]提出一种基于基选择的快速SBL算法, 文献\[17\]给出了Lalapce先验下基于基选择的快速算法, 但是该算法无法推广至复值信号模型. 文献\[22\]提出一种基于最大化证据下界的快速算法, 但是该算法稳定性欠佳, 存在不收敛的情况. 文献\[23\]提出一种基于近似消息传递(Approximate message passing, AMP)的SBL算法, 并在文献\[24\]针对相干信号进行进一步改进. 文献\[25\]提出一种基于空间轮换的SBL算法. 文献\[26\]在\[25\]基础上提出一种应用于大数据量的基于标量平均场的SBL算法.

  

为提高稀疏信号恢复的准确性, 本文开展了基于自适应LASSO先验的SBL算法研究. 在贝叶斯模型构造阶段, 本文中通过构建一种与现有SBL算法不同的多层贝叶斯框架, 赋予信号中每个元素具有独立权重的LASSO先验, 比现有稀疏先验更有效的鼓励稀疏. 根据该多层贝叶斯框架提出一种基于自适应LASSO先验的SBL算法. 为进一步降低提出算法的计算复杂度, 在贝叶斯推断阶段利用空间轮换技术避免矩阵求逆运算, 形成一种快速算法.

  

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_003_8578786925f8.jpg)

图 17  DOA估计的准确度与测量数的关系

  

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_004_ca591488443f.jpg)

图 18  DOA估计准确度与信噪比的关系

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_005_6e28d86c55a7.jpg)

**白宗龙**

哈尔滨工业大学仪器科学与工程学院博士研究生, 主要研究方向为稀疏信号恢复, 麦克风阵列信号处理.

E-mail: baizongyao@163.com

![](D:\电脑文件\公众号知识库\控制_理论_应用\基于自适应LASSO先验的稀疏贝叶斯学习算法_images\img_000_5fbb86e6554b.jpg)

**师黎明**

奥尔堡大学建筑设计与媒体艺术系博士后. 主要研究方向为稀疏信号处理, 语音信号处理.

E-mail: ls@create.aau.dk

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_007_78c466148e91.jpg)

**孙金玮**

哈尔滨工业大学仪器科学与工程学院教授. 主要研究方向为生物信号处理, 主动噪声控制. 本文通讯作者.

E-mail: jwsun@hit.edu.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  史大威, 蔡德恒, 刘蔚, 王军政, 纪立农. 面向智能血糖管理的餐前胰岛素剂量贝叶斯学习优化方法. 自动化学报. doi: 10.16383/j.aas.c210067

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210067?viewType=HTML

  

\[2\]  闫浩, 王福利, 孙钰沣, 何大阔. 基于贝叶斯网络参数迁移学习的电熔镁炉异常工况识别. 自动化学报, 2021, 47(1): 197-208. doi: 10.16383/j.aas.c200104

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200104?viewType=HTML

  

\[3\]  郑文博, 王坤峰, 王飞跃. 基于贝叶斯生成对抗网络的背景消减算法. 自动化学报, 2018, 44(5): 878-890. doi: 10.16383/j.aas.2018.c170562

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170562?viewType=HTML

  

\[4\]  张宏欣, 周穗华, 张伽伟. 磁偶极子跟踪的渐进贝叶斯滤波方法. 自动化学报, 2017, 43(5): 822-834. doi: 10.16383/j.aas.2017.c160052

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160052?viewType=HTML

  

\[5\]  冉智勇, 胡包钢. 统计机器学习中参数可辨识性研究及其关键问题. 自动化学报, 2017, 43(10): 1677-1686. doi: 10.16383/j.aas.2017.c160720

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160720?viewType=HTML

  

\[6\]  俞斌峰, 季海波. 稀疏贝叶斯混合专家模型及其在光谱数据标定中的应用. 自动化学报, 2016, 42(4): 566-579. doi: 10.16383/j.aas.2016.c150255

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150255?viewType=HTML

  

\[7\]  伍飞云, 周跃海, 童峰. 基于似零范数和混合优化的压缩感知信号快速重构算法. 自动化学报, 2014, 40(10): 2145-2150. doi: 10.3724/SP.J.1004.2014.02145

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02145?viewType=HTML

  

\[8\]  张林, 刘辉. DNA甲基化微阵列的非参数贝叶斯聚类算法. 自动化学报, 2012, 38(10): 1709-1713. doi: 10.3724/SP.J.1004.2012.01709

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01709?viewType=HTML

  

\[9\]  赵顺毅, 刘飞. 非线性非齐次Markov跳变系统的贝叶斯滤波. 自动化学报, 2012, 38(3): 485-490. doi: 10.3724/SP.J.1004.2012.00485

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00485?viewType=HTML

  

\[10\]  韩敏, 李德才. 基于替代函数及贝叶斯框架的1范数ELM算法. 自动化学报, 2011, 37(11): 1344-1350. doi: 10.3724/SP.J.1004.2011.01344

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01344?viewType=HTML

  

\[11\]  高晓光, 陈海洋, 史建国. 变结构动态贝叶斯网络的机制研究. 自动化学报, 2011, 37(12): 1435-1444. doi: 10.3724/SP.J.1004.2011.01435

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01435?viewType=HTML

  

\[12\]  李聪, 骆志刚, 石金龙. 一种探测推荐系统托攻击的无监督算法. 自动化学报, 2011, 37(2): 160-167. doi: 10.3724/SP.J.1004.2011.00160

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00160?viewType=HTML

  

\[13\]  周宇, 张林让, 刘昕, 刘楠. 非均匀杂波环境下基于贝叶斯方法的自适应检测. 自动化学报, 2011, 37(10): 1206-1212. doi: 10.3724/SP.J.1004.2011.01206

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01206?viewType=HTML

  

\[14\]  朱明敏, 刘三阳, 汪春峰. 基于先验节点序学习贝叶斯网络结构的优化方法. 自动化学报, 2011, 37(12): 1514-1519. doi: 10.3724/SP.J.1004.2011.01514

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01514?viewType=HTML

  

\[15\]  冀俊忠, 张鸿勋, 胡仁兵, 刘椿年. 一种基于独立性测试和蚁群优化的贝叶斯网学习算法. 自动化学报, 2009, 35(3): 281-288. doi: 10.3724/SP.J.1004.2009.00281

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00281?viewType=HTML

  

\[16\]  王双成, 冷翠平, 李小琳. 小数据集的贝叶斯网络结构学习. 自动化学报, 2009, 35(8): 1063-1070. doi: 10.3724/SP.J.1004.2009.01063

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.01063?viewType=HTML

  

\[17\]  金乃高, 殷福亮, 陈喆. 基于动态贝叶斯网络的音视频联合说话人跟踪. 自动化学报, 2008, 34(9): 1083-1089. doi: 10.3724/SP.J.1004.2008.01083

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.01083?viewType=HTML

  

\[18\]  苏宏升. 基于贝叶斯最优分类器的多源模糊信息融合方法. 自动化学报, 2008, 34(3): 282-287. doi: 10.3724/SP.J.1004.2008.00282

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00282?viewType=HTML

  

\[19\]  周玮, 苏剑波. 一种基于用户意图建模的Internet移动机器人控制方法. 自动化学报, 2006, 32(5): 819-823.

http://www.aas.net.cn/cn/article/id/13771?viewType=HTML

  

\[20\]  刘志强. 因果关系,贝叶斯网络与认知图. 自动化学报, 2001, 27(4): 552-566.

http://www.aas.net.cn/cn/article/id/16438?viewType=HTML

  

  

  

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

  

  

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_008_0ecd21b34945.png)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_009_1a185dfbcf9a.png)

  

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_010_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_011_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_012_d35ee276ce66.jpg)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_013_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_014_72defbedd87c.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_015_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_016_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_017_a5b172f1d678.jpg)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_018_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_019_72defbedd87c.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_020_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_021_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_022_42afdb32af41.jpg)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_023_72defbedd87c.gif)

![](基于自适应LASSO先验的稀疏贝叶斯学习算法_images/img_024_72defbedd87c.gif)

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