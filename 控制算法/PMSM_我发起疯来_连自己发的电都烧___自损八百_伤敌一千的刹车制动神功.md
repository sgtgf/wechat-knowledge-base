# PMSM：我发起疯来，连自己发的电都烧！——自损八百，伤敌一千的刹车制动神功

原创 傅存敬 电磁散人 2025-10-23 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/dG5kqJuOKHhp39hB\_\_149Q](https://mp.weixin.qq.com/s/dG5kqJuOKHhp39hB__149Q)

今天，咱们要解决一个特接地气，但也特让人头疼的问题。你们知道，现在很多工厂里的机器，为了省钱，用的都是最便宜的那种变频器。这种变频器，就像个“铁公鸡”，能量只能从电网流向电机，绝对不许倒着流回来！

这就尴尬了。当咱们的机器要紧急刹车的时候，电机就变成了发电机，发出来一大堆电。这些电回不了家（电网），只能在自家门口（直流母线）瞎晃悠。结果就是，把家里的大水缸（电容）给撑炸了！BOOM！

怎么办呢？传统的办法是，在旁边再装个大火炉（制动电阻），把这些多余的电全烧成热，浪费掉。但这不就又花钱，又占地方，还容易坏吗？

今天这篇论文的作者，是个绝顶聪明的小机灵鬼！他说：“我自己就是个火炉，干嘛还要再买一个？”他的方法，就是让电机自己发烧，自己把自己的电给烧掉！

咱们接下来就跟着作者学习这套“自损八百，伤敌一千”的制动神功！

第一章：核心矛盾——“发电量”vs“发热量”

首先，咱们要明白，电机在刹车的时候，身体里同时进行着两件大事：

1.  发电（坏事！）：它在把机械能变成电能，我管它叫再生功率Pg。这个电越多，咱们的“水缸（母线电容）”就越危险。
    
2.  发热（好事！）：流流过电机线圈时，线圈会发热，这就是铜损，我管它叫耗散功率Pcu。这个热，能帮我们消耗掉电能。
    

作者的惊天妙计就是：我只要控制得好，让我自己的“发热量”永远比“发电量”大，不就没电去冲击水缸了吗？

这就是本文最核心的能量对冲思想（Pcu≥Pg）：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWxORKaslXT51W91W7P4sN8BZHTong0uyoGIdgOX93bxdfG1WZDHoiahA/640?from=appmsg)

只要满足这个不等式，我们就是安全的！

我们再来看看这两个功率是怎么算的：

-   发电量Pg: 
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWwdibDicHmzZBL0wnWgUYwxLmiaGEaBzav6OI9xIZQlSt8dEgCQiaw7WWGw/640?from=appmsg)

它的“发电量”主要跟我们的“魔法值”isq（q轴电流）成正比。

-   发热量Pcu: 
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBW0EUpib9ovP6gibLVb7Ux4BFpgzlxPN3EU8wQDo6vAibBAQVcKugCH5tyQ/640?from=appmsg)

它的“发热量”跟两个“魔法值”isd和isq的平方和成正比！

看到了吗？我们的武器库里，有两个可以操控的“魔法值”：isd和isq。isq既能发电，也能发热；而isd呢？它虽然不怎么会发电，但它是个纯粹的发热工具人！

这就给了我们巨大的操作空间！

第二章：神功秘籍——“发热工具人”isd的妙用

现在，我们的目标是：

1.  刹车力要最大！这需要一个很大的负isq。
    
2.  同时要安全！这需要Pcu≥Pg。
    

如果只靠isq自己，可能它发的电比它发的热还多，就不安全了。怎么办？

请“发热工具人”isd上场！

当isq产生的发电量Pg太大的时候，我们就往系统里注入一个负的isd。isd不怎么发电，但它能疯狂地增加总的发热量Pcu！这就相当于，你一边在用冰块（isq）降温，一边又在旁边点了个大火炉（isd），只要火炉够旺，总温度就不会降下来！

作者通过如下精密的数学计算：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWyKLvcblIFQMHfh80F5uWkoWvKPBKN9vcOicwPXhiaHZmVNxbMefofdxw/640?from=appmsg)

为我们画出了一张在不同速度下的“最佳电流走位图”。

请全体同仁，目光锁定这张武功总纲——图1！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWf6UN6iaD4ASbtwahMiakxETiaeY8aF9AsFjWVVlYBicVFGktV5scWicst7Q/640?from=appmsg)

这张图就是我们算法工程师的“藏宝图”！

-   那个大圆圈(current limit)是我们的活动边界，电流不能跑出去。
    
-   Q轴左侧虚线椭圆(voltage limit)是高速时的“禁区”，跑进去就会“电压不足”。
    
-   D轴下面的虚线椭圆(power limit)刹车时的是功率限制，就是我们之前说的Pcu≥Pg条件。
    
-   那条红色和蓝色的走位线，就是作者为我们规划的，从高速到低速的最佳刹车路径！
    

路径解读：

1.  高速起步：此时发电量Pg巨大，非常危险！我们必须注入一个巨大的负isd（看，起点在d轴负半轴很远的地方！），让电机疯狂发热来消耗能量。同时，isq也是负的，提供刹车力。
    
2.  中速滑行：随着速度下降，发电量Pg变小了，危险解除。我们就不需要那么大的isd来发热了。于是，isd开始慢慢变小（向0靠近），而把更多的电流份额让给isq，让它专心提供刹车力。
    
3.  低速冲刺：速度很低时，几乎不怎么发电了，安全得很。此时我们的唯一目标就是最大刹车力！于是，我们让“发热工具人”isd下班（isd\=0），把所有的电流都给isq（isq = -Imax），让它爆发出最强制动！
    

第三章：双重保险——“监工PI”的最后防线

作者想得非常周到。他说：“万一我的计算有点误差，或者电机参数变了，导致‘发热量’还是没干过‘发电量’，水缸电压还是往上涨了怎么办？”

于是，他设计了一个“双重保险”。

请看这张系统设计图——图2！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWpiaDShghgH81n3yoz5mNX7VgpEcSNNEHYich1F2ua736QacIoxmrCeHQ/640?from=appmsg)

他增加了一个PI调节器，这个调节器就像一个兢兢业业的“监工”。

-   它的眼睛：死死地盯着咱们的“水缸”电压Vdc。
    
-   它的圣旨：有一个绝对不能碰的红线电压Vdcmax。
    
-   它的操作：一旦发现Vdc快要碰到红线了，它立马就急了！它会立刻发出一道指令Δisqref，去修改我们原本计算好的isq。怎么修改？就是强行让isq不要那么负，让它往0的方向靠拢一点。
    

isq不那么负了，意味着什么？意味着发电量Pg立刻就减小了！这就从源头上掐断了冲击“水缸”的能量来源！

给工程师的启示：

-   算法工程师：你的主程序，就是执行图1的“最佳走位”。但你必须再写一个后台监控线程，就是图2这个“监工PI”，作为你的最后一道防线！
    
-   硬件工程师：你要为这个“监工PI”提供精确、快速的Vdc电压采样。如果你的采样又慢又不准，那等“监工”反应过来，水缸已经炸了！
    

第四章：实战演习——让数据展示肌肉

作者在电脑里模拟了这套神功，结果怎么样？

看图5中的Vdc电压：在刹车过程中，母线电压确实升高了，但被牢牢地摁住了，离500V的危险线还远着呢！“监工PI”立功了！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWqVKZv1BMuiamlOC0BlRYQxLXMtnOEbBxkVFlFCGHHKk5nOl97BQSsqw/640?from=appmsg)

看图6中的Te转矩：你们看那根转矩线，从正2Nm的驱动力，瞬间干到了将近\-4Nm的制动力！这刹车效果，杠杠的！比很多带制动电阻的方案还要猛！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhDv9JL4KfaoAScfUOdTBWf6KZeWPOExXTjG4IWNGntmFCia6iazypHWibbxf6zj7BXiaWLxjrhfRovw/640?from=appmsg)

总结：

今天，我们跟作者学到了一套真正的“空手套白狼”刹车大法！

-   To 算法工程师：你掌握了一套无需硬件成本，就能实现超强制动的核心算法。你的代码，就是让电机在“发电”和“发热”之间跳起完美的平衡之舞。
    
-   To 硬件工程师：你明白了，即使是最低成本的“铁公鸡”变频器，通过优秀的软件，也能爆发出惊人的潜能！你的任务，就是提供稳定可靠的平台，让算法尽情表演。
    
-   To 电机设计师：你设计的电机，它的内阻Rs（发热能力）和电感参数，直接决定了这套神功威力的上限！一个好的“体质”，能让这套自损功法的“损”降到最低，而“伤敌”效果达到最强！
    

这篇论文的智慧就在于：面对限制，不一定要花钱去消除它，而是可以利用它，甚至把它变成我们的武器！

好了，今天的分享就到这里！希望大家以后在遇到工程难题时，也能开动脑筋，想出这样不花钱还能办大事的绝妙点子！

  

参考文献

\[1\] Jevremovi V R ,Jefteni B .AN EFFICIENT BRAKING ALGORITHM FOR INTERIOR PERMANENT MAGNET SYNCHRONOUS MOTORS\[J\].\[2025-10-16\].

文档链接：ttps://pan.baidu.com/s/16mVMQp0Yw1OS4O6nih1BjQ?pwd=fc86 提取码: fc86