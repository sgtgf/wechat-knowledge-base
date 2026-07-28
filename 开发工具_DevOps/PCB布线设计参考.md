# PCB布线设计参考

原创 硬件笔记本 2022-12-10 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/uveGAImpX\_ldsDCDLYyMJw](https://mp.weixin.qq.com/s/uveGAImpX_ldsDCDLYyMJw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**PCB常见布线规则**

  

（1） PCB板上预划分数字、模拟、DAA信号布线区域。

（2）数字、模拟元器件及相应走线尽量分开并放置于各自的布线区域内。

（3） 高速数字信号走线尽量短。

（4） 敏感模拟信号走线尽量短。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgLNZRqURGVclReMcIjKArMLWXYfORhJTgvh6WtTgOibtIWj3zMSydUkKOlF3yWQma5lcENtbWMHwQ/640?wx_fmt=png)

（5）合理分配电源和地。

（6） DGND、AGND、实地分开。

**（7） 电源及临界信号走线使用宽线。**

（8）电源线与地线应尽可能呈放射状，以及信号线不能出现回环走线。

（9）数字电路放置于并行总线/串行DTE接口附近，DAA电路放置于电话线接口附近。

  

**（10）小的分立器件走线须对称**，间距比较密的SMT焊盘引线应从焊盘外部连接，不允许在焊盘中间直接连接。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgLNZRqURGVclReMcIjKArMyaKTXLHlF8Mm5MYOyhPxUwhDnicHejeJhE0BhibyAY6rhXjXT9DYN7Tw/640?wx_fmt=png)

  

**（11）关键信号线优先**：电源、摸拟小信号、高速信号、时钟信号和同步信号等关键信号优先。

  

**（12）布线密度优先原则**：从单板上连接关系最复杂的器件着手布线。从单板上连线最密集的区域开始布线。

  

（13）PCB设计中应避免产生锐角和直角，产生不必要的辐射，同时PCB生产工艺性能也不好。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgLNZRqURGVclReMcIjKArM73rSwicAsqLSVOKicD6I3VKCZOLpMx3MJucDTia0GpicnL1UicBhd55CKJw/640?wx_fmt=png)

  

（14）贴片焊盘上不能有通孔，以免焊膏流失造成元件虚焊。重要信号线不准从pin脚间穿过。

**PCB高频电路布线**

  

**（1）合理选择PCB层数。**用中间的电源层(vcc layer)和地层(Gnd layer)可以起到屏蔽作用，有效降低寄生电感和寄生电容，也可大大缩短布线的长度，减少信号间的交叉干扰。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgLNZRqURGVclReMcIjKArMSSWM6lGxd5V2XghItRWgmj5w73rJfMiaWGNecCJegksPdPic3cLBMsxQ/640?wx_fmt=png)

  

（2）走线方式：**必须按照45°的拐角方式，不要用90°的拐角。**如下图：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgLNZRqURGVclReMcIjKArMb3kicIDZiaHmFK919BSan6wvTjsFj2Uj1NmIVzxZ8amxateNm8odVASw/640?wx_fmt=png)

  

（3）层间布线方向：应该**互相垂直**，顶层是水平方向，则底层为垂直方向，可以减少信号间的干扰。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgLNZRqURGVclReMcIjKArMSv1vo1Gtj8bHMFxovZL6W7IU3BEFTYwsUatW6z5YzuPVewLlqiaNsEA/640?wx_fmt=png)

  

  

（4）包地：**对重要的信号进行包地处理**，可以显著提高该信号的抗干扰能力，也可以多干扰信号进行包地，使其不能干扰其他信号。

![](https://mmbiz.qpic.cn/mmbiz_png/IF5wVJ4eUo0ialCcnVfOMKMWUDKUcgGkecZH6Uibn429TYeiaPcYX29FiaEJkpd3ibuVUtkl3mczMNPd1PGkCSo5QOA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

（5）**加解耦电容**（去耦电容）：在IC的电源端加解耦电容。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/IF5wVJ4eUo0ialCcnVfOMKMWUDKUcgGkewssJhxicpiaVgk9Pcc8Q8L14groibbibOrxDSutEe5cS3wNZOH3kMhOIYg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**（6）高频扼流**：当有数字地和模拟地等公共接地时，要在它们之间加**高频扼流器件**，一般可以用中心孔穿有导线的高频铁氧体磁珠。

![](https://mmbiz.qpic.cn/mmbiz_png/IF5wVJ4eUo0ialCcnVfOMKMWUDKUcgGkerDOoomDs2NS6eicXof6DBUu78gyVb4yPhiaMQfNp0mAQdibmiaM4dtIbJg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**（7）铺铜**：增加接地的面积也可减小信号的干扰。（在铺铜过程中需要去除死铜）

  

![](https://mmbiz.qpic.cn/mmbiz_png/IF5wVJ4eUo0ialCcnVfOMKMWUDKUcgGkeyRs5q9eJnYolsvy01M38icY3UodBzFMXExIplGxDoTQtEwjlgJFicIkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

（8）走线长度：**走线长度越短越好，这样的话，受到的干扰就会减少。**当然不是所有走线只追求短，比如DDR走线，讲究的是时钟、地址、数据走线之间的等长，所以会看到很多特意为了增加长度的蛇形走线。

  

**特殊元器件的布线**

  

（1）高频元件：**高频元件之间的连线越短越好**，设法减小连线的分布参数和相互之间的电干扰，容易干扰的元器件不能距离太近。

![](https://mmbiz.qpic.cn/mmbiz_png/IF5wVJ4eUo0ialCcnVfOMKMWUDKUcgGkehR8yUvoGaSWGkRsCEpzcBk2VHxcyjOzCjvXsVdvGTSQ4v8YoQNN7Vg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

（2）具有高电位差的元件：应加大具有高电位差元器件和连线之间的距离，以免出现意外短路损坏元器件。为避免爬电现象的发生，一般要求2000V电位差之间的铜箔线距离应大于2mm。

  

（3）重量大的元件：重量过重的元器件应该有支架固定。

  

（4）发热与热敏元件：注意发热元件应远离热敏元件。高热器件要均衡分布。

  

**PCB布线设计的重要参数**

  

（1）铜走线(Track)线宽：**单面板0.3mm，双面板0.2mm；**

（2）铜箔线之间最小间隙：单面板0.3mm，双面板0.2mm；

（3）**铜箔线距PCB板边缘最小1mm，元件距PCB板边缘最小5mm，焊盘距PCB板边缘最小4mm；**

（4）一般通孔安装元件的焊盘直径是焊盘内径直径的2倍。

（5）电解电容不可靠近发热元件，例如大功率电阻、变压器、大功率三极管、三端稳压电源和散热片等。**电解电容与这些元件的距离不小于10mm。**

（6）螺丝孔半径外5mm内不能有铜箔线(除接地外)及元件。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/IF5wVJ4eUo0ialCcnVfOMKMWUDKUcgGkeDkLvMcjPTfJdic3zZG70YuZtrZjHToaT2ol5AHcicibsRYSwibYOAcKICw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

（7）在大面积的PCB设计中(超过500㎡以上)，为防止过锡炉时PCB弯曲，应在PCB中间留一条5mm至10mm宽的空隙不放置元件，以用来放置防止PCB弯曲的压条。

（8）每一块PCB应用空心的箭头标出过锡炉的方向。

（9）布线时，DIP封装的IC摆放方向应与过锡炉的方向垂直，尽量不要平行，以避免连锡短路。

（10）布线方向由垂直转入水平时，应该从45°方向进入。

**（11）电源线宽不应低于18mil；信号线宽不应低于12mil；cpu入出线不应低于10mil(或8mil)；线间距不低于10mil。**

（12）板面布线应疏密得当，当疏密差别太大时应以网状铜箔填充，网格大于8mil(或0.2mm)。

（13）画定布线区域距PCB板边≤1mm的区域内，以及安装孔周围1mm内，禁止布线。

（14）PCB上有保险丝、保险电阻、交流220V的滤波电容、变压器等元件的附近应在丝印层印上警告标记。

**（15）交流220V电源部分的火线和零线间距应不小于3mm。**220V电路中的任何一根线与低压元件和pad、Track之间的距离应不小于6mm，并丝印上高压标记，弱电和强电之间应该用粗的丝网线分开，以警告维修人员小心操作。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。