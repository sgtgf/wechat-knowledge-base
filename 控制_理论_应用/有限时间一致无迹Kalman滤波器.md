# 有限时间一致无迹Kalman滤波器

原创 自动化学报 自动化学报 2020-09-25 08:51 北京

> 原文地址: [https://mp.weixin.qq.com/s/4dgAGJvkGiza0Q0VoiPsRw](https://mp.weixin.qq.com/s/4dgAGJvkGiza0Q0VoiPsRw)

**非线性系统导航定位**是指：通过一组确定的散布点集，计算新息协方差，然后根据新息在稳态滤波下的平稳遍历性质，确定模糊规则，在线调整噪声方差，从而计算出确定的目标位置。  

**协同定位**是提高定位精度及可用性等定位性能的有效手段，其核心思想是允许未知位置节点之间进行信息交互。尽管协同定位的具体方式有所不同，但其有着相同的目标：提升单个节点以及整个系统的定位性能，实现“定位资源不为所有但为所用”的目的。

  

**刘鹏, 田玉平, 张亚. 有限时间一致无迹Kalman滤波器. 自动化学报, 2020, 46(7): 1357-1366**  

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170726_

  

常用的系统导航定位方法目前已经在军事及民用等各个领域得到了广泛应用，但在某些恶劣场景如峡谷(包括自然峡 谷与城市峡谷)、植被覆盖严重地区、室内及地下停车场等，常用的导航定位技术仍无法满足应用需求，为弥补上述不足，传统做法是建立各种陆基、星基、机载增强系统、铺设专用设备以及组合导航系统等。即使在无线传感器网络技术已经取得很大进步的前提下，其利用也有相应的特殊性，同时在很多应用场景下常用的定位基础设施无法全面使用。而临时布设基础设施也存在很大难度或者无法全面覆盖所有的传感器节点，难以为每个传感器节点提供位置，因此各传感器节点难以全部依靠外部设置支持来获得位置信息。  

面对这些问题，常用的方法已无法满足高精度导航定位的要求，因此亟需对导航定位算法进行改进。

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFDTuOxxS1JhbTFvcBXg8HanNjEPMoIj24nQZIUHrw3XoViaibFEmtfp8A/640?wx_fmt=gif)

  

01

利用协同定位思想

基于协同作用下的非线性系统导航定位是当前系统导航定位的发展趋势，可以实现平台间角度、距离甚至距离向量的测量。通过协同，可以提高导航服务精度和可用性，较好地解决城区环境中的信号衰落和多径问题。  

其常见的应用如下：

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFzFakyePrNnr0roTANg1TwSTriaQHibE66M8bnLkeTtRng9OIVCicmReXg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

**_空间尘埃探测_**

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFUr0vFRHzvibBWF61o2DcJ9oTgEUnmkL5PMQWxINef2RZH0UN3kSLjIA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

**_车辆协同导航定位_**

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFzHygYto9vl4msHGblMuQ436axmGoNFzmiaPe8Qibnb9glOM5bbDr2ySg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

**_潜航器协同导航定位_**

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUF37jrXxKcww345zEjQFfEnx3S3iaqCQgMtn9qXHNtbzdNHhahWQDkxbA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQwAFPduXwlYZNjjDTbVPtKluibE0Az05y2qM7rxTLvInLrIvS9at8PA/640?wx_fmt=gif)

**_飞行器协同导航定位_**

  

02

利用有限时间平均一致性思想

在协同定位场景中，一般将定位算法分为线性定位算法和非线性定位算法。要实现高精度的系统导航及定位，仅仅依靠线性定位算法是不能满足要求的。本文提出一种基于有限时间一致的分布式无迹Kalman滤波定位算法。借助离散多智能体系统有限时间平均一致算法的思想，利用多个传感器，针对无向通信和有向通信非线性系统分别设计了两种不同的滤波算法。  

对于无向连通的非线性系统，利用节点存储的一致性算法的迭代值构造差向量，由该差向量构成的 Hankel 矩阵的核来得到分布式无迹 Kalman 滤波器，并通过利用误差协方差矩阵的逆来构造 Lyapunov 函数，从而进一步得出具有相对高精度的目标位置。对于有向强连通的非线性系统，结合比率一致和 Hankel 矩阵的核来设计分布式无迹 Kalman 滤波器，同样可以达到比较满意的跟踪效果。

目前，在系统导航定位算法领域已经有许多研究。本文利用分布式思想，让各个节点根据自身的观测值以及通过协同获得的观测值或其它信息自主完成滤波计算，然后各个节点将自身滤波计算的结果播发至全网。在分布式定位中，不需要功能强大的中心节点，避免了关键节点的存在对系统鲁棒性的潜在威胁，同时具有较好的可扩展性。在此基础上，通过仿真例子验证了所提滤波算法的跟踪效果。

  

**_作者简介_**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFOatkTs7aTqR3NicIfviazsgqyCHibFC20GASf82SL6HH92QNg6NZqq9nw/640?wx_fmt=jpeg)

**刘  鹏**

中北大学副教授, 主要研究方向为分布式估计与优化, 惯性与组合导航, 深度强化学习等. 

E-mail: pengliu@nuc.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFbFd0TbpiaiaDv0aS4sNApA1fXJyEia8uicpoRG82vGtjphlfLp3tsPwicjA/640?wx_fmt=jpeg)

**田玉平**

东南大学自动化学院教授, 杭州电子科技大学自动化学院教授, 主要研究方向为无线传感器网络, 多机器人系统, 多智能体学习与进化. 本文通信作者.

E-mail: yptian@hdu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFQpJ8A2jKm9uBTXiaB3XGbib6a7WqkTjq0ciaOyXOKAVbZSVtibiaePY11vA/640?wx_fmt=jpeg)

**张  亚**

东南大学教授, 主要研究方向为多智能体系统, 安全估计和控制, 强化学习等.

E-mail: yazhang@seu.edu.cn

  

**期刊动态**

[2020年度国家杰青名单公布，《自动化学报》多位专家入选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955856&idx=1&sn=b99cae140e826eb44167f31ff0df69e6&chksm=f2941a51c5e39347a56362162fb568dd1b37277274bfcf8b59178930104609f57bc2cb48652d&scene=21#wechat_redirect)

[《自动化学报》20篇文章入选2019“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955739&idx=1&sn=2b92c97a33944a61b36913f471989573&chksm=f29419dac5e390cc872091f2bf7d55f3d2e9cba612010294615680cc3020571ae80a3dda30d0&scene=21#wechat_redirect)

[《自动化学报》多位编委和作者入选2019年中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955656&idx=1&sn=3855f19fc1a4cbd306b580fd974e2442&chksm=f2941909c5e3901f25ed372ddda199e10bd1f1e9da57ff240b37327020a993c87fe2fe021ee0&scene=21#wechat_redirect)

[【热点综述】2019年综述TOP20](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955584&idx=1&sn=b6460d48b4c365e8062c2b45bbcf8e38&chksm=f2941941c5e390574162e362028c22a441fa00ffbc0634599685c34f8a3a3446eaf90b8c0723&scene=21#wechat_redirect)

[自动化学报和IEEE/CAA JAS两刊编委获得2019年度国家自然科学基金项目](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955434&idx=1&sn=782abbffd5f83d1608e8bb509339ce85&chksm=f294182bc5e3913d5593db7f9f4c34e6266d942fc3c540165a545437b86f2756036fd9c62e25&scene=21#wechat_redirect)  

[《自动化学报》多名编委荣获“杨嘉墀科技奖”等奖项](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955508&idx=2&sn=7fe0b57657f4f9cfadde5ee398c67de4&chksm=f29418f5c5e391e31af1fd99cf5c0b61a5c1c44d8b78e903b71b0628054f29a34c2a6c7972e5&scene=21#wechat_redirect)  

[《自动化学报》发表文章再度入选中国科协优秀科技论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955422&idx=1&sn=491e442f16e1a088682cdac5316378df&chksm=f294181fc5e391094ce80df880894721ffad2c61b3b0cb0c2858601e846897c5061bb8cc8235&scene=21#wechat_redirect)  

[国家科技重大专项&重点研发计划等资助论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955416&idx=1&sn=152515bf1cc9800199a8da3d456f6b54&chksm=f2941819c5e3910ff3f98d74e2aae494046b5dbb6f6096c3d5c0c3d5ba134cf10f5e7af5bb86&scene=21#wechat_redirect)  

[国家自然科学基金资助论文精选（一）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955406&idx=1&sn=3c905081a57f1deb156b9f6f12b57a56&chksm=f294180fc5e3911966de31a290e784e8d5856902968fb29b3d3242a2e2d26104d526d217c79b&scene=21#wechat_redirect)  

[国家自然科学基金资助论文精选（二）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955406&idx=2&sn=be8a73e34b097480f593ad399d4ce4d1&chksm=f294180fc5e39119440ddd930d887fd848daf3104587519b2295e2e32d97a5cb9cfd7f4e7bc3&scene=21#wechat_redirect)  

[《自动化学报》2019上半年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955383&idx=1&sn=146b8efdb966258f38d8a80dad78e270&chksm=f2941876c5e39160ea3949bf480b71c8d0daaf10aa4567558970d889b3a70988a635f44a4c5b&scene=21#wechat_redirect)  

[【热点专题】模糊系统](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955382&idx=1&sn=07f211b9dd9d8c222f96d59f9960fd4f&chksm=f2941877c5e3916198db46714ecd96c3273dc248fa10dc75f84212a2531159e31f25f40c73c2&scene=21#wechat_redirect)  

[《自动化学报》入选2019谷歌学术中文期刊TOP100，这些高影响力文章不容错过](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955369&idx=1&sn=3e2c817818af2cb8752f819667ddd347&chksm=f2941868c5e3917e5b02ef313a656a02270cad13e6e2ab08b617dad2091c4842153a3503a69b&scene=21#wechat_redirect)  

[【热点综述】2019年最新文章](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955359&idx=1&sn=cd768b5f2572472b6465c3f06b21a803&chksm=f294185ec5e3914807e5a5c9ec3143c15eb94a38ae51f5608acbc21b9b16cd20da65649401e0&scene=21#wechat_redirect)  

[【热点专题】流程工业自动化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955342&idx=1&sn=0301d93b276aaaf27fe36d71ee2c841d&chksm=f294184fc5e391596cf037d93097ab69ee48b5a3c36c5fd5dfdaa14a302c445a9ec4cf9dab11&scene=21#wechat_redirect)  

[【热点专题】数据驱动控制、学习及优化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955310&idx=1&sn=9565312b88fe3ed17b199d148f22f191&chksm=f2941fafc5e396b93c014d1ab5d33c8f1da2a2d293843bcb814d5131b29677dfd4e38ff5699d&scene=21#wechat_redirect)  

[【前沿速递】机器人领域热点综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955259&idx=1&sn=c6aaf28c985bc4535380e5e774cac040&chksm=f2941ffac5e396ec6562e95c6ab505f84a1ad6f6f3f558a1a13abe94ec0a3db42a984830dec8&scene=21#wechat_redirect)  

[【好文推荐】智能交通文集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955221&idx=1&sn=9fc1c9e36a890e83da22882421bd8a14&chksm=f2941fd4c5e396c2bd720a9d9e007ffb1e8dd88fde551cfa3b5a41a527458ebc340522a4b669&scene=21#wechat_redirect)

  

**热点文章**

[值得收藏！SCI论文Introduction常用句式超全总结](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956198&idx=1&sn=5797df8adbd13e69d5e4ef09c6ee1d63&chksm=f2941b27c5e3923193e5a7b9199c59c1604e278c2c1356063ed30890dfbd6ae6e2ac8f2997ee&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— II. 能控性与全驱性](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956009&idx=1&sn=d887902e385f28ddea0fcb569208bb86&chksm=f2941ae8c5e393feccb4347c9a3afbe191007f67323747782405b9ca5c754ba6e16017557786&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— I. 全驱系统与参数化设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955943&idx=1&sn=7d2e161c5d48ea877709b94ef706a3af&chksm=f2941a26c5e3933077b5c9ef2cf38af1087f3f074454251d441433f1c53861ddd85386b7a260&scene=21#wechat_redirect)

[JAS入榜自动化学科TOP20！谷歌学术计量最新发布](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955829&idx=1&sn=65a242374cd79202ed66d6eb2996a661&chksm=f29419b4c5e390a277044eb7607080f302ee1ee57fb98b61da143f4b851a2f5f8b1c78b0caee&scene=21#wechat_redirect)

[JAS最新CiteScore 8.3，位居所属各领域Q1区前列](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061028&idx=1&sn=ed2e409ce394028f1f5d138b83194a62&chksm=8f5a94a8b82d1dbee81f0723b724a6132ff9cc12cef3cf9796a5189d8ba9242e3d8b965d582d&scene=21#wechat_redirect)

[《自动化学报》多位编委和作者入选2019年中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955656&idx=1&sn=3855f19fc1a4cbd306b580fd974e2442&chksm=f2941909c5e3901f25ed372ddda199e10bd1f1e9da57ff240b37327020a993c87fe2fe021ee0&scene=21#wechat_redirect)

[自动化学报最新影响因子5.936，再获中国最具国际影响力期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955466&idx=1&sn=9c6704897821c19210518186e39d0ba9&chksm=f29418cbc5e391ddd81ab2ac1e23ee4ab89e543b226f4fc8d41dfe661d83c7463fed1fef1ac0&scene=21#wechat_redirect)  

[IEEE/CAA Journal of Automatica Sinica 被 SCI 收录](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955512&idx=1&sn=e3e85f94859128ed15dda84425097969&chksm=f29418f9c5e391ef44634f7051950c8b1304cc0cabad620775db21d9e85ebd13e6f733b7f03f&scene=21#wechat_redirect)  

[期刊引证报告发布：自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955508&idx=1&sn=aff836d3b0a4f52810122ffd1fa0f23c&chksm=f29418f5c5e391e3b1a6a9e951bf4d028224c9357e87648cdc54181ab6a4057cb6099ecaa0ef&scene=21#wechat_redirect)  

[《自动化学报》入选“庆祝中华人民共和国成立70周年精品期刊展”](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955387&idx=1&sn=62ce23f150d0a03760bf6f4f6d8275ce&chksm=f294187ac5e3916cd90ae2dde568a4b1b53a979beb38ee5faec7e958eb4501cf42593112d15c&scene=21#wechat_redirect)  

[《自动化学报》20篇文章入选2018“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955353&idx=1&sn=0ff56779fb42a8f874fe04aad60f81af&chksm=f2941858c5e3914e4ff91a57e72e2ef477c345e1bb6db9e8379ea2e7d2fb409491bba2db3580&scene=21#wechat_redirect)

[《自动化学报》和《自动化学报》（英文版）订阅信息](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955387&idx=2&sn=dc16f946c3dfe07b315cc57c96f3c570&chksm=f294187ac5e3916c479d1e5d899704f7cba032ce01acdbc9895e57f60482ccf80eba58f7c087&scene=21#wechat_redirect)  

[《自动化学报》入编《中文核心期刊要目总览》2017年版](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955034&idx=1&sn=e695485524836d18121a68a13af4bc30&chksm=f2941e9bc5e3978d4b787d4f54c01c65b5e0b73126beedf2234f4764b13eb7bd931bc80f342f&scene=21#wechat_redirect)  

[期刊引证报告发布：自动化学报各项主要指标位列第一，再获中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955091&idx=1&sn=d5de46ddcf90fdea8c515d265d4bf865&chksm=f2941f52c5e39644de3508812d978e93e3bc10ac2ec3885ea93489038298a50c7b4c9e472e59&scene=21#wechat_redirect)  

[JAS影响因子世界排名第7，自动化领域世界学术影响力Q1区唯一的中国期刊！](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955473&idx=1&sn=3851a113e1dcea9a7983feeec9498d1c&chksm=f29418d0c5e391c6bb5ec5307db29885e00fd4dbfa47efb0251c43e217fcf60e95b6586b8ac0&scene=21#wechat_redirect)

  

_**自动化学报**_

_CJCR影响因子 2.793_

《自动化学报》是由中国科学院自动化研究所、中国自动化学会主办的中文期刊，刊载自动化科学与技术领域的高水平科研成果，被EI, 英国科学文摘, 日本科学技术文献速报, 俄罗斯文摘杂志, CSCD等数据库收录，是中国科技核心期刊、中文核心期刊、中国科技期刊卓越行动计划入选期刊。 

根据中国学术期刊影响因子年报，《自动化学报》最新**影响因子为5.936**；根据中国科技期刊引证报告，《自动化学报》的**核心影响因子为2.793**，核心影响因子、总被引频次、综合评价总分、核心权威因子四项**主要指标全部排名第1**。

《自动化学报》多年来多次获得 “百强报刊”， “精品科技期刊”、“百种杰出学术期刊”、“中国最具国际影响力学术期刊”等荣誉称号。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFwibVfmicGZkGxTgV4SmiaiceFFS0TJY9y0fqEwqwwIP6aic5R3MZ1GDonGw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFJtYFmOZfpJBAjHXicas9bPYsv7KkUYyMUkBMlQ5ohtmsJ4RCjD4w5Ng/640?wx_fmt=jpeg)

**JAS《自动化学报》（英文版**）   

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFwibVfmicGZkGxTgV4SmiaiceFFS0TJY9y0fqEwqwwIP6aic5R3MZ1GDonGw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUF5ZGhAKPjF1Ivvg8aaAS6lwNO54sGrfdxIbCvmXEOicZbjs3BxK58xag/640?wx_fmt=jpeg)

**《自动化学报》服务号** 

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFwibVfmicGZkGxTgV4SmiaiceFFS0TJY9y0fqEwqwwIP6aic5R3MZ1GDonGw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH468tD3xRsTsoEaa0iaWY0ZUFV41atAJbnCpb4ibiaC7GCUo1w0v0uYicNvV52ia0gYw7nXdrRicGFhqehqA/640?wx_fmt=jpeg)

**《自动化学报》订阅号** 

  

_**联系我们**_

**网站:**  http://www.aas.net.cn 

**投稿:** 

https://mc03.manuscriptcentral.com/aas-cn  

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）  

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:**  

http://blog.sina.com.cn/aaseditor  

  

**点击****阅读原文** **了解更多**