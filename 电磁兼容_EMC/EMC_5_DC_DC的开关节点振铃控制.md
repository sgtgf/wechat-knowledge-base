# EMC-5：DC-DC的开关节点振铃控制


> 原文地址: [https://mp.weixin.qq.com/s/0pr\_ZFEnon6XmWp7H4qkyg](https://mp.weixin.qq.com/s/0pr_ZFEnon6XmWp7H4qkyg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSgfWB8HTEZWSlLytVhHkTvdzAGOL2blNEHR5XkBdhSlT3WdFCdncdC1geHnsnNWRYJcwmmEicCRUg/640?wx_fmt=png)

____**★★★**______EMC-5---开关节点振铃控制______**★★★**____

引言：由于电源效率变得越来越重要，会使用更高的开关速度来降低损耗（开关损耗的评估传送门：[DC-DC-22：如何选择DC-DC的开关频率-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491076&idx=1&sn=75348360017f3873cfdd0cc84b539e2e&chksm=c335549bf442dd8db5b7450e3c6411d92c2cabb7305ed950613cee8126bb5585250211d73186&scene=21#wechat_redirect)），现常见的开关速度已经到2.1MHz，然而开关速度（指MOS上升时间和下降时间变短）提高以后，电磁干扰EMI随之增加。同步降压DC-DC中，高速开关的场效应管在开关节点会有巨大的电压过冲和振铃，振铃的大小与高侧MOS的开关速度以及布局和FET的封装的杂散电感有关，我们必须选择正确的电路和布局设计方法，以将这种振铃维持在同步FET最大绝对额定值以下。

本节从消除振铃的角度出发（而不是后端滤波磁珠等静噪手段）介绍三种电路设计，在良好的电源布局前提下，利用一个自举电阻，一个高侧栅极电阻，或者一个缓冲器来控制开关节点振铃。  

## ____€1.寄生带来的振铃____

**_图5-1_**显示的是一个同步降压DC-DC的功率级组件模型，该模块中包含一些寄生电感和电容，其中红色部分是寄生元件，它们是产生开关节点振铃的原因。假设该转换器状态稳定，在低侧FET开启时的部分开关周期，负载功率仅通过输出电感和电容提供，这样能量存储于寄生电感，E=1/2L×I²。在开关周期末尾，转换器将会把低侧FET关闭，并将高侧FET重新开启，目的是为输出L重新提供功率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmAsTTlykRvjrYr73b43xsJQLM7VXh1FibhJbT0UaHiaKWWWLHa9tln4SZHhEqSE3RDFLjfV2S2BsQ/640?wx_fmt=png)

**_图5-1：降压DC-DC的寄生模型_**

一些高性能栅极驱动器和一个高速开关FET可以使低侧FET快速关闭，假设负载状态足以让电感电流持续流至输出，则电流被分流至低侧FET的体二极管，并且能量保留在低侧FET的寄生漏极和源极电感中，而来自低侧和高侧FET寄生电感的能量会以开关节点LC振荡波形的形式出现。

这种振铃的电压大小可超出低侧MOS的绝对漏-源电压，一般高速开关MOS都使用了一个堆栈式MOS对，通过一些创新的封装技术控制这些寄生电感。

## ____€2.降低振铃____

使用一个1.1V-20A降压DC-DC测试电路用于表明开关节点振铃的影响，该电路使用驱动器+高速开关FET电源模块，工作频率输600KHz，输入电压范围8-16V，**_图5-2_**是没有连接自举电阻器，高侧栅极电阻器或者缓冲器的开关节点波形，从波形图中可以看到12V输入时，峰值振铃为23.4V，最大负载的效率为87.2%。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjVRfDS0HTmQoPzgzRibM2oEew7icWdU4RHMRhNY8bxbJ7cWciaQN3icDX3HvIMYicuqGwBbEYXMf24Iw/640?wx_fmt=png)

**_图5-2：时间-50ns/div；原始振铃波形-5V/div_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjVRfDS0HTmQoPzgzRibM2oMR2MR11bfCQ3QmXStvo99VSQ2YVK6NTw9bHS6VqNEKj0TTj7onH05g/640?wx_fmt=png)

**_图5-3：时间-50ns/div；增加自举电阻振铃波形-5V/div_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjVRfDS0HTmQoPzgzRibM2oAyvozw4GgH1rcxclJ8icicYia3libw1D6OQib0XnH3UFG2MztAqeBfGGUWQ/640?wx_fmt=png)

**_图5-4：时间-50ns/div；增加高侧栅极电阻振铃波形-5V/div_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjVRfDS0HTmQoPzgzRibM2oicegDMhy7sQU2Pzkg2LVdIIq6PaWskJEsgic7ocI1ibrT9oF79T21aoQA/640?wx_fmt=png)

**_图5-5：时间-50ns/div；增加缓冲器振铃波形-5V/div_**

对自举电阻器、高侧栅极电阻器和缓冲器进行了优化，以将这种电压过冲降低至20V以下，这种电压过冲控制方法为FET保护提供了一定的裕量，而FET的最大额定电压为30V。**_图5-2_**至**_图5-5_**显示了初始电路的过冲和使用自举电阻器、栅极电阻器和缓冲器降低后的振铃过冲。栅极电阻器的波形与自举电阻器非常类似，需要注意的是，仅振铃的量级受到了自举电阻器和栅极电阻器方法的影响，缓冲器方法还改变了振铃频率，并渐次减弱振铃波形，**_图5-6_**显示了每种状态的测得效率。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjVRfDS0HTmQoPzgzRibM2onhFsvBf7lctXewPlrbCpeE5owxibNwd7P3DQXCJr6Iu7zibk3ZibrP99Q/640?wx_fmt=png)

**_图5-6：效率与负载电流的关系_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjVRfDS0HTmQoPzgzRibM2oJbJq3fDzLibj59ZmegdfwVcPfK07BzEBvVUI8h7qOpEkm9Z8Zia46cWg/640?wx_fmt=png)

**_表5-1：三种振铃降低方法测试_**

## ____€3.自举电阻器____

**_图5-1_**中所示充电泵电路利用Cboot来将高侧栅极电源电压升压至功率级电源电压以上，降低振铃的一种方法是用一个自举电阻器与自举电容串联，降低高侧FET的开启速度。这样做让寄生网络有更多的时间来放电，最终达到控制振铃的目的。（自举原理和计算传送门：[DC-DC-19：如何设计Buck变换中的自举电路](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490899&idx=1&sn=b1ebb4a1fac6ac454c017974e74fbd75&chksm=c33557ccf442deda372737283284d77df99ce58fde03b3f5982cf36587ac2888274c3a7f707e&scene=21#wechat_redirect)）

确定该自举电阻器值的方法是：从0Ω开始，然后逐渐增加电阻，直到出现理想的振铃程度为止。本例要想将这种设计的振铃降低至20V以下，则必须使用一个6.8Ω自举电阻器，该自举电容器仅仅影响高侧FET的开启，从而让这种方法成为降低振铃的一种有效方法。但是如果自举电阻器过大，则自举电容可能不会在每个周期都获得完全充电，这种情况下，栅极驱动器可能没有足够的电压来让高侧FET保持开启，并可能会在周期的中间关闭高侧FET，这样便限制了可以利用自举电阻器方法降低的振铃量。

## ____€4.高侧栅极电阻器____

同自举电阻器方法类似，高侧FET栅极串联的电阻器减慢高侧FET的开启，但是由于该电阻与栅极串联，它也在放电通路中，因此它同时也减慢了关闭的速度。为了把这种设计的振铃降低至20V以下，我们使用了一个6.8Ω的栅极电阻器，这种方法是三种方法中效率最低的一种。  

## ____€5.缓冲器____

可用于降低振铃的第三种方法是使用一个缓冲器，关于使用缓冲器的一个更加详细的实例传送门：[DC-DC-20：如何设计缓冲电路去除DC-DC的开关节点噪声](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490998&idx=1&sn=9f76e199f3dfccf004707ad41c665d73&chksm=c3355729f442de3f3314decb2b9683786a388d7730f193aaa86f27d38ed2e6c854bd1b37de56&scene=21#wechat_redirect)。缓冲器电路由一个电阻器和一个电容组成，它们与开关节点和接地以串联的方式连接。缓冲器电路用于减少开关过渡期间的寄生电感和电容，这种电路降低了振铃电压和频率，同时也减少了振铃周期数，可以帮助降低系统产生的EMI。

选择电容和电阻器件组件时，首先应测量原始电路的振铃频率。一旦确定了频率，便可将一个电容放同低侧FET并联放置，将振铃频率改变为原始值的一半，当频率为原始值的一半时，该并联电容值便等于原始电路寄生电容的三倍。知道电容和频率以后，我们便可以通过公式：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRGVXXdBMXNzCFVSIfibDrvrHJV3uI6YsgNsBoic4YrAJXUwbkoKjtsy7xaJ2tuJJXDFq7ZSmEu2FFg/640?wx_fmt=png)

计算出寄生电容，其中f为原始振铃频率，而C为寄生电容，电路阻尼电阻器的值可以通过方程式

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmAsTTlykRvjrYr73b43xsl44HCgwuYbA4iazeXcnPicYibgKR8YFdW1kAOo0LcUsFPQS3D1RKB2GMA/640?wx_fmt=png)

计算得到，该电阻器可能会也可能不会提供必要的振铃控制。增加电阻值会产生一个弱阻尼系统，其有更多振铃存在，但却可以降低功耗。增加电容可以降低振铃，但会增加功耗，就本例而言，使用一个2200pF电容和一个1Ω电阻以后，振铃降低至19.1V。

## ____€6.小结____

1#：自举电阻器可在不影响关闭的情况下减慢高侧FET的开启，是最为有效的一种方法，但是如果使用这种方法，则必须注意防止让栅极缺电荷。

2#：一个电阻器与栅极串联，可同时增加高侧MOSFET的开启与关闭时间，从而对开关节点升降振铃进行控制，但这种方法消耗掉了高侧FET的大多数功率，因此效率较低。

3#：RC缓冲器可以降低振铃的频率和过冲，但是它要求使用两个额外组件，并且在轻负载条件下效率较低。

每一种电源设计都有其优缺点，因此我们应该认真研究每一种方法，了解其给电源带来的成本/好处。最好的方法可能是组合使用所有三种电路，最终目标是在尽可能保持功率级高效率的同时，在MOSFET最大额定电压以下维持足够的安全裕量。这三种方法适用的场景也有所不同，Rgate只能适用于MOS分立的情况，而Rboot只能适用于有外置Cboot的情况，缓冲电路则分立与集成都比较适用。