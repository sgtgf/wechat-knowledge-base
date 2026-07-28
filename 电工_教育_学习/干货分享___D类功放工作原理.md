# 干货分享 — D类功放工作原理

原创 蜗牛 硬件笔记本 2020-05-04 20:36 undefined

> 原文地址: [https://mp.weixin.qq.com/s/5ieexCJv3RH0UY4QpIy7NA](https://mp.weixin.qq.com/s/5ieexCJv3RH0UY4QpIy7NA)

D类功放又叫数字功放，应用领域有：手机、笔记本电脑、平板电视、家用功放、舞台功放，公共广播等。

  

优点：体积小、重量轻、效率高。 

D类功放按组成结构可以分为信号调制器、PWM驱动信号、开关放大电路和解调滤波输出四大部分。信号流程如下图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKzE2zxyXLFsg9twHNNPoAF4uTv661iabza5nL4wLmiaau7f5jZVPn1KMaWE9ZJvM5gJZhiaZ054yuKw/640?wx_fmt=jpeg)

1.信号调制

信号调制的作用是将音频信号转化为 PWM 信号。将音频信号与固定频率三角波信号相比较实现 PWM 调制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKzE2zxyXLFsg9twHNNPoAF48j4jPkn6qny6L33ibFvhJ3VpKZnsLovicwGIheIsZF9d6icHRIIUt3dQ/640?wx_fmt=jpeg)

该调制方式的优点是载波频率固定，输出端音频还原滤波器设计简单；

缺点是作为参考信号的三角波总是非理想的，会引入额外的噪声和失真。  

2.PWM驱动信号

数字功放的驱动电路主要是用来驱动MOS管，针对不同功率等级的功放，需要合理的选取驱动电路。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKzE2zxyXLFsg9twHNNPoAFgDHsWzNvxsZluY9rBHemMJj7t6ygicyWDS5PlnbqJWkdldkaCWHsRAg/640?wx_fmt=jpeg)

驱动MOS管主要是驱动gs极间电容（我在之前写过关于MOS管的特性，这里不再重复。)

通过验证，隔离驱动和自举驱动两种方式比较理想的方法。

  

3.开关放大电路

数字功放的功率放大电路只有全桥和半桥两种拓扑结构。全桥电路其实就是两个半桥电路的并联，所以从工作原理来说并无本质区别。

开关放大电路每一个桥臂上有两只MOS管，不能同时处于导通状态，一只MOS管必须在另一只关闭后才能导通，否则会造成串通损耗，甚至烧坏功率管。因此，必须在驱动信号上插入死区时间(Dead-Time)以确保同一桥臂的两只功率管不同时处于导通状态。如下图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKzE2zxyXLFsg9twHNNPoAFI3tlJgbVP6PH7R4uHRgmt1iceq0jBmb5OTvZCkwP7ut8bgekKrnQs6Q/640?wx_fmt=jpeg)

  

4.解调滤波输出 

经过开关放大电路的信号同时包含了音频信号信息和载波信号，为还原所需要的音频信号，因此必须设计输出低通滤波器以滤除高频载波分量来获得音频信号。如下图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKzE2zxyXLFsg9twHNNPoAFCGpiarnXAreLRqY2FOfarLtq9odFEHl4bgLoKPQXplLd12frbA64J2w/640?wx_fmt=jpeg)

  

  

数字功放部分工作原理框图如下

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKzE2zxyXLFsg9twHNNPoAFObsJnHyKMiaTrLhYDJBWK418wxdPzg3T5HLLtghPT90U30zlgfF7OnQ/640?wx_fmt=jpeg)

输入模拟音频信号与反馈回来的音频信号一起送到误差放大器，输出放大的误差音频信号。三角波发生器产生模拟三角波信号。将放大的误差信号和三角波信号送到调制器，输出PWM 信号。

PWM 信号送到半桥驱动器进行放大，放大后的PWM信号被采样作为反馈信号送到误差放大器，尽可能的还原输入的音频信号。同时将PWM信号送到LC低通滤波器进行解调，将放大后的音频信号送进音箱。