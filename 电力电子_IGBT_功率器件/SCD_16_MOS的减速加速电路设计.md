# SCD-16：MOS的减速加速电路设计


> 原文地址: [https://mp.weixin.qq.com/s/pXpCepOXx1KltgILAFHI8w](https://mp.weixin.qq.com/s/pXpCepOXx1KltgILAFHI8w)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7KThbfUJcfiaxibumpPRiav8j4a28T2n2xI0ZniaD73I1Mt4vzsBCyzukmA/640?wx_fmt=png)

____**★★★**______SCD-16---MOS的加速与减速______**★★★**____

引言：在开始讲解MOS的减速加速电路之前，我们还是先来回顾MOS开启与关闭的根本机制。以NMOS为例，开启NMOS本质是对G极进行充电，至Cgs电荷充满，G极才会达到控制端电平值或者开启阈值，关断NMOS时，GS电荷需要泄放，至电荷泄放完毕，G极才会达到GND或者关断阈值（传送门：[MOS-1：MOS的寄生模型](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485989&idx=1&sn=d411ff715d230f638b41e002adfdc1cf&chksm=c33540baf442c9ac894b1740e0c54265de5a22c419ddc0b3668e801566b906a8dc415734b0dc&scene=21#wechat_redirect)）。对于PMOS，这个过程则反过来，对G极充电关断，G极放电开启。

第二点，需要理解MOS的开启与关断是一个动态的过程，持续关断或者开启期间视作稳态，控制端与G极电平相同，但开启与关断瞬间，控制端与G极的电平不同，G极的电平变化始终慢于控制端的电平变化，因此电平不同就会导致G极电流的流动，或流入G极或流出G极。  

所以减速加速NMOS的根本机制就是：快速开启NMOS--->增大流入G极的电流；减速开启NMOS--->减小流入G极的电流；快速关断NMOS--->加速释放G极电荷；减速关断NMOS--->减速释放G极电荷（PMOS是一个逆过程）。  

____€1.__栅极电阻__

因为栅极电阻直接控制了栅极电流的大小，所以开关速度随栅极电阻值大小而变化。

增加栅极电阻值会减慢MOSFET的开关速度，并增加其开关损耗。降低栅极电阻值会增加MOSFET的开关速度，但由于导线杂散电感等因素的影响，可能导致在其漏极和源极端子之间施加浪涌电压，因此有必要选择最佳的栅极电阻。

不同的栅极电阻可以用于MOSFET的不同的开启/关闭速度要求，**_图16-1是_**如何使用不同的栅极电阻来开启和关闭的一个示例。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTP3KF9YEOs0uhIKaUOKz80ib5K8IDyfZnNk5k4QbqFYHzic6UntQ9dRVHEqxrcndWFQEUOZ51OJGYQ/640?wx_fmt=png)

**_图16-1：驱动和关闭NMOS的不同路径_**

开启NMOS时，电流经过R1从控制端流向G极，关闭NMOS时，电流经过R2从G极流向控制端，此时调整R1和R2的值就可以实现开启和关闭的某一个要求的速度差。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTP3KF9YEOs0uhIKaUOKz80OApJjHFiaTw1aLSXJdQc8sh5iaTibchROFNIVicUf4a2KRILXuOh2lRvjQ/640?wx_fmt=png)

**_图16-2：栅极电阻的更多配置_**

**_图16-2_**示例了栅极电阻的另外两种用法，**_图16-2左_**导通时栅极电阻器：R1和R2并联，关断时的栅电阻器：R2，这样可以做到开启较快，关断较慢；**_图16-2右_**导通时栅极电阻：R1，关断时的栅极电阻：R1和R2并联，这样可以做到开启较慢，关断较快。

____€2.加速关断二极管____

对于NMOS，关断电流比较大时，能使MOSFET输入电容放电速度更快，从而降低关断损耗。大的放电电流可以通过选择的低输出阻抗的MOSFET或电压器件来实现，最常用的就是如**_图16-3_**的加速二极管。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTP3KF9YEOs0uhIKaUOKz80TeluBicmVfeCO905gPVVJlsehzhlZmpj4zcQuc1iam9YXl13Ztn3h0HA/640?wx_fmt=png)

**_图16-3：加速二极管的使用示例_**  

栅极关断时，电流在电阻R1上产生的压降大于二极管D1的导通压降，这时二极管会导通，从而将电阻进行旁路，随着电流的减小，二极管在电路中的作用越来越小。该电路作用会显著的减小MOSFET关断的延迟时间，但是这个电路有一定的缺点，那就是栅极的电流仍然需要流过IC内部的输出驱动阻抗。

______€3.__PNP加速关断驱动电路____

上面两节相对于无栅极电阻的开关速度还是偏慢，更快的关断方式则是主动“汲取”或者“灌入”电流。如**_图16-4_**使用PNP加速NMOS关断，开启时电流通过二极管D，关断时则利用PNP三极管主动从G极汲取电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTyUibItyyWTFBnpewKzWo2vkxpicmYx1xLHDoGN1LtHYRqQCAU83icq7K9dP1mxNdp590VW5ECYRo7A/640?wx_fmt=png)

**_图16-4：PNP加速NMOS关断_**  

**_图16-5_**展示了PNP加速NMOS关断的动态过程电流流向。**_左图_**在控制端从低电平往高电平切换时，Vbe＞0，Q2关断，充电电流从二极管D流入，Q1开启；**_右图_**在控制端从高电平往低电平切换时，G极电平不会瞬间变化，此时Vbe＜-0.7V，Q2导通，Q2快速将电荷从G极汲取走，使G极电平快速下降，达到Q1快速关断的目的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTyUibItyyWTFBnpewKzWo2vGhGJS0gCDl1x19Tu5hDk0k1b1BjtG6dUw0RicbnFzFJJneDZmzATzzg/640?wx_fmt=png)

**_图16-5：PNP加速NMOS关断的动态过程_**  

PNP加速关断电路是目前应用最多的电路，在加速三极管的作用下可以实现瞬间的栅源短路，从而达到最短的放电时间。之所以加二极管，一方面是保护三极管基极，另一方面是为导通电流提供回路及偏置。

该电路的优点为可以近似达到推拉的效果，加速效果明显。缺点是栅极由于经过两个PN节，不能使栅极真正的达到0V（GND），但电压很低，不影响NMOS的完全关断。

______€4.NPN加速关断驱动电路______

**_图16-6_**是使用NPN加速PMOS关断的电路，关断时电流通过二极管D，导通时则利用NPN三极管主动往G极灌入电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQDjgysYsZA1gtl4EogDqmWHm568y7icVk0qiaZ5iaMKBniaQD37dcj4atMvUsPfsnd104eynAvvX34Zw/640?wx_fmt=png)

**_图16-6：NPN加速PMOS关断_**  

**_图16-7_**展示了NPN加速PMOS关断的动态过程电流流向。**_左图_**在控制端从高电平往低电平切换时，Vbe＜0，Q1关断，放电电流从二极管D流出，Q2开启；**_右图_**在控制端从低电平往高电平切换时，G极电平不会瞬间变化，此时Vbe＞0.7V，Q1导通，Q1快速将电荷从G极灌入，使G极电平快速上升，达到Q2快速关断的目的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQDjgysYsZA1gtl4EogDqmWXkobk4bB1RAL7VFIKZmjuU6f6CN8XZyPB5ddkcFwPFzUA462fxYykA/640?wx_fmt=png)

**_图16-7：NPN加速PMOS关断的动态过程_**

小结：

1#：关于基极电阻的大小选择，这在前面其实已经提到过，不建议使用K级别的电阻，常用阻值在3.3Ω/10Ω/33欧姆等等。除非有很明确的需求，根据欧姆定律计算出基极电流，然后匹配充电时间。

2#：而使用PNP和NPN的加速，使用小信号三极管即可，其参数取决于MOS的开启关断阈值，控制端的电平高低，ID基本都可以满足G极要求。

3#：减速加速在高频信号调理，大功率多相电源时使用比较多。

4#：以上几种电路使用Pspice进行仿真，可以直观的得到性能差异（后续会有Pspice仿真章节补充此项）。

（传送门：[BJT-1：三极管的三区含义](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489199&idx=1&sn=cf4a3db0db0d8a4a26aa48c91e452c89&chksm=c3355c30f442d5266676ff8df5c3f6273c197f1c54f14f6e560932e910e43cd4df27e233d0e4&scene=21#wechat_redirect)）

（传送门：[BJT-2：如何计算晶体管开关电路-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489619&idx=1&sn=cc35702cf79f1053faa43d186641788a&chksm=c33552ccf442dbda26f24febcbc952eaf04dcc768614e52391377f2951aaad8939fe6d429eb6&scene=21#wechat_redirect)）

（传送门：[BJT-3：如何计算晶体管开关电路-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489641&idx=1&sn=7733fa3121824ee7c1bf42be1627ce01&chksm=c33552f6f442dbe09d52656ef2eaa1fa3ce83e9ad449eeaced443e04632e86f2fa0282c671ba&scene=21#wechat_redirect)）

（传送门：[MOS-2：一文告诉你如何驱动MOS管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489368&idx=1&sn=3959f9a450a812a293c0b0d26b278a1a&chksm=c3355dc7f442d4d1333275ee72e093add654198644704f71ae896a9a51b1cd54bd2fc8f7df8e&scene=21#wechat_redirect)）