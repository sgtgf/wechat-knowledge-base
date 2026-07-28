# Python & MATLAB 绘制超有美感的矢量箭头图（2）


> 原文地址: [https://mp.weixin.qq.com/s/Oe\_ilXOmWK0yULRi1sO0kg](https://mp.weixin.qq.com/s/Oe_ilXOmWK0yULRi1sO0kg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUdkgK58HzCbUr98mo0qJkStWEY2AT53TEuONRcAJ0GKla3qviaWnknOWkZGzCATB1ywZwYwdlAqMQ/640?wx_fmt=png&from=appmsg)

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

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUdkgK58HzCbUr98mo0qJkSLrpeJCetl0fs9Gib5fsvUdGqzHtXJyFyn1zQNZHTPPFRKkQJzQbXP8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUdkgK58HzCbUr98mo0qJkSILp58lRyjYh53cXuqxdAUh5zV3BLTt6lj9qndvzWB15Tdyib4mTahwA/640?wx_fmt=png&from=appmsg)

* * *

三、Python 绘制简单的矢量箭头图

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpUdkgK58HzCbUr98mo0qJkSHqtibIXeWzVcW56VEQOuHXgyszSmbsnNottW51GRUStSxNtJPh4piaTg/640?wx_fmt=jpeg)

* * *

四、如何绘制下面这些箭头大小随矢量场变化的箭头？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUdkgK58HzCbUr98mo0qJkStWEY2AT53TEuONRcAJ0GKla3qviaWnknOWkZGzCATB1ywZwYwdlAqMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUdkgK58HzCbUr98mo0qJkSFflrUGjcKPFrnesEsytW3VroBib8LzflsR2bf0wjJtXNN3QXnSd5Wyw/640?wx_fmt=png&from=appmsg)

* * *