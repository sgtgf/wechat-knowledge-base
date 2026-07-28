# 基于ISDAE模型的复杂工业过程运行状态评价方法及应用

原创 自动化学报 自动化学报 2021-05-12 16:28 北京

> 原文地址: [https://mp.weixin.qq.com/s/tN95eCHOOL6cmuuInhLVYA](https://mp.weixin.qq.com/s/tN95eCHOOL6cmuuInhLVYA)

**点击蓝字 ╳ 关注我们**

  

**运行状态评价**是指：在生产过程安全运行的前提下, 对实际工业过程运行状态的优劣作进一步的识别及评判, 并对非最优运行状态进行非优因素追溯, 为操作人员及时调整控制策略或工业过程的自愈控制提供指导建议.  

  

褚菲, 傅逸灵, 赵旭, 王佩, 尚超, 王福利. 基于ISDAE模型的复杂工业过程运行状态评价方法及应用. 自动化学报, 2021, 47(4): 849−863

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200475?viewType=HTML_

  

工业过程的运行状态不可避免地会受到各类干扰或不确定性因素影响, 从而偏离期望的最优工况点. 因此, 引入实时的过程监控技术对保证产品质量及综合经济效益至关重要. 传统的以区分 “正常/故障”状态的过程监测技术已不能满足现代工业过程智能精细化管理的需求. 因此, 对复杂工业过程实施精准且稳健的运行状态评价, 具有十分重要的实际意义.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0CWJiaIWXRQrXG9qqnnjt6bdfcRdwkp9dG6QE7kj3MibdzuH9gAzBwFicA/640?wx_fmt=jpeg)

_典型复杂工业过程_

  

**复杂工业过程运行状态评价面临的问题和挑战：**

1）工业过程的复杂程度日渐增加, 过程变量间具有强耦合和强非线性；

2）过程变量与综合经济指标相关的特征难以提取;

3）实际生产过程中存在各种形式的噪声干扰和不确定性因素,导致工业现场的过程数据存在缺失和大量噪声;

4）工业过程数据中存在信息冗余问题;

面对这些问题和挑战，如果继续采用现有的运行状态评价方法, 则难以建立稳健可靠的工业过程运行状态评价模型.

**针对实际工业过程中存在强非线性、信息冗余以及不确定性因素影响等问题，如何建立稳健可靠的运行状态评价模型？**

  

现代化工业过程变量间普遍呈现非线性, 现有的基于线性方法的运行状态评价模型无法获得满意的效果. 而神经网络方法中的自编码器由于其强大的数据特征提取能力，可以学习复杂的非线性，使其能够满足对工业过程进行运行状态评价的需求. 但自编码器在特征提取阶段仅仅是无监督地对原始输入数据进行重构, 因此无法保证所提取的过程特征与所识别的过程相关指标的关联性.

  

本文通过在稀疏降噪自编码器模型无监督学习机制的基础上引入综合经济指标预测误差项, 提出了一种基于综合经济指标驱动的稀疏降噪自编码器模型(Comprehensive economic index driven sparse denoising autoencoder, ISDAE) 的复杂工业过程运行状态评价方法. 针对工业过程变量间的强非线性以及难以提取过程变量与综合经济指标间相关特征的问题, 通过引入综合经济指标预测误差项迫使ISDAE 模型挖掘出与综合经济指标相关的原始数据特征. 针对工业过程信息冗余问题,利用稀疏性约束使得模型学习过程数据的稀疏特性, 使其更有效地找出隐含在输入数据内部的结构与模式. 同时, 针对工业过程数据中存在噪声的问题, 通过对原始输入数据进行数据破坏, 迫使编码器去学习输入数据的更加鲁棒的特征表达, 增强模型的鲁棒性.

复杂工业过程的运行状态评价主要包括离线建模，在线评价和非优因素追溯三个部分.

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0DjORunAMXibGINLibGuwWR4rWXen5wBWhB5iadmrvoSsQP3OYdJXunYUA/640?wx_fmt=png)

_基于ISDAE模型的复杂工业过程运行状态评价系统框图_

  

**离线建模:** 通过在稀疏降噪自编码器模型无监督学习机制的基础上引入综合经济指标预测误差项, 能够同时提取过程变量中蕴含的过程运行模式特征与综合经济指标相关的过程特征，提高运行状态评价模型的可靠性.

  

**在线评价:** 结合连续过程的运行特点, 制定合适的在线滑动窗口大小. 根据窗口内的数据距离当前时刻的时间远近赋予不同的信任权值, 输出不同等级的加权后验概率作为当前时刻不同等级的后验概率，提高在线评价结果的准确性.

  

**非优因素追溯:** 当在线数据被评价为 “非优”状态等级时, 计算每个过程变量的对非优运行状态的贡献率，准确识别导致过程非优的原因.

重介质选煤过程的主要任务是去除原煤中的杂质, 降低原煤中的灰分和硫分, 以获得满足用户需求的高品质精煤, 重介质选煤过程为典型的复杂工业过程. 本文以重介质选煤过程过程为背景，验证了所提方法的有效性和实用性.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic04ziaib4EVScXImzQSoiaxSGNribSqhddmGpeZ698QZgtsSTt9USOrR0JwA/640?wx_fmt=jpeg)

_本文所提运行状态评价方法研究路线和仿真结果_

  

**作者简介**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0eicly1WLR4Zp5vvee5jb1HrSQPx6XMrGricvXBelxYOShicyZtFuSRQAA/640?wx_fmt=jpeg)

**褚  菲**

中国矿业大学信息与控制工程学院副教授. 2014年获东北大学控制理论与控制工程博士学位. 主要研究方向为复杂工业过程智能建模、控制与优化, 运行状态评价和机器学习等. 本文通信作者. 

E-mail: chufeizhufei@sina.com

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0HKeluoy1MoMhiaWRicIO24UiaJgJbTo4sYTmvwc5KwmcuWIvz1ZYGZvqQ/640?wx_fmt=jpeg)

**傅逸灵**

中国矿业大学信息与控制工程学院硕士研究生. 2016年获郑州大学电气工程学院学士学位. 主要研究方向为复杂工业过程建模与运行状态评价. 

E-mail: i11606923@163.com

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0pUqRYv9JiaBtnAibplBFVAsNZcicHYAqHJNKAOhknWd8NkNECE2ibGib6Gg/640?wx_fmt=jpeg)

**赵  旭**

中国矿业大学信息与控制工程学院硕士研究生. 2017年获三江学院机械与电气工程学院学士学位. 主要研究方向为复杂工业过程运行优化与运行状态评价.

E-mail: zhao\_xu1994@126.com

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0H6USCaeMlySk3wLFwobPmYSZiasGasvuYQ6GRyQ3Jr3bYKhrhS9AQJA/640?wx_fmt=jpeg)

**王  佩**

中国矿业大学信息与控制工程学院硕士研究生. 2019年获合肥师范学院电子信息与电气工程学院学士学位. 主要研究方向为复杂工业过程建模与运行状态评价.

E-mail: cumt\_aaron@163.com

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic086lBsAjAyxGLvRQzuZOeCibcdRUMNBzJI5ALeXh9hibRrndKEebJZjeg/640?wx_fmt=jpeg)

**尚  超**

清华大学自动化系助理教授. 2016年获清华大学自动化系博士学位. 主要研究方向为大数据解析及工业应用, 过程监控与故障诊断和工业过程建模. E-mail: c-shang@tsinghua.edu.cn

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0K6B0SO1naKJ9dias3ib6ovofBoyjibw5JsEqPibkVUZQABRTGic6fiaseabw/640?wx_fmt=jpeg)

**王福利**

东北大学教授. 1988年获东北大学自动化系博士学位. 主要研究方向为复杂工业系统的建模、控制与优化, 过程监测和故障诊断.

E-mail: wangfuli@ise.neu.edu.cn

  

  

**期刊目录**

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

[段广仁院士：高阶系统方法—Ⅲ. 能观性与观测器设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956510&idx=1&sn=7aa3652a7908ccd9621b47023dc25103&chksm=f29424dfc5e3adc938a51b7b1620a6f47911c974153f94b2c38cfdc37536b750195fbc4be8a4&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— II. 能控性与全驱性](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956009&idx=1&sn=d887902e385f28ddea0fcb569208bb86&chksm=f2941ae8c5e393feccb4347c9a3afbe191007f67323747782405b9ca5c754ba6e16017557786&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— I. 全驱系统与参数化设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955943&idx=1&sn=7d2e161c5d48ea877709b94ef706a3af&chksm=f2941a26c5e3933077b5c9ef2cf38af1087f3f074454251d441433f1c53861ddd85386b7a260&scene=21#wechat_redirect)

[陈虹教授等：智能时代的汽车控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065976&idx=1&sn=d6daa2fafd8e723a0238c5566cf1641c&chksm=8131c435b6464d23449b163afedd37f20a5d7598fe6684c6b011d19554e0ed38ef031fbf2ec9&scene=21#wechat_redirect)

[科研必备！盘点常用文献管理工具](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956322&idx=1&sn=aa1f98bb307dda70981e073546c973c4&chksm=f2941ba3c5e392b58981c27b2ea1334ef149e0b9eb126ac62453537db789a694cc35f72cac09&scene=21#wechat_redirect)

[吴子牛教授: 浅谈论文写作](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955566&idx=1&sn=3df5d36d46f533cae96361a987e914db&chksm=f29418afc5e391b97525c9f5193e21d92517dc58041e51509d0e5fb7f25938a7e601e414e46b&scene=21#wechat_redirect)

[刘洋教授: 浅谈研究生学位论文选题方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955575&idx=1&sn=b0cba28d16eb2af6672862064dca2ac8&chksm=f29418b6c5e391a0af6810385fdc25c36fade0562348469a5b28195b9c46309ee1c7b873c280&scene=21#wechat_redirect)

[张军平教授: 论文选题与写作](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955604&idx=1&sn=1b2dab0efab5528e57ce3b80a69f70e0&chksm=f2941955c5e390434fb1bc78bbd754f6209f2c75ba841c3023aadf8681c4f6b6784cf3f2af84&scene=21#wechat_redirect)

  

**期刊动态**

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957872&idx=1&sn=e642c48a6d17dc0f99d2f3879446ecab&chksm=f29421b1c5e3a8a7b4e5cf8564d2f0713d3bcec5186ef4684875caf67dd096659450c96f31ce&scene=21#wechat_redirect)

[自动化学报蝉联百种中国杰出期刊称号，入选中国精品科技期刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957485&idx=1&sn=8af865466cb6f52b05a1e41af8549e71&chksm=f294202cc5e3a93a40b4850e6e0f0bccaf56c89591e049e9d98bfe9a598913f5d25e8ecfcf8d&scene=21#wechat_redirect)

[《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21#wechat_redirect)

[《自动化学报》多名作者入选科睿唯安2020年度高被引科学家](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957295&idx=1&sn=597189346218d96d9906447a50281084&chksm=f29427eec5e3aef8d0662def8a0afcde2d2f3f828ae8208a52b14fc72169cedc5d81c06185a9&scene=21#wechat_redirect)

[自动化学报排名第一，被评定为中国中文权威期刊](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956509&idx=1&sn=1e39aaf65dc579606cf36258be8e1744&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic05EVmZw8YaMGVT2UX4sibk9jTZAKawTrfMEUAH2kMlV4pANCVBhUYuVQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0nicgy7yV144N8OAJmTia60Nibzs1YQU9ZYgzicIJibbRohgcvnr2ODsXbmQ/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0Y99GdRe7ibK1Mk5u1yic9PqicSSn2k5hCiacQj73UVCcp9u6u4vVp96J9A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic04LjCYVI9KLC0IlN7ibFS5yXe5mSZPRHe8nia6SA7XAOiaImVCTKEQNmhg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0icM567Yt6ic9kXZXdlGn8ZZSCYbB9BSribibt4fDau5TuCQ79ZYlf3uX9A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47vbTAgXM0eXclsVCbFNAic0YDFNzemLHhLHHQnBxp4nVfgicKsZlMQZCH6N3MS1ib1H8ZSLw6qlDtyA/640?wx_fmt=gif)

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