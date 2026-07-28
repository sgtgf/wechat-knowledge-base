# 奇异值分解SVD系列08---数据降维，主成因分析（PCA）原理及简单实践


> 原文地址: [https://mp.weixin.qq.com/s/LaFUGpzF1yl-mQ\_DshBR7g](https://mp.weixin.qq.com/s/LaFUGpzF1yl-mQ_DshBR7g)

**一**、基础原理****

主成因分析(Principal Components Analysis,PCA)的目是用较少的变量来代替原来较多的变量，并可以**反映原来较多变量的大部分信息**。例如，平面原始数据集是需要2维数组来存储的，但降维之后，只需要1维数组就可能存储。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYE2KcuoHc9hnhtks6V3oibYJ6tlKCwf6c8tuaw4gaaibIFHhbs1vicxo7A/640?wx_fmt=png&from=appmsg)

**1、去中心化**

那PCA就是要找出新坐标系。那什么样的新坐标系才符合要求呢？假如能找出**数据最分散的方向**，那这些方向轴组成的坐标系不就要找的新坐标系吗？

当然首先需求出平移矩阵的参数，就是求各变量的平均值，目的是为了将坐标原点放在数据中心(所以称为平移矩阵)，后续的处理都是基于去中心化后的数据集D'。

**2、回顾线性变换(拉伸与旋转)**

前面我们讲过矩阵的本质就是线性变换，下图中对白噪声数据集D(方差为1，均值为0)的拉伸、旋转变换可以用矩阵S和R来表示。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYF6bkX84UnMgcQ6nlx1BBOxWHpRia4qvfYFehcib0EBraogTicquSbaRVA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYztKCbOs70BYicj9VMicg5DSw9iaumHj9Bp5zuot9QsYrC2kdDrbHG1D9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYWbuSic0amXPwQaEVeK1IPeRzc5R4nqtBqdYsghPeTa8HK1yialcXJMUA/640?wx_fmt=png&from=appmsg)

所以，**所有去中心化后的数据集都可以看成是白噪声数据经拉伸、旋转变换后得来的，且也可以反向变回去**，如下面3张图所示，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYg2ibqh044LXO3yw9Ea1RRPNic6JTq7kSOgqY7BicN8dtFicSQGb03RfUxg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfY8YcWTicpC5w18ym1JQG2rynCsCQIiaUtREhhPU26PJSickfkenK1iae3Jw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYmAte2xkDBc2WcqkYIV0KicBNlrjpR3icVvkFoRvVfOPcicibxkeWZiaHwrw/640?wx_fmt=png&from=appmsg)

**3、回顾协方差矩阵**

那怎么求R与S呢？幸运的是，**数据集D'的协****方差矩阵的规范正交特征向量为列向量组成的矩阵就是R，特征值就是S中各分量上拉伸系数的平方**。首先来回忆下协方差矩阵。对去中心化的数据集进行拉伸旋转变换，其协方差矩阵会变化，如下图所示，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYmPMtvc3MT8IaGyQib92eU0OYiaW2cOxUrk42ygtgnjic4n1rg8cpWNxAQ/640?wx_fmt=png&from=appmsg)

基于去中心化后的数据集计算协方差矩阵：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYeKkXoGjUNiaImWTR9icuiarETojttPricTc6loIlgAfCLfqjSYe7pr0PQw/640?wx_fmt=png&from=appmsg)

**4、协方差矩阵C'与旋转矩阵R和拉伸矩阵S的关系**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYN24xxAopcqzLZ9sTibmJc57qUFhldrdo9WzV0j5RgtU6YLpow5gwN1w/640?wx_fmt=png&from=appmsg)**4、协方差矩阵C'的特征值/向量与旋转矩阵R和拉伸矩阵S的关系**

协方差矩阵C'正交规范化的特征向量可组成旋转矩阵R, 特征向量的平方根（可以为负数）就是拉伸矩阵S中的对角线上的拉伸系数（读者可以思考下这个问题，协方差矩阵的特征值都非负？）

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYLuLOwpYz4WgkiaPR0R9tHB9KNH501Oz6FmaCCQf4ibVo2NZ32N5VQG7g/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYToWLia51zwx1XXkwWA8SbqNn7GsWg2lDNQh5dRyH15Oxib5jNDPuwMMQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYZsGMuhhveMIBF0useutOGTomicxJIkIZBDA5niatLQzGJoPZ4Z890ZcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYqH1SIx93yHA58icQiaXbaQEn89ZVm4Gic9RVOLAFxrDrdX6MxfTHqfoNQ/640?wx_fmt=png&from=appmsg)

协方差矩阵C'的特征值为主轴方向上的方差，也是去中心化后的数据集D'在R构成的新坐标系下的协方差。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYcib8mXUbtfBaMraBUYKF6vQHKiaqictcFBz8bGsmepA6Ep6vkfI5aiah8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42dqJNppwGcaNvZsxvJDRfYIic8EhGwMHpiaB08ZXezckPZsNep1rFKAkcvnqfCT3T882ugkpltLM1A/640?wx_fmt=png&from=appmsg)

**5、求降维后的数据**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDiakbTBJhcLXufZtlR2Y6jqf7nJ0GnTs4Av7aqpic6gGuNcnlT69dFwUg/640?wx_fmt=png&from=appmsg)

****二、求解步骤示例****

现在假设有一组数据如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDkDkzn5GYgRaGlnpEvRicoPt98kVMWz5G5Knn3tZ8dS9m2CUsJMCTLUg/640?wx_fmt=png&from=appmsg)

列代表了样例，行代表特征，这里有10个样例，每个样例两个特征。

编程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDQPBsL6nRFl38FImoGcxKTRDYticBOJ4Yvic65JicpATg0CIQqeXPbQ8iag/640?wx_fmt=png&from=appmsg)

  **第一步**，分别求x和y的平均值，然后对于所有的样例，都减去对应的均值。这里x的均值是1.81，y的均值是1.91，那么一个样例减去均值后即为（0.69,0.49），得到：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDBvdiakC8dt3VPA88tBQb5KdyDoLowicsge59dAib3k9wpr94hB7KicKRqw/640?wx_fmt=png&from=appmsg)

**第二步**，求协方差矩阵

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDMwpGkLZSy10oSoeDdoumSsd6DYKB2jgiaQDzCoeRRegIDmDylWRccag/640?wx_fmt=png&from=appmsg)

 **第三步**，求协方差矩阵的特征值和特征向量，此处为了让特征值按大小排序，我们直接用SVD分解的方式求特征值与特征向量，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDO1TTwcn7icFfU6q0OBMsXqsRxib7pRDZ00BbcA6nWvh6ADC4euXceXuA/640?wx_fmt=png&from=appmsg)

将特征值按照从大到小的顺序排序，选择其中最大的k个，然后将其对应的k个特征向量分别作为列向量组成特征向量矩阵。 这里特征值只有两个，我们选择其中最大的那个，这里是1.2840，对应的特征向量是(-0.6779 , -0.7352)T

 **第四步**，将样本点投影到选取的特征向量上

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDL2icQLCosRpYlK7Cd9C3QvUURQLNIhcuXmWU3oggFhyZ4pxWbKDicurA/640?wx_fmt=png&from=appmsg)

这样，就将原始样例的n维特征变成了k维，这k维就是原始特征在k维上的投影。

 **最后，**验证下D'经过旋转及拉伸的逆变换成白噪声数据集D，并计算其方差（单位矩阵）与均值(0向量)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDRgXmZN1SibEPWjdEAOF31d0G6hqf6j15fIs0NGTyurok5icJkNdeV7TQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Pg5qJLXKJhQnFCnzFMLuDR86YicqMvN4yxDWlpVeU2HYJ1YIV4eM7Ktks78V5euBs3148UsZUSAQ/640?wx_fmt=png&from=appmsg)