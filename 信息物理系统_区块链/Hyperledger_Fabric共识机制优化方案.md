# Hyperledger Fabric共识机制优化方案

原创 自动化学报 自动化学报 2021-09-18 09:58 北京

> 原文地址: [https://mp.weixin.qq.com/s/0aHE4yYWD1tBMhLOtNdXUg](https://mp.weixin.qq.com/s/0aHE4yYWD1tBMhLOtNdXUg)

**点击蓝字|关注我们**

  

**共识机制**是指：在无中心、弱信任的分布式系统中，通过信息交互或运算使各个节点对某个值或某种状态产生相同的看法，实现异地环境中的数据或状态同步。

作为区块链的核心技术，共识机制需要注重安全性、效率和能耗等问题, 从而保证区块链系统能够正常运行. 目前主流的共识机制有工作量证明(Proof of work, PoW)、权益证明(Proof of stake, PoS)和授权权益证明(Delegated proof of stake, DPoS)等证明类共识机制, 以及实用拜占庭容错(Practical Byzantine fault tolerance, PBFT)等传统分布式系统一致性算法. 

  

孟吴同,  张大伟.  Hyperledger fabric共识机制优化方案.  自动化学报,  2021,  47(8): 1885−1898

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190516?viewType=HTML_

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAIPBYYAg7p3ibE0JQktvMc350FzD7Q7sm4YqkYvyE48umVqyH0blEUhQ/640?wx_fmt=jpeg)

_图1  主流共识算法_

  

Hyperledger 是Linux基金会于2015年主导发起的开源项目, 其子项目Hyperledger fabric是一个允许多方参与、开发、部署和运行区块链应用的联盟链平台. Hyperledger fabric旨在创造一个模块化和可扩展的区块链开发框架, 为企业级区块链应用的开发提供解决方案.Hyperledger fabric将应用层的信任模型同底层的共识协议解耦, 拆分共识过程为交易内容合法性验证和交易顺序一致性保证两个步骤. 背书和验证保证交易内容的合法性, 排序保证交易顺序的一致性. 通过将这两部分进行解耦, 智能合约的开发者可以设计更为灵活的信任模型, Hyperledger fab-ric网络也获得了更快的交易处理速度. 

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAL09hwa29r8eenv7eJVMvGZ4g6vS5wbIo1kJo7Fx0hBJF8BwNc84LbQ/640?wx_fmt=jpeg)

_图2  Hyperledger fabric项目_

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAumBiaUHJOop5wAWtZTicYTFk6EyELrrzClNuQBHnYBG1wI6IMZI2AGqw/640?wx_fmt=png)

_图3  Hyperledger fabric共识机制_

  

在Hyperledger fabric中, 背书节点属于关键节点, 数量较少却承担着对所有交易内容的合法性进行背书的重要任务; 并且为了便于交易客户端识别和验证,背书节点的身份必须公开. 在区块链网络中身份公开且承载着大量的敏感交易数据, 这必然使得背书节点成为敌手的首要攻击目标. 此外, 由于每个背书节点都要处理所有的交易, 这使其成为系统中交易处理的性能瓶颈, 从而导致单个背书节点的处理能力限制了整个区块链网络的交易速度.

  

本文针对联盟链中共识机制的安全性问题, 在 “背书−排序−验证”共识模型的基础上引入非交互式可验证随机节点抽取方法, 提出了一种Hyperledger fabric共识机制的优化方案:

  

1) 引入背书节点候选集, 使用可验证随机函数(Verifiable random functions, VRF)的随机输出特性在非交互模式下抽取背书节点, 降低背书节点中心化程度, 增加系统的抗攻击能力;

  

2) 交易客户端利用可验证随机函数的验证特性来完成背书节点的身份认证, 从而在节点随机抽取过程中确保背书节点身份的真实性和可验证性;

  

3) 将原有的一组背书节点为所有交易背书, 改进为多组背书节点为交易进行背书, 使用并行处理的方式来提高交易处理速度.

  

实验结果表明, 优化后的共识机制在保证通信成本基本不变的前提下, 具有更高的安全性、更低的交易延迟和更快的交易处理速度.

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47H4FLJia2icn34oh31o3rDQASwxZYUC7VTclFAnp9gW8QQ70QKsN4CicBMticLqMtQnSP9CY1eCp0QwQ/640?wx_fmt=png)

_图4  优化后的Hyperledger fabric共识机制_

  

**作者简介**

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIX8nN2aOJ85MezXlhwLrT6gUVnNlQSdmic4Q3PdmCkyB32LKEDKMz49Wib25rHPqZuR3d86Gw5BGgG/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAjL7YicbvicXcGTL6pXBFsxGSvEDpIGHej1fZxZNBsUg0yPhc0q58QBicg/640?wx_fmt=jpeg)

**孟吴同**

北京交通大学硕士研究生. 2017年获得河北大学网络工程学士学位. 主要研究方向为区块链.

E-mail: mengwt@bjtu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIX8nN2aOJ85MLoyq48XGaa3R4YgQtzk5wec5zI9HCRZu4CG4ibEDOia95JmRR2k6hwlicYt6Hy4EWlF/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIX8nN2aOJ85MezXlhwLrT6gUVnNlQSdmic4Q3PdmCkyB32LKEDKMz49Wib25rHPqZuR3d86Gw5BGgG/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAzJZbNTKE4E8Ay3pGEdYJWJ7FvSXxSia768m2Bjjo6LiajMhribSoQod4w/640?wx_fmt=jpeg)

**张大伟**

北京交通大学计算机与信息技术学院副教授.2004 年于北京航空航天大学获得通信与信息系统专业博士学位. 主要研究方向为区块链, 安全协议, 可信计算. 本文通信作者.

E-mail: dwzhang@bjtu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIX8nN2aOJ85MLoyq48XGaa3R4YgQtzk5wec5zI9HCRZu4CG4ibEDOia95JmRR2k6hwlicYt6Hy4EWlF/640?wx_fmt=svg)

  

  

**期刊目录**

[2021年第08期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959903&idx=1&sn=6eab97a89ffabbeffc0ff2ef715b2dd1&chksm=f294299ec5e3a0880a5a2c33475d4ebbddee6a1301e001975411aec2234ccf8f88edcadd0e5b&scene=21#wechat_redirect)

[2021年第07期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959756&idx=1&sn=7e5985469c10d03031de1d44d2b2c258&chksm=f294290dc5e3a01b626b4300d9f444cb8de1bea7ba390f12e835b4d3373e49c1c23dd11c8959&scene=21#wechat_redirect)

[2021年第06期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959156&idx=1&sn=5fbd7f8c73b2ec6e4c21136bff39e716&chksm=f2942eb5c5e3a7a3a94c8be799a10e43dd60f7255a10f8c850d62bd5bdada5bb7d1acc29e1a1&scene=21#wechat_redirect)

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

  

**热点文章**

[中国科学院自动化研究所高层次人才招聘启事 | 长期有效](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959451&idx=1&sn=657b7e4aeeaa88114d5189641c5409dc&chksm=f294285ac5e3a14cd230a2b9678c32ba9bf92e8ffc9d61d506c5ffea2df793456dd37c2c6fb1&scene=21#wechat_redirect)

[基于平均距离聚类的NSGA-Ⅱ](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071210&idx=1&sn=4d6b03f3de40972233111d419f661a7f&chksm=8131e8a7b64661b1424c2caf619bf0248ac2a6fc698d537144080a1fc0310efc4fdd92eade30&scene=21#wechat_redirect)

[传感器饱和的非线性网络化系统模糊H∞滤波](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071175&idx=1&sn=e78285c311fde57d52c77b70d146610f&chksm=8131e88ab646619ca999f197a1aeb6c3f04a6837f2a6df0cd45fe4439799fba5f9612ccd237b&scene=21#wechat_redirect)

[中医舌象分割技术研究进展: 方法、性能与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071139&idx=1&sn=d00851cb35c6d4aff0b36a75cde68b7f&chksm=8131e8eeb64661f87053a2fabd389cfeab41d7d103502048a00b281f05cde290d27394f39543&scene=21#wechat_redirect)

[基于区块链的数字货币发展现状与展望](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958456&idx=1&sn=db1e69bbd69e864051158910b599e0a9&chksm=f2942c79c5e3a56f669395da520a1f215c6452cc8a0d40ca6e3b274b85e077c547bf4d85a8e5&scene=21#wechat_redirect)

[基于深度学习的表面缺陷检测方法综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070518&idx=1&sn=8097f7197598117c3b46d7d9dd984c85&chksm=8131ea7bb646636d9444a9d6f73eacacf11a22de2bc054e00941aa5bced3f7b2db0dd6326149&scene=21#wechat_redirect)

[比特驱动的瓦特变革—信息能源系统研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070474&idx=1&sn=bbfe03a0e9a8f97f46c87d75f466e7c2&chksm=8131ea47b646635104e90390e9a09f18947b3cd7d1bc9438dd4b4275f17db875abd2ab1a2849&scene=21#wechat_redirect)

[状态转移算法原理与应用](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069967&idx=1&sn=3fec83278b26be988d7a5fea928a69a9&chksm=8131d442b6465d54d02d3a0ae16b064548d496696b14906b9f6de6043645035ecd25f4f7b39b&scene=21#wechat_redirect)

[绿色能源互补智能电厂云控制系统研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069602&idx=1&sn=b50c1e8d5fd295dc2d98238c1d68ee42&chksm=8131d6efb6465ff9d162c0a8ff5aca0e6faa643e665e071c42484c4f1e61d951dd5851f346f1&scene=21#wechat_redirect)

[智能船舶综合能源系统及其分布式优化调度方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069520&idx=1&sn=8350658b7c26be6fdeab22034106ec66&chksm=8131d61db6465f0b6c2371721e55aec2e5e573eef4539d980fe768f3f0855242d0d4ff6e7d33&scene=21#wechat_redirect)

[值得收藏！SCI论文中的常用句式全总结](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069425&idx=1&sn=c945766f5d7f2ada8a217b981dcc734c&chksm=8131d1bcb64658aa80092eb53e1ead905ab02fc7a9f035e798e57d6407472ef688e8f7f0e831&scene=21#wechat_redirect)

[收藏！SCI论文经典词和常用句型汇总](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069036&idx=1&sn=961c952c84a07355dc70d4bb8291ce25&chksm=8131d021b6465937c80cf41a3118a5ad92a752cb3979f22d5964a741269a1df1987a37185a31&scene=21#wechat_redirect)

  

**期刊动态**

[自动化学报（英文版）首届青年编委招募](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959475&idx=1&sn=e28ce2b8fa27ee4fb6a5c0c17e25dd25&chksm=f2942872c5e3a16438dbf45fd8091b643cd2bf50f0bab7092a6c5103d06cd4a16ebceb4db40a&scene=21#wechat_redirect)

[《自动化学报》9篇文章入选2020“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959410&idx=1&sn=e3e8ba749a1d075423a5c46328f812d8&chksm=f2942fb3c5e3a6a5beba9f59644c661a4d2ee623378551fa3a6fcfbce271868529d2cb149ff8&scene=21#wechat_redirect)

[JAS最新影响因子6.171，排名世界第7](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959382&idx=1&sn=f0ab35e9db7f66b68ccc1e4cca1b9dae&chksm=f2942f97c5e3a6813143ad6bc478369124d0ec36fea79d7af93c021b51ef225616b0ebf339bd&scene=21#wechat_redirect)

[自动化学报编委金耀初教授当选欧洲科学院院士](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071272&idx=1&sn=41781c579c3615bb9dabb0e76a7993c4&chksm=8131e965b6466073f1a2e1277370ae00938fa60eb98ab400aaaa847aba15c6b91ebe79ecedc0&scene=21#wechat_redirect)

[JAS编委韩清龙教授当选欧洲科学院院士](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959352&idx=1&sn=dc42494191ad7dcc1b5e705bb204cfeb&chksm=f2942ff9c5e3a6ef3f86e420859dd8fadb7ad3e11625cba02fecab4449d5b1f3e2511472dd55&scene=21#wechat_redirect)

[JAS副主编姜钟平教授当选欧洲科学院院士](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071275&idx=1&sn=032005e63b6626596afe850f7562fee3&chksm=8131e966b646607008f227c917a6028bc05d62d8c2d1da68b939497fb52b5fcd82d5b2f7e441&scene=21#wechat_redirect)

[JAS副主编刘德荣教授当选为欧洲科学院外籍院士](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959324&idx=1&sn=bbc81384a97a28c9df3ea612f5b666d2&chksm=f2942fddc5e3a6cb3182c229b8da44cdb07f4ecefa3a95626845625d06c7ff57217da7405b4b&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957872&idx=1&sn=e642c48a6d17dc0f99d2f3879446ecab&chksm=f29421b1c5e3a8a7b4e5cf8564d2f0713d3bcec5186ef4684875caf67dd096659450c96f31ce&scene=21#wechat_redirect)

[自动化学报蝉联百种中国杰出期刊称号，入选中国精品科技期刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957485&idx=1&sn=8af865466cb6f52b05a1e41af8549e71&chksm=f294202cc5e3a93a40b4850e6e0f0bccaf56c89591e049e9d98bfe9a598913f5d25e8ecfcf8d&scene=21#wechat_redirect)

[《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21#wechat_redirect)

[《自动化学报》多名作者入选科睿唯安2020年度高被引科学家](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957295&idx=1&sn=597189346218d96d9906447a50281084&chksm=f29427eec5e3aef8d0662def8a0afcde2d2f3f828ae8208a52b14fc72169cedc5d81c06185a9&scene=21#wechat_redirect)

[自动化学报排名第一，被评定为中国中文权威期刊](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956509&idx=1&sn=1e39aaf65dc579606cf36258be8e1744&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQATFYPl6ZqgibicBKpZg8JSpgVQtzNy95bOiaTiba2IMIWfs83Y7WraiamH6g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQANHpHxwHCRC2QGmibXhXECplcNpaUYg3s4UxkMKXaIBdib7qN7gEcQcfA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAHcVJO08VygLaM2hs2LW9LnCNFo2UROpR02CpzNDsoo4wp4fIrqwp2Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAiaYqEZ9Ud2obAuOZGVtygd3MHDjHLtBpJm2ticyQcOljZpTKPx2CeNjQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAnRP4EvMmWKrnyKfu5eEOxhvAwmS92WrkcibQUHHBNkrNibia1YbWJY2cQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47H4FLJia2icn34oh31o3rDQAuBPbVQdg5MYff3bgrzmFicPFP2whwPibodnianuQFhvBtMQWYGwd2Pu8w/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** 

http://www.aas.net.cn

http://www.ieee-jas.net

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