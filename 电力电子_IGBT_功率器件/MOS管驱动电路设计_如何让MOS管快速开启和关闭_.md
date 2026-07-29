# MOS管驱动电路设计，如何让MOS管快速开启和关闭？

原创 电路一点通 2025-01-22 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/ja0Hjvx\_iOcvjt1O946zXQ](https://mp.weixin.qq.com/s/ja0Hjvx_iOcvjt1O946zXQ)

### 【原因】  

    关于MOS管驱动电路设计，本文谈一谈如何让MOS管快速开启和关闭。

一般认为MOSFET（MOS管）是电压驱动的，不需要驱动电流。然而，在MOS管的G极和S极之间有结电容存在，这个电容会让驱动MOS变的不那么简单。  
下图的3个电容为MOS管的结电容，电感为电路走线的寄生电感

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_001_0c4d1098c4cd.jpg)  
  

如果不考虑纹波、EMI和冲击电流等要求的话，MOS管开关速度越快越好。因为开关时间越短，开关损耗越小，而在开关电源中开关损耗占总损耗的很大一部分，因此MOS管驱动电路的好坏直接决定了电源的效率。  
怎么做到MOS管的快速开启和关闭呢？

### 【原理】

对于一个MOS管，如果把GS之间的电压从0拉到管子的开启电压所用的时间越短，那么MOS管开启的速度就会越快。与此类似，如果把MOS管的GS电压从开启电压降到0V的时间越短，那么MOS管关断的速度也就越快。  
由此我们可以知道，如果想在更短的时间内把GS电压拉高或者拉低，就要给MOS管栅极更大的瞬间驱动电流。  
大家常用的PWM芯片输出直接驱动MOS或者用三极管放大后再驱动MOS的方法，其实在瞬间驱动电流这块是有很大缺陷的。  
比较好的方法是使用专用的MOSFET驱动芯片如TC4420来驱动MOS管，这类的芯片一般有很大的瞬间输出电流，而且还兼容TTL电平输入，MOSFET驱动芯片的内部结构如下：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_002_79b7bf6cca26.png)  
MOS驱动电路设计需要注意的地方：  
因为驱动线路走线会有寄生电感，而寄生电感和MOS管的结电容会组成一个LC振荡电路，如果直接把驱动芯片的输出端接到MOS管栅极的话，在PWM波的上升下降沿会产生很大的震荡，导致MOS管急剧发热甚至爆炸，一般的解决方法是在栅极串联10欧左右的电阻，降低LC振荡电路的Q值，使震荡迅速衰减掉。  
因为MOS管栅极高输入阻抗的特性，一点点静电或者干扰都可能导致MOS管误导通，所以建议在MOS管G极和S极之间并联一个10K的电阻以降低输入阻抗。  
如果担心附近功率线路上的干扰耦合过来产生瞬间高压击穿MOS管的话，可以在GS之间再并联一个18V左右的TVS瞬态抑制二极管。  
TVS可以认为是一个反应速度很快的稳压管，其瞬间可以承受的功率高达几百至上千瓦，可以用来吸收瞬间的干扰脉冲。

综上，MOS管驱动电路参考：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_003_845fcd842158.jpg)  
MOS管驱动电路的布线设计：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_004_ce4cc3ec8e18.jpg)  
MOS管驱动线路的环路面积要尽可能小，否则可能会引入外来的电磁干扰。  
驱动芯片的旁路电容要尽量靠近驱动芯片的VCC和GND引脚，否则走线的电感会很大程度上影响芯片的瞬间输出电流。

  

常见的MOS管驱动波形：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_005_22636feafbf0.png)

如果出现了这样圆不溜秋的波形就等着核爆吧。有很大一部分时间管子都工作在线性区，损耗极其巨大。

一般这种情况是布线太长电感太大，栅极电阻都救不了你，只能重新画板子。  
高频振铃严重的毁容方波：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_006_63019d2403d2.png)

在上升下降沿震荡严重，这种情况管子一般瞬间死掉，跟上一个情况差不多，进线性区。  
原因也类似，主要是布线的问题。又胖又圆的肥猪波。  
上升下降沿极其缓慢，这是因为阻抗不匹配导致的。  
芯片驱动能力太差或者栅极电阻太大。  
果断换大电流的驱动芯片，栅极电阻往小调调就OK了。  
打肿脸充正弦的生于方波他们家的三角波：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_007_ab4ad2631cb2.png)  
驱动电路阻抗超大发了，此乃管子必杀波，解决方法同上。  
大众脸型，人见人爱的方波：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_008_ade29d60ede1.png)  
高低电平分明，电平这时候可以叫电平了，因为它平。边沿陡峭，开关速度快，损耗很小，略有震荡，可以接受，管子进不了线性区，强迫症的话可以适当调大栅极电阻。

方方正正的帅哥波，无振铃无尖峰无线性损耗的三无产品，这就是最完美的波形了。

******进大家庭⭕圈探讨回复:****** ******交流******

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_009_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_013_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_010_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_011_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路设计_如何让MOS管快速开启和关闭__images\img_012_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)