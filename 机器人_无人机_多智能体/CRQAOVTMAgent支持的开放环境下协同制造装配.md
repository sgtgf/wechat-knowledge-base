# CRQAOVTMAgent支持的开放环境下协同制造装配

原创 自动化学报 2018-09-25 11:18 北京

> 原文地址: [https://mp.weixin.qq.com/s/Q-\_uKrOW73lcPLGSD5v0OA](https://mp.weixin.qq.com/s/Q-_uKrOW73lcPLGSD5v0OA)

智能和网络制造

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKfzppoRCALDQZ4qicPJMe8oicMVVmlM1iaxMdXMBkNT9BNQnfswnxd1UAg/640?wx_fmt=png)

智能和网络制造是一种面向服务的、高效低耗和基于知识的网络化智能制造新模式，是对现有网络化制造与服务技术进行延伸和变革。它融合现有信息化制造技术及云计算、物联网、语义Web、高性能计算等信息技术，将各类制造资源和制造能力虚拟化、服务化，构成制造资源和制造能力池，并进行统一的、集中的智能化管理和经营，实现智能化、多方共赢、普适化和高效的共享和协同，通过智能和网络制造系统为制造全生命周期过程提供可随时获取的、按需使用的、安全可靠的、优质廉价的智慧服务。智能和网络制造是一种通过实现制造资源和制造能力的流通从而达到大规模收益、分散资源共享与协同的制造新模式 。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVK1RMCrXu2oq44LjQNhzVCwC9ef2vLz0svicxCIyCb6iaMHH4HVva0MRnA/640?wx_fmt=png)

网络制造图

智能和网络制造具有以下典型特征：

（1）面向服务和需求的制造

（2）不确定性制造

（3）透明和集成的制造

（4）低门槛、众包式制造

（5）基于能力共享与交易的制造

（6）敏捷化制造

（7）智能性等

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKB3e1Kr5vMVGv1R67Fqv2UsRGtKXxibCTILSx4aGsUticZTwFxJ9jpvdA/640?wx_fmt=png)

网络制造计算机联网大致结构图

针对智能和网络制造的不确定性、透明和集成、能力共享和众包式等典型特征，以及由此特征导致的制造过程中出现“结构失配”和“工艺革新”的特性，论文引入普通（O，Ordinary）接口、转换（V, conVersion）接口、多参数适配器（T，multiparameter adapTor）接口和概念实例调制器（M，concept instance Modulator）接口，有利于解决由这些特征引发的问题，进而有利于塑造一个安全可靠的高效的共享和协同的云制造环境。显然，基于MAS的协同服务计算是智能和网络制造的关键，如何深化和健全基于MAS的协同服务计算的云制造技术是以后的研究方向之一。鉴于本文的研究内容与智能和网络制造的密切联系，所以本文后面提出进一步的研究方向是将研究成果渗透进目前国内外研究热点的服务计算、云计算、云制造等学科和工程领域，推进这些领域的发展。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKmjbUIn55RmB8JZ2GibQssvj6DYqG2kOIIU7mHCx79peRITQ13AvVTUg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVK9UNz7Bk5JyCxtXTxJCero9e9rLrrPn1obXzIribswvFV1VJLsYxl9Pw/640?wx_fmt=png)

智能网络制造系统图

本文中的CRQAOV TM Agent 模型对传统的Agent 模型进行了扩展. 模型概括如下: 1) 在供需协作关系上, 考虑到服务请求与服务提供存在参数类型不配的问题(工艺需革新问题), 扩展了传统的协作模式, 以普通接口、转换接口(conversion 缩写V )、多参数适配器接口和概念实例调制器协作接口作为协作接口描述, 可以有效提高松耦合度(提高灵活性), 并使接口具备工艺革新的特点, 多种接口的混合使用可以有效调整规划, 且在接口定义时增加可选路径, 提高协作的可靠性; 2) 从分布式业务流程上调整规划, 即是在基于处方的确定性规划基础上, 引入量化合成,用于按需调整规划; 3) 由于存在不确定性协作, 通过协作关系的自修复、自演化来实现系统的稳定; 4)通过合同表达Agent 协同约束, 从而使得制造装配问题协同可信. CRQAOV TM Agent 模型引入了多种协作接口, 同时增加量化合成, 引入松散性的自组织协作连接模式, 引入非确定性和尝试性, 更加适合开放式环境下协同制造装配.

引用格式

周尤明, 古华茂. CRQAOVTMAgent支持的开放环境下协同制造装配. 自动化学报, 2018, 44(7): 1333-1344.

作者简介

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKccPTvB6BFO4mFYQthqAkAG7cAa3ibFLPbWtwEPRtqJRlI3kTsJuB8Ug/640?wx_fmt=png)

周尤明 副教授, 高级工程师. 2012 年获得浙江大学计算机科学与技术学院博士学位. 主要研究方向为人工智能, Agent协同, 知识管理. 本文通信作者.

E-mail: monitorstudent@126.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVK2DiaxcEAzFuIC9RknpSKLcCpLvH2kahiaNyx73Vq1icXYNBwnVKkiaMUtg/640?wx_fmt=png)

古华茂副教授、浙江大学博士、博士后.主要研究方向为人工智能, 仿生味觉, 仪器智能信息处.

E-mail: GHMSJQ@mail.zjgsu.edu.cn

  

自动化

学报

**生成式对抗网络GAN技术与应用专刊**

[生成式对抗网络：从生成数据到创造智能](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063870&idx=1&sn=1e1d7562a4bbe4c31e2fdef4859c0bc4&chksm=8131cc73b6464565d9419524cd87b4bbe363384f0ba722017e91a49af4640d349403ea9a0ea6&scene=21#wechat_redirect)  

[人工智能研究的新前线：生成式对抗网络](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063920&idx=1&sn=9094936d46b4bab696df49c408fa1656&chksm=8131cc3db646452b0cba9ebdee9672b9ae010166a941ef19d5972616235193048a3346cf54f0&scene=21#wechat_redirect)  

[一种能量函数意义下的生成式对抗网络](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063930&idx=1&sn=8fc4569fbc51adb78002a6c492a7b58f&chksm=8131cc37b646452180ad8b4be28b69e9e1767c94cf2bf8b712074d8b26e72fffd95146d9fac5&scene=21#wechat_redirect)  

[协作式生成对抗网络](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063937&idx=1&sn=b3bb0ca500fa6f1e5b2d4fdc476187ed&chksm=8131ccccb64645daca101424f49facb82039d857908b8467fc5033a3b254fc348376128fef89&scene=21#wechat_redirect)  

[融合对抗学习的因果关系抽取](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063950&idx=1&sn=073948b72538b1547399cd7d3ba0b847&chksm=8131ccc3b64645d5c3c82fb7baa62c0cd2644c19f626a6a0904b6223bf155b8e77045006815a&scene=21#wechat_redirect)  

[基于生成对抗网络的多视图学习与重构算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063957&idx=1&sn=19964ffc71d7cb689887517b5d1bec12&chksm=8131ccd8b64645cee6db75a3910ee76a1bf2dab99af617044cfc2210d106ebc8c5eb7c88f7ba&scene=21#wechat_redirect)  

[基于生成对抗网络的低秩图像生成方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063961&idx=1&sn=8d6567b1750f5aa499007f17bed8e92b&chksm=8131ccd4b64645c2a898492cbb2eb4ed8272b4234bd1a08da279f17d6eb9884e0d4ace8f062c&scene=21#wechat_redirect)  

[基于条件深度卷积生成对抗网络的图像识别方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063972&idx=1&sn=b8bf8ae85b62f83e74d50f086ff6bc04&chksm=8131cce9b64645ff1ce4a10e6482d74876c664917a3ee821c11a72693cee3af1360b88d6fffe&scene=21#wechat_redirect)  

[基于生成式对抗网络的鲁棒人脸表情识别](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063980&idx=1&sn=ee5a109bc89e6b59dcf0db6359438be1&chksm=8131cce1b64645f7d5c0153e2fc3703abc37bc4edb3fc668efc90fd7433599ef40dcaa94e238&scene=21#wechat_redirect)  

[基于对抗训练策略的语言模型数据增强技术](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063984&idx=1&sn=6092ba309457e2810275069f4dfcef80&chksm=8131ccfdb64645ebb732eccf9f0fb0a81615f92a321d233837e60534ffaca0a352e6d81c97e5&scene=21#wechat_redirect)

[基于GAN技术的自能源混合建模与参数辨识方法-自能源，一场“草根能源”的盛宴](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063988&idx=1&sn=7c506b7a5c161d7c7b302a17ea28a097&chksm=8131ccf9b64645ef252f6078efb02f067d99a4d4d3cf020dfe8d21f85fb512835931dc11fbd7&scene=21#wechat_redirect)

[基于位错理论的距离正则化水平集图像分割算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063994&idx=1&sn=6e6e13de682aecbea7fec4ebbd4e4316&chksm=8131ccf7b64645e1c36dce0c5ba1a70ffcbf2f2ea25cc920c7ee6315227610c205029b5e0f67&scene=21#wechat_redirect)

[异质依存网络衰退特征与关键节点辨识](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064002&idx=1&sn=6b560d52462a2c2958004fb2e701d2c1&chksm=8131cc8fb6464599f19c7d08ce7a86b1638ad2542c79c16e178db90bee226be9c182cfba21cb&scene=21#wechat_redirect)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKiaJdCTkFNmk0MEzicdD7jDY0hXtJhic8amKavsTRGlrSTf9BgJtTZNzwQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKeGsHSGpAicezPRat7Df2TWlfKibuRQ4Qevy0dePKcbp9vXpKZbKlNnkw/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKiaJdCTkFNmk0MEzicdD7jDY0hXtJhic8amKavsTRGlrSTf9BgJtTZNzwQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKt9NsPhu8bct1ia6jYRfb8Xk3V7B5Sry1HdJpUIbzu6yPNO9wKO4Eiccw/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKiaJdCTkFNmk0MEzicdD7jDY0hXtJhic8amKavsTRGlrSTf9BgJtTZNzwQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44SL2kVYgowaDLCwd8OXLVKvZKK2GbjY097glenxFSIAKmnmgRS7e4x4Nzg7GFmMmBpJ9sqgbjvww/640?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

点

这里“阅读原文”，查看更多