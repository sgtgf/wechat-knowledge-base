# RC高/低通滤波器电路图及计算公式

原创 电路一点通 2025-03-25 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/pXytm-RCgIexyxPoq3hdLg](https://mp.weixin.qq.com/s/pXytm-RCgIexyxPoq3hdLg)

**一、引出**

        在一些信号电路中通常会存在一些我们不需要的噪声，比如高频噪声。这个时候就需要滤波器来处理他们了。

****推荐**  ![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_004_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_002_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_001_659969ac15d4.png)**![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_000_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_003_659969ac15d4.png)****  

[![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_005_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  

**二、滤波器电路图及其截止频率计算公式**

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_006_da71394e3c60.png)

        一阶RC滤波器电路图如上，截止频率公式为：f=1/(2πRC)

        如R=51Ω，C=22uF，则截止频率f=141Hz。意味着，高通RC滤波器会对低于141Hz的信号起抑制作用。低通滤波器会对高于141Hz的信号起抑制作用。（实际运用时，要留有余量，因为到达截止频率时，信号已经产生了3dB衰减，一般选取的截止频率值要比实际有用信号的最高频率稍大一些）

  

**三、滤波器的阻抗匹配**

        运用上面的方法，可以很简单的设计RC滤波器，可是你会发现同一个频率可以有很多取值，比如R=51Ω，C=22uF，也可以换成R=510Ω，C=2.2uF，它们有什么区别呢？把实际的电路搭出来后，你会发现输出的波形和输入的波形，幅值不同，这是为什么？

        这就涉及滤波器阻抗匹配的问题了，即滤波器自身也存在阻抗，会对信号起分压的作用，因此会导致输出信号降低。

        以上面的低通滤波器为例，假设前级电路的输出阻抗为Ro1，后级电路的输入阻抗为RL2，那么等效电路图变为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_007_15c50e8772d8.png)

        我们先来考虑低通滤波器的输入阻抗，等效图精简为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_008_ad5b00826e84.png)

        滤波器输入阻抗：![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_009_764516d8eb49.png)

        则图中Point7处电压为：![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_010_d528cc38d990.png)

        再来看滤波器输出阻抗与负载之间的关系，等效图为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_011_0f6ed5f1e6a1.png)

        图中Point 3出电压：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_012_e8c0ab87e785.png)

        根据V7和V3的公式，就可以得出输入信号与输出信号的关系，由此可知滤波器R、C值的选取对于滤波器的输出影响很大。R、C参数的选取很重要。

  

四、R、C的选取方式

        在计算后截止频率的情况下，R、C的取值可以成倍变化，如51Ω、22uF变为510Ω、2.2uF或5.1欧姆、220uF。为得到幅值衰减最小的波形，要保证：

1、滤波器的阻抗R1+Xc大于前级输入阻抗，越大越好。

2、滤波器的电容阻抗Xc远远小于后级输出阻抗RL2。

注：内容来自http://www.elecfans.com/instrument/631912.html 电子发烧友《详谈一阶RC低通滤波器如何过滤高频噪声》整理而成

  

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[一图看懂反激式电源元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[单片机接口保护电路设计方案【deepseek设计】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542243&idx=2&sn=cfd0574da460a177cc0b075c820e55c2&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[接口电路防护设计要点解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542223&idx=1&sn=2009778e26951209ff4cb6d26251f0aa&scene=21#wechat_redirect)**
    

[**![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\RC高_低通滤波器电路图及计算公式_images\img_013_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**