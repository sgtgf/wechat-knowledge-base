# 7种MOS管栅极驱动电路

原创 硬件笔记本 2023-04-26 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/XoXZ4oKincUCWvYzbVmTfw](https://mp.weixin.qq.com/s/XoXZ4oKincUCWvYzbVmTfw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

01

直接驱动

  

首先说一下电源IC直接驱动，下图是我们最常用的直接驱动方式，在这类方式中，我们由于驱动电路未做过多处理，因此我们进行PCB LAYOUT时要尽量进行优化。如缩短IC至MOSFET的栅极走线长度，增加走线宽度，尽量将Rg放置在离MOSFET栅极较进的位置，从而达到减少寄生电感，消除噪音的目的。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXEqzlYedLibBagNxVwqpx40TaibqSibDeViaYbA4fyiaBib4BkBvyzyVZ3zBV4SC12SYMQMCIFaFNCnA2XA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

当然另一个问题我们得考虑，那就是PWM CONTROLLER的驱动能力，当MOSFET较大时，IC驱动能力较小时，会出现驱动过慢，开关损耗过大甚至不能驱动的问题，这点我们在设计时需要注意。

  

  

02

IC内部驱动能力不足时

  

当然，对于IC内部驱动能力不足的问题我们也可以采用下面的方法来解决。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmfGz9dicyeCTMic8XVPIRyB3ic0xAgK7MyGsadbxJRGtQYKqhWiaEjd4EuUQRQLsXDyC13rscAvbv4PvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

这种增加驱动能力的方式不仅增加了导通时间，还可以加速关断时间，同时对控制毛刺及功率损耗由一定的效果。当然，这个我们在LAYOUT时要尽量将这两个管子放的离MOSFET栅极较近的位置。这样做的好处还有减少了寄生电感，提高了电路的抗干扰性。

  

  

03

增加MOSFET的关断速度

  

如果我们单单要增加MOSFET的关断速度，那么我们可以采用下面的方式来进行。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmfGz9dicyeCTMic8XVPIRyB3ichTyJsxbGUGsm6Mr2UgGRO329dxU8AwvKHhQ1QDo3FR5C4ZQXt7MO3g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

关断电流比较大时，能使MOSFET输入电容放电速度更快，从而降低关断损耗。大的放电电流可以通过选择低输出阻抗的MOSFET或N沟道的负的截止的电压器件来实现，最常用的就是加加速二极管。

  

栅极关断时，电流在电阻上产生的压降大于二极管导通压降时，这时二极管会导通，从而将电阻进行旁路，导通后，随着电流的减小，二极管在电路中的作用越来越小，该电路作用会显著的减小MOSFET关断的延迟时间。

  

当然这个电路有一定的缺点，那就是栅极的电流仍然需要留过IC内部的输出驱动阻抗，这有什么办法解决呢？

  

  

下面来讲讲PNP加速关断驱动电路。

  

04

PNP加速关断驱动电路

  

再来谈以下PNP加速关断电路：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXEqzlYedLibBagNxVwqpx40TlqKRcGasOOb07EOu0ibvXK4vkicomTpwdpdPYmrm7pr8uy8iajMiaxezrw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

PNP加速关断电路是目前应用最多的电路，在加速三级管的作用下可以实现瞬间的栅源短路，从而达到最短的放电时间。之所以加二极管，一方面是保护三级管基极；另一方面是为导通电流提供回路及偏置。

  

该电路的优点为可以近似达到推拉的效果加速效果明显；缺点为栅极由于经过两个PN节，不能是栅极真正的达到0伏。

  

  

05

当源极输出为高电压时的驱动

  

当源极输出为高电压的情况时，我们需要采用偏置电路达到电路工作的目的，既我们以源极为参考点，搭建偏置电路，驱动电压在两个电压之间波动，驱动电压偏差由低电压提供，如下图所示。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmfGz9dicyeCTMic8XVPIRyB3icVOvtOYBYl4pu61cjOOr5bSdabJhcUQc8BbrIp85WSSBz7A1kgc35zw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

当然，这个图有点问题，不知道有没有哪位大侠看出来？其实问题就是“驱动电源”需要悬浮，要以MOS的源极共“地（给大家加深印象）。

  

这个是正确的图纸，供各位参考：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmfGz9dicyeCTMic8XVPIRyB3icgPoFBcIhrc9Jr95UpTbZY3Q2JnqYPxwA9Ug4vb0cFHDUyOnKWyaTibQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

06

满足隔离要求的驱动

  

为了满足安全隔离的要求或者提供高端浮动栅极驱动经常会采用变压器驱动。这种驱动将驱动控制和MOSFET进行了隔离，可以应用到低压及高压电路中去，如下图所示：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmfGz9dicyeCTMic8XVPIRyB3ic7IqqZfy3h0hAfepHuniaibIWKcohMHBJqibqk1wicmic7DqJFAicmCvftnCw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

变压器驱动说白了就是隔离驱动，当然现在也有专门的驱动IC可以解决，但变压器驱动有自己的特点使得很多人一直在坚持用。

  

图中耦合电容的作用是为磁化的磁芯提供复位电压，如果没有这个电容，会出现磁饱和。

  

与电容串联的电阻的作用是为了防止占空比突然变化形成LC的震荡，因此加这个电阻进行缓解。

  

  

07

自举逆变图

  

下面上一个实际的自举逆变图，供参考：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmfGz9dicyeCTMic8XVPIRyB3ic8D0ukQZ5MGyWeAribH63PsyKRUs3YNBMlhFmvgpb71ENI06MnblcBvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。