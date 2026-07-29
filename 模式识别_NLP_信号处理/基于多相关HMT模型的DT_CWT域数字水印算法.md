# 基于多相关HMT模型的DT CWT域数字水印算法

原创 自动化学报 自动化学报 2022-05-23 17:47 北京

> 原文地址: [https://mp.weixin.qq.com/s/fE92J3qLK9arcHiW9wgTEA](https://mp.weixin.qq.com/s/fE92J3qLK9arcHiW9wgTEA)

点击蓝字

关注我们

  

**引用本文**

王向阳, 牛盼盼, 杨红颖, 李丽. 基于多相关HMT模型的DT CWT域数字水印算法. 自动化学报, 2021, 47(12): 2857−2869 doi: 10.16383/j.aas.c190075

Wang Xiang-Yang, Niu Pan-Pan, Yang Hong-Ying, Li Li. A blind watermark decoder in DT CWT domain using Weibull distribution-based vector HMT model. Acta Automatica Sinica, 2021, 47(12): 2857−2869 doi: 10.16383/j.aas.c190075

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190075?viewType=HTML

  

**文章简介**

  

**关键词**

  

音频水印, 向量隐马尔科夫树, Weibull混合模型, 局部信息熵, 双树复数小波变换, 局部最优检测器

  

**摘   要**

  

本文以双树复数小波变换(Dual-tree complex wavelet transform, DT CWT)及隐马尔科夫树(Hidden Markov tree, HMT)理论为基础, 提出了一种基于Weibull向量HMT模型的DT CWT域数字音频盲水印算法. 原始数字音频首先进行DT CWT, 然后利用局部信息熵刻画音频内容特征并据此确定出重要DT CWT系数段, 进而将水印信息乘性嵌入到重要DT CWT高频系数幅值内. 水印检测时, 首先根据DT CWT系数幅值的边缘分布及系数间的多种相关性(包括子带内、尺度间、分解树间等相关性), 构造出Weibull混合向量HMT统计模型, 并估计出其统计模型参数; 然后, 利用局部最大势能(Locally most powerful, LMP)检验理论构造出局部最优检测器(Locally optimum decoder, LOD)以盲提取水印信息. 仿真实验结果表明, 本文算法可以较好地获得不可感知性、鲁棒性、水印容量之间的良好平衡, 其总体性能优于现有同类音频水印算法.

  

**引   言**

  

作为传统加密方法的有效补充手段, 数字水印(Digital watermarking)是一种可以在开放的网络环境下保护版权和认证来源及完整性的新技术, 近年来已引起人们的高度重视, 并成为国际学术界研究的一个热点. 依据水印信息所附载的数字媒体形式, 人们习惯上将数字水印划分为图像水印、音频水印、视频水印、文本水印等. 本文重点关注数字音频水印技术.

  

理论上讲, 数字水印技术应同时满足三项基本要求, 即不可感知性、鲁棒性、水印容量. 其中, 不可感知性是指嵌入的水印信息不应该影响人对载体的感知效果; 鲁棒性则是指在对含水印载体进行常规信号处理或几何攻击后依然能够检测出水印信息的能力; 水印容量指的是单位区域或时间内嵌入的水印比特数, 显然水印容量越大越好. 不可感知性、鲁棒性、水印容量是衡量一个数字水印算法优劣的最重要指标, 而这三方面却又存在着固有的相互矛盾关系, 三者之间的最佳平衡也成为数字水印算法所共同追求的目标.

  

数字水印技术发展到今天, 已有大量不同的数字水印算法. 但遗憾的是, 现有绝大多数数字水印方案往往着重关注数字水印的某一单项技术要求(不可感知性或鲁棒性或水印容量), 并相继提出了不可感知水印、鲁棒水印、大容量水印等方案, 而没有全面充分地考虑不可感知性、鲁棒性、水印容量三者之间的最佳平衡问题, 从而严重影响了数字水印的隐藏效果. 也就是说, 现有绝大多数数字水印技术均无法有效同时满足数字水印所需的三项基本要求. 因此, 可有效保持不可感知性、鲁棒性、水印容量之间良好平衡的高性能数字水印算法研究仍然是一项富有挑战性的工作.

  

一般说来, 为全面提高数字水印的不可感知性、鲁棒性和水印容量, 应该充分结合人类视觉掩蔽特性与载体自身统计特性而进行数字水印信息的嵌入与检测. 基于统计模型的变换域乘性水印较好地体现了上述思想, 为有效解决不可感知性、鲁棒性、水印容量之间良好平衡问题提供了可能的解决方向. 基于统计模型的变换域乘性水印工作原理为: 在水印嵌入环节, 利用简单的乘性策略调制原始载体信号, 以保证水印嵌入强度与载体信号强度成一定比例变化, 让人更不容易察觉, 从而最大程度地平衡鲁棒性和不可感知性; 在水印检测环节, 结合能够充分体现载体自身特性的多尺度变换特性(多分辨率性、能量聚集性等), 有效利用变换系数的统计特性而构造数字水印检测器, 以检测和提取数字水印信息.

  

近年来, 基于统计模型的高性能数字水印算法研究日益受到关注, 并已广泛应用于数字图像领域, 但在数字音频领域内的应用研究却显得相对滞后, 且仅有的统计模型音频水印方案检测性能并不理想. Akhaee等首先将水印信息直接嵌入到原始载体的音频样本内, 然后利用Gaussian分布和Laplacian分布对含水印音频样本进行统计建模, 同时结合极大似然方法估计统计模型参数并构造数字水印检测器. 由于该算法估计模型参数时需要原始载体部分信息, 属于半盲方案, 故不利于实际应用. Majoul等结合广义高斯分布(Generalized Gaussian distribution, GGD)与最大后验(Maximum a posteriori, MAP)参数估计理论, 提出了一种基于统计模型的空间域音频水印方案. 然而, 其数字水印检测器的抗攻击能力较弱. 唐鑫等利用高斯混合模型(Gaussian mixture model, GMM)刻画数字音频的DCT (Discrete cosine transform)域Mel频率倒谱系数(Mel-scale frequency cepstral coefficients, MFCC)统计特性, 并使用变分贝叶斯方法估计GMM模型参数, 同时结合最大似然检验理论构造了数字水印检测器. Akhaee等以样本累加统计(Cumulative sums tatistics)理论与中心极限定理为基础, 提出了一种与载体音频信号分布近似无关的极大似然数字水印检测算法, 但该检测算法的时间复杂度很高.

  

本文以双树复数小波变换(Dual-tree complex wavelet transform, DT CWT)及隐马尔科夫树(Hidden Markov tree, HMT)理论为基础, 提出了一种基于Weibull向量HMT模型的DT CWT域数字音频盲水印算法. 由于算法结合局部信息熵自适应确定了数字水印嵌入位置、建立了可全面反映DT CWT系数局部统计特性与多种相关性的Weibull混合向量HMT统计模型、设计了适合于非高斯与小样本的局部最优检测器, 故可获得较好的工作性能.

  

本文结构安排如下: 第1节全面分析了DT CWT系数幅值的统计特性; 第2节给出了基于Weibull混合分布的向量HMT模型; 第3节和第4节叙述了数字水印的嵌入和提取过程; 第5节给出了本算法的实验结果及对比结果; 第6节对全文进行了总结.

  

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_000_c6bd4f73fb27.jpg)

图 1  DT CWT域系数幅值的子带内、尺度间、分解树间Chi-plot图

  

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_001_3964f8b05ec0.jpg)

图 2  DT CWT域向量HMT模型

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_002_11d07cfcd312.png)

**王向阳**

辽宁师范大学计算机科学与技术学院教授. 主要研究方向为网络信息安全与智能多媒体计算. 本文通信作者.

E-mail: wxy37@126.com

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_003_06fb72c5c0b9.png)

**牛盼盼**

博士, 辽宁师范大学计算机与信息技术学院副教授. 主要研究方向为网络信息安全与图像处理.

E-mail: niupanpan3333@163.com

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_004_3bb7101cf7b0.jpg)

**杨红颖**

辽宁师范大学计算机科学与技术学院教授. 主要研究方向为多媒体信息安全与图像处理.

E-mail: yhy65@126.com

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_005_8322fdcca19d.png)

**李   丽**

辽宁师范大学计算机科学与技术学院硕士研究生. 主要研究方向为信息隐藏与数字水印.

E-mail: workprocess0003@163.com

  

**相关文章**

  

**（请向上滑动阅读）**

  

\[1\]  熊祥光. 空域强鲁棒零水印方案. 自动化学报, 2018, 44(1): 160-175. doi: 10.16383/j.aas.2018.c160478

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c160478?viewType=HTML

  

\[2\]  姜传贤, 杨铁军, 董明刚, 程小辉, 李智. 基于线性空间隐藏模型的可逆图像水印算法. 自动化学报, 2014, 40(10): 2324-2333. doi: 10.3724/SP.J.1004.2014.02324

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02324?viewType=HTML

  

\[3\]  崔汉国, 刘健鑫, 李正民. 基于金字塔技术的STL模型数字水印算法. 自动化学报, 2013, 39(6): 852-860. doi: 10.3724/SP.J.1004.2013.00852

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00852?viewType=HTML

  

\[4\]  张仁斌, 吴佩, 陆阳, 郭忠义. 基于混合马尔科夫树模型的ICS异常检测算法. 自动化学报, 2020, 46(1): 127-141. doi: 10.16383/j.aas.2018.c170493

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170493?viewType=HTML

  

\[5\]  杨本芊, 徐琳, 陈强. 基于图像的空气质量等级检测. 自动化学报, 2020, 46(11): 2404-2416. doi: 10.16383/j.aas.c180041

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180041?viewType=HTML

  

\[6\]  李晓航, 朱芳来. 延迟不确定马尔科夫跳变系统的执行器和传感器故障同时估计方法. 自动化学报, 2017, 43(1): 72-82. doi: 10.16383/j.aas.2017.c150389

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c150389?viewType=HTML

  

\[7\]  孙广路, 宋智超, 刘金来, 朱素霞, 何勇军. 基于最大信息系数和近似马尔科夫毯的特征选择方法. 自动化学报, 2017, 43(5): 795-805. doi: 10.16383/j.aas.2017.c150851

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c150851?viewType=HTML

  

\[8\]  张光华, 韩崇昭, 连峰, 曾令豪. Pairwise马尔科夫模型下的势均衡多目标多伯努利滤波器. 自动化学报, 2017, 43(12): 2100-2108. doi: 10.16383/j.aas.2017.c160430

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160430?viewType=HTML

  

\[9\]  关秋菊, 罗晓牧, 郭雪梅, 王国利. 基于隐马尔科夫模型的人体动作压缩红外分类. 自动化学报, 2017, 43(3): 398-406. doi: 10.16383/j.aas.2017.c160130

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160130?viewType=HTML

  

\[10\]  李稚, 谭德庆. 基于马尔科夫决策过程的ATO系统独立组件与产品双需求最优决策研究. 自动化学报, 2016, 42(5): 782-791. doi: 10.16383/j.ass.2016.c150488

http://www.aas.net.cn/cn/article/doi/10.16383/j.ass.2016.c150488?viewType=HTML

  

\[11\]  王楠, 艾海舟. 融合局部与全局信息的头发形状模型. 自动化学报, 2014, 40(4): 615-623. doi: 10.3724/SP.J.1004.2014.00615

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00615?viewType=HTML

  

\[12\]  李岳场, 钟麦英. 线性离散马尔科夫跳跃系统最优故障检测. 自动化学报, 2013, 39(6): 926-932. doi: 10.3724/SP.J.1004.2013.00926

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.00926?viewType=HTML

  

\[13\]  黄雄华, 王宏霞, 蒋伟贞, 崔更申. 基于重心的抗同步攻击的音频水印算法. 自动化学报, 2013, 39(8): 1321-1329. doi: 10.3724/SP.J.1004.2013.01321

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.01321?viewType=HTML

  

\[14\]  陶剑文, 王士同. 局部保留最大信息差υ-支持向量机. 自动化学报, 2012, 38(1): 97-108. doi: 10.3724/SP.J.1004.2012.00097

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00097?viewType=HTML

  

\[15\]  林晓丹. 基于高斯混合模型的DCT域水印检测方法. 自动化学报, 2012, 38(9): 1445-1448. doi: 10.3724/SP.J.1004.2012.01445

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01445?viewType=HTML

  

\[16\]  邓鑫洋, 邓勇, 章雅娟, 刘琪. 一种信度马尔科夫模型及应用. 自动化学报, 2012, 38(4): 666-672. doi: 10.3724/SP.J.1004.2012.00666

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.00666?viewType=HTML

  

\[17\]  孔淑兰, 张召生. 带马尔科夫跳和乘积噪声的随机系统的最优控制. 自动化学报, 2012, 38(7): 1113-1118. doi: 10.3724/SP.J.1004.2012.01113

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01113?viewType=HTML

  

\[18\]  马莉, 达飞鹏, 吴凌尧. 带马尔科夫跳的模态相关时变时滞随机系统的状态反馈控制器设计. 自动化学报, 2010, 36(11): 1601-1610. doi: 10.3724/SP.J.1004.2010.01601

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.01601?viewType=HTML

  

\[19\]  侯彪, 徐婧, 刘凤, 焦李成. 基于第二代Bandelet域隐马尔科夫树模型的图像分割. 自动化学报, 2009, 35(5): 498-504. doi: 10.3724/SP.J.1004.2009.00498

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.00498?viewType=HTML

  

\[20\]  王向阳, 牛盼盼. 基于音频统计特性的数字水印嵌入算法. 自动化学报, 2008, 34(8): 1001-1003. doi: 10.3724/SP.J.1004.2008.01001

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.01001?viewType=HTML

  

\[21\]  王红霞, 陈波, 成礼智. 基于主方向构造二分树复数小波的新方法. 自动化学报, 2006, 32(1): 47-53.

http://www.aas.net.cn/cn/article/id/15765?viewType=HTML

  

\[22\]  张荣跃, 倪江群, 黄继武. 基于小波域HMM模型的自适应图像水印算法. 自动化学报, 2005, 31(5): 705-712.

http://www.aas.net.cn/cn/article/id/15971?viewType=HTML

  

\[23\]  叶昊, 王桂增, 方崇智. 小波变换在故障检测中的应用. 自动化学报, 1997, 23(6): 736-741.

http://www.aas.net.cn/cn/article/id/16925?viewType=HTML

  

  

**近期文章**

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

[《自动化学报》多名作者入选爱思唯尔2021中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=1&sn=ee78f108cf0551024cb95c33241a5f1d&chksm=8131f250b6467b46c8d4af1bd63381328a80c65ade97a6daa97e3bb4538b39c6f761da238066&scene=21#wechat_redirect)

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

  

**期刊目录**

[2022年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962842&idx=1&sn=b91e3ab1206e29fdb9287ebbf7b07638&chksm=f2943d1bc5e3b40d9447d720203aca6ca2ae6662b85e3d9d5768c2da45df90cc31e49f895255&scene=21#wechat_redirect)

[2022年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962369&idx=1&sn=ae2c4584f8904be917b600e67005ae03&chksm=f29433c0c5e3bad6d78382b3c09015aadb09e040b8fc8c319c4f554fd592fe677797000340cd&scene=21#wechat_redirect)

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

  

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_006_a5f594d1e6a7.png)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_007_acbda35a92e0.png)

  

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_008_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_009_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_010_74637241bd7e.jpg)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_011_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_012_f7bbcbfa4345.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_013_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_014_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_015_a7a27e248e9c.jpg)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_016_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_017_f7bbcbfa4345.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_018_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_019_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_020_4b437a8d81fe.jpg)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_021_f7bbcbfa4345.gif)

![](基于多相关HMT模型的DT_CWT域数字水印算法_images/img_022_f7bbcbfa4345.gif)

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