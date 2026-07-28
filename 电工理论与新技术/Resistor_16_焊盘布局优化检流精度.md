# Resistor-16：焊盘布局优化检流精度


> 原文地址: [https://mp.weixin.qq.com/s/XpH7wWfgKzFdKHwPvsz0pw](https://mp.weixin.qq.com/s/XpH7wWfgKzFdKHwPvsz0pw)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJLhJ4vC2Tc8WFCqibV64kskzxPv9X07sQKCaTtmNFs5v53BOz5anPGBw/640?wx_fmt=png)

_**_★★★_**_Resistor-16---检流电阻的焊盘优化_**_★★★_**_

引言：电流检测电阻有多种形状和尺寸可供选择，使用极低值电阻(几mΩ或以下)时，焊锡的电阻将在检测元件电阻中占据很大比例，结果大幅增加测量误差。高精度应用通常使用四引脚电阻和开尔文连接以减少这种误差，但是这些专用电阻却可能十分昂贵。另外在测量大电流时，电阻焊盘的尺寸和设计在确定检测精度方面起着关键作用。本节将描述一种优化方案，采用一种标准的低成本双焊盘检测电阻(四焊盘布局)以实现高精度开尔文电流检测。（回顾[Resistor-15：检流电阻的选型和使用](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247488290&idx=1&sn=98a860e43d131ee1c8e6ac4c2b66a503&chksm=c33559bdf442d0ab3422a547079a70053c7891bed1c67470fa77096199690b394da1cffbac79&scene=21#wechat_redirect)）

_€1.检流电阻的封装_

2512封装的常用电流检测电阻的电阻值最低可达0.5mΩ，其最大功耗可达3W。为了展现最差条件下的误差，这些试验采用一个0.5mΩ，精度为1%，3W的电阻，其尺寸和标准4线封装如**_图16-1，图16-2_**所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJfYERdYVQz6CZQypbwiadYPGEkIF3iagO00J0VKvVNbWR6al5aqqEXZ1w/640?wx_fmt=png)

**_图16-1：2512标准外形尺寸_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJ4iaSQePRVTOQlch3FKoLM1sLgMobI6LvDsWB6tpIjdDwiaOxmmWTWK2w/640?wx_fmt=png)

**_图16-2：2512推荐标准四焊盘封装_**

__€2.开尔文连接__

对于开尔文检测，必须将标准双线封装焊盘进行拆分。以便为系统电流和检测电流提供独立的路径。**_图16-3_**显示了此类布局的一个范例：系统电流用红色箭头表示的路径。如果使用一种简单的双焊盘布局,则总电阻为：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJQib54sPCuQTnjGnZ61CjqzVrr9Wp96aPiavRAWQez5gHjmOZVRJ1TYbg/640?wx_fmt=png)

为了避免增加不必要的电阻，需要把电压检测走线正确的连接到检测电阻焊盘处。系统电流将在上部焊点导致显著的压降，但检测电流则会在下部焊点，压降可以忽略不计。可见这种焊盘分离方案可以消除测量中的焊点电阻，从而提高系统的总体精度。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJHtABXt4XFkUURYSmFd7A7A49t34msjicZPQC0bZkhJkI2vUeV0MlyPg/640?wx_fmt=png)

**_图16-3：常用四焊盘开尔文连接方式_**

__€3._优化开尔文封装_

**_图16-3_**所示布局是对标准双焊盘方案的一种显著的改进，但是在使用极低值电阻 (0.5mΩ或以下)时，焊盘上检测点的物理位置以及流经电阻的电流对称性的影响将变得更加显著，因此检测点沿着焊盘每延伸一毫米，结果都会影响有效电阻。使用高精度电流，通过比较五种定制封装下的压降，可以确定最佳检测布局。

下面展示在测试PCB板上构建的五种布局模式，分别标记为**_图16-4_**到**_图16-8_**。我们尽可能把走线布局到沿着检测焊盘延伸的不同位置的测试点，各个电阻封装为基于2512建议封装的标准4线电阻(**_图16-2_**)，检测点对(X和Y)位于焊盘外缘和内缘(x轴)。

**_图16-5_**类似于**_图16-4_**，但焊盘向内延伸较长，以便更好地覆盖焊盘区，检测点位于焊盘中心和末端。**_图16-6_**利用焊盘两侧以提供更对称的系统电流通路，同时把检测点移动到更中心的位置，检测点位于焊盘中心和末端。**_图16-7_**与**_图16-6_**类似，只是系统电流焊盘在最靠里的点接合，只使用了外部检测点。**_图16-8_**为图**_16-4_**和图**_16-5_**的混合体，系统电流流过较宽的焊盘，检测电流流过较小的焊盘，检测点位于焊盘的外缘和内缘。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJbMMeaKk4anZiaYV1OvFEAz47AhYRGNWznIY0ErocvfQJM05Xno18VWQ/640?wx_fmt=png)

**_图16-4：常规开尔文连接_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJ1T10hGcz4S1pw4L0lNcbtmpibH0YtpSloljYKic1KvhX1J7NEDnY2Qyw/640?wx_fmt=png)

**_图16-5：延展焊盘开尔文连接_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJFk2dw3pjjicbyRT9lULFjExAtG1YyPgdVbcjvFfvRbulnibwKdKEtVFg/640?wx_fmt=png)

**_图16-6：中心两侧连接_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJzX7ffcCV7nJcUblskL7oSWNw9RtSg37epI8s1U8ic24P2icOVZjTibAfQ/640?wx_fmt=png)

**_图16-7：中心外侧连接_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJSfdz0CyLDHhtXrQERicAR2LCO5XoaQfPncqRxhrzVLLCSyZlxs97zVA/640?wx_fmt=png)

**_图16-8：大-小焊盘连接_**

测试设计：使20A的高精电流通过各个电阻，同时使电阻保持在25°C。在加载电流后1秒内，测量产生的差分电压，以防止电阻温度升高1°C以上。同时监控各个电阻的温度，以确保测试结果均在25°C下测得。电流为20A时，通过0.5mΩ电阻的理想压降为10mV。**_表16-1_**列出了采用上述五种所示检测焊盘位置测得的数据：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJtgeLicABE4jGyoCfibfjzU7kX55HYdgvEAkPDJENR0unvoRybS9vexIA/640?wx_fmt=png)

**_表16-1：实测数据_**

最后一栏是非开尔文连接检测，以对比和焊锡电阻相关的误差。由于结果的可比较性以及各电阻偏差都在容限范围之内，所以得出**_图16-6_**和**_图16-7_**的误差最小。**_图16-6_**为首选封装，因为它不大可能导致与元件放置容限相关的问题。在每一种情况下，电阻外端的检测点提供的结果最准确，这表明这些电阻是制造商根据电阻的总长度设计的。注意在未使用开尔文检测时，焊锡电阻相关误差是22%，这相当于约0.144mΩ的电阻。**_图16-8_**展示了不对称焊盘布局的效应，回流期间元件通过大量焊锡才能粘接焊盘，应避免这种封装。

___€4.__结论_

根据前面所示结果，最佳封装是**_图16-6_**（如可以高精度SMT，使用**_图16-7_**封装最好），其预期测量误差小于1%。该封装的建议尺寸如**_图16-9_**所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRGDTu6mzcLbdqAuphOySNJTdaANE7GiaS8HwfamxJ4tC9vfJWLvpiaqRhkdibsOmZrsTnUbMJxDKjgA/640?wx_fmt=png)

**_图16-9：最佳封装尺寸_**

检测走线的布局也会影响测量精度，为了实现最高精度，应在电阻边缘测量检测电压。建议采用**_图16-10_**所示通孔布局，把焊盘外边缘布局到另一层，从而避免切割主电源层。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQLZPKJzP7pWAxb3Bo3BjpRZQUWWRQfXrXcYf53zo6tekaCrAIibAOc8w/640?wx_fmt=png)

**_图16-10：建议开尔文PCB走线_**

上述封装可能并不适用于所有电阻，具体取决于电阻的材质和尺寸以及检测的场景。大封装，大电流，低阻值的场景推荐使用如**_图16-10_**方式。