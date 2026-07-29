# MOS管在电路中两大作用？

原创 电路一点通 2024-10-25 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/sFx4l21vl72jak53WkohCw](https://mp.weixin.qq.com/s/sFx4l21vl72jak53WkohCw)

MOS管在电路中作为开关，NMOS和PMOS开关连接方式不同，开关条件为G极电压与S极电压比较。寄生二极管负极接输入端，正极接输出端或地，否则无法实现开关功能。  

**MOS管的两大作用  
  
**

**开关作用  
**MOS管通常在电路中作为开关。我们利用反证方式来看看MOS管作为开关时的连接方式。

NMOS和PMOS 的开关连接方式是不同的。

NMOS管：D极接输入，S极接输出，（正常导通）

PMOS管：S极接输入，D极接输出，（正常导通）

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_000_f04f8e1b7021.jpg)  
  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_001_f5b1a617dcf1.other)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_002_a8b37a87b291.other)

**反证**

NMOS管：**S极接输入，D极接输出**，寄生二极管直接导通，S极电压可以无条件到D极，MOS管失去了开关作用；

PMOS管：**D极接输入，S极接输出**，同样失去了开关作用。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_003_5fc8c576d176.jpg)

**那MOS管的开关条件是什么？**

其实不管是NMOS还是PMOS，G极电压都是和S极作比较。

N沟道：UG>US时导通，UG=US时截止。

P沟道：UG<US时导通，UG=US时截止。

**这里的UG比US大（或者小）到底多少伏才能饱和导通呢？**

常见的NMOS在这里可以简单分为两类：**信号切换和电压通断**。

**信号切换：**UG比US大3V--5V，只要导通即可，并不需要饱和导通。常见的有VB162K；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_004_f3045bb5bf55.jpg)

电压通断：UG比US应大于10V以上，开通时必须工作在饱和导通状态。常见的有VBQF1307、VB7322。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_005_5bfb410d6c99.jpg)

**PMOS在这里则相反**，在电压通断时，UG要比US小10V以上。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_006_6d60019b14dd.jpg)

总的来说，不管是NMOS还是PMOS，**寄生二极管的负极一定是接输入端**，**正极接输出端或者接地**，否则无法实现开关功能。

这就是MOS管的开关作用。下一期我们来讲MOS管的第二大作用：**隔离作用**。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管在电路中两大作用__images\img_007_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [多种显示电路原理图详解【STM32从零开始实操】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532001&idx=1&sn=93dab6caf44c9761eaa35daa07180345&chksm=fcef9e83cb98179541e1cfee0f682200ebf2d5187f0c9c73375492dbd1e1aa645a3a11b0e38d&scene=21#wechat_redirect)    
    
-   [多路降压稳压DC-DC开关电源电路设计（3.3V、5V、12V、ADJ）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532091&idx=1&sn=e39f9a88a6487f2eadf7b5d2b5782e0c&chksm=fcef9d59cb98144f8b6f0232b77b8569d007edbbd90dcbf0b54bd25e959ad6901f92ca480edd&scene=21#wechat_redirect)
    
-   [经典继电器驱动电路方案：单片机IO端口、三极管、达林顿管及嵌](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532091&idx=1&sn=e39f9a88a6487f2eadf7b5d2b5782e0c&chksm=fcef9d59cb98144f8b6f0232b77b8569d007edbbd90dcbf0b54bd25e959ad6901f92ca480edd&scene=21#wechat_redirect)
    
-   [多种接口电路原理图解析【STM32自学实操教程】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531635&idx=1&sn=ad789212ad7ceb299663156546b7b790&chksm=fcef9f11cb981607ef6a7d27ef2d9f48b8dd35338b91dc535e797cc98f5f5c9f5d1312f50370&token=305090489&lang=zh_CN&scene=21#wechat_redirect)    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分