# 浅谈SiC功率器件短路测试方法和原理


> 原文地址: [https://mp.weixin.qq.com/s/Ay\_wbSGfnEgK4Zqkb2u7bQ](https://mp.weixin.qq.com/s/Ay_wbSGfnEgK4Zqkb2u7bQ)

**1.概述**

SiC功率器件凭借其耐高压、耐高温、开关速度快等特点，在众多电力电子产品应用中展现出独特的优势。然而在实际应用中，出现短路问题是不可避免的。由于SiC器件面积小、短路电流高、漂移层薄等特点，其短路耐受时间相对传统Si器件要短得多。传统Si器件在数据手册中标称的短路电流一般为5~10μs，而大部分SiC器件都没有标出短路能力，即使标注，耐受时间也较短。

SiC器件的短路耐受能力与其内部结构和材料特性密切相关。‌例如，‌SiC材料的临界电场强度约是硅材料的10倍，‌因此SiC MOSFET的漂移区仅需要Si IGBT的十分之一。这导致在短路情况下，SiC MOSFET的热量更加集中，温度更高，从而在短路条件下的性能表现与Si IGBT有所不同。

在相同的栅极电压下，IGBT器件通常在4至6倍的短路电流时进入退饱和状态，并且有明显的退饱和点；而SiC器件则没有明显的退饱和点，短路电流可以达到8至10倍甚至更高。这些差异进一步凸显了SiC与IGBT在短路行为上的显著不同。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4FCdlG3Znniac0XQsfqOYia6L9GG59TJuY9XsVUojsc7olysFmwSEiaLiag/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图1 IGBT和SiC MOSFET短路特性

  

**2.SiC MOSFET短路原理**

典型的SiC MOSFET短路原理波形如图2所示，可以分为4个工作状态。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4kAxIX5tebYEFibpgRPf5xxQMK4Y9L33WDke6fjicU61ZJ5ouv07eyaHQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图2 SiC MOSFET短路波形

**时刻1\[~t1\]：**SiC MOSFET处于截止状态，直流母线电压UDC直接加在被测器件两端。

  

**时刻2\[t1~t2\]：**t1时刻，被测器件开通。由于功率回路阻抗很小，SiC MOSFET漏极电流急剧增大。同时，短路电流变化率di/dt作用于回路寄生电感LS，在LS上产生一个与直流母线电压极性相反的电压VS，导致SiC MOSFET漏源极电压有所下降。Vds此刻电压可表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4VRWurFYJTU4PuuH8nV573Onuac8p6TbITeeD95GQ0N6oT64YlyrH0Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在短路电流上升过程中，SiC MOSFET的功率损耗导致自发热，SiC MOSFET结温逐渐升高，导通电阻也随之逐渐增大，导致di/dt逐渐减小，这是因为在短路回路中SiC MOSFET导通之后，导通电阻、寄生电感组成了一个一阶LR串联电路，随着导通电阻的增大，回路阻抗增大，电流上升速率有所降低，SiC MOSFET漏源极Vds又逐渐升高。

  

**时刻3\[t2~t3\]：**随着结温的升高，t2时刻SiC MOSFET沟道载流子迁移率开始降低，导致流过开关管的饱和电流减小，Vds会略微上升，di/dt为负。

  

**时刻4\[t3~\]：**t3时刻开关管关断，开关管端电压出现关断过压，电流逐渐减小到零，同时负的di/dt作用于杂感会产生和母线电容同向的感应电动势VS，共同施加在器件上，产生关断尖峰，由于短路远大于额定电流，这个关断尖峰如果不能有效控制，有可能会导致器件电压应力失效，此刻：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4BZ9O5xv4fWdwDnk9OxL65d1URbYuAXd0hibk4Lr5xcRMIveP48X462g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**3.短路测试方法**

SiC器件短路测试是为了测试功率器件能够承受的最大电流。电流过载发生时，漏极电流迅速上升，功率器件需要在电流峰值维持安全水平。短路测试可以‌用于评估功率器件在极端条件下的性能。‌对于SiC MOSFET而言，‌短路测试旨在模拟电流过载情况，‌以检验器件在短路条件下的安全运行能力。‌测试过程中，‌通过控制特定的试验条件，‌如门极开通和关断电阻以及高压母线电压，‌来模拟短路事件的发生。‌短路回路电感量低，‌短路能量全部来自于母排电容组。

功率器件短路测试方法一般有两种，一是用短铜排的方式进行短路，如图3，但由于外部铜排不可避免引入杂感LS，但这种情况下会导致电流上升斜率变慢，2μs内无法达到器件饱和电流，这样通常短路能量无法满足测试要求。特别是在ATE产线设备中，由于回路的切换在短铜排中还需要串联切换的继电器，使得LS必然会比较大。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z42JicAuPiaBvN7A3kWO1TlzQ84TqwCTL6KsrZiaZ8Z5dNHZcDT1FqoNcWg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图3 外部短路

另外一种方式就是过非动作管以正压保持导通状态，‌而动作管（‌待测管）‌则以单脉冲驱动形成桥臂直通，如图4，‌从而产生短路条件。桥臂直通短路，通常的陪测管栅极提前给常开，被测管栅极发脉冲，同时需要注意的是如果被测管和陪测管栅压相同的话，陪测管也会分担母线电压。所以，为了考核被测管在极端条件下的性能，通常需要被测管栅压稍大于陪测管，即陪测管门极大于被测管门极1~2V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4icC8H8nLDBibIBicgBXrDib7MFGMnCh5xT6yyBsjL4RNA9R98ialDpqfYiag/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图4 桥臂直通短路方式

  

**4.测试波形**

SiC MOSFET的短路测试主要关注其安全运行和保护机制，‌特别是在电流过载情况下的性能表现。‌‌目前飞仕得SiC器件产线动静态ATE测试设备ME100DS-PIM集成高速固态保护开关，具备1.5μs快速响应短路保护。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4mOzdOf71hdSy45AL1ZibPusGwQjGdFkP6CvumiaOKZ0Wwucc2Vhic5Rxw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图5 SiC器件产线动静态ATE测试设备ME100DS-PIM

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4zZlWc31AQuo4rW9oxe6n5YicNaR49giclqicPNc2A4XJb5UQ59VIKcvdQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图6 内部保护开关保护波形(设置12kA)

  

实际测试SiC功率模块短路波形如图7；

测试条件：母线600V短路时间2μs，最大电流7700A

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4CcsV51aNMt6icX4EDHed3ibRBJ3EiatWoicRANOSx2X1qMu2hIkO2pSJuA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图7 实测SiC器件短路波形

  

实际测试SiC功率模块短路失效波形，短路设置6000A短路保护,短路最大电流5600A,器件在关断后失效，失效后在最大电流7300A,从设定电流到最大时间仅488ns。‌

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4pF0micOSkcvmR3jKY3ibzHZ46OnFJicPnEqAZSp26Y05ibA9iawg2olL4mQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

图8 短路失效波形

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4FWF4lkWOLcZYTRUFE8oMOb3cFgEhOTopZM0WHsiaf4A3iagD0EJDtr1w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**小结**

SiC功率器件的短路相比于Si器件来说短路电流更大、耐受时间更短，所以对于SiC功率器件的短路测试所需要的测试条件更加苛刻。飞仕得SiC器件产线动静态ATE测试设备ME100DS-PIM针对SiC器件产线测试集成12kA/1.5us快速过流保护开关，能够满足高要求的短路测试需求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H1zGrXdE6dib0wxJKFKD64CH0TibCne0Z4K0NA9LFkib9ClUYhicnwFpYjiajVQLygToSAibNKMG6nxTibtkfwpl1jUKg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

参考文献

\[1\]秦海鸿, 徐克峰, 王丹, 等. SiC MOSFET短路特性. 南京航空航天大学学报, 2018, 50(3): 348-354.

\[2\]英飞凌-谈谈SiC MOSFET的短路能力

来源：Firstack智能装备

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)