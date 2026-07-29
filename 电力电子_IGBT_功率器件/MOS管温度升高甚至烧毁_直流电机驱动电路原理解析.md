# MOS管温度升高甚至烧毁？直流电机驱动电路原理解析

原创 电路一点通 2025-04-22 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/yy8TDWN0bs0fi7QrcZ574A](https://mp.weixin.qq.com/s/yy8TDWN0bs0fi7QrcZ574A)

## 一、原理图分享

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_000_87f24b90d608.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_001_7bcc8c549d62.png)  
注意：M2\_INA、M2\_INB可直接接3.3V电平信号。

## 二、芯片介绍

### 1、HIP4082

HIP4082是一款高频驱动器，专为半桥和全桥应用而设计。它具有四个高/低侧驱动输出，可以提供高达100V的驱动电压。HIP4082还具有逻辑级输入和反馈输入，可用于控制和监测驱动器的运行状态。  
HIP4082的主要特点包括：

1.  高速开关操作：HIP4082具有快速开关和关闭时间，可以实现高效的半桥和全桥操作。
    
2.  内部保护功能：HIP4082内置了过热保护和短路保护功能，可以提高系统的可靠性和安全性。
    
3.  逻辑级输入和反馈输入：HIP4082可以通过逻辑电平输入来控制驱动器的操作，而反馈输入可以用于监测和控制输出电流。
    
4.  高驱动能力：HIP4082可以提供高达4A的驱动电流，可以满足各种高功率应用的需求。
    
5.  低功耗：HIP4082采用低功耗设计，可以减少系统的能耗和散热需求。
    

## 三、原理解析

### 1、此电路有4个NMOS管组成的全桥电路，正反转逻辑图如下：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_002_3446959d8aad.png)

### 2、自举升压

H桥四个MOS管都为N沟道，导通条件为Vgs > 0,当高边AHO导通时Q12的S极为12V所以MOS是无法导通的，此时就需要自举升压电路，如下图：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_003_7f37409b242b.png)将G极电压升升高，从而完全导通MOS管。

## 四、注意事项

1、由于4082和MOS都采用12V电压供电，所以PWM占空比不能为100%。因为当占空比为100%  
自举升压电路无法工作，导致MOS不能完全导通，从而导致MOS管温度升高甚至烧毁。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_004_7f37409b242b.png)

**（原文作者CSDN博主「小灰灰搞电子」 在此特别鸣谢！~）**

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_005_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

  

## **一点通推荐**

    

-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)   【资料可领取】
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)【资料可领取】  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)【资料可领取】
    
-   [西门子PLC高级应用实例精解\_第2版-368页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257003&idx=2&sn=c2313e1bec3e59a63fa08faea4ca528d&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    
-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   [ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&scene=21#wechat_redirect)【资料可领取】
    
-   [高效微逆变器设计（原理图+程序+上位机等）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=2&sn=8fcb9c897e4cc82906451def4a597f1b&scene=21#wechat_redirect)【资料可领取】
    
-   [电工实用手册 -532页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257006&idx=2&sn=9f8c8197346caec98132a6f9b66fb918&scene=21#wechat_redirect)【资料可领取】
    
    ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管温度升高甚至烧毁_直流电机驱动电路原理解析_images\img_006_f578b8fa2d39.jpg)
    
    ******进大家庭⭕圈探讨回复:************交流******
    
      
    

分享💬点赞👍在看❤️