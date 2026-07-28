# 收藏！教科书上没讲清楚的MOS管开关重点，今天全交代

原创 王工 硬件笔记本 2025-08-07 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/yysk0R60GLyCsIa4GRjYqA](https://mp.weixin.qq.com/s/yysk0R60GLyCsIa4GRjYqA)

# ![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

今天咱们来聊聊产品设计中最常见却又最关键的元器件——MOS管。可以说，几乎所有的电子设备都离不开这个它。虽然它看起来原理简单，但实际工作起来却暗藏玄机。特别是它的开关过程，平时用着没事，一旦出问题往往很多时候让人摸不着头脑。下面咱们就用最通俗的语言，带大家一起了解MOS管开关的过程。

在讲之前，大家一定要知道MOS管的三个寄生电容：Cgs，Cgd，Cds，这对于后面的分析有很大的帮助。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjjUBhtv5ldFzk7MvcCDkqo2O4eMiaIAgZrEAklggQicibV7MPGfdvUQDNibIkpw1w8ILMonSQmcIo0BQ/640?wx_fmt=png&from=appmsg)

  

011

MOS管的开通过程

说一个不恰当的比喻，MOS管的开通就像我们早上起床的过程，可不是"叮"的一下就完成的，而是分四个步骤循序渐进：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjjUBhtv5ldFzk7MvcCDkqoF9H1PrTDT0xEfkWpjJsx9Ep7DOLKV8ZNP9qbo8Wl95KHTBrtRjzesw/640?wx_fmt=png&from=appmsg)

  

MOS管开启的第一个阶段可以这样理解：

栅极电压从零开始慢慢上升，就像给一个容器注水，大部分电流都用来给C\_GS这个"主容器"充电，同时也有少量电流流到C\_GD这个"副容器"，随着栅极电压升高，C\_GD两端的电压会稍微降低一些，这个阶段MOS管还没开始导通，所以漏极的电流和电压都保持不变，只有当栅极电压充到V\_TH这个临界值时，MOS管才具备导通的条件。

这个准备阶段之所以叫"开通延时"，就是因为虽然栅极在充电，但MOS管还没真正开始工作，存在一个时间延迟。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjjUBhtv5ldFzk7MvcCDkqojdfR48icjjF9aLcNOevZaSTkicPQpNbsDzMArLETTIhpYZbGtbiaFKU7w/640?wx_fmt=png&from=appmsg)

  

MOS管开启的第二阶段工作原理如下：

栅极电压继续升高，直到达到米勒平台电压值（V\_GS,Miller），此时漏极电流开始随栅极电压线性增加，这个阶段MOS管工作在放大区，电流大小直接取决于栅极电压。栅极电流继续为C\_GS和C\_GD两个电容充电，在输出端可以看到：

漏极电流明显增大，但漏源电压仍保持关断时的水平（V\_DS,off）。

这个阶段是MOS管从截止状态向完全导通过渡的关键过程。

  

MOS管开启的第三阶段工作原理如下：

当栅极电压达到V\_GS，Miller时，MOS管已能承载全部负载电流，并联的二极管完全关断，此时开始出现两个重要现象：漏极电压开始快速下降，栅源电压却保持稳定（形成米勒平台），产生这种现象的原因是：所有栅极驱动电流都转向给C\_GD电容充电，这个充电过程促使漏极电压快速变化，栅极电压因此被"钉住"在米勒平台电压。

在这个阶段，漏极电流由外部电路决定，保持恒定，漏源电压持续下降，栅极电压维持不变，这个阶段展现了MOS管特有的米勒效应，是开关过程中的关键转折点。

  

MOS管开启的第四阶段工作原理如下：

这是开通过程的最后阶段。栅极电压从米勒平台电压(V\_GS,Miller)继续升高，最终达到驱动电压(V\_DRV)的满幅值。

这个阶段的关键变化：栅极电流同时给C\_GS和C\_GD两个电容充电，导通沟道被充分增强，导通电阻(R\_DS(on))降到最低值。

电路表现特点：漏极电流保持稳定（由外部电路决定），漏源电压因导通电阻降低而小幅下降，栅极电压达到最大驱动电平，最终栅极电压值直接影响导通电阻大小，电压越高，导通电阻越小，但需要考虑器件耐压和功耗限制。

这个阶段使MOS管进入完全导通状态，导通性能达到最佳。

  

021

MOS管的关断过程

MOS管的关断过程说明基本上与上文所述的开通过程相反。也是分四个步骤来完成关断过程：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjjUBhtv5ldFzk7MvcCDkqoGO5MyJslhpqMONIkUOLypePgG9plC3UB5v2RpDkpaMq9JlfS4vNBoQ/640?wx_fmt=png&from=appmsg)

  

阶段1（关断延迟阶段）：

这个阶段主要是给MOS管内部的Ciss电容放电，直到电压降到米勒平台电平。在这个过程中，放电电流会流过栅源电容(Cgs)和栅漏电容(Cgd)。此时会出现两个现象：

1、由于过驱动电压在减小，漏极电压会稍微上升一点；

2、漏极电流保持稳定不变。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjjUBhtv5ldFzk7MvcCDkqomcR9spCUawnu4ic6j1rrwgKX6hPBBm6HGpSoeG0UxM0KnBFBa52q7rw/640?wx_fmt=png&from=appmsg)

  

阶段2（电压上升阶段）：

此时，MOS管的漏极-源极电压，从 ID⋅RDS(on) 上升到最终的关断电压（

VDS,off），这个电压会被寄生二极管钳位在输出电压。

  

在这个阶段，栅极电压会保持稳定（即米勒平台阶段），栅极电流全部是 CGD 的充电电流，因为栅源电压不变。

  

  

阶段3（电流下降阶段）：

此时，寄生二极管已经导通，为负载电流提供了另一条通路。栅极电压从米勒平台

 VGS,Miller继续下降到阈值电压VTH。

  

这个阶段的主要特点是：

1、栅极电流主要来自 CGS （栅源电容）放电，因为CGD（栅漏电容）在上个阶段已经充满电了。

2、随着栅源电压下降，MOS管进入线性工作区，漏极电流逐渐减小到接近零。

3、由于寄生二极管已经正向导通，漏极电压会稳定在最终的关断电压（VDS,off）不再变化。

  

  

阶段4（完全关断阶段）：

这是MOS关断的最后一步。栅极电压 VGS 从阈值电压VTH继续降到0V，把输入电容的电彻底放完。和前一阶段类似，栅极电流主要还是靠CGS（栅源电容）放电提供。关注公众号：硬件笔记本

  

此时MOS管已经完全关断，漏极电流保持为零（因为已经彻底关断），漏极电压维持在关断状态的值不变。

  

#### 

031

总结

总结来说，MOS管通过四个阶段在导通和关断状态之间切换。各阶段的持续时间取决于三个关键因素：寄生电容大小、电容电压变化量以及栅极驱动电流的强弱。这凸显了在高频开关应用中，合理选型和优化栅极驱动设计的重要性。

需要注意的是，厂商提供的测试数据基于特定条件和电阻负载，与实际电感负载应用中的开关性能存在明显差异，因此不同型号器件的数据较难直接比较。

  

总之，理解了以上MOS管的开关过程，对于我们整个产品的分析过程是很有帮助的。

  

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjNicb8jqq0EHwGZWhvViaxm6Yuh0ko8PVdJm7z8ZnAJqQqAMQtUGBQiaCMz0EMM17XJhSYIZiamukPzA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&randomid=2o394c6n&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjNicb8jqq0EHwGZWhvViaxm6AtEoFiarYT3iaUKISDDSia3hBF7xN3f90VjbdsqSH1fWqsMICqXwrudrA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&randomid=kytudjhp&tp=wxpic)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。