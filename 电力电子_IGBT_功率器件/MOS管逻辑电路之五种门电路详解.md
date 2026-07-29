# MOS管逻辑电路之五种门电路详解

原创 电路一点通 2025-09-05 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/f1FcjnybnDnpcFHpTOK-sg](https://mp.weixin.qq.com/s/f1FcjnybnDnpcFHpTOK-sg)

## **MOS管逻辑电路，详细讲解，非门，与门，与非门，或门，或非门**

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

### 非门

一个输入，一个输出。输入为正时，输出为负。输入为负时，输出为正。因果相反。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_001_7f66e55eaa49.png)

#### 输入端为正（高电压）

输入端为正（高电平），电流电压经输入端到达两个MOS管的栅极（控制端）上管是PNP型MOS管，栅极（控制端）接正极（高电平）不导通。下端是NPN型MOS管，栅极（控制端）接正极（高电平）导通。电源地和输出端连通，输出端为负极（低电平）状态，LED灯两端都接负极没有电流电压差，LED灯无法被点亮。![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_002_6c38aef0ee47.png)

#### 输入端为负（低电压）

输入端接电源地（低电平）上端PNP型MOS管栅极（控制端）接地，上端PNP型MOS管导通，下端NPN型MOS管栅极（控制端）接地不导通。电流电压从电源正,流经PNP型MOS管，一脚流入三脚流出到输出端。此时输出端有电流电压，呈现高电平状态。电流电压经限流电阻到LED灯，LED灯两侧有电流电压差LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_003_004a0ad776c0.png)

### 与门

有两个或多个输入端，一个输出端。所有输入端为正（高电平），输出为正（高电平）。所有输入端为负（低电平），输出为负（低电平）。当有一个输入端为负（低电平），输出端为负（低电平）。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_004_93d1835ed656.png)

#### 所有输入端为正（高电平）

当所有输入端为正（高电平），输出为正（高电平）。电流电压经限流电阻到LED灯，LED灯两端有电压差，LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_005_d1564cd8f095.png)

#### 所有输入端为负（低电平）

当所有输入为地时（低电平），输出为低电平，LED灯两端没有电压差，无法被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_006_f1318783648c.png)

#### 输入1接地（低电平）

当输入端有一端接地时，输出端为负（低电平），LED灯两端都是低电平，LED灯不亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_007_6606411efe98.png)

#### 输入2接地（低电平）

同输入1接地一样，输出端为负（低电平），LED灯不亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_008_4bdf24200542.png)

### 与非门

有两个或多个输入端，一个输出端。所有输入端为正（高电平），输出端为负（低电平）。所有输入端为负（低电平），输出端为正（高电平）。当有一个输入端为负（低电平），输出端为正（高电平）。刚好和与门相反。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_009_646d91e24fb6.png)

#### 所有输入端为正（高电平）

输入端全部输入为正（高电平），输出为负（低电平），LED灯两端没有电流电压，无法被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_010_e1695087748e.png)

#### 所有输入端为负（低电平）

输入端都为负（低电平）状态，输出为正（高电平），电流电压经上管（两个PNP型MOS管，低电压导通）到输出端再流经限流电阻到LED灯，LED灯两端有电流电压差，LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_011_fd581ce50ee1.png)

#### 输入端1接地（低电平）

输入端1接地（低电平），输出端为正（高电平）。电流电压经上左侧PNP型MOS管到输出端，输出端为正（高电压）状态，电流电压经限流电阻到LED灯，LED灯两端有电流电压差，LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_012_a9f1cdfb90b9.png)

#### 输入端2接地（低电平）

输入端2接地（低电平）状态，输出端为正（高电平）。电流电压经上右侧PNP型MOS管到输出端，输出端为正（高电平）状态，电流经限流电阻到LED灯，LED灯两端有电流电压差，LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_013_d9f8cdc3bef5.png)

### 或门

有两个或多个输入端，一个输出端。所有输入端为正（高电平），输出端为正（高电平）。所有输入端为负（低电平），输出端为负（低电平）。当有一个输入端为正（高电平），输出端为正（高电平）。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_014_00ef1b51e1b7.png)

#### 所有输入端为正（高电平）

所有输入端为正（高电平），上端最右侧PNP型MOS管导通，电流电压经MOS管到达输出端，输出端为正（高电平），电流经限流电阻到达LED灯，LED灯两端有电流电压差，LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_015_967f66e832cf.png)

#### 所有输入端为负（低电压）

所有输入端为负（低电压），输出端为负（低电压）。LED灯两端没有电流电压差，LED灯无法被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_016_cec2748308f3.png)

#### 输入端1接地（低电平）

输入端1接地（低电平），输出端为正（高电平）。上端最右侧PNP型MOS管导通，电流电压经PNP型MOS管到输出端，输出端为正（高电平）。电流电压经限流电阻到LED灯，LED灯两端有电流电压差LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_017_e31de0f7d63b.png)

#### 输入端2接地（低电平）

输入端2接地（低电平），输出端为正（高电平）。上端最右侧PNP型MOS管导通，电流电压经PNP型MOS管到输出端，输出端为正（高电平）。电流电压经限流电阻到LED灯，LED灯两端有电流电压差LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_018_6bbb9ca0174c.png)

### 或非门

有两个输入端，一个输出端。两个输入端都为正（高电平），输出端为负（低电平）。两个输入端都为负（低电平），输出端为正（高电平）。一个输入端为负（低电平），输出端为负（低电平）。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_019_7a52f914375a.png)

#### 所有输入端为正（高电平）

所有输入端为正（高电平），输出端为负（低电平），下端左右并连的两个NPN型MOS管导通，电源地（低电平）经两个MOS管到输出端，输出端为负（低电平），LED灯两端没有电流电压差，LED灯无法被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_020_ac6ab4c578be.png)

#### 所有输入端为负（低电平）

所有输入端为负（低电平），输出端为正（高电平）。电流电压经上端串连的两个PNP型MOS管到输出端，输出端为正（高电平),电流电压经限流电阻到LED灯，LED灯两端有电流电压差，LED灯被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_021_f8fc931e7759.png)

#### 输入端1接地（低电平）

输入端1接地（低电平），输出端为负（低电平）。电源地经下端右侧NPN型MOS管到输出端，输出端为负（低电平），LED灯两端没有电流电压差，LED灯无法被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_022_bd4448b8474c.png)

#### 输入端2接地（低电平）

输入端2接地（低电平），输出端为负（低电平）。电源地经下端左侧NPN型MOS管到输出端，输出端为负（低电平），LED灯两端没有电流电压差，LED等无法被点亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_023_7d67c8b8c43d.png)

### 个人总结

逻辑门电路介绍完毕，总共五种。**非门**，因果相反是为非，你正我负，你负我正，就是反着干。**与门**，都正就正，都负就负，有一个负也负，能懒就懒，能不动就不动。**与非门**都正我就负，都负我就正，就是对着干，有一个正我就正，让你们拿我没办法。**或门**都正就正，都负就负，有一个正就正，是个勤快的好宝宝。**或非门**都正我就负，都负我就正，有一个负我就负，就是调皮又懒惰。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [防反接电路实现过程，精细认识电路电流回路是关键](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551653&idx=1&sn=60430751ac1c8c889e3e3dbd90857185&scene=21#wechat_redirect)
    
-   [MOS管烧毁，90%以上的硬件工程师都会遇到的问题！](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551521&idx=1&sn=f397ac1af8c2dd9eb7b10979a299c653&scene=21#wechat_redirect)
    
-   [【送书开奖名单】-《高速数字设计》（基础篇）》](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551575&idx=2&sn=14da000e49339899b488526548ee8b06&scene=21#wechat_redirect)
    
-   [国之重器！红旗CA7601J 再担大任（历年阅兵检阅车盘点）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526317&idx=1&sn=a55fdf5cb09eb240fec55d530637f4fa&token=2075625972&lang=zh_CN&scene=21#wechat_redirect)
    
-   [一家被低估的国产造车公司-吉利汽车现状](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526156&idx=1&sn=a490f1ebace1bd6d889104665c1df45d&token=2075625972&lang=zh_CN&scene=21#wechat_redirect)
    
-   [学电工技能从入门到成才【356页-PDF】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456261769&idx=2&sn=39cbd85d9210e4b7d74dd599938e71d3&scene=21#wechat_redirect)
    

  

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管逻辑电路之五种门电路详解_images\img_024_cc5edb7c6eb4.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️