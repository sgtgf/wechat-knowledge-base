# 开关电源维修，PFC电路原理分析

原创 电路一点通 2024-11-21 11:35 广东

> 原文地址: [https://mp.weixin.qq.com/s/Xv5PzQM2AGBoXeyviooO5w](https://mp.weixin.qq.com/s/Xv5PzQM2AGBoXeyviooO5w)

开关电源的PFC电路，PFC电路是校正功率因数的电路，开关电源属于容性负载，功率因数低，使电网供电效率低，当加上PFC电路后，功率因数可以达到98％，那么PFC是如何改变功率因数的呢。  

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源维修_PFC电路原理分析_images\img_000_a8b37a87b291.other)

我们先要知道在交流电设备中，有阻性负载，有容性负载，有感性负载。

阻性负载的功率因数为1，因为它的电流和电压波形是同相位的

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源维修_PFC电路原理分析_images\img_001_e0384ec45a6e.png)

  

**有容性负载**

如图电流是超前电压90度

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源维修_PFC电路原理分析_images\img_002_39222267a20a.png)

  

**感性负载**

感性负载电流滞后电压90度

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源维修_PFC电路原理分析_images\img_003_eb3c4ceabc92.png)

  

感性负载如变压器，电动机，容性负载是整流后端有滤波电容的设备。

容性负载和感性负载的功率因数低，电源供电效率低，容性负载和感性负载，大电流负载对电流畸变，产生干扰，对电网和自身都会产生干扰。

所以对于容性负载，功率大于100W以上开关电源的容性负载，比如电脑电源，液晶电视电源等，需要增加功率因素矫正电路，只要改变负载特性接近于阻性，就可以使电流相位与电压相位相同。

**PFC功率因素矫正分为两种**

**被动PFC**

在整流桥堆和滤波电容之间串联电感，利用电感上电流不能突变的特性来缓冲电容充电电流，改变电网线路电流波形的畸变，提高功率因数，缓解电磁干扰，但只能提高一点功率因数，效率低，适合小功率电源。

**主动PFC**

主动PFC则是利用电子元件进行斩波，改变容性负载电流波形的畸变，使电压和电流的相位相同，使其特性接近阻性负载，电压和电流同相位。

电源是容性负载就是因为整流桥后端有一颗电容，对电容反复充电，造成的无功功率，改变电路结构，在电路中串联一个电路把电容隔开，实际上就是增加一个BOOST电路。

在整流后串联一个BOOST电路，改变直接整流对电容的重放电，利用BOOST的开关把直流电变成高频脉冲直流电，在通过二极管整流电容滤波，得到一个稳定的直流电压，在供给后级开关电源。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源维修_PFC电路原理分析_images\img_004_e7c680686749.png)

  

PFC电路一般都是把直流300V的脉动电压升压到380V,这里有几个原因，一是减少损耗，减小电感体积，为了芯片的占空比稳定性，太低了，电压稳不住。

PFC也是非常容易损坏的电路，其电压较高，容易击穿开关管和整流管，后级开关电源击穿损坏，也会因为PFC保护不及时，损坏开关管和整流管及电源芯片外围元件  

  

******进大家庭⭕圈探讨回复:****** ******交流******

  

▼ **往期精彩回顾** ▼

-   [](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493395&idx=1&sn=3b36eea34dd9b509bf0a75692be51629&chksm=c33d9faff44a16b993e0f2707214f3f62f3d8d002bc50a54a7d8658a049d37be409a8879955b&scene=21#wechat_redirect)[4种开关电源开关管(MOS管)驱动电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534374&idx=1&sn=929dc452a7f2f8955b75106d14a6cc0b&chksm=fcefa444cb982d52aec469979f921ab990a640414863a4766e6b5b58972b52afdb9edd80208c&scene=21#wechat_redirect)  
    
-   [【电路设计】优化降压（ 12V -3.3V ）电源硬件方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534378&idx=2&sn=9be1a2b0b96558dc7fc2a7e9f326ab95&chksm=fcefa448cb982d5e43c69bbb6cff88fe9565c49607b850e58faf6c491b4a4104e9dcd76b70fc&scene=21#wechat_redirect)  
    
-   [峰值检测电路汇总](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534229&idx=2&sn=97b1b1051c11304be65c7ebf70b01515&chksm=fcefa5f7cb982ce106db5801d5348ffa5fc5d0b6b0dcd3cb2c476bbf7bd37b2d9ba88531603d&token=695521304&lang=zh_CN&scene=21#wechat_redirect)      
    
-   [【电路设计】优化降压（ 12V -3.3V ）电源硬件方案  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534378&idx=2&sn=9be1a2b0b96558dc7fc2a7e9f326ab95&chksm=fcefa448cb982d5e43c69bbb6cff88fe9565c49607b850e58faf6c491b4a4104e9dcd76b70fc&scene=21#wechat_redirect)
    
    

  

[](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534378&idx=2&sn=9be1a2b0b96558dc7fc2a7e9f326ab95&chksm=fcefa448cb982d5e43c69bbb6cff88fe9565c49607b850e58faf6c491b4a4104e9dcd76b70fc&scene=21#wechat_redirect)

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分