# 三种LED驱动电路设计，负反馈在运算放大器中的作用

原创 电路一点通 2025-07-03 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/L1BWjKm7LmMw4Y7A0X8lyQ](https://mp.weixin.qq.com/s/L1BWjKm7LmMw4Y7A0X8lyQ)

> 介绍了恒流源和恒压源的概念，着重阐述了它们在驱动LED时的优势，包括LED发光强度与电流的关系。通过实例讲解了三种LED驱动电路的设计，如串联电阻、线性稳压器和压控电流源，并详细解释了负反馈在运算放大器中的作用及其对电流调节的影响。

#### 恒流源与恒压源

恒流源是指能够稳定的输出一定值的电流，而且由于电流源内部的阻抗相对于外部负载相当大，电流值也不随外部负载的变化，当外部电流发生变化时，电流源会调节电压重新达到稳定。

对于电压源也是一样的道理，电压源内部阻抗相对负载非常小，输出的电压不随外部负载的变化而变化，当外部电压变化时，电压源会调节电流从而使输出电压稳定。

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_000_b3d1ea412d91.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

#### 驱动led电流源设计

之所以采用电流源驱动led是因为：一、led的发光强度与电流强度有直接的关系；二、采用电流源驱动led的工作状态更加稳定。

简单介绍几种驱动led电路：

第一

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_001_0cf44b78ae0f.jpg)

  

电压源串联一定阻值的电阻组成最简单的驱动电路，至于图中的3.3v为单片机的引脚供电，所需的串联电阻需要根据led的工作参数：led工作的正向电压、以及该电压下的导通电流；

下图是我所用的一款红外led可以看到在100度以内的允许电流为20ma，

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_002_8c7a0a7d9461.jpg)

  

根据商家提供的规格书在20ma电流下的顺向电压为1.7v(这个led是双色的1.4v是另一个)，接下来可以计算串联电阻的阻值：

                                                        R=(VCC-V1)/I ;

其中:VCC为3.3v、V1=1.7v、I=20ma

得R=80欧姆，一般我们不需要让led工作在额定电流状态下的；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_003_34d2e992f1c5.png)

工作过程：当led由于其他的原因导致电流变大时，电阻R上的电压就会变大进而使led上的分压降低，电流也随着降低；

第二

使用线性稳压器作为电压源，在out和gnd之间并联一个电阻之后串联led，原理和第一同；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_004_e195a49dc704.jpg)

第三

使用压控电流源，利用运放和三极管搭建。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_005_fe4c10bc135c.jpg)

其中R4是限流电阻，R41是采样电阻，三极管的作用我认为是吧负载电流和控制电流分开；

由运算放大器的负反馈回路得知，运算放大器工作在线性区，

负反馈判断：从运算放大器输出开始假设是+，顺着回路走一圈若回到输出变为--则是负反馈调节，若是+则是正反馈调节，下图极性传递是新概念模拟电路中的图。![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_006_e4ebd541c3ab.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_007_ff46a263a688.jpg)

运算放大器工作曲线图如图，当运放存在负反馈即U+与U-的差值很小，工作在线性区且斜率为运算放大器的开环放大倍数，可以用运放的“虚短”、“虚断”分析。若没有负反馈则运放工作在饱和区，运放输出接近于运放电源电压不能用“虚短”分析但可以“虚断”。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_008_549dce97810c.png)

由虚短可以看出U+=U-=R41上端电压，I=U/R41;

至于三极管，有人有疑问这个三极管是如何导通的，假设U+=2V，那么三接管若想导通，则需要基极电压在2+0.7=2.7v就是运算放大器的输出电压，在这里三极管工作在哪个区还要看负载，这里基极电流简化处理IC=![\beta](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_009_51aa3dd39135.png)\*IB，IB很小R40分压不计，所以从线性区中分析，U0的电压应该工作在2.7v以上，确保三极管导通。

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_010_6fb66ed0ec81.png)

工作流程：当负载的电流变小时，R41分压变小，U-减小，U+-U-增大，Ube变大，be处电阻可以等效看为二极管的内阻曲线，Rbe减小工作电流变大，U-变大，电流变大。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[LED背光驱动芯片应用电路详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540851&idx=1&sn=d5e7e21ecf18e5f17bd60487df198103&scene=21#wechat_redirect)**
    
-   **[LED灯带方案：节省了外围驱动电路，但也有不足](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518536&idx=1&sn=912e9da25699a30f5cd2d97969ce68ba&scene=21#wechat_redirect)**
    
-   **[LED恒流驱动电路，工程师该如何设计？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518279&idx=1&sn=472d6ba6b7cc505c2f1e143827b3b815&scene=21#wechat_redirect)**
    
-   **[4 种电控界MOS管驱动电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541972&idx=2&sn=104858527137b78e803bb5414fd01cbf&scene=21#wechat_redirect)**
    
-   **[汽车车身结构零件图解，汽车开发流程详解](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522992&idx=1&sn=4dfa4cf43d6d9cc70557dcbabf2e573b&scene=21#wechat_redirect)**
    
-   **[电路的基础知识与基本测量（万用表）-PPT实训](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259607&idx=2&sn=f3c903f7428cdaacc0d4e5de4d040aa7&scene=21#wechat_redirect)**
    
-   **[不会工地三相五线制电路布线？看这里详解.ppt](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484308&idx=1&sn=77ba8bdd1783f604d043796c8fbddac4&scene=21#wechat_redirect)**
    

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\三种LED驱动电路设计_负反馈在运算放大器中的作用_images\img_011_ee231046b9cd.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

******进大家庭⭕圈探讨回复:****** ******交流******  

分享💬点赞👍在看❤️