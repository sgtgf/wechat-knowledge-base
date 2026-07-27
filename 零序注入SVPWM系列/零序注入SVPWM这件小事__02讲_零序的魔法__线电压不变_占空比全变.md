# 《零序注入SVPWM这件小事》｜02讲：零序的魔法——线电压不变，占空比全变

原创 傅存敬 电磁散人 2026-02-02 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/By8WAr6y4AT5-8LpK7FHZA](https://mp.weixin.qq.com/s/By8WAr6y4AT5-8LpK7FHZA)

各位同仁，[上一讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485321&idx=1&sn=02b9a0fb737ca7c2fe4335bfe597f3f2&scene=21#wechat_redirect)咱们搭了个小实验，发现扇区法SVPWM和最简单的SPWM（也就是载波比较法的一种），虽然占空比波形长得不一样，但最后合成的线电压矢量，效果差不多。

这就有意思了。凭什么？明明给三相桥臂的指令都不一样，怎么最后到了电机那儿（看线电压），效果就一样了呢？

这背后，就藏着三相逆变器里一个非常非常重要的“特性”，或者说“漏洞”，也可以叫“自由度”。这个自由度，就是我们今天要聊的主角——**零序分量**。

咱们先回到理论。看文末提供的论文的第二章，**“Carrier-Based PWM”**。里面提到了一个对三相调制信号的通用表达方式，这个公式可以说是整篇论文的基石，也是我们理解零序的关键。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqlhuVKP2qQOK6LOFUVaibSMTXCpEPjJicqpdZsxRlian2XQRGRGgMtxUpw/640?wx_fmt=png&from=appmsg)

这里的ui\*(t)就是我们**真正想要的、理想的、对称的三相正弦波。**它们决定了我们想让电机输出什么样的转矩和磁链。而这个 ei(t) 呢，就是咱们今天的主角，**零序信号（zero-sequence signal）**。你看它的特点，ABC三相上加的是同一个东西。

这个公式告诉我们：我们最终送到PWM比较器去的调制波 ma, mb, mc，可以不完全是纯正弦波，我们可以在纯正弦波的基础上，给三相**同时加上**一个任意的“公共偏置”e(t)。

加上这个东西，有什么用？会不会把我们想要的波形给搞坏了？

别急，咱们来看看加上之后，对**线电压**有什么影响。

比如我们看A相和B相的线电压，它是由 ma 和 mb 的差决定的，对吧？

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqCQgU7ATwwUhJp1SHxrh3M9QYJpv491xRug0vzDvz35aDbbcCsYSI7g/640?wx_fmt=png&from=appmsg)

我们把上面的通用公式代进去：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0Ltq5RWbjZianbeVsMm5vxaibqibLFiaficiaA4dUgqDblCxD6QGrH2bgNOOSjpA/640?wx_fmt=png&from=appmsg)

看到了吗？神奇的事情发生了：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqGDFvj47QGS3lDevAGaH1KvknqBaDJPeEHXUVJJT43upFLFWZB8xTLQ/640?wx_fmt=png&from=appmsg)

那个 e(t) 被减掉了！B、C相之间，C、A相之间，也是同理。

因此，我们有了如下的**核心结论：只要你给三相加上的是同一个信号（零序信号），它就不会出现在最终的线电压里。**

这个结论太重要了。它意味着什么？

对于一个三相三线制的电机来说，它“感觉”到的电压，是线电压。它感受不到那个公共的零序分量。这就好比我们三个人站在一个电梯里，电梯整体上升了10米。我们三个人之间的相对身高差，一点都没变。从电梯外面看，我们都高了10米；但在电梯内部，我们互相看，还是老样子。

这个“电梯”，就是零序分量 e(t)。这个“相对身高差”，就是线电压。

这个“漏洞”，就给了我们巨大的操作空间。我们可以在不改变电机最终感受到的线电压的前提下，去任意“抬升”或者“拉低”三相的整体电压平台。

咱们再回头看文末共享的代码 pm.c 文件中的 pm\_voltage() 函数里那句关键代码：

```
// ... 计算出三相电压 uA, uB, uC
```

这个 uDC，在这一瞬间，不就是我们理论里的 e(t) 吗？它就是那个“电梯”，同时抬升或拉低三相的占空比。

那问题又来了，我们为什么要多此一举，去加这么个东西呢？它虽然不影响线电压，但它实实在在地改变了每一相的**相电压**，也就是改变了每一相桥臂的**占空比**。

改变占空比，就改变了PWM在一个周期内的**开关状态序列。**

比如说，本来某一时刻，三相占空比可能是 (0.6, 0.1, -0.7)。我们给它同时加上一个 +0.2 的偏置，它就变成了 (0.8, 0.3, -0.5)。这两组占空比合成的线电压差值是一样的，但是它们在PWM周期里对应的开关状态（比如100, 000, 011这些）的持续时间，就完全不同了。

而开关状态的持续时间，特别是**零矢量（000和111）的持续时间**和它们在周期内的**分配方式**，直接决定了：

1.  **母线电压的利用率：**能不能在不饱和的情况下输出更高的电压。
    
2.  **开关损耗：**是不是可以让某一相“偷个懒”，少开关几次。
    
3.  **电流纹波：**开关序列的排布会不会让电流更平滑。
    
4.  **采样窗口：**能不能在某个时间点，三相电流都比较“干净”，方便ADC采样。
    

所以，**零序注入的本质，就是我们利用三相系统里的这个“公共模式自由度”，去主动地、有目的地重新安排每一相的占空比和开关序列，从而在不改变线电压目标的前提下，去优化一些其他的性能指标。**

这就是零序的“魔法”。

**simulink演示**

还是在simulink中演示一下本讲的内容。

搭建的模块化模型如下：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqT1cianpEYysd1VWTJEI7yAR3dibQ5kOjTedUvaicxK3dAyibh6rb1XncZg/640?wx_fmt=png&from=appmsg)

最核心的演示部分在中间的橙色调制模块，Modulator\_Core里：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqvuWiaetKlrEsHCztROMk9t7C8oHVhJJibED9jOZOia4NInFLRJFOL1tEQ/640?wx_fmt=png&from=appmsg)

我们看下**路径A**：从 Inv\_Clarke 出来直接连到比较器 Comp\_SPWM，这里中间没有任何加法。这代表什么？这就是 e(t)，也就是最原始的 SPWM。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqjIWboEBcsaibfAiarAT5pRDTjQ59FV2mSjEGfLOmxyynrYibbwmkxnA3A/640?wx_fmt=png&from=appmsg)

我们看下**路径B**：这里有个 Add\_ZeroSeq 加法器。它的一端是理想正弦波，另一端是从 Add\_MaxMin 过来的信号。这个加法器，就是在执行 m + e 这个公式。那个 Gain\_HalfNeg（乘以 -0.5）和前面的 Max/Min 组合在一起，算出来的就是 e(t)。这就是我们在代码里写的 uDC。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqgOg47ngVG1P2qCx4vhVIticN0wVruh7v1qShfAFkFZ5k5ZQ1EgKnsicA/640?wx_fmt=png&from=appmsg)

看着最终的仿真波形（示波器在绿色的测量模块Measurements里）：

双击进入 Measurements 子系统，打开 Scope\_Vab ：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqH7RPB2I9WBibs8J8ns3HKnFHrt8b5hibibE9sB32RvhCBpiaa66hjPVKWg/640?wx_fmt=png&from=appmsg)

SPMW与ZSI\_PWM生成的占空比**完全不同**，但是，打开 Scope\_Vab ：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0Ltqby7PZiblB6CQp5YxCYiafpLzYxqzdRUgOo8pZmzn0dPXsDQicI6vGlgbA/640?wx_fmt=png&from=appmsg)

SPMW与ZSI\_PWM调制出来的线电压Uab**完全相同**。

感兴趣的同仁也可以打开 Scope\_ModWave ，看下SPMW与ZSI\_PWM的调制波形不相同，但并不影响二者调制出相同幅值和相位的线电压Uab。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGicjicWDoLIERIXVM0gn0LtqowuWMm8f8Z5XDknxiaMXRlGe9P8HibPzPGMTWib35jrqv3bKZXKYaflZg/640?wx_fmt=png&from=appmsg)

Wave\_SPWM1/2/3 是纯正弦波。这是理想的调制波，是我们想让电机输出的。Wave\_ZSI1/2/3 这是著名的**马鞍波**。这是实际送进比较器的调制波。大家看，它塌下去了，变丑了，对吧？正是因为它在原本应该是波峰和波谷的地方塌下去了，原来正弦波顶不到头的地方，现在能顶到了。这就是为什么SVPWM能比SPWM多输出 15% 电压的几何解释——**把高的压低，把低的抬高，让三相挤一挤，空间就出来了。**

以上在simulink中进行的这个实验，就是对我们今天分享的理论最直观的验证。它告诉我们，那个神神秘秘的 e(t) 就是一把钥匙，我们后面要继续攻关的min-max注入、DPWM，都是在玩转这把钥匙。

理解了零序的本质，咱们下一讲就可以来解一个更大的谜题了：**为什么加上某个特定的零序，就能把母线电压利用率从86.6%提到100%？那个神奇的min-max注入，到底是怎么来的？**

好，今天就到这儿。各位同仁可以再回味一下那个“电梯”的比喻。

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：

https://pan.baidu.com/s/191E4wh4QhO5VttVhgVN-JA?pwd=g7jc 提取码: g7jc