# I2C通信电路设计上拉电阻的计算方法

原创 硬件那点事儿 电路一点通 2025-07-18 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/hWxso3sEnbGtFzhZwEPuzQ](https://mp.weixin.qq.com/s/hWxso3sEnbGtFzhZwEPuzQ)

**Part 01**

**前言**

I2C通信电路是嵌入式设计中的“常客”，在各种产品比如家电，工控，医疗器械等产品的板内通信中I2C总能派上用场。但设计I2C电路时，上拉电阻Rp的选择却是个让人头疼的问题：选小了不行，选大了也不行。今天咱们就来聊聊I2C上拉电阻的计算方法吧。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_000_a70cfe5079fc.png)

**Part 02**

**为啥I2C需要上拉电阻？**

I2C是一种开漏Open-Drain通信协议，SDA和SCL线上的信号只能被拉低（输出0V），而拉高（输出1）全靠上拉电阻Rp。

工作原理：

没有信号时，上拉电阻把线路拉到高电平（接近Vcc）。

IC需要输出0时，会通过内部的MOSFET把线路拉低到接近0V。

上拉电阻的作用：

电阻决定了线路从低电平到高电平的上升速度，同时也影响功耗。选的值不对，要么通信慢得像“乌龟爬”，要么功耗高得像“电老虎”。

那上拉电阻的阻值如何确定呢？

**Part 03**

**上拉电阻计算**

我们需要计算上拉电阻的最小值Rp(min）和最大值Rp(max)，咱们一步步分析。

最小值 Rp(min)计算

如果上拉电阻太小，电流会太大，IC可能拉不下来低电平，导致通信失败。最小电阻由以下公式决定：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_001_a4f55f22a238.png)

Vcc:电源电压

VoL(max):IC能输出的最大低电平电压（I2C标准要求逻辑低电平低于 0.3×Vcc)

IoL:IC拉低时的灌电流能力(Sink Current)

举个例子，Vcc = 3.3V，VoL(max)=0.4V，IoL=3mA，

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_002_6399ca06562e.png)

所以，上拉电阻不能小于966.67Ω，不然IC拉低电平会“力不从心”，逻辑0 可能变成“半吊子”，通信直接崩。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_003_9f84be963780.png)

最大值 Rp(max)计算

如果上拉电阻太大，线路的上升时间会变长，达不到I2C标准的上升时间要求（Rise Time），导致通信失败。最大电阻由以下公式决定：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_004_4f141609e7cf.png)

tr:I2C标准的最大上升时间

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_005_76f18d4f73ae.png)

Cb:总线电容（包括线路电容和IC的引I脚电容）

0.8473：RC电路上升时间的常数（从0.3×Vcc到0.7×Vcc的时间系数）

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_006_4b7148ee43da.png)

举个例子，如果tr=300 ns，Cb = 200pF

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_007_38d33286c112.png)

所以，上拉电阻不能大于1770Ω，不然信号上升太慢，I2C主设备可能还没等到高电平就“等不及了”，通信又崩。

上拉电阻的范围算出来了（966.67Ω到1770Ω），但具体选多大，还得看速度和功耗的平衡。小电阻（接近Rp(min)），优点是上升时间短，通信速度快。缺点是电流大，功耗高。比如用1kΩ，上升时间：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_008_df80a659e5f8.png)

速度很快，但平均电流（信号频繁切换时）：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_009_449ab7952b8c.png)

功耗

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_010_cbb2cefdf727.png)

大电阻（接近 Rp(max)），优点是电流小，功耗低。缺点是上升时间长，速度慢。比如用1.5kΩ，上升时间：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_011_657a61239db6.png)

速度慢了点，但功耗：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_012_53c11ab752db.png)

**Part 04**

**注意事项**

1.总线线电容Cb要估准：

Cb包括PCB走线电容（每厘米约1-2pF）、IC引脚电容（通常5-10pF/个）。比如10cm走线+2个IC，Cb ≈ 20 + 2 × 10 = 40 pF。实际设计时留点余量，测一下最好。

2.Vcc变化的影响:

Vcc不是稳定的，而是波动的，比如不是3.3V，而是2.9-3.5V之间，Rp(min)会变化，重新算一下。

3.环境温度：

高温下IC的IoL可能变小，Rp(min)会变大，注意评估。

4.多设备场景：

多个IC挂在I2C 总线上，电容Cb会增加，Rp(max)变小，重新算一下范围。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_013_9fd0e49914f3.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[华为业务布局/产业链一览，你看完有新认知？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549778&idx=1&sn=00537b8349d08480a7bd7fd1ab3b82e6&scene=21#wechat_redirect)**
    
-   **[过零检测电路示例分享](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549721&idx=1&sn=d0a01e5da88a1fe1032743de4875437b&scene=21#wechat_redirect)**
    
-   **[大浪淘沙！广汽集团好日子一去不返了吗？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523632&idx=1&sn=dcaf11b81dd4109a575c7fbfd0be4f06&scene=21#wechat_redirect)**
    
-   **[汽车电气系统总线路ppt-52页](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523509&idx=2&sn=bbda25406348ed4753a8cdef599db3d9&scene=21#wechat_redirect)**
    
-   **[维修电工（技师、高级技师）-可编程序控制器应用](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260165&idx=2&sn=0a814609de01cd49dfac86c6f22a3601&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C通信电路设计上拉电阻的计算方法_images\img_014_eb60a103d71e.png)

进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️