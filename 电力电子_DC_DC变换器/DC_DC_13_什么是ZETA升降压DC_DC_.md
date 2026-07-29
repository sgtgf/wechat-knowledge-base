# DC-DC-13：什么是ZETA升降压DC-DC?


> 原文地址: [https://mp.weixin.qq.com/s/U6f9z1DI7WdNHO133tRwfA](https://mp.weixin.qq.com/s/U6f9z1DI7WdNHO133tRwfA)

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_000_e91054726ba8.png)

____**★★★**______DC-DC-13---ZETA升降压原理______**★★★**____

引言：与一个反向降压-升压转换器相类似，一个ZETA转换器具有一个单个MOSFET (S1) 和一个单个二极管D1 (S2)，ZETA转换器中的MOSFET和二极管对于电压和电流的需求与反向降压-升压转换器中此类元件的电压和电流需求相类似。同样地，MOSFET和二极管的功率损耗也是相似的。在另一方面，ZETA转换器具有一个额外的电感器 (L2) 和一个额外的交流耦合电容器 (C1)。

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_001_0756c6fedd96.png)

**_图13-1：ZETA拓扑简图_**

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_002_49198985d55c.png)

**_图13-2：SEPIC拓扑简图_**

____€1.ZETA__的工作路径__

**_图13-1_**显示了ZETA 转换器的简单电路图，其由一个输入电容Cin、一个输出电容Cout、耦合电感L1和L2、一个AC耦合电容C1、一个功率MOS即S1，以及一个S2二极管D1组成。下图显示了S1为开启状态和S1为关闭状态时，在CCM下运行的转换器电流和极性简图。

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_003_fcfab70cc6d0.png)

**_图13-3：开关S1导通时电流路径_**

如**_图13-3_**，当开关管S1导通时，输入的电压对电感L1充电，同时电容C1要释放上周期开关截止时充的能量，给电感L2充电，这时由于二极管S2上方电位较高，二极管截止，形成了两条回路：输入Vin→开关管S1→电感L1，输入Vin→开关管S1→电容C1→电感L2→负载Rload；电容C1与Cout并联，因此在稳态CCM期间C1被充电至输出电压Vout。

S1开启时，充电至Vout的电容C1与L2串联；因此L2的电压为+Vin，而S2二极管D1的电压则为Vin+Vout。

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_004_e40b74546bab.png)

**_图13-4：开关S1关断时电流路径_**

如**_图13-4_**，当开关管关断时，电感L1生成下正上负的感应电动势，经过S2续流二极管VD给电容C1充能，电流回路为：电感L1→二极管VD→电容C1。另外，电感L2也生成感应电动势给负载供电，电流回路为：电感L2→负载Rload→S2二极管VD。电容C1与Cout并联，因此在稳态CCM期间Cout被充电至输出电压Vout。注意电感电压正负的变化。

S1关闭时，L2的电压必须为Vout，因为其与Cout并联。由于Cout被充电至Vout，因此S1关闭时S1的电压为Vin+Vout，这样一来L1的电压便为相对于S1漏极的–Vout。

______€2.ZETA__的工作波形____

若想要知道各个电路节点的电压，在两个开关都为关闭状态且无开关操作时对DC条件下的电路进行分析很重要。下组图显示了通过各种电路组件的电流。S1开启时，输入电源的能量被存储在L1和L2和C1中，L2还提供Iout。S1关闭时，C1持续为L1提供电流，而L2再次提供Iout。

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_005_ab9c01c1a236.png)

**_图13-5：**_L1/C1/S2同时序工作波形_**_**

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_006_0756c6fedd96.png)

**_图13-6：ZETA拓扑简图_**

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_007_d8b2c39a374d.png)

**_图13-7：**_L1/L2/S1同时序工作波形_**_**

________€3.ZETA关键公式推导________

ZETA电路在开关导通时，电感L1、L2充能，C1放能；在开关关断时，电感L1、L2放能，C1充能，电容C1起到能量耦合传递的作用。根据伏秒定律，两个电感在开关导通和开关关断阶段的电流变化量是相等的，所以对于电感L1，on时间段和off时间段电流变化量为：

![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_008_fb7791064124.png)

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_009_db57ee33476b.png)________

即：

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_010_aee37a7e20a2.png)________

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_011_bf8e18464747.png)________

同理，对于电感L2，on时间段和off时间段电流变化量为：

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_012_eff0135acea8.png)________

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_013_d406b39be7c4.png)________

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_014_a7c3748dbd81.png)________

即：

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_015_be2ddd75c419.png)________

联立这两个等式，消去VC1，可得：

________![](DC_DC_13_什么是ZETA升降压DC_DC__images/img_016_872f1596f8ae.png)________

从上式可知，Dmax出现在Vin(min)，而Dmin出现在Vin(max)。可以看出ZETA电路的输入输出关系和SPEIC电路完全一样。从这两种电路的输出表达式来看，电路均应避免占空比接近1，且电路均不应输出空载，否则会产生很高的电压损坏后级器件。