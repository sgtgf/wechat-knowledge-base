# DC-DC-14：什么是Cuk升降压DC-DC?


> 原文地址: [https://mp.weixin.qq.com/s/--N05Mpeq6y3-Dlx8SC30g](https://mp.weixin.qq.com/s/--N05Mpeq6y3-Dlx8SC30g)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCep3I4ypY193gRc6icCXXRia6iaaHgptn2H3lrbpA41w5vicynf4YxDjyTZQ/640?wx_fmt=png)

____**★★★**______DC-DC-14---CUK升降压拓扑______**★★★**____

____€1.CUK__的工作路径__

Cuk拓扑电路中主要元器件包括耦合电容C1、开关管S1、boost电感L1，buck电感L2、S2续流二极管VD、滤波电容Cout。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdH4omHI7PfjK78n3lVerqdNiawZliae80VBESfXQ1vmFp2DoGaLe8yadeQ/640?wx_fmt=png)

**_图14-1：**开关S1导通时电流路径**_**

如图**_14-1_**所示，在开关导通阶段，输入电压经过电感L1、开关S1到地，电感L1充能。而右侧由于电容C1在上一周期开关关断时充了能，在本周期开关导通时将能量释放，此时二极管S2截止，这时相当于是电容充当电源放能，给电感L2充能，右侧的电流路径为电容C1→电感L2→开关S1→负载Rload。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdH7757duIht55Jko0r6S03ibZCiaeWW3CWQpR7zSso9wubk2QCBTFZYzKA/640?wx_fmt=png)

**_图14-2：开关S2关断时电流路径_**

如图**_14-2_**所示，在开关断开阶段，在左侧，电源Vin和电感L1的感应电动势之和给电容C1充能，电流方向为电源→电感L1→电容C1→二极管VD。在右侧，电感L2放能，电流经二极管VD续流，电流方向为电感L2→二极管VD→负载Rload。

________€2.CUK关键公式推导________

Cuk电路在开关导通时，电感L1、L2充能，C1放能；在开关关断时，电感L1、L2放能，C1充能，电容C1起到能量耦合传递的作用。根据伏秒定律，两个电感在开关导通和开关关断阶段的电流变化量是相等的，对于左侧电感L1分别在on时间段和off时间段内电流变化量为：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHQZnQUsUZYIIOvPLLgpcT5s4o4kgAh07x0lTBfnDa5LtAwN8eKwygew/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHWpJO17X6Ha1uTTFzwUuoVTH6BsSt2ia7aAicsQ0ForIKTvvnaBKMMCtg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHAxH9h9uEILuXnSc17OUmfyJPenh7E0Q5wZowcEcibUIUCb88Eo9ibtIQ/640?wx_fmt=png)

即：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHBatraadzrJNPFrawFccpAvSE9fibVTGiadt6FEaqnXKOfUkXra5vbX8Q/640?wx_fmt=png)

对于右侧电感L2，on时间段和off时间段内电流变化量为：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdH89XsZ7LPkJJv6y9MXOHKeAPn9At6L04yPVdxNItibWjADibE6hphmDSA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdH21KcAbFL9cibYD5XRYnriajCB8k5PZOuF3H4qrC34mkfAeQibMtzVxwBQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHM5Qz7nibQzlcPRH5e6hibuC4ArDQHpQ81BxouUsJrompwR38JicATFic5Q/640?wx_fmt=png)

 即：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHBh6g5sMHEKhicA2GBtqHGJJvadiabhpYWPbB8UGvf9GMadzf86GRBYGQ/640?wx_fmt=png)

联立这两个等式，消去VC1，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHEhv8wJI7dWhp3zydes6ZueNWuoqvbWic5nWOxayg5Rh8ST7ZlO1Fn5w/640?wx_fmt=png)

此输入输出关系和我们前面分析的升降压电路一样，但此电路结构比buck-boost更复杂，相对来说应用较少。