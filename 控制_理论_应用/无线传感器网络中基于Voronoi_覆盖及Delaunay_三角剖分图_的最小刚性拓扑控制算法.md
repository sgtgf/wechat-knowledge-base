# 无线传感器网络中基于Voronoi 覆盖及Delaunay 三角剖分图 的最小刚性拓扑控制算法

原创 自动化学报 2016-10-31 16:41 北京

> 原文地址: [https://mp.weixin.qq.com/s/fBh9k8QX-\_\_jW-iDQtn6xw](https://mp.weixin.qq.com/s/fBh9k8QX-__jW-iDQtn6xw)

网络能耗、平均节点度和容错性是无线传感器网络拓扑控制算法设计时需考虑的三个指标。在多重指标约束前提下，本文提出基于Voronoi覆盖和Delaunay 三角剖分图的最小刚性拓扑控制算法。

无线传感器网络中同一位置的监测信息可被多个节点重复感知，从而导致大量冗余感知数据产生。针对这一问题，本文采用Voronoi覆盖方案，将网络中冗余节点调节为休眠状态，并保证在网络区域完全覆盖的前提下降低网络能耗。

为了提高鲁棒性同时限制网络平均节点度，将覆盖冗余节点调节为休眠状态后，基于Delaunay三角剖分图，活动节点间构建最小刚性拓扑结构，过程如下：每个节点与其邻居节点构建Delaunay三角剖分图(如图1(a))；在不损失刚性的前提下，删除图1(a)中较长的链路，构建局部最小刚性拓扑(如图1(b))；删除不属于全局最小刚性拓扑的链路，构建全局最小刚性拓扑(如图1(c))。

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcyBbgHL2BoEQ2zAy20MhS2mhG6kEGlbEnubOuVibJcbAh6N8TIziazLew/0?wx_fmt=jpeg)

图1 MRTc拓扑结构的构建过程(a) 构建局部Delaunay三角剖分图(b) 构建局部最小刚性拓扑(c)构建全局最小刚性拓扑

为了进一步降低网络能耗，将网络中每个活动节点的功率调节为能够覆盖其全部逻辑邻居节点所需要的最小功率，即节点可与其最远邻居节点成功通信所需的最小功率。

最后，从理论上证明了优化后的网络拓扑是2−连通的且具有稀疏性，网络平均节点度趋于4。仿真结果表明，该算法能够有效地降低网络能耗，并且有效约束网络平均节点度。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcebkPvKomjVfesZyN3tsour4PY5mPPQK2LmOUsnqymNU1bMkSLw0PBg/0?wx_fmt=png)

引用格式

薛亮, 陈晰, 赵继军, 黎作鹏, 关新平. 无线传感器网络中基于Voronoi 覆盖及Delaunay 三角剖分图的最小刚性拓扑控制算法. 自动化学报, 2016, 42(10): 1570-1584

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcPUT8pic9JvLLicRBzwQE5dU0yFBwbya0Uic6n0xibw6D1OUiaN7JcBpFXDw/0?wx_fmt=jpeg)

薛亮 河北工程大学信息与电气工程学院副教授. 主要研究方向为无线传感器网络, 认知无线网络技术.

E-mail: lxue@ysu.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUctTKVA7t8oTkXUMrXJw7Gv66BcpArG3PGGycFtsrtPO5psrvuvyxOsA/0?wx_fmt=jpeg)

陈晰 河北工程大学硕士研究生. 主要研究方向为无线传感器网络技术. 本文通信作者.

E-mail: cx3768255@hotmail.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcsKRPu1MxJfeYkpKXbALUibEw87y7TgPagCgv0AOkPcmpJxyicHBjrxOw/0?wx_fmt=jpeg)

赵继军 河北工程大学信息与电气工程学院教授. 主要研究方向为无线传感器网络, 宽带通信网.

E-mail: zjijun@hebeu.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcCBhaIibaWY1coUUd2KMFJdAGbia26CF2wbHNibSIYuMzZUdnPAECNIGHQ/0?wx_fmt=jpeg)

黎作鹏 河北工程大学信息与电气工程学院讲师. 主要研究方向为无线传感器网络, 物联网技术, 纳米网络.

E-mail: lizuopeng@hebeu.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcJWHAYSdxjU1wP6Vs3y6XFwcwMicK6WnhsfGph2Fh7qTSXgGqicvoeE7A/0?wx_fmt=jpeg)

关新平 上海交通大学电子信息与电气工程学院教授. 主要研究方向为无线传感器网络, 认知无线电等通信网络的控制, 复杂网络动态系统的性能分析与控制, 非线性时滞系统的拓扑控制, 网络化控制系统设计.

E-mail: xpguan@sjtu.edu.cn

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcPlmHWt00jxGCcYskSKN38EBQ6hwSSQ8yRsx8I61XVXt3iaUjA4sZRQg/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcp6ZGqJU8JabBMkutTiajYEBAiaDwE4ghplppR3yibQmVVeic2ic8qAIibOYA/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcyDGNX94gibjost0MlZMlfJf3xFPlXibrgRjlcSiapia5Q9EmdftaXwQ5kw/0?wx_fmt=jpeg)