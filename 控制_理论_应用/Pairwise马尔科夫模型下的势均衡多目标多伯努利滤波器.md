# Pairwise马尔科夫模型下的势均衡多目标多伯努利滤波器

原创 自动化学报 2018-01-29 16:32 北京

> 原文地址: [https://mp.weixin.qq.com/s/YNo7gnGPbIej-TNz84AmlA](https://mp.weixin.qq.com/s/YNo7gnGPbIej-TNz84AmlA)

**多目标跟踪的主要任务**是：给定一个图像序列，找到图像序列中的运动物体，并将不同帧中的运动物体一一对应，然后给出不同物体的运动轨迹。这些物体可以是任意的，如行人、车辆、运动员、各种动物、飞行器等等。

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5xp0eYp8Gj94yNFNOTo5nTF4h1JrNhhY5icG0Kicd0P82SfmRPRIsgDZw/640?wx_fmt=jpeg)

飞行器跟踪

多目标跟踪问题的难点在于目标和量测的不确定性。目标的不确定性是指在监控区域内由于新生目标的出现或存在目标的消亡，目标的个数未知且随时间变化，并且在每一时刻每个目标本身的状态也是随机的。量测的不确定性是指由于量测噪声、传感器漏检和杂波等因素的影响，在每一时刻传感器接收到的量测不仅包含源于目标的量测，同时也可能包含杂波，而且它们不可区分。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z50OpuesDwOHjPyc4sp0I2WViaOu0U022NicUzh0gXdqPfFSQE2hIY9Wicw/640?wx_fmt=png)

行人跟踪

前期，人们主要从数据关联的角度解决多目标跟踪问题，即利用关联技术确定目标与量测之间的对应关系，将多目标跟踪问题转换为多个单目标跟踪问题。但随着跟踪环境的日趋复杂，如目标不断的聚集、交织会表现出一些相似的运动特征，传感器受到噪声、漏检和杂波的影响，在这种情况下进行数据关联决策将变得非常困难，并且随着目标批次过多和杂波密度过大会导致计算上的组合爆炸问题。随后，Mahler提出了以贝叶斯框架为基础的有限集合统计理论，从目标集合分布的视角给出了复杂观测场景的全局建模理论，用一种完备的全概率方法来诠释多源多目标的检测、跟踪、识别与信息融合。

本文研究了在随机有限集框架下目标模型为pairwise马尔科夫模型的多目标跟踪问题。在标准的随机有限集多目标跟踪算法中，假设每一个目标的状态模型和相应的量测模型为隐马尔科夫模型。但在实际应用中，目标不一定满足隐马尔科夫模型所隐含的马尔科夫性和独立性假设，例如将实际的物理系统建模为离散时间状态空间模型的过程中，通常会伴有相关的过程和量测噪声。鉴于此，引入了更为一般化的pairwise马尔科夫模型，它放宽了隐马尔科夫模型的结构性限制，将目标状态和量测整体看作一个马尔科夫过程。本文给出了在pairwise马尔科夫模型框架下多伯努利滤波器的递推过程，以及它在线性高斯条件下的高斯混合实现，并通过仿真实验验证方法的有效性。

引用格式

张光华, 韩崇昭, 连峰, 曾令豪. Pairwise马尔科夫模型下的势均衡多目标多伯努利滤波器. 自动化学报, 2017, 43(12): 2100-2108

作者简介

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z57S4RJKIpxA3DejogoqRQnAUI9WUEGTtreQPNiatJfmT11XU4aheZZxA/640?wx_fmt=jpeg)

张光华, 西安交通大学电子与信息工程学院综合自动化研究所博士研究生. 主要研究方向为目标跟踪. 

E-mail: michaelzgh@stu.xjtu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5UNmLLSm3GrGuibhdMnVCiaGeMkgGRlyStibYytAXV3ElXp8o0a2ibJUKVA/640?wx_fmt=png)

韩崇昭, 西安交通大学电子与信息工程学院教授. 主要研究方向为多源信息融合, 随机控制与自适应控制, 非线性频谱分析. 

E-mail: czhan@xjtu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5MRiaVl3GLaO48NqPYUwh07a8o36JQpDGibtq1ibhpfoKGdmw8eKXF8wmQ/640?wx_fmt=png)

连峰, 西安交通大学电子与信息工程学院综合自动化研究所副教授. 主要研究方向为目标跟踪. 本文通信作者. 

E-mail: lianfeng1981@xjtu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5UDQ5Dr30eLt5WgibV3k6qk9KHQTQoHhXwcu8iaNuvude2pgSdMhicENJQ/640?wx_fmt=jpeg)

曾令豪, 西安交通大学电子与信息工程学院综合自动化研究所博士研究生. 主要研究方向为目标跟踪. 

E-mail: zenglh@stu.xjtu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5s0eS37IjuqFUbe0VLDSZLWt8Uu4ryV2qG5rdoicEhx6MAYNFSiavmcyA/640?wx_fmt=png)

欢迎关注

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5pFWiaia0fFoFIrHW6peUYAicoIq5GDAGHxxg595UY4XbHET6UU7KEJa6g/640?wx_fmt=gif)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5icQmIvF2mPAiaYQFge5LBNJzQDVBGBrrA0UqmFlVfObz1gYC2NC5Ks2Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z53KZicaJmic4DGicK8cWiaz27HLv1fgpfj6tjgJiapQE1OpvMQ0mZyKOnfTQ/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5icQmIvF2mPAiaYQFge5LBNJzQDVBGBrrA0UqmFlVfObz1gYC2NC5Ks2Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5fowSTAziaz66tPEbDln6pic13gNcnKpcwSpPicKy8wviaLazQDer5ibZhLg/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5icQmIvF2mPAiaYQFge5LBNJzQDVBGBrrA0UqmFlVfObz1gYC2NC5Ks2Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z59CfwYkdzAx6XlK0GyFQM8ibWtZZAaSNoDZYWOzWXf0aANZibaNR8HeeQ/640?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44GY9bQvEiayZ9voA5ndV8Z5qqCMsCG1P0GjUqtA21A2Du4fSHML7d2xSPIYpRke18bathma4r5v3Q/640?wx_fmt=gif)

  

点击阅读原文查看更多