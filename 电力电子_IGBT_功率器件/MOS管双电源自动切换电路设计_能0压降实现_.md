# MOS管双电源自动切换电路设计，能0压降实现？

原创 硬件笔记本 2024-01-10 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/uuq-WPQiYkXgdSf15\_S0Eg](https://mp.weixin.qq.com/s/uuq-WPQiYkXgdSf15_S0Eg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

实现双电源自动切换电路，其中利用了三个MOS管进行的电路设计。

然而，最近看到了另外两种主副电源自动切换的电路设计，觉得很有实用价值，分享给大家。

  

**一、**

我们主要围绕下面这个电路图展开：

VUSB：为外部USB供电

VBAT：为锂电池供电

Q1：PMOS

D1：二极管

  

电路工作设计：

1、外部电源供电时，锂电池的供电关断

2、外部供电断开时，由锂电池供电

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_002_2074e51f154b.jpg)

当VUSB进行供电时（5V），PMOS的G端：为5V，此时PMOS不导通，电压经过二极管D1直接到达VCC。如下图：

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_003_2a05fca14cf0.jpg)

  

当VUSB断开后，PMOS的G端的电压（5V）由电阻R1下拉到GND，此时PMOS导通，VCC由VBAT（为锂电池）供电。如下图：

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_004_c6a8f69acc06.jpg)

在这里加以说明：

在MOS管还未导通之前，S端的电压比G端的要高，因此MOS管会导通，导通以后MOS管的寄生二极管会短路，并不再起作用。

  

**二、0压降实现主副电源自动切换**

前面的电路加了D1二极管，是很难实现0压降，因为D1的压降最小也需要0.3V。

我们来看下面这个电路，相较于前面的电路，它利用了MOS管的低导通RDS（on）特性，提高了电路的效率。

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_005_6d6b723a9f5d.jpg)

这里利用了3个MOS管作为电路设计：

1.当VIN1（主电源）为3.3V时，Q1的NMOS导通，接着拉低了Q3 PMOS的栅极， Q3 开始导通。

此时Q2 MOS的G-S之间的电压等于Q3 PMOS的导通压降，大概为几十mV。因此Q2 MOS管关闭，VIN2（外部电源）断开，VOUT由VIN1进行供电，此时VOUT=3.3V。

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_006_bef44e0ad59d.jpg)

此时电路的静态功耗I1+I2 = 20uA

  

2.当VIN1（主电源）断开，Q1 NMOS截止，Q2 PMOS的栅极通过R1下拉，Q2导通；Q3 PMOS的栅极通过R2上拉，Q3截止。

此时Q1和Q3截止，VOUT由VIN2供电，为3.3V，“电路的静态功耗I1+I2 = 20uA

”不存在了。

讲到这里我们可以看到，当电路由VIN2（外部电源）供电时，静态功耗“消失了”直接为0。整个电路几乎不存在压降，除非电流很大。

**可以得出在这个电路中，外部电源供电是更好的选择。**

**有个条件**：电路中的三个MOS管都应该具备低导通电阻与低压的特性。

不过，也有网友反应，这个电路在主电源下降过程中，可能会存在一些问题：Q3未完全关断而Q2就开始导通，外电源通过Q2、Q3形成通路，阻止了主电源的降低。

硬件工程师及从业者都在关注我们

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_007_2e84b7ba26c6.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_008_51d069a6484e.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_009_5fb296583be4.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_010_1f30148044c0.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_011_c5bc86d0867d.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_012_b38438d4de46.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_013_1d54e9fe0aef.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_014_9bb0105b1e46.gif)

![](MOS管双电源自动切换电路设计_能0压降实现__images/img_015_de88c48250d0.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_016_3b83df2d253b.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_017_db521919e8d9.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_018_aea384ea417e.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_019_f4924e7a240a.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_020_a58db91dbb3b.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_021_f0edc68b0c53.gif) ![](MOS管双电源自动切换电路设计_能0压降实现__images/img_022_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源电路一点通。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。