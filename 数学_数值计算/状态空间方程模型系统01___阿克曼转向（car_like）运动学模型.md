# 状态空间方程模型系统01---阿克曼转向（car-like）运动学模型


> 原文地址: [https://mp.weixin.qq.com/s/aSDt62QuQVw0saSaluDscA](https://mp.weixin.qq.com/s/aSDt62QuQVw0saSaluDscA)

****一、****状态空间方程****

一般而言，算法都是用于求解模型的，如数学模型、物理模型、控制模型等。而描述系统模型的方式有很多种，有一种最常见的是状态空间方程

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42uRGG6TOlRs7iczb54iamV6OWoGAqBibTQ3LmRnibLveWl1kI8IldicnuibhYEfJGLrAmxhTCE7Ye9UeJw/640?wx_fmt=png&from=appmsg)

这里的x是状态向量，根据所研究对象的不同，可选择不同的状态向量。若想了解汽车的位移、速度、加速度，则这3个量都可以当作状态向量的分量；如果仅想研究位移与速度，则状态向量只取2个就可以；u是系统的输入，也是个向量；A是状态转移矩阵，B是输入矩阵。

第1个式子表示的是第k+1时刻的状态与第k时刻的状态、输入之间的关系，也就是说，**在已知状态转移矩阵A与输入矩阵B的前提下，基于k时刻的状态与输入，就可以得出k+1时刻的****状态**，**它****描述了****物理系统中，状态变化的规律，揭示了物理系统的本质。**

第2个式子是描述了输出向量y与状态向量x与输入u之间的关系，与所研究的问题直接相关。

****二、car-like车辆的****运动学模型****

为了得到car-like车辆的运动学模型，我们作如下分析。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMc7zDhNrPLImMl3CKNXIqOPaFTDaOt3QVhrYfdKBGfpBic0gUEEWqGdA/640?wx_fmt=png&from=appmsg)

转向角  前后轮的转向角用δf和δr表示，模型中前后轮都可以转向。于只有前轮转向的系统，后轮转向角δr可以设置为0;

重心 点C代表车辆的重心，A点和B点到重心的距离分别用lf和lr表示，轴距表示为L = lf \+ lr ;

速度 车辆重心的速度用V表示，与车辆纵向轴的夹角为β ，该角度叫做车辆的滑移角;

运动描述  假设车辆平动，车辆运动状态可以用三个坐标量描述：X、 Y 和 Ψ。其中( X , Y ) 代表车辆重心的位置，Ψ描述了车辆的方向;

条件假设  假设速度矢量V的方向在点A点和B点的方向与转向角的方向相同，换句话说，在A点的速度矢量与车辆纵轴的夹角为δf ，同样B点的速度矢量与车辆纵轴的夹角为δr。也就是说**前后轮的滑移角都为****0(车辆本身的滑移角β不为0)**。该条件假设成立前提的是车辆速度很低(<5m/s)，此时轮胎产生的横向力很小，可以忽略;

•左右轮等效为单个轮子  左右前轮合并为单个轮子，其中心点为A点，同样后轮等效后的中心点为B点；

•轨迹半径  点O 代表车辆的瞬时旋转中心，线段AO 与BO与前后两个转轮方向垂直，他们的交点即为O 点，线段OC的长度代表车辆的轨迹半径R;

•航迹角车辆重心处的速度垂直于OC,车辆速度矢量与车辆纵轴的夹角为β，车辆的航向角为Ψ，则航迹角为γ =Ψ + β。

**偏航角变化率：**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMvZSGu14wckUb8PAFvibc9v432w5SbCdQhMBEUx8qcbT7yc3NibrFgYvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMZrVdDSg5zL32zUiaWfhzauTibxOQBwiahDzl9YNCr2HhoL0ja5lePianbg/640?wx_fmt=png&from=appmsg)

**滑移角：**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMAhFcWiazdxW1BmebqWeu3KLbNFoPoxzmsUfgBvas3TUhEoR5OB2QelA/640?wx_fmt=png&from=appmsg)

由此可得**运动学方程**如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMOia6DJ7HWhEoJ3ZHPGenQCLFszlv7agPI9x2Cd6azhbNrPm3Cy36TUg/640?wx_fmt=png&from=appmsg)

****三、2种典型场景****

后轮固定，纯**前轮转向系统**：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMwTQVq8mf8JeJ0whHjFDzWsicZ2FUaToHvaib4ZHS8LNVCg3fpQ8EbibfQ/640?wx_fmt=png&from=appmsg)

前后轮转角相等，前后轴距相等，简化的**4轮转向系统**：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMJia07PrpBgm6WZwlqnCN11aRZVE3c1y7vXIgqndpc12xicXvxjVyahHg/640?wx_fmt=png&from=appmsg)

可以看出，**简化的4轮转向系统实际上就是轴距减半的前轮转向系统**  

****四、线性化****

上述得到的系统是非线性的，实际工程中，为了处理方便，一般都会将其线性化，以前轮转向为例：

状态向量

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMf03xV6NCr2At1KnrVCUaB2e4h6l6ibsSf3cqLZWyVh9D6MfTicFmBTtA/640?wx_fmt=png&from=appmsg)

系统输入  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMUyEibiaIZdic5xnn7RO3OeHFXsbc9jgq45O9UibgYjkFVs3Tsv9Ogf9SJQ/640?wx_fmt=png&from=appmsg)

由此，可得线性化后的状态转移矩阵与输入矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNM5ZG7DAXS9ppDun5jKKMtlLzP6I92fjFJ8qufp9fCx28VUkEFpWiaEuQ/640?wx_fmt=png&from=appmsg)

********五、离散化********

线性化后的系统方程依然不能被计算机处理，还需要进行离散化：

离散化有很多种方式，我们采用最常见的**前向欧拉**法，原理如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNM4bfKcnx2rLtaADmmZSdxyVQB4YUvHfTvSg5XJUYjcPVlHSVEGexMDg/640?wx_fmt=png&from=appmsg)

可以单独写个离散化函数，c++版本如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNM8r96OofbT6VJ7iceryZc6svefSKyDpqU2LemhDaKP3K0rDbibyk1g3JA/640?wx_fmt=png&from=appmsg)

也可以在线性化后的状态转移矩阵与输入矩阵里直接求

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMibFR4YDV4SqUOKw5TefteYrkN0FBA40ZdCMb3bAmI2coteVicy9JZkAQ/640?wx_fmt=png&from=appmsg)

****六、结论****

即**完整的状态空间方程**为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40WDkS3Wzy7ry1e9ez9KeNMxMBbfhUgHnmaLbIcjibZR6DoQiaWEEpnUr3b46UGeJ0gGibYqkv3kvpmw/640?wx_fmt=png&from=appmsg)

从另外的一个视角来看，上述公式也是个完整的正向里程计算过程。

**注意**：如果读者朋友是初学者，会对这种用矩阵表达的模型不是很有“感觉”，觉得作者有点“故弄玄虚”，尤其是输出方程，本身就是状态变量，还要搞个单位矩阵，有点多余。但我想说的是：

-   不管是社会治理，还是科学研究，大家都是分工协作的，你不可能什么事情都自己做，什么轮子都自己造，肯定会利用他人的研究成果；
    
-   而在科学研究中，理论上，矩阵是非常规范的表达方式，且也有自己的一套体系-矩阵论，非常优美，有兴趣的朋友可以去了解下，会收益终身。实践中，矩阵运行非常方便，有大量的第3方库支持矩阵运算，且效率非常高，如C++有Eigen模块，Python有numpy模块，大家最熟悉的科学计算软件matlab、图像处理领域的openCV也是基于矩阵运算的。
    

所以，在工程算法中，我们也采用该方式，也希望读者朋友们慢慢熟悉。