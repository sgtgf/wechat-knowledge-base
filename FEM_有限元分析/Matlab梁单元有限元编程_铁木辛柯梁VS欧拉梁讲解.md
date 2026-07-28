# Matlab梁单元有限元编程：铁木辛柯梁VS欧拉梁讲解


> 原文地址: [https://mp.weixin.qq.com/s/oTTkZ7wKvfJH26IPnAH\_uQ](https://mp.weixin.qq.com/s/oTTkZ7wKvfJH26IPnAH_uQ)

作者 | SimPC  仿真秀优秀讲师

首发 | 仿真秀App

![](https://mmbiz.qpic.cn/mmbiz_gif/KY3BXJeOPhbbcy2pMyJUOM8RRM7PA0Oobw5wwTQLwUjIFkqY8sr52rjbpricODJ7RZibQ7ZOOmoibyBKnHNwAWdeg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)

**一、写在文前**

梁在工程中应用广泛，是重要的结构构件。从几何上看，梁是任意截面形状的承受横向力的杆状结构，与杆的区别仅在于二者承受的载荷不同。在梁结构中，不同的梁固接在一起，既能传递力，又能传递力矩。

本文针对二维和三维空间梁结构的matlab有限元编程进行讲解，涉及的梁单元类型有欧拉梁单元和铁木辛柯梁单元。重点讲解二者的基本力学假定、适用范围、对应的三大类方程的建立、有限元离散方程的建立（包括形函数、刚度矩阵推导等）以及通过Matlab编程的实现上述两类梁单元静力分析求解和模态分析求解，获得梁结构的位移、剪力、弯矩图，以及模态各阶频率和振型，并探讨了铁木辛柯梁单元剪切自锁问题，并且对比了欧拉梁、铁木辛柯梁（完全积分）、铁木辛柯梁（减缩积分）的计算结果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEk0r1ic6Punpic44VJUQQFzHmxF3GOCibTeSPkgwBS0CraiaM1q8W1bqGcw/640?wx_fmt=jpeg&from=appmsg)

**二、欧拉梁&铁木辛柯梁基本理论**

**1、欧拉-伯努利梁 Euler-Bernoulli Beam**

欧拉-伯努利梁适用的前提条件是发生小变形、线弹性范围内、材料各向同性、等截面，其变形特征在于只有弯曲形变、横截面没有产生切应变；梁受力发生变形时，横截面依然为一个平面，且始终垂直于中性轴。受力方向垂直于中性轴。仅一个独立的变量v，即，垂直方向的位移。由于它忽略了切应变的效果，计算出的梁的变形量低于现实中梁的变形量；因此适用于细长梁。其平衡方程、几何方程、物理方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEjbj6aCibYIP50eJDW9rf6lL0Vg8WxMqtxWV1HbSuTVI1EEiabA841n0w/640?wx_fmt=png&from=appmsg)

**2、铁木辛柯梁 Timoshenko Beam**

铁木辛柯梁适用的前提条件是发生小变形、 线弹性、各向同性的材料、等截面，其变形特征在于梁产生弯曲变形 和梁的横截面产生切应变；梁受力发生变形时，横截面依然为一个平面，但不再垂直于中性轴。存在两个变量独立的变量，v垂直方向的位移 和 θ横截面旋转角。由于它考虑了切应变的效果，计算出的梁的变形量，接近于现实梁的变形量；因此适用于短梁。其平衡方程、几何方程、物理方程为（公式参考https://zhuanlan.zhihu.com/p/134198227）：

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEb74kOQmhf81BZFTmwJ0ZD8noicFL8AfugKXMhEtK60rX8Wb7XRa2cmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEnbovT91yAkzhdqlxy4dzZTNWhHE1zXPOqaibT9J1yA97Noq9HyrAYQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEOXeHHy7ibzuHq0kvo3l247ovA6NCZcrSp4oeN1SekwSy7G45tVI73Jg/640?wx_fmt=jpeg)

**最终的运动学方程**

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEjaatAdVeX4RB6uwNBG1yxgJ8ibLuibyVnzHlCY2qgo597W7ibcIm3oIPg/640?wx_fmt=png&from=appmsg)

值得一提的是，两种梁模型也分别对应了2维的Kirchhoff板和Mindlin板模型，类似的思路可以直接平移到板理论去分析2D问题。

**三、欧拉梁&铁木辛柯有限元离散**

**1、欧拉-伯努利梁有限元离散**

接下来基于欧拉-伯努利梁理论推导平面纯弯梁的有限元方程，该理论适用于细长梁。在局部坐标系下，平面纯弯梁的每个节点有两个自由度（DOF），分别是方向的挠度和平面内的转角 。因此，每个纯弯梁单元有4个自由度。当然也可以将轴向自由度考虑进去，直梁单元拉压与弯曲的变形和应力状态相互之间不耦合，因此可以直接叠加轴向刚度，相当于轴力杆单元和梁单元的简单叠加，就是将二者的刚度矩阵的叠加。本文只讲解4自由度的梁单元有限元方程的推导。

**（1）形函数**

考虑如图1所示的梁单元，单元长度2a，节点编号为 1和2。x方向沿梁的轴线方向，局部坐标系的坐标原点在梁单元的中点。为了推导梁单元的有限元方程，首先需要推导梁单元的形函数。由于梁单元有4个自由度，所以需要有4个形函数。在推导形函数时，通常会使用一种称为自然坐标系( natural coordinate system )的无量纲局部坐标系，以便将坐标系的取值范围变换到\[0, 1\]或者\[-1, 1\]之间。本例中自然坐标系的取值范围为\[-1, 1\]。

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEDx32FmnR3DN3PysLQNNaPL1vrb7HDFHpHUhNEr2r3YUoWjicl3KZaVg/640?wx_fmt=png&from=appmsg)

图1 局部坐标系下的梁单元

自然坐标系与局部坐标系的关系为![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEkROrQ9eN8EGVNddgB7QXS0S3icUKAddZFibJFeuvjI3DIBkXz3fvVmicA/640?wx_fmt=png&from=appmsg) 为了推导自然坐标系下的四个形函数，我们可以将挠度写成![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfE5Dt6kIAhG6NibEqpF7GsoEbsxyktw3e1apdkILacXbfs2ia6fYr6zYwQ/640?wx_fmt=png&from=appmsg)的三次多项式

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfE2wTLlAo0DvqtVfWic426qlN5fUkANwKVKq0vXq05I3fBVZNpmlWKAQA/640?wx_fmt=png&from=appmsg)

写作矩阵的形式  

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEeEibyQt99VvaBDnfXx0LS7xEKib94osqLuUrDOxNtdtXvXtBuiajVXLkA/640?wx_fmt=png&from=appmsg)

在小变形情况下，转角![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEFcKyWmIVqGHw3tcuJyTsqqPiaLqIQprgjgjSYSDdtNiaKprOPib8diajsQ/640?wx_fmt=png&from=appmsg)可由挠度微分得到

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfExIPR3eaReGqPmYI9VH5E1TaLsc1M05NnelBic12icvnkT3ib5ZiborgP4g/640?wx_fmt=png&from=appmsg)

引入边界条件：

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEteGnELK4gAOJzcPxG5P79BoTbNleWM3WmY4gjNYp0JcjicdekLhCkUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfE3SXocTkXX1eleHokfxyYlUXBfA8bcoH4Yvu1nL37eIicdomev3Lsgng/640?wx_fmt=png&from=appmsg)

可得

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEYqDgn2rEiaxVqXOaiciaiaup9Jjv6UnZGKafcAd1vicuiaic3ETNwrHtTvGwA/640?wx_fmt=png&from=appmsg)

求解![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEh6OK4iaqTPpZb0ymM5yRrrAkdGcOq6XjDmA5sfYibRY8P6mIzNsrYicBw/640?wx_fmt=jpeg)之后可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEp7qj1ZGIPXacdrwe78FNLLIZVBbqxoBAPdWtO6Rl7D9DWVpb1OKyYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEkCBtvLhtHhhoLR6UOpib7D5ZUhD9JvIzTwO2ic0SHCFHHH3xvskuVY0A/640?wx_fmt=png&from=appmsg)

其中，N是形函数矩阵

**（2）应变矩阵和刚度矩阵**

欧拉-伯努利梁理论中，梁的横截面始终垂直于中性轴。将2.1.1节的用形函数表示的位移表达式带入到1.1节的几何方程中，得

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEoib2c2fzicoBickKDrIadZhKzQfricfpQTMzziaAkIhyq5kzwgA7XCdwtbg/640?wx_fmt=png&from=appmsg)

得到应变矩阵后，可以求出单元刚度矩阵

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEno8xosPILKW2xCGbBMkWulX6BRTEhlibGfghVhUXtLEE1o10YwyDibJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEjzNIqfCkAPNtibficjwmcPm7CXfib2nibYduIpHmFNRNMQG2FQJ58z3wOg/640?wx_fmt=png&from=appmsg)

扩展到三维空间梁单元，自由度按以下顺序排列：

首结点 1轴平动、2轴平动、3轴平动、绕1轴旋转、绕2轴旋转、绕3轴旋转；末结点 1轴平动、2轴平动、3轴平动、绕1轴旋转、绕2轴旋转、绕3轴旋转，共12个自由度。因此对应的刚度矩阵为

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfErgkIaiaICrjXfJr3Aia1APDsAnRDv8oaWFhKurIfPOv9Wjnmk5ByDAjA/640?wx_fmt=png&from=appmsg)

**2、铁木辛柯梁有限元离散**

参考《Matlab有限元结构动力学分析与工程应用-徐斌》梁单元的介绍，Timoshenko 梁单元中，横向位移v和转角是独立的，可各自独立插值，有

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEkicZorCInXA7bwyD2SgB4cDna1s9KRRelTAjHBqpbaWe7PVjoL7M3uw/640?wx_fmt=png&from=appmsg)

式中，N1和N2为线性形函数

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEg7iaH6Y7z47pXvxSgwEkjDxIEkRYLT5IG26mnRjyKBFBXekM5nUicGjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEKHdkYUeM9OIAmNr6PaALNqWh9tC7gxNnC1fyDiaj8q54RCmwXU46Pibw/640?wx_fmt=png&from=appmsg)

根据1.1节的几何方程和物理方程，将上述位移表达式带入之后，可得

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfExy9M6RkIe73enMtgsXuT4rxc1olyUHAnOzqzVpjRjnLHUfOlMno6NQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEP0ib0Qwy5ibelFOgqFb0gGAGE7mxBB2xkNUia4kn8WDVFlbOZhXyalAZA/640?wx_fmt=png&from=appmsg)

因此梁的刚度矩阵为

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfE5NP3c5Zw93ia4ljYwiazmEVermabdqg3hGdrkEcXsAMMJPknBn7v8nbw/640?wx_fmt=png&from=appmsg)

**3、铁木辛柯梁的剪切锁死现象**

上述的 Timoshenko梁刚度矩阵用于扁梁（高宽比小）时会产生剪切锁死现象。原因在于v和采用了同阶插值造成截切刚度过大。为了避免这种现象，在建立单元刚度矩阵的时候可采用减缩积分的方法建立。笔者通过自编有限元matlab程序验证对比了欧拉梁单元、铁木辛柯梁单元（完全积分）、铁木辛柯梁单元（减缩积分）三种单元对不同跨高比的梁结构的计算结果。

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEOSAbVgRicVkGlzbCQPtylZZvzbFjVx87DXfJNCcJkUXUJX5SIB5OxEg/640?wx_fmt=png&from=appmsg)

（1）L=5000,H=700,B=300的梁的计算结果

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfETfSHDJzQCObt58ZiaB5kxXdhCC16p8YM0s1e7OwLa4zaopV8n0orqfQ/640?wx_fmt=png&from=appmsg)

（2）L=5000,H=2700,B=300的梁的计算结果

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfE0dWriaJqxeZ5h8CD624JtaAmo7JaOibiaIWkFTfw2WiatpWiaXosrVArG4g/640?wx_fmt=png&from=appmsg)

（3）L=5000,H=7,B=300的梁的计算结果

![](https://mmbiz.qpic.cn/mmbiz_png/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfELbJan3j8Fsso8PXDFe5Tm0RNYd8G0wGZMuV4Pj5xEqI9R7cTshc4aw/640?wx_fmt=png&from=appmsg)

可见，对于（1）所示以弯曲变形为主的梁结构，三种单元均能给出一个较为准确的结果；对于（2）所示的深梁，剪切变形不可忽略，导致欧拉梁与铁木辛柯梁的计算结果相差较大，而且两种铁木辛柯梁均给出较精确的结果；对于（3）所示的扁梁，以受弯变形为主，因此欧拉梁和减缩积分的铁木辛柯梁均能给出合理结果，但是由于完全积分的铁木辛柯梁会发生严重的剪切自锁现象，因此与欧拉梁和减缩积分的铁木辛柯梁的结果相差较大。

**四、****我的Matlab有限元编程精品课**

以上就是笔者关注Matlab梁单元有限元编程铁木辛柯梁与欧拉梁对比分析，该内容已经收录在我的原创视频课程里面《[Matlab有限元编程从入门到精通20讲](http://mp.weixin.qq.com/s?__biz=MzI4Mjk2NzQzMQ==&mid=2247550237&idx=1&sn=c0d259918b2f780b2c8d9869444d2801&chksm=eb93a9f5dce420e3c84059579329caf3191c2931c7dc9b564dfc19d49b16f5a0bcdcd1a4fc0f&scene=21#wechat_redirect)》强烈推荐学习者订阅。

![](https://mmbiz.qpic.cn/mmbiz_jpg/5vZeSpd7nNCic5zYadU7olH4wP2uN8DfEawgUczMl3WhB04hdOaNB5EqMSiacLF7gN6lDn5EibMOurCO7NOPicT3xg/640?wx_fmt=jpeg&from=appmsg)

**上新优惠价****（限1****0名）**

**限时特价：****449元****（****原价：****499 元 ）**

**可开电子发票，赠送答疑专栏**

提供**vip群交流，课程可反复回看**

识别下方二维码，**立即试看**

![](https://mmbiz.qpic.cn/mmbiz_gif/ibn9IvQV94yZJ7NFBDlldTiapoFTm9eX0gIxwvsLE2Cn3pkqAARJHFnjCgwxREUg3RWZxVhUDvo7jYOSiblTcC3Zg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVVvIrUQn74JaQVbItjVNyJcDGwHeichBWvhZqZGHKXWicias02eBgpViah3Qibklu3RDRQuPfUNlYZTYNQ/640?wx_fmt=jpeg&from=appmsg)

**本课程为matlab有限元编程专题课**，课程主要以**案例的形式进行讲解，**中间会穿插案例中所涉及到的**有限元基本理论**，案例不局限于力学问题的有限元求解，还会涉及**传热学、电学**等问题的有限元求解。

因为固体力学领域我最熟悉，所以我们从固体力学开始，所涉及的单元有**杆单元，梁单元，平面三角形单元，薄板单元，厚板单元，四面体实体单元**等等，力学问题有**静力学问题**，也有**动力学问题**，后期还会涉及材料非线性、几何非线性、接触非线性等非线性问题，内容丰富，不断更新完善。

**喜欢****作者******，请点********赞********和在看******![](https://mmbiz.qpic.cn/mmbiz_gif/6BxCiaoAkhCpmWx6ic8Sg6X6PXsnJWo7a3hOSHEicIvYJO3nOPdf6GiaqmlM1gXnia8Ppu76xY0hiaTBXSjQNRsr6Dkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)**

**![](https://mmbiz.qpic.cn/mmbiz_gif/pn1AOBGTwDVWGtThsMX1L4lk0EffmPg1BKAYaooibsaRwoYMzqxhJ1seOlZialOpryLocgAFt7Yb97uwwseMCLxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)**