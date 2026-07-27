# 《PMSM PID控制这件小事》| 12讲：解耦控制的理论基础 —— 当 D 轴遇上 Q 轴

原创 傅存敬 电磁散人 2026-03-26 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/x-jSHimhFZXYTPyJajeUUA](https://mp.weixin.qq.com/s/x-jSHimhFZXYTPyJajeUUA)

各位同仁，大家好。

经过前面两篇文章的洗礼，我们仿佛拥有了“上帝视角”，通过 IMC 原理和电机的 R 和 L，漂漂亮亮地把电流环的 PID 参数（Kp，Ki）给硬算出来了。在电机没跑起来、或者转速很慢的时候，如果你去打个阶跃看波形，你会发现：完美！电流指哪打哪，干净利落。

但这是一种错觉。

如果有同仁在现场调过主轴电机或者高速压缩机，马上就会发现系统有一个“诡异的毛病”：**电机低速时好好的，一旦转速飙到额定转速的 80% 甚至跑到弱磁区，你的电流波形立马畸变，甚至D轴和Q轴的电流开始剧烈震荡，最终报过流停机。**

难道咱们[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485924&idx=1&sn=c8af7b449df1f84de797adab76d65900&scene=21#wechat_redirect)算出来的 PID 参数错了吗？没算错。

错就错在，你以为你控制的 D 轴和 Q 轴是两条**平行互不相干的高速公路**。但事实上，随着电机的旋转，它们俩其实是在一个**大转盘上互相拉扯对方方向盘的“碰碰车”！**

今天，我们就来揭开这个 FOC 中最具物理魅力的控制难题：**交叉耦合（Cross-Coupling），以及为了对付它而诞生的解耦控制（Decoupling）。**

* * *

**电压方程里的“不速之客”**

为了搞清楚为什么要解耦，我们必须把初中物理（或者大学里的电机学）的基础知识稍微复习一下。法拉第电磁感应定律告诉我们：发电机是怎么发电的？**导体切割磁感线，就会产生感应电动势。**

现在，我们来看永磁同步电机（PMSM）定子的 D 轴和 Q 轴。

-   **D 轴（直轴）**：它是磁铁磁场正对的方向，你可以理解为“产生磁场的轴”。
    
-   **Q 轴（交轴）**：它与 D 轴垂直，你可以理解为“产生推力/转矩的轴”。
    

电机旋转起来后，定子里的线圈其实在被磁场“切割”。这会产生三股**非常强硬的电压（电动势）**，并且它们交叉作用在了 D 轴和 Q 轴上！看一看 FOC 教材里的电压方程：

1.  **对于 D 轴，实际产生的总反抗电压包含两部分：**
    

-   一部分是它自己老老实实的电阻和电感阻力：R·id + Ld·did/dt
    
-   另一部分是个**“外人”**：\-ωeLqiq（也就是由当前的转速 ωe 和 Q 轴的电流 iq 共同制造的阻力！）
    

3.  **对于 Q 轴，实际产生的总反抗电压包含三部分：**
    

-   一部分是它自己的本分：R·iq + Lq·diq/dt
    
-   第二部分也是个**“外人”**：+ωeLdid（由转速  和直轴电流  制造的阻力）
    
-   第三部分是个“**巨无霸”**： ωeλm（这是永磁体自身旋转产生的反电动势，也就是所谓的 BEMF，它在高速时巨大无比）。
    

* * *

**交叉耦合如何让 PID 崩溃？**

各位同仁，这就是所有灾难的源头！请盯住这两项：\-ωeLqiq 和 +ωeLdid。这就是大名鼎鼎的**交叉耦合项（Cross-Coupling Terms）**。

咱们再回头看看我们可怜的 PID 控制器。你用代码写了一个 D 轴 PI 和一个 Q 轴 PI。

在 Q 轴 看来，我想加力（增加 iq），于是 Q 轴 PI 努力调大输出电压 uq。

但这个时候，只要 iq 变大了，它马上跑去**祸害 D 轴**！在 D 轴看来，自己明明什么都没做，突然凭空多出来一个巨大的负电压干扰（\-ωeLqiq）。

D 轴的 PI 瞬间蒙圈了：“哎哟？怎么电压掉下去了！” 于是 D 轴 PI 拼命往回补电压去稳住 id（比如要维持弱磁）。

这还没完，一旦 D 轴拼死把 id 变化了（哪怕是个微小的扰动），这个变化又作为 +ωeLdid 这个大锤子，狠狠地砸向了刚刚才消停的 Q 轴！

大家看到了没？

**D 轴和 Q 轴根本不能安稳地过自己的日子，他们互相往对方家里扔手榴弹！**

更要命的是，这个手榴弹的威力取决于 ωe（电角速度）。转速越低，ωe 越小，这俩手榴弹就像鞭炮扔过去没啥感觉。但**转速一旦飙高（高速弱磁区）**，ωe**变得极大，这个交叉干扰瞬间变成了核弹！**它会大到完全掩盖住 PID 前馈的作用，导致整个电流环彻底失控震荡。

这就是为什么电机在低速转得好好的，一到高速就乱发飙的根本原因。在我们面前的，是一个巨大的系统性扰动！

* * *

**理论解法：用魔法打败魔法（前馈解耦）**

既然找到了在天上乱飞的“手榴弹”，我们要怎么在代码里拦截它们？

文末共享的PID经典教材 **_Practical PID Control_** 第5章提到了一个对付大规模已知扰动的神技：**前馈控制（Feedforward Action）用于干扰抑制。**

反馈控制（PID）是“挨打之后再补救”，而前馈控制是“看到别人要打你，事先就把盾牌举好”。

既然在电压方程里，老天爷偷偷塞给 D 轴一个阻力 \-ωeLqiq，塞给 Q 轴 一个阻力 +ωeLdid 加上反电动势 ωeλm。

那作为系统设计者的“上帝”，我们只要做一件事：

**不管这会儿你的 PI 控制器算出了多少输出，我们在把最终的 PWM 给逆变器之前，直接顺手在输出电压里，把老天爷塞过来的阻力“硬生生地加回去”抵消掉不就行了吗！**

这就是理论上的**完全解耦（Full Decoupling）**：

-   Ud\_最终 = Ud\_PI输出 - ωeLqiq（这里用减号抵消原来的正向干扰或补足负向流失，方向视符号定义）
    
-   Uq\_最终 = Uq\_PI输出 + ωeLdid + ωeλm
    

各位同仁仔细想一想，这一招实在是“太极拳”打法！当这段代码运行起来时：

对于 D 轴来说，不管 ωe 有多大，Q 轴怎么折腾，就在干扰到来的那一微秒，控制器额外给的那股反向电压“嘭”的一下就把干扰冲减为了零。

这就好像 D 轴和 Q 轴中间那道互相侵犯的大门被死死锁住了！两根轴瞬间变成了清清白白的“两条平行线”。

只要完全解耦生效，电机就算跑到极限转速，D 轴和 Q 轴也绝不会再吵架，我们[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485924&idx=1&sn=c8af7b449df1f84de797adab76d65900&scene=21#wechat_redirect)中费尽心思根据 L/R 算出来的完美 PI 参数，就能在全转速段发挥它所向披靡的威力。

* * *

**Simulink演示**

空口无凭，得上Simulink，我们通过仿真模型再体会一下DQ轴是怎么“打架”，又是怎么被制伏的 。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsARDSgSTHPgpTGfralc2tKsERcAaOCrh8oOmUoJjsOUAiaicBt8B0nNFy5vXBVvDcARzedTZva2tdDW6dlBjNKQQfWoX8gUicz4FSY/640?wx_fmt=png&from=appmsg)

为了能在仿真模型中展示“电流是怎么随着时间变化慢慢积累出来的”，上图右侧绿色的PMSM模型中，电机的电压方程改用了电流的状态来展示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsASRe3an1gy269oHNlhU6X2UDhoZmomJ5R5d3jXzTicBdmoG5I4Cf0GIiaqG0GK73Tj70pF2KX47guicUqvmStRnwLdHruqKzlWQBk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQStkFrLqanoPHOobECz3bZFjYEuroicLcXFtVzpLakdEGASCTp9sco3THePbj06hk7PjGWiaQyE1oAHbCeIeIs9gsvsp8yxgGOM/640?wx_fmt=png&from=appmsg)

仿真画布中橙色的FOC控制器，加入了两个开关，鼠标双击就可以在没有解耦和有解耦两条控制路径之间切换：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQhHhSlvnB6blqSXLHIEc3Z9iaOZFAibHCACGE3POj82zfrBBlyq1VTwAeMfdicEDm6RMBzlfic57BpK2v7MR5SQkwSMPmZnNEys7Q/640?wx_fmt=png&from=appmsg)

我们首先看下没有解耦的回路控制效果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATibzaQuxbHlWOQ5uiaSInnWicAE30azW26Hz4YsiboXUp7TN9whDZA9YmibPv5IWiaJ2nWy4k8c434ciboc1vGu7J8q4FWsJ9qdiauI7w/640?wx_fmt=png&from=appmsg)

上图中，无论是 Q 轴电流还是 D 轴电流，明显可见有一个很大的“深坑”，在 0~0.3s 期间，明明两根轴的指令都是 0，但实际的 Iq（上视图中的蓝线）却瞬间暴跌到 -10A，然后死命挣扎着才被 PI 控制器拉回 0。因为我们一开局就给了 1500 rad/s 的超高转速。此时 Q 轴方程里巨大的反电动势项 \-ωeλm 瞬间作用。由于 PI 控制器的积分项 Ki 是慢慢累加的，开局它毫无防备，瞬间就被反电势把电流“冲垮”了。

如果说开局的破坏，是由于反电动势引起的，那么我们在 0.5s 的时候，再来看看交叉耦合的破坏力。

在 0.5s 时，我们命令 Iq（上视图的黄线）从 0 满载跃升到 10A。可是各位同仁看下下视图的蓝线（也就是 D 轴实际电流），它本应该死死稳在 0 的，结果在 Iq 爬升的瞬间，**它居然往上失控飙升到了接近 +8A，然后又下冲到 -2A，震荡了很久！**这是因为当 Iq 增加时，D 轴截获了一个非常大的额外扰动正电压 ωeLqiq。由于转速 ωe 高达 1500 ras/s，这个扰动极大，老实巴交的 D 轴 PI 控制器直接被干懵了，D 轴的实际电流瞬间拔地而起。这就是咱们上文中说的，**只要 Iq 变大了，它马上跑去祸害 D 轴……这俩互相往对方家里扔手榴弹！**

这么危险的波形，我们怎么敢在实际控制中应用于实际的电机控制战场上呢？必须要解耦！咱们再看一下解耦后的效果（双击打开画布中的 FOC\_Controller 将 D 和 Q 共计两个黑色的 Manual Switch 开关）：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATbVWkdIdYsO6elGPMXZOldAPwELDoJHkkfRxUGEIp7EZb7hvMUTFg4tN6DSv3hmSun4u6iaU6hzC75cAnSwpKlwWkBZDvicTlo4/640?wx_fmt=png&from=appmsg)

我们再来看下解耦后的仿真结果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQjoHozr8t5W7tnBQ3RK6B81Rnfe6T9hDjJruK5dG1WC4JTwNj54KbeRzuyYuDBHI93ickE8kZWxNsibulozPPOjRicPkwoibPp0qY/640?wx_fmt=png&from=appmsg)

**对比效果是不是特别明显？**

1.  开局 0~0.3s 的巨大深坑**消失了！**因为 ωeλm 补偿瞬间抵消了反电势。
    
2.  最关键的 0.5s 处：上视图中代表 Iq 指令的黄线上升时，代表 Iq 实际值的蓝线顺滑跟上；**而下视图中代表 Id 实际值的蓝线犹如死水一般，紧紧贴在 0 的位置，哪怕是一个像素的波动都没有！**
    

就如同大家所见，D 轴和 Q 轴中间的大门被死死锁住。他们重新变成了两条平行互不相干的高速公路。这就是完美前馈解耦的威力！

* * *

**本文小结**

各位同仁，我们在本篇文章中一起体会了前馈解耦的威力，但，“前馈解耦”，理论上听起来太完美了。只要把那两个公式加上去，天下太平。

但是！只要你干过几年工程就一定会知道：凡是带“前馈”两个字的操作，往往都是一把**双刃剑**。如果电机的电感变了呢？如果转速噪声很大呢？如果在定点 DSP 里，算这几个连乘直接把变量算溢出了呢？

这就来到了我们技术进阶的最深水区！

在下一篇文章，我们将切入那份拥有豪华算力的 **代码A** 的核心地带，用放大镜去赏析在浮点环境下，如何写出教科书级的、滴水不漏的前馈解耦闭环代码！

咱们换换脑子，准备在下篇文章中迎接代码风暴！

  

参考文献：

\[1\] VISIOLI A. Practical PID Control\[M\]. London: Springer, 2006.

\[2\] YU C C. Autotuning of PID Controllers: A Relay Feedback Approach \[M\]. 2nd ed. London: Springer, 2006.

文献链接：

\[1\] https://pan.baidu.com/s/1h9nutvCGosgBItC40gXClQ?pwd=hwuq 提取码: hwuq

\[2\] https://pan.baidu.com/s/1mfqXkjV3CBe12iD9N5XvIA?pwd=j8da 提取码: j8da

代码链接：

代码A：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug

模型链接：https://pan.baidu.com/s/1-SystsJJIAAn6o2y4S4vxQ?pwd=i9p4 提取码: i9p4