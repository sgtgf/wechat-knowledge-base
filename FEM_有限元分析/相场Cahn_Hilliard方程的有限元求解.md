# 相场Cahn-Hilliard方程的有限元求解


> 原文地址: [https://mp.weixin.qq.com/s/pwN\_ivF-B8DIMd4ERPF2zg](https://mp.weixin.qq.com/s/pwN_ivF-B8DIMd4ERPF2zg)

![](https://mmbiz.qpic.cn/mmbiz_gif/kicB09lvgibnnRjv0AAqQxyBODIttZXnQqcTPoF4Pt8tJmnia4CHaYUS3zqicFfKZTWibXTAew2ibFHDjy5Pf8nDnVEQ/640?)

点击上方「蓝字」关注我们

![](https://mmbiz.qpic.cn/mmbiz_png/kLQoJJzjYaicxneNzbOg7ynx3TfnIwmNTpJQ7orkaUNrJIV4u7PNdSJ25Mtn6XdRQTamLDDicHnYfdic2bsiaNQjCw/640?)

Cahn-Hilliard 方程作为一类重要的 4 阶非线性扩散方程，是相场建模中的经典方程。它最初由 Cahn 和 Hilliard 在 1958 年研究热力学中两种物质之间相互扩散现象时提出，已广泛应用于描述生物种群的竞争和排斥、河床迁移过程、固体表面微粒扩散等物理现象。

本文以二维 Cahn-Hilliard 方程为例，介绍 FEtch 系统在求解相场问题中的应用。

## 控制方程

### 微分形式

对于域 ，Cahn-Hilliard 方程为

边界条件为

初始条件为

在这里待求变量 为序参量(order parameter)。 和 为常数。 为系统自由能，是序参量 的函数。

由于一般的有限元方法只考虑在单元内计算待求变量的一阶导数，上面的四阶微分方程在一般的有限元方法中是没法求解的。为解决这个问题，导入一个新变量，即化学势函数 。这样，方程 (1) 可分解为以下两个二阶微分方程

### 弱形式

待求变量为 和 。根据变分原理，Cahn-Hilliard 方程的弱形式为：求解 满足

## 算例 1

本算例取自参考文献 \[1\]。考虑一个二维的 的正方形区域，四周为**无流出的自然边界**。

初始条件为： 值随机分布，取 ， 值为零。

模型参数为：，，。

求序参量 在   内的演化过程。

**建模和网格剖分**

采用通用前后处理软件 GiD 建模，并将网格剖分为 40 × 40 个线性四边形单元。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXJ18eYIkPkyAuDAtMMYWzgKibNMyAbKiaYNYJfkNBjVwuNkOtAeDZbxYq1yIjziaFlzQzYDIbnqAWbQ/640?wx_fmt=jpeg&from=appmsg)

### 计算结果

时间步长取 ，共 1000 步。对计算结果稍加整理，效果如下。

**序参量的演化过程**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVXJ18eYIkPkyAuDAtMMYWzgyh9eMegrPjKA3IRfkiaBZicYugIQ3aOgicsC39zq7cvc9FcUwDPJkDibTg/640?wx_fmt=gif&from=appmsg)

**模拟结束时序参量的分布**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXJ18eYIkPkyAuDAtMMYWzgib59fk0LG2hT85uxlpP0PFkdzia4y7eZBtVZ0tibwHrFkp4Bx4Tj5gGHw/640?wx_fmt=png&from=appmsg)

该计算结果可以与参考文献 \[1\] 和 \[2\] 比较。由于采用的初始值、网格数和计算方法的不同，计算结果略有差异。

## 算例 2

本算例取自参考文献 \[3\] 的 Case Study-XI。考虑一个二维的 的正方形区域，四周为**周期性边界条件**。

初始条件为： 值随机分布，取 ， 值为零。

模型参数为：，，。

求序参量 在   内的演化过程。

**建模和网格剖分**

采用通用前后处理软件 GiD 建模，将网格剖分为 40 × 40 个线性四边形单元，并对边界节点施加周期性条件。

### 计算结果

为节省计算时间，本算例采用自适应时间步长策略。初始时间步长取 ，共使用了 467 个时间步。对计算结果稍加整理，效果如下。

**序参量的演化过程**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVXJ18eYIkPkyAuDAtMMYWzgNXXchkYGNvnJYUjtibjts3naicibd1XJy3rUNfYn2kks1ktgqLZXvBibYw/640?wx_fmt=gif&from=appmsg)

**模拟结束时序参量的分布**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXJ18eYIkPkyAuDAtMMYWzg7cicU1lvsaFOTWHhbrGVxggbqY9gAM9nRwVuRIfTU2icIgV5ZMQstONA/640?wx_fmt=png&from=appmsg)

观察发现，计算结果完全满足周期性边界条件的约束。与参考文献 \[3\] 计算结果进行比较，整体符合得很好，充分证明了算法和程序的有效性。

## 参考文献

\[1\] Cahn-Hilliard equation — FEniCS Project. https://fenicsproject.org/olddocs/dolfin/1.3.0/python/demo/documented/cahn-hilliard/python/documentation.html

\[2\] Cahn-Hilliard方程的有限元求解. https://zhuanlan.zhihu.com/p/341191075 

\[3\] Biner S B. Programming phase-field modeling\[M\]. Switzerland: Springer International Publishing, 2017.

  

  

**往期推荐**

[

**一图读懂 FEtch 的工作流程**



](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484242&idx=1&sn=2a466b3d5070c1b304e651802fea1935&chksm=c3379728f4401e3ea99bd94415da1bb7b51a747a79b49b83529abc75100adddadf2eef86c95a&scene=21#wechat_redirect)

[

**谈谈有限元程序开发，兼谈 FEtch 入门**



](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484241&idx=1&sn=75293632dd989a5060fb4c803ca54b3a&chksm=c337972bf4401e3d2334e5a5e4a403bd4b9bffbb599e5626680ab56e9a67f3a2dd2e8a4129ae&scene=21#wechat_redirect)

[

**通用前后处理软件 GiD 简介**



](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484077&idx=1&sn=f91b124c472bc374439266d2fe28c394&chksm=c33796d7f4401fc1839829cd4211644369b8ff835bd043188dd758f3b0bf84e6df802814bfda&scene=21#wechat_redirect)

  

  

## 推荐阅读

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg&random=0.2312854885901674&random=0.7034958920451049)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。

我们长期开展 FEtch 系统的试用活动，欢迎私信交流和扫码咨询，免费获取**许可证文件**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVWOboiawHS9a0aZP73ss6jaKwHtTRFgyVZWmADYcYibSN0SVa6JMZFTtPziaBdnnkaEK7r9IPLicM5MdQ/640?wx_fmt=png&from=appmsg)

**喜欢****作者******，请点********赞********和在看******![](https://mmbiz.qpic.cn/mmbiz_gif/6BxCiaoAkhCpmWx6ic8Sg6X6PXsnJWo7a3hOSHEicIvYJO3nOPdf6GiaqmlM1gXnia8Ppu76xY0hiaTBXSjQNRsr6Dkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6459285066781566&random=0.9039664113437702&random=0.10616299980642463&random=0.37943585876598473&random=0.7246305284075434&random=0.1820491079508062&random=0.3136645327514245&random=0.8290227030922905&tp=webp&random=0.5243579855146836)**

**![](https://mmbiz.qpic.cn/mmbiz_gif/pn1AOBGTwDVWGtThsMX1L4lk0EffmPg1BKAYaooibsaRwoYMzqxhJ1seOlZialOpryLocgAFt7Yb97uwwseMCLxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.90499299240585&random=0.7427014598159356&random=0.6203706698189717&random=0.17266143983420013&random=0.4502076552242009&random=0.3348111146987862&random=0.5857982594073723&random=0.5924137199896844&tp=webp&random=0.47123292578677933)**