# I2C电平转换电路

原创 电路一点通 2025-03-06 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/LarVY9jj3T5M9RnCtgli1A](https://mp.weixin.qq.com/s/LarVY9jj3T5M9RnCtgli1A)

项目中，由于CPU所用的IO的电压比较低，很多IO的电压域的电压都是1.8V，而外围设备电路通常所用的电压是3.3V和5V，当CPU需要与外围设备通信时就会出现通信接口电压不匹配的情况，此时就需要对通信接口进行电平转换。下面我们以I2C接口电路进行分析，电路如下：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_000_81eac15b41c5.png)  
那么它是如何实现不同电压域之间的双向通信的呢？

**原理分析**  
为了便于分析，我们使用其中一根线进行分析，下面是I2C的数据线原理图：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_001_a072809f32b2.png)

-   当SDA1输出高电平时：MOS管Q1的Vgs = 0，MOS管关闭，SDA2被电阻R2上拉到3.3V。
    
-   当SDA1输出低电平时：MOS管Q1的Vgs = 1.8V，大于导通电压，MOS管导通，SDA2通过MOS管被拉到低电平。
    
-   当SDA2输出高电平时：MOS管Q1的Vgs不变，MOS维持关闭状态，SDA1被电阻R1上拉到1.8V。
    
-   当SDA2输出低电平时：MOS管不导通，但是它有个寄生二极管！MOS管里的寄生二极管把SDA1拉低到低电平，此时Vgs约等于1.8V，MOS管导通，进一步拉低了SDA1的电压。
    

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_006_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_003_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_002_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_005_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_004_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_007_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## **一点通推荐**

-   [  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=1&sn=26e51cee715c5eff0716b0edf4a1b138&scene=21#wechat_redirect)
    

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[三极管开关电路设计思路假设成真，还要保证啥条件？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541116&idx=1&sn=45df014db83cebd9aa20da1bb83c406b&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[LED背光驱动芯片应用电路详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540851&idx=1&sn=d5e7e21ecf18e5f17bd60487df198103&scene=21#wechat_redirect)**
    
-     
    

-   [汽车零件名称全命名（发动机结构、变速器、制动系统、底盘、电器）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486962&idx=1&sn=84064cf369d2f834fe72f17cde4c2d1a&scene=21#wechat_redirect)  
    
-   [汽车空调系统主要零件图（压缩机、冷凝器、蒸发器、节流部件）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487155&idx=1&sn=c827534320f161c465b38d565b847ec5&scene=21#wechat_redirect)
    
-   [汽车底盘部件结构图解：底盘、变速器、离合器、悬挂、制动、转向](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487235&idx=1&sn=ce96f821e25b1e8ffc4136fc211db631&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\I2C电平转换电路_images\img_008_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**