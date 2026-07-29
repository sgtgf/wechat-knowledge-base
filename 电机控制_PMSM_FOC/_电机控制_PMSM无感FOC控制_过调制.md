# 【电机控制】PMSM无感FOC控制-过调制

原创 电路一点通 2025-04-29 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/mXcPboBHEFzNrcEe0cIJLg](https://mp.weixin.qq.com/s/mXcPboBHEFzNrcEe0cIJLg)

### 目录

-   1\. 什么是过调制
    
-   2\. 过调制原理
    
-   2.1 调制比
    
-   2.2 最小相角误差过调制
    

  

* * *

### 1\. 什么是过调制

        据之前讲解的内容我们可以知道，SVPWM技术在电压空间上模拟了一个近似于圆的电压轨迹，减小了相电流的谐波，降低了电机的谐波损耗，抑制了转矩脉动。

        然而，SVPWM技术也存在一些问题，合成电压矢量有极限便是其中之一。

        六个基本电压矢量的幅值为2/3Vdc，**OC = 2/3Vdc**，因此合成的矢量圆的半径最大为**OB =** √**3/3Vdc**，如下图所示：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_002_5513c6b23bb3.jpg)

        **这个半径为√3/3Vdc的区域也被称作SVPWM的线性区域**。不难理解，在该线性区域内，所有参考电压矢量都能够通过SVPWM技术合成并跟随。**而当参考电压矢量的幅值进一步增大时，电压圆轨迹上的某些部分将会超出最大矢量圆的范围，而此时SVPWM也进入了所谓的非线性调制区。在非线性调制区合成电压矢量所采用的调制方法，被称为过调制技术。**

* * *

### 2\. 过调制原理

#### 2.1 调制比

        介绍过调制前首先我们需要了解一个概念**调制比**，定义调制比m如下：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_001_fe663dc86a4e.jpg)

        **式中，Uref代表要合成的电压矢量，Vdc代表直流母线电压。**

        **当Uref落在最小矢量圆内时，|Uref| ≤ √3/3Vdc，此时的m≤0.9069，电机工作在线性调制区，无论是稳态还是动态时，其性能表现都会非常优秀，但是逆变器的容量没有被充分利用。当m>0.9069时，电机工作在过调制区，电机工作在SVPWM的非线性调制区，虽然可以充分利用逆变器的容量，但是电流的谐波和振荡在转速控制模式下会加剧。**

        过调制技术是在传统的SVPWM技术上衍生出来的。传统的SVPWM的调制方法在过调制区不能准确的合成给定电压矢量，基本电压矢量的作用时间计算出来**可能**为负。

        因此，需要使用过调制技术使得输出电压矢量能够在幅值和相位上尽可能的反映出参考电压 矢量的变化。

        针对过调制技术控制方法的研究有很多，例如：根据调制比m的大小将 过调制区分成I区和II区，两个区域内采用不同的控制手段。

        也有比较简单的方法，例如：**最小相位误差过调制、最小幅值误差过调制策略**；

        本文主要讲**最小相位误差过调制**。

#### 2.2 最小相角误差过调制

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_000_5513c6b23bb3.jpg)

        **当m=0.9069 时，电压矢量的末端位于六边形的内切圆上时，则达到最大线性调制； 当m>0.9069****时，且电压矢量的末端位于六边形之内，上述这两种情况都可按式上一章所讲的公式：**

        式中![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_003_7d68845c0085.jpg)；

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_004_75464ad71bf0.jpg)

        **计算出基本电压矢量的作用时间t1、t2；以及零矢量t0的作用时间t0 = T - t1 - t2；**

        **当m>0.9069电压矢量的末端位于六边形之外时，如果按上式计算基础电压矢量的作用时间t1和t2，则会出 现t1＋t2＞T，t0为负数的不合理的结果。**

        面对这种情况最小相角过调制是怎么做的呢？看一下下面的图就立马能理解了

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_005_449c944bba19.png)

        为了能够实现调制，最小相角过调制的策略将**需要合成的空间电压矢量u\***限制到它与六边形的交点D处，形成**新的空间电压矢量u\*p，用u\*p代替u\*** ，这样u\*p具有与u\*相同的相角，因此这种方法具有最小相角误差的优点。怎么实现这种替换呢？就是先按照上一章所讲的公式计算出t0、t1、t2，再按照如下公式计算出新的t0'、t1'、t2'来代替之前的t0、t1、t2，从而控制基础矢量的作用时间生成新的up\*：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_006_34ac33cd813a.jpg)

        具体流程图的画如下：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_007_51cca4c63096.jpg)

  

-   [![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_008_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[学习TL494经典开关电源后，对手上 48V/400W 改造](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544872&idx=1&sn=472e9a3e44ba3d8baabd74d24c88fc62&scene=21#wechat_redirect)**
    
-   **[硬件电路设计思路形成，少走弯路、损失越少](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544825&idx=1&sn=7088ceeba712619cea3399610900c395&scene=21#wechat_redirect)**
    
-   **[一文看全MOS管（NMOS、PMOS、三极管跟mos管的区别）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544346&idx=1&sn=5ed25b7974fabec0723cbc9ba87e0c52&scene=21#wechat_redirect)**
    
-   **[新能源汽车充电控制（快慢原理）模式、接口标准](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247518601&idx=1&sn=e61b3f0c4f30aed925275c596be0f313&scene=21#wechat_redirect)**
    
-   **[汽车涡轮增压器/机械增压器构造图(配件名称中英标注）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247518406&idx=1&sn=8b4af7e862d3508056525541a5486576&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_电机控制_PMSM无感FOC控制_过调制_images\img_009_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️