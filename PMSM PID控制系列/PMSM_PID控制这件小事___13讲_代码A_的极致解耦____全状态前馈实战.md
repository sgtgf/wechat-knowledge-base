# 《PMSM PID控制这件小事》| 13讲：代码A 的极致解耦 —— 全状态前馈实战

原创 傅存敬 电磁散人 2026-03-27 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/pV03Tcyypl02Ut4zApNs0A](https://mp.weixin.qq.com/s/pV03Tcyypl02Ut4zApNs0A)

各位同仁，大家好。

[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485936&idx=1&sn=44e00ca8b5c71d79a7318945bcfe5d8b&scene=21#wechat_redirect)，我们把电机高速运行时电流失控的“罪魁祸首”逮住了——那就是潜伏在 DQ 轴电压方程里的两颗“手榴弹”（交叉耦合项 \-ωeLqiq 和 +ωeLdid），以及一个“巨无霸”（反电动势 ωeλm）。并且我们得出了理论上的制胜法宝：**前馈解耦（前置补偿抵消）**。

今天，我们就来一场“源码赏析”，看看拥有奢侈算力的浮点派代码 **代码A** 是如何在现实中把这段惊心动魄的物理魔法变为 C 代码的！

大家打起精神，现在请把文末提供的 **代码A** 翻开，我们直捣黄龙，找到它最高频执行的核心心跳函数：pm\_loop\_current(pmc\_t \*pm)。

* * *

**代码A 原味赏析**

在这个函数里，作者首先老老实实地执行了电流环的基础 PID 运算：

```
// 基础的 PI 调节器部分
```

走到这里，基础盘稳住了。此时此刻的 uD 和 uQ，仅仅是根据过去和现在的误差算瞎纠正出的基础电压。这就好比你在开车时按常理踩下去的油门深度。

但 代码A 的作者知道，如果电机现在正以 5000rpm 的转速狂奔，马上就会有交叉干扰砸过来。所以紧接着，**他举起了三面“前馈护盾”！** 精彩的部分来了，请逐行鉴赏：

**护盾一：基础电阻压降补偿**

```
// Feed forward compensation (R).
```

看点何在？ 其实这个 R·i 项对于静态解耦倒不是最关键的，真正有意思的是这小小的护盾，它展示了基于模型的精细前馈。既然我有电阻损耗，我都懒得让积分器去慢慢爬坡填补它，我直接把需要的电压“送”过去！

**护盾二与三：交叉解耦与反电动势的“完美绞杀”**

接下来这两行，堪称教科书级的 FOC 全状态解耦，大家屏住呼吸往下看：

```
// Feed forward compensation (L).
```

各位同仁！为什么说这是教科书级的解耦？看着这两行浮点乘加指令，是不是很熟悉？这不就是[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485936&idx=1&sn=44e00ca8b5c71d79a7318945bcfe5d8b&scene=21#wechat_redirect)咱们推导出的公式原封不动地照进现实了吗？！

我们一一对号入座，看看它是怎么“硬生生地加回去”的：

-   **对于 D 轴**：通过 pm->lu\_wS \* pm->const\_im\_Lq \* pm->i\_track\_Q 来实现 \-ωeLqiq，这就是完全消灭 Q轴电流强加给 D 轴的交叉干扰的手榴弹！
    
-   **对于 Q 轴**：通过 pm->lu\_wS \* pm->const\_im\_Ld \* pm->i\_track\_D 来实现 +ωeLdid，进而消灭了 D 轴电流反噬给 Q轴 的手榴弹！同时，通过 pm->lu\_wS \*pm->const\_lambda 来实现 ωeλm，直接扛下了永磁体旋转制造的那颗巨大的反电动势（BEMF）核弹！
    

至此，在把电压送给 SVPWM 发波之前，D轴 和 Q轴 无论内部受到多大的物理绞杀，都已经被代码在逻辑上彻底切断了。两根轴在这一刻，变成了纯粹独立的两个一阶系统，上一篇文章精心整定的 Kp 和 Ki，从此在高速下可以安心发威了。

* * *

**魔鬼在细节中：一个极其隐蔽的高级安全防线**

如果本篇文章仅仅是把公式和代码对上号，那咱们这深度就太浅了！我想请各位资深的工程同仁再凑近一点，看一个极其隐蔽、细思极恐的细节。

请大家看这三行代码里用到的电流变量是什么？

代码作者**没有用**采样回来的真实反馈电流 pm->lu\_iD 和 pm->lu\_iQ！他乘上的，是 pm->i\_track\_D 和 pm->i\_track\_Q（**也就是设定的目标电流、被追踪的给定指令）！**

为什么？这有什么玄机？前馈补偿乘真实反馈电流，在物理上明明更符合“当前的扰动多大抵消多少”的直觉啊？！

这就要引出控制理论中极其重要的概念了（大家如果翻翻一些顶级的核心期刊会经常看到）：**基于参考量前馈 vs 基于反馈量前馈。**

各位同仁，你想：真实采样回来的电流 lu\_iQ 是什么样子的？是带有极高频抖动、尖峰毛刺、甚至ADC量化误差的！

如果用带有严重高频噪声的 lu\_iQ 乘上 ωeLq，再作为前馈重新加回给电压环控制，那就等于把噪声信号重新灌进了系统！在高频下，这种**带噪声的正反馈极易引起系统寄生振荡（甚至产生代数环失稳）。**

而 代码A 的作者极其老练地选择了 i\_track\_Q**（滤波受控后的电流给定值）！**指令值是纯净无瑕、绝无毛刺的！

他在系统架构上坚定地表达了这样一个工程哲学：

**“我相信我的电流环 PID 足够强悍，闭环状态下实际电流很快就会追上我的设定电流。所以，为了系统的绝对稳定和抗噪！我宁可用干净的‘预测值/指令值’去做前馈抵消基础大面，剩下那一点点由延迟带来的微小动态差异，全部交给强大的 PID 积分器去兜底抹平！”**

这，才是学院派真正落地到写出能经受得住恶劣环境考验的代码展现出的工业级智慧！

* * *

**Simulink演示**

空口无凭，还是要在Simulink中动态演示一番，才能更加形象。我们首先构建如下的仿真画布：代码A中的PI控制逻辑在绿框的 CodeA\_Controller中实现，被控对象PMSM在橙色框的PMSM\_Plant\_With\_Noise中实现。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARZXqHWICDibSJMYh3JH2vJQcwNAPEZvbYz8U7Dm4yHExDlcFkyJlx42HxzPUXlGdgibj7Dp0dIxajyzuibaV7jciauia24Cu5d0vVI/640?wx_fmt=png&from=appmsg)

在PMSM的模型中，故意挂上红色框的 Band-Limited White Noise（带限白噪声）模块！这不仅是为了模拟真实的 ADC 量化误差，也是为了后面演示“高频噪声正反馈灾难”。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATgXG4F3SEj4xP8JyTbaskriaw5J5vZe5nuC1RP8Qib1oYfJWicia6JEvzvVicXlqH0jhM8FjZaCibPERANcbNt1xIFuHyibxZFU00u9c/640?wx_fmt=png&from=appmsg)

在CodeA\_Controller中，使用粉框勾勒除了代码A中的解耦算法，同时，加入了红框的switch，用于切换加入了前馈解耦和未加入前馈解耦的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQh6IbDNU4jGicufm5OXOlWCuBEKulf5DUcNcxtqKjj6Ye6BIKGXUa3Q9QB90RfniaqgFFGj89S8wK1L54icXOOa7SSQrFu1vBU1U/640?wx_fmt=png&from=appmsg)

我们来看下不同情况下的仿真结果：

首先，我们让 FF\_Enable = 0 ，也就是说，关闭前馈护盾！让纯被动 PID 裸奔：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASGjc1Lp1I13OQreayU1mF8AlHpZRmeibnqyNgj5GdaticGbKslo4vBwt2CRUmWZRrhGry2Tiaalr1ZI3Uq73LzVJtXU6ErC7SNPQ/640?wx_fmt=png&from=appmsg)

此时的仿真结果为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASovriasMkGia1CkUrXwbXIib9uncKRlQEcuhua8VFk0V9tZbiawmkR4YpPdjQlKVicG2rfGKBzls4G7QLgcsSibnL3cYQDAVCObliao0/640?wx_fmt=png&from=appmsg)

各位同仁请看！在 0.5s 时我们需要提速，Q 轴电流发生剧烈跃变。此时电机高达5000rpm（ωe极大），交叉耦合的"手榴弹"爆炸了！大家看下面的 D 轴电流（橙色线），原本应该是0，结果瞬间被撕扯出了巨大的突起，挣扎了很久才被积分器缓慢拉回0！

我们再设置 FF\_Enable = 1 ，也就是开启 CodeA\_Controller 中基于 代码A 的 C 代码复刻出来的紫色魔法护盾。同时也设置FF\_Source = 0 ，意味着前馈解耦信号采用的是**反馈值**，也就是 D 轴和 Q 轴电流的真实测量值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQ3OeSMWMicBs04mibKSsbgJHHRE0GuKQQrULKR8icaFlv5QF8tWPpXtBSBCjXABYHSZ0lNGjI0Xj0bcajlxvhuUzuwtZNe7ydia5w/640?wx_fmt=png&from=appmsg)

我们看下此时的仿真结果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASx1Hb9d2SrHA3U640YY5tSnHMicibHnSVNk63q4VWugZAlubPeEDOY5ibAPzibOibnVol3NntsB85NRZj3VRI4rroL15pT0qfw7Sq0/640?wx_fmt=png&from=appmsg)

和不使用前馈解耦相比，采用了前馈解耦时，D 轴和 Q 轴彼此之间不会再“互扔手榴弹”了，但是 D 轴和 Q 轴的反馈电流，或者说实际电流，是很毛躁的。有经验的同仁也可以一看看出，虽然是仿真波形，但是在真实的嵌入式系统中的电流真实测量值就是这样充满着高频噪声。

我们看下此时的前馈品质因数，同样是毛毛躁躁的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATpsWxyrrTneqj2tnO4T2E4mtSVwNawmsWiajaH2sITH9xVfF6bQzicdMVGejM6bywwxvibgh2MyA9t00FltG4dFHGezFwtDPQQVQ/640?wx_fmt=png&from=appmsg)

最后，我们在保持 FF\_Enable = 1 的基础上，也就是开启 CodeA\_Controller 中基于 代码A 的 C 代码复刻出来的紫色魔法护盾。再设置FF\_Source = 1 ，意味着前馈解耦信号**采用的是 D 轴和 Q 轴电流的指令值，不是反馈值**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARHAZeQBFRSzeS3TD9AfG8w8cyCeZKluaiamflX0qPtwmN3Jdp0JCw5GfxWUgBDZjrkgaGgMibwGoicjwT0ky21b3RvJ7VffwNGKk/640?wx_fmt=png&from=appmsg)

我们看下此时的仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATAzqKiaiaibdV6a8rKKNs0WckbEKmqN1gSQklFibR0TcBWjXAtlKDM17VvgzjzkkBtMSL6naen8rOjY5VnhVgzibaibxvP1sjLUeg2U/640?wx_fmt=png&from=appmsg)

虽然还是有高频噪声，但是和采用了反馈值作为解耦的系统相比，是不是“干净”了很多？

我们再看下此时的前馈品质因数，就更加一目了然了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQdQG0hwcLW6u07YN8rkS6BWJn3ac7zembFibRa6qgQlx8eGRup7buO4b9iaibktekDAnVLQ78Ee95MjzRCQxTS5icz26q6PmKyAUg/640?wx_fmt=png&from=appmsg)

清清爽爽，干干净净有木有？

代码A 的作者不是不会用**反馈值**，而是知道“真实量”在工程里往往意味着“带噪、带毛刺、带量化误差”。所以他宁可用干净的**指令值**做主补偿，把小误差交给闭环去收尾。

* * *

**本文小结**

各位同仁，在本文中，我们用显微镜看透了 代码A（全浮点流）里堪称完美的“全状态前馈解耦技术”。

它之所以能做到如此丝滑，是因为：

1.  **算力即正义：**他手里有硬件浮点乘法器，每一拍中断里都要算几十次这种复杂的乘加，毫无压力。
    
2.  **相信物理模型**：他的电感参数 Ld，Lq，电阻参数 R，乃至磁链参数 λ，必须是高度准确的！如果给他的电机参数不对，也就是手榴弹算错了重量，那他原本扔出去抵消相反作用力的反向手榴弹，反而会摧毁他自己。
    

但是各位，如果你只是一个底层搬砖人。你的算力可怜！你的板子只是一块便宜的定点 C2000！你没有那个命在几微秒里做这么多小数乘加！而且你面对的廉价电机，铭牌电感甚至会有 20% 的误差飘移！此时如果你去照抄 代码A 这套豪华打法，你的驱动器绝对会卡死在中断里无法自理。

那么，**在成本敏感、算力捉襟见肘的严酷工业世界里，那群老炮工程师又是怎么“妥协且硬核”地拆解这个难题的？**

下一篇技术文章，我们将切入真正的工业阵地——代码B，见证那场用简单整数去降伏猛兽的极致妥协。大家可以先脑内跑一遍 代码A 这几行乘法代码，咱们明天不见不散！

  

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

https://pan.baidu.com/s/1K8RCDZEDLCSg-mclGQOO8A?pwd=5m2j 提取码: 5m2j