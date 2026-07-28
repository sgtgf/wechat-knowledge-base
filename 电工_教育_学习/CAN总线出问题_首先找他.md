# CAN总线出问题？首先找他

原创 硬件笔记本 2022-10-26 07:29 四川

> 原文地址: [https://mp.weixin.qq.com/s/2xqgGTtVUuO4xHztVcJXuA](https://mp.weixin.qq.com/s/2xqgGTtVUuO4xHztVcJXuA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

CAN总线终端一般都会并一颗120Ω的终端电阻，可别小看它，实力不容小觑，一旦出现问题，首先检查它。今天咱们就深入分析一下这颗电阻的作用及选型。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeYEA05T7Nbs8HFC4zDZRDRL2WvrlteGZRaaoBD6EItibZbQJfKN6cHJA/640?wx_fmt=png)  

之前就知道阻抗匹配，但是究竟匹配的是什么呢？日常工作中为什么会有波形不稳定的问题？下面这些知识点可能会帮到你。

  

**终端电阻的作用**

CAN总线终端电阻的作用有3个：

1、提高抗干扰能力，让高频低能量的信号迅速走掉

2、确保总线快速进入隐性状态，让寄生电容的能量更快走掉；

3、提高信号质量，放置在总线的两端，让反射能量降低。

  

下面仔细说说:

**一、提高抗干扰能力**

CAN总线有“显性”和“隐性”两种状态，“显性”代表“0”，“隐性”代表“1”，由CAN收发器决定。下图是一个CAN收发器的典型内部结构图，CANH、CANL连接总线。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTe24EibJTrTGRZP4ARhbozcsVD6JrASq6BRrfWCRRSovY3XhVqLKgnJNQ/640?wx_fmt=png)

总线显性时，收发器内部Q1、Q2导通，CANH、CANL之间产生压差；隐性时，Q1、Q2截止，CANH、CANL处于无源状态，压差为0。

总线若无负载，隐性时差分电阻阻值很大，内部的MOS管属于高阻态，外部的干扰只需要极小的能量即可令总线进入显性（一般的收发器显性门限最小电压仅500mV）。这个时候如果有差模干扰过来，总线上就会有明显的波动，而这些波动没有地方能够吸收掉他们，就会在总线上创造一个显性位出来。所以为提升总线隐性时的抗干扰能力，可以增加一个差分负载电阻，且阻值尽可能小，以杜绝大部分噪声能量的影响。然而，为了避免需要过大的电流总线才能进入显性，阻值也不能过小。

  

**二、确保快速进入隐性状态**

在显性状态期间，总线的寄生电容会被充电，而在恢复到隐性状态时，这些电容需要放电。如果CANH、CANL之间没有放置任何阻性负载，电容只能通过收发器内部的差分电阻放电，这个阻抗是比较大的，按照RC滤波电路的特性，放电时间就会明显比较长。我们在收发器的CANH、CANL之间加入一个220PF的电容进行模拟试验，位速率为500kbit/s，波形如图，这个波形的下降沿就是比较长的状态。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTe0KzXQgfjGhtzdofcNiaRQ8PiaqlJiaqYicUAfLkibl0BBd3asp4hTmlx9ug/640?wx_fmt=png)

为了让总线寄生电容快速放电，确保总线快速进入隐性状态，需要在CANH、CANL之间放置一个负载电阻。增加一个60Ω的电阻后，波形如图，从图中看出，显性恢复到隐性的时间缩减到128nS，与显性建立时间相当。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeed2nyRxMibI8bCPRibsOOYj1B9BWXdaxt0YUiaZord2hhzKMxXVFUjZVg/640?wx_fmt=png)

**三、提高信号质量**

信号在较高的转换速率情况下，信号边沿能量遇到阻抗不匹配时，会产生信号反射；传输线缆横截面的几何结构发生变化，线缆的特征阻抗会随之变化，也会造成反射。

能量发生反射时，导致反射的波形与原来的波形进行叠加，就会产生振铃。

在总线线缆的末端，阻抗急剧变化导致信号边沿能量反射，总线信号上会产生振铃，若振铃幅度过大，就会影响通信质量。在线缆末端增加一个与线缆特征阻抗一致的终端电阻，可以将这部分能量吸收，避免振铃的产生。

别人进行了一个模拟试验，位速率为1Mbit/s，收发器CANH、CANL接一根10m左右的双绞线，收发器端接120Ω电阻保证隐性转换时间，末端不加负载。末端信号波形如图所示，信号上升沿出现了振铃。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeDHROzUm2y9QgLbZZickDLjxnOS5NKM2lOjN7AQt4u4WWHHCvooA0rVA/640?wx_fmt=png)

若双绞线末端增加一个120Ω的电阻，末端信号波形明显改善，振铃消失。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTe3L6RwVckZUriaqqHOshog2hPzEEBgiaQjMOjccAEnsaiawaIJK2wEOMrg/640?wx_fmt=png)

一般在直线型拓扑中，线缆两端即是发送端，也是接收端，故线缆两端需各加一个终端电阻。

而在实际应用过程中，CAN总线一般都不是完美的总线式的设计，很多时候是总线型和星型的混合结构，这个时候一般都将CAN终端电阻布置在线束最远的两端，来尽量的模拟CAN总线的标准结构。

**为什么选120Ω？**

什么是阻抗？在电学中，常把对电路中电流所起的阻碍作用叫做阻抗。阻抗单位为欧姆，常用Z表示，是一个复数Z= R+i( ωL–1/（ωC）)。具体说来阻抗可分为两个部分，电阻（实部）和电抗（虚部）。其中电抗又包括容抗和感抗，由电容引起的电流阻碍称为容抗，由电感引起的电流阻碍称为感抗。这里的阻抗是指Z的模。

任何一根线缆的特征阻抗都可以通过实验的方式得出。线缆的一端接方波发生器，另一端接一个可调电阻，并通过示波器观察电阻上的波形。调整电阻阻值的大小，直到电阻上的信号是一个良好的无振铃的方波:[阻抗匹配与信号完整性](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247493406&idx=2&sn=9d5a2488b4fa59692481c310fbf09714&chksm=fadb99e0cdac10f683c00d6378964c9863d5e6307805bfa7c425248e87ba1526a3ae253705ee&scene=21#wechat_redirect)，此时的电阻值可以认为与线缆的特征阻抗一致。

采用两根汽车使用的典型线缆，将它们扭制成双绞线，就可根据上述方法得到特征阻抗大约为120Ω，这也是CAN标准推荐的终端电阻阻值，所以这个120Ω是测出来的，不是算出来的，都是根据实际的线束特性进行计算得到的。当然在ISO 11898-2这个标准里面也是有定义的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTea917ibvWf85A4M15q5Iw9LKFjTTPLibiat2tIfIl7ehPMIibdfEpWoMAEw/640?wx_fmt=png)

**为什么功率还要选0.25W？**

这个就要结合一些故障状态也计算，汽车ECU的所有接口都需要考虑短路到电源和短路到地的情况，所以我们也需要考虑CAN总线的节点短路到电源的情况，根据标准需要考虑短路到18V的情况，假设CANH短路到18V，电流会通过终端电阻流到CANL上，而CANL内部由于限流的原因，最大注入电流为50mA（TJA1145的规格书上标注），这时候120Ω电阻的功率就是50mA\*50mA\*120Ω=0.3W。考虑到高温情况下的降额，终端电阻的功率就是0.5W。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。