# 永磁同步电机的鲁棒H∞位置伺服控制

原创 电机新视界 2024-06-04 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/lA3h0WZt6ZJ55wABG28oHg](https://mp.weixin.qq.com/s/lA3h0WZt6ZJ55wABG28oHg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tx2UUQMiaekzttE3Wyxwxqichzmk6TPhblJtseMFwghh73Pa6c70fwC3cjxBB0SSibjlQnuDXqr3cVA/640?wx_fmt=jpeg&from=appmsg)


**来源：电动农机研究与应用实验室**

 **文献导读**

**本分享的文献内容来源于期刊：**_2022 IEEE 5th International Electrical and Energy Conference (CIEEC)_

**原文信息：**Z. Ziyue and W. Zheng, "Robust H∞ Position servo control for PMSM," _2022 IEEE 5th International Electrical and Energy Conference (CIEEC)_, Nangjing, China, 2022, pp. 3996-4000, doi: 10.1109/CIEEC54735.2022.9846261.

**注：本发布仅限于分享国内外电动农机及其电动车辆领域的前沿科技及研究动态，不产生任何经济效益与盈利，所有发布内容请以原文信息为准。**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/02okRyF75yG8qbxicAq3YG4AyjmPpj4tDic3Jm0UoU3gHlQRBorE1lzuPSkOIXOeBXFA53813cFcq0vpRjbaqicNA/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=13&wx_lazy=1&wx_co=1)

  

**PART** **0****1**

**研究介绍**

  

    本文提出了一种用于永磁同步电机(pmms)驱动的H∞位置控制器。通过将位置环和速度环与H∞控制器相结合，优化了控制结构，简化了设计工作。在永磁同步电机伺服驱动平台上进行了仿真和实验，并将所提出的控制方法与PI控制器进行了比较，验证了H∞控制器对永磁同步电机伺服驱动具有更好的性能和鲁棒性。

  

  

**PART** **0****2**

**研究内容**

  

  提出了一种基于状态反馈的永磁同步电动机伺服驱动的H∞位置控制结构。首先，介绍了永磁同步电机的数学模型和鲁棒H∞控制理论。其次，根据H∞理论选择合适的控制对象，实现位置伺服系统的状态空间实现。第三，在对权重因子进行整定后，通过迭代计算设计出满足信号跟踪和动态响应要求的控制器。

永磁同步电动机的建模

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3ciauYRiaXeicfAjDmFstvsTStowYql37msy8xRr7RTsJ6YrQibR3UhV8w1g/640?wx_fmt=png&from=appmsg&wxfrom=13)

图1显示了PMSM伺服驱动的传统级联环路示意图。Gθ(s)和Gω(s)分别为位置回路和速度回路的控制器。G(s)为位置环的被控对象，包含带比例积分(PI)控制器的电流环。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cibGKoo5wqJMIhudZxYKoZftvxicW55L1Uciah0FGWGUWiciaW2vpL97VFEQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

H∞位置控制器的设计需要将永磁同步电机控制问题转化为H∞鲁棒控制问题，然后推导出满足H∞范数界的解。广义伺服跟踪系统可以看作是一个线性时不变SISO状态反馈系统，如图2所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cCXPUZibqvOEpuiataSkWA0HsIvXLAv1YsQgARUTAJedJuKyxL8EN4QJw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

P(s)为广义对象，K(s)为待解控制器。w是系统的输入，u是P(s)的控制输入，z是评估响应的评估输出，x是P(s)的状态变量，也是K(s)的输入。图2的状态空间方程可表示为:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cIvmgvwxA4hHGBQ5KXWWrDmtS7TkH7TsbKb93m9d2KZVZlI1HKT0p2g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

位置伺服控制回路的简化结构如图3所示。与图1相比，很明显外环控制器的数量减少到了1个。根据H∞控制器设计方法，本文采用状态反馈设计方法，将控制框图转换为广义反馈H∞位置伺服控制系统，如图4所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cr8yV42H13JtheP1252ZicJFicjLE9DGGvcgh4R90RskakZXmN0cw1a1Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

为了抑制摄动并导出状态空间方程，选择位置误差积分作为反馈状态之一。根据图4选取状态变量x1、x2、x3。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cIhyco04AFFqHiaGt3cvOrKCuvl8wppSNCvshbEp9RfaE9NYnMJOCWrg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

对于上述对象P(s)，可以用以下定理来保证控制器K(s)的存在性:定理:定义I为单位矩阵，其维数等于状态数。然后，导出了K(s)保证稳定性并满足H∞范数边界γ的条件是矩阵P1和P2均为正定矩阵解的存在性。

LMI必须满足:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cKyeqryJ0KhVDKToBPKoiaxlz8J9iae4vsTHMSn4Weicibarc0nt542UB2w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

则状态反馈控制器K可表示为:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3c5Ae2uzImYq5WOsCxnvwRxOhQDVHWMk7r41cyQXF58skZgrxmk3sHnw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

(8)的LMI可以用MATLAB鲁棒控制工具箱求解。然后控制器输出u可以很容易地实现:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3ckcmRUpA1wV5LmkxMQsicG5EzuOrtR0sQMrwWtSCt6SqO8nbriblcjHvQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

为了验证所提出的H∞伺服控制器的性能，对永磁同步电机伺服驱动器进行了计算机仿真。PMSM仿真参数如表Ⅰ所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3c8XJWT8Dlpvj8zsYh5HiaV0CyvJfWrwd4vtT2QkNXsyp2Vfu585GdYDg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

(2)的状态空间表达式的系数矩阵可以用表Ⅰ中的值得到。权重函数参数选择的调谐规则在\[9\]中进行了讨论，并在许多实际案例中得到了验证\[10\]。γ决定了要计算的迭代次数和鲁棒性的范围。为了在计算复杂度和控制精度之间取得平衡，首先确定γ = 4。如\[10\]所述，如果对象具有积分行为，则考虑到权重函数z3的带宽，在\[0,1\]范围内选取系统输出的权重因子x3，本文取x3。

因此，初始选择r2 = 1。然后r1被改变以进行比较。经过多次仿真比较，保证控制性能的权重因子如表Ⅱ所示:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cxYP4MianB9feyOicDXSCVbzqxSqIia9uibkH4w1Ania6pzpvrxb2fyYHVGQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

仿真结果如图5所示，对比了PI控制器和H∞控制器。其中绿线、蓝线和紫线分别表示命令位置信号，PI控制器的转子位置和建议的H∞控制器的转子位置。从图5(a)可以明显看出，这两种方法到达命令信号的上升时间都在0.15s左右。如图5(b)所示，当时间为0.3s时，负载从空载状态增加到5Nm。PI控制器的响应时间约为0.45s，而所提出的H∞控制器的响应时间约为PI控制器的30%。采用PI控制器的转子位置降为0.017rad，而采用H∞控制器的转子位置降小于0.0015 rad，约为PI控制器的10%。从无花果。如图5(a)和图5(b)所示，通过仿真验证了H∞控制器的动态性能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cttXFn2UyBpkOWLyNWtblHm9Ye07omUtDM3l5pmV6bBDU4hDJJR9kKw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

实验在表面贴装PMSM伺服系统上进行，如图6所示，该系统包括表面贴装PMSM、控制器、英飞凌IPM V3A3驱动电路、MG-1000C22LFW传感器和可变直流电源。控制算法在DSP TMS320C28346上实现。位置环和电流环的采样频率均设为10khz。转子位置由安装在平台上的位置传感器测量，每周期提供10k脉冲。实验中使用的参数与仿真中相同。为了说明所提控制器的优点，还对传统控制框架与PI控制器的实验结果进行了比较。比较了信号跟踪、负荷变化和参数失配三种工况。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cPJbveSuBSicGYMX8d4UJOGobYoBvEnSAUr3S4cIGwOwlUwia32ibLKrQg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图7(a)和图7(b)比较了PI位置控制器和H∞位置控制器的动态跟踪性能。已知PI控制器的响应时间为111ms, H∞控制器的响应时间为60ms。因此，所提出的H∞位置控制器比PI控制器具有更快的动态响应。在实际情况下，负载可能会频繁变化。因此，需要考虑系统对负荷变化的敏感性。当永磁同步电动机伺服驱动器达到稳态时，瞬时增加额定值的80%，并观察其动态响应。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3c5eSEObwQ1u7qORUnfzQIB6u8WDw9eSNgQrzCHsTKcrOpx4oWJkargA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

负载变化结果如图8所示，其中绿线为位置命令信号，紫线为转子实际位置。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cStbWjbq7ia0fXdbcZTO5ZLf0OB6YyYc1W7S54cicbUCpcEYbwW4VQTaQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

为了检验对参数失配的灵敏度，图9(a)和图9(b)为J为初始值1.2倍时的实验结果，图10(a)和图10(b)为b为初始值0.5倍时的实验结果。与图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3ckHgtDegBqicoR6O5hichsMO12xkH2sAicuqpyVztbLSCOc6dFHDBXXoFA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/02okRyF75yGIXUH0IYiaibmSiao3XcjeP3cDYKqUPIKXadZ1C4asXwnJQkvtzfmRmmDSOTbngJcWic4hYSH2KibJl8w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

7(b)时，指令信号跟踪时间均上升约10%。与图8(b)相比，负荷变化下恢复稳态的时间分别增加了14%和35%。结果表明，在参数不匹配的情况下，系统仍然具有快速的动态响应。J和B的变化对采用H∞位置控制器的伺服系统的鲁棒运行几乎没有影响

**PART** **0****3**

**研究结论**

  

本文提出了一种用于永磁同步电机伺服驱动的鲁棒位置H∞控制器。将位置环和速度环组合成一个鲁棒位置H∞控制器，简化了设计工作。通过与传统PI控制器的比较，验证了所提出的H∞控制器具有良好的位置跟踪性能和对外部负载干扰和参数失配条件的鲁棒性。


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)