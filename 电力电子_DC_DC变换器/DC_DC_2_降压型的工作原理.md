# DC-DC-2：降压型的工作原理


> 原文地址: [https://mp.weixin.qq.com/s/WAbfgDz1pdekP97vHPdvOA](https://mp.weixin.qq.com/s/WAbfgDz1pdekP97vHPdvOA)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTYlRn8A4yfA6zO8bPNS040Ytia0S9FQUvdlWa0hDyTYlRlQxLO2SQkwFv1dEibkWAM0M88HuuicGOgQ/640?wx_fmt=png)

**_★★★_****_DC-DC_****_\-2-----降压型的工作原理_****_★★★_**

_€1.降压型DC-DC的工作路径_

**_图2-1_**红色箭头表示开关元件打开时的电流流向：开关元件--->电感（此时对电感进行充能）--->Cout--->负载--->GND

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0zIWdalYkzaYVLdMPJlFFBIS5h7LMLeLEYxDK36bgxJewjLNwnaRLow/640?wx_fmt=png)

**_图2-1：降压型开关打开时电流流向_**  

**_图2-2_**绿色箭头表示开关元件关闭时的电流流向：电感（此时电感进行放能）--->Cout--->负载--->GND--->续流元件

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0mYENRmn7cJ3uUodUPymOK5P8GCnDI5CJmSbNqtjpFwgq32NDDiaGSJQ/640?wx_fmt=png)

**_图2-2：降压型开关关闭时电流流向_**

输出电压与基准电压进行比较，检查输出电压是否为设定电压，低于设定电压时，开关变为ON，从输入向输出供电，此时，电感会蓄积磁能。如果输出电压高于设定电压，则开关OFF，电感所蓄积的磁能变为电流被供往输出负载，再返回电感。当电感的磁能耗空，输出电压开始下降时，开关再度变为ON。如下_**图2-3**_是连续过程中的电流波形：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs025Co8yHorsG2g2ERhcicibwZVv1jBxMQyqHoDHAxnbNS9MfospxBxmkA/640?wx_fmt=png)

**_图2-3：连续状态下各关键器件流经电流趋势_**

开关电源是一个闭环的控制系统，我们可以把开关电源的电流比喻为水流，输入电容就是一个高的蓄水池、输出电容是一个小的蓄水池，把一小杯一小杯的水从大水池传送到小水池，通过控制传送的间隔时间和水杯的水量从而实现小水池固定的水量，当输出的水量低了，就增加杯子的水量，当输出的水量高了，就减少杯子的水量。当开关开通的时候，能量从输入向输出传递，电流是斜线上升的，好比模型里杯子的水往小水池传送；当小水池的水偏高了，开关就关断，这时电感、负载、二极管形成自然的续流回路，电流开始线性减少；当小水池的水低到一定程度后，重新开始开通开关；通过这样高频率的开通和关断，就形成一个稳定的输出电压。

_€2.降压型DC-DC的工作过程_

1.工作流程  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0IKjTP5GbK2MAsPkqvicN80hV0tCKcqzTFicM8PX7xnAy7Iibj44OBwhCw/640?wx_fmt=png)

**_图2-4：降压DC-DC工作流程_**  

__€3_.关键工作波形_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0KHr25GibVwrn59ictAgyTOabKPMnNtpRpJ3Pn7ObOfIDFfOvUP0iaQHmA/640?wx_fmt=png)

**_图2-5：PWM产生逻辑_**

1部分：放大FB信号，使ADJ电压和基准电压相同，2部分：比较FB电压和三角波，决定应该开启和关闭的时间，而输出电压的精度为R1，R2的波动和基准电压精度的乘积。_**图2-6**_是关键元件处的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0GAI4RQVN4fHibpkKxTsEagTzfibzw4liczTCicFwicic0kmesTHKKO3GMCWQ/640?wx_fmt=png)

**_2-6：关键工作波形_**

__€4_.占空比D的变化带来的升压量的变化_

降压型通过降低输入电压来决定输出的电压，FET的ON时间越长，即开关元件打开的时间越长，越能输出更高电压，但是也会受电感性能，电感的储能能力以及充放电时间的限制。对于输出电流，占空比对输出电流几乎没有影响，影响额定最大输出电流的是DC-DC的开关元件过流值Id，内阻RDS(ON)，芯片耐温，这个我们从电流环路路径就可以看出来。如下_**图2-7**_和_**图2-8**_分别演示了占空比为20%和80%的情况。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0pVPgibqdeMptMicsJYXiaKA11onqfvBuMQeHKlFpT9SnEiaDqiasDk7A5gQ/640?wx_fmt=png)

**_图2-7：举例20%占空比Vout=0.8V_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRcxdnTNrfoo5c8KQObuGs0lmNkjSYRBvDVjA7ZsqGnSJ5SKeibWquqNGic4LugEw5bo6FtX33YF0KQ/640?wx_fmt=png)

**_图2-8：80%占空比Vout=3.7V_**