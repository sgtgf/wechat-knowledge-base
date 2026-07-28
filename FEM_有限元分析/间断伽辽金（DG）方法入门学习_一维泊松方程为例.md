# 间断伽辽金（DG）方法入门学习：一维泊松方程为例


> 原文地址: [https://mp.weixin.qq.com/s/yyw0R5dp\_\_ryUkC5F-4qOg](https://mp.weixin.qq.com/s/yyw0R5dp__ryUkC5F-4qOg)

简述

传统有限元法（FEM）的解在单元界面是强制连续的，间断伽辽金（DG）方法的核心思想是放松连续性约束，在每个单元上独立地使用局部多项式空间逼近解，允许解在单元界面处跳跃。

边值问题

考虑一个简单的一维边值问题，即泊松方程：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBQ5MOvStCXvQibkwLS2QbwAJzjfanBZuoiazScbRomiaf3UVnICf4cbQ8A/640?wx_fmt=png)

齐次狄利克雷边界条件：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB0rLmuzQdOfM4XNHY4Jj8s0bkTjiabGQicPfTcFORibSkfUVOyujUFRv7w/640?wx_fmt=png)

虽然该问题是光滑的，但是作为学习入门，不可失为一种很好的方法。

网格划分与基函数

这里考虑足够简单的1阶基函数，这部分与传统有限元一致，首先将求解区间 \[0,L\]划分为 N个单元：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBwgyQb6VfxU6vmEjw4mdfqFrh1165iaIo5PicJDXicQhH1GKhdvh3hAiakA/640?wx_fmt=png)

设均匀网格 h=L/N。在每个单元上，使用线性多项式近似，也就是传统有限元的1阶基函数：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBOXOCr9k5iaMuNqQl1n0etWsSicgFcKf4dW6iaZmZYVF7Byn7oIyZNJFpg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB6hyAra0LkqhjmQaicvaGB7ODy968YHvjD7hoKCooCpoeIQeeXRGykXQ/640?wx_fmt=png)

其导数为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBooNF7OjBMyybvBph6ZAJgWbPjX6Uw6VzJSOCmAaLcQJMxe3etsv6DQ/640?wx_fmt=png)

网格剖分与单元基函数的选择与传统有限元完全一致，并没有任何差别。

DG推导：系数矩阵的边界项

确定网格和基函数后，接下来就是系数矩阵组装，这里和有限元有相似，也有本质上差别。

首先是微分方程到变分问题的推导，这部分与传统传统有限元一样，推导得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBiaxDM27ObxBrcPdU3ic73dibrmQVGMOle8a4Asf8ZGcExJ4yKXiaiaibWvgg/640?wx_fmt=png)

在传统有限元中，解是连续的，内部界面处的边界项会成对抵消，此时上述的边界项在内部单元一一抵消，只剩下研究区域的外边界。

而在DG中，不允许它们抵消，因为解uh和其导数du/dx在界面处可能不连续。此时DG在边界上引入一个新的量来代替边界面上的不确定性，即数值通量，q.n来代表边界上的通量。它表示界面两侧解信息的某种组合：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBNnxO3N2NicM09zbibPHFib0KeIY9WhXAoooRkr2cxKOlL7TyzIR8wdPgQ/640?wx_fmt=png)

这里，n是界面的单位外法向量。在一维情况下，n在左边界为-1，在右边界为+1。数值通量的选择不是唯一的，不同的选择对应不同的DG格式。这里选择一种最流行、稳健的格式：对称内惩罚法。

选择SIPG格式定义数值通量：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBmYfmMSlDdoTPXNgB53VDAicJEQHMScULhQU7tUMhPQC2DNrIZs18XnA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB96IvauS4ICJpRPenWricHtdibfCoNbjgE0pFf7NvVS3YyN0RG7QGdGCg/640?wx_fmt=png)

作用：保证一致性。设想如果精确解是光滑的，那么在界面处左值梯度和右值梯度的平均值就等于真实的物理通量。这确保了我们的离散格式是原始方程的一个真实近似。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBagrxHlxzpofrz2DuWoM9iawjAo8OXP8lFpWPhgCthANFL3LWpxOntxg/640?wx_fmt=png)

作用：保证稳定性。它像一根“弹簧”，惩罚解在界面处的跳跃。跳跃越大，这个项产生的“恢复力”就越大，从而防止解出现非物理的振荡，并保证解的唯一性。

将数值通量带入到全局方程中，乘以试探函数，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBJGPEV5swZzpwhwPrWmr7CRpslGCpl48fzCBSwhzat34tick5HpFVbkA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB8iaTb71eh1hvejeX0EyPHNkYaOw0mPc3bOMe2neHKEkZ5rjwaUicOspA/640?wx_fmt=png)

如此，得到DG的实际离散方程。

具体案例推导

以两个单元为例，展示如何将上述弱形式转化为具体的矩阵元素。对于上述边值问题，当网格仅两个N=2的时候，h=0.5。此时网格与单元基函数可以直接表达出来：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBdwGHGl4K0NJFv7YbEAEvQ1VzL8ibGmicOEQAzDYyJiavmibmmLfvTVDRLw/640?wx_fmt=png)

单元1的线性基函数：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBbAVUTP5nicNiaW81ibria6RiaIx7l4IXy6xBEfF3TVCEHCLCicAjNZfgm1mw/640?wx_fmt=png)

单元2的线性基函数：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB6d2v4YN9XWYOoibzib0neDSa8YI1WChH2t0LvMibWXNViaw6ohK9sDpsrQ/640?wx_fmt=png)

未知数向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBHJSHILjy8P8lKBC4JbicrAib34iapyzrpicGAKuT8hVDOR6IickF5AvtRzg/640?wx_fmt=png)

此时可见，内部边界面是x=0.5位置的点，通过管理单元1右值与单元2左值来耦合两个单元。

第一步：按照传统有限元获得每个单元系数矩阵并组装不含有边界通量的系数矩阵。单元刚度矩阵公式与传统有限元计算方法一致：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBgIibRz86RWactdNx3OY29BklUkibeqLj7Qyc8PNEpl0buNpN7gAaM9FA/640?wx_fmt=png)

由于1阶导数，并且均匀剖分，因此对于这两个单元，其系数矩阵是一样的，推导可得：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBibUUibY99N9NIHyqe6sUDATVtqda0EeU1xiaLy1WFu2NzLKYznyK16KHQ/640?wx_fmt=png)

组装整体系数矩阵为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBflhBz2Ya4N46Neunu0aXsTXWiaV4jzgZPw8mRELjVd4mLhdLjkmP5rA/640?wx_fmt=png)

这里可见，与有限元的本质区别，这个系数矩阵的单元1和单元2并没有任何耦合关系，二者是完全独立的。

第二步：接下来就是DG的核心部分，推导界面项矩阵。

首先，我们设定公共法向 n指向正方向（向右），因此在界面分界处，有：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBQIBWxzBEzJiaRQDc1ThpWxzg8mXIo5kVhDKL8cf7PytFs2zG9B2VaUQ/640?wx_fmt=png)

因此，跳跃项为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBuIsQs8r8W3Xrb3r2MFEjDWdmyZIgBzR1xMDk6xHSEiaSHd4904Yatzw/640?wx_fmt=png)

平均项为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBLoia4TFEWHf1ZhGWmibTmkfT15ntB2rb4W2FNGw6Yct7DMhwmMssCAnQ/640?wx_fmt=png)

进一步推导惩罚项矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB1YnDNIiaSTbsd5ibLz3sRiaawVL6IsUY67YMgzncYFsBvZhj1PHlUwNKA/640?wx_fmt=png)

取sigma=3，得到惩罚项的矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBqWWz2nA2hibhicGAlErKA1K5tgL2Dtu0WdWjpiaEkpgVr8wxceklUg2Ug/640?wx_fmt=png&from=appmsg)

一致性项与对称项矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBicof7kWl5rAG5MrmhiaFDpuxLREfZdYhst3Qliaa6DrxsebCoqEE8bbpg/640?wx_fmt=png)

带入到一致性项中，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOByveyaj80aQTFQSEIsIoeQ0ZtnbE4fvLHA104StbY2aicFGF1a5ialaww/640?wx_fmt=png)

忽略掉与当前边界面无关的项：left u1 和right u2去掉，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBJkiatCGsPmVglXXzibVyPLpxh9iaYHXwIQJAylzvJnNYzDo442UQd5VBw/640?wx_fmt=png)

因此，整理整个界面上的矩阵：惩罚项、一致性项和对称项，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBq18LSNq3gPNmiaakqF2BlTTZC4Ucx6XJarib83Bf4tBIuTcUicpmBSkzg/640?wx_fmt=png)

将之前的全局系数矩阵加入界面矩阵，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBdW5vCcVy443kZia32z24aQgyS5dlqHdnqz2Dp21sdiars5V3DUNNRhwg/640?wx_fmt=png)

最终，得到加入了边界项后的系数矩阵。这就是整个间断伽辽金的系数矩阵的组装过程。

右端项与边界条件

组装好系数矩阵后，继续处理右端项和边界条件，这部分的组装方式与传统有限元一致，需要注意是组装过程中，右端项也是不进行强制耦合，例如上述N=2的例子，单个单元的右端项为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBIWSEtnPIP9w6uUxP0Bwjmt6CIricpiakbNKBsCVBNkAXm8KGlg5M8qhw/640?wx_fmt=png)

当f=2,h=0.5的时候，组装整体右端项：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBicFyPicl2bUHmKFTNa6RjmXEdspxI9XsTRI6AMzTmABKofzXgN7NhbVw/640?wx_fmt=png)

加载边界条件与传统有限元一致：乘以大数法或者去除边界项，这里采取第二种方法，得到的最终的线性方程组为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB0e8wfeqo5FOAnKNz7zwz2858aukqmVrDGWWwv5JZQCPZT8szHfMWwg/640?wx_fmt=png)

实现线性方程求解器，求解得到结果为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBx5XfBzdQwJyLFAsadnLkeSUhm2C9POHVI9lz4BamTzqkWickqc5xlMQ/640?wx_fmt=png)

以上即使整个一维DG算法的流程。关键在于边界项位置的耦合方法。

测试结果

对于上述案例，当N=2的时候，结果已经给出，当把N=8调整大，得到结果：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBT16PVnOG4SvZe4u5wDOz0ictvWOibNYnh2YibwcBYAxSkAjCZRaFVVp8Q/640?wx_fmt=png)

此时发现，虽然结果是在边界是间断的，但是单元内的数值与实际结果差异很大，这时候调整sigma=10、50，得到结果：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOB0kxnJ0UcKGISF8fFx1Q96ibXia9ZEVJ1ovgD9IB7h9BOBwib89b9iaG22w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoWpWp1juqJ5n0cKgILzsOBDS5NrOEFdEYMehnge1Jiat5t6HaH1gRjS0YEehPiaPN4UhXBRvEuFAibw/640?wx_fmt=png)

可以看出，随着惩罚项逐渐变大，该结果与理论结果基本上一致。并且在分界面上可以看见是不连续的。但是如何选取合适的sigma参数，还需要进一步研究。

总结

本文对间断伽辽金（DG）法进行了入门级介绍，大致说明该方法与传统有限元方法的区别在什么地方，更加深入的研究还需要进一步学习了解。

与有限元相比，传统有限元是全域弱解形式，单元之间是强行连续的；而间断伽辽金是单元弱解+通量耦合的组合方法，放松了边界的连续性条件，允许边界上数值通量不连续。

* * *

博主长期深入实践电磁学领域的有限元数值仿真技术，感兴趣的朋友可以添加博主公众号，欢迎共同探讨与有限元相关的技术知识。