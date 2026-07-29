# 消除MOS管寄生二极管，使其双向导通可控

原创 电路一点通 2026-03-20 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/byqG2cIbWItmtJ2jEiZ5pQ](https://mp.weixin.qq.com/s/byqG2cIbWItmtJ2jEiZ5pQ)

#### 目录

-   一、Mos管DS之间的电流可以双向导通
    
-   二、抵消寄生二极管，使Mos管双向导通可控
    

* * *

## 一、Mos管 DS 之间的电流可以双向导通

### DS之间加正向 电源

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_000_11dd36f82a69.png)

### [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**  

### 现象效果

视频地址：

https://v-blog.csdnimg.cn/asset/af21508105341b9f82a440003a640d32/play\_video/a1cca8f3f9fe4b4858f88059963d1c92.m3u8

DS之间加正向电源

* * *

### 电路分析

#### 开关未闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_002_7e93e39db84d.png)

#### 开关闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_003_a61a3a65ccce.png)  
开关闭合后这里可以看到**该型号的MOS管导通压降为23mv**

* * *

### DS之间加反向电源

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_004_f921576bbfc7.png)

### 现象效果

  

视频地址：

https://v-blog.csdnimg.cn/asset/1f543aba31d091ef95b062e7e49ee3e3/play\_video/2a1ecb0e800a9bba38cdf6fed8962a35.m3u8

DS之间加反向电源

  

* * *

### 电路分析

#### 开关未闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_005_842103195918.png)  
这里在开关未闭合的情况下 MOS 管出现了一个压降可以看到是-379mv,其**原因是因为DS之间存在寄生电容，反向电源可以之间走寄生二极管形成回路。**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_006_8c86ea7ecb90.png)

#### 开关闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_007_e94270127f24.png)  
开关闭合后，MOS管导通，**相当于把寄生二极管短路**，因此此时MOS管压降为-23mv，比通过寄生二极管的压降小。  
**这里通过分析，由于寄生二极管，开关导通和闭合都无法起到对MOS管的控制，因此为了让MOS管双向导通可控，需要消除寄生二极管。**

* * *

## 二、抵消寄生二极管，使Mos管双向导通可控

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_008_b46ac804ddc4.png)

### 现象效果

  

  

视频地址：  

https://v-blog.csdnimg.cn/asset/cff4aef5619be8d2aa7b97980e6e02ae/play\_video/dcbe91b58e35121efb577e476647ed6f.m3u8

  

利用mos管寄生二极管抵消其寄生二极管让电流双向流通变得可控

  

* * *

#### 开关未闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_009_97d349356396.png)  
开关未闭合其电压为电源电压

#### 开关闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_010_e6b9b71b9636.png)  
可以看到当开关闭合后压降是46mv左右，就是两个MOS管压降的和。  
这里通过再加一个相同的MOS管，就可以实现对寄生二极管的抵消，从而使得MOS管双向导通可控。

▼ 往期精彩回顾 ▼

[电荷泵电路原理及设计全解析--从原理到设计一步步吃透](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566441&idx=1&sn=703d47dabc3f1ada53fb597e9ab48744&token=1988678586&lang=zh_CN&scene=21#wechat_redirect)

[常见以太网接口电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566547&idx=1&sn=246ed2b1522f547cb9ba0e3b3be0dafd&token=1988678586&lang=zh_CN&scene=21#wechat_redirect)

[混合动力汽车概念、分类，一图看明白](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536420&idx=1&sn=1eb156f6522a95bbcd9c2afb63366779&token=2066266255&lang=zh_CN&scene=21#wechat_redirect)

[汽车整车构造及布局图解](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536407&idx=1&sn=dd34941a5f046614edf81030e413804f&token=2066266255&lang=zh_CN&scene=21#wechat_redirect)

[汽车6万公里大保养：该花的花，该省的省（附避坑指南）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536361&idx=1&sn=e0ee8b25e83fc04fc47b14b8c85ed71f&token=2066266255&lang=zh_CN&scene=21#wechat_redirect)

[PLC 接线 + 原理图解（纯大白话版）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456266860&idx=1&sn=61cd84882298c1e5ee4caec71de17be3&scene=21#wechat_redirect)

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\消除MOS管寄生二极管_使其双向导通可控_images\img_011_1539b38016c7.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️