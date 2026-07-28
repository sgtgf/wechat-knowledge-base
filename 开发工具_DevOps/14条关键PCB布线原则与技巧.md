# 14条关键PCB布线原则与技巧

原创 硬件笔记本 2024-09-07 11:26 四川

> 原文地址: [https://mp.weixin.qq.com/s/K1sUJpqmr1HlCt3j\_JTcfA](https://mp.weixin.qq.com/s/K1sUJpqmr1HlCt3j_JTcfA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

PCB（印制电路板）布线是电子产品设计中的一个重要环节，良好的布线能够确保电路的稳定性和可靠性。今天为大家分享14条PCB布线原则技巧。

**一、坚持手动布线**

通常来说，一般 PCB 设计软件都包含自动布线的功能，但实际上，没有一个自动布线可以完全取代 PCB Layout 工程师的技能、经验和灵活性。

在某些情况下，你可以使用自动布线：

-   放置完所有的组件后，你可以使用自动布线工作检查你的完成率，如果低于 85%，就需要调整你的组件放置。
    
-   布线时，瓶颈和其他关键连接点可能从裂缝中脱落，可以使用自动路由功能进行识别。
    
-   当你不知道怎么开始布线或者遇到困难，可以使用自动布线作为灵感来源。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjkOf1ALX5TicXatQcmiaWIzv1yTnOBCVgUjuYdEolrV1rkktpKvibAw3RzEmGDqhztT7xJkoxu1UJ4Q/640?wx_fmt=jpeg&from=appmsg)

**二、了解制造商的规格**

在你开始铺设铜迹线时，先花时间问问你的制造商，看制造商是否对最小迹线宽度、迹线间距以及他们可以组装的 PCB 层数有要求。

预先了解这些信息，你可以在设计规则中设置走线宽度和间距值，避免重新布线整个 PCB 布局。

**三、选择合适的走线宽度**

走线的几何形状（厚度和宽度）可以确保电路在所有环境和负载条件下正常工作。PCB 的走线用于传输电信号，因此必须具有与通过它们的电流兼容的宽度。

PCB Layout 工程师 必须确定每条走线的最小宽度，以避免电路板过热的危险；该参数直接影响布线过程，因为它减少了 PCB 上的可用空间。

如果可用空间不是问题，建议使用宽度大于最小值的走线，从而提高电路板的热管理和可靠性，外层上的走线可实现更好的热交换，因此可能具有更小的宽度。

**四、走线和焊盘之间留出足够的空间**

在PCB 走线和焊盘之间保留足够的空间至关重要（如下所示），这可以避免在 PCB 制造或者组装阶段发生短路。

一般来说，建议在每条相邻走线和焊盘之间留出适当的间隙，它们周围必须始终有足够的空间，没有走线或焊盘，以避免触电的风险。

**五、PCB 元器件放置**

元器件的放置方式决定了PCB 设计是否成功。要正确放置元器件，就必须要充分了解它们的特性。例如，热敏电解电容必须远离发热二极管、电阻和电感。

以下列出简单的经验法则：

-   必须要注意具有多引脚的组件，因为这些组件占有的空间很大
    
-   保持组件放置在相同的方向
    
-   在放置之前考虑每个组件的功能及其与其他组件的关系
    
-   如果组件已经采购，那么建议按照尺寸在纸上打印布局，并查看组件是否合适。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjkOf1ALX5TicXatQcmiaWIzvt2fANRrWDtibUeiaSrO5EDiaGns9ICXOOfy63mvvNONZ8IPID3szK94AQ/640?wx_fmt=other&from=appmsg)

**六、保持模拟和数字走线分开**

承载数字信号的PCB 走线，尤其是高频信号，必须与承载模拟信号的走线分开。

将模拟信号和数字信号的走线分开，可以降低相互干扰的可能性，从而提高电路的稳定性和可靠性。模拟信号和数字信号走在同一条线上时，可能会出现以下问题：

-   带来串扰：数字信号的高频分量会对模拟信号产生干扰，导致模拟信号的精度下降。
    
-   引入噪声：数字信号本身包含噪声，当数字信号和模拟信号共用同一条线时，这些噪声也会对模拟信号产生影响。
    
-   滞后或延迟：数字信号在传输过程中会存在一定的延迟或滞后，这可能会导致模拟信号的失真。
    

**七、注意接地层**

每个 PCB 至少需要一个接地层，因为它为所有走线提供了相同的参考点来测量电压。

相反，如果你选择将每条单独的走线布线到地而不是地平面，你将会得到无数不同的接地连接，并且每个都有自己的电阻和电压降。

最简单和最线性的解决方案是创建一个坚固的接地层，可以是整个铜区域，在多层板的情况下甚至可以是整个层。

在传输信号的走线下放置一个接地层有助于降低其阻抗并提高抗噪能力，建议是将电源和接地层放置在电路板的最内层，使它们保持对称和居中，这样可以防止PCB 弯曲。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjkOf1ALX5TicXatQcmiaWIzv831iaSySlWjyC3DmxQxubhSv6BeTelrKibfibEIElgIiaq3zrvmlzHO2xQ/640?wx_fmt=other&from=appmsg)

**八、走线和安装孔留有足够的空间**

在你放置组件的过程中，你首先应该放置了所有的插件，那你是否在其他组件和将它们连接在一起的所有走线之间留出足够的空间？

如果没有这么做的话，那么 PCB 上可能会产生电击危险，并且依靠阻焊层作为唯一的绝缘体并不能保证安全。

在使用插件时，要记住在安装孔的物理尺寸之外留出一圈空间，以保护它免受附近其他组件和走线的影响。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjkOf1ALX5TicXatQcmiaWIzvdFEPXyg7L44oPt8hp5ictMVJgxoWOL812icric33CTQ2ibZibqnfy3icBN8w/640?wx_fmt=other&from=appmsg)

**九、交替走线方向**

如果一个层的大部分走线遵循某一个方向（例如水平），那么优先选择与其相邻的走线的垂直方向（例如垂直），这可以减少轨道之间的串扰现象。

此外，交替走线方向的布线方式还可以提高信号的稳定性。在同一方向的走线上，由于信号线之间的电容和电感的相互作用，可能会出现信号反射、衰减和失真等问题。

需要注意的是，交替走线方向的布线方式也可能会增加布线的复杂度和成本，因此需要在实际设计中进行权衡和考虑。

**十、避免电容耦合**

为了减少由放置在大型接地平面上方和下方的走线产生的电容耦合，必须确保分配给电源和模拟信号的走线布置在专用层上。

减小电容值：电容值越小，电容耦合的影响就越小。因此，在设计电路时，可以采用尽量小的电容值来减小电容耦合的影响。

增加阻抗：增加电路中相关信号的阻抗，可以降低电容耦合的影响。例如，在信号输入端或输出端加入合适的电阻，可以将信号源和负载间的电容耦合效应降低到最小。

采用差分信号线：差分信号线可以在一定程度上减少电容耦合的影响。由于差分信号线是由两根线构成的，信号是通过两根线之间的差异传输的，因此可以避免单根线产生的电容耦合问题。

**十一、放置散热孔和焊盘**

放置散热孔可以提高PCB板的散热效率。散热孔可以将空气流动引入PCB板内部，并且增加PCB板表面积，使得热量更容易散发。此外，散热孔还可以减少PCB板表面的气泡和焊接时的气体积聚。

放置焊盘可以提高PCB板的可靠性。在焊盘的设计中，需要考虑到焊接工艺和焊接质量，以及元件与PCB板之间的机械强度和稳定性。通过优化焊盘的设计和布局，可以提高焊接质量，减少焊接缺陷，从而提高PCB板的可靠性和性能。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjkOf1ALX5TicXatQcmiaWIzvlYrbz6lemz9f39dJxKTrVTGFEAA3dPbcjvkxwCXSFsMno1ISibGu89A/640?wx_fmt=other&from=appmsg)

**十二、接地和电源走线**

与电源和接地信号相关的走线要比承载数字或者模拟信号的走线粗，这可以使它们能够承载更大的电流，即：通过简单的目视检查也可以轻松识别，从而降低信号和电源线之间连接错误的可能性。

一个常见的规则是对接地和电源走线使用 0.040 英寸宽度，对所有其他走线使用 0.025 英寸宽度。

如果你不让电源和接地走线比平均宽度更宽，那么大量的热量试图流过那些狭窄的空间，可能最终会烧到电线，并且烧坏掉 PCB 板。

与连接到集成电路的所有信号走线相比，你可以看到 +5V 电源走线的宽度更大。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjkOf1ALX5TicXatQcmiaWIzvFIIEp82A1icbA5Z48DZrFVBzkskIwibUHnVFe9M4a7MLgWaUMLJyC6wA/640?wx_fmt=other&from=appmsg)

**十三、利用丝印层**

### PCB 板附带的丝印层可以用于标记你想要标记的信息。

-   用太多的文字，占空间。
    
-   不需要写下所有可用的信息，例如，绝对不需要标注电阻值。
    
-   如果允许，文本可以大点，这样打印出来也比较清晰。
    
-   不要在要焊接的裸露铜焊盘上贴标签，因为墨水可能会阻碍焊料的流动，从而导致接头不良。
    

  

**十四、避免 90°角**

通常的工程师应该都知道锐角和直角曲线在高频下会产生问题，从而产生不连续性，进而通过增加串扰、辐射和反射来损害信号完整性。

走线贯穿整个PCB 和组件周围，最佳角度是45°。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。