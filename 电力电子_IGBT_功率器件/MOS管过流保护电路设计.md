# MOS管过流保护电路设计

原创 电路一点通 2024-08-28 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/xZu3vhNE9q6UI7v6vh88KA](https://mp.weixin.qq.com/s/xZu3vhNE9q6UI7v6vh88KA)

  

过流保护电路利用运放感知电流，通过分流电阻产生压降，与预设电压比较控制MOS管开关。需注意电位计设置、稳定电源及滞后电路的设计。元件包括电源、LM358、MOSFET等。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管过流保护电路设计_images\img_000_cc8e66c7dcff.other)

  

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
    
      
    

**通常在关闭负载之前，检测负载电流是很重要的。**

今天分享一个网上的过流保护电路，它**利用运放来感知电路是否有过流发生**。

电路设计：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管过流保护电路设计_images\img_001_08c15c4cbf18.jpg)

\-至少12V的电源

\-LM358

\-IRF540N

\-100uf/25V的电容

\-散热器

\-50kΩ电位计

\-精度1%的1kΩ和100kΩ电阻

\-1MΩ电阻

\-1Ω分流电阻，额定功率为2W

这是电路所需要的元器件，这里的MOSFET**型号是****IRF540N**，可以用VBL1104N更好代替。

**工作原理**

当MOS管导通时，负载电流从漏极流向源极，然后通过R1导向GND。一般检测电流就是通过这个分流电阻R1,（1Ω 2W），它会产生一个压降。

**这个压降是怎么算呢？**

这就要利用欧姆定律了（V=I x R）：如果是1A的负载电流，分流电阻的压降就是1V。

也就是说可以**对比这个电压和使用运放时预设的电压**，去检测过流情况，然后改变MOS管的状态，切断负载。

**那电压是怎么控制MOS管的开关呢？**

这个LM358是比较器，它能够比较两个值的大小，一个是R1的压降，一般导入比较器的反向引脚，另一个是RV1生成的预设电压，导入的是比较器的同向引脚。

这里的RVI的主要作用是**分压。**

也就是说，当感应电压小于这个预设电压时，RV1会在输出这里生成正电压（接近VCC），相反就是负电压（接地，为0V），这就能控制MOS管了。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管过流保护电路设计_images\img_002_08c15c4cbf18.jpg)

**不过要注意：**

**如果将电位计RV1的1A设置为MOS管关断的阈值，比较器检测到的R1压降可能是1.01V，**这会导致比较器（LM358）断开负载，暂态响应提高了预设电压，让比较器工作在线性。

所以最好是**在比较器使用稳定电源**，让瞬态改变不会影响比较器的输入电压和参考电压。

此外，**比较器需要加入滞后**，比如这个100kΩ的R4和稳压器LM7809，有小伙伴知道这两个的作用吗？可以在评论区一起留言，探讨下这个电路设计！

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管过流保护电路设计_images\img_003_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******