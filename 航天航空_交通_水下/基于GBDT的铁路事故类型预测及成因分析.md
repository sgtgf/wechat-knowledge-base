# 基于GBDT的铁路事故类型预测及成因分析

原创 自动化学报 自动化学报 2022-03-11 17:06 北京

> 原文地址: [https://mp.weixin.qq.com/s/Lzb5q2H6gZwNBJ3bDB1VmQ](https://mp.weixin.qq.com/s/Lzb5q2H6gZwNBJ3bDB1VmQ)

点击蓝字

关注我们

  

**引用本文**

钟敏慧, 张婉露, 李有儒, 朱振峰, 赵耀. 基于 GBDT 的铁路事故类型预测及成因分析. 自动化学报, 2022, 48(2): 470−478 doi: 10.16383/j.aas.c190630 

Zhong Min-Hui, Zhang Wan-Lu, Li You-Ru, Zhu Zhen-Feng, Zhao Yao. GBDT based railway accident type prediction and cause analysis. Acta Automatica Sinica, 2022, 48(2): 470−478 doi: 10.16383/j.aas.c190630    

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190630?viewType=HTML

  

**文章简介**

  

**关键词**

  

事故类型预测, 缺失补全, GBDT, 集成学习, 成因分析

  

**摘   要**

  

运用数据挖掘技术进行铁路事故类型预测及成因分析, 对于建立铁路事故预警机制具有重要意义. 为此, 本文提出一种基于梯度提升决策树(Grandient boosting decision tree, GBDT)的铁路事故类型预测及成因分析算法. 针对铁路事故记录数据缺失的问题, 提出一种基于属性分布概率的补全算法, 最大程度保持原有数据分布, 从而降低数据缺失对事故类型预测造成的影响. 针对铁路事故记录数据类别失衡的问题, 提出一种集成的GBDT模型, 完成对事故类型的鲁棒性预测. 在此基础上, 根据GBDT预测模型中特征重要度排序, 实现事故成因分析. 通过在开放数据库上进行实验, 验证了本文模型的有效性.

  

**引   言**

  

近年来, 我国铁路事业高速发展, 在推动国民经济发展中发挥着至关重要的作用. 与此同时, 铁路安全问题也愈发受到重视. 在大数据时代, 如何利用铁路事故历史记录数据发掘有用信息, 建立事故预警机制, 对于推动铁路行业信息化, 提高运输效率, 防范安全隐患具有重要意义. 铁路事故类型预测和事故致因分析是建立事故预警机制的两个基础环节. 铁路事故预测利用历史事故记录估计和判断未来某种情况下是否会发生事故. 铁路事故成因分析通过分析事故发生时的客观环境与人为因素, 寻找造成事故的最可能原因, 从而采取针对性的预警防护手段. 因此, 利用铁路事故历史记录, 采用数据挖掘技术发掘其中有用信息, 进行铁路事故类型预测与成因分析具有重大现实意义.

  

铁路事故类型预测的本质是一个多分类问题. 常用的多分类模型有逻辑回归(Logistic regression, LR)、支持向量机(Support vector machine, SVM)和决策树(Decision tree, DT)等. 文献\[4\]利用决策树算法进行煤与瓦斯的突出预测. 然而, 这类分类器主要适用于简单、平衡的数据训练, 对于铁路事故记录这种复杂、类别失衡的高维数据, 训练较为困难, 且预测结果不够理想. 集成学习能够将多个模型集成以获取更好的预测结果, 对于不平衡数据的分类问题具有更好的有效性. 常用集成学习模型主要包括随机森林(Random forest, RF)和梯度提升决策树(Gradient boosting decision tree, GBDT). RF基于Bagging思想, 并行集成基学习器, 模型简单, 计算开销小; 而GBDT则是基于Gradient boosting思想, 对基学习器进行串行集成, 对数据拟合能力很强. 文献\[10-13\]分别使用以上模型进行预测.

  

铁路事故成因分析是对事故类型预测的反演. 常用的事故成因分析方法有复杂网络方法、灰色理论等. 文献\[14\]结合灰色综合关联度和信息熵, 利用熵分析事件不确定性的原理, 针对事故相关属性的重要度进行分析. 文献\[15\]运用多维关联规则提取技术找出事故成因关联规则. 上述事故成因分析方法对于值类别数较多的特征, 运算较复杂.

  

此外, 现有铁路事故记录数据存在严重的数据缺失问题, 在进行铁路事故类型预测和归因前, 首先需要对数据进行补全. 选择合适的补全方法对于提升预测结果的准确性有很大影响. 目前, 常用的补全方法主要包括均值填补法、最近距离填补法、回归填补法等. 然而, 前两种方法在某种程度上会影响样本状态分布, 导致预测结果的偏差; 回归填补法仅适用于连续特征, 对于离散特征并不适用.

  

针对上述问题, 本文提出了一种基于GBDT的铁路事故类型预测及成因分析算法. 首先, 针对铁路事故数据缺失问题, 提出了一种基于属性分布概率的补全算法, 该算法最大程度地保持了原有的数据结构, 从而降低数据缺失对于类型预测造成的影响. 其次, 提出了一种基于Bagging的集成GBDT模型, 针对类别失衡的铁路事故历史记录数据能够进行高效训练, 得到准确的事故类型预测结果. 同时, 结合统计学习理论, 根据GBDT预测模型中的特征重要度排序, 实现事故致因分析. 算法整体框架如图1所示. 通过在公开的铁路事故数据库上进行实验, 验证了本文所提算法的有效性.

  

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_000_52f763584179.jpg)

图 1  基于GBDT的铁路事故类型预测及成因分析框架

  

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_001_8f78c1c0d82f.jpg)

图 2  三种补全方法结果对比

  

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_002_bb6d0ca05edb.jpg)

图 6  两类事故致因中不同因素的比例

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_003_9496a1a91b93.jpg)

**钟敏慧**

北京交通大学信息科学研究所硕士研究生. 主要研究方向为计算机视觉, 机器学习.

E-mail: mhzhong@bjtu.edu.cn

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_004_397b6abe5030.jpg)

**张婉露**

北京交通大学信息科学研究所硕士研究生. 主要研究方向为计算机视觉, 深度学习.

E-mail: wlzhang@bjtu.edu.cn

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_005_acd9d1a46e43.jpg)

**李有儒**

北京交通大学信息科学研究所硕士研究生. 主要研究方向为数据挖掘, 机器学习.

E-mail: liyouru@bjtu.edu.cn

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_006_c83e174cfba6.jpg)

**朱振峰**

北京交通大学信息科学研究所教授. 2005年获中国科学院自动化研究所模式识别国家重点实验室工学博士学位. 主要研究方向为图像视频分析与理解, 计算机视觉, 机器学习. 本文通信作者.

E-mail: zhfzhu@bjtu.edu.cn

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_007_ea8d86c396a7.jpg)

**赵   耀**

北京交通大学信息科学研究所教授, 所长. 1996年获北京交通大学工学博士学位. 主要研究方向为图像与视频编码, 数字水印与取证, 视频分析及理解, 人工智能.

E-mail: yzhao@bjtu.edu.cn

  

**相关文章**

  

**（请向上滑动阅读）**

  

\[1\]  李慧芳, 黄姜杭, 徐光浩, 夏元清. 基于多维度特征融合的云工作流任务执行时间预测方法. 自动化学报.

http://www.aas.net.cn/cn/article/id/5c0f8248-128b-40e9-96f8-342ee9ab40da?viewType=HTML

  

\[2\]  陈蕾, 邵楷, 林腾涛, 陈兴国. 一种噪声容错弱监督矩阵补全的生存分析方法. 自动化学报, 2021, 47(12): 2801-2814. doi: 10.16383/j.aas.c190740

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190740?viewType=HTML

  

\[3\]  蒋胜臣, 王红斌, 余正涛, 线岩团, 王红涛. 基于关系指数和表示学习的领域集成实体链接. 自动化学报, 2021, 47(10): 2376-2385. doi: 10.16383/j.aas.c180705

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180705?viewType=HTML

  

\[4\]  刘卓, 汤健, 柴天佑, 余文. 基于多模态特征子集选择性集成建模的磨机负荷参数预测方法. 自动化学报, 2021, 47(8): 1921-1931. doi: 10.16383/j.aas.c190735

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190735?viewType=HTML

  

\[5\]  任俊超, 刘丁, 万银. 基于混合集成建模的硅单晶直径自适应非线性预测控制. 自动化学报, 2020, 46(5): 1004-1016. doi: 10.16383/j.aas.c190798

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190798?viewType=HTML

  

\[6\]  汤健, 柴天佑, 刘卓, 余文, 周晓杰. 基于更新样本智能识别算法的自适应集成建模. 自动化学报, 2016, 42(7): 1040-1052. doi: 10.16383/j.aas.2016.c150766

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150766?viewType=HTML

  

\[7\]  杜党波, 张伟, 胡昌华, 周志杰, 司小胜, 张建勋. 含缺失数据的小波-卡尔曼滤波故障预测方法. 自动化学报, 2014, 40(10): 2115-2125. doi: 10.3724/SP.J.1004.2014.02115

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02115?viewType=HTML

  

\[8\]  汤健, 柴天佑, 丛秋梅, 苑明哲, 赵立杰, 刘卓, 余文. 基于EMD和选择性集成学习算法的磨机负荷参数软测量. 自动化学报, 2014, 40(9): 1853-1866. doi: 10.3724/SP.J.1004.2014.01853

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01853?viewType=HTML

  

\[9\]  付忠良. 多标签代价敏感分类集成学习算法. 自动化学报, 2014, 40(6): 1075-1085. doi: 10.3724/SP.J.1004.2014.01075

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01075?viewType=HTML

  

\[10\]  杨春, 殷绪成, 郝红卫, 闫琰, 王志彬<. 基于差异性的分类器集成：有效性分析及优化集成. 自动化学报, 2014, 40(4): 660-674. doi: 10.3724/SP.J.1004.2014.00660

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00660?viewType=HTML

  

\[11\]  曹莹, 苗启广, 刘家辰, 高琳. AdaBoost算法研究进展与展望. 自动化学报, 2013, 39(6): 745-758. doi: 10.3724/SP.J.1004.2013.00745

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00745?viewType=HTML

  

\[12\]  葛俊锋, 罗予频. 非对称AdaBoost算法及其在目标检测中的应用. 自动化学报, 2009, 35(11): 1403-1409. doi: 10.3724/SP.J.1004.2009.1403

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.1403?viewType=HTML

  

\[13\]  张宇, 周志华. 基于集成的年龄估计方法. 自动化学报, 2008, 34(8): 997-1000. doi: 10.3724/SP.J.1004.2008.00997

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00997?viewType=HTML

  

\[14\]  吴敏, 徐辰华. 基于烟气温度场分布的烧穿点智能集成预测方法. 自动化学报, 2007, 33(12): 1313-1320. doi: 10.1360/aas-007-1313

http://www.aas.net.cn/cn/article/doi/10.1360/aas-007-1313?viewType=HTML

  

\[15\]  谢胜利, 田森平, 谢振东. 基于向量图分析的迭代学习控制新算法. 自动化学报, 2004, 30(2): 161-168.

http://www.aas.net.cn/cn/article/id/16183?viewType=HTML

  

\[16\]  费越, 汪力新, 戴汝为. 竞争监督学习法在集成型识别系统中的应用. 自动化学报, 1999, 25(3): 303-308.

http://www.aas.net.cn/cn/article/id/16726?viewType=HTML

  

\[17\]  汪力新, 戴汝为. 反馈集成网络的动力学分析及其应用. 自动化学报, 1998, 24(6): 739-746.

http://www.aas.net.cn/cn/article/id/16796?viewType=HTML

  

\[18\]  喻明, 吴澄, 方崇智. 计算机集成制造系统(CIMS)的可靠性建模与分析. 自动化学报, 1994, 20(6): 728-733.

http://www.aas.net.cn/cn/article/id/14031?viewType=HTML

  

\[19\]  李月景. 利用模糊聚类分析自动识别汽车类型. 自动化学报, 1985, 11(2): 118-124.

http://www.aas.net.cn/cn/article/id/15243?viewType=HTML

  

\[20\]  鮑城志, 王钟琪, 周剑鳴, 邹揆南, 姚筱亦, 奚传錚. 动力系統事故分析和处理的逻輯控制. 自动化学报, 1964, 2(2): 119-122.

http://www.aas.net.cn/cn/article/id/17602?viewType=HTML

  

**近期文章**

[直播回放分享 | 陈关荣教授：探索最优同步网络的拓扑结构](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651074580&idx=1&sn=c39a84777b08dff76a63db060a6f54fe&chksm=8131fa59b646734f5723a7fa634db0f5cc0b3da154548854248224bdcfca8c6a520ec198f704&scene=21#wechat_redirect)

[人生跑马灯？人类首次同步测量大脑濒死状态](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651074149&idx=2&sn=60d48feaa01d160092c19a91e1314db7&chksm=8131e428b6466d3e1e8f835c506ae7faf61e8b66d94fc1dd027a089e075f82078ce5422a0a13&scene=21#wechat_redirect)

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[AI黑科技：马赛克加密被破解了！](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073824&idx=2&sn=0c15fef01cd893210bef1cceece5d49d&chksm=8131e76db6466e7b1c78884be8517733101cbe37b5a2fd95f4d4df6b569956c0dc5598435eb4&scene=21#wechat_redirect)

[Nature：当AI学会控制核聚变反应堆](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073629&idx=2&sn=b298f9f715cc9a6a38a54f36aea98171&chksm=8131e610b6466f06072ffe4dcfb213dde209f893bd3071cd4cbca8ba9a6484334028a3aae92a&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[中国科学院自动化研究所“海外优青”项目招聘启事](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073629&idx=3&sn=704a900c277b3224dfa9745d2ccc8c24&chksm=8131e610b6466f06329a900636c1bf894d6a890b89d114bbd9faf5f9a8132a73a228e7c3aeac&scene=21#wechat_redirect)

[“诺奖风向标”斯隆奖2022名单出炉！27位华人学者入选](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=2&sn=5ed3a30328a9f41bd43999c1592469b8&chksm=8131e1a0b64668b687601773f8d9d6960344a59a62e83dede480b768fad7375bc5329cfcebdc&scene=21#wechat_redirect)

[Nature封面：人类又输给了AI，赛车AI击败人类顶级车手！](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073362&idx=2&sn=e9a5d620fd2afa6af2c13d9c695e54a7&chksm=8131e11fb64668099fa52873d8df2f3a91c3244972da7d10cbf7c234c8b95b70954e1f2affab&scene=21#wechat_redirect)

  

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

[《自动化学报》发表文章入选第六届中国科协优秀科技论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960313&idx=1&sn=01b5a9defe9664ba4a0b8d7322e115d0&chksm=f2942b38c5e3a22e2c57edaa8667a27368ccfb595e6a372dfa85ff2a61329788870d77957a2f&scene=21#wechat_redirect)

[自动化学报（英文版）首届青年编委招募](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959475&idx=1&sn=e28ce2b8fa27ee4fb6a5c0c17e25dd25&chksm=f2942872c5e3a16438dbf45fd8091b643cd2bf50f0bab7092a6c5103d06cd4a16ebceb4db40a&scene=21#wechat_redirect)

  

**期刊目录**

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

  

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_008_7ebda992fc96.png)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_009_afc570dc3ee2.png)

  

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_013_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_010_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_012_8dbce81ab1fd.jpg)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_011_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_014_5c5128724c9a.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_015_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_020_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_017_2621def177b1.jpg)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_016_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_018_5c5128724c9a.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_019_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_023_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_022_7a2ec91d49ba.jpg)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_021_5c5128724c9a.gif)

![](D:\电脑文件\公众号知识库\航天航空_交通_水下\基于GBDT的铁路事故类型预测及成因分析_images\img_024_5c5128724c9a.gif)

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