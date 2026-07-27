# 《PMSM 定点/浮点FOC运算这件小事》| 07讲：Cortex-M3没有FPU意味着什么——软浮点的100倍代价

原创 傅存敬 电磁散人 2026-04-20 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/igr0s\_HbLH3v\_whT4Twa6w](https://mp.weixin.qq.com/s/igr0s_HbLH3v_whT4Twa6w)

各位同仁，大家好。

[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486214&idx=1&sn=f66fbef59325ff550a184e985d0622dd&scene=21#wechat_redirect)我们拆开了float变量的内部结构——符号位、指数、尾数，三部分配合完成"自动挡"的数值缩放。听起来挺美好的，对吧？

但有一个前提：你的芯片得有FPU。

今天的问题很直接：**如果芯片没有FPU，你非要在代码里写float运算，会怎样？**

答案是：能跑。但你可能会后悔。

* * *

## 心算 vs 笔算

我们先不聊芯片，聊聊人。

给你一道题：37 × 24。

如果你数学还不错，大概能在脑子里直接算出来——37×20=740，37×4=148，加起来888。两三秒搞定。这就是**心算**。

现在换一道题：把37和24都先转成罗马数字（XXXVII和XXIV），再用罗马数字的规则来做乘法。

你会发现，这件事极其痛苦。罗马数字没有位值系统，没有进位规则，你得拆成一大堆加法和计数操作，绕一大圈才能得到结果。本来两三秒的事，可能要折腾好几分钟。

Cortex-M3做浮点运算，就是这个处境。

M3的硬件原生支持整数运算——32位整数加法1个周期，32位整数乘法1个周期，就像心算一样痛快。但它不认识浮点数。你在代码里写`float a = 0.667; float b = a * 1.5;`，编译器不会生成一条浮点乘法指令——因为M3的指令集里根本没有这条指令。

编译器怎么办？它会把这行浮点乘法**翻译成几十条整数指令**，用整数运算来模拟浮点运算的全过程：[拆出指数和尾数、对阶、尾数相乘、规格化、舍入、处理特殊值](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486214&idx=1&sn=f66fbef59325ff550a184e985d0622dd&scene=21#wechat_redirect)……每一步都是用整数指令一点点凑出来的。

这就叫**软浮点（soft float）**——用软件模拟硬件没有的功能。

* * *

## 到底慢多少

说"慢"太笼统了，我们看具体数字。

Cortex-M4带FPU的情况下，一条`VMUL.F32`指令完成单精度浮点乘法，1个时钟周期。

Cortex-M3没有FPU，同样的浮点乘法需要调用编译器内置的软浮点库函数`__aeabi_fmul`。这个函数内部要做这些工作：提取两个操作数的符号位、指数、尾数，判断是否为特殊值（NaN、Inf、零），指数相加，24位尾数相乘（用整数乘法指令实现），结果规格化，舍入处理，重新组装成IEEE 754格式。整个过程大约需要**50到100个时钟周期**。

浮点加法也差不多。M4上`VADD.F32`是1个周期，M3上软浮点加法`__aeabi_fadd`需要先对阶（把两个浮点数的指数调成一样的），再做尾数加法，再规格化——大约**30到70个周期**。

把常见运算的性能差异列成表：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARmHtiaP8icFLRas62YYpmy7ppNZfMicUEyGIANQibZe30kwZs4rfRgvNudATdtZJxlBALssw1RrZniaByZccQFkTT7UCJrKDdQQRr4/640?wx_fmt=png&from=appmsg)

最后一行是关键对照：**定点乘法在M3和M4上都是1个周期**。M3不是算得慢，而是算浮点慢。做整数运算，M3一点都不含糊。

* * *

## 对FOC意味着什么

这个性能差距放到FOC电流环里会怎样？

一个典型的FOC电流环包含：Clark变换（4次乘法+2次加法）、Park变换（4次乘法+2次加减法+2次三角函数）、2个PI控制器（各2次乘法+若干加法）、反Park变换（4次乘法+2次加减法）、SVPWM（若干次乘法+比较+除法）。粗略统计，一个完整的FOC周期大约需要20-30次浮点乘法和差不多数量的浮点加法。

在M4上用硬浮点，这些运算加起来大约50-80个周期。按72MHz的时钟算，不到1.5微秒。轻轻松松。

在M3上用软浮点呢？光乘法就要20×80=1600个周期，加上加法、三角函数、除法，整个FOC周期可能要**3000到5000个周期**，按72MHz算就是40-70微秒。

这是什么概念？如果各位同仁的电流环中断频率是20kHz，中断周期是50微秒。光一个FOC电流环的运算就占掉了大部分甚至全部的CPU时间——别的事情（速度环、通讯、保护逻辑）都没法做了。

而同样的算法改用定点实现跑在M3上，大约只需要150个周期，2微秒左右。CPU占用率从接近100%降到了4%。

**这就是为什么M3上必须用定点。** 不是定点比浮点"好"，是在没有FPU的硬件上，浮点运算的性能代价高到不可接受。

* * *

## 还有一笔隐形账：代码大小

软浮点还有一个容易忽略的代价——代码体积。

当你在M3上使用float运算时，编译器会把软浮点库链接进来。这个库包含`__aeabi_fmul`、`__aeabi_fadd`、`__aeabi_fdiv`、`__aeabi_f2iz`（float转int）等一系列函数，加起来大约占用**10-15KB的Flash空间**。

对于STM32F103RB这种只有128KB Flash的芯片来说，光软浮点库就吃掉了十分之一的代码空间。如果各位同仁的项目还要跑通讯协议栈、故障诊断、参数管理，Flash可能真不够用。

定点实现不需要链接这些库。所有运算都是原生的整数指令，代码紧凑得多。

* * *

## 那M4上用定点是不是浪费了？

有同仁可能会反过来想：我用的是M4，有FPU，那我还有必要用定点吗？

从纯性能角度看，M4上用硬浮点的FOC执行效率确实比定点更高（大约快1.5到2倍），因为FPU的流水线设计比整数单元做同样运算更高效。

但定点在M4上也不是没有优势——代码可移植性（同一套定点代码可以跑M0/M3/M4）、确定性（定点运算的结果是bit-exact可复现的，浮点运算因为舍入模式可能有微小差异）、以及某些特殊场景下的内存节省（int16比float省一半的数据RAM和总线带宽），这些都是在M4内核的MCU中跑定点算法的优势。

具体怎么选，取决于各位同仁的项目约束。这个话题我们留到后期文章的选型决策再系统讨论。

* * *

Simulink演示

我们在Simulink中搭建如下对比模型：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARUALwGUZayWSuByt4d5gErPpP0G0PjRxibtAibl4t1OlKaeNvSExYJUXJmOVv8aYUqOW9SNbtxUvxpspoe0XicZQMrjhXxuiaNTJc/640?wx_fmt=png&from=appmsg)

**Subsystem A：**基于单精度浮点（Single）的 FOC 计算。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAT5EILa9icqhSKxbpp4xNGxicy8gMhEQPiaUf2TqydRlMlAicTPGib84WoU5KO0ibYxIns3WgFfWfs6kv4qSWjibELKQ18qwA8fvATTMc/640?wx_fmt=png&from=appmsg)

Subsystem B：基于定点数（Fixed-Point）的 FOC 计算。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATFqMGl1BLfafKsb1Zn6hHTib32GxIFHEdE61yrFzspJKh7E2WAzniazuFRQ4HVspMVvJPv2s6gNr49icICDic8QpsKBTJxUQA7EbE/640?wx_fmt=png&from=appmsg)

我们首先看下仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAScDgLEiaYCPU0WxpaFAI6fwfroTeCUupJcZasicic12w7YaX0kaEWgCRsfQ3YNTcSS5ULibpcbbd5icvnZAnwh2ibxQ3UVyDSRjG94o/640?wx_fmt=png&from=appmsg)

在全局视野下，浮点（双通道）和定点（双通道）输出的 Iα 和 Iβ 波形是两条漂亮的正弦波，并且完全重叠，幅值精准地保持在输入设定的 1.5A 上。

我们再把模型放大来看：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARRiamns2dJtpyRFcJbTVK77J3Hxdo7j968FkgicZQdYQ5ZuveEMCmOQ4a1uzIJ6U1smHldskmAzmcrBJUIAUY6ayiaSJtrdicwoUE/640?wx_fmt=png&from=appmsg)

当波形横轴放大到 ms 级别时，所有的正弦波不再平滑，而是呈现出一格一格的阶梯状。

这是在模型中设置的 Ts = 50us 离散定步长求解器发挥的作用。真实单片机的 ADC 采样和运算是在定时器中断里一次次执行的。波形里的每一个台阶，就代表了一个 50us 的运算周期。这是高度还原 MCU 真实运行环境的表现。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARplJ9TicYcmPtWjjYhHaOPbLvE3YxXgUIAHajzxiazIaqg05hkK1iaibV8SPpmh3XtT7mw4ydqnloENH90fwuZWRJe520TtA62ibNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASBN2xDaBjpUx668bJiaxuKul5XRo3QLWH95vXrADDGs7yk8BaMRjR5ADoiab7X1p7ibYKDl9q1f5nXtTzGFK4ibQ9SAq5CjW1PMLE/640?wx_fmt=png&from=appmsg)

针对Iα，黄色（浮点）与蓝色（定点）的贴合度非常高，差异极小；而针对Iβ，橙色（浮点）与绿色（定点）**存在明显的缝隙，且绿色定点波形在波峰处明显“矮”了一点点！**

原因是什么？这是因为：

1.  **链路长短不同导致误差累积**：Iα 的公式是 Iα = Ia 。在我们的模型中，它只经过了一次 ADC 寄存器的采样强转（Q11格式）。因此误差仅仅由于那一次 16 位精度转换（1LSB = 2\-11≈0.000488）带来。 而 Iβ 的公式是 Iβ = (Ia + 2·Ib)/√3 。它经历了 **乘2 -> 相加 -> 乘以带小数的系数** 足足 3 个步骤！每一步的定点运算都在丢失小数点后的尾巴，误差当然比 Iα 更大。
    
2.  **“向下取整”带来的偏置误差（Bias Error）**：在模型中，给所有定点模块配置的舍入模式是 “RndMeth”, “Floor”（向下截断）。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARPCZ7tXq0nls452dE7B5nwfn3KRjQw1pMibh8baYGN7WL9j7by29OGZltDSnV4FWTQqbQ1xicC20w9icCGofBtzXkUnFW7btGgA0/640?wx_fmt=png&from=appmsg)

**MCU 的原生右移操作（比如**\>> 11）**在底层硬件上的数学表现，就是纯粹的无脑截断（Floor）！**因为总是抹掉小数位，不进位，所以每次计算结果都会比真实的浮点数**小一点点**。经过三次积累，绿色的定点波就不可避免地向内收缩了一点（变矮了）。

* * *

## 本文小结

各位同仁，到这里，整个系列的基础部分就讲完了。花了7篇的篇幅，我们一起走过了一条完整的认知链路：[定点数是怎么用整数伪装小数的（Q格式）](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486161&idx=1&sn=4cc0c68986f3ec9c3a53c56b4f8432a5&scene=21#wechat_redirect)、[运算过程中小数点为什么会跑偏（乘法规则）](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486177&idx=1&sn=948819bb60e37f1186a91480aab0232a&scene=21#wechat_redirect)、[Embedded Coder怎么通过移位策略来管理溢出和精度（headroom）](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486191&idx=1&sn=76bb0abffff440cb7eb2a74f220b2c9e&scene=21#wechat_redirect)、[浮点数内部长什么样（IEEE 754）](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486214&idx=1&sn=f66fbef59325ff550a184e985d0622dd&scene=21#wechat_redirect)、以及没有FPU时浮点运算为什么代价高昂（软浮点）。

有了这些基础，从下一篇文章开始，我们就要进入真正的"硬菜"环节——**逐模块拆解FOC电流环的定点实现代码**。Clark变换、Park变换、PI控制器、抗饱和、SVPWM，每个模块都会做定点和浮点的逐行对照分析。

**在下一篇文章中，我们回到Clark变换，用[第5篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486191&idx=1&sn=76bb0abffff440cb7eb2a74f220b2c9e&scene=21#wechat_redirect)学到的"Q格式追踪"方法，把iα那一行定点代码的每一步运算彻底拆解清楚——七步计算，一步不落。**

我们下篇文章见！

  

### 参考文献

\[1\] J. Yiu, _The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors_, 3rd ed. Oxford, UK: Newnes (Elsevier), 2014.

\[2\] ECE 5655/4655 Real-Time DSP, "Lecture 5: Fixed Point vs Floating Point," Course Materials.

\[3\] M. Konghirun, L. Xu, and J. Skinner-Gray, "Quantization errors in digital motor control systems," in _Proc. IEEE Int. Conf. Electric Machines and Drives (IEMDC)_, 2003.