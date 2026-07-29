# 输入电源AD采样电路误差大及温度影响分析

原创 Jordon\_zhao 电路一点通 2025-07-04 11:36 广东

> 原文地址: [https://mp.weixin.qq.com/s/CeHMuFXQ2DVHGeD\_ozSXFA](https://mp.weixin.qq.com/s/CeHMuFXQ2DVHGeD_ozSXFA)

## **一、 问题点**

软件实际测试过程中发现，16V时，测试到的IO口处的电压偏离理论最小值，不符合理论，导致电源管理功能异常。

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_000_6e8cd2bd4fd3.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## 二、 电路

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_001_3d5f9045ea37.png)

## 三、 理论计算分析

通过建立Excel表格，计算理论的最大最小值，如下图所示  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_002_762ae8fee88a.png)

再对不同电压下的实际值进行测量，发现随着输入电压的增大，IO口处的电压，偏离理论最小值越来越大，意味着输入电压增大后，下拉电阻变小了，且非线性变化。  
对比原理图，发现能产生这种问题的元件只有稳压二极管，拿掉稳压二极管，发现电压恢复正常，说明是稳压二极管导致了这个问题。

## 四、 稳压二极管影响原因分析

通过查看稳压二极管规格书，发现在反向电压为1V时，其反向电流为7.5uA，则其等效电阻R=133K，足以改变原来的电阻分压电路；而且随着反向电压的增加，其反向电流会随着指数型变化。此外，温度变化也会影响其反向电流，如下图所示，因此，该稳压二极管必须拿掉。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_003_1dba6c91cfac.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_004_67ca783e292e.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_005_8dd30bb4d081.png)

## 五、 电路优化措施

由于IO口的极限电压为1.8V，取消掉稳压二极管后，电阻分压电路需要做相应改动，以保证26V时的分压不会烧毁IO口，通过计算，取最靠近的下拉电阻8.2K，计算结果如下图所示  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_006_1eac3c78c173.png)  
修改后电路如下所示：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_007_87162994da3b.png)

## 六、 总结

AD采样电路，不适合在IO处添加稳压二极管，其漏电流会因为电压和高温而变化，且非线性，影响AD采样结果，如果必须添加，也只能在分压电阻前端添加嵌位二极管，以起到保护作用。  
PS：1、如果要加钳位二极管，应该如何添加；2、此电路不添加钳位二极管，能否过ISO7637，待验证。

     注：本文作者@Jordon\_zhao，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[三种LED驱动电路设计，负反馈在运算放大器中的作用](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549266&idx=1&sn=7894170f749acb2450b29981c3ae4ce7&scene=21#wechat_redirect)**
    
-   **[MOS管驱动电路4种方案深度解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549266&idx=2&sn=22766689010484fdfc36a0292360dcdf&scene=21#wechat_redirect)**
    
-   **[汽车总线系统原理与检修、故障诊断-256页](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523017&idx=2&sn=52079be2889583ba2b405153c6919f90&scene=21#wechat_redirect)**
    
-   **[重卡汽车外观配件全景图，直观易懂！](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523012&idx=1&sn=68e2a1a65e10bcb2fb4fdafea647b24b&scene=21#wechat_redirect)**
    
-   **[教你识读电源电路图（交流降压、抗干扰、整流、滤波、稳压）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259665&idx=2&sn=abfad032452b4668edc5f791476dfe8e&scene=21#wechat_redirect)**
    
-   **[施工现场电焊机炸了！90%的事故都因那作死的操作，90%的人都在犯的一个操作！](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484554&idx=1&sn=38dcafe1ab09248c43a4af27ec363959&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\输入电源AD采样电路误差大及温度影响分析_images\img_008_12298d5c6032.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

******进大家庭⭕圈探讨回复:****** ******交流******  

分享💬点赞👍在看❤️