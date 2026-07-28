# EMC整改中，共模电感的使用原理

原创 硬件笔记本 2022-09-15 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/bWYRlbKEn7tVcN\_fh1XuNQ](https://mp.weixin.qq.com/s/bWYRlbKEn7tVcN_fh1XuNQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

区别于常见的电感有四个导线称之为共模电感。

  

▎**抑制共模噪声**

抑制共模噪声的方法多种多样，除了从源头去减少共模噪声外，通常我们抑制最常用的方法就是使用共模电感来滤除共模噪声，也就是将共模噪声阻挡在目标电路外面。即在线路中串联共模扼流器件。

这样做的目的是增大共模回路的阻抗，使得共模电流被扼流器所消耗和阻挡(反射)，从而抑制线路中的共模噪声。

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCT0ibYgByLIlib0xJDHYdJczw0LIS6PHibiaYKZUdII7EAmZA9LxHqYmx2Cw/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

  

▎**共模扼流器或电感的原理**

若在以某种磁性材料的磁环上绕上同向的一对线圈，当交变电流通过时，因为电磁感应而在线圈中产生磁通量。

对于**差模信号**，产生的磁通量大小相同、方向相反，两者相互抵消，因而磁环产生的差模阻抗非常小；

而对于**共模信号**，产生的磁通量大小和方向均相同，两者相互叠加从而使磁环产生了较大的共模阻抗。

这一特性使得共模电感对于差模信号的影响较小，而对共模噪声具有很好的滤波性能。

  

通俗的总结：

**因为****楞次定律（Lenz's law）****，共模电感这种连接下，两条线互感形成的磁通是同一方向。 交变电流形成的磁场与磁铁的固有磁场形成对抗，相互抑制，才能实现滤波功能。** 

1) 共模电流通过共模线圈，磁力线方向相同，感应磁场加强，从如下图磁力线方向可以看出—实线箭头表示电流方向，虚线表示磁场方向

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCTZ5vClF176SdYWsvc8ibSqo2sNn127FUl5bbO0icdkT6mAvm3lEUDbBuw/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCTB0sfAhFW5eibqAqcu7lWUeP0jWlQde0MibScJ17BMc2Dic19IMev5tvLQ/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

  

对于共模线圈或者共模电感，当共模电流流过线圈时，由于磁力线方向相同，在不考虑漏感的情况下，磁通量叠加，其原理是互感。

下图红色线圈产生的磁力线穿过蓝色线圈，同时蓝色线圈产生的磁力线也穿过红色线圈，彼此相互感应。

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCTqWRypEgEe8cVcg0zjzj676hybS0XDBicbBia0bTs712ZoaqB0NmcTGeA/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

从电感的角度来看，电感量也是成倍增加，磁链代表了总磁通量。对于共模电感，当磁通量是原来的2倍时，匝数没有发生变化，电流也没有发生变化，此时电感量增加为原来的2倍，意味着等效磁导率变为原来的2倍。

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCTpohBa6w8SwyGVzs2r1BjEzZ2ZEw6EvcdZoEsiajze2MdcFQa30euLoA/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCTdEv3fWiavKsbf845XfxpibSA11iaINOalMUMHk9yUTtS6MXfTsDhFHstQ/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

等效磁导率何以增加一倍，从下面的电感公式来看，由于匝数N不改变、磁路和磁芯截面积由磁芯的物理尺寸决定，因此也没有改变，唯一就是磁导率u增加了一倍，因而可以产生更多的磁通量。

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCTGhdQMJmgQdgK9tJ2SBI58EwFarKV952Az417liajjJq4zuUibL4fwU3w/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

所以，共模电感在共模电流通过时，工作在互感模式下。

在互感的作用下，等效电感量被成倍增加，共模感抗也会成倍增加，因而对共模信号有良好的滤波作用，也就是将共模信号用大阻抗阻挡，不让其通过共模电感，即不让此信号传输到电路的下一级，如下是电感产生的感抗ZL。

![](https://mmbiz.qpic.cn/mmbiz_png/GFk2abHRMHTxNzmcbT6TSArvOJJuKeCT7qHurib1UUc6gaIZgbf6hVLCtwDUxpW16HZA1VxqTB7hiahcX9grhPXg/640?wx_fmt=png&wx_co=1&wxfrom=5&wx_lazy=1)

_Z_L\= ω_L_ = 2π_fL_ ，_Z_L 就是感抗，单位为欧姆 ，ω 是交流发电机运转的角速度，单位为弧度/秒，_f_ 是频率，单位为赫兹 ，L 是线圈电感，单位为亨利。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你入技术交流群。