# 很多电解电容厂商不给出ESR的内情曝光

原创 硬件笔记本 2023-01-05 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/O9FgnAhliclBR7CFh7cXvg](https://mp.weixin.qq.com/s/O9FgnAhliclBR7CFh7cXvg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**

******![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIueeFDbbsFISSSRQiaYukVrtiad9UK7rSwV9Z4bXvzlqLZH6UGfy906Wpww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)******

  


****

******引言******

**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIuebIjVr1qEjYq8cwPjGkbXvKy84cwglXrqA48AGu6INR3MBZGOg1GIFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

似乎所有的电源工程师谈起电解电容的好坏的时候，最后总是少不了一句，要选择ESR参数低一点的电容云云，但，公司采购员按这个要求去采购电容的时候，只能选择好品牌，因为采购员心里知道，好品牌的电容ESR参数才低，因，电解电容的ESR值从不标示出来。

  

有人问，为什么电容的ESR不标示出来，温度特性不标示出来。其实我也不知道，这里俺说三句话，来分析一下电容的几个参数。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMQianiawVvLzjhiciaFTbpArKvvMgmLMibZF9WuUF1xgfE6QMRygESBk2enyBQ4jgnMOs4mjPjgb55gA/640?wx_fmt=png)

  

  

  

**

******![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIueeFDbbsFISSSRQiaYukVrtiad9UK7rSwV9Z4bXvzlqLZH6UGfy906Wpww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)******

********一.先来说ESR********

**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIuebIjVr1qEjYq8cwPjGkbXvKy84cwglXrqA48AGu6INR3MBZGOg1GIFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

作为开关电源的输出_整流滤波_电容器，电容量往往是首要的选择，铝_电解电容_器的电容量完全可以满足要求，而ESR则相对比较高。可以通过多只并联的方法降低ESR。也可以选择更大的电容量来降低ESR.

  

ESR是高频电解电容里面最重要的性能参数，很多电容供应商都强调“LOW ESR”这一性能特征，也就是ESR值很小的意思。那么，我们如何正确理解LOW ESR的实际意义呢?由于现在电子技术的发展，供应给硬件的电压正呈现越来越低的趋势，例如FPGA、DSP、RAM系列的供电电压都是很低，有的电路电 压小于2V，相比以前动辄3、4V的电压要低得多。但是，另一方面这些芯片由于晶体管和频率爆增，需求的功耗却是有增无减，因此按P=UI的公式来计算， 这些设备对电流的要求就越来越高了。

  

比如在电脑主板上，例如两颗功耗同样是70W的CPU，前者电压是3.3V，后者电压是1.8V。那么，前者的电流就是I=P/U=70W /3.3V大约在21.2A左右。而后者的电流就是I=P/U=70W/1.8V=38.9A，达到了前者的近一倍。在通过电容的电流越来越高的情况下，假如电容的ESR值不能保持在一个较小的范围，那么就会产生比以往更高的涟波电压(理想的输出直流电压应该是一条水平线，而涟波电压则是水平线上的波峰波谷)。

  

此外，即使是相同的涟波电压，对低电压电路的影响也要比在高电压情况下更大。例如对于3.3V的MCU而言，0.2V涟波电压所占比例较小，还 不足以形成致命的影响，但是对用于1.8V供电的FPGA、DSP而言，同样是0.2V的涟波电压，其所占的比例就足以造成数字电路的判断失误。

  

那么ESR值与涟波电压的关系何在呢?我们可以用以下公式表示：

V=R(ESR)×I

  

这个公式中的V就表示涟波电压，而R表示电容的ESR，I表示电流。可以看到，当电流增大的时候，即使在ESR保持不变的情况下，涟波电压也会成倍提高，采用更低ESR值的电容是势在必行。这就是为什么如今的板卡等硬件设备上所用的电容，越来越强调低ESR的原因。

  

**

******![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIueeFDbbsFISSSRQiaYukVrtiad9UK7rSwV9Z4bXvzlqLZH6UGfy906Wpww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)******

********二.生产厂家为何不愿标示出来ESR呢?********

**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIuebIjVr1qEjYq8cwPjGkbXvKy84cwglXrqA48AGu6INR3MBZGOg1GIFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

从电解电容器的生产工艺上考虑，电解液的电阻是铝电解电容器等效串联电阻(ESR)的主要部分。多数铝电解电容器生产厂商是不给出ESR数据的 主要原因主要是：相对于其它介质的电容器，铝电解电容器的ESR显得太大。如1μF/16V的普通铝电解电容器，其ESR一般在20Ω左右;100μF的 铝电解电容器，其ESR也是在1.5~2Ω之间。

  

试想，这样的数据写在数据手册里肯定会影响应用者的应用铝电解电容器的信心。因此，在某种以上说，应用铝电解电容器是一种无奈的选择。会影响铝电解电容器的应用.

  

对于一般应用的铝电解电容器，多数铝电解电容器生产厂商是不给出ESR数据的，对于开关电源用的低ESR铝电解电容器或电容量比较大的插脚式铝电解电容器则给出这个数据。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMQianiawVvLzjhiciaFTbpArKnYBicUyAQGAuVicVzAr9ibEb7EFNMB0iaVCoPMhIHxqfvZbSyQunok1tNw/640?wx_fmt=png)

  

**

******![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIueeFDbbsFISSSRQiaYukVrtiad9UK7rSwV9Z4bXvzlqLZH6UGfy906Wpww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)******

********三.顺便了解一下有几个电容参数也不标示的原因********

**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIuebIjVr1qEjYq8cwPjGkbXvKy84cwglXrqA48AGu6INR3MBZGOg1GIFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

其实，作为硬件工程师，总有这样的感觉，电容的参数，我们将其分为**“显性参数”**和**“隐性参数****”**。所谓“显性参数”，就是印在电容表面的一些基本参数，这些参数在我们看到一颗电容之后往往可以直接得知。例如电容的容量(比如“470μF”等等)、容量偏差范围、耐温范围、电压值(比如“16V”)。

  

所谓“隐性参数”，就是我们需要根据电容的型号来查询的参数。例如我们常说的ESR值，如今已成为区别电容性能的重要参数，而我们在电容上是看不到这个参数的，我们得去相关的网站通过电容的型号来查询。

  

和ESR相同命运的类似的参数还有不少，其中包括如下一些：

**1.额定的纹波电流值**;所说额定纹波电流，将在其ESR上产生损耗而使铝电解电容器发热，这个发热的限度对 纹波电流的限制就是额定纹波电流值。其定义为在最高工作温度下可以确保铝电解电容器额定寿命时间的最大纹波电流值。对于一般应用的铝电解电容器，多数铝电 解电容器生产厂商是不给出额定纹波电流数据的，对于开关电源用的低ESR铝电解电容器或电容量比较大的插脚式铝电解电容器则给出这个数据。

  

**2.能够耐受的涟波电流值;** 上文中已有解释。

  

******3.损耗角的正切(TAN);******相当于无功功率和有功功率的比值，这个值跟电容的品质以及发热量有关系，这个值越小电容性能越好。

  

******4.漏电流值;******无论绝缘体多大，总是会有细微的电流漏过电容，这个值则代表具体漏过的多少。而这个参数生产厂家也不愿详细标称。

  

******5\. ESL等效电感;******等效电感ESL经常会成为ESR的一部分，并且ESL也会引发一些电路故障，比如串连谐振等。但是相对容量来说，ESL的比例太小，出现问题的几率很小，再加上电容制作工艺的进步，现在已经逐渐忽略ESL，而把ESR作为除容量之外的主要参考因素了。

  

其实关心这些电容参数，就是关心电容的使用寿命，具体不多说，其他资料或者网上都有大量的介绍。

  

**

******![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIueeFDbbsFISSSRQiaYukVrtiad9UK7rSwV9Z4bXvzlqLZH6UGfy906Wpww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)******

********小结********

**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmcwasVUyyh0pEJOccZrwIuebIjVr1qEjYq8cwPjGkbXvKy84cwglXrqA48AGu6INR3MBZGOg1GIFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

多数铝电解电容器生产厂商是不给出ESR数据的主要原因主要是：相对于其它介质的电容器，铝电解电容器的ESR显得太大(个别的如日本个 别公司电容的除外)。全球众多铝电解电容器生产厂商中，能过给出其生产的铝电解电容器的等效串联电阻(ESR)很少。有的是没有这方面的数据(如国内众多 铝电解电容器生产厂家)，而有的则是技术保密的需要，当然也有感到自己生产的铝电解电容器的ESR值太大，过于羞涩，公布出去有伤大雅。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。