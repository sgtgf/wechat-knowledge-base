# 【教研室成果】MTT：电磁逆设计——让神经网络自己画出金属结构


> 原文地址: [https://mp.weixin.qq.com/s/w3o8pVosWoPbedYvAFOBLg](https://mp.weixin.qq.com/s/w3o8pVosWoPbedYvAFOBLg)

论文信息

* * *

  

题目：

Electromagnetic Inverse Design Method for 2-D Parametric-Curve-Defined Metallic Structures Based on PINNs

作者：

Jinsong Fan, Junjie Shao, Jin-Pin Liu, Hongyuan Chang, Yuhang Liu, Ren Wang, and Bing-Zhong Wang 

单位：

Institute of Applied Physics, University of Electronic Science and Technology of China, Chengdu 611731, China.

出版信息：IEEE Transactions on Microwave Theory and Techniques, 2025; DOI: 10.1109/TMTT.2025.3628729 

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnpmxUCacNSE0zTIXfoB1AZibPeIIS1gcqM3avMCRWbREXpwddricGAtiaIg/640?wx_fmt=png)

 逆设计为什么这么难？

* * *

  

在电磁工程中，我们经常希望设计出一个结构，让它产生某个期望的场分布，比如让天线产生指定方向图，让散射体形成目标 RCS，让金属形状实现某种定制的近场……但是传统逆设计方法需要不停前向仿真、求梯度、算伴随场、计算量巨大，因此，很多时候设计就变成了“试一试 → 仿一下 → 再调参数 → 再仿…” 这非常耗时。

  

 这篇论文做了什么？

* * *

  

我们提出了一个新框架：用物理信息神经网络（PINN），在不依赖全波仿真算法的情况下，直接优化金属结构的边界。在该方法中，结构形状不是离散化或灰度化，而是用傅里叶参数曲线来表示完整边界，用少量参数就能描述丰富形状。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnpE9WWz5Y8z99ImMgzvaWPTbOL3mOaPlG8WfqOt3nHRhqU766IrRzIAA/640?wx_fmt=png)

一种傅里叶曲线

在该方法中，PINN 的输入包括：

·点的空间坐标 (x,y)

·当前结构的 Fourier 系数 (aₘ, bₘ)

输出是该点的散射场。 

通过以下物理残差构建损失函数：

·Helmholtz PDE 残差

·金属边界 E=0 条件

·目标边界场约束（Ez 或 |Ez|）

·Mur 边界吸收条件（帮助网络学习波动特征）

在训练过程中：

✔ PINN 负责预测电磁场            
✔ 自动微分负责优化结构参数

因此结构边界会像“会动的橡皮筋”一样逐渐朝目标收缩调整。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnp17ibmCMlf2dZaZ4ty5jqC5Kjf9L6eN9HYaicjoiaK0uUTGzYpDeNHn19g/640?wx_fmt=png)

该方法的架构图

案例结果

* * *

  

🟣 Case 1：已知目标场的振幅 + 相位

PINN 只用 1 小时就设计出一个新结构，使边界场误差从 35% 降到 5%。最终形状与产生参考场的金属形状并不一致，但仍能生成几乎相同的场。因此，电磁逆设计的核心是：形状不唯一，功能最重要。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnpXgPnrxDJcbuZykeZ99pmLp1nVYVx3d6R4ygAOp3B1NZctSpgckictCg/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnpk8ExuCn24LRLuFh7ZuyXklXiaicov7F0D9SM3rS2biciaptbuJFceiboA2g/640?wx_fmt=png&from=appmsg)

初始结构与最终结构

🟣 Case 2：只给振幅（无相位）

无相位问题是工程中更常见的情况（比如方向图）。在解决这种问题时，PINN 的误差也很小，仅为 3.6%。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnpbTfPrpF6mibzBaAjhhlpS67ymMgZPax8QOndfOmrmNcxiaCXdmlyAnibw/640?wx_fmt=png)

几种算法的无相位逆设计结果比较

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaWk0WKYwiaIKrBPsfGhtCKnpicPWrp4ib2EPfzJ6OYFaV8CQHLbtP8Pmdj9kolXW5FZJNEY3iaGiaBzfOA/640?wx_fmt=png)

几种算法的速度和误差比较

论文总结

* * *

  

该工作展示了 PINN 在逆设计中的潜力：

✔ 不依赖电磁仿真循环

✔ 可以直接设计“可制造的金属边界”

✔ 能处理多连通区域

✔ 可以扩展到 3D 金属器件

✔ 能处理金属–介质混合结构

✔ 未来可以联合优化多个散射体

长期来看，PINN可能成为天线自动化设计、隐身结构优化、复杂器件逆向生成、无网格仿真的重要工具。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/TMTT.2025.3628729\]