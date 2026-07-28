# SLAM基础系列01---点云配准，迭代最近点(Iterative Closest Point，ICP)


> 原文地址: [https://mp.weixin.qq.com/s/1dlUQs49Lr46SgrichxGPg](https://mp.weixin.qq.com/s/1dlUQs49Lr46SgrichxGPg)

**一、****找对应点**  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH20QiagPvic96BABVYgksqczibj6uzSIHKMXyIVkWT9xINAzwicPEOiaUibtfA/640?wx_fmt=png&from=appmsg)

如上面的点云图所示，雷达扫到了同一个物体，但是由于雷达本身有移动，所传回的物体的点云也有所移动，我们知道这些点云其实就是无数个x、y、z，那么我们如何通过这么多的x、y、z来求得雷达的移动距离和偏转角度呢？

首先第一步，就是要找对应点，也就是迭代最近点的关键！何为对应点？在2D雷达环境下，定义两坨点云Pi,Qi，以Pi点云中的p1点为例子，Qi中离p1最近的点，就认为是p1在Qi点云中的对应点，Pi中的其它点云也一样。这就是为什么叫迭代最近点。比如下图的两个黑点，point1(30,39)的对应点就是point2(20,29)。因为只有point2到他的距离是最短的。![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43S2lkLnNrtzl5b1uQvBo43xrucicL1mUGs22tmueYMd9t243v2SkOEvRaacT0AAa1L64uOLAFgnNw/640?wx_fmt=png&from=appmsg)

**二、构造目标函数**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2cbPOJEq1wFeTCkemRS41A7osD5aicF5QmVMu9o8nR6JrzInx9FsXd5g/640?wx_fmt=png&from=appmsg)

**注解**：P是前一时刻的点云数据，如直角坐标系下的x、y、z坐标，Q为后一时刻的点云数据(各点与P中对应后)，因为激光雷达的运动，两个时刻之间的点云存在旋转与平移，点云配准就是求出最优的旋转及平移变换矩阵

**三、**求解t

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2lY7o5uD6kC0IhwTV5Iba4yqPe61cMskD4CLfkEYF3FBTul7cPwvoaA/640?wx_fmt=png&from=appmsg)

**注解**：代价函数F是R、t的函数，为了求F的极小值，可对自变量t求偏导，令偏导数为0，得出t与R之间的关系。

**四、**求解R

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2WmXl7MDaRibGC4ueHwr20jOdVGT6x3atWZO7wRIMufCtx1urKuHY9yA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2DqV7orhwejpKj5jDVIVibia9drXTYFp5ucxDHHicr7FnNytvgzqic91MWQ/640?wx_fmt=png&from=appmsg)

**注解**：因R是旋转矩阵，在完全平方项分解时,![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2qSOWrX4SiavcLym2IyjwwLYtBVOBZhh13A01jTkKo3qD1TEEOicQcvxg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2uWT4ur7AkbEZqNa4NJt2puT4AiaphOFS1nYgsk7d6ydXpwCeFRDvedw/640?wx_fmt=png&from=appmsg)

**注解**：tr(AB) = tr(BA)

**五****、实现难点**

经过上面的步骤，其实就可以得到R和t了，但是，这时候就出现了一个问题——结果不准确。在算法实现中，如果出现了求解值不准确的情况，那么一般做法就是——多求几次，也就是**迭代**！可以参考如下：

1.  从Q点云中一一找到P中点的对应距离最近点，构成最近点集M1
    
2.  把M点集存入Eigen矩阵中，和P点云去中心化后，求SVD分解，得到R矩阵和t向量（一个旋转一个平移）
    
3.  开始迭代，通过R×A+T得到新的点云P1
    
4.  重新执行1到3步骤，这次是从Q中找P1的最近点
    
5.  求得到的点云Pn和它的最近点集Mn的平均距离dst，当dst小于设定的阈值时，跳出循环
    

如果发现还不准确，那么有可能是它的迭代条件——也就是平均距离dst判断出错了，出现这种原因一般就是点云中出现了离散点，导致某两点的距离出现了异常，带动了整个dst判断出错。解决方案如下（很管用）：

1.  遍历P，找寻最近点，如果P中的某个点pi和它的最近点距离大于某个阈值，则剔除，不参与接下来的计算。
    
2.  从Q点云中一一找到P中点的对应距离最近点，构成最近点集M1
    
3.  把M点集存入Eigen矩阵中，和P点云去中心化后，求SVD分解，得到R矩阵和t向量（一个旋转一个平移）
    
4.  开始迭代，通过R×A+T得到新的点云P1
    
5.  重新执行1到4步骤，这次是从Q中找P1的最近点, 每次执行都要剔除一下离散点
    
6.  求得到的点云Pn和它的最近点集Mn的平均距离dst，当dst小于设定的阈值时，跳出循环