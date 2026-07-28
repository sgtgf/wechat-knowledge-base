# 一种针对德州扑克AI的对手建模与策略集成框架

原创 自动化学报 自动化学报 2022-04-06 16:37 北京

> 原文地址: [https://mp.weixin.qq.com/s/nTLKCxyPMu9YfSOL-uE75g](https://mp.weixin.qq.com/s/nTLKCxyPMu9YfSOL-uE75g)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZfiag2lX90rBpQltwQfUUbWpdIKzoUH8QoVFtrfS79j0c2njXPPTdIiaA/640?wx_fmt=gif)

**点击蓝字 关注我们**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZfiag2lX90rBpQltwQfUUbWpdIKzoUH8QoVFtrfS79j0c2njXPPTdIiaA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZrZMvnCjNcFyElUL93VsoKO3PxZ4F02OllfgrxnTGMficqyibhOiaOkHCQ/640?wx_fmt=jpeg)

  

**引****用本文**

  

张蒙, 李凯, 吴哲, 臧一凡, 徐航, 兴军亮. 一种针对德州扑克AI的对手建模与策略集成框架. 自动化学报, 2022, 48(4): 1018−1031 doi: 10.16383/j.aas.c210127

Zhang Meng, Li Kai, Wu Zhe, Zang Yi-Fan, Xu Hang, Xing Jun-Liang. An opponent modeling and strategy integration framework for Texas Hold’em. Acta Automatica Sinica, 2022, 48(4): 1018−1031 doi: 10.16383/j.aas.c210127

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210127?viewType=HTML  

  

**文章简介**

  

**关键词**

  

不完美信息博弈, 德州扑克, 演化学习, 在线对手建模, 种群策略集成

  

**摘   要**

  

以德州扑克游戏为代表的大规模不完美信息博弈是现实世界中常见的一种博弈类型. 现有以求解纳什均衡策略为目标的主流德州扑克求解算法存在依赖博弈树模型、算力消耗大、策略过于保守等问题, 导致智能体在面对不同对手时无法最大化自身收益. 为解决上述问题, 提出一种轻量高效且能快速适应对手策略变化进而剥削对手的不完美信息博弈求解框架. 本框架分为智能体离线训练和在线博弈两个阶段. 第1阶段基于演化学习思想训练智能体, 得到能够剥削不同博弈风格对手的策略神经网络. 在第2博弈阶段中, 智能体在线建模并适应未知风格对手, 利用种群策略集成的方法最大化剥削对手. 在两人无限注德州扑克环境中的实验结果表明, 本框架在面对动态对手策略时, 相比已有方法能够大幅提升博弈性能.

  

**引   言**

  

计算机博弈与人工智能的发展一直相辅相成. 自人工智能(Artificial intelligence, AI)学科诞生伊始, 计算机博弈研究就是AI技术发展创新的沃土, AI领域的先驱图灵和香农都曾研发过计算机博弈程序. 用于测试机器是否具有“智能”的图灵测试, 其实现形式就是通过人和机器之间博弈进行的. 智能博弈一直都是衡量AI技术发展水平的重要评价准则, AI发展历史上的主要里程碑事件都与计算机智能博弈游戏研究相关. 1962年6月机器学习之父阿瑟·塞缪尔的西洋跳棋程序战胜美国著名职业选手尼雷、1997年5月IBM公司的超级电脑“深蓝”战胜国际象棋大师卡斯帕罗夫等,都是AI学科早期发展历史上重要的里程碑事件.

  

近年来, 计算机的存储与计算能力不断提升, 以及各类数据的爆炸式增长与积累, 以人工神经网络为主要技术工具的深度学习方法, 因其强大的数据拟合能力与泛化能力, 使其在语音识别、图像识别和自然语言处理等领域都取得了突破性进展, 成功推进了AI领域由感知智能到认知智能的跨越. 如今, AI领域正在经历从认知智能迈向决策智能的过程, 以强化学习与深度学习相结合的深度强化学习方法, 在围棋博弈领域取得了重大突破并成功打败人类顶尖选手, 为完美信息场景下的博弈决策问题提供了有效的方法指导. 而智能体如何在其所处状态信息不完全已知的情况下做出准确的决策, 是目前AI领域面临的核心问题. 因此, 不完美信息博弈场景下智能决策问题的研究和解决, 是AI取得突破的核心前沿领域和重要驱动力.

  

游戏是一种虚拟的实验环境, 具有可控损失的优点, 实验成本低且允许实验失败. 博弈游戏本身又存在很多难点, 具有决策空间复杂、实时高动态、信息不完美等特点, 能够为智能决策问题研究提供一种良好的算法实验环境, 是AI技术绝佳的实验研究平台. 不完美信息博弈游戏是指智能体在游戏中只能够获得自身的游戏状态以及公共游戏信息, 而无法掌握全部的局面信息, 例如在德州扑克、麻将、斗地主等游戏博弈过程中对手的手牌不可见, 因此获得的局面信息是不完美的, 这也使此类博弈游戏的研究和解决更具挑战性.

  

现实生活中, 在军事、经济、商业、网络安全等实际场景中的大多问题, 均属于不完美信息博弈问题. 此类问题的研究和解决往往受到实际环境的成本制约, 而将其转化为对博弈游戏抽象模型的求解寻优问题可以大幅降低所需实验成本. 因此, 以不完美信息博弈游戏为载体的研究, 能够为现实问题的解决提供有效的方法论.

  

本文选择德州扑克游戏作为对不完美信息博弈的主要研究和实验对象, 以演化学习方法和深度神经网络相结合完成对智能体的训练, 通过在线的对手风格建模和种群策略集成的方法使智能体能够适应对手策略变化, 最终实现一种轻量高效并对解决不完美信息博弈问题具有通用性的博弈求解框架.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZrsqBckxlNnmqWxZiaP9fJPRZy5hCfvCH5bVI4vwdpSL26GvRTWy8H1Q/640?wx_fmt=jpeg)

图 1  德州扑克游戏牌型大小规则

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZnRN9rLlyK8bu3bn91J9RWI7Emibb1dibbAk8jvnvsTWwb4dIvRo87SeA/640?wx_fmt=jpeg)

图 3  对手池策略空间与博弈风格类型定义

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZKzqjKlBFQRBpiaS6Axv4cS1jic4ZvM4XufUxLqWP24zZmVn1FF90jbew/640?wx_fmt=jpeg)

图 11  对打测评过程中博弈性能变化

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZvM8pzuibfWsXzAQdzH206Etg167WS485RqOFiatiats9P2ZBWMMmv1JHg/640?wx_fmt=png)

**张   蒙**

中国科学院自动化研究所硕士研究生. 2018年获吉林大学学士学位. 主要研究方向为计算机博弈与强化学习.

E-mail: acrida@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZwNGdiboavj4bn0pSdjW4sbS8vD9sic41zrsPZDvJ9SQibSicZvfJEyib1hg/640?wx_fmt=jpeg)

**李   凯**

中国科学院自动化研究所副研究员. 2018年获中国科学院自动化研究所博士学位. 主要研究方向为大规模不完美信息博弈和多智能体深度强化学习.

E-mail: kai.li@ia.ac.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZbz5r5ERlIGiaBkwExl1dtyxFN4xQ0hOdUMEzN2ZIYgjzXUPf24zVibAw/640?wx_fmt=png)

**吴   哲**

中国科学院自动化研究所硕士研究生. 2019年获山东大学工学学士学位. 主要研究方向为计算机博弈与强化学习.

E-mail: wuzhe2019@ia.ac.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZFfdicMkeKn22KvlqOJzP6vMHFyQVwqz1qMCe6iaFNc6OH81vYQqc8pPw/640?wx_fmt=png)

**臧一凡**

中国科学院自动化研究所博士研究生. 2019年获吉林大学理学学士学位. 主要研究方向为多智能体系统与强化学习.

E-mail: zangyifan2019@ia.ac.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZicvweNy0gSF2Jb7ERvbV6FNGvQ8rs98FhXhLkJ3GFSj4JGp4aggd0EA/640?wx_fmt=jpeg)

**徐   航**

中国科学院自动化研究所硕士研究生. 2020年获武汉大学工学学士学位. 主要研究方向为计算机博弈与强化学习.

E-mail: xuhang2020@ia.ac.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZJDqEJFPc640eU3EMgQMJFApr8sEY68gNTY6N5ibnlYmPtSdPPjvpntw/640?wx_fmt=jpeg)

**兴军亮**

中国科学院自动化研究所研究员. 中国科学院大学岗位教授. 2012年获清华大学博士学位. 主要研究方向为计算机博弈. 本文通信作者.

E-mail: jlxing@nlpr.ia.ac.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  刘坤, 郑晓帅, 林业茗, 韩乐, 夏元清. 基于微分博弈的追逃问题最优策略设计. 自动化学报, 2021, 47(8): 1840-1854. doi: 10.16383/j.aas.c200979

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200979?viewType=HTML

  

\[2\]  袁兆麟, 何润姿, 姚超, 李佳, 班晓娟. 基于强化学习的浓密机底流浓度在线控制算法. 自动化学报, 2021, 47(7): 1558-1571. doi: 10.16383/j.aas.c190348

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190348?viewType=HTML

  

\[3\]  梁星星, 冯旸赫, 马扬, 程光权, 黄金才, 王琦, 周玉珍, 刘忠. 多Agent深度强化学习综述. 自动化学报, 2020, 46(12): 2537-2557. doi: 10.16383/j.aas.c180372

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180372?viewType=HTML

  

\[4\]  裴洪, 胡昌华, 司小胜, 张正新, 杜党波. 不完美维护下基于剩余寿命预测信息的设备维护决策模型. 自动化学报, 2018, 44(4): 719-729. doi: 10.16383/j.aas.2017.c160534

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160534?viewType=HTML

  

\[5\]  袁勇, 王飞跃. 不完全信息议价博弈的序贯均衡分析与计算实验. 自动化学报, 2016, 42(5): 724-734. doi: 10.16383/j.aas.2016.c150554

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150554?viewType=HTML

  

\[6\]  高文科, 张志胜, 周一帆, 刘飏, 刘祺. 存在故障相关及不完备检测的主辅并联系统可靠性建模与维修策略. 自动化学报, 2015, 41(12): 2100-2114. doi: 10.16383/j.aas.2015.c140735

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2015.c140735?viewType=HTML

  

\[7\]  郭东伟, 乌云娜, 邹蕴, 孟祥燕. 基于非理性博弈的舆情传播仿真建模研究. 自动化学报, 2014, 40(8): 1721-1732. doi: 10.3724/SP.J.1004.2014.01721

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01721?viewType=HTML

  

\[8\]  曹建平, 王晖, 夏友清, 乔凤才, 张鑫. 基于LDA的双通道在线主题演化模型. 自动化学报, 2014, 40(12): 2877-2886. doi: 10.3724/SP.J.1004.2014.02877

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02877?viewType=HTML

  

\[9\]  汤健, 柴天佑, 余文, 赵立杰. 在线KPLS建模方法及在磨机负荷参数集成建模中的应用. 自动化学报, 2013, 39(5): 471-486. doi: 10.3724/SP.J.1004.2013.00471

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00471?viewType=HTML

  

\[10\]  胡艳丽, 白亮, 张维明. 一种话题演化建模与分析方法. 自动化学报, 2012, 38(10): 1690-1697. doi: 10.3724/SP.J.1004.2012.01690

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01690?viewType=HTML

  

\[11\]  程玉虎, 冯涣婷, 王雪松. 基于状态-动作图测地高斯基的策略迭代强化学习. 自动化学报, 2011, 37(1): 44-51. doi: 10.3724/SP.J.1004.2011.00044

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00044?viewType=HTML

  

\[12\]  蒋建国, 苏兆品, 齐美彬, 张国富. 基于强化学习的多任务联盟并行形成策略. 自动化学报, 2008, 34(3): 349-352. doi: 10.3724/SP.J.1004.2008.00349

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00349?viewType=HTML

  

\[13\]  曾加, 慕春棣. 基于不完全信息博弈的传感器网络能量平衡路由. 自动化学报, 2008, 34(3): 317-322. doi: 10.3724/SP.J.1004.2008.00317

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00317?viewType=HTML

  

\[14\]  王长军, 席裕庚. 单机调度的非合作博弈建模与分析. 自动化学报, 2005, 31(4): 516-522.

http://www.aas.net.cn/cn/article/id/13317?viewType=HTML

  

\[15\]  阎岭, 蒋静坪. 进化学习策略收敛性和逃逸能力的研究. 自动化学报, 2005, 31(6): 873-880.

http://www.aas.net.cn/cn/article/id/15947?viewType=HTML

  

\[16\]  高阳, 陈世福, 陆鑫. 强化学习研究综述. 自动化学报, 2004, 30(1): 86-100.

http://www.aas.net.cn/cn/article/id/16352?viewType=HTML

  

\[17\]  郭文革, 陈珽. 信息不完全下的组合仲裁. 自动化学报, 1998, 24(1): 56-63.

http://www.aas.net.cn/cn/article/id/16908?viewType=HTML

  

\[18\]  王晓蒲, 霍剑青, 刘同怀. 用相关卷积运算提取特征信息的神经网络对手写数字的识别方法. 自动化学报, 1996, 22(1): 123-125.

http://www.aas.net.cn/cn/article/id/17196?viewType=HTML

  

\[19\]  汪涛, 邢小良. 感知器的动态稀疏化学习. 自动化学报, 1995, 21(1): 93-98.

http://www.aas.net.cn/cn/article/id/14004?viewType=HTML

  

\[20\]  邓聚龙. 参数不完全系统的最小信息镇定. 自动化学报, 1982, 8(1): 49-54.

http://www.aas.net.cn/cn/article/id/15418?viewType=HTML

  

  

**近期文章**

[《自动化学报》2022年第03期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022斯坦福AI指数报告出炉！点击获取完整报告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075236&idx=3&sn=1caed46e80f613c172a227ead8ddc1a3&chksm=8131f8e9b64671ffa8d6f7c8a36210fe1e262a66a42ab9a544e064d3c725b4a31274a4551750&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（上）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=2&sn=48b5232daaa7a51da96c3a7c87013e2d&chksm=8131fb97b6467281dc8e02749df8d0388f89d30e3b08f44d13c700169d1d7a22c4feef9f2dba&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（下）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=3&sn=21833bb312bb0d9826c64c9fce068aa5&chksm=8131fb97b646728147f2bff58a04230d708d5a4537eb824656c2d54580b11f6a47b0eb30ade6&scene=21#wechat_redirect)

[直播回放分享 | 陈关荣教授：探索最优同步网络的拓扑结构](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061608&idx=1&sn=1500a81260d8f5127b7cb7767c759fba&chksm=8f5a9ae4b82d13f201b714d8e96af9bbddf442bb7e10c97416fb925ab2170c05fa12010fb1d1&scene=21#wechat_redirect)

  

**热点文章**

[《自动化学报》2019年高关注论文](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073450&idx=1&sn=6f57bd0df73f259aa416575f1f69bdfb&chksm=8131e1e7b64668f1344de4acdef6148e8dcfa60c80e4f48e6cb1270558c2beade5601e92d05c&scene=21#wechat_redirect)

[《自动化学报》2021年热点文章回顾](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072577&idx=1&sn=4e6be077d7371c7d29d9a371d8defe19&chksm=8131e20cb6466b1aec2f3b8b1063d3be11725ca9a0c15785c3b42a638170e732acd0d8d345e0&scene=21#wechat_redirect)

[国家自然科学基金论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960308&idx=1&sn=1634c999f22588333537f13393403f9c&chksm=f2942b35c5e3a2232e86b51c2b7c8f37a4d3d7f858d370d76d5afd00567d7da6e9543476d120&scene=21#wechat_redirect)  

[国家重点研发计划论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960255&idx=1&sn=f48435928fd924134cb72014860b9d00&chksm=f2942b7ec5e3a26869da68a1419b3b40ca1e6cb98abf2e380d78a49ffb99c85991d76cc346b0&scene=21#wechat_redirect)

[中国科学院自动化研究所高层次人才招聘启事 | 长期有效](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959451&idx=1&sn=657b7e4aeeaa88114d5189641c5409dc&chksm=f294285ac5e3a14cd230a2b9678c32ba9bf92e8ffc9d61d506c5ffea2df793456dd37c2c6fb1&scene=21#wechat_redirect)

  

**期刊动态**

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

  

**期刊目录**

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZL0iaKic1fiaDxqfrgyPy7ozoREjwfz79BOFsf2LYyL7eefkEnoYy90zRA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZgs2IWR7sgTTg1vdOhsOCbc9RDbeF94K0JqbmJub54rVDK3ruuFCUicQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZJCTRKkyMsLwUxQX6yXM0AEsTa0uZB79gjjdDzticLtuaNBGZLDV9Zmg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZc3GBqGiaFxBB5Bzoz41alvRYicjoibqqhYY5ghVq2RN8b42rK6RjoAFtA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZAxY3PTDaZW5Zpte141QBzexEib19vI3OZibWwYogEYK8BIjJNiaWdicT5A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47n9er3d4KnzWsDgae8B2CZb7vNv7iaQypK2x07Rr6ic5sic2wcIKcjgTdoCGfqjydxHlia4FtUtzafSw/640?wx_fmt=gif)

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