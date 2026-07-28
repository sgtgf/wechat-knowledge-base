# ESD保护原理及选型

原创 硬件笔记本 2023-05-26 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/J7YJPOt40YowJK8CeLsrhw](https://mp.weixin.qq.com/s/J7YJPOt40YowJK8CeLsrhw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

通常情况ESD保护电路如下  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutl38Zy575JRibiarypRaicyrbU0h2fpuNPVnuUJLDshS5PI0lk8BVUeIZQ/640?wx_fmt=png)

当系统没有干扰，正常工作时，ESD器件可以忽略，几乎不起作用

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEuts2x8jVpe2VsJebagoVicZj5ctX0ssibCDiarE3CVqGxHhYVbPrB4iayA1Q/640?wx_fmt=png)

当外部接口电压超过ESD器件的击穿电压（VBR）,ESD器件开始起作用，并将电流分流到地。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEut1TtMapB8FyWkiap3gnwVZHZMjENZwTLkpsiblmn8bTJF2slU3RfIPwnw/640?wx_fmt=png)

实际ESD器件的工作电压（VRWM）与击穿电压（VBR）的区别，选择ESD器件应该选择系统工作电压小于ESD器件的工作电压（VRWM），

  

例如系统是0~5V，那么我们应该选择工作电压（VRWM）大于5V的TVS。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutr8ia3mQPDYgLf4xDMRBo0ZP1yoDNBd7Ekfd2AbUMG6yV8r1yG51p3Ww/640?wx_fmt=png)

单向ESD器件和双向ESD器件，双向ESD器件可以通过正负击穿电压（VBR）的信号，而单向ESD器件只可以通过正击穿电压（VBR）的信号，如果通过负的就会造成ESD器件击穿。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutJdtVUVibkicC6oLxJI8PlgnltumRxECfic7k5zHZOjdaficDuJAeaDWLXw/640?wx_fmt=png)

双向ESD器件和单向ESD器件的特点，单向ESD器件对于负压的保护更好。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutibGe2YLicziaSRsbSic7JQxMUgng2y3h2TtWp86VVficRpJx9BVCXp7q7ZA/640?wx_fmt=png)

几种ESD模型及其放电曲线。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEut84SozfzBZqXIyP1OKpqficagwGUsVlEMaH2AcMgKcXzscib7XP6TCYSw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutdludXicmOZufaLy7HIIIKb2n0ibiaSpkA1seSia9fISiaeOVZgmv0Wr6Fxw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEut7U7K9gXL1ZAZSrOujiaSOlz5bI0dodGUE77X9K9seqo4LRX7uss1SrA/640?wx_fmt=png)

IEC 61000-4-2等级为日常接触等级，正常分为四级  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutCt3vrmmbgyh8QMcA2pfo3pGjf8K3uvzmHw0U1k3HQiaUaFwont9RPFw/640?wx_fmt=png)

但是ESD器件符合IEC 61000-4-2时，只代表ESD器件本身的防护，不代表后级电路能承受相应的冲击。钳位电压是衡量ESD器件保护电路系统的能力。钳位电压即当外部受到冲击，后级电路通过ESD器件后受到的冲击。如图红色为冲击，蓝色为冲击过ESD器件后的钳位电压。我们可以根据自己系统需求选择钳位电压。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutHblP0RyyZOiaseC91ykib5Cs9tpc2DuUH1MU2dZKOiaPX0HaXb5rtvBaA/640?wx_fmt=png)

实际应用中，ESD器件是有寄生电容的，如图是寄生电容对高速电路接口的影响，寄生电容会影响电平的上升和下降速度，例如USB3.0、HDMI等等。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEut7yfYAWDWDPNX1MggeA0BZAe68cpWWs8piadnhBPDfQhk7cicXibPJ3j8w/640?wx_fmt=png)

在ESD器件选型时寄生电容可以根据应用接口选择，如下图  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEutLwSvOzBMN1qQSeCtjy6Dd87axGepbks7gBUzGb0wsaBV9bYmHUnwzQ/640?wx_fmt=png)

**ESD器件选型步骤**

  

1.计算接口信号幅值的范围来确定ESD器件的工作电压；

  

2.根据信号类型决定使用单向或者双向ESD器件;

  

3.根据信号速率决定该接口能承受的最大寄生电容；

  

4.根据电路系统的最大承受电压冲击，选择适合的钳位电压；

  

5.确保ESD器件可达到或超过IEC 61000-4-2 level4。

  

例如USB2.0接口保护电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEut4Y39joBFvUrBtOpyP5buhleFAwD9EBZYtpzc89z8nGj5oAgQ96bsCw/640?wx_fmt=png)

版权声明：本文为CSDN博主「逃跑de木偶」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。原文链接：https://blog.csdn.net/qq\_21513281/article/details/80282201

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。