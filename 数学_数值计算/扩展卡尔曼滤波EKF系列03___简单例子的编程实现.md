# 扩展卡尔曼滤波EKF系列03---简单例子的编程实现


> 原文地址: [https://mp.weixin.qq.com/s/uIDmobWSbVbA2-\_mwm2-Ew](https://mp.weixin.qq.com/s/uIDmobWSbVbA2-_mwm2-Ew)

第1节讲了个简单的KF例子，当时是手算(实际是用Excel中的内置函数)的，在了解了KF的细节后，就可以编程实现了。

**一**、类KalmanFilter定义****

建立了1个KalmanFilter类****，****数据成员主要包括：协方差矩阵m\_P、状态向量m\_x、过程噪声协方差矩阵m\_Q、测量噪声矩阵m\_R.

函数成员主要包括:初始化函数，先验估计(即预测过程)与后验估计(即观测更新)。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2WKILTzmbra2bhCMcHDU3avEkKJicwaFHVKcibVdEPia2yJAW9k05o5tgQ/640?wx_fmt=png&from=appmsg)

先验估计函数的实现，主要是计算先验估计以及对应的协方差矩阵。![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH27I8RicQw226j0iaul0HIdiab3D0w1zvRicOzlzgmZDbgW4vlJ0ZE001RMQ/640?wx_fmt=png&from=appmsg)

后验估计函数的实现，主要是计算卡尔曼增益、后验估计、以及更新协方差矩阵。![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2a9LzfTRPibWicxvZdptdqaWv9XWBw5O9TOYPTqOzXPHnh93aOSe94Xicw/640?wx_fmt=png&from=appmsg)

**二****、主程序实现**

观测数据如下图所示，是文本文件存储的，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2yokFpSoBFMpu8Dc5icX4yXVRB0bLVRHBLjQwl2GXYtnypP7Hic6u0fHg/640?wx_fmt=png&from=appmsg)

先初始化各矩阵，并分别给它们赋值，注意到P是给了5，R给了3，分别对应之间的估计误差与测量误差，状态x的初始值为40  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2TgiaqEHEN42thiaIUozUicyFGJ0DZ0IicBWy8TdawNTzfojjnvQCffJygA/640?wx_fmt=png&from=appmsg)

调用过程如下，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2dC0eqQrianNiaeAzjDGKtP5z8DKLxtZFQTXz2GdIPeJpwxxLRQhugsSg/640?wx_fmt=png&from=appmsg)

编译，执行，如下，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH28dkA1r53vWKzf1dER9xbc8htG0ZCOPHfeybKEaKLF75SOAZibpiaI5cQ/640?wx_fmt=png&from=appmsg)

 将最终打印的结果画图，如下，与之前一样  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2qCcUxCnmBH3I3O7qHN7kGDIYLiarVuVLtIMb6e0AibrmHcWSnRfGe0Bw/640?wx_fmt=png&from=appmsg)

**三、思考**

算法学习的第1境界，是能够手推核心公式，只有经过这个严谨数学推演的佐证过程，你才会从内心真正相信这个算法, 同时也让你感受到数学的伟大与魅力。

第2个境界，就是编程实现、简单案例验证算法，有时候通过了第1境界，第2个境界挺简单的，如这里的KF，但有些算法，理解算法是一回事，实现又是另一回事。通过简单案例的验证，可以初步领略到算法的功能。

第3个境界，是工程应用，这就复杂多了，需要考虑各种基于实际情况的参数设定、边界约束设定等，若有必要还需基于实际结果与预期的差异，不断修正算法，最有经过这个过程的洗礼，你才会最终完全信任这个算法，才是个合格的算法专业人员。  

个人觉得，作为算法从业人员，是需要基于职场专业赛道与个人爱好，建立自己的代码库。直接在Linux环境下，不依赖于任何IDE，用cmake管理自己的代码，这是最方便、自由的，任何学到的新东西，都可以立马编程实现，一些基础的函数，如输入文件读取、输出结果打印等，可以直接调用。但这需要注意，职场里的学习毕竟不同于学校，一定要紧扣自己的专业方向，不要贪多，跟你专业不相关的东西，学了也用不上，最终还是会忘掉的，成年人的世界，需要记住的东西实在是太多了。