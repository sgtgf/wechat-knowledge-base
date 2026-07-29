# 负载24V 延时通电电路设计，加一个BJT搞定

原创 电路一点通 2024-10-22 11:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/Tq1Ght\_HpLaN35HQtt9u4g](https://mp.weixin.qq.com/s/Tq1Ght_HpLaN35HQtt9u4g)

当一个直流电源同时供给处于高处，不方便上去顺序接通（减小启动电流）的两个负载时，如果负载同时上电，该直流电源会出现无法正常“启动”输出的情况，手上没有延时通电继电器，只有若干电子元件（电阻、电容、电感、二极管、晶体管之类），试设计一个简易延时通电电路，让其中一个负载后于另一个负载上电，以错开启动之峰。  

【构思】假定负载为24V直流电机，24V开关电源供电。开关送电后，一个负载立即通电，要求延时1秒后给再另一个负载通电。

![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_000_93748cc77f56.other)    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_001_a8b37a87b291.other)

最直接，最简单且经济的想法是利用RC延时，即上电后电源开始给电容充电，当电容电压上升到某一阈值时，依靠电容电压使晶体管（三极管、场管、可控硅等）导通，使电源接通负载。在这里，我倾向于使用单向可控硅，因为这种器件具有奇特的“脉冲驱动保持”特性，单向可控硅的触发电压在2V左右，我选用2N5063。上面的思路用下面的图来展现：

![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_002_c9691ad851b3.png)

  

电路完成一次延时启动后，如果断开SW，C1上有残存电压，从上图可看出它没有放电通路。如果再次闭合SW，由于C1残存电压的影响，可控硅会立即触发，这就没有起到延时启动的作用。因此要在SW断开后及时给C1放电，最简单的办法是给C1并联一个阻值较大的泄放电阻（通常用1M的，既不会影响充电速度及“锁死”触发电压，又能较快速地放电）。增加泄放电阻后的电路如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_003_bed5213d24f0.jpg)

  

由设计要求可知，上面的电路既要满足R1C1=1s，又要满足可控硅的触发条件（Ugs≈2V），这有时不可兼得。为了调整触发电压，可在可控硅的门极灌入方向串联若干二极管，比如1N4007,每串入一个二极管，电容提供的触发电压会抬升约0.7V，反之降低0.7V。见下图示意（将另一负载电机也画入）：

![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_004_82dde560aacf.jpg)

  

至此，电路的构思完毕，接下来确定元件的参数。

【计算】为方便计算，我选R1=1k，上电时R1C1支路的瞬态电流为：24V/1k=24mA，对电容的冲击不大。电容的耐压按电源电压的1.5~2倍计算，所以耐压值为24\*2=48V（用50V）。

设计要求延时R1C1=1秒，C1=\[1/(1\*10^3)\]\*10^6=1000uF。

R1功率核算：(24/1000)^2\*1000=0.576W，选降额系数0.6，可选用0.576/0.6≈1W的直插金属膜电阻（碳膜也行）。

最终参数，R1：1k 1W，C1:1000uF 50V（铝电解电容）。完整的原理图如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_005_444132d7042c.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\负载24V_延时通电电路设计_加一个BJT搞定_images\img_006_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)
    
-   [汽车8大传感器作用与故障（图文详解）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493943&idx=1&sn=45420d1ca93cb03cf3ebd19dc33445e8&chksm=c33d918bf44a189d1890ac744c0c554502c4dcacdf2dbb54c6ff5db6d06fcc4c139a65ffbf8f&scene=21#wechat_redirect)
    
-   [汽车各传感器工作原理及排查步骤大全](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493395&idx=1&sn=3b36eea34dd9b509bf0a75692be51629&chksm=c33d9faff44a16b993e0f2707214f3f62f3d8d002bc50a54a7d8658a049d37be409a8879955b&scene=21#wechat_redirect)
    
-   [SUV汽车内外部件名称（中英文）标注对照，这让你明明白白](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247494580&idx=1&sn=ee5d4200137e3cbcc5af7c11ae4c0cbc&chksm=c33d9308f44a1a1eb9299dd0a30b6b543efcb05577de8cfba2cab4d33c7d3297edb33b512f92&scene=21#wechat_redirect)
    
-   [模拟电子技术基础(第四版)习题解答-【PDF资料】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522132&idx=2&sn=3a85b0179382987c337a49049f5f0bd7&scene=21#wechat_redirect)
    
-   [看图学集成电路选用检测与查用100问(pdf 302页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [图解电子电路一点通（297页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525041&idx=2&sn=c820aa21927ddca45445f7da84bd0ea5&scene=21#wechat_redirect)  
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&scene=21#wechat_redirect)
    
-   [华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&token=1172852034&lang=zh_CN&scene=21#wechat_redirect)    
    
    
-   [模拟电子技术基础(完整课件)654页-各种放大电路性能比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=3&sn=329b28c7ac8bc14214172aa4b516238c&chksm=fcef8480cb980d96b5b17dbe82004e9c9e5f4957a26f47909c9a1338a1bc4dda8cf56ba929d3&scene=21#wechat_redirect)  
    
-   [最经典MOS管电路工作原理及详解（pdf-55页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&scene=21#wechat_redirect)
    
-   [【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)
    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分