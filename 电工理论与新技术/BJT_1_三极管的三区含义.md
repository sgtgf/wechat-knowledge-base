# BJT-1：三极管的三区含义


> 原文地址: [https://mp.weixin.qq.com/s/K5x3JdLUjWuhu4uNN2LLgg](https://mp.weixin.qq.com/s/K5x3JdLUjWuhu4uNN2LLgg)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TR0qWkWQkTaj9YCnfyqAz26FnUiaBzmPbLHxKtj59JvLoUAVWwsNiakbJHIzlukQYDUuxFibRuia3iazTg/640?wx_fmt=png)

_**_★★★_**_Triode-1---三极管的三个区_**_★★★_**_

引言：BJT内部含有两个背靠背，互相影响的PN结，当这两个PN结的偏置条件（正偏还是反偏）不同时，BJT将呈现出不同的特性和功能，对应四种工作状态：放大、饱和、截止、倒置。  

___€1.__三极管的模型等效理解_

_![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRWIBialarrQIWWnTrXfVsR6HLgsODNl3o5ZBw4dY1Z1zdjGfwhB2h3geuicAvsUcicYNJ6FX7d7Vj7A/640?wx_fmt=png)_

**_图1-1：二极管的物理结构_**

**_![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRWIBialarrQIWWnTrXfVsR6PCCtPfiaibmDeVKv8X4KofiaBGuiaz2qNSPRJgxRJiaBpjkWbWfWNMzdekA/640?wx_fmt=png)_**

**_**_图1-2：双二极管等效三极管_**_**

**_**_![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TR0qWkWQkTaj9YCnfyqAz26DGSmsGgia2ibyic6a6LxUIUNV1wLgiaXaH5ObbBALQaLAfTC3vFuQRNukA/640?wx_fmt=png)_**_**

**_**_**_图1-3：双二极管等效三极管_**_**_**

从**_图1-1_**到**_图1-3_**可以将BJT简单视为两个二极管的叠加。

___€2.__放大区_

BJT是电流型元件，放大区的电流放大作用本质是内部载流子由发射极向集电极的定向运动。为了确保内部载流子能做这样的定向运动，实现电流放大，要求NPN或者PNP的发射结加正向偏置电压（正偏电压大于开启电压），集电结加反向偏置电压。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRWIBialarrQIWWnTrXfVsR6pHtDbdv2RBKWDJEEu2e07fguhN9YUKNREdQ1T1oYgfYmvD9a8x5zdA/640?wx_fmt=png)

**_图1-4：三极管导通时电流流向_**  

其中：B：基极，E：发射极，C：集电极

___€3.__饱和区_

BJT的发射结和集电结均处于正向偏置的区域为饱和区，在该区域内，有VCE≤VBE。因此集电结内电场被削弱，集电结收集载流子的能力减弱，这时Ib即使增加，Ic也增加不多。对于小功率管，认为当VCE=VBE时（即VBC=0），BJT处于临界饱和状态。但在实际应用中，当集电结上所加的正向偏置电压较小（硅管＜0.4V，锗管＜0.1V）时，集电结收集载流子的能力仍然较强，结电压对电流的控制作用和放大状态接近。

___€4.__截止区_

BJT的截止区是指集电极和发射极之间相当于开关的断开状态，集电极和发射极互不相通，此时基极、集电极、发射极电流都为0，三极管此时已经失去了电流放大的作用。集电结反向偏置，发射结上的偏置电压小于PN结的导通（开启）电压。

这三种状态之间的转换，可以通过输入电压或者相应的输入电流来控制，例如放大状态时，随着输入电流的增大，当输出电流在负载电阻上的压降等于电源电压时，则电源电压就完全落在负载电阻上。于是集电结就变为0偏压并进而变为正偏压，由放大状态转变为饱和状态。当输入电压反偏时，则发射结和集电结都成为了反偏，没有电流通过，即为截止状态。  

正偏与反偏的区别：对于NPN晶体管，当发射极接电源正极、基极接负极时，则发射结是正偏，反之为反偏；当集电极接电源负极时、基极或发射极接正极时，则集电结反偏，反之为正偏。总之当P型半导体一边接正极，N型半导体一边接负极时，则为正偏，反之为反偏。