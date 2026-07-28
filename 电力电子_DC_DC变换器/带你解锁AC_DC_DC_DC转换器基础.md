# 带你解锁AC/DC、DC/DC转换器基础

原创 硬件笔记本 2022-06-23 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/9PefGUM8pCjCMdgC1tdyvw](https://mp.weixin.qq.com/s/9PefGUM8pCjCMdgC1tdyvw)

_![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")_

  

首先，我们过一下AC（交流）和DC（直流）的概念。  

  

何谓AC

  

Alternating Current（交流）的首字母缩写。

  

AC是大小和极性（方向）随时间呈周期性变化的电流。

  
电流极性在1秒内的变化次数被称为频率，以Hz为单位表示。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWsnu2AtRiaogy4EVhCC22f1V1RN4YURZ9Z9hMfDxCsX7NZ1evBGghAqQ/640?wx_fmt=png)

  

何谓DC

  

Direct Current（直流）的首字母缩写。

  

DC是极性（方向）不随时间变化的电流。

  

  

①流动极性（方向）和大小皆不随时间变化的电流通常被称为DC。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWvCibPQFB8cLXdYIotXiaJotDVmHjOnALTk36C8pR72EkIpGAXSEibjB8Q/640?wx_fmt=png)

  

②流动极性不随时间变化，但大小随时间变化的电流也是DC，通常被称为纹波电流 (Ripple current)。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWEFuNOK2aIDgyCMfpZhj2VBKWYibG6Z0Adf9DwFyYQPdRXg9SHpcdZmQ/640?wx_fmt=png)

  

一、AC/DC转换器

  

何谓AC/DC转换器？

  

AC/DC转换器是指将AC（交流电压）转换成DC（直流电压）的元件。

  

为什么需要AC/DC转换器？

  

那是因为家庭住宅和楼房接收到的电压是100V或200V的AC电压。然而大家大部分使用的电器是在5V或3.3V的DC电压下工作的。也就是说，如果不把AC电压转换成DC电压，电器就不能工作。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWXibvZ6YT7zZVDWKHsD2FMYnX8v8ul3IRalQ7zibzLRhFxkDOiaCfCjsaQ/640?wx_fmt=png)

  

其中也有电机、灯泡等可以用交流电压驱动的产品，但电机与微控制器的控制电路连在一起，灯泡也变成节能LED，因此有必要进行ACDC转换。

  

为什么传输的是AC电压？

  

可能有人会认为“既然电器使用的是DC，那为什么不一开始就传输DC？”

  

总所周知，电力来自水力发电站、火力发电站、核电站等。这些发电站位于山区或沿海等地区，从这些地区传输到市区，AC电压更有优势。

  
简而言之，通过以高电压、低电流方式传输AC电压，可以减少传输损耗（能量损耗）。然而，在实际家庭中，由于不能直接使用高电压，所以需要通过几个变电站分阶段进行变压（降压），最后转换成100V或200V后进入家庭。这些转换也因AC更简单，所以传输的是AC电压。

  

全波整流和半波整流（AC/DC转换）

  

将AC（交流电压）转换为DC（直流电压）的整流方式有全波整流和半波整流。两种情况都利用了二极管的电流正向流通特性来进行整流，唯样商城在售二极管，型号多样，原厂授权正品现货。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWtkf3N3SfBPQiaIdaEdVZWuSowb0kWvyxPRtYO9wmdSkhglyjuxBr8nQ/640?wx_fmt=png)

  

全波整流是通过二极管桥式电路结构将输入电压的负电压成分转换为正电压后整流成直流电压（脉冲电压）。而半波整流是使用一个二极管来消除输入负电压成分后整流为直流电压（脉冲电压）。之后，利用电容器的充电和放电功能来平滑波形，从而转换为纯净的直流电压。因此可以说，与不利用输入负电压成分的半波整流相比，全波整流是更具高效率的整流方法。此外，平滑后的纹波电压根据电容器容量和负载（LOAD）而变化。

  
全波整流和半波整流在相同的电容器容量和负载条件下，全波整流的纹波电压更小。纹波电压越小，稳定性越高、性能越优。

  

AC/DC转换方法

  

AC/DC转换有变压器方式和开关方式。

  

变压器方式

  

这是普通AC/DC转换器的变压器方式电路结构。

  

**【变压器方式的电路结构示例】**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWl0ibRmWtfbBbaEa86NS6n8M2QdSGl1HqkjtpCprUQtrDlkiaskEzNFvA/640?wx_fmt=png)

下图显示了变压器方式电压波形的变化。

  
变压器方法首先需要通过变压器将交流电压降压到适当的交流电压（例如，从AC100V降至AC10V等）。这属于AC/AC转换，降压值由变压器的绕组比设定。

  
接下来，通过二极管桥式整流器对经过变压器降压的交流电压进行全波整流，转换为脉冲电压。最后，经电容器平滑并输出纹波小的直流电压，这是最传统的AC/DC转换方法。

  

**【变压器方式的波形推移】**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWBucdaq9rTw1WsXN7H4731X72iazLYDJzZqhZgNyI17v365ZzhyqCib6Q/640?wx_fmt=png)

  

  

开关方式

  

这是普通AC/DC转换器的开关方式电路结构。

  

**【开关方式的电路结构示例】**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yW3n41bjkYICfOVgwcXgCRehib3ib5Th5AjRib895ib6L1cHuNSjscHL2W4w/640?wx_fmt=png)

下图显示了开关方式电压波形的变化。

  
变压器方式是首先通过变压器进行AC/AC降压，而开关方式是直接用二极管桥式整流器对交流电压进行整流。由于普通家庭的用电电压为AC100V或AC200V，所以二极管桥式整流器必须具有可承受高电压的规格。

  
接下来，用电容器平滑直流电压（脉冲电压）。电容器同样需要耐高压的电容器。然后，通过开关元件的ON/OFF对直流电压进行斩波（切割），并经过高频变压器降压后传送到二次侧。此时，斩波波形变为方波。

  
与家用频率（50/60Hz）相比，开关元件使用的频率更高（例如，100kHz）。由于高频工作，所以可以实现变压器的小型化、轻便化。

  

**【开关方式的波形推移】**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yW8kgAvk4wCwgPR91IasO0IScmrprNBoF8VaAooU4ypvicvLyiceSMgySw/640?wx_fmt=png)

  

在二次侧利用整流二极管对方波进行半波整流，之后用电容器对其进行平滑，并输出直流电压。

  
开关方式是利用控制电路控制开关元件，获得稳定的预期的直流输出（例如，DC12V）的方式。

  
与变压器方式相比，开关方式由开关元件和控制电路组成，电路结构较复杂，但由于基于高频控制可以使用小型变压器，所以有助于设备小型化，这是它的一个很大的优点。

  

反馈控制

  

**何谓反馈控制？**

  

开关式AC/DC转换器通过确认实际输出的DC电压值，并根据该电压信息对开关元件进行控制，从而确保稳定实现规定的DC输出。这种确认该输出电压值以控制开关元件的机制叫做反馈控制（FB控制）。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWmCrGiceDCSo1RHCVytvic7OQPmvXVlAlAiccWBwcqasTAvAB6VSGBwHgw/640?wx_fmt=png)

_**【开关方式电路结构示例】**_

_**反馈控制的示意图**_

  

开关式AC/DC转换器通过二极管电桥对AC电压进行整流，再通过电容器实施平滑处理，将AC电压转换为DC电压。然后，通过开关元件对该DC电压进行斩波（ON/OFF）后，通过高频变压器降压后传递到2次侧，再利用电容器进行平滑处理，输出规定的DC电压（VDC）。

  
FB控制电路检测实际输出的该电压值是否达到规定的目标电压值。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWROibHCPCK65PUia0za5JBnhia8ichNoOibIb62YwE0CtHavaXra8l1sXLBQ/640?wx_fmt=png)

**_【经过平滑处理的输出电压示意图】_**

  

实际输出电压值低于目标电压值时，则会对开关元件进行控制，使ON时间变长。这样，输出电压值就会上升。反之，高于目标电压值时，则控制ON时间变短。

  
这样，反馈控制电路常时对实际输出电压值进行确认，并根据该值调整开关元件的ON/OFF时间，确保目标输出电压值的稳定。

  

  

轻负载模式

  

**何谓轻负载模式？**

  

提高使用较少输出电流时的效率的技术叫做轻负载模式。在DC/DC转换器等中也叫脉冲串模式。

  

开关式AC/DC及DC/DC转换器通过ON/OFF转换进行电压斩波和电容器平滑处理，以稳定提供目标输出电压值。但是，这种转换在ON/OFF时会产生瞬间漏电流（贯通电流）。也就是说，单位时间内的ON/OFF次数越多，漏电流导致的损失越大，效率越低。

  
周期恒定（PWM控制）时，即使ON/OFF时间比有变化，其次数在单位时间内也是恒定的。因此，自身功耗量也是恒定的，轻负载时这种转换漏电流造成的损失会导致效率降低。故此，在使用电流少的情况下，通过频率调制（PFM控制）将周期拉长、变慢，从而减少单位时间内的ON/OFF转换次数，以减少损失。这种技术就叫做轻负载模式。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWRMVKyKY50vGsEAasmraOneexeibniaHtTX5snt4w3phCVAR3R39d64mg/640?wx_fmt=png)

**_【PWM方式和PFM方式】_**

  

根据状况区分使用PWM和PFM可进一步提高效率，如高负载（使用电流）时使用周期恒定的PWM控制，轻负载（不使用电流）时使用周期变化的PFM控制。

  

■PWM  （脉宽调制）：频率恒定，通过开关ON从输入电压中调取输出部分的控制方式。

  

■PFM （脉冲频率调制）：通过固定ON时间、改变频率（改变OFF时间）来调取输出部分的方式。反之，也有固定OFF时间、改变ON时间的方式。

  

PFM方式根据输出电流量改变频率，效率较高，但开关时会不定期发生噪音。这种频率无法确定的噪音很难消除，要解决噪音，采用频率恒定的PWM方式更容易操作。

  
这样，噪音低的PWM和效率高的PFM可互为补充，高频率驱动的高负载（噪音发生较多）时采用PWM，电流使用较少的低负载时采用PFM，择优使用，即可尽可能提高效率。

  

二、DC/DC转换器

  

何谓DC/DC转换器？

  

DC/DC转换器是一种将DC（直流）转换为DC（直流）的元件，具体是指利用DC（直流）转换电压的元件。IC等电子元件各自的工作电压范围不同，因此需要转换为相应的电压。

  

生成电压低于初始电压的转换器被称为"降压转换器"；生成电压高于初始电压的转换器被称为"升压转换器"。

  

  

名称说明

  

DC/DC转换器是指将直流转换为直流的装置的名称。

  
它常被称为线性稳压器或开关稳压器等，以转换方式的名称命名。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWzSMbC7Yv9ppAz0oS9GiaK1FSu9niabxfZYfuHbcncmIZNABWrG5icBlicg/640?wx_fmt=png)

  

为何需要DC/DC转换器？

  

插入插座进行工作的电气产品需要使用将AC（交流）100V转换为DC（直流）的"AC/DC转换器"。这是因为大部分半导体部件只能在DC下工作。整机电路板上搭载的IC等具有各自固有的工作电压范围，电压精度要求也不同。通过电压不稳的电源等供电会导致误动作或特性劣化等异常。因此，需使用"DC/DC转换器"转换为所需的电压并实现稳定化。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWAALvMCjTjibVMNP6xkzoiaeMCm33qdDKXC7S0vQAXHo5yDZLLCav4KsQ/640?wx_fmt=png)

  

通过DC/DC转换器实现电压稳定的装置被称为电压稳压器。

  

电源IC种类

  

电源IC大致分为线性稳压器和开关稳压器两种。

  

作为其各自的输出形式，线性稳压器仅可降压输出比输入电压低的电压。

  
**开关稳压器则具有自由度，输出形式包括以下4种：**

  
・降压输出比输入电压低的电压  
・升压输出比输入电压高的电压  
・升降压输出恒定电压，与输入电压的高低无关  
・从正电压反转输出负电压

  
而且，开关稳压器的整流方式有同步整流和非同步整流（二极管整流）。

  

**【电源IC种类】**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWs9tO8OwjDykkBhIhKI4pAdw8IxMUOXO0qXgZE6yZK1aibDT7J57XSCg/640?wx_fmt=png)

  

线性稳压器和开关稳压器

  

通过DC/DC转换器实现电压稳定的装置被称为电压稳压器。

  

按转换方式，电压稳压器分为线性稳压器和开关稳压器2种类型。

  

线性稳压

  

因工作时输入与输出的关系呈线型，故被称为"线性稳压器"。

  
因输入与输出间串联有控制元件，有时也被称为"串联稳压器"。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWBg5QF8qmpBYvgkwHYVzTI7HHmtJnFCV7ZEjicTeDY9ynkTduGu7N2Tg/640?wx_fmt=png)

  

通过控制元件降压，因此输入与输出的电压差（降压程度）越大损耗就越大，效率也越低。因此适用于小功率的电源。

  

**优点：**

电路简单

外接部件少

噪音小

  

**缺点：**  

效率低

发热大

仅降压型转换器

  

开关稳压器

  

接通开关元件（MOSFET），从输入端向输出端供电，直至输出电压达到所需电压。

  

输出电压达到规定值后，开关元件即关闭，不再消耗输入功率。

  
通过高速重复这一动作，将输出电压调节到规定值。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWp7UDicBNXJuQXEbDdBZTVjHmUtZ2ucCUF7d99QbfLjvFo6BlibAp4BEg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yW2ib1d6yLiaiaDTTrHuw0Uibzf1OPbj7382icE6ULrnAdMNR8aWSFiaKqLpiaw/640?wx_fmt=png)

  

**优点：**

效率高

发热小

可实现升压/降压/负电压的转换

  

**缺点：**   

外置部件多

设计困难

噪音大

  

线性稳压器的工作原理

  

**一般的引脚构成**

  

线性稳压器基本上由VIN （输入）、VO （输出）、GND （接地）三个引脚构成。

  
在输出可变的线性稳压器上添加了用于反馈输出电压的FB（反馈引脚）。

  
简单来说，电压固定型是内置了电压可变型的外接电阻的稳压器。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWexjX1GHhRH6iaJRNrCQK5hiaPyNbBE61iaKrBFVWh1m7FwS7NdPvM6ntg/640?wx_fmt=png)

  

线性稳压器的内部电路概要如下图所示。

  

其工作原理与反相放大电路相同，误差放大器的非反相引脚（FB）电压与基准电压 (VREF) 相同，因此输出电压值（VO）由两个电阻（R1和R2）的阻值比决定。

  

VO=\[ (R1+R2) / R2 \] x VREF

  

下图的输出晶体管为MOSFET，不过也有使用双极晶体管的产品。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWLppr1qWtq81Rp4Ih8XvTDVeoUqbXlI16JhS5FBQicSmwAZr9OiaBneCA/640?wx_fmt=png)

  

  

线性稳压器的分类

  

**按功能分类**

  

线性稳压器按功能进行分类时，首先可分为正电压用和负电压用两种。

  
根据使用电路不同，也有不需要正电源，而需要负电源的产品。

  
若只有正侧电源，则不能处理接地电位以下的电压，不能将晶体管的输出引脚的电压分配至负电平。将控制晶体管装入负输出线，从而产生负电压。

  

**【按功能分类】**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWHPHl54fvdkprYQhSa2XL8E4vGxWpfw1qm7MibWYMQvXpoibhsxkSNHQw/640?wx_fmt=png)

其次，还可分为电压固定型和电压可变型两种。固定型由输入、输出、GND三个引脚构成，内置有输出电压设定用电阻。

  
可变型为GND基准型时，添加反馈引脚变成四个引脚。可变型中也有无GND引脚的浮动工作型，这种情况为三个引脚。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yWCj1gFI660IUdhKkmExicamrBRWaulnqXkgO6JneOh4feooch50WTqXQ/640?wx_fmt=png)

  

电压固定型和电压可变型之后还可分为标准型和LDO两种。

  
LDO是Low Dropout的缩写，是降低了输入输出间电位差的线性稳压器。标准型的输入输出间电位差最低也有约2V，而LDO可控制在1V以下。

  

**何谓LDO？**

  

LDO是Low Dropout的缩写，是即使较低的输入输出间电位差也可进行工作的线性稳压器。

  
有时也称为低损耗型线性稳压器或低饱和型线性稳压器。

  
关于LDO的输入输出间电位差并无数值性的定义，一般是指稳压器稳定工作时最低电位差可控制在1V以下的稳压器。

  
例如，对于需要3.3V电源的IC，由于标准型不可制作5V到3.3V电源，因此，需要输入输出间电位差较低的LDO。

  
这样，LDO在输出与标准型稳压器相同的电压时，也可设定较低的输入电压。

  
通过低电位差工作，可使能量损耗较少，可进行抑制散热等设计。

  

压降

  

在线性稳压器的内部，从VIN到VO间加入了晶体管，使此晶体管稳定工作所需的输入输出间最低电位差称为压降。

  
输入输出间电压差低于压降时，晶体管难以维持稳定的工作，输出电压会降低。

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmGXzow3jmUzJIFbHQFJ5yW7iaTYvza68rjwPZBBjHKFYic7XhO9QasMhNbhiaTd2c0ic0al4f8vhZLoA/640?wx_fmt=png)

  

这样，为了使含有LDO的线性稳压器工作，设定了所需的最低输入电压值，此时(VO + 压降) 即为稳压器的最低工作电压值。

  
输入电压值 (VIN) 低于最低工作电压时，输出电压不能稳定工作。

  

来源：techclass.rohm