# 图腾柱PFC与有源桥PFC的方案对比

原创 电路一点通 2024-12-21 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/CH36fyi4TIU6orXU\_1y6Ng](https://mp.weixin.qq.com/s/CH36fyi4TIU6orXU_1y6Ng)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC与有源桥PFC的方案对比_images\img_000_9179f761325d.png)

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC与有源桥PFC的方案对比_images\img_001_ac6d85e0e2d9.other)

人们对于电源效率的要求越来越高，许多电源设计人为了提高效率绞尽脑汁想方法。NXP推出一款TEA2209T方案，TEA2209T是一款有源桥式控制器，用四个低阻抗高耐压MOS取代传统的四个二极管桥式整流器，如图1所示，做成一个像整流桥的module。因为消除了典型的整流二极管正向导通损耗，可显著提高电源转换器的效率。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC与有源桥PFC的方案对比_images\img_002_d5fa5f6260dc.jpg)

图1-有源桥PFC拓扑

TEA2209T的工作原理如下，AC正半周期时，启动GATELR和GATEHL，如图2所示；AC负半周期时，启动GATELL和GATEHR，如图3所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC与有源桥PFC的方案对比_images\img_003_b3fdde1f2c39.jpg)

图2-有源桥AC正半周期

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC与有源桥PFC的方案对比_images\img_004_ec913e460a43.jpg)

图3-有源桥AC负半周期

相比之下，图4所示的图腾柱PFC只有一个高频场效应管和一个低频硅场效应管在导通和关断状态下导通，图腾柱PFC需要最少数量的功率半导体元件来实现。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC与有源桥PFC的方案对比_images\img_005_ddfec5aa1359.jpg)

图4-图腾柱PFC