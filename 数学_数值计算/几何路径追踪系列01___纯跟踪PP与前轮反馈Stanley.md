# 几何路径追踪系列01---纯跟踪PP与前轮反馈Stanley


> 原文地址: [https://mp.weixin.qq.com/s/FOFdUEbs8r1cDDHKtCWyrg](https://mp.weixin.qq.com/s/FOFdUEbs8r1cDDHKtCWyrg)

在机器人领域，一种最受欢迎的路径追踪算法就是几何路径追踪。这些方法主要利用**车辆和路径之间的几何关系**去设计相应的控制律解决路径跟踪问题。

****一、纯跟踪******PP(Pure Pursuit)**

**![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_000_e5cae2f9f61f.png)**

  

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_001_804db4ee8c5b.png): 预瞄准距离

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_002_fe08f4421fe8.png)：目标跟踪点

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_003_7ac44c2210df.png)：预瞄准方向与车辆航向之间的夹角，即车辆坐标系下预瞄准的朝向角

R：瞬时旋转半径，也是后轴位置与车辆前方目标点之间的圆弧半径  

由正弦定理可知：

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_004_54e1ecc518d3.png)

实际应用中，这个![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_005_7ac44c2210df.png)不太好求，故可用另一张图进一步化简  

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_006_29d43638f457.png)

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_007_cfd7dc32d438.png)

****二、前轮反馈Stanley********![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_008_deb487b41e6f.png)****

Stanley是一种基位置误差![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_009_a04f5d9b93c0.png)的非线性反馈函数，它是车辆前轴中心点与目标路径最近点![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_010_d4baddbebf1c.png)的距离，由上图可得角度误差为

![](D:\电脑文件\公众号知识库\数学_数值计算\几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images\img_000_dd685a46a4f5.png)

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_012_360308a31afb.png)：车辆实际航向角

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_013_a3be3ed240c9.png):  最近点的期望角度

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_014_ada730d70773.png)

同时可知，![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_015_c203db1c07ae.png)**的物理意义是在当前车速下，车辆前进前视距离所需的时间的倒数。**

所需的前轮转角为

![](几何路径追踪系列01___纯跟踪PP与前轮反馈Stanley_images/img_016_4ef16e7082a4.png)

****三、总结****

PP与ST比较简单，代码就不说了，需要注意的是位置及角度误差符号。至此，车辆的主流控制算法已经介绍完了。根据我的经验，算法理解及实践是一回事，工程化其实又是另一回事，这中间会有很多让你“抓狂”的环节。车辆控制暂时就先告一段落了，后续的主要更新内容是基于B样条曲线的轨迹拟合以及信息融合、SLAM相关。