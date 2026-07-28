# 传感器饱和的非线性网络化系统模糊H∞滤波

原创 自动化学报 自动化学报 2021-06-08 17:06 北京

> 原文地址: [https://mp.weixin.qq.com/s/7wtGuBf5hVDPemwaiYOVGQ](https://mp.weixin.qq.com/s/7wtGuBf5hVDPemwaiYOVGQ)

**点击蓝字 ╳ 关注我们**

  

**网络化系统H∞滤波**是指：将通信网络用于系统各设备之间的数据传输时，在接收端信息受到网络带宽及随机外部干扰的影响而不完备的情况下，通过设计算法的方式解决由此产生的系统性能下降甚至不稳定的问题。

  

李秀英, 尹帅, 孙书利. 传感器饱和的非线性网络化系统模糊H∞滤波.自动化学报, 2021, 47(5): 1149-1158

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180778?viewType=HTML

  

网络化系统是控制领域内的热点问题之一。目前，网络化系统在航空航天、流程工业、电力系统、军事及医疗等诸多领域有着广泛的应用。随着网络化系统复杂程度的增加，通信网络带来诱导问题的增多，以及用户对实时性和准确性要求的提高，使得基于模型的卡尔曼滤波框架无法满足需求。例如：

  

1）流程工业：随机干扰、降低时延、高可靠性；

2）电力系统：用户广、通道拥挤、较低的运行维护成本；

3）军事应用：实时性、信息传输安全性;

……

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZiarwXGcqtZD0EB49WIN13ff6Zicia9wKIfrMB6USxAhNtg0FibGgy33DfA/640?wx_fmt=jpeg)

_工业互联网_

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZlS1Iaial6bvrC2icict7stEibe4iaiadJnoQR6PW3uW4smzbCaCPAhZWyiaMA/640?wx_fmt=png)

_电力系统_

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZ5A0HIeEXmSKmVKz2Nib3E7FRhZDM4tLHhG1KcbPQYrFmDx8jhibUOJ0A/640?wx_fmt=jpeg)

_远程医疗_

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZrGo19LYFiakq3Jibw90kFhuVPJkncicZeaticIicKZ5qWcEMJVPvnCN43Fg/640?wx_fmt=jpeg)

_军事应用_

  

为得到高精度的滤波结果，需要全面考虑网络化系统的复杂性。包括：①实际对象的非线性。非线性对象普遍存在，简单的线性化近似处理已经远远不能满足需求。②传感器饱和特性。工程上使用的传感器由于原理、制造技术以及使用安全等诸多因素限制，均无法识别或者提供幅值过大的信号，因而产生传感器件的饱和特性。频繁发生的饱和现象会造成器件损坏，失去测量的意义。③数据包丢失。由于网络拥塞、信道衰减等原因，使得数据包在传输过程中不可避免地会产生丢失现象。④传输时滞。由于网络诱导时滞的存在，使得一个采样周期内，到达接收端的数据可能是一个或多个，也可能没有任何数据。因此，对于非线性和不确定性同时存在的网络化系统，有必要设计能够在统一框架下处理上述问题的滤波器。

   

**如何针对复杂网络化系统设计满足性能要求的滤波器？**目前针对非线性对象多采用T-S模糊模型来逼近，而传感器饱和现象则建模为扇区有界非线性函数，但是由于传感器饱和而导致的传感器失效时信号来源问题还没有解决。对于网络诱导的随机丢包问题，主要有四种策略：一是零输入策略；二是保持输入策略；三是预报补偿策略；四是多包补偿策略。然而，如何在传感器饱和现象发生时提高数据的有效性，以及通过历史数据弥补丢包和时滞对系统性能的影响是提高滤波器设计精度的有效途径。

  

我们所提出方法的具体优势可以概括如下：

1) 传感器冗余策略：解决传感器饱和失效时测量信号的来源问题；

2) 多包补偿策略：利用缓存中的多个数据来补偿丢失的数据；

3) 模糊规则依赖方法：选取模糊规则依赖的Lyapunov函数分析系统稳定性，从而减小设计的保守性；

  

目前，针对传感器饱和现象引起的传感器失效问题未受到广泛重视。鉴于此，本文结合网络化控制系统的特性，提出饱和传感器的冗余策略，以及多包补偿方法克服网络化系统的时延丢包现象。在此基础之上，通过基于模糊依赖的Lyapunov函数分析系统的稳定性，降低了设计的保守性，并利用LMI技术得到滤波器参数的解，同时分析了传感器饱和、通讯时滞等对系统性能的影响。

  

**作者简介**

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZZRMKyiaBovIfAalJC9N2ODRJIJMpe2GOhNfXiblRkVXGkoqjlaqGEnnA/640?wx_fmt=png)

**李秀英**

上海应用技术大学电气与电子工程学院副教授. 主要研究方向为网络化系统的鲁棒滤波和控制. 

E-mail: xiuxiu4480@sina.com

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZPxawlClduIhBVZchrYAic9UFeH0BGASAkcFyuib2NS7ncJGfcemgjhXA/640?wx_fmt=jpeg)

**尹  帅**

哈尔滨工业大学博士研究生. 2020年于黑龙江大学获硕士学位. 主要研究方向为网络控制系统 H∞滤波, 航天器任务规划. 

E-mail: ys944083357@163.com

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZaPj5ZzAksDUnUQRZOwBKqVKKVVFlx6R2pdreIGF8gsnH8BYdTrzk3w/640?wx_fmt=jpeg)

**孙书利**

黑龙江大学电子工程学院教授. 主要研究方向为网络系统滤波, 多传感器信息融合. 本文通信作者. 

E-mail: sunsl@hlju.edu.cn

  

  

**期刊动态**

[《自动化学报》编辑部实习生招聘](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958966&idx=1&sn=4fef11c9e5d828f1961f8d6a54ecc447&chksm=f2942e77c5e3a761794f6181da8538975411290df13542ce66813b534b39b60ea77b886e4a45&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957872&idx=1&sn=e642c48a6d17dc0f99d2f3879446ecab&chksm=f29421b1c5e3a8a7b4e5cf8564d2f0713d3bcec5186ef4684875caf67dd096659450c96f31ce&scene=21#wechat_redirect)

[自动化学报蝉联百种中国杰出期刊称号，入选中国精品科技期刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957485&idx=1&sn=8af865466cb6f52b05a1e41af8549e71&chksm=f294202cc5e3a93a40b4850e6e0f0bccaf56c89591e049e9d98bfe9a598913f5d25e8ecfcf8d&scene=21#wechat_redirect)

[《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21#wechat_redirect)

[《自动化学报》多名作者入选科睿唯安2020年度高被引科学家](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957295&idx=1&sn=597189346218d96d9906447a50281084&chksm=f29427eec5e3aef8d0662def8a0afcde2d2f3f828ae8208a52b14fc72169cedc5d81c06185a9&scene=21#wechat_redirect)

[自动化学报排名第一，被评定为中国中文权威期刊](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956509&idx=1&sn=1e39aaf65dc579606cf36258be8e1744&scene=21#wechat_redirect)

  

**热点文章**

[中医舌象分割技术研究进展: 方法、性能与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071139&idx=1&sn=d00851cb35c6d4aff0b36a75cde68b7f&chksm=8131e8eeb64661f87053a2fabd389cfeab41d7d103502048a00b281f05cde290d27394f39543&scene=21#wechat_redirect)

[基于区块链的数字货币发展现状与展望](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958456&idx=1&sn=db1e69bbd69e864051158910b599e0a9&chksm=f2942c79c5e3a56f669395da520a1f215c6452cc8a0d40ca6e3b274b85e077c547bf4d85a8e5&scene=21#wechat_redirect)

[基于深度学习的表面缺陷检测方法综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070518&idx=1&sn=8097f7197598117c3b46d7d9dd984c85&chksm=8131ea7bb646636d9444a9d6f73eacacf11a22de2bc054e00941aa5bced3f7b2db0dd6326149&scene=21#wechat_redirect)

[比特驱动的瓦特变革—信息能源系统研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070474&idx=1&sn=bbfe03a0e9a8f97f46c87d75f466e7c2&chksm=8131ea47b646635104e90390e9a09f18947b3cd7d1bc9438dd4b4275f17db875abd2ab1a2849&scene=21#wechat_redirect)

[状态转移算法原理与应用](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069967&idx=1&sn=3fec83278b26be988d7a5fea928a69a9&chksm=8131d442b6465d54d02d3a0ae16b064548d496696b14906b9f6de6043645035ecd25f4f7b39b&scene=21#wechat_redirect)

[绿色能源互补智能电厂云控制系统研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069602&idx=1&sn=b50c1e8d5fd295dc2d98238c1d68ee42&chksm=8131d6efb6465ff9d162c0a8ff5aca0e6faa643e665e071c42484c4f1e61d951dd5851f346f1&scene=21#wechat_redirect)

[智能船舶综合能源系统及其分布式优化调度方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069520&idx=1&sn=8350658b7c26be6fdeab22034106ec66&chksm=8131d61db6465f0b6c2371721e55aec2e5e573eef4539d980fe768f3f0855242d0d4ff6e7d33&scene=21#wechat_redirect)

[孙长银, 吴国政, 王志衡等：自动化学科面临的挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070248&idx=1&sn=a02af679240552bf79b3dd01100be89b&chksm=8131d565b6465c73532b22b11e92c8dd87b72d269f79fe53a2e3050fa996cc8ab1fec676659c&scene=21#wechat_redirect)

[值得收藏！SCI论文中的常用句式全总结](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069425&idx=1&sn=c945766f5d7f2ada8a217b981dcc734c&chksm=8131d1bcb64658aa80092eb53e1ead905ab02fc7a9f035e798e57d6407472ef688e8f7f0e831&scene=21#wechat_redirect)

[收藏！SCI论文经典词和常用句型汇总](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069036&idx=1&sn=961c952c84a07355dc70d4bb8291ce25&chksm=8131d021b6465937c80cf41a3118a5ad92a752cb3979f22d5964a741269a1df1987a37185a31&scene=21#wechat_redirect)

[吴国政等：浅析人工智能学科基金项目申请资助情况及展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651068994&idx=1&sn=bca1ddc9774ad59ff1459a32883be60f&chksm=8131d00fb646591928654c4880aa609305efa30b538c0c431d8c8138df4401fcc87e80a131e0&scene=21#wechat_redirect)

  

**期刊目录**

[2021年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958886&idx=1&sn=ba599bc866e3eb23b0b8de0579956258&chksm=f2942da7c5e3a4b1fd1313e90d4f72354dd0de42cee19281f5c726978a841332622a0681d32c&scene=21#wechat_redirect)

[2021年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958569&idx=1&sn=ae33a7dcd6e2d66cae59932a1e99ce5e&chksm=f2942ce8c5e3a5fe7d94f6d809ecc492e83ebe118243f871cc4d82420c403784a01db82a93cb&scene=21#wechat_redirect)

[2021年第03期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958419&idx=1&sn=b5d00eb294aa8c61a6fe4a0da8b461b9&chksm=f2942c52c5e3a544ca32e37d63f8ca879a64018d3fa5b25abd6bde1aeb582914f16e1e11182a&scene=21#wechat_redirect)

[2021年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958305&idx=1&sn=a701b9996478d2c09078a03f5b22d524&chksm=f29423e0c5e3aaf692be51b3905e1cbf4045c6df9664ce7d13459de3c0c61aa284b13eb502b9&scene=21#wechat_redirect)

[2021年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958084&idx=1&sn=24c140a6a1957eb7f4164689ed2840a5&chksm=f2942285c5e3ab93c5ed6127ad93e76ded82ae657ca79f7ead390387fbe2a72cb6df0ec6dcd2&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

[2019年第12期 智能轨道交通系统专刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955524&idx=1&sn=a76b97bf832e984f0155acc0fb367bc7&chksm=f2941885c5e391935c353c88072e806cb0b5b9b78b1f7b23b3c6f4b8c6a2c12f72557f87b56b&scene=21#wechat_redirect)  

[2019年第01期 信息物理融合系统理论与应用专刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955194&idx=2&sn=fb75bc8af9672922fa20efe2d30ff6c9&chksm=f2941f3bc5e3962db43689d03a54a0e40d83cb0e69fb9c48e87c0325b5bdf1b71028ebbbba0a&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZVwtw0UsbIzbrLA4St3k4wE7NiaIJkmobKpT9RLw6ZF6FibqlhJkictt6A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZ8Llj9GyEEiawRQXI2B7icnqyXwyiblqqDPZmB8JlpAmEnOF5eJrkWxzfA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZsszYxa2ChaE373s8FGMygic2RqBNicbt4mFbFTjmicnJbcqWZkWQ5cSpg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZ7NMQnZKAabrsvUrNLbDO1yp4ekoQ7YO5ILH5vu6o18u12ejKQKDXNw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZYuXEbzfkKesffwaicMog1S0ichv1CvXBzeUPsET3KPwOPlD7K7crvGMw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46zk5bl2JIW9QhV1prF5NWZhVhwjjNFI0kibEKQBsxtoAVBPXC0307PN7oyibpky48WThosu3EL8rSA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** 

http://www.aas.net.cn

http://www.ieee-jas.org

**投稿:** 

https://mc03.manuscriptcentral.com/aas-cn   

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）  

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**点击****阅读原文** **了解更多**