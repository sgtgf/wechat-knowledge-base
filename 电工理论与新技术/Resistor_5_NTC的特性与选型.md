# Resistor-5：NTC的特性与选型


> 原文地址: [https://mp.weixin.qq.com/s/xwZ9P-ixmosrM5cG-MwlYA](https://mp.weixin.qq.com/s/xwZ9P-ixmosrM5cG-MwlYA)

_![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQcKblTYNJbFPCclNwZPC6f8YBAshmIibOp6XG8fSN5QKNY5vBUTjCAq8ib7Yiaa2RO6TFPQd2DAcYcQ/640?wx_fmt=png)_

__**_★★★_**_Resistor-5---NTC的特性与选型_**_★★★_**__

_€1.耐热性，热稳定性_

NTC温度传感器的稳定性用在其极限工作条件下经过较长时间后其电性能的最大位移、R25和B值的偏差来表示。例如**_图5-1_**显示了常规NTC的R25为10kΩ的R25和B值的长期偏差。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQYQ3fL2ic9KrQOeY1hibPLFibIf2HzXBxEO3sdPPC4JLibER3bk0nnD3GFqA/640?wx_fmt=png)

**_图5-1：老化特性(R25为10kΩ的NTC温度传感器在150°C下的干热_**

_€2.温度周期变化_

评估NTC传感器在整个运行寿命中性能的另一个重要标准是其抗热循环能力。为了评估这一点，产品会受到快速的温度变化，覆盖它们预期运行的极端情况，直到导致故障。这些测试充分证明了产品的高可靠性：有的焊接类型可以承受超过5000个循环，而玻璃封装类型超过100000个循环没有故障。

__€3._热时间常数和响应时间_

NTC传感器的响应速度由其时间常数来表征，时间常数越短表示响应速度越快，在温度波动频繁的特殊场景中，需要选择时间常数短的NTC。时间常数定义当传感器温度的变化非常快时，传感器温度变化从0%到63.2%（即1到1/e）的时间。测量时间常数的条件是很重要的。通常考虑两个：

环境变化：该组件最初在25℃时处于静止空气中，然后迅速浸泡在85℃的液体中，液体通常是硅油，但也可以指定其他液体，例如用于饮用的水等。

通电/断电条件：在静止空气中施加相当于85°C的电力加热组件，然后去除电力，在温差的63.2 %测量冷却时间。

**_图5-2_**代表了从25°C的空气向沸水温度转变的锅炉传感器的典型电压降变化。该图显示，当测量的电压对应于72.4°C的等效温度时，响应时间约为4s。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoGjVgtDbKzm4A4f7B13KwTFiapY4G8WdLTF3RFEMZtK6tEXRhsjrJz1yg/640?wx_fmt=png)

**_图5-2：锅炉传感器经历从25°C到100°C的突然温度转变的典型输出_**

__€4._选择NTC温度传感器_

_步骤1：_

从NTC系列中决定需要的传感器系列，选择取决于操作温度范围和其他标准，如：精度，尺寸，需要的机械装配结构，即裸芯片、SMD、环氧涂层、模压、表面传感器或玻璃密封，引线长度和直径。

_步骤2：_

决定需要的R25的值。参考在步骤1中选择的传感器系列的R/T特性。在这些特征曲线中，该系列中的每个传感器都以其R25值来区分。选择一个R25值，在使用场景，平均工作温度在1kΩ和100kΩ之间的电阻，或最适合的电子测量电路电压和电流范围的值。

_步骤3：_

确定R25上的公差。一般来说，可以预先评估或者定义在应用场景中应该测量温度的ΔT的准确性。传感器电阻的相对公差（ΔR/R）为：ΔR/R=α x ΔT，其中α为电阻温度系数（参看[Resistor-4：负温度特性电阻（NTC）](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486852&idx=1&sn=60319e9dcc480ea784ef74410e48f1e5&chksm=c335471bf442ce0d4437b0922970bd9c61704f4d2975749749580fd97b880f47c253e7c9c0d7&scene=21#wechat_redirect)部分）。为了计算R25（ΔR25/R25）上的相对公差，只需从ΔR/R中减去由B值引起的ΔR公差。

_步骤4：_

使用各自数据表的R/T表，从满足步骤3中计算的要求的系列中的

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQfnXoeHbGMo2uYRDVJpxSKMQW4Hc5sj1yic1oATaZhUCmeVMkreru88A/640?wx_fmt=png)

选择传感器。使用RT计算文件，可以从网站上获取大多数NTC热敏电阻的RT表。

_步骤5：_

对于其他诸如响应时间和组件长度等重要要求，请着重看步骤一。虽然标准范围为25°C的最窄公差，但我们可以根据要求，联系厂商调整其制造工艺，以在选择的任何温度下提供最窄公差。

_步骤6：_

NTC本质上也是电阻，既然是电阻就也会涉及到降额问题，如**_图5-3_**的NTC降额曲线图，即在特定的1环境温度下，最大电压，最大工作电压，工作电流应作出对应匹配。比如我们要使用的场景温度是50℃的恒温箱而不是环境温度25℃，那么NTC的最大工作电压就要下降到1V以下，最大工作电流需要在0.05mA左右，避免自发热影响测温精度。（关于温度上升，最大工作电流上升，是因为温度越高，NTC的阻值越低，I=V/R）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoGbEVjSg2mqHlzfjDubS461QnpRnJKZrWjknVPJiaAicuR8zznLickw1XNQ/640?wx_fmt=png)

**_图5-3：最大电压/最大工作电压/电流降额曲线_**