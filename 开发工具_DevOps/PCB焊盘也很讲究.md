# PCB焊盘也很讲究

原创 硬件笔记本 2024-07-16 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/NCoWOG1Uc3P5Kci0WGUxBw](https://mp.weixin.qq.com/s/NCoWOG1Uc3P5Kci0WGUxBw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

在PCB设计中，焊盘是一个非常重要的概念，PCB工程师对它一定不陌生。不过，虽然熟悉，很多工程师对焊盘的知识却是一知半解。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMwZluNfpOic8qotIEyf6nRX3cibMYogsA2Id89XYVA8Qcza3Hf8SpGSdQ/640?wx_fmt=png&from=appmsg)

今天带大家来了解下焊盘的种类，以及在PCB设计中焊盘的设计标准。

焊盘，表面贴装装配的基本构成单元，用来构成电路板的焊盘图案(land pattern)，即各种为特殊元件类型设计的焊盘组合。

  

焊盘用于电气连接、器件固定或两者兼备的部分导电图形。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUM6bjjJh94rbT1Z63qBRRiakAjxe5Fjt1MkgqBnTmgf78yCfTrZnic9AkQ/640?wx_fmt=png&from=appmsg)

PCB焊盘的种类

一、常见焊盘

1、方形焊盘——印制板上元器件大而少、且印制导线简单时多采用。在手工自制PCB时，采用这种焊盘易于实现。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMV8icKZia2hfKHyyVTnGhibZCIYCNOQdu8EAsgKe3o8rb7WKtkI2GNOuhg/640?wx_fmt=png&from=appmsg)

  

2、圆形焊盘——广泛用于元件规则排列的单、双面印制板中。若板的密度允许，焊盘可大些，焊接时不至于脱落。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMjKiaCasYeTjTsuTySNutrPSok91hwDrTRKM6Qglzcvtpt5tRm5BPMFQ/640?wx_fmt=png&from=appmsg)

  

3、岛形焊盘——焊盘与焊盘间的连线合为一体。常用于立式不规则排列安装中。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMlSHDBSbSh08Je0mvKJUfcRVRiavsiauoPX9uiaib9p3PPqpfSrrQBSG0FQ/640?wx_fmt=png&from=appmsg)

  

4、多边形焊盘——用于区别外径接近而孔径不同的焊盘，便于加工和装配。

5、椭圆形焊盘——这种焊盘有足够的面积增强抗剥能力，常用于双列直插式器件。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMTdNm3SOYO5wVvWpOGD0RTXxSUa6dKpEDGaeQicfTvCg3TvwnySazJtA/640?wx_fmt=png&from=appmsg)

  

6、开口形焊盘——为了保证在波峰焊后，使手工补焊的焊盘孔不被焊锡封死时常用。

二、特殊焊盘

1、梅花焊盘

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMwv1rOZicsX4OKhD6YXCFyE1IB986UYSjOUcgjDeOtgnx8tzibPna03eQ/640?wx_fmt=png&from=appmsg)

梅花焊盘通常用在大的过孔接地的位置，这样设计有以下几点原因：

1）固定孔需要金属化和GND相连， 如果该固定孔是全金属化的，在回流焊的时候容易将该孔堵住。

2）采用内部的金属螺孔可能由于安装或多次拆装等原因，造成该接地处于不良的状态。而采用梅花孔焊盘，不管应力如何变化，均能保证良好的接地。

2、十字花焊盘

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMhpnVwYG2eJm137Ggwbwel6Hs2GLo7bqjTicsgC40ajyDUTiajBGibULxQ/640?wx_fmt=png&from=appmsg)

十字花焊盘又称热焊盘、热风焊盘等。其作用是减少焊盘在焊接中向外散热，以防止因过度散热而导致的虚焊或PCB起皮。

1）当你的焊盘是地线时候。十字花可以减少连接地线面积，减慢散热速度，方便焊接。

2）当你的PCB是需要机器贴片，并且是回流焊机，十字花焊盘可以防止PCB起皮（因为需要更多热量来融化锡膏）。

3、泪滴焊盘

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMboAaafPhUyQsMBIiaSic0XqT1grysR71246uOBFW0yF4OVzicNuTIqXVg/640?wx_fmt=png&from=appmsg)

当焊盘连接的走线较细时常采用，以防焊盘起皮、走线与焊盘断开。这种焊盘常用在高频电路中。

PCB设计中焊盘的设计标准

一、PCB焊盘的形状和尺寸设计标准：

1、调用PCB标准封装库。

2、有焊盘单边最小不小于0.25mm，整个焊盘直径最大不大于元件孔径的3倍。

3、尽量保证两个焊盘边缘的间距大于0.4mm。

4、孔径超过1.2mm或焊盘直径超过3.0mm的焊盘应设计为菱形或梅花形焊盘。

5、布线较密的情况下，推荐采用椭圆形与长圆形连接盘。单面板焊盘的直径或最小宽度为1.6mm;双面板的弱电线路焊盘只需孔直径加0.5mm即可，焊盘过大容易引起无必要的连焊。

二、PCB焊盘过孔大小标准：

焊盘的内孔一般不小于0.6mm，因为小于0.6mm的孔开模冲孔时不易加工，通常情况下以金属引脚直径值加上0.2mm作为焊盘内孔直径，如电阻的金属引脚直径为0.5mm时，其焊盘内孔直径对应为0.7mm，焊盘直径取决于内孔直径。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMOJPbR0ibzqJ13oJgm53ic11LhbeKFLhslMtafR2THcYeiaibPDP0k3T8ZQ/640?wx_fmt=png&from=appmsg)

  

三、PCB焊盘的可靠性设计要点：

1、对称性，为保证熔融焊锡表面张力平衡，两端焊盘必须对称。

2、焊盘间距，焊盘的间距过大或过小都会引起焊接缺陷，因此要确保元件端头或引脚与焊盘的间距适当。

3、焊盘剩余尺寸，元件端头或引脚与焊盘搭接后的剩余尺寸必须保证焊点能够形成弯月面。

4、焊盘宽度，应与元件端头或引脚的宽度基本一致。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。