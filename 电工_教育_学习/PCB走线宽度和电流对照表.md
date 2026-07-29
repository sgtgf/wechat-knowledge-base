# PCB走线宽度和电流对照表

原创 电路一点通 2025-08-01 11:57 广东

> 原文地址: [https://mp.weixin.qq.com/s/ImAHxkI1ZzMS1asO9mHh-Q](https://mp.weixin.qq.com/s/ImAHxkI1ZzMS1asO9mHh-Q)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB走线宽度和电流对照表_images\img_000_3aaf4290028f.png)

1、一般认为20mil走线可以过1A电流（有一定余量）

  

2、0.5mm（20mil）过孔可以过1A电流（有一定余量）

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\PCB走线宽度和电流对照表_images\img_001_9f08ed891344.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  

如果2A电流放置0.25mm（10mil）过空作为载流，至少放置四个过孔

  

制作最小过孔的能力与板厂的制作能力和工艺有关系

  

嘉立创宣传 0.2mm过孔（实际0.3mm）,外径必须0.45mm,最小线宽3.5mil

  

捷多邦宣传0.25mm过孔 （），最小线宽4mil

  

我们PCB走线，线宽与允许通过电流的大小是什么样的？几个因素

  

1、允许的温升：如果能够允许的铜线升高的温度越高，那么允许通过的电流自然也就越高

  

2、走线的线宽：线越宽 ，导线横截面积越大，电阻越小，发热越小，自然温升越小，那么过流更大

  

3、走线的铜厚：铜厚越厚 ，导线横截面积越大，电阻越小，发热越小，自然温升越小，那么过流更大。

  

4、走线到铜平面的距离：比如4层板，表层走线下面会有地铜层或者是电源层，这也会影响散热，距离不同，导热快慢自然有差异，过流能力也会有差异。

  

除了上面的因素，其实还有很多因素，影响大小不一，比如板材材料，是否有绿油，板子厚度等等。

  

下面列出常见的线宽对应的电流值（条件：板厚1.6mm，温升10℃，没有领近铜层）如下表：![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB走线宽度和电流对照表_images\img_002_3f85f80977c2.png)

  

两种板厚（1.6mm和1mm）对应的线宽和电流重新列了个对应表如下，仅供参考：![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB走线宽度和电流对照表_images\img_003_e8d2d772736f.png)

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[3.3-5V 双向电平转换电路,简单又实用](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550417&idx=1&sn=eccf570f4347d33201383b0a39491634&scene=21#wechat_redirect)**
    
-   **[TL431引脚功能、内部结构以及稳压电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550304&idx=1&sn=8ac9a973f9da8df698f1030806a045c3&scene=21#wechat_redirect)**
    
-   **[新能源纯电轿车能耗天梯图（车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524584&idx=1&sn=8853468ba35271b72d0ffa6729e1fb8f&token=507455025&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[广州新能源汽车公司优缺点对比【2025年求职推荐】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524367&idx=1&sn=47af461b29d1e975da966dfb4c363a33&token=507455025&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[10kV高压配电设计-【高压配电培训PPT】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260682&idx=1&sn=df41bc9fe01b5def160aba0e744e9f08&scene=21#wechat_redirect)**
    
-   **[怎样识读电气控制电路图\_(电子电工经典畅销书)](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260639&idx=1&sn=017b6f6b9f55118cb6fde5089e66fd58&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\PCB走线宽度和电流对照表_images\img_004_c6ac43f1aaff.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️