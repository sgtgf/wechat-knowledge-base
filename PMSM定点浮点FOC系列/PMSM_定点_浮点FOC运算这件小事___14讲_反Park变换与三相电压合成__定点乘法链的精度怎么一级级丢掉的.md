# 《PMSM 定点/浮点FOC运算这件小事》| 14讲：反Park变换与三相电压合成——定点乘法链的精度怎么一级级丢掉的

原创 傅存敬 电磁散人 2026-04-29 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/qAp4r0p789pNBUHbWa5vUA](https://mp.weixin.qq.com/s/qAp4r0p789pNBUHbWa5vUA)

各位同仁，大家好。

上两篇我们一口气啃完了PI控制器的[量化死区](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect)和[抗饱和](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486344&idx=1&sn=fc378792e797a49eb66ebbb36cb7d9f1&scene=21#wechat_redirect)。PI的输出是什么？是dq坐标下的参考电压Vd和Vq。但电机不认识dq坐标——它只认识三相ABC的开关信号。所以PI后面还有两道工序：**反Park变换**（dq→αβ）和**三相电压合成**（αβ→ABC+[零序注入](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485306&idx=1&sn=bf7ba061acfec735abe64e7545c31d6b&scene=21#wechat_redirect)）。

这两步的定点实现，每一步都有一次"乘法+移位"操作，每次移位都会截断几个低位。五步乘法链走下来，精度是怎么丢的？丢了多少？今天我们来追踪这条"精度损耗链"。

* * *

## 流水线上的加工公差

在电机车间做过机械加工的同仁应该都知道一件事：单个零件的公差可以控制得很好，但十个零件装配到一起的时候，公差会**累积**。

举个例子。你加工一根轴，直径公差±0.01mm，轴承孔的公差也是±0.01mm。单独看都没问题。但装配的时候，轴偏大、孔偏小，配合间隙就小了0.02mm；反过来轴偏小、孔偏大，间隙就大了0.02mm。最坏情况下公差叠满，装配精度是单个零件精度的两倍——这叫**公差累积**。

定点乘法链的精度损失，就是这样一种"公差累积"。每一步移位截断丢掉的1~2个最低位，就像一个零件的加工公差。单独看微不足道，但五步串联下来，最坏情况的累积误差就是5个LSB——相当于0.015%满量程。

问题是：这个累积到底有多大？它比PI积分器的量化死区更严重吗？今天我们带着数字来回答。

* * *

## 先看浮点版代码：清爽透明

浮点版代码的反Park+三相合成只有五六行：

```
// 反Park: dq → αβ
```

每一行都直接对应教科书公式。反Park就是旋转矩阵转置乘上去，三相合成就是αβ到ABC的标准变换（Vβ那一路乘了 √3/2），零序注入取三相中点偏移，最后归一化到PWM计数器值。0.866025388就是 √3/2，4199.0就是PWM定时器的满值。

浮点一路算下来，精度损失只有[IEEE 754尾数截断](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486214&idx=1&sn=f66fbef59325ff550a184e985d0622dd&scene=21#wechat_redirect)的那一点点——23位有效位对应相对误差 10\-7 量级，可以完全忽略。

* * *

## 定点版代码：五步乘法链

定点版代码就没这么轻松了。反Park一步旋转矩阵就要拆成好几段：

```
// 第1步: Vα = Vd·cos - Vq·sin (带Q格式对齐)
```

两行代码里嵌套了五六层括号，每一层都是一次"乘法→移位→截断→强制int16"的操作。我们一层一层拆。

**第1步：****Vd×cos >> 12****。** PI输出Vd和查表cos都是int16，相乘得int32，右移12位回到int16。丢了12个低位，但相对于Q30的结果来说，这12个低位只占百万分之一，损失可忽略。

**第2步：****Vq×sin >> 14 << 2****。** 右移14位再左移2位，净效果是右移12位——和第1步一样的截断量。但中间多了一步"先右移再左移"的操作，这是为了让两条支路的Q格式在做减法前对齐。

**第3步：两条支路相减，****\>> 2****。** 得到Vα。右移2位又丢了2个低位。

**第4步：Vβ方向的乘积****× 14189 >> 14****。**14189就是 √3/4 的Q15编码。为什么是 √3/4 不是浮点版用的 √3/2？因为前面的乘法链里已经多了一个÷2的缩放，这里把系数也折半，两者刚好对消。又一次右移14位。

**第5步：三相合成+零序注入。**[加减法和min/max比较](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485306&idx=1&sn=bf7ba061acfec735abe64e7545c31d6b&scene=21#wechat_redirect)，这一步不引入新的截断（整数加减法不丢精度），但零序注入的min/max比较在定点里需要六行if-else，浮点版用两个`fminf/fmaxf`调用就搞定了。

* * *

## 关于14189这个魔数

在这条乘法链里，14189是唯一一个新面孔。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATURIdPzGWysMduDCadtTqvqwMO1s3TtSYYYibut5kZUKebia2xxgPibW1Rwic7tZzdERyytlibxe1QicRf8OljQ7RLEH6CL5YNXPuYE/640?wx_fmt=png&from=appmsg)

编码误差0.0003%——比 21845（[第3篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486161&idx=1&sn=4cc0c68986f3ec9c3a53c56b4f8432a5&scene=21#wechat_redirect)讲述的2/3）和 18919（[第9篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486271&idx=1&sn=387609e9eca0972d784d0852217e8f4b&scene=21#wechat_redirect) 讲述的1/√3）都要精确。这是因为 √3/4 这个值恰好接近一个"好"的二进制分数，用Q15编码时运气好，舍入误差极小。

可能有同仁已经发现了，浮点版代码用的是 √3/2 = 0.866 ，定点版用的是 √3/4 = 0.433 ——差了一倍。为什么？

因为定点版的Vβ中间结果在前面的乘法链里比浮点版"大"了一倍（d轴和q轴的Q格式差异导致的），所以系数要减半才能让最终结果对得上。这又是一个"跨模块Q格式联动"的例子——和 [第8篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486258&idx=1&sn=209645ec51fe43a6fde2f642a5b62746&scene=21#wechat_redirect) Clark输出Q17而非Q15是同一个套路。

* * *

## 精度损耗到底有多大

五步乘法链，每步截断1~2个最低位。累积起来到底丢了多少？

最坏情况分析：如果五步的截断方向都一致（全部向下取整，误差都是正的），累积误差可以达到5个LSB。对于Q15格式来说，5个LSB = 5/32768 = 0.015% 满量程。

但这是最坏情况。实际运行中，每步截断的方向是随机正负的——有时向上有时向下，部分相消。统计上，N步随机截断的典型累积误差约 √N 个LSB。五步就是 √5 ≈ 2.2 个LSB，即 0.007% 满量程。

这个数字说明什么？

**和 [第9篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486271&idx=1&sn=387609e9eca0972d784d0852217e8f4b&scene=21#wechat_redirect) Clark变换的精度比**：Clark的定点误差最大0.076%，反Park的级联截断最大0.015%——反Park更小。原因是反Park的输入（PI输出）本身就是int16精度，上游已经"过滤"过了。

**和 [第12篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486326&idx=1&sn=30a26bac848f81336d65df2d4ef1ffd2&scene=21#wechat_redirect) PI积分器的量化死区比**：积分器死区是0.037%。反Park级联截断的0.015%不到死区的一半。换句话说——**在整条FOC算法链里，精度瓶颈不在反Park这里，而在PI积分器**。Clark也好、反Park也好，它们的定点误差都远小于PI死区。这和Konghirun在论文里的结论一致——16位定点的性能降级主要来自PI控制器的积分量化，而不是坐标变换环节\[1\]。

这个结论其实挺让人欣慰的。它意味着：**如果你要花力气优化定点精度，应该把火力集中在PI积分器上**（比如把积分器升级到32位），而不是去纠结Clark或反Park的移位量少移一位还是多移一位。方向搞对了，事半功倍。

* * *

**Simulink演示**

我们现在只盯着一条算法链：给定 `Vd`、`Vq`、电角度 `theta` 和母线电压 `Vbus`，看看浮点算法和定点 C 风格算法算出来的结果差多少。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASVoswxtETHWicz2uMgz3P7iaYGicxYl1BQ0oG7hboNTP6VKpF5JWiavTDKbw0eEGnn4pXKKibXFh8bCickypkTN6K1MCXUgS88iaXJuk/640?wx_fmt=png&from=appmsg)

顶层左边是四个输入源：`Vd_ref`，`Vq_ref`，`Theta_e`，`Vbus`。这四个量就像考试题里的已知条件。`Theta_e` 用 50 Hz 斜坡生成，所以 0.04 秒刚好是两个电周期。这样示波器里看到的两圈波形，既完整，又不拖沓。

中间有两条并行通道：`Float_Reference`和`FixedPoint_C_Emulation`和，这就像让两个学生做同一道题。一个学生用计算器，代表浮点参考答案；另一个学生用整数、移位、截断，代表嵌入式 C 代码。最后把两个人的答案放在一起比较。

右边的 `Compare_Log_Dashboard` 是结果观察区。

蓝色背景的`Float_Reference` 是标准答案：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATYl5vlicbpnFbExLZ9WAvryHBFCsT4POuWrMRwvkwZZHEXNyQFLj6XO2KiaqutUugnNNn6AEppe6UBeX8VbZicT8EYO0f6tLFuzA/640?wx_fmt=png&from=appmsg)

它就做四件事：

第一步，实现反 Park 变换：

```
Vd,Vq,theta -> Valpha,Vbeta
```

这是上文里的 `dq -> alpha/beta`。这里使用 single 浮点，尽量代表数学公式本身，不人为引入整数截断。

第二步，三相电压合成：

```
Valpha,Vbeta -> Va,Vb,Vc
```

这对应本文中从二维静止坐标系合成三相电压的部分。

第三步，零序注入。简单说，就是看三相里谁最大、谁最小，然后加一个公共偏移量，让三相电压更适合放进 PWM 周期里。

第四步，PWM 计数：

```
Va,Vb,Vc,Vzero -> tA,tB,tC
```

这一步把电压量变成定时器计数值。

绿色背景的`FixedPoint_C_Emulation` 不是为了写得“优雅”，而是为了贴近Embedder Coder的 C 风格定点链路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsARiaNBiaPvibL3lWM5axQFUqLKEgtmMQDsvzD4OuZsA5j2zVHU10pcDLQicPkDf9O5MqDkWW4icx6ITcDAUHgb7I7VEWegYyERpvWvM/640?wx_fmt=png&from=appmsg)

在function函数中故意保留这些动作：

```
乘法 -> 右移 -> 截断 -> int16 饱和
```

比如 `Vd`、`Vq` 先按 Q14 量化，`sin/cos` 按 Q15 量化。乘法以后数字会变长，所以要右移。右移以后小数部分被砍掉，这就是误差来源。

本文中特别提到的魔数 `14189`，它不是一个神秘数字，而是：

```
14189 / 32768 ≈ sqrt(3) / 4
```

在模型里也保留了这一步。为的是能让各位同仁更清楚地理解，所谓定点算法，不是随便乘一个浮点常数，而是把常数先编码成整数，再靠移位把尺度调回来。

我们来看一下最终的仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASSib2rbxxfSqjylC3WRB6AGicmlPYBvu89uRdTk89FnEd2HhweYdjnL53KoHItNu5PJhLjZVEbEDryqCtFQ6L6PuXkz5TzySng0/640?wx_fmt=png&from=appmsg)

Scope\_AlphaBeta 这个示波器显示的是文中的反 Park 原始输出，也就是 `Valpha` 和未乘 `√3/2` 的 `Vbeta`。

图例里有 4 路信号，但肉眼基本只看到 2 条曲线。这是什么原因呢？这是由于 `Valpha_float` 和 `Valpha_fixed` 重合，`Vbeta_float` 和 `Vbeta_fixed` 也重合造成的。如果定点链路误差很大，这里会看到两条线明显分开。但现在没有分开，说明反 Park 这一级虽然有量化和截断，但误差很小。

再来看代表三相电压合成的 Scope\_ABC：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsATic50xZ56VIQWLRb1rjH7pK2looO2DFzjoDZdlTqZvibWy0e9ApNibh6ckH2gXicGbKSwqOo7ic7UM1V23YJCNmaCR8xN4D5QR5BvQ/640?wx_fmt=png&from=appmsg)

这里的三相合成内部实际使用 `Vbeta_scaled = Vbeta * sqrt(3)/2`。图例里有 6 路信号，但画面上基本是 3 条三相波形。这是因为每一相的浮点结果和定点结果都贴在一起。没有削顶，没有漂移，也没有直流偏置，零序注入前后的三相合成逻辑准确无误。

再来看一下代表最终 PWM 计数 `tA/tB/tC` 的Scope\_PWM\_Counts：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQEuLV8WicibKFQeAQlbGMjbeDkz0zxFuQ0xYh8GhVXcRysVicXuNh65rd5ZRfxpia6LURaongfCTp5ZSKueicKUYFcibRibItNb7q20g/640?wx_fmt=png&from=appmsg)

波形大约落在 `1400 ~ 2800` counts，中心在 `PWM_MAX/2` 附近。这个结果很符合预期，因为 `PWM_MAX = 4199`，中点大约是 2099.5。

更关键的是，浮点和定点的 PWM 计数基本重合。这在工程上意味着：前面几级定点误差传到 PWM 寄存器时，大约也就是 1 到 2 个计数的差异，不是几十、几百个计数。

最后来看所有 `float - fixed` 的误差Scope\_Error\_All：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAR0a6m8x2v1HLNib0qMiaa5WnhrzEpibJ8CudlKnX1JuOmSjfRE66zYbGy00WPjcpjOQqH5oXvJata4dTCRjpPYP5erVLPG92gO2w/640?wx_fmt=png&from=appmsg)

可能有同仁看到这里会紧张：怎么有一堆抖动？其实这正是定点算法的样子。整数右移和截断不会产生光滑误差，而会产生一格一格的量化抖动。电压误差只有几个 Q15 LSB，在 `1e-4`以内，在这个混合单位示波器里几乎贴着 0 轴，看不明显。

通过以上这个仿真模型演示，再次跟各位同仁强调，反Park和三相电压合成里的定点乘法链确实会丢精度，但丢的是几个 LSB 量级，不是肉眼可见的大偏差。

所以，对于目前在一线的同仁来说，这个模型想传达的不是“定点没有误差”，而是**误差存在，但数量级可控。**真正做项目时，反Park和三相合成电压通常不是 FOC 定点精度的最大矛盾。更值得警惕的，往往是 PI 积分器里的量化死区、限幅策略、采样噪声、参数标定和电流环动态响应。

* * *

## 本文小结

各位同仁，通过今天的这篇文章，我们了解到了反Park变换和三相电压合成在定点代码实现里形成了一条五步乘法链，每步的移位截断都会丢掉1~2个最低位。新魔数14189是 √3/4 的Q15编码，之所以用半值 √3/4 而非浮点版代码的 √3/2，是因为上游乘法链中的Q格式缩放需要补偿——又一个跨模块联动的设计。五步级联的最坏精度损失约0.015%满量程，比PI积分器死区（0.037%）还小了一半。整条FOC链的精度瓶颈不在坐标变换，而在PI积分器——这也指明了定点优化的发力方向：升积分器位宽的性价比远远高于调整变换环节的移位策略。

**下一篇是FOC定点链的最后一站——从电压到PWM寄存器。我们会详细讨论定点除法函数**`**div_s16s32_floor()**`**为什么用floor而不是truncation？这个选择对PWM波形对称性的影响，可能比各位同仁想象的要大。**

我们明天见。

### 参考文献

\[1\] M. Konghirun, L. Xu, and J. Skinner-Gray, "Quantization errors in digital motor control systems," in _Proc. IEEE Int. Conf. Electric Machines and Drives (IEMDC)_, Madison, WI, USA, 2003, pp. 1512–1517.

\[2\] ECE 5655/4655 Real-Time DSP, "Lecture 5: Fixed Point vs Floating Point," Course Materials.