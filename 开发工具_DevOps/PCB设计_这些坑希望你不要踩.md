# PCB设计，这些坑希望你不要踩

原创 硬件笔记本 2022-11-23 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/gXLm9XAYiKAYtBef7x8Djw](https://mp.weixin.qq.com/s/gXLm9XAYiKAYtBef7x8Djw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**PCB 设计过程是由一系列工业设计步骤组成，是保证大批量电路板产品质量、减少故障排查的关键环节。**

**PCB 是工业电子产品设计的基础。无论是小批量制作还是大规模生产的消费电子，几乎所有的设计技术中都包含有 PCB 设计。**

**由于设计过程错综复杂，很多常见的错误会反复出现。下面罗列出在 PCB 设计中最常见到的五个设计问题以及相应的对策。**

  

  

01 管脚错误

串联线性稳压电源比起开关电源会更加便宜，但电能转效率低。通常情况下，鉴于容易使用和物美价廉，很多工程师选择使用线性稳压电源。

但需要注意，虽然使用起来很方便，但它会消耗大量的电能，造成大量热量扩散。与此形成对比的是开关电源设计复杂，但效率更高。

然而需要大家注意的是，一些稳压电源的输出管脚可能相互不兼容，所以在布线之前需要确认芯片手册中相关的管脚定义。

![](PCB设计_这些坑希望你不要踩_images/img_002_b23bfa800f7d.png)

▲ 图1.1 一种特殊管脚排列的线性稳压电源

  

# 

02 布线错误

设计与布线之间的比较差异是造成 PCB 设计最后阶段的主要错误。所以需要对一些事情进行重复检查，比如器件尺寸，过孔质量，焊盘尺寸以及复查级别等。总之需要对照设计原理图进行重复确认检查。

![](PCB设计_这些坑希望你不要踩_images/img_003_ede7e13f67b9.png)

▲ 图2.1 线路检查

  

# 

03 腐蚀陷阱

当 PCB 引线之间的夹角过小（既呈现锐角）的时候就可能形成腐蚀陷阱。这些锐角连线在电路板腐蚀阶段可能残存腐蚀液从而将该处的敷铜更多的去除，从而形成卡点或者陷阱。

后期可能造成引线断裂，形成线路开路。在现代制作工艺由于使用了光感腐蚀溶液之后，这种腐蚀陷阱现象大大减少了。

![](PCB设计_这些坑希望你不要踩_images/img_004_252ee15edba9.png)

▲ 图3.1 连接角度呈现锐角的连线

  

# 

04 立碑器件

在利用回流工艺焊接一些小型表贴器件的时候，器件会在焊锡的浸润下形成单端翘起现象，俗称“立碑”。

这种现象通常会由不对称的布线模式所造成的，使得器件焊盘上热量扩散不均匀 。使用正确的 DFM 检查可以有效缓解立碑现象的产生。

![](PCB设计_这些坑希望你不要踩_images/img_005_06742adf8a77.png)

▲ 图4.1 电路板回流焊接中的立碑现象

  

# 

05 引线宽度

当 PCB 引线的电流，超过 500mA 的时候，PCB最小线径就会显得容量不足。通常的厚度和宽度，PCB表面的导线比起多层电路板内部导线通过更多的电流，这是因为表面引线可以通过空气流动进行热量扩散。

线路宽度也与所在层的铜箔厚度有关系。大多数 PCB 生产厂家允许你选择 0.5 oz/sq.ft 到 2.5 oz/sq.ft 不同厚度的铜箔。

![](PCB设计_这些坑希望你不要踩_images/img_006_c3027e9539d2.png)

▲ 图5.1 PCB 引线宽度

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。