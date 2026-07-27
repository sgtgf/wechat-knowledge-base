# 《PMSM 定点/浮点FOC运算这件小事》| 20讲：选型决策树——什么场景用定点、什么场景用浮点、什么场景混着用

原创 傅存敬 电磁散人 2026-05-08 07:06

> 原文地址: [https://mp.weixin.qq.com/s/WnqIrmZQX6itQllrww0I0g](https://mp.weixin.qq.com/s/WnqIrmZQX6itQllrww0I0g)

各位同仁，大家好。

这是本系列的最后一篇文章。

从 [第1篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486137&idx=1&sn=f207043b0a7fbea6d3e4927b69a2b48e&scene=21#wechat_redirect) 的"两段代码你能看懂哪个"走到现在，我们一起[拆了Clark变换的移位](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486258&idx=1&sn=209645ec51fe43a6fde2f642a5b62746&scene=21#wechat_redirect)、追了[PI积分器的死区](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)、量了[DWT的时钟周期](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486406&idx=1&sn=60a4af601837160605a6613056ece997&scene=21#wechat_redirect)、[陪着小王和老李改了一天的K](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486428&idx=1&sn=a9f53e85bd322b0130888dcd0f7b397f&scene=21#wechat_redirect)p。二十篇文章，说到底就围绕着一个工程决策：**这个项目，用定点还是浮点？**

今天我们把这个决策画成一棵树。

## 工具箱已经备齐了

一个干了十几年的老师傅，工具箱里什么都有——锉刀、扳手、游标卡尺、千分尺。他不是每次干活都把工具箱全倒出来，而是瞄一眼活儿，伸手就抓对的那把。

这个系列做的事情，就是往你的工具箱里一把一把地放工具。[Q格式追踪](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486191&idx=1&sn=76bb0abffff440cb7eb2a74f220b2c9e&scene=21#wechat_redirect)是一把，[查表法](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486277&idx=1&sn=a53f75c8d61964c553d910fc7a586e1e&scene=21#wechat_redirect)是一把，[PI积分器量化分析](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)是一把，[DWT测时序](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486406&idx=1&sn=60a4af601837160605a6613056ece997&scene=21#wechat_redirect)也是一把。现在工具箱满了，问题变成：面对一个新项目，你该先抓哪把？

## 决策树：三个问题定方向

拿到一个新的电机控制项目，先问自己三个问题：

**问题一：目标芯片有没有FPU？**

如果有——比如Cortex-M4、M7、M33（带FPU配置），或者任何带VFPv4/VFPv5的内核——**默认选浮点。** [第17篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486406&idx=1&sn=60a4af601837160605a6613056ece997&scene=21#wechat_redirect)的数据摆在那儿，M4上硬浮点跑FOC只要 1.1 μs、180个周期，比定点还快，开发效率还高一截。除非你有很特殊的理由（后面会讲），否则没必要在有FPU的芯片上自找苦吃搞定点。

如果没有——比如Cortex-M0/M0+/M3——进入问题二。

**问题二：控制环的时间预算有多紧？**

算一笔账：中断周期是多少μs，减去ADC采样、通信、保护逻辑等其他任务占用的时间，剩下多少留给FOC运算？

如果时间预算足够走软浮点（参考[第17篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486406&idx=1&sn=60a4af601837160605a6613056ece997&scene=21#wechat_redirect)，M3上FOC软浮点约 31 μs）——那你可以考虑浮点，代价是CPU占用率高，后续加功能的余量小。

如果时间预算不够——**选定点。** 这是定点方案存在的核心理由：让没有FPU的便宜芯片也能跑高频控制环。

**问题三：项目是"一版定型"还是"频繁迭代"？**

定型量产的项目，前期投入定点开发的成本可以被海量出货摊薄。一颗M3比一颗M4便宜几块钱，乘以十万台就是几十万的BOM成本差——这笔账足以覆盖定点开发多花的人月。

频繁迭代的项目——研发样机、算法验证、客户定制——每次改参数都要重新做Q格式追踪和溢出检查，人力成本远超芯片成本差。这种场景应该尽量用浮点，把工程师的时间花在算法创新上，而不是花在追踪移位量上。

还有一种情况介于两者之间：电流环已经调稳定了，但速度环和应用层还在频繁修改。这就是 [第19篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486433&idx=1&sn=c8d7660532e7085c39e5e64bde48a51a&scene=21#wechat_redirect) 讲的混合精度方案的用武之地——内环定点，外环浮点，各取所长。

## 三个容易踩的坑

决策树看着简单，但实际操作中有几个常见的弯路。

**坑一："先用浮点开发，最后再转定点。"** 这个想法很自然，但转换的工作量经常被低估。Embedded Coder的Fixed-Point Tool可以辅助转换，但它给出的是"能跑"的定点配置，不是"最优"的——信号范围设宽了浪费精度，设窄了容易溢出，最终还是要人工一路一路地检查和调整。如果项目一开始就确定要走定点，不如直接上定点建模，省掉后期转换的痛苦。

**坑二："定点代码跑通了就不用验证精度了。"** 跑通不等于跑对。[第12篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)讲的PI积分器量化死区就是个例子——代码完全没有溢出、没有错误，但因为积分步长太小被量化截断了，控制器的稳态精度悄悄劣化，你不做定量分析根本发现不了。Majumdar等人在2012年的EMSOFT会议上提出过"practical stability"的概念——定点实现的系统可能在数学上是稳定的，但由于量化误差的存在，实际收敛的精度比浮点版差，差多少取决于字长和Q格式的选择。

**坑三："芯片便宜就该用定点。"** 芯片是便宜了，但工程师不便宜。[第18篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486428&idx=1&sn=a9f53e85bd322b0130888dcd0f7b397f&scene=21#wechat_redirect)的场景说明，定点开发的每一次参数调整都比浮点多花几倍时间。如果项目的人力成本远大于BOM成本——大多数小批量、定制化项目都是这种情况——盲目选便宜的芯片反而是亏的。

## 工具在进化

各位同仁，写到这儿，这个系列基本把2026年主流的定点/浮点工程实践都覆盖了。但技术不会停在这里。

**自动合成工具在变强。** Najahi在2014年的博士论文中展示了CGPE和FPLA这两个工具——给定一个浮点算法和目标精度要求，工具自动搜索最优的定点实现方案，包括字长分配、运算顺序调整、误差界证明，全部自动完成。目前这些工具还主要停留在学术研究阶段，离工业级的Embedded Coder有差距，但方向是对的：让机器替人做Q格式追踪这种繁琐但规则化的工作。

**新的数制在出现。** 2017年提出的Posit数制系统是对IEEE 754浮点格式的一次重新设计。Posit用一种"锥形精度"的思路——在常用数值范围内提供比IEEE 754更高的精度，在极端范围内精度降低但不会出现NaN和Inf。Omtzigt等人开发的Universal Numbers Library已经提供了可用的软件实现。目前Posit在电机控制领域还没有实际应用案例，但它代表的思路值得关注：**也许定点和浮点之间的选择题本身，将来会变成一道过时的题目。**

## 回头再看这条路

各位同仁，二十篇写下来，我自己最大的感触是：定点和浮点之间的选择，从来不是一个纯粹的技术问题。

它背后是成本和效率的权衡——芯片成本、开发成本、维护成本、时间成本。它背后也是工程文化的差异——有些团队的基因是"把每一分硬件资源都用到极致"，有些团队的基因是"快速出原型、快速迭代"。两种基因都能做出好产品，关键是别拧着来。

如果你已经读到这里，你的工具箱里应该已经有了足够的工具来做出自己的判断。[Q格式怎么追](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486161&idx=1&sn=4cc0c68986f3ec9c3a53c56b4f8432a5&scene=21#wechat_redirect)、[魔数怎么来](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486191&idx=1&sn=76bb0abffff440cb7eb2a74f220b2c9e&scene=21#wechat_redirect)、[查表怎么插](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486277&idx=1&sn=a53f75c8d61964c553d910fc7a586e1e&scene=21#wechat_redirect)、[积分器为什么会冻住](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)、[floor除法为什么比truncation好](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486358&idx=1&sn=2532cf387748531b8146f4932f2eeebe&scene=21#wechat_redirect)、[DWT怎么量时间](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486406&idx=1&sn=60a4af601837160605a6613056ece997&scene=21#wechat_redirect)——这些具体的技术点，回过头来看，每一个都不复杂。复杂的是把它们串成一条完整的信号链，然后在精度、速度和开发成本之间找到那个属于你的项目的平衡点。

各位同仁，这个系列到此结束。感谢各位的耐心阅读。工作中遇到定点代码看不懂的时候，记得回来翻翻这个系列，说不定能少走一段弯路。

  

**参考文献**

\[1\] M. Konghirun, L. Xu, and J. Skinner-Gray, "Quantization errors in digital motor control systems," in _Proc. IEEE Int. Conf. Electric Machines and Drives (IEMDC)_, 2003.

\[2\] R. Majumdar, I. Saha, and M. Zamani, "Synthesis of minimal-error control software," in _Proc. ACM/IEEE Int. Conf. Embedded Software (EMSOFT)_, 2012.

\[3\] M. A. Najahi, "Synthesis of certified programs in fixed-point arithmetic, and its application to linear algebra basic blocks," Ph.D. dissertation, Université de Perpignan Via Domitia, 2014.

\[4\] E. T. L. Omtzigt, P. Gottschling, M. Seligman, and W. Zorn, "Universal Numbers Library: Design and implementation of a high-performance reproducible number systems library," in _Proc. Conf. Next Generation Arithmetic (CoNGA)_, 2020.

\[5\] J. Yiu, _The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors_, 3rd ed. Oxford, UK: Newnes (Elsevier), 2014.