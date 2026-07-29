# 几种MOS管驱动电路的方法，你会？

原创 电路一点通 2025-03-23 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/m6OQy0HQ4j9xs8kXaCUiVA](https://mp.weixin.qq.com/s/m6OQy0HQ4j9xs8kXaCUiVA)

MOS管因为其导通内阻低，开关速度快，因此被广泛应用在开关电源上。而用好一个MOS管，其驱动电路的设计就很关键。下面分享几种常用的驱动电路。  

****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_000_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_001_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_002_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_003_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_004_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_005_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

**1.电源IC直接驱动**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_006_59e569e78bca.jpg)

电源IC直接驱动是最简单的驱动方式，应该注意几个参数以及这些参数的影响。  

①查看电源IC手册的最大驱动峰值电流，因为不同芯片，驱动能力很多时候是不一样的。  
②了解MOS管的寄生电容，如图C1、C2的值，这个寄生电容越小越好。如果C1、C2的值比较大，MOS管导通的需要的能量就比较大，如果电源IC没有比较大的驱动峰值电流，那么管子导通的速度就比较慢，就达不到想要的效果。

**２.推挽驱动**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_007_e33d9416057b.jpg)

当电源IC驱动能力不足时，可用推挽驱动。  

这种驱动电路好处是提升电流提供能力，迅速完成对于栅极输入电容电荷的充电过程。这种拓扑增加了导通所需要的时间，但是减少了关断时间，开关管能快速开通且避免上升沿的高频振荡。

**３.加速关断驱动**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_008_bc8127877311.jpg)

MOS管一般都是慢开快关。在关断瞬间驱动电路能提供一个尽可能低阻抗的通路供MOSFET栅源极间电容电压快速泄放，保证开关管能快速关断。  

为使栅源极间电容电压的快速泄放，常在驱动电阻上并联一个电阻和一个二极管，如上图所示，其中D1常用的是快恢复二极管。这使关断时间减小，同时减小关断时的损耗。Rg2是防止关断的时电流过大，把电源IC给烧掉。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_009_72afeec5fb33.jpg)

如上图，是我之前用的一个电路，量产至少上万台，推荐使用。  

用三极管来泄放栅源极间电容电压是比较常见的。如果Q1的发射极没有电阻，当PNP三极管导通时，栅源极间电容短接，达到最短时间内把电荷放完，最大限度减小关断时的交叉损耗。  
还有一个好处，就是栅源极间电容上的电荷泄放时电流不经过电源IC，提高了可靠性。

**４.隔离驱动**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_010_a19674899127.jpg)

为了满足高端MOS管的驱动，经常会采用变压器驱动。其中R1目的是抑制PCB板上寄生的电感与C1形成LC振荡，C1的目的是隔开直流，通过交流，同时也能防止磁芯饱和。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\几种MOS管驱动电路的方法_你会__images\img_011_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**