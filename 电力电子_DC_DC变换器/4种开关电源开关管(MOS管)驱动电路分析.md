# 4种开关电源开关管(MOS管)驱动电路分析

原创 电路一点通 2024-11-17 11:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/JbUf2eZV8RE4eGs3tvOekw](https://mp.weixin.qq.com/s/JbUf2eZV8RE4eGs3tvOekw)

# 开关电源开关管(MOS管)，有几种驱动电路？你都知道哪一种？

****👇👇👇**更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种开关电源开关管(MOS管)驱动电路分析_images\img_000_04220958ac2f.jpg)

**第一种，由电源管理芯片直接驱动。**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种开关电源开关管(MOS管)驱动电路分析_images\img_001_2847cb76e03e.other)

这是最简单的驱动方式，如图3842管理芯片⑥输出方波信号，由驱动电阻Rg送到开关场应MOS管栅极，驱动开关管。R1为下拉电阻，R2为开关管源极(S极)电流检测电阻。

**第二种，推挽驱动方式**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种开关电源开关管(MOS管)驱动电路分析_images\img_002_1b3a3f532247.other)

由于第一种，是由开关电源管理芯片直接驱动，驱动功率小、电流小，满足不了有些电路的功率需求，常采用双管Q1、Q2构成推挽功放驱功，这种驱动方式强劲，能满足需求。各电阻元件作用差不多。

**第三种，加速关断驱动**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种开关电源开关管(MOS管)驱动电路分析_images\img_003_c5903a70ab0e.other)

这种驱动方式，就是在驱动电阻并联一个二极管D1和一个电阻Rg2，构成一个快速泄放回路。当开关管处于关状态时瞬间泄放栅极电压，保证了开关管能快速关断。二极管D1为快恢复二极管，Rg2为限流电阻，防止关断时电流过大，损坏电源管理芯片。

**第四种为变压器隔离驱动**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种开关电源开关管(MOS管)驱动电路分析_images\img_004_6eebf2dcc622.other)

为了满足高质量的开关管驱动的需要，常采用变压器隔离驱动方式。其中C1是隔直流通交流的作用，R1是防止电路板寄生的电感与C1形成LC振荡。这种驱动电路的好处是，可以通过变压器两个次级线圈交替驱动双场效应管。其中R2、R3是驱动电阻，R6、R7是下拉电阻。

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\4种开关电源开关管(MOS管)驱动电路分析_images\img_005_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [多种接口电路原理图解析【STM32自学实操教程】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531635&idx=1&sn=ad789212ad7ceb299663156546b7b790&chksm=fcef9f11cb981607ef6a7d27ef2d9f48b8dd35338b91dc535e797cc98f5f5c9f5d1312f50370&scene=21#wechat_redirect)    
    
-   [多路降压稳压DC-DC开关电源电路设计（3.3V、5V、12V、ADJ）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532091&idx=1&sn=e39f9a88a6487f2eadf7b5d2b5782e0c&chksm=fcef9d59cb98144f8b6f0232b77b8569d007edbbd90dcbf0b54bd25e959ad6901f92ca480edd&token=1289401606&lang=zh_CN&scene=21#wechat_redirect)  
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532091&idx=1&sn=e39f9a88a6487f2eadf7b5d2b5782e0c&chksm=fcef9d59cb98144f8b6f0232b77b8569d007edbbd90dcbf0b54bd25e959ad6901f92ca480edd&token=1289401606&lang=zh_CN&scene=21#wechat_redirect)[DC-DC硬件电路基础知识-较全面](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531531&idx=1&sn=5abdf76fa6b916d2ea29bcef1b4fcecf&chksm=fcef9f69cb98167f301aa550ca87f395e78913303b6b6d554cb3b7b298d7f432e7154dae9feb&scene=21#wechat_redirect) 
    
-   [PFC电路加旁路二极管有啥作用？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531318&idx=1&sn=552511e8ad5f56fdaaba90f8c98b8033&chksm=fcef9854cb9811428e26ebdb9a590f643cd315be08328c3cfcd218591a16de35e281271b1fc1&scene=21#wechat_redirect)   
    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分