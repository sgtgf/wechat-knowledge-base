# H桥电机正反转换控制电路图

原创 电路一点通 2024-11-01 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/2igzj\_CBPes\_qXXQIW73Sg](https://mp.weixin.qq.com/s/2igzj_CBPes_qXXQIW73Sg)

# **电机控制电路**

# 所谓的H桥电路就是控制电机正反转的。下图①就是一种简单的H桥电路，它由2个P型场效应管Q1、Q2与2个N型场效应管Q3、Q4组成，所以它叫P一M0s管H桥。如图①所示

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\H桥电机正反转换控制电路图_images\img_000_a8b37a87b291.other)

  

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\H桥电机正反转换控制电路图_images\img_001_70edce1179ad.jpg)

# 图①H桥电机正反转换控制电路

  

桥臂上的4个场效应管相当于4个开关，P型管在栅极为低电平时导通，高电平时关闭; N型管在栅极为高电平时导通，低电平时关闭。场效应管是电压控制型元件，栅极通过的电流几乎为“零”。见图②图③LRF场效应管

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\H桥电机正反转换控制电路图_images\img_002_152d1d03c744.jpg)

# 图②LRF4905场效应管，55v200w

  

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\H桥电机正反转换控制电路图_images\img_003_f877404cc3cf.jpg)

# 图③LRF3205场效应管，55v200w

  

# 正因为这个特点，在连接好下图电路后，控制臂1置高电平(u=vcc)，控制器臂2置低电平(u=0)时，Q1、Q4关闭，Q2、Q3导通，电机左端低电平，右端高电平，所以电流沿箭头方向流动。设为电机正转。

  

# 控制臂1置低电平，控制臂2置高电平时，Q2、Q3关闭，Q1、Q4导通，电机左端高电平，右端低电平，所以电流沿箭头方向流动。设为电机反转。

  

# 当控制臂1、2均为低电平时，Q1、Q2导通，Q3、Q4关闭，电机两端均为高电平，电机不转; 当控制臂1、2为高电平时，Q1、Q2关闭，Q3、Q4导通，电机两端均为低电平，电机也不转。見图④电动机

  

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\H桥电机正反转换控制电路图_images\img_004_167a6e725dd8.jpg)

# 图④ 电动机120w

  

# 所以，此电路有一个优点就是无论控制臂状态如何(绝不允许悬空状态)，H桥都不会出现“共态导通”(短路)，很适合我们使用。

  

(另外还有4个N型场效应管H桥，内阻很小，有“共态导通”现象，栅极驱动电路较复杂，或用专用驱动片来完成)。

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\H桥电机正反转换控制电路图_images\img_005_dc9b39eaee8a.other)

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