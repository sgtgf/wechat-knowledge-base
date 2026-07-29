# eVTOL电机技术要点

原创 电机新视界 2025-04-20 12:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/CN4I3-sUps6lzzoBq9eA1w](https://mp.weixin.qq.com/s/CN4I3-sUps6lzzoBq9eA1w)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0vVzniaJLlic39Dz12BCFAZj7AWkWzuNibGJdicvKpp96atY6HXBudPQPnwHaLIUMU8bzYtnGzHWGjibIg/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzU4MDY1Mzk2Nw==&mid=2247696859&idx=1&sn=9eb96c0e080b2c91b5969ca0495891d2&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0sGaiavWQDOVENcCsibmWmaQGzk3OXovmMVEL37OmORheybicVl0VGU62HlgibGJtUBhDtpkkbyiapw1LA/640?wx_fmt=jpeg&from=appmsg)


来源：电动车千人会

  

**1\. eVTOL电机技术特点**

在分布式电推进中，是由电机驱动分布在机翼或者机身上的多个螺旋桨或风扇构成推进系统为飞机提供推力。电机的功率密度直接影响着飞行器的有效载荷能力，电机的大范围变工况动力输出能力、可靠性和环境适应性是决定电推动飞行器动力特性和安全性的重要因素。电动车、无人机和eVTOL对于电机的选择由于成本、应用场景不同等原因而有所区别。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Uyic5VYxfCqiatVFrCvTVXvFbowTuCnpBqdpp4mrtyDrC5zlIS2GMUQ9k7kU7icSXm7jF0KibZQsHpjuD874KEQuRw/640?wx_fmt=other&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

（图片来源：网络/赛峰官网）

  

1）电动车：更多选用永磁同步电机，永磁电机所具有较高的效率和较高的转矩可以提供更好的驾驶体验。同时永磁电机的高功率密度也可以帮助电动车在相同的体积下获得更高的动力。

  

（2）无人机：常用无刷直流电动机。无刷直流电机具有较低的重量和噪音，而且维护成本较低，适合无人机的飞行要求；二是无刷直流电机的转速较高，适合无人机中的高速飞行的需求。如大疆使用的就是无刷电机。

  

（3）eVTOL：对电机效率和转矩密度的要求较高，永磁同步电机是电推进动力系统很具前景的方案，因为轴向磁通永磁电机对径向空间的利用率高，在长径比较小的场合，功率密度和转矩密度具有优势。当前电动垂直起降飞行器，如Joby S4、Archer Midnight等均采用了永磁同步电机。

  

下图为单定子单转子轴向磁通电机定转子磁感应强度云图

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Uyic5VYxfCqiatVFrCvTVXvFbowTuCnpBqjMrAnLIhLHznIgyFWltmFFicF3t36ia6FibB9CCIS6Zw6tCMH3kMdZRDw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

下图为电动飞机和电动汽车电机参数对比

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Uyic5VYxfCqiatVFrCvTVXvFbowTuCnpBqblZ0JEx9tktIhRqick21l8qOXsZnXhRwNrO8ib7njnLwMkXTJ8K51lNA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

（图片来源：中投顾问，中投产业研究院整理）

**2\. eVTOL电机发展趋势**

当前，通过提升电磁设计技术、热管理技术和轻量化技术降低电机结构重量和散热系统辅助重量，不断提高电机的功率密度和宽范围变工况动力输出能力，是eVTOL动力系统的主要发展趋势。根据《飞行汽车的研究发展与关键技术》，航空推进电机通过使用具备更高耐温极限的绝缘材料、更高磁能密度的永磁材料和更轻的结构材料，已经可使电机本体的额定功率密度超过5kW/kg。通过改善电机的电磁结构设计，例如采用Halbach磁阵列、无铁芯结构、Litz导线绕组等技术，以及改善电机的散热设计，预计2030年电机本体的额定功率密度可达10kW/kg，2035年额定功率密度将超过13kW/kg\[1\]。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Uyic5VYxfCqiatVFrCvTVXvFbowTuCnpBqZkPZerounkwFhD7ib6briam4rRflOdlawGTfmhPiaxGK4x8NUibibXNnSPQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

（图片来源：网络/赛峰官网）

**3. 纯电与混动路线对比**

对比纯电路线和混动路线，目前从相关厂家的选择看，国内eVTOL项目以纯电**方案为主，**受限于锂离子电池能量密度，低载客量的eVTOL是纯电推进技术的最佳落地场景。**海外则有部分厂家提前布局混动方案，**已经率先进行了多轮测试与迭代。从下表可以看到，混动方案在续航角度明显更强，未来在中远途低空交运的场景下可实现更多用途。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Uyic5VYxfCqiatVFrCvTVXvFbowTuCnpBqhVKbHCpkl85S3aUz3QPVAdB8o38xmFjQ3o3ZfSxyLxVJ9wTn3598Zw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

（图片来源：网络）

  

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)  

  

# [高压电机 能效标准GB 30254-2024已发布 9月1日正式实施](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247574347&idx=1&sn=324e60a45f9ce388894db215c8ad9534&scene=21#wechat_redirect)

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

# [华为都“活不下去了”！电机中小企业未来三年要怎么过](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247575025&idx=1&sn=800a15fe2572766ef1632371ee7475f2&chksm=cedfe435f9a86d23f050893e070245640fbc59fce832cb6264e6ecf8b6c43c0fe9a0c6565a38&scene=21#wechat_redirect)？


[![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vAFjNjgs25tqibVUnHhKtqEDibUPDEujzIicS3PhXH2y8OJz6cAQY2noeyldbvNbT7ibRjE3iccc4KyLw/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzkzMjc2MDYzMg==&mid=2247498858&idx=1&sn=cbdd1df5338cc64e8c770d5972e4b69e&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88ic1cyT6sT4Eb9gB9NyuTGgwBM45cpIiayzA9KliaEhiasA8MFU1dzKPcjg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88HJkEmpYqlKiaC4tFrnTia7L7pjBnCvUZtV9MV1HRf7nRn8kPs7bKsmQQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88ULU9yWwiclQtG6BjIghiafsrrnPXJxjrGQfbnkeibicOsWjPXsyjwG4zdg/640?wx_fmt=jpeg&from=appmsg)

扫码报名了解变压器会议

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uKdXjFpsB1RDrRBMYRO6OxT5YrmvxSnbaaDeXF4bqovY9IfrC6SxJMBQtp4dnM1tPnlKziaSEUguw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uKdXjFpsB1RDrRBMYRO6Ox2gll6RtjpK3FFYmgTBOGo4FeTnVZtkL7ZlKEclXqTtZ7vtFY28R0ew/640?wx_fmt=jpeg&from=appmsg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0t1sNKPl7b3fvXjBZ5n0zqWv9bKebxXm1TmYGTjkrJbvI0JtF4TibavniaFHiavc18KnuUoQMicVG09yw/640?wx_fmt=png&from=appmsg)