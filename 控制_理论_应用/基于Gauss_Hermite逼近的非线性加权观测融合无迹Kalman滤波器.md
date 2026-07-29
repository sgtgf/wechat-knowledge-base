# 基于Gauss-Hermite逼近的非线性加权观测融合无迹Kalman滤波器

原创 自动化学报 自动化学报 2020-10-28 15:46 北京

> 原文地址: [https://mp.weixin.qq.com/s/qB29wVwahM5-pA5WDZCi5A](https://mp.weixin.qq.com/s/qB29wVwahM5-pA5WDZCi5A)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_000_088b22dd6e73.png)

点击上方**蓝字**关注我们

  

**数据融合（DF）或多传感器数据融合（MSDF）是指组合或整合来自不同有源或无源传感器数据、预处理数据或信息的过程，以产生更精准、具体、全面和统一的数据集、模型或决策。随着信息技术的广泛发展，具有更广义化概念的“信息融合”被提了出来。**

  

李云, 孙书利, 郝钢. 基于Gauss-Hermite逼近的非线性加权观测融合无迹Kalman滤波器. 自动化学报, 2019, 45(3): 593-603

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c170534_

  

滤波算法在定位、目标跟踪、导航和故障诊断等方面发挥着重要作用。然而，单个传感器难以满足高精度、高容错性等要求，因此，多传感器融合估计技术应运而生。在过去的几十年里，线性系统的融合估计理论已经有了一系列完整的理论基础。目前常用的信息融合估计方法主要包括两个基本的结构：集中式融合估计和分布式融合估计。集中式融合估计将所有传感器信息进行增广，并基于增广的观测设计融合状态估计。该算法没有信息丢失，当所有传感器没有故障时估计精度具有全局最优性，可作为其他融合算法在精度上的衡量标准，也是现在多传感器系统经常采用的融合方式之一。然而，由于集中式融合算法计算量大，在传感器数量较多的情况下，集中式融合算法会导致整个系统实时性差。特别是当存在故障传感器时可能导致滤波器发散。分布式融合算法是把各个局部状态估计送入融合中心，根据一定的融合准则进行加权得到融合估计。分布式融合方式具有良好的鲁棒性，计算量小且容错性强，估计精度是局部最优、全局次优的。  

  

加权观测融合算法根据加权最小二乘准则，将集中式融合系统增广的高维观测进行压缩处理，得到降维的观测，基于降维观测设计的滤波器可以明显地减小计算负担。对于线性系统，加权观测融合算法在最小方差意义下和集中式融合算法具有数值等价性，因而具有重要的应用价值。然而，绝大多数系统具有非线性特性，例如，大多数定位系统观测方程是在球面坐标系下建立的，而估计和分析状态时往往又是在笛卡尔坐标系下进行的，这使得观测方程具有某种非线性特性。

  

本文主要创新点及工作如下：首先利用分段的Gauss-Hermite逼近方法将系统观测方程统一处理，得到近似的中介函数以及系数矩阵。进而基于此中介函数、系数矩阵以及加权最小二乘法，提出了非线性加权观测融合算法。该融合算法可对增广的高维观测进行压缩降维，为后续滤波等工作降低计算负担。最后结合UKF滤波算法，提出了非线性加权观测融合UKF滤波算法（WMF-UKF）。该算法可以处理非线性多传感器系统的融合估计问题。与集中式融合UKF（CMF-UKF）算法相比，WMF-UKF具有与之逼近的估计精度，但计算量明显降低，并且随着传感器数量的增加，该算法在计算量上的优势将更加明显。

  

考虑一个带有8传感器的平面跟踪系统。在笛卡尔坐标下的状态方程和观测方程如下：

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_001_a0e20c32e32a.jpg)

  

利用以上方法得到的融合跟踪曲线如图4-6所示。

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_002_f2f62ba1b7cf.jpg)

_图4 真实轨迹和WMF-UKF、8-CMF-UKF、5-CMF-UKF的估计曲线_

_Fig. 4 True and estimated tracks using WMF-UKF, 8-CMF-UKF and 5-CMF-UKF_

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_003_fe196713946e.jpg)

_图5 位置融合估计的AMSE曲线_

_Fig. 5 AMSE curves of position fusion estimates_

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_004_b53395e32892.jpg)

_图6 带不同Hermite多项式的WMF-UKF位置AMSE曲线_

_Fig. 6 AMSE curves of WMF-UKFs with different Hermite polynomials for position_

  

**作者简介**

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_005_b98c84f946b2.svg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_006_e33d0295d8a8.png)

**李 云**

哈尔滨商业大学计算机与信息工程学院副教授. 黑龙江大学电子工程学院博士研究生. 主要研究方向为状态估计, 多传感器信息融合.  

**E-mail:** 

**liyunhd@sina.com**

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_007_dbb53b5857e3.svg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_008_b98c84f946b2.svg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_009_1965aa08bfae.png)

**孙书利**

黑龙江大学电子工程学院教授.主要研究方向为网络系统滤波, 多传感器信息融合.本文通信作者.

**E-mail:** 

**sunsl@hlju.edu.cn**

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_010_dbb53b5857e3.svg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_011_b98c84f946b2.svg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_012_a44b88d18a1d.png)

**郝 钢**

黑龙江大学电子工程学院副教授. 主要研究方向为状态估计, 多传感器信息融合. 

**E-mail:** 

**haogang@hlju.edu.cn**

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_013_dbb53b5857e3.svg)

  

**期刊动态**

[《自动化学报》发表文章入选第五届“中国科协优秀科技论文”](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956281&idx=1&sn=71dbf4174159b1942b63ef08eca1dfa0&chksm=f2941bf8c5e392eef9fc02c51a7f85605a0e1c1b044fb8601c509746572832d86715fdc68b14&scene=21#wechat_redirect)

[《自动化学报》2020上半年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955913&idx=1&sn=79bcb27a9ec7a0db7bda0de2622c8f98&chksm=f2941a08c5e3931e2fec62fe080dc3e19b2d2d0dc4b067cab1d8202fd628c36cadc59e31481e&scene=21#wechat_redirect)

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

[科研必备！盘点常用文献管理工具](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956322&idx=1&sn=aa1f98bb307dda70981e073546c973c4&chksm=f2941ba3c5e392b58981c27b2ea1334ef149e0b9eb126ac62453537db789a694cc35f72cac09&scene=21#wechat_redirect)

[值得收藏！SCI论文Introduction常用句式超全总结](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956198&idx=1&sn=5797df8adbd13e69d5e4ef09c6ee1d63&chksm=f2941b27c5e3923193e5a7b9199c59c1604e278c2c1356063ed30890dfbd6ae6e2ac8f2997ee&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— II. 能控性与全驱性](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956009&idx=1&sn=d887902e385f28ddea0fcb569208bb86&chksm=f2941ae8c5e393feccb4347c9a3afbe191007f67323747782405b9ca5c754ba6e16017557786&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— I. 全驱系统与参数化设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955943&idx=1&sn=7d2e161c5d48ea877709b94ef706a3af&chksm=f2941a26c5e3933077b5c9ef2cf38af1087f3f074454251d441433f1c53861ddd85386b7a260&scene=21#wechat_redirect)

[陈虹教授等：智能时代的汽车控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065976&idx=1&sn=d6daa2fafd8e723a0238c5566cf1641c&chksm=8131c435b6464d23449b163afedd37f20a5d7598fe6684c6b011d19554e0ed38ef031fbf2ec9&scene=21#wechat_redirect)

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

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_014_3a56b3dd0bb8.jpg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_015_e671e187e7e0.jpg)

  

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_016_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_017_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_018_10af9734de12.jpg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_019_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_020_e1b223dbf2a5.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_021_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_022_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_023_03b9b55629d2.jpg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_024_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_025_e1b223dbf2a5.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_026_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_027_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_028_0a2942ad4e13.jpg)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_029_e1b223dbf2a5.gif)

![](基于Gauss_Hermite逼近的非线性加权观测融合无迹Kalman滤波器_images/img_030_e1b223dbf2a5.gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** http://www.aas.net.cn/ 

**投稿:** 

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）  

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**点击****阅读原文** **了解更多**