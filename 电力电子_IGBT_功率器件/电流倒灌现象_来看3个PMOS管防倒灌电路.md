# 电流倒灌现象？来看3个PMOS管防倒灌电路

原创 电路一点通 2024-10-13 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/b2bC8Xx-iOJ\_ZfVIaGc5mg](https://mp.weixin.qq.com/s/b2bC8Xx-iOJ_ZfVIaGc5mg)

在实际的电路应用中，有时会遇到电流倒灌现象，今天我们就来分享三个PMOS防倒灌电路。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_000_0100b2f76309.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_001_3e90e56bc01d.png)

  
**👇👇👇更多技术资料👇👇👇  
**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_002_30e990002c0e.png)

  

我们来看这个电路：控制信号G\_CTRL控制VB4.2+给VCC\_OUT供电。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_003_1116cc55b254.jpg)

在这里，源漏极两端没有接反，电阻R2的作用是为了控制栅极电流时不会太大，R3控制栅极的常态。

  

将R3上拉为高时，Pmos截止。

  

这个电路也可以看成是对控制信号的上拉，当MCU内部的管脚没有上拉时，此时的输出为开漏，PMOS无法驱动关闭。

  

那么就需要外部电压的上拉了，这时R3就起到了两个作用。

**第二个电路：**

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_004_1c51b63182f1.jpg)

这个电路不仅可以防倒灌，还可以实现防反接保护功能。

当电源接反时，PMOS不导通，后级电路断开。

在这里加入了一个稳压管，是为了保护MOS管。

除了上面两个电路，实际应用中我们还可以连接两个MOS管进行背靠背防倒灌。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_005_d6b478722a52.jpg)

当控制端为高电平时，三极管Q9导通，Q3和Q4的栅极被拉低到0V，Q3通过体二极管导通，接着Q4导通，负载端得到Vin电压。

当控制端为低电平，三极管Q9断开，Q3与Q4不导通，并且完全关断，由于3与Q4的体二极管是反向串联的，所以无论那个方向都是不通的，实现了防倒灌。

不过要注意，这个电路可能需要一个IO来控制。

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电流倒灌现象_来看3个PMOS管防倒灌电路_images\img_006_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [模拟电子技术基础(第四版)习题解答-【PDF资料】-(多级放大电路）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522132&idx=2&sn=3a85b0179382987c337a49049f5f0bd7&scene=21#wechat_redirect)
    
      
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [图解电子电路一点通（297页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525041&idx=2&sn=c820aa21927ddca45445f7da84bd0ea5&scene=21#wechat_redirect)  
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&scene=21#wechat_redirect)
    
      
    
-   [华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&token=1172852034&lang=zh_CN&scene=21#wechat_redirect)    
    
    
-   [模拟电子技术基础(完整课件)654页-各种放大电路性能比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=3&sn=329b28c7ac8bc14214172aa4b516238c&chksm=fcef8480cb980d96b5b17dbe82004e9c9e5f4957a26f47909c9a1338a1bc4dda8cf56ba929d3&scene=21#wechat_redirect)  
    
      
    
-   [最经典MOS管电路工作原理及详解（pdf-55页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&scene=21#wechat_redirect)
-   [【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)
    
      
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分