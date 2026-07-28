# 基于DPCA残差互异度的故障检测与诊断方法

原创 自动化学报 自动化学报 2022-04-28 16:36 北京

> 原文地址: [https://mp.weixin.qq.com/s/FiSk624vxENahe8JVnSc1g](https://mp.weixin.qq.com/s/FiSk624vxENahe8JVnSc1g)

**点击蓝字|关注我们**

  

**引用本文**

  

张成, 戴絮年, 李元. 基于DPCA残差互异度的故障检测与诊断方法. 自动化学报, 2022, 48(1): 292−301 doi: 10.16383/j.aas.c190884

Zhang Cheng, Dai Xu-Nian, Li Yuan. Fault detection and diagnosis based on residual dissimilarity in dynamic principal component analysis. Acta Automatica Sinica, 2022, 48(1): 292−301 doi: 10.16383/j.aas.c190884

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190884?viewType=HTML

  

**文章简介**

  

**关键词**

  

动态主元分析, 互异度, 滑动窗口, 故障诊断

  

**摘   要**

  

针对动态主元分析方法中残差自相关性降低过程故障检测率问题, 提出基于动态主元分析残差互异度的故障检测与诊断方法. 首先, 应用动态主元分析(Dynamic principal component analysis, DPCA)计算动态过程数据的残差得分; 接下来, 应用滑动窗口技术并结合互异度指标(Dissimilarity)来监控过程残差得分状态; 最后, 利用基于变量贡献图的方法进行过程故障诊断分析. 本文方法通过DPCA捕获过程的动态特征, 同时互异度指标区别于传统的平方预测误差(Square prediction error, SPE), 它可以有效地对具有自相关性的残差得分进行过程状态监控. 通过一个数值例子和Tennessee Eastman (TE)过程的仿真实验并与传统方法对比分析, 仿真结果进一步证实了本文方法的有效性.

  

**引   言**

  

在现代工艺中, 企业对系统更安全更可靠的需要推动了过程故障检测技术的快速发展. 该类技术通过及时检测过程扰动、设备故障等特殊事件, 不仅在保证工艺和人员安全方面起到了重要作用, 而且提高了工艺效率和产品质量. 随着分布式控制系统(Distributed control systems, DCS)对大量变量的自动测量和存储, 多元统计过程监控(Multivariate statistical process monitoring, MSPM)方法被成功地应用于各种工业过程的在线监控领域.

  

针对相关过程变量引起的共线性问题, 主元分析(Principal component analysis, PCA)和偏最小二乘(Partial least squares, PLS)等方法相继被提出并在化工过程检测领域得到了广泛的应用. PCA在过程检测时通常将原始空间分为主元子空间(Principal component subspace, PCS)和残差子空间(Residual subspace, RS), 然后分别使用Hotelling＇s T^2和平方预测误差(Square prediction error, SPE) 作为统计量来监控样本状态. 其中, T^2是归一化主元得分平方和, 即对PCA模型内变化的度量, 而SPE是平方误差之和, 即对PCA模型未捕获变化量的度量. 为了检测非线性过程, 基于核理论的主元分析方法被提出, 即核主元分析(Kernel PCA, KPCA). KPCA的基本思想是首先通过非线性映射将低维样本数据映射到高维特征空间, 然后在特征空间中执行PCA完成故障检测. 值得注意的是, PCA和KPCA方法均应用T^2和SPE两个统计量进行过程状态监控. T^2和SPE能够较好完成过程监控的前提条件是变量服从多元高斯分布且样本间相互独立. 事实上, 众多生产过程, 如石油化工、半导体蚀刻工艺等, 变量间存在较强的非高斯特征且样本间存在自相关特征, 这些显著特征制约了上述方法的故障检测性能. 针对上述不足, Ku等提出了动态主元分析(Dynamic PCA, DPCA). DPCA通过“时滞移位”方法将过程的静态信息和动态信息实现同步提取. 在进行故障检测时, DPCA同样采用T^2和SPE统计量监控样本状态. SPE统计量主要衡量样本在空间上的变化信息, 而没有考虑样本存在时间信息上的变化. 因此当样本具有时刻相关性时, SPE统计量通常无法及时检测出故障. Kano等定义了一个互异度指标来监测过程时间序列数据的分布. 在故障检测时, 互异度方法和DPCA使用不同的统计量监控样本状态. 互异度方法通过对具有不同特征的过程数据分布进行定量分析来检测典型连续过程中操作条件的变化. 近年来, 许多学者对互异度方法进行了深入研究并取得了丰硕的成果, 如Wang等提出了基于互异度方法的渐进式故障检测与诊断方法, Zhao等将互异度方法应用于批次过程故障检测中. 一系列成功的理论研究和应用表明, 互异度方法能够快速、有效地检测过程变量间相关性的变化.

  

DPCA方法能够提取过程的动态变化信息, 其在化工过程故障检测方面的有效性已经得到了验证. 然而, 文献\[21\]指出, 由DPCA获得的主元和残差中仍然保留了较强的自相关性. 这种特征降低了T^2和SPE控制图的故障检测性能. 针对动态主元分析方法中残差自相关性降低过程故障检测率问题, 本文提出基于DPCA残差互异度的故障检测与诊断方法. 首先, 通过DPCA方法将输入数据空间划分成主元子空间和残差子空间. 接下来, 对于残差得分应用滑动窗口技术并结合互异度指标完成对样本状态的监控. 该方法能够降低过程动态特征对故障检测的影响, 通过仿真实验进一步证明了本文方法的有效性.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgexTRLiaC55iboYeo8uibYEslKsXeUziaZ5icpskZZAUheO3ybibxWAGhqZvw/640?wx_fmt=jpeg)

图 1  主元累计方差贡献率

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgoAjwacBmbQGjIXEyVUicKTaibXtpY7WKWJcJEJEzuHnPHSKapFg46HnQ/640?wx_fmt=jpeg)

图 2  DPCA残差得分自相关性

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgFBV0HchAdCnYoOjqFOLLzU5Du7hNJ9MI4IVvK4UicOO3hPZZ3ibvbS9A/640?wx_fmt=jpeg)

图 9  TE过程

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lg2l1Qtud7puhQ3LKG6hqK1DS0FKkocN3NJ9MsnGkYp9NjicyGugl3jQw/640?wx_fmt=jpeg)

**张   成**

沈阳化工大学副教授, 东北大学博士研究生. 主要研究方向为复杂工业过程故障诊断.

E-mail: zhangcheng@syuct.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgMUh8hJHibFMb2g0bnYws8NVwEnNl2yZZvKgwZxE4FKVuHlJ9ACRGCxA/640?wx_fmt=png)

**戴絮年**

沈阳化工大学信息工程学院硕士研究生. 主要研究方向为基于数据驱动的多工况过程故障检测.程监控和故障诊断.

E-mail: daixunian1996@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH457UfY7WG6dLpSe0071ia2lgTXRicE9v9hbtjicRUibPE6CktpLUGrW7bPcpic1EiaUnYrPpPbiaAjXuTMug/640?wx_fmt=jpeg)

**李   元**

沈阳化工大学教授. 2004 年获得东北大学博士学位. 主要研究方向为系统识别, 故障检测, 复杂过程故障诊断. 本文通信作者.

E-mail: li-yuan@mail.tsinghua.edu.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  刘强, 卓洁, 郎自强, 秦泗钊. 数据驱动的工业过程运行监控与自优化研究展望. 自动化学报, 2018, 44(11): 1944-1956. doi: 10.16383/j.aas.2018.c180207

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180207?viewType=HTML

  

\[2\]  张成, 高宪文, 李元.基于k近邻主元得分差分的故障检测策略.自动化学报, 2020, 46(10): 2229-2238 doi: 10.16383/j.aas.c180163

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180163?viewType=HTML

  

\[3\]  赵孝礼, 赵荣珍. 全局与局部判别信息融合的转子故障数据集降维方法研究. 自动化学报, 2017, 43(4): 560-567. doi: 10.16383/j.aas.2017.c160317

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160317?viewType=HTML

  

\[4\]   彭开香, 马亮, 张凯. 复杂工业过程质量相关的故障检测与诊断技术综述. 自动化学报, 2017, 43(3): 349-365. doi: 10.16383/j.aas.2017.c160427

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160427?viewType=HTML

  

\[5\]  徐晓滨, 张镇, 李世宝, 文成林. 基于诊断证据静态融合与动态更新的故障诊断方法. 自动化学报, 2016, 42(1): 107-121. doi: 10.16383/j.aas.2016.c150403

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150403?viewType=HTML

  

\[6\]  周东华, 史建涛, 何潇. 动态系统间歇故障诊断技术综述. 自动化学报, 2014, 40(2): 161-171. doi: 10.3724/SP.J.1004.2014.00161

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00161?viewType=HTML

  

\[7\]  周东华, 刘洋, 何潇. 闭环系统故障诊断技术综述. 自动化学报, 2013, 39(11): 1933-1943. doi: 10.3724/SP.J.1004.2013.01933

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.01933?viewType=HTML

  

\[8\]  樊继聪, 王友清, 秦泗钊. 联合指标独立成分分析在多变量过程故障诊断中的应用. 自动化学报, 2013, 39(5): 494-501. doi: 10.3724/SP.J.1004.2013.00494

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00494?viewType=HTML

  

\[9\]  文成林, 胡玉成. 基于信息增量矩阵的故障诊断方法. 自动化学报, 2012, 38(5): 832-840. doi: 10.3724/SP.J.1004.2012.00832

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00832?viewType=HTML

  

\[10\]  朱群, 张玉红, 胡学钢, 李培培. 一种基于双层窗口的概念漂移数据流分类算法. 自动化学报, 2011, 37(9): 1077-1084. doi: 10.3724/SP.J.1004.2011.01077

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01077?viewType=HTML

  

\[11\]  张颖伟, 周宏, 秦泗钊. 基于多块核主元分析的复杂过程的分散故障诊断. 自动化学报, 2010, 36(4): 593-597. doi: 10.3724/SP.J.1004.2010.00593

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00593?viewType=HTML

  

\[12\]  甄子洋, 王道波, 王志胜. 基于蚁群优化算法的精密伺服转台故障诊断方法. 自动化学报, 2009, 35(6): 780-784. doi: 10.3724/SP.J.1004.2009.00780

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00780?viewType=HTML

  

\[13\]  李钢, 秦泗钊, 吉吟东, 周东华. 基于T-PLS贡献图方法的故障诊断技术. 自动化学报, 2009, 35(6): 759-765. doi: 10.3724/SP.J.1004.2009.00759

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00759?viewType=HTML

  

\[14\]  王宏, 柴天佑, 丁进良, 布朗·马丁. 数据驱动的故障诊断与容错控制:进展与可能的新方向. 自动化学报, 2009, 35(6): 739-747. doi: 10.3724/SP.J.1004.2009.00739

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00739?viewType=HTML

  

\[15\]  周东华, 胡艳艳. 动态系统的故障诊断技术. 自动化学报, 2009, 35(6): 748-758. doi: 10.3724/SP.J.1004.2009.00748

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00748?viewType=HTML

  

\[16\]  段琢华, 蔡自兴, 于金霞. 不完备多模型混合系统故障诊断的粒子滤波算法. 自动化学报, 2008, 34(5): 581-587. doi: 10.3724/SP.J.1004.2008.00581

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00581?viewType=HTML

  

\[17\]  文成林, 胡静, 王天真, 陈志国. 相对主元分析及其在数据压缩和故障诊断中的应用研究. 自动化学报, 2008, 34(9): 1129-1140. doi: 10.3724/SP.J.1004.2008.01128

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.01128?viewType=HTML

  

\[18\]  萧德云, 莫以为. 基于混合系统状态估计的故障诊断. 自动化学报, 2004, 30(6): 980-985.

http://www.aas.net.cn/cn/article/id/16281?viewType=HTML

  

\[19\]  刘开第, 曹庆奎, 庞彦军. 基于未确知集合的故障诊断方法. 自动化学报, 2004, 30(5): 747-756.

http://www.aas.net.cn/cn/article/id/16246?viewType=HTML

  

\[20\]  吕琛, 王桂增, 邱庆刚. 基于声信号小波包分析的故障诊断. 自动化学报, 2004, 30(4): 554-559.

http://www.aas.net.cn/cn/article/id/16284?viewType=HTML

  

\[21\]  宋华, 张洪钺. 模糊非线性奇偶方程故障诊断方法. 自动化学报, 2003, 29(6): 965-970.

http://www.aas.net.cn/cn/article/id/16330?viewType=HTML

  

\[22\]  马智明, 阳宪惠. 采用主元分析的过程故障诊断方法. 自动化学报, 2000, 26(增刊B): 125-129.

http://www.aas.net.cn/cn/article/id/16497?viewType=HTML

  

\[23\]  谭民, 疏松桂. 递归联想记忆及在故障诊断中的应用. 自动化学报, 1991, 17(4): 476-480.

http://www.aas.net.cn/cn/article/id/14569?viewType=HTML

  

\[24\]  谭民, 疏松桂. 神经元网络在故障诊断中的双向联想记忆法. 自动化学报, 1991, 17(1): 95-99.

http://www.aas.net.cn/cn/article/id/14635?viewType=HTML

  

  

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

  

**点击****阅读原文** **了解更多**