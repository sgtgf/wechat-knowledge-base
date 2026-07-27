# 《PMSM PID控制这件小事》| 19讲：继电器反馈实战 —— 工程中的自整定序列构建

原创 傅存敬 电磁散人 2026-04-06 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/t6hJQauFlHE1TyWg51xCYQ](https://mp.weixin.qq.com/s/t6hJQauFlHE1TyWg51xCYQ)

各位同仁好。

[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486054&idx=1&sn=7844cf088fe97d379a87117c9d07cfd1&scene=21#wechat_redirect)，我们刚刚领略了继电器反馈（Relay Feedback）在数学殿堂里的绝美身姿：只要给系统输入一个方波力矩让它持续振荡，提取出振幅 A 和周期 Pu，临界增益 Ku 和临界频率 ωu 就全算出来了。这就是伺服驱动器“一键自整定”的核心秘密。

理论听起来很过瘾，似乎只要几行代码：if (y > 0) output = -h; else output = h; 就能搞定。

但是！各位在一线摸爬滚打的同仁们，如果今天下午项目经理让你把这段代码加进咱们看过的 **代码B** 里，准备接在一个极其昂贵、精密的高速机床上测试。你敢直接执行这句代码吗？

如果你真的这么写了，由于电机响应存在电气和机械滞后，加上纯粹的理想继电器（Ideal On-Off Relay）输出的是**极其陡峭、毫无缓冲**的方波转矩。这就意味着：10A 的电流指令瞬间变成 -10A； -10A 瞬间又变成 10A！

伴随着极其清脆的、“哐当哐当”的金属撞击声，你可能会亲眼看到机床的传动丝杠被硬生生震断，或者齿轮箱的齿隙被打出严重的磨损坑。

在控制理论里，这叫“完美的极限环辨识”；但在机械工程师眼里，这叫“**蓄意破坏精密设备**”。

所以，**_Autotuning of PID Controllers_** 原著在提出该理论后，紧紧跟上了极其克制且严谨的工程补充——第5章的 **改进型饱和继电器（Saturation Relay）** 和**带有死区的迟滞继电器（Hysteresis Relay）**反馈控制。

今天，我们就结合书籍理论，在 **代码B** 稳如老狗的状态机框架里，画出一套安全的、无损的、且能抗拒现场编码器噪声的**工业级自整定 C 代码序列！**

* * *

**第一步：把狂暴的方波变成“饱和斜坡”**

为了不敲碎客户的齿轮，**_Autotuning of PID Controllers_** 第 5 章提出了重磅改进：**Saturation Relay Feedback（饱和继电器反馈）。**

什么叫饱和继电器？

理想继电器的动作是：只要误差 e > 0，输出立马翻转到最大值 h。而**饱和继电器**在零点附近加了一个**线性过渡区（斜率 k）**！

想象一下这个物理过程：

1.  一开始误差极小，输出电压（或转矩电流）不是瞬间跳到最大，而是**成比例地（斜率 k）慢慢增加**。
    
2.  只有当误差大到一定程度超越了线性区边界，输出才“温柔地”贴在最大值 h 上（Saturation）。
    

在数学上，它的输出波形是被“削顶的正弦波”（梯形波），而不是生硬的方波。**它能产生极其接近纯正弦的反馈！** 谐波污染极小，对机械系统的冲击也大大缓冲了。

书中甚至给出了决定生死存亡的工程经验值：**过渡区斜率 k 应该怎么选？建议选**k = 1.4 × Ku（可以通过第一次极其微弱的理想继电器试探、粗估一个 ）。如果 k 太小，激不起震荡；k 太大，又退化成了打齿轮的方波。

* * *

**第二步：在 代码B 的状态机里“塞”入自整定流程**

好，防撞机制有了。我们现在要在 代码B 这套极具工业特色的定点代码里，增加一个“**自整定状态（State\_Autotune）”**。

在 代码B 的 RunCaseIpmInitPos()（初始位置角检测阶段）或者 gMainStatus.RunStep 的初始化流程里，我们要插播一段“瞒天过海”的戏码。

整段 C 代码序列的伪逻辑应该这么写：

1.  **切断外环，接管底层**
    

```
// 伪代码：自整定初始化
```

2.  **发起温柔的攻击（注入激扰）**
    

在 10kHz 或 20kHz 的电流环底层的定时中断里，我们要根据旋变或编码器的位置/速度误差，执行饱和继电器的逻辑：

```
// 伪代码：在控制中断中执行饱和继电器
```

3.  **应对噪声的陷阱：死区与迟滞检测**
    

电机真的按要求在原地以 0RPM 为中心“嗡嗡嗡”地微荡起来了。

这个时候我们需要测量震荡的**幅度 A** 和 **周期 Pu**。

**注意！工程上的致命陷阱来了！**

如果我们直接写 if(SpeedApply == 0) 记录时间，只要现场编码器有一点高频底噪（测量毛刺），代码就会在零点附近疯狂触发过零点事件！你测量出来的周期会小得离谱，算出来的 Ku，ωu 会让你的机器当场炸毁。

**_Autotuning of PID Controllers_** 早就警告过这一点。对付测量噪声，必须在代码里引入迟滞（Hysteresis）检测极值法：

```
// 伪代码：极其健壮的极值与周期提取
```

4.  **提取灵肉，计算参数**
    

只要代码稳稳地抓取住了足够多（比如 5 次稳定的反转周期）的数据，我们求平均，得出靠谱的 A 和 Pu。

马上，在板子上运行那套伟大的公式（用描述函数计算）：

-   临界频率：ωu = 2π/Pu
    
-   临界增益（用饱和继电器的修正版描述函数）：计算出 Ku。
    

有了这两个值，如果我们结合电机电磁力矩常数 KT，利用我们在[第二章讲过的 IMC 极点配置法](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485924&idx=1&sn=c8af7b449df1f84de797adab76d65900&scene=21#wechat_redirect)：

**我们直接就能倒推出电机的 转动惯量 J 和 黏滞摩擦系数 B！**

最后一步，把算出来的 J 和 B 喂给[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486025&idx=1&sn=94b229c27018413a54ffaf4040902941&scene=21#wechat_redirect)讲过的那个增益调度（Gain Scheduling）表 PrepareAsrPar()：

```
// 根据算出来的惯量J，重写驱动器的出厂参数表
```

* * *

**Simulink演示**

我们还是要在Simulink中实际感受一下，才能体会深刻。在Simulink的画布中，构建如下的仿真模型：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQ5DdHVEicVkDVwIICYvm0wotzEqLfTpiaI2rjOB3t3BgbeDfwZnUjD7u0IZLiao8rvncZOdgibzc2fQbRiazvLRlw0AlNUIP9jbHSU/640?wx_fmt=png&from=appmsg)

其中，橙色模块是电机及机械系统模块，模块中的乘法、求和、积分模块组合，极度还原了牛顿第二定律（或者说电机转子动力学公式）ω = ∫\[(Kt·Iq - B·ω)/J\]dt 。没有任何掩饰，这正是理论根基。特别的，用了一个叫 Dead\_Time\_Lag 的模块，来模拟极其微小、但在真实机床和伺服驱动器中绝对存在的 **2ms 电气与机械指令传输滞后**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASzGfkKPUnLhycjUzjyeMaWic5eAViaGXhAHnvnudKiaOqHBvwiaLdGyAuOLZbaV2xM2RlazribjH5KYw7EvJEwbKyXmXvibnIpTysw8/640?wx_fmt=png&from=appmsg)

画布中的黄色模块，是主导全场的 **MCU 控制器大闸**，也是本讲的**算法中枢**！而画布中青蓝色的模块，提供了如何基于MCU那边通过冻结法抓到的极致精准的 A 和 Pu，根据描述函数推导的公式 Jcalc = Ku·Kt/ωu，解密出转动惯量的公式算法！

我们看下最终的仿真结果，首先看速度：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARq4zOt2s1BxD82ezQkh4uUfVhaGWl11YdUgfhKKCup5zFVT5Fvk98xWvqUcQWW62JK1ZHYydtZIqOCu9ibkytaiaNXfcrgR4uMA/640?wx_fmt=png&from=appmsg)

转速以 0 RPM 为中心，极其匀称、绵密、稳定地形成了幅度大约 ±12 RPM 左后的连续振荡波！这就是极其标准、被继电器反馈强行“养住”的非线性极限环震荡！由于有 HYST\_BAND（迟滞死区）兜底，它完全无视了底噪，极其坚固地存活了下来。

也许有同仁会好奇，0.5s 的时候为什么有一个飙到 230 RPM 的巨大尖刺？这是失控了吗？不，并没有失控，恰恰相反，这是顶级大厂代码里的工程智慧！因为在 Autoturning Core（firmware）（黄色模块）中加入了 Kick-start（启动激励）算法，代码里我们写了：前 50 ms（0.5s ~ 0.55s），强行输出 +h\_Relay（即 +2A）的推力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQOC9Qhc6DwGzU40mHuYib5Xm9Yj2r7IqZMYmxSLVgibtibwZj3dzibDOm192z8qxnDtoqO9MPBCeq4FqS4LcrjDLwlHq2icYBiaYib8c/640?wx_fmt=png&from=appmsg)

**为什么要这么写？** 因为真实的机床静摩擦力极大，如果只是温柔地等误差累积，电机可能根本动不起来，波形当场憋死卡在 0 位。就是这 50ms 的强推，把转速“踹”到了 200 多转，给系统注入了巨大的初始动能。当 0.55s 推力撤销、闭环继电器刚一接手，巨大的反向力矩瞬间将速度拉回来。通过这股势能，系统瞬间就跌入了稳定的极限环振荡中，**连过渡时间都省了！**

我们看下电流的仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARjqTyDdRmG5UTticlNUtZVLK2IOibDZr7eM6Qia6To6X82qI3y9BbPDc5jHicFt9bqXNGGtKJibbOltdLibHU6klCsrZw1GpKSQNImM/640?wx_fmt=png&from=appmsg)

极其规整！在 +2A 和 -2A 之间干脆利落地翻转，没有任何高频电锯毛刺（Chattering），这是极其健康的继电器 Limit Cycle（极限环）切换。

我们最后看下转动惯量 J 的辨识精度：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASCmEuqa2769xSd3gY7OBTFdg1qaogWgoK6ia3OzTFXKsxNrr3ZpF9Dyibm0F8x9TdFAG40QFx9GDeXiaJzAaL1PocIdyH7Ikxbsg/640?wx_fmt=png&from=appmsg)

看那块绿色的仪表盘：J\_calc = 0.004929 。模型在底层深处埋下的真实转动惯量是 J\_True = 0.005！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQTwTRAbeulEQ9YvFd8qDsdfRibDlg7ibRgCH3VkDj9LVO9Q97vBQX2nFwHNFVYJVNNyyuqialP8W1YRgq8ib6bJHfD7klzFYqD1QI/640?wx_fmt=png&from=appmsg)

两者之间的误差仅为 1.42%！

在一个带有高频测量白噪声、带有数字 FIR 相位延迟、带有纯物理传输死区时间的非线性继电器闭环系统里，依靠我们手写的、极其克制的几行 C 语言级代码，倒推出来的机器惯量能达到 1.42% 的精度，在伺服自整定工业现场，可以称得上是**“神级精准度”**。

为什么不是绝对的 0.005？答案是，《现代控制理论》中的“描述函数法”有一个绝对前提——假设系统像一个完美的低通滤波器，滤除了方波产生的所有高次谐波，只保留基波（第一谐波）。但在我们极其真实的模型中，高次谐波并没有被完全杀绝（模型中的速度波形是三角波而不是纯正弦波），这不可避免地带来了这 1.4% 的理论截断误差。存在这 1.4% 的误差，才是真实世界的物理学！

以上，就是“**把科学家的方法，变成工程师的代码**”的完整旅程。

* * *

**本文小结**

各位同仁，这就是一份真正的、敢放到客户机床上去跑的**工业级自整定代码架构。**

在书本上，只写着冷冰冰的 Ku = 4h/πA；

但在工程师的手里，它变成了一套**饱和缓冲 + 迟滞抗噪过零检测 + 多次平均滤波 + 自动替换增益表**的庞大防御序列。

这就是科学家的方法，转化成了工程师的代码。

经过这一场完美的 Relay Feedback 试探，你的驱动器已经彻底了解了机械负载的“脾气”。它计算出的 PID 参数绝对是最完美的，不再有高速震荡，不再有低速发抖。

可是……如果我们在这场继电器震荡的试探中，发现波形有些诡异呢？

如果这波波形**“根本不是优美的正弦波，也不像规整的三角波，而是变得左边大右边小，甚至顶部被平平地切掉了一块”**呢？

在 **_Autotuning of PID Controllers_** 原著中，作者 Cheng-Ching Yu 极具前瞻性地指出：**波形会说话！**

下一篇文章，我们将揭开这部书里隐藏最深的一个彩蛋：当你的客户抱怨电机控制不准时，**你的驱动器不光能自己调参数，它还能凭着一张继电器震荡波形，自动“诊断”出机械传动链是不是皮带松了、齿轮是不是有间隙了、阀门是不是卡死了！**

这绝对是高端预防性维护（Predictive Maintenance）的杀手锏。大家可以准备好笔记本，咱们下一篇文章见！

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接：https://pan.baidu.com/s/1torStlnibetzSA1Flx4lQg?pwd=raeq 提取码: raeq