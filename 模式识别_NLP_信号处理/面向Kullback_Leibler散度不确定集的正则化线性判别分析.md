# 面向Kullback-Leibler散度不确定集的正则化线性判别分析

原创 自动化学报 自动化学报 2022-04-08 16:24 北京

> 原文地址: [https://mp.weixin.qq.com/s/WLRjVCapTUh6UC9OfOdCGg](https://mp.weixin.qq.com/s/WLRjVCapTUh6UC9OfOdCGg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLViaOg8RMOX2DlfU5ez88BNlS2s7cZTJ6YHxw3KWL39pbwufI8mzcx2eA/640?wx_fmt=gif)

**点击蓝字 关注我们**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLViaOg8RMOX2DlfU5ez88BNlS2s7cZTJ6YHxw3KWL39pbwufI8mzcx2eA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVXdr9Ze4RBe9dx32ONuicVl46OThUvh5p8GKicUL6ylsua5FcIlnIFSGQ/640?wx_fmt=jpeg)

  

**引****用本文**

  

梁志贞, 张磊. 面向Kullback-Leibler散度不确定集的正则化线性判别分析. 自动化学报, 2022, 48(4): 1033−1047 doi: 10.16383/j.aas.c210434

Liang Zhi-Zhen, Zhang Lei. Regularized linear discriminant analysis based on uncertainty sets from Kullback-Leibler divergence. Acta Automatica Sinica, 2022, 48(4): 1033−1047 doi: 10.16383/j.aas.c210434    

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210434?viewType=HTML

  

**文章简介**

  

**关键词**

  

判别分析, KL散度, 不确定集, 正则化, 数据分类

  

**摘   要**

  

线性判别分析是一种统计学习方法. 针对线性判别分析的小样本奇异性问题和对污染样本敏感性问题, 目前许多线性判别分析的改进算法已被提出. 本文提出了基于Kullback-Leibler (KL)散度不确定集的判别分析方法. 提出的方法不仅利用了Ls范数定义类间距离和Lr范数定义类内距离, 而且对类内样本和各类中心的信息进行基于KL散度不确定集的概率建模. 首先通过优先考虑不利区分的样本提出了一种正则化对抗判别分析模型并利用广义Dinkelbach算法求解此模型. 这种算法的一个优点是在适当的条件下优化子问题不需要取得精确解. 投影(次)梯度法被用来求解优化子问题. 此外, 也提出了正则化乐观判别分析并采用交替优化技术求解广义Dinkelbach算法的优化子问题. 许多数据集上的实验表明了本文的模型优于现有的一些模型, 特别是在污染的数据集上, 正则化乐观判别分析由于优先考虑了类中心附近的样本点, 从而表现出良好的性能.

  

**引   言**

  

如今利用现代设备采集高维数据变得方便和容易, 但是获得的高维数据可能包含不相关和冗余的信息. 这不仅增加了学习模型的计算量和存储量, 而且可能导致学习模型的性能下降. 为了解决这些问题, 线性降维通常用于从数据中提取重要和有用的信息. 线性降维的目的是通过优化一些准则函数对原始特征空间进行适当的线性变换. 主成分分析(Principal component analysis, PCA)和线性判别分析(Linear discriminant analysis, LDA)是两种流行的线性降维方法. 由于PCA和LDA的简单性和有效性, 它们已经被广泛应用于许多领域, 如人脸识别、手写体字符识别和缺陷诊断等.

  

当样本的类别信息可用时, 通常情况下LDA在提取数据的鉴别特征方面比PCA更有效. 线性判别分析的目标是在变换空间中通过最大化类间距离和最小化类内距离来寻找投影矩阵. 从概率的观点来看, 假设每类样本服从高斯分布且具有不同的类中心以及相同的协方差, 则从Bayes最优准则可推导出LDA.

  

为了改善线性判别分析的特征提取性能, 各种LDA的改进算法已经被提出. 使用最优向量替换各类中心能提高LDA的类信息鉴别能力. 分数阶的LDA通过在一系列分数阶中引入加权函数来改善LDA, 但这增加了获得投影向量的代价. 与Bayes错误率相关的近似成对精度准则在原空间计算各类的权重, 从而改善LDA的性能. 几何平均, 调和平均以及加权调和平均被用来定义判别分析的准则函数. 最不利情况下的线性判别分析考虑了最近的两个类中心和具有最大方差的类来寻找投影方向. 基于最大−最小距离的目标函数探索了最近的数据对的性质来取得投影方向. Wasserstein判别分析利用正则化Wasserstein距离获取类之间的全局和局部信息并优化目标函数取得最佳投影方向.

  

线性判别分析存在小样本的奇异性以及非线性数据特征提取等问题. 为了克服LDA的小样本奇异性问题, 典型的方法包括PCA+LDA, 正则化LDA, 伪逆LDA 以及张量判别分析等. 为了有效地处理非线性数据, 各种线性判别分析已被拓宽到基于核函数的判别分析. 当训练集随着新数据的加入而变化时或处理的数据量大时, 各种增量学习或在线学习方式被用来获得鉴别分析的投影方向. 文献\[24\]提出了两种形式的增量LDA : 序列增量LDA和块增量LDA, 它们能有效地获取大数据流的特征空间.

  

数据在采集或传输过程中可能受到污染, 这使得处理的数据包含噪声或离群点. 但经典线性判别分析对噪声数据具有敏感性, 即获得的投影方向偏离真正的投影方向. 为了降低LDA对噪声数据的敏感性, 许多工作致力于用鲁棒的目标函数替换LDA的原有目标函数. 已有的诸多研究发现, 基于L\_1范数的目标函数比基于L\_2范数的目标函数在抑制异常点或噪声方面更有效. 因此基于L\_1范数的判别分析方法近年来备受关注. L\_1范数的LDA的类内距离和类间距离的定义依赖于L\_1范数, 这在某种程度上能抑制噪声. L\_1范数的核LDA不仅能抑制噪声, 而且能捕捉数据的非线性鉴别特征. L\_1范数的两维LDA拓宽了L\_1范数的LDA, 这种方法可直接处理图像数据, 而不需要把图像转化为向量形式. 通常L\_1范数的判别分析通过贪婪算法获取多个投影方向, 而非贪婪迭代算法被用来直接获取L\_1范数的LDA的多个投影向量. 广义弹性网通过L\_p范数定义的目标函数来改善判别分析抑制噪声的能力, 而通过优化Bhattacharyya的L\_1范数误差界可设计出新的鉴别分析模型. 最近提出的基于L\_21范数的LDA方法通过同时优化类中心和投影方向从而在噪声数据方面表现出良好的性能.

  

在大多数判别分析中, 通常假定类内各个样本以相等的概率(均匀分布)取得的, 但是位于类中心附近的样本一般远远多于位于类边界附近的样本. 为了增加类内样本采样的多样性, 可令类内样本的采样概率在均匀分布的概率附近变化, 这种变化有利于区分类中心附近的样本或类边界附近的样本. 不确定优化中的不确定集能描述概率分布的变化范围. 因此本文借助KL散度定义的不确定集对类内样本信息进行概率建模. 此外, 为了更好描述各类中心的信息, 本文也利用KL散度定义的不确定集对其进行概率建模. 基于此, 本文提出了基于KL散度不确定集的线性判别分析方法, 从而进一步改善已有线性判别分析方法. 与以往的方法不同, 本文不仅考虑了一般范数的目标函数, 而且利用不确定集对训练样本信息进行了刻画. 本文采用的不确定集为围绕均匀分布的KL散度球且约束中的不确定集被转化为目标函数的正则化项. 本文的主要贡献表现为:

  

1) 提出了正则化对抗LDA和正则化乐观LDA. 正则化对抗LDA优先考虑了难以区分的样本, 而正则化乐观LDA优化考虑了易于区分的样本.

  

2) 采用了广义Dinkelbach算法求解正则化对抗LDA或正则化乐观LDA. 对正则化对抗LDA运用投影梯度法求解优化子问题, 而对正则化乐观LDA运用交替优化求解优化子问题.

  

3) 在数据集上表明了当数据没有被污染时, 两种判别分析模型取得可竞争的性能, 但在污染数据的情况下, 正则化乐观LDA取得更好的性能. 这也从另一方面说明了本文提供两种模型的目的, 即如果在某些验证数据集上正则化乐观LDA的最好性能明显优于正则化对抗LDA的最好性能, 那说明训练集包含离群点. 因此通过检查正则化对抗LDA和正则化乐观LDA的性能可判断训练集是否包含离群点.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVmysfGnNpYHIeGyWPmj1xohXS3CxMwq0WbiaWMEdPwxEg0RroicIbY13g/640?wx_fmt=jpeg)

图 1  L2RALDA, L1RALDA, L2ROLDA和L1ROLDA的收敛性分析

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVr7ic4l5KAfpGKBsXjny3OicGkGZZYvyMeHVibNtVpe2Hqa73HUIlaHhJA/640?wx_fmt=jpeg)

图 2  L2RALDA, L1RALDA, L2ROLDA和L1ROLDA的错误率与参数的关系

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVO4htLHIsFu5SibbUg11VA8xViaK3qe037JibUWtibUwppmTzafDibB3pHicg/640?wx_fmt=jpeg)

图 3  数据集上不同方法随维数变化的错误率

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44D8tchRCnL8lwBY69LicyLV1ey1NhTwlQZyHnD2ol8VfsGAuvBD7RoZ3TvcicQTaw0s3QC7hQMicJjQ/640?wx_fmt=png)

**梁志贞**

中国矿业大学副教授. 2005年获得上海交通大学模式识别与智能系统专业博士学位. 主要研究方向为模式识别, 生物特征识别. 本文通信作者.

E-mail: liang@cumt.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVxjRG2ygnnxl6BibiaXHtOB42iaibGb9Im3pUIj4f8Z4vh74vGm331hyLMQ/640?wx_fmt=png)

**张   磊**

中国矿业大学副教授. 主要研究方向为最优化方法和数据挖掘.

E-mail: zhanglei@cumt.edu.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]   高云龙, 罗斯哲, 潘金艳, 陈柏华, 张逸松. 鲁棒自适应概率加权主成分分析.自动化学报, 2021, 47(4): 825-838 doi: 10.16383/j.aas.c180743

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180743?viewType=HTML

  

\[2\]   王前进, 杨春雨, 马小平, 张春富, 彭思敏. 基于随机配置网络的井下供给风量建模. 自动化学报, 2021, 47(8): 1963-1975. doi: 10.16383/j.aas.c190602

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190602?viewType=HTML

  

\[3\]   贾鹤鸣, 李瑶, 孙康健. 基于遗传乌燕鸥算法的同步优化特征选择. 自动化学报. doi: 10.16383/j.aas.c200322

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200322?viewType=HTML

  

\[4\]   张帆, 张新红. 基于位错理论的距离正则化水平集图像分割算法. 自动化学报, 2018, 44(5): 943-952. doi: 10.16383/j.aas.2017.c160383

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160383?viewType=HTML

  

\[5\]   李慧, 马小平, 施珺, 李存华, 仲兆满, 蔡虹. 复杂网络环境下基于信任传递的推荐模型研究. 自动化学报, 2018, 44(2): 363-376. doi: 10.16383/j.aas.2018.c160395

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c160395?viewType=HTML

  

\[6\]   许夙晖, 慕晓冬, 柴栋, 罗畅. 基于极限学习机参数迁移的域适应算法. 自动化学报, 2018, 44(2): 311-317. doi: 10.16383/j.aas.2018.c160818

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c160818?viewType=HTML

  

\[7\]   陈斌, 张连海, 牛铜, 屈丹, 李弼程. 基于MCE准则的语音识别特征线性判别分析. 自动化学报, 2014, 40(6): 1208-1215. doi: 10.3724/SP.J.1004.2014.01208

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01208?viewType=HTML

  

\[8\]   李娟, 王宇平. 考虑局部均值和类全局信息的快速近邻原型选择算法. 自动化学报, 2014, 40(6): 1116-1125. doi: 10.3724/SP.J.1004.2014.01116

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01116?viewType=HTML

  

\[9\]  李伟, 焦松, 陆凌云, 杨明. 基于特征差异的仿真模型验证及选择方法. 自动化学报, 2014, 40(10): 2134-2144. doi: 10.3724/SP.J.1004.2014.02134

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02134?viewType=HTML

  

\[10\]   韩敏, 任伟杰, 许美玲. 一种基于L1范数正则化的回声状态网络. 自动化学报, 2014, 40(11): 2428-2435. doi: 10.3724/SP.J.1004.2014.02428

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02428?viewType=HTML

  

\[11\]   郑建炜, 王万良, 姚晓敏, 石海燕. 张量局部Fisher判别分析的人脸识别. 自动化学报, 2012, 38(9): 1485-1495. doi: 10.3724/SP.J.1004.2012.01485

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01485?viewType=HTML

  

\[12\]   刘建伟, 李双成, 罗雄麟. p范数正则化支持向量机分类算法. 自动化学报, 2012, 38(1): 76-87. doi: 10.3724/SP.J.1004.2012.00076

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00076?viewType=HTML

  

\[13\]   张文林, 张连海, 牛铜, 屈丹, 李弼程. 基于正则化的本征音说话人自适应方法. 自动化学报, 2012, 38(12): 1950-1957. doi: 10.3724/SP.J.1004.2012.01950

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01950?viewType=HTML

  

\[14\]   武征鹏, 张学工. 弹性多核学习. 自动化学报, 2011, 37(6): 693-699. doi: 10.3724/SP.J.1004.2011.00693

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00693?viewType=HTML

  

\[15\]   刘峤, 秦志光, 陈伟, 张凤荔. 基于零范数特征选择的支持向量机模型. 自动化学报, 2011, 37(2): 252-256. doi: 10.3724/SP.J.1004.2011.00252

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00252?viewType=HTML

  

\[16\]   杨武夷, 梁伟, 辛乐, 张树武. 子空间半监督Fisher判别分析. 自动化学报, 2009, 35(12): 1513-1519. doi: 10.3724/SP.J.1004.2009.01513

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.01513?viewType=HTML

  

\[17\]   王卫东, 杨静宇. 采用虚拟训练样本的二次判别分析方法. 自动化学报, 2008, 34(4): 400-407. doi: 10.3724/SP.J.1004.2008.00400

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00400?viewType=HTML

  

\[18\]   宋枫溪, 张大鹏, 杨静宇, 高秀梅. 基于最大散度差鉴别准则的自适应分类算法. 自动化学报, 2006, 32(4): 541-549.

http://www.aas.net.cn/cn/article/id/15811?viewType=HTML

  

\[19\]   许建化, 张学工, 李衍达. 最小平方误差算法的正则化核形式. 自动化学报, 2004, 30(1): 27-36.

http://www.aas.net.cn/cn/article/id/16345?viewType=HTML

  

\[20\]   张永平, 郑南宁, 赵荣椿. 基于变分的图像恢复算法及收敛性. 自动化学报, 2002, 28(5): 673-680.

http://www.aas.net.cn/cn/article/id/15567?viewType=HTML

  

\[21\]   李文彪, 潘士先. 弱正则化边缘检测. 自动化学报, 1996, 22(5): 545-553.

http://www.aas.net.cn/cn/article/id/17127?viewType=HTML

  

  

**近期文章**

[【热点专题】目标检测](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962259&idx=1&sn=97b0c31ec704211713ef8cba4bb51b01&chksm=f2943352c5e3ba44f2c7217cff60405765c6d67312beb6d07006155404bfc4b34268956697f5&scene=21#wechat_redirect)

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

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVwlKFibeLr7Pr8jCPgnplMoeaFTCjytkoRqUF4p1uyVicJ8xkl1mVIt6w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44D8tchRCnL8lwBY69LicyLV3hvHUBLq8YD8P1YtOp3dvGPdaZFZjibxEqUv9Tmhosibk1ayCsI5LJPA/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLV7QU97xU7AQS6wVwlaiaE6c5GG0bJCx0J4ic6iblvHLedqG8ia5ER9TDiaBw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVqwv5nH9Bc5LqIuOjU31nzcFV5IdWWekWvB6ibCI9iaPCNUMp6rKBDiabg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44D8tchRCnL8lwBY69LicyLV05bkdKHamjj8zowX9bzwZ2k36wjOTafsRYDp5UXaQLDNqcL7aANtibw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44D8tchRCnL8lwBY69LicyLVLEIVAsDpTUPXJOQH0Y7WdWvgBbI3H6y7TfhoZicSvgPlGCXY1RmQicHw/640?wx_fmt=gif)

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