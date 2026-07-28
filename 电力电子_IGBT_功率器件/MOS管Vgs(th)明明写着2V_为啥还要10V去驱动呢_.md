# MOS管Vgs(th)明明写着2V，为啥还要10V去驱动呢？

原创 王工 硬件笔记本 2026-07-03 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/J1ojRLjE4waMjRd7lnulHg](https://mp.weixin.qq.com/s/J1ojRLjE4waMjRd7lnulHg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

之前给大家分享过一个兼容设计的案例：输入电压可能是12V，也可能是24V，两种电压二选一。在不同输入下，PMOS管的Vgs驱动电压会不一样——12V输入时Vgs约6V，24V输入时Vgs约12V。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niad3FLnQiavmkcB2iaJYjqoX740qHDmibfa4zohMRzfXt6UvNhc694eeX7ZAwuOSC45rRUA7SliabzyVBP1kBrERWzLaAich1lKQpyq0/640?wx_fmt=png&from=appmsg)

这就引出一个问题：这种电路在设计的时候，我们到底要考虑哪些因素？或者说，驱动电压究竟给多少才合适？  

往深了说，其实是一个老生常谈的话题：MOS管手册里明明写着Vgs(th)最小只要1V或者2V电压就能导通，为什么实际电路中大家偏偏要用10V、12V甚至更高的电压去驱动？

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeosEHGNP0tfXuZZds29WliaSeibwdQxyLgPmJrEvwbjOUE4OI9tHZ6DKfcC654KYuCiagF8zJciaEBZ2XticCy2NlQvwCKBibXiamoZE/640?wx_fmt=png&from=appmsg)

我之前写过一篇文章聊这个事，当时没梳理清楚，今天重新整理一下思路。

咱们直接说结论：Vgs(th)**只是让MOS管刚刚开始导通的门槛电压，而10V~15V是让MOS管完全充分导通的推荐工作电压。** 两者根本不是一回事。

### 1、阈值下的实际电流只有1mA

你去看任何一款MOS管的数据手册，Vgs(th)=2.5V的时候，后面一定会跟着一个测试条件：ID=1mA。也就是说，在这个阈值电压下，MOS管只能流过1mA的电流。你要是用它来驱动一个几安培的负载，根本不可能，因为这时候管子还处于高阻状态，带不动任何实际负载。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niad3PzJeFrRu1OHYH4abdNHH6CebF16bXUnLq8owIAzRxjnfBkFHG0b7dcGPSNsmp2Y0vdY2WZVdD6dlOqeZibCUE3wzQd0iaFuEU/640?wx_fmt=png&from=appmsg)

### 2、驱动电压不够，内阻就降不下来

MOS管数据手册上标称的那个很小的导通电阻RDS(on)，比如2.1mΩ，通常是在Vgs=10V的条件下测出来的。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf9oBaxsGyy4QGhKqASkcS82Ld9zdRE8pKiccjR1fgiaicibzdpSTfqLzbf6ia1WibqKWobBPNBpb3ncvTzekkgfu35UL6AQARKib4Uew/640?wx_fmt=png&from=appmsg)

如果你只给5V，内阻可能还停留在5~6mΩ。驱动电压越低，沟道开得越不完全，内阻就越大。大电流流过来的时候，管子上的压降和功耗（I²R）都会明显增加，温升很快。**用2.5V去驱动的结果，就是MOS管严重发热，大概率会烧掉。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaczcQI8e9jckN3C0mGSuxzibBQ4o1ibjcI75aTDcXhV68iaGZA8tkGX1ekTnMe7TQicRPAK6GLD9CjtI8LZiaBAxTVDdr7lWrSaVl9w/640?wx_fmt=png&from=appmsg)

### 3、最关键的一点：冲过米勒平台的速度

MOS管在开通的过程中，栅极电压会经过一个米勒平台。在这个平台期间，MOS管处于半开半关的状态，漏极电压和漏极电流同时存在，**这时候的开关损耗是最大的**。如果在这个平台停留太久，管子会急剧发热。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niad5DBibVMxP6jTgYcVXk2AHgEHKGcOcwMHUeoDiaCA33RcdYbzc0QE6oGTRajoT7IxSb0JPumHKNicdibjBZhEBvRmTyOPAopI12GU/640?wx_fmt=png&from=appmsg)

驱动电压越高，栅极电容充电的压差就越大，充电电流就越大，栅极电压上升的速度就越快。用12V驱动，栅极电压能很快冲过米勒平台这个区域，**缩短开关时间，从而降低开关损耗**。

如果用5V甚至2V驱动，栅极电压爬升得慢，在米勒平台停留的时间就长，开关损耗大幅增加，效率会低很多。

好了，今天的内容不多，就分享到这里了，咱们下期再见！