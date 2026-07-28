# 三极管和MOS管基础

原创 佑佑 硬件笔记本 2023-03-30 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6fCDKdUENqkIpS2ZTgLj4g](https://mp.weixin.qq.com/s/6fCDKdUENqkIpS2ZTgLj4g)

  

咱们电路设计中，用的最多的就是三极管和MOS管，今天给大家分享几种常用的三极管和MOS管的基础知识及应用电路。

**#1**

**基础知识**

**三极管是电流控制型器件**

三极管的导通，需要在其b极提供电流，才能使ce导通，流过ce之间的电流与b极电流的关系是Ib\*β=Ice。这个β称为三极管的放大倍数，从规格书获取，典型值是100，同一个芯片不同Ib的β也是不同的。

  

**MOS管是电压控制型器件**

MOS管的导通，以NMOS管举例，需要提供一定的Vgs电压，这个参数在规格书中成为Vgs（th）,也就是导通所需要的电压。

  

  

**#2**

**分类及引脚定义**

1、从半导体结构上看，三极管分为NPN型和PNP型。

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vR9JRiaUOc1kibeANnXg8NPyGXno1RfNrT7nqBYw3IZ5gw71VlBRkZSr8MLia19PZfMwzwJR0rgQ700w/640?wx_fmt=png)

  

2、按沟道分类，MOS管分为PMOS和NMOS

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vR9JRiaUOc1kibeANnXg8NPyGkdibDmh8XtPEKV9micSzv5RjrGibf7D2aHRTYTPicLZ1MuW3HhWLSHJw0w/640?wx_fmt=png)

  

  

**#3**

**导通电流方向**

1、三极管导通方向

NPN：c→e

PNP：e→c

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vR9JRiaUOc1kibeANnXg8NPyGvuuUWJUTXCURJial5n14d5ibuUpTrfu94v5XI3K16VYKLJiaEvyyytzfw/640?wx_fmt=png)

  

2、MOS管导通方向

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vR9JRiaUOc1kibeANnXg8NPyGric8mTaXoquAZeibuqlv1H215AHd5vedhIIy3SCgRp1pOqGiaicC47gKxg/640?wx_fmt=png)

  

  

**#4**

**基础应用电路**

我们以点亮一个灯为例（MOS管点灯太奢侈了，这里我们假设LED为负载）  

1、NPN三极管 VS NMOS管

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgkQs1l55icxdD4ia0XWC4ltibTiblNAcL2c9nialjiaC89BNGSVfRnpx4s2VgwLNraE8N9GB0WHydhNgLg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

2、PNP三极管 VS PMOS管

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgkQs1l55icxdD4ia0XWC4ltiba3DNBdzOIYIQV28g1pCcTFByLXPWlsCqt9Ea3uOGOCUqvB78V04xjw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。