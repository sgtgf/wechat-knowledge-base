# 奇异值分解SVD系列07---图像压缩示例


> 原文地址: [https://mp.weixin.qq.com/s/g93fpkddmVZc1VN9oC74Pg](https://mp.weixin.qq.com/s/g93fpkddmVZc1VN9oC74Pg)

今天从应用的角度来考虑SVD，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbAFIicDibFkpSM5tIWncz9SJhE5Dw4ZlN7Q8SXcYApiaT0wrhYPQC0Etdw/640?wx_fmt=png&from=appmsg)

**由此可知，矩阵X经SVD分解后，X可表达为其左奇异列向量与相应的右奇异行向量（右奇异列向量的转置）乘积和的形式，权重系数为相应的奇异值****。**此时，读者想到什么了？是不是傅利叶变换，SVD与它相仿。傅利叶变换能将任意函数表达成正余弦函数乘积和的形式，也有相应的权重系数。

**因为奇异值是按大到小排列的，它们衰减的很快，前面几项就可以表达绝大部分的信息**，如此便可以取前若干个奇异值来表达X，达到精减X的目的。

编程如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUb3nVh2HYWxY59SuJVQAlJF0lEtlGVUuVGMrqndaHOTaDpAAF28mgpAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbZJYRibHuqAhjpqyQBHT1v7uNHm59VG3AKoLQia6mW1tXE94XpI9bHqGw/640?wx_fmt=png&from=appmsg)

**1、验证X,U,V,S的维度**，与分析相同

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbF0ARYt5jFmibadRfsGIOuXXKopssE4jkLsk9CkMrfsjplHXvW4tu2sw/640?wx_fmt=png&from=appmsg)

当使用 \[U,S,V\] = svd(X,'econ')，因rank(X) = 892, S中只有非0的892行列，剩下元素为0的行列没输出来，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbNeZFpTdhDzpEC4VmcoXZyicNYEbYygk7ZYKty4HicgdsJIgibI6U0YT6w/640?wx_fmt=png&from=appmsg)

**2、验证U,V的正交单位性**，使用 

norm(U(:, 200)),norm(U(:, 190)),dot(U(:, 200),U(:, 190))

norm(V(:, 200)),norm(V(:, 190)),dot(V(:, 200),V(:, 190))

结果分别为1，1，0，1，1，0，与分析相同

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbZSmWWr3LB2oV8vY8HamEKfbYs7T21JnDepb3f5oSIlTFwBt4xbJHqA/640?wx_fmt=png&from=appmsg)

**3、验证压缩效果，**分别取前5、20、100个奇异值时的图像及压缩比如下。可知，当r = 100时，已经非常接近原图了，但存储的元素只有之前的18%

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbtYTp5oS2LcUw79IGroee2ctTkLRvpiaSS9WT8q3gbKAoIah4WNpnoCg/640?wx_fmt=png&from=appmsg)

**4、验证**奇异值的**变化规律，**下图中的左图展示的是奇异值的变化趋势，可以看出其衰减的很快；右图展示的是前r个奇异值/奇异值总和，即前r个奇异值占奇异值总和的比例，可以看出该值开始增加的很快，后面增加的速度减慢，最终为1.0。与我们的分析相符。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40rd6VGHFuPxDJMTJ1MeibUbPN5zsxkjPuOEGfYtvLEwWFvL0qiaBsICRrMIxCRUEpKibKibpuzQMYArw/640?wx_fmt=png&from=appmsg)