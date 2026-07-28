# 光耦最重要的参数CTR

原创 蜗牛 硬件笔记本 2020-09-18 18:24 undefined

> 原文地址: [https://mp.weixin.qq.com/s/Wr\_BG8Ypy3p7\_xJYrq35nQ](https://mp.weixin.qq.com/s/Wr_BG8Ypy3p7_xJYrq35nQ)

光电耦合器简称光耦，它相当于带隔离功能的三极管，其原理也可以参考三极管特性。主要用来实现输入和输出的隔离和电平转换等。

首先来认识一下光耦，如下图:

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKiabryh6sOpZWG4NRVA9Rvoh3nhZZm7K6VIz2Eickib5fQ7lYho3JtTqKqicLK0fnZ1KDOCmITvJx80w/640?wx_fmt=jpeg)

原边输入信号 VIN，加到原边的发光二极管和 R1上产生光耦的输入电流 iF，iF驱动发光二极管，使副边的光敏三极管导通，回路VCC、R2产生 iC,iC经过 R2产生 Vout，达到传递信号的目的。原边副边直接的驱动关联是CTR（电流传输比），要满足 Ic≤If\*CTR。所以，光耦最重要的参数就是CTR，CTR可以理解为增益、放大倍数等。  

  

用公式表示:CTR= iC/iF\*100%

  

光耦分为两种：

一种为非线性光耦，CTR-IF特性曲线呈非线性，在IF较小时的非线性失真尤为严重，因此它不适合传输模拟信号，适合于开关信号的传输。

另一种为线性光耦。CTR-IF特性曲线具有良好的线性度，特别是在传输小信号时，其交流电流传输比(ΔCTR=ΔIC/ΔIF)很接近于直流电流传输比CTR值。因此，它适合传输模拟电压或电流信号，能使输出与输入之间呈线性关系。

开关电源反馈回路中常用的光耦是线性光耦。如果使用非线性光耦，有可能使振荡波形变坏。

  

在计算光耦参数的过程中，需要注意查看规则书:

以PC817为例

  

①查看VF、Vce、CTR的值

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tLtJ6ic1iawuW8MewBmcRfibRkPMI4ORjyp0FLgCFP727coECS5L91dtv484qO1pszS17ODErczXsnfw/640?wx_fmt=jpeg)

VF代表的是光耦导通的时候，原边的压降典型值为1.2V；

副边Vce的三极管导通压降是0.2V；

25℃时，光耦的CTR是确定的，IF=5mA,Vce=5V时，确定的值是50%~600%。也就是放大倍数在0.5~6倍。我们计算的时候，只能按照最低的50%使用。

  

②初步选定原边电流IF

假设光耦的副边是连接GPIO，所需的驱动电流忽略不计，图1中的R2主要当做上拉电阻使用，就按照常规的5.1K选择。IC=（VCC-Vce）/R2=（3.3V-0.2V）/5.1K=0.607mA；根据光耦可靠导通的需求：Ic≤If\*CTR，所以0.607mA≤If\*50%；可以推算出If≥1.21mA。

  

③CTR与温度的关系曲线图

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tLtJ6ic1iawuW8MewBmcRfibRkHVfmjRhAibskv9WujCRPsBvNISkXA2ia9pVZgibQkiaDJ3btPdu1Ydw96g/640?wx_fmt=jpeg)

假设产品工作温度为最高70度，根据上图，估算CTR大概需要降额系数为0.8。所以，根据Ic≤IF\*CTR，得IF≥IC/（0.8\*CTRmin）=0.607/（0.8\*50%）=1.518mA