# 《零序注入SVPWM这件小事》｜01讲：两张地图，同一条航线——SVPWM与载波比较的同一片海

原创 傅存敬 电磁散人 2026-01-30 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/PuwnbijVoICuJVZ7TTFXww](https://mp.weixin.qq.com/s/PuwnbijVoICuJVZ7TTFXww)

各位同仁，咱们从今天开始，聊聊SVPWM。

相信屏幕前的各位，写SVPWM估计都写得滚瓜烂熟了。咱们闭着眼睛都能把那套流程背下来，对吧？

**控制器那边**，PI环算出来一个电压指令，一般是ud和uq。

咱们**调制器这边**，拿到ud和uq，转成uα和uβ。然后呢？[经典“三步走”](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485306&idx=1&sn=bf7ba061acfec735abe64e7545c31d6b&scene=21#wechat_redirect)：

1.  **判扇区**：看看这个电压矢量掉在哪个60度的格子里。
    
2.  **算时间**：用几何关系算出相邻两个基本矢量 Vk，Vk+1 的作用时间 T1，T2，剩下的时间就是零矢量 V0，V7 的总时间 T0。
    
3.  **排顺序**：把这些时间片断，按照七段式或者五段式，对称地排在一个PWM周期里，最后换算成三相的比较寄存器值CCR。
    

这套流程，咱们叫它“**扇区法SVPWM**”，或者说，是基于“空间矢量几何”的SVPWM。它就像一张**画满了扇区和矢量箭头的航海图**，我们每一步都在量角度、算距离，非常直观，也非常经典。

但是，咱们再想一个问题。在很多项目里，比如文末给出的开源的FOC代码里，你去看它的PWM生成部分，比如咱们这次要解剖的 pm.c 里的 pm\_voltage() 函数，你翻来覆去地看，是不是感觉有点奇怪？

里面好像... **没有判扇区的**if-else**或者**switch-case。

也**没有显式地去算**T1，T2，T0 。

它做的是另一套事：拿到 uX，uY（也就是 uα，uβ），直接反向Clarke变换，算出三相电压 uA，uB，uC。然后对这三相电压做一堆 min/max 运算，加一个公共的偏置，最后直接就变成了三相的CCR值。

这套流程，咱们叫它“**载波比较法PWM**”，或者说，是基于“三相调制波”的PWM。它就像另一张航海图，上面没有扇区，只有三条**高低起伏的波浪线（调制波）**，和一条**周期性的基准线（载波）**。船怎么开？看波浪高过基准线多少。

那问题就来了。

两套完全不同的算法，看上去逻辑都不一样，为什么最后都能驱动电机转，而且性能都还不错？它们之间到底是什么关系？是不是说，咱们一直在用的“扇区法”其实只是SVPWM的其中一面？

这就是咱们本系列文章要解开的核心谜题。而解开这个谜题的钥匙，就是这篇2002年的经典文献：

**_Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM_**

这篇论文，说白了，就干了一件事：它在这两张看似风马牛不相及的“航海图”之间，**搭了一座坚固的桥。**它用数学严谨地证明了：**扇区法SVPWM** 和 **载波比较法PWM**，[本质上是在描述同一件事，只是用了两种不同的“语言”](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485306&idx=1&sn=bf7ba061acfec735abe64e7545c31d6b&scene=21#wechat_redirect)。

论文的引言部分有这么一句话，我给大家念念，非常有味道：

> All the relationships provide a bidirectional bridge for the transformation between carrier-based PWM modulators and space-vector modulation modulators.

“双向的桥梁（bidirectional bridge）”，这个词用得太好了。这意味着，你只要站在这座桥上，就能从“扇区法”的世界，走到“载波比较法”的世界，反之亦然。

咱们再看手里的代码 pm.c 中的 pm\_voltage() 这个函数，它没有扇区，没有T1/T2，它走的，恰恰就是“载波比较法”这条路。写这个代码的同仁，他脑子里装的，就是第二张地图。

所以，咱们这个系列课的第1讲，就是要先建立这么一个“世界观”：**SVPWM不是一种算法，而是一类调制策略的统称。**扇区法，是它的几何解释；载波比较法，是它的信号解释。咱们要做的，就是把这两套语言都学会，并且知道怎么互相翻译。

最后，咱们怎么验证这个“世界观”呢？口说无凭，得上Simulink。

咱们今天就在Simulink里搭一个最简单的实验，来印证“两张地图，一条航线”这个说法。

模型总览：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9caKXQyxic4l9TbllNzbkF3CbicdEvtNEJkJ2xb13MNlia6Tu2rVACPQ3Zg/640?wx_fmt=png&from=appmsg)

**1\. 信号源：**咱们先搭一个理想的时钟源。用一个增益为电角速度w的增益进行放大，产生一个连续变化的电角度 theta（theta = w·t），然后用 sin(theta) 和 cos(theta) 生成一个幅值固定的、匀速旋转的电压矢量 uα 和 uβ。这就像咱们的船，要沿着一个完美的圆形轨迹航行。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9cggiazWUgPK3EY6Vt1xLszzpKGRwbuxibibH1eNjcTsicqfuGa03ukG2NibQ/640?wx_fmt=png&from=appmsg)

2.  **第一条航线（载波比较法）**：
    

咱们先把这个uα、uβ送进一个逆Clarke变换矩阵，得到三相电压参考 ua，ub，uc。然后，我们先不做“比较器积分求平均”，而是用理想映射：d = 0.5·u + 0.5，这是最朴素的SPWM，不加任何零序注入，先理清概念。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9cxSB16uke9ZVyvZaqGQYV1NFQN5LVLcwsc00xk6hnJ7PiabPpIyweibQg/640?wx_fmt=png&from=appmsg)

再模仿文末代码中的SVPWM的生成方式，基于Matlab Function搭建一个使用min-max比较法生成SVPWM的模块，使其输出的占空比和线电压Uab与SPWM模块的输出做对比。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9cHUnQ3pamdcDT2hJ0GYeiaBDDKAVm8dHuc5Ar2TYricbDYcl5DtTictjRQ/640?wx_fmt=png&from=appmsg)

跑一下仿真，两组调制波**波形**不一样！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9c7l7po8Pcc5OtyuOEbzibicICW32JQOOtdvI2fanc9q9EIKRNnyrKjiaPw/640?wx_fmt=png&from=appmsg)

但是，它们合成的**线电压基波**，在幅值和相位上，几乎是**一样的！**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9cr6icBEQwEaODs0ygkuVibpu5YASGtgc1RKwLyj8EibMYicOpPtBAAib41EA/640?wx_fmt=png&from=appmsg)

3.  **第二条航线（扇区法）：**
    

再利用Matlab Function搭建一个教科书版的扇区法SVPWM模块，再与min-max比较法生成SVPWM的模块的输出进行比较。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9cMVeHReHsyCN5Z0wI28azTUXgaCWVicF4p9vBUia5pIjt9SfkMvK0icgTQ/640?wx_fmt=png&from=appmsg)

在线性区（有效矢量组成的正六边形的内切圆中）下，无论是通过min-max比较法生成的SVPWM，还是基于扇区法生成的SVPWM，二者输出的调制波波形是**一样的**。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFZA0EXZ2PKchJj9LJHbe9c3MXdlwy6H4gjXlrXYUolkVuIREodJWXdBJRs45sQnBaXL5dRUhLlXQ/640?wx_fmt=png&from=appmsg)

以上这个小实验，就直观地告诉了我们今天这讲的核心：**地图不同，路线不同，但最终抵达的目的地（合成的线电压矢量）是同一个。**

扇区法那张地图，直接、硬核，告诉咱们每一步怎么走。而载波比较法这张地图，好像更“随性”，但它背后隐藏着一套更深刻的规律。这个规律，就是我们下一讲要揭开的谜底——**零序注入**。它才是那座桥的“桥墩”。

好，今天咱们就先聊到这儿。先把这个“两张地图”的世界观建立起来，下一讲，咱们就正式上桥，看看风景到底有什么不一样。

  

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

模型链接：

https://pan.baidu.com/s/1-qt\_v1cJiQvmHKw1EZ3gRg?pwd=7wex 提取码: 7wex