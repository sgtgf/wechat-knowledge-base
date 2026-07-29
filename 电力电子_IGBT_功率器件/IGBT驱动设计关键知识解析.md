# IGBT驱动设计关键知识解析

原创 电路一点通 2025-11-07 11:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/xdcp22Q43\_MlAMWlHAxuoA](https://mp.weixin.qq.com/s/xdcp22Q43_MlAMWlHAxuoA)

网上没有系统的讲解，都是东一下西一下，知识点比较零散，见谅。

IGBT的开关损耗随着栅极电阻的增大而增大：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_000_bca48db4d984.png)

相同门极电阻阻值，小电流的时候更容易震荡：

## [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_002_474246c5a157.png)

电阻越大，EMI效果越好。下图是最小栅极电阻的确定方法：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_003_5757bf3215b6.png)

CLAMP是在IGBT关断时低电压锁定。

DESAT是电阻和二极管是检测IGBT导通压降的。其原理是里面的比较器进行比较输出的。

芯片里面集成了信号变压器，将驱动端和功率端进行隔离。

有一个问题，DESAT接的消隐电容220pF作用：当 IGBT 或 MOSFET 关断时，电压瞬态可能会导致误触发 **DESAT 保护机制**。**220pF 电容起到了低通滤波作用，抑制高频噪声，避免误检测**。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_004_0f73ecd42286.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_005_5ff5bd673bff.png)

IGBT芯片隔离的类型：光耦，电磁，电容进行隔离，如下图：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_006_69ad36517531.png)

IGBT在正常工作的情况下，Vce电压是0.3V左右，当发生退饱和时候，Vce电压升高到5V 或8V或 9V

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_007_e2caa3627d45.png)

DSEAT进行退饱和检测，CLAMP进行软关断：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_008_1f182e12497b.png)

IGBT采用双电源的话，更加易于关断：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_009_3079e35b8e00.png)

  

## **一点通推荐**

[大电流电路布线方法解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556798&idx=1&sn=28a053a6b0c0b5428d99d414500e888d&scene=21#wechat_redirect)

[DCDC降压辐射超标整改措施](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556533&idx=1&sn=86e86e5878eaa02b47d4dfc96f9cc3e0&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[电压转电流电路设计（TI参考设计）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550908&idx=1&sn=9b87a66ba4068261afcf39bcc884739b&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[长城Hi4四驱插混技术详解，坦克越野让你心动了吗？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247530453&idx=1&sn=4cfdc092884d5ebad2952cf96a96150d&token=1669149721&lang=zh_CN&scene=21#wechat_redirect)

[商用车整车控制器技术方案-65页【电子书】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247530453&idx=2&sn=9fb55d9e90f7c0c6bcb130427c55b75b&token=1669149721&lang=zh_CN&scene=21#wechat_redirect)

[常见电气故障处理全攻略，让你轻松应对！](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456263556&idx=1&sn=b3865c27f91f080210f43f72e8558d3a&scene=21#wechat_redirect)

[DCDC降压辐射超标整改措施](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556533&idx=1&sn=86e86e5878eaa02b47d4dfc96f9cc3e0&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[220V通断和过零检测电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247553001&idx=1&sn=81d89be27bf3ccac347c682fbfae50be&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[2025十佳新能源汽车/发动机及混动系统（品牌、机型、车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247530373&idx=1&sn=2557999b31dbf5e42b74c382f6cd018d&token=1669149721&lang=zh_CN&scene=21#wechat_redirect)

[家装电工电气操作技能快速入门-【电子书454页】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456263502&idx=1&sn=c80896d9046db33b3b754333f3ec3c97&scene=21#wechat_redirect)

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\IGBT驱动设计关键知识解析_images\img_010_04c892c56577.other)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️