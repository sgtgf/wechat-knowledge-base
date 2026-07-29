# Type-C电路CC1和CC2下拉电阻解析

原创 电路一点通 2025-11-05 11:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/YnV8N7totRR25yH3ZuJTLQ](https://mp.weixin.qq.com/s/YnV8N7totRR25yH3ZuJTLQ)

## 0.24pin版本的type-c的引脚定义：

![](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_000_e88d61c4393a.png)

## [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

## 1.CC1和CC2都NC会发生什么？

如果处于悬空状态**，**A->C的可以供电，C->C就没电，因为C口电源检测不到CC不给电。如果是A口的充电头CC不焊接电阻没问题.C口输出的充电头，CC 两个都要接下拉电阻，不接的话没有输出。

## 2.CC1和CC2接电阻接地或接电源？

![](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_002_69a7d0b2664a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_003_ab2399c025bf.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_004_c01ae68732d3.png)

  

USB-PD对电源设备的识别 是依靠这两个引脚的，向供电端请求电源供给。在简单的设计中，通过CC1和CC2各自独立 下拉一个5.1k电阻到地 即可。而对于需要用到大功率供电或者高清视频传输功能的嵌入式设计，则必须要使用USB-PD控制芯片。

  

识别设备用的，阻值在一定范围内就是设备插入了，这个有接口标准协议的规定的  
一般USB阻抗匹配的电阻也就是4.7K~5.1K左右就能识别到

加了之后可以支持双type-C口的充电线充电

![](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_005_f8bb6f9cf3be.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_006_ebdce18422d8.png)

  

## **一点通推荐**

[RS485电路设计要点及干扰解决法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556725&idx=1&sn=f4bb106229ee693dd4643fd033090669&scene=21#wechat_redirect)

[DCDC降压辐射超标整改措施](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556533&idx=1&sn=86e86e5878eaa02b47d4dfc96f9cc3e0&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[220V通断和过零检测电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247553001&idx=1&sn=81d89be27bf3ccac347c682fbfae50be&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[2025十佳新能源汽车/发动机及混动系统（品牌、机型、车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247530373&idx=1&sn=2557999b31dbf5e42b74c382f6cd018d&token=1669149721&lang=zh_CN&scene=21#wechat_redirect)

[家装电工电气操作技能快速入门-【电子书454页】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456263502&idx=1&sn=c80896d9046db33b3b754333f3ec3c97&scene=21#wechat_redirect)

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\Type_C电路CC1和CC2下拉电阻解析_images\img_007_120c1232ec70.other)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️