# Resistor-7：NTC的线性化


> 原文地址: [https://mp.weixin.qq.com/s/E\_GACo3nGBd5O\_i8C3zeOQ](https://mp.weixin.qq.com/s/E_GACo3nGBd5O_i8C3zeOQ)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSdWnrnnEHyFjk39wFYehiauhZsRibDfHbZHIibx2zs9RHreBRmTGj9icL96kQfkC8ARhVyV0UHcONibaA/640?wx_fmt=png)

_**_★★★_**_Resistor-7---热敏电阻的线性化_**_★★★_**_

引言：如果温度范围大，则热敏电阻器电阻值的变化幅度过大，不易进行采样计算处理，因此需要对热敏电阻器进行线性化，在缩小变化幅度后再使用。相对于温度变化，线性化有能够得到正斜率输出电压的电压模式和能够得到负斜率输出电压的电流模式两种。

___€1.__电压模式线性化_

电压模式适用于已知输入电压Vin不变的情况下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHiccEIT3EW8ElIAiaLQjgqM2snHS5cSBlYFY5uzOyO89gdCia1paiadtaxmQ/640?wx_fmt=png)

**_图7-1：电压模式线性化连接图_**

____€2.__电流模式线性化__

电流模式适用于输入电压Vin未确定，但输入电流Iin不变的情况：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicQW2GSBfgOhLPVAibziaXYwd2l3uzddc9LgzlMjYhNJ70Hhyx1bFXMlvA/640?wx_fmt=png)

**_图7-2：电流模式线性化连接图_**  

____€3.__._如何算出R1的值_

R1的计算方法是通过电压模式或电流模式的使用温度下的输出电压来进行计算，此处对电压模式（串联连接）进行了示例演算，条件如下：

#1 输入电压：Vin

#2 串联电阻阻值：R1

#3 热敏电阻阻值：RT

输出电压Vout可以根据以下公式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHiczvZuUBLdNteesQbnpePYXbRibkqm8MWY8yAPbCwpm1URHWxMPricHwLA/640?wx_fmt=png)

___€4.__找到适合使用温度范围的R1_

在使用下限温度，中间温度，上限温度时，热敏电阻的对应的电阻值和输出电压如下：

#1 下限温度 RTL, VoutL

#2 中间温度 RTM, VoutM  

#3 上限温度 RTH, VoutH

计算每个温度下的输出电压：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicHIoibKaGa3g9Ad7icMQBN2EIxZW7eAibKSr5OGEkG2OSk9Sut20PWCSpg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicYUib3vC1XqsBTJGJ6Me21icvyckt0pibATKwCyibOSlqvoCDW7YaLL75MA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicBicbZeK85ck3I3rMwRqmZcnZEj5tWDbyKT2algkTlibLxnly7kPzriaQg/640?wx_fmt=png)

适于线性化（两段斜率保持一致）VoutM - VoutL = VoutH - VoutM ，整理得到2×VoutM  = VoutH - VoutL 。将各个温度下的输出电压式2，式3，式4代入2×VoutM  = VoutH - VoutL并获得R1，可得出以下方程式：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHic2EbYTUCF6bSSckfuHh9JiaJvv6waVH9HtvWNG48bD9DgqWJMJTVHicLA/640?wx_fmt=png)

_______€5._____NTC热敏电阻线性化示例：__  

条件：

#1 Vin　　　　　　　　　　  1V

#2 使用温度范围 　　　　　   0～100℃  

#3 热敏电阻的B常数 　　　    3800  

#4 热敏电阻阻值R0 at 25℃ 　22kΩ

根据热敏电阻的R-T特性：R=R0exp{B(1/T – 1/T0)}和T(K)=273℃+t℃（[Resistor-4：负温度特性电阻（NTC）](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486852&idx=1&sn=60319e9dcc480ea784ef74410e48f1e5&chksm=c335471bf442ce0d4437b0922970bd9c61704f4d2975749749580fd97b880f47c253e7c9c0d7&scene=21#wechat_redirect)），热敏电阻在0℃，50℃和100℃下的电阻值计算如下：

RT0\=70.637kΩ

RT50\=8.207kΩ

RT100\=1.698kΩ

从这些值中，求出R1为6.52kΩ。用此R1值绘制Vout图表，如**_图7-3_**所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQUeuic4I0mictzETeBkhnoPkWG9pLiaicps7gRhmictq9FzIULS0KFrXOvr6zKsx7nDeB4VEQkI6sSiaUA/640?wx_fmt=png)

**_图7-3：热敏电阻的线性化前后曲线_**

从**_图7-3_**可以看出从0～100℃，NTC的R-T曲线呈线性化。