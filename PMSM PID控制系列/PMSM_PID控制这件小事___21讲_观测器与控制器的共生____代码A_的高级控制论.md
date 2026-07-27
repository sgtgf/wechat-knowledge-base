# 《PMSM PID控制这件小事》| 21讲：观测器与控制器的共生 —— 代码A 的高级控制论

原创 傅存敬 电磁散人 2026-04-08 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/0hnmQar6wQMw3g90iMaNug](https://mp.weixin.qq.com/s/0hnmQar6wQMw3g90iMaNug)

各位同仁，大家好。

在前面十几篇文章里，我们在 PID 控制的深水区里摸爬滚打，搞定了[执行器限幅](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486006&idx=1&sn=6eca432418116f8497233189a63d5709&scene=21#wechat_redirect)、搞定了[抗积分饱和](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485894&idx=1&sn=88c9866d90a71fa73901aac20a728097&scene=21#wechat_redirect)、做好了[前馈解耦](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485952&idx=1&sn=50f5ef3e2c2583bec711f43ce01c6e5e&scene=21#wechat_redirect)，甚至学会了[用继电器让电机自己说出它的秘密（自整定）](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486054&idx=1&sn=7844cf088fe97d379a87117c9d07cfd1&scene=21#wechat_redirect)。

我们所有的这些努力，其实都建立在一个**极其天真且危险的假设上：我们假设，控制器每次读到的反馈值（比如转速、位置），都是绝对正确、绝对实时的。**

如果电机后面装了一个高精度的光电编码器，这个假设基本成立。但如果我们做的是**无感控制（Sensorless FOC）**呢？ 如果省掉了那个昂贵的编码器，控制器是怎么知道电机转到哪里了？

答案是：靠**观测器（Observer）**猜出来的！ 这就好比，你（PID控制器）被蒙上了眼睛开赛车，你旁边坐着一个领航员（观测器），他根据车子的震动和引擎的轰鸣声，不断地在你耳边喊：“现在速度 80！现在速度 120！”。你完全凭借他喊出的数字去踩油门和刹车。

今天，我们要解开顶级控制学界一个让人毛骨悚然的难题：**分离原理的失效边界**。 我们将扒开最硬核的全浮点代码 **代码A** ，去看看那极其恐怖的“扩展卡尔曼滤波器（EKF）”，到底是如何给 PID 制造“反馈”的；以及，如果 PID 动作比卡尔曼滤波还快，会导致怎样毁灭性的车毁人亡。

* * *

**原码赏析：代码A 的“天眼” —— 卡尔曼滤波**

各位同仁，请打开手里的 **代码A** 。

这是一份罕见地把现代控制理论直接揉碎了塞进 MCU 的代码。在这个系统里，没有编码器（pm->config\_LU\_SENSOR == PM\_SENSOR\_NONE），它的眼睛，正是 pm\_flux\_kalman(pmc\_t \*pm) 这段函数。

在这段代码的前后，作者极其罕见地用大段注释写下了矩阵公式：

```
/*
```

接下来在 pm\_kalman\_update() 里：

```
/*
```

这段让人头晕目眩的代码，就是大名鼎鼎的**卡尔曼滤波（Kalman Filter）**。我们在用大白话解释一下领航员（观测器）的两步工作法：

1.  **预测（Forecast）**： 领航员根据上一秒的车速和刚刚踩下的油门（电压），用物理公式心里默算一下：“下一秒车速应该是 100 码”。这就是刚才代码注释里的 P = F \* P \* F' + Q。
    
2.  **更新（Update）**： 但是领航员知道数学公式不准，所以他偷偷看了一眼仪表盘上的真实电流（pm->lu\_iX 和 pm->lu\_iY）。他算出一个误差残差（Residuals）：E\[0\] = pm->lu\_iX - A\[0\];。然后根据这个残差乘以卡尔曼增益 K，去修正刚才猜的 100 码。
    

最终，卡尔曼滤波吐出了一个速度：pm->flux\_wS。

然后，外环的速度 PID 就把这个 pm->flux\_wS 当成了金科玉律，做差、乘以 Kp、累加 Ki。

* * *

**致命冲突：当“上帝的左手”快过“上帝的右眼”**

在大学的控制理论课里，教授通常会教我们一个叫 **“分离原理（Separation Principle）”** 的概念。

意思是：不管系统多复杂，负责“看”的观测器和负责“动”的 PID 控制器，是可以分开独立设计的。互不干涉。

**但在真实的无感电机控制代码里，分离原理是一句彻头彻尾的谎言！**

大家想象一下极度危险的场景：

现场的工程师不知深浅，为了追求极佳的抗扰动能力，把速度环 PID 的 Kp 和 Ki 调得极其巨大（带宽极高）。电机只要速度低了一点，PID 瞬间爆发出极其刚猛的电流指令强拉转速。可是！卡尔曼滤波器（观测器）是有**收敛时间**的（也就是观测器自己的带宽）。

1.  PID 一脚地板油踩下去，真实电机的转速瞬间飙升。
    
2.  但是领航员（卡尔曼滤波器）的计算矩阵是有延迟的（还要受 Q、R 矩阵参数的限制），他甚至还没反应过来，嘴里喊出的观测速度 pm->flux\_wS 依然是一个很低的值。
    
3.  PID 一听：“怎么还是这么低？”于是它踩下了更狠的地板油！
    
4.  真实转速继续狂飙，卡尔曼的预测误差（残差 E\[0\]）大到了超出矩阵能纠正的极限——**观测器彻底发散，也就是领航员瞎了！** 随后，驱动器爆出震耳欲聋的声音，电机失控炸机。
    

这就是工业现场调无感电机控制时最深的痛点：**PID 以为它在控制电机，其实电机早就跑飞了，PID 只是在跟一个滞后的卡尔曼幻觉在搏斗。**

* * *

**代码A 的求生本能：拖延与重启**

为了防止“手比眼快”这种惨剧，代码A 的原作者做出了极其高明的工程防护。

**防护一：时间管理大师（POSTPONED）**

各位同仁知道卡尔曼的 5×5 矩阵乘法要耗费多大的算力吗？如果等这套矩阵算完了再去算 PID、再去发 PWM 波，那整个控制环路的物理延时太长，PID 必死无疑。

大家仔细看 pm\_feedback 中调用的顺序：

```
// 代码A: pm.c 里的奇妙调度
```

看到精髓了吗？作者把最耗时的观测器计算操作，**推迟（POSTPONED）**到了发完 PWM 波之后的垃圾时间里去运算。

这就是为了尽最大可能**抹平计算延迟带来的相位滞后**，让 PID 拿到尽可能“新鲜”的观测数据。

**防护二：对“幻觉”的硬核阻断（Lockout Guard）**

当领航员确实被晃晕了，怎么保命？

看这段代码：pm\_kalman\_lockout\_guard(pmc\_t \*pm, float dA)

```
if (m_fabsf(pm->kalman_lpf_wS) > pm->zone_threshold) {
```

作者做了一个底线判断。只要卡尔曼滤波器里的低通速度与物理极限背道而驰，直接承认观测器发散（Lockout），清空卡尔曼状态，强行翻转 DQ 轴重新抓轨！这叫壁虎断尾。

* * *

**本文小结**

各位同仁，当我们把代码拔高到观测器和 PID 共存的维度时，调参的哲学就发生了质变。

在无感伺服中：**永远、永远不能让你的闭环 PID 带宽，超过你的卡尔曼滤波器（观测器）的带宽！**

就像人类的身体结构一样：你的动态反应神经（PID）再快，它也必须依靠眼睛和视觉神经（Observer）的传导。如果你蒙上眼睛，还要求你的手对外界刺激做出百微秒级的刚性抵抗，最终的结果只能是肌肉痉挛。

**_Autotuning of PID Controllers_** 这类书里讲的性能评估方法，用在这个场景下，就是要去看**闭环后的实际输出残差。**一旦你发现你把 Kp 加大后，系统的误差没有减小，反而出现了某种低频的游荡震荡。别怀疑，你的观测器已经被 PID 扯烂了。

此时你的唯一出路，不是去修 PID 的 Kp ，Ki ，而是去改卡尔曼的 Q 矩阵和 R 矩阵，让观测器变得更敏锐。

经历了这场浮点与矩阵的极限烧脑之旅，我们本系列的技术文章已经趋近尾声。

现在，我们把所有的碎片——[定点的妥协](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485988&idx=1&sn=8fd58ed41db5cd26273cecbcf44a9d43&scene=21#wechat_redirect)、[滤波的护盾](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486014&idx=1&sn=c7fc1949f9199885fc5ad7e6d9d32abc&scene=21#wechat_redirect)、[抗饱和的强切](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485860&idx=1&sn=bbb2cbc2917e929de78d6a4580451956&scene=21#wechat_redirect)、[增益的调度](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486025&idx=1&sn=94b229c27018413a54ffaf4040902941&scene=21#wechat_redirect)、[继电器的自整定](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486072&idx=1&sn=0b243ff0691c87281a8514f9c4a98094&scene=21#wechat_redirect)以及观测器的共生，全部倒在桌面上。

下一篇文章，我们将迎来本系列文章的终章——如果你要自己动手，去重头开发一款能干翻全场的最强驱动器 C 代码文件，你应该怎么融合 代码A、代码B 和理论书的灵魂？

大家可以好好休息一下，我们终局之战见！

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug