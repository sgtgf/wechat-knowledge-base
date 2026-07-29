# DC-DC-14：什么是Cuk升降压DC-DC?


> 原文地址: [https://mp.weixin.qq.com/s/--N05Mpeq6y3-Dlx8SC30g](https://mp.weixin.qq.com/s/--N05Mpeq6y3-Dlx8SC30g)

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_000_f429601ffc4a.png)

____**★★★**______DC-DC-14---CUK升降压拓扑______**★★★**____

____€1.CUK__的工作路径__

Cuk拓扑电路中主要元器件包括耦合电容C1、开关管S1、boost电感L1，buck电感L2、S2续流二极管VD、滤波电容Cout。

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_001_3fb46c220775.png)

**_图14-1：**开关S1导通时电流路径**_**

如图**_14-1_**所示，在开关导通阶段，输入电压经过电感L1、开关S1到地，电感L1充能。而右侧由于电容C1在上一周期开关关断时充了能，在本周期开关导通时将能量释放，此时二极管S2截止，这时相当于是电容充当电源放能，给电感L2充能，右侧的电流路径为电容C1→电感L2→开关S1→负载Rload。

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_002_0638843ba0fb.png)

**_图14-2：开关S2关断时电流路径_**

如图**_14-2_**所示，在开关断开阶段，在左侧，电源Vin和电感L1的感应电动势之和给电容C1充能，电流方向为电源→电感L1→电容C1→二极管VD。在右侧，电感L2放能，电流经二极管VD续流，电流方向为电感L2→二极管VD→负载Rload。

________€2.CUK关键公式推导________

Cuk电路在开关导通时，电感L1、L2充能，C1放能；在开关关断时，电感L1、L2放能，C1充能，电容C1起到能量耦合传递的作用。根据伏秒定律，两个电感在开关导通和开关关断阶段的电流变化量是相等的，对于左侧电感L1分别在on时间段和off时间段内电流变化量为：

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_003_fb7791064124.png)

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_004_6873b92195ce.png)

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_005_aee37a7e20a2.png)

即：

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_006_f18e6c7b2c7a.png)

对于右侧电感L2，on时间段和off时间段内电流变化量为：

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_007_6dcf4969cdd9.png)

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_008_d0d0e146d2dc.png)

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_009_a7c3748dbd81.png)

 即：

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_010_fce4e58a676a.png)

联立这两个等式，消去VC1，可得：

![](DC_DC_14_什么是Cuk升降压DC_DC__images/img_011_380bbe32f988.png)

此输入输出关系和我们前面分析的升降压电路一样，但此电路结构比buck-boost更复杂，相对来说应用较少。