# EMC-9：如何使用共模滤波器从后级应对开关电源噪声


> 原文地址: [https://mp.weixin.qq.com/s/NO3K\_1oc1F\_g809YsBWIJw](https://mp.weixin.qq.com/s/NO3K_1oc1F_g809YsBWIJw)

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSgfWB8HTEZWSlLytVhHkTvADcLmJqTT6rSA79HiaZcuSID4ibIynDl3875UFpOd75vbRlrlgdokxFw/640?wx_fmt=png)___

____**★★★**______EMC-9---开关电源噪声的应对______**★★★**____

引言：在使用电容、电感、磁珠之后，实际上电源用共模电感也是开关电源后级降噪特别有效的器件，虽然有效，但是受限于价格和体积，电源方面使用不算特别广泛，即使如此，对关键部分的供电仍建议预留电源用共模电感的位置。

_____€1.电感的频率特性_____

从严格意义上讲，共模滤波器并不是电感器，而是磁性器件，是降噪中的重要部件。如**_图9-1_**所示共模滤波器的结构是两个绕组绕在一个磁芯上，相当于两个电感组合在一起。当绕组中流过电流时，磁芯产生磁通，针对急剧的电流变化，起到使共模电流不易流通（扼流）的作用，从而消除共模噪声，这与电感的自感作用相同。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1OrPt8uxYEdrcyia9hND8SQmQkJeCQ0z6Vd8ohYmvUMK8l86l7TT3rYUA/640?wx_fmt=png)

**_图9-1：共模滤波器的结构示意图_**

共模滤波器可以基本上实现“共模电流不流通、差模电流流通”的作用，如**_图9-2_**，关键在于这两根导线沿同一方向绕在一个磁芯上。差模电流是在两根导线上往复流动，因此磁芯产生的磁通方向相反，磁通抵消，不能起到扼流作用，而是直接通过。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1O2iaS6O2lm1ez2MuHnloib2n6EdfOmT0S1JSwMcY1QLS0PdySYibG0sibuw/640?wx_fmt=jpeg)

**_图9-2：共模/差模电流与磁通_**

相比之下，共模电流的流向相同，因此磁通量增强，电流不易流过，也就是说，共模电流＝共模噪声难以通过，从而被滤除，下**_图9-3_**是作为开关电源的输入滤波器使用的示例。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1Oze6h4gqziaRxG3PdpsIj0jRkzjSFHlPoicsjeZ4Tbps4hsFeia8tfBYwQ/640?wx_fmt=png)

**_图9-3：开关电源的输入滤波器示例_**

将共模滤波器插入电源输入线路中，如**_图9-3_**所示，与用于信号线的共模滤波器相比，用于电源线的共模滤波器使用差模阻抗较大的分裂绕组结构。这些产品一般作为电源线用共模滤波器，其差模噪声消减效果优异。但是，由于几百k～几MHz 左右的差模阻抗非常低，因此一般与𝜋型滤波器等差模噪声用的滤波器并用，共模滤波器对于消除共模噪声来说是必不可少的配置。

_______€2.LC滤波器布局_______

当使用电感或铁氧体磁珠组成滤波器时，某些部件配置和PCB布线布局，不仅不能获得足够的噪声去除效果，反而还可能导致噪声耦合，使情况更加恶化。

_串扰_

串扰是因电路板布线间的杂散电容和互感，噪声与相邻的其他电路板布线耦合（传送门：[EMC-3：噪声的传输和放大](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492022&idx=1&sn=6710559a799bd27c4dcbd38d3f55f172&chksm=c336ab29f441223ff9822267f241ede07b9a21afe7c591d1788117e74acdaeb286d133ee02bc&scene=21#wechat_redirect)），有些PCB板布线布局，会因串扰而导致滤波效果下降，下**_图9-4_**是LC滤波器的图形布局和部件配置带来的串扰。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRDD7QAmjfnGGT4xVqB5ibAUqzpEkowJ719icVfRwDSicU8ls6FyI3iadsDxwmKjgp3bPoAqx4oXXkNkQ/640?wx_fmt=png)

**_图9-4：不正确的LC滤波器布局_**

在**_图9-4_**的布局示例中，Vin线路中有LC滤波器，滤波器后的布线与含有滤波器前的噪声的布线相邻，因此噪声因串扰而耦合，滤波效果下降。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRDD7QAmjfnGGT4xVqB5ibAUTlauqbNgaJcHapibuTz0HwsVSIt86A3iatwm85wgdsvtb3uCs6aa8L3g/640?wx_fmt=png)

**_图9-5：建议的LC滤波器布局_**  

**_图9-5_**为建议的布局样式，采用不与含有噪声的线路相邻的布局，从而可将噪声耦合控制在最低限度内。（串扰的影响使滤波器的效果减小，布局要能够发挥滤波器的效果）

_地线反弹噪声_

从**_图9-4_**的示例中可以看出，在组成𝜋型滤波器的电感前后所配置的电容器，其某些接地方式可能会带来地线反弹噪声。在**_图9-6_**示例，如箭头所示，来自接地线的噪声经由电容回流，并去到了滤波器外面。（使用了消除高频噪声用的铁氧体磁珠，使用π型滤波器时，噪声源自GND）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRDD7QAmjfnGGT4xVqB5ibAUibMXibhgvcsYoIl9l6ouerNg01mzoiaR69wpYY0Cibaap6bVEnR9xluNoQ/640?wx_fmt=png)

**_图9-6：电路板布局引起的接地反弹示例_**

在这种情况下，为了避免噪声直接传播，可利用增加过孔（Via）的寄生电感的方法，经由过孔（Via）与接地平面连接，改善效果较好。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRDD7QAmjfnGGT4xVqB5ibAU4HVAxiaGeO9iaJpHBQQ0n0oupUeKLnHbzKYXpHkcQZMibm9icS3ibr0d0uQ/640?wx_fmt=png)

**_图9-7：改善示例_**

在开关电源电路中，PCB布局是非常重要的。

_______€3.回顾_______

_由绕线型电感构成滤波器_

1#：普通电感构成的滤波器，可选电感值的范围较宽。

2#：由电感构成的𝜋型滤波器，在低频段，通过电感和电容发挥低通滤波器的作用。

3#：到了高频段，由于电感会表现为电容、电容会表现为电感，从而𝜋型滤波器起到高通滤波器的作用，因此无法获得噪声消除效果。

_铁氧体磁珠的阻抗特性_

1#：虽然铁氧体磁珠被归类为电感，但其频率-阻抗特性与普通电感不同。

2#：铁氧体磁珠与普通电感相比，具有电阻分量R较大、Q值较低的特性，因此可利用该特性消除噪声。

3#：普通的电感可容许较大的直流叠加电流，只要在其范围内，阻抗不怎么受直流电流的影响。

4#：铁氧体磁珠对于直流电流容易饱和，饱和会导致电感值下降，谐振点向高频段转移，滤波特性产生变化。

__使用铁氧体磁珠降低噪声__

1#：铁氧体磁珠的Q值较低，因此在较宽频率范围内具有有效的降噪效果。

2#：铁氧体磁珠在低频段基本上发挥低通滤波器的作用，在这个频段，对于直流电流容易饱和，因此使用这种电感值下降的铁氧体磁珠很难消除目标频段的噪声。

3#：当电抗下降且越过与电阻分量的交越点时，铁氧体磁珠发挥电阻的作用，可将噪声转变为热。

4#：使用了铁氧体磁珠的滤波器，不仅可将噪声旁路消除，还可将噪声转变为热，因此实现优异的噪声消除性能。

5#：发挥电阻功能且将噪声转变为热，是与使用绕线型电感的滤波器之间的巨大差异。

6#：在更高频段，则与绕线型电感相同，发挥高通滤波器的作用。

_________€3.关于RC缓冲电路的补充_________

为了降低开关节点产生的尖峰电压，可考虑增加RC缓冲电路（传送门：[DC-DC-20：如何设计缓冲电路去除DC-DC的开关节点噪声](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490998&idx=1&sn=9f76e199f3dfccf004707ad41c665d73&chksm=c3355729f442de3f3314decb2b9683786a388d7730f193aaa86f27d38ed2e6c854bd1b37de56&scene=21#wechat_redirect)），整流二极管（同步开关MOS）OFF（高边开关ON）时，RC缓冲电路可将二极管的接合部、寄生电感、寄生电容、PCB版图的电感中积蓄的电荷放电，并通过电阻转换为热，从而降低尖峰电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRj6X5288RP12jcOX57FicpiaSXib5kO8Vf1TtjgUfIg7PW6fyMGffTia4qk7wHHibFzhBGFhsOSibiaIL3A/640?wx_fmt=png)

**_图9-8：缓冲电路将噪声转变为热_**

RC的值通常以R=2Ω、C=470pF左右为起点，通过实际确认来找出最佳值。需要注意的是，增加缓冲电路会导致开关转换变慢，效率下降，所以需要探讨噪声水平和效率之间的平衡点。另外，前提是电阻将噪声电压转换为热，所以需要注意电阻的容许损耗，缓冲电路不仅可用于低边侧，在高边侧也可以使用。