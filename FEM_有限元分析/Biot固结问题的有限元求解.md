# Biot固结问题的有限元求解


> 原文地址: [https://mp.weixin.qq.com/s/wSeSmAcZQyjgi97lXZvusQ](https://mp.weixin.qq.com/s/wSeSmAcZQyjgi97lXZvusQ)

![](https://mmbiz.qpic.cn/mmbiz_gif/kicB09lvgibnnRjv0AAqQxyBODIttZXnQqcTPoF4Pt8tJmnia4CHaYUS3zqicFfKZTWibXTAew2ibFHDjy5Pf8nDnVEQ/640?)

点击上方「蓝字」关注我们

![](https://mmbiz.qpic.cn/mmbiz_png/kLQoJJzjYaicxneNzbOg7ynx3TfnIwmNTpJQ7orkaUNrJIV4u7PNdSJ25Mtn6XdRQTamLDDicHnYfdic2bsiaNQjCw/640?)

近年来，多孔介质流固耦合问题越来越受到人们的重视。它在很多工程领域都有广泛的应用，如软土地基固结沉降，地下流体开采所导致的地面沉降，煤层气的耦合渗流和突出，边坡和坝基的稳定性问题，城市垃圾填埋及核废料处理，生物体软组织变形研究，等等。多孔介质流固耦合理论源自 Biot 的饱和土固结理论。本文以二维饱和土体的 Biot 固结问题为例，介绍有限元方法和 FEtch 系统在多孔介质流固耦合问题求解中的应用。

## 控制方程

### 微分形式

二维直角坐标系下，不考虑固体骨架和孔隙流体的压缩性，忽略惯性力和体力的作用，准静态的 Biot 方程可写成如下较为简单的形式。

**平衡方程**

**几何方程**

**本构方程**（平面应变）

以上式子可以简记为

其中， 、 为位移 的分量， 为孔压（以压为正）。 、 、 为应变 的分量， 为体应变， 、  、 为**有效应力** 的分量。 为梯度算子， 为刚度矩阵， 为单位矩阵。参数 为弹性模量， 为泊松比， 为渗透系数， 为水的容重。 、 为直角坐标系下的坐标分量。

**边界条件**

考虑两类边界条件:

第一类边界条件，给定位移和孔压

第二类边界条件，给定外力和流量

其中， 、 为边界上的位移， 为边界上的孔压；、 分别为边界上的外力在 和 方向的分量， 为边界上的流量（以流入为正）。 为边界上的单位外法向量。

### 弱形式

有限元模型的建立依赖于待解偏微分方程的弱形式。根据变分原理，对力学平衡方程 (1) 和 (2) 两边分别乘以位移的变分，并在求解域内积分，得到其等效积分形式

对上式进行分部积分，并代入边界条件，得到弱形式

将本构方程代入上式，即可得到以位移为基本未知量的弱形式。

对渗流方程 (3) 两边分别乘以孔压的变分并在全域上积分，得

对于二阶导数的部分，利用分部积分将其中的一阶导数转化到孔压的变分上，并继续代入边界条件，得

这就是孔压场的最终的弱形式。

### 离散化

对以上弱形式的力学平衡方程和渗流方程进行空间离散化，可进一步写成矩阵形式

其中， 为位移和孔压的组合向量 ， 为组合向量 对时间的导数向量， 为质量矩阵， 为刚度矩阵， 为载荷向量。采用向后差分法进行时域离散，可将上式改写为

整理得

为时间步长，上标 代表当前时间步， 代表上一时间步。该式即为最终需要求解的线性方程组。

## 算例1

**Tezaghi 固结**

Tezaghi 固结问题是土力学的经典算例。考虑厚度为 的饱和含水层，水平方向为无限长。底面为不透水边界，顶面为渗流自由面，孔隙压力 ；含水层材料为各向同性，其弹性模量 ，泊松比 ，渗透系数 ，水的容重为 。顶面突然施加 的均布载荷。不计重力影响。求 1 小时后土体的变形情况和孔压分布。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6ySkxQNr2ibGQeylFVngcMibsUssPbicSBMKhTYs0UTBTZq24ndCQUOvhQ/640?wx_fmt=png&from=appmsg)

### 前处理

进入 GiD 前处理，建立一个 的长方形区域，它的两个对角的角点坐标分别为（0, 0）和（0.2, 1）。网格剖分采用 8 节点等参单元。共使用了 40 个单元，165 个节点。

初始时间步长为 1 s，结束时间为 3600 s，时间步长放大因子为 1.05。

需要注意的是，Biot 问题的数值方法对时间步长的下限有要求，不能太小，否则容易发生数值震荡现象。具体理论请查看相关文献。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w63kyw7ZZT948RMyjhO53s7JFbIMTJagGkVbiaibSj352iae9yhzxvohuibQ/640?wx_fmt=png&from=appmsg)

### 计算结果

通过自动改变时间步长，变化范围从 1 s 到 167 s，总共使用了 107 个时间步。对计算结果稍加整理，效果如下。

**竖向位移的演化过程**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6IE4DN3Y2UwgLKMrgcdUFZGEg2tXWepVorf75fkms11Pp16fI81rO2Q/640?wx_fmt=gif&from=appmsg)

**孔压的演化过程**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6IhzS89ZuwXVYCl3VSia73m52Vd7W6H9F3ZULJvDJ8bOOOPMBHTe1jOg/640?wx_fmt=gif&from=appmsg)

**不同深度处位移随时间的变化曲线**

土体表面（蓝线）和 0.5 m深处（红线）的位移情况如下图所示，反映了外力作用下土体逐渐压缩的过程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w67AzjJxZcGJObEosKia7rONOEBfibS6gvUpic7iahkYtNx1J6zuiaLylgjXw/640?wx_fmt=png&from=appmsg)

**不同高度处孔压随时间的变化曲线**

选取深度为 0.1、0.3、0.5、0.7 和 0.9 m 的位置作为观察点，孔压随时间变化的情况如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6aH7Jv11kXaiaxXWbmuicpYN5NYNYrCia3JIRI6gWu5n7ciameP3VQZz6JQ/640?wx_fmt=png&from=appmsg)

进一步分析可以发现数值解与解析解符合得很好，进而证明算法和程序的有效性。

## 算例2

**圆柱土体固结**

一个半径为 的无限长圆柱土体，在其外边界突然施加 的均匀径向压缩载荷。圆柱体表面为渗流自由面，孔隙压力 。材料参数取值同算例 1。不计重力的影响。求 1 小时后土体的位移和孔压分布。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6VZpnfT7HUkagtVSGrEhvztUQtY96WMwu6sadoef2ngCXr1qExLLyiag/640?wx_fmt=png&from=appmsg)

### 前处理

进入 GiD 进行前处理。根据圆截面的对称性，取四分之一的区域进行模拟。网格剖分采用 8 节点等参单元。共使用了 300 个单元，961 个节点。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6orTR6u8sYZhBibFwkMdN8uqQj3lljezIAXk9dPH01R3Aic2fRGGO0YSQ/640?wx_fmt=png&from=appmsg)

### 计算结果

对计算结果稍加整理，效果如下。

**径向位移的演化过程**

径向位移 ，随时间的变化过程如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w657Kcs7hlziajDbrvRRhmfKia6iaQdutZ9mms6nXOfBUQXiaX7psvbbEMXw/640?wx_fmt=gif&from=appmsg)

**孔压的演化过程**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6iat2e2PTsgIlubKI43c2ymNPs7tomW28HuTHlp1o4651o531iaNBfKSw/640?wx_fmt=gif&from=appmsg)

**径向位移随时间的变化曲线**

土体表面（红线）和 0.5 m 深处（蓝线）的径向位移情况如下图所示，反映了土体整体逐渐压缩的过程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w6cyBxyLnxgkLpUeT6SicTZtLQYDNMF8ibCOrb2icLNxbkZmibbDF6dgpg0Q/640?wx_fmt=png&from=appmsg)

**孔压随时间的变化曲线**

选取径向距离 0.0、0.4 和 0.8 m 的三个位置作为观察点，孔压随时间变化的情况如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXQR3I7WibD3jW07R8YO39w66rqm3iaaEj8vZg8vTIQUevHR6Cxa7edXQjHemLxibld6L2yceldialq0w/640?wx_fmt=png&from=appmsg)

可以发现，较深位置的孔压有先上升后下降的现象，这就是著名的 Mandel-Cryer 效应。

进一步分析可以发现数值解与解析解符合得很好，进而证明算法和程序的有效性。

  

  

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