# 设计多种PMOS防倒灌电路，防止电流逆向流动

原创 电路一点通 2025-06-08 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/z6e7ZKmoKSoSJOOH0MreOA](https://mp.weixin.qq.com/s/z6e7ZKmoKSoSJOOH0MreOA)

电流倒灌现象是指在电路中，由电源或负载的电压变化，导致电流从负载端向电源端流动的现象。  

这种现象通常发生在电源电压低于负载电压的情况下，会对电源或电路造成一定的损害。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\设计多种PMOS防倒灌电路_防止电流逆向流动_images\img_000_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

👆查看更多目录👆

  

**基本PMOS防倒灌电路**

控制信号G\_CTRL的作用，在这个电路中，控制信号G\_CTRL负责控制VB4.2+给VCC\_OUT供电。

当G\_CTRL为高电平时，PMOS管导通，允许电流从VB4.2+流向VCC\_OUT；当G\_CTRL为低电平时，PMOS管截止，阻止电流流动。

电阻R2和R3的作用,电阻R2用于限制栅极电流，防止过大的电流损坏PMOS管。

电阻R3则用于控制栅极的常态，当G\_CTRL为低电平时，R3将栅极上拉至高电平，使PMOS管保持截止状态。

![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lemj8EIVNVhdABngS3iaZEI9f7L9dUcUB7MgKPO2ibbHibicwOkrWqmvGIviah12SIH3V9MJqAFhAFXDqg/640?wx_fmt=png&from=appmsg "1733138708917267.png")

  

控制信号G\_CTRL控制VB4.2+给VCC\_OUT供电。

在这里，源漏极两端没有接反，电阻R2的作用是为了控制栅极电流时不会太大，R3控制栅极的常态。

将R3上拉为高时，Pmos截止。

这个电路也可以看成是对控制信号的上拉，当MCU内部的管脚没有上拉时，此时的输出为开漏，PMOS无法驱动关闭。

那么就需要外部电压的上拉了，这时R3就起到了两个作用

  

**带有稳压管的PMOS防倒灌电路**

  

稳压管的作用,在这个电路中，加入了一个稳压管，用于保护PMOS管免受过压损害。

当电源接反时，稳压管可以限制电压，防止PMOS管因过压而损坏。

防反接功能,除了防倒灌外，这个电路还具有防反接功能。当电源接反时，PMOS管不导通，后级电路断开，从而保护整个电路。

![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lemj8EIVNVhdABngS3iaZEI97uAbt8oPMrhDsX6UstRwOoyracdIuDx4AQPoL4AOaKTob4OPvUcZlA/640?wx_fmt=png&from=appmsg "1733138923271261.png")

  

**背靠背PMOS防倒灌电路**

  

两个PMOS管的连接方式,在这个电路中，连接了两个PMOS管进行背靠背防倒灌。

当控制端为高电平时，三极管Q5导通，Q3和Q4的栅极被拉低到0V，Q3通过体二极管导通，接着Q4导通，负载端得到Vin电压。

当控制端为低电平时，三极管Q9断开，Q3与Q4不导通，并且完全关断，由于Q3与Q4的体二极管是反向串联的，所以无论哪个方向都是不通的，实现了防倒灌。

  

![image.png](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lemj8EIVNVhdABngS3iaZEI9W8GSpeQcgf8lODkVvZVO2N2Paj3CA4Nvib4ZygQwA3cULl03xbyaDxA/640?wx_fmt=png&from=appmsg "1733139100995122.png")

当控制端为高电平时，三极管Q5导通，Q3和Q4的栅极被拉低到0V，Q3通过体二极管导通，接着Q4导通，负载端得到Vin电压。

当控制端为低电平，三极管Q5断开，Q3与Q4不导通，并且完全关断，由于3与Q4的体二极管是反向串联的，所以无论那个方向都是不通的，实现了防倒灌。

不过要注意，这个电路可能需要一个IO来控制。

  

**总结：**

电流倒灌现象是电路中一种潜在危害，可能由电源或负载电压变化引发，导致电流逆向流动。

为解决这一问题，设计了多种PMOS防倒灌电路。

基本PMOS防倒灌电路通过控制信号G\_CTRL控制电源供电，电阻R2和R3则分别用于限制栅极电流和确保PMOS管常态截止。

当G\_CTRL为低电平时，R3将栅极上拉至高电平，有效防止电流倒灌。

带有稳压管的PMOS防倒灌电路则进一步增强了电路的保护能力，稳压管能限制电压，防止PMOS管因过压损坏，该电路还具有防反接功能，确保电路安全。

背靠背PMOS防倒灌电路则采用了两个PMOS管背靠背连接方式，通过三极管控制栅极电压，实现电路的通断。

当控制端为低电平时，两个PMOS管完全关断，且由于体二极管反向串联，无论哪个方向电流都无法通过，达到防倒灌效果。这些电路在实际应用中具有重要价值。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\设计多种PMOS防倒灌电路_防止电流逆向流动_images\img_004_ae6a2099762b.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️