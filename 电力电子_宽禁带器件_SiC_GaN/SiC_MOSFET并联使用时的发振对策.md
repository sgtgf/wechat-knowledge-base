# SiC MOSFET并联使用时的发振对策


> 原文地址: [https://mp.weixin.qq.com/s/l6pmChGvKSRru7GACNG2sA](https://mp.weixin.qq.com/s/l6pmChGvKSRru7GACNG2sA)

**文章来源：**罗姆（ROHM）半导体

**摘要：**近年来，工业设备或 xEV 等应用中，随着大电流化的需求，低价格的分立器件封装品进行并联使用的电路方式的使用方法日益广泛。由 MOSFET 的并联连接，单个器件流过的电流得以减少，使发热的分散成为可能。但是，由于单个器件的特性存在离散型，MOSFET 进行并联连接且同时驱动的时候，每个 MOSFET 完全进行统一时序的动作实现很困难。与单独使用器件的场合相比，驱动方法上有需要注意的事项。本 Application Note 的目的是，对关于 SiC MOSFET 的并联使用时振荡情况，基于实测结果的明确对策等，对包含驱动电路的线路板布线的注意点做出引导性的提示。  

![](SiC_MOSFET并联使用时的发振对策_images/img_000_e135e7a50362.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_001_7fcee8287a70.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_002_9ebef8150c5e.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_003_629322672d35.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_004_4c6374d4acba.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_005_3a0ffd2eb481.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_006_5c06c5c94d27.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_007_ee8021012be8.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_008_a0080afb1293.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_009_6ad43531a6cc.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_010_b0d8b77a62de.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_011_02f1643551b8.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_012_c533f743f25e.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_013_48f308265003.png)

![](SiC_MOSFET并联使用时的发振对策_images/img_014_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](SiC_MOSFET并联使用时的发振对策_images/img_015_3ade3c3d8599.jpg)![](SiC_MOSFET并联使用时的发振对策_images/img_016_84aa944feb13.jpg)