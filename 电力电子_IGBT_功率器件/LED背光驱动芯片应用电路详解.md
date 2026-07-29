# LED背光驱动芯片应用电路详解

原创 电路一点通 2025-03-01 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/TggRHw87m0ddLDVWjU0Ogg](https://mp.weixin.qq.com/s/TggRHw87m0ddLDVWjU0Ogg)

**一）简介：**  
RT9293 是一款高频、异步的 Boost 升压型 LED 定电流驱动控制器，其工作原理如下：  
**1）基本电路结构及原理**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_000_a5d41a8a36f7.png)

**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_001_ee6997ddabb5.other)**

**👆查看更多目录👆**  
RT9293的主要功能为上图的Q1.

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_002_6a96037bddd0.png)

Boost 电路核心原理：基于电感和电容的特性实现升压功能。当驱动信号使能，增强型 Nmos 管导通时，电感充电，电容两端电压为电源电压，二极管防止电容放电；当 Nmos 管截止时，电感放电，其电动势与电源串联使电容两端电压抬高，从而实现升压。  
**2) RT9293 内部电路结构：**  
内部集成了支持多达 10 只 WLED 串联的背光应用和 OLED 供电的 MOSFET，还内置了软启动功能以消除冲击电流。其工作在 1MHz 的频率下，允许使用小型的元器件，可简化 EMI 问题。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_003_1b1b37d662d1.png)  
**3) 工作过程**  
使能与参考电压产生：EN 引脚上升沿使能后，在 FB 端口会输出一个参考电压 VA，该参考电压可根据使能引脚的占空比来调。当输入 PWM 信号频率小于 500Hz 时，VA 是一个 PWM 信号；输入 PWM 信号频率大于 500Hz 时，VA 相当于一个直流信号。VA 经过一个推挽结构，将外部输入的 PWM 转换为同频同占空比的高电平为 300mV 的 PWM 波，然后经过一个低通滤波器得到。  
**1,电流控制：**  
提供给 LED 的电流由外部电流检测电阻 RSET 所确定，ILED = VSET/RSET。在确定好 RSET 的阻值之后，通过控制反馈电阻上端的电压就可以控制流过 LED 的电流。其可通过两种方式接入 PWM 波进行调光，一是 PWM 接入 EN 引脚，通过改变内部的参考电压来控制外部反馈电压的稳定值；二是 PWM 接入 FB 引脚，需要用一个低通滤波器将 PWM 波转成直流信号，然后接入通过一个电阻接入 FB 引脚，实现对 VSET 的控制。  
**2,反馈与调节：**  
误差放大器会回送反馈信号 FB，通过对输出电流的监测和反馈，与内部参考电压进行比较，然后根据比较结果调整 MOSFET 的导通占空比等参数，从而实现对输出电流和电压的稳定控制。当占空比低时会产生更大误差，所以对 PWM 输入信号的占空比有最低值要求。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_004_7e407a5a7e2a.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_005_3175972d4129.png)

**3,保护机制**  
过压保护：RT9293A 提供了 50V 的过压保护，RT9293B 提供了 50V/20V 的过压保护。当输出电压超过设定的过压保护阈值时，芯片会采取相应的保护措施，如切断输出或调整输出电压等，以防止下游电路因过压而损坏。  
欠压保护：当输入电压低于芯片的欠压保护阈值时，芯片会停止工作或进入低功耗模式，以避免芯片在欠压状态下出现异常工作或损坏。  
过温保护：在芯片工作过程中，如果温度升高到一定程度，超过了芯片的过温保护阈值，芯片会自动降低工作效率或停止工作，待温度降低到安全范围内后再恢复正常工作，以防止芯片因过热而损坏。

  
  
**二）实际电路和电流计算**  
1）5寸液晶屏背光参数：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_006_dee115a6a995.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_007_1a6b255dab6a.png)电流调节范围：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_008_f515adeae9bc.png)  
这里驱动电流最大值过大，会影响液晶屏背光管的寿命。按照液晶屏背光LED参数计算为Imax = 42.5mA。所以应该调整电阻Rset=7.58R. 这样，  
Imax = 42.5mA,Imin=10.3mA.  
调整后的电路图如下：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_009_cc4c71bbb6b2.png)

2）7寸液晶屏背光参数：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_010_bded5bb7981c.png)  
根据最大电流计算Imax = 212.5mA.  
根据以上电路计算 电阻Rset=1.52R.  
如此：电流调整范围：Imax = 212.5mA. Imin = 51.2mA.  
电路图如下：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_011_c55298965821.png)

作者：黑果果的思考

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

  

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_015_ef7d17c8c639.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_014_ef7d17c8c639.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_012_ef7d17c8c639.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_013_ef7d17c8c639.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\LED背光驱动芯片应用电路详解_images\img_016_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******