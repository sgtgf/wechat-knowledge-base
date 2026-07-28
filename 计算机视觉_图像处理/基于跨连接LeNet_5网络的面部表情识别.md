# 基于跨连接LeNet-5网络的面部表情识别

原创 自动化学报 2018-03-30 09:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/9IFrAta99brH3Sb0LHgQZA](https://mp.weixin.qq.com/s/9IFrAta99brH3Sb0LHgQZA)

面部表情识别

面部表情识别是指计算机识别人类的表情所代表的含义。人脸表情包含丰富的个人情感信息，想让计算机能像人类一样表达情感，拥有智能，那么计算机必须能够理解人的情感，首先第一步就是计算机要能够正确识别面部表情。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCib7sWKZRJ2AtfkeB50auAj5OIabFEm54ib8Xm5LrD32wWWQw5GVCI7rSw/640?wx_fmt=jpeg)

暖心的大白

  

近年来，人机交互技术发展迅猛，随着人机交互逐渐的生活化，人们对于机器的智能化要求也越来越高，所以如何让机器拥有智能成为了当前的一个非常热门的研究方向，许多的科研机构和商业公司都投入了大量的人力、物力，希望能够研究出拥有智能的机器。因为人们更多的是希望机器能够在与人的交互中更加智能化，所以机器是否拥有智能的一个判断条件就是机器对人类心理、情感的理解，而对人类心理、情感的理解主要集中在对人类语言的理解，对人类动作的理解以及对人类表情的理解上。研究指出，人类的面部表情可以比动作和语言更好的表达他们的心理活动。

传统的表情识别方法需要人工定义特征，人为的提取合适的特征，这样一来增加了大量的人为因素干扰，给表情识别带来了不确定性。深度学习（Deep Learning）是人工神经网络的一种，随着计算机的发展，多层神经网络训练问题一定程度上得到了解决，加上各种网络结构的提出并在图像分类识别，语音识别等领域得到了证明，深度学习掀起了新的研究热潮。深度学习已经被证明能够发现高维数据中的复杂结构，因此其在科学、商业、医疗等领域都将会有广泛的应用。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibO0tKXhMNCFpQPafDoTTI0zWm8YNVTJ3UibnInTgvhj111Uw0bIukGHw/640?wx_fmt=png)

深度学习的应用

卷积神经网络的特点是自动地、隐式地学习特征 , 不需要人为地定义特征 , 如果有足够多的样本用于训练 , 网络可以学习到很好地特征进行分类 . 相反如果没有足够多的样本进行训练 , 那么卷积神经网络就不如人为地定义特征能更快地找到样本之间的联系 , 从而达到好的分类效果 。本文在 LeNet-5 的网络基础上 , 引入跨连接的方法 , 设计出新的卷积神经网络结构 , 将其应用于面部表情识别 . 实验结果表明 , 低层次特征的应用可以一定程度上弥补样本数量的不足 , 获得不错的分类效果 . 另外 , 由本次实验可知 , 卷积神经网络现在没有一种通用的结构可以很好地解决多种问题 , 在手写数字库上表现非常好的 LeNet-5 结构在表情识别中表现较差 , 所以不同的问题需要设计不同的结构来解决问题 , 这给卷积神经网络的普及带来了一定的困难。下一步研究计划是寻找各层特征之间的关系 ,更好地理解各层特征 , 进而找到更加通用的卷积神经网络结构设计方法。

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibF4KzuT0VFfVyDzm1sA8clargOu6y5zMibeUvHsjh50SxRQkg8sk7n0g/640?wx_fmt=gif)

引用格式

李勇, 林小竹, 蒋梦莹. 基于跨连接LeNet-5网络的面部表情识别. 自动化学报, 2018, 44(1): 176-182.

作者简介

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibF4KzuT0VFfVyDzm1sA8clargOu6y5zMibeUvHsjh50SxRQkg8sk7n0g/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibo2xrHFLTic8ha7BtO0MKRCj5Ljn4mC2a2ZfJic0O5MXrEOf3dxsBSzxg/640?wx_fmt=png)

李 勇 北京化工大学硕士研究生 . 主要研究方向为图像处理与模式识别 , 深度学习 . 

E-mail: 15117965051@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCib1ugDvuRc7EuCX2XXM8Shia3OFeV2pxDcXpC2npIiaELTDcYYM5N9nxjA/640?wx_fmt=jpeg)

林小竹 北京石油化工学院教授 . 主要研究方向为图像处理与模式识别 , 深度学习 , 信号与系统 . 本文通信作者.

E-mail: linzhu1964@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibKeJLR9VaSpOyprLk0tZVIP3byzUxibicLRIsg5H6YBGk60NcsPeibemzw/640?wx_fmt=jpeg)

蒋梦莹 北京化工大学硕士研究生 . 主要研究方向为图像处理与模式识别 , 深度学习 . 

E-mail: 18810493772@163.com

**简**

**讯**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibAars9ST5P6z3u0pddmPlaMnUZ07pUqiaJIm9e70dIV1vcMbEicZWfyuA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCib66gJSyrKiaq1O0JchrHsDERic3wkgku6B7kmxvzcIwJysA1oIpx5rGew/640?wx_fmt=gif)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibFXzT28s2EV1w0jOxuTWbaTicjjpvGPsgxypyQ83kHzk50dm9ABvsJDQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibrJcQ4EsrylVVRRlS6jibIlqAvicIkVdPSLl3SyZ2j5MkEZiancFfx68SA/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibFXzT28s2EV1w0jOxuTWbaTicjjpvGPsgxypyQ83kHzk50dm9ABvsJDQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibMMa0l4SFeiaYEqp17P4kTP6eT7v3dFHl2LsHXnWsUXktFZeupYPjN9Q/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibFXzT28s2EV1w0jOxuTWbaTicjjpvGPsgxypyQ83kHzk50dm9ABvsJDQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibdpwmrsaqNe8UQb7MLucibniatuAOA1WG0SIGpVWnuEbwb1kFEaWClLjw/640?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH443ia4V4jUGKT5U3icic6BibwCibOR1JjJz19AWOEMbgm9IEf55X0CTDiaPvT959cBLvibBNoOhDibfnBqx6A/640?wx_fmt=gif)

  

点击阅读原文查看更多