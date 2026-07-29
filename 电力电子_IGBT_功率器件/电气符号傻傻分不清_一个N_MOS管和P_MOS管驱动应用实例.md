# 电气符号傻傻分不清？一个N-MOS管和P-MOS管驱动应用实例

原创 电路一点通 2025-03-06 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/hTF3grx\_CWBpB96m3G\_u7Q](https://mp.weixin.qq.com/s/hTF3grx_CWBpB96m3G_u7Q)

MOS管在电路设计中是比较常见的，按照驱动方式来分的话，有两种，即：N-MOS管和P-MOS管。MOS管跟三极管的驱动方式有点类似，但又不完全相同，那么今天笔者将会给大家简单介绍一下N-MOS管和P-MOS管的工作原理，并结合自己实际的应用来给大家分享一下如何来驱动N-MOS管和P-MOS管。

首先，我们先来看一下N-MOS管和P-MOS管分别在电路中的电气符号：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_000_2ae286768f7f.png)

咋一看上面两个电气符号，似乎非常的相似，可能让很多人都有点傻傻分不清楚。那么，在我们看到电路中出现这些符号的时候，我们要怎么知道究竟是N-MOS管还是P-MOS管呢？

在判断是N-MOS管还是P-MOS管之前，我们先来学会认识MOS管符号上的三个引脚，究竟哪个引脚是G（基）极、S（源）极和D（漏）极吧，请看下图：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_001_4367e33ccd89.png)

G（基）极的话，还是很容易区分的，就不用多说什么了，比较难区分的基本就是S（源）极和D（漏）极了，那么，我只需要记住：无论是N-MOS管还是P-MOS管，两根线相交的就是S（源）极了，剩下的一个单独引线的那边，就是D（漏）极了。

接下来，我们就要来区分究竟哪个是N-MOS，哪个是P-MOS了，同样 ，我们这里只需要看箭头的方向，并且记住：箭头指向G极的是N-MOS管，箭头背向G极的是P-MOS管。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_002_654198d1488c.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_003_3c5114b76aa6.png)

通过了解MOS的相关知识，我们还得到一个知识点，那就是：MOS在制造过程中，会自动形成一个PN结，也就是我们常说的MOS管的“寄生二极管”。那么这个寄生二极管的方向如何判断呢？同样，我们记住这两句话就好了：N-MOS管，寄生二极管的方向是由S极指向D极；P-MOS管，寄生二极管的方向是由D极指向S极。如下图所示：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_004_c4eedd42be68.png)

关于寄生二极管的方向，还有一种比较简单的记法，那就是：想象DS边的三节断续线是联通的，不论是N-MOS管还是P-MOS管，中间衬底箭头方向和寄生二极管的箭头方向总是一致的，即，要么都由S指向D，要么都由D指向S。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_005_5d99ebde6661.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_006_6a373f5a8721.png)

当然咯，前面这些”科普知识”，基本都是来源于教材，大家只要是认真学习过MOS管相关知识的话，相信对MOS管的认识一定会比笔者这里介绍的更深刻。那么，MOS管经常在电路中作为开关来使用，我们该怎么控制呢？

对于N-MOS管来说，它导通条件就是：G极与S极中间的电压差超过阈值时，D极和S极导通。在实际应用中，一般是将控制信号接到G极，S极则直接接在GND上，从而达到控制N-MOS管的开和关的效果，在D极和S极导通后，导通电阻Rds很小，一般都是几十毫欧级别，因此，电流导通后，形成的压降也是很小的。下面这个电路，就是笔者实际应用中用来控制一个小风扇开关的电路，电路中就是使用的N-MOS管来控制风扇的负极，来实现风扇的开和关的效果。

控制端G极接的是一个3.3V单片机的IO口：

-   当单片机IO口输出高电平时，MOS管的G极电压高于S极将近3.3V，此时N-MOS管AO3400A的D极和S极导通。
    
-   当单片机IO口输出低电平时，MOS管的G极电压也几乎为0V（GND电压），此时N-MOS管AO3400A的D极和S极断开。
    

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_007_310433239768.png)

在实际应用中，对于电压比较高的电路，尤其是高于人体安全电压36V的电路中，往往会用MOS管来控制负载的正极而不是负极，似乎这样会更安全一些？或许就跟我们的日常家用电器中，大部分是控制火线的通断来实现对负载的控制道理是一样的吧。控制电源的正极通断，我们一般是用P-MOS管来实现，那么P-MOS又该怎么驱动呢？

其实P-MOS管的驱动跟N-MOS管也是有点类似的，P-MOS管的导通条件是：G极与S极中间的电压差低于阈值时，S极和D极导通。

虽然P-MOS管的驱动原理跟N-MOS管比较类似，但是，两者之间的驱动电路还是有点差异的，同样以单片机IO口控制为例，当P-MOS管的S极与D极电压差异过大时，就不能直接用单片机IO口来控制了，比如，P-MOS管的S极接的是12V电压，那么：

-   当单片机IO口输出高电平时，P-MOS管的G极电压和S极之间的电压就是将近-9.7V；
    
-   当单片机IO口输出低电平时，P-MOS管的G极电压和S极之间的电压就是将近-12V；
    

那么，此时对于大部分P-MOS管来说，都是导通的，实现不了关断的功能。当然，对于S极接3.3V的电压的话，是不会有什么影响的。但是，为了能适应更多的应用场合，我们必须得考虑这个问题，因此笔者通过对驱动电路的改进，得到了下面这个电路：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_008_923c1c8583be.png)

这个电路是笔者用来控制制冷片制冷的电路，用了一个N-MOS管和一个P-MOS管来实现，当然，电路中的N-MOS管也用三极管来替代，甚至P-MOS管WSF70P03的G极也可以通过电阻分压的方式来实现驱动。

但是，笔者之前说了，为了通用性，这里还是选择N-MOS管或者三极管来作为前级驱动比较合适。这个电路的工作原理也很简单，关于N-MOS管AO3400A的通断笔者就不再多说了。当AO3400A导通后，会导致P-MOS管WSP70P03的G极电压变成接近GND的电压，从而使得它的S极和G极的电压差增大为接近12V，从而使得WSP70P03的S极和D极导通。

同理，当AO3400A关断后，会导致P-MOS管WSP70P03的G极电压在上拉电阻的作用下上拉至12V，从而使得它的S极和G极的电压差几乎为0V，从而使得WSP70P03的S极和D极关断。

好了，关于N-MOS管和P-MOS管的原理以及基本应用笔者就简单介绍到这里了，笔者相信，通过这两个实例，大家对MOS的驱动会有更加深刻的认识，在以后的应用中，就可以针对负载特性，来选择合适的MOS管驱动了。

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_009_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_012_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_013_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_011_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_010_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_014_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## **一点通推荐**

-   [  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=1&sn=26e51cee715c5eff0716b0edf4a1b138&scene=21#wechat_redirect)
    

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[三极管开关电路设计思路假设成真，还要保证啥条件？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541116&idx=1&sn=45df014db83cebd9aa20da1bb83c406b&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[LED背光驱动芯片应用电路详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540851&idx=1&sn=d5e7e21ecf18e5f17bd60487df198103&scene=21#wechat_redirect)**
    
-     
    

-   [汽车零件名称全命名（发动机结构、变速器、制动系统、底盘、电器）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486962&idx=1&sn=84064cf369d2f834fe72f17cde4c2d1a&scene=21#wechat_redirect)  
    
-   [汽车空调系统主要零件图（压缩机、冷凝器、蒸发器、节流部件）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487155&idx=1&sn=c827534320f161c465b38d565b847ec5&scene=21#wechat_redirect)
    
-   [汽车底盘部件结构图解：底盘、变速器、离合器、悬挂、制动、转向](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487235&idx=1&sn=ce96f821e25b1e8ffc4136fc211db631&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\电气符号傻傻分不清_一个N_MOS管和P_MOS管驱动应用实例_images\img_015_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**