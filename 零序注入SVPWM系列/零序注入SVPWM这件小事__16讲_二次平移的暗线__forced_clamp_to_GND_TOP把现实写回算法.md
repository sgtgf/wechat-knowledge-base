# 《零序注入SVPWM这件小事》｜16讲：二次平移的暗线——forced clamp to GND/TOP把现实写回算法

原创 傅存敬 电磁散人 2026-02-25 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/XqFnZFn6A4hP\_E4M9gI\_rg](https://mp.weixin.qq.com/s/XqFnZFn6A4hP_E4M9gI_rg)

各位同仁，前面两讲，咱们聊了[量化](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485595&idx=1&sn=a145ef3f65d22fc0ac9072423f5176c4&scene=21#wechat_redirect)、[最小脉宽](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485607&idx=1&sn=67e31eff1e4aec8b88c1a09d7b03c683&scene=21#wechat_redirect)、[采样清洁区](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247485607&idx=1&sn=67e31eff1e4aec8b88c1a09d7b03c683&scene=21#wechat_redirect)。我们知道了，一个理想的占空比，在送给硬件之前，要经过层层“盘剥”，最后可能面目全非。pm\_clearance() 就像一个“事后诸葛亮”，它在事情发生后，给我们一份“质检报告”，告诉我们“这一拍的采样数据还能不能用”。

但是，一个真正优秀的系统，不能只会被动地接受现实。它还要能**主动地改造现实**。

如果 pm\_clearance() 发现，按照当前的占空比，采样窗口不够干净，导致 vsi\_IF 为0，那我们能不能在占空比最终确定之前，再“抢救”一下，主动地去“擦亮”这个窗口呢？

代码 pm.c 的作者，就用一段极其精妙、但也极其隐蔽的代码，回答了这个问题：**能！**

这就是我们今天要解剖的——forced clamp to GND/TOP，我称之为“**二次平移的暗线**”。

* * *

**“抢救”的动机：为什么需要主动干预？**

我们再回顾一下 pm\_clearance() 的核心规则：**至少要有两相的采样是干净的**，vsi\_IF**才能为1**。

在某些工况下，这个条件很容易被打破。比如，**高调制比**的时候，三相占空比都非常接近0或1，脉冲非常窄，留给ADC的“安静时间”非常短。这时候，可能三相的 vsi\_AF, BF, CF 全都是0，导致 vsi\_IF 也为0。

如果连续多个周期 vsi\_IF 都为0，FOC的电流环就相当于在“**盲人摸象**”。它一直在用过时的、旧的电流数据做反馈，控制效果会急剧恶化，甚至导致系统失控。

所以，我们不能坐以待毙。当发现“快要凑不齐两相干净采样”的时候，我们必须“**主动出击**”。

* * *

**“二次平移”的动作：如何主动出击？**

这个“主动出击”的动作，就隐藏在 pm\_voltage() 函数，xA, xB, xC 从浮点量化成整数之后，最终限幅之前的那一大段 if (PM\_CONFIG\_IFB(pm) == ...) 逻辑里。

咱们以最复杂的 PM\_IFB\_ABC\_INLINE（三相在线采样）为例，来看这两段“神来之笔”。

我们看下文末共享代码中，pm\_voltage() 函数的 IFB\_ABC\_INLINE 分支。

```
// 1. 第一次抢救：尝试钳位到GND
```

```
// 2. 第二次抢救：尝试钳位到TOP
```

这两段代码，简直是“**庖丁解牛**”，技艺高超。咱们来细细品味：

1.  nZONE**的计算**：它是在“数数”，数一数当前有几相的占空比，已经落入了可能会污染采样的“危险区”。
    
2.  if (nZONE < 2)：这个判断非常关键。它是在说：“如果已经有两相或更多相都‘不干净’了，那基本就没救了，听天由命吧。但如果只有一相或零相‘不干净’，我们还有机会！”
    
3.  Forced clamp to GND：
    

-   xMIN = (xA < xB) ? (xC < xA) ? xC : xA : (xC < xB) ? xC : xB; 找到了三相CCR里最小的那个值。
    
-   xA -= xMIN;  把三相CCR同时减去这个最小值。
    
    这个动作的本质是什么？ 它就是一次手动的、强制的、额外的零序注入！效果呢？它会把最小的那一相的CCR，强制变成0！而其他两相，也被整体拉低了。
    
    为什么要这么做？ 因为当一相的占空比是0时，它的下管常开，我们就有了一个极其宽阔、绝对干净的采样窗口！同时，另外两相被拉低，它们的下管导通时间也变长了，也更容易采到。这样一来，凑齐“两相干净”的概率就大大增加了。
    

4.  Forced clamp to TOP：
    
    跟上一步的逻辑完全相反，它是把三相CCR**同时加上**一个值，让最大的那一相的CCR，**强制变成**dc\_resolution**(100%)**。
    
    这个策略主要不是为了下桥臂采样，而是为了上桥臂采样或者某些特定拓扑（比如 IFB\_AB\_INLINE 的注释里提到，钳到TOP有时能获得更多有效样本）。
    

**所以，这两段代码，就是**pm\_voltage()**这条流水线上的“最终质检员”和“返工小组”。**

-   它先检查了一下“半成品”（初步的CCR值），发现“质量”可能不达标（采样窗口可能不够）。
    
-   然后，它没有直接报废，而是“**主动返工**”——通过一次“二次平移”（强制注入零序），把占空比微调了一下，硬生生把一个“不合格品”变成了“合格品”。
    

这就是我们本讲文章封面宣传语的意义：“当现实不肯配合，你就再挪一次三相——不是妥协，是把世界的棱角写进模型。”

现实的“棱角”，就是采样窗口不够。算法的“模型”，就是通过注入零序来平移占空比。代码 pm.c 的作者，把这个“用模型去磨平棱角”的过程，写得如此优雅而深刻。

* * *

**Simulink 演示**

这个“主动抢救”的过程，必须在Simulink里动态地看，才能体会到它的神奇。

1.  **搭建一个带“抢救”逻辑的调制器：**
    
    **在我们的调制器模型里，严格复现 forced clamp to GND/TOP 的逻辑。需要一个 nZONE 的判断，然后根据结果，选择是否进行“二次平移”。**
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsAR21JTibHfats4BO4UxxqVnh8a0IIlbHqya3pujWyTkb518svPsUHibXqybzGDJPnEVXo3x1NQQsaSY7MAYSoAngF6LC2GHwdFoM/640?wx_fmt=png&from=appmsg)

2.  **两条并行路径：**
    

-   **路径A（无抢救）**：只进行量化和最小脉宽限制。
    
-   **路径B（有抢救）**：在量化后，加入 forced clamp 逻辑。
    

![](https://mmbiz.qpic.cn/mmbiz_png/vvmIAIMZsATuCzHRdlCzMEvGiblHNABjy1kaCUoNhq6QqDcfQOFZBF9PYgRIDHmMVhYv2TLZo3AZPLrJZ0KbJdfCFIaXmqDIeyATiagzwK0Dg/640?wx_fmt=png&from=appmsg)

**3\. 观测结果：**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQSbasuKsAiagelIQnC9hicYViaWDtjyNr007gRMStqBkDGQPxf8JhRnasvKvCcdo6Y28AlmjXPTDjJc4ncNdict4UIERscCpGoSIA/640?wx_fmt=png&from=appmsg)

大家盯着这个示波器，这不仅仅是两条线，这是**两种工程哲学的碰撞。**

3.1 看上图：这是“手术”现场

大家看上面的 CCR\_A 波形。

-   **黄色线（Path A）**：这是教科书式的 SVPWM，优雅、平滑。它像一个“老实人”，公式算出多少，它就输出多少。
    
-   **蓝色线（Path B）**：大家注意看波谷。原本圆润的曲线，被切了一刀，变成了**平底**。
    
    发生了什么？ 这就是代码里 forced clamp to GND 在干活。它发现：“哎哟，这几个占空比太小了，ADC采样要不够时间了！”于是，它没有坐视不管，而是直接出手，把三相电压整体往下拉，硬生生把最小的那一相按死在 0 上。
    
    为什么要这么做呢？ 因为对于下桥臂采样来说，占空比越小（或者为0），下管导通时间就越长，采样窗口就越宽、越干净！
    

3.2 看下图：这是“抢救”战果

手术做了，效果怎么样？看下面的 vsi\_IF 标志位（1代表采样有效，0代表瞎了）。

-   **看黄线（Path A）**：大家看到那些宽宽的缺口了吗？在过调制的时候，Path A 会有较长一段时间 vsi\_IF = 0。这时候，各位同仁的电流环在干嘛？在“**闭眼狂奔**”！它失去了反馈，只能靠惯性或者旧数据在猜，这非常危险。
    
-   **看蓝线（Path B）**：对比一下！那个宽宽的缺口，变得更窄了。
    
    这意味着什么？这意味着原本那些“必死无疑”的采样点，被我们的算法救活了！虽然在绝对峰值处，因为物理电压不够实在救不回来，但我们已经把90%的盲区变成了可视区。
    

这就是 pm.c 里那段不起眼的 if (nZONE < 2) 代码的威力。

-   **Path A 代表“被动接受”**：现实环境（硬件约束）不满足，我就报错，我就失效。
    
-   **Path B 代表“主动改造”**：现实环境不满足，我**修改控制量**去适应环境。
    

这里的“平底”，就是我们为了生存，主动磨平的“棱角”。

好了，通过以上这个实验，我们就把“被动接受”和“主动改造”这两种工程思维的差异，展现得淋漓尽致了。

到此为止，我们已经把 pm.c 里最核心、最复杂的算法部分——pm\_voltage()——给彻底解剖完了。从下一讲开始，我们就要进入**硬件层**，去看看这些软件算出来的“天花乱坠”的CCR值，是如何被**TIM1定时器**这个硬件，精确地翻译成驱动电机旋转的高频脉冲的。

好，今天就到这里。各位同仁可以思考一下，forced clamp 这种“二次平移”，虽然保证了采样，但它毕竟也改变了原始的占空比，会不会对电压矢量产生影响？影响有多大？（提示：想想零序注入的本质）

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7

模型链接：https://pan.baidu.com/s/1Fa5UkFGav3jrvtAhIek6VA?pwd=ng33 提取码: ng33