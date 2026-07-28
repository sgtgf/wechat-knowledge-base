# 基于六面体单元热应力问题的Matlab有限元编程求解


> 原文地址: [https://mp.weixin.qq.com/s/raY51I-jyvj2\_3MrIyEN2A](https://mp.weixin.qq.com/s/raY51I-jyvj2_3MrIyEN2A)

![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNDohHMOhIEvSgIG7bha3oWU7GWic4Msf0jCtcQQRvTAN3phJ4JctXBlR6lYzX22oLmw05hM7zhfbGg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

点击文尾阅读原文试看

**作者 |** **SimPC博士**  仿真秀专栏作者

**首发 |** 仿真秀App

![](https://mmbiz.qpic.cn/mmbiz_gif/KY3BXJeOPhbbcy2pMyJUOM8RRM7PA0Oobw5wwTQLwUjIFkqY8sr52rjbpricODJ7RZibQ7ZOOmoibyBKnHNwAWdeg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**导读：**上一篇《[弹性地基梁matlab有限元编程，以双排桩支护结构计算为例](http://mp.weixin.qq.com/s?__biz=MzI4Mjk2NzQzMQ==&mid=2247528048&idx=2&sn=82f8a367be3b4e7612c89583598d0cf2&chksm=eb93c298dce44b8e5f2aed306427ede0fcbb3048e686ae64bf82c7e063a1f949b875fbe7ecaf&scene=21#wechat_redirect)》引起了Matlab有限元编程学习者的共鸣。今天我想和大家讨论一下热应力问题（六面体单元）matlab有限元编程问题。

本案例主要介绍热应力问题的matlab有限元编程及原理。热应力也叫温度应力，后文提到的热应变也叫温度应变。这里需要与传热问题的有限元分析进行区分：可以认为传热分析是进行热应力分析的前提条件，通过传热分析来确定温度场，在获得温度场的基础上，计算所产生的热应力。所以本文为阐述热应力问题前提是假定温度场是已知的，我们并不关心温度场是如何得到的，那是热传导要解决的问题，在这个已知的温度场作用下，由于热胀冷缩会产生响应的热应变进而产生热应力，如何求解这个热应力，这就是我们这次课程要解决的问题。

如图1所示，本案例的分析对象为一个两端固定约束的四棱柱受不同方向的热应变作用下产生的应力应变，在用有限元方法求解热应力问题时，温度作用可以等效为一个节点载荷进行求解，因此热应力问题本质上还是一个固体力学问题的有限元求解，而我们刚才提到的传热问题的有限元求解其实是在求解傅里叶传热偏微分方程，其与固体力学偏微分方程是完全不同的两套理论。

因此，本文首先重点讲解的温度作用产生的节点等效温度荷载有限元列式的推导，六面体单元刚度矩阵、雅各比矩阵、应变矩阵有限元列式的推导，温度应力应变的后处理有限元列式，此外还包括上述有限元列式对应的matlab代码实现过程。

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WB7dWNYDTkbfTnqwAG8exnv2FKZSTlbCrCb5ch72cnvEOb1YkL4Xiarw/640?wx_fmt=png)

**图1 两端固定约束的四棱柱受单位热应变作用下的应力**

假定通过传热分析我们可以得到，相对于原来状态温度升高了![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WZ2q5HeXHcn93cIiaP7VV7odTopSQxkVFU7u67BwUoAquUM2Jxwcr5YQ/640?wx_fmt=png)，对于各向同性材料，温度升高![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WL7xlG04htfkPsGOG2l5LGib7pwEUWdw1S70Ngp449uRwMb9FrIOdHDA/640?wx_fmt=png)会产生一个均匀的应变（通俗地讲，就是热胀冷缩原理，物体会发生膨胀），应变大小与材料的线膨胀系数![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WYGdrgrtB35sJ2Gm4clNhwQ1RUwzfSkPI2VYNMf1PExsZOQzuBU6KVQ/640?wx_fmt=jpeg)有关，![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WYGdrgrtB35sJ2Gm4clNhwQ1RUwzfSkPI2VYNMf1PExsZOQzuBU6KVQ/640?wx_fmt=jpeg)表示材料在单位温度升高所引起的长度的变化值，一般情况下，在一定范围内可以假定线膨胀系数为常数。若物体能够自由变形，则由温度变化引起的应变不会产生应力。温度应变一般被表示为初应变的形式

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WXpnJ0xPywSEBMjxBWE7EWekrNsVMXwuib4pd1LiaCuDUnTfa5FuIKKjQ/640?wx_fmt=png)    （1）

对应的应力-应变关系为

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WymF8Vhv5gFxU9MKVIJk7iaFOztg8qGwBwvibTibCVTLse0eFhZZwAakwQ/640?wx_fmt=png)        （2）

接下来将公式（2）的应力应变关系代入到有限元分析列式中，利用虚功原理进行推导。其中虚应力和虚应变场函数的有限元列式如下式

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WaA4bvypaGb24EmKxicSHZOkHLez0iaGrPIrsyFdibI5tiauHd91KKEw1uQ/640?wx_fmt=png)           （3）

将公式（2）利用虚功原理，可得到下述虚功方程

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WhPib2MkccmFnGbmj7CMIfYQUptAVVrTB4xKLK5prAMrpOrjkez90zAg/640?wx_fmt=png)      （4）

将公式（3）代入公式（4）所示的虚功方程中，并对其进行简化处理，可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8W59XL6en45AKhPiadmAibwwz1GWGUZVzicZ8e9G7BSMPjKIpp2Y4dpWFnA/640?wx_fmt=png)    （5）

因为虚位移存在任意性，因此可以除掉公式（5）中的虚位移，进而得到

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WFUxV5JEFmSBMk8bqHwIsMl4icCqErdf3Cn3SBia3ibkOSdKCqlNpuVUYw/640?wx_fmt=png)     （6）

其中Ke为刚度矩阵，表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8W9y9bEOQATPLaZr2icnU1Tf4ne9oJGqE3o19lroXbqSORdFH4L0H5tRg/640?wx_fmt=png)       （7）

![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCicknynicWaAPHImrp6SQk8Wo0JgWPjqKvRGkNia1nWzjDz8xjJek51Tia7E1PhL1Tm5HM8GlqKcA8ibw/640?wx_fmt=jpeg)为单元节点载荷，表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WGLD1a5ubqibHZoVvZTt9qvyZXCgIZtT69wlW0FeR526RibzE4SD7gLvg/640?wx_fmt=png)      （8）

为等效温度载荷，是由热应力引起的节点处等效温度载荷，表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WHiatwMX3ibic01G4RkL7h3gjJEyf8Z544BDK7ATFZb5EmrxjuGWQlMveg/640?wx_fmt=png)        （9）

因此，对于温度应力问题，核心就是求解等效温度载荷。因为公式中包含了B矩阵，即应变矩阵，对于六面体单元应变矩阵的推导过程如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8W9gCibf7hrZmn3ou5DS3pl6BOPMRxSksZ4hjT7aZKC2S2FibY3poFibRGw/640?wx_fmt=png)

**图1 应变矩阵与刚度矩阵的推导公式**

基于图1所示的应变矩阵的推导过程，公式（9）中等效温度载荷对应的matlab代码如下所示，此外本段代码同样包含了单元刚度矩阵的编程实现，因为等效温度载荷和单元刚度矩阵的求解公式中均有B矩阵和D矩阵参与。

```
for X=1:2
```

上述代码中，求解雅各比矩阵行列式和形函数导数的ShapeFunction函数的matlab代码如下所示：

```
function [N,NDerivative,JacobiDET] = ShapeFunction(GaussPoint,ElementNodeCoordinate)
```

单元刚度矩阵和等效温度载荷求得之后，将其装配到整体刚度矩阵和荷载向量中通过高斯消去法实现节点位移的求解，求解之后的节点位移按照下图中的后处理流程和对应的公式，即可求解得到高斯积分点处的应力应变值，需要注意的是如公式（2）所示单元应力的求解公式中包含了温度应变；下一步再通过插值函数矩阵将高斯积分点处的应力应变插值到每个节点再进行磨平处理，即可得到节点的应力应变。具体matlab实现代码如下所示：

```
InterpolationMatrix=zeros(8,8);%求解节点应力应变的插值矩阵
```

上述便是热应力问题的整个求解过程，以一个两端固定约束的四棱柱为例，其在不同单位热应变的作用下的求解结果如下图所示

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCicknynicWaAPHImrp6SQk8WqNrDbX4Mh2PSerSd1w6ibqHAib9My9e4Cg7c8vBs2Y5nC4pMTricd7GYQ/640?wx_fmt=png)

**我的Matlab有限元编程精品课**

推荐大家关注我的原创视频课程里面《[Matlab有元编程从入门到精通](http://mp.weixin.qq.com/s?__biz=MzI4Mjk2NzQzMQ==&mid=2247550237&idx=1&sn=c0d259918b2f780b2c8d9869444d2801&chksm=eb93a9f5dce420e3c84059579329caf3191c2931c7dc9b564dfc19d49b16f5a0bcdcd1a4fc0f&scene=21#wechat_redirect)》目前加餐到第35期。我还会持续更新，强烈推荐学习者订阅。

![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEawgUczMl3WhB04hdOaNB5EqMSiacLF7gN6lDn5EibMOurCO7NOPicT3xg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**上新优惠价****（限1****0名）**

**限时特价：****449元****（****原价：****499 元 ）**

**可开电子发票，赠送答疑专栏**

提供**vip群交流，课程可反复回看**

识别下方二维码，**立即试看**

![](https://mmbiz.qpic.cn/mmbiz_gif/ibn9IvQV94yZJ7NFBDlldTiapoFTm9eX0gIxwvsLE2Cn3pkqAARJHFnjCgwxREUg3RWZxVhUDvo7jYOSiblTcC3Zg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXekAp9ichqaXu3Ro7TbCUZKPmicFiaYftMdBqxzfYqgfX8JhN3k6GuqyRMMibv7w9m6eO8vAhOibiaPrUQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**本课程为matlab有限元编程专题课**，课程主要以**案例的形式进行讲解，**中间会穿插案例中所涉及到的**有限元基本理论**，案例不局限于力学问题的有限元求解，还会涉及**传热学、电学**等问题的有限元求解。

**喜欢****作者******，请点********赞********和在看******![](https://mmbiz.qpic.cn/mmbiz_gif/6BxCiaoAkhCpmWx6ic8Sg6X6PXsnJWo7a3hOSHEicIvYJO3nOPdf6GiaqmlM1gXnia8Ppu76xY0hiaTBXSjQNRsr6Dkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)**

**![](https://mmbiz.qpic.cn/mmbiz_gif/pn1AOBGTwDVWGtThsMX1L4lk0EffmPg1BKAYaooibsaRwoYMzqxhJ1seOlZialOpryLocgAFt7Yb97uwwseMCLxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)**