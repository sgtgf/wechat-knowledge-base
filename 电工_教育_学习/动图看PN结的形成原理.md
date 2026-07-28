# 动图看PN结的形成原理

原创 硬件笔记本 2023-05-27 10:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/xlo9fvlW4STfI1WklVAXIg](https://mp.weixin.qq.com/s/xlo9fvlW4STfI1WklVAXIg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

关于二极管的原理来自于PN结，下图为本征半导体：

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWc4ATc3rTw1UCaXyK9KF3sgYw85g5ZHK19D6hhgnqAFHoWv6S3nbsDjw/640?wx_fmt=gif)

  

1.空穴与电子

动画中空穴是红的，电子是蓝的，其实我一直对空穴这个概念很抵触，因为从这个动画上来看空穴是不动的。但讲PN结、三极管的时候都会把空穴当成运动的载流子，虽然似乎也不是很难理解。

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWczq3K4H8icwU9B8vLrYicmVHDRWlK7OFciaTicSJCG21goShzgkgEjtPTNQ/640?wx_fmt=gif)

  

P型半导体空穴多，容易吸引电子但原子核电荷不够，会形成负电荷。

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcmic2XMO48HicKQjav3XkZ67qSIPtOHaLG4Bas0yCoDpJdD9LbRywzB0Q/640?wx_fmt=gif)

N型半导体电子多，电子容易逃跑且原子核电荷太多，会形成正电荷。

  

2.PN结

P(Positive)型半导体和N(Negative)型半导体构成PN结以后，会扩散出一个内电场，也叫PN结、阻挡层、耗尽层、空间电荷区。

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcsUGJAtMxCmia3t2vh9wLHvwPsuz6HX9Tyia1icsEJmkhjp9nSEiaa9rVsA/640?wx_fmt=gif)

  

电子受到电场力作用会漂移向N级，但N级电子太多，还是会向P级扩散。两种运动形成了动态平衡，当然，不一定会像下面这个动画一样形成稳定的环形电流。

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcyHGyN3FxRQu2PoDiaNoUePJgYEAiaTo6rPia4K7B0DHtSmaHGbt2MUOzQ/640?wx_fmt=gif)

  

3.正向偏置

电源正极接P，负极接N，电荷会重新分布

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcoGgU94UicNV3XpiblY143Zpvec8ibDN1zYicoOUxAbNak1ictRNvl31MA7w/640?wx_fmt=gif)

  

因为载流子多而且PN结窄,所以会形成比较大的电流。

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcLE19CEEhnK4icnBWncbpgoEqsdXHhQicKUjOIlDuQibzh1MOKgE6nhVYw/640?wx_fmt=gif)

  

4.反向偏置

电源正极接N，负极接P，电荷也会重新分布

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcBupeUbIJIXwsn2A1vWcicWrLCnbia9qqH55YpoonVfjKfUM9gnBINDZg/640?wx_fmt=gif)

  

因为载流子少而且PN结太宽，所以电流会很小。

![](https://mmbiz.qpic.cn/mmbiz_gif/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcx2kTBAvv9SHj57icF4VETzmQGHGotIPTdDfovDbYQ0zkXedvP014BLQ/640?wx_fmt=gif)

PN结基本原理就讲到这里。

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。