# MOS管关断时栅源极的电压为负值？

原创 电路一点通 2025-02-08 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/iyayFXfka7imUgbjHnv3Uw](https://mp.weixin.qq.com/s/iyayFXfka7imUgbjHnv3Uw)

mos管有N沟道和P沟道两种类型。今天我们以N 沟道增强型 mos 管为例讲解，它由源极(S)、漏极(D)和栅极(G)组成。在正常工作时，当栅极-源极电压VGs大于开启电压Vth时，在栅极下方的氧化层下面会形成导电沟道，使得漏极和源极之间可以导通电流。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_000_1a4007a5faa7.jpg)

那么为什么在关断状态下栅源极电压要为负？

当mos 管要完全关断时，需要确保导电沟道消失。在理想情况下，只要VGs≤Vth，mos 管就会关断。但是在实际电路中，为了更可靠地关断mos 管，会使VGs为负值。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_001_5ccac63cee48.jpg)

这是因为在一些应用场景中，可能存在干扰信号或者mos 管自身的寄生电容等因素。当mos 管处于关断状态时，其栅极和源极之间存在寄生电容CGs。如果周围环境有干扰信号或者电路中其他部分的噪声等，有可能会使栅极电压升高。若此时VGs为正值且接近开启电压Vth，就可能会导致 mos 管误开启。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_002_00038e714d4b.jpg)

为了避免这种情况，将VGs设置为负值，使得栅极-源极之间的电场方向与开启时相反，能够更加有效地抑制导电沟道的形成，确保mos管稳定地处于关断状态。并且，负的Vgs可以快速地将栅极积累的电荷通过适当的电路(如栅极驱动电路)释放掉，防止由于电荷积累导致的误导通。

因此我们可以在不使用专用SiC-mosfet驱动芯片的前提下，将mos管的源极处电压设置为+5V，栅极电压随PWM信号变化在+23V~-5V范围内改变。当驱动信号为正时，栅源极电压差为18V ，mos管导通；当驱动信号为负时，Vgs=-5V ，mos管关闭。

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_003_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_004_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_007_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_005_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_006_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断时栅源极的电压为负值__images\img_008_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******