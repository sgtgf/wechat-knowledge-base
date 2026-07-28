# Power Path-11：安全驱动感性负载


> 原文地址: [https://mp.weixin.qq.com/s/0tn9vG49JDj0a4zIozXu3A](https://mp.weixin.qq.com/s/0tn9vG49JDj0a4zIozXu3A)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhChLzjIPEb9Tb0gQpk78h0BibyAmU4o6QTLK7Tg8n59NicoRvFKvo6ibkMA/640?wx_fmt=png)

____**____**____**____**★★★**____**____**____**______________PPS-11---驱动感性负载__________**____**____**____**★★★**____**____**____**

引言：感性负载是继电器、螺线管、电动机，甚至是通过长电缆连接的负载，它们的阻抗由串联的电阻（R）和电感（L）组成。R值决定稳态电流，L值决定存储的磁能，电感器中储存的磁能如果没有正确耗散，可能会导致系统或组件级别的损坏。

继电器或螺线管中的磁性触点的打开或关闭需要存储或耗散磁能，在电动机的情况中，这种储存的磁能量对于机械旋转是必要的。感性负载持续通电和断电，用于断开或闭合触点（继电器和螺线管）和旋转或空转（电动机）。将感性负载从通电状态断开会产生高压尖峰，从而导致系统损坏，所以安全地断开感性负载的电源需要使用适当的钳位电路。

_____________________________________€1._________________________概述____________

遇到感性负载时，必须考虑存储的能量，因为如果管理不当，这些能量可能会损坏系统中的组件，在驱动感性负载时，需要考虑两种状态：

1#：将感性负载通电或连接到电压源，如电池。

2#：断电或断开感性负载与电压源的连接。

在某些情况下，集成开关可以集成电压钳。

在通电状态下，开关驱动稳态负载电流，电感存储的磁能等于L值的一半和负载电流的平方。在断电状态下，电流从稳态值衰减到零，与电流斜率成比例的电压尖峰出现在开关两端。电压尖峰必须受到限制，并安全地消耗存储的能量，否则可能会损坏系统。

本节的重点是计算电感负载参数，以优化驱动电路的性能，对于高压侧和低压侧开关，通电和断电机制是相同的。

_____________€2._______感性荷载的机理______

感性负载两端的电压与时间有关，等式1计算选择可靠驱动电路所需的电感负载参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WicWTTXBy97RSQAqlZKBiaWZbwOAWmu32OAHQK9yhYMGaiccWb2bpHKKHQ/640?wx_fmt=png)

方程1表明，当由于电流的突然变化（dI（t）/dt分量）而断开电感负载时，可能会出现过电压尖峰，该过电压尖峰的大小是可能导致器件损坏的因素。

_驱动感性负载_

感性负载在连接到电压源时通电，电流以指数方式上升到稳态值，磁能存储在线圈中，**_图11-1_**描述了这个过程，使用高侧开关来驱动负载。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCeGxQpm8UsyMgljAibZaQoEF9OjJR6GPZHjhxr0lM5oUNhfyRXtdzodPA/640?wx_fmt=png)

**_图11-1：驱动感性负载波形_**

当对电阻-电感（RL）电路中的电感负载通电时，电压回路为一阶微分方程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WCgmy0JRRdwJTu3FrekV7mBCoRnLgXfL8SSWFuM3Azib8T5iawhUTlquw/640?wx_fmt=png)

求解方程2可以得到瞬时感应负载电流，可以使用公式3计算重要的电路参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0Wa9OcovOGgsicxIeZLaCff9Pt3daLalSpk48vzkzZgkDRxEc7ib0kNrMg/640?wx_fmt=png)

这一阶段的关键是选择一种能够承载稳态负载电流并将结温保持在热关断温度以下的开关。最好的开关选项包括低压差，就像低导通电阻开关一样。**_表11-1_**显示了方程1引入的参数及其对系统的影响。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia1FyoQga3m5oicib2cvR30OhQVIvgFWPbKb2mA1kc66l10ZFKo6Rmu6DA/640?wx_fmt=png&from=appmsg)

**_表11-1：驱动感性负荷的计算参数_**

_从电压源上断开感应负载_

感性负载两端的电压由等式4表示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WFc1BR0UdT3lK8OpYaJUPSmoPCRWSVE9ESOrWaZNGPQ9O8giaphib07sQ/640?wx_fmt=png)

当电流从VBAT/R变为零时，电流的突然变化（dI（t）/dt）引起非常高的电压。将感性负载与电压源断开会在电感器上产生巨大的负电压尖峰，如**_图11-2_**所示。电压尖峰将出现在开关两端，并且远高于开关的额定击穿电压，添加适当的电压钳位可以避免电压尖峰造成严重损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCehQC7XHoO4sJboj17WH3XPMvQMjm6DgK6ItMoCmV9hFfRx3WWPytTlQ/640?wx_fmt=png)

**_图11-2：电感负载与电压源断开的波形，带箝位（青色）和不带箝位（红色）_**

**_图11-2_**显示了在通过高压侧开关断开通电感性负载的情况下的预期波形，无论系统中是否存在钳位。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia8rpZuM9sUYGMRjur2FtPJh2cyMqgTqicUhstgdjXGfOwtsULiaRW0Grw/640?wx_fmt=png&from=appmsg)

**_表11-2：带和不带箝位开关感应负载引起的电压电平_**

**_表11-2_**显示了在开关两端实现箝位电压的有效性，该箝位器将电流斜率从250mA/10us降低到250mA/419us，并安全地消耗3.125mJ的存储能量，如果没有箝位，2512V的电压尖峰很容易损坏开关。

_________________________€3._________________安全断开感性负载________

在将感性负载从电压源断开时，有三种方法可以安全地断开其电源：

1#：在开关上使用一个钳位。

2#：在感性负载上使用箝位和阻断二极管。

3#：在感性负载上使用续流二极管。

在所有三种方法中，主要目标是将开关两端的电压保持在击穿水平以下，并安全地耗散电感负载中存储的能量。对于箝位电路，方程5基于一阶微分方程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0W4DtkH70uicOb9gwrej7l4UP0B8KpCkLtq0u5SFkj3MuGWCu5iblg3nkw/640?wx_fmt=png)

其中K是取决于每个电路中的箝位方法的常数，下面介绍这三种方法。

_在开关上使用箝位_

在开关上使用箝位是最有效的方法，可以覆盖大多数感性负载，该箝位功能集成在汽车和工业系统中使用的大多数智能高侧开关IC中。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCe2pJa6YpQV3UYr3jcjgianYSqrjHRpOnFGibQqNb59RfC475OZeTjuhkA/640?wx_fmt=png)

**_图11-3：使用开关两端的瞬态电压抑制（TVS）箝位使电感负载断电_**

**_图11-3_**显示了在开关两端使用箝位时感性负载的断电情况，求解方程5，其中K表示**_图11-3_**所示电路的箝位方法，得到方程6：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WIBSF3u2kxPuEd4GwnbfgXx11XqSF5ZSJHyuqve5VZ21CSibG1KwT3aA/640?wx_fmt=png)

下面列出了公式6中的计算参数，同时也是选择开关和跨开关箝位所需的参数。

初始电流：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaZFPeicVR23jq5aSRiaPWtibdn3zscFozQpms7yAKpANROqGLory69gyxg/640?wx_fmt=png&from=appmsg)

存储的磁能：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaIicFV4Cic1Ybs1T0mtrPIo291VLkxFiaLuj75aljFZh0OLukLrPngbxrQ/640?wx_fmt=png&from=appmsg)  

退磁时间：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiavyiagCGygLf5HT0N2fxbRDOL4neFUj0ZoiarTyrswY5COnQSNqzFa8sQ/640?wx_fmt=png&from=appmsg)  

TVS耗散的能量：![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaIViblzcHe01ZxFM36hoiaHqdopjpiboiaUdtfh8ZoiaNPN0myupssATKafg/640?wx_fmt=png&from=appmsg)

当VCLAMP > 3×VBAT时，简化公式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaTGr6ibeOVpe7xUzIYNErYACH5vpX1kwFY9tBoeOYcs5Kw121V5rsnog/640?wx_fmt=png&from=appmsg)

_在负载上使用箝位和阻断二极管_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCetPqNnIOq5M3eIIre8J4kRThbXRvlZcnpA4RichFlf7oQZrV3BJrmufw/640?wx_fmt=png)

**_图11-4：使用跨负载的TVS箝位使感应负载断电_**

**_图11-4_**显示了在负载上放置箝位和阻断二极管的配置，再次将阻断二极管的箝位电压和正向电压代入等式5，生成等式7：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0W2X8LvOxZDhcV794uCRmZkr1VrxZpUHkUt8jibhe0odbwSURlYzmBUMg/640?wx_fmt=png)

下面列出了公式7中的计算参数，同时也是选择跨负载箝位和阻断二极管所需的参数，串联二极管是在导通状态下防止电流在外部TVS中流动。

初始电流：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaZFPeicVR23jq5aSRiaPWtibdn3zscFozQpms7yAKpANROqGLory69gyxg/640?wx_fmt=png&from=appmsg)

存储的磁能：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaIicFV4Cic1Ybs1T0mtrPIo291VLkxFiaLuj75aljFZh0OLukLrPngbxrQ/640?wx_fmt=png&from=appmsg)  

退磁时间：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia19rvUiakzjdvyzD8y0icMibSichibtxmkBpo1c2WcsVByZShWN2sdrUEJicA/640?wx_fmt=png&from=appmsg)

TVS耗散的能量：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia5d8oFhQucwcAyRSfcF59cEIZxDRLomSOXIVBFCC7TU97HXoFo8OMoQ/640?wx_fmt=png&from=appmsg)

当VCLAMP > 2×VBAT时，简化公式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia8iaNlb4iahFEh1naIX7ibQt7QIKA62QQyhpib0w7uj6sYfTGmtzBp9scow/640?wx_fmt=png&from=appmsg)  

_在负载上使用续流二极管_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRIchBSgrN5OjUBGatxVHCeRKKiazJ5Jo3ITFIPGH94VcZFNvYklaNwIqgwq7PqAggIGeEXic18KZvw/640?wx_fmt=png)

**_图11-5：使用负载两端的续流二极管使电感负载断电_**

**_图11-5_**显示了在负载两端使用续流二极管的配置，使用等式5并替换K，等式8生成该去激励方法的表达式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WHEUSN4tfpkX85kwoUGOuMCia7CP4ntVKXnicQxOAQHBz80azqzTicurlw/640?wx_fmt=png)

下面列出了公式8中的计算参数，同时也是选择开关和续流二极管所需的参数。  

退磁时间：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaCSN8lPzr2Vb6TpiaZWHicb3Op7FYP8ibY23n0Nia1f7f5RT6qKNfbmsR1A/640?wx_fmt=png&from=appmsg)

二极管耗散的能量：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaf6k62nv6icQ9Zibtplr3pfz0SWYiaA33Qbs7zGm4Nzx3IdribvnEsy3licQ/640?wx_fmt=png&from=appmsg)

简化公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaqmiblmfMcjFLDXxic6Byf3t9fwbaFSNJsDriczpavtPvHWqK3iaBRtOeiaw/640?wx_fmt=png&from=appmsg)

________________________€4.________________方法的利与弊________  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQhcQcQzmvTsASicTH62libVZRY9w1dhyVLk5BZR58kAuqBFVibuvJB4gEHUDq454ZN5sUg45JRAZnjg/640?wx_fmt=png&from=appmsg)

**_表11-3：三种夹紧方法的优缺点_**

**_表11-3_**总结了安全断开感性负载电源的所有三种方法。如前所述，开关两端的箝位功能集成在智能高端开关中，在大多数情况下，智能高侧开关具有耗散磁能的能力。但是在一些应用中，集成箝位器不能耗散磁能，因此需要诸如TVS二极管的外部箝位器。当使用外部TVS二极管时，其箝位电压应低于集成箝位的下限减去电池电压，如方程9所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WYUtp8sZqQolmVibh43CAbUX6RiaibOVk5N1CQYQQ9MhCQKbr6lqjADuMg/640?wx_fmt=png)

**_表11-4_**总结了智能高侧和低侧开关的重要参数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia6mEPlRQaILI0ZRWBjorcSicGh7OsQplqLy7PjKkY18bKQCFJLHXfLNA/640?wx_fmt=png&from=appmsg)

**_表11-4：驱动感应负载的重要参数_**

________________________€5.________________结论________

感性负载可以由高压侧或低压侧开关驱动，高压侧开关的优点是具有防止对地短路的能力和负载诊断的灵活性。使用智能高侧开关，必须计算感性负载参数，并将其与设备的导通电阻和消磁能量能力进行比较。如果开关的集成箝位功能能够耗散消磁能量，则不需要外部箝位，如果箝位器不能耗散能量，将需要一个外部箝位器、TVS二极管或续流二极管。