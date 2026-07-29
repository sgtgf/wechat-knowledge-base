# MOS体二极管的妙用

原创 蜗牛 硬件笔记本 2022-11-18 07:28 四川

> 原文地址: [https://mp.weixin.qq.com/s/zDmltZHXpP7Q\_\_jywQ3jag](https://mp.weixin.qq.com/s/zDmltZHXpP7Q__jywQ3jag)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

大家好，我是蜗牛兄，今天跟大家分享的是关于MOS体二极管的用法及理解。

  

  

**背景**

  

起因是这样的，公司一个产品的电源设计要求防反接，然后同事设计了一个电路，很多人看了第一反应就是，这能工作吗？这图画错了吧。你是不是也这样认为呢？咱们稍后一起分析。

  

  

本文主要从以下4个方面进行讲解

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_002_6f3f26f42e2d.png)

## 一、常规防反接电路的设计

防反接电路一般有以下做法

①串联二极管

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_003_aade17e2bbb4.png)

优点：简单

缺点：功耗大，效率低

  

  

②输入端加整流桥

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_004_05f70fd2275a.png)

优点：不论什么极性都可以正常工作

缺点：功耗大，效率低，两个二极管导通，功耗是上一个方案的两倍。

  

## 二、MOS管的常规用法

  

我们在最开始学习MOS管的时候，大多都是从NMOS开始的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_005_fc7634f08a13.png)

常规NMOS导通后电流流向

  

当Vgs＞Vgs(th)，MOS管导通，电流的方向是从D到S。

很少听到电流方向是从S到D。  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_006_3334931afd3f.png)

常规PMOS导通后电流流向

  

当Vgs＜Vgs(th)，MOS管导通，电流的方向是从S到D。

很少听到电流方向是从D到S。

  

  

## 三、MOS管防反接电路的设计及分析

同事设计的防反接电路如下，很多人看了第一反应就是，这电路对吗？

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_007_5c703e9fc9cb.png)

咱们一起来分析一下。

  

**①当电源正常插入时**  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_008_c2a5b152c2dd.png)

  

电源正极Vin\_12V经过MOS体二极管，然后到负载RL，最后回到电源负极。假设体二极管的压降为0.7V，那么S极电压约为12-0.7=11.3V。

  

G极的电压为电阻R4，R5分压后得到，可根据MOS管的导通电压调整参数。  

假设R4=1K，R5\=10K，Vgs=Vg-Vs=-10.3V，满足PMOS导通条件。

管子导通后，导通压降基本为0，Vgs=\-10.3V，管子维持导通状态。

  

这里有一点需要特别注意，就是此时MOS管的电流是D到S的，与往常我们经常见的S到D是反的。

  

  

**①当电源反向插入时**

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_009_bf1f9044b88d.png)

  

电源反向插入，MOS体二极管反向，管子不通。

同时，Vg＞Vs，MOS导通条件不满足，所以管子也不通。  

  

管子不通，无法形成电流回路，起到防反接的作用。

  

  

## 四、MOS体二极管能过多大电流？

看了上面的分析，估计很多小伙伴会有一个疑问：

  

体二极管能过多大的电流？不会烧坏吗？

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_010_253f130b4396.png)

  

体二极管，我们一般也叫寄生二极管，谈到“寄生”一词，我们首先会想到寄生电容和寄生电感，既然是寄生的，那么体二极管通过的电流就不会太大。

  

带着这个问题，我们去看一下某型号MOS管的规格书。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS体二极管的妙用_images\img_011_c428b5750fa2.png)

从上表可以看出，体二极管的持续电流是可以到11A，脉冲电流是可以到33A的，二极管的导通电压是1.4V。

  

对，持续电流是可以到11A，可能很多小伙伴对这个电流都比较意外。

  

今天的分享就到这里，希望对你有帮助。  

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。