# 好文分享‖美国工程院院士Dimitri Bertsekas教授最新综述：多智能体强化学习

原创 自动化学报 2021-05-08 09:36 北京

> 原文地址: [https://mp.weixin.qq.com/s/9KLx\_550Zqgyf4gp\_tuINA](https://mp.weixin.qq.com/s/9KLx_550Zqgyf4gp_tuINA)

![](https://mmbiz.qpic.cn/mmbiz_gif/cHanbNh4sr8zTqPUFofK3eHaL7wLbrteiaxPXp2DqNplLicIvBsdTj8sZlibeZ5TNpyibuVgDaWfSvFhmzOnqmiciavA/640)

  

![](https://mmbiz.qpic.cn/mmbiz_png/cHanbNh4sribKej19kicQGq4zRML4w9uwqTibCGoPRgbp0hSuA720yY9T4bUz4JWfuTia76MRibGhnLWJJXNPaUic1zQ/640)

文章导读

![](https://mmbiz.qpic.cn/mmbiz_png/rPotUmOtaictEVlvEWwxHjRwosicM8e2MuMZqpicCapeAkOKWricibWlIWP2aHqfWibcf0fxPrGpxugzr9UJ9z8SZvhA/640)

  

  

**美国工程院院士、MIT**教授**Dimitri Bertsekas在IEEE/CAA Journal of Automatica Sinica 2021年第2期发表了多智能体强化学习的最新研究****[“Multiagent Reinforcement Learning: Rollout and Policy Iteration”](http://www.ieee-jas.net/article/doi/10.1109/JAS.2021.1003814?pageType=en)。**

  

该研究讨论了多智能体强化学习中的复杂多阶段决策问题，涉及多种形式的经典策略迭代方法，其中每次迭代的推广策略都将被作为下一次迭代的基本策略。基于广泛和一致的计算经验，基于仅生成一次改进策略的rollout算法是强化学习方法中最简单可靠的方法之一，也适于在线无模型实现和在线重新规划。

  

近似策略迭代是强化学习方法中最重要的一种，可被视为rollout算法的重复应用，并可提供（离线）基本策略。这种方法可以使用系统本身生成的数据以及策略近似值实现。

  

在AlphaZero象棋程序中，近似策略迭代得到了最显著的应用，特别是在其网络架构中，通过一个基于深度神经网络的近似策略迭代方案构建了一个基本策略，通过近似多步前瞻方案在线生成棋步，该方案使用蒙特卡洛树搜索，并将基本策略的近似评估作为终端成本函数的近似。研究表明，在多智能体背景下，rollout算法大大降低了计算要求，同时仍保持了标准rollout算法的基本特性。

  

![](https://mmbiz.qpic.cn/mmbiz_png/cHanbNh4sricXNLWHbu4S8ialFCElXEaib1hFFROk5G58Ric0vmDqhKPe1LnQMiaibJSsicEhTyiaDqZsVTd8WJOeI431w/640?wx_fmt=png)

Conceptual struture of a multiagent system

  

注：文章导读由JAS编辑整理摘译，如有疏漏欢迎指正

  

**Highlights:**

  

❀ Assumed that the control constraint set is finite in order to argue about the computational efficiency of the agent-by-agent rollout algorithm.

  

❀ Proposed new autonomous multiagent rollout schemes for both finite and infinite horizon problems. The idea is to use a precomputed signaling policy, which embodies sufficient agent coordination to obviate the need for interagent communication during the on-line implementation of the algorithm.

  

❀ Finally mention that the idea of agent-by-agent rollout also applies within the context of challenging deterministic discrete/combinatorial optimization problems, which involve constraints that couple the controls of different stages.

  

**推荐阅读：**  

  

[美国工程院院士Dimitri P. Bertsekas: 强化学习及最优控制(71页PPT)](https://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060901&idx=1&sn=a8a4e31f26852b586004673dc9f1e6f3&chksm=8f5a9429b82d1d3fdcd8edbc9ebc1e4f436bd32ac990028909a916a04f391d219647798d732c&scene=21#wechat_redirect)

  

[美国工程院院士Dimitri P. Bertsekas: 基于特征的聚合与深度强化学习](https://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059710&idx=1&sn=838f6267d853bd50f8a3c949549c6a92&chksm=8f5a9372b82d1a646a9c070782840d1ebb3e903b4cb27d86eb3a8f78329b530d5fda5035ef2d&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/cHanbNh4sribKej19kicQGq4zRML4w9uwqicUoatRrFzVIgZrDjibxiaDpia6O6WcUIY3lqruJmb40GhTgBCu8bOWu9Q/640)

  

![](https://mmbiz.qpic.cn/mmbiz_png/cHanbNh4sribKej19kicQGq4zRML4w9uwqTibCGoPRgbp0hSuA720yY9T4bUz4JWfuTia76MRibGhnLWJJXNPaUic1zQ/640)

文章信息

**Dimitri Bertsekas, ["Multiagent Reinforcement Learning:Rollout and Policy Iteration,"](http://www.ieee-jas.net/article/doi/10.1109/JAS.2021.1003814?pageType=en) _IEEE/CAA J. Autom. Sinica_, vol. 8, no. 2, pp. 249-272, Feb. 2021.**

![](https://mmbiz.qpic.cn/mmbiz_png/cHanbNh4sribKej19kicQGq4zRML4w9uwqTibCGoPRgbp0hSuA720yY9T4bUz4JWfuTia76MRibGhnLWJJXNPaUic1zQ/640)

全文获取

1\. 点击文题或识别下方二维码在线阅读~

![](https://mmbiz.qpic.cn/mmbiz_png/cHanbNh4sribKej19kicQGq4zRML4w9uwqTOsndE3ASQUosXNSq5sBbWC9kN0ibHicaY7hmfvlQ8fYFN4mCpXhOx5g/640)

2\. 邀您加入“JAS&自动化学报读者服务交流”微信群，获取更多资源资讯！添加小编微信“zss912483428”拉您入群~

![](https://mmbiz.qpic.cn/mmbiz_jpg/cHanbNh4sribaF1EP6FBdYtHPrQsz9mnibQ5WnHZ0uVTib3yD5oCKHI0e883wfyCCzdIQ90ia8M7e6zS1fHcgeEerA/640?)

3.后台留言留下您的邮箱，小编发给您~

![](https://mmbiz.qpic.cn/mmbiz_gif/cHanbNh4sribKej19kicQGq4zRML4w9uwqn4YAHJbMgNn1KibdekTm9F3sicmNVY9RhjRn2ibUJnVWHTHO72yUzuH7Q/640)

**分享 点赞 在看！**

**![](https://mmbiz.qpic.cn/mmbiz_gif/cHanbNh4sribKej19kicQGq4zRML4w9uwqMDTE3njhHccVEnMiczQYxUiaNHxUOuuDZnR4MwXODmAz3zplqSsib29CQ/640)**

  

热

点

文

章

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061097&idx=1&sn=bf91bebb018473348d255034d2391d30&chksm=8f5a94e5b82d1df371456b9d6c9b379bf17fcc9f0e5f05b3f49de2d99f5ef59efdca915dc2af&scene=21#wechat_redirect)[IEEE Fellow最新论文精选](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061097&idx=1&sn=bf91bebb018473348d255034d2391d30&chksm=8f5a94e5b82d1df371456b9d6c9b379bf17fcc9f0e5f05b3f49de2d99f5ef59efdca915dc2af&scene=21#wechat_redirect)  

[》热点论文TOP10](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060913&idx=1&sn=954ae3b47676171a1f9c07acfef938ca&chksm=8f5a943db82d1d2b22b62b0d784c775525e11356ca2531b16d0db91c8f930434b8599dd7eda4&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061136&idx=1&sn=367febfaa2cbec996c40c6217ff633fc&chksm=8f5a951cb82d1c0a720b3d4f95f2e4a18e7a1cb7ad498d3fa9320b57c40afa52558d5d82014f&scene=21#wechat_redirect)[精选 ‖ 国家自然科学基金资助论文](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061136&idx=1&sn=367febfaa2cbec996c40c6217ff633fc&chksm=8f5a951cb82d1c0a720b3d4f95f2e4a18e7a1cb7ad498d3fa9320b57c40afa52558d5d82014f&scene=21#wechat_redirect)[（2020年）](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061136&idx=1&sn=367febfaa2cbec996c40c6217ff633fc&chksm=8f5a951cb82d1c0a720b3d4f95f2e4a18e7a1cb7ad498d3fa9320b57c40afa52558d5d82014f&scene=21#wechat_redirect)

[》新晋 ACM Fellow: Dacheng Tao教授最新成果](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060890&idx=1&sn=523d750bde5d40a6a965dd91985b6f1a&chksm=8f5a9416b82d1d00790e7d03a358123737568c3dd4157f129c8e4a0d0ae401443d25d3f5c286&scene=21#wechat_redirect)

[》IEEE/CAA JAS热点综述集锦](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059983&idx=1&sn=341a1af3c66648c358fdd50688596b59&chksm=8f5a9083b82d1995ad2b0395a0166519f354eeb9fb8b2ff58b80b6f6f12cd4ff426f4412c07b&scene=21#wechat_redirect)

[》美国南加州大学Petros Ioannou教授：人群引导疏散的方法与挑战](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060659&idx=1&sn=a94a4488ff5ccc1ae810be6f0be92b8e&chksm=8f5a973fb82d1e29ccf2df6ae58b76e5b99ad2f924aca3345d4ca2b2fa53a2d69278d1a3c0bd&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060659&idx=1&sn=a94a4488ff5ccc1ae810be6f0be92b8e&chksm=8f5a973fb82d1e29ccf2df6ae58b76e5b99ad2f924aca3345d4ca2b2fa53a2d69278d1a3c0bd&scene=21#wechat_redirect)[美国工程院院士Dimitri P. Bertsekas: 基于特征的聚合与深度强化学习](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059710&idx=1&sn=838f6267d853bd50f8a3c949549c6a92&chksm=8f5a9372b82d1a646a9c070782840d1ebb3e903b4cb27d86eb3a8f78329b530d5fda5035ef2d&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060659&idx=1&sn=a94a4488ff5ccc1ae810be6f0be92b8e&chksm=8f5a973fb82d1e29ccf2df6ae58b76e5b99ad2f924aca3345d4ca2b2fa53a2d69278d1a3c0bd&scene=21#wechat_redirect)[美国工程院院士Tamer Basar: 遥感系统数据传输规划与解码估算策略研究](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059880&idx=1&sn=ddf91bf63c9c4aac5ed83e7858a1954d&chksm=8f5a9024b82d1932f3841282f5410165399893636542a13165d6bbc83779d0be6950085d344c&scene=21#wechat_redirect)

[》欧洲科学院院士Alessandro Astolfi教授：非线性微分代数系统的稳定性](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061073&idx=1&sn=41aeb3431b7bb4f5b27b3f3221c64576&chksm=8f5a94ddb82d1dcb888d851f50d6905ce4fdf025203ae40c88c2d9feac30211d094f0678ae7a&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061287&idx=1&sn=1d0e3cf6fee060375fafd1901a460443&chksm=8f5a95abb82d1cbd8aa390a41e0156f6a4aa99f5a5dcad20feeb35c6a6b85fc8f7775f82a84d&scene=21#wechat_redirect)[斯威本科技大学Timos Sellis教授等：医疗健康中的大数据分析](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061287&idx=1&sn=1d0e3cf6fee060375fafd1901a460443&chksm=8f5a95abb82d1cbd8aa390a41e0156f6a4aa99f5a5dcad20feeb35c6a6b85fc8f7775f82a84d&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061344&idx=1&sn=daabf31b91386bb72775635ede623669&chksm=8f5a95ecb82d1cfa17ea7b963321cdb19a4cca380058fd6f7fad498e0d8bb6404273619ea593&scene=21#wechat_redirect)[南京农业大学舒磊教授：智慧农业发展模式、关键技术、安全与隐私对策及挑战](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061344&idx=1&sn=daabf31b91386bb72775635ede623669&chksm=8f5a95ecb82d1cfa17ea7b963321cdb19a4cca380058fd6f7fad498e0d8bb6404273619ea593&scene=21#wechat_redirect)  

  

  

  

  

期

刊

动

态

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061036&idx=1&sn=9b20981ba3fa439cb1456c01f095ac59&chksm=8f5a94a0b82d1db6567d7253e77a76c37b29b383da1a84618bbff63f061cec3c0327198b4205&scene=21#wechat_redirect)[JAS首个影响因子5.129，位列Q1区](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061036&idx=1&sn=9b20981ba3fa439cb1456c01f095ac59&chksm=8f5a94a0b82d1db6567d7253e77a76c37b29b383da1a84618bbff63f061cec3c0327198b4205&scene=21#wechat_redirect)  

[》IEEE/CAA Journal of Automatica Sinica被SCI收录](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060801&idx=1&sn=79e00d373b36c61da17539f3828373c6&chksm=8f5a97cdb82d1edbf55ba53c363b4d835f4e4d80ac0d97dfcf25f3b9c9fe946e3a8c700896db&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060801&idx=1&sn=79e00d373b36c61da17539f3828373c6&chksm=8f5a97cdb82d1edbf55ba53c363b4d835f4e4d80ac0d97dfcf25f3b9c9fe946e3a8c700896db&scene=21#wechat_redirect)[JAS最新CiteScore 8.3，位居所属各领域Q1区前列](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061028&idx=1&sn=ed2e409ce394028f1f5d138b83194a62&chksm=8f5a94a8b82d1dbee81f0723b724a6132ff9cc12cef3cf9796a5189d8ba9242e3d8b965d582d&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061272&idx=1&sn=c60ce01a45c636d0fc8c3fd9edf3dc23&chksm=8f5a9594b82d1c824a86188d8d79f635812eef27858a5b2d305a036f1a25f68095f98339f563&scene=21#wechat_redirect)[JAS入选中国科技核心期刊](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061272&idx=1&sn=c60ce01a45c636d0fc8c3fd9edf3dc23&chksm=8f5a9594b82d1c824a86188d8d79f635812eef27858a5b2d305a036f1a25f68095f98339f563&scene=21#wechat_redirect)  

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061258&idx=1&sn=91ef9b2accb8711a2a4547a6b8efc297&chksm=8f5a9586b82d1c905b65e8f82edad29a45d4b4d32fa7791159642150acff7b403f033f3c05b7&scene=21#wechat_redirect)[JAS位列世界期刊影响力指数(WJCI)Q1区](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061258&idx=1&sn=91ef9b2accb8711a2a4547a6b8efc297&chksm=8f5a9586b82d1c905b65e8f82edad29a45d4b4d32fa7791159642150acff7b403f033f3c05b7&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061269&idx=1&sn=cc57d111baa4cdef0259cadfdaaa73cc&chksm=8f5a9599b82d1c8f5a65ada99fb24de7a240b7abe690a8085188e0cb26ba161313958f153204&scene=21#wechat_redirect)[2020中科院期刊分区表发布：JAS进入工程、自动化与控制学科2区](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061269&idx=1&sn=cc57d111baa4cdef0259cadfdaaa73cc&chksm=8f5a9599b82d1c8f5a65ada99fb24de7a240b7abe690a8085188e0cb26ba161313958f153204&scene=21#wechat_redirect)  

[》JAS入榜自动化学科TOP20！谷歌学术计量最新发布](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061059&idx=1&sn=367dc1319daef679ddeca3751a0b263f&chksm=8f5a94cfb82d1dd9aeff9c49610b5bb37888d4c8f8f219027cc6d4c7811c099378ebfa7b09f7&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061231&idx=1&sn=443f315404a5de4af59a45de91f77c82&chksm=8f5a9563b82d1c75cde4753953352de5dbb21c994765036e4d4eb644b7221cb6db8adac39958&scene=21#wechat_redirect)[JAS多名作者入选科睿唯安2020年度高被引科学家](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061231&idx=1&sn=443f315404a5de4af59a45de91f77c82&chksm=8f5a9563b82d1c75cde4753953352de5dbb21c994765036e4d4eb644b7221cb6db8adac39958&scene=21#wechat_redirect)  

[》JAS国内外综合他引影响因子6.688，揽获三项第1](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060772&idx=1&sn=04d12b11a3cd65107a49d4b3084c1359&chksm=8f5a97a8b82d1ebec8f01e24029d0b12fcfe3f263f47e2b9caf7e242027b43be9ee9c909174c&scene=21#wechat_redirect)

[》JAS入选中国科技期刊卓越行动计划世界一流重点建设期刊](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060747&idx=1&sn=8c45635990923c2cd41947fbfa4cee94&chksm=8f5a9787b82d1e9142d7d4db7872fa31e9fda11342045a90e2030cbef9df4d886901fb6129eb&scene=21#wechat_redirect)

[》JAS影响因子世界排名第7，自动化领域世界学术影响力Q1区唯一的中国期刊！](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060702&idx=1&sn=cd966e528c2ee4c86ebecd76b6ebde9e&chksm=8f5a9752b82d1e445e27d523e1c4054a6428bdc986515c503d1c50234c37d4ebc46cfc371b06&scene=21#wechat_redirect)  

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061252&idx=1&sn=8440915419e94993a912073a68506c12&chksm=8f5a9588b82d1c9ed306a526388da4900a71b88f56b7c78f4716730e830e1fee5f9d25d9909c&scene=21#wechat_redirect)[JAS国际影响力指数和国际他引影响因子连续三年排名第1，再获最具国际影响力期刊称号](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061252&idx=1&sn=8440915419e94993a912073a68506c12&chksm=8f5a9588b82d1c9ed306a526388da4900a71b88f56b7c78f4716730e830e1fee5f9d25d9909c&scene=21#wechat_redirect)

[》直播回放及PPT分享！‖跨模态零样本文字识别](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061365&idx=1&sn=0987e68345830fa54943129cc7127a8a&chksm=8f5a95f9b82d1cef9bb80141d4223eef506c5339eeb3c5e5c77210aa142b4b4db9373cf3078c&scene=21#wechat_redirect)  

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061339&idx=1&sn=4341ee6ff03198a0de8bf6323160f26c&chksm=8f5a95d7b82d1cc198bed315990f5f8d9018ab3ae86bb00487d1cb23b5dd2c5ef9294b961ed7&scene=21#wechat_redirect)[【当期目录】IEEE/CAA JAS第8卷第4期](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061362&idx=1&sn=cb9c6899be6d604907da0dc807e35c06&chksm=8f5a95feb82d1ce8e3b8b97cd004657d4d1bef4bdb7849a18d2f6fb72a79fba3e237a6273d31&scene=21#wechat_redirect)

[》【当期目录】IEEE/CAA JAS第8卷第3期](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061339&idx=1&sn=4341ee6ff03198a0de8bf6323160f26c&chksm=8f5a95d7b82d1cc198bed315990f5f8d9018ab3ae86bb00487d1cb23b5dd2c5ef9294b961ed7&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061318&idx=1&sn=e0edb79fa3ca51c30adb274de2f3d08f&chksm=8f5a95cab82d1cdcf3a5fa9354000b22e6527db7c257a994656fcf33c38d9ec3a77e53ef2152&scene=21#wechat_redirect)[【当期目录】IEEE/CAA JAS第8卷第2期](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061318&idx=1&sn=e0edb79fa3ca51c30adb274de2f3d08f&chksm=8f5a95cab82d1cdcf3a5fa9354000b22e6527db7c257a994656fcf33c38d9ec3a77e53ef2152&scene=21#wechat_redirect)  

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061247&idx=1&sn=c833e962142f3784e7474e0187782e24&chksm=8f5a9573b82d1c65505fbc154080cd1069ea1e23df2365e0ce65f019e10ac5ce0c3c26c213e5&scene=21#wechat_redirect)[【当期目录】IEEE/CAA JAS第8卷第1期](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061247&idx=1&sn=c833e962142f3784e7474e0187782e24&chksm=8f5a9573b82d1c65505fbc154080cd1069ea1e23df2365e0ce65f019e10ac5ce0c3c26c213e5&scene=21#wechat_redirect)

学

术

报

告

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061227&idx=1&sn=0000e953cba2c6b7c7801c108995f8cd&chksm=8f5a9567b82d1c7193f3dcb80bc4b3a421aae58fef277d56d19ad4d9589b506c07153d16c8fd&scene=21#wechat_redirect)[2020年研究前沿及热度指数最新发布](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061227&idx=1&sn=0000e953cba2c6b7c7801c108995f8cd&chksm=8f5a9567b82d1c7193f3dcb80bc4b3a421aae58fef277d56d19ad4d9589b506c07153d16c8fd&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061180&idx=1&sn=a0b32e8bddc5cc852ddaecbb53450127&chksm=8f5a9530b82d1c26335251b9a2c5292f1a9eef8a41e991a969238b56c46ebf002939a600b431&scene=21#wechat_redirect)[模式识别学科发展报告](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061180&idx=1&sn=a0b32e8bddc5cc852ddaecbb53450127&chksm=8f5a9530b82d1c26335251b9a2c5292f1a9eef8a41e991a969238b56c46ebf002939a600b431&scene=21#wechat_redirect)

[》『最新发布』2019年数学、计算机科学与工程学领域热点和新兴前沿](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060757&idx=1&sn=5103bb990853a22ae176517e66c8c233&chksm=8f5a9799b82d1e8f887ad94c952119d719d3ea65d7ae762fa4e0a203cf09c40f385dacd9b00c&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060901&idx=1&sn=a8a4e31f26852b586004673dc9f1e6f3&chksm=8f5a9429b82d1d3fdcd8edbc9ebc1e4f436bd32ac990028909a916a04f391d219647798d732c&scene=21#wechat_redirect)[美国工程院院士Dimitri P. Bertsekas: 强化学习及最优控制(71页PPT)](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060901&idx=1&sn=a8a4e31f26852b586004673dc9f1e6f3&chksm=8f5a9429b82d1d3fdcd8edbc9ebc1e4f436bd32ac990028909a916a04f391d219647798d732c&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060772&idx=2&sn=44428a07b30332cf474669b87da789c1&chksm=8f5a97a8b82d1ebeafd5f1b99ce36369ac72e07375244871b5a592916a9852aad4e6ee87dc59&scene=21#wechat_redirect)[2019年度全球工程前沿研究报告](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060772&idx=2&sn=44428a07b30332cf474669b87da789c1&chksm=8f5a97a8b82d1ebeafd5f1b99ce36369ac72e07375244871b5a592916a9852aad4e6ee87dc59&scene=21#wechat_redirect)  

[》MIT系列课程：深度生成模型（75页PPT）](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060252&idx=1&sn=1b9a96dc2d6bceaf826e33ef6bf5f1bd&chksm=8f5a9190b82d18862e3010018153521699dc5ef8e7c27d42301ab3415a277a3a403a4810cc9c&scene=21#wechat_redirect)

[》斯坦福全球AI报告](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060936&idx=1&sn=f2c55ac0119a4024fe064a40f8f870c6&chksm=8f5a9444b82d1d5285b3cf72d3d37f572a4d3ed9a32c47920f7de5dcb96ac0c6aae6b65a90f6&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061172&idx=1&sn=ea2d7be91341cc5bca48da5bb19304c8&chksm=8f5a9538b82d1c2e11669f9bf2595261decbaa7f9e849f9bfae9c2269d06fe47a3d06e3e4093&scene=21#wechat_redirect)[剑桥大学2020《AI全景报告》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061172&idx=1&sn=ea2d7be91341cc5bca48da5bb19304c8&chksm=8f5a9538b82d1c2e11669f9bf2595261decbaa7f9e849f9bfae9c2269d06fe47a3d06e3e4093&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061321&idx=1&sn=5dcb154ee46a81b1c2fd6417e33a3e52&chksm=8f5a95c5b82d1cd30fd1fc0bb23f9c5e4c4b705665bfc9f6c2d3ba06eeaa6c4c8ff884d09d91&scene=21#wechat_redirect)[《人工智能发展报告2020》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061321&idx=1&sn=5dcb154ee46a81b1c2fd6417e33a3e52&chksm=8f5a95c5b82d1cd30fd1fc0bb23f9c5e4c4b705665bfc9f6c2d3ba06eeaa6c4c8ff884d09d91&scene=21#wechat_redirect)

写

作

贴

士

[》MIT计算机大牛：如何写好一篇顶会论文](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059747&idx=1&sn=33f61a0f00e94325590928233dc3e3bc&chksm=8f5a93afb82d1ab923abb193965332a50749a44076864674d6312ef63a8000ef9cc28c804247&scene=21#wechat_redirect)  

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060873&idx=1&sn=9f04ab061f889d71b656b19042721679&chksm=8f5a9405b82d1d13dc75f8d03e0fd4354141c5956c66481d07c823ed435627f3cbed13a40972&scene=21#wechat_redirect)[人工智能领域：如何做优秀研究并写高水平论文？](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060873&idx=1&sn=9f04ab061f889d71b656b19042721679&chksm=8f5a9405b82d1d13dc75f8d03e0fd4354141c5956c66481d07c823ed435627f3cbed13a40972&scene=21#wechat_redirect)

[》美国中央华盛顿大学傅平教授：如何撰写高质量期刊文章？](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061000&idx=1&sn=7a5be5181a8c8ef1ff0fbf08aa9f77f8&chksm=8f5a9484b82d1d92d977447c25c48c0b6fcc4951c871845a96b27c7d826264b8be95de85f0e9&scene=21#wechat_redirect)  

[》清华大学吴子牛教授：浅谈论文写作（92页PPT）](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060004&idx=1&sn=f63f4c8d5588e80ce2fdbc0b5ac29d36&chksm=8f5a90a8b82d19bed809f9e141b67d62f5dab3c3db4e14aa18d8210f7a2fed8d27186eba1611&scene=21#wechat_redirect)  

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060933&idx=1&sn=b4b8d82c15e8d8294567fac49ab7ad15&chksm=8f5a9449b82d1d5f0a9d394531c8fd638506a73f14c35efb7da9a3ecde63bf9be7a7dfb1e9e7&scene=21#wechat_redirect)[复旦大学张军平教授：论文选题与写作](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060933&idx=1&sn=b4b8d82c15e8d8294567fac49ab7ad15&chksm=8f5a9449b82d1d5f0a9d394531c8fd638506a73f14c35efb7da9a3ecde63bf9be7a7dfb1e9e7&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061123&idx=1&sn=36b0ebafa28be87d6db00763b6f2cb82&chksm=8f5a950fb82d1c196b42548f24ff421233879556e2c10e1063017de3da441f845f92bfd1c0b3&scene=21#wechat_redirect)[收藏！SCI论文Introduction常用句式超全总结](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061123&idx=1&sn=36b0ebafa28be87d6db00763b6f2cb82&chksm=8f5a950fb82d1c196b42548f24ff421233879556e2c10e1063017de3da441f845f92bfd1c0b3&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061158&idx=1&sn=5f8c47a2fee4f4e54f37cbdfe8d01b45&chksm=8f5a952ab82d1c3c30dd5913ca5952526844e7c88aa50f86890a817f04aab4fa20477770f7da&scene=21#wechat_redirect)[科研必备！盘点常用文献管理工具](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061158&idx=1&sn=5f8c47a2fee4f4e54f37cbdfe8d01b45&chksm=8f5a952ab82d1c3c30dd5913ca5952526844e7c88aa50f86890a817f04aab4fa20477770f7da&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649060933&idx=1&sn=b4b8d82c15e8d8294567fac49ab7ad15&chksm=8f5a9449b82d1d5f0a9d394531c8fd638506a73f14c35efb7da9a3ecde63bf9be7a7dfb1e9e7&scene=21#wechat_redirect)[【论文写作】如何撰写一篇优秀的研究论文？这一份68页PPT告诉你](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059699&idx=1&sn=8483d237b5c05b29dd04f05cc373f6f5&chksm=8f5a937fb82d1a6939669c48fcbf9cca546b90b89b25822c18bd93fb02a94b269447a6b12724&scene=21#wechat_redirect)

[》高质量国基金申请书的必备要素](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061304&idx=1&sn=694eed231e2b0f2b1f4ec4dfaf1bb5b0&chksm=8f5a95b4b82d1ca25353ac976e0f6125deb775b55a08c203c68b59839f9699bfd873c898abb7&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061334&idx=1&sn=18a435cf687a10ee85e50a3a9e3f2a0f&chksm=8f5a95dab82d1cccda622d7b63fc78f7d4bf0db15f683cb4b0814e3191c11d5111f6b48ec43f&scene=21#wechat_redirect)[收藏！论文的基本框架结构(集成篇)](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061334&idx=1&sn=18a435cf687a10ee85e50a3a9e3f2a0f&chksm=8f5a95dab82d1cccda622d7b63fc78f7d4bf0db15f683cb4b0814e3191c11d5111f6b48ec43f&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649059699&idx=1&sn=8483d237b5c05b29dd04f05cc373f6f5&chksm=8f5a937fb82d1a6939669c48fcbf9cca546b90b89b25822c18bd93fb02a94b269447a6b12724&scene=21#wechat_redirect)

  

[![](https://mmbiz.qpic.cn/mmbiz_jpg/cHanbNh4sribKej19kicQGq4zRML4w9uwqZF2RIjQE84uBRfXo8Bu33lnKWx2GLjNO6OPgquTcxBKiahX67SvZLKQ/640 "期刊介绍-英文.jpg")](http://www.ieee-jas.net)

**网站**：

[http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6570654](http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6570654)

[www.ieee-jas.n](http://www.ieee-jas.org/)et

**微信**：JAS自动化学报英文版

**Blog**: [http://blog.sciencenet.cn/?3291369](http://blog.sciencenet.cn/?3291369)

**Twitter**: IEEE/CAA JAS

**Facebook**: Ieee/Caa Jas

**投稿**：[https://mc03.manuscriptcentral.com/ieee-jas](https://mc03.manuscriptcentral.com/ieee-jas)

**Email:** jas@ia.ac.cn

**Tel:** 010-82544459