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

![](三极管和MOS管基础_images/img_000_de995a5092cd.png)

  

2、按沟道分类，MOS管分为PMOS和NMOS

![](三极管和MOS管基础_images/img_001_57a1491708d9.png)

  

  

**#3**

**导通电流方向**

1、三极管导通方向

NPN：c→e

PNP：e→c

![](三极管和MOS管基础_images/img_002_607cae05cab1.png)

  

2、MOS管导通方向

![](三极管和MOS管基础_images/img_003_74a9bbd39505.png)

  

  

**#4**

**基础应用电路**

我们以点亮一个灯为例（MOS管点灯太奢侈了，这里我们假设LED为负载）  

1、NPN三极管 VS NMOS管

![](三极管和MOS管基础_images/img_004_cd60c8c9aeb7.png)

2、PNP三极管 VS PMOS管

![](三极管和MOS管基础_images/img_005_380153a83eb8.png)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。