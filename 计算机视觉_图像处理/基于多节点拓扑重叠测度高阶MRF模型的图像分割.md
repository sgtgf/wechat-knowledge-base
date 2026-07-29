# 基于多节点拓扑重叠测度高阶MRF模型的图像分割

原创 自动化学报 自动化学报 2022-05-16 10:06 北京

> 原文地址: [https://mp.weixin.qq.com/s/o2QPoDK0eRgeN7LvkBsP7Q](https://mp.weixin.qq.com/s/o2QPoDK0eRgeN7LvkBsP7Q)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_000_cb8abf528bda.gif)

**点击蓝字 关注我们**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_001_cb8abf528bda.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_002_fb2f6f935b82.jpg)

  

**引****用本文**

  

徐胜军, 周盈希, 孟月波, 刘光辉, 史亚. 基于多节点拓扑重叠测度高阶MRF模型的图像分割. 自动化学报, 2022, 48(5): 1353−1369 doi: 10.16383/j.aas.c190780

Xu Sheng-Jun, Zhou Ying-Xi, Meng Yue-Bo, Liu Guang-Hui, Shi Ya. Image segmentation based on higher-order MRF model with multi-node topological overlap measure. Acta Automatica Sinica, 2022, 48(5): 1353−1369 doi: 10.16383/j.aas.c190780

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190780?viewType=HTML

  

**文章简介**

  

**关键词**

  

图像分割, 高阶马尔科夫随机场, 拓扑重叠测度, 高斯混合模型, Gibbs采样算法

  

**摘   要**

  

针对低阶马尔科夫随机场(Markov random field, MRF)模型难以有效表达自然图像中复杂的先验知识而造成误分割问题, 提出一种基于多节点拓扑重叠测度高阶MRF模型(Higher-order MRF model with multi-node topological overlap measure, MTOM-HMRF)的图像分割方法. 首先, 为描述图像局部区域内多像素蕴含的复杂空间拓扑结构信息, 利用多节点拓扑重叠测度建立图像局部区域的高阶先验模型; 其次, 利用较大的局部区域包含更多的标签节点信息能力, 基于Pairwise MRF模型建立基于局部区域的部分二阶Potts先验模型, 提高分割模型的抗噪能力; 再次, 为有效描述观察图像场与其标签场的似然特征分布, 研究利用局部区域内邻接像素的Hamming距离引入图像局部空间相关性, 建立局部空间一致性约束的高斯混合分布; 最后, 基于MRF框架建立用于图像分割的多节点拓扑重叠测度高阶MRF模型, 采用Gibbs采样算法对提出模型进行优化. 实验结果表明, 提出模型不仅能有效抵抗图像强噪声和复杂的纹理突变干扰, 鲁棒性更好, 而且具有更准确的图像分割结果.

  

**引   言**

  

图像分割是计算机视觉领域研究的核心问题之一, 是对图像进行更高层分析、理解的基础. 近年来, 基于马尔科夫随机场(Markov random field, MRF)模型的图像分割方法受到广泛关注, 成为图像分割领域研究的热点. 在概率框架下, MRF利用图像像素标签的Gibbs分布描述图像局部空间先验知识, 并基于贝叶斯定理将图像空间先验知识与似然特征结合起来, 在图像分割领域取得了成功应用.

  

由于低阶MRF模型只能表达邻域平滑等简单的先验知识, 而这种简单先验知识常导致分割结果的过平滑, 从而阻碍了MRF在图像分割领域的进一步应用. 高阶MRF模型引入更多的邻域信息, 能够表达更复杂的先验知识和统计信息, 因而在计算机视觉领域得到广泛关注, 取得了很多有意义的研究成果. Kohli等提出一种RobustPnPotts模型, 将标签邻域一致性作为先验约束, 即约束局部区域内大部分标签倾向于取相同标签值, 显著提高了图像分割精度, 特别是在物体边界处取得了更准确的分割效果. 夏平等针对医学图像中斑点噪声、目标边缘弱化对分割结果的干扰问题, 采用二阶邻域系统描述标签场的结构间联系, 利用复小波域中每一尺度内同标签区域的特征信息分布规律弥补了高阶MRF分割中参数估计复杂、小波域MRF缺乏平移不变性和特征提取方向性差的不足, 提出复小波域多分辨率MRF模型的超声医学图像分割算法. Li等提出一种基于超像素的高阶CRF (Conditional random field)语义分割模型, 利用超像素增强点对势能项引入图像的超像素高阶先验, 虽然基于超像素的高阶CRF模型大大提升了分割效率, 但是无监督分割算法产生的超像素常包含一些误分割边缘, 因而造成图像分割边界吻合度不理想. 这种约束区域一致性高阶MRF模型对于图像局部区域先验表达能力有限, 特别是对于图像局部区域内的高阶拓扑结构等高维特征难以有效表达.

  

为提高MRF模型对图像局部区域的结构特征描述能力, 常利用邻接像素的距离度量方法描述图像局部空间相关性. 宋艳涛等提出一种基于图像片权重方法的MRF模型, 利用邻接图像片之间的相似性描述局部邻域内对应像素点间的权值, 提高像素邻域内有用点和无用点的区分度, 并通过平滑KL (Kullback-Leibler)距离引入先验概率与后验概率熵的惩罚项, 该模型对图像边缘区域和纹理结构复杂区域均能获得较好的分割效果. Kim等建立一个基于超图的图像分割框架, 引入图像不同区域短距离和长距离的依赖性, 利用高阶相关性聚类方法建立超像素间的高阶势能特征. 融合空间先验约束的高斯混合模型(Gaussian mixture model, GMM)在图像分割领域也得到广泛关注. Ji等提出一种空间约束的非对称高斯混合模型(Asymmetric GMM), 利用KL距离计算邻域像素的空间先验信息, 并根据像素类内和类间的先验知识和后验概率建立像素与其标签间的非对称似然分布, 该方法有效抑制了噪声对分割结果的干扰, 得到了较好的分割结果. Zhang等基于局部空间信息和像素强度信息的相关性, 利用带权值的局部区域像素概率代替单一像素概率, 提出一种快速鲁棒的改进GMM分割模型. Ji等为提高基于GMM图像分割模型对噪声的鲁棒性, 利用局部窗内邻接像素的欧氏距离计算像素邻域空间权值因子, 提出一种新的带空间权值GMM模型. Niu等基于局部窗内局部空间逐像素距离引入局部相似度因子, 有效解决了传统基于区域的分割模型对高斯噪声和图像局部细节特征的不敏感性问题. Bi等提出一种显著度GMM图像分割模型, 该模型基于视觉注意力机制, 利用图像显著特征图提取基于图像内容的空间信息, 有效增强了重要像素在分割结果中的表达.

  

上述方法采用基于点对像素的相似性度量引入图像的局部空间先验信息, 这种先验信息约束距离越近的邻接像素越倾向于取相同标签. 由于复杂图像特征具有高维性, 因而常规的基于欧氏距离相似性度量不能有效描述局部像素的相似性. 为解决这一问题, 徐胜军等提出一种基于局部区域一致性的流形约束MRF模型, 该模型基于流形局部信息度量更准确地捕获了图像局部区域的复杂几何结构先验. 冯宝等提出一种结合MRF能量和模糊速度函数的活动轮廓模型方法, 利用Garbo纹理特征、DCE-MRI时域特征、灰度特征构成特征向量与聚类中心向量的距离, 构建一种模糊速度函数, 并引入到活动轮廓模型中作为MRF能量模型的边缘检测项. Shao等假定空间邻域具有相似的表示因子, 因而利用图拉普拉斯正则项将空间信息引入稀疏表示模型, 提出一种空间和类结构正则化的稀疏表示图模型, 有效描述了图像本征数据结构特征. Dornaika等利用拉普拉斯平滑度提出一种新的约束稀疏图构造方法, 该方法假定拉普拉斯平滑度约束相似的数据样本产生相似的编码向量, 从而融合稀疏表示和拉普拉斯平滑度建立一种非对称权值的相似度矩阵, 进而建立一种更具表达能力的稀疏图.

  

图像像素邻域结构信息是图像的重要先验知识, 这种邻域结构信息的提取常采用基于邻接像素对的相似性度量方法. 但是由于图像“高维性”、“强噪声”等特点, 基于点对像素的相似性度量方法不能揭示图像高维空间蕴含的本质几何结构; 同时, 这种“强噪声”在邻接像素之间带来较多假相关. 因而常规点对像素相似性度量方法难以捕获复杂图像高阶结构相关性特征, 这种高阶特征常蕴含在图像局部区域内多个邻接像素间. 由此可知, 研究邻接多像素相似性度量是非常有必要的. 但是常用的约束区域一致性高阶MRF模型对于局部区域内蕴含的拓扑结构特征的表达能力有限. 相关研究表明, 拓扑重叠测度(Topological overlap measure, TOM)不仅考虑了邻接点对变量的相关性, 而且引入了局部区域内节点对共享邻接变量的相关性. 与欧氏距离、Pearson相关性、互信息等传统基于点对像素相关性的距离度量方法相比, TOM能够有效描述多变量之间的拓扑结构关系. 因而基于TOM建立的基因共表达网络能有效度量多个基因表达数据的相似性, 并降低“强噪声”所带来的假相关, 因此在生物信息领域中得到显著关注.

  

受此启发, 为提高基于MRF模型对自然图像复杂特征描述的能力以及对噪声干扰的鲁棒性, 基于MTOM (Multi-node topological overlap measure)提出一种多变量相似性度量方法, 有效描述图像局部区域内邻接像素多变量拓扑结构关系, 并利用这种多变量拓扑结构关系建立图像的高阶拓扑结构先验模型. 最终基于MRF提出一种多节点拓扑重叠测度高阶MRF模型(Higher-order MRF model with multi-node topological overlap measure, MTOM-HMRF)图像分割方法, 有效提升了图像分割的效果.

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_003_89bd6389e328.jpg)

图 4  合成图像加高斯白噪声分割结果对比

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_004_d4828c118e21.jpg)

图 5  合成图像加椒盐噪声分割结果对比  

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_005_c82948e2f78e.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_006_2ec4d5340185.jpg)

图 6  自然图像分割结果对比  

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_007_79bc1faebf70.png)

**徐胜军**

西安建筑科技大学信息与控制工程学院副教授. 2013年获得西安交通大学工学博士学位. 主要研究方向为图像处理, 人工智能与自动

E-mail: duplin@sina.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_008_d5ddd7f2ba4e.png)

**周盈希**

西安建筑科技大学信息与控制工程学院硕士研究生. 主要研究方向为图像分割, 深度学习. 本文通信作者.

E-mail: 13572978250@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_009_3ab478542fde.png)

**孟月波**

西安建筑科技大学信息与控制工程学院副教授. 2014年获得西安交通大学工学博士学位. 主要研究方向为机器学习, 建筑智能化技术.

E-mail: mengyuebo@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_010_23a1fe351c6a.png)

**刘光辉**

西安建筑科技大学信息与控制工程学院副教授. 2016年获得西安建筑科技大学工学博士学位. 主要研究方向为机器学习, 建筑智能化技术.

E-mail: guanghuil@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_011_902cddb8fd68.png)

**史   亚**

西安建筑科技大学信息与控制工程学院讲师. 分别于2008年, 2011年, 2015年获得西安电子科技大学学士学位、硕士学位和博士学位. 主要研究方向为机器学习.

E-mail: shiyaworld@163.com

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  夏平, 施宇, 雷帮军, 龚国强, 胡蓉, 师冬霞.复小波域混合概率图模型的超声医学图像分割.自动化学报, 2021, 47(1): 185-196 doi: 10.16383/j.aas.c180132

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180132?viewType=HTML

  

\[2\]  冯宝, 陈业航, 刘壮盛, 李智, 宋嵘, 龙晚生. 结合MRF能量和模糊速度的乳腺癌图像分割方法. 自动化学报, 2020, 46(6): 1188−1199 doi: 10.16383/j.aas.c180759

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180759?viewType=HTML

  

\[3\]  张帆, 张新红. 基于位错理论的距离正则化水平集图像分割算法. 自动化学报, 2018, 44(5): 943-952. doi: 10.16383/j.aas.2017.c160383

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160383?viewType=HTML

  

\[4\]  王传云, 秦世引. 动态场景红外图像的压缩感知域高斯混合背景建模. 自动化学报, 2018, 44(7): 1212-1226. doi: 10.16383/j.aas.2017.c170061

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c170061?viewType=HTML

  

\[5\]  钱生, 陈宗海, 林名强, 张陈斌. 基于条件随机场和图像分割的显著性检测. 自动化学报, 2015, 41(4): 711-724. doi: 10.16383/j.aas.2015.c140328

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2015.c140328?viewType=HTML

  

\[6\]  余淼, 胡占义. 高阶马尔科夫随机场及其在场景理解中的应用. 自动化学报, 2015, 41(7): 1213-1234. doi: 10.16383/j.aas.2015.c140684

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2015.c140684?viewType=HTML

  

\[7\]  余航, 焦李成, 刘芳. 基于上下文分析的无监督分层迭代算法用于SAR图像分割. 自动化学报, 2014, 40(1): 100-116. doi: 10.3724/SP.J.1004.2014.00100

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00100?viewType=HTML

  

\[8\]  唐利明, 田学全, 黄大荣, 王晓峰. 结合FCMS与变分水平集的图像分割模型. 自动化学报, 2014, 40(6): 1233-1248. doi: 10.3724/SP.J.1004.2014.01233

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01233?viewType=HTML

  

\[9\]  龙建武, 申铉京, 臧慧, 陈海鹏. 高斯尺度空间下估计背景的自适应阈值分割算法. 自动化学报, 2014, 40(8): 1773-1782. doi: 10.3724/SP.J.1004.2014.01773

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01773?viewType=HTML

  

\[10\]  宋艳涛, 纪则轩, 孙权森. 基于图像片马尔科夫随机场的脑MR图像分割算法. 自动化学报, 2014, 40(8): 1754-1763. doi: 10.3724/SP.J.1004.2014.01754

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01754?viewType=HTML

  

\[11\]  郑强, 董恩清. 窄带主动轮廓模型及在医学和纹理图像局部分割中的应用. 自动化学报, 2013, 39(1): 21-30. doi: 10.3724/SP.J.1004.2013.00021

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00021?viewType=HTML

  

\[12\]  谭乐怡, 王守觉. 基于双重超像素集的快速路径相似度图像分割算法. 自动化学报, 2013, 39(10): 1653-1664. doi: doi{10.3724/SP.J.1004.2013.01653

http://www.aas.net.cn/cn/article/doi/doi%7B10.3724/SP.J.1004.2013.01653?viewType=HTML

  

\[13\]  杨栋, 周秀玲, 郭平. 基于贝叶斯通用背景模型的图像标注. 自动化学报, 2013, 39(10): 1674-1680. doi: 10.3724/SP.J.1004.2013.01674

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.01674?viewType=HTML

  

\[14\]  杨扬, 李善平. 分割位置提示的可变形部件模型快速目标检测. 自动化学报, 2012, 38(4): 540-548. doi: 10.3724/SP.J.1004.2012.00540

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00540?viewType=HTML

  

\[15\]  龙建武, 申铉京, 陈海鹏. 自适应最小误差阈值分割算法. 自动化学报, 2012, 38(7): 1134-1144. doi: 10.3724/SP.J.1004.2012.01134

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01134?viewType=HTML

  

\[16\]  魏巍, 申铉京, 千庆姬. 工业检测图像灰度波动变换自适应阈值分割算法. 自动化学报, 2011, 37(8): 944-953. doi: 10.3724/SP.J.1004.2011.00944

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00944?viewType=HTML

  

\[17\]  韩守东, 赵勇, 陶文兵, 桑农. 基于高斯超像素的快速Graph Cuts图像分割方法. 自动化学报, 2011, 37(1): 11-20. doi: 10.3724/SP.J.1004.2011.00011

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00011?viewType=HTML

  

\[18\]  王晏, 孙怡. 自适应Mean Shift算法的彩色图像平滑与分割算法. 自动化学报, 2010, 36(12): 1637-1644. doi: 10.3724/SP.J.1004.2010.01637

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.01637?viewType=HTML

  

\[19\]  侯彪, 徐婧, 刘凤, 焦李成. 基于第二代Bandelet域隐马尔科夫树模型的图像分割. 自动化学报, 2009, 35(5): 498-504. doi: 10.3724/SP.J.1004.2009.00498

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00498?viewType=HTML

  

\[20\]  胡正平, 谭营. 基于目标模糊置信度描述驱动的区域能量进化增长图像分割算法. 自动化学报, 2008, 34(9): 1047-1052. doi: 10.3724/SP.J.1004.2008.01047

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.01047?viewType=HTML

  

\[21\]  彭真明, 蒋彪, 肖峻, 孟凡斌. 基于并行点火PCNN模型的图像分割新方法. 自动化学报, 2008, 34(9): 1169-1173. doi: 10.3724/SP.J.1004.2008.01169

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.01169?viewType=HTML

  

\[22\]  吴成柯, 刘靖, 侯格贤. 图像分割的多参量遗传算法. 自动化学报, 1998, 24(3): 410-413.

http://www.aas.net.cn/cn/article/id/16831?viewType=HTML

  

  

**近期文章**

  

[基于分布式有限感知网络的多伯努利目标跟踪](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077514&idx=1&sn=ca1172c74ab9e32db9bca7c66082fee8&chksm=8131f1c7b64678d1129b3d8832fe3670fdde3ed267c0f98f178110b649b4042c8c903b2f673f&scene=21#wechat_redirect)

[一类非线性系统模糊自适应固定时间量化反馈控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077514&idx=2&sn=eb7906d16b1727ef482e6bf319f0a7e1&chksm=8131f1c7b64678d1c5a98c4614c347fee33b2d2498c76d1e5c950fce2cc304317670650273ee&scene=21#wechat_redirect)

[基于凸近似的避障原理及无人驾驶车辆路径规划模型预测算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077442&idx=1&sn=432dd266dbf5c99ca845248bb09df5c1&chksm=8131f10fb646781977984ae605369c8004b7c57f61747a28c49813698802554d4a11047abea0&scene=21#wechat_redirect)

[多级注意力传播驱动的生成式图像修复方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077391&idx=1&sn=0e34736530d8ef540b4abaa08362a0bf&chksm=8131f142b6467854f8396d0ea54b34946bbe5fb78f29a281271dab33867ae129a5b401c36277&scene=21#wechat_redirect)

[一种噪声容错弱监督矩阵补全的生存分析方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077391&idx=2&sn=b84c8750f960526618606c0b97e56d06&chksm=8131f142b6467854d25b0873e4bcb1b30dd5c1ee99db58bbd7b6d5ea5109e868878d7ee1689d&scene=21#wechat_redirect)

[通信受限的多智能体系统二分实用一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=1&sn=02d81030a428cbb4275f4ff076068f08&chksm=8131f084b646799235c36b924d470f26f4e4da762c08d57e951613e4f74a57febdc8c03777c9&scene=21#wechat_redirect)

[基于卦限卷积神经网络的3D点云分析](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=2&sn=72b1883dbcc0cbf059d0b772116c1833&chksm=8131f084b6467992a2ece5ef2da60a5e9c99798f5fdaf0419ebb1b40fac405f89f410ec0399e&scene=21#wechat_redirect)

[多子群的共生非均匀高斯变异樽海鞘群算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077253&idx=1&sn=8bb31df462faacb91e929c785da5cc66&chksm=8131f0c8b64679deba1726b4ace546e4db5cd4f75a3c7a32b8585d5ba4923c950040bb4e10c1&scene=21#wechat_redirect)

[深海起重机系统的实时轨迹规划方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077253&idx=2&sn=a56d6ba21cacc230b19e46cbac02d1f2&chksm=8131f0c8b64679de5196befb6529c000b1ca45ee81eda188944e136ceb3e03833d0d77513b4f&scene=21#wechat_redirect)

[一种改进的特征子集区分度评价准则](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077115&idx=2&sn=f9e9063e82252dc6389f99cd9921b665&chksm=8131f3b6b6467aa0efe5b1d2a7898b081ad349d484ed7ce6603fd9dd2742bfd9afe599a49cf8&scene=21#wechat_redirect)

[基于多阶段注意力机制的多种导航传感器故障识别研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077115&idx=1&sn=cb5a0515e8ced5d96aec9aeee0c43906&chksm=8131f3b6b6467aa06f5244ad53639bb0452b6dfba6540ee50ea7d33b764e1e81fe712d58d371&scene=21#wechat_redirect)

[支持数据隐私保护的联邦深度神经网络模型研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077039&idx=1&sn=679f6b0a5a6a97ad2564e590bd534072&chksm=8131f3e2b6467af447638b7d6e7312046f128019c857cf8e79609736f5d57849cfa2c34f8ba4&scene=21#wechat_redirect)

[联合样本输出与特征空间的半监督概念漂移检测法及其应用](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076994&idx=1&sn=4e40a43610e5879752437474d12ea2c8&chksm=8131f3cfb6467ad9f54ad169a3857897807584e30d02dbbf83c75664398d19992c1b95fb6be2&scene=21#wechat_redirect)

[面向行人重识别的局部特征研究进展、挑战与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076994&idx=2&sn=2f1fe243ff0cc599548f9c1d238b4a59&chksm=8131f3cfb6467ad93a3228636e3780da17bb32b7383faa4e5746adab8a53db9281d1894c160c&scene=21#wechat_redirect)

[一种脑肢融合的神经康复训练在线评价与调整方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076801&idx=1&sn=01be1c22a480f6d2c52e4afcf7c173d8&chksm=8131f28cb6467b9af8e33ff70860ff2731c797d27cbbda568088b6d17a41ae07d38ebb59a0e5&scene=21#wechat_redirect)

[基于自适应LASSO先验的稀疏贝叶斯学习算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076733&idx=1&sn=01ccbc6fe6e387330aa93ae1a2a11953&chksm=8131f230b6467b260036bbc1efe3db2924397a4e7ba2f683e2e0c4819805906180d44529244a&scene=21#wechat_redirect)  

[眼动跟踪研究进展与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076581&idx=1&sn=dab1369362bf1790033e5cf2f5736281&chksm=8131fda8b64674be08cbf0bf3bf5a928115b76ec24e8000cad36820b039d33dedba8a048210e&scene=21#wechat_redirect)

  

**热点文章**

  

[通信受限的多智能体系统二分实用一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=1&sn=02d81030a428cbb4275f4ff076068f08&chksm=8131f084b646799235c36b924d470f26f4e4da762c08d57e951613e4f74a57febdc8c03777c9&scene=21#wechat_redirect)

[【热点专题】多目标优化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962438&idx=1&sn=83b21f7b6a63fc4e01c2f4718b2aae92&chksm=f2943387c5e3ba91ce32286c06f215a989233f55bbbd5c7d436a43c40615bb5ae208d0f0f228&scene=21#wechat_redirect)

[一种基于深度迁移学习的滚动轴承早期故障在线检测方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076931&idx=2&sn=128b1673843353529d8b130f372bb46f&chksm=8131f30eb6467a18e0f645b207ada16cd601b791297b32b1caccf72daa50b55063074ec4fdc3&scene=21#wechat_redirect)

[基于多智能体强化学习的乳腺癌致病基因预测](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076931&idx=1&sn=a62942cd056156ad5a885d6350e8b373&chksm=8131f30eb6467a18ffbee77b25fb9b0417b08918d3625d04c89a3a9bcb1490eece239c5fda25&scene=21#wechat_redirect)

[基于事件触发的离散MIMO系统自适应评判容错控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076863&idx=1&sn=aec9cf55a1b0b8eae741999601a8c6df&chksm=8131f2b2b6467ba4c20d388390d4ac191555e5d00d77f510f72af77359d18bdca5230ea52df0&scene=21#wechat_redirect)

[水下多机器人系统综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076668&idx=1&sn=b50e43710be8208fd711cd45943e95c0&chksm=8131f271b6467b675083610c925ce0d329e201ddab5c8e935eb266fbf41418395459fdd0618d&scene=21#wechat_redirect)

[基于事件触发二阶多智能体系统的固定时间比例一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=2&sn=fcf40a44a926c9034593207d6a614e95&chksm=8131f250b6467b46e70d4ef5f10226fbed60a0d12e327f83c793d86e7815ff00e4fcafcac295&scene=21#wechat_redirect)

[基于事件触发的分布式优化算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076142&idx=2&sn=b074793ec4be44ea08efb78617dcdcc0&chksm=8131fc63b6467575b7f6d698909e56be16089f8f56ca415294483ff6f40902c7546417f82531&scene=21#wechat_redirect)

  

**期刊动态**

  

[《自动化学报》多名作者入选爱思唯尔2021中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=1&sn=ee78f108cf0551024cb95c33241a5f1d&chksm=8131f250b6467b46c8d4af1bd63381328a80c65ade97a6daa97e3bb4538b39c6f761da238066&scene=21#wechat_redirect)

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

  

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_012_9d4e678a1b3a.png)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_013_60f9de6ff871.png)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_015_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_014_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_016_8b84564f71bc.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_017_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_018_a49283128f98.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_019_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_020_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_021_e10f592a6d96.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_022_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_024_a49283128f98.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_025_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_027_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_026_408b1c050dcf.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_023_a49283128f98.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于多节点拓扑重叠测度高阶MRF模型的图像分割_images\img_028_a49283128f98.gif)

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