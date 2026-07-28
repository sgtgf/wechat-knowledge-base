# ESD防护为何对集成电路如此重要？又该如何防护？

原创 巢影字幕组 硬件笔记本 2021-09-13 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/jItwkNo\_8QqTtvYvsq2fyw](https://mp.weixin.qq.com/s/jItwkNo_8QqTtvYvsq2fyw)

  

各位攻城狮，今天在聊干货之前，要先来考考大家：PCB上的这个标识你们认识吗？

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FMwv1Ev46YLKUkkxGNadNc3Q3ibic4FgpqsdOI9m3t5ibnCBNiczHy00YFnE0MQUE4Z39uXdCXb8I1kicQ/640?wx_fmt=png)

  

  

  

EDA365电子论坛

1

  

**其实呀，它是PCB上的一种ESD防护设计，叫做火花间隙。**火花间隙由被空气隔开的两个电极组成，当在电极之间施加的电压超过击穿水平时，气体电离迅速降低电极之间的电阻并且发生放电。

  

击穿电压可以通过公式进行计算：

  

**V=3000\*p\*d+1350**

**p是大气中的压力，d是距离**

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FMwv1Ev46YLKUkkxGNadNc3xf82ibj5wRic5NnTib67XUC1f3F6lAWzZzfvUSkicaPjhQ5FMhkmaEC1zQ/640?wx_fmt=png)

  

比起半圆形垫的火花间隙，菱形放电齿更为常见，但这类设计常常会因为放电而在两个三角点上产生积碳，最终造成信号线的永久短路，进而引起系统故障。

  

而半圆形垫设计，相对来说可以提供重复的保护，虽然这种设计只能在偶有ESD的环境中使用，但因为它不花什么成本，所以加上它还是很实用的。

  

  

  

EDA365电子论坛

2

  

**关于ESD防护的措施有很多种，pcb上设计火花间隙只是其中一种。**

  

虽然生活中的静电对我们来说没什么大的影响，但是对于很多敏感电子元器件来说，却有非常严重的破坏性影响。

  

**ESD即静电放电是导致元器件击穿危害和对电子设备的运行产生干扰的主要原因。**

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FMwv1Ev46YLKUkkxGNadNc3C92nvhA5SPXa20OutWia8czMiciaJAQNezV9z52DTUzSpAjDZBk8Ezic7A/640?wx_fmt=png)

  

静电放电敏感器件被称为ESDS器件，随着器件越来越小型化，这些设备对静电放电越来越敏感。

  

在集成电路上极细的导电路径，通常无法承受所涉及的高静电放电电压，一般会产生两种损害，直接损害和潜在损害。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FMwv1Ev46YLKUkkxGNadNc34tYK8P8xh2jIn89V8Oa6U2X3n5X7oaaod63uTicjxyib2jY51ic8aia3pQ/640?wx_fmt=png)

  

其中不到30%是直接损害，就是器件被严重损坏，功能丧失，**这种损伤能够在生产过程的质量检测中发现。**

  

因此给工厂带来的主要是返工维修的成本，而绝大部分的ESD损害是潜在损伤，器件部分被损，但是功能尚未丧失，且在生产过程的检测中不能发现，只有在运行时才可能出现故障，从而出现严重后果，因此潜在损伤造成的危害更大。

  

避免或减少这种损失的最好办法，就是采取静电防护措施。生产过程中，常见的是静电手环和防静电工作台，它们的基本原理是把静电通过线缆泄放到地平面。

  

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FMwv1Ev46YLKUkkxGNadNc3TLic1FibVuwd6RCNSwlhj5icpfCjhPvZBJ4RE7zcghzglgqLNGwAY3s8w/640?wx_fmt=png)

  

  

  

EDA365电子论坛

3

  

除了静电手环和防静电工作台以及火花间隙，**ESD防护还有很重要的一环，那就是元器件选型。**

  

在设计电路中最常见的就是采用TVS二极管，可以处理闪电和ESD所引起的高瞬态电流，但是对于射频天线的微波信号，如果用TVS管，压敏等容性器件做静电防护，射频信号会被减弱，所以静电防护还得按照实际情况采取相应措施。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/iaLLibsB5S6FMwv1Ev46YLKUkkxGNadNc3LfF7HiakxIs2xjia6qM9ZMDHtaSaQQE13fzF2Op42xtegdFLUX7MGqlA/640?wx_fmt=gif)

  

以上介绍了三种ESD防护方法，相信如果这三种方法都合理使用了，那么我们的产品就会很大程度上避免静电损害，从而节约成本。

  

除了这三种方法，你们还有什么更好的方法么？可以分享在留言板哦~