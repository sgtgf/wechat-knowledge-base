# 深度学习巨头Yann Lecun 中科院自动化所座谈及清华大学讲座干货速递（二）

原创 张重阳 自动化学报 2017-03-27 10:05 北京

> 原文地址: [https://mp.weixin.qq.com/s/wvgr9gm027UlppY5T7-iZg](https://mp.weixin.qq.com/s/wvgr9gm027UlppY5T7-iZg)

下面 我们分享Lecun关于无监督学习和强化学习的观点

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbMvQhNG7yOnElsaUdepbaJFrmicibtSnvPEeThwia0tibY2DwR3X9epqO2A/0?wx_fmt=jpeg)实现通用人工智能一个关键的问题就是要让计算机拥有常识，比如当东西太多我们就会知道行李箱装不下（笔者注：这是一个自然推理的过程，就好比天冷了要加衣服一样），我们拥有常识因为我们知道这个世界如何运转，那如何让机器也学习到这些呢？

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbCkuzbEqHIbtYuUldO78rLRmE1UBzwW0cBuoJs9JWEuFKz6QgeYKruA/0?wx_fmt=jpeg)常识就是预测的能力，比如说当Lecun照片的某一部分被遮挡，我们可以推理出被遮挡的部分，对于文本中省略的词语，我们也可以补足（这难道是传说中的完形填空？）。接着，Lecun抛出了自己的主打概念“Predict Learning（预测学习）”，也就是大多数人认为的无监督学习。（笔者注：个人认为预测学习的提法更加精准，预测的内涵就是推理）

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdbq7Rvu7PL1vq2kHyJgfN3Kbx7jvH5YPNh9iaozLhIRGRwPGRcb6yHl3w/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbR0iamFGp9X8kxH7u0QEmf6KVT8ickibUSqCibwk5T0tCbjtK1Dk3zfFJdg/0?wx_fmt=jpeg)经典比喻：强化学习：樱桃，监督学习：蛋糕上的糖霜；非监督学习：蛋糕，

在Lecun看来，非监督学习是主体。

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbFicREYulfWlauzY4uFAnsn0qibzjzq9PrC2wGQYlKyRjuogWomk85vpQ/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbPFY3E6Z816X60VmSRWBSrXOPeiboHQ9xwc4rYUkJnRGlr335uPwwRoA/0?wx_fmt=jpeg)强化学习玩星际争霸

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdbx1p8Sdv4bvofFiawxqs9VMe1Tku4FuenTlQctzvwQBbHKUtXEv2B7Gg/0?wx_fmt=jpeg)Dyna：强化学习泰斗Sutton所提出的一个框架

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb9Ew6qRLBVjyNjUgwxO5UPPjd6gSJtbDenK2KpsUszYXA6c51Z9Xm9g/0?wx_fmt=jpeg)古典的基于模型最优化控制

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbunkBM3tcxvAra87W0BNDrcUWO7SVOvicOzibQrVicvnTqbET4s8NavX7g/0?wx_fmt=jpeg)人工智能的一个架构：智能体感知世界进行推理、规划以获得最高奖赏

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbfDppamG5nKtREITjhF20tYYHlXnD0G0PDaHqaRhaib3ryQne5qOeJrg/0?wx_fmt=jpeg)预测+规划=推理

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdblWibV7UL3ESFyekXlk6vic5NLWFcicS43hRssNHiceGypWrHia5ibE1T8pkA/0?wx_fmt=jpeg)基于模型的强化学习，为了做好规划，我们需要对世界进行建模仿真

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbqDJ1viaNj3oulNkUg0M5OxRGb9vJHuqfBJfSEJjdn44tkD04hjxg9FQ/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbvJEia8aMUq26icNS99XOuhDWP7XArhIo1Qd37IEQpYiaiauQIKLeMzxWvw/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbuXNsWxgqWDluKVB2QW7xBD3WInIDNChBfzbXRSLcRvZnPiazZH7FBqQ/0?wx_fmt=jpeg)预测砖块掉落的轨迹

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbdicZXicjrs3iazXqqNgdpH8uE4YMumxZ4UqJDS0k1r7zHeB3L9TtRaV5w/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbAbcLnGGibr0ZBDq7ZWdoibOkYLyGQEVZjGR8Sp1DicEH9QXc5vkSydRgA/0?wx_fmt=jpeg)通过记忆模块增强神经网络

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb4MptERhl7AQTEpAKQgPGHfPiazyOxmELYVC9vuFFicf5ERLxhaBeGY8Q/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb85G2RbDv47bW0Wf2Rib0icpyamtquoK3YrN6fGnVak5dX8elXPCGuf0w/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbIuLPncSpzMUAreKeYd3wnFYBRceibb5DqjiaDL8m1nN41hepBvP8fNOA/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb9etZ0h6xpD6zgC0ZLbgd8hUdwDJEcBcia3pbm40QU8reGAP9N3picbTQ/0?wx_fmt=jpeg)  
![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbIuLPncSpzMUAreKeYd3wnFYBRceibb5DqjiaDL8m1nN41hepBvP8fNOA/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbJzbScdia5Bp0qFS3nHQIN6UMq3WOOW0Wb0icxNBv8fPchyR9ZHKv7KQQ/0?wx_fmt=jpeg)

基于能量的无监督学习：学习一个能量函数，该函数在数据流形上的值比较低，其他地方的值较高

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbOswSPc6cmTuTE2SIdiat3HdKr96NxdZppia1OibKuZqcibHz3nuXpASgTA/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb4R6URU93kh2Hpksxuq4vJVOyeic08ibBFKUN2eHzznL5YMnQP38ST6wg/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb8Satm3Eho0Oz5j9VvSYua1icnxCSZiasIwSg8uACzlCLx7pVicfOWon3A/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbSu1B4SQJACpd8h40yyKF0YDFlsh5nYllicS8Z8eIlbH62eRuojMDyNQ/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdbg7LiavcEVAdfLNc60OnZCDtTLQMZrVX5md06uQQNRlELeV1NiaXQ62Sg/0?wx_fmt=jpeg)目前火热的对抗训练闪亮登场

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbsZ1Qz30ulmc57oy71fBZVHunuiamtN7xBVobqxD5F6loict84dNBJt6w/0?wx_fmt=jpeg)很多情况下预测的结果具有不确定性，但是它们会在同一个数据流形上

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbPtwFmMAQCO0CfsJNlxDY65nJ2icMsND6ERe2ibSCPuDNXKia0o5SfHLjQ/0?wx_fmt=jpeg)对抗训练是在不确定条件下进行预测的关键，Lecun再一次高度赞扬了GAN

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbpVdkI4juWZB47ofniaKkJTicrdYHcHicgKTR2WhT2g2WyxruNsTj16AeQ/0?wx_fmt=jpeg)基于GAN生成的逼真度很高的卧室图片

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbRZU4a7cSI7ULVFRJ0ffKay3OLvOdZYFZ4adXbU6ZHquFeZp1hiamfoQ/0?wx_fmt=jpeg)生成的卡通头像

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbqCEVzeGK4RG2tEBAG5U5X5EqhO42YcoCHrMR1fJxahbibdxKGugm2tQ/0?wx_fmt=jpeg)有意思的图像算数：眼镜男-普通男+普通女=眼镜女

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbfPCHcjaYic3dxEAClzDpLibstkzVs1ZwoP1PFiaMV0UOXQyZibqTuAw5VQ/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbPAQLypyVUwhexeZjkSHO67PDseTSumO1AMkVPTknsLE8N6BYvyXw9w/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0Qdb7QpGhibDYibfwD5ZicQnBicn1dibdhhibqicgYZvsw8q8ZyJHB4F1rOOIBiaPA/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbRxqEsX1f5y1TiaPle6KADicNu3pH7Gnib91ZaEWcj9eRiaKpAURLibEzd0A/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbpvgXd24e5NyoFTI84G9EKEBDKnDBAgPEbMdZTYAHL4biaVeevKzBnSA/0?wx_fmt=jpeg)EBGAN生成的自然图像，仔细看可以发现他们并不是真实的自然物体，生成的狗头有点像毕加索画的风格，抽象派

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbDxX3VDAOpZVia1sohDOrbRJ0bvXUVbsv0ODSf6Wx502fRJh4pTo9mUQ/0?wx_fmt=jpeg)多尺度的卷积神经网络用于视频预测

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbYZRTGgFIO4XuDe7kL84bw78Av9QMPL6YNlW0ibHIP7ksHXiaQFDyLNfw/0?wx_fmt=jpeg)![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46NVFcFajug6uEeLUZL0QdbY1z5AOW5Ap72oOGUN6A3OTGqPiaibUmSxVtyAmJmYz41icBHO4nFjkOQQ/0?wx_fmt=jpeg)讲座结束，各位专家们上台合影

[深度学习巨头Yann Lecun 中科院自动化所座谈及清华大学讲座干货速递（一）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063176&idx=1&sn=a40df238e6f0b45d14ef0eb2cbeaa669&chksm=8131c9c5b64640d3b6f621246805291310b37c7be2095ecc9ff7c71f38a3c542855fa575c351&scene=21#wechat_redirect)