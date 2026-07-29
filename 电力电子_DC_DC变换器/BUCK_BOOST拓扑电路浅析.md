# BUCK-BOOST拓扑电路浅析

原创 电路一点通 2025-01-07 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/rAgGaIpOrqA0p\_R9mPiM9A](https://mp.weixin.qq.com/s/rAgGaIpOrqA0p_R9mPiM9A)

BUCK-BOOST 电路是一种常用的 DC/DC 变换电路，其输出电压既可低于也可高于输入电压，但输出电压的极性与输入电压相反。下面我们详细讨论理想条件下，BUCK-BOOST 的原理、元器件选择、设计实例以及实际应用中的注意事项。

▼ **往期精彩回顾** ▼  

    
-   [👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [宝马B系列汽车发动机技术跨越:B48和B58区别对比](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247504939&idx=1&sn=a9ac59e28f3cdd2ec10b319ad030e087&token=1130209416&lang=zh_CN&scene=21#wechat_redirect)
    
-   [新能源汽车小三电组成部分及其功能 ‌](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247504223&idx=1&sn=12b5c8c08d2a5d3e5dbd546437aff4fe&scene=21#wechat_redirect)
    
-   [新能源汽车三电系统维修手册ppt](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247504129&idx=1&sn=95eccecac34e1bb07304fd88a3a6390f&scene=21#wechat_redirect)
    
-   [硬件10年经验，如何年入100万  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537308&idx=1&sn=541be143989d4c6f5b1fb1fb40690503&scene=21#wechat_redirect)
    
-   [MOS管导通、电路、应用工作原理图文（完整详解）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536956&idx=1&sn=60fa672ada6011024c0a79b47e99babf&scene=21#wechat_redirect)
    

  

**BUCK-BOOST 电路原理**

BUCK-BOOST 电路简图如图 1。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_000_e557e1bf1091.png)

当功率管 Q1 闭合时，电流的流向见图 2 左侧图。输入端，电感 L1 直接接到电源两端，此时电感电流逐渐上升。导通瞬态时 di/dt 很大，故此过程中主要由输入电容 CIN 供电。输出端，COUT 依靠自身的放电为 RL 提供能量。

当功率管 Q1 关断时，电流的流向见图 2 右侧图。输入端 VIN 给输入电容充电。输出端，由于电感的电流不能突变，电感通过续流管 D1 给输出电容 COUT 及负载 RL 供电。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_001_99cd42cf0f84.png)

BUCK-BOOST 元器件计算及各点波形（电感电流连续模式）以下均在电感电流连续模式下讨论，即 CCM。

首先我们先看一下各点理想情况下的波形：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_002_c5dad51a5e02.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_003_3b44c52678a6.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_004_8cc06aa6ee8e.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_005_26c5f5e4505d.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_006_9028527b6c4e.png)

  

**注意事项**

1\. 芯片与肖特基二极管 D1 的耐压均要大于输入电压与输出电压绝对值之和；

2\. CINB 与 C1 为芯片提供纯净电源，CINB 可以选用 10uF 以上电容即可；

3\. 芯片的 GND 引脚与输入、输出功率地不是同一属性，注意区分；

4\. BUCK-BOOST 电路的效率要低于单纯的 BUCK 或 BOOST 电路，实际使用时要注意多留余量。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_007_bd15a224da26.png)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK_BOOST拓扑电路浅析_images\img_008_a8b37a87b291.other)  

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！