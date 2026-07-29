# nmos导通流向\_MOS管

原创 电路一点通 2025-04-12 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/53FqyfTcQ\_\_gGCXKtp3Z2Q](https://mp.weixin.qq.com/s/53FqyfTcQ__gGCXKtp3Z2Q)

MOS管Ｐ管。通常S接电源。G控制信号，D接负载。当G等于S时。S和D不导通当G小于一定S D和S导通。  

N管S接地，G接控制，D接电流节点

-   [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    
      
    

1\. MOS管开关电路

学习过模拟电路的人都知道三极管是流控流器件，也就是由基极电流控制集电极与发射极之间的电流；而MOS管是压控流器件，也就是由栅极上所加的电压控制漏极与源极之间电流。

MOSFET管是FET的一种，可以被制造为增强型或者耗尽型，P沟道或N沟道共四种类型，但实际应用的只有增强型的N沟道MOS管和增强型的P沟道MOS管。实际应用中，NMOS居多。

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_001_f966402c98bc.png)

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_002_fec5fe439d27.png)

 MOS管导通特性

导通的意思是作为开关，相当于开关闭合。

NMOS的特性：Vgs大于某一值管子就会导通，适合用于源极接地时的情况（低端驱动），只要栅极电压达到4V就可以了。

PMOS的特性：Vgs小于某一值管子就会导通，适合用于源极接VCC时的情况（高端驱动）。

下图是MOS管开关电路，输入电压是Ui，输出电压是Uo。

当Ui较小时，MOS管是截止的， Uo＝Uoh＝Vdd；

当Ui较大时，MOS管是导通的， Uo =Ron/(Ron+Rd)\*Vdd，由于Ron<<Rd，所以输出为低电平，即Uo＝0

￼![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_003_8e3475d7faa6.png)

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_004_304938137422.png)

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_005_0a7a219f4140.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_006_2b6c9a114ed1.png)

￼![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_007_b6305f9e2b57.png)

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_008_0d9fc90bd1b5.png)

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_009_39dc32fd9ee0.png)

MOS管防反接电路

电源反接，会给电路造成损坏，不过，电源反接是不可避免的。所以，我么就需要给电路中加入保护电路，达到即使接反电源，也不会损坏的目的。

一般可以使用在电源的正极串入一个二极管解决，不过，由于二极管有压降，会给电路造成不必要的损耗，尤其是电池供电场合，本来电池电压就3.7V，你就用二极管降了0.6V，使得电池使用时间大减。

MOS管防反接，好处就是压降小，小到几乎可以忽略不计。现在的MOS管可以做到几个毫欧的内阻，假设是6.5毫欧，通过的电流为1A（这个电流已经很大了），在他上面的压降只有6.5毫伏。

由于MOS管越来越便宜，所以人们逐渐开始使用MOS管防电源反接了。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_010_683bc096a28e.png)

正确连接时：刚上电，MOS管的寄生二极管导通，所以S的电位大概就是0.6V，而G极的电位，是VBAT，VBAT-0.6V大于UGS的阀值开启电压，MOS管的DS就会导通，由于内阻很小，所以就把寄生二极管短路了，压降几乎为0。

电源接反时：UGS=0，MOS管不会导通，和负载的回路就是断的，从而保证电路安全。

PMOS管防止电源反接电路：￼

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_011_ee369bc45e9e.png)

正确连接时：刚上电，MOS管的寄生二极管导通，电源与负载形成回路，所以S极电位就是VBAT-0.6V，而G极电位是0V，PMOS管导通，从D流向S的电流把二极管短路。

电源接反时：G极是高电平，PMOS管不导通。保护电路安全。

连接技巧

NMOS管DS串到负极，PMOS管DS串到正极，让寄生二极管方向朝向正确连接的电流方向。

感觉DS流向是“反”的？

防反接电路中，DS的电流流向，和我们平时使用的电流方向是反的。

为什么要接成反的？

利用寄生二极管的导通作用，在刚上电时，使得UGS满足阀值要求。

为什么可以接成反的？

如果是三极管，NPN的电流方向只能是C到E，PNP的电流方向只能是E到C。不过，MOS管的D和S是可以互换的。这也是三极管和MOS管的区别之一。

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\nmos导通流向_MOS管_images\img_012_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**