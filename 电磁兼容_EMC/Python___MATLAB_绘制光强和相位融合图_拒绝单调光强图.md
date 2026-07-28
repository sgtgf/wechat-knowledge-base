# Python & MATLAB 绘制光强和相位融合图，拒绝单调光强图


> 原文地址: [https://mp.weixin.qq.com/s/Wc57WSXfJF7xRJtG0xuQsw](https://mp.weixin.qq.com/s/Wc57WSXfJF7xRJtG0xuQsw)

导读

* * *

上期我们绘制了包含偏振态的光强图，本期我们绘制光强和相位叠加图，很多朋友在做光场仿真时，习惯性地绘制“白圈圈+黑底”的光强图，然后就结束了。问题是：**相位去哪儿了？对于涡旋光、LG 模式这类“相位戏很多”的光束，只看光强几乎等于“瞎了半只眼”。本期将和大家一起学习用绘制“光强和相位融合”的科研图！**

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpVAiabSo0oODlm1qcQZayiamySbiby5IFbgEaj58XdV09baNcvuiciatjUEAR15xLg918iaHlISib9nia6oEw/640?wx_fmt=jpeg)

图 1  放张大家可能比较熟悉的图

* * *

一、为什么要把光强和相位画在一张图上？

光场本质是一个**复数场，如果你只画光强，就是只看了振幅**；而很多有趣的结构（涡旋、奇点、位相突变）都藏在相位里。

一个非常好用的可视化套路是：

-   **颜色（Hue）编码相位**：相位从 −π到 π，用“红橙黄绿青蓝紫”走一圈；
    
-   **亮度（Value）编码振幅/光强：振幅越大越亮，振幅为 0 的地方（相位奇点）是黑的。**
    

这就是典型的“相位-光强融合图”，想必大家在很多 OAM、LG 模式的论文配图里都能看到类似的彩虹圆环。话不多说，老规矩，直接上干货！

* * *

二、Matlab绘制光强和相位融合图

```
function plot_vortex_phase_intensity()
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpVAiabSo0oODlm1qcQZayiamyp7D1VShDqvQ4SiaBjDM43rKhS6ZBGiaLVmuaugwGqH2uunseapH6Pbyw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpVAiabSo0oODlm1qcQZayiamyR2n8x8pz61BFTaNMEnzZbgUq7gJ2XGRHxq9MiaE9Xia1PEtrniaZDVWXA/640?wx_fmt=jpeg)

* * *

三、Python绘制光强和相位融合图

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpVAiabSo0oODlm1qcQZayiamyEJ2HKhsic9sibDuMbc7ZEgyNNZe4wcBC5ww94xbXLY4OD9ysgKnW9xXA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpVAiabSo0oODlm1qcQZayiamy5LrxeO8P2u3t6AgTwk1ROaXQBC60AFUNFTribwvFVIx5TESf5Qgr50A/640?wx_fmt=jpeg)