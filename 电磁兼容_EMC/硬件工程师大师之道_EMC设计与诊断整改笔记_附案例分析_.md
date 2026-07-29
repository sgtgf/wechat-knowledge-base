# 硬件工程师大师之道-EMC设计与诊断整改笔记【附案例分析】

原创 电路一点通 2025-03-28 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/O-Yb1wRbOXU2fA6Em74i3A](https://mp.weixin.qq.com/s/O-Yb1wRbOXU2fA6Em74i3A)

> 介绍了EMC（电磁兼容性）的概念，包括EMS（设备抗扰度）和EMI（设备电磁干扰），以及其三个关键要素：干扰源、传播路径和敏感源。文章强调了学习EMC的重要性，特别是在复杂电磁环境中的产品稳定性、安全性和行业竞争中的经济考量。还提到了EMC测试项目的重点，如传导发射和谐波电流发射的测试要求。

![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_000_7ff1eee99ac2.png)

**👆查看更多目录👆**

## 什么是EMC

EMC实质指的是多种用电设备在同一空间里同时工作时能够遵守“和平共处”的“多边主义”所谓你好我好大家好。  
  

EMC包含EMS与EMI两个部分。  
  

EMS: 任何用电设备在工作时都能通过空间合或者通过与其他设备的连接线，接收到四周的电磁波或者干扰电压电流，这可会会引起设备该设备功能性障碍、性能降级、无法正常工作的现象。EMI: 设备在正常工作时，可以向四周辐射电磁波。这种电磁波可能会引起周围其他设备出现工作异常、性能降级、无法正常工作的现象。

EMS是对设备抗扰度的要求，EMI是针对设备向外骚扰的限制。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_001_8e7a052c92e8.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_002_639299b1bd50.png)  
你只要是用电的设备，你有电源电路降压也好，升压也罢。这些里边都有一些开关的器件。这些开关的器件在开关的这个时候，它就有有一种跟频率相关的东西是吧？

EMC 三要素:干扰源、传播路径、敏感源。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_003_19ee25114f40.png)  
既然有天线的存在，那么我这个信号源可能就通过这个天线，再通过空间辐射发射能量了也有可能这个设备有一些外接的线缆一些外接的线缆。比如说我们这个设备，我们有电源端口，220伏的这个交流电源端口，或者我们还有对外输出的24V端口，然后我们还有可能有，有485通讯485，我们有这些连接线缆。那我也可以通过这个连接线，把我这个设备内部的干扰信号带出去，带到别人的别的设备上去。

我们干扰源，我们要把这个干扰的能量传递到敏感设备上去，那我们肯定没有路径是不行的。那么我们路径有什么呢？我们路径我们知道我们这个电磁波，第一它可以通过这个空间辐射。我干扰源可以发送这个电磁波。对，发送电磁波。这个电磁波通过空间传递到达我们这个敏感设备，这是一种耦合耦合我这个我们叫辐射骚扰叫辐射骚扰，叫辐射也叫。另外一种我干扰源，我可以通过线缆和敏感源之间有连接，或者有有非常明显的一个耦合的这样一个路径线路等等，最明显的就是通过导线，我这个干扰源，我跟你敏感设备通过某些导线连接。比如说通过电源线是吧，电源线或者信号线，信号线我直接注入到你的电源线上，或者耦合到你的信号线上来。

干扰源: dv/dt(电场),di/dt(磁场)较大的电路或者元器件。敏感元: EUT设备内弱小信号模拟电路、复位电路、非平衡传输数字通讯电路耦合路径: 空间辐射与设备的连接线缆(电源线和信号线缆)  
干扰源、传播路径、敏感元三者任意除去一项，EMC问题都能得到解决。我们通常在整改的时候，通常多个环节同时入手。  
![请添加图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_004_592d3cd59b50.jpg)  
任何一个设备或者任意一个设备，只要它是用电的设备，任意设备。它既是干扰源，他也是敏感源。

干扰源、传播路径还有敏感源这三者，他们虽然说有一个这样的关系，但是这三者其实我们任意干掉一项，任意去除一项，EMC的问题都得到解决了。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_005_3902722db198.png)

## 为什么要学习EMC

1.为了我们设计的产品在复杂的电磁环境中能够更加稳定的工作。  
2.为了更好的安全性，医疗、军事、工业(比如电力产品，金融设备)、航空航天和车产品(以及其他产品)都必须保证其安全。  
3.行业竞争引起对企业的经济收入。  
4.国家越发强大，国际形象越来越高，很多产品出口需要做相关的资质与认证。

## EMC测试项目

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_006_e5acc3193dc9.png)  
传导发射是说什么呢？测试我们的电源口，我们的信号端口，有的可能有些信那个信号端口它是不测的，但是电源端口是几乎必测的，必测。

谐波电流发射，谐波电流发射一般是在医疗行业才有的，医疗行业。  
![请添加图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_007_21cf9a116bbe.jpg)  
![请添加图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_008_1141bd063768.jpg)

总结以下：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_009_1bb7e3a6b94a.png)

原文链接：https://blog.csdn.net/weixin\_41226265/article/details/135582637

  

# EMC诊断技巧与案例解析

> 电源系统中的噪声问题，特别是PWM引起的电磁干扰(EMC)，以及静电防护，强调了电感选型、滤波和静电整改的重要性。案例分享了电感设计错误和静电整改的具体实践，指出实验室测试的高成本和经验在解决问题中的关键作用。

  

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_010_ba962b4a9c86.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_011_167b11fc70ed.png)  
时钟就无需多说  
开关电源里面有这些PWM让储能换能周期性变化  
电机这种感性的负载干扰都是波动都是很强的，它也是一定频率以一定频率来工作  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_012_e69b6da5da7c.png)  
静电打坏的，但静电从哪边把它打坏的？静电在你PCB里面，它的走的行走的这个路径是什么？这也分析出来在你的路径上没有抵抗他的措施。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_013_0b5a26fe38e2.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_014_9112f1f2f304.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_015_2efaa8df622c.png)  
验室比较贵，800到1000块一个小时。你想想如果说你在那边浪费时间的话，这个成本其实是很高的。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_016_9ca5b92af166.png)  
这种EMC具体问题要具体分析的，虽然专家可能会提供方法，但是方法不一定对，所以说需要验证。每一个专家或者说高级工程师他走过来的这种，但经验还是比较重要的。我个人觉得经验比较重要。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_017_fe49f99c40b3.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_018_d52787bee064.png)  
电源与地噪声为主。宽带噪声就是那整个浮起来了。相当于把电源和地，因为电源和地是一个相对的这种地平面  
不同噪声类型，处理方式不同  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_019_b8ec31d7655a.png)  
电缆超标定位  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_020_c6e51db24351.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_021_4d171804306c.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_022_c8a81d1b02b1.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_023_1bda98aad22a.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_024_73df04e1bda5.png)  
馒头波 电源噪声频率比较小，  
第一方面造成他这个案例叫电感选型与匹配，电感选择不好，相当于滤波做的不好  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_025_fac89723a2b7.png)

因为磁珠的话就是电感，可能在低频效果好。电感的话就是高频的，相当于是高频的，所以他把地坪这边全拉下来了。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_026_d53504f94e31.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_027_89a7924b6cdf.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_028_abdfdd2ab844.png)  
滤波不好

电感选取不当  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_029_ff46b3bcdbca.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_030_c27dd2acf151.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_031_db5ac010052b.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_032_4408f0df512c.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_033_737313acf2dd.png)  
静电 (ESD)整改定位  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_034_1ea6b1944925.png)  
案例: 塑料外壳静电处理  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_035_e4d65e3e2c90.png)

案例: 敏感信号受干扰  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_036_5857bacd056d.png)  
脉冲群整改定位(EFT )

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_037_324768b15bc7.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_038_d357b8a55283.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_039_edc767c4ec0f.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_040_e54fc7d8ed13.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_041_2697a6cc2b4a.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_042_8f446f8099f4.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_043_ea857884f246.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_044_29502f305506.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_045_57f2264309c7.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   **[各种电工电子控制电路365例【文末领取】](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[【808页】西门子S7-200 300 400完整培训教程 、变频器培训教材](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254439&idx=2&sn=a5197e1020460d0711cc99af703257ad&scene=21#wechat_redirect)**
    
-   [**【397页】西门子PLC系统及其应用培训ppt**](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254438&idx=2&sn=287d0277c4525dd2c8f6b9c6c7b0da89&scene=21#wechat_redirect)  
    
-   [**图表细说元器件及实用电路362页**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539497&idx=2&sn=2b675f61f20c00929a3e00218819c13a&token=739485273&lang=zh_CN&scene=21#wechat_redirect)
    
-   [**清华大学DeepSeek第一、二弹干货：从入门到精通-赋能职场**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539461&idx=2&sn=fb6044426bf24370f4bdc4a1073eeb1d&scene=21#wechat_redirect)
    
-   **[ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&token=1991019132&lang=zh_CN&scene=21#wechat_redirect)**
    
-   [三菱PLC Q系列 QnACPU编程手册（PID控制指令篇）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254661&idx=2&sn=4190c10cd690736929e4a076ccd3f3db&scene=21#wechat_redirect)
    
-   [电气工程基础知识及识图（第一讲）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254710&idx=2&sn=e844f3f489cdf31366b70d77fe110f07&scene=21#wechat_redirect)
    
-   [学西门子变频器应用深入浅出-254页pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254707&idx=2&sn=395f183db4de32c363c51379d09e25ef&scene=21#wechat_redirect)
    
-   [2025 AI+热门方向](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254771&idx=2&sn=db18ac97d9dad3a4a93dd42d377465b8&scene=21#wechat_redirect)
    
-   [电气系统总线与常用元器件（课件）.ppt](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254804&idx=2&sn=fe95989da467faf5fedac07fc721f929&scene=21#wechat_redirect)
    
-   [PLC编程实用指南（第2版）848页.pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254979&idx=2&sn=3fa37d7e37d6f66be0ff06e69a47206e&scene=21#wechat_redirect)
    
-   [图说电动（摩托）车原理与快修](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254984&idx=2&sn=fd5f410a4a7046b9f4344cfda88ea6dc&scene=21#wechat_redirect)
    
-   [装修水电工技能从入门到精通（图解版）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254992&idx=2&sn=2cc0dcf619ddef9c6a6ff0457aa8c5b0&scene=21#wechat_redirect)
    
-   [  
    ](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254996&idx=2&sn=2c6bedbb4df7aba634f440cb611f3216&scene=21#wechat_redirect)[电气二次回路（63页ppt）-电气人必备系列](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254996&idx=2&sn=2c6bedbb4df7aba634f440cb611f3216&scene=21#wechat_redirect)
    
-   # [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   # [西门子S7\_PC应用简明教程pdf【电子书】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456255472&idx=2&sn=81f4b8fedb328ab92ca6ab401f50565a&scene=21#wechat_redirect)
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    

[](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

[**![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\硬件工程师大师之道_EMC设计与诊断整改笔记_附案例分析__images\img_046_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**