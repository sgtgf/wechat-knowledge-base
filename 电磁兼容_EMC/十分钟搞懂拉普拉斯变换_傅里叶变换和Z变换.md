# 十分钟搞懂拉普拉斯变换、傅里叶变换和Z变换


> 原文地址: [https://mp.weixin.qq.com/s/BerGM6LJUjMgiCHlFGNzgQ](https://mp.weixin.qq.com/s/BerGM6LJUjMgiCHlFGNzgQ)

在信号处理与系统控制领域，傅里叶变换、拉普拉斯变换和Z变换是三大数学基石。很多初学者被公式搞得头大，各种教材也写得枯燥难懂，看似严谨，一步步推导，其实很多人几年学习下来还是一头雾水。本文尝试换一个角度来描述其背后原理，争取让读者花十分钟时间搞懂（需有微积分和复变函数的基础）。本公众号的目标就是化繁为简，深入浅出，阐述嵌入式开发之“道”。 如有错漏，欢迎指正。

# 一、 神奇的指数函数

要把e说清楚不容易，像π一样，是个小数无限不循环的无理数2.718281828459…，和整数1同是描述客观世界的数学基石。好在网上的科普文章较多，不再赘述。指数函数有一个特性（所有指数均可以转换为以e为底），就是无论对它进行加、减、乘、除、求导还是积分运算后，形态不变。

加减：两个指数函数c1es1t+C2es2t相加，结果仍是指数函数的线性组合。

乘除：指数函数相乘，指数相加:es1t.es2t\=e(s1+s2)t

微分/积分：对est微分或积分，结果仍然是乘以一个常数

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAyT93M0FJbUEguG2XbRSoJibpmhAKn54ia3se7BdvdMmeywtJEG5NibScj5dePCBPnLG4u6OMd00lSvYuonibgOkQwqfQTpC51YWZyY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAyTtbqKB7DUJKKql1UzstkkoPYV8qyzwnUURbX1O9DkdpicERrsarib6ZO4qxR8BHicarHqArpwGnVqNMia1aKQNTno6m8JrWFZnic50/640?wx_fmt=png&from=appmsg)

正是因为指数函数经过运算后“还是它自己”，因此如果我们能把复杂的信号 f(t)分解成一系列指数函数的和，那么对信号进行微分、积分或通过线性系统，计算就会变得极其简单。而事实正是如此，就如所有的数可以用单位“1”叠加和分割来表示，所有物质都可以用基本粒子来构成，所有的信号都可以用指数函数来叠加形成，指数函数就是构成信号的“原子”。信号的本质就是变化，而指数函数本身就是表示变化的基本数学模型：递增、衰减、恒定不变或震荡（正弦余弦函数本身也是指数函数的特例，可以转换为指数函数的和与差）。可导函数在某一点附近可以展开成泰勒级数，也证明了指数函数确实是信号的基本“原子”成分。

根据欧拉公式（科普文章较多不再赘述）当est指数t为时间且s为复数时，如果复数的虚部为0实部为负时，表示的是一个随时间衰减的信号(下图左上角s=-0.8，系统稳定）；如果复数的虚部为0实部为正时，表示的是一个随时间递增的信号(下图右上角s=+0.2，系统不稳定）；如果复数的实部为0只有虚部时，表示的是一个幅度不随时间衰减或递增的振荡信号(下图左下角s=+j，系统稳定）；如果复数的实部和虚部均不为0时，表示的是一个幅度随时间衰减或递增的振荡信号（下图右下角s=-0.2+1.4j，系统稳定）。因此复平面上的一个点就代表一个信号成分，这就是为什么变换要变到复数域的原因，它把一个无限长的信号成分压缩映射成一个点，以静示动，没有比它表达更好更简洁的形式了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyR2kJasKEeXdjTQ32UR1e5icrHdg5z0sLLyOHKR8OuTmicuJ7yyNkiccD2iczNcPzJGo84Iqp29LqEIE2rkG73iaPCZtTnWsGNQgOYw/640?wx_fmt=png&from=appmsg)

因此指数中的s取复平面上不同的点时，该点对应的信号就是各种有不同衰减或递增系数的振荡信号。因此完全可以用复平面上各点对应的数值大小来表示各种信号成分的多和少，成分越多数值越大，成分越少数值越小，拉普拉斯变换体现的正是这种思想。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAySlic7jp0087D3zKWhv0BMgyGd8uWpKceIFRo1CsWIBEQfm5LGLpPsuVHibUSNmfte2icIHVibYfXklcfJ6Cs6gFExZUnQTOibZIhvc/640?wx_fmt=png&from=appmsg)

# 二、 信号合成：从“有限和”到“无限积分”

第一步：有限和近似

基于指数函数的完美特性，我们可以用多个指数信号来拼凑一个复杂信号f(t)：

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAyQAibicBJyqVESwTQFpCDI8SVH2Y1DhwGNfFYhkAFRzCfhctYCoWX0fecgm5jJRAKeEbKH4rz0EHHt1Se94gLeTgr0t72HjF5Fics/640?wx_fmt=png&from=appmsg)

其中，每个eskt是一个复指数函数（sk = σk+jωk）：

实部σk：决定了这个成分是增长还是衰减。

虚部ωk：决定了这个成分的振荡频率。

权重系数 Ck，表示这个成分在信号中占多大比例。

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAyQRTIAG2U6g3HNjqeQ6kBYfRsrov8CTYZbKb00QeOdF7smnYVOiczic9BzULWzFb2iaTcl4Jr6VfCaAdOiavTGFMUD5xXxsSIkXOLI/640?wx_fmt=png&from=appmsg)

第二步：推广至积分形式

显然，用有限个成分来合成信号是不够精确的。为了完美表示任意信号，我们需要无穷多个成分，且s的取值要连续变化。这就引出了拉普拉斯逆变换的积分形式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyROwZ7ba6R0jKbRbVwIV7UXxNtgRVjw4adR5PcFicogpB0iaRT37RyNCxS3WrqfVRlhTCsGI66DrX48D1BEuT59TTPWqgIE3Anjs/640?wx_fmt=png&from=appmsg)

# 三、 拉普拉斯变换：如何求各成分“权重”？

既然信号可以表示为est的积分，那么给定一个信号f(t)，我们如何求出它的各成分的权重分布F(s)呢？这正是拉普拉斯变换要做的事：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyQ1rOVgWGm8zZt9xj3OiatrG8JALAibKgYt3r7Wf1LDDibSKroxesZePov9ZWngFqkkBuQak113qGm9azl9mDpN0BSQG2yjicGzblw/640?wx_fmt=png&from=appmsg)

复平面上某一点s0的积分含义：

当我们计算F(s0)时，我们是在做这样一件事：把信号f(t)与**e\-S0t**相乘，然后从0到无穷大积分。

如果f(t)里面恰好含有**e\-S0t**这种成分，那么相乘后**eS0te\-S0t**\=1，积分结果会很大。

如果f(t)里面完全没有这种成分，相乘后结果振荡剧烈，积分结果会很小。

极点和零点的意义：

极点 (Pole)：分母为零的点。在极点sp处，F(s)趋于无穷大，说明信号中含有大量的**e\-Spt**成分（参见下图中5个极点处的尖峰）。

零点 (Zero)：分子为零的点。在零点sz处，说明信号中完全不包含**e\-szt**这种成分。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyQTc5cow4TFSwLjicMUOkaRlMvrW8te0JFaJokIzKO8PJo5V4uWecxH9AdzibbP6J0e7UuFkVsgibJUAFAvb2P2Dvl6ty6fVYwyEc/640?wx_fmt=png&from=appmsg)

# 四、 傅里叶变换与Z变换：特例与映射

傅里叶变换（特例）：

在拉普拉斯变换中，强制要求信号“既不增长也不衰减”（即实部σ=0），则 s退化为jω。代入公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyRIrq34UomNYt8L06c4hdNr6XgrbBv14bkicDl2k0LbPLRhmOD01gUAKzZHGkW32lbAeQsNdqiclOKdOg8e5FhLzFfTibU0hhXLug/640?wx_fmt=png&from=appmsg)

傅里叶变换就是拉普拉斯变换在复平面虚轴（s=jω）上的取值，它忽略了衰减，只关心频率，反映的是系统的稳态。

Z变换（离散映射）：

针对离散序列x\[n\]=f(nT)，通过z=esT将s平面映射到z平面：

s平面虚轴（σ=0）→z平面单位圆（∣z∣=1），对应着离散傅里叶变换。

s平面左半平面（σ<0）→z平面单位圆内部（∣z∣<1）。

s平面右半平面（σ>0）→z平面单位圆外部（∣z∣>1）。

Z变换公式：

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAyQB6NlxzCz62z4b2AZgLWQYMSkdWIsgXicub9dsXI9OEq5VvurbT9h9AY6mSlxLaSEUIUUPqR7ARD3GJQTGZV3V9pyPzuxyiby0A/640?wx_fmt=png&from=appmsg)

# 五、 为什么要搞这些变换：变换视角化繁为简

1.时间解耦：不再需要追踪每一刻

在时域中，需要追踪信号f(t)的每一个时刻的值，视角只是局部、瞬时的。如果时间是无限大，你就要跟踪到无限大！

可是通过变换你就知道了有哪些信号成分，你根本就不需要关心时间，因为任何一个时刻的值，都可以由这些信号成分在该时刻合成，视角是全局的。

变换后，F(s)不再包含时间变量t，这并不是“丢失”了时间信息，而是时间信息已经不必保存，我们不再需要追踪每一个瞬间，因为我们已经知道了信号的“配方”（由哪些成分组成），而配方是不随时间变化的。

2.卷积变乘法：计算量剧减！

时域卷积的复杂性：

在时域中，计算线性系统的响应y(t)=x(t)∗h(t)（等于输入信号和冲击响应的卷积，原理不赘述，网上可搜索查询）需要复杂的积分运算：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyRPicwHCW1icVI3QD3uqVzyVRF6X4fGV6nKx5rwMAibSD3KmcXYSrnCpzaPVUrZnWSLqE685yeYaNLn7hWsE2ZXKXlVQ1rpGUDQhE/640?wx_fmt=png&from=appmsg)

这就像用一把钝刀切肉，效率极低。因为对于每一个输出时刻t，你都需要把整个输入历史x(τ)和系统冲击响应h(t−τ)重新“卷”一遍。

频域乘法的简单性：

在变换域（拉普拉斯或Z域），卷积定理告诉我们：

Y(s)=X(s)⋅H(s)

为什么？

这正是因为指数函数的“不变性”（我们在第一段提到的核心特性）。让我们从“信号合成”的视角来推导一把：

第一步：分解输入信号

根据拉普拉斯逆变换，输入信号x(t)可以分解为无穷多个复指数信号est 的线性组合（权重为X(s)）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAyRMaVTsxic6TAOjbnZ9SuNzyWsaZQCia3rTvriaFS6aiaHzasZxWccXiahrw8KaB5ffWo6MUTRtznBg5Gxs4eTV6fIdco6orMMABZBc/640?wx_fmt=png&from=appmsg)

注意，这里的s是复数变量，遍历整个复平面。

第二步：系统对“基本成分”的响应（关键步骤）

假设我们只输入一个最简单的信号：x0(t)=es0t（即频率为s0的纯振荡）。根据线性时不变系统的特性，以及指数函数的微分不变性，系统的输出 y0(t)必然也是同频率的指数函数，只是幅度和相位发生了变化（即乘以了一个复数H(s0)）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6Uzn2S5AAySOo0YB6ic5KHwjzKDWqJZjSwe2EEjXfrjrpib7ibrpKbnOl9y6MSxicHf0IxKaic7TMREgES0djxYNRrxtAoIHKlNf0xiaGAibdibaR8Y/640?wx_fmt=png&from=appmsg)

这里的H(s0)就是系统函数在s=s0处的取值。

第三步：线性叠加（合成总输出）

由于系统是线性的，输入信号的“和”会产生输出的“和”。既然输入x(t)是所有X(s)est的和，那么输出y(t)就应该是所有H(s)X(s)est的和：

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAySCxINP7OY4kWsX5ud8ERs9k1AcBKRYS3E1paaBx5QM3jp3wPvOh4NYTufNuicqaFoopzkweU6kVXh8CjHsWl2YtNjOFqUnDwes/640?wx_fmt=png&from=appmsg)

对比拉普拉斯逆变换的定义，括号里的H(s)X(s)正是输出信号的拉普拉斯变换Y(s)。

在时域每个时刻的输出都受所有过去输入的影响（纠缠），而在频域，每个频率成分是独立处理的——输入频率ω的幅度乘以系统在该频率的增益H(jω)，即可得到输出幅度。成分之间互不干扰，所以只需做乘法。

3.微分/差分方程变代数方程

时域求解的噩梦：

求解一个高阶微分方程，比如

![](https://mmbiz.qpic.cn/mmbiz_png/6Uzn2S5AAyRAMQ52RBnXIvH26O49nqYlibsSwF2SgEkJzwL41msibws81jN0e2ic1M1Rqz1YoOo8xOvBjjQViah5A5vslcJicN6vY7HkhAicmWqeI/640?wx_fmt=png&from=appmsg)，

需要寻找特解、通解，处理初始条件，过程繁琐。

变换域求解的优雅：

对上述方程两边取拉普拉斯变换，利用微分性质（ L{dy/dt}=sY(s)−y(0) ）：

\[s2Y(s)−sy(0)−y′(0)\]+3\[sY(s)−y(0)\]+2Y(s)=X(s)

整理后，得到一个关于Y(s)的代数方程：

(s2+3s+2)Y(s)=X(s)+(s+3)y(0)+y′(0)

为什么能这样？

还是因为指数函数的特性：对est微分，等于乘以s。所以微分算子d\_/dt在变换域变成了乘法算子s。

从本质上看变换后时间信息略去了，因此动态不再存在，只剩下静态成分信息，因此问题得以降维简化，变换将“动态的微积分和差分运算”转化为了“静态的代数运算”。我们不再需要解微分方程，只需要解一个简单的代数方程，再变回时域即可。

# 六、总结

拉普拉斯变换是基础，其背后的原理是所有的信号均可有指数函数成分合成，要将各成分的指数函数与信号相乘，其结果显示和反映在复平面的各个点上面，值越大成分越显著。极点在左边表示系统稳定（衰减到最后就稳定了），在右边表示不稳定（递增最终导致崩溃），在虚轴上表示稳态振荡。

傅里叶变换是拉普拉斯变换特例，只关心虚轴上的纯频率成分，要将各成分的正弦余弦函数与信号相乘，其结果显示和反映在复平面的虚轴的各个点上面，值越大成分越显著。。

Z变换是拉普拉斯变换离散版，将各成分的指数函数与信号相乘时不是连续的求积，而是将采样的离散值相乘，其结果显示和反映在Z平面的各个点上面，值越大说明成分越显著。只不过为了形式的简洁，将拉普拉斯复平面映射到Z复平面（虚轴对应z平面单位圆，虚轴左边对应单位圆内部，虚轴右边对应单位圆外部）。单位圆上的Z变换即为离散傅里叶变换。

变换本质是改变视角，实现“解耦”：将时间纠缠的信号拆解为独立的成分，将复杂的运算转化为简单的代数。正如化学家关心“元素构成”而非分子轨迹，信号分析家通过三大变换，透过时间表象，抓住了信号和系统的构成本质，化繁为简，以静示动。世间事的分析也大抵如此，透过现象看本质就是认知层级提升，问题反而更简化。