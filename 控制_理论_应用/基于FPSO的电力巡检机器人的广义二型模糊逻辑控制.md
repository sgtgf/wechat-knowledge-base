# 基于FPSO的电力巡检机器人的广义二型模糊逻辑控制

原创 自动化学报 自动化学报 2022-05-25 15:52 北京

> 原文地址: [https://mp.weixin.qq.com/s/O\_lKJ8uPfBRjWtLo6qPpXg](https://mp.weixin.qq.com/s/O_lKJ8uPfBRjWtLo6qPpXg)

**点击蓝字 关注我们**

✦

✦

  

**引用本文**

✦

✦

✦

✦

  

吴庆, 赵涛, 佃松宜, 郭锐, 李胜川, 方红帏, 韩吉霞. 基于FPSO的电力巡检机器人的广义二型模糊逻辑控制. 自动化学报, 2022, 48(6): 1482−1492 doi: 10.16383/j.aas.c190306

Wu Qing, Zhao Tao, Dian Song-Yi, Guo Rui, Li Sheng-Chuan, Fang Hong-Wei, Han Ji-Xia. General type-2 fuzzy logic control for a power-line inspection robot based on FPSO. Acta Automatica Sinica, 2022, 48(6): 1482−1492 doi: 10.16383/j.aas.c190306

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190306?viewType=HTML

  

**文章简介**

✦

✦

✦

✦

  

✦

**关键词**

✦

  

广义二型模糊逻辑控制器, 隶属函数, 模糊粒子群, 电力巡检机器人

  

  

✦

**摘   要**

✦

  

针对电力巡检机器人(Power-line inspection robot, PLIR)的平衡调节问题, 设计了广义二型模糊逻辑控制器(General type-2 fuzzy logic controller, GT2FLC); 针对GT2FLC中隶属函数参数难以确定的问题, 通过模糊粒子群(Fuzzy particle swarm optimization, FPSO)算法来优化隶属函数参数. 将GT2FLC的控制性能与区间二型模糊逻辑控制器(Interval type-2 fuzzy logic controller, IT2FLC)和一型模糊逻辑控制器(Type-1 fuzzy logic controller, T1FLC) 的控制性能进行对比. 除此之外, 还考虑了外部干扰对三种控制器控制效果的影响. 仿真结果表明, GT2FLC具有更好的性能和处理不确定性的能力.

  

✦

**引   言**

✦

  

高压输电线会在环境和机械的作用下出现一些故障或安全隐患, 例如绝缘子老化破损、导线断股、金具氧化腐蚀等, 若不能及时地排除这些问题, 可能会导致重大的事故. 所以高压输电线的巡检一直是供电企业的重要工作. 长时间以来, 我国高压输电线路的巡检工作都是通过人工完成的, 这不仅耗时耗力, 而且高压输电线常常会跨过高山以及江河这些人工难以到达的地方, 从而出现了巡检盲区. 为了使巡检工作变得更加高效和准确, 我国自上世纪90年代中期开始针对电力巡检机器人(Power-line inspection robot, PLIR)做了大量的研究, 用PLIR来代替人工进行高压输电线的巡查和维护. PLIR具有较高的效率和可靠性, 并且能轻易到达人工无法到达的巡检盲区. 因此, PLIR的研究具有重大的意义. PLIR在高压输电线上移动时, 需要面对许多的不确定性, 例如风力的干扰和电线的振动, 所以要对它进行控制使其达到平衡. 文献\[7-11\]提供的方法能够对PLIR的平衡进行控制, 然而这些控制器的设计方法需要利用被控对象精确的物理模型, 并且很少考虑一些不确定因素.

  

1975年, Mamdani等成功地将一型模糊逻辑控制器(Type-1 fuzzy logic controller, T1FLC)应用在蒸汽机的控制当中. 模糊逻辑控制器的设计不需要依赖精确的数学模型, 而仅需要由专家经验总结出的模糊规则. 不仅如此, 模糊逻辑控制器还具有处理不确定性的能力. 因此, T1FLC得到了大量的研究, 广泛运用于各种领域. 广义二型模糊逻辑控制器(General type-2 fuzzy logic controller, GT2FLC)是在T1FLC 的基础上提出来的, GT2FLC具有三维结构的隶属函数, 使得控制系统处理不确定性的能力增强, 所以得到广泛的关注. 但同时, 三维结构的隶属函数使得GT2FLC的运算复杂度也增加了许多. 区间二型模糊控制器(Interval type-2 fuzzy logic controller, IT2FLC)相比于GT2FLC, 通过牺牲一些控制性能来减少运算复杂度, 也得到了广泛应用. 为了简化广义二型模糊集(General type-2 fuzzy set, GT2FS)的运算, Mendel等提出了用α平面来表示广义二型模糊集的方法, GT2FS被分割成若干个区间二型模糊集(Interval type-2 fuzzy set, IT2FS).

  

在模糊逻辑控制器中, 隶属函数参数的选取对整个控制系统具有极大的影响. 一般情况下, 隶属函数参数的选取多是依赖于经验或者实验数据, 但随着控制精度要求的变高和被控系统的复杂性增加, 传统的参数选取方法已经很难达到要求. 尤其是在GT2FLC中, 三维结构的隶属函数使得整个控制系统无论是参数维数还是复杂度都大大增加. 因此, 在大量文献中, 提出了用优化算法来优化隶属函数参数的方法, 使得控制系统的性能更好.

  

粒子群优化算法(Particle swarm optimization, PSO)是应用比较广泛的一种群智能优化算法, 是Kennedy和Eberhart等在对鸟群捕食行为进行研究的基础上提出来的. 此后, 专家提出了许多改进的PSO算法, 并且将其应用于不同的领域上. Shi 等在基本的PSO算法上引入了惯性权重这一概念, 提出了标准PSO 算法. 惯性权重在标准PSO算法中具有平衡全局和局部寻优的能力. 在此基础上, 文献\[40\]提出了一种惯性权重线性递减的方法来改善标准PSO算法的寻优能力. 然而, 对于一些非线性系统, 这种线性递减的惯性权重并不完全适用. 文献\[41\]提出了一种通过模糊逻辑系统来调整惯性权重的PSO算法, 使得惯性权重的调整更加合理.

  

本文的创新点如下: 1)针对PLIR平衡调节问题, 设计了GT2FLC; 2) 针对GT2FLC系统中隶属函数参数多并且难以确定的问题, 基于FPSO (Fuzzy PSO)算法来优化GT2FLC中的隶属函数参数, 从而增加GT2FLC的性能; 3) 通过仿真验证了GT2FLC相比于IT2FLC和T1FLC 具有更好的性能和处理不确定性的能力.

  

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_000_5cf5529d553e.jpg)

图 1  PLIR模型

  

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_001_245591b8e625.jpg)

图 6  PLIR平衡控制和优化原理图  

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

✦

✦

✦

✦

  

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_002_9e4aa32ba1cb.jpg)

**吴   庆**

四川大学控制工程专业硕士研究生. 主要研究方向为模糊控制及其应用.

E-mail: 2017223035223@stu.scu.edu.cn

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_003_3f27902c4319.jpg)

**赵   涛**

四川大学电气工程学院副教授. 2010年获得西南交通大学学士学位. 2015年获得西南交通大学博士学位. 主要研究方向为二型模糊集理论和系统设计, 粗糙集和智能控制. 本文通信作者.

E-mail: zhaotaozhaogang@126.com

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_004_36acd3927373.jpg)

**佃松宜**

四川大学电气工程学院教授. 分别于1996和2002年获得四川大学学士和硕士学位. 2009年获得日本东本大学博士学位. 主要研究方向为先进控制理论和智能信号处理、电力电子系统及其控制、运动控制和机器人控制.

E-mail: scudiansy@scu.edu.cn

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_005_91e165b27a33.jpg)

**郭   锐**

国家电网山东电力公司教授级高级工程师. 分别于2001, 2003和2007年获得哈尔滨工业大学机械工程专业学士, 硕士和博士学位. 主要研究方向为先进控制理论和电力工业智能机器人.

E-mail: guoruihit@gmail.com

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_006_ce6d81727610.jpg)

**李胜川**

国网辽宁省电力有限公司电力科学研究院教授级高级工程师. 1991年毕业于哈尔滨工业大学. 主要研究方向为变电站设备的运行和维护以及人工智能在电网中的应用. 

E-mail: lnlsc@163.com

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_007_50eab0859597.jpg)

**方红帏**

四川大学控制工程与理论专业硕士研究生. 主要研究方向为模糊控制和自适应动态规划及其应用.

E-mail: weihongfang528@163.com

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_008_979a34d112c4.png)

**韩吉霞**

四川大学控制工程与理论专业硕士研究生. 主要研究方向为模糊控制和滑模控制及其应用.

E-mail: jixiahan@126.com

  

**相关文章**

✦

✦

✦

✦

  

**（请向上滑动阅读）**

  

\[1\]  王闯, 韩非, 申雨轩, 李学贵, 董宏丽. 基于事件触发的全信息粒子群优化器及其应用. 自动化学报. doi: 10.16383/j.aas.c200621

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200621?viewType=HTML

  

\[2\]  周宏宇, 王小刚, 单永志, 赵亚丽, 崔乃刚. 基于改进粒子群算法的飞行器协同轨迹规划. 自动化学报. doi: 10.16383/j.aas.c190865

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190865?viewType=HTML

  

\[3\]  余伟伟, 谢承旺, 闭应洲, 夏学文, 李雄, 任柯燕, 赵怀瑞, 王少锋. 一种基于自适应模糊支配的高维多目标粒子群算法. 自动化学报, 2018, 44(12): 2278-2289. doi: 10.16383/j.aas.2018.c170573

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170573?viewType=HTML

  

\[4\]  吕柏权, 张静静, 李占培, 刘廷章. 基于变换函数与填充函数的模糊粒子群优化算法. 自动化学报, 2018, 44(1): 74-86. doi: 10.16383/j.aas.2018.c160547

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c160547?viewType=HTML

  

\[5\]  吴俊君, 管贻生, 张宏, 周雪峰, 苏满佳. 仿人机器人视觉导航中的实时性运动模糊探测器设计. 自动化学报, 2014, 40(2): 267-276. doi: 10.3724/SP.J.1004.2014.00267

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00267?viewType=HTML

  

\[6\]  周晓君, 阳春华, 桂卫华, 董天雪. 带可变随机函数和变异算子的粒子群优化算法. 自动化学报, 2014, 40(7): 1339-1347. doi: 10.3724/SP.J.1004.2014.01339

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01339?viewType=HTML

  

\[7\]  莫红, 王涛. 广义区间二型模糊集合的词计算. 自动化学报, 2012, 38(5): 707-715. doi: 10.3724/SP.J.1004.2012.00707

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00707?viewType=HTML

  

\[8\]  袁宇浩, 张庆灵, 陈兵, 刘超. 基于模糊Lyapunov函数方法的模糊广义系统H∞控制. 自动化学报, 2008, 34(8): 929-936. doi: 10.3724/SP.J.1004.2008.00929

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00929?viewType=HTML

  

\[9\]  王宁, 孟宪尧. 输入采用广义梯形隶属函数的两维最简模糊控制器结构分析. 自动化学报, 2008, 34(4): 466-471. doi: 10.3724/SP.J.1004.2008.00466

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.00466?viewType=HTML

  

\[10\]  钟一文, 蔡荣英. 求解二次分配问题的离散粒子群优化算法. 自动化学报, 2007, 33(8): 871-874. doi: 10.1360/aas-007-0871

http://www.aas.net.cn/cn/article/doi/10.1360/aas-007-0871?viewType=HTML

  

\[11\]  俞建成, 张艾群, 王晓辉, 苏立娟. 基于模糊神经网络水下机器人直接自适应控制. 自动化学报, 2007, 33(8): 840-846. doi: 10.1360/aas-007-0840

http://www.aas.net.cn/cn/article/doi/10.1360/aas-007-0840?viewType=HTML

  

\[12\]  谢衍涛, 桑农, 张天序. 基于自适应隶属度函数的特征选择. 自动化学报, 2006, 32(4): 496-503.

http://www.aas.net.cn/cn/article/id/14389

  

\[13\]  张恩勤, 施颂椒, 翁正新. 采用三角型隶属度函数的模糊系统的插值特性. 自动化学报, 2001, 27(6): 784-790.

http://www.aas.net.cn/cn/article/id/16397?viewType=HTML

  

\[14\]  樊晓平, 徐建闽, 毛宗源. 受限柔性机器人基于遗传算法的自适应模糊控制. 自动化学报, 2000, 26(1): 61-67.

http://www.aas.net.cn/cn/article/id/15841?viewType=HTML

  

\[15\]  王守唐, 高东杰, 胡包钢. 新型模糊PID控制器的稳定性分析. 自动化学报, 2000, 26(增刊B): 61-65.

http://www.aas.net.cn/cn/article/id/14729?viewType=HTML

  

\[16\]  张新学, 王桂增, 大町真一郎, 阿曾弘具. 自学习模糊逻辑推理网络及模糊控制器的构成. 自动化学报, 1999, 25(5): 687-691.

http://www.aas.net.cn/cn/article/id/16650?viewType=HTML

  

\[17\]  刘向杰, 柴天佑, 张焕水. 三维模糊控制器的结构研究. 自动化学报, 1998, 24(2): 230-235.

http://www.aas.net.cn/cn/article/id/16890?viewType=HTML

  

\[18\]  谭群华, 李伟, 王永强, 孙增圻. 一种控制机械手的自调节模糊逻辑控制器. 自动化学报, 1997, 23(1): 85-89.

http://www.aas.net.cn/cn/article/id/17086?viewType=HTML

  

\[19\]  廖俊, 朱世强, 林建亚. 基于模糊神经网络的机器人实时控制研究. 自动化学报, 1997, 23(4): 574-576.

http://www.aas.net.cn/cn/article/id/16990?viewType=HTML

  

\[20\]  李伟, Janocha Hartmut. 一种高效能的机器人模糊控制方案. 自动化学报, 1995, 21(4): 400-409.

http://www.aas.net.cn/cn/article/id/13961?viewType=HTML

  

  

**近期文章**

✦

✦

✦

✦

[污水处理过程出水水质稀疏鲁棒建模](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077888&idx=1&sn=00ac4a402538e7d00e1e7728d3b91449&chksm=8131f74db6467e5bdc3b24d484092e79541739d5093d0913e2f430a0410d3305c80baf1059f7&scene=21#wechat_redirect)

[一类p规范型非线性系统预设性能有限时间H∞跟踪控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077888&idx=2&sn=86079f3d558330183997baa3fb6e40d8&chksm=8131f74db6467e5b532977ab27c179528aeebfe2c5956ae2ab2d3a291af9661c8b87f9dc2a1e&scene=21#wechat_redirect)

[基于自注意力模态融合网络的跨模态行人再识别方法研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077831&idx=1&sn=6a76db27f4c8f0f1b96e5b8c6771abeb&chksm=8131f68ab6467f9cd2a0f82cc7756e0501991992475ef16d1eadb77b3fb27ff72ec26342d4ae&scene=21#wechat_redirect)

[基于多相关HMT模型的DT CWT域数字水印算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077831&idx=2&sn=2c167c0a7155779ce961509e8dbedc79&chksm=8131f68ab6467f9cedcba9c6fce9d8d2fd00a89ec6f06c26b258aec8e9d98086ebd5d4d4ab14&scene=21#wechat_redirect)

[基于多阶运动参量的四旋翼无人机识别方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=1&sn=587115a6ffee6f33a5113a392bafd18e&chksm=8131f6cab6467fdc113dfc124638e9f0c73bfc2cc606025b4bc5c630bd6c5569b8948c3a2bad&scene=21#wechat_redirect)

[通信延时环境下异质网联车辆队列非线性纵向控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=2&sn=d497bd4b45545cdc7584e9c9568ef4e0&chksm=8131f6cab6467fdc01f675bd4ea8b4823af1ff46862041b55d3b58ce8903265b6efd60bbc281&scene=21#wechat_redirect)

[图像异常检测研究现状综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=1&sn=2535d4c0961f79a4e6e28fcec08d2fed&chksm=8131f675b6467f63e42dec407492be9cccdbf245e71dd2cd84b1d4af8072250b8b9f0f01329c&scene=21#wechat_redirect)

[一种面向散乱点云语义分割的深度残差−特征金字塔网络框架](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=2&sn=215768980627e71df84a39bb85729db9&chksm=8131f675b6467f63c4393a4fce391e67237c29928058a3e2dfd5971800e636c3baa090fb4dba&scene=21#wechat_redirect)

[迭代学习模型预测控制研究现状与挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077623&idx=1&sn=1d8a9d2a39cab773fd8b49e8e73c55fd&chksm=8131f1bab64678ac33f4512961aa95fe90d40e9dbd6c4e13cad77295f4940b6aef050700caac&scene=21#wechat_redirect)

[《自动化学报》2022年48卷5期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077579&idx=1&sn=d2cf8dfd19e4104f5958b4ad6356239d&chksm=8131f186b6467890faae7fb5e1bdb23ca54b21a631ce9c32c47dc615ff926149628b9bf9b64b&scene=21#wechat_redirect)

[基于多节点拓扑重叠测度高阶MRF模型的图像分割](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077552&idx=1&sn=c40ec0d4fa5686c5221844003ead45de&chksm=8131f1fdb64678eb229154ac8f5cf5166c6a0bac57e1f50b65d7eba7e99778e2f7d80fb7547b&scene=21#wechat_redirect)

[基于分布式有限感知网络的多伯努利目标跟踪](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077514&idx=1&sn=ca1172c74ab9e32db9bca7c66082fee8&chksm=8131f1c7b64678d1129b3d8832fe3670fdde3ed267c0f98f178110b649b4042c8c903b2f673f&scene=21#wechat_redirect)

[一类非线性系统模糊自适应固定时间量化反馈控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077514&idx=2&sn=eb7906d16b1727ef482e6bf319f0a7e1&chksm=8131f1c7b64678d1c5a98c4614c347fee33b2d2498c76d1e5c950fce2cc304317670650273ee&scene=21#wechat_redirect)

[基于凸近似的避障原理及无人驾驶车辆路径规划模型预测算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077442&idx=1&sn=432dd266dbf5c99ca845248bb09df5c1&chksm=8131f10fb646781977984ae605369c8004b7c57f61747a28c49813698802554d4a11047abea0&scene=21#wechat_redirect)

[多级注意力传播驱动的生成式图像修复方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077391&idx=1&sn=0e34736530d8ef540b4abaa08362a0bf&chksm=8131f142b6467854f8396d0ea54b34946bbe5fb78f29a281271dab33867ae129a5b401c36277&scene=21#wechat_redirect)

[一种噪声容错弱监督矩阵补全的生存分析方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077391&idx=2&sn=b84c8750f960526618606c0b97e56d06&chksm=8131f142b6467854d25b0873e4bcb1b30dd5c1ee99db58bbd7b6d5ea5109e868878d7ee1689d&scene=21#wechat_redirect)

[通信受限的多智能体系统二分实用一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=1&sn=02d81030a428cbb4275f4ff076068f08&chksm=8131f084b646799235c36b924d470f26f4e4da762c08d57e951613e4f74a57febdc8c03777c9&scene=21#wechat_redirect)

  

**热点文章**

✦

✦

✦

✦

[通信延时环境下异质网联车辆队列非线性纵向控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=2&sn=d497bd4b45545cdc7584e9c9568ef4e0&chksm=8131f6cab6467fdc01f675bd4ea8b4823af1ff46862041b55d3b58ce8903265b6efd60bbc281&scene=21#wechat_redirect)

[图像异常检测研究现状综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=1&sn=2535d4c0961f79a4e6e28fcec08d2fed&chksm=8131f675b6467f63e42dec407492be9cccdbf245e71dd2cd84b1d4af8072250b8b9f0f01329c&scene=21#wechat_redirect)

[迭代学习模型预测控制研究现状与挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077623&idx=1&sn=1d8a9d2a39cab773fd8b49e8e73c55fd&chksm=8131f1bab64678ac33f4512961aa95fe90d40e9dbd6c4e13cad77295f4940b6aef050700caac&scene=21#wechat_redirect)

[2022年第05期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077579&idx=1&sn=d2cf8dfd19e4104f5958b4ad6356239d&chksm=8131f186b6467890faae7fb5e1bdb23ca54b21a631ce9c32c47dc615ff926149628b9bf9b64b&scene=21#wechat_redirect)

[基于凸近似的避障原理及无人驾驶车辆路径规划模型预测算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077442&idx=1&sn=432dd266dbf5c99ca845248bb09df5c1&chksm=8131f10fb646781977984ae605369c8004b7c57f61747a28c49813698802554d4a11047abea0&scene=21#wechat_redirect)

[通信受限的多智能体系统二分实用一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=1&sn=02d81030a428cbb4275f4ff076068f08&chksm=8131f084b646799235c36b924d470f26f4e4da762c08d57e951613e4f74a57febdc8c03777c9&scene=21#wechat_redirect)

[【热点专题】多目标优化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962438&idx=1&sn=83b21f7b6a63fc4e01c2f4718b2aae92&chksm=f2943387c5e3ba91ce32286c06f215a989233f55bbbd5c7d436a43c40615bb5ae208d0f0f228&scene=21#wechat_redirect)

[一种基于深度迁移学习的滚动轴承早期故障在线检测方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076931&idx=2&sn=128b1673843353529d8b130f372bb46f&chksm=8131f30eb6467a18e0f645b207ada16cd601b791297b32b1caccf72daa50b55063074ec4fdc3&scene=21#wechat_redirect)

[基于多智能体强化学习的乳腺癌致病基因预测](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076931&idx=1&sn=a62942cd056156ad5a885d6350e8b373&chksm=8131f30eb6467a18ffbee77b25fb9b0417b08918d3625d04c89a3a9bcb1490eece239c5fda25&scene=21#wechat_redirect)

[基于事件触发的离散MIMO系统自适应评判容错控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076863&idx=1&sn=aec9cf55a1b0b8eae741999601a8c6df&chksm=8131f2b2b6467ba4c20d388390d4ac191555e5d00d77f510f72af77359d18bdca5230ea52df0&scene=21#wechat_redirect)

[水下多机器人系统综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076668&idx=1&sn=b50e43710be8208fd711cd45943e95c0&chksm=8131f271b6467b675083610c925ce0d329e201ddab5c8e935eb266fbf41418395459fdd0618d&scene=21#wechat_redirect)

[基于事件触发二阶多智能体系统的固定时间比例一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=2&sn=fcf40a44a926c9034593207d6a614e95&chksm=8131f250b6467b46e70d4ef5f10226fbed60a0d12e327f83c793d86e7815ff00e4fcafcac295&scene=21#wechat_redirect)

[基于事件触发的分布式优化算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076142&idx=2&sn=b074793ec4be44ea08efb78617dcdcc0&chksm=8131fc63b6467575b7f6d698909e56be16089f8f56ca415294483ff6f40902c7546417f82531&scene=21#wechat_redirect)

  

**期刊动态**

✦

✦

✦

✦

[《自动化学报》多名作者入选爱思唯尔2021中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=1&sn=ee78f108cf0551024cb95c33241a5f1d&chksm=8131f250b6467b46c8d4af1bd63381328a80c65ade97a6daa97e3bb4538b39c6f761da238066&scene=21#wechat_redirect)

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

  

**期刊目录**

✦

✦

✦

✦

[2022年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962842&idx=1&sn=b91e3ab1206e29fdb9287ebbf7b07638&chksm=f2943d1bc5e3b40d9447d720203aca6ca2ae6662b85e3d9d5768c2da45df90cc31e49f895255&scene=21#wechat_redirect)

[2022年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962369&idx=1&sn=ae2c4584f8904be917b600e67005ae03&chksm=f29433c0c5e3bad6d78382b3c09015aadb09e040b8fc8c319c4f554fd592fe677797000340cd&scene=21#wechat_redirect)

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_009_6cace321946c.png)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_010_7493936608e8.png)

  

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_011_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_012_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_013_ce5bb18598a5.jpg)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_014_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_015_6f519018fcaf.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_016_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_017_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_018_e4121b55c32a.jpg)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_019_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_020_6f519018fcaf.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_021_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_022_6f519018fcaf.gif)

![](D:\电脑文件\公众号知识库\控制_理论_应用\基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images\img_000_e75825af2b35.jpg)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_024_6f519018fcaf.gif)

![](基于FPSO的电力巡检机器人的广义二型模糊逻辑控制_images/img_025_6f519018fcaf.gif)

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