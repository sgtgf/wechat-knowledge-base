# 用大白话讲一讲SATA、M2这一堆硬盘接口知识

原创 硬件笔记本 2024-01-29 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/fEepSPOoNKLIZA5hANG8IQ](https://mp.weixin.qq.com/s/fEepSPOoNKLIZA5hANG8IQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

为国家信息安全计

相信你们对各类硬盘接口的类型、总线、协议等的区分非常头疼，各种专业人士写的文字蛮多的，但看完依旧觉得脑细胞不够死的，还是迷迷糊糊。

整理了一下台式机和笔记本相关的硬盘知识，这里不罗列服务器相关的内容，只讨论常见的台式机和笔记本电脑。

  

  

**一、协议、总线和接口的关系图**

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_002_e6a070c1a9a9.png)

  

  

  

**二、这些接口的硬盘长什么样？**

①SATA和mSATA的硬盘

SATA盘有机械盘和固态盘，均为2.5寸，现有SATA3.0为主流，SATA2.0和1.0已经淘汰。mSATA就是mini SATA，只是体积变小了很多。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_003_fb2b13a11abf.png)

  

  

②M.2的B Key（NGFF）与M.2的M Key（NVMe）的硬盘

M.2固态盘的接口类型，市面能见的为3种：

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_004_191beb9a486c.png)

  

  

若是走SATA总线的NGFF，接口以B Key形式呈现，当然由于单纯B Key市面不多，因此M&B Key为现有主流；

若是走PCIe总线的NVMe，接口以M Key形式，当然M&B Key也行。

M.2固态盘宽度均为22mm，但有3种长度，分别为：42mm、60mm、80mm

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_005_80b3edd19bc9.png)

  

  

③PCIe的硬盘

PCIe属于台式机的接口，根据总线位宽的不同，分 x1、x4、x8、x16几种。而PCIe有1.0、2.0、3.0、4.0、5.0几个版本，不同版本传输速度不同。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_006_943efb464b42.png)

  

  

**三、这些接口的速度如何？**

SATA 2.0机械盘：传输速度3G/S；

SATA 3.0以及mSATA固态盘：传输速度6G/S；

M.2的B Key（NGFF）固态盘：传输速度6G/S；

M.2的M Key（NVMe）固态盘：传输速度 32G/S；

PCIe的最繁琐，见下表：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_007_422df0d434ef.jpg)

  

以上都是理论速度，你只需要看谁比较快比较牛叉即可。

**四、这些接口的相互转接情况**

上述各个接口，有小部分可以通过“转接卡”“转接板”来转接，但大多是高性能的转接低性能的，新的可以转接老的。

M.2的B Key（NGFF）接口可以转接为SATA 3.0;

M.2的B Key（NGFF）接口可以转接为PCIe，且可以相互转接；

M.2的M Key（NVMe）接口可以转接为PCIe，且可以相互转接；

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_008_0b817e410a44.jpg)

**四、这些接口只能安装硬盘吗？**

也不一定。

SATA3.0和mSATA是只接硬盘；

M.2的B Key（NGFF）可以接硬盘，也可以接无线网卡（骨灰级笔记本网卡用mini PCIe，不在讨论范围）；

  

  

**五、这些接口的硬盘可以用作移动硬盘吗？**

可以，有一种产品叫“硬盘盒”，可以实现笔记本/台式机硬盘变为移动硬盘的需求，其本质是不同接口转为USB3.0或者3.1。

例如老式SATA3.0的机械盘、M.2的B Key（NGFF）固态盘、M.2的M Key（NVMe）固态盘都可以做成移动硬盘，尤其是有两种，体积比优盘大不了多少，速度却是巨快无比的。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_009_09496b2e7fc1.png)

  

  

需要注意，这类硬盘盒带的那根线，一头是typeC，一头是USB，和手机数据线很像，但短不少。亲测手机数据线可以用在硬盘盒上，但是，稳定性和速度堪忧，还是不要这样用，数据无价。

另外，M.2的M Key（NVMe）固态盘的硬盘盒价格巨贵，是M.2的B Key（NGFF）的3倍不止。

  

最重要的一点：硬盘盒散热不佳，插10分钟就烫手。而不带盒子的单个转接板情况会好很多，但是不能装兜里携带。各有优劣吧！

硬件工程师都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_010_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_011_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_012_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_013_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_014_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_015_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_016_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_017_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_018_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_019_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_020_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_021_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_022_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_023_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_024_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\用大白话讲一讲SATA_M2这一堆硬盘接口知识_images\img_025_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。