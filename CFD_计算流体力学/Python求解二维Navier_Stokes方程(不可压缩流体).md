# Python求解二维Navier–Stokes方程(不可压缩流体)


> 原文地址: [https://mp.weixin.qq.com/s/hHMF4bxwNrDJTIIDMTrSFQ](https://mp.weixin.qq.com/s/hHMF4bxwNrDJTIIDMTrSFQ)

Navier–Stokes方程是描述流体力学中流体流动行为的基本偏微分方程，它以法国物理学家克劳德·路易斯·纳维尔和爱尔兰物理学家乔治·加布里埃尔·斯托克斯的名字命名。Navier–Stokes方程考虑了流体的粘度，压力梯度以及作用于流体的外部力等因素。下面是Navier–Stokes方程，第一个方程表明动量守恒，第二个方程表明质量守恒。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2vbYJLaAU88j0rbA9g3qZ8iaBuB9fcvM5BjicFQ8ia94C8Q76ibowiastHAQ/640?wx_fmt=png&from=appmsg)

在第一个方程中g表示重力(通常用f表示外力项，大多数情况下只有重力则可用g表示)。当不考虑流体的粘度时(如气体烟雾)，Navier–Stokes方程可以转化为Euler方程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2AKF77icQia9HQWibicKGJbiapt4tWdOB3MFLpfR2hicKDSV7Nm7ZajryWDyQ/640?wx_fmt=png&from=appmsg)

现在我们写出二维形式(u,v)的NS方程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2flaQd15eD5IrcfI5PfQXUfZBY8ffqJOxJ2T7FR3Wd3RnWHuz2VgOHA/640?wx_fmt=png&from=appmsg)

对于可压缩流体来说，可以通过状态方程来确定压力与其他量之间的关系，但是对于不可压缩流体，不能使用状态方程来确定压力，因此还需要额外的方程来对系统进行约束，通过对动量方程取散度，可以得到Pressure-Possion方程。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2maH0iaWNicUqFyg7nJXyicQYuQS52yS7uc6me437MGTiaJCGQG3WqBT90A/640?wx_fmt=png&from=appmsg)

现在我们可以来求解NS方程，我们使用有限差分法来求解。在二维空间中，我们使用均匀的网格对区域进行离散。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2asb0tXGd5cSXw4e9o7JZbiaPicFh0YWwG8QfYWQAvfcFxDEr1aKFoRkA/640?wx_fmt=png&from=appmsg)

在Pressure-Possion方程的左侧，采用二阶中心差分进行离散化，对于动量方程，采用一阶前向差分和一阶后向差分进行离散化，代入NS方程和PP方程，最终可以得到p,u,v的值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u27nofAGXA6FFS3ib0ff9NIYNs9weHCDPhUM5Yn5ZtnlsaERhFzia59QgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2oQGksBelWXia23OKREE8OfMaLsgDjb9DEDpa9oUkIRFCdZZM3P87v2w/640?wx_fmt=png&from=appmsg)

接下来通过代码对一个经典的CFD问题进行求解。如下图所示在一个二维腔体中，x,y方向均为2，其中顶部x方向的速度为1，其余区域的速度和压力初始均为0。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2FNwRTiaX65kOjt0R8ujDw20DmTKzPFbPRXDP2sJQZ91iaMBG1sxBzGkA/640?wx_fmt=png&from=appmsg)

```
import numpy
```

```
nx = 41
```

```
plt.figure(figsize=(8, 6))
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2VnxOVXB1QHwXuXicvcicVRmcHKXv00qr2FD9ibkc2ehM7BYkddrMXgmpA/640?wx_fmt=png&from=appmsg)

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

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2wRQP8bzZIEal0t3bJVTqAcEgQQ4ouMB3UJQN52VUrIhpbATv7uHLUQ/640?wx_fmt=png&from=appmsg)

```
fig = pyplot.figure(figsize=(11, 7), dpi=100)
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/E2Y5iaDTbrZPxhv5I3A5Yh7zCEC0q43u2icppcut2W2moyNuEZmKy0m4vkJMb5JialfMC3uWStn6ubMfkMUsad0Vg/640?wx_fmt=png&from=appmsg)

参考链接：  

_https://barbagroup.github.io/essential\_skills\_RRC/numba/4/_

_https://www.wikiwand.com/en/Navier%E2%80%93Stokes\_equations_

_https://lorenabarba.com/blog/cfd-python-12-steps-to-navier-stokes/_