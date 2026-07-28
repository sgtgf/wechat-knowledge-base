# 正弦空间表示法（UV图）分析均匀平面阵列天线栅瓣情况


> 原文地址: [https://mp.weixin.qq.com/s/7LeK-L7kgyLXuCrHHEWxKg](https://mp.weixin.qq.com/s/7LeK-L7kgyLXuCrHHEWxKg)

# 一、正弦空间表示法

正弦空间表示法中，用u、v两个坐标变量表示空间坐标来表示天线在空间中的辐射角。正弦空间中的u、v对应于天线坐标中的θ、φ在xoy平面上的投影，坐标对应关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYIhhesibZPev4GKzZtkBXvphegN0tqMu3K1V5InCLM0Hnfy3xpd4kHHw/640?wx_fmt=png&from=appmsg)

由上述关系式，不难发现，正弦空间反映了三维空间中单位球的上半球在二维平面空间中的投影，如图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQY4PBaFwbynIQricaLIeCrXCKAAoDOJmI7friadm33goVRQicZQFsxxxaBw/640?wx_fmt=png&from=appmsg)

将天线三维辐射方向图投影到UV图，能把复杂的三维信息投影到二维平面上，用不同的颜色来表示不同的辐射强度，使得辐射更直观。在UV图上可以更精确地分析天线在不同角度的辐射特性。相比于三维方向图在某些角度可能存在的视觉遮挡或难以精确分辨的情况，UV图能将信息清晰展开，有助于准确评估天线在特定角度下的增益、方向性等性能指标。通过UV图还可清晰看到天线在水平和垂直方向上辐射强度的分布情况，还能快速判断出主瓣、旁瓣的位置和相对大小。因此，正弦空间表示法十分有利于辐射数据的处理和比较。

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYuqHnMl8mofYF5SicZaq0nbia8DLoSicTkhGUlw1153wlggSg9RqnKHggA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYbdHh8oSC7QgjcuHMwAYE6IAqrkYBAkX0Y076RbHTia2Z3wlRvgyDhIQ/640?wx_fmt=png&from=appmsg)

三维辐射方向图

UV图

# 二、栅瓣

栅瓣是阵列天线方向图中出现的一种特殊现象。当阵列天线的单元间距过大，或者激励信号的频率过高时，会在主瓣之外产生一些与主瓣形状相似的波瓣，这些波瓣被定义为栅瓣。

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYFkELlGHmzs24BWS0gGGyTF22hWwOLBdFBJ8b47ibG23unP2l6STtcRg/640?wx_fmt=png&from=appmsg)

栅瓣的出现是由于阵因子的周期起伏特性，以图中的矩形平面阵为例。矩形平面阵的阵因子可写为

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYwIibvCcRTIgPPtBEKeXu4lvcLdJ1aTQAO0zJZSjyg8dmG6yQwrCQNwg/640?wx_fmt=png&from=appmsg)

当主瓣的波束指向为(u0,v0)时，电流激励相位βmn为：

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYU96T4v8uzak2gSp9DqpywncCr8QZz0msIL9vcqF1stWdvIKr8sZibcw/640?wx_fmt=png&from=appmsg)

矩形平面阵的阵因子可进一步改写为：

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYyCiaY0VAYZOPCBiaKG3TsibJkhdFkzS2cnRHhJ3tKd2Dls0tIstVm2OibQ/640?wx_fmt=png&from=appmsg)

由上式可知，除了在主瓣处，当fa(u,v)取最大值时，u、v应满足：

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYp1hLbk2dScjic9Jh7sXxOQ56G5d6d0koJnj06UF220iafjzYnLWpLfDw/640?wx_fmt=png&from=appmsg)

上式中，为矩形平面阵栅瓣在正弦空间坐标系下的位置的表达式。图中展示了矩形平面阵的栅瓣位置，此时x、y方向的阵元间距均为三分之二波长，即dx=dy=2/3λ。图中黄色圆为栅瓣位置，红色圆为主瓣位置。

![](https://mmbiz.qpic.cn/mmbiz_png/XQ3ZADwhHXkQWKVhiaTnU8iclyb7BVCrQYDzFV1lVPQm3Yyc10Ij7XOqibdl8ctT5N9t3KmOibzJmOH9R9FGmdp7hg/640?wx_fmt=png&from=appmsg)

矩形平面阵间距为三分之二波长时栅瓣示意图

在正弦空间坐标系中，矩形平面阵的主瓣与栅瓣的相对位置不变，主瓣位置沿某个矢量发生改变，栅瓣位置同样沿着整个矢量发生改变，栅瓣始终出现在距离主瓣λ/d的整数倍位置出现。蓝色单位圆内为可见的空间，当扫描角增大到一定程度时，栅瓣将会出现在可见空间内，即栅瓣将会在真实空间中出现。可见空间内与任意栅瓣圆都不相交的区域，即阴影区域，被称为栅瓣扫描盲区，波束指向在该区域内任意角度，都不会导致栅瓣的出现。

栅瓣如同副瓣一样，会接收主瓣指向以外的信号，严重影响天线系统对目标信号的精确捕获与处理。因此，在设计阵列天线时，应尽可能避免栅瓣的出现。