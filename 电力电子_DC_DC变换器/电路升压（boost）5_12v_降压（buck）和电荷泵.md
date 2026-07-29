# 电路升压（boost）5-12v，降压（buck）和电荷泵

原创 电路一点通 2025-09-23 11:45 广东

> 原文地址: [https://mp.weixin.qq.com/s/Or0x\_5JeQM3a9oFTmNmE0Q](https://mp.weixin.qq.com/s/Or0x_5JeQM3a9oFTmNmE0Q)

> 电源转换技术：升压、降压与电荷泵原理

## 升压电路

升压型又称为 BOOST 控制器，  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_000_6287c05f3405.png)

### 分析过程

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_001_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

###   

#### 不加二极管和电容

简单的过程，但电压不稳定，所以**后面加入了二极管和电容**。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_002_e18ac6ee25f5.png)

`1. MOS管相当于一个频繁通断的开关   2. 当中间MOS管闭合，电感电流在短时间上升到2.4A。   3. 这时断开开关，由于电感的电流不能突变，所以2.4Ax5Ω=12v，也就是负载端电压增加   4. 当再次闭合，负载电压依然是0   `

-   1
    
-   2
    
-   3
    
-   4
    

#### 加入电容和二极管后

需要注意的是负载的**消耗功率要不大于电源的输出功率**。电容维持负载电压，电感维持工作电流。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_003_1486423893f1.png)

## 降压电路

**降压型又称为 BUCK 控制器**  
参考：https://www.bilibili.com/video/BV1Jv411P7Qc/?spm\_id\_from=333.999.0.0&vd  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_004_ac8865c61873.png)

### 原理

对**输入的高电压**使用\*\*频率开关得到到PWM输出等效电压，如下图所示  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_005_d2d5d52aa0c8.png)

### 1，为了维持输出负载电压稳定，电阻（负载）并联电容

可以阻止**开关闭合**，导致负载端的电压突变，由于**电容两端电压和闭合后电压**不同，**电容两端瞬间电压变化很大**，**会导致电流很大**。开关断开后，导致电容会将储存的能量释放。这时电容相当一个电源，但这个电源的电压不是恒定的。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_006_626f5cf7a39b.png)

### 2，使用电感限制电容导致的突变电流

为了防止**电感**两端由于**电流的突变导致的电压过大**，需要将MOS管闭合后的形成一个回路，下图中在5v位置接一根导线到地就是这个作用，但是这种**电路明显不对\*，不可能直接接地\*。所以在接地的线路中**加一个反向二极管\*\*，限制了电流的方向，才能够满足电感的放电回路。这个二极管也称为**续流二极管**。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_007_89301925a628.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_008_d415e0c36158.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_009_96dc3a300591.png)

## 降压电路

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_010_d2e530972e80.png)

## 同步整流降压芯片

### converter

内部**集成两个MOS管**的同步整流，**小于5A输出**。称为converter，转化器  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_011_d7f34fff0349.png)

### controller

没有集成两个MOS管，用于**电流比较大**的控制电路  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_012_d5d10a83e1f1.png)

## 可以参考降压电路原理

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_013_5a597a41d962.png)

## 电荷泵

参考：https://www.bilibili.com/video/BV1xX4y1F7Lp/?spm\_id\_from=333.337.search-card.all.click&vd  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_014_0392818263c7.png)  
  

上面**最大的问题是开关频率**。下面是一个实际电路完成升压过程  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_015_18006b66559b.png)  
下面电路能够维持的条件是**充电功率大于放电功率**

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_016_50e82870ea90.png)  
  

多级电荷泵  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_017_b1e47043a4cc.png)

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[拆个微波炉（机械）看内部结构部件，清晰修理流程](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552072&idx=1&sn=b4c30d3fb2905a812d97615887628c43&scene=21#wechat_redirect)**
    
-   **[有效防反接电路--MOS管的妙用!](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552030&idx=1&sn=7882eee80c98cb6372ffbea28ca87548&scene=21#wechat_redirect)**
    
-   **[电压转4-20mA电流模块电路设计原理解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552028&idx=1&sn=4efab3ff8c40346bd329c06e7c0d7ed4&scene=21#wechat_redirect)**
    
-   **[160万年薪？小鹏汽车在华工上演“BOSS直聘”，大师兄抛橄榄枝](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526945&idx=1&sn=43be9bf5d9e22c4a58094f236c35b34f&token=11890742&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[你以为的坐在宝马车 vs 现实生活中的“宝马”](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526905&idx=1&sn=5abd49a2f3a88ee8f4035b9679d835ff&token=11890742&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[酒饭局-电工电气人高情商回复](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456262031&idx=1&sn=bc54db171d3a7473956dc5bddc5c883c&scene=21#wechat_redirect)**
    
-   **[全彩图解电工技术与常用工具技能-416页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456262032&idx=1&sn=a4addaee035fce4fac145e0863bf5775&scene=21#wechat_redirect)**
    
-   **[自动化仪表识读图与安装-【PPT资料】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456261999&idx=1&sn=0bc4e0a9e0a6ae6fad8eabb46add1fa1&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路升压（boost）5_12v_降压（buck）和电荷泵_images\img_018_1362d44d20de.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️