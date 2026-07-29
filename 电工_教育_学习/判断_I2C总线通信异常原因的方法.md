# 判断 I2C总线通信异常原因的方法

原创 电路一点通 2025-04-08 11:36 广东

> 原文地址: [https://mp.weixin.qq.com/s/FRTE8m\_sP2-ZEqJHBDdQZw](https://mp.weixin.qq.com/s/FRTE8m_sP2-ZEqJHBDdQZw)

****问题：**此问题由某客户提出，应用处理器 AP 与 MCU 进行 I2C 通信，通信会经常发生异常，需要定位原因.  
**

**调研：首先需要定位的是因为哪个器件发的波形不正确导致通信异常，所以我们在 I2C 线路上增加了以下处理，增加 2 个电阻去测试波形:**

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

![st-img](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_001_ba025e15c518.png)  
  
( \]6 y% C  j/ G  
测试波形如下示意图:  
5 ?5 p2 w. F! {6 H" \_\* J0 z: F  
![st-img](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_002_8e9e44ef88e0.png)  
  
**结论 :**  
通过示波器的 I2C 信号电平的不同，我们可以快速的判断 I2C 的总线的信号哪个是由 AP 发出，哪个是由MCU 发出，来判断哪个器件发送了异常信号导致总线通信异常.公众号@电路一点通

## 判断 I2C 总线通信异常原因的方法1：

如何通过示波器检查I2C总线通信异常，强调了主机和从机低电平电压差异、电阻配置对通信的影响。针对STM32F4xxx的I2C总线挂起异常，提出了复位外设和初始化端口的处理方法。同时讨论了I2C死锁情况及相应的恢复技巧，包括主从设备间的同步问题和死锁预防。

至于如何在i2c总线中如何使用还没有弄明白。

使用方法记录

阻值分配

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_003_c4df62d0d3ab.png)

图中的倍数关系很重要。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_004_3c2d234e8fe3.png)

注意上图中低电平分压为三分之一

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_005_3d654dcd2539.png)

上图中低电平分压为十一分之一

  

总结：

①  需要使用示波器查看，不能使用逻辑分析仪。

②  从机和主机的差别再低电平电压不同。

③  如果从机没有回复则没有那个1/3电压的存在。

④  必须是主机边串联的电阻阻值较小。否则从机收到的低电平电压太高不无法判断为有效信号。公众号@电路一点通

⑤  图中的10R是倍数关系，不是10Ω电阻。（实际使用可以考虑4.7K和470Ω的组合进行使用用）

实际使用电阻使用ttl的0.8v下限计算所得的电路如下图（图中不再是1/3  和1/11 ）

从器件时24%  主器件时12%  当然此组阻值是在3.3v供电条件下的阻值分布方案。（从理论：如果都正确的化下面的电路时可以正常通信的） 而此组阻值都是常见阻值电阻比较容易获得。

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_006_de31d20c1879.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_007_3c04355fe89a.png)

 计算表格如上图。

  

补充使用记录

**STM32F4xxx的I2C总线挂起异常处理**

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_008_23b6aa5c170a.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_009_bd4085a482f8.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_010_36daea4a17cd.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_011_d2643323aab9.png)

## I2C死锁及恢复方法

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_012_c279a44991f8.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_013_f607b61c0e51.png)

# 判断 I2C 总线通信异常原因的方法2

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_014_a5c7133a3156.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_015_b2c5414256aa.png)

公众号@电路一点通

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_016_77fffb05665c.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_017_c44d96532180.png)

  

# 判断 I2C 总线通信异常原因的方法3

电路图如下

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_018_927ebc6e8140.png)

双侧悬空

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_019_f5b18d83e814.png)

左侧闭合

![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_020_121f97c9cfc0.png)

右侧闭合

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_021_6089dae62635.png)

双侧闭合

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_022_7bb3399f2097.png)

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_023_6125427909e7.png)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   **[DC-DC电源设计8个要点](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543419&idx=1&sn=d8fb19da6f97bfff57a825f23031e657&scene=21#wechat_redirect)**
    
-   **[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542788&idx=1&sn=fdcc1b5655491fb9d2946d38863dedf6&scene=21#wechat_redirect)[LDO设计要点](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542788&idx=1&sn=fdcc1b5655491fb9d2946d38863dedf6&scene=21#wechat_redirect)**
    

-   **[汽车主要参数，一文全懂](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516431&idx=1&sn=581bb53f27db3a501e7c6f7a70779cd0&scene=21#wechat_redirect)**
    
-   [汽车变速箱档位数量大揭秘：10AT、CVT无级变速，双离合7档位？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516388&idx=1&sn=03f756370921cdce285bcc983ef12af6&scene=21#wechat_redirect)
    
-   [高压共轨柴油机燃油系统构成和控制原理图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516388&idx=2&sn=bc9c4dfcf7b977c19672e57e1ef771b2&scene=21#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\判断_I2C总线通信异常原因的方法_images\img_024_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**