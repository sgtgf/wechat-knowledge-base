# 栅极驱动 IC 自举电路的设计与应用指南

原创 硬件笔记本 2023-12-12 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/pJ8ScTIFrJiGTb3pEYaiEw](https://mp.weixin.qq.com/s/pJ8ScTIFrJiGTb3pEYaiEw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

硬件工程师应该都用过buck，一些buck芯片会有类似下面的自举电容，有时还会串联一个电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4WJ2BFfnApyD10f06YBIibpud32c1wiaQa4cZKIniaEcV9mmGgW4Y9I6Yg/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

那么你是否对这个自举电路有深入的了解呢？比如，这个电容的容值大小该怎么选？大了或者小了会影响什么？耐压要求是怎么样的？  

最近呢，正好看到ON Semiconductor的一个文档AN-6076，对于自举电路讲得相当的详细了，想深入了解的兄弟可以自己的仔细的读读，源文档可以自己去网上搜。

  

以下是文档正文。

1\. 介绍

本文讲述了一种运用功率型MOSFET和IGBT设计高性能自举式栅极驱动电路的系统方法，适用于高频率，大功率及高效率的开关应用场合。不同经验的电力电子工程师们都能从中获益。在大多数开关应用中，开关功耗主要取决于开关速度。因此，对于绝大部分本文阐述的大功率开关应用，开关特性是非常重要的。自举式电源是一种使用最为广泛的，给高压栅极驱动集成电路 (IC) 的高端栅极驱动电路供电的方法。这种自举式电源技术具有简单，且低成本的优点。

但是，它也有缺点，一是占空比受到自举电容刷新电荷所需时间的限制，二是当开关器件的源极接负电压时，会发生严重的问题。本文分析了最流行的自举电路解决方案；包括寄生参数，自举电阻和电容对浮动电源充电的影响。

  

2\. 高速栅极驱动电路

2.1 自举栅极驱动技术

本节重点讲在不同开关模式的功率转换应用中，功率型MOSFET 和 IGBT 对自举式栅极驱动电路的要求。当输入电平不允许高端 N 沟道功率型 MOSFET 或 IGBT 使用直接式栅极驱动电路时，我们就可以考虑自举式栅极驱动技术。这种方法被用作栅极驱动和伴发偏置电路，两者都以主开关器件的源极作为基准。驱动电路和以两个输入电压作为摆幅的偏置电路，都与器件的源极轨连。但是，驱动电路和它的浮动偏置可以通过低压电路实现，因为输入电压不会作用到这些电路上。驱动电路和接地控制信号通过一个电平转换电路相连。该电平转换电路必须允许浮动高端和接地低端电路之间存在高电压差和一定的电容性开关电流。高电压栅极驱动 IC 通过独特的电平转换设计差分开。为了保持高效率和可管理的功耗，电平转换电路在主开关导通期间，不能吸收任何电流。对于这种情况，我们经常使用脉冲式锁存电平转换器，如图 1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4Lg0lozZZu27jnIic7AQXUahmGZfJ11bz7KRXj3lEt3icRO7EdkDFbSNA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

2.2 自举式驱动电路工作原理

自举式电路在高电压栅极驱动电路中是很有用的，其工作原理如下。

当 VS 降低到 IC 电源电压 VDD 或下拉至地时 （低端开关导通，高端开关关断），电源 VDD 通过自举电阻， RBOOT，和自举二极管， DBOOT，对自举电容CBOOT，进行充电，如图 2 所示。

当 VS 被高端开关上拉到一个较高电压时，由 VBS 对该自举电容放电，此时，VBS 电源浮动，自举二极管处于反向偏置，轨电压 （低端开关关断，高端开关导通）和 IC 电源电压 VDD，被隔离开。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4MIE4O7bYuqefDv8UwUtHh2whz1Uic0Ipu4yAcmQ3ZYNiaahYcv5d8LWA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

2.3 自举式电路的缺点

自举式电路具有简单和低成本的优点，但是，它也有一些局限。

占空比和导通时间受限于自举电容 CBOOT，刷新电荷所需时间的限制。

这个电路最大的难点在于：当开关器件关断时，其源极的负电压会使负载电流突然流过续流二极管，如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4Dqia5oW6zMWVicrernHyJavG7feRfMcutBb7A4PseTfdicWW0K96sDiaug/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

该负电压会给栅极驱动电路的输出端造成麻烦，因为它直接影响驱动电路或 PWM 控制集成电路的源极 VS 引脚，可能会明显地将某些内部电路下拉到地以下，如图4 所示。另外一个问题是，该负电压的转换可能会使自举电容处于过压状态。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4GS1aZu6jUccGk8yFYNS5NzibQGsmT9eCCEJdtvc1qHez8EzNwJn0iafQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

自举电容 CBOOT，通过自举二极管 DBOOT，被电源 VDD瞬间充电。

由于 VDD 电源以地作为基准，自举电容产生的最大电压等于 VDD 加上源极上的负电压振幅。

  

2.4 VS 引脚产生负电压的原因

如图 5 所示，低端续流二极管的前向偏置是已知的将 VS下低到 COM( 地 ) 以下的原因之一。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4SLxkiaLIiaPiaH5XAribPkeRlFW8rC3YmzZ48qDHRdQJYxicyr6Hc15IK9g/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

主要问题出现在整流器换向期间，仅仅在续流二极管开始箝压之前。

在这种情况下，电感 LS1 和 LS2 会将 VS 压低到 COM 以下，甚至如上所述的位置或正常稳态。

该负电压的放大倍数正比于寄生电感和开关器件的关断速度，di/dt ；它由栅极驱动电阻，RGATE 和开关器件的输入电容， Ciss 决定。

Cgs 与 Cgd 的和，称为密勒电容。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe45MoIW8ysT72MySgGW5WibB81LLOJwYCKgmhUlylButNnDs7xDffhLqQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

2.5 VS 引脚电压下冲的影响

如果欠冲超过数据手册中规定的绝对最大额定值，则栅极驱动 IC 将损坏，或者高端输出暂时无法对输入转换做出响应，如图7和图8所示。

图7显示闭锁情况，即高端输出无法通过输入信号改变。这种情况下，半桥拓扑的外部、主电源、高端和低端开关中发生短路。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4yE6N4YDkVKx9x5Th6Jodr2iaq7qTjKa6CxDc1VJalGJVMvd2mjSDU2w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 8 显示遗漏情况，即高端输出无法对输入转换做出响应。这种情况下，高端栅极驱动器的电平转换器将缺少工作电压余量。需要注意的是，大多数事实证明高端通常不需要在一个开关动作之后立即改变状态。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4chj2xCrP6C7M0ALE8DSZsfzMU5oMjjqvuZjLQBbibvGcjbWfO12Rdkg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

2.6 考虑闭锁效应

最完整的高电压栅极驱动集成电路都含有寄生二极管，它被前向或反向击穿，就可能导致寄生 SCR 闭锁。闭锁效应的最终结果往往是无法预测的，破坏范围从器件工作时常不稳定到完全失效。栅极驱动集成电路也可能被初次过压之后的一系列动作间接损坏。例如，闭锁导致输出驱动置于高态，造成交叉传导，从而导致开关故障，并最终使栅极驱动器集成电路遭受灾难性破坏。如果功率转换电路和/或栅极驱动集成电路受到破坏，这种失效模式应被考虑成一个可能的根本原因。下面的理论极限可用来帮助解释VS电压严重不足和由此产生闭锁效应之间的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4V6whzbvpmYNXjMBDXDArPnPYunLeWIGjIUMibvtVdviauZEicWJ2eDJaQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在第一种情况中，使用了一个理想自举电路，该电路的 VDD 由一个零欧姆电源驱动，通过一个理想二极管连接到 VB，如图 9 所示。当大电流流过续流二极管时，由于 di/dt 很大，VS 电压将低于地电压。这时，闭锁危险发生了，因为栅极驱动器内部的寄生二极管 DBS，最终沿VS 到 VB 方向导通，造成下冲电压与 VDD 叠加，使得自举电容被过度充电，如图 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4Z0JCmFxI5jupKgIViatXFw8lmxMv9JI4siaCDTlTsPmSJTuic5s6CAPxA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

例如：如果 VDD=15 V， VS 下冲超过 10 V，迫使浮动电源电压在 25 V 以上，二极管 DBS 有被击穿的危险，进而产生闭锁。

假想自举电源被理想浮动电源替代，如图 11 所示，这时， VBS 在任何情况下都是恒定的。注意利用一个低电阻辅助电源替代自举电路，就能实现这种情况。这时，如果 VS 过冲超过数据表 (datasheet) 规定的最大 VBS 电压，闭锁危险就会发生，因为寄生二极管 DBCOM 最终沿COM 端到 VB 方向导通，如图 12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4kPoibmgqC7Vn1conETZXic5ZPpGmcibFmwB9l9U7lOrXjHRqMlSHYd7Vg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

一种实用的电路可能处在以上两种极限之间，结果是VBS 电压稍微增大，和 VB 稍低于 VDD，如图 13 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4VaZj7FM8uHOLiay9XR4dQIuQWn7XnlKAdqdPcUR7I7rjBUT3CqJibwxQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

准确地说，任何一种极限情况都是流行的，检验如下。如果 VS 过冲持续时间超过 10 个纳秒，自举电容 CBOOT被过充电，那么高端栅极驱动器电路被过电压应力破坏，因为 VBS 电压超过了数据表指定的绝对最大电压(VBSMAX) 。设计一个自举电路时，其输出电压不能超过高端栅极驱动器的绝对最大额定电压。

  

2.7 寄生电感效应

负电压的振幅是：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4g0Cnwsr3qJvTvx9m1dVj0h1h8NibOmRKpxckRoFddvrByEq6JRVJ9zg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

为了减小流过寄生电感的电流随时间变化曲线的斜度，要使等式 1 中的导数项最小。

例如，如果带 100 nH 寄生电感的 10 A、25 V 栅极驱动器在 50 ns 内开关，则 VS 与接地之间的负电压尖峰是 20 V。

  

3\. 自举部件的设计流程

3.1 选择自举电容

自举电容 (CBOOT) 每次都被充电，此时，低端驱动器导通，输出电压低于栅极驱动器的电源电压 (VDD)。自举电容仅当高端开关导通的时候放电。自举电容给高端电路提供电源 (VBS)。首先要考虑的参数是高端开关处于导通时，自举电容的最大电压降。允许的最大电压降 (VBOOT)取决于要保持的最小栅极驱动电压 ( 对于高端开关 )。如果VGSMIN是最小的栅-源极电压，电容的电压降必须是：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4icdzUZLBvLeKXAzag1CAsw2o4GcIeSJOicm6vibpiaRleAUDsthE1f0Gibw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中：

VDD= 栅极驱动器的电源电压；

VF= 自举二极管正向电压降 \[V\]

计算自举电容为：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4cGjh18qv7dVePttRdNWYDESjC33rJAicBrDrfwv4qXGnjVYddPAz0mw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中 QTOTAL 是电容器的电荷总量。

自举电容的电荷总量通过等式 4 计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4SxOrxeicE4g3ZiamJc27QuJU0enUHGicdQ6IlBv6NxJY49Rv1MX8NHh6w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中：

  

QGATE = 栅极电荷的总量

ILKGS = 开关栅 - 源级漏电流；

ILKCAP = 自举电容的漏电流；

IQBS = 自举电路的静态电流；

ILK = 自举电路的漏电流；

QLS= 内部电平转换器所需要的电荷，对于所有的高压栅极驱动电路，该值为 3 nC ；

tON = 高端导通时间；和

ILKDIODED = 自举二极管的漏电流；

  

电容器的漏电流，只有在使用电解电容器时，才需要考虑，否则，可以忽略不计。

例如：当使用外部自举二极管时，估算自举电容的大小。

栅极驱动 IC=FAN7382 （飞兆）

开关器件 =FCP20N60 （飞兆）

自举二极管 =UF4007

VDD = 15 V

QGATE = 98 nC （最大值）

ILKGS = 100 nA （最大值）

ILKCAP = 0 ( 陶瓷电容 )

IQBS = 120 µA （最大值）

ILK = 50 µA （最大值）

QLS = 3 nC

TON = 25 µs （在 fs=20 KHz 时占空比 =50%）

ILKDIODE = 10 nA

  

如果自举电容器在高端开关处于开启状态时，最大允许的电压降是 1.0 V，最小电容值通过等式 3 计算。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4OOpDickOtVj2okFTZwVgQ6ic9AicJsWlT2Nx8VrPLHC9laDic664y5t1ibg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

自举电容计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4lMVpbx7xh26OYcvqfnHxQiaMsk3tTHNm1DXLoicfnlZtCFfF6qkxOmuA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

外部二极管导致的电压降大约为 0.7 V。假设电容充电时间等于高端导通时间 （占空比 50%）。根据不同的自举电容值，使用以下的等式：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4lH8wPcqrPxSlQmSO6xAc9yNibJ3DRo3HPQOgBSLBh8pP4iakFmp1yCjA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

推荐的电容值是 100 nF ~ 570 nF，但是实际的电容值必须根据使用的器件来选择。如果电容值过大，自举电容的充电时间减少，低端导通时间可能不足以使电容达到自举电压。

  

3.2 选择自举电阻

当使用外部自举电阻时，电阻 RBOOT 带来一个额外的电压降：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4fu0EYsxCiaLcWlmiahJTw3sS1NqR28uOPI5iatLqENYniatKldS6cTjIcw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中：

  

ICHARGE = 自举电容的充电电流；

RBOOT = 自举电阻；

tCHARGE = 自举电容的充电时间 ( 低端导通时间 )

  

不要超过欧姆值（典型值 5~10 Ω），将会增加 VBS 时间常数。当计算最大允许的电压降 (VBOOT) 时，必须考虑自举二极管的电压降。如果该电压降太大或电路不能提供足够的充电时间，我们可以使用一个快速恢复或超快恢复二极管。

  

4\. 考虑自举应用电路

4.1 自举启动电路

如图 1 所示，自举电路对于高电压栅极驱动器是很有用的。但是，当主要 MOSFET(Q1) 的源极和自举电容(CBOOT) 的负偏置节点位于输出电压时，它有对自举电容进行初始化启动和充电受限的问题。启动时，自举二极管 (DBOOT) 可能处于反偏，主要 MOSFET(Q1) 的导通时间不足，自举电容不能保持所需要的电荷，如图 1 所示。

在某些应用中，如电池充电器，输出电压在输入电源加载到转换器之前可能已经存在了。给自举电容 (CBOOT)提供初始电荷也许是不可能的，这取决于电源电压(VDD) 和输出电压 (VOUT) 之间的电压差。假设输入电压（VDC）和输出电压 (VOUT) 之间有足够的电压差，由启动电阻 (RSTART)，启动二极管 (DSTART) 和齐纳二极管(DSTART) 组成的电路，可以解决这个问题，如图 14 所示。在此启动电路中，启动二极管 DSTART 充当次自举二极管，在上电时对自举电容 (CBOOT) 充电。自举电容(CBOOT) 充电后，连接到齐纳二极管DZ，在正常工作时，这个电压应该大于驱动器的电源电压 (VDD) 。启动电阻限制了自举电容的充电电流和齐纳电流。为了获得最大的效率，应该选择合适的启动电阻值使电流极低，因为电路中通过启动二极管的自举路径是不变的。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4o4GNJu1q69FzRaunltZ5Xl3iaDkiaKtLA9HuM7pSicZbXvV5pAwyC2Img/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

4.2 自举二极管串联电阻

在第一个选项中，自举电路包括一个小电阻，RBOOT，它串联了一个自举二极管，如图15所示。自举电阻RBOOT，仅在自举充电周期用来限流。自举充电周期表示 VS 降到集成电路电源电压 VDD 以下，或者 VS 被拉低到地 （低端开关导通，高端开关关闭）。电源 VCC，通过自举电阻RBOOT 和二极管 DBOOT，对自举电容 CBOOT 充电。自举二极管的击穿电压 (BV) 必须大于 VDC，且具有快速恢复时间，以便最小化从自举电容到VCC电源的电荷反馈量。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4HWLCx48NWzdJ423GjMwGgyaA56Voumfqf4DKW59upKKoOp3ibA7BFhQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这是一种简单的，限制自举电容初次充电电流的方法，但是它也有一些缺点。占空比受限于自举电容 CBOOT 刷新电荷所需要的时间，还有启动问题。不要超过欧姆值（典型值 5~10 Ω），将会增加 VBS 时间常数。最低导通时间，即给自举电容充电或刷新电荷的时间，必须匹配这个时间常数。该时间常数取决于自举电阻，自举电容和开关器件的占空比，用下面的等式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4PJsHI0qes07Tt9CYx8qibmIXSiaBYqW3Ul25NEChibSLibvqourL7tuHuQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中 RBOOT 是自举电阻；CBOOT 是自举电容；D 是占空比。

例如，如果 RBOOT=10， CBOOT=1 µF， D=10 % ；时间常数通过下式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4sxEdzYiaIgLROYIA06riaoMqEibBkrqlURdF99pdXJfgRR3OzTrmb0eIg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

即使连接一个合理的大自举电容和电阻，该时间常数可能增大。这种方法能够缓解这个问题。不幸的是，该串联电阻不能解决过电压的问题，并且减缓了自举电容的重新充电过程。

  

4.3 VS 与 VOUT 之间的电阻

在第二个选项中，自举电路的 VS 和 VOUT 之间，添加上一个小电阻 RVS，如图 16 所示。RVS 的建议值在几个欧姆左右。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4ALUwecYQKDcmqqqzVxgJn8uTibmp8UWVl1RxN7j0roLoU0DmHkYFdrw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

RVS 不仅用作自举电阻，还用作导通电阻和关断电阻，如图 17。自举电阻，导通电阻和关断电阻通过下面的等式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe46eDIFF4lCj55a9JwxyAicP3jgNuJ9G9MT3yJE9BGszPc5wyLwCwamaw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

4.4 VS 箝压二极管和重布置栅极电阻

在第三个选项中，自举电路把栅极电阻重新布置到 VS 和VOUT 之间，并且在 VS 和地之间增加一个低正向压降的肖特基二极管，如图 18 所示。VB 和 VS 之间的电压差，应保持在数据表规定的绝对最大额定值范围内，并且必须符合下列等式：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe462NMhicqv7POr6SASgdqN84JHG4bUwYMQja74bH5r9KsDNWVZGo6Flw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

4.5 重布置栅极电阻；双重目的

栅极电阻设置了 MOSFET 的导通速度和关断速度，限制了在主开关源极的电压负向瞬态时，肖特基二极管的电流。另外，连接到 CBOOT 两端的双二极管，确保自举电容不会出现过电压。该电路唯一的潜在危险是，自举电容的充电电流必须流过栅极电阻。CBOOT 和 RGATE 的时间常数减缓再充电过程，可能成为 PWM 占空比的限制因数。

第四个选择，包括在 VS 和 VOUT 之间，重新布置一个栅极电阻，以及在 VS 和地之间放置一个箝压器件，如图 19所示，布置了一个齐纳二极管和 600V 二极管。根据下列规则，量化齐纳电压：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4k1GlotBCJS6AcW9GaUxEhQ8dtlBHXllRkvY1cJG6AOpRicnMbUKoLmg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

5\. 选择 HVIC 电流能力

对于每一种额定驱动电流，计算指定时间内所能切换的最大栅极电荷 QG，如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4VlyqNeNcCChLBgl44naicVSI3LGeAZx8PSa7lW8TDmzicIVBIDqkIAzQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

注：

1.对于单 4 A，并联双 2 A 的两个通道！

例如， 100 ns 的开关时间是：

100 KHz 时转换器开关周期的 1 % ；

300 KHz 时转换器开关周期的 3 % ；以此类推。

  

1\. 所需的额定栅极驱动电流取决于在开关时间 tSW-ON/OFF 内，必须移动的栅极电荷数 QG （因为开关期间的平均栅极电流是 IG） :

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4RF5vjdp0MtJCZmjuchA8mBic3jUV8icrBBjSMlChiantz9mlU0icsPVf4w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

2\. 最大栅极电荷 QG，从 MOSFET 数据表得到。

如果实际栅极驱动电压 VGS 与规格表上的测试条件不同，使用 VGS 与 QG 曲线。数据表中的值乘上并联的MOSFET 数量就是所需的值。

3\. tSW\_ON/OFF 表示所需的 MOSFET 开关速度。如果该值未知，取开关周期 tSW 的 2%：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4e1PdLFjdK8XZPicnxoud9RjUCbDObnvgfPKPdfFtK1vibJkqlicITicUTQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

如果通道 (V-I) 开关损耗主要受开关转换（导通或关断）支配，需要根据转换调整驱动器。对于受箝制的电感性开关（通常情况），每次转换的通道开关损耗估算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4VwK7tdeWovEuKyF5MTRTvQWj884sYOqPZ8VsKL5ibEc7A7OLcxeh8ibw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中 VDS 和 ID 是每个开关间期的最大值。

4\. 栅极驱动器的近似电流驱动能力计算如下

(1) 拉电流能力 （导通）

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe45BVZS4XSiaz18yNZic0nMfQIicX9BLFG2hOcNr1WTJY7QCib1dXTrAA0rA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

(2) 灌电流能力 （关断）

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4fzRM3nmWE6JtoBQ6XkzrWnAwSibj1A57nYNOLHMq6srhWaockuEhkSA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中：

QG = VGS = VDD 时， MOSFET 的栅极电荷；

tSW\_ON/OFF = MOSFET 开关导通 / 关断时间；和1.5 = 经验因子 （受通过驱动器输入级的延迟和寄生效应的影响）

  

6\. 栅极电阻设计流程

输出晶体管的开关速度受导通和关断栅极电阻的控制，这些电阻控制了栅极驱动器的导通和关断电流。本节描述了有关栅极电阻的基本规则，通过引入栅极驱动器的等效输出电阻来获取所需的开关时间和速度。图 20 描述了栅极驱动器的等效电路和在导通和关断期间的电流流动路径，其中包括栅极驱动器和开关器件。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4Uw4J3Fy8Sb7heKiaDhEY1rwxSL8ibou5L9ZuZ4pDgowicfeJdDxDrnNuw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 21 显示了开关器件在导通和关断期间的栅极 - 电荷传输特性。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4UtDficTB5CObib5PmqUFUfQv96zWM2y1ASCMicic5sBvLibhFQA6n4oN2fw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

6.1 量化导通栅极电阻

根据开关时间 tsw，选择导通闸极电阻 Rg(ON)，以获得所需的开关时间。根据开关时间确定电阻值时，我们需要知道电源电压 VDD ( 或 VBS)，栅极驱动器的等效导通电阻 (RDRV(ON))，和开关器件的参数 (Qgs, Qgd, 和 Vgs(th))。

开关时间定义为到达坪电压 （给 MOSFET 提供了总共Qgd + Qgd 的电荷）末端所花费的时间，如图 21 所示。导通栅极电阻计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4vaWic5WqYwIHJNuiax3Ujbf7RaRGcfL94iaiboVsGxXKTSegHY9bV3oxjg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中 Rg(ON) 是栅极导通电阻， RDRV(ON) 是驱动器的等效导通电阻。

  

6.2 输出电压斜率

导通栅极电阻 Rg(ON) 通过控制输出电压斜率 （dVOUT/dt）来决定。当输出电压是非线性时，最大输出电压斜率

可以近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4haTBP0ia5b0TQ6zyFmSSYbiaiaibMRxMH1xLickCYlDocaJtxYo9UP95OIw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

插入变形表达式 Ig(avr)，并整理得到：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4RGGaGSlzG4zqkpHBYXTSmhpOB1DibUHiaKsWOyYCZuibibeUboJ1kqfGDQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中 Cgd(off) 是密勒效应电容，在数据表中定义为 Crss。

  

6.3 量化关断栅极电阻

在量化关断电阻时，最坏的情况是当 MOSFET 漏极处于关断时，外部动作迫使电阻整流器。

在这种情况下，输出节点的 dV/dt，诱导一股寄生电流穿过 Cgd，流向 RG(OFF) 和 RDRV(OFF)，如图 22 所示。

下面阐述了，当输出 dv/dt 是由伴随 MSOFET 的导通造成时，如何量化关断电阻，如图 22 示。

因为这个原因，关断阻抗必须根据最坏的应用情况来量化。下面的等式将 MOSFET 栅极阈值电压和漏极 dv/dt

关联起来：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe45wIfZhzspeMc2yld9CDcCsjhfAcfFyf47zLEdUcYAaRPOgibaPU3eJQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4viad544VrdlWaEJfFDXLLbQ9QtVEibYumPYIAGn5ianENTU61pOAOYicmg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

重新整理表达式得到：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4dVahdOeBKYOnXCSgGIygrWykic1p1ohtZhkt56ETTvWriahJx84uMABg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

6.4 设计实例

使用飞兆 MOSFET FCP20N60 和栅极驱动器 FAN7382，确定导通和关断栅极电阻。FCP20N60 功率 MOSFET 的

参数如下：

Qgs=13.5 nC， Qgd=36 nC， Cgd=95 pF， VGS(th) =5 V，VGS(th)MIN =3 V

  

6.4.1 导通栅极电阻

1)如果 VDD=15 V 时，所需的开关时间是 500 ns，计算平均栅极充电电流：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4FHKejibzasZgb7k8lB5LfhJmQPWniaaic7xm0iagxVODfER8Sjwfr3noQQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

导通电阻值约为 58 Ω。

2)如果 dVout/dt=1 V/ns （VDD=15 V 时），总栅极电阻如下计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4LsbuuibOxic3oWicIAMamaFxWurLWlYNvMURA2Diad71woibNh0ia2l1MtKQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

导通电阻值约为 62 W。

  

6.4.2 关断栅极电阻

如果 dVout/dt=1 V/ns，关断栅极电阻可计算为：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe43SC2PP94I1bQib6bHvfnSfuxj4d6uIP3jNyKGNxf5Tm9BG2pwz6QvUQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

7\. 考虑功耗

7.1 栅极驱动器的功耗

总的功耗包括栅极驱动器功耗和自举二极管功耗。栅极驱动器功耗由静态功耗和动态功耗两部分组成。它与开关频率，高端和低端驱动器的输出负载电容，以及电源VDD 有关。

静态功耗是因为低端驱动器的电源 VDD 到地的静态电流，以及高端驱动器的电平转换阶段的漏电流造成的。前者取决于 VS 端的电压，后者仅在高端功率器件导通时与占空比成正比。

动态功耗定义如下：对于低端驱动器，动态功耗有两个不同的来源。一是当负载电容通过栅极电阻充电或放电时，进入电容的电能有一半耗散在电阻上。栅极驱动电阻的功耗，栅极驱动器内部的和外部的，以及内部CMOS 电路的开关功耗。同时，高端驱动器的动态功耗也包括两个不同的来源。一个是因为电平转换电路，一个是因为高端电容的充电和放电。这里，可以忽略静态功耗，因为集成电路的总功耗主要是栅极驱动 IC 的动态功耗，可估算为：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4CukueFgHAZJJAmYH54ja0JiaHI9ClRBo0Q72dHmGzfPibVOHZo2ehQBQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 23 表示计算的栅极驱动器功耗与频率和负载电容的关系 (VDD=15 V)。 此曲线可用于计算栅极驱动器造成的功耗。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4ZZZ6fRdHZaibxicsRutVOh5rpMh4juRta4rDbqjt9GoVkgrH9hs2q7Ew/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

自举电路的功耗是自举二极管功耗和自举电阻功耗的总和，如果它们存在的话。自举二极管的功耗是对自举电容充电时产生的正向偏置功耗与二极管反向恢复时产生的反向偏置功耗的总和。因为每个事件每个周期发生一次，所以二极管的功耗与开关频率成正比。大电容负载需要更多的电流，对自举电容器重新充电，从而导致更多的功耗。

半桥输入电压 （VDC）越高，反向恢复功耗越大。集成电路的总功耗可以估算为：栅极驱动器的功耗与自举二极管的功耗的总和，减去自举电阻的功耗。

如果自举二极管在栅极驱动器内部的话，添加一个与内部自举二极管并联的外部二极管，因为二极管功耗很大。外部二极管必须放置在靠近栅极驱动器的地方，以减少串联寄生电感，并显著降低正向电压降。

  

7.2 封装热阻

电路设计者必须提供：

• 估算栅极驱动器封装后的功耗

• 最大工作结温 TJ, MAX,OPR，例如，如降额至 TJ,MAX\=150 °C 的 80 %，对于这些驱动器为 120 °C。

• 最高工作引脚焊锡温度 TL,MAX,OPR ，大约等于驱动器下最大 PCB 温度，比如 100 °C。

  

• 最大允许结到引脚的热阻计算为：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPIqKXVBaRnTyM0OQjLQvbe4PWqkdUD8LZxLfwJ2ibbo453U4eC0Yf1MV0QqrhX8xW2qpiaYPfyScVvA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

8\. 一般准则

8.1 印刷电路板版图

具有最小寄生电感的版图如下：

• 开关之间的走线没有回路或偏差。

• 避免互连链路。它会显著增加电感。

• 降低封装体距离 PCB 板的高度，以减少引脚电感效应。

• 考虑所有功率开关的配合放置，以减少走线长度。

• 去耦电容和栅极电阻的布局和布线，应尽可能靠近栅极驱动集成电路。

• 自举二极管应尽可能靠近自举电容。

  

8.2 自举部件

在量化自举阻抗和初次自举充电时的电流时，必须考虑自举电阻 (RBOOT)。如果需要电阻和自举二极管串联时，首先确认 VB 不会低于 COM （地），尤其是在启动期间和极限频率和占空比下。

自举电容(CBOOT)使用一个低ESR电容，比如陶瓷电容。VDD 和 COM 之间的电容，同时支持低端驱动器和自举电容的再充电。建议该电容值至少是自举电容的十倍以上。

自举二极管必须使用较低的正向压降，为了快速恢复，开关时间必须尽可能快，如超高速。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源硬件工程师炼成之路。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。