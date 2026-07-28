# DC-DC开关电源电路计算

原创 硬件笔记本 2023-04-01 08:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/xOcLS5S81miTgqXbi8-x6g](https://mp.weixin.qq.com/s/xOcLS5S81miTgqXbi8-x6g)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

**Buck电路分析**

Buck变换器是一种降压式非隔离开关电源，当开关管导通时，输入电源通过电感给输出供电，同时电感存储能量；当开关管关断时，电感通过续流二极管给输出供电；如此反复即可维持输出产生一个恒定的电压。其Buck电路拓扑结构以及电路分析计算见下图。

![](https://mmbiz.qpic.cn/mmbiz_png/wyFZEia3R5KlqZfUE0RATQibmrMljooY7oJOrbfo5XhM9fYGOibtuxQzJUVSxnM40wBKaYGh8Rxv0xOl5wL16QJng/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**Boost电路分析**       

Boost变换器是一种降压式非隔离开关电源，当开关管导通时，输入电源通过电感给电感充电，电感存储能量；当开关管关断时，输入电源和电感能量通过续流二极管给输出供电；如此反复即可维持输出产生一个恒定的电压。其Boost电路拓扑结构以及电路分析计算见下图。

![](https://mmbiz.qpic.cn/mmbiz_png/wyFZEia3R5KlqZfUE0RATQibmrMljooY7oAM423pic4IIbqRHC0RWlgJXm1wbIO50EcGn1LhM8IFIZ8ZN2MIjePNA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**Buck-Boost电路分析**      

 Buck-Boost变换器是一种升降压式非隔离开关电源，当开关管导通时，输入电源通过电感给电感充电，电感存储能量；当开关管关断时，电感能量通过续流二极管给输出供电；如此反复即可维持输出产生一个恒定的负电压。其Buck-Boost电路拓扑结构以及电路分析计算见下图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/wyFZEia3R5KlqZfUE0RATQibmrMljooY7oZuoCnOFqjHB2YHQicjOuibME2e2NaiauBicnLBUMYKaPyu9ibpf1axSsgFw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。