# stm32核心板学习笔记-供电电路

原创 电路一点通 2024-12-05 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/hqSlddnlppCQ3XSdx4tQPA](https://mp.weixin.qq.com/s/hqSlddnlppCQ3XSdx4tQPA)

**3.0.1 核心板怎么来的 芯片引脚简介**

stm32f103c8t6各位代表的含义：

F换成L则是代表低功耗C=48脚

8=64K

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_000_61a43542f93b.png)

**一些常见芯片封装方式：**

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_001_a1b1fb0f6d39.png)

### 供电电路 

看手册的电气特性这一块：供电范围是2-3.3V  

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_002_32968cb7ad9f.png)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_003_a8b37a87b291.other)

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_004_6c12687d56cb.png)

但是电脑USB端口供电是5V ，所以需要降压

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_005_f654cde8a564.png)

**主要记住VIN,VOUT,GND电压转换芯片的内部作用**

C5,C7（滤波电容）的作用：

因为电容能走交流阻直流，电脑来了220V的交流电，虽说做了直流转换，但是5V会不可避免的有些波纹，这些波纹会造成电压不是很稳定，所以要把直流5V的波纹滤掉，让它变成一个稳定的5V，如果5V直流电有波动的话，交流的地方相当于直接接到地了，短路了，保证直流电是稳定的C6,C8（滤波电容）的作用：

5V转换成3.3V之后也会有一些波动，同上滤掉，然后从VCC3V3处输出了但是完了之后还是不能直接去接

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_006_4a444636c58d.png)

VBAT可以接电池1.8V-3.6V，电池负极接地/VSS

VBAT：当使用电池或其他电源连接到VBAT脚上时，当VDD 断电时，可以保存备份寄存器的内容和维持RTC的功能。如果应用中没有使用外部电池，VBAT引脚应接到VDD引脚上。

STM32 VBAT外围电路接法详解-CSDN博客

当没有电池供电的时候，把VBAT和VDD接到一起

然后单片机上还有四路供电，VDD和VSS之间要通过如图所示的100nF电容滤波，保持电压稳定,大部分都是这个型号的电容供电

只有一个4.7uF，作用：相当于一个水池，外头供电不足的时候，这个水池可以补水，让欠压的时候电路的电压值更稳定（why），

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_007_4feac0368fcf.png)

一般那种用VBAT供电的，比如用纽扣电池

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_008_e1fece7b6f67.png)

画板子准备用AMS1117-3.3V芯片

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_009_d8268139bb37.png)

图片源自零基础DIY教程-基本原理图搭建讲解-

其内部

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_010_ad03472b77af.png)

供电电路大致画了这样

![](D:\电脑文件\公众号知识库\电工_教育_学习\stm32核心板学习笔记_供电电路_images\img_011_c8f610458fc2.png)

作者：goodjob2005

▼ **往期精彩回顾** ▼  

    
-   [揭秘比亚迪主要股东榜单（十大股东持股数、占比）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535018&idx=2&sn=e1c00508a09b7e06c08eddd93ff8b469&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535018&idx=2&sn=e1c00508a09b7e06c08eddd93ff8b469&scene=21#wechat_redirect)[ADC采集电路温漂的罪魁祸首--稳压芯片AMS1117](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534789&idx=1&sn=e3ed0a471c904efebcfe8cd05ea45735&scene=21#wechat_redirect)
    
-   [初级硬件工程师多久能跳槽](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534576&idx=1&sn=a357c8ee429f35cabf27c709cb412083&scene=21#wechat_redirect)
    
-   [汽车手动变速箱各零部件（中英文图解）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487331&idx=1&sn=ba0be2c00dd2a4455daa63d55d33392a&chksm=c33e77dff449fec930901efd06eb195fe0c953de777a21f5fd4c9098650758d61eb17028c663&scene=21#wechat_redirect)  
    
-   [汽车三电系统知识、主要部件专业术语](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487331&idx=2&sn=0afa9f50152722cd565965fb8e300b2d&chksm=c33e77dff449fec95dce916f5b11a69528e4e7a9172499c13cf184dc84e1d1ce42080e4ff9be&scene=21#wechat_redirect)  
    
-   [汽车上零件图、结构原理图都标清晰了-设计和维修可参考](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486155&idx=1&sn=0634bfd9079b3054df8cf7af6d223293&chksm=c33e7277f449fb61d6672a2e0641022ee18ca3cbf3c737ce952c51779a4f78a291369d7c4fdc&scene=21#wechat_redirect)
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分