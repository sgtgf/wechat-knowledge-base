# 为什么BUCK降压电路会出现奇怪的负电压？简单易懂一学就废

原创 工程师看海 硬件笔记本 2022-11-21 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/gdgzlQlmY2Atgy4398cmcw](https://mp.weixin.qq.com/s/gdgzlQlmY2Atgy4398cmcw)

▼关注硬件笔记本▼

  

BUCK是常见的降压拓扑结构，对于BUCK开关节点的波形，有的文章画的是标准的方波？而有的文章画的却是有一个负的脉冲波形呢？

就比如下面两个波形，高电平是一样的，但是负电平却又很大差异。第一个图在开关节点位置有-0.7V的恒定负电平，而第二个却比较复杂，有一个-0.7V的脉冲负电平后又变为0电平，这两种波形是分别怎么产生的呢？

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4e1APEWGHLvfwBwFCqTJwQIMic40ktt5JibujCXOtCDIgVOBnPfBARia5NA/640?wx_fmt=png)

  

这从要BUCK的分类说起了，BUCK分为非同步BUCK和同步BUCK两种，下图中使用二极管D1的是非同步BUCK，如果把二极管换为开关管，那么就是同步BUCK了。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4eNmNtNnhVfBpTlHrhURxp4he7LbEXIcURJ3uALm5ZUAVq2yLic0ia9n1A/640?wx_fmt=png)

BUCK工作原理参考以前的文章，**请搜索《BUCK电路详细原理》**。高电平时两种波形一样，我们只讨论低电平时的情况。

  

在下图非同步BUCK中，当开关S1断开时，是通过储能电感L1向负载放电，放电路径是L1->负载->D1，因此在A点测量，Vsw会有一个恒定的二极管导通电压，即-0.7V。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4eWth87xev6MJfLlRjrSqpcSQXo3esv6EKv4sztMzH1gia02icw3x8I7sw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4enTYXkVrMj192YokjzRXurLtyYMOaC5mwyuwpesMcGS9OdMD5EZeZWQ/640?wx_fmt=png)

对于同步BUCK而言，如果上下两个管子同时导通，将会发生短路的现象。为了避免上下管S1和S2同时导通，需要增加死区时间（dead time）。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4egYL1aIDbUjTicklibqJjNFaOibZhho0Sxpo8jxN4PficYIicAQd9yNBkMcA/640?wx_fmt=png)

在死区时间内，上下两个管子都不导通，此时电感是通过MOS的体二极管进行放电的，MOS体二极管的原理请搜索文章《为什么MOS管要并联个二极管，有什么作用？》，既然是通过体二极管放电，那在Vsw就有一个接近于-0.7V的负压。而过了死区时间后，下管MOS S2被导通，放电路径为电感->负载->MOS（二极管被MOS短路），MOS的导通阻抗很小，所以此时VSW的负电压很快从-0.7V衰减到0V，而后又进入死区时间，负压又变为大约-0.7V。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4eXOkCNSWu5EV3QfdaiaPoSjZCM6uHlu74ib0adquZPRk6qibXjHXgqfGHw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4GNxHlX2RV0KzwjEwEFo4e6seMaIneIVPQadroBRgLO0M1kdYk9YKibMJX9pib2wqg7jJX6PBNoeUg/640?wx_fmt=png)

你学废了吗？

## 

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。