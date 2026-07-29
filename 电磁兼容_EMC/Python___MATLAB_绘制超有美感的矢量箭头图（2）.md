# Python & MATLAB 绘制超有美感的矢量箭头图（2）


> 原文地址: [https://mp.weixin.qq.com/s/Oe\_ilXOmWK0yULRi1sO0kg](https://mp.weixin.qq.com/s/Oe_ilXOmWK0yULRi1sO0kg)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Python___MATLAB_绘制超有美感的矢量箭头图（2）_images\img_004_b68aefcef427.png)

导读

* * *

紧接上期，上期我们绘制了矢量箭头图，但是并不美观，本期出一个美观的矢量箭头图绘制方法。

* * *

### 一、为什么要画“矢量箭头图”？

矢量图不仅仅出现在物理教材里。风场、磁场、流体、梯度、偏导……  
它们都在告诉我们：

> “这个方向，就是变化的规律。”

但传统的 `quiver()` 箭头图，太“理科生”了——方方正正、颜色单一，既看不清趋势，也谈不上美感。所以，我们要让它——**更柔和、更流动、更有视觉张力**。

* * *

二、Matlab 绘制简单的矢量箭头图

```
clc; clear; close all;
```

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Python___MATLAB_绘制超有美感的矢量箭头图（2）_images\img_001_4f2d47e065bf.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Python___MATLAB_绘制超有美感的矢量箭头图（2）_images\img_002_407e56031ce1.png)

* * *

三、Python 绘制简单的矢量箭头图

```
import numpy as np
```

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Python___MATLAB_绘制超有美感的矢量箭头图（2）_images\img_003_20f1921e86db.jpg)

* * *

四、如何绘制下面这些箭头大小随矢量场变化的箭头？

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Python___MATLAB_绘制超有美感的矢量箭头图（2）_images\img_000_b68aefcef427.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\Python___MATLAB_绘制超有美感的矢量箭头图（2）_images\img_005_d5a413b05202.png)

* * *