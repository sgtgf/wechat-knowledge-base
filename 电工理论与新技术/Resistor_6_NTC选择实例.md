# Resistor-6：NTC选择实例


> 原文地址: [https://mp.weixin.qq.com/s/GRTcys5xnvLdLwFeZh6ipQ](https://mp.weixin.qq.com/s/GRTcys5xnvLdLwFeZh6ipQ)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSdWnrnnEHyFjk39wFYehiauEK0DUsRWMKKHwzst8Eol9HuksWTnHicvdmU5EBhnSYLicf2OZ6rXyzwA/640?wx_fmt=png)

_**_★★★_**_Resistor-6---NTC的选择实例_**_★★★_**_

_€1.实例一_

需要一个NTC传感器来测量冰箱和冷冻室的温度，在-25°C到+10°C的整个温度范围内，温度精度为0.5°C。在此温度范围内，电路设计要求电阻应保持在2kΩ到30kΩ之间。

Step1：选择执行过程。由于温度必须进行高精度的测量，因此建议使用小直径的镍引线。它们的低导热性有效地将该组件与外界隔离，使其能够准确地监测冷冻室的温度。从“选择图”可以看出，NTCLE203E3系列组件是最合适的选择。

Step2：参考NTCLE203E3系列数据表规范。满足电阻应保持在2kΩ至30kΩ之间的要求的部件为NTCLE203E3202xB0型（x表示公差）。

Step3：计算R25上所需的公差。了解ΔT=±0.5K，并从NTCLE203E3规范中获取α在-25°C和10°C处的值（回顾[Resistor-4：负温度特性电阻（NTC）](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486852&idx=1&sn=60319e9dcc480ea784ef74410e48f1e5&chksm=c335471bf442ce0d4437b0922970bd9c61704f4d2975749749580fd97b880f47c253e7c9c0d7&scene=21#wechat_redirect)里的NTC公差章节）：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYpsC6PrbQnjjRjEtLv23xZibSqQejficGdqOVLQz9NFlO6IQBNxeicjaUQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYbtNFyUkqGiaqApvHwLibZS4BTdCqBshjPdiaMTCHPBgMlcaQMe1Ie5Bow/640?wx_fmt=png)

为了计算R25（ΔR25/R25）的相对公差，只需从ΔR/R中减去从这个数据表中获得的这两个温度下的ΔR值引起的ΔR公差。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYQh3kpOzI1xiaslUZrLZmSic0X4LIZ7iaKJXAZrQjs32oXzFl3v3xWpjqA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYvIBpFG0RmQIo3PhszHhkQWCHXicnNSpIibpPxNQbl1KTRS5y7hHe5t8g/640?wx_fmt=png)

取R25公差为1%。因此，所选择的组件是NTCLE203E3202FB0。

Step4：不适用。

Step5：现在假设所需的ΔR25/R25小于1%。虽然没有任何标准产品满足这一要求，但仍然可以指定具有不同参考点的定制产品，例如0°C，而不是满足较窄的公差规格的25°C。

_€2.实例二_

针对一种针对氢化镍电池的快速充电电路，在快速充电期间，必须监测电池的温升速率。如果达到1K/min，公差为±10 %，电路必须从快速充电切换到涓流充电。环境温度必须在10°C至45°C之间，以便进行快速充电，且备用截止温度（超过该温度时充电将完全关闭）为在60°C，温度的测量精度预计为±2°C。

Step1：表贴NTC可用于此场景，可以参考NTCS系列，而不是NTCSMELF系列。

Step2：选择组件的R25。从NTCS系列的R/T规格可以看出，具有R25=100kΩ的类型是合适的，即NTCS0603E3104xXT。

Step3：可以在1%到5%之间选择R25公差。根据NTCS0603 100kΩ的R-T计算曲线，我们发现在60°C的精度为1.73°C，R25公差为±5 %，精度为1.19°C时，R25公差为±3%。因此，我们选择R25公差为±5%的。

Step4：因此，精度最佳的传感器是NTCS0603E3104JXT。

Step5：现在验证所选部件满足“电阻温度系数”部分中关于温升速率（ΔT/Δt）的要求：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYwibUqecY6G9icaIiaH2ibnumCVKXRZc8q4vzDicwfm9mMecJbk6Jo12pliaQ/640?wx_fmt=png)

其中：

ΔT：温度差

Δt：产生此温度差的所花的时间Δt

因此，为了确保最大温升速率为1K/分钟，我们得到（取规格书中60°C下的α和R值）（[Resistor-4：负温度特性电阻（NTC）](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486852&idx=1&sn=60319e9dcc480ea784ef74410e48f1e5&chksm=c335471bf442ce0d4437b0922970bd9c61704f4d2975749749580fd97b880f47c253e7c9c0d7&scene=21#wechat_redirect)α的相对公差等于b值的相对公差）：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYvB1Uo8jRLxexNqIk6lRoKpkzSCAMJPoB56KIIv8wdxVucSl7MY2dow/640?wx_fmt=png)

通过测量恒流I下传感器的电压变化速率（dV/dt）来验证。然后可以确定电阻ΔR/Δt的变化速率（= 1/I ΔV/Δt）。

在相同温度下，具有传感器公差设定的极端值的NTC传感器的电阻为23820 ×（1-6.40/100）=22296Ω，α为-3.70 ×（1-1/100）=-3.66%K（α公差=B25/85公差）。所以相同的ΔR/Δt，即-881Ω/min在这个极端组件将限制最高温度上升速度ΔT/Δt 881×100/3.66×1/22296 =1.082K/min，仍然落在温升速率允许的±10%的公差范围内（1K/min+10%=1.1K/min）。