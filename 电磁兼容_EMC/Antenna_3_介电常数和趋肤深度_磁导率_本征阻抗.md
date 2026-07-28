# Antenna-3：介电常数和趋肤深度、磁导率、本征阻抗


> 原文地址: [https://mp.weixin.qq.com/s/Jvw9VD7lGVgTJlhCBlyfiA](https://mp.weixin.qq.com/s/Jvw9VD7lGVgTJlhCBlyfiA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSgrzygWTIy9jbFCwEGufyLaMOjuIlzgJeWAojWy5KD2hria1jBjOHKTUMBbia7eFvNK2Lo763Zib8bw/640?wx_fmt=png&from=appmsg)

____**★★★**______Antenna-3---特性常数______**★★★**____

引言：本节主要简述介电常数和趋肤深度、磁导率、本征阻抗。

___€1.___介电常数

介电常数（Dielectric Constant）是介质或空间区域的属性，它将电通量密度与电场联系起来。介电常数以F/m，法拉/米为单位，由于法拉与电容有关，因此具有较高介电常数的材料被认为可以存储更多的电能，真空的介电常数（通常称为自由空间）由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDGJD6PcygXzwgf4rPJFD4U1dIuicBC2dOx2FQVuwdhcufIN6hrEkxkgA/640?wx_fmt=png&from=appmsg)

ε0也视为是空气的介电常数，它是自然界中发现的最低介电常数。所有其他材料（包括空气）将具有（至少在某种程度上）更高的介电常数。假设有一些其他介电介质（玻璃、橡胶、蜡或其他非导电材料），介电常数则描述了介质内电场如何受到其影响。电场倾向于使材料内的分子极化，这些分子构成与施加的电场相反的净电场，因此总电场小于真空中的电场。这种效应根据介电常数进行量化--->介电常数可以是各向异性的（取决于方向）和与频率相关的。

对天线来说，介电常数会影响波通过介质的传播速度及其波长，介质的介电常数通常以相对介电常数的形式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDLA5nlv5u1UTlqv0ndYIxwibBRzqeDVMmOxF3TYz65UpcIxxmHH5uYvQ/640?wx_fmt=png&from=appmsg)

波在给定介质中的传播速度如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jD1Osy8wk7BdHVL6tWAAYtV6b07JDguhXjicQanm7SEiccjT2PJoVZkfHg/640?wx_fmt=png&from=appmsg)

C0是真空光速，μr是介质渗透率，如果介质具有εr=4，则波在介质中的传播速度将是自由空间中的一半（1.5\*10^8 m/s），由于速度减慢，平面波的波长也减小（频率保持恒定）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDSNHCuzNAhaiaIXeQB49W3TcqzNLzIiaJkicxNkicmfjOZ45yY3yuExaJQA/640?wx_fmt=png&from=appmsg)

上述特性经常用于天线小型化：由于谐振天线的尺寸通常为半波长，如果将它们放置在介电常数较高的介质中，则所需的长度会减小，因此天线会更小。

介电常数通过斯涅尔定律改变入射介质的波的行进方向，此外，从一种介质传播到另一种介质的波的反射系数和透射系数也会受到介电常数的影响。

FR4是电路板中常用的电介质，用作接地层和信号走线之间的绝缘体，测量这种材料的介电常数为3.54\*10^-11 \[F/m\]，材料内光速的减慢，以及材料内电磁波的波长相应减小。实际上只关心材料的介电常数与自由空间的介电常数之比，因此材料FR4的介电常数为4，通过相对介电常数来讨论电介质要简单得多。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEk6PXicM386mZYAfJnAljccCSxjheeznxiaqfGNc1PfxViahOAyROqibaLzg/640?wx_fmt=png&from=appmsg)

表3-1： 常见材料的介电常数

___€2.___趋肤深度

趋肤深度是衡量电流沿材料表面流动的紧密程度的指标，在直流下，电流均匀地流过导体，这表明电流密度在任何地方都是相同的。但在较高频率下，电流更倾向于沿着表面流动，从而产生表面电流，趋肤深度方程如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDbzjqDNlXujoZAMsbqhY6kTE3bmMicWQEz08xlQuKaSMGa5M9TpIFDXg/640?wx_fmt=png&from=appmsg)

在公式中：

1#：f是电流的频率

2#：ρμ是材料的电阻率（以欧姆/米为单位，这是电导率的倒数）  

3#：μ是材料的磁导率（磁性的量度）

公式中需要注意的关键点是集肤深度随着频率的增加而减小，这意味着电流在射频频率（>10MHz）仅流过导电材料表面。例如，WIFI或蓝牙频率（2.4GHz=2.4\*10^9）下铜的集肤深度约为1微米（1微米=1/1000毫米）。

图3-1是一根电流流过的铜导体，左侧是低频（即直流或0Hz）的电流分布--->电流均匀地流过导线的横截面，右侧是RF情况下的电流分布（直径小至0.1mm、频率低至10MHz的电线），显示电流仅沿表面流动，导线中心没有射频电流流动：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEk8xSIOvLyZDroBHtwlrIHeXI0Dyax8yC56KucdsxkXcqHKELc6HEw3w/640?wx_fmt=png&from=appmsg)

图3-1：表皮深度图示

电流进入导线的深度称为趋肤深度，实际上，电流密度从表面呈指数下降，因此，如果我们有一根从z=0开始的导线，则电流沿y方向流动，那么电流密度J将根据公式从表面呈指数下降：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jD8UKY99zFdlYAQPBhBZxRwuGicibZqibQO8yQknLBorIibORAnPbkR4snMQ/640?wx_fmt=png&from=appmsg)

在公式中，J\_0是材料表面的电流密度，电流随距表面距离而下降如图3-2所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkR1UdxibCHFeeVZEXVBVdVVfoib9c6hRNGhlnU75ugW0YE4h9IdnLkbwg/640?wx_fmt=png&from=appmsg)

图3-2：电流随距表面的距离而减小

___€3.___磁导率

磁导率也是是介质或空间区域的属性，磁导率将磁通密度与磁场联系起来，

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQoac1vKNibFQYtEpWj6ibSCbIHKNjqqyono1a1pTHBQDn6RpjQDLNMXgPGJwqq2cuibIH2MPI4GicqXw/640?wx_fmt=png&from=appmsg)

其中H=磁场强度、B=磁感应强度，磁导率以亨利/米，H/m为单位，由于亨利与电感有关，因此具有较高磁导率的材料被认为可以存储更多的磁能，真空（或自由空间）的磁导率由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDzI199utuibeNXFjsC1kOayGNID22Bp2fFibrBicbYxON838ibGVR1RcYXQ/640?wx_fmt=png&from=appmsg)

μr0也视为是空气的磁导率，假设有一种磁性材料（例如，铁），这种材料会影响磁场，因为构成材料的分子的磁矩会在外部磁场的方向上对齐，在外部磁场关闭后，这些磁矩也往往会保留，从而导致某些材料永磁化，介质的磁导率通常由相对磁导率指定：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDY0DkgznEDEmkicpsHajhzpI3s8Py9c5weaXJADdhLpIFTMXiaaqpwWBw/640?wx_fmt=png&from=appmsg)

材料的特点是抗磁性（相对磁导率略小于1.0）、顺磁性（相对磁导率略大于1.0）和铁磁性（相对磁导率值高，也表现出滞后），表3-2列出了常见材料及其相对磁导率：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEk5RKibc8AvCYSX1YB8kNNI0SqWbhs9qic3OYy7cUib3aIictaYmpial6WF1Q/640?wx_fmt=png&from=appmsg)

表3-2： 常见材料及其相对磁导率  

正如介电常数中提到的，磁导率还会影响电磁波在相对磁导率为μr，以及其相应的波长：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDdcCbUicvaiafO4ld0KgCeSKfk37jwGODRHgp23aFojtyVtzMLMdXOazg/640?wx_fmt=png&from=appmsg)

c是波在介质中的传播速度，并且c0是自由空间（或真空）中的光速，λ也是介质中频率f的波的波长，则真空中相同频率的波长为λ0。

___€4.___本征阻抗

本征阻抗是空间区域介质的属性，对于真空（外层空间）或波在地球周围空气中传播，本征阻抗（通常写为η或Z） 由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDGJOr18fldVygSLr1QqeyNNwHOe8Lp1IOog0mR5FBuk62twkj36enbw/640?wx_fmt=png&from=appmsg)

该参数是无损介质（零电导率）中平面波的电场大小与H场大小之比：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDHzjF2LibaibxiboQVApHFlBuZwwwP5CQRsiat5QicPLjib2NXUkq7c8IWKZQ/640?wx_fmt=png&from=appmsg)

这种关系可以直接从麦克斯韦方程组推导出来，对于介电常数和磁导率为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jD26SrWkVRicgGyJ1aiaqIiahHhI8HicmAdq7Kv97EtOHEf1us2UjN3NppAg/640?wx_fmt=png&from=appmsg)

本征阻抗由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDVj7K0MvlyNLq0q9ia9JEjYa3tfRUnzca77ykwaehbQM5EwZRAl3SJmg/640?wx_fmt=png&from=appmsg)

对于具有导电率的介质σ与之相关的本征阻抗由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQl4mib6g9CicSJK66C8sia3jDkLjxYgtic26syWkibdhamdmOP1K8jZ9LiaGwlg0tYWZTfiaeVSSZSkucpw/640?wx_fmt=png&from=appmsg)

当电导率为非零时，上述本征阻抗为复数，表明电场和磁场不同相，自由空间的固有阻抗与天线的电阻抗无关，因此不需要使天线的阻抗与自由空间的固有阻抗匹配（不会发生失配损耗）。