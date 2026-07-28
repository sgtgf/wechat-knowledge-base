# EMC-2：噪声的产生机理和来源


> 原文地址: [https://mp.weixin.qq.com/s/k3vuWaUM2eq3kQowil\_6KQ](https://mp.weixin.qq.com/s/k3vuWaUM2eq3kQowil_6KQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSgfWB8HTEZWSlLytVhHkTvuRj6KTpVPVkZ2382GI8jXBpnv4Wtk7iaBSRiclJSLPgDNOShKR8ibS9Tg/640?wx_fmt=png)

____**★★★**______EMC-2---噪声的来源______**★★★**____

引言：噪声广泛存在于自然界，上节揭示了噪声的本质，噪声按照噪声携带能量的强弱分为功率型噪声和信号型噪声，功率型噪声持续时间短，能量强，对设备的寿命具有很大的影响，而信号型噪声顾名思义来源于信号且作用于信号，本节简述噪声的产生机理和来源。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRIaarCzwicwVPYNyGjVMnxRy4fUliamuz9MtGnFHGb7dvFAHz3HOleUvOpKWf3NIib4JXYibbOeHLNwA/640?wx_fmt=png)

**_图2-1：噪声的分类_**

____€1.功率型噪声的产生____

_静电_

静电是不同物理性质的物体表面积聚的电荷发生短时间转移的现象，静电的特征是持续时间端，脉冲高，不加防护策略的话容易损坏后继器件，并且对数字信号也会造成瞬间的干扰。

_浪涌_

浪涌出现在电源网络中，浪涌波持续时间相对于静电长，但峰值较低，整体能量高于静电，电源线中的浪涌如果不加消解，会直接损坏受电器件。

_波动_

波动也是出现在电源网络中，波动一部分是源端不稳，一部分是负载端变化过大，波动的危害小于浪涌，在一定范围内不会有影响，波动超过一定阈值，就有风险，缩短用电器件的寿命。

_开关噪声_

DC-DC是开关型器件，所以DC-DC供电中杂带的噪声也归结为开关噪声，来源在于开关节点的高频率切换产生高频信号，该信号一部分辐射出去，一部分跟随电源线传输进后级。

________€2.信号型噪声的产生________

_高速数字IC_

CMOS电路简化模型主要应用于数字IC，如**_图2-2_**所示。驱动器侧的CMOS晶体管的工作用开关简化表示，接收器侧的CMOS晶体管栅电容用接地电容器表示。数字IC通过控制驱动器侧的与信号线相连接的开关，将其切换至电源侧VDD或接地侧GND，可将信号输出电平设置为1或者0。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5up9xYg3Va7sS0sZcecOytbjrtYv7Ny0icCm3Yh83iapoznbu1DAiaUR4TQ/640?wx_fmt=png)

**_图2-2：数字IC简化模型_**

正常情况下，如果CMOS数字电路电源信号电平不改变，几乎没有电流流过。然而，如果栅电容充电电流（信号电平从0切换至1时）和放电电流（当信号电平从1切换至0时）通过信号线，如**_图2-2_**所示，电流就会流过电源处和接地处。当信号切换时，除了此电流，还有所谓的直通电流会从驱动器电源处流向接地处，直通电流也成为脉动电流流经电源处和接地处。

由于这类电流跳动非常剧烈，包括很多频率元件，因此当能量向外辐射时，就会造成噪声故障。此外，由于电流急剧变化造成电源电压变化（电源和接地模式电感），会造成共用同一电源的外围电路运行不稳定（地弹）。

_振铃_

__![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uUgMNOia8aZ6AaVdXdDFpFqVlqibQt4UUFRhZVe4FYCv5ick17NR9bbd4g/640?wx_fmt=png)__

**_图2-3：振铃影响频谱的构成_**

振铃会产生更多高频率的噪声，如**_图2-3_**所示，在频谱上体现为频率范围拓宽，幅度增强。

_反射_

如果信号沿互连线传播时，所受到的瞬态阻抗（线末端或者是互连线拓扑结构发生改变的地方，例如拐角，过孔，T型结构，接插件等处）发生变化，则一部分信号将被反射回源端，另一部分发生失真并继续传播，这正是单一网络中多数信号完整性问题产生的主要原因，所以反射这一概念已经是信号完整性的范畴，但反射也会增加噪声。

__![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uFYhCO1zEIicODlvWiaS2mmQAgnmjN49x3zWflzOG5OaTlrTAl7HTC14g/640?wx_fmt=png)__

**_图2-4：反射增加噪声原理_**

____€3.小结____

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQRc3UY54sicKesc68qZDYxjz7gtvbuFFeeaaU7wseRzrjHonf9I0ebEGg9V1x3lTArIIzUWzmGo4w/640?wx_fmt=png)

**_图2-5：噪声和相应对策_**

功率型噪声不仅会影响器件的寿命，还会影响系统的数字信号和射频信号，比如雷雨天气花屏，通话有噪音，静电触摸闪屏等等，而信号型噪声只对信号质量有影响，不会损害器件的寿命。在处理系统的噪声问题时，首先就需要判断噪声的类型，然后根据噪声的类型判断其来源和产生原因，最后再制定相应静噪策略。