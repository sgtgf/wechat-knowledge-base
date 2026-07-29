# 模拟芯片驱动的无桥PFC驱动故障检测电路

原创 小名同学 电路一点通 2025-07-29 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/8bCw05nHsLukC3PD1xgLfw](https://mp.weixin.qq.com/s/8bCw05nHsLukC3PD1xgLfw)

本篇是朋友撰写的文章，由于朋友最近打算做由模拟芯片驱动的无桥PFC，因此不得不把目光放在瞻芯电子的IVCC1102上，由于篇幅有限该篇主要讲解官方驱动故障检测电路。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\模拟芯片驱动的无桥PFC驱动故障检测电路_images\img_000_a632c96fbf6d.png)

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\模拟芯片驱动的无桥PFC驱动故障检测电路_images\img_001_60d05a12d6a1.png)

由上图SIC驱动电路可以看出驱动PWM信号是GD\_HF\_UP和GD\_HF\_DN，经过SI8621BC-B-IS光耦再到栅极驱动芯片IVCR1401上。IVCR1401 是一款高速4A 拉、灌电流的SiC MOSFET 和 IGBT 驱动芯片。它是包括负压生成，退饱和以及UVLO 设置的SiC MOSFET 和 IGBT 驱动器。使用IVCR1401栅极驱动芯片要注意一个问题就是禁止外接栅极下拉电阻；放置一个下拉电阻可能导致负压在不同的 PWM 占空比下偏离\-3.5V左右。

  
![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\模拟芯片驱动的无桥PFC驱动故障检测电路_images\img_002_118753db3d03.png)

本人把两路驱动单独整理出一路可为下图。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\模拟芯片驱动的无桥PFC驱动故障检测电路_images\img_003_653d229ae712.png)

该栅极驱动器芯片外围电路配置主要要注意的问题有以下几点：

1.退饱和电路。

2.欠压饱和输出提示电路。

需要注意的是这个欠压输出提示引脚（IFAULT ）是没有内部上拉电阻的集电极开路输出（OC门输出，便于外部检测芯片的电平匹配）。当检测到退饱及欠压时，IFAULT 引脚和OUT均被拉低。故障状态消除后，IFAULT信号将保持低电平10us，也可以看出这个是是纯开环。

由于是两路采用这种带有FAULT（欠压和饱和保护）的，因此把这两个信号在过一个光耦隔离后是如上图的FLT网络端口再经过一个与门再经过一个施密特触发器直接通过拉低触发关断该控制芯片的输出欠压保护使芯片关闭。具体如下图所示：

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\模拟芯片驱动的无桥PFC驱动故障检测电路_images\img_004_a2d74db29dcc.png)

UP和DN是欠压和饱和状态的两路输入信号，当处于1/0或0/1或0/0时候（两路有一路或两路出现Fault），与门的Y输出为0，Q1由导通变为不导通，CLK信号产生一个上升沿，D触发器的数据管脚输入数据（高电平），Q输出高电平，Q#输出低电平，Q2截止，Q3导通，VDC SEN CTR就被置低，VDC SEN CTR连接到芯片的输出欠压保护引脚，让起引脚电压拉低直接关闭芯片。

D触发器的功能是对Fault做了状态锁存，只有UP和DN都为1，且S1按键按下才会解除Fault模式。

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[中日半导体设备材料零配件厂商对比(附：名单一览）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550278&idx=1&sn=71a46b04ca5040b782bdbbc0fd274dd6&scene=21#wechat_redirect)**
    
-   **[市电电路设计：强抗干扰能力、过零检测](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247514198&idx=3&sn=fcdd4b05f07cb17172106ba7ce01e1bf&scene=21#wechat_redirect)**
    
-   **[新能源汽车品牌天梯图，遥遥领先还得是特斯拉？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524164&idx=1&sn=b2e2057c90f6d6ea0e1ba53a8f463662&token=915621150&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[插电式混合动力(增程式)电动汽车51页-pptx](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524086&idx=1&sn=c2defc36630c645e9a9ea25719097d0b&token=915621150&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[双色图解万用表检测电子元器件检测方法和技巧-329页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260532&idx=1&sn=d41eac8904bb5e30f2be07f7bc7eef56&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\模拟芯片驱动的无桥PFC驱动故障检测电路_images\img_005_4625a71759e3.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️