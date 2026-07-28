# IEEE TMTT：让电磁器件结构与激励“协同进化”


> 原文地址: [https://mp.weixin.qq.com/s/0nTrUElm46n8rt4wO5FshA](https://mp.weixin.qq.com/s/0nTrUElm46n8rt4wO5FshA)

在现代微波与电磁系统中，许多关键器件都属于多端口电磁器件，例如阵列天线、功分网络、滤波器以及新型辐射结构等。这些器件的性能不仅取决于结构本身，还与各端口的激励方式密切相关。

然而，在传统设计方法中，工程师往往需要在两个维度之间反复尝试：

-   一方面不断修改器件结构；
    

-   另一方面调整端口激励条件。
    

由于二者强烈耦合，这种“分开优化”的方式往往难以充分发挥器件潜力，也使设计过程变得复杂而耗时。

近日，本教研室在微波器件逆向设计（inverse design）领域取得新进展，相关成果以Inverse Design Based on Coordinated Optimization of Multiport Excitation and Pixel Structure为题，发表于微波领域权威期刊 IEEE 旗下的 IEEE Transactions on Microwave Theory and Techniques。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAtY5ajBVibT1HiaIrq0icmIZ31HfZM1WpROotsCQ2hZnSCbgicwWmLUjaUDu3F3GlZOQ4n5Io505b8ZnxIgJ5UQCqcbZNFZzyRGibM/640?wx_fmt=png)

场路协同逆设计方法示意图 

* * *

  

一、从“结构优化”到“结构+激励协同设计”

在这项工作中，研究团队提出了一种多端口激励–结构协同逆向设计方法。其核心思想是：

不再分别优化结构或激励，而是把二者放在同一个框架下同时优化。

通过建立一种场–电路等效变换框架（field–circuit transformation framework），引入辅助离散端口，把复杂的像素化结构对电磁场的影响等效为端口负载状态。

这样一来：

·结构变化 → 等效为端口状态变化

·端口激励 → 与结构一起统一优化

在数学模型中，原本复杂的电磁结构设计问题被转化为一个可高效求解的协同优化问题。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAasmYhUdCNeBN2oDR3yOD7TFeSKucpPZsabl0BYGn26Zl6GxUTGkDn9w8gQXGw3jLDCcQsiaiaUwia6R8FcxWQ4r0qLLOgicCQjPU/640?wx_fmt=png)

双焦点聚焦案例

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDwkk2jpJqKZRaib2TmrFjF69GHHjoyTVHf9m0WXhia10dQlMu4M1NJkf3ibSwvQwibyA2y91rics501UCByBefcJVR0kYhsetnfIAE/640?wx_fmt=png)

优化时间比较 

* * *

  

二、设计效率与性能同步提升

这种方法带来了两个重要优势：

1️ 寻优空间显著扩大

传统方法往往只能在“结构空间”或“激励空间”中搜索，而该方法在联合空间中进行优化，使可探索的设计空间大幅增加。

2️ 器件性能显著提高

由于能够同时调控结构与端口激励，系统可以找到传统方法难以达到的电磁响应，从而获得更优的器件性能。

仿真与实验结果表明，该方法在多端口电磁器件设计中能够实现：

·更灵活的电磁场调控

·更优的辐射或传输特性

·更高效的设计流程

 ![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsAeaTHao7oZ9nRV1EYc77RJXC1xFTeiaMQA2g3SIr5wuvng8mENPiacb3LcQSrOx2Lqb0gAl22fSIaficACuibyXROULFl0IJBAhj8/640?wx_fmt=png)

高增益天线案例

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsBA7gSaicGDK99Zl0zfPQ5Q8f4WnW2dJsTQJPN66hWSENL3ToWpZ5FqiaAv6jQrhd4oKZOib34CricTYdtrhOltwC3ia22ibmdCuPHb0/640?wx_fmt=png)

性能比较：（a）只优化激励；（b）只优化结构；（c）协同优化 

* * *

  

三、为AI电磁设计打开新的可能

近年来，AI与电磁设计的结合正在成为研究热点。本研究提出的“结构–激励协同逆向设计框架”，为这一方向提供了一种新的思路——不仅设计结构形态，还同时设计激励方式。

这一思路有望在以下领域发挥作用：

·新型阵列天线设计

·多端口微波网络

·可重构电磁器件

·智能电磁系统 

* * *

📄 论文信息            
Junjie Shao, Yinchen Wang, Jing-Cheng Liang, Bing-Zhong Wang, Ren Wang\*. Inverse Design Based on Coordinated Optimization of Multiport Excitation and Pixel Structure, IEEE Transactions on Microwave Theory and Techniques, 2026, DOI 10.1109/TMTT.2026.3667594.  

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/TMTT.2026.3667594\]