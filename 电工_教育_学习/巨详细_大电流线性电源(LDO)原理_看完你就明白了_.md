# 巨详细！大电流线性电源(LDO)原理，看完你就明白了。

原创 工程师看海 硬件笔记本 2021-10-12 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/IwbBk2mg-1vRcf3lQ3FuSA](https://mp.weixin.qq.com/s/IwbBk2mg-1vRcf3lQ3FuSA)

  

上一篇文章介绍了PMOS结构线性电源的基本工作原理，今天结合仿真介绍大电流LDO使用的NMOS 架构基本工作原理，以及其他一些重要的LDO参数，包括PSRR、Dropout Voltage等。

添加微信\[chunhou0820\]获取LDO仿真文件 

![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_000_0d32b8f0062a.png)

**1\. NMOS LDO工作简介**

下图是一个NMOS LDO的基本框图，NMOS LDO一般也工作在饱和区（特殊时会在可变电阻区），所以Vg要大于Vs，因此NMOS LDO除了有Vin引脚，一般还会有个Vbias引脚来给MOS G极提供高压驱动源；或者只有一个Vin，而内部集成了CHARGE BUMP来为G极提供高压驱动源。大体工作流程同PMOS LDO：当Vout下降时，反馈回路中的Vfb也会下降，误差放大器输出端Vg就会增加，随着Vg增加，Ids电流也增加，最终使得Vout又恢复到原始电平，状态如下：

**Vout↓——>Vfb↓——>Vg↑——Iout↑——>Vout↑**

![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_001_ae2b111ffebd.jpg)

 **2. NMOS LDO详细工作原理**

下图是某NMOS输出特性曲线，让我们结合上图和下图分析，当Vout下降，Vin不变，则Vds=Vin-Vout，Vds增加，MOS工作点由A转移到B；紧接着反馈回路开始工作，Vfb电压减小，经过误差放大器后，Vg增加，那么Vgs=Vg-Vs，Vgs也增加，从下图可以看到，随着Vgs增加，MOS的电流Id逐渐上升，进而使得Vout逐渐升高，MOS工作点由B转移到C，LDO又回到原始工作电平。

![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_002_b238cf489323.jpg)

**3\. NMOS LDO仿真结果**

下图是简单的5V转3.0V的NMOS LDO仿真图以及仿真波形结果，橙色曲线是电压，绿色曲线是电流，随着负载端滑动变阻器R4的变化，负载电流也在变，而输出电压基本稳定在3.0V。

![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_003_c17da26c2e32.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_004_b53b4e533901.jpg)

**4\. LDO 输出电容你知道多少？**

考虑到系统的稳定性，LDO的输出电容原则上是要加的，但是如果对于成本有极致的考虑，在满足一定要求时，这个电容其实是可以删除的。

**5\. Dropout voltage**

上文分析了PMOS LDO工作在恒流区（饱和区），DS之间有一定的压差，此压差常称为dropout voltage（Vdo），所以LDO若想稳定工作在饱和区，输入输出之间满足一定的压差，应用中通常可以考虑在spec中预留25%的余量。比如下图中在Iout=150mA时，不同Vout对应的Vdo也不同。

![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_005_76ef272cf8ad.png)

**6\. 效率**

效率此处不过多讨论，LDO自身消耗的功率约等于压差\*电流，因此相同负载电流下，压差越大，LDO功耗越高，所以压差稍微低一些，有利于提高效率。

**7\. PSRR**

LDO重要参数之一也是巨大优点之一便是纹波小，即PSRR好，PSRR是电源抑制比，是LDO对输入电源纹波的抑制程度，PSRR的绝对值越大越好。看PSRR曲线有个转折点，左边为LDO自身起主导作用，右边为输出电容起主导作用，PSRR性能好的LDO左边的曲线会更高，加大输出电容，右边的曲线会升高。

![](D:\电脑文件\公众号知识库\电工_教育_学习\巨详细_大电流线性电源(LDO)原理_看完你就明白了__images\img_006_0f6bc0884729.jpg)

LDO的基本原理与介绍可以告一段落了，而其内部实际工作情况是非常复杂的，本文只起引导作用，希望能引起大家的共鸣或排解一些疑惑，欢迎关注我的公众号：硬件工程师看海。里面会定期更新鲜的内容。

\---The end--\-

  

**推荐阅读▼**

[电池、电源](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI0ODgxMTg4Mg==&action=getalbum&album_id=1790608451828531201#wechat_redirect)  

[硬件文章精选](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI0ODgxMTg4Mg==&action=getalbum&album_id=1577366847186878465#wechat_redirect)  

**[华为海思软硬件开发资料](http://mp.weixin.qq.com/s?__biz=MzI0ODgxMTg4Mg==&mid=2247484358&idx=1&sn=d69929a821c2e6ac3caf86e6ec7c1751&chksm=e99a5bc3deedd2d5e15c942b3c6f23fb9ae95e5da56cb801c58ce6344b62e2ad9daaad3d0bd9&scene=21#wechat_redirect)**

**感谢点赞、在看、分享，让知识变得更简单**