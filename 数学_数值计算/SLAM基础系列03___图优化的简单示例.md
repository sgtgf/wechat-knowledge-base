# SLAM基础系列03---图优化的简单示例


> 原文地址: [https://mp.weixin.qq.com/s/WevvzbwRMavHP-O7UgIs1w](https://mp.weixin.qq.com/s/WevvzbwRMavHP-O7UgIs1w)

SLAM问题的处理方法主要分为滤波和图优化两类。滤波的方法中常见的是扩展卡尔曼滤波、粒子滤波、信息滤波等，这类SLAM问题是递增的、实时的处理数据并矫正机器人位姿。比如基于粒子滤波的SLAM的处理思路是假设机器人知道当前时刻的位姿，利用编码器或者IMU之类的惯性导航又能够计算下一时刻的位姿，然而这类传感器有累计误差，所以再将每个粒子的激光传感器数据或者图像特征对比当前建立好的地图中的特征，挑选和地图特征匹配最好的粒子的位姿当做当前位姿，如此往复。当然在gmapping、hector\_slam这类算法中，不会如此轻易的使用激光数据，激光测距这么准，当然不能只用来计算粒子权重，而是将激光数据与地图环境进行匹配（scan match）估计机器人位姿，比用编码器精度高出很多。

 在图优化的方法中（graph-based slam），处理数据的方式就和滤波的方法不同了，它不是在线的纠正位姿，而是把所有数据记下来，最后一次性算账。

**一、****基本概念**

**节点**（Nodes/Vertices）：在SLAM图优化中，节点通常代表机器人在特定时间点的位姿（pose），即位置和方向的组合。每个节点包含了机器人在该时刻的空间坐标和旋转参数，可以是2D或3D坐标系下的表示。

**边**（Edges）：边则代表了节点间的关系或约束。这些约束可以源自多种来源，如：

传感器观测：如激光雷达、摄像头等设备提供的关于环境中特征点或其他地标相对于机器人位姿的观测数据。

运动模型：如里程计（odometry）数据，描述了机器人相邻时刻之间的相对位姿变化，如轮式机器人基于电机转数和车轮半径计算的平移和旋转。

回环检测：当机器人回到先前已访问过的地点时，回环检测产生的约束，它强制要求机器人在不同时间但相同物理位置的位姿一致。

![](https://mmbiz.qpic.cn/mmbiz_jpg/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XsG7ibyEOHibnlGLpz8WjCgcOshwQVyYko9gAMDu7ckQ7eVuS8vgQeYtg/640?wx_fmt=jpeg)

**权重**（Weights）：边常常附带权重，表示对应约束的置信度或不确定性。权重通常与观测噪声模型或传感器精度相关联，用于在优化过程中平衡不同约束的影响。

**二、****示例1(运动与回环检测构成边)**

 如下图所示，假设一个机器人初始起点在0处，然后机器人向前移动，通过编码器测得它向前移动了1m，到达第二个地点。接着，又向后返回，编码器测得它向后移动了0.8米。但是，通过闭环检测，发现它回到了原始起点。可以看出，编码器误差导致计算的位姿和观测到有差异，那机器人这几个状态中的位姿到底是怎么样的才最好的满足这些条件呢？

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XFmSfI7DwqKN2y0Vn4LDYo3ObGsBtKpP0fj6LOlVNoUlhA3C43SSzxw/640?wx_fmt=png&from=appmsg)

首先构建位姿之间的关系，即图的边：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XiazpwfiaxiaATnrAOicxk4VQy90I6dSrdUjQP3YO0FOvj0rfD8aBZLLbKQ/640?wx_fmt=png&from=appmsg)

线性方程组中变量小于方程的个数，要计算出最优的结果，使出杀手锏最小二乘法。先构建残差平方和函数：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XD8lp7KEspcibxBj5MVMcUzetaEb5GeXiadUJWd9O11licpPqQa0nOBbpA/640?wx_fmt=png&from=appmsg)

为了使残差平方和最小，我们对上面的函数每个变量求偏导，并使得偏导数等于0.

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XEbibXcTQZHibZ6sia58IGILt3Ric8kgL2L2eIZibibktNuicxBrtbU2xwT4mw/640?wx_fmt=png&from=appmsg)

整理得到：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XeQqrcP5jicvmbXfibdBcQCfzzyRrFssOYQclPEWI3ds3qlNUECZ306jA/640?wx_fmt=png&from=appmsg)

接着矩阵求解线性方程组：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XrwpLBPFrN2uQc0WbU0Lliagej94LmAUr5fiaDWmAe7ia1VknqwJyFQp7g/640?wx_fmt=png&from=appmsg)

用matlab编程验证：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XoiaWd8Fibar8NddibhGniaqU98vibTuAllvZ8ZFMKPfrnkxuUlOpkwhfJDg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2X5SDqIaREFMtcDOiaZuCnovKeZtMvlmicvwCwtsz1rZl2Tiboiaib669RUbA/640?wx_fmt=png&from=appmsg)

在这个例子中我们发现，闭环检测起了决定性的作用。

**三、****示例2(路标检测构成边)**

**场景1：相同置信权重**

前面是用闭环检测，这次用观测的路标（landmark）来构建边。如下图所示，假设一个机器人初始起点在0处，并观测到其正前方2m处有一个路标。然后机器人向前移动，通过编码器测得它向前移动了1m，这时观测到路标在其前方0.8m。请问，机器人位姿和路标位姿的最优状态？

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XRDYtChib2QXiatBIVjlEib5iaSyBb6QYdYClfP2rkWmaHfPLQAXYWKJ3pw/640?wx_fmt=png&from=appmsg)**

在这个图中，我们把路标也当作了一个顶点。构建边的关系如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2X04wLPI36CDEhljUeLIku3Plbk64YgZjzMIOSQxPU4sFdqHamIVK03w/640?wx_fmt=png&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XMoJ3ITkmDIsUiauaDZ9icuBEZW9Ec42qGSNE0fcoB6nutj1X9jVicW2RA/640?wx_fmt=png&from=appmsg)

残差平方和：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2X4VaILGW3dpDstgibeCRiaFWrxUS9nnsvu7kgLVeiaYI7YMia86lxfAQXUA/640?wx_fmt=png&from=appmsg)  

求偏导数：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XkE0G7Hv9oxIhHLkGSkyCX2HgIJSFz3syIbPocLibyjAawy7uN1yZ82g/640?wx_fmt=png&from=appmsg)

最后整理并计算得：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XrFWKofcicDT21TnTa9hQFicWxXBBQZXnc7bgCyIOJeCmRbmZzsmZbX6Q/640?wx_fmt=png&from=appmsg)

用matlab编程验证：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2X3tvkmUy5hI9Jmfib3DbGn1UeIB9JEJJiaMwpmGRibrFU6lWPQwjTtMFaA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2Xo3v9A76KUqNu5AdTGCEBh377x3x8ZspUghwrdyaQbOdyvmDibh6qL3g/640?wx_fmt=png&from=appmsg)

得到路标和机器人位姿：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XdHGKTr0ahyulZ48CsafN371aGHsic5pTJHgiciaCibUic3sZjKOZzicduBwQ/640?wx_fmt=png&from=appmsg)

****场景2：**加大轮速编码器的权重**

   接下来，将引入了一个重要的概念。我们知道传感器的精度是有差别的，也就是说我们对**传感器的相信程度应该不同**。比如假设这里编码器信息很精确，测得的路标距离不准，我们应该赋予编码器信息更高的权重，假设是10。重新得到残差平方和如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2X13FgkibrmGicb0RgIVdFNpTJSAZdZMwytZt6DibNWTzybs7JAGxWV6Tog/640?wx_fmt=png&from=appmsg)

求偏导得：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XD2Tk9OTodkMAqibL8oTcNzw5tHJg6kv9sht3icYpgC5qrES7NkicJPm6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XpuZRYcnEA1PPicJa6XDI6aLmsefproUTw4qjsrGTxhd9iabjDuabERiaw/640?wx_fmt=png&from=appmsg)

转换为矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XEjqG6rIUZ3RKk4tfyRpkosNoXzcp55jF51GI5YjPYHXcvsX49S71Zw/640?wx_fmt=png&from=appmsg)

用matlab编程计算：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XNE00x5hiacQsEmDh1kmAT4e5e84CL58m2r63dct0FPmJ1lrhXeib0XaQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XRJAqiapqHXePqv6vSK4pbdygYx2RsIrQYn9EgYgfNXWJtHzWQrZuTFA/640?wx_fmt=png&from=appmsg)

得到:

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XoNEMVfibMc2sRUhGQMiatics8PAiaLCx5fTVxmIpTiaiclb7UyD3icNTU84jg/640?wx_fmt=png&from=appmsg)

****场景3：**加大测距传感器的置信权重**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2X40l1vcR4ob3953JrGDZjJANfpzoyt5NqRZkicpP4VficNCBRmV9W4l2g/640?wx_fmt=png&from=appmsg)

用matlab编程计算：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2Xx0Wib94adFLxM47Cib0KOPYy7ic7icHTPliaKPYm0TH3iaUd3gy5JDiaIuXVQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XM9rffP7S81PAIDTWKy4uOTjQaQ60icJMVGttpfO40PwT3yJfDNCQCBg/640?wx_fmt=png&from=appmsg)

得到:

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XQbQZEVnMlXRdIr0xDJZcbVnU9pFPyvCgXUGia0Us8187w6tVbib07x5w/640?wx_fmt=png&from=appmsg)

**对比分析**

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XRDYtChib2QXiatBIVjlEib5iaSyBb6QYdYClfP2rkWmaHfPLQAXYWKJ3pw/640?wx_fmt=png&from=appmsg)****

相同权重，得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XdHGKTr0ahyulZ48CsafN371aGHsic5pTJHgiciaCibUic3sZjKOZzicduBwQ/640?wx_fmt=png&from=appmsg)

加大轮速编号码器的置信权重， 得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XoNEMVfibMc2sRUhGQMiatics8PAiaLCx5fTVxmIpTiaiclb7UyD3icNTU84jg/640?wx_fmt=png&from=appmsg)

加大测距传感器的置信权重， 得

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2XQbQZEVnMlXRdIr0xDJZcbVnU9pFPyvCgXUGia0Us8187w6tVbib07x5w/640?wx_fmt=png&from=appmsg)****

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41nZmOq11SlXFVpB5WAcK2Xp32oNsU3jeia1R4yiadyB0MLWHEkcszQKtmVZ8J1Dk2WM7B0r2SsXRpQ/640?wx_fmt=png&from=appmsg)

-   轮速编码器置信权重分析：当更加相信轮速编码器时，代表轮速编码器约束的x1- x0 = 1在场景2中更加得到体现，即1.01比1.07和1.17更加接近于1；另外，对比场景1与场景3，由于场景3加大了测距传感器的置信权重，相当于“稀释”了轮速编码器的置信权重，故1.17比1.07更加远离1
    
-   测距传感器置信权重分析：当更加相信测距传感器时，代表观测约束的L0-x1 = 0.8 与L0 - x0 = 2在场景3中更加得到体现，即0.81比0.89和0.86更加接近于0.8，1.98比1.9和1.93更加接近于2；另外，对比场景1与场景2，由于场景2加大了轮速编码器的置信权重，相当于“稀释”了测距传感器的置信权重，故1.9比1.93更加远离2。
    

上述例子，比较清晰地阐述了图优化的基本思路，同时读者也能体会到**优化**这个工具的力量，其实就是**通过对约束条件施加不同的权重而博弈**，最终让目标函数最优(利益最大化)，这又何尝不是一个组织运作的缩影呢？从家庭，到企业，到国家，都是如此。