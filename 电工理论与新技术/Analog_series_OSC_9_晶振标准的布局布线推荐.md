# Analog series-OSC-9：晶振标准的布局布线推荐


> 原文地址: [https://mp.weixin.qq.com/s/RH9sWjHxX-8iH8qRKNv0gw](https://mp.weixin.qq.com/s/RH9sWjHxX-8iH8qRKNv0gw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjF4ay5p8vA9rEv8CnoLMBWxcVXRNvfuAFm87G9QopsmBOrWfa96AGKfG6iaL4bdugLK1Tpthg2ibA/640?wx_fmt=png)

_______**_______**★★★**_______**_____OSC-9---晶振的Layout_____**_______**★★★**_______**_______

引言：晶振内部结构比较复杂，如果连接不妥当或者布线错误，就会影响晶振不起振或者EMC测试fail，从而导致产品不能使用。因此晶振电路的PCB设计非常重要，本节主要简述无源/有源晶振的布局布线要点。

____€1.布局____

_1#：主体位置_

晶振内部是石英晶体，如果不慎掉落或受不明撞击，石英晶体易断裂破损，所以晶振的放置远离板边，靠近MCU/SOC的位置布局。为了安全考虑，板卡的地和金属外壳或者机械结构常常是连在一起的，如果晶振布在板卡的边缘，晶振与参考接地板会形成电场分布，而板卡的边缘常常是有很多线缆，当线缆穿过晶振和参考接地板的电场，线缆会被干扰。而晶振布在离边缘远的地方，晶振与参考接地板的电场分布被PCB板的GND分割，分布到参考接地板电场大大减小了。

_2#：电容位置_

有源晶振的去耦电容应尽量靠近晶振的电源管脚，如果多个耦合电容，按照电源流入方向，依次容值从大到小摆放。无源晶振的负载电容靠近晶振本体，减少寄生电容的影响。

_3#：独立性_

尽可能保证晶振周围的没有其他元件，建议这个距离为300mil，约为7.6mm，实际4-5mm左右也可以接受，防止器件之间的互相干扰，影响时钟和其他信号的质量，

________€2.____布线____

_1#：走线短_

在电路系统中，高速时钟信号线优先级最高，一般在布线时，需要优先考虑系统的主时钟信号线。时钟线是敏感信号，频率越高，要求走线尽量短，保证信号的失真度最小，与其它信号需20mil间距，最好使用Ground trace与其他信号隔离，避免时钟线干扰其他信号。

_2#：外壳接地_

晶振的外壳必须要接地，除了防止晶振向外辐射，也可以屏蔽外来的干扰。

_3#：晶振底下铺地_

晶振铺地可以防止干扰其他层，不满足铺地也需要粗走线包裹。

_4#：晶振底下不要布线_

晶振周围5mm的范围内不要布线和其他元器件，主要是防止晶振干扰其他布线和器件。底下尽量不要走线，一定要走线的话，不能走线进晶振pin脚周围50mil之内，尤其避免高速信号。

_5#：有源晶振输出不能接长线_

时钟源通常是系统中最严重的EMI辐射源，频率高，是高速电路，时钟上升沿陡高速频谱含量越多，如果接长线，其结果是长线就成了天线，这在很多应用中是不允许的，所有时钟源都必须尽量靠近相关器件，必要时用多个时钟源，不得以下可以采用多层PCB将时钟连线屏蔽。有源晶振的输出一般是标准TTL规格，至于能驱动多少芯片要看这些芯片的特性。关于晶振的选择，如果你的系统能工作在25M，就尽量不要选50M的晶振。

_6#：过孔_

晶振信号线尽可能不穿孔，因为一个过孔会有大约0.5pF的寄生电容，走线粗细要一致。

________________€3.________保护器件________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRzyB1lkOXpDWDzhOibFribPicvSIEylKsb3LcnFW2PYsn9iaJg1PSiccLOVzLXbnWJJZGkl11iajTvIU9A/640?wx_fmt=png)

**_图9-1：晶振增加ESD保护器件_**  

当使用ESD保护器件时，需要器件的寄生电容考虑在内合并计算CL，以最大限度地降低更高频带信号的衰减和频率偏移。

________________€4.无源晶振Layout示例________________

顶层：**_图9-2_**所示，晶振顶层的最好策略是铺铜包地（如果有的话也可以连接其他大面积GND铜皮，也可以独立GND铜皮），效果比走线包地效果更佳。铺铜之后，打上过孔阵列，与其它层的铜皮进行良好连接，形成一个密集的GND三维多层法拉第笼。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRzyB1lkOXpDWDzhOibFribPicLOuK8QiciapiachUanG1Le5uqWcLtOicCadiaOUMWTG0LYOZeeicVs2lAwBQ/640?wx_fmt=png)

**_图9-2：无源晶振顶层走线范例_**  

中间层和底层：因为晶振底下的投射区域不能走线，不包括GND层和POWER层（GND层完整覆盖，POWER层也完整覆盖，不用挖空），所以就将投射区域的GND过孔用铜皮连接成shape，其他层也类似如**_图9-3_**处理。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uAjFbLsM4nBrQoWnCKuwiau7tia02oe9fOd8UT0niaXqBDEYe1puYdjQQA/640?wx_fmt=png)

**_图9-3：无源晶振中间层/底层范例_**

________________€5.有________________源晶振Layout示例________________________________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTNp8zxlmrzWGb7b0tMLLzZao0npoJZoWMfjXAiaInBODUSol2p8Ic8WThlaIItpzAQibw0HT4ibyblA/640?wx_fmt=png)

**_图9-4：有源晶振电路_**

顶层：如**_图9-5_**，去耦电容靠近晶振的电源管脚，有源晶振同样建议使用铜皮GND包裹策略，时钟信号直连，尽量不要过孔换层。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRzyB1lkOXpDWDzhOibFribPicfxfAGvhvia4MKfFazwtQ0GEGTQeXr6tGaC6Q1gnYZuVzTaibdgpdCjUw/640?wx_fmt=png)**_图9-5：有源晶振顶层走线范例_**

中间层和底层：GND铜皮覆盖投射区域，过孔立体连通。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uaGqiaIoib305tibMgOx3qEBUyBKk1non6h6ftOCuh4Sf8p3QZialWeoJcg/640?wx_fmt=png)

**_图9-6：有源晶振中间层/底层范例_**