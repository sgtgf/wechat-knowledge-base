# 一种基于等效栅极电阻控制的 SiC MOSFET 结温波动抑制方法


> 原文地址: [https://mp.weixin.qq.com/s/vUTAg\_14KlK0A0P820yWXg](https://mp.weixin.qq.com/s/vUTAg_14KlK0A0P820yWXg)

文章来源：中国电机工程学报

作者：王若隐，郑宏\*(江苏大学电气信息工程学院，江苏省镇江市 212013)

摘要：通常限制碳化硅(SiC)金属\-氧化物半导体场效应晶体管(metal-oxide-semiconductor field-effect transistor，MOSFET)可靠性的根本因素是非平稳工况下的结温波动。 文中提出的等效栅极电阻控制方法克服了在线连续修改驱动电阻的困难；在此基础上，提出一种主动热管理方法，通过改变开关损耗的方式来抑制结温波动，同时给出结温调节范围的推导过程；搭建逆变器实验平台，验证理论分析的正确性。实验结果表明，该方法可显著降低SiC MOSFET 各功率波动阶段的温度波动，最大波动范围由18.83℃降至9.85℃，SiC MOSFET 的寿命延长约2.18 倍。此外，考虑系统的效率因素，提出温控操作区间和结温控制系数的概念； 最后，通过实验验证所提出的方法的有效性。

关键词：碳化硅金属\-氧化物半导体场效应晶体管；结温波动；主动热管理；等效栅极电阻控制；可靠性

0 引言

功率半导体器件作为电能转换、传输和控制的核心元件，参与构建了现代电网并决定着未来电网的发展趋势。同时，新能源领域的发展推进离不开功率半导体器件的支撑。各个能源网络之间的联系日益紧密，一旦其中某个环节损坏将造成严重的影响。因此，研究如何提高功率器件的可靠性和安全性、提升电力电子系统的可靠性和安全性就具有实际价值和意义。其中，限制碳化硅(SiC)金属氧化物半导体场效应晶体管(metal-oxidesemiconductor field-effect transistor，MOSFET)可靠性的因素有很多，温度作为主要因素约占55%。 

SiC MOSFET 器件的可靠性被视为一个值得关注的重要领域，由于不同热膨胀系数的材料直接接触，系统运行过程中温度的变化导致SiC MOSFET内部材料受到不同的热应力，这类热应力会使器 件内部较弱的元件失效。SiC 材料的高热导率和高杨氏模量会因功率变化导致焊料层承受更高的热应力。此外，功率波动会使SiC MOSFET 产生温度波动，出现焊接疲劳。在相同条件下，SiC器件所承受热应力约为Si 器件的1.5 倍。SiC焊料层的使用寿命仅为普通Si 器件的1/3。因此，温度对SiC MOSFET可靠性的影响更为明显。SiC  MOSFET 的主动热管理技术对于降低热应力冲击和延缓老化速度起至关重要的作用。主动热管理技术主要是通过限制结温变化的幅度来控制发热量，类似于“削峰填谷”：当结温处于峰值时，减小损耗用以降低结温，当结温处于低谷时，增大损耗用以提升结温，达到减小结温波动的目的。

随着高功率SiC MOSFET 在工业领域的广泛应用，其结温波动问题也愈发突出，相关研究也逐渐展开。文献\[14\]提出了一种基于无功功率调节的三电平并联变换器结温管理技术，通过管理无功电流的频率来调节开关损耗，但只适用于并联变换器系统；文献\[15\]提出了一种基于功率分配的温度管理机制来限制功率变换器的功率和温度，该方法的缺点是变换器必须串联使用，每个变换器在较低的频率下工作，降低了功率密度；文献\[16\]提出采用 脉冲宽度不连续的调制方法来改变功率器件的平均结温，然而逆变器的输出质量严重降低；文献\[17\]提出了最大功率点跟踪方法，以减少功率器件的热负荷，并解决光伏逆变器光照环境快速变化导致结温频繁变化的问题，但控制方法较复杂。目前常用 的结温管理方法是通过改变开关频率来改变功率器件的开关损耗，这种方法除了不能独立调节单个半导体器件的结温，还存在如果开关频率的大幅度降低将导致控制带宽的减少和输出波形失真等问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuARRZH4NLwgKeNCia7nNFSqOqnpTLoHjsbfFes927YqJ7BGzcIKZfFIw/640?wx_fmt=png&from=appmsg)

为此，本文提出一种基于等效栅极电阻控制的SiC MOSFET主动热管理方法，其中等效栅极电阻控制电路如图1 所示。利用栅极电阻可以动态调节开关损耗，但电阻阻值难以在线线性调节，所以必须使用并联电阻。该且无法覆盖整个功率范围，导致温度调节效果欠佳。本文所提出的EGRC 方法，通过改变延时开关的延时时间，实现驱动电阻的连续调节。最终搭建全桥逆变器样机，验证该方法的实用性和优越性，有效降低了SiC MOSFET 的结温波动。

本文详细介绍系统架构和基本原理，讨论结温控制方案，搭建实验样机并给出实验结果，进一步考虑效率优化问题，提出温控操作区间和结温控制系数的概念。

1 系统架构与基本原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu2Un7zkjjzY5KFgJUwLksgbl6raBYR1Kv5zF1VWo8iakWbJHtBGJTlfw/640?wx_fmt=png&from=appmsg)

本文针对非平稳工况下SiC MOSFET 产生的结温波动，提出了一种主动热管理技术，搭建了基于全桥逆变器的测试电路，如图2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuicg3sRj5NwfhHI8sDrMsVFT1foeGOjJnk5kJajTuSYMkiaVhp3tmXbqw/640?wx_fmt=png&from=appmsg)

本文对SiC MOSFET 的栅极驱动电路进行简化，如图3 所示。图中：Vgs\_drive 为驱动电压；Rg为驱动电阻；Ig 为栅极驱动电流；Cgd和Cgs 分别为栅\-漏和栅\-源寄生电容，流过它们的电流分别为Igd和 Igs，电压分别为Vgd和Vgs；Vd 为漏极电压。

由于驱动电压Vgs\_drive 为方波，则栅极电流为Ig\=Igs+Igd，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu0UG96YXqJTv7JKsXiaMDwKgh0d1Gr9v9RrmD9qstJ77nP43jqnNZLng/640?wx_fmt=png&from=appmsg)

式中Vgd\=Vgs−Vds，由于延迟阶段和电流上升(或下 降)阶段的Vds 保持不变，因此：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuAL6poNcybTLibK5VSkjHiaoompWG1wFbF0p03QrwU0FDbK6SuWVtrMqw/640?wx_fmt=png&from=appmsg)

解上述积分方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuo97DDwwW7zYLEtIuqmlYqgSn1gLIfLqBFkfEk3BxUWqAQic13L4jO3w/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELulezosHFYIQ8hXaE6mOdRibUReCicNHo5LFyPicPpicInedFhhVgu95rDCQ/640?wx_fmt=png&from=appmsg)

根据初始值条件：当t\=0 时，Vgs\=0V，可求Cgs 上的电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu79fCH7rJeYhYtsrnoBUhEvd9WekMZJqia1hXwCI7xhticqiaTBk8EBAJQ/640?wx_fmt=png&from=appmsg)

接着，对SiC MOSFET 的开关过程建模，其开关过程示意图如图4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuRGKwx7TFZclbWw8DheeAmkS0A4UptBDINn5bDWtvs1k40aiaJhiaQVJg/640?wx_fmt=png&from=appmsg)

导通延迟阶段T1：栅极驱动电压从0V 开始对Cgs 充电，T1后Cgs 上的电压等于阈值电压Vth。

电流上升阶段T2：当Cgs 上的电压达到米勒平台时，Id 开始从0A 经过T2 增加到最大值。

完全导通阶段T3：进入米勒阶段后，Cgs 上的电压保持不变，栅极驱动电流使Cgd 放电，漏极电压从经过T3 后的最大值降至导通压降。Cgs 上的电压继续增加，直到达到Vgs\_drive。

在导通延时结束时，将Cgs 上的电压Vgs\=Vth代入式(6)得到：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELup2EUYugVzqwDhLibOXrics62r7icaI8nXHrUf3COggyswgm5BxLY3qPsA/640?wx_fmt=png&from=appmsg)

在电流上升阶段结束时，将Cgs 上的电压Vgs\= Vgs\_miller代入式(6)，得到充电时间T2：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELupwHQW06iaW742BBnzHEtdAmBHicAXc6KquEmbHQ1sgLiazMBCGuicicBUog/640?wx_fmt=png&from=appmsg)

式中Vgs\_miller\=Vth+Id/gfs，为米勒平台电压。在米勒阶段，Cgd 上的电压由Vd降至Von，米勒过程持续时间为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELujpMeEPiclDqEK1cj7OK0TpWPwGN9jNnVbrZtV1HDvRFBuLBrYVyMTzg/640?wx_fmt=png&from=appmsg)

式中Qgd 为栅极漏电荷。同理可得关断过程，分为关断延迟阶段T4、升压阶段T5 和降流阶段T6：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELudfcjO5WLGQiclYhcVj07KngN2YDzxHicSJrNWgYMZbruHkPjj8vd8ibvA/640?wx_fmt=png&from=appmsg)

开通损耗表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELutSnFy97H0rusmb4X1x8wcnv3ic8XeicqPAjUzEkQanic9Mq3kJd3kwPtg/640?wx_fmt=png&from=appmsg)

可以看出，电流上升时间T2 和电压下降时间T3 越长，开通损耗越大。同理关断损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu6sicEIaQxmkDhjicn98vP57w5Gprib5O95gsOrCmKmIobSqXvA6jz9QQg/640?wx_fmt=png&from=appmsg)

则可得总开关能耗Esw：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu4Kkic87WQGzGiaamgpg0B5rc89Iiaazn3OY8XgVKSMXQlSl8jII8PciaBA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 的栅极电荷和栅极电流分别表示为Qsw和Ig，它们之间的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELudeTH23AHta8t63Dl1wbUn3mNthD22iaWSroe1crzU6Dg1d4k3hFrmfA/640?wx_fmt=png&from=appmsg)

假设在很小的一段时间内，栅极电流是恒定的，将定积分改写成分量段和的形式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuB3ZxkB41A3FhfQCZMZrZQUk641KL3qQgjNzOw0D8d8cVbh4OspCPOA/640?wx_fmt=png&from=appmsg)

式中：Qsw2、Qsw3、Qsw5、Qsw6 分别为 T2、T3、T5、T6 时的栅极电荷；Ig2、Ig3、Ig5、Ig6 分别为四级栅极电流，则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuuvVzADYPt7fo14N76qNFQjPnuk3QP3hzmVAcKcWN7cicLaXkBkVZh1A/640?wx_fmt=png&from=appmsg)

可见Esw与栅极电流Ig 呈负相关，且：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuYictoG235Pkibmo7hAe6HTU2DiaPYcwaQvWdiaQOqxUzicL8opiaEia6PicrxQ/640?wx_fmt=png&from=appmsg)

可以发现，增加Vgs\_drive 可以直接增加栅极电流，但如果栅极电流比较大，则需要非常高的栅极驱动电压，这可能超出了SiC MOSFET 耐压极限。 因此，本文通过调节Rg 来调节栅极电流Ig，从而实现对Esw的调节。进一步的，SiC MOSFET 的开关损耗Psw可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu3Kot9C0Zppp5j9qXNqAHDmARYyYnLvljBBHqMk3uEwGAenwiaCt25dQ/640?wx_fmt=png&from=appmsg)

式中：fsw为开关频率；kI、kU分别为电压和电流的转换系数；Id 为SiC MOSFET 完全导通时的电流；Vd 为SiC MOSFET 完全关断时的电压；Iref、Vref为 参考值，可通过Datasheet 获得，则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuHSKoIPuhe0O8Y9HVyNRia9drPnTwoLZTpoklGRvBcPd0qS04NVgibCYA/640?wx_fmt=png&from=appmsg)

由式(8)、(9)、(11)、(12)可知，Ti 可视为Rg 的函数f(Rg)，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuRE2EicLMJwibOZCy9viaY3Vms10ibQSz5vMFnQuwqmUmiaoibTA4ZXHDhCqg/640?wx_fmt=png&from=appmsg)

因此：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu3udsA4hQNt7Sqq7tibFXuPR55WicPDqOIk1ssiccsBFvL8vWA9WJTdOyQ/640?wx_fmt=png&from=appmsg)

式中：Tj\_sw(Rg)为Rg 作用下开关损耗部分所对应的结温；ΔTj\_sw(Rg)为驱动电阻从Rg1 到Rg2 变化时结温的调节变化；θjc为结壳之间的热阻。综上所述， 结合式(22)、(23)可以计算出不同载荷Id 下改变Rg所能实现的温度调节范围 ΔTj\_sw(Rg)。

2 基于 EGRC 的主动热管理方法

2.1 基本原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuPuHBK39wyaGyBgOxuO8BkCxQBKjPaOI7TRbiacHRaKHA6zia41IqhMRw/640?wx_fmt=png&from=appmsg)

如1 节所述，结温可通过改变栅极电阻来调节， 这种方法简单地定量地调整电阻。例如图5 中，需要6 个辅助开关和6 个驱动电阻器来覆盖这6 个电阻器范围内的所有电阻值。这种方法需要较多的器件，且在线连续调节能力差。因此，本文提出了延迟开关的概念，如图1 所示。以SiC MOSFET 的开通阶段为例，本文在推导过程中是以SiC MOSFET的导通延时(T1 阶段)结束时刻为参考信号进行延迟设计，在实验中需要采样反馈确定T1 的结束时刻， 产生额外的延迟。因此为实现ns 级的定时，本文直接在程序中进行处理，以SiC MOSFET 的开通信号(PWM1)为参考信号(橙色实线)，另外生成一路相同的信号PWM2(蓝色实线)，但滞后于PWM1，滞后时间设定为SiC MOSFET 的导通延时T1 与延迟时间Td1之和，逻辑图如图6(a)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuuqAFqCKpTe379cNKfF22evvezvovsVXJDQYaWlRn1d5dtS5fgWgAQQ/640?wx_fmt=png&from=appmsg)

此时不需要额外的采样反馈，只需对SiC MOSFET 的导通延时时间T1进行标定，结合辅助开关Swon 的延迟时间，即可确定Swon 的开关信号。通过改变Td1 可调节导通轨迹的转换点，实现对SiC MOSFET 导通阶段栅极电阻的调整，此时电流和电压波形由实线变为虚线。SiC MOSFET 的关断阶段如图6(b)所示，其工作原理与导通阶段相同。通过改变Td2 可以调节关断轨迹的转换点，实现对SiC MOSFET 关断阶段栅极电阻的调整。本文将Rgmax设为30Ω，Rgmin设为6Ω。辅助开关闭合前等效驱动电阻为30Ω，闭合后等效驱动电阻为5Ω。通过调整延时时间，可在5~30Ω 之间实现驱动电阻等效调节。

基于图6 重新建立Eon与Td1 之间的关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu7e2LtRswCelibTF19OHotv30SvBKEFRBnQicRceugGMZppWEc9nCIXiaQ/640?wx_fmt=png&from=appmsg)

求导得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuv6k3Q8C3R6AfALLmJzX6jGh8IdMFKjMGxcmKh2iaZIEeQl59HVwhtwA/640?wx_fmt=png&from=appmsg)

又因：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuGHD4O8zkBDr665as97CSclq5eKp6wvHTfEr5MHVcQ0xTfe9DZHZzlQ/640?wx_fmt=png&from=appmsg)

Rgmax\>Rgmin，因此T2−T'2\>0，即E'on(Td1)\>0，Eon 是关于Td1 的单调增量函数。关断阶段的分析与导通过程一致：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu0cpuw04TgxmDBH7FXK1OLMB2OYGB9B5oZTZtgJqwpjaicpnqVZuQ8Ug/640?wx_fmt=png&from=appmsg)

求导得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu1e5WxfS02RlQtmd9ibcMvLZoG2IR9fKmqWkI7LDCEkkcBFKJk6G1Xlg/640?wx_fmt=png&from=appmsg)

又因：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuyC2Cw7sPicQviaZW2R5ibyNibjjlBPR9zQAS76LhBlH0aYzOxMNibZfMPVw/640?wx_fmt=png&from=appmsg)

Rgmax\>Rgmin，因此T5−T'5\>0，即Eoff是关于Td2的单调增量函数。综上所述，SiC MOSFET 的结温可以通过延迟时间Td 来控制。

2.2 热管理控制策略设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuYcZlBuuliakqiay2tkBtByMmFE3KpBX1eIvJcia9kV7iaC3N9Bh7gTzkrg/640?wx_fmt=png&from=appmsg)

本文所提出的基于 EGRC 的主动热管理方法 如图7 所示。由于选择全桥逆变器架构作为研究对象，因此该系统包括4 个SiC MOSFET(S1、S2、S3、S4)。无纸记录仪采集每个SiC MOSFET 的实时结温，利用温度变送器将其转换为电压UT发送到DSP控制器。将 UT与目标温度Tref进行比较后，采用线性分布和限幅处理计算延迟时间Td。最终得到EGRC电路中辅助开关的延时开关信号，实时等效的调节驱动电阻。

3 实验验证

3.1 实验样机搭建

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuC9zqCcMVCPV5NmXpruAEZtYK1bRwuf4DKqED6WrU2rV5thiaqn97Z8w/640?wx_fmt=png&from=appmsg)

本文所搭建实验平台如图8所示，主要由基于SiC MOSFET的全桥逆变器、直流电源、整流桥和电子负载组成。本文使用的SiC MOSFET 为IXFN50N120SIC，辅助开关为BSC052N03LS。主开关管的驱动芯片为ISO5852s，辅助开关的驱动芯片为IXDD604SI。负载为可编程电子负载，型号为CHROMA\_63200A。为了模拟非平稳工况下的功率波动，对电子负载进行编程，切换不同负载来改变系统功率。

实验中，采用基于RC 热网络模型的结温测量方法采集SiC MOSFET 的结温信息。这种方法需要测量外壳温度Tc，结与外壳之间的热阻θjc，结合功耗Psw 计算结温。那么，准确计算热阻是实现该方法的关键。SiC MOSFET 一般由器件本体模块和散热器件组成，其结温Tj 和壳温Tc关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuo91rcD1X8P5Pp97oUpzxY6DcZTA2AxC9408N4gScj0fW8kDwvuG9FQ/640?wx_fmt=png&from=appmsg)

式中：Psw为开关损耗；θjc为芯片与SiC MOSFET外壳之间的稳态热阻。该方法可有效地降低主电路的复杂性，只需要安装一个温度传感器来测量外壳温度，然后通过式(30)就可以计算出结温。Foster热网络模型各部分的热阻和热容参数更容易通过 曲线拟合技术提取，不需要 SiC MOSFET 内部材料的物理参数。值得注意的是θjc 反映了功率器件封装结构和材料的热性能，即使散热条件发生变化， 也不会对外壳的热阻产生影响。瞬态热阻的最终值表示稳态热阻的大小Zth(t\=∞)：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuxAafo91NetNnG3F29HgpNHicJDMxGWBdj7V6QbnIUsKzmXiciaC1p5l7Q/640?wx_fmt=png&from=appmsg)

电子器件工程联合委员会(Joint Electron  Device Engineering Council)给出了瞬态热阻的标准测试方案(JEDEC 51-14 标准)，测试原理和方法为：在t\=0 时，对半导体器件施加恒定的功率损耗PH，当外壳与散热器完全接触时，器件热阻可定义为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELucic1jtQ3sWlFY8AyxrZIMmnMhiaXYyr0kDkXM0ia99OyTsbL1KqcWNa1g/640?wx_fmt=png&from=appmsg)

为简化实验，这两组不同工况可以设置为涂有导热硅脂和未涂导热硅脂两种情况，两次测试中分离点处的热阻就是结壳热阻θjc，不受外壳与环境之间热阻变化的影响。本文搭建的阻抗曲线测试平台如图9(a)所示，测试原理如图9(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuDLCBicAXDTFHpeCQvVjDnasiasRiclZAlJzlXYibejVZ4q6rw9afX2Bmsg/640?wx_fmt=png&from=appmsg)

实验采用降温曲线测量SiC MOSFET 的结壳热阻Rjc，接通待测SiC MOSFET，利用恒定电压源Vin 串接负载电阻RL 给其加热直到结温达到稳定， 此时器件的发热功耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuJr6Iafh9ovrBBv84W7M4dMibcnYmyD9bu9YDH3MjicC5gdNhGiaLm53mg/640?wx_fmt=png&from=appmsg)

式中Iin 为加热电流。结温稳定后关闭电源，SiC  MOSFET 自然冷却，得到降温曲线。实验测试在有无导热硅脂的两种工况下进行。在每种工况下，电压源分别设为200 和300V，负载电阻设为20Ω。 无导热硅脂的SiC MOSFET 降温曲线和瞬态阻抗 曲线如图10(a)所示，有导热硅脂的SiC MOSFET降温曲线和瞬态阻抗曲线如图 10(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuNO0YNR9I68GTBURYfWQOmkxTYme31IAlKFx1QvCq5T8ibxuDfvCiaF6w/640?wx_fmt=png&from=appmsg)

图11 为输入电压300V 时，加硅脂和不加硅脂的热阻曲线。 热阻为两条曲线的分离点，约为0.592℃/W，结合式(30)可计算出的结温。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELumQydibhT06Ce4dl2QWo7wOnibu3KYC0J1Eyapaj8k9mNicpYfib68T7bKA/640?wx_fmt=png&from=appmsg)

3.2 验证所提出的 EGRC 方法

在验证EGRC 之前，本文测试了SiC MOSFET在不同驱动电阻下的开关波形，系统输入直流电压设置为250V。开通阶段的电压和电流波形分别如 图12(a)、(b)所示；关断阶段的电压和电流波形分 别如图13(a)、(b)所示。开通阶段驱动电阻越大，Id上升时间越长，Vd 下降时间越长，开关损耗越大。 关断阶段驱动电阻越大，Vd 上升时间越长，Id 下降时间越长，开关损耗也越大。反之，栅极驱动电阻越低开关损耗则越低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELufSAmXsy1PZYWuAssrN6ic0RONjVXcx1ByN9bibVjibt6hiaUCmzk4ZLYVQ/640?wx_fmt=png&from=appmsg)

如果辅助开关开通时间过短，则有可能在主开 关的导通(或关断)阶段完成之前辅助开关已被关断。可以采用的解决方法是，辅助开关的导通时间应等于主开关的最大开通(或关断)时间。经测试，SiC MOSFET在30Ω 栅极电阻情况下具有最长的开通和关断时间，分别为158 和115ns。综上所述， 本研究中辅助开关的导通时间设定在200ns，完全覆盖了SiC MOSFET 的开通或关断阶段，防止辅助开关过早关断，电压和电流波形如图14 所示。接着对辅助开关在不同Td 下进行了测试，证明了辅助开关在不同延迟时间下改变开关轨迹的能力。当SiC MOSFET处于关断阶段时，关断信号用作参考信号(图14(a))。在延时Td2 之后，辅助开关的闭合使Vd 快速攀升，改变了关断电压和电流的轨迹。在开通阶段时，开通信号作为参考信号(图14(b))。辅 助开关的接入使得Id 在延时Td1 后迅速上升，改变了开通波形的轨迹。电压和电流曲线随Td 的不同而不同，实现了波形的等效调整。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuNeK9LVmhtMiaFvic4ZJEwKnYntF1xUuU2F1wX30KxonJib5z0iaojz8iagg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuj6RJPpqBkR2AwdicuKq1AX3bFY1CwocnicU9avWLQKHBNB3Y5wWicJ1wg/640?wx_fmt=png&from=appmsg)

  

3.3 验证基于 EGRC 的主动热管理方法

实验前，需要对辅助开关开通前的延迟时间Td进行规划分配，基本原理是：当结温大于参考温度时，延迟时间 Td 随 ΔT 的增大而减小用以降低损耗； 当结温小于参考温度时，延迟时间Td 随 ΔT 的负向增大而增大以增加损耗。SiC MOSFET 开关时间的最大值出现在系统最大电流和最大栅极电阻处，最小值出现在系统最小电流和最小栅极电阻附近。

根据SiC MOSFET 的额定电流设置有效工作范围为5~35A。经过测试栅极驱动电阻阻值为30Ω时 SiC MOSFET 的开通时间约为158ns，关断时间约为115ns，此时SiC MOSFET 的结温为57℃。栅极驱动电阻阻值为5Ω 时SiC MOSFET 的开通时间约为88ns，关断时间约为61ns，此时SiC MOSFET的结温为102℃。以额定电流的中间值20A 时的结 温(70℃)作为参考温度Tref，与实时结温相减得到温差 ΔT。综上所述，延时开关Swon 的延迟时间Td1与Swoff的延迟时间Td2 的分配规则分别如图15(a)、(b)所示，进一步可得延迟时间与温差分配规则的函数 表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuXK9Itj99rOXXJBzdzrPFGiaJmyEa3jRF8MUNvKZ7DMGuWuu22wrtybA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu4nxRYVibRMVkZBZ3LDsnWso35CRJaVUZkB0agLF34U97F1llqvm2pPQ/640?wx_fmt=png&from=appmsg)

使用可编程电子负载调节负载以模拟功率波动，表1 列出了逆变器系统参数，功率波动设定为30A→25A→17A→30A→20A→17A→25A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELubIvXicWWvSFbibRLY28wbVRuUdCISTEEVnUT2XCCNibljyL8iaVsJ1EJFw/640?wx_fmt=png&from=appmsg)

本文对基于EGRC 的主动热管理方法进行了测试，实验结果如图16 所示。红线是不采用任何控制策略时的结果。由图可知，在没有任何控制的情况下，最大结温波动达18.83℃。如蓝线所示，采用主动热管理方法后最大波动降至9.85℃。值得注意的是，在不同电流Id下通过调节开关损耗来调节结温的范围是不同的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu50DdwqickvXxjKKRFwSvG5JbbRXNjcaxVyZFiaNBX6bdickVX9ic4Qwznw/640?wx_fmt=png&from=appmsg)

最后，本文选用的SiC MOSFET为IXFN50N120SIC，相关参数可从Datasheet 中得到。 首先通过式(22)、(23)得到温度调节范围的计算值， 如图17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELucSUoHo7F22G50drb54bVw33BYicuV9gBzbDcROj78gjQqicCITrsGBUw/640?wx_fmt=png&from=appmsg)

3.4 寿命评估

为更好地表征所提出方法对提高SiC MOSFET可靠性的有效性，本文引入了寿命评估机流程： 

1）统计全循环温度载荷，建立寿命评估模型需要依据SiC MOSFET 的结温曲线统计和提取温度循环载荷。常用于统计疲劳寿命载荷的方法主要为雨流计数法，其基本原理符合材料疲劳损伤规律。因此，本文利用雨流计数法遍历SiC MOSFET结温曲线中的所有全循环温度波动 ΔTji及其出现次数ni，提取过程不再赘述。 

2）建立SiC MOSFET 的寿命模型。通常利用功率半导体器件失效前的循环次数Nf 来表征器件寿命，主要分为物理模型和数学模型。相比之下， 数学模型法是利用老化实验测试数据进行数学拟合得到的寿命模型，易于实现。由于本文重点考虑结温波动对于器件寿命的影响，因此选择数学模型法中的Coffin-Manson 模型进行寿命评估：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELukklW7m5lqjdozd14JdV4HExFkbZkUUgZtLtwA45IDdaCWqnqfibowSw/640?wx_fmt=png&from=appmsg)

式中a、b 需要通过SiC MOSFET 的功率循环实验 拟合获取。依据所选SiC MOSFET 型号，制造商提供了所研究模块的功率循环测试结果，结温波动ΔTj 为40℃时 SiC MOSFET 的失效周期数约为346421 次，ΔTj为120℃时SiC MOSFET 的失效周期数约为106867 次。将这两组数据代入式(36)，得 到a≈17972611，b≈1.070501，如式(37)所示。同时，寿命模型如图18 中橙线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuFqu6YK4BuibmtvU3BL7xcmiaFdWApsfo2gYD23xicWOB5XSBVBRhibHFLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELue0VeJCMlz5RqQJbwyEv0E4rQ25k6LBy6Dicv3jSIoLrDopq8PoZEFeg/640?wx_fmt=png&from=appmsg)

实验中通过改变系统功率使SiC MOSFET 不断升温和降温，循环往复直至SiC MOSFET 失效。 完成4 组测试实验，结温波动 ΔTj分别为90、100、110和120℃。失效周期数如图18 中五角星所示， 验证了Coffin-Manson 模型的正确性。  

 3）计算SiC MOSFET 的期望寿命。将步骤1中全循环温度波动 ΔTji 以此代入式(37)所建立的模型，即可获得每种温度载荷情况下SiC MOSFET 的可循环次数Nfi。然后，利用损伤累积理论计算SiC  MOSFET 的寿命消耗。本文采用Miner 线性损伤累积理论，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELupICfK2cYgyrOlhMxJDpYGFeNDic0jMxWKXVoOxsdGjnhibkpkud4tY5A/640?wx_fmt=png&from=appmsg)

式中：D为累积损伤程度，当D\=1时判定SiC  MOSFET 失效；m为SiC MOSFET 所经历的热循环次数。最终，利用上述所示步骤，针对图17 所示的温度载荷曲线进行寿命评估，时间尺度为140s。 依据损伤累积度D 获得期望寿命L，计算过程如式(39)所示，计算结果如表2 所示。采用本文所提出的主动热管理方法相较于未采用任何热管理策略时，SiC MOSFET 的期望寿命提升218%，进一步验证了本文所提出方法的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuTwCsia5Hy8ajibs4VNjHBbgLc8u7Ro49taibxbYAqdZ9qxnKcEDd4pMjQ/640?wx_fmt=png&from=appmsg)

4 计及效率因素的主动热管理优化方案

整体而言主动热管理策略是以可靠性、延长使用寿命为导向，现有的结温主动控制方法很少考虑效率因素，一定程度上限制了其应用推广。因此，本节在减缓SiC MOSFET 结温波动的基础上进一步对功耗指标进行了探讨与改进。由图16 可知， 采用本文所提出的主动热管理方法时，根据线性分配规则，当结温大于70℃时主动热管理技术其实是在减小开关损耗，此阶段效率反而会有所上升，只有当结温小于70℃时才需要增加开关损耗以升高结温。因此，单纯以某时刻的效率下降或功耗增加来说明主动热管理策略会降低效率不够准确，本文 提出利用平均功耗Pave的概念来表征对系统效率的影响。图16 中系统工况分为7 个阶段，每个阶段SiC MOSFET的开关损耗可通过计算和测试获得， 最终求取这7 段工况开关损耗的平均值。

经过理论分析，本节所设计的SiC MOSFET 主动热管理策略在结温大于参考温度时是有助于减小开关损耗的，此时辅助开关延迟时间分配规则对应于图19 横轴正半轴。真正升高开关损耗是在结温小于参考温度阶段，需要进行优化的也正是这个阶段，即图16 中电流为17 和20A 的阶段，延迟时间分配规则对应于图19 横轴负半轴。更改负半轴函数的斜率可改变SiC MOSFET 开关损耗调节能力，极限情况是当结温低于参考温度时辅助开关延迟时间保持固定不变，表示不进行主动热管理，此时函数斜率为−1。分配规则中横轴半轴保持不变，负半轴如图19 所示红线所示。通过改变上述分配规则的斜率即可控制结温调节能力，本章将此区域定义为温控操作空间，如图19 中红色区域所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu6SgQO8SFt9kF1XmrOB9cplRSibpkpCOkqJYx1iaOgKcvvELMzdZONlAg/640?wx_fmt=png&from=appmsg)

定义结温控制系数为k，通过改变k 的大小可 使函数在温控操作空间内变化，达到改变结温调节能力的目的。因此负半轴分配规则改变为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELulribvAvEAy3bpgcHuDxeRRyuP9ib3N5DrfUibGWp52z217n5qosZ6zBGg/640?wx_fmt=png&from=appmsg)

式中k1、k2 分别为SiC MOSFET 开通阶段和关断阶段的结温控制系数。横轴正半轴保持原本分配规则不变。取k1\=1.02 和k2\=1.33，采用所提出的结温控制系数改变分配规则后重新进行测试，实验测试条件不变，结果如图20 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuuh4j8VbdaRM1xIVibOPgiaFKtibXx7PWOgToBXwCwicgdRnskcsRFR6s5A/640?wx_fmt=png&from=appmsg)

黄色波形为未采用任何主动热管理策略时SiC  MOSFET 的结温曲线；红色波形为只有结温低于参考温度时不进行主动热管理时SiC MOSFET 的结温曲线；蓝色波形为采用本节所提出的主动热管理方法时SiC MOSFET 的结温曲线，结温控制系数k1\=1，k2\=1；黄色波形为结温控制系数k1\=1.02，k2\=1.33 时SiC MOSFET 的结温曲线，此时的分配规则如图21 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELuUGxF4PwS9JGIyCV5tVYZZDR2xD46QT2U39U1lzRbNHmkoc28QzpDag/640?wx_fmt=png&from=appmsg)

由此可见，调整温度控制系数可以改变所提出主动热管理策略的结温调节能力，实验中测量了不同控制方法每个阶段SiC MOSFET 的开关损耗，如表3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELunyXicgVUzicO0ibIrhOV9NcU6Lf9Kc5xJwbn6bgHDGzzweQY0sQjqHr5w/640?wx_fmt=png&from=appmsg)

表4 总结了上述4 种测试情况下计算获得的期望寿命、部分平均功耗和整体平均功耗，均以未采用任何控制策略条件时的测量结果为基准(100%)方便比较。结温控制系数k1\=1、k2\=1 时， 结温波动幅度最小，因此SiC MOSFET 的期望寿命最长。正如上文分析，采用基于开关损耗方式的主动热管理策略时，并不能单纯地用瞬时功率来评判对效率的影响。只有在系统处于低功率工况时才需要增加开关损耗以提升相应的结温，表4 中部分平均功耗指的是电流为17 和20A 这两个阶段的平均功耗。不可否认采用主动热管理策略会略微提高此部分的损耗，整体变化相对来说不大，最主要的原因是此阶段相应的系统电流较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmuc0SJIaJ03W1moqJibIELu21yryrzD36GVOGTBOCJ6YOQKQqf9aXGmCFvAwev5UqylMJPLKzjNjQ/640?wx_fmt=png&from=appmsg)

综上，相较于未采用任何控制策略的情况，采用基于变延时开关的主动热管理策略时整体平均功耗Pave约13.92W，降低了12.62%，期望寿命约40091h，提高了218%，结温波动控制效果最佳； 引入结温控制系数后，在温差负半轴不采用主动热管理策略的情况下，整体平均功耗明显下降，约为12.32W，降低了22.66%，功耗表现最优，这种情况下结温波动幅度加大，期望寿命下降为26616h， 寿命表现依旧优于未采用任何热管理策略的情况； 调整结温控制系数后，结温波动幅度随之下降，期望寿命也上升到35400h，但此时整体平均功耗调整上升到了13.07W。

5 结论

本文提出一种新型的SiC MOSFET 主动热管理方法，首先推导了主开关损耗、辅助开关延迟时间与结温之间的映射模型；然后设计了基于变延时开关栅极驱动电路，实现栅极驱动电阻的等效连续调节，并完成开关损耗和结温的主动调控；最终，进一步提出温控操作区间和结温控制系数的概念与设计方法。本文以全桥逆变器为例，通过实验得到以下结论： 

1）本文所提出的基于变延时开关的SiC  MOSFET 栅极驱动电路可实现开关损耗的动态连续调节。 

2）结合寿命预测模型，采用所提出的主动热管理方法可以显著降低功率变化导致的SiC  MOSFET 结温波动，寿命延长约2.18 倍。 

3）通过构建结温控制系数和优化延迟时间的分配规则，能够调节平均功耗，在延长SiC MOSFET预期寿命的同时限制额外的效率损失，为研究人员提供了器件寿命性能和功耗性能之间的合理组合。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsn9J1vWt7UpbwdJhHwibTjxR1ZGBlBxtdgECnMTD8ol31ibFmssPznAkKdVkeR21tShuYqDrM7Wz73g/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsn9J1vWt7UpbwdJhHwibTjxRZ3szUe31R9A6C3o4fBIENxzhz8ribeBVpQF1VCoQCp4VPdqrD5qoWFw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn9J1vWt7UpbwdJhHwibTjxRDq2eEAB4b86loaxw0I9FJaRJKn9QByDdahLicCVWX7Iy4659ujaxkWw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)