# MOS管子又炸，分享几种常见的MOS管驱动波形的判断

原创 王工 电路一点通 2024-10-16 11:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/lqfDfFAVJc2vYBYJjyHCRw](https://mp.weixin.qq.com/s/lqfDfFAVJc2vYBYJjyHCRw)

回忆起多年前做大功率电源产品的一段经历，那段时间主要调试MOS管的参数，一不小心就炸机，老板懂技术就还好，不懂得还说你技术差，这么简单都调不好，一会又是砰砰砰的炸机声，一只管子几十块，心疼惨了！

类似下面这种几十安，几百伏的，管子炸开就是这样子的。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_000_b48b16800752.other)

后来也不断的总结，大功率MOS管的炸机原因有很多，可能是设计缺陷，或者layout布板问题，还有可能是管子本身质量问题。这种大功率管子调试时，驱动波形特别重要，今天分享几种常见的MOS管驱动波形的判断。

  

**基础知识**

一般认为三极管是电流驱动型，所以驱动三极管，要在基极提供一定的电流。

一般认为MOS管是电压驱动型，所以驱动MOS管，只需要提供一定的电压，不需要提供电流。

实际是这样吗？  

由于MOS管的制作工艺，决定了本身GS之间有结电容以及GD之间有弥勒电容，DS也有寄生电容，这使得MOS管的驱动变得不那么简单。

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_001_97db088518a2.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

  

备注：如下图为软件绘制，示意图仅供参考，便于理解。

1、MOS正常驱动波形

  

**描述**：MOS一般是慢开快关，上升沿相对下降沿较缓，整体看起来近似方波，比较完美。

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_002_d347bb560b0b.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

2、MOS驱动波形略微震荡

  

**描述**：肉眼可见这也是方波，上升沿和下降沿都比较陡峭，开关速度比较快，管子损耗小，只是管子有略微的震荡。关注公众号硬件笔记本

  

**解决手段**：适度加大栅极驱动电阻。  

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_003_69e13efdd124.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

3、MOS驱动波形边沿缓慢

  

**描述**：波形的上升沿和下降沿非常缓慢，甚至可能近似三角波，可尝试将栅极驱动电阻减小，如果变化不大，很可能是驱动芯片的驱动能力不足引起。

  

**解决手段**：更换驱动能力较强的驱动芯片。  

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_004_175302a9c398.other)

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_005_5ff162b78465.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

4、MOS驱动高频振铃

  

**描述**：可以看出，管子震荡的非常厉害，有很大一部分时间都工作在线性区，损耗非常大。用红外测温仪查看，管子秒秒钟温升几十度，断电稍微慢一点，管子就被热死了。

  

**解决手段**：这种情况一般都是布板的问题，不用调参数，调了也没用，只能重新画板子。关注公众号硬件笔记本

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_006_6a4b175106d1.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_007_1d9786d4e4bb.other)

  

分享一份很好的仙童资料，详细介绍了MOS管的参数，对初学者很有用，合计20页。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_008_9014e828fa47.other)

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_009_50de1ed3c8db.other)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_010_442f5803eb39.other)

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_011_c5cfe0ec2012.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_012_8a292447c60a.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_013_e70033e5fb32.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_014_783f4c58e34f.other)

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_015_dcb0cae9c8ec.other)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管子又炸_分享几种常见的MOS管驱动波形的判断_images\img_016_a8b37a87b291.other)

[](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

## **一点通推荐**

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [模拟电子技术基础(第四版)习题解答-【PDF资料】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522132&idx=2&sn=3a85b0179382987c337a49049f5f0bd7&scene=21#wechat_redirect)
    
-   [看图学集成电路选用检测与查用100问(pdf 302页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [图解电子电路一点通（297页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525041&idx=2&sn=c820aa21927ddca45445f7da84bd0ea5&scene=21#wechat_redirect)  
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [19种常用驱动电路设计及应用（电子版）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529502&idx=2&sn=b35abc3b8294b8edc89daa264cb38987&chksm=fcef977ccb981e6ae3c739547627682d34206a98e9f36f2f63a36a56d9dd94bacef74b2043a7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&scene=21#wechat_redirect)
    
-   [华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&token=1172852034&lang=zh_CN&scene=21#wechat_redirect)    
    
-   [常用接口设计和ESD保护(PDF-82页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523952&idx=2&sn=fac1a461d467325de86d1f531ca296c9&chksm=fcef7d12cb98f404b7b1dc90a93edc36a17f244f1a2d0122d78527eb5525b77e4979c7aebf7f&token=110640857&lang=zh_CN&scene=21#wechat_redirect)  
    
    
-   [9天练会电子电路识图.pdf资料（302页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [模拟电子技术基础(完整课件)654页-各种放大电路性能比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=3&sn=329b28c7ac8bc14214172aa4b516238c&chksm=fcef8480cb980d96b5b17dbe82004e9c9e5f4957a26f47909c9a1338a1bc4dda8cf56ba929d3&scene=21#wechat_redirect)  
    
-   [最经典MOS管电路工作原理及详解（pdf-55页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&scene=21#wechat_redirect)
    
-   [【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)[最经典MOS管电路工作原理及详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&chksm=fcef8358cb980a4e18bf95201f656b857dfeff63361746c65d100d8bfe3b50cf30e04ef547e8&scene=21#wechat_redirect)
    
-   [电源管理指南（85页）-PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分