# 5V过压保护电路分析：稳压管、三极管、MOS管

原创 LR梁锐 电路一点通 2025-09-10 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/HMHEMwoLY5wnNAZO0kzP2Q](https://mp.weixin.qq.com/s/HMHEMwoLY5wnNAZO0kzP2Q)

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [稳压二极管的串联与并联](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551866&idx=1&sn=e2a316d07dbbee1b0f728a06086047cb&scene=21#wechat_redirect)
    
-   [电路设计：复位电路、时序、时钟电路、MCU模块](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550821&idx=1&sn=675ab7a68c647ca8fbe2a5b8c3357f70&token=1905853560&lang=zh_CN&scene=21#wechat_redirect)
    
-   [小鹏新P7汽车核心零部件供应商一览](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526538&idx=1&sn=bc3bc5debd1585722f392d2e30814e90&token=737071927&lang=zh_CN&scene=21#wechat_redirect)
    
-   [10-100W硬派越野，更爱这辆“东风猛士”](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526405&idx=1&sn=fb4bba6c4116d2f994e91513a9eab072&token=737071927&lang=zh_CN&scene=21#wechat_redirect)
    
-   [电工公式、 口诀、各种维修方案汇总](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456261417&idx=1&sn=30a37b5752ea174f1bc44c22c14f81c4&scene=21#wechat_redirect)
    

采用5V供电的设备，当供电电压因各种原因变得过高，可能会烧坏设备。

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_000_3103f993b660.jpg)

▲ 接入过高电压可能导致电路烧毁

于是5V过压保护电路有了用武之地。

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_001_672a4f81ea41.png)

▲ 5V过压保护电路

**一、电路分析**

**1、当输入电压 Vin ＜ 5.1V 时：（下图以输入电压 Vin = 5V 举例）**

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_002_c76d00507571.png)

D1是5.1V稳压管，此时输入电压Vin才5V，小于5.1V，所以稳压管D1未进入稳压状态，不导通。

5.1V稳压管不导通，导致三极管Q2的b极和e极都是5V，也就是Vbe = 0，所以三极管Q2也不导通。

MOS管Q1的g极被电阻R3拉到0V，MOS管Q1的 Vgs = 0V - 5V = -5V, 所以MOS管Q1导通， Vout电压等于5V，对后级电路正常供电。

**2、当输入电压Vin在5.1V到5.7V之间时：（下图以输入电压 Vin = 5.4V 举例）**

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_003_0e6ad4a570c7.png)

此时输入电压Vin ＝ 5.4V，大于稳压管D1的稳压值5.1V，所以稳压管导通并稳压在5.1V。

此时三极管Q2的 Vbe = 5.1V - 5.4V= -0.3V。PN结的导通电压要求Vbe达到-0.6V，所以三极管Q2仍然不导通。

MOS管Q1的g极被电阻R3拉到0V。MOS管Q1的 Vgs = -5.4V, 所以MOS管Q1导通， Vout电压等于5.4V，对后级电路正常供电。

**3、当输入电压 Vin > 5.7V时：（下图以输入电压 Vin = 5.8V 举例）**

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_004_fc1b87d20fb5.png)

此时存在3条电流路径。

-   红色的电流路径①：电阻R1两端的电压 = 5.8V - 5.1V = 0.7V，流过0.7mA的电流。
    
-   粉色的电流路径②：三极管Q2的Vbe = 5.2V - 5.8V = -0.6V，三极管Q2被打开，并饱和导通。
    
-   蓝色的电流路径③：三极管Q2被打开，流过R3的电流 = 5.8 / 4.7 = 1.23mA。
    

此时MOS管Q1的 Vgs = 0，所以MOS管Q1不导通，即此时“5V过压保护电路”认为输入电压Vin已经过高，**将输出电压Vout关断，从而保护了后面的负载电路。**

输入电压Vin与输出电压Vout的关系大致如下：

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_005_5a889f70b1d5.jpg)

**二、电路扩展**

如果要改为其他电压的过压保护电路，主要是换用不同稳压值的稳压管就行。

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_006_1b90d085259d.png)

▲ 某一系列的稳压管有多种稳压值可选

换了稳压管，当然还要对应留意其他元件的参数，看是否要修改。

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_007_3de642a7f06f.jpg)

▲ 一种玻璃管封装的稳压管

比如：

-   1、稳压管D1的限流电阻R1是否要调整。电流太小稳压管不导通，电流太大则电路功耗增加。
    
-   2、三极管Q2的基极限流电阻R2是否要调整。
    
-   3、MOS管Q1的Vgs是否还在合理范围。
    

**三、最后**

大学应届毕业生找工作，这种电路可能会考。

面试官可以同时考察应届生对稳压二极管、三极管、MOS管应用的掌握情况。

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_008_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  
#电路一点通 诚邀您一起做公益！

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_009_1e7faab63247.png)

  

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\5V过压保护电路分析_稳压管_三极管_MOS管_images\img_010_4e7f01e13b90.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️