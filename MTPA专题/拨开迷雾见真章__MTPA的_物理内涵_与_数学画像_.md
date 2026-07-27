# 拨开迷雾见真章——MTPA的“物理内涵”与“数学画像”

原创 傅存敬 电磁散人 2025-11-04 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/forUwuI2c-sF6h1aDKWSJw](https://mp.weixin.qq.com/s/forUwuI2c-sF6h1aDKWSJw)

欢迎大家正式进入我们的新系列——《“术”的修行：Cypress MTPA实战手册精讲》！

在前几篇文章中，我们坐着Simulink的“直升机”，在万米高空把电机控制的“道”给看明白了。但正所谓“纸上谈兵终觉浅”，今天，我们就要换上迷彩服，跳下直升机，踏上真正的“嵌入式战场”！

我们的武器，就是这本Cypress公司的应用笔记AN205350。它没有那么多花哨的动画，但字字珠玑，每一行代码都带着硝烟的味道！

今天，咱们就来上这第一讲！

一、复习：我们的目标是什么？

还记得MTPA是啥意思吗？Maximum Torque Per Ampere——用最小的电流，干最大的活！说白了，就是省电！

这就像我们去推一个东西，怎么推最省力？对于电机来说，我们输出的“力”就是转矩（Torque），我们消耗的“体力”就是电流（Ampere）。MTPA就是电机控制里的“最优发力技巧”。

二、老实人vs聪明人：两种电机的不同“性格”

要学会这个“发力技巧”，我们得先了解一下我们手下这两位不同的“兵”：表贴式电机（SPM）和内置式电机（IPM）。

1. “老实人”——表贴式电机 (SPM)

SPM，就是永磁体直接贴在转子表面的那种。它有个特点，就是特别“耿直”，或者说“对称”。

你把它想象成一个完美的足球。你从任何一个方向去推（或踢）它，感觉是不是都一样？你在它的d轴（磁场方向）和q轴（转矩方向）上，感受到的“阻力”（磁阻）是基本相同的。这就叫Ld≈Lq。

对于这种“老实人”，我们怎么让它出最大的力呢？很简单，所有力气都用在刀刃上！也就是把所有的电流is都变成iq，用来产生转矩。任何一点id分量都是在做无用功。所以，对于SPM，最优策略就是：id = 0。

我们来看看它的数学画像。这是电机世界最最基础的转矩公式，所有人都要刻在脑子里！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2Gt0yBQSEeBicI5CTr62nnfcUEW3rJzeTp1pv3kFicTfOVjhV1e45ic8XA/640?from=appmsg)

其中，Pn是极数相关常数，前面这部分Pn\*Ψm\*iq叫永磁转矩，后面这部分Pn\*(Ld - Lq)\*id\*iq叫磁阻转矩。

当Ld = Lq时，后面那一大坨是不是直接等于0了？公式就变成了Te = Pn\*Ψm\*iq。转矩只跟iq有关！

请看图！这就是“老实人”的转矩构成图。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2wt8kdAeqb6VIp3qT16iaPRVoZE8NbNmkFy9ibj0Zy9EschpehmjfUnRw/640?from=appmsg)

大家看，红色的“磁阻转矩”线，就是一条趴在0上的“咸鱼”。总转矩（绿线）和永磁转矩（蓝线）完全重合了。这说明，它根本不会利用磁阻转矩，是个“实在人”。

2. “聪明人”——内置式电机 (IPM)

好了，现在主角登场了！IPM，就是永磁体被“埋”在转子内部的。这一“埋”，就“埋”出了大学问！

IPM就像一个橄榄球！它不是圆的，是椭圆的。你从它的短轴方向（d轴）和长轴方向（q轴）去推它，感觉能一样吗？肯定不一样！在磁路上，d轴方向因为隔着铁，磁阻大；q轴方向空气隙大，磁阻小。这就导致了一个至关重要的特性：Ld<Lq！

这个“聪明人”的性格就不对称了，它有了“软肋”，也有了可以借力的“硬骨”。

我们再来看一遍那个神圣的转矩公式：

Te = 1.5\*Pn\*(Ψm\*iq + (Ld - Lq) \*id \*iq)

现在Ld不等于Lq了，后面那一大坨磁阻转矩终于可以“C位出道”了！我们怎么让它帮我们出更大的力呢？

下面是逻辑推理时间！

1.  我们的目标是让总转矩Te越大越好。
    
2.  iq通常是正的，用来产生主要的永磁转矩。
    
3.  因为Ld < Lq，所以(Ld\- Lq)是一个负数！
    
4.  那么，要想让整个磁阻转矩项(Ld - Lq)\*id\*iq变成一个正数来帮助我们，id必须是什么？
    

负数！！！

对咯！负负得正！这就是IPM电机里蕴含的朴素又深刻的物理智慧！我们通过主动注入一个负的id电流，就能唤醒它体内沉睡的“磁阻之力”，让它在消耗同样“体力”（总电流）的情况下，爆发出更强的“力量”！这就是“四两拨千斤”的艺术！

请看“聪明人”的自画像！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2n0npWWENFlxKk5G3aW568JHiawDNagt6l3cuzsCgxpL14pIHokK9T9w/640?from=appmsg)

看到没！红色的“磁阻转矩”线不再是“咸鱼”了，它变成了一座漂亮的小山峰！而我们的总转矩（绿线），现在是永磁转矩（蓝线）和磁阻转矩（红线）的叠加！1 + 1 > 2的效果出现了！我们白捡了一部分力气，省电就是这么来的！

小结

今天这一讲，我们搞清楚了MTPA的物理内涵。现在，请不同岗位的同仁们完成如下的“思想作业”：

-   对于电机本体设计工程师：你们是“橄榄球的制造者”！你们设计的Ld和Lq的差异，也就是“凸极率”，直接决定了红色那座“小山峰”能有多高，决定了这台电机“聪明”的上限！你们的工作是“道”和“术”的源头！
    
-   对于硬件工程师：你们是“后勤保障官”！你们要保证你们的逆变器能稳定、精确地输出算法工程师算出来的那个正的iq和那个关键的负的id。如果电流波形歪歪扭扭，那这个“二人转”就唱劈叉了。
    
-   对于控制算法工程师：你们是“总导演”！你们的任务最艰巨。现在我们知道了需要一个负的id，但问题是，对于每一个不同的iq，到底要配上一个多大的负id，才能让这个“二人转”唱得最和谐、效率最高呢？\-1A？\-2A？还是\-3.14159A？
    

这个“最佳配比”问题，不是拍脑袋决定的，背后有严谨的数学推导。

这就是我们下一讲要解决的核心问题——《庖丁解牛寻真经——MTPA核心算法的“终极公式”推导》！我们将要一起，从微积分的深处，把那条金光闪闪的MTPA计算公式给亲手推出来！

  

参考文档

Infineon AN205350 FM3 MB9BFXXXX/MB9AFXXXX Series MTPA 

文档链接：https://www.infineon.com/assets/row/public/documents/30/42/infineon-an205350-fm3-mb9bfxxxx-mb9afxxxx-series-mtpa-applicationnotes-en.pdf

避免退学：

链接1：[PMSM世界的“五指山”：孙悟空也逃不出的物理法则](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484410&idx=1&sn=41857e59fb5e8ef4f6af2cc9ae5a656e&scene=21#wechat_redirect)

链接2：[寻龙诀之PMSM点穴：如何在约束迷宫中找到最优工作点的唯一“生门”？](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484417&idx=1&sn=a5338aeb0c763b2ef407970f3917f08b&scene=21#wechat_redirect)

链接3：[“制表”的艺术：如何为PMSM的MTPA打造一本“通关答案集”？](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484418&idx=1&sn=778ceeef056915c1166c92f97b58fed8&scene=21#wechat_redirect)

链接4：[MTPA三维查表代码从0到1生成及测试操作指南](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484501&idx=1&sn=934052b6b2f9562c21efa9d909bf4208&scene=21#wechat_redirect)