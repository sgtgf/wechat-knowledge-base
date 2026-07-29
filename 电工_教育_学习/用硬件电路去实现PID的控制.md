# 用硬件电路去实现PID的控制

原创 电路一点通 2025-02-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/ZyIwshgLP-zieUM6Wn\_B2g](https://mp.weixin.qq.com/s/ZyIwshgLP-zieUM6Wn_B2g)

PID是一种非常经典的控制方法，该方法被广泛的应用在工业领域，通常PID算法是通过对希望控制的模拟量进行数字化采样后得到的数据与预先希望的数据进行做差，对得到的差值进行积分、微分与比例运算，然后加和得到控制量，本文希望通过模拟电子电路方式实现PID。  

**基本的电路图如下所示**

输入端电流通过电容对反馈的电压与参考电压的差值进行微分处理，并且借助电感对差值实现积分，而输入端电阻则是起到了比例运算的作用，反馈电阻则提供了调节放大倍数，实际上为了避免产生自激振荡，反馈电阻不可过大，该历程采用了一个电容与电感的组合作为控制系统为案例，实际仿真结果表明该系统对低阶系统能够起到控制作用。

![](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_000_b0edb3e8757e.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_001_5bce027f8d80.png)

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_002_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_006_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_004_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_003_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_005_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_007_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用硬件电路去实现PID的控制_images\img_008_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******