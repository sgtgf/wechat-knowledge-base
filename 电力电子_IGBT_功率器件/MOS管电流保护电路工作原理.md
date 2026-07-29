# MOS管电流保护电路工作原理

原创 电路一点通 2025-03-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/IpMriTIl6lLJoKl81sRfQQ](https://mp.weixin.qq.com/s/IpMriTIl6lLJoKl81sRfQQ)

**我们先来看它的****电路工作原理**

**初始状态**  
当电路上电后，由于 R97 和 R99 的分压， Q63 的基极电压被拉高，处于截止状态。此时，MOS 管 Q62 的栅极电压接近源极电压（+24V），由于栅源电压 Vgs 小于阈值电压（因为稳压二极管 D28 的存在，栅极电压被钳位在约 + 12V），MOS 管处于截止状态，输出端 OUT 无输出。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_000_7f0ae708affe.jpg)

-     
    

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_002_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_005_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_004_659969ac15d4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_003_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_001_659969ac15d4.png)****  

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_006_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

**导通状态**  
当 Q63 基极施加一个低电平信号（例如通过外部控制电路）时， Q63 导通，其集电极电压被拉低。此时，MOS 管 Q62 的栅极电压通过 R98 接地，栅源电压 Vgs 大于阈值电压，MOS 管导通，电源通过 MOS 管向负载 RL 供电，输出端 OUT 输出 + 24V 电压。

**那又是怎么****保护****电路的呢？**

电阻 R95 为检流电阻，阻值为 0.7 Ω。当负载电流超过 1A 或者输出短路时，检流电阻 R95 两端的压降会超过 0.7V。此时，Q63 处于饱和状态，其集电极与发射极之间的饱和压降约为 0.3V，由于三极管的发射级和集电极是和 MOS 的源极和栅极并联的，所以此时 MOS 管 Q62 的栅源电压被钳位在 0.3V 左右，Vgs 不再满足开启条件，PMOS 管 Q62 关闭，切断后级输出，从而可以有效保护负载和后级电路。

  

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

近期资料（直接领取）👇

-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   [DSP 片上串行通信外设各模块的功能、 结构特点、 工作方式](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541116&idx=3&sn=839f51ef9d09338d2d452aed16713b88&scene=21#wechat_redirect)
    
-   [高效微逆变器设计（原理图+程序+上位机等）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=2&sn=8fcb9c897e4cc82906451def4a597f1b&scene=21#wechat_redirect)
    
-   [集成运放--波形变换电路设计（附Multisim资料）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540754&idx=2&sn=8e65952fa25cdf9b648071cc07b62c6c&scene=21#wechat_redirect)
    
-   [AC-DC 非隔离电源方案在硬件设计开发](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540115&idx=2&sn=7f5b13e92717890284436fd0e21fd948&scene=21#wechat_redirect)
    
-   [ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&scene=21#wechat_redirect)
    
-   [图表细说元器件及实用电路362页](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539497&idx=2&sn=2b675f61f20c00929a3e00218819c13a&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电流保护电路工作原理_images\img_007_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**