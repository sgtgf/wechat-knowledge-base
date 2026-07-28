# 三维非结构化有限元实现-possion方程


> 原文地址: [https://mp.weixin.qq.com/s/AWwYzft9wOCWv2lpqqgXkQ](https://mp.weixin.qq.com/s/AWwYzft9wOCWv2lpqqgXkQ)

**简述**

在上一篇文章中介绍的简单了结构化网格六面体的有限元实现流程，本篇文章再介绍非结构化网格四面体的有限元详细实现过程。

其中边值问题与有限元方程的推导参考：[泊松方程三维结构化有限元实现初探](http://mp.weixin.qq.com/s?__biz=MzkwNzUxOTM2NA==&amp;mid=2247484317&amp;idx=1&amp;sn=0994f0defe3d8e191eda70a4a355c67a&amp;chksm=c0d6b776f7a13e60dab1dec71969db6c551352966abf83f78d979173a6cc69029b732b1a609f&scene=21#wechat_redirect)​，这里不再过多赘述。

**1.四面体基函数**

    不同于六面体，四面体的插值函数是由体积坐标推导而来，如图所示，四面体任意一点的插值结果可以通过该点与四面体任意三点围成的新四面体体积与原本四面体体积的比值相关。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUy6qtt0xPFFRGXngH7hibYPQ1Vw7tNOfF1rprKOMImasDpzib7bpsp5tA/640?wx_fmt=png&from=appmsg)

因此，用体积坐标推导插值基函数，可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUlSBh4adf9RqmQKMJRJWibzG6DZ7XrricMBEHFIuq7LNIAIl7AwibgKQAA/640?wx_fmt=png&from=appmsg)

其中，V1234表示点1，2，3，4围成的四面体体积；Vp234表示点p,2,3,4围成的体积，其他体积以此类推。其中V1234的体积公式如下:

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUOgkicb3ibnsHx5lXha8pVOaOvJeicwZzKIw9eSWhTmricmbY79Unwz0UZQ/640?wx_fmt=png&from=appmsg)

由于p点是任意一点，所以Vp234体积可以表示为x,y,z的函数，：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUlmGn83KoMG5ZOWxaib1ko6xV42tnXwefbouNmv7Ix4NmhyVPhxmICzg/640?wx_fmt=png&from=appmsg)

其他四面体体积也可以通过行列式运算获得类似Vp234的行列式结构：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUlE4nuqc0U8OITjU69iaBMGxmTvmVOnQp9b28mlxzovGhoZicMd8FSiaKw/640?wx_fmt=png&from=appmsg)

由此，通过体积比，可以获得四个插值基函数对应的系数矩阵，简写可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUyyEKiatsRkJUn67AEFKX1B1R2ZiayyqAjTrjicaE1eJiaOfxlGCfj3EMjA/640?wx_fmt=png&from=appmsg)

其中，插值基函数的梯度可以表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUST2hxYJBPOV4ltOtcAJ1sWzPcAZicNyAiaFIsuFCibrcqfKibD2SO27laA/640?wx_fmt=png&from=appmsg)

可以发现，对于插值基函数，其各方向的梯度为常系数。

本次文章使用一阶基函数，因此有：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUxEgUiaF9JNmicNHsMq0HQeu2rXG2HnX7paETQejiawgSiaXPSVFQibVibU6Q/640?wx_fmt=png&from=appmsg)

则任意一点p的数值结果的插值公式表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUjic5xgHuhdCX8sS2ibMjNfDLia43ldqy9oFGdWV8Csb6tWia0xJK2icT83g/640?wx_fmt=png&from=appmsg)

结合四面体图中，不难分析插值公式的意义：当插值点p移动到1号节点的时候，可以发现Vp234=V1234，此时N1=1，而N2,N3,N4都等于0，因此得到p点数值结果up=u1，与图形分析结果一致。进一步思考发现，Ni其实表示四个节点位置数值的权重，而这个权重值则由p围成的新四面体体积与原本四面体体积比确定，因此Ni的数值一定是小于等于1的。  

**2.单元系数矩阵**

针对三维泊松方程的第一项：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUv10vBMvy2Q5vCEVluTOUqOFsjCmdicwlJUBUWUh7bkFuph7ADyfE0nw/640?wx_fmt=png&from=appmsg)

将1中推导的基函数梯度带入上述公式中得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUAg5NqtQ6U9rvGStKyTsJxUbHlq2QibdUicVhTmfyhVbrkwP9YM8Vsu3g/640?wx_fmt=png&from=appmsg)

第二项右端项推导可以通过查表获得：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KU9NZrFDwv2L1iarz4xVX6hhVtkHLVZZuNGwXrLXBxXKjSVVenVq5GhyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KU2vgE9hpMWiaS22wN5Lrug8ryKxpWL794HeMveeBfJR3QsibCBuAU9JOQ/640?wx_fmt=png&from=appmsg)

**3.系数矩阵组装**

对于四面体网格而言，本文使用开源代码tetgen实现网格剖分，获得ele、node、face等网格信息，以下展示网格：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUwtMVReALkElDmSgDuezfNMR7hwwPhkK5tdFEwfTFllPoedpu8iaSfpg/640?wx_fmt=png&from=appmsg)

ele文件中包含每个四面体节点信息，node中包含节点坐标信息，face中包含标记边界面的信息，读取三者后，就可以确定一个四面体网格的基本拓扑关系。

根据ele文件的信息，即可把单元系数矩阵一一映射到全局系数矩阵中；根据face中包含的边界信息，即可实现对模型边界条件的加载。

**4.结果展示**

组装好系数矩阵与右端项后，使用matlab自带求解器即可求得结果。

这里与结构化网格不同，非结构化求解的结果在节点上，但是节点本身是不均匀的，因此无法直接绘图，需要将这些无序的节点数值值插到规则的网格中才能够绘制结果。不管是matlab自带函数，还是自己实现插值过程，均是如此。

**a.四面体网格节点个数：593;四面体个数：2234**

首先求解拉普拉斯方程，也就是把右端项置零，然后使用第一类边界条件，在Y=0处放置0，Y=10处放置1，其他边界不进行处理。绘制结果切片图如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUDqbbG4BM0mln5PW5m4emSibFI9AbsOLAeuibFhiaCUk9jSamuKL70PLQA/640?wx_fmt=png&from=appmsg)

不难发现上述结果与理论解u=y/10是一致的，因此基本上可以确定整个有限元流程是没有问题的。

进而，我们再加入右端项：对每个单元加载负载，并且对所有边界处理成第一类边界条件赋值为零，将节点上的数值结果插值在y=5切片上，x\*z=20\*20，绘制结果如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUeHp90WGmchUkUtibHibokuFU5xIDvhxtkRL1onH1neO9ffUheNBDByUw/640?wx_fmt=png&from=appmsg)

b**.四面体网格节点个数：4277;四面体个数：20503**

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KUiam24cicoheFdIR3zubYaMohT9bBGkNpTQZgxEqxyfBJGcgQeNoCiabmA/640?wx_fmt=png&from=appmsg)

可以发现，当网格量加大后，插值结构也更加的光滑。但是计算时间也急剧增加，网格单元为2234个的时候，仅需要2.27s,而网格单元为20503个的时候，需要21s时间。

三维切片显示如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNpzHSxqZ8OonS1uxbapt7KU7H2KiakZWqOgaXnjQGibWpaJR8wpMGaZpjZslx1oekuvKexhrFgUafHA/640?wx_fmt=png&from=appmsg)

**5.结论**

 1.非结构化网格与结构化网格的有限元实现流程基本上是一样；本质区别还是在于基函数的选择，这导致了二者在推导公式与实现代码中的难易程度不同。

2.非结构网格的一个难点是网格生成问题，本文直接使用开源代码tetgen，避开了这个重大难点。