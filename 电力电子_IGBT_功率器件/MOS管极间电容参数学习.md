# MOS管极间电容参数学习

原创 电路一点通 2025-07-29 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/A1K-5nvkAl6-Oud0l03Taw](https://mp.weixin.qq.com/s/A1K-5nvkAl6-Oud0l03Taw)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管极间电容参数学习_images\img_000_228be257c7fc.png)

文章目录

-   1\. 输入电容（Ciss）
    
-   2\. 输出电容（Coss）
    
-   3\. 反向转移电容（Crss）
    
-   4，测试条件解读
    

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管极间电容参数学习_images\img_001_937cd34c9d81.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21&token=481978343&lang=zh_CN&poc_token=HOY9iGijMkzr1CKSpHLgG8W1_Bgs-tHsE9DJoS-D#wechat_redirect)

**[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管极间电容参数学习_images\img_002_ce1fcc30aa29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)👆查看更多目录👆**

  

* * *

## 前言

MOS管在电路设计中非常常用，用途包括DC-DC，电平转换等，所以对于MOS管得寄生参数，非常有必要学习  
根据提供的MOS管资料，查到如下寄生电容参数  
规格书中最大的输入电容才13pF,可以说是相当优秀了  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管极间电容参数学习_images\img_003_4fbdf4312a3e.png)

MOS管寄生参数  
  

MOS管的这三个电容参数分别对应不同极间电容，其定义和应用如下：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管极间电容参数学习_images\img_004_49e4b83eeec9.png)

## 1\. 输入电容（Ciss）

• 定义：Ciss = Cgs + Cgd（栅极-源极电容 + 栅极-漏极电容）  
• 作用：反映栅极驱动电路需要充/放电的总电荷量，直接影响MOS管的开关速度。  
• 应用影响：Ciss越大，栅极驱动电流需求越高，开关延迟时间越长。

## 2\. 输出电容（Coss）

• 定义：Coss = Cds + Cgd（漏极-源极电容 + 栅极-漏极电容）  
• 作用：表征漏极-源极间的等效电容，影响关断时的电压上升率（dV/dt）。  
• 应用影响：Coss越大，关断损耗越高（尤其在硬开关拓扑中），且可能引发电压振铃。

## 3\. 反向转移电容（Crss）

• 定义：Crss = Cgd（栅极-漏极电容的米勒电容部分）  
• 作用：体现栅漏极间的耦合效应，是米勒效应（Miller Effect）的核心参数。  
• 应用影响：Crss越大，米勒平台时间越长，可能导致开关波形振荡并增加驱动损耗。

## 4，测试条件解读

* * *

测试条件解读（VGS=0V, f=1MHz, VDS=5V）：  
• VGS=0V：测量时MOS管处于关断状态，电容值由物理结构主导（而非沟道电荷）。  
• 高频（1MHz）：高频测试可忽略电荷存储效应，更贴近实际开关场景的容性表现。  
• 低VDS电压（5V）：避免高电压下耗尽区变化对电容的非线性影响  
  

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[中日半导体设备材料零配件厂商对比(附：名单一览）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550278&idx=1&sn=71a46b04ca5040b782bdbbc0fd274dd6&scene=21#wechat_redirect)**
    
-   **[市电电路设计：强抗干扰能力、过零检测](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247514198&idx=3&sn=fcdd4b05f07cb17172106ba7ce01e1bf&scene=21#wechat_redirect)**
    
-   **[新能源汽车品牌天梯图，遥遥领先还得是特斯拉？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524164&idx=1&sn=b2e2057c90f6d6ea0e1ba53a8f463662&token=915621150&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[插电式混合动力(增程式)电动汽车51页-pptx](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524086&idx=1&sn=c2defc36630c645e9a9ea25719097d0b&token=915621150&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[双色图解万用表检测电子元器件检测方法和技巧-329页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260532&idx=1&sn=d41eac8904bb5e30f2be07f7bc7eef56&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管极间电容参数学习_images\img_005_4625a71759e3.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️