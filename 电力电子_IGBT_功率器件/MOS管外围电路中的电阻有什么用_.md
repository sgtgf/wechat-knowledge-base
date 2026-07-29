# MOS管外围电路中的电阻有什么用？

原创 电路一点通 2025-02-12 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/01pEOSbBx1\_mdzh0ZBz8pg](https://mp.weixin.qq.com/s/01pEOSbBx1_mdzh0ZBz8pg)

MOS管工作时，DG、GS间结电容充电，G极电压达一定程度导通，R7泄放并加速开关。关断时，R6、D3回路放电加速开关，R6减震荡。Rc吸收尖波，D5防反峰电压击穿MOS。去掉C11、R8、D5回路，电路波形大幅震荡。  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  
在电路中，MOS 管的 DG 和 GS 之间存在结电容，当电路工作时，DS 之间的电压会对这些结电容进行充电。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_001_95116060ce2d.jpg)

随着 G 极积累的静电电压不断升高，一旦达到一定程度，MOS 管就会导通，若电压过高，甚至会导致 MOS 管损坏。此时，R7为结电容提供泄放通道，同时可以加快MOS开关速度，其阻值一般为几千欧姆左右。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_002_27b8c4e638f6.jpg)

在MOS管关断时，R6 和 D3 构成的回路能够快速放掉栅极结电容的电荷，使得栅极电位快速下降，从而加快MOS管的开关速度。并且在高频环境下，MOSFET 的输入阻抗会降低，在特定频率范围内还会变成负阻并引发振荡，这时R6可以减少震荡。R6阻值一般较小，通常在几欧到几十欧之间。

另外，由于 MOS 管存在分布电感，在其关断时会产生反峰电压。Rc部分用于吸收尖波，给反峰电压提供了释放回路。并且，D5 能够在出现反峰电压时保护 MOS 管，防止其被过高的电压击穿。经实验，若去掉由 C11、R8 和 D5 组成的回路，电路的波形会出现大幅震荡。

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_006_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_007_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_005_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_004_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_003_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [MOS管导通、电路、应用工作原理图文（完整详解）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536956&idx=1&sn=60fa672ada6011024c0a79b47e99babf&scene=21#wechat_redirect)
    
-   [使用恒流源电路几个主要原因](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536947&idx=1&sn=375a783fdc3e815a0bae9b96c65e21a1&scene=21#wechat_redirect)
    
-   [防反接电路、防倒灌电路、过流保护和ESP保护](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536825&idx=1&sn=fedae5c74f2c7804d197982cc5b4a17f&scene=21#wechat_redirect)  
    
      
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管外围电路中的电阻有什么用__images\img_008_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

分享💬点赞👍在看❤️ 

  

以“三点”行动支持！每天中午11点28