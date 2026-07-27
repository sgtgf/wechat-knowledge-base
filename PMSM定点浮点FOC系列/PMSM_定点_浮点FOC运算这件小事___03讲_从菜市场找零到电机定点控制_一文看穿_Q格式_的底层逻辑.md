# 《PMSM 定点/浮点FOC运算这件小事》| 03讲：从菜市场找零到电机定点控制：一文看穿“Q格式”的底层逻辑

原创 傅存敬 电磁散人 2026-04-14 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/u13cw3Ayov43omKiXo3O3A](https://mp.weixin.qq.com/s/u13cw3Ayov43omKiXo3O3A)

各位同仁，大家好。

前两篇文章我们看到了定点代码里那些令人费解的魔数——21845、18919、32768……今天我们正式揭开谜底。

不过在进入正题之前，我想先聊一个生活中的事儿。

## 一个关于"分"的故事

你去菜市场买菜，老板说白菜一块二一斤。你扫码付了钱，整个过程用的单位是"元"，脑子里想的也是"元"。

但你有没有想过，在老板的收银系统里，这个"一块二"是怎么存的？

答案是：它存的是**120**。单位是"分"。

为什么？因为计算机喜欢整数。整数运算快、不出错、占内存少。小数运算麻烦——0.1+0.2在计算机里都不一定等于0.3（这个坑，写过JavaScript的同仁应该深有体会）。

所以收银系统做了一件简单的事：把所有金额**乘以100**，用"分"做单位来存储和计算。1.20元变成120分，3.50元变成350分，加起来470分，最后显示给你的时候再**除以100**变回4.70元。

整个过程中，计算机内部始终在做整数运算，但表达的是小数含义。

这，就是定点运算的本质思想。

而所谓的**Q格式**，就是告诉你：我乘的不是100，我乘的是32768。

* * *

## 从"分"到Q15

菜市场用100做缩放因子，是因为人民币最小单位是分，1元=100分，刚好对应十进制两位小数。

嵌入式系统不用十进制，用二进制。所以缩放因子不是100、1000这种十进制整数，而是2的幂次——2、4、8、16……一直到32768。

32768是多少？就是215。

**Q15格式的定义是：把一个范围在\[-1, 1)之间的小数，乘以215（也就是32768），四舍五入取整，用一个16位有符号整数（int16）来存储。**

读取的时候反过来：整数值除以32768，就还原成了小数。就这么简单。没有更多了。

举个例子。我要存储2/3这个小数：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQYfptwWKSic1uQ2RQx5BHLaYdAW839hJv8zneeP3LOtl7bgickxZP8ZWG14magib4z0afRYHvGRHPnrEka30WuKlLnvAGed8ibQqI/640?wx_fmt=png&from=appmsg)

验算一下：21845 ÷ 32768 = 0.666504...跟真实的 2/3 = 0.666666... 比，误差大约是0.000163，相对误差不到万分之三。对于电机控制来说，这个精度完全够用。

再来一个，1/√3 ≈ 0.5774：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASnddCMXemotTHKtXQPO7Liafy4QNDf8gbEqtWicPSRl5f9MZv8hKowTR0TpIrHTNWIbMh4Plf8suvO0zSlg7reDOSrNKCAwlkak/640?wx_fmt=png&from=appmsg)

验算：18919 ÷ 32768 = 0.577362... 跟真实值 0.577350... 比，误差约0.000012。

**所以，[第1篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486137&idx=1&sn=f207043b0a7fbea6d3e4927b69a2b48e&scene=21#wechat_redirect)里那个神秘的21845，就是2/3的Q15表示值。18919，就是1/√3的Q15表示值。** 没有任何黑魔法，就是一次乘法加一次四舍五入。

* * *

## "君子约定"在哪里

但这里有个关键问题：**计算机本身并不知道21845代表的是0.6667。**在CPU看来，21845就是一个普通的16位整数。它不知道你心里把这个数当成了Q15格式的小数。如果你拿它去跟另一个"真正的"整数21845相加，CPU照加不误，但结果的物理含义就完全错了——一个代表 0.6667 ，另一个代表 21845 ，加起来是什么？没有意义。

这就是为什么我说Q格式是"软件工程师和编译器之间的**君子约定**"——软件工程师心里清楚：我这个 int16 变量存的不是普通整数，而是一个Q15格式的小数。我在写代码的时候，会按照Q格式的规则来做运算（这套规则我们下一篇讲）。但编译器不知道这回事，也不管这回事。它只管老老实实地做整数运算。

这个约定完全靠软件工程师自己维护。没有任何语法检查、没有任何编译器提示。你搞混了Q格式，编译器不会报错，代码照样跑——只不过跑出来的结果是错的。

这也是定点开发最容易出bug的地方：**格式搞混了，你可能很久才发现。** 因为代码既不会编译报错，也不会运行崩溃，它就是默默算出一个离谱的值，电机转起来不太对劲，你还得一点点排查到底是哪一步的Q格式对不上。

Embedded Coder的一大价值就在这里：它帮你维护了这个"君子约定"。你在Simulink里配好数据类型，工具会自动算出应该乘以多少、移位多少、在哪里插入格式转换。人工来做这件事既繁琐又容易出错。

* * *

## Q15以外还有什么

Q15是最常见的定点格式，但不是唯一的。"Q"后面的数字表示小数部分占多少位。

**Q15**：15位小数，1位符号，总共16位。范围\[-1, 1)，精度约3.05×10⁻⁵。这是16位定点系统的标配格式。

**Q31**：31位小数，1位符号，总共32位。范围还是\[-1, 1)，但精度提高到约4.66×10⁻¹⁰。当Q15精度不够的时候——比如PI积分器这种需要高精度累加的场合——就得用32位来存。

还有一种写法叫**Qm.n**，m代表整数位数，n代表小数位数。比如Q16.16，就是16位整数+16位小数，总共32位，范围是\[-32768, 32768)，精度约1.53×10⁻⁵。这种格式牺牲了小数精度，换来了更大的整数范围。

在我们分析的FOC代码里，信号值大部分在\[-1, 1)范围内（电流、电压都经过了归一化），所以Q15是主力格式。但你会在代码里看到有些中间变量突然变成了Q12、Q14或者Q18——那是因为工具在运算过程中做了移位调整，临时改变了小数点的位置。搞清楚每一步的Q格式是什么、为什么变了，就是读懂定点代码的核心功夫。

* * *

**Simulink演示**

如果各位同仁觉得今日的文章有些干，那我们就通过仿真模型来动态展示一下，在Simulink中搭建两个模块，模块一用来解密“魔数”与量化误差；模块二用来展示不同Q格式数据相加时，一旦处理不好时的灾难，也就是“君子约定”坍塌的全过程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQNRTUH83vSdM0TTClGicvlt9XSFsicic2uPkibyVickU6cIiakpA4wzOicxTM5KeqaiapIqplVTuqvve73JgqeaZ6VKO38ibOMib7Ms93ow/640?wx_fmt=png&from=appmsg)

在绿色的模块一中，要直观地验证上文中提到的 2/3 和 1/√3。

使用两个 Constant 模块产生双精度浮点数（Double）类型的 0.666666666666667 和 0.577350269189626。经过 Data Type Conversion 模块，将它们转换为 sfix16\_En15 (16位有符号，小数长15位，即Q15)。

再并排摆放两个 Display，针对同样的Q15信号，一个设置为**“Real World Value”（物理真实值）**，另一个设置为**“Stored Integer”（存储整数值）**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQ7yuibORBcDSOQpZTAW1ewwgVZqntAiaKe8ibkbSQZmZR0SsHCJpDBrDD8lZHee7OficvBPHwOA9PrYBN02UWQ4WgtP68Dic87LYxU/640?wx_fmt=png&from=appmsg)

在橙色的模块二中，放置了两路信号处理流程，一路为对照组，另一路为试验组。其中，对照组为Embedded Coder的做法，用 Simulink 的 Add 模块把 A(Q15) 和 B(Q14) 相加。Simulink 会自动做底层的移位对齐（维护君子约定），输出正确的物理结果（约0.885）。实验组模拟手写C代码常见的Bug：通过使用 Data Type Duplicate ，强行剥夺A和B的“Q格式”外衣，让它们变成纯粹的 int16（即在CPU眼里它们只是25736和1638）。然后用普通的整数加法相加，得到 27374。再还原回Q15，我们最终会看见计算得到的值是乱套的。

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsASuUHO9aMqnDE0jXhgXViaHrtdaWy00U2A1cYKf85rpziaTyibHMRdLF0OLuTuwGN8gOmVde4HwghXXnicyhQHib9qiawnZicwnCZogq0/640?wx_fmt=png&from=appmsg)

我看看下仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQ3HkYQpBmp6SKNicicpDcRyiblKKKWLdziahX7aGlsWyX48DN6VDt8pt1E1HaYU8xUwAEZibLLjoM4FukXfcMnI7tfURJEYme8m0B0/640?wx_fmt=png&from=appmsg)

各位同仁情况用红色框框起来的信号线，这条线上的字 sfix16\_En15，这是 MATLAB 对 Q15 的专属称呼。fix16 代表16位定点，En15 代表小数点在第15位。Q15 格式下的 1/√3 ，也就是 0.5773 ，被显示为 18919 是正确的，此时的浮点数与定点数之间的误差只有 1.87×10\-5。

再看下模块二的仿真结果：

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAQHsojyRC0PfkTW4qGjDFreeProc2BRcgHb9vI8Wo0p3Jic8JfqIujI3YuSlXQ7pl78BwhzWecQibEn2HO3weNJHial4xb5ZE5iaIs/640?wx_fmt=png&from=appmsg)

25736 + 1638 = 27374，CPU是没有计算错误的，但这真的是我们想要的结果吗？27374 在Q15格式下代表的小数是 0.8354，可是我们真正想要的计算结果是 **π/4 + 0.1 = 0.8854** ！

君子约定的坍塌过程，在这个数据流中一览无余。

* * *

## 本文小结

各位同仁，今天这篇文章，我们共同学习了如下三块内容：

**第一，Q格式的本质就是"把小数乘以2的幂次，变成整数来存储和运算"。** 跟菜市场用"分"代替"元"是一回事。

**第二，Q15格式里，缩放因子是215 = 32768。** 所以代码里的 21845 就是 round(2/3 × 32768) ，18919 就是 round(1/√3 × 32768)。

**第三，Q格式是一个纯粹的人为约定，CPU不知道也不关心。** 软件工程师（或者Embedded Coder）自己负责维护格式的正确性。搞混了不会报错，但结果会错。

记住这三条，咱们就已经拿到了打开定点代码大门的钥匙。

**明天的文章，我们来看看Q格式的数做加减乘除会发生什么——特别是乘法，它会让你的小数点"跑偏"，引出定点运算里最核心的麻烦事。**

  

### 参考文献

\[1\] Lecture 5: Fixed Point vs Floating Point, ECE 5655/4655 Real-Time DSP Course Materials.

\[2\] Konghirun M, Xu L, Skinner-Gray J. Quantization Errors in Digital Motor Control Systems\[C\]. IEEE International Conference on Electric Machines and Drives (IEMDC), 2003.