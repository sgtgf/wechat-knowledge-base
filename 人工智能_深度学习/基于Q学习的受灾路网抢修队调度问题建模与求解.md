# 基于Q学习的受灾路网抢修队调度问题建模与求解

原创 自动化学报 自动化学报 2020-10-12 16:42 北京

> 原文地址: [https://mp.weixin.qq.com/s/aW0Xe4MqBhg6Q8OtYjkmMg](https://mp.weixin.qq.com/s/aW0Xe4MqBhg6Q8OtYjkmMg)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usuWFv7bKpSfMaLX2BQJYkicaRXxcDiaKmEG5DVo6AT9bTwXIT25xyK3YA/640?wx_fmt=png)

点击**蓝字**关注我们

  

近年来，各类突发事件发生得越来越频繁，各类突发事件在世界各地造成了大量人员伤亡和巨大的经济损失。 

虽然突发事件常常是不可避免的，但是，人们可以通过某些技术手段，或措施对突发事件进行应急管理，在相当程度上减轻灾害事件造成的巨大损失和心灵创伤。 

应急管理中修复受损的道路交通网络，使得受灾人员能够及时得到救助，同时满足将部分受灾人员进行安全转移等任务的需求，这是应急管理中不可或缺的重要一环。 

这篇论文研究了如何利用智能决策理论和计算机辅助工具为道路抢修队的修复决策提供规划方案。

  

**苏兆品, 李沫晗, 张国富, 刘扬. 基于Q学习的受灾路网抢修队调度问题建模与求解. 自动化学报, 2020, 46(7): 1467-1478**

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180081_

  

抢修队的修复工作需要满足两个目标，第一个目标是，在尽可能小的时间开销上使道路网通畅；第二个目标是，对道路网修复后，在保证路网通畅下，使运输效率尽可能高。

我们建立了路网抢修队的修复决策模型，并提出了求解模型的算法，最终生成了合理高效的修复方案。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45gd6SLsUicjJic8khHO6l7uskibXY0ibOhtUBUEUmCPoqDEVdFvxBulAnyxA9aWj5eM6icqj9ooR8iboxg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

  

目前的研究存在一些不足：主要体现在两个方面：首先，已有的工作着眼于路网本身，构建的路网大都过于理想化，仅考虑修复路网中的哪些路段可以实现目标的最优化，而没有考虑这些受损路段是否可达和修复工程队在危险环境中的路线问题，也没有考虑受损路段的修复顺序对应急救援的影响。其次，虽然考虑了抢修队的可达路线，并能够给出道路抢修队的修复策略集，但无法处理像地震、洪水等特大自然灾害所引起的连续路段受损情形。 

这篇论文通过强化学习从另一个角度研究了这个问题。首先把这个问题建模为马尔可夫决策过程，然后再利用Q学习方法求解。主要基于这几个考虑：部分可观测状态、延迟回报、探索和利用。

  

**部分可观测状态**

主要是指抢修队只能观测到一部分路网的信息。一开始，抢修队无法获取路网环境的全部信息，并且路网中存在影响路网结构的非需求节点后，这种不确定性会增加。抢修队可能要综合考虑以前的观察以及当前的状态以选择动作。

**延迟回报**

主要是指在路网修复规划问题中，就是寻找一系列最优的修复行为。但是，在修复连续受损的路段时，抢修队可能要连续修复一系列路段后才能看到路网的连通性明显变化。

**探索和利用**

抢修队在与环境交互的过程中，面临一个权衡过程：是选择探索未知的状态和动作，还是选择利用它已经学习过、会产生高回报的状态和动作。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45gd6SLsUicjJic8khHO6l7us7Zib7ccAll5Gt5jMIIyTBGoGqsicY5pvhPsQrFR5dfBpzM2w4SXp5OUg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

_(a) 路段受损率较小，路网规模逐渐增加_

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45gd6SLsUicjJic8khHO6l7ushLwqGXicIPeo0kvsx4kxvYb5TGicdeFbkjADoJrarkVDOyxeyMarKdJQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

_(b)__路段受损率较大，路网规模逐渐增加_

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usR8aW7LF8OUZG0f4ILjb1RAyXCRq76yQKDwVGJKRZbQBGibKeUdfmfZQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

_(c) 路网规模和路段受损率均较大、最大可授受距离逐渐增加_

  

**_图2 两种算法的修复路段数和应急点可达率_**

  

这篇论文主要对比了动态规划方法和Q学习方法用于求解规划方案。在路段受损率较小时, 随着路网规模的增加, Q-learning算法和DP算法均可以使所有应急点可达, 且最终修复的路段数也一样. 在路网修复初期, DP算法可以使更多的应急点可达. 但随着修复过程的推进, Q-learning算法很快就赶上并且超过了DP算法, 这是因为在Q-learning算法中,抢修队牺牲了一部分的短期回报来获取更好的长期回报.  

在路段受损率较大时, 随着路网规模的增加, Q-learning算法要明显比DP算法更优. Q-learning算法在路网修复整个阶段都能使更多的应急点可达, 并直至使所有应急点都可达, 且最终修复的路段数也多于DP算法. 因此，在灾情较严重时, 与DP算法相比, Q-learning算法所给的抢修队规划方案能够更快的使更多的应急点可达. 也就是说, Q-learning算法能够更快的使路网交通系统恢复程度最大, 更有利于应急救援的实施和灾民的快速安全疏散.在路网规模和路段受损率都较大时, 无论应急点最大可接受距离变大还是变小,仍然只有Q-learning能够使所有应急点可达, 且修复了更多的路段. 而DP算法随着最大可接受距离的变小, 应急点可达率越来越小.

因此, 当距离约束要求发生变化时, Q-learning更加鲁棒, 能够统筹考虑受损路网的全局, 会随着距离约束要求的变化从全局和长期收益的角度让抢修队重新适应这些约束的变化. 与之明显不同的是, 当距离约束要求变化时, DP算法不能做出相应的调整, 尤其在约束苛刻时, DP算法可能会找不到任何有效规划.

封面图拍摄：MissSo  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7uszGdg2QI3GxCwiaK8g9sUr8ushQaN6HA1VicQFJibb0LJmHAvO0nULgHzw/640?wx_fmt=jpeg)

**苏兆品**

合肥工业大学计算机与信息学院副教授. IEEE 会员. 2008 年获得合肥  
工业大学计算机科学与技术专业博士学位. 主要研究方向为演化计算, 灾害应急决策, 多媒体安全.

E-mail: szp@hfut.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usPcMARY2TOBaLAKOyiamvso3SbIwk29ct5ScaAdxkiaLckibQvCvFKYJicw/640?wx_fmt=jpeg)

**李沫晗**

合肥工业大学计算机与信息学院硕士研究生. 2014 年获得合肥工业大  
学光信息科学与技术专业学士学位. 主要研究方向为灾害应急决策和强化学习.

E-mail: limohan@mail.hfut.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usnkNhu0VNsKDDjOoOw4gdSULPjkCC0WwjkiaPpiaO4apJaV52Iq7zJtxg/640?wx_fmt=jpeg)

**张国富**

合肥工业大学计算机与信息学院教授. 中国自动化学会、 IEEE 会员.2008 年获得合肥工业大学计算机科学与技术专业博士学位. 主要研究方向为计算智能, 多 agent 系统, 基于搜索的软件工程. 本文通信作者.

E-mail: zgf@hfut.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usnS140QnteBjkUOczTg0bCbFhPrkOnLhx6Fhl5qSdZicF4qeOBnU68AQ/640?wx_fmt=jpeg)

**刘  扬**

合肥工业大学计算机与信息学院博士研究生. 2005 年获得合肥工业大学通信工程专业学士学位, 2007 年获得合肥工业大学信号与信息处理专业硕士学位. 主要研究方向为灾害应急决策和演化计算.

E-mail: lyy673@163.com

  

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

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usGQAf640vBkJ4XER236YBtia718Kqc7ic7DdC6JzZQQrKUZDOPOBR1Otw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usOzO8EAjHUBe4lmduBIYB0ia3yn2HyHBws7d2icibN1PVPSvTicTcopZbBw/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7us0Q1BfpYSnAQRibe6GVpWsAiaPsibQYeDPvmicGXqAkVmu4kribplfnIqjXw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usHOuPkXmwiarAOkRVMlR8WiaASk8TarOGpUEJJl5ugfAOAfY3eOM2Z30A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45gd6SLsUicjJic8khHO6l7uskIvQUwFeiaRiaPx37OngFcSOf5VNc2Um5mIn03RQEpno4xr60s6W0Zdw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45gd6SLsUicjJic8khHO6l7usaQHjAVTcibKvPTblLj3qR30WU2DtScKAK4DCEgDtbyHhpgneeOqUD0g/640?wx_fmt=gif)

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