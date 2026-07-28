# MOS管和IGBT区别，一看就懂

原创 硬件笔记本 2022-09-18 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/nYLg5cFGaRKvQtDYhA1hNQ](https://mp.weixin.qq.com/s/nYLg5cFGaRKvQtDYhA1hNQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")  

  

  

在电子电路中，MOS管和IGBT管会经常出现，它们都可以作为开关元件来使用，MOS管和IGBT管在外形及特性参数也比较相似。那为什么有些电路用MOS管，而有些电路用IGBT管？

  

下面我们就来了解一下，MOS管和IGBT管到底有什么区别吧！

  

  

**什么是MOS管**

  

场效应管主要有两种类型，分别是结型场效应管（JFET）和绝缘栅场效应管（MOS管）。

  

MOS管即MOSFET，中文全称是金属-氧化物半导体场效应晶体管，由于这种场效应管的栅极被绝缘层隔离，所以又叫绝缘栅场效应管。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJibzEMdl3bUiavfY0Icq4tKHcsmmSRTS0BX9rF1N6rfG9Yn7VpiaHqzGvA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "02.jpg")

  

MOSFET又可分为N沟耗尽型和增强型；P沟耗尽型和增强型四大类。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJWPGzibdUeUBQpJ53PoQiavN6OtrQ4SwOTiamCu2lJZMV0sO6Zfo1SPTFQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "03.jpg")

_MOSFET种类与电路符号_

  

有的MOSFET内部会有个二极管，这是体二极管，或者叫寄生二极管、续流二极管。

  

**关于寄生二极管的作用，有两种解释：**

-   MOSFET的寄生二极管，作用是防止VDD过压的情况下，烧坏MOS管，因为在过压对MOS管造成破坏之前，二极管先反向击穿，将大电流直接到地，从而避免MOS管被烧坏。
    
-   防止MOS管的源极和漏极反接时烧坏MOS管，也可以在电路有反向感生电压时，为反向感生电压提供通路，避免反向感生电压击穿MOS管。
    

  

MOSFET具有输入阻抗高、开关速度快、热稳定性好、电压控制电流等特性，在电路中，可以用作放大器、电子开关等用途。

  

  

**什么是IGBT**

  

IGBT (Insulated Gate Bipolar Transistor)，绝缘栅双极型晶体管，是由晶体三极管和MOS管组成的复合型半导体器件。

  

IGBT作为新型电子半导体器件，具有输入阻抗高，电压控制功耗低，控制电路简单，耐高压，承受电流大等特性，在各种电子电路中获得极广泛的应用。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJDxQXgtUrIApDndCt8o4mdC7b8UTaj6H4eutEUn8KwjE6w0DPDMGWXw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "002.jpg")

  

IGBT的电路符号至今并未统一，画原理图时一般是借用三极管、MOS管的符号，这时可以从原理图上标注的型号来判断是IGBT还是MOS管。

  

同时还要注意IGBT有没有体二极管，图上没有标出并不表示一定没有，除非官方资料有特别说明，否则这个二极管都是存在的。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJlevS0vibw7sPicianSWozOIfW7GumIDlc1hTbQMz9ZE4SJ4x4deePUsmA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "04.jpg")

  

IGBT内部的体二极管并非寄生的，而是为了保护IGBT脆弱的反向耐压而特别设置的，又称为FWD（续流二极管）。

  

判断IGBT内部是否有体二极管也并不困难，可以用万用表测量IGBT的C极和E极，如果IGBT是好的，C、E两极测得电阻值无穷大，则说明IGBT没有体二极管。

  

IGBT非常适合应用于如交流电机、变频器、开关电源、照明电路、牵引传动等领域。

  

  

**MOS管与IGBT的结构特点**

  

MOS管和IGBT管的内部结构如下图所示。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJia5vUR4H2q2e58DcZuibEdpPwd0cwyqKymSJeoaHW0ufVcUqXHrrkTmQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "01.jpg")

  

IGBT是通过在MOSFET的漏极上追加层而构成的。

  

IGBT的理想等效电路如下图所示，IGBT实际就是MOSFET和晶体管三极管的组合，MOSFET存在导通电阻高的缺点，但IGBT克服了这一缺点，在高压时IGBT仍具有较低的导通电阻。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJM6l3yn1ogb2eae2j2KKPbsz8WHmWeN93TkMLfISU41n4e51ricOPibJA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "02.jpg")

  

另外，相似功率容量的IGBT和MOSFET，IGBT的速度可能会慢于MOSFET，因为IGBT存在关断拖尾时间，由于IGBT关断拖尾时间长，死区时间也要加长，从而会影响开关频率。

  

  

**选择MOS管还是IGBT**

  

在电路中，选用MOS管作为功率开关管还是选择IGBT管，这是工程师常遇到的问题，如果从系统的电压、电流、切换功率等因素作为考虑，可以总结出以下几点：

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJNeqQhLw2UtzjJK0lxoA9kqNxSb1D11glb7Klq10NCF3rULZJCP1eicw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "03.jpg")

  

也可从下图看出两者使用的条件，阴影部分区域表示MOSFET和IGBT都可以选用，“？”表示当前工艺还无法达到的水平。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEfl0bjRtWJpCoe91pwbKWcJghaL2FJIWicxHFBuepSJJicT2lqfjdEm2z0ZicBpUbziaibGyw7eJkoicricw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1 "011.jpg")

  

总的来说，MOSFET优点是高频特性好，可以工作频率可以达到几百kHz、上MHz，缺点是导通电阻大在高压大电流场合功耗较大；而IGBT在低频及较大功率场合下表现卓越，其导通电阻小，耐压高。

  

MOSFET应用于开关电源、镇流器、高频感应加热、高频逆变焊机、通信电源等等高频电源领域；IGBT集中应用于焊机、逆变器、变频器、电镀电解电源、超音频感应加热等领域。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你入技术交流群。