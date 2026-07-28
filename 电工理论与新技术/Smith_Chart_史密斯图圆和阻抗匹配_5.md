# Smith Chart：史密斯图圆和阻抗匹配-5


> 原文地址: [https://mp.weixin.qq.com/s/ctdfPhbTK65uecrhOwYUMQ](https://mp.weixin.qq.com/s/ctdfPhbTK65uecrhOwYUMQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSrfKib8AibPT9IcfgAInIag1T0ib2uqXZv1ECbGViaIXmiasHR9EhY4jPqkRXPOSfJol9micjzrTPkb71A/640?wx_fmt=png&from=appmsg)

_★★★__SMC-5---Admittance____**★★★**___

引言：到目前为止，讨论主要围绕“标准”史密斯圆图，也称为史密斯阻抗圆图，史密斯阻抗圆图不适合处理并联元件（并联电感、电容或并联传输线）。为了推广史密斯圆图使并联阻抗匹配更容易，本节将介绍史密斯导纳圆图。

___€1.史密斯导纳图___

在标准或史密斯阻抗圆图上，圆和曲线与恒定电阻和恒抗有关，也就是说，我们关注天线或负载（ZL）的阻抗，阻抗处理非常适合串联元件---阻抗只需增加即可。但是对于并联元件，数学计算就变得复杂了，为了简化计算，我们可以直接查看天线的导纳（或负载，YL），导纳表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJs44ibJpFYMC8n9eo1qdkvticJKUciabqTTQicaHr6tiaWia7OptIAGY05LFQ/640?wx_fmt=png&from=appmsg)

YL是负载的导纳，它是负载阻抗（ZL）的倒数，YL的实部写为C，称为电导，YL的虚部写成S，称为电纳。需要注意的是，史密斯导纳圆图同样可以像之前一样绘制反射系数Г，通过Г公式，可以将导纳Y与反射系数联系起来：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJktLicqJWzdzTibTvTRcWzUQk114dnibOUl4ngia1mjXgDMWGHHMFdVpOicA/640?wx_fmt=png&from=appmsg)

再次处理归一化导纳YL，它与归一化阻抗ZL的关系为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJeaw6QR5WQlZx7ENZGPUSaJEmQkqxdC0x8MSnxZCpiax579Q10J7VJ2w/640?wx_fmt=png&from=appmsg)

上式中，Y0等于1/Z0。

___€2.恒定电导圆___

因为Y=1/Z，所以可以取任意导纳Y绘制在史密斯圆图上，假设想知道恒定电导圆的位置。例如，哪条曲线构成Re\[Y\]=1？也就是说，如果Y1=1+i\*G，其中G是任意实数，则Y1定义的曲线是什么？我们可以使用上述公式对其进行数值计算，结果如图5-1所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfG3vdoTRnkcXZujLlV5CibD34ydic9oSArAKCNL0K09ib6wgbTRMUjdLdg/640?wx_fmt=png&from=appmsg)

图5-1：Re\[Y\]=1的恒定电导圆

沿着图5-1所示的恒定电导圆绘制了Y\_L值的一些示例，图中外侧的黑色圆圈代表史密斯圆图的边界，这就是反射系数幅度为1的位置。图5-2绘制了几个恒定电导值：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKf9obSPib9sa9kPyZCyTbb8eLQfOCfvYaLPiaLTmicQnEOJDd55qon7M4Tg/640?wx_fmt=png&from=appmsg)

图5-2：导纳史密斯图上的恒定电导圆

图5-2中左侧最小的圆圈是Re\[y\]=6圆圈，最大的蓝色圆圈是Re\[y\]=0.1。其他几个恒定电导圆对于与并联元件的阻抗匹配非常有用。

___€3.恒定电纳曲线___

假设我们对恒定电纳曲线的位置感兴趣，也就是说，Y\_L=A+i给出的曲线在哪里，其中A是正实数？使用数学运算，或者只是使用公式绘制点，我们可以得到图5-3中的下半圆蓝色曲线：请注意，电纳的正值位于史密斯圆图的下半圆，而电抗的正值位于史密斯圆图的上半圆。为了完善史密斯导纳圆图，绘制出更多的等电纳曲线，如图5-3所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfCrBMCNYPPquKQUMtuldNmjncVLaNCrQ2GIBfePy0L1Sg6MJV5dWiamA/640?wx_fmt=png&from=appmsg)

图5-3：导纳Smith圆图上的恒定电纳曲线，其中DP5是曲线Im\[yL\]=1的恒定电纳曲线

在下一节中，我们将介绍史密斯阻抗圆图，并查看阻抗匹配的并联分量。