# 《PMSM PID控制这件小事》| 10讲：内模控制 (IMC) 原理 —— 控制器设计的上帝视角

原创 傅存敬 电磁散人 2026-03-24 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/pdpAmBpp1RZulnp6wog2hg](https://mp.weixin.qq.com/s/pdpAmBpp1RZulnp6wog2hg)

各位同仁，大家好。

从本篇文章开始开始，我们正式踏入本系列的第二篇章：电流环与内模控制篇。

前面几篇文章，咱们一直在跟 PID 的底层架构（防噪、抗饱和）死磕，把 PID 的骨架搭得很结实。现在，硬件不仅不炸机了，而且跑得很稳。那么接下来，现场调试工程师最头疼的问题来了：“**这 PID 的 Kp 和 Ki 参数，我到底该填多少？**”

如果你去问调过程控制（比如温控、液位）的老师傅，他会告诉你：“凭手感。先调 P 到震荡，再降一半，然后慢慢加 I……”这就是大名鼎鼎的 Ziegler-Nichols（Z-N）试凑法。

但是，如果你在伺服电机的**电流环**里用试凑法，那简直是摸着高压电线过河。电流环的响应极其迅速（带宽通常在百赫兹到千赫兹级别），稍微试错一点，Kp 给大了一丁点，电机“嗡”的一声惨叫，逆变器直接报过流，甚至烧毁 IGBT 或 MOSFET。

所以，在现代高性能电机控制中，电流环的 PID 参数绝对不是“试”出来的，而是“算”出来的。今天，我们就翻开文末共享的PID经典教材 **_Practical PID Control_** 的第7章，看看其中最伟大的理论之一：**内模控制（Internal Model Control, IMC）**。它将赋予我们一种“上帝视角”。

* * *

**从“猜盲盒”到“上帝视角”**

在这个理论出现之前，我们设计 PID 就像是蒙着眼睛开车。你不知道前面的路况（被控对象），只能根据车子现在的偏离程度（误差）盲目地打方向盘（调节 Kp, Ki）。

内模控制（IMC）的哲学截然不同。它说：**既然我要控制这辆车，我为什么不把这辆车的“物理数学模型”直接装进控制器的大脑里呢？**

假设被控对象（比如电机）的传递函数是 Gp(s)（Plant）。控制器是 Gc(s)（Controller）。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAR6fiaFGsKNLLMmc39glpAA6HbP5QFzdt534HhP3B4yATxXJvRR4Ob5kIJdwCA1JlicickupGsdHiaJVe8s32hmyibzS0ST787DdUgk/640?wx_fmt=png&from=appmsg)

IMC 理论不再去瞎调 Gc(s) 里的参数，而是站在上帝上帝视角，直接对整个闭环系统下达命令：**我不管你原来是什么样，我希望你最终的表现，像一个完美、顺滑的一阶低通滤波器！**

在数学上，这个期望的完美闭环数学模型 F(s) 被定义为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAT98ArzyGTdYv8t1jALMXlmSxoAMWhFccc39hiaiagezJmZvGB0OClSXaBeP9GJYN88NwhIUVqLG8ribZPJdRWeHd68XU7JrgDE2o/640?wx_fmt=png&from=appmsg)

这里的 λ 是这个完美滤波器的“时间常数”。它是一个极度神奇的参数：**控制闭环系统的反应有多快，完全取决于 λ**。（ λ 越小，响应越快，也就是**系统带宽**越高）。

* * *

**见证奇迹：破译控制器的基因**

既然我们确立了期望的闭环目标 F(s)，那我们该如何反推控制器 Gc(s) 呢？

**_Practical PID Control_** 第7.5.1节给出了极其优雅的推导：我们知道，经典的闭环传递函数是：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARoxvjiaKTvrQuDHC2gcHCgFSAjL39ibtW0h5ATFY9wdPjjL3ogCbdLFTCicib3IOuL3DcwuUDTjcLia4sQIzKvicrOkU0LekbTBicsfw/640?wx_fmt=png&from=appmsg)

现在，上帝视角来了，我们强行让这个闭环等于我们期望的完美系统 F(s)：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATkteicsowCTCeuv1gia3E0uBfhRe6FtSUCnviaWibBTeAzdkmhyP1VLIp3NW7rTsKQFSSE9Yql7PicEEVdUwGmrBZgyriaK9RZeQG4A/640?wx_fmt=png&from=appmsg)

各位同仁，稍微动用一下高中的代数知识，把 Gc 提取出来，会得到什么？

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATvNq8uB1J9CqOG8FpQqxW7sfibSqzhSicx5J7leubZl38Jk2nlyia5cZSxMPZdia2zupfMTHzHYtiaSSRYbic67ic2BicjxRksOTLS348/640?wx_fmt=png&from=appmsg)

把 F(s) = 1/(λs + 1) 代入进去化简，最终的终极形态是：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATdeAthicsUY2n7xMPzkeL0yJLcPs41ibWeAuXPc5qxpyzZOMEakAlxAszCEsdLLV0cclceEejh0cxkSxhG57icTibVuYibXDOzLribA/640?wx_fmt=png&from=appmsg)

**这就是 IMC 设计的灵魂公式！**

请大家仔细品味这个公式，它在说：一个完美的控制器 Gc(s)，其实就是**被控对象的数学模型的倒数（也就是逆模型 Gp\-1），乘上一个积分环节 1/λs** 。

这代表着绝妙的物理意义：

前大半部分 Gp\-1(s)，就像是一剂“解药”，专门用来把被控对象本身那堆乱七八糟的惯性、滞后、阻力全部**抵消掉（数学上叫零极点对消，Pole-Zero Cancellation）**。抵消完之后，整个系统就变成了一张白纸，这时候你再用后半部分 1/λs 去精准拿捏它的响应带宽（速度）。

* * *

**剧透：这和电机的 PID 有什么关系？**

讲到这里，有同仁可能会问：“这全是拉普拉斯变换，跟我的 C 语言代码里电流环的 Kp、Ki 有什么关系？”

各位，大有关系，而且这也是我们下一篇文章最核心的干货定调！

大家回忆一下，直流电机或者永磁同步电机（PMSM）定子的电气方程是什么？就是一个电阻 R 串联一个电感 L。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQCtfr7LJZEHT9MqXJv9P2HUN3xyaRm13pthgOuBVLG9Q6ptzW9DTQwL39dyt0Y3Pty8TVic4VF3FBmorl5hlsKwWOdpGAgbicM0/640?wx_fmt=png&from=appmsg)

它的传递函数 Gp(s) 是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATDaGeCB9aFyBPLeKYMSJNNSjHsFSoibKEcvXuN22E0rOE9EozXI7ADhYJVKDJ8OKW8wGawcUOiaN3fzJHTiaBrqMbfPQzb0Lk7G4/640?wx_fmt=png&from=appmsg)

这就意味着，电机的逆模型 Gp\-1(s) 是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQP5xj47hrlWahehBiczoDvSxmPFKKVepqibTfhT53OAIiarK4oSLZeyNXYFQpMXOw2lTAcufRtq0BkaEmibyibdlxglODCNGBYy4Us/640?wx_fmt=png&from=appmsg)

好，现在我们把这个电机的解药，代入刚才的上帝视角 IMC 公式里：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQy6sG35UGiadL9U8zGibDOhhmBiaibB8yNTGjoXLvQ3aJ7AgxGBpjZzlSiciaPeROHphEUzYXp0VpgAa8F6EjevV8Sdnf8mJSd184Jc/640?wx_fmt=png&from=appmsg)

把括号拆开，神奇的事情发生了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASDSVSgiadPrjAZfIx4wLprTiaeyWHddib4gG6NlnUDicepEmicIOBydsU05VkWmAuxdpug4bSFWI09qS0FZibzJJIUSlhzoibDJcQkpY/640?wx_fmt=png&from=appmsg)

各位同仁！！！看清楚上面这个式子。

标准 PI 控制器的传递函数是什么？是 Kp + Ki/s ！一对照，你瞬间就全明白了：

**原来在电机电流环里，要想达到最完美的控制：**

**比例增益 Kp = L/λ**

**积分增益 Ki = R/λ**

* * *

**Simulink演示**

IMC 理论中最爽的一点——“**零极点对消”**和**“闭环响应完美等效于一阶低通滤波器”**，如果只停留在文章的公式上，各位同仁可能会缺乏直观感受；但如果在 Simulink 的 Scope（示波器）里能看到等效后的曲线完美重合的那一瞬间，相信会带来更加深刻的体会！

为了凸显 IMC 的“降维打击”，新建的模型并不是只有一个回路，而采用了**并联对比**的结构：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATCqdVG2W1UBeG5XkFKywkaoiaicc8pibrkTs1iad04Ff2326bJrBsJtjNLH9yaUw7Yic4T7prr9eASTxp7UoyDI6v1gBWLkEUu5PicM/640?wx_fmt=png&from=appmsg)

-   **对照组 A（传统试凑法 PI 控制）**：PI Controller的Kp和Ki参数可以随便填写。
    
-   **对照组 B（IMC 内模控制法）**：PI Controller的Kp和Ki参数是基于电机的电阻R、电感L和目标带宽 Bandwidth 的具体数值计算出来的。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQMf8TJiau7BkV98WwuxOUGKjMm6X7npGibbiaCR6PYIJqIN3gN4ibpUwgUnXiaCeJhwEtbr9KBxq2AfWcI4dHbjzCRcCqiaCIS7FNyY/640?wx_fmt=png&from=appmsg)

直接运行仿真模型，看一下Scope中的仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATsthuJ4jibNvOgmyDLOubpJibtWuBQvbhttPo48LHXqXcmq2VgXqnZCWcQESicKrW0U0KjY6RoNF0a315UfJuLibJptJQfzYicpu7c/640?wx_fmt=png&from=appmsg)

从Scope中的结果可以清晰看见：

1.  **红色线条（对照组A：试凑法的灾难）**
    

肉眼可见的**现象**是，代表试凑法出来的曲线，不仅响应慢了一些，而且在 0.057s 左右出现了接近 12A 的尖峰超调（对于 10A 的指令，超调量接近 20%），而且之后还有微小的震荡才收敛。

这就是前文中说的在电机控制中盲调PI参数就像“摸着高压电线过河”。在微秒级的电流环中，如果凭感觉瞎调 Kp 和 Ki，打破了 Kp/Ki = L/R 的物理枷锁，必然会导致二阶欠阻尼震荡。如果这是一台低电感伺服电机，这 20% 的瞬间过流刺突，就极有可能触发驱动器报警，甚至击穿 IGBT 或 MOSFET。

2.  **蓝色线条 与 绿色线条（对照组B：见证奇迹的时刻）**
    

可能有同仁会问，图例里明明有 4 条线，**为什么画面里却找不着蓝色的线（2\_上帝完美目标 F(s)）**？这不是 bug，因为**绿色的线（4\_IMC动态计算响应）与蓝色的线（上帝模型）完完全全、严丝合缝地重叠在了一起！**

这就是前文里提到的“解药”与“零极点对消”的威力。因为我们在模型中让 Kp = L/λ，Ki = R/λ，控制器的零点精准抵消了电机物理模型的极点，整个复变函数化简后，闭环传递函数在数学上**绝对等于**1/(λs + 1)。

* * *

**本文小结**

各位同仁，本文分享的技术内核，其实是内模控制（IMC）给电机控制带来的工业革命。

它把一门要在现场提心吊胆去“试凑”的手艺活，变成了一道确定性的算术题。

对于现场工程师而言，你不再需要对着两个相互耦合的变量（Kp 和 Ki）抓瞎。因为在这个模型下：Kp/Ki = L/R = 电气时间常数，也就是说，**Kp 和 Ki 的比例是被电机的物理属性彻底锁死的！**

各位同仁以后无论是在 Simulink 里做仿真，或者去现场调参数，你只需要暴露**一个参数**给客户即可，那就是：你想让控制响应有多快？（你想开多少带宽？也就是确定公式里的 1/λ ）。参数确定后，驱动器自己就把 Kp 和 Ki 给算出来了。

那么，纸上得来终觉浅，这套完美的理论公式在工业界真正落地的代码中，到底是不是这么写的？浮点运算的 代码A 和定点运算的 代码B 又是如何在芯片里去兑现这个 Kp = L·Bandwidth，Ki = R·Bandwidth 的？

下一篇文章，我们将直接深入 **代码A** 和 **代码B** 的底层的电流环 PI 计算函数，逐行带大家看看：现实世界里的**电感与电阻映射**，到底是怎样的惊心动魄！咱们明天不见不散。

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接：https://pan.baidu.com/s/1dar5ohGj\_CgKV1EvCtQM9Q?pwd=p9kz 提取码: p9kz