# PCB焊盘上，到底可不可以打过孔

原创 硬件笔记本 2023-05-31 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/wL27IcnK-UkOc1MhVBFurQ](https://mp.weixin.qq.com/s/wL27IcnK-UkOc1MhVBFurQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

![](PCB焊盘上_到底可不可以打过孔_images/img_002_b553e5a7aa58.png)

在设计电路板时，有时因为板子面积的限制，或者走线比较复杂，会考虑将过孔打在贴片元件的焊盘上。

一直以来都分为支持和反对两种意见。

现将两种观点简述如下。

  

**支持：**  

网友A

一般需要在焊盘上打过孔的目的是增强过电流能力或加强散热，因此背面主要是铺铜接电源或地，很少会放贴片元件，这样为防止在回流焊时漏锡，可以将过孔背面加绿油，问题也就解决了，在我接触过的服务器主板电源部分都是这么处理的.

  

**反对：**

网友B

一般贴片元件可以采用回流焊工艺或波峰焊工艺中的一种,波峰焊要求焊盘密度不宜太高,焊盘太密容易造成连锡短路,  贴片IC脚都比较密,  采用回流焊则是首选方案.

而插装文件则只能采用过波峰焊方式.关于波峰焊和回流焊在网上能找到不少介绍.搞PCB设计的工程师们请先了解一下这些生产工艺才知道如何去设计。

  

网友C

AD里面有Fanout规则，就是禁止把过孔打在焊盘上的。

传统工艺禁止这么做，因为焊锡会流到过孔里面。

现在有微过孔和塞孔两种工艺允许把过孔放到焊盘上，但非常昂贵，咨询一下PCB厂。

  

网友D

最好不要打过孔在PAD上，容易引起虚焊。好好整理一下布局，一个小小的过孔的位置应该还是找的到的。

不过，对于贴片元件，回流焊的时候，焊锡会通过过孔流走。所以慎用.

个人建议：在焊盘上打过孔的方式容易造成贴片元件的虚焊，在万不得已的情况下尽量慎重使用。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。