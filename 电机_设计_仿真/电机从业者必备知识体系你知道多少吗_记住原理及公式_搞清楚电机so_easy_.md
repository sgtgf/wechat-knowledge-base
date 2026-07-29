# 电机从业者必备知识体系你知道多少吗？记住原理及公式，搞清楚电机so easy！

原创 电机新视界 2023-03-21 10:40 上海

> 原文地址: [https://mp.weixin.qq.com/s/SJuzJX-L\_NXN1gGmV86wnA](https://mp.weixin.qq.com/s/SJuzJX-L_NXN1gGmV86wnA)

**点击下方**

**关注我们**

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0ue8kGZ3FKfShpibHOiaothcRQKbhTTNOEv3kWYZezoNcviaMz9rdlGqfEUctXcfIXne5256xHpplJNw/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0t9SFhkt1HAm4WT89Y7MgPIcE263x4dAC4wt5Fiao2obORomDjicvEF3U1v13KYFKjtmZTtJVggnDCA/640?wx_fmt=png)

**

**来源：电机通**

电机，一般指电动机，也称马达，是现代化工业及生活中极为普遍的东西，也是将电能变为机械能的最主要设备。汽车、高铁、飞机、风机、机器人、自动门、水泵、硬盘甚至我们最普遍拥有的手机，都安装了电机。

很多初接触电机的或者刚学习电机拖动知识的，可能会觉得电机知识不好理解，甚至看到相关的课程就头大，有着“学分杀手”的称呼。下面通过零散式分享，可以让新手快速了解交流异步电机原理。

**★电机的原理：**电机的原理很简单，简单的说就是利用电能在线圈上产生旋转磁场，并推动转子转动的装置。学过电磁感应定律的都知道，通电的线圈在磁场中会受力转动，电机的基本原理就是如此，这是初中物理的知识。

**★电机结构：**拆开过电机的人都知道，电机主要是两部分组成，固定不动的定子部分以及转动的转子部分，具体如下：

1、定子(静止部分)

定子铁心：电机磁路重要部分，并在其上放置定子绕组；

定子绕组：就是线圈，电动机的电路部分，接电源，用于产生旋转磁场；

机座：固定定子铁心及电机端盖，并起防护、散热等作用；

2、转子(旋转部分)

转子铁心：电机磁路的重要部分，在铁心槽内放置转子绕组；

转子绕组：切割定子旋转磁场产生感应电动势及电流，并形成电磁转矩从而使电动机旋转；

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZmBgPlKTGd4icjcsxYCWDDf8eoUTibeIf6WvuooB9rVbYABxHZzVoYApWS8sVbywW8UAxolMdrVRmcO98UrYpTFg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**★电机的几个计算公式：**

1、电磁相关的

1）电动机的感应电动势公式：E=4.44\*f\*N\*Φ，E为线圈电动势、 f为频率 、 S为环绕出的导体（比如铁芯）横截面积、 N为匝数、Φ是磁通。

公式是怎么推导来的，这些事情我们就不去钻研了，我们主要是看看怎么利用它。感应电动势是电磁感应的本质，有感应电动势的导体闭合后，就会产生感应电流。感应电流在磁场中就会受到安培力，产生磁矩，从而推动线圈转动。

从上面公式知道，电动势大小与电源频率、线圈匝数及磁通量成正比。

磁通量计算公式Φ=B\*S\*COSθ，当面积为S的平面与磁场方向垂直的时候，角θ为0，COSθ就等于1，公式就变成Φ=B\*S。

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZmBgPlKTGd4icjcsxYCWDDf8eoUTibeIf6TSRos07MggjbahHjaibD7klno65yyyOVhWKfmAeXAKkr6TYHF6kFibAw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

将上面两个公式结合一下，就可以得到电机磁通强度计算公式为：  

B=E/（4.44\*f\*N\*S）。

2）另外一个是安培力公式，我们要知道线圈受到的力是多少，就需要这个公式F=I\*L\*B\*sinα，其中I为电流强度，L为导体长度，B为磁场强度，α是电流方向与磁场方向间的夹角。当导线垂直于磁场时候，公式就变成F=I\*L\*B了（如果是N匝线圈的话，磁通B就是N匝线圈的总磁通，而不需要再乘N了）。

知道了受力，就知道转矩，转矩等于扭力乘以作用半径，T=r\*F=r\*I\*B\*L（向量乘积）。通过功率=力\*速度（P=F\*V）以及线速度V=2πR\*每秒转速(n秒)两个公式 ，可以与功率建立上关系，得到下面序号3的公式。不过要注意，这时候使用实际输出扭矩，所以计算出的功率是输出功率。

2、交流异步电机的转速计算公式：n=60f/P

这个很简单，转速与电源频率成正比，与电机极对子（记住是一对）数成反比，直接套用公式就好。不过这个公式实际计算出是同步转速（旋转磁场速度），异步电机实际转速会略低于同步转速，所以我们往往会看到4极电机一般是1400多转，达不到1500转。

3、电机转矩、功率及转速的关系：T=9550P/n（P是电机功率、n是电机转速）

可以从上面序号1内容中推导出来，不过我们没必要学会推导，记住这个计算公式就可以。不过再次提醒，公式中功率P不是输入功率，而是输出功率，由于电机有损耗，输入功率不等于输出功率。但是书本上往往理想化，将输入功率等于输出功率了。

![](https://mmbiz.qpic.cn/mmbiz_gif/ZmBgPlKTGd4icjcsxYCWDDf8eoUTibeIf6ZJ4rMGrxB0qD6kmQCiaBzaOTSZqyVKQoSN0B05d7HEgBbUh15UV3BVg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

4、电机功率（输入功率）：  

1）单相电机功率计算公式：P=U\*I\*cosφ，如果功率因数为0.8，电压为220V，电流为2A，那么功率P=0.22×2×0.8=0.352KW。

2）三相电机功率计算公式：P=1.732\*U\*I\*cosφ（cosφ为功率因素、U为负载线电压、I为负载线电流）

不过这类的U和I与电机的接法有关，星形接法的时候，由于三个相隔120°电压的线圈公共端连接一起，形成一个0点，所以加载在负载线圈的电压实际是相电压；而三角形接法时，每个线圈两端各连一根电源线，所以加载负载线圈上的电压就是线电压。如果使用的是我们常用的3相380V电压，星形接法时候线圈是220V，而三角形则是380V，P=U\*I=U^2/R，所以三角形接法时功率是星形接法的3倍，这也就是为什么大功率电机采用星三角降压启动的原因。

掌握了上面的公式，理解透彻，电机的原理就不会在困惑了，也不会在怕学习电机拖动这种高挂科的课程。

**★电机的其他部件：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZmBgPlKTGd4icjcsxYCWDDf8eoUTibeIf6E4s6980CMyOSCCEkecYwcyWkTBA31Kiax9M16K9qicNzQ4GAJcxEFia5w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

1）风扇：一般安装在电机尾部，用于给电机散热；

2）接线盒：用于接入电源，如交流三相异步电机，还可以根据需要接星形或者三角形；

3）轴承：连接电机旋转和不动部分；

4、端盖：电机外面的前后盖子，起支撑作用。

  

  

**1**

**电工基本知识**

![](https://mmbiz.qpic.cn/mmbiz_png/XYbhsxBrNIIVo5UuDticZhqWEiaibiaAiaNs1rMwuCwpPa3icnUudhtSRI5BoHNickhd2TFGNJyXt2rWofRpLG9HfMyZQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/XYbhsxBrNIIVo5UuDticZhqWEiaibiaAiaNs1vTteAwBfzj7tsdF7licxdWUlakjJ6SykSgvAh1oyZYLXT9AGgFKn6oQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/XYbhsxBrNIIVo5UuDticZhqWEiaibiaAiaNs1S8Gl2UF5RoQNKGbiaRrrIemMjQGlic4MknrFMMO0pRWR3tZrjooicgdKw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**2**

**电气性能容差**

![](https://mmbiz.qpic.cn/mmbiz_png/XYbhsxBrNIIVo5UuDticZhqWEiaibiaAiaNs15xVSEVbzpMB4pdBWiaZWpvsZmXDiaMTvK4xr4dh9jHNqKA5zVnJggHfQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**3**

**电机绝缘等级及相应温度限值**

**耐热等级**

最高允许工作温度/℃

相当于此等级的主要

绝缘材料

Y

90

未浸渍过的棉纱、丝及纸等材料或其组合物所组成的绝缘结构；有机填料的塑料

A

105

浸渍过或浸在液体绝缘材料中的棉纱、丝及纸等材料或它们所组成的绝缘结构，如漆布、绸、管等；聚酰胺薄膜；浇注用聚酰胺树脂等

E

120

聚酯薄膜及其纤维；漆包线的绝缘漆；以纤维素纸和布为底料的层压制品、环氧、聚酯和聚胺酯的树脂和胶类

B

130

以云母片和粉云母纸为基础的材料，以及纸和布作衬垫的云母制品、玻璃漆布和玻璃漆管；以玻璃布为底料的层压制品；以无机物为填料的塑料

F

155

玻璃漆布、漆管；以玻璃布和石棉纤维为基础的层压制品；以无机绝缘材料为衬垫的粉云母制品；玻璃丝和石棉绝缘导线的绝缘

H

180

无机绝缘材料为半垫的云母制品；玻璃丝导线的绝缘、玻璃漆布、漆管；以玻璃漆布和石棉纤维为基础的层压制品；以无机物为填料的塑料；聚酰亚胺薄膜的复合制品；硅橡胶制品

C

180以上

云母、玻璃和玻璃纤维材料；电瓷、石英、玻璃云母模压制品；聚四氟乙烯、聚酰亚胺或耐高温有硅漆包线的绝缘

**注：表中Y、A、E、C级很少选用。**

**4**

**类电动机适用的负载特性**

![](https://mmbiz.qpic.cn/mmbiz_png/XYbhsxBrNIIVo5UuDticZhqWEiaibiaAiaNs1ArEWvjyH60Corn9mLiaT2O7d4aqSnIIau3WqhjvHJZjiarcdMk5uCPiaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tEibvMRb5SGtflb73T1Lz2IJibuLLVvYddsbpxkKAGJL4EqjTb1nwdtp4dLCAmcdicXySick1872uA2w/640?wx_fmt=jpeg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0sfqJ1JicA3UjnxeCgI2rnhVnib826LrxCBmrmSdvAZhshAibDgtDsDxnlJW0IMeoyFv0gfYCK3nPzDw/640?wx_fmt=png)

