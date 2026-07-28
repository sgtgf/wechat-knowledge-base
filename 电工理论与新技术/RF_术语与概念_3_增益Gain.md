# RF 术语与概念-3：增益Gain


> 原文地址: [https://mp.weixin.qq.com/s/3eKWrhlPCoUiUxI0xAm7XQ](https://mp.weixin.qq.com/s/3eKWrhlPCoUiUxI0xAm7XQ)

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TThT1LsOXrcnLYxmlHnkvgZZTLMIcesu0s1G6XBMD5ic7m8RFB39PTW5SDQDGK06Xy79wgNkIFuupw/640?wx_fmt=png&from=appmsg)___

____**★★★**______TCS-3---Gain______**★★★**____

引言：增益是射频领域的关键性能参数之一，比如LNA，PA的核心功能就是放大，所以增益的定义就是放大量，比如信号功率、信号电平等，增益的常用度量方式有两种：放大倍数和dB，倍数和dB之间可以互相转换。（[RF 术语与概念-1：单位初识-1](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247495050&idx=1&sn=242bc93b7c0d2ea22f7b8014e3063e66&scene=21#wechat_redirect)）

_____€1._天线增益____

天线增益是指在输入功率相等的条件下，实际天线与理想的辐射单元在空间同一点处所产生的信号的功率密度之比，衡量天线在特定方向上辐射或接收电磁波的能力。天线增益是入网测试时极其重要的标准，它表示了天线的方向性和信号能量的集中程度。增益的大小影响天线发射信号覆盖范围和强度。主瓣越窄，旁瓣越小，能量就会越集中，那么天线增益越高。一般来说，增益的提高主要依靠减小垂直面向辐射的波瓣宽度，而在水平面上保持全向的辐射性能。

天线增益对移动通信系统的运行质量极为重要，因为它决定蜂窝边缘的信号电平。增加增益就可以在一确定方向上增大网络的覆盖范围，或者在确定范围内增大增益余量。任何蜂窝系统都是一个双向过程，增加天线的增益能同时减少双向系统增益预算余量。

天线增益的单位一般有两种：dBi与dBd，其中dBi是以理想点源天线为参考的基准，在各方向的辐射是均匀的；dBd是以半波阵子（偶极子）的天线为参考基准，相对于对称阵子天线的增益dBi=dBd+2.15，同一个天线增益，dBi比dBd在数值上大2.15dB。相同的条件下，增益越高，电波传播的距离越远。一般地，GSM定向基站的天线增益为18dBi，全向的为11dBi。一个具有3dB增益的天线，意味着它在该方向上的辐射强度是全向天线的2倍。

天线增益的大小取决于天线的设计、尺寸、形状以及工作频率等因素。较高的天线增益可以使信号在特定方向上传播得更远，提高通信质量和覆盖范围，但同时也会减小天线的辐射范围在其他方向上的覆盖。在无线通信系统中，选择合适的天线增益对于优化信号传输和接收非常重要，需要根据具体的应用需求和环境来进行权衡和选择。

______€2.___放大器增益___

放大器增益是放大器输出功率与输入功率比值的对数，用以表示功率放大的程度。亦指电压或电流的放大倍数，放大器输出与输入的比值为放大倍数，单位是“倍”，如10倍放大器，100倍放大器。当改用dB做单位时，放大倍数就称之为增益，这是一个概念的两种称呼。电学中分贝与放大倍数的转换关系为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQMIR4xJnL1wEDUebCJWTIyJoMLiatjXghYt9TY7EcDrD4ntsIicPMFeeLcZg8fI0lOvTF2cMxfYVJA/640?wx_fmt=png&from=appmsg)

**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQMIR4xJnL1wEDUebCJWTIyDKsxCD98ib7nzpS7Libu3GnutGeiaZutGy2wLIbX0Ntzv1RJvTnoR2iaxQ/640?wx_fmt=png&from=appmsg)**

分贝定义时电压(电流)增益和功率增益的公式不同，功率与电压、电流的关系是

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQMIR4xJnL1wEDUebCJWTIytzVqdriakAUicbiaVqot718nicVEM3xy8cDtwdjDIXpPQ1jeibdoogcb7LA/640?wx_fmt=png&from=appmsg)

代用之后，两者的增益数值就一样：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQMIR4xJnL1wEDUebCJWTIynP1AxZ4HhhWfWMER8C4mjzYlF11AfI1qcmHNtXqx5z702QL1l4jfEA/640?wx_fmt=png&from=appmsg)

电子系统的总放大倍数常常是几千、几万甚至几十万，一架收音机从天线收到的信号至送入喇叭放音输出，一共要放大2万倍左右。用分贝表示取对数，数值就小得多。放大器级联时，总的放大倍数是各级相乘。用分贝做单位时，总增益就是相加。若某功放前级是100倍(20dB)，后级是20倍(13dB)，那么总功率放大倍数是100×20=2000倍，总增益为20dB+13dB=33dB。

______€3.___功率增益___

功率增益（Power Gain）是指一个电路里输出功率和输入功率的比例，不像其他的信号增益，例如电压增益和电流增益，功率增益由于“输入功率”和“输出功率”本身有着相对模糊的定义，因此有时显得有点混淆。三种重要的功率增益包括：运算功率增益（operating power gain）、转换功率增益（transducer power gain）和有效功率增益（available power gain）。值得注意的是，上述三种增益的定义均基于功率的平均效果，而非瞬时功率。