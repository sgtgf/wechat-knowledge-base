# MOS管在电路中实现隔离（单向导通）

原创 电路一点通 2024-08-19 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/pB2RR96qNho6ZNcMTjosng](https://mp.weixin.qq.com/s/pB2RR96qNho6ZNcMTjosng)

MOS管在电路中实现隔离功能，避免前一极电流漏到后级电路，确保电路系统正常工作。笔记本电脑供电中，PQ70起隔离作用，分隔适配器和电池，实现电源无缝切换。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中实现隔离（单向导通）_images\img_000_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******

  

MOS管的隔离功能，隔离作用在哪？

选择MOS管来做隔离的好处就是，不会产生压降**。**

**本质上来讲**，**隔离就是实现电路的单向导通，那它隔离作用在哪里？**

其实就是担心前一极的电流漏到后边的电路，对电路系统的上电时序，处理器或逻辑器件的工作造成误判，最终导致系统无法正常工作。

因此，在实际的电路应用中，隔离作用是十分重要的。

**以下的电路来看看是如何实现隔离作用的？**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中实现隔离（单向导通）_images\img_001_e55b3e562437.jpg)

（笔记本电脑供电）

1.  **连接适配器**
    
2.  **这里的PQ66是一个PMOS管，当连接适配器（19V）时，PQ66截止，G极电压=S极电压=19V。**
    
3.  **接入适配器的同时接入电池，PQ70导通，栅极电压为0。**
    

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中实现隔离（单向导通）_images\img_002_4ded05b59102.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中实现隔离（单向导通）_images\img_003_2140a6ebb997.other)

1.  **PQ6的栅极接入5V**
    

PQ6导通，G极电压大于源极电压。此时PQ62和PQ66也导通，PQ70的栅极电压为19V，PQ70截止，电池不再供电。

**PQ70起隔离作用。**

**我们知道，笔记本电脑供电会有三种情况：**

\-只用适配器供电

\-只用电池供电

\-适配器和电池同时供电

笔记本主板上的隔离，就是将适配器和电池分隔开，**避免它们直接相通**，但又能在拔除任意一种电源时，保证电脑能够持续供电，**实现电源无缝切换**。

## **一点通推荐**

  

-   [充电器电路：二极管电阻串并联及串联分压实例解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518534&idx=1&sn=8f1f8c9fa06fed821207846718d1e6eb&chksm=fcef6a24cb98e332d8485aa6fd3762eda0c15c403c15f20bdee8006377d12ce15dd1a18dc783&scene=21#wechat_redirect)    
    
-   [看懂电路图真正理解电流回路是关键](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518533&idx=1&sn=e3193b975431b7a77d23761674d728e7&chksm=fcef6a27cb98e331b733987e744949a540acc1b495705e1bc9e9dd11196a435556b0429c2d32&scene=21#wechat_redirect)    
    
-   [测量交流电的电压、电流和功率方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518417&idx=1&sn=4d287f2c0da25ef1c163f2dd15a9e3be&chksm=fcef6bb3cb98e2a5ff50892e5a21866c93f8dccac12957bac03c98d63cb1550e247a16d56e2a&scene=21#wechat_redirect)    
    
-   [MOS管开关电路实例、功耗计算](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518278&idx=1&sn=f25b08d3ef5b563b5d187dd66a086b33&chksm=fcef6b24cb98e232c20cd1e8bb5d76ee95a7393ca1cdbce8d14bc088437344aa0be9309fd206&scene=21#wechat_redirect)    
    
-   [就是要轻松：看图学电子元器件（双色版）工具书](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528474&idx=2&sn=f870c94e9b6166cee3677230234f97d4&chksm=fcef9378cb981a6eaf5920bbfe6877ac22161b8e1945907161dd7dcdbb508a4f1ee8247e0e0d&scene=21#wechat_redirect)