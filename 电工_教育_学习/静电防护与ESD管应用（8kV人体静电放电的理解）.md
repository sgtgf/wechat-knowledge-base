# 静电防护与ESD管应用（8kV人体静电放电的理解）

原创 电路一点通 2025-06-17 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/eUzfCyRLJsFWJkf19KdmGg](https://mp.weixin.qq.com/s/eUzfCyRLJsFWJkf19KdmGg)

从事电子行业的朋友都应该知道人体是带静电的，静电常常破坏电子元器件，很多电路中都需要做静电防护；

  

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\静电防护与ESD管应用（8kV人体静电放电的理解）_images\img_000_cbbab8ba0331.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

如图为一个8kV的人体放电模型，它由R1，C1组成，其电容存储了8kV的电压；![](D:\电脑文件\公众号知识库\电工_教育_学习\静电防护与ESD管应用（8kV人体静电放电的理解）_images\img_001_09ec2a7a32b4.png)

所以其储存的能量为Q=0.5\*C\*U\*U；   经计算约为0.008焦耳的能量；

如果把该人体模型如图片那样经过C2接到放大器BJT1上，那该模型就会对放大器产生如下影响：

-   1.在接触的瞬间，端点1到地之间电压差为8kV，这瞬间就会对C2充电，由于电压高达8kV，所以其充电电流从地经过三极管BE结向C2充电，该瞬间的充电电流是可以把三极管烧坏的。
    
-   2.当该三极管烧坏后，整个环路就开路了，人体放了携带的一部电后，依然携带着少量电能；
    
-   3.一般静电放电过程都是纳秒级别的，所以其产生的瞬间电流很大；
    
-   4.在端点1到地之间接电感是不能消除静电的， 学过高频电路的人都知道，这样环路就变成了LC谐振回路，最终电会变成磁，磁又变成电，在环路间反复，直至把能量耗尽。但一般在能量耗尽前，它就把三极管击穿了；
    

所以处理的办法就是在端点1到地之间加入一个ESD管，让电能从ESD管释放；

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电防护与ESD管应用（8kV人体静电放电的理解）_images\img_002_f7491e54e56f.png)

ESD放电管的原理是，当加在ESD管两端的电压高于一定直的时候，ESD管就会近似于短路，把电能拉到地去；

这里ESD的响应时间很重要，如果响应太慢，那可能会是三极管被击穿了，它都还未响应，这样的ESD保护电路是无用的；

最好在1ns左右；

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电防护与ESD管应用（8kV人体静电放电的理解）_images\img_003_3df07b502007.png)

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[5V过电压保护回路电路分析，看简单却是很多复杂原理基础](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547869&idx=1&sn=93e3b433c9faa3c15bcb2b6e03e14b6f&scene=21#wechat_redirect)**
    
-   **[新能源汽车部件名称图解：高压电系统构成](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521997&idx=1&sn=302fb4e2daff4b395ee95324b5967d7f&scene=21#wechat_redirect)**
    
-   **[大众/奥迪汽车电路图识读](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521997&idx=2&sn=db73277b5364cc21165f54a958098786&scene=21#wechat_redirect)**
    
-   **[高压配电室常见故障与处理-PPT-39页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456258920&idx=1&sn=3769ddbd5d894c9df9846c3e9afb369f&scene=21#wechat_redirect)**
    
-   **[不会工地三相五线制电路布线？看这里详解.ppt](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484308&idx=1&sn=77ba8bdd1783f604d043796c8fbddac4&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\静电防护与ESD管应用（8kV人体静电放电的理解）_images\img_004_6602968ad7f6.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️