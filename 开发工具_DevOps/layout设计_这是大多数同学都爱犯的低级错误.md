# layout设计，这是大多数同学都爱犯的低级错误

原创 硬件笔记本 2024-08-11 11:26 四川

> 原文地址: [https://mp.weixin.qq.com/s/vnKnjqba1Nxr-pEfLImjZA](https://mp.weixin.qq.com/s/vnKnjqba1Nxr-pEfLImjZA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

下面罗列出在 PCB 设计中最常见到的五个设计问题以及相应的对策。

# 

_**01**_ 

  

  

**管脚错误**

串联线性稳压电源比起开关电源更加便宜，但电能转效率低。通常情况下，鉴于容易使用和物美价廉，很多工程师选择使用线性稳压电源。

但需要注意，虽然使用起来很方便，但它会消耗大量的电能，造成大量热量扩散。与此形成对比的是开关电源设计复杂，但效率更高。

然而需要大家注意的是，一些稳压电源的输出管脚可能相互不兼容，所以在布线之前需要确认芯片手册中相关的管脚定义。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_002_0e700295bbdd.png)

▲ 图1.1 一种特殊管脚排列的线性稳压电源

# 

  

_**02**_ 

  

  

**布线错误**

设计与布线之间的比较差异是造成 PCB 设计最后阶段的主要错误。所以需要对一些事情进行重复检查。

比如器件尺寸，过孔质量，焊盘尺寸以及复查级别等。总之需要对照设计原理图进行重复确认检查。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_003_062e8d290c73.png)

▲ 图2.1 线路检查

# 

  

_**03**_ 

  

  

**腐蚀陷阱**

当 PCB 引线之间的夹角过小（呈现锐角）的时候就可能形成腐蚀陷阱（Acid Trap）。

这些锐角连线在电路板腐蚀阶段可能残存腐蚀液从而将该处的敷铜更多的去除，从而形成卡点或者陷阱。

后期可能造成引线断裂，形成线路开路。现代制作工艺由于使用了光感腐蚀溶液之后，这种腐蚀陷阱现象大大减少了。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_004_f9966e8dca22.png)

▲ 图3.1 连接角度呈现锐角的连线

# 

  

_**04**_ 

  

  

**立碑器件**

在利用回流工艺焊接一些小型表贴器件的时候，器件会在焊锡的浸润下形成单端翘起现象，俗称“**立碑**”。

这种现象通常会由不对称的布线模式造成，使得器件焊盘上热量扩散不均匀 。使用正确的 **DFM** 检查可以有效缓解立碑现象的产生。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_005_721d667f18e5.png)

▲ 图4.1 电路板回流焊接中的立碑现象

# 

  

_**05**_ 

  

  

**引线宽度**

当 PCB 引线的电流超过 500mA 的时候，PCB 最先线径就会显得容量不足。通常的厚度和宽度，PCB表面的导线比起多层电路板内部导线通过更多的电流，这是因为表面引线可以通过空气流动进行热量扩散。

线路宽度也与所在层的铜箔厚度有关系。大多数 PCB 生产厂家允许你选择 0.5 oz/sq.ft 到 2.5 oz/sq.ft 不同厚度的铜箔。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_006_b0e396ec0778.png)

▲ 图5.1 PCB 引线宽度

**下面的一些稍不留神就会犯的错误：**  

  

  

1、有极性的电容，原理图和PCB把管脚搞反了？

  

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_007_7f345d5b74cd.jpg)

  

  

2、电源和地忘记接了。。。。还有接反的。。。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_008_397e365df952.jpg)

  

  

3、连接器的线序搞反了

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_009_a6c8b9819429.jpg)

  

  

4、RX、TX接反了。。。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_010_62874578b743.jpg)

  

  

5、想当然的写一个封装，结果没有这个规格的器件。百度文库下载datasheet，结果根本买不到这个器件。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_011_7011a17c20e3.png)

  

  

6、直接抄电路，结果器件根本买不着。

  

曾经一个做智能锁的团队，电路直接抄三星的智能锁，结果里面一个电容式触摸按键的控制器，是韩国产的很难买到，而且没有什么代理和支持。纯靠自己试验和摸索。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_012_9b147ca8a836.jpg)

  

  

7、选择电容的时候，只考虑容量，没有考虑耐压，结果这么大的封装放不下满足规格电容。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_013_5e282b52aa51.jpg)

  

  

8、选择电阻的时候，只看阻值，不看功耗。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_014_bb11cc0095cc.jpg)

  

  

9、画完PCB，不看DRC报告，靠眼睛看飞线，回板后就真的飞线了。

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_015_000562504f96.jpg)

  

  

10、封装做反了。。。

  

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_016_5c39b3a777e3.jpg)

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_017_c82748de828a.jpg)

  

  

11、散热焊盘的阻焊层没有处理

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_018_ee45a7d57cb8.jpg)

![](layout设计_这是大多数同学都爱犯的低级错误_images/img_019_8f8c22b4fa63.jpg)![](layout设计_这是大多数同学都爱犯的低级错误_images/img_020_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。