# Python求解二维Navier–Stokes方程(不可压缩流体)


> 原文地址: [https://mp.weixin.qq.com/s/hHMF4bxwNrDJTIIDMTrSFQ](https://mp.weixin.qq.com/s/hHMF4bxwNrDJTIIDMTrSFQ)

Navier–Stokes方程是描述流体力学中流体流动行为的基本偏微分方程，它以法国物理学家克劳德·路易斯·纳维尔和爱尔兰物理学家乔治·加布里埃尔·斯托克斯的名字命名。Navier–Stokes方程考虑了流体的粘度，压力梯度以及作用于流体的外部力等因素。下面是Navier–Stokes方程，第一个方程表明动量守恒，第二个方程表明质量守恒。

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_000_45fdde1a267a.png)

在第一个方程中g表示重力(通常用f表示外力项，大多数情况下只有重力则可用g表示)。当不考虑流体的粘度时(如气体烟雾)，Navier–Stokes方程可以转化为Euler方程。

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_001_1f05d8c139f5.png)

现在我们写出二维形式(u,v)的NS方程：

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_002_72be5b5f4dee.png)

对于可压缩流体来说，可以通过状态方程来确定压力与其他量之间的关系，但是对于不可压缩流体，不能使用状态方程来确定压力，因此还需要额外的方程来对系统进行约束，通过对动量方程取散度，可以得到Pressure-Possion方程。  

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_003_8aa589411030.png)

现在我们可以来求解NS方程，我们使用有限差分法来求解。在二维空间中，我们使用均匀的网格对区域进行离散。  

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_004_ed4cc5e1f8d2.png)

在Pressure-Possion方程的左侧，采用二阶中心差分进行离散化，对于动量方程，采用一阶前向差分和一阶后向差分进行离散化，代入NS方程和PP方程，最终可以得到p,u,v的值。

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_005_cb6feb1c1676.png)

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_006_0acac2a931f9.png)

接下来通过代码对一个经典的CFD问题进行求解。如下图所示在一个二维腔体中，x,y方向均为2，其中顶部x方向的速度为1，其余区域的速度和压力初始均为0。

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_007_efc70ee43152.png)

```
import numpy
```

```
nx = 41
```

```
plt.figure(figsize=(8, 6))
```

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_008_f833b861a210.png)

由于离散后的Pressure-Possion方程十分复杂，因此使用两个函数来bulid\_up\_b和pressure\_possion来进行定义。

```
def build_up_b(b, rho, dt, u, v, dx, dy):
```

```
def pressure_poisson(p, dx, dy, b):
```

```
def cavity_flow(nt, u, v, dt, dx, dy, p, rho, nu):
```

```
u = numpy.zeros((ny, nx))
```

```
fig = pyplot.figure(figsize=(11, 7), dpi=100)
```

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_009_04bcfe44a8f4.png)

```
fig = pyplot.figure(figsize=(11, 7), dpi=100)
```

![](Python求解二维Navier_Stokes方程(不可压缩流体)_images/img_010_5a60c5fab651.png)

参考链接：  

_https://barbagroup.github.io/essential\_skills\_RRC/numba/4/_

_https://www.wikiwand.com/en/Navier%E2%80%93Stokes\_equations_

_https://lorenabarba.com/blog/cfd-python-12-steps-to-navier-stokes/_