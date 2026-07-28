# 电源IC是如何失效的？损坏过应力分析

原创 硬件笔记本 2023-12-17 11:08 四川

> 原文地址: [https://mp.weixin.qq.com/s/6lUGXZLN8S9bA8SOZkB24A](https://mp.weixin.qq.com/s/6lUGXZLN8S9bA8SOZkB24A)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

# 在我们项目开发和产品量产过程中总是会出现一些 IC 损坏的现象，通常要想找出这些 IC损坏的根本原因并不总是很容易。有些偶发性的损坏很难被重现，这时的难度就会更大。而且有些时候 IC 的失效表现简直就是破坏性的，可能IC已经被烧得一塌糊涂，即使求助IC原厂分析，往往也不一定能找出失效的根本原因，出现这种情况，作为工程师的你估计头皮要感觉到阵阵发麻了。

  

电源 IC 的失效常常是其输入端受到电气过应力（ EOS）的结果。在很多情况下，器件失效的原因都是输入电压太高了。本文对电源 IC 输入端 ESD 保护单元的结构进行了解释，说明了它们在受到 EOS 攻击时是如何受损的。造成 EOS 攻击事件的原因常常是热插入和导线或路径电感与低 ESR 陶瓷电容结合在一起形成的瞬态效应。在电路设计中采用一些特别的设计可以避免 EOS 的发生，防范它们  

# 可能带来的危害。本文也将对 Buck 转换器输入端的结构进行介绍，给出过高的输入电压造成器件损坏的机制，通过不同的应用案例说明过高的输入电压是如何发生的，还将提供相应的问题解决方案。

  

# **Buck 转换器输入端的结构**

下图显示了一个Buck转换器 IC 内部的基本构成，其中包含了几个静电释放（ ESD）防护单元。

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMic2Fw7QPI0gWKGVjgficjsvtDiccx2dASibBtJJDXAYsPvaUK6h7jgqjqA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

上图中，电源输入端 VIN 被一个很大的 ESD 单元保护着，其保护范围包括内部稳压器和 MOSFET， 因而可以承受很高的静电电压。SW 端子内部通常没有 ESD 单元，因为大型 MOSFET 本身就可以像 ESD 保护单元一样动作，静电电流可经其内部体二极管流向 GND 或 VIN 端，也可利用它们的击穿特性实现保护。BOOT 端有一个 ESD 单元处于它和 SW 之间，其它小信号端子也各有一个小型的 ESD 单元，它们通常都和输入串联电阻一起保护这些小信号端子免受静电放电的危害。  

#   

  

# **ESD 和 EOS 的差异  
**

当超过 ESD 单元钳位电压的过电压出现在 IC 端子上时， IC 会不会损坏就取决于 ESD 元件被击穿期间通过它的能量的多少。  
ESD（ Electro Static Discharge, 静电释放）和 EOS（ Electrical Over Stress, 电气过应力）都是与电压过应力有关的概念，但它们之间的差异也很明确：

ESD 的电压很高（ > 500V），持续时间相对较短（ < 1µs）

EOS 的电压相对较低（ < 100V），持续时间更长一些（通常 > 1µs）

当持续时间更长的 EOS 事件发生时，冲击 ESD 保护单元的能量就会更多，常常超出 ESD 保护单元的最大冲击能量承受能力，这样就会在 ESD 保护单元中积累太多的热量，最终导致严重的毁灭性结果。通常情况下，芯片中支撑ESD 保护单元的其他部分也会连带着一起受损。

  

# **电源热插入导致的输入端过应力**

一种造成电源 IC 输入端受到 EOS 冲击的常见原因是电源的热插入事件，这种事件发生在处于开机状态的电源被引入一个系统的时候。这种系统的输入端通常含有低 ESR 的陶瓷输入电容，它们与电源引线的电感一起发生谐振，可以导致高压振荡信号的出现。下图显示的就是这样的场景，其中的电源是开着的，有两根引线将电源接入应用系统，其中的开关 S 用于模拟热插入的行为。

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMHISpnINNiaBHIZFob1Ep32rwysP1UDm4O8BwN3ruukib7bD4icWjicDYrw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

出现在系统输入端的电压振荡信号的幅度与很多因素有关：电源供应器的内阻，引线的电阻和电感量，开关 S 的电阻，输入电容 C1、 C2 的电容量和它们的 ESR 的大小。  
作为一个例子，我们假设 12V 电源供应器具有很大的输出电容，电源引线的长度为 1.2m 并且具有很低的电阻，开关S 的阻抗也是很低的， C1、 C2 是 10µF/25V X5R 1206 的 MLCC。电源引线的总电感大约为 1.5µH，包括连接器在内其电阻约为 10mΩ。两只电容在 12V 直流偏置下的实际总容量约  
为 9µF，而且它们各自的 ESR 约为 5mΩ。  
下图显示了热插入事件发生在这样的输入电路时的振荡过程的模拟结果。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMFXABiaYat0UjaelrBPR4aqSHuWTtje9NUqoQy4hlYBqTicic8FX7CSu4A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

从模拟结果可以看到，这样的热插入过程导致的输入电流高达大约 30A，由引线电感和输入电容导致的电压振荡波形的峰值几乎可以达到直流输入电压的 2 倍。  
下图显示的是对同样的电路进行热插入测试的情形，其中的开关 S 被换成了 MOSFET，该 MOSFET 是用脉冲发生器驱动的，目的是让热插入的动作变成是稳定的，同时也是可以重复的。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCM69QyCLFAG6xPPJtBeQv2tVNysoKDLyk4oCiaDS3bwMyRw4GqiauyWg0g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMAyKHpy1pLqJPLXlcIicVWmy7err5ZBHcAPZfSL5455lvuw5pY1FYZcg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

从上图可以看到，实际的热插入事件导致了比理论上更高的振荡电压峰值，这是由于 MLCC 输入电容在直流偏置电压下的电容量的非线性变化导致的，它的这种特性在图中的右侧显示出来。当电容上的电压升高时，它的电容量会下降，对其充电的电流进入更小的电容后就会得到更高的电压。在此案例中， 12V 电源的热插入事件能导致大约 30V 的最高电压峰值。

  

# **消除热插入期间电压尖峰的措施  
**

上面已经解释过热插入期间电压尖峰发生的原因，下图 将与输入电路有关的参数表达了出来：电源供应器的内阻Ri，电源传输线的电感 Lwire 和电阻 Rwire，具有低 ESR 的输入电容。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMxWKrr5vjqmiapCF4O9MYaVOnR9ibhGiatLSl7NK4voibWqdaftyEic0aB5w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

有多种方法可以降低热插入期间的电压振铃信号的幅度：

方法 **1**：大多数电源供应器是使用了很大的输出电容的开关模式电源适配器，这种电路的输出阻抗很低，遇到热插入事件时可以快速生成大电流。如下图那样增加一个共模电感和一只 ESR 比较高的小型电解电容，适配器的输出阻抗就会增加，谐振过程会受到抑制。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMViaNezicVtaxriaUKgiaibwgN45KBqukvKYJzJlA6FZlpWhQavxUfDudbAA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

方法 **2**：使用较小线径的适配器电缆来增加电缆的阻抗。为了达成好的谐振抑制效果，电缆的阻抗应该大于 0.3Ω，其坏处是电缆上的压降会增加。

  
方法 **3**：增加电缆两条线间的耦合程度。两线间更好的耦合可以形成相反的磁场，这对谐振的抑制有帮助。如下图显示了对 75cm 长、规格为 18AWG 的同轴电缆的模拟，根据漏感测试的结果，两线间的耦合度大概为 0.8。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMaldYj5fnCXq1PAS9vEKiaEktticSJpjMibJyf2nZDal8zG0xeRQMDPhCQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

通过使用不同类型的电缆进行测量，可以确认耦合良好的线对谐振过程会有更好的抑制效果，相应的热插入过程所导致的电压尖峰也更低。

  
方法 **4**：由 LC 电路形成的谐振可以通过给输入电容并联一个 RC 电路进行抑制， RC 电路的参数可用下述方法进行计算，RS 的计算公式如下图：其中 LP是电缆的电感量， CIN是系统的输入电容， ξ 是希望的抑制系数。在前述的热插入案例中， LP 大约是 1.5µH， CIN 在 12V 时为 9µF。当我们选择良好的抑制效果(ξ = 1)时， RS = 0.2Ω。抑制电容 CS 的值必须足够大以避免它在热插入造成的电流脉冲出现期间被过度充电，其电压增量 VC = IC \* 1/ωC，其中的 ω 是 LP 和 CIN 的谐振频率（测量数据大约是 40kHz）。由于电流脉冲的幅度是 35A，要想使充电造成的电压增量小于 2V，我们需要电容的值大于 70µF。

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMxwljeSQmI16P1p1lKcE9TxCLVEdHc8TnE19RhFEDykS9Uldl6v2ybw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在加入 100µF 和 0.2Ω 的 RC 电路后，针对上述的热插入案例再次进行仿真模拟，我们可以看到谐振被完全抑制住了，电压的过冲低于 2V，参见下图所示。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMm5nd88ibLmc1lLtNicQFUhZiaV5zoqRGeS1c0GlgNp9nrC4qqdpwzzzFw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

在实践应用中，RC 抑制电路可以很容易地通过使用一只 100µF/25V 的电解电容实现，它需要和陶瓷输入电容并联在一起。之所以这么简单，是因为大多数 100µF 的电解电容在 100kHz 频率下有大约 0.2Ω 的 ESR。在下图中的右侧电路就在输入端加入了 100µF/25V 电解电容，热插入试验表明其输入端的过冲会被完全抑制掉，不会有损毁风险再出现在 IC 上。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMlFAUIpl0mosTiad2ic6ueibM4BKOxRMIic7krYNXnc58uRP8zWQYTVa4GA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

# 其他造成电源 IC 输入端 EOS 的原因  

  

除了热插入造成的冲击以外，还有其他一些状况可能造成电源 IC 输入端受到 EOS 的攻击：

  
**a. USB** 输出端短路测试造成 **USB** 开关输入端损毁  
下图显示的是一个典型的 USB 开关的应用电路图，有一个 1µF 的去耦电容放在靠近 IC 输入端的地方，电容前面有大约 10cm 的铜箔路径将它和 5V 主电源连接起来。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCM7TVrmXKPB8j7dwZ7AcDTic7PaclzD36QbvbsUxwLTAlbXKFLxx0E9tg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

USB 端口都需要进行短路测试， 这个测试通过一个开关来模拟， IC 需要在侦测到短路以后快速将其 MOSFET 开关关断。从上图中的实例可以看到， MOSFET 开关关断的动作是有延时的，因而会有一个短时大电流流过 IC 之后关断才会发生。由于输入线有电感存在，此电感和输入端去耦电容 C2 会一起发生谐振，因而可在示波器上看见输入端出现了高压脉冲，这很可能超过 IC 的最高耐压能力并将其损毁。

  
为了解决这样的可靠性隐患，用于热插入风险防范的类似措施可以被纳入考虑范围，因此我们要在电路中加入类似电解电容的 RC 抑制电路。抑制电路的参数计算方法是类似的，我们可以利用开关关断过程的 dI/dt 计算电容的值。实际上，一个 47µF 的电解电容就可以将电压峰值控制在大约 6V 上，如下图 所示。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMZBcnNy2y8aWbBuIfhkdQW9jD3DwVzkibxFzmqNkibfxHUTt9BHUlshWQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**b. Buck** 转换器的反向偏置问题

  
工作在强制 PWM 模式下的 Buck 转换器在经由输出端反向偏置时会表现出 Boost 转换器的行为。

  
假如转换器的输出端由高于预设输出电压的外部电源供电时， IC 内部的下桥 MOSFET 会从输出端吸入电流，再与上桥 MOSFET 一起形成一个Boost 转换器。如下图所示，该电路的输出端就由一个缓慢上升的 5V 电源供电，它的输入端电压将上升并最终将其 ESD 单元击穿。  

![](https://mmbiz.qpic.cn/mmbiz_png/iapXlcghssnVic3d76YhNB1J48hs4ic2wCMVSB5CA27aNopBk8DqIH0ba2cA5V9M3aZ0cbdQWsDfgP3rYkdKSfvEg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

像这种电源反向偏置的情况并不经常发生，但在存在电池的系统中就很容易出现。又假如在某些设计中使用了动态电压调节技术（通过反馈网络对输出电压进行调节），如果输出电容很大，又恰好遇到了输出电压的设定突然变低，Boost 的动作就会发生了。

  

# **总结  
**

电源 IC 的损坏经常是由于输入电压过应力造成的，这在电源热插入导致出现过高电压尖峰或由线路电感和低 ESR 陶瓷电容形成谐振时就会发生。

  
当电源 IC 输入端的 ESD 单元遇到超过其能量承担水平的冲击能量时就会被损坏。造成 IC 损坏的 EOS 能量通常要比正常的人体模式（ HBM） ESD 能量高好几倍。当 ESD 单元被损坏的时候，作为其承载体的硅晶圆也会受到伤害。在大多数情况下，承载体的损坏会直接导致功率级的不正常运作，引起直通短路、功率级烧毁等问题。

  
具有折返特性的 ESD 单元在被触发以后可能保持在低于工作电压的电压上，这会在被触发之后立即导致大电流的出现。

  
由于热插入事件和电源线上的谐振效应都会将电压尖峰引入 IC 输入端，因而在电源设计过程中必须对这样的瞬态过程进行检查，确保在任何情况下都不会在 IC 输入端形成高电压。由于 ESD 单元的激活电压总是高于器件的绝对最大额定值，应用中能够出现的电压就不能超过 IC 的绝对最大额定值，以便确保 ESD 单元在工作过程中不会被激活。

来源：https://www.toutiao.com/article/6835126947312304651/

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条硬件大不同。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。