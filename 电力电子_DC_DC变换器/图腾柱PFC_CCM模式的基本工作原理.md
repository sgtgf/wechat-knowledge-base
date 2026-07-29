# 图腾柱PFC CCM模式的基本工作原理

原创 电路一点通 2024-12-06 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/rpiZZkf0WmPrm8bkM1SbZA](https://mp.weixin.qq.com/s/rpiZZkf0WmPrm8bkM1SbZA)

随着宽禁带器件的发展，图腾柱PFC电路在现今的应用越来越广泛，在需要双向运行的车载OBC中，以及5G基站储能备用电源，便携式储能电源等典型应用中，它是典型的前级运行拓扑。  

图1和图2是图腾柱PFC的电路结构和波形图，图腾柱是一个4开关的Boost解决方案，减少了当前路径中的功率器件数量，其中PWMH和PWML为快速臂，流过高频开关频率，相当于传统PFC的MOS和续流管；SRH和SRL为慢速臂，流过AC工频，相当于传统PFC的整流二极管。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC_CCM模式的基本工作原理_images\img_000_ddfec5aa1359.jpg)

图1-图腾柱PFC的电路结构

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC_CCM模式的基本工作原理_images\img_001_da4a5f250f56.jpg)

图2-图腾柱PFC的电路波形图

接下来分别分析工频正负半周期的工作，工频正半周时，S2导通时，VL=VAC，电感电流线性上升，如图3蓝色路径；S1导通时，VL=VAC-Vo，电感电流线性下降，SR2在整个工频正半周期内返回电流，如图3红色路径。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC_CCM模式的基本工作原理_images\img_002_67ccb818bbfd.jpg)

图3-工频正半周

工频负半周时，S1导通时，VL=-VAC，电感电流线性上升，如图4蓝色路径；S1导通时，VL=VAC-Vo，电感电流线性下降，SR1在整个工频负半周期内返回电流，如图4红色路径。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC_CCM模式的基本工作原理_images\img_003_55a6a7051045.jpg)

图4-工频负半周l  
  
来源:南京开关电源WG  

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\图腾柱PFC_CCM模式的基本工作原理_images\img_004_a8b37a87b291.other)

  

▼ **往期精彩回顾** ▼  

    
-   [揭秘比亚迪主要股东榜单（十大股东持股数、占比）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535018&idx=2&sn=e1c00508a09b7e06c08eddd93ff8b469&scene=21#wechat_redirect)    
    
-   [4种开关电源开关管(MOS管)驱动电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534374&idx=1&sn=929dc452a7f2f8955b75106d14a6cc0b&scene=21#wechat_redirect)    
    
-   [51单片机必备电子电路知识基础-几个模块入手](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534057&idx=1&sn=fe3c21f78b966b4bab20fd61348f9793&scene=21#wechat_redirect)    
    
      
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分