# 电路符号认知N和P沟道MOSFET工作原理

原创 磁小诗 电路一点通 2025-10-22 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/zst0KN0jMx7h35EkJx\_HMg](https://mp.weixin.qq.com/s/zst0KN0jMx7h35EkJx_HMg)

硬件面试中有遇到过这样的事吗？通常让你画一个增强型的MOSFET，或是N沟道MOSFET或是P沟道MOSFET，然而，无论是经验不多的新工程师还是经验丰富的老工程师，多数情况下还真不能完全正确的把这个器件的原理符号画出来，甚至画的五花八门。但是想想也很简单，因为器件的原理符号在一定程度上代表着其工作原理，只要理解简单原理就很容易画出来，并且不会出现错误，这里总结了3点，希望对大家有所帮助。  

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电路符号认知N和P沟道MOSFET工作原理_images\img_000_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

  

1、对于增强型N沟道和P沟道MOSFET：从**沟道线**（虚线）、**电子运动**方向箭头，**门极电压**去理解即可，其中前两项最容易混淆。以下文字描述较多但很简单，图片也已标明了要点。  
  

N沟道MOSFET：  
（1）虚线：代表导电沟道，同时也表示在门极不加电压的情况下，导电沟道是断开状态，器件不导通，器件是常闭状态，虚线的含义就是表示断开。  
（2）向内的箭头：表示了加上栅极电压后沟道中电子运动方向，电子向内被吸引，从而沟道被电子填充形成电子型导电沟道-N沟道。  
（3）VGS电压：栅极G\-源极S施加大于开通阈值的正电压，正电压的电场力吸引电子，排斥空穴，从而让源极S填充电子，形成D-S的电子导电沟道  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电路符号认知N和P沟道MOSFET工作原理_images\img_001_73ffa3330ac0.png)N沟道MOSFET

P沟道MOSFET：

（1）虚线：代表导电沟道，同时也表示在门极不加电压的情况下，导电沟道是断开状态，器件不导通，器件是常闭状态，虚线的含义就是表示断开。  
（2）向外的箭头：表示了加上栅极电压后沟道中电子运动方向，电子向外被排斥运动，空穴被吸引至沟道，从而沟道被空穴填形成空穴型导电沟道-P沟道。  
（3）VSG电压：源极S\-栅极G施加大于开通阈值的正电压，正电压的电场力吸引空穴，排斥电子，从而让源极S填充空穴，形成S-D的空穴导电沟道  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电路符号认知N和P沟道MOSFET工作原理_images\img_002_d1b97310cb7f.png)P沟道MOSFET图解

2、对于耗尽型沟道的MOSFET，区别在于沟道线是实线，表示在门极不加电压的情况下，导电沟道已经形成，器件是常开状态，实线的含义就是表示闭合。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电路符号认知N和P沟道MOSFET工作原理_images\img_003_d390fcb6cc1d.jpg)耗尽型MOSFET

增强型MOSFET我们在电路设计中用的最多，需要掌握。

  

## **一点通推荐**

[光耦电路设计与参数计算](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247555012&idx=1&sn=f690d3360e4de4715dc7ba74dc47c323&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)

[220V通断和过零检测电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247553001&idx=1&sn=81d89be27bf3ccac347c682fbfae50be&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)

[几种有趣的电路设计（阻容降压、防过压、LLC、PFC、正反激电路）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552192&idx=1&sn=f594bacfa59b4396ab6b141a66e74972&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)

[拆个微波炉（机械）看内部结构部件，清晰修理流程](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552072&idx=1&sn=b4c30d3fb2905a812d97615887628c43&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)

[硬派越野SUV （5-200W）排行天梯榜](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247528988&idx=1&sn=d54bf21e386f4d6aacdf9e7089f9af25&token=1685944155&lang=zh_CN&scene=21#wechat_redirect)

[常用电工电路图，多看两次，就会了](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456262902&idx=1&sn=5871044438677af299f5a1eeb9354a0a&scene=21#wechat_redirect)

* * *

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电路符号认知N和P沟道MOSFET工作原理_images\img_004_7d56a79fa6f5.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️