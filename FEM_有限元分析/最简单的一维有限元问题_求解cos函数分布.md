# 最简单的一维有限元问题：求解cos函数分布


> 原文地址: [https://mp.weixin.qq.com/s/1iz9vCq8rgtYWTVOr5c3fg](https://mp.weixin.qq.com/s/1iz9vCq8rgtYWTVOr5c3fg)

**1.给出边值问题**

满足cos函数的边值问题：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMu59b9dRkZMAM3ySKr14AIUSuOuex2kkeEJKuF7twjUDxXjibiah33iclQ/640?wx_fmt=png)

求解区域离散x=(0,2pi)

该边值问题的解析解为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMg2CsK97MmlTkz1FDNdEJKgQQ1pXBKfPXsibVANHV91fqMPyqxAMspiaw/640?wx_fmt=png)

**2.有限元离散方程推导**

首先对求解区域离散，例如x=(0,2pi)区域离散得到的网格：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMXqATSGdArHlzvvalWMKJJNOpiaHTibA5agxHcicIWFicOCHnlHxibSkxDFA/640?wx_fmt=png)

这里展示离散成3个单元段，四个节点，对应编号关系如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMvxGXYkkOicM7rOa3WBSe1zeh4RqUmcgQWlCqLQ76JDXv9Yia07GSxicFg/640?wx_fmt=png)

针对离散网格，使用伽辽金推导方法对连续的边值问题进行离散，首先对微分方程乘以试探函数，并且再求解区域积分，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMdbdIVRaJ3O5FkJV1EMTr6YoohS0gw911Tu2f1N2ks7zzYyzzlnn7gg/640?wx_fmt=png)

对上述式子第一项进行分部积分处理后：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMP7Ylvqpx86XC0YGMNMVhbnTlUz6FEfdefUsuGh4Haxed2uYfT6E25Q/640?wx_fmt=png)

根据边界条件对上述的等号右端第一项分析：

在x=0处是第一类边界条件，后续强加边界后会覆盖掉这里x=0项的值；

在x=2pi处是第二类边界条件，对应给出的第二类边界条件等于0，也就是在x=2pi处加入第二类边界条件的系数矩阵为零；

具体详细的公式，在后续给出，这里继续推导区域内的有限元方程：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMWtSZY3eQ3zjhTU5XIsMmfRoyfTz9RfhvUnEWANqTlwUTOpROQibw65Q/640?wx_fmt=png)

对求解区域进行网格划分，引入每个单元的线性插值型函数，表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbM4nkxtpibicPsVdW4ofTcjbSPPBQuYYjibsmCeDZrWoEYqh4JDH0nr7YgQ/640?wx_fmt=png)

对上述方程进行离散，得到有限元离散方程：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMMfdgwQL6d15VSZdibgSDmO3T9NP4MR3piaCUlia4Im5o71jJkdVuvia9uQ/640?wx_fmt=png)

其中，试探函数不等于零，因此约去，简化用矩阵表示，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMfGMFct7HSEFoWhu6gficia7NZeD7iagNbmDG8cQ1ufoh1UoodbBHnCzmQ/640?wx_fmt=png)

当加入边界条件后，变成：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMib0KtZxUDI1YThOXuLia5dibYbVp1tDhzoe3FOD1gL5C70CaXAr5hCIpA/640?wx_fmt=png)

上述就是有限元离散方程，K表示对应边值问题的有限元系数矩阵。

**3.确定形函数**

在每个小单元内，通过端点解与形函数的组合可以获得单元内任意一点的求解结果：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbM3Hm6VFOAQiaUkhB7Pibks6tE23OygNlib04kjIvXhK1SHSjWNhbsc815A/640?wx_fmt=png)

理解为在单元（一维线段）内u任意一点值有两个端点u1,u2通过插值函数N获得。因此不难理解，型函数N必须满足在端点1处插值的点为u1，在端点2处插值结果为u2。使用拉格朗日插值公式，可以直接获得满足上述要求的基本插值函数:

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMLboicN5PCrvH2ZOURfPLniaTkRiarv0u36qicEicN97ibg2nRvN89QSkiaGRg/640?wx_fmt=png)

其中，a等于线段的长度，当型函数为线性一阶基函数的时候，形函数就等于插值函数：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMOPBiaIlcHnV6c3iar8Ct73fQ3QRicO0H8JWlHKdqL0ZaiadULMARPfibXZQ/640?wx_fmt=png)

可以简单验证，上述形函数满足：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMiaw98v0GQX9ru6L1w7owfajyLRCXs9CcmERNSXGnm2rKE5utdmEXrkA/640?wx_fmt=png)

**4.单元系数矩阵推导**

在确定形函数后，根据有限元离散方程，发现还需要形函数的梯度，因此根据形函数与插值函数的关系，推导如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMylfvJIhGpKs29PpmLSvCn2neSibcMWZHVqxnIpVNWosUuHWAq1OEPcQ/640?wx_fmt=png)

根据有限元离散方程的系数矩阵K,其中主要有两部分组成，梯度\*梯度与N\*N,因此，分开考虑两部分，带入形函数的梯度推导结果，得到：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMicGIMictFyRXg1CcfmMwdcAqftib3icAXHUhibN7pWtJMwFa2dpeQicsqLkA/640?wx_fmt=png)

其中第一项是常数积分，很容易获得；第二个公式可以查表获得，这里手动积分看看原理。对第二项的积分变量转化到§下，因为§的积分范围是一定的(0,1),因此：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMMpvCqdAFA3vXeKON7oLIlol2EKQx8r4fGx64cctRlec0iapBEZxPu6g/640?wx_fmt=png)

所以，得到第二项的积分结果：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMTC5YKFODtlNHxQiaOP2ib126yQ4037TADQaEiaoCdTyJvA4HzhFmOK2Dw/640?wx_fmt=png)

一般的，通过带入公式计算得到系数或者查表得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMLERVEPic8rOugCODejM8HHfOD2zaurE81l410ZCXr9R2JvcmCwCPY3A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbM218kHdskcFCicb8l4RibUiczLFssjggW799iaufztlOsosxFicyBxzbKicXQ/640?wx_fmt=png)

**5.组装全局系数矩阵**

根据上述离散网格，离散成三个单元，因此，单元长度a等于2pi/3,因此第一个单元的系数矩阵：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMlVp7ObYQF7xxFA35tGSo6Yib8gOGRUeIo7bWaZ1h76EiaI2FQOvBPFog/640?wx_fmt=png)

其他两个单元一次可以得到相同的系数矩阵，然后把三个系数矩阵根据单元节点列表将局部单元系数矩阵一一映射到全局节点中：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMlY4YHfsGmNkicMw8SDuusbTrwb2uyAFOe00POt0cibFqH6lyGkFuO6ug/640?wx_fmt=png)

然后，对系数矩阵添加边界条件：在x=0处的第一类边界条件，使用乘以大数的方法，得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMVVWTT69lxbNpFz4rlvLWUoEHZ6lW69TPkP6S9a0fawDibewibpGHj8CA/640?wx_fmt=png)

在x=2pi位置处添加第二类边界条件，在终端边界点添加矩阵Kf:

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMfubc59lwic06E366lxicv2N4QpGbwsr2z5xL4Akgj4LfUA81etfAU6hw/640?wx_fmt=png)

最终得到的系数矩阵数据，线性方程组：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMd18bpFQ1npiaRtS99Ddnn8T9O9T6EMp31XUHIiaGFS5m25wibsBZNkYGQ/640?wx_fmt=png)

**6.有限元计算结果**

求解线性方程组有很多方法，大体分成迭代法和直接求解方法，这里采用matlab中自带的直接求解方法求解，求解结果为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMFC34z3KIQ1UuUGoS0RDSibs2QqB18PKPPBu9TF6szZOx8OhhXIYt5Ww/640?wx_fmt=png)

用图像显示，数值结果与解析解的误差：  

3个网格单元：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbM45pzXibyZSB9icyD8uB994rcujdXyfX1csw36gWmXYxGg4MAYt1QrI5g/640?wx_fmt=png)

10个网格单元：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMq8qsZwbaEgObmiaiaDliaUhpjeOwP3IpVQicd4HmUZk5w7hUD2UYkIkItg/640?wx_fmt=png)

50个网格单元：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrvGVzKRicTqtwicw1foCxSbMfIicgVlnQEPLiczSepKSzy29T7DQz90qMBW787Fia4zFmdyDtmW3feYNQ/640?wx_fmt=png)

可以直观感受，3个网格的最大计算误差在0.5左右，10个网格误差在0.1以下，而50个网格精度就达到了4e-3，基本上与理论解完全重合。  

7.总结  

有限元求解流程：

       1.确定边值问题与求解区域；

       2.推导有限元离散方程；

       3.确定形函数；

       4.单元系数矩阵推导；

       5.组装全局系数矩阵；

       6.求解线性方程组得到数值结果。