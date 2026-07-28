# 奇异值分解SVD系列03---特征值与特征向量


> 原文地址: [https://mp.weixin.qq.com/s/QOrqxRBgA8IEO\_68MazeoA](https://mp.weixin.qq.com/s/QOrqxRBgA8IEO_68MazeoA)

**一、特征值与特征向量**

前面讲到，矩阵的本质是线性变换，Ax就是对空间内任一向量x作线性变换。一般而言，变换后的向量Ax与变换前的向量x朝向是不同的，但有一些向量很特别，**变换前后的朝向一致，只有大小有区别**，即Ax=λx，如下图中所示2个方向的向量，这两个向量就是特征向量，对应的缩放系数就是特征值。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2w08S0LxGRka7TApEF5eJtDmfVJn5dlLgxun60W4SO3uxazfvoPS43Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb29Idv8Ff6vj6kQib8kiatF2wsV53m3icWKCTBGfE5ic0uhT0Qll5Us6xasg/640?wx_fmt=png&from=appmsg)

一个典型的应用场景，刚体在旋转的过程中，直观上感觉，总能找到一根不会动的轴，而这根轴的方向就是惯性矩阵特征向量的方向。  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2d5zibwhf8iccGMZsYYfiaU3YTxicypvhmO6b9xh3tUd4icRLsDgdzFpOcicQ/640?wx_fmt=png&from=appmsg)

**问题1**，如果变换矩阵是旋转矩阵，会有实特征值与特征向量吗？

**答案**：没有的，因为旋转矩阵会将每个向量旋转一个角度，从而无法保证变换前与变换后的向量朝向一致；  

**问题2**，如果变换矩阵是(图像)缩放矩阵，特征值与特征向量是什么？

**答案**：因为变换是缩放变换，故只是大小改变，方向不做变化，故一切向量都是特征向量，对应的缩放因子就是特征值

**二、特征分解**

那具体是怎么回事呢？简单而言，要线性变换v，可先将v表示成变换矩阵A的特征向量的线性组合，对v的变换就等价于这个线性组合的变换，而该组合中特征向量的变换，根据特征值与特征向量的定义，只是在大小上有缩放，而朝向不变，这样对v线性变换就简单多了。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2HYbibZIzAwpGSUC8d7q0WYIfEwwrIyEyw4gE8jIt3Rwt6Y4uF2kkibvA/640?wx_fmt=png&from=appmsg)

Av具体是这样实现的

**第1步**：将x表达成特征向量![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2SlfIFlS0dSk09jtmNzwA1TUE5KKBp5t4P0WpOYGeP9F7icwic2EtXk7w/640?wx_fmt=png&from=appmsg)的线性组合(组合系数为v)，此时需对P矩阵求逆

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2bXfAxsaOQTfmnNIKJOZzyia7iaJdFiaytTBbkrmHBiaxoTSVeJpfwjhWiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2asMBZ8uRAUkVbV8tm0xd2hqTLnEo7Ow9Za0HWAzvKeaTmxasXstMfg/640?wx_fmt=png&from=appmsg)

**第2步**：将组合向量![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2sKDmYaTdmd4aDUnWQAaHcEdKAawZp3BKFjSXc1T1YgBm1iaw4fM2upw/640?wx_fmt=png&from=appmsg)按各轴的特征值进行拉伸缩放

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb25YDAgUSRQxtFEjkI2j32mXiazGlXlia0gXSkXDiaAB6WibqCEaWBaLSFQg/640?wx_fmt=png&from=appmsg)

**第3步**：将拉伸缩放的![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2AdCc9PgaSf1TTWQqh6hpnDyicTnkwKCcNHj4lkzEBp9eQK29jpJgEjA/640?wx_fmt=png&from=appmsg)重新组合

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2YJu4pJsLp25phu2gBoKibQiaQ4cWQXg3rYzp6O06Wese58nMcXu1HIjQ/640?wx_fmt=png&from=appmsg)

得到的特征分解如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2gS59XVj3n9AkoXbv2SeFKNWuE9kwMOmS1eQ17xKvRSkMyicxIib2qHYw/640?wx_fmt=png&from=appmsg)

反向理解，将A特征分解后。其中P是归一化的特征向量组成的矩阵，F1为标准正交基表达的坐标系，F2为A的归一化的特征向量基表达的坐标系。那在F2下描述的缩放变换![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2dTDOSRMXIDHwBSBIe7MaQZHclic3ib8hc3akHSpYFicf7gBzia8mS1Rdtg/640?wx_fmt=png&from=appmsg)，对应于F1下是哪个矩阵呢？

若求F1下向量v的变换矩阵，可

首先，将F1下的向量v通过矩阵![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2AcvDZwSLicWZuxzp4cicgWGdXD1cZccKGtHAvlA3iaaK4RrvnfxUesYBw/640?wx_fmt=png&from=appmsg)变为F2下的向量表示x=![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icoQ7TtnQHibrFS8UibsjjlurMKUQCE1M1QZIFtzLe0ibdUiaLjjwQiaiaqgqA/640?wx_fmt=png&from=appmsg)；

然后，用F2下的变换矩阵![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2dTDOSRMXIDHwBSBIe7MaQZHclic3ib8hc3akHSpYFicf7gBzia8mS1Rdtg/640?wx_fmt=png&from=appmsg)变换F2下的x，得![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icMcFZ7rMjo6ibMbdVww5OWyJmk1NKwbicMUmMnDsHT1MQzjEQia6Cuq0SQ/640?wx_fmt=png&from=appmsg)；

最后，将F2下缩放后的向量通过P变回在F1下的表示,得![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icTbN5AF23d8du42dGUicwFQLst4Libfkk4ktS8BY2cDg6xH2TsoWAoFlg/640?wx_fmt=png&from=appmsg)。

回答上面的问题，对应于F2下描述的缩放变换![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2dTDOSRMXIDHwBSBIe7MaQZHclic3ib8hc3akHSpYFicf7gBzia8mS1Rdtg/640?wx_fmt=png&from=appmsg)，在F1下就是![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35ictm8ACL1YKVibd9BCSC9bdrJJtqf6b16vhQvLybUHgvr1oia2F13icZv8A/640?wx_fmt=png&from=appmsg)

**以上可看出，特征分解本质是采用了一种“曲线救国”的策略，即F1下看不出来的变换，则把F1下的向量转成可一眼看出来的F2下的缩放变换，然后再变回来。**

**即可对角化的变换矩阵，本质是在其特征向量组成的基坐标系下的缩放变换，即同一个变换在不同坐标系下的描述不同而已，在标准正交基下是A,在其正交特征向量基下是**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2dTDOSRMXIDHwBSBIe7MaQZHclic3ib8hc3akHSpYFicf7gBzia8mS1Rdtg/640?wx_fmt=png&from=appmsg)**。**