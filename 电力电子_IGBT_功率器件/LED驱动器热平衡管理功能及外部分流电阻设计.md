# LED驱动器热平衡管理功能及外部分流电阻设计

原创 电路一点通 2025-01-18 11:26 广东

> 原文地址: [https://mp.weixin.qq.com/s/fJeUZsBPAy85MtYKluMY4Q](https://mp.weixin.qq.com/s/fJeUZsBPAy85MtYKluMY4Q)

本文主要阐述了Si LM 4 2 2 8 x系列L E D驱动器的热平衡功能及外部分流电阻的设计，并且通过实 验说明热平衡功能在实际应用中的表现。

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

# **LED 驱动器**

LED 驱动器是 LED 照明系统中的关键组成部分，其性能对整个系统的稳定性和效率具有直接的影响。LED 驱动器主要有 两种类型：线性稳压器（LDO）和 DC-DC 调节器。数明半导体推出的 SiLM4228x-AQ 系列独立的三通道 LED 驱动器采用的 就是线性稳压器的方式。与 DC-DC 调节器相比，线性稳压器通常只需要较少的外部元件，同时产生的噪声相对较低，对 信号的干扰也较小。然而，线性稳压器的工作效率相对较低。特别是在处理大电流时，LDO 的效率问题更加明显，这会 导致设备发热严重。SiLM4228x-AQ 系列集成了热平衡功能，可以有效减少芯片的发热，从而提升芯片稳定性和使用寿 命。

# **线性驱动器芯片功耗计算**

为了了解 SiLM4228x-AQ 系列 LED 驱动器的热平衡功能是如何实现的，首先需要了解线性驱动器芯片的功耗计算。可以 通过输入电压（VIN）、LED 驱动器输出串联 LED 的颗数（Series\_LED\_Count）、LED 的驱动电流(ILED)、LED 的前向压降 （VF）以及 LED 的通道数（NCH）来计算 LED 驱动器上产生的功耗。LED 驱动器的总功耗计算公式如下：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_001_e5b5dd6e6d64.png)

  

以一个具体的示例来说明，当使用 SiLM4228x-AQ 系列并关闭热平衡功能来实现如下应用时：

1\. 输入电压 VIN=12V；

2\. 串联 LED 的颗数为 2 颗；

3\. LED 的驱动电流 ILED=120mA。

4\. LED 的压降 VF=2.2V

此时 SiLM4228x LED 驱动器上承受的功耗将达到 2.736W。如果无法做到良好的散热，LED 驱动器的结温将会急速升高， 从而影响芯片的稳定性和使用寿命。

# **热平衡功能的工作原理**

SiLM4228x-AQ 系列 LED 驱动器的热平衡功能是通过优化芯片设计，在 LEDxA 和 LEDxB 之间使用外部分流电阻器来共 享 IC 封装功率，通过在 PCB 板上散热来灵活避免热点的产生，实现智能化功率管理。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_002_92fe2e55edd3.png)

  

SiLM4228x-AQ 为每个通道提供两个电流输出路径。电流从电源流入SiLM4228x-AQ 集成电流调节电路，并通过LEDxA 和 LEDxB 引脚流向 LED ，LEDxA 和 LEDxB 引脚上的电流输出是独立调节的，以实现所需的总电流输出。正常工作时， SiLM4228x-AQ 总是尽可能多地调节输出电流至 LEDxB 引脚，直到 LEDxB 电流路径达到饱和。此时，若在 LEDxB 上串 联外部分流电阻器（RSHUNT），则芯片上的功耗就会被外部分流电阻分担一部分，从而使芯片的功耗降低。LEDxA 和 LEDxB 通道输出电流的分配关系可以用如下计算公式进行计算，其中VLEDxB\_sat为0.65V。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_003_2b28829f8cd6.jpg)

  

图2显示了输出电流分配随输入电压的变化曲线。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_004_9b6682a0562e.jpg)

  

# **外部分流电阻的选择**

LEDxB 上串联的外部分流电阻会最终决定 LEDxA 和 LEDxB 上的电流分布，所以可以按照将外部分流电阻上的功耗等于 总功耗的50%的原则来选取外部分流电阻。外部分流电阻（RSHUNT）的选取公式如下：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_005_5e69fef91500.png)

  

为了验证 SiLM4228x-AQ 系列 LED 驱动器的热平衡功能，使用上面提到过的应用配置，则可以得到LEDxB上串联的外部 分流电阻为126.7Ω，实际应用中采用125Ω的外部分流电阻。此时各通道上的功耗随输入电压的关系如下图所示：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_006_62acc42632b0.jpg)

  

此时，SiLM4228x LED 驱动器上承受的功耗为 1.62W，功耗降低了 40%。实际应用中，通过合理的调节外部分流电阻器 的大小，来减小 SiLM4228x LED 驱动器上的功耗。

另外值得注意的时，在选取外部分流电阻时，我们应当时刻关注外部分流电阻上的功耗，根据功耗选取合适的封装。此 应用中所用的分流电阻承受的功耗为 0.417W，外部分流电阻至少要用到 2010 的封装（2010 封装贴片电阻的最大功率为 0.75W）。外部分流电阻上的功耗可以采用如下公式进行计算:

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_007_e5de9df1ecf9.png)

  

# **实验结果**

在相同的输入/输出功率情况下，使用和未使用外部分流器的芯片温升的差别如下图所示。未使用热平衡功能时，芯片 的最高温度达到了131.3℃，而在启用热平衡功能后，芯片表面温度下降到了85.8℃。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_008_be34e43d1c75.png)

  

综上所述，SiLM4228x-AQ 系列独立的三通道 LED 驱动器不仅具有线性稳压器的优点，还通过集成热平衡功能有效解决 了效率低下时发热严重的问题。它的成功应用将为 LED 照明系统带来更稳定、更高效、更长寿命的性能提升。

******进大家庭⭕圈探讨回复:****** ******交流******

******![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_009_dc9b39eaee8a.other)******

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_010_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_011_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_012_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_013_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED驱动器热平衡管理功能及外部分流电阻设计_images\img_014_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)