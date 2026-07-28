# 基于EEG的癫痫自动检测: 综述与展望

原创 自动化学报 自动化学报 2022-02-11 17:29 北京

> 原文地址: [https://mp.weixin.qq.com/s/aFH0NMnYzkMQjaGn171nDA](https://mp.weixin.qq.com/s/aFH0NMnYzkMQjaGn171nDA)

点击蓝字

关注我们

  

推荐一篇**癫痫自动检测**方面的文章，希望您能喜欢！欢迎已经优先出版的作者给小编提供资料（请您向编辑部索要推送模板aaswkfb@ia.ac.cn），及时发布在我们的公众号上宣传。

  

**引用本文**

彭睿旻, 江军, 匡光涛, 杜浩, 伍冬睿, 邵剑波. 基于EEG的癫痫自动检测: 综述与展望. 自动化学报, 2022, 48(2): 335−350 doi: 10.16383/j.aas.c200745      

(Peng Rui-Min, Jiang Jun, Kuang Guang-Tao, Du Hao, Wu Dong-Rui, Shao Jian-Bo. EEG-based automatic epilepsy detection: Review and outlook. Acta Automatica Sinica, 2022, 48(2): 335−350 doi: 10.16383/j.aas.c200745)

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200745?viewType=HTML

  

**文章简介**

  

**关键词**

  

癫痫, 头皮脑电, 特征提取, 分类

  

**摘   要**

  

癫痫是一种由脑部神经元阵发性异常超同步电活动导致的慢性非传染性疾病, 也是全球最常见的神经系统疾病之一. 基于EEG的癫痫自动检测是指通过机器学习、分布检验、相关性分析和时频分析等数据分析方法, 对癫痫发作阶段的EEG信号进行自动识别的研究问题, 能够为癫痫诊疗与评估提供客观参考依据, 从而减轻医生工作负担并提高治疗效率, 因此具有十分重要的理论意义与实际应用价值. 本文详细介绍基于EEG的癫痫自动识别整体框架, 以及对应于各个步骤所涉及的典型方法. 针对核心模块, 即特征提取与分类器选择, 进行方法总结与理论解释. 最后, 对癫痫自动检测研究领域的未来研究方向进行展望.

  

**引   言**

  

癫痫 (Epilepsy) 是影响全年龄人群的一种由脑部神经元阵发性异常超同步电活动导致的慢性非传染性疾病, 也是全球最常见的神经系统疾病之一. 由于大脑异常电活动的起始位置和传播方式存在差异, 癫痫临床表现呈现多样化、复杂化的特点. 反复癫痫发作会对患者的精神与认知功能造成持续性的负面影响, 甚至危及生命. 因此, 癫痫诊断和治疗的研究具有非常重要的临床意义.

  

1964年, 国际抗癫痫联盟首次提出了癫痫发作分类方案, 并于1969年对其增订. 该方案指出, 根据发作时癫痫患者的脑电图表现, 可将癫痫疾病的发作定义成五类亚型, 并明确了发作状态 (Ictal)、发作间状态 (Inter-ictal) 的头皮脑电图特征和患者的临床表现具有同等诊断意义.

  

脑电图 (Electroenc ephalo gram, EEG) 是放置于头皮特定位置的电极采集获得的大脑内同步神经元活动产生的微伏级电信号. EEG作为最常用、最经济的非侵入式脑电波检测手段, 已有70余年的研究历史, 是癫痫相关疾病诊断最有效的方法, 例如对癫痫发病进行识别、预测和病灶定位等.

  

为了克服传统诊断手段的局限性, 提高医疗效率, 基于EEG的癫痫自动检测已成为行业研究热点. 癫痫自动检测可细分为两个任务: 癫痫发作事件检测 (Seizure event detection, SED) 和癫痫发作检测 (Seizure onset detection, SOD). SED目的是从多个EEG中尽可能准确地识别癫痫发作信号, SOD目的是在连续脑电监测过程中, 当患者癫痫发作时, 系统能以尽可能短的延时 (Latency) 识别发作的开始, 并描述持续时间.

  

临床上脑电的识读与分析主要依赖医疗工作者的视觉检测与手工标注, 这也是目前基于EEG的癫痫检测金标准. 但是癫痫的发作时间和时长具有不确定性, 从海量的脑电数据中读取发病期数据从而分析病情工作繁琐, 且极大依赖检查者主观判断. 因此, 为了克服传统诊断手段的局限性、提高医疗效率, 从1982年Gotman提出基于EEG的癫痫自动识别方法起, 已积累了大量SED相关研究.

  

同时, 在癫痫治疗过程中, 对抗癫痫药物治疗无效的患者需要采取手术治疗, 需要准确识别手术切除的致痫灶. 致痫灶分为始发区、激惹灶、致痫病变区与功能缺失区, 其中始发区是最有效的标志区, 被看作是致痫灶的替代指标. 临床上可通过在癫痫起始发作时, 使用不同类型的示踪剂来判断始发区位置. SOD也因此具有重要的临床意义. Grewal和Gotman设计了一种可根据用户自身数据调节参数的癫痫发作监测系统, 使得系统的敏感度达到89.7 %, 平均时延17.1 s. Kharbouch等对用户敏感方法进行了特征提取的改进并使得系统在80 % 的被试数据上敏感度达到100 %, 时延控制在3.25 ~ 18.5 s. Sorensen等则提出了一种基于匹配追踪算法的SOD方法使得分类敏感度达到78 % ~100 %, 延时控制在5 ~ 18 s. 近年来, 高采样率设备逐渐普及, 研究者们发现80Hz80Hz以上的癫痫脑电中存在的高频振荡节律 (High frequency oscillation) 也可作为一种新的始发区指示标志.

  

无论SED还是SOD, 癫痫自动检测的核心是对癫痫波的检测. 1972年, Stevens等首次尝试从长时程EEG信号中提取痫样棘波. 此后, 根据痫样棘波的特性, 人们提出了基于形态学、信号相关性、子带分解、特征工程等的棘波检测算法, 对癫痫脑电信号进行自动检测. 近年来, 随着人工智能的不断发展, 特别是机器学习与数据挖掘领域成果的不断积累, 基于机器学习的癫痫自动检测方案大量涌现. 这类能够从数据中学习分类规则, 并能随着数据的扩充而提高性能的自动化算法, 是极具潜力的癫痫自动检测解决方案. 该研究课题也因其理论背景和应用价值, 引起了来自生物、医学、认知和计算机科学等众多领域研究者的广泛兴趣.

  

癫痫自动检测的核心问题可以归纳为特征提取和分类器设计两个子问题. 其中, 深度学习通过神经网络将特征提取与分类器设计融为一体. 本文将从特征提取和分类器选择的角度比较癫痫自动检测中各个方法的优缺点, 并结合该领域目前所面临的挑战, 对未来研究方向进行展望, 以期为该领域研究提供有益参考.

  

本文的主要贡献如下:

  

1) 对基于EEG的癫痫自动检测算法流程进行了详细阐述, 总结了各个模块中的典型方法和研究进展, 针对核心研究问题给出了详细的说明.

  

2) 全面介绍了时域、频域、时频域和非线性分析等四类常见特征.

  

3) 对癫痫检测中的分类模型做了详细归纳整理.

  

4) 对癫痫自动检测领域未来研究方向给出了建议与展望.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH4424KzokdHHbdQbcMLljc4tSR0ftneUYSqVN6G4wgK526QDibCmjkibqAe6vg6fIvDTc1nKib5CHpLYg/640?wx_fmt=jpeg)

基于EEG的癫痫自动检测流程

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4trcVpjX5mnPvyds1VJom1pKQ0gicoQZTR9ib8Ps373zb4SXlc6eOKCGCQ/640?wx_fmt=png)

**彭睿旻**

华中科技大学人工智能与自动化学院博士研究生. 主要研究方向为机器学习, 脑机接口. 

E-mail: rmpeng2019@hust.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4tnZhuggu0JiaY3P0dcaicmyqSzMJGBW8JTl8r30icF9vsXibyMdS2sicGjsw/640?wx_fmt=png)

**江　军**

华中科技大学同济医学院附属武汉儿童医院 (武汉市妇幼保健院) 神经电生理室主任. 主要研究方向为神经电生理, 癫痫, 抽动障碍. 

E-mail: jiangjunzm@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4tDnVAJ7dGlFibZk9yzXABFbUibwCGy6fs8S5P8MiauQbSryeia4Gn40HxbQ/640?wx_fmt=png)

**匡光涛**

华中科技大学同济医学院附属武汉儿童医院 (武汉市妇幼保健院) 神经电生理室技师. 主要研究方向为脑机接口, 脑电图定量分析.

E-mail: jacksondear@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4touIrggbQ5KBg26Y17t2CtxRY3ORhz6zibNrWQ8qWibiaAEibFQYFXOsXVQ/640?wx_fmt=png)

**杜　浩**

华中科技大学同济医学院附属武汉儿童医院 (武汉市妇幼保健院) 神经外科主任. 主要研究方向为颅脑损伤脑肿瘤, 先天性畸形, 脑血管病, 癫痫及脑瘫等方面外科治疗.

E-mail: duhaodt@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH4424KzokdHHbdQbcMLljc4t6jibkBLc4mFpTr6coia1NxToXoRTibY6ztONrdicDOJlhdZy76FKn5567w/640?wx_fmt=jpeg)

**伍冬睿**

华中科技大学人工智能与自动化学院教授. 主要研究方向为机器学习, 脑机接口, 计算智能, 情感计算. 本文通信作者. 

E-mail: drwu@hust.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4tUv8wHhofJeeKHo7yDfVkNia9T95BXCmetRJhUUppibm1SZ5bU6lvic92w/640?wx_fmt=png)

**邵剑波**

教授, 二级主任医师, 医学博士, 国务院特殊津贴专家. 现任华中科技大学同济医学院附属武汉儿童医院 (武汉市妇幼保健院) 院长, 江汉大学儿科临床学院院长, 医学影像中心主任. 中华医学会放射学分会儿科学组副组长, 中国医师协会放射学分会儿科组副组长. 湖北省放射学分会副主任委员, 武汉市放射学分会副主任委员. 主要研究方向小儿(含胎儿) 临床放射, CT, MRI 诊断. 

E-mail: shaojb2002@sina.com

  

  

**相关文章**

  

**（请向上滑动阅读）**

  

\[1\]  张宇, 包研科, 邵良杉, 刘威. 面向分布式数据流大数据分类的多变量决策树\[J\]. 自动化学报, 2018, 44(6): 1115-1127. doi: 10.16383/j.aas.2017.c160809

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160809?viewType=HTML

  

\[2\]  顾晓清, 蒋亦樟, 王士同. 用于不平衡数据分类的0阶TSK型模糊系统\[J\]. 自动化学报, 2017, 43(10): 1773-1788. doi: 10.16383/j.aas.2017.c160200

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160200?viewType=HTML

  

\[3\]  张毅, 尹春林, 蔡军, 罗久飞. Bagging RCSP脑电特征提取算法\[J\]. 自动化学报, 2017, 43(11): 2044-2050. doi: 10.16383/j.aas.2017.c160094

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160094?viewType=HTML

  

\[4\]  刘明, 李国军, 郝华青, 侯增广, 刘秀玲. 基于卷积神经网络的T波形态分类\[J\]. 自动化学报, 2016, 42(9): 1339-1346. doi: 10.16383/j.aas.2016.c150817

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150817?viewType=HTML

  

\[5\]  张靖, 周明全, 张雨禾, 耿国华. 基于马尔科夫随机场的散乱点云全局特征提取\[J\]. 自动化学报, 2016, 42(7): 1090-1099. doi: 10.16383/j.aas.2016.c150627

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150627?viewType=HTML

  

\[6\]  唐朝辉, 朱清新, 洪朝群, 祝峰. 基于自编码器及超图学习的多标签特征提取\[J\]. 自动化学报, 2016, 42(7): 1014-1021. doi: 10.16383/j.aas.2016.c150736

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150736?viewType=HTML

  

\[7\]  孟明, 朱俊青, 佘青山, 马玉良, 罗志增. 多类运动想象脑电信号的两级特征提取方法\[J\]. 自动化学报, 2016, 42(12): 1915-1922. doi: 10.16383/j.aas.2016.c160122

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c160122?viewType=HTML

  

\[8\]  王金甲, 陈春. 分层向量自回归的多通道脑电信号的特征提取研究\[J\]. 自动化学报, 2016, 42(8): 1215-1226. doi: 10.16383/j.aas.2016.c150461

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150461?viewType=HTML

  

\[9\]  倪鼎, 马洪兵. 基于近邻协同的高光谱图像谱-空联合分类\[J\]. 自动化学报, 2015, 41(2): 273-284. doi: 10.16383/j.aas.2015.c140043

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2015.c140043?viewType=HTML

  

\[10\]  顾鑫, 王士同, 许敏. 基于多源的跨领域数据分类快速新算法\[J\]. 自动化学报, 2014, 40(3): 531-547. doi: 10.3724/SP.J.1004.2014.00531

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00531?viewType=HTML

  

\[11\]  张景祥, 王士同, 邓赵红, 蒋亦樟, 李奕. 融合异构特征的子空间迁移学习算法\[J\]. 自动化学报, 2014, 40(2): 236-246. doi: 10.3724/SP.J.1004.2014.00236

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00236?viewType=HTML

  

\[12\]  朱群, 张玉红, 胡学钢, 李培培. 一种基于双层窗口的概念漂移数据流分类算法\[J\]. 自动化学报, 2011, 37(9): 1077-1084. doi: 10.3724/SP.J.1004.2011.01077

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01077?viewType=HTML

  

\[13\]  张战成, 王士同, 钟富礼. 协作式整体和局部的分类机\[J\]. 自动化学报, 2011, 37(10): 1256-1263. doi: 10.3724/SP.J.1004.2011.01256

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01256?viewType=HTML

  

\[14\]  林玉娥, 顾国昌, 刘海波, 沈晶, 赵靖. 适用于小样本问题的具有类内保持的正交特征提取算法\[J\]. 自动化学报, 2010, 36(5): 644-649. doi: 10.3724/SP.J.1004.2010.00644

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00644?viewType=HTML

  

\[15\]  詹宇斌, 殷建平, 刘新旺. 基于大间距准则和图像矩阵双向投影的人脸特征提取方法\[J\]. 自动化学报, 2010, 36(12): 1645-1654. doi: 10.3724/SP.J.1004.2010.01645

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.01645?viewType=HTML

  

\[16\]  高全学, 谢德燕, 徐辉, 李远征, 高西全. 融合局部结构和差异信息的监督特征提取算法\[J\]. 自动化学报, 2010, 36(8): 1107-1114. doi: 10.3724/SP.J.1004.2010.01107

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.01107?viewType=HTML

  

\[17\]  胡包钢, 王泳. 关于互信息准则在分类(包括拒识类别)问题中的应用\[J\]. 自动化学报, 2008, 34(11): 1396-1403. doi: 10.3724/SP.J.1004.2008.01396

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2008.01396?viewType=HTML

  

\[18\]  徐科, 李文峰, 杨朝霖. 基于幅值谱与不变矩的特征提取方法及应用\[J\]. 自动化学报, 2006, 32(3): 470-474.

http://www.aas.net.cn/cn/article/id/15838?viewType=HTML

  

\[19\]  杜恩祥, 李科杰. 基于多重分形和小波变换的声目标信号特征提取\[J\]. 自动化学报, 2004, 30(5): 742-746.

http://www.aas.net.cn/cn/article/id/16207?viewType=HTML

  

\[20\]  谭枫, 曾小明. 基于类别可分离性的遥感图象特征提取方法\[J\]. 自动化学报, 1990, 16(2): 174-178.

http://www.aas.net.cn/cn/article/id/14808?viewType=HTML

  

  

**期刊目录**

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

**热点文章**

[《自动化学报》2021年热点文章回顾](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072577&idx=1&sn=4e6be077d7371c7d29d9a371d8defe19&chksm=8131e20cb6466b1aec2f3b8b1063d3be11725ca9a0c15785c3b42a638170e732acd0d8d345e0&scene=21#wechat_redirect)

[国家自然科学基金论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960308&idx=1&sn=1634c999f22588333537f13393403f9c&chksm=f2942b35c5e3a2232e86b51c2b7c8f37a4d3d7f858d370d76d5afd00567d7da6e9543476d120&scene=21#wechat_redirect)

[国家重点研发计划论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960255&idx=1&sn=f48435928fd924134cb72014860b9d00&chksm=f2942b7ec5e3a26869da68a1419b3b40ca1e6cb98abf2e380d78a49ffb99c85991d76cc346b0&scene=21#wechat_redirect)

[中国科学院自动化研究所高层次人才招聘启事 | 长期有效](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959451&idx=1&sn=657b7e4aeeaa88114d5189641c5409dc&chksm=f294285ac5e3a14cd230a2b9678c32ba9bf92e8ffc9d61d506c5ffea2df793456dd37c2c6fb1&scene=21#wechat_redirect)

  

**期刊动态**

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072581&idx=1&sn=0015285a83a86dcc192171d7086a4411&chksm=8131e208b6466b1edc1882937de90bdd6ad081ae2635c48648c488d0e61c3adba04bd21f5e50&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072451&idx=1&sn=4ec5101a4eef20c2fa0fe7303813f2b0&chksm=8131ed8eb6466498039e33d8fb1b621366c7fb8470e2ad9e46f875f06301ef8bc3691b903e96&scene=21#wechat_redirect)

[《自动化学报》发表文章入选第六届中国科协优秀科技论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960313&idx=1&sn=01b5a9defe9664ba4a0b8d7322e115d0&chksm=f2942b38c5e3a22e2c57edaa8667a27368ccfb595e6a372dfa85ff2a61329788870d77957a2f&scene=21#wechat_redirect)

[自动化学报（英文版）首届青年编委招募](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959475&idx=1&sn=e28ce2b8fa27ee4fb6a5c0c17e25dd25&chksm=f2942872c5e3a16438dbf45fd8091b643cd2bf50f0bab7092a6c5103d06cd4a16ebceb4db40a&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4tprF9Qrccagk9dXuPLD4icWYVUVlFCMxEXn45XCDtXtgtpZtdo1SpXyA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH4424KzokdHHbdQbcMLljc4tnEa6z3r6sff6ISUXUnuOib2ibPeicj9KGck31YFaIpOABonnIhFL7YTGg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH4424KzokdHHbdQbcMLljc4tlBjuuoE4B2FI3EDrfYv7hHHmuYtmPz6XaIiawYNS2EQbWjwrWKPbPbQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH4424KzokdHHbdQbcMLljc4td1n9lfggQ9tT1EL5jJgkukcduViccZ9PPDt1bq2uY3w03NDhibVEj9nA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH4424KzokdHHbdQbcMLljc4tZhFTtr8rgkicjHxhv3Do2qfDB1yGdbVNogGcyPuyhZxWnoWc1u8plMA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH4424KzokdHHbdQbcMLljc4ty1SvVpf2vgCFtaHhNh4x0t9WC4mrCvFb18yum3ypm4cY3MPib9OREtw/640?wx_fmt=gif)

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

  

**↓ 点击下方 阅读原文 了解更多**