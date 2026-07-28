# DC-DC-25：DC-DC的布局布线要点-3


> 原文地址: [https://mp.weixin.qq.com/s/-fUnEQ\_htoFIx\_ifYR-Ikw](https://mp.weixin.qq.com/s/-fUnEQ_htoFIx_ifYR-Ikw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7aBb8GrmEsqch10IGEFnFbdcmhQfxDxMWLQVbUhX3L6iaGyejz8DMRLA/640?wx_fmt=png)

____**★★★**______DC-DC-25---DC-DC的Layout要点______**★★★**____

引言：DC-DC的布局布线少不了要使用过孔和铜皮，过孔和铜皮的相关寄生参数对于功率布局走线需要格外注意，本节简述过孔铜箔的相关参数估算以及使用注意点。

__€1._铜箔的阻抗_

**_图25-1_**表示单位面积铜箔的阻抗值。通常为厚35um、宽1mm、长1mm铜箔面积的阻抗值。通常可利用下列公式进行阻抗计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MjLcL2W0PtANibYDcUvaWkKiaxPvNyNrk4wRupiclfiaYKZuCDZ4FkibPFag/640?wx_fmt=png)

𝑙 ∶ 导线的长度 \[𝑚𝑚\]

𝑤 ∶ 导线的宽度 \[𝑚𝑚\]

𝑡 ∶ 铜箔的厚度 \[𝜇𝑚\]

𝜌 ∶ 铜的电阻率 \[𝜇Ω𝑐𝑚\]

𝜌(𝑇=25℃) = 1.72 𝜇Ω𝑐𝑚

𝜌(𝑇) = 𝜌(𝑇=25℃) × {1 + 0.00385(𝑇 − 25)} \[𝜇Ω𝑐𝑚\]

𝑇 ∶ 温度

根据从**_图25-1_**读取到的每单位面积的阻抗值RP来计算，结果如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0Mws4bxjz9lmTMfnbtVrOyIcoULXVKde0Y6yTK7WUXAo2vuK5ENw5vgA/640?wx_fmt=png)

𝑅𝑃 ∶ 从曲线中读取的阻抗值 \[𝑚Ω\]

𝑙 ∶ 导线的长度 \[𝑚𝑚\]

𝑤 ∶ 导线的宽度 \[𝑚𝑚\]

𝑡 ∶ 铜箔的厚度 \[𝜇𝑚\]

比如25°C时，宽3mm、长50mm的铜箔的阻抗值，可以根据下列计算得出是8.17mΩ。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MWrlerXKf2oInmsWWmiat4iaicW1lpfoDYx7yDyUCSjQ1pur0HNX5H319w/640?wx_fmt=png)

根据该阻抗值，流过3A电流时的压降为24.5mV，当温度上升至100℃时，阻抗值增加29%，压降也增加至31.6mV。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MjIocolsjibJJyvfLNPnC10Sk8VgXuKYGictQq7BUzAxML34RjzKCcjzQ/640?wx_fmt=png)

**_图25-1：单位面积铜箔的阻抗值_**

__€2.铜箔的感抗__

铜箔的感抗可以用以下公式表示。从公式可以看出，PCB布线的感抗值几乎不依赖于铜箔的厚度。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MBEbjEqFQgIsUZ9WCricqDzp82qzbzCjIgZXMMd0uYcRhAFNWNGqeicbg/640?wx_fmt=png)

𝑙 ∶ 导线的长度 \[𝑚𝑚\]

𝑤 ∶ 导线的宽度 \[𝑚𝑚\]

𝑡 ∶ 铜箔的厚度 \[𝜇𝑚\]

**_图25-2_**表示的是铜箔感抗的计算值。从图表可以看出，即使线宽增加2倍，电感值也不会降低到理想状态。想要抑制寄生电感的影响，缩短布线长度是最好的解决办法。假设电感值L\[H\]在电路板布线上的流过的电流在时间t\[s\]之内的变化量为i\[A\]，则将在其电路板布线的两端产生以下电压。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MlaTHAfrRnsTkTBRzwbQyJP2sGnnBsSiaeMSwB0Xx5DC1upx3UG7IkTg/640?wx_fmt=png)

例如在寄生电感值为6nH的电路板布线上，在10ns内流过了2A的电流时，将产生以下电压：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MdnSVjic5PZBBewCMMvcsoNnnb1PYbw60XShvSwcibC8gsQyuiayDSLzTA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MdImenWMfBLTyicRI1QnbDwqfWOkqQDzM9uhqJdpqJ1Y7Sgq1tMJXiaHQ/640?wx_fmt=png)

**_图25-2：铜箔的感抗_**

____€3.__过孔的阻抗__

过孔的阻抗值用以下公式表示。**_图25-3_**表示的是板厚1.6mm、镀层厚0.015mm (15um) 条件下过孔的阻抗值。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MN5JztJPpHWUfXWoGMqIBbVibs8DNSZscHOic8FMcykfyLjubECTne3Bw/640?wx_fmt=png)

ℎ ∶ 板厚 \[𝑚𝑚\]

d ∶ 过孔直径 \[𝑚𝑚\]

𝑡𝑚∶通孔镀层厚度\[𝑚𝑚\]

𝜌 ∶铜的电阻率\[𝜇Ω𝑐𝑚\]

𝜌(𝑇=25℃)=1.72𝜇Ω𝑐𝑚

𝜌(𝑇)= 𝜌(𝑇=25℃)×{1+0.00385(𝑇 − 25)} \[𝜇Ω𝑐𝑚\]

𝑇 ∶ 温度

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MMtmvOJ61ibWDloc3NZssicP7HUwDQrxzwCG3GafYsepuuoRepfkp6iaJg/640?wx_fmt=png)

**_图25-3：过孔的阻抗_**

____€4.过孔的感抗____

根据Howard W. Johnson的方法，过孔的感抗值按以下公式表示。**_图25-4_**显示了计算结果。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MD4TUM6PGNDyNWJcyP7zcUniaP2xGFpE5L2OOoHNwdL4XK3wfGtk74Rw/640?wx_fmt=png)

ℎ∶ 板厚\[𝑚𝑚\]

𝑑 ∶ 过孔直径\[𝑚𝑚\]

感抗值虽然很小，但布线呈直角时会导致EMI恶化。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0M2HGpRsIPiaGZrDiaLc06vP8UqWe44DdzGcYvK2O43oe8Bpb3ugmNKOUA/640?wx_fmt=png)

**_图25-4：过孔的感抗_**

____€5.过孔的容许电流____

过孔的直径乘以π后的值相当于线宽，可以根据**_图25-5_**中导体的电流导致的温度上升图表推测出过孔的容许电流值，但是由于过孔的镀层厚度只有18um，容许电流能力要低于图表所示镀层厚度为35um的导线。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSm7ogTicDsrF9hfoUTNlobw9LLwafxScq95oat9WibR5GjIiaMQtADYmQFlOcS182RfGJjZw8eMwlwA/640?wx_fmt=png)

**_图25-5：镀层厚度、导线宽度、电流导致的温升_**

在前述布线项中，曾建议在镀层厚度为35um时，按照1A电流使用1mm以上宽度的导体进行布线，但是因为过孔的镀层厚度只有一半，所以建议按照1A电流使用2mm以上宽度的导体进行布线。**_图25-6_**是容许电流的示例，请根据使用用途配置过孔的个数，确保容许电流、阻抗、感抗满足规格要求。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS0ox7NSiaGiaXy3JoRCr5V0MmiavSuNZUVpTriacqdujVnicmdMmuTJnRqsqkEM2W6nXHzibOT5NJxwqyA/640?wx_fmt=png)

**_图25-6：容许电流_**

____€6.__拐角布线__

如果将拐角布线折为直角，阻抗将在拐角处发生变化，这会导致电流波形紊乱，产生被称为“反射”的波形畸变。开关节点等频率较高的布线EMI可能会恶化。如**_图25-7_**所示，尽量将拐角处做45°折线或者圆弧弯曲状处理，弯曲的半径越大，阻抗的变化越小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjME7JicJYZvR2m3hHnaTF0ezxGeLvSWFHqWfKhQ0GW9sF5dj2MSrJp2icw/640?wx_fmt=png)

**_图25-7：拐角布线_**

（传送门：[DC-DC-23：DC-DC的布局布线要点-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491131&idx=1&sn=d7dbefae7037033980e8a34c6a068cee&chksm=c33554a4f442ddb25963159702fb4e70141f62802ed880691b0f159611dc5c4497cac9aaaedf&scene=21#wechat_redirect)）

（传送门：[DC-DC-24：DC-DC的布局布线要点-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491197&idx=1&sn=1fd893687a4f0ad3f1b957038d204ee3&chksm=c33554e2f442ddf4ec12e95d13d4495dd4b7e53a939b304c4d6f5eb4771a9ae5686682c8bb63&scene=21#wechat_redirect)）