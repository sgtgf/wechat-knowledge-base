# DC-DC-12：什么是SEPIC升降压DC-DC？


> 原文地址: [https://mp.weixin.qq.com/s/NaA1awVXCEJYF69EMg-fkg](https://mp.weixin.qq.com/s/NaA1awVXCEJYF69EMg-fkg)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCe84TEhSiavugW1vIpQnvUda3ZenwglnaIjM7HbHDp7I1CJGytvj4ynqw/640?wx_fmt=png)

________**★★★**______________DC-DC-12---SEPIC升降压____________★★★______

引言：与一个反向降压-升压转换器相类似，一个SEPIC转换器具有一个单个MOSFET (S1) 和一个单个二极管D1 (S2)，SEPIC转换器中的MOSFET和二极管对于电压和电流的需求与反向降压-升压转换器中此类元件的电压和电流需求相类似。同样MOSFET和二极管的功率损耗也是相似的。在另一方面，SEPIC转换器具有一个额外的电感器 (L2) 和一个额外的交流耦合电容器 (C1)。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRCTxWUeibrP54IOCgxuJXUdKzPvTyGWgIpsGQ1R5QqzWkdznCws0v8iav2ra20rAM7WjRiarvowZ0qw/640?wx_fmt=png)

**_图12-1：SEPIC拓扑简图_**

____€1.__SEPIC的工作路径__

基本拓扑如**_图12-1_**所示，可以看做是左侧的升压电路经电容C1耦合到右侧的升降压电路然后输出。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHp73I3ic6dHKWhsSG3BqSblZs9OMsuyCZcR96CiaYwc0WibiaJJkj6MEQQg/640?wx_fmt=png)

**_图12-2：开关S1导通时电流路径_**

 如**_图12-2_**，当开关管S1导通的时候，输入的电压对电感L1充电，形成的回路是：电源正极→电感L1→电源负极。电容C1在上一周期开关关闭时充了能，在本周期开关导通时要将这部分能量释放，C1将给电感L2充能，此时S2二极管VD截止，输出电压由电容Cout维持。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHySToL9k8icGkib4brOz5BBHtpDmMeEytpsfNZoqRsV8Z5VXl5cvpScicQ/640?wx_fmt=png)

**_图12-3：开关S1关断时电流路径_**

如**_图12-3_**，当开关管S1关断时，输入的能量和电感能量一起向输出提供能量，形成的回路是：输入Vin→电感L1→电容C1→S2二极管D→负载Rload，电感L2也形成感应电动势，通过S2二极管VD续流，形成的回路是：电感L2→S2二极管D→负载Rload。

______€2.__SEPIC的工作波形____

**_图12-4_**和**_图12-6_**显示了一个SEPIC转换器和其CCM模式下的理想波形。一个SEPIC转换器的电压转换比率为Vout/Vin=D/1-D，表示正向输出电压和降压-升压能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRCTxWUeibrP54IOCgxuJXUdXNCb4krtJiczaMNeuKFUuBaHXtONzciczNaDmouakKAlvqg2aKeYu6vQ/640?wx_fmt=png)

**_图12-4：L1/C1/S2同时序工作波形_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRCTxWUeibrP54IOCgxuJXUdKzPvTyGWgIpsGQ1R5QqzWkdznCws0v8iav2ra20rAM7WjRiarvowZ0qw/640?wx_fmt=png)

**_图12-5：SEPIC拓扑简图_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRCTxWUeibrP54IOCgxuJXUd6jcSDd4ticckWiaWjibxRHSgjJVSbcTrquviajgsKibBrMRdv5Fu5vkAvZA/640?wx_fmt=png)

**_图12-6：L1/L2/S1同时序工作波形_**

________€3.SEPIC关键公式推导________

从以上原理分析可知，SEPIC电路在开关导通时，电感L1、L2充能，C1放能；在开关关断时，电感L1、L2放能，C1充能，电容C1起到能量耦合传递的作用。根据伏秒定律（传送门：[DC-DC-1：DC-DC的原理以及构成](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485524&idx=1&sn=236d06b9479150e0aef493fb8833744e&chksm=c33542cbf442cbdde104ff64eb329816b302d5251071afd1880f26cf5dcfdc90acf9de8c3fa8&scene=21#wechat_redirect)），两个电感在开关导通和开关关断阶段的电流变化量是相等的，对于左侧电感L1，其on时间段内电流变化量为：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHQZnQUsUZYIIOvPLLgpcT5s4o4kgAh07x0lTBfnDa5LtAwN8eKwygew/640?wx_fmt=png)

off时间段内电流变化量为：

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHGjDKnicaXgmTniccXpicQH0G2AWzCuJMDf1cKY9Dov5iaAsYatwZlVwaGQ/640?wx_fmt=png)________

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHAxH9h9uEILuXnSc17OUmfyJPenh7E0Q5wZowcEcibUIUCb88Eo9ibtIQ/640?wx_fmt=png)________

 即：

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHjwLpVYGxzXNXOXYnUUia8rD6ejxtkmbKyfG9H30pDTd1TkX2woLRw3A/640?wx_fmt=png)________

 对于右侧电感L2，on和off时间段内的电流变化量为：

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdH54C0iatl9vChxvcVdQjhicaU3ISs167lQOFUhcCeRAaBjjCxiaan4IwdA/640?wx_fmt=png)________

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHZ8WaMNqdg4r1FqARfzJF4nktiaCO4EXyuhkKRNB3EPv2iaLGVlJ9C0rQ/640?wx_fmt=png)________

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHM5Qz7nibQzlcPRH5e6hibuC4ArDQHpQ81BxouUsJrompwR38JicATFic5Q/640?wx_fmt=png)________

  即：

________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHVx0K2yJQ4pC1C90sPm0qOd3QCNviaJpgzf1HOicdwiaCdvrnGnXib89FibQ/640?wx_fmt=png)________

联立这两个等式，消去VC1，可得：

_______![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSA16nLicBMphgnRmbw2qIdHicJX8zIQ4k9rEbo5mKxVATXMKJnTLtMCx11VpQD6NtdcBkMmOibX31ew/640?wx_fmt=png)_______

_______€4.小结_______

在一个SEPIC转换器中，L1的平均电感器电流等于输入电流 (Iin)，而L2的平均电感器电流等于输出电流 (Iout)。相反地，反向降压-升压转换器中的单个电感器的电流值为Iin+Iout的平均值。耦合电容器C1上会出现相对于输入电流和输出电流的高值均方根 (RMS) 电流,这会生成额外的功率损耗，并减少转换器的总体效率。

为了减少功率损耗，需要使用具有低ESR的陶瓷电容器，而这样通常会使成本增加。SEPIC转换器中与额外耦合电容器相耦合的额外电感器会增加印刷电路板 (PCB) 的尺寸以及总体解决方案成本。耦合电感器可被用来替代两个单独的电感器，以便减少PCB尺寸。但是相对于单独的电感器，现货供应的耦合电感器的选择范围有限。有时需要定制设计，这也增加了成本，是选择独立的L1和L2还是耦合的L1/L2，需要权衡选择。