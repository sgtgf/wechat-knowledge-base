# 基于GAN技术的自能源混合建模与参数辨识方法-自能源，一场“草根能源”的盛宴

原创 自动化学报 2018-08-13 18:33 北京

> 原文地址: [https://mp.weixin.qq.com/s/qnOIu6c3Ao\_su8WwC8LQug](https://mp.weixin.qq.com/s/qnOIu6c3Ao_su8WwC8LQug)

**自能源：**是指在能源互联网中能够实现智能控制、自动保护和智慧管理的自治能源区域。自能源(We-Energy, WE)可以是拥有分布式发电、储能、冷热电联产等能源生产和存储单元的居民、企业或一个社区等。自能源是由传统的能源消费者转为集能源生产、存储、转化和消费于一身的综合能源体，这些“能源草根阶层”以一种自下而上的扁平化能源交互方式实现区域能源的自给自足，具有全双工、分布式、对等化和智能化的重要特性。

自能源由泛在的能源终端组成，并且可以同时向能源互联网接收和输送能源。有别于由传统能源供应商主导的能源接入模式，自能源之间的能源交互是由普通能源终端自下而上主导的，由传统的“点到面”的能源传输，转化为一种“点到点”的能源传输理念，具有全双工、分布式、对等化和智能化的重要特性。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkvCrIPFI60ib6KzY5y9gewfn0ibiaBjsTiaq4UcOUPGaibkSngrSO1jHMDYA/640?wx_fmt=png)

在能源互联网中，自能源根据自身能源供求情况及能源互联网中能源价格来制定能源转换量，从而平衡全网能源和最大化自身利益。随着自能源主体逐渐增多，能源互联网中必将出现一个区域内的综合能源运营管理平台，承担其能源的转换、最优分配；保障能源系统的安全运行和用户获得的能源品质；进行能源信息的预测、监控、传输；实现能源生产、消费及其相关服务费用的竞价、结算；并让自能源参与者加入分享与互动等一系列功能。下图为涵盖电能、热能、天然气的自能源结构，负荷(电负荷、热负荷和天然气负荷)由本地能量生产单元供能，多余能源不仅可以通过能量存储设备进行储能，也可以通过能源端口进行能量交换。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfknbrWGVdlZyonvgIGeHZP7wOMdXFmbJdKf3ias7khiaXZp05K7BWFxwgw/640?wx_fmt=png)

**如何对自能源进行建模？**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkF7v3iajiaDR2fIFdjDZSylbqB5icFaIqicU273ibzb9hP6cjH9zhgFLjxaw/640?wx_fmt=png)

本文将自能源拆分为电力子系统、热力子系统和天然气子系统，其中，电力子系统模型包括分布式电源、储能设备、负荷及能量转换单元。储能设备联合分布式电源统一被视为电力子网中的PQ节点，经过逆变器向本地负荷和能源互联网输送功率，图中涉及的电能转换单元主要包括电锅炉、水泵、天然气压缩机，这些转换单元的能量输入波动会影响耦合网络的能源输出，因此其模型不能视为常规负荷或电源来看。在供热系统中，由能源互联网提供带有一定温度和质量流率的水，经过水泵、电锅炉和热交换器等设备加压升温后向自能源中的热负荷提供热量，最后在由回水管流回能源互联网。本文从供热子系统功率平衡的角度出发对自能源建模，通过调整设备输入功率控制系统中的各状态变量，从而达到控制自能源热网系统。在天然气管网中，天然气气井联合储气罐作为一个可控气源，输出的天然气经过空气压缩机升压后与天然气管网汇流，与电网中功率流动规律类似，经压缩机升压后天然气压力大于能源互联网端压强时，自能源向能源互联网输出天然气，反之能源互联网向自能源输入。

**如何对自能源模型进行参数辨识？**

自能源在稳态运行下拥有大量可测数据，而在异常工况下建模获得的数据较少。异常工况下的能源系统模型对系统的运行至关重要，系统在故障情况下对其检测不准确，将影响系统运行的稳定性。传统的建模方法已不能满足要求，需要探讨一种更为有效的建模方法以解决模型数据不完备问题。

生成式对抗网络由生成器和判别器组成，其中，生成器的主要作用是通过对采样的随机变量进行加工产生与真实数据相似的值，从而模拟现实环境；而判别器的主要目标旨在尽量正确的判别输入数据的来源，从而训练生成器模拟数据分布的能力，由此两者通过二人零和博弈实现学习优化过程，最终达到一个纳什均衡，使得生成器和判别器的损失函数均达到全局最优解。

结合生成式对抗网络所具有的建模能力，本文提出自能源模型的GAN参数辨识方法，将自能源机理模型作为待辨识的生成器，自能源系统根据真实数据类别选择状态变量的采样区间，并将该区间的随机变量输入生成器产生模拟数据，根据下图所示结构将模拟数据和真实数据同时输入至判别器，判别器通过最小化损失函数来提高其自身判别判别能力。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkJnZHGf4lN1SlExShLzcaKxEJ8Gz8Wc6swk26oIiacNpdWzLYSEqV6yA/640?wx_fmt=png)

随着能源互联网在世界各国的逐步推进，能源互联网建模的准确性直接影响着能源系统运行的安全性、稳定性及经济性．鉴于此，本文提出一种基于GAN技术的自能源混合建模方法，该方法针对自能源网络结构特点进行机理建模，适用于具有能源双向传输的特点以及能源耦合等复杂特征的混合能源系统。在此基础之上，针对自能源模型的数据不完备，结构复杂等特点，设计了基于GAN技术的数据、机理混合驱动方法，应用含策略梯度反馈的GAN改进模型进行参数辨识，解决了自能源模型中输出序列离散的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkSYcCK0aHIu8DQjvXXs3iap6aCnGZK3wofB2glBRgWJwt87vnsdlZMqg/640?wx_fmt=png)

引用格式  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfk2jibqicHbftWWMuaPl0Pe60bULOXSDv1sNTxyUAv4hUuM3ZgFHq8xOnQ/640?wx_fmt=png)

孙秋野, 胡旌伟, 杨凌霄, 张化光. 基于GAN技术的自能源混合建模与参数辨识方法. 自动化学报, 2018, 44(5): 901-914.

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkSYcCK0aHIu8DQjvXXs3iap6aCnGZK3wofB2glBRgWJwt87vnsdlZMqg/640?wx_fmt=png)

作者简介

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfk2jibqicHbftWWMuaPl0Pe60bULOXSDv1sNTxyUAv4hUuM3ZgFHq8xOnQ/640?wx_fmt=png)

东北大学信息科学与工程学院教授. 主要研究方向为网络控制技术, 分布式控制技术, 分布式优化分析及其在能源互联网, 微网, 配电网等领域相关应用. 本文通信作者. 

E-mail: sunqiuye@mail.neu.edu.cn

东北大学信息科学与工程学院博士研究生. 主要研究方向为博弈论及其在能源互联网, 微网, 配电网等领域相关应用. 

E-mail: hjw\_neu@outlook.com

东北大学信息科学与工程学院博士研究生. 主要研究方向为机器学习及其在能源互联网, 微网, 配电网等领域相关应用. 

E-mail: ylxiao66@163.com

东北大学信息科学与工程学院教授. 主要研究方向为自适应动态规划, 模糊控制, 网络控制, 混沌控制. 

E-mail: zhanghuaguang@mail.neu.edu.cn

自动化

学报

往期回顾

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

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkJKgjNlnguErJeNodOv6WOJItwMB9IKRTZSPWW1fdtcsWicdBGwUp3Zg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkXtUox6200L0Uic4vk2n9mVlYuQM29MI1Y0V6GZOn9mNkmkZJQLlAgWw/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkJKgjNlnguErJeNodOv6WOJItwMB9IKRTZSPWW1fdtcsWicdBGwUp3Zg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkzx4Hrh8LKtvcTRkD8NxJhicr2rTlFCY0MENksfr0VfQ7tT6ekibxgqfQ/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfkJKgjNlnguErJeNodOv6WOJItwMB9IKRTZSPWW1fdtcsWicdBGwUp3Zg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wKPJ3Lv8ZicicPpwRcdqxfk56zW41aQFQicu1E8UibmOvwXibe6jaTVic9KTGicVsZ15oVLlEoAxAbCpag/640?wx_fmt=jpeg)

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