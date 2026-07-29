# 基于DDPG的三维重建模糊概率点推理

原创 自动化学报 自动化学报 2022-04-18 17:19 北京

> 原文地址: [https://mp.weixin.qq.com/s/gYAkX9BP21n67-YrsUp1Zw](https://mp.weixin.qq.com/s/gYAkX9BP21n67-YrsUp1Zw)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_001_2d5de795c262.gif)

**点击蓝字 关注我们**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_000_2d5de795c262.gif)

  

**引****用本文**

  

李雷, 徐浩, 吴素萍. 基于DDPG的三维重建模糊概率点推理. 自动化学报, 2022, 48(4): 1105−1118 doi: 10.16383/j.aas.c200543

Li Lei, Xu Hao, Wu Su-Ping. Fuzzy probability points reasoning for 3D reconstruction via deep deterministic policy gradient. Acta Automatica Sinica, 2022, 48(4): 1105−1118 doi: 10.16383/j.aas.c200543  

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200543?viewType=HTML

  

**文章简介**

  

**关键词**

  

三维重建, 强化学习, 深度学习, 注意力机制, 信息聚合

  

**摘   要**

  

单视图物体三维重建是一个长期存在的具有挑战性的问题. 为了解决具有复杂拓扑结构的物体以及一些高保真度的表面细节信息仍然难以准确进行恢复的问题, 本文提出了一种基于深度强化学习算法深度确定性策略梯度 (Deep deterministic policy gradient, DDPG)的方法对三维重建中模糊概率点进行再推理, 实现了具有高保真和丰富细节的单视图三维重建. 本文的方法是端到端的, 包括以下四个部分: 拟合物体三维形状的动态分支代偿网络的学习过程, 聚合模糊概率点周围点的邻域路由机制, 注意力机制引导的信息聚合和基于深度强化学习算法的模糊概率调整. 本文在公开的大规模三维形状数据集上进行了大量的实验证明了本文方法的正确性和有效性. 本文提出的方法结合了强化学习和深度学习, 聚合了模糊概率点周围的局部信息和图像全局信息, 从而有效地提升了模型对复杂拓扑结构和高保真度的细节信息的重建能力.

  

**引   言**

  

单视图三维重建是图像理解和计算机视觉的一个基本问题, 并在机器人、自动驾驶、虚拟现实和增强现实中有着广泛的应用. 近年来, 基于深度学习的单视图三维重建得到了广泛的应用. 相比于传统的三维重建方法, 学习模型能够更好地对输入信息进行编码以防止输入信息的歧义.现有基于深度学习的三维重建分为多视图和单视图重建, 前者先利用深度网络提取到的特征信息进行立体匹配并预测深度图, 再利用深度图融合技术构建三维模型. 后者则通过使用神经网络强大的特征捕获能力从输入图像中捕获特征信息, 之后结合从海量训练数据中学习到的形状先验知识信息进行三维重建. 具体来说, 基于深度学习的单视图三维重建根据三维形状输出表示形式可以分为以下三种:

  

1) 基于体素的表示形式, 如图1(a)所示, 现有工作使用编码网络捕获输入的物体图片的形状属性信息 (物体拓扑结构以及几何、轮廓、纹理等信息) 并将这些低层级信息编码为不同尺度下的高层级表示形式, 之后使用解码网络将三维几何外形表示为三维体素块上的二值概率分布S={(P\_1,⋯,P\_n×n×n)}, 最后通过计算网络预测的二值概率分布和真实二值概率分布之间的交叉熵来约束网络学习, 即利用网络学习二维图像到三维体素块上二值概率分布的映射关系来表达三维几何外形.

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_002_37e18aa9c957.jpg)

图 1  基于深度学习的单视图三维重建中三种表示形状

  

2) 基于点云的表示形式, 如图1(b)所示, 现有工作使用编码网络捕获输入的物体图片的形状属性信息,之后使用解码网络将三维几何外形表示为无序点云S={(x\_i,y\_i,z\_i)^N\_i=1}最后通过计算预测的点云三维坐标和真实点云三维坐标之间的倒角距离等指标来约束网络学习, 即利用网络学习二维图像到无序三维点集S的映射关系来表示物体三维形状.

  

3) 基于网格的表示形式, 如图1(c)所示, 现有工作首先使用卷积神经网络提取输入的物体图片的特征信息, 之后使用图卷积网络结合提取特征和初始化的网格模板对初始化模板进行网格变形生成目标三维模型, 最后通过计算预测网格的信息 (点坐标、边长等) 和真实网格信息之间的误差来约束网络学习, 即利用网络学习二维图像到三维网格的映射关系来表示物体三维形状.

  

在网络学习过程中, 现有方法都使用反向传播算法通过监督信息来约束编解码网络进行学习, 即通过反向传播使神经网络拟合一个复杂的映射函数. 本质上,基于深度学习的单视图三维重建方法使用合适的神经网络N来实现从输入图像I到输出Y的连续映射函数逼近, 即对任意ε>0,x∈I;|N(x)−Y|<ε.

  

大部分基于深度学习的单视图三维重建工作都使用基于卷积神经网络的编解码器架构, 即三维重建任务通常采用2D卷积神经网络对二维输入图像进行编码, 再根据任务需要的表示形式, 使用不同的解码器生成不同的表示形式. 例如, 如果使用体素作为最终表示, 则使用3D反卷积神经网络作为解码器.

  

根据重建后的三维形状输出表示形式,一些工作基于网格进行三维形状重建. 因为这些方法只能通过使用同类形状模板进行变形, 所以上述方法只能重建出具有简单拓扑的物体, 并且容易出现网格自交叉. 总的来说, 由于没有明确和可靠的方法生成有效的网格, 所以基于网格的三维重建工作面临着巨大的挑战. 一些工作基于体素和点云来进行三维形状重建, 但由于占用内存过高只能处理小批量数据和采用低分辨率来表示. 为了解决上述问题, Mescheder等提出了由连续函数定义一个3D空间, 并通过神经网络拟合的函数来描述这样的隐式形状, 并使用2D图像X和位置P∈R^3来推断对应位置PP的占用情况. 即使用神经网络拟合映射函数R^3×X→\[0,1\]. 该方法有效地减少了训练时占用的内存和训练时间, 但由于物体三维形状是由分类器或回归模型的权值来表示, 所以这些方法忽略了一些低级的形状信息. 总的来说, 现有的单视图三维重建方法存在以下挑战性问题: 1) 难以准确地重建具有复杂拓扑结构的物体三维形状. 2) 难以准确地重建局部细节特征从而生成高保真输出. 3) 先前的工作都是在合成数据上进行训练, 但在真实数据上进行测试时, 就会出现领域自适应问题. 因此, 一些复杂拓扑结构的连接处和局部细节的位置点占用概率往往难以准确的预测, 本文称这些难以准确预测的点为模糊概率点.

  

为了解决上述的挑战性问题, 本文通过深度强化学习算法DDPG来训练智能, 并不断地调整这些模糊概率点的占用概率并使其跳出概率模糊区间P∈\[0.4,0.6\]. 具体来说, 受到 Li 等的启发, 本文首先通过动态分支代偿网络生成了更多样化的特征表示并得到预测结果, 之后通过预测结果找到模糊概率点后聚合模糊概率点周边的局部信息和全局图像信息, 再通过DDPG训练的智能体调整这些模糊概率点, 使其达到到最佳的占用概率. 本文给出了本文方法在真实图像上进行三维重建的结果, 如图2所示. 本文的主要贡献如下:

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_003_56e18ae04837.jpg)

图 2  本文方法和DISN方法在真实图像上的单视图重建结果

  

1) 本文使用动态分支代偿网络来使得模型从输入图像中捕捉到更多样化的特征信息以提高模型的泛化能力.

  

2) 本文考虑到了局部信息对位置点占用概率预测的影响并使用了注意力机制引导的信息聚合机制聚合了局部信息和全局图像信息.

  

3) 本文使用深度强化学习算法DDPG训练的智能体对模糊概率点的占用概率进行了再推理.

  

4) 大量定量、定性和消融实验证明了本文的方法在公开的大规模三维物体数据集ShapeNet上的评估相比最先进的方法都有相应的提升.

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_004_78a5f4b61b04.jpg)

图 13  单视图三维重建中具有挑战性案例  

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_005_4159d372ef0b.jpg)

**李   雷**

宁夏大学信息工程学院硕士研究生. 主要研究方向为三维物体重建, 人脸重建以及关键点对齐, 图像处理和计算机视觉与模式识别.

E-mail: lliicnxu@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_006_b05c4e6c15fd.jpg)

**徐   浩**

宁夏大学信息工程学院硕士研究生. 主要研究方向为计算机视觉和三维人体姿态估计.

E-mail: hao\_xu321@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_007_a0750c369e20.jpg)

**吴素萍**

宁夏大学信息工程学院教授. 主要研究方向为三维重建, 计算机视觉, 模式识别, 并行分布处理与大数据. 本文通信作者.

E-mail: pswuu@nxu.edu.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  郑太雄, 黄帅, 李永福, 冯明驰. 基于视觉的三维重建关键技术研究综述. 自动化学报, 2020, 46(4): 631-652. doi: 10.16383/j.aas.2017.c170502

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c170502?viewType=HTML

  

\[2\]  薛俊诗, 易辉, 吴止锾, 陈向宁. 一种基于场景图分割的混合式多视图三维重建方法. 自动化学报, 2020, 46(4): 782-795. doi: 10.16383/j.aas.c180155

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180155?viewType=HTML

  

\[3\]  张兴龙, 陆阳, 李文璋, 徐昕. 基于滚动时域强化学习的智能车辆侧向控制算法. 自动化学报. doi: 10.16383/j.aas.c210555

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210555?viewType=HTML

  

\[4\]  李佳星, 赵勇先, 王京华. 基于深度学习的单幅图像超分辨率重建算法综述. 自动化学报, 2021, 47(10): 2341-2363. doi: 10.16383/j.aas.c190859

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190859?viewType=HTML

  

\[5\]  庞文砚, 范家璐, 姜艺, LewisFrank L.. 基于强化学习的部分线性离散时间系统的最优输出调节. 自动化学报. doi: 10.16383/j.aas.c190853

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190853?viewType=HTML

  

\[6\]  袁兆麟, 何润姿, 姚超, 李佳, 班晓娟. 基于强化学习的浓密机底流浓度在线控制算法. 自动化学报, 2021, 47(7): 1558-1571. doi: 10.16383/j.aas.c190348

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190348?viewType=HTML

  

\[7\]  熊珞琳, 毛帅, 唐漾, 孟科, 董朝阳, 钱锋. 基于强化学习的综合能源系统管理综述. 自动化学报, 2021, 47(10): 2321-2340. doi: 10.16383/j.aas.c210166

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210166?viewType=HTML

  

\[8\]  俞文武, 杨晓亚, 李海昌, 王瑞, 胡晓惠. 面向多智能体协作的注意力意图与交流学习方法. 自动化学报. doi: 10.16383/j.aas.c210430

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210430?viewType=HTML

  

\[9\]  冯建周, 马祥聪. 基于迁移学习的细粒度实体分类方法的研究. 自动化学报, 2020, 46(8): 1759-1766. doi: 10.16383/j.aas.c190041

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190041?viewType=HTML

  

\[10\]  梁星星, 冯旸赫, 马扬, 程光权, 黄金才, 王琦, 周玉珍, 刘忠. 多Agent深度强化学习综述. 自动化学报, 2020, 46(12): 2537-2557. doi: 10.16383/j.aas.c180372

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180372?viewType=HTML

  

\[11\]  孙长银, 穆朝絮. 多智能体深度强化学习的若干关键科学问题. 自动化学报, 2020, 46(7): 1301-1312. doi: 10.16383/j.aas.c200159

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200159?viewType=HTML

  

\[12\]  陈一鸣, 周登文. 基于自适应级联的注意力网络的超分辨重建. 自动化学报. doi: 10.16383/j.aas.c200035

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200035?viewType=HTML

  

\[13\]  张耀中, 胡小方, 周跃, 段书凯. 基于多层忆阻脉冲神经网络的强化学习及应用. 自动化学报, 2019, 45(8): 1536-1547. doi: 10.16383/j.aas.c180685

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180685?viewType=HTML

  

\[14\]  陈加, 张玉麒, 宋鹏, 魏艳涛, 王煜. 深度学习在基于单幅图像的物体三维重建中的应用. 自动化学报, 2019, 45(4): 657-668. doi: 10.16383/j.aas.2018.c180236

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180236?viewType=HTML

  

\[15\]  冯冲, 康丽琪, 石戈, 黄河燕. 融合对抗学习的因果关系抽取. 自动化学报, 2018, 44(5): 811-818. doi: 10.16383/j.aas.2018.c170481

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170481?viewType=HTML

  

\[16\]  胡长胜, 詹曙, 吴从中. 基于深度特征学习的图像超分辨率重建. 自动化学报, 2017, 43(5): 814-821. doi: 10.16383/j.aas.2017.c150634

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c150634?viewType=HTML

  

\[17\]  陈兴国, 俞扬. 强化学习及其在电脑围棋中的应用. 自动化学报, 2016, 42(5): 685-695. doi: 10.16383/j.aas.2016.y000003

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.y000003?viewType=HTML

  

\[18\]  郭复胜, 高伟. 基于辅助信息的无人机图像批处理三维重建方法. 自动化学报, 2013, 39(6): 834-845. doi: 10.3724/SP.J.1004.2013.00834

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00834?viewType=HTML

  

\[19\]  朱美强, 程玉虎, 李明, 王雪松, 冯涣婷. 一类基于谱方法的强化学习混合迁移算法. 自动化学报, 2012, 38(11): 1765-1776. doi: 10.3724/SP.J.1004.2012.01765

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01765?viewType=HTML

  

\[20\]  程玉虎, 冯涣婷, 王雪松. 基于状态-动作图测地高斯基的策略迭代强化学习. 自动化学报, 2011, 37(1): 44-51. doi: 10.3724/SP.J.1004.2011.00044

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00044?viewType=HTML

  

\[21\]  高阳, 陈世福, 陆鑫. 强化学习研究综述. 自动化学报, 2004, 30(1): 86-100.

http://www.aas.net.cn/cn/article/id/16352?viewType=HTML

  

\[22\]  田捷, 戴汝为. 由深度数据重建三维物体的一种方法. 自动化学报, 1996, 22(3): 286-292.

http://www.aas.net.cn/cn/article/id/17174?viewType=HTML

  

  

**近期文章**

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

  

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_008_516394224c5b.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_009_cfeed9f4b8b3.png)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_015_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_014_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_012_b77e1e92020a.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_013_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_011_f3267784f507.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_016_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_010_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_017_356e2f389e72.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_019_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_020_f3267784f507.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_021_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_023_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_022_4957609d8c7c.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_018_f3267784f507.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于DDPG的三维重建模糊概率点推理_images\img_024_f3267784f507.gif)

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