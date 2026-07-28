# 鲁棒的稀疏Lp-模主成分分析

原创 自动化学报 2017-01-20 10:27 北京

> 原文地址: [https://mp.weixin.qq.com/s/TyrqsVbcBKJOpSNSEVgd-A](https://mp.weixin.qq.com/s/TyrqsVbcBKJOpSNSEVgd-A)

主成分分析(Principle Component Analysis, PCA)是一种被广泛研究的数据处理和降维技术,在多元统计分析、生物信息、图像识别等领域中有着广泛应用.对于给定的数据,PCA寻找线性投影方向使得数据在投影后空间中方差极大化,从而使得这些投影方向构成的低维线性空间能够较好地体现原空间的数据结构信息.然而,经典PCA的构造基于L2-模,导致了其对离群点和噪声点敏感,同时经典PCA也不具备稀疏性的特点.

为同时达到鲁棒性和稀疏性,Meng等提出具有稀疏性的L1-模PCA(RSPCA).实验表明,该算法不仅保持了PCA-L1的鲁棒性,而且具有稀疏性.然而,RSPCA只针对具有L1-模的降维模型.为扩大模型应用范围,提高算法有效性,本次研究提出稀疏的PCA-Lp (LpSPCA),对任意p>0的LpSPCA 进行研究.通过极大化Lp-模意义下的散布度量,以及添加额外L1-模正则项,LpSPCA不仅有较好的降维性能,并具有一定的稀疏性.特别地,当0<p≤1时,LpSPCA同时具有良好的鲁棒性和稀疏性.

本文提出的鲁棒稀疏PCA模型LpSPCA可以通过一个简单的迭代算法实现.该算法在p≥1时收敛于局部最优解.此外,当p=1 时,LpSPCA等价于RSPCA.该算法的构造使得LpSPCA在具有鲁棒性的同时具有较强的可解释性.通过在具有离群点的人工数据及带噪声的人脸数据上的实验,以及对不同算法的重构误差数据和所得主成分比较,结果表明了所提算法的有效性和优势.

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUZ58M7FmQZZHicjtibhfkAgZPz5cJ010LyZtja5FZtBhV5Mn11bnxediag/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUCZBsZg4xDNKvBzNcxO6UafFzExjQD967kSfxrIDdAuGERBgOtRMPpw/0?wx_fmt=png)

引用格式

李春娜, 陈伟杰, 邵元海. 鲁棒的稀疏Lp-模主成分分析. 自动化学报, 2017, 43(1): 142-151

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUYdL27deLPb1xgzUwIGTXEtw2qKMQ8ib6edVDPQXOJ2qLGCPASlSt8rQ/0?wx_fmt=jpeg)

李春娜 浙江工业大学之江学院讲师. 2012年获哈尔滨工业大学理学博士学位.主要研究方向为稀疏学习,降维及最优化理论.

E-mail: na1013na@163.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxU6wo5yYfLiacS1OQ18QYfb9G3qicPIF72GFY5EcaK6leIoCphKhuvTjfA/0?wx_fmt=jpeg)

陈伟杰 浙江工业大学之江学院副教授.2011年获浙江工业大学工学博士学位.主要研究方向为机器学习,信息处理.

E-mail: wjc@zjc.zjut.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUoKyz5P8MX38M5BkYqZtn8ibCFeLbJIusF0Td4wnxlmxpqw4lbGRjuNw/0?wx_fmt=jpeg)

邵元海 浙江工业大学之江学院副教授.2011年获中国农业大学理学博士学位.主要研究方向为数据挖掘.

E-mail: shaoyuanhai21@163.com

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUuBiau2pemgTNSoZb8micTvTgx1ZspGjWqq85ico990krvCmvr1CoparTQ/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUCtFIo366cRNI5CiaNNUuqlboEXMCFiazIjSY90sJKibWLiaUBvfbNhnnzw/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45LkNUhhJH3tkFlRibUWvGxUPkdibS3JNyqpDzMlQxXXSmicR9IE4paJ2KdRkr3Km6ZqMy4b7k0gTXvA/0?wx_fmt=jpeg)