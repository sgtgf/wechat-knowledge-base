# 很基础的MOS管知识

原创 硬件笔记本 2023-06-14 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/jm2hv7hgDnkOWZfXGEsSCw](https://mp.weixin.qq.com/s/jm2hv7hgDnkOWZfXGEsSCw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

半导体三极管中参与导电的有两种极性的载流子，所以也称为双极型三极管。本文将介绍另一种三极管，这种三极管只有一种载流子参与导电，所以也称为单极型三极管，因为这种管子是利用电场效应控制电流的，所以也叫场效应三极管（FET），简称场效应管。

场效应管可以分成两大类，一类是**结型场效应管**（JFET），另一类是**绝缘栅场效应管**（MOSFET）。

  

![](很基础的MOS管知识_images/img_002_446ff6ceec53.png)

在如果你在某宝里搜索“场效应管”你会发现，搜索出来的基本上是绝缘栅场效应管。

  

![](很基础的MOS管知识_images/img_003_3bf3e26e60ab.png)

  

即使搜索“结型场效应管”，出来的也只有几种，你是不是怀疑结型场效应管已经被人类抛弃了的感觉，没错，JFET相对来说是比较少使用的，如果你问百度，**百度貌似也无法回答你这个问题**。

  

![](很基础的MOS管知识_images/img_004_cba6b2dfe768.png)

  

欢迎知道原因的朋友**留言分享**一下，为什么结型场效应管比较少使用？

  

下面我们就跳过JFET，来点实际的，还是直接分享绝缘栅场效应管的相关基础知识吧。

  

**绝缘栅场效应管**中文全称是金属-氧化物半导体场效应晶体管，由于这种场效应管的栅极被绝缘层隔离，所以又叫绝缘栅场效应管，英文简称是**MOSFET**，一般也简称为MOS管。

  

MOSFET的输入电阻很高，高达109Ω以上，从导电沟道来分，可以分为N沟道和P沟道两种，无论是N沟道还是P沟道，又可以分为增强型和耗尽型。

  

N沟道的MOS管通常也简称为NMOS，P沟道的MOS管简称为PMOS。

![](很基础的MOS管知识_images/img_005_3a1616c47d40.png)

▲ MOS管种类

  

MOS管共有3个脚，**栅极G**，**漏极D**，**源极S**，通常情况下，MOS管的衬底是跟S极在管子内部是连接在一起的，而且，MOS管的D极和S极之间一般会有一个寄生二极管，所以，**你见到的MOS管的符号通常是画成下面这样的**。

  

![](很基础的MOS管知识_images/img_006_2738c0c06125.png)

▲ MOS管符号通常是画成这样的  

  

仔细观察的朋友可以发现，无论是N沟道还是P沟道，寄生二极管的方向总是跟箭头的方向是一致的。

  

其实在一般使用中，更多是使用N沟道增强型或者P沟道增强型MOS管，耗尽型的管子是比较少使用到的。

  

那么，如何使用MOS管做电子开关？比如用来驱动LED？

  

先来两个图。

  

![](很基础的MOS管知识_images/img_007_b1d87f092b5a.png)

▲ MOS管做电子开关的简单应用

  

一般认为MOS管导通是不需要电流，只要UGS提供一定的电压就可以导通了。

  

对于**N沟道增强型的MOS管，当UGS大于一定值时就会导通**，这里所说的“一定值”是指开启电压UGS(th)，N沟道增强型UGS(th)一般是2~4V之间。

  

![](很基础的MOS管知识_images/img_008_c13d37a3843d.png)

  

  

对于**P沟道增强型的MOS管，当**UGS******小于一定值时就会导通**，P沟道增强型UGS(th)一般是-2~-4V之间。

  

![](很基础的MOS管知识_images/img_009_4873ac6cc3e7.png)

  

  

如果UGS达不到相应的电压值，MOS就无法导通，所以说MOS管是电压控制型元件。  

  

可能会有朋友问，**电路图中的电阻Rgs有什么作用？**

**![](很基础的MOS管知识_images/img_010_fa092c85f644.jpg)**

是这样的，在MOS管内部结构里，G极与D极、S极实际上是有一层绝缘层二氧化硅进行隔离的，这就相当于存在一个电容器。

![](很基础的MOS管知识_images/img_011_8ad75a26411a.png)

这些寄生电容是无法避免的，电容的大小由MOS管的结构、材料、所加的电压决定。

  

如果上面的电路图没有电阻Rgs的，电路将会变成怎样呢，下面以图1为例，做个小实验。

  

![](很基础的MOS管知识_images/img_012_2f284166f1e5.png)

  

没有电阻Rgs时，在G极接上5V控制信号，相当于给寄生电容Cgs进行充电，即使撤去G极上的控制电压，G极上也有电容的电压存在，所以MOS仍然是导通的。

  

![](很基础的MOS管知识_images/img_013_53efc44d395d.png)

  

当有G、S两极有电阻Rgs时，当G极撤去5V信号，电阻Rgs可以把寄生电容Cgs上的电压进行释放，所以MOS就截止了。

  

所以，上面电路加入电阻Rgs，可以对电容的电压进行及时的释放，这样有利于提高电路的可靠性，可以避免G极没有控制信号时误动作。

  

MOS管具有输入阻抗高、开关速度快、热稳定性好、电压控制电流等特性，在电路中，可以用作放大器、电子开关等用途。MOS管相关的知识还有很多，以后再跟大家讨论。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。