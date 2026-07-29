# 电路分析：四开关buck-boost双向同步DC/DC变换器方案

原创 电路一点通 2025-03-18 11:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/fa7m5p\_Ka6kusDh-YuSfEg](https://mp.weixin.qq.com/s/fa7m5p_Ka6kusDh-YuSfEg)

1.概述

  

4开关降压升压双向DC-DC电源转换器在很多应用中都有使用。作为一个同步降压或同步升压转换器，其中只有两个开关切换，开关损耗减少到一半。只有当直流母线和电池电压彼此接近，然后转换器作为一个同步降压-升压转换器，其中所有四个开关切换。

  

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_000_94a18f800ff6.png)

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_001_bc38ccc91e77.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

典型应用：

1.本地储能系统；

2.备用电池单元(BBU)；

3.DC-DC非隔离应用。

  

2.系统框图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_002_5e7b13b71afd.png)

3.方案功能描述

1.多模式控制，降低开关损耗，实现高效率；

2.兼容锂离子和锂聚合物电池的内置电池充电CC-CV-Top算法；

3.从充电到备用电源模式的超快速切换，可在断电时实现无缝电源传输；

4.直流母线电压可以高于或低于蓄电池电压；

5.蓄电池过压、过流保护；

6.直流母线过电压保护；

7.UCD3138数字电源控制器解决方案为未来更新提供可编程性和可配置性；

  

4.性能参数

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_003_006b47d45b8a.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_004_53411e2de328.png)

5.系统描述

  

备用电池和电力存储系统在不间断电源系统(UPS)、服务器、电信整流器和电力线通信（PLC）系统等许多工业应用中发挥着重要作用。这些应用使用各种各样的储能元件，如超级电容器、铅酸电池、锂离子和锂聚电池。

  

典型的备用电池储能系统有以下模块：

1.从电源为电池充电的电池充电器子系统。

2.电池放电子系统，用于从电池向负载供电。

3.电池管理解决方案)系统来监控和保护电池。

  

典型电池备份系统的框图如图所示。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_005_1be790b70ab6.png)

电池充电器子系统从直流总线获取电力并对电池组进行充电。蓄电池放电子系统从蓄电池组获取电能，并将其反馈到直流母线。

  

在正常工作条件下，电池备用系统从直流母线汲取能量，为电池组充电，而电池放电系统保持不活动状态。当直流母线输入电源故障时，蓄电池放电系统立即开始向直流母线供电。在此期间，电池充电器系统保持不活动状态。

  

降低电池备用子系统的成本和尺寸的一种方法是使用单个双向功率转换器来进行电池充电和备用电源操作。当与使用两个单独的功率级的实施电池备份系统的传统安排相比，一个单一的双向功率级实施显着减少了组件的数量。

  

使用单个双向功率级的另一个好处是，可以非常快速地实现从充电到放电的模式转换，这可以减少DC总线处的大容量电容器(保持时间)要求。

  

有许多拓扑结构可用于蓄电池备用子系统。电池电压从最低充电到完全充电的范围很广。为了获得更好的效率，电池组的选择应使电池额定电压等于直流母线电压。这意味着充电器的输出电压在电池最小充电时低于输入电压，在电池完全充电时高于输入电压。因此，充电器需要在电池最小充电时提供降压功能，当电池完全充电时需要提供升压功能。另一方面，当工作在备用模式时，转换器需要在电池完全放电时提供升压功能，在电池最小放电时提供降压功能。

  

PMP 21529的设计是这样一个双向的DC-DC功率转换器，专门为电池后备系统设计，电池电压范围超过直流母线电压。

  

该设计可以从直流母线对锂离子电池组进行充电。当主电源关闭时，设备将从锂离子电池组无缝地将电源传输到DC母线。本设计是基于UCD3138数字控制器控制的4开关降压升压级。根据直流母线电压和电池电压的不同，变换器可以作为同步降压变换器或同步升压变换器工作，其中只有两个开关管进行开关，开关损耗减少了一半。只有当直流母线和电池电压非常接近，然后转换器作为一个降压-升压转换器，其中所有四个开关切换。

  

4开关桥功率级实现高驱动电流，快速开关栅极驱动器UCC27211A和IPB180N08S402ATMA1功率MOSFET。设计工作频率在140kHz。

  

6.原理描述

  

6.1 充电模式：直流母线电压>蓄电池电压

当直流母线电压高于电池电压时，Q3完全打开，Q4完全关闭。Q1和Q2分别由在电池充电模式下，D和1-D控制，变换器成为同步降压变换器，如图所示。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_006_59d5a71c745d.png)

6.2 充电模式：直流母线电压<蓄电池电压

在电池充电模式下，当直流母线电压低于电池电压时，Q1完全打开，Q2完全关闭。Q4和Q3分别由D和1-D控制，变换器成为同步升压变换器，如图所示。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_007_1e63e20c7d4f.png)

  

6.3 充电模式：直流母线电压=蓄电池电压

在蓄电池充电模式下，当直流母线电压接近蓄电池电压时，Q1和Q4由D控制，Q2和Q3由1-D控制。转换器成为同步降压一升压转换器，如图所示。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_008_b86738f7670b.png)

6.4 备用模式：直流母线电压>蓄电池电压

在备用模式下，当直流母线电压高于蓄电池电压时，Q3完全开启，Q4完全关闭。Q2和Q1分别由D和1-D控制，变换器成为同步升压变换器，如图所示。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_009_a647a690cf5c.png)

6.5 备用模式：直流母线电压<蓄电池电压

当直流母线电压低于蓄电池电压时，Q1被完全打开，Q2被完全关闭。Q3和Q4分别由在备用模式下，D和1-D控制，变换器成为同步降压变换器，如图所示。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_010_510c08576881.png)

  

6.6 备用模式：直流母线电压=蓄电池电压

在备用模式下，当直流母线电压接近蓄电池电压时，Q2和03由D控制，Q1和Q4由1-D控制。转换器成为同步降压一升压转换器，如图所示：

  

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_011_9bf254a26fb7.png)

6.7 运行模式与直流母线电压和蓄电池电压的关系

在电池充电和备用模式下，4开关功率级根据直流总线和电池电压改变其工作模式，如图所示。为了防止模式反弹，在降压和降压-升压模式之间以及降压-升压和升压模式之间添加了滞后。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_012_09fbd79a2089.png)

6.8 电池放电原理

PMP21529是为使用锂离子电池而设计的。锂电池充电器必须在恒流(CC)或恒压(CV)模式下工作。初始充电是在一个恒定的电流和电池端电压稳定地增加到几乎全电压。此时电池的电量约为85%。这部分周期约占总周期时间的40%。然后充电器改变到恒定电压，以提供剩余的20%左右的电荷。当电流降低到额定电流的3%到5%之间时，就达到了完全充电。 这种电池没有“浮动”充电阶段，而是在端电压下降时定期充电。过充会损坏电池。图显示了锂离子电池通过恒流、恒压和充电阶段时的电压和电流信号。![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_013_b25e07021d74.png)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路分析_四开关buck_boost双向同步DC_DC变换器方案_images\img_014_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[汽车空调系统结构与工作原理图解](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247515073&idx=1&sn=96fcb0b841e14231cda2c904525d220c&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[汽车智能驾驶产业链黄金图谱（核心供应商装机量一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247515138&idx=1&sn=0f38bfb1239ab3c11a2f4ecedebe916d&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[新能源汽车电池供应商以及2025（2）全球装车量排名一览表](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247515173&idx=2&sn=7f5080c41e4c2fdc65fbec56d5878161&scene=21#wechat_redirect)**
    

-   [  
    ](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)[4 种电控界MOS管驱动电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541972&idx=2&sn=104858527137b78e803bb5414fd01cbf&scene=21#wechat_redirect)
    
-   [  
    ](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)[硬件设计几种常用经典电路，为软件开发打硬件基础](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=1&sn=9d1be8a790eaa9edc45a8d8cfeaa04ec&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️