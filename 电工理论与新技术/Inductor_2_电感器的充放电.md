# Inductor-2：电感器的充放电


> 原文地址: [https://mp.weixin.qq.com/s/5XNl8iyQ2-102ISSxxeVsQ](https://mp.weixin.qq.com/s/5XNl8iyQ2-102ISSxxeVsQ)

_![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTEIVMoucWHdVFmVuWfkUA0CyvCkrPeCjsT37dH0Irb3LCgN4ibJWubzwgctNoJ66GJ2r403wsJvOA/640?wx_fmt=png)_

__**_★★★_**_Inductor-2---电感器的充放电过程_**_★★★_**__

引言：如[Inductor-1：电感器的模型和参数](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486691&idx=1&sn=f5c8f8098de89d36ee3ad730b85475c4&chksm=c335467cf442cf6aec87f722b228175f1a551272af0df4c3a7006ce366f108d789371dc42af9&scene=21#wechat_redirect)中所说明的那样，电感器是单纯地缠绕电线而制成的，因而在施加电压时基本上会有电流流过。但是，电感器是旨在利用基于电磁感应的作用的元器件，并非只是单纯地有电流流过就可以。本节阐述施加直流电压和交流电压时电感器的作用。

__€1._施加直流电压时_

如电路_**图2-1**_所示，当开关闭合向电感器施加直流电压时，电流会流向电感，随着流向电感(绕组)的电流的变化而产生的磁束也会随之变化，并在电感上产生电动势（感应电动势）。基本上电感器是单独的绕组，因而将其叫做“自感”。此电动势向着与电流相反的方向产生，阻碍电流的增加。相反，一旦开关断开而电流开始减少，电感器就会阻止电流减少。电流（IL）表示如下情况，即在开关闭合时电流会流出，但因电动势电流增加受阻之故，电流会以某个时间常数升高，在升高之后则依赖于电阻成分而会有恒电流流过，一旦开关断开电流就会下降，但会按同样的方式在某个时间常数成为零。电压（VL）表示开关闭合时和断开时电感器的电动势。如式中所示，电感器上产生的电动势与电流的变化率（ΔI/Δt）成正比。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1EQaiaGcoENIg8FLJGaBp3jBQQtpuF4y58liaHx1GDGgc7RRQfwFskB7w/640?wx_fmt=png)

其中：

V：电动势（V）  

L：电感值（H）

∆I/∆t：电流的变化率（A/s）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D19vTiaTnVichIZB2t5XiaSFlHSx2QrBNb2HVL6mse9zDwbZJzHSk5jw8YA/640?wx_fmt=png)

_**图2-1：对电感充放电示意图**_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1s4fu27icZBvIGmI09ENob026I1lfTpIBibxbdVln2PRwwwZ4cofwoqkA/640?wx_fmt=png)

_**图2-2：电感电流电压波形图**_

根据上述过程模拟出电流波形**_图2-2_**所示，开关闭合时电流会比较缓慢地增加，因而电动势只会上升至电源电压。开关断开时，电流会在瞬时被切断，因而与开关打开时相比，电流急剧减少，单位时间的变化率增大，因而会产生更高的电动势。另外，开关断开时电流没有瞬时成为零，是因为在开关的端子间因电感上产生的高电压而有放电电流流过的原因。能够产生如此高的电动势，是电感器是“能够将电能转换成磁能并蓄积在电感器内部”的。蓄积起来的能量可用下式来表示，与电感值的大小成正比。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1NTfRTYeRDEOyszM3zyXgsEsopYzu0TfYQEfKOM9klGYbhAwvc45t4A/640?wx_fmt=png)

其中：

W：能量（J）

L：电感值（H）

I：电流（A）

__€2._施加交流电压时_

上述说明中描述了电感器上产生的电动势的大小与流向电感器的电流的变化率成正比，如**_图2-3_**这在交流波形时也是一样的。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1qQHEdlrfrFGmm5zV94XOExB9tEVTHTVickRtF8EhqwhZWibOJU7d7FaA/640?wx_fmt=png)

_**图2-3：对电感施加交流电**_  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTxMREFADYahjjl1uo2U6D1Xe8PlyW7ULicMHJhLEw5ezEibn4AMYjNlKTONOyTicxAfBPhlsJTq7VZQ/640?wx_fmt=png)

_**图2-4：电流电压相位差90°**_

(1) 首先，当电流从零上升时, 电流的变化率最大，因而电压会增大，但电压会随着电流的上升速度放慢而下降，并在电流到达最大的时点(电流的变化率为零)电压成为零。

(2) 当电流从最大值开始降时，开始产生负电压，在电流成为零时（电流的变化率为最大）电压最低。

在对此电流和电压的波形进行观察时，如果电流波形为正弦波，则电压波形也为正弦波，此外还可弄清电流波形相比电压波形滞后1/4周期（电流的相位滞后 90°）的情况。针对电流的变化大就会有较大的电压产生这种情况，也可弄清越是电流的变化率大的高频电流，其产生的电压就越会越大。但是，实际的电感器电压与交流电源的电压是一样的，因而如果以电压为基准思考，则可以说在恒压下频率升高时流过的电流减小。也就是说，交流时频率越升高，流过的电流越不易通过，电感器发挥类似电阻那样的作用。我们将此叫做线圈的感抗（XL）。感抗与流过的电流可用下式来表示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQcKblTYNJbFPCclNwZPC6fmbGX8hrcFMGhf5QFogicGicPm1dNRsNMEcREt9Ziaf0CfFuMSbHyOCHyw/640?wx_fmt=png)

其中：  

XL：感抗（Ω）  

f：频率（HZ）

L：电感值（H）

V：交流电压（V）

I：交流电流（A）