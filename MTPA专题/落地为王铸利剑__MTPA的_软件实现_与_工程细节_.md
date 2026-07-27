# 落地为王铸利剑——MTPA的“软件实现”与“工程细节”

原创 傅存敬 电磁散人 2025-11-06 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/3wmEjy53Lu9BaAWLfaY3IQ](https://mp.weixin.qq.com/s/3wmEjy53Lu9BaAWLfaY3IQ)

大家好！前两篇文章，我们已经把MTPA的“术”修炼到了一个很高的境界。

-   第一讲，我们搞懂了IPM电机“负负得正”的物理内涵。
    
-   第二讲，我们更是通过一场酣畅淋漓的数学推导，拿到了那本旷世“武功秘籍”——Id = f(Iq) 的终极公式！
    

现在，秘籍在手，我们是不是就可以天下无敌了？

不对！一个武林高手，光有秘籍还不行，你得把它练到自己的筋骨里，变成自己的本能！从“看懂秘籍”到“出手制敌”，这“最后一公里”的路，往往是最考验人的！

今天，我们就来走完这最关键的“最后一公里”！我们要看看，Cypress的工程师们是如何把那条漂亮的数学公式，变成在MCU里稳定运行、大杀四方的“独门绝技”的！

一、从“理想国”到“现实世界”：一个“老司机”的忠告

在我们开始写代码之前，我先要给大家泼一盆“冷水”。在现实的MCU世界里，我们拿到的信号，可不是数学公式里那种干干净净的Iq。

你用手机打电话，是不是有时候会听到“滋啦滋啦”的杂音？这就是噪声。我们的电机控制系统，工作在高频开关状态下，电磁环境极其恶劣，各种噪声无处不在。我们通过ADC采样得到的Iq电流，也混杂着大量的噪声和纹波。

如果直接把这个“脏兮兮”的Iq代入我们那条神圣的公式里，会发生什么？

Iq忽大忽小，算出来的Idref也会上蹿下跳，整个控制系统就会剧烈抖动，甚至不稳定！这就像你开车，方向盘一直在那儿抖，这车还能开吗？

所以，一个经验丰富的“老司机”，在动手之前，第一件事就是“清理战场”！

怎么清理？Cypress的工程师在文档里给我们指明了第一条路：

请看图！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2HFwOeMZZaQLRo8HyrLQC8HqA94F0Laz367xgujIeBqibn1gVdzKS1NQ/640?from=appmsg)

这叫低通滤波器 (Low pass filter)！

它的作用，就像一个筛子，把高频的“噪声”都筛掉，只留下我们想要的、平滑的、代表真实负载变化的那个Iq信号。我们把这个干净的信号，记为Iqf (f for filtered)。

这就是从“理论”到“工程”的第一个关键细节！永远不要相信你拿到的原始数据是干净的！先滤波，再计算，这是嵌入式开发的一条金科玉律！

二、亮出你的代码：翻译“数学语言”为“C语言”

好了，现在我们有了一个干净的Iqf，也手握那条神圣的公式：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe21nB9xF0V3iatMoTQ20GvU7MZF9euvCcN0L9svYxD0iccH34V1bN0IZSA/640?from=appmsg)

接下来，就是最激动人心的时刻：把它变成代码！这就像把一本中文小说，翻译成英文。

我们来看看Cypress工程师这份“标准译文”是怎么写的。

请看图！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2tMqJdXjwGU3r0iaOR4LGoUJt2JQN4ZzibOFm7OOY31uj1IMIciajPKqCQ/640?from=appmsg)

这张软件流程图，就是我们代码的“施工蓝图”！它清晰地告诉了我们每一步该干什么：

1.  Start：程序开始。
    
2.  Initialize the parameters...:初始化。把电机的Ψm, Ld, Lq这些“出厂参数”加载进来。
    
3.  Filter the Iq signal obtain the Iqf:看！第一步就是滤波！把我们采样的Iq变成干净的Iqf。
    
4.  By the MTPA equation to calculator the Idref:核心步骤！把Iqf和电机参数代入我们那个终极公式，进行计算。
    
5.  Obtain the d-axis reference value:得到我们梦寐以求的Idref。
    
6.  Return to the step two:这是一个死循环，不断地重复“滤波\->计算\->输出”，实现实时控制！
    

这个流程是不是特别清晰？逻辑上无懈可击！

我们一起走近代码：

光有流程图还不够，我们来看看代码长什么样。原文档中给了我们大量的代码片段，是汇编语言编写的，我们先看懂它的“骨架”。

这段140多行的代码，实现了MTPA的功能，其内部的子函数及子模块之间的调用关系是这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2U6aB9xlfMwUPZzHBxmV0UI0q2dNdutJicrTibmKLJ3AAVbfly0wpI05w/640?from=appmsg)

下面，捡重点的代码段跟算法同仁们分析：

1. 外部变量声明部分

```
EXTERN Ld          ; d轴电感 (H)
```

2. 数据段定义部分

```
SECTION\.data\.:DATA:REORDER:NOROOT(2)
```

3. 主函数MTPA\_Function部分

```
THUMB                    ; 使用THUMB指令集
```

4. 初始化阶段

```
MOVS R0,#+1             ; 设置初始化标志 = 1
```

5. 主算法阶段

```
??MTPA_Function_1:
```

6\. MTPA核心公式计算

```
; 计算isd = (√(isq²× (ΔL)² / 16 + ψf²) - ψf) × (1/ΔL) × 32
```

7. 滤波输出

```
ADD R2,R4,#+36          ; R2 = 指向滤波器输入
```

关键内容解读：

1.  EXTERN 是什么？这就是“跨单位借调”！它告诉编译器，Ld, Lq, isq\_tempf这些变量，不是我们这个文件里定义的，它们在别的“单位”（C文件）里，你们到时候去那边找就行了。这说明整个工程是模块化的，大家各司其职。
    
2.  PUBLIC 是什么？这就是“向组织汇报”！它告诉编译器，我这个文件里定义了一个叫MTPA\_Function的函数，别的“单位”如果需要，可以随时来调用。
    
3.  最最关键的人物出场了！\[\_aeabi\_...\]
    

这是什么鬼画符？同仁们，请记住这个名字：AEABI (ARM Embedded Application Binary Interface)。它就是ARM公司制定的一套"规矩"——嵌入式应用二进制接口标准。使用这个标准来给代码“搭积木”，可移植性很强，换了芯片也能用。而且优化程度更高，ARM知道怎么榨干处理器的性能。

为什么不直接用 + - \* /？因为我们用的这颗Cypress FM3芯片（基于ARM Cortex-M3内核），它的大脑里没有内置专门用来计算浮点数的硬件单元（FPU - Floating Point Unit）。打个比方: M3内核就像一个只有整数计算器的小学生。你现在让他算 3.14 \* 2.71，他自己算不了，怎么办？他得去翻一本叫《浮点数计算方法》的书，按照书里的步骤，用整数计算器一步一步模拟出浮点数乘法的结果。

\_aeabi\_fmul, \_aeabi\_fdiv这些，就是编译器提供给我们的，固化在库里的《浮点数计算方法》！每一次浮点数运算，实际上都是一次函数调用，是用软件模拟硬件！

算法工程师同仁们，这意味着什么？这意味着在没有FPU的芯片上，每一次浮点运算的开销都比整数运算大得多！如果你发现你的MTPA函数占用了太多CPU时间，优化这些浮点运算就是你的突破口！比如，考虑用“定点数”来代替浮点数。

代码隐藏的小彩蛋：请同仁们看代码最后一条指令：  

```
STRH R0, [R5, #+0]
```

STRH！Store Halfword！存储半个字！

-   一个“字”(Word)是32位，我们刚刚算出来的Idref（在R0里）就是32位的浮点数。
    
-   一个“半字”(Halfword)是16位！
    
-   这条指令的意思是，把R0这个32位的浮点数，经过某些处理（可能是直接截断，也可能是四舍五入），只取低16位，存到pmsm\_isdref这个变量的地址里去！
    

通过这个细节我们可以推测一个秘密：

这个项目的FOC控制环路（比如PI控制器），它接收的输入Idref，不是一个32位的浮点数，而是一个16位的定点数（比如Q15格式）！

为什么？

因为16位定点数运算比32位浮点数运算快得多得多！为了保证电流环的实时性，核心的PI运算部分通常用最高效的定点数来做。

所以，MTPA函数在这里，还兼职做了一个“翻译官”的角色，它把一个用浮点数精密计算出来的结果，转换成了控制环路能“吃”得下的16位定点数格式！这就是典型的嵌入式系统中的权衡：在计算精度和运行速度之间找到一个最佳的平衡点！

是不是感觉信息量爆炸？

我们通过逐一解剖代码，不仅看懂了公式是如何被“翻译”的，还发现了两个至关重要的工程细节：

1.  软件模拟浮点运算 (\_aeabi\_...)：这让我们意识到了在无FPU芯片上的性能开销。
    
2.  从浮点到定点的转换 (STRH)：这让我们看到了现实世界中，为了速度而对精度进行的巧妙“妥协”。
    

这才是真正“沾满泥土”的代码，这才是“老司机”的智慧！只有看懂了这些，你才算真正从一个“理论家”，开始向一个“实战派工程师”转变！

三、是骡子是马，拉出来遛遛！——看懂实验波形

好了，“武功”也练了，“兵器”（代码）也造好了，效果到底怎么样？是不是真的省电了？我们不能自己说自己好，得让数据说话！

请看图！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe21DtNhPGeZg4pdDsrdaqOCBJg7yxo2bFVdePDNRuSkG0EOzTz6FfRAQ/640?from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHbWt1EAt2ibBSwKVpZVpIe2VXkRlMo7Tlj4HAmYicyfuPxmgBhJYCv4Xm0ticSMJicGXaGvar5LicLQWw/640?from=appmsg)

(上图 Figure 19:“加了MTPA”；下图 Figure 20:“没加MTPA”)

这两张图，就是用示波器抓取的电机相电流的真实波形。它们是在完全相同的工况（相同的速度、相同的负载）下测试的！

我们来找不同！仔细看波形的幅值！但说实话，我个人感觉这位Cypress的工程师在抓取波形时，可能太着急了（根据右下角的时间记录，两次测试之间仅间隔了16s，勉强够重刷程序的），因为放大图形来看，明显电流波形有一个直流分量，是因为在测试前没有校准吗？而且放大后的波形也没能占满整个示波器屏幕，不太好让读者根据刻度读取数据。

-   上图（加了MTPA）:电流的峰值大约在6A左右。
    
-   下图（没加MTPA，也就是id\=0）:电流的峰值是不是明显要高一些？目测大约在7.5A 左右！
    

在输出同样大小的力气的情况下，加了MTPA算法的电机，消耗的电流更小了！从7.5A降到了6A！

这意味着什么？

-   铜损更小了！电流小了，根据焦耳定律P = I²R，发热量就小了，电机效率就高了！
    
-   续航更长了！对于电动车来说，同样的电池，跑得就更远了！
    
-   硬件压力更小了！电流小了，对你的逆变器、功率器件都是一种解放！
    

这样的波形，是对我们前面所有理论分析和代码工作的最高奖赏！它雄辩地证明了：我们的“术”，成了！

总结

三篇文章的时间，我们一起完成了一次从理论到实践的伟大穿越！

1.  第一讲，我们懂了“物理”：知道了IPM电机可以利用负的id来产生额外的磁阻转矩。
    
2.  第二讲，我们通了“数学”：通过微积分，推导出了计算最优id的“黄金配方”。
    
3.  第三讲，我们精了“工程”：我们学会了如何考虑噪声、如何编写代码、如何通过实验来验证我们的成果。
    

至此，关于MTPA的“术”，我们已经修炼完毕。大家不仅看懂了这本Cypress的“实战手册”，更重要的是，掌握了一套完整的、从分析问题到解决问题的工程方法论。

我希望大家记住，成为一名优秀的工程师，既要有Simulink那样的“云端视野”（道），也要有Cypress这样的“落地能力”（术）。只有“道”“术”合一，你们才能在未来的技术道路上，所向披靡！

感谢同仁们的坚持与思考！

  

参考文档

Infineon AN205350 FM3 MB9BFXXXX/MB9AFXXXX Series MTPA 

文档链接：https://www.infineon.com/assets/row/public/documents/30/42/infineon-an205350-fm3-mb9bfxxxx-mb9afxxxx-series-mtpa-applicationnotes-en.pdf

避免退学：

链接1：[PMSM世界的“五指山”：孙悟空也逃不出的物理法则](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484410&idx=1&sn=41857e59fb5e8ef4f6af2cc9ae5a656e&scene=21#wechat_redirect)

链接2：[寻龙诀之PMSM点穴：如何在约束迷宫中找到最优工作点的唯一“生门”？](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484417&idx=1&sn=a5338aeb0c763b2ef407970f3917f08b&scene=21#wechat_redirect)

链接3：[“制表”的艺术：如何为PMSM的MTPA打造一本“通关答案集”？](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484418&idx=1&sn=778ceeef056915c1166c92f97b58fed8&scene=21#wechat_redirect)

链接4：[MTPA三维查表代码从0到1生成及测试操作指南](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484501&idx=1&sn=934052b6b2f9562c21efa9d909bf4208&scene=21#wechat_redirect)