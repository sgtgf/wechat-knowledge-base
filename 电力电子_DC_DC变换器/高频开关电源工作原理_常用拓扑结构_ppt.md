# 高频开关电源工作原理、常用拓扑结构.ppt

原创 电路一点通 2024-11-06 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/a0eJhhtEnWhsCzMclsfYfg](https://mp.weixin.qq.com/s/a0eJhhtEnWhsCzMclsfYfg)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_000_1a56cdcd0a55.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_001_3b4f316204d7.other)**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_002_a8b37a87b291.other)

**一、开关电源的概念**  
1 、开关电源的概念  
开关电源是一个能量转换器，作为电源的功率器件工作在开关状态  
（开关管、电感、高频变压器、电容、整流二极管）－开或关状态，其  
特点是频率高、功耗低、工作效率高、体积小、输入范围宽 (Switching  
Regulator -- A switching circuit that operates in a closed  
loop system to regulate the power supply output) 通过闭环系统调节，使输出电压保持稳定。

  
2 、开关电源和线性电源、相控电源的比较  
① 线性电源：线性电源的主要特点就是功率器件工作在放大状态，具  
有稳定度高、可靠性好、成本低等优点，但是效率低、笨重和体积大的缺  
点。只能做中、小功率的电源。  
② 相控电源：是通过控制可控硅的导通角来达到稳压作用，功率因数  
比较低、效率低、笨重、体积大。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_003_9a91aeb871a1.png)

3 、开关电源（ swiching － mode power supply ）  
开关电源因为体积小、效率高已经充斥了我们的日常生活，从移动电  
话的充电器，到我们的彩电、音像供电电源；从路边的霓虹灯，到车站  
的电子显示牌，这些都用到了开关电源；从我们的台式计算机，到便携  
笔记本电脑等等，这些都离不开开关电源。

当然开关电源的输入并不限于是交流（ AC/DC 电源），还可以是直流  
（ DC/DC 电源和 DC/AC 电源）。开关电源交流输入电压范围比较宽，可以从几十伏到上千伏。就目前而言，开关电源的控制方式有两种：脉宽  
调制和频率调制（ Pulse Frequency Modulation － PFM ）。脉宽调制  
（ Pulse Width Modulation － PWM ）方式比较常见，我们中兴通讯电源均采用的是这种方式。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_004_2485da74ebc0.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_005_01cc695589ac.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_006_371bfc22e4a6.png)

2 、功率变换电路  
将 PFC 输出的 410VDC 高压进行变换，变成高频高压脉冲电压，然后  
驱动高频变压器，变压器将高压脉冲电压变成低压脉冲电压。

该部分的主要器件是开关功率器件和高频变压器。

3 、输出电路  
输出电路主要是全波整流电路和滤波电路、输出 EMI 电路。

全波整流器电路所用的整流二极管不是普通的，一般用采用快恢复二极管或肖特基；滤波电容用的是高频低阻电容。

4 、控制电路  
控制电路是开关电源电路的核心之一。PWM 控制芯片决定开关电源  
的工作模式，该芯片产生两路相位相反的驱动信号来驱动功率开关器件工  
作，通过脉冲宽度来控制开关管的导通时间，从而调节能量传递的大  
小。开关电源的控制电路是一个闭环控制系统，所以能及时保证输出电  
压稳定不变，闭环有两个环来调节，内环是电流环调节，确保开关电源  
的动态响应时间，速度比较快。外环是电压调节环，确保电压的稳定，  
速度相对较慢。输出过压保护、均流电路、过热保护、限流保护、短路  
保护以及交流输入过欠压保护是开关电源的辅助电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_007_a889c3c24d22.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_008_a433ad4716fa.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_009_0af73ea09ef3.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_010_c193cfb1ff48.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_011_544a82fd5234.png)

**高频开关电源工作原理 常用拓扑结构-39页.ppt**  
  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\高频开关电源工作原理_常用拓扑结构_ppt_images\img_012_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [多种无线电路原理图（WIFI、SIM卡座和 GPRS 模块）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532793&idx=1&sn=cb368385a09fca56d7ecc4d6abbda62a&chksm=fcefa39bcb982a8d8e412c7c0d6f2f4cbe2180632124d3c5c57fe70f020937f0176f3e3fc70d&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532793&idx=1&sn=cb368385a09fca56d7ecc4d6abbda62a&chksm=fcefa39bcb982a8d8e412c7c0d6f2f4cbe2180632124d3c5c57fe70f020937f0176f3e3fc70d&scene=21#wechat_redirect)[MOS管驱动直流电机电路设计基础，轻松理解芯片手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532736&idx=1&sn=529ceb19aed55ad93b91374de0339be3&chksm=fcefa3a2cb982ab489aeba618197ce2f4aa1725878a8645c9be7cfb1169a5753d9840809653e&scene=21#wechat_redirect)
    
-   [新能源整车控制器基础知识培训（功能介绍）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495731&idx=2&sn=17e4a40b01bb64b6540d49f18e0be629&chksm=c33d888ff44a01999fd7b00018d8a7c1757447bb79d69b8937fe55359885a4c0ffe6812ce762&scene=21#wechat_redirect)
    
-   [新手司机必备图解仪表、开关、档位小常识](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495703&idx=1&sn=0b03cf1de5cfaf0454ccc554039b4974&chksm=c33d88abf44a01bddc3b4dc7781ecbedc3a2bcba012dbedd244430b5457a1ed59c316f727a7d&scene=21#wechat_redirect)
    
-   [新能源汽车电池解析、快充和慢充原理、常见问题](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495332&idx=1&sn=30de704bfef26623524ee723b8f9a59b&chksm=c33d9618f44a1f0ed7139d28f5279b2091ac135f3acc9779f9c555c6e0400f824688637e4278&scene=21#wechat_redirect)
    
-   [汽车小白从零了解汽车组成构造与原理图、示意图，零部件剖视图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495148&idx=1&sn=60aa73575b44d29e1de259d5ac46026e&chksm=c33d9550f44a1c46536da6038394b9b643723bc84ef72533a491b9b0158b6fd588376252b6cf&scene=21#wechat_redirect)
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分