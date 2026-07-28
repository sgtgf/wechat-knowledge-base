# DC-DC-7：DC-DC的输出电压调节模式


> 原文地址: [https://mp.weixin.qq.com/s/0QMeGoYW0NwCOLTzzIdegw](https://mp.weixin.qq.com/s/0QMeGoYW0NwCOLTzzIdegw)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSODaWmCrFrkLqnWd0v37cpKuI4NROwvLKHKjgHa2XSkRNe0CeSJgw3K31Ncn5XuyyTXicLkRDS9sw/640?wx_fmt=png)

__**_★★★_**____**_DC-DC-7---输出电压调节模式_**____**_★★★_**__

引言：PWM和PFM是两种DC-DC转换器的输出电压调节模式，两种模式的原理和性能是不一样的，尤其体现在重负载和轻负载时的效率。简单地讲，DC-DC转换的过程就是将直流暂时转换成交流，对其进行平滑滤波处理后再转回直流。

_€1.PWM_

PWM（Pulse Width Modulation）：脉冲宽度调制，即驱动信号为恒定频率，但是改变一个周期内的高低电平比例（占空比），如_**图7-2**_（此图是将几种负载情况下波形放到一起，实际一种负载场景时只有一个PWM ON/OFF比）所示，PWM 由于频率恒定，因此无论负载如何都会恒定切换，固定一个周期T内有总一个FET打开，开关次数也会相同。所以存在Rdson损耗，在负载较轻时效率会显著降低。而PFM则能够在轻负载时减少开关次数（理解为频率变慢），从而可以保持效率。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSicibM5Bf9cuFxULVmYbn4u1nEFH6ibmw289k021icMxhTpdOsRfl9TGGZpQ/640?wx_fmt=png)

**_图7-1：PWM产生原理_**

_**图7-1**_简单表示了PWM信号的产生过程：输出的两个分压电阻出来做采样信号，然后通过一个补偿器和精准源的比较，再把输出的误差信号和一个固定频率Ramp(三角波比较)，得到固定周期的脉冲，开关频率由PWM斜坡信号（三角波）频率设定（实际决定开关频率的是输出Iout大小，Vout的值并不会显著影响开关频率的选择，这一点需要分清）。脉冲信号经由DRV驱动器驱动上下MOS开关。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSicUO1RxwUF3X3LkdIG4ovGmmBhXDsRJ63CR0jNVOaglk21E4ak2kApeQ/640?wx_fmt=png)

**_图7-2：PWM模拟波形_**

PWM的特点是周期恒定，ON/OFF时间比变动，在轻负载时使用PWM，由于频率恒定，开关损耗导致效率劣化，但频率恒定，更易于过滤噪声，Vout纹波较PFM小。

_€2.PFM_

PFM（Pulse Frequency Modulation）：脉冲频率调制，即驱动信号为变频，ON的时间恒定，来调整OFF时间，或者OFF的时间恒定来调整ON的时间，等效周期T变动（_**图7-3，此图是将几种负载情况下波形放到一起，实际一种负载情况只对应一个PFM周期**_）。本质上是一个间歇式接通和关断的固定频率 (PWM) 的转换器。在效率方面，PFM更具优势，所以也叫低功耗模式，可以在较长时间段内只保持一个FET打开，但由于PFM的开关频率会随负载的变化而变化，因此开关噪声的频率不确定，从而难以滤除噪声。另外，如果频率发生变化并进入可听频段，有可能会产生振铃问题。PWM由于频率恒定，可推测产生噪声的频点频率和倍频频率，易于滤除噪声。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSic490GN2frpzbQBZNwlqRgqbb5ZZUhswKp0ZAxTMbDH8U8D7micLAbicOQ/640?wx_fmt=png)

**_图7-3：PFM模拟波形_**  

PFM的特点是ON时间恒定OFF时间变动=周期变动，降低频率后工作，开关损耗减少，但是变频特性，导致后级滤波比较有难度。从Vout纹波来看，纹波变大，因为它这种模式下已经不是每个周期都调整PWM，而是反馈信号到了窗口比较器的上限或者下限的时候才做出调整。

_€3.PWM到PFM的切换_

PFM模式通过减少振荡，降低开关损耗来提升效率，当增加负载时，振荡慢慢减少，最后变为PWM模式，**_图7-4_**到_**图7-6**_逐渐演示了这一过程。脉冲跳跃间隔（PFM）取决于负载，随着负载的增加，开关脉冲出现的频度增高（例如在40mA时每6.5us出现一次，而在1mA时则是每100us出现一次），如果负载继续增加到一定程度，则转换器将进入恒定频率（PWM）模式。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSicGiaJibdOBrWJ2WibZtWkvmpcnoglXwj3ELYbn51NHZPmlN0Qo96BzkelQ/640?wx_fmt=png)

**_图7-4：PFM模式，Iout=0A_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSic4vGrtAUul65KqhuHKicGMfJdaKNM4iakIpqZv2zd7UqrLq5b03jx01LA/640?wx_fmt=png)

**_图7-5：PFM模式，Iout=0.2A（轻载）_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSicyXdPe93N4LCTt8hZwQ7ZicMXUAfRIU7qzd1PviaZpbsJAtPooS2tRfFw/640?wx_fmt=png)

**_图7-6：PWM模式，Iout=0.6A_**

_€4.PSM_

PSM：脉冲跨周期调制，即驱动信号定频定宽，但是脉冲时有时无，当负载变轻时，驱动信号就会跳过一些开关周期，在被跨过的周期内，开关功率管一直保持为关断的状态。当负载发生变化时，通过改变跨周期出现的次数，来实现对系统的调整与控制（也可以将PSM理解为进阶的PFM，或者说是动态的PFM，相关波形这里不再给出，感兴趣的可以自己绘制）。PSM有更高的效率，并且其开关损耗与系统的输出功率成正比。但是这种调控方式，会使输出电压有着比较大的纹波电压，不适合用于为对电源电压精度要求很高的一些系统供电，所以PSM的运用比较少见，更多以为PWM配合PFM为主。