# 《PMSM PID控制这件小事》| 06讲：微分的驯服（下） —— 实用滤波器的设计艺术

原创 傅存敬 电磁散人 2026-03-18 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/v4cW70lBDWbAUiFEs\_mZcA](https://mp.weixin.qq.com/s/v4cW70lBDWbAUiFEs_mZcA)

各位同仁大家好。[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485842&idx=1&sn=d3228ca913ee5f2daa0d68c8e3857797&scene=21#wechat_redirect)，我们把微分项（D项）扒了个底朝天。大家已经知道，由于编码器存在量化噪声，直接在数字芯片里做毫无保护的差分算法（也就是纯微分），无异于给电机注入了一剂毒药。工业派的 **代码B** 选择直接砍掉D项保平安，而学院派的 **代码A** 则是另辟蹊径，[用观测器加上物理公式反推出加速度，巧妙绕开了噪声误差。](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485842&idx=1&sn=d3228ca913ee5f2daa0d68c8e3857797&scene=21#wechat_redirect)

但是，现实工程往往很骨感。如果我们的项目成本受限，只能用普通的定点MCU，既跑不动复杂的卡尔曼或者物理观测器，同时客户又要求伺服系统具有极高的“刚性”（比如数控机床遇到切削阻力时，速度绝对不能掉太多，这就必须依赖D项提前发力）。这时候我们该怎么办？

今天，我们就来解开这道“既要、又要”的技术难题。

* * *

**理论基石：为什么书中说PID实际上是“四个参数”？**

让我们翻开文末共享的PID经典教材 **_Practical PID Control_** 的第2章（Derivative Filter Design）。作者Visioli在书里说了一句非常深刻的话：**在工业应用中，理想的PID根本不存在，纯粹的D项是不可能被单独使用的。**

真正的、能用的PID公式，不是 u(t) = P + I + Kd·s 这样。

而必须是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATiarfOqXmNX6wTHhzsBn7UDeaZzWTicm5wPKs6jZxLE6zFiat7SFW6LYMU1XyfVkml9jCAicvv5F54JbXMyDbQdNV5WYQmKKLBr2Q/640?wx_fmt=png&from=appmsg)

这两者到底差在哪？就差在分母那个 Tf·s + 1 上！这在控制理论里叫作**一阶低通滤波器（Low-pass Filter, LPF）。**

我给大家打个通俗的比方。如果你直接用纯微分（没有分母），就好比你开着一辆没有轮胎、没有避震器，只有四个光秃秃的铁轮子的车行驶在烂路上。地面上哪怕只有一颗小石子（编码器的哪怕1个脉冲的噪声抖动），由于车轮是纯刚性的，这股巨大的冲击力会瞬间传导给你的脊椎（对应给到电流环的巨大指令波动），把你颠得叫苦不迭。

而由于分母 Tf·s + 1 的加入，相当于给这辆车装上了**厚厚的橡胶轮胎和液压避震器**。路面缓慢的长坡（真实的负载变化趋势）它依然能感知到并作出反应，但是高频碎石（编码器的高频毛刺噪声）在穿过橡胶轮胎时，被低通滤波器彻底吸收、过滤掉了！

书里特别强调了一个 N 参数（由于 Tf = Td/N）。书中指出，N 的取值通常在 5 到 20 之间。这就是工程学上的妥协艺术：

-   如果 N 取得太大（比如100），意味着滤波作用太弱，轮胎太薄，抑制不住噪声；
    
-   如果 N 取得太小（比如1），意味着滤波作用太强，轮胎太软软到像块巨大的海绵，这时候会产生严重的**相位滞后（Phase Lag）**，等你感知到坑的时候，车早就掉进去了，D项也就彻底失去了“提前预测”的作用。
    

所以，想要用好D，你不仅要调 Kd，你还要调这个至关重要的滤波器参数 N（或者 Tf）。

* * *

**源码实证：看看顶级代码是如何落地的？**

这时候我们再去审视一下文末共享的 **代码A** (pm.c)。[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485842&idx=1&sn=d3228ca913ee5f2daa0d68c8e3857797&scene=21#wechat_redirect)我们说它用了物理模型算出了加速度，但大家以为它就不需要滤波了吗？

请大家仔细看 pm\_lu\_FSM(pmc\_t \*pm) 这个底层的状态机函数。在计算负载转矩观测器的时候，作者写了这样一行极其精彩的代码：

```
// 观测出当前的机械负载转矩差异 mQ_load
```

各位同仁，这行代码是什么？这正是 **_Practical PID Control_** 里那个低通滤波器 Tf·s + 1 在离散C代码里最原汁原味的体现！

这叫**一阶指数平滑滤波**公式：**新值 = 老值 + 滤波系数 \* (最新采样值 - 老值)**。也就是数学上的 y(k) = y(k-1) + α·\[x(k) - y(k-1)\] 。代码里的 pm->lu\_gain\_mq\_LP 就是那个滤波系数 α！

这说明了什么？这说明即便是用了高端观测器的全浮点代码A，作者依然对微分（加速度反馈）怀有深深的敬畏！他深知，就算是用电磁转矩算出来的加速度，依然不可避免地带有高频的开关噪声，**必须套上一层低通滤波器（LPF）的保暖内衣，才敢放心大胆地乘上 D 增益交付给下一级！**

* * *

**补齐代码B的遗憾：如何在定点DSP里加上这道防线？**

大家再回过头看我们文末共享的工业派的 **代码B** (MotorPmsmMain.c)。之前我们说由于它是定点数计算，对噪声极其敏感，所以原作者无奈抛弃了D项（gAsr.Asr.KD = 0;）。

如果今天，项目经理硬性要求你：“必须给这套老系统的速度环加上微调的D项，提升抗干扰刚性”，学完了本文，你应该怎么写代码？

千万别直接写出 Out = Kp \* Err + Kd \* (Err - Err\_last) 这种送命代码。按照我们的理论和**代码A**的思想，你应该在基于 Q格式（比如Q12或Q15）的定点代码中，加上一个离散低通滤波器。写出来大概是这样的：

```
// 第1步：算出纯粹的、充满噪声的原始微分值
```

以上这段简单的示例代码，在占用了极小算力的情况下，在定点DSP系统里建起了一道物理隔离墙。你既获得了D项在负载突变瞬间对抗扰动的提前制动力，又确保了稳态时编码器噪声不会让电流环失控发抖。

* * *

**Simulink演示**

这次的模型和以往的不太一样，是动态演示环节（仿真时间被设置成了无限时长inf）。

模型框架如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQcWQxsqCpnq0OyvOG1p4etS4NIhuBCvzOfjBpS5Mz2oZJTalMRBMtoo5UEjccec6MMZia6V3xwQqzJB5Gm7c2HrDiaEwbMlVujc/640?wx_fmt=png&from=appmsg)

左半部分是信号输入侧，用一个平滑的 Sine Wave 信号，叠加上一个 Quantizer（量化器，模拟编码器分辨率带来的阶梯状离散误差）信号，用来模拟一个宏观看着平滑，但微观上充满高频毛刺的“真实观测速度”。

中间部分，从上到下分别是纯理想PID、教材中提到的考虑了滤波时间常数Tf 的PID和代码A的PID算法。

右半部分为示波器。

我们首先来看一下滤波系数 α = 0.1（alpha = Ts/(Tf+Ts)）时的仿真波形：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASjJxVZmxWfvHWXVWficZZlvuL3ZITVKQvb7icfVBjhPicLOiaXXDMMf9WHDRE3BCPhytRagS67R0ZehsGqDvJWcAG1BoVP8vUHrlc/640?wx_fmt=png&from=appmsg)

解读一下波形：

1.  **第一栏（Input）**： 用来模拟的观测器输出的真实的速度，看似一个完美的正弦波，其实叠加了幅值为0.05的高频噪声。这可以真实的对应在实际工程中，**低分辨率编码器在低速稳定运转时，肉眼根本看不出速度的毛刺**。
    
2.  **第二栏**（**理想的纯PID输出**）： 灾难发生了，**波形上出现了一条厚达 ±50 的“剧毒锯齿带”**！相比于 150 的控制量，这 30% 以上的高频噪声如果直接打入电流环，电机会发出恐怖的尖啸声，转子甚至会直接震碎发热！这就印证了我们上文里说的“纯微分就是给电机打毒药”。
    
3.  **第三栏（通道B与C / 黄与蓝线几乎重叠）**： 这是整个实验的最美画面——**黄线（理论连续公式）与蓝线（定点C代码逻辑）几乎严丝合缝地重叠在了一起**！高频锯齿被液压避震器（LPF）完美吃掉，剩下的是一条极其平滑、干净的超前加速度预测曲线。
    

感兴趣的同仁，可以用鼠标拖动模型下方的滑块，当滑块被拖到最左方时，滤波系数α = 0.005，滤波能力最强，此时的仿真波形为：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQ4OToaQvBLHibM3DyFkD6mNMfS13fkHvUgVFkIxPwOeRJQaXt7CsUm27xnkgzL7jW1SdJoz0TcKEUlpf9asYFm6W5VDIkf6dyA/640?wx_fmt=png&from=appmsg)

当滑块被拖到最右方时，滤波系数α = 0.4，滤波能力最差，此时的仿真波形为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASkVqWxibLVx4HUTPeDtolDKwARE8IlCnybbdT6F2jr7EEibLgPXeRqZIAxOKYXiaKHN7NxSblAbKTnfibwXlEhTFEUepUicHbNSl7g/640?wx_fmt=png&from=appmsg)

我们可以真真切切地在这个模型的**第三个视窗里**看到：只要把滤波能力加强，波形就会变得无比圆滑；但随之代价就是，**整座波峰就像蜗牛一样向右平移了（慢半拍）！**

“**相位滞后（Phase Lag）**”和“**参数N的工程妥协**”在这个模型的视图里，形成了一个无与伦比的闭环验证！

* * *

**本文小结**

各位同仁，连续两篇文章，我们把神秘的D项彻底解剖了。PID不只是三个参数，在所有的商业工业控制器中，由于微分滤波器的必不可少，PID控制实际上至少是**四个参数**（甚至是 **_Practical PID Control_** 后面讲到的五个参数）。下次再听到有人说“电机控制里不用调D”，你就可以自信地在心里笑笑了：不是不能用，而是他少调了一个滤波时间常数。

到这里，我们已经解决了一大半速度/位置环的烦恼。但电机控制的灵魂还是在内环——电流环。电流环最大的噩梦是什么？当电机跑到极限速度，电压给不上力，控制输出死死卡在最大限制的时候，如果积分器还在盲目累加，系统会发生什么灾难？

从下篇文章开始，我们要进入另一个无比重要、同样横跨理论与两份代码的章节，深入讨论**积分饱和 (Windup)的物理本质与危害**。看看电机控制领域的另一大保命绝技是如何实现的。

大家可以一边喝茶，一边再体味一下滤波器代码的精妙，我们明天再见！

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接：https://pan.baidu.com/s/1AoEJcWmxJkvoZZfTkyktPw?pwd=ivvu 提取码: ivvu