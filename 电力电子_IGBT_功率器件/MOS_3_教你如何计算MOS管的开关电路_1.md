# MOS-3：教你如何计算MOS管的开关电路-1


> 原文地址: [https://mp.weixin.qq.com/s/BYsprG5A\_PB5Ox5KZLR96w](https://mp.weixin.qq.com/s/BYsprG5A_PB5Ox5KZLR96w)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TR0qWkWQkTaj9YCnfyqAz26kjjFLLiaapyne5AzPPTTje2jfBKy7scz9stpzvw2qb8H5zNjGIwxh2A/640?wx_fmt=png)

__**★★★**___MOS-3---MOS管的开关电路___**★★★**__

引言：分立MOS搭建的开关电路在电路设计里面非常常见，在单板的逻辑设计，器件控制，供电控制，供电保护等等方面，都发挥着巨大的作用。使用时如果设计巧妙，简约，不仅可以节约大量物料成本还能增强系统的稳健性（模拟控制比数字控制可靠的多）,本节主要讲解MOS搭建的两类基础开关类型。

__€1.源极接地型开关__

如下是NMOS和PMOS的源极接地型开关，所谓源极接地型，即NMOS的源极直连GND，PMOS的源极直连VDD。其中Rg是栅极限流电阻，RP是偏置电阻，RD是主路径限流电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTMIgvDB0kBPVFe0FhicgbpfJObeBytKuWV10ibicfMF3pIy8teuTMKia8d0qDtjGiczNDo8ny80biagicqw/640?wx_fmt=png)

**_图3-1：NMOS和PMOS源极接地型开关_**

对于NMOS源极接地型开关，当Ctrl in输入高电平时，NMOS导通，out端直接连GND，输出低电平；当Ctrl in为低电平时，NMOS不导通，out端通过RD连接VDD，输出高电平。

对于PMOS源极接地型开关，当Ctrl in输入高电平（以VDD为基准，VDD-Vin＞Vth）时，PMOS不导通，out端被RD下拉至GND，输出低电平；当Ctrl in输入低电平（VDD-Vin<Vth）时，PMOS导通，out端直连VDD，输出高电平。

根据上面描述的工作过程，可知源极接地型开关的out和Ctrl in比较，是反相的，所以源极接地型开关又叫反相开关。

__€2.源极跟随型开关__

如下是NMOS和PMOS的源极跟随型开关，所谓源极跟随型，即NMOS的漏极直连VDD，PMOS的漏极直连GND。其中Rg是栅极限流电阻，RP是偏置电阻，RD是主路径限流电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTMIgvDB0kBPVFe0FhicgbpfVN1OctjmIzrctiaNbx3ZagBBQiadoVUTbwHrIvibq8hR1fOkBHGXDawMA/640?wx_fmt=png)

**_图3-2：NMOS和PMOS源极跟随器型开关_**

对于NMOS源极跟随型开关，当Ctrl in输入高电平时，NMOS导通，out端直接连VDD，输出高电平；当Ctrl in为低电平时，NMOS不导通，out端被RD下拉至GND，输出低电平。

对于PMOS源极跟随型开关，当Ctrl in输入高电平（以VDD为基准，Vin-VDD＞Vthmax）时，PMOS不导通，out端通过RD连接VDD，输出高电平；当Ctrl in输入低电平（Vin-VDD<Vthmin）时，PMOS导通，out端直连GND，输出低电平。注意PMOS的VGSTH是负值。

根据上面描述的工作过程，可知源极跟随型开关的out和Ctrl in比较，是同相的，所以源极跟随型开关又叫同相开关。

____€3.__源极接地型和__源极跟随型开关设计实例____

_____设计背景：_____

控制端为MCU的GPIO，高电平1.8V，VDD为5.0V，设计一个LED驱动电路，可以控制LED的亮灭。LED为ROHM的SMLZ24BN3TT86，相关参数如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSfVLrN04W9qhVjBIHN8pwQSALmcwgM08wI343T9PBm6OvVL006j3ibKRaObIkcOSalhW52BA74uVQ/640?wx_fmt=png)

**_图3-3：LED的最大额定参数_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSfVLrN04W9qhVjBIHN8pwQ3EjP4ERPX1Gtrxp7rNVAXyPv2AgiaLrxD0LZ8NnUCt9ez1aVmfK8www/640?wx_fmt=png)

**_图3-4：LED的标准参数_**  

从上述参数可知，LED正常工作时，导通电流IFMAX=30mA，脉冲峰值电流为100mA，那么控制LED关闭时电流为0mA，导通时电流为20mA，VF=3.3V，明暗就在0-20mA之间变化。

_____设计分析：_____

LED点亮时，VF=3.3V，那么导通路径上的电阻分压为5-3.3=1.7V，导通路径电流=0.02A，路径电阻RD=1.7V/0.02A=85Ω。因为路径电流不大，所以不需要选用功率MOS，小信号MOS就可以满足要求。Ctrl in端电压=1.8V，汇总选型参数为：ID＞0.02A，VGSTH＜1.8V，VDSS＞5.0V。

此处选LRC的LSI1012LT1G，具体参数如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0MiamcDQHSWKI22WC7lHdicCef9oYGxCLSrzI4GpAq19KVONnnmNwHrhRgbA/640?wx_fmt=png)

**_图3-5：LSI1012LT1G最大额定参数_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0Miams78iaJcIZARPmjia2IdKqygJd0xu4dK3biabhvxooLafaML6dw2eILUmg/640?wx_fmt=png)

**_图3-6：LSI1012LT1G静态参数_**

VGSth=0.9Vmax，1.8V的VGS可以将MOS完全打开。设计如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0MiamYQwUeTtVhylX7UsCoBLxFzbBNibXZk1bMHVB4QUJkgIernafkJ1PUDA/640?wx_fmt=png)

**_图3-7：NMOS源极接地型和源极跟随型开关_**

从**_图3-7_**可以看到，同样的器件，两种驱动方式，参数是不同的，左图MOS关断时，电流路径为VDD--->RD--->LED--->GND，此时功耗P关=PRD+PLED。MOS导通时，此时功耗P通=PRD+PQ。由于RD比较小，P通会比较大。右图MOS关断时，此时功耗P关=0，MOS导通时，RD比较大，20mA电流都流向LED，此时功耗P通=PLED。（电阻RD上的功耗忽略不计）。两种功耗的差异很明显，但前者是反相，高电平熄灭，低电平点亮，后者是同相，高电平点亮，低电平熄灭。

**_图3-10_**是PNP型源极接地型和源极跟随型开关，分析方式和上面类似，选用PMOS型号为LRC的LSI1013LT1G设计源极接地型和源极跟随型开关：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0Miam0icXicic0jpdBlstwdDREq5JjR7ltS9Jedgec4ibUibhXoMO6qtpib4Eb6NA/640?wx_fmt=png)

**_图3-8：LSI1013LT1G最大额定参数_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0MiamJKDNb7jcUibMU36MPOsicHDW05Fh4NH7dRXtVJBL2TsU1S16PqGE6QRw/640?wx_fmt=png)

**_图3-9：LSI1013LT1G电气参数_**

由于VDD=5V，那么Ctrl in电平的参照就是VDD=5V，Ctrl in最高1.8V，VGS是-5V和-3.2V，均小于VGSTH=-1.3V，都处于导通状态。如果更改VDD为1.8V，当Ctrl in=0V低电平时，VGS=-1.78V＜-1.3V，PMOS导通，当Ctrl in=1.8V高电平时，VGS=0V＞-0.45V，PMOS关断。更改为VDD=1.8V，LED就需要重新选型。

从上面计算可知使用PMOS设计驱动电路，没有NMOS简单，成本也比较高。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0MiamQb3zhjP4e2syeGPxuFmeKgyqSj4dqyibXzEjXLNKOl9CZibhiaZ0tcsFw/640?wx_fmt=png)

**_图3-10：PMOS源极接地型和源极跟随型开关_**