# Resistor-12：RTD的参数和特性


> 原文地址: [https://mp.weixin.qq.com/s/BkJcuog9-fFKFkl5xs6Mxg](https://mp.weixin.qq.com/s/BkJcuog9-fFKFkl5xs6Mxg)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSfWBvrQPFb5icNdAH7rrgC9fJvCXksiaZBbz4aoWtHWuye2tnyicRvZrpCOicxMzXCoRhibUoR6oZHpFg/640?wx_fmt=png)

_**_★★★_**_Resistor-12---RTD的参数和特性_**_★★★_**_

引言：RTD（Resistive temperature detector），即电阻式温度检测器，它常用于工业和科学领域的温度测量。RTD的测温原理是利用贵金属（纯铂金线）电阻阻值随温度而变化的特性，这种属性在低温到850℃范围内均非常稳定有效。相较于NTC测温，RTD成本上会昂贵许多。

所以RTD又叫：Platinum Temperature Sensor：PTS，铂温度传感器，其电阻随传感器温度升高而增大，并且可随着时间的推移而重复。

RTD 是一种无源器件，它不会单独产生输出。需要使用外部电子设备来测量传感器电阻，方法是使小电流通过传感器，以产生电压。通常是1mA或更低的测量电流，最大5mA，没有自热风险。

_€1.RTD的R-T曲线_

RTD的测温范围为\-200℃～850℃，精度优异，单个RTD的线性度非常好，非线性<满量程的4.5%，如**_图12-2_**所示基本符合简单的一次函数曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSfWBvrQPFb5icNdAH7rrgC9ZAKkHD3NdtFIHUlu6Snd1SkkHOf4dcmEAULjRSCQa5jmoXIYaic5IqA/640?wx_fmt=png)

**_图12-1：RTD的典型R-T曲线_**

测温电阻体具有电阻值随温度升高而线性增加的特性，特别是白金测温电阻体具有出色的线性和长期稳定性。使用温度范围广，阻值精度和TCR精度高。JIS以白金测温电阻体Pt100 （100Ω at 0°C） 作为标准，但10Ω到1kΩ范围内，还有其他变化。

#.测温电阻体对应温度变化，阻值变化成线性关系

#.使用白金、镍、铜等金属

#.白金具有出色的稳定性和线性度，适用温度范围广

在测温电阻中，作为自古以来广泛使用的温度传感器，有时也被称作Pt100，有符合JIS和国际标准的白金绕线型温度传感器。此产品使用白金线，所以价格很贵，但是它的耐环境性，长期稳定性好，符合国际规定的计算公式和温度-阻值换算表。**_图12-2_**展示了几种RTD的形态：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKY6fQBRDTGAqJsgUOaEiaBONUzMibn3B31VN8Wfj697ctjZtZUhO2ichuQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTRdL2e2OQggTvGZI9YuYQKDMCHOZtSNQ2IggOrQxM2QEkJibPLeC1knTbGzoISztvNk5ca1E4z9xA/640?wx_fmt=png)

**_图12-2：RTD的几种常见形态_**

_€2.RTD的特征_

RTD的线性精度高，例如Pt100的温度公差，等级A：±(0.15+0.002 |t| )℃，等级B：±(0.3+0.005 |t| )℃。根据Pt100等进行规格标准化，阻值和T.C.R.的种类很少，前提是均在自身发热低的条件下使用。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSfWBvrQPFb5icNdAH7rrgC9A1QMKeAubgBahicTqibupicYzCS1UP0kLYV7NDLYx3ice6eaeQj2DnpWVw/640?wx_fmt=png)

**_图12-3：比值-环温线_**

_€3.RTD的R-T计算式_

RTD的表示方法：常用的表示方法为PT100，即表示0℃时100Ω的阻值。RTD的电阻-温度曲线方程用卡伦达尔-范杜森系数表示：  

T＜0℃：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TT0QvaOL637iarZsZXXc5snNs8coZslqUVuEW8Rlx0A9NFIjK5EvdYFK15RFISWLY21hM0b9ibJib0IA/640?wx_fmt=png)

T≥0℃：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TT0QvaOL637iarZsZXXc5snNYHnd9NzjhCuLGyiar912TlicCFZibuliaUvsRQrib4g1FFU1LbGc0iaichr5w/640?wx_fmt=png)

其中：

RRTD=RTD在温度范围内的电阻（–200°C<T<850°C）

R0=100Ω（PT-100），1000Ω（PT-1000）

A0、B0、C0=卡伦达尔·范杜森系数

T=温度，单位为摄氏度（°C）

RTD的温度-阻值曲线方程用卡伦达尔-范杜森系数表示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TT0QvaOL637iarZsZXXc5snNduQb5bicNG8bty9l5OuRauBoAajwq334Ocvv5V6ILNwibVSXYhWyGWbw/640?wx_fmt=png)

其中：  

RRTD=RTD在温度范围内的电阻（T≥0°C）

R0=100Ω（PT-100），1000Ω（PT-1000）

A0、B0、C0=卡伦达尔·范杜森系数

T=温度，单位为摄氏度（°C）