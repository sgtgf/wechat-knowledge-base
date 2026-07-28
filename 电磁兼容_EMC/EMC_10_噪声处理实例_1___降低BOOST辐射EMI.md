# EMC-10：噪声处理实例-1---降低BOOST辐射EMI


> 原文地址: [https://mp.weixin.qq.com/s/m52Sgn5Of-TG0jqM5Qsuow](https://mp.weixin.qq.com/s/m52Sgn5Of-TG0jqM5Qsuow)

____![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI42dBdORnj3pytFlEX6SqibicZptvhFf7vQibHxn8MTTfKqmboZicKibYHpDrQ/640?wx_fmt=png)____

____**____**____**____**★★★**____**____**____**______________EMC-10---电源噪声处理实例__________**____**____**____**★★★**____**____**____**

______撰稿：Timothy  校稿：Timothy______

引言：本节开始从一些实例出发，理论结合实际来进一步探讨电源噪声处理的方式选择和效果评估。

______________€1.Boost型DC-DC辐射EMI分析______________

**_图10-1_**是典型的同步Boost电路，由输入电容Cin，电感L，开关器件Q1、Q2以及输出电容Cout组成，同时形成4个回路。

Loop2和Loop3为开关电流断续回路，具有高di/dt和dv/dt，因此SW节点振铃明显。Loop1和Loop4虽然是存在反复充电放电，但却是电流连续回路，电感电流连续，高频噪声主要来源于SW节点开关高频噪声的传导，由于Q2电流断续（Boost的特征），Cout的容值大小以及位置决定了Loop4中Vout节点高频噪声幅值。（传送门：[DC-DC-3：升压型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485610&idx=1&sn=1b5c384bbbc1191f9d32d5320e72a5a9&chksm=c3354235f442cb236b741c581cf7ad613115cfd919af3760d1d01a13520c07d8590dc57223f7&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEBPAmFUJYZ1ibEfqotupBMOQ03LR38PsBZOeVpEAmeRiafoNEalh5TJYw/640?wx_fmt=png)

**_图10-1：BOOST开关回路分析_**

**_图10-2_**为SW节点典型的开关波形（输出仅放置Bulk电容），SW开关节点振铃幅值高达10V，震荡频率为200MHz左右。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEMeQNfEQWFfXmtYL84zn80icj98jrLiaRJzFfHhffk3Ulygdfns33BIkA/640?wx_fmt=png)

**_图10-2：SW开关节点波形_**

**_图10-3_**是对应于**_图10-2_**的实际辐射EMI测试结果，采用3m方法，蓝色为垂直方向，红色为水平方向。测试结果显示噪声在频域上的峰值在200MHz附近，与时域测试结果**_图10-2_**吻合，因此抑制辐射EMI峰值意味着需要大幅度降低SW节点的振铃幅值，以及振铃周期数。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyESibrTCKEr2LFDY7j9lXMVkyoqcpeXicaspRr5GxJLm0tsu7tVX0Nc31A/640?wx_fmt=jpeg)

**_图10-3：辐射EMI测量幅值（CE测试标准）_**

______________€2.BOOST输出电容选择______________

如**_图10-1_**所示，Boost的Cout选择有几个关键考虑点：

1#：输出纹波幅值

2#：系统稳定性需求

3#：SW节点的振铃幅值

4#：输出电容耐压等级（陶瓷电容容值随耐压增加而衰减）。其中1#、2#、3#、4#与SW节点振铃幅值，辐射EMI息息相关。

**_图10-1_**中输出回路3（包含Q2、Cout）是断续回路，必须连接一个100nF-1uF去耦电容，该去耦电容对于降低SW振铃幅值有着关键作用。（传送门：[EMC-7：如何使用电容从后级应对开关电源噪声](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492089&idx=1&sn=637723fc548665005a577e925fcf18ab&chksm=c336ab66f4412270001d200e401b1f828cd8a7dced4980e82478602e8eba329bf078843a338a&scene=21#wechat_redirect)）

为了获得低的输出纹波，建议选择低ESR陶瓷电容， 通常3~4颗22uF的X5R电容可以满足大多数应用，更大的容值有利于输出电压动态响应。鉴于陶瓷电容随着电压增加，容值减小的特性，建议选择电容耐压时考虑留有足够的裕量。例如输出电压12V，建议至少选择20V或者25V耐压电容以维持足够有效的电容值。（传送门：[DC-DC-16：一文教你如何计算DC-DC的输入电容Cin与输出电容Cout](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490773&idx=1&sn=eccc9f9fd5f62fa9f149c40f3a2bc767&chksm=c335564af442df5c419d20d4785875da76c82acbd1c97ff7b25b210811550850e9c294120c19&scene=21#wechat_redirect)）

根据输出纹波幅值要求，可以利用如下公式计算最小需求电容值Cout。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEeeq60Votarq0JTwlop1AGhePqrdmEdOib7ibZfwd0z9KbLld1Na2vfjg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEdQyhktlCGnMb2pLvFVY76WMDPXgXTncXFdl7Cx1ykIrWkSd9CsNjIA/640?wx_fmt=jpeg)

其中Vripple\_C是输出纹波幅值，Vripple\_ESR是输出电容ESR导致的纹波，I\_Lpeak是电感电流峰值，ESR是输出电容的ESR。  

______________€3.Layout注意点______________

1#：由于输出回路是开关回路，高di/dt和dv/dt，减小回路面积至关重要，输出回路去耦电容必须放置在离Vout、GND管脚最近的位置，从而降低SW振铃幅值，如**_图10-4_**红色箭头所示，利用NC管脚作为输出功率地，从而更近一步降低输出回路面积，Vout、NC管脚铺铜尽量宽。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyE1ar8G3TPweXjibyJ1icJiaWVloCssGbF4WCfUmL0iag57lBtf7FCiaMPa7w/640?wx_fmt=png)

**_图10-4：推荐Layout_**

2#：由于SW的高频振铃同样会耦合至输入端，输入Bulk电容需要尽量放置离电感、GND近的位置以减小输入回路面积，输入端去耦电容同样需要离Vin端越近越好。

3#：下层大面积铺地，降低地回路阻抗，采用8mil的过孔连接上下大地，降低热阻。

4#：从系统稳定性考虑， AGND与PGND单端相连，通过散热焊盘底部相连，（散热焊盘同时也是功率地）。当Vout添加上去耦电容，并严格按照版图注意事项布板，测试波形如下**_图10-5_**所示，SW振铃幅值降低到6V，同时震荡明显周期变少。![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEsRSibVp67TxEiaf1MBKCaWH96ttWZdNfbP672jabendoZhrbSoHJZSBw/640?wx_fmt=png)

**_图10-5：添加去耦电容和推荐Layout_**

______________€4.SW开关节点噪声吸收电路选择______________

在SW开关节点添加对地的RC高频噪声吸收电路如**_图10-6_**所示，可以直接降低SW节点振铃幅值，该吸收电路通过降低dv/dt来降低SW节点振铃幅值，因此该电路会牺牲小于1%的Boost效率。（传送门：[EMC-5：DC-DC的开关节点振铃控制](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492064&idx=1&sn=4ab372275031e858bcab373d27eab019&chksm=c336ab7ff441226930b773e80578f2c7811b49fe2528b947268df2f4e0448b480d4e9b10c242&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEibCcvXFlIE0emMkQAzOBqScTtcJeG3X3ns35rxGm5RABoxia7ia8Fh0Og/640?wx_fmt=png)

**_图10-6：采用SW节点振铃吸收电路_**

SW高频噪声在200MHz附近，因此选择Rs=2Ω，Cs=2nF，**_图10-6_**为SW节点加上该吸收电路，测试结果为**_图10-7_**所示，相比于**_图10-2_**所示，SW幅值大幅降低（蓝色=SW、绿色=Vin AC）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEQDHDtmX8IIIZdYvK6eq6pSPicLR1qMpdPoiadGcjUp6sZicTajxBIpcZQ/640?wx_fmt=png)

**_图10-7：添加SW振铃吸收电路，测试波形_**

基于无系统级的EMI滤波器，**_图10-8_**为添加SW节点RC吸收电路后辐射EMI测试结果，相较于**_图10-3_**，EMI峰值下降了20dB。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEePbc8QZSiaq4VC7srSool1TD4YhFIEBJnQoXbUoJbIeZcDdDzibRwywg/640?wx_fmt=jpeg)

**_图10-8：辐射EMI测试结果（RC缓冲电路）_**

______________€5.磁珠的选择______________

在系统级应用中，如果需要进一步降低辐射EMI，贴片式磁珠是最简单的选择。关于磁珠的选择，有下列几个注意事项：

1#：磁珠的频率需要覆盖高频噪声频段，根据**_图10-3_**，该磁珠需要在100MHz~300MHz频段表现为高阻抗值。

2#：磁珠的饱和电流需要30%高于实际工作的峰值电流。

3#：磁珠的等效阻抗越低越好，有利于减少磁珠带来的功耗。