# Python & MATLAB 绘制带偏振态的矢量光，拒绝单调光强图


> 原文地址: [https://mp.weixin.qq.com/s/ci84QzOkh-vBTwdGmkNGXQ](https://mp.weixin.qq.com/s/ci84QzOkh-vBTwdGmkNGXQ)

导读

* * *

在矢量光场（Vector Optical Fields）的研究中，单纯的光强分布（Intensity）往往掩盖了物理本质。如何直观地展示光束横截面上复杂的偏振态演化？如何用颜色区分左旋与右旋圆偏振？本期将和大家一起学习用绘制“光强背景+偏振椭圆阵列”的科研图！

* * *

🌄 Matlab绘制带偏振态的矢量涡旋光

```
clc; clear; close all;
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUD63mqWUh0e0sPkJCydCrHwneMPVR61icnTNmm24zxC8CbHSUY6GGj08M50fEPPzETgbMMDxAxfpQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUD63mqWUh0e0sPkJCydCrHWC6OlA8WNvRwn93AaXCswwiaRAvb0hnQCA1ycdOvvC2syiajIUxOdCYA/640?wx_fmt=png&from=appmsg)

* * *

🌄 Python绘制带偏振态的矢量涡旋光

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUD63mqWUh0e0sPkJCydCrHoQATIc182gVZIlZxvLz4Ko0Wl6zXVnXZobffhVH5PtwthVXafhHKaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpUD63mqWUh0e0sPkJCydCrHmZGKJSXP4J2ckZvEIRZXmFsFrOEicSpQCaG8F9CKTM0vNVe7bJIo7kQ/640?wx_fmt=png&from=appmsg)