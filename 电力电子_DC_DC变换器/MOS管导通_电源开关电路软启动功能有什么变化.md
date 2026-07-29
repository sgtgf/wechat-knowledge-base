# MOS管导通，电源开关电路软启动功能有什么变化

原创 电路一点通 2024-07-11 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/zhJmkYHo\_p-wOT3VzYMC9A](https://mp.weixin.qq.com/s/zhJmkYHo_p-wOT3VzYMC9A)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_000_327d89c96328.jpg)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_001_656cfa07bd8f.other)  

这是没有做软开启的电源电压，上升时十分陡峭。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_002_3bce74762628.png)

这是加入了软开启，上升沿变得平缓。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_003_f3743c2ed237.png)

而只要增加一个电容和一个电阻，就能实现电路的软启动功能.

当一个电源电压为5V时，负载为一个大容量电容，电源会瞬间开启，让电压瞬间上升达到5V，此时电容充电电流会非常大。如果将这个电源电压上升到2.5V，这个电流就会小很多，这个时候就需要软启动了。  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_004_ba1b41d5076d.png)

带软开启功能的MOS管电源开关电路

  

软启动：让电源缓慢开启，以限制电源启动时的 浪涌电流。

分享一个网上看到的电路，它是利用电容C1的充电时间让MOS管导通，然后实现了软开启的功能。  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_005_93267742f8c6.png)

【图1：框图中1个MOS管符号代表1个完整的MOS管电源开关电路】

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_006_72f7b1a9c50a.png)

【图2：电容C1、电阻R2实现软开启（soft start）功能】

当输入信号为低电平或者高阻时，电源+5V上电，Q2基极被拉低到地，三极管关闭，随后MOS管Q1关闭。

这是因为电源+5V还不稳定，电源无法打开向后级电路输出。

此时电源+5V刚上电，MOS管的G极和S极同等电势，也就是说Vgs=0，Q1关闭。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_007_17e35cffca07.png)

这里的R4电阻的作用是当输入信号为高阻时，避免Q2浮空。

当电源上电完成后，GS两端都为5V，Vgs保持为0

此时将输入信号设为高电平，大概3.3V，Q2的基极为0.7V，电流为0.26mA：

(3.3V - 0.7V) / 基极电阻R3 = 0.26mA

当Q2饱和导通，Vce≈0；

电容C1通过电阻R2充电，C1与G极相连端的电压由原本的5V缓慢下降为0V，Vgs电压逐渐增大；Q1MOS管缓慢打开，最后完全打开，Vgs=-5V，实现软开启。

这是MOS管打开时的电流流向：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_008_7c8474ae2327.png)

电源打开后，+5V\_OUT 输出为5V电压。此时将 Control 设为低电平，三极管Q2关闭，电容C1与G极相连端通过电阻R2放电，电压逐渐上升到5V，起到软关闭的效果。软关闭一般不是我们想要的，过慢地关闭电源，可能出现系统不稳定等异常。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管导通_电源开关电路软启动功能有什么变化_images\img_009_b9b00fdb760b.other)

**推荐资料**

[\[电子电路识图入门\]450页-PDF-图文版](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)

[电源管理指南（85页）-PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)

[开关电源设计指南(216页).PDF资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526059&idx=2&sn=895b85e82c8d767bb6905914061aba0c&chksm=fcef85c9cb980cdf67633e78906081fc53dcb3ee923dd607f671e5ac84a2093b6b2464dbdc5f&scene=21#wechat_redirect)

[图解PLC技术一点通（247页）.pdf-文档技术资料](http://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456244193&idx=2&sn=9ec65a40e604d06494e5fd3c0bd8a3d9&chksm=87c10d27b0b6843162381633c9df33bf90f29c58eeaf0dacd49bdce582b0bea4450e0d75b074&scene=21#wechat_redirect)

[汽车动力总成系统-全面综合的概述分析](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486489&idx=2&sn=39da2ef90eb02e3dd1b3c46473f41617&chksm=c33e74a5f449fdb35bd02e6c9a54d02155b5ff993131b095721ecf23829d9570bc5b22867db8&scene=21#wechat_redirect)  

当电容容量越大，电压越高，时间越短，电流就会越大，浪涌电流就会形成。

而这个电路利用电容C1的充电时间实现了MOS管Q1 的导通，实现了软开启的功能。

不过大电容只是形成浪涌电流的原因之一，其他负载也会引起浪涌电流。