# 电刺激中H桥的自举电路设计不合理？

原创 电路一点通 2025-07-11 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/L2V\_r9CqkW\_do5oMmgKqsA](https://mp.weixin.qq.com/s/L2V_r9CqkW_do5oMmgKqsA)

> 详细解释了自举电路的工作原理，如何通过电容保持MOS管的VGS电压稳定，以及在H桥应用中的具体实现。特别提到原设计的不足并提出了优化方案——使用单独电源为电容充电

[![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\电刺激中H桥的自举电路设计不合理__images\img_000_2d8694898871.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

## 自举电路

自举电路用于MOS管的高端驱动时，基本原理是电容两端的电压差值不能突变，注意是两端的差值，不是一端的电压值不突变。如图所示

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\电刺激中H桥的自举电路设计不合理__images\img_001_2813965f5b81.jpg)

在H桥的自举电路中(完整电路未画出，还有另一半电路)，采用了两个NMOS管分别为U9和U10，其中NET4引脚连接负载，NET3与NET5分别为单片机的控制引脚，VCC为负载驱动电压。

NOMS管的驱动条件是VGS>V1（V1为mos导通电压），若要导通U9，需要NET5引脚的电压大于NET4处的电压，而NET4的电压在一开始是没有电压值，当导通后，负载的供电电压VCC作用于NET4处，若VCC小于NET5还可以继续工作，如果VCC为高电压，则无法继续工作NMOS管又返回截至状态。

利用电容两端电压不能突变的特性，在mos管的GS两端并联一个电容（图中电容随便取的不能作为参考）NET5引脚接到电容为电容充电，这样C32两端的电压值为3.3v，当mos导通之后，负载电压使NET4=VCC，由于电容电压不突变，即电容两端的相对电压值为3.3v，电容进行放电，此时电容连接mos管源极的电压值变为3.3v+VCC，则Vgs=Vg-Vs=3.3+VCC-NET4=3.3+VCC-VCC=3.3仍然可以导通。

同时，在电容与单片机引脚之间加一个二极管，因为当导通之后电容上端的电压为3.3+VCC，防止对单片机造成损坏，加一个二极管这样二极管下端的电压大于上端的电压值，二极管无法导通。

至此简单的自举电路已经结束了，简单来说就是利用电容电压不突变，利用电容的充放电过程，导通之前控制引脚为电容充电，负载导通之后，电容放电使VGS电压拉高；因此在实际应用中要不断的让电容充放电来维持VGS两端的电压。

在本文中给自举电容的充电设计不合理，修改后如下，单独一个电源vcc为电容充电最好。

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\电刺激中H桥的自举电路设计不合理__images\img_002_0fc7460b3a14.jpg)

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\电刺激中H桥的自举电路设计不合理__images\img_003_3d1789b7ada0.jpg)

  

自举电路就是由于mos管无法满足导通条件时才需要的，特别是当mos管应用在负载电路比如桥式电路时，如图U9的mos管的s极由于接负载，当U9导通时NET2处的电压被拉至VCC，当Vnet3-Vnet2不满足导通条件时，mos管就会截止；

![](D:\电脑文件\公众号知识库\电力电子_多电平变换器\电刺激中H桥的自举电路设计不合理__images\img_004_cdef55d8fbb4.jpg)

此时如果在高侧的mos管的s极(net2)与VCC之间串联一个电容，在mos管的GS之间并联，利用电容两端电压不会突变的特性，电容两端电压保持为VCC，高侧的U9导通时电容右侧的电压为负载电压，由电容特性电容左端电压为VCC+负载电压，这样二极管D6就不会导通，电容执行放电过程，mos管的G极又重新满足导通条件，相当于电容举了负载的电压在mos的G极上，通过自举电容和二极管完成导通。 

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[高端MOS为什么要自举电路？自举电容、分立元件电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528852&idx=1&sn=557433281289c22922c9b1ce3d3d07ad&scene=21#wechat_redirect)**
    
-   **[硬件工程师离职率低真相揭秘（附: 月薪2W简历）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549510&idx=1&sn=1014bbdf19a39d89aadedf589d57156d&scene=21#wechat_redirect)**
    
-   **[比亚迪汽车550万销量背后<国内外工厂基地分布>](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523203&idx=1&sn=8e5c2460cfa9c3acfe6beb163d48510d&scene=21#wechat_redirect)**
    
-   **[2025年新能源汽车品牌净推荐:理想、问界、小米前3](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523161&idx=1&sn=29f99e77de5865de1f5ab51eed4e4fbb&scene=21#wechat_redirect)**
    
-   **[25万级纯电SUV汽车对比（智界R7、小米YU7和特斯拉Model Y）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522862&idx=1&sn=336363fe74712ca6e65186ec3a482fcc&scene=21#wechat_redirect)**
    
-   **[常用典型电气控制电路300例-](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259841&idx=1&sn=a6a9aee5ab3cd87064c0da061b1968bc&scene=21#wechat_redirect)**
    
-   **[全面电子元器件识别·检测·维修·代换·应用-（375页）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259788&idx=1&sn=03c87513d1da24d4354528a8c9939c5d&scene=21#wechat_redirect)**
    
-   **[行车作业安全培训讲义PPT大揭秘，图文并茂带你避开致命陷阱](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484699&idx=1&sn=765b5eee1b504590589bc593c9318871&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_多电平变换器\电刺激中H桥的自举电路设计不合理__images\img_005_7e156544abd1.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

******进大家庭⭕圈探讨回复:****** ******交流******  

分享💬点赞👍在看❤️