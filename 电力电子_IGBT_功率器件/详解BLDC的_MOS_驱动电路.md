# 详解BLDC的 MOS 驱动电路

原创 电路一点通 2025-03-24 11:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/Rpd9a-siWMPb-e\_u8hsyiw](https://mp.weixin.qq.com/s/Rpd9a-siWMPb-e_u8hsyiw)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_000_bc9c5bf4f3d0.jpg)直流无刷电机驱动电路

****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_004_dd7fd498567c.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_002_dd7fd498567c.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_003_dd7fd498567c.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_005_dd7fd498567c.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_001_dd7fd498567c.png)****  

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_006_242ed73b831f.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

BLDC 的功率级驱动电路通常由 6 个 N 沟道功率 MOS 管构成三相全桥。这 6 个 MOS 管分为两组，三个高边 MOS 连接电源正极（VBus），三个低边 MOS 连接电源负极。通过控制 MOS 管通断，实现电流在电机绕组中分配，推动电机运转。

单个 NMOS 开通时，需瞬间提供电流为内部寄生电容充电。栅源电压（VGS）达到阈值，MOS 管开启。MOS 管开通后，需维持 VGS 保持导通状态，使电流为电机提供动力。

低边 MOS 管源极（S）接电源负极，栅源电压易满足，驱动简单。而高边 MOS 管的源极连接到电机相线，其电压时刻处于动态变化之中，不确定因素较多。若要开通高边 MOS 管，就需要借助自举电路来提供合适的栅极电压，这一过程涉及复杂的电路设计和信号处理，驱动难度大。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_007_de4597df2ceb.jpg)

一般情况下，MOS 管的导通内阻会随着 VGS 的增大而降低。当 VGS 处于 10 - 15V 时，MOS 管能够达到最小的导通电阻（RDSON）。此时，电流在电路中传输时的能量损耗大幅降低，从而提高了整个驱动电路的效率。

控制器通过控制 6 个 MOS 管通断，实现 BLDC 换相，调节电机转速、转向，满足不同应用需求，如电动汽车的加减速与能量回收。电机运转中若堵转引发过流，MOS 驱动电路能检测并切断电路，保护控制器和电机，确保系统运行。

  

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\详解BLDC的_MOS_驱动电路_images\img_008_d0741a682fda.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**