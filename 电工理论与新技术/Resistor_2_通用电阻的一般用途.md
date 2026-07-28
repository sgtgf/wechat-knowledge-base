# Resistor-2：通用电阻的一般用途


> 原文地址: [https://mp.weixin.qq.com/s/FroqDfF6Vun7YGMV0GP3kw](https://mp.weixin.qq.com/s/FroqDfF6Vun7YGMV0GP3kw)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTEIVMoucWHdVFmVuWfkUA07zn5KEBmKE2N7cjqgjVSSEZflDSkc6UR1A5VdzeBU5IdsrgtH37v2g/640?wx_fmt=png)

_**_★★★_**_Resistor-2---通用电阻一般用途_**_★★★_**_

_€1.限流电阻_

用于限制晶体管的基本电流和LED电流。如_**图2-1**_通过设定阻值，来限制电流在适当范围，还有诸如驱动MOS管的限流电阻等等。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAehrd43NnlqrhdlHD9VKW0abPTKkCY6zlWA5XVlULDdt0epdDOW4NYtg/640?wx_fmt=png)

**_图2-1：LED驱动限流_**

__€2._上拉/下拉_

数字信号电路通过母线与CPU(MPU)、存储器、外围设备等交换信息。为了稳定母线信号电位，在电源、接地与信号线之间，插入1k～100kΩ的电阻（上拉、下拉电阻）。或者为了使信号线与LSI的阻抗匹配，在信号线与接地之间使用数十～数百Ω左右的电阻器（终端电阻）。如_**图2-2**_所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAepLSbIj75iahKbgoIbMgOsxyiaibsia7jAuaicc75pTXYZGfmeBdvtCbscOw/640?wx_fmt=png)

**_图2-2：上拉和下拉电阻_**

__€3._阻尼/端接电阻_

_**图2-3**_通过在信号传输线中串入数十Ω的电阻，来抑制信号过冲和下冲，比如EMMC数据线，视频信号线等等。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAeKuDkwM4z5S7ibkFEbdGnKXMvoOtr60ek0qA67OeHDibiabBialCupSWia3w/640?wx_fmt=png)

**_图2-3：信号串接电阻_**  

__€4._电流电压转换_  

根据欧姆定律，通过电阻压降来计算电路中的电流，利用这一点，电阻被广泛用于电流检测。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAe7nDmzG2509Pxj2vY7td3SExO6wloDFYlrlaCSSXUmxYqOSmLLs4p1A/640?wx_fmt=png)

**_图2-4：检流原理_**  

__€5._滤波电路_

如_**图2-5**_，与电容器结合使用，可使特定信号的频率通过。也用在使用运算放大器的有源滤波器。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAeh19JIKB5QxD0qakicplC8nSUNueu0lTqicwE62v6qqKicjbOgXLwre4xg/640?wx_fmt=png)

**_图2-5：左边为RC低通，右边为CR高通_**

__€6._跳线_

用于连接彼此分离的电路，使用的元件称为跳线。跳线的阻值非常低，有贴片式，引线型和金属板型。 跳线有以下用途：

・用单面布线板等连接不同电路到同一电路

・确保电流容量

・用于测试电路板（分离，连接）

・不同产品等级（高端，中端，普通）的功能切换

跳线不是0Ω跳线阻值非常低，使走线接近短路，也称为零欧姆电阻。但是，虽然说是0Ω，实际上是有阻值的，例如一般矩形片状跳线电阻阻值为50mΩ以下。因此，允许电流比较小，超过该值不能使用。另外，有必要考虑由于电流引起的发热和劣化。金属板贴片跳线电阻阻值低并且热阻小，因此它们适用于大电流。**_表2-1_**示出了常见跳线（检流）电阻的类型：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAeym9uTmv7q2AK9Qg4QWtUiam1R18w1iatcKUvVrlfic6f501l9NibiaM8yYw/640?wx_fmt=png)

**_表2-1：跳线（检流）用电阻类型一览_**

___€7.__跳线电阻用法_

模拟电路，逻辑电路等代表性使用示例如下**_图2-6_**，**_图2-7_**所示：

・产品版本设置（比特切换）

・因设计变更使不再需要的零件（保险丝，电流检测电阻等）短路。

・连接电路模块（用于电路分析的电路模块分离）

・大电流模式的旁路（低阻抗连接，避免噪音和有害辐射）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAey5WMiasaoTqJy69ricgzW4M2zUG2ltbN9MUTibHz2yY6RBrhukWCPMkxg/640?wx_fmt=png)

**_图2-6：同一位置可换用保险丝/检流电阻/0Ω电阻_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAevUMaT4OduE2JAmtiaWwzRdtNeCawjnINOVLpGtSJ8KEm7DVTCquUxZA/640?wx_fmt=png)

**_图2-7：电源干路串入0Ω电阻（可多个并联）_**

大电流跳线：

如**_图2-8_**，在电源电路中，通过加厚布线板的铜箔来确保电流容量。在这种情况下，连接电路的跳线需要能够承受大电流。另外，在混有微细布线的布线板中，由于设计规则的限制，不能加厚铜箔，所以可通过在流经大电流的配线上贴装跳线电阻，以提高电流容量。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRC5qRD2kWYqia45c6WvzDAeGoafEbZ7UUW6ibRlicic2bZdia9oPXQibCVWuKfo4IFfAlO5LibGicslCTthQ/640?wx_fmt=png)

**_图2-8：大电流多个并联跳线_**