# 段广仁院士：高阶系统方法— I.全驱系统与参数化设计

原创 自动化学报 自动化学报 2020-08-27 07:34 北京

> 原文地址: [https://mp.weixin.qq.com/s/n-MuKLF11dJzhr39t\_NQOw](https://mp.weixin.qq.com/s/n-MuKLF11dJzhr39t_NQOw)

  

_**本文通过一些基础物理定律、串联系统、严反馈系统和可反馈线性化系统等例子说明了高阶全驱系统的普遍性，进而指出高阶全驱系统是动态系统的一种描述形式，是面向控制的模型。然后介绍了一类高阶全驱系统的一种参数化设计方法。通过适当选取一类非线性状态反馈控制律，可获得一个具有希望特征结构的线性定常闭环系统，并给出了闭环系统特征向量和反馈控制律的完全参数化表示，讨论了解的存在性条件以及设计参数集合的稠密性等相关问题。**_

  

  

**段广仁. 高阶系统方法— I.全驱系统与参数化设计. 自动化学报, 2020, 46(7): 1333-1345**  

[_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200234_](http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200234)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OuAerJ0atvRicXQly3FQtgleMS339GhTPA59FZq9eldCgsS5WXib5rqjQ/640?wx_fmt=jpeg)

  

**一阶系统的利与弊**

由于任何一个高阶系统 (微分方程) 都可以化成一个增广的一阶系统 (方程)，这种增广的一阶系统(方程) 描述被看成是万能的，而这种降阶法或变量增广法的思想也为人们广泛接受，并被自然地引入到控制系统的分析与设计中来。

一阶系统方法在控制系统科学发展中所起的作用是巨大的。然而，动态系统的控制问题和微分方程的求解问题不同。微分方程的求解关注的是系统状态的解。系统控制的核心问题是控制量的求取。

状态空间法中的一阶系统模型注重的是状态的整体性，对于控制系统的状态响应分析、 观测器设计、 状态滤波与预报等问题而言，采用增广的一阶系统方法无疑是非常合适的。但这种方法显然没有把系统的控制变量作为重点，对于求解动态系统的控制问题实际上没有提供任何方便。

一阶系统方法把系统的二阶或高阶模型通过状态增广化成一阶系统模型来处理，本质上就是数学上所谓的降阶法或变量增广法。这种方法可以把一个全驱的二阶或者高阶系统化为一阶系统，那么我们可不可以反过来把一个一阶系统还原为一个全驱的二阶或高阶系统呢？这就是高阶系统方法的根本出发点。

  

**高阶全驱系统的优越性**

本文揭示了高阶全驱系统在控制器设计方面的突出优势，同时又充分说明了高阶全驱系统的普遍存在性。进而指出，高阶全驱系统远非一部分物理系统而已，它和系统的状态空间模型一样，是控制系统的一种描述形式，是面向控制设计的系统模型。在基于物理定律的控制系统建模过程中，采用增元降阶处理便可得到系统的一阶状态空间模型，采用消元升阶处理便可得到系统的高阶全驱模型。针对高阶全驱模型，本文也提出了一种参数化设计方法，提供了系统设计过程中的所有自由度。

高阶全驱系统方法之所以没有得到普遍重视的主要原因，是人们认为全驱系统是现实中的一小部分。一方面是因为许多全驱系统被化成了一阶系统，从而丧失了本有的全驱性; 另一方面是物理世界中确实存在着许多欠驱动系统。但受制于一阶系统方法的局限就不会考虑和认识到许多欠驱动系统都可以通过增阶化为全驱系统。高阶全驱系统是普遍存在的，它们是动态系统的一类面向控制的模型。大多数状态空间模型并不是“天然”存在的，而是从二阶模型化过去的。相反，由于动量矩定理和拉格朗日方程等一批物理规律的存在，我们倒是有很多“天然”的二阶全驱系统。

线性系统特性是更为人们所熟悉所喜好的，但许多现有的非线性控制方法都是获得一个非线性闭环系统。一般说来，这是不希望的，而是不得已而为之。高阶全驱系统方法允许我们更换全部开环系统特性，获得一个线性定常的闭环系统，这是一阶系统方法一般不可能提供的优越性。这一优越性使得线性系统设计的思想和方法能够有效应用到非线性控制系统设计中。我们可以在设计中考虑闭环特征值灵敏度最小意义下的鲁棒性，可以考虑 H∞ 指标和输出调节等，甚至也可以应用古典频域方法解决干扰解耦和抑制等问题·····

需要说明的是，控制系统设计也可以根据具体问题灵活处理。在某些情况下，系统中的一些扰动非线性也不必非要对消掉，可以通过所设计的闭环线性部分的稳定鲁棒性来容忍，从而达到简化控制器的效果。从理论上说，这一点对于许多满足 Lipschitz 条件的非线性项是可以实现的。

  

**结 论**

基于变量增广的一阶系统方法在两百多年的控制系统发展史上占有绝对的主导地位。本文指出了一阶系统方法的缺陷，介绍了高阶全驱系统的概念，并阐明了其下述多方面重要特点和优势:

1) 在物理世界中广泛存在 (但在以往的研究中都被化成了增广的一阶系统处理);  

2) 可以非常简单地实现控制系统设计，并可以彻底地更换系统的动态特性;  

3) 总可以获得一个线性定常的闭环系统 (这是基于一阶系统描述的许多非线性控制方法无法做到的);  

4) 系统设计中存在大量的设计自由度，可以有效加以利用来实现系统的多目标综合优化设计。  

另外，本文指出高阶全驱系统是动态系统的一种描述形式，是面向控制的模型。一方面它们可以基于基础物理定律建模获得，另一方面，也可以通过对欠驱动系统进行消元升阶获得。这些重要事实注定高阶全驱系统方法将具有广阔的发展和应用前景。

有关高阶全驱系统的能控能观性问题、 鲁棒镇定与跟踪问题、 干扰解耦与抑制问题、 自适应控制问题等，将另文讨论。

  

**_作者简介_**

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OC8HoUXpToobpcsTGYKEiayKicRDl41JSf2lymbia5s46GXxskuwfAd8Sw/640?wx_fmt=jpeg)

**段广仁**

中国科学院院士, 国家杰出青年基金获得者, 长江学者特聘教授, CAAFellow, IEEE Fellow, IET Fellow. 1989年获哈尔滨工业大学博士学位, 1991 年起任哈尔滨工业大学教授, 现为哈尔滨工业大学控制理论与制导技术研究中心主任. 主要研究方向为控制系统的参数化设计, 鲁棒控制, 广义系统, 航天器制导与控制. 

E-mail: g.r.duan@hit.edu.cn

  

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

  

根据中国学术期刊影响因子年报，《自动化学报》最新影响因子为5.936；根据中国科技期刊引证报告，《自动化学报》的核心影响因子为2.793，核心影响因子、总被引频次、综合评价总分、核心权威因子四项主要指标全部排名第1。

  

《自动化学报》多年来多次获得 “百强报刊”， “精品科技期刊”、“百种杰出学术期刊”、“中国最具国际影响力学术期刊”等荣誉称号。

  

![](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OJLADe1WepxiadNNrLCs1DgibicBH3jtrTiaaTCvLvrNOHf15ic3vme331NA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OKpYV4ZbhwgvuUic8cPU2pLbwMkA9esxNGaFvrY2gvZAichVc8IXO34BQ/640?wx_fmt=jpeg)

**JAS《自动化学报》（英文版**）   

![](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OJLADe1WepxiadNNrLCs1DgibicBH3jtrTiaaTCvLvrNOHf15ic3vme331NA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OSOc0Xvk6QHz8QIlicKt7DlDBg0YXkl7PdS5FMAoXUsmwtvSBib7R3h5Q/640?wx_fmt=jpeg)

**《自动化学报》服务号** 

![](https://mmbiz.qpic.cn/mmbiz_png/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1OJLADe1WepxiadNNrLCs1DgibicBH3jtrTiaaTCvLvrNOHf15ic3vme331NA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/RXx7THRlLH0Wb8yl31mpVvhM1cvBrN1ONT9Apj5ibVkGrfmtia1xTtDibcEZpwXjUTN46UwC8Fwz9yd7C2UpVx4Sw/640?wx_fmt=jpeg)

**《自动化学报》订阅号** 

  

_**联系我们**_

Tel:     010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

Fax:    010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

           aas\_editor@ia.ac.cn（录用后稿件处理）

[_http://www.aas.net.cn_](http://www.aas.net.cn)

**点**

**这里“阅读原文”，查看更多**