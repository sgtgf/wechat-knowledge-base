# 高速PCB设计的七个注意事项

原创 硬件笔记本 2021-08-30 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/W4J0DTC8LsbYog9JoWiMgw](https://mp.weixin.qq.com/s/W4J0DTC8LsbYog9JoWiMgw)

学习高速电路设计，需要注意以下七个注意事项。

  

1、电源布局走线相关

2、走线的弯曲方式

3、信号的接近度

4、走线stubs

5、阻抗不连续

6、差分信号

7、等长

  

**一、电源布局走线相关**

  

数字电路很多时候需要的电流是不连续的，所以对一些高速器件就会产生浪涌电流。如果电源走线很长，则由于浪涌电流的存在进而会导致高频噪声，而此高频噪声会引入到其他信号中去。而在高速电路中必然会存在寄生电感和寄生电阻以及寄生电容，因此该高频噪声最终会耦合到其他电路当中，而由于寄生电感的存在也会导致走线可以承受的最大浪涌电流的能力下降，进而导致有部分压降，有可能会使电路失能。

  

所以在数字器件前面加上旁路电容就显得尤为重要。电容越大，其在传输能量上是受限于传输速率的，所以一般会结合一个大电容和一个小电容一起，来满足全频率范围内。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfT5lqXGFFBuWIgnd1jpiaqr3g5wwPiaiabs8ox4Keibqmhzrr8R80mkDfZnw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTCK42iczL7NTiaAcgSnr7vNQl2ic7DUibz97icv0XIgLPYfY3efLQCZribDLw/640?wx_fmt=png)

  

避免热点产生：信号过孔会在电源层和底层产生voids。所以不合理的放置过孔很有可能会使电源或者地平面某些区域的电流密度增加。而这些电流密度增加的地方我们称之为热点。

  

所以，我们在设置过孔的时候要极力避免这种情况发生，以免平面被割裂，最终导致EMC的问题产生。通常最好的避免热点的办法就是网状式的放置过孔，如此电流密度均匀，同时平面不会隔离，回流路径就不会过长，也就不会产生EMC的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTAiaqnvYxInrUwOEejj1LKd2janfsIN2fEIsMhUKiaib9fQ0NRE927JCNQ/640?wx_fmt=png)

  

  

**二、走线的弯曲方式**

在布高速信号线时，信号线应尽量避免弯曲。如果不得不弯曲走线，则不要锐角或者直角走线，而是应该用钝角走线。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTupR6IddIejCbf5UK7wKiaCLianKx92Er06mZ9xaI8epGSqeyrrw0qibCw/640?wx_fmt=png)

  

在布高速信号线时，我们经常通过走蛇形线来实现等长，同样的蛇形线其实也是一种走线的弯曲。线宽，间距，以及弯曲方式都应该做合理的选择，间距应满足4W/1.5W规则的。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTIdH2DZlxGbgicsImHHoux03FFLZnH7ImT7BJWQX2B9g9xMPKgicuWQKw/640?wx_fmt=png)

  

  

**三、信号的接近度**

  

高速信号线之间如果距离太近，很容易产生串扰。有些时候，因为布局、板框尺寸等原因，导致我们在布高速信号线之间的距离超过了我们的最低要求距离，那我们只能在靠近其瓶颈的地方尽量加大高速信号线之间的距离。其实如果空间足够容许，则尽量加大两高速信号线之间的距离。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTH15zzFLpqeuia8wygYnaGbalwzEIvfB9jJ2yvQ5DrwUOLibvb6bpKHvQ/640?wx_fmt=png)

  

  

**四、走线stubs**

  

长的stub线就相当于一个天线，处理不当会产生很严重的EMC的问题。同时stub线也会造成反射，降低信号的完整度。通常在高速信号线上面添加上拉或者下拉电阻的时候，会最容易产生stub线，而一般处理stub可以菊花走线。根据经验可知，如果stub线的长度大于1/10波长就可以当做一个天线了，此时就会成为一个问题。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfT2JcBajLLTL9gXUKqzS9fkRXksQtvvWFBLib94WyFVohIpuY1V3icl5fA/640?wx_fmt=png)

  

  

**五、阻抗不连续**

走线的阻抗值一般取决于其线宽以及该走线与参考平面之间的距离。走线越宽，其阻抗越小。而在一些接口端子和器件的焊盘，其原理同样适用。当一个接口端子的焊盘和一根高速信号线连接时，如果此时焊盘特别大，而高速信号线特别窄，大焊盘则阻抗小，而窄的走线必然是大阻抗，在这种情况下就会出现阻抗不连续，阻抗不连续就会产生信号反射。所以一般为了解决这个问题，都是在接口端子或者器件的大焊盘下面放置一个禁布铜皮,同时在另外一层放置该焊盘的参考平面，进而加大阻抗，使阻抗连续。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfT1DXZibwO6Z6zU9U5Adbs4bcEiaSZAs3s501oIia2DPALiaLc9wowXoFIEw/640?wx_fmt=png)

  

过孔是另外一种会产生阻抗不连续的源头。为了最小化这种效应，在内层和过孔连接的不需要的铜皮应该去除。而这样的操作其实可以在设计的时候通过CAD工具来消除或者联系沟通PCB加工产假来消除不需要的铜皮，保证阻抗的连续性。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfT8BQQNU5w8KYa8gVe3UguBegibINopb7Uoz6bqnsXJpyBm14bHqN9UGA/640?wx_fmt=png)

  

  

**六、差分信号**

高速差分信号线我们必须保证等宽、等间距来实现特定的差分阻抗值。所以在布差分信号线的时候尽量保证对称。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTf8JzDQdJ6N5HFBRuwPIMcRlSsg0c8gqjiaMK1NcMvEYA2tITNQvV4hA/640?wx_fmt=png)

  

在差分线对内禁止布置过孔或者元器件，如果在差分线对内放置了过孔或者器件会产生EMC问题同时也会导致阻抗不连续。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTWEzKkryScCj3iaB48ZFb2wIARtQoXb37sNqJibfXuAyfrk3NeCUSeExg/640?wx_fmt=png)

  

有时候，一些高速差分信号线需要串接耦合电容。该耦合电容同样需要对称布置，同时该耦合电容的封装不能过大，推荐使用0402,0603也可以接受，0805以上的电容或者并排电容最好不要使用。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTlsgUGJ9r8M4DqQzjrlDsrDAGcOGYiaOic9t9TicUibC2p4Q0tqNHkKgcOw/640?wx_fmt=png)

  

通常，过孔会产生巨大的阻抗不连续，所以对于高速差分信号线对则尽量减少过孔，如果要使用过孔则对称布置。

  

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTw1FQybEoBlicuiaoI7P3iclIJxAcA06cTicx6WIrvEDzQ3P0nDDa2lkm2A/640?wx_fmt=png)

  

  

**七、等长**

在一些高速信号接口，一般如总线等需要考虑其个信号线之间的到达时间以及时滞误差。例如，在一组高速平行总线中的所以数据信号线其到达时间，必须保证在一定的时滞误差以内，从来来保证其建立时间和保持时间的一致性。为了满足这一需求，我们必须要考虑等长。

  

而高速差分信号线对两信号线必须保证严格的时滞，否则很有可能通讯失败。故为了满足这一要求，可以通过蛇形线来实现等长，进而满足时滞要求。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTQEB67GN7zFXYR9icrC1U2b2kRgsJf8gvnibqypxdibZ50UnqkGBfckCuw/640?wx_fmt=png)

  

蛇形线一般应该布置在失长的源头处，而不是远端。在源头处才能保证差分线的正负端的信号在大部分时间内都是同步传输的。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfT4WrsbIMWl4o5vtxGyUWG7WpgqecFibXxvCyOTCvGZhYoFsINrjicwM6w/640?wx_fmt=png)

  

走线弯曲处是产生失长的源头之一。对于走线弯曲处，其实现等长的应靠近弯曲处(<=15mm)

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTMWe0kiaRVt3gYGW6TicAB1Xahl1ZYMCdpDP5OQ0ISib6Z4UuONKugMbWA/640?wx_fmt=png)

如果有两个走线弯曲，且两者之间的距离<15mm，故此时两者的失长会互相补偿，故此时不用再做等长处理。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTvG5N7H5bxJguA177J1T4srzMcFwNqZ9X0o9CgmR2YgEtr8P4wv5Edw/640?wx_fmt=png)

  

对于不同部分的高速差分信号线，应分别独立等长。过孔，串接耦合电容以及接口端子都会是高速差分信号线分成两部分，所以这个时候要特别注意。一定要分别等长。因为很多EDA软件在DRC的时候都只关注整个走线是否失长。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTNlqHPuYGhu5UVMko1ic2xltoeN56ZDDLgcQwqCdvjcbIFrspURQQjWw/640?wx_fmt=png)

  

对于如LVDS显示器件等接口，会同时存在数对差分对，且差分对之间的时序要求一般都会特别严格，时滞要求特别小，所以，对于此类差分信号对我们要求一般在同一平面内进行补偿。因为不同层的信号传输速度是不同的。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTla98LJ9v80yvCIU10aVpdxfoCI9R0OsOAuHJOBJEKaCWe9EuRtNv0A/640?wx_fmt=png)

  

有些EDA软件在计算走线长度时，会将焊盘内部的走线也会计算在长度之内，如果此时进行长度补偿，最终实际结果会失长。所以此时要特别注意，在使用一些EDA的软件的时候。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTDVbic6WT5EicQ9kXPruaibAdqicZsOUIBmIzE0NQ9ibW1dq9SApHYs11gCw/640?wx_fmt=png)

  

在任何时候，如果可以就一定选择对称出线进而避免需要最终为了等长而进行蛇形走线。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTooLr7PFjnBFCYSSicRxf1Z2oLkUPib5gdZJmqZV85peicaTHwo8G75Ggw/640?wx_fmt=png)

  

如果空间容许，尽量在短的差分线源头处加一个小的回环来实现补偿，而不是通过蛇形线来补偿。

![](https://mmbiz.qpic.cn/mmbiz_png/4icyRNr5vPb1QibMaHhAUD2ibicu8VV73VfTHp4yp20a0kGapTHcNP9IYrgQFcPiaqIPkuAUXmI4Nor0ohU3VEsxLBw/640?wx_fmt=png)

  

声明：文章转自网络，侵删。