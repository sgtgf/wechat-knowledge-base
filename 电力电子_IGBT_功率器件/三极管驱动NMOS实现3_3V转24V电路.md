# 三极管驱动NMOS实现3.3V转24V电路

原创 电路一点通 2025-04-16 18:59 广东

> 原文地址: [https://mp.weixin.qq.com/s/gFIv6aubVI93-KesqHWW8g](https://mp.weixin.qq.com/s/gFIv6aubVI93-KesqHWW8g)

### 介绍了MOS管（NMOS和PMOS）的导通原理，包括开启电压、预夹断电压和漏源破坏电压，以及在电路中的应用，如使用三极管驱动实现3.3V到24V的转换

### 一、MOS管导通原理。

MOS管的两个重要参数  
VGS(th)：开启电压  
VGS(off)：预夹断电压  
VDS(max)漏源破坏电压

  
**1、MOS管：**  
当0=<VGS<VGS(th),MOS管关断。  
当VGS>VGS(th)，VDS>0，NMOS管导通。  
VGD=VGS-VDS；当VGS保持不变，随着VDS的增大，VGD逐渐减小，导致靠近漏极D一侧的耗尽层变宽，导电沟道变窄，但漏极电流Id随着VDS的增大而线性增大。

  
当VGD=VGS(off)，MOS管进入饱和区。此后再增大VDS，电流ID也不会发生变化。  
当VDS>VDS(max)时，MOS管被击穿损坏。

  
![NMOS管](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三极管驱动NMOS实现3_3V转24V电路_images\img_000_4ac3f5f1debd.png)

  
**2、PMOS：**  
PMOS管特性与NMOS管类型，但相反。  
当0>VGS>VGS(th)，VDS<0，PMOS管截止。  
当VGS<VGS(th)<0，VDS<0，PMOS管导通。  
当VDS<VDS(max)<0时，MOS管被击穿损坏。

### 二、电路

三极管驱动PMOS实现3.3V转24V电路  
Q1导通，Vgs=12v-24v=-12v<Vt=-2.5v ,Q4导通，PWM\_OUT1=24V;  
Q1截止，Vgs=0v>Vt=-2.5v ,Q4截止，PWM\_OUT1=0V;  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三极管驱动NMOS实现3_3V转24V电路_images\img_001_da180347ffa9.jpg)

三极管驱动NMOS实现3.3V转24V电路  
Q2截止，VGS=0<Vt=2.5V,Q3截止，PWM\_OUT2=0;  
Q2导通，VGS=5V>Vt=2.5V,Q3导通，PWM\_OUT2=24V;  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三极管驱动NMOS实现3_3V转24V电路_images\img_002_dd900d1756b5.jpg)

* * *

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三极管驱动NMOS实现3_3V转24V电路_images\img_003_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看**