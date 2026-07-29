# 【H桥电机驱动电路原理】-学习笔记

原创 电路一点通 2025-05-15 11:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/zt1gtYzzdtYm6G2IJpEn-g](https://mp.weixin.qq.com/s/zt1gtYzzdtYm6G2IJpEn-g)

## 工作原理 

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_H桥电机驱动电路原理__学习笔记_images\img_000_0227799cfefb.png)

##  电路分析

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_H桥电机驱动电路原理__学习笔记_images\img_001_59c4de96c9d2.png)

这是一个由晶体管构成的 H 桥电机驱动电路 ，以下是对其各部分的介绍：

### 核心器件

-   **晶体管**
    
    ：电路中使用了 PNP 型的 SS8550（Q5、Q6 ）和 NPN 型的 SS8050（Q9、Q10、Q13、Q14 ）。通过不同晶体管的导通与截止组合，实现电机两端电压极性的切换，进而控制电机正反转。比如，当 Q5 和 Q10 导通，Q6 和 Q9 截止时，电流从 Motor L + 流入电机，从 Motor L - 流出，电机朝一个方向转动；反之则反转。
    
-   **二极管（SS14）**
    
    ：D6、D7、D14、D15 为续流二极管。在电机绕组电流突变时（如晶体管关断瞬间），绕组会产生反电动势，续流二极管为该反电动势提供泄放回路，防止过高电压击穿晶体管等器件 ，保护电路。
    

### 电阻

-   **偏置电阻**
    
    ：像 R46、R47、R67、R68 等阻值为 10K 的电阻，用于为晶体管基极提供合适偏置电压，确定晶体管工作状态（放大、饱和导通等） 。例如通过调整基极电流，让晶体管工作在饱和区，实现开关功能。
    
-   **限流电阻**
    
    ：如 R56、R57、R66、R69 等 3.3K 电阻，限制流入晶体管基极的电流，避免过大电流损坏晶体管，同时也起到信号匹配和抗干扰作用。
    

### 电容

-   **C61（100nF）**
    
    ：起到滤波作用，滤除电源中的高频噪声，使 Motor\_5V 电源更加稳定，减少电源波动对电机驱动电路的影响 。
    

### 接口与电源

-   **Motor\_5V**
    
    ：为电机驱动电路提供 5V 工作电源。
    
-   **J3 接口**
    
    ：可能用于连接外部设备或对电路进行调试、测试等功能 。
    
-   **Motor L + 和 Motor L-**
    
    ：电机连接端口，用于连接直流电机，实现电机的驱动控制。
    

### 电机正转状态 

电机正转状态, L+高电平1, Q14置1, Q14三极管导通接地，这边Q10就是0V，那么Q10三极管肯定是断开的，所以当L+为高电平1时，Q5（L+也为1，又5v上拉，形成不了电压差，所以断开） 和 Q10断开；

电机正转状态， L+低电平0，Q14置0，Q14三极管断开，这边Q10就是置1（本来Q14断开也是0V，但是5v上拉变为高），那么Q10三极管就是导通的，所以当L+为低电平0时，Q5 （L+为0，5v上拉，形成电压差，所以导通）和 Q10导通；

#### 正转原理 

-   当想要电机正转时，可使 Q5 和 Q10 导通，Q6 和 Q9 截止 。此时，电流从电源 Motor\_5V 出发，经过 Q5、电机（从 Motor L + 流入 ）、再经过 Q10 回到地（GND ） 。这样的电流流向会使电机按一个方向（定义为正转方向 ）转动 。因为电流按照特定的路径通过电机绕组，产生的电磁力方向驱动电机正向旋转。
    

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_H桥电机驱动电路原理__学习笔记_images\img_002_ee548beb9c45.png)

### 电机反转状态 

电机反转状态, L-高电平1, Q13置1, Q13三极管导通接地，这边Q9就是0V，那么Q9三极管肯定是断开的，所以当L-为高电平1时，Q6（L-也为1，又5v上拉，形成不了电压差，所以断开） 和 Q9断开；

电机反转状态， L-低电平0，Q13置0，Q13三极管断开，这边Q9就是置1（本来Q13断开也是0V，但是5v上拉变为高），那么Q9三极管就是导通的，所以当L-为低电平0时，Q6 （L-为0，5v上拉，形成电压差，所以导通）和 Q9导通；

#### 反转原理 

-   若要电机反转，需让 Q6 和 Q9 导通，Q5 和 Q10 截止 。电流路径变为从电源 Motor\_5V 出发，经过 Q6、电机（从 Motor L - 流入 ），再经过 Q9 回到地（GND ） 。由于电流在电机绕组中的流向与正转时相反，产生的电磁力方向改变，从而驱动电机反向旋转。
    

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

-   ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_H桥电机驱动电路原理__学习笔记_images\img_003_fb0adb39cdaa.png)
    
    [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_H桥电机驱动电路原理__学习笔记_images\img_004_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[硬件电路设计方案策略-大电容+小电容](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546549&idx=1&sn=59e47ad9cd79ed9cd7a9cd5dcb87741f&scene=21#wechat_redirect)**
    
-   **[PFC电路，图腾柱PFC电路,电感电流的三种模式](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544805&idx=2&sn=6e8a4f1574410ed4332e97823928f8ee&scene=21#wechat_redirect)**
    

-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)【资料可领取】  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)【资料可领取】
    
-   [西门子PLC高级应用实例精解\_第2版-368页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257003&idx=2&sn=c2313e1bec3e59a63fa08faea4ca528d&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    
-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    

**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_H桥电机驱动电路原理__学习笔记_images\img_005_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**

分享💬点赞👍在看❤️