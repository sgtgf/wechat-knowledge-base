# 加拿大皇家科学院院士Witold Pedrycz：面向数据分析的粒计算

原创 JAS 自动化学报 2018-09-07 15:44 北京

> 原文地址: [https://mp.weixin.qq.com/s/8WgrKRrB\_k36okfuW39gkQ](https://mp.weixin.qq.com/s/8WgrKRrB_k36okfuW39gkQ)

      在概念与算法的发展支撑下，各种数据分析和系统建模的方法大量涌现。由于认识到并强调用户与数据之间的互动，以人为中心的方法在诸多方法中始终占有特殊的一席之位。

      加拿大皇家科学院院士、加拿大计算智能研究中心首席科学家Witold Pedrycz教授在IEEE/CAA Journal of Automatica Sinica发表的综述 “Granular Computing for Data Analytics: A Manifesto of Human-Centric Computing”中指出，粒计算是一种重要的人本计算，通过粒计算可以方便地实现并灵活调整抽象化水平。粒计算与信息粒的发展与处理紧密相关。针对可用的数据及其数据间的关系，利用信息粒可形成一种便利的知识组织方式。Pedrycz教授在该文中明确了粒计算的基本原则，归纳出信息粒构造的方式，并展示了如何利用信息粒刻画数据的内在关系。

文章导读

      人类智能的一个公认特点, 是人们能将复杂的问题分解成不同层次的多个子问题，从不同的层次上观察和分析同一问题，并能够很快地从一个层次跳转到另一个层次, 往返自如, 毫无困难，并最终选择合适的解决方案，这种能力是人类求解问题的强有力表现。粒计算正是模拟了人类这种思维特征，将数据首先进行粒化，通过不同程度的抽象化处理，得到多层次多语义的信息粒，并最终构成内涵丰富的信息框架，提供一个急需的概念与算法的环境。对于不同的实际问题，粒计算为问题求解提供了丰富的选择空间，我们可以关注不同的粒特征，在结果的精度、价值、可解释性、稳定性等多方面进行权衡，选择合适的层次，得到合理的知识表示。在解决特定问题时则可忽略不必要和不相关的细节, 只关注适当层次, 从而简化了问题的求解。

      信息粒可视为人们将现有的知识和可获得的证据组织起来，形成一个有意义、语义健全的实体系统。它具有易于理解的结构，在人类认识和决策过程中扮演着关键角色。在人工智能领域，信息的粒化是问题求解的核心，即将问题进行分解，形成多个子问题，以便分而治之。

     粒计算包含了丰富的概念和方法，如图、信息表、映射、知识表示、微观/宏观模型，关联发现与数据挖掘，聚类与规则聚类，分类等，并广泛应用于时间序列分析、预测、制造、概念学习、感知、优化、信用评级和芯片数据分析等多种任务中。

      Pedrycz教授指出：（1）信息粒是知识表示与处理的关键组成部分；（2）信息粒的粒化水平（即信息粒的大小）是问题描述和问题解决全局策略的关键；（3）信息粒构成的多层次结构支持现象感知的一个重要特征，即在处理复杂问题时，可灵活地选择某个层次，只关注问题最核心的方面；（4）不存在一个通用的信息粒化水平，粒的大小由问题的特征和用户的喜好而决定。粒计算的思想在不同的理论框架中都得到了很好的发展，主要包括集合论、模糊集、粗糙集等。

     信息粒的构造是粒计算的关键，主要从五个方面介绍了信息粒的形成方法与主要特点。（1）聚类是从数据到信息粒的主要途径；（2）合理粒度的原则，引入覆盖度和特异度的概念及其形式化定义用于评价粒度的合理性；（3）信息粒的符号视角及其符号表征，我们可将一个信息粒视为一个符号，忽略其数字细节，并在后续处理中采用符号的形式进行计算，这在人工智能中也有广泛应用；（4）粒计算在时空数据中的探索；（5）粒原型的建立。

     最后，讨论了分布式数据分析与建模的两种主要方法——主动聚合机制与被动聚合机制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0xX8WW4SoMY0AZ6N9DQzia0Aay0fic8OTLODxBKw2PxTGK1PXJZpxlsgHQ1c0mBZ3deRibK7RNslQoA/640?wx_fmt=jpeg)

从数值型数据到粒模型建立的范式转换流程

译：杨田

文章信息

W. Pedrycz,“Granular computing for data analytics: a manifesto of human-centric computing”, IEEE/CAA J. of Autom. Sinica, vol. 5, no. 6, pp. 1025-1034, Nov. 2018.

![](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH0xX8WW4SoMY0AZ6N9DQzia0Xv8ujSnFBoYxZ4FibIL354fSFBEXh9g6Qgo2UvrbjDqxGIhJS4VSBeg/640?wx_fmt=png)

扫面上方二维码阅读全文；需要PDF的后台留言邮箱小编给您发送~

英文摘要

In the plethora of conceptual and algorithmic developments supporting data analytics and system modeling, humancentric pursuits assume a particular position owing to ways they emphasize and realize interaction between users and the data. We advocate that the level of abstraction, which can be flexibly adjusted, is conveniently realized through Granular Computing. Granular Computing is concerned with the development and processing information granules – formal entities which facilitate a way of organizing knowledge about the available data and relationships existing there. This study identifies the principles of Granular Computing, shows how information granules are constructed and subsequently used in describing relationships present among the data.

作者简介

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0xX8WW4SoMY0AZ6N9DQzia0QylUyeDWicBLoMFpqcsiaQ72ouvzUR1iaYIGrhpSibeD6dAYFgAXDkusOQ/640?wx_fmt=jpeg)

**Witold Pedrycz,** 加拿大阿尔伯塔大学教授，加拿大计算智能研究中心首席科学家，加拿大皇家科学院院士、波兰科学院外籍院士，波兰华沙科学院系统研究所主任、英国诺丁汉大学计算机科学学院特聘教授，IEEE Fellow, IFSA（国际模糊系统协会）Fellow，长期从事计算智能、模糊系统及数据挖掘等相关领域研究，发表SCI学术论文500余篇，出版专著近20部，h指数为 99。历任IFSA主席和北美模糊信息处理协会（NAFIPS）会长；担任 Information Sciences, Granular Computing等期刊主编、IEEE Transactions on Fuzzy Systems, IEEE Computational Intelligence Magazine, Pattern Recognition Letters等期刊副主编/编委；获IEEE SMCS协会颁发的最高技术成就奖IEEE Norbert Wiener Award（2007年）、IEEE加拿大计算机工程勋章（2008年）、Soft Computing领域国际最高奖Cajastur Prize（2009年）、加拿大皇家科学学会最高奖Killam奖（2013年）等。

往期推荐

[英国帝国理工&德国奥格斯堡大学Björn Schuller教授：深度小波时频图特征在声音场景分类任务中的表现](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059519&idx=1&sn=e4229e4b1495573e8ad34464a35289ec&chksm=8f5a92b3b82d1ba57eab9ca6b785817b7f3a864f10fe6b73982e29bd5adc85e104e902824ed3&scene=21#wechat_redirect)

[美国国家工程院院士A. Stephen Morse等: 权力分配的网络博弈](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059583&idx=1&sn=b8f4bbf60a27466f93de6df7bf52b50b&chksm=8f5a92f3b82d1be5344ac7ff797cc8cd6e299d04bb63efb23606f0cde28d1349e45a3d9a1970&scene=21#wechat_redirect)  

[加拿大滑铁卢大学沈学民（Sherman Shen）教授：车联网大数据：发展、支撑与应用](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059477&idx=1&sn=3f0f9ad9acef41923086940c3a2671c9&chksm=8f5a9299b82d1b8fecf49bed6f5bcfe022e0954853ca918e00083caaeebc32d4440e837ec581&scene=21#wechat_redirect)

[【报告分享】深入浅出讲解深度生成模型（115 PPT）](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059658&idx=1&sn=afb3c3074f9763958e0edc39d7596ac6&chksm=8f5a9346b82d1a501bceffd8737f66f903020dfdae85de552a625719b531b8b4482bd800b976&scene=21#wechat_redirect)

[《Nature》纪念人工智能60周年专题：深度学习综述](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059642&idx=1&sn=716779fc241355d6c0d2d00a6a3a2bc8&chksm=8f5a9336b82d1a2054e0e17559401bc0677d620d9a492e6749d5f1a26d0c3268494127f76019&scene=21#wechat_redirect)  

  [剑桥大学：156页PPT全景展示AI过去的12个月](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059631&idx=2&sn=c9cd4d73c1222d38af8d7ae2893c897a&chksm=8f5a9323b82d1a3543ef82b4d9cc0d6eef749bdb0624470d45eab1062e007781fd9fba70e1cf&scene=21#wechat_redirect)  

[【论文写作】如何撰写一篇合格的科技论文？](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059636&idx=2&sn=538a81799a5bb211a055e76f4ab3a77f&chksm=8f5a9338b82d1a2e4a285b05ad13d5dd465a6b7b1a5ada449934308f44bd051400ef66d57c6d&scene=21#wechat_redirect)

 IEEE/CAA Journal of Automatica Sinica（JAS，《自动化学报》英文版），于2014年创刊，由中国自动化学会、中国科学院自动化研究所主办，与IEEE合作出版。JAS发表自动控制、人工智能、智能控制、模式识别、信息处理、机器人等自动化领域热点和前沿方向的研究进展。

      创刊至今，JAS由业内优秀学者领衔组办专刊报导最新研究成果，已组织的专刊有：多智能体的协同控制、无人机自主控制、强化学习与自适应控制、物理信息系统、以人为中心的智能机器人、分数阶系统与控制、再生能源系统的控制与优化等。

      根据2018年Elsevier发布的期刊影响力榜单，JAS的2017年CiteScore分值为3.18，在“控制与系统工程”学科类别的224个学术出版物中排名第40，位于前18%，在“信息系统”和“人工智能”学科排名位于前19%（48/251,32/168）, JAS在其所属的三个学科中的排名均已进入Q1区。

      欢迎扫描二维码、长按图片识别关注自动化学报英文版微信公众号：报道自动化领域国内外最新研究成果，提供论文免费浏览下载，传递学术活动信息和期刊动态，即时出版咨询及稿件状态查询

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0xX8WW4SoMY0AZ6N9DQzia0XZO2fSN2CsSrh8FO087Oic6xmn0QL3HnTLXarNv43FFrv5FfuUknOJA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH0xX8WW4SoMY0AZ6N9DQzia0fxHH45viaAG2bNpbokEMicXs4oGur5d4ziagLfpwtz4M0au7e8YoM0QLQ/640?wx_fmt=png)

**网站**：

http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6570654

www.ieee-jas.org  

**微信**：JAS自动化学报英文版

**Blog**: http://blog.sciencenet.cn/?3291369

**Twitter**: IEEE/CAA Press

**Facebook**: Ieee/Caa Press

**投稿**：https://mc03.manuscriptcentral.com/ieee-jas

**Email:** jas@ia.ac.cn

**Tel:** 010-82544459, 010-82544746  

![](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH0xX8WW4SoMY0AZ6N9DQzia0sHPiaSR9bcVaQQkf5ib721oaVXCtQxHAC20XldKKg1HCOicC0YiaM5QThA/640?wx_fmt=png)