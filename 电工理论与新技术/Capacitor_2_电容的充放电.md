# Capacitor-2：电容的充放电


> 原文地址: [https://mp.weixin.qq.com/s/jL1rLcYiDituXomvh3Fzow](https://mp.weixin.qq.com/s/jL1rLcYiDituXomvh3Fzow)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTEIVMoucWHdVFmVuWfkUA0tkibaRhOHV0GSibb2aJhFibTvNDT79DeO10iavxtoRSaTcE2Cg7nZCODxg/640?wx_fmt=png)

**_★★★_**_Cap-2---电容的充放电_**_★★★_**

引言：电容的充放电过程我们需要着重了解，此过程在电源方面的计算非常有用，包括一些电路设计属性，延时电路等等。

_€1.充放电公式推导_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvsKG7l5GOmicjYtfQZtUnP3ylTA48oq6zcXJX9hIBuFOTMhBcE92D4icA/640?wx_fmt=png)

**_图2-1：电容充放电简易图_**

如_**图2-1**_，在电容器的两端加上电压之后电荷被储存，相反，将储存有电荷电容器两端短路后，成放电状态，电荷的量与电压成正比（若是电感器，电流通过产生磁通，磁通量与电流成正比）。

电容器的静电容量是电荷量与电压的比例常数（电感器的电感量是磁通与电流的比例常数）充电时或放电时的电流是电荷量随时间的变化率（电感两端的电压是磁通随时间的变化率）。

充电：电荷增加，电容两端电压上升；放电：电荷减少，电容电压下降电流是电荷量随时间的变化率：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvGMlicHnL3E6uqoJGUw9kG4HTyUiasE0Tc90iaaxWKZP9GZj3mmGAn2HxA/640?wx_fmt=png)

静电容量是电荷量与电压比例常数：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvgibXM8RY6OJy008uRoaWvAg8FtEPNHicuic0M5iaz7PZ89M0KL5UIOLDKQ/640?wx_fmt=png)

电压，电流和静电容量的关系：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovv554Q0plnLjNsY0C5ZIhLjnrVUPIThDOowIibia25zs8ewsgibF0FFtofQ/640?wx_fmt=png)

或者：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvficLYlib5AOvOfcR2frhz6pr3BFvpv9WZ0AgvYaibuM5ClQgzSc7G1Csw/640?wx_fmt=png)

电感器的等量关系式：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvia019oSOJmNLtCKtSgVRXzy9zXXRSYrpmUX92AE1lThVcdT2h25b1Fg/640?wx_fmt=png)

其中：

Ic：电容器的静电电流（A）

C：静电电容（F）  

dVc/dt：V-T曲线上的斜率

电容器由于其内部是绝缘的，因而不会有直流电流流过，但伴随着所施加电压的变动，通过进行充电和放电，看似好像有电流在电容器中流动。电压随时间变化率越大，流经电容器的电流就越会增大。

__€2._直流充放电波形_

这里就通过电阻从直流电源向尚未被充电的电容器充电后，让其放电时的电容器电压和电流进行说明。_**图2-2**_上，若在充电侧将开关置于ON，V0/R1的峰值电流就会流向电容器，而后电流会随着电容器的电压Vc升高而降低，当Vc=V0时，充电完成，电流变为零。然后，若在放电侧将开关置于ON，V0/R2的峰值电流就会流向电容器，而后电流会随着电容器的电压Vc降低而降低，当Vc=0时，放电完成，电流变为零。

这里需要理解的是，电容器的电流Ic的大小依赖于电容器电压Vc变化的大小。此外，开关ON时，V0/R的电流就会流过，而在这里如果R=0，则理论上会有无限大的电流流过瞬间完成充放电。然而，实际上因受到电容器本身具有的电阻成分(ESR)或配线电阻及电抗成分的影响而不会成为无限大，但电阻成分远比电池小，因而可以说是能够在瞬时进行充放电的元器件。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvpCSickcEic79ToNVomSxKN1aBdj6AJxpkUB5eO4yakzib4uz32WiaDbia8w/640?wx_fmt=png)

**_图2-2：直流简图_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovv9QtZP1bBw4QBKuBfibw4ibdkQlQGRhMvfhhbTvwCrJZImbIf6y9OaGDA/640?wx_fmt=png)

**_图2-3：充放电电压电流波形图_**

____€3.__交流充放电波形__

这里就向电容器施加交流电压时的电容器电压和电流进行说明。

图_**2-5**_中描述了流向电容器的电流大小依赖于电容器电压变化的大小，这在交流波形时也是一样的。

①首先，当电压从0V上升时，会有大量的电流流过电容器，而电流则会随着电压的上升速度放慢而下降，并在电压成为最大的时点(电压变化为零)电流变为零。

②当电压从最大值开始下降时，负电流开始流过电容器，在电压变为零这一点(电压变化为最大)电流成为最大。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvKfgnTZPp70gOfx5GlxCKxmRfIQPlIskKy0anv53a4db36aSJL116sQ/640?wx_fmt=png)

**_图2-4：交流充放电_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRK4qPWvL0TdEeJicrTWwovvvH7V62fxe8S5JVjUwj4OVqd8tLClAGLdWIafpC1lRWLyEpC8G6DJyQ/640?wx_fmt=png)

**_图2-5：电压电流相位差90°_**

在对此电压和电流的波形进行观察时，如果电压波形为正弦波，则电流波形也为正弦波，此外还可弄清电流波形在电压波形之前偏移1/4周期(电流的相位先行90°)的情况。此外，电压的变化大就会有较大的电流流过这种情况表明，越是电压变化大，高频流过的电流就会越大。此时流过的电流(有效值)如下式所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D16VEa4QlNaL6MxtyA0NVxsibdTDBjNmpYc599kczDV33TXt5IkBVohCg/640?wx_fmt=png)

其中：

Ic：电容器电流（Arms）  

f：频率（HZ）  

C：静电电容（F）  

Vc：电源电压（Vrms）