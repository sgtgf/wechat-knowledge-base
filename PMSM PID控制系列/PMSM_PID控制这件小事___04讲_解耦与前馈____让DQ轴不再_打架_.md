# 《PMSM PID控制这件小事》| 04讲：解耦与前馈 —— 让DQ轴不再“打架”

原创 傅存敬 电磁散人 2026-03-16 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/2s2wXUE8JQK1oVn-zFox3w](https://mp.weixin.qq.com/s/2s2wXUE8JQK1oVn-zFox3w)

各位同仁，前面几讲，我们把PID控制器从理论武装到了代码，解决了[离散化](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485672&idx=1&sn=5c719696d791123001289fafd9051e18&scene=21#wechat_redirect)、[抗饱和和参数计算](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485712&idx=1&sn=2021829230af1a26f52b1b266ff8b87f&scene=21#wechat_redirect)的问题。我们现在拥有了两个独立的、看起来很不错的PI控制器，一个管D轴电流，一个管Q轴电流。

一切似乎都很完美。

但是，各位同仁，我们忽略了一个致命的问题。DQ坐标系它不是一个静止的坐标系，它在跟着转子高速旋转！在高速旋转的参照系里，会出现一些违反我们直觉的事情。

想象一下你站在一个高速旋转的旋转木马上。如果你想往前扔一个球，让它直线飞出去，你会发现这个球会莫名其妙地拐一个弯。这个“莫名其妙”的力，在物理学上叫**科里奥利力（Coriolis force）**。

在我们的FOC控制中，也存在着类似的“科里奥利力”。当我们在Q轴上施加一个电压 Uq 想改变 Iq 时，由于坐标系的旋转，这个电压会产生一个分量，像一只看不见的手，偷偷地推了D轴一把，干扰了D轴电流 Id。反之亦然。

这就是 **DQ轴的交叉耦合效应**。

这个效应在数学上，由永磁同步电机的电压方程明确定义：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAT6Wab6IYfEXEiafvTIcZrLQGibnPicpxBKexvwNfOFQicibHq7ibup2U5uZpcGPlJ75ryia838YMAiax2xmZRuP2XHlocOs0HPLxwX2Nw/640?wx_fmt=png&from=appmsg)

各位同仁请看，红框里的交叉项：

-   Ud方程里，出现了一个和 iq 相关的项：-ωeLqiq
    
-   Uq方程里，出现了一个和 id 相关的项：ωeLdid
    

这些就是DQ轴之间“打架”的根源！ωe 是电角速度，转速越高，这个耦合项就越大，打得就越厉害。在低速时，这个影响可以忽略不计；但在高速、特别是弱磁区，这个耦合效应会严重破坏电流环的稳定性，导致电流波形畸变、转矩脉动，甚至过流保护。

那么，怎么才能让它们“和平共处”呢？

* * *

**前馈补偿 (Feedforward Compensation) —— “预判你的预判”**

控制理论给我们提供了一个绝佳的武器 —— **前馈控制**。

在文末共享的经典PID教材\[1\]的 **Chapter 5, "Use of a Feedforward Action"** 章节里，明确指出，如果一个扰动是可以被测量或者被预测的，我们就没必要等它产生误差了再用PID去补偿。我们可以在它产生影响之前，就主动施加一个反向的控制量，把它抵消掉。

这就像打靶，新手是看到子弹打偏了再调整准星（反馈），而神枪手是预先计算好了风速和子弹下坠（前馈），一枪命中。

在我们的DQ轴控制中，这个“扰动”就是耦合项！幸运的是，这个扰动是**可以被精确计算**的！

-   D轴上的扰动是 -ωeLqiq
    
-   Q轴上的扰动是 ωeLdid
    
-   Q轴上还有一个反电动势扰动 ωeΦf
    

我们只需要在PI控制器的输出上，提前把这些扰动项加回去，就能在它们产生影响之前将其完美抵消。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASVlvQrnOujE3hIHBXJxDgylgibKnqfaooEGYZfhxyTRAxemibpKcPs7FQ6rPavSia3TbFMVTSEia8SkDXFfnIfpGclkicsZjiabfNx4/640?from=appmsg)

这就是**前馈解耦**。现在，让我们看看两份代码是如何实现这个“神枪手”操作的。

**代码A** ( pm.c ) **的“教科书级”全解耦**

我们打开 pm\_loop\_current 函数，这里有一段堪称艺术品的代码：

```
// 代码A: pm_loop_current()
```

这段代码的工程智慧体现在以下几点：

1.  **完全对应公式**： 它把电压方程中除了微分项之外的所有项 (Rsid, Rsiq耦合项, 反电势项) 全部作为前馈补偿加了进去。这就是**全状态前馈**，理论上可以做到对模型的完美逆解。
    
2.  **使用“给定值”进行前馈：** 注意，它用的不是反馈回来的实际电流 pm->lu\_iD, pm->lu\_iQ，而是用的给定值 pm->i\_track\_D, pm->i\_track\_Q。为什么？这是一个非常深刻的工程哲学。
    

-   **优点**： 避免了将测量噪声（反馈电流中的噪声）引入到前馈通路中，使得前馈通道非常“干净”，极大地提高了高频性能。
    
-   **缺点**： 它假设 PI 控制器能很好地跟踪给定值，即实际电流约等于给定电流。在大多数情况下，这个假设是成立的。
    

**代码A****的哲学是**： 我相信我的PI控制器能做好本职工作，所以我用最理想的“目标值”来做前馈，以达到最快的动态响应。

**代码B** ( MotorPmsmMain.c ) **的“务实派”选择性解耦**

现在我们来看**代码B**。它在解耦这件事上，显得更加“务实”和“保守”。打开`VCCsrControl`和`PmDecoupleDeal`函数。

```
// 代码B: PmDecoupleDeal()
```

代码B 的工程智慧在这里：

1.  **提供选项：** 它没有像代码A那样“一刀切”必须全解耦，而是提供了EnableDcp这个开关。用户可以选择不解耦、只补偿反电动势、或者全补偿。这在产品应用中非常灵活。
    
    那么，为什么需要选项呢？ 因为在低速应用中，耦合项很小，PI控制器自己就能搞定，打开解耦反而可能因为参数不准引入扰动。这是通用变频器为了适配广泛的电机而不得不采取的措施。
    
2.  使用“反馈值”进行解耦：PmDecoupleDeal 函数中计算 RotVq 和 RotVd 时，用的是滤波后的实际电流 Isd 和 Isq。
    

```
gPmDecoup.Isd = Filter2((gIMTQ24.M>>12), gPmDecoup.Isd);
```

**代码B的哲学是**： 我不完全相信给定值，我只相信我测量到的东西。用实际反馈值来计算补偿量，虽然可能引入一些噪声，但更“诚实”，在模型参数不准时，不会错得太离谱。

* * *

**Simulink演示环节**

我们搭建一个FOC模型，观察在不同PID模式下的DQ轴电流波形。其中，Mode = 0 代表没有解耦的PID控制；Mode = 1 代表“电流指令给定值前馈”的PID控制，模拟的是代码A的效果；Mode = 2 代表“电流实测值反馈”的PID控制，模拟的是代码B的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAR0cgEsHiaAiagvx8NlvXwlOYznM8GsoNT6L55ia2icULEI6gFAQzcyQ2YSKxQp3bmBict31jibXY8qv47JrweONJxwxT0y0ZWk2Pus8/640?wx_fmt=png&from=appmsg)

我们首先看下 Mode = 1 （代码A的模拟）的仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQO9N1cwOfeVLqX41Ficp7LmSq4C42heYV7VLHElFRnIcxv4IhJAHjC1LsM6N096rIGSL27NI8lU30pHesTFBMacpJJx4yAjia9Y/640?wx_fmt=png&from=appmsg)

图中明显可见，当**红色线**（代表**Q轴电流的指令值**）在0.1s的时候，从0A阶跃到10A时，**蓝色线**（代表**D轴电流的反馈值**）有一个明显跳变。这是**代码A算法的尴尬时刻**，因为当Q轴电流的指令从 0A 瞬间阶跃到 10A 时，由于电感的存在，真实的电流 Iqreal 其实还是 0，它需要时间慢慢爬升。此时，电机内部的物理耦合项其实是 0。但是代码A的算法中，直接使用了指令值 Iqref 去计算前馈补偿电压 Udff = -ωeLq×10 ，这意味着，控制器在 t = 0.1s 时刻，**没有任何物理耦合发生的情况下**，就猛地施加了一个巨大的反向电压进行补偿。结果导致了**过补偿 (Over-compensation)**。你为了抵消一个还没到来的“敌人”（耦合电压），提前开了一枪（补偿电压）。结果敌人还没来，你的子弹却把队友（Id）打伤了（导致 Id 向下突变）。

我们再设置一下 Mode = 2（代码B的模拟），看一下代码B的“鸡贼”之处。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQWCdqk5mQT7EnfB0kvGSSryqVElv1SEZCWstQ1zbocnbJtM4kZWxKEjcHzuK10TKLszZAE0Rlgp6sIRicVDHw1YmVhpd3fb3hM/640?wx_fmt=png&from=appmsg)

效果很好是不是？因为代码B选择了**使用电流的测量值作为补偿值**，当指令阶跃时，因为电机绕组电感的存在，真实电流 Iqreal 还没起来，补偿电压也就没起来。当真实电流慢慢爬升，物理耦合电压变大了，补偿电压也跟着**同步变大**。结果就是药量和病情完美同步。所以 Mode 2 在仿真中看起来波形极其完美。

如果不做任何解耦控制呢？我们让 Mode = 0 ，来看一下效果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQpkPYbkWjQdZAibu1f8umnpzNsuMgEMxTg31iamnRzEye6pu55buAAJv1GC6lic959vk66s4lHgAbaHMDcgs4Y3IkaZwbR5K3WlY/640?wx_fmt=png&from=appmsg)

此时的仿真波形非常差，主要由两个物理因素导致：**反电动势 (Back EMF)** 和 **交叉耦合 (Cross-Coupling)**。

仿真刚开始，Iq (绿色) 瞬间跌落到接近 -20A，然后才缓慢爬升回 0A。D轴也有波动。这是由于电机的反电势引起的，我们的仿真模型在仿真一开始就给定了电机转速 ωe = 300_2_pi (约 1885 rad/s)。这意味着电机在飞速旋转。在 t = 0 时刻，PI 控制器的积分项是从 0 开始的。也就是说，控制器输出电压 Uq ≈ 0，但此时电机却是有反电势的，E ≈ ωe × Flux ≈ 1885 × 0.1 = 188.5 V。两者之差全部加在了电感上，导致电流瞬间像瀑布一样反向流出（这就是那个 -20A 的深坑）。随后，PI 控制器的积分项（I项）开始努力“积攒”电压，直到输出达到 188.5V 抵消了反电势，电流才慢慢回到 0。

在 t = 0.1s 的时刻，Q轴电流指令值 Ref\_Iq 阶跃上升（从0A阶跃到10A），D轴电流反馈值（蓝色线）本应该为0，却莫名其妙地向上突起了一个大包（约 4A），然后才被 PI 压回去。这是结结实实的耦合电压引起的。D轴的电压方程是 Ud = RId + LdId - ωeLqIq ，Q轴电流 Iq 的变大，D轴电压方程中突然出现了个电压干扰项：Udisturb = 1885 × 0.002 × 10 = 37.7 V 。此时 D 轴的 PI 控制器还在睡大觉（因为它之前的任务是维持 0），面对这突如其来的 37.7V，它反应不过来，导致 Id 被这个电压“推”了起来（蓝线向上突起）。过了几十毫秒，PI 控制器终于反应过来了，输出了反向电压把  重新压回了 0。

通过以上的仿真演示，我们也能深刻地体会到，**PI 是“事后诸葛亮”**，它必须等到有了误差（电流已经跑偏了），才会开始调节。

无论代码A也好，代码B也罢，这两种方法各有各自的工程设计哲学。但它们都离不开一个前提：对电机模型参数 Ld, Lq, φf 的准确了解。那么，回到最初的问题，如果这些参数不准怎么办？如果电机在运行中因为磁饱和，电感值变了怎么办？

这就引出了我们下一阶段技术文章的核心：当我们不再能完全相信我们的模型时，我们该如何控制？我们将进入速度环和位置环，去直面更多来自“机械世界”的非线性与不确定性。

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接https://pan.baidu.com/s/16nMm9wZD9DvmVbfuaACd2Q?pwd=gmz7 提取码: gmz7