# F-粗糙集视角的概念漂移与属性约简

原创 自动化学报 2018-11-15 11:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/oKewBV4oQXW\_nUs0EUaEAg](https://mp.weixin.qq.com/s/oKewBV4oQXW_nUs0EUaEAg)

概念漂移是指：数据流中概念(或目标变量的统计特性)的不稳定性、不确定性，以及随着时间变化而变化的特征。

  

引用格式： 邓大勇, 李亚楠, 黄厚宽. F-粗糙集视角的概念漂移与属性约简. 自动化学报, 2018, 44(10): 1781-1789

DOI： 10.16383/j.aas.2017.c170213

  

概念漂移探测是大数据、数据流研究的一个重点和难点。概念漂移探测是数据流挖掘的重要研究内容。当前概念漂移探测方法至少存在以下3个问题。首先，概念漂移的概念起源于数据流挖掘，当前对概念漂移探测的研究主要集中于概念外延的变化，即外延漂移，较少考虑概念内部之间的相互关系及其变化，即内涵漂移；其次，缺乏统一的概念漂移探测标准。概念漂移探测方法很多，但探测准则主要是分类准确率(或分类错误类)，而分类准确率(或分类错误类)依赖于特征选择，对于同一训练集和同一测试集，特征选择不同，分类准确率可能不同；再次，工作量大，可重用性差。获取分类准确率(或分类错误类)需要很大的工作量，而且分类准确率依赖于训练集、分类器和测试集，只要其中的某个因素发生改变，其值就可能发生变化，结果很难重用。

  

Q1

概念漂移探测准则与属性约简准则有什么关系？

  

分析了3种概念漂移探测准则（分类准确率、联合概率分布和属性重要性）的特点，对照属性约简准则，定义了属性依赖度和条件熵的概念漂移探测准则。实验结果表明，与分类准确率、联合概率分布和属性重要性等概念漂移探测准则一样，属性依赖度、条件熵能有效地探测概念漂移；相比于分类准确率和联合概率分布，属性依赖度和条件熵既能用于理论分析又能进行实验检验，并且具有对称性和可重用性，可以节省大量工作量。概念漂移与属性约简之间的关系为：**属性约简是保持约简准则条件下不发生概念漂移的最小属性子集**。概念漂移探测准则与属性约简准则之间的关系为：**大部分属性约简准则能够用于概念漂移探测，有些概念漂移探测准则可以用于属性约简**。  

  

实验数据为KDD-CUP991 网络入侵检测数据10% 的子集。 该数据包含494 021 条记录， 42 个属性。

  

当设置滑动窗口大小为10 000且滑动窗口之间无重复时，实验结果如图1所示。在探测概念漂移过程中，基于属性重要度/条件熵的分类准确率的值以及属性重要度的值均变化不明显，利用条件熵探测感念优于分类准确率和属性依赖度。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImdXeiah6jDyTrEh9xbibVsrWeLnqThoXNhoJ15zWnzVKECaa4uXqia9aeQ/640?wx_fmt=png)

Fig. 1 The size of sliding windows is 10 000 without repeat

  

当设置滑动窗口大小为5 000且滑动窗口之间无重复时，实验结果如图2所示。在探测概念漂移的过程中, 基于条件熵/属性重要度的分类准确率、属性重要度以及条件熵均可有效探测概念漂移，从整体效果来看，利用条件熵探测概念漂移优于基于属性重要度/条件熵的分类准确率和属性重要度的探测方法。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9Im66EErscvdmTJHLlAVyx37qwPHZYWlKbvPN7HergicxykQ8xLtVhl5DA/640?wx_fmt=png)

Fig. 2 The size of sliding windows is 5 000 without repeat

  

当设置滑动窗口大小为5 000且滑动窗口之间有10%重复时，实验结果如图3所示。在探测概念漂移结果均不理想的情况下，条件熵作为概念漂移的探测准则较优。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImQNGzmx7zSTxyHRylK1nhyyyVk5bic9hNwlUJjyLrvCicIQrVEiaw82oCA/640?wx_fmt=png)

Fig. 3 The size of sliding windows is 5 000 with 10% repeat

  

当设置滑动窗口大小为10 000且滑动窗口之间有10%重复时，实验结果如图4所示。在部分滑动窗口，基于属性依赖度/条件熵的分类准确率以及属性重要度的探测概念漂移效果不理想，条件熵的变化能有效的探测概念漂移。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9Imyj7CsGhicuU5reJdDEuwtgqlJJbEYLaonZOstdJErIS4MV5Ydw2Oqxw/640?wx_fmt=png)

Fig. 4 The size of sliding windows is 10 000 with 10% repeat

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImTNrV4vEMwJoH6JWQ26BfUHRLJO3DtCoIlHnjICX5ANaTQWsFicM4Pjg/640?wx_fmt=png)

作者简介

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImN2dwb5KfLxa2OJkZFP6RxBa5yWiaXxLuvQtk3icqNwKu2ECz6icymSU3g/640?wx_fmt=jpeg)

邓大勇，浙江师范大学行知学院副教授.  2007年获得北京交通大学计算机应用技术专业博士学位. 主要研究方向为粗糙集理论及应用. 本文通讯作者. 

E-mail: dayongd@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImMKz7flUCKWwVafCr4IEe6SqGaILuGBMe9nZIJIABSOL6iajtByJ7nrg/640?wx_fmt=png)

李亚楠，浙江师范大学数理与信息工程学院硕士研究生. 主要研究方向为数据挖掘. 

E-mail: ynli15@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImgELRZVKkVRniaUZOd4RfsGnFo0cCeF5lYtSgMibrbDmwHy6AkXagGW5g/640?wx_fmt=png)

黄厚宽，北京交通大学教授. 主要研究数据挖掘和智能计算. 

E-mail: hkhuang@bjtu.edu.cn

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

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImuwvONkLtchMwfiatIVM0o9G7SWuibZMxbicDRFicMwWBYvL3AwntUZFVdg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImDKB456Sz6FS3XhPTXBOjB9pA89cta71ICDg6eL7KiaUKibyBVaeGibeNg/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImuwvONkLtchMwfiatIVM0o9G7SWuibZMxbicDRFicMwWBYvL3AwntUZFVdg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImYjlf7V7Oy96SRtQEwSLQibR4gua0enX5bA2YNljN0FsEVDeNgwChKEw/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImuwvONkLtchMwfiatIVM0o9G7SWuibZMxbicDRFicMwWBYvL3AwntUZFVdg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47wY7VMadCXlbxBAmIvC9ImdfyoMvicPtMuiaUUexY2K52tCJlKNWwPACtmplsjfF7jPBoiakJXXniaVw/640?wx_fmt=jpeg)

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