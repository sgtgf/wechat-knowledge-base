# MOS管导通和工作原理，这样讲解更全面

原创 电路一点通 2025-07-22 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/tcsbQF-2HsqL3-oxmY7TgA](https://mp.weixin.qq.com/s/tcsbQF-2HsqL3-oxmY7TgA)

  

  

晶体管是现代电子工业的基础。如果你在使用手机看这篇文章，手机里面就有数十亿甚至上百亿个晶体管，准确的来说是“场效应晶体管”。

场效应晶体管里的一种----“金属氧化物半导体场效应晶体管”，简称MOS管。

接下来从基础的电流和半导体开始，逐步加深，逐步去了解MOS管的结构和工作原理，然后还要了解它的电路符号。

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_000_2465068a903d.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_001_83dd5bcb794f.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

看下这个简单的电路，“常规电流方向”和“电子流动方向”的区别要了解清楚，我们通常说的，电流从电池的正极流向负极，电场的方向也是如此，但二者都是参照所谓的“正电荷”来说的。其实，电子漂移的方向和它们相反。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_002_388f29a9bd0e.png)

MOS管是用硅之类的半导体材料制作的，半导体的电导率介于导体和绝缘体之间，为了改变纯硅的电导率，使其为我们所用，我们会给它掺入不同的杂质。如果掺入五价元素，就会得到N型半导体，以电子为主要 的载流子；如果掺入三价元素，就会得到P型半导体，以空穴为主要的载流子；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_003_f515ee6c9bd2.png)

如果让它们靠在一起，二者接合处，N型半导体的电子就会进入P型半导体的空穴，形成所谓的“耗尽层”。 

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_004_83a00a11dc54.png)

如果P型连接电池正极，N型连接电池负极，即所谓的“正向偏置”，那么耗尽层就会变薄；

如果翻转电池极性，即所谓的“反向偏置”，耗尽层就会变厚。

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_005_8f9b7e55f638.png) MOS管有两类：增强型和耗尽型，二者还可以再分为:N沟道和P沟道。

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_006_209a741f7d4d.png)

接下来着重说明N沟道MOS管。

先看增强型N沟道MOS管，**黄色区域代表N型半导体，蓝色代表P型半导体**，P型半导体作为“衬底”，它的引脚称为“衬底引脚”，上面两个问别是“源极引脚”和“漏极引脚”，它们之间有一层薄薄的介电材料（即电绝缘体）就是图中的上方灰色部分。绝缘体上面也有个引脚，叫做“栅极引脚”，这就是MOS管的所有引脚。但由于MOS管是对称的，源极和漏极是可以互换的。让源极引脚和衬底引脚在内部相连，我们看到的就只有三个引脚了。这样还能防止电流从衬底流向源极，因为二者电势相同。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_007_1f08439184ee.png)

现在想让电流从漏极到达源极，给它们接上一个电池，电压用“Vds”表示，即“漏源电压”。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_008_fe848a002a56.png)

看下这个漏极电流与漏源电压的关系图，电池的正极，使漏极引脚这边的电势增高，从而增厚了漏极与衬底之间的耗尽层。因此，漏极与源极之间没有电流通过，MOS管没有导通，也就是进入了所谓的“截止区”。

想让电流通过漏极进入源极，二者之间就得有一个通道，即所谓的“沟道”。我们给栅极和源极接个小电池（低电压），电压用“Vgs”表示，即“栅源电压”，衬底是P型半导体，所以载流子为空穴，但它还是有一些自由电子，作为“少数载流子”。小电池使衬底内部形成了电场，因此，衬底中的电子开始向电场的反方向移动，也就是向栅极移动。因为有绝缘层，所以衬底中的电子不会进入栅极，而是会在靠近栅极的一侧聚集。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_009_d839a273e41e.png)

我们知道，电容器的两片金属板可以存储电荷，而且我们可以在金属板之间放上绝缘层（介电材料），用来增加它的电容量。同样，MOS管里的绝缘层，也会使两侧的电荷量增加，从而吸引来更多的电子，聚在一起。如果我们增加栅源电压，栅极的正电荷就会变多，因而就会有更多的电子聚集过来，逐渐填充某些空穴，也可以说是空穴被迫远离栅极。可以看到，靠近栅极这一块有了很多自由电子，也就有了更多的负电性，或者说，它变成了N型半导体，如此，MOS管内部就形成了一个连接源极和漏极的通道，就相当于挖了一个可以让电子通过的沟道。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_010_1c0f7012f949.png)

 改变栅源电压，就能够改变沟道的深度，电压升高，沟道就会变深，电压降低，沟道就会变浅。沟道刚开始形成时的电压，叫做“阙值电压”。有了沟道，我们就可以让电流从漏极来到源极。

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_011_f5e2a8326a13.png)

常规电流方向是从漏极到源极，但电子的流动方向与之相反，是从源极到漏极，这也是二者名字的成因。

源极是电子的来源，电子通过沟道后，从漏极漏了进去，但因为常规电流是从漏极到源极，所以它被称为“漏极电流”。

现在，MOS管处于“欧姆区”，也叫“线性区”，也就是说，随着漏源电压升高，漏极电流也成比例地增大。沟道中靠近漏极的负电荷会被吸入漏极。因为漏极处于高电势，但是，随着漏源电压升高，漏极和衬底之间的耗尽层也会随之变厚，因为二者是反向偏置的。如此，沟道变浅了，限制了电荷移动，减小了电流，随着电压逐渐升高，最终，沟道会被堵住，即所谓的“夹断效应”。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_012_361e8af1e8bb.png)

现实中，沟道不会被完全堵死，因为有大量电子正在通过沟道，保持着沟道畅通。虽然电流不会完全断开，但它会饱和，即所谓的“饱和电流”。发生饱和时的电压叫做“饱和电压” 。

现在，如果你继续升高漏源电压，电流增大的幅度只会很小，因为它已经饱和了。现在MOS管处于“饱和区”。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_013_b637f26bc542.png)

  

如果你还想进一步增大MOS管的电流，那么该怎么做呢？

前面说过，沟道的深度是由栅极决定的，升高栅源电压，我们就能加深沟道。如果我们再次升高漏源电压，漏极电流也会增大。漏源电压 升高到某一个程度后，夹断效应就会再次产生，电流就会再次饱和。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_014_2a1353a8bde3.png)

我们说MOS管是一种“电压控制元件”，控制栅源电压，继而就能控制漏极电流。

下图左边展示了漏源电压对漏极电流的影响；右边的展示了栅源电压对漏极电流的影响。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_015_139056cd4797.png)

还有一种MOS管是“耗尽型”，它的沟道在 掺杂时就已经'“挖”好了。也就是说，增强型的沟道由栅源电压产生，而耗尽型的沟道是默认就有的。二者的基本原理是差不多的，只不过，耗尽型默认是导通的，需要给栅极施加负电压来断开。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_016_9cf94684e198.png)

接下来看下它的电路符号，MOS管有四个引脚，栅极的引脚并不是和衬底相连的，它们之间有绝缘层，所以符号中的栅极引脚单独在一侧，源极和衬底内部是相连的，所以符号里也用相连的引脚表示。

右侧竖线如果是断开的，那就是增强型，正如其默认断开的沟道；如果是一条实线，则是耗尽型。箭头指向 衬底，就是N沟道，因为其电子向栅极的方向聚集，反之就是P沟道，因为其电子向远离栅极的方向聚集。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_017_25e78602bd29.png)

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[ADC-过零检测详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549893&idx=2&sn=d02c4e8adef7fdfc5dab6ca7954f2c23&scene=21#wechat_redirect)**
    
-   **[2个offer：大公司PCB工程师和小公司硬件工程师选择哪个？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549608&idx=1&sn=ff99090971a94e215de445691d456834&scene=21#wechat_redirect)**
    
-   **[极氪核心零部件配套供应商/全系车型一览](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523696&idx=1&sn=d44963b25171dd8fa961dcf9308d0760&poc_token=HNv6fmijaBOIGj296kp7hDaCAbbTZ3pC2Ra170wT&scene=21#wechat_redirect)**
    
-   **[国产新能源电车SUV尺寸天梯图（5米长3米轴）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523354&idx=1&sn=01d6ae706c16486005c1dd746cb0e7d6&scene=21#wechat_redirect)**
    
-   **[电工识图电工技能速成全图解-554页.pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260269&idx=1&sn=19c896b6ff7d37881214fe83de352960&token=1265095599&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[电子元器件故障检测与丰富维修实践技巧全图解-246页-Pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259977&idx=1&sn=4cd1483bf40828a185bf2b5d858368f8&token=1265095599&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[感谢商战！瑞幸咖啡9.9元无限续杯【美团购买入口】](https://mp.weixin.qq.com/s?__biz=MzkyOTg0NTExMA==&mid=2247483736&idx=1&sn=fc76516e88958566f9c473329bb6dd8e&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管导通和工作原理_这样讲解更全面_images\img_018_6adfc730721a.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️