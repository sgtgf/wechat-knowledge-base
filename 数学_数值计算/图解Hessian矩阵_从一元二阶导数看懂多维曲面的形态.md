# 图解Hessian矩阵：从一元二阶导数看懂多维曲面的形态


> 原文地址: [https://mp.weixin.qq.com/s/-8QKr23DFVLTfGOioL9g\_g](https://mp.weixin.qq.com/s/-8QKr23DFVLTfGOioL9g_g)

在数学分析与函数最优化中，寻找极值点是核心任务之一。然而，仅仅依靠一阶导数或梯度，我们只能推断出地势的平坦程度，却无法分辨眼前的驻点究竟是高山还是谷底。为了看清多维空间的“地形”走向，我们需要引入函数的二阶信息。

# 1\. 一元函数的二阶导数

在数学分析中，对于一个一元函数![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0Kslv9w8svvZeDkE9KMuGNy8qSQUbK6Cdj3RL6XCT5l0CUarahFOe5uItsIwPz0mF0BDuicFibhlic5hUeVbSqMU90Gt9lChK16ayHA/640?wx_fmt=png&from=appmsg)而言，它的二阶导数本质上就是导数的导数。如果说一阶导数![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KsmyBA0XrenBeeyiakA0bDW2x5AufRcIRJa6ic2A3uRcKNPFwhDh6tOL7LN74O9tgWPBuIP3RnJiaKE0ib8ZYSrQxY1qZlrfK1hZBEY/640?wx_fmt=png&from=appmsg)描述的是函数值随自变量变化的快慢（即曲线的斜率），那么二阶导数![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KskybNXIYVJYBpibzpgTfNhcyfEASaDhMM5Y6l5dSNhtzZicZ2SGxGMuhum0pKiaAyXlfUcORmvsusjb3Oun6SvZ7NYEmgM2ps2K0I/640?wx_fmt=png&from=appmsg)描述的就是这个斜率本身变化的快慢（即斜率的变化率）。

一阶导数为0的点被称为驻点（此时切线是平的）。但此时曲线到底是向上弯曲还是向下弯曲，完全由二阶导数的正负号决定。

（1）当![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KslibkQGicxtzXEw8LJ02qlfan7rS9doyvnDReVofvKRgrHXqUulF6Fq02Zx7jASGfcNefWdrVibw64yS2DficQXCJHoa2RLBib5jSRA/640?wx_fmt=png&from=appmsg)时：

曲线呈现出开口向上的弯曲状态，几何上称为凸函数（如图1所示）。如果此时该点刚好满足一阶导数![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KslGtFiaonwTDpLfyyb2Cr2Npm1RO9QuibRNQqRgYEapup5ZpeM7QjjV7WPCfwoxTZxOIzZv11RgvibYfsvaqbxRONiapwqH5rl8DcA/640?wx_fmt=png&from=appmsg)（即为驻点），则该驻点必然是一个极小值点。

![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KsnQcRhCAkvvLeGI4XRqeCPiaI7oy3DZrtcAwARpS30NuzOiaaPHWavSscXwQTicv1QbibYeqcefYpeFufyGFPIkFIqMLVWRvVGrQ4g/640?wx_fmt=png&from=appmsg)

图1. 凸函数与极小值

（2）当![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KsndoicJia0yqpSmwiaRb6sLh34B8Ez5ra2kFRorHJoJ62quYf735pI3XoH4gynO032iahluL6uorHVwH0MSiaZLUHWLYUYK8YDZZ30Y/640?wx_fmt=png&from=appmsg)时：

曲线呈现出开口向下的弯曲状态，几何上称为凹函数（如图2所示）。如果此时该点刚好满足一阶导数![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KslGtFiaonwTDpLfyyb2Cr2Npm1RO9QuibRNQqRgYEapup5ZpeM7QjjV7WPCfwoxTZxOIzZv11RgvibYfsvaqbxRONiapwqH5rl8DcA/640?wx_fmt=png&from=appmsg)（即为驻点），则该驻点必然是一个极大值点。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KslzvauCMZBzB0jA50u63qkXlxWD16ZkicynGGicpDuOuZTHmfpAicWVkaXYgvFR33iceUVqqvvKPsqPjDC3ytsY2972r4yxwAzFib3M/640?wx_fmt=png&from=appmsg)

图2. 凹函数与极大值

# 2\. 多元函数的Hessian矩阵

当函数的自变量从一个变到多个时，例如多元函数![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KskU8B62DUKBD5pDv0rHlApbuAkBOich5SZ15w3qcuub7mOS2nBzVzia8lqfSar725KR2W0FZlK1icNJiaEvxxaia4tCAdzAKW7now6M/640?wx_fmt=png&from=appmsg)，高维空间里各个方向的弯曲信息会变得错综复杂。单凭一个孤零零的二阶导数数字，已经无法完整记录这些信息。

为了将多元函数各个方向的二阶导数信息打包组合在一起，数学家们引入了一个矩阵工具：Hessian矩阵（海森矩阵）。

对一个包含n个自变量的多元函数![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KskU8B62DUKBD5pDv0rHlApbuAkBOich5SZ15w3qcuub7mOS2nBzVzia8lqfSar725KR2W0FZlK1icNJiaEvxxaia4tCAdzAKW7now6M/640?wx_fmt=png&from=appmsg)而言，它的Hessian矩阵（通常记为H或![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KsnaOAe5u9GkdvaibgOUre4cM0Bz6HzrvtI8EMbhibYxmrd8DQos0GYayoTvSQDvvEy0hicMl3MrNW8D3syibppKGlG2QdFHBN2MQ5s/640?wx_fmt=png&from=appmsg)）是一个由所有二阶偏导数构成的n×n方阵。它的标准代数结构如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0Ksk5hkMWA8wnAbuUx5PefEjQHf8RBibuyGpKSr2DezniaArBUiaVM2roIIh3WveVU7NTOpibfWJUGUibTFBLhNqHGCsrAEuuHCFHkk9o/640?wx_fmt=png&from=appmsg)

容易验证，若混合偏导数连续，多元函数的Hessian矩阵必为对称阵。其对角线元素分别代表函数相对于各个自变量的二阶导数，它们描述了函数在这些方向的弯曲情况；而非对角线元素则对应函数的混合偏导数，它们记录了不同变量之间的交叉影响和协同弯曲效应。

在一元函数的世界里，我们通过二阶导数的正负号来判断曲线是“碗”还是“伞”。在高维空间里，我们则根据 Hessian 矩阵的性质来判断相应的“曲面”是“谷”还是“峰”。

在线性代数中，这种整体性质被称为矩阵的“定性（Definiteness）”。通过分析驻点（![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KskmJOoXtpa1pY8GMndBMdLM0SIkSYofV5oHX2qu1BYyOrOmrZkdDNvribQIy6vJLv9B9iblZAk6adps5BhM6mDibtef1gXOibvibx7w/640?wx_fmt=png&from=appmsg)）处Hessian矩阵的特征值，我们就能准确判别高维曲面的几何形态：

# （1）Hessian矩阵正定对应“谷”

当驻点处的Hessian矩阵所有特征值均大于0时，矩阵呈现正定性质。在几何直觉上，这意味着无论你朝着高维空间的哪一个方向看过去，地势全部都是开口向上弯曲的，该驻点必然是一个极小值点，在视觉上完美对应一个四周高、中间低的“谷底”地貌（图3）。

![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KskM7eAqxp3dvzSamwiad1gxQGtGPnkHdmtXIw72VPMFQMibeZnicYibcVKTuzHQntfWWVcT9nMjt5icwWomK3Gk3I8vMM0j2ccJD33A/640?wx_fmt=png&from=appmsg)

图3. 二元函数与极小值

# （2）Hessian矩阵负定对应“峰”

当驻点处的Hessian矩阵所有特征值均小于0时，矩阵呈现负定性质。在几何直觉上，这意味着无论你站在该点朝着哪一个方向看过去，地势全部都是开口向下弯曲的，该驻点必然是一个极大值点，在视觉上对应一个四面低、中间高的“山峰”地貌（图4）。

![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KsmkBsE8cds8Bab0n8GiacicicAkibKI23ONT1gOBA5yl2jUN8ShmeltJPv2OrLlR8qCv5FzMEyMIXyS3yYb4oI6V6mQWhvJZaMZYgQ/640?wx_fmt=png&from=appmsg)

图4. 二元函数与极大值

# （3）Hessian矩阵不定对应“鞍”

当驻点处的Hessian矩阵特征值有正有负时，矩阵呈现不定性质，这是高维空间特有的地貌。在几何直觉上，如果你沿着某些变量的方向走，地势是向上弯曲的谷，而换个垂直的方向走，地势又是向下弯曲的脊，该驻点既非极大也非极小，被称为鞍点，在视觉上对应着由谷和峰交织而成的“马鞍面”（图5）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0Ksmicia416csIqtbd0MCDia7yIZtT7iaeJS7MTY7oYBh5fRc6P0csicU5aD9HgK7NApokh7XjhWTkdhUicQQ80mUOmljaeoZDgZR4hSt8/640?wx_fmt=png&from=appmsg)

图5. 二元函数与鞍点

# 3\. 多元函数的二阶方向导数与Hessian矩阵的内在联系

前面提到，当Hessian矩阵正定时，曲面在任意方向都开口向上。这个任意方向在数学上可以通过多元函数里的一个核心概念表现出来：二阶方向导数。

假设在高维空间中指定了一个任意的单位方向向量v。如果想要知道，函数![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KskzLzn1P6kHemDPlZBz72Ej06dFepKKI0JkKyXlqia2LaYSk5aV6CpGFKPAWCFRC3JPdnT88GB7fmddvXR1w8LIFiaqXEYicrEZmA/640?wx_fmt=png&from=appmsg)站在某一点处，沿着v这个方向的二阶方向导数（即该方向上的曲线弯曲度）是多少，根据多元微积分的链式法则，可以推导出一个基于矩阵乘法的公式（请尝试推导）：

![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KsmYrczb4JeyLxAmIXSpfdUezuEAhwicJQBKBo8icjmk0rh0Y9gXnJediayxJm7QAjBuGQFxYZlyFHFdInN9djcULNzsNYkFvgztJM/640?wx_fmt=png&from=appmsg)

函数沿着v方向的二阶方向导数，恰好等于单位方向向量与Hessian矩阵的二次型运算。这个公式的物理含义非常直观：Hessian矩阵H蕴含了函数的所有二阶方向导数信息，你给它输入任何一个方向v，通过上式计算出来的标量数字，就是曲面在那个特定方向上的二阶导数。

有了![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KsmZZIwP5rBcgy1icnnt7WNcXJllhOrQsLqUSnGKicBGPyOU5kicw5eiaWjouGy6U74FCbPfbTaIZibs85vx9HLPd0He6J83mN0eou8g/640?wx_fmt=png&from=appmsg)这个解析表达式，就能用纯粹的代数逻辑，彻底解开Hessian矩阵控制高维地貌的核心秘密：

# （1）为什么正定Hessian对应开口朝上的“谷”

在矩阵代数中，正定矩阵的严格定义是对于任意非零向量v，二次型恒大于零，即![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0KsnGVazS49cyPIRUeExibRicNiaicOVvQvAxesmzuzq8RKIeB55A6rjAcTnGRdZAlDzgg7Tu2hsFviat5vIZ8BcXwzcoUeHScwSwClxs/640?wx_fmt=png&from=appmsg)。将这个代数性质代入方向导数公式，其物理实质就是：不论选取的方向v指向哪里，该方向上的二阶导数全部恒大于 0。这意味着每一个方向的曲线都在向上弯曲，四面八方所有的弯曲曲线汇聚在一起，自然就构成了一个开口朝上的“谷”。

# （2） 为什么负定Hessian对应开口朝下的“峰”

同理，负定矩阵的定义是对于任意非零向量v，二次型恒小于零，即![](https://mmbiz.qpic.cn/mmbiz_png/iagCqyDH0Ksl03r09KxQaLCyia2sEwmnjNZYcq7WsmUbJic0AuI21ic7Xgc5HlTomfZt3sdJNzpew02LbwW8icPmhqS9sNxpdUzdYy6oGFdt6VOs/640?wx_fmt=png&from=appmsg)。这意味着，在这个位置，不论朝着哪一个方向v迈步，该方向上的二阶导数全部恒小于 0。每个方向的曲线都在向下弯曲，当所有方向都向下塌陷时，在几何上自然就行成了一个开口朝下的“峰”。

# （3）为什么不定Hessian对应“鞍部”

当矩阵不定时，意味着根据输入的向量v不同，![](https://mmbiz.qpic.cn/sz_mmbiz_png/iagCqyDH0KsmZZIwP5rBcgy1icnnt7WNcXJllhOrQsLqUSnGKicBGPyOU5kicw5eiaWjouGy6U74FCbPfbTaIZibs85vx9HLPd0He6J83mN0eou8g/640?wx_fmt=png&from=appmsg)的结果有正有负。当v沿着正特征值对应的特征向量方向时为正，沿着负特征值方向时为负。这在几何上就表现为某些方向的二阶导数大于0（向上弯曲成山谷），而另一些方向的二阶导数小于0（向下弯曲成山脊），两者在驻点处交汇，便诞生了高维空间特有的“马鞍面”。

# 4\. 结语

从一元函数的二阶导数到多元函数的二阶方向导数，Hessian矩阵用干练的代数形式，完美打包了空间中所有方向的弯曲信息。正是因为这种强大的几何描述能力，它成为了现代众多关键领域的底层数学工具。在牛顿法等二阶最优化与机器学习算法中，Hessian矩阵（或二阶信息）不仅用于指引算法快速收敛、**分析大模型的训练稳定性**，还能**帮助算法有效逃逸鞍点；在计算机视觉与图像分析中，它常作为特征检测器用于捕捉图像斑点，或在尺度空间中用于消除不稳定的边缘响应；在物理力学与结构工程中，通过求解势能矩阵并验证其正定性，能有效判定物理系统的稳定平衡状态并保障结构安全。**

总而言之，只要涉及到高维空间的极值寻找与形态分析，Hessian矩阵都发挥着核心的理论支撑作用。理解它的代数几何本质，不仅能让我们看清函数在多维空间中的“地形”走向，更是通往底层算法创新的必由之路。