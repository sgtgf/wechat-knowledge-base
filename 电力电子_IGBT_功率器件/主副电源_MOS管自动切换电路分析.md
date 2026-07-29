# 主副电源，MOS管自动切换电路分析

原创 硬件笔记本 2023-08-15 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/QJuDJ\_PbwEtVNV-lXUWlWg](https://mp.weixin.qq.com/s/QJuDJ_PbwEtVNV-lXUWlWg)

# **![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")**

  

先看一下这个电路：USB外接电源与锂电池自动切换电路设计

![](主副电源_MOS管自动切换电路分析_images/img_002_30f626217e1e.png)

  

如果主副输入电压相等，同时要求输出也是同样的电压，不能有太大的压降，怎么设计？这个电路巧妙的利用了MOS管导通的时候低Rds的特性，相比二极管的方式，在成本控制较低的情况下，极大的提高了效率。 

本电路实现了，当Vin1 = 3.3V时，不管Vin2有没有电压，都由Vin1通过Q3输出电压，当Vin1断开的时候，由Vin通过Q2输出电压。因为选用MOS管的Rds非常小，产生的压降差不多为数十mV，所以Vout基本等于Vin。                                        

### **原理分析**                

1、如果Vin1 = 3.3V，NMOS Q1导通，之后拉低了PMOS Q3的栅极，然后Q1也开始导通，此时，Q2的栅极跟源极之间的电压为Q3的导通压降，该电压差不多为几十mV，因此Q2关闭，外部电源Vin2断开，Vout由Vin1供电，Vout = 3.3V。此时整个电路的静态功耗I1+I2 = 20uA。

![](主副电源_MOS管自动切换电路分析_images/img_003_8b4529b1b2f2.png)

  

2、现在，Vin1断开了，Q1截止，Q2的栅极有R1的下拉，所以Q2导通，Q3的栅极通过R2上拉，所以Q3也截止，整个电路，Q1跟Q3截止，Vout由Vin2供电，Vout = 3.3V。此时上面电路I1跟I2的静态功耗不存在。

![](主副电源_MOS管自动切换电路分析_images/img_004_855a2f0586ae.png)

  

当存在主电源时，电路的静态功耗为20uA，否则，几乎为零。所以电池适合在外部电源供电。MOSFET Q1、Q2跟Q3应该选择具有低压栅极和非常低的导通电阻特性。

硬件工程师都在关注我们

![](主副电源_MOS管自动切换电路分析_images/img_005_2e84b7ba26c6.gif) ![](主副电源_MOS管自动切换电路分析_images/img_006_51d069a6484e.gif) ![](主副电源_MOS管自动切换电路分析_images/img_007_5fb296583be4.gif) ![](主副电源_MOS管自动切换电路分析_images/img_008_1f30148044c0.gif) ![](主副电源_MOS管自动切换电路分析_images/img_009_c5bc86d0867d.gif) ![](主副电源_MOS管自动切换电路分析_images/img_010_b38438d4de46.gif) ![](主副电源_MOS管自动切换电路分析_images/img_011_1d54e9fe0aef.gif) ![](主副电源_MOS管自动切换电路分析_images/img_012_9bb0105b1e46.gif)

![](主副电源_MOS管自动切换电路分析_images/img_013_de88c48250d0.gif) ![](主副电源_MOS管自动切换电路分析_images/img_014_3b83df2d253b.gif) ![](主副电源_MOS管自动切换电路分析_images/img_015_db521919e8d9.gif) ![](主副电源_MOS管自动切换电路分析_images/img_016_aea384ea417e.gif) ![](主副电源_MOS管自动切换电路分析_images/img_017_f4924e7a240a.gif) ![](主副电源_MOS管自动切换电路分析_images/img_018_a58db91dbb3b.gif) ![](主副电源_MOS管自动切换电路分析_images/img_019_f0edc68b0c53.gif) ![](主副电源_MOS管自动切换电路分析_images/img_020_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源KIA半导体。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群