# 恒电流二极管的LED驱动电路设计方案

原创 电路一点通 2024-08-29 11:37 广东

> 原文地址: [https://mp.weixin.qq.com/s/EMEC07fw6\_CTLwGwnDN8fA](https://mp.weixin.qq.com/s/EMEC07fw6_CTLwGwnDN8fA)

**目前**  

1.恒电流二极管特性

2.阻容降压驱动电路

3.全波整流驱动方案

4.恒电流二极管的相关问题

结束语

　　当前LED照明正逐渐兴起，其具有体积小、功耗低、寿命长、节能环保无污染等特征。LED是电流驱动器件，其亮度与正向电流成正比，为保证LED发光高效均匀、LED驱动源应为恒电流输出。而目前照明市场上的LED驱动电路设计多数存在电路复杂、效率不高、电路成本高等特点。本文根据恒电流二极管的特性，针对LED照明中的小功率和大功率LED的不同特性，分别给出了驱动电路设计。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\恒电流二极管的LED驱动电路设计方案_images\img_000_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******

　　**1.恒电流二极管特性**

　　恒电流二极管(CRD)是一种硅材料制造的基础电子器件。正向恒电流导通，反向截止，输出恒电流。器件按极性接入电路回路中，回路即可达到恒流的效果，应用简单，实现了电路理论和电路设计中的二端恒流源。本文驱动电路设计中使用的是2DHL系列恒电流二极管。2DHL系列为二端器件，图1为2DHL系列恒电流二极管输出特性曲线，图2为恒电流二极管的实际测量曲线图。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lcIHrnKREWIcIhN20MwwpHxS5rp0qKOCPAXliaE1B7Xbe67pjaztVBBFiceYtBVAcSOJRETiaKBlbLdw/640?wx_fmt=jpeg&from=appmsg "恒电流二极管特性曲线")

　　图1 恒电流二极管特性曲线

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lcIHrnKREWIcIhN20MwwpHxdj0h1aqpSkJtO9CWv4Y9nILvz6QEqAzAtA0PSzysEdZCTbNW8Fw0Sg/640?wx_fmt=jpeg&from=appmsg "恒电流二极管实测曲线")

　　图2 恒电流二极管实测曲线

　　**2.阻容降压驱动电路**

　　目前小功率的LED照明主要集中在LED工作电流为18-30mA的LED照明应用，灯具的功耗在1-5w，针对其特点，下面给出基于阻容降压的LED驱动电路设计，该方案设计方法灵活，可根据负载的需要灵活的配置。

　　LED照明方案采用交流市电220V供电，须经过转换将高电压的交流电转换为低压直流电，目前降压电路主要有工频变压器线性降压、高频开关电路、基于C的降压电路、阻容降压电路等几类。由于恒电流二极管的工作特性，其受电压波动影响小的特点，结合驱动电源的体积与成本等因素，采用阻容式降压电路变得可行4。图3为采用恒电流二极管的阻容降压驱动电路：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lcIHrnKREWIcIhN20MwwpHx6vluU3O2pNxUlZ0Qg121Nz5phiaSSb6EIrL2OHSdpp4YuPLDr1Z2z8w/640?wx_fmt=jpeg&from=appmsg "阻容降压LED驱动电路")

　　图3 阻容降压LED驱动电路

　　驱动电路中C1为降压电容，电容降压电路输出电流主要与降压电容容量和输出电压有关，输出电压越高电流越小。为保证降压电容安全工作，其耐压值应大于2倍市电电压，所以降压电容宜选用耐压值630V以上的独石电容。表1给出了采用0.68-3.3F不同大小降压电容，驱动电路在不同电压下提供的电流以及能够驱动的LED负载数量，可根据负载需要灵活配置。

　　R1为放电电阻，当电路断电C1通过R1快速放电。IN4007二极管组成全波整流桥。电容C2为滤波电容，当滤波电容C2取4.7uF以上时可以保证电路滤波效果，同时也可以保证电路功率因数在50%以上。R2为滤波电阻。D1为瞬态二极管，其导通电压比负载电压略高，对电路中LED负载出现短路时进行保护，防止LED烧毁。

　　电路中D2为恒电流二极管器件，为负载电路提供恒定的电流，采用2DHL系列二端恒电流二极管，由于输出电流大，可以直接驱动负载，实现恒定电流电源。同时可根据负载的LED阵列的具体串并联情况，针对电路中电流的不同要求将恒电流二极管进行并联以提高电流。由于该系列恒电流二极管的工作电压范围较宽(25-100V),当市电进行波动时，恒电流二极管在耐压范围内一直是工作于恒流区域，对于负载电路的电流不会产生影响，保证了LED灯具有良好的工作环境，同时当负载LED出现短路断路情况时，电路中也有保护措施保证LED的安全。

　　**3.全波整流驱动方案**

　　采用阻容降压电路驱动小功率LED的设计，驱动负载的功耗低，配置灵活。除此外还可以采用全波整流电路驱动数量较多的LED照明应用方案，如采用小功率(20mA)LED灯珠进行串并联的L.ED日光灯，功耗在12-30W，图4给出基于恒电流二极管驱动的全波整流驱动电路设计。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lcIHrnKREWIcIhN20MwwpHxeWQH0rdB91j6qic9866JtIDSia4VHHUQHGGQLnfhle3ibkmREicTjwj9icQ/640?wx_fmt=jpeg&from=appmsg "全波整流直接驱动LED驱动电路")

　　图4 全波整流直接驱动LED驱动电路

　　电路中由220V市电供电，通过整流桥进行全波整流，经过一个无极电容的滤波，此处选用一个2.2uF，耐压450V的无极独石电容进行滤波。负载端连接串联有恒电流二极管的负载LED串联灯珠，串联的LED数量可以根据全波整流后的有效电压值进行计算。根据灯型需要，可以并联多组LED负载。

　　市电经整流桥进行全波整流后再通过无极电容的滤波，虽然滤波后的电压波形不是恒定直流，有一定的振荡，但是由于加入了恒电流二极管器件，当电路中的电压超过设定值时，恒流管处于恒流区域，对电路的电流进行限制，起到保护电路的作用，其波形图如图5所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lcIHrnKREWIcIhN20MwwpHxFnsiaNEtEeZYcf6Gic7AEO2utYAZB2b5KYd0kVuiaGg5icfnxUAuyjGBrA/640?wx_fmt=jpeg&from=appmsg "全波整流驱动电路电压仿真波形")

　　图5 全波整流驱动电路电压仿真波形

　　图中上下两个振荡的波形分别是负载回路中恒电流二极管前端和后端的电压波形图，从图中可以看出，虽然负载端的电压有振荡，但是由于接人了恒电流二极管，其电压进入恒流区后，多余的电压被恒流管吸收，实际后端的输出电压波形的振荡波形变缓了，从而使得电路中的电流限制在一个LED安全工作的范围内，起到了恒定电流的作用，其波形图如图6所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lcIHrnKREWIcIhN20MwwpHx1icP7MDmxWqebJ4YfsafgFbK5ee2KYliaibIatAkvqpHZbo6naMuriav2A/640?wx_fmt=jpeg&from=appmsg "全波整流驱动电路电流仿真图")

　　图6 全波整流驱动电路电流仿真图

　　此时LED负载端的电流控制在18-20mA之间工作，保证了LED能够正常安全的工作，其电流波形的小幅振荡不会造成光源闪烁。

　　恒电流二极管的工作电压范围较宽，当市电在合理范围内波动时(士30%)，电路电流处于恒电流二极管的恒流区域，不会出现负载电路电流过高烧毁LED的情况，对电路进行了有效保护。

　　由于市电可以提供-一个较大的电流，其负载可以根据需要进行并联，使得该驱动电路方案可以驱动功耗较大的负载，如LED日光灯。驱动电路中的每一组负载都用了一个恒电流二极管进行驱动，当某组支路LED出现短路或者短路时，不会对其它支路造成影响，保护了电路的安全，同时方便电路检修。

　　该方案在设计上简化了设计复杂度，成本大大低于采用开关电源的设计方案，同时其功率因数可以达到75%以上。由于采用开关电源以及阻容降压电源的驱动方案，保证了交流整流桥的收敛性。同时，由于没有采用电解电容滤波，而是采用寿命更长的独石电容进行滤波，保证了驱动电路的工作寿命与LED灯芯的寿命相匹配。这也解决了当前LED照明市场驱动电源寿命短，效率不高的问题。

　　**4.恒电流二极管的相关问题**

　　**4.1什么类型的二极管保持恒定电流?**

　　**电流调节二极管(CRD)是在电压波动的情况下保持恒定电流流动的器件。**这些二极管由一个栅极与源极短接的n沟道组成，其功能类似于一个两端限流器或类似于限压齐纳二极管的电流源。

　　**4.2齐纳二极管是恒流器件吗?**

　　**齐纳二极管就像一个通用的信号二极管**。当正向偏置时，它的行为就像一个正常的信号二极管，但是当向它施加反向电压时，电压在很宽的电流范围内保持恒定。

　　**4.3恒流二极管是如何工作的?**

　　恒流二极管**由结型场效应晶体管制成，**这是一种最简单的三端半导体晶体管，其功能类似于限流器。它们允许流过它们的电流上升到某个点并稳定在一个特定值。

　　**4.4二极管能调节电流吗?**

　　电流调节二极管将流过它们的电流调节到最大水平，如果电流超过其电流调节点，它会降低其电压。恒流二极管类似于结型场效应晶体管(JFET)，其栅极端子与源极短路。

　　**4.5为什么要使用恒流?**

　　恒流源是一个非常有价值的组件，因为即使电阻发生变化，**即使电阻变化很大，它也可以提供稳定的电流。**当电路需要稳定的电流供应而没有波动时，就会使用它。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\恒电流二极管的LED驱动电路设计方案_images\img_007_b0c2cdfb0092.other)

  

## **一点通推荐**

  

-   [**电路识图从入门到精通-PDF（312页）**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [**反激开关电源基本原理和电路拓扑**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [**电子工程师必备-九大系统电路识图宝典.pdf(702页）**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [**【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [**看图学集成电路选用检测与查用100问(pdf 302页）**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)
    
-   [**实 用 电 路 手 册（pdf-661页）-设计参考、维修学习**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [**9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)
    
-   [**常用电子元器件识别与检测（166页）.ppt资料**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [**PCB设计参考:《PADS电路板设计超级手册》.pdf**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
    [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)
    
-   [**华为2024届校园招聘【硬件开发/设计工程师】试题-附答案**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)[**常用电子元器件识别与检测（166页）.ppt资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&token=1742542462&lang=zh_CN&scene=21#wechat_redirect)
    
-   [**光伏逆变器详细介绍(完整版)PPT. 资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526592&idx=2&sn=7feb32c6215f20313aee4de98d328778&chksm=fcef8ba2cb9802b41270bc9fcc2d484d30149ed75288f496091e24c4239e5315cfe48150dea0&scene=21#wechat_redirect)    
    
    
-   [**\[电子电路识图入门\]450页-PDF-图文版**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)[**电源管理指南（85页）-PDF文档**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)[**【华为】防护电路设计规范\_55页.文档资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&chksm=fcef85adcb980cbb95db2e91177eeb03e4dc2dfcddf7021dc2d0d3a2321a91164236e9575840&scene=21#wechat_redirect)
    
-   [**电子工程师必备-关键技能速成宝典（692页）.pdf**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)[**开关电源设计指南(216页).PDF资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526059&idx=2&sn=895b85e82c8d767bb6905914061aba0c&chksm=fcef85c9cb980cdf67633e78906081fc53dcb3ee923dd607f671e5ac84a2093b6b2464dbdc5f&scene=21#wechat_redirect)
    

  
  

　　**结束语**

　　以上基于恒电流**二极管**的LED驱动电路设计介绍了。该方案在设计上简化了设计复杂度，成本大大低于采用开关电源的设计方案，同时其功率因数可以达到75%以上。由于采用开关电源以及阻容降压电源的驱动方案，保证了交流整流桥的收敛性。同时，由于没有采用电解电容滤波，而是采用寿命更长的独石电容进行滤波，保证了驱动电路的工作寿命与LED灯芯的寿命相匹配。这也解决了当前LED照明市场驱动电源寿命短，效率不高的问题。