# SLAM基础系列02---点云配准，2维正态分布变换NDT(理解2维NDT这篇文章就够了)


> 原文地址: [https://mp.weixin.qq.com/s/2veUrXoccTM-TXx2dz1yhA](https://mp.weixin.qq.com/s/2veUrXoccTM-TXx2dz1yhA)

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43umjOxHdEGW9JetNYprn43CgDPUKNlAg0gmowgAcUbgJ2FJfyYkQhBw/640?wx_fmt=png&from=appmsg)**

**一、****二维NDT**的直观理解

给定两个2D的正态分布，分布1的均值和协方差的值为\[0, 0\]和\[\[1, 0\], \[0, 1\]\]，分布2的均值和协方差的值为\[3, 3\]和\[\[1, 0.5\], \[0.5, 1\]\]。分别用分布1和分布2生成500个点，将这500个点和2个正态分布可视化如下，图中的两个正态分布使用等值线描绘，越到中间表示概率越大，等值线的颜色也越深，分布1的500个散点和概率等值线为蓝色，分布2为橙色。

由于蓝色散点是分布1生成的，所以可视化后也主要集中在分布1（蓝色等值线）上。橙色散点由分布2生成，可视化后主要集中在分布2（橙色等值线）上。这个图非常直观，散点的分布与其概率密度函数吻合。

**![](https://mmbiz.qpic.cn/mmbiz_jpg/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43xN7I6v5tqsC11H2j8twWsHuycIvhJuvpEVTmlRcuBfDch7oXaFtlmA/640?wx_fmt=jpeg&from=appmsg)**

500个蓝色的点是由分布1生成的，将其前10个点的概率密度值（在分布1下）和坐标值输出如下，可见这10个点的位置离均值（0， 0）较近，概率密度值都比较大。

```
# 分布1生成的蓝色散点中前10个点的坐标值[[[-0.56398429  0.38703035]  [-0.76597196 -0.85164205]  [ 0.27567485 -0.49441045]  [ 0.12728181 -0.36960224]  [ 0.83698544 -0.66899404]  [ 1.51247014  0.41762367]  [ 0.58095441 -0.96004997]  [ 0.26205521  1.54497936]  [-1.4668338   1.40916314]  [ 1.29933413  0.97364967]]]# 分布1生成的蓝色散点中前10个点的概率密度值[0.12595728 0.08258884 0.13559318 0.14744791 0.08964249 0.04647388 0.08479836 0.04662147 0.0201098  0.04259542]
```

由于500个蓝点并不是由分布2生成的，所以10个蓝点都离分布2的均值(3, 3)较远，使用分布2求这10点的概率密度值并将其和坐标一起输出如下，可见其概率密度值都很小。

```
# 分布1生成的蓝色散点中前10个点的坐标值[[[-0.56398429  0.38703035]  [-0.76597196 -0.85164205]  [ 0.27567485 -0.49441045]  [ 0.12728181 -0.36960224]  [ 0.83698544 -0.66899404]  [ 1.51247014  0.41762367]  [ 0.58095441 -0.96004997]  [ 0.26205521  1.54497936]  [-1.4668338   1.40916314]  [ 1.29933413  0.97364967]]]# 使用分布2求这10个分布1生成的蓝色散点的概率密度值[2.02377233e-04 1.15474462e-05 2.16916704e-04 2.45574475e-04 2.04131972e-04 6.38330154e-03 6.35599724e-05 4.30859650e-03 6.48764558e-06 1.72114658e-02]
```

将这500个蓝色散点在分布1下的概率密度值相加，其结果为38.17507031881378。

将这500个蓝色散点在分布2下的概率密度值相加，其结果为1.1535884677789832。

可见500个蓝色的点在分布1下的概率密度的和远大于其在分布2下的概率密度的和。假如我拿到这500个散点的时候并不知道其是由分布1生成的，但**通过其概率密度和的比较**，我就能马上知道其是由分布1生成的。

其实ndt((normal distributions transform）)的点云配准使用的就是这种原理。

a. 按照一定分辨率将2D参考点云分成多个栅格，每个栅格内的点云的分布可以看做服从2D正态分布，可通过估计其均值和协方差，再通过2D正态分布的公式求得其概率密度函数。

b. 按照相同分辨率将待配准2D点云也分成多个栅格，每个栅格内都有多个点，现在我想将这个待配准点云里的栅格匹配到参考点云中。

c. 我的做法没什么特别的，纯靠猜，但我猜错和猜对是可以观察到不同的，这种不同可以通过将待配准栅格中的点的坐标带入参考栅格里求概率密度的方式观察到。如果我猜对了，我将待配准栅格里的每个点的坐标带入我猜对的参考栅格的概率密度函数，得到的每个概率密度值会比较大，其总和也会比较大；如果我猜错了，我将待配准栅格里的每个点的坐标带入我猜错的参考栅格的概率密度函数，得到的每个概率密度值会比较小，其总和也会比较小。

d. 假如待配准点云有64个栅格，参考点云也有64个栅格，将64个待配准栅格中的点都变换到参考点云坐标系中，用其所落在的栅格的概率密度函数求其概率密度的值，最终将64个栅格中所有点求得概率密度值求和。如果待配准点云和参考点云中重叠部分的对应关系都猜对了，我得到的这个概率密度值的和就会最大，如果我猜错的越多，概率密度值的和就越小。

f. 知道了这个做法后，我就不猜了，我将不同猜测下，待配准点云中每个点变换到参考点云坐标系下使用参考点云的概率分布求得的概率密度值求和作为目标函数，使用牛顿法优化这个目标函数。不同的变换参数(旋转角，平移量)将原始点云变换到参考点云坐标系下的坐标值会不同，得到的目标函数的值也不同。当我优化得到目标函数的最大值（概率密度的和的最大值）时，我就找到了将原始点云匹配到待参考点云的最佳匹配，也就找到了该最优匹配的变换参数（旋转角度及偏移量），问题得解。

****二、******二维NDT点云配准的步骤**

**a. 创建参考点云的正态分布的概率密度函数**

将参考点云按照一定分辨率均分为多个栅格，对于每个栅格完成以下3步：

1.  计算该栅格内所有点的均值q=1/n(sum(x\_i))
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43w9wzynewfL2cdiadosuZh5wQEoBBmRM3aSauXlpgXpyhnkXvrokqg9A/640?wx_fmt=png&from=appmsg)
    
2.  计算该栅格的协方差矩阵
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43RmLXVVR5F9twVO49NSNIPsIYHWru6XYxAf3xIfVC84p4OCjwCA5vBA/640?wx_fmt=png&from=appmsg)
    
3.  设该栅格内各个点的分布服从正态分布N(q, Sigma)（该假设的根据是大数定律），则对于参考点云的栅格内的任意点x其概率密度为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43HXGPNnYj1ibiaYeAarJmQucyff2gW127FRBRdqeTO7ha6YhbIONXoYaw/640?wx_fmt=png&from=appmsg)
    

**b. 初始化待估计参数**, 待估计参数为变换矩阵（旋转角度Phi, x轴偏移量t\_x，y轴偏移量t\_y）

**c. 使用该估计参数将原始点云中点变换到参考点云的坐标系中**, 变换公式如下，(x, y)为待配准点云中点，(x', y')为待配准点云中的点变换到参考点云坐标系后得到的坐标值，Phi为旋转角，t\_x及t\_y为x和y方向上的偏移

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43mTOWMum2AxWTGjT0FTM8Uo5Hqa6WsfPWdHdz61TMZKM3nDzRW7nyDA/640?wx_fmt=png&from=appmsg)

**d. 计算原始点云中各点变换到参考点云后的概率密度值**

参考点云已经被分成多个栅格并且每个栅格在步骤a中已经估算出了它的概率密度函数。原始点云中的点变换到参考点云坐标系后，可根据其坐标值查找其落在了哪个栅格里，使用其所落栅格的概率密度函数计算其概率密度值。

**e. 将步骤d中所得的所有概率密度值加起来作为目标函数的值，如下**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43mGXcu0jUAmRS4tibLlhxXRiaItmCY9s2I2AjHN0blBCz580UefOLibgVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43dYibp5pxfHRZpGq0biaxsYWGCEuwiaMoHYKdceJB7SXg7icklXNQSEQgEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43Kekfe9ibtb6YhngUYtdWf9B1Dj6HmTjbMxySsF1ob7hER51ZyyfD7dw/640?wx_fmt=png&from=appmsg)

**f. 使用牛顿法（****梯度下降法****）更新一次待估计的三个参数(Phi, t\_x, t)y，得到一组新的变换参数。**

**g. 重复步骤c-f直至收敛。**

****三、******牛顿法优化目标函数**

### **一元函数****情景**

以求min f(x)举例（求f(x)的最小值），现已有f(x)极小点的第k次估计值x^(k), 在点x^(k)点将f(x)做二阶Taylor展开如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43TNURNpepAicTicIuDbe12AhaKffTjJjgHl2zFSbku3DeUNtkiboFQ9A8Q/640?wx_fmt=png&from=appmsg)

取其前三项记为Phi(x),如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43GQvaU6ahZUdS2dzv7KEY5tQDPyPZZf2ABzlPaveUwjYt7QwkksBSnQ/640?wx_fmt=png&from=appmsg)

在x^(k)附近可用Phi(x)来近似f(x), 如下，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43aO21kDvFYuB9X215ab3aZibG8y6awbeA6n8COAIfjmG5qgp8vFLegPA/640?wx_fmt=png&from=appmsg)

求f(x)的极小值便转换(近似)成了求Phi(x)的极小值. Phi(x)在其极小点处一阶导一定为0，所以我们找Phi(x)一阶导为0的点。

Phi(x)对x的一阶导如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43tXsJgprMq7SBo0NficBLeVF7SQdlNZbPB3MbpMErM1F0licaIDj0lbBA/640?wx_fmt=png&from=appmsg)

令该一阶导为0，便可求得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43gaOics16bngXguKvwTibTMT6njiacUXSDSsLQcBs9UbCgaX3xDAm5MHqg/640?wx_fmt=png&from=appmsg)

该x值即可作为f(x)在x^(k)附近的绩效点的第k+1次估计值，如此往复，直至收敛。

### 多元函数情景

多元函数下f(x)的Taylor展开如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43picls2OyoicbmM6Ur0PIoyHJ7wrZeickE0pvOzne0xs8TTfSb2J4KAvmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43F25uS79X4CEGc5SiczmPvWtkibnaU5k5CDicLaeiak9Ch2PYEsKjuHdh4g/640?wx_fmt=png&from=appmsg)

Phi(x)取其前三项近似f(x),如下  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43a53kt4Lre4NJjFgweiaGIiadianqqfSefIBsBpyKvXKibF63Upic8iapTtsQ/640?wx_fmt=png&from=appmsg)

Phi(x)的一阶导数如下,只对其前两项求导，忽略第三项的求导

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43eia3tWRicd4NiagwfksialBIxsCkSBqvzKszhJ7FqjKy1yg5b7hDEBcZqA/640?wx_fmt=png&from=appmsg)

为求极小值点，令其一阶导数为0，如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43cuFzP98VgfEU4MkpUlAic9hM7yxZqw38jHI5lyUgcHWdrvt9Q4gpJ3g/640?wx_fmt=png&from=appmsg)

得到如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43NsGKp6UZmgGB2iaJG5LNYia0Dibn6z5UrrYerODKWx1fepicfiaYC3MgHUQ/640?wx_fmt=png&from=appmsg)

进一步求得x如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43RmIEDkpk9swRibmbiaYPWwibKSs5xRqSlO8kEh9ciaCXKUteRE7icd30BVQ/640?wx_fmt=png&from=appmsg)

### 使用牛顿法优化ndt的目标函数

2D NDT的目标函数如下![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43hH8UshO8L3JYCSicoJ288f810utpibaO7dibHGfa0YtVVbJCd2awIrccQ/640?wx_fmt=png&from=appmsg)

###  每个迭代中在干什么

牛顿法意在迭代寻找最有的p以最小化目标函数f。每步迭代都在求解下式

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43cr4s0Yyq2eRpOlGm8bSibPu9JrpyhTIkcibaZtsWLdc3kFTzf9jAOJJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43o9CAIdIibmUT42qwkj4Y2QpAKKrOz77CuaAa6yXlHSz4UggagEtdh1g/640?wx_fmt=png&from=appmsg)

使用求解得到的delta p更新p

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo438IJjZMbJV04U1MRKrlTL53NrO6SDVah3NkJvYAI7veqyw9ydoAt8OA/640?wx_fmt=png&from=appmsg)

### 细看目标函数的求导

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43CXC800AEVopsXzaPMXFKDqWVqMo3WPeDqRTxnlq7ric8icu4iaKTLv6ibA/640?wx_fmt=png&from=appmsg)

**四、简易理解**

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43LENyo9VrwuKrrhUHMqTW3ibAef9oG721UUVBK5icDeGspdhHbePZTSCQ/640?wx_fmt=png&from=appmsg)**

将旋转和平移简化为只有平移，而协方差和平均值简化为两个方格内的匹配程度，第一行表示的是原始数据，也就是上一帧的情况，第三行表示变换后的数据，也就是当前帧，红色表示参数p，也就是变换情况，蓝色则表示根据变换逆推的上一帧情况。

简化之后，NDT算法实际上就是利用第三行的数据，寻找一个合适的红色箭头，使根据这个红色箭头导出的蓝色叉与第一行的数据匹配成都最好。人眼直接看的话马上就可以匹配出来是第一个红色箭头，但是计算机不会这样认为，计算机需要一点一点尝试，以第二个红色箭头为例，根据这个箭头产生的上一帧数据是蓝色的部分，将蓝色部分与第一行做比较，可以发现第二个格子虽然都有点，但是点的排布是不同的，所以相性实际上是不足够好的，所以就要换一个方向继续变换红色箭头，变换的方法就是牛顿法，通过牛顿法得到一个变化的方向，向着这个方向移动，最终找到了是第一个箭头的相性最好。从而完成了匹配，找到了最合适的位姿变化，从而也确定了两帧之间的变化关系。

**附录：**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43icLCZgoWJicRRBBHXZLDZNaIvuOVNU6bsd9s5ptnybJLIchFEq4F50Mw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo435RzSQmjGlicctN2kF8GI98pqsTYkiavbTzLVxBwI8oG4SlgOUHAqc1vQ/640?wx_fmt=png&from=appmsg)