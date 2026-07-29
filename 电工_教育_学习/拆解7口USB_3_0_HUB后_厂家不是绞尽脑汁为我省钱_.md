# 拆解7口USB 3.0 HUB后，厂家不是绞尽脑汁为我省钱？

原创 电子开发学习 电路一点通 2025-08-01 11:57 广东

> 原文地址: [https://mp.weixin.qq.com/s/su3-KUKtsXB35yJgm\_RiZg](https://mp.weixin.qq.com/s/su3-KUKtsXB35yJgm_RiZg)

> 7口USB 3.0 Hub是一种多端口扩展设备，专为解决电脑接口不足问题而设计，支持高速数据传输和多种设备连接，价格范围广泛，从入门级几元到高端几十元不等，类型包括带独立开关的集线器和分线器，满足不同需求

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_000_8753b9ec1dd0.png)

看到一个7口USB3.0 HUB，而且每个口都带开关和指示灯，价格竟然只需要19元，那可是7个口啊，那可是USB 3.0啊！

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_001_08e27c826761.png)

我很惊讶这产品是怎么做到这个价格的。要知道我前几天开源了一个4口USB3.0 HUB（开源链接：太香了！花15元DIY一个USB3.0 hub，全部开源！），在白嫖四层PCB和不计算3D打印外壳的价格的前提下，成本都已经达到了15元。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_002_55992b4a1627.png)

如果做成7口，还要增加1个USB3.0 HUB芯片和3个USB3.0连接器，增加3个限流开关、电容等等，下来成本要增加8块钱左右。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_003_16b51cf87d58.png)

百思不得琪姐啊，于是我赶紧内裤兜里掏了19元私房钱，把这个7口USB3.0 HUB买了一个，打算学习一下怎么降低成本。和市面上大多数USB3.0 HUB一样，它采用了尿袋型设计，盒子上甩了一根上行线就像是导尿管，顾名思义尿袋。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_004_b4bd1286bd61.png)

上面写着USB 7 Ports HUB、3.0等字样。每个口旁边都有一个指示灯和一个开关。这么看还挺有质感，可能主要是我照片拍得好！

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_005_552cbc28f329.png)

咱也别测传输速度了，真男人，就要直接拆解。拆开看到什么芯片就知道它是啥性能。拆解也非常简单，这玩意一个螺丝都没用，卡扣结构，直接撬就行，相信大力永远能出奇迹！

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_006_5080e2829d51.png)

真是不拆不知道，一拆吓一跳！拆了才发现这玩意比我想象的简单多了。打眼一看，发现我打眼了！好家伙，仅仅只用了两个USB2.0的4口HUB芯片。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_007_4f10dcd2d5c4.png)

但是盒子上写的USB3.0又是什么讲究呢？仔细看布线，发现从尿袋线进来的两组差分信号直连到了第一个USB连接器，这两组信号肯定就是USB3.0的SS信号了。另外，从第一个HUB上引出了一组USB2.0信号连接到了第一个USB连接器。这样，对于第一个连接器来说，USB2.0和USB3.0信号都有了。好好好，反正USB3.0它确实有了对吧，人家也没说7个口都是USB3.0，谁让我自己对号入座呢！

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_008_627a4df34cc0.png)

其实仔细看连接器也能看出端倪：第一个连接器有USB3.0信号的弹片，但是其他的都没没没没没没，所以其他6个口只能是普通2.0的口。但是比较恶心的一点就是，这几个连接器的舌片也是蓝色的，猛的一看还以为一样呢。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_009_0c54a34c5941.png)

仔细看看这两组3.0信号走线还挺讲究。拐角圆弧、周围打了包地孔但是其他2.0的直接走了135度角（我不理解为啥这个角度总被称为45度走线）。

其实对于市面上常见的低成本USB HUB，这种操作是基操，在低成本的前提下，还能有一组USB3.0的扩展口给用户用，真要感谢厂家绞尽脑汁为我省钱。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_010_b788e603918c.png)

自锁开关。直接通断每个USB下行口的VBUS供电。同时，LED指示灯也是由这个VBUS供电，当切断之后，LED指示灯灭！

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_011_628f4b1669c9.png)

我以为板子正面每个下行口没有电容，会把电容放在板子背面，结果板子背面连一根毛都没找到。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_012_7b801926ce0f.png)

合着整个板子只有每个HUB 芯片旁边放了两个电容、小小的！

刚还感谢厂家绞尽脑汁为我省钱，原来是我被别人卖了啊。既然被卖了就要有被卖了的觉悟，赶紧帮商家数一下钱：这玩意两个USB 2.0 HUB合起来1块5、6个USB2.0连接器+1个USB3.0连接器算1块钱、7个按键和键帽算1块钱、尿袋线算1块钱、PCB+外壳算3元，总共7.5元，再给你加2块看人工费，9.5元钱成本商家还能含泪赚我9.5块。为什么商家的眼里常含泪水？因为他爱我这样的消费者爱得深沉！

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_013_9f08ed891344.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

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
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\拆解7口USB_3_0_HUB后_厂家不是绞尽脑汁为我省钱__images\img_014_c6ac43f1aaff.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️