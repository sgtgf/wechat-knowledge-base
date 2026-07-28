# 基于改进的Fisher准则的多示例学习视频人脸识别算法

原创 自动化学报 2019-01-08 15:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/HkNAeZ7\_mTXJiZAtL5a7oA](https://mp.weixin.qq.com/s/HkNAeZ7_mTXJiZAtL5a7oA)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1LyYzxJZc2ArAhHvrSic3BP86XAgZ5yDWH4jxgG696Aj5stgPjKg8UrA/640?wx_fmt=png)

视频人脸识别是计算机视觉、模式识别、视频分析与理解等领域的重要研究课题。视频人脸识别的研究不仅在理论上具有重大意义，同时在生物特征鉴别、视频监控、信息安全等领域具有广泛的应用前景，已经成为人脸识别领域的研究热点和难点问题。

  

引用格式：王玉, 申铉京, 陈海鹏. 基于改进的Fisher准则的多示例学习视频人脸识别算法. 自动化学报, 2018, 44(12): 2179-2187

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1ickXo7N38iajDdViaaAibibCt0HdYKyCicaZtEe3Bia1qsEciaJVJTicjN60org/640?wx_fmt=jpeg)

  

目前，绝大多数的视频人脸识别都是通过提取视频序列中包含人脸的关键帧，采用基于静态图像的人脸识别算法达到视频分类的目的，这其中就包括多视角融合、子空间或流形分析等。该类方法中关键帧的选择歧义性较大，需要对整个视频进行分析才能实现关键帧的准确定位，降低了视频人脸识别系统的效率和实时性要求，适合于人物目标配合、光照及视角良好并且视频质量较高的环境下的应用。

  

近年来，基于图像集合和基于视频序列的视频人脸识别方法得到了广泛关注。其中，基于图像集合的视频人脸识别方法是将视频作为一个无序的帧图像集合，通过流形、子空间、Affine Hull、协方差矩阵等对图像集合进行建模以实现视频人脸的识别。基于视频序列的视频人脸识别算法是通过设计视频纹理描述算子、引入视频上下文信息等方式提高识别精度和效率。但是，视频纹理算子及视频上下文信息的获取十分困难，计算复杂度较高，同时，这类算法对人脸表情变化、目标姿态变化等影响识别性能的因素不够鲁棒。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1qh2ADkowlAlEdfpT2fMIKWQ3s6fttZYu4UW835pMPI4v5NHhPSb4Ww/640?wx_fmt=png)

  

自然视频大多数是非专业人员采集的，视频采集设备有限，视频环境光照条件较差，目标姿态多变并且伴随运动模糊，同时，为了便于存储及传输，通常还以压缩格式存储，这些噪音因素的存在都使得解决视频人脸识别问题具有极大的挑战性。为实现这种低分辨率、目标姿态多变条件下的视频人脸的鲁棒识别，设计能够适应这种复杂环境下的视频人脸识别学习算法就变得尤为重要。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1s7ya1ZWp3l2tIBPyPxbGIdj46wzxEEnTt2cLBnHPILwemHrvGg6IOg/640?wx_fmt=png)

  

为解决视频环境下人脸识别问题中关键帧难以准确定位导致的识别率偏低等问题，我们提出了一种基于多示例学习的视频人脸识别算法。该算法将复杂环境下的视频人脸识别问题视为一个多示例问题，将训练集合中的每个视频视为一个包，将视频包中归一化处理后的视频帧图像视为包中的示例。视频包带有标记而视频包中的示例是没有标记的，利用有效的多示例学习算法在训练集合样本空间中学习并生成分类器，以实现对测试包的预测及分类。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1nu1UZ7t2OgcSDR6x4DWiaA5gCNTQNAFBA2O7Mf6vO2ibCRAsaMiaPs22A/640?wx_fmt=png)

  

另外，视频采集环境的光照变化、目标的姿态变化等，都在一定程度上造成了视频人脸识别上的困难，为此，我们在算法实现过程中还采用了基于改进的Fisher加权准则的TPLBP进行示例的纹理特征表示，该算子具有较强的可辨别能力，并且对均匀光照变化是鲁棒的。

目前，关于视频人脸识别问题主要结合实际应用场景进行分析，鉴于此，我们提出了一种适用于低信噪比环境下的基于加权Fisher准则的多示例学习视频人脸识别算法，算法在得到较高的识别精度的同时，有效解决了目标姿态多变视频环境中的人脸视频关键帧难以定位的问题，并且具有较强的抗干扰能力，对均匀光照变化、姿态变化等也具有较好的鲁棒性。如何解决算法时间复杂度较高，学习算法的泛化能力等问题成为我们今后研究工作的重点。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1VZxEoynbUUj1j4Jaoq4jXC490bsULOXNeH7VhcKNf4AHYlicyzoSib4g/640?wx_fmt=png)

作者简介

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1a8rjhznhbTUib1rz7rcIrMZox6HobktyXBf2Fhib0Qh3HBiaciakPYt5gg/640?wx_fmt=jpeg)

王玉，吉林大学应用技术学院副教授. 主要研究方向为图像处理与机器学习. 

E-mail: wangyu001@jlu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1FMnoqfY672aW7VQXhoCKzQXaJCRwjIqAjia3UubnasOXRu7kkI4l9XA/640?wx_fmt=jpeg)

申铉京，吉林大学计算机科学与技术学院教授，博士生导师.主要研究方向为图像处理与模式识别. 

E-mail:xjshen@jlu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1hqETMSOY5SiaicPOwwcibiay0jyDUbuJ8CgDktUDkbA0CHh9tE1YON0DuA/640?wx_fmt=jpeg)

陈海鹏，吉林大学计算机科学与技术学院教授，博士生导师.主要研究方向为图像处理与模式识别. 本文通信作者.

E-mail: chenhp@jlu.edu.cn

自动化

学报

**自动化科学与技术未来发展专刊**

[自动化科学与技术未来发展专刊](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064147&idx=1&sn=327b3991ea3e77cbcf4d980323c7f82a&chksm=8131cd1eb64644083d7138ddf86b40542952eed2bb5bc1422e1f36ec54d4603a1ccf231fc6ef&scene=21#wechat_redirect)  

[陈杰院士等：自动化科学与技术未来发展专刊序言](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064125&idx=1&sn=719f1a79512837b53e30b629a71cb13c&chksm=8131cd70b64644668547da0629266b323cc8eb363958689b74964fe4451f1c6d2033a6e0d8ba&scene=21#wechat_redirect)  

[柴天佑院士：自动化科学与技术发展方向](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064125&idx=2&sn=a21645cfef86f1fe6892ca9b69683865&chksm=8131cd70b6464466988712c4ac5ef9b7e4f8aee6414de2dc56a14f61f08fecbbe03ef048e4c5&scene=21#wechat_redirect)  

[东北大学丁进良教授等：复杂工业过程智能优化决策系统的现状与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064151&idx=1&sn=2c6b2ef1a6178d340d8b10083699c62c&chksm=8131cd1ab646440cb51478ad8d204a9dc6c1450a09340a10333eef2c55ae88e0163a6ea99c53&scene=21#wechat_redirect)  

[美国南加州大学秦泗钊教授等：数据驱动的工业过程运行监控与自优化研究展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064163&idx=1&sn=edd98909d12c4ebaae5222a64b79440e&chksm=8131cd2eb64644384d2d7d3fce1edf2debdd8328ac63262e2d698a3f0192a6c91c898ba28f49&scene=21#wechat_redirect)  

[桂卫华院士等：铝电解生产智能优化制造研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064156&idx=1&sn=657a5cfaca9a69ab7d630bd3f949ae4d&chksm=8131cd11b64644070005198101ade827f94912bd46c6a2b3d1d2ec50e42cfea45d2c7105b5ee&scene=21#wechat_redirect)  

[北工大乔俊飞教授等：城市污水处理过程异常工况识别和抑制研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064167&idx=1&sn=7acd6f8fddecb189d52dfced142b3758&chksm=8131cd2ab646443ce7791a9c38f40e5cebe15018442874148e216580934b32508f7cfab28b2f&scene=21#wechat_redirect)

[北理孙健教授、邓方教授和陈杰院士：陆用运动体控制系统发展现状与趋势](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064172&idx=1&sn=de6c39a807bc6cf3c86ed92691f2e74a&chksm=8131cd21b64644371c7382e9f44d84a777e616956035af1926bbf63d233dce4243d9d20096a2&scene=21#wechat_redirect)  

[中科院自动化所侯增广研究员等：康复辅助机器人及其物理人机交互方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064187&idx=1&sn=5d397da5ebb4c31840db0043b85580f8&chksm=8131cd36b64644203ab4079f881b673207b0896f587a22abdada7f3e64882b8cf44639631a0e&scene=21#wechat_redirect)

  

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

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1VbLdKSogibsYa4grAW6TsjnBCib0XtBGffd0Kxt7ebIea51H1zRBGXibg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1HGWHfF8kwe5tHzgukVz1WiaTKZX6gcBRsYnsvDES7ALZ3m1MmSGT4QA/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1VbLdKSogibsYa4grAW6TsjnBCib0XtBGffd0Kxt7ebIea51H1zRBGXibg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY16YV4O9VibNpZVicj9JQGMEqk4SAvkNDaUGL9ht7uDOVyXOtfWElmT7jg/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1VbLdKSogibsYa4grAW6TsjnBCib0XtBGffd0Kxt7ebIea51H1zRBGXibg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45ZbZhYnS05ngWicNpCDpnY1swM0Pu8HGTpCShFvdKgibkWiaZHINl0Rbz2ic0rYKAljFtY8eZsTmwI5w/640?wx_fmt=jpeg)

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