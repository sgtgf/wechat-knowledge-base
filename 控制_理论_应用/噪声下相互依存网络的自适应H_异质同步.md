# 噪声下相互依存网络的自适应H∞异质同步

原创 自动化学报 自动化学报 2020-08-26 17:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/p0lziJloXfRO7xd\_ZYK8fg](https://mp.weixin.qq.com/s/p0lziJloXfRO7xd_ZYK8fg)

  

  

_噪声下相互依存网络的自适应异质同步是指：基于自适应控制方法，在外部噪声的干扰下，相互依存网络的每个子网异质同步到各自的孤立系统。_

  

  

**郭天姣, 涂俐兰. 噪声下相互依存网络的自适应_H_∞异质同步. 自动化学报, 2020, 46(6): 1229-1239**

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180075_ 

  

相互依存网络是网络的网络，是近年来复杂网络研究的一个重要内容。不同系统之间的相互依存关系对当今世界经济、政治、文化的发展都产生了极大的影响，同时也极大地影响着人类的生产生活。下面给出了一些常见的相互依存网络系统：

![](噪声下相互依存网络的自适应H_异质同步_images/img_000_e8ac6b0922d0.jpg)

_图1. 互联网-实体行业网_

![](噪声下相互依存网络的自适应H_异质同步_images/img_001_8c211dfd34d6.jpg)

_图2. 全球政治-经济-贸易网_

![](噪声下相互依存网络的自适应H_异质同步_images/img_002_52cce6b1af3a.jpg)

_图3. 电力-计算机网_

![](噪声下相互依存网络的自适应H_异质同步_images/img_003_ceed28ee3a31.jpg)

_图4. 社交关系网_

  

以交通运输网为例，在城市道路交通网络中，由于恶劣的天气、交通事故等因素，可能造成一个或部分关键路段或路口堵塞，这些失效（堵塞）路段或路口会通过路段、路口间的相互关系引起其它路段或路口失效，成连锁效应，终导致整个网络或局部崩溃。因此，对相互网络的性能研究显得格外重要。

  

![](噪声下相互依存网络的自适应H_异质同步_images/img_004_0d17e5f9eb1b.jpg)

_图5. 交通运输网_

  

同步是网络动力学研究的主要方向，网络的同步现象比比皆是。有些同步是有益的，如保密通信、组织管理的协调及高效运行等，我们需要这样的同步；有些同步是有害的，如通信网中的信息拥塞、大桥的同步震动等，此时应尽量避免这种同步。

目前关于网络同步的研究主要集中在单个复杂网络，对网络的网络尤其是相互依存网络同步的研究才刚刚起步。面对纷繁复杂的相互依存网络系统，如何协调内部的依赖关系，使得系统内部的各个子网达到平衡稳定状态，是目前相互依存网络研究的重中之重。

由于网络所处环境的复杂化，网络的内外部噪声均会对网络同步产生一定的影响。例如：

（1） 网络的内部噪声会对其动力学行为产生影响, 增加了网络同步的控制难度;

（2） 网络外部的信道噪声则会影响网络的信息传递, 降低通信的准确性。

因此，分析噪声与网络同步的关系对研究相互依存网络的稳定性非常重要，是目前亟待解决的问题。

  

_**采用什么样的控制方法才能使噪声干扰下的网络达到同步？**_

李雅普诺夫稳定性理论是控制理论研究的主要方法, 而自适应控制技术是一种能修正自己的特性以适应对象和扰动的动态特性变化的方法。在经典控制论中, 对于具有噪声的网络通常采用前馈或者反馈消除噪声影响, 达到系统稳定。20 世纪 80 年代, Zames和Doyle等分别提出了利用_H_∞控制方法探讨了系统的鲁棒优化控制问题。_H_∞鲁棒控制理论是在H∞空间(即Hardy空间)通过某些性能指标的无穷范数优化,而获得具有鲁棒性能的控制器的一种控制理论，它是一个非常有效的优化控制方法。以往关于网络同步稳定性的研究都说明了基于_H_∞方法,不仅可以达到系统内部的鲁棒稳定,同时可以满足网络外部一定的鲁棒水平。

基于以上分析，借助李雅普诺夫稳定性理论、Schur引理, 本文提出新的使得相互依存网络在有噪声和没有噪声的情况下达到异质同步的充分条件,同时相互依存网络的内部达到自适应渐近同步,而网络外部则达到鲁棒_H_∞水平。最后的数值模拟验证了提出的方法的有效性以及可行性。

  

**_作者简介_**

![](噪声下相互依存网络的自适应H_异质同步_images/img_005_8ee9ace5b178.jpg)

**郭天姣**

武汉科技大学理学院博士研究生。主要研究方向为复杂网络的同步与控制。

E-mail: guotianjiao@wust.edu.cn

![](噪声下相互依存网络的自适应H_异质同步_images/img_006_993f2b843c91.jpg)

**涂俐兰**

武汉科技大学冶金工业过程系统科学湖北省重点实验室教授, 武汉科技大学理学院教授. 主要研究方向为复杂网络的同步, 控制与拓扑结构识别。本文通信作者。

E-mail: tulilan@wust.edu.cn

  

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

[JAS入榜自动化学科TOP20！谷歌学术计量最新发布](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955829&idx=1&sn=65a242374cd79202ed66d6eb2996a661&chksm=f29419b4c5e390a277044eb7607080f302ee1ee57fb98b61da143f4b851a2f5f8b1c78b0caee&scene=21#wechat_redirect)

[JAS最新CiteScore 8.3，位居所属各领域Q1区前列](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061028&idx=1&sn=ed2e409ce394028f1f5d138b83194a62&chksm=8f5a94a8b82d1dbee81f0723b724a6132ff9cc12cef3cf9796a5189d8ba9242e3d8b965d582d&scene=21#wechat_redirect)

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

  

根据中国学术期刊影响因子年报，《自动化学报》最新影响因子为5.936；根据中国科技期刊引证报告，《自动化学报》的核心影响因子为2.793，核心影响因子、总被引频次、综合评价总分、核心权威因子四项主要指标全部排名第1。

  

《自动化学报》多年来多次获得 “百强报刊”， “精品科技期刊”、“百种杰出学术期刊”、“中国最具国际影响力学术期刊”等荣誉称号。

  

![](噪声下相互依存网络的自适应H_异质同步_images/img_007_8dd7b484481a.png)

![](噪声下相互依存网络的自适应H_异质同步_images/img_008_e933e230e91b.jpg)

**JAS《自动化学报》（英文版**）   

![](噪声下相互依存网络的自适应H_异质同步_images/img_009_8dd7b484481a.png)

![](噪声下相互依存网络的自适应H_异质同步_images/img_010_7d84402a8133.jpg)

**《自动化学报》服务号** 

![](噪声下相互依存网络的自适应H_异质同步_images/img_011_8dd7b484481a.png)

![](噪声下相互依存网络的自适应H_异质同步_images/img_012_66d1be4e2843.jpg)

**《自动化学报》订阅号** 

  

_**联系我们**_

Tel:     010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

Fax:    010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

           aas\_editor@ia.ac.cn（录用后稿件处理）

_http://www.aas.net.cn_

**点**

**这里“阅读原文”，查看更多**