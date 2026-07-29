# 4种防止DC电源反接方法

原创 电路一点通 2024-08-23 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/dHMMzAErB48szCBcKl7k2A](https://mp.weixin.qq.com/s/dHMMzAErB48szCBcKl7k2A)

电源是PCB板的重要部分，每个芯片都需要电源供给。芯片其实是挺脆弱的，只要正负接反得话，大多数就会废掉。大多数反接的情况其实是可以避免的，所以要想办法防止电源反接。

**防止DC电源反接的4种方法：**

1\. 串联1只二极管。优点是电路简单、可靠。但有0.7V的压降。

2\. 串联4只二极管的全桥。优点是无论正接、反接，电源都能正常工作。缺点是要损失1.2V ~1.4V的电压。  

3\. MOS管型防反接保护电路。MOS管通过S管脚和D管脚串接于电源和负载之间，电阻Rg为MOS管提供电压偏置，利用MOS管的开关特性控制电路的导通和断开，从而防止电源反接给负载带来损坏。解决了现有采用二极管电源防反接方案存在的压降和功耗过大的问题。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种防止DC电源反接方法_images\img_000_d57a45ade4a0.jpg)

4\. 串联自恢复保险，在保险后面的电源正、负极反向并联1只二极管。优点输入电压没有损耗。缺点是成本较高。当然亦可把自恢复保险换成普通保险丝。这样材料成本虽然降低，但维护成本反而大大增加。

通常情况下直流电源输入防反接保护电路是利用二极管的单向导电性来实现防反接保护。

如下图1示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwGJPC9zwxp7UgNrf9YoRmVIUb6zwfHib7iajY9pAnBrmFDZoV3OOnBHuQ/640?wx_fmt=png&from=appmsg "DC 电源反接")

图1. 二极管型防反接保护电路

实际应用中二极管防反接电路一般采用图2的接法，这种防反接电路的优点是电路简单，成本较低，无损耗，但反接会烧保险，使用成本高。

  
  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf2H8alYc95yHNBqmKSZVHw3gAEjTLADW3Cnic2tpZSG0tTwjVrBFkqdMiaZzaOd23RgPTR9np7gQNA/640?wx_fmt=jpeg&from=appmsg "DC 电源反接")

图2.二极管型防反接保护电路应用

MOS管的G管脚通过Rg2接MOS管的D管脚，并通过Rg1接电源端。两个电阻为MOS管提供电压偏置可以起到分压，使到达栅极电压降低，到达安全电压。

增加输入回路轭流电感L和EMC吸收电容是防止从后端电路返回的干扰恶化防反接管HS50N06的工作状态。通过反复试验证明，Rg2下拉电阻非常重要。

正常工作时，开关管DC/DC的纹波达到30V左右。如果Q1栅极有下拉电阻，可以起到分压，使到达栅极电压降低，到达安全电压。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf2H8alYc95yHNBqmKSZVHw5OyTlWfRPqDSuMlibr231Mr4A6RV8HnMTVjOAGV6nPjg2HjIUx6Dkcw/640?wx_fmt=jpeg&from=appmsg "DC 电源反接")

图3.MOS管型防反接保护电路的实际应用

对于二极管防反接法，可以用肖特基二极管SBD（Schottky Barrier Diode）代替普通的二极管。肖特基二极管的优点在于正向偏置电压较低，这样的话损失的压降小。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwcxq1f8LwicVYg3L4NvFWg1vVQtkWlAqL2tfMx4J7UMw8TqcwCsUfQ2Q/640?wx_fmt=jpeg&from=appmsg "DC 电源反接")

  

整流桥式防护电路。无论输入电源正接还是反接，都可以正向导通。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwKibibTAS52PVBoS71MRF2Kwwu7u2TzbnjGyFmwQxcYe9xnTO7HcUZ6CQ/640?wx_fmt=jpeg&from=appmsg "DC 电源反接")

  
  

1、3脚是连在一起的。

当2脚接正(+)，3脚/1脚接负(-)时，①通道导通(D6、D7正向导通，D4、D8反向截止)。

当2脚接负(-)，3脚/1脚接正(+)时，②通道导通(D4、D8正向导通，D6、D7反向截止)。

在这种整流桥式的防护电路中用的比较多的肖特基二极管是SS14。同系列的有SS12、S13、S14、S15、S16、SS18、S100。后面一个数值分别表示反向耐压值(Maximum Repetitive Reverse Voltage)，SS12反向耐压为20V，S100反向耐压值为100V。