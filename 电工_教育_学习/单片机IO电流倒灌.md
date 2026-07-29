# 单片机IO电流倒灌

原创 电路一点通 2024-12-16 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/wK9EDE4FklHAof9aw3LGTw](https://mp.weixin.qq.com/s/wK9EDE4FklHAof9aw3LGTw)

最近在某视频上看到了一个博主因为IO口电流倒灌导致ADC参考基准电压不准，致使ADC采样数据不准。抱着什么是IO电流倒灌的疑问，学习了一些文章，防止以后踩坑。并在下面做一下对IO口电流倒灌的总结。

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机IO电流倒灌_images\img_000_262336f84717.other)

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机IO电流倒灌_images\img_001_a8b37a87b291.other)  

  

**目录**

\# 一、什么是IO电流倒灌

\# 二、电流倒灌的危害

\# 三、防护电流倒灌的方法  

  

* * *

#### **一、什么是IO电流倒灌**

电流通过IO口保护二极管倒灌到单片机VDD，单片机的每个IO口都会有一对保护二极管，当IO口外部电压大于VDD＋一个二极管压降时，保护二极管就会打开，电流就会倒灌到VDD。

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机IO电流倒灌_images\img_002_c032e311f3ad.png)

这种倒灌现象主要出现在不同电源供电的系统上，例如两个单片机串口通信，一个是5V供电的51单片机，另一个是3.3V供电的STM32单片机。正常通信或者STM32断电时。电流会从51单片机TX引脚向STM32单片机RX引脚倒灌，再从RX端的保护二极管倒灌到STM32单片机的VDD端，致使系统运行混乱。当51单片机断电时，电流会从STM32的TX引脚向51单片机RX引脚倒灌，并通过RX端保护二级管倒灌到51单片机的VDD,使系统不能完全断电，可能会无法下载程序，因为51单片机下载程序需要重新上电。

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机IO电流倒灌_images\img_003_5c7db7193621.png)

#### **二、电流倒灌的危害**

1、导致系统混乱，例如ADC采样不准，系统变慢。当ADC采样没有提供单独的电压准时，当系统供电电压变化时，就会导致基准变化，使采样的数据不准。  
2、可能会导致系统无法断电，无法下载程序（例如51单片机）。即使系统供电断开了，但是倒灌的电流持续为系统供电，使系统无法完全断电。  
3、严重可能会烧坏单片机。当倒灌的电流过大时，导致系统供电电压逐渐增大，当系统电压大于单片机电源端最大承受电压时，单片机就会烧坏。

#### **三、防止电流倒灌的方法**

方法：在单片机系统供电电源端加稳压二极管。在串口通信端口加保护器件，Tx端串联一个限流电阻，在RX端串联一个二极管。系统供电端加稳压二极管的作用是当出现电流倒罐时，系统端的电压升高时，通过稳压二极管向地端泄放过高的电压，使系统工作在稳定的电压范围。TX端串联限流电阻的作用是当出现电流倒灌时，限制倒灌的电流。RX端串联反向二极管的作用是将电压通过二极管的反向截止隔离开，避免出现电流倒灌。虽然加这些保护期间可以避免电流倒灌，但是一定程度会影响串口通信速率。若是不追求高速通信，可以加这些保护器件。

作者：爱写代码的猫  
  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机IO电流倒灌_images\img_004_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [多种无线电路原理图（WIFI、SIM卡座和 GPRS 模块）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532793&idx=1&sn=cb368385a09fca56d7ecc4d6abbda62a&chksm=fcefa39bcb982a8d8e412c7c0d6f2f4cbe2180632124d3c5c57fe70f020937f0176f3e3fc70d&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532793&idx=1&sn=cb368385a09fca56d7ecc4d6abbda62a&chksm=fcefa39bcb982a8d8e412c7c0d6f2f4cbe2180632124d3c5c57fe70f020937f0176f3e3fc70d&scene=21#wechat_redirect)[MOS管驱动直流电机电路设计基础，轻松理解芯片手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532736&idx=1&sn=529ceb19aed55ad93b91374de0339be3&chksm=fcefa3a2cb982ab489aeba618197ce2f4aa1725878a8645c9be7cfb1169a5753d9840809653e&scene=21#wechat_redirect)
    
-   [新能源整车控制器基础知识培训（功能介绍）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495731&idx=2&sn=17e4a40b01bb64b6540d49f18e0be629&chksm=c33d888ff44a01999fd7b00018d8a7c1757447bb79d69b8937fe55359885a4c0ffe6812ce762&scene=21#wechat_redirect)
    
-   [新手司机必备图解仪表、开关、档位小常识](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495703&idx=1&sn=0b03cf1de5cfaf0454ccc554039b4974&chksm=c33d88abf44a01bddc3b4dc7781ecbedc3a2bcba012dbedd244430b5457a1ed59c316f727a7d&scene=21#wechat_redirect)
    
-   [新能源汽车电池解析、快充和慢充原理、常见问题](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495332&idx=1&sn=30de704bfef26623524ee723b8f9a59b&chksm=c33d9618f44a1f0ed7139d28f5279b2091ac135f3acc9779f9c555c6e0400f824688637e4278&scene=21#wechat_redirect)
    
-   [汽车小白从零了解汽车组成构造与原理图、示意图，零部件剖视图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495148&idx=1&sn=60aa73575b44d29e1de259d5ac46026e&chksm=c33d9550f44a1c46536da6038394b9b643723bc84ef72533a491b9b0158b6fd588376252b6cf&scene=21#wechat_redirect)