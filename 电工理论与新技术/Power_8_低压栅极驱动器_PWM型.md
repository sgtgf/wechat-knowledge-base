# Power-8：低压栅极驱动器-PWM型


> 原文地址: [https://mp.weixin.qq.com/s/fsrZgNU-mONhUU0eIG3ENg](https://mp.weixin.qq.com/s/fsrZgNU-mONhUU0eIG3ENg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCO0PPcVrWOsJkLyuyY4lau2m8rZ4B1zURdc3pg77Cxp4bL0R6SOxFtg/640?wx_fmt=png)____**★★★**______Power-8---低压栅极驱动器______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：对于中压或高压的电源系统，对MOS组的要求特别高，DrMOS已经不能满足设计参数要求，此时将DrMOS再次分拆开来，将驱动部分独立成为栅极驱动器。栅极驱动器的强度和抗扰度极佳，非常适用于电机驱动、家用电器、SMPS、电池供电应用和大功率照明。

____________€1.结构组成____________

在SMPS中，如**_图8-1_**所示，（Low Voltage Gate Drivers）低压栅极驱动器 （半桥栅极驱动器）即是2部分。而在电机驱动中，两个半桥栅极驱动器就可以组成一个H桥驱动器，控制电机的转速和方向，在AC-DC/DC-AC中，还充当整流器和逆变器，例如无线充电链路。每一个功率器件都需要一个驱动器（驱动芯片）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TR0qWkWQkTaj9YCnfyqAz26qX6u27trjmsFKUsSDK8zd7cZvcbmk00AZuxOfGibaiaY2DFVCCGuGySg/640?wx_fmt=png)

**_图8-1：DC-DC结构层级_**

**图8-1**中是以PWM三态模式驱动，还有另外一种两态模式驱动，本节先介绍PWM模式，下节介绍HL两态模式。

____________€2.PWM三态模式驱动____________

_驱动结构_

**_图8-2_**是一个和数字电源控制器搭配使用的半桥栅极驱动器IC内部结构图，其中VCC是独立供电引脚，BOOT和PHASE用于自举设置（BST），PWM来自于数字电源控制器的PWM输入，输入信号PWM参考SGND引脚，TG/BG（UG/LG）状态由该引脚处的电压决定。驱动器内部实现了一个嵌入式电阻器网络，如果该引脚是浮动的，内部电阻分压器会触发高Z模式，在该模式下BG和TG都关闭，Layout时该引脚上的寄生电容应最小化。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TRGVXXdBMXNzCFVSIfibDrvriaGAwGx5mTOYZlS2AU5DofibibrSHslN00K5EZXS72EXCJ87JvbKR2C9w/640?wx_fmt=jpeg)

**_图8-2：典型的半桥驱动IC内部结构_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TREvXTxRHobfPicIhPWhkKGt1FZZAL1Xuf47YoIDGfpcRJEx6J66FwSibF1O2YWwTcuO5KQ9t8glibPw/640?wx_fmt=png)

**_图8-3：典型的半桥驱动IC内部结构-2_**

栅极驱动器接收以地为基准的低电压数字PWM信号，以驱动半桥配置中的两个N沟道功率MOSFET。低侧MOSFET的栅极被驱动为高或低，在BGVCC和BGRTN之间摆动，这取决于PWM引脚的状态。类似地，高侧MOSFET的栅极与低侧MOSFET互补地被驱动，在BST和SW之间摆动。低侧驱动器和高侧驱动器都是浮栅驱动器，独特的双浮动结构使栅极驱动器输出稳健，对地噪声不太敏感，对称设计允许半桥输出是输入逻辑的反相或非反相。

而同一个PWM波可以同时驱动多个驱动器，如**_图8-4_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQZbBgkPZzKHB2hAvQ2JhVqeejQfiaiaPd18iaTRic3v9e09F2Wl8XKDKKibfficmjG7BOuqoVgRoXLVAZQ/640?wx_fmt=png)

**_图8-4：多驱动器模式_**

_驱动逻辑_

对于具有固定转换阈值的三态PWM输入，驱动器的转换阈值和三种输入状态之间的关系如**_图8-5_**所示。当PWM上的电压大于阈值VIH（TG）时，TG被上拉到BST，使高侧MOSFET导通，该MOSFET将保持导通，直到PWM降至VIL（TG）以下。类似地，当PWM小于VIH（BG）时，BG被上拉到BGVCC，使低侧MOSFET导通，BG将保持高电平，直到PWM增加到阈值VIL（BG）以上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSziaGlsHExXXCkprvMM0WyibtHoALhXMMia05dRic4hhgYiaM4qXVbK2nicEeSrQln57wQQVC3Ut1JocxA/640?wx_fmt=png)

**_图8-5：三态及其转换阈值_**

驱动器还能够将两个外部MOSFET驱动到断开状态，当PWM信号电平进入关闭窗口或三态（通常在1.2V和2V之间）时，在关闭保持时间到期后，两个MOSFET都会关闭。当控制器想要减少活动相（多相架构）的数量以降低功耗时，此功能非常有用。原则上，三态也可以用于在重负载和轻负载转换期间提高性能。

**_图8-6_**是驱动器的时序图，其中自适应交叉导通保护基于MOSFET在关断期间的栅极到源极电压，当PWM信号变低时，高侧MOSFET将开始关断，一旦高侧MOSFET的VGS放电到1V以下，低侧MOSFET就会开始导通。当PWM信号变高时，低侧MOSFET将开始关断，一旦低侧MOSFET的VGS在1V以下放电，高侧MOSFET就会开始导通。为了避免高侧MOSFET和低侧MOSFET之间的交叉导通，驱动器内部采用了自适应反击穿控制方案，这种自适应方案允许将各种不同的功率MOSFET用于不同类型的功率转换，但是为了最大限度地提高整体解决方案的效率，死区时间保持得尽可能短。

对应的VIH和VIL电平之间的滞后消除了由于开关转换期间的噪声而引起的错误触发，但是应注意防止噪声耦合到PWM引脚，特别是在高频、高电压应用中。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TREvXTxRHobfPicIhPWhkKGtwRZbestg0NqCj6jv3o5Jelg0xt5zFKIqN3NkajrRIAVXdibAnia0gyQA/640?wx_fmt=png)

**_图8-6：三态栅极驱动器时序图_**

_驱动能力_  

由于功率MOSFET通常占转换器中功率损耗的大部分，因此具备快速导通和关断特性的功率MOSFET非常重要，从而最大限度地减少转换时间和功率损耗。如**_图8-7_**所示，驱动器的典型1.5Ω上拉电阻和0.8Ω下拉电阻相当于10V驱动器电源下的3A峰值上拉电流和6A峰值下拉电流。BG和TG都可以驱动MOSFET的快速导通转变，具有以18ns上升时间驱动3.3nF负载的能力，所以一定要关注所选MOS的寄生电容和Layout电容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT4NER3vCaK0F0sbJqxhJRnd2zcoibibCCPicM1HnLSd4fVHb5ibABMuNDwL2wjHbu1fNVExRJ1w0oH5Q/640?wx_fmt=png)

**_图8-7：半桥配置中的简化输出级_**

____________€3.工作过程____________

当VCC引脚电压超过VCC上升电压阈值（VUVLO\_R）时，驱动器开始根据PWM状态进行操作。在VCC引脚电压达到VCC上升阈值之前，两个MOSFET都保持在断开状态。对于VCC，建议其上升沿的斜率高于上升UVLO阈值附近的5V/100ms。当PWM信号执行从低状态到高状态的转换（PWM电压高于2.5V典型值）时，在关断传播延迟时间之后，低侧MOSFET关断，接下来在导通传播延迟时间之后，高侧MOSFET导通。一旦接通时间到期，PWM信号从高状态转换到到低状态（PWM电压低于0.8V典型值），这将在关断传播延迟时间之后将高侧MOSFET从导通状态驱动到截止状态。

____________€4.自举电容____________

高侧MOSFET通过自举电路供电，有的内部带自举电源，有的驱动器嵌入自举二极管，因此要完成Boot网络，只需要在PHASE引脚和BOOT引脚之间添加电容。在许多情况下，驱动器经过优化已具备最佳的开关动作，因此不需要外部电阻（串联栅极驱动电阻）。根据高侧MOSFET栅极电荷来选择自举电容，以下公式给出了由于高侧MOSFET的充电而引起的自举电容两端的电压降的准确估算：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhC56ZQwiaz12ibCftKsLkVwAJdu7OfrsuqJeOFziaOYsrlszXaWT2sB5OmA/640?wx_fmt=png)

ΔVBoot是自举电压的浮动值，这通常应尽可能低，以避免高侧MOSFET的Rdson下降，一般0.1V和0.01V之间的值是可以接受的。

低侧MOSFET驱动器通过VCC引脚供电，自举电容的相同考虑因素和公式可以应用于对VCC引脚进行滤波的电容。部分驱动器还支持将驱动电压从4.5V调整到8V，这样的灵活性使设计者能够以任何所需的方式塑造效率曲线。

____________€5.注意点____________  

驱动器输出上的强下拉防止了交叉传导电流，例如在**_图8-7_**所示的半桥配置中，当BG关闭低侧功率MOSFET，TG打开高侧功率MOSFET时，SW引脚上的电压可能会非常迅速地上升到VIN，该高频正瞬态电压将通过低侧功率MOSFET的CGD电容耦合到BG引脚。如果BG引脚没有被充分压低，BG引脚上的电压可能会上升到低侧功率MOSFET的阈值电压以上，从而瞬间使其重新导通，因此高侧和低侧MOSFET都将导通，这将导致大量的交叉导通电流通过MOSFET从VIN流到地，从而造成相当大的功率损失并且可能损坏MOSFET，因此建议BG和TG引脚的PCB走线尽可能短粗，以最大限度地减少寄生电感。