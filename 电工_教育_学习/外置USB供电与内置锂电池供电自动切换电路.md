# 外置USB供电与内置锂电池供电自动切换电路

原创 LR梁锐 硬件笔记本 2022-08-03 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/hFTgzvp6lxR4PFM-im9aSw](https://mp.weixin.qq.com/s/hFTgzvp6lxR4PFM-im9aSw)

# ▼关注下方公众号了解更多▼

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCXIT8HbKgozZ4EPqwChwuLvTePEA9yb0TnmcvcFHfT3oXvSayz716hA/640?wx_fmt=png)

▲ 本文要分析的电路

很多内置有锂电池的便携电子设备，比如手机，通常采用这样的供电方式：

-   1、没有插入USB电源时，使用内置的锂电池供电。
    
-   2、当插入USB电源时，切换为由外置的USB电源供电，并对锂电池进行充电。
    

下图电路就是实现上述的功能，它来自一款电子书阅读器（Kindle同类产品）：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCEian8gicAgq7ZOlKgCj2D7iaAjPhRy97YdcFojicqSiauZKLDVtFvJgdEGQ/640?wx_fmt=png)

这是已量产的电路，成熟稳定，实物电路板如下图所示，几个关键的元器件做了标注：  

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCm9TTd8OcVXqfA8SwJ2LM06lonw000ELZIyAZuUibibAsBgVNCf2OB06w/640?wx_fmt=jpeg)

本文要讲解的是“外置USB供电与内置锂电池供电的自动切换电路”，所以先把上述电路中不相关的电路隐藏。

也就是隐藏锂电池充电管理、电源滤波等电路：

![](https://mmbiz.qpic.cn/mmbiz_gif/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCAJEMYw0a3Dhic4FCoib7MNOfQ6FzLAQ0hyAkricReo6FFc5f1ibPcqShlw/640?wx_fmt=gif)

隐藏后变成这样：  

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCgAC9SrHT2SrhibXcicQ8zZHia0jDIp3weaaFhN2NFaqVXca7ovqebTpuA/640?wx_fmt=png)

这一下子，电路变得好简单，实现电源切换的功能，竟然只需要一个二极管、一个MOS管、一个电阻！  

  

一、电路说明

将上述的“外置USB供电与内置锂电池供电自动切换电路”整理一下，弄好看点：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCXIT8HbKgozZ4EPqwChwuLvTePEA9yb0TnmcvcFHfT3oXvSayz716hA/640?wx_fmt=png)

功能逻辑是这样的：

-   1、当插着USB电源时，由外置的USB电源供电，即VBUS对VOUT供电。
    

  

-   2、当拔掉USB电源时，切换为由内置的锂电池供电，即VBAT对VOUT供电。
    

  

-   3、当重新插入USB电源时，切换为由外置的USB电源供电，即VBUS对VOUT供电。
    

  

二、原理分析

假设VBUS的电压为5V，VBAT的电压为3.7V，下面开始分析。

1、当插着USB电源时：

VBUS通过肖特基二极管D9到达VOUT。

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQC3hv4S31diajts6nlsZAZTB66FjDxPibAoc7mQB6cJztPmtm0P6hiaibr6A/640?wx_fmt=png)

肖特基二极管的导通压降约为0.3V，USB电压VBUS = 5V，所以：

VOUT = 5V - 0.3V = 4.7V

由于VBAT为3.7V，MOS管Q4的s极为4.7V，g极为5V，由此可知：

Vgs = 5V - 4.7V = 0.3V > 0

所以MOS管处于不导通状态,同时其体二极管也是反向截止。

由于电阻R155的存在，会浪费一些功耗，流过R155的电流为：

5V / 10Kohm = 0.5mA

2、当拔掉USB电源时：

VBUS的电压会从5V开始往下降，电阻R155起到给VBUS放电的作用。

VBUS的电压需要快速下降，因为如果下降慢了，会导致MOS管Q4打开变慢，也就不能很快地切换为电池VBAT供电。

如下图，假设VBUS缓慢下降到4.9V，即MOS管Q4的g极为4.9V。电池电压VBAT通过MOS管Q4的体二极管后降低了约0.7V，变为3V，即MOS管的Vgs电压为：

4.9V - 3V = 1.9V > 0

MOS管仍然不导通，VOUT的供电没有完全切换为VBAT。

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQClAhBre1TqePJOOd7WMYo0KvDjJNKhkJ81T8rEUnQriaxVknNnffV69Q/640?wx_fmt=png)

假设VBUS已经下降为1V，如下图。

则Vgs = 1V - 3V = -2V，MOS管已经逐渐打开。

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCQH6SdGgib0msWX4eHGQxib9DnhkEHbJ1K7nlqYoK3EBAtUuvSNLQwd8w/640?wx_fmt=png)

最终，VBUS会降到0V，MOS管也会完全打开，VOUT切换为用VBAT供电，VOUT电压变为3.7V：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCX4OOLP25ApOPHbeYKSV4ynMic1Gwfz9GKdzKQ3BF1c99A9SMyYiabibRw/640?wx_fmt=png)

VBUS接的滤波电容会令其电压下降缓慢，如果发现VBUS的电压下降过慢，可以减小R155的阻值。但是这样会导致在插入USB电源时，流过R155的电流变大，增加了无谓的功耗。

所以R155的阻值不能过大也不能过小，需根据实际调试的效果来决定。

3、当重新插入USB电源时：

如下图，MOS管Q4的Vgs = 5V - 4.7V > 0，MOS管不导通，并且其体二极管也是反向偏置。

VOUT切换为用VBUS供电，Vout电压变为4.7V。

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQC3hv4S31diajts6nlsZAZTB66FjDxPibAoc7mQB6cJztPmtm0P6hiaibr6A/640?wx_fmt=png)

  

三、性能提升

在拔掉USB电源的瞬间，有没有可能MOS管Q4来不及打开，导致VBAT的电压没有及时切过来？

是有可能的。

MOS管Q4没有快速打开，VBAT供电不能及时续上来，会导致VOUT电压下降过多，VOUT的负载电路就可能工作异常。如果电路的负载较重，拉取的电流较大，尤其容易出现在供电电源切换时VOUT电压下降过多的问题。

怎么办呢？

-   1、可以加快MOS管打开导通的速度。方法是减小VBUS的滤波电容的容值，减小电阻R155的阻值，这都是让VBUS快速掉电，从而让Vgs快点到达令MOS管完全打开的电压。
    

  

-   2、在VOUT增加滤波电容，但是效果不怎么明显。
    

  

-   3、这是重点！可以给MOS管并联一个肖特基二极管D1，如下图所示：
    

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCzeua6hicSUkicMaySbDvucSwI0671Fg1qkpSmQEXHCp4kGUjfIg5KDsw/640?wx_fmt=png)

该肖特基二极管D1的正向导通压降约为0.3V，比MOS管的体二极管要小。在MOS管完全打开之前，VBAT通过肖特基二极管D1对VOUT进行供电，可以缓解VOUT电压下降过多的问题。

**这个方法非常实用，该电路与方法已经被申请了实用新型专利。**其实很多再普通不过的电路都被申请了实用新型专利，尽管这些电路被大众长期使用在先，具体就不展开了。

  

四、应用案例

除了上述的电子书阅读器有应用之外，还有大量的产品使用了这个切换电路。

比如MicroPython领域著名的**01Studio公司**，其出品的多款开发板都有这个切换电路。

以其中的一款型号为“pyWiFi-ESP32”的开发板举例，其电源部分的电路图如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCKiaUHEupl61hO6zYPYiaplvqTWxxcQe2wjwAoZltyr7TerU2wPOZBjFA/640?wx_fmt=png)

其中，电源切换相关的电路在这里：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCQsDj2ibghHs9WfPET9EVNg4NJufAicoKFR7GZqeYKt1kIXeQ5x4rGwpw/640?wx_fmt=png)

标注对应的实物图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GDjFSOJZcoOia4V0HTsUXhQCfze7V6r5xp5xj2NAtcLjjOJObX3mhe8NZmDicYH5Csicyldq65hFkKkQ/640?wx_fmt=jpeg)

  

后台回复“**加群**”，管理员拉你入技术交流群。