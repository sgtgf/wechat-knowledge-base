# 半桥LLC电路死区的选择经验之功率管驱动 的尖峰

原创 电路一点通 2024-08-26 11:27 广东

> 原文地址: [https://mp.weixin.qq.com/s/TuJ0gHG9oFOj44vGSTJ2Ew](https://mp.weixin.qq.com/s/TuJ0gHG9oFOj44vGSTJ2Ew)

如图19所示，当上管关断后，在上管的驱动Vg1上出现一个电压尖峰，当死区时间减少，下管ZVS开通不完全时，这个电压尖峰会更大，从图20可以看出这个尖峰出现的时刻和![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_008_31b46ed5604c.png)下降的时间是吻合的。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_001_05e26240dd47.png)  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_002_178612716ebc.jpg)

图19 上管关断时Vg1的电压尖峰

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_003_3c468f551ec1.png)

图20 上管关断时Vg1和Vds1波形

  

## **一点通推荐**

  

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [看图学集成电路选用检测与查用100问(pdf 302页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
      
    

我们将模块上下管用其结构示意图来表示，功率管的D，S极都存在引线电感，而且还有PCB板引入的到S脚的引线电感，我们测试时，测试到的是G1和S1间的电压差![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_004_488621274153.png)。

当上管关断时，HO为低电平（驱动电路见图1），![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_013_4252a64502bc.png)通过Q305组成的电路放电（等效电阻![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_011_b1c8f5342d72.png)），放到门限电压时，MOSFET关断，此时上下管开始换流，电流 i1减少，i2增加，电感的电流方向如图所示，电容![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_007_bf99c7acbbc9.png)开始充电，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_000_31b46ed5604c.png)上升；![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_009_4442bbb30e40.png)，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_005_4252a64502bc.png)，以及G1到S的驱动阻抗![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_006_b1c8f5342d72.png)，L2，L3组成的电路也开始对![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_012_4442bbb30e40.png)，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_016_4252a64502bc.png)充电，所以![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_014_4252a64502bc.png)电压开始上升， 测试到的电压![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_015_91378397f6bb.png)（引线电感的电压上正下负为正方向），

如果由于死区时间的减少，造成下管不能完全的ZVS开通，在下管开通的瞬间，就会有一个较大的冲击电流流过Q1和Q2的极间电容和引线电感，在![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_010_4252a64502bc.png)行成一个更高的密勒平台，同时在引线电感L2，L3上造成一个上正下负的电压降，这个电压降叠加在密勒平台上，使驱动![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_017_f70e22c00b36.png)的电压尖峰更高。

同时：也可以看到，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_018_5fb25faf9ec3.png)，如果驱动阻抗越大，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_019_b65fdc3efd29.png)就越大，测试到的电压尖峰也就越大，引线电感L3越大，测试到的电压尖峰也会越大。而功率管是否会导通取决于![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_020_4252a64502bc.png)的电压和持续的时间：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_021_bdf8332e5927.png)

  

从上面的公式可以看出，如果能让上管关断时![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_022_31b29ac88fae.png)尽可能的减少，就可以降低功率管导通的风险，同时尽量减少功率管G，D之间的耦合电容也可以减少![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_023_4252a64502bc.png)上的电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_024_4e019a26c6e2.png)

图21 半桥电路上下管结构示意图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC电路死区的选择经验之功率管驱动_的尖峰_images\img_025_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******