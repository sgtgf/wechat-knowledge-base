# 三相异步电机V/F控制实现详解

原创 电机新视界 2024-05-29 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/Vno4heD63msSGAnKTcqtuQ](https://mp.weixin.qq.com/s/Vno4heD63msSGAnKTcqtuQ)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0sJibYo1mjjlBUy3ZgNmrzLy9yFB55M3ia3QbhTHkPD89jpIuyCLbLz50mBiaPaJlTXvbMzevSff3vsw/640?wx_fmt=jpeg&from=appmsg)


来源：ServoMan

  

在学习异步电机V/F控制时，首先要有整体框图，这样会有一个整体概念，我们不能舍去整体而钻进局部，到头来可能花了不少精力，费了不少时间，但可能会迷失方向，最后一事无成。整体的，动态的概念很重要。

      VF控制整体框图如下图所示，

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqENia3afvR2ojcD1jQ3Nu5ibaoibibBYVoGagSK9XuFiaZBC2XvT2PgXIL7g/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

图 1.1

      在上面框图中，我们跳过DSP底层驱动，直接从软件模块的角度来讲解异步电动机的控制方式，关于DSP怎么产生驱动信号(PWM)的,还会仔细分析。从上图中我们可以看出，整个V/F控制方式有五个软件模块，分别为RAMP\_CNTL, V\_HZ\_Profile, SVENG\_MF, PWM\_DRV，三相逆变模块，最后一个模块是硬件实现。

      这么多模块一看可能就觉得很麻烦，别着急，我们一步一步分析，其实很简单，一切都是纸老虎，捅破了，就看的很清楚了。要提醒大家的是，上面软件模块全部在DSP的T1周期中断中执行，这样我们可以精确地知道这个模块的执行频率，并根据执行频率精确计算电机要达到的转速，以及MFuncPeriod周期。在试验中，我用的中断频率是10KHz，也就是每100us执行一次。

**RAMP\_CNTL模块：**

      该模块的作用就是为了实现电动机的平滑变速控制。试想如果我们将电动机从200rpm变速到1000rpm，如果不加斜坡函数，电动机会一下子从200猛涨到1000，很突然，为了让电动机慢慢的变速到高速或者低速，我们添加此模块。这个模块有三个接口，一个输入TargetValue，两个输出SetpointValue和EqualFlag。**软件工作原理是**：比如我设定一个TargetValue为100,而此时我的SetPontValue是0，那么两个数值不相等，SetPontValue小于TargetValue，SetPontValue就要进行增操作。当然每次增加或者减少的步长自己设定，最好是设定最小单位1或者更小，打个比方，如果设定为15，那么SetPontValue到达90的时候，再增加一次是105，SetPontValue大于TargetValue，又会减操作，来回震荡，电动机不稳定。我们还是以1来讨论，因为试验中我们设定的1每中断一次，SetPointValue就会加1 （减1），这样中断100次才能到目标值，如果觉得时间太短，可以设置一个内部延时，来统计中断次数，比如中断20次，SetPontValue加1。这样，当我们设定好TargetValue时，会平滑的去靠近它。它的实现方式是一个结构体，在后面讲解时，每个软件模块都是一个结构体。

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqscmSLYXKrdWTqogvibMbKAicmmWTvQLvibkIpdkQ8Yrp44I125HYHvGGA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

      结构体中，\_iq我们已经定义为long类型的数据，因为在软件模块中，所有的数据都是采用IQ格式进行的。试验中，我采用的是IQ20格式进行计算的。IQ格式是为了提高计算精度，IQ是这样运算的，\_IQ(0.5) = 0.5乘以2的20次幂。20是我自己设定的，当然，你可以设置成任何次幂。我们分析一下上面的结构体，TargetValue是目标数值，RampDelayMax是内部延时，RampLowLimit是最小输出，RamHighLimit是最大输出，我分别设置为\_IQ(0.0)和\_IQ(1.0)。

      RampDelayCount是执行次数统计。SetPointValue是当前输出值。EqualFlag是标志位，当TargetValue数值和SepPointValus数值相等时，标志位置为1。(\* calc)是一个指针，指向执行此计算的函数。我们在给定SpeedRef时，一般都是写成\_IQ()格式，比如\_IQ(1.0)表示电动机要额定转速运行，我用的电动机是2800rmp。\_IQ(0.2)表示电动机要560rmp运行。其实采用IQ格式有点像归一化操作，使得数据计算和观察更为直观。此软件模块代码如下：

void ramp\_calc(RMPCNTL \*v)

{

      if(v->TargetValue != v->SetpointValue)

     {

      v->RampDelayCount+=1.0;//计数加1

      if(v->RampDelayCount >=v->RampDelayMax) //延时时间到

      {

         v->RampDelayCount=0;//将计数清零

        if(v->TargetValue >= v->SetpointValue)

        {                                   

           v->SetpointValue += 1;

          if(v->SetpointValue >= v->RampHighLimit)

           v->SetpointValue = v->RampHighLimit;

        }

        else

        {

          v->SetpointValue -= 1;

          if(v->SetpointValue < v->RampLowLimit)

          v->SetpointValue = v->RampLowLimit;

        }                                   

     }

 }

 else

 v->EqualFlag = 1;

}

      加上代码后，你会对该模块有更好的理解。真是千言万语不如一行代码呀。

**V\_HZ\_Profile模块：**

      为什么要加上这个模块呢，我们加上220V或者380V电压，单单改变供电频率不就实现变频了吗，我以前也是这么想的，但是事实不是这样的。当电动机要实现大扭矩的时候，外加电压必须要高，这无可非议，但是请注意，三相异步电动机是感应电流产生旋转磁场，旋转磁场切割转子线圈，转子线圈产生感应电流，感应电流受到电磁力的作用，带动转子旋转。根据电机学理论，交流异步电动机的定子绕组的反电动势是转子绕组切割旋转磁场磁力线的结果，其有效值可由下式计算：

E=KfΦ  (1-1)

式中：K－与电动机有关的常数；f－电源频率；Φ－磁通。而在电源一侧，电源电压的平衡方程式为：

U=E+Ir+jIx   (1-2)

该式表示，加在电机绕组端的电源电压U的一部分产生感应电动势E，另一部分消耗在阻抗(线圈电阻r和漏电感x) 上。其中定子电流：

I=I1+I2(1-3)

分成两部分：少部分(I1)用于建立主磁场磁通Φ，大部分(I2)用于产生电磁力带动机械负载。当交流异步电动机进行变频调速时，例如频率f下降，则由式(1-1)可得E降低；在电源电压U不变的情况下，根据式(1-2)，定子电流I将增加；此时，如果外负载不变时，I2不变，由式(1-3)可知，I的增加将使I1增加，也就是使磁通量Φ增加；根据式(1-1)，Φ的增加又使E增加，达到一个新的平衡点。

      理论上这种新的平衡对机械特性影响不大，但实际上，由于电动机的磁通容量与电动机的铁芯大小有关，通常在设计时已达到最大容量，因此当磁通量增加时，将产生磁饱和，造成实际磁通量增加不上去，产生电流波形畸变，消弱电磁力矩，影响机械特性。

      为了解决机械特性下降的问题，一种解决方案是设法维持磁通量恒定不变，即设法使下式成立，

E/f=KΦ= 常数  (1-4)

      这就要求当电动机调速改变电源频率f时，E也应该作相应的变化，来维持他们的比值不变。但实际上，E的大小无法进行控制。由于在阻抗上产生的压降相对于加在绕组端的电源电压U很小，如果略去的话，则式(2-2)可简化成：

U≈E   (1-5)

      这说明可以用加在绕组端的电源电压U来近似地代替E。调节电压U，使其跟随频率f的变化，从而达到使磁通量恒定不变的目的，即：

E/f≈U/f= 常数 (1-6)

      所以在变频的同时也要变压，这就是所谓**VVVF**(Variable Voltage Variable Frequency)。简言之就是频率降低，供电电压也要降低。二者存在线性关系。

      在进行变频时，我们向低速进行调速时候，只要保证磁通量最大，电动机的机械特性仍会保持很硬的机械特性，但是当电动机转速低到某个转速时，转矩会随着转速的降低而减小，造成电动机带负载能力下降，此时的转矩为临界转矩。为什么会出现临界转矩呢？可能有的朋友已经猜到了。

      临界转矩可以这样解释：上面提到过，为了使电动机定子的磁通量Φ保持恒定，调速时就要求使感应电动势E与电源频率f的比值不变，即E/f=常数。我们讨论电压和频率的关系的时候，电源电压U分成两部分，一部分是感应电动势E，另一个部分是消耗在阻抗上，消耗在阻抗上的电压很小，相对于电源电压U很小，我们将其省略，所以得出U≈E,请注意，我们之所以能够得出E/f=常数是以省略阻抗电压为代价的。当转速较高时，感应电动势E比较大，阻抗电压忽略不记，电动机的机械特性很硬，但是当转速降低时，供电电压U成比例降低，感应电动势降低，但是阻抗电压却不随着转速成比例降低，这样，阻抗电压在U中的比例会升高，这时候U≈E已经不满足，如果仍以U代替E，会产生很大误差。因为阻抗电压的增大，使E降低，E/f的比值减小，造成磁通量Φ减小，因而导致电动机的临界转矩下降。

      变频后机械特性的下降将使电动机带负载能力减弱，影响交流电动机变频调速的使用，因此人们想办法来解决这个问题。一种简单的解决方法是采用**V/F转矩补偿法**。

**V/F转矩补偿法的原理是**：针对频率f降低时，电源电压U成比例地降低引起的U下降过低，采用适当提高电压U的方法来保持磁通量Φ恒定，使电动机转矩回升。因此，有些变频器说明书中也称它为转矩提升(torque boost) 。

在本次试验中我采用的补偿曲线是这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqWRb54hibQr5KxVLEwEJiaCytexepdVDfIspESH6UhHTF3poT3XPFtHVA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.2

      就是在频率低于10Hz时，供电电压稳定在75V，这样在低速的时候，电动机的机械特性比较硬。当然上面默认的是逆变器的供电电压是380V。但平时实验室，实验室供电时220V，所以我们还需要将上面的特性曲线改写称如下：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqBseiapbnHdXwpG8IVm9CYxu77mwib77cvMrfKwMtE1bLWc4yB9uic2ngA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.3

      到这里我们大家应该就明白了为什么不只是单单控制频率，而是同时要改变电压了吧。在此模块中，利用软件来构造图1.3所示的曲线就可以啦。该模块的结构体如下：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqzZFOIlojdicoKFtXHzic1Z82GgF7ibFGICYy1WbiaUoTlSjjMHYjzXaJibA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

      按照图1.3的曲线图来解释这个结构体，LowFreq就是图1.3中的10Hz，HighFreq就是30Hz，FreMax就是50Hz，VoltMax就是220V，VoltMin就是75V。

**SVENG\_MF模块：**

      这个模块是我在学习异步电动机过程中花费时间最长的一个模块了，因为不但需要很深刻的理解，也需要大量的数学公式推导，所以介绍这个模块我自己觉得有点吃力。我们先看看这个模块的输入和输出，先整体上说一下这个模块的作用。

      此模块结构如下：

**![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5Xq7859OYY7PmRHQv7Nq5tIXFPJ0vtHtBiagDAFOom9kcEZtWrzUgaiaMpw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)**

      可以看出，该模块有三个输入，三个输出，输入分别是：Gain，OffSet和Freq。**Gain是前一个模块的电压输出**，当Gain等于0时，输出波形幅值为0，当Gain等于1时，输出波形幅值最大。Freq决定了输出波形的变换频率。OffSet设置偏移量，此处为0即可。输出为Ta，Tb，Tc。这三个量的输出类似于正弦波，可以看出，经过该模块，可以产生类似于模拟正弦波的波形，再通过PWM控制电动机。输出波形如图1.4和1.5：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5Xq52cfnFyHFJvPKvVoLo4DUBryFsPoHLe0JqylJmZib9Rj9nd9SNsyDCg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.4

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5Xq48ibaCgJcqWg1uNpJV9FM0nKxV8t4wZtVfFkvEM2yj13rYPuOyUJGww/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.5

      前三个波形分别是Ta，Tb和Tc，第四个波形是Ta – Tb，**波形的幅值由Gain决定，但是Gain的数值由Freq决定，所有输出波形的幅值和频率都是由Freq决定**。下面我们仔细讲一下怎么产生上面类似正弦波。

      我们前面讲过，逆变电路两端的供电电源是交流电经过整流之后的直流电DC。逆变器的示意图如图1.6所示：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqSaAASuJXZiceiajVzlXcYOCMAx0132mFu2f9GIicg3SQQ5PXWjmkX95Bw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.6

      对于上面的开关管，我们用a，b，c来表示，1表示关闭，0表示打开，因为a和a’不可能同时关闭，所以知道了a，b，c的状态，就知道了a’，b’，c’的状态了。a,b,c一共有八种组合状态，电动机的接线方式为星形接线，其线电压VAB，VBC，VAC，相电压VAN，VBN，VCN以及直流母线电压VDC见图1.7。

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqxBX5jQTLIibfQPfDcIgJyrAYDNE6AMPP8xa6fPFTyGoszCWgfxB3yGg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.7

      上面是三相相差120度的A,B,C三个坐标轴，为了便于分析，我们可以将其变换成相差90度的两个坐标轴(d-q轴)来分析，这个变换叫做clark变换，变换公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUSAzEckK4s27P26rcEDsym5Yx0AAuZc9ZSPqtUHvzkSmBAWJFtsJK4FVACSxfn5R3Hhf5DFgxmryw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

      为了更形象的说明这种变化，我们拿两幅图片来说明，图1.8是相差120°的三相电流，图1.9是相差90°的两相电流模型。

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqU0t1DYbu9bwMUUnerjRtTUrxfWfMNxgPialribziaM57qY78PJibL4JGQA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.8

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5Xq3XPTqe5rDXwRK4Bo493mW4l0gFzUNg84RqG7Mtzq3TtNEZAUaK3DSg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.9

      经过clark变换之后，a，b，c三相开关的开关状态和Vds和Vqs的数值之间对应关系如下：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqQsvoCkc8nuiabyhaRuCsL0xIegO4iblE3Pjurdrf6O9tL1qoTsp3zfxg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.10

      虽然a，b，c有8种组合，但是全0和全1不会使电动机转动，称为**零扇区**。所以一共有六种组合状态，这6种组合状态分别对应6个扇区，U0(001)表示(c,b,a) = 001时对应U0扇区。扇区如图1.11所示。

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5Xquj4eOTJ8ESicJSHteZZmiaSTa8sDEdpVJaVNQwZJKc3ibrjQLQwxZyNCw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.11

      每个扇区的电压大小如图1.12所示。它的大小已经被最大相电压所归一化。我们知道当母线电压是VDC时，那么线电压也就是VDC，那么最大的相电压就是VDC/√3。那么由表1.10可知道，基本扇区的电压大小是2VDC/3,那么被相电压归一化之后变成2/√3。合成电压的大小和所处扇区由上面表格中的a,b,c组合来合成。例如合成电压处于扇区1，也就是U60和U0之间，这时候，合成电压的大小和角度可以由U60和U0来组合，但是也可以由dq两个相互垂直的电压表示，只是表示方式不同罢了。我们通过下面的一幅图片来说明这个公式的推导：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqAy7ibwXMEdhtJCHHJnz2wnIIXsYAum8InUETssx5ibiaiamemQvwmq8n3w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.12

      上图中，UX和UY分别是U60和U120，合成电压的大小由相邻的基本扇区的大小和作用时间决定，所以

V\*\= dxUx + dyUy + dzUz

        这里一定要加上零扇区，起到调整作用，dx和dy分别是相邻两个扇区的作用时间。因为这三个电压的执行时间必须在PWM周期之内，所以三个电压矢量的作用时间比例相加为PWM周期，转换成比例为：dx + dy + dz =1，那么此时的V\*也可以写成如下格式：

V\*\= MVmaxeja = dxUx + dyUy + dzUz

M是调制参数，Vmax所使用的相电压。将V\*分解成两个扇区的表示形式为：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqhpMLX0SADDicnI9PvxyRQibGwbJXXEtuFibqBQZyria7lh47vFA3K0edHA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  因为电压已经被相电压归一化，所以Vmax = 1，我们知道|Ux|和|Uy| = 2/√3，可以得出：

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqOhrZtKFGwUibz85p5vribY22XosGml3qMwlHSFSIA7A374TWFI0gxlTw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

      这个公式可以应用到任何扇区，因为我们知道了α和M，就可以求出dx和dy，问题是我们怎么得出M和α呢？其实这里的M就是我们所输入的参考电压增益Gain，当**Gain = 1**的时候，是**满调制**，电动机供电电压达到最大。那么α怎么的出来呢？我是这样实现的：在初始化的时候将α的数值设置为零。我们使用T1周期匹配中断来执行电动机驱动程序的，中断频率为10KHz,我们已经知道了电动机需要的频率Freq，那么旋转角度的计算公式是这样：

α=α+ Freq\*50\*2\*π/10K,当Freq = 1的时候，也就是电动机在全速运行，那么α每秒钟走过的角度为：100π，说白了就是50圈，即电动机供电频率是50Hz，正好和我们的交流电频率一样，当然如果电动机允许，可以提高Freq来提高电动机供电频率。这样，我们的α数值可以像打点一样做旋转运动，响应的合成电压矢量也就跟着转，产生旋转磁场，驱动电动机。

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5Xq8UrKzpKEsfDcTba4o8eqicLV3hic97h954lkWLPSjHKpCnX4pxNLGqOg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1.13

       下面我们根据扇区的执行时间来计算每个全比较单元的比较数值，这样我们可以设置全比较单元CMP寄存器的数值来产生波形。上面是三个PWM波形，由图1.13可以推出：

Ta = (T – dx –dy )/2

Tb = Ta + dx

Tc = T - Ta

      如果我们将第一项用T1来表示，即：T1 = (T – dx –dy )/2，那么Ta,Tb,Tc的表示在下表中给出了。

![](https://mmbiz.qpic.cn/mmbiz_png/xXA9hI7SeUQOHA96IXhWQuruicmNnj5XqicUPdmT5Xz8KMow1dpl96ckTfnN7PziagJ2tTOC0WYkc5g2nv4V5ItaQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

      当我们根据α判断出所处的扇区后，根据这个表，可以得出Ta，Tb,Tc的比例数值，乘以周期后，可以得出CMP1，CMP2和CMP3的数值，我们更新一下就OK了，这样可以产生近似正弦波的波形啦。**一定注意**：这里的Ta,Tb,Tc是一个小于1的比例数值，这个比例是相对于T的。T是定时器的中断周期。

**PWM\_DRV模块**

      这个模块很简单了，就是根据所输入的比例，来计算比较单元的比较数值，这个模块有四个参数，前三个是全比较单元的比较值，第四个参数值中断周期数值。这里不再简单介绍了。

      至此，我们的电动机差不多就能够驱动起来，当然这只是一个简单的驱动，要想更好更稳定的驱动电动机，我们还需要加上速度PID和电流PID等等，可以使转速稳定，也可以避免在供电电压发生波动时影响电动机运行。

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

[强制执行电机能效！2023年工信部发布最新工业节能通知！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552223&idx=1&sn=9a79a63e6376dc92a45d3945ccfccbc4&chksm=cede4d1bf9a9c40d9fa969d4856721610e61d357988dde293f59cbc0994f971b7dc168c64b0c&scene=21#wechat_redirect)  

[又一“千亿级”来了！高效电机再上央视！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247549961&idx=1&sn=3138aaff5c66723c28a9499b551d3399&chksm=cede45cdf9a9ccdbd20ddd6eb429e4a1cf67bb758cb509a84cf1b292a9887047cfa38edcc451&scene=21#wechat_redirect)  

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

[一路走来，风雨兼程，江西这家企业有太多故事！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552832&idx=1&sn=0691f10025dc8233e2c704ede28ff691&chksm=cede4e84f9a9c79222cf4bb485f1f3e0eb9f33f37ceff89c3ef6bf2136aa0cc5176d46b97555&scene=21#wechat_redirect)

  

[三十年磨一剑！卧龙电气背后不为人知的秘密！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247553465&idx=1&sn=ce7240d5584ea18953b6e135546f0b7e&chksm=cede507df9a9d96b56d7b338b3f7006b29e5756c9c90bc5606002a402f4c3ffe5d991ac8ba3b&scene=21#wechat_redirect)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)