# 《PMSM PID控制这件小事》| 03讲：基于模型的整定 (Model-Based Tuning) —— 告别“盲调”PID

原创 傅存敬 电磁散人 2026-03-09 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/dt1UYXrZEjw7d1aJHcETXA](https://mp.weixin.qq.com/s/dt1UYXrZEjw7d1aJHcETXA)

各位同仁，前面两讲，我们聊了PID的“骨架”怎么搭。但一个控制器光有骨架不行，还得有“灵魂”——那就是它的参数 Kp 和 Ki。

很多工程师，包括我以前，调PID参数就像中医看病，靠的是“望、闻、问、切”，也就是“试”。先给个差不多的 Kp，看看波形，震荡了就减小点，响应慢了就加大点。这种方法我们叫“试凑法”，或者说得好听点，叫**齐格勒-尼古拉斯(Ziegler-Nichols)调参法**。

具体的Z-N法的原理，可以参考文末参考文献\[2\]中的 Chapter 2 的 **Section 2.3.1, "Ziegler-Nichols Types of Tuning Rules"，或者参考明后天的文章分享。**

这种方法有用吗？当然有用，它简单、直观，是工程师的入门必修课。但它的问题也很大，就是不够“科学”，效率低，而且往往找不到最优解。

今天，我们要聊一种更“高级”的玩法，叫基于模型的整定 (Model-Based Tuning)。它的核心思想就一句话：

**“控制器的参数，应该由被控对象的物理模型来决定。”**

这就像给病人看病，不是靠感觉开药，而是先去做个CT、核磁共振（建立模型），拿到精确的生理数据，然后根据药理学（控制理论）精确计算出用药剂量。

对我们电机控制来说，被控对象是什么？就是电机的FOC电流环。它的物理模型，就是我们大学里学的**电机绕组的等效电路**：一个电阻 R 和一个电感 L 串联。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQGPUn7R5F16hTJAbiafdOr3ksiaqia3owGjPicgcibBiaPgibibWF8RG0T6PcMxtYQ2TT1ED2ibOx0t0o3IsON3xYIFDic4sx2u0lYGmEKQ/640?wx_fmt=png&from=appmsg)

它的数学模型，也就是传递函数，写出来就是：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAS70T15s0KgicQOUrmEJhr028aLPXWrXUDG52uBy3CnYZia82VOSnmfBkolFTcKlpvqg4R46KqNws9licPT5vxneTvnut3CTKglyI/640?wx_fmt=png&from=appmsg)

其中，增益 _K = 1/R_，时间常数 _T = L/R_。这是一个标准的一阶惯性环节。

好，模型有了，怎么设计控制器呢？这里就要请出我们控制理论里的一位“大杀器”——**内模控制 (Internal Model Control, IMC)**。

具体的内模控制（IMC）的原理，可以参考文末参考文献\[1\]中的 Chapter 7 的 **Chapter 7.5.1, "Internal Model Control Design"，或本周后续的技术文章分享。**

IMC的理论比较复杂，但它推导出的一个结论极其优美和实用。它告诉我们，对于一个一阶惯性环节，要想得到一个又快又稳的响应，最佳的控制器形式应该是：**把被控对象的模型“倒过来”，再串联一个低通滤波器，即：**

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQyhMSqCJCj7QOveDZCZnMYeDbX251WsQ8kUL4V7iaXvTtZjvgEAia7C1wLibSWdcLolQk3XcKrrLIVSYSIyCFic7a9GRJQia6ia1e8M/640?wx_fmt=png&from=appmsg)

其中 _F(s)_ 是一个低通滤波器，通常是 _1/(λs + 1)_。_λ_ 是我们唯一需要调节的参数，它代表了我们期望的闭环响应速度。

我们把 _Gp(s) = K/(Ts + 1)_ 代进去：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATziaH3zP44kmqfLIJvqibcu1SHGczFOW2HgjnAnMaQoHoOP7TiapUeEmjqpIfrpZREZdu3aDS7tBA3ZgkdiaGv8v6Ox00LprhAaJQ/640?wx_fmt=png&from=appmsg)

这个公式看起来还不像PI控制器。别急，我们把它放到一个标准的闭环反馈结构里，经过一个简单的变换（如文末参考文献\[1\]中所述，_C(s) = Gc/(1 - Gp·Gc)_ ），最终得到的等效控制器 _C(s)_，化简后会惊人地变成一个PI控制器的形式！

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsART4Hm2aFUw83pibsN00ea2Zg4FebEFOzJhxT3E1SO95UQU7VvBwPWtGicA1XpIQ7Ll4jSXVLgOBLzRPXE6dnrATqicDQ8JicFDXls/640?wx_fmt=png&from=appmsg)

并且，它的参数可以直接算出来：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASicCiaicZCkEfA5SbcmiaBvXGgcuudKGm0YxuyiaZr5QDNG9PLx1UsytwbjLI2xILsDg6yeZvAW7sGwJM7JiaZcN1niccOG9x4WzZMLY/640?wx_fmt=png&from=appmsg)

所以，_Ki = Kp/Ti = (L/λ)/(L/R) = R/λ_。

各位同仁请注意这两个公式，这简直就是“上帝公式”：

-   _Ti = L/R_：积分时间常数等于电机的电气时间常数。这在控制理论里叫**“零极点对消 (Pole-Zero Cancellation)”**。PI控制器提供一个零点，正好抵消掉电机模型里的那个极点。
    
-   _Kp = L/λ_：比例增益只跟电感 _L_ 和你想要的闭环响应时间 _λ_ 有关。_λ_ 越小（你期望响应越快），_Kp_ 就越大。
    

现在，我们带着这个“上帝公式”去审视我们的两份代码。

**代码A (**pm.c**) 的理论再现：**

我们看文末共享的 **代码A** ，它就是基于模型整定的忠实执行者。打开 pm\_auto\_loop\_current 函数：

```
// Code A: pm_auto_loop_current()
```

这段看似简单的代码背后，隐藏了很多的工程智慧：

1.  **参数由物理模型决定**：Kp，Ki 完全由 Lmin (电感), const\_Rs (电阻) 和 m\_freq (采样频率/带宽) 决定。用户不需要“试凑”，只需要告诉代码电机的物理参数是多少。
    
2.  **_Kp_ 与 _L_ 成正比**： 跟我们的理论推导 _Kp = L/λ_ 完全一致。
    
3.  **_Ki_ 与 _R_ 成正比**： 它的 Ki 计算方式略有不同 0.02f \* Lmin \* Df \* pm->m\_freq ，但最终结果也是与电阻相关的。这是一种考虑了离散化和执行延迟的更精细的IMC实现。
    

**代码A** 的工程哲学是：只要你告诉我准确的地图（电机模型），我就能给你规划出最优的路径（PID参数）。

**代码B** ( MotorPmsmMain.c ) **的工程实践：**

再来看 **代码B**，它是典型的工业派。它也用到了模型参数，但方式更“工程化”。打开 IPMCalAcrPIDCoff 函数：

```
// Code B: IPMCalAcrPIDCoff()
```

这段代码背后的智慧是：

1.  **标幺化思想：** 代码B 的世界里没有“亨利”和“欧姆”，只有“标幺值(per-unit)”。它通过复杂的基值计算，把所有物理量都归一化了。这样做的好处是在定点DSP上，可以最大限度地利用数据位宽，防止溢出，并且一套代码可以适配不同功率等级的电机。
    
2.  **简化的经验公式：** 它计算 Kp 和 Ki 的公式看起来像“天书”（比如那个 53050UL 的神秘数字），但这背后都是工程师把理论公式、Q格式转换和各种经验系数融合在一起的结果。例如，IdKi = Rpm/3 就是一个高度简化的、在特定采样率下的积分增益经验公式。
    

**代码B** 的工程哲学是： 理论很重要，但在有限的计算资源下，稳定和可靠压倒一切。我用一套经过千锤百炼的经验公式，也能达到八九不离十的效果。

**总结与互补**

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARPdunicRQFneMyl5vc1a4SYWIKbbmWwjstQPzfpARPVUNjr1zkDWSuicehFdtTUnbYb3uYrOtYL4iaRhI3Y7yARBdtEoHYSGHdxw/640?wx_fmt=png&from=appmsg)

**互补点：**

两份代码都完美地体现了“参数应该算出来”的思想。但它们都面临一个共同的风险：如果用户输入的电机参数 L 和 R 不准怎么办？特别是电机发热后 R 会变化。

这就是下一阶段的技术文章要分享的：**如何让驱动器自己去“量”出这些参数？** 也就是文末参考文献\[2\], **_Autotuning of PID Controllers: A Relay Feedback Approach_** 的精髓——在线参数辨识。只有把模型基整定和在线辨识结合起来，才能打造出一款真正智能、免调试的驱动器。

* * *

**Simulink演示**

代码A、代码B的PID效果，对比起来看是最直观的，按照各自代码内的实现逻辑，在simulink中搭建仿真模型，同时，让二者的输出控制相同的电机，模型中用Plant\_Motor\_A和Plant\_Motor\_B作为代码A和代码B输出的负载，这是为了布线方便，实际上Plant\_Motor\_A和Plant\_Motor\_B二者的内部参数是完全一致的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAR6pPD3EQ6oGSvicZr06r03GL4XREdc2EgLm2t8Rw9rG2icBibAcZVjJyqgFI3Pv5Bm3gVxXwbbnhWOAtGUoJHeV0qbW9CfMPDeUg/640?wx_fmt=png&from=appmsg)

让 **代码A（物理计算派）** 和 **代码B（经验工程派）** 在 2000 RPM 的匀速工况下进行了一场同台竞技。

给定的任务很简单：让 Q 轴电流（转矩）瞬间从 0 跳变到 5A。

结果怎么样？请看这张“战报”。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQIWG4Wt33c7ic0SCwsmX54QOgZ6qpJRELfzGQ4grhKHt64oib2RdUTeasY2RM4lV3hyrZY2Vxp7x4TRcF96G9Re6RKTmGIv6o4g/640?wx_fmt=png&from=appmsg)

我们首先看**速度的较量（Iq的响应）**：

-   **橙色线**（代码A - pm.c 的算法）：大家看这条线，干脆利落。指令发出的瞬间，电流像箭一样射出去，在 **3毫秒** 内就死死咬住了 5A 的目标值。这叫什么？这就叫**带宽**。
    

为什么能做到呢？因为它的 Kp 是算出来的：_Kp = 0.5·L·D\_f·F\_req_。它充分利用了电感的物理极限和开关频率的所有潜能。

-   **紫色线**（代码B - MotorPmsmMain.c 的算法）：再看这条线。它也起来了，但是大家注意到了吗？它在后面拖了一个长长的“**尾巴**”，爬了整整 30毫秒才勉强跟上大部队。
    
    为什么会这样？ 这就是我们常说的“积分太弱”。代码B 的代码里写着一行经验公式：Ki = R / 3。对于这个电机， 只有0.2Ω，算出来的积分增益太小了！面对高速旋转产生的巨大反电动势（EMF），这个微弱的积分项根本顶不动，只能慢慢悠悠地积累误差。这意味着在动态负载变化时，你的电机瞬态扭矩是不足的！
    

我们再来看**控制的艺术（Id的扰动）：**

如果说 Iq 是“进攻”，那 Id 就是“防守”。理想情况下，D 轴电流应该永远是 0。

-   绿色线（代码B - MotorPmsmMain.c 的算法）：大家看这座“小山丘”。当 Q 轴电流启动时，D 轴电流瞬间被带飞，冲到了 **2.2A**！
    
    这是什么？ 这就是交叉耦合。电机转起来后，DQ 轴不是独立的，Q 轴电流一大，会通过 ωLqIq 产生一个电压去干扰 D 轴。后果就是，D 轴电流失控不仅会导致电机发热，还会导致实际力矩输出波动。而在 代码B 中，因为没有做解耦算法，控制器对此毫无防备，只能眼睁睁看着电流跑偏，然后再慢吞吞地拉回来。
    

-   **蓝色线**（代码A - pm.c 的算法）：请各位同仁找一下蓝色线在哪里？对，**它紧紧地贴在 0 轴上，纹丝不动。**
    
    **为什么？ 因为 代码A 在算法里预判了 代码B 的预判。它计算出了耦合电压，提前并在输出端减去了。这就是前馈解耦 (Feed-Forward Decoupling)的威力。**
    

各位，这四条曲线的对比，就是“**调参工程师**”和“**控制算法工程师**”的区别。

-   代码B - MotorPmsmMain.c 的算法代表了传统的工业做法：保守、凭借经验（_Ki = R/3_）、能用就行。它也能转，也不会炸机，但在高端应用上，它的响应就是那条拖泥带水的紫色线。
    
-   代码A - pm.c 的算法代表了模型基设计（Model-Based Design）：精准、依赖物理参数、追求极致。
    

希望通过这个Demo，大家能明白，为什么我们在代码里要写那些看似复杂的 _L、R、ω_ 计算公式。因为只有算得准，才能控制得稳！

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接：https://pan.baidu.com/s/1tPascp01vr9DpywU7g5A0w?pwd=5i62 提取码: 5i62