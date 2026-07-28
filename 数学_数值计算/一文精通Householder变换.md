# 一文精通Householder变换


> 原文地址: [https://mp.weixin.qq.com/s/Mc-rBREDCD0MGakJc-unZQ](https://mp.weixin.qq.com/s/Mc-rBREDCD0MGakJc-unZQ)

Householder变换又称镜面反射变换，能将任意向量正交映射至指定方向，是线性代数中实现正交化与消元的核心工具。

1. Householder变换的定义

对于_n_维空间中的任意非零向量**u**，沿该方向的Householder变换定义如下：

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicOwoViaaNr3jkSNhUKT77n4JNw4tLibaADMrXIsfJrpeEV8Pot8Bqu19w/640?wx_fmt=png&from=appmsg)

其中**u**称为反射超平面（镜面）的法线方向，也可简称为反射方向。

当**u****为**单位向量时，公式（1）简化为

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWic9FBQFqv5ZB4icgL2bSfMtxiawCHUXic2xXpvBs5PufAowr3Tu8glBoXuQ/640?wx_fmt=png&from=appmsg)

2. Householder变换的几何意义

我们分三种情况，详细探讨Householder变换的几何意义：

（1） 反射方向

沿反射方向的任意向量λ**u（其中**u为单位向量**）**，经Householder变换作用后符号取反，即

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicbGib0g2KUYDqsIOlJa5wFHjV3wj1G8Q9C1DVBIgsv1g4RfGwDytP7Zw/640?wx_fmt=png&from=appmsg)

（2）反射方向的正交方向

沿反射方向的正交方向的任意向量，经Householder变换作用后保持不变。对于任意与**u**正交的向量**v**，有

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicufyPtRP2ibYODeSATic1WeG6188oOy4ODY9qyp3SrLiaial34Y7lltbwzw/640?wx_fmt=png&from=appmsg)

（3）任意方向

对于_n_维空间中的任意向量**x**，可将其分解为反射方向分量与正交方向分量的和，即

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicyboCianUKhqziaibhpBNibtUIrMKgGRicBZp29PVm029iaTCIm5FKUEf53ug/640?wx_fmt=png&from=appmsg)

其中，**x**1是**x**在**u**方向的投影，**x**2是**x**在**u**的正交补空间的投影。

在Householder变换矩阵的作用下，**x**1的符号会发生改变，而**x**2保持不变（见图1），即

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicLD711UsATo5DHy8G9MHpp5N89P3VlLic7IaUu45lwWK4QicOHMYVTClw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicXeGYORVtAzicdyxet6jd7SaPoXmStSz25ia6icoeibcpI0kZ5pMRRIdkibw/640?wx_fmt=png&from=appmsg)

图1\. Householder变换的几何意义

3. Householder变换的代数内涵

我们通过构造法来阐释Householder变换的代数内涵。

在_n_维欧氏空间中，我们需要构造一个特殊矩阵，使其作用于空间向量时，能让指定方向的向量改变符号，而其正交方向的所有向量保持不变。

不妨假设，**e**1,**e**2,…,**e**_n_为_n_维欧氏空间中的一组标准正交基，且**e**1为反射方向。那么，我们可以构造如下矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWic1emMP36ZIDAn1YhURYLl36NWe7I3eLgeO2rnsWqgTcgbKvoZCPdPjg/640?wx_fmt=png&from=appmsg)

容易验证，上式中的矩阵必然满足上述要求，即

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4ZcLJMQWl84e2soXAqR7tBKmVbJ4G1Rp61Jr9f4CkUkOupDEhAplWJgjdGedP7KRoZyvesW48VBA/640?wx_fmt=png&from=appmsg)

令![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWic0x0DDl8hGxfstvYcNgHiaiclNO7Xf9sjPoIHn8Jc6f4qmyXHtb0dnM9Q/640?wx_fmt=png&from=appmsg)，显然**E**为正交矩阵，即

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWicyI1TAZCtNxocYMsEIxJeS8KibjBG8ST0ytFsEIz9S95MiaADCDAL6Prw/640?wx_fmt=png&from=appmsg)

由（4）得

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWic2WbOh0a8ygdWXicP2lX6ZG3fNlqpziarYluKypDT2QspK9x5ZI1Hp3Kw/640?wx_fmt=png&from=appmsg)

将（5）带入（3），得

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm6NibiamyOglPRYsvJA0aFcWics8p1y4XicWghjNTEtQcX7SwKOL8R6k05kzJv7Epb9zZ9RmibHwibN089Q/640?wx_fmt=png&from=appmsg)

公式（6）即为标准的Householder变换矩阵。由公式（3）可以看出，该矩阵有_n_个实特征值和_n_个相互正交的特征向量，且其特征值的取值分别为−1,1,…,1。

总结

本文从几何意义和代数内涵两个维度，系统探讨了Householder 变换的核心特性。从几何角度看，该变换本质上是沿指定方向的镜面反射；从代数角度分析，Householder变换恰好对应对称正交矩阵。

正因这些特性，Householder变换在数值线性代数中有着广泛且关键的应用，例如在QR分解、线性方程组求解、特征值计算等场景中，它可以高效地实现向量正交化与矩阵消元，大幅提升计算的稳定性与效率。