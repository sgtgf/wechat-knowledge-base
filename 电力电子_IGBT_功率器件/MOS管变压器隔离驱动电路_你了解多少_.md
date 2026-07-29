# MOS管变压器隔离驱动电路，你了解多少？

原创 电路一点通 2025-02-05 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/e5WzOs-e9WBN6YEz9zjmjA](https://mp.weixin.qq.com/s/e5WzOs-e9WBN6YEz9zjmjA)

小编就来讲一讲这个关于变压器隔离的MOS管驱动电路的原理。  

变压器隔离驱动电路主要是基于电磁感应定律和电绝缘隔离实现的。

具体来说就是当在变压器的原边绕组施加交流电压时，原边绕组中会产生交变电流，该电流会在铁芯中形成交变磁场。

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

根据电磁感应定律，交变磁场会在副边绕组中感应出电动势，从而实现了电压从原边到副边的传递，其电压关系满足V1/V2 = N1/N2。（其中V1、V2分别是原边和副边的电压幅值，N1、N2分别是原边和副边的绕组匝数）

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_001_82486ed56f4e.jpg)

下面我们来看变压器隔离驱动电路（如图）

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_002_341fea42d8af.jpg)

从IC（控制模块）发出一个PWM占空比信号，来控制变压器的一个初级线圈，从而产生自感，再互感到次级线圈。

当初级线圈的同名端为正，次级线圈的同名端为正。

这个时候变压器的次级线圈（上面）通过正极和R2来驱动mos管。因为R2这里是高电位，这个时候高电压就流过mos管，mos管导通。

次级线圈（下面的）连接R3的一端为负时，R3这里的电压比较低，mos管就通过R7放电，这个时候的mos管是截止的。

当占空比信号为低电平时，初级线圈的同名端为负。次级线圈同名端也为负,这时次级线圈（连接R3一端）为正，通过R7驱动mos管，mos管（下面的）导通，（上面的次级线圈同名端为负时）上面的mos管则是关断的。

因此，当IC发出占空比信号为高电平的时候，上面的mos管导通，下面的截止。为低电平时上面的mos管截止，下面的导通。

占空比信号通过变压器后，让两个mos管交替导通，这样就把高低电压进行了隔离，防止高低压干扰。  

******进大家庭⭕圈探讨回复:****** ******交流******

******![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_003_dc9b39eaee8a.other)******

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_007_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_005_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_004_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_006_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管变压器隔离驱动电路_你了解多少__images\img_008_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)