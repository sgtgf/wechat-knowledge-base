# LQR数学推导\_补充


> 原文地址: [https://mp.weixin.qq.com/s/ywc1omQYZeyon6qLe1-MoQ](https://mp.weixin.qq.com/s/ywc1omQYZeyon6qLe1-MoQ)

在[LQR数学推导](https://mp.weixin.qq.com/s?__biz=MzUyNjY0NTkxMQ==&mid=2247485551&idx=1&sn=2e4a6181410a3fff57f221c8aeab6428&scene=21#wechat_redirect)中，基于贝尔曼最优策略，进行了LQR相关的数学推导。下面作几点补充：

# 第一、LQR的本质是基于人为设定的权重策略，自动计算反馈矩阵，实现全状态自动配置闭环极点，其推导更偏数学层面，与纯控制不那么相关，所以推导方式很多，有些还很复杂，需要较高层次的数学知识作铺垫（对自动化、计算机等专业而言），这里采用了一种较容易理解的、基于贝尔曼最优策略的动态规划（DP）方案。且LQR又分连续型与离散型，而工程实践中采用离散型，故这里的推导采用离散型。

# 第二、这里，我们是考虑了末态，即加了终端状态权重S，既考虑了运行代价（基于Q与R）, 又考虑了终端代价（基于S）。如果令S=Q，则只考虑了运行代价，算法就退化为不考虑末态的形式。

# 第三、最终的迭代公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40DtvPtCS1s9VwxrwlloYILtibJMicFTKdmk3EZrbANkicEgmFVib5VONLXoc3I3t66YZS0fLdibRw1KoA/640?wx_fmt=png&from=appmsg)

上述P的更新公式就是大名鼎鼎的离散时间代数黎卡提方程 （Discrete time Algebraic Riccati Equation - DARE）。