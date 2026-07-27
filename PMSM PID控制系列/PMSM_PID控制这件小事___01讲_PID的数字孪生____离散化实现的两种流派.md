# 《PMSM PID控制这件小事》| 01讲：PID的数字孪生 —— 离散化实现的两种流派

原创 傅存敬 电磁散人 2026-03-02 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/gb6a6kZlGjVL2bfLNwgwUg](https://mp.weixin.qq.com/s/gb6a6kZlGjVL2bfLNwgwUg)

各位同仁，我们做电机控制，天天跟PID打交道。大家都很熟悉这个公式，它写在每一本自动化教材的封面上，像一座丰碑。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQewE7kZziar4wL1458pmxtmWbngmyI3xGthEIneUfgibYmyXRpCKia0U9mpSZZgWwJ12AwO9HianGEJ4AS44vRnBTqv4NkZFPjwNc/640?wx_fmt=png&from=appmsg)

多漂亮，多优雅。比例、积分、微分，像三位一体的神祇，掌管着我们的控制系统。但问题来了，这个公式是写给谁看的？是写给数学家看的，它存在于一个叫“连续时域”的理想国。

而我们的代码呢？它活在一个叫“离散时域”的现实世界里。在MCU眼里，时间不是一条平滑的河流，而是一格一格的电影胶片，也就是我们的PWM中断、我们的采样周期。它不知道什么是“无穷小”的dτ，它只知道“上一个节拍”和“这一个节拍”。

所以，工程师要做的第一件事，就是当一个翻译，把数学家的语言翻译成计算机能懂的语言。

这个翻译过程，就叫**离散化 (Discretization)**。今天，我们就聊聊两种最主流的“翻译流派”。

* * *

**流派一：位置式PID (Positional PID) —— “绝对路径导航”**

我们先看第一种，位置式PID。它特别直接，想法很简单：每一次中断来了，我就根据当前的误差，重新计算一遍完整的、绝对的输出值应该是多少。

这就像我们开车用GPS导航，它不会告诉你“方向盘向左打5度”，而是直接告诉你“方向盘**应该**在左转15度的位置上”。它计算的是一个**绝对的目标位置**。

怎么算呢？咱们把积分变成求和，把微分变成差分。更详细的内容可以参考文末参考教材\[1\]中的 Chapter 1.7, 公式 (1.36)

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARVQwzqs17DXSFQR8uhyH5se06XcQnlF5hicuDPWaNDPsOMhebzecEDMtxAVNmL6MIcrMia7MW4ictY579YMZECMPcrLl4rYpUtz8/640?wx_fmt=png&from=appmsg)

看，那个优雅的积分符号 ∫ 变成了一个有点笨拙的求和符号 ∑。这就是“现实”。

现在，我们打开文末共享的 **代码B** ( MotorVCMain.c 文件)，看看工业界的老法师是怎么写这个位置式PID的。

```
typedef struct {
```

各位同仁请看，p->Total 这个变量，就是那个求和项 ∑e(ti) 的化身！它像一个账本，记录了从开机到现在所有的历史误差总和。每次调用PID32，它都用**当前误差**加上**历史总账**，算出一个完整的、绝对的输出值 p->Out。这就是典型的“位置式”算法，计算的是“你应该在的位置”。

**优点？** 简单、直观，直接对应理论公式。

**缺点？** 这个 Total 积分累加项，如果管理不好，就是个定时炸弹。我们下一讲会深入聊聊这个“积分饱和”的问题。

* * *

**流派二：增量式PID (Incremental PID) —— “增量调整导航”**

增量式PID换了一种思路。它不关心输出的绝对位置，它只计算“**这一次相比上一次，我应该调整多少？”**

这就像一个经验丰富的老司机开车，他不会去想方向盘现在具体在几度，他只会根据弯道的曲率，凭感觉喊“再多打一点”或“回一点”。他计算的是一个**增量 (Increment)**。

我们还是参考文末参考教材\[1\]中Chapter 1.7的公式 (1.37)

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARbmfj7nJ9NmIrp3vTNF2qSRuS7sg7RS8qb7U7icmI9v5t6Dl7uHabCEBKqeBtzR7C1eL37jutHZwXHzNfQnjWoMGKLD8KECvVo/640?wx_fmt=png&from=appmsg)

这个公式是通过用这次的位置式输出 u(tk) 减去上一次的输出 u(tk-1) 推导出来的：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATiaxwD0YkuMV3xS9ynW8VWcUOY69vYvqDg6wH1Uno989JIfkzCfZW7Uq4A6iaWFF8mdhtYia021D1aKY4McuTHXeBUrTnevhDC5s/640?wx_fmt=png&from=appmsg)

最终的输出是：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATdqgcEApc1m86POpaicd2ic3CadlJMYbfraYnu1P6ST6nb3yCM9C5CnRibZRjxiaqOWZIdQrQ57V3eU3EHoxibqibR83HDVYIcKJ3N0/640?wx_fmt=png&from=appmsg)

**增量式PID最大的好处是什么？**

它没有那个需要从头累加到尾的 Total 项！积分效果是通过把当前误差 ek 直接加到**上一次的输出值**上来实现的。

我们再来看文末共享的 **代码A** ( pm.c 文件)，它的实现哲学就非常贴近增量式的思想，虽然形式上看起来有点混合。

```
void pm_loop_current(pmc_t *pm)
```

注意看 pm->i\_integral\_D += pm->i\_gain\_I \* eD; 这一行。它不是像代码 B那样 Total = Total + Ki_Deta__，然后__Out = Kp_Deta + Total。它更像是在一个已有的积分值上，增加一个“增量”。这种结构在某些高级控制场合，比如需要无扰切换（Bumpless Transfer）时非常有用。想象一下，你开车时从手动模式切到自动模式，增量式可以直接从你手动设定的值开始，平滑地增加调整量。而位置式如果 Total 项没有预设好，一启动就会有一个巨大的跳变。

* * *

**本讲小结**

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARqvXpZwSEr1icDqJeCQsnmKJvwmCuxAfD7OkGKAWUny6jFuZmbrrXoD2muejZSz30VaSMZCccRBfJib0v6TUsgaOhmSbVCbM160/640?wx_fmt=png&from=appmsg)

那么，**为什么我们的两份电机代码看起来都偏向位置式？**

因为电机控制系统一旦启动，基本就永远处于“自动模式”，很少有手动/自动切换的需求。因此，位置式的直接和清晰，加上成熟的抗饱和技术（我们下一讲的重点），让它在高性能伺服驱动中大行其道。

* * *

**Simulink演示环节**

各位同仁请看，这里我们搭建了三个并行的仿真。

1.  **理想国：** 一个连续时间的PID控制器。
    
2.  **现实世界 (高采样率)：** 一个离散化的PID，采样率很高（本例中设为20kHz）。各位同仁会看到它的输出几乎和连续的一模一样。
    
3.  **残酷现实 (低采样率)：** 同样的离散PID，采样率降低到1kHz。各位同仁会看到振荡和延迟立刻就出现了！
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATlwa0ibWOibI5bCjfZWz9pNH9ibtRCgRTXM3abve6sybnnUsXQkDh15iafvHDsP6WS0oItlI2micTCbXsia4qGBtNwPiaXoicK8693vxw/640?wx_fmt=png&from=appmsg)

**理想国模块中的细节**如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASfH0QwRYGOEydcgT8vcBOv1zAWFXGib5xSJwjiayjmnHZ9mtcwRQZjL7TectpY5jaPqQ9zL2CttTpxGl9GY3cJrzT1D8icUzvKuw/640?wx_fmt=png&from=appmsg)

其作用是用于对标。我们会放入标准的 PID Controller (Continuous) 模块和被控对象 Transfer Fcn。这代表了教科书上的理论最优解。

**现实世界 (高采样率)模块中的细节**如下**：**

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASQtBzk4srWl5rchly2LicUxCsH0RUqYTQg4nxbONGBCo69VFBeFS2pxnspgLvgQekqbVFLYic80ibJ9C0VeTMibyHvRPjKSW1Nb48/640?wx_fmt=png&from=appmsg)

这是重头戏。我们不使用 Simulink 自带的 PID 模块，而是用**基本模块（Sum, Gain, Delay）手动搭建一个“位置式离散PID”结构**。以此来精确模拟 代码 B ( MotorVCMain.c 文件) 中的 PID32 算法逻辑（u(k) = kp·e(k) + ki·∑e(i)）。

**残酷现实 (低采样率)的实现细节**如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASXKNxfiaDPgTgmfj5cF8U4cbRNBpUf2dfC1pbn1tvQYkNarNt9z5XPKnWGzvxyezW4xaVPn5ODnEcoojyD3b5zosHUyPXzxjD0/640?wx_fmt=png&from=appmsg)

结构同上，但在被控对象处增加了低分辨率的 Zero-Order Hold (零阶保持器)，强制模拟低采样率下的物理世界反应。

看下示波器中的仿真波形：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATyPaZHHM8h0P3GBDia7uPickmejejDAS0UeibUoMBjWrqe7Q6kvcBtPPjbG3kDjRicRSziaRoicglUeLDCrbVnPgd7FzwaibnRa86318/640?wx_fmt=png&from=appmsg)

各位同仁，咱们辛苦搭了半天模型，最后跑出来的这张图，可以说是咱们做数字控制最核心的一张“体检报告”。

大家看这三条线，黄的、蓝的、橙的，它们面对的是同一个任务：**把电流从0拉到10A**。用的也是同一套PID参数。但是，结果却天差地别。为什么？

1.  **橙色线（Real\_LowSpeed）：惨不忍睹的“马后炮”**
    

咱们先看这条最显眼的橙色线。这上蹿下跳的锯齿，像不像心电图？这就是咱们工业现场最不愿看到的——**震荡**。

为什么会这样？大家想象一下，如果让你蒙着眼睛开车，旁边副驾驶每隔1分钟才告诉你一次：“偏左了！”或者“偏右了！”你会怎么开？

肯定是听到“偏左”就猛打右舵，听到“偏右”又猛打左舵，车子就在马路上画龙。

这条橙色线，就是那个每隔1分钟（这里是1ms）才“睁眼”看一次的司机。

-   **采样周期是1ms**：它在1ms内是“瞎”的，输出保持不变（这就是那些大台阶）。
    
-   **计算延迟也是1ms**：它现在的动作，是基于1ms前的路况决定的。这就是典型的“**马后炮**”。
    

在控制理论里，这叫**相位滞后**。对于一个响应很快的电机（时间常数10ms），你迟钝了1ms+1ms=2ms，相位裕度就不够了，系统就开始发飘，不仅超调大，还要晃荡好几下才能稳住。这就是我们为什么要买贵的芯片，跑高采样率的原因。

2.  **黄色线（Ideal\_Continuous）：过于激动的“理论家”**
    

再看这条黄色线，它是我们在书本上推导出来的理想连续PID。按理说它应该是最完美的，怎么也有个尖尖的超调呢？

这是因为我们的系统里有一个物理死区（Transport Delay，1ms）。这就好比你踩了一脚油门，车子过了1ms才开始动。连续PID像个急性子，它在这1ms里看车没动（误差没变），就以为油门踩轻了，于是**疯狂地踩、持续地踩**（积分项 ∫edt 快速累积）。等1ms后车子如果有反应了，它的油门已经踩过头了！这就是超调的来源。

这告诉我们：**只要物理世界有延迟，PID参数调得太猛（增益太高），再理想的控制器也会冲过头。**

3.  **蓝色线（Real\_HighSpeed）：稳如老狗的“实战派”**
    

最后看这条蓝色线。它是我们在DSP里跑20kHz高频采样的结果。大家发现没有？它居然比黄色的理想线还要稳，几乎没有超调，直接贴着目标值走了。这是为什么？是它比理想更聪明吗？

不，是因为它“**偷懒**”了。

我们在写代码实现积分时，用的是**累加**（Sum）。在最开始的那一瞬间，连续PID（黄色）是在做“斜坡式”的全力输出，而离散PID（蓝色）是在做“台阶式”的输出。就像你要推箱子，连续PID是**持续发力**推，离散PID是**一顿一顿**地推。在起步阶段，离散PID输出的总能量（积分面积）其实比连续的要稍微少那么一点点。正因为少了这一点点冲劲，配合上极其微小的计算延迟（50us），反而让它在这里因祸得福，还没来得及冲过头就稳住了。

**总结一下**：

-   **橙色线告诉我们**： 采样率太低（1kHz），控制就会变成“马后炮”，必然震荡。
    
-   **黄色线告诉我们**： 物理延迟（1ms PWM滞后）是超调的元凶，理论计算必须考虑它。
    
-   **蓝色线告诉我们**： 当你的DSP够快（20kHz），你的数字控制不仅能逼近理论，甚至在某些时候，能表现得比理论更从容。这就是我们追求高性能FOC的原因！
    

好了，各位同仁，今天我们把PID从理想国请到了现实世界，认识了它的两个数字孪生兄弟：位置式和增量式。我们知道了 代码B 的稳重，也理解了 代码A 的灵活。

但我们也留下一个悬念：那个看似无害的积分累加项 Total，在什么情况下会从一个忠诚的记录员变成一个“失控的恶魔”？

下一讲，我们将直面PID控制中最凶险的陷阱 —— **积分饱和**，并看一看，这两份工业代码是如何给它戴上“紧箍咒”的。

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接：

https://pan.baidu.com/s/1v9ZnN0oGRGFQfB6pcovv5w?pwd=4y5a 提取码: 4y5a